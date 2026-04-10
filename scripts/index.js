const bestItem = document.querySelector('.best_slide');
const giftItem = document.querySelector('.gift_slide');
const disneyItem = document.querySelector('.disney_product');
const vanItem = document.querySelector('.van_product');
console.log(bestItem,giftItem,disneyItem,vanItem);

const bestSwiper = new Swiper(bestItem,{
    slidesPerView:2,
    spaceBetween:35,
    loop:true,
})
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
    loop:true,
})
const vanSwiper = new Swiper(vanItem,{
    slidesPerView:4,
    loop:true,
})
