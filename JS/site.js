function getNumbers() {
    /*let theDocument = document;
    let theInput = theDocument.getElementById("startValue");
    let value = theInput.value;*/
    //access the webpage and get the values from the input
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //take the start and en values as the bounds for a 'for' loop
    //that will create an array and return it

    let numbers = generateNumbers(startValue, endValue);

    //take the array that was returned and pass it to a function that will
    //display it

    displayNumbers(numbers);

    //Wrapper function/method - a function that calls other functions
}

function generateNumbers(startValue, endValue) {
    let numbers = [];

    //loop over every number from startValue to endValue
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index)
    }

    return numbers;
}

function displayNumbers(numbers) {
    let className = "even";
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows = templateRows + `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("output").innerHTML = templateRows;
}