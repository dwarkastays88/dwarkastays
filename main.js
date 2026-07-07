// ======================
// DWARKA STAYS MAIN JS
// ======================

// Navbar Background Change On Scroll

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 80){

navbar.style.background = "#0B2C5D";

}else{

navbar.style.background = "rgba(11,44,93,.95)";

}

});


// Smooth Reveal Animation

const revealElements = document.querySelectorAll(
".room-card, .amenity-grid div, .menu-grid div"
);

const revealOnScroll = () => {

revealElements.forEach((element) => {

const position = element.getBoundingClientRect().top;

const screenHeight = window.innerHeight;

if(position < screenHeight - 100){

element.style.opacity = "1";
element.style.transform = "translateY(0)";

}

});

};

revealElements.forEach((element) => {

element.style.opacity = "0";
element.style.transform = "translateY(40px)";
element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// Room Booking Buttons

const bookButtons = document.querySelectorAll(".room-content a");

bookButtons.forEach((button)=>{

button.addEventListener("click",()=>{

console.log("Booking Clicked");

});

});


// Hero Buttons Hover Animation

const heroButtons = document.querySelectorAll(".hero-buttons a");

heroButtons.forEach((btn)=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform = "scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform = "scale(1)";

});

});


// Auto Current Year (Optional)

const yearElement = document.getElementById("year");

if(yearElement){

yearElement.innerHTML = new Date().getFullYear();

}


// Gallery Lightbox Ready

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img)=>{

img.addEventListener("click",()=>{

const popup = document.createElement("div");

popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.background = "rgba(0,0,0,.9)";
popup.style.display = "flex";
popup.style.justifyContent = "center";
popup.style.alignItems = "center";
popup.style.zIndex = "9999";

const image = document.createElement("img");

image.src = img.src;

image.style.maxWidth = "90%";
image.style.maxHeight = "90%";
image.style.borderRadius = "15px";

popup.appendChild(image);

popup.addEventListener("click",()=>{

popup.remove();

});

document.body.appendChild(popup);

});

});

document.addEventListener("DOMContentLoaded", function () {

    const calendarEl = document.getElementById("calendar");

    if (!calendarEl) return;

    const calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: "dayGridMonth",

        height: "auto",

        events: [

            
        ]

    });

    calendar.render();

});


// Welcome Message

console.log("DWARKA STAYS WEBSITE LOADED");