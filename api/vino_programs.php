<?php

require_once '../config.php';

$program_id = $_GET['request'];

if ($_GET['request']) {};

$conn = new mysqli(CONFIG_DB_SERVER, CONFIG_DB_USER, CONFIG_DB_PASS, CONFIG_DB_NAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM programs WHERE program_id = '$program_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    // Start building the XML
    $xml = new SimpleXMLElement('<vino_request/>');
    $content = $xml->addChild('content');
    $program = $content->addChild('program');

    // Add program data
    $program->addChild('program_name', $row['program_name']);
    $program->addChild('program_image', $row['program_image']);
    $program->addChild('streaming_service', $row['program_streaming_services']);
    $program->addChild('program_rating', $row['program_rating']);
    $program->addChild('program_year', $row['program_year']);
    $program->addChild('program_country', $row['program_country']);
    $program->addChild('program_extra_url', $row['program_extra_url']);
    $program->addChild('program_id', $row['program_id']);
    $program->addChild('program_description', $row['program_description']);
    $program->addChild('program_genre', $row['program_genre']);
    $program->addChild('program_trailer_source', $row['program_trailer_url']);
    $program->addChild('program_type', $row['program_type']);
    $program->addChild('disable_favorite', $row['disable_favorite']);

// Add actors data
$actors = $program->addChild('actors');

// Split the comma-separated list of actor IDs in program_actors
$actor_ids = explode(',', $row['program_actors']);

$actor_ids = array_slice($actor_ids, 0, 8);


foreach ($actor_ids as $actor_id) {
    $actor_sql = "SELECT * FROM actors WHERE actor_id = '$actor_id'";
    $actor_result = $conn->query($actor_sql);

    if ($actor_result->num_rows > 0) {
        $actor_row = $actor_result->fetch_assoc();
        $actor = $actors->addChild('actor');
        $actor->addChild('actor_name', $actor_row['actor_name']);
        $actor->addChild('actor_id', $actor_row['actor_id']);
        $actor->addChild('actor_image', $actor_row['actor_image']);
    }
}

    header('Content-type: text/xml');
    echo $xml->asXML();
} else {
    echo "Program not found";
}

$conn->close();

?>