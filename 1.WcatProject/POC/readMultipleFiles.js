let fs = require("fs");

let input = process.argv.slice(2);

for( let i = 0 ; i < input.length ; i++ ){
    let filepath = input[i];
    let data = fs.readFileSync(filepath);
    console.log(data.toString());

}