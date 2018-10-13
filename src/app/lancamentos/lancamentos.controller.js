(function () {
  'use strict';

  angular
    .module('cieloDesafioApp')
    .controller('LancamentosController', LancamentosController);

  LancamentosController.$inject = ['LancamentosService'];

  function LancamentosController(LancamentosService) {
    var vm = this;

    function init() {
      LancamentosService.buscarLancamentos().then(resp => {
        if (resp && resp.data) {
          vm.lancamentos = resp.data;
        }
      });
    }
    
    init();
  }

})();
