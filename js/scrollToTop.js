jQuery(document).ready(function() {
  var durationtime = 500;
  var offset = 1220;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(durationtime);
    } else {
      jQuery('.back-to-top').fadeOut(durationtime);
    }
  });
  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, durationtime); return false;
  })
});
