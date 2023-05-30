const url = require("url");
const parsedUrl = url.parse("https://en.wikipedia.org/wiki/David_Beckham");

console.log(parsedUrl.protocol); // https:
console.log(parsedUrl.host);        // en.wikipedia.org
console.log(parsedUrl.query); //null