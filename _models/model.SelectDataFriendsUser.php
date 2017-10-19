<?php
require_once('../_controllers/controller.functionsClass.php');$connect=new functionsClass();require_once('../_config/config.connDB.php');
if(isset($_POST['idUserTools'])){$idUserToolsArray=$_POST['idUserTools'];foreach($idUserToolsArray as $idUserTools){
$connect->set('sql','SELECT NameResponsible FROM tb_users WHERE IdGroup="'.$idUserTools.'"');
$connect->conectar();$connect->selecionarDB();$result=$connect->executar();
if(mysql_num_rows($result)==0){print('Authenticated_failed');exit;}
if(mysql_num_rows($result) !=0){
$connect->set('sql','SELECT NameResponsible,PictureAccount,DateLastAccess FROM tb_users WHERE IdGroup !="'.$idUserTools.'"');
$connect->conectar();$connect->selecionarDB();$result_1=$connect->executar();
while($row=mysql_fetch_assoc($result_1)){$NameResponsible=$row['NameResponsible'];$PictureAccount=$row['PictureAccount'];$DateLastAccess=$row['DateLastAccess'];
if($PictureAccount=="Empty"){$SrcPictureAccount="<img class='friends_image_round' src='/_library/images/icons/picture_default.png' alt='' title=''/>";}
else{$SrcPictureAccount="<img class='friends_image_round' src='".$PictureAccount."' alt='' title=''/>";}
date_default_timezone_set('America/Sao_Paulo');
$date2=strtotime($DateLastAccess);
$date1=strtotime(date('Y-m-d H:m:s'));
$subTime=$date1-$date2;
$d=($subTime/(60*60*24))%365;
$h=($subTime/(60*60))%24;
$m=($subTime/60)%60;
switch($d){case 1:$dia="Dia";break;default:$dia="Dias";break;}
switch($h){case 1:$hr="Hora";break;default:$hr="Horas";break;}
switch($m){case 1:$min="Minuto";break;default:$min="Minutos";break;}
if($d==0){
	if($h==0){
		$StatusAccount="<img class='status_icon' src='/_library/images/icons/online.png'></img>";
		$infoAccess="Online a ".$m." ".$min;
	}
	if($h!=0){
		$StatusAccount="<img class='status_icon' src='/_library/images/icons/offline.png'></img>";
		$infoAccess="Offline a ".$h." ".$hr." e ".$m." ".$min;
	}
}
if($d!=0){
	$StatusAccount="<img class='status_icon' src='/_library/images/icons/offline.png'></img>";
	$infoAccess="Offline a ".$d." ".$dia." e ".$h." ".$hr." ".$m." ".$min;
}
echo'
<div class="site-cols-wrapper">
	<div class="site-left-col">
		<div class="site-left-col-inner">
			<a href="#">'.$SrcPictureAccount.'<p class="friends">'.$NameResponsible.'</p>'.$StatusAccount.'<p class="friends_access">'.$infoAccess.'</p></a>
		</div><hr></hr>
	</div>
</div>
';
}}mysql_close($connect->conectar());}
}
else{print('Var idUserCheck empty!');exit;}
?>