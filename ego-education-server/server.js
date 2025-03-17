const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const crypto = require("crypto");
const fetch = require("node-fetch");

const nodemailer = require("nodemailer");

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

    console.log(event);

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

      console.log(candidate);

      if (!candidate || candidate.length === 0) {
        console.error("Candidate not found.");
        return res.status(404).send("Candidate not found.");
      }

      const { firstName, lastName } = candidate[0];
      const randomPassword = crypto.randomBytes(8).toString("hex");

      const ispringAccount = await registerISpringUser(
        firstName,
        lastName,
        customerEmail,
        randomPassword
      );

      if (!ispringAccount) {
        return res.status(500).send("Failed to create iSpring account.");
      }

      // ✅ Send Email with Credentials
      await sendEmail(customerEmail, firstName, lastName, randomPassword);

      res.status(200).send("iSpring account created and email sent.");
    } else {
      res.status(400).send("Unhandled event type.");
    }
  }
);

const sendEmail = async (email, firstName, lastName, password) => {
  try {
    let mailOptions = {
      from: process.env.EGO_EMAIL,
      to: email,
      subject: "Your iSpring Academy Login Credentials",
      html: `
        <p>Dear ${firstName} ${lastName},</p>
        <p>Your iSpring Academy account has been successfully created.</p>
        <p><strong>Login:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p>You can log in at <a href="https://ego-education.ispringlearn.eu/login">iSpring Academy</a>.</p>
        <p>Best regards,<br/>Your Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${email}`);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//set directory of where we store files

const uploadDirectory = "./public/images";
app.use(
  cors({
    origin: "*", // This allows requests from any origin
  })
);
app.use(express.json({ limit: "100mb" }));
app.use("/public/images", express.static(uploadDirectory));

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

// Setup your Aruba email transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Replace with Aruba SMTP host
  port: 587, // Secure SMTP port for Aruba
  secure: false, // Use SSL
  auth: {
    user: process.env.ARUBA_EMAIL,
    pass: process.env.ARUBA_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

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

      // Send confirmation email
      const mailOptions = {
        from: process.env.EGO_EMAIL, // Sender address
        to: email, // Recipient's email
        subject: "Application Received", // Email subject
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
              }
              .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border: 1px solid #dddddd;
                border-radius: 8px;
                overflow: hidden;
              }
              .email-header {
                background-color: #046635;
                color: #ffffff;
                text-align: center;
                padding: 20px;
              }
              .email-header img {
                max-width: 150px;
                margin-bottom: 10px;
              }
              .email-body {
                padding: 20px;
                color: #333333;
                line-height: 1.6;
              }
              .email-body p {
                margin: 10px 0;
              }
              .email-footer {
                background-color: #fff;
                padding: 20px;
                font-size: 14px;
                color: #333333;
                border-top: 1px solid #dddddd;
              }
              .email-footer-table {
                width: 100%;
                table-layout: fixed;
              }
              .email-footer-table td {
                vertical-align: top;
              }
              .email-footer-logo {
                width: 80px;
                padding-right: 10px;
              }
              .email-footer-logo img {
                max-width: 100%;
                height: auto;
              }
              .email-footer-text {
                color: #333333;
                font-size: 14px;
                line-height: 1.5;
              }
              .email-footer-text p {
                margin: 5px 0;
              }
              .email-footer-text a {
                color: #046635;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div className="email-container">
              <div className="email-header">
                <img src="https://www.ego-education.com/assets/logo-ego-white-BNobZOaW.png" alt="Company Logo">
                <h1>Application Received</h1>
              </div>
              <div className="email-body">
                <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
                <p>Thank you for your application for the <strong>${course}</strong> course.</p>
                <p>We will review your application and contact you shortly.</p>
                <p>Best regards,</p>
                <p><strong>eGO Education</strong></p>
              </div>
              <div className="email-footer">
                <table className="email-footer-table">
                  <tr>
                    <!-- Logo Section -->
                    <td className="email-footer-logo">
                      <img src="www.ego-education.com/assets/logo-ego-black-DPDz0FSK.png" alt="Company Logo">
                    </td>
                    <!-- Contact Details Section -->
                    <td className="email-footer-text">
                      <p><strong>Enrolment Office</strong></p>
                      <p>email: <a href="mailto:enrolment@ego-education.com">enrolment@ego-education.com</a></p>
                      <p>website: <a href="https://ego-education.com">ego-education.com</a></p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </body>
          </html>
        `,
      };

      const info = await transporter.sendMail(mailOptions);

      res.status(200).json({
        Status: "Success",
        Data: result,
        EmailInfo: info,
      });
    } catch (error) {
      console.log("Server Error:", error);
      res.status(500).json({ Error: "Server error occurred" });
    }
  }
);

app.post("/accept/:id", async (req, res) => {
  const candidateId = req.params.id; // Extract candidate ID from route parameter
  const { email, firstName, lastName, course } = req.body;

  try {
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

    // Prepare the acceptance email
    const mailOptions = {
      from: process.env.EGO_EMAIL, // Sender address
      to: email, // Recipient's email
      subject: "Application Accepted", // Email subject
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          .email-container {
            font-family: Arial, sans-serif;
            color: #333;
          }
          .email-header {
            background-color: #046635;
            padding: 20px;
            text-align: center;
            color : #fff;
          }

           .email-header h1 {
           color : #fff;
          }
          .email-header img {
            max-height: 80px;
          }
          .email-body {
            padding: 20px;
          }
          .email-footer {
            background-color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          .email-footer-table {
            margin: auto;
            text-align: left;
          }
          .email-footer-logo img {
            max-width: 100%;
            height: auto;
          }
          .email-footer-text {
            padding-left: 10px;
          }
        </style>
      </head>
      <body>
        <div className="email-container">
          <div className="email-header">
            <img src="https://www.ego-education.com/assets/logo-ego-white-BNobZOaW.png" alt="Company Logo">
            <h1>Application Accepted</h1>
          </div>
          <div className="email-body">
            <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
            <p>Congratulations! Your application for the <strong>${course}</strong> course has been accepted.</p>
            <p>To complete your enrollment, please proceed with the payment.</p>
            <p><a href="${paymentLink.url}" className="button">Complete Payment</a></p>
            <p>Best regards,</p>
            <p><strong>eGO Education</strong></p>
          </div>
          <div className="email-footer">
            <table className="email-footer-table">
              <tr>
                <td className="email-footer-logo">
                  <img width="80" height="80" src="https://www.ego-education.com/assets/logo-ego-black-DPDz0FSK.png" alt="Company Logo">
                </td>
                <td className="email-footer-text">
                  <p><strong>Enrolment Office</strong></p>
                  <p>email: <a href="mailto:enrolment@ego-education.com">enrolment@ego-education.com</a></p>
                  <p>website: <a href="https://ego-education.com">ego-education.com</a></p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </body>
      </html>
      `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (emailErr, info) => {
      if (emailErr) {
        console.error("Email Error:", emailErr);
        return res.status(500).json({ Error: "Error sending email" });
      }

      res.json({
        Status: "Success",
        Message: "Candidate accepted and email sent",
      });
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ Error: "Server error occurred" });
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

app.post("/reject/:id", async (req, res) => {
  const candidateId = req.params.id; // Extract candidate ID from route parameter
  const { email, firstName, lastName, course, reasons } = req.body;

  if (!email || !firstName || !lastName || !course) {
    return res.status(400).json({ Error: "Missing required fields" });
  }

  // Validate reasons and convert to HTML list
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

    // Prepare the rejection email
    const mailOptions = {
      from: process.env.EGO_EMAIL, // Sender address
      to: email, // Recipient's email
      subject: "Application Rejected", // Email subject
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
          .email-container {
            font-family: Arial, sans-serif;
            color: #333;
          }
          .email-header {
            background-color: #046635;
            padding: 20px;
            text-align: center;
            color : #fff;
          }

           .email-header h1 {
           color : #fff;
          }
          .email-header img {
            max-height: 80px;
          }
          .email-body {
            padding: 20px;
          }
          .email-footer {
            background-color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          .email-footer-table {
            margin: auto;
            text-align: left;
          }
          .email-footer-logo img {
            max-width: 100%;
            height: auto;
          }
          .email-footer-text {
            padding-left: 10px;
          }
        </style>
        </head>
        <body>
          <div className="email-container">
            <div className="email-header">
            <img src="https://www.ego-education.com/assets/logo-ego-white-BNobZOaW.png" alt="Company Logo">
            <h1>Application Rejected</h1>
          </div>
            <div className="email-body">
              <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
              <p>We regret to inform you that your application for the <strong>${course}</strong> course has not been accepted at this time.</p>
              <p>The following reasons were cited:</p>
              <ul>${reasonsList}</ul>
              <p>We encourage you to reapply in the future and wish you all the best in your endeavors.</p>
              <p>Best regards,</p>
              <p><strong>eGO Education</strong></p>
            </div>
            <div className="email-footer">
            <table className="email-footer-table">
              <tr>
                <td className="email-footer-logo">
                  <img width="80" height="80" src="https://www.ego-education.com/assets/logo-ego-black-DPDz0FSK.png" alt="Company Logo">
                </td>
                <td className="email-footer-text">
                  <p><strong>Enrolment Office</strong></p>
                  <p>email: <a href="mailto:enrolment@ego-education.com">enrolment@ego-education.com</a></p>
                  <p>website: <a href="https://ego-education.com">ego-education.com</a></p>
                </td>
              </tr>
            </table>
          </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (emailErr, info) => {
      if (emailErr) {
        console.error("Email Error:", emailErr);
        return res.status(500).json({ Error: "Error sending email" });
      }

      res.json({
        Status: "Success",
        Message: "Candidate rejected and email sent",
      });
    });
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
