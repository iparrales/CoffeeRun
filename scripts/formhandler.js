(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class FormHandler {
        constructor(selector) {
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector:' + selector);
            }
        }

        addSubmitHandler(fn) {
            console.log('Setting submit handler for form');
            this.$formElement.on('submit', function (event) {
                event.preventDefault();

                var data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                console.log(data);
                fn(data);
                //console.log('Thanks for the payment');
                this.reset();
                this.elements[0].focus();
            });
        }


        addPayHandler() {
            console.log('Setting payment handler for form');
            this.$formElement.on('submit', function (event) {
                event.preventDefault();

                var data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                console.log(data);
                var payment_info = "Thank you for your order " + data.title + " " + data.username;
                $("#confirm p").text(payment_info);
                $("#confirm").modal("show");
                console.log('Thanks for the payment');
                this.reset();
                this.elements[0].focus();
            });

        }

    }
    App.FormHandler = FormHandler;
    window.App = App;
})(window);