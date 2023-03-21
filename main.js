$(document).ready(function() {

    /**
     * Ref
     */

    var dropDown = $('.right-navbar-action .dropdown-menu');
    var dropLinks = $(".right-navbar-action ul li a");
    var body = $("body");

    /**
     * Function hide show with mouseover
     */

    dropLinks.mouseover(function () { 
        var actualMenu = $(this).next(".dropdown-menu");
        actualMenu.css("display", "block");
        dropDown.not(actualMenu).hide()

        actualMenu.mouseover( function() {
            $(this).css("display", "block");
            dropDown.not(actualMenu).hide()
        });
    })

    /**
     *  Detecting a click outside dropmenu to close them
     */

    dropDown.click(function(e){
        e.stopPropagation();
    })

    body.click(function(e){
        if(dropLinks !== e.target && !dropLinks.has(e.target).lenght){
            dropDown.hide()
        }
    })
}); // end doc ready


/**
     * Function hide show with click
     */

    // dropLinks.click(function(){
    //     var actualMenu = $(this).next(".dropdown-menu").toggle();
    //     ;  
    // }); 
