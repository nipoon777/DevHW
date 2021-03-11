// Print Problem
// for( let i = 0 ; i < 7 ; i++ ){
//     let s = "";
//     for( let j = 0 ; j <= i ; j++ ){
//         s += "#"
//     }
//     console.log(s);
// }


// Count Problem
// let count = 1;

// while ( count <= 100 ){
//     if( count % 3 == 0 && count % 5 == 0){
//         console.log("FizzBuzz");
//     }else if( count % 3 == 0){
//         console.log("Fizz");
//     }else if ( count % 5 == 0 ){
//         console.log("Buzz");
//     }else{
//         console.log(count);
//     }
//     count++;
// }



//Chess Board

let size = 8;
let even = "";
let odd = "";

for( let i = 0 ; i < size ; i++ ){   
    if( i % 2 == 0){
        even += " ";
        odd += "#";
    }else{
        even += "#";
        odd += " ";
    }
}

for( let i = 0 ; i < size ; i++ ){
    if( i % 2 == 0){
        console.log(even);
    }else{
        console.log(odd);
    }
}