(function($){
    var _functions = {};
    var swipers = [], winW, winH, winScr, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i), _isFF = 'MozAppearance' in document.documentElement.style;
    _functions.pageCalculations = function(){
        winW = $(window).width();
        winH = $(window).height();
    };
    var initIterator = 0;

    $( document ).ready(function() {        
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