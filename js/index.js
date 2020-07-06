$(".opcoes").each(function() {
    $(this).on("click", function () {
        var classList = $(this).attr("class").split(/\s+/),
            tipoDeOpcao;

        for (var i = 0; i < classList.length; i++) {
            if (classList[i] === 'config-dominante') {
                tipoDeOpcao = "dominante";
            } else {
                tipoDeOpcao = "base"
            }
        }

        var imgSelecionada = `.${tipoDeOpcao} img`;

        $(imgSelecionada).remove();
        var img = document.createElement("img"),
            nomeImagem = $(this).attr("id"),
            classes = [nomeImagem, `img-selecionada-${tipoDeOpcao}`];

        $("." + tipoDeOpcao).append(img);
        $(imgSelecionada).attr("src", `imagens/${nomeImagem}.jpg`).addClass(classes);
        $(imgSelecionada).insertBefore($(`.${tipoDeOpcao} svg`));
    });
});

$("#botao-busca-sinal").on("click", function () {
    var movimento = $("#opcoes-movimento option:selected").val(),
        localizacao =  $("#opcoes-localizacao option:selected").val(),
        configBase = document.querySelector(".img-selecionada-base").classList,
        configDominante = document.querySelector(".img-selecionada-dominante").classList,
        localLista = ".resultado-busca-sinal";

    var infoPesquisa = {
            movimento: movimento,
            localizacao: localizacao,
            configDominante: configDominante[0],
            configBase: configBase[0]
        };

    if(configBase[0] === "svg-inline--fa") {
        infoPesquisa.configBase = "";
    }
    if(configDominante[0] === "svg-inline--fa") {
        infoPesquisa.configDominante = "";
    }

    const infos = [infoPesquisa.movimento, infoPesquisa.localizacao, infoPesquisa.configDominante, infoPesquisa.configBase];
    var qtdParametrosVazios = 0;
    for(var i = 0; i <= infos.length; i++) {
        if(infos[i] === "") {
            qtdParametrosVazios++;
        }
    }

    infoPesquisa.qtdParametrosVazios = qtdParametrosVazios;

    console.log(infoPesquisa);
    if(qtdParametrosVazios === 4) {
        mostraAlerta();
    } else {
        pesquisa(infoPesquisa, localLista);
    }
});

$(".botao-tiraimagem-base").on("click", function () {
    $(".base img").remove();
})

$(".botao-tiraimagem-dominante").on("click", function () {
    $(".dominante img").remove();
})

function mostraAlerta() {
    var li = document.createElement("p"),
        local = $(".resultado-busca-sinal");

    local.empty();
    local.append(li);
    li.textContent = "É necessário selecionar 1 item!";
    $(".resultado-busca-sinal p").addClass("alerta");
}

function montaItemLista(palavras, local)
{
    var palavraSeparada = palavras.split(' ');

    for(var i = 0; i < palavraSeparada.length - 1; i++) {
        var li = document.createElement("li");
        var link = document.createElement("a");

        li.appendChild(link);
        li.classList.add(`palavra-listada${i}`);
        $(local).append(li);
        link.textContent = palavraSeparada[i];

        $(`.palavra-listada${i} a`).attr("href", `outraPagina.phtml?palavra=${palavraSeparada[i]}`);
    }
}
