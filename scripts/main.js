const myImg = document.querySelector("img");

myImg.onclick = function() {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
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