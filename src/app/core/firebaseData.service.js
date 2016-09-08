(function() {
    'use strict';
    
    angular
        .module('app.core')
        .factory('firebaseDataService', firebaseDataService); //adds a function called firebaseDataService to the service called firebaseDataService
    
    firebaseDataService.$inject = ['FIREBASE_URL']; //injects the URL service to this service
    
    function firebaseDataService(FIREBASE_URL)  {
        var root = new Firebase(FIREBASE_URL);
        
        var service = {
            root: root,
            users: root.child('users'),
            textMessages: root.child('textMessages') //refers to a child inside the firebase instance that was just defined
        };
        
        return service;
    }
})();

//this service creates a new firebase array from our peronsal firebase account