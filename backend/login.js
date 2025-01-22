// login.js
// Handles user login logic
function loginUser(credentials) {
    if (!credentials.username || !credentials.password) {
        return {
            success: false,
            message: "Username and password are mandatory."
        };
    }

    console.log("Login successful for user:", credentials.username);

    return {
        success: true,
        message: "Login successful."
    };
}