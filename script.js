var produproductPriceInputctContainer = [];
var currentIndex = 0; //We made here array of Objects to store all the data and to avoid the overwriting
if (localStorage.getItem("OurProducts") != null) {
  productContainer = JSON.parse(localStorage.getItem("OurProducts")); //3ashan matrg3sh str trg3 array
  displayProducts();
}
var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var myBtn = document.getElementById("myBtn");

//General function
function add() {
  if (myBtn.innerHTML == "Add Product") {
    addProduct();
  } else {
    addUpdate();
  }
}

function addProduct() {
  if (validateProductName() == true) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      description: productDescriptionInput.value,
    };

    productContainer.push(product); // to avoid that elements will overwrite on each other , and put it in box(Container)
    localStorage.setItem("OurProducts", JSON.stringify(productContainer)); //to put the items in local storage after adding from the user side
    document.getElementById("eror1").innerHTML = "";
    clearForm();
    displayProducts();
  } else if (validateProductPrice() == true) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      description: productDescriptionInput.value,
    };

    productContainer.push(product);
    localStorage.setItem("OurProducts", JSON.stringify(productContainer));
    document.getElementById("eror2").innerHTML = "";
    clearForm();
    displayProducts();
  } else if (validateProductCategory() == true) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      description: productDescriptionInput.value,
    };

    productContainer.push(product);
    localStorage.setItem("OurProducts", JSON.stringify(productContainer));
    document.getElementById("eror3").innerHTML = "";
    clearForm();
    displayProducts();
  } else if (validateProductDescription() == true) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      description: productDescriptionInput.value,
    };

    productContainer.push(product);
    localStorage.setItem("OurProducts", JSON.stringify(productContainer));
    document.getElementById("eror4").innerHTML = "";
    clearForm();
    displayProducts();
  } else {
    console.log("Error");
  }
}
function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescriptionInput.value = "";
}
function displayProducts() {
  var cartona = ``;
  for (var i = 0; i < productContainer.length; i++) {
    cartona += `
        <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].description}</td>
       <td><button onclick='updateProducts(${i})'  class="btn btn-outline-warning">Update</button></td>
        <td><button onclick='deleteproduct(${i})' class="btn btn-outline-danger">Delete</button></td>
        
        </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}

function deleteproduct(index) {
  productContainer.splice(index, 1); //splice take (start of element the want to del , number of elements that want to del)
  //select which part want to del
  ///also need to del and update the data in localstorage
  localStorage.setItem("OurProducts", JSON.stringify(productContainer));
  //Now need to del from the HTML page , here I will need to call the displayfunction with the new update
  displayProducts();
}

function searchProduct(term) {
  //Need to select the Item that already has been written in search bar
  //Need to loop over all items , So we Will use the FOR
  var cartona = ``;
  for (var i = 0; i < productContainer.length; i++) {
    //this is how i go throug all the elements in the table
    if (
      productContainer[i].name.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) {
      //if the list of  productcontainer names has the term that has been selected
      //to generlaize the cases will make all the letters in lower case
      //Now we want only to show the similar data that appears on search

      cartona += `
        <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].description}</td>
       <td><button onclick='updateProducts(${i})' class="btn btn-outline-warning">Update</button></td>
        <td><button onclick='deleteproduct(${i})' class="btn btn-outline-danger">Delete</button></td>
        
        </tr>`;
    }
  }
  document.getElementById("tableBody").innerHTML = cartona;

  //Using String Methods to generlaize the lower case and select only the item that appears in search
  searchProduct();
}

function updateProducts(index) {
  //show the data
  currentIndex = index;
  productNameInput.value = productContainer[index].name;
  productPriceInput.value = productContainer[index].price;
  productCategoryInput.value = productContainer[index].category;
  productDescriptionInput.value = productContainer[index].description;
  myBtn.innerHTML = "Update Products"; //convert the add button to update button
}
function addUpdate() {
  productContainer[currentIndex].name = productNameInput.value;
  productContainer[currentIndex].price = productPriceInput.value;
  productContainer[currentIndex].category = productCategoryInput.value;
  productContainer[currentIndex].description = productDescriptionInput.value;

  displayProducts();
  localStorage.setItem("OurProducts", JSON.stringify(productContainer));
  clearForm();
  myBtn.innerHTML = "Add Products"; //convert the add button to update button
}
///////////***************************Validation**********************////////////////////////////////////

function validateProductName() {
  var regex = /^[A-Z][a-z]{5}$/;
  if (regex.test(productNameInput.value)) {
    return true;
  } else {
    document.getElementById("eror1").innerHTML =
      "product name is invalid Must have 5 char";

    return false;
  }
}
function validateProductPrice() {
  var regex = /^[0-9]{4}$/;
  if (regex.test(productPriceInput.value)) {
    return true;
  } else {
    document.getElementById("eror2").innerHTML =
      "product price is invalid Must have 4 Numbers";

    return false;
  }
}

function validateProductCategory() {
  var regex = /^[A-Z][a-z]{6}$/;
  if (regex.test(productCategoryInput.value)) {
    return true;
  } else {
    document.getElementById("eror3").innerHTML =
      "product category is invalid Must have 6 char";

    return false;
  }
}
////^[A-Z]\s[a-z]{20}/
//productDescriptionInput
function validateProductDescription() {
  var regex = /^[A-Z]\s[a-z]{10}/;
  if (regex.test(productDescriptionInput.value)) {
    return true;
  } else {
    document.getElementById("eror4").innerHTML =
      "product category is invalid Must have 20 words";

    return false;
  }
}
