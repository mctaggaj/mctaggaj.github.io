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
      templateUrl: 'COOP5000/iccid-creator.html',
      controller: "iccid-creator"
    }).
    when('/coop5/iccid', {
      templateUrl: 'COOP5000/iccid-creator.html',
      controller: "iccid-creator"
    }).
    when('/coop5', {
      templateUrl: 'COOP5000/intro.html'
    }).
    when('/coop5/first-impression', {
      templateUrl: 'COOP5000/first-impression.html'
    }).
    when('/coop5/organizational-structure', {
      templateUrl: 'COOP5000/organizational-structure.html'
    }).
    when('/coop5/header-bidding-the-what', {
      templateUrl: 'COOP5000/hb-what.html'
    }).
    when('/coop5/header-bidding-the-alternative', {
      templateUrl: 'COOP5000/waterfall.html'
    }).
    when('/coop5/header-bidding-optimization', {
      templateUrl: 'COOP5000/hb-optimization.html'
    }).
    when('/coop5/ab-testing', {
      templateUrl: 'COOP5000/ab-testing.html'
    }).
    when('/coop5/pull-requests', {
      templateUrl: 'COOP5000/pull-requests.html'
    }).
    when('/coop5/wrapup', {
      templateUrl: 'COOP5000/wrapup.html'
    }).
    when('/', {
      templateUrl: 'home.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
