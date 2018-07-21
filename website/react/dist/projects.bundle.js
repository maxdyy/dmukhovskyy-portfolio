/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"projects": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./website/react/pages/projects.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./website/localization/content.json":
/*!*******************************************!*\
  !*** ./website/localization/content.json ***!
  \*******************************************/
/*! exports provided: dmukhovskyy_en, default */
/***/ (function(module) {

eval("module.exports = {\"dmukhovskyy_en\":{\"header\":{\"name\":\"Maksym\",\"surname\":\"Dmukhovskyy\",\"about\":\"About\",\"smart\":\"S.M.A.R.T.\",\"techStack\":\"Tech Stack\",\"contacts\":\"Contacts\",\"projects\":\"Projects\"},\"footer\":{\"messageTitle\":\"Thanks for passing by\",\"messageText\":\"I truly appreciate the time you spent on my website. If you think we could work on something cool together give me a shout on social medias or via a direct email \",\"connectTitle\":\"Connect\",\"twitter\":{\"user\":\"@maxdyy\",\"link\":\"https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fmaterializecss.com%2Ffooter.html&ref_src=twsrc%5Etfw&region=follow_link&screen_name=maxdyy&tw_p=followbutton\"},\"codepen\":{\"user\":\"maxdyy\",\"link\":\"https://codepen.io/maxdyy\"},\"github\":{\"user\":\"maxdyy\",\"link\":\"https://github.com/maxdyy\"},\"linkedIn\":{\"user\":\"Maksym Dmukhovskyy\",\"link\":\"https://www.linkedin.com/in/maxdyy\"},\"mail\":{\"user\":\"dm.maksym@gmail.com\",\"link\":\"mailto:dm.maksym@gmail.com?subject=MYY:%20&body=Hi%20Maksym,\"},\"copyright\":\"© 2017-2018 Maksym Dmukhovskyy\",\"gitRepo\":\"https://github.com/maxdyy/dmukhovskyyPortfolio\",\"license\":\"MIT License\"}}};\n\n//# sourceURL=webpack:///./website/localization/content.json?");

/***/ }),

/***/ "./website/react/components/footer.jsx":
/*!*********************************************!*\
  !*** ./website/react/components/footer.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _content = __webpack_require__(/*! ../../localization/content.json */ \"./website/localization/content.json\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar footer = _content.dmukhovskyy_en.footer;\nvar messageTitle = footer.messageTitle,\n    messageText = footer.messageText,\n    connectTitle = footer.connectTitle,\n    twitter = footer.twitter,\n    codepen = footer.codepen,\n    github = footer.github,\n    linkedIn = footer.linkedIn,\n    mail = footer.mail,\n    copyright = footer.copyright,\n    gitRepo = footer.gitRepo,\n    license = footer.license;\n\nvar Footer = function (_Component) {\n  _inherits(Footer, _Component);\n\n  function Footer() {\n    _classCallCheck(this, Footer);\n\n    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));\n  }\n\n  _createClass(Footer, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"footer\",\n        { id: \"contacts\", className: \"page-footer scrollspy\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"container\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"row\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"col l6 m8 s12 thanks\" },\n              _react2.default.createElement(\n                \"h5\",\n                { className: \"white-text\" },\n                messageTitle\n              ),\n              _react2.default.createElement(\n                \"p\",\n                { className: \"grey-text text-lighten-4\" },\n                messageText,\n                _react2.default.createElement(\"span\", { className: \"ec ec-wink\" })\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"col l4 m4 offset-l2 s12 connect\" },\n              _react2.default.createElement(\n                \"h5\",\n                { className: \"white-text\" },\n                connectTitle\n              ),\n              _react2.default.createElement(\n                \"ul\",\n                null,\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"waves-effect waves-light btn\", href: twitter.link, target: \"_blank\", rel: \"noopener noreferrer\" },\n                    _react2.default.createElement(\"i\", { className: \"fab fa-twitter\" }),\n                    \" \",\n                    twitter.user\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"waves-effect waves-light btn\", href: codepen.link, target: \"_blank\", rel: \"noopener noreferrer\" },\n                    _react2.default.createElement(\"i\", { className: \"fab fa-codepen\" }),\n                    \" \",\n                    codepen.user\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"waves-effect waves-light btn\", href: github.link, target: \"_blank\", rel: \"noopener noreferrer\" },\n                    _react2.default.createElement(\"i\", { className: \"fab fa-github\" }),\n                    \" \",\n                    github.user\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"waves-effect waves-light btn\", href: linkedIn.link, target: \"_blank\", rel: \"noopener noreferrer\" },\n                    _react2.default.createElement(\"i\", { className: \"fab fa-linkedin-in\" }),\n                    \" \",\n                    linkedIn.user\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"waves-effect waves-light btn\", href: mail.link },\n                    _react2.default.createElement(\"i\", { className: \"fab fa-telegram-plane\" }),\n                    \" \",\n                    mail.user\n                  )\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"footer-copyright\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"container\" },\n            copyright,\n            _react2.default.createElement(\n              \"a\",\n              { className: \"grey-text text-lighten-4 right\", href: gitRepo, target: \"_blank\", rel: \"noopener noreferrer\" },\n              license\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Footer;\n}(_react.Component);\n\nexports.default = Footer;\n\n//# sourceURL=webpack:///./website/react/components/footer.jsx?");

/***/ }),

/***/ "./website/react/components/header.jsx":
/*!*********************************************!*\
  !*** ./website/react/components/header.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _content = __webpack_require__(/*! ../../localization/content.json */ \"./website/localization/content.json\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar header = _content.dmukhovskyy_en.header;\nvar name = header.name,\n    surname = header.surname,\n    about = header.about,\n    smart = header.smart,\n    techStack = header.techStack,\n    contacts = header.contacts,\n    projects = header.projects;\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      var navigation = this.props.navigation;\n      var _about = navigation._about,\n          _smart = navigation._smart,\n          _techStack = navigation._techStack,\n          _contacts = navigation._contacts,\n          _projects = navigation._projects;\n\n      return _react2.default.createElement(\n        \"header\",\n        { className: \"main-nav\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"main-nav-wrapper\" },\n          _react2.default.createElement(\n            \"nav\",\n            null,\n            _react2.default.createElement(\n              \"div\",\n              { className: \"nav-wrapper\" },\n              _react2.default.createElement(\n                \"a\",\n                { className: \"brand-logo\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"avatar\" },\n                  _react2.default.createElement(\"img\", { src: \"images/avatar.png\", alt: \"photo of Maksym\" }),\n                  _react2.default.createElement(\n                    \"h1\",\n                    { className: \"name\" },\n                    _react2.default.createElement(\n                      \"span\",\n                      null,\n                      name\n                    ),\n                    _react2.default.createElement(\n                      \"span\",\n                      null,\n                      surname\n                    )\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                \"a\",\n                { href: \"#\", \"data-activates\": \"mobile-demo\", className: \"button-collapse\" },\n                _react2.default.createElement(\"i\", { className: \"fas fa-bars\" })\n              ),\n              _react2.default.createElement(\n                \"ul\",\n                { className: \"right hide-on-med-and-down\" },\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"modal-trigger\", href: _about },\n                    about\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { href: _smart },\n                    smart\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { href: _techStack },\n                    techStack\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { href: _contacts },\n                    contacts\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { href: _projects },\n                    projects\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                \"ul\",\n                { className: \"side-nav\", id: \"mobile-demo\" },\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"modal-trigger close-click\", href: _about },\n                    about\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"close-click\", href: _smart },\n                    smart\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"close-click\", href: _techStack },\n                    techStack\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"close-click\", href: _contacts },\n                    contacts\n                  )\n                ),\n                _react2.default.createElement(\n                  \"li\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    { className: \"close-click\", href: _projects },\n                    projects\n                  )\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./website/react/components/header.jsx?");

/***/ }),

/***/ "./website/react/pages/projects.jsx":
/*!******************************************!*\
  !*** ./website/react/pages/projects.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _header = __webpack_require__(/*! ../components/header */ \"./website/react/components/header.jsx\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _footer = __webpack_require__(/*! ../components/footer */ \"./website/react/components/footer.jsx\");\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar projectsEntry = document.getElementById('react-projectsPage');\n\nvar ProjectsPage = function (_Component) {\n  _inherits(ProjectsPage, _Component);\n\n  function ProjectsPage(props) {\n    _classCallCheck(this, ProjectsPage);\n\n    var _this = _possibleConstructorReturn(this, (ProjectsPage.__proto__ || Object.getPrototypeOf(ProjectsPage)).call(this, props));\n\n    _this.state = {\n      projectsNavigation: {\n        _about: \"./index#modal\",\n        _smart: \"./index#smart\",\n        _techStack: \"./index#tech\",\n        _contacts: \"#contacts\",\n        _projects: \"#\"\n      }\n    };\n    return _this;\n  }\n\n  _createClass(ProjectsPage, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'projects' },\n        _react2.default.createElement(_header2.default, { navigation: this.state.projectsNavigation }),\n        _react2.default.createElement(\n          'section',\n          { className: 'section-projects' },\n          _react2.default.createElement('ul', { className: 'collapsible popout projects-container', 'data-collapsible': 'expandable' })\n        ),\n        _react2.default.createElement(_footer2.default, null)\n      );\n    }\n  }]);\n\n  return ProjectsPage;\n}(_react.Component);\n\n_reactDom2.default.render(_react2.default.createElement(ProjectsPage, null), projectsEntry);\n\n//# sourceURL=webpack:///./website/react/pages/projects.jsx?");

/***/ })

/******/ });