/*https://www.anychart.com/es/products/anychart/gallery/Pie_and_Donut_Charts/Donut_Chart_with_Outside_Labels.php*/

anychart.onDocumentReady(function () {
  var drama = 0, comedy = 0, science = 0, adventure = 0, accion = 0, suspense = 0, otro = 0;
  // create pie chart with passed data
  $.getJSON("data.json", function (data) {
    for (var i = 0; i < data.length; i++) {
      var dato = data[i]['GENERO'];
      if (dato.includes('Drama')) {
        drama++;
       
      }
      else  if (dato.includes('Comedy')) {
        comedy++;
      }
      else if (dato.includes('Science')) {
        science++;
      }
      else if (dato.includes('Adventure')) {
        adventure++;
      }
      else if (dato.includes('Suspense')!=1) {
        suspense++;
      }
      else if (dato.includes('Action')!=1) {
        accion++;
      }
      else
        otro++;
    }

  var chart = anychart.pie([
    ['Drama', drama],
    ['Comedia', comedy],
    ['Suspenso', suspense],
    ['Aventura', adventure],
    ['Acción', accion],
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

  

  
});