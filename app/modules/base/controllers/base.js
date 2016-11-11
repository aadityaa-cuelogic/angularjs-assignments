'use strict';
(function() {

    angular
        .module('base')
        .controller('baseController', ['$scope', '$state', 'menuService', 'localStorageServiceWrapper', baseController]);

    function baseController($scope, $state, menuService, localStorageServiceWrapper) {
        console.log("Inside Base controller");
        //calling API and get menus
        $scope.getMenus = menuService.getSidebarMenuList().userMenu;
        $scope.userName = localStorageServiceWrapper.get('name');
    }

})();
