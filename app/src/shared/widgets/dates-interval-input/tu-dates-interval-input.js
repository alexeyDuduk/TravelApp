(function () {
    'use strict';

    angular
        .module('app')
        .directive('tuDatesIntervalInput', tuDatesIntervalInput);

    tuDatesIntervalInput.$inject = [];

    function tuDatesIntervalInput () {
        return {
            restrict: 'E',
            templateUrl: 'src/shared/widgets/dates-interval-input/tu-dates-input-interval.html',
            link: link,
            scope: {},
            bindToController: {
                startDate: '=',
                endDate: '='
            },
            controller: TuDatesIntervalInputController,
            controllerAs: 'tuDatesIntervalInput'
        };

        function link () {
        }
    }

    TuDatesIntervalInputController.$inject = [];

    function TuDatesIntervalInputController () {
    }
})();
