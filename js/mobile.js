const button = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

/***** Model ******/
const navbar = {
   showMenu: false,
   notShowMenu: true
};

/******* View *******/
function updateView() {
   if(navbar.showMenu ===  true) {
      navbarMenu.classList.remove('active')
   } else {
      navbarMenu.classList.add('active')
   }
};

/****** Controller *******/
function clickedOnNavbar() {
   navbar.showMenu = !navbar.showMenu;
   updateView();
}

/**** addEventListener *********/
button.addEventListener('click', clickedOnNavbar)