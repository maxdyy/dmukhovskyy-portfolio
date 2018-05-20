var API = 'http://35.231.214.175/wp-json/wp/v2/';

function getData(API, END_POINT) {
  $.getJSON(API + END_POINT, function (data) {
      console.log(data);
    })
    .fail(function (error) {
      console.log(error);
    })
}