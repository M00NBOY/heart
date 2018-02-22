var heart = document.querySelector('.heart');
var x = 25;
var y = 25;
var keyState = {};

window.addEventListener('keydown',function(event){
    keyState[event.keyCode || event.which] = true;
},true);

window.addEventListener('keyup',function(event){
    keyState[event.keyCode || event.which] = false;
},true);


function gameLoop() {

    if (x>0 && keyState[37] || keyState[81]){
    x -= 0.4;
    }

    if (x<53 && keyState[39] || keyState[68]){
    x += 0.4;
    }

    if (y>0 && keyState[38] || keyState[90]) {
        y -= 0.4;
    }

    if (y<53 && keyState[40] || keyState[83]) {
        y += 0.4;
    }


    heart.style.top = y + "vh";
    heart.style.left = x + "vh";

    setTimeout(gameLoop, 10);
}

gameLoop();
