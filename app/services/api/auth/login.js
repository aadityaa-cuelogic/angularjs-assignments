angular.module('login.service', [])
	.factory('loginService', [loginService]);

function loginService(){
	var service = {};

	service.signInValidation = signInValidation;

	return service;

	function signInValidation(loginUser){
		// console.log(loginUser);
		//consider this as db valuse
		var data = {
			'userCredentials':[{
				'email' : 'aaditya.agrawal@cuelogic.com',
				'password' : 'admin'
			},{
				'email' : 'sandeep.p@cuelogic.com',
				'password' : 'manager'
			},{
				'email': 'hr@cuelogic.com',
				'password' : 'hr@123'
			}]
		}
		var isSuccess = false;
		/*
		//forEach will iterarte over all elements...can not use break
		data.userCredentials.forEach(function(userObj){
			if(userObj.email === loginUser.email && userObj.password === loginUser.password){
				isSuccess = true;
				return true;
			}
		});
		*/
		//for loop is more efficient here
		for(var i=0; i < data.userCredentials.length; i++){
			var userObj = data.userCredentials[i];
			if(userObj.email === loginUser.email && userObj.password === loginUser.password){
				isSuccess = true;
				break;
			}
		}		
		return isSuccess;
	}
}