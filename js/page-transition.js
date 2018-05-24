<<<<<<< HEAD
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
  setTimeout(function(url) { window.location = '/home.html'; }, 1000, linkUrl);
});

$('#btn1').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = '/home.html'; }, 1000, linkUrl);
});

$('#btn2').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = '/staff.html'; }, 1000, linkUrl);
});

$('#btn3').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = '/home.html'; }, 1000, linkUrl);
=======
$("#btn").click(function() {
  $('.transition').toggleClass('transition-active');
});

$('.btn').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = url; }, 1000, linkUrl);
>>>>>>> c6402c435a5abc6fd92b660beb17b06f02c9e65b
});