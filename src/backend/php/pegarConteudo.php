
<?php
  require('conexao.php');
  $tabela = $_GET['tabela'];
  $sql = "select * from  $tabela";
  $resultado = comRetorno($sql);
  header ('Access-Control-Allow-Origin:*');
  print_r (json_encode ($resultado->fetch_all(MYSQLI_ASSOC)));
  
?>
