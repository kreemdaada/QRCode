<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

include '/database.php';
// Überprüfen der Datenbankverbindung
if ($conn->connect_error) {
  die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

// Gescannte Produkte in die Datenbank einfügen
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $json_data = file_get_contents("php://input");
  $data = json_decode($json_data, true);

  $produktName = $data['produktName'];
  $preis = $data['preis'];
  $menge= $data['menge'];

  $sql = "INSERT INTO gescannte_produkte (produktName, preis, menge) VALUES ('$produktName', '$preis','$menge')";

  if ($conn->query($sql) === TRUE) {
    echo json_encode(array('success' => true));
  } else {
    echo json_encode(array('success' => false, 'error' => $conn->error));
  }
}

$conn->close();
?>