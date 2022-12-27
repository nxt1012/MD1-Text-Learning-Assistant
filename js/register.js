let username;
let email;
let password;
let passwordRepeat;
let user = [];
function createAccount() {
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    passwordRepeat = document.getElementById("passwordRepeat").value;
    console.log(username, email, password, passwordRepeat)
    if (checkEmail() && checkPassword() && checkUserExist()) {
        user[user.length] = new User(username, email, password);
        localStorage.setItem("user", JSON.stringify(user))
        alert("Account created successfully!")
    }
    clearAllInputField();
}

function checkUserExist() {
    let arr = JSON.parse(localStorage.getItem("user"))
    if (arr === null) {
        if (checkEmail()) {
            user[user.length] = new User(username, email, password);
            localStorage.setItem("user", JSON.stringify(user))
            alert("Account created successfully!")
            return false;
        } return false
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr.length);
            if (arr[i]["username"] === username) {
                alert("This username has already been used! Choose another one!")
                return false
            } else if (arr[i]["email"] === email) {
                alert("This email has already been used! Choose another one!")
                return false
            }
            return true
        }
    }
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