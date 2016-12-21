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
    when('/coop4/iccid', {
      templateUrl: 'COOP4000/iccid-creator.html',
      controller: "iccid-creator"
    }).
    when('/coop4', {
      templateUrl: 'COOP4000/intro.html'
    }).
    when('/coop4/first-impression', {
      templateUrl: 'COOP4000/first-impression.html'
    }).
    when('/coop4/organizational-structure', {
      templateUrl: 'COOP4000/organizational-structure.html'
    }).
    when('/coop4/header-bidding-the-what', {
      templateUrl: 'COOP4000/hb-what.html'
    }).
    when('/coop4/header-bidding-the-alternative', {
      templateUrl: 'COOP4000/waterfall.html'
    }).
    when('/coop4/header-bidding-optimization', {
      templateUrl: 'COOP4000/hb-optimization.html'
    }).
    when('/coop4/ab-testing', {
      templateUrl: 'COOP4000/ab-testing.html'
    }).
    when('/coop4/pull-requests', {
      templateUrl: 'COOP4000/pull-requests.html'
    }).
    when('/coop4/wrapup', {
      templateUrl: 'COOP4000/wrapup.html'
    }).
    when('/', {
      templateUrl: 'home.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
