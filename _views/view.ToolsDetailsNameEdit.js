var ToolsDetailsNameEdit=function(){
$("#button_name_user").hide();
$("#button_name_user_submit").html('<input type="button" class="button_submit_red" id="" onclick="submit_name_user();" value="Salvar Nome"/></input>').show();
$("#load_name_user").html('<strong><p class="font_white">Insira o Nome usuario!</p></strong>').show().slideDown("slow").delay(2500).slideUp("slow");
}
var submit_name_user=function(){
if(document.getElementById('name_user').value == ""){
document.getElementById('name_user').required == true;
$("#load_name_user").html('<strong><p class="font_white">Insira o Nome Usuário!</p></strong>').show().slideDown("slow").delay(2500).slideUp("slow");return false;
}
else{
	var idUserTools= [],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');for(var i = 0; i < hashes.length; i++){hash=hashes[i].split('#');idUserTools.push(hash[0]);idUserTools[hash[0]] = hash[1];if(idUserTools=='https://linkedon.000webhostapp.com/app.html' || idUserTools=='https://linkedon.000webhostapp.com/app.html?' || idUserTools=='https://linkedon.000webhostapp.com/app.html#' || idUserTools=='https://linkedon.000webhostapp.com/app.html?#' || idUserTools==''){window.location.href='https://linkedon.000webhostapp.com/';return false;}}
	var nameUser = document.getElementById('name_user').value;
$.ajax({url:'_models/model.ToolsDetailsNameEdit.php',dataType:'html',type:'POST',data:{'idUserTools':idUserTools,'nameUser':nameUser},resetForm:true,clearForm:true,
success:function(retorno){
	if(retorno == 1){
return ToolsDetailsName();
		$("#msg").html("<div class='alert alert-success'><strong>Nome Usuário editado!</strong></div>").show().slideDown("slow").delay(6000).slideUp("slow");return swiperParent.swipeTo(3);
		}
	if(retorno != 1){
		$("#load_name_user").hide();
		$("#msg").html("<div class='alert alert-danger'><strong>Error update ToolsDetailsNameEdit!</strong></div>").show().slideDown("slow").delay(6000).slideUp("slow");return false;
		}
	},
	error:function(retorno){$("#msg").html("<div class='alert alert-danger'><strong>Error model ToolsDetailsNameEdit!</strong></div>").show().slideDown("slow").delay(6000).slideUp("slow");}
	});

}

}