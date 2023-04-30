$(document).ready(function () {

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
    if ($('#slider').length == 0 && $('.camera_pie').length > 0) {
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

    function scrollToClass(targetSelector) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(targetSelector).eq(0).offset().top
        }, 500);
        // document.location.hash = "#" + $(targetSelector).eq(0).attr('name');
    }

    console.log('Steps function');

    function addSteps(stepsNumber, imageId, stepsFolder) {
        console.log("Adding steps for ", imageId);
        for (var i = 1; i <= stepsNumber; i++) {
            (function (x) {
                var $step = $('<span class="inline-block px-3 py-2 mr-2 text-base rounded-xl font-semibold bg-gray-500">Step ' + x + '</span>');
                $step.click(function () {
                    $('#' + imageId).attr('src', stepsFolder + 'step' + x + '.jpg');
                });
                $('#' + imageId).parent().append($step);
                console.log("ADded step " + x);
            })(i);
        }
    }

    console.log('About add steps');
    addSteps(10, 'rose-image', 'assets/Creative Editing/Rose Steps/');
    addSteps(5, 'crane-image', 'assets/Creative Editing/Crane Steps/');
    addSteps(5, 'paragliding-image', 'assets/Creative Editing/Paragliding Steps/');
    addSteps(6, 'stairway-image', 'assets/Creative Editing/Stairway Steps/');
    /*
        for (var i = 1; i <= 5; i++) {
            (function (x) {
                $('#crane-step' + x).click(function () {
                    $('#crane-image').attr('src', 'assets/Creative Editing/Crane Steps/step' + x + '.jpg');
                })
            })(i);
        }
    
        for (var i = 1; i <= 5; i++) {
            (function (x) {
                $('#paragliding-step' + x).click(function () {
                    $('#paragliding-image').attr('src', 'assets/Creative Editing/Paragliding Steps/step' + x + '.jpg');
                })
            })(i);
        }
    
        for (var i = 1; i <= 6; i++) {
            (function (x) {
                $('#stairway-step' + x).click(function () {
                    $('#stairway-image').attr('src', 'assets/Creative Editing/Stairway Steps/step' + x + '.jpg');
                })
            })(i);
        }
        */
    // Function for mouse cursor

    // $(document).on('mousemove', function(e){
    //     $('.cursor').css({
    //        left:  e.pageX,
    //        top:   e.pageY
    //     });
    // });
})