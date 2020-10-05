var popup = document.querySelector(".modal");
var close = popup.querySelector(".add-to-cart__button");
var addToCard = document.querySelector(".js-add-to-card");

addToCard.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");	
    });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");	
    });    