window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("navigation").style.backgroundColor = "red";
    document.getElementById("navigation").style.transition = "0.5s";
  } else {
    document.getElementById("navigation").style.backgroundColor = "transparent";
  }
}

AOS.init();
