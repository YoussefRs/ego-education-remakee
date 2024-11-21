const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT;

//set directory of where we store files

const uploadDirectory = "./public/images";
app.use(
  cors({
    origin: "*", // This allows requests from any origin
  })
);
app.use(express.json({ limit: "100mb" }));
app.use("/public/images", express.static(uploadDirectory));

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

con.connect(function (err) {
  if (err) {
    console.log("Error in Connection");
  } else {
    console.log("Connected");
  }
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

app.post(
  "/create",
  upload.fields([
    { name: "file1", maxCount: 1 },
    { name: "file2", maxCount: 1 },
    { name: "file3", maxCount: 1 },
    { name: "file4", maxCount: 1 },
    { name: "file5", maxCount: 1 },
  ]),
  (req, res) => {
    try {
      const {
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
        processingAuthorization,
        withdrawalAuthorization,
        advertisingAuthorization,
      } = req.body;

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
      (firstName, lastName, email, course, language, phone, date_of_birth, country_of_birth, city_of_birth, gender, address, zip_code, file1, file2, file3, file4, file5, processing_authorization, withdrawal_authorization, advertising_authorization)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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

      con.query(sql, values, (err, result) => {
        if (err) {
          console.error("Database Error:", err);
          return res.status(500).json({ Error: "Error in signup query" });
        }
        res.json({ Status: "Success", Data: result });
      });
    } catch (error) {
      console.error("Server Error:", error);
      res.status(500).json({ Error: "Server error occurred" });
    }
  }
);

// Endpoint to fetch all users
app.get("/candidates", (req, res) => {
  const sql = `
    SELECT 
      id, firstName, lastName, email, course, language, phone, date_of_birth, country_of_birth, city_of_birth, gender, address, zip_code, 
      file1, file2, file3, file4, file5, 
      processing_authorization, withdrawal_authorization, advertising_authorization
    FROM candidates
  `;

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ Error: "Error fetching data" });
    }
    res.json({ Status: "Success", Data: results });
  });
});

app.get("/candidate/:id", (req, res) => {
  const candidateId = req.params.id;

  const sql = `
    SELECT 
      id, name, email, course, language, phone, date_of_birth, country_of_birth, city_of_birth, gender, address, zip_code, 
      file1, file2, file3, file4, file5, 
      processing_authorization, withdrawal_authorization, advertising_authorization
    FROM candidates
    WHERE id = ?
  `;

  con.query(sql, [candidateId], (err, result) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ Error: "Error fetching data" });
    }

    if (result.length === 0) {
      return res.status(404).json({ Error: "Candidate not found" });
    }

    res.json({ Status: "Success", Data: result[0] });
  });
});

app.use(express.static(path.join(__dirname, "../dist")));

// Handle all other routes by serving index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
