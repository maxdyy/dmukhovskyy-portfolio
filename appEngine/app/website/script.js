// particlesJS.load('particles-js', 'assets/particles/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

var $window = $(window);
var $intro = $('#intro');
var $menu = $('#menu');

$window.scroll(function() {
  if ($window[0].scrollY >= $intro[0].clientHeight) {
    $menu.addClass('mini');
    $intro.addClass('mini');
  } else {
    $menu.removeClass('mini');
    $intro.removeClass('mini');
  }
});