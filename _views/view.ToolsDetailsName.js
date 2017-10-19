var ToolsDetailsName=function(){var idUserTools= [],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');for(var i = 0; i < hashes.length; i++){hash=hashes[i].split('#');idUserTools.push(hash[0]);idUserTools[hash[0]] = hash[1];if(idUserTools=='https://linkedon.000webhostapp.com/app.html' || idUserTools=='https://linkedon.000webhostapp.com/app.html?' || idUserTools=='https://linkedon.000webhostapp.com/app.html#' || idUserTools=='https://linkedon.000webhostapp.com/app.html?#' || idUserTools==''){window.location.href='https://linkedon.000webhostapp.com/';return false;}}
$.ajax({url:'_models/model.ToolsDetailsName.php',dataType:'html',type:'POST',data:{'idUserTools':idUserTools},
success:function(retorno){if(retorno=='Authenticated_failed'){
$("#msg").html("<div class='alert alert-danger'><strong>Authenticated_failed!</strong></div>").show().slideDown("slow").delay(6000).slideUp("slow");window.location.href='https://linkedon.000webhostapp.com/';return false;}
else{document.getElementsByName('name_user')[0].placeholder=retorno;
		$("#button_name_user").show();
		$("#button_name_user_submit").hide();
		document.getElementById('name_user').value = "";
		document.getElementById('name_user').required == false;
}},error:function(retorno){$("#msg").html("<div class='alert alert-danger'><strong>Error function ToolsDetailsName!</strong></div>").show().slideDown("slow").delay(6000).slideUp("slow");}
});
}
