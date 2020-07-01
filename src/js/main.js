/*--------------------------------------------------------
    Main JavaScript File for basic-web-starter

    version: 1.0
    author: Jobith M Basheer
    email: jobith@three38inc.com
    website: http://three38inc.com
----------------------------------------------------------*/



document.addEventListener('DOMContentLoaded', () => {

    // Functions

    function getAll(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

    // scroll detection and breakpoint for sticky navbar
    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        if((scroll > 100)){
            $(document.body).addClass('sticky');
        }
        else{
            $(document.body).removeClass('sticky');
        }
        // document.body.className = (scroll > 100) ? 'sticky' : '';
    });

    // initialise all slick sliders/carousels
    $('.slick.testimonials').slick({
        slidesToShow: 1, 
        slidesToScroll: 1, 
        dots: true, 
        arrows: true, 
        infinite: true, 
        adaptiveHeight: true, 
        autoplay: true, 
        autoplaySpeed: 6000
    });


    // Dropdowns
    var $dropdowns = getAll('.dropdown');

    if ($dropdowns.length > 0) {
        $dropdowns.forEach(function ($el) {
            $el.addEventListener('click', function (event) {
                event.stopPropagation();
                closeDropdowns();
                $el.classList.toggle('is-active');
            });
        });

        document.addEventListener('click', function (event) {
            closeDropdowns();
        });
    }

    function closeDropdowns() {
        $dropdowns.forEach(function ($el) {
            $el.classList.remove('is-active');
        });
    }
});

