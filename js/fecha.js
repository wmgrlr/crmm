
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fecha = global.fecha || {}));
})(this, (function (exports) { 'use strict';

var version = "7.3.0";


const WK_F_MAX = '29991231';

const FIESTAS_NAC = new Array ('20220101', '20220228', '20220301');

const FIESTAS = new Array ('20220101', '20220228', '20220301','20220302');

var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;
	
const fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

/****************************************************/
/*Funcion    : es_bisiesto                          */
/*Description: Controlo si ano es bisiesto o normal */
/*Parametros : Ano como numero int                  */
/*Retorno    : bisiesto TRUE                        */
/*                     normal   FALSE               */
/****************************************************/
/****************************************************/
/*BEGIN es_bisiesto*/
/****************************************************/
function es_bisiesto ( year )
{
  if ( year%4 == 0 && year%100 != 0 || year%400 ==0)
  {
    return true;
  }
  else
  {
    return false;
  }
}   /*  es_bisiesto  */
/****************************************************/
/*END es_bisiesto*/
/****************************************************/


/****************************************************/
/*Funcion    : test_fecha                           */
/*Description: Controlo si fecha entrada es correcta*/
/*Parametros : numeros AAAA,MM,DD                   */
/*Retorno    : correcto TRUE                        */
/*             error    FALSE                       */
/****************************************************/
/****************************************************/
/*BEGIN test_fecha*/
/****************************************************/
function test_fecha ( year, month, day )
{
  var month_day = [29,31,28,31,30,31,30,31,31,30,31,30,31];
  
  /*Test month */
  if( month < 1 || month > 12 ) 
  {
    return (false);
  }

  /*Test leap year*/
  if( month == 2 && es_bisiesto(year) ) 
  {
    month = 0;
  }

  /*Test day*/
  if( day < 1 || day > month_day[month] )
  {
    return (false);
  }

  return (true);
}   /*  test_fecha  */
/****************************************************/
/*END test_fecha*/
/****************************************************/

/****************************************************/
/*Funcion    : test_fecha_s                         */
/*Description: Controlo si fecha entrada es correcta*/
/*Parametros : string en formato AAAAMMDD           */
/*Retorno    : correcto TRUE                        */
/*             error    FALSE                       */
/****************************************************/
/****************************************************/
/*BEGIN test_fecha_s*/
/****************************************************/
function test_fecha_s(inp_date)
{
  var month_day = [29,31,28,31,30,31,30,31,31,30,31,30,31];
  var year = 1;
  var month = 1;
  var day = 1;
  var s_year = "    ";
  var s_month = "  ";
  var s_day = "  ";

  s_year = inp_date.substr(0,4);
  s_month = inp_date.substr(4,2);
  s_day = inp_date.substr(6,2);
  
  year  = parseInt(s_year);
  month = parseInt(s_month);
  day   = parseInt(s_day);

  /*Test month */
  if( month < 1 || month > 12 ) 
  {
    return (false);
  }

  /*Test leap year*/
  if( month == 2 && es_bisiesto(year) ) 
  {
    month = 0;
  }

  /*Test day*/
  if( day < 1 || day > month_day[month] )
  {
    return (false);
  }

  return (true);
}   /*  test_fecha_s  */
/****************************************************/
/*END test_fecha_s*/
/****************************************************/

/****************************************************/
/*Funcion    : add_months                           */
/*Description: Calcula nueva fecha de entre_fecha   */
/*             mas numero meses                     */
/*Parametros : fecha en formato AAAAMMDD            */
/*             numero meses                         */
/*Retorno    : nueva fecha en formato AAAAMMDD      */
/*             error code es fecha 29991231         */
/****************************************************/
/****************************************************/
/*BEGIN add_moths                                   */
/****************************************************/
function add_months(inp_date, number_month)
{
  var  s_year = "    ";
  var  s_month = "  ";
  var  s_day = "  ";
  var  out_date;
  var  year = 0;
  var  month = 0;
  var  day = 0;
  var  n_year,n_month,n_day;
  var  i;
  var  month_day = [29,31,28,31,30,31,30,31,31,30,31,30,31];

  /*Incorrect input date!!! RETURN value 29991231!!!*/
  if( !test_fecha_s(inp_date) )
  {
    out_date = WK_F_MAX;
    return (out_date );
  }

  s_year = inp_date.substr(0,4);
  s_month = inp_date.substr(4,2);
  s_day = inp_date.substr(6,2);

  year  = parseInt(s_year);
  month = parseInt(s_month);
  day   = parseInt(s_day);

  n_day = day;
  n_month=month;
  n_year=year;

  if ( number_month >= 0 )
  {
    for(i=1;i<=number_month;i++)
    {
      n_month=month+1;
      n_year=year;

      if ( n_month > 12 )
      {
        n_month = 1;
        n_year = year+1;
      }

      while(!test_fecha(n_year,n_month,n_day))
      {
        n_month = n_month + 1;
        n_day = 1;
      }
      day = n_day;
      month = n_month;
      year = n_year;

    }
  }
  else
  {
    for(i=-1;i>=number_month;i--)
    {
      n_month=month-1;
      n_year=year;

      if ( n_month == 0 )
      {
        n_month = 12;
        n_year = year-1;
      }

      while(!test_fecha(n_year,n_month,n_day))
      {
        n_month = n_month;
        n_day = n_day - 1;
      }
      day = n_day;
      month = n_month;
      year = n_year;

    }
  }

  out_date = prepare_output (n_year,n_month,n_day);
  
  return (out_date);
}   /*  add_months  */
/****************************************************/
/*END add_months                                    */
/****************************************************/

function prepare_output (n_year,n_month,n_day){
	var s_month = " ";
	var s_day = " ";
	
	if (n_month < 10)
	 {
	  s_month = "0"+n_month.toString();
	 }
	 
	 if (n_day < 10)
	 {
	  n_day = "0"+n_day.toString();
	 }
	
	return n_year+s_month+n_day;
}
/****************************************************/
/*END prepare_output                                */
/****************************************************/


function prepare_output_for (n_year,n_month,n_day,formato){
	var s_month = " ";
	var s_day = " ";
	
	if (n_month < 10)
	 {
	  s_month = "0"+n_month.toString();
	 }
	 
	 if (n_day < 10)
	 {
	  n_day = "0"+n_day.toString();
	 }
	 
	 switch (formato) {
        case    'DD/MM/YYYY':  return n_day+'/'+s_month+'/'+n_year;
        case    'DD/MM/YY':    return n_day+'/'+s_month+'/'+n_year;
		case    'DDMMYYYY':    return n_day+s_month+n_year;
      }
	 
	
	return n_day+'/'+s_month+'/'+n_year;
}
/****************************************************/
/*END prepare_output                                */
/****************************************************/

/****************************************************/
/*Funcion    : contar_fecha                         */
/*Description: Calcula nueva fecha de entre_fecha   */
/*             mas numero dias                      */
/*Parametros : fecha en formato AAAAMMDD            */
/*             numero dias                          */
/*Retorno    : nueva fecha en formato AAAAMMDD      */
/*             error code es fecha 29991231         */
/****************************************************/
/****************************************************/
/*BEGIN contar_fecha*/
/****************************************************/
function contar_fecha( inp_date, number_day)
{
var  s_year;
var  s_month;
var  s_day;
var  out_date;
var  year,month,day;
var  n_year,n_month,n_day;
var  i;
var  ind;
var  month_day = [29,31,28,31,30,31,30,31,31,30,31,30,31];

/*Incorrect input date!!! RETURN value 29991231!!!*/
if( !test_fecha_s(inp_date) ) 
{ 
  out_date = WK_F_MAX;
  return (out_date);
}

s_year = inp_date.substr(0,4);
s_month = inp_date.substr(4,2);
s_day = inp_date.substr(6,2);

year  = parseInt(s_year);
month = parseInt(s_month);
day   = parseInt(s_day);

n_day = day;
n_month=month;
n_year=year;

if ( number_day >= 0 )
{
        for(i=1;i<=number_day;i++)
        {
                ind = month; /*nobisieto ano*/
                if ( month == 2 )
                {
                        if (es_bisiesto(year))
                        {
                                ind = 0; /*bisiesto ano*/
                        }
                }

                n_day = day+1;
                n_month=month;
                n_year=year;

                if ( n_day > month_day[ind] ) 
                {
                        n_day = 1;
                        n_month = month+1;
                        if ( n_month > 12 ) 
                        {
                                n_month = 1;
                                n_year = year+1;
                        }
                }

                day = n_day;
                month = n_month;
                year = n_year;

        }
}
else
{
        for(i=-1;i>=number_day;i--)
        {
                if ( month == 1 ) 
                {
                        ind = 12;
                }
                else
                {
                        ind = month-1; /*nobisieto anio*/
                }

                if ( month == 3 )
                {
                        if (es_bisiesto(year))
                        {
                                ind = 0; /*bisiesto anio*/
                        }
                }

                n_day = day-1;
                n_month=month;
                n_year=year;

                if ( n_day == 0 ) 
                {
                        n_day = month_day[ind];
                        n_month = month-1;
                        if ( n_month == 0 ) 
                        {
                                n_month = 12;
                                n_year = year-1;
                        }
                }

                day = n_day;
                month = n_month;
                year = n_year;

        }
}

out_date = prepare_output (n_year,n_month,n_day);

return (out_date);
}  /*  contar_fecha  */
/****************************************************/
/*END contar_fecha*/
/****************************************************/

/****************************************************/
/*Funcion    : dia_semana                           */
/*Description: Contar que dia de semana es          */
/*Parametros : string en formato AAAAMMDD           */
/*Retorno    : Lunes, Martes, Miercoles, Jueves     */
/*             Viernes, Sabado, Domingo             */
/*             error   XXXXXXXX                     */
/****************************************************/
/****************************************************/
/*BEGIN dia_semana*/
/****************************************************/
function dia_semana(inp_date) {
	var    s_year = '    ';
	var    s_month = '    ';
	var    s_day =  '   ';
	var    year,month,day;

	s_year = inp_date.substr(0,4);
	s_month = inp_date.substr(4,2);
	s_day = inp_date.substr(6,2);

	year  = parseInt(s_year);
	month = parseInt(s_month);
	day   = parseInt(s_day);

	if( !test_fecha(year,month,day) ) {
		return ("XXXXXXXX");
	}

	var miFecha = new Date(s_month+' '+s_day+', '+s_year);
	var miDia1 = miFecha.getDay(); //Tenemos 6 (sábado)
	//alert(miDia1+'  '+miFecha);

	switch (miDia1) {
        case    0:      return ("Domingo");
        case    1:      return ("Lunes");
        case    2:      return ("Martes");
        case    3:      return ("Miércoles");
        case    4:      return ("Jueves");
        case    5:      return ("Viernes");
        case    6:      return ("Sábado");
	}
}
/****************************************************/
/*END dia_semana*/
/****************************************************/

/****************************************************/
/*Funcion    : fecha_hoy                            */
/*Description: investigo que fecha es hoy           */
/*Parametros :                                      */
/*Retorno    : fecha como string en formato AAAAMMDD*/
/****************************************************/
/****************************************************/
/*BEGIN fecha_hoy*/
/****************************************************/
function fecha_hoy()
{
var fecha_1 = '    ';
var    s_year = '    ';
var    s_month = '    ';
var    s_day =  '   ';
var    year,month,day;

fecha_1 = new Date(); 
year = fecha_1.getFullYear();
month = fecha_1.getMonth();
day = fecha_1.getDate();

fecha_1 = prepare_output (year,(month + 1),day);

return (fecha_1);
}   /*  fecha_hoy  */

/****************************************************/
/*ENDfecha_hoy*/
/****************************************************/

/****************************************************/
/*Funcion    : fecha_hoy_for                        */
/*Description: investigo que fecha es hoy           */
/*Parametros :                                      */
/*Retorno    : fecha como string en formato AAAAMMDD*/
/****************************************************/
/****************************************************/
/*BEGIN fecha_hoy*/
/****************************************************/
function fecha_hoy_for(formato)
{
var fecha_1 = '    ';
var    s_year = '    ';
var    s_month = '    ';
var    s_day =  '   ';
var    year,month,day;

fecha_1 = new Date(); 
year = fecha_1.getFullYear();
month = fecha_1.getMonth();
day = fecha_1.getDate();

fecha_1 = prepare_output_for (year,(month + 1),day,formato);

return (fecha_1);
}   /*  fecha_hoy  */

/****************************************************/
/*ENDfecha_hoy*/
/****************************************************/

/****************************************************/
/*Funcion    : dia_festivo                          */
/*Description: controlo dia si fiesta o no en tabla */ 
/*             fiestas_nac                          */
/*Parametros : fecha en formato AAAAMMDD            */
/*Retorno    : S - es fiesta                        */
/*             N - no es fiesta                     */
/*             E - error incorrecto entre dato      */
/****************************************************/
/****************************************************/
/*BEGIN dia_festivo*/
/****************************************************/
function dia_festivo (fecha_in)
{
  var  n_fiestas_nac;
  var  fecha_local;
  var  si = 'S', no = 'N', er = 'E';
  
  if ( ( !si ) || ( !no ) || ( !er ) ) return null;

  if ( !test_fecha_s(fecha_in) )
  {
    return (er);
  }

  n_fiestas_nac = FIESTAS_NAC.indexOf( fecha_in );  
      
  if ( n_fiestas_nac >= 0 ) 
  {
    return(si);
  }

  return(no);
}   /*  dia_festivo  */

/****************************************************/
/*END dia_festivo*/
/****************************************************/

/****************************************************/
/*Funcion    : dia_festivo_local                    */
/*Description: controlo dia si fiesta o no en tabla */ 
/*             fiestas                              */
/*Parametros : fecha en formato AAAAMMDD            */
/*             cod_unicom                           */
/*Retorno    : S - es fiesta                        */
/*             N - no es fiesta                     */
/*             E - error incorrecto entre dato      */
/****************************************************/
/****************************************************/
/*BEGIN dia_festivo_local*/
/****************************************************/
function dia_festivo_local(fecha_in, cod_uni)
{
    var    cod_uni_local;
    var    n_fiestas;
    var    n_fiestas_nac;
    var    fecha_local;
    var   si = 'S', no = 'N', er = 'E';
  
  if ( ( !si ) || ( !no ) || ( !er ) ) return null;

    if ( !test_fecha_s(fecha_in) )
  { 
    return (er);
  }

   cod_uni_local=cod_uni;

   n_fiestas_nac = FIESTAS_NAC.indexOf( fecha_in );

   if ( n_fiestas_nac >= 0 ) return(si);
  
   n_fiestas = FIESTAS.indexOf( fecha_in );

  if ( n_fiestas >= 0 ) return(si);

  return(no);
}   /*  dia_festivo_local  */
/****************************************************/
/*END dia_festivo_local*/
/****************************************************/

/****************************************************/
/*Funcion    : buscar_dia_laboral                   */
/*Description: buscar proximo laboral dia           */
/*Parametros : fecha en formato AAAAMMDD            */
/*             cod_unicom                           */
/*Retorno    : laboral dia                          */
/*                     error "29991231"                     */
/****************************************************/
/****************************************************/
/*BEGIN buscar_dia_laboral*/
/****************************************************/
function buscar_dia_laboral (fecha_in, cod_unicom)
{
 var   dia_laboral = false;
 var   fecha_l, errno;

//if ( !fecha_l ) { errno = 'ENOMEM'; return null; }

 if ( !test_fecha_s(fecha_in)) 
 {
         return ("29991231");
 }

 fecha_l = fecha_in;

 do 
 {
         if (dia_semana(fecha_l)=="Sabado")
         {
                 fecha_l = contar_fecha(fecha_l,1);
                 continue;
         }

         if (dia_semana(fecha_l)=="Domingo")
         {
                 fecha_l = contar_fecha(fecha_l,1);
                 continue;
         }

         if (dia_festivo(fecha_l)=="S")
         {
                 fecha_l = contar_fecha(fecha_l,1);
                 continue;
         }

         if (dia_festivo_local(fecha_l,cod_unicom)=="S") 
         { 
                 fecha_l = contar_fecha(fecha_l,1);
                 continue;
         }

         dia_laboral = true;
}
while ( !dia_laboral);

return (fecha_l);
}   /*  buscar_dia_laboral  */
/****************************************************/
/*END buscar_dia_laboral*/
/****************************************************/

/****************************************************/
/*Funcion    : numero_de_dias                       */
/*Description: diferencia dos fechas                */
/*Parametros : fecha en formato AAAAMMDD            */
/*             fecha en formato AAAAMMDD            */
/*Retorno    : numero dias                          */
/*                     error  0                             */
/****************************************************/
/****************************************************/
/*BEGIN numero_de_dias*/
/****************************************************/
function numero_de_dias(fecha_uno, fecha_dos)
{
 
var  s_year_uno;
var  s_month_uno;
var  s_day_uno;
var  s_year_dos;
var  s_month_dos;
var  s_day_dos;
var  time_stru_uno;
var  time_stru_dos;
var  Tp_uno;
var  Tp_dos;
var  Tp_diff;
var  n_dias;

if( !test_fecha_s(fecha_uno) ) 
{
        return (0);
}

if( !test_fecha_s(fecha_dos) ) 
{
   return (0);
}

s_year_uno = fecha_uno.substr(0,4);
s_month_uno = fecha_uno.substr(4,2);
s_day_uno = fecha_uno.substr(6,2);

s_year_dos = fecha_dos.substr(0,4);
s_month_dos = fecha_dos.substr(4,2);
s_day_dos = fecha_dos.substr(6,2);

Tp_uno = (new Date(s_month_uno+' '+s_day_uno+', '+s_year_uno)).getTime();
Tp_dos = (new Date(s_month_dos+' '+s_day_dos+', '+s_year_dos)).getTime();

Tp_diff = Tp_dos - Tp_uno;

n_dias = Tp_diff / 86400000;   /*1000*60*60*24 = 86400000 */

return (n_dias);
}   /*  numero_de_dias  */
/****************************************************/
/*END numero_de_dias*/
/****************************************************/

/****************************************************/
/*Funcion    : calcular_fecha_laboral               */
/*Description: calcula la fecha laboral mas cercana */
/*             a la fecha ingresada mas el numero   */
/*             de dias ingresado, en la oficina     */
/*             comercial ingresada                  */
/*Parametros : fecha en formato AAAAMMDD            */
/*             numero dias                          */
/*             cod_unicom                           */
/*Retorno    : fecha en formato AAAAMMDD            */
/*             error 1 fecha de entrada no numerica */
/*             E error en la tablas fiestas         */
/****************************************************/
/****************************************************/
/*BEGIN calcular_fecha_laboral*/
/****************************************************/
function calcular_fecha_laboral(fecha_in, n_day, cod_unicom)
{
var    fecha_contare;
var    fecha_laboral;
var    p_fecha;
var    help,errno;

/*if ( !p_fecha ) { errno = 'ENOMEM'; return null; }*/

/*sprintf(help,"%ld", cod_unicom);
fflush(stdout);*/

if ( !test_fecha_s(fecha_in))
{
 return ("1");
}
fecha_contare = contar_fecha( fecha_in, n_day);

p_fecha = buscar_dia_laboral(fecha_contare, cod_unicom);
if ( !(fecha_laboral=="29991231"))
{
 return ("E");
}

/*return (fecha_laboral);*/
return (p_fecha);
}   /*  calcular_fecha_laboral  */
/****************************************************/
/*END calcular_fecha_laboral*/
/****************************************************/

/****************************************************/
/*Funcion    : meses_entre                          */
/*Description: calcula la diferencia de meses       */
/*             entre dos fecha                      */
/*                                                  */
/*                                                  */
/*Parametros : fecha en formato AAAAMMDD            */
/*                                                  */
/*                                                  */
/*Retorno    : numero de meses                      */
/*             error 1 fecha de entrada no numerica */
/*             E                                    */
/****************************************************/
/****************************************************/
/*BEGIN meses_entre */
/****************************************************/
function meses_entre(f_de , f_ha)
{
   var temp, temp2;
   var desde;
   var hasta;
   var meses;

   temp = f_de.substr(0,4);
   temp2 = f_de.substr(4,2);
   
   desde = 12 * parseInt(temp);

   desde = desde + parseInt(temp2);
      
   temp = f_ha.substr(0,4);
   temp2 = f_ha.substr(4,2);

   hasta = 12 * parseInt(temp);

   hasta = hasta + parseInt(temp2);

   meses = hasta - desde;

   return(meses);
}   /*  meses_entre  */
/****************************************************/
/*END meses_entre */
/****************************************************/


function pad$1(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear$1(year) {
  return year < 0 ? "-" + pad$1(-year, 6)
    : year > 9999 ? "+" + pad$1(year, 6)
    : pad$1(year, 4);
}

exports.es_bisiesto = es_bisiesto;
exports.pad$1 = pad$1;
exports.formatYear$1 = formatYear$1; 
exports.test_fecha = test_fecha;
exports.dia_semana = dia_semana;
exports.fecha_hoy = fecha_hoy;
exports.fecha_hoy_for = fecha_hoy_for;


Object.defineProperty(exports, '__esModule', { value: true });

}));




