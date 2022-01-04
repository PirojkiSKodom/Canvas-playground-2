class Etude extends HTMLCanvasElement {

    fillWith(fillFunc) {
        let i = 0;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let cl = fillFunc(x, y);
                this.ImageData.data[i++] = cl.r;
                this.ImageData.data[i++] = cl.g;
                this.ImageData.data[i++] = cl.b;
                this.ImageData.data[i++] = cl.a;
            }
        }
        this.ctx.putImageData(this.ImageData, 0, 0);
    }

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.ctx = this.getContext('2d');
        this.ImageData = this.ctx.createImageData(width, height);

    }
}
customElements.define('canvas-etude', Etude, { extends: 'canvas' });

