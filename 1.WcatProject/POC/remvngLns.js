let fs = require("fs");

let input = process.argv.slice(2);

let filepath = input[0];

let data = fs.readFileSync(filepath).toString();

data = data.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');

console.log(data);