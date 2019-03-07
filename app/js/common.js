$(function() {

    $('.sm').smartmenus({});

    $('select').styler();

    /**
     * mobile-mnu customization
     */
    var mmenu = $('#mobile-mnu');
    var menuLogo = mmenu.data("logo");
    var $mmenu = mmenu.mmenu({
        navbars: [{
            content: [ "<img src=" + menuLogo + " class=\"img-responsive mm-logo\" alt=\"alt\"/>" ],
            height: 3
        }],
        "pageScroll": true,

        "navbar": {
            "title" : "",
        },
        "extensions": [
            "theme-dark",
            "pagedim-black",
            "position-front",
            "fx-listitems-slide",
        ],
    }, {
        offCanvas: {
            pageSelector: "#page-container"
        },
    });

    var mmenuBtn = $("#mmenu-btn");
    var API = $mmenu.data("mmenu");

    mmenuBtn.click(function() {
        API.open();
        $(this).addClass('is-active')
    });


    API.bind( "close:start", function() {
        setTimeout(function() {
            mmenuBtn.removeClass( "is-active" );
        }, 300);
    });
    /**
     * end mobile-mnu customization
     */

    $( ".tabs-wrap" ).tabs();


    $('.clients-slider').owlCarousel({
        loop:true,
        margin: 15,
        items: 4,
        nav: true,
        navText: ['',''],
        responsive : {
            0 : {
                items: 1,
            },
            480 : {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });

    function heightses() {
        if ($(window).width()>=768) {
            $('.subtab-item-title').height('auto').equalHeights();
            $('.subtab-item-desc').height('auto').equalHeights();
            $('.subtab-item-img').height('auto').equalHeights();
        }

        if ($(window).width()>=481) {
            $('.project-item-title').height('auto').equalHeights();
        }

        $('.client-slide').height('auto').equalHeights();


    }

    $(window).resize(function() {
        heightses();
    });

    heightses();




    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
