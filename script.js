const canvas = document.querySelector('.canvas')
const btnClear = document.querySelector('button')
const rangeInput =  document.querySelector('.range')
const rangeOutValue = document.querySelector('.rangeOutValue')
const inputColor = document.querySelector('.color')
const cursorRounded = document.querySelector('.rounded');

let brushSize = 20;

let brushColor = inputColor.value

function drawDot(x, y){
    const dot = document.createElement('span')
    dot.style.left = x + 'px'
    dot.style.top = y + 'px'
    dot.style.width = brushSize + 'px'
    dot.style.height = brushSize + 'px'
    dot.style.background = brushColor
    canvas.appendChild(dot)
}

function moveHandler(event) {
    drawDot(event.clientX, event.clientY )
}

function downHandler(event) {
    drawDot(event.clientX, event.clientY )
    canvas.addEventListener('mousemove', moveHandler)
    canvas.addEventListener("mouseup", () => {
        canvas.removeEventListener('mousemove', moveHandler)
    })


}
canvas.addEventListener('mousedown', downHandler)

btnClear.addEventListener('click', () => {
    document.querySelectorAll('span').forEach((el) => {
        el.remove()
    })
})

rangeInput.value = brushSize
rangeOutValue.innerHTML = 'Brush size: ' + brushSize

rangeInput.addEventListener('input', () => {
    brushSize = rangeInput.value
    rangeOutValue.innerHTML = 'Brush size: ' + brushSize

    cursorRounded.style.width = brushSize + 'px'
    cursorRounded.style.height = brushSize + 'px'
})

inputColor.addEventListener('input', () => {
    brushColor = inputColor.value
    cursorRounded.style.background = inputColor.value
})

//BRUSH

const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    cursorRounded.style.background = brushColor


}
canvas.addEventListener('mousemove', moveCursor)










