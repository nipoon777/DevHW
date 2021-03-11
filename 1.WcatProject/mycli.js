let help = require("./Commands/help.js");

let input = process.argv.slice(2);

let type = input[1];

switch ( type ){
    case "wcat":
        break;
    case "help":
        help.helpFn();
        break;
    default :
        console.log("Command not found : Invalid Command");
}
