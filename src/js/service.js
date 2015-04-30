angular.module('gotey.services', []).
    factory('appService', function($http) {

        var BASE_URL = './data/',
            api = {};

        api.getHeaderData = function () {
            return $http.get(BASE_URL + 'meta.json');
        };

        api.getMenuData = function () {
            return $http.get(BASE_URL + 'menu.json');
        };

        api.getProductData = function (productId) {
            return $http.get(BASE_URL + productId + '.json');
        };

        api.getAppData = function () {
            return $http.get(BASE_URL + 'main.json');
        };

        return api;
    });
