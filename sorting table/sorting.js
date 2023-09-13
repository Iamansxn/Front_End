let data = [
  { Company: "Samsung", Model: "galaxy", Memory: 64, Price: 50000 },
  { Company: "Apple", Model: "iphone11", Memory: 28, Price: 45000 },
  { Company: "Apple", Model: "iphone13", Memory: 128, Price: 150000 },
  { Company: "Mi", Model: "Redmi 13", Memory: 64, Price: 20000 },
  { Company: "Asus", Model: "Rog 5", Memory: 128, Price: 30000 },
];

let str =
  "<table><tr><th>Company</th><th>Model</th><th>Price</th><th>memory</th></tr>";
data.forEach((element) => {
  str +=
    "<tr><td>" +
    element.Company +
    "</td><td>" +
    element.Model +
    "</td><td>" +
    element.Memory +
    "</td><td>" +
    element.Price +
    "</td> </tr>";
  str += "</table>";
  document.querySelector("#table").innerHTML = str;
});
function display(data) {
  let str =
    "<table><tr><th>Company</th><th>Model</th><th>Price</th><th>memory</th></tr>";
  data.forEach((element) => {
    str +=
      "<tr><td>" +
      element.Company +
      "</td><td>" +
      element.Model +
      "</td><td>" +
      element.Memory +
      "</td><td>" +
      element.Price +
      "</td> </tr>";
    str += "</table>";
    document.querySelector("#table").innerHTML = str;
  });
}
function datasort() {
  let order = document.getElementById("Asc-Des").value;
  let val = document.getElementById("category").value;
  if (order == "asc") {
    if (val == "Company") {
      function compare(a, b) {
        if (a.Company < b.Company) {
          return -1;
        } else if (a.Company > b.Company) {
          return 1;
        }
        return 0;
      }
      data.sort(compare);
      display(data);
    } else if (val == "Model") {
      function compare(a, b) {
        if (a.Model < b.Model) {
          return -1;
        } else if (a.Model > b.Model) {
          return 1;
        }
        return 0;
      }
      data.sort(compare);
      display(data);
    } else if (val == "Memory") {
      function compare(a, b) {
        if (a.Memory < b.Memory) {
          return -1;
        } else if (a.Memory > b.Memory) {
          return 1;
        }
        return 0;
      }
      data.sort(compare);
      display(data);
    } else if (val == "price") {
      function compare(a, b) {
        if (a.Price < b.Price) {
          return -1;
        } else if (a.Price > b.Price) {
          return 1;
        }
        return 0;
      }
      data.sort(compare);
      display(data);
    } else if (order == "dsc") {
      if (val == "Company") {
        function compare(a, b) {
          if (a.Company > b.Company) {
            return -1;
          } else if (a.Company < b.Company) {
            return 1;
          }
          return 0;
        }
        data.sort(compare);
        display(data);
      } else if (val == "Model") {
        function compare(a, b) {
          if (a.Model > b.Model) {
            return -1;
          } else if (a.Model < b.Model) {
            return 1;
          }
          return 0;
        }
        data.sort(compare);
        display(data);
      } else if (val == "Memory") {
        function compare(a, b) {
          if (a.Memory > b.Memory) {
            return -1;
          } else if (a.Memory < b.Memory) {
            return 1;
          }
          return 0;
        }
        data.sort(compare);
        display(data);
      } else if (val == "Price") {
        function compare(a, b) {
          if (a.Price > b.Price) {
            return -1;
          } else if (a.Price < b.Price) {
            return 1;
          }
          return 0;
        }
        data.sort(compare);
        display(data);
      }
    }
  }
}
