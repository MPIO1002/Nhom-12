/*------------------------------------search&filter-----------------------------------*/
let products = {
    data: [
      {
        productName: "Combo khuyến mãi MayoB",
        category: "Chicken",
        price: "129.000",
        image: "image/Ga1.png",
      },
      {
        productName: "Combo MayoB 2",
        category: "Chicken",
        price: "155.000",
        image: "image/Ga2.png",
      },
      {
        productName: "Combo MayoB 3",
        category: "Chicken",
        price: "253.000",
        image: "image/Ga3.png",
      },
      {
        productName: "Combo MayoB 4",
        category: "Chicken",
        price: "263.000",
        image: "image/Ga4.png",
      },
      {
        productName: "Hamburger cá",
        category: "Hamburger",
        price: "57.000",
        image: "image/Burger1.png",
      },
      {
        productName: "Hamburger tôm",
        category: "Hamburger",
        price: "60.000",
        image: "image/Burger2.png",
      },
      {
        productName: "Hamburger gà",
        category: "Hamburger",
        price: "55.000",
        image: "image/Burger3.png",
      },
      {
        productName: "Combo hamburger",
        category: "Hamburger",
        price: "55.000",
        image: "image/Burger5.png",
      },
      {
        productName: "Mì ý",
        category: "Spaghetti",
        price: "57.000",
        image: "image/Miy1.png",
      },
      {
        productName: "Khoai tây nghiền",
        category: "Snack",
        price: "60.000",
        image: "image/Snack.png",
      },
      {
        productName: "Bánh Tart phô mai",
        category: "Snack",
        price: "55.000",
        image: "image/Snack1.png",
      },
      {
        productName: "Snack mực",
        category: "image/Snack",
        price: "55.000",
        image: "image/Snack2.png",
      },
      {
        productName: "Bắp cải trộn",
        category: "Snack",
        price: "55.000",
        image: "image/Snack3.png",
      },
      {
        productName: "Sprite",
        category: "Drink",
        price: "24.000",
        image: "image/Sprite.png",
      },
      {
        productName: "Coca Cola",
        category: "Drink",
        price: "24.000",
        image: "image/Coca.png",
      },
      {
        productName: "Fanta",
        category: "Drink",
        price: "24.000",
        image: "image/Fanta.png",
      },
      {
        productName: "Dasani",
        category: "Drink",
        price: "20.000",
        image: "image/Dasani.png",
      },
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h5");
    price.innerText = i.price + "đ";
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("btn-active");
      } else {
        button.classList.remove("btn-active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };