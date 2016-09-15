(function () {
    'use strict';

    angular
        .module('app')
        .directive('taDatesIntervalInput', taDatesIntervalInput);

    taDatesIntervalInput.$inject = [];

    function taDatesIntervalInput () {
        return {
            restrict: 'E',
            templateUrl: 'src/shared/widgets/dates-interval-input/ta-dates-input-interval.html',
            scope: {},
            bindToController: {
                startDate: '=',
                endDate: '='
            },
            controller: taDatesIntervalInputController,
            controllerAs: 'taDatesIntervalInput'
        };
    }

    taDatesIntervalInputController.$inject = [];

    function taDatesIntervalInputController () {
    }
})();
