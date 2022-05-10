//------------------ attempt to make slides more dynamic -----------------//
// let testimonialIndex = 1;

// function nextTes(n) {
//     showTestimonial(testimonialIndex += n)};

// function showTestimonial(n) {
//     let i;
//     let tesList = $(".testimonials");
//     console.log("tesList length = " + tesList.length)
//     if (n < tesList.length) {testimonialIndex = 1}
//     if(n < 1) {testimonialIndex = tesList.length}
//     console.log(" index = " + testimonialIndex)

//     for (i=0; i<tesList.length; i++){
//         tesList[i].style.display = "none";
//     }};

//--------------------- Wonky solution -----------------------------------//
$(".button").click(function() {
    let button = $(this).attr("class");
    console.log("class name = " + button)})

var tes1 = $(".testimonial1");    
var tes2 = $(".testimonial2");    

function nxButton () {
if (tes1[0].style.display = "flex"){
    tes1[0].style.display = "none";
    tes2[0].style.display = "flex";
} }

function prButton () {
    if (tes2[0].style.display = "flex"){
        tes1[0].style.display = "flex";
        tes2[0].style.display = "none";    
    } }

// I wanted to do if/else statements so that the buttons always worked but I couldn't figure it out







