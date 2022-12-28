let username;
let email;
let password;
let passwordRepeat;
let user = localStorage.getItem("user");
if (user === null){
    user = []
}
function createAccount() {
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    passwordRepeat = document.getElementById("passwordRepeat").value;
    if (checkEmail() && checkPassword() && checkUserExist() && checkEmailExist()) {
        user[user.length] = new User(user.length, username, email, password);
        localStorage.setItem("user", JSON.stringify(user))
        alert("Account created successfully!")
    }
    clearAllInputField();
}

function checkUserExist() {
    let flag = true;
    for (let i = 0; i < user.length; i++) {
        if (user[i]["username"] === username) {
            alert("This username has already been used! Choose another one!")
            return false;
        }
    }
    return flag;
}

function checkEmailExist() {
    //cắm cờ
    let flag = true;
    for (let i = 0; i < user.length; i++) {
        if (user[i]["email"] === email) {
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