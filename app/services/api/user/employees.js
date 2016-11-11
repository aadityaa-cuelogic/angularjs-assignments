angular.module('employees.service', [])
	.factory('employeesService', [employees]);

function employees(){
	var service = {};
	var localData = {
			'employees':[{
				'id' : 1,
				'firstName' : 'Aaditya',
				'lastName' : 'Agrawal',
				'address' : '101, Vidhyasagar Co-op ho.so',
				'age' : 25,
				'gender' : 'Male',
				'education' : 'PG-DAC, B.E.',
				'email' : 'aaditya.agrawal@cuelogic.com',
				"image": "http://cache4.asset-cache.net/fk/176794537.jpg?v=1&c=IWSAsset&k=1&f=2&d=4575EEE0F3AA8377CD9D0036C287379E479DFF9E20496F56146E8D247CE15381"
			},{
				'id' : 2,
				'firstName' : 'Sandeep',
				'lastName' : 'Paithankar',
				'address' : '102, Vidhyasagar Co-op ho.so',
				'age' : 35,
				'gender' : 'Male',
				'education' : 'M.E., B.E.',
				'email' : 'sandeep.p@cuelogic.com',
				"image": "resource/images/IMG_3050.JPG"
			},{
				'id' : 3,
				'firstName' : 'Uma',
				'lastName' : 'Ramani',
				'address' : '103, Vidhyasagar Co-op ho.so',
				'age' : 28,
				'gender' : 'Female',
				'education' : 'B.Com, MBA',
				'email': 'hr@cuelogic.com',
				"image": "resource/images/textures-selection-nice-high-resolution_2165080.jpg"
			}]
	};

	service.getEmployees = getEmployees;
	service.updateEmployees = updateEmployees;
	service.addEmployees = addEmployees;
	service.deleteEmployees = deleteEmployees;

	return service;
	

	function getEmployees(){
		return localData;
	}

	function updateEmployees(empData){
		var status = false;
		for(var i=0; i<localData.employees.length ; i++){
			if(localData.employees[i].id == empData.id){
				localData.employees[i] = empData;
				status = true;
				break;
			}
		}
		return status;
	}

	function addEmployees(empData){
		var status = true;
		var empIdArray = [];
		for(var i=0; i<localData.employees.length ; i++){
			empIdArray[localData.employees[i].id] = localData.employees[i].id;
			if(localData.employees[i].email == empData.email){
				status = false;
				break;
			}
		}

		if(status){
			var checkId = empIdArray[empIdArray.length -1];
			while(empIdArray[checkId] !== undefined){
				checkId++;
			}

			var tempObj = {
				'id' : checkId,
				'firstName' : empData.firstName,
				'lastName' : empData.lastName,
				'address' : '',
				'age' : '',
				'gender' : empData.gender,
				'education' : '',
				'email' : empData.email,
				"image": "resource/images/textures-selection-nice-high-resolution_2165080.jpg"
			}
			localData.employees.splice(localData.employees.length,0,tempObj);
		}
		return status;
	}

	function deleteEmployees(empId){
		for(var i=0; i<localData.employees.length ; i++){
			if(localData.employees[i].id == empId){
				localData.employees.splice(i,1);
				break;
			}
		}
	}
}