'use strict';
(function(){

	angular
		.module('home')
		.controller('homeController', ['$scope', '$state', '$location', '$timeout', 'employeesService', homeController]);
        // .directive('customConfirm', customConfirm);

	function homeController($scope, $state, $location, $timeout, employeesService){

		$scope.blackSpinner = 'resource/images/blackSpinner.gif';
        $scope.deleteUserArray = [];

		$scope.userList = function() {
            //calling API and get user list
            $scope.getUsers = employeesService.getEmployees().employees;

            $scope.subTabMenus = [{
                'tabMenu': 'All',
                'action': 'dashboard'
            }, {
                'tabMenu': 'Proposals',
                'action': 'proposals'
            }]
        }

        $scope.editUser = function(userId) {
            console.log('edit User - ',userId);
            $location.path('/edit/user/'+userId);
        }

        $scope.deleteUser = function(userId) {
            if(userId === undefined){
                $timeout(function() {
                    for(var i=0; i<$scope.deleteUserArray.length; i++){
                        employeesService.deleteEmployees($scope.deleteUserArray[i]);
                    }
                    $state.reload();
                }, 3000);

            }else{
                employeesService.deleteEmployees(userId);
            }
            
            // $state.reload();
        }

        $scope.deleteMultiUser = function(){
        }

        $scope.selectRow = function(obj, userId){
            var tempCheck = '';
            for(var i in obj){
                tempCheck = obj[i];
            }
            if(tempCheck=='green') {
                tempCheck='';
                var tempIndex = $scope.deleteUserArray.indexOf(userId);
                if(tempIndex !== -1){
                    $scope.deleteUserArray.splice(tempIndex, 1);
                }
            }else{
                tempCheck='green';
                $scope.deleteUserArray.push(userId);
            }
            if($scope.deleteUserArray.length > 1){
                $scope.showMultiDelete = true;
            }else{
                $scope.showMultiDelete = false;
            }

            return {'background-color':tempCheck};
        }

	};

    // function customConfirm(){
    //     return {
    //         restrict : 'A',
    //         scope : {
    //             'clickThis' : '&'
    //         },
    //         link : function (scope, element, attr){
    //             var msg = "Are you sure ?";
    //             element.bind('click', function (eve) {
    //                 if(window.confirm(msg)){
    //                     scope.clickThis();
    //                     scope.$apply();
    //                 }

    //             });
    //         }
    //         // template : "Name : Aaditya directive",
    //     };
    // }

})();