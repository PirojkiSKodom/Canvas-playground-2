class LifeExample extends Example {

    init() {

        this.nx = 6;
        this.ny = 6;


        this.pool = new LifePool(Math.floor(this.canvas.width / this.nx), Math.floor(this.canvas.height / this.ny));
        this.ctx.imageSmoothingEnabled = false;

        if (!this.cancelToken)
            this.draw();
        // if (!this.cancelToken)
        //     this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }


    dispose() {
        //window.cancelAnimationFrame(this.cancelToken);// оч важн
        clearTimeout(this.cancelToken);
        this.cancelToken = null;
    }

    afterResize() {
        this.nx = this.canvas.width / this.pool.width;
        this.ny = this.canvas.height / this.pool.height;
        this.ctx.imageSmoothingEnabled = false;
    }

    draw() {
        this.pool.step();

        if (MBPressed.has(0)){
            let x = Math.floor(cursor.x / this.nx)-1;
            let y = Math.floor(cursor.y / this.ny)-1;

            this.pool.cells1[x][y] = 1;
        }

        this.pool.draw();

        this.ctx.drawImage(this.pool.etude, 0, 0, this.canvas.width, this.canvas.height);

        this.cancelToken = setTimeout(this.draw.bind(this), 50);
        // this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    constructor() {
        super(`Conway's Game of Life`);
    }
}

class LifePool {
    func(x, y) {
        let neigbours =
            this.cells1[x - 1][y - 1] +
            this.cells1[x][y - 1] +
            this.cells1[x + 1][y - 1] +
            this.cells1[x + 1][y] +
            this.cells1[x + 1][y + 1] +
            this.cells1[x][y + 1] +
            this.cells1[x - 1][y + 1] +
            this.cells1[x - 1][y];

        if (!this.cells1[x][y] && neigbours == 3) return 1;
        if (this.cells1[x][y] && neigbours < 2) return 0;
        if (this.cells1[x][y] && neigbours > 3) return 0;
        return this.cells1[x][y];
    }

    draw(){
        this.etude.fillWith((x, y) => ({
            r: 0,
            g: this.cells1[x][y] * 255,
            b: 0,
            a: 255,
        }));
    }

    step() {
        for (let x = 1; x < this.width - 1; x++) {
            for (let y = 1; y < this.height - 1; y++) {
                this.cells2[x][y] = this.func(x, y);
            }
        }

        [this.cells1, this.cells2] = [this.cells2, this.cells1];

        
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

        for (let x = 1; x < w-1; x++) {
            for (let y = 1; y < h-1; y++) {
                this.cells1[x][y] = Math.random() > 0.5 ? 1 : 0;
            }
        }
    }
}



nav.add(new LifeExample);