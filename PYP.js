/*---------------------------------------slider---------------------------------------*/
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".slide i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
/*---------------------------------------slider---------------------------------------*/
/*------------------------------------search&filter-----------------------------------*/
let products = {
    data: [
      {
        productName: "Thứ hai mua 1 tặng 1",
        category: "HOTDEAL",
        price: "Cho hóa đơn trên 50.000",
        image: "image/Mua1tang1.png",
      },
      {
        productName: "Deal hời mỗi ngày",
        category: "HOTDEAL",
        price: "Cho hóa đơn trên 100.000",
        image: "image/Dealhoimoingay.png",
      },
      {
        productName: "Sinh nhật 10 năm 1 miếng gà giá siêu rẻ",
        category: "BESTSELLER",
        price: "19.000",
        image: "image/Khuyenmai1.png",
      },
      {
        productName: "Combo happy meal 2",
        category: "BESTSELLER",
        price: "79.000",
        image: "image/Khuyenmai2.png",
      },
      {
        productName: "Combo happy meal",
        category: "BESTSELLER",
        price: "79.000",
        image: "image/Khuyenmai3.png",
      },
      {
        productName: "Khoai tây chiên (vừa)",
        category: "BESTSELLER",
        price: "25.000",
        image: "image/Khuyenmai4.png",
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
  //Initially display products
  window.onload = () => {
    filterProduct("BESTSELLER");
  };