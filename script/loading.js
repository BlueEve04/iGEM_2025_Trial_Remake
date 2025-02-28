

$(window).on('load', function() {
    var animation = lottie.loadAnimation({
        container: document.getElementById('loading-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './img/loading.json' // Lottie 动画文件的路径
    });

    setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
            $(this).remove();
        });
    }, 1500);
});
