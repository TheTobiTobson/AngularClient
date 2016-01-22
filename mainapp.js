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


.config(['$routeProvider', function ($routeProvider) {

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
}])


.run(['$rootScope', '$log',
    function ($rootScope, $log) {

        //Putting $log to $rootscope to give access  from all parts of the app//
        $rootScope.$log = $log;
        $rootScope.$log.log('Modul: feedMeMainApp - .run - Entered');
      
    }]);