	
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
	const _SEP_REG        = " - ";
	const _NOMBRE_EMPRESA = "Serenos Avila, S.R.L.";
	const _VALOR_D        = 'D';
	const _VALOR_T        = 'T';
	const _VALOR_N        = 'N';

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
	var personalGrupo  = ' Personal ';
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
	var _cargoinfor = "Oficial";
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
		
	//_prueba();

	var _OK = 'Informa el '+_informador+', que el servicio a la hora se encuentra sin novedad.';
	var _28 = 'Informa el '+_informador+', que el servicio se encuentra sin fluido eléctrico.';
	var _29 = 'Informa el '+_informador+', que el servicio se encuentra sin fluido eléctrico, con la planta eléctrica en funcionamiento.';		
	
	/*!
	* Diccionarios para la definición de los Cargos
	* *********************************************/
	let mcargos= new Map();
	mcargos.set("01","Operador");
	mcargos.set("02","Inspector");
	mcargos.set("03","Supervisor");
	mcargos.set("04","Supervisor de Operaciones");
	mcargos.set("05","Coordinador");
	mcargos.set("06","Romanero");
	mcargos.set("07","Auditor");
	mcargos.set("08","Jefe de Grupo"); 

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
	mtransportistas.set("01","STI");
	mtransportistas.set("02","SLV");
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
	
	function regListadoTrabajadores( fecha, dia, dep, nombre) {
		  this.fecha = fecha;
          this.dia = dia;
          this.dep = dep;
		  this.nombre = nombre;
		  regListadoTrabajadores.grupo.push(this.fecha+_SEP_REG+this.dep+_SEP_REG+this.nombre);
		  regListadoTrabajadores.fecha.push(this.fecha);
		  regListadoTrabajadores.adep.push(this.dep);
	      regListadoTrabajadores.anombre.push(this.nombre);
		}
	   	      
		regListadoTrabajadores.grupo = [];
		regListadoTrabajadores.fecha = [];
		regListadoTrabajadores.adep = [];
		regListadoTrabajadores.anombre = [];

    function empleadosGrupo (cod, dep, nombre) {
		this.cod = cod;
		this.dep = dep;
		this.nombre = nombre;		
		empleadosGrupo.grupo.push(this.cod+_SEP_REG+this.dep+_SEP_REG+this.nombre);
		empleadosGrupo.acod.push(this.cod);
		empleadosGrupo.adep.push(this.dep);
		empleadosGrupo.anombre.push(this.nombre);
	}
	   	      
	empleadosGrupo.grupo = [];
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
	
    /*!
	* ******************************************************	
	* Diccionarios para la definición de los Departamentos
	* *******************************************************
	*/
	let mdepartamentos = new Map();
	mdepartamentos.set("01","Nomina Ejecutiva");
	mdepartamentos.set("02","Nomina Mensual");
	mdepartamentos.set("03","FUNDICION");
	mdepartamentos.set("04","EXTRUSION");
	mdepartamentos.set("05","TREFILADO");
	mdepartamentos.set("06","MANTENIMIENTO");
	mdepartamentos.set("07","TALLER");
	/*mdepartamentos.set("08","FSQR");
	mdepartamentos.set("09","Gerencia");
	mdepartamentos.set("10","IT");
	mdepartamentos.set("11","Logística");
	mdepartamentos.set("12","Mantenimientos");
	mdepartamentos.set("13","Proceso");
	mdepartamentos.set("14","RRHH");*/	
		
	// *********************
	// Empleados Nomina Ejecutiva
	// Personal de Nomina Ejecutiva
	// *********************
	empleadosGrupo("3050",mdepartamentos.get("01"),"Sánchez Castor");  
	empleadosGrupo("3151",mdepartamentos.get("01"),"Arnaig Carlos");
	empleadosGrupo("3066",mdepartamentos.get("01"),"Sánchez Fernando");
	empleadosGrupo("3186",mdepartamentos.get("01"),"Acevedo Richard");
	empleadosGrupo("3216",mdepartamentos.get("01"),"Dávila Carolina");
	empleadosGrupo("3262",mdepartamentos.get("01"),"Duran Mileydis");
	empleadosGrupo("3257",mdepartamentos.get("01"),"Ramirez Karina");
	empleadosGrupo("3213",mdepartamentos.get("01"),"Valecillos Jesús");
	empleadosGrupo("3285",mdepartamentos.get("01"),"Nava Jesús");
	empleadosGrupo("3300",mdepartamentos.get("01"),"Becerra Ramón");
	empleadosGrupo("3202",mdepartamentos.get("01"),"Cabeza Noris");
	empleadosGrupo("3308",mdepartamentos.get("01"),"Pinto José");
	empleadosGrupo("3245",mdepartamentos.get("01"),"Suarez Suhail");
		
	// *********************
	// Personal de Nomina Mensual
	// *********************
	empleadosGrupo("2047",mdepartamentos.get("02"),"Reyes Yoel");   
	empleadosGrupo("3166",mdepartamentos.get("02"),"Flete Ricardo");
	empleadosGrupo("3330",mdepartamentos.get("02"),"Ramirez Johan");    
	empleadosGrupo("1259",mdepartamentos.get("02"),"Torres Jesús");
	empleadosGrupo("3142",mdepartamentos.get("02"),"Morillo Rafael");
	empleadosGrupo("1939",mdepartamentos.get("02"),"Herrera José");
	empleadosGrupo("2080",mdepartamentos.get("02"),"Calderon Victor");
	empleadosGrupo("2235",mdepartamentos.get("02"),"Suarez José");
	empleadosGrupo("3258",mdepartamentos.get("02"),"Marquez María");
	empleadosGrupo("3275",mdepartamentos.get("02"),"Quintero Aura");
	empleadosGrupo("3329",mdepartamentos.get("02"),"Brandts Pablo");
	empleadosGrupo("3334",mdepartamentos.get("02"),"Bellorin Cesar");
	empleadosGrupo("3347",mdepartamentos.get("02"),"Ochoa Freddy");
	empleadosGrupo("3348",mdepartamentos.get("02"),"Silva Freddy");
	empleadosGrupo("3352",mdepartamentos.get("02"),"Alvarado Alexis");
	empleadosGrupo("3353",mdepartamentos.get("02"),"Mujica Miguel");
		
	// *********************
	// Personal de FUNDICION
	// *********************
	empleadosGrupo("3339",mdepartamentos.get("03"),"Bastardo Samuel");    
	empleadosGrupo("3337",mdepartamentos.get("03"),"Brito Juan");
	empleadosGrupo("3343",mdepartamentos.get("03"),"Campos Elier");
	empleadosGrupo("3346",mdepartamentos.get("03"),"Estrada Armando");
	empleadosGrupo("3331",mdepartamentos.get("03"),"Hernández José");
	empleadosGrupo("3338",mdepartamentos.get("03"),"Hidalgo Jesús");
	empleadosGrupo("3336",mdepartamentos.get("03"),"López Albert");
	empleadosGrupo("2261",mdepartamentos.get("03"),"López Darwin");
	empleadosGrupo("3344",mdepartamentos.get("03"),"Peñalver Esleiter");
	empleadosGrupo("3351",mdepartamentos.get("03"),"Miranda Kennedy");
	empleadosGrupo("3345",mdepartamentos.get("03"),"Román Julio");
	empleadosGrupo("2152",mdepartamentos.get("03"),"Romero Geomar");
		
	// *********************
	// Personal de EXTRUSION
	// *********************
	empleadosGrupo("2074",mdepartamentos.get("04"),"Barico Alexis"); 
	empleadosGrupo("2117",mdepartamentos.get("04"),"Garcia Hedrith");
	empleadosGrupo("2138",mdepartamentos.get("04"),"Oduber Samuel");
		
	// *********************
	// Personal de TREFILADO
	// *********************
	empleadosGrupo("2102",mdepartamentos.get("05"),"Franco José Luis");    
	empleadosGrupo("1135",mdepartamentos.get("05"),"Perozo Luis");
	empleadosGrupo("2193",mdepartamentos.get("05"),"Robles Fernando");
	empleadosGrupo("2120",mdepartamentos.get("05"),"Torres José Luis");
		
	// *********************
	// Personal de MANTENIMIENTO
	// *********************
	empleadosGrupo("2259",mdepartamentos.get("06"),"Morillo Julio"); 
	empleadosGrupo("2056",mdepartamentos.get("06"),"Perez Octavio");
	empleadosGrupo("2219",mdepartamentos.get("06"),"Santeliz Carlos");
		
	// *********************
	// Personal de TALLER
	// *********************
	empleadosGrupo("1462",mdepartamentos.get("07"),"Hernández José");   	
	empleadosGrupo("2103",mdepartamentos.get("07"),"Ramirez Willian");
	empleadosGrupo("2135",mdepartamentos.get("07"),"Torrez Stivenson");    
	empleadosGrupo("1965",mdepartamentos.get("07"),"Uzcategui Henry");
		
	// Diccionarios para la definición de los Grupos
	let mgrupos = new Map();
	mgrupos.set("01","Grupo A");
	mgrupos.set("02","Grupo B");
	mgrupos.set("03","Grupo C");	
		
	// Diccionarios para la definición de los Servicios
	let mservicios = new Map();
	mservicios.set("01","VETRAMET");
	mservicios.set("02","TEMI INDUSTRIAS TOCUYITO");		
		
	// Diccionarios para la definición de los Empleados
	let mempleados  = new Map();
	let mempleadosn = new Map();	
		
	//             Grupo Mimesa   
	// Empleados de Grupo Mimesa
	// Asociados Por Código Grupo A
	mempleados.set("010101001","Raúl Rojas");
	mempleados.set("010101002","José Rojas");
	mempleados.set("010101003","Abel Chacón");
	mempleados.set("010101004","Gilber Linares");
	mempleados.set("030101005","Oswaldo Briceño");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Nombre Grupo A
	mempleadosn.set("Raúl Rojas","010101001");
	mempleadosn.set("José Rojas","010101002");
	mempleadosn.set("Abel Chacón","010101003");
	mempleadosn.set("Gilber Linares","010101004");
	mempleadosn.set("Oswaldo Briceño","030101005");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Código Grupo B
	mempleados.set("010201006","Elías González");
	mempleados.set("010201007","Jefrie Cedeño");
	mempleados.set("010201008","Hector Salas");
	mempleados.set("010201009","Ronald Diaz");
	mempleados.set("030201010","Angel Tovar");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Nombre Grupo B
	mempleadosn.set("Elías González","010201006");
	mempleadosn.set("Jefrie Cedeño","010201007");
	mempleadosn.set("Hector Salas","010201008");
	mempleadosn.set("Ronald Diaz","010201009");
	mempleadosn.set("Angel Tovar","030201010");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Código Grupo C
	mempleados.set("010301011","Jorge Ojeda");
	mempleados.set("010301012","Edward Pinto");
	mempleados.set("010301013","José Barraez");
	mempleados.set("010301014","David Lugo");
	mempleados.set("030301015","Mario Leal");
		
	// Empleados de Grupo Mimesa
	// Asociados Por Nombre Grupo C
	mempleadosn.set("Jorge Ojeda","010301011");
	mempleadosn.set("Edward Pinto","010301012");
	mempleadosn.set("José Barraez","010301013");
	mempleadosn.set("David Lugo","010301014");
	mempleadosn.set("Mario Leal","030301015");
		
		
	var getemiofi1 = new Array( "Raúl Rojas", "José Rojas", "Abel Chacón", "Gilber Linares", "Oswaldo Briceño" );
		
	var getemiofi2 = new Array( "Elías González", "Jefrie Cedeño", "Hector Salas", "Ronald Diaz", "Angel Tovar" );
		
	var getemiofi3 = new Array( "Jorge Ojeda", "Edward Pinto", "José Barraez", "David Lugo", "Mario Leal" );
		
	var getemiofi4 = new Array( "Willians Gutierrez", "Renato Peraza", "Servio Bracho", "Victor Gonzalez", "Farkechi Diaz" );
							
	 //********************************************