const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const fetch = require("node-fetch");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const brevoClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = brevoClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const PORT = process.env.PORT;

app.post(
  "/webhook/stripe",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    let event;

    try {
      const sig = req.headers["stripe-signature"];
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("⚠️ Webhook signature verification failed.", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerEmail = session.customer_details.email;

      console.log(
        `✅ Payment successful for ${customerEmail}. Creating iSpring account...`
      );

      const candidateQuery = `SELECT firstName, lastName FROM candidates WHERE email = ?`;
      const [candidate] = await promisePool.query(candidateQuery, [
        customerEmail,
      ]);

      if (!candidate || candidate.length === 0) {
        console.error("Candidate not found.");
        return res.status(404).send("Candidate not found.");
      }

      const { firstName, lastName } = candidate[0];
      const randomPassword = "Password@122";

      const ispringAccount = await registerISpringUser(
        firstName,
        lastName,
        customerEmail,
        randomPassword
      );

      if (!ispringAccount) {
        return res.status(500).send("Failed to create iSpring account.");
      }

      res.status(200).send("iSpring account created and email sent.");
    } else {
      res.status(400).send("Unhandled event type.");
    }
  }
);

const uploadDirectory = "./public/images";
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ limit: "100mb" }));
app.use("/public/images", express.static(uploadDirectory));

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//set directory of where we store files

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Adjust the limit based on your app's needs
  queueLimit: 0, // No limit on queued connection requests
});

const promisePool = pool.promise();

// Test connection after creating promisePool
(async () => {
  try {
    await promisePool.query("SELECT 1");
    console.log("Database connected successfully!");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
})();

// Create the upload directory if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(express.static(path.join(__dirname, "../dist")));

const validateEmailFirst = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if the email already exists
    const checkEmailQuery =
      "SELECT COUNT(*) AS count FROM candidates WHERE email = ?";
    const [emailCheckResult] = await promisePool.query(checkEmailQuery, [
      email,
    ]);

    if (emailCheckResult[0].count > 0) {
      return res.status(400).json({ Error: "Email already exists" });
    }

    next(); // Proceed to the next middleware if email is valid
  } catch (error) {
    console.error("Email Validation Error:", error);
    res.status(500).json({ Error: "Server error occurred" });
  }
};

// File upload middleware
const uploadMiddleware = upload.fields([
  { name: "file1", maxCount: 1 },
  { name: "file2", maxCount: 1 },
  { name: "file3", maxCount: 1 },
  { name: "file4", maxCount: 1 },
  { name: "file5", maxCount: 1 },
]);

app.post(
  "/create",
  validateEmailFirst, // Email validation middleware
  (req, res, next) => {
    uploadMiddleware(req, res, (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res.status(500).json({ Error: "File upload failed" });
      }
      next(); // Proceed to the main handler after file upload
    });
  },
  async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email, // Applicant's email
        course,
        lng,
        phone,
        date,
        country,
        city,
        gender,
        address,
        zip,
        processingAuthorization,
        withdrawalAuthorization,
        advertisingAuthorization,
      } = req.body;

      // Check if the email already exists
      const checkEmailQuery =
        "SELECT COUNT(*) AS count FROM candidates WHERE email = ?";
      const [emailCheckResult] = await promisePool.query(checkEmailQuery, [
        email,
      ]);
      if (emailCheckResult[0].count > 0) {
        return res.status(400).json({ Error: "Email already exists" });
      }

      // Collect uploaded file paths
      const uploadedFiles = {};
      ["file1", "file2", "file3", "file4", "file5"].forEach((fileField) => {
        if (req.files[fileField]) {
          uploadedFiles[fileField] = req.files[fileField][0].path;
        }
      });

      // SQL query to insert data into the database
      const sql = `
        INSERT INTO candidates 
        (firstName, lastName, email, course, language, phone, date_of_birth, country_of_birth, city_of_birth, gender, address, zip_code, file1, file2, file3, file4, file5, processing_authorization, withdrawal_authorization, advertising_authorization, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pending')
      `;
      const values = [
        firstName,
        lastName,
        email,
        course,
        lng,
        phone,
        date,
        country,
        city,
        gender,
        address,
        zip,
        uploadedFiles.file1 || null,
        uploadedFiles.file2 || null,
        uploadedFiles.file3 || null,
        uploadedFiles.file4 || null,
        uploadedFiles.file5 || null,
        processingAuthorization === "true",
        withdrawalAuthorization === "true",
        advertisingAuthorization === "true",
      ];

      // Execute the query
      const [result] = await promisePool.query(sql, values);

      res.status(200).json({
        Status: "Success",
        Data: result,
      });
    } catch (error) {
      console.log("Server Error:", error);
      res.status(500).json({ Error: "Server error occurred" });
    }
  }
);

app.post("/accept/:id", async (req, res) => {
  const candidateId = req.params.id;
  const { email, firstName, lastName, course } = req.body;

  try {
    // Check if required fields are provided
    if (!email || !firstName || !lastName || !course) {
      return res.status(400).json({ Error: "Missing required fields" });
    }

    // Update candidate status in the database
    const sqlUpdateStatus = `UPDATE candidates SET status = 'Accepted' WHERE id = ?`;
    const [updateResult] = await promisePool.query(sqlUpdateStatus, [
      candidateId,
    ]);

    if (updateResult.affectedRows === 0) {
      return res.status(404).json({ Error: "Candidate not found" });
    }

    // Create Stripe payment link
    const product = await stripe.products.create({
      name: `${course} Enrollment`,
      description: `Enrollment fee for ${course}`,
    });

    const priceData = await stripe.prices.create({
      product: product.id,
      unit_amount: 3000 * 100, // Convert to cents
      currency: "usd",
    });

    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{ price: priceData.id, quantity: 1 }],
    });

    // Ensure sender email is defined
    if (!process.env.EGO_EMAIL) {
      return res.status(500).json({
        Error: "Sender email (EGO_EMAIL) is not set in environment variables",
      });
    }

    // Set up email parameters
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.sender = {
      name: "eGO Education",
      email: process.env.EGO_EMAIL,
    }; // ✅ Ensure sender is defined
    sendSmtpEmail.to = [{ email: email, name: `${firstName} ${lastName}` }];
    sendSmtpEmail.subject = "Application Accepted";
    sendSmtpEmail.htmlContent = `
      <html>
      <body>
        <div style="font-family: Arial, sans-serif; color: #333;">
          <div style="background-color: #046635; padding: 20px; text-align: center; color: #fff;">
            <img src="https://www.ego-education.com/assets/logo-ego-white-BNobZOaW.png" alt="Company Logo">
            <h1>Application Accepted</h1>
          </div>
          <div style="padding: 20px;">
            <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
            <p>Congratulations! Your application for the <strong>${course}</strong> course has been accepted.</p>
            <p>To complete your enrollment, please proceed with the payment.</p>
            <p><a href="${paymentLink.url}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #046635; text-decoration: none; border-radius: 5px;">Complete Payment</a></p>
            <p>Best regards,</p>
             <p><strong>Enrolment Office</strong></p>
                      <p>Email: <a href="mailto:enrolment@ego-education.com">enrolment@ego-education.com</a></p>
                      <p>Website: <a href="https://www.ego-education.com">www.ego-education.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the email
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    res.json({
      Status: "Success",
      Message: "Candidate accepted and email sent",
    });
  } catch (error) {
    console.error("Server Error:", error);
    res
      .status(500)
      .json({ Error: "Server error occurred", Details: error.message });
  }
});

const getISpringAccessToken = async () => {
  try {
    const response = await fetch(
      "https://ego-education.ispringlearn.eu/api/v3/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: new URLSearchParams({
          client_id: process.env.ISPRING_CLIENT_ID,
          client_secret: process.env.ISPRING_CLIENT_SECRET,
          grant_type: "client_credentials",
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch token");

    return data.access_token;
  } catch (error) {
    console.error("Error fetching iSpring access token:", error);
    return null;
  }
};

const registerISpringUser = async (
  firstName,
  lastName,
  customerEmail,
  randomPassword
) => {
  try {
    const accessToken = await getISpringAccessToken(); // Replace with a valid access token
    if (!accessToken) return null;

    const response = await fetch("https://api-learn.ispringlearn.eu/user", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        departmentId: "1f73019c-fa31-11ed-958b-c2425271d525",
        password: randomPassword,
        fields: {
          login: `${firstName}_${lastName}`,
          email: customerEmail,
          first_name: firstName,
          last_name: lastName,
          country: "63",
          USER_DEFINED_FIELD1: "+21624512254",
          EDUCATION_TITLE: "bachelor",
        },
        role: "learner",
        sendLoginEmail: true,
        invitationMessage:
          "Please use the following credentials to sign up at iSpring Academy:",
      }),
    });

    const data = await response.json();

    console.log(data);
    if (!response.ok)
      throw new Error(data.message || "Failed to create iSpring user");

    return data;
  } catch (error) {
    console.error("iSpring User Registration Error:", error);
    return null;
  }
};
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

app.post("/reject/:id", async (req, res) => {
  const candidateId = req.params.id;
  const { email, firstName, lastName, course, reasons } = req.body;

  if (!email || !firstName || !lastName || !course) {
    return res.status(400).json({ Error: "Missing required fields" });
  }

  const reasonsList =
    Array.isArray(reasons) && reasons.length > 0
      ? reasons.map((reason) => `<li>${reason}</li>`).join("")
      : "<li>No specific reasons provided.</li>";

  try {
    // Update candidate status in the database
    const sqlUpdateStatus = `UPDATE candidates SET status = 'Rejected' WHERE id = ?`;
    const [updateResult] = await promisePool.query(sqlUpdateStatus, [
      candidateId,
    ]);

    if (updateResult.affectedRows === 0) {
      return res.status(404).json({ Error: "Candidate not found" });
    }

    // Prepare the email content
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = {
      name: "eGO Education",
      email: "enrolment@ego-education.com",
    };
    sendSmtpEmail.to = [{ email, name: `${firstName} ${lastName}` }];
    sendSmtpEmail.subject = "Application Rejected";
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          .email-container { font-family: Arial, sans-serif; color: #333; }
          .email-header { background-color: #046635; padding: 20px; text-align: center; color: #fff; }
          .email-header h1 { color: #fff; }
          .email-header img { max-height: 80px; }
          .email-body { padding: 20px; }
          .email-footer { background-color: #fff; padding: 20px; text-align: center; font-size: 12px; color: #666; }
          .email-footer-table { text-align: left; }
          .email-footer-logo img { max-width: 100%; height: auto; }
          .email-footer-text { padding-left: 10px; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <img src="https://www.ego-education.com/assets/logo-ego-white-BNobZOaW.png" alt="Company Logo">
            <h1>Application Rejected</h1>
          </div>
          <div class="email-body">
            <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
            <p>We regret to inform you that your application for the <strong>${course}</strong> course has not been accepted at this time.</p>
            <p>The following reasons were cited:</p>
            <ul>${reasonsList}</ul>
            <p>We encourage you to reapply in the future and wish you all the best in your endeavors.</p>
            <p>Best regards,</p>
            <p><strong>eGO Education</strong></p>
          </div>
          <div class="email-footer">
            <table class="email-footer-table">
              <tr>
                <td class="email-footer-logo">
                  <img width="80" height="80" src="https://www.ego-education.com/assets/logo-ego-black-DPDz0FSK.png" alt="Company Logo">
                </td>
                <td class="email-footer-text">
                  <p><strong>Enrolment Office</strong></p>
                  <p>Email: <a href="mailto:enrolment@ego-education.com">enrolment@ego-education.com</a></p>
                  <p>Website: <a href="https://ego-education.com">www.ego-education.com</a></p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the email via SendinBlue API
    apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function (data) {
        console.log("Email sent successfully:", data);
        res.json({
          Status: "Success",
          Message: "Candidate rejected and email sent",
        });
      },
      function (error) {
        console.error("SendinBlue Email Error:", error);
        res.status(500).json({ Error: "Error sending email" });
      }
    );
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ Error: "Server error occurred" });
  }
});

app.delete("/candidates/:id", async (req, res) => {
  const candidateId = req.params.id;

  try {
    // Fetch all file paths associated with the candidate
    const sqlFetchFiles = `
      SELECT 
        file1, file2, file3, file4, file5 
      FROM candidates 
      WHERE id = ?
    `;
    const [results] = await promisePool.query(sqlFetchFiles, [candidateId]);

    if (results.length === 0) {
      return res.status(404).json({ Error: "Candidate not found" });
    }

    const filePaths = Object.values(results[0]).filter(Boolean); // Extract file paths, ignoring null values.

    // Delete all the files from the server
    for (const filePath of filePaths) {
      const fullPath = path.join(__dirname, filePath.replace(/\\/g, "/")); // Normalize Windows-style paths.
      try {
        await fs.promises.unlink(fullPath); // Use `fs.promises` for file deletion.
      } catch (fileErr) {
        if (fileErr.code !== "ENOENT") {
          // Ignore "file not found" errors.
          console.error("File Deletion Error:", fileErr);
          throw fileErr;
        }
      }
    }

    // Delete the candidate record from the database
    const sqlDeleteCandidate = `DELETE FROM candidates WHERE id = ?`;
    await promisePool.query(sqlDeleteCandidate, [candidateId]);

    res.json({
      Status: "Success",
      Message: "Candidate and files deleted successfully",
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ Error: "Error processing request" });
  }
});

// Endpoint to fetch all users
app.get("/candidates", async (req, res) => {
  const sql = `
    SELECT 
      *
    FROM candidates
  `;

  try {
    const [results] = await promisePool.query(sql);
    res.json({ Status: "Success", Data: results });
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ Error: "Error fetching data" });
  }
});

app.get("/candidate/:id", async (req, res) => {
  const candidateId = req.params.id;

  try {
    const sql = `
      SELECT 
        id, name, email, course, language, phone, date_of_birth, country_of_birth, city_of_birth, gender, address, zip_code, 
        file1, file2, file3, file4, file5, 
        processing_authorization, withdrawal_authorization, advertising_authorization
      FROM candidates
      WHERE id = ?
    `;

    const [result] = await promisePool.query(sql, [candidateId]);

    if (result.length === 0) {
      return res.status(404).json({ Error: "Candidate not found" });
    }

    res.json({ Status: "Success", Data: result[0] });
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ Error: "Error fetching data" });
  }
});

app.use(express.static(path.join(__dirname, "../dist")));

// Handle all other routes by serving index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
