/* Navbar animation on scoll */
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $aboutMe = $(".about-me");


        var aboutMeTop = $aboutMe.offset().top;
        var aboutMeBottom = aboutMeTop + $aboutMe.outerHeight();
        var scrollTop = $(this).scrollTop();
        var navHeight = $nav.height();

        if (scrollTop + navHeight >= aboutMeTop && scrollTop < aboutMeBottom) {
            $nav.addClass('scrolled'); // Add the class when in the "About Me" section
        } else {
            $nav.removeClass('scrolled'); // Remove the class outside the "About Me" section
        }
    });
});



/* Only play skills bar animation when in view */
/* $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).height();
    $('.skills-bar').each(function () {
        var skillsTop = $(this).offset().top;

        if (windowBottom > skillsTop && !$(this).hasClass('animate')) {
            $(this).addClass('animate');
        }
    })
}) */
 



$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (300) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});