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

    console.log("User registered successfully:", user);

    return {
        success: true,
        message: "User registered successfully.",
        user: { username: user.username, email: user.email }
    };
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function hashPassword(password) {
    return btoa(password);
}

