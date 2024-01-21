let scrollDownArrow = document.querySelector(".scrollDownArrow");

scrollDownArrow.classList.toggle("scrollBtnShowHide", window.scrollY > 100);

let earth = document.querySelector('.earth');

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.earth',
        start:'top 60%',
        end:'bottom 80%',
        scrub: true,   
        markers:true
    }
})

tl.to('.earth', {
    x:-1150,
    y:450,
    rotate:360
})