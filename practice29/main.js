function do_math(num1, num2, operator) {
    if(operator === '+') {
        return num1 + num2; 
    }
    else if(operator === '-') {
        return num1 - num2; 

    }
    else if(operator === '*' || operator === 'x' || operator === 'X') {
        return num1 * num2; 

    }
    else if(operator === '/') {
        return num1 / num2; 

    }
    else {
        return null;
    }
}

console.log(do_math(2, 5, '-'  ));
console.log(do_math(100, 6, '/'));
console.log(do_math(200, 7, '*'));
console.log(do_math(2, 9, '+'  ));
console.log(do_math(3, 3, '/'  ));
console.log(do_math(16, 4, '+' ));
console.log(do_math(9, 5, '*'  ));