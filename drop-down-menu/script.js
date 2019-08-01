$(document).ready(function() {
    $(".list-submenu").hide();
    $(".list li:has('.list-submenu')").hover(
        function(){
            $(this).children('ul').stop().fadeToggle(300);
        }
    );
});
