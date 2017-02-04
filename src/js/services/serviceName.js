(function(angular) {

   angular.module('moduleName').service('serviceName', serviceFn);

   serviceFn.$inject = ['$http'];

   function serviceFn($http){

   }

})(window.angular);