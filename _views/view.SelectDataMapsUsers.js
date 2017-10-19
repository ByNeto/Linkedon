function getLocationMap(retorno){var IdUserApp=retorno;if(navigator.geolocation){navigator.geolocation.getCurrentPosition(load);}
else{$("#msg").html("<div class='alert alert-danger' role='alert'><strong>Geolocalização não suportado por este Smartphone!</strong></div>").show().slideDown("slow").delay(6000).slideUp("slow");}
function load(position){
var customIcons={
0:{icon:'_library/images/icons_users/homem.png'},
1:{icon:'_library/images/icons_users/mulher.png'},
37:{icon:'_library/images/icons_users/37.png'},
38:{icon:'_library/images/icons_users/38.png'},
39:{icon:'_library/images/icons_users/39.png'},
40:{icon:'_library/images/icons_users/40.png'},
41:{icon:'_library/images/icons_users/41.png'}
};
var latitudeApp=position.coords.latitude;
var longitudeApp=position.coords.longitude;
var geocoder=new google.maps.Geocoder();geocoder.geocode({"location": new google.maps.LatLng(latitudeApp,longitudeApp)},
function(results,st){
if(st==google.maps.GeocoderStatus.OK){var AddressApp=results[0].formatted_address;}
var map=new google.maps.Map(document.getElementById("map"),{center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),zoom:16,showInfoWindow:true,useMapTypeControl:true,scrollwheel:true,disableDefaultUI:false,panControl:true,zoomControl:true,scaleControl:true,streetViewControl:true,overviewMapControl:true,rotateControl:true,mapType:'styledMap',maps:{styledMap:{name:'Styled Map',styles:[{featureType:'poi.attraction',stylers:[{color: '#fce8b2'}]},{featureType:'road.highway',stylers:[{hue:'#0277bd'},{saturation:-50}]},{featureType:'road.highway',elementType:'labels.icon',stylers:[{hue:'#000'},{saturation:100},{lightness:50}]},{featureType:'landscape',stylers:[{hue:'#26B1A9'},{saturation:10},{lightness:-22}]}]}}});
var infoWindow=new google.maps.InfoWindow;
downloadUrl("_models/model.SelectDataMapsUsers.php",function(data){
var xml=data.responseXML;
var markers=xml.documentElement.getElementsByTagName("marker");
for(var i = 0; i < markers.length; i++){
var iduserdb=markers[i].getAttribute("iduser");
var nome=markers[i].getAttribute("nome");
var phone=markers[i].getAttribute("phone");
var address=markers[i].getAttribute("address");
var point=new google.maps.LatLng(parseFloat(markers[i].getAttribute("lat")),parseFloat(markers[i].getAttribute("lng")));
var type=markers[i].getAttribute("type");
var status=markers[i].getAttribute("status");
if(status==0){status='<span class="font_red">Status: </span><span class="font_red_bold">LinkedOff</span>'};
if(status==1){status='<span class="font_green">Status: </span><span class="font_green_bold">LinkedOn</span>'};
if(iduserdb == IdUserApp){
var html=status+'<a class="detail_button" title="'+AddressApp+'">'+nome+'</a><br><a onclick="getLocation();" class="rote_button">Atualizar Localização</a><br><a href="whatsapp://send?text=Olá! Sou o '+nome+', essa é minha Localização compartilhada pelo LinkedOn através do Google Maps. https://www.google.com.br/maps/dir/'+AddressApp+'" class="whatsapp_button">Compartilhar Localização</a>';
}
else{
var html=status+'<a class="detail_button" title="'+address+'" href="tel:'+phone+'">Chamar '+nome+'</a><br><a href="https://www.google.com.br/maps/dir/'+AddressApp+'/'+address+'/" class="rote_button">Traçar Rota</a>';
}
var icon=customIcons[type] || {};
var marker=new google.maps.Marker({map:map,position:point,icon:icon.icon,draggable:false,animation:google.maps.Animation.DROP});bindInfoWindow(marker, map, infoWindow, html);}});});}}
function bindInfoWindow(marker, map, infoWindow, html){google.maps.event.addListener(marker,'click',function(){infoWindow.setContent(html);infoWindow.open(map, marker);});}
function downloadUrl(url, callback){var request=window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest;request.onreadystatechange=function(){if(request.readyState==4){request.onreadystatechange=doNothing;callback(request, request.status);}};request.open('POST',url,true);request.send(null);}
function doNothing(){}