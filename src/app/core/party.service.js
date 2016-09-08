(function(){
    'use strict';
    
    angular
        .module('app.core')
        .factory('partyService', partyService); //factory is different than constant and used for configurable objects. constant is used for constants
    
    partyService.$inject = ['$firebaseArray', 'firebaseDataService'];
    
    function partyService($firebaseArray, firebaseDataService) {
        
        var service = {
            Party: Party,
            getPartiesByUser: getPartiesByUser
        };
        
        return service;
        
        function Party() {  //constructor to make party objects - capitalized by convention
            this.name = ''; //each object will have a name thats a string
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false; //true or false depending on sending a text message
        }
        
        function getPartiesByUser(uid) {
            return $firebaseArray(firebaseDataService.users.child(uid).child('parties'));
        }
    }
    
})();