class SaluteExample extends Example {


    init() {
        this.ctx.fillStyle = `rgba(0,0,0,0.1)`;
        this.ctx.lineWidth = 3;
        this.ctx.lineJoin = 'round';

        this.lastx = 0;
        this.lasty = 0;

        if (!this.cancelToken)
            this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    dispose() {
        window.cancelAnimationFrame(this.cancelToken);// оч важн
        this.cancelToken = null;
    }


    mousedown(event) {
        for (let i = 0; i < 20; i++) {
            this.rockets.push(new Rocket({
                x: event.clientX,
                y: event.clientY,
                stepLength: 5 + Math.random() * 10,
                angle: Math.random() * 2 * Math.PI,
                angleAccel: 0,
                angleAccelAccel: (Math.random() - 0.5) / 10,
                lifetime: 200 + Math.floor(Math.random() * 100),
                color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
            }));
        }
    }



    mousemove(event) {
        let dx = event.clientX - this.lastx;
        let dy = event.clientY - this.lasty;
        let length = Math.sqrt(dx ** 2 + dy ** 2);
        let angle = Math.atan((dy) / (dx));

        this.rockets.push(new Rocket({
            x: event.clientX,
            y: event.clientY,
            stepLength: 1 + length / 5,
            angle: dx < 0 ? angle + Math.PI : angle,
            angleAccel: 0,
            angleAccelAccel: (Math.random() - 0.5) / 10,
            lifetime: 70,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        }));

        this.lastx = event.clientX;
        this.lasty = event.clientY;
    }

    draw() {
        for (let r of this.rockets) {
            let sx = r.x;
            let sy = r.y;
            r.step();

            this.ctx.strokeStyle = r.color;

            this.ctx.beginPath();
            this.ctx.moveTo(sx, sy);
            this.ctx.lineTo(r.x, r.y);
            this.ctx.stroke();
        }

        this.rockets = this.rockets.filter(r => r.lifetime > 0);

        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    constructor() {
        super('Salute');
        this.rockets = [];

    }
}

class Rocket {
    step() {
        let dx = this.stepLength * Math.cos(this.angle);
        let dy = this.stepLength * Math.sin(this.angle);

        this.x += dx;
        this.y += dy;

        this.angle += this.angleAccel;
        this.angleAccel += this.angleAccelAccel;

        this.lifetime--;
    }

    constructor({ x, y, stepLength, angle, angleAccel, angleAccelAccel, lifetime, color }) {
        this.x = x;
        this.y = y;
        this.stepLength = stepLength;
        this.angle = angle;
        this.angleAccel = angleAccel;
        this.angleAccelAccel = angleAccelAccel;
        this.lifetime = lifetime;
        this.color = color;
    }
}

nav.add(new SaluteExample);