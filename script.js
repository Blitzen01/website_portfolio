// script.js - FIX & Enhancement

// script for home display | animated text
const textArray = ["I'm a Web Developer.", "I'm a Programmer."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const animatedText = document.getElementById("animated_text");

// 🎯 ENHANCEMENT: Only define and run typeEffect if the element exists
if (animatedText) {
    function typeEffect() {
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
}


// script for copying the number
function copyToClipboard() {
    const phoneNumber = "09219879017";
    // Check if the clipboard API is available
    if (navigator.clipboard && window.isSecureContext) { 
        navigator.clipboard.writeText(phoneNumber).then(() => {
            alert("Phone number copied: " + phoneNumber);
        }).catch(err => {
            console.error("Error copying text: ", err);
            // Fallback for older browsers/insecure context
            alert("Copy failed. Number: " + phoneNumber);
        });
    } else {
        alert("Copy failed. Number: " + phoneNumber);
    }
}

// Lightbox functions (These are correctly written and rely on HTML structure)
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = "none";
    }
}