function showDate() {
  start = document.getElementById("start").value;
  end = document.getElementById("end").value;

  for (let year = start; year <= end; year++) {
    for (let month = 0; month <= 11; month++) {
      let result = new Date(year, month, 13);
      if (result.getDay() == 5) {
        console.log(result);
      }
    }
  }
}
