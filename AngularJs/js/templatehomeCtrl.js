templateVar
 .config(['$httpProvider', function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
       	$httpProvider.defaults.useXDomain = true;
  }])
  .controller('templatehomeCtrl', ['$scope', '$http', function($scope, $http) {
	var init = function () {

	}

	init();

   }]);

