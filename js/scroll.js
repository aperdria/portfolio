var list = document.getElementsByClassName("menu-item");
var coordinates = [];
for (let item of list) {
    var key = item.getAttribute("href");
    let elem = document.querySelector(key);
    let rect = elem.getBoundingClientRect();
    coordinates[key] = rect;
}

/* Scroll to relevant section */
var anchor = window.location.hash.substr(1);
document.addEventListener('scroll', function (event) {
    var list = document.getElementsByClassName("menu-item");
    for (var i = 0; i < list.length; i++) {
        // If element is the one selected
        var key = list[i].getAttribute("href");
        var keyNext = key;
        if (i < list.length - 1) {
            keyNext = list[i + 1].getAttribute("href");
        }
        if (document.documentElement.scrollTop > coordinates[key].top &&
            document.documentElement.scrollTop <= coordinates[keyNext].top) {
            list[i].className = "menu-item active";
        } else {
            list[i].className = "menu-item";
        }
    }
}, true);

function scrollTo(hash) {
    location.hash = "#" + hash;
}

/* Vertical progress scroll line indicator */
$(window).scroll(function () {
    var wintop = $(window).scrollTop(),
        docheight =
        $(document).height(),
        winheight = $(window).height();
    var scrolled = (wintop / (docheight - winheight)) * 100;
    $('.scroll-line-vertical').css('height', (scrolled + '%'));
});