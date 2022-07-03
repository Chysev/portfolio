window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("top_navbar").style.padding = "17px";
    document.getElementById("top_navbar").style.backgroundColor = "#0e0e23";
    document.getElementById("top_navbar").style.position = "sticky";
  } else {
    document.getElementById("top_navbar").style.padding = "30px 0px";
    document.getElementById("top_navbar").style.backgroundColor = "transparent";
  }
};
