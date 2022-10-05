document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid2 div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.query('.start')

    const width = 10
    let currentIndex = 0 //so first div in our grid
    let appleIndex = 0 //so first div in our grid
    let currentSnake = [2,1,0] //so div in our grid being 2 (or the Head) and 0 being the end (Tail with all 1's being the body from now on)
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    //assign functions to keycodes
    function control(e)
    squares[currentIndex].classList.remove('snake')

    if(e.keyCode === 39) {
        direction = 1 //if we press the right arrow on our keyboard, the snake will go right
    } else if (e.keyCode === 38) {
        direction = -width //if we press the up arrow, the snake will go back
    }

 }


)