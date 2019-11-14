//Request 1: Click to Change Text.

var mainBanner = document.getElementById('main-banner');
var welcomeMsg = document.getElementById('welcome-msg');

function changeMsg() {
    welcomeMsg.innerHTML = 'Have a Good Time!';
}

mainBanner.addEventListener('click', changeMsg);

//Request 2: Click to Show/Close Menu.

var menuBtn = document.getElementById('main-menu-btn');