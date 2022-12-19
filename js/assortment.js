var animItems = document.querySelectorAll('._dosbos');

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
