window.onload = function() {
  // window.onunload = function() {
  //   return false;
  // }
  console.log('All right !!!');

  // NavLinks

  // banNavLinks();  

  addTagsClickHandler();
}

const banNavLinks = () => {
  document.querySelector('.main-menu').addEventListener('click', function(e) {
  // document.querySelector('.main-menu__link').addEventListener('click', function(e) {
    e.preventDefault();
  })
}

const addTagsClickHandler = () => {
  document.querySelector('.main-menu').addEventListener('click', (e) => {
    if (e.target.classList.contains('main-menu__link')) {
      let clickedNavLink = e.target;
      removeSelectedNavLink();
      selectClickedNavLink(clickedNavLink);
    }
  })
}

const removeSelectedNavLink = () => {
  let navLinks = document.querySelectorAll('.main-menu .main-menu__link');
  console.log(navLinks);
  navLinks.forEach( link => {
    link.classList.remove('main-menu__link_selected');
    link.classList.add('main-menu__link_unselected');    
  });
}

const selectClickedNavLink = (clickedNavLink) => {
  console.log(clickedNavLink);
  clickedNavLink.classList.remove('main-menu__link_unselected');
  clickedNavLink.classList.add('main-menu__link_selected');
}