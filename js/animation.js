// // Ombrog Animation

// var spanText = function spanText(text) {
//    var string = text.innerText;
//    var spaned = '';
//    for (var i = 0; i < string.length; i++) {
//      if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
//      else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
//    }
//    text.innerHTML = spaned;
//  }
 
//  var headline = document.querySelector("h1");
 
//  spanText(headline);
 
//  let animations = document.querySelectorAll('.animation');
 
//  animations.forEach(animation => {
//    let letters = animation.querySelectorAll('span');
//    letters.forEach((letter, i) => {
//      letter.style.animationDelay = (i * 0.1) + 's';
//    })
//  })
 
window.addEventListener("scroll", ()=>{
  let content = document.querySelector(".about-right");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if(contentPosition < screenPosition){
      content.classList.add("active");
  }else{
      content.classList.remove("active");
  }
});
window.addEventListener("scroll", ()=>{
  let content = document.querySelector(".about-right-meynard");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if(contentPosition < screenPosition){
      content.classList.add("active");
  }else{
      content.classList.remove("active");
  }
});
window.addEventListener("scroll", ()=>{
  let content = document.querySelector(".about-left");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if(contentPosition < screenPosition){
      content.classList.add("active");
  }else{
      content.classList.remove("active");
  }
});