
     //*********************************************	
     //			crear_obj.js		
	 //*********************************************
	 
	 function genera_tabla() {
	   
	   addElemento("Prueba");
       // Obtener la referencia del elemento body
       var body = document.getElementsByTagName("body")[0];

       // Crea un elemento <table> y un elemento <tbody>
       var tabla   = document.createElement("table");
       var tblBody = document.createElement("tbody");

       // Crea las celdas
       //for (var i = 0; i < 2; i++) {
       // Crea las hileras de la tabla
       var hilera = document.createElement("tr");
	   
	   // Crea un elemento <td> y un nodo de texto, haz que el nodo de
       // texto sea el contenido de <td>, ubica el elemento <td> al final
       // de la hilera de la tabla     
	   
	    //  Elemento 01  - 10                    //
	   creartd("01","Libro de Novedades","Bueno","01");
	   creartd("02","Boligrafo","Regular","01");
  
       function creartd(posicion,elemento,estado,cantidad){
	   
	       alert("Dentro de la funcion creartd "); 
	       // Inicio Elemento 10                    //
	       // Crea las hileras de la tabla
           var hilera = document.createElement("tr");
           var celda = document.createElement("td");
           var textoCelda = document.createTextNode(posicion);	   
           celda.appendChild(textoCelda);
           hilera.appendChild(celda);
	   
	       celda = document.createElement("td");
           textoCelda = document.createTextNode(elemento);
	       celda.appendChild(textoCelda);
           hilera.appendChild(celda);
	   
	       celda = document.createElement("td");
           textoCelda = document.createTextNode(estado);
	       celda.appendChild(textoCelda);
           hilera.appendChild(celda);
	   
	       celda = document.createElement("td");
           textoCelda = document.createTextNode(cantidad);
           celda.appendChild(textoCelda);	   
           hilera.appendChild(celda);
	   
	       celda = document.createElement("td");
           textoCelda = document.createTextNode("0");
	       celda.appendChild(textoCelda);
	   
	       // hilera
           hilera.appendChild(celda);
	       tblBody.appendChild(hilera);
	   
	    }	   
    } 	  

    function addElemento(){
		   
		 // alert("Dentro de la funcion addElemento "); 
		  
		var id_guardia = document.getElementById("guardia");
		var id_guardia1 = id_guardia.options[id_guardia.selectedIndex].value;
		var selectedguardia = id_guardia.options[id_guardia.selectedIndex].text;		
		
		// Se busca el Cargo del Informador
		//_getCargo (selectedguardia);
		_informador = _getCargo (selectedguardia)+" "+selectedguardia;
		  
          var capa = document.getElementById("tbrelevos");
          //var h1 = document.createElement("h1");
		  //var td = document.createElement("td");
		  // Inicio Elemento 10                    //
	      // Crea las hileras de la tabla
          var hilera = document.createElement("tr");
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode(_getCargo (selectedguardia));	   
          celda.appendChild(textoCelda);
          capa.appendChild(celda);
        
		  //var hilera = document.createElement("tr");
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode(selectedguardia);	   
          celda.appendChild(textoCelda);
          capa.appendChild(celda);	  
		  

          /*var celda = document.createElement("td");
		  var $resultado = '<label><input type="checkbox"> </label>';		  
          var textoCelda = document.createTextNode($resultado);	   
          celda.appendChild(textoCelda);
          capa.appendChild(celda);		*/ 			  
		  
          //td.innerHTML = texto;
          //capa.appendChild(td);
		 // alert("Dentro de la funcion addElemento fin "); 
      } 	   
	