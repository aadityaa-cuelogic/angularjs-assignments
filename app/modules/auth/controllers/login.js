'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$rootScope', '$scope', '$state', '$location', 'loginService', 'localStorageServiceWrapper', 'employeesService', loginController]);

    function loginController($rootScope, $scope, $state, $location, loginService, localStorageServiceWrapper, employeesService) {
        console.log("Inside login controller");
        
        $scope.loginSubmit= function (){
			//calling API - loginService to validate user credentials
			$scope.signInValidation = false;
			$scope.signInValidation = loginService.signInValidation($scope.loginuser);

			//set localStorage if valid user
			if($scope.signInValidation === true){
				var employeesData = employeesService.getEmployees().employees;
				for(var i = 0; i < employeesData.length; i++){
					if(employeesData[i].email === $scope.loginuser.email){
						localStorageServiceWrapper.set('firstName', employeesData[i].firstName);
						localStorageServiceWrapper.set('lastName', employeesData[i].lastName);
						localStorageServiceWrapper.set('id', employeesData[i].id);
						localStorageServiceWrapper.set('name', employeesData[i].firstName + ' '+employeesData[i].lastName);
						$rootScope.$broadcast('authorized');
						break;
					}
				}
				$location.path('/home');
			}else{
				//clear localstorage
        		localStorageServiceWrapper.clearAll();
				alert('Invalid login');
			}
		};

		$scope.logout = function(){
			console.log('logout');
			localStorageServiceWrapper.clearAll();
			$state.go('login');
		};

		$rootScope.$on('authorized', function() {
        	console.log('authorized - main controller');
        	 $location.path('/home');
	    });
	    $rootScope.$on('unauthorized', function() {
	        console.log('unauthorized - main controller');
	        $state.go('login');
	    });
    }

})();
