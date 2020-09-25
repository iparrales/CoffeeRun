(function (window){
    'use strict';
    
    //local variable App
    var App = window.App || {};
    
    class DataStore {
        constructor(){
            this.data = {};
        }
       add(key,val) {this.data[key] = val;}
       get(key) {return this.data[key];}
       getAll() {return this.data;}
       remove(key) {delete this.data[key];}     
    }
    
    //Attach DataStore to the App object
    App.DataStore = DataStore;
    window.App = App;
}) (window);

//on page 191 aka 171
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// (function (window){
//     'use strict';
    
//     //local variable App
//     var App = window.App || {};
    
//     function DataStore() {
//        this.data = {};
//     }

//     DataStore.prototype.add = function (key, val) {
//         this.data[key] = val;
//     };

//     DataStore.prototype.get = function (key) {
//         return this.data[key];
//     };

//     DataStore.prototype.getAll = function () {
//         return this.data;
//     };

//     DataStore.prototype.remove = function (key) {
//         delete this.data[key];
//     };

//     //Attach DataStore to the App object
//     App.DataStore = DataStore;
//     window.App = App;
// }) (window);

// //on page 191 aka 171