(function () {
    'use strict';

    angular
        .module('jhipsterHelloApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
