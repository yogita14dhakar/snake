import { gameEngine } from "./gameEngine.js";

//game constants and variables
let speed = 5;
let lastPaintTime = 0;

//game functions
export default function main (ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    
}