/*---------------------------------------slider---------------------------------------*/
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

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
/*---------------------------------------cart---------------------------------------*/
const btn=document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector(".product-name").innerText
        var productPrice = product.querySelector("span").innerText
       // console.log(productPrice,productImg,productName)
        addcart(productPrice,productImg,productName)
    }})
})

function addcart(productPrice,productImg,productName) {
    var addtr = document.createElement("tr")   
    var cartItem = document.querySelectorAll("tbody tr")
    for ( var i = 0 ; i < cartItem.length ; i++ ){  
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName ){
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }        
    }
    var trcontent = productPrice
    addtr.innerHTML = '<tr><td style="display: flex; align-items: center;"><img style="width:70px;" src="'+productImg+'" alt=""><span class="title" style="padding: 0px 20px;">'+productName+'</span></td><td><span class="prices">'+productPrice+'</span></td><td><input style="width: 50px; height: 30px; padding: 10px 10px; border-radius: 10px; outline: none;" type="number" value="1" min="1"></td><td style="cursor:  pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart ()
}

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    
    //console.log(cartItem.length)
    for ( var i = 0 ; i < cartItem.length ; i++ ){      
        var inputValue = cartItem[i].querySelector("input").value      
       // console.log(inputValue)       
        var productPrice = cartItem[i].querySelector(".prices").innerHTML           
       // console.log(productPrice)
        var newsProductPrice = productPrice.split('.').join(""); 
        totalA = newsProductPrice*inputValue  
       // totalB = totalA.toLocaleString('de-DE')       
         // console.log(totalB)
        totalC = totalC + totalA
        //totalD = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange ()
    // console.log(cartTotalA)
}

function deleteCart (){ 
    var cartItem = document.querySelectorAll("tbody tr")
        for ( var i = 0 ; i < cartItem.length ; i++ ){ 
            var productT = document.querySelectorAll(".cart-delete")
            productT[i].addEventListener("click" , function(event){
                var cartDelete = event.target 
                var cartitemR = cartDelete.parentElement.parentElement
                cartitemR.remove()
                carttotal()
                console.log(cartitemR)    
            })
               
    }
}

function inputchange (){
    var cartItem = document.querySelectorAll("tbody tr")
        for ( var i = 0 ; i < cartItem.length ; i++ ){ 
            var inputValue = cartItem[i].querySelector("input")
            inputValue.addEventListener("change",function(){
                carttotal()
            })
               
    }
}

const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right="-100%"
})
/*---------------------------------------cart---------------------------------------*/
/*---------------------------------------filter---------------------------------------*/
const allFilterItems = document.querySelectorAll('.product-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}
/*---------------------------------------filter---------------------------------------*/