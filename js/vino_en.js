if (typeof vino === 'undefined') {
    console.log('Initialize API emulation');
    if (typeof wiiu === 'undefined') { window.wiiu = {}, window.wiiu.gamepad = { update: function () { } }; }
    $(document).on('keydown', function (event) {
        // Check which key is pressed and set the corresponding value for wiiu.gamepad.hold

        switch (event.keyCode) {
            case 66: // B key
                wiiu.gamepad.hold = 16384;
                break;
            case 88: // X key
                wiiu.gamepad.hold = 8192;
                break;
            case 89: // Y key
                wiiu.gamepad.hold = 4096;
                break;
            case 76: // L key
                wiiu.gamepad.hold = 32;
                break;
            case 82: // R key
                wiiu.gamepad.hold = 16;
                break;
            case 189: // SELECT key
                wiiu.gamepad.hold = 4;
                break;
            case 37: // Left arrow
                wiiu.gamepad.hold = 1073741824;
                break;
            case 38: // Up arrow
                wiiu.gamepad.hold = 268435456;
                break;
            case 39: // Right arrow
                wiiu.gamepad.hold = 536870912;
                break;
            case 40: // Down arrow
                wiiu.gamepad.hold = 134217728;
                break;
            default:
            // Handle other keys or do nothing
        }
    });

    $(document).on('keyup', function (event) {
        wiiu.gamepad.hold = 0;
    });

    window.vino = {
        requestGarbageCollect: function () {
            console.log('Requested Garbage collection');
        },
        ls_getItem: function (key) {
            return localStorage.getItem(key);
        },
        ls_setItem: function (key, value) {
            localStorage.setItem(key, value);
            return true;
        },
        ls_removeItem: function (key) {
            localStorage.removeItem(key);
        },
        ls_clear: function () {
            localStorage.clear();
        },
        ls_key: function (index) {
            return localStorage.key(index);
        },
        ls_length: function () {
            return localStorage.length;
        },
        lyt_setIsEnableClientLoadingIcon: function (show) {
            console.log((show ? 'Show' : 'Hide') + ' blue loading icon');
        },
        lyt_setIsEnableWhiteMask: function (withmask) {
            console.log((withmask ? 'With' : 'Without') + ' white mask');
        },
        lyt_startTouchEffect: function () {
            console.log('Show touch effect');
        },
        lyt_reset: function () {
            console.log('Reset lyt');
        },
        lyt_decideFixedFrame: function () {
            console.log('Decide lyt');
        },
        lyt_drawFixedFrame: function (one, two, three, four) {
            console.log('Drew frame at ' + one, two, three, four);
        },
        lyt_startTouchNodeEffect: function (one, two, three, four) {
            console.log('Show touch mouse effect at ' + one, two, three, four);
        },
        video_enableOnTV: function (bool) {
            console.log('Enable video on TV is ' + bool);
        },
        emulate_touch: function (one, two, three) {
            console.log('Emulate touch at ' + one, two, three);
        },
        emulate_inputDelay: function (one) {
            console.log('Emulate input delay in ' + one + ' seconds');
        },
        exit: function () {
            console.log('Exit app');
            window.location.href = "https://google.com"
        },
        exitForce: function () {
            console.log('Forcing exit app');
            window.location.href = "https://google.com"
        },
        isReturnedFromOtherApplication: function () {
            console.log('App was not returned from other application');
            return false;
        },
        runOliveErrorDialog: function (errorCode) {
            alert('115-' + errorCode + '\n\n' + 'An Miiverse error occurred.');
        },
        runErrorDialog: function (errorCode) {
            alert('119-9' + errorCode + '\n\n' + 'An Vino error occurred.');
        },
        olv_getErrorCodeOnInitialize: function () {
            alert('115-5004' + '\n\n' + 'The Miiverse service has ended.');
        },
        runSingleButtonDialog: function (msg, btnStr) {
            alert(msg + "\n\n[ " + btnStr + " ]");
        },
        runTwoButtonDialog: function (msg, lBtnStr, rBtnStr) {
            if (confirm(msg + "\n\n[ " + lBtnStr + " (Cancel) ]  [ " + rBtnStr + " (OK) ]")) {
                return false;
            }
        },
        info_getCountry: function () {
            return 'US';
        },
        info_getLanguage: function () {
            return 'EN';
        },
        loading_setIconRect: function (one, two, three, four) {
            console.log('Set loading icon position at ' + one, two, three, four);
        },
        loading_setIconAppear: function (show) {
            console.log((show ? 'Show' : 'Hide') + ' loading icon.');
        },
        loading_setIconVisibility: function (show) {
            console.log((show ? 'Instantly show' : 'Instantly hide') + ' loading icon.');
        },
        soundPlay: function (soundLabel) {
            console.log('Played sound effect ' + soundLabel);
        },
        soundPlayVolume: function (soundLabel, vol) {
            console.log('Played sound effect ' + soundLabel + ' with volume ' + vol);
        },
        ir_enableCodeset: function (one) {
            console.log('Enabled IR codeset ' + one);
        },
        ir_send: function (one, two) {
            console.log('Sent IR code ' + one);
        },
        navi_reset: function () {
            console.log('Reset navi position');
        },
        navi_getRect: function () {
            return;
        },
        navi_setMoveMethod: function (one) {
            console.log('Set move method ' + one);
        },
        navi_setBaseVisibilityOnKeyEvent: function (bool) {
            console.log('Base visibility is ' + bool);
        },
        navi_set: function (one, two, three, four) {
            console.log('Navi set at ' + one, two, three, four);
        },
        act_getCurrentSlotNo: function () {
            console.log('Returned account slot "1"');
            return 1;
        },
        act_getMiiImage: function (slot) {
            console.log('Returned Mii image from ' + slot);
            return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_normal_face.png';
        },
        act_getMiiImageEx: function (slot, expression) {
            console.log('Returned Mii image from ' + slot + ' with expression ' + expression);
            var imageUrl;
            switch (expression) {
                case 7:
                    imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_whole_body.png';
                    break;
                case 2:
                    imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_happy_face.png';
                    break;
                case 3:
                    imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_like_face.png';
                    break;
                case 4:
                    imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_surprised_face.png';
                    break;
                case 5:
                    imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_frustrated_face.png';
                    break;
                case 6:
                    imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_puzzled_face.png';
                    break;
                default:
                    imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_normal_face.png';
                    break;
            }
            return imageUrl;
        },
        act_getMiiData: function (slot) {
            console.log('Returned Mii data from ' + slot);
            return 'AwAAQBs8xqsHR9PC3Oe15oXEaBemLwAAAQxTAGEAcgBhAGgAAAAAAAAAAAAAAEpACBCAD3ppRBgzFEYYhhIWSA4AACkAUkhQAABpAG4AdABlAG4AZABvAAAAAAAAANL3';
        },
        act_getNum: function () {
            console.log('Returned number of accounts');
            return 1;
        },
        act_getName: function (slot) {
            console.log('Returned Mii name from ' + slot);
            return 'Sarah';
        },
        act_getPid: function (slot) {
            console.log('Returned account PID from ' + slot);
            return 1738258923;
        },
        act_getAgeDivision: function (slot) {
            console.log('Returned account age division from ' + slot);
            return 1;
        },
        apd_isEnabled: function () {
            console.log('APD is enabled on console');
            return true;
        },
        apd_getPeriod: function () {
            console.log('Return APD period');
            return 6200;
        },
        apd_enable: function () {
            console.log('APD has been enabled');
            return true;
        },
        apd_disable: function () {
            console.log('APD has been disabled');
            return false;
        },
        memo_open: function (state) {
            console.log((state ? 'Open with reset' : 'Open without reset') + ' memo UI');
            return true;
        },
        memo_reset: function () {
            console.log('Memo UI was reset');
            return true;
        },
        memo_isFinish: function () {
            console.log('Memo UI finished');
            return true;
        },
        memo_getImagePng: function () {
            console.log('Return memo UI image');
            return 'https://i.ibb.co/rwr9J38/descarga.png';
        },
        memo_getImageTgaRaw: function () {
            console.log('Return memo UI raw image');
            return 'DARA';
        },
        memo_getImageTgaCompressed: function () {
            console.log('Return memo UI compressed image');
            return 'DARA';
        },
        fp_getFriendList: function () {
            console.log('Return friend list');
            return '1739044112, 1738830554, 1741588700, 1738406070';
        },
        fp_getFriendName: function (PID) {
            console.log('Get friend name of ' + PID);
            return 'David Joaq';
        },
        jumpToTitle: function (TID, bool) {
            console.log('Jump to app ' + TID);
        },
        jumpToMiiverse: function (bool) {
            console.log('Jump to Miiverse is ' + bool);
        },
        jumpToMiiversePostId: function (postid, bool) {
            console.log('Jump to post ' + postid + ' on Miiverse is ' + bool);
        },
        jumpToEShop: function (TID, bool) {
            console.log('Jump to eShop page of TID ' + TID + ' is ' + bool);
        },
        jumpToVod: function (url, TID, bool) {
            console.log('Jump to VOD app of TID ' + TID + ' with URL ' + url + ' is ' + bool);
            window.location.href = url;
        },
        jumpToBrowser: function (url, bool) {
            console.log((bool ? 'Jump' : 'Did not jump') + ' to URL ' + url);
            window.location.href = url;
        },
        jumpToSettingsTvRemote: function (bool) {
            console.log((bool ? 'Jump' : 'Did not jump') + ' to TV Remote Settings');
        },
        olv_isEnabled: function () {
            console.log('Miiverse is enabled');
            return true;
        },
        olv_getPostingResult: function () {
            console.log('Post was successful');
            return 1;
        },
        olv_getHostName: function () {
            console.log('Miiverse host name ' + 'https://rvqcportal.rverse.club');
            return 'https://rvqcportal.rverse.club';
        },
        olv_getUserAgent: function () {
            console.log('Miiverse user agent ' + 'WiiU/POLV-5.0.3/353');
            return 'WiiU/POLV-5.0.3/305';
        },
        olv_getServiceToken: function () {
            console.log('Return service token');
            return '837vCg+l8rgFmGSHhZXRH22xr7YUxPhQ95FvhWr3JmoYBsWxUfIYZHFF+J6NYy9eUVnEhv8y3YFw2BrZZ3UEunQfHf7omFk0t4kWywIZYQcaZUDx367u7uSwW+34xF4+/IPQFGLtCh6moWe97yHcOMR374iAmzb1uTDM2cRgDco=';
        },
        olv_getParameterPack: function () {
            console.log('Return param pack');
            return 'XHRpdGxlX2lkXDE0MDc1ODEzMTA0OTcwMzRcYWNjZXNzX2tleVwzNDczXHBsYXRmb3JtX2lkXDFc cmVnaW9uX2lkXDJcbGFuZ3VhZ2VfaWRcMVxjb3VudHJ5X2lkXDQ5XGFyZWFfaWRcMzZcbmV0d29y a19yZXN0cmljdGlvblwwXGZyaWVuZF9yZXN0cmljdGlvblwwXHJhdGluZ19yZXN0cmljdGlvblwx N1xyYXRpbmdfb3JnYW5pemF0aW9uXDFcdHJhbnNmZXJhYmxlX2lkXDExMDU5OTY0MDc3OTU4MjI1 MzQ3XHR6X25hbWVcQW1lcmljYS9OZXdfWW9ya1x1dGNfb2Zmc2V0XC0xNDQwMFw=';
        },
        olv_postText: function (body, topicTag, feelingID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse with message ' + '"' + body + '"' + ' with topic ' + topicTag + ' with feeling ID ' + feelingID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        olv_postTextFixedPhrase: function (body, topicTag, feelingID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse fixed phrase with message ' + '"' + body + '"' + ' with topic ' + topicTag + ' with feeling ID ' + feelingID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        olv_postImage: function (painting, topicTag, feelingID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse with drawing ' + '"' + painting + '"' + ' with topic ' + topicTag + ' with feeling ID ' + feelingID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        olv_postImageFixedPhrase: function (body, topicTag, feelingID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
            console.log('Post to Miiverse fixed phrase with drawing ' + '"' + painting + '"' + ' with topic ' + topicTag + ' with feeling ID ' + feelingID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
        },
        suggest_isOpening: function () {
            console.log('Suggest is opening');
            return true;
        },
        suggest_set: function (sug1, sug2, sug3, sug4, sug5, sug6, sug7, sug8, sug9, sug10) {
            console.log('Set suggestion strings ' + '"' + sug1 + '", ' + '"' + sug2 + '", ' + '"' + sug3 + '", ' + '"' + sug4 + '", ' + '"' + sug5 + '", ' + '"' + sug6 + '", ' + '"' + sug7 + '", ' + '"' + sug8 + '", ' + '"' + sug9 + '", ' + '"' + sug10 + '"');
            return true;
        },
        suggest_reset: function () {
            console.log('Reset suggestion strings');
            return true;
        },
        suggest_getString: function () {
            console.log('Get string ' + '"Hello"');
            return 'Hello';
        },
        pc_isControlled: function () {
            console.log('Parental Controls are disabled');
            return false;
        },
        pc_getMiiverseControlLevel: function () {
            console.log('No Miiverse Control Settings');
            return 0;
        },
        pc_isControlledNetworkCommunication: function () {
            console.log('No Network Communication Settings');
            return false;
        },
        pc_isControlledFriendReg: function () {
            console.log('No Friend Settings');
            return false;
        },
        pc_isControlledBrowser: function () {
            console.log('No Browser Settings');
            return false;
        },
        ng_checkText: function (message) {
            console.log(message + ' does not contain any blacklisted words.');
            return true;
        },
        ng_checkWord: function (message) {
            console.log(message + ' is not a blacklisted word.');
            return true;
        }

    };
}

const activeUserSlot = vino.act_getCurrentSlotNo();
const vinoClientUrl = window.location.origin;
var savedBarColor;
var scrollTimeout;
var miiverseRequest;
var stickCheck;
var inputCheck;
var timeInterval;
var pressedButton = null;
var typeOfPage;
var isMiiverseModalOpen = false;
var postTypeOfContent;
var tipsArray = [
    "When you are using a program, open the  HOME Menu and launch this app to quickly check and then return to your suspended program.",
    "Use the  stick to scroll the page, and use  to highlight some of the selectable options that you can pick pressing  over it.",
    "You can share and see comments on Miiverse about programs currently streaming by selecting a program and touching the Miiverse icon.",
    "Every time the app is restarted, the color of the top bar changes, and the tips shown in the Popular and My Favorites page too.",
    "You can report any issues you have with Nintendo TVii within the Manual in the Menu button, which is on the top right corner.",
    "Nintendo TVii loads movies, shows and live events no matter the rating, so enable Parental Controls if you need to hide programs shown.",
    "Did you know you can recommend programs to your friends using Miiverse as a message by selecting it on the Miiverse menu on a program?",
    "You can see programs your friends have favorited by touching the All Programs tab and filtering the programs as 'Favorited by Friends'.",
    "It is recommended to read the Manual in the Menu button on the top right corner to learn what Nintendo TVii offers and how to use it.",
];
var barColors = ['blue', 'red', 'green', 'purple', 'pink'];

function lerp(a, b, alpha) {
    return a + alpha * (b - a)
}

//initialize TVii object
var tvii = {
    pc: {
        getCurrentUserStatus: function () {
            var statusObject = {
                is_enabled: vino.pc_isControlled(),
                browser: vino.pc_isControlledBrowser(),
                miiverse_level: vino.pc_getMiiverseControlLevel(),
                friend: vino.pc_isControlledFriendReg(),
                network: vino.pc_isControlledNetworkCommunication(),
                allowed_tv_rating: vino.ls_getItem("pc_tv_rating"),
                allowed_movie_rating: vino.ls_getItem("pc_movie_rating")
            }
            return statusObject;
        },
        setAllowedRatings: function (tv_rating, movie_rating) {
            vino.ls_setItem("pc_tv_rating", tv_rating);
            vino.ls_setItem("pc_movie_rating", movie_rating);
        }
    },
    friend: {
        getList: function () {
            if (vino.fp_getFriendList()) {
                var friendPIDs = vino.fp_getFriendList();
                var friendPIDArray = friendPIDs.split(', ');
                var friends = [];

                for (var i = 0; i < friendPIDArray.length; i++) {
                    var pid = friendPIDArray[i];
                    var friendObject = {
                        pid: pid,
                        name: vino.fp_getFriendName(pid),
                        mii1: app.friend.getMiiExIcon(pid, 1),
                        mii2: app.friend.getMiiExIcon(pid, 2),
                        mii3: app.friend.getMiiExIcon(pid, 3),
                        mii4: app.friend.getMiiExIcon(pid, 4),
                        mii5: app.friend.getMiiExIcon(pid, 5),
                        mii6: app.friend.getMiiExIcon(pid, 6)
                    };
                    friends.push(friendObject);
                }

                return friends;
            } else {
                return false;
            }
        },
        getMiiExIcon: function (pid, f) {
            switch (f) {
                case 1:
                    return "https://mii.olv.pretendo.cc/mii/" + pid + "/normal_face.png";
                case 2:
                    return "https://mii.olv.pretendo.cc/mii/" + pid + "/smile_open_mouth.png";
                case 3:
                    return "https://mii.olv.pretendo.cc/mii/" + pid + "/wink_left.png";
                case 4:
                    return "https://mii.olv.pretendo.cc/mii/" + pid + "/surprise_open_mouth.png";
                case 5:
                    return "https://mii.olv.pretendo.cc/mii/" + pid + "/frustrated.png";
                case 6:
                    return "https://mii.olv.pretendo.cc/mii/" + pid + "/sorrow.png";
                default:
                    return "https://mii.olv.pretendo.cc/mii/" + pid + "/normal_face.png";
            }
        }
    },
    act: {
        getUsers: function () {
            var users = vino.act_getNum();
            var userArray = [];

            for (var i = 0; i < users; i++) {
                var user = [i];
                var userObject = {
                    pid: vino.act_getPid(user),
                    name: vino.act_getName(user),
                    age_division: vino.act_getAgeDivision(user),
                    mii: vino.act_getMiiData(user),
                    mii1: vino.act_getMiiImageEx(user, 1),
                    mii2: vino.act_getMiiImageEx(user, 2),
                    mii3: vino.act_getMiiImageEx(user, 3),
                    mii4: vino.act_getMiiImageEx(user, 4),
                    mii5: vino.act_getMiiImageEx(user, 5),
                    mii6: vino.act_getMiiImageEx(user, 6)
                };
                userArray.push(userObject);
            }

            return userArray;
        },
    },
    program: {
      openPage: function(program) {
        $.pjax({
            url: vinoClientUrl + '/program' + '?program=' + program.attr('data-program-id'),
            container: '.wrapper',
            timeout: 5000
        });
      },
      openActorPage: function(actor){
        $.pjax({
            url: vinoClientUrl + '/actor' + '?actor=' + actor.attr('data-actor-id'),
            container: '.wrapper',
            timeout: 5000
        });
      },
    },
    utils: {
        hover: function (toggle, el) {
            if (toggle) {
                $(el).addClass('hover');
            } else {
                $(el).removeClass('hover');
            }
        },
        prepareSound: function() {
            var els = $("[data-sound]");
            if (!els) return;
            els.on("click", playSound)
        
            function playSound(e) {
                vino.soundPlayVolume($(e.currentTarget).attr('data-sound'), 25);
            }
        },
        prepareTouchEffect: function() {
            var elt = $("a:not([no_touch]), input:not([no_touch]), button:not([no_touch]), select:not([no_touch])");
            if (!elt) return;
            elt.on("click", touchEffect)
            function touchEffect() {
                vino.lyt_startTouchEffect();
            }
        },
        prepareMouseEffect: function() {
            var elm = $("[navi_mouse]");
            if (!elm) return;
            elm.on("click", mouseEffect)
            function mouseEffect(e) {
                var mRect = this.getBoundingClientRect();
                vino.lyt_startTouchNodeEffect(mRect.left, mRect.top, mRect.width, mRect.height);
            }
        },
        updateDateTime: function() {
            var now = new Date();

            var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            var dayName = dayNames[now.getDay()];
            var day = now.getDate();
            var hours = now.getHours();
            var ampm = hours >= 12 ? 'pm' : 'am';
        
            hours = hours % 12;
            hours = hours ? hours : 12;
        
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
        
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
        
            $('.day-info .date-day-name').text(dayName);
            $('.day-info .date-day').text(day);
            $('.day-info .date-time').text(hours + ':' + minutes + ' ' + ampm);
        
            var dateClassSw = $('.day-info .date-day-name').text();
        
            switch (dateClassSw) {
                case 'Sun':
                    $('.day-info .date-day-name').addClass('sun');
                    break;
                case 'Mon':
                    $('.day-info .date-day-name').addClass('mon');
                    break;
                case 'Tue':
                    $('.day-info .date-day-name').addClass('tue');
                    break;
                case 'Wed':
                    $('.day-info .date-day-name').addClass('wed');
                    break;
                case 'Thu':
                    $('.day-info .date-day-name').addClass('thu');
                    break;
                case 'Fri':
                    $('.day-info .date-day-name').addClass('fri');
                    break;
                case 'Sat':
                    $('.day-info .date-day-name').addClass('sat');
                    break;
            }
        },
        prepare: function() {
            vino.lyt_setIsEnableClientLoadingIcon(false);
            vino.lyt_setIsEnableWhiteMask(true);
            vino.video_enableOnTV(true);
            vino.ir_enableCodeset(1);
            vino.loading_setIconRect(180, 160, 120, 120);
            if (!sessionStorage.getItem('vino_top_bar_color')) {
                var randomIndex = Math.floor(Math.random() * barColors.length);
                var topBarColor = barColors[randomIndex];
                sessionStorage.setItem('vino_top_bar_color', topBarColor);
            }
            savedBarColor = sessionStorage.getItem('vino_top_bar_color');
        
            if (vino.ls_getItem('is_returned_redirect_url') && vino.isReturnedFromOtherApplication()) {
                window.location.href = vino.ls_getItem('is_returned_redirect_url') + '&returned=true';
                vino.ls_removeItem('is_returned_redirect_url');
            }
        },
        checkPageType: function() {
            var hdrAttribute = $('header.top-bar').attr('data-page-type');

            switch (hdrAttribute) {
                case 'popular-page':
                    preparePopularPage();
                    break;
                case 'all-programs-page':
                    prepareAllPrograms();
                    break;
                case 'my-favorites-page':
                    prepareMyFavorites();
                    break;
                case 'menu-page':
                    prepareMenu();
                    break;
                case 'program-page':
                    prepareProgramPage();
                    break;
                case 'actor-page':
                    prepareActorPage();
                    break;
                case 'unlock-changer-page':
                    prepareChannelChangerUnlockPage();
                    break;
                default:
                    break;
            }
        },
        top: function() {
            $.pjax({
                url: '/',
                container: '.wrapper',
                timeout: 5000
            });
        },
        setLoadingScreen: function (logo) {
            vino.ls_setItem('vino_client_loading_title', logo);
        },
        lockUserOperation: function (lock) {
            $('body').css('pointer-events', lock ? 'none' : 'auto');
        }
    }
};

function preparePopularPage() {
    tvii.utils.prepareSound();
    tvii.utils.prepareTouchEffect();

    $('.top-bar').addClass(savedBarColor);
    var tipContentElement = $('.daily-tip .tip-content');
    var randomIndex = Math.floor(Math.random() * tipsArray.length);
    tipContentElement.text(tipsArray[randomIndex]);

    tvii.utils.updateDateTime();

    clearInterval(timeInterval)
    timeInterval = setInterval(tvii.utils.updateDateTime, 1000);

    function changePreviewImage(program) {
        vino.loading_setIconAppear(true);
        var prevImg = $('<img>');
        var programImage = program.attr('data-image');
        prevImg.attr('src', programImage);
        prevImg.on("load", function () {
            $('.program-preview .image').attr('src', programImage);
            vino.loading_setIconAppear(false);
            var streamingI = program.attr('data-streaming');
            var ThisShowName = program.attr('data-program-name');
            var ThisShowDescription = program.attr('data-program-description');

            $('.program-preview .show-title').text(ThisShowName);
            $('.program-preview .show-services').text(streamingI);
            $('.program-preview .show-description').text(ThisShowDescription);
            prevImg.off("load");
        });

        prevImg.on("error", function () {
            alert("There was an error loading the image.")
            vino.loading_setIconAppear(false);
            prevImg.off("error");
        });
    }

    var liveProgram = $(".live-program");

    liveProgram.on('click', function () {
        vino.lyt_startTouchEffect();
        if ($(this).hasClass('selected')) {
            vino.lyt_decideFixedFrame();
            vino.soundPlayVolume("SE_APPEAR_DETAIL", 25);
            tvii.program.openPage($(this));
        } else {
            vino.soundPlayVolume("SE_PROGRAM_SLIDE_SPEED", 25);
            changePreviewImage($(this));
            scrollToProgram($(this));
        }

        var allLivePrograms = $('.live-program');
        allLivePrograms.removeClass("selected")

        $(this).addClass('selected');
    });

    function snapToCenter() {
        var programHeight = $('.live-program').outerHeight();
        var scrollTop = $(window).scrollTop();
        var centerIndex = Math.round(scrollTop / programHeight);
        var targetScrollTop = centerIndex * programHeight;

        targetScrollTop = Math.min(targetScrollTop, $(document).height() - $(window).height());

        if (targetScrollTop !== scrollTop) {
            $('body, html').scrollTop(targetScrollTop);
        }

        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            vino.soundPlayVolume("SE_LIST_SCROLL_END", 20);
        }

        if ($(window).scrollTop() === 0) {
            vino.soundPlayVolume("SE_LIST_SCROLL_END", 20);
        }
    }

    function scrollToProgram(program) {
        console.log("scroll");
        if (program && program.offset().top !== undefined) {
            var windowHeight = $(window).height();
            var programTop = program.offset().top;

            // Calculate the target scroll position
            var targetScrollTop;
            if (programTop < windowHeight / 2) {
                // If the program is near the top of the screen, scroll to the top
                targetScrollTop = 0;
            } else if (programTop > $(document).height() - windowHeight / 2) {
                // If the program is near the bottom of the screen, scroll to the bottom
                targetScrollTop = $(document).height() - windowHeight;
            } else {
                // Scroll so that the program is centered vertically on the screen
                targetScrollTop = programTop - windowHeight / 2 + program.outerHeight() / 2;
            }

            // Scroll to the target position
            $('body, html').scrollTop(targetScrollTop);
        }
    }

    function handleScroll() {
        if (vino.navi_getRect() && wiiu.gamepad.tpTouch === 1) {
            vino.navi_reset();
        }
        vino.soundPlayVolume("SE_LIST_SCROLL", 15);

        handleScrollEnd();

        function handleScrollEnd() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function () {
                snapToCenter();
            }, 200);
        }
    }

    $(window).off('scroll');
    $(window).on('scroll', handleScroll);

    var firstChild = $('.scroll-programs > :nth-child(2)');
    var firstLoad = $('header.top-bar');

    vino.loading_setIconRect(180, 120, 100, 100);
    vino.lyt_drawFixedFrame(455, 209, 383, 86);

    if (firstLoad.attr('data-page-first-load') == "0") {
        vino.loading_setIconAppear(true);

        var bootPrevImg = $('<img>');
        bootPrevImg.attr("src", firstChild.attr('data-image'));
        $('.program-preview .image').attr("src", bootPrevImg.attr("src"));

        firstChild.addClass('selected');
        firstLoad.attr('data-page-first-load', '1')

        var bootAir = firstChild.attr('data-air-date');
        var bootStreaming = firstChild.attr('data-streaming');
        var bootThisShowName = firstChild.attr('data-program-name');
        var bootThisShowDescription = firstChild.attr('data-program-description');

        $('.program-preview .show-services').text(bootStreaming);
        $('.program-preview .show-title').text(bootThisShowName);
        $('.program-preview .show-description').text(bootThisShowDescription);

        bootPrevImg.on("load", function () {
            vino.loading_setIconAppear(false);
            bootPrevImg.off("load")
        });

        bootPrevImg.on("error", function () {
            alert("There was an error loading the image\nNintendo TVii will close now.")
            vino.loading_setIconAppear(false);
            bootPrevImg.off("error")
        });
    }

    clearInterval(stickCheck)
    clearInterval(inputCheck)
    stickCheck = setInterval(inputStick, 5);
    inputCheck = setInterval(inputButton, 0);

    function inputStick() {
        wiiu.gamepad.update();
        if (wiiu.gamepad.isDataValid === 0) return;

        switch (wiiu.gamepad.hold) {
            case 1073741824:
                document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
                break;
            case 536870912:
                document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
                break;
            case 268435456:
                document.body.scrollTop += lerp(-15, -15, (wiiu.gamepad.lStickY));
                break;
            case 134217728:
                document.body.scrollTop += lerp(15, 15, (wiiu.gamepad.lStickY));
                break;
        }
    }

    function inputButton() {
        wiiu.gamepad.update();

        if (wiiu.gamepad.isDataValid === 0) {
            pressedButton = null;
            return;
        }

        switch (wiiu.gamepad.hold) {
            case 4096:
                if (pressedButton !== 4096) {
                    pressedButton = 4096;
                    vino.soundPlayVolume("SE_POPUP", 25);
                    openMenu();
                }
                break;
            default:
                pressedButton = null;
                break;
        }
    }

}

// All programs code
function prepareAllPrograms() {
};

// Favorites page code
function prepareMyFavorites() {
};

// Menu code
function prepareMenu() {
    sessionStorage.setItem("current_page", "menu");
    vino.navi_setBaseVisibilityOnKeyEvent(true);
    prepareSound();
    prepareTouchEffect();
    prepareMouseEffect();

    console.log('Prepared Menu');

    var stickCheck = setInterval(inputStick, 5);
    var inputCheck = setInterval(inputButton, 100);

    function inputStick() {
        wiiu.gamepad.update();
        if (wiiu.gamepad.isDataValid === 0) return;

        switch (wiiu.gamepad.hold) {
            case 1073741824:
                vino.navi_reset();
                document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
                break;
            case 536870912:
                vino.navi_reset();
                document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
                break;
            case 268435456:
                vino.navi_reset();
                document.body.scrollTop += lerp(-15, -15, (wiiu.gamepad.lStickY));
                break;
            case 134217728:
                vino.navi_reset();
                document.body.scrollTop += lerp(15, 15, (wiiu.gamepad.lStickY));
                break;
        }
    }

    function inputButton() {
        wiiu.gamepad.update();
        if (wiiu.gamepad.isDataValid === 0) {
            pressedButton = null;
            return;
        }

        switch (wiiu.gamepad.hold) {
            case 16384:
                if (pressedButton !== 16384) {
                    pressedButton = 16384;
                    vino.soundPlayVolume("SE_CLOSE", 25);
                    app.utils.back();
                }
                break;
            default:
                pressedButton = null;
                break;
        }
    }

};

function prepareProgramPage() {
    tvii.utils.prepareSound();
    tvii.utils.prepareTouchEffect();
    $('.top-bar').addClass(savedBarColor);

    tvii.utils.updateDateTime();

    clearInterval(timeInterval)
    timeInterval = setInterval(tvii.utils.updateDateTime, 1000);

    function closeTrailer() {
        $(".program-trailer")[0].pause();
        $(".trailer-div").removeClass("show");
        $(".menu-buttons").removeClass("none");
        vino.navi_setMoveMethod(1);
        vino.requestGarbageCollect();
    };

    clearInterval(stickCheck)
    clearInterval(inputCheck)
    stickCheck = setInterval(inputStick, 5);
    inputCheck = setInterval(inputButton, 0);

    function inputStick() {
        wiiu.gamepad.update();
        if (wiiu.gamepad.isDataValid === 0) return;

        switch (wiiu.gamepad.hold) {
            case 1073741824:
                vino.navi_reset();
                document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
                break;
            case 536870912:
                vino.navi_reset();
                document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
                break;
            case 268435456:
                vino.navi_reset();
                document.body.scrollTop += lerp(-15, -15, (wiiu.gamepad.lStickY));
                break;
            case 134217728:
                vino.navi_reset();
                document.body.scrollTop += lerp(15, 15, (wiiu.gamepad.lStickY));
                break;
        }
    }

    function inputButton() {
        wiiu.gamepad.update();
        if (wiiu.gamepad.isDataValid === 0) {
            pressedButton = null;
            return;
        }

        switch (wiiu.gamepad.hold) {
            case 32:
                if (pressedButton !== 32) {
                    pressedButton = 32;
                    vino.soundPlayVolume("SE_MOVEPAGE_PLAY", 25);
                    scrollLeftPPage();
                }
                break;
            case 16:
                if (pressedButton !== 16) {
                    pressedButton = 16;
                    vino.soundPlayVolume("SE_MOVEPAGE_PLAY", 25);
                    scrollRightPPage();
                }
                break;
            case 128:
                if (pressedButton !== 128) {
                    pressedButton = 128;
                    vino.soundPlayVolume("SE_MOVEPAGE_PLAY", 25);
                    scrollLeftPPage();
                }
                break;
            case 64:
                if (pressedButton !== 64) {
                    pressedButton = 64;
                    vino.soundPlayVolume("SE_MOVEPAGE_PLAY", 25);
                    scrollRightPPage();
                }
                break;
            case 16384:
                if (pressedButton !== 16384) {
                    pressedButton = 16384;
                    vino.soundPlayVolume("SE_RETURN", 25);
                    history.back();
                }
                break;
            case 4:
                if (pressedButton !== 4) {
                    pressedButton = 4;
                    vino.soundPlayVolume("SE_TOP", 25);
                    tvii.utils.top();
                }
                break;
            default:
                pressedButton = null;
                break;
        }
    }

    $(window).off('scroll');

    $(window).on('scroll', function () {
        updateButtonVisibility();
        if (vino.navi_getRect() && wiiu.gamepad.tpTouch === 1) {
            vino.navi_reset();
        }
    });
};

function updateButtonVisibility() {
    var scrollThreshold = 500;

    if (window.scrollX > scrollThreshold) {
        document.querySelector('.before_page_button').style.display = 'block';
        document.querySelector('.next_page_button').style.display = 'none';
    } else {
        document.querySelector('.before_page_button').style.display = 'none';
        document.querySelector('.next_page_button').style.display = 'block';
    }
}

function scrollLeftPPage() {
    document.querySelector('.before_page_button').style.display = 'none';
    document.querySelector('.next_page_button').style.display = 'block';
    window.scrollBy(-900, 0);
    vino.navi_reset();
}

function scrollRightPPage() {
    document.querySelector('.before_page_button').style.display = 'block';
    document.querySelector('.next_page_button').style.display = 'none';
    window.scrollBy(900, 0);
    vino.navi_reset();
}

function toggleFavorite() {
    if (document.querySelector('.program-content')) {
        var programToFavorite = document.querySelector('.program-content');
        if (programToFavorite.getAttribute('data-is-favorited') === 'true') {
            document.querySelector('.favoritebtn').classList.remove('checked');
            vino.soundPlayVolume('SE_NO_FAVORITE_TOUCH_OFF', 25);
            vino.ls_removeItem(programToFavorite.getAttribute('data-program-id'))
            programToFavorite.setAttribute('data-is-favorited', 'false');
        } else
            if (programToFavorite.getAttribute('data-is-favorited') === 'false') {
                document.querySelector('.favoritebtn').classList.add('checked');
                vino.soundPlayVolume('SE_FAVORITE_TOUCH_OFF', 25);
                vino.ls_setItem(programToFavorite.getAttribute('data-program-id'), '1')
                programToFavorite.setAttribute('data-is-favorited', 'true');

                if (!vino.ls_getItem("favoriteMessage")) {
                    alert('You have favorited this program\nIt will appear on your "My Favorites" tab.');
                    vino.ls_setItem("favoriteMessage", "true");
                }
            }
    } else if (document.querySelector('.actor-content')) {
        var programToFavorite = document.querySelector('.actor-content');
        if (programToFavorite.getAttribute('data-is-favorited') === 'true') {
            document.querySelector('.favoritebtn').classList.remove('checked');
            vino.soundPlayVolume('SE_NO_FAVORITE_TOUCH_OFF', 25);
            vino.ls_removeItem(programToFavorite.getAttribute('data-actor-id'))
            programToFavorite.setAttribute('data-is-favorited', 'false');
        } else
            if (programToFavorite.getAttribute('data-is-favorited') === 'false') {
                document.querySelector('.favoritebtn').classList.add('checked');
                vino.soundPlayVolume('SE_FAVORITE_TOUCH_OFF', 25);
                vino.ls_setItem(programToFavorite.getAttribute('data-actor-id'), '1')
                programToFavorite.setAttribute('data-is-favorited', 'true');

                if (!vino.ls_getItem("favoriteMessage")) {
                    alert('You have favorited this program\nIt will appear on your "My Favorites" tab.');
                    vino.ls_setItem("favoriteMessage", "true");
                }
            }
    }
}

function prepareMiiverseModal() {
    if ($('.program-content')) {
        typeOfPage = $('.program-content');
    } else if ($('.actor-content')) {
        typeOfPage = $('.actor-content');
    } else {
        typeOfPage = null;
    }

    function loadMiiversePosts() {
        miiverseRequest = new XMLHttpRequest();
        miiverseRequest.open("GET", vinoClientUrl + "/v1/miiverse_api?language_id=254&limit=35&search_key=" + typeOfPage.attr("data-miiverse-search-key") + "&distinct_pid=1&with_mii=1", true);
        /*miiverseRequest.open("GET", vino.olv_getHostName() + "/v1/communities/0/posts?language_id=254&limit=65&search_key=" +  typeOfPage.getAttribute("data-miiverse-search-key") + "&distinct_pid=1&with_mii=1", true);*/
        miiverseRequest.onreadystatechange = function () {
            if (miiverseRequest.readyState == 4 && miiverseRequest.status == 200) {
                if (!vino.ls_getItem("miiverseWarning")) {
                    alert('Miiverse is being used when you see\nthe green icon at the bottom right corner.\nPlease wait at least a moment before\nattempting to interact with the page,\nFor more information, touch the Menu\nbutton and read the electronic manual.');
                    vino.ls_setItem("miiverseWarning", "true");
                }

                $('.posts-top-bar').text('Miiverse posts for "' + typeOfPage.attr('data-miiverse-topic-tag') + '"');

                var miiResponse = miiverseRequest.responseXML;
                var postsContainer = miiResponse.getElementsByTagName('posts')[0];
                var posts = postsContainer.getElementsByTagName('post');

                function formatPostDate(dateString) {
                    var parts = dateString.match(/(\d+)/g);
                    var postDate = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);

                    var currentDate = new Date();
                    var timeDifference = currentDate - postDate;
                    var seconds = Math.floor(timeDifference / 1000);
                    var minutes = Math.floor(seconds / 60);
                    var hours = Math.floor(minutes / 60);

                    if (seconds < 60) {
                        return "Less than a minute ago";
                    } else if (minutes < 60) {
                        return minutes + " minute" + (minutes !== 1 ? "s" : "") + " ago";
                    } else if (hours < 24) {
                        return hours + " hour" + (hours !== 1 ? "s" : "") + " ago";
                    } else {
                        var ampm = postDate.getHours() >= 12 ? 'PM' : 'AM';
                        var hours12 = postDate.getHours() % 12 || 12;
                        var formattedDate = postDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) + " " +
                            hours12 + ':' + ('0' + postDate.getMinutes()).slice(-2) + ' ' + ampm;
                        return formattedDate;
                    }
                }

                for (var i = 0; i < posts.length; i++) {
                    var post = posts[i];

                    var postBodyElement = post.getElementsByTagName('body')[0];
                    var postPaintingElement = post.getElementsByTagName('painting')[0];

                    var postContent;
                    var postType;

                    if (postPaintingElement) {
                        postContent = postPaintingElement.getElementsByTagName('url')[0].textContent;
                        postType = 'painting';
                    } else {
                        postContent = postBodyElement.textContent;
                        postType = 'body';
                    }

                    var postMiiName = post.getElementsByTagName('screen_name')[0].textContent;
                    var postMiiImage = post.getElementsByTagName('mii_face_url')[0].textContent;
                    var postDate = post.getElementsByTagName('created_at')[0].textContent;
                    var postId = post.getElementsByTagName('id')[0].textContent;
                    var postIsSpoiler = post.getElementsByTagName('is_spoiler')[0].textContent;
                    var postEmpathyCount = post.getElementsByTagName('empathy_count')[0].textContent;
                    var postReplyCount = post.getElementsByTagName('reply_count')[0].textContent;
                    var postPid = post.getElementsByTagName('pid')[0].textContent;
                    /* 
                    var postHasYeahed = post.getElementsByTagName('empathy_added')[0].textContent;
                    }*/
                    var postDiv = $("<div>");
                    postDiv.addClass('post');
                    postDiv.attr('data-miiverse-post-id', postId);
                    postDiv.attr('data-miiverse-is-spoiler', postIsSpoiler);
                    postDiv.attr('data-miiverse-user-pid', postPid);

                    var userMii = $("<img>");
                    userMii.addClass('user-mii');
                    userMii.on("click", function () {
                        vino.soundPlayVolume('SE_WORD_MII', 25);
                    });
                    userMii.attr("src", postMiiImage);

                    var userMiiName = $("<span>");
                    userMiiName.addClass('username');
                    userMiiName.text(postMiiName);

                    var postTime = $("<span>");
                    postTime.addClass('post-date');
                    postTime.text(formatPostDate(postDate));

                    var postElement;
                    if (postType === 'painting') {
                        postElement = $("<img>");
                        postElement.addClass('painting');
                        postElement.attr("src", postContent);
                    } else if (postType === 'body') {
                        postElement = $("<p>");
                        postElement.addClass('body');
                        postElement.text(postContent);
                    }

                    var postMetaDiv = $("<div>");
                    postMetaDiv.addClass('post-meta');

                    var postDowReplyCount = $("<span>");
                    postDowReplyCount.addClass('reply-count');
                    postDowReplyCount.text(postReplyCount);

                    var postDowYeahCount = $("<span>");
                    postDowYeahCount.addClass('yeah-count');
                    postDowYeahCount.text(postEmpathyCount);

                    var postDowJumpPost = $("<button>");
                    postDowJumpPost.addClass('jump-miiverse');
                    postDowJumpPost.attr('navi_target', '');
                    postDowJumpPost.attr('navi_no_reset', '');
                    postDowJumpPost.on("click", function () {
                        if (!vino.navi_getRect()) {
                            vino.lyt_startTouchEffect();
                        }
                        vino.soundPlayVolume('SE_WAVE_MII_FACE', 25);
                        if (vino.runTwoButtonDialog("Do you want to close Nintendo TVii and\nsee this post on Miiverse?", "Cancel", "Yes") == 0) {
                            vino.jumpToMiiversePostId($(this).parent().parent().attr('data-miiverse-post-id'), false);
                        }
                    });

                    var postEmpathyAdder = $("<button>");
                    postEmpathyAdder.addClass('yeah-button');
                    postEmpathyAdder.attr('navi_target', '');
                    postEmpathyAdder.attr('navi_mouse', '');
                    postEmpathyAdder.attr('navi_no_reset', '');
                    postEmpathyAdder.text('Yeah!');
                    postEmpathyAdder.attr('navi_target', '');
                    postEmpathyAdder.on("click", function () {
                        vino.lyt_startTouchEffect();
                        addEmpathy(this);
                    });
                    if (postPid == vino.act_getPid(activeUserSlot)) {
                        postEmpathyAdder.attr('disabled', '');
                        postEmpathyAdder.removeAttr('navi_target', '');
                    }
                    /* when pretendo implements empathy_added or a way to tell if the user has yeahed a post
                    if (postHasYeahed === '1') {
                        postEmpathyAdder.addClass('added');
                    }*/
                    postDiv.append(userMii);
                    postDiv.append(userMiiName);
                    postDiv.append(postTime);
                    postDiv.append(postElement);
                    postMetaDiv.append(postDowReplyCount);
                    postMetaDiv.append(postDowYeahCount);
                    postMetaDiv.append(postDowJumpPost);
                    postMetaDiv.append(postEmpathyAdder);
                    postDiv.append(postMetaDiv)

                    $('.post-list').append(postDiv);
                }

                var goToMiiverse = $("<button>");
                goToMiiverse.addClass('jump-miiverse-button');
                goToMiiverse.attr('navi_target', '');
                goToMiiverse.text('See more on Miiverse');
                goToMiiverse.on("click", function () {
                    vino.lyt_startTouchEffect();
                    vino.soundPlayVolume('SE_WAVE_OK', 25);
                    vino.jumpToMiiverse(false);
                });

                var inputMiiForm = $("<form>");
                inputMiiForm.addClass('post-form');
                inputMiiForm.attr('action', 'javascript:void(0);');

                var miiUser = $("<img>");
                miiUser.addClass('input-mii');
                miiUser.attr('navi_target', '');
                miiUser.attr('navi_no_reset', '');
                miiUser.on("click", function () {
                    vino.lyt_startTouchEffect();
                    vino.soundPlayVolume('SE_WAVE_TOGGLE_CHECK', 25);
                    $('.post-list .feeling-selector-toggle').toggleClass('show');
                });
                miiUser.attr("src", vino.act_getMiiImageEx(activeUserSlot, 1));

                var feelingToggleDiv = $("<ul>");
                feelingToggleDiv.addClass('feeling-selector-toggle');

                var feelingLi1 = $("<li>");
                var feelingLi2 = $("<li>");
                var feelingLi3 = $("<li>");
                var feelingLi4 = $("<li>");
                var feelingLi5 = $("<li>");
                var feelingLi6 = $("<li>");

                var feelingInput1 = $("<input>");
                var feelingInput2 = $("<input>");
                var feelingInput3 = $("<input>");
                var feelingInput4 = $("<input>");
                var feelingInput5 = $("<input>");
                var feelingInput6 = $("<input>");

                feelingLi1.addClass('feeling');
                feelingLi1.addClass('normal');
                feelingLi2.addClass('feeling');
                feelingLi2.addClass('happy');
                feelingLi3.addClass('feeling');
                feelingLi3.addClass('like');
                feelingLi4.addClass('feeling');
                feelingLi4.addClass('surprised');
                feelingLi5.addClass('feeling');
                feelingLi5.addClass('disgusted');
                feelingLi6.addClass('feeling');
                feelingLi6.addClass('sad');

                feelingLi1.attr('onclick', 'vino.lyt_startTouchEffect(), vino.soundPlayVolume("SE_WAVE_OK_SUB", 25)');
                feelingLi2.attr('onclick', 'vino.lyt_startTouchEffect(), vino.soundPlayVolume("SE_WAVE_OK_SUB", 25)');
                feelingLi3.attr('onclick', 'vino.lyt_startTouchEffect(), vino.soundPlayVolume("SE_WAVE_OK_SUB", 25)');
                feelingLi4.attr('onclick', 'vino.lyt_startTouchEffect(), vino.soundPlayVolume("SE_WAVE_OK_SUB", 25)');
                feelingLi5.attr('onclick', 'vino.lyt_startTouchEffect(), vino.soundPlayVolume("SE_WAVE_OK_SUB", 25)');
                feelingLi6.attr('onclick', 'vino.lyt_startTouchEffect(), vino.soundPlayVolume("SE_WAVE_OK_SUB", 25)');

                feelingInput1.attr('type', 'radio');
                feelingInput2.attr('type', 'radio');
                feelingInput3.attr('type', 'radio');
                feelingInput4.attr('type', 'radio');
                feelingInput5.attr('type', 'radio');
                feelingInput6.attr('type', 'radio');

                feelingInput1.attr('name', 'feeling_id_val');
                feelingInput2.attr('name', 'feeling_id_val');
                feelingInput3.attr('name', 'feeling_id_val');
                feelingInput4.attr('name', 'feeling_id_val');
                feelingInput5.attr('name', 'feeling_id_val');
                feelingInput6.attr('name', 'feeling_id_val');

                feelingInput1.attr('checked', '');
                feelingLi1.addClass('selected');

                feelingInput1.val(0);
                feelingInput2.val(1);
                feelingInput3.val(2);
                feelingInput4.val(3);
                feelingInput5.val(4);
                feelingInput6.val(5);

                feelingLi1.append(feelingInput1);
                feelingLi2.append(feelingInput2);
                feelingLi3.append(feelingInput3);
                feelingLi4.append(feelingInput4);
                feelingLi5.append(feelingInput5);
                feelingLi6.append(feelingInput6);

                feelingToggleDiv.append(feelingLi1);
                feelingToggleDiv.append(feelingLi2);
                feelingToggleDiv.append(feelingLi3);
                feelingToggleDiv.append(feelingLi4);
                feelingToggleDiv.append(feelingLi5);
                feelingToggleDiv.append(feelingLi6);

                var inputSpoilerBox = $("<input>");
                inputSpoilerBox.attr("type", "checkbox")
                inputSpoilerBox.addClass('input-checkbox');
                inputSpoilerBox.attr('navi_no_reset', '');
                inputSpoilerBox.attr('navi_target', '');
                inputSpoilerBox.text('Spoilers');
                inputSpoilerBox.val(false);
                inputSpoilerBox.on("click", function () {
                    if (feelingToggleDiv.hasClass('show')) {
                        feelingToggleDiv.removeClass('show');
                        vino.soundPlayVolume('SE_WAVE_BALLOON_CLOSE_TOUCH_OFF', 25);
                    }
                    vino.lyt_startTouchEffect();
                    if (inputSpoilerBox.prop('checked')) {
                        vino.soundPlayVolume('SE_WAVE_CHECKBOX_CHECK', 25);
                    } else {
                        vino.soundPlayVolume('SE_WAVE_CHECKBOX_UNCHECK', 25);
                    }
                });

                $(inputSpoilerBox).on('change', function (event) {
                    inputSpoilerBox.val(this.checked.toString());
                    isSpoilerChecked = $(this).prop('checked');
                });

                var inputMemoButton = $("<button>");
                inputMemoButton.addClass('input-memo');
                inputMemoButton.attr('navi_no_reset', '');
                inputMemoButton.attr('navi_target', '');
                var memoCheckInterval;

                inputMemoButton.on("click", function () {
                    vino.lyt_startTouchEffect();
                    vino.soundPlayVolume('SE_POST_TOUCH_OFF', 25);
                    vino.memo_open(false);

                    // Check if interval is already set
                    if (!memoCheckInterval) {
                        memoCheckInterval = setInterval(function () {
                            if (vino.memo_isFinish()) {
                                if (vino.memo_getImageTgaRaw()) {
                                    clearInterval(memoCheckInterval);
                                    memoCheckInterval = null; // Reset the variable
                                    postTypeOfContent = 'memo';
                                    prepareConfirmPostModal();
                                    vino.soundPlayVolume('SE_WAVE_BALLOON_OPEN_TOUCH_OFF', 25);
                                } else {
                                    console.log("Memo canceled");
                                }
                            }
                        }, 50);
                    }
                });


                var checkResultInterval;
                var feelingValue = 0;
                var isSpoilerChecked = inputSpoilerBox.val().toLowerCase() === 'true';
                var inputPostMiiverse = $("<input>");
                inputPostMiiverse.attr("type", "text")
                inputPostMiiverse.attr('minlength', '1');
                inputPostMiiverse.attr('maxlength', '100');
                inputPostMiiverse.attr("placeholder", "Touch here to post to Miiverse...");
                inputPostMiiverse.addClass('input-post');
                inputPostMiiverse.on("click", function () {
                    if (feelingToggleDiv.hasClass('show')) {
                        feelingToggleDiv.removeClass('show');
                        vino.soundPlayVolume('SE_WAVE_BALLOON_CLOSE_TOUCH_OFF', 25);
                    }
                    vino.lyt_startTouchEffect();
                    vino.soundPlayVolume("SE_POST_TOUCH_OFF", 25);
                });
                inputPostMiiverse.on('change', function (event) {
                    event.preventDefault();
                    postTypeOfContent = 'text';
                    vino.soundPlayVolume('SE_WAVE_BALLOON_OPEN_TOUCH_OFF', 25);
                    prepareConfirmPostModal();
                });

                function prepareConfirmPostModal() {
                    switch (feelingValue) {
                        case 0:
                            $('.post-confirm-modal .mii-img').attr("src", vino.act_getMiiImageEx(activeUserSlot, 1));
                            break;
                        case 1:
                            $('.post-confirm-modal .mii-img').attr("src", vino.act_getMiiImageEx(activeUserSlot, 2));
                            break;
                        case 2:
                            $('.post-confirm-modal .mii-img').attr("src", vino.act_getMiiImageEx(activeUserSlot, 3));
                            break;
                        case 3:
                            $('.post-confirm-modal .mii-img').attr("src", vino.act_getMiiImageEx(activeUserSlot, 4));
                            break;
                        case 4:
                            $('.post-confirm-modal .mii-img').attr("src", vino.act_getMiiImageEx(activeUserSlot, 5));
                            break;
                        case 5:
                            $('.post-confirm-modal .mii-img').attr("src", vino.act_getMiiImageEx(activeUserSlot, 6));
                            break;
                    }

                    if (postTypeOfContent === 'text') {
                        $('.post-confirm-modal .user-text').text(inputPostMiiverse.val());
                        $('.post-confirm-modal .user-text').removeClass('none');
                    } else if (postTypeOfContent === 'memo') {
                        $('.post-confirm-modal .user-memo .memo').attr("src", vino.memo_getImagePng());
                        $('.post-confirm-modal .user-memo').removeClass('none');
                    }

                    if (isSpoilerChecked) {
                        $('.post-confirm-modal .spoilers-status').text('Spoilers: Yes');
                    } else {
                        $('.post-confirm-modal .spoilers-status').text('Spoilers: No');
                    }
                    $('.post-confirm-modal').addClass('show');
                }

                $('.post-confirm-modal .cancel-post').on("click", function () {
                    vino.soundPlayVolume('SE_WAVE_CANCEL_TOUCH_OFF', 25);
                    $('.post-confirm-modal .user-text').addClass('none');
                    $('.post-confirm-modal .user-memo').addClass('none');
                    $('.post-confirm-modal').removeClass('show');
                });

                var postRequest;
                $('.post-confirm-modal .finish-post').on("click", function () {
                    vino.soundPlayVolume('SE_POST_TOUCH_OFF', 25);
                    $('.post-confirm-modal .cancel-post').prop('disabled', true);
                    $('.post-confirm-modal .finish-post').prop('disabled', true);
                    $('.miiverse-posts .loading_miiverse').addClass('show');

                    if (postTypeOfContent === 'text') {
                        postRequest = new XMLHttpRequest();
                        postRequest.open("POST", vinoClientUrl + "/v1/miiverse_api")
                        var postForm = new FormData();
                        postForm.append("body", inputPostMiiverse.val())
                        postForm.append("topic_tag", typeOfPage.attr('data-miiverse-topic-tag'))
                        postForm.append("is_spoiler", isSpoilerChecked ? "1" : "0")
                        postForm.append("feeling_id", feelingValue)
                        postForm.append("is_autopost", "0")
                        postForm.append("language_id", "254")
                        postForm.append("is_app_jumpable", "0")
                        postForm.append("community_id", "0")
                        postForm.append("search_key", typeOfPage.attr('data-miiverse-search-key'))
                    } else if (postTypeOfContent === 'memo') {
                        postRequest = new XMLHttpRequest();
                        postRequest.open("POST", vinoClientUrl + "/v1/miiverse_api")
                        var postForm = new FormData();
                        postForm.append("painting", vino.memo_getImageTgaCompressed())
                        postForm.append("topic_tag", typeOfPage.attr('data-miiverse-topic-tag'))
                        postForm.append("is_spoiler", isSpoilerChecked ? "1" : "0")
                        postForm.append("feeling_id", feelingValue)
                        postForm.append("is_autopost", "0")
                        postForm.append("language_id", "254")
                        postForm.append("is_app_jumpable", "0")
                        postForm.append("community_id", "0")
                        postForm.append("search_key", typeOfPage.attr('data-miiverse-search-key'))
                    }

                    postRequest.setRequestHeader('X-Nintendo-Olv-User-Agent', vino.olv_getUserAgent());
                    postRequest.setRequestHeader('X-Nintendo-Olv-Url', vino.olv_getHostName());
                    postRequest.setRequestHeader('X-Nintendo-ParamPack', vino.olv_getParameterPack());
                    postRequest.setRequestHeader('X-Nintendo-ServiceToken', vino.olv_getServiceToken());
                    postRequest.send(postForm)
                    postRequest.onreadystatechange = function () {
                        if (postRequest.readyState === 4) {
                            if (postRequest.status === 200) {
                                $('.miiverse-posts .loading_miiverse').removeClass('show');
                                $('.post-confirm-modal .cancel-post').prop('disabled', false);
                                $('.post-confirm-modal .finish-post').prop('disabled', false);
                                vino.soundPlayVolume('SE_WAVE_BALLOON_CLOSE_TOUCH_OFF', 25);
                                $('.post-confirm-modal .user-text').addClass('none');
                                $('.post-confirm-modal .user-memo').addClass('none');
                                $('.post-confirm-modal').removeClass('show');
                                alert('The content you entered\nwas sent successfully');
                                var ownPostDiv = $("<div>");
                                ownPostDiv.addClass('post');

                                var ownPostMii = $("<img>");
                                ownPostMii.addClass('user-mii');
                                ownPostMii.on("click", function () {
                                    vino.soundPlayVolume('SE_WORD_MII', 25);
                                });
                                switch (feelingValue) {
                                    case 0:
                                        ownPostMii.attr("src", vino.act_getMiiImageEx(activeUserSlot, 1));
                                        break;
                                    case 1:
                                        ownPostMii.attr("src", vino.act_getMiiImageEx(activeUserSlot, 2));
                                        break;
                                    case 2:
                                        ownPostMii.attr("src", vino.act_getMiiImageEx(activeUserSlot, 3));
                                        break;
                                    case 3:
                                        ownPostMii.attr("src", vino.act_getMiiImageEx(activeUserSlot, 4));
                                        break;
                                    case 4:
                                        ownPostMii.attr("src", vino.act_getMiiImageEx(activeUserSlot, 5));
                                        break;
                                    case 5:
                                        ownPostMii.attr("src", vino.act_getMiiImageEx(activeUserSlot, 6));
                                        break;
                                }

                                var ownUserMiiName = $("<span>");
                                ownUserMiiName.addClass('username');
                                ownUserMiiName.text(vino.act_getName(activeUserSlot));

                                var ownPostTime = $("<span>");
                                ownPostTime.addClass('post-date');
                                ownPostTime.text(ownPostGenDate());

                                function ownPostGenDate() {
                                    var currentDate = new Date();
                                    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Months are zero-based
                                    var day = ('0' + currentDate.getDate()).slice(-2);
                                    var year = currentDate.getFullYear().toString().slice(-2);
                                    var hours = currentDate.getHours() % 12;
                                    hours = hours === 0 ? 12 : hours;
                                    var hoursString = hours === 12 ? '12' : (hours < 10 ? hours.toString().charAt(0) : hours.toString());
                                    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
                                    var ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
                                    var formattedDate = month + '/' + day + '/' + year + ' ' + hoursString + ':' + minutes + ' ' + ampm;
                                    return formattedDate;
                                }

                                var ownPostElement;
                                if (postTypeOfContent === 'text') {
                                    ownPostElement = $("<p>");
                                    ownPostElement.addClass('body');
                                    ownPostElement.text(inputPostMiiverse.val());
                                } else if (postTypeOfContent === 'memo') {
                                    ownPostElement = $("<img>");
                                    ownPostElement.addClass('painting');
                                    if (vino.memo_getImagePng() === '') {
                                        ownPostElement.attr("src", 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/5N9/LYAAAAASUVORK5CYII=');
                                    } else {
                                        ownPostElement.attr("src", vino.memo_getImagePng());
                                    }
                                }


                                var ownPostMetaDiv = $("<div>");
                                ownPostMetaDiv.addClass("post-meta")

                                var ownPostDowReplyCount = $("<span>");
                                ownPostDowReplyCount.addClass('reply-count');
                                ownPostDowReplyCount.text('0');

                                var ownPostDowYeahCount = $("<span>");
                                ownPostDowYeahCount.addClass('yeah-count');
                                ownPostDowYeahCount.text('0');

                                var ownPostEmpathyAdder = $("<button>");
                                ownPostEmpathyAdder.addClass('yeah-button');
                                ownPostEmpathyAdder.attr('disabled', '');
                                ownPostEmpathyAdder.attr('navi_mouse', '');
                                ownPostEmpathyAdder.text('Yeah!');
                                ownPostEmpathyAdder.on("click", function () { addEmpathy(this); });

                                ownPostDiv.append(ownPostMii);
                                ownPostDiv.append(ownUserMiiName);
                                ownPostDiv.append(ownPostTime);
                                ownPostDiv.append(ownPostElement);
                                ownPostMetaDiv.append(ownPostDowReplyCount);
                                ownPostMetaDiv.append(ownPostDowYeahCount);
                                ownPostMetaDiv.append(ownPostEmpathyAdder);
                                ownPostDiv.append(ownPostMetaDiv);

                                var container = $('.post-list');
                                var firstChild = container.children().first();

                                if (firstChild.length > 0) {
                                    container.prepend(ownPostDiv);
                                } else {
                                    container.append(ownPostDiv);
                                }

                                if (postTypeOfContent === 'memo') {
                                    vino.memo_reset();
                                } else if (postTypeOfContent === 'text') {
                                    inputPostMiiverse.val("");
                                }

                                postTypeOfContent = "";

                            } else {
                                $('.miiverse-posts .loading_miiverse').removeClass('show');
                                $('.post-confirm-modal .cancel-post').prop('disabled', false);
                                $('.post-confirm-modal .finish-post').prop('disabled', false);
                                vino.soundPlayVolume('SE_WAVE_BALLOON_CLOSE_TOUCH_OFF', 25);
                                $('.post-confirm-modal .user-text').addClass('none');
                                $('.post-confirm-modal .user-memo').addClass('none');
                                $('.post-confirm-modal').removeClass('show');
                                alert("An error ocurred while posting.")
                            }
                        }
                    };
                });

                inputMiiForm.append(miiUser);
                inputMiiForm.append(feelingToggleDiv);
                inputMiiForm.append(inputPostMiiverse);
                inputMiiForm.append(inputSpoilerBox);
                inputMiiForm.append(inputMemoButton);
                $('.post-list').append(inputMiiForm);
                $('.post-list').append(goToMiiverse);

                var feelingMiiInput = $(".post-form .feeling-selector-toggle li");
                var userMiiEmpathyToggle = $('.post-form .input-mii');

                function addClassFeelingChat(sib) {
                    for (var i = 0; i < feelingMiiInput.length; i++) {
                        var li = feelingMiiInput[i];
                        if ($(li) !== sib) {
                            $(li).removeClass("selected");
                        }
                    }
                    $(sib).addClass("selected");
                    feelingValue = parseInt($(sib).find('input[name="feeling_id_val"]').val(), 10);
                    changeImageSource(feelingValue);
                }

                function changeImageSource(feelingValue) {
                    switch (feelingValue) {
                        case 0:
                            userMiiEmpathyToggle.attr("src", vino.act_getMiiImageEx(activeUserSlot, 1));
                            break;
                        case 1:
                            userMiiEmpathyToggle.attr("src", vino.act_getMiiImageEx(activeUserSlot, 2));
                            break;
                        case 2:
                            userMiiEmpathyToggle.attr("src", vino.act_getMiiImageEx(activeUserSlot, 3));
                            break;
                        case 3:
                            userMiiEmpathyToggle.attr("src", vino.act_getMiiImageEx(activeUserSlot, 4));
                            break;
                        case 4:
                            userMiiEmpathyToggle.attr("src", vino.act_getMiiImageEx(activeUserSlot, 5));
                            break;
                        case 5:
                            userMiiEmpathyToggle.attr("src", vino.act_getMiiImageEx(activeUserSlot, 6));
                            break;
                        default:
                            userMiiEmpathyToggle.attr("src", vino.act_getMiiImageEx(activeUserSlot, 1));
                    }
                }

                // Adding click event listeners to each li element
                for (var i = 0; i < feelingMiiInput.length; i++) {
                    var li = feelingMiiInput[i];
                    $(li).on("click", function () {
                        addClassFeelingChat(this);
                    });
                }
            }
        };

        miiverseRequest.onload = function () {
            $('.miiverse-posts .loading_miiverse').removeClass('show');
        };

        miiverseRequest.onerror = function () {
            $('.miiverse-posts .loading_miiverse').removeClass('show');
            alert('There was an error preparing\nthe Miiverse request');
            closeMiiverseModal();
        };

        miiverseRequest.setRequestHeader('Content-Type', 'application/xml');
        miiverseRequest.setRequestHeader('X-Nintendo-Olv-User-Agent', vino.olv_getUserAgent());
        miiverseRequest.setRequestHeader('X-Nintendo-Olv-Url', vino.olv_getHostName());
        miiverseRequest.setRequestHeader('X-Nintendo-ParamPack', vino.olv_getParameterPack());
        miiverseRequest.setRequestHeader('X-Nintendo-ServiceToken', vino.olv_getServiceToken());
        miiverseRequest.send();
    }
    if (vino.olv_isEnabled()) {
        $('.miiverse-posts .loading_miiverse').addClass('show');
        loadMiiversePosts();
        $("body").addClass("mii");
        typeOfPage.css("display", "none")
        $(".menu-buttons").css("display", "none")
        $(".miiverse-posts").css("display", "block")
        var prevNaviBoxCoordinates = null;
        var intervalId;
        isMiiverseModalOpen = true;

        function checkNaviBox() {
            var naviBoxCoordinates = vino.navi_getRect();
            if (naviBoxCoordinates && naviBoxCoordinates !== prevNaviBoxCoordinates) {
                var coordinatesArray = naviBoxCoordinates.split(',').map(function (item) {
                    return Number(item);
                });
                var x = coordinatesArray[0];
                var y = coordinatesArray[1];
                var width = coordinatesArray[2];
                var height = coordinatesArray[3];
                var scrollThreshold = 30;
                var scrollSpeed = 60;

                if (x < scrollThreshold && window.scrollBy) {
                    window.scrollBy(-scrollSpeed, 0);
                } else if (x + width > window.innerWidth - scrollThreshold && window.scrollBy) {
                    window.scrollBy(scrollSpeed, 0);
                }

                if (y < scrollThreshold && window.scrollBy) {
                    window.scrollBy(0, -scrollSpeed);
                } else if (y + height > window.innerHeight - scrollThreshold && window.scrollBy) {
                    window.scrollBy(0, scrollSpeed);
                }
                prevNaviBoxCoordinates = naviBoxCoordinates;
            }
        }

        intervalId = setInterval(checkNaviBox, 0);

        sessionStorage.setItem("miiverseIntervalId", intervalId);
    } else if (vino.olv_isEnabled() && vino.pc_getMiiverseControlLevel() != 0) {
        alert("Miiverse functionality is\nblocked by Parental Controls");
        closeMiiverseModal();
    }
    else {
        alert("Miiverse is preparing...\nTry again later");
        closeMiiverseModal();
    }
}

function closeMiiverseModal() {
    miiverseRequest.abort();
    $(".post-list").html('');
    $('.post-confirm-modal .finish-post').off("click");
    $('.post-confirm-modal .cancel-post').off("click");
    $("body").removeClass("mii");
    var intervalId = sessionStorage.getItem("miiverseIntervalId"); // Retrieve the interval ID
    clearInterval(intervalId); // Clear the interval using the stored ID
    $(".miiverse-posts").css("display", "none")
    typeOfPage.css("display", "block")
    $(".menu-buttons").css("display", "block")
    vino.loading_setIconAppear(false);
    isMiiverseModalOpen = false;
    vino.requestGarbageCollect();
}

function addEmpathy(miitooEvt) {
    var miitooReq = new XMLHttpRequest();
    var miitooDadii = $(miitooEvt).parent().parent();

    if (miitooDadii.attr("miitoo-added") === undefined || miitooDadii.attr("miitoo-added") === null) {
        vino.soundPlay('SE_COMMON_TOUCH_ON');
        $(miitooEvt).addClass("adding");
        miitooReq.open('POST', vinoClientUrl + '/v1/miiverse_api?yeah=' + miitooDadii.attr('data-miiverse-post-id') + '&remove=0', true);
        miitooReq.onreadystatechange = function () {
            if (miitooReq.readyState == 4 && miitooReq.status == 200) {
                vino.soundPlayVolume("SE_WORD_MII_1", 25);
                $(miitooEvt).removeClass("adding");
                $(miitooEvt).addClass("added");
                miitooDadii.attr("miitoo-added", "");

                // Increment the yeah-count by 1
                var yeahCountSpan = miitooDadii.find('.yeah-count');
                if (yeahCountSpan) {
                    var currentCount = parseInt(yeahCountSpan.text(), 10);
                    yeahCountSpan.text((currentCount + 1).toString());
                }
            } else if (miitooReq.readyState == 4 && miitooReq.status != 200) {
                vino.soundPlayVolume("SE_BAR_ERROR_APPEAR", 25);
                vino.runOliveErrorDialog(5927);
                $(miitooEvt).removeClass("adding");
            }
        };
        miitooReq.setRequestHeader('Content-Type', 'application/xml');
        miitooReq.setRequestHeader('X-Nintendo-Olv-User-Agent', vino.olv_getUserAgent());
        miitooReq.setRequestHeader('X-Nintendo-Olv-Url', vino.olv_getHostName());
        miitooReq.setRequestHeader('X-Nintendo-ParamPack', vino.olv_getParameterPack());
        miitooReq.setRequestHeader('X-Nintendo-ServiceToken', vino.olv_getServiceToken());
        miitooReq.send();
    } else {
        vino.soundPlayVolume("SE_WORD_MII_1", 25);
    }
}

function prepareActorPage() {
    sessionStorage.setItem("current_page", "actor-page");
    vino.loading_setIconRect(360, 160, 120, 120);
    document.querySelector('.top-bar').classList.add(savedBarColor);

    function getQueryParamByName(name) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(window.location.search);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var actorQuery = getQueryParamByName('actor');
    var returnedQuery = getQueryParamByName('returned');

    if (returnedQuery && returnedQuery === 'true') {
        document.querySelector('.back_white_button').disabled = true;
    }

    if (actorQuery !== null) {
        vino.loading_setIconAppear(true);
        var actorReq = new XMLHttpRequest();
        actorReq.onreadystatechange = function () {
            if (actorReq.readyState === 4 && actorReq.status === 200) {
                var actorResponse = actorReq.responseXML;
                var content = actorResponse.getElementsByTagName("content")[0];
                var actor = content.getElementsByTagName("actor")[0];

                var actorName = actor.querySelector("actor_name").textContent;
                var actorId = actor.querySelector("actor_id").textContent;
                var actorImage = actor.querySelector("actor_image").textContent;
                var actorFullName = actor.querySelector("actor_full_name").textContent;
                var isFavoritingDisabled = actor.querySelector("disable_favorite").textContent;
                var actorBirthday = actor.querySelector("actor_birthday").textContent;
                var actorBornIn = actor.querySelector("actor_born_in").textContent;
                var actorSpouseName = actor.querySelector("actor_spouse_name").textContent;
                var actorSpouseId = actor.querySelector("actor_spouse_id").textContent;
                var actorHeight = actor.querySelector("actor_height").textContent;
                var actorExtraUrl = actor.querySelector("actor_extra_url").textContent;
                var actorAwardsWon = actor.querySelector("actor_awards_won").textContent;
                var actorAwardsNom = actor.querySelector("actor_awards_nom").textContent;

                document.querySelector(".top-bar.no-after").innerHTML = actorName;

                if (isFavoritingDisabled == "1") {
                    document.querySelector('.favoritebtn').disabled = true;
                }

                var actorContainer = document.querySelector(".actor-content");
                actorContainer.setAttribute("data-actor-id", actorId);
                if (vino.ls_getItem(actorId)) {
                    actorContainer.setAttribute('data-is-favorited', 'true');
                } else
                    if (!vino.ls_getItem(actorId)) {
                        actorContainer.setAttribute('data-is-favorited', 'false');
                    }

                if (actorName.length > 40) {
                    var actorTagText = actorName.substring(0, 40 - 3) + "...";
                } else {
                    var actorTagText = actorName;
                }
                actorContainer.setAttribute("data-miiverse-topic-tag", actorTagText);

                actorContainer.setAttribute("data-miiverse-search-key", actorId);

                var actorDetailsContainer = document.querySelector(".actor-details");

                var actorImageElement = document.createElement("img");
                actorImageElement.src = actorImage;

                actorImageElement.onclick = function () {
                    var PossibleWords = [
                        function () { vino.soundPlayVolume("SE_WORD_A", 25); },
                        function () { vino.soundPlayVolume("SE_WORD_E", 25); },
                        function () { vino.soundPlayVolume("SE_WORD_I", 25); },
                        function () { vino.soundPlayVolume("SE_WORD_O", 25); },
                        function () { vino.soundPlayVolume("SE_WORD_U", 25); },
                        function () { vino.soundPlayVolume("SE_WORD_N", 25); }
                    ];

                    PossibleWords[Math.floor(Math.random() * PossibleWords.length)]();
                };

                actorImageElement.classList.add("image");

                var actorDetailNameSpan = document.createElement("span");
                actorDetailNameSpan.classList.add("name");
                actorDetailNameSpan.innerHTML = actorName;

                var actorInfoElement = document.createElement("div");
                actorInfoElement.classList.add("actor-info");

                var actorFullNameSpan = document.createElement("span");
                actorFullNameSpan.classList.add("actor-name");
                if (actorFullName.length > 43) {
                    var actorFullNameTrText = actorFullName.substring(0, 43 - 3) + "...";
                } else {
                    var actorFullNameTrText = actorFullName;
                }
                actorFullNameSpan.innerHTML = actorFullNameTrText;

                var actorBornInSpan = document.createElement("span");
                actorBornInSpan.classList.add("actor-born-in");
                if (actorBornIn.length > 43) {
                    var actorBornInTrText = actorBornIn.substring(0, 43 - 3) + "...";
                } else {
                    var actorBornInTrText = actorBornIn;
                }
                actorBornInSpan.innerHTML = actorBornInTrText;

                var actorSpouseSpan = document.createElement("span");
                actorSpouseSpan.classList.add("actor-spouse");
                if (actorSpouseName.length > 43) {
                    var actorSpouseNameTrText = actorSpouseName.substring(0, 43 - 3) + "...";
                } else {
                    var actorSpouseNameTrText = actorSpouseName;
                }
                actorSpouseSpan.innerHTML = actorSpouseNameTrText;

                var actorHeightSpan = document.createElement("span");
                actorHeightSpan.classList.add("actor-height");
                if (actorHeight.length > 43) {
                    var actorHeightTrText = actorHeight.substring(0, 43 - 3) + "...";
                } else {
                    var actorHeightTrText = actorHeight;
                }
                actorHeightSpan.innerHTML = actorHeightTrText;

                var actorAwardsWonSpan = document.createElement("span");
                actorAwardsWonSpan.classList.add("actor-awards-won");
                if (actorAwardsWon.length > 43) {
                    var actorAwardsWonTrText = actorAwardsWon.substring(0, 43 - 3) + "...";
                } else {
                    var actorAwardsWonTrText = actorAwardsWon;
                }
                actorAwardsWonSpan.innerHTML = actorAwardsWonTrText;

                var actorAwardsNomSpan = document.createElement("span");
                actorAwardsNomSpan.classList.add("actor-awards-nom");
                if (actorAwardsNom.length > 43) {
                    var actorAwardsNomTrText = actorAwardsNom.substring(0, 43 - 3) + "...";
                } else {
                    var actorAwardsNomTrText = actorAwardsNom;
                }
                actorAwardsNomSpan.innerHTML = actorAwardsNomTrText;

                var actorBirthdaySpan = document.createElement("span");
                actorBirthdaySpan.classList.add("actor-birthday");
                if (actorBirthday.length > 10) {
                    var birthTrText = actorBirthday.substring(0, 13 - 3) + "...";
                } else {
                    var birthTrText = actorBirthday;
                }
                actorBirthdaySpan.innerHTML = birthTrText;

                var waveUrlButton = document.querySelector(".jump-browser");
                if (actorExtraUrl) {
                    waveUrlButton.disabled = false;
                    waveUrlButton.onclick = function () {
                        vino.lyt_startTouchEffect();
                        vino.soundPlay("SE_CMN_TOUCH_ON");
                        vino.navi_reset();
                        if (vino.runTwoButtonDialog("Do you want to close Nintendo TVii and go to the Internet Browser for additional\ninformation about this program?", "Cancel", "Yes") == 0) {
                            vino.ls_setItem("is_returned_redirect_url", window.location.href);
                            vino.jumpToBrowser(actorExtraUrl, false);
                        }
                    };
                }

                actorDetailsContainer.appendChild(actorImageElement);
                actorDetailsContainer.appendChild(actorDetailNameSpan);
                actorInfoElement.appendChild(actorFullNameSpan);
                actorInfoElement.appendChild(actorBirthdaySpan);
                actorInfoElement.appendChild(actorBornInSpan);
                actorInfoElement.appendChild(actorHeightSpan);
                actorInfoElement.appendChild(actorSpouseSpan);
                actorInfoElement.appendChild(actorAwardsWonSpan);
                actorInfoElement.appendChild(actorAwardsNomSpan);
                actorDetailsContainer.appendChild(actorInfoElement);

                var relatedShows = content.getElementsByTagName("related_shows");
                var relatedProgramsSection = document.querySelector(".related-programs");

                relatedProgramsSection.addEventListener('scroll', function () {
                    vino.soundPlayVolume("SE_BAR_SCROLL", 15);
                    var isAtTop = relatedProgramsSection.scrollTop === 0;
                    var isAtBottom = relatedProgramsSection.scrollTop === (relatedProgramsSection.scrollHeight - relatedProgramsSection.clientHeight);
                    if (isAtTop) {
                        vino.soundPlayVolume("SE_BAR_SCROLL_END", 25);
                    } else if (isAtBottom) {
                        vino.soundPlayVolume("SE_BAR_SCROLL_END", 25);
                    }
                });


                for (var i = 0; i < relatedShows.length; i++) {
                    var relatedShowEl = relatedShows[i];

                    var showElements = relatedShowEl.getElementsByTagName("show");
                    for (var j = 0; j < showElements.length; j++) {
                        var showElement = showElements[j];

                        var relatedProgram = document.createElement("div");
                        relatedProgram.onclick = function () {
                            vino.lyt_startTouchEffect();
                            vino.soundPlayVolume("SE_APPEAR_DETAIL_3", 25);
                            openShowPage(this);
                        };
                        relatedProgram.setAttribute("data-program-id", showElement.querySelector("show_id").textContent);
                        relatedProgram.setAttribute("data-program-name", showElement.querySelector("show_name").textContent);
                        relatedProgram.setAttribute("data-program-genre", showElement.querySelector("show_genre").textContent);
                        relatedProgram.setAttribute("data-program-type", showElement.querySelector("show_type").textContent);
                        relatedProgram.setAttribute("data-streaming", showElement.querySelector("streaming_service").textContent);
                        relatedProgram.setAttribute("navi_target", "");
                        relatedProgram.classList.add("program");

                        var rPrStreamingSpan = document.createElement("span");
                        rPrStreamingSpan.classList.add("streaming-service");
                        rPrStreamingSpan.textContent = showElement.querySelector("streaming_service").textContent;

                        var rPrNameSpan = document.createElement("span");
                        rPrNameSpan.classList.add("program-name");
                        rPrNameSpan.textContent = showElement.querySelector("show_name").textContent;

                        var rPrGenreSpan = document.createElement("span");
                        rPrGenreSpan.classList.add("show-type");
                        rPrGenreSpan.textContent = showElement.querySelector("show_genre").textContent;

                        relatedProgram.appendChild(rPrStreamingSpan);
                        relatedProgram.appendChild(rPrNameSpan);
                        relatedProgram.appendChild(rPrGenreSpan);

                        relatedProgramsSection.appendChild(relatedProgram);
                    }
                }

                if (document.querySelector('.actor-content').getAttribute('data-is-favorited') === 'true') {
                    document.querySelector('.favoritebtn').classList.add('checked');
                } else
                    if (document.querySelector('.actor-content').getAttribute('data-is-favorited') === 'false') {
                        document.querySelector('.favoritebtn').classList.remove('checked');
                    }

                prepareSound();
                prepareTouchEffect();
                prepareMouseEffect();

            }
        };

        actorReq.onload = function () {
            document.querySelector('.miiverse-button').removeAttribute('disabled');
            vino.loading_setIconAppear(false);
        };

        actorReq.onerror = function () {
            vino.loading_setIconAppear(false);
            alert('There was an error preparing the request');
            window.location.href = vinoClientUrl;
        };

        actorReq.open("GET", vinoClientUrl + "/v1/actors/" + actorQuery + ".xml", true);
        actorReq.send();
    } else {
        alert('There was an error reading the actor query');
        window.location.href = vinoClientUrl;
    }
    var stickCheck = setInterval(inputStick, 5);
    var inputCheck = setInterval(inputButton, 100);

    function inputStick() {
        wiiu.gamepad.update();
        if (wiiu.gamepad.isDataValid === 0) return;

        switch (wiiu.gamepad.hold) {
            case 1073741824:
                vino.navi_reset();
                document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
                break;
            case 536870912:
                vino.navi_reset();
                document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
                break;
            case 268435456:
                vino.navi_reset();
                document.body.scrollTop += lerp(-15, -15, (wiiu.gamepad.lStickY));
                break;
            case 134217728:
                vino.navi_reset();
                document.body.scrollTop += lerp(15, 15, (wiiu.gamepad.lStickY));
                break;
        }
    }

    function inputButton() {
        wiiu.gamepad.update();
        if (wiiu.gamepad.isDataValid === 0) {
            pressedButton = null;
            return;
        }

        switch (wiiu.gamepad.hold) {
            case 32:
                if (pressedButton !== 32) {
                    pressedButton = 32;
                    vino.soundPlayVolume("SE_MOVEPAGE_PLAY", 25);
                    scrollLeftPPage();
                }
                break;
            case 16:
                if (pressedButton !== 16) {
                    pressedButton = 16;
                    vino.soundPlayVolume("SE_MOVEPAGE_PLAY", 25);
                    scrollRightPPage();
                }
                break;
            case 128:
                if (pressedButton !== 128) {
                    pressedButton = 128;
                    vino.soundPlayVolume("SE_MOVEPAGE_PLAY", 25);
                    scrollLeftPPage();
                }
                break;
            case 64:
                if (pressedButton !== 64) {
                    pressedButton = 64;
                    vino.soundPlayVolume("SE_MOVEPAGE_PLAY", 25);
                    scrollRightPPage();
                }
                break;
            case 16384:
                if (pressedButton !== 16384) {
                    pressedButton = 16384;
                    vino.soundPlayVolume("SE_RETURN", 25);
                    if (isMiiverseModalOpen == true) {
                        closeMiiverseModal()
                    } else {
                        app.utils.back();
                    }
                    break;
                }
            case 4:
                if (pressedButton !== 4) {
                    pressedButton = 4;
                    vino.soundPlayVolume("SE_TOP", 25);
                    app.utils.top();
                }
                break;
            case 8192:
                break;
        }
    }

    console.log('Prepared Program Page');

    updateDateTime();

    setInterval(updateDateTime, 1000);

    window.addEventListener('scroll', function () {
        updateButtonVisibility();
        if (vino.navi_getRect() && wiiu.gamepad.tpTouch === 1) {
            vino.navi_reset();
        }
    });
}

$(document).on('DOMContentLoaded', function () {
    tvii.utils.prepare();
    tvii.utils.checkPageType();
});

$(document).on("pjax:beforeSend", function () {
    tvii.utils.lockUserOperation(true);
    vino.loading_setIconRect(360, 160, 120, 120);
    vino.loading_setIconAppear(true);
})

$(document).on("pjax:timeout", function (event) {
    event.preventDefault();
    $.pjax({
        url: '/',
        container: '.wrapper',
        timeout: 5000
    });
})

$(document).on("pjax:end", function () {
    tvii.utils.checkPageType();
    tvii.utils.lockUserOperation(false);
    vino.loading_setIconAppear(false);
})

