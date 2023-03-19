

// document.getElementById('next').onclick = function() {
//     let lists = document.querySelectorAll('.slider-left_item');
//     document.getElementById('.container-slider-left').appendChild(lists[0]);
// }



// var maining = document.querySelector(".imgimg");
// var images =["/assest/imgs/slider-1.jfif", "/assest/imgs/banner-silder1.jfif", "/assest/imgs/banner-silder2.jfif", "/assest/imgs/banner-silder3.jfif", "/assest/imgs/banner-silder4.jfif", "/assest/imgs/banner-silder5.jfif", "/assest/imgs/banner-silder6.jfif", "/assest/imgs/banner-silder7.png", "/assest/imgs/banner-silder8.jfif"];
// var num = 0;

// function next() {
//     num++;
//     if (num >= images.length) {
//         num=0;
//         maining.src=images[num] 
//     } else {
//         maining.src=images[num]
//     }
//     };

//     function back() {
//     num--;
//     if (num < 0) {
//         num=images.length - 1;
//         maining.src=images[num] 
//     } else {
//         maining.src=images[num]
//     }
//     };   


        // CHANGE LANGUAGE

        

        // END CHANGE LANGUAGE

        // EVENT CLICK SLIDER

        const slider = document.querySelector('.container-slider-left');
        const slidersMain = document.querySelector('.slider-left');
        const item = document.querySelectorAll('.slider-left_item');
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');
        const dotItems = document.querySelectorAll('.slider-dost_item ');
        const slidesLength = item.length;
        const sliderItemWidth = item[0].offsetWidth;
        let postionX = 0;
        let index = 0;


        next.addEventListener("click", function () {
            handleChangeSlide(1);
        });

        prev.addEventListener("click", function () {
            handleChangeSlide(-1);
        });

        [...dotItems].forEach( item => {
            item.addEventListener("click", function(e) {
                console.log("item : ", item);

                [...dotItems].forEach( (el) => {
                    console.log('el : ',el)
                    el.classList.remove("active")
                });

                console.log("e : ", e)
                console.log("e.target : ",e.target)

                // e.target.classList.add("active");
                item.classList.add("active");
                const sildeIndex1 = parseInt(item.dataset.index);
                console.log('sildeIndex1 : ',sildeIndex1);
                // const sildeIndex = parseInt(e.target.dataset.index);
                index = sildeIndex1;
                postionX = -1 * index * sliderItemWidth;
                slidersMain.style = `transform: translateX(${postionX}px)`;
                console.log(index);
            })
        });

        function handleChangeSlide(direction) {
            if (direction === 1) {
                if (index >= slidesLength -1){
                    index = slidesLength - 1;
                    return;
                }
                postionX = postionX - sliderItemWidth;
                slidersMain.style = `transform: translateX(${postionX}px)`;
                console.log(postionX)
                index++;
            } else if (direction === -1) {
                if (index <= 0) {
                    index = 0;
                    return;   
                }
                postionX = postionX + sliderItemWidth;
                slidersMain.style = `transform: translateX(${postionX}px)`;
                index--;
            }
                [...dotItems].forEach((el) => el.classList.remove("active"));
                dotItems[index].classList.add("active")
        };


        // const flashsale = document.querySelector('.container-slider-left');
        // const flashsaleMain = document.querySelector('.slider-left');
        // const flashsaleItem = document.querySelectorAll('.slider-left_item');

        // END EVENT CLICK SLIDER


        // EVENT COUTDOWN

        let fuT = new Date("Mar 04, 2024 15:30:00").getTime();
        setInterval(function() {
            let noW = new Date().getTime();
            let D = fuT - noW;
            let days = Math.floor(D/(1000*60*60*24));
            let hours = Math.floor(D/(1000*60*60));
            let minutes = Math.floor(D/(1000*60));
            let seconds = Math.floor(D/(1000));
            hours%=24;
            minutes%=60;
            seconds%=60;

            // if (days <= 9) {
            //     days = "0" + days;
            // }

            if (hours <= 9) {
                hours = "0" + hours;
            }

            if (minutes <= 9) {
                minutes = "0" + minutes;
            }

            if (seconds <= 9) {
                seconds = "0" + seconds;
            }

            // document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        }, 1000);

        // END EVENT COUTDOWN

        // LOGIN MODAL

        const loginModal = document.querySelector('.js-login');
        const registerModal = document.querySelector('.js-register');
        const bodyModal = document.querySelector('.js-body-modal');
        const modalContainer = document.querySelector('.js-modalContainer');

        // loginModal.addEventListener("click", () => {
        //     bodyModal.classList.add("open");
        // });
 
            loginModal.addEventListener("click", () => {
                    bodyModal.classList.add("open");
                    container.classList.remove("right-panel-active");
            });

            registerModal.addEventListener("click", () => {
                container.classList.add("animation-none");
                container.classList.add("right-panel-active");
                bodyModal.classList.add("open");
            });

            bodyModal.addEventListener("click", () => {
                bodyModal.classList.remove("open");
            });

            modalContainer.addEventListener("click", (event) => {
                event.stopPropagation()
            });

        const registerButton = document.getElementById("register");
        const loginButton = document.getElementById("login");
        const container = document.getElementById("container");

        registerButton.addEventListener("click", () => {
            container.classList.add("right-panel-active");
        });

        loginButton.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });

        // END LOGIN MODAL

        // CLICK CLOSE LOGIN MODAL

        const closeLoginModal = document.querySelectorAll(".form-container_iconX");
        closeLoginModal.forEach((e) => {

            e.addEventListener("click", () => {
                bodyModal.classList.remove("open");
        })
        });

        // END CLICK CLOSE LOGIN MODAL

        // ADVERTISEMENT MODAL

        const advertisementIcon = document.querySelector('.js-advertisement-icon');
        const modalAdvertisement = document.querySelector('.js-modal-advertisement');
        
        advertisementIcon.addEventListener("click", () => {
            modalAdvertisement.classList.add("close");
        });

        modalAdvertisement.addEventListener("click", () => {
            modalAdvertisement.classList.add("close");
        });

        const advertisementImg = document.querySelector('.js-advertisement-img');

        advertisementImg.addEventListener("click", (event) => {
            event.stopPropagation()
        });

        // END ADVERTISEMENT MODAL

        // JSON

        fetch(href="./assest/Json/js.json")

        .then(function(response){
            return response.json();
        })

        .then(function(products){
            let placeholder = document.querySelector('.showproduct-center');
            let out = "";
            for(let product of products){
                out += `
                    <div class="showproduct-center_item">
                        <a href="./assest/pageDetailsProduct/text-Commit-DetailsProduct/main/textCmIndexDetails.html">
                            <div class="showproduct-center_item--img">
                                <img src='${product.image}'>
                                
                            </div>

                            <span class="showproduct-center_item--span">${product.name}</span>

                            <div class="showproduct-center_item--price">
                                    <div class="showproduct-center_item--price-left">${product.price}</div>
    
                                    <div class="showproduct-center_item--price-right">${product.sold}</div>
                            </div>

                            <div class="find-products">
                                    ${product.find}
                            </div>
                        </a>
                    </div>
                `;
            }

            placeholder.innerHTML = out;
        });

        // END JSON

        // LOAD MORE BUTTOM

        let loadMoreBtn = document.querySelector('.showproduct-bottom_see');
        let currentItem = 18;

        loadMoreBtn.onclick = () =>{
        // let boxes = [...document.querySelectorAll('.container .box-container .box')];
        let boxes = document.querySelectorAll('.showproduct-center_item');

        console.log("boxes : ",boxes);
        for (var i = currentItem; i < currentItem + 6; i++){
            // i = 3; i < 3 + 3; i++ = 4;

            boxes[i].style.display = 'inline-block';
            // them display = inline-block vao boxes[4]
            // luc nay i = 4 < 6 (currentItem + 3); i++ = 5
            // them display = inline-block vao boxes[5]
            // luc nay i = 5 < 6 (currentItem + 3); i++ = 6
            // them display = inline-block vao boxes[6]
            
            // luc nay dieu kien i = 6 < (6) currentItem + 3 khong thoa dieu kien. thoat vong lap.
        }
        currentItem += 6;
        // luc nay currentItem = 3 + 3 ==> currentItem = 6 
        
        console.log('currentItem : ',currentItem)

        if(currentItem >= boxes.length){
            // luc nay neu currentItem >= boxes.length (boxes.length = 9) thi them display = 'none' vao bien loadMoreBtn;
            // luc nay` currentItem = 6 > 9 chua thoa dieu kien nen chay tiep' vong` lap.
            loadMoreBtn.style.display = 'none';
        }

        /* 
            lan nay chay tiep vong lap currentItem = 6;
            for (var i = currentItem; i < currentItem + 3; i++){
                i = 6; i < 6 + 3; i++ = 7;
                boxes[i].style.display = 'inline-block';

                them display = inline-block vao boxes[7]
                luc nay i = 7 < 9 (currentItem + 3); i++ = 8
                them display = inline-block vao boxes[8]
                luc nay i = 8 < 9 (currentItem + 3); i++ = 9
                them display = inline-block vao boxes[9]
                luc nay dieu kien i = 9 < (9) currentItem + 3 khong thoa dieu kien. thoat vong lap.

            currentItem += 3;
                luc nay currentItem = 9 + 3 ==> currentItem = 12

            if(currentItem >= boxes.length){
                luc nay currentItem = 12 thoa dieu kien currentItem >= boxes.length (12 >= 9)
                thi them display = 'none' vao bien loadMoreBtn
                loadMoreBtn.style.display = 'none';
            }   

        */


        }


        // END LOAD MORE BUTTOM
