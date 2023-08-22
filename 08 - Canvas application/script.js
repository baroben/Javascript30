const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Plusieurs paramètres à initialiser avant de dessiner, il faut préciser une couleur et une forme de ligne
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let hue = 0;
ctx.lineWidth = '70';

//Flag qui sera a true quand on clique et qui repasse à false quand on déclique
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e){
    if(!isDrawing)return;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX,lastY);
    //go to
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke(); //Permet d'afficher les modifications
    [lastX,lastY] = [e.offsetX,e.offsetY];
    hue = hue<360?hue+1:0;
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e) => {
    isDrawing=true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
});
canvas.addEventListener('mouseup',() => isDrawing=false);
canvas.addEventListener('mouseout',() => isDrawing=false);


