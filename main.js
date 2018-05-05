(function($){
    var _functions = {};
    var swipers = [], winW, winH, winScr, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i), _isFF = 'MozAppearance' in document.documentElement.style;
    _functions.pageCalculations = function(){
        winW = $(window).width();
        winH = $(window).height();
    };
    var initIterator = 0;
    
    _functions.initSwiper = function(){
        $('.swiper-container').not('.initialized').each(function(){                               
            var $t = $(this);                                 

            var index = 'swiper-unique-id-'+initIterator;

            $t.addClass('swiper-'+index+' initialized').attr('id', index);
            $t.find('>.swiper-pagination').addClass('swiper-pagination-'+index);
            $t.parent().find('>.swiper-button-prev').addClass('swiper-button-prev-'+index);
            $t.parent().find('>.swiper-button-next').addClass('swiper-button-next-'+index);

            var slidesPerViewVar = ($t.data('slides-per-view'))?$t.data('slides-per-view'):1;
            if(slidesPerViewVar!='auto') slidesPerViewVar = parseInt(slidesPerViewVar, 10);

            swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
                pagination: '.swiper-pagination-'+index,
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: slidesPerViewVar,
                autoHeight:($t.is('[data-auto-height]'))?parseInt($t.data('auto-height'), 10):0,
                loop: ($t.is('[data-loop]'))?parseInt($t.data('loop'), 10):0,
                autoplay: ($t.is('[data-autoplay]'))?parseInt($t.data('autoplay'), 10):0,
                breakpoints: ($t.is('[data-breakpoints]'))? { 767: { slidesPerView: parseInt($t.attr('data-xs-slides'), 10) }, 991: { slidesPerView: parseInt($t.attr('data-sm-slides'), 10) }, 1199: { slidesPerView: parseInt($t.attr('data-md-slides'), 10) }, 1500: {slidesPerView: parseInt($t.attr('data-lg-slides'), 10)} } : {},
                initialSlide: ($t.is('[data-ini]'))?parseInt($t.data('ini'), 10):0,
                speed: ($t.is('[data-speed]'))?parseInt($t.data('speed'), 10):500,
                keyboardControl: true,
                mousewheelControl: ($t.is('[data-mousewheel]'))?parseInt($t.data('mousewheel'), 10):0,
                mousewheelReleaseOnEdges: true,
                direction: ($t.is('[data-direction]'))?$t.data('direction'):'horizontal',
                spaceBetween: ($t.is('[data-space]'))?parseInt($t.data('space'), 10):0,
                centeredSlides: ($t.is('[data-centered]'))?parseInt($t.data('centered'), 10):0,
            });
            swipers['swiper-'+index].update();
            initIterator++;
        });
        $('.swiper-container.swiper-control-top').each(function(){
            swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).closest('.swipers-couple-wrapper').find('.swiper-control-bottom').attr('id')];
        });
        $('.swiper-container.swiper-control-bottom').each(function(){
            swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).closest('.swipers-couple-wrapper').find('.swiper-control-top').attr('id')];
        });
    };

    $( document ).ready(function() {  
        _functions.initSwiper();
              
        var how_blue_block = 0; 
        $('.how-blue-block').each(function(){
            if ($(this).height() > how_blue_block) { 
                how_blue_block = $(this).height();
            }
        });
        $('.how-blue-block').height(how_blue_block);    
    });
    
    $( window ).resize(function() {
        // Height columns
        var how_blue_block = 0; 
        $('.how-blue-block').css({height: "auto"});
        $('.how-blue-block').each(function(){
            if ($(this).height() > how_blue_block) { 
                how_blue_block = $(this).height();
            }
        });
        $('.how-blue-block').height(how_blue_block);
    });

    //Accordion
    $('.how-it-accordion-part h4').on('click', function(){
        var img_data, img_id;
        if( $(this).parent().hasClass("active") ) {
            $(this).parent().removeClass("active");
            $(this).parent().find(".how-it-accordion-part-cont").slideUp();
        } else {
            $('.how-it-accordion-part').each(function(){
                if ( $(".how-it-accordion-part").hasClass("active") ) {
                    $(this).removeClass("active");
                    $(this).find(".how-it-accordion-part-cont").slideUp();
                }
            });
            img_data = $(this).data("lfimg");
            
            $('.how-it-acc-img-wr').each(function(){
                $(this).removeClass("active");
                img_id = $(this).attr("id");
                if ( img_data == img_id ) {
                    $(this).addClass("active");
                    // $(this).slideUp();
                }
            });
            $(this).parent().addClass("active");
            $(this).parent().find(".how-it-accordion-part-cont").slideDown();
        }
    });
})(jQuery);