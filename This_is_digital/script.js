gsap.from("#img1",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:60
})
gsap.from("#img2",{
    opacity:0,
    duration:1,
    delay:0.4,
    x:60
})
gsap.from("#img3",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:-60
})

gsap.from("#main h1",{
    opacity:0,
    duration:1,
    delay:0.4,
})


gsap.from(".middle1",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:60,
    
})

gsap.from(".middle1 h4",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:60,
    autoAlpha : 0,
    scale: 0.5,
    scrollTrigger:{
        trigger: ".middle1_in",
        marker: true,
        start : "top 0%",
        end: "bottom 40%"
    }
})

gsap.from(".middle1 h2",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:60,
    autoAlpha : 0,
    scale: 0.5,
    scrollTrigger:{
        trigger: ".middle1_in",
        marker: true,
        start : "top 0%",
        end: "bottom 40%"
    }
})

