let articles = {
    current: undefined,
    add: function (title = 'вступление', link = 'doc files/pages/вступление.html') {
        let art = new this.Article(title, link);
        this[art.title] = art;
        art.button.onclick = () => {
            this.get(art.title);
        }
    },
    get: function (title) {
        if (this.current) this.current.li.className = '';
        this.current = this[title];
        this.current.li.className = 'current';

        this.current.get();
    },

    Article: class {
        mount() {
            mainUl.append(this.li);
        }

        async get() {
            let r = await fetch(this.link);
            main.innerHTML = await r.text();
            window.scrollTo(0, 0);
        }

        constructor(title, link) {
            this.title = title;
            this.link = link;

            this.li = document.createElement('li');
            this.button = document.createElement('button');
            this.button.innerHTML = this.title;

            this.li.append(this.button);

            this.mount();
        }
    }
};


articles.add('вступление', 'doc files/pages/вступление.html');
articles.add('как определить Example', 'doc files/pages/как определить Example.html');
articles.add('обзор Example', 'doc files/pages/обзор Example.html');
articles.add('нюансы', 'doc files/pages/нюансы.html');
articles.add('dummy', 'doc files/dummy.html');

articles.get('нюансы');

