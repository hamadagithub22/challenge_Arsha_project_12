let ProSection = document.querySelector(".ProSection");
let spans = document.querySelectorAll(".ProSection span");

window.onscroll =function(){
    if (window.scrollY >= ProSection.offsetTop - 200){
        console.log("read setin skills")
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}


// accordion
let accordionBtns =  document.querySelectorAll(".accordionBtn");
let accordionBody = document.querySelectorAll(".accordion-body");
let accordionIcon = document.querySelectorAll(".accordionBtn i");


for (let i = 0; i < accordionBtns.length; i++){
accordionBtns[i].addEventListener("click", ()=>{
    for (let j = 0; j < accordionBtns.length; j++){
        if (i == j){
            if (accordionBody[i].clientHeight == 0){
             accordionBody[i].style.height = ` ${accordionBody[i].scrollHeight}px `;
             accordionIcon[i].style.transform =  "rotate(180deg)"
            }else{
              accordionBody[i].style.height = ``;
              accordionIcon[i].style.transform =  ""
            }
            
            }else{
             accordionBody[j].style.height = ``;
             accordionIcon[j].style.transform =  ""

             }
    }




    
   

});
}


AOS.init();