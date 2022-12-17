autoSlider();
var left = 0;
var timer=0;
function sliderLeft(){
    var polosa = document.getElementById('bottling_slider_path');
   
    if(left<-4200 || left==0){
        polosa.style.transition='none';
        left=0;
    }else{
        polosa.style.transition='all ease 2s';
    }
    polosa.style.left=left+'px';
    left=left-600;
    autoSlider();
}
function autoSlider(){
    timer=setTimeout(sliderLeft,2000);
}