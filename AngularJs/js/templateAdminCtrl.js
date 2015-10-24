templateVar
 .config(['$httpProvider', function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.useXDomain = true;
  }])
 .controller('templateAdminCtrl', ['$scope', '$http', function($scope, $http) {
        var init = function () {

        }

        init();

   }]);

