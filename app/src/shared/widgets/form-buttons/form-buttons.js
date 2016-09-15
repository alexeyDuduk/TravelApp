(function () {
    'use strict';

    angular
        .module('app')
        .directive('taFormButtons', taFormButtons);

    taFormButtons.$inject = [];

    function taFormButtons () {
        return {
            restrict: 'E',
            templateUrl: 'src/shared/widgets/form-buttons/form-buttons.html',
            link: link,
            scope: {},
            bindToController: {
                onSubmitButtonClick: '&',
                onCancelButtonClick: '&',
                canSubmit: '&'
            },
            controller: FormButtonsController,
            controllerAs: 'formButtons'
        };
    }
    
    function link (scope, element, attrs) {
        if (!attrs.onSubmitButtonClick || !attrs.onCancelButtonClick) {
            throw new Error("Directive 'ta-form-buttons' requires attributes 'on-submit-button-click', 'on-cancel-button-click'.");
        }
    }

    FormButtonsController.$inject = [];

    function FormButtonsController () {
    }
})();
