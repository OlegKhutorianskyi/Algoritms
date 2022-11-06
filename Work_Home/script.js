//Task 1

let arr = [1,3,5,4,7,8,2];
let linearAlgoritm = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1
}

console.log(linearAlgoritm(arr, 11));

//Task 2

// let arr1 = [1,2,3,4,5,4,7];

// let linearAlgoritm1 = (array, item) => {
//     for (let i = 0; i < array.length; i+=1) {
        
//         if (item !== array[i] -1) {
//             return i;
//         }
//     }
//     return -1
// }

// console.log(linearAlgoritm(arr, 4));
