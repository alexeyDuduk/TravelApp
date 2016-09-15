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
            link: link,
            scope: {},
            bindToController: {
                startDate: '=',
                endDate: '='
            },
            controller: taDatesIntervalInputController,
            controllerAs: 'taDatesIntervalInput'
        };

        function link () {
        }
    }

    taDatesIntervalInputController.$inject = [];

    function taDatesIntervalInputController () {
    }
})();
