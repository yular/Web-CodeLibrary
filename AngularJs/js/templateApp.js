var templateVar = angular.module('templateApplication', ['ngResource', 'ngRoute', 'ngAnimate']);

templateVar.factory('templateRESTFULService', ['$resource', function($resource) {

}]);

templateVar.run(['$rootScope', function($rootScope){

}]);

templateVar.config(['$routeProvider', function($routeProvider, $locationProvider){

    $routeProvider
        .when('/', {
	    templateUrl: 'pages/templatehome.html',
	    controller: 'templatehomeCtrl'
	})
	.when('/tmppg1', {
            templateUrl: 'pages/templatepage1.html',
            controller: 'templatepg1Ctrl'
        })
	.when('/tmppg2', {
            templateUrl: 'pages/templatepage2.html',
            controller: 'templatepg2Ctrl'
        })
	.otherwise({
	    templateUrl: 'pages/404.html'
	});
}]);

