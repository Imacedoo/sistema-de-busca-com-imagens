class ModalResultadoView extends ModalView {

    _template(palavras) {

        return `
            <div class="resultado-busca-sinal">
                <ul class="palavras-encontradas">
                    ${palavras.map(palavra => `
                        <li class="palavra-listada"><a>${palavra}</a></li>
                    `).join(' ')}
                </ul>
            </div>          
        `
    }

    update(palavras) {
        $('#modal-index').modal('toggle');
        this._elemento.innerHTML = this._template(palavras);
    }

    notificaErro() {

        $('#modal-index').modal('toggle');
        this._elemento.innerHTML = `
            <div class="resultado-busca-sinal">
                <p class="alert-danger">Ops, acho que você esqueceu de preencher pelo menos 1 campo</p>
            </div>
        `;
    }
}