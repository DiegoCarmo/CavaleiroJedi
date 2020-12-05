<?php
       
    function comRetorno($sql){
      $servidor = "localhost";
      $usuario = "root";
      $senha = "";
      $bancodedados = "fullstack";
      $conexao = mysqli_connect($servidor, $usuario, $senha, $bancodedados);
      if (!$conexao) {
        die("Sem conexão" . mysqli_connect_error());
      }
      $resultado = mysqli_query($conexao, $sql);
      mysqli_close($conexao);
      return $resultado;
      }
      function semRetorno($sql){
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $bancodedados = "fullstack";
        $conexao = mysqli_connect($servidor, $usuario, $senha, $bancodedados);
        if (!$conexao) {
          die("Sem conexão" . mysqli_connect_error());
        }
        mysqli_query($conexao, $sql);
        mysqli_close($conexao);  
      
      }
?>