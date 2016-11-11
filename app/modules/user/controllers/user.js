(function() {
	'use strict';

    angular
        .module('user')
        .controller('userController', ['$scope', '$state', '$location', '$timeout', 'employeesService', userController]);

    function userController($scope, $state, $location, $timeout, employeesService) {
        var url = window.location.href;
        var employeesData = employeesService.getEmployees().employees;
        //edit user
    	if(url.indexOf('/edit/user') > 0){
            var employeesExist = false;
            var urlArray = url.split('/');
            var userId = urlArray[urlArray.length -1];
    		$scope.setTitle = 'Edit user';
            for(var i = 0; i < employeesData.length; i++){
                if(employeesData[i].id == userId){
                    employeesExist = true;
                    $scope.editUser = employeesData[i];
                    break;
                }
            }
    		// return;
    	}else{
            console.log('Add');
            $scope.setTitle = 'Add user';
        }

        $scope.editUserSubmit = function(){
            $timeout(function(){
                var status = employeesService.updateEmployees($scope.editUser);
                $location.path('/home');
            }, 3000);
        }

        $scope.addUserSubmit = function(){
            var status = employeesService.addEmployees($scope.addUser);
            $location.path('/home');
        }
    }

})();
