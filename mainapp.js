'use strict';

// module declaration
angular.module('startpageModule', []);
angular.module('aboutModule', []);
angular.module('designerModule', []);

angular.module('feedMeMainApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'startpageModule',
    'aboutModule',
    'designerModule'
])


.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {    
    $routeProvider
        .when('/startpage', {
            controller: 'startpageController',
            templateUrl: 'routes/startpage/startpage.html'
        })

        .when('/about', {
            controller: 'aboutController',
            templateUrl: 'routes/about/about.html'
        })

        .when('/designer', {
            controller: 'designerController',
            templateUrl: 'routes/designer/designer.html'
        })

        .otherwise({ redirectTo: '/startpage' });

        //Enable cross domain calls
        //$httpProvider.defaults.useXDomain = true;
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


.directive('helloWorld', function ($compile) {

    var TextTemplate = '<div> Text AA</div>';
    var MultipleChoiceTemplate = '<div> MultipleChoice TTT</div>';
    var JaNeinTemplate = '<div> JaNein BB</div>';

    var getTemplate = function (contentType) {
        var template = '';

        switch (contentType) {
            case 'Text':
                template = TextTemplate;
                break;
            case 'MultipleChoice':
                template = MultipleChoiceTemplate;
                break;
            case 'JaNein':
                template = JaNeinTemplate;
                break;
        }

        return template;
    }


    var linker = function ($scope, element, attrs) {
        
        //element.bind('click', function () {
        //    element.html('You clicked me');
        //});

        element.html(getTemplate("Text"));
        alert($scope.inhalte[1].Titel);
    }


    return {
        restrict: 'E',
        replace: 'true',
        template: '<h3>{{item.Titel}}lolololo</h3>',
        // DOM manipulation //
        //scope: {},
        link: linker
    };

});



//.directive('helloWorld', function () {

//    return {
//        restrict: 'E',
//        replace: 'true',
//        template: '<h3>Hello Worldhihi!!{{vari}}</h3>',
//        // DOM manipulation //
//        link: function ($scope, element, attrs) {
//            element.bind('click', function () {
//                element.html('You clicked me');
//            });
//            element.bind('mouseenter', function () {
//                element.css('background-color', 'yellow');
//            });
//            element.bind('mouseleave', function () {
//                element.css('background-color', 'white');
//            });
//        }
//    };  
//});