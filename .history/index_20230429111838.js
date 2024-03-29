$(document).ready(function () {

    console.log('Test');

    console.log('Test2');

    const options = {
        color: 'rgb(180, 180, 180)',
        zIndex: 100, focusableElements: 'button',
        dotColor: '#1f6feb',
        mode: 'bouncy',
        opacity: 0.75,
        radius: 12,
        focusableElementsOffsetX: 5,
        focusableElementsOffsetY: 5,
        magnetic: true
    };

    new Blobity(options);
    if ($('#slider').length == 0) {
        jQuery('.camera_wrap').camera({
            time: 3000,
            // height: '400px',
            // loader: 'bar',
            // pagination: true,
            // thumbnails: true, 
            // imagePath: 'assets/',
            overlayer: true,
            fx: 'random',
        }); //the basic method
        $('.slide-container')
            .on('animationend', function () {
                $('body').css('overflow', 'scroll');
            })
            .visible(true);
    }



    console.log('#slider', $('#slider'));

    $("#slider").on("input change", (e) => {
        const sliderPos = e.target.value;
        console.log(sliderPos);
        $('#comparable2').css('clip-path', 'inset(0px ' + (100 - sliderPos) + '% 0px 0px)')
        $('#slider-handle').css('left', `calc(${sliderPos}% - 1.25rem)`)
        $('#slider-line').css('left', `calc(${sliderPos}% - 1px)`)
    });

    for (var i = 1; i <= 9; i++) {
        $('#step1').click(function () {
            $('#rose-image').attr('src', 'image1.jpg');
        });
    }

    $('#step2').click(function () {
        $('#rose-image').attr('src', 'image2.jpg');
    });

    $('#step3').click(function () {
        $('#rose-image').attr('src', 'image3.jpg');
    });
});

function scrollToClass(targetSelector) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(targetSelector).eq(0).offset().top
    }, 500);
    // document.location.hash = "#" + $(targetSelector).eq(0).attr('name');
}

// Function for mouse cursor

// $(document).on('mousemove', function(e){
//     $('.cursor').css({
//        left:  e.pageX,
//        top:   e.pageY
//     });
// });