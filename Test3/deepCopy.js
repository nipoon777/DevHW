/* 
    Deepcopy
    JSON.parse And Stringify are the costliest operations

*/

let person = {
    firstname : "Nipoon",
    lastname : "Donta",
    address : {
        street : "35/1",
        locality : "Datta Nagar",
        city : "Solapur"
    }
};


let toplevel = JSON.parse(JSON.stringify(person));

person.address.city = "Mumbai";

console.log("Toplevel", toplevel);
console.log("Person", person);