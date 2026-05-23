const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
// const container=document.querySelector(".container");

prev.addEventListener('click',(e)=>{
        const images=document.querySelectorAll(".pic");
        let container=document.querySelector(".container");
        container.prepend(images[images.length - 1]);
        console.log("prev");

})

next.addEventListener('click',(e)=>{
        const images=document.querySelectorAll(".pic");
        let container=document.querySelector(".container");
        container.appendChild(images[0]);
        console.log("next");
})