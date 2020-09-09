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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/my_app.js":
/*!********************************!*\
  !*** ./resources/js/my_app.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var results = $('#results').DataTable({
    processing: true,
    serverSide: true,
    lengthMenu: [10, 25, 50],
    searching: false,
    ordering: false,
    language: {
      "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Ukrainian.json"
    },
    responsive: true,
    columns: [{
      name: "name",
      className: "table-text-align-center",
      width: "75%"
    }, {
      name: "actions",
      className: "table-text-align-center",
      width: "25%"
    }],
    ajax: {
      url: '/api/results/get',
      type: "GET"
    }
  });
  var people = $('#people').DataTable({
    processing: true,
    serverSide: true,
    lengthMenu: [10, 25, 50],
    searching: false,
    ordering: false,
    language: {
      "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Ukrainian.json"
    },
    responsive: true,
    columns: [{
      name: "name",
      className: "table-text-align-center",
      width: "50%"
    }, {
      name: "cache",
      className: "table-text-align-center",
      width: "25%"
    }, {
      name: "actions",
      className: "table-text-align-center",
      width: "25%"
    }],
    ajax: {
      url: '/api/people/get',
      type: "GET"
    }
  });

  function closeModal(ids) {
    $.each(ids, function (index, value) {
      $(value).val(' ');
    });
  }

  $('.closeButton').click(function () {
    closeModal(['#reasonName', '#reasonNameEdit', '#peopleNameAdd', '#peopleCacheAdd', '#peopleNameEdit', '#peopleCacheEdit']);
  });
  $('#addReasonModal').click(function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/results/add',
      data: {
        name: function name() {
          return $('#reasonName').val();
        }
      }
    }).then(function (response) {
      results.ajax.reload();

      if (!response) {
        Swal.fire({
          title: 'Результат не додано',
          text: 'Нерпавильно заповнені поля',
          type: 'error',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Результат додано',
          type: 'info',
          confirmButtonText: 'OK'
        });
      }
    });
    $('.closeButton').click();
  });
  $('#addPeopleModal').click(function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/people/add',
      data: {
        name: function name() {
          return $('#peopleNameAdd').val();
        },
        cash: function cash() {
          return $('#peopleCacheAdd').val();
        }
      }
    }).then(function (response) {
      results.ajax.reload();

      if (!response) {
        Swal.fire({
          title: 'Людину не додано',
          text: 'Нерпавильно заповнені поля',
          type: 'error',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Людину додано',
          type: 'info',
          confirmButtonText: 'OK'
        });
      }
    });
    $('.closeButton').click();
    people.ajax.reload();
  });
  $('body').on('click', '.editReason', function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/results/single-reason',
      data: {
        item: $(this).attr('data-item')
      }
    }).then(function (response) {
      if (!response) {
        Swal.fire({
          title: 'Помилка',
          text: 'Не чудіть',
          type: 'error',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      } else {
        $('#reasonNameEdit').val(response.name);
        $('#editReasonModal').attr('data-item', response.id);
      }
    });
  });
  $('body').on('click', '.editPeople', function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/people/single',
      data: {
        item: $(this).attr('data-item')
      }
    }).then(function (response) {
      if (!response) {
        $('.closeButton').click();
        Swal.fire({
          title: 'Помилка',
          text: 'Не чудіть',
          type: 'error',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      } else {
        $('#peopleNameEdit').val(response.name);
        $('#peopleCacheEdit').val(response.cash);
        $('#editPeopleModal').attr('data-item', response.id);
      }
    });
  });
  $('body').on('click', '.deletePeople', function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/people/delete/' + $(this).attr('data-item')
    }).then(function (response) {
      if (!response) {
        Swal.fire({
          title: 'Помилка',
          text: 'Не чудіть',
          type: 'error',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Видалено',
          text: 'Користувача видалено',
          type: 'info',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      }

      people.ajax.reload();
    });
  });
  $('body').on('click', '.deleteReason', function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/results/delete/' + $(this).attr('data-item')
    }).then(function (response) {
      if (!response) {
        Swal.fire({
          title: 'Помилка',
          text: 'Не чудіть',
          type: 'error',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Видалено',
          text: 'Результат видалено',
          type: 'info',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      }

      results.ajax.reload();
    });
  });
  $('#editPeopleModal').click(function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/people/update/' + $(this).attr('data-item'),
      data: {
        name: function name() {
          return $('#peopleNameEdit').val();
        },
        cash: function cash() {
          return $('#peopleCacheEdit').val();
        }
      }
    }).then(function (response) {
      results.ajax.reload();

      if (!response) {
        Swal.fire({
          title: 'Дані не змінено',
          text: 'Нерпавильно заповнені поля',
          type: 'error',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Дані змінено',
          type: 'info',
          confirmButtonText: 'OK'
        });
      }
    });
    $('.closeButton').click();
    people.ajax.reload();
  });
  $('#reloadName').click(function () {
    if ($('#matchName').val() == "Vika Flex vs Enemy") {
      $('#matchName').val('Enemy vs Vika Flex');
    } else {
      $('#matchName').val('Vika Flex vs Enemy');
    }
  });
  $('body').on('click', '#addOrderFor', function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/booking/add',
      data: {
        name: function name() {
          return $('#matchName').val();
        },
        people: function people() {
          return $('#peopleDev').val();
        },
        reasons: function reasons() {
          return $('#reason').val();
        },
        coef: function coef() {
          return $('#coef').val();
        },
        cash: function cash() {
          return $('#stavka').val();
        }
      }
    }).then(function (response) {
      pastResult.ajax.reload();
      people.ajax.reload();
      realResult.ajax.reload();
      pastResult.ajax.reload();

      if (!response) {
        Swal.fire({
          title: 'Ставка не зроблена',
          text: 'Десь помилка',
          type: 'error',
          confirmButtonColor: '#d33d33',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Ставка зроблена',
          type: 'info',
          confirmButtonText: 'OK'
        });
      }
    });
    $('.closeButton').click();
  });
  var realResult = $('#activeResults').DataTable({
    processing: true,
    serverSide: true,
    lengthMenu: [10, 25, 50],
    searching: false,
    ordering: false,
    language: {
      "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Ukrainian.json"
    },
    responsive: true,
    columns: [{
      name: "a",
      className: "table-text-align-center"
    }, {
      name: "b",
      className: "table-text-align-center"
    }, {
      name: "c",
      className: "table-text-align-center"
    }, {
      name: "d",
      className: "table-text-align-center"
    }, {
      name: "e",
      className: "table-text-align-center"
    }, {
      name: "f",
      className: "table-text-align-center"
    }, {
      name: "g",
      className: "table-text-align-center"
    }, {
      name: "h",
      className: "table-text-align-center"
    }],
    ajax: {
      url: '/api/booking/get',
      type: "GET",
      data: {
        'status': 2
      }
    }
  });
  var pastResult = $('#pastResults').DataTable({
    processing: true,
    serverSide: true,
    lengthMenu: [10, 25, 50],
    searching: false,
    ordering: false,
    language: {
      "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Ukrainian.json"
    },
    responsive: true,
    columns: [{
      name: "a",
      className: "table-text-align-center"
    }, {
      name: "b",
      className: "table-text-align-center"
    }, {
      name: "c",
      className: "table-text-align-center"
    }, {
      name: "d",
      className: "table-text-align-center"
    }, {
      name: "e",
      className: "table-text-align-center"
    }, {
      name: "f",
      className: "table-text-align-center"
    }, {
      name: "g",
      className: "table-text-align-center"
    }, {
      name: "h",
      className: "table-text-align-center"
    }],
    ajax: {
      url: '/api/booking/get',
      type: "GET",
      data: {
        'status': 1
      }
    }
  });
  $('body').on('click', '.yes', function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/booking/result/' + $(this).attr('data-item'),
      data: {
        res: 1
      }
    }).then(function (response) {
      pastResult.ajax.reload();
      people.ajax.reload();
      realResult.ajax.reload();
      pastResult.ajax.reload();
    });
    $('.closeButton').click();
  });
  $('body').on('click', '.no', function () {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/booking/result/' + $(this).attr('data-item')
    }).then(function (response) {
      pastResult.ajax.reload();
      people.ajax.reload();
      realResult.ajax.reload();
      pastResult.ajax.reload();
    });
    $('.closeButton').click();
  });
});

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./resources/js/my_app.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WORK\booking\resources\js\my_app.js */"./resources/js/my_app.js");


/***/ })

/******/ });