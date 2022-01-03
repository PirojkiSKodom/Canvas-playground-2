class EtudeExample extends Example {

    init() {


        this.etude = new Etude(500, 500);
        this.delta = 0;


        this.ctx.translate(
            Math.floor(this.canvas.width / 2 - this.etude.width / 2),
            Math.floor(this.canvas.height / 2 - this.etude.height / 2));

        this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    dispose() {
        window.cancelAnimationFrame(this.cancelToken);// оч важн
    }

    draw() {
        this.etude.fillWith((x, y) => {
            x = (x - this.etude.width / 2) / 2;
            y = (y - this.etude.height / 2) / 2;
            return rgba(0, 128 + 128 * Math.sin((x ** 2 / x * y + y ** 2 / x * y + this.delta) / 50), 0);
        });

        this.ctx.drawImage(this.etude, 0, 0);

        this.delta += 3;
        this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    constructor() {
        super('EtudeExample');
    }
}

nav.add(new EtudeExample);