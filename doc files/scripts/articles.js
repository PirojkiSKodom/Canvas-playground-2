main.append(document.getElementById('template-вступление.html').content.cloneNode(true));

let pageList = document.getElementById('pageList');

pageList.current = null;
pageList.pages = {};

for (let li of pageList.querySelectorAll('li')) {
    let link = li.getAttribute('data-link');

    if (link){
        li.onclick = (e) => {
            document.dispatchEvent(new CustomEvent("openPage", {
                bubbles: true,
                detail: link,
            }));
        }

        pageList.pages[link] = li;
    }
}


document.addEventListener('openPage', (e) => {
    if (e.detail){

        if (pageList.current) pageList.current.className = '';
        pageList.current = pageList.pages[e.detail];
        pageList.pages[e.detail].className = 'current';

        main.innerHTML = '';
        main.append(document.getElementById(`template-${e.detail}`).content.cloneNode(true));
    }
});



