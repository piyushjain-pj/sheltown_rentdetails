function hiddenDivitem() {
    var x = document.getElementById("HiddenDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
/// some script
$(function () {
    'use strict'
    $("[data-trigger]").on("click", function () {
        var trigger_id = $(this).attr('data-trigger');
        $(trigger_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
    });

    // close if press ESC button 
    $(document).on('keydown', function (event) {
        if (event.keyCode === 27) {
            $(".navbar-collapse").removeClass("show");
            $("body").removeClass("overlay-active");
        }
    });

    // close button 
    $(".btn-close").click(function (e) {
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });
})