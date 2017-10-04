var $window = $(window);
var $intro = $('#intro');
var $menu = $('#menu');
var $mapContainer = $('#map');
var $tech = $('#tech');
var $techContainer = $('.techContainer');

var mapScrollStart = false;
var firstPlay = false;

var $windowHeight = window.innerHeight;

var mapContainerHeight = $mapContainer[0].clientHeight;
var menuHeight = $('#menu')[0].clientHeight; 
var centerSpace = Math.round(($windowHeight - mapContainerHeight - menuHeight) / 2);
var mapOfsetStart = $mapContainer[0].offsetTop - menuHeight - centerSpace;

var techHeight = $tech[0].clientHeight;
var techContainerHeight = $windowHeight - menuHeight - techHeight;
