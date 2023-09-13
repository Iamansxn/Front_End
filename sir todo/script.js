let data = [];
let dataToUpdate;
function addData() {
  let x = document.getElementById("data").value;
  let ob = { val: x, flag: 0 };
  data.push(ob);
  console.log(data);
  display();
}
function display() {
  let todo = "";
  let completed = "";
  data.forEach((element) => {
    if (element.flag == 0) {
      todo +=
        "<li><input type='checkbox' value=" +
        element.val +
        " onclick='check(this)'/>" +
        element.val +
        "<button value=" +
        element.val +
        " onclick='edit(this)'>edit</button><button value=" +
        element.val +
        " onclick='del(this)'>delete</button></li>";
    } else {
      completed +=
        "<li><input type='checkbox' value=" +
        element.val +
        " onclick='check(this)'/>" +
        element.val +
        "<button value=" +
        element.val +
        " onclick='edit(this)'>edit</button><button value=" +
        element.val +
        " onclick='del(this)'>delete</button></li>";
    }
    // console.log(element);
    document.getElementById("todo").innerHTML = todo;
    document.getElementById("completed").innerHTML = completed;
  });
}
function edit(params) {
  dataToUpdate = params.value;
  console.log(params.value);
  document.getElementById("data").value = params.value;
  document.getElementById("add").style.display = "none";
  document.getElementById("update").style.display = "inline";
}
function update(params) {
  let x = document.getElementById("data").value;
  // console.log("X="+x);
  // console.log("Data to update ="+dataToUpdate);
  data.forEach((element) => {
    if (dataToUpdate == element.val) {
      element.val = x;
    }
  });
  document.getElementById("add").style.display = "inline";
  document.getElementById("update").style.display = "none";
  display();
}
function check(params) {
  console.log(params.value);
  data.forEach((element) => {
    if (params.value == element.val) {
      if (element.flag == 0) {
        element.flag = 1;
      } else {
        element.flag = 0;
      }
    }
  });
  display();
}
function del(params) {
  console.log(params.value);
  data.forEach((element, this) => {
    if (params.value == element.input) {
      data.splice(this.index, 1);
    }
  });
  display();
}
