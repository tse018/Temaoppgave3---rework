const button = document.getElementById('mobile-menu');
const navBarMenu = document.querySelector('.navbar__menu');

/***** Model ******/
const navBar = {
   showMenu: false,
   notShowMenu: true
};

/******* View *******/
function updateView() {
   if(navBar.showMenu ===  true) {
      navBarMenu.classList.remove('active')
   } else {
      navBarMenu.classList.add('active')
   }
};

/****** Controller *******/
function clickedOnNavBar() {
   navBar.showMenu = !navBar.showMenu;
   updateView();
}

/**** addEventListener *********/
button.addEventListener('click', clickedOnNavBar)