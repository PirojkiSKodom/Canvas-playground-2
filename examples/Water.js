class WaterExample extends Example {


    init() {

        this.nx = 3;
        this.ny = 3;

        this.pool = new Pool(Math.floor(this.canvas.width / this.nx), Math.floor(this.canvas.height / this.ny));
        this.ctx.imageSmoothingEnabled = false;

        if (!this.cancelToken)
            this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }


    dispose() {
        window.cancelAnimationFrame(this.cancelToken);// оч важн
        this.cancelToken = null;
    }

    afterResize() {
        this.nx = this.canvas.width / this.pool.width;
        this.ny = this.canvas.height / this.pool.height;
    }

    mousedown(event) {
        let x = Math.floor(event.clientX / this.nx);
        let y = Math.floor(event.clientY / this.ny);

        let dropSize = 10000;
        this.pool.cells1[x][y] = dropSize;
        this.pool.cells1[x + 1][y] = dropSize;

    }

    draw() {
        this.pool.step();

        this.ctx.drawImage(this.pool.etude, 0, 0, this.canvas.width, this.canvas.height);

        this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    constructor() {
        super('Water');
    }
}

class Pool {
    func(x, y) {
        let avg = (
            this.cells1[x][y - 1] +
            this.cells1[x + 1][y] +
            this.cells1[x][y + 1] +
            this.cells1[x - 1][y]) / 4;

        const omega = 1.999;

        return avg * omega + (1 - omega) * this.cells2[x][y];
    }

    step() {
        for (let x = 1; x < this.width - 1; x++) {
            for (let y = 1; y < this.height - 1; y++) {
                this.cells2[x][y] = this.func(x, y);
            }
        }

        [this.cells1, this.cells2] = [this.cells2, this.cells1];

        this.etude.fillWith((x, y) => ({
            r: 0,
            g: 0,
            b: Math.abs(this.cells1[x][y]),
            a: 255,
        }));
    }


    constructor(w, h) {
        this.width = w;
        this.height = h;

        this.etude = new Etude(w, h);

        this.cells1 = [];
        for (let x = 0; x < w; x++) {
            this.cells1[x] = [];
            for (let y = 0; y < h; y++) {
                this.cells1[x][y] = 0;
            }
        }

        this.cells2 = [];
        for (let x = 0; x < w; x++) {
            this.cells2[x] = [];
            for (let y = 0; y < h; y++) {
                this.cells2[x][y] = 0;
            }
        }



    }
}



nav.add(new WaterExample);