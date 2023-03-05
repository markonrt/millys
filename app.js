
let dropDownBtns = document.querySelectorAll('.block-six .six-btn');
function dropClicked(btn){
    console.log(btn)
    btn.scrollIntoView({
        behavior: "smooth",
        block: "start", //po y osi
        inline: "nearest"
    });
    if(!btn.nextSibling.nextSibling.classList.contains('noDisplay')){
        btn.nextSibling.nextSibling.classList.add("noDisplay");
       return;
    }
    dropDownBtns.forEach( element => {
            element.nextSibling.nextSibling.classList.add("noDisplay");
    })
    btn.nextSibling.nextSibling.classList.remove("noDisplay")
}
/*Slider*/

let sliders = document.querySelectorAll('#slider-div .slider');
console.log(sliders)
sliders.forEach(slide=>{
    slide.style.display = "none";
});
sliders[0].style.display = "block";
let slideNum=0;
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');
let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');
let dotList = document.querySelectorAll('.slider-indicator .indicator');


dot1.addEventListener("click", ()=>{
    sliders[slideNum].style.display = "none";
    dotList.forEach(el=>{
        el.classList.remove("indicator-active");
    });
    dot1.classList.add("indicator-active")
    slideNum=0
    sliders[slideNum].style.display = "block";
});
dot2.addEventListener("click", ()=>{
    sliders[slideNum].style.display = "none";
    dotList.forEach(el=>{
        el.classList.remove("indicator-active");
    });
    dot2.classList.add("indicator-active");
    slideNum=1;
    sliders[slideNum].style.display = "block";
});
dot3.addEventListener("click", ()=>{
    sliders[slideNum].style.display = "none";
    dotList.forEach(el=>{
        el.classList.remove("indicator-active");
    });
    dot3.classList.add("indicator-active");
    slideNum=2;
    sliders[slideNum].style.display = "block";
    console.log(slideNum)
});


leftBtn.addEventListener("click", ()=>{
    sliders[slideNum].style.display = "none";
    slideNum--;
    console.log(slideNum);
    if(slideNum<=-1){
        slideNum = 2;
    }
    sliders[slideNum].style.display = "block";
    dotList.forEach((el,i)=>{
        el.classList.remove("indicator-active");
        if(i==slideNum){
            el.classList.add("indicator-active");
        };
    });
})
rightBtn.addEventListener("click", ()=>{
    sliders[slideNum].style.display = "none";
    slideNum++;
    if(slideNum>=3){
        slideNum = 0;
    }
    console.log(slideNum)
    sliders[slideNum].style.display = "block";
    dotList.forEach((el,i)=>{
        el.classList.remove("indicator-active");
        if(i==slideNum){
            el.classList.add("indicator-active");
        };
    });
})
