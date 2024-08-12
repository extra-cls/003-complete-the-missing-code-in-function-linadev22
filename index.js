function sum(value1, value2){
    /*
    Write the code here to sum of two values from the
    parameters then return the result
   */
    return value1 + value2;

    
}
console.log(sum(10, 20));

const greeting = (name) => {
    /*
    Complete this function to get the greeting message

    EX: 
        Calling: greeting('natt')
        Return: Hello natt!

    NOTE: it's the return function.
    */

    // YOUR CODE HERE ...
    return `Hello ${name}!`

    
}
console.log(greeting('Lina'));




// DO NOT REMOVE THIS LINE OF CODE
export {sum, greeting};