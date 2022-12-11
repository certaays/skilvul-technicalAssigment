// -- Nomor 1 --
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr)
{ 
    if (arr.length == 0) {
        return 0
    }else{
        return arr[0] + sumOfArray(arr.slice(1))
    }
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// -- Nomor 2 --
const avg1 = sumOfArray(arr1)/arr1.length;
const avg2 = sumOfArray(arr2)/arr2.length;
function countAboveAvg(arr, avg ) 
{
    let count = 0
    if(arr.length == 0){
        return 0
    }else if(arr[0]>=avg){
        count = 1
    }
    return count + countAboveAvg(arr.slice(1), avg)
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// -- Nomor 3 --
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) 
{
    if(arr.length == 0){
        return "Angka tidak ditemukan"
    }else if(arr[arr.length-1] == num){
        return `Angka ditemukan pada index: ${arr.length-1}`
    }

    return searchInArray(arr.slice(0,-1), num)
}

console.log(searchInArray(arr, 6)) 
console.log(searchInArray(arr, 1)) 
console.log(searchInArray(arr, 8))

// -- Nomor 4 --
function trianglePattern(a1, a2) 
{
    let word = ""
    if(a1 == 0){
        return
    }
    for(let a=0; a<a2; a++){
        if(a<a1-1){
            word = word + " "
        }else{
            word += String.fromCharCode(64 + (a2-a1+(a-a1)+2))
        }
    }
    console.log(word)
    trianglePattern(a1-1, a2)
}

trianglePattern(5, 5);