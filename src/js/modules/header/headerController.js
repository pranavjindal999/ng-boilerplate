(function(angular) {

   angular.module('moduleName').controller('headerController', headerController);

   headerController.$inject = ['$scope', '$rootScope'];

   function headerController($scope, $rootScope){
   		var headerVm = this;

   		headerVm.test = "App Started";
   }

})(window.angular);