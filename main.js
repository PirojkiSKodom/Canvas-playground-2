function globalInit() {
    nav.children[0]?.click();
}

window.onresize = function(event){
    nav.current?.resize();
}