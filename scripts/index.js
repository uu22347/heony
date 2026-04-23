/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */


//=================================slide
const mainBnr = document.querySelector('.hero_bnr');
const bestItem = document.querySelector('.best_slide');
const giftItem = document.querySelector('.gift_slide');
const disneyItem = document.querySelector('.disney_product');
const vanItem = document.querySelector('.van_product');
console.log(mainBnr,bestItem,giftItem,disneyItem,vanItem);

const mainSwiper = new Swiper(mainBnr,{
    spaceBetween: 35,
    loop: true,
    autoplay: {
    delay:4000},
    speed: 800,
    navigation:{
        nextEl:'.hero_bnr .next',
        prevEl:'.hero_bnr .prev',
    }
});
const bestSwiper = new Swiper(bestItem,{
    slidesPerView: 2,
    spaceBetween: 35,
    loop: true,
    scrollbar: {
        el: ".scroll_best",
    },
});
const giftSwiper = new Swiper(giftItem,{
    slidesPerView:5,
    spaceBetween:35,
    loop:true,
    centeredSlides:true,
    navigation:{
        nextEl:'.gift_slide .next',
        prevEl:'.gift_slide .prev',
    }
})
const disneySwiper = new Swiper(disneyItem,{
    slidesPerView:4,
    spaceBetween:20,
    loop:true,
    scrollbar: {
        el: ".scroll_disney",
    },
})
const vanSwiper = new Swiper(vanItem,{
    slidesPerView:4,
    spaceBetween:20,
    loop:true,
    scrollbar: {
        el: ".scroll_van",
    },
})

//==============================헤더 
const gnb = document.querySelectorAll('.header_info > li');
const lnb = document.querySelectorAll('.info_depth2');
console.log(gnb,lnb);

for(let i of gnb){
    console.log(i);
    console.log(i.children[1]);
    i.addEventListener('mouseover',function(){
        i.children[1].style.display = 'block';
    })
    i.addEventListener('mouseout',function(){
        i.children[1].style.display = 'none';
    })
}

//==============================인기순 탭

