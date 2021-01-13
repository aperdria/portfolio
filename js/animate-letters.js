// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml11 .letters');


textWrapper.forEach((text) => {
  text.innerHTML = text.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
});

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  });


// var roles = ['UX Designer', 'Developer'];
// var i = 0;

// function loopOnRoles() {
//     setTimeout(function () {
//         textWrapper.textContent = roles[i];
//         textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
//         i++;
//         if (!roles[i]) {
//             i = 0;
//         }
//         loopOnRoles();
//     }, 3000)
// }

// loopOnRoles();