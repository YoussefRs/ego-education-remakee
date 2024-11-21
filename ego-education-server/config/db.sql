-- Create the database
CREATE DATABASE IF NOT EXISTS ego_education;

-- Use the database
USE ego_education;

-- Create the candidates table
CREATE TABLE candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    course VARCHAR(255),
    language VARCHAR(50),
    phone VARCHAR(20),
    date_of_birth DATE,
    country_of_birth VARCHAR(100),
    city_of_birth VARCHAR(100),
    gender ENUM('Male', 'Female', 'Other'),
    address TEXT,
    zip_code VARCHAR(20),
    file1 VARCHAR(255),
    file2 VARCHAR(255),
    file3 VARCHAR(255),
    file4 VARCHAR(255),
    file5 VARCHAR(255),
    processing_authorization BOOLEAN DEFAULT FALSE,
    withdrawal_authorization BOOLEAN DEFAULT FALSE,
    advertising_authorization BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
