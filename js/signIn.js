function signIn() {
    let inputEmail = document.getElementById("orangeForm-email").value;
    let inputPassword = document.getElementById("orangeForm-pass").value;
    let storageEmail = localStorage.getItem("userEmail");
    let storagePassword = localStorage.getItem("userPassword");
    if (inputEmail == storageEmail && inputPassword == storagePassword) {
        let token = '';
        for (i = 0; i < 19; ++i) token += Math.floor(Math.random() * 10);
        localStorage.setItem("userToken", token);
        document.location.assign("../index.html")
    } else {
        document.getElementById("wrongMessage").innerHTML = "<div class='alert alert-danger' role='alert'>You input wrong data your email or password is wrong</div>"
    }
}