function signIn() {
    let inputEmail = document.getElementById("orangeForm-email").value;
    let inputPassword = document.getElementById("orangeForm-pass").value;
    let storageEmail = localStorage.getItem("userEmail");
    let storagePassword = localStorage.getItem("userPassword");
    if (inputEmail == storageEmail && inputPassword == storagePassword) {
        document.location.assign("../index.html")
    } else {
        document.getElementById("wrongMessage").innerHTML = "<div class='alert alert-danger' role='alert'>You input wrong data your email or password is wrong</div>"
    }
}