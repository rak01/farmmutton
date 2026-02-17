// script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]') .forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    let isValid = true;
    // Example validation for required fields
    form.querySelectorAll('input[required]').forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    if (!isValid) {
        e.preventDefault();
        alert('Please fill out all required fields');
    }
});

// Interactive Elements
document.querySelectorAll('.interactive-element').forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
});
