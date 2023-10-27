let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let kelvinInput = document.getElementById("kelvin");

function convertTemperature(event) {
    const currentValue = event.target.value

    switch (event.target.name) {
        case "celsius": 
            fahrenheitInput.value = Number((currentValue * 1.8 + 32).toFixed(0));
            kelvinInput.value = Number((currentValue + 273.15).toFixed(0));
        break; 
        case "fahrenheit": 
            celsiusInput.value = Number(((currentValue - 32) / 1.8).toFixed(0));
            kelvinInput.value = Number(((currentValue - 32) / 1.8 + 273.15).toFixed(0));
        break; 
        case "kelvin": 
            celsiusInput.value = Number((currentValue - 273.15).toFixed(0));
            fahrenheitInput.value = Number(((currentValue - 273.32) * 1.8 + 32).toFixed(0));
        break;
        default: throw new Error("invalid input")
        break;
    }
}