
"use strict";

document.forms.selectBackground.backgroundSelector.addEventListener("input", () => {
    let options = [
        "lightblue.jpg",
        "lightgold.jpg"
    ];
    let optionsAlt = [
        "A lightblue background featuring bubbles.",
        "A golden background with bokeh featuring white from the bottom to gold at the top."
    ];
    let newImgElement;
    if (document.querySelector(".background") == null) {
        newImgElement = document.createElement("img");
        newImgElement.setAttribute("class", "background");
        newImgElement.setAttribute("width", "1000");
        newImgElement.setAttribute("height", "1000");
        newImgElement.setAttribute("alt", optionsAlt[document.forms.selectBackground.backgroundSelector.value]);
        newImgElement.src = options[document.forms.selectBackground.backgroundSelector.value];
        document.querySelector("body").appendChild(newImgElement);
        document.querySelector("section").setAttribute("class", "whiteBG");
    } else {
        document.querySelector(".background").src = options[document.forms.selectBackground.backgroundSelector.value];
        document.querySelector(".background").setAttribute("alt", optionsAlt[document.forms.selectBackground.backgroundSelector.value]);
    }
});