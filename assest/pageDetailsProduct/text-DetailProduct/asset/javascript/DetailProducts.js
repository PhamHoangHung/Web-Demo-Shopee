const allHoverImages = document.querySelectorAll('.imgs img');
const imgContainer = document.querySelector('.img-single');
const bodyModal = document.querySelector('.body_modal')
const modalImage = document.querySelectorAll('.modal_imgs img')
const imageSingle = document.querySelector('.modal_img-single');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const modalBox = document.querySelector('.body_modal-box')

// window.addEventListener('DOMContentLoaded', () => {
//     allHoverImages[0].parentElement.classList.add('active');
// });

// allHoverImages.forEach((image) => {
//     image.addEventListener('mouseover', () =>{
//         imgContainer.querySelector('img').src = image.src;
//         resetActiveImg();
//         image.parentElement.classList.add('active');
//     });
// });

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        // imgContainer.querySelector('img');
        // console.log("1",imgContainer);

        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.classList.add('active');
    });
});

allHoverImages.forEach((img) => {
    img.addEventListener('click', () =>{
    bodyModal.classList.add("open");
    imageSingle.querySelector('img').src = img.src
    resetActiveImg();
    modalImage.classList.add('active');
    });
});

bodyModal.addEventListener("click", () => {
    bodyModal.classList.remove("open");
});

modalBox.addEventListener("click", (event) => {
    event.stopPropagation()
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.classList.remove('active');
    });
}

modalImage.forEach((img) => {
    img.addEventListener('click', () =>{
        console.log(img)
       

        imageSingle.querySelector('img').src = img.src;
       

        modalImage.forEach((img) => {
            img.classList.remove('active');
        })
        img.classList.add('active');
    });
});

// HANDLE


// fetch(href="./asset/json/json.json")

//         .then(function(response){
//             return response.json();
//         })

//         .then(function(products){
//             let placeholder = document.querySelector('.showproduct-center');
//             let out = "";
//             for(let product of products){
//                 out += `
//                     <div class="showproduct-center_item">
//                         <a href="">
//                             <div class="showproduct-center_item--img">
//                                 <img src='${product.image}'>
//                             </div>

//                             <span class="showproduct-center_item--span">${product.name}</span>

//                             <div class="showproduct-center_item--price">
//                                     <div class="showproduct-center_item--price-left">${product.price}</div>
    
//                                     <div class="showproduct-center_item--price-right">${product.sold}</div>
//                             </div>

//                             <div class="find-products">
//                                     ${product.find}
//                             </div>
//                         </a>
//                     </div>
//                 `;
//             }

//             placeholder.innerHTML = out;
//         });

// EMD HANDLE