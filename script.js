window.onload = function() {
  
  console.log('All right !!!');

  // NavLinks

  addLinksClickHandler();

  // Slider

  switchPhoneScreens();
  // switchSlider();
}

// NavLinks

const addLinksClickHandler = () => {
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

// const switchSlider = () => {
//   const sliderItems = document.querySelectorAll('.slider__item');
//   let currentSliderItem = 0;
//   let isSelected = true;
//   const sliderHeadItem = document.querySelector('.slider__head');

//   function changeCurrentSliderItem(counter) {
//     currentSliderItem = (counter + sliderItems.length) % sliderItems.length;
//   }

//   function hideSliderItem(direction) {
//     isSelected = false;
//     sliderItems[currentSliderItem].classList.add(direction);
//     console.log(sliderHeadItem);    
//     sliderItems[currentSliderItem].addEventListener('animationend', function() {
//       this.classList.remove('slider__head_selected', direction);
//     });
//   }

//   function showSliderItem(direction) {
//     sliderItems[currentSliderItem].classList.add('slider__head_unselected', direction);
//     sliderItems[currentSliderItem].addEventListener('animationend', function() {
//       this.classList.remove('slider__head_unselected', direction);
//       this.classList.add('slider__head_selected');
//       isSelected = true;
      
//     });
//   }
 
//   function previousSliderItem(n) {
//     hideSliderItem('slider__head_to-right');
//     changeCurrentSliderItem(n - 1);
//     showSliderItem('slider__head_from-left');
//   }

//   function nextSliderItem(n) {
//     hideSliderItem('slider__head_to-left');
//     changeCurrentSliderItem(n + 1);
//     showSliderItem('slider__head_from-right');
//   }

//   document.querySelector('.arrow_left').addEventListener('click', function() {
//     if (isSelected) {
//       previousSliderItem(currentSliderItem);
//     }
//   });

//   document.querySelector('.arrow_right').addEventListener('click', function() {
//     if (isSelected) {
//       nextSliderItem(currentSliderItem);
//     }
//   }); 
// }

