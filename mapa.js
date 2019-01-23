var map, lat, lng;
    $(document).ready(function(){
      //creamos el mapa
      var map = new GMaps({
        el: '#map',
        lat: 0,
        lng: 0
      });
      // Creamos la geolocalización
      GMaps.geolocate({
        success: function(position){
          lat = position.coords.latitude;  
          lng = position.coords.longitude;
          //Definimos la vista del mapa sobre las coordenadas obtenidas
          map.setCenter(lat, lng);
          //Añadimos un marcador
          map.addMarker({ lat: lat, lng: lng});  
        },
        error: function(error){
          alert('Geolocation failed: '+error.message);
        },
        not_supported: function(){
          alert("Your browser does not support geolocation");
        }
      });
    });
 