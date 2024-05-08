
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("topBar").style.boxShadow= "0rem 0 1rem rgba(0,0,0,0.05)";
        }
        else {
          document.getElementById("topBar").style.borderBottom= "none";     
        }
    }
