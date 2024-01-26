const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline()
tl.to("#page1", {
    y: "100vh",
    scale: 0.4,
    duration:0
})
tl.to("#page1", {
    y: "10vh",
    duration: 1,
    delay:1
})
tl.to("#page1", {
    rotate: 720,
    y: "0vh",
    scale: 1,
    duration:0.8
})