'use strict';

// module declaration
angular.module('startpageModule', []);
angular.module('aboutModule', []);
angular.module('designerModule', []);
angular.module('confirmAccountModule', []);

angular.module('feedMeMainApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'startpageModule',
    'aboutModule',
    'confirmAccountModule',
    'designerModule'
])


.config(['$routeProvider', '$httpProvider', '$mdThemingProvider', function ($routeProvider, $httpProvider, $mdThemingProvider) {
    $routeProvider
        .when('/startpage', {
            controller: 'startpageController',
            templateUrl: 'routes/startpage/startpage.html'
        })

        .when('/about', {
            controller: 'aboutController',
            templateUrl: 'routes/about/about.html'
        })

        .when('/confirmaccount/:confirmationResult', {
            controller: 'confirmAccountController',
            templateUrl: 'routes/confirmAccount/confirmAccount.html'
        })

        .when('/designer', {
            controller: 'designerController',
            templateUrl: 'routes/designer/designer.html'
        })

        .otherwise({ redirectTo: '/startpage' });

    
    $mdThemingProvider.theme('default')


        .primaryPalette('blue', {
            'default': '100', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
        .accentPalette('deep-orange', {
            'default': '300', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        });
}])


.run(['$rootScope', '$log',
    function ($rootScope, $log) {

        //Putting $log to $rootscope to give access  from all parts of the app//
        $rootScope.$log = $log;
        $rootScope.$log.log('Modul: feedMeMainApp - .run - Entered');

        // Place to store access token globally
        $rootScope.oauth = {
        };


    }])


.directive('helloWorld', function () {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'questions.html'
        //  template: '<h3>{{item.Titel}}lolololo</h3>'
    };
})

.directive('pageheader', function () {
    return {
        restrict: 'A', 
        replace: true,
        scope: { page: '=' },
        templateUrl: "directives/pageHeader/pageHeader.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    };
})



