// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");

// //Update the text content for <h1>
// myHeading.textContent = "Hello world"

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    //.getAttribute() is a DOM method that lets you read 
    // the value of an attribute from an HTML element.
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2");
    } else {
        myImage.setAttribute("src", "images/CODE_OF_CONDUCT.md.avif")
    }
    });

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUsername();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello ${myName}`;
    }
}

if (!localStorage.getItem("name")) { //to check whether 
// the name data item is not already stored in localStorage
    // setUsername();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello ${storedName}`;

}

myButton.addEventListener("click", () => {
    setUsername();
})