<?php

require_once '../config.php';

$baseUrl = isset($_SERVER['HTTP_X_NINTENDO_OLV_URL']) ? $_SERVER['HTTP_X_NINTENDO_OLV_URL'] : '';

function buildCustomHeaders() {
    $xNintendoServiceToken = isset($_SERVER['HTTP_X_NINTENDO_SERVICETOKEN']) ? $_SERVER['HTTP_X_NINTENDO_SERVICETOKEN'] : null;
    $xNintendoParamPack = isset($_SERVER['HTTP_X_NINTENDO_PARAMPACK']) ? $_SERVER['HTTP_X_NINTENDO_PARAMPACK'] : null;
    $customUserAgent = isset($_SERVER['HTTP_X_NINTENDO_OLV_USER_AGENT']) ? $_SERVER['HTTP_X_NINTENDO_OLV_USER_AGENT'] : null;

    $customHeaders = [
        'X-Nintendo-ServiceToken: ' . $xNintendoServiceToken,
        'X-Nintendo-ParamPack: ' . $xNintendoParamPack,
        'User-Agent: ' . $customUserAgent,
    ];

    return $customHeaders;
}

function performCurlRequest($url, $method, $data = null) {

    $ch = curl_init($url);


    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_CAINFO, CONFIG_OLV_SSL_CERT);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    curl_setopt($ch, CURLOPT_HTTPHEADER, buildCustomHeaders());

    if ($method === 'POST') {
        // Handle POST request
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }

    $apiResponse = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'cURL Error: ' . curl_error($ch);
    } else {
        header('Content-Type: application/xml');
        echo $apiResponse;
    }

    curl_close($ch);
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // GET request handling
    $apiEndpoint =  $baseUrl . '/v1/communities/0/posts';
    $apiEndpoint .= '?' . http_build_query($_GET); // Forward all query parameters
    performCurlRequest($apiEndpoint, 'GET');
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
    // POST request handling
    if ($_GET['yeah']) {
        $apiEndpoint =  $baseUrl . '/v1/posts/' . $_GET['yeah'] . '/empathies';
        if ($_GET['remove'] == '1') {
            $apiEndpoint .= '.delete';
        }
        // For empathies, make request URL-based without forwarding form data
        performCurlRequest($apiEndpoint, 'POST');
    } else {
        // For regular posts, forward the form data
        $apiEndpoint =  $baseUrl . '/v1/posts';
        $formData = http_build_query($_POST);
        performCurlRequest($apiEndpoint, 'POST', $formData);
    }
}
?>