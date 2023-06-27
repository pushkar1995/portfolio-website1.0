const hamburgericon = document.querySelector('.fa-bars');
const menulist = document.querySelector('.mobile-menu-list');
const close = document.querySelector('.x-close-icon')
const navItems = document.querySelectorAll('.mobile-menu-list ul li')

const showMobileMenu = () => {
  hamburgericon.style.display = 'none';
  close.style.transform = 'translateY(0)';
  menulist.style.transform = 'translateY(0)';
}

const hideMobileMenu = () => {
  menulist.style.transform = 'translateX(-100%)';
  hamburgericon.style.display = 'block';
  close.style.transform = 'translateX(-25rem)';
};

hamburgericon.addEventListener('click', showMobileMenu);
close.addEventListener('click', hideMobileMenu);
navItems.forEach((item) => {
  item.addEventListener('click', hideMobileMenu);
});