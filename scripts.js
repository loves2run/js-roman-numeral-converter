const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

// represent roman numerals as a data structure
//write fx that iterates over a given integer and converts to numeral
const convertIntToRoman = (int) => {
    const romanNumerals = new Map([
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ]);

    let result = '';
   
    for (let [roman, value] of romanNumerals) {
        while (int >= value) {
            result += roman;
            int -= value;
        }
    }
    output.innerText = result;
    return result;
};


//validate user input based on fcc assignment parameters
const isValid = () => {
    const inputValue = input.value;
    let errorMsg = '';

    if (inputValue === '') {
        errorMsg = 'Please enter a valid number.'
    } else if (inputValue < 1) {
        errorMsg = 'Please enter a number greater than or equal to 1.'
    } else if (inputValue > 3999) {
        errorMsg = 'Please enter a number less than or equal to 3999.'
    } else {
        return true;
    }
    output.innerText = errorMsg;
    output.classList.add('error');
    return false;
}

//Clear output
const resetApp = () => {
    output.innerText = '';
    output.classList.remove('error');
}

//Combing input validation & integer conversion
const validateAndConvert = (e) => {
    e.preventDefault();
    
    const inputValue = parseInt(input.value); //dynamically gets input value

    if (isValid(inputValue)) {
        convertIntToRoman(inputValue);
    }
}


// Run the convertIntToRoman function
convertBtn.addEventListener('click', validateAndConvert);

//Reset app when a new number is entered into input field
input.addEventListener('input', resetApp);
