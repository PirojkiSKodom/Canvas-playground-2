let e = new Example('module example');

e.init = function () {
    this.ctx.translate(200, 200);
    this.draw();
}

e.draw = function () {
    let ctx = this.ctx;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            ctx.fillStyle = `rgb(${Math.floor(0 + 42.5 * i)}, ${Math.floor(0 + 42.5 * j)}, 0)`;
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
}

nav.add(e);