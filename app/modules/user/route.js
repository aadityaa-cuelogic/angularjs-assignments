(function() {
    'use strict';

    angular
        .module('user')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.user', {
                url: '/add/user',
                views: {
                    'content': {
                        templateUrl: 'app/modules/user/views/add_user.html',
                        controller: 'userController'
                    }
                }
            })
            .state('base.editUser', {
                url : '/edit/user/:id?',
                views : {
                    'content' :{
                        templateUrl: 'app/modules/user/views/edit_user.html',
                        controller : 'userController'
                    }
                }
            });
    }

})();
