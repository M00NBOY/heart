var heart = document.querySelector('.heart');
var x = 200;
var y = 200;
var keyState = {};

window.addEventListener('keydown',function(event){
    keyState[event.keyCode || event.which] = true;
},true);

window.addEventListener('keyup',function(event){
    keyState[event.keyCode || event.which] = false;
},true);


function gameLoop() {

    if (x>1 && keyState[37] || keyState[81]){
    x -= 3;
    }

    if (x<415 && keyState[39] || keyState[68]){
    x += 3;
    }

    if (y>1 && keyState[38] || keyState[90]) {
        y -= 3;
    }

    if (y<415 && keyState[40] || keyState[83]) {
        y += 3;
    }


    heart.style.top = y + "px";
    heart.style.left = x + "px";

    setTimeout(gameLoop, 10);
}

gameLoop();
