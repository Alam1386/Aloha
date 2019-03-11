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



    var itensInChat = 0;
    $(document).on("click", ".addToCard", function (event) {
        event.preventDefault();
    
        $(".shoppingCardItens")
            .text(++itensInChat)
            .show().css("display", "flex");

    });

    $('#contact-form').on('submit', () => {
            var email = $("#contact-email").val();
            console.log(email);
            if (validateEmail(email)) {
                alert("Thanks for subscribing!");
            } else {
                alert("Invalid Email");
            }   
        });

    function validateEmail(email) {
        var expr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return expr.test(email);
    }


  
})(jQuery)
