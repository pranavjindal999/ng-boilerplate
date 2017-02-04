(function(angular) {

    angular.module('moduleName', ['ui.router']);

    angular.module('moduleName').config(configFn);

    configFn.$inject = ['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider', '$locationProvider'];

    function configFn($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('empty', {
                url: '/',
                views: {
                    "header": {
                        templateUrl: "src/js/modules/header/header.html",
                        controller: 'headerController',
                        controllerAs: 'headerVm'
                    },
                    "footer": {
                        templateUrl: "src/js/modules/footer/footer.html"
                    }
                }
            });

        $urlMatcherFactoryProvider.caseInsensitive(true);
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
    }

})(window.angular);
