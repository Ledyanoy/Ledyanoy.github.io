var lamboList = document.querySelector('.main-lambo-list');

var lamboListItems = document.querySelectorAll('.main-lambo-list__item');



var onHover = function (evt) {
    if (!evt.target.closest('.main-lambo-list__item')) return;
    lamboListItems.forEach((item) => {
        item.classList.remove('unhovered');
        if (item !== evt.target.closest('.main-lambo-list__item')) {
            item.classList.add('unhovered')
        }
    });
};

var outHover = function (evt) {
    if (!evt.target.closest('.main-lambo-list__item')) return;
    lamboListItems.forEach((item) => {
        item.classList.remove('unhovered');
    });
};



lamboList.addEventListener('mouseover touchstart', onHover);
lamboList.removeEventListener('mouseover touchstart', outHover);

lamboList.removeEventListener('mouseout touchstart', onHover);
lamboList.addEventListener('mouseout touchstart', outHover);

// swiper starts
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    autoHeight: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,    
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    autoHeight: true,    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});
// swiper ends

// anchor links working start
var anchors = document.querySelectorAll(".item-question");
  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (evt) {
      evt.preventDefault();      
      var blockID = anchor.getAttribute("href").substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
// anchor links working end