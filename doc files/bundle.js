//run this file with node.js
const fs = require('fs');

let core = fs.readFileSync(__dirname + "/core.html", "utf8");

//add styles automatically, just for fun, lol
{
    let styles = fs.readdirSync(__dirname + "/styles");
    let s = '';
    for (style of styles) {
        s = `    <link rel="stylesheet" href="doc files/styles/${style}">\n` + s ;
    }
    core = core.replace('</head>',s + '</head>');
}

//add scipts automatically, just for fun, lol
{
    let scripts = fs.readdirSync(__dirname + "/scripts");
    let s = '';
    for (script of scripts) {
        s = `    <script defer src="doc files/scripts/${script}"></script>\n` + s;
    }
    core = core.replace('</body>', s + '</body>');
}


fs.writeFileSync("./doc2.html", core);