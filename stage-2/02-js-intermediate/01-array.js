/// Komentar pada nomor 1 & 2 karena nama variabel yang sama satu dengan yang lainnya, dapat di run per masing-masing nomor

// //-- Nomor 1 --
// const arr = [1, 2, 3];
// const arr2 = [8, 1, 5, 7];
// function reverse(arr) 
// {
//     return [...arr].reverse()
// }

// const newArr = reverse(arr);
// const newArr2 = reverse(arr2);

// console.log(arr, newArr);
// console.log(arr2, newArr2);

// // -- Nomor 2 --
// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

// function getAverage(arr) 
// {
//     let sum = 0
//     arr.forEach( arr => {
//         sum += arr       
//     });

//     let avg = sum/arr.length
//     let count = 0
    
//     arr.forEach( arr =>{
//         if(arr>avg){
//             count++
//         }
//     })
//     return count
// }

// console.log(getAverage(arr1))
// console.log(getAverage(arr2))

// -- Nomor 3 --
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr, num) 
  {
      let newArr = [].concat(...arr)
      let count = 0
      let index = null
      newArr.forEach(arr => {
          if(arr==num){
            index = count   
          }
          count++
      })
      return index
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));