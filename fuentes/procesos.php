<meta charset = "utf-8"/> 
<?php // Datos 
	
	//include_once('functions.php');
	//require_once( 'gl-config.php' );
	//require_once ('gl-per-contrata.php');
	
	// Rescatamos el parámetro pais que nos llega mediante post 
	$oficialEntrega=$_POST["selectOficialEntrega"];
    $oficialRecibe=$_POST["selectOficialRecibe"];
    $oficial3x3=$_POST["selectOficial3x3"];
    $oficialRelevo=$_POST["selectOficialRelevo"];
    $dia=$_POST["dia"];
    $fecha=$_POST["fecha"];
    $existePais = false; 

    $status = "Insertado";
    $string_1 = "Apertura del dia";   
    echo $string_1;

    // Conexión a la base de datos (debes proporcionar los detalles de la conexión)
     $db = new mysqli("sql110.byetcluster.com", "b7_36579774", "valenvalen01", "b7_36579774_tubrica");
	
     if ($db->connect_error) {
          die("Error de conexión a la base de datos: " . $db->connect_error);
      }
     else {
            echo("Se conecto a la base de datos  --");            
            echo($fecha);
            echo($oficialEntrega);   
            echo($oficialRecibe);
            echo($oficial3x3);
            echo($oficialRelevo);
            echo($dia);
            echo($status);
            echo($string_1);   

            
      // Insertar datos en la tabla
@$query = "INSERT INTO gl_control_dia (fecha, oentrega, orecibe, onocturno, orelevo, fecha_1, dia, status, string_1) VALUES (?,?,?,?,?,?,?,?,?)";

@$stmt = $db->prepare($query);
		
		    if ($stmt === false) {
            /* Puedes hacer un return con ok a false o lanzar una excepción */
            /*throw new Exception('Error en prepare: ' . $stmt->error);*/
		    return [ 'ok' => 'false' ];
            }
		
@$stmt->bind_param("sssssssss", $fecha, $oficialEntrega, $oficialRecibe, $oficial3x3, $oficialRelevo, $fecha, $dia, $status, $string_1);         
      
           if ($stmt->execute()) {            
             echo "Datos Insertados correctamente: ";
           } else {
             echo "Error al insertar datos: " . $stmt->error;
           }           
     
     
     }

    // CERRAMOS LA CONEXION 
	@mysqli_close($db);

	$msg.$respuesta = $fecha." ".$oficialEntrega." ".$oficialRecibe." ".$oficial3x3." ".$oficialRelevo." ".$dia." ".$status." ".$string_1;
	
	echo $msg.$respuesta; 
?>