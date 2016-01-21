'use strict';

// module declaration
angular.module('startpageModule', []);

angular.module('feedMeMainApp', [
    'ngRoute',
    'startpageModule'
])


.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/startpage', {
            controller: 'startpageController',
            templateUrl: 'routes/startpage/startpage.html'
        })

        //.when('/account', {
        //    controller: 'AccountController',
        //    templateUrl: 'modules/account/views/account.html'
        //})


        //.when('/', {
        //    controller: 'HomeController',
        //    templateUrl: 'modules/home/views/home.html'
        //})

        .otherwise({ redirectTo: '/startpage' });
}])