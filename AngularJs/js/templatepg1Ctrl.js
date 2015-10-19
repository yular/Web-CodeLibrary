templateVar
        .config(['$httpProvider', function($httpProvider) {
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                $httpProvider.defaults.useXDomain = true;
        }])
        .controller('templatepg1Ctrl', ['$scope', '$http', 'templateRESTFULService', '$interval', function($scope, $http, templateRESTFULService, $interval) {
                var init = function () {

                }

                init();

        }]);


