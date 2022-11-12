export function displayMenu() {
  const desktopNav = document.querySelector('.desktop-nav');
  const navMenuOpen = document.querySelector('.nav-menu-open');
  const navMenuClose = document.querySelector('.nav-menu-close');
  desktopNav.classList.toggle('popup');
  navMenuOpen.classList.toggle('popup');
  navMenuClose.classList.toggle('popup');
}
