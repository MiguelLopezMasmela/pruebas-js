const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu_icon = document.querySelector(".menu")
const mobilMenu = document.querySelector(".mobile-menu")

const toggleDesktopMenu = () =>{
    desktopMenu.classList.toggle('inactive')

}

const toggleMobileMenu = () =>{
    mobilMenu.classList.toggle('inactive')

}
menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenu_icon.addEventListener('click',toggleMobileMenu)