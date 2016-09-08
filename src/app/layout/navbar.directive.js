(function(){
    'use strict';
    
    angular
     .module('app.layout')
     .directive('gzNavbar', gzNavbar); //directive are expected to return a directive definition object so the function must return
    
    function gzNavbar() {
     return {
       templateUrl: 'app/layout/navbar.html',
       restrict: 'E',
       controller: NavbarController,
       controllerAs: 'vm'     
     };    
    }
    
    NavbarController.$inject = ['$location', 'authService'];
    
    function NavbarController($location, authService) {
        var vm = this;
        
        vm.isLoggedIn = authService.isLoggedIn;
        vm.logout = logout;
        
        function logout() {
            authService.logout();
            $location.path('/');
        }
    }
    
})();