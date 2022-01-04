class Etude extends HTMLCanvasElement {

    fillWith(fillFunc) {
        let i = 0;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let truepos = this.camera.transform(x - this.width / 2, y - this.height / 2);
                let cl = fillFunc(truepos.x, truepos.y);
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

        this.camera = new Camera(0, 0);
        //this.camera = new Camera(width / 2, height / 2);
    }
}
customElements.define('canvas-etude', Etude, { extends: 'canvas' });

