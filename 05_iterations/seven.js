const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10})  // agare scope open hai to return karna jaruri hai warna undefined ayega.


// Chaining me kitna bhi chain laga sakte ho

const newNums = myNumbers
        .map( (num) => num * 10 )        // chaining
        .map( (num) => num + 1 )                // result pass in second value
        .filter( (num) => num >= 40)          // filter means jo true hoga wahi pass hoga
console.log(newNums);

