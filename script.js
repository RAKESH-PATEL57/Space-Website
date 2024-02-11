let scrollDownArrow = document.querySelector(".scrollDownArrow");

window.onscroll = (e) => {
    scrollDownArrow.classList.toggle("scrollBtnShowHide", window.scrollY > 100);
}


let earth = document.querySelector('.earth');

let tl = gsap.timeline({
  
})

tl.to('.earth', {
    x:-1150,
    y:450,
    rotate:360,
    scrollTrigger: {
        trigger: '.earth',
        start:'top 60%',
        end:'bottom 60%',
        scrub: true,   
        // markers:true
    }
});


//[[[[[[[[[[[[[[[[[[[[[[[[[[*************************** second page  ***********************]]]]]]]]]]]]]]]]]]]]]
let secondPagePlanetDetails = document.querySelector('.planet-details');
tl.from('.planet-details', {
    x:500,
    y:0,
    opacity:0,
    // rotate:360,
    scrollTrigger: {
        trigger: '.planet-details',
        start:'top 100%',
        end:'bottom 60%',
        scrub: true,   
        // markers:true
    }
});