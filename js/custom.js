$(function () {

    //ANIMATION SCROLL JS

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1500);
                return false;
            }
        }
    });


    //STICKY MENU

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 150){
            $('.main-menu').addClass('bg');
        }
        else{
            $('.main-menu').removeClass('bg');
        }
        if(scrolling > 300){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
    });


    //BACK TO TOP

    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},1500)
    });


    //mix it up

    var containerEl = document.querySelector('.project-main');

    var mixer = mixitup(containerEl);

    //venobox

    $('.venobox').venobox();

    //counter part

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    //gallery autoplay

    $('.gal-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });
});