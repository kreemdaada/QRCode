<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "qrcode";

// Erstelle eine Verbindung zur Datenbank
$conn = new mysqli($servername, $username, $password, $dbname);

// Überprüfen, ob die Verbindung erfolgreich war
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

// Daten aus dem POST-Array holen (angenommen, dass du das mit POST sendest)
$fullName = $_POST['fullName'];
$address = $_POST['address'];
$dateOfBirth = $_POST['dateOfBirth'];
$iban = $_POST['iban'];

// SQL-Query zum Einfügen von Daten
$sql = "INSERT INTO zahlungen (fullName, address, dateOfBirth, iban) VALUES ('$fullName', '$address', '$dateOfBirth', '$iban')";

// Überprüfen, ob das Einfügen erfolgreich war
if ($conn->query($sql) === TRUE) {
    echo "Daten erfolgreich eingefügt";
} else {
    echo "Fehler beim Einfügen der Daten: " . $conn->error;
}

// Verbindung schließen
$conn->close();
?>
