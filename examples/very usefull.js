class UsefullExample extends Example {
    //пример визуализации решений этой задачи https://www.codewars.com/kata/5547cc7dcad755e480000004

    init() {
        this.etude = new Etude(500, 500);
        this.n = 5;
        this.etude.camera.zoom = 0.1;
        this.etude.camera.startZoom = 0.1;
        this.etude.camera.speed = 20;
        this.etude.camera.zoomSpeed = 1.1;

        this.etude.ctx.font = '20px serif';
        this.etude.ctx.fillStyle = `rgb(255,255,255)`

        this.ctx.fillStyle = `rgb(0,34,34)`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = `rgb(255,255,255)`;
        this.ctx.font = '15px serif';
        this.ctx.fillText(`WASD ZX - управление камерой, FG - изменить N, мы типа берем 2 числа x и y из промежутка (1-n), находим сумму оставшихся и закрашиваем точку (x,y) цветом`, 120, 20); 
        this.ctx.fillText(`черное - x||y < 0, красное - произведение x*y меньше суммы, синее - больше, зеленое - в точности равно сумме (то шо мы ищем), блеклое - x||y > N`, 120, 40);

        this.ctx.translate(
            Math.floor(this.canvas.width / 2 - this.etude.width / 2),
            Math.floor(this.canvas.height / 2 - this.etude.height / 2));

        if (!this.cancelToken)
            this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    dispose() {
        window.cancelAnimationFrame(this.cancelToken);// оч важн
        this.cancelToken = null;
    }

    draw() {
        this.etude.camera.defaultMove();

        if (keysPressed.has('KeyF')) if (this.n > 0) this.n--;
        if (keysPressed.has('KeyG')) this.n++;


        //собственно логика рисования
        this.etude.fillWith((x, y) => {
            x = Math.floor(x);
            y = Math.floor(y);

            if (x < 0 || y < 0) return rgba(0, 0, 0);

            let n = Math.floor(this.n);

            let sum = (n + 1) * n / 2//сумма арифметической прогресии от 1 до n с шагом 1

            let result = rgba(0, 0, 0);
            if (x * y < sum - x - y) result = rgba(128, 0, 0);
            if (x * y == sum - x - y) result = rgba(0, 255, 0);
            if (x * y > sum - x - y) result = rgba(0, 0, 200);

            if (x > n || y > n) result = rgba(result.r / 2, result.g / 2, result.b / 2);

            return result;
        });

        this.etude.ctx.fillText(`N = ${this.n}`, 5, 20);

        this.ctx.drawImage(this.etude, 0, 0);

        this.cancelToken = window.requestAnimationFrame(this.draw.bind(this));
    }

    constructor() {
        super('Usefull example');
    }
}

nav.add(new UsefullExample);