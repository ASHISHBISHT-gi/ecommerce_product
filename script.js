const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
console.log(typeof prev);
console.log("prev is ",prev);
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

const modal_images=document.querySelectorAll(".modal img");
modal_images.forEach(async (modal_image)=>{
        const imgId= modal_image.getAttribute('id');
        const imgClass= modal_image.getAttribute('class');
        const imgUrl=modal_image.getAttribute('src');
        const imgheight=modal_image.height;
        const imgwidth= modal_image.width;
        console.log("imgUrl is ",imgUrl);
        const response = await fetch(imgUrl);
        const text = await  response.text();
        console.log("text is ",text);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'image/svg+xml');
        console.log("xmlDoc ",xmlDoc)
        console.log(typeof xmlDoc);     
        const svg=xmlDoc.querySelector('svg');
        console.log("svg is ",svg)
        if (imgId) svg.setAttribute('id', imgId);
        if (imgClass) svg.setAttribute('class', `${imgClass} replace-svg`);
        svg.setAttribute("width", imgwidth);
        svg.setAttribute("height",imgheight);
        console.log(imgheight);
        console.log(imgwidth);
        svg.removeAttribute('xmlns:a');
        modal_image.replaceWith(svg);
})

// async function svgconverter() {   
//         const close_image=document.querySelector(".modal-cross > img");
//         // select attributes
        

// }
// svgconverter()