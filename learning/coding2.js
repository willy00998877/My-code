const condition = false;

if (condition) {
  console.log("條件成立");
}

//console.log("程式結束");

const height = 160;
const width = 100;
const BMI = width / (height / 100) ** 2;

console.log("BMI:", BMI);
if (BMI < 18.5) {
  console.log("過輕");
} else if (BMI >= 24) {
  console.log("過重");
} else {
  console.log("正常");
}
