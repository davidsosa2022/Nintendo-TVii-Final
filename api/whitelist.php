<?php
if(isset($_GET['country'])) {
    $country = $_GET['country'];

    $whiteTitleID = "000500301001320A";

    if($country === "US") {
        $whiteTitleID = "000500301001310A";
    } elseif($country === "JP") {
        $whiteTitleID = "000500301001300A";
    }

    $countryInfo = "<white-domain>https://tvii.termy.lol/\n" .
                   "<gold-domain>https://tvii.termy.lol/\n" .
                   "<white-title-ID>$whiteTitleID\n" .
                   "<top-page>https://tvii.termy.lol/\n" .
                   "<white-acr>a";

    header('Content-Type: text/plain');

    echo $countryInfo;
} else {
    echo "Error: Country parameter is missing.";
}
?>
