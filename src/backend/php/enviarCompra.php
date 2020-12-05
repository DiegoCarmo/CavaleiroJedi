<?php
  require ('conexao.php');
  if($_SERVER['REQUEST_METHOD']=='POST'){
    $cliente = $_POST ['cliente'];
    $produto = $_POST ['nome_produto'];
    $valor = $_POST ['valor_unitario'];
    $sql = "INSERT INTO pedido (cliente,nome_produto,valor_unitario) VALUES('$cliente','$produto','$valor');";
    semRetorno($sql);
    header ('Access-Control-Allow-Origin:*');
  }
?>