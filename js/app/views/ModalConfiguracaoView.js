class ModalConfiguracaoView extends ModalView {

    constructor() {

        super();
        this._numeroImagens = 12;
    }

    _template(configuracao, index) {

        return `
            <a type="button" data-dismiss="modal" href="#" id="${index}" class= "config-${configuracao}" onclick="controller.selecionaConfiguracaoMao('${index}', '${configuracao}')">
                <img src="imagens/Frente_A_${index}.jpg" alt="Representação de mão">
            </a>
        `
    }

    update(configuracao) {

        this._elemento.innerHTML = '<div class="imagens-config-mao"></div> ';
        let divImagens = document.querySelector('.imagens-config-mao');

        $('#modal-index').modal('toggle');

        for(let i = 1; i <= this._numeroImagens; i++) {

            divImagens.insertAdjacentHTML('beforeend', this._template(configuracao, i));
        }
    }
}