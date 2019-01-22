anychart.onDocumentReady(function() {
  // create pie chart with passed data
  var chart = anychart.pie([
    ['Drama', 6371664],
    ['Comedia', 7216301],
    ['Suspenso', 1486621],
    ['Acción', 786622],
    ['Otros', 900000]
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