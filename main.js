const nav = document.querySelector('#header nav')
const menuTroca = document.querySelectorAll('nav .toggle')
//Abre e fecha o menu.
for (const element of menuTroca) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) 
   link.addEventListener('click', function () {
   nav.classList.remove('show')
})

const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;

function changeHeader(){
  
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } 
  else { 
    header.classList.remove('scroll')
  }
} 
const backToTopButton = document.querySelector('.back-to-top')
function backToTop(){
  
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } 
  else { 
    backToTopButton.classList.remove('show')
  }
}
window.addEventListener('scroll', function () {
changeHeader()
backToTop()
activeMenuSection()
})
//Carrousel
const swiper = new Swiper('.swiper', {
 slidesPerView: 1,
 pagination: {
   el: '.swiper-pagination',
   type: 'bullets',
 },
 mousewheel: true,
 keyboard: true,
 breakpoints: {
  767: {
    slidesPerView: 2,
    setWrapperSize: true
  }
 }
});

//ScrollReveal((
//const scrollReveal = ScrollReveal({
//  origin: 'top',
//  distance: '30px',
//  duration: 800,
//  reset: true
//})
//scrollReveal.reveal(`#home .text, #home .image`, {interval: 200})

ScrollReveal().reveal('#home .text, #home .image, .card1, #contact .links, .social',{ 
  delay: 100,
  origin: 'top',
  distance: '40px',
  duration: 800,
  reset: true
});
ScrollReveal().reveal('#about .text, #about .image, .card2, .logo-footer, .p2',{ 
  delay: 100,
  origin: 'left',
  distance: '40px',
  duration: 800,
  reset: true
});
ScrollReveal().reveal('#services .text, .card3, .p1',{ 
  delay: 100,
  origin: 'right',
  distance: '40px',
  duration: 800,
  reset: true
});
ScrollReveal().reveal('#contact .text',{ 
  delay: 100,
  origin: 'top',
  distance: '40px',
  duration: 700,
  reset: true
});

// menu ativo section visivel na pagina
const sections = document.querySelectorAll('main section[id]')
 
function activeMenuSection(){
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  for (const section of sections){
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd){
        document
        .querySelector('nav ul li a[href*=' + sectionId + ']' )
        .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']' )
      .classList.remove('active')
    }
  }
}