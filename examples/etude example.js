class EtudeExample extends Example {

    init() {


        this.etude = new Etude(500, 500);
        this.delta = 0;


        this.ctx.translate(
            Math.floor(this.canvas.width / 2 - this.etude.width / 2),
            Math.floor(this.canvas.height / 2 - this.etude.height / 2));

        this.draw();
    }

    dispose() {
        window.cancelAnimationFrame(this.cancelToken);// оч важн
    }

    draw(timeStamp) {
        
            




        this.etude.fillWith((x, y) => rgba(0, y * y + x * x + this.delta, 0));

        this.ctx.drawImage(this.etude, 0, 0);

        this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));

        if (this.prevTimeStamp !== undefined) {
            console.log((timeStamp - this.prevTimeStamp) / 10);
            this.delta += (timeStamp - this.prevTimeStamp) / 10;
        }
        this.prevTimeStamp = timeStamp;
    }

    constructor() {
        super('EtudeExample');
    }
}

nav.add(new EtudeExample);