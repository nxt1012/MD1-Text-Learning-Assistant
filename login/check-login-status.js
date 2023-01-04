function checkLoginStatus(loginStatus) {
    if (loginStatus) {
        document.getElementById("username").style.display ="none";
        document.getElementById("password").style.display ="none";
        document.getElementById("loginButton").style.display ="none";
        document.getElementById("complete").style.display ="none";
        document.getElementById("loggedIn").style.visibility = "visible";
        document.getElementById("accountManagerLoggedIn").style.visibility = "visible";
        document.getElementById("loggedInUsername").innerText = localStorage.getItem("currentLogin");
        switch (window.location.pathname) {
            case '/MD1-Text-Learning-Assistant/about.html':
                document.getElementById("aboutMyProfile").style.visibility = "visible";
                break;
            case '/MD1-Text-Learning-Assistant/account-manager.html':
                document.getElementById("managerPanel").style.visibility = "visible";
                break;
            case '/MD1-Text-Learning-Assistant/contact.html':
                document.getElementById("contactMe").style.visibility = "visible";
                break;
            case '/MD1-Text-Learning-Assistant/index.html':
                document.getElementById("introPage").style.visibility = "visible";
                break;
            case '/MD1-Text-Learning-Assistant/input.html':
                document.getElementById("inputPage").style.visibility = "visible";
                break;
            case '/MD1-Text-Learning-Assistant/simple-flashcard.html':
                document.getElementById("flashcardPage").style.visibility = "visible";
                break;
            case '/MD1-Text-Learning-Assistant/note-manager.html':
                document.getElementById("noteManagerPanel").style.visibility = "visible";
                break;
        }
        for (let i = 0; i < document.getElementsByClassName("loginToUse").length; i++){
            document.getElementsByClassName("loginToUse")[i].style.display ="none";
        }
    } else {
        document.getElementById("username").style.visibility = "visible";
        document.getElementById("password").style.visibility = "visible";
        document.getElementById("complete").style.visibility = "visible"
        document.getElementById("loginButton").style.visibility = "visible";
        document.getElementById("accountManagerLoggedIn").style.display ="none";
        document.getElementById("loggedIn").style.visibility = "hidden"
        switch (window.location.pathname) {
            case '/MD1-Text-Learning-Assistant/about.html':
                document.getElementById("aboutMyProfile").style.display ="none";
                break;
            case '/MD1-Text-Learning-Assistant/account-manager.html':
                document.getElementById("managerPanel").style.display ="none";
                break;
            case '/MD1-Text-Learning-Assistant/contact.html':
                document.getElementById("contactMe").style.display ="none";
                break;
            case '/MD1-Text-Learning-Assistant/index.html':
                document.getElementById("introPage").style.display ="none";
                break;
            case '/MD1-Text-Learning-Assistant/input.html':
                document.getElementById("inputPage").style.display ="none";
                break;
            case '/MD1-Text-Learning-Assistant/simple-flashcard.html':
                document.getElementById("flashcardPage").style.display ="none";
                break;
            case '/MD1-Text-Learning-Assistant/note-manager.html':
                document.getElementById("noteManagerPanel").style.display ="none";
                break;
        }
        for (let i = 0; i < document.getElementsByClassName("loginToUse").length; i++){
            document.getElementsByClassName("loginToUse")[i].style.visibility = "visible";
        }
    }
}