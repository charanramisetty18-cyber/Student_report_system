// ==========================================
// STUDENT REPORT SYSTEM - AUTHENTICATION
// ==========================================


// ==========================================
// SIGN UP
// ==========================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("signupName").value.trim();

        const email = document.getElementById("signupEmail").value.trim();

        const password = document.getElementById("signupPassword").value;

        const role = document.getElementById("signupRole").value;


        // Get existing users from LocalStorage
        const users =
            JSON.parse(localStorage.getItem("users")) || [];


        // Check whether email already exists
        const existingUser = users.find(
            user => user.email === email
        );


        if (existingUser) {

            alert("This email is already registered!");

            return;
        }


        // Create new user
        const newUser = {

            name: name,

            email: email,

            password: password,

            role: role

        };


        // Add user to users array
        users.push(newUser);


        // Save users in LocalStorage
        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );


        alert("Account created successfully!");


        // Go to Login page
        window.location.href = "login.html";

    });

}



// ==========================================
// LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get login values
        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;


        // Get registered users
        const users =
            JSON.parse(localStorage.getItem("users")) || [];


        // Find matching user
        const user = users.find(
            user =>
                user.email === email &&
                user.password === password
        );


        // Invalid login
        if (!user) {

            alert("Invalid email or password!");

            return;
        }


        // Save logged-in user
        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );


        alert("Login successful!");


        // Redirect according to role
        if (user.role === "admin") {

            window.location.href =
                "admin/admin-dashboard.html";

        } else {

            window.location.href =
                "user/user-dashboard.html";

        }

    });

}