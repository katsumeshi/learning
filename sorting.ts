// bubble sort time complexity is O(n²)   space complexity  O(1)

// let arr = [5, 1, 4, 2, 8]
// let i = 0
// while (true) {
//     let swapped = false
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i] > arr[i+1]) {
//             const tmp = arr[i+1]
//             arr[i+1] = arr[i]
//             arr[i] = tmp
//             swapped = true
//         }
//     }
//     i++
//     if (!swapped) {
//         break
//     }
// }

// insertion sort time complexity is O(n²)   space complexity  O(1)

// let arr = [23, 10, 1, 5, 2]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (arr[i] < arr[j]) {
//             const tmp =  arr[i]
//             arr.splice(i, 1)
//             arr.splice(j, 0, tmp)
//         }
//     }
// }

// console.log(arr)

// selection sort time complexity is O(n²)   space complexity  O(1)
let arr = [29, 72, 98, 13, 87, 66, 52, 51, 36]

for (let i = 0; i < arr.length; i++) {
    let pos = i
    for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[pos]) {
            pos = j
        }
    }
    if (pos != i) {
        const tmp = arr[pos]
        arr[pos] = arr[i]
        arr[i] = tmp
    }
}

console.log(arr)