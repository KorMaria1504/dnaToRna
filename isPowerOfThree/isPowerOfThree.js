const isPowerOfThree = (num) => {
   let number = num;
    while (number !== 1) {
        
        if (number % 3 !== 0) {
            return false;
        }
        else {
            number = number / 3;
        }
   };

   return true;
};

export default isPowerOfThree;

console.log(isPowerOfThree(1)); // true
console.log(isPowerOfThree(5)); // false
console.log(isPowerOfThree(18)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(243)); // true

