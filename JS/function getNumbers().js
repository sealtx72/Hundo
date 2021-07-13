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
        errorMsg += "Please use numbers&lt;hr>";
    }
    //make sure the start value is less than the end value
    if (newStart > newEnd) {
        errorState = true;
        errorMsg += "Start value must be less than end value&lt;hr>";
    }
    //set an upper and lower bound for the loops
    //this is an optional addition that improves the user experience
    if (newStart > 100 || newStart &lt; -100 || newEnd > 100 || newEnd &lt; -100) {
        errorState = true;
        errorMsg += "-100 and 100 are the limit&lt;hr>";
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
    for (let index = startValue; index &lt;= endValue; index++) {
        numbers.push(index)
    }
    return numbers;
}

function displayNumbers(numbers) {
    let className = "even";
    let templateRows = "";

    for (let index = 0; index &lt; numbers.length; index++) {
        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows = templateRows + `&lt;tr>&lt;td class="${className}">${number}&lt;/td>&lt;/tr>`;
    }
    document.getElementById("output").innerHTML = templateRows;
}