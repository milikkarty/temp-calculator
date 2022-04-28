



let resultCelcius = document.getElementById('celcius');
let resultFahrenheit = document.getElementById('fahrenheit');
let resultKelvin = document.getElementById('kelvin');
let resultNewton = document.getElementById('newton');

function fromCelcius () {
    let celcius = document.getElementById('celcius').value;

    if (celcius < -273.15) {
        celcius = -273.15;
    }

    resultFahrenheit.value = +((celcius * 9 / 5) + 32).toFixed(1); // unary plus to make the result a number back again after .toFixed
    resultKelvin.value = +(celcius * 1 + 273.15).toFixed(1); // multiplied by 1 so that the value would become a number, not a string
    resultNewton.value = +(celcius * 33 / 100).toFixed(1);
}

function fromFahrenheit () {
    let fahrenheit = document.getElementById('fahrenheit').value;

    if (fahrenheit < -459.67) {
        fahrenheit = -459.67;
    }

    resultCelcius.value = +((fahrenheit - 32) / 1.8).toFixed(1);
    resultKelvin.value = +((fahrenheit - 32) / 1.8 + 273.15).toFixed(1);
    resultNewton.value = +((fahrenheit - 32) * 11 / 60).toFixed(1);
}

function fromKelvin () {
    let kelvin = document.getElementById('kelvin').value;

    if (kelvin < 0) {
        kelvin = 0;
    }

    resultCelcius.value = +(kelvin - 273.15).toFixed(1);
    resultFahrenheit.value = +((kelvin - 273.15) * 9 / 5 + 32).toFixed(1);
    resultNewton.value = +((kelvin - 273.15) * 33 / 100).toFixed(1);
}

function fromNewton () {
    let newton = document.getElementById('newton').value;

    if (newton < -90.139) {
        newton = -90.139;
    }

    resultCelcius.value = +(newton * 100 / 33).toFixed(1);
    resultFahrenheit.value = +(newton * 60 / 11 + 32).toFixed(1);
    resultKelvin.value = +(newton * 100 / 33 + 273.15).toFixed(1);
}