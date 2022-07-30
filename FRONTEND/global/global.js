// Animation
AOS.init();

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("navigation").style.backgroundColor = "crimson";
    document.getElementById("navigation").style.position = "sticky";
  } else {
    document.getElementById("navigation").style.backgroundColor = "crimson";
  }
}
