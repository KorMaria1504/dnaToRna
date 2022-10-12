let result = 0;

const sumOfSquares = (num) => {
    let result = 0;
    for (let i = 0; i <= num; i +=1) {
        result += i ** 2;
    }

    return result;
};

const squareOfSum = (num) => {
    let sum = 0;
    let result = 0;
    for (let i = 0; i <= num; i +=1) {
        sum += i;
    }
    result = sum ** 2; 

    return result;
};

const sumSquareDifference = (n) => {
    return(squareOfSum(n) - sumOfSquares(n));
};

console.log(sumSquareDifference(5)); // 170
