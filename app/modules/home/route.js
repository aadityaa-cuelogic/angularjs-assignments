'use strict';
(function(){

	angular
		.module('home')
		.config(['$stateProvider', stateProvider])

	function stateProvider($stateProvider){

		$stateProvider
			.state('base.home', {
				url : '/home',
				views : {
					'content' : {
						templateUrl : 'app/modules/home/views/home.html',
						controller : 'homeController'
					}
				}
			});
	}

})();