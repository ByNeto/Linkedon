<?php
require_once('../_controllers/controller.functionsClass.php');$connect=new functionsClass();$longitude=$_POST['longitude'];$latitude=$_POST['latitude'];$idUser=$_POST['idUser'];$AddressAccount=$_POST['AddressAccount'];foreach($idUser as $IdGroup){require_once('../_config/config.connDB.php');$connect->set('sql','UPDATE tb_users SET LatAccount = "'.$latitude.'", LngAccount = "'.$longitude.'", AddressAccount = "'.$AddressAccount.'" WHERE tb_users.IdGroup = "'.$IdGroup.'"');$connect->conectar();$connect->selecionarDB();$result=$connect->executar();$print=$result ? $IdGroup : 'error_insert_bd';print($print);}
?>