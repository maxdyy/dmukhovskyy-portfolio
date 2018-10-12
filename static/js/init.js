$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".close-click").on("click", function() {
    $(".side-nav").sideNav("hide");
  });
  $(".modal").modal();
});
