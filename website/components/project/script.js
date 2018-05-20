$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
  getData(Graph_API, query);
})

var Graph_API = 'https://api.graphcms.com/simple/v1/dmukhovskyy';
var query = "{\
               allProjects \
                { isPublished \
                  id \
                  projectTitle \
                  headerBackground\
                  projectLogo \
                  { id \
                    url \
                  } \
                  projectURL \
                  projectFrontEnd \
                  projectBackEnd \
                  projectDescription \
                } \
              }";

var projects = [];

function getData(API, query) {
  if($('body').hasClass('projects')) {
    $.post({
      url: API,
      data: JSON.stringify({ "query": query }),
      contentType: 'application/json'
    }).done(function(response) {
      projects = response.data.allProjects;
      createProjects(projects);
    });
  };
}

var projectsContainer = $('.projects-container');

function createProjects(projects) {
  $.each(projects, function(index, project) {
    if(project.isPublished) {
      projectsContainer.append('\
      <li class="project-item">\
        <div class="collapsible-header header-'+ project.id +'">\
          <div class="project-icon icon-'+ project.id +'"></div>\
          <span>'+ project.projectTitle +'</span>\
        </div>\
        <div class="collapsible-body">\
          <div class="project-stack">\
            <div class="front">\
              <span class="desc">Front-end:</span>\
              <span>'+ project.projectFrontEnd +'</span>\
          </div>\
            <div class="back">\
              <span class="desc">Back-end:</span>\
              <span>'+ project.projectBackEnd +'</span>\
            </div>\
          </div>\
          <hr class="hr-'+ project.id +'">\
          <span class="project-desc">'+ project.projectDescription +'</span>\
          <a class="waves-effect waves-light btn project-btn" href="' + project.projectURL + '">Visit</a>\
        </div>\
      </li>\
      ');

      var projectIcon = $('.icon-'+ project.id +'');
      var projectHeader = $('.header-'+ project.id +'');
      var projectHR = $('.hr-'+ project.id +'');

      projectIcon.css({'background-image': 'url(' + project.projectLogo.url + ')'})
      projectHeader.css({'background-image': ''+ project.headerBackground + ''})
      projectHR.css({'background-image': ''+ project.headerBackground + ''})

    }
  })
}