'use strict';

angular.module('security.service', [])
    .service('APIInterceptor', function($rootScope, $location, localStorageServiceWrapper) {
        console.log('Inside APIInterceptor');
        var service = this;
        service.request = function(config) {
            var currentUser = localStorageServiceWrapper.get('id');
            access_token = currentUser ? true : null;
            console.log(access_token,'==access_token, currentUser===', currentUser);
            if(access_token){
                config.headers.authorization = access_token;
            }
            if(!config.headers.authorization){
                $location.path('/login');
            }
            return config;
        };
        service.responseError = function(response) {
            if(response.status === 401){
                $rootScope.$broadcast('unauthorized');
            }
            return response;
        };
    });
//     .service('securityService', ['employeesService', securityService]);

// function securityService(employeesService) {

//     var service = {};

//     function set(strName, strSetValue) {
//         return localStorageService.set(strName, strSetValue);
//     }

//     function get(strGetName) {
//         return localStorageService.get(strGetName);
//     }

//     function isSupported() {
//         return localStorageService.isSupported;
//     }

//     function clearAll() {
//         return localStorageService.clearAll();
//     }

//     service.set = set;
//     service.get = get;
//     service.isSupported = isSupported;
//     service.clearAll = clearAll;

//     return service;

// };
