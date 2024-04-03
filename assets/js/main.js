(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {




        //------------ Offcanvas menu -------------

        $('.menu_open').on('click', function () {
            $('body').addClass('active');
        })
        $('.menu_close, .overaly-main').on('click', function () {
            $('body').removeClass('active');
        })



        //------------ Hero slider -------------

        $('.slider__active').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

        //------------ seus slider -------------

        $('.seus__active').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

        //------------ offer slider -------------

        $('.offer__active').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 1
                }
            }
        })
        $('.offer__slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 1
                }
            }
        })



        //---owl dots number-----

        var i = 1;

        $('.hero-slier-main.owl-carousel .owl-dot').each(function () {
            $(this).text(i);
            i++;
        });





    }); //---document-ready-----





}(jQuery));