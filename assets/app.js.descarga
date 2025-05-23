var APIurl = 'http://localhost:8090/ma-bioetica/';
var coursesRoutingApp = angular.module('CoursesApp', ['ngRoute', 'ngSanitize']);

coursesRoutingApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'templates/index.html',
            controller: 'indexController'
        })
        .when('/:page', {
            templateUrl: 'templates/content.html',
            controller: 'pagesController'
        })
        .when('/:unit/:page', {
            templateUrl: 'templates/content.html',
            controller: 'introductionController'
        })
        .when('/:unit/:theme/:page', {
            templateUrl: 'templates/content.html',
            controller: 'contentController'
        })
        .when('/:unit/:track/:theme/:page', {
            templateUrl: 'templates/content.html',
            controller: 'trackContentController'
        })
        .when('/404', {
            templateUrl: 'templates/404.html',
            controller: '404Controller'
        })
        .otherwise({
            redirectTo: '/404'
        });
});

coursesRoutingApp.controller('indexController', function ($scope, $routeParams, $http, $sce) {
    const getRoute = APIurl;
    getTemplate($scope, $sce, $http, getRoute);
});

coursesRoutingApp.controller('pagesController', function ($scope, $routeParams, $http, $sce) {
    const getRoute = APIurl + $routeParams.page;
    getTemplate($scope, $sce, $http, getRoute);
});

coursesRoutingApp.controller('introductionController', function ($scope, $routeParams, $http, $sce) {
    const getRoute = APIurl + $routeParams.unit + '/' + $routeParams.page;
    getTemplate($scope, $sce, $http, getRoute);
});

coursesRoutingApp.controller('contentController', function ($scope, $routeParams, $http, $sce) {
    const getRoute = APIurl + $routeParams.unit + '/' + $routeParams.theme + '/' + $routeParams.page;
    getTemplate($scope, $sce, $http, getRoute);
});

coursesRoutingApp.controller('trackContentController', function ($scope, $routeParams, $http, $sce) {
    const getRoute = APIurl + $routeParams.unit + '/' + $routeParams.track + '/' + $routeParams.theme + '/' + $routeParams.page;
    getTemplate($scope, $sce, $http, getRoute);
});

coursesRoutingApp.controller('404Controller', function ($scope, $http) {

});


function getTemplate($scope, $sce, $http, getRoute){
    $http.get(getRoute).then(function (response) {
        $scope.view = function () {
            loadFunctions();
            return $sce.trustAsHtml(response.data.template);
        };
    })
    .catch(function (err) {
        console.log(err);
    });
}