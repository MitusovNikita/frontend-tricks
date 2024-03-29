//переменные
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;

//функция - шаг вперед
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
         $('#slidewrapper').css('transform', 'translate(0, 0)');
         slideNow = 1;
     } else {
         translateWidth = -$('#viewport').width() * (slideNow);
         $('#slidewrapper').css({
             'transform': 'translate(' + translateWidth + 'px, 0)',
             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
         });
         slideNow++;
     }
}

//функция - шаг назад
function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

//запуск функций при клике
$('#next-btn').click(function() {
    nextSlide();
});
$('#prev-btn').click(function() {
    prevSlide();
});

//действия при клике кнопок навигации
var navBtnId = 0;

$('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
        translateWidth = -$('#viewport').width() * (navBtnId);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = navBtnId + 1;
    }
});

//автоматическая прокрутка
// var slideInterval = 1000;
//
// $(document).ready(function () {
//     var switchInterval = setInterval(nextSlide, slideInterval);
//
//     $('#viewport').hover(function(){
//         clearInterval(switchInterval);
//     },function() {
//         switchInterval = setInterval(nextSlide, slideInterval);
//     });
// });
