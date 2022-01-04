(() => {// <------ самовызывающаяся стрелочная функция

    let e = new Example('namespace example');

    e.init = function () {
        this.ctx.translate(200, 200);
        this.draw();
    }

    e.draw = function () {
        let ctx = this.ctx;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                ctx.fillStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)})`;
                ctx.fillRect(j * 25, i * 25, 25, 25);
            }
        }
    }

    nav.add(e);

})();// <------ самовызывающаяся стрелочная функция