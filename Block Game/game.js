$(document).ready(function () {
  let count = 0;
  // Mapping of id and its neighbour cell
  $("td").on("click", function () {
    var idData = {
      1: [1, 2, 4],
      2: [1, 2, 3, 5],
      3: [3, 2, 6],
      4: [1, 4, 5, 7],
      5: [2, 4, 5, 6, 8],
      6: [3, 6, 5, 9],
      7: [7, 4, 8],
      8: [5, 7, 8, 9],
      9: [6, 9, 8],
    };
    console.log($(this).css("background-color"));
    // Method for toggling current block and its neighbour block
    var idToggle = idData[this.id];
    idToggle.forEach(function (id) {
      var block = $("#" + id);
      var currentcol = block.css("background-color");
      //   console.log("Current color:", currentcol);
      var newcol =
        currentcol === "rgb(0, 0, 0)" ? "rgba(0, 0, 0, 0)" : "rgb(0, 0, 0)";
      console.log("New color:", newcol);
      block.css("background-color", newcol);
    });

    // Counter to count no of clicks
    ++count;
    $("#count").text("Score : " + count);
    //Game over funtion if all bock colour same
    var blackColor = $("#" + idToggle[1]).css("background-color");
    for (let i = 1; i < idToggle.length; i++) {
      if ($("#" + idToggle[i]).css("background-color") != blackColor) {
        blockcol = false;
        break;
      }
      blockcol = true;
      alert("you won" + " " + "Score:" + count);
    }
  });
});
