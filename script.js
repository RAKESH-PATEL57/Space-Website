let scrollDownArrow = document.querySelector(".scrollDownArrow");

window.onscroll = (e) => {
    scrollDownArrow.classList.toggle("scrollBtnShowHide", window.scrollY > 100);
}


let earth = document.querySelector('.earth');

let tl = gsap.timeline({
  
})

tl.to('.earth', {
    x:-700,
    y:310,
    // rotate:360,
    opacity:0,
    scrollTrigger: {
        trigger: '.earth',
        start:'top 50%',
        end:'bottom 95%',
        scrub: true,   
        // markers:true
    }
});


//[[[[[[[[[[[[[[[[[[[[[[[[[[*************************** second page  ***********************]]]]]]]]]]]]]]]]]]]]]
let secondPagePlanetDetails = document.querySelector('.planet-details');
tl.from('#first-pl-details', {
    x:400,
    y:0,
    opacity:0,
    // rotate:360,
    scrollTrigger: {
        trigger: '#first-pl-details',
        start:'top 100%',
        end:'bottom 75%',
        scrub: true,   
        // markers:true
    }
});

// tl.to('#sMoon', {
//     x:-500,
//     y:200,
//     // rotate:360,
//     opacity:1,
//     scrollTrigger: {
//         trigger: '#sMoon',
//         start:'top 75%',
//         end:'bottom 95%',
//         scrub: true,   
//         // markers:true
//     }
// });

tl.from('#sMoon', {
    x:510,
    y:-150,
    // rotate:360,
    opacity:0,
    scrollTrigger: {
        trigger: '#sMoon',
        start:'top 75%',
        end:'bottom 95%',
        scrub: true,   
        markers:true
    }
});

tl.from('#sMoon', {
    x:510,
    y:-150,
    // rotate:360,
    opacity:0,
    scrollTrigger: {
        trigger: '#sMoon',
        start:'top 75%',
        end:'bottom 95%',
        scrub: true,   
        markers:true
    }
});