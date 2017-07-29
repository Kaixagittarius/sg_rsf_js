var app = angular.module('sg_rsf_js', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) { 
    $routeProvider
    //.when("/", {
    //    templateUrl : 'index.html'
    //})
    .when("/red", {
        templateUrl : 'index.html'
    })
    .when("/about", {
        templateUrl : 'views/about.html'
    })
    .when("/blue", {
        templateUrl : 'views/about.html'
    });

    $locationProvider.html5Mode(true);
});