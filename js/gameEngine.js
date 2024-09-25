import { inputDir } from "./index.js";
let score = 0;
let hiScore = "";
let snakeArr = [{x: 13, y: 15}];
let food = {x: 6, y: 7};
const foodSound = new Audio('../assets/sound/food.mp3');
const gameOverSound = new Audio('assets/sound/gameover.mp3');

//check if the game is over
import { isCollide } from "./gameOver.js";

export function gameEngine() {
    // update snake and food
        //update the snake
        if(isCollide(snakeArr)){
            gameOverSound.play();
            inputDir.x = 0;
            inputDir.y = 0;
            alert("Game Over!! press any key to play again.");
            gameOverSound.pause();
            snakeArr = [{x: 13, y: 15}];
            if(hiScore < score){
                hiScore = JSON.stringify(score);
                window.localStorage.setItem("hiScore", hiScore);
            }
            score = 0;
            scoreBox.innerHTML = `Score: ${score}`;
            hiScoreBox.innerHTML = `Hi-Score: ${window.localStorage.getItem("hiScore")}`;
        }    
        //increment the score and regenerate the food after eating
        if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
            foodSound.play();
            score += 1;
            scoreBox.innerHTML = `Score: ${score}`;
            snakeArr.unshift({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y});
            let a = 2;
            let b = 16;
            food = {x: Math.round( a + (b-a) * Math.random()), y: Math.round( a + (b-a) * Math.random())};
        }
        //move the snake 
        for(let i = snakeArr.length - 2; i >= 0; i--){
            snakeArr[i+1] = {...snakeArr[i]};
        }
        snakeArr[0].x += inputDir.x;
        snakeArr[0].y += inputDir.y;

    // display snake and food
       //display the snake
       board.innerHTML = "";
       snakeArr.forEach((el, index)=> {
           let snakeElement = document.createElement("div");
           snakeElement.style.gridColumnStart = el.x;
           snakeElement.style.gridRowStart = el.y;
           if(index === 0){
            snakeElement.classList.add("head");
           }
           else{
            snakeElement.classList.add("snake");
           }
           board.appendChild(snakeElement);
       });
  
       //display the food
       let foodElement = document.createElement("div");
       foodElement.style.gridColumnStart = food.x;
       foodElement.style.gridRowStart = food.y;
       foodElement.classList.add("food");
       board.appendChild(foodElement);
}