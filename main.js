
nav.current = null;
nav.add = function (example) {
    let button = document.createElement('button');
    button.innerHTML = example.name;

    button.addEventListener('click', (function () {
        console.log(`setting ${example.name}`);
        if (nav.current) nav.current.dispose();
       

        nav.current = example;
        
        document.onmousedown = example.mousedown.bind(example);
        document.onmouseup = example.mouseup.bind(example);
        document.onmousemove = example.mousemove.bind(example);
        document.onkeydown = example.keydown.bind(example);
        document.onkeyup = example.keyup.bind(example);

        canvas.fullReset();    
        example.active = true;
        example.init();
    }));
    nav.append(button);
}

function globalInit() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    nav.children[0].click();
}

let ctx = canvas.getContext('2d');
canvas.fullReset = ()=>{
    ctx.resetTransform();
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

window.onresize = function(event){

    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    nav.current.resize(event);
}
