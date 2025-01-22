// User Registration and Logging Enhancements with Data Directory

const fs = require('fs'); // File system module for saving data
const path = require('path'); // Module for handling file paths

// Ensure the 'data' directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Define file paths inside the 'data' directory
const usersFilePath = path.join(dataDir, 'users.txt');
const logsFilePath = path.join(dataDir, 'logs.txt');

// Handles user registration and saves details to users.txt
function registerUser(userData) {
    if (!userData.username || !userData.password) {
        return {
            success: false,
            message: "Username and password are mandatory."
        };
    }

    if (userData.email && !validateEmail(userData.email)) {
        return {
            success: false,
            message: "Invalid email format."
        };
    }

    const user = {
        username: userData.username,
        institution: userData.institution || "Not Provided",
        fieldOfStudy: userData.fieldOfStudy || "Not Provided",
        email: userData.email || "Not Provided",
        phone: userData.phone || "Not Provided",
        password: hashPassword(userData.password)
    };

    // Save user details to users.txt
    const userEntry = `Username: ${user.username}, Institution: ${user.institution}, Field of Study: ${user.fieldOfStudy}, Email: ${user.email}, Phone: ${user.phone}\n`;
    fs.appendFileSync(usersFilePath, userEntry, 'utf8');

    console.log("User registered successfully:", user);

    return {
        success: true,
        message: "User registered successfully.",
        user: { username: user.username, email: user.email }
    };
}

// Handles user login and logs the event in logs.txt
function loginUser(credentials) {
    if (!credentials.username || !credentials.password) {
        return {
            success: false,
            message: "Username and password are mandatory."
        };
    }

    // Simulate successful login
    const loginLog = `${new Date().toISOString()} - User logged in: ${credentials.username}\n`;
    fs.appendFileSync(logsFilePath, loginLog, 'utf8');

    console.log("Login successful for user:", credentials.username);

    return {
        success: true,
        message: "Login successful."
    };
}

// Helper functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function hashPassword(password) {
    return btoa(password); // Simulated hashing for this example
}

// Example Usage
const newUser = {
    username: "student123",
    institution: "Academic University",
    fieldOfStudy: "Computer Science",
    email: "student123@university.edu",
    phone: "123-456-7890",
    password: "securepassword123"
};

const registrationResult = registerUser(newUser);
console.log(registrationResult);

const loginCredentials = {
    username: "student123",
    password: "securepassword123"
};

const loginResult = loginUser(loginCredentials);
console.log(loginResult);
