screencenter();
function screencenter(){
    $("#app").css("height",$(window).height()+"px");
}
$(function () {
    $(window).resize(function () {
        screencenter();
    });
});
