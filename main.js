function globalInit() {
    nav.children[0]?.click();
}

window.onresize = function (event) {
    nav.current?.resize();
}

let keysPressed = new Set();
document.addEventListener('keydown', e => keysPressed.add(e.code));
document.addEventListener('keyup', e => keysPressed.delete(e.code));

let MBPressed = new Set();
document.addEventListener('mousedown', e => MBPressed.add(e.button));
document.addEventListener('mouseup', e => MBPressed.delete(e.button));

let cursor = {
    x: 0,
    y: 0,
}
document.addEventListener('mousemove', e => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
});

//--------------------nav
nav.current = null;

nav.add = function (example) {
    let button = document.createElement('button');
    button.innerHTML = example.name;

    button.addEventListener('click', (function () {
        //console.log(`setting ${example.name}`);

        nav.current?.unmount();
        nav.current = example;

        example.mount(easel);
    }));

    nav.append(button);
}


//--------------------прочее
function rgba(r = 0, g = 0, b = 0, a = 255) {
    return {
        r: r % 256,
        g: g % 256,
        b: b % 256,
        a: a % 256,
    }
}

class Camera {
    reset() {
        this.x = this.startX;
        this.y = this.startY;
        this.zoom = this.startZoom;

        this.speed = 10;
        this.zoomSpeed = 1.01;
    }

    defaultMove() {
        if (keysPressed.has('KeyW')) this.y -= this.speed * this.zoom;
        if (keysPressed.has('KeyA')) this.x -= this.speed * this.zoom;
        if (keysPressed.has('KeyS')) this.y += this.speed * this.zoom;
        if (keysPressed.has('KeyD')) this.x += this.speed * this.zoom;

        if (keysPressed.has('KeyZ')) this.zoom /= this.zoomSpeed;
        if (keysPressed.has('KeyX')) this.zoom *= this.zoomSpeed;

        if (keysPressed.has('Equal')) this.zoomSpeed += 0.0001;
        if (keysPressed.has('Minus')) this.zoomSpeed -= 0.0001;

        if (keysPressed.has('KeyC')) this.reset();
    }

    transform(x, y) {
        return {
            x: (x) * this.zoom + this.x,
            y: (y) * this.zoom + this.y,
        }
    }

    constructor(startX = 0, startY = 0, startZoom = 1) {

        this.startX = startX;
        this.startY = startY;
        this.startZoom = startZoom;

        this.x = startX;
        this.y = startY;
        this.zoom = startZoom;

        this.speed = 10;
        this.zoomSpeed = 1.01;

    }
}