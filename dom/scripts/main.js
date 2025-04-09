const btnGroup = document.querySelector(".btn-group");
const prevBtn = btnGroup.querySelector("button.btn:nth-child(1)");
const numBtn = btnGroup.querySelector("button.btn:nth-child(2)");
const nextBtn = btnGroup.querySelector("button.btn:nth-child(3)");
let counter = 1;
const SetNumBtn = (num = 1)=> {
    numBtn.innerHTML = num;
};



if(prevBtn){
    prevBtn.classList.add("btn-info");
    
}


if(numBtn){
    numBtn.classList.add("btn-primary");
    
}


if(nextBtn){
    nextBtn.classList.add("btn-info");
}
nextBtn.addEventListener("click", (e)=> {
    counter++;
    SetNumBtn(counter);    
});

prevBtn.addEventListener("click", (e)=> {
    if(counter<2){
        return;
    }
    counter--;
    SetNumBtn(counter);    
});


