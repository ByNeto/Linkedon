/*
<!--End of pages
data.addColumn('number', 'Lat');
data.addColumn('number', 'Long');
data.addColumn('string', 'name');

data.addRow([37.4232,-122.0853, 'Work']);
data.addRow([37.4289,-122.1697, 'University']);
data.addRow([37.6153,-122.3900, 'Airport']);
data.addRow([37.4422,-122.1731, 'Shopping']);
--> 
*/

google.charts.load('upcoming', {packages: ['map']});
google.charts.setOnLoadCallback(drawMap);

 function drawMap () {
	 $(function () 
	 {
	   //-----------------------------------------------------------------------
	   // 2) Send a http request with AJAX http://api.jquery.com/jQuery.ajax/
	   //-----------------------------------------------------------------------
	   $.ajax({
	     url: '_models/model.SelectGoogleMapsChart.php',//the script to call to get data
	     data: "TESTE",                        //you can insert url argumnets here to pass to api.php
	                                      //for example "id=5&parent=6"
	     dataType: 'json',                //data format      
	     success: function(data)          //on recieve of reply
	     {
	       var lon = data[0];              //get id
	       var lat = data[1];           //get name
	       //--------------------------------------------------------------------
	       // 3) Update html content
	       //--------------------------------------------------------------------
	       $('#status').html("<b>lon: </b>"+lon+"<b> lat: </b>"+lat); //Set output element html
	       //recommend reading up on jquery selectors they are awesome 
	       // http://api.jquery.com/category/selectors/
	     } 
	   }),
	 }),
  var data = new google.visualization.DataTable();
      data.addColumn('string', 'Address');
      data.addColumn('string', 'Location');
      data.addRows([
  ['RUA JOAO DUQUE, 222, PARQUE IMPERADOR, CAMPINAS-SP','<center><br>Status: Online<br>NETO SILVA<br><br><a href="#" onclick="swiperParent.swipeTo(3);" class="button_12 black black_borderbottom radius4">Mensagem</a><br><a href="#" onclick="swiperParent.swipeTo(4);" class="button_12 yellow yellow_borderbottom radius4">Ver perfil</a></center>'],
  ['RUA PATROCINIO DO SAPUCAI, 680, JARDIM FLAMBOYANT, CAMPINAS-SP','<center><br>Status: Online<br>JURANDIR<br><br><a href="#" onclick="swiperParent.swipeTo(3);" class="button_12 black black_borderbottom radius4">Mensagem</a><br><a href="#" onclick="swiperParent.swipeTo(4);" class="button_12 yellow yellow_borderbottom radius4">Ver perfil</a></center>'],
  ['RUA PAULO DE FARIA, 106, JARDIM FLAMBOYANT, CAMPINAS-SP','<center><br>Status: Online<br>MARCOS<br><br><a href="#" onclick="swiperParent.swipeTo(3);" class="button_12 black black_borderbottom radius4">Mensagem</a><br><a href="#" onclick="swiperParent.swipeTo(4);" class="button_12 yellow yellow_borderbottom radius4">Ver perfil</a></center>']
        ]);
  var options = {
    icons: {
     default: {
       normal: '_library/images/icons_users/label.png',
       selected: '_library/images/icons_users/homem.png'
         }
       },
     mapType: 'styledMap',
     zoomLevel: 13,
     showTooltip: false,
     showInfoWindow: true,
     useMapTypeControl: true,
     scrollwheel: true,
     draggable: true,
     disableDefaultUI: true,
     panControl: true,
     zoomControl: true,
     scaleControl: true,
     streetViewControl: true,
     overviewMapControl: true,
     rotateControl: true,
     maps: {
       // Your custom mapTypeId holding custom map styles.
     styledMap: {
       name: 'Styled Map', // This name will be displayed in the map type control.
       styles: [
         {featureType: 'poi.attraction',
          stylers: [{color: '#fce8b2'}]
         },
         {featureType: 'road.highway',
          stylers: [{hue: '#0277bd'}, {saturation: -50}]
         },
         {featureType: 'road.highway',
          elementType: 'labels.icon',
          stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]
         },
         {featureType: 'landscape',
          stylers: [{hue: '#259b24'}, {saturation: 10}, {lightness: -22}]
         }
     ]}}
    };
  var map = new google.visualization.Map(document.getElementById('map_div'));
  map.draw(data, options);
}