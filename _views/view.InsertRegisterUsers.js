function formSubmit(){var today= new Date();var dd= today.getDate();var mm= today.getMonth()+1;var yyyy= today.getFullYear();var hour= today.getHours();var min= today.getMinutes();var sec= today.getSeconds();if(dd<10){dd='0'+dd}if(mm<10){mm='0'+mm}if(hour<10){hour='0'+hour}if(min<10){min='0'+min}if(sec<10){sec='0'+sec}var DateOfRequest= yyyy+'-'+mm+'-'+dd+' '+hour+':'+min+':'+sec;var NameResponsible= document.getElementById("NameResponsible").value;var PhoneNumbers= document.getElementById("PhoneNumbers").value;var EmailResponsible= document.getElementById("EmailResponsible").value;var PasswordAccount= document.getElementById("PasswordAccount").value;var RepeatPassword= document.getElementById("RepeatPassword").value;if(document.name_form2.Sexo[0].checked == true){var Sexo = document.name_form2.Sexo[0].value;}if(document.name_form2.Sexo[1].checked == true){var Sexo = document.name_form2.Sexo[1].value;}if(document.name_form2.Sexo[0].checked == false && document.name_form2.Sexo[1].checked == false){$("#SexoMsgError1").html('<a class="ErrorMsgs">Selecione o Sexo do usuario!</a>').show().fadeOut(9000);$('html,body').animate({scrollTop: 0},'slow');return false;}if(NameResponsible==""){$("#NameResponsibleMsgError1").html('<a class="ErrorMsgs">Campo Nome está vazio!</a>').show().fadeOut(9000);document.getElementById("NameResponsible").value="";$('html,body').animate({scrollTop: 0},'slow');return false;}if(NameResponsible.length <4){$("#NameResponsibleMsgError2").html('<a class="ErrorMsgs">Nome muito curto, min. 4 letras!</a>').show().fadeOut(9000);document.getElementById("NameResponsible").value="";$('html,body').animate({scrollTop: 0},'slow');return false;}if(NameResponsible.length >20){$("#NameResponsibleMsgError3").html('<a class="ErrorMsgs">Nome muito longo, max. 20 letras!</a>').show().fadeOut(9000);document.getElementById("NameResponsible").value="";$('html,body').animate({scrollTop: 0},'slow');return false;}if(NameResponsible != NameResponsible.replace(/[^a-zA-Z.]/g," ")){$("#NameResponsibleMsgError4").html('<a class="ErrorMsgs">O Nome deve conter apenas letras!</a>').show().fadeOut(9000);document.getElementById("NameResponsible").value="";$('html,body').animate({scrollTop: 0},'slow');return false;}if(EmailResponsible==""){$("#EmailResponsibleMsgError1").html('<a class="ErrorMsgs">Campo Email está vazio!</a>').show().fadeOut(9000);document.getElementById("EmailResponsible").value="";$('html,body').animate({scrollTop: 0},'slow');return false;}if(EmailResponsible.indexOf('@')==-1 || EmailResponsible.indexOf('.')==-1){$("#EmailResponsibleMsgError2").html('<a class="ErrorMsgs">Insira um Email válido!</a>').show().fadeOut(9000);document.getElementById("EmailResponsible").value="";$('html,body').animate({scrollTop: 0},'slow');return false;}if(PhoneNumbers==""){$("#PhoneNumbersMsgError1").html('<a class="ErrorMsgs">Campo Telefone está vazio!</a>').show().fadeOut(9000);document.getElementById("PhoneNumbers").value = "";return false;}if(PasswordAccount==""){$("#PasswordAccountMsgError1").html('<a class="ErrorMsgs">Campo Senha está vazio!</a>').show().fadeOut(9000);document.getElementById("PasswordAccount").value = "";return false;}if(PasswordAccount.length < 6 || PasswordAccount.length > 6){$("#PasswordAccountMsgError2").html('<a class="ErrorMsgs">Insira uma Senha de 6 digitos!</a>').show().fadeOut(9000);document.getElementById("PasswordAccount").value = "";document.getElementById("RepeatPassword").value = "";return false;}if(RepeatPassword == ""){$("#RepeatPasswordMsgError1").html('<a class="ErrorMsgs">Campo Confirme a Senha está vazio!</a>').show().fadeOut(9000);document.getElementById("RepeatPassword").value = "";return false;}if(RepeatPassword != PasswordAccount){$("#RepeatPasswordMsgError2").html('<a class="ErrorMsgs">As Senhas são diferentes!</a>').show().fadeOut(9000);document.getElementById("PasswordAccount").value = "";document.getElementById("RepeatPassword").value = "";return false;}if(document.name_form2.Termos.checked == false){$("#TermosMsgError1").html('<a class="ErrorMsgs">Aceite os termos de uso!</a>').show().fadeOut(9000);return false;}else{var Termos = document.name_form2.Termos.value;}var dataString='&DateOfRequest='+DateOfRequest+'&Sexo='+Sexo+'&NameResponsible='+NameResponsible+'&EmailResponsible='+EmailResponsible+'&PhoneNumbers='+PhoneNumbers+'&PasswordAccount='+PasswordAccount+'&Termos='+Termos;$("#msg_return").html('<center><img width="250px" height="31px" src="../_library/images/icons/loading.gif"></img></center>').show();jQuery.ajax({url:"_models/model.InsertRegisterUsers.php",data:dataString,type:"POST",success:function(data){if(data == 'mail_exists'){$("#EmailResponsibleMsgError3").html('<a class="ErrorMsgs">Email ja cadastrado!</a>').show().fadeOut(9000);document.getElementById("EmailResponsible").value = "";$("#msg_return").html('<center><img width="250px" height="31px" src="../_library/images/icons/loading.gif"></img></center>').hide();return false;}$("#msg_return").html('<div class="alert alert-success" role="alert"><strong>Cadastro realizado com sucesso!</strong></div>').show();$('#id_form2').each (function(){this.reset();});setInterval(function(){window.location.href=data;},500);},error:function(){$("#msg_return").html(data);}});return true;}