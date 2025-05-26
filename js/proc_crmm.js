 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 'use strict'
 
 var totalDepartamentos = '';
 var $resultadoContratas = '';
 var $resultadoSelect   = '';
 var tooltipTriggerList = [];
 var $Valores = [];
 var valorBuscado;
 var result = 0; 

 //* *********************************************/
 const mAgua= new Map();
 mAgua.set("01","SANTOS MONTOYA");

 let aAgua = [
 ["01",{id:"01", nombre:"SANTOS MONTOYA",cedula:"3.583.688",telefono:"0414-4993393",cod_empresa:"SYD",string_1:"Distribuidora de Agua",vehiculo:"ECO SPORT", placa:"DAT 33P" }],
 ];	
 
 $('*').bind('click', function(ev) {
	 var $idResultado = $('#idResultadoListado').children();
	 if (ev.target.nodeName == 'TD'){
		 var listChilDren = $(ev.target.parentElement).children();
		 //$(listChilDren[0]).parentNode.show; 
		 $((listChilDren[0]).parentNode).show();
		 var ejemplo1 = function() {
                return this.element().children().eq(0);
            };
		 alert("Se ha seleccionado: " + listChilDren[2].innerHTML+" Registro: " + listChilDren[0].innerHTML);
		 generarModal(listChilDren);
		console.log('click');	 
	 }	 
	});
	
 $("td").click(function(evento){
			alert("Has pulsado el enlace..: "+this.innerHTML);
			evento.preventDefault();
 });
 
  
function DatoCollection() {
  this.elms = new Array();
}

DatoCollection.prototype.add = function (elm) {
  this.elms.push(elm);
}

DatoCollection.prototype.at = function (index) {
  return this.elms[index];
}

DatoCollection.prototype.size = function () {
  return this.elms.length;
}

DatoCollection.prototype.removeFirst = function () {
  return this.elms.pop();
}

DatoCollection.prototype.remove = function (elm) {
  var index = 0, skipped = 0;
  for (var i = 0; i < this.elms.length; i++) {
    var value = this.elms[i];
    if (value != elm) {
      this.elms[index] = value;
      index++;
    } else {
      skipped++;
    }
  }
  for (var i = 0; i < skipped; i++)
    this.elms.pop();
}

/*!
	// **************************************
	// Registros del transporte de personal
	// turno 1 llegada
	// ***************************************/	
	function regListado(fecha, hora, ruta, cantidad) {
		this.fecha = new DatoCollection;
		this.hora = new DatoCollection;
		this.ruta = new DatoCollection;		
		this.cantidad = new DatoCollection;
		//regListado.reg.push(this.fecha+_SEP_REG+this.hora+_SEP_REG+this.ruta+_SEP_REG+this.cantidad);
		regListado.reg.push(this);
	}	
	regListado.reg = [];
const noop = () => {};
///////////////////////////////////// 

async function leerArchivos(){

   await fetch('data/gl_material_logistico.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

function displayData(datos) {

  let valores = datos;
  let lmlogisticos = new Map();	

   // Iteramos sobre los usuarios y mostramos la información
   datos.gl_material_logistico.forEach(gl_material_logistico => {
          console.log(`Materiales: ${gl_material_logistico.id} -  ${gl_material_logistico.cantidad}  - ${gl_material_logistico.descripcion}   `);
          lmlogisticos.set(gl_material_logistico.id.toString(),`(${gl_material_logistico.cantidad}) ${gl_material_logistico.descripcion}`);
    });   
}

}
 
 function init_recepcion() {		
		
		gl_reloj_ex.setDate(); 
        leerArchivos();     
		list_recepcion();	
        let photo = getFgenProto();	
}

function getFgenProto() {
 let photo = gl_photo.fgen_proto;
return  photo;
}
	
function list_recepcion() {
	
	//totalDepartamentos = mdepartamentos.size;
    totalDepartamentos = aAgua.length;
	//alert("Total de Contratas: "+totalDepartamentos);
	//var ssValor = mdepartamentos.values(i);	
	//ssValor = mdepartamentos.forEach(isValores);
    let i = 0;
	
	for (let agua of aAgua) {			

		if (i == 0){		
			$resultadoContratas = $resultadoContratas + aClassActive;
			$resultadoContratas = $resultadoContratas + divClass+barraIn;
			$resultadoContratas = $resultadoContratas + beginStrong + agua[1].nombre + endStrong+barraIn;			
			$resultadoContratas = $resultadoContratas + beginSmall +  agua[1].cedula + endSmall+barraIn;
			$resultadoContratas = $resultadoContratas + endDiv+barraIn;
			$resultadoContratas = $resultadoContratas + beginDivClass +"Cédula: "+ agua[1].cedula  +" "+"Teléfono: "+ agua[1].telefono + endDiv+barraIn;			
			$resultadoContratas = $resultadoContratas + endA+barraIn;
			document.getElementById('transporte').innerHTML = agua[1].nombre;
            document.getElementById('nombre').value = agua[1].nombre;
            document.getElementById('cedula').value = agua[1].cedula;
            document.getElementById('empresa').value = agua[1].string_1+" "+agua[1].cod_empresa;
            document.getElementById('vehiculo').value = agua[1].vehiculo;
            document.getElementById('placa').value = agua[1].placa;
            i++;
		}
		else {
		$resultadoContratas = $resultadoContratas + aClass+barraIn;
		$resultadoContratas = $resultadoContratas + divClass+barraIn;
		$resultadoContratas = $resultadoContratas + beginStrong + agua[1].nombre + endStrong+barraIn;	
		$resultadoContratas = $resultadoContratas + beginSmall + agua[1].cedula + endSmall+barraIn;
		$resultadoContratas = $resultadoContratas + endDiv+barraIn;
		$resultadoContratas = $resultadoContratas + beginDivClass +"Teléfono: "+ agua[1].telefono + endDiv+barraIn;
	    $resultadoContratas = $resultadoContratas + endA+barraIn;
        i++;	}
 }
 
 document.getElementById("idListadoDepartamentos").innerHTML=" \
          "+" \ "			
	   +$resultadoContratas+" \ ";
//lisActive_();
	
}

// insertRegSelect(this) 

function insertRegSelect(ev){
	var selectObject = new Object();
	var array = new Array();
	var canReg = 0;
	selectObject = ev;
	var regProcesado;
	
	var cantRegProcesados = regListadoTrabajadores.grupo.length;
	
	if (cantRegProcesados > 0){
		//alert("Si Hay Registros Procesados: "+cantRegProcesados);
		
		$resultadoSelect = $resultadoSelect + divClassContainer+barraIn;
		$resultadoSelect = $resultadoSelect + divClassTableResponsive+barraIn;
		$resultadoSelect = $resultadoSelect + classTable+barraIn;
		$resultadoSelect = $resultadoSelect + thHead+barraIn;
		$resultadoSelect = $resultadoSelect + begingTbody+barraIn;
		
		for (var i = 0; i < cantRegProcesados; i++) {	
			canReg ++;
			regProcesado = regListadoTrabajadores.grupo[i].split(" - ");			
			$resultadoSelect = $resultadoSelect + begingTr + barraIn;		    
			$resultadoSelect = $resultadoSelect + begingTd + canReg + endTd + barraIn;
			$resultadoSelect = $resultadoSelect + begingTd + regProcesado[1] + endTd + barraIn;
			$resultadoSelect = $resultadoSelect + begingTd + regProcesado[2] + endTd + barraIn;
			$resultadoSelect = $resultadoSelect + begingTd + "     " + endTd + barraIn;
			$resultadoSelect = $resultadoSelect + begingTd + "     " + endTd + barraIn;
			$resultadoSelect = $resultadoSelect + begingTd + "     " + endTd + barraIn;					
		    $resultadoSelect = $resultadoSelect + endTr + barraIn;
		}
		
		$resultadoSelect = $resultadoSelect + endTbody + barraIn;
		$resultadoSelect = $resultadoSelect + endTabla + barraIn;
		$resultadoSelect = $resultadoSelect + endDiv + barraIn;
		$resultadoSelect = $resultadoSelect + endDiv + barraIn;
		
	}
	else{
		alert("No Hay Registros Procesados: "+cantRegProcesados);
	}
	
	// Cantidad de Registros en la lista
	alert("Cantidad de Registros en la Lista: "+ canReg);
	
	// Elimina lo registros ya seleccionados
	document.getElementById("idResultadoSelect").innerHTML = "";
	
	// Inserta lo registros ya seleccionados
	document.getElementById("idResultadoSelect").innerHTML=" \
          "+" \ "			
	   +$resultadoSelect+" \ ";
	
}

function insertRegDepartamentos(ev){
	var miObject = new Object();
	var mArray = new Array();
	var fechaHoy = gl_fecha.fecha_hoy();
	var diaSemana = gl_fecha.dia_semana(gl_fecha.fecha_hoy());
	var departamento = document.getElementById('transporte').innerHTML;
	var cantRegProcesados = 0;
	// idResultadoListado
	miObject = ev;
	mArray = document.getElementById('idResultadoListado').childNodes;
	var elementosDelForm = document.getElementsByTagName('input');	
	for (var i = 0; i < elementosDelForm.length; i++){
		    if (elementosDelForm[i].checked == true) {
				var listChequeados = elementosDelForm[i].parentNode.childNodes;
						for (var z = 0; z < listChequeados.length; z++){
							if (z == 3 || listChequeados[z].nodeName == 'ESPAN' ){								
								//alert("Se ha seleccionado: "+listChequeados[z].outerText);
								cantRegProcesados ++;
								regListadoTrabajadores( fechaHoy, diaSemana, departamento, listChequeados[z].outerText);
							}
						}
			}		
	}
	
	
	for (var i = 0; i < mArray.length; i++){
		if (mArray[i].localName == 'li') {
            if (mArray[i].checked == true) {
				alert("Dentro del if");
			}
		}
		
	}	

	alert("Se ha seleccionado: "+cantRegProcesados);
}

function lisActive(ev) {
	  var transporte;
	  var destino;
	  //var nombre;
	  var arrayLength;	  
	  var result;
	  var index;
	  var $resultado3 = '';
	  var $resulObject = '';
	  //document.getElementById("idResultadoListado").innerHTML = '';
	  var miArray = new Array();
	  var miDate = new Date();
	  var miBolean = new Boolean();
	  //var miMath = new Math();
	  var miNumber = new Number();
	  var miObject = new Object();
	  
	  $resulObject = miObject.constructor.values.name;
	  var Mifunction = function (){
		   miObject.constructor.create();
	  };
	  
	  var nameEv = ev.className;
	  var selection = window.getSelection();
	  tooltipTriggerList = [].slice.call(document.querySelectorAll('[class="list-group-item list-group-item-action active py-3 lh-tight"]'));
	  destino = tooltipTriggerList[0].childNodes;
	  transporte = [].slice.call(ev.querySelectorAll('[class="mb-1"]'));
	  //nombre = transporte[0].innerText;	  
	  arrayLength = empleadosGrupo.adep.length;
	  index = empleadosGrupo.adep.indexOf("C&C");
      valorBuscado = transporte[0].innerHTML;	  
	  //result = empleadosGrupo.adep.find(isExiste);
	  _nameOpener = document.title;
	  
	  if (_nameOpener == 'departamentos1'){
		  document.getElementById("idResultadoListado").innerHTML=" \
			"+" \ "			
			+$resultado3+" \ ";
	  }
	  document.getElementById('transporte').innerHTML = transporte[0].innerHTML;
	  destino = transporte[0].childNodes;
	  tooltipTriggerList[0].className = classInActive;
	  ev.className = classActive;
	  //alert(nameEv);
  }

  function insertRegAgua(ev){
  
  let glForms = ev.form;
  let nombre = document.getElementById("nombre").value;
  let cedula = document.getElementById("cedula").value;
  let llenos = document.getElementById("llenos").value;
  let vacios = document.getElementById("vacios").value;
  let empresa = document.getElementById("empresa").value;
  let vehiculo = document.getElementById("vehiculo").value;
  let placa = document.getElementById("placa").value;
  let hora = document.getElementById("displayReloj").innerText; 
  let dia = document.getElementById("diaSemana").innerText; 
  let fecha = document.getElementById("diaHoy").innerText;
  let horas = document.getElementById("horas").value;

  let fechaSiguiente = gl_fecha.contar_fecha_for(gl_fecha.fecha_hoy(),1);
  let diaSiguiente = gl_fecha.dia_semana(gl_fecha.contar_fecha(gl_fecha.fecha_hoy(),1)); 

  let paramString = "";
  //let textPersonal = personalTransporte.toString();
  paramString += `${hora.slice(0,5)}: Siendo las ${hora.slice(0,5)} horas ingresa el Sr. ${nombre} C.I.V-${cedula} de la empresa ${empresa} en el vehículo ${vehiculo} placa ${placa} el día ${dia} ${fecha} trae ${llenos} botellones de agua llenos y se lleva ${vacios} botellones vacios. Se retira a las ${horas} `;
  console.log(paramString);

  let textarea = document.createElement("textarea");
  textarea.innerHTML=paramString;

   //swal("Registros Seleccionados", paramString);
   //swal ( "Success", "Registros Procesados" , paramString );

   swal("Registros Procesados", { content: textarea  });

 var xmlhttp; 
		var contenidosRecibidos = new Array(); 
		var nodoMostrarResultados = document.getElementById('glPrimerControl'); 
		var contenidosAMostrar = ''; 
				
		if (nombre.length==0) { 
			document.getElementById("txtInformacion").innerHTML=""; 
			nodoMostrarResultados.innerHTML = ''; 
			return; 
		} 
				
		xmlhttp=new XMLHttpRequest(); 
		xmlhttp.onreadystatechange = function() { 
		if (xmlhttp.readyState==4 && xmlhttp.status==200) { 
			 //contenidosRecibidos = xmlhttp.responseText.split(","); 
			 //document.getElementById("txtInformacion").innerHTML=contenidosRecibidos[0];
             alert("Datos insertados correctamente"); 
		}
		}

		var cadenaParametros = 'nombre='+encodeURIComponent(nombre)+'&cedula='+encodeURIComponent(cedula); 
		cadenaParametros += '&llenos='+encodeURIComponent(llenos)+'&vacios='+encodeURIComponent(vacios); 
		cadenaParametros += '&dia='+encodeURIComponent(dia)+'&fecha='+encodeURIComponent(fecha)+'&hora='+encodeURIComponent(hora); 
        cadenaParametros += '&horas='+encodeURIComponent(horas);
		xmlhttp.open('POST', 'procesos/procesosRecepAgua.php?op=insertRegAgua'); // Método post y url invocada 
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // Establecer cabeceras de petición 
		xmlhttp.send(cadenaParametros); // Envio de parámetros usando POST 

}
