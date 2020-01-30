/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/Chap2/Datatable/get.js":
/*!*********************************************!*\
  !*** ./resources/js/Chap2/Datatable/get.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataTableGet; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataTableGet =
/*#__PURE__*/
function () {
  function DataTableGet() {
    _classCallCheck(this, DataTableGet);

    this.getDataList();
    this.rangeDate();
  }

  _createClass(DataTableGet, [{
    key: "getDataList",
    value: function getDataList() {
      $(function (e) {
        //variable
        var title = $('#title').val();
        var status = $('#status').val();
        var body = $('#body').val();
        var limit = $('#sortByRow').val();
        var page;
        var to_date;
        var from_date;
        var params; // let first_page;

        var path;
        var current_page;
        var last_page_url;
        var prev_page_url;
        var paramsList; // let total;

        function extraparams(title, status, body, limit, from_date, to_date) {
          var currentUrl = window.location.href;

          if (currentUrl.indexOf('?') < 0) {
            return {};
          }

          currentUrl = currentUrl.replace('#', '');
          paramsList = currentUrl.split('?')[1].split('&'); //cek parameter
          // console.log(paramsList);

          var page = paramsList[0].split('=')[1];

          if (title == undefined) {
            var title = paramsList[1].split('=')[1];
          }

          var params = {};
        }

        function inputData() {
          // input title untuk filter
          $(document).on('keyup', '#title', function (e) {
            if ($('#title').is(":focus") && event.key == "Enter") {
              title = $('#title').val();
              $('#data-table-task').DataTable().destroy();
              show_datatable(title, status, body, limit, from_date, to_date);
              extraparams(title, status, body, limit, from_date, to_date);
            }
          }); // input title untuk filter

          $(document).on('keyup', '#body', function (e) {
            if ($('#body').is(":focus") && event.key == "Enter") {
              body = $('#body').val();
              $('#data-table-task').DataTable().destroy();
              show_datatable(title, status, body, limit, from_date, to_date);
              extraparams(title, status, body, limit, from_date, to_date);
            }
          }); //input status untuk filter

          $(document).on('change', '#status', function (e) {
            status = $('#status').val();
            $('#data-table-task').DataTable().destroy();
            show_datatable(title, status, body, limit, from_date, to_date);
            extraparams(title, status, body, limit, from_date, to_date);
          }); //filter limit

          $(document).on('change', '#sortByRow', function (e) {
            limit = $('#sortByRow').val();
            $('#data-table-task').DataTable().destroy();
            show_datatable(title, status, body, limit, from_date, to_date);
            extraparams(title, status, body, limit, from_date, to_date);
          }); //filter  data tanggal

          $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('YYYY-MM-DD') + ' s/d ' + picker.endDate.format('YYYY-MM-DD'));
            from_date = picker.startDate.format('YYYY-MM-DD');
            to_date = picker.endDate.format('YYYY-MM-DD');
            $('#data-table-task').DataTable().destroy();
            show_datatable(title, status, body, limit, from_date, to_date);
            extraparams(title, status, body, limit, from_date, to_date);
          }); //filter data tanggal clear

          $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
            from_date = '';
            to_date = '';
            $('#data-table-task').DataTable().destroy();
            show_datatable(title, status, body, limit, from_date, to_date);
          }); // btn prev paginate

          $(document).on('click', ".paginate_button .previous", function (e) {// console.log('a')
          });
        }

        show_datatable(title, status, body, limit, from_date, to_date);
        inputData();
        extraparams(); //fungsi tampil data

        function show_datatable() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '50';
          var from_date = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          var to_date = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
          $.ajax({
            url: "/api/chap2/task/apis",
            type: "GET",
            dataType: "JSON",
            data: {
              title: title,
              status: status,
              body: body,
              limit: limit,
              from_date: from_date,
              to_date: to_date
            },
            success: function success(data) {
              params = this.url;
              var path = params.split('?'); // cek data page

              current_page = data.current_page;
              last_page_url = data.last_page_url;
              prev_page_url = data.prev_page_url; //push url

              window.history.pushState({
                "html": ""
              }, "", "/chap2/task?" + path[1]); // console.log(path);
            },
            error: function error() {
              alert('data tidak ditermukan');
            }
          });
          $('#data-table-task').DataTable({
            "ajax": {
              url: "/api/chap2/task/apis/",
              data: {
                page: 1,
                title: title,
                status: status,
                body: body,
                limit: limit,
                from_date: from_date,
                to_date: to_date
              },
              complete: function complete(params) {}
            },
            pageLength: 50,
            scrollX: false,
            scrollCollapse: false,
            paging: true,
            searching: false,
            orderable: false,
            bSort: false,
            info: false,
            lengthChange: false,
            retrieve: true,
            columns: [{
              data: "id"
            }, {
              data: "title"
            }, {
              data: "body"
            }, {
              data: "created_at"
            }, {
              data: "status"
            }, {
              data: "id",
              "className": "dt-center",
              "render": function render(data) {
                return '<a href="/chap2/task/' + data + '/detail">' + '<div class="ui vertical animated blue button view-task" >' + '<div class="hidden content">View</div>' + '<div class="visible content">' + '<i class="eye icon"></i></div>' + '</div>' + '</a>' + '<a href="/chap2/task/' + data + '/edit">' + '<div class="ui vertical animated yellow button">' + '<div class="hidden content">Edit</div>' + '<div class="visible content">' + '<i class="edit icon"></i>' + '</div>' + '</div>' + '</a>' + '<a class="btn-delete" data-id="' + data + '">' + '<div class="ui vertical animated orange button" >' + '<div class="hidden content">Delete</div>' + '<div class="visible content">' + '<i class="trash icon"></i>' + '</div>' + '</div>' + '</a>';
              }
            }]
          });
        }
      });
    }
  }, {
    key: "rangeDate",
    value: function rangeDate() {
      $(function () {
        $('input[name="datefilter"]').daterangepicker({
          autoUpdateInput: false,
          locale: {
            cancelLabel: 'Clear'
          }
        });
      });
    }
  }]);

  return DataTableGet;
}();



/***/ }),

/***/ 1:
/*!***************************************************!*\
  !*** multi ./resources/js/Chap2/Datatable/get.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ciheul/Projects/www/training-2020-batch-i/resources/js/Chap2/Datatable/get.js */"./resources/js/Chap2/Datatable/get.js");


/***/ })

/******/ });