console.log("Param Modules...Recepción...");

import * as gl_fecha from './gl_fecha.js';
import * as gl_reloj from './gl_reloj_ex.js'
import * as gl from './gl_param_recep.js';
import * as gl_photo from './gl_photomin.js';
import { PGlite } from "https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js";

let pruebaAgua = gl.aAgua.length;

// initialize when the page has loaded
//addEvent(window, "load", init_param);

function init_param() {		
		
		gl_reloj_ex.setDate();
        let i = 0;
       
        for (let aguas of gl.aAgua) {


        if (i == 0){		
			$resultadoContratas = $resultadoContratas + aClassActive;
			$resultadoContratas = $resultadoContratas + divClass+barraIn;
			$resultadoContratas = $resultadoContratas + beginStrong + aguas[i].nombre + endStrong+barraIn;
			//result = isCount_(empleadosGrupo.adep,$Valores[i]);
			$resultadoContratas = $resultadoContratas + beginSmall + aguas[i].cedula + endSmall+barraIn;
			$resultadoContratas = $resultadoContratas + endDiv+barraIn;
			$resultadoContratas = $resultadoContratas + beginDivClass +personalGrupo+"Departamento "+ $Valores[i] + endDiv+barraIn;
			$resultadoContratas = $resultadoContratas + endA+barraIn;
			document.getElementById('transporte').innerHTML = $Valores[i];
            i++;
		}
		else {
		$resultadoContratas = $resultadoContratas + aClass+barraIn;
		$resultadoContratas = $resultadoContratas + divClass+barraIn;
		$resultadoContratas = $resultadoContratas + beginStrong + $Valores[i] + endStrong+barraIn;
		result = isCount_(empleadosGrupo.adep,$Valores[i]);
		$resultadoContratas = $resultadoContratas + beginSmall + result + endSmall+barraIn;
		$resultadoContratas = $resultadoContratas + endDiv+barraIn;
		$resultadoContratas = $resultadoContratas + beginDivClass +personalGrupo+"Departamento "+ $Valores[i] + endDiv+barraIn;
	    $resultadoContratas = $resultadoContratas + endA+barraIn;
    	i++; }
 }
 
 document.getElementById("idListadoDepartamentos").innerHTML=" \
          "+" \ "			
	   +$resultadoContratas+" \ ";


    
		alert("Dentro de la Función init_pruebas");		


}

function getFgenProto () {

   let photo = gl_photo.fgen_proto;

  return photo;

}

