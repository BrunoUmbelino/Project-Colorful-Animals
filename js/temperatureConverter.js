const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100;
}

function convertCelsiusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celsiusInput.value);
    const fTemp = parseFloat((cTemp * (9/5)) + 32);
    const kTemp = parseFloat(cTemp + 273.15);
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function convertFahrenheitToCelsiusAndKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = parseFloat((fTemp - 32) * (5/9));
    const kTemp = parseFloat((fTemp + 459.67) * 5/9);
    celsiusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function convertKelvinToCelsiusAndFahrenheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = parseFloat(kTemp - 273.15);
    const fTemp = parseFloat(9/5 * (kTemp - 273) + 32);
    celsiusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

function main(){
    celsiusInput.addEventListener('input', convertCelsiusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener('input', convertFahrenheitToCelsiusAndKelvin);
    kelvinInput.addEventListener('input', convertKelvinToCelsiusAndFahrenheit);
}

main();

