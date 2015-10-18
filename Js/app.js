angular.module("app", ["ngRoute"]).config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/coop3', {
                templateUrl: 'COOP3000/intro.html'
            }).
            when('/coop3/LESS_Variables', {
                templateUrl: 'COOP3000/LESS_Variables.html'
            }).
            when('/coop3/LESS_Nesting', {
                templateUrl: 'COOP3000/LESS_Nesting.html'
            }).
            when('/coop3/LESS_Mixins', {
                templateUrl: 'COOP3000/LESS_Mixins.html'
            }).
            when('/coop3/Ossibus', {
                templateUrl: 'COOP3000/Ossibus.html'
            }).
            when('/', {
                templateUrl: 'home.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);