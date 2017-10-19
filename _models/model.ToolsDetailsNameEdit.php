<?php
require_once('../_controllers/controller.functionsClass.php');$connect=new functionsClass();require_once('../_config/config.connDB.php');
if(isset($_POST['idUserTools'])){
	$idUserToolsArray=$_POST['idUserTools'];}
	else{print('Var idUserCheck empty!');exit;}
if(isset($_POST['nameUser'])){
	$nameUser=$_POST['nameUser'];
	$nameUser=$connect->convertString($nameUser);}
	else{print('Var nameUser empty!');exit;}
	foreach($idUserToolsArray as $idUserTools){
$connect->set('sql','UPDATE tb_users SET NameResponsible ="'.$nameUser.'" WHERE IdGroup="'.$idUserTools.'"');
$connect->conectar();$connect->selecionarDB();
$result=$connect->executar();
print($result);
mysql_close($connect->conectar());}
?>