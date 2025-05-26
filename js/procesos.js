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
 
 function generarModal(myArray){
	 var localArray = myArray;
	 var $this = $(this);
	 var $resultadoModal = '';
	 
	 
	$resultadoModal = $resultadoModal + modalClass + barraIn;
	$resultadoModal = $resultadoModal + modalDialog + barraIn;
	$resultadoModal = $resultadoModal + modalContext + barraIn;
	$resultadoModal = $resultadoModal + modalBody + barraIn;
	$resultadoModal = $resultadoModal + classMb0 + barraIn;
	$resultadoModal = $resultadoModal + classMy4 + barraIn;
	$resultadoModal = $resultadoModal + pClassDepartamento + barraIn;
	$resultadoModal = $resultadoModal + pClassTrabajador + barraIn;
	$resultadoModal = $resultadoModal + pClassHoraLlegada + barraIn;
	$resultadoModal = $resultadoModal + hrClass + barraIn;
	$resultadoModal = $resultadoModal + buttonCheckIn + barraIn;
	$resultadoModal = $resultadoModal + pClassHoraSalida + barraIn;
	$resultadoModal = $resultadoModal + hrClass + barraIn;
	$resultadoModal = $resultadoModal + buttonCheckOut + barraIn;
	$resultadoModal = $resultadoModal + endDiv + barraIn;
	$resultadoModal = $resultadoModal + divClassModal + barraIn;
	$resultadoModal = $resultadoModal + hrClass + barraIn;
	$resultadoModal = $resultadoModal + buttonAceptar + barraIn;
	$resultadoModal = $resultadoModal + buttonCancelar + barraIn;
	$resultadoModal = $resultadoModal + endDiv + barraIn;
	$resultadoModal = $resultadoModal + endDiv + barraIn;
	$resultadoModal = $resultadoModal + endDiv + barraIn;
	$resultadoModal = $resultadoModal + endDiv + barraIn;
	 
	 
	 document.getElementById("idModal").innerHTML=" \
          "+" \ "			
	   +$resultadoModal+" \ ";
	 
 }
 
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
 
 
 const getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

const getSelector = element => {
  let selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = `#${hrefAttr.split('#')[1]}`;
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

const getSelectorFromElement = element => {
  const selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

const getElementFromSelector = element => {
  const selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END));
};

const isElement = obj => {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
  }

  return typeof obj.nodeType !== 'undefined';
};

const getElement = obj => {
  if (isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
  }

  return null;
};

const noop = () => {};

const elementMap = new Map();
const Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }

    instanceMap.set(key, instance);
  },

  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }

    const instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }

};

////////////////////////////////////
const elementReg = new Map();
const Dato = {
  set(element, key, instance) {
    if (!elementReg.has(element)) {
      elementReg.set(element, new Map());
    }

    const instanceReg = elementReg.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceReg.has(key) && instanceReg.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceReg.keys())[0]}.`);
      return;
    }

    instanceReg.set(key, instance);
  },

  get(element, key) {
    if (elementReg.has(element)) {
      return elementReg.get(element).get(key) || null;
    }

    return null;
  },

  remove(element, key) {
    if (!elementReg.has(element)) {
      return;
    }

    const instanceReg = elementReg.get(element);
    instanceReg.delete(key); // free up element references if there are no instances left for an element

    if (instanceReg.size === 0) {
      elementReg.delete(element);
    }
  }

};

////////////////////////////////////

const VERSION = '5.1.3';

class BaseComponent {
  constructor(element) {
    element = getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    Object.getOwnPropertyNames(this).forEach(propertyName => {
      this[propertyName] = null;
    });
  }

  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  /** Static */


  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }

  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }

  static get VERSION() {
    return VERSION;
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }

  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }

}

/////////////////////////////////////

class BaseRegistro {
  constructor(element) {
    element = getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    Dato.set(this._element, this.constructor.DATO_KEY, this);
  }

  dispose() {
    Dato.remove(this._element, this.constructor.DATO_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    Object.getOwnPropertyNames(this).forEach(propertyName => {
      this[propertyName] = null;
    });
  }

  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  /** Static */
  
  registro = [];


  static getInstance(element) {
    return Dato.get(getElement(element), this.DATO_KEY);
  }

  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }

  static get VERSION() {
    return VERSION;
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }

  static get DATO_KEY() {
    return `bs.${this.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${this.DATO_KEY}`;
  }

}

var primer = new BaseRegistro;

async function leerArchivos(){

   await fetch(url_dataOficiales) 
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
   datos.gl_oficiales.forEach(gl_oficiales => {
          console.log(`Oficiales: ${gl_oficiales.id} - ${gl_oficiales.nombre}  `);
          moficiales.set(gl_oficiales.id.toString(),`(${gl_oficiales.nombre}) `);
    });   
}

}

async function sincronizarDatos(){
   
    const sincronizacion = await fetch(url_oficiales)
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.log(error));

}

///////////////////////////////////// 
 
 function init_departamentos() {

        sincronizarDatos();
		setDate();
        leerArchivos();
		list_departamentos();		
}
	
function isValores(iValue, iIndex, aArray)	{
		$Valores.push(iValue);
		return ($Valores);
}
	
function list_departamentos() {
	
	totalDepartamentos = mdepartamentos.size;
	//alert("Total de Contratas: "+totalDepartamentos);
	var ssValor = mdepartamentos.values(i);	
	ssValor = mdepartamentos.forEach(isValores);
	
	for (var i = 0; i < totalDepartamentos; i++) {			

		if (i == 0){		
			$resultadoContratas = $resultadoContratas + aClassActive;
			$resultadoContratas = $resultadoContratas + divClass+barraIn;
			$resultadoContratas = $resultadoContratas + beginStrong + $Valores[i] + endStrong+barraIn;
			result = isCount_(empleadosGrupo.adep,$Valores[i]);
			$resultadoContratas = $resultadoContratas + beginSmall + result + endSmall+barraIn;
			$resultadoContratas = $resultadoContratas + endDiv+barraIn;
			$resultadoContratas = $resultadoContratas + beginDivClass +personalGrupo+"Departamento "+ $Valores[i] + endDiv+barraIn;
			$resultadoContratas = $resultadoContratas + endA+barraIn;
			document.getElementById('transporte').innerHTML = $Valores[i];
		}
		else {
		$resultadoContratas = $resultadoContratas + aClass+barraIn;
		$resultadoContratas = $resultadoContratas + divClass+barraIn;
		$resultadoContratas = $resultadoContratas + beginStrong + $Valores[i] + endStrong+barraIn;
		result = isCount_(empleadosGrupo.adep,$Valores[i]);
		$resultadoContratas = $resultadoContratas + beginSmall + result + endSmall+barraIn;
		$resultadoContratas = $resultadoContratas + endDiv+barraIn;
		$resultadoContratas = $resultadoContratas + beginDivClass +personalGrupo+"Departamento "+ $Valores[i] + endDiv+barraIn;
	$resultadoContratas = $resultadoContratas + endA+barraIn;	}
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