const mustache = require("mustache");
let result = mustache.render("Hi, {{first}} {{last}}!",{
    first:"Nicolaaaaas",
    last:"Cage",
});
console.log(result);

/*
Mustache is a templating engine module provided through the installation of it externally using
which is package manager of node itself and helps to download external modules for your
nodejs projects.
 */

/*
we are using/require externally downloaded modules just like we did for the url and internal
modules of node.
 */