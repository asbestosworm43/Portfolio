
/*En annans kod via codepen*/
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', toggleNav);

function navToggle() {
  navElement.classList.toggle('.primary-navigation--visable');
}