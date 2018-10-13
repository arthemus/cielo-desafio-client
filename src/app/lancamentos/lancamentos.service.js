(function () {
  'use strict';

  angular
    .module('cieloDesafioApp')
    .service('LancamentosService', LancamentosService);

  LancamentosService.$inject = ['$http'];

  function LancamentosService($http) {

    const host = 'http://127.0.0.1:8080/';

    return {

      buscarLancamentos() {
        return $http({
          url: host + 'api/lancamentos',
          method: 'GET'
        });
      }
    }
  }

})();
