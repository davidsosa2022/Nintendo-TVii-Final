<?php
include('init.php');

if(!isset($_SERVER['HTTP_X_PJAX'])) {
    include('head.php');
}
?>

<?php
require_once '../config.php';
$conn = new mysqli(CONFIG_DB_SERVER, CONFIG_DB_USER, CONFIG_DB_PASS, CONFIG_DB_NAME);

// Check database connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$program_id = null;
$image = null;
$name = null;
$genre = null;
$platforms = null;
$year = null;
$rating = null;
$country = null;
$trailer_url = null;
$extra_url = null;
$description = null;
$actors_html = null;

// Check if program_id is provided in the URL
if(isset($_GET['program'])) {
    // Sanitize the input to prevent SQL injection
    $program_id = htmlspecialchars($_GET['program']);
    
    // Query to retrieve the program from the database
    $sql = "SELECT * FROM programs WHERE program_id = ?";
    
    // Prepare the statement
    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        die("Error in preparing statement: " . $conn->error);
    }
    
    // Bind the parameter
    $stmt->bind_param('s', $program_id);
    
    // Execute the statement
    $success = $stmt->execute();
    
    if (!$success) {
        die("Error in executing statement: " . $stmt->error);
    }
    
    // Get the result
    $result = $stmt->get_result();
    
    if (!$result) {
        die("Error in getting result set: " . $conn->error);
    }
    
    // Fetch the program
    $program = $result->fetch_assoc();
    
    // Check if program exists
    if($program) {
        $image = $program['program_image'];
        $name = $program['program_name'];
        $description = strlen($program['program_description']) > 450 ? substr($program['program_description'], 0, 450) . "..." : $program['program_description'];
        $year = $program['program_year'];
        $genre = $program['program_genre'];
        $rating = $program['program_rating'];
        $country = $program['program_country'];
        $platforms = $program['program_streaming_services'];
                // Retrieve actors for the program
                $actor_ids = explode(',', $program['program_actors']); // Assuming actor IDs are comma-separated
        
                // Loop through actor IDs
                foreach ($actor_ids as $actor_id) {
                    // Query to retrieve actor details from the database
                    $sql_actor = "SELECT * FROM actors WHERE actor_id = ?";
                    
                    // Prepare the statement
                    $stmt_actor = $conn->prepare($sql_actor);
                    
                    if (!$stmt_actor) {
                        die("Error in preparing statement: " . $conn->error);
                    }
                    
                    // Bind the parameter
                    $stmt_actor->bind_param('s', $actor_id);
                    
                    // Execute the statement
                    $success_actor = $stmt_actor->execute();
                    
                    if (!$success_actor) {
                        die("Error in executing statement: " . $stmt_actor->error);
                    }
                    
                    // Get the result
                    $result_actor = $stmt_actor->get_result();
                    
                    if (!$result_actor) {
                        die("Error in getting result set: " . $conn->error);
                    }
                    
                    // Fetch the actor
                    $actor = $result_actor->fetch_assoc();
                    
                    // Check if actor exists
                    if($actor) {
                        // Append HTML for actor to $actors_html
                        $actors_html .= '<a href="javascript:void(0)" data-actor-name="' . $actor['actor_name'] . '" data-actor-id="' . $actor['actor_id'] . '" data-sound="SE_APPEAR_DETAIL" navi_target no_touch class="actor">';
                        $actors_html .= '<img navi_mouse class="actor_image" src="' . $actor['actor_image'] . '">';
                        $actors_html .= '<span class="actor_name">' . $actor['actor_name'] . '</span>';
                        $actors_html .= '</a>';
                    }
                }
    } else {
        die("Program not found.");
    }
}
?>

  <menu class="menu-buttons">
    <header class="top-bar full" data-page-type="program-page" no_touch><?php echo $name; ?></header>
    <button navi_target navi_no_reset onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON'), tvii.utils.hover(true, this)" onmouseout="tvii.utils.hover(false, this)" href="javascript:void(0);" onmouseup="tvii.utils.hover(false, this)" class="favoritebtn" onclick="toggleFavorite();"></button>
    <a navi_target onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON'), tvii.utils.hover(true, this)" onmouseout="tvii.utils.hover(false, this)" href="javascript:void(0);" onmouseup="tvii.utils.hover(false, this)" class="toppagebtn" onclick="tvii.utils.top()" data-sound="SE_TOP_TOUCH_OFF">Back to Top</a>

    <a onmousedown="vino.soundPlay('SE_MOVEPAGE_SELECT'), tvii.utils.hover(true, this)" onmouseout="tvii.utils.hover(false, this)" href="javascript:void(0);" onmouseup="tvii.utils.hover(false, this)" class="before_page_button" style="display: none;" onclick="scrollLeftPPage();" data-sound="SE_MOVEPAGE_PLAY"></a>
    <a onmousedown="vino.soundPlay('SE_MOVEPAGE_SELECT'), tvii.utils.hover(true, this)" onmouseout="tvii.utils.hover(false, this)" href="javascript:void(0);" onmouseup="tvii.utils.hover(false, this)" class="next_page_button" style="display: block;" onclick="scrollRightPPage();" data-sound="SE_MOVEPAGE_PLAY"></a>

    <button navi_target onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON'), tvii.utils.hover(true, this)" onmouseout="tvii.utils.hover(false, this)" href="javascript:void(0);" onmouseup="tvii.utils.hover(false, this)" class="back_white_button" onclick="history.back();" data-sound="SE_RETURN_TOUCH_OFF"></button>
    <a class="info-tab program" no_touch>Information about the program is shown.
    <div class="day-info">
      <div class="date-day-name"></div>
      <div class="date-day"></div>
      <div class="date-time"></div>
    </div>
    <button navi_target onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON'), tvii.utils.hover(true, this)" onmouseout="tvii.utils.hover(false, this)" onmouseup="tvii.utils.hover(false, this)" href="javascript:void(0)" class="miiverse-button" onclick="prepareMiiverseModal()" data-sound="SE_POPUP_TOUCH_OFF"></button>
    </a>
  
 </menu>

<div class="program-content">

<section class="program-details">
<img src="<?php echo $image; ?>" class="image">
<div class="program-metadata">
  <span class="show-services">Synopsis</span>
  <span class="show-description"><?php echo $description; ?></span>
</div>
</section>
 
<section class="actors">
<?php echo $actors_html; ?>
</section>

<section class="extra-information">
<span class="program-genre">
    <span>Genre:</span>
    <?php echo $genre; ?>
</span>
<span class="program-plataform">
    <span>Platforms:</span>
    <?php echo $platforms; ?>
</span>
<span class="details">
    <span class="title">Year:</span>
    <span class="value"><?php echo $year; ?></span>
</span>
<span class="details">
    <span class="title">Rating:</span>
    <span class="value"><?php echo $rating; ?></span>
</span>
<span class="details">
    <span class="title">Country:</span>
    <span class="value"><?php echo $country; ?></span>
</span>
<button class="jump-browser" no_touch="" navi_target="">See additional information</button>
<button class="open-trailer-modal" navi_target="" no_touch="">Watch official trailer</button>
<div class="trailer-div">
  <video class="program-trailer" width="563" height="316" src="">
  </video>
  <button class="exit-trailer">Close</button>
</div>
</section>

</div>

<div class="miiverse-posts program">
  <a no_touch onmousemove="void(0)" class="loading_miiverse"></a>
  <a navi_target onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON'), app.utils.hover(true, this)" onmouseout="app.utils.hover(false, this)" href="javascript:void(0);" onmouseup="app.utils.hover(false, this)" class="back_white_button posts_back" onclick="closeMiiverseModal()" data-sound="SE_RETURN_TOUCH_OFF"></a>

<header class="posts-top-bar"></header>

<div class="post-list">
</div>

<div class="post-confirm-modal" onmousemove="void(0);">
  <h1 class="confirm-header">The content you've entered will now be sent.</h1>
  <p1 class="confirm-text">If your post contains spoilers (such as important parts of the plot), please go back and check the Spoilers option.</p1>
  <section class="message-content">

  <img class="mii-img" data-sound="SE_WORD_MII" src="img/normal_face.png">
  <p class="user-text none"></p>
  <div class="user-memo none">
  <img class="memo" src="img/memo.png"/>
  </div>
</section>


<span class="spoilers-status"></span>

<button onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON'), app.utils.hover(true, this)" onmouseout="app.utils.hover(false, this)" href="javascript:void(0);" onmouseup="app.utils.hover(false, this)" class="cancel-post">Cancel</button>
<button onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON'), app.utils.hover(true, this)" onmouseout="app.utils.hover(false, this)" href="javascript:void(0);" onmouseup="app.utils.hover(false, this)" class="finish-post">Post</button>

</div>

</div>

<?php
if(!isset($_SERVER['HTTP_X_PJAX'])) {
    include('footer.php');
}
?>