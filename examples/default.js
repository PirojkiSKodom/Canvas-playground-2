(()=>{
    let e = new Example('default');

    e.init = () => {
        ctx.translate(300, 200);
        window.requestAnimationFrame(e.draw);
    }

    let d = 0;
    e.draw = () => {


        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                ctx.fillStyle = 'rgb(' + Math.floor((255 - 42.5 * i + d) % 255) + ', ' +
                    Math.floor(255 - 42.5 * j) + ', 0)';
                ctx.fillRect(j * 25, i * 25, 25, 25);
            }
        }

        d += 10;
        if (e.active) window.requestAnimationFrame(e.draw);
    }

    nav.add(e);
})()



