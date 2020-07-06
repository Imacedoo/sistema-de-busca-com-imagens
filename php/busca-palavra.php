<?php

include_once "conecta-banco.php";

$movimento = $_POST['movimento'];
$localizacao = $_POST['localizacao'];
$configPredominante = $_POST['configPredominante'];
$configBase = $_POST['configBase'];
$qtdParametrosVazios = $_POST['qtdParametrosVazios'];
$query = "SELECT NOME_DA_PALAVRA FROM palavras WHERE";

if($movimento != NULL) {
    $query .= " MOVIMENTO = '$movimento'";
    if($qtdParametrosVazios <= 2) {
        $query .= " AND ";
        $qtdParametrosVazios++;
    }
}

if($localizacao != NULL) {
    $query .= " LOCALIZACAO = '$localizacao'";
    if($qtdParametrosVazios <= 2) {
        $query .= " AND ";
        $qtdParametrosVazios++;
    }
}

if($configPredominante != NULL) {
    $query .= " CONFIG_PREDOMINANTE = '$configPredominante'";
    if($qtdParametrosVazios <= 2) {
        $query .= " AND ";
        $qtdParametrosVazios++;
    }
}

if($configBase != NULL) {
    $query .= " CONFIG_BASE = '$configBase'";

    if($qtdParametrosVazios <= 2) {
        $query .= " AND ";
        $qtdParametrosVazios++;
    }
}

$resultadoPesquisa = buscaPalavra($conexao, $query);

while ($palavraEncontrada = mysqli_fetch_assoc($resultadoPesquisa)) {
    echo $palavraEncontrada['NOME_DA_PALAVRA']. " ";
}

function buscaPalavra($conexao, $query)
{
    $resultadoBusca = mysqli_query($conexao, $query);

    return $resultadoBusca;
}

