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

/* Content Transition */
$(".info").click(function() {
  $('h').toggleClass('h-active');
  $('p').toggleClass('p-active');
  $('h1').toggleClass('h1-active');
  $('p1').toggleClass('p1-active');
  $('.playercount').toggleClass('playercount-active');

  $('h2').toggleClass('h2-active');
  $('p3').toggleClass('p3-active');
  $('h3').toggleClass('h3-active');
  $('p4').toggleClass('p4-active');
});