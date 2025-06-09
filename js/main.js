window.addEventListener('DOMContentLoaded', function () {


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


    });


    /*  slide,click event section */


    $('#section01 .top_categories .top_categories_btn').click(function () {
        $('#section01 .top_categories .dropdown').addClass('on');
    });


    $('#section02').click(function () {
        $('#section01 .top_categories .dropdown').removeClass('on');
    });


    $('#section01 .top_categories .dropdown').mouseleave(function () {
        $('#section01 .top_categories .dropdown').removeClass('on');
    });


    $('#section01 .top_last .top_categories .dropdown .dropdown_left .mega_hover01').click(function () {
        $('#section01 .top_categories .dropdown').addClass('active');
        $('#section01 .top_last .top_categories .dropdown .dropdown_left .mega_hover01').addClass('on');
    })



    $('#section02 .main_banner').slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $('#section02 .banner_botton .left_botton'), //prev
        nextArrow: $('#section02 .banner_botton .right_botton'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 3000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 3, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: false, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,
    })


    $('#section01 .top_last .hot_container .keyword_container').slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $(''), //prev
        nextArrow: $(''), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 3000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: false, // click to slider
        draggable: true,
        vertical: true, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,
    })



})


