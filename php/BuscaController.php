<?php
include 'models/BuscaSinal.php';

//Recebo os dados e envio  para classe
$buscaPalavraTermo = new BuscaSinalModel(
    $_POST['movimento'],
    $_POST['localizacao'],
    $_POST['configDominante'],
    $_POST['configBase']
);

//Busco as palavras
$buscaPalavraTermo -> busca();

//Obtenho o resultado
$resultado = $buscaPalavraTermo -> getResultado();

echo json_encode($resultado);

