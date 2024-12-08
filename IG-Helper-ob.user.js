// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            2.39.4
// @description        Downloading is possible for both photos and videos from posts, as well as for stories, reels or profile picture.
// @description:zh-TW  一鍵下載對方 Instagram 貼文中的相片、影片甚至是他們的限時動態、連續短片及大頭貼圖片！
// @description:zh-CN  一键下载对方 Instagram 帖子中的相片、视频甚至是他们的快拍、Reels及头像图片！
// @description:ja     投稿の写真と動画だけでなく、ストーリー、リール、プロフィール写真もダウンロードできます。
// @description:ko     게시물의 사진과 동영상뿐만 아니라 스토리, 릴 또는 프로필 사진도 다운로드할 수 있습니다.
// @description:ro     Descărcarea este posibilă atât pentru fotografiile și videoclipurile din postări, cât și pentru storyuri, reels sau poze de profil.
// @author             SN-Koarashi (5026)
// @match              https://*.instagram.com/*
// @grant              GM_info
// @grant              GM_addStyle
// @grant              GM_setValue
// @grant              GM_getValue
// @grant              GM_xmlhttpRequest
// @grant              GM_registerMenuCommand
// @grant              GM_unregisterMenuCommand
// @grant              GM_getResourceText
// @grant              GM_notification
// @grant              GM_openInTab
// @connect            i.instagram.com
// @connect            raw.githubusercontent.com
// @require            https://code.jquery.com/jquery-4.0.0-beta.min.js
// @resource           INTERNAL_CSS https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/style.css
// @resource           LOCALE_MANIFEST https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/manifest.json
// @supportURL         https://github.com/SN-Koarashi/ig-helper/
// @contributionURL    https://ko-fi.com/snkoarashi
// @icon               https://www.google.com/s2/favicons?domain=www.instagram.com&sz=32
// @compatible         firefox >= 100
// @compatible         chrome >= 100
// @compatible         edge >= 100
// @license            GPL-3.0-only
// @run-at             document-idle
// @downloadURL https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/IG-Helper.user.js
// @updateURL https://update.greasyfork.org/scripts/404535/IG%20Helper.meta.js
// ==/UserScript==

function a0_0x325c(_0x32dec5, _0x15692d) {
    const _0x422d88 = a0_0x422d();
    return a0_0x325c = function (_0x325cdd, _0x2d5695) {
        _0x325cdd = _0x325cdd - 0x9b;
        let _0x36d6b7 = _0x422d88[_0x325cdd];
        return _0x36d6b7;
    }, a0_0x325c(_0x32dec5, _0x15692d);
}
function a0_0x422d() {
    const _0x58b941 = [
        'src',
        'timeupdate',
        'setAttribute',
        'execCommand',
        'split',
        'z-index',
        'status',
        '2-digit',
        'toUpperCase',
        'isIntersecting',
        'scontent.cdninstagram.com',
        '.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        '414lwmZYd',
        'boolean',
        '37px',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'next',
        '</span>\x20<input\x20id=\x22',
        'DONATE',
        'getFullYear',
        'data-modify-thumbnail',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'there\x20is\x20no\x20new\x20update',
        'is_video',
        'mousedown',
        '\x22\x20datetime=\x22',
        'pathname',
        'node',
        'loop',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        'slice',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '.IG_DWSTORY_THUMBNAIL',
        'Wololo!\x20New\x20version\x20released.',
        'close',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'parents',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'DISABLE_VIDEO_LOOPING',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'Current\x20version:\x20',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'data-controls',
        'href',
        'INTERNAL_CSS',
        'getTime',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'getMediaInfo()',
        'floor',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'height',
        'Download\x20Selected\x20Resources',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        'attr',
        'query_hash',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'addedNodes',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '<label\x20class=\x22globalSettings',
        'pause',
        '.IG_DWHISTORY_THUMBNAIL',
        '</button>',
        'div#scrollview',
        'lang',
        'datetime',
        'Feedback',
        'keyCode',
        'data-type',
        'Select\x20All',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'push',
        'loadstart',
        'selected',
        '\x22]\x20span',
        'feedback_message',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'Download\x20Video\x20Thumbnail',
        '11cDZWka',
        'AUTO_RENAME',
        'BATCH_DOWNLOAD_DIRECT',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'relative',
        'carousel_media',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'Checking\x20for\x20Updates',
        'appendChild',
        'profile_pic_url',
        '.IG_DWSTORY',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'data-snig',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        '.SNKMS_IG_DW_MAIN',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'childList',
        'https://www.instagram.com/',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        '</span>\x20',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'data-username',
        'https://www.instagram.com/reels/',
        'RENAME_PUBLISH_DATE',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'isProfile',
        '</a></button><br/>',
        'button[role=\x22menuitem\x22]',
        '\x22\x20data-ih-locale-title=\x22',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        '#_SNLOAD',
        'div',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        'isHomepage',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        '\x22\x20class=\x22IG_REELS\x22>',
        'GET',
        'video_url',
        'body\x20>\x20div\x20section._ac0a',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'style',
        'reject',
        '#article-id',
        'join',
        'toString',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'IG\x20Debug\x20DOM\x20Tree',
        'display_resources',
        'thumbnail',
        'userAgent',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'keydown',
        'body',
        '\x20-</a>',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'SKIP_VIEW_STORY_CONFIRM',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '<div></div>',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        'jpg',
        'svg',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<option\x20value=\x22',
        'video_versions',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        '\x22\x20data-globalIndex=\x22',
        'img[referrerpolicy]',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'isDialog',
        'observe',
        'div[class][role=\x22button\x22]',
        'FORCE_RESOURCE_VIA_MEDIA',
        'length',
        'width',
        'remove',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'contextmenu',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        '#scrollWrapper',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'pointer',
        'tagName',
        'checked',
        'updatenotification',
        '--ig-track-progress:\x20',
        'catch',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'LOAD_BLOB_MULTIPLE',
        'REPORT_FORK',
        'shortcode',
        'a[href^=\x22/\x22]',
        'show',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        '[role=\x22button\x22]',
        'www.',
        'SETTING',
        'Disable\x20Video\x20Auto-looping',
        'includes',
        'px;top:',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'data-name',
        '/info/',
        'replaceAll',
        'a[href^=\x22/p/\x22]',
        'G_CHECK_TIMESTAMP',
        'li._acaz',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'copy',
        '20000',
        'Show\x20DOM\x20Tree',
        'owner',
        '.IG_DWNEWTAB',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'toLowerCase',
        'user\x20settings',
        '.IG_SN_DIG_BODY\x20.newTab',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'input',
        'replace',
        'G_VIDEO_VOLUME',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '2825JWAWTT',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'getTranslationText()',
        'startsWith',
        'IMG',
        'mouseenter',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '[data-ih-locale-title]',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        '.IG_DWPROFILE',
        'target',
        'data-ih-locale-title',
        '110216AFxlBW',
        'data-href',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'hasReferrer',
        'altKey',
        '.IG_SN_DIG\x20input',
        'VID',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '</span></label>',
        'HTML5_VIDEO_CONTROL',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'THUMBNAIL',
        'G_RENAME_FORMAT',
        'then',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'getBlobMediaWithQueryID()',
        'logger\x20sliced',
        '<input\x20value=\x22',
        'users',
        'smooth',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '\x22\x20/>',
        'getUserIdWithAgent()',
        'Found\x20post\x20container',
        'version',
        'disconnect',
        'NO_CHECK_RESOURCE',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        '_acnb',
        'NO_VID_URL',
        '\x22\x20title=\x22',
        '*/*',
        'keys',
        '1017650EHHNLq',
        'host',
        'getHighlightStories()',
        '_INTRO',
        'parse',
        'REPORT_GITHUB',
        'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;',
        'avatar',
        'downloadURL',
        'finalUrl',
        '</div>',
        'script',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'LOCALE_MANIFEST',
        '\x0a-----\x0a\x0aLocation:\x20',
        'video\x20+\x20div',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '<a\x20datetime=\x22',
        'edge_sidecar_to_children',
        '.IG_REELS',
        'trigging',
        'edges',
        'getMonth',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'getBlobMediaWithQuery()',
        'Debug\x20Window',
        '1800900clFiez',
        '.json',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'filter',
        '.IG_SN_DIG',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '__typename',
        'THUMBNAIL_INTRO',
        'reels',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'canDownload',
        '<a\x20media-id=\x22',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'div[role=\x22presentation\x22]',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        'RELOAD_SCRIPT',
        'preventDefault',
        'div[id^=\x22mount\x22]',
        'userLanguage',
        'main\x20timer\x20re-register\x20completed',
        'srcset',
        'cursor',
        'Settings',
        '.xpgaw4o',
        'ended',
        '._acnb',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        '.IG_REELS_THUMBNAIL',
        'DOWNLOAD',
        'video_resources',
        'type',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'fadeOut',
        'div.volume_slider\x20input',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'div:last-child',
        'modify-thumbnail',
        'hasClass',
        '</div></div>',
        'Fetch\x20from\x20memory\x20cache:',
        'DIRECT_DOWNLOAD_ALL',
        'Loading\x20Blob\x20Media...',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        '.videoThumbnail',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
        '<div\x20class=\x22IG_SN_DIG\x20',
        'muted',
        'after',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '5cBrMBa',
        'SELECT_AND_COPY',
        'scrollBy',
        'candidates',
        'match',
        'Remote\x20version:\x20',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'fail',
        'https://www.instagram.com/p/',
        'Can\x20not\x20find\x20download\x20url.',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'remove-thumbnail',
        'image_versions2',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'map',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'data-path',
        'code',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        'x1iyjqo2',
        'assign',
        'addClass',
        'first',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        'padStart',
        'children',
        '1534314DGkFyb',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'Feedback\x20Options',
        'forEach',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        'FEEDBACK',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        '.IG_SN_DIG\x20.globalSettings',
        'css',
        'data-loop',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'mp4',
        '._acay\x20._acaz',
        'video[class]',
        'x1lix1fw',
        'matchAll',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'div:not([class]):not([style])',
        'ALL_CHECK',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'each',
        'script[type=\x22application/json\x22]',
        'download',
        'hidden',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'getBlobMedia()',
        'highlights',
        'getTranslationText\x20catch\x20error:',
        'createObjectURL',
        'https://i.instagram.com/api/v1/media/',
        'NOPATH',
        'data-remove-thumbnail',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '\x22\x20class=\x22newTab\x22>',
        'getPostOwner()',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'removeAttr',
        'shortcode_media',
        'CLOSE',
        'highlight',
        'taken_at_timestamp',
        'img',
        'searchParams',
        'Request\x20with:',
        'controls',
        'GraphImage',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'response',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'val',
        'hide',
        '<p\x20id=\x22_SNLOAD\x22>',
        'navigator',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'volume',
        'wrap',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'log',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'GraphVideo',
        'media-id',
        'change',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'blob',
        'range',
        'display_url',
        'top',
        'prop',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'Checking\x20for\x20Script\x20Updates',
        'prev',
        'Close',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'title',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'before',
        'REPORT_DISCORD',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'createElement',
        'CHECK_UPDATE',
        '._aagv\x20img',
        'items',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'hostname',
        'NEW_TAB',
        'html',
        'vertical',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'isReels',
        'toISOString',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'data-completed',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'absolute',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        'article',
        '<a\x20href=\x22https://www.instagram.com/p/',
        '_blank',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        '</a></button>',
        'play\x20playing',
        '[data-ih-locale]',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'x1s85apg',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'parent',
        'bottom',
        'language',
        'https://i.instagram.com/api/v1/users/',
        '._acay\x20+\x20.x24i39r',
        'reels_media',
        'en-US',
        '[data-snig]',
        'message',
        'div\x20>\x20ul\x20li._acaz',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'taken_at',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'toLocaleString',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '142JvsIjg',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'getDate',
        'onReadyMyDW()\x20Timer',
        'DIV',
        '.IG_SN_DIG\x20#post_info',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'https://www.instagram.com/reel/',
        'Image',
        '.IG_DWHINEWTAB',
        'Open\x20in\x20New\x20Tab',
        'last',
        'Donate',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'video',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'className',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        'object',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'removeClass',
        'SHOW_DOM_TREE',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'user',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        '<div\x20class=\x22volume_slider\x20',
        'DOMTree-',
        'class',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'body\x20>\x20div\x20section:visible._ac0a',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'error',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'Thumbnail\x20button\x20already\x20inserted',
        'Reload\x20Script',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'find',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'a[data-needed=\x22direct\x22]',
        'click',
        'append',
        'MODIFY_VIDEO_VOLUME',
        'stopPropagation',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'url',
        'time',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'volumechange',
        '<div\x20id=\x22tempWrapper\x22></div>',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'data',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'undefined',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'sort',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'modify',
        'getStories()',
        'DEBUG',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        '#tempWrapper',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        '3372822yBsyBc',
        'getUserHighSizeProfile()',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '\x22\x20/></div>',
        'load',
        'video\x20+\x20div\x20>\x20div',
        'regenerated',
        'div.volume_slider',
        '2569784ejBItP',
        'responseText',
        'video\x20volume\x20changed\x20#slider',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'getUserId()',
        'NOTICE_UPDATE_CONTENT',
        'isHighlightsStory',
        'innerHTML',
        'position',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'Video',
        'div[style][class]',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        '%22}',
        'xdt_api__v1__media__shortcode__web_info',
        '._acay',
        'px;\x22>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        '.IG_DWHISTORY',
        'stories',
        'username',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'text',
        'select',
        'data-ih-locale',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'https://ko-fi.com/snkoarashi',
        '_ac3q',
        '</p>',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'
    ];
    a0_0x422d = function () {
        return _0x58b941;
    };
    return a0_0x422d();
}
(function (_0x18abfb, _0x1aa2f5) {
    const _0x11fcd8 = a0_0x325c, _0x514054 = _0x18abfb();
    while (!![]) {
        try {
            const _0x3f285d = parseInt(_0x11fcd8(0xe0)) / 0x1 * (parseInt(_0x11fcd8(0x1fa)) / 0x2) + -parseInt(_0x11fcd8(0x178)) / 0x3 + parseInt(_0x11fcd8(0x12c)) / 0x4 + -parseInt(_0x11fcd8(0x15e)) / 0x5 * (-parseInt(_0x11fcd8(0x240)) / 0x6) + parseInt(_0x11fcd8(0x248)) / 0x7 + parseInt(_0x11fcd8(0xf0)) / 0x8 * (-parseInt(_0x11fcd8(0x277)) / 0x9) + parseInt(_0x11fcd8(0x111)) / 0xa * (-parseInt(_0x11fcd8(0x2bd)) / 0xb);
            if (_0x3f285d === _0x1aa2f5)
                break;
            else
                _0x514054['push'](_0x514054['shift']());
        } catch (_0x334685) {
            _0x514054['push'](_0x514054['shift']());
        }
    }
}(a0_0x422d, 0x51530), function (_0x63f2f9) {
    setTimeout(() => {
        'use strict';
        const _0x1ad2d2 = a0_0x325c;
        const _0x500c04 = {
                'CHECK_UPDATE': !![],
                'AUTO_RENAME': !![],
                'RENAME_PUBLISH_DATE': !![],
                'DISABLE_VIDEO_LOOPING': ![],
                'HTML5_VIDEO_CONTROL': ![],
                'REDIRECT_CLICK_USER_STORY_PICTURE': ![],
                'FORCE_FETCH_ALL_RESOURCES': ![],
                'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': ![],
                'DIRECT_DOWNLOAD_ALL': ![],
                'MODIFY_VIDEO_VOLUME': ![],
                'SCROLL_BUTTON': !![],
                'FORCE_RESOURCE_VIA_MEDIA': ![],
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': ![],
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': ![],
                'SKIP_VIEW_STORY_CONFIRM': ![]
            }, _0x556457 = [
                _0x1ad2d2(0x2d4),
                _0x1ad2d2(0x158),
                _0x1ad2d2(0x10b)
            ];
        var _0xabfde5 = GM_getValue('G_VIDEO_VOLUME') ? GM_getValue(_0x1ad2d2(0xde)) : 0x1, _0x3c72ee = ![], _0x5c7315 = GM_getValue(_0x1ad2d2(0xfc)) ? GM_getValue(_0x1ad2d2(0xfc)) : _0x1ad2d2(0x296);
        const _0x37aca1 = {
                'DOWNLOAD': _0x1ad2d2(0x20e),
                'NEW_TAB': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
                'THUMBNAIL': _0x1ad2d2(0x9d),
                'CLOSE': '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>'
            }, _0x3dc910 = 0xfa, _0x15f3db = GM_getResourceText(_0x1ad2d2(0x29b)), _0x5e9ffe = JSON['parse'](GM_getResourceText(_0x1ad2d2(0x11e)));
        var _0x58fa9b = [], _0x4e3de4 = {}, _0x374134 = GM_getValue(_0x1ad2d2(0x2af)) || navigator[_0x1ad2d2(0x1ec)] || navigator[_0x1ad2d2(0x13e)], _0x251598 = location[_0x1ad2d2(0x29a)], _0x1f69d8 = ![], _0x256ff4 = ![], _0x2657b1 = [], _0x240bf4, _0xb299ca, _0x5af255, _0x455203, _0x394254 = {
                'stories': {},
                'highlights': {}
            }, _0x1b8b1b = new MutationObserver(function (_0x27e70a, _0x2aa527) {
                _0x414995();
            });
        _0xd89ef6(), GM_addStyle(_0x15f3db), _0x37a11c(), _0xe4980a(_0x374134)['then'](_0x235703 => {
            _0x4e3de4[_0x374134] = _0x235703, _0xe0658d(), _0x37a11c(), _0x52cdd5(0x12c);
        })[_0x1ad2d2(0xb9)](_0x4873d6 => {
            const _0x530edb = _0x1ad2d2;
            _0x37a11c(), _0x52cdd5(0x12c), !_0x374134[_0x530edb(0xe5)]('en') && console[_0x530edb(0x21c)](_0x530edb(0x196), _0x4873d6);
        });
        var _0x51fa54 = setInterval(function () {
            const _0x337f7d = _0x1ad2d2;
            if (_0x63f2f9('div#splash-screen')[_0x337f7d(0xab)] > 0x0 && !_0x63f2f9('div#splash-screen')['is'](':hidden') || location['pathname'][_0x337f7d(0x162)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x337f7d(0x1d4)][_0x337f7d(0xe5)](_0x337f7d(0xc2))) {
                _0x256ff4 = ![];
                return;
            }
            if (_0x251598 != location[_0x337f7d(0x29a)] || !_0x1f69d8 || !_0x256ff4) {
                console[_0x337f7d(0x1b8)]('Main\x20Timer', _0x337f7d(0x126)), clearInterval(_0x455203), _0x256ff4 = ![], _0x1f69d8 = !![], _0x251598 = location['href'], _0x1b8b1b[_0x337f7d(0x109)]();
                if (location['href']['startsWith'](_0x337f7d(0x166)) || location[_0x337f7d(0x286)][_0x337f7d(0x162)](/^\/(.*?)\/(p|reel)\//ig) || location['href'][_0x337f7d(0xe5)](_0x337f7d(0x204))) {
                    _0x394254[_0x337f7d(0x25d)] = {}, _0x394254['highlights'] = {}, _0x180cdc(_0x337f7d(0xa7));
                    var _0xcc8f45 = setInterval(() => {
                        const _0x41d451 = _0x337f7d;
                        _0x63f2f9(_0x41d451(0x2c8))[_0x41d451(0xab)] > 0x0 && (clearInterval(_0xcc8f45), setTimeout(() => {
                            _0x414995(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x256ff4 = !![];
                }
                location['href'][_0x337f7d(0xe5)](_0x337f7d(0x2d3)) && (_0x180cdc(_0x337f7d(0x1d9)), setTimeout(() => {
                    _0x3799cd(![]);
                }, 0x96), _0x256ff4 = !![]);
                if (location[_0x337f7d(0x29a)][_0x337f7d(0x26d)]('?')[0x0] == _0x337f7d(0x2ce)) {
                    _0x394254[_0x337f7d(0x25d)] = {}, _0x394254[_0x337f7d(0x195)] = {};
                    let _0x37dfca = _0x240bf4?.[_0x337f7d(0x162)](/^\/(stories|highlights)\//ig) != null;
                    _0x180cdc(_0x337f7d(0x2de), _0x37dfca), setTimeout(() => {
                        const _0x4618b4 = _0x337f7d;
                        _0x414995(![], _0x37dfca);
                        const _0x1ec6c2 = _0x63f2f9('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.[_0x4618b4(0x1ea)]()[0x0];
                        _0x1ec6c2 && _0x1b8b1b[_0x4618b4(0xa8)](_0x1ec6c2, { 'childList': !![] });
                    }, 0x96), _0x256ff4 = !![];
                }
                _0x63f2f9(_0x337f7d(0x2f2))[_0x337f7d(0xab)] && location[_0x337f7d(0x286)][_0x337f7d(0x162)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x337f7d(0x286)][_0x337f7d(0x162)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x180cdc(_0x337f7d(0x2d6)), setTimeout(() => {
                    _0x6d0e23(![]);
                }, 0x96), _0x256ff4 = !![]);
                if (!_0x256ff4) {
                    if (location[_0x337f7d(0x29a)][_0x337f7d(0x162)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig)) {
                        _0x394254[_0x337f7d(0x195)] = {}, _0x180cdc(_0x337f7d(0x24f)), _0x10f2fe(![]), _0x455203 = setInterval(() => {
                            _0x130221(![]);
                        }, _0x3dc910);
                        _0x63f2f9('.IG_DWHISTORY')['length'] && setTimeout(() => {
                            const _0x3978ea = _0x337f7d;
                            if (_0x500c04[_0x3978ea(0x2fb)]) {
                                var _0x1da74a = _0x63f2f9(_0x3978ea(0x231))[_0x3978ea(0x12f)](function () {
                                    const _0x228088 = _0x3978ea;
                                    return _0x63f2f9(this)[_0x228088(0x177)]()[_0x228088(0xab)] === 0x0;
                                });
                                _0x1da74a?.[_0x3978ea(0x224)]();
                            }
                            _0x256ff4 = !![];
                        }, 0x96);
                        ;
                    } else
                        location[_0x337f7d(0x29a)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x180cdc('isStory'), _0x63f2f9(_0x337f7d(0x24c))[_0x337f7d(0xab)] > 0x0 && (_0x63f2f9('.IG_DWSTORY')[_0x337f7d(0xad)](), _0x63f2f9('.IG_DWNEWTAB')['remove'](), _0x63f2f9(_0x337f7d(0x28d))[_0x337f7d(0xab)] && _0x63f2f9(_0x337f7d(0x28d))[_0x337f7d(0xad)](), _0xe46099(![]), setTimeout(() => {
                            _0xe46099(![]);
                        }, 0x96)), _0x63f2f9(_0x337f7d(0x2c7))['length'] && setTimeout(() => {
                            const _0x9ea791 = _0x337f7d;
                            if (_0x500c04[_0x9ea791(0x2fb)]) {
                                var _0x5d0b34 = _0x63f2f9(_0x9ea791(0x231))[_0x9ea791(0x12f)](function () {
                                    const _0x2b7609 = _0x9ea791;
                                    return _0x63f2f9(this)[_0x2b7609(0x177)]()[_0x2b7609(0xab)] === 0x0;
                                });
                                _0x5d0b34?.[_0x9ea791(0x224)]();
                            }
                            _0x256ff4 = !![];
                        }, 0x96)) : (_0x256ff4 = ![], _0x63f2f9('.IG_DWSTORY')[_0x337f7d(0xab)] && _0x63f2f9('.IG_DWSTORY')['remove'](), _0x63f2f9(_0x337f7d(0xd5))[_0x337f7d(0xab)] && _0x63f2f9('.IG_DWNEWTAB')[_0x337f7d(0xad)](), _0x63f2f9('.IG_DWSTORY_THUMBNAIL')[_0x337f7d(0xab)] && _0x63f2f9(_0x337f7d(0x28d))[_0x337f7d(0xad)](), _0x63f2f9('.IG_DWHISTORY')[_0x337f7d(0xab)] && _0x63f2f9(_0x337f7d(0x25c))['remove'](), _0x63f2f9(_0x337f7d(0x206))[_0x337f7d(0xab)] && _0x63f2f9(_0x337f7d(0x206))[_0x337f7d(0xad)](), _0x63f2f9('.IG_DWHISTORY_THUMBNAIL')[_0x337f7d(0xab)] && _0x63f2f9('.IG_DWHISTORY_THUMBNAIL')[_0x337f7d(0xad)]());
                }
                _0x52cdd5(0x12c), _0x240bf4 = new URL(location[_0x337f7d(0x29a)])[_0x337f7d(0x286)];
            }
        }, _0x3dc910);
        async function _0x6d0e23(_0x40b136) {
            const _0x820491 = _0x1ad2d2;
            if (_0x40b136) {
                _0x22205c(!![]);
                let _0x2363f2 = new Date()[_0x820491(0x29c)](), _0x288ec1 = Math['floor'](_0x2363f2 / 0x3e8), _0x15d9dc = location[_0x820491(0x286)][_0x820491(0xcb)](/(reels|tagged)\/$/ig, '')[_0x820491(0x26d)]('/')[_0x820491(0x12f)](_0x5602d4 => _0x5602d4[_0x820491(0xab)] > 0x0)['at'](-0x1), _0x2acde2 = await _0x55f948(_0x15d9dc);
                try {
                    let _0x13625b = await _0x159d60(_0x2acde2[_0x820491(0x214)]['pk']);
                    _0x2755ba(_0x13625b, _0x15d9dc, _0x820491(0x118), _0x288ec1, 'jpg');
                } catch (_0x42adf1) {
                    _0x2755ba(_0x2acde2[_0x820491(0x214)][_0x820491(0x2c6)], _0x15d9dc, _0x820491(0x118), _0x288ec1, _0x820491(0x9b));
                }
                _0x22205c(![]);
            } else {
                if (!_0x63f2f9(_0x820491(0xed))[_0x820491(0xab)]) {
                    let _0x1be8bc = setInterval(() => {
                        const _0x1ae76d = _0x820491;
                        if (_0x63f2f9(_0x1ae76d(0xed))[_0x1ae76d(0xab)]) {
                            clearInterval(_0x1be8bc);
                            return;
                        }
                        _0x63f2f9('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')['parent']()['parent']()[_0x1ae76d(0x225)](_0x1ae76d(0xa6) + _0x37ab59('DW') + _0x1ae76d(0x1e9) + _0x37aca1[_0x1ae76d(0x148)] + _0x1ae76d(0x11b)), _0x63f2f9(_0x1ae76d(0x27a))[_0x1ae76d(0x1ea)]()[_0x1ae76d(0x1ea)]()[_0x1ae76d(0x183)](_0x1ae76d(0x251), _0x1ae76d(0x2c1)), _0x63f2f9('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')[_0x1ae76d(0x1ea)]()[_0x1ae76d(0x1ea)]()[_0x1ae76d(0x1ea)]()[_0x1ae76d(0x225)](_0x1ae76d(0xa6) + _0x37ab59('DW') + _0x1ae76d(0x1e9) + _0x37aca1[_0x1ae76d(0x148)] + _0x1ae76d(0x11b)), _0x63f2f9(_0x1ae76d(0x2d1))[_0x1ae76d(0x1ea)]()['parent']()[_0x1ae76d(0x1ea)]()[_0x1ae76d(0x183)](_0x1ae76d(0x251), _0x1ae76d(0x2c1));
                    }, 0x96);
                }
            }
        }
        async function _0x10f2fe(_0x1fd5c7, _0x4049b8) {
            const _0x437d8 = _0x1ad2d2;
            if (_0x1fd5c7) {
                let _0x317077 = new Date()[_0x437d8(0x29c)](), _0x581fb9 = Math[_0x437d8(0x29f)](_0x317077 / 0x3e8), _0x2f2998 = location['href'][_0x437d8(0xdd)](/\/$/ig, '')[_0x437d8(0x26d)]('/')['at'](-0x1), _0x25ab43 = _0x63f2f9(_0x437d8(0x2a0))[_0x437d8(0xab)] || _0x63f2f9(_0x437d8(0x23a))[_0x437d8(0xab)] || _0x63f2f9(_0x437d8(0x289))[_0x437d8(0x221)](_0x437d8(0x164))[_0x437d8(0xab)], _0x18bc3f = '', _0x26c42b = 0x0;
                _0x22205c(!![]);
                if (_0x394254[_0x437d8(0x195)][_0x2f2998]) {
                    _0x180cdc(_0x437d8(0x153), _0x2f2998);
                    let _0x422077 = _0x394254[_0x437d8(0x195)][_0x2f2998][_0x437d8(0x230)]['reels_media'][0x0][_0x437d8(0x1d2)][_0x437d8(0xab)];
                    _0x18bc3f = _0x394254[_0x437d8(0x195)][_0x2f2998][_0x437d8(0x230)][_0x437d8(0x1ef)][0x0]['owner'][_0x437d8(0x25e)], _0x26c42b = _0x394254[_0x437d8(0x195)][_0x2f2998][_0x437d8(0x230)]['reels_media'][0x0]['items'][_0x422077 - _0x25ab43];
                } else {
                    let _0x3bbfbf = await _0x2dd7e4(_0x2f2998), _0x48f0bb = _0x3bbfbf[_0x437d8(0x230)][_0x437d8(0x1ef)][0x0][_0x437d8(0x1d2)][_0x437d8(0xab)];
                    _0x18bc3f = _0x3bbfbf[_0x437d8(0x230)][_0x437d8(0x1ef)][0x0][_0x437d8(0xd4)][_0x437d8(0x25e)], _0x26c42b = _0x3bbfbf[_0x437d8(0x230)][_0x437d8(0x1ef)][0x0][_0x437d8(0x1d2)][_0x48f0bb - _0x25ab43], _0x394254[_0x437d8(0x195)][_0x2f2998] = _0x3bbfbf;
                }
                _0x500c04[_0x437d8(0x2d4)] && (_0x581fb9 = _0x26c42b['taken_at_timestamp']);
                if (_0x500c04['FORCE_RESOURCE_VIA_MEDIA'] && !_0x3c72ee) {
                    let _0x54c5c9 = await _0x26cb94(_0x26c42b['id']);
                    _0x54c5c9[_0x437d8(0x26f)] === 'ok' ? _0x54c5c9[_0x437d8(0x1d2)][0x0][_0x437d8(0xa1)] ? _0x4049b8 ? _0x54c0cb(_0x54c5c9[_0x437d8(0x1d2)][0x0][_0x437d8(0xa1)][0x0][_0x437d8(0x22a)]) : _0x2755ba(_0x54c5c9['items'][0x0]['video_versions'][0x0][_0x437d8(0x22a)], _0x18bc3f, _0x437d8(0x195), _0x581fb9, _0x437d8(0x186), _0x2f2998) : _0x4049b8 ? _0x54c0cb(_0x54c5c9[_0x437d8(0x1d2)][0x0][_0x437d8(0x16a)]['candidates'][0x0][_0x437d8(0x22a)]) : _0x2755ba(_0x54c5c9[_0x437d8(0x1d2)][0x0]['image_versions2'][_0x437d8(0x161)][0x0][_0x437d8(0x22a)], _0x18bc3f, 'highlights', _0x581fb9, 'jpg', _0x2f2998) : (_0x500c04[_0x437d8(0x158)] ? (delete _0x394254[_0x437d8(0x195)][_0x2f2998], _0x3c72ee = !![], _0x10f2fe(!![], _0x4049b8)) : alert(_0x437d8(0x229) + _0x54c5c9[_0x437d8(0x1f2)]), _0x180cdc(_0x54c5c9));
                } else
                    _0x26c42b[_0x437d8(0x283)] ? _0x4049b8 ? _0x54c0cb(_0x26c42b[_0x437d8(0x149)]['at'](-0x1)[_0x437d8(0x269)], _0x18bc3f) : _0x2755ba(_0x26c42b[_0x437d8(0x149)]['at'](-0x1)[_0x437d8(0x269)], _0x18bc3f, _0x437d8(0x195), _0x581fb9, _0x437d8(0x186), _0x2f2998) : _0x4049b8 ? _0x54c0cb(_0x26c42b[_0x437d8(0x2ee)]['at'](-0x1)[_0x437d8(0x269)], _0x18bc3f) : _0x2755ba(_0x26c42b[_0x437d8(0x2ee)]['at'](-0x1)[_0x437d8(0x269)], _0x18bc3f, _0x437d8(0x195), _0x581fb9, _0x437d8(0x9b), _0x2f2998), _0x3c72ee = ![];
                _0x22205c(![]);
            } else {
                if (!_0x63f2f9(_0x437d8(0x25c))[_0x437d8(0xab)]) {
                    let _0x4bd4e6 = null;
                    _0x63f2f9(_0x437d8(0x2e3))[_0x437d8(0xab)] > 0x0 ? _0x4bd4e6 = _0x63f2f9(_0x437d8(0x21a)) : (_0x4bd4e6 = _0x63f2f9(_0x437d8(0x15d)), _0x4bd4e6['css'](_0x437d8(0x251), _0x437d8(0x2c1)));
                    if (_0x4bd4e6[_0x437d8(0xab)] === 0x0) {
                        let _0x216799 = _0x63f2f9('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x3b5073 = 0x0;
                        _0x216799[_0x437d8(0x18f)](function () {
                            const _0xd191f8 = _0x437d8;
                            _0x63f2f9(this)[_0xd191f8(0xac)]() > _0x3b5073 && (_0x3b5073 = _0x63f2f9(this)['width'](), _0x4bd4e6 = _0x63f2f9(this)[_0xd191f8(0x177)](_0xd191f8(0x2dc))['first']());
                        });
                    }
                    _0x4bd4e6 != null && (_0x4bd4e6[_0x437d8(0x225)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x37ab59('DW') + _0x437d8(0x22f) + _0x37aca1[_0x437d8(0x148)] + _0x437d8(0x11b)), _0x4bd4e6['append'](_0x437d8(0x23b) + _0x37ab59(_0x437d8(0x1d5)) + _0x437d8(0x281) + _0x37aca1['NEW_TAB'] + _0x437d8(0x11b)), _0x4bd4e6[_0x437d8(0x221)](_0x437d8(0xa5))[_0x437d8(0x18f)](function () {
                        _0x63f2f9(this)['on']('load', function () {
                            const _0x13b0e9 = a0_0x325c;
                            !_0x63f2f9(this)[_0x13b0e9(0x230)](_0x13b0e9(0x169)) && (_0x4bd4e6[_0x13b0e9(0x221)]('.IG_DWHISTORY_THUMBNAIL')['length'] === 0x0 ? (_0x63f2f9(this)[_0x13b0e9(0x2a4)](_0x13b0e9(0x19a), !![]), _0x63f2f9(_0x13b0e9(0x2ac))['remove'](), _0x180cdc(_0x13b0e9(0x179))) : (_0x63f2f9(this)[_0x13b0e9(0x2a4)]('data-remove-thumbnail', !![]), _0x180cdc(_0x13b0e9(0x253))));
                        });
                    }));
                }
            }
        }
        async function _0x130221(_0x27cc70) {
            const _0x3c9afa = _0x1ad2d2;
            if (_0x27cc70) {
                let _0x45673a = new Date()[_0x3c9afa(0x29c)](), _0x705ed5 = Math['floor'](_0x45673a / 0x3e8), _0x4fd63e = location[_0x3c9afa(0x29a)][_0x3c9afa(0xdd)](/\/$/ig, '')[_0x3c9afa(0x26d)]('/')['at'](-0x1), _0x237fed = '', _0x388f2e = _0x63f2f9(_0x3c9afa(0x2a0))[_0x3c9afa(0xab)] || _0x63f2f9('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')['length'] || _0x63f2f9(_0x3c9afa(0x289))[_0x3c9afa(0x221)](_0x3c9afa(0x164))[_0x3c9afa(0xab)], _0x36279d = '';
                _0x22205c(!![]);
                if (_0x394254[_0x3c9afa(0x195)][_0x4fd63e]) {
                    _0x180cdc(_0x3c9afa(0x153), _0x4fd63e);
                    let _0x4f03f9 = _0x394254['highlights'][_0x4fd63e][_0x3c9afa(0x230)][_0x3c9afa(0x1ef)][0x0][_0x3c9afa(0x1d2)][_0x3c9afa(0xab)];
                    _0x237fed = _0x394254[_0x3c9afa(0x195)][_0x4fd63e][_0x3c9afa(0x230)]['reels_media'][0x0]['owner'][_0x3c9afa(0x25e)], _0x36279d = _0x394254[_0x3c9afa(0x195)][_0x4fd63e][_0x3c9afa(0x230)][_0x3c9afa(0x1ef)][0x0][_0x3c9afa(0x1d2)][_0x4f03f9 - _0x388f2e];
                } else {
                    let _0x317083 = await _0x2dd7e4(_0x4fd63e), _0x4ff219 = _0x317083[_0x3c9afa(0x230)]['reels_media'][0x0]['items'][_0x3c9afa(0xab)];
                    _0x237fed = _0x317083[_0x3c9afa(0x230)][_0x3c9afa(0x1ef)][0x0][_0x3c9afa(0xd4)][_0x3c9afa(0x25e)], _0x36279d = _0x317083[_0x3c9afa(0x230)]['reels_media'][0x0][_0x3c9afa(0x1d2)][_0x4ff219 - _0x388f2e], _0x394254['highlights'][_0x4fd63e] = _0x317083;
                }
                _0x500c04[_0x3c9afa(0x2d4)] && (_0x705ed5 = _0x36279d[_0x3c9afa(0x1a3)]);
                if (_0x500c04[_0x3c9afa(0xaa)] && !_0x3c72ee) {
                    let _0x15d495 = await _0x26cb94(_0x36279d['id']);
                    _0x15d495[_0x3c9afa(0x26f)] === 'ok' ? _0x2755ba(_0x15d495[_0x3c9afa(0x1d2)][0x0][_0x3c9afa(0x16a)][_0x3c9afa(0x161)][0x0][_0x3c9afa(0x22a)], _0x237fed, 'highlights', _0x705ed5, _0x3c9afa(0x9b), _0x4fd63e) : (_0x500c04[_0x3c9afa(0x158)] ? (delete _0x394254[_0x3c9afa(0x195)][_0x4fd63e], _0x3c72ee = !![], _0x130221(!![])) : alert(_0x3c9afa(0x229) + _0x15d495[_0x3c9afa(0x1f2)]), _0x180cdc(_0x15d495));
                } else
                    _0x2755ba(_0x36279d['display_resources']['at'](-0x1)['src'], _0x237fed, _0x3c9afa(0x195), _0x705ed5, _0x3c9afa(0x9b), _0x4fd63e), _0x3c72ee = ![];
                _0x22205c(![]);
            } else {
                if (_0x63f2f9(_0x3c9afa(0x193))[_0x3c9afa(0xab)]) {
                    if (!_0x63f2f9(_0x3c9afa(0x2ac))[_0x3c9afa(0xab)]) {
                        let _0x257dd2 = null;
                        _0x63f2f9(_0x3c9afa(0x2e3))[_0x3c9afa(0xab)] > 0x0 ? _0x257dd2 = _0x63f2f9(_0x3c9afa(0x21a)) : (_0x257dd2 = _0x63f2f9(_0x3c9afa(0x15d)), _0x257dd2[_0x3c9afa(0x183)](_0x3c9afa(0x251), _0x3c9afa(0x2c1)));
                        if (_0x257dd2[_0x3c9afa(0xab)] === 0x0) {
                            let _0x22e485 = _0x63f2f9(_0x3c9afa(0x1f9)), _0x1590e2 = 0x0;
                            _0x22e485['each'](function () {
                                const _0x4977c0 = _0x3c9afa;
                                _0x63f2f9(this)[_0x4977c0(0xac)]() > _0x1590e2 && (_0x1590e2 = _0x63f2f9(this)[_0x4977c0(0xac)](), _0x257dd2 = _0x63f2f9(this)[_0x4977c0(0x177)]('div')[_0x4977c0(0x174)]());
                            });
                        }
                        _0x257dd2 != null && _0x257dd2[_0x3c9afa(0x225)](_0x3c9afa(0x219) + _0x37ab59(_0x3c9afa(0x133)) + _0x3c9afa(0x1cb) + _0x37aca1[_0x3c9afa(0xfb)] + '</div>');
                    }
                } else
                    _0x63f2f9(_0x3c9afa(0x2ac))[_0x3c9afa(0xad)]();
            }
        }
        async function _0xe46099(_0x2b4475, _0xb57c32, _0x4b30ad) {
            const _0x5af858 = _0x1ad2d2;
            if (_0x2b4475) {
                let _0x37cfdd = new Date()['getTime'](), _0x36a6b1 = Math['floor'](_0x37cfdd / 0x3e8), _0x5c4ecb = _0x63f2f9(_0x5af858(0xe9))['first']()[_0x5af858(0x260)]() || location[_0x5af858(0x286)][_0x5af858(0x26d)]('/')[_0x5af858(0x12f)](_0x395149 => _0x395149[_0x5af858(0xab)] > 0x0)['at'](0x1);
                _0x22205c(!![]);
                if (_0x500c04['FORCE_RESOURCE_VIA_MEDIA'] && !_0x3c72ee) {
                    let _0x162fd6 = null, _0x4adf9f = await _0x55f948(_0x5c4ecb), _0x101c0a = _0x4adf9f['user']['pk'], _0x174f32 = await _0x3aa5e5(_0x101c0a), _0x21ae1e = location[_0x5af858(0x286)][_0x5af858(0x26d)]('/')[_0x5af858(0x12f)](_0x4c6686 => _0x4c6686[_0x5af858(0xab)] > 0x0 && _0x4c6686[_0x5af858(0x162)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x174f32[_0x5af858(0x230)][_0x5af858(0x1ef)][0x0][_0x5af858(0x1d2)][_0x5af858(0x17d)](_0x52eacd => {
                        _0x52eacd['id'] == _0x21ae1e && (_0x162fd6 = _0x52eacd['id']);
                    });
                    if (_0x162fd6 == null) {
                        let _0x569d72 = _0x63f2f9(_0x5af858(0xa2) + _0x5c4ecb + _0x5af858(0x2b9))[_0x5af858(0x12f)](function () {
                            const _0x434c7b = _0x5af858;
                            return _0x63f2f9(this)[_0x434c7b(0x177)]()[_0x434c7b(0xab)] === 0x0 && _0x63f2f9(this)[_0x434c7b(0x221)](_0x434c7b(0x9c))['length'] === 0x0 && _0x63f2f9(this)['text']()?.[_0x434c7b(0xd8)]() === _0x5c4ecb?.[_0x434c7b(0xd8)]();
                        })[_0x5af858(0x292)]('div:not([class]):not([style])')[_0x5af858(0x12f)](function () {
                            const _0x5015a0 = _0x5af858;
                            return _0x63f2f9(this)[_0x5015a0(0x260)]()?.[_0x5015a0(0xd8)]() !== _0x5c4ecb?.[_0x5015a0(0xd8)]();
                        })[_0x5af858(0x12f)](function () {
                            const _0x4476b7 = _0x5af858;
                            return _0x63f2f9(this)[_0x4476b7(0x177)]()[_0x4476b7(0xab)] > 0x1;
                        })[_0x5af858(0x174)]();
                        _0x569d72[_0x5af858(0x177)]()[_0x5af858(0x12f)](function () {
                            const _0x107ff0 = _0x5af858;
                            return _0x63f2f9(this)[_0x107ff0(0x2a1)]() < 0xa;
                        })[_0x5af858(0x174)]()[_0x5af858(0x177)]()[_0x5af858(0x18f)](function (_0x173a69) {
                            const _0x2aa108 = _0x5af858;
                            _0x63f2f9(this)[_0x2aa108(0x177)]()[_0x2aa108(0xab)] > 0x0 && (_0x162fd6 = _0x174f32[_0x2aa108(0x230)][_0x2aa108(0x1ef)][0x0][_0x2aa108(0x1d2)][_0x173a69]['id']);
                        });
                    }
                    _0x162fd6 == null && (_0x63f2f9('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')['each'](function (_0xd8189e) {
                        const _0x54a69b = _0x5af858;
                        _0x63f2f9(this)[_0x54a69b(0x151)](_0x54a69b(0x189)) && (_0x63f2f9(this)['children']()[_0x54a69b(0xab)] > 0x0 && (_0x162fd6 = _0x174f32['data']['reels_media'][0x0]['items'][_0xd8189e]['id']));
                    }), _0x63f2f9(_0x5af858(0xdb))[_0x5af858(0x18f)](function (_0x26e1be) {
                        const _0x1b6b31 = _0x5af858;
                        _0x63f2f9(this)[_0x1b6b31(0x177)]()[_0x1b6b31(0x151)](_0x1b6b31(0x266)) && (_0x162fd6 = _0x174f32[_0x1b6b31(0x230)]['reels_media'][0x0][_0x1b6b31(0x1d2)][_0x26e1be]['id']);
                    }));
                    _0x162fd6 == null && (_0x162fd6 = location[_0x5af858(0x286)][_0x5af858(0x26d)]('/')[_0x5af858(0x12f)](_0x158c4b => _0x158c4b[_0x5af858(0xab)] > 0x0 && _0x158c4b[_0x5af858(0x162)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x2604c6 = await _0x26cb94(_0x162fd6);
                    _0x500c04[_0x5af858(0x2d4)] && (_0x36a6b1 = _0x2604c6[_0x5af858(0x1d2)][0x0]['taken_at']);
                    _0x2604c6['status'] === 'ok' ? _0x2604c6[_0x5af858(0x1d2)][0x0][_0x5af858(0xa1)] ? _0x4b30ad ? _0x54c0cb(_0x2604c6[_0x5af858(0x1d2)][0x0][_0x5af858(0xa1)][0x0]['url']) : _0x2755ba(_0x2604c6[_0x5af858(0x1d2)][0x0]['video_versions'][0x0][_0x5af858(0x22a)], _0x5c4ecb, 'stories', _0x36a6b1, _0x5af858(0x186), _0x162fd6) : _0x4b30ad ? _0x54c0cb(_0x2604c6[_0x5af858(0x1d2)][0x0][_0x5af858(0x16a)][_0x5af858(0x161)][0x0][_0x5af858(0x22a)]) : _0x2755ba(_0x2604c6['items'][0x0][_0x5af858(0x16a)][_0x5af858(0x161)][0x0][_0x5af858(0x22a)], _0x5c4ecb, _0x5af858(0x25d), _0x36a6b1, _0x5af858(0x9b), _0x162fd6) : (_0x500c04['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT'] ? (_0x3c72ee = !![], _0xe46099(_0x2b4475, _0xb57c32, _0x4b30ad)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x2604c6['message']), _0x180cdc(_0x2604c6));
                    _0x22205c(![]);
                    return;
                }
                if (_0x63f2f9(_0x5af858(0x210))[_0x5af858(0xab)] > 0x0) {
                    let _0x167e31 = _0x5af858(0x186), _0x1364c4 = '', _0x1c1274 = location[_0x5af858(0x286)][_0x5af858(0xdd)](/\/$/ig, '')[_0x5af858(0x26d)]('/')['at'](-0x1), _0x2a3d41 = null;
                    if (_0x394254[_0x5af858(0x25d)][_0x5c4ecb] && !_0xb57c32) {
                        _0x180cdc(_0x5af858(0x153), _0x5c4ecb), _0x394254[_0x5af858(0x25d)][_0x5c4ecb]['data'][_0x5af858(0x1ef)][0x0][_0x5af858(0x1d2)][_0x5af858(0x17d)](_0x4f32a7 => {
                            const _0x36b1ff = _0x5af858;
                            _0x4f32a7['id'] == _0x1c1274 && (_0x1364c4 = _0x4f32a7[_0x36b1ff(0x149)][0x0][_0x36b1ff(0x269)], _0x500c04[_0x36b1ff(0x2d4)] && (_0x36a6b1 = _0x4f32a7['taken_at_timestamp'], _0x2a3d41 = _0x4f32a7['id']));
                        });
                        if (_0x1364c4['length'] == 0x0) {
                            _0x180cdc(_0x5af858(0x256), _0x5c4ecb), _0xe46099(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x52ad52 = await _0x55f948(_0x5c4ecb), _0x11f7b1 = _0x52ad52[_0x5af858(0x214)]['pk'], _0x2e1f15 = await _0x3aa5e5(_0x11f7b1);
                        _0x2e1f15['data']['reels_media'][0x0][_0x5af858(0x1d2)][_0x5af858(0x17d)](_0x24e742 => {
                            const _0x2afa02 = _0x5af858;
                            _0x24e742['id'] == _0x1c1274 && (_0x1364c4 = _0x24e742['video_resources'][0x0][_0x2afa02(0x269)], _0x500c04[_0x2afa02(0x2d4)] && (_0x36a6b1 = _0x24e742[_0x2afa02(0x1a3)], _0x2a3d41 = _0x24e742['id']));
                        });
                        if (_0x1364c4[_0x5af858(0xab)] == 0x0) {
                            let _0x4b53dd = _0x63f2f9(_0x5af858(0xa2) + _0x5c4ecb + '\x22]\x20span')['filter'](function () {
                                const _0x563470 = _0x5af858;
                                return _0x63f2f9(this)['children']()[_0x563470(0xab)] === 0x0 && _0x63f2f9(this)[_0x563470(0x221)](_0x563470(0x9c))[_0x563470(0xab)] === 0x0 && _0x63f2f9(this)[_0x563470(0x260)]()?.[_0x563470(0xd8)]() === _0x5c4ecb?.[_0x563470(0xd8)]();
                            })[_0x5af858(0x292)]('div:not([class]):not([style])')['filter'](function () {
                                const _0x13e214 = _0x5af858;
                                return _0x63f2f9(this)['text']()?.[_0x13e214(0xd8)]() !== _0x5c4ecb?.[_0x13e214(0xd8)]();
                            })[_0x5af858(0x12f)](function () {
                                return _0x63f2f9(this)['children']()['length'] > 0x1;
                            })[_0x5af858(0x174)]();
                            _0x4b53dd[_0x5af858(0x177)]()['filter'](function () {
                                const _0xb893b0 = _0x5af858;
                                return _0x63f2f9(this)[_0xb893b0(0x2a1)]() < 0xa;
                            })[_0x5af858(0x174)]()[_0x5af858(0x177)]()[_0x5af858(0x18f)](function (_0x22652b) {
                                const _0x17aa65 = _0x5af858;
                                _0x63f2f9(this)[_0x17aa65(0x177)]()['length'] > 0x0 && (_0x1364c4 = _0x2e1f15[_0x17aa65(0x230)][_0x17aa65(0x1ef)][0x0][_0x17aa65(0x1d2)][_0x22652b]['video_resources'][0x0][_0x17aa65(0x269)], _0x500c04[_0x17aa65(0x2d4)] && (_0x36a6b1 = _0x2e1f15[_0x17aa65(0x230)][_0x17aa65(0x1ef)][0x0][_0x17aa65(0x1d2)][_0x22652b][_0x17aa65(0x1a3)], _0x2a3d41 = _0x2e1f15[_0x17aa65(0x230)][_0x17aa65(0x1ef)][0x0]['items'][_0x22652b]['id']));
                            }), _0x1364c4['length'] == 0x0 && (_0x63f2f9(_0x5af858(0x25f))[_0x5af858(0x18f)](function (_0x57c969) {
                                const _0x48c93d = _0x5af858;
                                _0x63f2f9(this)[_0x48c93d(0x151)](_0x48c93d(0x189)) && (_0x63f2f9(this)['children']()[_0x48c93d(0xab)] > 0x0 && (_0x1364c4 = _0x2e1f15[_0x48c93d(0x230)][_0x48c93d(0x1ef)][0x0][_0x48c93d(0x1d2)][_0x57c969][_0x48c93d(0x149)][0x0][_0x48c93d(0x269)], _0x500c04[_0x48c93d(0x2d4)] && (_0x36a6b1 = _0x2e1f15[_0x48c93d(0x230)][_0x48c93d(0x1ef)][0x0][_0x48c93d(0x1d2)][_0x57c969]['taken_at_timestamp'], _0x2a3d41 = _0x2e1f15[_0x48c93d(0x230)][_0x48c93d(0x1ef)][0x0][_0x48c93d(0x1d2)][_0x57c969]['id'])));
                            }), _0x63f2f9(_0x5af858(0xdb))[_0x5af858(0x18f)](function (_0x92102b) {
                                const _0x4a56cf = _0x5af858;
                                _0x63f2f9(this)['children']()[_0x4a56cf(0x151)](_0x4a56cf(0x266)) && (_0x1364c4 = _0x2e1f15['data']['reels_media'][0x0]['items'][_0x92102b][_0x4a56cf(0x149)][0x0][_0x4a56cf(0x269)], _0x500c04[_0x4a56cf(0x2d4)] && (_0x36a6b1 = _0x2e1f15[_0x4a56cf(0x230)]['reels_media'][0x0][_0x4a56cf(0x1d2)][_0x92102b][_0x4a56cf(0x1a3)], _0x2a3d41 = _0x2e1f15['data'][_0x4a56cf(0x1ef)][0x0]['items'][_0x92102b]['id']));
                            }));
                        }
                        _0x394254[_0x5af858(0x25d)][_0x5c4ecb] = _0x2e1f15;
                    }
                    _0x1364c4['length'] == 0x0 ? alert(_0x37ab59(_0x5af858(0x10d))) : _0x4b30ad ? _0x54c0cb(_0x1364c4) : _0x2755ba(_0x1364c4, _0x5c4ecb, _0x5af858(0x25d), _0x36a6b1, _0x167e31, _0x2a3d41);
                } else {
                    let _0x1cd1ed = _0x63f2f9(_0x5af858(0x122))[_0x5af858(0x2a4)](_0x5af858(0x140))?.[_0x5af858(0x26d)](',')[0x0]?.[_0x5af858(0x26d)]('\x20')[0x0], _0x1008d1 = _0x1cd1ed ? _0x1cd1ed : _0x63f2f9(_0x5af858(0x122))[_0x5af858(0x12f)](function () {
                            const _0x573b9e = _0x5af858;
                            return _0x63f2f9(this)[_0x573b9e(0x292)]('a')['length'] === 0x0 && _0x63f2f9(this)['width']() === _0x63f2f9(this)[_0x573b9e(0x1ea)]()[_0x573b9e(0xac)]();
                        })[_0x5af858(0x2a4)](_0x5af858(0x269));
                    if (!_0x1008d1) {
                        let _0x481cbb = _0x63f2f9('body\x20>\x20div\x20section:visible\x20img._aa63');
                        _0x1008d1 = _0x481cbb[_0x5af858(0x2a4)]('srcset') ? _0x481cbb[_0x5af858(0x2a4)]('srcset')?.[_0x5af858(0x26d)](',')[0x0]?.['split']('\x20')[0x0] : _0x481cbb[_0x5af858(0x2a4)](_0x5af858(0x269));
                    }
                    _0x500c04[_0x5af858(0x2d4)] && (_0x36a6b1 = new Date(_0x63f2f9(_0x5af858(0x12e))[_0x5af858(0x174)]()['attr'](_0x5af858(0x2b0)))[_0x5af858(0x29c)]());
                    let _0x35720c = _0x1008d1, _0x567d84 = _0x5af858(0x9b);
                    _0x4b30ad ? _0x54c0cb(_0x35720c) : _0x2755ba(_0x35720c, _0x5c4ecb, 'stories', _0x36a6b1, _0x567d84, _0x44c000(_0x35720c) ?? '');
                }
                _0x3c72ee = ![], _0x22205c(![]);
            } else {
                let _0xb1801e = _0x5af858(0x17f);
                if (!_0x63f2f9(_0x5af858(0x2c7))[_0x5af858(0xab)]) {
                    _0x394254[_0x5af858(0x25d)] = {};
                    let _0x4b6e40 = null;
                    _0x63f2f9(_0x5af858(0x2e3))[_0x5af858(0xab)] > 0x0 ? _0x4b6e40 = _0x63f2f9(_0x5af858(0x21a)) : (_0x4b6e40 = _0x63f2f9('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x4b6e40[_0x5af858(0x183)](_0x5af858(0x251), _0x5af858(0x2c1)));
                    _0x4b6e40['length'] === 0x0 && (_0x4b6e40 = _0x63f2f9(_0x5af858(0x24c))[_0x5af858(0x1ea)]()[_0x5af858(0x1ea)]()[_0x5af858(0x1ea)]()[_0x5af858(0x221)](_0x5af858(0x1be)), _0x4b6e40[_0x5af858(0x183)](_0x5af858(0x251), _0x5af858(0x2c1)));
                    _0x4b6e40[_0x5af858(0xab)] === 0x0 && (_0x4b6e40 = _0x63f2f9(_0x5af858(0x24c))[_0x5af858(0x1ea)]()[_0x5af858(0x1ea)]()[_0x5af858(0x1ea)]()['find'](_0x5af858(0xea)), _0x4b6e40[_0x5af858(0x183)]('position', _0x5af858(0x2c1)));
                    if (_0x4b6e40['length'] === 0x0) {
                        let _0x160673 = _0x63f2f9('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x5200b4 = 0x0;
                        _0x160673[_0x5af858(0x18f)](function () {
                            const _0x21a21e = _0x5af858;
                            _0x63f2f9(this)[_0x21a21e(0xac)]() > _0x5200b4 && (_0x5200b4 = _0x63f2f9(this)[_0x21a21e(0xac)](), _0x4b6e40 = _0x63f2f9(this)[_0x21a21e(0x177)](_0x21a21e(0x2dc))['first']());
                        });
                    }
                    _0x4b6e40 != null && (_0x4b6e40[_0x5af858(0x174)]()['css'](_0x5af858(0x251), _0x5af858(0x2c1)), _0x4b6e40['first']()[_0x5af858(0x225)](_0x5af858(0xa6) + _0x37ab59('DW') + _0x5af858(0xec) + _0x37aca1['DOWNLOAD'] + _0x5af858(0x11b)), _0x4b6e40[_0x5af858(0x174)]()[_0x5af858(0x225)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x37ab59(_0x5af858(0x1d5)) + _0x5af858(0xe3) + _0x37aca1['NEW_TAB'] + _0x5af858(0x11b)), _0x4b6e40['find'](_0x5af858(0xa5))['each'](function () {
                        const _0x270c95 = _0x5af858;
                        _0x63f2f9(this)['on'](_0x270c95(0x244), function () {
                            const _0x2bb3c5 = _0x270c95;
                            !_0x63f2f9(this)[_0x2bb3c5(0x230)](_0x2bb3c5(0x169)) && (_0x4b6e40[_0x2bb3c5(0x221)](_0x2bb3c5(0x28d))[_0x2bb3c5(0xab)] === 0x0 ? (_0x63f2f9(this)[_0x2bb3c5(0x2a4)](_0x2bb3c5(0x19a), !![]), _0x63f2f9(_0x2bb3c5(0x28d))[_0x2bb3c5(0xad)](), _0x180cdc(_0x2bb3c5(0xc0))) : (_0x63f2f9(this)[_0x2bb3c5(0x2a4)](_0x2bb3c5(0x19a), !![]), _0x180cdc(_0x2bb3c5(0x21b))));
                        });
                    }));
                }
            }
        }
        async function _0x552809(_0x3651c5, _0x114f82) {
            const _0x4755ab = _0x1ad2d2;
            if (_0x3651c5) {
                let _0x2f1c13 = new Date()['getTime'](), _0x41de54 = Math[_0x4755ab(0x29f)](_0x2f1c13 / 0x3e8), _0x4a1315 = _0x4755ab(0x9b), _0x1ab026 = _0x63f2f9('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x4755ab(0x174)]()['text']() || location['pathname'][_0x4755ab(0x26d)]('/')['at'](0x2), _0x2189d4 = _0x4755ab(0x117), _0x1b9e7c = location[_0x4755ab(0x286)][_0x4755ab(0xdd)](/\/$/ig, '')[_0x4755ab(0x26d)]('/')['at'](-0x1), _0x40cb9f = '', _0x535e65 = null;
                _0x22205c(!![]);
                if (_0x500c04[_0x4755ab(0xaa)] && !_0x3c72ee) {
                    let _0x42584b = await _0x55f948(_0x1ab026), _0xde6f7a = _0x42584b[_0x4755ab(0x214)]['pk'], _0x5d4857 = await _0x3aa5e5(_0xde6f7a), _0x4f9897 = location[_0x4755ab(0x286)][_0x4755ab(0x26d)]('/')[_0x4755ab(0x12f)](_0x17be6c => _0x17be6c['length'] > 0x0 && _0x17be6c[_0x4755ab(0x162)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x5d4857[_0x4755ab(0x230)][_0x4755ab(0x1ef)][0x0]['items'][_0x4755ab(0x17d)](_0x4910c2 => {
                        _0x4910c2['id'] == _0x4f9897 && (_0x535e65 = _0x4910c2['id']);
                    });
                    if (_0x535e65 == null) {
                        let _0x5e81ad = _0x63f2f9(_0x4755ab(0xa2) + _0x1ab026 + _0x4755ab(0x2b9))[_0x4755ab(0x12f)](function () {
                            const _0x2f9dfc = _0x4755ab;
                            return _0x63f2f9(this)[_0x2f9dfc(0x177)]()[_0x2f9dfc(0xab)] === 0x0 && _0x63f2f9(this)['find']('svg')[_0x2f9dfc(0xab)] === 0x0 && _0x63f2f9(this)[_0x2f9dfc(0x260)]()?.[_0x2f9dfc(0xd8)]() === _0x1ab026?.['toLowerCase']();
                        })[_0x4755ab(0x292)](_0x4755ab(0x18c))[_0x4755ab(0x12f)](function () {
                            const _0x4efde1 = _0x4755ab;
                            return _0x63f2f9(this)[_0x4efde1(0x260)]()?.[_0x4efde1(0xd8)]() !== _0x1ab026?.['toLowerCase']();
                        })[_0x4755ab(0x12f)](function () {
                            const _0x50a674 = _0x4755ab;
                            return _0x63f2f9(this)[_0x50a674(0x177)]()[_0x50a674(0xab)] > 0x1;
                        })[_0x4755ab(0x174)]();
                        _0x5e81ad['children']()['filter'](function () {
                            return _0x63f2f9(this)['height']() < 0xa;
                        })[_0x4755ab(0x174)]()['children']()[_0x4755ab(0x18f)](function (_0x4efbcc) {
                            const _0x698f65 = _0x4755ab;
                            _0x63f2f9(this)['children']()[_0x698f65(0xab)] > 0x0 && (_0x535e65 = _0x5d4857[_0x698f65(0x230)][_0x698f65(0x1ef)][0x0][_0x698f65(0x1d2)][_0x4efbcc]['id']);
                        });
                    }
                    _0x535e65 == null && (_0x63f2f9(_0x4755ab(0x25f))[_0x4755ab(0x18f)](function (_0x584ca4) {
                        const _0x416236 = _0x4755ab;
                        _0x63f2f9(this)[_0x416236(0x151)](_0x416236(0x189)) && (_0x63f2f9(this)[_0x416236(0x177)]()['length'] > 0x0 && (_0x535e65 = _0x5d4857['data']['reels_media'][0x0][_0x416236(0x1d2)][_0x584ca4]['id']));
                    }), _0x63f2f9(_0x4755ab(0xdb))['each'](function (_0x22002f) {
                        const _0x34a931 = _0x4755ab;
                        _0x63f2f9(this)[_0x34a931(0x177)]()['hasClass']('_ac3q') && (_0x535e65 = _0x5d4857[_0x34a931(0x230)][_0x34a931(0x1ef)][0x0]['items'][_0x22002f]['id']);
                    }));
                    _0x535e65 == null && (_0x535e65 = location['pathname'][_0x4755ab(0x26d)]('/')['filter'](_0x59e81c => _0x59e81c['length'] > 0x0 && _0x59e81c[_0x4755ab(0x162)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x525d7b = await _0x26cb94(_0x535e65);
                    _0x500c04[_0x4755ab(0x2d4)] && (_0x41de54 = _0x525d7b['items'][0x0]['taken_at']);
                    _0x525d7b[_0x4755ab(0x26f)] === 'ok' ? _0x2755ba(_0x525d7b[_0x4755ab(0x1d2)][0x0][_0x4755ab(0x16a)][_0x4755ab(0x161)][0x0]['url'], _0x1ab026, _0x4755ab(0x25d), _0x41de54, _0x4755ab(0x9b), _0x535e65) : (_0x500c04[_0x4755ab(0x158)] ? (_0x3c72ee = !![], _0x552809(!![], _0x114f82)) : alert(_0x4755ab(0x229) + _0x525d7b[_0x4755ab(0x1f2)]), _0x180cdc(_0x525d7b));
                    _0x22205c(![]);
                    return;
                }
                if (_0x394254[_0x4755ab(0x25d)][_0x1ab026] && !_0x114f82) {
                    _0x180cdc(_0x4755ab(0x153), _0x1ab026), _0x394254['stories'][_0x1ab026][_0x4755ab(0x230)][_0x4755ab(0x1ef)][0x0][_0x4755ab(0x1d2)]['forEach'](_0x38e862 => {
                        const _0x2bbd11 = _0x4755ab;
                        _0x38e862['id'] == _0x1b9e7c && (_0x40cb9f = _0x38e862['display_url'], _0x500c04[_0x2bbd11(0x2d4)] && (_0x41de54 = _0x38e862[_0x2bbd11(0x1a3)], _0x535e65 = _0x38e862['id']));
                    });
                    if (_0x40cb9f[_0x4755ab(0xab)] == 0x0) {
                        _0x180cdc(_0x4755ab(0x256), _0x1ab026), _0x552809(!![], !![]);
                        return;
                    }
                } else {
                    let _0x59f2a2 = await _0x55f948(_0x1ab026), _0x5abd51 = _0x59f2a2[_0x4755ab(0x214)]['pk'], _0x3e0d6f = await _0x3aa5e5(_0x5abd51);
                    _0x3e0d6f['data'][_0x4755ab(0x1ef)][0x0][_0x4755ab(0x1d2)][_0x4755ab(0x17d)](_0x27330 => {
                        const _0x5b86c2 = _0x4755ab;
                        _0x27330['id'] == _0x1b9e7c && (_0x40cb9f = _0x27330['display_url'], _0x500c04['RENAME_PUBLISH_DATE'] && (_0x41de54 = _0x27330[_0x5b86c2(0x1a3)], _0x535e65 = _0x27330['id']));
                    });
                    if (_0x40cb9f[_0x4755ab(0xab)] == 0x0) {
                        let _0x23a7c0 = _0x63f2f9(_0x4755ab(0xa2) + _0x1ab026 + _0x4755ab(0x2b9))['filter'](function () {
                            const _0x30c526 = _0x4755ab;
                            return _0x63f2f9(this)[_0x30c526(0x177)]()[_0x30c526(0xab)] === 0x0 && _0x63f2f9(this)[_0x30c526(0x221)](_0x30c526(0x9c))[_0x30c526(0xab)] === 0x0 && _0x63f2f9(this)[_0x30c526(0x260)]()?.[_0x30c526(0xd8)]() === _0x1ab026?.['toLowerCase']();
                        })[_0x4755ab(0x292)](_0x4755ab(0x18c))[_0x4755ab(0x12f)](function () {
                            const _0x45245c = _0x4755ab;
                            return _0x63f2f9(this)['text']()?.[_0x45245c(0xd8)]() !== _0x1ab026?.[_0x45245c(0xd8)]();
                        })[_0x4755ab(0x12f)](function () {
                            return _0x63f2f9(this)['children']()['length'] > 0x1;
                        })[_0x4755ab(0x174)]();
                        _0x23a7c0[_0x4755ab(0x177)]()[_0x4755ab(0x12f)](function () {
                            const _0x2d54fd = _0x4755ab;
                            return _0x63f2f9(this)[_0x2d54fd(0x2a1)]() < 0xa;
                        })['first']()[_0x4755ab(0x177)]()[_0x4755ab(0x18f)](function (_0x4cb90b) {
                            const _0x556676 = _0x4755ab;
                            _0x63f2f9(this)[_0x556676(0x177)]()['length'] > 0x0 && (_0x40cb9f = _0x3e0d6f[_0x556676(0x230)]['reels_media'][0x0][_0x556676(0x1d2)][_0x4cb90b][_0x556676(0x1c1)], _0x500c04[_0x556676(0x2d4)] && (_0x41de54 = _0x3e0d6f['data'][_0x556676(0x1ef)][0x0][_0x556676(0x1d2)][_0x4cb90b][_0x556676(0x1a3)], _0x535e65 = _0x3e0d6f[_0x556676(0x230)]['reels_media'][0x0]['items'][_0x4cb90b]['id']));
                        }), _0x40cb9f['length'] == 0x0 && (_0x63f2f9(_0x4755ab(0x25f))[_0x4755ab(0x18f)](function (_0x20e0d4) {
                            const _0x52b2ec = _0x4755ab;
                            _0x63f2f9(this)['hasClass'](_0x52b2ec(0x189)) && (_0x63f2f9(this)['children']()['length'] > 0x0 && (_0x40cb9f = _0x3e0d6f[_0x52b2ec(0x230)]['reels_media'][0x0][_0x52b2ec(0x1d2)][_0x20e0d4]['display_url'], _0x500c04[_0x52b2ec(0x2d4)] && (_0x41de54 = _0x3e0d6f[_0x52b2ec(0x230)][_0x52b2ec(0x1ef)][0x0][_0x52b2ec(0x1d2)][_0x20e0d4]['taken_at_timestamp'], _0x535e65 = _0x3e0d6f['data']['reels_media'][0x0][_0x52b2ec(0x1d2)][_0x20e0d4]['id'])));
                        }), _0x63f2f9(_0x4755ab(0xdb))[_0x4755ab(0x18f)](function (_0x32b18d) {
                            const _0x187af4 = _0x4755ab;
                            _0x63f2f9(this)['children']()[_0x187af4(0x151)]('_ac3q') && (_0x40cb9f = _0x3e0d6f[_0x187af4(0x230)][_0x187af4(0x1ef)][0x0]['items'][_0x32b18d][_0x187af4(0x1c1)], _0x500c04['RENAME_PUBLISH_DATE'] && (_0x41de54 = _0x3e0d6f['data'][_0x187af4(0x1ef)][0x0][_0x187af4(0x1d2)][_0x32b18d][_0x187af4(0x1a3)], _0x535e65 = _0x3e0d6f['data'][_0x187af4(0x1ef)][0x0]['items'][_0x32b18d]['id']));
                        }));
                    }
                }
                _0x2755ba(_0x40cb9f, _0x1ab026, 'thumbnail', _0x41de54, _0x4a1315, _0x535e65), _0x3c72ee = ![], _0x22205c(![]);
            } else {
                if (_0x63f2f9('body\x20>\x20div\x20div.IG_DWSTORY')['parent']()[_0x4755ab(0x221)](_0x4755ab(0x188))['length']) {
                    let _0x35a37f = null;
                    _0x63f2f9('body\x20>\x20div\x20section._ac0a')[_0x4755ab(0xab)] > 0x0 ? _0x35a37f = _0x63f2f9('body\x20>\x20div\x20section:visible._ac0a') : (_0x35a37f = _0x63f2f9('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x35a37f[_0x4755ab(0x183)]('position', 'relative'));
                    _0x35a37f[_0x4755ab(0xab)] === 0x0 && (_0x35a37f = _0x63f2f9(_0x4755ab(0x24c))['parent']()['parent']()[_0x4755ab(0x1ea)]()[_0x4755ab(0x221)](_0x4755ab(0x1be)), _0x35a37f['css'](_0x4755ab(0x251), _0x4755ab(0x2c1)));
                    _0x35a37f[_0x4755ab(0xab)] === 0x0 && (_0x35a37f = _0x63f2f9(_0x4755ab(0x24c))['parent']()[_0x4755ab(0x1ea)]()['parent']()['find'](_0x4755ab(0xea)), _0x35a37f[_0x4755ab(0x183)](_0x4755ab(0x251), 'relative'));
                    if (_0x35a37f[_0x4755ab(0xab)] === 0x0) {
                        let _0x39dbf2 = _0x63f2f9(_0x4755ab(0x1f9)), _0x354f5b = 0x0;
                        _0x39dbf2['each'](function () {
                            const _0x4ac0a2 = _0x4755ab;
                            _0x63f2f9(this)[_0x4ac0a2(0xac)]() > _0x354f5b && (_0x354f5b = _0x63f2f9(this)[_0x4ac0a2(0xac)](), _0x35a37f = _0x63f2f9(this)[_0x4ac0a2(0x177)]('div')[_0x4ac0a2(0x174)]());
                        });
                    }
                    _0x35a37f != null && (_0x35a37f[_0x4755ab(0x174)]()[_0x4755ab(0x183)](_0x4755ab(0x251), _0x4755ab(0x2c1)), _0x35a37f[_0x4755ab(0x174)]()[_0x4755ab(0x225)](_0x4755ab(0x219) + _0x37ab59('THUMBNAIL_INTRO') + _0x4755ab(0x263) + _0x37aca1[_0x4755ab(0xfb)] + _0x4755ab(0x11b)));
                }
            }
        }
        async function _0x3799cd(_0x1b92d2, _0x37fd4e, _0x3813ed) {
            const _0xb2df5d = _0x1ad2d2;
            if (_0x1b92d2) {
                _0x22205c(!![]);
                let _0x55f9da = location['href'][_0xb2df5d(0x26d)]('?')['at'](0x0)[_0xb2df5d(0x26d)]('instagram.com/reels/')['at'](-0x1)[_0xb2df5d(0xcb)]('/', ''), _0x3729b1 = await _0x452ca6(_0x55f9da), _0x55275a = _0x3729b1[_0xb2df5d(0x230)], _0x3d2648 = new Date()[_0xb2df5d(0x29c)]();
                _0x500c04['RENAME_PUBLISH_DATE'] && (_0x3729b1[_0xb2df5d(0x14a)] === _0xb2df5d(0x2a5) ? _0x3d2648 = _0x55275a['shortcode_media'][_0xb2df5d(0x1a3)] : _0x3d2648 = _0x55275a[_0xb2df5d(0x1f5)]);
                if (_0x3729b1['type'] === _0xb2df5d(0x2a5)) {
                    if (_0x37fd4e && _0x55275a[_0xb2df5d(0x1a0)][_0xb2df5d(0x283)]) {
                        if (_0x3813ed)
                            _0x54c0cb(_0x55275a['shortcode_media'][_0xb2df5d(0x2e2)]);
                        else {
                            let _0x326934 = _0xb2df5d(0x186);
                            _0x2755ba(_0x55275a[_0xb2df5d(0x1a0)][_0xb2df5d(0x2e2)], _0x55275a['shortcode_media']['owner']['username'], _0xb2df5d(0x134), _0x3d2648, _0x326934, _0x55f9da);
                        }
                    } else {
                        if (_0x3813ed)
                            _0x54c0cb(_0x55275a[_0xb2df5d(0x1a0)][_0xb2df5d(0x2ee)]['at'](-0x1)[_0xb2df5d(0x269)]);
                        else {
                            let _0x39bfc8 = _0xb2df5d(0x9b);
                            _0x2755ba(_0x55275a[_0xb2df5d(0x1a0)]['display_resources']['at'](-0x1)[_0xb2df5d(0x269)], _0x55275a[_0xb2df5d(0x1a0)]['owner']['username'], _0xb2df5d(0x134), _0x3d2648, _0x39bfc8, _0x55f9da);
                        }
                    }
                } else {
                    if (_0x37fd4e && _0x55275a[_0xb2df5d(0xa1)] != null) {
                        if (_0x3813ed)
                            _0x54c0cb(_0x55275a[_0xb2df5d(0xa1)][0x0][_0xb2df5d(0x22a)]);
                        else {
                            let _0x1eee2f = _0xb2df5d(0x186);
                            _0x2755ba(_0x55275a[_0xb2df5d(0xa1)][0x0][_0xb2df5d(0x22a)], _0x55275a[_0xb2df5d(0xd4)][_0xb2df5d(0x25e)], _0xb2df5d(0x134), _0x3d2648, _0x1eee2f, _0x55f9da);
                        }
                    } else {
                        if (_0x3813ed)
                            _0x54c0cb(_0x55275a[_0xb2df5d(0x16a)]['candidates'][0x0][_0xb2df5d(0x22a)]);
                        else {
                            let _0x36faac = _0xb2df5d(0x9b);
                            _0x2755ba(_0x55275a['image_versions2']['candidates'][0x0][_0xb2df5d(0x22a)], _0x55275a[_0xb2df5d(0xd4)]['username'], _0xb2df5d(0x134), _0x3d2648, _0x36faac, _0x55f9da);
                        }
                    }
                }
                _0x22205c(![]);
            } else
                var _0x24d5bd = setInterval(() => {
                    const _0x3baf86 = _0xb2df5d;
                    _0x63f2f9('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')[_0x3baf86(0xab)] > 0x0 && (clearInterval(_0x24d5bd), _0x500c04['SCROLL_BUTTON'] && (_0x63f2f9(_0x3baf86(0xb2))[_0x3baf86(0xad)](), _0x63f2f9('section\x20>\x20main[role=\x22main\x22]')[_0x3baf86(0x225)]('<section\x20id=\x22scrollWrapper\x22></section>'), _0x63f2f9(_0x3baf86(0x1d3))[_0x3baf86(0x225)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x63f2f9(_0x3baf86(0x1d3))[_0x3baf86(0x225)](_0x3baf86(0x222)), _0x63f2f9(_0x3baf86(0x293))['on'](_0x3baf86(0x224), function () {
                        const _0x120c90 = _0x3baf86;
                        _0x63f2f9('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x120c90(0x160)]({
                            'top': -0x1e,
                            'behavior': _0x120c90(0x103)
                        });
                    }), _0x63f2f9(_0x3baf86(0x15c))['on'](_0x3baf86(0x224), function () {
                        const _0x325f48 = _0x3baf86;
                        _0x63f2f9(_0x325f48(0x1a9))[0x0][_0x325f48(0x160)]({
                            'top': 0x1e,
                            'behavior': _0x325f48(0x103)
                        });
                    })), _0x63f2f9('section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]')['children']('div')['each'](function () {
                        const _0xcdbab1 = _0x3baf86;
                        if (_0x63f2f9(this)[_0xcdbab1(0x177)]()[_0xcdbab1(0xab)] > 0x0) {
                            if (!_0x63f2f9(this)[_0xcdbab1(0x177)]()['find']('.IG_REELS')[_0xcdbab1(0xab)]) {
                                var _0x40ed0c = _0x63f2f9(this);
                                _0x63f2f9(this)[_0xcdbab1(0x177)]()[_0xcdbab1(0x183)](_0xcdbab1(0x251), _0xcdbab1(0x2c1)), _0x63f2f9(this)['children']()[_0xcdbab1(0x225)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x37ab59('DW') + _0xcdbab1(0x2e0) + _0x37aca1['DOWNLOAD'] + _0xcdbab1(0x11b)), _0x63f2f9(this)[_0xcdbab1(0x177)]()[_0xcdbab1(0x225)](_0xcdbab1(0x23b) + _0x37ab59(_0xcdbab1(0x1d5)) + _0xcdbab1(0x1db) + _0x37aca1['NEW_TAB'] + '</div>'), _0x63f2f9(this)[_0xcdbab1(0x177)]()['append']('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x37ab59(_0xcdbab1(0x133)) + _0xcdbab1(0x1e7) + _0x37aca1[_0xcdbab1(0xfb)] + '</div>');
                                _0x500c04[_0xcdbab1(0x295)] && _0x63f2f9(this)['find']('video')[_0xcdbab1(0x18f)](function () {
                                    const _0x207c66 = _0xcdbab1;
                                    _0x63f2f9(this)['on'](_0x207c66(0x144), function () {
                                        const _0x227c48 = _0x207c66;
                                        if (!_0x63f2f9(this)['data'](_0x227c48(0x288))) {
                                            let _0x1fc787 = _0x63f2f9(this)['next']()[_0x227c48(0x221)](_0x227c48(0x1b5))['parents'](_0x227c48(0x2cf));
                                            _0x1fc787[_0x227c48(0xab)] > 0x0 ? (_0x63f2f9(this)[_0x227c48(0x2a4)]('data-loop', !![]), _0x1fc787[_0x227c48(0x224)](), _0x180cdc('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()')) : (_0x63f2f9(this)[_0x227c48(0x2a4)]('data-loop', !![]), _0x63f2f9(this)[_0x227c48(0x1ea)]()[_0x227c48(0x221)](_0x227c48(0x143))['removeAttr']('style'), this[_0x227c48(0x2ab)](), _0x180cdc(_0x227c48(0x185)));
                                        }
                                    });
                                });
                                _0x500c04[_0xcdbab1(0xf9)] && _0x63f2f9(this)['find'](_0xcdbab1(0x20b))['each'](function () {
                                    const _0x187b18 = _0xcdbab1;
                                    if (!_0x63f2f9(this)[_0x187b18(0x230)]('controls')) {
                                        let _0x35cadc = _0x63f2f9(this);
                                        _0x180cdc(_0x187b18(0x27b)), this[_0x187b18(0x1b3)] = _0xabfde5, _0x63f2f9(this)['on'](_0x187b18(0x2b7), function () {
                                            const _0x3c0bae = _0x187b18;
                                            this[_0x3c0bae(0x1b3)] = _0xabfde5;
                                        }), _0x63f2f9(this)['on']('contextmenu', function (_0x4d5275) {
                                            const _0x332407 = _0x187b18;
                                            _0x4d5275[_0x332407(0x13c)](), _0x35cadc['css'](_0x332407(0x26e), '-1'), _0x35cadc[_0x332407(0x19f)]('controls');
                                        }), _0x63f2f9(this)[_0x187b18(0x1ea)]()[_0x187b18(0x221)]('video\x20+\x20div\x20div[role=\x22button\x22]')[_0x187b18(0x12f)](function () {
                                            const _0x48f9cb = _0x187b18;
                                            return _0x63f2f9(this)['parent'](_0x48f9cb(0x139))[_0x48f9cb(0xab)] > 0x0 && _0x63f2f9(this)['css'](_0x48f9cb(0x141)) === _0x48f9cb(0xb4) && _0x63f2f9(this)['attr'](_0x48f9cb(0x2e5)) != null;
                                        })[_0x187b18(0x174)]()['on'](_0x187b18(0xaf), function (_0x555576) {
                                            const _0x2d6d26 = _0x187b18;
                                            _0x555576['preventDefault'](), _0x35cadc[_0x2d6d26(0x183)](_0x2d6d26(0x26e), '2'), _0x35cadc[_0x2d6d26(0x2a4)](_0x2d6d26(0x1a7), !![]);
                                        }), _0x63f2f9(this)['on'](_0x187b18(0x22d), function () {
                                            const _0x40cd9c = _0x187b18;
                                            let _0x14b01b = _0x63f2f9(this)[_0x40cd9c(0x1ea)]()[_0x40cd9c(0x221)](_0x40cd9c(0x245))['find'](_0x40cd9c(0x2a7))[_0x40cd9c(0x12f)](function (_0x3ba49f) {
                                                const _0x25f3ee = _0x40cd9c;
                                                return _0x63f2f9(this)[_0x25f3ee(0xac)]() <= 0x40 && _0x63f2f9(this)[_0x25f3ee(0x2a1)]() <= 0x40 && _0x63f2f9(this)[_0x25f3ee(0x221)](_0x25f3ee(0x1dd))[_0x25f3ee(0xab)] > 0x0;
                                            });
                                            var _0x6aa3c8 = _0x14b01b[_0x40cd9c(0x221)](_0x40cd9c(0x2fc))[_0x40cd9c(0xab)] === 0x0;
                                            this['muted'] != _0x6aa3c8 && (this[_0x40cd9c(0x1b3)] = _0xabfde5, _0x14b01b?.[_0x40cd9c(0x224)]()), _0x63f2f9(this)[_0x40cd9c(0x2a4)]('data-completed') && (_0xabfde5 = this['volume'], GM_setValue(_0x40cd9c(0xde), this[_0x40cd9c(0x1b3)])), this[_0x40cd9c(0x1b3)] == _0xabfde5 && _0x63f2f9(this)[_0x40cd9c(0x2a4)]('data-completed', !![]);
                                        }), _0x63f2f9(this)[_0x187b18(0x183)]('position', _0x187b18(0x1de)), _0x63f2f9(this)['css']('z-index', '2'), _0x63f2f9(this)[_0x187b18(0x2a4)]('data-controls', !![]), _0x63f2f9(this)[_0x187b18(0x2a4)](_0x187b18(0x1a7), !![]);
                                    }
                                });
                                var _0x1bd210 = _0x40ed0c['find'](_0xcdbab1(0x20b)), _0x47df43 = _0x63f2f9(this)[_0xcdbab1(0x221)](_0xcdbab1(0x1f6))[_0xcdbab1(0x174)]();
                                _0x23f3cf(_0x1bd210, _0x47df43, 'reel');
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x44c000(_0x213329) {
            const _0x372c74 = _0x1ad2d2;
            let _0x153541 = new URL(_0x213329), _0x1a5cf4 = _0x153541?.[_0x372c74(0x1a5)]?.['get']('ig_cache_key')?.[_0x372c74(0x26d)]('.')['at'](0x0);
            return _0x1a5cf4 ? atob(_0x1a5cf4) : null;
        }
        function _0x2dd7e4(_0x6ac1bf) {
            return new Promise((_0x2c1015, _0x1b8399) => {
                const _0x5c5415 = a0_0x325c;
                let _0x5e0490 = 'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22' + _0x6ac1bf + _0x5c5415(0x20a);
                GM_xmlhttpRequest({
                    'method': _0x5c5415(0x2e1),
                    'url': _0x5e0490,
                    'onload': function (_0x14f115) {
                        const _0x1a2334 = _0x5c5415;
                        try {
                            let _0x7c7f01 = JSON[_0x1a2334(0x115)](_0x14f115[_0x1a2334(0x1aa)]);
                            _0x2c1015(_0x7c7f01);
                        } catch (_0x506500) {
                            _0x180cdc(_0x1a2334(0x113), 'reject', _0x506500[_0x1a2334(0x1f2)]), _0x1b8399(_0x506500);
                        }
                    },
                    'onerror': function (_0x4283b5) {
                        const _0x3539a4 = _0x5c5415;
                        _0x180cdc(_0x3539a4(0x113), _0x3539a4(0x2e6), _0x4283b5), _0x1b8399(_0x4283b5);
                    }
                });
            });
        }
        function _0x3aa5e5(_0x331531) {
            return new Promise((_0x46c61c, _0x473017) => {
                const _0x279681 = a0_0x325c;
                let _0x4c0c63 = _0x279681(0x22c) + _0x331531 + _0x279681(0x20a);
                GM_xmlhttpRequest({
                    'method': _0x279681(0x2e1),
                    'url': _0x4c0c63,
                    'onload': function (_0x13c202) {
                        const _0x19f19b = _0x279681;
                        try {
                            let _0x30d4ef = JSON[_0x19f19b(0x115)](_0x13c202[_0x19f19b(0x1aa)]);
                            _0x180cdc(_0x19f19b(0x237), _0x30d4ef), _0x46c61c(_0x30d4ef);
                        } catch (_0x4ffa75) {
                            _0x180cdc(_0x19f19b(0x237), _0x19f19b(0x2e6), _0x4ffa75[_0x19f19b(0x1f2)]), _0x473017(_0x4ffa75);
                        }
                    },
                    'onerror': function (_0x24187d) {
                        const _0x22430f = _0x279681;
                        _0x180cdc(_0x22430f(0x237), 'reject', _0x24187d), _0x473017(_0x24187d);
                    }
                });
            });
        }
        function _0x55f948(_0x52f143) {
            return new Promise((_0x4d83aa, _0x2fe4c3) => {
                const _0x40d0c6 = a0_0x325c;
                let _0x21082b = _0x40d0c6(0x220) + _0x52f143;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x21082b,
                    'onload': function (_0x54fc1c) {
                        const _0x4d0576 = _0x40d0c6;
                        let _0x2a885f = JSON[_0x4d0576(0x115)](_0x54fc1c[_0x4d0576(0x1aa)]), _0x3ef69f = null;
                        _0x2a885f[_0x4d0576(0x102)]['forEach'](_0x85d1a1 => {
                            const _0x2de34b = _0x4d0576;
                            _0x85d1a1[_0x2de34b(0x214)][_0x2de34b(0x25e)]?.[_0x2de34b(0xd8)]() === _0x52f143?.[_0x2de34b(0xd8)]() && (_0x3ef69f = _0x85d1a1);
                        }), _0x3ef69f != null ? (_0x180cdc(_0x4d0576(0x24d), _0x3ef69f), _0x4d83aa(_0x3ef69f)) : _0x10af63(_0x52f143)[_0x4d0576(0xfd)](_0x42be4e => {
                            _0x4d83aa(_0x42be4e);
                        })['catch'](_0xb60c49 => {
                            const _0x2215ee = _0x4d0576;
                            alert(_0x2215ee(0xae));
                        });
                    },
                    'onerror': function (_0x2712ec) {
                        const _0x76447f = _0x40d0c6;
                        _0x180cdc(_0x76447f(0x24d), _0x76447f(0x2e6), _0x2712ec), _0x2fe4c3(_0x2712ec);
                    }
                });
            });
        }
        function _0x10af63(_0x5211b5) {
            return new Promise((_0x4412e9, _0x364122) => {
                const _0x2225a3 = a0_0x325c;
                let _0x225863 = _0x2225a3(0xa3) + _0x5211b5;
                GM_xmlhttpRequest({
                    'method': _0x2225a3(0x2e1),
                    'url': _0x225863,
                    'headers': { 'X-IG-App-ID': _0xb46fe2() },
                    'onload': function (_0x4b70ce) {
                        const _0x2372e5 = _0x2225a3;
                        try {
                            let _0x4ee7c6 = JSON[_0x2372e5(0x115)](_0x4b70ce[_0x2372e5(0x1aa)]), _0x4eff8f = _0x4ee7c6?.[_0x2372e5(0x230)]?.[_0x2372e5(0x214)];
                            if (_0x4eff8f != null) {
                                let _0x2b6fe4 = _0x4ee7c6?.[_0x2372e5(0x230)];
                                _0x2b6fe4[_0x2372e5(0x214)]['pk'] = _0x2b6fe4['user']['id'], _0x180cdc(_0x2372e5(0x106), _0x4ee7c6), _0x4412e9(_0x2b6fe4);
                            } else
                                _0x180cdc(_0x2372e5(0x106), _0x2372e5(0x2e6), _0x2372e5(0x232)), _0x364122(_0x2372e5(0x232));
                        } catch (_0x310bce) {
                            _0x180cdc('getUserIdWithAgent()', _0x2372e5(0x2e6), _0x310bce[_0x2372e5(0x1f2)]), _0x364122(_0x310bce);
                        }
                    },
                    'onerror': function (_0x445263) {
                        const _0x276347 = _0x2225a3;
                        _0x180cdc(_0x276347(0x106), _0x276347(0x2e6), _0x445263), _0x364122(_0x445263);
                    }
                });
            });
        }
        function _0x159d60(_0x50216a) {
            return new Promise((_0x340163, _0x163acc) => {
                const _0x5e6be6 = a0_0x325c;
                let _0x4e93f3 = _0x5e6be6(0x1ed) + _0x50216a + _0x5e6be6(0xca);
                GM_xmlhttpRequest({
                    'method': _0x5e6be6(0x2e1),
                    'url': _0x4e93f3,
                    'headers': { 'User-Agent': _0x5e6be6(0x16d) },
                    'onload': function (_0x317bb9) {
                        const _0x9249a1 = _0x5e6be6;
                        try {
                            let _0x583823 = JSON[_0x9249a1(0x115)](_0x317bb9[_0x9249a1(0x1aa)]);
                            _0x583823[_0x9249a1(0x26f)] !== 'ok' ? (_0x180cdc(_0x9249a1(0x241), _0x9249a1(0x2e6), _0x583823), _0x163acc('faild')) : (_0x180cdc('getUserHighSizeProfile()', _0x583823), _0x340163(_0x583823[_0x9249a1(0x214)]['hd_profile_pic_url_info']?.['url']));
                        } catch (_0x28ee47) {
                            _0x180cdc('getUserHighSizeProfile()', _0x9249a1(0x2e6), _0x28ee47), _0x163acc(_0x28ee47);
                        }
                    },
                    'onerror': function (_0x15bb7d) {
                        const _0x46d61b = _0x5e6be6;
                        _0x180cdc(_0x46d61b(0x241), _0x46d61b(0x2e6), _0x15bb7d), _0x163acc(_0x15bb7d);
                    }
                });
            });
        }
        function _0x27d622(_0x4ee824) {
            return new Promise((_0xd4102f, _0x7f780c) => {
                const _0x54a9e8 = a0_0x325c;
                if (!_0x4ee824)
                    _0x7f780c('NOPATH');
                let _0x6872a7 = _0x4ee824, _0x5587e3 = _0x54a9e8(0x275) + _0x6872a7 + _0x54a9e8(0x257);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x5587e3,
                    'onload': function (_0xcf855a) {
                        const _0x247c4c = _0x54a9e8;
                        try {
                            let _0x128115 = JSON[_0x247c4c(0x115)](_0xcf855a['response']);
                            _0x180cdc(_0x247c4c(0x19d), _0x128115), _0xd4102f(_0x128115['data'][_0x247c4c(0x1a0)][_0x247c4c(0xd4)]['username']);
                        } catch (_0x35c857) {
                            _0x180cdc(_0x247c4c(0x19d), 'reject', _0x35c857[_0x247c4c(0x1f2)]), _0x7f780c(_0x35c857);
                        }
                    },
                    'onerror': function (_0x40da0b) {
                        const _0x45cc28 = _0x54a9e8;
                        _0x180cdc('getPostOwner()', _0x45cc28(0x2e6), _0x40da0b), _0x7f780c(_0x40da0b);
                    }
                });
            });
        }
        function _0x452ca6(_0x7b5793) {
            return new Promise((_0x147d45, _0x43ceb1) => {
                const _0x13f3d4 = a0_0x325c;
                if (!_0x7b5793)
                    _0x43ceb1('NOPATH');
                let _0x194c8c = _0x7b5793, _0x3b48c1 = _0x13f3d4(0x275) + _0x194c8c + _0x13f3d4(0x257);
                GM_xmlhttpRequest({
                    'method': _0x13f3d4(0x2e1),
                    'url': _0x3b48c1,
                    'headers': { 'User-Agent': _0x13f3d4(0x16d) },
                    'onload': function (_0x11031f) {
                        const _0x15f230 = _0x13f3d4;
                        try {
                            let _0x2791c6 = JSON[_0x15f230(0x115)](_0x11031f[_0x15f230(0x1aa)]);
                            _0x180cdc(_0x2791c6), _0x2791c6[_0x15f230(0x26f)] === _0x15f230(0x165) ? (_0x180cdc(_0x15f230(0x1a6), _0x15f230(0x12a), _0x194c8c), _0x3a5a51(_0x194c8c)[_0x15f230(0xfd)](_0x47b2a2 => {
                                const _0x2ae05a = _0x15f230;
                                _0x147d45({
                                    'type': 'query_id',
                                    'data': _0x47b2a2[_0x2ae05a(0x258)][_0x2ae05a(0x1d2)][0x0]
                                });
                            })[_0x15f230(0xb9)](_0x51f9ec => {
                                _0x43ceb1(_0x51f9ec);
                            })) : _0x147d45({
                                'type': _0x15f230(0x2a5),
                                'data': _0x2791c6[_0x15f230(0x230)]
                            });
                        } catch (_0x2a9bc2) {
                            _0x180cdc(_0x15f230(0x194), 'reject', _0x2a9bc2['message']), _0x43ceb1(_0x2a9bc2);
                        }
                    },
                    'onerror': function (_0x3904e8) {
                        const _0x1e1a4b = _0x13f3d4;
                        _0x180cdc(_0x1e1a4b(0x194), _0x1e1a4b(0x2e6), _0x3904e8), _0x43ceb1(_0x3904e8);
                    }
                });
            });
        }
        function _0x3a5a51(_0x41dbd9) {
            return new Promise((_0x3f384b, _0x968ad6) => {
                const _0x4c280b = a0_0x325c;
                if (!_0x41dbd9)
                    _0x968ad6(_0x4c280b(0x199));
                let _0x393516 = _0x41dbd9, _0x5f59aa = _0x4c280b(0x17e) + _0x393516 + '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}';
                GM_xmlhttpRequest({
                    'method': _0x4c280b(0x2e1),
                    'url': _0x5f59aa,
                    'headers': {
                        'User-Agent': _0x4c280b(0x16d),
                        'X-IG-App-ID': _0xb46fe2()
                    },
                    'onload': function (_0x41c8e8) {
                        const _0x205620 = _0x4c280b;
                        try {
                            let _0x3b7dc3 = JSON[_0x205620(0x115)](_0x41c8e8[_0x205620(0x1aa)]);
                            _0x180cdc(_0x3b7dc3), _0x3b7dc3[_0x205620(0x26f)] === _0x205620(0x165) ? (alert(_0x205620(0x276) + _0x3b7dc3[_0x205620(0x1f2)] + ':\x20' + _0x3b7dc3[_0x205620(0x2ba)]), _0x180cdc(_0x205620(0x2e4) + _0x3b7dc3['message'] + ':\x20' + _0x3b7dc3[_0x205620(0x2ba)]), _0x968ad6(_0x41c8e8)) : (_0x180cdc(_0x205620(0xff), _0x3b7dc3['data']), _0x3f384b(_0x3b7dc3[_0x205620(0x230)]));
                        } catch (_0x44e5a8) {
                            _0x180cdc(_0x205620(0xff), 'reject', _0x44e5a8[_0x205620(0x1f2)]), _0x968ad6(_0x44e5a8);
                        }
                    },
                    'onerror': function (_0x7cedc0) {
                        const _0x3af41c = _0x4c280b;
                        _0x180cdc(_0x3af41c(0xff), _0x3af41c(0x2e6), _0x7cedc0), _0x968ad6(_0x7cedc0);
                    }
                });
            });
        }
        function _0x414995(_0x6901e2, _0xed48ac) {
            const _0x3014dd = _0x1ad2d2;
            _0xed48ac === !![] && (_0x180cdc(_0x3014dd(0xf3), _0x3014dd(0x246)), _0x63f2f9(_0x3014dd(0x291))['filter'](function () {
                const _0x143397 = _0x3014dd;
                return _0x63f2f9(this)['find'](_0x143397(0x2cb))[_0x143397(0xab)] === 0x0;
            })[_0x3014dd(0x19f)](_0x3014dd(0x2c9)));
            if (_0x6901e2 == ![]) {
                const _0x371bc8 = 0x64;
                let _0x565a76 = 0x0;
                var _0x5c30f9 = setInterval(() => {
                    const _0x49e4eb = _0x3014dd;
                    (_0x565a76 > _0x371bc8 || _0x63f2f9(_0x49e4eb(0x215))[_0x49e4eb(0xab)] > 0x0) && (clearInterval(_0x5c30f9), _0x565a76 > _0x371bc8 && console['warn'](_0x49e4eb(0x1fd), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x180cdc(_0x49e4eb(0x1fd), _0x49e4eb(0x233)), _0x3b1469(), _0x565a76++;
                }, 0x32);
            } else
                _0x3b1469();
        }
        function _0xb46fe2() {
            const _0x469e90 = _0x1ad2d2;
            let _0x509b87 = null;
            return _0x63f2f9(_0x469e90(0x190))['each'](function () {
                const _0x50c114 = _0x469e90, _0x399128 = /"APP_ID":"([0-9]+)"/ig, _0x10fe94 = _0x63f2f9(this)['text']()[_0x50c114(0x162)](_0x399128);
                _0x10fe94 != null && _0x509b87 == null && (_0x509b87 = [..._0x63f2f9(this)[_0x50c114(0x260)]()[_0x50c114(0x18a)](_0x399128)]);
            }), _0x509b87 ? _0x509b87['at'](0x0)['at'](-0x1) : null;
        }
        function _0x22205c(_0xd1858d) {
            const _0xc5cea1 = _0x1ad2d2;
            _0xd1858d ? (_0x63f2f9(_0xc5cea1(0x1ad))[_0xc5cea1(0x211)](_0xc5cea1(0x1e8)), _0x63f2f9(_0xc5cea1(0x1ad))[_0xc5cea1(0x183)]('z-index', _0xc5cea1(0xd2))) : (_0x63f2f9('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0xc5cea1(0x173)](_0xc5cea1(0x1e8)), _0x63f2f9(_0xc5cea1(0x1ad))[_0xc5cea1(0x183)](_0xc5cea1(0x26e), ''));
        }
        function _0x26cb94(_0x3c3a4f) {
            return new Promise((_0x39b41f, _0x49b32) => {
                const _0x236757 = a0_0x325c;
                let _0x439dd1 = _0x236757(0x198) + _0x3c3a4f + _0x236757(0xca);
                if (_0x3c3a4f == null) {
                    alert(_0x236757(0x2cc)), _0x180cdc(_0x236757(0x29e), _0x236757(0x2e6), _0x236757(0x2cc)), _0x22205c(![]), _0x49b32(-0x1);
                    return;
                }
                if (_0xb46fe2() == null) {
                    alert(_0x236757(0x1ca)), _0x180cdc(_0x236757(0x29e), 'reject', _0x236757(0x1ca)), _0x22205c(![]), _0x49b32(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x236757(0x2e1),
                    'url': _0x439dd1,
                    'headers': {
                        'User-Agent': window[_0x236757(0x1b1)][_0x236757(0x2f0)],
                        'Accept': _0x236757(0x10f),
                        'X-IG-App-ID': _0xb46fe2()
                    },
                    'onload': function (_0xd3e4d5) {
                        const _0x42a31d = _0x236757;
                        if (_0xd3e4d5[_0x42a31d(0x11a)] == _0x439dd1) {
                            let _0x5c37c1 = JSON['parse'](_0xd3e4d5[_0x42a31d(0x1aa)]);
                            _0x180cdc(_0x42a31d(0x29e), _0x5c37c1), _0x39b41f(_0x5c37c1);
                        } else {
                            let _0x4e0cd2 = new URL(_0xd3e4d5['finalUrl']);
                            _0x4e0cd2[_0x42a31d(0x286)][_0x42a31d(0xe5)]('/accounts/login') ? (_0x180cdc(_0x42a31d(0x29e), _0x42a31d(0x2e6), _0x42a31d(0x16b)), alert('The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.')) : (_0x180cdc(_0x42a31d(0x29e), _0x42a31d(0x2e6), _0x42a31d(0x17a) + _0xd3e4d5[_0x42a31d(0x11a)] + '\x22'), alert(_0x42a31d(0x17a) + _0xd3e4d5[_0x42a31d(0x11a)] + '\x22')), _0x22205c(![]), _0x49b32(-0x1);
                        }
                    },
                    'onerror': function (_0x220663) {
                        const _0x21ad85 = _0x236757;
                        _0x180cdc(_0x21ad85(0x29e), 'reject', _0x220663), _0x39b41f(_0x220663);
                    }
                });
            });
        }
        function _0x181209(_0x427ace) {
            const _0x399f33 = _0x1ad2d2;
            var _0x3365d5 = 0x0, _0x5a8ecd = _0x427ace['find'](_0x399f33(0x23c));
            return (_0x5a8ecd == null || !_0x5a8ecd[_0x399f33(0x151)](_0x399f33(0x10c))) && (_0x5a8ecd = _0x427ace['find']('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)[_0x399f33(0x177)]('div')), _0x5a8ecd[_0x399f33(0x12f)](_0x399f33(0x145))['each'](function (_0x5d7312) {
                const _0x4485de = _0x399f33;
                _0x63f2f9(this)[_0x4485de(0x151)]('_acnf') && (_0x3365d5 = _0x5d7312);
            }), _0x3365d5;
        }
        function _0x1408aa(_0x4897df) {
            const _0x2f5aee = _0x1ad2d2;
            _0x500c04['DISABLE_VIDEO_LOOPING'] && _0x4897df['find']('video')[_0x2f5aee(0x18f)](function () {
                const _0x309e53 = _0x2f5aee;
                _0x63f2f9(this)['on'](_0x309e53(0x144), function () {
                    const _0x20e802 = _0x309e53;
                    !_0x63f2f9(this)[_0x20e802(0x230)](_0x20e802(0x288)) && (_0x63f2f9(this)[_0x20e802(0x2a4)](_0x20e802(0x184), !![]), this[_0x20e802(0x2ab)](), _0x180cdc(_0x20e802(0xb3)));
                });
            });
            _0x500c04[_0x2f5aee(0x226)] && _0x4897df[_0x2f5aee(0x221)](_0x2f5aee(0x20b))['each'](function () {
                const _0x13ff7c = _0x2f5aee;
                _0x63f2f9(this)['on'](_0x13ff7c(0x1e5), function () {
                    const _0x5bd1af = _0x13ff7c;
                    !_0x63f2f9(this)[_0x5bd1af(0x230)](_0x5bd1af(0x236)) && (_0x63f2f9(this)[_0x5bd1af(0x2a4)]('data-modify', !![]), this['volume'] = _0xabfde5, _0x180cdc(_0x5bd1af(0x264)));
                });
            });
            _0x500c04[_0x2f5aee(0xf9)] && _0x4897df[_0x2f5aee(0x221)]('video')[_0x2f5aee(0x18f)](function () {
                const _0x258b8d = _0x2f5aee;
                if (!_0x63f2f9(this)[_0x258b8d(0x230)]('controls')) {
                    let _0x5e1045 = _0x63f2f9(this);
                    _0x180cdc(_0x258b8d(0x1e3)), this[_0x258b8d(0x1b3)] = _0xabfde5, _0x63f2f9(this)['on'](_0x258b8d(0x2b7), function () {
                        this['volume'] = _0xabfde5;
                    }), _0x63f2f9(this)['on'](_0x258b8d(0xaf), function (_0x44c440) {
                        const _0x3fabbb = _0x258b8d;
                        _0x44c440['preventDefault'](), _0x5e1045[_0x3fabbb(0x183)]('z-index', '-1'), _0x5e1045[_0x3fabbb(0x19f)](_0x3fabbb(0x1a7));
                    }), _0x63f2f9(this)[_0x258b8d(0x1ea)]()['find']('video\x20+\x20div\x20>\x20div')['first']()['on']('contextmenu', function (_0x226312) {
                        const _0x1af5a1 = _0x258b8d;
                        _0x226312[_0x1af5a1(0x13c)](), _0x5e1045[_0x1af5a1(0x183)](_0x1af5a1(0x26e), '2'), _0x5e1045[_0x1af5a1(0x2a4)](_0x1af5a1(0x1a7), !![]);
                    }), _0x63f2f9(this)['on']('volumechange', function () {
                        const _0xb56af5 = _0x258b8d;
                        let _0x52e57e = _0x63f2f9(this)[_0xb56af5(0x1ea)]()['find'](_0xb56af5(0x245))['find'](_0xb56af5(0x2a7))[_0xb56af5(0x12f)](function (_0x380c39) {
                            const _0x248979 = _0xb56af5;
                            return _0x63f2f9(this)[_0x248979(0xac)]() <= 0x40 && _0x63f2f9(this)[_0x248979(0x2a1)]() <= 0x40 && _0x63f2f9(this)['find'](_0x248979(0x1dd))[_0x248979(0xab)] > 0x0;
                        });
                        var _0x262297 = _0x52e57e['find']('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0xb56af5(0xab)] === 0x0;
                        this[_0xb56af5(0x15a)] != _0x262297 && (this[_0xb56af5(0x1b3)] = _0xabfde5, _0x52e57e?.[_0xb56af5(0x224)]()), _0x63f2f9(this)[_0xb56af5(0x2a4)](_0xb56af5(0x1dc)) && (_0xabfde5 = this[_0xb56af5(0x1b3)], GM_setValue(_0xb56af5(0xde), this[_0xb56af5(0x1b3)])), this[_0xb56af5(0x1b3)] == _0xabfde5 && _0x63f2f9(this)['attr'](_0xb56af5(0x1dc), !![]);
                    }), _0x63f2f9(this)[_0x258b8d(0x183)](_0x258b8d(0x251), 'absolute'), _0x63f2f9(this)['css'](_0x258b8d(0x26e), '2'), _0x63f2f9(this)['attr'](_0x258b8d(0x299), !![]), _0x63f2f9(this)[_0x258b8d(0x2a4)](_0x258b8d(0x1a7), !![]);
                }
            });
            var _0xa76b18 = _0x4897df[_0x2f5aee(0x221)]('video'), _0x16ecf2 = _0x4897df['find'](_0x2f5aee(0x245))[_0x2f5aee(0x174)]();
            _0x23f3cf(_0xa76b18, _0x16ecf2, 'post', _0x2f5aee(0x1eb));
        }
        ;
        function _0x3b1469() {
            const _0x164cd5 = _0x1ad2d2;
            _0x63f2f9(_0x164cd5(0x2b5))[_0x164cd5(0x16c)](function (_0x1668bb) {
                const _0x4c54b5 = _0x164cd5;
                return _0x63f2f9(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x63f2f9(this)['parent']()[_0x4c54b5(0x1ea)]()['parent']()[_0x4c54b5(0x1ea)]()[0x0] : this;
            })[_0x164cd5(0x12f)](function () {
                const _0x3fc8d0 = _0x164cd5;
                return _0x63f2f9(this)['height']() > 0x0 && _0x63f2f9(this)[_0x3fc8d0(0xac)]() > 0x0;
            })[_0x164cd5(0x18f)](function (_0x2e55f5) {
                const _0x43c6e7 = _0x164cd5;
                if (!_0x63f2f9(this)[_0x43c6e7(0x2a4)]('data-snig') && !_0x63f2f9(this)[_0x43c6e7(0x151)](_0x43c6e7(0x171)) && !_0x63f2f9(this)[_0x43c6e7(0x177)](_0x43c6e7(0x1e0))?.[_0x43c6e7(0x151)](_0x43c6e7(0x171)) && _0x63f2f9(this)[_0x43c6e7(0x292)](_0x43c6e7(0x2ae))[_0x43c6e7(0xab)] === 0x0) {
                    _0x180cdc(_0x43c6e7(0x107), _0x63f2f9(this));
                    var _0x413719 = 0xf, _0x50c99f = 0xf, _0x3da544 = _0x63f2f9(this), _0x206ecd = this['tagName'];
                    if (_0x206ecd === 'DIV' && _0x2e55f5 != 0x0)
                        return;
                    const _0x5282ed = _0x3da544[_0x43c6e7(0x177)](_0x43c6e7(0x2dc))['children']('div');
                    if (_0x5282ed[_0x43c6e7(0xab)] === 0x0)
                        return;
                    _0x180cdc('Found\x20insert\x20point', _0x5282ed);
                    if (_0x3da544[_0x43c6e7(0x221)]('._acay')[_0x43c6e7(0xab)] > 0x0) {
                        _0x3da544[_0x43c6e7(0x221)](_0x43c6e7(0x1ee))[_0x43c6e7(0xab)] > 0x0 && _0x3da544['find'](_0x43c6e7(0x1ee))[_0x43c6e7(0x183)](_0x43c6e7(0x1c2), _0x43c6e7(0x279));
                        const _0x3449b9 = _0x3da544[_0x43c6e7(0x221)](_0x43c6e7(0x259))['first']()['parent']()[0x0];
                        var _0x2a5ab5 = new MutationObserver(function (_0x1e4483, _0x16c767) {
                            const _0x1631f3 = _0x43c6e7;
                            _0x3da544[_0x1631f3(0x221)]('._acay\x20+\x20.x24i39r')[_0x1631f3(0x183)](_0x1631f3(0x1c2), _0x1631f3(0x279));
                        });
                        _0x2a5ab5[_0x43c6e7(0xa8)](_0x3449b9, { 'childList': !![] });
                    }
                    const _0x493d28 = _0x43c6e7(0xa6) + _0x37ab59('DW') + _0x43c6e7(0x228) + _0x413719 + _0x43c6e7(0xc6) + _0x50c99f + _0x43c6e7(0x25a) + _0x37aca1[_0x43c6e7(0x148)] + _0x43c6e7(0x11b), _0xf69010 = '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x37ab59(_0x43c6e7(0x1d5)) + _0x43c6e7(0x156) + (_0x413719 + 0x23) + _0x43c6e7(0xc6) + _0x50c99f + 'px;\x22>' + _0x37aca1['NEW_TAB'] + _0x43c6e7(0x11b), _0x2c10f1 = _0x43c6e7(0x219) + _0x37ab59(_0x43c6e7(0x133)) + _0x43c6e7(0x2fe) + (_0x413719 + 0x46) + 'px;top:' + _0x50c99f + 'px;\x22>' + _0x37aca1[_0x43c6e7(0xfb)] + _0x43c6e7(0x11b);
                    _0x5282ed['eq'](_0x206ecd === 'DIV' ? 0x0 : _0x5282ed[_0x43c6e7(0xab)] - 0x2)[_0x43c6e7(0x225)](_0x493d28), _0x5282ed['eq'](_0x206ecd === _0x43c6e7(0x1fe) ? 0x0 : _0x5282ed[_0x43c6e7(0xab)] - 0x2)[_0x43c6e7(0x225)](_0xf69010), setTimeout(() => {
                        const _0x546a6c = _0x43c6e7;
                        if (_0x5282ed['eq'](_0x206ecd === _0x546a6c(0x1fe) ? 0x0 : _0x5282ed[_0x546a6c(0xab)] - 0x2)[_0x546a6c(0x221)]('div\x20>\x20ul\x20li._acaz')[_0x546a6c(0xab)] === 0x0)
                            _0x5282ed[_0x546a6c(0x221)](_0x546a6c(0x20b))[_0x546a6c(0xab)] > 0x0 && _0x5282ed['eq'](_0x206ecd === _0x546a6c(0x1fe) ? 0x0 : _0x5282ed[_0x546a6c(0xab)] - 0x2)[_0x546a6c(0x225)](_0x2c10f1);
                        else {
                            const _0x1202a8 = (_0x19a5ed, _0x29fa9b) => {
                                    const _0x3117a9 = _0x546a6c;
                                    _0x19a5ed[_0x3117a9(0x17d)](_0x47b0e3 => {
                                        const _0x2741b3 = _0x3117a9;
                                        if (_0x47b0e3[_0x2741b3(0x272)]) {
                                            var _0x3b42c7 = _0x63f2f9(_0x47b0e3[_0x2741b3(0xee)]);
                                            _0x3b42c7[_0x2741b3(0x221)]('video')[_0x2741b3(0xab)] > 0x0 ? (_0x5282ed['eq'](_0x206ecd === 'DIV' ? 0x0 : _0x5282ed['length'] - 0x2)[_0x2741b3(0x225)](_0x2c10f1), _0x1408aa(_0x3da544)) : _0x5282ed[_0x2741b3(0x221)](_0x2741b3(0x252))?.[_0x2741b3(0xad)]();
                                        }
                                    });
                                }, _0x1ef53f = new IntersectionObserver(_0x1202a8, {
                                    'root': _0x3da544['find']('div\x20>\x20ul._acay')['first']()[_0x546a6c(0x1ea)]()[_0x546a6c(0x1ea)]()[_0x546a6c(0x1ea)]()[0x0],
                                    'rootMargin': '0px',
                                    'threshold': 0.1
                                }), _0x29288e = new MutationObserver(function (_0x2b70ec, _0x4422fc) {
                                    const _0x4e5e9f = _0x546a6c;
                                    var _0xf730b0 = _0x2b70ec['at'](0x0)?.[_0x4e5e9f(0xee)];
                                    _0x63f2f9(_0xf730b0)[_0x4e5e9f(0x221)](_0x4e5e9f(0xce))['each'](function () {
                                        const _0x5685a7 = _0x4e5e9f;
                                        _0x1ef53f[_0x5685a7(0xa8)](this);
                                    });
                                });
                            _0x3da544[_0x546a6c(0x221)]('div\x20>\x20ul\x20li._acaz')[_0x546a6c(0x18f)](function () {
                                const _0x362d5f = _0x546a6c;
                                _0x1ef53f[_0x362d5f(0xa8)](this);
                            });
                            const _0xee95da = _0x5282ed['eq'](_0x206ecd === _0x546a6c(0x1fe) ? 0x0 : _0x5282ed[_0x546a6c(0xab)] - 0x2)[_0x546a6c(0x221)]('div\x20>\x20ul\x20li._acaz')?.[_0x546a6c(0x1ea)]()[0x0], _0x3866f0 = _0x5282ed['eq'](_0x206ecd === 'DIV' ? 0x0 : _0x5282ed[_0x546a6c(0xab)] - 0x2)['find'](_0x546a6c(0x1f3))?.[_0x546a6c(0x1ea)]()[_0x546a6c(0x1ea)]()[0x0];
                            _0xee95da && _0x29288e[_0x546a6c(0xa8)](_0xee95da, { 'childList': !![] }), _0x3866f0 && _0x29288e[_0x546a6c(0xa8)](_0x3866f0, { 'attributes': !![] });
                        }
                    }, 0x32), _0x5282ed[_0x43c6e7(0x183)](_0x43c6e7(0x251), _0x43c6e7(0x2c1)), _0x1408aa(_0x3da544), _0x63f2f9(this)['on'](_0x43c6e7(0x224), _0x43c6e7(0x252), function (_0x18fea3) {
                        const _0x23289c = _0x43c6e7;
                        _0x22205c(!![]), _0x5af255 = _0x63f2f9(this)['parent']()[_0x23289c(0x1ea)]()[_0x23289c(0x1ea)]()[_0x23289c(0x2a4)]('data-username'), _0xb299ca = location[_0x23289c(0x286)]['replace'](/\/$/, '')[_0x23289c(0x26d)]('/')['at'](-0x1) || _0x63f2f9(this)[_0x23289c(0x1ea)]()[_0x23289c(0x1ea)]()['parent']()['find'](_0x23289c(0xcc))[_0x23289c(0x174)]()[_0x23289c(0x2a4)](_0x23289c(0x29a))[_0x23289c(0x26d)]('/')['at'](0x2) || _0x63f2f9(this)[_0x23289c(0x1ea)]()[_0x23289c(0x1ea)]()[_0x23289c(0x177)](_0x23289c(0x14f))['children'](_0x23289c(0x2dc))['children'](_0x23289c(0x14f))[_0x23289c(0x221)]('a[href^=\x22/p/\x22]')[_0x23289c(0x208)]()['attr'](_0x23289c(0x29a))[_0x23289c(0x26d)]('/')['at'](0x2);
                        var _0xc7d79b = _0x63f2f9(this)['parent']()[_0x23289c(0x1ea)]()[_0x23289c(0x1ea)](), _0x3bf93e = _0x181209(_0xc7d79b);
                        _0xf3a3c9(!![], ![]), _0x537615(_0xb299ca, _0x23289c(0x2f1), '')[_0x23289c(0xfd)](() => {
                            let _0x1a0bd5 = setInterval(() => {
                                const _0xaf9bd3 = a0_0x325c;
                                if (_0x63f2f9(_0xaf9bd3(0xd6))[_0xaf9bd3(0xab)] > 0x0) {
                                    clearInterval(_0x1a0bd5);
                                    var _0x11e45c = _0x63f2f9(_0xaf9bd3(0x146) + (_0x3bf93e + 0x1) + '\x22]')?.[_0xaf9bd3(0x1ea)]()['find'](_0xaf9bd3(0x157))?.[_0xaf9bd3(0x174)]();
                                    _0x11e45c != null && _0x11e45c[_0xaf9bd3(0xab)] > 0x0 ? _0x11e45c[_0xaf9bd3(0x224)]() : alert(_0xaf9bd3(0xba)), _0x22205c(![]), _0x63f2f9(_0xaf9bd3(0x130))[_0xaf9bd3(0xad)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x63f2f9(this)['on']('click', '.SNKMS_IG_NEWTAB_MAIN', function (_0x4ae5b3) {
                        const _0x1ba112 = _0x43c6e7;
                        _0x22205c(!![]), _0x5af255 = _0x63f2f9(this)[_0x1ba112(0x1ea)]()[_0x1ba112(0x1ea)]()[_0x1ba112(0x1ea)]()[_0x1ba112(0x2a4)](_0x1ba112(0x2d2)), _0xb299ca = location[_0x1ba112(0x286)][_0x1ba112(0xdd)](/\/$/, '')[_0x1ba112(0x26d)]('/')['at'](-0x1) || _0x63f2f9(this)[_0x1ba112(0x1ea)]()[_0x1ba112(0x1ea)]()[_0x1ba112(0x1ea)]()[_0x1ba112(0x221)]('a[href^=\x22/p/\x22]')['first']()['attr'](_0x1ba112(0x29a))[_0x1ba112(0x26d)]('/')['at'](0x2) || _0x63f2f9(this)[_0x1ba112(0x1ea)]()[_0x1ba112(0x1ea)]()[_0x1ba112(0x177)](_0x1ba112(0x14f))[_0x1ba112(0x177)](_0x1ba112(0x2dc))[_0x1ba112(0x177)](_0x1ba112(0x14f))['find']('a[href^=\x22/p/\x22]')[_0x1ba112(0x208)]()[_0x1ba112(0x2a4)](_0x1ba112(0x29a))[_0x1ba112(0x26d)]('/')['at'](0x2);
                        var _0x1a1c1c = _0x63f2f9(this)[_0x1ba112(0x1ea)]()[_0x1ba112(0x1ea)]()['parent'](), _0x4e1989 = _0x181209(_0x1a1c1c);
                        _0xf3a3c9(!![], ![]), _0x537615(_0xb299ca, _0x1ba112(0x2f1), '')[_0x1ba112(0xfd)](() => {
                            let _0x46d9c9 = setInterval(() => {
                                const _0x1bf0ed = a0_0x325c;
                                if (_0x63f2f9(_0x1bf0ed(0xd6))[_0x1bf0ed(0xab)] > 0x0) {
                                    clearInterval(_0x46d9c9);
                                    var _0x32a4a2 = _0x63f2f9(_0x1bf0ed(0x146) + (_0x4e1989 + 0x1) + '\x22]');
                                    if (_0x500c04[_0x1bf0ed(0xaa)] && _0x500c04['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0x224159(_0x32a4a2['first']()[0x0], !![]);
                                    else {
                                        let _0x374c7 = _0x32a4a2?.[_0x1bf0ed(0x2a4)](_0x1bf0ed(0xf1));
                                        if (_0x374c7) {
                                            var _0x1bc430 = new URL(_0x374c7);
                                            _0x1bc430['host'] = _0x1bf0ed(0x273), _0x54c0cb(_0x1bc430[_0x1bf0ed(0x29a)]);
                                        } else
                                            alert(_0x1bf0ed(0xf7));
                                    }
                                    _0x22205c(![]), _0x63f2f9(_0x1bf0ed(0x130))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x63f2f9(this)['on']('click', _0x43c6e7(0x2cb), async function (_0x1894d5) {
                        const _0x12b660 = _0x43c6e7;
                        _0x5af255 = _0x63f2f9(this)['parent']()[_0x12b660(0x1ea)]()[_0x12b660(0x1ea)]()['attr'](_0x12b660(0x2d2)), _0xb299ca = location[_0x12b660(0x286)][_0x12b660(0xdd)](/\/$/, '')['split']('/')['at'](-0x1) || _0x63f2f9(this)['parent']()[_0x12b660(0x1ea)]()[_0x12b660(0x1ea)]()[_0x12b660(0x221)]('a[href^=\x22/p/\x22]')[_0x12b660(0x174)]()[_0x12b660(0x2a4)](_0x12b660(0x29a))[_0x12b660(0x26d)]('/')['at'](0x2) || _0x63f2f9(this)[_0x12b660(0x1ea)]()[_0x12b660(0x1ea)]()['children'](_0x12b660(0x14f))[_0x12b660(0x177)](_0x12b660(0x2dc))[_0x12b660(0x177)]('div:last-child')[_0x12b660(0x221)](_0x12b660(0xcc))[_0x12b660(0x208)]()[_0x12b660(0x2a4)]('href')[_0x12b660(0x26d)]('/')['at'](0x2), _0xf3a3c9(_0x500c04[_0x12b660(0x154)], !![]), _0x63f2f9('#article-id')[_0x12b660(0x1d6)](_0x12b660(0x1e1) + _0xb299ca + '\x22>' + _0xb299ca + '</a>');
                        if (_0x500c04[_0x12b660(0xcf)]) {
                            _0x22205c(!![]), _0x62370a(!![]);
                            var _0x4f7a6a = _0x181209(_0x63f2f9(this)['parent']()[_0x12b660(0x1ea)]()['parent']());
                            _0x537615(_0xb299ca, _0x12b660(0x2f1), '')[_0x12b660(0xfd)](() => {
                                let _0x181bab = setInterval(() => {
                                    const _0x5a9e8d = a0_0x325c;
                                    if (_0x63f2f9(_0x5a9e8d(0xd6))[_0x5a9e8d(0xab)] > 0x0) {
                                        clearInterval(_0x181bab);
                                        var _0x228a7d = _0x63f2f9(_0x5a9e8d(0x146) + (_0x4f7a6a + 0x1) + '\x22]')?.['attr'](_0x5a9e8d(0xf1));
                                        _0x228a7d ? (_0x22205c(![]), _0x63f2f9(_0x5a9e8d(0x146) + (_0x4f7a6a + 0x1) + '\x22]')?.[_0x5a9e8d(0x224)]()) : alert(_0x5a9e8d(0x167)), _0x63f2f9(_0x5a9e8d(0x130))['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x500c04[_0x12b660(0x154)]) {
                            var _0x562b29 = 0x0, _0x506037 = _0x63f2f9(this)[_0x12b660(0x1ea)]()[_0x12b660(0x1ea)]()[_0x12b660(0x221)](_0x12b660(0x187))['length'], _0x4f8b1c = window['location'][_0x12b660(0x286)], _0x470fbf = '/' + _0x4f8b1c[_0x12b660(0x26d)]('/')[0x1] + '/' + _0x4f8b1c['split']('/')[0x2] + '/', _0x53d82d = _0x500c04['FORCE_FETCH_ALL_RESOURCES'], _0x266d2e = new Date(_0x63f2f9(this)[_0x12b660(0x1ea)]()[_0x12b660(0x1ea)]()[_0x12b660(0x221)](_0x12b660(0x28a))[_0x12b660(0x174)]()[_0x12b660(0x2a4)](_0x12b660(0x2b0)))[_0x12b660(0x29c)]();
                            if (_0x506037)
                                _0x63f2f9(this)[_0x12b660(0x1ea)]()['find'](_0x12b660(0x187))[_0x12b660(0x18f)](function () {
                                    const _0x4506cd = _0x12b660;
                                    let _0x1d68a3 = _0x63f2f9(this)[_0x4506cd(0x1ea)]()['parent']()[_0x4506cd(0x221)]('video');
                                    _0x1d68a3 && _0x1d68a3[_0x4506cd(0x2a4)](_0x4506cd(0x269)) && (_0x53d82d = !![]);
                                }), _0x53d82d || _0x500c04[_0x12b660(0xaa)] ? _0x537615(_0xb299ca, _0x12b660(0x2f1), _0x37ab59(_0x12b660(0xbb))) : (_0x63f2f9(this)[_0x12b660(0x1ea)]()[_0x12b660(0x221)]('._acay\x20._acaz')['each'](function () {
                                    const _0x29d383 = _0x12b660;
                                    _0x562b29++;
                                    let _0x246089 = _0x63f2f9(this)[_0x29d383(0x221)](_0x29d383(0x20b)), _0x47e4e2 = _0x63f2f9(this)[_0x29d383(0x221)]('._aagv\x20img'), _0xb99e1d = _0x47e4e2[_0x29d383(0x2a4)](_0x29d383(0x140)) ? _0x47e4e2[_0x29d383(0x2a4)]('srcset')[_0x29d383(0x26d)]('\x20')[0x0] : _0x47e4e2[_0x29d383(0x2a4)](_0x29d383(0x269));
                                    _0x246089 && _0x246089[_0x29d383(0x2a4)](_0x29d383(0x269)) && (_0x53d82d = !![]), _0x47e4e2 && _0xb99e1d && _0x63f2f9(_0x29d383(0x2f1))[_0x29d383(0x225)](_0x29d383(0x123) + _0x266d2e + _0x29d383(0x242) + _0xb299ca + _0x29d383(0x201) + _0x562b29 + _0x29d383(0x2f9) + _0xb99e1d + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xb99e1d + _0x29d383(0xe1) + _0x37ab59(_0x29d383(0xe6)) + '</span>\x20' + _0x562b29 + _0x29d383(0x2f5));
                                }), _0x53d82d && _0x537615(_0xb299ca, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x37ab59('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x500c04[_0x12b660(0xaa)])
                                    _0x537615(_0xb299ca, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x37ab59(_0x12b660(0xbb)));
                                else {
                                    _0x562b29++;
                                    let _0xe75104 = _0x63f2f9(this)[_0x12b660(0x1ea)]()[_0x12b660(0x1ea)]()[_0x12b660(0x221)](_0x12b660(0x20b)), _0x20aa58 = _0x63f2f9(this)[_0x12b660(0x1ea)]()['parent']()['find'](_0x12b660(0x1d1)), _0x384c72 = _0x20aa58[_0x12b660(0x2a4)](_0x12b660(0x140)) ? _0x20aa58['attr'](_0x12b660(0x140))[_0x12b660(0x26d)]('\x20')[0x0] : _0x20aa58['attr'](_0x12b660(0x269));
                                    _0xe75104 && _0xe75104[_0x12b660(0x2a4)](_0x12b660(0x269)) && _0x537615(_0xb299ca, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x37ab59('LOAD_BLOB_ONE')), _0x20aa58 && _0x384c72 && _0x63f2f9(_0x12b660(0x2f1))['append'](_0x12b660(0x123) + _0x266d2e + _0x12b660(0x242) + _0xb299ca + _0x12b660(0x201) + _0x562b29 + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x384c72 + _0x12b660(0x104) + _0x384c72 + _0x12b660(0xe1) + _0x37ab59('IMG') + _0x12b660(0x2d0) + _0x562b29 + _0x12b660(0x2f5));
                                }
                            }
                        }
                        _0x63f2f9(_0x12b660(0xd6))[_0x12b660(0x18f)](function () {
                            const _0x2632de = _0x12b660;
                            _0x63f2f9(this)[_0x2632de(0x1b4)](_0x2632de(0x2fd)), _0x63f2f9(this)['before']('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x63f2f9(this)[_0x2632de(0x15b)](_0x2632de(0x23b) + _0x37ab59(_0x2632de(0x1d5)) + _0x2632de(0x19c) + _0x37aca1[_0x2632de(0x1d5)] + '</div>'), _0x63f2f9(this)[_0x2632de(0x2a4)](_0x2632de(0xc9)) == 'video' && _0x63f2f9(this)[_0x2632de(0x15b)](_0x2632de(0x219) + _0x37ab59('THUMBNAIL_INTRO') + '\x22\x20class=\x22videoThumbnail\x22>' + _0x37aca1[_0x2632de(0xfb)] + _0x2632de(0x11b));
                        }), _0x500c04[_0x12b660(0x154)] && _0x537615(_0xb299ca, _0x12b660(0x2f1), _0x37ab59(_0x12b660(0xbb)))[_0x12b660(0xfd)](() => {
                            let _0x5e27ac = setInterval(() => {
                                const _0x3387b1 = a0_0x325c;
                                _0x63f2f9(_0x3387b1(0xd6))['length'] > 0x0 && (clearInterval(_0x5e27ac), _0x63f2f9(_0x3387b1(0xd6))[_0x3387b1(0x18f)](function () {
                                    const _0x2dc078 = _0x3387b1;
                                    _0x63f2f9(this)[_0x2dc078(0x224)]();
                                }), _0x63f2f9(_0x3387b1(0x130))[_0x3387b1(0xad)]());
                            }, 0xfa);
                        });
                    });
                    var _0x1faa47 = _0x63f2f9(this)[_0x43c6e7(0x221)]('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x43c6e7(0x174)]()['text']() || _0x63f2f9(this)[_0x43c6e7(0x221)](_0x43c6e7(0xbe))[_0x43c6e7(0x12f)](function () {
                        const _0x340a1a = _0x43c6e7;
                        return _0x63f2f9(this)?.[_0x340a1a(0x260)]()?.[_0x340a1a(0xab)] > 0x0;
                    })['first']()[_0x43c6e7(0x260)]();
                    _0x63f2f9(this)[_0x43c6e7(0x2a4)](_0x43c6e7(0x2c9), _0x43c6e7(0x136)), _0x63f2f9(this)[_0x43c6e7(0x2a4)](_0x43c6e7(0x2d2), _0x1faa47);
                }
            });
        }
        function _0x537615(_0x25f2f2, _0x2038f3, _0x2796e1) {
            return new Promise(async _0x4e9303 => {
                const _0x3f8a6f = a0_0x325c;
                _0x63f2f9(_0x2038f3 + '\x20a')[_0x3f8a6f(0xad)](), _0x63f2f9(_0x2038f3)[_0x3f8a6f(0x225)](_0x3f8a6f(0x1b0) + _0x2796e1 + _0x3f8a6f(0x267));
                let _0x5c3ba7 = await _0x452ca6(_0x25f2f2);
                if (_0x5c3ba7[_0x3f8a6f(0x14a)] === _0x3f8a6f(0x2a5)) {
                    let _0x13ed40 = 0x1, _0x78e02d = _0x5c3ba7['data'], _0x3d5b3f = _0x78e02d['shortcode_media'];
                    _0x3d5b3f[_0x3f8a6f(0x132)] == _0x3f8a6f(0x1ba) && _0x3d5b3f[_0x3f8a6f(0x2e2)] && (_0x63f2f9(_0x2038f3)[_0x3f8a6f(0x225)]('<a\x20media-id=\x22' + _0x3d5b3f['id'] + _0x3f8a6f(0x285) + _0x3d5b3f[_0x3f8a6f(0x1a3)] + _0x3f8a6f(0x28c) + _0x3d5b3f[_0x3f8a6f(0xbd)] + _0x3f8a6f(0x21d) + _0x3d5b3f[_0x3f8a6f(0xd4)][_0x3f8a6f(0x25e)] + '\x22\x20data-globalIndex=\x22' + _0x13ed40 + _0x3f8a6f(0x2f9) + _0x3d5b3f['video_url'] + _0x3f8a6f(0x104) + _0x3d5b3f[_0x3f8a6f(0x2ee)][0x1][_0x3f8a6f(0x269)] + _0x3f8a6f(0x24b) + _0x37ab59(_0x3f8a6f(0xf6)) + _0x3f8a6f(0x2d0) + _0x13ed40 + _0x3f8a6f(0x2f5)), _0x13ed40++);
                    _0x3d5b3f[_0x3f8a6f(0x132)] == _0x3f8a6f(0x1a8) && (_0x63f2f9(_0x2038f3)[_0x3f8a6f(0x225)](_0x3f8a6f(0x137) + _0x3d5b3f['id'] + '\x22\x20datetime=\x22' + _0x3d5b3f[_0x3f8a6f(0x1a3)] + _0x3f8a6f(0x28c) + _0x3d5b3f['shortcode'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x3d5b3f['owner'][_0x3f8a6f(0x25e)] + _0x3f8a6f(0xa4) + _0x13ed40 + _0x3f8a6f(0x2f9) + _0x3d5b3f[_0x3f8a6f(0x2ee)][_0x3d5b3f[_0x3f8a6f(0x2ee)][_0x3f8a6f(0xab)] - 0x1][_0x3f8a6f(0x269)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x3d5b3f[_0x3f8a6f(0x2ee)][0x1][_0x3f8a6f(0x269)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x37ab59(_0x3f8a6f(0xe6)) + '</span>\x20' + _0x13ed40 + '\x20-</a>'), _0x13ed40++);
                    if (_0x3d5b3f['__typename'] == 'GraphSidecar' && _0x3d5b3f['edge_sidecar_to_children'])
                        for (let _0x46190c of _0x3d5b3f[_0x3f8a6f(0x124)][_0x3f8a6f(0x127)]) {
                            _0x46190c[_0x3f8a6f(0x287)][_0x3f8a6f(0x132)] == _0x3f8a6f(0x1ba) && _0x63f2f9(_0x2038f3)[_0x3f8a6f(0x225)](_0x3f8a6f(0x137) + _0x46190c[_0x3f8a6f(0x287)]['id'] + _0x3f8a6f(0x285) + _0x3d5b3f[_0x3f8a6f(0x1a3)] + _0x3f8a6f(0x28c) + _0x3d5b3f[_0x3f8a6f(0xbd)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x3d5b3f['owner'][_0x3f8a6f(0x25e)] + _0x3f8a6f(0xa4) + _0x13ed40 + _0x3f8a6f(0x2f9) + _0x46190c[_0x3f8a6f(0x287)][_0x3f8a6f(0x2e2)] + _0x3f8a6f(0x104) + _0x46190c[_0x3f8a6f(0x287)][_0x3f8a6f(0x2ee)][0x1][_0x3f8a6f(0x269)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x37ab59(_0x3f8a6f(0xf6)) + _0x3f8a6f(0x2d0) + _0x13ed40 + _0x3f8a6f(0x2f5)), _0x46190c[_0x3f8a6f(0x287)][_0x3f8a6f(0x132)] == 'GraphImage' && _0x63f2f9(_0x2038f3)[_0x3f8a6f(0x225)](_0x3f8a6f(0x137) + _0x46190c[_0x3f8a6f(0x287)]['id'] + _0x3f8a6f(0x285) + _0x3d5b3f['taken_at_timestamp'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x3d5b3f[_0x3f8a6f(0xbd)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x3d5b3f[_0x3f8a6f(0xd4)][_0x3f8a6f(0x25e)] + '\x22\x20data-globalIndex=\x22' + _0x13ed40 + _0x3f8a6f(0x2f9) + _0x46190c['node'][_0x3f8a6f(0x2ee)][_0x46190c[_0x3f8a6f(0x287)][_0x3f8a6f(0x2ee)][_0x3f8a6f(0xab)] - 0x1][_0x3f8a6f(0x269)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x46190c[_0x3f8a6f(0x287)][_0x3f8a6f(0x2ee)][0x1][_0x3f8a6f(0x269)] + _0x3f8a6f(0xe1) + _0x37ab59('IMG') + _0x3f8a6f(0x2d0) + _0x13ed40 + _0x3f8a6f(0x2f5)), _0x13ed40++;
                        }
                } else {
                    let _0x1f79c4 = _0x5c3ba7[_0x3f8a6f(0x230)];
                    if (_0x1f79c4[_0x3f8a6f(0x2c2)])
                        _0x180cdc(_0x3f8a6f(0x2c2)), _0x1f79c4[_0x3f8a6f(0x2c2)][_0x3f8a6f(0x17d)]((_0x1a6a0a, _0x67f406) => {
                            const _0x624acf = _0x3f8a6f;
                            let _0x423cda = _0x67f406 + 0x1;
                            _0x1a6a0a['video_versions'] == null ? (_0x1a6a0a['image_versions2'][_0x624acf(0x161)][_0x624acf(0x234)](function (_0x6cba62, _0x269b4d) {
                                const _0x596245 = _0x624acf;
                                if (_0x6cba62[_0x596245(0xac)] < _0x269b4d[_0x596245(0xac)])
                                    return 0x1;
                                if (_0x6cba62[_0x596245(0xac)] > _0x269b4d['width'])
                                    return -0x1;
                                return 0x0;
                            }), _0x63f2f9(_0x2038f3)[_0x624acf(0x225)]('<a\x20media-id=\x22' + _0x1a6a0a['pk'] + _0x624acf(0x285) + _0x1a6a0a[_0x624acf(0x1f5)] + _0x624acf(0x28c) + _0x1f79c4['code'] + _0x624acf(0x18b) + _0x1f79c4[_0x624acf(0xd4)][_0x624acf(0x25e)] + _0x624acf(0xa4) + _0x423cda + _0x624acf(0x2f9) + _0x1a6a0a[_0x624acf(0x16a)]['candidates'][0x0][_0x624acf(0x22a)] + _0x624acf(0x104) + _0x1a6a0a[_0x624acf(0x16a)][_0x624acf(0x161)][0x0][_0x624acf(0x22a)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x37ab59('IMG') + _0x624acf(0x2d0) + _0x423cda + '\x20-</a>')) : _0x63f2f9(_0x2038f3)[_0x624acf(0x225)](_0x624acf(0x137) + _0x1a6a0a['pk'] + _0x624acf(0x285) + _0x1a6a0a[_0x624acf(0x1f5)] + _0x624acf(0x28c) + _0x1f79c4[_0x624acf(0x16f)] + _0x624acf(0x21d) + _0x1f79c4[_0x624acf(0xd4)][_0x624acf(0x25e)] + '\x22\x20data-globalIndex=\x22' + _0x423cda + _0x624acf(0x2f9) + _0x1a6a0a[_0x624acf(0xa1)][0x0][_0x624acf(0x22a)] + _0x624acf(0x104) + _0x1a6a0a[_0x624acf(0x16a)]['candidates'][0x0]['url'] + _0x624acf(0x24b) + _0x37ab59(_0x624acf(0xf6)) + _0x624acf(0x2d0) + _0x423cda + _0x624acf(0x2f5));
                        });
                    else {
                        let _0x186c75 = 0x1;
                        _0x1f79c4['video_versions'] == null ? (_0x1f79c4[_0x3f8a6f(0x16a)][_0x3f8a6f(0x161)][_0x3f8a6f(0x234)](function (_0x20ab5b, _0x376aa9) {
                            const _0x26c76c = _0x3f8a6f;
                            if (_0x20ab5b[_0x26c76c(0xac)] < _0x376aa9['width'])
                                return 0x1;
                            if (_0x20ab5b['width'] > _0x376aa9['width'])
                                return -0x1;
                            return 0x0;
                        }), _0x63f2f9(_0x2038f3)[_0x3f8a6f(0x225)](_0x3f8a6f(0x137) + _0x1f79c4['pk'] + '\x22\x20datetime=\x22' + _0x1f79c4[_0x3f8a6f(0x1f5)] + _0x3f8a6f(0x28c) + _0x1f79c4[_0x3f8a6f(0x16f)] + _0x3f8a6f(0x18b) + _0x1f79c4['owner']['username'] + _0x3f8a6f(0xa4) + _0x186c75 + _0x3f8a6f(0x2f9) + _0x1f79c4[_0x3f8a6f(0x16a)]['candidates'][0x0][_0x3f8a6f(0x22a)] + _0x3f8a6f(0x104) + _0x1f79c4[_0x3f8a6f(0x16a)][_0x3f8a6f(0x161)][0x0][_0x3f8a6f(0x22a)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x37ab59('IMG') + _0x3f8a6f(0x2d0) + _0x186c75 + _0x3f8a6f(0x2f5))) : _0x63f2f9(_0x2038f3)[_0x3f8a6f(0x225)](_0x3f8a6f(0x137) + _0x1f79c4['pk'] + _0x3f8a6f(0x285) + _0x1f79c4['taken_at'] + _0x3f8a6f(0x28c) + _0x1f79c4[_0x3f8a6f(0x16f)] + _0x3f8a6f(0x21d) + _0x1f79c4['owner'][_0x3f8a6f(0x25e)] + '\x22\x20data-globalIndex=\x22' + _0x186c75 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x1f79c4[_0x3f8a6f(0xa1)][0x0]['url'] + _0x3f8a6f(0x104) + _0x1f79c4[_0x3f8a6f(0x16a)]['candidates'][0x0][_0x3f8a6f(0x22a)] + _0x3f8a6f(0x24b) + _0x37ab59(_0x3f8a6f(0xf6)) + '</span>\x20' + _0x186c75 + '\x20-</a>');
                    }
                }
                _0x63f2f9(_0x3f8a6f(0x2db))[_0x3f8a6f(0xad)](), _0x63f2f9(_0x3f8a6f(0xd6))[_0x3f8a6f(0x18f)](function () {
                    const _0x5c5b84 = _0x3f8a6f;
                    _0x63f2f9(this)[_0x5c5b84(0x1b4)](_0x5c5b84(0x2fd)), _0x63f2f9(this)[_0x5c5b84(0x1cc)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x63f2f9(this)['after'](_0x5c5b84(0x23b) + _0x37ab59(_0x5c5b84(0x1d5)) + _0x5c5b84(0x19c) + _0x37aca1[_0x5c5b84(0x1d5)] + _0x5c5b84(0x11b)), _0x63f2f9(this)[_0x5c5b84(0x2a4)](_0x5c5b84(0xc9)) == _0x5c5b84(0x20b) && _0x63f2f9(this)[_0x5c5b84(0x15b)](_0x5c5b84(0x219) + _0x37ab59(_0x5c5b84(0x133)) + _0x5c5b84(0x290) + _0x37aca1[_0x5c5b84(0xfb)] + _0x5c5b84(0x11b));
                }), _0x4e9303(!![]);
            });
        }
        function _0xf3a3c9(_0x5d3e2e, _0x28551c) {
            const _0x4621ab = _0x1ad2d2;
            let _0x3f7233 = _0x5d3e2e ? _0x4621ab(0x192) : '';
            _0x63f2f9(_0x4621ab(0x2f4))[_0x4621ab(0x225)](_0x4621ab(0x159) + _0x3f7233 + _0x4621ab(0x2dd)), _0x63f2f9(_0x4621ab(0x23d))[_0x4621ab(0x225)](_0x4621ab(0x2f8) + _0x37ab59('CLOSE') + '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x37aca1['CLOSE'] + _0x4621ab(0x152)), _0x28551c && (_0x63f2f9(_0x4621ab(0x23d))[_0x4621ab(0x225)](_0x4621ab(0x1fb)), _0x63f2f9(_0x4621ab(0x121))[_0x4621ab(0x225)]('<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>' + _0x37ab59('BATCH_DOWNLOAD_SELECTED') + _0x4621ab(0x2ad)), _0x63f2f9(_0x4621ab(0x121))['append'](_0x4621ab(0x2ca) + _0x37ab59(_0x4621ab(0x2bf)) + _0x4621ab(0x2ad)), _0x63f2f9(_0x4621ab(0x23d))['append'](_0x4621ab(0x129) + _0x37ab59(_0x4621ab(0x18d)) + _0x4621ab(0xf8)));
        }
        function _0x62370a(_0x56115e) {
            const _0x3d6c64 = _0x1ad2d2;
            _0x63f2f9(_0x3d6c64(0x130))['length'] && (_0x56115e ? _0x63f2f9('.IG_SN_DIG')['addClass'](_0x3d6c64(0x192)) : _0x63f2f9(_0x3d6c64(0x130))[_0x3d6c64(0x211)](_0x3d6c64(0x192)));
        }
        function _0x2755ba(_0x3fedd1, _0x5321d0, _0x2aeca6, _0x127c86, _0x28abfa, _0x814173) {
            setTimeout(() => {
                _0x22205c(!![]), fetch(_0x3fedd1)['then'](_0x103006 => {
                    const _0x38f39a = a0_0x325c;
                    return _0x103006[_0x38f39a(0x1bf)]()[_0x38f39a(0xfd)](_0x4de676 => {
                        _0x22205c(![]), _0x116920(_0x3fedd1, _0x4de676, _0x5321d0, _0x2aeca6, _0x127c86, _0x28abfa, _0x814173);
                    });
                });
            }, 0x32);
        }
        function _0x116920(_0x4686c2, _0x5aad34, _0x45d0bc, _0x978217, _0x3759f0, _0xf72584, _0x255c7c) {
            const _0x3d6d13 = _0x1ad2d2;
            _0x3759f0 = parseInt(_0x3759f0[_0x3d6d13(0x2e9)]()['padEnd'](0xd, '0'));
            _0x500c04[_0x3d6d13(0x2d4)] && (_0x3759f0 = parseInt(_0x3759f0[_0x3d6d13(0x2e9)]()['padEnd'](0xd, '0')));
            const _0x1e451d = new Date(_0x3759f0), _0x1ba3e2 = document[_0x3d6d13(0x1cf)]('a'), _0x315ec0 = new URL(_0x4686c2)['pathname'][_0x3d6d13(0x26d)]('/')['at'](-0x1)[_0x3d6d13(0x26d)]('.')[_0x3d6d13(0x28b)](0x0, -0x1)[_0x3d6d13(0x2e8)]('.'), _0x5b1cc6 = _0x1e451d[_0x3d6d13(0x27f)]()['toString'](), _0x3f2167 = (_0x1e451d[_0x3d6d13(0x128)]() + 0x1)['toString']()[_0x3d6d13(0x176)](0x2, '0'), _0x5d2eba = _0x1e451d[_0x3d6d13(0x1fc)]()[_0x3d6d13(0x2e9)]()['padStart'](0x2, '0'), _0x6179ed = _0x1e451d['getHours']()['toString']()[_0x3d6d13(0x176)](0x2, '0'), _0x2abf1e = _0x1e451d['getMinutes']()[_0x3d6d13(0x2e9)]()[_0x3d6d13(0x176)](0x2, '0'), _0x29a2a1 = _0x1e451d['getSeconds']()[_0x3d6d13(0x2e9)]()[_0x3d6d13(0x176)](0x2, '0');
            var _0x42c4dd = _0x5c7315[_0x3d6d13(0x271)](), _0x1ac289 = _0x255c7c ?? '', _0x1fa920 = {
                    '%USERNAME%': _0x45d0bc,
                    '%SOURCE_TYPE%': _0x978217,
                    '%SHORTCODE%': _0x1ac289,
                    '%YEAR%': _0x5b1cc6,
                    '%2-YEAR%': _0x5b1cc6['substr'](-0x2),
                    '%MONTH%': _0x3f2167,
                    '%DAY%': _0x5d2eba,
                    '%HOUR%': _0x6179ed,
                    '%MINUTE%': _0x2abf1e,
                    '%SECOND%': _0x29a2a1,
                    '%ORIGINAL_NAME%': _0x315ec0,
                    '%ORIGINAL_NAME_FIRST%': _0x315ec0[_0x3d6d13(0x26d)]('_')['at'](0x0)
                };
            _0x42c4dd = _0x42c4dd[_0x3d6d13(0xdd)](/%[\w\-]+%/g, function (_0x358f72) {
                return _0x1fa920[_0x358f72] || _0x358f72;
            });
            const _0x202762 = _0x45d0bc + '_' + _0x315ec0 + '.' + _0xf72584;
            _0x1ba3e2[_0x3d6d13(0x29a)] = URL[_0x3d6d13(0x197)](_0x5aad34), _0x1ba3e2[_0x3d6d13(0x26b)](_0x3d6d13(0x191), _0x500c04[_0x3d6d13(0x2be)] ? _0x42c4dd + '.' + _0xf72584 : _0x202762), _0x1ba3e2[_0x3d6d13(0x224)](), _0x1ba3e2[_0x3d6d13(0xad)]();
        }
        async function _0x224159(_0x41142a, _0x391b8d) {
            const _0x614d05 = _0x1ad2d2;
            let _0x2eaced = new Date()['getTime'](), _0x46eb2a = Math[_0x614d05(0x29f)](_0x2eaced / 0x3e8), _0x158f7c = _0x63f2f9(_0x41142a)[_0x614d05(0x2a4)](_0x614d05(0x2d2)) ? _0x63f2f9(_0x41142a)[_0x614d05(0x2a4)](_0x614d05(0x2d2)) : _0x5af255;
            !_0x158f7c && _0x63f2f9(_0x41142a)['attr'](_0x614d05(0x16e)) && (_0x180cdc(_0x614d05(0x14b), _0x63f2f9(_0x41142a)[_0x614d05(0x2a4)]('data-href')), _0x158f7c = await _0x27d622(_0x63f2f9(_0x41142a)[_0x614d05(0x2a4)](_0x614d05(0x16e)))['catch'](_0x5bf197 => {
                const _0x55109e = _0x614d05;
                _0x180cdc(_0x55109e(0x213), _0x5bf197[_0x55109e(0x1f2)]);
            }), _0x158f7c == null && (_0x158f7c = 'NONE'));
            _0x500c04[_0x614d05(0x2d4)] && _0x63f2f9(_0x41142a)['attr'](_0x614d05(0x2b0)) && (_0x46eb2a = parseInt(_0x63f2f9(_0x41142a)['attr'](_0x614d05(0x2b0))));
            if (_0x500c04[_0x614d05(0xaa)]) {
                _0x22205c(!![]);
                let _0x5581b9 = await _0x26cb94(_0x63f2f9(_0x41142a)[_0x614d05(0x2a4)](_0x614d05(0x1bb)));
                _0x22205c(![]);
                if (_0x5581b9[_0x614d05(0x26f)] === 'ok') {
                    var _0x4e6b82 = null;
                    _0x5581b9[_0x614d05(0x1d2)][0x0][_0x614d05(0xa1)] ? _0x4e6b82 = _0x5581b9['items'][0x0]['video_versions'][0x0][_0x614d05(0x22a)] : (_0x5581b9[_0x614d05(0x1d2)][0x0]['image_versions2']['candidates'][_0x614d05(0x234)](function (_0x1d9b5a, _0x50ff7a) {
                        const _0x2c1c33 = _0x614d05;
                        if (_0x1d9b5a[_0x2c1c33(0xac)] < _0x50ff7a['width'])
                            return 0x1;
                        if (_0x1d9b5a[_0x2c1c33(0xac)] > _0x50ff7a[_0x2c1c33(0xac)])
                            return -0x1;
                        return 0x0;
                    }), _0x4e6b82 = _0x5581b9[_0x614d05(0x1d2)][0x0][_0x614d05(0x16a)][_0x614d05(0x161)][0x0][_0x614d05(0x22a)]);
                    if (_0x391b8d) {
                        let _0x4026ce = new URL(_0x4e6b82);
                        _0x4026ce[_0x614d05(0x112)] = _0x614d05(0x273), _0x54c0cb(_0x4026ce['href']);
                    } else
                        _0x2755ba(_0x4e6b82, _0x158f7c, _0x63f2f9(_0x41142a)[_0x614d05(0x2a4)]('data-name'), _0x46eb2a, _0x63f2f9(_0x41142a)['attr'](_0x614d05(0x2b3)), _0x63f2f9(_0x41142a)['attr']('data-path'));
                } else {
                    if (_0x500c04[_0x614d05(0x158)]) {
                        if (_0x391b8d) {
                            let _0x4501c8 = new URL(_0x63f2f9(_0x41142a)[_0x614d05(0x2a4)](_0x614d05(0xf1)));
                            _0x4501c8[_0x614d05(0x112)] = _0x614d05(0x273), _0x54c0cb(_0x4501c8[_0x614d05(0x29a)]);
                        } else
                            _0x2755ba(_0x63f2f9(_0x41142a)[_0x614d05(0x2a4)]('data-href'), _0x158f7c, _0x63f2f9(_0x41142a)['attr']('data-name'), _0x46eb2a, _0x63f2f9(_0x41142a)[_0x614d05(0x2a4)]('data-type'), _0x63f2f9(_0x41142a)[_0x614d05(0x2a4)](_0x614d05(0x16e)));
                    } else
                        alert(_0x614d05(0x229) + _0x5581b9['message']);
                    _0x180cdc(_0x5581b9);
                }
            } else
                _0x2755ba(_0x63f2f9(_0x41142a)[_0x614d05(0x2a4)](_0x614d05(0xf1)), _0x158f7c, _0x63f2f9(_0x41142a)['attr'](_0x614d05(0xc9)), _0x46eb2a, _0x63f2f9(_0x41142a)[_0x614d05(0x2a4)](_0x614d05(0x2b3)), _0x63f2f9(_0x41142a)['attr'](_0x614d05(0x16e)));
        }
        function _0xd0cf90(_0x261a42) {
            const _0x3a1a89 = _0x1ad2d2;
            var _0x1364a5 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x3a1a89(0x28e),
                        'NOTICE_UPDATE_CONTENT': _0x3a1a89(0x294),
                        'CHECK_UPDATE': _0x3a1a89(0x1c5),
                        'CHECK_UPDATE_MENU': _0x3a1a89(0x2c4),
                        'CHECK_UPDATE_INTRO': 'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
                        'RELOAD_SCRIPT': _0x3a1a89(0x21f),
                        'DONATE': _0x3a1a89(0x209),
                        'FEEDBACK': _0x3a1a89(0x2b1),
                        'NEW_TAB': _0x3a1a89(0x207),
                        'SHOW_DOM_TREE': _0x3a1a89(0xd3),
                        'SELECT_AND_COPY': _0x3a1a89(0x298),
                        'DOWNLOAD_DOM_TREE': _0x3a1a89(0x17b),
                        'REPORT_GITHUB': _0x3a1a89(0x135),
                        'REPORT_DISCORD': _0x3a1a89(0x202),
                        'REPORT_FORK': _0x3a1a89(0x2df),
                        'DEBUG': _0x3a1a89(0x12b),
                        'CLOSE': _0x3a1a89(0x1c7),
                        'ALL_CHECK': _0x3a1a89(0x2b4),
                        'BATCH_DOWNLOAD_SELECTED': _0x3a1a89(0x2a2),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x3a1a89(0x205),
                        'VID': _0x3a1a89(0x254),
                        'DW': 'Download',
                        'THUMBNAIL_INTRO': _0x3a1a89(0x2bc),
                        'LOAD_BLOB_ONE': _0x3a1a89(0x155),
                        'LOAD_BLOB_MULTIPLE': _0x3a1a89(0x9e),
                        'LOAD_BLOB_RELOAD': _0x3a1a89(0x1d8),
                        'NO_CHECK_RESOURCE': _0x3a1a89(0x19b),
                        'NO_VID_URL': 'Cannot\x20find\x20video\x20URL.',
                        'SETTING': _0x3a1a89(0x142),
                        'AUTO_RENAME': 'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
                        'RENAME_SHORTCODE': _0x3a1a89(0x2ec),
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0x3a1a89(0x1f4),
                        'DISABLE_VIDEO_LOOPING': _0x3a1a89(0xc4),
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x3a1a89(0x2f7),
                        'DIRECT_DOWNLOAD_ALL': _0x3a1a89(0x1ab),
                        'MODIFY_VIDEO_VOLUME': _0x3a1a89(0x138),
                        'SCROLL_BUTTON': 'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
                        'FORCE_RESOURCE_VIA_MEDIA': _0x3a1a89(0xc7),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': _0x3a1a89(0x1b7),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x3a1a89(0x203),
                        'AUTO_RENAME_INTRO': 'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': _0x3a1a89(0x9f),
                        'RENAME_LOCATE_DATE_INTRO': 'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x3a1a89(0x2c0),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x3a1a89(0xdf),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x3a1a89(0x200),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x3a1a89(0x19e),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x3a1a89(0x2bb),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x3a1a89(0x20c),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x3a1a89(0x131),
                        'SCROLL_BUTTON_INTRO': _0x3a1a89(0x14e),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x3a1a89(0x1b2),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT_INTRO': _0x3a1a89(0x1b9),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x3a1a89(0x2a6),
                        'SKIP_VIEW_STORY_CONFIRM': 'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x3a1a89(0x29d)
                    }
                }, _0xd6dba1 = Object[_0x3a1a89(0x172)]({}, _0x1364a5, _0x4e3de4), _0x17fbf2 = Object[_0x3a1a89(0x110)](_0xd6dba1)[_0x3a1a89(0x234)]()['reduce']((_0x3f8f38, _0x3346f1) => {
                    return _0x3f8f38[_0x3346f1] = _0xd6dba1[_0x3346f1], _0x3f8f38;
                }, {});
            return _0x17fbf2;
        }
        async function _0xe4980a(_0x8866a7) {
            return new Promise((_0x177d18, _0x288506) => {
                const _0x5a15ba = a0_0x325c;
                GM_xmlhttpRequest({
                    'method': _0x5a15ba(0x2e1),
                    'url': 'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/' + _0x8866a7 + _0x5a15ba(0x12d),
                    'onload': function (_0x19ff74) {
                        const _0x4ade8c = _0x5a15ba;
                        try {
                            let _0x24ff86 = JSON[_0x4ade8c(0x115)](_0x19ff74['response']);
                            _0x177d18(_0x24ff86);
                        } catch (_0x3a17a7) {
                            _0x288506(_0x3a17a7);
                        }
                    },
                    'onerror': function (_0x14402c) {
                        const _0xa04406 = _0x5a15ba;
                        _0x180cdc(_0xa04406(0xe4), _0xa04406(0x2e6), _0x14402c), _0x288506(_0x14402c);
                    }
                });
            });
        }
        function _0x37ab59(_0x92816f) {
            const _0x1cfe59 = _0x1ad2d2, _0x3790e1 = _0xd0cf90();
            return _0x3790e1[_0x374134] != undefined && _0x3790e1[_0x374134][_0x92816f] != undefined ? _0x3790e1[_0x374134][_0x92816f] : _0x3790e1[_0x1cfe59(0x1f0)][_0x92816f];
        }
        function _0xe0658d() {
            const _0x13ab34 = _0x1ad2d2;
            _0x63f2f9(_0x13ab34(0x1e6))[_0x13ab34(0x18f)](function () {
                const _0x27a61f = _0x13ab34;
                _0x63f2f9(this)[_0x27a61f(0x260)](_0x37ab59(_0x63f2f9(this)[_0x27a61f(0x2a4)](_0x27a61f(0x262))));
            }), _0x63f2f9(_0x13ab34(0xeb))[_0x13ab34(0x18f)](function () {
                const _0x5b78eb = _0x13ab34;
                _0x63f2f9(this)[_0x5b78eb(0x2a4)](_0x5b78eb(0x1c9), _0x37ab59(_0x63f2f9(this)[_0x5b78eb(0x2a4)](_0x5b78eb(0xef))));
            });
        }
        function _0x37a11c() {
            const _0x1f3b25 = _0x1ad2d2;
            for (let _0x4c7332 of _0x58fa9b) {
                _0x180cdc('GM_unregisterMenuCommand', _0x4c7332), GM_unregisterMenuCommand(_0x4c7332);
            }
            _0x58fa9b['push'](GM_registerMenuCommand(_0x37ab59(_0x1f3b25(0xc3)), () => {
                _0x213648();
            }, { 'accessKey': 'w' })), _0x58fa9b[_0x1f3b25(0x2b6)](GM_registerMenuCommand(_0x37ab59(_0x1f3b25(0x27e)), () => {
                const _0x392013 = _0x1f3b25;
                GM_openInTab(_0x392013(0x265), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x58fa9b[_0x1f3b25(0x2b6)](GM_registerMenuCommand(_0x37ab59(_0x1f3b25(0x238)), () => {
                _0x256b47();
            }, { 'accessKey': 'z' })), _0x58fa9b[_0x1f3b25(0x2b6)](GM_registerMenuCommand(_0x37ab59(_0x1f3b25(0x180)), () => {
                _0x33bf46();
            }, { 'accessKey': 'f' })), _0x58fa9b[_0x1f3b25(0x2b6)](GM_registerMenuCommand(_0x37ab59('CHECK_UPDATE_MENU'), () => {
                _0x3aeedc();
            }, { 'accessKey': 'c' })), _0x58fa9b[_0x1f3b25(0x2b6)](GM_registerMenuCommand(_0x37ab59(_0x1f3b25(0x13b)), () => {
                _0x17be62();
            }, { 'accessKey': 'r' }));
        }
        function _0x52cdd5(_0x3f0fa4) {
            const _0x2a77ea = _0x1ad2d2;
            if (!_0x500c04[_0x2a77ea(0x1d0)])
                return;
            const _0x3ae7a3 = GM_getValue(_0x2a77ea(0xcd)) ?? new Date()['getTime'](), _0x1d9560 = new Date()['getTime']();
            _0x1d9560 > parseInt(_0x3ae7a3) + _0x3f0fa4 * 0x3e8 && (GM_setValue(_0x2a77ea(0xcd), new Date()[_0x2a77ea(0x29c)]()), _0x3aeedc());
        }
        function _0x3aeedc() {
            const _0x73fcb2 = _0x1ad2d2, _0x3c3303 = GM_info[_0x73fcb2(0x11c)][_0x73fcb2(0x108)], _0x306d7e = _0x73fcb2(0x1ce);
            GM_xmlhttpRequest({
                'method': _0x73fcb2(0x2e1),
                'url': _0x306d7e,
                'onload': function (_0xe08895) {
                    const _0x1ba9da = _0x73fcb2, _0x175d33 = _0xe08895[_0x1ba9da(0x249)], _0x5af560 = _0x175d33[_0x1ba9da(0x162)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x5af560 && _0x5af560[0x1]) {
                        const _0x37e986 = _0x5af560[0x1];
                        _0x180cdc(_0x1ba9da(0x297), _0x3c3303, '|', _0x1ba9da(0x163), _0x37e986), _0x37e986 !== _0x3c3303 && typeof this[_0x1ba9da(0xb7)] === _0x1ba9da(0x232) ? (this[_0x1ba9da(0xb7)] = null, GM_notification({
                            'text': _0x37ab59(_0x1ba9da(0x24e)),
                            'title': _0x37ab59('NOTICE_UPDATE_TITLE'),
                            'tag': 'ig_helper_notice',
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
                            'onclick': _0x33cba6 => {
                                const _0x5220cf = _0x1ba9da;
                                _0x33cba6?.[_0x5220cf(0x13c)]();
                                var _0x5cc5cb = GM_openInTab(GM_info['script'][_0x5220cf(0x119)]);
                                setTimeout(() => {
                                    const _0x1d6abd = _0x5220cf;
                                    _0x5cc5cb[_0x1d6abd(0x28f)]();
                                }, 0xfa);
                            }
                        })) : _0x180cdc(_0x1ba9da(0x282));
                    } else
                        console[_0x1ba9da(0x21c)](_0x1ba9da(0x1f8));
                }
            });
        }
        function _0x213648() {
            const _0x290811 = _0x1ad2d2;
            _0x63f2f9(_0x290811(0x130))[_0x290811(0xad)](), _0xf3a3c9(), _0x63f2f9(_0x290811(0x1ff))[_0x290811(0x260)]('Preference\x20Settings'), _0x63f2f9(_0x290811(0x13a))[_0x290811(0x225)]('<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20text\x20is\x20translated\x20using\x20machine\x20translation\x20and\x20may\x20be\x20inaccurate;\x20you\x20can\x20contact\x20support\x20to\x20correct\x20the\x20translation.</div>');
            for (let _0x274ca4 in _0x5e9ffe) {
                _0x63f2f9(_0x290811(0x1bd))['append'](_0x290811(0xa0) + _0x274ca4 + '\x22\x20' + (_0x374134 == _0x274ca4 ? _0x290811(0x2b8) : '') + '>' + _0x5e9ffe[_0x274ca4] + '</option>');
            }
            for (let _0x537485 in _0x500c04) {
                _0x63f2f9(_0x290811(0x1ac))['append'](_0x290811(0x2aa) + (_0x556457[_0x290811(0xc5)](_0x537485) ? '\x20child' : '') + _0x290811(0x10e) + _0x37ab59(_0x537485 + _0x290811(0x114)) + _0x290811(0x2d9) + (_0x537485 + _0x290811(0x114)) + '\x22><span\x20data-ih-locale=\x22' + _0x537485 + '\x22>' + _0x37ab59(_0x537485) + _0x290811(0x27d) + _0x537485 + _0x290811(0x1c8) + (_0x500c04[_0x537485] === !![] ? _0x290811(0xb6) : '') + _0x290811(0x2da)), _0x537485 === _0x290811(0x226) && _0x63f2f9(_0x290811(0xe8) + _0x537485 + '\x22]')['parent']('label')['on']('contextmenu', function (_0x5ac4d5) {
                    const _0x6a622c = _0x290811;
                    _0x5ac4d5['preventDefault'](), _0x63f2f9(this)['find'](_0x6a622c(0x23e))[_0x6a622c(0xab)] === 0x0 && (_0x63f2f9(this)['append'](_0x6a622c(0x22e)), _0x63f2f9(this)[_0x6a622c(0x177)](_0x6a622c(0x23e))[_0x6a622c(0x225)](_0x6a622c(0x101) + _0xabfde5 + _0x6a622c(0x168)), _0x63f2f9(this)[_0x6a622c(0x177)](_0x6a622c(0x23e))[_0x6a622c(0x225)](_0x6a622c(0x101) + _0xabfde5 + _0x6a622c(0x268)), _0x63f2f9(this)[_0x6a622c(0x177)](_0x6a622c(0x23e))['append']('<div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x37aca1[_0x6a622c(0x1a1)] + _0x6a622c(0x11b)));
                }), _0x537485 === _0x290811(0x2be) && _0x63f2f9(_0x290811(0xe8) + _0x537485 + '\x22]')[_0x290811(0x1ea)]('label')['on'](_0x290811(0xaf), function (_0x49c53d) {
                    const _0x1af436 = _0x290811;
                    _0x49c53d[_0x1af436(0x13c)](), _0x63f2f9(this)[_0x1af436(0x221)](_0x1af436(0x23e))[_0x1af436(0xab)] === 0x0 && (_0x63f2f9(this)[_0x1af436(0x225)]('<div\x20id=\x22tempWrapper\x22></div>'), _0x63f2f9(this)[_0x1af436(0x177)]('#tempWrapper')['append'](_0x1af436(0xe2) + _0x5c7315 + '\x22\x20/>'), _0x63f2f9(this)['children']('#tempWrapper')[_0x1af436(0x225)]('<div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x37aca1[_0x1af436(0x1a1)] + '</div>'));
                });
            }
        }
        function _0x256b47() {
            const _0x484ce9 = _0x1ad2d2;
            _0x63f2f9(_0x484ce9(0x130))['remove'](), _0xf3a3c9(), _0x63f2f9(_0x484ce9(0x1ff))[_0x484ce9(0x260)](_0x484ce9(0x2ed)), _0x63f2f9(_0x484ce9(0x1ac))[_0x484ce9(0x225)]('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x63f2f9('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x484ce9(0x225)](_0x484ce9(0xb0)), _0x63f2f9(_0x484ce9(0xfa))['append'](_0x484ce9(0xfe) + _0x37ab59(_0x484ce9(0x212)) + '</a></button>'), _0x63f2f9('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append'](_0x484ce9(0x1c4) + _0x37ab59(_0x484ce9(0x15f)) + '</a></button>'), _0x63f2f9('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>' + _0x37ab59('DOWNLOAD_DOM_TREE') + _0x484ce9(0x2d7)), _0x63f2f9(_0x484ce9(0xfa))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x37ab59('REPORT_GITHUB') + _0x484ce9(0x1e4)), _0x63f2f9(_0x484ce9(0xfa))[_0x484ce9(0x225)](_0x484ce9(0x23f) + _0x37ab59(_0x484ce9(0x1cd)) + _0x484ce9(0x1e4));
        }
        function _0x33bf46() {
            const _0x683951 = _0x1ad2d2;
            _0x63f2f9(_0x683951(0x130))[_0x683951(0xad)](), _0xf3a3c9(), _0x63f2f9(_0x683951(0x1ff))[_0x683951(0x260)](_0x683951(0x17c)), _0x63f2f9('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x683951(0x225)](_0x683951(0xb0)), _0x63f2f9(_0x683951(0xfa))[_0x683951(0x225)](_0x683951(0x25b) + _0x37ab59(_0x683951(0xbc)) + '</a></button>'), _0x63f2f9(_0x683951(0xfa))['append'](_0x683951(0x1b6) + _0x37ab59(_0x683951(0x116)) + '</a></button>'), _0x63f2f9('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x683951(0x225)](_0x683951(0x23f) + _0x37ab59('REPORT_DISCORD') + _0x683951(0x1e4));
        }
        function _0x54c0cb(_0x37922a) {
            const _0x4fdc95 = _0x1ad2d2;
            var _0x399ee5 = document[_0x4fdc95(0x1cf)]('a');
            _0x399ee5[_0x4fdc95(0x29a)] = _0x37922a, _0x399ee5[_0x4fdc95(0xee)] = _0x4fdc95(0x1e2), document[_0x4fdc95(0x2f4)]['appendChild'](_0x399ee5), _0x399ee5[_0x4fdc95(0x224)](), _0x399ee5[_0x4fdc95(0xad)]();
        }
        function _0x17be62() {
            const _0x3c80e5 = _0x1ad2d2;
            clearInterval(_0x455203), _0x63f2f9(_0x3c80e5(0x274))[_0x3c80e5(0xad)](), _0x63f2f9(_0x3c80e5(0xd7))[_0x3c80e5(0xad)](), _0x63f2f9(_0x3c80e5(0x1f1))[_0x3c80e5(0x19f)](_0x3c80e5(0x2c9)), _0x256ff4 = ![], _0x1f69d8 = ![], _0x251598 = location[_0x3c80e5(0x29a)], _0x1b8b1b[_0x3c80e5(0x109)](), _0x180cdc(_0x3c80e5(0x13f));
        }
        function _0x180cdc(..._0x57122e) {
            const _0xb14e7e = _0x1ad2d2;
            var _0x11b921 = new Date();
            _0x2657b1[_0xb14e7e(0x2b6)]({
                'time': _0x11b921[_0xb14e7e(0x29c)](),
                'content': [..._0x57122e]
            }), _0x2657b1[_0xb14e7e(0xab)] > 0x3e8 && (_0x2657b1 = [
                {
                    'time': _0x11b921[_0xb14e7e(0x29c)](),
                    'content': [_0xb14e7e(0x100)]
                },
                ..._0x2657b1[_0xb14e7e(0x28b)](-0x3e7)
            ]), console[_0xb14e7e(0x1b8)]('[' + _0x11b921[_0xb14e7e(0x1da)]() + ']', ..._0x57122e);
        }
        function _0xd89ef6() {
            const _0xa2d6c4 = _0x1ad2d2;
            for (let _0xa8738f in _0x500c04) {
                GM_getValue(_0xa8738f) != null && typeof GM_getValue(_0xa8738f) === _0xa2d6c4(0x278) && (_0x500c04[_0xa8738f] = GM_getValue(_0xa8738f));
            }
        }
        function _0x23f3cf(_0x140ee1, _0x1fc354, _0x1f7954, _0x451375 = '') {
            const _0x1c4807 = _0x1ad2d2;
            _0x1fc354[_0x1c4807(0x221)]('div.volume_slider')[_0x1c4807(0xab)] === 0x0 ? (_0x1fc354['append'](_0x1c4807(0x216) + _0x451375 + _0x1c4807(0x105)), _0x1fc354[_0x1c4807(0x221)](_0x1c4807(0x247))[_0x1c4807(0x225)](_0x1c4807(0x2ea) + _0xabfde5 + _0x1c4807(0x243)), _0x1fc354['find']('div.volume_slider\x20input')['attr']('style', '--ig-track-progress:\x20' + (_0xabfde5 * 0x64 + '%')), _0x1fc354[_0x1c4807(0x221)](_0x1c4807(0x14d))['on']('input', function () {
                const _0x2527a6 = _0x1c4807;
                var _0x4373cb = _0x63f2f9(this)[_0x2527a6(0x1ae)]() * 0x64 + '%';
                _0xabfde5 = _0x63f2f9(this)[_0x2527a6(0x1ae)](), GM_setValue('G_VIDEO_VOLUME', _0x63f2f9(this)[_0x2527a6(0x1ae)]()), _0x63f2f9(this)[_0x2527a6(0x2a4)](_0x2527a6(0x2e5), _0x2527a6(0xb8) + _0x4373cb), _0x140ee1['each'](function () {
                    const _0x4f3a51 = _0x2527a6;
                    _0x180cdc('(' + _0x1f7954 + ')', _0x4f3a51(0x24a)), this[_0x4f3a51(0x1b3)] = _0xabfde5;
                });
            }), _0x1fc354['find'](_0x1c4807(0x14d))['on'](_0x1c4807(0xe7), function () {
                const _0x5fccd8 = _0x1c4807;
                var _0x53c953 = _0xabfde5 * 0x64 + '%';
                _0x63f2f9(this)[_0x5fccd8(0x2a4)](_0x5fccd8(0x2e5), _0x5fccd8(0xb8) + _0x53c953), _0x63f2f9(this)['val'](_0xabfde5), _0x140ee1['each'](function () {
                    const _0x564cb8 = _0x5fccd8;
                    _0x180cdc('(' + _0x1f7954 + ')', _0x564cb8(0x24a)), this[_0x564cb8(0x1b3)] = _0xabfde5;
                });
            }), _0x1fc354[_0x1c4807(0x221)](_0x1c4807(0x247))['on']('click', function (_0x47447d) {
                const _0x4b5a98 = _0x1c4807;
                _0x47447d[_0x4b5a98(0x227)](), _0x47447d['preventDefault']();
            })) : _0x1fc354[_0x1c4807(0x221)](_0x1c4807(0x247))[_0x1c4807(0xad)]();
        }
        _0x63f2f9(function () {
            const _0x4c4069 = _0x1ad2d2;
            function _0x4c8225(_0x634f20) {
                const _0x3d1fc1 = a0_0x325c;
                var _0x385691 = [];
                for (var _0x307d88 of _0x634f20) {
                    _0x385691[_0x3d1fc1(0x2b6)]({
                        'tagName': _0x307d88[_0x3d1fc1(0xb5)],
                        'id': _0x307d88['id'],
                        'className': _0x307d88[_0x3d1fc1(0x20d)]
                    });
                }
                return _0x385691;
            }
            function _0x5af202() {
                const _0x4ded89 = a0_0x325c;
                let _0x4afa53 = _0x63f2f9(_0x4ded89(0x13d))[0x0];
                var _0x1b7b02 = '';
                _0x2657b1['forEach'](_0x20106f => {
                    const _0x1bfd56 = _0x4ded89;
                    var _0x493931 = JSON['stringify'](_0x20106f['content'], function (_0xad1cc1, _0x37c872) {
                        const _0x14c0ab = a0_0x325c;
                        if (Array['isArray'](this)) {
                            if (typeof _0x37c872 === _0x14c0ab(0x20f) && _0x37c872 instanceof jQuery)
                                return _0x4c8225(_0x37c872);
                            return _0x37c872;
                        } else
                            return _0x37c872;
                    }, '\x09');
                    _0x1b7b02 += _0x20106f[_0x1bfd56(0x22b)] + ':\x20' + _0x493931 + '\x0a';
                }), _0x63f2f9(_0x4ded89(0x2d5))[_0x4ded89(0x260)]('Logger:\x0a' + _0x1b7b02 + _0x4ded89(0x11f) + location[_0x4ded89(0x286)] + _0x4ded89(0x235) + _0x4afa53[_0x4ded89(0x250)]);
            }
            _0x63f2f9(_0x4c4069(0x2f4))['on']('click', _0x4c4069(0x239), function () {
                _0x5af202();
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), _0x4c4069(0x181), function () {
                const _0x1a51bb = _0x4c4069;
                _0x63f2f9(_0x1a51bb(0x2d5))[_0x1a51bb(0x261)](), document[_0x1a51bb(0x26c)](_0x1a51bb(0xd1));
            }), _0x63f2f9(_0x4c4069(0x2f4))['on']('click', _0x4c4069(0x2c3), function () {
                const _0x108bc0 = _0x4c4069;
                _0x63f2f9(_0x108bc0(0x2d5))['text']()['length'] === 0x0 && _0x5af202();
                var _0x3b4834 = _0x63f2f9(_0x108bc0(0x2d5))[_0x108bc0(0x260)](), _0x64159c = document[_0x108bc0(0x1cf)]('a'), _0x15a370 = new Blob([_0x3b4834], { 'type': 'text/plain' });
                _0x64159c['href'] = URL[_0x108bc0(0x197)](_0x15a370), _0x64159c[_0x108bc0(0x191)] = _0x108bc0(0x217) + new Date()['getTime']() + '.txt', document[_0x108bc0(0x2f4)][_0x108bc0(0x2c5)](_0x64159c), _0x64159c[_0x108bc0(0x224)](), _0x64159c[_0x108bc0(0xad)]();
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), _0x4c4069(0x1df), function () {
                const _0x4324d5 = _0x4c4069;
                _0x63f2f9(this)[_0x4324d5(0x1ea)](_0x4324d5(0x23e))[_0x4324d5(0xab)] > 0x0 ? _0x63f2f9(this)[_0x4324d5(0x1ea)]('#tempWrapper')[_0x4324d5(0x14c)](0xfa, function () {
                    const _0x461b88 = _0x4324d5;
                    _0x63f2f9(this)[_0x461b88(0xad)]();
                }) : _0x63f2f9(_0x4324d5(0x130))['remove']();
            }), _0x63f2f9(window)[_0x4c4069(0x2f3)](function (_0x3b5b2e) {
                const _0x3e0686 = _0x4c4069;
                _0x3b5b2e[_0x3e0686(0x2b2)] == '81' && _0x3b5b2e[_0x3e0686(0xf4)] && (_0x63f2f9('.IG_SN_DIG')[_0x3e0686(0xad)](), _0x3b5b2e[_0x3e0686(0x13c)]()), _0x3b5b2e[_0x3e0686(0x2b2)] == '87' && _0x3b5b2e['altKey'] && (_0x213648(), _0x3b5b2e[_0x3e0686(0x13c)]()), _0x3b5b2e[_0x3e0686(0x2b2)] == '90' && _0x3b5b2e[_0x3e0686(0xf4)] && (_0x256b47(), _0x3b5b2e[_0x3e0686(0x13c)]()), _0x3b5b2e[_0x3e0686(0x2b2)] == '82' && _0x3b5b2e[_0x3e0686(0xf4)] && (_0x17be62(), _0x3b5b2e[_0x3e0686(0x13c)]()), _0x3b5b2e[_0x3e0686(0x2b2)] == '83' && _0x3b5b2e[_0x3e0686(0xf4)] && (location[_0x3e0686(0x29a)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x63f2f9(_0x3e0686(0x2c7))[_0x3e0686(0xab)] > 0x0 && _0x63f2f9(_0x3e0686(0x2c7))?.[_0x3e0686(0x224)](), location[_0x3e0686(0x29a)][_0x3e0686(0x162)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x63f2f9(_0x3e0686(0x25c))['length'] > 0x0 && _0x63f2f9(_0x3e0686(0x25c))?.[_0x3e0686(0x224)](), _0x3b5b2e[_0x3e0686(0x13c)]());
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x1bc), _0x4c4069(0xf5), function (_0x59cce2) {
                const _0x224764 = _0x4c4069;
                var _0x3e4a7a = _0x63f2f9(this)['attr']('id');
                if (_0x3e4a7a && _0x500c04[_0x3e4a7a] !== undefined) {
                    let _0x17e670 = _0x63f2f9(this)[_0x224764(0x1c3)]('checked');
                    GM_setValue(_0x3e4a7a, _0x17e670), _0x500c04[_0x3e4a7a] = _0x17e670, console[_0x224764(0x1b8)](_0x224764(0xd9), _0x3e4a7a, _0x17e670);
                }
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), _0x4c4069(0x182), function (_0xe9465e) {
                const _0x5097e9 = _0x4c4069;
                _0x63f2f9(this)['find'](_0x5097e9(0x23e))['length'] > 0x0 && _0xe9465e['preventDefault']();
            }), _0x63f2f9(_0x4c4069(0x2f4))['on']('change', _0x4c4069(0xb1), function () {
                const _0x3bf46e = _0x4c4069;
                let _0x538155 = _0x63f2f9(this)[_0x3bf46e(0x1ae)]();
                _0x63f2f9(this)[_0x3bf46e(0x2a4)]('type') == _0x3bf46e(0x1c0) ? _0x63f2f9(this)[_0x3bf46e(0x27c)]()[_0x3bf46e(0x1ae)](_0x538155) : _0x63f2f9(this)[_0x3bf46e(0x1c6)]()[_0x3bf46e(0x1ae)](_0x538155), _0x538155 >= 0x0 && _0x538155 <= 0x1 && (_0xabfde5 = _0x538155, GM_setValue(_0x3bf46e(0xde), _0x538155));
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0xdc), _0x4c4069(0xb1), function (_0x1da795) {
                const _0x485fb0 = _0x4c4069;
                if (_0x63f2f9(this)['attr'](_0x485fb0(0x14a)) == _0x485fb0(0x1c0)) {
                    let _0x3d18b5 = _0x63f2f9(this)[_0x485fb0(0x1ae)]();
                    _0x63f2f9(this)['next']()['val'](_0x3d18b5);
                } else {
                    let _0x452dd9 = _0x63f2f9(this)[_0x485fb0(0x1ae)]();
                    _0x452dd9 >= 0x0 && _0x452dd9 <= 0x1 ? _0x63f2f9(this)['prev']()[_0x485fb0(0x1ae)](_0x452dd9) : _0x452dd9 < 0x0 ? _0x63f2f9(this)['val'](0x0) : _0x63f2f9(this)[_0x485fb0(0x1ae)](0x1);
                }
            }), _0x63f2f9(_0x4c4069(0x2f4))['on']('input', _0x4c4069(0x170), function (_0x17551a) {
                const _0x347332 = _0x4c4069;
                GM_setValue(_0x347332(0xfc), _0x63f2f9(this)[_0x347332(0x1ae)]()), _0x5c7315 = _0x63f2f9(this)[_0x347332(0x1ae)]();
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), _0x4c4069(0x223), function (_0x141e14) {
                _0x141e14['preventDefault'](), _0x224159(this);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on']('click', _0x4c4069(0xda), function () {
                const _0x365a6b = _0x4c4069;
                if (_0x500c04[_0x365a6b(0xaa)] && _0x500c04[_0x365a6b(0x10b)])
                    _0x224159(_0x63f2f9(this)['parent']()[_0x365a6b(0x177)]('a')[_0x365a6b(0x174)]()[0x0], !![]);
                else {
                    var _0x40ef09 = new URL(_0x63f2f9(this)[_0x365a6b(0x1ea)]()[_0x365a6b(0x177)]('a')[_0x365a6b(0x2a4)](_0x365a6b(0xf1)));
                    _0x40ef09[_0x365a6b(0x112)] = _0x365a6b(0x273), _0x54c0cb(_0x40ef09[_0x365a6b(0x29a)]);
                }
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), '.IG_SN_DIG_BODY\x20.videoThumbnail', function () {
                const _0x3df929 = _0x4c4069;
                let _0x528cb8 = new Date()['getTime']();
                _0x500c04[_0x3df929(0x2d4)] && _0x63f2f9(this)['parent']()[_0x3df929(0x177)]('a')['attr']('datetime') && (_0x528cb8 = _0x63f2f9(this)[_0x3df929(0x1ea)]()[_0x3df929(0x177)]('a')['attr'](_0x3df929(0x2b0)));
                let _0x13eadb = _0x63f2f9(this)['parent']()[_0x3df929(0x177)]('a')['attr'](_0x3df929(0x16e)) ?? _0x63f2f9(_0x3df929(0x2e7))[_0x3df929(0x260)]();
                _0x2755ba(_0x63f2f9(this)['parent']()[_0x3df929(0x177)]('a')[_0x3df929(0x221)](_0x3df929(0x1a4))[_0x3df929(0x174)]()[_0x3df929(0x2a4)](_0x3df929(0x269)), _0x63f2f9(this)['parent']()[_0x3df929(0x177)]('a')[_0x3df929(0x2a4)](_0x3df929(0x2d2)), _0x3df929(0x2ef), _0x528cb8, 'jpg', _0x13eadb);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), _0x4c4069(0x2c7), function () {
                _0xe46099(!![]);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on']('click', _0x4c4069(0xd5), function (_0x5eb3f1) {
                const _0x276de0 = _0x4c4069;
                _0x5eb3f1[_0x276de0(0x13c)](), _0xe46099(!![], !![], !![]);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), '.IG_DWSTORY_THUMBNAIL', function () {
                _0x552809(!![]);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), _0x4c4069(0xed), function (_0x351c9f) {
                const _0x54f1d1 = _0x4c4069;
                _0x351c9f[_0x54f1d1(0x227)](), _0x6d0e23(!![]);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on']('click', '.IG_DWHISTORY', function () {
                _0x10f2fe(!![]);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), _0x4c4069(0x206), function (_0x59fe43) {
                _0x59fe43['preventDefault'](), _0x10f2fe(!![], !![]);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on']('click', '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x130221(!![]);
            }), _0x63f2f9('body')['on'](_0x4c4069(0x224), _0x4c4069(0x125), function () {
                _0x3799cd(!![], !![]);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), '.IG_REELS_NEWTAB', function () {
                _0x3799cd(!![], !![], !![]);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), _0x4c4069(0x147), function () {
                _0x3799cd(!![], ![]);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x284), _0x4c4069(0x2d8), function (_0x5ef2e1) {
                const _0x5745df = _0x4c4069;
                if (_0x5ef2e1['which'] === 0x3 || _0x5ef2e1['which'] === 0x2) {
                    if (location[_0x5745df(0x29a)] === _0x5745df(0x2ce) && _0x500c04[_0x5745df(0x2a9)]) {
                        _0x5ef2e1[_0x5745df(0x13c)]();
                        if (_0x63f2f9(this)[_0x5745df(0x221)]('canvas._aarh')[_0x5745df(0xab)] > 0x0) {
                            const _0x138a0f = _0x5745df(0x2ce) + _0x63f2f9(this)[_0x5745df(0x177)](_0x5745df(0x2dc))[_0x5745df(0x208)]()[_0x5745df(0x260)]();
                            _0x5ef2e1['which'] === 0x2 ? GM_openInTab(_0x138a0f) : location[_0x5745df(0x29a)] = _0x138a0f;
                        }
                    }
                }
            }), _0x63f2f9(_0x4c4069(0x2f4))['on']('change', '.IG_SN_DIG_TITLE\x20.checkbox', function () {
                const _0x44c86b = _0x4c4069;
                var _0x1ae6bc = _0x63f2f9(this)['find'](_0x44c86b(0xdc))[_0x44c86b(0x1c3)](_0x44c86b(0xb6));
                _0x63f2f9(_0x44c86b(0xf2))[_0x44c86b(0x18f)](function () {
                    const _0x23df88 = _0x44c86b;
                    _0x63f2f9(this)[_0x23df88(0x1c3)](_0x23df88(0xb6), _0x1ae6bc);
                });
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x1bc), '.IG_SN_DIG_BODY\x20.inner_box', function () {
                const _0x61567d = _0x4c4069;
                var _0x2b5271 = _0x63f2f9(_0x61567d(0x175))['length'], _0x1eef8b = _0x63f2f9(_0x61567d(0xf2))[_0x61567d(0xab)];
                _0x63f2f9(_0x61567d(0x11d))['find'](_0x61567d(0xdc))[_0x61567d(0x1c3)](_0x61567d(0xb6), _0x2b5271 == _0x1eef8b);
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x224), _0x4c4069(0x2fa), function () {
                const _0x5b13e3 = _0x4c4069;
                let _0x6a6891 = 0x0;
                _0x63f2f9(_0x5b13e3(0x18e))['each'](function () {
                    const _0x21fafb = _0x5b13e3;
                    _0x63f2f9(this)[_0x21fafb(0x1c6)]()['children'](_0x21fafb(0xdc))[_0x21fafb(0x1c3)](_0x21fafb(0xb6)) && (_0x63f2f9(this)[_0x21fafb(0x224)](), _0x6a6891++);
                }), _0x6a6891 == 0x0 && alert(_0x37ab59(_0x5b13e3(0x10a)));
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x1bc), _0x4c4069(0x2f6), function () {
                const _0x20569a = _0x4c4069;
                GM_setValue(_0x20569a(0x2af), _0x63f2f9(this)[_0x20569a(0x1ae)]()), _0x374134 = _0x63f2f9(this)[_0x20569a(0x1ae)](), _0x374134?.[_0x20569a(0xe5)]('en') || _0x4e3de4[_0x374134] != null ? (_0xe0658d(), _0x37a11c()) : _0xe4980a(_0x374134)[_0x20569a(0xfd)](_0x107eb0 => {
                    _0x4e3de4[_0x374134] = _0x107eb0, _0xe0658d(), _0x37a11c();
                })[_0x20569a(0xb9)](_0x43025d => {
                    const _0x71152f = _0x20569a;
                    console[_0x71152f(0x21c)](_0x71152f(0x196), _0x43025d);
                });
            }), _0x63f2f9(_0x4c4069(0x2f4))['on'](_0x4c4069(0x1bc), _0x4c4069(0x2a3), function () {
                const _0x268d9f = _0x4c4069;
                _0x63f2f9('#locatePreview')[_0x268d9f(0x260)]('' + new Date()[_0x268d9f(0x1f7)](_0x63f2f9(this)[_0x268d9f(0x1ae)](), {
                    'hour12': ![],
                    'second': _0x268d9f(0x270),
                    'minute': _0x268d9f(0x270),
                    'hour': _0x268d9f(0x270),
                    'month': _0x268d9f(0x270),
                    'day': _0x268d9f(0x270),
                    'year': 'numeric'
                })['replaceAll']('/', '-')), LOCATE_DATE_FORMAT = _0x63f2f9(this)[_0x268d9f(0x1ae)](), GM_setValue('G_LOCATE_DATE_FORMAT', _0x63f2f9(this)[_0x268d9f(0x1ae)]());
            }), _0x63f2f9(_0x4c4069(0x2f4))['on']('click', '.IG_SN_DIG_TITLE\x20#batch_download_direct', function () {
                const _0x352a15 = _0x4c4069;
                _0x63f2f9(_0x352a15(0x18e))['each'](function () {
                    const _0x42faf0 = _0x352a15;
                    _0x63f2f9(this)[_0x42faf0(0x224)]();
                });
            });
            const _0x4878f2 = new MutationObserver(_0x261ae5 => {
                const _0x563a97 = _0x4c4069;
                for (const _0x929c4 of _0x261ae5) {
                    _0x929c4[_0x563a97(0x14a)] === _0x563a97(0x2cd) && _0x929c4[_0x563a97(0x2a8)]['forEach'](_0x175717 => {
                        const _0x74734a = _0x563a97, _0x5bdda3 = _0x63f2f9(_0x175717)[_0x74734a(0x221)](_0x74734a(0x20b));
                        if (_0x5bdda3[_0x74734a(0xab)] > 0x0) {
                            _0x500c04[_0x74734a(0x226)] && _0x5bdda3[_0x74734a(0x18f)](function () {
                                const _0x56387e = _0x74734a;
                                _0x63f2f9(this)['on'](_0x56387e(0x1e5), function () {
                                    const _0x2eebef = _0x56387e;
                                    !_0x63f2f9(this)[_0x2eebef(0x230)]('modify') && (_0x63f2f9(this)['attr']('data-modify', !![]), this[_0x2eebef(0x1b3)] = _0xabfde5, _0x180cdc('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x74734a(0x286)][_0x74734a(0x162)](/^(\/stories\/)/ig)) {
                                const _0x3ffe99 = location['pathname']['match'](/^(\/stories\/highlights\/)/ig) != null, _0x2da58d = _0x3ffe99 ? _0x74734a(0x1a2) : 'story';
                                _0x5bdda3[_0x74734a(0x18f)](function () {
                                    const _0x52c6ee = _0x74734a;
                                    _0x63f2f9(this)['on'](_0x52c6ee(0x26a), function () {
                                        const _0x5e8d9a = _0x52c6ee;
                                        if (!_0x63f2f9(this)[_0x5e8d9a(0x230)](_0x5e8d9a(0x150))) {
                                            let _0x560ac1 = _0x63f2f9(this);
                                            _0x560ac1[_0x5e8d9a(0x292)](_0x5e8d9a(0x255))[_0x5e8d9a(0x12f)](function () {
                                                const _0x29894e = _0x5e8d9a;
                                                return _0x63f2f9(this)[_0x29894e(0xac)]() == _0x560ac1[_0x29894e(0xac)]();
                                            })[_0x5e8d9a(0x221)](_0x5e8d9a(0xd0))[_0x5e8d9a(0xab)] === 0x0 ? (_0x63f2f9(this)[_0x5e8d9a(0x2a4)](_0x5e8d9a(0x280), !![]), _0x3ffe99 ? _0x130221(![]) : _0x552809(![]), _0x180cdc('(' + _0x2da58d + ')', 'Manually\x20inserting\x20thumbnail\x20button')) : (_0x63f2f9(this)[_0x5e8d9a(0x2a4)](_0x5e8d9a(0x280), !![]), _0x180cdc('(' + _0x2da58d + ')', _0x5e8d9a(0x21e)));
                                        }
                                    });
                                    var _0x2d9d7b = _0x63f2f9(this);
                                    if (_0x500c04[_0x52c6ee(0xf9)]) {
                                        if (!_0x2d9d7b[_0x52c6ee(0x230)]('controls')) {
                                            _0x180cdc('(' + _0x2da58d + ')', _0x52c6ee(0xc8)), this['volume'] = _0xabfde5, _0x2d9d7b['on'](_0x52c6ee(0x2b7), function () {
                                                const _0x3d5a69 = _0x52c6ee;
                                                this[_0x3d5a69(0x1b3)] = _0xabfde5;
                                            });
                                            let _0x53ac3a = _0x2d9d7b[_0x52c6ee(0x292)](_0x52c6ee(0x2dc))[_0x52c6ee(0x12f)](function () {
                                                    const _0x2ba131 = _0x52c6ee;
                                                    return _0x63f2f9(this)[_0x2ba131(0x2a4)](_0x2ba131(0x218)) == null && _0x63f2f9(this)[_0x2ba131(0x2a4)]('style') == null;
                                                })[_0x52c6ee(0x174)](), _0x60c4e2 = _0x53ac3a['next']();
                                            _0x60c4e2[_0x52c6ee(0x1af)]();
                                            let _0x483040 = _0x53ac3a[_0x52c6ee(0x221)](_0x52c6ee(0xa9));
                                            _0x483040[_0x52c6ee(0x1af)]();
                                            const _0x1af6e1 = function (_0x3f87dc) {
                                                const _0x45352 = _0x52c6ee;
                                                _0x3f87dc['preventDefault'](), _0x2d9d7b[_0x45352(0x183)](_0x45352(0x26e), '2'), _0x2d9d7b[_0x45352(0x2a4)](_0x45352(0x1a7), !![]), _0x483040[_0x45352(0x1af)](), _0x60c4e2[_0x45352(0x1af)](), _0x23f3cf(_0x2d9d7b, _0x2d9d7b['parents'](_0x45352(0x255))[_0x45352(0x12f)](function () {
                                                    const _0x4d62a9 = _0x45352;
                                                    return _0x63f2f9(this)[_0x4d62a9(0xac)]() == _0x2d9d7b[_0x4d62a9(0xac)]();
                                                })['first'](), _0x2da58d, 'vertical');
                                            };
                                            _0x2d9d7b[_0x52c6ee(0x1ea)]()[_0x52c6ee(0x221)](_0x52c6ee(0x120))['on'](_0x52c6ee(0xaf), _0x1af6e1), _0x483040['on'](_0x52c6ee(0xaf), _0x1af6e1), _0x60c4e2['on'](_0x52c6ee(0xaf), _0x1af6e1), _0x2d9d7b['on']('contextmenu', function (_0x4be18e) {
                                                const _0x4a628d = _0x52c6ee;
                                                _0x4be18e[_0x4a628d(0x13c)](), _0x2d9d7b['css'](_0x4a628d(0x26e), '-1'), _0x2d9d7b[_0x4a628d(0x19f)](_0x4a628d(0x1a7)), _0x60c4e2['show'](), _0x483040[_0x4a628d(0xbf)](), _0x23f3cf(_0x2d9d7b, _0x2d9d7b[_0x4a628d(0x292)](_0x4a628d(0x255))[_0x4a628d(0x12f)](function () {
                                                    const _0x14b59e = _0x4a628d;
                                                    return _0x63f2f9(this)['width']() == _0x2d9d7b[_0x14b59e(0xac)]();
                                                })[_0x4a628d(0x174)](), _0x2da58d, 'vertical');
                                            }), _0x2d9d7b['on']('volumechange', function () {
                                                const _0x413d90 = _0x52c6ee;
                                                let _0x39b74b = _0x53ac3a['parent']()[_0x413d90(0x221)](_0x413d90(0x2eb))[_0x413d90(0x292)](_0x413d90(0xc1))[_0x413d90(0x174)]();
                                                var _0x25906e = _0x39b74b['find'](_0x413d90(0x2fc))[_0x413d90(0xab)] === 0x0;
                                                this[_0x413d90(0x15a)] != _0x25906e && (this[_0x413d90(0x1b3)] = _0xabfde5, _0x39b74b?.[_0x413d90(0x224)]()), _0x63f2f9(this)[_0x413d90(0x2a4)](_0x413d90(0x1dc)) && (_0xabfde5 = this[_0x413d90(0x1b3)], GM_setValue(_0x413d90(0xde), this['volume'])), this[_0x413d90(0x1b3)] == _0xabfde5 && _0x63f2f9(this)[_0x413d90(0x2a4)](_0x413d90(0x1dc), !![]);
                                            }), _0x2d9d7b['css'](_0x52c6ee(0x251), _0x52c6ee(0x1de)), _0x2d9d7b['css']('z-index', '2'), _0x2d9d7b[_0x52c6ee(0x2a4)](_0x52c6ee(0x299), !![]), _0x2d9d7b[_0x52c6ee(0x2a4)](_0x52c6ee(0x1a7), !![]);
                                        }
                                    } else
                                        _0x23f3cf(_0x2d9d7b, _0x2d9d7b[_0x52c6ee(0x292)](_0x52c6ee(0x255))['filter'](function () {
                                            const _0x395c2d = _0x52c6ee;
                                            return _0x63f2f9(this)['width']() == _0x2d9d7b[_0x395c2d(0xac)]();
                                        })[_0x52c6ee(0x174)](), _0x2da58d, _0x52c6ee(0x1d7));
                                });
                            }
                        }
                    });
                }
            });
            _0x4878f2['observe'](_0x63f2f9(_0x4c4069(0x13d))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));