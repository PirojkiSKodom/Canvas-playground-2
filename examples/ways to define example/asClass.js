class ClassExapmle extends Example {

    init() {
        this.ctx.translate(200, 200);
        this.draw();
    }

    draw() {
        let ctx = this.ctx;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, 0, ${Math.floor(255 - 42.5 * j)})`;
                ctx.fillRect(j * 25, i * 25, 25, 25);
            }
        }
    }

    constructor() {
        super('class exapmle');
    }
}

nav.add(new ClassExapmle);