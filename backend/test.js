// Import the functions (if using Node.js or modular system, otherwise include in a script tag)
function testUserRegistrationAndLogin() {
    // Test User Data
    const testUser = {
        username: "student123",
        institution: "Academic University",
        fieldOfStudy: "Computer Science",
        email: "student123@university.edu",
        phone: "123-456-7890",
        password: "securepassword123"
    };

    console.log("=== Testing User Registration ===");
    const registrationResult = registerUser(testUser);
    console.log("Registration Result:", registrationResult);

    // Simulating login
    console.log("=== Testing User Login ===");
    const loginCredentials = {
        username: "student123",
        password: "securepassword123"
    };
    const loginResult = loginUser(loginCredentials);
    console.log("Login Result:", loginResult);
}

// Run Tests
testUserRegistrationAndLogin();
