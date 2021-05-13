function signUp() {
    let userName = document.getElementById("orangeForm-name").value;
    let userEmail = document.getElementById("orangeForm-email").value;
    let userPassword = document.getElementById("orangeForm-pass").value;
    if (userName.length < 4)
        document.getElementById("errorName").innerHTML = "<div class='alert alert-danger' role='alert'>Please enter valid name</div>";
    else if (userPassword.length < 5)
        document.getElementById("errorPassword").innerHTML = "<div class='alert alert-danger' role='alert'>Your password is weak please choose another one more than 5 characters or numbers or symbol</div>";
    else {
        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userPassword", userPassword);
        document.getElementById("successMessage").innerHTML = "<div class='alert alert-success' role='alert'> Done , please wait for 5 secondes you will redirect to login page</div>";

        setTimeout(function() {
            window.location.assign("login-page.html");
        }, 5000);

    }


}