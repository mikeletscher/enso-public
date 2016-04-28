$(function() {
  $('.scroll-to').click(function(e) {
    e.preventDefault();
    target = $($(this).attr('href'));

    $('html, body').animate({ scrollTop: target.offset().top }, 500, function() {
      $('.to-bounce', target).addClass('animated bounce');

      setTimeout(function() {
        $('.to-bounce', target).removeClass('animated bounce');
      }, 1000);
    });
  });
});