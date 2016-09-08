//javascript that control behavior of page. in this case loading the data that is needed for the page. Also can be used to handle user interactions.
(function(){
    'use strict';
    
    angular     //grabs an angular object and accesses the waitlist module
        .module('app.auth') 
        .controller('AuthController', AuthController); //creates a controler for the module and adds a constructor for it. The second term is a function that will be defined

    AuthController.$inject = ['$location', 'authService']; //adds dependacy (preps it) (injects a firebase-rules array)
    
    function AuthController($location, authService){ //sets dependacy for the function, position must match the injection positions
        var vm = this;
        
        vm.user = {
            email: '',
            password: ''
        };
        
        vm.register = register;
        vm.login = login;
        
        function register(user){
            return authService.register(user) //this function actually creates a promise by querying the server. thats why the ; is after .catch. cuz its promise syntax.
                .then(function() {
                vm.login(user);
                })
                .catch(function(error) {
                console.log(error); //the catch function provides us with the variable error
                });
            
        }
        
        function login(user){
            return authService.login(user)
                .then(function(loggedInUser){
                console.log(loggedInUser);
                $location.path('/waitlist');
            })
                .catch(function(error){
                console.log(error);
            });
        }
    }
    
})();