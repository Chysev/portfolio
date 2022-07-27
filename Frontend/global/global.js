window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navigation").style.backgroundColor = "#ff0000";
    document.getElementById("navigation-function").style.width = "1100px";
  } else {
    document.getElementById("navigation").style.backgroundColor = "transparent";
    document.getElementById("navigation-function").style.width = "110rem";
  }
}

// Animation

AOS.init();
