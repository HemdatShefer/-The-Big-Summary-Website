document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const institution = document.getElementById("institution").value;
    const year = parseInt(document.getElementById("year").value, 10);
    const field = document.getElementById("field").value;

    if (!name || !email || !password || !institution || !year || !field) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({
        name,
        email,
        password,
        institution,
        year,
        field
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Welcome to The Big Summary Website.");
    window.location.href = "login.html";
});
