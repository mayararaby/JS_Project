let userToken = localStorage.getItem("userToken");

if (userToken == null) {
    document.getElementById("navbarDropdownMenuLink-4").innerHTML = "<i class='fas fa-user blue-text'></i> New User "
    document.getElementById("signOutOrSignIn").innerHTML = "<i class='fas fa-sign-in-alt'></i> \xa0\xa0Sign In";
    document.getElementById("signOutOrSignIn").href = "../html/login-page.html";
    document.getElementById("signUp").innerHTML = "<i class='fas fa-user-plus'></i>\xa0\xa0 Sign Up "
    document.getElementById("signUp").href = "../html/signup-page.html";
} else {
    let userName = localStorage.getItem("userName");
    document.getElementById("navbarDropdownMenuLink-4").innerHTML = "<i class='fas fa-user blue-text'></i> welcome " + userName;
    document.getElementById("signOutOrSignIn").innerHTML = "<i class='fas fa-sign-out-alt'></i> \xa0\xa0Sign out";
    document.getElementById("signUp").setAttribute("style", "display: none;");
    let signOut = document.getElementById("signOutOrSignIn");
    signOut.onclick = function() {
        localStorage.removeItem('userToken');
        location.reload();
    }
}