document.addEventListener("DOMContentLoaded", function(event) { 
    scroll_to_error();
    scroll_to_lost_password();
    function scroll_to_error() {
        if (document.querySelector('.error')) {
            setTimeout(function(){
                window.scrollTo(0, document.querySelector('.error').getBoundingClientRect().top - 200 );
            }, 500);
        }
    }
    function scroll_to_lost_password() {
        if (document.querySelector('.mod_lostPassword .widget-password')) {
            setTimeout(function(){
                window.scrollTo(0, document.querySelector('.mod_lostPassword .widget-password').getBoundingClientRect().top - 200 );
            }, 500);
        }
    }
});