// bt1:	e^x=1+x/1!+x^2/2!+x^3/3!+… ; 𝑥 ∈ (−∞, +∞)
var x = 0.5
var eps = 0.001
var first = 1
var mu = 1
var second = first + Math.pow(x, mu) / factorial(mu)

while(Math.abs(first - second) > eps){
    mu++
    first = second
    second = first + Math.pow(x, mu) / factorial(mu)
}
document.write(`kết quả bài 1: ${first.toFixed(4)} <br> `)
function factorial(n){
    if(n == 1) return 1
    return n * factorial(n-1)
}



// bt2:	1/〖(1+x)〗^3 =1-(2*3)/2 x+(3*4)/2 x^2-(4*5)/3 x^3+⋯; x∈(-1,1)

function baitap2(x, terms) {
    let result = 1;
    let sign = -1;
    let numerator = 2;
    let denominator = 2;

    for (let i = 1; i < terms; i++) {
        sign *= -1;
        result += (sign * numerator) / denominator * Math.pow(x, i);
        numerator++;
        denominator++;
    }

    return result;
}

// Test với x = 0.5 và 5 terms
const xValue = 0.5;
const numberOfTerms = 5;
const result = baitap2(xValue, numberOfTerms);

document.write(`kết quả bài 2: ${result.toFixed(4)} <br>`);