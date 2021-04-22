// var searchIcon = document.querySelector(".fa-search");
// var closeIcon = document.querySelector(".fa-times");
// var search = document.getElementById("search");

// // searchIcon.onclick = () =>{
// //     search.classList.add("show");
// // }

// // closeIcon.onclick = () =>{
// //     search.classList.remove("show");
// // } 

var button = document.querySelector(".menu-icon");
var wrapper = document.querySelector(".wrapper");
var nav = document.querySelector("nav");
var menu = document.querySelector("nav ul");
console.log(menu)
button.onclick = ()=> {
    menu.classList.toggle("showing");
}



// $(window).on("scroll", function(){
//     if($(window).scrollTop()){
//         $('nav').addClass('black');
//     }
//     else{
//         $('nav').removeClass('black');
//     }
// });