document
  .getElementById("inputTemperature")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      convertTemperature();
    }
  });

function convertTemperature() {
  const inputTemperature = parseFloat(
    document.getElementById("inputTemperature").value
  );
  const inputUnit = document.getElementById("inputUnit").value;
  let celsius, fahrenheit, kelvin;

  if (inputUnit === "celsius") {
    celsius = inputTemperature;
    fahrenheit = (inputTemperature * 9) / 5 + 32;
    kelvin = inputTemperature + 273.15;
  } else if (inputUnit == "fahrenheit") {
    fahrenheit = inputTemperature;
    celsius = ((inputTemperature - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else if (inputUnit === "kelvin") {
    kelvin = inputTemperature;
    celsius = inputTemperature - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  document.getElementById("resultText").innerHTML = `
  <p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
  <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
  <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>`;

  //   let backgroundGradient;
  //   if (celsius <= 27) {
  //     document.body.style.background =
  //       "linear-gradient(to right, #87CEFA, #003366)";
  //     backgroundGradient = "linear-gradient(to right, #A8D3E0, #A7C7E7)";
  //   } else if (celsius > 27 && celsius <= 100) {
  //     document.body.style.background =
  //       "linear-gradient(to right, #FFFACD, #FFA500)";
  //     backgroundGradient = "linear-gradient(to right, #FFEBB7, #FFCC00)";
  //   } else if (celsius > 100) {
  //     document.body.style.background =
  //       "linear-gradient(to right, #FFA500, #BF0000)";
  //     backgroundGradient = "linear-gradient(to right, #BF0000, #8B0000)";
  //   } else {
  //     backgroundGradient = "transparent";
  //   }

  document.querySelector(".result").style.background = backgroundGradient;
}
