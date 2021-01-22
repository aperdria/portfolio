// Home 
var textWrapperMl11 = document.querySelectorAll('.ml11 .letters');

if (textWrapperMl11) {
  textWrapperMl11.forEach((text) => {
    text.innerHTML = text.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  });

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.ml11 .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    });

}

// Konnect
var textWrapperMl16 = document.querySelector('.ml16');

if (textWrapperMl16) {
  textWrapperMl16.innerHTML = textWrapperMl16.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.ml16 .letter',
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 2500,
      delay: (el, i) => 2000 + 50 * i
    });
}