(function() {
    'use strict';
    
    angular
        .module('app.landing') //this statement will return the app.landing module
        .config(configFunction)
    
    configFunction.$inject = ['$routeProvider']; //makes anything in the routeprovider array (taken from angularroute) available to the configfunction with the inject tool
    
    function configFunction($routeProvider){
        $routeProvider.when('/', {  //the when method (from routeprovider) takes the url and an object (path to an HTML object that will load when you access the URL)
           templateUrl: 'app/landing/landing.html' 
        }); 
        //this means you're going to go to the landing page when the index html is accessed
    }
})();