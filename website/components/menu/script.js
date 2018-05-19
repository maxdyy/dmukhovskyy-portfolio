// closing the mobile side menu once a button is clicked
$('.close-click').on('click', function() {
  $('side-nav').sideNav('hide');
})

// dropdown localization logic
var locBtn = $('.button-localization');
var locBtnMob = $('.button-localization-mobile');
var locOption = $('.localization-option');
var locOptionMob = $('.localization-option-mobile');

locOption.on('click', function() {
  var locOptionTxt = $(this).text();
  var locBtnTxt = locBtn.text();

  $(this).text(locBtnTxt);
  $('.localization-option-mobile:contains(' + locOptionTxt +')').text(locBtnTxt);
  locBtn.text(locOptionTxt);
  locBtnMob.text(locOptionTxt);

  $('body').removeClass(locBtnTxt).addClass(locOptionTxt);
})

locOptionMob.on('click', function() {
  var locOptionMobTxt = $(this).text();
  var locBtnMobTxt = locBtnMob.text();

  $(this).text(locBtnMobTxt);
  $('.localization-option:contains(' + locOptionMobTxt +')').text(locBtnMobTxt);
  locBtn.text(locOptionMobTxt);
  locBtnMob.text(locOptionMobTxt);

  $('body').removeClass(locBtnMobTxt).addClass(locOptionMobTxt);
})