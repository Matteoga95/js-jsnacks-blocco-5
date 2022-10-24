// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const array1 = [1,5,2,6];
const array2 = ["d","g","a","h"];



/**
 * 
 * @param {array} array1 
 * @param {array} array2 
 */
function mergeArrayAlternativamente(array1,array2){
  
    const result = [];

    for(let i = 0; i < array1.length + array2.length; i++){
       if(i % 2 === 0){
          result.push(array1 [ i / 2 ] );
       }else{
          result.push(array2 [ ( i - 1 ) / 2 ] );
       };
    };
    return result;

}

console.log(mergeArrayAlternativamente(array1,array2));
