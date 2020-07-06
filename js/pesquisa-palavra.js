function pesquisa(palavraAPesquisar, local) {
    $.ajax({
        method: 'POST',
        url: 'php/busca-palavra.php',
        data: palavraAPesquisar,
        success: function (retorno) {
            $(local).empty();
            montaItemLista(retorno, local);
        }
    });
}


