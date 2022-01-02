

(() => {
    let e = new Example('lolkek');

    e.mousemove = (event) => {
        ctx.fillRect(event.clientX, event.clientY, 25, 25);
    }

    e.init = () => {
        ctx.fillStyle = 'orange';
    }


    nav.add(e);
})()