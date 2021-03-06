class SimpleAnimation extends Example {

    init() {
        if (!this.peka){
            this.peka = new Image();
            this.peka.onload = this.draw.bind(this);
            this.peka.onerror = () => {
                alert('stickerboom.ru - лег, достаю пеку из загашника');
                this.peka.src = "doc files/images/back up yoba.png";
            }
            //this.peka.src = "https://stickerboom.ru/files/2014/11/13/1735x03a8-300x300.png";
            this.peka.src = "doc files/images/back up yoba.png";//похоже он лег навсегда :(
        }

        this.ctx.translate(this.canvas.width / 2, 100);
    }

    dispose(){
        window.cancelAnimationFrame(this.cancelToken);// оч важн
        this.peka = null;
    }

    draw() {
        this.ctx.drawImage(this.peka, -this.peka.width/2, -this.peka.height/2);
        this.ctx.rotate(0.02);
        this.ctx.translate(7,0);

        this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    constructor() {
        super('simple animation');
    }
}

nav.add(new SimpleAnimation);