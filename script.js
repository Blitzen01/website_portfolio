
// script for home display | animated text
const textArray = ["I'm a Web Developer.", "I'm a Programmer."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const animatedText = document.getElementById("animated_text");
    let currentText = textArray[textIndex];

    if (isDeleting) {
        animatedText.innerHTML = currentText.substring(0, charIndex--);
    } else {
        animatedText.innerHTML = currentText.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 50 : 100; // Speed when deleting is faster

    if (!isDeleting && charIndex === currentText.length + 1) {
        typingSpeed = 1000; // Shorter pause before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // Switch to the next text
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// script for copying the number
function copyToClipboard() {
    const phoneNumber = "09219879017";
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert("Phone number copied");
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}