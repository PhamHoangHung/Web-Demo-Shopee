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
        console.log('sliderItemWidth : ', slidesLength)


        next.addEventListener("click", function () {
            handleChangeSlide(1);
        });

        prev.addEventListener("click", function () {
            handleChangeSlide(-1);
        });

        [...dotItems].forEach( item => 
            item.addEventListener("click", function(e) {
                [...dotItems].forEach((el) => el.classList.remove("active"));
                e.target.classList.add("active");
                const sildeIndex = parseInt(e.target.dataset.index);
                index = sildeIndex;
                postionX = -1 * index * sliderItemWidth;
                slidersMain.style = `transform: translateX(${postionX}px)`;
                console.log(index);
        }));

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

        