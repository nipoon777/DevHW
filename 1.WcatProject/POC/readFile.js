let input = process.argv.slice(2);

let fs = require("fs");

let filepath = input[0];

let data = fs.readFileSync(filepath);

console.log(data.toString());

