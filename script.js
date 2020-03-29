window.onload = function() {
  
  console.log('All right !!!');

  // NavLinks
   
   changeSelectionByScrolling();
   selectNavLink();  

  // Slider

  switchPhoneScreens();
  switchSlider();

  //  Portfolio

  switchPortfolioTag();
  selectPortfolioItem(); 

  // Get a Quote

  submitForm();
}

// NavLinks

const changeSelectionByScrolling = () => {
  document.addEventListener('scroll', onScroll);

  function onScroll() {
    const currentPos = window.scrollY + 95;
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.main-menu a');

    sections.forEach((el) => {
      if ((el.offsetTop <= currentPos) && ((el.offsetTop + el.offsetHeight) > currentPos)) {
        navLinks.forEach((a) => {
          a.classList.remove('main-menu__link_selected');
          a.classList.add('main-menu__link_unselected'); 
          if (el.getAttribute('class').includes(a.getAttribute('href').substring(1))) {
            a.classList.remove('main-menu__link_unselected');
            a.classList.add('main-menu__link_selected');
          }
        })
      }
    })
  }
};

const selectNavLink = () => {
  document.querySelector('.main-menu').addEventListener('click', (e) => {
    if (e.target.classList.contains('main-menu__link')) {
      let clickedNavLink = e.target;
      removeSelectedNavLink();
      selectClickedNavLink(clickedNavLink);
    }
  })
};

const removeSelectedNavLink = () => {
  let navLinks = document.querySelectorAll('.main-menu .main-menu__link');  
  navLinks.forEach( link => {
    link.classList.remove('main-menu__link_selected');
    link.classList.add('main-menu__link_unselected');    
  });
};

const selectClickedNavLink = (clickedNavLink) => {  
  clickedNavLink.classList.remove('main-menu__link_unselected');
  clickedNavLink.classList.add('main-menu__link_selected');
};

 // Slider
 
const switchPhoneScreens = () => {  
  document.querySelector('.phone_vertical').addEventListener('click', () => {
    switchScreen('vertical');     
  })
  document.querySelector('.phone_horizontal').addEventListener('click', () => {
    switchScreen('horizontal');     
  })
};

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
};

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
};

//  Portfolio

const switchPortfolioTag = () => {
  document.querySelector('.portfolio__buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {     
      let clickedTag = e.target;
      removeSelectedTag();
      selectClickedTag(clickedTag);
      swapItems();
    }
  })
};

const removeSelectedTag = () => {
  let tags = document.querySelectorAll('.portfolio__buttons .button');  
  tags.forEach( item => {    
    item.classList.remove('button-selected');
  });
};

const selectClickedTag = (clickedTag) => { 
  clickedTag.classList.add('button-selected');
};

const selectPortfolioItem = () => {
  document.querySelector('.portfolio__work-examples').addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio__column-item')) {     
      let clickedPortfolioItem = e.target;
      removeSelectedPortfolioItem();
      selectClickedPortfolioItem(clickedPortfolioItem);
    }
  })
};

const removeSelectedPortfolioItem = () => {
  let portfolioItems = document.querySelectorAll('.portfolio__work-examples .portfolio__column-item');  
  portfolioItems.forEach( item => {    
    item.classList.remove('portfolio__column-item_selected');
  });
};

const selectClickedPortfolioItem = (clickedPortfolioItem) => { 
  clickedPortfolioItem.classList.add('portfolio__column-item_selected');
};

const swapItems = () => {
  let portfolioSection = document.querySelector('.portfolio__work-examples'); 
  let portfolioItems = document.querySelectorAll('.portfolio__work-examples .portfolio__column-item');
  let arrPortfolioItems = Array.from(portfolioItems);
  let shuffledPortfolioItems = arrPortfolioItems.sort(() => Math.random() - 0.5);

  portfolioItems.forEach( item => { item.remove(); });    
  shuffledPortfolioItems.forEach(el => { portfolioSection.appendChild(el); });
};

// Get a Quote

const submitForm = () => {
  const submitButton = document.querySelector('.feedback-form__submit');
  const okButton = document.querySelector('.modal-popup__button');
  
  const modal = document.querySelector('.modal');

  const userName = document.querySelector('.feedback-form__name');
  const userEmail = document.querySelector('.feedback-form__email');
  const userSubject = document.querySelector('.feedback-form__subject');
  const userMessage = document.querySelector('.feedback-form__textarea');  

  submitButton.addEventListener('click', (event) => {
    
    if ((userName.value !== '') && (userEmail.value !== '')) {
      event.preventDefault();
    document.body.style.overflowY = 'hidden';
      document.querySelector('.modal-popup__result').innerText = 'The letter was sent';      

      const subjectText = userSubject.value.toString();
      const messageText = userMessage.value.toString();

      if (subjectText !== '') {
        document.querySelector('.modal-popup__subject-text').innerText ='Subject: ' + subjectText;
      } else {
        document.querySelector('.modal-popup__subject-text').innerText ='No subject';
      }

      if (messageText !== '') {
        document.querySelector('.modal-popup__message-text').innerText ='Description: ' + messageText;
      } else {
        document.querySelector('.modal-popup__message-text').innerText ='No description';
      }

      modal.classList.remove('modal_hidden');
      modal.classList.add('modal_visible');
    }
  });

  okButton.addEventListener('click', (event) => {
    document.body.style.overflowY = '';
    document.querySelector('.feedback-form').reset();
    document.querySelector('.modal-popup__result').innerText = '';
    modal.classList.remove('modal_visible');
    modal.classList.add('modal_hidden');
  });
};