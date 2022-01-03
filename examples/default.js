class DefaultExapmle extends Example {
    init() {
        this.dx = 1 + Math.trunc(Math.random() * 10);
        this.dy = 1 + Math.trunc(Math.random() * 10);
        this.dz = 1 + Math.trunc(Math.random() * 10);

        this.draw();
    }

    afterResize(){
        this.draw();
    }

    draw() {
        //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
        for (let x = 0; x < this.canvas.width; x += 50) {
            for (let y = 0; y < this.canvas.height; y += 50) {
                this.ctx.fillStyle = `rgb(${(x / this.dx)}, ${(y+x)/2 / this.dy}, ${(y) / this.dz})`;
                this.ctx.fillRect(x, y, 40, 40);
            }
        }
    }

    constructor() {
        super('default');
    }
}

nav.add(new DefaultExapmle);

