<?php
// Assicurati di consentire le richieste da qualsiasi origine (CORS). Questo è un esempio, è possibile configurare le origini consentite in modo più sicuro.
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Simula la generazione di un numero casuale per questo esempio
$numeroDiRitorno = rand(1, 100000);

$host = "localhost";
$port = 3309;
$username = "root";
$password = "pigrecoeasy";
$database = "provadb";

$conn = new mysqli($host, $username, $password, $dbname, $port);
        
// Verificare la connessione
if ($conn->connect_error) {
    die("Connessione al database non riuscita: " . $conn->connect_error);
} else {
    echo "Connessione al database riuscita!";
}

// Crea un array con il numero di ritorno
$risposta = array(
    "numero" => $numeroDiRitorno
);

// Converte l'array in formato JSON e lo restituisce come risposta
echo json_encode($risposta);
?>
