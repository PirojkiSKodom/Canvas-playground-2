class GraphsExapmle extends Example {


    draw() {
        this.ctx.resetTransform();
        this.ctx.fillStyle = `rgb(0,0,64)`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        let center = {
            x: Math.floor(this.canvas.width / 2),
            y: Math.floor(this.canvas.height / 2),
        }

        //рисую оси координат
        this.ctx.strokeStyle = `rgb(255,255,255)`;
        this.ctx.lineWidth = 2;

        this.ctx.beginPath();
        this.ctx.moveTo(0, center.y);
        this.ctx.lineTo(this.canvas.width, center.y);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(center.x, 0);
        this.ctx.lineTo(center.x, this.canvas.height);
        this.ctx.stroke();

        //рисую график

        let omgWatIsIt = function (x) {
            return 100 * Math.sin(x / 100);
        }

        this.ctx.strokeStyle = `rgb(0,255,0)`;
        this.ctx.lineWidth = 1;
        this.ctx.translate(center.x, center.y);
        this.ctx.scale(1, -1);


        this.ctx.beginPath();
        this.ctx.moveTo(-center.x, 0);
        for (let x = -center.x; x < center.x; x++) {
            let y = omgWatIsIt(x);
            this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();

    }

    constructor() {
        super('графики таинственных функций');
    }
}

nav.add(new GraphsExapmle);
