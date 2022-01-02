class Example {
    init() { this.draw();  }
    dispose() { this.active = false; }
    draw() { }

    keydown(event) { }
    keyup(event) { };
    mousedown(event) { }
    mouseup(event) { }
    mousemove(event) { }
    resize() { this.init(); }

    constructor(name = 'example') {
        this.name = name;
        this.active = false;
    }
}
