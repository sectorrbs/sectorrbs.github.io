$(function () {
    $('.introduce').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4500,
    })

    $('.review__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 687,
            settings: {
                dots: false,
                
            }
        }]
    })

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 100,
        to: 700,
    });

    $('.single-page-slider__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<button class="single-page-slider__arrow-left"><img src="images/arrow_left.png"></button>',
        nextArrow: '<button class="single-page-slider__arrow-right"><img src="images/arrow_right.png"></button>',
        infinite: false,
        responsive: [{
            breakpoint: 780,
            settings: {
                arrows: false,
                fade: false,
            }
        }]
    })

    $('.wordcard__btn-like').on('click', function () {
        $(this).toggleClass('wordcard__btn-like--active')
    })

    $('.wordcard__btn-reset').on('click', function () {
        $(this).toggleClass('wordcard__btn-reset--active')
    })

    $('.btn-reset-hide').on('click', function () {
        $(this).toggleClass('btn-reset-hide--active')
    })

    $('.btn-like-hide').on('click', function () {
        $(this).toggleClass('btn-like-hide--active')
    })

    $('.menu__btn').on('click', function () {
        $('.nav').toggleClass('nav--active')
    })

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active')
    })


    $('.nav__btn').on('click', function () {
        $('.nav__btn').toggleClass('nav__btn--active')
        $('.product__menu').toggleClass('product__menu--active')
    })

    $('.filter__btn').on('click', function () {
        $('.filter__btn').toggleClass('filter__btn--active')
        $('.product__filter').toggleClass('product__filter--active')
    })

});