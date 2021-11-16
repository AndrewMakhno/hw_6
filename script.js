document.getElementById('butleft').onclick = sliderLeft;
document.getElementById('butright').onclick = sliderRight;
var move = 0;

function sliderLeft() {
        var polosa = document.getElementById('polosa');
        move = move - 256;
        if (move < -1536) {
            move = 0;
        }
        polosa.style.left = move+'px';
}
function sliderRight() {
        var polosa = document.getElementById('polosa');
        move = move + 256;
        if (move > 0) {
            move = -1536;
        }
        polosa.style.left = move+'px';
}



