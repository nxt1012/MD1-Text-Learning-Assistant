let username;
let email;
let password
let passwordRepeat;
let localData = JSON.parse(localStorage.getItem("localData"));
let user = [];
if (localData === null){
    localData = []
} else {
    for (let i = 0; i < localData.length; i++){
        user[i] = localData[i].data.userData;
        console.log(user)
    }
}
function createAccount() {
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    passwordRepeat = document.getElementById("passwordRepeat").value;
    if (user === []){
        if (checkEmail() && checkPassword()){
            user[0] = new User(user.length, username, email, password);
            sessionStorage.setItem("user", JSON.stringify(user))
            localData[0] = {"user": user[0].username, "data": {}}
            localData[0].data = {"userData" : {}, "terms" : {}}
            localData[0].data.userData = user[0]
            localStorage.setItem("localData", JSON.stringify(localData))
            alert("Account created successfully! You're ready to login")
        }
            } else {
        if (checkEmail() && checkPassword() && checkUserExist() && checkEmailExist()) {
            user[user.length] = new User(user.length, username, email, password);
            sessionStorage.setItem("user", JSON.stringify(user))
            localData[localData.length] = {"user": user[user.length-1].username, "data": {}}
            localData[localData.length-1].data = {"userData" : {}, "texts" : []}
            localData[localData.length-1].data.userData = user[user.length-1]
            localStorage.setItem("localData", JSON.stringify(localData))
            alert("Account created successfully! You're ready to login")
            location.replace("index.html")
        }
    }
    clearAllInputField();
}
function checkUserExist() {
    let flag = true;
    if (user === []) {
        flag = true;
    } else {
        for (let i = 0; i < user.length; i++) {
            if (user[i].username === username) {
                alert("This username has already been used! Choose another one!")
                return false;
            }

        }
        return flag;
    }
}

function checkEmailExist() {
    //cắm cờ
    let flag = true;
    for (let i = 0; i < user.length; i++) {
        if (user[i].email === email) {
            alert("This email has already been used! Choose another one!")
            //nếu có biến, đổi màu cờ, thoát vòng lặp vì không cần kiểm tra thêm
            return false;
        }
    }
    //trả về màu cờ, bất kể có biến hay không
    return flag
}
function checkEmail(){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    } else {
        alert("This is not a valid email address!");
        return false;
    }
}
function checkPassword() {
    if (password !== passwordRepeat) {
        alert("The password is not match! Enter again");
    } else return true;
}

function clearAllInputField(){
    let elements = document.getElementsByTagName("input");
    for (let i = 0; i < elements.length; i++){
        elements[i].value ="";
    }
}