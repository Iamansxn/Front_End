$(document).ready(function () {});
function changesize() {
  $("h1")
    .not(".Para")
    .each(function (index, element) {
      let newElement = $("<h2/>");
      let abarr = [];
      let att = "";
      $(this.attributes).each(function () {
        $(newElement).att(this.nodeName, this.nodeValue);
      });
      $(this).replaceWith(function () {
        return $(newElement).append($(this).content());
      });
    });
}
