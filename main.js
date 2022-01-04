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