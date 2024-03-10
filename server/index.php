<?php
include('init.php');

if(!isset($_SERVER['HTTP_X_PJAX'])) {
    include('head.php');
}
?>
    <menu class="menu-buttons">

      <header class="top-bar" data-page-first-load="0" data-page-type="popular-page" no-touch>
        <a href="javascript:void(0)" onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON')" class="label live selected"
          data-sound="SE_A_TAB_TOUCH_OFF">Popular</a>
        <a href="javascript:void(0)" onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON')" class="label all"
          data-sound="SE_A_TAB_TOUCH_OFF">All Programs</a>
        <a href="javascript:void(0)" onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON')" class="label favorites"
          data-sound="SE_A_TAB_TOUCH_OFF">My Favorites</a>
      </header>

      <a navi_target navi_margin="4" onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON'), tvii.utils.hover(true, this)"
        onmouseout="tvii.utils.hover(false, this)" href="javascript:void(0);" onmouseup="tvii.utils.hover(false, this)"
        class="menubtn" onclick="openMenu()" data-sound="SE_POPUP_TOUCH_OFF">Menu</a>
      <a navi_target navi_margin="4" onmousedown="vino.soundPlay('SE_COMMON_TOUCH_ON'), tvii.utils.hover(true, this)"
        onmouseout="tvii.utils.hover(false, this)" href="javascript:void(0);" class="exitbtn"
        onclick="vino.lyt_startTouchEffect(),vino.lyt_reset(), vino.exit()" data-sound="SE_COMMON_FINISH_TOUCH_OFF"></a>

      <a class="info-tab" no_touch>Programs being shown here are currently popular.
      <div class="day-info">
        <div class="date-day-name"></div>
        <div class="date-day"></div>
        <div class="date-time"></div>
      </div>
      </a>

    </menu>

    <section class="program-preview">
      <img class="image" src="img/placeholder.gif" />
      <div class="program-metadata">
        <span class="show-services"></span>
        <span class="show-title"></span>
        <span class="show-description"></span>
      </div>
    </section>

    <section class="scroll-programs">
        <div class="daily-tip">
          <span class="tips-title">Tips</span>
          <span class="tip-content"></span>
        </div>
<?php
require_once '../config.php';
$conn = new mysqli(CONFIG_DB_SERVER, CONFIG_DB_USER, CONFIG_DB_PASS, CONFIG_DB_NAME);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL query to fetch 20 programs
$sql = "SELECT * FROM programs LIMIT 20";
$result = $conn->query($sql);

// Check if there is a result
if ($result) {
  if ($result->num_rows > 0) {
      // Loop through each program
      while ($row = $result->fetch_assoc()) {
          // Truncate description if longer than 178 characters
          $description = strlen($row['program_description']) > 178 ? substr($row['program_description'], 0, 175) . "..." : $row['program_description'];
          
          // Determine class based on program type
          switch ($row['program_type']) {
              case "1":
                  $class = ""; // No class
                  break;
              case "2":
                  $class = "movie";
                  break;
              case "3":
                  $class = "sport";
                  break;
              case "4":
                  $class = "live-event";
                  break;
              default:
                  $class = ""; // Default class if not matched
          }
          
          // Output the program div with appropriate attributes and classes
          echo '<div class="live-program ' . $class . '" ' .
               'data-image="' . htmlspecialchars($row['program_image']) . '" ' .
               'data-program-id="' . htmlspecialchars($row['program_id']) . '" ' .
               'data-program-name="' . htmlspecialchars($row['program_name']) . '" ' .
               'data-streaming="' . htmlspecialchars($row['program_streaming_services']) . '" ' .
               'data-program-description="' . htmlspecialchars($description) . '">' .
               '<span class="streaming-service">' . htmlspecialchars($row['program_streaming_services']) . '</span>' .
               '<span class="program-name">' . htmlspecialchars($row['program_name']) . '</span>' .
               '<span class="show-type">' . htmlspecialchars($row['program_genre']) . '</span>' .
               '</div>';
      }
  } else {
      echo "No programs found";
  }
} else {
  echo "Error: " . $conn->error;
}

// Close connection
$conn->close();
?>
    </section>

<?php
if(!isset($_SERVER['HTTP_X_PJAX'])) {
    include('footer.php');
}
?>