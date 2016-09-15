(function () {
    'use strict';

    angular
        .module('app')
        .filter('taRange', taRange);

    taRange.$inject = [];

    function taRange () {
        return function (value, range) {
            var rangeValue = parseInt(range);

            for (var index = 0; index < rangeValue; index++) {
                value.push(0);
            }

            return value;
        }
    }
})();
