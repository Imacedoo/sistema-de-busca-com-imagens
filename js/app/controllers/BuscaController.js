class BuscaController {

    constructor() {

        this._configuracaoDominante = '';
        this._configuracaoBase = '';
        this._movimento = document.querySelector('#opcoes-movimento');
        this._localizacao = document.querySelector('#opcoes-localizacao');

        this._buscaSinal = new BuscaSinal();

        this._modalConfiguracaoView = new ModalConfiguracaoView();
    }

    abreModal(campo) {

        this._modalConfiguracaoView.update(campo.classList[1]);
    }

    selecionaConfiguracaoMao(idImagem, configuracao) {

        document.querySelector(`.${configuracao}`).innerHTML = `
            <img src="imagens/Frente_A_${idImagem}.jpg" alt="Imagens de Mãos" class="img-selecionada-${configuracao}" id="${idImagem}">
        `

        if(configuracao === 'dominante') {
            this._configuracaoDominante = idImagem;
        } else {
            this._configuracaoBase = idImagem;
        }
    }

    removeConfiguracaoMao(event, configuracao) {

        event.preventDefault();
        document.querySelector(`.${configuracao}`).innerHTML = `
            <i class="fas fa-upload"></i>
       `

        if(configuracao === 'dominante') {
            this._configuracaoDominante = '';
        } else {
            this._configuracaoBase = '';
        }
    }

    busca() {

        let campos = {
            movimento: this._movimento.value,
            localizacao: this._localizacao.value,
            configDominante: this._configuracaoDominante,
            configBase: this._configuracaoBase
        };

        this._buscaSinal.busca(campos);
    }
}