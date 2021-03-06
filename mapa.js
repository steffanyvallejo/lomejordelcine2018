
  var localidades = ['Vancouver British Columbia Canada','Elmcrest Public School Mississauga Ontario Canada', 'Windsor Great Park Windsor Berkshire England UK' ,'Atlanta Georgia USA', 'Paris','Los Angeles California USA', 'Ossining']
 

function loadPeliculasJson() {
  $.getJSON("data.json", function (data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i]['LOCALIDAD'].length > 5)
        localidades[i] = data[i]['LOCALIDAD'];
    }
    
  });

}

function initMap() {
  var localidad = [];
  var contador=0;
   $.getJSON("data.json", function (data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i]['LOCALIDAD'].length > 4  ){
        localidad = data[i]['LOCALIDAD'];
        //alert(localidades[i])
       
        }
    }
     var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: { lat: -34.397, lng: 150.644 }
  });

  var geocoder = new google.maps.Geocoder();

  geocodeAddress(geocoder, map, localidades);


  });
}
 

function geocodeAddress(geocoder, resultsMap, lista) {
  //var address = document.getElementById('address').value;
  for (var i = 0; i < lista.length; i++) {
    var address = lista[i];
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        //alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}

$(document).ready(function () {
 
  initMap();
});
