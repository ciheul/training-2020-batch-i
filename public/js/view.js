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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/Chapter2/view.js":
/*!***************************************!*\
  !*** ./resources/js/Chapter2/view.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Datalist; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Datalist =
/*#__PURE__*/
function () {
  function Datalist() {
    _classCallCheck(this, Datalist);

    this.getDatalistTable();
  }

  _createClass(Datalist, [{
    key: "getDatalistTable",
    value: function getDatalistTable() {
      $(document).ready(function (e) {
        $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        });
        $.ajax({
          url: '/api/Chapter2/apis',
          data: {
            limit: 1,
            ordering: null
          },
          type: "get",
          dataType: "JSON",
          success: function success(response) {
            var util = {
              extractParams: function extractParams() {
                var that = this;
                var currentUrl = window.location.href;

                if (currentUrl.indexOf('?') < 0) {
                  return {};
                }

                currentUrl = currentUrl.replace('#', '');
                var paramsList = currentUrl.split('?')[1].split('&');
                var params = {};
                paramsList.forEach(function (i) {
                  var key = i.split('=')[0];
                  var value = decodeURI(i.split('=')[1]);
                  params[key] = value;
                });

                if (params.hasOwnProperty('page')) {
                  params['page'] = parseInt(params['page']);
                }

                if (!params.hasOwnProperty('limit')) {
                  params['limit'] = 5;
                }

                return params;
              },
              buildUrl: function buildUrl(pathname, params) {
                return pathname + '?' + $.param(params).split('%2C').join(',');
              }
            };
            var filterView = {
              props: {
                utility: util,
                dataListTable: null,
                dataList: null
              },
              render: function render(params) {
                this.renderIDFilter(params);
                this.renderTitleFilter(params);
                this.renderBodyFilter(params);
                this.renderStatusFilter(params);
                this.renderCreatedAtFilter(params);
                this.renderUpdatedAtFilter(params);
              },
              checkUrl: function checkUrl(params) {
                var that = this;

                if (!params.hasOwnProperty('page')) {
                  params['page'] = 1;
                }

                if (!params.hasOwnProperty('limit')) {
                  params['limit'] = 5;
                }

                return params;
              },
              renderCreatedAtFilter: function renderCreatedAtFilter(params) {
                if (params['mincreated_at'] && params['maxcreated_at'] !== undefined) {
                  $('#created-input').val(params['mincreated_at']).trigger('input');
                }

                this.bindCreatedAtFilter();
              },
              bindCreatedAtFilter: function bindCreatedAtFilter(params) {
                var dateRange = $('#created-input').daterangepicker({
                  autoUpdateInput: false,
                  timePicker: true,
                  locale: {
                    cancelLabel: 'Clear'
                  }
                });
                var that = this;
                dateRange.on('apply.daterangepicker', function (ev, picker) {
                  $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
                  var startDate = picker.startDate.format('YYYY-MM-DD');
                  var endDate = picker.endDate.format('YYYY-MM-DD');
                  var params = that.props.utility.extractParams();
                  params = that.checkUrl(params);
                  params['mincreated_at'] = startDate;
                  params['maxcreated_at'] = endDate;
                  $.get('/api/Chapter2/apis/', params, function (response) {
                    $("#dataListTable").DataTable().clear().destroy();
                    that.props.dataList.getDataList(params);
                  });
                  var historyUrl = that.props.utility.buildUrl(window.location.pathname, params);
                  window.history.pushState('byCreated', 'by Created', historyUrl);
                });
                dateRange.on('cancel.daterangepicker', function (ev, picker) {
                  var startDate = $(this).val('');
                  var params = that.props.utility.extractParams();
                  params = that.checkUrl(params);
                  delete params['mincreated_at'];
                });
              },
              renderUpdatedAtFilter: function renderUpdatedAtFilter(params) {
                if (params['minupdated_at'] && params['maxupdated_at'] !== undefined) {
                  $('#updated-input').val(params['minupdated_at']).trigger('input');
                }

                this.bindUpdatedAtFilter();
              },
              bindUpdatedAtFilter: function bindUpdatedAtFilter(params) {
                var dateRange = $('#updated-input').daterangepicker({
                  autoUpdateInput: false,
                  timePicker: true,
                  locale: {
                    cancelLabel: 'Clear'
                  }
                });
                var that = this;
                dateRange.on('apply.daterangepicker', function (ev, picker) {
                  $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
                  var startDate = picker.startDate.format('YYYY-MM-DD');
                  var endDate = picker.endDate.format('YYYY-MM-DD');
                  var params = that.props.utility.extractParams();
                  params = that.checkUrl(params);
                  params['minupdated_at'] = startDate;
                  params['maxupdated_at'] = endDate;
                  $.get('/api/Chapter2/apis/', params, function (response) {
                    $("#dataListTable").DataTable().clear().destroy();
                    that.props.dataList.getDataList(params);
                  });
                  var historyUrl = that.props.utility.buildUrl(window.location.pathname, params);
                  window.history.pushState('byCreated', 'by Created', historyUrl);
                });
                dateRange.on('cancel.daterangepicker', function (ev, picker) {
                  var startDate = $(this).val('');
                  var params = that.props.utility.extractParams();
                  params = that.checkUrl(params);
                  delete params['minupdated_at'];
                });
              },
              renderIDFilter: function renderIDFilter(params) {
                if (params['id'] !== undefined) {
                  $('#id-search').val(params['id']).trigger('input');
                }

                this.bindIDFilter();
              },
              bindIDFilter: function bindIDFilter() {
                var that = this;
                $('#id-search').keyup(function (event) {
                  if ($('#id-search').is(":focus") && event.key == "Enter") {
                    var params = that.props.utility.extractParams();
                    params = that.checkUrl(params);

                    if ($("#id-search").val() === '' && params.hasOwnProperty('id')) {
                      delete params['id'];
                    }

                    if ($("#id-search").val() === '' && !params.hasOwnProperty('id')) {//do nothing
                    } else {
                      params['id'] = $('#id-search').val().split('.').join('');
                    }

                    $.get('/api/Chapter2/apis/', params, function (response) {
                      $("#dataListTable").DataTable().clear().destroy();
                      that.props.dataList.getDataList(params);
                    });
                    var historyUrl = that.props.utility.buildUrl(window.location.pathname, params);
                    window.history.pushState('byID', 'by ID', historyUrl);
                  }
                });
              },
              renderTitleFilter: function renderTitleFilter(params) {
                if (params['title'] !== undefined) {
                  $('#title-search').val(params['title']).trigger('input');
                }

                this.bindTitleFilter();
              },
              bindTitleFilter: function bindTitleFilter() {
                var that = this;
                $('#title-search').keyup(function (event) {
                  if ($('#title-search').is(":focus") && event.key == "Enter") {
                    var params = that.props.utility.extractParams();
                    params = that.checkUrl(params);

                    if ($("#title-search").val() === '' && params.hasOwnProperty('title')) {
                      delete params['id'];
                    }

                    if ($("#title-search").val() === '' && !params.hasOwnProperty('title')) {//do nothing
                    } else {
                      params['title'] = $('#title-search').val().split('.').join('');
                    }

                    $.get('/api/Chapter2/apis/', params, function (response) {
                      $("#dataListTable").DataTable().clear().destroy();
                      that.props.dataList.getDataList(params);
                    });
                    var historyUrl = that.props.utility.buildUrl(window.location.pathname, params);
                    window.history.pushState('byTitle', 'by Title', historyUrl);
                  }
                });
              },
              renderBodyFilter: function renderBodyFilter(params) {
                if (params['body'] !== undefined) {
                  $('#body-search').val(params['body']).trigger('input');
                }

                this.bindBodyFilter();
              },
              bindBodyFilter: function bindBodyFilter() {
                var that = this;
                $('#body-search').keyup(function (event) {
                  if ($('#body-search').is(":focus") && event.key == "Enter") {
                    var params = that.props.utility.extractParams();
                    params = that.checkUrl(params);

                    if ($("#body-search").val() === '' && params.hasOwnProperty('body')) {
                      delete params['id'];
                    }

                    if ($("#body-search").val() === '' && !params.hasOwnProperty('body')) {//do nothing
                    } else {
                      params['body'] = $('#body-search').val().split('.').join('');
                    }

                    $.get('/api/Chapter2/apis/', params, function (response) {
                      $("#dataListTable").DataTable().clear().destroy();
                      that.props.dataList.getDataList(params);
                    });
                    var historyUrl = that.props.utility.buildUrl(window.location.pathname, params);
                    window.history.pushState('byBody', 'by Body', historyUrl);
                  }
                });
              },
              renderStatusFilter: function renderStatusFilter(params) {
                if (params['status[]'] !== undefined) {
                  $('#status-dropdown').val(params['status[]']);
                }

                this.bindStatusFilter();
              },
              bindStatusFilter: function bindStatusFilter(params) {
                var that = this;
                $('.status').dropdown({
                  onChange: function onChange() {
                    var params = that.props.utility.extractParams();
                    params = that.checkUrl(params);

                    if ($("#status-dropdown").dropdown('get values') === '' && params.hasOwnProperty('status')) {
                      delete params['status'];
                    }

                    if ($("#status-dropdown").dropdown('get values') === '' && !params.hasOwnProperty('status')) {} else {
                      params['status'] = $('#status-dropdown').dropdown('get values');
                    }

                    $.get('/api/Chapter2/apis/', params, function (response) {
                      console.log(params);
                      $("#dataListTable").DataTable().clear().destroy();
                      that.props.dataList.getDataList(params);
                    });
                    var historyUrl = that.props.utility.buildUrl(window.location.pathname, params);
                    window.history.pushState('byStatus', 'by Status', historyUrl);
                  }
                });
              }
            };
            var resultNumberView = {
              props: {
                dataListTable: null
              },
              template: "<p>Menampilkan <%= page %>-<%= limit %> dari <%= length %> Data <%= name %></p>",
              emptyResultTemplate: "<p>Tidak Ada Data <%= name %></p>",
              setContext: function setContext(params, response) {
                var currentPage = this.props.dataListTable.props.currentPage;
                var page = 1;
                var pageSize = 5;

                if (params.hasOwnProperty(limit)) {
                  pageSize = params['limit'];
                }

                var limit = response.data.per_page;

                if (currentPage !== 1) {
                  page = pageSize * (currentPage - 1) + 1;
                  limit = response.data.per_page + page - 1;
                }

                return {
                  length: response.data.total,
                  page: page,
                  limit: limit
                };
              },
              render: function render(params, response) {
                if (response.data.total > 0) {
                  var x = this.setContext(params, response);

                  var t = _.template(this.template);
                } else {
                  var x = this.setContext(params, response);

                  var t = _.template(this.emptyResultTemplate);
                }

                $('#count-list').empty();
                $('#count-list').append(t(x));
              }
            };
            var paginationView = {
              render: function render(response, cls) {
                //var previous;
                if (response.data.prev_page_url == null) {
                  $('.page').empty();
                  $('.page').append('<button class="ui labeled icon button prev" name="previous" id="previous" disabled="disabled">' + '<i class="left chevron icon"></i>' + 'Previous Page' + '</button>' + '<button class="ui right labeled icon button next" name="next" id="next" >' + 'Next Page' + '<i class="right chevron icon"></i>' + '</button>');
                } //var next;


                if (response.data.next_page_url == null) {
                  $('.page').empty();
                  $('.page').append('<button class="ui labeled icon button" name="previous" id="previous">' + '<i class="left chevron icon"></i>' + 'Previous Page' + '</button>' + '<button class="ui right labeled icon button" name="next" id="next" disabled="disabled">' + 'Next Page' + '<i class="right chevron icon"></i>' + '</button>');
                }
              }
            };
            var dataListTableView = {
              props: {
                utility: util,
                currentPage: 1,
                resultNumber: null,
                pagination: null
              },
              render: function render(params, response) {
                $("#data-container").empty();
                var template = $('#data-template').html();
                $('#data-container').append(template);
                var data = response.data.data;
                var dataList = $('#dataListTable').DataTable({
                  data: data,
                  columns: [{
                    title: 'ID',
                    data: "id"
                  }, {
                    title: 'Title',
                    data: "title"
                  }, {
                    title: 'Body',
                    data: "body"
                  }, {
                    title: 'Created',
                    data: "created_at"
                  }, {
                    title: 'Last Updated',
                    data: "updated_at"
                  }, {
                    title: 'Status',
                    data: "status"
                  }, {
                    "targets": -1,
                    "data": "null",
                    "defaultContent": '<button class = "ui icon button" id="delete" data-id=""><i class="delete icon"></i></button>' + '<button class="ui icon button" id="link"><i class="edit outline icon"></i></button>'
                  }],
                  pageLength: 5,
                  scrollX: false,
                  scrollCollapse: false,
                  paging: false,
                  searching: false,
                  orderable: false,
                  bSort: false,
                  info: false,
                  lengthChange: false,
                  retrieve: true
                }).draw();
                this.props.resultNumber.render(params, response);
                this.props.pagination.render(response, this);
                var responsePage = response;
                var that = this;
                $('.page').on('click', '#next', function (e) {
                  e.preventDefault();

                  if (responsePage.data.next_page_url !== null) {
                    var next = that.props.currentPage + 1;
                    that.props.currentPage = that.props.currentPage + 1;
                    params['page'] = next;
                    params['ordering'] = $('#sortBy').val();
                    $.get('/api/Chapter2/apis', params, function (response) {
                      $('#dataListTable').empty();
                      that.render(params, response);
                      that.props.pagination.render(response, that);
                      var nextUrl = that.props.utility.buildUrl(window.location.pathname, params);
                      window.history.pushState('dataList', 'data List', nextUrl);
                    });
                  }
                });
                $('.page').on('click', '#previous', function (e) {
                  e.preventDefault();

                  if (responsePage.data.prev_page_url !== null) {
                    var previous = that.props.currentPage - 1;
                    that.props.currentPage = that.props.currentPage - 1;
                    params['page'] = previous;
                    params['ordering'] = $('#sortBy').val();
                    $.get('/api/Chapter2/apis', params, function (response) {
                      $('#dataListTable').empty();
                      that.render(params, response);
                      that.props.pagination.render(response, that);
                      var previousUrl = that.props.utility.buildUrl(window.location.pathname, params);
                      window.history.pushState('dataList', 'data List', previousUrl);
                    });
                  }
                });
              }
            };
            var dataListView = {
              props: {
                utility: util,
                filter: filterView,
                dataListTable: dataListTableView,
                resultNumber: resultNumberView,
                pagination: paginationView
              },
              bindSortDropdown: function bindSortDropdown(params) {
                var that = this;
                $(document).on('change', '#sortBy', function (e) {
                  var params = that.props.utility.extractParams();
                  params['ordering'] = $('#sortBy').val();

                  if (!params.hasOwnProperty('page')) {
                    params['page'] = 1;
                  }

                  that.props.dataListTable.props.currentPage = params['page'];
                  params = that.props.filter.checkUrl(params);
                  $.get('/api/Chapter2/apis/', params, function (response) {
                    that.props.dataListTable.render(params, response);
                  });
                  var historyUrl = that.props.utility.buildUrl(window.location.pathname, params);
                  window.history.pushState('dataListSorted', 'data List Sorted', historyUrl);
                });
              },
              renderSortDropdown: function renderSortDropdown(params) {
                $('#sortBy').val(params['ordering']);
              },
              bindRowDropdown: function bindRowDropdown(params) {
                var that = this;
                $(document).on('change', '#RowLimit', function (e) {
                  var params = that.props.utility.extractParams();
                  params['limit'] = $('#RowLimit').val();
                  params['page'] = 1;
                  that.props.dataListTable.props.currentPage = params['page'];
                  params = that.props.filter.checkUrl(params);
                  $.get('/api/Chapter2/apis/', params, function (response) {
                    that.props.dataListTable.render(params, response);
                    var limit = params['limit'];
                  });
                  console.log(params);
                  var historyUrl = that.props.utility.buildUrl(window.location.pathname, params);
                  window.history.pushState('RowLimit', 'Row Limit', historyUrl);
                });
              },
              renderRowDropdown: function renderRowDropdown(params) {
                $('#RowLimit').val(params['limit']);
              },
              getDataList: function getDataList(params) {
                var that = this;
                $.get('/api/Chapter2/apis/', params, function (response) {
                  that.props.dataListTable.render(params, response);
                });
              },
              buildParams: function buildParams(params) {
                if (!params.hasOwnProperty('page')) {
                  params['page'] = 1;
                }

                this.props.dataListTable.props.currentPage = params['page'];

                if (!params.hasOwnProperty('ordering')) {
                  params['ordering'] = 'id';
                }

                if (!params.hasOwnProperty('limit')) {
                  params['limit'] = 5;
                }

                return params;
              },
              initialize: function initialize() {
                this.props.filter.props.dataListTable = this.props.dataListTable;
                this.props.filter.props.dataList = this;
                this.props.resultNumber.props.dataListTable = this.props.dataListTable;
                this.props.dataListTable.props.resultNumber = this.props.resultNumber;
                this.props.dataListTable.props.pagination = this.props.pagination;
                this.bindSortDropdown();
                this.bindRowDropdown();
              },
              render: function render() {
                console.log('cek');
                this.initialize();
                var params = this.props.utility.extractParams();
                params = this.buildParams(params);
                this.getDataList(params);
                this.props.filter.render(params);
                this.renderSortDropdown(params);
                this.renderRowDropdown(params);
              }
            };
            dataListView.render();
          }
        });
      });
    }
  }]);

  return Datalist;
}();



/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./resources/js/Chapter2/view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ciheul-development/Projects/www/training-2020-batch-i/resources/js/Chapter2/view.js */"./resources/js/Chapter2/view.js");


/***/ })

/******/ });