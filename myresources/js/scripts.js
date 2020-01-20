$(document).ready(function() {

    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   })

    $(".js-section-projects").waypoint(function(direction) {
        if (direction == "down") {
            $("header nav").addClass("sticky-nav");
        }
        else {
            $("header nav").removeClass("sticky-nav");
        }
    }, {
        offset: '60px'
    })

    // $(".js-section-about").waypoint(function(direction) {
    //     $(".main-nav li a").removeClass("active")
    //     $(".js-scroll-to-about").addClass("active")
    // }, {
    // })

    // $(".js-section-contact").waypoint(function(direction) {
    //     $(".main-nav li a").removeClass("active")
    //     $(".js-scroll-to-contact").addClass("active")
    // }, {
    //     offset: 'bottom-in-view'
    // })

    // var $sections = $("section")
    // $sections.each(function() {
    //     new Waypoint({
    //         element: this,
    //         handler: function(direction) {
    //             var previousWaypoint = this.previous()
    //             var nextWaypoint = this.next()
      
    //         //   $elements.removeClass('np-previous np-current np-next')
    //             $sections.removeClass("np-previous np-current np-next")
    //             $(this.element).addClass('np-current')
    //             $(".main-nav li a").removeClass("active")

    //             if ($(this.element).hasClass("js-section-projects")) {
    //                 $(".main-nav li a.js-scroll-to-projects").addClass("active")
    //                 if (direction == "down") {
    //                     $("header nav").addClass("sticky-nav");
    //                 } else {
    //                     $("header nav").removeClass("sticky-nav");
    //                 }
    //             }
    //             else if ($(this.element).hasClass("js-section-about")) {
    //                 $(".main-nav li a.js-scroll-to-about").addClass("active")
    //             }
    //             else if ($(this.element).hasClass("js-section-contact")) {
    //                 $(".main-nav li a.js-scroll-to-contact").addClass("active")
    //             }

    //             if (previousWaypoint) {
    //                 $(previousWaypoint.element).addClass('np-previous')
    //             }
    //             if (nextWaypoint) {
    //                 $(nextWaypoint.element).addClass('np-next')
    //             }
    //         },
    //             group: "section"
    //       })
    // })

    $(".js-scroll-to-projects").click(function() {
        scrollTo(".js-section-projects", 850);
    });

    $(".js-scroll-to-about").click(function() {
        scrollTo(".js-section-about", 850);
    });

    $(".js-scroll-to-contact").click(function() {
        scrollTo(".js-section-contact", 850);
    });

    $(".js-scroll-to-top").click(function() {
        scrollTo("header", 850);
    });
});

function scrollTo(section, speed) {
    $("html, body").animate({scrollTop: $(section).offset().top}, speed);
}