const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal-close');
const modalclose = document.querySelector('.modal');
const container = document.querySelector('.modal-container');
var header = document.getElementById('header');
var menuMobile = document.getElementById('menu-mobile');
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
var headerHeight = header.clientHeight;

function showbuyticketr() {
    modal.classList.add('open')
}

function closebtn() {
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showbuyticketr)
}
close.addEventListener('click', closebtn)
modalclose.addEventListener('click', closebtn)
container.addEventListener('click', function(event) {
    event.stopPropagation()
})
menuMobile.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function() {
        var isParenMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParenMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}