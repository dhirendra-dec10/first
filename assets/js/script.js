

//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
  }else{
    nav.classList.remove("scroll-on");
  }
}


//nav hide

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  });
});





//counter design

document.addEventListener("DOMContentLoaded", ()=>{
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() =>{
      current += increment;
      obj.textContent = current;
      if(current == end){
        clearInterval(timer);
      }
    }, step);
  }
  counter("count1", 0, 1233, 3000);
  counter("count2", 100, 1433, 2500);
  counter("count3", 0, 1333, 3000);
  counter("count4", 0, 1673, 3000);
});

















// aos animation

// function aoslnit(){
// 		AOS.init({
// 			duration:600,
// 			easing:'ease-in-out',
// 			once:true,
// 			mirror:false
// 			});
// 		}
// 		window.addEventListener('load', aoslnit);



/**
   * gallery Slider
   */
   
  // new Swiper('.gallery-slider', {
  //   speed: 400,
  //   loop: true,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20
  //     },
  //     640: {
  //       slidesPerView: 3,
  //       spaceBetween: 20
  //     },
  //     992: {
  //       slidesPerView: 5,
  //       spaceBetween: 10
  //     }
  //   }
  // });

  /**
   * Initiate gallery lightbox 
   */
   
  // const galleryLightbox = GLightbox({
  //   selector: '.gallery-lightbox'
  // });