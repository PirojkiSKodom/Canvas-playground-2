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