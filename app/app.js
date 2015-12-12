'use strict';

// Declare app level module which depends on views, and components
var hackerEarthApp = angular.module('hackerEarthApp',['ngRoute','ngResource','angular-cache','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/problemsDetails',
    {
        templateUrl:'/app/problemsDetails/problemsDetails.html',

    });
  $routeProvider.otherwise({redirectTo: '/problemsDetails'});



}])
