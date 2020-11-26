<?php

class BuscaSinalModel
{
    private string $movimento;
    private string $localizacao;
    private string $configuracaoDominante;
    private string $configuracaoBase;
    private int $qtdParametrosVazios;
    private string $query;
    private array $resultado;

    public function __construct(string $movimento, string $localizacao, string $configuracaoDominante, string $configuracaoBase)
    {

        $this -> movimento = $movimento;
        $this -> localizacao = $localizacao;
        $this -> configuracaoDominante = $configuracaoDominante;
        $this -> configuracaoBase = $configuracaoBase;
        $this -> qtdParametrosVazios = 0;
        $this -> query = "SELECT NOME_DA_PALAVRA FROM palavras WHERE";

        $this -> resultado = [];
    }

    public function busca()
    {

        $resultadoBusca = mysqli_query(
            $this->conecta(),
            $this->criaQuery()
        );

        while ($palavrasEncontradas = mysqli_fetch_assoc($resultadoBusca)) {

            array_push($this->resultado, $palavrasEncontradas['NOME_DA_PALAVRA']);
        }

    }

    public function getResultado(): array
    {
        return $this->resultado;
    }

    private function criaQuery()
    {
        $this -> verificaParametrosVazios();

        if($this -> movimento != NULL) {
            $this -> query .= " MOVIMENTO = '".$this -> movimento."'";

            if($this -> qtdParametrosVazios <= 2) {
                $this -> query .= " AND ";
                $this -> qtdParametrosVazios++;
            }
        }

        if($this -> localizacao != NULL) {
            $this -> query .= " LOCALIZACAO = '".$this -> localizacao."'";

            if($this -> qtdParametrosVazios <= 2) {
                $this -> query .= " AND ";
                $this -> qtdParametrosVazios++;
            }
        }

        if($this -> configuracaoDominante != NULL) {
            $this -> query .= " CONFIG_DOMINANTE = '".$this->configuracaoDominante."'";

            if($this -> qtdParametrosVazios <= 2) {
                $this -> query .= " AND ";
                $this -> qtdParametrosVazios++;
            }
        }

        if($this -> configuracaoBase != NULL) {
            $this -> query .= " CONFIG_BASE = '".$this->configuracaoBase."'";

            if($this -> qtdParametrosVazios <= 2) {
                $this -> query .= " AND ";
                $this -> qtdParametrosVazios++;
            }
        }

        return $this -> query;
    }

    private function verificaParametrosVazios()
    {
        $parametros = [ $this -> configuracaoBase, $this -> configuracaoDominante, $this -> localizacao, $this -> movimento];

        foreach($parametros as $parametro) {

            if($parametro == '') {
                $this -> qtdParametrosVazios++;
            }
        }
    }

    private function conecta()
    {
        return mysqli_connect(
            'localhost:3306',
            'root',
            'IgrlckpU09**',
            'glossario_de_libras'
        );
    }
}