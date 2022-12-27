function checkLoginStatus(loginStatus) {
    if (loginStatus){
        document.getElementById("username").style.visibility = "hidden";
        document.getElementById("password").style.visibility = "hidden";
        document.getElementById("loginButton").style.visibility = "hidden";
        document.getElementById("complete").style.visibility = "hidden";
        document.getElementById("loggedIn").style.visibility = "visible";
        document.getElementById("loggedInUsername").innerText = localStorage.getItem("currentLogin");
    } else  {
        document.getElementById("username").style.visibility = "visible";
        document.getElementById("password").style.visibility = "visible";
        document.getElementById("complete").style.visibility = "visible"
        document.getElementById("loginButton").style.visibility = "visible";
        document.getElementById("loggedIn").style.visibility = "hidden"
    }
}