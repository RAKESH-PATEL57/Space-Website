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
tl.from('#first-pl-details', {
    x:-400,
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

tl.from('#mercury', {
    x:550,
    y:-150,
    // rotate:360,
    opacity:0,
    scrollTrigger: {
        trigger: '#mercury',
        start:'top 75%',
        end:'bottom 95%',
        scrub: true, 
       
        // markers:true
    },
    opacity:0
});

// tl.from('#tMoon', {
//     x:-610,
//     y:-465,
//     // rotate:360,
//     opacity:1,
//     scrollTrigger: {
//         trigger: '#tMoon',
//         start:'top 13%',
//         end:'bottom 50%',
//         scrub: true,   
//         // markers:true
//     },
// });



//*******************************[[[[[[[[[[[[[[[[[[[[[[ Third Page ******************************]]]]]]]]]]]]]]]]]]]]]]]
tl.from('#venus', {
    x:-1000,
    y:-750,
    // rotate:360,
    opacity:0,
    scrollTrigger: {
        trigger: '#venus',
        start:'top 39%',
        end:'bottom 15%',
        scrub: true,   
        // markers:true
    },
});
// tl.from('#fmercury', {
//     x:-450,
//     y:-320,
//     // rotate:360,
//     opacity:0,
//     scrollTrigger: {
//         trigger: '#fmercury',
//         start:'top 39%',
//         end:'bottom 50%',
//         scrub: true,   
//         // markers:true
//     },
// });

tl.from('#second-pl-details', {
    x:400,
    y:0,
    opacity:0,
    // rotate:360,
    scrollTrigger: {
        trigger: '#second-pl-details',
        start:'top 100%',
        end:'bottom 75%',
        scrub: true,   
        // markers:true
    }
});


