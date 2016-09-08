//is going to tell a page to load when you go to app/domain/waitlist
(function() {
    'use strict';
    
    angular
        .module('app.waitList') //this statement will return the app.Waitlist module
        .config(configFunction)
    
    configFunction.$inject = ['$routeProvider']; //makes anything in the routeprovider array (taken from angularroute) available to the configfunction with the inject tool
    
    function configFunction($routeProvider){
        $routeProvider.when('/waitlist', {  //the when method (from routeprovider) takes the url and an object (path to an HTML object that will load when you access the URL)
            templateUrl: 'app/waitList/waitList.html',
            controller: 'WaitListController',
            controllerAs: 'vm',
            resolve: {user: resolveUser} //Controller&page will only load if the function resolves successfully - in which case user will be set to the return value of resolved data. if promise is rejected then nothing will happen and the controller won't load.
        }); 
    }
    
    resolveUser.$inject = ['authService'];
    
    function resolveUser(authService) {
        return authService.firebaseAuthObject.$requireAuth(); //if user is logged in, will return logged in user. otherwise rejects promise and route won't load.
        
    }
    
})();

//cool vernacular: the controller will only instantiate if the promise resolves