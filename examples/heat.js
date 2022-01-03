class HeatExample extends Example {


    init() {

        this.n = 3;
        this.pool = new Pool(Math.floor(this.canvas.width / this.n), Math.floor(this.canvas.height / this.n));
        this.ctx.imageSmoothingEnabled = false;


        this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }


    dispose() {
        window.cancelAnimationFrame(this.cancelToken);// оч важн
    }

    mousedown(event) {
        let x = Math.floor(event.clientX / this.n);
        let y = Math.floor(event.clientY / this.n);

        this.pool.cells1[x][y] = 100000;
        this.pool.cells1[x+1][y] = 100000;

    }

    draw() {
        this.pool.step();

        this.ctx.drawImage(this.pool.etude, 0, 0, this.canvas.width, this.canvas.height);

        this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    constructor() {
        super('HeatExample');
    }
}

class Pool {
    func(x, y) {
        let avg = (
            this.cells1[x - 1][y] +
            this.cells1[x][y - 1] +
            this.cells1[x + 1][y] +
            this.cells1[x][y + 1]) / 4


        return avg ;
    }

    step() {
        for (let x = 1; x < this.width - 1; x++) {
            for (let y = 1; y < this.height - 1; y++) {
                this.cells2[x][y] = this.func(x, y);
            }
        }

        [this.cells1, this.cells2] = [this.cells2, this.cells1];

        this.etude.fillWith((x, y) => ({
            r: Math.abs(this.cells1[x][y]),
            g: 0,
            b: 0,
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



nav.add(new HeatExample);