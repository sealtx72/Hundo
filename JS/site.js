function getNumbers() {
    /*let theDocument = document;
    let theInput = theDocument.getElementById("startValue");
    let value = theInput.value;*/
    //access the webpage and get the values from the input

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Convert startValue and endValue to integers

    let newStart = parseInt(startValue);
    let newEnd = parseInt(endValue);

    // Validating newStart and newEnd

    if (isNaN(newStart) || isNaN(newEnd)) {
        alert("Please don't type the letter e!")
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
    for (let index = startValue; index <= endValue + 1; index++) {
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