(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;

    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addPayHandler();

})(window);