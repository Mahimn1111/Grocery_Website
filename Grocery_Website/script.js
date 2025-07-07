// Get references to the main overlay elements
let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

// Toggle search form visibility and close others
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active'); // Close shopping cart
    loginForm.classList.remove('active');    // Close login form
    navbar.classList.remove('active');       // Close navbar
}

// Toggle shopping cart visibility and close others
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');  // Close search form
    loginForm.classList.remove('active');   // Close login form
    navbar.classList.remove('active');      // Close navbar
}

// Toggle login form visibility and close others
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');    // Close search form
    shoppingCart.classList.remove('active');  // Close shopping cart
    navbar.classList.remove('active');        // Close navbar
}

// Toggle navbar visibility (for mobile menu) and close others
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');    // Close search form
    shoppingCart.classList.remove('active');  // Close shopping cart
    loginForm.classList.remove('active');     // Close login form
}

// Close all active overlays when the user scrolls
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// Initialize Swiper for the Product Slider
var productSwiper = new Swiper(".product-slider", {
    loop: true, /* Changed to true for a continuous, infinite loop */
    spaceBetween: 20, /* Space between individual slides */
    autoplay: {
        delay: 5000, /* Slides change every 5 seconds for a dynamic feel */
        disableOnInteraction: false, /* Autoplay continues even after user interaction */
    },
    // Responsive breakpoints for different screen sizes
    breakpoints: {
        0: { // For screens 0px and up (small mobile)
            slidesPerView: 1,
            spaceBetween: 10, /* Tighter spacing on very small screens */
        },
        768: { // For screens 768px and up (tablets)
            slidesPerView: 2,
        },
        1020: { // For screens 1020px and up (laptops/desktops)
            slidesPerView: 3, /* Shows 3 slides for a balanced layout */
        },
        1200: { // For screens 1200px and up (larger desktops)
            slidesPerView: 4, /* Shows 4 slides for wider displays */
        }
    },
    // Optional: Add navigation arrows (uncomment and add corresponding HTML for buttons)
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // Optional: Add pagination dots (uncomment and add corresponding HTML for dots container)
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
});

// Initialize Swiper for the Review Slider
var reviewSwiper = new Swiper(".review-slider", {
    loop: true, /* Changed to true for a continuous, infinite loop */
    spaceBetween: 20, /* Space between individual slides */
    autoplay: {
        delay: 6000, /* Slides change every 6 seconds */
        disableOnInteraction: false, /* Autoplay continues after interaction */
    },
    // Responsive breakpoints for different screen sizes
    breakpoints: {
        0: { // For screens 0px and up (small mobile)
            slidesPerView: 1,
            spaceBetween: 10, /* Tighter spacing on very small screens */
        },
        768: { // For screens 768px and up (tablets)
            slidesPerView: 2,
        },
        1020: { // For screens 1020px and up (laptops/desktops)
            slidesPerView: 3, /* Shows 3 slides for a balanced layout */
        }
    },
    // Optional: Add navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // Optional: Add pagination dots
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
});