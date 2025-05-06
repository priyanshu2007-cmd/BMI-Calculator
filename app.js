window.onload = () => {
  const button = document.querySelector("#bt");
  button.addEventListener("click", calculateBmi);
};

function calculateBmi() {
  var height = document.querySelector("#hei").value;
  var weigth = document.querySelector("#weg").value;
  var result = document.getElementById("result");

  if (!height || isNaN(height) || height < 0) {
    result.innerText = "Please provide a valid height";
    return;
  } else if (!weigth || isNaN(weigth) || weigth < 0) {
    result.innerText = "Please provide a valid weight";
    return;
  }

  var bmi = (weigth / ((height * height) / 10000)).toFixed(2);
  // console.log(bmi);
  // debugger;

  if (bmi < 18.5) {
    result.innerText = `Under Weight: ${bmi}`;
  } else if (bmi >= 18.5 && bmi < 25) {
    result.innerText = `Normal weight: ${bmi}`;
  } else if (bmi >= 25 && bmi < 30) {
    result.innerText = `Over Weight: ${bmi}`;
  } else if (bmi >= 30 && bmi < 35) {
    result.innerText = `Obesity (Class I): ${bmi}`;
  } else if (bmi >= 35 && bmi < 40) {
    result.innerText = `Obesity (Class II): ${bmi}`;
  } else {
    result.innerText = `Extreme Obesity: ${bmi}`;
  }
}
