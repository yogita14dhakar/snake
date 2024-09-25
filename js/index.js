//game constants and variables
let inputDir = {x: 0, y: 0};
const moveSound = new Audio('assets/sound/move.mp3');

//game functions
import main from "./gameFunction.js";


//main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', (e)=> {
    inputDir = {x: 0, y: 1}; //start the game
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
});

export { inputDir };