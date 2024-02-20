<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


include '/database.php';

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
