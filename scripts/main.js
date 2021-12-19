// Personlize colors
const myImg = document.querySelector("img");

myImg.onclick = function() {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    // Toggle between two classes based on firefox developer and general themes
    body.classList.toggle("dev-body");
    body.classList.toggle("norm-body");
    html.classList.toggle("dev-html");
    html.classList.toggle("norm-html")

    let mySrc = myImg.getAttribute("src");

    if(mySrc == "images/firefox-developer.svg") {
        myImg.setAttribute("src", "images/firefox.svg");
    } else {
        myImg.setAttribute("src", "images/firefox-developer.svg");
    }
}

// Personalize based on name
const myBtn = document.querySelector("button");
const myHeading = document.querySelector("h1");

// Gets name of first time user
function setUserName() {
    let myName;
    do {
        myName = prompt("Please enter your name: ");
    } while(!myName);

    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}

// Check if we have user details in browser
if(!localStorage.getItem("name")) {
    setUserName();
} else {
    myHeading.textContent = "Mozilla is cool, " + localStorage.getItem("name");
}

myBtn.onclick = setUserName; // way for user to change name