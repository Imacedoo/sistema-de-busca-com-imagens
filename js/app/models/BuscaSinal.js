class BuscaSinal {

    constructor() {

        this._view = new ModalResultadoView();
    }

    busca(referencia) {

        let service = new BuscaService();

        if(this._preencheuCampos(referencia)) {

            service
                .obterResultado(referencia)
                .then(resultados => this._view.update(resultados));
        } else {

            this._view.notificaErro();
        }
    }

    _preencheuCampos(campos) {
        return !(
            campos.configBase === '' &&
            campos.configDominante === '' &&
            campos.movimento === '' &&
            campos.localizacao === ''
        );
    }
}