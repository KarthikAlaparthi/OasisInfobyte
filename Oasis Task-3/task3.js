const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    const celcToFarh = (celc) => {
        let fahrenheit = ((celc * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }
    const farhToCelc = (farh) => {
        let celsius = ((farh - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'celc') {
        document.getElementById("result").innerHTML = "RESULT : "+celcToFarh(inputTemp) +"&#176; Fahrenheit";
    }
 
    else {
        document.getElementById("result").innerHTML = "RESULT : "+farhToCelc(inputTemp) + "&#176; Celsius";
    }

}
