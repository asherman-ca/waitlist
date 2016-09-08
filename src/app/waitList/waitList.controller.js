//javascript that control behavior of page. in this case loading the data that is needed for the page. Also can be used to handle user interactions.
(function(){
    'use strict';
    
    angular     //grabs an angular object and accesses the waitlist module
        .module('app.waitList') //returns waitlist module
        .controller('WaitListController', WaitListController); //creates a controler for the module and adds a constructor for it. The second term is a function that will be defined
    
    WaitListController.$inject = ['textMessageService', 'partyService', 'user']; //our waitlistcontroller needs a dependancy called firebase array and since we've injected - angular will find the service
    //user is coming from the resolve property from the route doc and allows us to access the return value of resolve user
    function WaitListController(textMessageService, partyService, user){ //this doesn't NEED to be called firebasearray, it will take from firebasearray no matter what you name it because its positional 
        var vm = this;  //vm stands for view model, needs to be set so that this.whatever statements from this function will refer to vm.whatever
        
        vm.newParty = new partyService.Party(); //references the party service that creates the party objects
        // original line: vm.parties = $firebaseArray(fireParties);   //takes a firebase reference. wanna save it to a variable so we can reference it in our view
        vm.parties = partyService.getPartiesByUser(user.uid); //this user value was injected from the route doc
        vm.addParty = addParty; //sets this item to the function below
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;
        vm.toggleDone = toggleDone;
        
        function addParty(){    //a function that pushes a string to the array vm.parties
            vm.parties.$add(vm.newParty);     //$add is the push command but for firebase arrays
            vm.newParty = new partyService.Party();      //resets the newparty values to a blank object to clear the fields on page, wont effect data sctructure cuz it doesnt push
        }
        
        function removeParty(party){
        vm.parties.$remove(party);
        }
        
        function sendTextMessage(party){
          textMessageService.sendTextMessage(party, vm.parties);  
        }
        
        function toggleDone(party){
           vm.parties.$save(party); 
        }
    }
    
})();