(async () => {
    try {
        await fetch('doc files/dummy.html');
    } catch (e) {
        if (e.message == 'NetworkError when attempting to fetch resource.') {
            console.log(e);
            alert(`NetworkError: ты открыл документацию, но сделал это без уважения`);
            alert(`нет, серьезно, я не могу подгрузить часть файла со своего же компа, из той же папки, потому что это видите ли небезопасно и противоречит политике CORS`);
            alert(`открой документацию через live server , ну или подожди пока я напишу скрипт который соединяет всю документацию в одну гиганскую страницу, пека `);
            let link = document.createElement('a');
            link.href = "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer";
            link.innerHTML = 'про live server';

            main.append(onCors.content.cloneNode(true));

            main.prepend(link);
        }
    }
})();