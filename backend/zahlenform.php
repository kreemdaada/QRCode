<?php
// Fehlerberichterstattung aktivieren
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// CORS-Header setzen
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Datenbankverbindungsinformationen
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "qrcode";

// Daten aus dem POST-Array sichern und überprüfen
$fullName = isset($_POST['fullName']) ? htmlspecialchars($_POST['fullName'], ENT_QUOTES, 'UTF-8') : null;
$address = isset($_POST['address']) ? htmlspecialchars($_POST['address'], ENT_QUOTES, 'UTF-8') : null;
$dateOfBirth = isset($_POST['dateOfBirth']) ? htmlspecialchars($_POST['dateOfBirth'], ENT_QUOTES, 'UTF-8') : null;
$iban = isset($_POST['iban']) ? htmlspecialchars($_POST['iban'], ENT_QUOTES, 'UTF-8') : null;

// Überprüfen, ob alle erforderlichen Felder vorhanden sind
if (!$fullName || !$address || !$dateOfBirth || !$iban) {
    echo json_encode(['error' => 'Nicht alle erforderlichen Felder wurden übermittelt.']);
    exit;
}

// Verbindung zur Datenbank herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Überprüfen, ob die Verbindung erfolgreich war
if ($conn->connect_error) {
    echo json_encode(['error' => 'Verbindung zur Datenbank fehlgeschlagen: ' . $conn->connect_error]);
    exit;
}

// SQL-Query zum Einfügen von Daten (verwende Prepared Statements, um SQL-Injektionen zu verhindern)
$sql = "INSERT INTO zahlungen (fullName, address, dateOfBirth, iban) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ssss', $fullName, $address, $dateOfBirth, $iban);

// Überprüfen, ob das Einfügen erfolgreich war
if ($stmt->execute()) {
    echo json_encode(['success' => 'Daten erfolgreich eingefügt']);
} else {
    echo json_encode(['error' => 'Fehler beim Einfügen der Daten: ' . $stmt->error]);
}

// Verbindung schließen
$stmt->close();
$conn->close();
?>
