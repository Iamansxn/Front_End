function display(value) {
  document.getElementById("display").value += value;
  console.log(value);
}
function perce() {
  let x = document.getElementById("display").value;
  per = eval(x / 100);
  document.getElementById("display").value = per;
}
function clr() {
  document.getElementById("display").value = "";
  console.log("clear");
}
function del() {
  let x = document.getElementById("display").value;
  document.getElementById("display").value = x.substr(0, x.length - 1);
}
let data = [];
function result() {
  let str = {document.getElementById("display").value};
  data.push(str);
  

  console.log(data);
}
