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


//[[[[[[[[[[[[[[[[[[[[[[[[[[***************************  Mercury  ***********************]]]]]]]]]]]]]]]]]]]]]
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
});


//*******************************[[[[[[[[[[[[[[[[[[[[[[      Venus       ]]]]]]]]]]]]]]]]]]] ******************************]]]]]]]]]]]]]]]]]]]]]]]
tl.from('#venus', {
    x:-1000,
    y:-750,
    // rotate:360,
    opacity:0,
    scrollTrigger: {
        trigger: '#venus',
        start:'top 19%',
        end:'bottom 15%',
        scrub: true,   
        // markers:true
    },
});

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

//[[[[[[[[[[[[[[[[[[[[[[[[[[***************************  Earth  ***********************]]]]]]]]]]]]]]]]]]]]]

tl.from('#earth', {
    x:1050,
    y:-800,
    // rotate:360,
    opacity:0,
    scrollTrigger: {
        trigger: '#earth',
        start:'top 19%',
        end:'bottom 15%',
        scrub: true,     
        // markers:true
    },
});

tl.from('#third-pl-details', {
    x:-400,
    y:0,
    opacity:0,
    // rotate:360,
    scrollTrigger: {
        trigger: '#third-pl-details',
        start:'top 100%',
        end:'bottom 75%',
        scrub: true,   
        // markers:true
    }
});

//*******************************[[[[[[[[[[[[[[[[[[[[[[      mars       ]]]]]]]]]]]]]]]]]]] ******************************]]]]]]]]]]]]]]]]]]]]]]]
tl.from('#mars', {
    x:-1000,
    y:-750,
    // rotate:360,
    opacity:0,
    scrollTrigger: {
        trigger: '#mars',
        start:'top 19%',
        end:'bottom 15%',
        scrub: true,   
        // markers:true
    },
});

tl.from('#fourth-pl-details', {
    x:400,
    y:0,
    opacity:0,
    // rotate:360,
    scrollTrigger: {
        trigger: '#fourth-pl-details',
        start:'top 100%',
        end:'bottom 75%',
        scrub: true,   
        // markers:true
    }
});

