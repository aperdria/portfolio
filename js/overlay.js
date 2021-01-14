function navigateTo(path) {
    closingOverlay()

    setTimeout(() => {
        var regex = /index.html.*/
        var next = window.location.href;
        next = next.replace(regex, path);
        console.log(next);
        window.location.href = next;
    }, 1000);
}

function closingOverlay() {
    var overlay = document.querySelector('.overlay');

    var openOverlay = anime.timeline({
        targets: overlay,
        easing: 'easeInOutExpo',
        duration: 1000,
        autoplay: true,
        loop: false
    });

    openOverlay
        .add({
            width: '100%',
            zIndex: {
              value: [0, 1000],
              round: true
            },
        })
        .add({
            opacity: 0,
            easing: 'easeOutSine',
            delay: 200
        });
}

function openingOverlay() {
    var overlay = document.querySelector('.overlay');

    var openOverlay = anime.timeline({
        targets: overlay,
        easing: 'easeInOutExpo',
        duration: 1000,
        autoplay: true,
        loop: false
    });

    openOverlay
        .add({
            width: '0',
            zIndex: {
              value: [1000, 0],
              round: true
            },
            delay: 1000
        })
        .add({
            opacity: 0,
            easing: 'easeOutSine',
            delay: 200
        });
}