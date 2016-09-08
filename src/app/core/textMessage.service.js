(function() {
    'use strict';
    
    angular
        .module('app.core')
        .factory('textMessageService', textMessageService);
    
    textMessageService.$inject = ['firebaseDataService'];
    
    function textMessageService(firebaseDataService)   {
        var service = {
            sendTextMessage: sendTextMessage
        };
        
        return service;
        
        function sendTextMessage(party, parties)  { //vm.parties will be passed into the function as parties
        var newTextMessage = {
                phoneNumber: party.phone,
                size: party.size,
                name: party.name
            };
            firebaseDataService.textMessages.push(newTextMessage); //calls an instance of the text messages portion of the firebase array and pushes a new item to it
            party.notified = true;
            parties.$save(party); //saves the party data in the firebase array  
        }
    }
})();