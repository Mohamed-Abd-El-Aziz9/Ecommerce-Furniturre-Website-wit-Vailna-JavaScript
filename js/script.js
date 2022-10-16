
/*===============SLider Section Avtivation Start ===================== */


var image = document.getElementById("container");
var start = document.getElementById("start");
var Stop = document.getElementById("stop");
var leftClick = document.getElementById("leftClick");
var rightClick = document.getElementById("rightClick");
var image = document.getElementById("container");
var numberOfImage = 2;
var index = 1;
function moveForward() {
    if (index >= 6) {
        index = 1;
        image.setAttribute("style", `background-image: url(images/${index}.jpg);`);
    }
    else {
        index++;
        image.setAttribute("style", `background-image: url(images/${index}.jpg);`);
    }


}


function moveBack() {
    if (index <= 1) {
        index = 6;
        image.setAttribute("style", `background-image: url(images/${index}.jpg);`);
    }
    else {
        index--;
        image.setAttribute("style", `background-image: url(images/${index}.jpg);`);
    }

}
/*=============== Navbar Manpulation wtih jequet  ===================== */



$(window).scroll(function () {
    let w = $(Window).scrollTop();
    var Navbar = document.getElementById("nav-bar");
    if (w >= 300) {
        Navbar.classList.add("bg-black")

    }
    else {
        Navbar.classList.remove("bg-black")

    }
});


/*=============== Navbar Manpulation wtih jequet  ===================== */


/*===============SLider Section Avtivation Start  ===================== */
var view_filter1 = document.getElementById("view-filter-material");
var view_filter2 = document.getElementById("view-filter-price");
var lists1 = document.getElementById("lists1");
var lists2 = document.getElementById("lists2");
view_filter1.addEventListener("click", function () {
    lists1.classList.toggle("d-none");
})
view_filter2.addEventListener("click", function () {
    lists2.classList.toggle("d-none");
})
/*===============SLider Section Avtivation End  ===================== */


/*=============== Plus the cart notification by 1  ===================== */

var elem = document.getElementById("notifcation")
var buy_btn = document.getElementsByClassName("buy-now");
console.log(buy_btn);
var x = "0"
 function addProduct () {
    x = Number(x) + 1 ;
    elem.textContent = x;
}; 

/*========================================*/


var bed_section =document.getElementById("bed")
var NIGHTSTANDS =document.getElementById("NIGHTSTANDS")
var dresses =document.getElementById("Dresses")
var banquts =document.getElementById("banquts")
var bed_btn = document.getElementById("bed-btn")
console.log(bed_section)
function showbeds() {
    bed_section.classList.remove("d-none")
    NIGHTSTANDS.classList.add("d-none")
    dresses.classList.add("d-none")
    banquts.classList.add("d-none")

}
function shownight() {
    NIGHTSTANDS.classList.remove("d-none")
    bed_section.classList.add("d-none")
    dresses.classList.add("d-none")
    banquts.classList.add("d-none")
}
function showdress() {
    dresses.classList.remove("d-none")
    bed_section.classList.add("d-none")
    NIGHTSTANDS.classList.add("d-none")
    banquts.classList.add("d-none")

}
function showbanquets() {
    banquts.classList.remove("d-none")
    bed_section.classList.add("d-none")
    NIGHTSTANDS.classList.add("d-none")
    dresses.classList.add("d-none")
}


function removeClass() {
    document.getElementById("photo1").classList.remove("layer2")
}