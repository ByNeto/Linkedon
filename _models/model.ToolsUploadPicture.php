<?php
require_once('../_controllers/controller.functionsClass.php');
$connect=new functionsClass();
require_once('../_config/config.connDB.php');
$diretorio_thumbs='../_library/images/pictures/thumbs/';
if($idUserPicture=$_GET['idUserPicture'] !=''){
$idUserPicture=$_GET['idUserPicture'];
$timezone=$_GET['timezone'];
$connect->set('sql','SELECT PictureAccount FROM tb_users WHERE IdGroup ="'.$idUserPicture.'"');
$connect->conectar();$connect->selecionarDB();$SelectIdGroup=$connect->executar();
while($row=mysql_fetch_assoc($SelectIdGroup)){$PathPicturesThumbs=$row['PictureAccount'];}
if($_FILES['image']['name'] != ''){
$ext=explode('.',$_FILES['image']['name']);
$ext2=$ext[0];
$ext=$ext[count($ext)-1];
if(preg_match('/(gif|jpg|jpeg|png)/i',$ext)){
$nome_thumbs=$timezone.'_'.$idUserPicture.'.'.$ext;
$caminho_thumbs=$diretorio_thumbs.$nome_thumbs;
if(move_uploaded_file($_FILES['image']['tmp_name'],$caminho_thumbs)){
chmod($caminho_thumbs,0777);
list($largura,$altura,$tipo)=getimagesize($caminho_thumbs);
if($tipo==1){$imagem=imagecreatefromgif($caminho_thumbs);}
if($tipo==2){$imagem=imagecreatefromjpeg($caminho_thumbs);}
if($tipo==3){$imagem=imagecreatefrompng($caminho_thumbs);}
$thumb=imagecreatetruecolor(150,150);
imagecopyresampled($thumb,$imagem,0,0,0,0,150,150,$largura,$altura);
if($tipo==1){$exif=exif_read_data($caminho_thumbs);if(!empty($exif['Orientation'])){
switch($exif['Orientation'])
{
case 1:imagegif($thumb,$caminho_thumbs);break;
case 3:$thumb=imagerotate($thumb,-180,0);imagegif($thumb,$caminho_thumbs);break;
case 6:$thumb=imagerotate($thumb,-90,0);imagegif($thumb,$caminho_thumbs);break;
case 8:$thumb=imagerotate($thumb,90,0);imagegif($thumb,$caminho_thumbs);break;
}
}else{imagegif($thumb,$caminho_thumbs);}
}
if($tipo==2){$exif=exif_read_data($caminho_thumbs);if(!empty($exif['Orientation'])){
switch($exif['Orientation'])
{
case 1:imagejpeg($thumb,$caminho_thumbs);break;
case 3:$thumb=imagerotate($thumb,-180,0);imagejpeg($thumb,$caminho_thumbs);break;
case 6:$thumb=imagerotate($thumb,-90,0);imagejpeg($thumb,$caminho_thumbs);break;
case 8:$thumb=imagerotate($thumb,90,0);imagejpeg($thumb,$caminho_thumbs);break;
}
}else{imagejpeg($thumb,$caminho_thumbs);}
}
if($tipo==3){$exif=exif_read_data($caminho_thumbs);if(!empty($exif['Orientation'])){
switch($exif['Orientation'])
{
case 1:imagepng($thumb,$caminho_thumbs);break;
case 3:$thumb=imagerotate($thumb,-180,0);imagepng($thumb,$caminho_thumbs);;break;
case 6:$thumb=imagerotate($thumb,-90,0);imagepng($thumb,$caminho_thumbs);break;
case 8:$thumb=imagerotate($thumb,90,0);imagepng($thumb,$caminho_thumbs);break;
}
}else{imagepng($thumb,$caminho_thumbs);}
}
if($PathPicturesThumbs == 'Empty'){
$connect->set('sql','UPDATE `tb_users` SET `PictureAccount` = "'.$caminho_thumbs.'" WHERE `tb_users`.`IdGroup` ="'.$idUserPicture.'"');
$connect->conectar();$connect->selecionarDB();$UpdateA=$connect->executar();
$printUpdateA=$UpdateA ? $caminho_thumbs : 1;
print($printUpdateA);mysql_close($connect->conectar());exit;
}
else{
unlink($PathPicturesThumbs);
$connect->set('sql','UPDATE `tb_users` SET `PictureAccount` = "'.$caminho_thumbs.'" WHERE `tb_users`.`IdGroup` ="'.$idUserPicture.'"');
$connect->conectar();$connect->selecionarDB();$UpdateB=$connect->executar();
$printUpdateB=$UpdateB ? $caminho_thumbs : 1;
print($printUpdateB);mysql_close($connect->conectar());exit;
}
}else{print(2);}}else{print(3);}}else{print(4);}}else{print(5);}
?>