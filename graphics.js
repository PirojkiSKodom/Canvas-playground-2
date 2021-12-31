function globalInit(){
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    init()
}


function init(){
    
    draw();
}

function draw() {
    var ctx = canvas.getContext('2d');
    ctx.translate(300,200);

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                Math.floor(255 - 42.5 * j) + ', 0)';
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
}

