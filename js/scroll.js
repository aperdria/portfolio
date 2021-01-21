var initialScrollTop = document.documentElement.scrollTop;
var list = document.getElementsByClassName("menu-item");
var coordinates = [];

for (let item of list) {
    var key = item.getAttribute("href");
    let elem = document.querySelector(key);
    let rect = elem.getBoundingClientRect();
    coordinates[key] = rect;
}

/* Listen to scroll event */
document.addEventListener('scroll', function () {
    var currentPosition = document.documentElement.scrollTop;

    for (var i = 0; i < list.length; i++) {
        var key = list[i].getAttribute("href");
        var keyNext = key;

        if (i < list.length - 1) {
            keyNext = list[i + 1].getAttribute("href");
        }

        var elementPositionY = coordinates[key].top + initialScrollTop;
        var nextElementPositionY = coordinates[keyNext].top + initialScrollTop;

        if (currentPosition + 1 >= elementPositionY &&
            (currentPosition < nextElementPositionY || key === keyNext)) {
            list[i].className = "menu-item active";
        } else {
            list[i].className = "menu-item";
        }
    }
}, true);

/* Vertical progress scroll line indicator */
$(window).scroll(function () {
    var winy = $(window).scrollTop(),
        docheight =
        $(document).height(),
        winheight = $(window).height();
    var scrolled = (winy / (docheight - winheight)) * 100;
    $('.scroll-line-vertical').css('height', (scrolled + '%'));
});
