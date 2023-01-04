let logUsername;
let logPassword;
let listUser = [];
let loginStatus;
let localData = [];
function login() {
    console.log("login function has been called")

    localData = JSON.parse(localStorage.getItem("localData"));
    if (localData === null){
        alert("You have to register first!")
    } else {
        loginStatus = false;
        for(let i = 0; i < localData.length; i++){
            listUser[i] = localData[i].data.userData;
        }
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
        if(!loginStatus){
            alert("Wrong Username ơr Password entered")
        }
        checkLoginStatus(loginStatus);
        localStorage.setItem("status", loginStatus);
        localStorage.setItem("currentLogin", logUsername);
        window.location.reload();
    }


}
function logout(){
    loginStatus = false;
    localStorage.removeItem("status");
    localStorage.removeItem("currentLogin");
    sessionStorage.clear();
    checkLoginStatus(loginStatus);
    window.location.reload();
}