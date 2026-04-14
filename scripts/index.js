//=================================slide
const bestItem = document.querySelector('.best_slide');
const giftItem = document.querySelector('.gift_slide');
const disneyItem = document.querySelector('.disney_product');
const vanItem = document.querySelector('.van_product');
console.log(bestItem,giftItem,disneyItem,vanItem);

const bestSwiper = new Swiper(bestItem,{
    slidesPerView: 2,
    spaceBetween: 35,
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
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

