window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("navigation").style.backgroundColor = "red";
    document.getElementById("navigation").style.transition = "0.5s";
    document.getElementById("navigation").style.padding = "16px 0px";
  } else {
    document.getElementById("navigation").style.backgroundColor = "transparent";
    document.getElementById("navigation").style.padding = "31px 0px";
  }
}

AOS.init();
