$(document).ready(function () {
  // TASK:1
  $("#clickme_task").click(function () {
    alert("Clicked me");
  });
  // TASK:2
  $("#validate_name").click(function () {
    fname = $("#fname").val();
    lname = $("#lname").val();
    if (fname == "" || lname == "") {
      alert("fill the details");
      if (fname == "") {
        $("#fname").css("background-color", "red");
        $("#fname").on("input", function () {
          $(this).css("background-color", "");
        });
      }
      if (lname == "") {
        $("#lname").css("background-color", "red");
        $("#lname").on("input", function () {
          $(this).css("background-color", "");
        });
      }
    }
  });
  //TASK:3
  $("#valid_pass").click(function () {
    pass = $("#pass").val();
    confpass = $("#cpass").val();
    if (pass != confpass) {
      $(".error").html("Password does not match !").css("color", "red");
    }
  });
  // TASK:4
  $("#add_details").on("click", function () {
    clss = $("#class").val();
    board = $("#board").val();
    marks = $("#marks").val();
    division = $("#divison").val();
    clss_value = $("#sdetails").text(clss);
    table =
      "<tr>" +
      '<td><input type="text" name="class" value="" ></td>' +
      '<td><input type="text" name="board" value=""></td>' +
      '<td><input type="text" name="marks" value=""></td>' +
      '<td><input type="text" name="divison" value=""></td>' +
      '<td><button id="deleteRow">-</button></td>' +
      "</tr>";
    $("#sdetails").append(table);
  });
  // TASK:5
  $("#tr_even").on("click", function () {
    $("tr:even").css("background-color", "LightGrey");
    $("tr:odd").css("background-color", " DodgerBlue");
  });
  $("#tr_odd").on("click", function () {
    $("tr:odd").css("background-color", " DodgerBlue");
    $("tr:even").css("background-color", "LightGrey");
  });
  // TASK:6
  setTimeout(function () {
    $(".test").each(function () {
      $(this).find("p:first, p:last").css("color", "red");
    });
  }, 5000);
  // TASK:7
  let pics = ["/Images/image1.jpg", "/Images/image2.jpg", "/Images/image3.jpg"];
  let currentIndex = 0;
  function showPics(index) {
    $("#images").attr("src", pics[index]);
  }
  // TASK:8
  flowers = ["lily", "sunflower"];
  $("#flower_input").on("input", function () {
    search = $(this).val().toLowerCase();
    sugg = search(flowers);
    displaySuggestion(sugg);
  });
  // TASK:9
  let productlist = {
    DuffleBag: { small: 1400, medium: 2500, large: 3500 },
    TShirts: { light_Gray: 1200, Blue: 2300, Black: 3300 },
  };
  $("#product_size").on("change", function () {
    size = $(this).val();
    product = "DuffleBag";
    if (size) {
      price = productlist[product][size];
      $("#product_price").text(price);
    } else {
      $("#product_price").text("0");
    }
  });
});
