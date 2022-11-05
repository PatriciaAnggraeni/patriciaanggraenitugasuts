// goto more menu
let quickOrder = document.querySelector("#quick-order");
let quickMenu = document.querySelector("#recomendation");
quickOrder.addEventListener("click", function() {
    quickMenu.scrollIntoView({behavior : 'smooth'})
}, false);

let otherMenu = document.querySelector("#go-to-other-menu");
let menu = document.querySelector("#other-menu");
otherMenu.addEventListener("click", function() {
    menu.scrollIntoView({behavior : 'smooth'})
}, false);

let viewMore = document.querySelector('#view-more');
let gotoViewMore = document.querySelector('#services');
viewMore.addEventListener("click", function() {
    gotoViewMore.scrollIntoView({behavior : 'smooth'})
}, false);

// link navbar 
const navbar = document.querySelectorAll('.scroll-to');
navbar.forEach( (item) => {
    item.addEventListener("click", () => {
        const attribute = document.getElementById(item.getAttribute("data-link"));
        attribute.scrollIntoView({behavior : 'smooth', block : 'start'}, false)
    })
});

let i = 0;
let images = [];
let time = 3000;

images[0] = 'img/slideshow/slideshow-2.jpg';
images[1] = 'img/slideshow/slideshow-4.jpg';
images[2] = 'img/slideshow/slideshow-6.jpg';

function menuSlide() {
    document.slides.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("menuSlide()", time);
}
window.onload = menuSlide;

// sytling popup 
$(document).ready( () => {
    // show popup
    $("#expresso").click( () => {
        $("#popup-container").show();
    } ); 

    // close popup
    $("#close").click( () => {
        $("#popup-container").hide();
    } );
} );

$(document).ready( () => {
    // show popup
    $("#coffe-late").click( () => {
        $("#popup-container").show();
    } ); 

    // close popup
    $("#close").click( () => {
        $("#popup-container").hide();
    } );
} );

$(document).ready( () => {
    // show popup
    $("#americano").click( () => {
        $("#popup-container").show();
    } ); 

    // close popup
    $("#close").click( () => {
        $("#popup-container").hide();
    } );
} );

$(document).ready( () => {
    // show popup
    $("#flat-white").click( () => {
        $("#popup-container").show();
    } ); 

    // close popup
    $("#close").click( () => {
        $("#popup-container").hide();
    } );
} );