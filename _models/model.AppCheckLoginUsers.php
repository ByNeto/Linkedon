<?php
require_once('../_controllers/controller.functionsClass.php');
$connect = new functionsClass();
require_once('../_config/config.connDB.php');
if(isset($_POST['DateOfRequestLogin'])){$DateLastAccess = $connect->escapeString($_POST['DateOfRequestLogin']);}
else{print('Var DateOfRequest empty!');exit;}
if(isset($_POST['PasswordAccountLogin'])){$PasswordAccount = $connect->passwordEncrypt($_POST['PasswordAccountLogin']);$PasswordAccount = $connect->escapeString($PasswordAccount);}
else{print('Var PasswordAccount empty!');exit;}
if(empty($_POST['EmailResponsibleLogin'])){print('Var EmailResponsible empty!');exit;}
if(isset($_POST['EmailResponsibleLogin'])){$EmailResponsible=$connect->strtolowerEmail($_POST['EmailResponsibleLogin']);$EmailResponsible=$connect->escapeString($EmailResponsible);
$connect->set('sql','SELECT IdGroup,EmailResponsible,PasswordAccount FROM tb_users WHERE EmailResponsible = "'.$EmailResponsible.'" AND PasswordAccount = "'.$PasswordAccount.'"');
$connect->conectar();$connect->selecionarDB();$result=$connect->executar();
if(mysql_num_rows($result) == 0){print('Authenticated_User');exit;}}
if(mysql_num_rows($result) != 0){while ($row = mysql_fetch_assoc($result)){$IdGroup = $row['IdGroup'];}}
$connect->set('sql','UPDATE tb_users SET DateLastAccess = "'.$DateLastAccess.'" WHERE tb_users.EmailResponsible = "'.$EmailResponsible.'"');
$connect->conectar();
$connect->selecionarDB();
$result=$connect->executar();
$print=$result ? "https://linkedon.000webhostapp.com/app.html?$IdGroup" : "Não foi possivel inserir os dados!";
print($print);
mysql_close($connect->conectar());
?>