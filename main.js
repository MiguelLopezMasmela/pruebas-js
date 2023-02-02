const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu_icon = document.querySelector(".menu");
const mobilMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartAside = document.querySelector('#shoppingCartAside');
const cardsContainer = document.querySelector('.cards-container')
const productDetailClose = document.querySelector(".product-detail-close")
const productDetail = document.querySelector('.product-detail')
productDetailClose.addEventListener('click',close)
menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenu_icon.addEventListener('click',toggleMobileMenu);
cartIcon.addEventListener('click',toggleCarritoAside)

function close(){
    productDetail.classList.toggle('inactive')
}

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
    shoppingCartAside.classList.add('inactive');
    productDetail.classList.add('inactive')
}

function toggleMobileMenu(){
    mobilMenu.classList.toggle('inactive');
    shoppingCartAside.classList.add('inactive');
    productDetail.classList.add('inactive')
}

function toggleCarritoAside(){
    shoppingCartAside.classList.toggle('inactive');
    mobilMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive')
}



const productList = [];

productList.push({id:11,name:'Moto',price:2000,img:"https://w0.peakpx.com/wallpaper/771/825/HD-wallpaper-yamaha-yzf-r6-gray-motorcycle-2019-bikes-superbikes-2019-yamaha-yzf-r6-japanese-motorcycles-yamaha.jpg"})

for(let i=0 ; i<10;i++){
    productList.push({id:(i+1),name:'Bike',price:120,img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"});
}
function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');

        productCard.classList.add('product-card')
        productCard.setAttribute('id',product.id)
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
renderProducts(productList);
const productCards = document.querySelectorAll(".product-card")



productCards.forEach(card =>{card.addEventListener('click',()=>  {
    const productDetail = document.querySelector("#product-detail");
    const productDetailImg = document.querySelector("#productDetailImg"); 
    const productDetailPrice= document.querySelector("#productDetailPrice");
    const productDetailName = document.querySelector("#productDetailName");

    const productCardImg = card.childNodes[0]
    const srcImg =productCardImg.getAttribute('src')
    productDetailImg.setAttribute('src',srcImg)
    
    const productCardInfo = card.childNodes[1]
    const productInfoDiv= productCardInfo.childNodes[0]

    const productInfoPrice = productInfoDiv.childNodes[0]
    productDetailPrice.innerText = productInfoPrice.textContent
    const productInfoName = productInfoDiv.childNodes[1]
    productDetailName.innerText = productInfoName.textContent

    
    
    productDetail.classList.toggle("inactive")
    shoppingCartAside.classList.add('inactive');
    mobilMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive');
    

})})



function showDetail(){
}