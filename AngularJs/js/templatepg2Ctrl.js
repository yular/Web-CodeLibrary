templateVar
        .config(['$httpProvider', function($httpProvider) {
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                $httpProvider.defaults.useXDomain = true;
        }])
        .controller('templatepg2Ctrl', ['$scope', '$http', 'templateRESTFULService', '$location', '$filter', function($scope, $http, templateRESTFULService, $location, $filter) {
                var init = function () {

                }

                init();

        }]);


