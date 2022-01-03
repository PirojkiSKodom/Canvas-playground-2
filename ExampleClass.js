class Example {
    //-------внешние методы 

    init() { this.draw(); }
    dispose() { }

    afterResize() { this.init(); }

    draw() { }

    keydown(event) { }
    keyup(event) { }
    mousedown(event) { }
    mouseup(event) { }
    mousemove(event) { }

    //-------внутренние методы (поидее и внешних должно на все хватать)
    mount(parent) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        parent.append(this.canvas);

        this.canvas.width = parent.clientWidth;
        this.canvas.height = parent.clientHeight;

        document.onmousedown = this.mousedown?.bind(this);
        document.onmouseup = this.mouseup?.bind(this);
        document.onmousemove = this.mousemove?.bind(this);
        document.onkeydown = this.keydown?.bind(this);
        document.onkeyup = this.keyup?.bind(this);

        this.init();
    }

    unmount() {
        this.canvas.remove();
        this.dispose();
    }

    resize() {
        this.canvas.width = this.canvas.parentElement.clientWidth;
        this.canvas.height = this.canvas.parentElement.clientHeight;

        this.afterResize();
    }


    constructor(name = 'example') {
        this.name = name;
    }
}
