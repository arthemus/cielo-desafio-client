(function () {
  'use strict';

  angular
    .module('cieloDesafioApp')
    .config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {
    $stateProvider
      .state('lancamentos', {
        parent: 'app',
        url: '/',
        data: {
          pageTitle: 'Lançamentos'
        },
        views: {
          'content@': {
            templateUrl: 'src/app/lancamentos/lancamentos.html',
            controller: 'LancamentosController',
            controllerAs: 'vm'
          }
        },
      });
  }

})();
