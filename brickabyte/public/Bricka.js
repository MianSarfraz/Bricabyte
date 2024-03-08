
/* SEARCH */
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

/* Search Show */
/* Validate if constant exists */
if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

/* Search Hidden */
/* Validate if constant exists */
if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}

/* CART */
const cartButton = document.getElementById('cart-button'),
    cartClose = document.getElementById('cart-close'),
    cartContent = document.getElementById('cart-content')

/* Cart Show */
/* Validate if constant exists */
if (cartButton) {
    cartButton.addEventListener('click', () => {
        cartContent.classList.add('show-cart')
    })
}

/* Cart Hidden */
/* Validate if constant exists */
if (cartClose) {
    cartClose.addEventListener('click', () => {
        cartContent.classList.remove('show-cart')
    })
}

/* LOGIN */
// const loginButton = document.getElementById('login-button'),
//     loginClose = document.getElementById('login-close'),
//     loginContent = document.getElementById('login-content')

// /* Login Show */
// /* Validate if constant exists */
// if (loginButton) {
//     loginButton.addEventListener('click', () => {
//         loginContent.classList.add('show-login')
//     })
// }

/* Login Hidden */
/* Validate if constant exists */
// if (loginClose) {
//     loginClose.addEventListener('click', () => {
//         loginContent.classList.remove('show-login')
//     })
// }

/* LOGIN AUTH */
// Function to handle form submission
// function handleLogin(event) {
//     event.preventDefault();

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (!email || !password) {
//         alert('Please enter both email and password.');
//         return;
//     }

//     // Send login data to backend
//     fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Login failed');
//         }
//     })
//     .then(data => {
//         alert(`Login successful!\nName: ${data.user.firstName}\nEmail: ${data.user.email}`);
//         window.location.href = '/';
//     })
//     .catch(error => {
//         alert('Login failed. Please try again.');
//         console.error('Error:', error);
//     });
// }

// function handleSignup(event) {
//     event.preventDefault();

//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;

//     if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     if (password !== confirmPassword) {
//         alert('Passwords do not match.');
//         return;
//     }

//     // Send signup data to backend
//     fetch('/signup', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ firstName, lastName, email, phone, password }),
// })
// .then(response => {
//     if (response.ok) {
//         return response.json();
//     } else {
//         throw new Error('Signup failed');   
//     }
// })
// .then(data => {
//     alert(`Signup successful!`);
//     window.location.href = '/'; 
// })
// .catch(error => {
//     alert('Signup failed. Please try again.');
//     console.error('Error:', error);
// });
// }

// document.querySelector('#signup-link').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.querySelector('.login__form').style.display = 'none';
//     document.querySelector('.signup__form').style.display = 'block';
// });

// document.querySelector('#login-link').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.querySelector('.login__form').style.display = 'block';
//     document.querySelector('.signup__form').style.display = 'none';
// });

// document.querySelector('.login__form').addEventListener('submit', handleLogin);
// document.querySelector('.signup__form').addEventListener('submit', handleSignup);


// document.addEventListener("DOMContentLoaded", function() {
//     var messageBox = document.getElementById('message-box');

//     // Show message box
//     messageBox.style.display = 'block';

//     // Hide message box after 3 seconds
//     setTimeout(function() {
//         messageBox.style.display = 'none';
//     }, 3000);
// });


  

/* ADD SHADOW HEADER */
const shadowHeader = () => {
    const header = document.getElementById('header')
    /* When the scrol is greater than 50 viewport height, add the shadow */
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* HOME SWIPER */
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: 'true',
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})



/* Trade*/
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

/* FEATURED SWIPER */
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidePerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        },

        768: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
})


/* NEW SWIPER */
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidePerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
})


/* TESTIMONIAL SWIPER */
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidePerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        },

        768: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
})

/* SHOW SCROLL UP */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* DARK LIGHT THEME */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


if (selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .featured__container, .left__buyrs, .right__suppliers, .stats__container, .new__container,
            .join__data, .testimonial__container, .footer, .contact__container`)
sr.reveal(`.home__images`, { delay: 600 })
sr.reveal(`.services__card`, { interval: 100 })
sr.reveal(`.discount__data`, { origin: 'left' })
sr.reveal(`.discount__images`, { origin: 'right' })

/* CART */

let cart = [];

function addToCart(name, price, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    const item = { name, price, quantity };
    cart.push(item);
    showCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
}

function showCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        const { name, price, quantity } = item;
        const itemTotal = price * quantity;
        total += itemTotal;

        const li = document.createElement('li');
        li.style.marginBottom = '10px'; 
        li.style.borderBottom = '1px solid #ccc'; 
        li.style.padding = '10px'; 
        li.style.listStyle = 'none'; 
        li.style.color = '#070b12'; 
        li.style.fontWeight = '500'; 

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.backgroundColor = '#ff6347'; 
        removeButton.style.color = 'white'; 
        removeButton.style.border = 'none'; 
        removeButton.style.padding = '5px 10px'; 
        removeButton.style.marginLeft = '10px'; 
        removeButton.style.cursor = 'pointer'; 
        removeButton.setAttribute('onclick', `removeFromCart(${index})`);

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = quantity;
        quantityInput.min = '1';
        quantityInput.style.textAlign = 'center';
        quantityInput.style.width = '50px'; 
        quantityInput.style.border = '1px solid #070b12'
        quantityInput.setAttribute('onchange', `updateQuantity(${index}, this.value)`);

        li.textContent = `${name} - Rs.${itemTotal} `;
        li.style.color = '#526D82';
        li.appendChild(quantityInput);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    document.getElementById('total').textContent = total;
}


function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity);
    showCart();
}

function checkout() {
    // Implement checkout functionality (e.g., redirect to payment page)
    alert('Checkout functionality needs to be implemented.');
}


/* CONTACT EMAIL */
/* Email JS */

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_t6dn7hc', 'template_p5spvfg', '#contact-form', 'CyVuYUfrqtM_7DcKI')
    .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Message sent successfully!'

        //Remove message after 5 secinds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Char input fields
        contactForm.reset()

    }, () =>{
        //Show error message
        contactMessage.textContent =  'Message not sent (service error)'
    })
}

// contactForm.addEventListener('submit', sendEmail)

/* Calculate Bricks */
function calculateBricks() {
    var brickType = document.getElementById('brickType').value;
    var length = parseFloat(document.getElementById('length').value);
    var lengthUnit = document.getElementById('lengthUnit').value;
    var height = parseFloat(document.getElementById('height').value);
    var heightUnit = document.getElementById('heightUnit').value;

    if (isNaN(length) || isNaN(height)) {
        alert('Please enter valid numeric values for length and height.');
        return;
    }

    // Convert units to feet
    if (lengthUnit === 'cm') {
        length *= 0.0328084; // 1 cm = 0.0328084 feet
    }

    if (heightUnit === 'cm') {
        height *= 0.0328084; // 1 cm = 0.0328084 feet
    }

    var normalBrickVolume = 9 * 4 * 3 / 144; // Volume in cubic feet
    var tileBrickVolume = 9 * 4 * 1.5 / 144; // Volume in cubic feet

    var totalBricks;

    if (brickType === 'normal') {
        totalBricks = Math.ceil((length * height) / normalBrickVolume);
    } else {
        totalBricks = Math.ceil((length * height) / tileBrickVolume);
    }

    // Multiply the result by 2
    var finalResult = totalBricks * 2;

    document.getElementById('result').innerHTML = `Number of ${brickType} bricks required : ${finalResult}`;

    // Call function to calculate all materials
    calculateAllMaterials(finalResult);
}

function calculateAllMaterials(finalResult) {
    // Example calculations
    var bagsOfCement = Math.ceil(finalResult / 10); // Assuming 10 sq ft per bag
    var steelInKg = Math.ceil(finalResult / 5); // Assuming 5 sq ft per kg of steel
    var sand = Math.ceil(finalResult * 2); // Assuming 2 sq ft of sand per sq ft of area
    var crush = Math.ceil(finalResult * 1.5); // Assuming 1.5 sq ft of crush per sq ft of area

    // Prices per unit
    var brickPrice = 12;
    var cementPrice = 1275;
    var steelPrice = 266;
    var sandPrice = 130;
    var crushPrice = 235;

    // Calculate total price for each material
    var totalPriceBricks = finalResult * brickPrice;
    var totalPriceCement = bagsOfCement * cementPrice;
    var totalPriceSteel = steelInKg * steelPrice;
    var totalPriceSand = sand * sandPrice;
    var totalPriceCrush = crush * crushPrice;

    // Display results in the table
    document.getElementById('bricksQuantity').textContent = finalResult;
    document.getElementById('cementQuantity').textContent = bagsOfCement;
    document.getElementById('steelQuantity').textContent = steelInKg;
    document.getElementById('sandQuantity').textContent = sand;
    document.getElementById('crushQuantity').textContent = crush;

    document.getElementById('bricksPrice').textContent = totalPriceBricks;
    document.getElementById('cementPrice').textContent = totalPriceCement;
    document.getElementById('steelPrice').textContent = totalPriceSteel;
    document.getElementById('sandPrice').textContent = totalPriceSand;
    document.getElementById('crushPrice').textContent = totalPriceCrush;

    // Calculate and display total price
    var totalPrice = totalPriceBricks + totalPriceCement + totalPriceSteel + totalPriceSand + totalPriceCrush;
    document.getElementById('totalPrice').textContent = totalPrice;
}



  
/* Search For Products */

    document.addEventListener("DOMContentLoaded", function () {
        
        const searchForm = document.querySelector('.search__form');
        const searchInput = document.querySelector('.search__input');
       
        const featureProducts = document.querySelector('.feature-products');

        const productCards = document.querySelectorAll('.product-card');

        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const searchQuery = searchInput.value.toLowerCase();

            productCards.forEach(function (card) {
                const productName = card.querySelector('h3').innerText.toLowerCase();
                const productDescription = card.querySelector('p').innerText.toLowerCase();

                if (productName.includes(searchQuery) || productDescription.includes(searchQuery)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        const searchClose = document.getElementById('search-close');
        searchClose.addEventListener('click', function () {
            productCards.forEach(function (card) {
                card.style.display = 'block';
            });

            searchInput.value = '';
        });
    });

    /* Newsroom */
    document.addEventListener("DOMContentLoaded", function() {
        const readMoreLinks = document.querySelectorAll('.read-more');
    
        readMoreLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const expandedContent = this.parentElement.querySelector('.expanded-content');
                const readLessButton = this.parentElement.querySelector('.read-less');
    
                if (expandedContent.style.display === 'block') {
                    expandedContent.style.display = 'none';
                    this.textContent = 'Read More';
                    readLessButton.style.display = 'none';
                } else {
                    expandedContent.style.display = 'block';
                    this.textContent = 'Read Less';
                    readLessButton.style.display = 'inline-block';
                }
            });
        });
    });
    
    
    
    
    
     