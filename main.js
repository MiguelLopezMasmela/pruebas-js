const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu_icon = document.querySelector(".menu");
const mobilMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

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

let product = {name:'Bike',price:120,img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"};

const productList = [];

for(let i=0 ; i<10;i++){
    productList.push(product);
}
function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const img =  document.createElement('img');
        img.setAttribute('src',product.img)
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText = '$'+product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.append(productImgCart)
        productInfoDiv.append(productPrice,productName)
        productInfo.append(productInfoDiv,productInfoFigure)
        productCard.append(img,productInfo)
        cardsContainer.append(productCard)
}
}
renderProducts(productList)