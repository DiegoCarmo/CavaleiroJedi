<?php
  require ('conexao.php');
  if($_SERVER['REQUEST_METHOD']=='POST'){
    $nome = $_POST ['nome'];
    $msg = $_POST ['msg'];
    $email= $_POST ['email'];
    $sql = "INSERT INTO contato (nome,email) VALUES('$nome','$email');";
    semRetorno($sql);

    $sql_resultado = "SELECT id_contato FROM contato WHERE email ='$email';";
    $id_contato = mysqli_fetch_assoc (comRetorno($sql_resultado));
    $id_final = $id_contato['id_contato'];
    $sql_comentario = "INSERT INTO comentario (id_contato,msg) VALUES ('$id_final','$msg');";
    semRetorno($sql_comentario);
    header ('Access-Control-Allow-Origin:*');
  }
?>