// making the event listeners to work with the images in the DOM
function configureListeners() {
  let images = document.getElementsByTagName("img");

  for (var i = 0; i < images.length; i++) {
    document
      .getElementById(images[i].id)
      .addEventListener("mouseover", addOpacity);
    document
      .getElementById(images[i].id)
      .addEventListener("mouseout", removeOpacity);
  }
}
// creating a dim & undimming function to shade it out with the event listening
function addOpacity(event) {
  if (!this.classList.contains("dim")) {
    this.classList.add("dim");
  }
  getProductInfo(event.target.id);
}

function removeOpacity(event) {
  if (this.classList.contains("dim")) {
    this.classList.remove("dim");
  }

  let element = document.getElementById("color-price");
  element.textContent = "";

  let color = document.getElementById("color-name");
  color.textContent = "";

  event.preventDefault();
}
// using the objects(price and colorname) in the DOM to get the product information and reflect price
// vv
function updatePrice(colorName, price) {
  let colorPrice = document.getElementById("color-price");
  colorPrice.textContent = price;

  let color = document.getElementById("color-name");
  color.textContent = colorName;
}

function getProductInfo(paintColor) {
  let price;
  let colorName;

  switch (paintColor) {
    case "pn1":
      price = "$14.99";
      colorName = "Lime Green";
      updatePrice(colorName, price);
      break;
    case "pn2":
      price = "$11.14";
      colorName = "Medium Brown";
      updatePrice(colorName, price);
      break;
    case "pn3":
      price = "$22.99";
      colorName = "Royal Blue";
      updatePrice(colorName, price);
      break;
    case "pn4":
      price = "$13.42";
      colorName = "Solid Red";
      updatePrice(colorName, price);
      break;
    case "pn5":
      price = "$21.98";
      colorName = "Solid White";
      updatePrice(colorName, price);
      break;
    case "pn6":
      price = "$4.99";
      colorName = "Solid Black";
      updatePrice(colorName, price);
      break;
    case "pn7":
      price = "$8.22";
      colorName = "Solid Cyan";
      updatePrice(colorName, price);
      break;
    case "pn8":
      price = "$11.99";
      colorName = "Solid Purple";
      updatePrice(colorName, price);
    case "pn9":
      price = "$14.99";
      colorName = "Solid Yellow";
      updatePrice(colorName, price);
    default:
  }
}
