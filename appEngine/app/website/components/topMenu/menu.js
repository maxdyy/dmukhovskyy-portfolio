$window.scroll(function() {
  if ($window[0].scrollY >= $intro[0].clientHeight) {
    $menu.addClass('mini');
    $intro.addClass('mini');
  } else {
    $menu.removeClass('mini');
    $intro.removeClass('mini');
  }
});