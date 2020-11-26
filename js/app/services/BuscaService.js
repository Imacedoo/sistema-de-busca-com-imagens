class BuscaService {

    constructor() {

        this._ajax = new AjaxService();
    }

    obterResultado(dados) {

        return this._ajax
            .post('php/BuscaController.php', dados)
            .then(retorno => JSON.parse(retorno))
    }
}