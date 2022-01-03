function globalInit() {
    nav.children[0]?.click();
}

window.onresize = function (event) {
    nav.current?.resize();
}

let keysPressed = new Set();
document.addEventListener('keydown', e => keysPressed.add(e.code));
document.addEventListener('keyup', e => keysPressed.delete(e.code));


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