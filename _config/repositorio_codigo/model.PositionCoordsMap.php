<?php
	require_once('../_controllers/controller.functionsClass.php');
	$connect = new functionsClass();
$mail = 'qweqweqw@gmail.com';
	require_once('../_config/config.connDB.php');
	$connect->set('sql','SELECT LatAccount,LngAccount FROM tb_users WHERE tb_users.EmailResponsible = "'.$mail.'";');

	$connect->conectar();
	$connect->selecionarDB();
	$result = $connect->executar();
	while ($row = mysql_fetch_array($result)) 
	{
	echo $row[0].', '.$row[1];
	}
?>