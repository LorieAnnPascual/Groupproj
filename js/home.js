'use strict';

const introHeading = document.querySelector('.intro_h1');
const btnMenu = document.querySelector('.btn_menu');
const navUl = document.querySelector('.nav_ul');
const navLi = document.querySelectorAll('.nav_li');
const navA = document.querySelectorAll('.nav_a');
const section1Title = document.querySelector('.section1_h2');
const section1P = document.querySelector('.section1_p');
const strName = introHeading.textContent;
const splitText = strName.split('');
// let char = 0;
// let timer = setInterval(onTick, 40);
introHeading.textContent = ``;
const body = document.body;
let lastscroll = 0;

function revealIntro() {
   let char = 0;
   let timer = setInterval(onTick, 40);
   for (let i = 0; i < splitText.length; i++) {
      introHeading.innerHTML += `<span>` + splitText[i] + `</span>`;
   }

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
}
revealIntro();

/// Navigation ////

window.addEventListener('scroll', () => {
   //// Header ///
   const currentScroll = window.pageYOffset;
   console.log(currentScroll);

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
   //// section1 ////
   if (currentScroll >= 380) {
      section1Title.classList.add('reveal');
      section1P.classList.add('p_reveal');
   } else {
      section1Title.classList.remove('reveal');
      section1P.classList.remove('p_reveal');
   }
   if (currentScroll > 1400) {

      section1Title.classList.remove('reveal');
      section1P.classList.remove('p_reveal');
   }


   lastscroll = currentScroll;
});

//// Navbar ////////

btnMenu.addEventListener('click', () => {
   navUl.classList.toggle('active');
   btnMenu.classList.toggle('toggle');
   // body.classList.toggle('overflow');
   closeNav();
});

function closeNav() {
   for (let i = 0; i < navA.length; i++) {
      navA[i].addEventListener('click', () => {
         navUl.classList.remove('active');
         btnMenu.classList.remove('toggle');
         // body.classList.toggle('overflow');
      });
   }
}


