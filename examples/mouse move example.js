class MouseMoveExample extends Example {
    init() {
        this.ctx.fillStyle = `rgba(255, 0, 0, 0.2)`;
        this.ctx.fillRect(0,0,0,0);
    }

    mousemove(event) {
        let circle = new Path2D();
        circle.arc(event.clientX, event.clientY, 25, 0, 2 * Math.PI);

        this.ctx.fill(circle);
    }

    mousedown(event) {
        this.ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`;
    }

    constructor() {
        super('mouse move');
    }
}

nav.add(new MouseMoveExample);