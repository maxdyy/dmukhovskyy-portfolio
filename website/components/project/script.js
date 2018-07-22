$(document).ready(function () {
  $('.button-collapse').sideNav();
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
  getData(Graph_API, query);
})

debugger

var Graph_API = 'https://api.graphcms.com/simple/v1/dmukhovskyy';
var query = '{\
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
              }';

var projects = [];

function setSessionData(key, obj) {
  sessionStorage.setItem(key, JSON.stringify(obj));
}

function getSessionData(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

function getData(API, query) {
  var sessionData = getSessionData('dmukhovskyyProjects');
  if (!sessionData) {
    if ($('body').hasClass('projects')) {
      $.post({
        url: API,
        data: JSON.stringify({
          'query': query
        }),
        contentType: 'application/json'
      }).done(function (response) {
        projects = response.data.allProjects;
        setSessionData('dmukhovskyyProjects', projects);
        createProjects(projects);
      });
    };
  } else {
    createProjects(sessionData);
  }
}

var projectsContainer = $('.projects-container');

function createProjects(projects) {
  $.each(projects, function (index, project) {
    if (project.isPublished) {
      projectsContainer.append('\
      <li class="project-item">\
        <div class="collapsible-header header-' + project.id + '">\
          <div class="project-icon icon-' + project.id + '"></div>\
          <span class="project-title">' + project.projectTitle + '</span>\
        </div>\
        <div class="collapsible-body">\
          <div class="project-stack">\
            <div class="stack-front">\
              <span class="stack-title">Front-end:</span>\
              <span class="stack-desc">' + project.projectFrontEnd + '</span>\
          </div>\
            <div class="stack-back">\
              <span class="stack-title">Back-end:</span>\
              <span class="stack-desc">' + project.projectBackEnd + '</span>\
            </div>\
          </div>\
          <hr class="hr-' + project.id + '">\
          <div class="project-desc"><span>' + project.projectDescription + '</span></div>\
          <div class="project-btn-wrapper">\
            <a class="waves-effect waves-light btn project-btn" href="' + project.projectURL + '" target="_blank" rel="noreferrer">Visit</a>\
          </div>\
        </div>\
      </li>\
      ');

      var projectIcon = $('.icon-' + project.id + '');
      var projectHeader = $('.header-' + project.id + '');
      var projectHR = $('.hr-' + project.id + '');

      projectIcon.css({
        'background-image': 'url(' + project.projectLogo.url + ')'
      })
      projectHeader.css({
        'background-image': '' + project.headerBackground + ''
      })
      projectHR.css({
        'background-image': '' + project.headerBackground + ''
      })

    }
  })
}