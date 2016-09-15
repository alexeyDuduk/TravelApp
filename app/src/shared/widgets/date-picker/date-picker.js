(function () {
    'use strict';

    angular
        .module('app')
        .directive('taDatePicker', taDatePicker);

    taDatePicker.$inject = [];

    function taDatePicker () {
        return {
            restrict: 'E',
            templateUrl: 'src/shared/widgets/date-picker/date-picker.html',
            link: link,
            scope: {},
            bindToController: {
                dateValue: '='
            },
            controller: DatePickerController,
            controllerAs: 'datePicker'
        };

        function link (scope, element, attrs) {
            if (!attrs.dateValue) {
                throw new Error("Directive 'ta-date-picker' requires attribute 'date-value'.");
            }
        }
    }

    DatePickerController.$inject = [];

    function DatePickerController () {
        var ctrl = this;

        ctrl.isDatePickerOpen = false;

        ctrl.toggleDatePicker = toggleStartPicker;

        function toggleStartPicker () {
            ctrl.isDatePickerOpen = !ctrl.isDatePickerOpen;
        }
    }
})();
