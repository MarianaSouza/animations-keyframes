$(document).ready(function () {
    //This function allows to aplly a scroll effect to any "a" that has an "id" as a target (internal link)
    $('a[href^="#"].nav-link').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({ 'scrollTop': $target.offset().top }, 1500, 'swing', function () {
            window.location.hash = target;
        });
    });
     
    //This function activates the animations when scrolling
    $(window).trigger('scroll');
    var $elementRight= $('.animate-element-right');
    var $elementLeft= $('.animate-element-left');
    var $elementCubic = $('.animate-element-cubic');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $elementCubic.addClass("animate-properties fadeInUpCubic");
            $elementRight.addClass("animate-properties fadeInRight");
            $elementLeft.addClass("animate-properties fadeInLeft");
        }
        else {
            $elementCubic.removeClass("animate-properties fadeInUpCubic");
            $elementRight.removeClass("animate-properties fadeInRight");
            $elementLeft.removeClass("animate-properties fadeInLeft");
        }
    });
});