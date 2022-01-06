//run this file with node.js
const fs = require('fs');

let core = fs.readFileSync(__dirname + "/core.html", "utf8");

addStyles();
addScripts();
addTemplates();

//core = core.replace(/\r\n/g, '').replace(/\n/g, ' ');

fs.writeFileSync("./документация.html", core);


//-----------------------functions

function addStyles() {
    //add styles automatically, just for fun, lol

    let styles = fs.readdirSync(__dirname + "/styles");
    let s = '';
    for (style of styles) {
        s = `    <link rel="stylesheet" href="doc files/styles/${style}">\n` + s;
    }
    core = core.replace('</head>', s + '</head>');
}

function addScripts() {
    //add scipts automatically, just for fun, lol

    let scripts = fs.readdirSync(__dirname + "/scripts");
    let s = '';
    for (script of scripts) {
        s = `    <script defer src="doc files/scripts/${script}"></script>\n` + s;
    }
    core = core.replace('</body>', s + '</body>');

}

function addTemplates() {
    //add templates automatically, intentionally

    let pages = fs.readdirSync(__dirname + "/pages");
    let s = '';
    for (page of pages) {
        let pageContent = fs.readFileSync(__dirname + `/pages/${page}`, "utf8");
        //pageContent = preprocess(pageContent); неа
        s +=
            `
<template id="template-${page}">
${pageContent}
</template>
`;
    }
    core = core.replace('</body>', s + '</body>');

}

function preprocess(text) {
    let wordList = fs.readFileSync(__dirname + "/preprocessor/make strong.txt", "utf8")
        .split('\n')
        .map(word => word.trim());

    wordList.forEach(word => {
        if (word != '')
            text = text.replace(new RegExp(`${word}`, 'g'), `<strong>${word}</strong>`);
    })
    return text;
}