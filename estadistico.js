


anychart.onDocumentReady(function() {
  // create pie chart with passed data
var drama=5, comedy=1, science=10, adventure=1, kids=0, suspense=0, otro =20;
alert(drama);
$.getJSON("data.json", function (data) {
  
    for (var i = 0; i < data.length; i++) {
      var dato= data[i]['GENERO']/*title,rating,estudio, duracion,diretor,genero,imagen*/
      if( dato.indexOf("Drama") > -1)
        drama++;
      else  if( dato.indexOf("Comedy") > -1)
        comedy++;
      else  if( dato.indexOf("Science") > -1)
        science++;
      else if( dato.indexOf("Adventure") > -1)
        adventure++;
      else if( dato.indexOf("Suspense") > -1)
        suspense++;
      else
        otro++;
    }
  });




  var chart = anychart.pie([
    ['Drama', drama,
    ['Comedia', comedy],
    ['Ciencia', science],
    ['Aventura', adventure ],
    ['Otros', otro]
  ]);

  // set chart title text settings
  chart.title('Generos mas vistos en el ultimo año')
    // create empty area in pie chart
    .innerRadius('40%');

  // set chart labels position to outside
  chart.labels().position('outside');

  // set container id for the chart
  chart.container('container');
  // initiate chart drawing
  chart.draw();
});



  