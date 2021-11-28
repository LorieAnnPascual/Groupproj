// // Ombrog Animation

//  pop up
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