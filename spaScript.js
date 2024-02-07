
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    
    
    if (currentScrollPos <= 850) {
      document.querySelector(".navBar").style.top = "-80px";
    } else {
      document.querySelector(".navBar").style.top = "0";
    }
  };

