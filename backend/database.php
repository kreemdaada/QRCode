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
    if (
        isset($jsonBody['firstName'], $jsonBody['lastName'], $jsonBody['email'], $jsonBody['password'], $jsonBody['confirmPassword'])
        && !empty($jsonBody['firstName'])
        && !empty($jsonBody['lastName'])
        && !empty($jsonBody['email'])
        && !empty($jsonBody['password'])
    ) {
        $firstName = htmlspecialchars($jsonBody['firstName'], ENT_QUOTES, 'UTF-8');
        $lastName = htmlspecialchars($jsonBody['lastName'], ENT_QUOTES, 'UTF-8');
        $email = htmlspecialchars($jsonBody['email'], ENT_QUOTES, 'UTF-8');
        $password = $jsonBody['password'];
        $confirmPassword = $jsonBody['confirmPassword'];

        // Datenvalidierung
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Überprüfen, ob Passwort und Bestätigung übereinstimmen
            if ($password === $confirmPassword) {
                // Passwort-Validierung (Mindestlänge, besondere Anforderungen, etc.)
                if (strlen($password) >= 8) {
                    // Passwort-Hashing
                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

                    // Verwende ein vorbereitetes Statement, um SQL-Injektionen zu verhindern
                    $sql = "INSERT INTO users (vorname, nachname, email, password) VALUES (?, ?, ?, ?)";
                    $stmt = $conn->prepare($sql);

                    // Binden der Parameter
                    $stmt->bind_param("ssss", $firstName, $lastName, $email, $hashedPassword);

                    // Ausführen des Statements
                    if ($stmt->execute()) {
                        echo json_encode(['success' => true, 'message' => 'Registration successful']);
                    } else {
                        $errorDetails = $stmt->error;
                        $errorCode = $stmt->errno;

                        // Fehlerprotokollierung
                        error_log("Error executing query: " . $errorDetails);

                        echo json_encode(['success' => false, 'error' => 'Error executing query']);
                    }

                    // Statement schließen
                    $stmt->close();
                } else {
                    echo json_encode(['success' => false, 'error' => 'Password must be at least 8 characters']);
                }
            } else {
                echo json_encode(['success' => false, 'error' => 'Password and confirmation do not match']);
            }
        } else {
            echo json_encode(['success' => false, 'error' => 'Invalid email format']);
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
