/* Cargar las noticias de noticias.json y noticias.xml */
var div;

/*title,rating,estudio, duracion,diretor,genero,imagen*/
function addNew(titulo, rating,estudio, min, director, genero, lugar,descripcion) {
  
  /*autor*/
  var title = $("<p/>", {
    "class": "card-title col-md-12 col-sm-12 col-12 ",
    html: titulo
  })

  title.addClass("titulo");

  /*contenido*/
  var p = $("<p />", {
   
    "class": "contenido card-title col-md-12 col-12  col-sm-12 py-0 py+0 mx+0 my ",
    
    html: genero+" | " +estudio+" | Director: "+director
  })

   p.addClass("contenido");

  var duracion = $("<p />", {
   
    "class": "contenido card-title col-md-12 col-12  col-sm-12 py-0 py+0 mx+0 my ",
    
    html: min +" minutos"
  })


  /*logo*/
   var imagen = $("<img/>", {
    "class": "card-text col-sm-12 col-md-12 col-12 img-fluid",
    "src": "//"+descripcion,
    "style":"max-height:200px; max-width:150px; min-height:40px; min-width:50px",
    html: imagen

  })

  /*div para la imagen*/
  var i = $("<div/>", {
    "class": "card-text col-md-2 col-sm-3 col-2"
  });

/*contenedor de todos los tweets*/
  div = $("<div/>", {
    "class": "card-body  col-md-12 col-sm-12 col-12 row border-top px-2 pt-2 mx-0"

  });
  
/*contenedor de un tweet*/
  var formato = $("<div/>", {
    "class": "card-text col-md-12 col-12 col-sm-12 row my-0"
  });

  /*contenedor de la segunda columna del tweet*/
  var columnas = $("<div/>", {
    "class": "card-text col-md-10 col-sm-9 col-10 px-0 px+0"
  });

  imagen.appendTo(i);
  title.appendTo(columnas);
  p.appendTo(columnas);
  duracion.appendTo(columnas);
  i.appendTo(formato);
  columnas.appendTo(formato);
  formato.appendTo(div);
 
  
  div.appendTo("#peliculas");
}




function loadPeliculasJson(){
  $.getJSON("data.json", function (data) {
    for (var i = 0; i < data.length; i++) {
      addNew(data[i]['TITULO'],data[i]['RATING'],data[i]['ESTUDIO'], data[i]['DURACION'],data[i]['DIRECTOR'], data[i]['GENERO'], data[i]['LOCALIDAD'], data[i]['IMAGEN'])/*title,rating,estudio, duracion,diretor,genero,imagen*/
    }
  });
}


$(document).ready(function () {

loadPeliculasJson();
  $("button").click(function (e) {
     
    var texto = $('input#buscador').val();


    if (texto.length != 0) {
     
      document.getElementById('texto').innerHTML = texto;
      
      $('#peliculas .card-body').filter(function (index) {
       
        $(this).show();

        var t = $(this).text()
        if (t.indexOf(texto) == -1) {
          $(this).hide()

        }

      });

    } else {
      
      $('#peliculas .card-body').each(function () {
        $(this).hide();
        document.getElementById('texto').innerHTML = "";
        
        
      });
    } return false;



  })
});

