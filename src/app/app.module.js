//the use strict expression makes our lives easier
//this encompassing function ensures that the variables for this document don't effect other docs
//this module loads our other modules. its a module module - hahahhaha
(function() {
    'use strict';    
    angular
        .module('app', [
        // Angular modules.
        'ngRoute',
        // Third-party modules.
        'firebase',
        // Custon modules we've written.
        'app.auth',
        'app.landing',
        'app.waitList',
        'app.core',
        'app.layout'
    ]);
    
})();       