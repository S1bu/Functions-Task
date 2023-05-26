// 1.
function greet(name){
 console.log(`Hello  ${name}`)
}
greet('Sibusiso')

// 2.
function multiply(a,b) {
    console.log(a * b)
}

multiply(3,5)

// 3.
let calculation = tableOfFive(5);

document.querySelector('.output').innerHTML = calculation;

function tableOfFive(number_1) {

    return number_1 * 5 ;
}
