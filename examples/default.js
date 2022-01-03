class DefaultExapmle extends Example {
    draw() {
        //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
        for (let x = 0; x < this.canvas.width; x += 50) {
            for (let y = 0; y < this.canvas.height; y += 50) {
                this.ctx.fillStyle = `rgb(${(x /6)}, ${(y + x)/10}, 0)`;
                this.ctx.fillRect(x, y, 40, 40);
            }
        }
    }

    constructor() {
        super('default');
    }
}

nav.add(new DefaultExapmle);

