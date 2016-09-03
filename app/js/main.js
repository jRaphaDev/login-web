

var app = angular.module('app', ['ngRoute', 'ui.grid', 'ui.grid.selection', 'ui.grid.resizeColumns',  'ui.grid.treeView']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'app/modules/login/login.html',
            controller : 'loginController'
        })
        .otherwise({     
            redirectTo: '/'
        });
        
})

app.controller('loginController', function ($scope, $http, $route) {
    
    $scope.logar = (function(){

        console.log(":D");
    
    });

});
