function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#csspanel").val() + "</style></head><body>" + $("#htmlpanel").val() + "</body></html>");
    document.getElementById("outputpanel").contentWindow.eval($("#jspanel").val());
}

$(".togglebutton").hover(function() {
    $(this).addClass("highlightedbutton");
},
function(){
    $(this).removeClass("highlightedbutton");
});

$(".togglebutton").click( function() {
    $(this).toggleClass("active");
    $(this).removeClass("highlightedbutton");
    var panelid = $(this).attr("id") + "panel";
    $("#"+panelid).toggleClass("hidden");
    var activepanels = 4 - $('.hidden').length;
    $(".panel").width(($(window).width()/activepanels)-10); 

});
$(".panel").width(($(window).width()/2)-10); 
$(".panel").height($(window).height()-$("#header").height()-26); 

$("iframe").contents().find("html").html($("#htmlpanel").val());

updateOutput();
$("textarea").on("change keyup paste", function(){
    updateOutput();
});