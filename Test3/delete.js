/* 
    delete a;

    a had to property of object for delete to work 

    delete object.property
    delete object['property]
*/

let a = 10

delete a;
// It will not work
console.log(a);