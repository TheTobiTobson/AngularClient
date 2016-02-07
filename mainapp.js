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


.directive('helloWorld', function () {        
    return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'questions.html'
          //  template: '<h3>{{item.Titel}}lolololo</h3>'
        };
    });




//.directive('helloWorld', function ($compile) {

//    var TextTemplate = '<div layout="row"><md-content class="borderBlack"><form name="designerForm_No1"><div><md-input-container class="md-block"><label>QUE_text</label><textarea ng-model="inhalte[0].Text" columns="1" md-maxlength="300" rows="5"></textarea></md-input-container></div></form></md-content></div>';
//    var MultipleChoiceTemplate = '<div> MultipleChoice TTT</div>';
//    var JaNeinTemplate = '<div> JaNein BB</div>';

//    var getTemplate = function (contentType) {
//        var template = '';

//        switch (contentType) {
//            case 'Text':
//                template = TextTemplate;
//                break;
//            case 'MultipleChoice':
//                template = MultipleChoiceTemplate;
//                break;
//            case 'JaNein':
//                template = JaNeinTemplate;
//                break;
//        }

//        return template;
//    }


//    var linker = function ($scope, element, attrs) {        
       
//        // Isolated Scope //
//        element.html(getTemplate($scope.content.Type));
       
//        // Normal scope //
//        //element.html(getTemplate($scope.inhalte[0].Type));

//        $compile(element.contents())($scope);
//    }


//    return {
//        restrict: 'E',
//        replace: 'true',
//       // template: '<h3>{{item.Titel}}lolololo</h3>',
//        scope: {
//            content:'='
//        },
//        link: linker
//    };

//});



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