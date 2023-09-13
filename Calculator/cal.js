function display(value) {
  document.getElementById("display").value += value;
}
function result() {
  let solve = eval(document.getElementById("display").value);
  document.getElementById("display").value = solve;
  // console.log(solve);
}
function perce() {
  per = eval(document.getElementById("display").value / 100);
  document.getElementById("display").value = per;
}
function clr() {
  document.getElementById("display").value = "";
  // console.log("clear");
}
function del() {
  let x = document.getElementById("display").value;
  document.getElementById("display").value = x.substr(0, x.length - 1);
}
