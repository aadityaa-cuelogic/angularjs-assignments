angular.module('customConfirm.directive', [])
    .directive("customConfirm", customConfirm);

function customConfirm(){
    return {
        restrict : 'A',
        scope : {
            'clickThis' : '&'
        },
        link : function (scope, element, attr){
            var msg = "Are you sure ?";
            element.bind('click', function (eve) {
                if(window.confirm(msg)){
                    scope.clickThis();
                    scope.$apply();
                }

            });
        }
        // template : "Name : Aaditya directive",
    };
}
