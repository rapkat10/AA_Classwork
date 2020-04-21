// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578

function lucasNumberMemo(n, memo = {}) {
    //base case
    if( n in memo ) return memo[n];
    if( n === 0 ) return 2;
    if( n === 1 ) return 1;
    
    const result = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
    memo[n] = result;

    return memo[n];

}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount, memo = {}) {
    if(amount in memo) return memo[amount];
    if(amount === 0) return 0;

    let results = [];
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        if (coin <= amount) {
            let newAmount = amount - coin;
            results.push(minChange(coins, newAmount, memo) + 1);
        }
    }

    memo[amount] = Math.min(...results);
    return memo[amount];

    //when the amount is zero we hit base case
    // console.log("memo", memo);
    // console.log("answer", Object.keys(memo).length);
    // console.log("amount", amount);
    // if (amount in memo || amount === 0) return Object.keys(memo).length;    //correct  
    
    // const max = Math.max(...coins);
    // if(max !== coins[0]) coins.reverse();

    // const newCoins = coins.slice();
    // newCoins.pop();
    // const divisible = newCoins.some((coin) => amount % coin === 0);

    // if (divisible) {
    //     // console.log("true");
    //     let result1;
    //     for (let i = 0; i < coins.length; i++) {
    //         let coin = coins[i];
    //         if (amount % coin === 0 && coin !== 1) {
    //             result1 = (amount / coin);
    //             break;
    //         }
    //     }
    //     for (let i = 0; i < coins.length; i++) {
    //         let coin = coins[i];
    //         if (coin <= amount) {
    //             let newAmount = amount - coin;
    //             memo[amount] = coin;
    //             minChange(coins, newAmount, memo);
    //             break;
    //         }
    //     }

    //     let result2 = Object.keys(memo).length;
    //     return result1 < result2 ? result1 :  result2;
    // } else {
    //     // console.log("false");
    //     if (amount !== 0) {
    //         // console.log("not zero");
    //         for (let i = 0; i < coins.length; i++) {
    //             let coin = coins[i];
    //             if (coin <= amount) {
    //                 let newAmount = amount - coin;
    //                 memo[amount] = coin;
    //                 return minChange(coins, newAmount, memo);
    //             }
    //         }
    //     }
    // }
};

// console.log(minChange([1, 2, 5], 11));           //3
// console.log(minChange([1, 4, 5], 8));            //2
// console.log(minChange([1, 5, 10, 25], 15));      //2
// console.log(minChange([1, 5, 10, 25], 100));     //4
// console.log(minChange([1, 5, 10, 25, 50], 100)); //2
// console.log(minChange([83, 186, 408, 419], 6249));  //20
// console.log(minChange([1, 5, 10, 25, 50], 1054));  //21 * 50 and 4 * 1 = 25

// function leetCodeQuestion(amount, coins, memo = {}) {
//     // if (amount in memo) return memo[amount];
//     if (amount === 0) return 0;
//     if(coins.length === 1) {
//         if(coins[0] === amount) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }

//     let results = [];
//     for (let i = 0; i < coins.length; i++) {
//         let coin = coins[i];
//         if (coin <= amount) {
//             let newAmount = amount - coin;
//             results.push(leetCodeQuestion(newAmount, coins, memo));
//         }
//     }

//     memo[amount] = results.length + 1;
//     return memo[amount];
// }

// console.log(leetCodeQuestion(5, [1, 2, 5]));  // 4
// console.log(leetCodeQuestion(3, [2]));        // 0
// console.log(leetCodeQuestion(10, [10]));      //1
// console.log(leetCodeQuestion(10, [1, 2, 3, 5])); //  

module.exports = {
    lucasNumberMemo,
    minChange
};