	
	/*!
	* gl_constant.js JavaScript Library v1.1.0
	* https://admingrlr.byethost7.com/
	*
	*
	*
	* Copyright Gilber Linares
	* Released 
	* 
	*
	* Date: 2022-03-29
	*/

	//'use strict'

	const _SEP            = '*';
	const _SEP_REG        = " - "
	const _NOMBRE_EMPRESA = "Serenos Los Andes, C.A. (SEANCA)";
	const _VALOR_D        = 'D';
	const _VALOR_T        = 'T';
	const _VALOR_N        = 'N';
	const _CLAVE_N        = 'ROMEO II'; 
    const _CLAVE_SERV     = 'Quizanda 13.';
	

	const _SALUDO1        = 'Buenos Días';
	const _SALUDO2        = 'Buenas Tardes';
	const _SALUDO3        = 'Buenas Noches';
	
	const _turno1l        = 'btur1l';
	const _turno1s        = 'btur1s';
	const _turno2l        = 'btur2l';
	const _turno2s        = 'btur2s';
	const _turno3l        = 'btur3l';
	const _turno3s        = 'btur3s';
	const _turnocl        = 'bturcl';
	const _turnocs        = 'bturcs';

	const _FRMFECHA1      = 'DD/MM/YYYY';

    //const url_oficiales   = 'http://desarrollo.byethost7.com/tubrica/fuentes/generarjson/generarjson.php?op=13';
    //const url_dataOficiales = 'http://desarrollo.byethost7.com/tubrica/fuentes/data/gl_oficiales.json';      
    //const url_dataRolGuardias = 'http://desarrollo.byethost7.com/tubrica/fuentes/data/gl_rol_guardias.json'; 

    const url_oficiales   = 'generarjson/generarjson.php?op=13';
    const url_dataOficiales = 'data/gl_oficiales.json';      
    const url_dataRolGuardias = 'data/gl_rol_guardias.json';   
	
	var theText;
	
	/*!
	*  Días de la semana Ingles
	* #**************************
	*/
	const _FRMDIA1INGLES  = 'Monday';
	const _FRMDIA2INGLES  = 'Tuesday';
	const _FRMDIA3INGLES  = 'Wednesday';
	const _FRMDIA4INGLES  = 'Thursday';
	const _FRMDIA5INGLES  = 'Friday';
	const _FRMDIA6INGLES  = 'Saturday';
	const _FRMDIA7INGLES  = 'Sunday';

	/*!
	*  Días de la semana Español
	* #**************************
	*/
	const _FRMDIA1ESPA   = 'Lunes';
	const _FRMDIA2ESPA   = 'Martes';
	const _FRMDIA3ESPA   = 'Miércoles';
	const _FRMDIA4ESPA   = 'Jueves';
	const _FRMDIA5ESPA   = 'Viernes';
	const _FRMDIA6ESPA   = 'Sábado';
	const _FRMDIA7ESPA   = 'Domingo';
		
	var labelClass     = '<label class="list-group-item d-flex gap-2">';
	var inputClass     = '<input class="form-check-input flex-shrink-0" type="checkbox" value="">  <span>';
	var vSpan          = '<span>';
	var endEpan        = '</span> </label>';
	var barraIn        = ' \ ';
	var endDivDiv      = '</div> </div>';
	var beginDivClass  = '<div class="list-group mx-0"> \ ';
	
	/*!
	* Generar Listado de Empleados
	* por departamentos
	* #**************************
	*/
	var liClass        = '<li><a class="dropdown-item d-flex align-items-center gap-2 py-2" >';
	var labelClass1    = '<label class="list-group-item d-flex gap-2">';
	var inputClass1    = '<input class="form-check-input flex-shrink-0" type="checkbox" value="" onselect="insertRegSelect(this)"  >';
	var vSpan1         = '<span>';
	var endSpan1       = '</span>'
	var endLabelA      = '</label></a>';
	var endLi          = '</li>';
	
	/*!
	* Generar Listados 
	***************************
	*/
	var personalGrupo  = ' Lista ';
	var aClassActive   = '<a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true" onclick="lisActive(this)">';
	var aClass         = '<a href="#" class="list-group-item list-group-item-action py-3 lh-tight" onclick="lisActive(this)">';
	var divClass       = '<div class="d-flex w-100 align-items-center justify-content-between">';
	var beginStrong    = '<strong class="mb-1">';
	var endStrong      = '</strong>';
	var beginSmall     = '<small class="text-muted">';
	var endSmall       = '</small>';
	var endDiv         = '</div>';
	var beginDivClass  = '<div class="col-10 mb-1 small">';
	var endA           = '</a>';
	
	/*!
	* Generar Tabla empleados Seleccionados  
	*****************************************
	*/
	var divClassContainer = '<div class="container">';
	var divClassTableResponsive = '<div class="table-responsive">';
	// <table class="table table-striped table-sm">
	var classTable        = '<table class="table table-striped table-sm">';
	//var classTable        = '<table class="table" >';
	var thHead = '<thead> <tr>  <th>Reg</th> <th>Departamento</th> <th>Trabajador</th> <th>Hora de Llegada</th> <th>Hora de Salida</th> <th>Firma</th> </tr> </thead> ';
	var begingTbody = '<tbody>';
	var begingTr = '<tr>';
	var begingTd = '<td>';
	var endTd = '</td>';
	var endTr = '</tr>';
	var endTbody = '</tbody>';
	var endTabla = '</table>';
		
	var _informador = "Gilber Linares";
	var _cargoinfor = "Supervisor";
	var _nameOpener = "";
	
	/*!
	* Generar Modal  
	*****************************************
	*/
	var modalClass = '<div class="modal modal-alert" tabindex="-1" role="dialog" id="modalChoice" aria-labelledby="modalChoice" aria-hidden="true">';
	var modalDialog = '<div class="modal-dialog" role="document">';
	var modalContext = '<div class="modal-content rounded-4 shadow">';
	var modalBody = '<div class="modal-body p-4 text-center">';
	var classMb0 = '<h5 class="mb-0">Actualizar Hora Llegada/Salida</h5>';
	var classMy4  = '<hr class="my-4">';
	var pClassDepartamento = '<p class="mb-0" align="left">Departamento: </p>';
	var pClassTrabajador = '<p class="mb-0" align="left">Trabajador: </p>';
	var pClassHoraLlegada = '<p class="mb-0" align="left">Hora de Llegada: </p>';
	var hrClass = '<hr class="my-4">';
	var buttonCheckIn = '<button class="w-50 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Check-In!</button>';
	var pClassHoraSalida = '<p class="mb-0" align="left">Hora de Salida: </p>';
	var buttonCheckOut = '<button class="w-50 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Check-Out!</button>';
	var divClassModal = '<div class="modal-footer flex-nowrap p-0">';
	var buttonAceptar = '<button class="w-50 mb-2 btn btn-lg rounded-4 btn-primary" type="button" data-dismiss="modal">Aceptar!</button>';
	var buttonCancelar = '<button class="w-50 mb-2 btn btn-lg rounded-4 btn-primary" type="button" data-dismiss="modal" >Cancelar!</button>';	
    var br = '<br>';
    var buttonClass = '<button class="w-100 btn btn-lg btn-primary" type="button" align="center" id="btGenerar" onclick="insertRegDepartamentos(this)"  >Generar!</button>';
	
	var _OK = 'Informa el '+_informador+', que el servicio a la hora se encuentra *sin novedad*.'; 
	var _28 = 'Informa el '+_informador+', que el servicio se encuentra sin fluido eléctrico.';
	var _29 = 'Informa el '+_informador+', que el servicio se encuentra sin fluido eléctrico, con la planta eléctrica en funcionamiento.';

    let mapa= new Map();
	mapa.set("0","D");
	mapa.set("1","D");
	mapa.set("2","D");
	mapa.set("3","D");
	mapa.set("4","D");
	mapa.set("5","D");
	mapa.set("6","D");
	mapa.set("7","D");
	mapa.set("8","D");
	mapa.set("9","D");
	mapa.set("10","D");
	mapa.set("11","D");
	mapa.set("12","T");
	mapa.set("13","T");
	mapa.set("14","T");
	mapa.set("15","T");
	mapa.set("16","T");
	mapa.set("17","T");
	mapa.set("18","T");
	mapa.set("19","N");
	mapa.set("20","N");
	mapa.set("21","N");
	mapa.set("22","N");
	mapa.set("23","N");
	
	/*!
	* Diccionarios para la definición de los Cargos
	* *********************************************/
	let mcargos= new Map();
	mcargos.set("01","Oficial");
	mcargos.set("02","Inspector");
	mcargos.set("03","Supervisor");
	mcargos.set("04","Supervisor de Operaciones");
	mcargos.set("05","Coordinador");
	mcargos.set("06","Romanero");
	mcargos.set("07","Auditor");
	mcargos.set("08","Jefe de Grupo"); 
	
	/*!
	* Diccionarios para la definición de los Recorridos
	* ****************************************************
	*/
	let mrecorridos = new Map();
	mrecorridos.set("01","Reporte 1: 18:00");
	mrecorridos.set("02","Reporte 2: 20:00");
	mrecorridos.set("03","Reporte 3: 22:00");
	mrecorridos.set("04","Reporte 4: 00:00");
	mrecorridos.set("05","Reporte 5: 01:40");
	mrecorridos.set("06","Reporte 6: 03:20");
	mrecorridos.set("07","Reporte 7: 05:00");	
	
	/*!
	* Diccionarios para la definición de los Visitantes
	* ****************************************************
	*/
	let mvisitantes = new Map();
	mvisitantes.set("01","Resistencias Lugo, FP");
	mvisitantes.set("02","V.J. Forklitt,C.A.");
	mvisitantes.set("03","BERACA, C.A");
	mvisitantes.set("04","EUROCORTE Centro, C.A."); 
	mvisitantes.set("05","COPYTONER");
	mvisitantes.set("06","Distrbuidora de Agua Potable SYD");
	mvisitantes.set("07","NEUMATISCH");
	mvisitantes.set("08","MANTELEC");
	mvisitantes.set("09","RODAMIENTO Y SERVICIOS");
	mvisitantes.set("10","RODAMIENTOS DEL NORTE");
	mvisitantes.set("11","ROLINTEX");
    mvisitantes.set("12","Extintores Valencia 2022, C.A.");
    mvisitantes.set("13","PARTICULAR");
    mvisitantes.set("14","Alpha Uno, C.A.");
    mvisitantes.set("15","Grupo Sanoa, C.A.");
    mvisitantes.set("16","Construcciones Xpress");
    mvisitantes.set("17","Conge, C.A.");
	
	/*!
	* Diccionarios para la definición de los Materiales de Apoyo
	* **********************************************************
	*/
	let mlogisticos = new Map();
	mlogisticos.set("01","(01) Computador marca Hp con monitor, teclado y mouse.");
	mlogisticos.set("02","(01) Impresora marca Hp.");
	mlogisticos.set("03","(01) Aire acondicionado FRIGILUX");
	mlogisticos.set("04","(01) Microondas marca Samsung.");
	mlogisticos.set("05","(01) Filtro de agua potable.");
	mlogisticos.set("06","(01) Cámara digital marca Canon con su forro, cable USB, batería, y tarjeta de memoria de 4GB.");
	mlogisticos.set("07","(02) Sello para el control de salida.");
	mlogisticos.set("08","(01) Marca Huella.");
	mlogisticos.set("09","(02) Resaltadores.");
	mlogisticos.set("10","(01) Abre hueco.");
	mlogisticos.set("11","(01) Grapadora.");
	mlogisticos.set("12","(01) Saca grapa.");
	mlogisticos.set("13","(02) Reglas una de 30cm. La otra de 40 cm.");
	mlogisticos.set("14","(01) Tijera.");
	mlogisticos.set("15","(01) Pizarra.");
	mlogisticos.set("16","(01) Cartelera");
	mlogisticos.set("17","(02) Papelera.");
    mlogisticos.set("18","(02) Libro de novedades diarias.");
    mlogisticos.set("19","(02) Escritorios de Madera.");
    mlogisticos.set("20","(04) Sillas de Oficina.");
    mlogisticos.set("21","(01) Teléfono Tecno con su cargador");
    mlogisticos.set("22","(01) Teléfono ITEL-A50 con su cargador");
    mlogisticos.set("23","(32) Juegos de Llaves ");
    mlogisticos.set("24","(02) Radio tx-rx portátil marca QUANTUM con su cargador.");
    mlogisticos.set("25","(01) Radio portátil marca BOAFENG");
    mlogisticos.set("26","(01) Radio portátil marca MOTOROLA con su cargador");
    mlogisticos.set("27","(01) Radio portátil marca RETEVIS con su cargador");
    mlogisticos.set("28","(02) Control remoto de los cercos eléctricos.");
    mlogisticos.set("29","(01) Control remoto de aire acondicionado Split.");
    mlogisticos.set("30","(02) Cadenas con sus candados de la puerta y portón principales.");
    mlogisticos.set("31","(03) Linternas.");    
    mlogisticos.set("32","(01) Sombrilla.");  
    mlogisticos.set("33","(01) Cafetera.");  
	
	/*!
	* Diccionarios para la definición de los MArcajes QR
	* ****************************************************
	*/
	let mmarcajes = new Map();
	mmarcajes.set("01","Marcaje QR 1: 18:00");
	mmarcajes.set("02","Marcaje QR 2: 19:00");
	mmarcajes.set("03","Marcaje QR 3: 21:00");
	mmarcajes.set("04","Marcaje QR 4: 00:00");
	mmarcajes.set("05","Marcaje QR 5: 01:30");
	mmarcajes.set("06","Marcaje QR 6: 03:10");
	mmarcajes.set("07","Marcaje QR 7: 05:00");	

	/*!
	* Diccionarios para la definición de las Contratas
	* **********************************************
	*/
	let mcontratas = new Map();
	mcontratas.set("01","ArmorGroup");
	mcontratas.set("02","SOEMCA");
	mcontratas.set("03","Sermalite");
	mcontratas.set("04","Global Aire");
	mcontratas.set("05","Fuservi");
	mcontratas.set("06","Todo Salud");
	mcontratas.set("07","HeroMacon");
	mcontratas.set("08","SercoInfal");    
	mcontratas.set("09","Mantevac");
	mcontratas.set("10","Mamproyec");
	mcontratas.set("11","DOZALKAR");
	mcontratas.set("12","ITB");
	mcontratas.set("13","POSEIDON");
	mcontratas.set("14","Inversiones Jorales");	
	
	/*!
	* Diccionarios para la definición de los Trnsportistas
	* ****************************************************
	*/
	let mtransportistas = new Map();
	mtransportistas.set("01","Costa Brava");
	mtransportistas.set("02","Mateos");
	mtransportistas.set("03","SLCA");
	mtransportistas.set("04","LORUSSO");
	mtransportistas.set("05","FREIMAR");
	mtransportistas.set("06","Transporte Hernández");
	mtransportistas.set("07","SAMA");
	mtransportistas.set("08","GAMA");    
	mtransportistas.set("09","PGM");	
	mtransportistas.set("10","JM");
	mtransportistas.set("11","TRAINCAR");
	mtransportistas.set("12","TRANSERAL");
	mtransportistas.set("13","P&P");
	mtransportistas.set("14","LEOAR");
	mtransportistas.set("15","IDA");
	mtransportistas.set("16","BELTRUNCHE");
	mtransportistas.set("17","UNICAR");
	mtransportistas.set("18","MTO");	
	mtransportistas.set("19","SOLVEN");
	mtransportistas.set("20","ARCADE");
	mtransportistas.set("21","ARCAL");
	mtransportistas.set("22","AMARITRANS");
	mtransportistas.set("23","PUMPERVAC");
	
	/*!
	// **************************************
	// Registros del transporte de personal
	// turno 1 llegada
	// ***************************************
	*/	
	function regTransporteTurno1l(fecha, hora, ruta, cantidad) {
		this.fecha = fecha;
		this.hora = hora;
		this.ruta = ruta;		
		this.cantidad = cantidad;
		regTransporteTurno1l.reg.push(this.fecha+_SEP_REG+this.hora+_SEP_REG+this.ruta+_SEP_REG+this.cantidad);				
	}	
	regTransporteTurno1l.reg = [];
	
	/*!
	// **************************************
	// Registros del transporte de personal
	// turno 1 salida
	// ***************************************
	*/	
	function regTransporteTurno1s(fecha, hora, ruta, cantidad) {
		this.fecha = fecha;
		this.hora = hora;
		this.ruta = ruta;		
		this.cantidad = cantidad;
		regTransporteTurno1s.reg.push(this.fecha+_SEP_REG+this.hora+_SEP_REG+this.ruta+_SEP_REG+this.cantidad);				
	}	
	regTransporteTurno1s.reg = [];
	
	/*!
	* **************************************
	* Registros del transporte de personal
	* turno 2 llegada
	* ***************************************
	*/
	function regTransporteTurno2l(fecha, hora, ruta, cantidad) {
		this.fecha = fecha;
		this.hora = hora;
		this.ruta = ruta;		
		this.cantidad = cantidad;
		regTransporteTurno2l.reg.push(this.fecha+_SEP_REG+this.hora+_SEP_REG+this.ruta+_SEP_REG+this.cantidad);				
	}	
	regTransporteTurno2l.reg = [];
	
	/*!
	* **************************************
	* Registros del transporte de personal
	* turno 2 salida
	* ***************************************
	*/	
	function regTransporteTurno2s(fecha, hora, ruta, cantidad) {
		this.fecha = fecha;
		this.hora = hora;
		this.ruta = ruta;		
		this.cantidad = cantidad;
		regTransporteTurno2s.reg.push(this.fecha+_SEP_REG+this.hora+_SEP_REG+this.ruta+_SEP_REG+this.cantidad);				
	}	
	regTransporteTurno2s.reg = [];
	
	/*!
	* **************************************
	* Registros del transporte de personal
	* turno 3 llegada
	* ***************************************
	*/	
	function regTransporteTurno3l(fecha, hora, ruta, cantidad) {
		this.fecha = fecha;
		this.hora = hora;
		this.ruta = ruta;		
		this.cantidad = cantidad;
		regTransporteTurno3l.reg.push(this.fecha+_SEP_REG+this.hora+_SEP_REG+this.ruta+_SEP_REG+this.cantidad);				
	}	
	regTransporteTurno3l.reg = [];
	
	/*!
	* **************************************
	* Registros del transporte de personal
	* turno 3 salida
	* ***************************************
	*/	
	function regTransporteTurno3s(fecha, hora, ruta, cantidad) {
		this.fecha = fecha;
		this.hora = hora;
		this.ruta = ruta;		
		this.cantidad = cantidad;
		regTransporteTurno3s.reg.push(this.fecha+_SEP_REG+this.hora+_SEP_REG+this.ruta+_SEP_REG+this.cantidad);				
	}	
	regTransporteTurno3s.reg = [];
	
	/*!
	* ****************************************
	* Registros del transporte de personal
	* turno Central llegada
	* ***************************************
	*/	
	function regTransporteTurnocl(fecha, hora, ruta, cantidad) {
		this.fecha = fecha;
		this.hora = hora;
		this.ruta = ruta;		
		this.cantidad = cantidad;
		regTransporteTurnocl.reg.push(this.fecha+_SEP_REG+this.hora+_SEP_REG+this.ruta+_SEP_REG+this.cantidad);				
	}	
	regTransporteTurnocl.reg = [];
	
	/*!
	* **************************************
	* Registros del transporte de personal
	* turno Central salida
	* **************************************
	*/	
	function regTransporteTurnocs(fecha, hora, ruta, cantidad) {
		this.fecha = fecha;
		this.hora = hora;
		this.ruta = ruta;		
		this.cantidad = cantidad;
		regTransporteTurnocs.reg.push(this.fecha+_SEP_REG+this.hora+_SEP_REG+this.ruta+_SEP_REG+this.cantidad);				
	}	
	regTransporteTurnocs.reg = [];
	
	 
	function DatoCollec() {
		this.elms = new Array();
	}

	DatoCollec.prototype.add = function (elm) {
		this.elms.push(elm);
	}

	DatoCollec.prototype.at = function (index) {
		return this.elms[index];
	}

	DatoCollec.prototype.size = function () {
		return this.elms.length;
	}

	DatoCollec.prototype.removeFirst = function () {
		return this.elms.pop();
	}

	DatoCollec.prototype.remove = function (elm) {
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
	
	function regListadoTrabajadores( fecha, dia, hora, dep, nombre) {
		  this.fecha = fecha;
          this.dia = dia;
          this.hora = hora;
          this.dep = dep;
		  this.nombre = nombre;
		  regListadoTrabajadores.grupo.push(this.fecha+_SEP_REG+this.dep+_SEP_REG+this.nombre+_SEP_REG+this.hora);
          regListadoTrabajadores.grupoAll.push({fecha:this.fecha, dia:this.dia, hora:this.hora, dep:this.dep, nombre:this.nombre});;
		  regListadoTrabajadores.fecha.push(this.fecha);
		  regListadoTrabajadores.adep.push(this.dep);
	      regListadoTrabajadores.anombre.push(this.nombre);
		}
	   	      
		regListadoTrabajadores.grupo = [];
        regListadoTrabajadores.grupoAll = [];
		regListadoTrabajadores.fecha = [];
		regListadoTrabajadores.adep = [];
		regListadoTrabajadores.anombre = [];

    arregloEmpleado =["cod","dep","nombre"];    

    function empleadosGrupo (cod, dep, nombre) {
		this.cod = cod;
		this.dep = dep;
		this.nombre = nombre;		
		empleadosGrupo.grupo.push(this.cod+_SEP_REG+this.dep+_SEP_REG+this.nombre);
        empleadosGrupo.grupoAll.push({cod:this.cod, dep:this.dep, nombre:this.nombre});
		empleadosGrupo.acod.push(this.cod);
		empleadosGrupo.adep.push(this.dep);
		empleadosGrupo.anombre.push(this.nombre);
	}

    // ["01",{id:"01", nombre:"FRANCISCO CUEVAS",cedula:"12.952.073",telefono:"0414-4993393",cod_empresa:"01",string_1:"Conductor" }],   	      
	empleadosGrupo.grupo = [];
    empleadosGrupo.grupoAll = [];
	empleadosGrupo.acod = [];
	empleadosGrupo.adep = [];
	empleadosGrupo.anombre = [];	  
	
	aIndexTemp = [];
	aIndexName = [];
					 
	function baseEmpleados(cod, dep, name) {
		this.cod = new Array();
		this.dep = new Array();
		this.name = new Array();			  
	}
		
	baseEmpleados.prototype.add = function (cod, dep, name) {
		this.cod.push(cod);
		this.dep.push(dep);
		this.name.push(name);
	}

	baseEmpleados.prototype.at = function (index) {
		return this.cod[index];
	}

	baseEmpleados.prototype.size = function () {
		return this.cod.length;
	}

	baseEmpleados.prototype.removeFirst = function () {
		return this.cod.pop();
	}

    /*
    * ******************************************************	
	* Diccionarios para la definición de los Conductores
	* *******************************************************
	*/
	let mconductores = new Map();
	mconductores.set("01","FRANCISCO CUEVAS");
	mconductores.set("02","OSCAR FALCON");
	mconductores.set("03","LUIS GARCIA");
	mconductores.set("04","JHONY SANCHEZ");
	mconductores.set("05","CARLOS PINO");
	mconductores.set("06","DEIVIS CONTRERAS");
    mconductores.set("07","ANDRES VELAZCO");
    mconductores.set("08","RICARDO VASQUEZ");
    mconductores.set("09","MANUEL MARIN");

    let aconductores = [
    ["01",{id:"01", nombre:"FRANCISCO CUEVAS",cedula:"12.952.073",telefono:"0414-4993393",cod_empresa:"01",string_1:"Conductor" }],
    ["02",{id:"02", nombre:"OSCAR FALCON",cedula:"21.464.064",telefono:"0424-4159099",cod_empresa:"01",string_1:"Conductor" }],
    ["03",{id:"03", nombre:"LUIS GARCIA",cedula:"7.070.935",telefono:"0414-4170748",cod_empresa:"01",string_1:"Conductor" }],
    ["04",{id:"04", nombre:"JHONY SANCHEZ",cedula:"16.965.759",telefono:"0424-4632400",cod_empresa:"01",string_1:"Conductor" }],
    ["05",{id:"05", nombre:"CARLOS PINO",cedula:"16.157.083",telefono:"0412-7464466",cod_empresa:"01",string_1:"Conductor" }],
    ["06",{id:"06", nombre:"DEIVIS CONTRERAS",cedula:"18.613.797",telefono:"0424-4250633",cod_empresa:"01",string_1:"Conductor" }],
    ["07",{id:"07", nombre:"ANDRES VELAZCO",cedula:"17.904.561",telefono:"    ",cod_empresa:"01",string_1:"Conductor" }],
    ["08",{id:"08", nombre:"RICARDO VASQUEZ",cedula:"11.141.946",telefono:"0412-7811967",cod_empresa:"01",string_1:"Conductor" }],
    ["09",{id:"09", nombre:"MANUEL MARIN",cedula:"12.330.836",telefono:"0424-6448754",cod_empresa:"01",string_1:"CHOFER" }],
    ];

     /*
    * ******************************************************	
	* Diccionarios para la definición de los vehículos
	* *******************************************************
	*/
	let mvehiculos = new Map();
	mvehiculos.set("01","Optra - AC3920A");
	mvehiculos.set("02","Dmax - A60AL7K");
	mvehiculos.set("03","Tucson - GDI92X");
	mvehiculos.set("04","Iveco - 29A10AP");
	mvehiculos.set("05","Aveo - AD7230A");
	mvehiculos.set("06","Arauca - AG349EG");
    mvehiculos.set("07","Silverado - A41AV57");
    mvehiculos.set("08","Aveo - ACO87IP");

    let avehiculos = [
    ["01",{id:"01", modelo:"Optra - AC3920A", marca:"CHEVROLET", placa:"AC3920A",string_1:"Vehículo" }],
    ["02",{id:"02", modelo:"Dmax - A60AL7K", marca:"CHEVROLET", placa:"A60AL7K",string_1:"Vehículo" }],
    ["03",{id:"03", modelo:"Tucson - GDI92X", marca:"HYUNDAI", placa:"GDI92X",string_1:"Vehículo" }],
    ["04",{id:"04", modelo:"Iveco - 29A10AP", marca:"IVECO", placa:"29A10AP",string_1:"Vehículo" }],
    ["05",{id:"05", modelo:"Aveo - AD7230A", marca:"CHEVROLET", placa:"AD7230A",string_1:"Vehículo" }],
    ["06",{id:"06", modelo:"Arauca - AG349EG", marca:"CHERY", placa:"AG349EG",string_1:"Vehículo" }],
    ["07",{id:"07", modelo:"Silverado - A41AV57", marca:"CHEVROLET", placa:"A41AV57",string_1:"Vehículo" }],    
    ["08",{id:"08", modelo:"Aveo - ACO87IP", marca:"CHEVROLET", placa:"ACO87IP",string_1:"Vehículo" }],
    ];

    /*********************************************************	
	* Diccionarios para la definición de los Conductores
	* *******************************************************
	*/
	let mayudantes = new Map();
	mayudantes.set("01","JESUS BERBESI");
	mayudantes.set("02","JOSE CORONA");	
    mayudantes.set("03","JOSE MONTAÑO");
    mayudantes.set("04","RUBEN GIMENEZ");
    mayudantes.set("05","ADRIAN BERBESI");
    mayudantes.set("06","VICTOR FLORES");

    let aayudantes = [
    ["01",{nombre:"JESUS BERBESI",cedula:"14.999.165",cod_empresa:"01",string_1:"Ayudante" }],
    ["02",{nombre:"JOSE CORONA",cedula:"18.241.910",cod_empresa:"01",string_1:"Ayudante" }],    
    ["03",{nombre:"JOSE MONTAÑO",cedula:"17.753.005",cod_empresa:"02",string_1:"Ayudante" }],
    ["04",{nombre:"RUBEN GIMENEZ",cedula:"15.088.371",cod_empresa:"01",string_1:"Ayudante" }],
    ["05",{nombre:"ADRIAN BERBESI",cedula:"14.999.160",cod_empresa:"01",string_1:"Ayudante" }],
    ["06",{nombre:"VICTOR FLORES",cedula:"4448.988",cod_empresa:"02",string_1:"Ayudante" }],
    ];

    /*********************************************************	
	* Diccionarios para la definición de las rutas
	* *******************************************************
	*/
	let mrutas = new Map();
	mrutas.set("01","ZONA SUR");
	mrutas.set("02","GUAYOS/GUACARA");	
    mrutas.set("03","MARIARA/SAN JOAQUIN");
    mrutas.set("04","VALENCIA");
    mrutas.set("05","SAN DIEGO/NAGUANAGUA");
    mrutas.set("06","SERVICIOS");

    let arutas = [
    ["01",{nombre:"ZONA SUR", cod_empresa:"01",string_1:"Rutas Transportes" }],
    ["02",{nombre:"GUAYOS/GUACARA", cod_empresa:"01",string_1:"Rutas Transporte" }],    
    ["03",{nombre:"MARIARA/SAN JOAQUIN", cod_empresa:"02",string_1:"Rutas Transporte" }],
    ["04",{nombre:"VALENCIA", cod_empresa:"02",string_1:"Rutas Transporte" }],
    ["05",{nombre:"SAN DIEGO/NAGUANAGUA", cod_empresa:"02",string_1:"Rutas Transporte" }],
    ["06",{nombre:"SERVICIOS", cod_empresa:"02",string_1:"Rutas Transporte" }],
    ];

    /*********************************************************	
	* Diccionarios para la definición de los turnos
	* *******************************************************
	*/
	let mturnos = new Map();
	mturnos.set("01","TURNO A");
	mturnos.set("02","TURNO B");	
    mturnos.set("03","TURNO C");
    mturnos.set("04","TURNO F");   

    let moficiales = new Map();

    /*!
	* ******************************************************	
	* Diccionarios para la definición de los Departamentos
	* *******************************************************
	*/
	let mdepartamentos = new Map();
	mdepartamentos.set("01","ADMINISTRATIVO");
	mdepartamentos.set("02","PLANTA");
	mdepartamentos.set("03","CONTRATA");
	mdepartamentos.set("04","PASANTE");
	mdepartamentos.set("05","APRENDIZ");
	mdepartamentos.set("06","SEANCA");    

	// *********************
	// Empleados Nomina Admnitrativa	
	// *********************
    // 
	empleadosGrupo("0101",mdepartamentos.get("01"),"ORLANDO SALAZAR");  
	empleadosGrupo("0102",mdepartamentos.get("01"),"JESUS LOPEZ");
	empleadosGrupo("0103",mdepartamentos.get("01"),"ANA OSORIO");
    empleadosGrupo("0104",mdepartamentos.get("01"),"MAGYURI PENA");	
	empleadosGrupo("0105",mdepartamentos.get("01"),"DERVIX ROJAS");
	empleadosGrupo("0106",mdepartamentos.get("01"),"MARLEE OROPEZA");
    empleadosGrupo("0107",mdepartamentos.get("01"),"LEYDI LARA");
	empleadosGrupo("0108",mdepartamentos.get("01"),"KATHERINE RUIZ");
	empleadosGrupo("0109",mdepartamentos.get("01"),"PEDRO BAEZA");
	empleadosGrupo("0110",mdepartamentos.get("01"),"RAIZA SUAREZ");
	empleadosGrupo("0111",mdepartamentos.get("01"),"CARMEN CISNEROS");	
	empleadosGrupo("0112",mdepartamentos.get("01"),"MARIA MARTINEZ");
    empleadosGrupo("0113",mdepartamentos.get("01"),"JOSUE MACEAS");
		
	// *********************
	// Personal de Nomina Mensual
	// *********************
    empleadosGrupo("0201",mdepartamentos.get("02"),"LAURA SALVATIERRA");
	empleadosGrupo("0202",mdepartamentos.get("02"),"JESSY URET");
    empleadosGrupo("0203",mdepartamentos.get("02"),"EDISON BOLIVAR");
    empleadosGrupo("0204",mdepartamentos.get("02"),"JOVANNY RODRIGUEZ");
    empleadosGrupo("0205",mdepartamentos.get("02"),"RIHARD DURAN");
    empleadosGrupo("0206",mdepartamentos.get("02"),"MAURO BAUSTA");
    empleadosGrupo("0207",mdepartamentos.get("02"),"ARCADIO HURTADO");
    empleadosGrupo("0208",mdepartamentos.get("02"),"GABRIEL HERRERA");
    empleadosGrupo("0209",mdepartamentos.get("02"),"HAYDED ORDONEZ");
    empleadosGrupo("0210",mdepartamentos.get("02"),"MELISSA GARCIA");
    empleadosGrupo("0211",mdepartamentos.get("02"),"HECTOR BELTRAN");    
    empleadosGrupo("0212",mdepartamentos.get("02"),"MAGNO UGUETO");
    empleadosGrupo("0213",mdepartamentos.get("02"),"JESUS BUSTAMANTE");
    empleadosGrupo("0214",mdepartamentos.get("02"),"FELIX LARA");
    empleadosGrupo("0215",mdepartamentos.get("02"),"ALEJANDRO PEREIRA");
    empleadosGrupo("0216",mdepartamentos.get("02"),"ROGER CEDENO");
    empleadosGrupo("0217",mdepartamentos.get("02"),"KELVIN LOPEZ");
    empleadosGrupo("0218",mdepartamentos.get("02"),"KELVIN PERNALETE");
    empleadosGrupo("0229",mdepartamentos.get("02"),"JEFERSSON AGUIRRE");
    empleadosGrupo("0220",mdepartamentos.get("02"),"NOEL VELIZ");    
    empleadosGrupo("0221",mdepartamentos.get("02"),"FABIAN de FARIAS");
    empleadosGrupo("0222",mdepartamentos.get("02"),"LUIS MEDINA");    
    empleadosGrupo("0223",mdepartamentos.get("02"),"HARVYS RIOS");
	empleadosGrupo("0224",mdepartamentos.get("02"),"JOSE CARRASQUERO");     	    
	empleadosGrupo("0225",mdepartamentos.get("02"),"MAXIMO LANDAETA");    
    empleadosGrupo("0226",mdepartamentos.get("02"),"JHONS CEDENO");
    empleadosGrupo("0227",mdepartamentos.get("02"),"RAFAEL PERAZA");
		
	// *********************
	// Personal de contrata
	// *********************
	empleadosGrupo("0301",mdepartamentos.get("03"),"VANESSA QUEVEDO");    
	empleadosGrupo("0302",mdepartamentos.get("03"),"NELLY HERRERA");
	empleadosGrupo("0303",mdepartamentos.get("03"),"MARCIAL CHOURIO");
	empleadosGrupo("0304",mdepartamentos.get("03"),"MIGUEL DAVALILLO");
	empleadosGrupo("0305",mdepartamentos.get("03"),"LUISANA RAMIREZ");
	empleadosGrupo("0306",mdepartamentos.get("03"),"JOSE BOLIVAR");
	empleadosGrupo("0307",mdepartamentos.get("03"),"RAMON MENDOZA");
	empleadosGrupo("0308",mdepartamentos.get("03"),"LUIS PARRA");
	empleadosGrupo("0309",mdepartamentos.get("03"),"MAXIMO ARVELO");
	empleadosGrupo("0310",mdepartamentos.get("03"),"RUBEN JIMENEZ");
    empleadosGrupo("0311",mdepartamentos.get("03"),"PEDRO BOLIVAR");
		
	// *********************
	// Personal de Pasante
	// *********************
	empleadosGrupo("0401",mdepartamentos.get("04"),"JUAN GARCIA");	
		
	// *********************
	// Personal de Aprendiz
	// *********************
	empleadosGrupo("0501",mdepartamentos.get("05"),"JEGNY PAEZ");    
	empleadosGrupo("0502",mdepartamentos.get("05"),"ALEXANDER ZERPA");
    empleadosGrupo("0503",mdepartamentos.get("05"),"JUAN BERMUDEZ");

    // *********************
	// Personal de SEANCA
	// *********************
	empleadosGrupo("0601",mdepartamentos.get("06"),"RENZO MALDONADO");    
	empleadosGrupo("0602",mdepartamentos.get("06"),"GILBER LINARES");	
    empleadosGrupo("0603",mdepartamentos.get("06"),"LEEYS NARVAEZ");
    empleadosGrupo("0604",mdepartamentos.get("06"),"ANGEL TOVAR");
    empleadosGrupo("0605",mdepartamentos.get("06"),"EDIXON MORA");
    empleadosGrupo("0606",mdepartamentos.get("06"),"JORGE TOVAR");
		
	// Diccionarios para la definición de los Grupos
	let mgrupos = new Map();
	mgrupos.set("01","Grupo A");
	mgrupos.set("02","Grupo B");
	mgrupos.set("03","Grupo C");	
    mgrupos.set("04","Grupo D");
		
	// Diccionarios para la definición de los Servicios
	let mservicios = new Map();
	mservicios.set("01","Quiminter");
	mservicios.set("02","Petrolex");		
		
	// Diccionarios para la definición de los Empleados
	let mempleados  = new Map();
	let mempleadosn = new Map();	
		
	//             Grupo Mimesa   
	// Empleados de Grupo Mimesa
	// Asociados Por Código Grupo A
	mempleados.set("010101001","GILBER LNARES");
	mempleados.set("010101002","EDIXON MORA");
	mempleados.set("030101005","JORGE TOVAR");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Nombre Grupo A
	mempleadosn.set("GILBER LINARES","010101001");
	mempleadosn.set("EDIXON MORA","010101002");
	mempleadosn.set("JORGE TOVAR","030101005");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Código Grupo B
	mempleados.set("010201006","LEEYS NARVAEZ");
	//mempleados.set("010201007","Vilian Sanchez");
	//mempleados.set("030201010","Orlando Perez");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Nombre Grupo B
	mempleadosn.set("LEEYS NARVAEZ","010201006");
	//mempleadosn.set("Vilian Sanchez","010201007");
	//mempleadosn.set("Orlando Perez","030201010");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Código Grupo C
	mempleados.set("010301011","ANGEL TOVAR");
	//mempleados.set("010301012","Jesus Blanco");
	//mempleados.set("030301015","Orlando Perez");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Nombre Grupo C
	mempleadosn.set("ANGEL TOVAR","010301011");
	//mempleadosn.set("Jesus Blanco","010301012");
	//mempleadosn.set("Orlando Perez","030301015");
		
		
	var getemiofi1 = new Array( "GILBER LINARES", "EDIXON MORA", "JORGE TOVAR" );
		
	var getemiofi2 = new Array( "LEEYS NAVAEZ" );
		
	var getemiofi3 = new Array( "ANGEL TOVAR");
		
	var getemiofi4 = new Array( "RENZO MALDONADO" );
							
	 //********************************************
	 
	  function ConfirmDemo(proceso) {
      //Ingresamos un mensaje a mostrar
        //var mensaje = confirm("¿Te gusta Desarrollo Gilber? "+proceso);
        //Detectamos si el usuario acepto el mensaje
        if (mensaje) {
         // alert("¡Gracias por aceptar!");
          }
        //Detectamos si el usuario denegó el mensaje
       else {
        //alert("¡Haz denegado el mensaje!");
         }
        }		
		
    //*********************************************		
    //           function setturno()             //
	//*********************************************
    function setturno() {
        //var selectHowTo = document.theForm.seleccion;
	    var selectturno = document.getElementById("turno");
        var theSelecTurno = selectturno.options[selectturno.selectedIndex].value;
		var selectturnotext = selectturno.options[selectturno.selectedIndex].text;
        //alert(selectturnotext+" "+theSelecTurno);
		
		var selectseleccion = document.getElementById("seleccion");
		
		//          Limpia el Selector;
		const $select = document.querySelector("#seleccion");			
        for (let i = $select.options.length; i >= 0; i--) {
              $select.remove(i);			 
        }		
				
		 if (theSelecTurno == "3" ){		
		    var option = document.createElement('option');       
            option.value = "8";
            option.text = "Quiminter";
            $select.appendChild(option);		

		}
		else {
            var option = document.createElement('option');       
            option.value = "1";
            option.text = "TUBRICA";
            $select.appendChild(option);
			
			var option = document.createElement('option');       
            option.value = "2";
            option.text = "Petrolex";
            $select.appendChild(option);		
			
		}	
	    //Llama a la función;
		// settopic()
	    settopic();	
	}	
		
    //*********************************************		
    //           function settopic()             //
	//*********************************************
    function settopic() {
       
	   //var selectHowTo = document.theForm.seleccion;
	   var selectHowTo = document.getElementById("seleccion");
       var selectTopic = document.getElementById("grupo");
	   var selectguardia = document.getElementById("guardia");
       var theSelect = selectHowTo.options[selectHowTo.selectedIndex].value;
	   // alert(theSelect);
	   var theSelect2 = selectTopic.options[selectTopic.selectedIndex].value;
	   //  alert(theSelect2);
	   
	   //           Grupo Mimesa
	   //*********************************************
	   if (theSelect == "1" ){
          //fillTheSelect(selectguardia, geagamoron1 );
		  //alert("Dentro Select 1 "+theSelect2)
		switch (theSelect2)  {
		case '1':
			fillTheSelect(selectguardia, getemiofi1 );
			break;
		case '2':
			fillTheSelect(selectguardia, getemiofi2 );
			break;
		case '3':
			fillTheSelect(selectguardia, getemiofi3 );
			break;
		case '4':
			fillTheSelect(selectguardia, getemiofi4 );
			break;  }		
     }
	 //*********************************************
	
	 //           TEMI TOCUYITO
	 //*********************************************
	 if (theSelect == "2" ){
        //fillTheSelect(selectguardia, geagamoron1 );
		//alert("Dentro Select 1 "+theSelect2)
		switch (theSelect2) {
		case '1':
			fillTheSelect(selectguardia, getemitocu1 );
			break;
		case '2':
			fillTheSelect(selectguardia, getemitocu2 );
			break;
		case '3':
			fillTheSelect(selectguardia, getemitocu3 );
			break; }		
      }		
    
	}
	
	function fillTheSelect(theSelect,values) {
        theSelect.options.length = 0;
        for(var i=0; i < values.length; i++) {
           theSelect.options[theSelect.options.length] = new Option(values[i]);
           theSelect.options[0].selected = true;
        }
    }
	
	
    function capturar()  {
        
		// obtenemos e valor por el numero de elemento
        var porElementos = document.forms["form1"].elements[0].value;
        // Obtenemos el valor por el id
        var porId = document.getElementById("nombre").value;
        // Obtenem os el valor por el Nombre
        var porNombre = document.getElementsByName("nombre")[0].value;
        // Obtenemos el valor por el tipo de tag
        var porTagName = document.getElementsByTagName("input")[0].value;
        // Obtenemos el valor por el nombre de la clase
        var porClassName = document.getElementsByClassName("formulario")[0].value;
		
		var idprovincia = document.getElementById("seleccion");
		var pro = seleccion.options[seleccion.selectedIndex].value;
		var selectedOption = seleccion.options[seleccion.selectedIndex].text;
		
		var id_turno = document.getElementById("turno");
		var id_pro = turno.options[turno.selectedIndex].value;
		var selectedTurno = turno.options[turno.selectedIndex].text;
		
		var id_servicio = document.getElementById("situacion");
		var id_serv = situacion.options[situacion.selectedIndex].value;
		
		var year = (new Date()).getFullYear();		
		var month = (new Date()).getMonth();		
		var day = (new Date()).getDate();		
		var daysemana = (new Date()).getDay();		
		var hours = (new Date()).getHours();		
		var minutes = (new Date()).getMinutes();		
		var now = new Date();
		var nows = now.toString();
		var horas = nows.substring(0,2);		
				
		
		var id_guardia = document.getElementById("guardia");
		var id_guardia1 = id_guardia.options[id_guardia.selectedIndex].value;
		var selectedguardia = id_guardia.options[id_guardia.selectedIndex].text;
		
		//_informador = " "+selectedguardia;
		
		//alert(selectedguardia);
		// Se busca el Cargo del Informador
		//_getCargo (selectedguardia);
		_informador = _getCargo(selectedguardia)+" "+selectedguardia;
		
        document.getElementById("resultado").innerHTML=" \
             "+" \
            <br>"+_SEP+_saludo(hours.toString(),mapa)+_SEP+" \
			<br>"+_SEP+_NOMBRE_EMPRESA+_SEP+" \
            <br>"+_SEP+"Servicio:"+_SEP+" "+selectedOption+" \
            <br>"+_SEP+"Fecha:"+_SEP+" "+defiday(day)+"/"+mesanio()+"/"+year+" - "+"Día: "+" "+_diasemana(daysemana)+" \
            <br>"+_SEP+"Monitoreo del Servicio: "+_CLAVE_SERV+_SEP+" \
			<br>"+" \
			<br>"+_SEP+"Evento:"+_SEP+" \
			<br>"+"Recorrido por las instalaciones de la Empresa."+" \
			<br>"+" \
			<br>"+"Siendo las "+defihora(hours)+":"+defiminutos(minutes)+" horas. "+_observacion(id_serv)+" en la clave "+_SEP+_CLAVE_SERV+_SEP+" \
			<br>"+" \
			<br>"+_SEP+"Oficial:"+_SEP+" \
			<br>"+"Gilber Linares"+_SEP+" \
			<br> ";
    }

    function capturarPersonalPlanta(ev)  {
        
		const evKeys = Object.keys(ev);        
        const myevEntries = Object.entries(ev);
             
        var selectedOption = 'TUBRICA, Valencia';	
		
        var id_serv = '1';
		
		var year = (new Date()).getFullYear();		
		var month = (new Date()).getMonth();		
		var day = (new Date()).getDate();		
		var daysemana = (new Date()).getDay();		
		var hours = (new Date()).getHours();		
		var minutes = (new Date()).getMinutes();		
		var now = new Date();
		var nows = now.toString();
		var horas = nows.substring(0,2);					
		
        _informador = " Oficial Gilber Linares ";	

        let resulTextArea = '';
        resulTextArea += _SEP+_saludo(hours.toString(),mapa)+_SEP+'\n';
        resulTextArea += _SEP+_NOMBRE_EMPRESA+_SEP+' \n';
        resulTextArea += _SEP+'Servicio:'+_SEP+' '+selectedOption+'\n';
        resulTextArea += _SEP+'Fecha:'+_SEP+' '+defiday(day)+'/'+mesanio()+'/'+year+' - '+'Día: '+' '+_diasemana(daysemana)+'\n';
        resulTextArea += _SEP+'Monitoreo del Servicio: '+_CLAVE_SERV+_SEP+'\n';
        resulTextArea += '\n';
        resulTextArea += _SEP+'Evento:'+_SEP+ '\n';
        resulTextArea += 'Personal en Planta:  \n';
        resulTextArea += '___________________  \n';
        resulTextArea += '\n';
        resulTextArea += _SEP+myevEntries[0][0]+": "+_SEP+myevEntries[0][1]+'\n';
        resulTextArea += _SEP+myevEntries[1][0]+": "+_SEP+myevEntries[1][1]+'\n';
        resulTextArea += _SEP+myevEntries[2][0]+": "+_SEP+myevEntries[2][1]+'\n';
        resulTextArea += _SEP+myevEntries[3][0]+": "+_SEP+myevEntries[3][1]+'\n';
        resulTextArea += _SEP+myevEntries[4][0]+": "+_SEP+myevEntries[4][1]+'\n';
        resulTextArea += _SEP+myevEntries[5][0]+": "+_SEP+myevEntries[5][1]+'\n';
        resulTextArea += '___________________________________________ \n';
        resulTextArea += _SEP+myevEntries[6][0]+" personal en planta"+": "+myevEntries[6][1]+_SEP+'\n';
        resulTextArea += '\n';
		
        /*document.getElementById("resultado").innerHTML=" \
             "+" \
            <br>"+_SEP+_saludo(hours.toString(),mapa)+_SEP+" \
			<br>"+_SEP+_NOMBRE_EMPRESA+_SEP+" \
            <br>"+_SEP+"Servicio:"+_SEP+" "+selectedOption+" \
            <br>"+_SEP+"Fecha:"+_SEP+" "+defiday(day)+"/"+mesanio()+"/"+year+" - "+"Día: "+" "+_diasemana(daysemana)+" \
            <br>"+_SEP+"Monitoreo del Servicio: "+_CLAVE_SERV+_SEP+" \
			<br>"+" \
			<br>"+_SEP+"Evento:"+_SEP+" \
			<br>"+"Personal en Planta: "+" \
            <br>"+"___________________ "+" \
			<br>"+" \
            <br>"+myevEntries[0][0]+": "+myevEntries[0][1]+" \
            <br>"+myevEntries[1][0]+": "+myevEntries[1][1]+" \
            <br>"+myevEntries[2][0]+": "+myevEntries[2][1]+" \
            <br>"+myevEntries[3][0]+": "+myevEntries[3][1]+" \
            <br>"+myevEntries[4][0]+": "+myevEntries[4][1]+" \
            <br>"+myevEntries[5][0]+": "+myevEntries[5][1]+" \
            <br>"+"_______________________________________ "+" \
            <br>"+myevEntries[6][0]+" personal en planta"+": "+myevEntries[6][1]+" \
            <br>"+" \
			<br>"+"Siendo las "+defihora(hours)+":"+defiminutos(minutes)+" horas. "+_observacion(id_serv)+" en la clave "+_SEP+_CLAVE_SERV+_SEP+" \
			<br>"+" \
			<br>"+_SEP+"Oficial:"+_SEP+" \
			<br>"+"Gilber Linares"+_SEP+" \
			<br> "; */
            
            let textarea = document.createElement('textarea'); 
            textarea.type = 'textarea';
            textarea.value = resulTextArea;
            textarea.className = 'form-control';
            textarea.align='center';
            textarea.id='floatingTextarea';

            let listTextAea = document.getElementById('resultado');  
            listTextAea.appendChild(textarea);

    }

    function capturarPersonal()  {
        
		// obtenemos e valor por el numero de elemento
        var porElementos = document.forms["form1"].elements[0].value;
        // Obtenemos el valor por el id
        var porId = document.getElementById("nombre").value;
        // Obtenem os el valor por el Nombre
        var porNombre = document.getElementsByName("nombre")[0].value;
        // Obtenemos el valor por el tipo de tag
        var porTagName = document.getElementsByTagName("input")[0].value;
        // Obtenemos el valor por el nombre de la clase
        var porClassName = document.getElementsByClassName("formulario")[0].value;
		
		var idprovincia = document.getElementById("seleccion");
		var pro = seleccion.options[seleccion.selectedIndex].value;
		var selectedOption = seleccion.options[seleccion.selectedIndex].text;
		
		var id_turno = document.getElementById("turno");
		var id_pro = turno.options[turno.selectedIndex].value;
		var selectedTurno = turno.options[turno.selectedIndex].text;
		
		var id_servicio = document.getElementById("situacion");
		var id_serv = situacion.options[situacion.selectedIndex].value;
		
		var year = (new Date()).getFullYear();		
		var month = (new Date()).getMonth();		
		var day = (new Date()).getDate();		
		var daysemana = (new Date()).getDay();		
		var hours = (new Date()).getHours();		
		var minutes = (new Date()).getMinutes();		
		var now = new Date();
		var nows = now.toString();
		var horas = nows.substring(0,2);		
				
		
		var id_guardia = document.getElementById("guardia");
		var id_guardia1 = id_guardia.options[id_guardia.selectedIndex].value;
		var selectedguardia = id_guardia.options[id_guardia.selectedIndex].text;
		
		//_informador = " "+selectedguardia;
		
		//alert(selectedguardia);
		// Se busca el Cargo del Informador
		//_getCargo (selectedguardia);
		_informador = _getCargo(selectedguardia)+" "+selectedguardia;
		
        document.getElementById("resultado").innerHTML=" \
             "+" \
            <br>"+_SEP+_saludo(hours.toString(),mapa)+_SEP+" \
			<br>"+_SEP+_NOMBRE_EMPRESA+_SEP+" \
            <br>"+_SEP+"Servicio:"+_SEP+" "+selectedOption+" \
            <br>"+_SEP+"Fecha:"+_SEP+" "+defiday(day)+"/"+mesanio()+"/"+year+" - "+"Día: "+" "+_diasemana(daysemana)+" \
            <br>"+_SEP+"Monitoreo del Servicio: "+_CLAVE_SERV+_SEP+" \
			<br>"+" \
			<br>"+_SEP+"Evento:"+_SEP+" \
			<br>"+"Personal en Planta: "+" \
			<br>"+" \
			<br>"+"Siendo las "+defihora(hours)+":"+defiminutos(minutes)+" horas. "+_observacion(id_serv)+" en la clave "+_SEP+_CLAVE_SERV+_SEP+" \
			<br>"+" \
			<br>"+_SEP+"Oficial:"+_SEP+" \
			<br>"+"Gilber Linares"+_SEP+" \
			<br> ";
    }

    function capturarLlamadas()  {
        
		// obtenemos e valor por el numero de elemento
        let porElementos = document.forms["form1"].elements[0].value;
        // Obtenemos el valor por el id
        let porId = document.getElementById("nombre").value;
        // Obtenem os el valor por el Nombre
        let porNombre = document.getElementsByName("nombre")[0].value;
        // Obtenemos el valor por el tipo de tag
        let porTagName = document.getElementsByTagName("input")[0].value;
        // Obtenemos el valor por el nombre de la clase
        let porClassName = document.getElementsByClassName("formulario")[0].value;
		
		let idprovincia = document.getElementById("seleccion");
		let pro = seleccion.options[seleccion.selectedIndex].value;
		let selectedOption = seleccion.options[seleccion.selectedIndex].text;
		
		let id_turno = document.getElementById("turno");
		let id_pro = turno.options[turno.selectedIndex].value;
		let selectedTurno = turno.options[turno.selectedIndex].text;
		
		let id_servicio = document.getElementById("situacion");
		let id_serv = situacion.options[situacion.selectedIndex].value;
		
		let year = (new Date()).getFullYear();		
		let month = (new Date()).getMonth();		
		let day = (new Date()).getDate();		
		let daysemana = (new Date()).getDay();		
		let hours = (new Date()).getHours();		
		let minutes = (new Date()).getMinutes();		
		let now = new Date();
		let nows = now.toString();
		let horas = nows.substring(0,2);					
		
		let id_guardia = document.getElementById("guardia");
		let id_guardia1 = id_guardia.options[id_guardia.selectedIndex].value;
		let selectedguardia = id_guardia.options[id_guardia.selectedIndex].text;

        let id_llamada = document.getElementById("llamadas");
		let id_llamada1 = id_llamada.options[id_llamada.selectedIndex].value;
		let selectedllamada = id_llamada.options[id_llamada.selectedIndex].text;
		
		//_informador = " "+selectedguardia;
		
		//alert(selectedguardia);
		// Se busca el Cargo del Informador
		//_getCargo (selectedguardia);
		_informador = _getCargo(selectedguardia)+" "+selectedguardia;

        let resulTextArea = '';
        resulTextArea += _SEP+_saludo(hours.toString(),mapa)+_SEP+'\n';
        resulTextArea += _SEP+_NOMBRE_EMPRESA+_SEP+' \n';
	    resulTextArea += _SEP+'Servicio:'+_SEP+' '+selectedOption+'\n';
        resulTextArea += _SEP+'Fecha:'+_SEP+' '+defiday(day)+'/'+mesanio()+'/'+year+' - '+'Día: '+' '+_diasemana(daysemana)+'\n';
	    resulTextArea += _SEP+'Monitoreo del Servicio: '+_CLAVE_SERV+_SEP+'\n';
	    resulTextArea += '\n';
        resulTextArea += _SEP+'Evento:'+_SEP+'\n';
		resulTextArea += 'Verificación del Servicio.  \n';
		resulTextArea += '\n';
        resulTextArea += 'Siendo las '+defihora(hours)+':'+defiminutos(minutes)+' horas. '+_observacion(id_serv)+' en la clave '+_SEP+_CLAVE_SERV+_SEP+'\n';
		resulTextArea += 'Se recibe llamada del sr. '+selectedllamada+' de seguridad de la empresa (SEANCA), verificando el servicio. \n';
        resulTextArea += '\n';

        document.getElementById("gltextarea").value = resulTextArea;
		
       /* document.getElementById("resultado").innerHTML=" \
             "+" \
            <br>"+_SEP+_saludo(hours.toString(),mapa)+_SEP+" \
			<br>"+_SEP+_NOMBRE_EMPRESA+_SEP+" \
            <br>"+_SEP+"Servicio:"+_SEP+" "+selectedOption+" \
            <br>"+_SEP+"Fecha:"+_SEP+" "+defiday(day)+"/"+mesanio()+"/"+year+" - "+"Día: "+" "+_diasemana(daysemana)+" \
            <br>"+_SEP+"Monitoreo del Servicio: "+_CLAVE_SERV+_SEP+" \
			<br>"+" \
			<br>"+_SEP+"Evento:"+_SEP+" \
			<br>"+"Verificación del Servicio."+" \
			<br>"+" \
			<br>"+"Siendo las "+defihora(hours)+":"+defiminutos(minutes)+" horas. "+_observacion(id_serv)+" en la clave "+_SEP+_CLAVE_SERV+_SEP+" \
			<br>"+" Se recibe llamada del sr. "+selectedllamada+" de seguridad de la empresa (SEANCA), verificando el servicio."+" \
            <br>"+" \
			<br>"+_SEP+"Oficial:"+_SEP+" \
			<br>"+"Gilber Linares"+_SEP+" \
			<br> ";*/
    }

    function capturarInicio()  {
        
		// obtenemos e valor por el numero de elemento
        let porElementos = document.forms["form1"].elements[0].value;
        // Obtenemos el valor por el id
        let porId = document.getElementById("nombre").value;
        // Obtenem os el valor por el Nombre
        let porNombre = document.getElementsByName("nombre")[0].value;
        // Obtenemos el valor por el tipo de tag
        let porTagName = document.getElementsByTagName("input")[0].value;
        // Obtenemos el valor por el nombre de la clase
        let porClassName = document.getElementsByClassName("formulario")[0].value;
		
		let idprovincia = document.getElementById("seleccion");
		let pro = seleccion.options[seleccion.selectedIndex].value;
		let selectedOption = seleccion.options[seleccion.selectedIndex].text;
		
		let id_turno = document.getElementById("turno");
		let id_pro = turno.options[turno.selectedIndex].value;
		let selectedTurno = turno.options[turno.selectedIndex].text;
		
		let id_servicio = document.getElementById("situacion");
		let id_serv = situacion.options[situacion.selectedIndex].value;
		
		let year = (new Date()).getFullYear();		
		let month = (new Date()).getMonth();		
		let day = (new Date()).getDate();		
		let daysemana = (new Date()).getDay();		
		let hours = (new Date()).getHours();		
		let minutes = (new Date()).getMinutes();		
		let now = new Date();
		let nows = now.toString();
		let horas = nows.substring(0,2);						
		
		let id_guardia = document.getElementById("guardia");
		let id_guardia1 = id_guardia.options[id_guardia.selectedIndex].value;
		let selectedguardia = id_guardia.options[id_guardia.selectedIndex].text;		
		
		// Se busca el Cargo del Informador 
		_informador = _getCargo(selectedguardia)+" "+selectedguardia;

        let txt = "";
        for (let log of mlogisticos) {
           txt += "<br>"+log[1]+" \ ";
        }
		
        document.getElementById("resultado").innerHTML=" \
             "+" \
			<br>"+_SEP+"Valencia, "+defiday(day)+"/"+mesanio()+"/"+year+" "+"Día "+" "+_diasemana(daysemana)+_SEP+" \
            <br>"+_SEP+"Servicio:"+_SEP+" "+selectedOption+" "+_CLAVE_SERV+" \
            <br>"+_SEP+"Empresa de Seguridad: "+_NOMBRE_EMPRESA+_SEP+" \
			<br>"+_SEP+"Supervisora PCR: María Martínez"+_SEP+"\
            <br>"+_SEP+"Coordinador PCR: Josue Maceas"+_SEP+"\
            <br>"+_SEP+"Oficial de Seguridad: "+selectedguardia+_SEP+"\
            <br>"+" \
            <br>"+_SEP+"Hora:"+_SEP+" "+defihora(hours)+":"+defiminutos(minutes)+" Se recibe servicio "+" "+selectedTurno+" con el material de apoyo logístico que se mencionan: "+txt+" \
			<br> ";			
    }
	
	
	function capturar_qr()  {
        
		// obtenemos e valor por el numero de elemento
        var porElementos = document.forms["form1"].elements[0].value;
        // Obtenemos el valor por el id
        var porId = document.getElementById("nombre").value;
        // Obtenem os el valor por el Nombre
        var porNombre = document.getElementsByName("nombre")[0].value;
        // Obtenemos el valor por el tipo de tag
        var porTagName = document.getElementsByTagName("input")[0].value;
        // Obtenemos el valor por el nombre de la clase
        var porClassName = document.getElementsByClassName("formulario")[0].value;
		
		var idprovincia = document.getElementById("seleccion");
		var pro = seleccion.options[seleccion.selectedIndex].value;
		var selectedOption = seleccion.options[seleccion.selectedIndex].text;
		
		var id_turno = document.getElementById("turno");
		var id_pro = turno.options[turno.selectedIndex].value;
		var selectedTurno = turno.options[turno.selectedIndex].text;
		
		var id_servicio = document.getElementById("situacion");
		var id_serv = situacion.options[situacion.selectedIndex].value;
		
		var year = (new Date()).getFullYear();		
		var month = (new Date()).getMonth();		
		var day = (new Date()).getDate();		
		var daysemana = (new Date()).getDay();		
		var hours = (new Date()).getHours();		
		var minutes = (new Date()).getMinutes();		
		var now = new Date();
		var nows = now.toString();
		var horas = nows.substring(0,2);		
				
		var id_guardia = document.getElementById("guardia");
		var id_guardia1 = id_guardia.options[id_guardia.selectedIndex].value;
		var selectedguardia = id_guardia.options[id_guardia.selectedIndex].text;
		
		//_informador = " "+selectedguardia;
		
		//alert(selectedguardia);
		// Se busca el Cargo del Informador
		//_getCargo (selectedguardia);
		_informador = _getCargo(selectedguardia)+" "+selectedguardia;
		
        document.getElementById("resultado").innerHTML=" \
             "+" \
			<br>"+_SEP+_NOMBRE_EMPRESA+_SEP+" \
			<br>"+_SEP+"FECHA: "+defiday(day)+"/"+mesanio()+"/"+year+_SEP+" \
			<br>"+_SEP+"Localidad: PLANTA TUBRICA"+_SEP+"\
			<br>"+" \
			<br>"+"Siendo las "+defihora(hours)+":"+defiminutos(minutes)+" horas se finaliza el recorrido y marcaje del QR, en el horario establecido, "+" \
			<br>"+_observacion(id_serv)+" En los puntos fijados dentro del establecimiento "+" \
			<br>"+_SEP+selectedOption+_SEP+" clave: "+_CLAVE_SERV+"."+" \
			<br>"+" \
			<br>"+_SEP+"Oficial:"+_SEP+" \
			<br>"+"Gilber Linares"+_SEP+" \
            <br> ";
    }
		
	function pad$1(value, width) {
      var s = value + "", length = s.length;
      return length < width ? new Array(width - length + 1).join(0) + s : s;
    }

   function formatYear$1(year) {
       return year < 0 ? "-" + pad$1(-year, 6)
      : year > 9999 ? "+" + pad$1(year, 6)
      : pad$1(year, 4);
    }
	
	/******************************************************
	
	  Funcion _relevos	
	
	  Fecha:  11/04/20222
	
	******************************************************/	
	function _relevos()	{
		
		var desDepSplit;
		var $resultado2;
       	var totalEmpleados = empleadosGrupo.grupo.length;	
        var bisiesto;		
				
        // obtenemos e valor por el numero de elemento
        var porElementos=document.forms["form1"].elements[0].value;
        // Obtenemos el valor por el id
        var porId=document.getElementById("nombre").value;
        // Obtenemos el valor por el Nombre
        var porNombre=document.getElementsByName("nombre")[0].value;
        // Obtenemos el valor por el tipo de tag
        var porTagName=document.getElementsByTagName("input")[0].value;
        // Obtenemos el valor por el nombre de la clase
        var porClassName=document.getElementsByClassName("formulario")[0].value;
		
		var idprovincia = document.getElementById("seleccion");
		var pro = seleccion.options[seleccion.selectedIndex].value;
		var selectedOption = seleccion.options[seleccion.selectedIndex].text;
		
		var id_turno = document.getElementById("turno");
		var id_pro = turno.options[turno.selectedIndex].value;
		var selectedTurno = turno.options[turno.selectedIndex].text;
		
		var id_servicio = document.getElementById("situacion");
		var id_serv = situacion.options[situacion.selectedIndex].value;
		
		var year = (new Date()).getFullYear();		
		var month = (new Date()).getMonth();		
		var day = (new Date()).getDate();		
		var daysemana = (new Date()).getDay();		
		var hours = (new Date()).getHours();		
		var minutes = (new Date()).getMinutes();		
		var now = new Date();
		var nows = now.toString();
		var horas = nows.substring(0,2);
							 
		bisiesto = gl_fecha.es_bisiesto(2021);
		//alert("2021: "+bisiesto);
		bisiesto = gl_fecha.es_bisiesto(2022);
		//alert("2022: "+bisiesto);
		bisiesto = gl_fecha.es_bisiesto(2020);		
		
		var prueba = formatYear$1(2022);
		alert("2020: "+prueba);
						
		var id_guardia = document.getElementById("guardia");
		var id_guardia1 = id_guardia.options[id_guardia.selectedIndex].value;
		var selectedguardia = id_guardia.options[id_guardia.selectedIndex].text;		
		
		// Se busca el Cargo del Informador
		//_getCargo (selectedguardia);
		_informador = _getCargo (selectedguardia)+" "+selectedguardia;
		//alert("antes impreimner ");   
		//impreimner();
		//alert("Despues ");   
		
		//alert(selectedguardia);
		
		$resultado =		
		"\
			<br>"+_SEP+_saludo(hours.toString(),mapa)+_SEP+" \
			<br>"+_SEP+_NOMBRE_EMPRESA+_SEP+" \
			<br>"+_SEP+"Servicio: Gilber "+selectedOption+_SEP+" \
			<br>"+_SEP+"Fecha: "+defiday(day)+"/"+mesanio()+"/"+year+" Día "+_diasemana(daysemana)+_SEP+" \
			<br>"+_SEP+"Sup. de Operaciones Sala de Control: "+porNombre+_SEP+" \
			<br>"+_SEP+"Turno: "+selectedTurno+_SEP+" \
			<br>"+" \
			<br>"+_SEP+"Personal de Guardia:"+_SEP+" \
			<br>";
			
		$resultado = $resultado+_SEP+"Especialista:"+_SEP+" \
			<br>"+" \
			<br>"+_SEP+"Observación: "+defihora(hours)+":"+defiminutos(minutes)+" hrs"+_SEP+" \
			<br> "+_observacion(id_serv)+" \
            <br> ";	
		
		/*document.getElementById("resultado2").innerHTML=" \
             "+" \ "			
			+$resultado2+" \ ";*/

        $resultado2 = beginDivClass;
		
		for (var i = 0; i < totalEmpleados; i++) {
			//desDepartmentos = mdepartamentos.get(empleadosGrupo.adep[i]);
			//alert('Departento: '+desDepartmentos);
			// split('caracterSepara')
			//if (i <  10 ) {
			 desDepSplit = 	empleadosGrupo.grupo[i].split(" - ");
			 //alert("Departamento: "+mdepartamentos.get(desDepSplit[1])+" Nombre: "+desDepSplit[2]);
			 //$resultado2 = $resultado2 +labelClass+inputClass+' '+mdepartamentos.get(desDepSplit[1])+' - '+desDepSplit[2]+endEpan+ barraIn;
             $resultado2 = $resultado2 +labelClass+inputClass+' '+desDepSplit[1]+' - '+desDepSplit[2]+endEpan+ barraIn;
		     //alert(empleadosGrupo.grupo[i]+" Departamento: "+mdepartamentos.get(empleadosGrupo.adep[i])+" Nombre: "+empleadosGrupo.anombre[i]+" Posición: "+i );
             //}
        }
		
		/*$resultado2 = $resultado2 +labelClass+inputClass+' First checkbox Gilber 1  '+endEpan+ barraIn;
		$resultado2 = $resultado2 +labelClass+inputClass+' Second checkbox Gilber 2 '+endEpan+ barraIn;
		$resultado2 = $resultado2 +labelClass+inputClass+' Third checkbox Gilber 3  '+endEpan+ barraIn;*/
		$resultado2 = $resultado2 +endDivDiv;
		$resultado2 = $resultado2 + "<br>" + barraIn;
		$resultado2 = $resultado2 + buttonClass;
		
        document.getElementById("resultado2").innerHTML=" \
             "+" \ "			
			+"<br>"+$resultado2+" \ ";	   
    
	
	    function impreimner(){
		
			alert("Dentro impreimner ");   
			document.getElementById("resultado").innerHTML=" \
				"+" \
				<br>"+_SEP+_saludo(hours.toString(),mapa)+_SEP+" \
				<br>"+_SEP+_NOMBRE_EMPRESA+_SEP+" \
				<br>"+_SEP+"Servicio: "+selectedOption+_SEP+" \
				<br>"+_SEP+"Fecha: "+defiday(day)+"/"+mesanio()+"/"+year+" Día "+_diasemana(daysemana)+_SEP+" \
				<br>"+_SEP+"Sup. de Operaciones Sala de Control: "+porNombre+_SEP+" \
				<br>"+_SEP+"Turno: "+selectedTurno+_SEP+" \
				<br>"+" \
				<br>"+_SEP+"Personal de Guardia:"+_SEP+" \
				<br>"+" \
				<br>"+_SEP+"Observación: "+defihora(hours)+":"+defiminutos(minutes)+" hrs"+_SEP+" \
				<br> "+_observacion(id_serv)+" \
				<br> ";	
	   }  // impreimner
	}
	
	function insertRegDepartamentos(ev)
	{
		var miObject = new Object();
		var mArray = new Array();
		var fechaHoy = fecha.fecha_hoy();
		var diaSemana = fecha.dia_semana(fecha.fecha_hoy());
		// idResultadoListado
		miObject = ev;
		mArray = document.getElementById('resultado2').childNodes;
		var elementosDelForm = document.getElementsByTagName('input');	
			for (var i = 0; i < elementosDelForm.length; i++){
				if (elementosDelForm[i].checked == true) {
					var listChequeados = elementosDelForm[i].parentNode.childNodes;
						for (var z = 0; z < listChequeados.length; z++){
							if (z == 2 || listChequeados[z].nodeName == 'SPAN' ){								
								//alert("Se ha seleccionado: "+listChequeados[z].outerText);
								desDepSplit = 	listChequeados[z].outerText.split(" - ");
								//alert("Se nombre: "+desDepSplit[1]);
								regListadoTrabajadores( fechaHoy, diaSemana, desDepSplit[0], desDepSplit[1]);								
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
}
	
	function mesanio()  {
	
		var month1 = (new Date()).getMonth();
	
		switch (month1) {
			case 0:
				return '01';
				break;
			case 1:
				return '02';
				break;
			case 2:
				return '03';
				break;
			case 3:
				return '04';
				break;
			case 4:
				return '05';
				break;
			case 5:
				return '06';
				break;
			case 6:
				return '07';
				break;
			case 7:
				return '08';
				break;
			case 8:
				return '09';
				break;
			case 9:
				return '10';
				break;
			case 10:
				return '11';
				break;
			case 11:
				return '12';
				break;
		}
	}// mesanio

	function _diasemana(daysema) {
	
		switch (daysema) {
			case 0:
				return _FRMDIA7ESPA;
				break;
			case 1:
				return _FRMDIA1ESPA;
				break;
			case 2:
				return _FRMDIA2ESPA;
				break;
			case 3:
				return _FRMDIA3ESPA;
				break;
			case 4:
				return _FRMDIA4ESPA;
				break;
			case 5:
				return _FRMDIA5ESPA;
				break;
			case 6:
				return _FRMDIA6ESPA;
				break;
	}
	}

	function _saludo(salu, mapadia)  {
	
		var horasalu = mapadia.get(salu)
	
		switch (horasalu)  {
			case 'D':
				return _SALUDO1;
				break;
			case 'T':
				return _SALUDO2;
				break;
			case 'N':
				return _SALUDO3;
				break;
	}
	}

	function _observacion(observacion) {

    _refresmensaje ();  
	
	switch (observacion)  {
		case '1':
			return _OK;
			break;
		case '2':
			return _28;
			break;
		case '3':
			return _29;
			break;
	}
	} // _observacion
	
	function _refresmensaje () {
		
		_OK = 'Informa el '+_informador+', que el servicio a la hora se encuentra *sin novedad*.';
		_28 = 'Informa el '+_informador+', que el servicio se encuentra sin fluido eléctrico.';
		_29 = 'Informa el '+_informador+', que el servicio se encuentra sin fluido eléctrico, con la planta eléctrica en funcionamiento.';
		//alert("Dentro de la Función _refresmensaje "+_OK);	
	}
	
	function _getCargo (informador)  {
    
		// var horad = mapa.get('23')	
		// mcargos
		var codigos  = mempleadosn.get(informador);	
		//alert("Dentro de la Función _getCargo "+informador+" "+codigos);
		var res = mcargos.get(codigos.charAt(0)+codigos.charAt(1));
		// slice
		//alert("Dentro de la Función _getCargo "+informador+" "+codigos+"Cargo: "+res);
		return res;
	}

	function defihora(hora) {
	
	hora_aux = hora;
	
	switch (hora)  {	
		case 1:
			hora_aux = '01';
			break;
		case 2:
			hora_aux = '02';
			break;
		case 3:
			hora_aux = '03';
			break;
		case 4:
			hora_aux = '04';
			break;
		case 5:
			hora_aux = '05';
			break;
		case 6:
			hora_aux = '06';
			break;
		case 7:
			hora_aux = '07';
			break;
		case 8:
			hora_aux = '08';
			break;
		case 9:
			hora_aux = '09';
			break;

	}
	
	hora = hora_aux;
	return hora;
	}  // defihora

	function defiminutos(minutos) {
	
	minutos_aux = minutos;
    console.log(minutos);
	switch (minutos) {	
		case 0:
			minutos_aux = '00';
			break;
		case 1:
			minutos_aux = '01';
			break;
		case '1':
			minutos_aux = '01';
			break;
		case 2:
			minutos_aux = '02';
			break;
		case 3:
			minutos_aux = '03';
			break;
		case 4:
			minutos_aux = '04';
			break;
		case 5:
			minutos_aux = '05';
			break;
		case 6:
			minutos_aux = '06';
			break;
		case 7:
			minutos_aux = '07';
			break;
		case 8:
			minutos_aux = '08';
			break;
		case 9:
			minutos_aux = '09';
			break;
	}
	
	minutos = minutos_aux;
	return minutos;
	} // defiminutos	
	
	
	function defiday(dia) {
	
	dia_aux = dia;
    //console.log(minutos);
	switch (dia) {	
		case 0:
			dia_aux = '00';
			break;
		case 1:
			dia_aux = '01';
			break;
		case '1':
			dia_aux = '01';
			break;
		case 2:
			dia_aux = '02';
			break;
		case 3:
			dia_aux = '03';
			break;
		case 4:
			dia_aux = '04';
			break;
		case 5:
			dia_aux = '05';
			break;
		case 6:
			dia_aux = '06';
			break;
		case 7:
			dia_aux = '07';
			break;
		case 8:
			dia_aux = '08';
			break;
		case 9:
			dia_aux = '09';
			break;	}
	
	dia = dia_aux;
	return dia;
	} // defiday