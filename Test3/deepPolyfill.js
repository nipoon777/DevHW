let person = {
    firstname : "Nipoon",
    lastname : "Donta",
    address : {
        street : "35/1",
        locality : "Datta Nagar",
        city : "Solapur"
    }
};


let superclone = ( object ) => {
    let cloning = {};

    Object.keys(object).map( (prop) =>{
        if(Array.isArray(object[prop])){
            cloning[prop] = [].concat(object[prop]);
        }else if (typeof object[prop] === "object"){
            cloning[prop] = superclone(object[prop]);
        }else{
            cloning[prop] = object[prop];
        }
    });
    return cloning;
}

let toplevel = superclone(person);

person.address.city = "mumbai";

console.log("Person", person);
console.log("Toplevel", toplevel)