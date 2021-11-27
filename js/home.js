'use strict';

const introHeading = document.querySelector('.intro_h1');
const strName = introHeading.textContent;
const splitText = strName.split('');
introHeading.textContent = ``;

for (let i = 0; i < splitText.length; i++) {
   introHeading.innerHTML += `<span>` + splitText[i] + `</span>`;
}
let char = 0;
let timer = setInterval(onTick, 40);

function onTick() {
   const span = introHeading.querySelectorAll('span')[char];
   span.classList.add('fade');
   char++;
   if (char === splitText.length) {
      complete();
      return;
   }
}

function complete() {
   clearInterval(timer);
   timer = null;
}

/// Navigation ////
const body = document.body;
let lastscroll = 0;

window.addEventListener('scroll', () => {
   const currentScroll = window.pageYOffset;

   if (currentScroll <= 0) {
      body.classList.remove('scroll-up');
   }

   if (currentScroll > lastscroll && !body.classList.contains('scroll-down')) {
      body.classList.remove('scroll-up');
      body.classList.add('scroll-down');
   }
   if (currentScroll < lastscroll && body.classList.contains('scroll-down')) {
      body.classList.remove('scroll-down');
      body.classList.add('scroll-up');
   }
   lastscroll = currentScroll;
});

//// Navbar ////////

const btnMenu = document.querySelector('.btn_menu');
const navUl = document.querySelector('.nav_ul');
const bodyEl = document.querySelector('body');
const navLi = document.querySelectorAll('.nav_li');


btnMenu.addEventListener('click', () => {
   navUl.classList.toggle('active');
   btnMenu.classList.toggle('toggle');
   body.classList.toggle('overflow');
});
