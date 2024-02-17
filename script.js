gsap.from("#img1",{
    dalay:0.4,
    opacity:0,
    duration:1,
    y:60
})

gsap.from("#img2",{
    dalay:0.4,
    opacity:0,
    duration:1,
    x:60
})

gsap.from("#img3",{
    dalay:0.4,
    opacity:0,
    duration:1,
    y:-60
})

gsap.from("#main h1",{
    dalay:0.4,
    opacity:0,
    duration:1,
})

gsap.from(".page h5, .page h1, .page .about-us" ,{
    opacity: 0,
    stagger: 0.4,

    scrollTrigger: {
        trigger: ".page h5",
        scroller: "body",
        start: "top 50%",
        
    }
})