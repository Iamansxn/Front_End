$(document).ready(function () {
  fetch("https://fakestoreapi.com/products")
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      console.log(objectData);
      let storeData = "";
      objectData.map((values) => {
        storeData += `<div id="${values.id}">
              <img src="${values.image}" width="300" height="300" alt="${
          values.title
        }" />
              <h2>${values.title}</h2>
              <p>${"$" + values.price}</p>
              <p>${values.description}</p>
              <button>Buy</button><button>Add to Cart</button>
          </div>`;
      });

      $(".storeDisp").html(storeData);
    });
});
