//"D:\DevHW\hw.txt"

let fs = require("fs");
//let addLineNumbers = require('add-line-numbers')

let input = process.argv.slice(2);

let filepath = input[0];

let data = fs.readFileSync(filepath).toString().split("\n");

let count = 1;

for(let i = 0 ; i < data.length ; i++ ){
    if(data[i].length > 1){
        data[i] = count + ". " + data[i];
        count++;
    }
        
    
}

console.log(data.join("\n"));

