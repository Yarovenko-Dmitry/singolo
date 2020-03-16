window.onload = function() {
  
  console.log('All right !!!');

  // NavLinks

  selectNavLink();

  // Slider

  switchPhoneScreens();
  switchSlider();

  //  Portfolio

  switchPortfolioTag();
  selectPortfolioItem();

}

// NavLinks

const selectNavLink = () => {
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
  navLinks.forEach( link => {
    link.classList.remove('main-menu__link_selected');
    link.classList.add('main-menu__link_unselected');    
  });
}

const selectClickedNavLink = (clickedNavLink) => {  
  clickedNavLink.classList.remove('main-menu__link_unselected');
  clickedNavLink.classList.add('main-menu__link_selected');
}

 // Slider
 
const switchPhoneScreens = () => {  
  document.querySelector('.phone_vertical').addEventListener('click', () => {
    switchScreen('vertical');     
  })
  document.querySelector('.phone_horizontal').addEventListener('click', () => {
    switchScreen('horizontal');     
  })
}

const switchScreen = (position) => { 
  const verticalFrame = document.querySelector('.vertical-frame');
  const horizontalFrame = document.querySelector('.horizontal-frame');
  if (position == 'vertical') {
    if (verticalFrame.classList.contains('display-none')) {
      verticalFrame.classList.remove('display-none');
    } else {
      verticalFrame.classList.add('display-none');
    }
  }
  if (position == 'horizontal') {
    if (horizontalFrame.classList.contains('display-none')) {
      horizontalFrame.classList.remove('display-none');
    } else {
      horizontalFrame.classList.add('display-none');
    }
  }
}

// Slider

const switchSlider = () => {

  let items = document.querySelectorAll('.slider__head');
  let stripColor = document.querySelector('.slider__bottom');
  let currentItem = 0;
  let isEnabled = true;

  function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
  }

  function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
      this.classList.remove('active', direction);
    });
  }

  function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
      this.classList.remove('next', direction);
      this.classList.add('active');
      isEnabled = true;
    });
  }

  function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
  }

  function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
  }

  function changeStripColor (currentItem) {
    if (!(currentItem)) {
      stripColor.classList.remove('slider__bottom_second');
      stripColor.classList.add('slider__bottom_first');
    } else {
      stripColor.classList.remove('slider__bottom_first');
      stripColor.classList.add('slider__bottom_second');
    }
  }

  document.querySelector('.arrow_left').addEventListener('click', function() {
    if (isEnabled) {
      previousItem(currentItem);
      changeStripColor (currentItem)
    }
  });

  document.querySelector('.arrow_right').addEventListener('click', function() {
    if (isEnabled) {
      nextItem(currentItem);
      changeStripColor (currentItem)
    }
  });  
}

//  Portfolio

const switchPortfolioTag = () => {
  document.querySelector('.portfolio__buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {     
      let clickedTag = e.target;
      removeSelectedTag();
      selectClickedTag(clickedTag);
    }
  })
}

const removeSelectedTag = () => {
  let tags = document.querySelectorAll('.portfolio__buttons .button');  
  tags.forEach( link => {    
    link.classList.remove('button-selected');
  });
}

const selectClickedTag = (clickedTag) => { 
  clickedTag.classList.add('button-selected');
}

//  Portfolio

const selectPortfolioItem = () => {
  document.querySelector('.four-columns').addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio__column-item')) {     
      let clickedPortfolioItem = e.target;
      removeSelectedPortfolioItem();
      selectClickedPortfolioItem(clickedPortfolioItem);
    }
  })
}

const removeSelectedPortfolioItem = () => {
  let PortfolioItems = document.querySelectorAll('.four-columns .portfolio__column-item');  
  PortfolioItems.forEach( link => {    
    link.classList.remove('portfolio__column-item_selected');
  });
}

const selectClickedPortfolioItem = (clickedPortfolioItem) => { 
  clickedPortfolioItem.classList.add('portfolio__column-item_selected');
}


// console.log('All right 1 !!!');
// console.log('All right 2 !!!');
// console.log('All right 3 !!!');