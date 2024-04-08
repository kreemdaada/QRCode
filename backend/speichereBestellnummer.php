<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "qrcode";

// Verbindung herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Überprüfen der Verbindung
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Überprüfen, ob der JSON-Body vorhanden ist
    $jsonBody = json_decode(file_get_contents("php://input"), true);

    // Überprüfen, ob die Schlüssel im JSON-Body vorhanden sind
    if (isset($jsonBody['bestellnummer']) && !empty($jsonBody['bestellnummer'])) {
        // Filtere und validiere die Daten weiter
        $bestellnummer = filter_var($jsonBody['bestellnummer'], FILTER_SANITIZE_STRING);

        // Verwende ein vorbereitetes Statement, um SQL-Injektionen zu verhindern
        $sql = "INSERT INTO bestellungen (bestellnummer) VALUES (?)";
        $stmt = $conn->prepare($sql);

        // Überprüfen, ob das Statement korrekt vorbereitet wurde
        if (!$stmt) {
            echo json_encode(['success' => false, 'error' => 'Fehler beim Vorbereiten des Statements']);
        } else {
            // Binden der Parameter
            $stmt->bind_param("s", $bestellnummer);

            // Ausführen des Statements
            if ($stmt->execute()) {
                echo json_encode(['success' => true, 'message' => 'Bestellnummer erfolgreich gespeichert']);
            } else {
                $errorDetails = $stmt->error;
                $errorCode = $stmt->errno;

                // Fehlerprotokollierung
                error_log("Error executing query: " . $errorDetails);

                echo json_encode(['success' => false, 'error' => 'Fehler beim Speichern der Bestellnummer', 'errorCode' => $errorCode]);
            }

            // Statement schließen
            $stmt->close();
        }
    } else {
        echo json_encode(['success' => false, 'error' => 'Incomplete or empty data']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}

// Close the database connection
$conn->close();
?>
