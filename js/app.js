var app = angular.module('PolitrapApp', []);
app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: "./views/home.html",
        controller: "HomeController"
    }).when('/about', {
        templateUrl: "./views/about.html",
        controller: "AboutController"
    }).when('/signin', {
        templateUrl: "./views/signin.html",
        controller: "SigninController"
    }).when('/signup', {
        templateUrl: "./views/signup.html",
        controller: "SignupController"
    }).otherwise({
        redirectTo: '/'
    })
});
