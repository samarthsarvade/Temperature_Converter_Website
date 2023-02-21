const convertButton = document.querySelector("#convert-btn");
const temperatureInput = document.querySelector("#temperature");
const temperatureUnit = document.querySelector("#temp-unit");
const convertedTemperature = document.querySelector("#converted-temp");

convertButton.addEventListener("click", () => {
    const temperature = temperatureInput.value;
    const unit = temperatureUnit.value;
    if (temperature === "") {
        alert("Please enter a temperature.");
    } else if (isNaN(temperature)) {
        alert("Please enter a valid number.");
    } else {
        if (unit === "celsius") {
            const fahrenheit = (temperature * 9 / 5) + 32;
            const kelvin = parseFloat(temperature) + 273.15;
            convertedTemperature.innerText = `${temperature} °C is ${fahrenheit.toFixed(2)} °F or ${kelvin.toFixed(2)} K.`;
        } else if (unit === "fahrenheit") {
            const celsius = (temperature - 32) * 5 / 9;
            const kelvin = (temperature - 32) * 5 / 9 + 273.15;
            convertedTemperature.innerText = `${temperature} °F is ${celsius.toFixed(2)} °C or ${kelvin.toFixed(2)} K.`;
        } else if (unit === "kelvin") {
            const celsius = temperature - 273.15;
            const fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
            convertedTemperature.innerText = `${temperature} K is ${celsius.toFixed(2)} °C or ${fahrenheit.toFixed(2)} °F.`;
        }
    }
});
