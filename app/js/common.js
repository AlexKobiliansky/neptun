$(function() {

    $('.preloader').fadeOut();

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

    $('.caseclient-slider').owlCarousel({
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



    $('.section-gallery-wrap').photoswipe();
    $('.sert-gallery').photoswipe();


    function heightses() {
        if ($(window).width()>=992) {
            $('.video-item-desc').height('auto').equalHeights();
        }

        if ($(window).width()>=768) {
            $('.subtab-item-title').height('auto').equalHeights();
            $('.subtab-item-desc').height('auto').equalHeights();
            $('.subtab-item-img').height('auto').equalHeights();
            $('.apply-item-title').height('auto').equalHeights();
            $('.apply-item-desc').height('auto').equalHeights();
            $('.news-item-title').height('auto').equalHeights();
        }

        if ($(window).width()>=480) {
            $('.project-item-title').height('auto').equalHeights();
            $('.caseclient-item-img').height('auto').equalHeights();
            $('.caseclient-item-title').height('auto').equalHeights();
            $('.sert-item-wrap').height('auto').equalHeights();
            $('.product-item-img').height('auto').equalHeights();
            $('.product-item-title').height('auto').equalHeights();
            $('.product-item-desc').height('auto').equalHeights();
        }

        $('.client-slide').height('auto').equalHeights();
    }

    heightses();

    $(window).on('load', function (){
        $(window).resize(function() {
            heightses();
        });

        heightses();
    });




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


    /**
     * YOUTUBE SCRIPT
     */
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var videoPlayers = [];
    var i = 0;

    onYouTubeIframeAPIReady = function () {
        $('.video-player .you-player').each(function(){
            var $playerID = $(this).attr("id");
            var $videoID = $(this).parents('.video-player').data("video");
            var $start = $(this).siblings('.start-video');

            $start.attr("data-playern", i);

            $start.on('click', function(){
                var playerN = $(this).attr("data-playern");
                $(this).hide();
                $(this).siblings('.you-player').show();
                $(this).siblings('.thumbnail-container').hide();


                videoPlayers[i] = new YT.Player($playerID, {
                    videoId: $videoID,
                    playerVars: {
                        'autoplay': 0,
                        'rel': 0,
                        'showinfo': 0
                    },
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });

                if(videoPlayers[i])
                {
                    var fn = function(){ videoPlayers[i].playVideo(); };
                    setTimeout(fn, 1500);
                }

            });
            i++;
        });
    };

    var p = document.getElementsByClassName("you-player");
    $(p).hide();

    onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            $('.you-player').hide();
            $('.start-video').fadeIn('normal');
            $('.thumbnail-container').fadeIn('normal');
        }
    };
    /**
     * end YOUTUBE SCRIPT
     */

});
