(function (window) {
    'use strict';

    //local variable App
    var App = window.App || {};

    class DataStore {
        constructor() {
            this.data = {};
        }
        add(key, val) {
            this.data[key] = val;
        }
        get(key) {
            return this.data[key];
        }
        getAll() {
            return this.data;
        }
        remove(key) {
            delete this.data[key];
        }
    }

    //Attach DataStore to the App object
    App.DataStore = DataStore;
    window.App = App;
})(window);