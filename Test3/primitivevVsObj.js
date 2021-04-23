// Primitive - number, boolean, undefined, string, symbol
// Object/Non Primitive - arrays, functions, errors, date, object

/* 
    Functions are objects that implement callable 
    object -> key : value
    property , method 
*/
function fn(){
    console.log("Hello from fn");
}

fn.myProp = "hello";

fn.innerFn = function (){
    console.log("I am a method of a function");
}


console.log(fn.myProp);
fn.innerFn();

console.log(fn);

// console.log(fn());
// Array is an adapter of object

let arr = ["Hi", "Hello", "how"];

for( let key in arr ){
    console.log(key + " : " + arr[key]);
}