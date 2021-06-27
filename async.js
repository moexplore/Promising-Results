/**
 * SlowMath Library
 * Covalence, LLC
 */
//  let slowMath = (function() {
//     const wait = (delay) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, delay);
//         });
//     };

//     function add(a, b) {
//         return wait(1000)
//         .then(() => {
//             return negativeCheck(a, b);
//         }).then((shouldResolve) => {
//             if (shouldResolve) {
//                 return Promise.resolve(+a + +b);
//             } else {
//                 return Promise.reject(new Error(`Error adding values ${a} and ${b}.`));
//             }
//         });
//     }

//     function subtract(a, b) {
//         return wait(1000)
//         .then(() => {
//             return negativeCheck(a, b);
//         }).then((shouldResolve) => {
//             if (shouldResolve) {
//                 return Promise.resolve(a - b);
//             } else {
//                 return Promise.reject(new Error(`Error subtracting values ${a} and ${b}.`));
//             }
//         });
//     }

//     function multiply(a, b) {
//         return wait(1000)
//         .then(() => {
//             return negativeCheck(a, b);
//         }).then((shouldResolve) => {
//             if (shouldResolve) {
//                 return Promise.resolve(a * b);
//             } else {
//                 return Promise.reject(new Error(`Error multiplying values ${a} and ${b}.`));
//             }
//         });
//     }

//     function divide(a, b) {
//         return wait(1000)
//         .then(() => {
//             return negativeCheck(a, b);
//         }).then((shouldResolve) => {
//             if (+b === 0) {
//                 return Promise.reject(new Error('Cannot divide by zero.'));
//             } else if (shouldResolve) {
//                 return Promise.resolve(a / b);
//             } else {
//                 return Promise.reject(new Error(`Error dividing ${a} by ${b}.`));
//             }
//         });
//     }

//     function remainder(a, b) {
//         return wait(1000)
//         .then(() => {
//             return negativeCheck(a, b);
//         }).then((shouldResolve) => {
//             if (+b === 0) {
//                 return Promise.reject(new Error('Cannot divide by zero for remainder.'));
//             } else if (shouldResolve) {
//                 return Promise.resolve(a % b);
//             } else {
//                 return Promise.reject(new Error(`Error dividing ${a} by ${b} for remainder.`));
//             }
//         });
//     }

//     function negativeCheck(a, b) {
//         return a > -1 && b > -1;
//     }

//     return { add, subtract, multiply, divide, remainder };
// })();
// import { slowMath } from './async-math.js'
// slowMath.add(6, 2).then((value) => {
//     console.log(value)
//     return slowMath.multiply(value, 2)
// }).then((value)=>{
//     console.log(value)
//     return slowMath.divide(value, 4)
// }).then((value) => {
//     console.log(value)
//     return slowMath.subtract(value, 3)
// }).then((value) => {
//     console.log(value)
//     return slowMath.add(value, 98)
// }).then((value) => {
//     console.log(value)
//     return slowMath.remainder(value, 2)
// }).then((value) => {
//     console.log(value)
//     return slowMath.multiply(value, 50)
// }).then((value) => {
//     console.log(value)
//     return slowMath.remainder(value, 40)
// }).then((value) => {
//     console.log(value)
//     return slowMath.add(value, 32)
// }).then((value) => {
//     console.log(`The final result is ${value}`)
// }).catch(()=>{
//     let err = new Error('Oh No!  Some Math was off!')
//     console.log(err)
// })

async function doMath() {
  try {
    
    let value = await slowMath.add(6, 2);
    console.log(value);
    value = await slowMath.multiply(value, 2);
    console.log(value);
    value = await slowMath.divide(value, 4);
    console.log(value);
    value = await slowMath.subtract(value, 3);
    console.log(value);
    value = await slowMath.add(value, 98);
    console.log(value);
    value = await slowMath.remainder(value, 2);
    console.log(value);
    value = await slowMath.multiply(value, 50);
    console.log(value);
    value = await slowMath.remainder(value, 40);
    console.log(value);
    // placed in an error just to test out the catch :)
    value = await slowath.add(value, 32);
    console.log(`The final result is ${value}`);
  } catch {
    let err = new Error("Dang all!");
    console.log(err);
  }
}
doMath();
