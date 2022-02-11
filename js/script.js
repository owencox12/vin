let burger = document.querySelector(".promo__header_burger")

burger.addEventListener("click", function(){
    document.querySelector(".promo__header_burger_list").classList.toggle("promo__header_burger_list_active")
    burger.classList.toggle("promo__header_burger_active")
    
})


window.addEventListener("scroll", function(){
    if (scrollY >= 250) {
        document.querySelector(".arrow").classList.add("arrow__visible")
    } else {
        document.querySelector(".arrow").classList.remove("arrow__visible")
    }
})


let arrow = document.querySelector(".arrow")

arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})