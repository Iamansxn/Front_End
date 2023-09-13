let plus = document.getElementById("incr");
let minus = document.getElementById("decr");
let input = document.getElementById("qty");
let inputValue = input.value;

plus.("click", function () {
  inputValue++;
  input.value = inputValue;
});
minus.addEventListener("click", function () {
  if (inputValue > 0) {
    inputValue--;
    input.value = inputValue;
  }
});
console.log;
