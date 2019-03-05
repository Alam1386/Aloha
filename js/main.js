/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

// The slide show. 
(function($){
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 1500,
    freeScroll: true,
    wrapAround: true
    });



    let itensInChat = 0;
    $(document).on("click", ".addToCard", function (event) {
        event.preventDefault();
    
        $(".shoppingCardItens")
            .text(++itensInChat)
            .show().css("display", "flex");

    });


  
})(jQuery)

