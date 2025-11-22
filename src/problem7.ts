

function getUniqueValues (arr1: number[], arr2: number[]): number[] {
    const combinedArray = [...arr1, ...arr2];
    const uniqueValues = Array.from(new Set(combinedArray));
    return uniqueValues;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = getUniqueValues(array1, array2);
//console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]


// 2nd example
function sum(array1: number[] ,arr2: number[]): void {
    const combinedArray = [...array1, ...arr2] //spreed operator use two array combine one array 
    const unicValues = new Set(combinedArray) // set use for unic value
    const unicArray = Array.from(unicValues) // convert set object to array 
    console.log(unicArray);
}
 
sum(array1,array2);