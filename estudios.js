/*https://www.anychart.com/es/products/anychart/gallery/Pie_and_Donut_Charts/Donut_Chart_with_Outside_Labels.php*/

anychart.onDocumentReady(function () {
  var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, otro=0, i=0 ,j=0 , h=0;
  // create pie chart with passed data
  $.getJSON("data.json", function (data) {
    for (var i = 0; i < data.length; i++) {
      var dato = data[i]['ESTUDIO'];
      if (dato.indexOf('Warner')>-1) {
        a++;
       
      }
      else  if (dato.indexOf('Netflix')>-1) {
        b++;
      }
      else if (dato.indexOf('Magnolia')>-1) {
        c++;
      }
      else if (dato.indexOf('Fox')>-1) {
        d++;
      }
      else if (dato.indexOf('Pixar')>-1) {
        e++;
      }
      else if (dato.indexOf('Sony')>-1) {
        f++;
      }
      else if (dato.indexOf('Bleecker')>-1) {
        g++;
      }
      else if (dato.indexOf('Universal')>-1) {
        h++;
      }
      else if (dato.indexOf('Disney')>-1) {
        i++;
      }
     
      else if (dato.includes('NEON')) {
        j++;
      }

      else
        otro++;
    }

  var chart = anychart.column();

  // turn on chart animation
  chart.animation(true);

  // set chart title text settings
  chart.title('Estudios que han producido las mejores peliculas');

  // create area series with passed data
  var series = chart.column([
    ['Warner Bros. Pictures', a],
    ['Netflix', b],
    ['Magnolia Pictures', c],
    ['20th Century Fox', d],
    ['Pixar', e],
    ['Sony Pictures', f],
    ['Bleecker Street', g],
    ['Walt Disney Pictures', 2],
    ['Universal Pictures', h],
    ['NEON', j],
   
  ]);
  // set series tooltip settings
  series.tooltip().titleFormat('{%X}');

  series.tooltip()
    .position('center-top')
    .anchor('center-bottom')
    .offsetX(0)
    .offsetY(5)
    .format('Número{%Value}{groupsSeparator: }');

  // set scale minimum
  chart.yScale().minimum(0);

  // set yAxis labels formatter
  chart.yAxis().labels().format('Número{%Value}{groupsSeparator: }');

  // tooltips position and interactivity settings
  chart.tooltip().positionMode('point');
  chart.interactivity().hoverMode('by-x');

  // axes titles
  chart.xAxis().title('Numero de peliculas');
  chart.yAxis().title('Estudio');

  // set container id for the chart
  chart.container('container');

  // initiate chart drawing
  chart.draw();

  });
});