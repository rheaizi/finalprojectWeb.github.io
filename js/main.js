var animItems = document.querySelectorAll('._anim-items');

window.addEventListener('scroll',animOnScroll);
function animOnScroll(){
    for (let i = 0; i < animItems.length; i++) {

        var elem = animItems[i];
        var distInView = elem.getBoundingClientRect().top - window.innerHeight;
        if (distInView < 0) {
            console.log("yes");
            elem.classList.add("_active");
        } else {
            elem.classList.remove("_active");
        }
    }
}
 
let elements = document.querySelectorAll(".zat");
console.log(elements);
window.addEventListener('scroll', fadeIns); 
function fadeIns() {
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            console.log("yes")
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIns();



let images = document.querySelectorAll('.healthy_slide_picture img');
console.log(images);
var current = 0;
let sandar = document.querySelector('.healthy_slide_text_count').innerHTML;

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
    document.querySelector('.healthy_slide_text_count').innerHTML='0'+(current+1)+sandar.substring(2);
}
document.querySelector('.healthy_slide_text_next').onclick = function(){
    if(current < images.length - 1) {
        current++;
    } else {
        current = 0;
    }
    slider();
};
document.querySelector('.healthy_slide_text_prev').onclick = function(){
    if(current-1== -1) {
        current=images.length-1;
    } else {
        current --;
    }
    slider();
};

let imges = document.querySelectorAll('.glass_of_water_left img');
console.log(imges);
var current = 0;
let sandr = document.querySelector('.glass_of_water_right_count').innerHTML;

function slider() {
    for (let i = 0; i < imges.length; i++) {
        imges[i].classList.add('opacity0');
    }
    imges[current].classList.remove('opacity0');
    document.querySelector('.glass_of_water_right_count').innerHTML='0'+(current+1)+sandr.substring(2);
}
document.querySelector('.glass_of_water_right_button_next').onclick = function(){
    if(current < images.length - 1) {
        current++;
    } else {
        current = 0;
    }
    slider();
};
document.querySelector('.glass_of_water_right_button_prev').onclick = function(){
    if(current-1== -1) {
        current=images.length-1;
    } else {
        current --;
    }
    slider();
};