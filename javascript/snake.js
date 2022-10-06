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

    //to sart, and resart the game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        //randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    //function that deals with ALL the outcomes of the Snake
    function moveOutcomes() {
     //deals with snake hitting border and snake hitting self
        if (
         (currentSnake[0] + width >= (width * width) && direction === width ) || //if snake hits bottom 
        (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake hits the top
        squares[currentSnake[0] + direction].classList.contains('snake') //if the snake goes into itself
        ) {
            return clearInterval(interval) //this will clear the interval if any of the above happens
        }

        const tail = currentSnake.pop() //removes last ite of the array and shows it
        squares[tail].classList.remove('snake') //removes class of snake from the TAIL
        currentSnake.unshift(currentSnake[0] + direction) //gives direction the head of the array
    
    //deals with snake getting apple
    if(squares[currentSnake[0]].classList.contains('apple') {

    })
    
   



    //assign functions to keycodes
    function control(e)
    squares[currentIndex].classList.remove('snake')

    if(e.keyCode === 39) {
        direction = 1 //if we press the right arrow on our keyboard, the snake will go right
    } else if (e.keyCode === 38) {
        direction = -width //if we press the up arrow, the snake will go back
    } else if (e.keyCode === 37) {
    direction -1 //if we press left, the snake will go left one div
 } else if (e.keyCode === 40) {
direction = +width //if we press down, the snake head will instantly appear in the div ten divs from where you are now
 }
}

document.addEventListener('keyup', control)


)