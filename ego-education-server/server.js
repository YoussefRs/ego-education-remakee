// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const candidate = require("./router/candidateRoute");
// const { createConnection } = require("./config/db");

// createConnection();

// app.use(
//   cors({
//     origin: "*",
//     optionSuccessStatus: 200,
//   })
// );
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cookieParser());

// app.use("/form", candidate);

// app.listen(9090, () => {
//   console.log("Server alive on port 9090");
// });
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
app.use(express.json());
app.use("/public/images", express.static(uploadDirectory));



const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "youssefdb!",
  database: "ego_education",
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

//app.post('/upload', upload.single('file'), (req, res) => {
//  console.log(req.body)
//  console.log(req.file)
//  return res.json({Status: "Success"});
//})

app.post("/create", upload.fields([
  { name: "file1", maxCount: 1 },
  { name: "file2", maxCount: 1 },
  { name: "file3", maxCount: 1 },
  { name: "file4", maxCount: 1 },
  { name: "file5", maxCount: 1 }
]), (req, res) => {
  try {
    const { name, email, course, lng, phone, date, country, city, gender, address, zip, processingAuthorization, withdrawalAuthorization, advertisingAuthorization } = req.body;

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
      (name, email, course, language, phone, date_of_birth, country_of_birth, city_of_birth, gender, address, zip_code, file1, file2, file3, file4, file5, processing_authorization, withdrawal_authorization, advertising_authorization)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      name,
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
});


// Endpoint to fetch all users
app.get("/candidates", (req, res) => {
  const sql = "SELECT * FROM candidates"; // Assuming 'user' is the table name
  con.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Error fetching users" });
    }
    return res.status(200).json(result); // Return the fetched users
  });
});

app.get("/test", (req, res) => {
  return res.status(200).json({
    msg: "working",
  });
});

app.use(express.static(path.join(__dirname, "../dist")));

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
