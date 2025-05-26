
/*  */
// list-group-item 
// class="d-flex w-100 align-items-center justify-content-between"
//(function () {
  'use strict'
    
  var selection = window.getSelection();
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[class="d-flex w-100 align-items-center justify-content-between"]'));    
  var $resultado3 = '';
  var valorBuscado = '';
  
  function isExiste (iValue, iIndex, aArray) {
		var lValue = valorBuscado;
		var lResult = [];
		
		for (var i = 0; i < aArray.length; i++) {			
			if (aArray[i] == lValue){
				
				lResult[i] = i;
				aIndexTemp[i] = i;
				aIndexName[i] = empleadosGrupo.anombre[i];
				
				$resultado3 += liClass+barraIn;
				$resultado3 += labelClass1+barraIn;
				$resultado3 += inputClass1+barraIn;
				$resultado3 += vSpan1+barraIn;
				$resultado3 += empleadosGrupo.anombre[i];
				$resultado3 += endSpan1+barraIn;
				$resultado3 += endLabelA+barraIn;
				$resultado3 += endLi+barraIn;
			}

		}
		
		return (lResult);
	}
  
  function lisActive(ev) {
	  var transporte;
	  var destino;
	  //var nombre;
	  var arrayLength;	  
	  var result;
	  var index;
	  $resultado3 = '';
	  var $resulObject = '';
	  var miArray = new Array();
	  var miDate = new Date();
	  var miBolean = new Boolean();
	  //var miMath = new Math();
	  var miNumber = new Number();
	  var miObject = new Object();
	  
	   _nameOpener = document.title;
	   if (_nameOpener !== "transporte_turno_1" && _nameOpener !== "transporte_turno_2" &&
		   _nameOpener !== "transporte_turno_3" && _nameOpener !== "transporte_turno_central1"){
			document.getElementById("idResultadoListado").innerHTML = '';
	   }
	  
	  document.getElementById("idResultadoListado").innerHTML = '';
	  
	  $resulObject = miObject.constructor.values.name;
	  var Mifunction = function (){
		   miObject.constructor.create();
	  };
	  
	  var nameEv = ev.className;
	  selection = window.getSelection();
	  tooltipTriggerList = [].slice.call(document.querySelectorAll('[class="list-group-item list-group-item-action active py-3 lh-tight"]'));
	  destino = tooltipTriggerList[0].childNodes;
	  transporte = [].slice.call(ev.querySelectorAll('[class="mb-1"]'));
	  //nombre = transporte[0].innerText;	  
	  arrayLength = empleadosGrupo.adep.length;
	  index = empleadosGrupo.adep.indexOf("C&C");
      valorBuscado = transporte[0].innerHTML;	  
	  result = empleadosGrupo.adep.find(isExiste);	  
	  
	  //if (_nameOpener == 'departamentos1'){
		  document.getElementById("idResultadoListado").innerHTML=" \
			"+" \ "			
			+$resultado3+" \ ";
	  //}
	  document.getElementById('transporte').innerHTML = transporte[0].innerHTML;
	  destino = transporte[0].childNodes;
	  tooltipTriggerList[0].className = classInActive;
	  ev.className = classActive;
	  //alert(nameEv);
  }
  
  function mostrar() {
	  selection = window.getSelection();
	  tooltipTriggerList = [].slice.call(document.querySelectorAll('[class="d-flex w-100 align-items-center justify-content-between"]'));
	  alert(tooltipTriggerList);
  }
  
  function insertRegTransporte (boton) {
	  var disMesAnio = gl_fecha.fecha_hoy_for('DDMMYYYY');
	  var ruta = document.getElementById("transporte");
	  ruta = ruta.innerHTML;
	  var horaMinutos = document.getElementById("dRtll");
	  horaMinutos = horaMinutos.innerHTML;
	  var horaMinutos2 = document.getElementById("dRtl2");
	  horaMinutos2 = horaMinutos2.innerHTML;
	  var cantidad = document.getElementById("cant");
	  //cantidad = cantidad.options[cantidad.selectedIndex].value;
	  cantidad = cantidad.value;
	  var cantidad2 = document.getElementById("cant2");
	  //cantidad2 = cantidad2.options[cantidad2.selectedIndex].value;
	  cantidad2 = cantidad2.value;
	  var confirma;  
		
	  
			switch (boton.id) {
				case    _turno1l: {						
							regTransporteTurno1l(disMesAnio, horaMinutos, ruta, cantidad);
							document.getElementById('dRtl1s').innerHTML = horaMinutos;
							document.getElementById('dRtl1cs').innerHTML = ruta+_SEP_REG+cantidad;
							break;						
						}
				case    _turno1s: {
							regTransporteTurno1s(disMesAnio, horaMinutos, ruta, cantidad);
							document.getElementById('dRtl22').innerHTML = horaMinutos2;
							document.getElementById('dRtl2cs').innerHTML = ruta+_SEP_REG+cantidad2;
							break;
						}
				case    _turno2l: {
							regTransporteTurno2l(disMesAnio, horaMinutos, ruta, cantidad);
							document.getElementById('dRtl1s').innerHTML = horaMinutos;
							document.getElementById('dRtl1cs').innerHTML = ruta+_SEP_REG+cantidad;
							break;
						}
				case    _turno2s:{
							regTransporteTurno2s(disMesAnio, horaMinutos, ruta, cantidad);
							document.getElementById('dRtl22').innerHTML = horaMinutos2;
							document.getElementById('dRtl2cs').innerHTML = ruta+_SEP_REG+cantidad2;
							break;
						}
				case    _turno3l: {
							regTransporteTurno3l(disMesAnio, horaMinutos, ruta, cantidad);
							document.getElementById('dRtl1s').innerHTML = horaMinutos;
							document.getElementById('dRtl1cs').innerHTML = ruta+_SEP_REG+cantidad;
							break;
						}
				case    _turno3s: {
							regTransporteTurno3s(disMesAnio, horaMinutos, ruta, cantidad);
							document.getElementById('dRtl22').innerHTML = horaMinutos2;
							document.getElementById('dRtl2cs').innerHTML = ruta+_SEP_REG+cantidad2;
							break;
						}
				case    _turnocl: {
							regTransporteTurnocl(disMesAnio, horaMinutos, ruta, cantidad);
							document.getElementById('dRtl1s').innerHTML = horaMinutos;
							document.getElementById('dRtl1cs').innerHTML = ruta+_SEP_REG+cantidad;
							break;
						}
				case    _turnocs: {
							regTransporteTurno3s(disMesAnio, horaMinutos, ruta, cantidad);
							document.getElementById('dRtl22').innerHTML = horaMinutos2;
							document.getElementById('dRtl2cs').innerHTML = ruta+_SEP_REG+cantidad2;
							break;
						}
			}  
	  
	  
  }
  
//})()