!function(e){function t(t){for(var n,o,c=t[0],u=t[1],i=t[2],f=0,m=[];f<c.length;f++)o=c[f],r[o]&&m.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);m.length;)m.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={2:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var s=u;l.push([49,0]),a()}({2:function(e){e.exports={dmukhovskyy_en:{header:{name:"Maksym",surname:"Dmukhovskyy",about:"About",smart:"S.M.A.R.T.",projects:"Projects",blog:"Blog",contact:"Contact"},projects:{frontEndText:"Front-end:",backEndText:"Back-end:",visitBtnText:"Visit"},footer:{messageTitle:"Thanks for passing by",messageText:"I truly appreciate the time you spent on my website. If you think we could work on something cool together give me a shout on social medias or via a direct email ",connectTitle:"Connect",twitter:{user:"@maxdyy",link:"https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fmaterializecss.com%2Ffooter.html&ref_src=twsrc%5Etfw&region=follow_link&screen_name=maxdyy&tw_p=followbutton"},codepen:{user:"maxdyy",link:"https://codepen.io/maxdyy"},github:{user:"maxdyy",link:"https://github.com/maxdyy"},linkedIn:{user:"Maksym Dmukhovskyy",link:"https://www.linkedin.com/in/maxdyy"},mail:{user:"dm.maksym@gmail.com",link:"mailto:dm.maksym@gmail.com?subject=MYY:%20&body=Hi%20Maksym,"},copyright:"© 2017-2018 Maksym Dmukhovskyy",gitRepo:"https://github.com/maxdyy/dmukhovskyyPortfolio",license:"MIT License"}}}},3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(r);var o=a(2).dmukhovskyy_en.header,c=o.name,u=o.surname,i=o.about,s=o.smart,f=o.blog,m=o.projects,d=o.contact,p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"render",value:function(){var e=this.props.navigation,t=e._about,a=e._smart,n=e._projects,r=e._blog,o=e._contact;return l.default.createElement("header",{className:"main-nav"},l.default.createElement("div",{className:"main-nav-wrapper"},l.default.createElement("nav",null,l.default.createElement("div",{className:"nav-wrapper"},l.default.createElement("a",{className:"brand-logo"},l.default.createElement("div",{className:"avatar"},l.default.createElement("img",{src:"images/avatar.png",alt:"photo of Maksym"}),l.default.createElement("h1",{className:"name"},l.default.createElement("span",null,c),l.default.createElement("span",null,u)))),l.default.createElement("a",{href:"#","data-activates":"mobile-demo",className:"button-collapse"},l.default.createElement("i",{className:"fas fa-bars"})),l.default.createElement("ul",{className:"right hide-on-med-and-down"},l.default.createElement("li",null,l.default.createElement("a",{className:"modal-trigger",href:t},i)),l.default.createElement("li",null,l.default.createElement("a",{href:a},s)),l.default.createElement("li",null,l.default.createElement("a",{href:n},m)),l.default.createElement("li",null,l.default.createElement("a",{href:r},f)),l.default.createElement("li",null,l.default.createElement("a",{href:o},d))),l.default.createElement("ul",{className:"side-nav",id:"mobile-demo"},l.default.createElement("li",null,l.default.createElement("a",{className:"modal-trigger close-click",href:t},i)),l.default.createElement("li",null,l.default.createElement("a",{className:"close-click",href:a},s)),l.default.createElement("li",null,l.default.createElement("a",{className:"close-click",href:r},f)),l.default.createElement("li",null,l.default.createElement("a",{className:"close-click",href:n},m)),l.default.createElement("li",null,l.default.createElement("a",{className:"close-click",href:o},d)))))))}}]),t}();t.default=p},4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(r);var o=a(2).dmukhovskyy_en.footer,c=o.messageTitle,u=o.messageText,i=o.connectTitle,s=o.twitter,f=o.codepen,m=o.github,d=o.linkedIn,p=o.mail,y=o.copyright,h=o.gitRepo,b=o.license,g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"render",value:function(){return l.default.createElement("footer",{id:"contacts",className:"page-footer scrollspy"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col l6 m8 s12 thanks"},l.default.createElement("h5",{className:"white-text"},c),l.default.createElement("p",{className:"grey-text text-lighten-4"},u,l.default.createElement("span",{className:"ec ec-wink"}))),l.default.createElement("div",{className:"col l4 m4 offset-l2 s12 connect"},l.default.createElement("h5",{className:"white-text"},i),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{className:"waves-effect waves-light btn",href:s.link,target:"_blank",rel:"noopener noreferrer"},l.default.createElement("i",{className:"fab fa-twitter"})," ",s.user)),l.default.createElement("li",null,l.default.createElement("a",{className:"waves-effect waves-light btn",href:f.link,target:"_blank",rel:"noopener noreferrer"},l.default.createElement("i",{className:"fab fa-codepen"})," ",f.user)),l.default.createElement("li",null,l.default.createElement("a",{className:"waves-effect waves-light btn",href:m.link,target:"_blank",rel:"noopener noreferrer"},l.default.createElement("i",{className:"fab fa-github"})," ",m.user)),l.default.createElement("li",null,l.default.createElement("a",{className:"waves-effect waves-light btn",href:d.link,target:"_blank",rel:"noopener noreferrer"},l.default.createElement("i",{className:"fab fa-linkedin-in"})," ",d.user)),l.default.createElement("li",null,l.default.createElement("a",{className:"waves-effect waves-light btn",href:p.link},l.default.createElement("i",{className:"fab fa-telegram-plane"})," ",p.user)))))),l.default.createElement("div",{className:"footer-copyright"},l.default.createElement("div",{className:"container"},y,l.default.createElement("a",{className:"grey-text text-lighten-4 right",href:h,target:"_blank",rel:"noopener noreferrer"},b))))}}]),t}();t.default=g},49:function(e,t,a){"use strict";var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),l=i(r),o=i(a(5)),c=i(a(3)),u=i(a(4));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={projectsNavigation:{_about:"./index#modal",_smart:"./index#smart",_blog:"#",_projects:"./projects",_contact:"./contact"}},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"render",value:function(){var e=this.state.projectsNavigation;return l.default.createElement("div",{className:"blog"},l.default.createElement(c.default,{navigation:e}),l.default.createElement("div",null," HELLO BLOG REACT"),l.default.createElement(u.default,null))}}]),t}(),f=document.getElementById("react-blogPage");o.default.render(l.default.createElement(s,null),f)}});