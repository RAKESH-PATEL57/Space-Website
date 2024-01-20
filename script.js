let earth = document.querySelector('.earth');

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.earth',
        start:'top center',
        scrub: true,
       
        // markers:true
    }
})

tl.to('.earth', {
    x:-1150,
    y:450,
    rotate:360
})