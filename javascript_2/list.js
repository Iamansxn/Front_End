function addItem() {
  let productno = document.getElementById("productno").value;
  let model = document.getElementById("productname").value;
  let price = document.getElementById("productprice").value;

  let str =
    "<tr><td>" +
    productno +
    "</td><td>" +
    model +
    "</td><td>" +
    price +
    "</td></tr>";
  let x = document.getElementById("tbody").innerHTML;
  x = x + str;

  // if (productno == "" || model == "" || price == "") {
  //   return alert("Enter the details");
  // } else {
  //   document.getElementById("tbody").innerHTML = x;
  // }
  if (productno == "" || model == "" || price == "") {
    if (productno == "") {
      return alert("enter the productID");
    }
    if (model == "") {
      return alert("enter the productName");
    }
    if (price == "") {
      return alert("enter the productPrice");
    }
  } else {
    document.getElementById("tbody").innerHTML = x;
  }
}
