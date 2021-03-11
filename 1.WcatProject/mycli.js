let help = require("./Commands/help.js");
let spaceRm = require("./Commands/spaceRmv.js");
let lineNo = require("./Commands/lineNumbers.js");
let nonBlank = require("./Commands/nonEmpty.js");

let input = process.argv.slice(2);

let type = input[1];
let filepath;
if(input[2] == "-b" || input[2] == "-n"){
    filepath = input[3];
}else{
    filepath = input[2];
}
switch ( type ){
    case "-s":
        spaceRm.removeBlnks(filepath);
        break;
    case "-n":
        lineNo.lineNo(filepath);
        break;
    case "-b":
        nonBlank.nonBlanks(filepath)
        break;
    case "help":
        help.helpFn();
        break;
    default :
        console.log("Command not found : Invalid Command");
}
