const menuMobile = document.querySelector('nav');

document.querySelector('.menu-opener').addEventListener('click',() => {
    if (menuMobile.style.display == 'block'){
        menuMobile.style.display = 'none'
    } else{
        menuMobile.style.display = 'block'
    }   
})
