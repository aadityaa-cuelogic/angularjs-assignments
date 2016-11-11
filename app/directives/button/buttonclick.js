angular.module('buttonClick.directive',[])
	.directive('buttonClick' , ['$timeout', buttonClick]);

	function buttonClick($timeout){
		return {
			restrict : 'A',
			link : function($scope, element, attrs){
				element.bind('click', function (argument) {
					if(element.hasClass('deleteBtn')){
						element.text('Deleting...');
					}else{
						element.text('Saving...');
					}
					$timeout(function() {
						element.attr('disabled', 'disabled');
					},500);
				});
			}
		}
	}