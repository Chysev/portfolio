window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('navigation').style.padding='17px';
    document.getElementById('navigation').style.backgroundColor = "#0e0e28";
    document.getElementById('navigation').style.position = "sticky";
  } else {
    document.getElementById('navigation').style.padding = "25px 0px";
    document.getElementById('navigation').style.backgroundColor = "#0e0e30";
  }
};



