$(document).ready(function() {
    function updateFixedSlide(position, width) {
        $("#nav .slide_fixed").css({
            opacity: 1,
            width: width,
            left: position.left
        });
    }

    $("#nav a").on("click", function(){
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        updateFixedSlide(position, width);
        console.log("Fixed slide updated:", { opacity: 1, width: width, left: position.left });
    });

    $("#nav a").on("mouseover", function(){
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $("#nav .slide_moving").css({
            opacity: 1,
            width: width,
            left: position.left
        }).addClass("squeeze");
    });

    $("#nav").on("mouseout", function(){
        $("#nav .slide_moving").css("opacity", 0).removeClass("squeeze");
    });

    // 设置导航栏默认位置
    var currentPath = window.location.pathname;
    var defaultPosition, defaultWidth;

    if (currentPath.includes("about")) {
        defaultPosition = $("#nav li:nth-of-type(4) a").parent().position();
        defaultWidth = $("#nav li:nth-of-type(4) a").parent().width();
    } else if (currentPath.includes("team")) {
        defaultPosition = $("#nav li:nth-of-type(6) a").parent().position();
        defaultWidth = $("#nav li:nth-of-type(6) a").parent().width();
    } else {
        defaultPosition = $("#nav li:nth-of-type(1) a").parent().position();
        defaultWidth = $("#nav li:nth-of-type(1) a").parent().width();
    }

    updateFixedSlide(defaultPosition, defaultWidth);
    console.log("Initial fixed slide position:", { width: defaultWidth, left: defaultPosition.left });
});
