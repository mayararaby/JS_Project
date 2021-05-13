let jsObj;
let Xhr = new XMLHttpRequest();
let users = [];

function handleSubmit(event) {
    event.preventDefault();
    userRegisterEmail = document.getElementById("orangeForm-email").value
    let data = new FormData(event.target);
    let value = Object.fromEntries(data.entries());
    console.log({
        value
    });
    if (users.length == 0) {

        users.push(value);
        console.log(users);
        console.log(users.length);

    } else {
        let mails = users.map(users => {
            if (users.userEmail == userRegisterEmail)
                document.getElementById("errorEmail").innerHTML = "This Email is already exist .";
            else {
                users.push(value);
            }
            console.log(users.userEmail)


        });
        console.log(users);
    }

}
let form = document.querySelector('form');
let obj = form.addEventListener('submit', handleSubmit);