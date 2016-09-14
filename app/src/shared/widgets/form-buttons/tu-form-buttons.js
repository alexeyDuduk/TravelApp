(function () {
    'use strict';

    angular
        .module('app')
        .directive('tuFormButtons', tuFormButtons);

    tuFormButtons.$inject = [];

    function tuFormButtons () {
        return {
            restrict: 'E',
            templateUrl: 'src/shared/widgets/form-buttons/tu-form-buttons.html',
            link: link,
            scope: {},
            bindToController: {
                onSubmitButtonClick: '&',
                onCancelButtonClick: '&',
                canSubmit: '&'
            },
            controller: tuFormButtonsController,
            controllerAs: 'tuFormButtons'
        };
    }
    
    function link (scope, element, attrs) {
        if (!attrs.onSubmitButtonClick || !attrs.onCancelButtonClick) {
            throw new Error("tu-form-buttons requires 'on-submit-button-click' and 'on-cancel-button-click'");
        }
    }

    tuFormButtonsController.$inject = [];

    function tuFormButtonsController () {
    }
})();
