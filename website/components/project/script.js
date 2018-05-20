$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
})

var API_END_POINT = 'projects';

var projects = getData(API, API_END_POINT);