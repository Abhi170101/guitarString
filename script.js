var initialPath=`M 10 250 Q 250 250 500 250`

var finalPath=`M 10 250 Q 250 250 500 250`

var string= document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    initialPath=`M 10 250 Q ${dets.x} ${dets.y} 500 250`

    gsap.to("svg path",{
        attr:{d:initialPath},
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})