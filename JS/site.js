function getNumbers() {
    //access the webpage and get the values from the input

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parsetInt is used to convert a string number to a number number
    let newStart = parseInt(startValue);
    let newEnd = parseInt(endValue);

    //create a Boolean  variable to check for an error state
    //we start with false so that it does not trigger
    let errorState = false;
    //create an empty string that will store any error message generated
    let errorMsg = "";

    //make sure the user entered 2 numbers
    //isNaN is a built in JS function that returns true if the variable is 'not a number'
    if (isNaN(newStart) || isNaN(newEnd)) {
        errorState = true;
        errorMsg += "Please use numbers<hr>";
    }
    //make sure the start value is less than the end value
    if (newStart > newEnd) {
        errorState = true;
        errorMsg += "Start value must be less than end value<hr>";
    }
    //set an upper and lower bound for the loops
    //this is an optional addition that improves the user experience
    if (newStart > 100 || newStart < 0 || newEnd > 100) {
        errorState = true;
        errorMsg += "Only numbers between 0 and 100<hr>";
    }

    //if any of the error cases happened fire a SweetAlert and exit the function
    if (errorState) {
        Swal.fire(
            'Something went wrong',
            `${errorMsg}`,
            'error'
        )
        return;
    }
    //take the start and en values as the bounds for a 'for' loop
    //that will create an array and return it
    let numbers = generateNumbers(newStart, newEnd);

    //take the array that was returned and pass it to a function that will
    //display it
    displayNumbers(numbers);
}
//Wrapper function/method - a function that calls other functions
function generateNumbers(startValue, endValue) {
    let numbers = [];
    //loop over every number from startValue to endValue
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index)
    }
    //send the array of numbers back to the wrapper function
    return numbers;
}
//this function exists to display the results to the user
function displayNumbers(numbers) {
    //create a string to hold a class name based on even or odd
    let className = "even";
    //create a string that will hold our output
    let templateRows = "";

    //go through each number in the array and determine if that number is even or odd
    //the '%' modulus operand returns the remainder from division
    //ex. 3 % 2 = 1
    //ex. 100 % 5 = 0
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        //use string concatenation to create a long string of HTML to display
        templateRows = templateRows + `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("output").innerHTML = templateRows;
}