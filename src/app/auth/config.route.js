(function() {
    'use strict';
    
    angular
        .module('app.auth') 
        .config(configFunction)
    
    configFunction.$inject = ['$routeProvider']; 
    
    function configFunction($routeProvider){
        $routeProvider.when('/register', {  
           templateUrl: 'app/auth/register.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/login', {
            templateUrl: 'app/auth/login.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        });
        //this means when you go to the login page, you're going to use the AuthController and access properties on the auth controller using vm
    }
})();