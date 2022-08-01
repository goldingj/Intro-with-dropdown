var mobileMenu = document.getElementById('mobile-menu');
var sideBar = document.getElementById('nav-bar-mobile');
var exitMobileMenu = document.getElementById('exit-mobile-menu')


function openSideBar(){
    sideBar.style.display = 'block';
    mobileMenu.style.display = 'none';
}

function closeSideBar(){
    sideBar.style.display = 'none';
    mobileMenu.style.display = 'block';

}


mobileMenu.addEventListener('click', openSideBar);
exitMobileMenu.addEventListener('click', closeSideBar);
