<?php
  require ("conexao.php");
  $sql = "SELECT nome, msg FROM comentario JOIN contato ON contato.id_contato = comentario.id_contato limit 5 ;";
  $resultado = comRetorno($sql);
  $mensagem = [];
  while($linha=mysqli_fetch_assoc($resultado)){
    $mensagem [] = $linha;
  }
  header ('Access-Control-Allow-Origin:*');
  print_r (json_encode($mensagem)); 
?>