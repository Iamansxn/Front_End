let data = [];
let updatedata;
// function to add items from user
function add() {
  x = document.getElementById("additem").value;
  let ob = { input: x, flag: 0 };
  data.push(ob);
  console.log(data);
  display();
}
//function to display added items
function display() {
  let uncompletelist = "";
  let completelist = "";
  data.forEach((element) => {
    if (element.flag == 0) {
      uncompletelist +=
        "<li><input type='checkbox'value=" +
        element.input +
        " onclick='check(this)'/>" +
        element.input +
        "<button value=" +
        element.input +
        " onclick='edit(this)'>edit</button>" +
        "<button value= " +
        element.input +
        " onclick='remove(this)' id= 'delete'>delete</button></li>";
    } else {
      completelist +=
        "<li><input type='checkbox'value=" +
        element.input +
        " onclick='check(this)'/>" +
        element.input +
        "<button value=" +
        element.input +
        " onclick='edit(this)'>edit</button>" +
        "<button value= " +
        element.input +
        " onclick='remove(this)'>delete</button></li>";
    }
    document.getElementById("uncompletelist").innerHTML = uncompletelist;
    document.getElementById("completelist").innerHTML = completelist;
    console.log(data);
  });
}
//funtion to edit added items
function edit(params) {
  updatedata = params.value;
  document.getElementById("additem").value = params.value;
  document.getElementById("add").style.display = "none";
  document.getElementById("update").style.display = "inline";
}
//funtion to update edited items
function update() {
  let x = document.getElementById("additem").value;
  data.forEach((element) => {
    if (updatedata == element.input) {
      element.input = x;
    }
  });
  document.getElementById("add").style.display = "inline";
  document.getElementById("update").style.display = "none";
  display();
}
//funtion for checked or unchecked items
function check(params) {
  console.log(params.value);
  data.forEach((element) => {
    if (params.value == element.input) {
      if (element.flag == 0) {
        element.flag = 1;
      } else {
        element.flag = 0;
      }
    }
  });
  display();
}
//function to delete items
function remove(params) {
  console.log(params.value);
  data.forEach((element, index) => {
    console.log(params.value);
    if (params.value == element.input) {
      data.splice(index, 1);
      uncompletelist.innerHTML = "";
      completelist.innerHTML = "";
    }
  });
  display();
}
