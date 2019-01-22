/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

// The slide show. 
(function($){
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    //autoPlay: 1500,
    freeScroll: true,
    wrapAround: true
    });


//window.onscroll = function() {myFunction()};
//
//let navbar = document.getElementById("navbar");
//let sticky = navbar.offsetTop;
//
//function myFunction() {
//  if (window.pageYOffset >= sticky) {
//    navbar.classList.add("sticky")
//  } else {
//    navbar.classList.remove("sticky");
//  }
//}
    $(document).on("click", "a[href^='#']", function (event) {
        event.preventDefault();
    
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, "fast");
    });

    $(".subscribeForm").on("submit", "form", function(t) {
        t.preventDefault();

        var eMail = $("#emailInput");

        if(validateEmail(eMail.val())){
            alert("Thanks for subscribing!");
            eMail.val("");
        } else{
            alert("Please submit a valid email address.");
        }
     });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    var itensInChat = 0;
    $(document).on("click", ".addToCard", function (event) {
        event.preventDefault();
    
        $(".shoppingCardItens")
            .text(++itensInChat)
            .show().css("display", "flex");

    });

    // Fix "Skip Link" Focus in Webkit
    $("a[href^='#']").not("a[href='#']").click(function() {
        $("#"+$(this).attr("href").slice(1)+"").focus();
     });
  
})(jQuery)

