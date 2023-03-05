
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

leftBtn.addEventListener("click", ()=>{
    sliders[slideNum].style.display = "none";
    slideNum--;
    console.log(slideNum);
    if(slideNum<=-1){
        slideNum = 2;
    }
    sliders[slideNum].style.display = "block";
})
rightBtn.addEventListener("click", ()=>{
    sliders[slideNum].style.display = "none";
    slideNum++;
    if(slideNum>=3){
        slideNum = 0;
    }
    console.log(slideNum)
    sliders[slideNum].style.display = "block";
})
