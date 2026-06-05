const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(typeof prev);
console.log("prev is ", prev);
// const container=document.querySelector(".container");

prev.addEventListener("click", (e) => {
        const images = document.querySelectorAll(".pic");
        let container = document.querySelector(".container");
        container.prepend(images[images.length - 1]);
        console.log("prev");
});

next.addEventListener("click", (e) => {
        const images = document.querySelectorAll(".pic");
        let container = document.querySelector(".container");
        container.appendChild(images[0]);
        console.log("next");
});

const modal_images = document.querySelectorAll(".modal img");
modal_images.forEach(async (modal_image) => {
        const imgId = modal_image.getAttribute("id");
        const imgClass = modal_image.getAttribute("class");
        const imgUrl = modal_image.getAttribute("src");
        const imgheight = modal_image.height;
        const imgwidth = modal_image.width;
        console.log("imgUrl is ", imgUrl);
        const response = await fetch(imgUrl);
        const text = await response.text();
        console.log("text is ", text);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "image/svg+xml");
        console.log("xmlDoc ", xmlDoc);
        console.log(typeof xmlDoc);
        const svg = xmlDoc.querySelector("svg");
        console.log("svg is ", svg);
        if (imgId) svg.setAttribute("id", imgId);
        if (imgClass) svg.setAttribute("class", `${imgClass} replace-svg`);
        svg.setAttribute("width", imgwidth);
        svg.setAttribute("height", imgheight);
        console.log(imgheight);
        console.log(imgwidth);
        svg.removeAttribute("xmlns:a");
        modal_image.replaceWith(svg);
});

// async function svgconverter() {
//         const close_image=document.querySelector(".modal-cross > img");
//         // select attributes

// }
// svgconverter()
//  sel classname
const modal_container = document.querySelector(".modal-container");
const modal_cross = document.querySelector(".modal-cross");
console.log("modal_container is ", modal_container);
modal_cross.addEventListener("click", (e) => {
        console.log("hello");
        modal_container.style.display = "none";
});

// image select feature
const modal_selects = document.querySelectorAll(".modal-select > div");
const modal = document.querySelector(".modal");
function imagechanger(modal_image, index) {
        modal_image.classList.add("sel");
        modal_selects[white].classList.remove("sel");
        white = index;
        console.log("index is ", index);
        console.log("white is ", white);
        const style = window.getComputedStyle(modal_image, false)
        const bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
        // console.log(bi)
        modal.style.backgroundImage = `url(${bi})`;
}

let white = 0;
modal_selects.forEach((modal_image, index) => {
        modal_image.addEventListener("click", (e) => {
                imagechanger(modal_image, index);
        });
});

// modal arrow selction feature
const modal_prev = document.querySelector(".modal-prev");
const modal_next = document.querySelector(".modal-next");

modal_prev.addEventListener("click",(e) =>{
        imagechanger(modal_selects[white-1],white-1);
})

modal_next.addEventListener("click",(e) =>{
        imagechanger(modal_selects[white+1],white+1);
})
