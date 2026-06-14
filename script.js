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
 async function svgchanger(presvgimage , enable=0){
             const imgId = presvgimage.getAttribute("id");
             const imgClass = presvgimage.getAttribute("class");
             const imgUrl = presvgimage.getAttribute("src");
             const imgheight = presvgimage.height;
             const imgwidth = presvgimage.width;
             const response = await fetch(imgUrl);
             const text = await response.text();
             const parser = new DOMParser();
             const xmlDoc = parser.parseFromString(text, "image/svg+xml");
             const svg = xmlDoc.querySelector("svg");
             if (imgId) svg.setAttribute("id", imgId);
             if (imgClass) svg.setAttribute("class", `$(imgClass) replace-svg`);
             if(enable){
                  console.log("enabled");
                  svg.removeAttribute("width");
                  svg.removeAttribute("height");
            }
            svg.setAttribute("width", imgwidth);
            svg.setAttribute("height", imgheight);
            
             svg.removeAttribute("xmlns:a")
             presvgimage.replaceWith(svg);
             
}

const modal_images = document.querySelectorAll(".modal img");
modal_images.forEach(async (modal_image) => {
        svgchanger(modal_image);
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
const image = document.querySelector(".image");
const pics = document.querySelectorAll(".pic");
// image changer function
let white = 0;
function modalImageChanger(modal_image, index) {
        modal_selects[white].classList.remove("sel");
        modal_image.classList.add("sel");
        white = index;
        console.log("index is ", index);
        console.log("white is ", white);
        const style = window.getComputedStyle(modal_image, false)
        const bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
        // console.log(bi)
        modal.style.backgroundImage = `url(${bi})`;
}
let main_white=0;
function mainImageChanger(main_image,index){
      pics[main_white].classList.remove("def");
      main_image.classList.add("def");
      main_white = index;
      const style = window.getComputedStyle(main_image, false);
      const bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
      console.log("main bi is ", bi);
      image.style.backgroundImage= `url(${bi})`;
      
}
image.addEventListener("click",(e)=>{
    modal_container.style.display="flex";
    console.log("hello from image");
})

modal_selects.forEach((modal_image, index) => {
        modal_image.addEventListener("click", (e) => {
                modalImageChanger(modal_image, index , "sel");
        });
});

// modal arrow selction feature
const modal_prev = document.querySelector(".modal-prev");
const modal_next = document.querySelector(".modal-next");

const mod = (n, m) => ((n % m) + m) % m;

modal_prev.addEventListener("click", (e) => {
        console.log("white-1 is ", (white - 1) % modal_selects.length);
        modalImageChanger(modal_selects[mod(white - 1, modal_selects.length)], mod(white - 1, modal_selects.length), "sel");
})

modal_next.addEventListener("click", (e) => {
        modalImageChanger(modal_selects[mod(white + 1, modal_selects.length)], mod(white + 1, modal_selects.length), "sel");
})

// container pic selection feature > working on this feature
pics.forEach((pic, index) => {
        pic.addEventListener("click", (e) => {
               console.log("hello from pic")
               mainImageChanger(pic,index);                
        })
});

// cart view feature
const cartitems = document.querySelector(".cartitems");
const cart = document.querySelector(".cart > img");
const body = document.querySelector("body");
body.addEventListener('click', (e) => {
        cartitems.style.display = "none";
})
cart.addEventListener('click', (e) => {
        cartitems.style.display = "flex";
        e.stopPropagation();
})
cartitems.addEventListener('click', (e) => {
        e.stopPropagation();
})

// cart items add feature - Ist
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const quantity = document.querySelector(".quantity > span");

minus.addEventListener('click', (e) => {
        if (Number(quantity.textContent - 1) >= 0) {
                e.stopPropagation();
                quantity.innerHTML = Number(quantity.textContent) - 1;
        }


})

plus.addEventListener('click', (e) => {
        e.stopPropagation();
        quantity.innerHTML = Number(quantity.textContent) + 1;
        console.log("hi from plus");
})

// add to cart feature - IInd
const product = document.querySelector(".product");
const submit = document.querySelector(".submit");
const dlt = document.querySelector(".delete");
const pricecart = document.querySelector(".pricecart");
const b=document.querySelector("b");
submit.addEventListener('click', (e) => {
        e.stopPropagation();
        if (Number(quantity.textContent) == 0) {
                product.style.display = "none";
        } else {
                pricecart.children[1].textContent = quantity.textContent;
                product.style.display = "flex";
                b.textContent="$" + (Number(quantity.textContent) * 125.00).toFixed(2);
        }

})

dlt.addEventListener('click',(e)=>{
        product.style.display="none";
        quantity.textContent=0;
})

// button svg
const buttonsvg = document.querySelector(".submit > img");
svgchanger(buttonsvg,1);
