class DefaultExapmle extends Example {

    init(){
        this.ctx.translate(200,200);
        this.draw();
    }

    draw(){
        //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
        let ctx = this.ctx;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`;
                ctx.fillRect(j * 25, i * 25, 25, 25);
            }
        }
    }

    constructor(){
        super('default');
    }
}

nav.add(new DefaultExapmle);

