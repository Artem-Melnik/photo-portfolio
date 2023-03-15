const scrollContainer = document.querySelector('html,body');
const scrollDuration = 500;

let scrollStart;
let scrollEnd;
let scrollDistance;
let startTime;
let endTime;
let progress;

function easeInOutCubic(t) {
    if ((t /= 0.5) < 1) return 0.5 * t * t * t;
    return 0.5 * ((t -= 2) * t * t + 2);
}

function scrollSmoothTo(targetY) {
    scrollStart = scrollContainer.scrollTop;
    scrollEnd = targetY;
    scrollDistance = scrollEnd - scrollStart;
    startTime = performance.now();

    function scrollStep(timestamp) {
        endTime = timestamp;
        progress = endTime - startTime;
        scrollContainer.scrollTop = scrollStart + scrollDistance * easeInOutCubic(progress / scrollDuration);

        if (progress < scrollDuration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

let isScrolling = false;

window.addEventListener('scroll', function (event) {
    if (isScrolling) {
        window.requestAnimationFrame(function () {
            let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            scrollSmoothTo(scrollPosition);
            isScrolling = false;
        });
    }
    isScrolling = true;
});