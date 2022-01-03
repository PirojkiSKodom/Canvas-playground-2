class Example {
    //-------внешние методы 

    init() { this.draw(); }
    dispose() { }

    draw() { }

    keydown(event) { }
    keyup(event) { }
    mousedown(event) { }
    mouseup(event) { }
    mousemove(event) { }

    afterResize() { this.init(); }// хз нужен ли он

    //-------внутренние методы (поидее и внешних должно на все хватать)
    mount(parent) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = parent.clientWidth;
        this.canvas.height = parent.clientHeight;

        parent.append(this.canvas);

        document.onmousedown = this.mousedown.bind(this);
        document.onmouseup = this.mouseup.bind(this);
        document.onmousemove = this.mousemove.bind(this);

        this.__bkd = this.keydown.bind(this);//kostily
        this.__bku = this.keyup.bind(this);//kostily

        document.addEventListener('keydown', this.__bkd);//kostily
        document.addEventListener('keyup', this.__bku);//kostily

        this.init();
    }

    unmount() {
        this.canvas.remove();
        this.dispose();

        document.removeEventListener('keydown', this.__bkd);//kostily
        document.removeEventListener('keyup', this.__bku);//kostily
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
