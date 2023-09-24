
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("topBar").style.borderBottom= "#DFDFDF 1px solid";
        }
        else {
          document.getElementById("topBar").style.borderBottom= "none";
        }
    }
