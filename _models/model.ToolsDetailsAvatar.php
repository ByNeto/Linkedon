<?php
require_once('../_controllers/controller.functionsClass.php');$connect=new functionsClass();require_once('../_config/config.connDB.php');if(isset($_POST['idUserTools'])){$idUserToolsArray=$_POST['idUserTools'];}else{print('Var idUserTools empty!');exit;}foreach($idUserToolsArray as $idUserTools){$connect->set('sql','SELECT SexAccount FROM tb_users WHERE IdGroup="'.$idUserTools.'"');$connect->conectar();$connect->selecionarDB();$result=$connect->executar();if(mysql_num_rows($result)==0){print('Authenticated_failed');exit;}if(mysql_num_rows($result) != 0){while($row = mysql_fetch_assoc($result)){$SexAccount=$row['SexAccount'];print($SexAccount);}}mysql_close($connect->conectar());}
?>