$("#btn").click(function() {
  $('.transition').toggleClass('transition-active');
});

$('.btn').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = url; }, 1000, linkUrl);
});