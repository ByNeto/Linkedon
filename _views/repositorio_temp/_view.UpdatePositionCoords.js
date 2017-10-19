var getLocation = function(){
	if (navigator.geolocation){
		var timeoutVal = 10 * 1000 * 1000;
		navigator.geolocation.getCurrentPosition(showSucesso,showErro,{enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0});
}
	else{$("#msg").html("<div class='alert alert-warning'><strong>Geolocalização não é suportado por este navegador!</strong></div>").fadeOut(10000);}
}
var showSucesso = function(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	$.ajax({
		url: '_models/model.PositionCoords.php',
		dataType: 'html',
		type: 'POST',
		data: {'latitude':latitude,'longitude':longitude},
		beforeSend: function (){$("#msg").html('<div class="alert alert-warning"><strong>Carregando localização...</strong></div>').fadeIn(10000);},
		success: function(retorno){$("#msg").html(retorno).fadeOut(40000);},
		error: function(a,b,c){$("#msg").html('<div class="alert alert-warning"><strong>Erro: '+a[status]+' '+c+'</strong></div>').fadeOut(10000);}
	});
}
var showErro = function(erro){
	switch( erro.code ){
		case erro.PERMISSION_DENIED:
			$("#msg").html("<div class='alert alert-warning'><strong>O usuário negou o pedido de Geolocalização!</strong></div>").fadeOut(10000);break;
		case erro.POSITION_UNAVAILABLE:
			$("#msg").html("<div class='alert alert-warning'><strong>A posição não está disponível!</strong></div>").fadeOut(10000);break;
		case erro.TIMEOUT:
			$("#msg").html("<div class='alert alert-warning'><strong>O pedido para obter a localização do usuário expirou!</strong></div>").fadeOut(10000);break;
		case erro.UNKNOWN_ERROR:
			$("#msg").html("<div class='alert alert-warning'><strong>Um erro desconhecido ocorreu!</strong></div>").fadeOut(10000);break;
	}
}