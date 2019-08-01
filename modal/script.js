$(document).ready(function() {
    $(".button").click(
        function(){
            $(".popup-overlay").toggle();
            $(".popup").toggle();
        });
    $(".popup-overlay, .cross").click(
        function(){
            $(".popup-overlay").toggle();
            $(".popup").toggle();
        });
});
