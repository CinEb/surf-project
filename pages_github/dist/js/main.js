$(document).ready(function(){

    //Navbar
    $('.header__nav-btn, .header__nav-close').on('click', function(){
        $('.header__nav').slideToggle(600, "linear");
    });

    //Smooth Animation
    $('a[href*=\\#]:not([href=\\#])').on('click', function(){
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1)+']');
        if (target.length){
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    //Slick Slider
    $('.portfolio__slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        asNavFor: '.portfolio__slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev"></button>',
                    nextArrow: '<button type="button" class="slick-next"></button>',
                }
            }
        ]
    });
    $('.portfolio__slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.portfolio__slider-content',
        vertical: true,
        verticalSwiping: true,
        // dots: true,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });

});
