document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "catalog.html";
    } else {
        alert("Invalid email or password.");
    }
});
