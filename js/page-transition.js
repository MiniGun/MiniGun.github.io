$("#btn").click(function() {
  $('.transition').toggleClass('transition-active');
});

$("#btn1").click(function() {
  $('.transition').toggleClass('transition-active');
});

$("#btn2").click(function() {
  $('.transition').toggleClass('transition-active');
});

$("#btn3").click(function() {
  $('.transition').toggleClass('transition-active');
});

$('#btn').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = '/'; }, 1000, linkUrl);
});

$('#btn1').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = '/'; }, 1000, linkUrl);
});

$('#btn2').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = '/staff.html'; }, 1000, linkUrl);
});

$('#btn3').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = '/'; }, 1000, linkUrl);
});