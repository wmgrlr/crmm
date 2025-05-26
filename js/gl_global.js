/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 'use strict'
 
 var classActive = "list-group-item list-group-item-action active py-3 lh-tight";
 var classInActive = "list-group-item list-group-item-action py-3 lh-tight";
 var $resultado2 = '';
 var lValue = [];
 
function addEvent(to, type, fn){
    if(document.addEventListener){
        to.addEventListener(type, fn, false);
    } else if(document.attachEvent){
        to.attachEvent('on'+type, fn);
    } else {
        to['on'+type] = fn;
    }  
}

// initialize when the page has loaded
addEvent(window, "load", initialize);

function initialize(){
	lisActive_();
	setDate();
	//addEvent(document.getElementById("sample"), "click", handleClick);
	//addEvent(document.getElementById("sample"), "resize", setHiliter);
}
// preserve reference to last clicked elem so resize can reuse it
var lastElem;
// TextRectangle left tends to be out of registration by a
var rectLeftCorrection = 2;
// process mouse click

function handleClick() {
	var elem = (event.target) ? event.target : event.srcElement;
	if (elem.className && elem.className == "sample") {
		// set hiliter element only on a subset of elements
		lastElem = elem;
		setHiliter();
	}
	else 	{
		// otherwise, hide the hiliter
		hideHiliter();
	}
}

function setHiliter(){
	if (lastElem)	{
		var textRect = lastElem.getBoundingClientRect();
		hiliter.style.pixelTop = textRect.top + document.body.scrollTop;
		//hiliter.style.pixelLeft = textRect.left + document.body.scrollLeft – rectLeftCorrection;
		hiliter.style.pixelHeight = textRect.bottom - textRect.top;
		hiliter.style.pixelWidth = textRect.right - textRect.left;
		hiliter.style.visibility = "visible";
		}
}

function hideHiliter(){
	hiliter.style.visibility = "hidden";
	lastElem = null;
}


function isCount_ (aArreglo, iValor){
	
	var lValue = [];
	var rResultado;
	var rTotal = 0;
	
	rResultado = aArreglo.filter(iContar_);	
	
	function iContar_ (iValue, iIndex, aArray){
	
	if (aArray[iIndex] == iValor){
		//lValue.push(iIndex);	
        rTotal = rTotal + 1;		
	}
	return (iValue);
}	
	
	return (rTotal);
}

function isDepartamento_ (iValue, iIndex, aArray){
	
	if (aArray[iIndex] == " C&amp;C "){
		lValue.push(iIndex);
		//return (iIndex);
	}
	return (lValue );
}

function isExiste_ (iValue, iIndex, aArray)	{
		
	var lValue = iValue;
	var lResult = [];
		
	for (var i = 0; i < aArray.length; i++) {			
		if (aArray[i] == lValue){
				
			lResult[i] = i;
			aIndexTemp[i] = i;
			aIndexName[i] = empleadosGrupo.anombre[i];
			
			$resultado2 = $resultado2 + liClass+barraIn;
			$resultado2 = $resultado2 + labelClass1+barraIn;
			$resultado2 = $resultado2 + inputClass1+barraIn;
			$resultado2 = $resultado2 + vSpan1+barraIn;
			$resultado2 = $resultado2 + empleadosGrupo.anombre[i];
			$resultado2 = $resultado2 + endSpan1+barraIn;
			$resultado2 = $resultado2 + endLabelA+barraIn;
			$resultado2 = $resultado2 + endLi+barraIn;
		}

	}
		
		return (lResult);
}

function lisActive_(ev) {
	  var transporte;
	  var destino;
	  var arrayLength;	  
	  var result;
	  var index;	  
	  
	  if (!ev == null) {
		  var nameEv = ev.className;
	  }
	  	  
	  var selection = window.getSelection();
	  _nameOpener = document.title;
	  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[class="list-group-item list-group-item-action active py-3 lh-tight"]'));
	  if (tooltipTriggerList.length > 0){
		destino = tooltipTriggerList[0].childNodes;
	  }
	  if (_nameOpener !== 'departamentos_pruebas' && _nameOpener !== 'departamentos1' ){
		if ([].slice.call(tooltipTriggerList[0].querySelectorAll('[class="mb-1"]'))){
			transporte = [].slice.call(tooltipTriggerList[0].querySelectorAll('[class="mb-1"]'));
		}
	  }
	  //nombre = transporte[0].innerText;	  
	  arrayLength = empleadosGrupo.adep.length;
	  index = empleadosGrupo.adep.indexOf(" C&amp;C ");
	  result = isCount_(empleadosGrupo.adep," C&amp;C ");
	  result = empleadosGrupo.adep.filter(isDepartamento_);
	  result = empleadosGrupo.adep.find(isExiste_);	  
	  
	  if (_nameOpener == 'departamentos1'){
		  document.getElementById("idResultadoListado").innerHTML=" \
			"+" \ "			
			+$resultado2+" \ ";
	  }
	  
	  if (_nameOpener !== 'departamentos_pruebas' && _nameOpener !== 'departamentos1'){
		document.getElementById('transporte').innerHTML = transporte[0].innerHTML;
		destino = transporte[0].childNodes;
	  }
	  //tooltipTriggerList[0].className = classInActive;
	  //ev.className = classActive;
	  //alert(nameEv);
  }