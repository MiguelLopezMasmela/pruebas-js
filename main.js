const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu_icon = document.querySelector(".menu");
const mobilMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenu_icon.addEventListener('click',toggleMobileMenu);
cartIcon.addEventListener('click',toggleCarritoAside)


function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu(){
    mobilMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    mobilMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive');
}
