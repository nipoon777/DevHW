/* let person = {
    firstname : "Nipoon",
    lastname : "Donta"
};


let copyPerson = person;

copyPerson.firstname = "Naresh";

console.log(copyPerson);
console.log(person); 
References are copied
*/

// Address is not copied Actual values are copied
// Spread Operator
// The values on copied only on high level objects internal objects addresses will be copied not the values

/* 
    Advantages -> fast
    Disadvantages -> shallow copy 
*/

/* 
    In case of shallow copies only high level keys are copied but the internal objects are not copied
    only their addresses are copied

*/
let person = {
    firstname : "Steve", 
    lastname : "Does",
    address : {
        street : "221B Park",
        city : "London",
        country : "Uk"
    }
}


let toplevel = {...person};


person.firstname = "Sherlock";

toplevel.lastname = "Rogers";
person.address.city = "Solapur";

console.log("Person ", person);
console.log("Toplevel", toplevel);

/* 
    Object.assign ye bhi shallow copy hai
*/

let toplevelObj = Object.assign({}, person);
console.log("toplevelObj", toplevelObj);



