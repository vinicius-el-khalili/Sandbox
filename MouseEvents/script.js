// --------------------------------------------- POSITION
document.addEventListener('mousemove',()=>{
    document.querySelector('.mouse-position>p').innerHTML = `X:${event.clientX},Y:${event.clientY}`
})

// --------------------------------------------- MOVEMENT
document.addEventListener('mousemove',()=>{
    document.querySelector('.mouse-movement>p').innerHTML = `X:${event.movementX},Y:${event.movementY}`
})

// --------------------------------------------- HOVER
document.addEventListener('mouseover',()=>{
    document.querySelector('.mouse-movement>p').innerHTML = `X:${event.movementX},Y:${event.movementY}`
})
function HoverIn(){
    document.querySelector('.mouse-hover>p').innerHTML="Hey!"
}
function HoverOut(){
    document.querySelector('.mouse-hover>p').innerHTML=""
}