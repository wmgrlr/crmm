/*!
 * reloj.js JavaScript Library v1.1.0
 * https://admingrlr.byethost7.com/
 *
 *
 *
 * Copyright Gilber Linares
 * Released 
 * 
 *
 * Date: 2022-03-13
 */
 
 
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.gl_reloj_ex = global.gl_reloj_ex || {}));
})(this, (function (exports) { 'use strict';

 var diaHoy = gl_fecha.fecha_hoy_for('DD/MM/YYYY');
 var diaSemana = gl_fecha.dia_semana(gl_fecha.fecha_hoy());
 //setDate();
			
 function reloj() {
		var hoy=new Date(); var h=hoy.getHours(); var m=hoy.getMinutes(); var s=hoy.getSeconds();		
		if (window.getSelection){
			theText = window.getSelection.toString();
		}
		else if (window.getSelection){
			theText = document.getSelection;
		}
		m = actualizarHora(m); s = actualizarHora(s); h = actualizarHora(h);
		document.getElementById('displayReloj').innerHTML = h+":"+m+":"+s;
		
		_nameOpener = document.title;		
		
		var t = setTimeout(function(){reloj()},500);
	}
			
 function actualizarHora(i) {
		if (i<10) {i = "0" + i}; // Añadir el cero en números menores de 10
			return i;
	}
	
 function setDate() {
		
		diaHoy = gl_fecha.fecha_hoy_for('DD/MM/YYYY');
	    diaSemana = gl_fecha.dia_semana(gl_fecha.fecha_hoy());		
		document.getElementById('diaHoy').innerHTML = diaHoy;
		document.getElementById('diaSemana').innerHTML = diaSemana;
		//}
		reloj();
	}	


 exports.diaHoy = diaHoy;
 exports.diaSemana = diaSemana;
 exports.reloj = reloj;
 exports.actualizarHora = actualizarHora;
 exports.setDate = setDate;

Object.defineProperty(exports, '__esModule', { value: true });

}));


