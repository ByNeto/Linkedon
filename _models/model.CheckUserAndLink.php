<?php
require_once('../_controllers/controller.functionsClass.php');$connect=new functionsClass();require_once('../_config/config.connDB.php');if(isset($_POST['idUserCheck'])){$idUserCheckArray=$_POST['idUserCheck'];}else{print('Var idUserCheck empty!');exit;}foreach($idUserCheckArray as $idUserCheck){$connect->set('sql','SELECT NameResponsible,SexAccount FROM tb_users WHERE IdGroup="'.$idUserCheck.'"');$connect->conectar();$connect->selecionarDB();$result=$connect->executar();if(mysql_num_rows($result)==0){print('Authenticated_failed');exit;}if(mysql_num_rows($result) != 0){while($row = mysql_fetch_assoc($result)){$NameResponsible=$row['NameResponsible'];$SexAccount=$row['SexAccount'];print($NameResponsible.','.$SexAccount);}}mysql_close($connect->conectar());}
?>