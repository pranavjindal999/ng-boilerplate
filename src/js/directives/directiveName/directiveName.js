(function(angular) {

    angular.module('moduleName').directive('directiveName', directiveFn);

    function directiveFn() {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'src/js/directives/directiveName/directiveName.html',
            controller:  controllerFn,
            controllerAs: 'directiveNameVm'
        };
    }

    controllerFn.$inject =['$scope', '$rootScope'];
    
    function controllerFn($scope, $rootScope){

    }


})(window.angular);
