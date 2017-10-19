<?php
require_once('../_controllers/controller.functionsClass.php');$connect=new functionsClass();require_once('../_config/config.connDB.php');
if(isset($_POST['idUserTools'])){
	$idUserToolsArray=$_POST['idUserTools'];}
	else{print('Var idUserCheck empty!');exit;}
	foreach($idUserToolsArray as $idUserTools){
$connect->set('sql','SELECT NameResponsible FROM tb_users WHERE IdGroup="'.$idUserTools.'"');
$connect->conectar();$connect->selecionarDB();
$result=$connect->executar();
if(mysql_num_rows($result)==0){print('Authenticated_failed');exit;}
if(mysql_num_rows($result) != 0){
	while($row = mysql_fetch_assoc($result)){
		$NameResponsible=$row['NameResponsible'];
		print($NameResponsible);
		}
		}
		mysql_close($connect->conectar());}
?>