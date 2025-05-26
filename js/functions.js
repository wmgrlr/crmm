
   var nuevosElementos = $("<div>Elementos que creo en <b>tiempo de ejecución</b>.<h1>Enejecución...</h1></div>");
   var documento = $(document.body);
   var parrafos = $("p");
   var pdiv = $("div");	

    // 
	$(document).ready(function(){
		//código a ejecutar cuando el DOM está listo para recibir instrucciones.
		alert("Ejemplo jquery: ");
	});
	
	$(document).ready(function(){
		$("td").click(function(evento){
			alert("Has pulsado el enlace..: "+this.innerHTML);
			evento.preventDefault();
		});
	});
	
	$(document).ready(function(){
		$("a").mouseover(function(event){
			$("#capa").addClass("clasecss");
		});
		
		$("a").mouseout(function(event){
			$("#capa").removeClass("clasecss");
		});
	});
	
	$(document).ready(function(){
		$("#mayoria_edad").click(function(evento){
			if ($("#mayoria_edad").attr("checked")){
				$("#formulariomayores").css("display", "block");
			}else{
				$("#formulariomayores").css("display", "none");
			}
		});
	});
	
	$(document).ready(function(){
		$("#ocultar").click(function(event){
			event.preventDefault();
		$("#capaefectos").hide("slow");
	});
		$("#mostrar").click(function(event){
			event.preventDefault();
			$("#capaefectos").show(3000);
		});
	});
	
	$("#micapa").fadeOut(1000, function(){
		$("#micapa").css({'top': 300, 'left':200});
		$("#micapa").fadeIn(1000);
	});
	
	$(document).ready(function(){
		$("#enlaceajax").click(function(evento){
			evento.preventDefault();
		$("#destino").load("contenido-ajax.html");
		});
	})
	
	
	$(document).ready(function(){
		$("#enlaceajax").click(function(evento){
			evento.preventDefault();
			$("#cargando").css("display", "inline");
			$("#destino").load("pagina-lenta.php", function(){
			$("#cargando").css("display", "none");
			});
			});
		})
		
	$(document).ready(function(){
		var elem1 = $("#elem1");
		//podríamos haber escrito: var elem1 = jQuery("#elem1");
		elem1.css("background-color", "#ff9999");
		var elem2 = $("#elem2");
		//podríamos haber escrito: var elem1 = jQuery("#elem1");
		elem2.css("font-size", "32pt");
		//nuevosElementos.appendTo("body");
		//documento.css("background-color", "#ff8833");
	});
	
	$(document).ready(function(){
		$("p").each(function(i){
			if(i%2==0){
				$(this).css("background-color", "#eee");
			}else{
				$(this).css("background-color", "#ccc");
			}
			});
			
	//alert ("Hay " + parrafos.size() + " párrafos en la página");
	//alert ("Hay " + pdiv.size() + " div en la página");
	    
		$("div").each(function(i){
			elemento = $(this);
			if(elemento.html() == "white")
				return true;
			if(elemento.html() == "nada")
			return false;
			elemento.css("color", elemento.html());
		});		
			
	});
	
	$(document).ready(function(){
		$("#guardar").click(function(evento){
			var valor = document.formul.valor.value;
			//Esta misma línea de código se puede codificar así también con jQuery
			//var valor = $("#valor").attr("value");
			$("#division").data("midato",valor);
			$("#division").html('He guardado en este elemento (id="division") un dato llamado "midato" con el valor "' + valor + '"');
		});

		$("#leer").click(function(evento){
			valor = $("#division").data("midato");
			$("#division").html('En este elemento (id="division") leo un dato llamado "midato" con el valor "' + valor + '"');
		});
		
		$("#eliminar").click(function(evento){
			$("#division").removeData("midato");
			$("#division").html('Acabo de eliminar del elemento (id="division") el dato llamado "midato"');
		});
	});
	
	function dimensionCapa(capa){
		capa = $(capa);
		var dimensiones = "";
		dimensiones += "Dimensiones internas: " + capa.innerWidth() + "x" + capa.innerHeight();
		dimensiones += "\nDimensiones externas: " + capa.outerWidth() + "x" + capa.outerHeight();
		alert(dimensiones);
	}
	
	function posicionCapa(capa){
		capa = $(capa);
		var posicion = "";
		posicion += "Posición relativo al documento:\nLEFT: " + capa.offset().left + "\nTOP:" + capa.offset().top;
		posicion += "\n\nPosición si no tuviera margen:\nLEFT: " + capa.position().left + "\nTOP:" + capa.position().top;
		alert(posicion);
	}
	
	