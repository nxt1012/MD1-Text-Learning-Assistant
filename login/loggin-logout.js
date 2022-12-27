let logUsername;
let logPassword
let listUser = [];
let loginStatus;
listUser = JSON.parse(localStorage.getItem("user"));

function login() {
    loginStatus = false;
    logUsername = document.getElementById("username").value;
    logPassword = document.getElementById("password").value;
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].username === logUsername && listUser[i].password === logPassword) {
            loginStatus = true;
            break;
        } else {
            loginStatus = false;
        }
    }
    localStorage.setItem("status", loginStatus);
    localStorage.setItem("currentLogin", logUsername);
    checkLoginStatus(loginStatus);
}
function logout(){
    loginStatus = false;
    localStorage.removeItem("status");
    checkLoginStatus(loginStatus);
}