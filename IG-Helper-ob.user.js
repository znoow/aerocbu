// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.1.1
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
// ==/UserScript==

function a0_0xa175(_0x53f5b3, _0x2ff793) {
    const _0x5d9513 = a0_0x5d95();
    return a0_0xa175 = function (_0xa1756a, _0x43bdf6) {
        _0xa1756a = _0xa1756a - 0x111;
        let _0x7dec61 = _0x5d9513[_0xa1756a];
        return _0x7dec61;
    }, a0_0xa175(_0x53f5b3, _0x2ff793);
}
function a0_0x5d95() {
    const _0x4bf859 = [
        '2hgWyqN',
        'replace',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        'Feedback',
        'NO_CHECK_RESOURCE',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'getHighlightStories()',
        'after',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'CLOSE',
        '#iv_close',
        'load',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'LOCALE_MANIFEST',
        'div\x20>\x20ul\x20li._acaz',
        '.IG_POPUP_DIG\x20#post_info',
        '1211485nmPocL',
        'padEnd',
        'isReels',
        '%22}',
        'reels',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'G_VIDEO_VOLUME',
        'REPORT_GITHUB',
        'play\x20playing',
        '#article-id',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'fail',
        'altKey',
        '<a\x20datetime=\x22',
        'Video',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        '/info/',
        'NOTICE_UPDATE_TITLE',
        '25182thrgfb',
        'slice',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'css',
        'grabbing',
        'Cannot\x20find\x20resource\x20url.',
        '.IG_DW_MAIN',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'getUserId()',
        'data-ih-locale-title',
        'pageY',
        '__typename',
        'volumechange',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'display',
        'relative',
        'SETTING',
        'reel',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'last',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        '<div\x20class=\x22button_wrapper\x22>',
        'getDate',
        'owner',
        '\x22\x20data-globalIndex=\x22',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'boolean',
        '</span></div>',
        'div.volume_slider\x20input',
        '20000',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'download',
        'ig_cache_key',
        'getMonth',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        '.IG_DWSTORY_THUMBNAIL',
        '</div></div>',
        'SELECT_AND_COPY',
        '.IG_DWSTORY_ALL',
        '<a\x20href=\x22https://www.instagram.com/p/',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'video_resources',
        'Download\x20Selected\x20Resources',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        '_acnf',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '.IG_REELS',
        'GL_repeat',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'isIntersecting',
        '.IG_REELS_THUMBNAIL',
        'edge_sidecar_to_children',
        '12NctqQw',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'div[style][class]',
        'data-modify-thumbnail',
        'object',
        'muted',
        'NEW_TAB',
        'RENAME_PUBLISH_DATE',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'getPostOwner()',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'userAgent',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'registerMenuIds',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        '</span>\x20<input\x20id=\x22',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'textContent',
        'transform',
        'parent',
        '</a>',
        'getUserHighSizeProfile()',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20</div>',
        'DIRECT_DOWNLOAD_ALL',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'input',
        'DOWNLOAD_ALL',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '._aagv\x20img',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'click',
        '--ig-track-progress:\x20',
        'is_video',
        'username',
        '#scrollWrapper',
        'host',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'status',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'video_url',
        'push',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'code',
        'forEach',
        '\x22\x20title=\x22',
        'https://i.instagram.com/api/v1/users/',
        'downloadURL',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'Manually\x20inserting\x20thumbnail\x20button',
        'Debug\x20Window',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        'FORCE_RESOURCE_VIA_MEDIA',
        'data-type',
        'VID',
        'reject',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'trim',
        '_acnb',
        'ended',
        'z-index',
        '.xpgaw4o',
        '.button_wrapper',
        'getMediaInfo()',
        'createMediaListDOM',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'config_width',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'timeupdate',
        'Download',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '.IG_DWHISTORY_THUMBNAIL',
        'data-snig',
        'tagName',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'G_RENAME_FORMAT',
        '</span>\x20',
        'isHomepage',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'Donate',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'userLanguage',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'split',
        'change',
        'Loading\x20Blob\x20Media...',
        'getHours',
        'body\x20>\x20div\x20section._ac0a',
        'filter',
        'Script\x20Loaded',
        'mp4',
        'REPORT_DISCORD',
        'which',
        'GL_username',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'absolute',
        'tempFetchRateLimit',
        'section\x20>\x20main[role=\x22main\x22]',
        'reels_media',
        'removeAttr',
        'data-href',
        'img',
        'append',
        'data-remove-thumbnail',
        'GL_observer',
        'warn',
        'modify-thumbnail',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'pathname',
        '10690897aKftpB',
        'Feedback\x20Options',
        'createObjectURL',
        '._acay\x20._acaz',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'wrap',
        'user\x20settings',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'Fetch\x20from\x20memory\x20cache:',
        'div:not([class]):not([style])',
        'remove-thumbnail',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        '\x22\x20/>',
        '<p\x20id=\x22_SNLOAD\x22>',
        'getStories()',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'locale',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'MODIFY_VIDEO_VOLUME',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '\x22\x20datetime=\x22',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'https://www.instagram.com/p/',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'controls',
        'DIV',
        'div[id^=\x22mount\x22]',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        '.circle_wrapper',
        'getTime',
        '.IG_IMAGE_VIEWER',
        'SKIP_VIEW_STORY_CONFIRM',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'target',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '.IG_DWHINEWTAB',
        'data-username',
        'name',
        'toISOString',
        'Remote\x20version:\x20',
        'stories',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'each',
        '<div></div>',
        'svg',
        'DEBUG',
        'navigator',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        '.IG_DWHISTORY_ALL',
        'originalEvent',
        '.IG_DWHISTORY',
        'keys',
        '37px',
        '\x22\x20data-ih-locale-title=\x22',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'toString',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'loop',
        'x1s85apg',
        'HTML5_VIDEO_CONTROL',
        'GraphVideo',
        '1816944dtkUAC',
        'Preference\x20Settings',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '.IG_POPUP_DIG\x20.globalSettings',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'x1iyjqo2',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        ':hidden',
        'select',
        'pageLoaded',
        'DONATE',
        'NOTICE_UPDATE_CONTENT',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        'hide',
        'GL_postPath',
        'firstStarted',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'scrollBy',
        'removeClass',
        'modify',
        '[data-ih-locale]',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'attr',
        'IMAGE_VIEWER',
        'next',
        'SHOW_DOM_TREE',
        'children',
        'left',
        'prev',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'LOAD_BLOB_ONE',
        '36qcdqbi',
        '.IG_DWSTORY',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'DISABLE_VIDEO_LOOPING',
        '._acay',
        'error',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'cursor',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        'display_url',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'a[href^=\x22/p/\x22]',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'taken_at',
        'searchParams',
        '920427gruMJt',
        'ig_helper_notice',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'carousel_media',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'https://i.instagram.com/api/v1/media/',
        'taken_at_timestamp',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'first',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'GL_dataCache',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'type',
        'videoVolume',
        'hasClass',
        '_ac3q',
        'pageX',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'img[referrerpolicy]',
        '[data-snig]',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '</a></button>',
        'data-completed',
        'items',
        '.IG_POPUP_DIG\x20input',
        '_INTRO',
        'THUMBNAIL',
        '<a\x20media-id=\x22',
        'BATCH_DOWNLOAD_SELECTED',
        'datetime',
        'version',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'startsWith',
        'INTERNAL_CSS',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'Logger:\x0a',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'toLowerCase',
        '.IG_DWPROFILE',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'innerHTML',
        'appendChild',
        'GL_logger',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'stp',
        'padStart',
        'IMG',
        'GL_registerEventList',
        'text',
        'responseText',
        'carousel_media:',
        '<input\x20value=\x22',
        'xdt_api__v1__media__shortcode__web_info',
        'data-name',
        'profile_pic_url',
        'assign',
        'getUserIdWithAgent()',
        'trigger',
        '#imageViewer',
        '</a></button><br/>',
        'className',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'selected',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'max',
        'DW_ALL',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'Image',
        '[role=\x22button\x22]',
        'src',
        'keydown',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'data-path',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'val',
        'https://www.instagram.com/reels/',
        'jpg',
        'there\x20is\x20no\x20new\x20update',
        'html',
        'video\x20+\x20div\x20>\x20div',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'div#splash-screen',
        'close',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'finalUrl',
        'text/plain',
        'then',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '0px',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'body',
        'includes',
        'updatenotification',
        'logger\x20sliced',
        'AUTO_RENAME',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'feedback_message',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'data-ih-locale',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'isArray',
        'hidden',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'innerHeight',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'copy',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'display_resources',
        'map',
        'stringify',
        'match',
        'users',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        '.IG_THUMBNAIL_MAIN',
        'image_versions2',
        'carousel_media:\x20undefined\x20username',
        'scontent.cdninstagram.com',
        'regenerated',
        '\x20child',
        'https://ko-fi.com/snkoarashi',
        'edges',
        'GET',
        'user',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        '12XwGOsl',
        'video',
        'sort',
        '._acay\x20+\x20.x24i39r',
        'shortcode_media',
        '\x22\x20class=\x22newTab\x22>',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'IG\x20Debug\x20DOM\x20Tree',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'div.volume_slider',
        'thumbnail',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'onReadyMyDW()\x20Timer',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'get',
        'REPORT_FORK',
        'lang',
        'height',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'toUpperCase',
        'prop',
        'parse',
        'GraphSidecar',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'Wololo!\x20New\x20version\x20released.',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'innerWidth',
        'mouseup',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'getTranslationText\x20catch\x20error:',
        '48178658VfdRrZ',
        '.json',
        'getBlobMediaWithQueryID()',
        'www.',
        'video\x20+\x20div',
        'pointer',
        'pause',
        'GraphImage',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'THUMBNAIL_INTRO',
        'length',
        'addedNodes',
        'https://www.instagram.com/reel/',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'srcset',
        'loadstart',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'off',
        'show',
        'video[class]',
        'DOMTree-',
        'bottom',
        '3288FIUBIu',
        'x1lix1fw',
        'remove',
        'top',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        '\x22]\x20span',
        'highlights',
        'observe',
        'FEEDBACK',
        'RELOAD_SCRIPT',
        'mousedown',
        'preventDefault',
        'avatar',
        '.circle_wrapper\x20span',
        'story',
        '</span></label>',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'deltaY',
        'a[href^=\x22/\x22]',
        'G_CHECK_TIMESTAMP',
        'data',
        '/accounts/login',
        'execCommand',
        'query_id',
        'BATCH_DOWNLOAD_DIRECT',
        'volume',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'isHighlightsStory',
        'en-US',
        'main\x20timer\x20re-register\x20completed',
        'catch',
        'position',
        'shortcode',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'element',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        '*/*',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'li._acaz',
        'before',
        '.IG_DWNEWTAB',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'isDialog',
        'addClass',
        'candidates',
        'hostname',
        'parents',
        'article',
        'Open\x20Image\x20In\x20Viewer',
        'fileRenameFormat',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'data-controls',
        'setAttribute',
        'find',
        'currentURL',
        'href',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'query_hash',
        'response',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'Cannot\x20find\x20video\x20URL.',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'faild',
        'getBlobMediaWithQuery()',
        'style',
        'contextmenu',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'FULLSCREEN',
        'DOWNLOAD',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'Checking\x20for\x20Updates',
        'div',
        'smooth',
        'disconnect',
        'fadeOut',
        'div\x20>\x20ul._acay',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'url',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'Show\x20DOM\x20Tree',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'Disable\x20Video\x20Auto-looping',
        'undefined',
        'blob',
        'body\x20>\x20div\x20section:visible._ac0a',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'join',
        'CHECK_UPDATE_MENU',
        'floor',
        'time',
        '.IG_DW_ALL_MAIN',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'Found\x20post\x20container',
        'width',
        'getBlobMedia()',
        'replaceAll',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        'https://www.instagram.com/',
        'script',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'data-loop',
        'Close',
        '.IG_POPUP_DIG',
        'Can\x20not\x20find\x20download\x20url.',
        'LOAD_BLOB_MULTIPLE',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'post',
        '#tempWrapper',
        'log',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'mousemove.igHelper',
        'stopPropagation',
        'isProfile',
        'script[type=\x22application/json\x22]',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '\x20-</a>',
        'Reload\x20Script',
        '.IG_NEWTAB_MAIN',
        'checked',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'NOPATH',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        '</button>',
        '\x22\x20/></div>',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'GM_unregisterMenuCommand',
        'GL_referrer',
        'trigging',
        'video_versions',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'flex',
        'createElement',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'substr',
        'childList',
        'Settings',
        'div:last-child',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'node',
        '</div>',
        '1941310viHwDR',
        'vertical',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'message',
        'div[role=\x22presentation\x22]',
        'data-modify'
    ];
    a0_0x5d95 = function () {
        return _0x4bf859;
    };
    return a0_0x5d95();
}
(function (_0x38e066, _0x4a18e2) {
    const _0x5d3d0c = a0_0xa175, _0xeaf568 = _0x38e066();
    while (!![]) {
        try {
            const _0x4812bc = parseInt(_0x5d3d0c(0x221)) / 0x1 * (parseInt(_0x5d3d0c(0x333)) / 0x2) + parseInt(_0x5d3d0c(0x364)) / 0x3 * (-parseInt(_0x5d3d0c(0x149)) / 0x4) + parseInt(_0x5d3d0c(0x232)) / 0x5 * (-parseInt(_0x5d3d0c(0x353)) / 0x6) + -parseInt(_0x5d3d0c(0x2f0)) / 0x7 + parseInt(_0x5d3d0c(0x184)) / 0x8 * (-parseInt(_0x5d3d0c(0x244)) / 0x9) + -parseInt(_0x5d3d0c(0x21a)) / 0xa + -parseInt(_0x5d3d0c(0x16e)) / 0xb * (-parseInt(_0x5d3d0c(0x27e)) / 0xc);
            if (_0x4812bc === _0x4a18e2)
                break;
            else
                _0xeaf568['push'](_0xeaf568['shift']());
        } catch (_0x43d552) {
            _0xeaf568['push'](_0xeaf568['shift']());
        }
    }
}(a0_0x5d95, 0xe83c1), function (_0x12d31d) {
    setTimeout(() => {
        'use strict';
        const _0x3d7dc7 = a0_0xa175;
        const _0x3eb4a3 = {
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
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': ![],
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': ![],
                'SKIP_VIEW_STORY_CONFIRM': ![]
            }, _0x1254d8 = [
                'RENAME_PUBLISH_DATE',
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
                _0x3d7dc7(0x229)
            ], _0x584745 = {
                'DOWNLOAD': _0x3d7dc7(0x1e9),
                'NEW_TAB': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
                'THUMBNAIL': _0x3d7dc7(0x1a7),
                'DOWNLOAD_ALL': _0x3d7dc7(0x166),
                'CLOSE': _0x3d7dc7(0x20d),
                'FULLSCREEN': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>'
            }, _0x1102b8 = 0xfa, _0x2cfb80 = GM_getResourceText(_0x3d7dc7(0x387)), _0x2ab093 = JSON[_0x3d7dc7(0x163)](GM_getResourceText(_0x3d7dc7(0x22f)));
        var _0x33999c = {
            'videoVolume': GM_getValue(_0x3d7dc7(0x238)) ? GM_getValue(_0x3d7dc7(0x238)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x3d7dc7(0x2ce)) ? GM_getValue(_0x3d7dc7(0x2ce)) : _0x3d7dc7(0x2d3),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x3d7dc7(0x15e)) || navigator['language'] || navigator[_0x3d7dc7(0x2d4)],
            'currentURL': location['href'],
            'firstStarted': ![],
            'pageLoaded': ![],
            'GL_registerEventList': [],
            'GL_logger': [],
            'GL_referrer': null,
            'GL_postPath': null,
            'GL_username': null,
            'GL_repeat': null,
            'GL_dataCache': {
                'stories': {},
                'highlights': {}
            },
            'GL_observer': new MutationObserver(function () {
                _0x4cc821();
            })
        };
        _0x5b92d1(), GM_addStyle(_0x2cfb80), _0x1f1c11(), _0x5a47b6(_0x33999c[_0x3d7dc7(0x15e)])[_0x3d7dc7(0x121)](_0x493737 => {
            const _0x6a2b61 = _0x3d7dc7;
            _0x33999c[_0x6a2b61(0x301)][_0x33999c[_0x6a2b61(0x15e)]] = _0x493737, _0x462701(), _0x1f1c11(), _0xfa466c(0x12c);
        })[_0x3d7dc7(0x1a2)](_0x360479 => {
            const _0x33300a = _0x3d7dc7;
            _0x1f1c11(), _0xfa466c(0x12c), !_0x33999c[_0x33300a(0x15e)][_0x33300a(0x386)]('en') && console[_0x33300a(0x358)](_0x33300a(0x16d), _0x360479);
        }), _0x194c21(_0x3d7dc7(0x2dc), GM_info[_0x3d7dc7(0x1eb)][_0x3d7dc7(0x318)], 'version:', GM_info[_0x3d7dc7(0x1eb)][_0x3d7dc7(0x384)]);
        var _0x559ded = setInterval(function () {
            const _0x2da45b = _0x3d7dc7;
            if (_0x12d31d(_0x2da45b(0x11b))['length'] > 0x0 && !_0x12d31d(_0x2da45b(0x11b))['is'](_0x2da45b(0x33b)) || location[_0x2da45b(0x2ef)]['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x2da45b(0x1b3)]['startsWith'](_0x2da45b(0x171))) {
                _0x33999c[_0x2da45b(0x33d)] = ![];
                return;
            }
            if (_0x33999c[_0x2da45b(0x1bd)] != location[_0x2da45b(0x1be)] || !_0x33999c[_0x2da45b(0x343)] || !_0x33999c['pageLoaded']) {
                console[_0x2da45b(0x1f5)]('Main\x20Timer', _0x2da45b(0x20b)), clearInterval(_0x33999c[_0x2da45b(0x279)]), _0x33999c[_0x2da45b(0x33d)] = ![], _0x33999c[_0x2da45b(0x343)] = !![], _0x33999c[_0x2da45b(0x1bd)] = location[_0x2da45b(0x1be)], _0x33999c[_0x2da45b(0x2eb)][_0x2da45b(0x1d1)]();
                if (location[_0x2da45b(0x1be)][_0x2da45b(0x386)](_0x2da45b(0x308)) || location[_0x2da45b(0x2ef)][_0x2da45b(0x13a)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x2da45b(0x1be)][_0x2da45b(0x386)](_0x2da45b(0x17a))) {
                    _0x33999c[_0x2da45b(0x370)]['stories'] = {}, _0x33999c[_0x2da45b(0x370)][_0x2da45b(0x18a)] = {}, _0x194c21(_0x2da45b(0x1b0));
                    var _0xa52a19 = setInterval(() => {
                        const _0x697acd = _0x2da45b;
                        _0x12d31d('body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')[_0x697acd(0x178)] > 0x0 && (clearInterval(_0xa52a19), setTimeout(() => {
                            _0x4cc821(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x33999c[_0x2da45b(0x33d)] = !![];
                }
                location[_0x2da45b(0x1be)][_0x2da45b(0x386)](_0x2da45b(0x113)) && (_0x194c21(_0x2da45b(0x234)), setTimeout(() => {
                    _0x434c28(![]);
                }, 0x96), _0x33999c['pageLoaded'] = !![]);
                if (location[_0x2da45b(0x1be)][_0x2da45b(0x2d6)]('?')[0x0] == _0x2da45b(0x1ea)) {
                    _0x33999c[_0x2da45b(0x370)][_0x2da45b(0x31b)] = {}, _0x33999c[_0x2da45b(0x370)]['highlights'] = {};
                    let _0x4bffac = _0x33999c['GL_referrer']?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x194c21(_0x2da45b(0x2d0), _0x4bffac), setTimeout(() => {
                        const _0x2351bf = _0x2da45b;
                        _0x4cc821(![], _0x4bffac);
                        const _0x522eef = _0x12d31d(_0x2351bf(0x1c2))?.[_0x2351bf(0x293)]()[0x0];
                        _0x522eef && _0x33999c[_0x2351bf(0x2eb)][_0x2351bf(0x18b)](_0x522eef, { 'childList': !![] });
                    }, 0x96), _0x33999c['pageLoaded'] = !![];
                }
                _0x12d31d('header\x20>\x20*[class]:first-child\x20img[alt]')[_0x2da45b(0x178)] && location[_0x2da45b(0x2ef)][_0x2da45b(0x13a)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname']['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x194c21(_0x2da45b(0x1f9)), setTimeout(() => {
                    _0x2f278e(![]);
                }, 0x96), _0x33999c[_0x2da45b(0x33d)] = !![]);
                if (!_0x33999c['pageLoaded']) {
                    if (location[_0x2da45b(0x1be)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x33999c[_0x2da45b(0x370)][_0x2da45b(0x18a)] = {}, _0x194c21(_0x2da45b(0x19f)), _0x4844e0(![]), _0x33999c[_0x2da45b(0x279)] = setInterval(() => {
                            _0x2cc04d(![]);
                        }, _0x1102b8), _0x12d31d(_0x2da45b(0x328))['length'] && setTimeout(() => {
                            const _0x40acbf = _0x2da45b;
                            if (_0x3eb4a3[_0x40acbf(0x312)]) {
                                var _0x586bec = _0x12d31d(_0x40acbf(0x1a8))['filter'](function () {
                                    const _0x28c1ae = _0x40acbf;
                                    return _0x12d31d(this)[_0x28c1ae(0x34e)]()['length'] === 0x0 && this[_0x28c1ae(0x291)][_0x28c1ae(0x2ba)]() !== '';
                                });
                                _0x586bec?.['trigger']('click');
                            }
                            _0x33999c[_0x40acbf(0x33d)] = !![];
                        }, 0x96);
                    else
                        location[_0x2da45b(0x1be)][_0x2da45b(0x13a)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x194c21('isStory'), _0x12d31d(_0x2da45b(0x2ab))[_0x2da45b(0x178)] > 0x0 && (_0x12d31d('.IG_DWSTORY')[_0x2da45b(0x186)](), _0x12d31d(_0x2da45b(0x1ae))[_0x2da45b(0x186)](), _0x12d31d(_0x2da45b(0x26a))[_0x2da45b(0x178)] && _0x12d31d(_0x2da45b(0x26a))[_0x2da45b(0x186)](), _0x31d914(![]), setTimeout(() => {
                            _0x31d914(![]);
                        }, 0x96)), _0x12d31d(_0x2da45b(0x354))['length'] && setTimeout(() => {
                            const _0x135744 = _0x2da45b;
                            if (_0x3eb4a3[_0x135744(0x312)]) {
                                var _0x43f82a = _0x12d31d(_0x135744(0x1a8))[_0x135744(0x2db)](function () {
                                    const _0x64a6c4 = _0x135744;
                                    return _0x12d31d(this)['children']()['length'] === 0x0 && this[_0x64a6c4(0x291)][_0x64a6c4(0x2ba)]() !== '';
                                });
                                _0x43f82a?.[_0x135744(0x2a0)]();
                            }
                            _0x33999c[_0x135744(0x33d)] = !![];
                        }, 0x96)) : (_0x33999c[_0x2da45b(0x33d)] = ![], _0x12d31d(_0x2da45b(0x354))[_0x2da45b(0x178)] && _0x12d31d(_0x2da45b(0x354))['remove'](), _0x12d31d('.IG_DWSTORY_ALL')['length'] && _0x12d31d(_0x2da45b(0x26d))[_0x2da45b(0x186)](), _0x12d31d(_0x2da45b(0x1ae))['length'] && _0x12d31d('.IG_DWNEWTAB')['remove'](), _0x12d31d('.IG_DWSTORY_THUMBNAIL')[_0x2da45b(0x178)] && _0x12d31d(_0x2da45b(0x26a))['remove'](), _0x12d31d(_0x2da45b(0x328))['length'] && _0x12d31d(_0x2da45b(0x328))[_0x2da45b(0x186)](), _0x12d31d(_0x2da45b(0x326))[_0x2da45b(0x178)] && _0x12d31d(_0x2da45b(0x326))[_0x2da45b(0x186)](), _0x12d31d(_0x2da45b(0x316))['length'] && _0x12d31d(_0x2da45b(0x316))[_0x2da45b(0x186)](), _0x12d31d(_0x2da45b(0x2ca))[_0x2da45b(0x178)] && _0x12d31d(_0x2da45b(0x2ca))[_0x2da45b(0x186)]());
                }
                _0xfa466c(0x12c), _0x33999c[_0x2da45b(0x20a)] = new URL(location[_0x2da45b(0x1be)])[_0x2da45b(0x2ef)];
            }
        }, _0x1102b8);
        async function _0x2e30f7() {
            const _0x19b8e2 = _0x3d7dc7;
            _0x52853b(!![]);
            let _0x273db7 = new Date()[_0x19b8e2(0x310)](), _0x33c548 = Math[_0x19b8e2(0x1e1)](_0x273db7 / 0x3e8), _0x36808c = location[_0x19b8e2(0x1be)][_0x19b8e2(0x222)](/\/$/ig, '')[_0x19b8e2(0x2d6)]('/')['at'](-0x1), _0xe1f953 = await _0x2d26a1(_0x36808c), _0x1d6455 = _0xe1f953[_0x19b8e2(0x198)][_0x19b8e2(0x2e5)][0x0]['owner']['username'], _0x398822 = 0x0;
            _0x43eb29(_0x398822, _0xe1f953[_0x19b8e2(0x198)]['reels_media'][0x0][_0x19b8e2(0x37d)][_0x19b8e2(0x178)]), _0xe1f953[_0x19b8e2(0x198)][_0x19b8e2(0x2e5)][0x0][_0x19b8e2(0x37d)][_0x19b8e2(0x2ad)]((_0x23e4da, _0x3ae0bf) => {
                setTimeout(() => {
                    const _0x8e63e1 = a0_0xa175;
                    _0x3eb4a3['RENAME_PUBLISH_DATE'] && (_0x33c548 = _0x23e4da[_0x8e63e1(0x36b)]), _0x23e4da['display_resources'][_0x8e63e1(0x14b)](function (_0xbbb7a1, _0x989b38) {
                        const _0x46a83f = _0x8e63e1;
                        if (_0xbbb7a1[_0x46a83f(0x2c4)] < _0x989b38[_0x46a83f(0x2c4)])
                            return 0x1;
                        if (_0xbbb7a1['config_width'] > _0x989b38['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x23e4da['is_video'] ? _0x118658(_0x23e4da[_0x8e63e1(0x270)][0x0][_0x8e63e1(0x3ab)], _0x1d6455, _0x8e63e1(0x31b), _0x33c548, 'mp4', _0x23e4da['id'])[_0x8e63e1(0x121)](() => {
                        const _0x40efcb = _0x8e63e1;
                        _0x43eb29(++_0x398822, _0xe1f953['data'][_0x40efcb(0x2e5)][0x0][_0x40efcb(0x37d)]['length']);
                    }) : _0x118658(_0x23e4da['display_resources'][0x0]['src'], _0x1d6455, _0x8e63e1(0x31b), _0x33c548, _0x8e63e1(0x114), _0x23e4da['id'])['then'](() => {
                        const _0x30dba2 = _0x8e63e1;
                        _0x43eb29(++_0x398822, _0xe1f953['data'][_0x30dba2(0x2e5)][0x0]['items'][_0x30dba2(0x178)]);
                    });
                }, 0x64 * _0x3ae0bf);
            });
        }
        async function _0x4844e0(_0x522539, _0x145515) {
            const _0x358369 = _0x3d7dc7;
            var _0x10ed87 = _0x12d31d('body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]')[_0x358369(0x2db)](function () {
                const _0x496fb6 = _0x358369;
                return _0x12d31d(this)['attr'](_0x496fb6(0x1be))['split']('/')[_0x496fb6(0x2db)](_0x1bde35 => _0x1bde35[_0x496fb6(0x178)] > 0x0)[_0x496fb6(0x178)] === 0x1;
            })[_0x358369(0x36e)]()['attr']('href')[_0x358369(0x2d6)]('/')[_0x358369(0x2db)](_0x59d7c3 => _0x59d7c3[_0x358369(0x178)] > 0x0)['at'](0x0);
            if (_0x522539) {
                let _0x252300 = new Date()[_0x358369(0x310)](), _0x1cec9d = Math['floor'](_0x252300 / 0x3e8), _0x195904 = location[_0x358369(0x1be)][_0x358369(0x222)](/\/$/ig, '')[_0x358369(0x2d6)]('/')['at'](-0x1), _0x3dc9f6 = _0x12d31d(_0x358369(0x136))['length'] || _0x12d31d(_0x358369(0x1d6))['length'] || _0x12d31d(_0x358369(0x132))[_0x358369(0x1bc)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')['length'], _0x45ff11 = 0x0;
                _0x52853b(!![]);
                if (_0x33999c[_0x358369(0x370)]['highlights'][_0x195904]) {
                    _0x194c21(_0x358369(0x2f8), _0x195904);
                    let _0xc0a69f = _0x33999c[_0x358369(0x370)][_0x358369(0x18a)][_0x195904]['data']['reels_media'][0x0][_0x358369(0x37d)]['length'];
                    _0x10ed87 = _0x33999c[_0x358369(0x370)]['highlights'][_0x195904][_0x358369(0x198)][_0x358369(0x2e5)][0x0][_0x358369(0x25e)]['username'], _0x45ff11 = _0x33999c['GL_dataCache'][_0x358369(0x18a)][_0x195904]['data'][_0x358369(0x2e5)][0x0][_0x358369(0x37d)][_0xc0a69f - _0x3dc9f6];
                } else {
                    let _0x1b5984 = await _0x2d26a1(_0x195904), _0x14cf26 = _0x1b5984[_0x358369(0x198)][_0x358369(0x2e5)][0x0][_0x358369(0x37d)][_0x358369(0x178)];
                    _0x10ed87 = _0x1b5984[_0x358369(0x198)][_0x358369(0x2e5)][0x0]['owner'][_0x358369(0x2a3)], _0x45ff11 = _0x1b5984[_0x358369(0x198)][_0x358369(0x2e5)][0x0][_0x358369(0x37d)][_0x14cf26 - _0x3dc9f6], _0x33999c[_0x358369(0x370)][_0x358369(0x18a)][_0x195904] = _0x1b5984;
                }
                _0x194c21('onHighlightsStory', _0x195904, _0x33999c['GL_dataCache'][_0x358369(0x18a)][_0x195904]);
                _0x3eb4a3[_0x358369(0x285)] && (_0x1cec9d = _0x45ff11[_0x358369(0x36b)]);
                if (_0x3eb4a3[_0x358369(0x2b5)] && !_0x33999c['tempFetchRateLimit']) {
                    let _0x5c1a97 = await _0x14ab72(_0x45ff11['id']);
                    _0x5c1a97[_0x358369(0x2a7)] === 'ok' ? _0x5c1a97[_0x358369(0x37d)][0x0]['video_versions'] ? _0x145515 ? _0x5d6c82(_0x5c1a97[_0x358369(0x37d)][0x0][_0x358369(0x20c)][0x0]['url']) : _0x118658(_0x5c1a97[_0x358369(0x37d)][0x0]['video_versions'][0x0]['url'], _0x10ed87, _0x358369(0x18a), _0x1cec9d, 'mp4', _0x5c1a97[_0x358369(0x37d)][0x0]['id']) : _0x145515 ? _0x5d6c82(_0x5c1a97['items'][0x0][_0x358369(0x13f)][_0x358369(0x1b2)][0x0]['url']) : _0x118658(_0x5c1a97[_0x358369(0x37d)][0x0][_0x358369(0x13f)]['candidates'][0x0]['url'], _0x10ed87, _0x358369(0x18a), _0x1cec9d, _0x358369(0x114), _0x5c1a97['items'][0x0]['id']) : (_0x3eb4a3['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (delete _0x33999c[_0x358369(0x370)][_0x358369(0x18a)][_0x195904], _0x33999c[_0x358369(0x2e3)] = !![], _0x4844e0(!![], _0x145515)) : alert(_0x358369(0x217) + _0x5c1a97['message']), _0x194c21(_0x5c1a97));
                } else
                    _0x45ff11['is_video'] ? _0x145515 ? _0x5d6c82(_0x45ff11[_0x358369(0x270)]['at'](-0x1)[_0x358369(0x3ab)], _0x10ed87) : _0x118658(_0x45ff11[_0x358369(0x270)]['at'](-0x1)['src'], _0x10ed87, _0x358369(0x18a), _0x1cec9d, _0x358369(0x2dd), _0x45ff11['id']) : _0x145515 ? _0x5d6c82(_0x45ff11[_0x358369(0x137)]['at'](-0x1)[_0x358369(0x3ab)], _0x10ed87) : _0x118658(_0x45ff11[_0x358369(0x137)]['at'](-0x1)[_0x358369(0x3ab)], _0x10ed87, _0x358369(0x18a), _0x1cec9d, _0x358369(0x114), _0x45ff11['id']), _0x33999c[_0x358369(0x2e3)] = ![];
                _0x52853b(![]);
            } else {
                if (!_0x12d31d(_0x358369(0x328))[_0x358369(0x178)]) {
                    let _0x1fda8d = null;
                    _0x12d31d(_0x358369(0x2da))[_0x358369(0x178)] > 0x0 ? _0x1fda8d = _0x12d31d('body\x20>\x20div\x20section:visible._ac0a') : (_0x1fda8d = _0x12d31d(_0x358369(0x290)), _0x1fda8d[_0x358369(0x247)](_0x358369(0x1a3), _0x358369(0x256)));
                    if (_0x1fda8d[_0x358369(0x178)] === 0x0) {
                        let _0x458bbe = _0x12d31d(_0x358369(0x11e)), _0x37665a = 0x0;
                        _0x458bbe['each'](function () {
                            const _0x4706fd = _0x358369;
                            _0x12d31d(this)[_0x4706fd(0x1e6)]() > _0x37665a && (_0x37665a = _0x12d31d(this)[_0x4706fd(0x1e6)](), _0x1fda8d = _0x12d31d(this)[_0x4706fd(0x34e)](_0x4706fd(0x1cf))[_0x4706fd(0x36e)]());
                        });
                    }
                    if (_0x1fda8d != null) {
                        _0x1fda8d[_0x358369(0x2e9)](_0x358369(0x1d7) + _0x12a57f('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x584745['DOWNLOAD'] + '</div>'), _0x1fda8d[_0x358369(0x2e9)](_0x358369(0x274) + _0x12a57f(_0x358369(0x284)) + _0x358369(0x1a5) + _0x584745[_0x358369(0x284)] + _0x358369(0x219));
                        let _0xcc1342 = _0x7213ee(_0x10ed87);
                        _0xcc1342[_0x358369(0x178)] > 0x1 && _0x1fda8d['append'](_0x358369(0x275) + _0x12a57f(_0x358369(0x3a7)) + _0x358369(0x241) + _0x584745['DOWNLOAD_ALL'] + _0x358369(0x219)), _0x1fda8d[_0x358369(0x1bc)](_0x358369(0x378))[_0x358369(0x31f)](function () {
                            _0x12d31d(this)['on']('load', function () {
                                const _0x41af1d = a0_0xa175;
                                !_0x12d31d(this)[_0x41af1d(0x198)]('remove-thumbnail') && (_0x1fda8d[_0x41af1d(0x1bc)](_0x41af1d(0x2ca))['length'] === 0x0 ? (_0x12d31d(this)[_0x41af1d(0x34a)](_0x41af1d(0x2ea), !![]), _0x12d31d(_0x41af1d(0x2ca))[_0x41af1d(0x186)](), _0x194c21(_0x41af1d(0x338))) : (_0x12d31d(this)[_0x41af1d(0x34a)](_0x41af1d(0x2ea), !![]), _0x194c21('(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x2cc04d(_0x14ec50) {
            const _0x4560ac = _0x3d7dc7;
            if (_0x14ec50) {
                let _0x201946 = new Date()[_0x4560ac(0x310)](), _0x3e4e69 = Math[_0x4560ac(0x1e1)](_0x201946 / 0x3e8), _0x15d7dd = location[_0x4560ac(0x1be)][_0x4560ac(0x222)](/\/$/ig, '')[_0x4560ac(0x2d6)]('/')['at'](-0x1), _0x14258b = '', _0x563c9a = _0x12d31d('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x4560ac(0x178)] || _0x12d31d(_0x4560ac(0x1d6))[_0x4560ac(0x178)] || _0x12d31d(_0x4560ac(0x132))[_0x4560ac(0x1bc)](_0x4560ac(0x305))[_0x4560ac(0x178)], _0x1cc928 = '';
                _0x52853b(!![]);
                if (_0x33999c[_0x4560ac(0x370)][_0x4560ac(0x18a)][_0x15d7dd]) {
                    _0x194c21(_0x4560ac(0x2f8), _0x15d7dd);
                    let _0x57c811 = _0x33999c['GL_dataCache'][_0x4560ac(0x18a)][_0x15d7dd][_0x4560ac(0x198)]['reels_media'][0x0][_0x4560ac(0x37d)][_0x4560ac(0x178)];
                    _0x14258b = _0x33999c['GL_dataCache'][_0x4560ac(0x18a)][_0x15d7dd]['data'][_0x4560ac(0x2e5)][0x0]['owner']['username'], _0x1cc928 = _0x33999c[_0x4560ac(0x370)][_0x4560ac(0x18a)][_0x15d7dd][_0x4560ac(0x198)][_0x4560ac(0x2e5)][0x0][_0x4560ac(0x37d)][_0x57c811 - _0x563c9a];
                } else {
                    let _0x16def9 = await _0x2d26a1(_0x15d7dd), _0x20e89e = _0x16def9[_0x4560ac(0x198)][_0x4560ac(0x2e5)][0x0][_0x4560ac(0x37d)][_0x4560ac(0x178)];
                    _0x14258b = _0x16def9[_0x4560ac(0x198)][_0x4560ac(0x2e5)][0x0][_0x4560ac(0x25e)][_0x4560ac(0x2a3)], _0x1cc928 = _0x16def9[_0x4560ac(0x198)][_0x4560ac(0x2e5)][0x0][_0x4560ac(0x37d)][_0x20e89e - _0x563c9a], _0x33999c[_0x4560ac(0x370)][_0x4560ac(0x18a)][_0x15d7dd] = _0x16def9;
                }
                _0x3eb4a3['RENAME_PUBLISH_DATE'] && (_0x3e4e69 = _0x1cc928[_0x4560ac(0x36b)]);
                if (_0x3eb4a3[_0x4560ac(0x2b5)] && !_0x33999c[_0x4560ac(0x2e3)]) {
                    let _0x4907f3 = await _0x14ab72(_0x1cc928['id']);
                    _0x4907f3[_0x4560ac(0x2a7)] === 'ok' ? _0x118658(_0x4907f3[_0x4560ac(0x37d)][0x0][_0x4560ac(0x13f)][_0x4560ac(0x1b2)][0x0][_0x4560ac(0x1d5)], _0x14258b, 'highlights', _0x3e4e69, 'jpg', _0x15d7dd) : (_0x3eb4a3['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (delete _0x33999c['GL_dataCache'][_0x4560ac(0x18a)][_0x15d7dd], _0x33999c[_0x4560ac(0x2e3)] = !![], _0x2cc04d(!![])) : alert(_0x4560ac(0x217) + _0x4907f3['message']), _0x194c21(_0x4907f3));
                } else
                    _0x118658(_0x1cc928[_0x4560ac(0x137)]['at'](-0x1)[_0x4560ac(0x3ab)], _0x14258b, 'highlights', _0x3e4e69, _0x4560ac(0x114), _0x15d7dd), _0x33999c[_0x4560ac(0x2e3)] = ![];
                _0x52853b(![]);
            } else {
                if (_0x12d31d('body\x20>\x20div\x20section\x20video.xh8yej3')['length']) {
                    if (!_0x12d31d('.IG_DWHISTORY_THUMBNAIL')[_0x4560ac(0x178)]) {
                        let _0x140c2d = null;
                        _0x12d31d(_0x4560ac(0x2da))[_0x4560ac(0x178)] > 0x0 ? _0x140c2d = _0x12d31d(_0x4560ac(0x1dd)) : (_0x140c2d = _0x12d31d('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x140c2d[_0x4560ac(0x247)](_0x4560ac(0x1a3), _0x4560ac(0x256)));
                        if (_0x140c2d['length'] === 0x0) {
                            let _0x34c7df = _0x12d31d(_0x4560ac(0x11e)), _0x2341a3 = 0x0;
                            _0x34c7df[_0x4560ac(0x31f)](function () {
                                const _0x14323f = _0x4560ac;
                                _0x12d31d(this)[_0x14323f(0x1e6)]() > _0x2341a3 && (_0x2341a3 = _0x12d31d(this)[_0x14323f(0x1e6)](), _0x140c2d = _0x12d31d(this)[_0x14323f(0x34e)](_0x14323f(0x1cf))[_0x14323f(0x36e)]());
                            });
                        }
                        _0x140c2d != null && _0x140c2d['append'](_0x4560ac(0x201) + _0x12a57f(_0x4560ac(0x177)) + _0x4560ac(0x27a) + _0x584745['THUMBNAIL'] + _0x4560ac(0x219));
                    }
                } else
                    _0x12d31d(_0x4560ac(0x2ca))[_0x4560ac(0x186)]();
            }
        }
        function _0x4cc821(_0x1b76f4, _0x25c954) {
            const _0x538b7a = _0x3d7dc7;
            _0x25c954 === !![] && (_0x194c21('hasReferrer', _0x538b7a(0x142)), _0x12d31d(_0x538b7a(0x131))[_0x538b7a(0x2db)](function () {
                const _0x578854 = _0x538b7a;
                return _0x12d31d(this)[_0x578854(0x1bc)](_0x578854(0x24a))[_0x578854(0x178)] === 0x0;
            })[_0x538b7a(0x2e6)](_0x538b7a(0x2cb)));
            if (_0x1b76f4 == ![]) {
                const _0x168ddd = 0x64;
                let _0xeb2388 = 0x0;
                var _0x55124a = setInterval(() => {
                    const _0x3b570d = _0x538b7a;
                    (_0xeb2388 > _0x168ddd || _0x12d31d(_0x3b570d(0x2d1))['length'] > 0x0) && (clearInterval(_0x55124a), _0xeb2388 > _0x168ddd && console[_0x3b570d(0x2ec)](_0x3b570d(0x15a), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x194c21(_0x3b570d(0x15a), _0x3b570d(0x3ad)), _0x507c87(), _0xeb2388++;
                }, 0x32);
            } else
                _0x507c87();
        }
        function _0x590621(_0x1142b2) {
            const _0x2f72f4 = _0x3d7dc7;
            _0x3eb4a3[_0x2f72f4(0x356)] && _0x1142b2[_0x2f72f4(0x1bc)](_0x2f72f4(0x14a))['each'](function () {
                const _0x3bf6d7 = _0x2f72f4;
                _0x12d31d(this)['on'](_0x3bf6d7(0x2bc), function () {
                    const _0x1eeecd = _0x3bf6d7;
                    !_0x12d31d(this)[_0x1eeecd(0x198)](_0x1eeecd(0x32f)) && (_0x12d31d(this)[_0x1eeecd(0x34a)]('data-loop', !![]), this[_0x1eeecd(0x174)](), _0x194c21(_0x1eeecd(0x211)));
                });
            });
            _0x3eb4a3[_0x2f72f4(0x304)] && _0x1142b2['find']('video')['each'](function () {
                const _0xa60ece = _0x2f72f4;
                _0x12d31d(this)['on'](_0xa60ece(0x23a), function () {
                    const _0x3a4ea6 = _0xa60ece;
                    !_0x12d31d(this)[_0x3a4ea6(0x198)](_0x3a4ea6(0x347)) && (_0x12d31d(this)[_0x3a4ea6(0x34a)](_0x3a4ea6(0x220), !![]), this[_0x3a4ea6(0x19d)] = _0x33999c['videoVolume'], _0x194c21(_0x3a4ea6(0x313)));
                });
            });
            _0x3eb4a3[_0x2f72f4(0x331)] && _0x1142b2['find'](_0x2f72f4(0x14a))[_0x2f72f4(0x31f)](function () {
                const _0x2fd463 = _0x2f72f4;
                if (!_0x12d31d(this)[_0x2fd463(0x198)](_0x2fd463(0x30a))) {
                    let _0x197086 = _0x12d31d(this);
                    _0x194c21(_0x2fd463(0x2ee)), _0x3eb4a3[_0x2fd463(0x304)] && (this[_0x2fd463(0x19d)] = _0x33999c[_0x2fd463(0x373)], _0x12d31d(this)['on'](_0x2fd463(0x17d), function () {
                        const _0x3fd7bb = _0x2fd463;
                        this[_0x3fd7bb(0x19d)] = _0x33999c[_0x3fd7bb(0x373)];
                    })), _0x12d31d(this)['on']('contextmenu', function (_0x59730e) {
                        const _0x361ceb = _0x2fd463;
                        _0x59730e[_0x361ceb(0x18f)](), _0x197086[_0x361ceb(0x247)](_0x361ceb(0x2bd), '-1'), _0x197086[_0x361ceb(0x2e6)](_0x361ceb(0x30a));
                    }), _0x12d31d(this)['parent']()[_0x2fd463(0x1bc)]('video\x20+\x20div\x20>\x20div')['first']()['on'](_0x2fd463(0x1c8), function (_0x1ad734) {
                        const _0x4d64e4 = _0x2fd463;
                        _0x1ad734[_0x4d64e4(0x18f)](), _0x197086[_0x4d64e4(0x247)](_0x4d64e4(0x2bd), '2'), _0x197086[_0x4d64e4(0x34a)]('controls', !![]);
                    }), _0x12d31d(this)['on'](_0x2fd463(0x251), function () {
                        const _0x4642d9 = _0x2fd463;
                        let _0x236d0c = _0x12d31d(this)[_0x4642d9(0x293)]()[_0x4642d9(0x1bc)](_0x4642d9(0x117))[_0x4642d9(0x1bc)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')['filter'](function (_0x299017) {
                            const _0x5ba62a = _0x4642d9;
                            return _0x12d31d(this)[_0x5ba62a(0x1e6)]() <= 0x40 && _0x12d31d(this)['height']() <= 0x40 && _0x12d31d(this)['find'](_0x5ba62a(0x303))[_0x5ba62a(0x178)] > 0x0;
                        });
                        var _0x4cdca7 = _0x236d0c[_0x4642d9(0x1bc)](_0x4642d9(0x176))[_0x4642d9(0x178)] === 0x0;
                        this[_0x4642d9(0x283)] != _0x4cdca7 && (this['volume'] = _0x33999c['videoVolume'], _0x236d0c?.[_0x4642d9(0x39f)]('click')), _0x12d31d(this)['attr'](_0x4642d9(0x37c)) && (_0x33999c[_0x4642d9(0x373)] = this[_0x4642d9(0x19d)], GM_setValue(_0x4642d9(0x238), this[_0x4642d9(0x19d)])), this[_0x4642d9(0x19d)] == _0x33999c[_0x4642d9(0x373)] && _0x12d31d(this)[_0x4642d9(0x34a)]('data-completed', !![]);
                    }), _0x12d31d(this)['css'](_0x2fd463(0x1a3), _0x2fd463(0x2e2)), _0x12d31d(this)[_0x2fd463(0x247)](_0x2fd463(0x2bd), '2'), _0x12d31d(this)[_0x2fd463(0x34a)](_0x2fd463(0x1ba), !![]), _0x12d31d(this)[_0x2fd463(0x34a)]('controls', !![]);
                }
            });
            var _0x39682b = _0x1142b2[_0x2f72f4(0x1bc)]('video'), _0x44b92d = _0x1142b2[_0x2f72f4(0x1bc)](_0x2f72f4(0x117))[_0x2f72f4(0x36e)]();
            _0x57ba87(_0x39682b, _0x44b92d, _0x2f72f4(0x1f3), _0x2f72f4(0x183));
        }
        ;
        function _0x507c87() {
            const _0x23ba7a = _0x3d7dc7;
            _0x12d31d('article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr')[_0x23ba7a(0x138)](function (_0x1bcc56) {
                const _0x46c8df = _0x23ba7a;
                return _0x12d31d(this)['is'](_0x46c8df(0x377)) ? _0x12d31d(this)[_0x46c8df(0x293)]()[_0x46c8df(0x293)]()[_0x46c8df(0x293)]()[_0x46c8df(0x293)]()[0x0] : this;
            })[_0x23ba7a(0x2db)](function () {
                const _0x3d52e9 = _0x23ba7a;
                return _0x12d31d(this)[_0x3d52e9(0x15f)]() > 0x0 && _0x12d31d(this)[_0x3d52e9(0x1e6)]() > 0x0;
            })[_0x23ba7a(0x31f)](function (_0x5cb301) {
                const _0x55682c = _0x23ba7a;
                if (!_0x12d31d(this)[_0x55682c(0x34a)](_0x55682c(0x2cb)) && !_0x12d31d(this)[_0x55682c(0x374)](_0x55682c(0x339)) && !_0x12d31d(this)[_0x55682c(0x34e)](_0x55682c(0x1b5))?.[_0x55682c(0x374)](_0x55682c(0x339)) && _0x12d31d(this)[_0x55682c(0x1b4)]('div#scrollview')[_0x55682c(0x178)] === 0x0) {
                    _0x194c21(_0x55682c(0x1e5), _0x12d31d(this));
                    const _0x24a345 = _0x12d31d(this), _0x137252 = this[_0x55682c(0x2cc)], _0x4b80a6 = _0x55682c(0x2f3);
                    var _0x125028;
                    if (_0x137252 === _0x55682c(0x30b) && _0x5cb301 != 0x0)
                        return;
                    const _0x3287d6 = _0x24a345[_0x55682c(0x34e)](_0x55682c(0x1cf))[_0x55682c(0x34e)](_0x55682c(0x1cf));
                    if (_0x3287d6['length'] === 0x0)
                        return;
                    _0x194c21('Found\x20insert\x20point', _0x3287d6);
                    if (_0x24a345[_0x55682c(0x1bc)](_0x55682c(0x357))[_0x55682c(0x178)] > 0x0) {
                        _0x24a345['find']('._acay\x20+\x20.x24i39r')[_0x55682c(0x178)] > 0x0 && _0x24a345['find'](_0x55682c(0x14c))[_0x55682c(0x247)](_0x55682c(0x187), _0x55682c(0x32a));
                        const _0x47acfb = _0x24a345['find'](_0x55682c(0x357))[_0x55682c(0x36e)]()['parent']()[0x0];
                        var _0x513e28 = new MutationObserver(function () {
                            const _0x14d3be = _0x55682c;
                            _0x24a345[_0x14d3be(0x1bc)](_0x14d3be(0x14c))[_0x14d3be(0x247)](_0x14d3be(0x187), _0x14d3be(0x32a));
                        });
                        _0x513e28[_0x55682c(0x18b)](_0x47acfb, { 'childList': !![] });
                    }
                    _0x3287d6['eq'](_0x137252 === 'DIV' ? 0x0 : _0x3287d6[_0x55682c(0x178)] - 0x2)['append'](_0x55682c(0x25c));
                    const _0x1f7bd7 = _0x55682c(0x1d7) + _0x12a57f('DW') + _0x55682c(0x14f) + _0x584745[_0x55682c(0x1cb)] + _0x55682c(0x219), _0x3076cf = '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x12a57f('NEW_TAB') + _0x55682c(0x35c) + _0x584745[_0x55682c(0x284)] + _0x55682c(0x219), _0x418b6d = _0x55682c(0x201) + _0x12a57f(_0x55682c(0x177)) + _0x55682c(0x19e) + _0x584745['THUMBNAIL'] + '</div>', _0x4deff4 = _0x55682c(0x302) + _0x12a57f(_0x55682c(0x34b)) + _0x55682c(0x202) + _0x584745[_0x55682c(0x1ca)] + _0x55682c(0x219);
                    _0x3287d6[_0x55682c(0x1bc)](_0x55682c(0x2bf))[_0x55682c(0x2e9)](_0x1f7bd7);
                    const _0x33679c = _0x24a345[_0x55682c(0x1bc)](_0x4b80a6)[_0x55682c(0x178)];
                    if (_0x33679c > 0x1 && _0x3eb4a3[_0x55682c(0x28e)] && !_0x3eb4a3['DIRECT_DOWNLOAD_ALL']) {
                        const _0x4e8bfe = _0x55682c(0x275) + _0x12a57f(_0x55682c(0x3a7)) + _0x55682c(0x29f) + _0x584745[_0x55682c(0x29c)] + _0x55682c(0x219);
                        _0x3287d6[_0x55682c(0x1bc)](_0x55682c(0x2bf))[_0x55682c(0x2e9)](_0x4e8bfe);
                    }
                    _0x3287d6['find'](_0x55682c(0x2bf))[_0x55682c(0x2e9)](_0x3076cf), setTimeout(() => {
                        const _0x39d8a7 = _0x55682c;
                        if (_0x3287d6['eq'](_0x137252 === 'DIV' ? 0x0 : _0x3287d6['length'] - 0x2)[_0x39d8a7(0x1bc)](_0x39d8a7(0x230))['length'] === 0x0)
                            _0x3287d6[_0x39d8a7(0x1bc)]('video')[_0x39d8a7(0x178)] > 0x0 ? _0x3287d6[_0x39d8a7(0x1bc)](_0x39d8a7(0x2bf))[_0x39d8a7(0x2e9)](_0x418b6d) : (_0x125028 = _0x24a345['find'](_0x39d8a7(0x2e8))['filter'](function () {
                                const _0x5efb94 = _0x39d8a7;
                                return _0x12d31d(this)['width']() > 0xc8 && _0x12d31d(this)[_0x5efb94(0x15f)]() > 0xc8;
                            })[_0x39d8a7(0x34a)]('src'), _0x3287d6[_0x39d8a7(0x1bc)]('.button_wrapper')[_0x39d8a7(0x2e9)](_0x4deff4));
                        else {
                            const _0x7c5eda = (_0x491b64, _0x120226) => {
                                    const _0x4ac48e = _0x39d8a7;
                                    _0x491b64[_0x4ac48e(0x2ad)](_0x8473b6 => {
                                        const _0x22a190 = _0x4ac48e;
                                        if (_0x8473b6[_0x22a190(0x27b)]) {
                                            var _0x1570cc = _0x12d31d(_0x8473b6[_0x22a190(0x314)]);
                                            _0x3287d6['find'](_0x22a190(0x13e))?.['remove'](), _0x3287d6[_0x22a190(0x1bc)](_0x22a190(0x311))?.[_0x22a190(0x186)](), _0x1570cc[_0x22a190(0x1bc)](_0x22a190(0x14a))[_0x22a190(0x178)] > 0x0 ? (_0x3287d6['find'](_0x22a190(0x13e))[_0x22a190(0x178)] === 0x0 && _0x3287d6['find'](_0x22a190(0x2bf))[_0x22a190(0x2e9)](_0x418b6d), _0x590621(_0x24a345)) : (_0x125028 = _0x1570cc[_0x22a190(0x1bc)]('img')[_0x22a190(0x34a)](_0x22a190(0x3ab)), _0x3287d6[_0x22a190(0x1bc)](_0x22a190(0x2bf))[_0x22a190(0x2e9)](_0x4deff4));
                                        }
                                    });
                                }, _0x131a9f = new IntersectionObserver(_0x7c5eda, {
                                    'root': _0x24a345[_0x39d8a7(0x1bc)](_0x39d8a7(0x1d3))[_0x39d8a7(0x36e)]()['parent']()[_0x39d8a7(0x293)]()[_0x39d8a7(0x293)]()[0x0],
                                    'rootMargin': _0x39d8a7(0x123),
                                    'threshold': 0.1
                                }), _0x58fcfb = new MutationObserver(function (_0x2226ae, _0x58b8ac) {
                                    const _0x1e5829 = _0x39d8a7;
                                    var _0x8e30fe = _0x2226ae['at'](0x0)?.['target'];
                                    _0x12d31d(_0x8e30fe)[_0x1e5829(0x1bc)](_0x1e5829(0x1ac))[_0x1e5829(0x31f)](function () {
                                        const _0x1a30f2 = _0x1e5829;
                                        _0x131a9f[_0x1a30f2(0x18b)](this);
                                    });
                                });
                            _0x24a345[_0x39d8a7(0x1bc)](_0x39d8a7(0x230))['each'](function () {
                                const _0x4e40c1 = _0x39d8a7;
                                _0x131a9f[_0x4e40c1(0x18b)](this);
                            });
                            const _0x5406cb = _0x3287d6['eq'](_0x137252 === _0x39d8a7(0x30b) ? 0x0 : _0x3287d6[_0x39d8a7(0x178)] - 0x2)[_0x39d8a7(0x1bc)]('div\x20>\x20ul\x20li._acaz')?.[_0x39d8a7(0x293)]()[0x0], _0x1d1370 = _0x3287d6['eq'](_0x137252 === 'DIV' ? 0x0 : _0x3287d6[_0x39d8a7(0x178)] - 0x2)['find'](_0x39d8a7(0x230))?.['parent']()['parent']()[0x0];
                            _0x5406cb && _0x58fcfb[_0x39d8a7(0x18b)](_0x5406cb, { 'childList': !![] }), _0x1d1370 && _0x58fcfb[_0x39d8a7(0x18b)](_0x1d1370, { 'attributes': !![] });
                        }
                    }, 0x32), _0x3287d6[_0x55682c(0x247)](_0x55682c(0x1a3), _0x55682c(0x256)), _0x590621(_0x24a345), _0x33999c[_0x55682c(0x395)][_0x55682c(0x2aa)]({
                        'element': this,
                        'trigger': [
                            _0x55682c(0x13e),
                            _0x55682c(0x1fe),
                            _0x55682c(0x1e3),
                            _0x55682c(0x24a),
                            _0x55682c(0x311)
                        ]
                    }), _0x12d31d(this)['on'](_0x55682c(0x2a0), _0x55682c(0x311), function () {
                        const _0x3a4780 = _0x55682c;
                        _0x125028 != null ? _0x5db81b(_0x125028) : alert(_0x3a4780(0x249));
                    }), _0x12d31d(this)['on']('click', _0x55682c(0x13e), function () {
                        const _0x89963b = _0x55682c;
                        _0x52853b(!![]), _0x33999c[_0x89963b(0x2e0)] = _0x24a345['attr'](_0x89963b(0x317)), _0x33999c['GL_postPath'] = location['pathname'][_0x89963b(0x222)](/\/$/, '')[_0x89963b(0x2d6)]('/')['at'](-0x1) || _0x24a345['find'](_0x89963b(0x35f))[_0x89963b(0x36e)]()[_0x89963b(0x34a)]('href')[_0x89963b(0x2d6)]('/')['at'](0x2) || _0x12d31d(this)['parent']()[_0x89963b(0x293)]()[_0x89963b(0x293)]()[_0x89963b(0x34e)]('div:last-child')[_0x89963b(0x34e)]('div')[_0x89963b(0x34e)](_0x89963b(0x216))['find'](_0x89963b(0x35f))[_0x89963b(0x25a)]()[_0x89963b(0x34a)]('href')[_0x89963b(0x2d6)]('/')['at'](0x2);
                        var _0xa1edce = _0x4ff3b7(_0x24a345);
                        _0x5be558(!![], ![]), _0x2866d4(_0x33999c[_0x89963b(0x342)], _0x89963b(0x169), '')[_0x89963b(0x121)](() => {
                            let _0x3ad36d = setInterval(() => {
                                const _0x163421 = a0_0xa175;
                                if (_0x12d31d(_0x163421(0x1f2))[_0x163421(0x178)] > 0x0) {
                                    clearInterval(_0x3ad36d);
                                    var _0xda035f = _0x12d31d(_0x163421(0x2b4) + (_0xa1edce + 0x1) + '\x22]')?.[_0x163421(0x293)]()[_0x163421(0x1bc)]('.videoThumbnail')?.[_0x163421(0x36e)]();
                                    _0xda035f != null && _0xda035f[_0x163421(0x178)] > 0x0 ? _0xda035f['trigger']('click') : alert('Can\x20not\x20find\x20thumbnail\x20url.'), _0x52853b(![]), _0x12d31d(_0x163421(0x1ef))[_0x163421(0x186)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x12d31d(this)['on'](_0x55682c(0x2a0), _0x55682c(0x1fe), function () {
                        const _0x3b1ec9 = _0x55682c;
                        _0x52853b(!![]), _0x33999c[_0x3b1ec9(0x2e0)] = _0x24a345[_0x3b1ec9(0x34a)](_0x3b1ec9(0x317)), _0x33999c[_0x3b1ec9(0x342)] = location[_0x3b1ec9(0x2ef)][_0x3b1ec9(0x222)](/\/$/, '')[_0x3b1ec9(0x2d6)]('/')['at'](-0x1) || _0x24a345[_0x3b1ec9(0x1bc)](_0x3b1ec9(0x35f))[_0x3b1ec9(0x36e)]()[_0x3b1ec9(0x34a)](_0x3b1ec9(0x1be))[_0x3b1ec9(0x2d6)]('/')['at'](0x2) || _0x12d31d(this)[_0x3b1ec9(0x293)]()[_0x3b1ec9(0x293)]()[_0x3b1ec9(0x293)]()['children'](_0x3b1ec9(0x216))[_0x3b1ec9(0x34e)](_0x3b1ec9(0x1cf))[_0x3b1ec9(0x34e)](_0x3b1ec9(0x216))[_0x3b1ec9(0x1bc)](_0x3b1ec9(0x35f))[_0x3b1ec9(0x25a)]()[_0x3b1ec9(0x34a)](_0x3b1ec9(0x1be))[_0x3b1ec9(0x2d6)]('/')['at'](0x2);
                        var _0x198681 = _0x4ff3b7(_0x24a345);
                        _0x5be558(!![], ![]), _0x2866d4(_0x33999c[_0x3b1ec9(0x342)], _0x3b1ec9(0x169), '')['then'](() => {
                            let _0x4c80a9 = setInterval(() => {
                                const _0x3bd130 = a0_0xa175;
                                if (_0x12d31d(_0x3bd130(0x1f2))[_0x3bd130(0x178)] > 0x0) {
                                    clearInterval(_0x4c80a9);
                                    var _0x54eb28 = _0x12d31d(_0x3bd130(0x2b4) + (_0x198681 + 0x1) + '\x22]');
                                    if (_0x3eb4a3[_0x3bd130(0x2b5)] && _0x3eb4a3['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0x5b8418(_0x54eb28[_0x3bd130(0x36e)]()[0x0], !![]);
                                    else {
                                        let _0x395f84 = _0x54eb28?.[_0x3bd130(0x34a)]('data-href');
                                        if (_0x395f84) {
                                            var _0x22976c = new URL(_0x395f84);
                                            _0x22976c[_0x3bd130(0x2a5)] = _0x3bd130(0x141), _0x5d6c82(_0x22976c[_0x3bd130(0x1be)]);
                                        } else
                                            alert('Can\x20not\x20find\x20open\x20tab\x20url.');
                                    }
                                    _0x52853b(![]), _0x12d31d('.IG_POPUP_DIG')[_0x3bd130(0x186)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x12d31d(this)['on'](_0x55682c(0x2a0), _0x55682c(0x1e3), async function () {
                        const _0xe705be = _0x55682c;
                        _0x33999c[_0xe705be(0x2e0)] = _0x24a345[_0xe705be(0x34a)](_0xe705be(0x317)), _0x33999c[_0xe705be(0x342)] = location[_0xe705be(0x2ef)][_0xe705be(0x222)](/\/$/, '')[_0xe705be(0x2d6)]('/')['at'](-0x1) || _0x24a345[_0xe705be(0x1bc)](_0xe705be(0x35f))[_0xe705be(0x36e)]()[_0xe705be(0x34a)](_0xe705be(0x1be))[_0xe705be(0x2d6)]('/')['at'](0x2) || _0x12d31d(this)[_0xe705be(0x293)]()[_0xe705be(0x293)]()[_0xe705be(0x293)]()['children'](_0xe705be(0x216))[_0xe705be(0x34e)](_0xe705be(0x1cf))[_0xe705be(0x34e)](_0xe705be(0x216))[_0xe705be(0x1bc)]('a[href^=\x22/p/\x22]')[_0xe705be(0x25a)]()[_0xe705be(0x34a)]('href')[_0xe705be(0x2d6)]('/')['at'](0x2), _0x5be558(_0x3eb4a3['DIRECT_DOWNLOAD_ALL'], !![]), _0x12d31d(_0xe705be(0x23b))[_0xe705be(0x116)](_0xe705be(0x26e) + _0x33999c[_0xe705be(0x342)] + '\x22>' + _0x33999c['GL_postPath'] + _0xe705be(0x294)), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['each'](function () {
                            const _0x2cabc0 = _0xe705be;
                            _0x12d31d(this)[_0x2cabc0(0x2f5)](_0x2cabc0(0x320)), _0x12d31d(this)['before']('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x12d31d(this)[_0x2cabc0(0x228)](_0x2cabc0(0x274) + _0x12a57f('NEW_TAB') + '\x22\x20class=\x22newTab\x22>' + _0x584745[_0x2cabc0(0x284)] + _0x2cabc0(0x219)), _0x12d31d(this)[_0x2cabc0(0x34a)](_0x2cabc0(0x39b)) == _0x2cabc0(0x14a) && _0x12d31d(this)[_0x2cabc0(0x228)](_0x2cabc0(0x201) + _0x12a57f(_0x2cabc0(0x177)) + _0x2cabc0(0x2c5) + _0x584745['THUMBNAIL'] + _0x2cabc0(0x219));
                        }), _0x2866d4(_0x33999c[_0xe705be(0x342)], _0xe705be(0x169), _0x12a57f(_0xe705be(0x1f1)))[_0xe705be(0x121)](() => {
                            let _0x34e772 = setInterval(() => {
                                const _0x1effbb = a0_0xa175;
                                _0x12d31d(_0x1effbb(0x1f2))[_0x1effbb(0x178)] > 0x0 && (clearInterval(_0x34e772), _0x12d31d(_0x1effbb(0x1f2))[_0x1effbb(0x31f)](function () {
                                    const _0xa1a597 = _0x1effbb;
                                    _0x12d31d(this)[_0xa1a597(0x39f)](_0xa1a597(0x2a0));
                                }), _0x12d31d(_0x1effbb(0x1ef))[_0x1effbb(0x186)]());
                            }, 0xfa);
                        });
                    }), _0x12d31d(this)['on'](_0x55682c(0x2a0), _0x55682c(0x24a), async function () {
                        const _0x2bffe9 = _0x55682c;
                        _0x33999c[_0x2bffe9(0x2e0)] = _0x24a345[_0x2bffe9(0x34a)](_0x2bffe9(0x317)), _0x33999c['GL_postPath'] = location[_0x2bffe9(0x2ef)]['replace'](/\/$/, '')[_0x2bffe9(0x2d6)]('/')['at'](-0x1) || _0x24a345[_0x2bffe9(0x1bc)](_0x2bffe9(0x35f))[_0x2bffe9(0x36e)]()[_0x2bffe9(0x34a)](_0x2bffe9(0x1be))['split']('/')['at'](0x2) || _0x12d31d(this)[_0x2bffe9(0x293)]()[_0x2bffe9(0x293)]()[_0x2bffe9(0x293)]()[_0x2bffe9(0x34e)](_0x2bffe9(0x216))['children'](_0x2bffe9(0x1cf))[_0x2bffe9(0x34e)]('div:last-child')[_0x2bffe9(0x1bc)](_0x2bffe9(0x35f))['last']()[_0x2bffe9(0x34a)](_0x2bffe9(0x1be))['split']('/')['at'](0x2), _0x5be558(_0x3eb4a3[_0x2bffe9(0x298)], !![]), _0x12d31d('#article-id')['html'](_0x2bffe9(0x26e) + _0x33999c['GL_postPath'] + '\x22>' + _0x33999c['GL_postPath'] + _0x2bffe9(0x294));
                        if (_0x3eb4a3[_0x2bffe9(0x28e)]) {
                            _0x52853b(!![]), _0x50ddf7(!![]);
                            var _0x2411df = _0x4ff3b7(_0x12d31d(this)[_0x2bffe9(0x293)]()[_0x2bffe9(0x293)]()[_0x2bffe9(0x293)]());
                            _0x2866d4(_0x33999c['GL_postPath'], _0x2bffe9(0x169), '')[_0x2bffe9(0x121)](() => {
                                let _0x13b212 = setInterval(() => {
                                    const _0x595314 = a0_0xa175;
                                    if (_0x12d31d(_0x595314(0x1f2))[_0x595314(0x178)] > 0x0) {
                                        clearInterval(_0x13b212);
                                        var _0x153427 = _0x12d31d(_0x595314(0x2b4) + (_0x2411df + 0x1) + '\x22]')?.[_0x595314(0x34a)](_0x595314(0x2e7));
                                        _0x153427 ? (_0x52853b(![]), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x2411df + 0x1) + '\x22]')?.[_0x595314(0x39f)](_0x595314(0x2a0))) : alert(_0x595314(0x1f0)), _0x12d31d(_0x595314(0x1ef))[_0x595314(0x186)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x3eb4a3['DIRECT_DOWNLOAD_ALL']) {
                            var _0x584ec3 = 0x0, _0x56dd7d = _0x12d31d(this)['parent']()[_0x2bffe9(0x293)]()['find'](_0x4b80a6)['length'], _0x569ade = _0x3eb4a3['FORCE_FETCH_ALL_RESOURCES'], _0x4b35ac = new Date(_0x12d31d(this)[_0x2bffe9(0x293)]()[_0x2bffe9(0x293)]()[_0x2bffe9(0x1bc)]('a[href^=\x22/p/\x22]\x20time[datetime]')[_0x2bffe9(0x36e)]()[_0x2bffe9(0x34a)](_0x2bffe9(0x383)))[_0x2bffe9(0x310)]();
                            if (_0x56dd7d)
                                _0x12d31d(this)['parent']()[_0x2bffe9(0x293)]()[_0x2bffe9(0x1bc)](_0x4b80a6)[_0x2bffe9(0x31f)](function () {
                                    const _0x5a75f1 = _0x2bffe9;
                                    let _0x324102 = _0x12d31d(this)['parent']()[_0x5a75f1(0x293)]()[_0x5a75f1(0x293)]()[_0x5a75f1(0x1bc)]('video');
                                    _0x324102 && _0x324102[_0x5a75f1(0x34a)](_0x5a75f1(0x3ab)) && (_0x569ade = !![]);
                                }), _0x569ade || _0x3eb4a3[_0x2bffe9(0x2b5)] ? _0x2866d4(_0x33999c[_0x2bffe9(0x342)], _0x2bffe9(0x169), _0x12a57f('LOAD_BLOB_MULTIPLE')) : (_0x12d31d(this)['parent']()['parent']()[_0x2bffe9(0x1bc)](_0x4b80a6)['each'](function () {
                                    const _0x4c259f = _0x2bffe9;
                                    _0x584ec3++;
                                    let _0x2af95b = _0x12d31d(this)[_0x4c259f(0x1bc)]('video'), _0x44c98d = _0x12d31d(this)['find'](_0x4c259f(0x29e)), _0x34debe = _0x44c98d[_0x4c259f(0x34a)]('srcset') ? _0x44c98d[_0x4c259f(0x34a)]('srcset')[_0x4c259f(0x2d6)]('\x20')[0x0] : _0x44c98d['attr'](_0x4c259f(0x3ab));
                                    _0x2af95b && _0x2af95b[_0x4c259f(0x34a)](_0x4c259f(0x3ab)) && (_0x569ade = !![]), _0x44c98d && _0x34debe && _0x12d31d(_0x4c259f(0x169))[_0x4c259f(0x2e9)]('<a\x20datetime=\x22' + _0x4b35ac + _0x4c259f(0x2b9) + _0x33999c[_0x4c259f(0x342)] + _0x4c259f(0x210) + _0x584ec3 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x34debe + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x34debe + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x12a57f('IMG') + _0x4c259f(0x2cf) + _0x584ec3 + _0x4c259f(0x1fc));
                                }), _0x569ade && _0x2866d4(_0x33999c['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x12a57f('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x3eb4a3[_0x2bffe9(0x2b5)])
                                    _0x2866d4(_0x33999c[_0x2bffe9(0x342)], _0x2bffe9(0x169), _0x12a57f(_0x2bffe9(0x1f1)));
                                else {
                                    _0x584ec3++;
                                    let _0xf0f894 = _0x12d31d(this)[_0x2bffe9(0x293)]()[_0x2bffe9(0x293)]()[_0x2bffe9(0x293)]()[_0x2bffe9(0x1bc)](_0x2bffe9(0x14a)), _0x4e0807 = _0x12d31d(this)[_0x2bffe9(0x293)]()[_0x2bffe9(0x293)]()[_0x2bffe9(0x293)]()[_0x2bffe9(0x1bc)](_0x2bffe9(0x29e)), _0x1c6e3e = _0x4e0807[_0x2bffe9(0x34a)](_0x2bffe9(0x17c)) ? _0x4e0807['attr'](_0x2bffe9(0x17c))['split']('\x20')[0x0] : _0x4e0807[_0x2bffe9(0x34a)](_0x2bffe9(0x3ab));
                                    _0xf0f894 && _0xf0f894[_0x2bffe9(0x34a)](_0x2bffe9(0x3ab)) && _0x2866d4(_0x33999c[_0x2bffe9(0x342)], _0x2bffe9(0x169), _0x12a57f(_0x2bffe9(0x352))), _0x4e0807 && _0x1c6e3e && _0x12d31d(_0x2bffe9(0x169))['append'](_0x2bffe9(0x23f) + _0x4b35ac + _0x2bffe9(0x2b9) + _0x33999c[_0x2bffe9(0x342)] + _0x2bffe9(0x210) + _0x584ec3 + _0x2bffe9(0x2fb) + _0x1c6e3e + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x1c6e3e + _0x2bffe9(0x369) + _0x12a57f(_0x2bffe9(0x394)) + _0x2bffe9(0x2cf) + _0x584ec3 + _0x2bffe9(0x1fc));
                                }
                            }
                        }
                        _0x12d31d(_0x2bffe9(0x1f2))[_0x2bffe9(0x31f)](function () {
                            const _0x1726cf = _0x2bffe9;
                            _0x12d31d(this)['wrap']('<div></div>'), _0x12d31d(this)[_0x1726cf(0x1ad)](_0x1726cf(0x30e)), _0x12d31d(this)[_0x1726cf(0x228)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x12a57f(_0x1726cf(0x284)) + _0x1726cf(0x14e) + _0x584745[_0x1726cf(0x284)] + _0x1726cf(0x219)), _0x12d31d(this)[_0x1726cf(0x34a)]('data-name') == _0x1726cf(0x14a) && _0x12d31d(this)[_0x1726cf(0x228)](_0x1726cf(0x201) + _0x12a57f(_0x1726cf(0x177)) + _0x1726cf(0x2c5) + _0x584745[_0x1726cf(0x380)] + _0x1726cf(0x219));
                        }), _0x3eb4a3['DIRECT_DOWNLOAD_ALL'] && _0x2866d4(_0x33999c[_0x2bffe9(0x342)], _0x2bffe9(0x169), _0x12a57f('LOAD_BLOB_MULTIPLE'))[_0x2bffe9(0x121)](() => {
                            let _0x3719e4 = setInterval(() => {
                                const _0x57833b = a0_0xa175;
                                _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x57833b(0x178)] > 0x0 && (clearInterval(_0x3719e4), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x57833b(0x31f)](function () {
                                    const _0x36292c = _0x57833b;
                                    _0x12d31d(this)[_0x36292c(0x39f)]('click');
                                }), _0x12d31d(_0x57833b(0x1ef))[_0x57833b(0x186)]());
                            }, 0xfa);
                        });
                    });
                    var _0x2823d6 = _0x12d31d(this)['find']('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x55682c(0x36e)]()[_0x55682c(0x396)]() || _0x12d31d(this)[_0x55682c(0x1bc)](_0x55682c(0x196))[_0x55682c(0x2db)](function () {
                        const _0x3e2ec2 = _0x55682c;
                        return _0x12d31d(this)?.[_0x3e2ec2(0x396)]()?.[_0x3e2ec2(0x178)] > 0x0;
                    })[_0x55682c(0x36e)]()['text']();
                    _0x12d31d(this)[_0x55682c(0x34a)](_0x55682c(0x2cb), 'canDownload'), _0x12d31d(this)[_0x55682c(0x34a)](_0x55682c(0x317), _0x2823d6);
                }
            });
        }
        function _0x1dd0d5(_0x469d27) {
            const _0x24eb8f = _0x3d7dc7;
            var _0x210f36 = _0x469d27[_0x24eb8f(0x14d)] ?? _0x469d27;
            return _0x210f36['owner'] == null && _0x210f36[_0x24eb8f(0x147)] != null && (_0x210f36[_0x24eb8f(0x25e)] = _0x210f36[_0x24eb8f(0x147)]), _0x210f36[_0x24eb8f(0x25e)] == null && (_0x194c21(_0x24eb8f(0x398), 'undefined\x20username'), alert(_0x24eb8f(0x140))), _0x210f36;
        }
        async function _0x2866d4(_0x33aaf7, _0x28c6e3, _0x627fc5) {
            const _0x30e814 = _0x3d7dc7;
            try {
                _0x12d31d(_0x28c6e3 + '\x20a')[_0x30e814(0x186)](), _0x12d31d(_0x28c6e3)[_0x30e814(0x2e9)](_0x30e814(0x2fd) + _0x627fc5 + '</p>');
                let _0x13ce36 = await _0x13f592(_0x33aaf7), _0x2d2446 = _0x1dd0d5(_0x13ce36[_0x30e814(0x198)]);
                if (_0x13ce36['type'] === 'query_hash') {
                    let _0x4c3fbf = 0x1;
                    _0x2d2446[_0x30e814(0x250)] == _0x30e814(0x332) && _0x2d2446[_0x30e814(0x2a9)] && (_0x12d31d(_0x28c6e3)[_0x30e814(0x2e9)](_0x30e814(0x381) + _0x2d2446['id'] + _0x30e814(0x306) + _0x2d2446[_0x30e814(0x36b)] + _0x30e814(0x165) + _0x2d2446['shortcode'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x2d2446[_0x30e814(0x25e)][_0x30e814(0x2a3)] + _0x30e814(0x25f) + _0x4c3fbf + _0x30e814(0x2e1) + _0x2d2446[_0x30e814(0x2a9)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2d2446[_0x30e814(0x137)][0x1][_0x30e814(0x3ab)] + _0x30e814(0x361) + _0x12a57f(_0x30e814(0x2b7)) + '</span>\x20' + _0x4c3fbf + '\x20-</a>'), _0x4c3fbf++);
                    _0x2d2446['__typename'] == _0x30e814(0x175) && (_0x12d31d(_0x28c6e3)[_0x30e814(0x2e9)](_0x30e814(0x381) + _0x2d2446['id'] + _0x30e814(0x306) + _0x2d2446[_0x30e814(0x36b)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2d2446['shortcode'] + _0x30e814(0x391) + _0x2d2446[_0x30e814(0x25e)][_0x30e814(0x2a3)] + _0x30e814(0x25f) + _0x4c3fbf + _0x30e814(0x2e1) + _0x2d2446[_0x30e814(0x137)][_0x2d2446['display_resources']['length'] - 0x1]['src'] + _0x30e814(0x2c9) + _0x2d2446[_0x30e814(0x137)][0x1]['src'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x12a57f(_0x30e814(0x394)) + _0x30e814(0x2cf) + _0x4c3fbf + _0x30e814(0x1fc)), _0x4c3fbf++);
                    if (_0x2d2446['__typename'] == _0x30e814(0x164) && _0x2d2446[_0x30e814(0x27d)])
                        for (let _0x4f0494 of _0x2d2446[_0x30e814(0x27d)][_0x30e814(0x145)]) {
                            _0x4f0494['node'][_0x30e814(0x250)] == _0x30e814(0x332) && _0x12d31d(_0x28c6e3)[_0x30e814(0x2e9)](_0x30e814(0x381) + _0x4f0494[_0x30e814(0x218)]['id'] + _0x30e814(0x306) + _0x2d2446[_0x30e814(0x36b)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2d2446['shortcode'] + _0x30e814(0x371) + _0x2d2446[_0x30e814(0x25e)][_0x30e814(0x2a3)] + _0x30e814(0x25f) + _0x4c3fbf + _0x30e814(0x2e1) + _0x4f0494['node'][_0x30e814(0x2a9)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x4f0494[_0x30e814(0x218)][_0x30e814(0x137)][0x1][_0x30e814(0x3ab)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x12a57f(_0x30e814(0x2b7)) + _0x30e814(0x2cf) + _0x4c3fbf + _0x30e814(0x1fc)), _0x4f0494[_0x30e814(0x218)][_0x30e814(0x250)] == _0x30e814(0x175) && _0x12d31d(_0x28c6e3)[_0x30e814(0x2e9)](_0x30e814(0x381) + _0x4f0494[_0x30e814(0x218)]['id'] + _0x30e814(0x306) + _0x2d2446['taken_at_timestamp'] + _0x30e814(0x165) + _0x2d2446[_0x30e814(0x1a4)] + _0x30e814(0x391) + _0x2d2446[_0x30e814(0x25e)]['username'] + _0x30e814(0x25f) + _0x4c3fbf + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x4f0494[_0x30e814(0x218)][_0x30e814(0x137)][_0x4f0494[_0x30e814(0x218)][_0x30e814(0x137)][_0x30e814(0x178)] - 0x1][_0x30e814(0x3ab)] + _0x30e814(0x2c9) + _0x4f0494[_0x30e814(0x218)][_0x30e814(0x137)][0x1]['src'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x12a57f('IMG') + _0x30e814(0x2cf) + _0x4c3fbf + _0x30e814(0x1fc)), _0x4c3fbf++;
                        }
                } else {
                    if (_0x2d2446[_0x30e814(0x367)])
                        _0x194c21(_0x30e814(0x367)), _0x2d2446[_0x30e814(0x367)][_0x30e814(0x2ad)]((_0x17982b, _0x392ce4) => {
                            const _0x319487 = _0x30e814;
                            let _0x341e09 = _0x392ce4 + 0x1;
                            _0x17982b['video_versions'] == null ? (_0x17982b[_0x319487(0x13f)][_0x319487(0x1b2)][_0x319487(0x14b)](function (_0x101e5a, _0x3f6962) {
                                const _0x1ecaef = _0x319487;
                                let _0xbd009e = new URL(_0x101e5a['url'])[_0x1ecaef(0x363)]['get']('stp'), _0x4f8e03 = new URL(_0x3f6962['url'])[_0x1ecaef(0x363)][_0x1ecaef(0x15c)](_0x1ecaef(0x392));
                                if (_0xbd009e && _0x4f8e03) {
                                    if (_0xbd009e[_0x1ecaef(0x178)] > _0x4f8e03[_0x1ecaef(0x178)])
                                        return 0x1;
                                    if (_0xbd009e[_0x1ecaef(0x178)] < _0x4f8e03['length'])
                                        return -0x1;
                                } else {
                                    if (_0x101e5a['width'] < _0x3f6962[_0x1ecaef(0x1e6)])
                                        return 0x1;
                                    if (_0x101e5a[_0x1ecaef(0x1e6)] > _0x3f6962['width'])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x12d31d(_0x28c6e3)['append'](_0x319487(0x381) + _0x17982b['pk'] + _0x319487(0x306) + _0x17982b[_0x319487(0x362)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2d2446[_0x319487(0x2ac)] + _0x319487(0x391) + _0x2d2446[_0x319487(0x25e)]['username'] + '\x22\x20data-globalIndex=\x22' + _0x341e09 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x17982b[_0x319487(0x13f)][_0x319487(0x1b2)][0x0][_0x319487(0x1d5)] + _0x319487(0x2c9) + _0x17982b['image_versions2'][_0x319487(0x1b2)][0x0][_0x319487(0x1d5)] + _0x319487(0x369) + _0x12a57f(_0x319487(0x394)) + '</span>\x20' + _0x341e09 + '\x20-</a>')) : _0x12d31d(_0x28c6e3)[_0x319487(0x2e9)](_0x319487(0x381) + _0x17982b['pk'] + _0x319487(0x306) + _0x17982b[_0x319487(0x362)] + _0x319487(0x165) + _0x2d2446[_0x319487(0x2ac)] + _0x319487(0x371) + _0x2d2446['owner'][_0x319487(0x2a3)] + _0x319487(0x25f) + _0x341e09 + _0x319487(0x2e1) + _0x17982b['video_versions'][0x0][_0x319487(0x1d5)] + _0x319487(0x2c9) + _0x17982b[_0x319487(0x13f)][_0x319487(0x1b2)][0x0][_0x319487(0x1d5)] + _0x319487(0x361) + _0x12a57f(_0x319487(0x2b7)) + _0x319487(0x2cf) + _0x341e09 + '\x20-</a>');
                        });
                    else {
                        let _0x1d9ed3 = 0x1;
                        _0x2d2446[_0x30e814(0x20c)] == null ? (_0x2d2446[_0x30e814(0x13f)]['candidates'][_0x30e814(0x14b)](function (_0x12416f, _0x210255) {
                            const _0x53326a = _0x30e814;
                            let _0x38e00f = new URL(_0x12416f[_0x53326a(0x1d5)])['searchParams'][_0x53326a(0x15c)]('stp'), _0x132db5 = new URL(_0x210255[_0x53326a(0x1d5)])[_0x53326a(0x363)]['get'](_0x53326a(0x392));
                            if (_0x38e00f && _0x132db5) {
                                if (_0x38e00f[_0x53326a(0x178)] > _0x132db5[_0x53326a(0x178)])
                                    return 0x1;
                                if (_0x38e00f[_0x53326a(0x178)] < _0x132db5[_0x53326a(0x178)])
                                    return -0x1;
                            } else {
                                if (_0x12416f[_0x53326a(0x1e6)] < _0x210255[_0x53326a(0x1e6)])
                                    return 0x1;
                                if (_0x12416f[_0x53326a(0x1e6)] > _0x210255[_0x53326a(0x1e6)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x12d31d(_0x28c6e3)['append'](_0x30e814(0x381) + _0x2d2446['pk'] + '\x22\x20datetime=\x22' + _0x2d2446[_0x30e814(0x362)] + _0x30e814(0x165) + _0x2d2446['code'] + _0x30e814(0x391) + _0x2d2446['owner'][_0x30e814(0x2a3)] + '\x22\x20data-globalIndex=\x22' + _0x1d9ed3 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x2d2446[_0x30e814(0x13f)][_0x30e814(0x1b2)][0x0][_0x30e814(0x1d5)] + _0x30e814(0x2c9) + _0x2d2446[_0x30e814(0x13f)][_0x30e814(0x1b2)][0x0]['url'] + _0x30e814(0x369) + _0x12a57f(_0x30e814(0x394)) + _0x30e814(0x2cf) + _0x1d9ed3 + '\x20-</a>')) : _0x12d31d(_0x28c6e3)[_0x30e814(0x2e9)](_0x30e814(0x381) + _0x2d2446['pk'] + _0x30e814(0x306) + _0x2d2446[_0x30e814(0x362)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2d2446[_0x30e814(0x2ac)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x2d2446[_0x30e814(0x25e)][_0x30e814(0x2a3)] + _0x30e814(0x25f) + _0x1d9ed3 + _0x30e814(0x2e1) + _0x2d2446['video_versions'][0x0][_0x30e814(0x1d5)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2d2446['image_versions2'][_0x30e814(0x1b2)][0x0][_0x30e814(0x1d5)] + _0x30e814(0x361) + _0x12a57f('VID') + _0x30e814(0x2cf) + _0x1d9ed3 + _0x30e814(0x1fc));
                    }
                }
                _0x12d31d('#_SNLOAD')[_0x30e814(0x186)](), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x30e814(0x31f)](function () {
                    const _0x3da4f2 = _0x30e814;
                    _0x12d31d(this)[_0x3da4f2(0x2f5)](_0x3da4f2(0x320)), _0x12d31d(this)[_0x3da4f2(0x1ad)](_0x3da4f2(0x30e)), _0x12d31d(this)['after'](_0x3da4f2(0x274) + _0x12a57f(_0x3da4f2(0x284)) + '\x22\x20class=\x22newTab\x22>' + _0x584745[_0x3da4f2(0x284)] + '</div>'), _0x12d31d(this)[_0x3da4f2(0x34a)](_0x3da4f2(0x39b)) == _0x3da4f2(0x14a) && _0x12d31d(this)[_0x3da4f2(0x228)](_0x3da4f2(0x201) + _0x12a57f(_0x3da4f2(0x177)) + _0x3da4f2(0x2c5) + _0x584745['THUMBNAIL'] + _0x3da4f2(0x219));
                });
            } catch (_0x4ff5eb) {
                _0x194c21(_0x30e814(0x2c1), _0x4ff5eb);
            }
            ;
        }
        function _0x4ff3b7(_0x3b2282) {
            const _0x4e4a2e = _0x3d7dc7;
            var _0x44395a = 0x0, _0x9a9e1b = _0x3b2282[_0x4e4a2e(0x1bc)](_0x4e4a2e(0x21d));
            return (_0x9a9e1b == null || !_0x9a9e1b[_0x4e4a2e(0x374)](_0x4e4a2e(0x2bb))) && (_0x9a9e1b = _0x3b2282['find'](_0x4e4a2e(0x152))['eq'](0x0)[_0x4e4a2e(0x34e)]('div')), _0x9a9e1b['filter']('._acnb')['each'](function (_0x26971c) {
                const _0x206888 = _0x4e4a2e;
                _0x12d31d(this)[_0x206888(0x374)](_0x206888(0x276)) && (_0x44395a = _0x26971c);
            }), _0x44395a;
        }
        async function _0x2f278e(_0x35d0ac) {
            const _0x4e7ca1 = _0x3d7dc7;
            if (_0x35d0ac) {
                _0x52853b(!![]);
                let _0x133da0 = new Date()[_0x4e7ca1(0x310)](), _0x150f9c = Math[_0x4e7ca1(0x1e1)](_0x133da0 / 0x3e8), _0x12c83f = location[_0x4e7ca1(0x2ef)][_0x4e7ca1(0x1e8)](/(reels|tagged)\/$/ig, '')[_0x4e7ca1(0x2d6)]('/')[_0x4e7ca1(0x2db)](_0x1a8748 => _0x1a8748[_0x4e7ca1(0x178)] > 0x0)['at'](-0x1), _0x259e75 = await _0x5bddce(_0x12c83f);
                try {
                    let _0x5c99e8 = await _0x1c242b(_0x259e75[_0x4e7ca1(0x147)]['pk']);
                    _0x118658(_0x5c99e8, _0x12c83f, _0x4e7ca1(0x190), _0x150f9c, 'jpg');
                } catch (_0x23a997) {
                    _0x118658(_0x259e75['user'][_0x4e7ca1(0x39c)], _0x12c83f, 'avatar', _0x150f9c, _0x4e7ca1(0x114));
                }
                _0x52853b(![]);
            } else {
                if (!_0x12d31d('.IG_DWPROFILE')[_0x4e7ca1(0x178)]) {
                    let _0x1cbfbc = setInterval(() => {
                        const _0x14637a = _0x4e7ca1;
                        if (_0x12d31d(_0x14637a(0x38c))['length']) {
                            clearInterval(_0x1cbfbc);
                            return;
                        }
                        _0x12d31d('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')[_0x14637a(0x293)]()[_0x14637a(0x293)]()[_0x14637a(0x2e9)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x12a57f('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x584745[_0x14637a(0x1cb)] + '</div>'), _0x12d31d(_0x14637a(0x277))[_0x14637a(0x293)]()[_0x14637a(0x293)]()[_0x14637a(0x247)](_0x14637a(0x1a3), 'relative'), _0x12d31d('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')[_0x14637a(0x293)]()[_0x14637a(0x293)]()['parent']()[_0x14637a(0x2e9)](_0x14637a(0x1d7) + _0x12a57f('DW') + _0x14637a(0x167) + _0x584745[_0x14637a(0x1cb)] + _0x14637a(0x219)), _0x12d31d(_0x14637a(0x157))[_0x14637a(0x293)]()[_0x14637a(0x293)]()['parent']()['css'](_0x14637a(0x1a3), _0x14637a(0x256));
                    }, 0x96);
                }
            }
        }
        async function _0x434c28(_0x2f656d, _0x8920b1, _0x457128) {
            const _0x10b0fe = _0x3d7dc7;
            if (_0x2f656d) {
                _0x52853b(!![]);
                let _0x10c892 = location[_0x10b0fe(0x1be)][_0x10b0fe(0x2d6)]('?')['at'](0x0)[_0x10b0fe(0x2d6)]('instagram.com/reels/')['at'](-0x1)[_0x10b0fe(0x1e8)]('/', ''), _0x1cdc42 = await _0x13f592(_0x10c892), _0x392c4e = _0x1dd0d5(_0x1cdc42['data']), _0x39ead6 = new Date()[_0x10b0fe(0x310)]();
                _0x3eb4a3[_0x10b0fe(0x285)] && (_0x1cdc42[_0x10b0fe(0x372)] === _0x10b0fe(0x1c0) ? _0x39ead6 = _0x392c4e[_0x10b0fe(0x14d)]['taken_at_timestamp'] : _0x39ead6 = _0x392c4e[_0x10b0fe(0x362)]);
                if (_0x1cdc42[_0x10b0fe(0x372)] === _0x10b0fe(0x1c0)) {
                    if (_0x8920b1 && _0x392c4e['shortcode_media']['is_video']) {
                        if (_0x457128)
                            _0x5d6c82(_0x392c4e[_0x10b0fe(0x14d)][_0x10b0fe(0x2a9)]);
                        else {
                            let _0x1bf0bd = 'mp4';
                            _0x118658(_0x392c4e[_0x10b0fe(0x14d)][_0x10b0fe(0x2a9)], _0x392c4e[_0x10b0fe(0x14d)][_0x10b0fe(0x25e)][_0x10b0fe(0x2a3)], _0x10b0fe(0x236), _0x39ead6, _0x1bf0bd, _0x10c892);
                        }
                    } else {
                        if (_0x457128)
                            _0x5d6c82(_0x392c4e[_0x10b0fe(0x14d)]['display_resources']['at'](-0x1)[_0x10b0fe(0x3ab)]);
                        else {
                            let _0x295267 = _0x10b0fe(0x114);
                            _0x118658(_0x392c4e['shortcode_media'][_0x10b0fe(0x137)]['at'](-0x1)[_0x10b0fe(0x3ab)], _0x392c4e[_0x10b0fe(0x14d)][_0x10b0fe(0x25e)][_0x10b0fe(0x2a3)], 'reels', _0x39ead6, _0x295267, _0x10c892);
                        }
                    }
                } else {
                    if (_0x8920b1 && _0x392c4e[_0x10b0fe(0x20c)] != null) {
                        if (_0x457128)
                            _0x5d6c82(_0x392c4e[_0x10b0fe(0x20c)][0x0]['url']);
                        else {
                            let _0x32fcb6 = _0x10b0fe(0x2dd);
                            _0x118658(_0x392c4e[_0x10b0fe(0x20c)][0x0]['url'], _0x392c4e['owner']['username'], _0x10b0fe(0x236), _0x39ead6, _0x32fcb6, _0x10c892);
                        }
                    } else {
                        if (_0x457128)
                            _0x5d6c82(_0x392c4e[_0x10b0fe(0x13f)][_0x10b0fe(0x1b2)][0x0]['url']);
                        else {
                            let _0x35d7b2 = 'jpg';
                            _0x118658(_0x392c4e[_0x10b0fe(0x13f)][_0x10b0fe(0x1b2)][0x0][_0x10b0fe(0x1d5)], _0x392c4e['owner'][_0x10b0fe(0x2a3)], 'reels', _0x39ead6, _0x35d7b2, _0x10c892);
                        }
                    }
                }
                _0x52853b(![]);
            } else
                var _0x50f5f4 = setInterval(() => {
                    const _0xcf4277 = _0x10b0fe;
                    _0x12d31d(_0xcf4277(0x351))['length'] > 0x0 && (clearInterval(_0x50f5f4), _0x3eb4a3['SCROLL_BUTTON'] && (_0x12d31d(_0xcf4277(0x2a4))[_0xcf4277(0x186)](), _0x12d31d(_0xcf4277(0x2e4))[_0xcf4277(0x2e9)]('<section\x20id=\x22scrollWrapper\x22></section>'), _0x12d31d(_0xcf4277(0x153))[_0xcf4277(0x2e9)](_0xcf4277(0x17e)), _0x12d31d('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0xcf4277(0x2e9)](_0xcf4277(0x38d)), _0x12d31d(_0xcf4277(0x12a))['on']('click', function () {
                        const _0x359cf9 = _0xcf4277;
                        _0x12d31d('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x359cf9(0x345)]({
                            'top': -0x1e,
                            'behavior': _0x359cf9(0x1d0)
                        });
                    }), _0x12d31d('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0xcf4277(0x2a0), function () {
                        const _0x2fa810 = _0xcf4277;
                        _0x12d31d('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x2fa810(0x345)]({
                            'top': 0x1e,
                            'behavior': _0x2fa810(0x1d0)
                        });
                    })), _0x12d31d(_0xcf4277(0x205))[_0xcf4277(0x34e)](_0xcf4277(0x1cf))[_0xcf4277(0x31f)](function () {
                        const _0x548579 = _0xcf4277;
                        if (_0x12d31d(this)['children']()['length'] > 0x0) {
                            if (!_0x12d31d(this)[_0x548579(0x34e)]()['find'](_0x548579(0x278))['length']) {
                                var _0x4e8ab1 = _0x12d31d(this);
                                _0x12d31d(this)['children']()['css']('position', _0x548579(0x256)), _0x12d31d(this)[_0x548579(0x34e)]()[_0x548579(0x2e9)](_0x548579(0x1d7) + _0x12a57f('DW') + '\x22\x20class=\x22IG_REELS\x22>' + _0x584745[_0x548579(0x1cb)] + '</div>'), _0x12d31d(this)['children']()['append'](_0x548579(0x274) + _0x12a57f(_0x548579(0x284)) + _0x548579(0x22e) + _0x584745['NEW_TAB'] + _0x548579(0x219)), _0x12d31d(this)[_0x548579(0x34e)]()['append'](_0x548579(0x201) + _0x12a57f(_0x548579(0x177)) + _0x548579(0x359) + _0x584745[_0x548579(0x380)] + _0x548579(0x219));
                                _0x3eb4a3['DISABLE_VIDEO_LOOPING'] && _0x12d31d(this)[_0x548579(0x1bc)](_0x548579(0x14a))[_0x548579(0x31f)](function () {
                                    const _0x420d4a = _0x548579;
                                    _0x12d31d(this)['on'](_0x420d4a(0x2bc), function () {
                                        const _0x43040d = _0x420d4a;
                                        if (!_0x12d31d(this)[_0x43040d(0x198)](_0x43040d(0x32f))) {
                                            let _0x129083 = _0x12d31d(this)[_0x43040d(0x34c)]()[_0x43040d(0x1bc)](_0x43040d(0x2ff))[_0x43040d(0x1b4)](_0x43040d(0x368));
                                            _0x129083[_0x43040d(0x178)] > 0x0 ? (_0x12d31d(this)[_0x43040d(0x34a)](_0x43040d(0x1ed), !![]), _0x129083[_0x43040d(0x39f)]('click'), _0x194c21(_0x43040d(0x24c))) : (_0x12d31d(this)[_0x43040d(0x34a)]('data-loop', !![]), _0x12d31d(this)['parent']()[_0x43040d(0x1bc)](_0x43040d(0x2be))[_0x43040d(0x2e6)](_0x43040d(0x1c7)), this[_0x43040d(0x174)](), _0x194c21(_0x43040d(0x2a6)));
                                        }
                                    });
                                });
                                _0x3eb4a3[_0x548579(0x331)] && _0x12d31d(this)[_0x548579(0x1bc)](_0x548579(0x14a))[_0x548579(0x31f)](function () {
                                    const _0x3553c6 = _0x548579;
                                    if (!_0x12d31d(this)[_0x3553c6(0x198)](_0x3553c6(0x30a))) {
                                        let _0x455da8 = _0x12d31d(this);
                                        _0x194c21('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x3eb4a3['MODIFY_VIDEO_VOLUME'] && (this[_0x3553c6(0x19d)] = _0x33999c['videoVolume'], _0x12d31d(this)['on'](_0x3553c6(0x17d), function () {
                                            const _0x3f4995 = _0x3553c6;
                                            this['volume'] = _0x33999c[_0x3f4995(0x373)];
                                        })), _0x12d31d(this)['on'](_0x3553c6(0x1c8), function (_0x12e24e) {
                                            const _0x2cdc57 = _0x3553c6;
                                            _0x12e24e[_0x2cdc57(0x18f)](), _0x455da8['css'](_0x2cdc57(0x2bd), '-1'), _0x455da8['removeAttr'](_0x2cdc57(0x30a));
                                        }), _0x12d31d(this)[_0x3553c6(0x293)]()['find'](_0x3553c6(0x269))[_0x3553c6(0x2db)](function () {
                                            const _0x2a37eb = _0x3553c6;
                                            return _0x12d31d(this)['parent'](_0x2a37eb(0x21f))['length'] > 0x0 && _0x12d31d(this)['css'](_0x2a37eb(0x35a)) === _0x2a37eb(0x173) && _0x12d31d(this)[_0x2a37eb(0x34a)](_0x2a37eb(0x1c7)) != null;
                                        })[_0x3553c6(0x36e)]()['on']('contextmenu', function (_0x2865ef) {
                                            const _0x21deb1 = _0x3553c6;
                                            _0x2865ef['preventDefault'](), _0x455da8[_0x21deb1(0x247)]('z-index', '2'), _0x455da8[_0x21deb1(0x34a)]('controls', !![]);
                                        }), _0x12d31d(this)['on'](_0x3553c6(0x251), function () {
                                            const _0x311ef8 = _0x3553c6;
                                            let _0x15cfcb = _0x12d31d(this)[_0x311ef8(0x293)]()[_0x311ef8(0x1bc)](_0x311ef8(0x117))[_0x311ef8(0x1bc)](_0x311ef8(0x13d))[_0x311ef8(0x2db)](function (_0x40d779) {
                                                const _0x5cdc13 = _0x311ef8;
                                                return _0x12d31d(this)[_0x5cdc13(0x1e6)]() <= 0x40 && _0x12d31d(this)[_0x5cdc13(0x15f)]() <= 0x40 && _0x12d31d(this)[_0x5cdc13(0x1bc)](_0x5cdc13(0x303))[_0x5cdc13(0x178)] > 0x0;
                                            });
                                            var _0x4a1ae2 = _0x15cfcb[_0x311ef8(0x1bc)](_0x311ef8(0x176))[_0x311ef8(0x178)] === 0x0;
                                            this[_0x311ef8(0x283)] != _0x4a1ae2 && (this[_0x311ef8(0x19d)] = _0x33999c[_0x311ef8(0x373)], _0x15cfcb?.[_0x311ef8(0x39f)](_0x311ef8(0x2a0))), _0x12d31d(this)[_0x311ef8(0x34a)]('data-completed') && (_0x33999c[_0x311ef8(0x373)] = this['volume'], GM_setValue('G_VIDEO_VOLUME', this['volume'])), this[_0x311ef8(0x19d)] == _0x33999c[_0x311ef8(0x373)] && _0x12d31d(this)[_0x311ef8(0x34a)](_0x311ef8(0x37c), !![]);
                                        }), _0x12d31d(this)[_0x3553c6(0x247)]('position', _0x3553c6(0x2e2)), _0x12d31d(this)[_0x3553c6(0x247)](_0x3553c6(0x2bd), '2'), _0x12d31d(this)[_0x3553c6(0x34a)]('data-controls', !![]), _0x12d31d(this)[_0x3553c6(0x34a)](_0x3553c6(0x30a), !![]);
                                    }
                                });
                                var _0x20ffcf = _0x4e8ab1[_0x548579(0x1bc)]('video'), _0x26885e = _0x12d31d(this)[_0x548579(0x1bc)](_0x548579(0x36f))[_0x548579(0x36e)]();
                                _0x57ba87(_0x20ffcf, _0x26885e, _0x548579(0x258));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x243df2() {
            const _0x2b8996 = _0x3d7dc7;
            _0x52853b(!![]);
            let _0x2e0e4b = new Date()[_0x2b8996(0x310)](), _0x23847b = Math[_0x2b8996(0x1e1)](_0x2e0e4b / 0x3e8), _0x1bd283 = _0x12d31d('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()[_0x2b8996(0x396)]() || location['pathname'][_0x2b8996(0x2d6)]('/')[_0x2b8996(0x2db)](_0x1348be => _0x1348be[_0x2b8996(0x178)] > 0x0)['at'](0x1), _0xcc0b7d = await _0x5bddce(_0x1bd283), _0x273e84 = _0xcc0b7d[_0x2b8996(0x147)]['pk'], _0x3e9aee = await _0x12f1a8(_0x273e84), _0x3b2847 = 0x0;
            _0x43eb29(_0x3b2847, _0x3e9aee[_0x2b8996(0x198)][_0x2b8996(0x2e5)][0x0][_0x2b8996(0x37d)]['length']), _0x3e9aee[_0x2b8996(0x198)][_0x2b8996(0x2e5)][0x0]['items']['forEach']((_0x1b8491, _0x49b99c) => {
                setTimeout(() => {
                    const _0x30f800 = a0_0xa175;
                    _0x3eb4a3[_0x30f800(0x285)] && (_0x23847b = _0x1b8491[_0x30f800(0x36b)]), _0x1b8491[_0x30f800(0x137)][_0x30f800(0x14b)](function (_0x178b3e, _0x2ea321) {
                        const _0x50a2f7 = _0x30f800;
                        if (_0x178b3e[_0x50a2f7(0x2c4)] < _0x2ea321[_0x50a2f7(0x2c4)])
                            return 0x1;
                        if (_0x178b3e['config_width'] > _0x2ea321[_0x50a2f7(0x2c4)])
                            return -0x1;
                        return 0x0;
                    }), _0x1b8491[_0x30f800(0x2a2)] ? _0x118658(_0x1b8491[_0x30f800(0x270)][0x0]['src'], _0x1bd283, _0x30f800(0x31b), _0x23847b, 'mp4', _0x1b8491['id'])[_0x30f800(0x121)](() => {
                        const _0x30b4ab = _0x30f800;
                        _0x43eb29(++_0x3b2847, _0x3e9aee[_0x30b4ab(0x198)]['reels_media'][0x0]['items'][_0x30b4ab(0x178)]);
                    }) : _0x118658(_0x1b8491[_0x30f800(0x137)][0x0]['src'], _0x1bd283, _0x30f800(0x31b), _0x23847b, _0x30f800(0x114), _0x1b8491['id'])[_0x30f800(0x121)](() => {
                        const _0x3ff042 = _0x30f800;
                        _0x43eb29(++_0x3b2847, _0x3e9aee[_0x3ff042(0x198)][_0x3ff042(0x2e5)][0x0][_0x3ff042(0x37d)][_0x3ff042(0x178)]);
                    });
                }, 0x64 * _0x49b99c);
            });
        }
        async function _0x31d914(_0x590011, _0x43a76b, _0x32726d) {
            const _0x2849f1 = _0x3d7dc7;
            var _0x26a95b = _0x12d31d(_0x2849f1(0x1fb))[_0x2849f1(0x36e)]()['text']() || location[_0x2849f1(0x2ef)][_0x2849f1(0x2d6)]('/')[_0x2849f1(0x2db)](_0x4d6b58 => _0x4d6b58[_0x2849f1(0x178)] > 0x0)['at'](0x1);
            if (_0x590011) {
                let _0x18dac1 = new Date()[_0x2849f1(0x310)](), _0x5afaa6 = Math[_0x2849f1(0x1e1)](_0x18dac1 / 0x3e8);
                _0x52853b(!![]);
                if (_0x3eb4a3[_0x2849f1(0x2b5)] && !_0x33999c[_0x2849f1(0x2e3)]) {
                    let _0x44635d = null, _0x4b3de9 = await _0x5bddce(_0x26a95b), _0x1e7c0b = _0x4b3de9[_0x2849f1(0x147)]['pk'], _0xdb126d = await _0x12f1a8(_0x1e7c0b), _0x13a630 = location[_0x2849f1(0x2ef)]['split']('/')[_0x2849f1(0x2db)](_0x13f4d0 => _0x13f4d0[_0x2849f1(0x178)] > 0x0 && _0x13f4d0['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0xdb126d['data'][_0x2849f1(0x2e5)][0x0][_0x2849f1(0x37d)][_0x2849f1(0x2ad)](_0x2d3ecd => {
                        _0x2d3ecd['id'] == _0x13a630 && (_0x44635d = _0x2d3ecd['id']);
                    });
                    if (_0x44635d == null) {
                        let _0x4160cb = _0x7213ee(_0x26a95b);
                        _0x4160cb[_0x2849f1(0x31f)](function (_0x477712) {
                            const _0x3d868e = _0x2849f1;
                            _0x12d31d(this)[_0x3d868e(0x34e)]()['length'] > 0x0 && (_0x44635d = _0xdb126d[_0x3d868e(0x198)][_0x3d868e(0x2e5)][0x0][_0x3d868e(0x37d)][_0x477712]['id']);
                        });
                    }
                    _0x44635d == null && (_0x12d31d(_0x2849f1(0x259))[_0x2849f1(0x31f)](function (_0xf9b913) {
                        const _0x32290e = _0x2849f1;
                        _0x12d31d(this)[_0x32290e(0x374)](_0x32290e(0x185)) && (_0x12d31d(this)[_0x32290e(0x34e)]()[_0x32290e(0x178)] > 0x0 && (_0x44635d = _0xdb126d[_0x32290e(0x198)]['reels_media'][0x0][_0x32290e(0x37d)][_0xf9b913]['id']));
                    }), _0x12d31d('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x2849f1(0x31f)](function (_0x594f72) {
                        const _0x527de0 = _0x2849f1;
                        _0x12d31d(this)[_0x527de0(0x34e)]()[_0x527de0(0x374)](_0x527de0(0x375)) && (_0x44635d = _0xdb126d[_0x527de0(0x198)]['reels_media'][0x0]['items'][_0x594f72]['id']);
                    }));
                    _0x44635d == null && (_0x44635d = location[_0x2849f1(0x2ef)][_0x2849f1(0x2d6)]('/')['filter'](_0x54b438 => _0x54b438[_0x2849f1(0x178)] > 0x0 && _0x54b438['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x26f845 = await _0x14ab72(_0x44635d);
                    _0x3eb4a3['RENAME_PUBLISH_DATE'] && (_0x5afaa6 = _0x26f845[_0x2849f1(0x37d)][0x0][_0x2849f1(0x362)]);
                    _0x26f845[_0x2849f1(0x2a7)] === 'ok' ? _0x26f845[_0x2849f1(0x37d)][0x0][_0x2849f1(0x20c)] ? _0x32726d ? _0x5d6c82(_0x26f845[_0x2849f1(0x37d)][0x0]['video_versions'][0x0][_0x2849f1(0x1d5)]) : _0x118658(_0x26f845['items'][0x0][_0x2849f1(0x20c)][0x0]['url'], _0x26a95b, _0x2849f1(0x31b), _0x5afaa6, 'mp4', _0x44635d) : _0x32726d ? _0x5d6c82(_0x26f845[_0x2849f1(0x37d)][0x0][_0x2849f1(0x13f)]['candidates'][0x0][_0x2849f1(0x1d5)]) : _0x118658(_0x26f845[_0x2849f1(0x37d)][0x0]['image_versions2'][_0x2849f1(0x1b2)][0x0][_0x2849f1(0x1d5)], _0x26a95b, _0x2849f1(0x31b), _0x5afaa6, _0x2849f1(0x114), _0x44635d) : (_0x3eb4a3['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x33999c[_0x2849f1(0x2e3)] = !![], _0x31d914(_0x590011, _0x43a76b, _0x32726d)) : alert(_0x2849f1(0x217) + _0x26f845[_0x2849f1(0x21e)]), _0x194c21(_0x26f845));
                    _0x52853b(![]);
                    return;
                }
                if (_0x12d31d(_0x2849f1(0x212))[_0x2849f1(0x178)] > 0x0) {
                    let _0x3a5ab4 = _0x2849f1(0x2dd), _0x2cd813 = '', _0x1548bd = location[_0x2849f1(0x2ef)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x2935b7 = null;
                    if (_0x33999c[_0x2849f1(0x370)][_0x2849f1(0x31b)][_0x26a95b] && !_0x43a76b) {
                        _0x194c21(_0x2849f1(0x2f8), _0x26a95b), _0x33999c['GL_dataCache'][_0x2849f1(0x31b)][_0x26a95b][_0x2849f1(0x198)][_0x2849f1(0x2e5)][0x0]['items'][_0x2849f1(0x2ad)](_0x2cc9a2 => {
                            const _0x20a4e7 = _0x2849f1;
                            _0x2cc9a2['id'] == _0x1548bd && (_0x2cd813 = _0x2cc9a2[_0x20a4e7(0x270)][0x0][_0x20a4e7(0x3ab)], _0x3eb4a3[_0x20a4e7(0x285)] && (_0x5afaa6 = _0x2cc9a2[_0x20a4e7(0x36b)], _0x2935b7 = _0x2cc9a2['id']));
                        });
                        if (_0x2cd813[_0x2849f1(0x178)] == 0x0) {
                            _0x194c21(_0x2849f1(0x1ab), _0x26a95b), _0x31d914(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x426105 = await _0x5bddce(_0x26a95b), _0x479fd9 = _0x426105['user']['pk'], _0x58dd8e = await _0x12f1a8(_0x479fd9);
                        _0x58dd8e[_0x2849f1(0x198)]['reels_media'][0x0]['items'][_0x2849f1(0x2ad)](_0x21009e => {
                            const _0x3df82c = _0x2849f1;
                            _0x21009e['id'] == _0x1548bd && (_0x2cd813 = _0x21009e[_0x3df82c(0x270)][0x0][_0x3df82c(0x3ab)], _0x3eb4a3[_0x3df82c(0x285)] && (_0x5afaa6 = _0x21009e['taken_at_timestamp'], _0x2935b7 = _0x21009e['id']));
                        });
                        if (_0x2cd813['length'] == 0x0) {
                            let _0x3a2966 = _0x7213ee(_0x26a95b);
                            _0x3a2966[_0x2849f1(0x31f)](function (_0x1b109d) {
                                const _0x109a19 = _0x2849f1;
                                _0x12d31d(this)[_0x109a19(0x34e)]()[_0x109a19(0x178)] > 0x0 && (_0x2cd813 = _0x58dd8e['data']['reels_media'][0x0]['items'][_0x1b109d][_0x109a19(0x270)][0x0][_0x109a19(0x3ab)], _0x3eb4a3['RENAME_PUBLISH_DATE'] && (_0x5afaa6 = _0x58dd8e[_0x109a19(0x198)][_0x109a19(0x2e5)][0x0][_0x109a19(0x37d)][_0x1b109d][_0x109a19(0x36b)], _0x2935b7 = _0x58dd8e[_0x109a19(0x198)][_0x109a19(0x2e5)][0x0][_0x109a19(0x37d)][_0x1b109d]['id']));
                            }), _0x2cd813['length'] == 0x0 && (_0x12d31d(_0x2849f1(0x259))['each'](function (_0x2b03f0) {
                                const _0x971cfc = _0x2849f1;
                                _0x12d31d(this)[_0x971cfc(0x374)]('x1lix1fw') && (_0x12d31d(this)[_0x971cfc(0x34e)]()[_0x971cfc(0x178)] > 0x0 && (_0x2cd813 = _0x58dd8e[_0x971cfc(0x198)][_0x971cfc(0x2e5)][0x0][_0x971cfc(0x37d)][_0x2b03f0][_0x971cfc(0x270)][0x0]['src'], _0x3eb4a3[_0x971cfc(0x285)] && (_0x5afaa6 = _0x58dd8e[_0x971cfc(0x198)][_0x971cfc(0x2e5)][0x0][_0x971cfc(0x37d)][_0x2b03f0]['taken_at_timestamp'], _0x2935b7 = _0x58dd8e['data'][_0x971cfc(0x2e5)][0x0][_0x971cfc(0x37d)][_0x2b03f0]['id'])));
                            }), _0x12d31d(_0x2849f1(0x254))['each'](function (_0x42b26e) {
                                const _0x308ea2 = _0x2849f1;
                                _0x12d31d(this)[_0x308ea2(0x34e)]()[_0x308ea2(0x374)]('_ac3q') && (_0x2cd813 = _0x58dd8e['data'][_0x308ea2(0x2e5)][0x0][_0x308ea2(0x37d)][_0x42b26e][_0x308ea2(0x270)][0x0][_0x308ea2(0x3ab)], _0x3eb4a3[_0x308ea2(0x285)] && (_0x5afaa6 = _0x58dd8e[_0x308ea2(0x198)][_0x308ea2(0x2e5)][0x0][_0x308ea2(0x37d)][_0x42b26e][_0x308ea2(0x36b)], _0x2935b7 = _0x58dd8e[_0x308ea2(0x198)][_0x308ea2(0x2e5)][0x0][_0x308ea2(0x37d)][_0x42b26e]['id']));
                            }));
                        }
                        _0x33999c[_0x2849f1(0x370)][_0x2849f1(0x31b)][_0x26a95b] = _0x58dd8e;
                    }
                    _0x2cd813[_0x2849f1(0x178)] == 0x0 ? alert(_0x12a57f('NO_VID_URL')) : _0x32726d ? _0x5d6c82(_0x2cd813) : _0x118658(_0x2cd813, _0x26a95b, _0x2849f1(0x31b), _0x5afaa6, _0x3a5ab4, _0x2935b7);
                } else {
                    let _0x2da60c = _0x12d31d(_0x2849f1(0x246))['attr'](_0x2849f1(0x17c))?.[_0x2849f1(0x2d6)](',')[0x0]?.['split']('\x20')[0x0], _0x3f8b02 = _0x2da60c ? _0x2da60c : _0x12d31d(_0x2849f1(0x246))[_0x2849f1(0x2db)](function () {
                            const _0x246c92 = _0x2849f1;
                            return _0x12d31d(this)['parents']('a')[_0x246c92(0x178)] === 0x0 && _0x12d31d(this)[_0x246c92(0x1e6)]() === _0x12d31d(this)[_0x246c92(0x293)]()[_0x246c92(0x1e6)]();
                        })['attr']('src');
                    if (!_0x3f8b02) {
                        let _0x1e1f9b = _0x12d31d(_0x2849f1(0x12c));
                        _0x3f8b02 = _0x1e1f9b[_0x2849f1(0x34a)]('srcset') ? _0x1e1f9b[_0x2849f1(0x34a)](_0x2849f1(0x17c))?.[_0x2849f1(0x2d6)](',')[0x0]?.[_0x2849f1(0x2d6)]('\x20')[0x0] : _0x1e1f9b[_0x2849f1(0x34a)]('src');
                    }
                    _0x3eb4a3[_0x2849f1(0x285)] && (_0x5afaa6 = new Date(_0x12d31d(_0x2849f1(0x360))[_0x2849f1(0x36e)]()[_0x2849f1(0x34a)]('datetime'))[_0x2849f1(0x310)]());
                    let _0x390d43 = _0x3f8b02, _0x53a114 = _0x2849f1(0x114);
                    _0x32726d ? _0x5d6c82(_0x390d43) : _0x118658(_0x390d43, _0x26a95b, _0x2849f1(0x31b), _0x5afaa6, _0x53a114, _0x23a596(_0x390d43) ?? '');
                }
                _0x33999c[_0x2849f1(0x2e3)] = ![], _0x52853b(![]);
            } else {
                if (!_0x12d31d(_0x2849f1(0x354))[_0x2849f1(0x178)]) {
                    _0x33999c[_0x2849f1(0x370)][_0x2849f1(0x31b)] = {};
                    let _0x48fed4 = null;
                    _0x12d31d(_0x2849f1(0x2da))[_0x2849f1(0x178)] > 0x0 ? _0x48fed4 = _0x12d31d(_0x2849f1(0x1dd)) : (_0x48fed4 = _0x12d31d(_0x2849f1(0x290)), _0x48fed4['css'](_0x2849f1(0x1a3), _0x2849f1(0x256)));
                    _0x48fed4[_0x2849f1(0x178)] === 0x0 && (_0x48fed4 = _0x12d31d(_0x2849f1(0x2ab))[_0x2849f1(0x293)]()[_0x2849f1(0x293)]()['parent']()[_0x2849f1(0x1bc)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x48fed4[_0x2849f1(0x247)](_0x2849f1(0x1a3), _0x2849f1(0x256)));
                    _0x48fed4[_0x2849f1(0x178)] === 0x0 && (_0x48fed4 = _0x12d31d(_0x2849f1(0x2ab))['parent']()['parent']()[_0x2849f1(0x293)]()['find'](_0x2849f1(0x344)), _0x48fed4['css']('position', 'relative'));
                    if (_0x48fed4['length'] === 0x0) {
                        let _0xe9a6db = _0x12d31d(_0x2849f1(0x11e)), _0x45518c = 0x0;
                        _0xe9a6db['each'](function () {
                            const _0x555022 = _0x2849f1;
                            _0x12d31d(this)[_0x555022(0x1e6)]() > _0x45518c && (_0x45518c = _0x12d31d(this)[_0x555022(0x1e6)](), _0x48fed4 = _0x12d31d(this)['children'](_0x555022(0x1cf))[_0x555022(0x36e)]());
                        });
                    }
                    if (_0x48fed4 != null) {
                        _0x48fed4[_0x2849f1(0x36e)]()[_0x2849f1(0x247)](_0x2849f1(0x1a3), _0x2849f1(0x256)), _0x48fed4[_0x2849f1(0x36e)]()[_0x2849f1(0x2e9)](_0x2849f1(0x1d7) + _0x12a57f('DW') + '\x22\x20class=\x22IG_DWSTORY\x22>' + _0x584745[_0x2849f1(0x1cb)] + _0x2849f1(0x219)), _0x48fed4[_0x2849f1(0x36e)]()[_0x2849f1(0x2e9)](_0x2849f1(0x274) + _0x12a57f(_0x2849f1(0x284)) + _0x2849f1(0x26f) + _0x584745[_0x2849f1(0x284)] + _0x2849f1(0x219));
                        let _0x2d4323 = _0x7213ee(_0x26a95b);
                        _0x2d4323['length'] > 0x1 && _0x48fed4[_0x2849f1(0x36e)]()[_0x2849f1(0x2e9)](_0x2849f1(0x275) + _0x12a57f(_0x2849f1(0x3a7)) + _0x2849f1(0x2c3) + _0x584745[_0x2849f1(0x29c)] + _0x2849f1(0x219)), _0x48fed4[_0x2849f1(0x1bc)](_0x2849f1(0x378))['each'](function () {
                            const _0x455f7a = _0x2849f1;
                            _0x12d31d(this)['on'](_0x455f7a(0x22c), function () {
                                const _0x4568f9 = _0x455f7a;
                                !_0x12d31d(this)[_0x4568f9(0x198)](_0x4568f9(0x2fa)) && (_0x48fed4[_0x4568f9(0x1bc)](_0x4568f9(0x26a))[_0x4568f9(0x178)] === 0x0 ? (_0x12d31d(this)[_0x4568f9(0x34a)](_0x4568f9(0x2ea), !![]), _0x12d31d(_0x4568f9(0x26a))[_0x4568f9(0x186)](), _0x194c21(_0x4568f9(0x1aa))) : (_0x12d31d(this)[_0x4568f9(0x34a)](_0x4568f9(0x2ea), !![]), _0x194c21(_0x4568f9(0x1cc))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x321b88(_0x32d60d, _0x487c02) {
            const _0x2dabb4 = _0x3d7dc7;
            if (_0x32d60d) {
                let _0x42eb58 = new Date()[_0x2dabb4(0x310)](), _0x49f5c3 = Math[_0x2dabb4(0x1e1)](_0x42eb58 / 0x3e8), _0x288453 = _0x2dabb4(0x114), _0x23de1a = _0x12d31d(_0x2dabb4(0x1fb))[_0x2dabb4(0x36e)]()['text']() || location[_0x2dabb4(0x2ef)][_0x2dabb4(0x2d6)]('/')['at'](0x2), _0xd5b9b9 = location['pathname'][_0x2dabb4(0x222)](/\/$/ig, '')[_0x2dabb4(0x2d6)]('/')['at'](-0x1), _0x12a985 = '', _0x4f50fd = null;
                _0x52853b(!![]);
                if (_0x3eb4a3[_0x2dabb4(0x2b5)] && !_0x33999c[_0x2dabb4(0x2e3)]) {
                    let _0x1da14a = await _0x5bddce(_0x23de1a), _0x15610a = _0x1da14a[_0x2dabb4(0x147)]['pk'], _0x44d137 = await _0x12f1a8(_0x15610a), _0x59abe1 = location[_0x2dabb4(0x2ef)][_0x2dabb4(0x2d6)]('/')[_0x2dabb4(0x2db)](_0x27268a => _0x27268a[_0x2dabb4(0x178)] > 0x0 && _0x27268a['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x44d137[_0x2dabb4(0x198)][_0x2dabb4(0x2e5)][0x0][_0x2dabb4(0x37d)]['forEach'](_0x58c7bb => {
                        _0x58c7bb['id'] == _0x59abe1 && (_0x4f50fd = _0x58c7bb['id']);
                    });
                    if (_0x4f50fd == null) {
                        let _0xa0a863 = _0x7213ee(_0x23de1a);
                        _0xa0a863[_0x2dabb4(0x31f)](function (_0x67be74) {
                            const _0x294ca6 = _0x2dabb4;
                            _0x12d31d(this)['children']()[_0x294ca6(0x178)] > 0x0 && (_0x4f50fd = _0x44d137[_0x294ca6(0x198)][_0x294ca6(0x2e5)][0x0][_0x294ca6(0x37d)][_0x67be74]['id']);
                        });
                    }
                    _0x4f50fd == null && (_0x12d31d(_0x2dabb4(0x259))[_0x2dabb4(0x31f)](function (_0x4cdf76) {
                        const _0x17f6d1 = _0x2dabb4;
                        _0x12d31d(this)[_0x17f6d1(0x374)](_0x17f6d1(0x185)) && (_0x12d31d(this)[_0x17f6d1(0x34e)]()[_0x17f6d1(0x178)] > 0x0 && (_0x4f50fd = _0x44d137['data'][_0x17f6d1(0x2e5)][0x0][_0x17f6d1(0x37d)][_0x4cdf76]['id']));
                    }), _0x12d31d(_0x2dabb4(0x254))[_0x2dabb4(0x31f)](function (_0x45b2dc) {
                        const _0x2ea8f9 = _0x2dabb4;
                        _0x12d31d(this)['children']()[_0x2ea8f9(0x374)](_0x2ea8f9(0x375)) && (_0x4f50fd = _0x44d137[_0x2ea8f9(0x198)]['reels_media'][0x0][_0x2ea8f9(0x37d)][_0x45b2dc]['id']);
                    }));
                    _0x4f50fd == null && (_0x4f50fd = location[_0x2dabb4(0x2ef)]['split']('/')[_0x2dabb4(0x2db)](_0x44ae41 => _0x44ae41[_0x2dabb4(0x178)] > 0x0 && _0x44ae41[_0x2dabb4(0x13a)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x158769 = await _0x14ab72(_0x4f50fd);
                    _0x3eb4a3[_0x2dabb4(0x285)] && (_0x49f5c3 = _0x158769[_0x2dabb4(0x37d)][0x0]['taken_at']);
                    _0x158769[_0x2dabb4(0x2a7)] === 'ok' ? _0x118658(_0x158769['items'][0x0][_0x2dabb4(0x13f)][_0x2dabb4(0x1b2)][0x0]['url'], _0x23de1a, _0x2dabb4(0x31b), _0x49f5c3, _0x2dabb4(0x114), _0x4f50fd) : (_0x3eb4a3[_0x2dabb4(0x36d)] ? (_0x33999c[_0x2dabb4(0x2e3)] = !![], _0x321b88(!![], _0x487c02)) : alert(_0x2dabb4(0x217) + _0x158769[_0x2dabb4(0x21e)]), _0x194c21(_0x158769));
                    _0x52853b(![]);
                    return;
                }
                if (_0x33999c[_0x2dabb4(0x370)]['stories'][_0x23de1a] && !_0x487c02) {
                    _0x194c21(_0x2dabb4(0x2f8), _0x23de1a), _0x33999c[_0x2dabb4(0x370)][_0x2dabb4(0x31b)][_0x23de1a][_0x2dabb4(0x198)][_0x2dabb4(0x2e5)][0x0][_0x2dabb4(0x37d)]['forEach'](_0x5e4b57 => {
                        const _0x4e4554 = _0x2dabb4;
                        _0x5e4b57['id'] == _0xd5b9b9 && (_0x12a985 = _0x5e4b57[_0x4e4554(0x35d)], _0x3eb4a3['RENAME_PUBLISH_DATE'] && (_0x49f5c3 = _0x5e4b57[_0x4e4554(0x36b)], _0x4f50fd = _0x5e4b57['id']));
                    });
                    if (_0x12a985['length'] == 0x0) {
                        _0x194c21(_0x2dabb4(0x1ab), _0x23de1a), _0x321b88(!![], !![]);
                        return;
                    }
                } else {
                    let _0x4e6e87 = await _0x5bddce(_0x23de1a), _0x1e2e1d = _0x4e6e87['user']['pk'], _0x53b393 = await _0x12f1a8(_0x1e2e1d);
                    _0x53b393[_0x2dabb4(0x198)][_0x2dabb4(0x2e5)][0x0][_0x2dabb4(0x37d)][_0x2dabb4(0x2ad)](_0x152cd1 => {
                        _0x152cd1['id'] == _0xd5b9b9 && (_0x12a985 = _0x152cd1['display_url'], _0x3eb4a3['RENAME_PUBLISH_DATE'] && (_0x49f5c3 = _0x152cd1['taken_at_timestamp'], _0x4f50fd = _0x152cd1['id']));
                    });
                    if (_0x12a985[_0x2dabb4(0x178)] == 0x0) {
                        let _0x536364 = _0x7213ee(_0x23de1a);
                        _0x536364['each'](function (_0x42f780) {
                            const _0x2c4014 = _0x2dabb4;
                            _0x12d31d(this)[_0x2c4014(0x34e)]()[_0x2c4014(0x178)] > 0x0 && (_0x12a985 = _0x53b393[_0x2c4014(0x198)][_0x2c4014(0x2e5)][0x0]['items'][_0x42f780][_0x2c4014(0x35d)], _0x3eb4a3[_0x2c4014(0x285)] && (_0x49f5c3 = _0x53b393[_0x2c4014(0x198)][_0x2c4014(0x2e5)][0x0][_0x2c4014(0x37d)][_0x42f780][_0x2c4014(0x36b)], _0x4f50fd = _0x53b393[_0x2c4014(0x198)][_0x2c4014(0x2e5)][0x0][_0x2c4014(0x37d)][_0x42f780]['id']));
                        }), _0x12a985['length'] == 0x0 && (_0x12d31d(_0x2dabb4(0x259))[_0x2dabb4(0x31f)](function (_0x365fd) {
                            const _0x13546c = _0x2dabb4;
                            _0x12d31d(this)[_0x13546c(0x374)](_0x13546c(0x185)) && (_0x12d31d(this)[_0x13546c(0x34e)]()[_0x13546c(0x178)] > 0x0 && (_0x12a985 = _0x53b393[_0x13546c(0x198)][_0x13546c(0x2e5)][0x0]['items'][_0x365fd]['display_url'], _0x3eb4a3['RENAME_PUBLISH_DATE'] && (_0x49f5c3 = _0x53b393[_0x13546c(0x198)]['reels_media'][0x0]['items'][_0x365fd][_0x13546c(0x36b)], _0x4f50fd = _0x53b393[_0x13546c(0x198)][_0x13546c(0x2e5)][0x0][_0x13546c(0x37d)][_0x365fd]['id'])));
                        }), _0x12d31d('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x2dabb4(0x31f)](function (_0x57975a) {
                            const _0x4eb4dc = _0x2dabb4;
                            _0x12d31d(this)[_0x4eb4dc(0x34e)]()[_0x4eb4dc(0x374)](_0x4eb4dc(0x375)) && (_0x12a985 = _0x53b393[_0x4eb4dc(0x198)][_0x4eb4dc(0x2e5)][0x0][_0x4eb4dc(0x37d)][_0x57975a][_0x4eb4dc(0x35d)], _0x3eb4a3[_0x4eb4dc(0x285)] && (_0x49f5c3 = _0x53b393[_0x4eb4dc(0x198)][_0x4eb4dc(0x2e5)][0x0][_0x4eb4dc(0x37d)][_0x57975a][_0x4eb4dc(0x36b)], _0x4f50fd = _0x53b393[_0x4eb4dc(0x198)][_0x4eb4dc(0x2e5)][0x0][_0x4eb4dc(0x37d)][_0x57975a]['id']));
                        }));
                    }
                }
                _0x118658(_0x12a985, _0x23de1a, _0x2dabb4(0x155), _0x49f5c3, _0x288453, _0x4f50fd), _0x33999c[_0x2dabb4(0x2e3)] = ![], _0x52853b(![]);
            } else {
                if (_0x12d31d(_0x2dabb4(0x25b))[_0x2dabb4(0x293)]()['find'](_0x2dabb4(0x181))[_0x2dabb4(0x178)]) {
                    let _0x13e94f = null;
                    _0x12d31d(_0x2dabb4(0x2da))[_0x2dabb4(0x178)] > 0x0 ? _0x13e94f = _0x12d31d(_0x2dabb4(0x1dd)) : (_0x13e94f = _0x12d31d(_0x2dabb4(0x290)), _0x13e94f[_0x2dabb4(0x247)](_0x2dabb4(0x1a3), 'relative'));
                    _0x13e94f[_0x2dabb4(0x178)] === 0x0 && (_0x13e94f = _0x12d31d(_0x2dabb4(0x2ab))[_0x2dabb4(0x293)]()[_0x2dabb4(0x293)]()[_0x2dabb4(0x293)]()['find'](_0x2dabb4(0x1b9)), _0x13e94f[_0x2dabb4(0x247)](_0x2dabb4(0x1a3), 'relative'));
                    _0x13e94f[_0x2dabb4(0x178)] === 0x0 && (_0x13e94f = _0x12d31d(_0x2dabb4(0x2ab))['parent']()['parent']()['parent']()[_0x2dabb4(0x1bc)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x13e94f[_0x2dabb4(0x247)](_0x2dabb4(0x1a3), _0x2dabb4(0x256)));
                    if (_0x13e94f[_0x2dabb4(0x178)] === 0x0) {
                        let _0x4fbcc7 = _0x12d31d(_0x2dabb4(0x11e)), _0x51945b = 0x0;
                        _0x4fbcc7[_0x2dabb4(0x31f)](function () {
                            const _0x1b965a = _0x2dabb4;
                            _0x12d31d(this)['width']() > _0x51945b && (_0x51945b = _0x12d31d(this)[_0x1b965a(0x1e6)](), _0x13e94f = _0x12d31d(this)[_0x1b965a(0x34e)](_0x1b965a(0x1cf))[_0x1b965a(0x36e)]());
                        });
                    }
                    _0x13e94f != null && (_0x13e94f[_0x2dabb4(0x36e)]()[_0x2dabb4(0x247)](_0x2dabb4(0x1a3), _0x2dabb4(0x256)), _0x13e94f[_0x2dabb4(0x36e)]()['append'](_0x2dabb4(0x201) + _0x12a57f('THUMBNAIL_INTRO') + _0x2dabb4(0x22d) + _0x584745['THUMBNAIL'] + _0x2dabb4(0x219)));
                }
            }
        }
        function _0x2d26a1(_0x30c890) {
            return new Promise((_0x3fb931, _0x1f3195) => {
                const _0x3e40e2 = a0_0xa175;
                let _0x58321a = _0x3e40e2(0x188) + _0x30c890 + _0x3e40e2(0x273);
                GM_xmlhttpRequest({
                    'method': _0x3e40e2(0x146),
                    'url': _0x58321a,
                    'onload': function (_0x5770db) {
                        const _0x1e1557 = _0x3e40e2;
                        try {
                            let _0x3bc621 = JSON[_0x1e1557(0x163)](_0x5770db[_0x1e1557(0x1c1)]);
                            _0x3fb931(_0x3bc621);
                        } catch (_0x47d79e) {
                            _0x194c21(_0x1e1557(0x227), _0x1e1557(0x2b8), _0x47d79e['message']), _0x1f3195(_0x47d79e);
                        }
                    },
                    'onerror': function (_0x1de321) {
                        _0x194c21('getHighlightStories()', 'reject', _0x1de321), _0x1f3195(_0x1de321);
                    }
                });
            });
        }
        function _0x12f1a8(_0x3a2b03) {
            return new Promise((_0x36a7e5, _0x16e7b8) => {
                const _0x5b576a = a0_0xa175;
                let _0x4a22f1 = _0x5b576a(0x309) + _0x3a2b03 + _0x5b576a(0x273);
                GM_xmlhttpRequest({
                    'method': _0x5b576a(0x146),
                    'url': _0x4a22f1,
                    'onload': function (_0x17b06c) {
                        const _0x37d5ef = _0x5b576a;
                        try {
                            let _0x9bccdd = JSON[_0x37d5ef(0x163)](_0x17b06c[_0x37d5ef(0x1c1)]);
                            _0x194c21(_0x37d5ef(0x2fe), _0x9bccdd), _0x36a7e5(_0x9bccdd);
                        } catch (_0x475d01) {
                            _0x194c21(_0x37d5ef(0x2fe), _0x37d5ef(0x2b8), _0x475d01[_0x37d5ef(0x21e)]), _0x16e7b8(_0x475d01);
                        }
                    },
                    'onerror': function (_0x4b1675) {
                        const _0x1e1cae = _0x5b576a;
                        _0x194c21('getStories()', _0x1e1cae(0x2b8), _0x4b1675), _0x16e7b8(_0x4b1675);
                    }
                });
            });
        }
        function _0x5bddce(_0xeeea18) {
            return new Promise((_0x3704d7, _0x4e2851) => {
                const _0x2e0699 = a0_0xa175;
                let _0xf38461 = 'https://www.instagram.com/web/search/topsearch/?query=' + _0xeeea18;
                GM_xmlhttpRequest({
                    'method': _0x2e0699(0x146),
                    'url': _0xf38461,
                    'onload': function (_0x14a3be) {
                        const _0x4d42df = _0x2e0699;
                        let _0x5ff6a2 = JSON[_0x4d42df(0x163)](_0x14a3be[_0x4d42df(0x1c1)]), _0x41be7f = null;
                        _0x5ff6a2[_0x4d42df(0x13b)][_0x4d42df(0x2ad)](_0x54a602 => {
                            const _0x4b297c = _0x4d42df;
                            _0x54a602[_0x4b297c(0x147)][_0x4b297c(0x2a3)]?.[_0x4b297c(0x38b)]() === _0xeeea18?.[_0x4b297c(0x38b)]() && (_0x41be7f = _0x54a602);
                        }), _0x41be7f != null ? (_0x194c21(_0x4d42df(0x24d), _0x41be7f), _0x3704d7(_0x41be7f)) : _0x2e129e(_0xeeea18)[_0x4d42df(0x121)](_0x572964 => {
                            _0x3704d7(_0x572964);
                        })[_0x4d42df(0x1a2)](_0x315475 => {
                            alert('Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()');
                        });
                    },
                    'onerror': function (_0x1a8853) {
                        const _0x3d55d4 = _0x2e0699;
                        _0x194c21(_0x3d55d4(0x24d), _0x3d55d4(0x2b8), _0x1a8853), _0x4e2851(_0x1a8853);
                    }
                });
            });
        }
        function _0x2e129e(_0x2c577e) {
            return new Promise((_0x41dd30, _0x3c7232) => {
                const _0x44175c = a0_0xa175;
                let _0x3191cd = _0x44175c(0x2cd) + _0x2c577e;
                GM_xmlhttpRequest({
                    'method': _0x44175c(0x146),
                    'url': _0x3191cd,
                    'headers': { 'X-IG-App-ID': _0x204822() },
                    'onload': function (_0x29f270) {
                        const _0x399ffc = _0x44175c;
                        try {
                            let _0x29c304 = JSON[_0x399ffc(0x163)](_0x29f270[_0x399ffc(0x1c1)]), _0x2faf71 = _0x29c304?.['data']?.[_0x399ffc(0x147)];
                            if (_0x2faf71 != null) {
                                let _0x2d89d2 = _0x29c304?.[_0x399ffc(0x198)];
                                _0x2d89d2[_0x399ffc(0x147)]['pk'] = _0x2d89d2[_0x399ffc(0x147)]['id'], _0x194c21(_0x399ffc(0x39e), _0x29c304), _0x41dd30(_0x2d89d2);
                            } else
                                _0x194c21('getUserIdWithAgent()', _0x399ffc(0x2b8), 'undefined'), _0x3c7232(_0x399ffc(0x1db));
                        } catch (_0x314407) {
                            _0x194c21('getUserIdWithAgent()', _0x399ffc(0x2b8), _0x314407['message']), _0x3c7232(_0x314407);
                        }
                    },
                    'onerror': function (_0x431555) {
                        const _0x2e6974 = _0x44175c;
                        _0x194c21('getUserIdWithAgent()', _0x2e6974(0x2b8), _0x431555), _0x3c7232(_0x431555);
                    }
                });
            });
        }
        function _0x1c242b(_0x421ec7) {
            return new Promise((_0x54271e, _0x2abdec) => {
                const _0x24abcf = a0_0xa175;
                let _0x372c53 = _0x24abcf(0x2af) + _0x421ec7 + _0x24abcf(0x242);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x372c53,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x34e3aa) {
                        const _0xbe1e5c = _0x24abcf;
                        try {
                            let _0x29e485 = JSON[_0xbe1e5c(0x163)](_0x34e3aa['response']);
                            _0x29e485[_0xbe1e5c(0x2a7)] !== 'ok' ? (_0x194c21('getUserHighSizeProfile()', _0xbe1e5c(0x2b8), _0x29e485), _0x2abdec(_0xbe1e5c(0x1c5))) : (_0x194c21(_0xbe1e5c(0x295), _0x29e485), _0x54271e(_0x29e485[_0xbe1e5c(0x147)]['hd_profile_pic_url_info']?.['url']));
                        } catch (_0x449123) {
                            _0x194c21(_0xbe1e5c(0x295), _0xbe1e5c(0x2b8), _0x449123), _0x2abdec(_0x449123);
                        }
                    },
                    'onerror': function (_0x485eaa) {
                        const _0x2d266d = _0x24abcf;
                        _0x194c21(_0x2d266d(0x295), _0x2d266d(0x2b8), _0x485eaa), _0x2abdec(_0x485eaa);
                    }
                });
            });
        }
        function _0x797003(_0x52e719) {
            return new Promise((_0x590b13, _0x138066) => {
                const _0x190f44 = a0_0xa175;
                if (!_0x52e719)
                    _0x138066(_0x190f44(0x204));
                let _0x32091b = _0x52e719, _0x4cd3b7 = _0x190f44(0x203) + _0x32091b + _0x190f44(0x235);
                GM_xmlhttpRequest({
                    'method': _0x190f44(0x146),
                    'url': _0x4cd3b7,
                    'onload': function (_0x43bb1d) {
                        const _0x23f6c4 = _0x190f44;
                        try {
                            let _0x249645 = JSON['parse'](_0x43bb1d['response']);
                            _0x194c21(_0x23f6c4(0x287), _0x249645), _0x590b13(_0x249645[_0x23f6c4(0x198)][_0x23f6c4(0x14d)][_0x23f6c4(0x25e)]['username']);
                        } catch (_0x197171) {
                            _0x194c21(_0x23f6c4(0x287), 'reject', _0x197171['message']), _0x138066(_0x197171);
                        }
                    },
                    'onerror': function (_0x5cdf7b) {
                        const _0x264a34 = _0x190f44;
                        _0x194c21(_0x264a34(0x287), _0x264a34(0x2b8), _0x5cdf7b), _0x138066(_0x5cdf7b);
                    }
                });
            });
        }
        function _0x13f592(_0x3c48d0) {
            return new Promise((_0x1b63f8, _0x20cfcf) => {
                const _0x55b93b = a0_0xa175;
                if (!_0x3c48d0)
                    _0x20cfcf(_0x55b93b(0x204));
                let _0x575459 = _0x3c48d0, _0x581b5f = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x575459 + _0x55b93b(0x235);
                GM_xmlhttpRequest({
                    'method': _0x55b93b(0x146),
                    'url': _0x581b5f,
                    'headers': { 'User-Agent': _0x55b93b(0x226) },
                    'onload': function (_0x4163d8) {
                        const _0x4f7d15 = _0x55b93b;
                        try {
                            let _0x2c77fd = JSON[_0x4f7d15(0x163)](_0x4163d8['response']);
                            _0x194c21(_0x2c77fd), _0x2c77fd[_0x4f7d15(0x2a7)] === _0x4f7d15(0x23d) ? (_0x194c21('Request\x20with:', _0x4f7d15(0x1c6), _0x575459), _0x43e42c(_0x575459)[_0x4f7d15(0x121)](_0x5dee0b => {
                                const _0x2d3b30 = _0x4f7d15;
                                _0x1b63f8({
                                    'type': _0x2d3b30(0x19b),
                                    'data': _0x5dee0b[_0x2d3b30(0x39a)][_0x2d3b30(0x37d)][0x0]
                                });
                            })['catch'](_0x56f740 => {
                                _0x20cfcf(_0x56f740);
                            })) : _0x1b63f8({
                                'type': _0x4f7d15(0x1c0),
                                'data': _0x2c77fd[_0x4f7d15(0x198)]
                            });
                        } catch (_0x75d2f1) {
                            _0x194c21(_0x4f7d15(0x1e7), 'reject', _0x75d2f1[_0x4f7d15(0x21e)]), _0x20cfcf(_0x75d2f1);
                        }
                    },
                    'onerror': function (_0x3516d6) {
                        const _0x3057bb = _0x55b93b;
                        _0x194c21(_0x3057bb(0x1e7), _0x3057bb(0x2b8), _0x3516d6), _0x20cfcf(_0x3516d6);
                    }
                });
            });
        }
        function _0x43e42c(_0x3dcf75) {
            return new Promise((_0x3a6bc1, _0x676e7) => {
                const _0xce772a = a0_0xa175;
                if (!_0x3dcf75)
                    _0x676e7(_0xce772a(0x204));
                let _0x19ba02 = _0x3dcf75, _0x55fca1 = _0xce772a(0x35b) + _0x19ba02 + _0xce772a(0x1d4);
                GM_xmlhttpRequest({
                    'method': _0xce772a(0x146),
                    'url': _0x55fca1,
                    'headers': {
                        'User-Agent': _0xce772a(0x226),
                        'X-IG-App-ID': _0x204822()
                    },
                    'onload': function (_0x14e8ff) {
                        const _0x262f49 = _0xce772a;
                        try {
                            let _0x564b26 = JSON['parse'](_0x14e8ff['response']);
                            _0x194c21(_0x564b26), _0x564b26[_0x262f49(0x2a7)] === 'fail' ? (alert('getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a' + _0x564b26[_0x262f49(0x21e)] + ':\x20' + _0x564b26[_0x262f49(0x12b)]), _0x194c21(_0x262f49(0x366) + _0x564b26[_0x262f49(0x21e)] + ':\x20' + _0x564b26[_0x262f49(0x12b)]), _0x676e7(_0x14e8ff)) : (_0x194c21('getBlobMediaWithQueryID()', _0x564b26[_0x262f49(0x198)]), _0x3a6bc1(_0x564b26[_0x262f49(0x198)]));
                        } catch (_0x5ba4ef) {
                            _0x194c21(_0x262f49(0x170), _0x262f49(0x2b8), _0x5ba4ef[_0x262f49(0x21e)]), _0x676e7(_0x5ba4ef);
                        }
                    },
                    'onerror': function (_0x3d1a3c) {
                        const _0x5bf501 = _0xce772a;
                        _0x194c21(_0x5bf501(0x170), _0x5bf501(0x2b8), _0x3d1a3c), _0x676e7(_0x3d1a3c);
                    }
                });
            });
        }
        function _0x14ab72(_0x524d5c) {
            return new Promise((_0x102b73, _0xe60f6b) => {
                const _0x506614 = a0_0xa175;
                let _0xaa8fcb = _0x506614(0x36a) + _0x524d5c + _0x506614(0x242);
                if (_0x524d5c == null) {
                    alert(_0x506614(0x37a)), _0x194c21(_0x506614(0x2c0), 'reject', _0x506614(0x37a)), _0x52853b(![]), _0xe60f6b(-0x1);
                    return;
                }
                if (_0x204822() == null) {
                    alert(_0x506614(0x1cd)), _0x194c21('getMediaInfo()', 'reject', _0x506614(0x1cd)), _0x52853b(![]), _0xe60f6b(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x506614(0x146),
                    'url': _0xaa8fcb,
                    'headers': {
                        'User-Agent': window[_0x506614(0x323)][_0x506614(0x28b)],
                        'Accept': _0x506614(0x1a9),
                        'X-IG-App-ID': _0x204822()
                    },
                    'onload': function (_0x33a59a) {
                        const _0x43ed2c = _0x506614;
                        if (_0x33a59a['finalUrl'] == _0xaa8fcb) {
                            let _0x1e5ecd = JSON[_0x43ed2c(0x163)](_0x33a59a[_0x43ed2c(0x1c1)]);
                            _0x194c21('getMediaInfo()', _0x1e5ecd), _0x102b73(_0x1e5ecd);
                        } else {
                            let _0x4258ce = new URL(_0x33a59a['finalUrl']);
                            _0x4258ce[_0x43ed2c(0x2ef)][_0x43ed2c(0x386)](_0x43ed2c(0x199)) ? (_0x194c21(_0x43ed2c(0x2c0), _0x43ed2c(0x2b8), _0x43ed2c(0x119)), alert(_0x43ed2c(0x119))) : (_0x194c21(_0x43ed2c(0x2c0), _0x43ed2c(0x2b8), 'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x33a59a[_0x43ed2c(0x11f)] + '\x22'), alert(_0x43ed2c(0x28a) + _0x33a59a[_0x43ed2c(0x11f)] + '\x22')), _0x52853b(![]), _0xe60f6b(-0x1);
                        }
                    },
                    'onerror': function (_0x2d0c81) {
                        const _0x30819e = _0x506614;
                        _0x194c21(_0x30819e(0x2c0), _0x30819e(0x2b8), _0x2d0c81), _0x102b73(_0x2d0c81);
                    }
                });
            });
        }
        function _0x23a596(_0x4260eb) {
            const _0x2d7e00 = _0x3d7dc7;
            let _0x2624a9 = new URL(_0x4260eb), _0x557f83 = _0x2624a9?.[_0x2d7e00(0x363)]?.['get'](_0x2d7e00(0x267))?.['split']('.')['at'](0x0);
            return _0x557f83 ? atob(_0x557f83) : null;
        }
        function _0x204822() {
            const _0x40038d = _0x3d7dc7;
            let _0xba4165 = null;
            return _0x12d31d(_0x40038d(0x1fa))['each'](function () {
                const _0x1fabb6 = _0x40038d, _0x594bec = /"APP_ID":"([0-9]+)"/ig, _0x4fdbe4 = _0x12d31d(this)[_0x1fabb6(0x396)]()['match'](_0x594bec);
                _0x4fdbe4 != null && _0xba4165 == null && (_0xba4165 = [..._0x12d31d(this)['text']()['matchAll'](_0x594bec)]);
            }), _0xba4165 ? _0xba4165['at'](0x0)['at'](-0x1) : null;
        }
        function _0x52853b(_0xd2d91c) {
            const _0x568231 = _0x3d7dc7;
            _0xd2d91c ? (_0x12d31d(_0x568231(0x16c))[_0x568231(0x346)](_0x568231(0x330)), _0x12d31d(_0x568231(0x16c))[_0x568231(0x247)]('z-index', _0x568231(0x264))) : (_0x12d31d('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x568231(0x1b1)](_0x568231(0x330)), _0x12d31d('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')['css'](_0x568231(0x2bd), ''));
        }
        function _0x7213ee(_0x21e85a) {
            const _0x3e3e1b = _0x3d7dc7;
            let _0x40afc5 = _0x12d31d(_0x3e3e1b(0x1de) + _0x21e85a + _0x3e3e1b(0x189))[_0x3e3e1b(0x2db)](function () {
                const _0x50776e = _0x3e3e1b;
                return _0x12d31d(this)['children']()['length'] === 0x0 && _0x12d31d(this)[_0x50776e(0x1bc)](_0x50776e(0x321))[_0x50776e(0x178)] === 0x0 && _0x12d31d(this)[_0x50776e(0x396)]()?.['toLowerCase']() === _0x21e85a?.['toLowerCase']();
            })[_0x3e3e1b(0x1b4)]('div:not([class]):not([style])')['filter'](function () {
                const _0x3c6a13 = _0x3e3e1b;
                return _0x12d31d(this)[_0x3c6a13(0x396)]()?.[_0x3c6a13(0x38b)]() !== _0x21e85a?.[_0x3c6a13(0x38b)]();
            })['filter'](function () {
                const _0x4dd453 = _0x3e3e1b;
                return _0x12d31d(this)[_0x4dd453(0x34e)]()['length'] > 0x1;
            })[_0x3e3e1b(0x36e)]();
            return _0x40afc5[_0x3e3e1b(0x178)] === 0x0 && (_0x40afc5 = _0x12d31d('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x21e85a + '\x22]')[_0x3e3e1b(0x2db)](function () {
                const _0x57c026 = _0x3e3e1b;
                return _0x12d31d(this)['find'](_0x57c026(0x2e8))['length'] > 0x0;
            })['parents'](_0x3e3e1b(0x2f9))[_0x3e3e1b(0x2db)](function () {
                const _0x40ca03 = _0x3e3e1b;
                return _0x12d31d(this)[_0x40ca03(0x396)]()?.[_0x40ca03(0x38b)]() !== _0x21e85a?.[_0x40ca03(0x38b)]();
            })[_0x3e3e1b(0x2db)](function () {
                const _0xa5c8dd = _0x3e3e1b;
                return _0x12d31d(this)[_0xa5c8dd(0x34e)]()[_0xa5c8dd(0x178)] > 0x1;
            })['first']()), _0x40afc5['children']()[_0x3e3e1b(0x2db)](function () {
                return _0x12d31d(this)['height']() < 0xa;
            })[_0x3e3e1b(0x36e)]()[_0x3e3e1b(0x34e)]();
        }
        function _0x43eb29(_0x23f9e7, _0x3c43b9) {
            const _0x228861 = _0x3d7dc7;
            _0x12d31d('.circle_wrapper')[_0x228861(0x178)] ? (_0x12d31d(_0x228861(0x191))['text'](_0x23f9e7 + '/' + _0x3c43b9), _0x23f9e7 >= _0x3c43b9 && _0x12d31d(_0x228861(0x30f))[_0x228861(0x1d2)](0xfa, function () {
                const _0x2c0cbb = _0x228861;
                _0x12d31d(this)[_0x2c0cbb(0x186)]();
            })) : _0x12d31d('body')[_0x228861(0x2e9)](_0x228861(0x33a) + _0x23f9e7 + '/' + _0x3c43b9 + _0x228861(0x262));
        }
        function _0x5be558(_0x4db7b9, _0x267cfa) {
            const _0x28e6f5 = _0x3d7dc7;
            let _0x4df37e = _0x4db7b9 ? _0x28e6f5(0x130) : '';
            _0x12d31d(_0x28e6f5(0x125))[_0x28e6f5(0x2e9)]('<div\x20class=\x22IG_POPUP_DIG\x20' + _0x4df37e + _0x28e6f5(0x31c)), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')[_0x28e6f5(0x2e9)](_0x28e6f5(0x385) + _0x12a57f(_0x28e6f5(0x22a)) + _0x28e6f5(0x286) + GM_info[_0x28e6f5(0x1eb)][_0x28e6f5(0x384)] + '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x584745['CLOSE'] + _0x28e6f5(0x26b)), _0x267cfa && (_0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')[_0x28e6f5(0x2e9)](_0x28e6f5(0x1b8)), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group')['append'](_0x28e6f5(0x15b) + _0x12a57f(_0x28e6f5(0x382)) + _0x28e6f5(0x206)), _0x12d31d(_0x28e6f5(0x2a8))[_0x28e6f5(0x2e9)](_0x28e6f5(0x160) + _0x12a57f(_0x28e6f5(0x19c)) + '</button>'), _0x12d31d(_0x28e6f5(0x12e))[_0x28e6f5(0x2e9)]('<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>' + _0x12a57f('ALL_CHECK') + _0x28e6f5(0x193)));
        }
        function _0x50ddf7(_0x239dc7) {
            const _0x17208c = _0x3d7dc7;
            _0x12d31d(_0x17208c(0x1ef))[_0x17208c(0x178)] && (_0x239dc7 ? _0x12d31d(_0x17208c(0x1ef))[_0x17208c(0x1b1)]('hidden') : _0x12d31d(_0x17208c(0x1ef))[_0x17208c(0x346)](_0x17208c(0x130)));
        }
        function _0x118658(_0x1bf18b, _0x3caf25, _0x42b6f5, _0x5f5ccf, _0x2cb1cf, _0x1374b2) {
            return new Promise(_0x41d4e8 => {
                setTimeout(() => {
                    const _0x2b153b = a0_0xa175;
                    _0x52853b(!![]), fetch(_0x1bf18b)[_0x2b153b(0x121)](_0xf38234 => {
                        const _0x3086bc = _0x2b153b;
                        return _0xf38234[_0x3086bc(0x1dc)]()[_0x3086bc(0x121)](_0x4a2110 => {
                            _0x52853b(![]), _0x2a1687(_0x1bf18b, _0x4a2110, _0x3caf25, _0x42b6f5, _0x5f5ccf, _0x2cb1cf, _0x1374b2), _0x41d4e8(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x2a1687(_0x38194d, _0x2dfd3f, _0x2cce4b, _0xc2ef3a, _0x581e32, _0x52185c, _0x4e2d07) {
            const _0x42c48c = _0x3d7dc7;
            _0x581e32 = parseInt(_0x581e32[_0x42c48c(0x32d)]()[_0x42c48c(0x233)](0xd, '0'));
            _0x3eb4a3[_0x42c48c(0x285)] && (_0x581e32 = parseInt(_0x581e32[_0x42c48c(0x32d)]()[_0x42c48c(0x233)](0xd, '0')));
            const _0x1ce835 = new Date(_0x581e32), _0x178d78 = document[_0x42c48c(0x20f)]('a'), _0x49f5c9 = new URL(_0x38194d)[_0x42c48c(0x2ef)][_0x42c48c(0x2d6)]('/')['at'](-0x1)[_0x42c48c(0x2d6)]('.')['slice'](0x0, -0x1)[_0x42c48c(0x1df)]('.'), _0x421659 = _0x1ce835['getFullYear']()[_0x42c48c(0x32d)](), _0x1c4ef6 = (_0x1ce835[_0x42c48c(0x268)]() + 0x1)[_0x42c48c(0x32d)]()[_0x42c48c(0x393)](0x2, '0'), _0x17e430 = _0x1ce835[_0x42c48c(0x25d)]()[_0x42c48c(0x32d)]()['padStart'](0x2, '0'), _0x29f30a = _0x1ce835[_0x42c48c(0x2d9)]()[_0x42c48c(0x32d)]()[_0x42c48c(0x393)](0x2, '0'), _0x5b37ab = _0x1ce835['getMinutes']()[_0x42c48c(0x32d)]()[_0x42c48c(0x393)](0x2, '0'), _0x5f5582 = _0x1ce835['getSeconds']()[_0x42c48c(0x32d)]()[_0x42c48c(0x393)](0x2, '0');
            var _0x2c1a5f = _0x33999c['fileRenameFormat'][_0x42c48c(0x161)](), _0x853081 = _0x4e2d07 ?? '', _0x527d1f = {
                    '%USERNAME%': _0x2cce4b,
                    '%SOURCE_TYPE%': _0xc2ef3a,
                    '%SHORTCODE%': _0x853081,
                    '%YEAR%': _0x421659,
                    '%2-YEAR%': _0x421659[_0x42c48c(0x213)](-0x2),
                    '%MONTH%': _0x1c4ef6,
                    '%DAY%': _0x17e430,
                    '%HOUR%': _0x29f30a,
                    '%MINUTE%': _0x5b37ab,
                    '%SECOND%': _0x5f5582,
                    '%ORIGINAL_NAME%': _0x49f5c9,
                    '%ORIGINAL_NAME_FIRST%': _0x49f5c9[_0x42c48c(0x2d6)]('_')['at'](0x0)
                };
            _0x2c1a5f = _0x2c1a5f[_0x42c48c(0x222)](/%[\w\-]+%/g, function (_0x59734d) {
                return _0x527d1f[_0x59734d] || _0x59734d;
            });
            const _0x34a788 = _0x2cce4b + '_' + _0x49f5c9 + '.' + _0x52185c;
            _0x178d78[_0x42c48c(0x1be)] = URL[_0x42c48c(0x2f2)](_0x2dfd3f), _0x178d78[_0x42c48c(0x1bb)](_0x42c48c(0x266), _0x3eb4a3['AUTO_RENAME'] ? _0x2c1a5f + '.' + _0x52185c : _0x34a788), _0x178d78[_0x42c48c(0x2a0)](), _0x178d78['remove']();
        }
        async function _0x5b8418(_0x252bee, _0x549ad1) {
            const _0x2bce23 = _0x3d7dc7;
            let _0x883b61 = new Date()[_0x2bce23(0x310)](), _0x27c095 = Math['floor'](_0x883b61 / 0x3e8), _0x4c9963 = _0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x317)) ? _0x12d31d(_0x252bee)[_0x2bce23(0x34a)]('data-username') : _0x33999c[_0x2bce23(0x2e0)];
            !_0x4c9963 && _0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x3ae)) && (_0x194c21(_0x2bce23(0x324), _0x12d31d(_0x252bee)[_0x2bce23(0x34a)]('data-href')), _0x4c9963 = await _0x797003(_0x12d31d(_0x252bee)['attr'](_0x2bce23(0x3ae)))[_0x2bce23(0x1a2)](_0x1a44b8 => {
                const _0x4f46a2 = _0x2bce23;
                _0x194c21(_0x4f46a2(0x299), _0x1a44b8[_0x4f46a2(0x21e)]);
            }), _0x4c9963 == null && (_0x4c9963 = 'NONE'));
            _0x3eb4a3[_0x2bce23(0x285)] && _0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x383)) && (_0x27c095 = parseInt(_0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x383))));
            if (_0x3eb4a3[_0x2bce23(0x2b5)]) {
                _0x52853b(!![]);
                let _0x5953c4 = await _0x14ab72(_0x12d31d(_0x252bee)[_0x2bce23(0x34a)]('media-id'));
                _0x52853b(![]);
                if (_0x5953c4['status'] === 'ok') {
                    var _0x367ae0 = null;
                    _0x5953c4[_0x2bce23(0x37d)][0x0][_0x2bce23(0x20c)] ? _0x367ae0 = _0x5953c4[_0x2bce23(0x37d)][0x0]['video_versions'][0x0][_0x2bce23(0x1d5)] : (_0x5953c4[_0x2bce23(0x37d)][0x0][_0x2bce23(0x13f)][_0x2bce23(0x1b2)][_0x2bce23(0x14b)](function (_0x570c0e, _0x1ea2cc) {
                        const _0x77ff91 = _0x2bce23;
                        let _0x2343bd = new URL(_0x570c0e[_0x77ff91(0x1d5)])[_0x77ff91(0x363)][_0x77ff91(0x15c)](_0x77ff91(0x392)), _0x9c679c = new URL(_0x1ea2cc[_0x77ff91(0x1d5)])[_0x77ff91(0x363)]['get'](_0x77ff91(0x392));
                        if (_0x2343bd && _0x9c679c) {
                            if (_0x2343bd[_0x77ff91(0x178)] > _0x9c679c[_0x77ff91(0x178)])
                                return 0x1;
                            if (_0x2343bd[_0x77ff91(0x178)] < _0x9c679c[_0x77ff91(0x178)])
                                return -0x1;
                        } else {
                            if (_0x570c0e['width'] < _0x1ea2cc[_0x77ff91(0x1e6)])
                                return 0x1;
                            if (_0x570c0e[_0x77ff91(0x1e6)] > _0x1ea2cc['width'])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x367ae0 = _0x5953c4[_0x2bce23(0x37d)][0x0][_0x2bce23(0x13f)][_0x2bce23(0x1b2)][0x0][_0x2bce23(0x1d5)]);
                    if (_0x549ad1) {
                        let _0x28d9ba = new URL(_0x367ae0);
                        _0x28d9ba['host'] = _0x2bce23(0x141), _0x5d6c82(_0x28d9ba[_0x2bce23(0x1be)]);
                    } else
                        _0x118658(_0x367ae0, _0x4c9963, _0x12d31d(_0x252bee)['attr']('data-name'), _0x27c095, _0x12d31d(_0x252bee)['attr'](_0x2bce23(0x2b6)), _0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x3ae)));
                } else {
                    if (_0x3eb4a3[_0x2bce23(0x36d)]) {
                        if (_0x549ad1) {
                            let _0x1b9bc1 = new URL(_0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x2e7)));
                            _0x1b9bc1['host'] = 'scontent.cdninstagram.com', _0x5d6c82(_0x1b9bc1[_0x2bce23(0x1be)]);
                        } else
                            _0x118658(_0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x2e7)), _0x4c9963, _0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x39b)), _0x27c095, _0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x2b6)), _0x12d31d(_0x252bee)[_0x2bce23(0x34a)]('data-path'));
                    } else
                        alert(_0x2bce23(0x217) + _0x5953c4[_0x2bce23(0x21e)]);
                    _0x194c21(_0x5953c4);
                }
            } else
                _0x118658(_0x12d31d(_0x252bee)['attr'](_0x2bce23(0x2e7)), _0x4c9963, _0x12d31d(_0x252bee)['attr']('data-name'), _0x27c095, _0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x2b6)), _0x12d31d(_0x252bee)[_0x2bce23(0x34a)](_0x2bce23(0x3ae)));
        }
        function _0x1f1c11() {
            const _0x35ab42 = _0x3d7dc7;
            for (let _0x1b7f58 of _0x33999c[_0x35ab42(0x28d)]) {
                _0x194c21(_0x35ab42(0x209), _0x1b7f58), GM_unregisterMenuCommand(_0x1b7f58);
            }
            _0x33999c[_0x35ab42(0x28d)]['push'](GM_registerMenuCommand(_0x12a57f(_0x35ab42(0x257)), () => {
                _0x3a79df();
            }, { 'accessKey': 'w' })), _0x33999c[_0x35ab42(0x28d)][_0x35ab42(0x2aa)](GM_registerMenuCommand(_0x12a57f(_0x35ab42(0x33e)), () => {
                const _0x2dd4d1 = _0x35ab42;
                GM_openInTab(_0x2dd4d1(0x144), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x33999c[_0x35ab42(0x28d)][_0x35ab42(0x2aa)](GM_registerMenuCommand(_0x12a57f(_0x35ab42(0x322)), () => {
                _0x4f2532();
            }, { 'accessKey': 'z' })), _0x33999c['registerMenuIds'][_0x35ab42(0x2aa)](GM_registerMenuCommand(_0x12a57f(_0x35ab42(0x18c)), () => {
                _0x5c4959();
            }, { 'accessKey': 'f' })), _0x33999c[_0x35ab42(0x28d)][_0x35ab42(0x2aa)](GM_registerMenuCommand(_0x12a57f(_0x35ab42(0x1e0)), () => {
                _0x175954();
            }, { 'accessKey': 'c' })), _0x33999c[_0x35ab42(0x28d)][_0x35ab42(0x2aa)](GM_registerMenuCommand(_0x12a57f(_0x35ab42(0x18d)), () => {
                _0xa96448();
            }, { 'accessKey': 'r' }));
        }
        function _0xfa466c(_0x4849e1) {
            const _0x59482a = _0x3d7dc7;
            if (!_0x3eb4a3['CHECK_UPDATE'])
                return;
            const _0x2eb354 = GM_getValue(_0x59482a(0x197)) ?? new Date()[_0x59482a(0x310)](), _0x285ad8 = new Date()[_0x59482a(0x310)]();
            _0x285ad8 > parseInt(_0x2eb354) + _0x4849e1 * 0x3e8 && (GM_setValue(_0x59482a(0x197), new Date()[_0x59482a(0x310)]()), _0x175954());
        }
        function _0x175954() {
            const _0x3cdfd8 = _0x3d7dc7, _0x3b83a5 = GM_info[_0x3cdfd8(0x1eb)]['version'], _0x3c9f1c = _0x3cdfd8(0x124);
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x3c9f1c,
                'onload': function (_0x288570) {
                    const _0x47b2ad = _0x3cdfd8, _0x5e77e3 = _0x288570[_0x47b2ad(0x397)], _0x1feca6 = _0x5e77e3[_0x47b2ad(0x13a)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x1feca6 && _0x1feca6[0x1]) {
                        const _0xa00f50 = _0x1feca6[0x1];
                        _0x194c21('Current\x20version:\x20', _0x3b83a5, '|', _0x47b2ad(0x31a), _0xa00f50), _0xa00f50 !== _0x3b83a5 && typeof this[_0x47b2ad(0x127)] === _0x47b2ad(0x1db) ? (this[_0x47b2ad(0x127)] = null, GM_notification({
                            'text': _0x12a57f(_0x47b2ad(0x33f)),
                            'title': _0x12a57f(_0x47b2ad(0x243)),
                            'tag': _0x47b2ad(0x365),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x47b2ad(0x349),
                            'onclick': _0x6c7c6b => {
                                const _0x318580 = _0x47b2ad;
                                _0x6c7c6b?.[_0x318580(0x18f)]();
                                var _0x5e7d58 = GM_openInTab(GM_info[_0x318580(0x1eb)][_0x318580(0x2b0)]);
                                setTimeout(() => {
                                    const _0x235b7a = _0x318580;
                                    _0x5e7d58[_0x235b7a(0x11c)]();
                                }, 0xfa);
                            }
                        })) : _0x194c21(_0x47b2ad(0x115));
                    } else
                        console[_0x47b2ad(0x358)](_0x47b2ad(0x148));
                }
            });
        }
        function _0x3a79df() {
            const _0x43ff62 = _0x3d7dc7;
            _0x12d31d(_0x43ff62(0x1ef))[_0x43ff62(0x186)](), _0x5be558(), _0x12d31d(_0x43ff62(0x231))[_0x43ff62(0x396)](_0x43ff62(0x334)), _0x12d31d(_0x43ff62(0x288))[_0x43ff62(0x2e9)](_0x43ff62(0x296));
            for (let _0x5766cc in _0x2ab093) {
                _0x12d31d(_0x43ff62(0x223))[_0x43ff62(0x2e9)]('<option\x20value=\x22' + _0x5766cc + '\x22\x20' + (_0x33999c['lang'] == _0x5766cc ? _0x43ff62(0x3a4) : '') + '>' + _0x2ab093[_0x5766cc] + '</option>');
            }
            for (let _0x95c0b2 in _0x3eb4a3) {
                _0x12d31d(_0x43ff62(0x159))[_0x43ff62(0x2e9)]('<label\x20class=\x22globalSettings' + (_0x1254d8[_0x43ff62(0x126)](_0x95c0b2) ? _0x43ff62(0x143) : '') + _0x43ff62(0x2ae) + _0x12a57f(_0x95c0b2 + _0x43ff62(0x37f)) + _0x43ff62(0x32b) + (_0x95c0b2 + _0x43ff62(0x37f)) + '\x22><span\x20data-ih-locale=\x22' + _0x95c0b2 + '\x22>' + _0x12a57f(_0x95c0b2) + _0x43ff62(0x28f) + _0x95c0b2 + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x3eb4a3[_0x95c0b2] === !![] ? 'checked' : '') + _0x43ff62(0x337)), _0x95c0b2 === _0x43ff62(0x304) && _0x12d31d(_0x43ff62(0x253) + _0x95c0b2 + '\x22]')[_0x43ff62(0x293)]('label')['on'](_0x43ff62(0x1c8), function (_0x84b950) {
                    const _0x252eaf = _0x43ff62;
                    _0x84b950['preventDefault'](), _0x12d31d(this)[_0x252eaf(0x1bc)]('#tempWrapper')[_0x252eaf(0x178)] === 0x0 && (_0x12d31d(this)['append'](_0x252eaf(0x35e)), _0x12d31d(this)[_0x252eaf(0x34e)](_0x252eaf(0x1f4))[_0x252eaf(0x2e9)](_0x252eaf(0x399) + _0x33999c[_0x252eaf(0x373)] + _0x252eaf(0x289)), _0x12d31d(this)['children'](_0x252eaf(0x1f4))[_0x252eaf(0x2e9)]('<input\x20value=\x22' + _0x33999c[_0x252eaf(0x373)] + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x12d31d(this)[_0x252eaf(0x34e)]('#tempWrapper')[_0x252eaf(0x2e9)]('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x584745[_0x252eaf(0x22a)] + _0x252eaf(0x219)));
                }), _0x95c0b2 === _0x43ff62(0x129) && _0x12d31d(_0x43ff62(0x253) + _0x95c0b2 + '\x22]')['parent']('label')['on']('contextmenu', function (_0x3aa273) {
                    const _0x7be85f = _0x43ff62;
                    _0x3aa273[_0x7be85f(0x18f)](), _0x12d31d(this)[_0x7be85f(0x1bc)]('#tempWrapper')[_0x7be85f(0x178)] === 0x0 && (_0x12d31d(this)[_0x7be85f(0x2e9)](_0x7be85f(0x35e)), _0x12d31d(this)['children']('#tempWrapper')[_0x7be85f(0x2e9)](_0x7be85f(0x388) + _0x33999c[_0x7be85f(0x1b7)] + _0x7be85f(0x2fc)), _0x12d31d(this)['children'](_0x7be85f(0x1f4))[_0x7be85f(0x2e9)](_0x7be85f(0x315) + _0x584745['CLOSE'] + '</div>'));
                });
            }
        }
        function _0x4f2532() {
            const _0x4031c3 = _0x3d7dc7;
            _0x12d31d(_0x4031c3(0x1ef))[_0x4031c3(0x186)](), _0x5be558(), _0x12d31d('.IG_POPUP_DIG\x20#post_info')[_0x4031c3(0x396)](_0x4031c3(0x150)), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x4031c3(0x2e9)]('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x12d31d(_0x4031c3(0x159))['append'](_0x4031c3(0x2d5)), _0x12d31d(_0x4031c3(0x24b))[_0x4031c3(0x2e9)](_0x4031c3(0x27f) + _0x12a57f(_0x4031c3(0x34d)) + _0x4031c3(0x37b)), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x4031c3(0x2e9)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>' + _0x12a57f(_0x4031c3(0x26c)) + _0x4031c3(0x37b)), _0x12d31d(_0x4031c3(0x24b))['append'](_0x4031c3(0x38a) + _0x12a57f('DOWNLOAD_DOM_TREE') + _0x4031c3(0x3a1)), _0x12d31d(_0x4031c3(0x24b))[_0x4031c3(0x2e9)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x12a57f(_0x4031c3(0x239)) + '</a></button>'), _0x12d31d(_0x4031c3(0x24b))[_0x4031c3(0x2e9)](_0x4031c3(0x151) + _0x12a57f(_0x4031c3(0x2de)) + '</a></button>');
        }
        function _0x5c4959() {
            const _0x56f207 = _0x3d7dc7;
            _0x12d31d(_0x56f207(0x1ef))['remove'](), _0x5be558(), _0x12d31d(_0x56f207(0x231))['text'](_0x56f207(0x2f1)), _0x12d31d(_0x56f207(0x159))['append'](_0x56f207(0x2d5)), _0x12d31d(_0x56f207(0x24b))[_0x56f207(0x2e9)](_0x56f207(0x265) + _0x12a57f(_0x56f207(0x15d)) + _0x56f207(0x37b)), _0x12d31d(_0x56f207(0x24b))[_0x56f207(0x2e9)](_0x56f207(0x1af) + _0x12a57f(_0x56f207(0x239)) + '</a></button>'), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x56f207(0x2e9)](_0x56f207(0x151) + _0x12a57f(_0x56f207(0x2de)) + _0x56f207(0x37b));
        }
        function _0x5d6c82(_0x252f8d) {
            const _0x5f0b23 = _0x3d7dc7;
            var _0x23bb7f = document[_0x5f0b23(0x20f)]('a');
            _0x23bb7f[_0x5f0b23(0x1be)] = _0x252f8d, _0x23bb7f[_0x5f0b23(0x314)] = '_blank', document[_0x5f0b23(0x125)][_0x5f0b23(0x38f)](_0x23bb7f), _0x23bb7f[_0x5f0b23(0x2a0)](), _0x23bb7f[_0x5f0b23(0x186)]();
        }
        function _0xa96448() {
            const _0x1cfd3c = _0x3d7dc7;
            clearInterval(_0x33999c[_0x1cfd3c(0x279)]), _0x33999c[_0x1cfd3c(0x395)]['forEach'](_0x1295a4 => {
                const _0x6df02d = _0x1cfd3c;
                _0x1295a4['trigger'][_0x6df02d(0x2ad)](_0x35729e => {
                    const _0x13a083 = _0x6df02d;
                    _0x12d31d(_0x1295a4[_0x13a083(0x1a6)])[_0x13a083(0x17f)]('click', _0x35729e);
                });
            }), _0x33999c[_0x1cfd3c(0x395)] = [], _0x12d31d(_0x1cfd3c(0x2bf))[_0x1cfd3c(0x186)](), _0x12d31d(_0x1cfd3c(0x2c8))[_0x1cfd3c(0x186)](), _0x12d31d(_0x1cfd3c(0x379))[_0x1cfd3c(0x2e6)](_0x1cfd3c(0x2cb)), _0x33999c[_0x1cfd3c(0x33d)] = ![], _0x33999c[_0x1cfd3c(0x343)] = ![], _0x33999c[_0x1cfd3c(0x1bd)] = location[_0x1cfd3c(0x1be)], _0x33999c[_0x1cfd3c(0x2eb)][_0x1cfd3c(0x1d1)](), _0x194c21(_0x1cfd3c(0x1a1));
        }
        function _0x194c21(..._0xc98be4) {
            const _0x4ce3e3 = _0x3d7dc7;
            var _0x2df945 = new Date();
            _0x33999c[_0x4ce3e3(0x390)][_0x4ce3e3(0x2aa)]({
                'time': _0x2df945[_0x4ce3e3(0x310)](),
                'content': [..._0xc98be4]
            }), _0x33999c[_0x4ce3e3(0x390)][_0x4ce3e3(0x178)] > 0x3e8 && (_0x33999c[_0x4ce3e3(0x390)] = [
                {
                    'time': _0x2df945[_0x4ce3e3(0x310)](),
                    'content': [_0x4ce3e3(0x128)]
                },
                ..._0x33999c[_0x4ce3e3(0x390)][_0x4ce3e3(0x245)](-0x3e7)
            ]), console[_0x4ce3e3(0x1f5)]('[' + _0x2df945[_0x4ce3e3(0x319)]() + ']', ..._0xc98be4);
        }
        function _0x5b92d1() {
            const _0x5a366a = _0x3d7dc7;
            for (let _0x2cf0ef in _0x3eb4a3) {
                GM_getValue(_0x2cf0ef) != null && typeof GM_getValue(_0x2cf0ef) === _0x5a366a(0x261) && (_0x3eb4a3[_0x2cf0ef] = GM_getValue(_0x2cf0ef), _0x2cf0ef === _0x5a366a(0x304) && GM_getValue(_0x2cf0ef) !== !![] && (_0x33999c[_0x5a366a(0x373)] = 0x1));
            }
        }
        function _0x57ba87(_0x4fea80, _0x25506f, _0xb15e79, _0x50a1fa = '') {
            const _0x5a5296 = _0x3d7dc7;
            _0x25506f[_0x5a5296(0x1bc)](_0x5a5296(0x154))[_0x5a5296(0x178)] === 0x0 ? (_0x25506f[_0x5a5296(0x2e9)]('<div\x20class=\x22volume_slider\x20' + _0x50a1fa + _0x5a5296(0x2fc)), _0x25506f[_0x5a5296(0x1bc)](_0x5a5296(0x154))[_0x5a5296(0x2e9)]('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x33999c[_0x5a5296(0x373)] + _0x5a5296(0x207)), _0x25506f[_0x5a5296(0x1bc)](_0x5a5296(0x263))[_0x5a5296(0x34a)]('style', _0x5a5296(0x2a1) + (_0x33999c[_0x5a5296(0x373)] * 0x64 + '%')), _0x25506f['find'](_0x5a5296(0x263))['on'](_0x5a5296(0x29b), function () {
                const _0x100d01 = _0x5a5296;
                var _0x2105b9 = _0x12d31d(this)['val']() * 0x64 + '%';
                _0x33999c['videoVolume'] = _0x12d31d(this)[_0x100d01(0x112)](), GM_setValue(_0x100d01(0x238), _0x12d31d(this)[_0x100d01(0x112)]()), _0x12d31d(this)[_0x100d01(0x34a)](_0x100d01(0x1c7), _0x100d01(0x2a1) + _0x2105b9), _0x4fea80[_0x100d01(0x31f)](function () {
                    const _0x4636ba = _0x100d01;
                    _0x194c21('(' + _0xb15e79 + ')', 'video\x20volume\x20changed\x20#slider'), this['volume'] = _0x33999c[_0x4636ba(0x373)];
                });
            }), _0x25506f[_0x5a5296(0x1bc)](_0x5a5296(0x263))['on']('mouseenter', function () {
                const _0x4db459 = _0x5a5296;
                var _0xece600 = _0x33999c[_0x4db459(0x373)] * 0x64 + '%';
                _0x12d31d(this)[_0x4db459(0x34a)](_0x4db459(0x1c7), _0x4db459(0x2a1) + _0xece600), _0x12d31d(this)[_0x4db459(0x112)](_0x33999c['videoVolume']), _0x4fea80['each'](function () {
                    const _0x1ceac3 = _0x4db459;
                    _0x194c21('(' + _0xb15e79 + ')', 'video\x20volume\x20changed\x20#slider'), this[_0x1ceac3(0x19d)] = _0x33999c[_0x1ceac3(0x373)];
                });
            }), _0x25506f[_0x5a5296(0x1bc)](_0x5a5296(0x154))['on']('click', function (_0x4ea3da) {
                const _0x5dad8b = _0x5a5296;
                _0x4ea3da['stopPropagation'](), _0x4ea3da[_0x5dad8b(0x18f)]();
            })) : _0x25506f['find']('div.volume_slider')[_0x5a5296(0x186)]();
        }
        function _0x5db81b(_0x473b58) {
            const _0x3036ab = _0x3d7dc7;
            _0x1445d4(), _0x12d31d(_0x3036ab(0x125))['append']('<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>' + _0x584745[_0x3036ab(0x22a)] + _0x3036ab(0x297));
            const _0x14135d = _0x12d31d(_0x3036ab(0x3a0)), _0x2ed84a = _0x12d31d('#iv_header'), _0x472eed = _0x12d31d(_0x3036ab(0x22b)), _0x59bd9d = _0x12d31d('#iv_image');
            _0x59bd9d[_0x3036ab(0x34a)](_0x3036ab(0x3ab), _0x473b58), _0x14135d[_0x3036ab(0x247)](_0x3036ab(0x255), _0x3036ab(0x20e));
            let _0x44fe5c = 0.75, _0x4b8aed = 0x0, _0x15f6ce = 0x0, _0x3e4c98 = ![], _0x5b1861, _0x17e076;
            _0x59bd9d['on'](_0x3036ab(0x22c), () => {
                const _0x4a6355 = _0x3036ab;
                _0x4b8aed = (window[_0x4a6355(0x16a)] - _0x59bd9d[0x0][_0x4a6355(0x1e6)]) / 0x2, _0x15f6ce = (window[_0x4a6355(0x133)] - _0x59bd9d[0x0][_0x4a6355(0x15f)]) / 0x2, _0x4892c6();
            }), _0x59bd9d['on']('dragstart\x20drop', _0x17cca9 => {
                const _0x3f9b59 = _0x3036ab;
                _0x17cca9[_0x3f9b59(0x18f)]();
            }), _0x59bd9d['on'](_0x3036ab(0x2a0), _0x4dcd8a => {
                const _0x14ff73 = _0x3036ab;
                _0x4dcd8a['preventDefault'](), _0x4dcd8a[_0x14ff73(0x1f8)]();
            }), _0x59bd9d['on']('wheel', _0x1c95ed => {
                const _0x4c74d7 = _0x3036ab;
                _0x1c95ed[_0x4c74d7(0x18f)](), _0x44fe5c += _0x1c95ed[_0x4c74d7(0x327)][_0x4c74d7(0x195)] > 0x0 ? -0.15 : 0.15, _0x44fe5c = Math['min'](Math[_0x4c74d7(0x3a6)](0.75, _0x44fe5c), 0x5), _0x4892c6();
            }), _0x59bd9d['on'](_0x3036ab(0x18e), _0x3d1be1 => {
                const _0x15d1a9 = _0x3036ab;
                _0x3e4c98 = !![], _0x5b1861 = _0x3d1be1[_0x15d1a9(0x376)] - _0x4b8aed, _0x17e076 = _0x3d1be1[_0x15d1a9(0x24f)] - _0x15f6ce, _0x59bd9d['css'](_0x15d1a9(0x35a), _0x15d1a9(0x248));
            }), _0x59bd9d['on'](_0x3036ab(0x16b), () => {
                const _0x231e0e = _0x3036ab;
                _0x3e4c98 = ![], _0x59bd9d[_0x231e0e(0x247)](_0x231e0e(0x35a), 'grab');
            }), _0x12d31d(document)['on']('mousemove.igHelper', _0x3a4d7c => {
                const _0x53374e = _0x3036ab;
                if (!_0x3e4c98)
                    return;
                _0x3a4d7c[_0x53374e(0x18f)](), _0x4b8aed = _0x3a4d7c[_0x53374e(0x376)] - _0x5b1861, _0x15f6ce = _0x3a4d7c[_0x53374e(0x24f)] - _0x17e076, _0x4892c6();
            }), _0x14135d['on'](_0x3036ab(0x2a0), () => {
                _0x1445d4();
            }), _0x472eed['on'](_0x3036ab(0x2a0), () => {
                _0x1445d4();
            }), _0x2ed84a['on'](_0x3036ab(0x2a0), _0x367d93 => {
                const _0x55dcf4 = _0x3036ab;
                _0x367d93[_0x55dcf4(0x18f)](), _0x367d93[_0x55dcf4(0x1f8)]();
            });
            function _0x4892c6() {
                const _0x18f0b5 = _0x3036ab;
                _0x59bd9d[_0x18f0b5(0x247)](_0x18f0b5(0x292), 'scale(' + _0x44fe5c + ')'), _0x59bd9d[_0x18f0b5(0x247)](_0x18f0b5(0x34f), _0x4b8aed + 'px'), _0x59bd9d[_0x18f0b5(0x247)]('top', _0x15f6ce + 'px');
            }
        }
        function _0x1445d4() {
            const _0x20862c = _0x3d7dc7;
            _0x12d31d(_0x20862c(0x3a0))[_0x20862c(0x186)](), _0x12d31d(document)[_0x20862c(0x17f)](_0x20862c(0x1f7));
        }
        function _0x2ddfbd() {
            const _0x7ced1d = _0x3d7dc7;
            var _0x1ae7a7 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x7ced1d(0x168),
                        'NOTICE_UPDATE_CONTENT': _0x7ced1d(0x260),
                        'CHECK_UPDATE': 'Checking\x20for\x20Script\x20Updates',
                        'CHECK_UPDATE_MENU': _0x7ced1d(0x1ce),
                        'CHECK_UPDATE_INTRO': _0x7ced1d(0x111),
                        'RELOAD_SCRIPT': _0x7ced1d(0x1fd),
                        'DONATE': _0x7ced1d(0x2d2),
                        'FEEDBACK': _0x7ced1d(0x224),
                        'IMAGE_VIEWER': _0x7ced1d(0x1b6),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x7ced1d(0x1d8),
                        'SELECT_AND_COPY': 'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
                        'DOWNLOAD_DOM_TREE': _0x7ced1d(0x1e4),
                        'REPORT_GITHUB': _0x7ced1d(0x1f6),
                        'REPORT_DISCORD': _0x7ced1d(0x2c2),
                        'REPORT_FORK': _0x7ced1d(0x156),
                        'DEBUG': _0x7ced1d(0x2b3),
                        'CLOSE': _0x7ced1d(0x1ee),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0x7ced1d(0x271),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x7ced1d(0x3a9),
                        'VID': _0x7ced1d(0x240),
                        'DW': _0x7ced1d(0x2c7),
                        'DW_ALL': 'Download\x20All\x20Resources',
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x7ced1d(0x2d8),
                        'LOAD_BLOB_MULTIPLE': _0x7ced1d(0x355),
                        'LOAD_BLOB_RELOAD': 'Detecting\x20Blob\x20Media,\x20reloading...',
                        'NO_CHECK_RESOURCE': _0x7ced1d(0x335),
                        'NO_VID_URL': _0x7ced1d(0x1c3),
                        'SETTING': _0x7ced1d(0x215),
                        'AUTO_RENAME': _0x7ced1d(0x307),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': 'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
                        'DISABLE_VIDEO_LOOPING': _0x7ced1d(0x1da),
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x7ced1d(0x23c),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x7ced1d(0x36c),
                        'DIRECT_DOWNLOAD_ALL': _0x7ced1d(0x252),
                        'MODIFY_VIDEO_VOLUME': _0x7ced1d(0x31d),
                        'SCROLL_BUTTON': _0x7ced1d(0x2f7),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x7ced1d(0x194),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x7ced1d(0x32c),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x7ced1d(0x1c9),
                        'AUTO_RENAME_INTRO': _0x7ced1d(0x28c),
                        'RENAME_SHORTCODE_INTRO': _0x7ced1d(0x29d),
                        'RENAME_PUBLISH_DATE_INTRO': 'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_LOCATE_DATE_INTRO': 'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x7ced1d(0x325),
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': 'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': 'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x7ced1d(0x29a),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x7ced1d(0x1ec),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x7ced1d(0x122),
                        'SCROLL_BUTTON_INTRO': _0x7ced1d(0x2f4),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': 'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x7ced1d(0x2b1),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x7ced1d(0x32e),
                        'SKIP_VIEW_STORY_CONFIRM': _0x7ced1d(0x118),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x7ced1d(0x30d)
                    }
                }, _0x216691 = Object[_0x7ced1d(0x39d)]({}, _0x1ae7a7, _0x33999c[_0x7ced1d(0x301)]), _0x3dfbac = Object[_0x7ced1d(0x329)](_0x216691)[_0x7ced1d(0x14b)]()['reduce']((_0x41fab3, _0x552a37) => {
                    return _0x41fab3[_0x552a37] = _0x216691[_0x552a37], _0x41fab3;
                }, {});
            return _0x3dfbac;
        }
        async function _0x5a47b6(_0x30d29b) {
            return new Promise((_0x5c5913, _0x45ee4f) => {
                const _0x1fd333 = a0_0xa175;
                GM_xmlhttpRequest({
                    'method': _0x1fd333(0x146),
                    'url': 'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/' + _0x30d29b + _0x1fd333(0x16f),
                    'onload': function (_0x4be24b) {
                        const _0x36504c = _0x1fd333;
                        try {
                            let _0x36cbec = JSON[_0x36504c(0x163)](_0x4be24b[_0x36504c(0x1c1)]);
                            _0x5c5913(_0x36cbec);
                        } catch (_0x5611cd) {
                            _0x45ee4f(_0x5611cd);
                        }
                    },
                    'onerror': function (_0x532024) {
                        const _0x4f9b06 = _0x1fd333;
                        _0x194c21('getTranslationText()', _0x4f9b06(0x2b8), _0x532024), _0x45ee4f(_0x532024);
                    }
                });
            });
        }
        function _0x12a57f(_0x360bed) {
            const _0x1ca8dc = _0x3d7dc7, _0x2f8e30 = _0x2ddfbd();
            return _0x2f8e30[_0x33999c[_0x1ca8dc(0x15e)]] != undefined && _0x2f8e30[_0x33999c['lang']][_0x360bed] != undefined ? _0x2f8e30[_0x33999c['lang']][_0x360bed] : _0x2f8e30[_0x1ca8dc(0x1a0)][_0x360bed];
        }
        function _0x462701() {
            const _0x112adc = _0x3d7dc7;
            _0x12d31d(_0x112adc(0x348))[_0x112adc(0x31f)](function () {
                const _0x572234 = _0x112adc;
                _0x12d31d(this)[_0x572234(0x396)](_0x12a57f(_0x12d31d(this)[_0x572234(0x34a)](_0x572234(0x12d))));
            }), _0x12d31d('[data-ih-locale-title]')['each'](function () {
                const _0x1f92ec = _0x112adc;
                _0x12d31d(this)['attr']('title', _0x12a57f(_0x12d31d(this)[_0x1f92ec(0x34a)](_0x1f92ec(0x24e))));
            });
        }
        _0x12d31d(function () {
            const _0x2c9346 = _0x3d7dc7;
            function _0x559530(_0x3c77a0) {
                const _0x4aa38d = a0_0xa175;
                var _0x1f8503 = [];
                for (var _0x1096a5 of _0x3c77a0) {
                    _0x1f8503[_0x4aa38d(0x2aa)]({
                        'tagName': _0x1096a5['tagName'],
                        'id': _0x1096a5['id'],
                        'className': _0x1096a5[_0x4aa38d(0x3a2)]
                    });
                }
                return _0x1f8503;
            }
            function _0x157a4a() {
                const _0x5c9bf2 = a0_0xa175;
                let _0x31d204 = _0x12d31d(_0x5c9bf2(0x30c))[0x0];
                var _0x61a95f = '';
                _0x33999c['GL_logger'][_0x5c9bf2(0x2ad)](_0x4ed487 => {
                    const _0x58714 = _0x5c9bf2;
                    var _0x4f8d1f = JSON[_0x58714(0x139)](_0x4ed487['content'], function (_0x499a4e, _0x4c7849) {
                        const _0x2d3462 = _0x58714;
                        if (Array[_0x2d3462(0x12f)](this)) {
                            if (typeof _0x4c7849 === _0x2d3462(0x282) && _0x4c7849 instanceof jQuery)
                                return _0x559530(_0x4c7849);
                            return _0x4c7849;
                        } else
                            return _0x4c7849;
                    }, '\x09');
                    _0x61a95f += new Date(_0x4ed487[_0x58714(0x1e2)])[_0x58714(0x319)]() + ':\x20' + _0x4f8d1f + '\x0a';
                }), _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x5c9bf2(0x396)](_0x5c9bf2(0x389) + _0x61a95f + '\x0a-----\x0a\x0aLocation:\x20' + location['pathname'] + _0x5c9bf2(0x21c) + _0x31d204[_0x5c9bf2(0x38e)]);
            }
            _0x12d31d('body')['on'](_0x2c9346(0x2a0), _0x2c9346(0x31e), function () {
                _0x157a4a();
            }), _0x12d31d(_0x2c9346(0x125))['on']('click', _0x2c9346(0x134), function () {
                const _0x57bb9b = _0x2c9346;
                _0x12d31d(_0x57bb9b(0x3a8))[_0x57bb9b(0x33c)](), document[_0x57bb9b(0x19a)](_0x57bb9b(0x135));
            }), _0x12d31d('body')['on'](_0x2c9346(0x2a0), _0x2c9346(0x300), function () {
                const _0x282c8e = _0x2c9346;
                _0x12d31d(_0x282c8e(0x3a8))[_0x282c8e(0x396)]()['length'] === 0x0 && _0x157a4a();
                var _0x1e4aec = _0x12d31d('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x282c8e(0x396)](), _0x10ed51 = document[_0x282c8e(0x20f)]('a'), _0x2c1b8e = new Blob([_0x1e4aec], { 'type': _0x282c8e(0x120) });
                _0x10ed51[_0x282c8e(0x1be)] = URL['createObjectURL'](_0x2c1b8e), _0x10ed51[_0x282c8e(0x266)] = _0x282c8e(0x182) + new Date()[_0x282c8e(0x310)]() + '.txt', document[_0x282c8e(0x125)][_0x282c8e(0x38f)](_0x10ed51), _0x10ed51[_0x282c8e(0x2a0)](), _0x10ed51[_0x282c8e(0x186)]();
            }), _0x12d31d('body')['on'](_0x2c9346(0x2a0), _0x2c9346(0x13c), function () {
                const _0x20be2e = _0x2c9346;
                _0x12d31d(this)['parent'](_0x20be2e(0x1f4))['length'] > 0x0 ? _0x12d31d(this)[_0x20be2e(0x293)](_0x20be2e(0x1f4))[_0x20be2e(0x1d2)](0xfa, function () {
                    const _0x174eda = _0x20be2e;
                    _0x12d31d(this)[_0x174eda(0x186)]();
                }) : _0x12d31d(_0x20be2e(0x1ef))[_0x20be2e(0x186)]();
            }), _0x12d31d(window)['on'](_0x2c9346(0x3ac), function (_0x350a27) {
                const _0x405f69 = _0x2c9346;
                _0x350a27[_0x405f69(0x2df)] == '81' && _0x350a27[_0x405f69(0x23e)] && (_0x12d31d(_0x405f69(0x1ef))['remove'](), _0x350a27[_0x405f69(0x18f)]()), _0x350a27[_0x405f69(0x2df)] == '87' && _0x350a27[_0x405f69(0x23e)] && (_0x3a79df(), _0x350a27[_0x405f69(0x18f)]()), _0x350a27['which'] == '90' && _0x350a27[_0x405f69(0x23e)] && (_0x4f2532(), _0x350a27[_0x405f69(0x18f)]()), _0x350a27[_0x405f69(0x2df)] == '82' && _0x350a27[_0x405f69(0x23e)] && (_0xa96448(), _0x350a27[_0x405f69(0x18f)]()), _0x350a27[_0x405f69(0x2df)] == '83' && _0x350a27[_0x405f69(0x23e)] && (location[_0x405f69(0x1be)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x12d31d(_0x405f69(0x354))[_0x405f69(0x178)] > 0x0 && _0x12d31d(_0x405f69(0x354))?.[_0x405f69(0x39f)](_0x405f69(0x2a0)), location[_0x405f69(0x1be)][_0x405f69(0x13a)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x12d31d('.IG_DWHISTORY')['length'] > 0x0 && _0x12d31d(_0x405f69(0x328))?.[_0x405f69(0x39f)](_0x405f69(0x2a0)), _0x350a27[_0x405f69(0x18f)]());
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x2d7), _0x2c9346(0x37e), function () {
                const _0x26d0e5 = _0x2c9346;
                var _0x25c6dc = _0x12d31d(this)[_0x26d0e5(0x34a)]('id');
                if (_0x25c6dc && _0x3eb4a3[_0x25c6dc] !== undefined) {
                    let _0x1f6ba0 = _0x12d31d(this)[_0x26d0e5(0x162)](_0x26d0e5(0x1ff));
                    GM_setValue(_0x25c6dc, _0x1f6ba0), _0x3eb4a3[_0x25c6dc] = _0x1f6ba0, console[_0x26d0e5(0x1f5)](_0x26d0e5(0x2f6), _0x25c6dc, _0x1f6ba0);
                }
            }), _0x12d31d(_0x2c9346(0x125))['on']('click', _0x2c9346(0x336), function (_0x866c9a) {
                const _0x1f7a42 = _0x2c9346;
                _0x12d31d(this)[_0x1f7a42(0x1bc)](_0x1f7a42(0x1f4))[_0x1f7a42(0x178)] > 0x0 && _0x866c9a['preventDefault']();
            }), _0x12d31d(_0x2c9346(0x125))['on']('change', _0x2c9346(0x1d9), function () {
                const _0x2509b4 = _0x2c9346;
                let _0x7188be = _0x12d31d(this)[_0x2509b4(0x112)]();
                _0x12d31d(this)[_0x2509b4(0x34a)](_0x2509b4(0x372)) == 'range' ? _0x12d31d(this)[_0x2509b4(0x34c)]()[_0x2509b4(0x112)](_0x7188be) : _0x12d31d(this)['prev']()[_0x2509b4(0x112)](_0x7188be), _0x7188be >= 0x0 && _0x7188be <= 0x1 && (_0x33999c[_0x2509b4(0x373)] = _0x7188be, GM_setValue(_0x2509b4(0x238), _0x7188be));
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x29b), _0x2c9346(0x1d9), function () {
                const _0x2f2ea6 = _0x2c9346;
                if (_0x12d31d(this)[_0x2f2ea6(0x34a)]('type') == 'range') {
                    let _0x4415d4 = _0x12d31d(this)[_0x2f2ea6(0x112)]();
                    _0x12d31d(this)['next']()['val'](_0x4415d4);
                } else {
                    let _0x1b75ff = _0x12d31d(this)[_0x2f2ea6(0x112)]();
                    _0x1b75ff >= 0x0 && _0x1b75ff <= 0x1 ? _0x12d31d(this)['prev']()['val'](_0x1b75ff) : _0x1b75ff < 0x0 ? _0x12d31d(this)[_0x2f2ea6(0x112)](0x0) : _0x12d31d(this)[_0x2f2ea6(0x112)](0x1);
                }
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x29b), _0x2c9346(0x272), function () {
                const _0x226804 = _0x2c9346;
                GM_setValue(_0x226804(0x2ce), _0x12d31d(this)[_0x226804(0x112)]()), _0x33999c[_0x226804(0x1b7)] = _0x12d31d(this)[_0x226804(0x112)]();
            }), _0x12d31d(_0x2c9346(0x125))['on']('click', 'a[data-needed=\x22direct\x22]', function (_0xb55d04) {
                const _0x368239 = _0x2c9346;
                _0xb55d04[_0x368239(0x18f)](), _0x5b8418(this);
            }), _0x12d31d('body')['on'](_0x2c9346(0x2a0), _0x2c9346(0x158), function () {
                const _0x17d2e1 = _0x2c9346;
                if (_0x3eb4a3['FORCE_RESOURCE_VIA_MEDIA'] && _0x3eb4a3['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                    _0x5b8418(_0x12d31d(this)['parent']()[_0x17d2e1(0x34e)]('a')[_0x17d2e1(0x36e)]()[0x0], !![]);
                else {
                    var _0x57c3fb = new URL(_0x12d31d(this)[_0x17d2e1(0x293)]()[_0x17d2e1(0x34e)]('a')['attr'](_0x17d2e1(0x2e7)));
                    _0x57c3fb['host'] = _0x17d2e1(0x141), _0x5d6c82(_0x57c3fb[_0x17d2e1(0x1be)]);
                }
            }), _0x12d31d('body')['on'](_0x2c9346(0x2a0), '.IG_POPUP_DIG_BODY\x20.videoThumbnail', function () {
                const _0x216dd2 = _0x2c9346;
                let _0x3a6a6e = new Date()[_0x216dd2(0x310)]();
                _0x3eb4a3[_0x216dd2(0x285)] && _0x12d31d(this)[_0x216dd2(0x293)]()[_0x216dd2(0x34e)]('a')['attr']('datetime') && (_0x3a6a6e = _0x12d31d(this)[_0x216dd2(0x293)]()['children']('a')[_0x216dd2(0x34a)](_0x216dd2(0x383)));
                let _0x519b6d = _0x12d31d(this)['parent']()[_0x216dd2(0x34e)]('a')[_0x216dd2(0x34a)](_0x216dd2(0x3ae)) ?? _0x12d31d(_0x216dd2(0x23b))[_0x216dd2(0x396)]();
                _0x118658(_0x12d31d(this)['parent']()[_0x216dd2(0x34e)]('a')['find']('img')[_0x216dd2(0x36e)]()[_0x216dd2(0x34a)](_0x216dd2(0x3ab)), _0x12d31d(this)[_0x216dd2(0x293)]()['children']('a')[_0x216dd2(0x34a)](_0x216dd2(0x317)), _0x216dd2(0x155), _0x3a6a6e, _0x216dd2(0x114), _0x519b6d);
            }), _0x12d31d('body')['on'](_0x2c9346(0x2a0), _0x2c9346(0x354), function () {
                _0x31d914(!![]);
            }), _0x12d31d(_0x2c9346(0x125))['on']('click', '.IG_DWSTORY_ALL', function () {
                _0x243df2();
            }), _0x12d31d('body')['on'](_0x2c9346(0x2a0), _0x2c9346(0x1ae), function (_0x56b505) {
                const _0x3ff527 = _0x2c9346;
                _0x56b505[_0x3ff527(0x18f)](), _0x31d914(!![], !![], !![]);
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x2a0), '.IG_DWSTORY_THUMBNAIL', function () {
                _0x321b88(!![]);
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x2a0), '.IG_DWPROFILE', function (_0x4f8d32) {
                const _0x20dc5c = _0x2c9346;
                _0x4f8d32[_0x20dc5c(0x1f8)](), _0x2f278e(!![]);
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x2a0), _0x2c9346(0x328), function () {
                _0x4844e0(!![]);
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x2a0), _0x2c9346(0x326), function () {
                _0x2e30f7();
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x2a0), '.IG_DWHINEWTAB', function (_0x565b14) {
                const _0x449e1a = _0x2c9346;
                _0x565b14[_0x449e1a(0x18f)](), _0x4844e0(!![], !![]);
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x2a0), _0x2c9346(0x2ca), function () {
                _0x2cc04d(!![]);
            }), _0x12d31d('body')['on'](_0x2c9346(0x2a0), '.IG_REELS', function () {
                _0x434c28(!![], !![]);
            }), _0x12d31d('body')['on'](_0x2c9346(0x2a0), '.IG_REELS_NEWTAB', function () {
                _0x434c28(!![], !![], !![]);
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x2a0), _0x2c9346(0x27c), function () {
                _0x434c28(!![], ![]);
            }), _0x12d31d(_0x2c9346(0x125))['on'](_0x2c9346(0x18e), 'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]', function (_0x3fd2c3) {
                const _0x25f03f = _0x2c9346;
                if (_0x3fd2c3[_0x25f03f(0x2df)] === 0x3 || _0x3fd2c3[_0x25f03f(0x2df)] === 0x2) {
                    if (location['href'] === 'https://www.instagram.com/' && _0x3eb4a3['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x3fd2c3[_0x25f03f(0x18f)]();
                        if (_0x12d31d(this)[_0x25f03f(0x1bc)](_0x25f03f(0x237))['length'] > 0x0) {
                            const _0x297ffd = 'https://www.instagram.com/' + _0x12d31d(this)[_0x25f03f(0x34e)](_0x25f03f(0x1cf))['last']()[_0x25f03f(0x396)]();
                            _0x3fd2c3[_0x25f03f(0x2df)] === 0x2 ? GM_openInTab(_0x297ffd) : location[_0x25f03f(0x1be)] = _0x297ffd;
                        }
                    }
                }
            }), _0x12d31d('body')['on'](_0x2c9346(0x2d7), _0x2c9346(0x1c4), function () {
                const _0x102090 = _0x2c9346;
                var _0x29b2d0 = _0x12d31d(this)[_0x102090(0x1bc)](_0x102090(0x29b))[_0x102090(0x162)](_0x102090(0x1ff));
                _0x12d31d(_0x102090(0x200))['each'](function () {
                    const _0x165e54 = _0x102090;
                    _0x12d31d(this)['prop'](_0x165e54(0x1ff), _0x29b2d0);
                });
            }), _0x12d31d(_0x2c9346(0x125))['on']('change', _0x2c9346(0x200), function () {
                const _0x195a7c = _0x2c9346;
                var _0x43b452 = _0x12d31d(_0x195a7c(0x11d))['length'], _0x492a1b = _0x12d31d(_0x195a7c(0x200))[_0x195a7c(0x178)];
                _0x12d31d(_0x195a7c(0x1c4))['find'](_0x195a7c(0x29b))[_0x195a7c(0x162)](_0x195a7c(0x1ff), _0x43b452 == _0x492a1b);
            }), _0x12d31d(_0x2c9346(0x125))['on']('click', _0x2c9346(0x208), function () {
                const _0x44cfdf = _0x2c9346;
                let _0x5dfb02 = 0x0;
                _0x12d31d(_0x44cfdf(0x1bf))[_0x44cfdf(0x31f)](function () {
                    const _0x31d987 = _0x44cfdf;
                    _0x12d31d(this)[_0x31d987(0x350)]()[_0x31d987(0x34e)]('input')[_0x31d987(0x162)]('checked') && (_0x12d31d(this)[_0x31d987(0x39f)](_0x31d987(0x2a0)), _0x5dfb02++);
                }), _0x5dfb02 == 0x0 && alert(_0x12a57f(_0x44cfdf(0x225)));
            }), _0x12d31d('body')['on']('change', _0x2c9346(0x17b), function () {
                const _0x22d539 = _0x2c9346;
                GM_setValue(_0x22d539(0x15e), _0x12d31d(this)[_0x22d539(0x112)]()), _0x33999c['lang'] = _0x12d31d(this)['val'](), _0x33999c[_0x22d539(0x15e)]?.['startsWith']('en') || _0x33999c['locale'][_0x33999c['lang']] != null ? (_0x462701(), _0x1f1c11()) : _0x5a47b6(_0x33999c[_0x22d539(0x15e)])['then'](_0x526c58 => {
                    const _0x40e7b1 = _0x22d539;
                    _0x33999c['locale'][_0x33999c[_0x40e7b1(0x15e)]] = _0x526c58, _0x462701(), _0x1f1c11();
                })['catch'](_0x11f9cb => {
                    const _0x1c5ef7 = _0x22d539;
                    console[_0x1c5ef7(0x358)](_0x1c5ef7(0x16d), _0x11f9cb);
                });
            }), _0x12d31d(_0x2c9346(0x125))['on']('click', _0x2c9346(0x340), function () {
                _0x12d31d('.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]')['each'](function () {
                    _0x12d31d(this)['trigger']('click');
                });
            });
            const _0x462dea = new MutationObserver(_0x443b8f => {
                const _0x18673b = _0x2c9346;
                for (const _0x4c6456 of _0x443b8f) {
                    _0x4c6456['type'] === _0x18673b(0x214) && _0x4c6456[_0x18673b(0x179)][_0x18673b(0x2ad)](_0x91f14a => {
                        const _0x140e5d = _0x18673b, _0x5e9815 = _0x12d31d(_0x91f14a)[_0x140e5d(0x1bc)]('video');
                        if (_0x5e9815['length'] > 0x0) {
                            _0x3eb4a3[_0x140e5d(0x304)] && _0x5e9815[_0x140e5d(0x31f)](function () {
                                const _0xc91c28 = _0x140e5d;
                                _0x12d31d(this)['on'](_0xc91c28(0x23a), function () {
                                    const _0x48ef90 = _0xc91c28;
                                    !_0x12d31d(this)['data'](_0x48ef90(0x347)) && (_0x12d31d(this)[_0x48ef90(0x34a)](_0x48ef90(0x220), !![]), this[_0x48ef90(0x19d)] = _0x33999c['videoVolume'], _0x194c21(_0x48ef90(0x3a5)));
                                });
                            });
                            if (location[_0x140e5d(0x2ef)]['match'](/^(\/stories\/)/ig)) {
                                const _0x527bce = location['pathname'][_0x140e5d(0x13a)](/^(\/stories\/highlights\/)/ig) != null, _0x5e4fdc = _0x527bce ? 'highlight' : _0x140e5d(0x192);
                                _0x5e9815[_0x140e5d(0x31f)](function () {
                                    const _0x39336b = _0x140e5d;
                                    _0x12d31d(this)['on'](_0x39336b(0x2c6), function () {
                                        const _0x37a353 = _0x39336b;
                                        if (!_0x12d31d(this)[_0x37a353(0x198)](_0x37a353(0x2ed))) {
                                            let _0x1da1a2 = _0x12d31d(this);
                                            _0x1da1a2[_0x37a353(0x1b4)]('div[style][class]')['filter'](function () {
                                                const _0x4dfc66 = _0x37a353;
                                                return _0x12d31d(this)[_0x4dfc66(0x1e6)]() == _0x1da1a2[_0x4dfc66(0x1e6)]();
                                            })[_0x37a353(0x1bc)](_0x37a353(0x3a3))[_0x37a353(0x178)] === 0x0 ? (_0x12d31d(this)['attr'](_0x37a353(0x281), !![]), _0x527bce ? _0x2cc04d(![]) : _0x321b88(![]), _0x194c21('(' + _0x5e4fdc + ')', _0x37a353(0x2b2))) : (_0x12d31d(this)[_0x37a353(0x34a)](_0x37a353(0x281), !![]), _0x194c21('(' + _0x5e4fdc + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0x32c7bc = _0x12d31d(this);
                                    if (_0x3eb4a3['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x32c7bc[_0x39336b(0x198)](_0x39336b(0x30a))) {
                                            _0x194c21('(' + _0x5e4fdc + ')', 'Added\x20video\x20html5\x20contorller\x20#modify');
                                            _0x3eb4a3['MODIFY_VIDEO_VOLUME'] && (this[_0x39336b(0x19d)] = _0x33999c['videoVolume'], _0x32c7bc['on'](_0x39336b(0x17d), function () {
                                                const _0x593924 = _0x39336b;
                                                this[_0x593924(0x19d)] = _0x33999c[_0x593924(0x373)];
                                            }));
                                            let _0x1bba09 = _0x32c7bc[_0x39336b(0x1b4)](_0x39336b(0x1cf))[_0x39336b(0x2db)](function () {
                                                    const _0x1d3dc2 = _0x39336b;
                                                    return _0x12d31d(this)[_0x1d3dc2(0x34a)]('class') == null && _0x12d31d(this)['attr'](_0x1d3dc2(0x1c7)) == null;
                                                })['first'](), _0x1c916d = _0x1bba09[_0x39336b(0x34c)]();
                                            _0x1c916d[_0x39336b(0x341)]();
                                            let _0x5c4472 = _0x1bba09[_0x39336b(0x1bc)]('div[class][role=\x22button\x22]');
                                            _0x5c4472[_0x39336b(0x341)]();
                                            const _0x3b1c77 = function (_0x4b8232) {
                                                const _0x106aec = _0x39336b;
                                                _0x4b8232[_0x106aec(0x18f)](), _0x32c7bc[_0x106aec(0x247)](_0x106aec(0x2bd), '2'), _0x32c7bc[_0x106aec(0x34a)]('controls', !![]), _0x5c4472[_0x106aec(0x341)](), _0x1c916d[_0x106aec(0x341)](), _0x57ba87(_0x32c7bc, _0x32c7bc[_0x106aec(0x1b4)](_0x106aec(0x280))[_0x106aec(0x2db)](function () {
                                                    const _0x1ca840 = _0x106aec;
                                                    return _0x12d31d(this)[_0x1ca840(0x1e6)]() == _0x32c7bc['width']();
                                                })[_0x106aec(0x36e)](), _0x5e4fdc, _0x106aec(0x21b));
                                            };
                                            _0x32c7bc[_0x39336b(0x293)]()[_0x39336b(0x1bc)](_0x39336b(0x172))['on'](_0x39336b(0x1c8), _0x3b1c77), _0x5c4472['on'](_0x39336b(0x1c8), _0x3b1c77), _0x1c916d['on'](_0x39336b(0x1c8), _0x3b1c77), _0x32c7bc['on']('contextmenu', function (_0x51cc0b) {
                                                const _0x733650 = _0x39336b;
                                                _0x51cc0b[_0x733650(0x18f)](), _0x32c7bc[_0x733650(0x247)](_0x733650(0x2bd), '-1'), _0x32c7bc[_0x733650(0x2e6)](_0x733650(0x30a)), _0x1c916d[_0x733650(0x180)](), _0x5c4472[_0x733650(0x180)](), _0x57ba87(_0x32c7bc, _0x32c7bc[_0x733650(0x1b4)]('div[style][class]')['filter'](function () {
                                                    const _0x3e3f41 = _0x733650;
                                                    return _0x12d31d(this)[_0x3e3f41(0x1e6)]() == _0x32c7bc[_0x3e3f41(0x1e6)]();
                                                })[_0x733650(0x36e)](), _0x5e4fdc, _0x733650(0x21b));
                                            }), _0x32c7bc['on'](_0x39336b(0x251), function () {
                                                const _0x3600e9 = _0x39336b;
                                                let _0x531627 = _0x1bba09[_0x3600e9(0x293)]()[_0x3600e9(0x1bc)](_0x3600e9(0x11a))['parents'](_0x3600e9(0x3aa))[_0x3600e9(0x36e)]();
                                                var _0x126350 = _0x531627[_0x3600e9(0x1bc)](_0x3600e9(0x176))[_0x3600e9(0x178)] === 0x0;
                                                this[_0x3600e9(0x283)] != _0x126350 && (this[_0x3600e9(0x19d)] = _0x33999c[_0x3600e9(0x373)], _0x531627?.[_0x3600e9(0x39f)](_0x3600e9(0x2a0))), _0x12d31d(this)['attr']('data-completed') && (_0x33999c[_0x3600e9(0x373)] = this['volume'], GM_setValue('G_VIDEO_VOLUME', this[_0x3600e9(0x19d)])), this[_0x3600e9(0x19d)] == _0x33999c[_0x3600e9(0x373)] && _0x12d31d(this)[_0x3600e9(0x34a)]('data-completed', !![]);
                                            }), _0x32c7bc[_0x39336b(0x247)]('position', _0x39336b(0x2e2)), _0x32c7bc['css']('z-index', '2'), _0x32c7bc['attr'](_0x39336b(0x1ba), !![]), _0x32c7bc[_0x39336b(0x34a)]('controls', !![]);
                                        }
                                    } else
                                        _0x57ba87(_0x32c7bc, _0x32c7bc[_0x39336b(0x1b4)]('div[style][class]')[_0x39336b(0x2db)](function () {
                                            const _0x5a3aba = _0x39336b;
                                            return _0x12d31d(this)[_0x5a3aba(0x1e6)]() == _0x32c7bc[_0x5a3aba(0x1e6)]();
                                        })[_0x39336b(0x36e)](), _0x5e4fdc, 'vertical');
                                });
                            }
                        }
                    });
                }
            });
            _0x462dea[_0x2c9346(0x18b)](_0x12d31d(_0x2c9346(0x30c))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));