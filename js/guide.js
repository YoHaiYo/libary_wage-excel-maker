$(document).ready(function() {
  // 모달메뉴열기
  $(".modal-btn").click(function() { 
    $("body").addClass("dark-box");
    // 여기서 this는 ".modal-btn"
    // $(this).data('target') 자체가 .menu-1, .menu-2가 된다 !
    $($(this).data('target')).addClass("showdiv")
  })
  // 모달메뉴 닫기
  $(".close-btn").click(function() {  
    $("body").removeClass("dark-box");
    $(".modal-box").removeClass("showdiv");
  })
})

// SWIPER
const mainSwiper = new Swiper('#mainSwiper.swiper', {
  spaceBetween: 300,
  // 반복
  loop: false,
  
  direction: 'horizontal',
  pagination: {
    el: '#mainSwiper .swiper-pagination',
    clickable:true,
  },
  // 앞뒤버튼
  navigation: {
    nextEl: '#mainSwiper .swiper-button-next',
    prevEl: '#mainSwiper .swiper-button-prev',
  },
});
