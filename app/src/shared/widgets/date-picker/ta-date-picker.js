(function () {
    'use strict';

    angular
        .module('app')
        .directive('taDatePicker', taDatePicker);

    taDatePicker.$inject = [];

    function taDatePicker () {
        return {
            restrict: 'E',
            templateUrl: 'src/shared/widgets/date-picker/ta-date-picker.html',
            scope: {},
            bindToController: {
                dateValue: '='
            },
            controller: TaDatePickerController,
            controllerAs: 'taDatePicker'
        };
    }

    TaDatePickerController.$inject = [];

    function TaDatePickerController () {
        var ctrl = this;

        ctrl.isDatePickerOpen = false;

        ctrl.toggleDatePicker = toggleStartPicker;

        function toggleStartPicker () {
            ctrl.isDatePickerOpen = !ctrl.isDatePickerOpen;
        }
    }
})();
