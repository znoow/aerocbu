// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.0.8
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

function a0_0x1250() {
    const _0x551322 = [
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '_INTRO',
        'parents',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'Settings',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'username',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'BATCH_DOWNLOAD_DIRECT',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'div\x20>\x20ul._acay',
        'https://ko-fi.com/snkoarashi',
        'after',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'div.volume_slider\x20input',
        '</span></div>',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'img',
        'THUMBNAIL',
        'input',
        'replaceAll',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '.SNKMS_IG_DW_ALL_MAIN',
        'getPostOwner()',
        'GET',
        'first',
        'getStories()',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        'data-username',
        'message',
        'video_versions',
        'x1lix1fw',
        'assign',
        'LOCALE_MANIFEST',
        '\x22\x20class=\x22newTab\x22>',
        'Reload\x20Script',
        'element',
        '523314YqYFww',
        'error',
        'version',
        'status',
        'find',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'mouseenter',
        'NO_VID_URL',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'trigger',
        'avatar',
        'G_CHECK_TIMESTAMP',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'DIV',
        'onReadyMyDW()\x20Timer',
        'getTime',
        'there\x20is\x20no\x20new\x20update',
        'owner',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'taken_at_timestamp',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '\x22\x20data-globalIndex=\x22',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'style',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'getBlobMediaWithQuery()',
        '<a\x20media-id=\x22',
        'feedback_message',
        'reels_media',
        'query_hash',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'children',
        'contextmenu',
        'hidden',
        'position',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'GL_registerEventList',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'NEW_TAB',
        'removeClass',
        'controls',
        'GL_dataCache',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'body\x20>\x20div\x20section:visible._ac0a',
        'getFullYear',
        'body',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'THUMBNAIL_INTRO',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'src',
        'volume',
        'download',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        'val',
        'reject',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'CHECK_UPDATE',
        '</div>',
        'taken_at',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '33644CXhJDS',
        'user',
        'data-loop',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'data-modify',
        '.IG_SN_DIG\x20#post_info',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22>',
        '._acnb',
        '10dWdoXh',
        'includes',
        'Select\x20All',
        'hide',
        '.circle_wrapper\x20span',
        'map',
        'padEnd',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'z-index',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'click',
        '37942JGsliX',
        '--ig-track-progress:\x20',
        'GL_logger',
        'instagram.com/reels/',
        'REPORT_FORK',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'push',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        '[data-ih-locale-title]',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '0px',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        '#_SNLOAD',
        'GL_username',
        'text',
        'Download',
        'mousedown',
        'getMinutes',
        'hasReferrer',
        'Found\x20post\x20container',
        'Main\x20Timer',
        '</span>\x20',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'candidates',
        '<a\x20datetime=\x22',
        '*/*',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'x1s85apg',
        'isDialog',
        'toString',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        'mp4',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        '12064063dLWYMp',
        'IG\x20Debug\x20DOM\x20Tree',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'tempFetchRateLimit',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'className',
        'stories',
        '._acay\x20._acaz',
        'FORCE_RESOURCE_VIA_MEDIA',
        'type',
        'video[class]',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        '\x22]\x20span',
        'parse',
        'highlights',
        'match',
        'Video',
        'observe',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'response',
        'G_RENAME_FORMAT',
        'users',
        'SELECT_AND_COPY',
        'locale',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'finalUrl',
        'video_url',
        'edge_sidecar_to_children',
        'sort',
        'registerMenuIds',
        'replace',
        'Request\x20with:',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'INTERNAL_CSS',
        'data-href',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        '<div\x20class=\x22IG_SN_DIG\x20',
        'div',
        'updatenotification',
        'AUTO_RENAME',
        'time',
        'range',
        'x1iyjqo2',
        'textContent',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'forEach',
        'modify-thumbnail',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'createObjectURL',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '105816JftWVz',
        'select',
        'language',
        'Checking\x20for\x20Updates',
        'top',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'video\x20+\x20div',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'shortcode',
        'REPORT_GITHUB',
        'off',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'url',
        '_acnb',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'data-name',
        'stopPropagation',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'startsWith',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'class',
        'pageLoaded',
        'remove',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'matchAll',
        'isStory',
        '</button>',
        ':hidden',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'videoVolume',
        '.IG_DWHISTORY_ALL',
        'tagName',
        'hasClass',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'responseText',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'datetime',
        'story',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'html',
        'a[href^=\x22/p/\x22]',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'NOTICE_UPDATE_TITLE',
        '2286712VNLWED',
        'NOTICE_UPDATE_CONTENT',
        'DW_ALL',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        '.xpgaw4o',
        'addClass',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        '.videoThumbnail',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22>',
        'getSeconds',
        'GraphImage',
        'each',
        'data-modify-thumbnail',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'carousel_media:\x20undefined\x20username',
        'www.',
        'get',
        'BATCH_DOWNLOAD_SELECTED',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'div.volume_slider',
        'substr',
        'DOWNLOAD',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'stp',
        'display_url',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'log',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'play\x20playing',
        'div[id^=\x22mount\x22]',
        'getHours',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '_ac3q',
        'carousel_media:',
        '<label\x20class=\x22globalSettings',
        '\x22\x20datetime=\x22',
        'query_id',
        'currentURL',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'shortcode_media',
        'prev',
        'div#scrollview',
        'undefined',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '/info/',
        'highlight',
        'DISABLE_VIDEO_LOOPING',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        'Script\x20Loaded',
        'isProfile',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'attr',
        'data',
        'ended',
        'img[referrerpolicy]',
        'getMonth',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'innerHTML',
        'pause',
        'CLOSE',
        'li._acaz',
        'Donate',
        'padStart',
        'getBlobMediaWithQueryID()',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'modify',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '.json',
        '.button_wrapper',
        '.IG_DWHISTORY',
        'trim',
        'div:last-child',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        '.IG_SN_DIG',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'div[style][class]',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        '_acnf',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'items',
        'carousel_media',
        'data-remove-thumbnail',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'body\x20>\x20div\x20section._ac0a',
        '.IG_DWPROFILE',
        'userAgent',
        'host',
        'SKIP_VIEW_STORY_CONFIRM',
        'reels',
        'catch',
        'getTranslationText\x20catch\x20error:',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'load',
        'next',
        'slice',
        'div[class][role=\x22button\x22]',
        'which',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'data-controls',
        'https://www.instagram.com/',
        'reel',
        '.IG_DWHINEWTAB',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'SETTING',
        'data-type',
        'toLowerCase',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'appendChild',
        'video',
        '</a>',
        'svg',
        'searchParams',
        'Preference\x20Settings',
        '__typename',
        'https://www.instagram.com/reels/',
        'G_VIDEO_VOLUME',
        'DOWNLOAD_ALL',
        '.IG_DWSTORY',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        '_blank',
        '\x22\x20class=\x22videoThumbnail\x22>',
        '</span></label>',
        'DIRECT_DOWNLOAD_ALL',
        'loop',
        'MODIFY_VIDEO_VOLUME',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'close',
        '\x22\x20title=\x22',
        '\x20-</a>',
        'RENAME_PUBLISH_DATE',
        '<p\x20id=\x22_SNLOAD\x22>',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'hostname',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'Download\x20Selected\x20Resources',
        'change',
        'target',
        'DOWNLOAD_DOM_TREE',
        'relative',
        'fadeOut',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'media-id',
        '.IG_REELS_THUMBNAIL',
        'image_versions2',
        'VID',
        'div\x20>\x20ul\x20li._acaz',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        '\x20child',
        'user\x20settings',
        '.IG_DWSTORY_ALL',
        '#scrollWrapper',
        'Disable\x20Video\x20Auto-looping',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'getUserHighSizeProfile()',
        '</span>\x20<input\x20id=\x22',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'removeAttr',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'altKey',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        '56lAntqm',
        'post',
        'label',
        'LOAD_BLOB_ONE',
        'Download\x20All\x20Resources',
        'lang',
        'fail',
        'execCommand',
        'jpg',
        'profile_pic_url',
        '[data-ih-locale]',
        'wrap',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'boolean',
        'video\x20volume\x20changed\x20#slider',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        '.circle_wrapper',
        'loadstart',
        '<div></div>',
        'srcset',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '<input\x20value=\x22',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'getDate',
        'createElement',
        'height',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '13hGVMjd',
        'script[type=\x22application/json\x22]',
        '._acay',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'disconnect',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'parent',
        'then',
        '.IG_DWSTORY_THUMBNAIL',
        'volumechange',
        'GL_observer',
        '.IG_SN_DIG_BODY\x20.newTab',
        'keys',
        'data-completed',
        'script',
        'Loading\x20Blob\x20Media...',
        'childList',
        'data-ih-locale-title',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'REPORT_DISCORD',
        '._aagv\x20img',
        'IMG',
        'getUserId()',
        'length',
        'toISOString',
        '<div\x20class=\x22volume_slider\x20',
        'addedNodes',
        '[data-snig]',
        'div:not([class]):not([style])',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'absolute',
        '20000',
        'filter',
        'pathname',
        'fileRenameFormat',
        '\x22><span\x20data-ih-locale=\x22',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'SHOW_DOM_TREE',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'Remote\x20version:\x20',
        '.IG_SN_DIG\x20.globalSettings',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'isArray',
        '#article-id',
        '#tempWrapper',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'href',
        'smooth',
        'code',
        'DEBUG',
        'Wololo!\x20New\x20version\x20released.',
        'getBlobMedia()',
        'canDownload',
        '3202470UkmDlY',
        'prop',
        'width',
        '</a></button>',
        'userLanguage',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'is_video',
        'GraphSidecar',
        'data-ih-locale',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22>',
        '93WvbAOc',
        'bottom',
        '\x22\x20/>',
        'Download\x20Video\x20Thumbnail',
        'GL_referrer',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'getUserIdWithAgent()',
        'a[data-needed=\x22direct\x22]',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '<div\x20class=\x22button_wrapper\x22>',
        'vertical',
        '.IG_REELS_NEWTAB',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'video\x20+\x20div\x20>\x20div',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'video_resources',
        '\x0a-----\x0a\x0aLocation:\x20',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'LOAD_BLOB_RELOAD',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'NOPATH',
        '.IG_REELS',
        'setAttribute',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'data-snig',
        'Manually\x20inserting\x20thumbnail\x20button',
        'checked',
        'hd_profile_pic_url_info',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'GL_repeat',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'preventDefault',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'onHighlightsStory',
        'NONE',
        'ig_helper_notice',
        'GL_postPath',
        'scontent.cdninstagram.com',
        'GraphVideo',
        'Show\x20DOM\x20Tree',
        'main\x20timer\x20re-register\x20completed',
        'DONATE',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'muted',
        '.SNKMS_IG_DW_MAIN',
        'before',
        '<option\x20value=\x22',
        '\x22\x20class=\x22SNKMS_IG_DW_ALL_MAIN\x22>',
        '.IG_DWHISTORY_THUMBNAIL',
        'Can\x20not\x20find\x20download\x20url.',
        '._acay\x20+\x20.x24i39r',
        'split',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'getMediaInfo()',
        '\x22\x20data-ih-locale-title=\x22',
        'pointer',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'Fetch\x20from\x20memory\x20cache:',
        '</p>',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '.txt',
        'ig_cache_key',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'display_resources',
        'RELOAD_SCRIPT',
        'Logger:\x0a',
        'firstStarted',
        'warn',
        'floor',
        'LOAD_BLOB_MULTIPLE',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'selected',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'data-path',
        'Feedback',
        'content',
        'last',
        'copy',
        'css',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'undefined\x20username',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22m191\x20208c-1-5-6-8-10-8l-42\x200\x200-184c0-8-5-15-11-15l-42\x200c-6\x200-11\x207-11\x2015l0\x20184-42\x200c-4\x200-8\x203-9\x208c-2\x206-1\x2012\x201\x2016l74\x20105c2\x203\x205\x205\x208\x205s6-2\x208-5l74-105c2-4\x204-9\x202-16z\x22></g></g><g><g><path\x20d=\x22m486.3\x20208c-1-5-6-8-10-8l-42\x200\x200-184c0-8-5-15-11-15l-43\x200c-6\x200-11\x207-11\x2015l0\x20184-41\x200c-4\x200-8\x203-9\x208c-2\x206-1\x2012\x201\x2016l74\x20105c2\x203\x205\x205\x208\x205s6-2\x208-5l74-105c2-4\x204-9\x202-16z\x22></g></g><g><g><path\x20d=\x22m342.3\x20299c-1-5-6-8-10-8l-42\x200\x200-275c0-8-5-15-11-15l-42\x200c-6\x200-11\x207-11\x2015l0\x20275-42\x200c-4\x200-8\x203-9\x208c-2\x206-1\x2012\x201\x2016l74\x20105c2\x203\x205\x205\x208\x205s6-2\x208-5l74-105c2-4\x204-9\x202-16z\x22></g></g><g><g><path\x20d=\x22m422.79\x20380.79l0\x2074.12-338.83\x200\x200-74.12-67.34\x200\x200\x2089.45c0\x2023\x2014.73\x2040.89\x2033.67\x2040.89l408.28\x200c18.94\x200\x2033.67-17.89\x2033.67-40.89l0-89.45-69.45\x200z\x22/></g></g></svg>',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'DOMTree-',
        'regenerated',
        'FEEDBACK',
        '.SNKMS_IG_NEWTAB_MAIN',
        'isReels',
        '</a></button><br/>',
        'blob',
        'Close',
        '.IG_DWNEWTAB',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'append',
        'scrollBy',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'node',
        'Image',
        'div#splash-screen',
        'remove-thumbnail',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'keydown',
        'config_width',
        '37px',
        '.SNKMS_IG_THUMBNAIL_MAIN'
    ];
    a0_0x1250 = function () {
        return _0x551322;
    };
    return a0_0x1250();
}
function a0_0x49b2(_0x4aa5de, _0x41355a) {
    const _0x1250e9 = a0_0x1250();
    return a0_0x49b2 = function (_0x49b27b, _0x3d139d) {
        _0x49b27b = _0x49b27b - 0x1eb;
        let _0x2e9376 = _0x1250e9[_0x49b27b];
        return _0x2e9376;
    }, a0_0x49b2(_0x4aa5de, _0x41355a);
}
(function (_0x4c76ad, _0x45afbe) {
    const _0x532884 = a0_0x49b2, _0x4a9d47 = _0x4c76ad();
    while (!![]) {
        try {
            const _0x5273ec = parseInt(_0x532884(0x2d1)) / 0x1 * (parseInt(_0x532884(0x3fc)) / 0x2) + parseInt(_0x532884(0x311)) / 0x3 * (parseInt(_0x532884(0x3e7)) / 0x4) + -parseInt(_0x532884(0x307)) / 0x5 + -parseInt(_0x532884(0x457)) / 0x6 * (parseInt(_0x532884(0x2b4)) / 0x7) + -parseInt(_0x532884(0x200)) / 0x8 + -parseInt(_0x532884(0x3a6)) / 0x9 + -parseInt(_0x532884(0x3ef)) / 0xa * (-parseInt(_0x532884(0x41f)) / 0xb);
            if (_0x5273ec === _0x45afbe)
                break;
            else
                _0x4a9d47['push'](_0x4a9d47['shift']());
        } catch (_0x5dedd3) {
            _0x4a9d47['push'](_0x4a9d47['shift']());
        }
    }
}(a0_0x1250, 0x74d42), function (_0x2526ef) {
    setTimeout(() => {
        'use strict';
        const _0x479be8 = a0_0x49b2;
        const _0x4a14d1 = {
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
            }, _0xba7067 = [
                _0x479be8(0x28d),
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
                _0x479be8(0x3f9)
            ], _0x41f26c = {
                'DOWNLOAD': _0x479be8(0x2a2),
                'NEW_TAB': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
                'THUMBNAIL': _0x479be8(0x3ea),
                'DOWNLOAD_ALL': _0x479be8(0x365),
                'CLOSE': '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>'
            }, _0x244bed = 0xfa, _0xbdee39 = GM_getResourceText(_0x479be8(0x445)), _0x363438 = JSON[_0x479be8(0x42d)](GM_getResourceText(_0x479be8(0x3a2)));
        var _0x53278b = {
            'videoVolume': GM_getValue(_0x479be8(0x27d)) ? GM_getValue('G_VIDEO_VOLUME') : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x479be8(0x434)) ? GM_getValue(_0x479be8(0x434)) : _0x479be8(0x2ff),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x479be8(0x2b9)) || navigator[_0x479be8(0x459)] || navigator[_0x479be8(0x30b)],
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
                _0x3e5010();
            })
        };
        _0x44d3c1(), GM_addStyle(_0xbdee39), _0x450e61(), _0x343a80(_0x53278b['lang'])['then'](_0x1eb52c => {
            const _0x11814d = _0x479be8;
            _0x53278b[_0x11814d(0x437)][_0x53278b[_0x11814d(0x2b9)]] = _0x1eb52c, _0x2e72d5(), _0x450e61(), _0x2e1db4(0x12c);
        })[_0x479be8(0x261)](_0x1c81a1 => {
            const _0x38a3ac = _0x479be8;
            _0x450e61(), _0x2e1db4(0x12c), !_0x53278b[_0x38a3ac(0x2b9)][_0x38a3ac(0x46f)]('en') && console[_0x38a3ac(0x3a7)](_0x38a3ac(0x262), _0x1c81a1);
        }), _0x13060d(_0x479be8(0x233), GM_info[_0x479be8(0x2df)]['name'], 'version:', GM_info['script']['version']);
        var _0x529981 = setInterval(function () {
            const _0x4efc62 = _0x479be8;
            if (_0x2526ef('div#splash-screen')[_0x4efc62(0x2e8)] > 0x0 && !_0x2526ef(_0x4efc62(0x376))['is'](_0x4efc62(0x1f0)) || location[_0x4efc62(0x2f2)][_0x4efc62(0x42f)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x4efc62(0x291)][_0x4efc62(0x46f)](_0x4efc62(0x211))) {
                _0x53278b[_0x4efc62(0x473)] = ![];
                return;
            }
            if (_0x53278b[_0x4efc62(0x227)] != location[_0x4efc62(0x300)] || !_0x53278b['firstStarted'] || !_0x53278b[_0x4efc62(0x473)]) {
                console[_0x4efc62(0x21c)](_0x4efc62(0x410), 'trigging'), clearInterval(_0x53278b[_0x4efc62(0x32e)]), _0x53278b[_0x4efc62(0x473)] = ![], _0x53278b[_0x4efc62(0x355)] = !![], _0x53278b[_0x4efc62(0x227)] = location[_0x4efc62(0x300)], _0x53278b[_0x4efc62(0x2db)][_0x4efc62(0x2d5)]();
                if (location['href'][_0x4efc62(0x46f)]('https://www.instagram.com/p/') || location[_0x4efc62(0x2f2)][_0x4efc62(0x42f)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x4efc62(0x300)]['startsWith']('https://www.instagram.com/reel/')) {
                    _0x53278b[_0x4efc62(0x3d2)][_0x4efc62(0x426)] = {}, _0x53278b[_0x4efc62(0x3d2)]['highlights'] = {}, _0x13060d(_0x4efc62(0x418));
                    var _0x33363d = setInterval(() => {
                        const _0x276578 = _0x4efc62;
                        _0x2526ef(_0x276578(0x22d))[_0x276578(0x2e8)] > 0x0 && (clearInterval(_0x33363d), setTimeout(() => {
                            _0x3e5010(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x53278b[_0x4efc62(0x473)] = !![];
                }
                location[_0x4efc62(0x300)]['startsWith'](_0x4efc62(0x27c)) && (_0x13060d(_0x4efc62(0x36b)), setTimeout(() => {
                    _0x3a195a(![]);
                }, 0x96), _0x53278b['pageLoaded'] = !![]);
                if (location['href'][_0x4efc62(0x345)]('?')[0x0] == 'https://www.instagram.com/') {
                    _0x53278b['GL_dataCache'][_0x4efc62(0x426)] = {}, _0x53278b[_0x4efc62(0x3d2)][_0x4efc62(0x42e)] = {};
                    let _0x16733d = _0x53278b[_0x4efc62(0x315)]?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x13060d('isHomepage', _0x16733d), setTimeout(() => {
                        const _0x5604c9 = _0x4efc62;
                        _0x3e5010(![], _0x16733d);
                        const _0x283440 = _0x2526ef(_0x5604c9(0x20d))?.['parent']()[0x0];
                        _0x283440 && _0x53278b[_0x5604c9(0x2db)][_0x5604c9(0x431)](_0x283440, { 'childList': !![] });
                    }, 0x96), _0x53278b[_0x4efc62(0x473)] = !![];
                }
                _0x2526ef('header\x20>\x20*[class]:first-child\x20img[alt]')['length'] && location[_0x4efc62(0x2f2)]['match'](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname'][_0x4efc62(0x42f)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x13060d(_0x4efc62(0x234)), setTimeout(() => {
                    _0x5388f9(![]);
                }, 0x96), _0x53278b[_0x4efc62(0x473)] = !![]);
                if (!_0x53278b[_0x4efc62(0x473)]) {
                    if (location[_0x4efc62(0x300)][_0x4efc62(0x42f)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x53278b[_0x4efc62(0x3d2)][_0x4efc62(0x42e)] = {}, _0x13060d('isHighlightsStory'), _0x14981d(![]), _0x53278b[_0x4efc62(0x32e)] = setInterval(() => {
                            _0xc41be9(![]);
                        }, _0x244bed), _0x2526ef(_0x4efc62(0x249))['length'] && setTimeout(() => {
                            const _0x3f1de9 = _0x4efc62;
                            if (_0x4a14d1[_0x3f1de9(0x25f)]) {
                                var _0x55e995 = _0x2526ef('div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')[_0x3f1de9(0x2f1)](function () {
                                    const _0x431200 = _0x3f1de9;
                                    return _0x2526ef(this)['children']()['length'] === 0x0 && this[_0x431200(0x44f)][_0x431200(0x24a)]() !== '';
                                });
                                _0x55e995?.[_0x3f1de9(0x3af)]('click');
                            }
                            _0x53278b[_0x3f1de9(0x473)] = !![];
                        }, 0x96);
                    else
                        location[_0x4efc62(0x300)][_0x4efc62(0x42f)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x13060d(_0x4efc62(0x1ee)), _0x2526ef('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x4efc62(0x2e8)] > 0x0 && (_0x2526ef('.IG_DWSTORY')[_0x4efc62(0x474)](), _0x2526ef(_0x4efc62(0x36f))[_0x4efc62(0x474)](), _0x2526ef('.IG_DWSTORY_THUMBNAIL')[_0x4efc62(0x2e8)] && _0x2526ef('.IG_DWSTORY_THUMBNAIL')[_0x4efc62(0x474)](), _0x11a7e8(![]), setTimeout(() => {
                            _0x11a7e8(![]);
                        }, 0x96)), _0x2526ef('.IG_DWSTORY')['length'] && setTimeout(() => {
                            const _0x5ba038 = _0x4efc62;
                            if (_0x4a14d1[_0x5ba038(0x25f)]) {
                                var _0x132b63 = _0x2526ef(_0x5ba038(0x2cc))[_0x5ba038(0x2f1)](function () {
                                    const _0x1a5f08 = _0x5ba038;
                                    return _0x2526ef(this)[_0x1a5f08(0x3c6)]()[_0x1a5f08(0x2e8)] === 0x0 && this[_0x1a5f08(0x44f)][_0x1a5f08(0x24a)]() !== '';
                                });
                                _0x132b63?.[_0x5ba038(0x3fb)]();
                            }
                            _0x53278b['pageLoaded'] = !![];
                        }, 0x96)) : (_0x53278b[_0x4efc62(0x473)] = ![], _0x2526ef(_0x4efc62(0x27f))[_0x4efc62(0x2e8)] && _0x2526ef(_0x4efc62(0x27f))['remove'](), _0x2526ef(_0x4efc62(0x2a5))['length'] && _0x2526ef(_0x4efc62(0x2a5))['remove'](), _0x2526ef(_0x4efc62(0x36f))[_0x4efc62(0x2e8)] && _0x2526ef(_0x4efc62(0x36f))[_0x4efc62(0x474)](), _0x2526ef(_0x4efc62(0x2d9))[_0x4efc62(0x2e8)] && _0x2526ef('.IG_DWSTORY_THUMBNAIL')[_0x4efc62(0x474)](), _0x2526ef(_0x4efc62(0x249))['length'] && _0x2526ef(_0x4efc62(0x249))['remove'](), _0x2526ef(_0x4efc62(0x1f3))[_0x4efc62(0x2e8)] && _0x2526ef(_0x4efc62(0x1f3))[_0x4efc62(0x474)](), _0x2526ef(_0x4efc62(0x26d))[_0x4efc62(0x2e8)] && _0x2526ef('.IG_DWHINEWTAB')[_0x4efc62(0x474)](), _0x2526ef('.IG_DWHISTORY_THUMBNAIL')['length'] && _0x2526ef(_0x4efc62(0x342))[_0x4efc62(0x474)]());
                }
                _0x2e1db4(0x12c), _0x53278b[_0x4efc62(0x315)] = new URL(location[_0x4efc62(0x300)])[_0x4efc62(0x2f2)];
            }
        }, _0x244bed);
        async function _0x5b635b() {
            const _0x2100bb = _0x479be8;
            _0x273247(!![]);
            let _0x258c2c = new Date()[_0x2100bb(0x3b5)](), _0x4b9df4 = Math[_0x2100bb(0x357)](_0x258c2c / 0x3e8), _0x1a1cd2 = location[_0x2100bb(0x300)][_0x2100bb(0x43f)](/\/$/ig, '')[_0x2100bb(0x345)]('/')['at'](-0x1), _0x17f6d7 = await _0x4d5533(_0x1a1cd2), _0x7e2133 = _0x17f6d7[_0x2100bb(0x238)][_0x2100bb(0x3c3)][0x0][_0x2100bb(0x3b7)]['username'], _0x48b5b6 = 0x0;
            _0x2bdf85(_0x48b5b6, _0x17f6d7[_0x2100bb(0x238)]['reels_media'][0x0][_0x2100bb(0x256)]['length']), _0x17f6d7['data']['reels_media'][0x0][_0x2100bb(0x256)][_0x2100bb(0x451)]((_0x42592e, _0x420629) => {
                setTimeout(() => {
                    const _0x292d31 = a0_0x49b2;
                    _0x4a14d1[_0x292d31(0x28d)] && (_0x4b9df4 = _0x42592e[_0x292d31(0x3b9)]), _0x42592e[_0x292d31(0x352)]['sort'](function (_0x2a7fd6, _0x3b31f1) {
                        const _0x532be4 = _0x292d31;
                        if (_0x2a7fd6[_0x532be4(0x37a)] < _0x3b31f1[_0x532be4(0x37a)])
                            return 0x1;
                        if (_0x2a7fd6['config_width'] > _0x3b31f1[_0x532be4(0x37a)])
                            return -0x1;
                        return 0x0;
                    }), _0x42592e['is_video'] ? _0x3e3781(_0x42592e[_0x292d31(0x320)][0x0][_0x292d31(0x3da)], _0x7e2133, 'stories', _0x4b9df4, _0x292d31(0x41d), _0x42592e['id'])['then'](() => {
                        const _0x21ce9d = _0x292d31;
                        _0x2bdf85(++_0x48b5b6, _0x17f6d7[_0x21ce9d(0x238)][_0x21ce9d(0x3c3)][0x0][_0x21ce9d(0x256)][_0x21ce9d(0x2e8)]);
                    }) : _0x3e3781(_0x42592e[_0x292d31(0x352)][0x0][_0x292d31(0x3da)], _0x7e2133, 'stories', _0x4b9df4, _0x292d31(0x2bc), _0x42592e['id'])[_0x292d31(0x2d8)](() => {
                        const _0x323cf4 = _0x292d31;
                        _0x2bdf85(++_0x48b5b6, _0x17f6d7[_0x323cf4(0x238)][_0x323cf4(0x3c3)][0x0]['items'][_0x323cf4(0x2e8)]);
                    });
                }, 0x64 * _0x420629);
            });
        }
        async function _0x14981d(_0x36ebc0, _0xb1e971) {
            const _0x3fd41a = _0x479be8;
            var _0x5779c0 = _0x2526ef(_0x3fd41a(0x39c))[_0x3fd41a(0x2f1)](function () {
                const _0x1fd0a0 = _0x3fd41a;
                return _0x2526ef(this)[_0x1fd0a0(0x237)](_0x1fd0a0(0x300))['split']('/')[_0x1fd0a0(0x2f1)](_0x2becb9 => _0x2becb9[_0x1fd0a0(0x2e8)] > 0x0)[_0x1fd0a0(0x2e8)] === 0x1;
            })['first']()[_0x3fd41a(0x237)](_0x3fd41a(0x300))[_0x3fd41a(0x345)]('/')[_0x3fd41a(0x2f1)](_0x4badf6 => _0x4badf6[_0x3fd41a(0x2e8)] > 0x0)['at'](0x0);
            if (_0x36ebc0) {
                let _0x44158c = new Date()[_0x3fd41a(0x3b5)](), _0x379c99 = Math['floor'](_0x44158c / 0x3e8), _0x54de76 = location['href']['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x1449c9 = _0x2526ef(_0x3fd41a(0x3e6))[_0x3fd41a(0x2e8)] || _0x2526ef(_0x3fd41a(0x37d))[_0x3fd41a(0x2e8)] || _0x2526ef(_0x3fd41a(0x3e4))[_0x3fd41a(0x3aa)](_0x3fd41a(0x2d0))[_0x3fd41a(0x2e8)], _0x3d33cc = 0x0;
                _0x273247(!![]);
                if (_0x53278b['GL_dataCache'][_0x3fd41a(0x42e)][_0x54de76]) {
                    _0x13060d(_0x3fd41a(0x34b), _0x54de76);
                    let _0x398bec = _0x53278b[_0x3fd41a(0x3d2)][_0x3fd41a(0x42e)][_0x54de76][_0x3fd41a(0x238)][_0x3fd41a(0x3c3)][0x0][_0x3fd41a(0x256)][_0x3fd41a(0x2e8)];
                    _0x5779c0 = _0x53278b['GL_dataCache'][_0x3fd41a(0x42e)][_0x54de76]['data']['reels_media'][0x0][_0x3fd41a(0x3b7)][_0x3fd41a(0x383)], _0x3d33cc = _0x53278b[_0x3fd41a(0x3d2)][_0x3fd41a(0x42e)][_0x54de76][_0x3fd41a(0x238)][_0x3fd41a(0x3c3)][0x0]['items'][_0x398bec - _0x1449c9];
                } else {
                    let _0x1f5016 = await _0x4d5533(_0x54de76), _0xbb29cf = _0x1f5016[_0x3fd41a(0x238)][_0x3fd41a(0x3c3)][0x0][_0x3fd41a(0x256)]['length'];
                    _0x5779c0 = _0x1f5016[_0x3fd41a(0x238)]['reels_media'][0x0]['owner'][_0x3fd41a(0x383)], _0x3d33cc = _0x1f5016[_0x3fd41a(0x238)][_0x3fd41a(0x3c3)][0x0][_0x3fd41a(0x256)][_0xbb29cf - _0x1449c9], _0x53278b[_0x3fd41a(0x3d2)][_0x3fd41a(0x42e)][_0x54de76] = _0x1f5016;
                }
                _0x13060d(_0x3fd41a(0x333), _0x54de76, _0x53278b[_0x3fd41a(0x3d2)]['highlights'][_0x54de76]);
                _0x4a14d1['RENAME_PUBLISH_DATE'] && (_0x379c99 = _0x3d33cc[_0x3fd41a(0x3b9)]);
                if (_0x4a14d1['FORCE_RESOURCE_VIA_MEDIA'] && !_0x53278b['tempFetchRateLimit']) {
                    let _0x53e0e3 = await _0x590a69(_0x3d33cc['id']);
                    _0x53e0e3[_0x3fd41a(0x3a9)] === 'ok' ? _0x53e0e3['items'][0x0][_0x3fd41a(0x39f)] ? _0xb1e971 ? _0x26174e(_0x53e0e3[_0x3fd41a(0x256)][0x0]['video_versions'][0x0][_0x3fd41a(0x466)]) : _0x3e3781(_0x53e0e3[_0x3fd41a(0x256)][0x0][_0x3fd41a(0x39f)][0x0][_0x3fd41a(0x466)], _0x5779c0, 'highlights', _0x379c99, 'mp4', _0x53e0e3[_0x3fd41a(0x256)][0x0]['id']) : _0xb1e971 ? _0x26174e(_0x53e0e3[_0x3fd41a(0x256)][0x0][_0x3fd41a(0x29c)][_0x3fd41a(0x413)][0x0][_0x3fd41a(0x466)]) : _0x3e3781(_0x53e0e3['items'][0x0]['image_versions2'][_0x3fd41a(0x413)][0x0]['url'], _0x5779c0, _0x3fd41a(0x42e), _0x379c99, _0x3fd41a(0x2bc), _0x53e0e3[_0x3fd41a(0x256)][0x0]['id']) : (_0x4a14d1[_0x3fd41a(0x469)] ? (delete _0x53278b[_0x3fd41a(0x3d2)][_0x3fd41a(0x42e)][_0x54de76], _0x53278b[_0x3fd41a(0x422)] = !![], _0x14981d(!![], _0xb1e971)) : alert(_0x3fd41a(0x3e5) + _0x53e0e3['message']), _0x13060d(_0x53e0e3));
                } else
                    _0x3d33cc[_0x3fd41a(0x30d)] ? _0xb1e971 ? _0x26174e(_0x3d33cc[_0x3fd41a(0x320)]['at'](-0x1)[_0x3fd41a(0x3da)], _0x5779c0) : _0x3e3781(_0x3d33cc['video_resources']['at'](-0x1)[_0x3fd41a(0x3da)], _0x5779c0, _0x3fd41a(0x42e), _0x379c99, _0x3fd41a(0x41d), _0x3d33cc['id']) : _0xb1e971 ? _0x26174e(_0x3d33cc[_0x3fd41a(0x352)]['at'](-0x1)[_0x3fd41a(0x3da)], _0x5779c0) : _0x3e3781(_0x3d33cc[_0x3fd41a(0x352)]['at'](-0x1)[_0x3fd41a(0x3da)], _0x5779c0, _0x3fd41a(0x42e), _0x379c99, _0x3fd41a(0x2bc), _0x3d33cc['id']), _0x53278b[_0x3fd41a(0x422)] = ![];
                _0x273247(![]);
            } else {
                if (!_0x2526ef(_0x3fd41a(0x249))[_0x3fd41a(0x2e8)]) {
                    let _0x1b2fb3 = null;
                    _0x2526ef(_0x3fd41a(0x25b))[_0x3fd41a(0x2e8)] > 0x0 ? _0x1b2fb3 = _0x2526ef(_0x3fd41a(0x3d4)) : (_0x1b2fb3 = _0x2526ef(_0x3fd41a(0x387)), _0x1b2fb3[_0x3fd41a(0x362)](_0x3fd41a(0x3c9), _0x3fd41a(0x297)));
                    if (_0x1b2fb3[_0x3fd41a(0x2e8)] === 0x0) {
                        let _0x1f66c5 = _0x2526ef(_0x3fd41a(0x3fa)), _0x3069a2 = 0x0;
                        _0x1f66c5[_0x3fd41a(0x20b)](function () {
                            const _0x4e29d6 = _0x3fd41a;
                            _0x2526ef(this)['width']() > _0x3069a2 && (_0x3069a2 = _0x2526ef(this)[_0x4e29d6(0x309)](), _0x1b2fb3 = _0x2526ef(this)[_0x4e29d6(0x3c6)](_0x4e29d6(0x449))[_0x4e29d6(0x399)]());
                        });
                    }
                    if (_0x1b2fb3 != null) {
                        _0x1b2fb3[_0x3fd41a(0x371)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x194f3c('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x41f26c['DOWNLOAD'] + '</div>'), _0x1b2fb3[_0x3fd41a(0x371)](_0x3fd41a(0x32d) + _0x194f3c(_0x3fd41a(0x3cf)) + _0x3fd41a(0x319) + _0x41f26c['NEW_TAB'] + '</div>');
                        let _0xce0e80 = _0x1f3f6b(_0x5779c0);
                        _0xce0e80['length'] > 0x1 && _0x1b2fb3[_0x3fd41a(0x371)](_0x3fd41a(0x2ee) + _0x194f3c(_0x3fd41a(0x202)) + _0x3fd41a(0x34a) + _0x41f26c[_0x3fd41a(0x27e)] + _0x3fd41a(0x3e2)), _0x1b2fb3[_0x3fd41a(0x3aa)](_0x3fd41a(0x23a))[_0x3fd41a(0x20b)](function () {
                            const _0x146d59 = _0x3fd41a;
                            _0x2526ef(this)['on'](_0x146d59(0x264), function () {
                                const _0x58f629 = _0x146d59;
                                !_0x2526ef(this)[_0x58f629(0x238)](_0x58f629(0x377)) && (_0x1b2fb3[_0x58f629(0x3aa)](_0x58f629(0x342))[_0x58f629(0x2e8)] === 0x0 ? (_0x2526ef(this)[_0x58f629(0x237)](_0x58f629(0x258), !![]), _0x2526ef(_0x58f629(0x342))[_0x58f629(0x474)](), _0x13060d('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x2526ef(this)['attr'](_0x58f629(0x258), !![]), _0x13060d(_0x58f629(0x380))));
                            });
                        });
                    }
                }
            }
        }
        async function _0xc41be9(_0xbdd348) {
            const _0x23ecdc = _0x479be8;
            if (_0xbdd348) {
                let _0x487c3a = new Date()['getTime'](), _0x52e360 = Math[_0x23ecdc(0x357)](_0x487c3a / 0x3e8), _0x242748 = location['href'][_0x23ecdc(0x43f)](/\/$/ig, '')[_0x23ecdc(0x345)]('/')['at'](-0x1), _0x3cb9ab = '', _0x9f917a = _0x2526ef('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x23ecdc(0x2e8)] || _0x2526ef('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x23ecdc(0x2e8)] || _0x2526ef(_0x23ecdc(0x3e4))[_0x23ecdc(0x3aa)](_0x23ecdc(0x2d0))[_0x23ecdc(0x2e8)], _0x3cf4e2 = '';
                _0x273247(!![]);
                if (_0x53278b[_0x23ecdc(0x3d2)]['highlights'][_0x242748]) {
                    _0x13060d('Fetch\x20from\x20memory\x20cache:', _0x242748);
                    let _0x497e13 = _0x53278b[_0x23ecdc(0x3d2)][_0x23ecdc(0x42e)][_0x242748][_0x23ecdc(0x238)][_0x23ecdc(0x3c3)][0x0][_0x23ecdc(0x256)][_0x23ecdc(0x2e8)];
                    _0x3cb9ab = _0x53278b[_0x23ecdc(0x3d2)][_0x23ecdc(0x42e)][_0x242748]['data'][_0x23ecdc(0x3c3)][0x0][_0x23ecdc(0x3b7)]['username'], _0x3cf4e2 = _0x53278b['GL_dataCache'][_0x23ecdc(0x42e)][_0x242748][_0x23ecdc(0x238)][_0x23ecdc(0x3c3)][0x0]['items'][_0x497e13 - _0x9f917a];
                } else {
                    let _0x17b79d = await _0x4d5533(_0x242748), _0x1b5929 = _0x17b79d['data'][_0x23ecdc(0x3c3)][0x0][_0x23ecdc(0x256)]['length'];
                    _0x3cb9ab = _0x17b79d[_0x23ecdc(0x238)][_0x23ecdc(0x3c3)][0x0][_0x23ecdc(0x3b7)][_0x23ecdc(0x383)], _0x3cf4e2 = _0x17b79d[_0x23ecdc(0x238)][_0x23ecdc(0x3c3)][0x0][_0x23ecdc(0x256)][_0x1b5929 - _0x9f917a], _0x53278b['GL_dataCache']['highlights'][_0x242748] = _0x17b79d;
                }
                _0x4a14d1[_0x23ecdc(0x28d)] && (_0x52e360 = _0x3cf4e2[_0x23ecdc(0x3b9)]);
                if (_0x4a14d1[_0x23ecdc(0x428)] && !_0x53278b[_0x23ecdc(0x422)]) {
                    let _0x2afb22 = await _0x590a69(_0x3cf4e2['id']);
                    _0x2afb22[_0x23ecdc(0x3a9)] === 'ok' ? _0x3e3781(_0x2afb22[_0x23ecdc(0x256)][0x0]['image_versions2'][_0x23ecdc(0x413)][0x0][_0x23ecdc(0x466)], _0x3cb9ab, _0x23ecdc(0x42e), _0x52e360, _0x23ecdc(0x2bc), _0x242748) : (_0x4a14d1[_0x23ecdc(0x469)] ? (delete _0x53278b[_0x23ecdc(0x3d2)][_0x23ecdc(0x42e)][_0x242748], _0x53278b[_0x23ecdc(0x422)] = !![], _0xc41be9(!![])) : alert(_0x23ecdc(0x3e5) + _0x2afb22['message']), _0x13060d(_0x2afb22));
                } else
                    _0x3e3781(_0x3cf4e2[_0x23ecdc(0x352)]['at'](-0x1)[_0x23ecdc(0x3da)], _0x3cb9ab, _0x23ecdc(0x42e), _0x52e360, _0x23ecdc(0x2bc), _0x242748), _0x53278b[_0x23ecdc(0x422)] = ![];
                _0x273247(![]);
            } else {
                if (_0x2526ef(_0x23ecdc(0x3f6))[_0x23ecdc(0x2e8)]) {
                    if (!_0x2526ef(_0x23ecdc(0x342))[_0x23ecdc(0x2e8)]) {
                        let _0x528997 = null;
                        _0x2526ef(_0x23ecdc(0x25b))[_0x23ecdc(0x2e8)] > 0x0 ? _0x528997 = _0x2526ef(_0x23ecdc(0x3d4)) : (_0x528997 = _0x2526ef(_0x23ecdc(0x387)), _0x528997[_0x23ecdc(0x362)](_0x23ecdc(0x3c9), _0x23ecdc(0x297)));
                        if (_0x528997[_0x23ecdc(0x2e8)] === 0x0) {
                            let _0x5b9907 = _0x2526ef(_0x23ecdc(0x3fa)), _0x2f4fb0 = 0x0;
                            _0x5b9907[_0x23ecdc(0x20b)](function () {
                                const _0x16b776 = _0x23ecdc;
                                _0x2526ef(this)['width']() > _0x2f4fb0 && (_0x2f4fb0 = _0x2526ef(this)[_0x16b776(0x309)](), _0x528997 = _0x2526ef(this)[_0x16b776(0x3c6)]('div')[_0x16b776(0x399)]());
                            });
                        }
                        _0x528997 != null && _0x528997[_0x23ecdc(0x371)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x194f3c(_0x23ecdc(0x3d8)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x41f26c[_0x23ecdc(0x392)] + _0x23ecdc(0x3e2));
                    }
                } else
                    _0x2526ef('.IG_DWHISTORY_THUMBNAIL')[_0x23ecdc(0x474)]();
            }
        }
        function _0x3e5010(_0x2b832c, _0x120bd3) {
            const _0x5f5df1 = _0x479be8;
            _0x120bd3 === !![] && (_0x13060d(_0x5f5df1(0x40e), _0x5f5df1(0x368)), _0x2526ef(_0x5f5df1(0x2f5))[_0x5f5df1(0x2f1)](function () {
                const _0x59af64 = _0x5f5df1;
                return _0x2526ef(this)[_0x59af64(0x3aa)](_0x59af64(0x33e))[_0x59af64(0x2e8)] === 0x0;
            })['removeAttr']('data-snig'));
            if (_0x2b832c == ![]) {
                const _0x28917b = 0x64;
                let _0x400830 = 0x0;
                var _0x5d2b86 = setInterval(() => {
                    const _0x3b31bc = _0x5f5df1;
                    (_0x400830 > _0x28917b || _0x2526ef(_0x3b31bc(0x3cc))['length'] > 0x0) && (clearInterval(_0x5d2b86), _0x400830 > _0x28917b && console[_0x3b31bc(0x356)](_0x3b31bc(0x3b4), _0x3b31bc(0x33c))), _0x13060d(_0x3b31bc(0x3b4), _0x3b31bc(0x316)), _0x54e86(), _0x400830++;
                }, 0x32);
            } else
                _0x54e86();
        }
        function _0x375bf1(_0x5a49d0) {
            const _0x38e512 = _0x479be8;
            _0x4a14d1['DISABLE_VIDEO_LOOPING'] && _0x5a49d0[_0x38e512(0x3aa)](_0x38e512(0x276))['each'](function () {
                const _0x24727b = _0x38e512;
                _0x2526ef(this)['on'](_0x24727b(0x239), function () {
                    const _0x505c2d = _0x24727b;
                    !_0x2526ef(this)[_0x505c2d(0x238)](_0x505c2d(0x287)) && (_0x2526ef(this)[_0x505c2d(0x237)](_0x505c2d(0x3e9), !![]), this[_0x505c2d(0x23e)](), _0x13060d(_0x505c2d(0x34d)));
                });
            });
            _0x4a14d1['MODIFY_VIDEO_VOLUME'] && _0x5a49d0[_0x38e512(0x3aa)](_0x38e512(0x276))[_0x38e512(0x20b)](function () {
                _0x2526ef(this)['on']('play\x20playing', function () {
                    const _0x56908a = a0_0x49b2;
                    !_0x2526ef(this)['data']('modify') && (_0x2526ef(this)[_0x56908a(0x237)](_0x56908a(0x3eb), !![]), this[_0x56908a(0x3db)] = _0x53278b[_0x56908a(0x1f2)], _0x13060d(_0x56908a(0x453)));
                });
            });
            _0x4a14d1['HTML5_VIDEO_CONTROL'] && _0x5a49d0[_0x38e512(0x3aa)](_0x38e512(0x276))[_0x38e512(0x20b)](function () {
                const _0x37b428 = _0x38e512;
                if (!_0x2526ef(this)[_0x37b428(0x238)](_0x37b428(0x3d1))) {
                    let _0x109f75 = _0x2526ef(this);
                    _0x13060d(_0x37b428(0x324)), _0x4a14d1[_0x37b428(0x288)] && (this[_0x37b428(0x3db)] = _0x53278b[_0x37b428(0x1f2)], _0x2526ef(this)['on'](_0x37b428(0x2c5), function () {
                        this['volume'] = _0x53278b['videoVolume'];
                    })), _0x2526ef(this)['on'](_0x37b428(0x3c7), function (_0x15d620) {
                        const _0x4ae454 = _0x37b428;
                        _0x15d620[_0x4ae454(0x331)](), _0x109f75[_0x4ae454(0x362)](_0x4ae454(0x3f8), '-1'), _0x109f75[_0x4ae454(0x2ac)](_0x4ae454(0x3d1));
                    }), _0x2526ef(this)[_0x37b428(0x2d7)]()[_0x37b428(0x3aa)]('video\x20+\x20div\x20>\x20div')[_0x37b428(0x399)]()['on'](_0x37b428(0x3c7), function (_0x1884fc) {
                        const _0x1108d9 = _0x37b428;
                        _0x1884fc[_0x1108d9(0x331)](), _0x109f75[_0x1108d9(0x362)](_0x1108d9(0x3f8), '2'), _0x109f75['attr'](_0x1108d9(0x3d1), !![]);
                    }), _0x2526ef(this)['on'](_0x37b428(0x2da), function () {
                        const _0x16d991 = _0x37b428;
                        let _0x3fb48a = _0x2526ef(this)[_0x16d991(0x2d7)]()['find']('video\x20+\x20div\x20>\x20div')[_0x16d991(0x3aa)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x16d991(0x2f1)](function (_0x55f433) {
                            const _0x877292 = _0x16d991;
                            return _0x2526ef(this)[_0x877292(0x309)]() <= 0x40 && _0x2526ef(this)[_0x877292(0x2cf)]() <= 0x40 && _0x2526ef(this)['find'](_0x877292(0x3d9))[_0x877292(0x2e8)] > 0x0;
                        });
                        var _0x2d05eb = _0x3fb48a[_0x16d991(0x3aa)](_0x16d991(0x221))['length'] === 0x0;
                        this['muted'] != _0x2d05eb && (this[_0x16d991(0x3db)] = _0x53278b['videoVolume'], _0x3fb48a?.['trigger'](_0x16d991(0x3fb))), _0x2526ef(this)['attr'](_0x16d991(0x2de)) && (_0x53278b['videoVolume'] = this[_0x16d991(0x3db)], GM_setValue(_0x16d991(0x27d), this[_0x16d991(0x3db)])), this[_0x16d991(0x3db)] == _0x53278b['videoVolume'] && _0x2526ef(this)[_0x16d991(0x237)](_0x16d991(0x2de), !![]);
                    }), _0x2526ef(this)[_0x37b428(0x362)](_0x37b428(0x3c9), _0x37b428(0x2ef)), _0x2526ef(this)[_0x37b428(0x362)](_0x37b428(0x3f8), '2'), _0x2526ef(this)[_0x37b428(0x237)]('data-controls', !![]), _0x2526ef(this)['attr']('controls', !![]);
                }
            });
            var _0x125d23 = _0x5a49d0[_0x38e512(0x3aa)](_0x38e512(0x276)), _0x2c0f60 = _0x5a49d0[_0x38e512(0x3aa)](_0x38e512(0x31e))[_0x38e512(0x399)]();
            _0xcc095b(_0x125d23, _0x2c0f60, _0x38e512(0x2b5), _0x38e512(0x312));
        }
        ;
        function _0x54e86() {
            const _0x48b1fc = _0x479be8;
            _0x2526ef(_0x48b1fc(0x26e))[_0x48b1fc(0x3f4)](function (_0xf06249) {
                const _0x129e71 = _0x48b1fc;
                return _0x2526ef(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x2526ef(this)[_0x129e71(0x2d7)]()['parent']()[_0x129e71(0x2d7)]()[_0x129e71(0x2d7)]()[0x0] : this;
            })[_0x48b1fc(0x2f1)](function () {
                const _0x2242d7 = _0x48b1fc;
                return _0x2526ef(this)[_0x2242d7(0x2cf)]() > 0x0 && _0x2526ef(this)[_0x2242d7(0x309)]() > 0x0;
            })[_0x48b1fc(0x20b)](function (_0x3d985f) {
                const _0x642a4e = _0x48b1fc;
                if (!_0x2526ef(this)[_0x642a4e(0x237)](_0x642a4e(0x329)) && !_0x2526ef(this)[_0x642a4e(0x1f5)]('x1iyjqo2') && !_0x2526ef(this)[_0x642a4e(0x3c6)]('article')?.[_0x642a4e(0x1f5)](_0x642a4e(0x44e)) && _0x2526ef(this)[_0x642a4e(0x37f)](_0x642a4e(0x22b))[_0x642a4e(0x2e8)] === 0x0) {
                    _0x13060d(_0x642a4e(0x40f), _0x2526ef(this));
                    const _0x2e3446 = _0x2526ef(this), _0xd05b34 = this[_0x642a4e(0x1f4)], _0x152bfd = _0x642a4e(0x427);
                    if (_0xd05b34 === _0x642a4e(0x3b3) && _0x3d985f != 0x0)
                        return;
                    const _0x102abd = _0x2e3446[_0x642a4e(0x3c6)](_0x642a4e(0x449))[_0x642a4e(0x3c6)](_0x642a4e(0x449));
                    if (_0x102abd[_0x642a4e(0x2e8)] === 0x0)
                        return;
                    _0x13060d('Found\x20insert\x20point', _0x102abd);
                    if (_0x2e3446[_0x642a4e(0x3aa)](_0x642a4e(0x2d3))['length'] > 0x0) {
                        _0x2e3446[_0x642a4e(0x3aa)](_0x642a4e(0x344))[_0x642a4e(0x2e8)] > 0x0 && _0x2e3446[_0x642a4e(0x3aa)](_0x642a4e(0x344))[_0x642a4e(0x362)]('top', _0x642a4e(0x37b));
                        const _0x1f3cca = _0x2e3446[_0x642a4e(0x3aa)](_0x642a4e(0x2d3))[_0x642a4e(0x399)]()[_0x642a4e(0x2d7)]()[0x0];
                        var _0x573236 = new MutationObserver(function () {
                            const _0x11f390 = _0x642a4e;
                            _0x2e3446[_0x11f390(0x3aa)](_0x11f390(0x344))[_0x11f390(0x362)](_0x11f390(0x45b), _0x11f390(0x37b));
                        });
                        _0x573236[_0x642a4e(0x431)](_0x1f3cca, { 'childList': !![] });
                    }
                    _0x102abd['eq'](_0xd05b34 === _0x642a4e(0x3b3) ? 0x0 : _0x102abd[_0x642a4e(0x2e8)] - 0x2)[_0x642a4e(0x371)](_0x642a4e(0x31a));
                    const _0x301679 = _0x642a4e(0x3ae) + _0x194f3c('DW') + _0x642a4e(0x208) + _0x41f26c[_0x642a4e(0x217)] + _0x642a4e(0x3e2), _0x2f9189 = _0x642a4e(0x32d) + _0x194f3c(_0x642a4e(0x3cf)) + _0x642a4e(0x310) + _0x41f26c[_0x642a4e(0x3cf)] + '</div>', _0x418640 = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x194f3c(_0x642a4e(0x3d8)) + _0x642a4e(0x3ed) + _0x41f26c[_0x642a4e(0x392)] + '</div>';
                    _0x102abd[_0x642a4e(0x3aa)](_0x642a4e(0x248))[_0x642a4e(0x371)](_0x301679);
                    const _0x44910b = _0x2e3446[_0x642a4e(0x3aa)](_0x152bfd)[_0x642a4e(0x2e8)];
                    if (_0x44910b > 0x1 && _0x4a14d1[_0x642a4e(0x2b3)] && !_0x4a14d1[_0x642a4e(0x286)]) {
                        const _0x859c25 = '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x194f3c(_0x642a4e(0x202)) + _0x642a4e(0x341) + _0x41f26c[_0x642a4e(0x27e)] + _0x642a4e(0x3e2);
                        _0x102abd[_0x642a4e(0x3aa)](_0x642a4e(0x248))[_0x642a4e(0x371)](_0x859c25);
                    }
                    _0x102abd[_0x642a4e(0x3aa)](_0x642a4e(0x248))[_0x642a4e(0x371)](_0x2f9189), setTimeout(() => {
                        const _0x484801 = _0x642a4e;
                        if (_0x102abd['eq'](_0xd05b34 === 'DIV' ? 0x0 : _0x102abd[_0x484801(0x2e8)] - 0x2)[_0x484801(0x3aa)](_0x484801(0x29e))[_0x484801(0x2e8)] === 0x0)
                            _0x102abd[_0x484801(0x3aa)]('video')[_0x484801(0x2e8)] > 0x0 && _0x102abd[_0x484801(0x3aa)]('.button_wrapper')[_0x484801(0x371)](_0x418640);
                        else {
                            const _0x3a5b00 = (_0x1ed6b3, _0x117ab7) => {
                                    const _0x41c521 = _0x484801;
                                    _0x1ed6b3[_0x41c521(0x451)](_0x462dc0 => {
                                        const _0x51cc1e = _0x41c521;
                                        if (_0x462dc0['isIntersecting']) {
                                            var _0x13fa78 = _0x2526ef(_0x462dc0[_0x51cc1e(0x295)]);
                                            _0x13fa78[_0x51cc1e(0x3aa)](_0x51cc1e(0x276))[_0x51cc1e(0x2e8)] > 0x0 ? (_0x102abd[_0x51cc1e(0x3aa)](_0x51cc1e(0x37c))[_0x51cc1e(0x2e8)] === 0x0 && _0x102abd['find'](_0x51cc1e(0x248))[_0x51cc1e(0x371)](_0x418640), _0x375bf1(_0x2e3446)) : _0x102abd[_0x51cc1e(0x3aa)](_0x51cc1e(0x37c))?.[_0x51cc1e(0x474)]();
                                        }
                                    });
                                }, _0x23a6ec = new IntersectionObserver(_0x3a5b00, {
                                    'root': _0x2e3446['find'](_0x484801(0x38a))['first']()[_0x484801(0x2d7)]()['parent']()[_0x484801(0x2d7)]()[0x0],
                                    'rootMargin': _0x484801(0x406),
                                    'threshold': 0.1
                                }), _0x10afc2 = new MutationObserver(function (_0x5ce2ec, _0x2a0783) {
                                    const _0x476a0e = _0x484801;
                                    var _0x2f2635 = _0x5ce2ec['at'](0x0)?.[_0x476a0e(0x295)];
                                    _0x2526ef(_0x2f2635)[_0x476a0e(0x3aa)](_0x476a0e(0x240))[_0x476a0e(0x20b)](function () {
                                        const _0xe44e26 = _0x476a0e;
                                        _0x23a6ec[_0xe44e26(0x431)](this);
                                    });
                                });
                            _0x2e3446['find'](_0x484801(0x29e))[_0x484801(0x20b)](function () {
                                const _0x17ef01 = _0x484801;
                                _0x23a6ec[_0x17ef01(0x431)](this);
                            });
                            const _0x2f3164 = _0x102abd['eq'](_0xd05b34 === _0x484801(0x3b3) ? 0x0 : _0x102abd[_0x484801(0x2e8)] - 0x2)[_0x484801(0x3aa)]('div\x20>\x20ul\x20li._acaz')?.[_0x484801(0x2d7)]()[0x0], _0x4eb8b9 = _0x102abd['eq'](_0xd05b34 === _0x484801(0x3b3) ? 0x0 : _0x102abd['length'] - 0x2)['find'](_0x484801(0x29e))?.[_0x484801(0x2d7)]()[_0x484801(0x2d7)]()[0x0];
                            _0x2f3164 && _0x10afc2[_0x484801(0x431)](_0x2f3164, { 'childList': !![] }), _0x4eb8b9 && _0x10afc2[_0x484801(0x431)](_0x4eb8b9, { 'attributes': !![] });
                        }
                    }, 0x32), _0x102abd[_0x642a4e(0x362)](_0x642a4e(0x3c9), _0x642a4e(0x297)), _0x375bf1(_0x2e3446), _0x53278b[_0x642a4e(0x3cd)][_0x642a4e(0x402)]({
                        'element': this,
                        'trigger': [
                            '.SNKMS_IG_THUMBNAIL_MAIN',
                            _0x642a4e(0x36a),
                            _0x642a4e(0x396),
                            '.SNKMS_IG_DW_MAIN'
                        ]
                    }), _0x2526ef(this)['on'](_0x642a4e(0x3fb), _0x642a4e(0x37c), function () {
                        const _0xe54481 = _0x642a4e;
                        _0x273247(!![]), _0x53278b[_0xe54481(0x409)] = _0x2e3446[_0xe54481(0x237)](_0xe54481(0x39d)), _0x53278b[_0xe54481(0x336)] = location['pathname']['replace'](/\/$/, '')[_0xe54481(0x345)]('/')['at'](-0x1) || _0x2e3446['find'](_0xe54481(0x1fd))[_0xe54481(0x399)]()[_0xe54481(0x237)](_0xe54481(0x300))[_0xe54481(0x345)]('/')['at'](0x2) || _0x2526ef(this)[_0xe54481(0x2d7)]()['parent']()[_0xe54481(0x2d7)]()[_0xe54481(0x3c6)](_0xe54481(0x24b))['children'](_0xe54481(0x449))['children'](_0xe54481(0x24b))[_0xe54481(0x3aa)]('a[href^=\x22/p/\x22]')['last']()['attr']('href')[_0xe54481(0x345)]('/')['at'](0x2);
                        var _0x147a22 = _0x309e84(_0x2e3446);
                        _0x57a0cc(!![], ![]), _0x13edd0(_0x53278b[_0xe54481(0x336)], _0xe54481(0x390), '')[_0xe54481(0x2d8)](() => {
                            let _0x444770 = setInterval(() => {
                                const _0x20172c = a0_0x49b2;
                                if (_0x2526ef(_0x20172c(0x252))[_0x20172c(0x2e8)] > 0x0) {
                                    clearInterval(_0x444770);
                                    var _0x5dd4cc = _0x2526ef(_0x20172c(0x470) + (_0x147a22 + 0x1) + '\x22]')?.[_0x20172c(0x2d7)]()[_0x20172c(0x3aa)](_0x20172c(0x207))?.[_0x20172c(0x399)]();
                                    _0x5dd4cc != null && _0x5dd4cc[_0x20172c(0x2e8)] > 0x0 ? _0x5dd4cc[_0x20172c(0x3af)](_0x20172c(0x3fb)) : alert(_0x20172c(0x20f)), _0x273247(![]), _0x2526ef('.IG_SN_DIG')[_0x20172c(0x474)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x2526ef(this)['on'](_0x642a4e(0x3fb), _0x642a4e(0x36a), function () {
                        const _0x169987 = _0x642a4e;
                        _0x273247(!![]), _0x53278b[_0x169987(0x409)] = _0x2e3446[_0x169987(0x237)](_0x169987(0x39d)), _0x53278b[_0x169987(0x336)] = location['pathname'][_0x169987(0x43f)](/\/$/, '')[_0x169987(0x345)]('/')['at'](-0x1) || _0x2e3446['find']('a[href^=\x22/p/\x22]')[_0x169987(0x399)]()['attr'](_0x169987(0x300))[_0x169987(0x345)]('/')['at'](0x2) || _0x2526ef(this)[_0x169987(0x2d7)]()[_0x169987(0x2d7)]()[_0x169987(0x2d7)]()[_0x169987(0x3c6)](_0x169987(0x24b))[_0x169987(0x3c6)]('div')[_0x169987(0x3c6)]('div:last-child')[_0x169987(0x3aa)](_0x169987(0x1fd))[_0x169987(0x360)]()['attr']('href')['split']('/')['at'](0x2);
                        var _0x2aaae1 = _0x309e84(_0x2e3446);
                        _0x57a0cc(!![], ![]), _0x13edd0(_0x53278b[_0x169987(0x336)], _0x169987(0x390), '')['then'](() => {
                            let _0x43ecf4 = setInterval(() => {
                                const _0x3c3593 = a0_0x49b2;
                                if (_0x2526ef(_0x3c3593(0x252))[_0x3c3593(0x2e8)] > 0x0) {
                                    clearInterval(_0x43ecf4);
                                    var _0x52b07e = _0x2526ef(_0x3c3593(0x470) + (_0x2aaae1 + 0x1) + '\x22]');
                                    if (_0x4a14d1['FORCE_RESOURCE_VIA_MEDIA'] && _0x4a14d1[_0x3c3593(0x3f9)])
                                        _0x3c0549(_0x52b07e[_0x3c3593(0x399)]()[0x0], !![]);
                                    else {
                                        let _0x3bd66d = _0x52b07e?.['attr'](_0x3c3593(0x446));
                                        if (_0x3bd66d) {
                                            var _0x296d21 = new URL(_0x3bd66d);
                                            _0x296d21[_0x3c3593(0x25e)] = 'scontent.cdninstagram.com', _0x26174e(_0x296d21[_0x3c3593(0x300)]);
                                        } else
                                            alert('Can\x20not\x20find\x20open\x20tab\x20url.');
                                    }
                                    _0x273247(![]), _0x2526ef(_0x3c3593(0x24e))[_0x3c3593(0x474)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x2526ef(this)['on']('click', _0x642a4e(0x396), async function () {
                        const _0x5ea25a = _0x642a4e;
                        _0x53278b[_0x5ea25a(0x409)] = _0x2e3446['attr']('data-username'), _0x53278b[_0x5ea25a(0x336)] = location[_0x5ea25a(0x2f2)]['replace'](/\/$/, '')[_0x5ea25a(0x345)]('/')['at'](-0x1) || _0x2e3446['find'](_0x5ea25a(0x1fd))['first']()[_0x5ea25a(0x237)](_0x5ea25a(0x300))[_0x5ea25a(0x345)]('/')['at'](0x2) || _0x2526ef(this)[_0x5ea25a(0x2d7)]()[_0x5ea25a(0x2d7)]()[_0x5ea25a(0x2d7)]()[_0x5ea25a(0x3c6)]('div:last-child')[_0x5ea25a(0x3c6)](_0x5ea25a(0x449))[_0x5ea25a(0x3c6)](_0x5ea25a(0x24b))[_0x5ea25a(0x3aa)]('a[href^=\x22/p/\x22]')[_0x5ea25a(0x360)]()[_0x5ea25a(0x237)](_0x5ea25a(0x300))[_0x5ea25a(0x345)]('/')['at'](0x2), _0x57a0cc(_0x4a14d1[_0x5ea25a(0x286)], !![]), _0x2526ef(_0x5ea25a(0x2fd))[_0x5ea25a(0x1fc)](_0x5ea25a(0x351) + _0x53278b['GL_postPath'] + '\x22>' + _0x53278b['GL_postPath'] + '</a>'), _0x2526ef(_0x5ea25a(0x252))[_0x5ea25a(0x20b)](function () {
                            const _0x1cbbb5 = _0x5ea25a;
                            _0x2526ef(this)['wrap'](_0x1cbbb5(0x2c6)), _0x2526ef(this)[_0x1cbbb5(0x33f)](_0x1cbbb5(0x475)), _0x2526ef(this)[_0x1cbbb5(0x38c)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x194f3c('NEW_TAB') + _0x1cbbb5(0x3a3) + _0x41f26c['NEW_TAB'] + _0x1cbbb5(0x3e2)), _0x2526ef(this)[_0x1cbbb5(0x237)]('data-name') == 'video' && _0x2526ef(this)[_0x1cbbb5(0x38c)](_0x1cbbb5(0x3b2) + _0x194f3c(_0x1cbbb5(0x3d8)) + _0x1cbbb5(0x284) + _0x41f26c[_0x1cbbb5(0x392)] + _0x1cbbb5(0x3e2));
                        }), _0x13edd0(_0x53278b['GL_postPath'], _0x5ea25a(0x390), _0x194f3c(_0x5ea25a(0x358)))[_0x5ea25a(0x2d8)](() => {
                            let _0x24840f = setInterval(() => {
                                const _0x1a666c = a0_0x49b2;
                                _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x1a666c(0x2e8)] > 0x0 && (clearInterval(_0x24840f), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x1a666c(0x20b)](function () {
                                    const _0x524881 = _0x1a666c;
                                    _0x2526ef(this)[_0x524881(0x3af)]('click');
                                }), _0x2526ef('.IG_SN_DIG')[_0x1a666c(0x474)]());
                            }, 0xfa);
                        });
                    }), _0x2526ef(this)['on'](_0x642a4e(0x3fb), _0x642a4e(0x33e), async function () {
                        const _0x455cbf = _0x642a4e;
                        _0x53278b[_0x455cbf(0x409)] = _0x2e3446[_0x455cbf(0x237)]('data-username'), _0x53278b['GL_postPath'] = location[_0x455cbf(0x2f2)][_0x455cbf(0x43f)](/\/$/, '')[_0x455cbf(0x345)]('/')['at'](-0x1) || _0x2e3446[_0x455cbf(0x3aa)](_0x455cbf(0x1fd))['first']()['attr'](_0x455cbf(0x300))[_0x455cbf(0x345)]('/')['at'](0x2) || _0x2526ef(this)[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]()['parent']()[_0x455cbf(0x3c6)]('div:last-child')['children']('div')[_0x455cbf(0x3c6)](_0x455cbf(0x24b))[_0x455cbf(0x3aa)](_0x455cbf(0x1fd))[_0x455cbf(0x360)]()[_0x455cbf(0x237)](_0x455cbf(0x300))['split']('/')['at'](0x2), _0x57a0cc(_0x4a14d1[_0x455cbf(0x286)], !![]), _0x2526ef(_0x455cbf(0x2fd))[_0x455cbf(0x1fc)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x53278b[_0x455cbf(0x336)] + '\x22>' + _0x53278b[_0x455cbf(0x336)] + _0x455cbf(0x277));
                        if (_0x4a14d1[_0x455cbf(0x2b3)]) {
                            _0x273247(!![]), _0x21fe09(!![]);
                            var _0x363eb8 = _0x309e84(_0x2526ef(this)[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]());
                            _0x13edd0(_0x53278b['GL_postPath'], _0x455cbf(0x390), '')[_0x455cbf(0x2d8)](() => {
                                let _0x5126eb = setInterval(() => {
                                    const _0x560098 = a0_0x49b2;
                                    if (_0x2526ef(_0x560098(0x252))[_0x560098(0x2e8)] > 0x0) {
                                        clearInterval(_0x5126eb);
                                        var _0x549d78 = _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x363eb8 + 0x1) + '\x22]')?.[_0x560098(0x237)](_0x560098(0x446));
                                        _0x549d78 ? (_0x273247(![]), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x363eb8 + 0x1) + '\x22]')?.[_0x560098(0x3af)](_0x560098(0x3fb))) : alert(_0x560098(0x343)), _0x2526ef(_0x560098(0x24e))[_0x560098(0x474)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x4a14d1[_0x455cbf(0x286)]) {
                            var _0x4e112e = 0x0, _0xf118bf = _0x2526ef(this)[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]()[_0x455cbf(0x3aa)](_0x152bfd)['length'], _0xbe6882 = _0x4a14d1['FORCE_FETCH_ALL_RESOURCES'], _0x15308c = new Date(_0x2526ef(this)['parent']()['parent']()[_0x455cbf(0x3aa)]('a[href^=\x22/p/\x22]\x20time[datetime]')['first']()[_0x455cbf(0x237)](_0x455cbf(0x1f9)))['getTime']();
                            if (_0xf118bf)
                                _0x2526ef(this)[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]()[_0x455cbf(0x3aa)](_0x152bfd)[_0x455cbf(0x20b)](function () {
                                    const _0x28b960 = _0x455cbf;
                                    let _0x406d4a = _0x2526ef(this)['parent']()[_0x28b960(0x2d7)]()['parent']()['find'](_0x28b960(0x276));
                                    _0x406d4a && _0x406d4a[_0x28b960(0x237)]('src') && (_0xbe6882 = !![]);
                                }), _0xbe6882 || _0x4a14d1[_0x455cbf(0x428)] ? _0x13edd0(_0x53278b[_0x455cbf(0x336)], _0x455cbf(0x390), _0x194f3c(_0x455cbf(0x358))) : (_0x2526ef(this)[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]()[_0x455cbf(0x3aa)](_0x152bfd)[_0x455cbf(0x20b)](function () {
                                    const _0x47ebb9 = _0x455cbf;
                                    _0x4e112e++;
                                    let _0x2cdd2d = _0x2526ef(this)[_0x47ebb9(0x3aa)](_0x47ebb9(0x276)), _0x2e314c = _0x2526ef(this)['find'](_0x47ebb9(0x2e5)), _0x5d7330 = _0x2e314c['attr']('srcset') ? _0x2e314c[_0x47ebb9(0x237)]('srcset')[_0x47ebb9(0x345)]('\x20')[0x0] : _0x2e314c[_0x47ebb9(0x237)](_0x47ebb9(0x3da));
                                    _0x2cdd2d && _0x2cdd2d[_0x47ebb9(0x237)](_0x47ebb9(0x3da)) && (_0xbe6882 = !![]), _0x2e314c && _0x5d7330 && _0x2526ef(_0x47ebb9(0x390))[_0x47ebb9(0x371)](_0x47ebb9(0x414) + _0x15308c + _0x47ebb9(0x456) + _0x53278b['GL_postPath'] + _0x47ebb9(0x2b2) + _0x4e112e + _0x47ebb9(0x20e) + _0x5d7330 + _0x47ebb9(0x441) + _0x5d7330 + _0x47ebb9(0x3c5) + _0x194f3c('IMG') + '</span>\x20' + _0x4e112e + _0x47ebb9(0x28c));
                                }), _0xbe6882 && _0x13edd0(_0x53278b['GL_postPath'], _0x455cbf(0x390), _0x194f3c(_0x455cbf(0x323))));
                            else {
                                if (_0x4a14d1[_0x455cbf(0x428)])
                                    _0x13edd0(_0x53278b['GL_postPath'], _0x455cbf(0x390), _0x194f3c('LOAD_BLOB_MULTIPLE'));
                                else {
                                    _0x4e112e++;
                                    let _0x410dc9 = _0x2526ef(this)[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]()[_0x455cbf(0x3aa)](_0x455cbf(0x276)), _0x56183e = _0x2526ef(this)[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]()[_0x455cbf(0x2d7)]()[_0x455cbf(0x3aa)](_0x455cbf(0x2e5)), _0x5943ac = _0x56183e[_0x455cbf(0x237)](_0x455cbf(0x2c7)) ? _0x56183e[_0x455cbf(0x237)](_0x455cbf(0x2c7))[_0x455cbf(0x345)]('\x20')[0x0] : _0x56183e['attr'](_0x455cbf(0x3da));
                                    _0x410dc9 && _0x410dc9['attr'](_0x455cbf(0x3da)) && _0x13edd0(_0x53278b[_0x455cbf(0x336)], _0x455cbf(0x390), _0x194f3c(_0x455cbf(0x2b7))), _0x56183e && _0x5943ac && _0x2526ef(_0x455cbf(0x390))['append']('<a\x20datetime=\x22' + _0x15308c + _0x455cbf(0x456) + _0x53278b[_0x455cbf(0x336)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x4e112e + _0x455cbf(0x388) + _0x5943ac + _0x455cbf(0x441) + _0x5943ac + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x194f3c(_0x455cbf(0x2e6)) + _0x455cbf(0x411) + _0x4e112e + _0x455cbf(0x28c));
                                }
                            }
                        }
                        _0x2526ef(_0x455cbf(0x252))[_0x455cbf(0x20b)](function () {
                            const _0x3fb387 = _0x455cbf;
                            _0x2526ef(this)[_0x3fb387(0x2bf)]('<div></div>'), _0x2526ef(this)[_0x3fb387(0x33f)](_0x3fb387(0x475)), _0x2526ef(this)[_0x3fb387(0x38c)](_0x3fb387(0x32d) + _0x194f3c('NEW_TAB') + '\x22\x20class=\x22newTab\x22>' + _0x41f26c['NEW_TAB'] + _0x3fb387(0x3e2)), _0x2526ef(this)[_0x3fb387(0x237)](_0x3fb387(0x46a)) == 'video' && _0x2526ef(this)['after'](_0x3fb387(0x3b2) + _0x194f3c(_0x3fb387(0x3d8)) + _0x3fb387(0x284) + _0x41f26c[_0x3fb387(0x392)] + _0x3fb387(0x3e2));
                        }), _0x4a14d1[_0x455cbf(0x286)] && _0x13edd0(_0x53278b[_0x455cbf(0x336)], _0x455cbf(0x390), _0x194f3c(_0x455cbf(0x358)))[_0x455cbf(0x2d8)](() => {
                            let _0x5ab48d = setInterval(() => {
                                const _0x5716bc = a0_0x49b2;
                                _0x2526ef(_0x5716bc(0x252))[_0x5716bc(0x2e8)] > 0x0 && (clearInterval(_0x5ab48d), _0x2526ef(_0x5716bc(0x252))[_0x5716bc(0x20b)](function () {
                                    const _0x48fc1c = _0x5716bc;
                                    _0x2526ef(this)[_0x48fc1c(0x3af)](_0x48fc1c(0x3fb));
                                }), _0x2526ef('.IG_SN_DIG')['remove']());
                            }, 0xfa);
                        });
                    });
                    var _0x555278 = _0x2526ef(this)['find']('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x642a4e(0x399)]()[_0x642a4e(0x40a)]() || _0x2526ef(this)[_0x642a4e(0x3aa)]('a[href^=\x22/\x22]')[_0x642a4e(0x2f1)](function () {
                        const _0x1673f3 = _0x642a4e;
                        return _0x2526ef(this)?.[_0x1673f3(0x40a)]()?.[_0x1673f3(0x2e8)] > 0x0;
                    })['first']()[_0x642a4e(0x40a)]();
                    _0x2526ef(this)[_0x642a4e(0x237)](_0x642a4e(0x329), _0x642a4e(0x306)), _0x2526ef(this)[_0x642a4e(0x237)](_0x642a4e(0x39d), _0x555278);
                }
            });
        }
        function _0x580883(_0x531b26) {
            const _0x227003 = _0x479be8;
            var _0xa3b665 = _0x531b26[_0x227003(0x229)] ?? _0x531b26;
            return _0xa3b665[_0x227003(0x3b7)] == null && _0xa3b665['user'] != null && (_0xa3b665[_0x227003(0x3b7)] = _0xa3b665[_0x227003(0x3e8)]), _0xa3b665[_0x227003(0x3b7)] == null && (_0x13060d(_0x227003(0x223), _0x227003(0x364)), alert(_0x227003(0x210))), _0xa3b665;
        }
        async function _0x13edd0(_0x2f46be, _0xeeaa48, _0x26a39d) {
            const _0x89cb12 = _0x479be8;
            try {
                _0x2526ef(_0xeeaa48 + '\x20a')[_0x89cb12(0x474)](), _0x2526ef(_0xeeaa48)['append'](_0x89cb12(0x28e) + _0x26a39d + _0x89cb12(0x34c));
                let _0x471eaa = await _0x51b7ef(_0x2f46be), _0x5d1c4a = _0x580883(_0x471eaa['data']);
                if (_0x471eaa['type'] === 'query_hash') {
                    let _0x31fd32 = 0x1;
                    _0x5d1c4a[_0x89cb12(0x27b)] == _0x89cb12(0x338) && _0x5d1c4a[_0x89cb12(0x43b)] && (_0x2526ef(_0xeeaa48)[_0x89cb12(0x371)](_0x89cb12(0x3c1) + _0x5d1c4a['id'] + _0x89cb12(0x225) + _0x5d1c4a[_0x89cb12(0x3b9)] + _0x89cb12(0x299) + _0x5d1c4a[_0x89cb12(0x460)] + _0x89cb12(0x382) + _0x5d1c4a[_0x89cb12(0x3b7)]['username'] + '\x22\x20data-globalIndex=\x22' + _0x31fd32 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x5d1c4a['video_url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5d1c4a[_0x89cb12(0x352)][0x1]['src'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x194f3c('VID') + _0x89cb12(0x411) + _0x31fd32 + _0x89cb12(0x28c)), _0x31fd32++);
                    _0x5d1c4a['__typename'] == 'GraphImage' && (_0x2526ef(_0xeeaa48)['append'](_0x89cb12(0x3c1) + _0x5d1c4a['id'] + _0x89cb12(0x225) + _0x5d1c4a[_0x89cb12(0x3b9)] + _0x89cb12(0x299) + _0x5d1c4a[_0x89cb12(0x460)] + _0x89cb12(0x2ad) + _0x5d1c4a[_0x89cb12(0x3b7)][_0x89cb12(0x383)] + _0x89cb12(0x3bc) + _0x31fd32 + _0x89cb12(0x20e) + _0x5d1c4a['display_resources'][_0x5d1c4a['display_resources'][_0x89cb12(0x2e8)] - 0x1]['src'] + _0x89cb12(0x441) + _0x5d1c4a[_0x89cb12(0x352)][0x1][_0x89cb12(0x3da)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x194f3c('IMG') + _0x89cb12(0x411) + _0x31fd32 + _0x89cb12(0x28c)), _0x31fd32++);
                    if (_0x5d1c4a[_0x89cb12(0x27b)] == _0x89cb12(0x30e) && _0x5d1c4a['edge_sidecar_to_children'])
                        for (let _0x5d0357 of _0x5d1c4a[_0x89cb12(0x43c)]['edges']) {
                            _0x5d0357[_0x89cb12(0x374)][_0x89cb12(0x27b)] == _0x89cb12(0x338) && _0x2526ef(_0xeeaa48)[_0x89cb12(0x371)]('<a\x20media-id=\x22' + _0x5d0357[_0x89cb12(0x374)]['id'] + _0x89cb12(0x225) + _0x5d1c4a[_0x89cb12(0x3b9)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x5d1c4a['shortcode'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x5d1c4a['owner'][_0x89cb12(0x383)] + '\x22\x20data-globalIndex=\x22' + _0x31fd32 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x5d0357['node'][_0x89cb12(0x43b)] + _0x89cb12(0x441) + _0x5d0357[_0x89cb12(0x374)][_0x89cb12(0x352)][0x1][_0x89cb12(0x3da)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x194f3c(_0x89cb12(0x29d)) + _0x89cb12(0x411) + _0x31fd32 + _0x89cb12(0x28c)), _0x5d0357['node'][_0x89cb12(0x27b)] == _0x89cb12(0x20a) && _0x2526ef(_0xeeaa48)[_0x89cb12(0x371)](_0x89cb12(0x3c1) + _0x5d0357[_0x89cb12(0x374)]['id'] + _0x89cb12(0x225) + _0x5d1c4a[_0x89cb12(0x3b9)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x5d1c4a[_0x89cb12(0x460)] + _0x89cb12(0x2ad) + _0x5d1c4a[_0x89cb12(0x3b7)]['username'] + _0x89cb12(0x3bc) + _0x31fd32 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x5d0357[_0x89cb12(0x374)][_0x89cb12(0x352)][_0x5d0357[_0x89cb12(0x374)][_0x89cb12(0x352)][_0x89cb12(0x2e8)] - 0x1][_0x89cb12(0x3da)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5d0357[_0x89cb12(0x374)][_0x89cb12(0x352)][0x1][_0x89cb12(0x3da)] + _0x89cb12(0x3c5) + _0x194f3c('IMG') + _0x89cb12(0x411) + _0x31fd32 + _0x89cb12(0x28c)), _0x31fd32++;
                        }
                } else {
                    if (_0x5d1c4a[_0x89cb12(0x257)])
                        _0x13060d(_0x89cb12(0x257)), _0x5d1c4a[_0x89cb12(0x257)]['forEach']((_0x29c8f3, _0x281bd6) => {
                            const _0x256284 = _0x89cb12;
                            let _0x47be25 = _0x281bd6 + 0x1;
                            _0x29c8f3['video_versions'] == null ? (_0x29c8f3[_0x256284(0x29c)]['candidates'][_0x256284(0x43d)](function (_0x2d0661, _0xd1974f) {
                                const _0x4aa6b9 = _0x256284;
                                let _0x37c8e9 = new URL(_0x2d0661[_0x4aa6b9(0x466)])['searchParams']['get'](_0x4aa6b9(0x219)), _0x33d941 = new URL(_0xd1974f[_0x4aa6b9(0x466)])[_0x4aa6b9(0x279)][_0x4aa6b9(0x212)]('stp');
                                if (_0x37c8e9 && _0x33d941) {
                                    if (_0x37c8e9[_0x4aa6b9(0x2e8)] > _0x33d941[_0x4aa6b9(0x2e8)])
                                        return 0x1;
                                    if (_0x37c8e9[_0x4aa6b9(0x2e8)] < _0x33d941[_0x4aa6b9(0x2e8)])
                                        return -0x1;
                                } else {
                                    if (_0x2d0661[_0x4aa6b9(0x309)] < _0xd1974f[_0x4aa6b9(0x309)])
                                        return 0x1;
                                    if (_0x2d0661[_0x4aa6b9(0x309)] > _0xd1974f[_0x4aa6b9(0x309)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x2526ef(_0xeeaa48)[_0x256284(0x371)](_0x256284(0x3c1) + _0x29c8f3['pk'] + '\x22\x20datetime=\x22' + _0x29c8f3[_0x256284(0x3e3)] + _0x256284(0x299) + _0x5d1c4a[_0x256284(0x302)] + _0x256284(0x2ad) + _0x5d1c4a[_0x256284(0x3b7)][_0x256284(0x383)] + _0x256284(0x3bc) + _0x47be25 + _0x256284(0x20e) + _0x29c8f3['image_versions2'][_0x256284(0x413)][0x0]['url'] + _0x256284(0x441) + _0x29c8f3[_0x256284(0x29c)][_0x256284(0x413)][0x0][_0x256284(0x466)] + _0x256284(0x3c5) + _0x194f3c(_0x256284(0x2e6)) + _0x256284(0x411) + _0x47be25 + _0x256284(0x28c))) : _0x2526ef(_0xeeaa48)['append'](_0x256284(0x3c1) + _0x29c8f3['pk'] + _0x256284(0x225) + _0x29c8f3[_0x256284(0x3e3)] + _0x256284(0x299) + _0x5d1c4a['code'] + _0x256284(0x382) + _0x5d1c4a[_0x256284(0x3b7)][_0x256284(0x383)] + '\x22\x20data-globalIndex=\x22' + _0x47be25 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x29c8f3[_0x256284(0x39f)][0x0][_0x256284(0x466)] + _0x256284(0x441) + _0x29c8f3[_0x256284(0x29c)][_0x256284(0x413)][0x0][_0x256284(0x466)] + _0x256284(0x463) + _0x194f3c('VID') + _0x256284(0x411) + _0x47be25 + '\x20-</a>');
                        });
                    else {
                        let _0x2ebcb3 = 0x1;
                        _0x5d1c4a[_0x89cb12(0x39f)] == null ? (_0x5d1c4a[_0x89cb12(0x29c)][_0x89cb12(0x413)][_0x89cb12(0x43d)](function (_0x8d212e, _0x54b81e) {
                            const _0x24afcf = _0x89cb12;
                            let _0x1dcf54 = new URL(_0x8d212e[_0x24afcf(0x466)])[_0x24afcf(0x279)][_0x24afcf(0x212)]('stp'), _0x19c946 = new URL(_0x54b81e[_0x24afcf(0x466)])[_0x24afcf(0x279)]['get'](_0x24afcf(0x219));
                            if (_0x1dcf54 && _0x19c946) {
                                if (_0x1dcf54[_0x24afcf(0x2e8)] > _0x19c946['length'])
                                    return 0x1;
                                if (_0x1dcf54[_0x24afcf(0x2e8)] < _0x19c946['length'])
                                    return -0x1;
                            } else {
                                if (_0x8d212e[_0x24afcf(0x309)] < _0x54b81e[_0x24afcf(0x309)])
                                    return 0x1;
                                if (_0x8d212e[_0x24afcf(0x309)] > _0x54b81e[_0x24afcf(0x309)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x2526ef(_0xeeaa48)[_0x89cb12(0x371)](_0x89cb12(0x3c1) + _0x5d1c4a['pk'] + _0x89cb12(0x225) + _0x5d1c4a['taken_at'] + _0x89cb12(0x299) + _0x5d1c4a['code'] + _0x89cb12(0x2ad) + _0x5d1c4a['owner']['username'] + _0x89cb12(0x3bc) + _0x2ebcb3 + _0x89cb12(0x20e) + _0x5d1c4a[_0x89cb12(0x29c)]['candidates'][0x0][_0x89cb12(0x466)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5d1c4a[_0x89cb12(0x29c)][_0x89cb12(0x413)][0x0][_0x89cb12(0x466)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x194f3c(_0x89cb12(0x2e6)) + '</span>\x20' + _0x2ebcb3 + _0x89cb12(0x28c))) : _0x2526ef(_0xeeaa48)['append'](_0x89cb12(0x3c1) + _0x5d1c4a['pk'] + _0x89cb12(0x225) + _0x5d1c4a[_0x89cb12(0x3e3)] + _0x89cb12(0x299) + _0x5d1c4a[_0x89cb12(0x302)] + _0x89cb12(0x382) + _0x5d1c4a[_0x89cb12(0x3b7)][_0x89cb12(0x383)] + '\x22\x20data-globalIndex=\x22' + _0x2ebcb3 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x5d1c4a[_0x89cb12(0x39f)][0x0]['url'] + _0x89cb12(0x441) + _0x5d1c4a[_0x89cb12(0x29c)][_0x89cb12(0x413)][0x0][_0x89cb12(0x466)] + _0x89cb12(0x463) + _0x194f3c('VID') + _0x89cb12(0x411) + _0x2ebcb3 + _0x89cb12(0x28c));
                    }
                }
                _0x2526ef(_0x89cb12(0x408))[_0x89cb12(0x474)](), _0x2526ef(_0x89cb12(0x252))[_0x89cb12(0x20b)](function () {
                    const _0x24a524 = _0x89cb12;
                    _0x2526ef(this)[_0x24a524(0x2bf)]('<div></div>'), _0x2526ef(this)[_0x24a524(0x33f)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x2526ef(this)['after'](_0x24a524(0x32d) + _0x194f3c(_0x24a524(0x3cf)) + _0x24a524(0x3a3) + _0x41f26c[_0x24a524(0x3cf)] + _0x24a524(0x3e2)), _0x2526ef(this)[_0x24a524(0x237)]('data-name') == _0x24a524(0x276) && _0x2526ef(this)[_0x24a524(0x38c)](_0x24a524(0x3b2) + _0x194f3c(_0x24a524(0x3d8)) + _0x24a524(0x284) + _0x41f26c[_0x24a524(0x392)] + '</div>');
                });
            } catch (_0x56a121) {
                _0x13060d('createMediaListDOM', _0x56a121);
            }
            ;
        }
        function _0x309e84(_0x2edc3a) {
            const _0x5b75c5 = _0x479be8;
            var _0x30d08a = 0x0, _0x150960 = _0x2edc3a[_0x5b75c5(0x3aa)]('.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div');
            return (_0x150960 == null || !_0x150960['hasClass'](_0x5b75c5(0x467))) && (_0x150960 = _0x2edc3a[_0x5b75c5(0x3aa)](_0x5b75c5(0x24d))['eq'](0x0)[_0x5b75c5(0x3c6)](_0x5b75c5(0x449))), _0x150960[_0x5b75c5(0x2f1)](_0x5b75c5(0x3ee))['each'](function (_0x21d431) {
                const _0xc630b9 = _0x5b75c5;
                _0x2526ef(this)[_0xc630b9(0x1f5)](_0xc630b9(0x253)) && (_0x30d08a = _0x21d431);
            }), _0x30d08a;
        }
        async function _0x5388f9(_0x19a0ec) {
            const _0x30ab5b = _0x479be8;
            if (_0x19a0ec) {
                _0x273247(!![]);
                let _0xdde93e = new Date()['getTime'](), _0x619c = Math[_0x30ab5b(0x357)](_0xdde93e / 0x3e8), _0x3ee6b1 = location['pathname'][_0x30ab5b(0x394)](/(reels|tagged)\/$/ig, '')[_0x30ab5b(0x345)]('/')['filter'](_0x4d93da => _0x4d93da[_0x30ab5b(0x2e8)] > 0x0)['at'](-0x1), _0x10b4c1 = await _0x4fb5a3(_0x3ee6b1);
                try {
                    let _0x12a287 = await _0x40c59c(_0x10b4c1[_0x30ab5b(0x3e8)]['pk']);
                    _0x3e3781(_0x12a287, _0x3ee6b1, _0x30ab5b(0x3b0), _0x619c, 'jpg');
                } catch (_0x22abbe) {
                    _0x3e3781(_0x10b4c1[_0x30ab5b(0x3e8)][_0x30ab5b(0x2bd)], _0x3ee6b1, _0x30ab5b(0x3b0), _0x619c, _0x30ab5b(0x2bc));
                }
                _0x273247(![]);
            } else {
                if (!_0x2526ef('.IG_DWPROFILE')['length']) {
                    let _0x57af9b = setInterval(() => {
                        const _0x172ad7 = _0x30ab5b;
                        if (_0x2526ef(_0x172ad7(0x25c))['length']) {
                            clearInterval(_0x57af9b);
                            return;
                        }
                        _0x2526ef(_0x172ad7(0x464))[_0x172ad7(0x2d7)]()['parent']()[_0x172ad7(0x371)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x194f3c('DW') + _0x172ad7(0x401) + _0x41f26c[_0x172ad7(0x217)] + _0x172ad7(0x3e2)), _0x2526ef('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')[_0x172ad7(0x2d7)]()[_0x172ad7(0x2d7)]()[_0x172ad7(0x362)](_0x172ad7(0x3c9), _0x172ad7(0x297)), _0x2526ef(_0x172ad7(0x2d6))[_0x172ad7(0x2d7)]()[_0x172ad7(0x2d7)]()[_0x172ad7(0x2d7)]()['append']('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x194f3c('DW') + _0x172ad7(0x401) + _0x41f26c[_0x172ad7(0x217)] + '</div>'), _0x2526ef(_0x172ad7(0x2d6))[_0x172ad7(0x2d7)]()['parent']()[_0x172ad7(0x2d7)]()[_0x172ad7(0x362)](_0x172ad7(0x3c9), 'relative');
                    }, 0x96);
                }
            }
        }
        async function _0x3a195a(_0x216fce, _0x46cd42, _0x57e40f) {
            const _0x3ab177 = _0x479be8;
            if (_0x216fce) {
                _0x273247(!![]);
                let _0x203c96 = location[_0x3ab177(0x300)][_0x3ab177(0x345)]('?')['at'](0x0)[_0x3ab177(0x345)](_0x3ab177(0x3ff))['at'](-0x1)[_0x3ab177(0x394)]('/', ''), _0xa5cb4 = await _0x51b7ef(_0x203c96), _0x258af7 = _0x580883(_0xa5cb4['data']), _0x2f5adc = new Date()[_0x3ab177(0x3b5)]();
                _0x4a14d1[_0x3ab177(0x28d)] && (_0xa5cb4[_0x3ab177(0x429)] === _0x3ab177(0x3c4) ? _0x2f5adc = _0x258af7[_0x3ab177(0x229)][_0x3ab177(0x3b9)] : _0x2f5adc = _0x258af7[_0x3ab177(0x3e3)]);
                if (_0xa5cb4[_0x3ab177(0x429)] === _0x3ab177(0x3c4)) {
                    if (_0x46cd42 && _0x258af7[_0x3ab177(0x229)][_0x3ab177(0x30d)]) {
                        if (_0x57e40f)
                            _0x26174e(_0x258af7[_0x3ab177(0x229)][_0x3ab177(0x43b)]);
                        else {
                            let _0x4abcd8 = _0x3ab177(0x41d);
                            _0x3e3781(_0x258af7[_0x3ab177(0x229)][_0x3ab177(0x43b)], _0x258af7[_0x3ab177(0x229)][_0x3ab177(0x3b7)][_0x3ab177(0x383)], _0x3ab177(0x260), _0x2f5adc, _0x4abcd8, _0x203c96);
                        }
                    } else {
                        if (_0x57e40f)
                            _0x26174e(_0x258af7[_0x3ab177(0x229)][_0x3ab177(0x352)]['at'](-0x1)[_0x3ab177(0x3da)]);
                        else {
                            let _0x4970e9 = _0x3ab177(0x2bc);
                            _0x3e3781(_0x258af7[_0x3ab177(0x229)][_0x3ab177(0x352)]['at'](-0x1)[_0x3ab177(0x3da)], _0x258af7[_0x3ab177(0x229)][_0x3ab177(0x3b7)]['username'], _0x3ab177(0x260), _0x2f5adc, _0x4970e9, _0x203c96);
                        }
                    }
                } else {
                    if (_0x46cd42 && _0x258af7['video_versions'] != null) {
                        if (_0x57e40f)
                            _0x26174e(_0x258af7[_0x3ab177(0x39f)][0x0]['url']);
                        else {
                            let _0x21b55d = _0x3ab177(0x41d);
                            _0x3e3781(_0x258af7[_0x3ab177(0x39f)][0x0][_0x3ab177(0x466)], _0x258af7[_0x3ab177(0x3b7)][_0x3ab177(0x383)], _0x3ab177(0x260), _0x2f5adc, _0x21b55d, _0x203c96);
                        }
                    } else {
                        if (_0x57e40f)
                            _0x26174e(_0x258af7['image_versions2'][_0x3ab177(0x413)][0x0][_0x3ab177(0x466)]);
                        else {
                            let _0x3c42ca = _0x3ab177(0x2bc);
                            _0x3e3781(_0x258af7[_0x3ab177(0x29c)][_0x3ab177(0x413)][0x0][_0x3ab177(0x466)], _0x258af7[_0x3ab177(0x3b7)][_0x3ab177(0x383)], _0x3ab177(0x260), _0x2f5adc, _0x3c42ca, _0x203c96);
                        }
                    }
                }
                _0x273247(![]);
            } else
                var _0x3ca7df = setInterval(() => {
                    const _0x1a0c8e = _0x3ab177;
                    _0x2526ef(_0x1a0c8e(0x236))['length'] > 0x0 && (clearInterval(_0x3ca7df), _0x4a14d1['SCROLL_BUTTON'] && (_0x2526ef(_0x1a0c8e(0x2a6))[_0x1a0c8e(0x474)](), _0x2526ef('section\x20>\x20main[role=\x22main\x22]')[_0x1a0c8e(0x371)](_0x1a0c8e(0x21d)), _0x2526ef('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x1a0c8e(0x371)](_0x1a0c8e(0x3ab)), _0x2526ef('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x1a0c8e(0x371)](_0x1a0c8e(0x450)), _0x2526ef(_0x1a0c8e(0x46d))['on'](_0x1a0c8e(0x3fb), function () {
                        const _0x3ab307 = _0x1a0c8e;
                        _0x2526ef(_0x3ab307(0x206))[0x0]['scrollBy']({
                            'top': -0x1e,
                            'behavior': _0x3ab307(0x301)
                        });
                    }), _0x2526ef(_0x1a0c8e(0x438))['on'](_0x1a0c8e(0x3fb), function () {
                        const _0x423471 = _0x1a0c8e;
                        _0x2526ef(_0x423471(0x206))[0x0][_0x423471(0x372)]({
                            'top': 0x1e,
                            'behavior': _0x423471(0x301)
                        });
                    })), _0x2526ef('section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]')['children'](_0x1a0c8e(0x449))[_0x1a0c8e(0x20b)](function () {
                        const _0x3f507f = _0x1a0c8e;
                        if (_0x2526ef(this)[_0x3f507f(0x3c6)]()[_0x3f507f(0x2e8)] > 0x0) {
                            if (!_0x2526ef(this)['children']()[_0x3f507f(0x3aa)](_0x3f507f(0x326))[_0x3f507f(0x2e8)]) {
                                var _0x224efb = _0x2526ef(this);
                                _0x2526ef(this)[_0x3f507f(0x3c6)]()[_0x3f507f(0x362)](_0x3f507f(0x3c9), _0x3f507f(0x297)), _0x2526ef(this)[_0x3f507f(0x3c6)]()['append'](_0x3f507f(0x3ae) + _0x194f3c('DW') + '\x22\x20class=\x22IG_REELS\x22>' + _0x41f26c[_0x3f507f(0x217)] + _0x3f507f(0x3e2)), _0x2526ef(this)[_0x3f507f(0x3c6)]()['append'](_0x3f507f(0x32d) + _0x194f3c('NEW_TAB') + _0x3f507f(0x24c) + _0x41f26c[_0x3f507f(0x3cf)] + '</div>'), _0x2526ef(this)['children']()['append'](_0x3f507f(0x3b2) + _0x194f3c(_0x3f507f(0x3d8)) + _0x3f507f(0x203) + _0x41f26c[_0x3f507f(0x392)] + _0x3f507f(0x3e2));
                                _0x4a14d1[_0x3f507f(0x230)] && _0x2526ef(this)[_0x3f507f(0x3aa)](_0x3f507f(0x276))[_0x3f507f(0x20b)](function () {
                                    const _0x4b0638 = _0x3f507f;
                                    _0x2526ef(this)['on'](_0x4b0638(0x239), function () {
                                        const _0x3a878b = _0x4b0638;
                                        if (!_0x2526ef(this)[_0x3a878b(0x238)]('loop')) {
                                            let _0x4de43f = _0x2526ef(this)['next']()[_0x3a878b(0x3aa)](_0x3a878b(0x332))[_0x3a878b(0x37f)](_0x3a878b(0x2c3));
                                            _0x4de43f['length'] > 0x0 ? (_0x2526ef(this)[_0x3a878b(0x237)]('data-loop', !![]), _0x4de43f[_0x3a878b(0x3af)]('click'), _0x13060d(_0x3a878b(0x38d))) : (_0x2526ef(this)[_0x3a878b(0x237)](_0x3a878b(0x3e9), !![]), _0x2526ef(this)[_0x3a878b(0x2d7)]()['find'](_0x3a878b(0x204))[_0x3a878b(0x2ac)]('style'), this[_0x3a878b(0x23e)](), _0x13060d('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()'));
                                        }
                                    });
                                });
                                _0x4a14d1['HTML5_VIDEO_CONTROL'] && _0x2526ef(this)[_0x3f507f(0x3aa)]('video')[_0x3f507f(0x20b)](function () {
                                    const _0xe1dac6 = _0x3f507f;
                                    if (!_0x2526ef(this)[_0xe1dac6(0x238)](_0xe1dac6(0x3d1))) {
                                        let _0x4737c5 = _0x2526ef(this);
                                        _0x13060d('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x4a14d1[_0xe1dac6(0x288)] && (this[_0xe1dac6(0x3db)] = _0x53278b[_0xe1dac6(0x1f2)], _0x2526ef(this)['on'](_0xe1dac6(0x2c5), function () {
                                            const _0x49db20 = _0xe1dac6;
                                            this[_0x49db20(0x3db)] = _0x53278b[_0x49db20(0x1f2)];
                                        })), _0x2526ef(this)['on'](_0xe1dac6(0x3c7), function (_0x413b72) {
                                            const _0x3b9aed = _0xe1dac6;
                                            _0x413b72[_0x3b9aed(0x331)](), _0x4737c5['css']('z-index', '-1'), _0x4737c5[_0x3b9aed(0x2ac)]('controls');
                                        }), _0x2526ef(this)[_0xe1dac6(0x2d7)]()[_0xe1dac6(0x3aa)](_0xe1dac6(0x35c))['filter'](function () {
                                            const _0x293ceb = _0xe1dac6;
                                            return _0x2526ef(this)['parent']('div[role=\x22presentation\x22]')['length'] > 0x0 && _0x2526ef(this)[_0x293ceb(0x362)]('cursor') === _0x293ceb(0x349) && _0x2526ef(this)[_0x293ceb(0x237)](_0x293ceb(0x3be)) != null;
                                        })['first']()['on'](_0xe1dac6(0x3c7), function (_0x201ac7) {
                                            const _0x487795 = _0xe1dac6;
                                            _0x201ac7[_0x487795(0x331)](), _0x4737c5[_0x487795(0x362)](_0x487795(0x3f8), '2'), _0x4737c5[_0x487795(0x237)](_0x487795(0x3d1), !![]);
                                        }), _0x2526ef(this)['on'](_0xe1dac6(0x2da), function () {
                                            const _0x3ede3e = _0xe1dac6;
                                            let _0x2cff67 = _0x2526ef(this)['parent']()[_0x3ede3e(0x3aa)](_0x3ede3e(0x31e))['find'](_0x3ede3e(0x328))['filter'](function (_0x49608d) {
                                                const _0x45a082 = _0x3ede3e;
                                                return _0x2526ef(this)[_0x45a082(0x309)]() <= 0x40 && _0x2526ef(this)[_0x45a082(0x2cf)]() <= 0x40 && _0x2526ef(this)['find']('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')[_0x45a082(0x2e8)] > 0x0;
                                            });
                                            var _0x657930 = _0x2cff67[_0x3ede3e(0x3aa)]('svg\x20>\x20path[d^=\x22M16.636\x22]')['length'] === 0x0;
                                            this[_0x3ede3e(0x33d)] != _0x657930 && (this[_0x3ede3e(0x3db)] = _0x53278b[_0x3ede3e(0x1f2)], _0x2cff67?.['trigger'](_0x3ede3e(0x3fb))), _0x2526ef(this)['attr']('data-completed') && (_0x53278b[_0x3ede3e(0x1f2)] = this[_0x3ede3e(0x3db)], GM_setValue(_0x3ede3e(0x27d), this[_0x3ede3e(0x3db)])), this[_0x3ede3e(0x3db)] == _0x53278b[_0x3ede3e(0x1f2)] && _0x2526ef(this)[_0x3ede3e(0x237)](_0x3ede3e(0x2de), !![]);
                                        }), _0x2526ef(this)['css'](_0xe1dac6(0x3c9), _0xe1dac6(0x2ef)), _0x2526ef(this)[_0xe1dac6(0x362)](_0xe1dac6(0x3f8), '2'), _0x2526ef(this)['attr'](_0xe1dac6(0x26a), !![]), _0x2526ef(this)[_0xe1dac6(0x237)](_0xe1dac6(0x3d1), !![]);
                                    }
                                });
                                var _0x74a324 = _0x224efb[_0x3f507f(0x3aa)](_0x3f507f(0x276)), _0x17c430 = _0x2526ef(this)[_0x3f507f(0x3aa)](_0x3f507f(0x2c9))['first']();
                                _0xcc095b(_0x74a324, _0x17c430, _0x3f507f(0x26c));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0xd312b() {
            const _0x1aafe1 = _0x479be8;
            _0x273247(!![]);
            let _0x535764 = new Date()[_0x1aafe1(0x3b5)](), _0x3fbc6d = Math[_0x1aafe1(0x357)](_0x535764 / 0x3e8), _0xb1be71 = _0x2526ef(_0x1aafe1(0x416))[_0x1aafe1(0x399)]()['text']() || location[_0x1aafe1(0x2f2)][_0x1aafe1(0x345)]('/')['filter'](_0x26355a => _0x26355a['length'] > 0x0)['at'](0x1), _0x1c5f1c = await _0x4fb5a3(_0xb1be71), _0x3ef0df = _0x1c5f1c[_0x1aafe1(0x3e8)]['pk'], _0x1166ea = await _0x1c400e(_0x3ef0df), _0x30f98f = 0x0;
            _0x2bdf85(_0x30f98f, _0x1166ea[_0x1aafe1(0x238)][_0x1aafe1(0x3c3)][0x0][_0x1aafe1(0x256)][_0x1aafe1(0x2e8)]), _0x1166ea[_0x1aafe1(0x238)][_0x1aafe1(0x3c3)][0x0][_0x1aafe1(0x256)][_0x1aafe1(0x451)]((_0x1ac05, _0x2887d5) => {
                setTimeout(() => {
                    const _0x3ac73e = a0_0x49b2;
                    _0x4a14d1['RENAME_PUBLISH_DATE'] && (_0x3fbc6d = _0x1ac05[_0x3ac73e(0x3b9)]), _0x1ac05[_0x3ac73e(0x352)][_0x3ac73e(0x43d)](function (_0x13d343, _0x401a9f) {
                        const _0x1e671b = _0x3ac73e;
                        if (_0x13d343[_0x1e671b(0x37a)] < _0x401a9f[_0x1e671b(0x37a)])
                            return 0x1;
                        if (_0x13d343[_0x1e671b(0x37a)] > _0x401a9f['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x1ac05[_0x3ac73e(0x30d)] ? _0x3e3781(_0x1ac05['video_resources'][0x0][_0x3ac73e(0x3da)], _0xb1be71, _0x3ac73e(0x426), _0x3fbc6d, 'mp4', _0x1ac05['id'])[_0x3ac73e(0x2d8)](() => {
                        const _0x242ce9 = _0x3ac73e;
                        _0x2bdf85(++_0x30f98f, _0x1166ea[_0x242ce9(0x238)][_0x242ce9(0x3c3)][0x0]['items'][_0x242ce9(0x2e8)]);
                    }) : _0x3e3781(_0x1ac05[_0x3ac73e(0x352)][0x0][_0x3ac73e(0x3da)], _0xb1be71, _0x3ac73e(0x426), _0x3fbc6d, _0x3ac73e(0x2bc), _0x1ac05['id'])[_0x3ac73e(0x2d8)](() => {
                        const _0xcef921 = _0x3ac73e;
                        _0x2bdf85(++_0x30f98f, _0x1166ea[_0xcef921(0x238)][_0xcef921(0x3c3)][0x0][_0xcef921(0x256)][_0xcef921(0x2e8)]);
                    });
                }, 0x64 * _0x2887d5);
            });
        }
        async function _0x11a7e8(_0x271cb8, _0x37e706, _0x240999) {
            const _0x284211 = _0x479be8;
            var _0x3fbbfa = _0x2526ef(_0x284211(0x416))['first']()[_0x284211(0x40a)]() || location[_0x284211(0x2f2)][_0x284211(0x345)]('/')[_0x284211(0x2f1)](_0x4d74b0 => _0x4d74b0['length'] > 0x0)['at'](0x1);
            if (_0x271cb8) {
                let _0x477f6b = new Date()[_0x284211(0x3b5)](), _0x13bdd4 = Math[_0x284211(0x357)](_0x477f6b / 0x3e8);
                _0x273247(!![]);
                if (_0x4a14d1['FORCE_RESOURCE_VIA_MEDIA'] && !_0x53278b[_0x284211(0x422)]) {
                    let _0x5b01bd = null, _0x146317 = await _0x4fb5a3(_0x3fbbfa), _0x1ccc75 = _0x146317[_0x284211(0x3e8)]['pk'], _0xcfd427 = await _0x1c400e(_0x1ccc75), _0x5c2fb4 = location[_0x284211(0x2f2)][_0x284211(0x345)]('/')[_0x284211(0x2f1)](_0x1e0887 => _0x1e0887[_0x284211(0x2e8)] > 0x0 && _0x1e0887[_0x284211(0x42f)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0xcfd427[_0x284211(0x238)][_0x284211(0x3c3)][0x0]['items'][_0x284211(0x451)](_0x34393b => {
                        _0x34393b['id'] == _0x5c2fb4 && (_0x5b01bd = _0x34393b['id']);
                    });
                    if (_0x5b01bd == null) {
                        let _0x228c48 = _0x1f3f6b(_0x3fbbfa);
                        _0x228c48[_0x284211(0x20b)](function (_0x350c2e) {
                            const _0x21bfe8 = _0x284211;
                            _0x2526ef(this)[_0x21bfe8(0x3c6)]()[_0x21bfe8(0x2e8)] > 0x0 && (_0x5b01bd = _0xcfd427[_0x21bfe8(0x238)][_0x21bfe8(0x3c3)][0x0][_0x21bfe8(0x256)][_0x350c2e]['id']);
                        });
                    }
                    _0x5b01bd == null && (_0x2526ef(_0x284211(0x330))[_0x284211(0x20b)](function (_0x3894c4) {
                        const _0x132387 = _0x284211;
                        _0x2526ef(this)[_0x132387(0x1f5)](_0x132387(0x3a0)) && (_0x2526ef(this)[_0x132387(0x3c6)]()[_0x132387(0x2e8)] > 0x0 && (_0x5b01bd = _0xcfd427[_0x132387(0x238)][_0x132387(0x3c3)][0x0][_0x132387(0x256)][_0x3894c4]['id']));
                    }), _0x2526ef('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x284211(0x20b)](function (_0x9c2dc8) {
                        const _0x1aea84 = _0x284211;
                        _0x2526ef(this)[_0x1aea84(0x3c6)]()['hasClass'](_0x1aea84(0x222)) && (_0x5b01bd = _0xcfd427[_0x1aea84(0x238)]['reels_media'][0x0][_0x1aea84(0x256)][_0x9c2dc8]['id']);
                    }));
                    _0x5b01bd == null && (_0x5b01bd = location[_0x284211(0x2f2)][_0x284211(0x345)]('/')[_0x284211(0x2f1)](_0x4545ea => _0x4545ea[_0x284211(0x2e8)] > 0x0 && _0x4545ea[_0x284211(0x42f)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x14ba75 = await _0x590a69(_0x5b01bd);
                    _0x4a14d1[_0x284211(0x28d)] && (_0x13bdd4 = _0x14ba75[_0x284211(0x256)][0x0]['taken_at']);
                    _0x14ba75[_0x284211(0x3a9)] === 'ok' ? _0x14ba75[_0x284211(0x256)][0x0]['video_versions'] ? _0x240999 ? _0x26174e(_0x14ba75['items'][0x0]['video_versions'][0x0]['url']) : _0x3e3781(_0x14ba75[_0x284211(0x256)][0x0][_0x284211(0x39f)][0x0][_0x284211(0x466)], _0x3fbbfa, 'stories', _0x13bdd4, _0x284211(0x41d), _0x5b01bd) : _0x240999 ? _0x26174e(_0x14ba75[_0x284211(0x256)][0x0]['image_versions2']['candidates'][0x0]['url']) : _0x3e3781(_0x14ba75[_0x284211(0x256)][0x0]['image_versions2']['candidates'][0x0][_0x284211(0x466)], _0x3fbbfa, 'stories', _0x13bdd4, _0x284211(0x2bc), _0x5b01bd) : (_0x4a14d1['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x53278b[_0x284211(0x422)] = !![], _0x11a7e8(_0x271cb8, _0x37e706, _0x240999)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x14ba75[_0x284211(0x39e)]), _0x13060d(_0x14ba75));
                    _0x273247(![]);
                    return;
                }
                if (_0x2526ef('body\x20>\x20div\x20section:visible\x20video[playsinline]')[_0x284211(0x2e8)] > 0x0) {
                    let _0x59ecc4 = _0x284211(0x41d), _0x583b0f = '', _0x2c3385 = location[_0x284211(0x2f2)][_0x284211(0x43f)](/\/$/ig, '')[_0x284211(0x345)]('/')['at'](-0x1), _0x541530 = null;
                    if (_0x53278b[_0x284211(0x3d2)][_0x284211(0x426)][_0x3fbbfa] && !_0x37e706) {
                        _0x13060d('Fetch\x20from\x20memory\x20cache:', _0x3fbbfa), _0x53278b[_0x284211(0x3d2)][_0x284211(0x426)][_0x3fbbfa]['data'][_0x284211(0x3c3)][0x0][_0x284211(0x256)]['forEach'](_0x548e6f => {
                            const _0xd53524 = _0x284211;
                            _0x548e6f['id'] == _0x2c3385 && (_0x583b0f = _0x548e6f['video_resources'][0x0][_0xd53524(0x3da)], _0x4a14d1[_0xd53524(0x28d)] && (_0x13bdd4 = _0x548e6f[_0xd53524(0x3b9)], _0x541530 = _0x548e6f['id']));
                        });
                        if (_0x583b0f['length'] == 0x0) {
                            _0x13060d('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x3fbbfa), _0x11a7e8(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x2269f8 = await _0x4fb5a3(_0x3fbbfa), _0x5e443f = _0x2269f8['user']['pk'], _0xc4b6aa = await _0x1c400e(_0x5e443f);
                        _0xc4b6aa[_0x284211(0x238)][_0x284211(0x3c3)][0x0][_0x284211(0x256)][_0x284211(0x451)](_0x1f3978 => {
                            const _0x23312c = _0x284211;
                            _0x1f3978['id'] == _0x2c3385 && (_0x583b0f = _0x1f3978[_0x23312c(0x320)][0x0][_0x23312c(0x3da)], _0x4a14d1[_0x23312c(0x28d)] && (_0x13bdd4 = _0x1f3978['taken_at_timestamp'], _0x541530 = _0x1f3978['id']));
                        });
                        if (_0x583b0f[_0x284211(0x2e8)] == 0x0) {
                            let _0x5c46f8 = _0x1f3f6b(_0x3fbbfa);
                            _0x5c46f8[_0x284211(0x20b)](function (_0x230982) {
                                const _0x15bf2b = _0x284211;
                                _0x2526ef(this)[_0x15bf2b(0x3c6)]()[_0x15bf2b(0x2e8)] > 0x0 && (_0x583b0f = _0xc4b6aa[_0x15bf2b(0x238)][_0x15bf2b(0x3c3)][0x0][_0x15bf2b(0x256)][_0x230982][_0x15bf2b(0x320)][0x0][_0x15bf2b(0x3da)], _0x4a14d1[_0x15bf2b(0x28d)] && (_0x13bdd4 = _0xc4b6aa[_0x15bf2b(0x238)][_0x15bf2b(0x3c3)][0x0][_0x15bf2b(0x256)][_0x230982][_0x15bf2b(0x3b9)], _0x541530 = _0xc4b6aa[_0x15bf2b(0x238)][_0x15bf2b(0x3c3)][0x0][_0x15bf2b(0x256)][_0x230982]['id']));
                            }), _0x583b0f[_0x284211(0x2e8)] == 0x0 && (_0x2526ef(_0x284211(0x330))[_0x284211(0x20b)](function (_0x4db3e5) {
                                const _0x2f270e = _0x284211;
                                _0x2526ef(this)[_0x2f270e(0x1f5)]('x1lix1fw') && (_0x2526ef(this)[_0x2f270e(0x3c6)]()[_0x2f270e(0x2e8)] > 0x0 && (_0x583b0f = _0xc4b6aa['data']['reels_media'][0x0][_0x2f270e(0x256)][_0x4db3e5]['video_resources'][0x0][_0x2f270e(0x3da)], _0x4a14d1[_0x2f270e(0x28d)] && (_0x13bdd4 = _0xc4b6aa[_0x2f270e(0x238)][_0x2f270e(0x3c3)][0x0]['items'][_0x4db3e5][_0x2f270e(0x3b9)], _0x541530 = _0xc4b6aa[_0x2f270e(0x238)]['reels_media'][0x0][_0x2f270e(0x256)][_0x4db3e5]['id'])));
                            }), _0x2526ef(_0x284211(0x41e))[_0x284211(0x20b)](function (_0x5bc2f3) {
                                const _0x4d7e6c = _0x284211;
                                _0x2526ef(this)['children']()[_0x4d7e6c(0x1f5)](_0x4d7e6c(0x222)) && (_0x583b0f = _0xc4b6aa[_0x4d7e6c(0x238)]['reels_media'][0x0][_0x4d7e6c(0x256)][_0x5bc2f3][_0x4d7e6c(0x320)][0x0][_0x4d7e6c(0x3da)], _0x4a14d1[_0x4d7e6c(0x28d)] && (_0x13bdd4 = _0xc4b6aa[_0x4d7e6c(0x238)][_0x4d7e6c(0x3c3)][0x0]['items'][_0x5bc2f3][_0x4d7e6c(0x3b9)], _0x541530 = _0xc4b6aa[_0x4d7e6c(0x238)][_0x4d7e6c(0x3c3)][0x0][_0x4d7e6c(0x256)][_0x5bc2f3]['id']));
                            }));
                        }
                        _0x53278b[_0x284211(0x3d2)][_0x284211(0x426)][_0x3fbbfa] = _0xc4b6aa;
                    }
                    _0x583b0f['length'] == 0x0 ? alert(_0x194f3c(_0x284211(0x3ad))) : _0x240999 ? _0x26174e(_0x583b0f) : _0x3e3781(_0x583b0f, _0x3fbbfa, _0x284211(0x426), _0x13bdd4, _0x59ecc4, _0x541530);
                } else {
                    let _0xb6b196 = _0x2526ef(_0x284211(0x31d))[_0x284211(0x237)](_0x284211(0x2c7))?.[_0x284211(0x345)](',')[0x0]?.[_0x284211(0x345)]('\x20')[0x0], _0xa6b009 = _0xb6b196 ? _0xb6b196 : _0x2526ef(_0x284211(0x31d))[_0x284211(0x2f1)](function () {
                            const _0x502890 = _0x284211;
                            return _0x2526ef(this)[_0x502890(0x37f)]('a')[_0x502890(0x2e8)] === 0x0 && _0x2526ef(this)[_0x502890(0x309)]() === _0x2526ef(this)['parent']()[_0x502890(0x309)]();
                        })[_0x284211(0x237)](_0x284211(0x3da));
                    if (!_0xa6b009) {
                        let _0x309f47 = _0x2526ef(_0x284211(0x251));
                        _0xa6b009 = _0x309f47['attr'](_0x284211(0x2c7)) ? _0x309f47[_0x284211(0x237)]('srcset')?.[_0x284211(0x345)](',')[0x0]?.[_0x284211(0x345)]('\x20')[0x0] : _0x309f47[_0x284211(0x237)](_0x284211(0x3da));
                    }
                    _0x4a14d1['RENAME_PUBLISH_DATE'] && (_0x13bdd4 = new Date(_0x2526ef(_0x284211(0x1f8))[_0x284211(0x399)]()[_0x284211(0x237)](_0x284211(0x1f9)))[_0x284211(0x3b5)]());
                    let _0x4fb90f = _0xa6b009, _0x3995d6 = 'jpg';
                    _0x240999 ? _0x26174e(_0x4fb90f) : _0x3e3781(_0x4fb90f, _0x3fbbfa, _0x284211(0x426), _0x13bdd4, _0x3995d6, _0x3ec6e1(_0x4fb90f) ?? '');
                }
                _0x53278b['tempFetchRateLimit'] = ![], _0x273247(![]);
            } else {
                if (!_0x2526ef(_0x284211(0x27f))['length']) {
                    _0x53278b[_0x284211(0x3d2)][_0x284211(0x426)] = {};
                    let _0xeaacda = null;
                    _0x2526ef(_0x284211(0x25b))[_0x284211(0x2e8)] > 0x0 ? _0xeaacda = _0x2526ef(_0x284211(0x3d4)) : (_0xeaacda = _0x2526ef(_0x284211(0x387)), _0xeaacda[_0x284211(0x362)](_0x284211(0x3c9), _0x284211(0x297)));
                    _0xeaacda[_0x284211(0x2e8)] === 0x0 && (_0xeaacda = _0x2526ef(_0x284211(0x3ce))[_0x284211(0x2d7)]()[_0x284211(0x2d7)]()[_0x284211(0x2d7)]()[_0x284211(0x3aa)](_0x284211(0x34e)), _0xeaacda[_0x284211(0x362)](_0x284211(0x3c9), _0x284211(0x297)));
                    _0xeaacda[_0x284211(0x2e8)] === 0x0 && (_0xeaacda = _0x2526ef(_0x284211(0x3ce))[_0x284211(0x2d7)]()[_0x284211(0x2d7)]()[_0x284211(0x2d7)]()['find'](_0x284211(0x1fb)), _0xeaacda[_0x284211(0x362)](_0x284211(0x3c9), _0x284211(0x297)));
                    if (_0xeaacda[_0x284211(0x2e8)] === 0x0) {
                        let _0x23bed8 = _0x2526ef('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x44a523 = 0x0;
                        _0x23bed8[_0x284211(0x20b)](function () {
                            const _0x5c4edc = _0x284211;
                            _0x2526ef(this)[_0x5c4edc(0x309)]() > _0x44a523 && (_0x44a523 = _0x2526ef(this)[_0x5c4edc(0x309)](), _0xeaacda = _0x2526ef(this)['children'](_0x5c4edc(0x449))[_0x5c4edc(0x399)]());
                        });
                    }
                    if (_0xeaacda != null) {
                        _0xeaacda[_0x284211(0x399)]()[_0x284211(0x362)]('position', _0x284211(0x297)), _0xeaacda[_0x284211(0x399)]()[_0x284211(0x371)](_0x284211(0x3ae) + _0x194f3c('DW') + _0x284211(0x1f1) + _0x41f26c[_0x284211(0x217)] + _0x284211(0x3e2)), _0xeaacda[_0x284211(0x399)]()['append'](_0x284211(0x32d) + _0x194f3c('NEW_TAB') + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x41f26c[_0x284211(0x3cf)] + '</div>');
                        let _0x4a2d11 = _0x1f3f6b(_0x3fbbfa);
                        _0x4a2d11[_0x284211(0x2e8)] > 0x1 && _0xeaacda['first']()['append'](_0x284211(0x2ee) + _0x194f3c(_0x284211(0x202)) + _0x284211(0x269) + _0x41f26c[_0x284211(0x27e)] + _0x284211(0x3e2)), _0xeaacda['find'](_0x284211(0x23a))[_0x284211(0x20b)](function () {
                            const _0x642d23 = _0x284211;
                            _0x2526ef(this)['on'](_0x642d23(0x264), function () {
                                const _0x25e70d = _0x642d23;
                                !_0x2526ef(this)['data'](_0x25e70d(0x377)) && (_0xeaacda[_0x25e70d(0x3aa)](_0x25e70d(0x2d9))[_0x25e70d(0x2e8)] === 0x0 ? (_0x2526ef(this)['attr'](_0x25e70d(0x258), !![]), _0x2526ef(_0x25e70d(0x2d9))[_0x25e70d(0x474)](), _0x13060d(_0x25e70d(0x270))) : (_0x2526ef(this)[_0x25e70d(0x237)]('data-remove-thumbnail', !![]), _0x13060d('(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x17866b(_0x10d2ad, _0x1893e0) {
            const _0x236829 = _0x479be8;
            if (_0x10d2ad) {
                let _0x286c51 = new Date()[_0x236829(0x3b5)](), _0x160d4f = Math['floor'](_0x286c51 / 0x3e8), _0xfeca6d = _0x236829(0x2bc), _0x1d620a = _0x2526ef(_0x236829(0x416))[_0x236829(0x399)]()[_0x236829(0x40a)]() || location['pathname'][_0x236829(0x345)]('/')['at'](0x2), _0x2e1d2e = location[_0x236829(0x2f2)][_0x236829(0x43f)](/\/$/ig, '')[_0x236829(0x345)]('/')['at'](-0x1), _0x18318a = '', _0x4f276e = null;
                _0x273247(!![]);
                if (_0x4a14d1[_0x236829(0x428)] && !_0x53278b[_0x236829(0x422)]) {
                    let _0xd12e57 = await _0x4fb5a3(_0x1d620a), _0xe763f2 = _0xd12e57[_0x236829(0x3e8)]['pk'], _0x458775 = await _0x1c400e(_0xe763f2), _0x2d63c1 = location[_0x236829(0x2f2)]['split']('/')[_0x236829(0x2f1)](_0x5ae66e => _0x5ae66e[_0x236829(0x2e8)] > 0x0 && _0x5ae66e['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x458775[_0x236829(0x238)][_0x236829(0x3c3)][0x0]['items'][_0x236829(0x451)](_0x2d5855 => {
                        _0x2d5855['id'] == _0x2d63c1 && (_0x4f276e = _0x2d5855['id']);
                    });
                    if (_0x4f276e == null) {
                        let _0x56e21d = _0x1f3f6b(_0x1d620a);
                        _0x56e21d['each'](function (_0xa50ebe) {
                            const _0x4b273f = _0x236829;
                            _0x2526ef(this)[_0x4b273f(0x3c6)]()[_0x4b273f(0x2e8)] > 0x0 && (_0x4f276e = _0x458775['data'][_0x4b273f(0x3c3)][0x0]['items'][_0xa50ebe]['id']);
                        });
                    }
                    _0x4f276e == null && (_0x2526ef('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x236829(0x20b)](function (_0x19da1b) {
                        const _0x49dd44 = _0x236829;
                        _0x2526ef(this)[_0x49dd44(0x1f5)](_0x49dd44(0x3a0)) && (_0x2526ef(this)[_0x49dd44(0x3c6)]()['length'] > 0x0 && (_0x4f276e = _0x458775['data'][_0x49dd44(0x3c3)][0x0]['items'][_0x19da1b]['id']));
                    }), _0x2526ef('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x236829(0x20b)](function (_0x156518) {
                        const _0x29ea54 = _0x236829;
                        _0x2526ef(this)[_0x29ea54(0x3c6)]()['hasClass'](_0x29ea54(0x222)) && (_0x4f276e = _0x458775[_0x29ea54(0x238)][_0x29ea54(0x3c3)][0x0][_0x29ea54(0x256)][_0x156518]['id']);
                    }));
                    _0x4f276e == null && (_0x4f276e = location[_0x236829(0x2f2)][_0x236829(0x345)]('/')[_0x236829(0x2f1)](_0x468774 => _0x468774['length'] > 0x0 && _0x468774[_0x236829(0x42f)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x4c968d = await _0x590a69(_0x4f276e);
                    _0x4a14d1[_0x236829(0x28d)] && (_0x160d4f = _0x4c968d[_0x236829(0x256)][0x0]['taken_at']);
                    _0x4c968d[_0x236829(0x3a9)] === 'ok' ? _0x3e3781(_0x4c968d[_0x236829(0x256)][0x0][_0x236829(0x29c)]['candidates'][0x0][_0x236829(0x466)], _0x1d620a, 'stories', _0x160d4f, _0x236829(0x2bc), _0x4f276e) : (_0x4a14d1[_0x236829(0x469)] ? (_0x53278b[_0x236829(0x422)] = !![], _0x17866b(!![], _0x1893e0)) : alert(_0x236829(0x3e5) + _0x4c968d[_0x236829(0x39e)]), _0x13060d(_0x4c968d));
                    _0x273247(![]);
                    return;
                }
                if (_0x53278b[_0x236829(0x3d2)][_0x236829(0x426)][_0x1d620a] && !_0x1893e0) {
                    _0x13060d(_0x236829(0x34b), _0x1d620a), _0x53278b[_0x236829(0x3d2)][_0x236829(0x426)][_0x1d620a]['data']['reels_media'][0x0][_0x236829(0x256)][_0x236829(0x451)](_0x5724cf => {
                        const _0x3de7bb = _0x236829;
                        _0x5724cf['id'] == _0x2e1d2e && (_0x18318a = _0x5724cf[_0x3de7bb(0x21a)], _0x4a14d1[_0x3de7bb(0x28d)] && (_0x160d4f = _0x5724cf[_0x3de7bb(0x3b9)], _0x4f276e = _0x5724cf['id']));
                    });
                    if (_0x18318a[_0x236829(0x2e8)] == 0x0) {
                        _0x13060d('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x1d620a), _0x17866b(!![], !![]);
                        return;
                    }
                } else {
                    let _0x37d226 = await _0x4fb5a3(_0x1d620a), _0x2c6093 = _0x37d226['user']['pk'], _0x2e8361 = await _0x1c400e(_0x2c6093);
                    _0x2e8361[_0x236829(0x238)][_0x236829(0x3c3)][0x0][_0x236829(0x256)][_0x236829(0x451)](_0x588a2c => {
                        const _0x2a7d96 = _0x236829;
                        _0x588a2c['id'] == _0x2e1d2e && (_0x18318a = _0x588a2c['display_url'], _0x4a14d1[_0x2a7d96(0x28d)] && (_0x160d4f = _0x588a2c[_0x2a7d96(0x3b9)], _0x4f276e = _0x588a2c['id']));
                    });
                    if (_0x18318a['length'] == 0x0) {
                        let _0x18f56a = _0x1f3f6b(_0x1d620a);
                        _0x18f56a[_0x236829(0x20b)](function (_0xdab0d1) {
                            const _0x16da16 = _0x236829;
                            _0x2526ef(this)['children']()[_0x16da16(0x2e8)] > 0x0 && (_0x18318a = _0x2e8361[_0x16da16(0x238)][_0x16da16(0x3c3)][0x0][_0x16da16(0x256)][_0xdab0d1][_0x16da16(0x21a)], _0x4a14d1['RENAME_PUBLISH_DATE'] && (_0x160d4f = _0x2e8361[_0x16da16(0x238)]['reels_media'][0x0]['items'][_0xdab0d1][_0x16da16(0x3b9)], _0x4f276e = _0x2e8361[_0x16da16(0x238)][_0x16da16(0x3c3)][0x0]['items'][_0xdab0d1]['id']));
                        }), _0x18318a[_0x236829(0x2e8)] == 0x0 && (_0x2526ef(_0x236829(0x330))[_0x236829(0x20b)](function (_0x57e0d6) {
                            const _0x53a8e7 = _0x236829;
                            _0x2526ef(this)[_0x53a8e7(0x1f5)](_0x53a8e7(0x3a0)) && (_0x2526ef(this)[_0x53a8e7(0x3c6)]()['length'] > 0x0 && (_0x18318a = _0x2e8361[_0x53a8e7(0x238)][_0x53a8e7(0x3c3)][0x0]['items'][_0x57e0d6]['display_url'], _0x4a14d1[_0x53a8e7(0x28d)] && (_0x160d4f = _0x2e8361[_0x53a8e7(0x238)][_0x53a8e7(0x3c3)][0x0][_0x53a8e7(0x256)][_0x57e0d6]['taken_at_timestamp'], _0x4f276e = _0x2e8361[_0x53a8e7(0x238)][_0x53a8e7(0x3c3)][0x0][_0x53a8e7(0x256)][_0x57e0d6]['id'])));
                        }), _0x2526ef(_0x236829(0x41e))[_0x236829(0x20b)](function (_0x45a96a) {
                            const _0x2f0e27 = _0x236829;
                            _0x2526ef(this)[_0x2f0e27(0x3c6)]()[_0x2f0e27(0x1f5)](_0x2f0e27(0x222)) && (_0x18318a = _0x2e8361[_0x2f0e27(0x238)]['reels_media'][0x0][_0x2f0e27(0x256)][_0x45a96a][_0x2f0e27(0x21a)], _0x4a14d1[_0x2f0e27(0x28d)] && (_0x160d4f = _0x2e8361['data']['reels_media'][0x0][_0x2f0e27(0x256)][_0x45a96a][_0x2f0e27(0x3b9)], _0x4f276e = _0x2e8361['data']['reels_media'][0x0][_0x2f0e27(0x256)][_0x45a96a]['id']));
                        }));
                    }
                }
                _0x3e3781(_0x18318a, _0x1d620a, 'thumbnail', _0x160d4f, _0xfeca6d, _0x4f276e), _0x53278b[_0x236829(0x422)] = ![], _0x273247(![]);
            } else {
                if (_0x2526ef(_0x236829(0x366))[_0x236829(0x2d7)]()['find'](_0x236829(0x42a))[_0x236829(0x2e8)]) {
                    let _0x51f38f = null;
                    _0x2526ef('body\x20>\x20div\x20section._ac0a')[_0x236829(0x2e8)] > 0x0 ? _0x51f38f = _0x2526ef(_0x236829(0x3d4)) : (_0x51f38f = _0x2526ef('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x51f38f['css']('position', _0x236829(0x297)));
                    _0x51f38f[_0x236829(0x2e8)] === 0x0 && (_0x51f38f = _0x2526ef(_0x236829(0x3ce))['parent']()['parent']()[_0x236829(0x2d7)]()[_0x236829(0x3aa)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x51f38f[_0x236829(0x362)]('position', _0x236829(0x297)));
                    _0x51f38f[_0x236829(0x2e8)] === 0x0 && (_0x51f38f = _0x2526ef(_0x236829(0x3ce))[_0x236829(0x2d7)]()[_0x236829(0x2d7)]()['parent']()['find'](_0x236829(0x1fb)), _0x51f38f['css'](_0x236829(0x3c9), _0x236829(0x297)));
                    if (_0x51f38f[_0x236829(0x2e8)] === 0x0) {
                        let _0xfb24a2 = _0x2526ef(_0x236829(0x3fa)), _0x59534a = 0x0;
                        _0xfb24a2[_0x236829(0x20b)](function () {
                            const _0x211d2a = _0x236829;
                            _0x2526ef(this)[_0x211d2a(0x309)]() > _0x59534a && (_0x59534a = _0x2526ef(this)[_0x211d2a(0x309)](), _0x51f38f = _0x2526ef(this)['children'](_0x211d2a(0x449))[_0x211d2a(0x399)]());
                        });
                    }
                    _0x51f38f != null && (_0x51f38f[_0x236829(0x399)]()[_0x236829(0x362)]('position', 'relative'), _0x51f38f[_0x236829(0x399)]()[_0x236829(0x371)](_0x236829(0x3b2) + _0x194f3c(_0x236829(0x3d8)) + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x41f26c[_0x236829(0x392)] + _0x236829(0x3e2)));
                }
            }
        }
        function _0x4d5533(_0xa15dc5) {
            return new Promise((_0x3fbb51, _0x455dcf) => {
                const _0x3305c6 = a0_0x49b2;
                let _0x4e7a33 = _0x3305c6(0x322) + _0xa15dc5 + _0x3305c6(0x405);
                GM_xmlhttpRequest({
                    'method': _0x3305c6(0x398),
                    'url': _0x4e7a33,
                    'onload': function (_0x4fb558) {
                        const _0x2eda1f = _0x3305c6;
                        try {
                            let _0x442ed5 = JSON[_0x2eda1f(0x42d)](_0x4fb558[_0x2eda1f(0x433)]);
                            _0x3fbb51(_0x442ed5);
                        } catch (_0x20b045) {
                            _0x13060d('getHighlightStories()', _0x2eda1f(0x3df), _0x20b045[_0x2eda1f(0x39e)]), _0x455dcf(_0x20b045);
                        }
                    },
                    'onerror': function (_0x509cd5) {
                        const _0x16aa56 = _0x3305c6;
                        _0x13060d('getHighlightStories()', _0x16aa56(0x3df), _0x509cd5), _0x455dcf(_0x509cd5);
                    }
                });
            });
        }
        function _0x1c400e(_0x20a367) {
            return new Promise((_0x1b28b9, _0x5632da) => {
                const _0xa06b4b = a0_0x49b2;
                let _0x2b5bfa = _0xa06b4b(0x290) + _0x20a367 + _0xa06b4b(0x405);
                GM_xmlhttpRequest({
                    'method': _0xa06b4b(0x398),
                    'url': _0x2b5bfa,
                    'onload': function (_0x14ae23) {
                        const _0x5e8533 = _0xa06b4b;
                        try {
                            let _0x18e832 = JSON[_0x5e8533(0x42d)](_0x14ae23[_0x5e8533(0x433)]);
                            _0x13060d(_0x5e8533(0x39a), _0x18e832), _0x1b28b9(_0x18e832);
                        } catch (_0x27aa21) {
                            _0x13060d(_0x5e8533(0x39a), 'reject', _0x27aa21['message']), _0x5632da(_0x27aa21);
                        }
                    },
                    'onerror': function (_0x549dd4) {
                        const _0x41270a = _0xa06b4b;
                        _0x13060d(_0x41270a(0x39a), 'reject', _0x549dd4), _0x5632da(_0x549dd4);
                    }
                });
            });
        }
        function _0x4fb5a3(_0x504d0a) {
            return new Promise((_0xe7e948, _0x3e8914) => {
                const _0x451c47 = a0_0x49b2;
                let _0x4dcca4 = 'https://www.instagram.com/web/search/topsearch/?query=' + _0x504d0a;
                GM_xmlhttpRequest({
                    'method': _0x451c47(0x398),
                    'url': _0x4dcca4,
                    'onload': function (_0x16d1be) {
                        const _0x3253f0 = _0x451c47;
                        let _0x40fed0 = JSON[_0x3253f0(0x42d)](_0x16d1be['response']), _0x59368f = null;
                        _0x40fed0[_0x3253f0(0x435)]['forEach'](_0x17b446 => {
                            const _0x46bb35 = _0x3253f0;
                            _0x17b446['user'][_0x46bb35(0x383)]?.[_0x46bb35(0x273)]() === _0x504d0a?.['toLowerCase']() && (_0x59368f = _0x17b446);
                        }), _0x59368f != null ? (_0x13060d(_0x3253f0(0x2e7), _0x59368f), _0xe7e948(_0x59368f)) : _0xe57aea(_0x504d0a)['then'](_0x5a2de4 => {
                            _0xe7e948(_0x5a2de4);
                        })['catch'](_0x42941f => {
                            const _0x21669c = _0x3253f0;
                            alert(_0x21669c(0x3d7));
                        });
                    },
                    'onerror': function (_0xc4e5bd) {
                        const _0x3d69fd = _0x451c47;
                        _0x13060d('getUserId()', _0x3d69fd(0x3df), _0xc4e5bd), _0x3e8914(_0xc4e5bd);
                    }
                });
            });
        }
        function _0xe57aea(_0x81a210) {
            return new Promise((_0x3bb9c8, _0x428aee) => {
                const _0x4293fb = a0_0x49b2;
                let _0x566af7 = _0x4293fb(0x35a) + _0x81a210;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x566af7,
                    'headers': { 'X-IG-App-ID': _0x3b8a92() },
                    'onload': function (_0x43bbf8) {
                        const _0x31f154 = _0x4293fb;
                        try {
                            let _0x151cf9 = JSON[_0x31f154(0x42d)](_0x43bbf8[_0x31f154(0x433)]), _0x1f8c62 = _0x151cf9?.[_0x31f154(0x238)]?.[_0x31f154(0x3e8)];
                            if (_0x1f8c62 != null) {
                                let _0x4708ac = _0x151cf9?.[_0x31f154(0x238)];
                                _0x4708ac[_0x31f154(0x3e8)]['pk'] = _0x4708ac[_0x31f154(0x3e8)]['id'], _0x13060d(_0x31f154(0x317), _0x151cf9), _0x3bb9c8(_0x4708ac);
                            } else
                                _0x13060d(_0x31f154(0x317), _0x31f154(0x3df), 'undefined'), _0x428aee(_0x31f154(0x22c));
                        } catch (_0xa67d45) {
                            _0x13060d('getUserIdWithAgent()', _0x31f154(0x3df), _0xa67d45[_0x31f154(0x39e)]), _0x428aee(_0xa67d45);
                        }
                    },
                    'onerror': function (_0x408296) {
                        const _0x438a01 = _0x4293fb;
                        _0x13060d('getUserIdWithAgent()', _0x438a01(0x3df), _0x408296), _0x428aee(_0x408296);
                    }
                });
            });
        }
        function _0x40c59c(_0x31ed0c) {
            return new Promise((_0x26cb6b, _0x7c493d) => {
                const _0x275790 = a0_0x49b2;
                let _0xed47e5 = 'https://i.instagram.com/api/v1/users/' + _0x31ed0c + _0x275790(0x22e);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0xed47e5,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x4e148c) {
                        const _0x46bef8 = _0x275790;
                        try {
                            let _0xc46a0b = JSON[_0x46bef8(0x42d)](_0x4e148c[_0x46bef8(0x433)]);
                            _0xc46a0b['status'] !== 'ok' ? (_0x13060d(_0x46bef8(0x2a9), _0x46bef8(0x3df), _0xc46a0b), _0x7c493d('faild')) : (_0x13060d('getUserHighSizeProfile()', _0xc46a0b), _0x26cb6b(_0xc46a0b[_0x46bef8(0x3e8)][_0x46bef8(0x32c)]?.[_0x46bef8(0x466)]));
                        } catch (_0x2ada73) {
                            _0x13060d('getUserHighSizeProfile()', _0x46bef8(0x3df), _0x2ada73), _0x7c493d(_0x2ada73);
                        }
                    },
                    'onerror': function (_0x10d006) {
                        const _0xefbf04 = _0x275790;
                        _0x13060d('getUserHighSizeProfile()', _0xefbf04(0x3df), _0x10d006), _0x7c493d(_0x10d006);
                    }
                });
            });
        }
        function _0x21b0cb(_0x3ab70f) {
            return new Promise((_0x2f9e18, _0x48c8fc) => {
                const _0xcb242c = a0_0x49b2;
                if (!_0x3ab70f)
                    _0x48c8fc(_0xcb242c(0x325));
                let _0x5b8262 = _0x3ab70f, _0x265775 = _0xcb242c(0x412) + _0x5b8262 + '%22}';
                GM_xmlhttpRequest({
                    'method': _0xcb242c(0x398),
                    'url': _0x265775,
                    'onload': function (_0x50a1f4) {
                        const _0x19df61 = _0xcb242c;
                        try {
                            let _0x57b618 = JSON['parse'](_0x50a1f4[_0x19df61(0x433)]);
                            _0x13060d(_0x19df61(0x397), _0x57b618), _0x2f9e18(_0x57b618['data'][_0x19df61(0x229)][_0x19df61(0x3b7)]['username']);
                        } catch (_0x27e5c6) {
                            _0x13060d(_0x19df61(0x397), _0x19df61(0x3df), _0x27e5c6[_0x19df61(0x39e)]), _0x48c8fc(_0x27e5c6);
                        }
                    },
                    'onerror': function (_0x99fd17) {
                        const _0x19b45f = _0xcb242c;
                        _0x13060d(_0x19b45f(0x397), _0x19b45f(0x3df), _0x99fd17), _0x48c8fc(_0x99fd17);
                    }
                });
            });
        }
        function _0x51b7ef(_0x19a068) {
            return new Promise((_0x74dd8d, _0x2b8a58) => {
                const _0x1ffe10 = a0_0x49b2;
                if (!_0x19a068)
                    _0x2b8a58('NOPATH');
                let _0x31b290 = _0x19a068, _0x447dde = _0x1ffe10(0x412) + _0x31b290 + '%22}';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x447dde,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x499cfa) {
                        const _0x15dde2 = _0x1ffe10;
                        try {
                            let _0x1ad2da = JSON[_0x15dde2(0x42d)](_0x499cfa[_0x15dde2(0x433)]);
                            _0x13060d(_0x1ad2da), _0x1ad2da[_0x15dde2(0x3a9)] === _0x15dde2(0x2ba) ? (_0x13060d(_0x15dde2(0x440), _0x15dde2(0x3c0), _0x31b290), _0x47343e(_0x31b290)[_0x15dde2(0x2d8)](_0x55f9a9 => {
                                const _0x430051 = _0x15dde2;
                                _0x74dd8d({
                                    'type': _0x430051(0x226),
                                    'data': _0x55f9a9['xdt_api__v1__media__shortcode__web_info']['items'][0x0]
                                });
                            })[_0x15dde2(0x261)](_0x28d525 => {
                                _0x2b8a58(_0x28d525);
                            })) : _0x74dd8d({
                                'type': _0x15dde2(0x3c4),
                                'data': _0x1ad2da[_0x15dde2(0x238)]
                            });
                        } catch (_0x996c8e) {
                            _0x13060d(_0x15dde2(0x305), _0x15dde2(0x3df), _0x996c8e['message']), _0x2b8a58(_0x996c8e);
                        }
                    },
                    'onerror': function (_0x33da08) {
                        const _0x5ea572 = _0x1ffe10;
                        _0x13060d(_0x5ea572(0x305), 'reject', _0x33da08), _0x2b8a58(_0x33da08);
                    }
                });
            });
        }
        function _0x47343e(_0x1b2a24) {
            return new Promise((_0x1a0568, _0x13619a) => {
                const _0x7b6f69 = a0_0x49b2;
                if (!_0x1b2a24)
                    _0x13619a(_0x7b6f69(0x325));
                let _0x5469b4 = _0x1b2a24, _0x3fdd55 = _0x7b6f69(0x42b) + _0x5469b4 + _0x7b6f69(0x363);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3fdd55,
                    'headers': {
                        'User-Agent': _0x7b6f69(0x26f),
                        'X-IG-App-ID': _0x3b8a92()
                    },
                    'onload': function (_0xecae90) {
                        const _0x40150d = _0x7b6f69;
                        try {
                            let _0x545b47 = JSON['parse'](_0xecae90[_0x40150d(0x433)]);
                            _0x13060d(_0x545b47), _0x545b47[_0x40150d(0x3a9)] === 'fail' ? (alert(_0x40150d(0x468) + _0x545b47[_0x40150d(0x39e)] + ':\x20' + _0x545b47[_0x40150d(0x3c2)]), _0x13060d(_0x40150d(0x45f) + _0x545b47[_0x40150d(0x39e)] + ':\x20' + _0x545b47[_0x40150d(0x3c2)]), _0x13619a(_0xecae90)) : (_0x13060d(_0x40150d(0x243), _0x545b47[_0x40150d(0x238)]), _0x1a0568(_0x545b47[_0x40150d(0x238)]));
                        } catch (_0x17f350) {
                            _0x13060d(_0x40150d(0x243), 'reject', _0x17f350[_0x40150d(0x39e)]), _0x13619a(_0x17f350);
                        }
                    },
                    'onerror': function (_0x4ac5d8) {
                        const _0x1828a5 = _0x7b6f69;
                        _0x13060d('getBlobMediaWithQueryID()', _0x1828a5(0x3df), _0x4ac5d8), _0x13619a(_0x4ac5d8);
                    }
                });
            });
        }
        function _0x590a69(_0x11df34) {
            return new Promise((_0x487c0b, _0x308df5) => {
                const _0x4256c4 = a0_0x49b2;
                let _0x23b6c7 = 'https://i.instagram.com/api/v1/media/' + _0x11df34 + _0x4256c4(0x22e);
                if (_0x11df34 == null) {
                    alert(_0x4256c4(0x424)), _0x13060d(_0x4256c4(0x347), 'reject', 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.'), _0x273247(![]), _0x308df5(-0x1);
                    return;
                }
                if (_0x3b8a92() == null) {
                    alert('Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x13060d(_0x4256c4(0x347), 'reject', _0x4256c4(0x2ca)), _0x273247(![]), _0x308df5(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x23b6c7,
                    'headers': {
                        'User-Agent': window['navigator'][_0x4256c4(0x25d)],
                        'Accept': _0x4256c4(0x415),
                        'X-IG-App-ID': _0x3b8a92()
                    },
                    'onload': function (_0xe88017) {
                        const _0xfc4f9 = _0x4256c4;
                        if (_0xe88017['finalUrl'] == _0x23b6c7) {
                            let _0x1e6ed0 = JSON[_0xfc4f9(0x42d)](_0xe88017[_0xfc4f9(0x433)]);
                            _0x13060d(_0xfc4f9(0x347), _0x1e6ed0), _0x487c0b(_0x1e6ed0);
                        } else {
                            let _0xdd2a54 = new URL(_0xe88017['finalUrl']);
                            _0xdd2a54[_0xfc4f9(0x2f2)][_0xfc4f9(0x46f)]('/accounts/login') ? (_0x13060d(_0xfc4f9(0x347), 'reject', 'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.'), alert(_0xfc4f9(0x244))) : (_0x13060d(_0xfc4f9(0x347), _0xfc4f9(0x3df), 'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0xe88017[_0xfc4f9(0x43a)] + '\x22'), alert(_0xfc4f9(0x46e) + _0xe88017[_0xfc4f9(0x43a)] + '\x22')), _0x273247(![]), _0x308df5(-0x1);
                        }
                    },
                    'onerror': function (_0x598d60) {
                        const _0x3381ea = _0x4256c4;
                        _0x13060d(_0x3381ea(0x347), 'reject', _0x598d60), _0x487c0b(_0x598d60);
                    }
                });
            });
        }
        function _0x3ec6e1(_0x2dc881) {
            const _0x3cc630 = _0x479be8;
            let _0x567ffb = new URL(_0x2dc881), _0x2706aa = _0x567ffb?.['searchParams']?.[_0x3cc630(0x212)](_0x3cc630(0x350))?.[_0x3cc630(0x345)]('.')['at'](0x0);
            return _0x2706aa ? atob(_0x2706aa) : null;
        }
        function _0x3b8a92() {
            const _0x348cdf = _0x479be8;
            let _0x5c6be5 = null;
            return _0x2526ef(_0x348cdf(0x2d2))['each'](function () {
                const _0x55f796 = _0x348cdf, _0xfef023 = /"APP_ID":"([0-9]+)"/ig, _0x4da835 = _0x2526ef(this)[_0x55f796(0x40a)]()[_0x55f796(0x42f)](_0xfef023);
                _0x4da835 != null && _0x5c6be5 == null && (_0x5c6be5 = [..._0x2526ef(this)[_0x55f796(0x40a)]()[_0x55f796(0x1ed)](_0xfef023)]);
            }), _0x5c6be5 ? _0x5c6be5['at'](0x0)['at'](-0x1) : null;
        }
        function _0x273247(_0x138f1e) {
            const _0x29ca28 = _0x479be8;
            _0x138f1e ? (_0x2526ef(_0x29ca28(0x28f))[_0x29ca28(0x3d0)](_0x29ca28(0x417)), _0x2526ef(_0x29ca28(0x28f))[_0x29ca28(0x362)](_0x29ca28(0x3f8), _0x29ca28(0x2f0))) : (_0x2526ef('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')['addClass'](_0x29ca28(0x417)), _0x2526ef(_0x29ca28(0x28f))[_0x29ca28(0x362)](_0x29ca28(0x3f8), ''));
        }
        function _0x1f3f6b(_0x284a2b) {
            const _0x4e3f35 = _0x479be8;
            let _0x53dd57 = _0x2526ef('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x284a2b + _0x4e3f35(0x42c))[_0x4e3f35(0x2f1)](function () {
                const _0x1e2cf2 = _0x4e3f35;
                return _0x2526ef(this)[_0x1e2cf2(0x3c6)]()[_0x1e2cf2(0x2e8)] === 0x0 && _0x2526ef(this)[_0x1e2cf2(0x3aa)](_0x1e2cf2(0x278))['length'] === 0x0 && _0x2526ef(this)[_0x1e2cf2(0x40a)]()?.[_0x1e2cf2(0x273)]() === _0x284a2b?.[_0x1e2cf2(0x273)]();
            })[_0x4e3f35(0x37f)](_0x4e3f35(0x2ed))[_0x4e3f35(0x2f1)](function () {
                const _0x12fb9e = _0x4e3f35;
                return _0x2526ef(this)[_0x12fb9e(0x40a)]()?.['toLowerCase']() !== _0x284a2b?.[_0x12fb9e(0x273)]();
            })[_0x4e3f35(0x2f1)](function () {
                const _0xf1f90c = _0x4e3f35;
                return _0x2526ef(this)[_0xf1f90c(0x3c6)]()['length'] > 0x1;
            })[_0x4e3f35(0x399)]();
            return _0x53dd57['length'] === 0x0 && (_0x53dd57 = _0x2526ef(_0x4e3f35(0x1fe) + _0x284a2b + '\x22]')[_0x4e3f35(0x2f1)](function () {
                const _0x351b9d = _0x4e3f35;
                return _0x2526ef(this)[_0x351b9d(0x3aa)](_0x351b9d(0x391))['length'] > 0x0;
            })[_0x4e3f35(0x37f)](_0x4e3f35(0x2ed))[_0x4e3f35(0x2f1)](function () {
                const _0x34a0ff = _0x4e3f35;
                return _0x2526ef(this)[_0x34a0ff(0x40a)]()?.[_0x34a0ff(0x273)]() !== _0x284a2b?.['toLowerCase']();
            })['filter'](function () {
                return _0x2526ef(this)['children']()['length'] > 0x1;
            })[_0x4e3f35(0x399)]()), _0x53dd57['children']()[_0x4e3f35(0x2f1)](function () {
                const _0x5ecff2 = _0x4e3f35;
                return _0x2526ef(this)[_0x5ecff2(0x2cf)]() < 0xa;
            })[_0x4e3f35(0x399)]()['children']();
        }
        function _0x2bdf85(_0xbce4e3, _0x4edbd2) {
            const _0x1dfcce = _0x479be8;
            _0x2526ef('.circle_wrapper')[_0x1dfcce(0x2e8)] ? (_0x2526ef(_0x1dfcce(0x3f3))[_0x1dfcce(0x40a)](_0xbce4e3 + '/' + _0x4edbd2), _0xbce4e3 >= _0x4edbd2 && _0x2526ef(_0x1dfcce(0x2c4))[_0x1dfcce(0x298)](0xfa, function () {
                const _0x159455 = _0x1dfcce;
                _0x2526ef(this)[_0x159455(0x474)]();
            })) : _0x2526ef(_0x1dfcce(0x3d6))[_0x1dfcce(0x371)](_0x1dfcce(0x3bd) + _0xbce4e3 + '/' + _0x4edbd2 + _0x1dfcce(0x38f));
        }
        function _0x57a0cc(_0x40967a, _0x3f7520) {
            const _0x40cce9 = _0x479be8;
            let _0x52bcf0 = _0x40967a ? _0x40cce9(0x3c8) : '';
            _0x2526ef(_0x40cce9(0x3d6))['append'](_0x40cce9(0x448) + _0x52bcf0 + '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>'), _0x2526ef(_0x40cce9(0x231))[_0x40cce9(0x371)](_0x40cce9(0x214) + _0x194f3c(_0x40cce9(0x23f)) + _0x40cce9(0x41a) + GM_info[_0x40cce9(0x2df)][_0x40cce9(0x3a8)] + _0x40cce9(0x455) + _0x41f26c[_0x40cce9(0x23f)] + '</div></div>'), _0x3f7520 && (_0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')['append'](_0x40cce9(0x3bf)), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')[_0x40cce9(0x371)](_0x40cce9(0x395) + _0x194f3c(_0x40cce9(0x213)) + _0x40cce9(0x1ef)), _0x2526ef(_0x40cce9(0x282))[_0x40cce9(0x371)](_0x40cce9(0x2ae) + _0x194f3c(_0x40cce9(0x385)) + '</button>'), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')['append'](_0x40cce9(0x218) + _0x194f3c('ALL_CHECK') + _0x40cce9(0x285)));
        }
        function _0x21fe09(_0x2f6d1a) {
            const _0x7652a6 = _0x479be8;
            _0x2526ef('.IG_SN_DIG')[_0x7652a6(0x2e8)] && (_0x2f6d1a ? _0x2526ef(_0x7652a6(0x24e))[_0x7652a6(0x205)](_0x7652a6(0x3c8)) : _0x2526ef(_0x7652a6(0x24e))['removeClass']('hidden'));
        }
        function _0x3e3781(_0x2e60c1, _0x246f9d, _0x4bc276, _0x55ba38, _0x3ef648, _0x286325) {
            return new Promise(_0x9250c9 => {
                setTimeout(() => {
                    const _0x273d7c = a0_0x49b2;
                    _0x273247(!![]), fetch(_0x2e60c1)[_0x273d7c(0x2d8)](_0x13ed1c => {
                        const _0x47fbae = _0x273d7c;
                        return _0x13ed1c[_0x47fbae(0x36d)]()[_0x47fbae(0x2d8)](_0x23a48e => {
                            _0x273247(![]), _0xe7ce4d(_0x2e60c1, _0x23a48e, _0x246f9d, _0x4bc276, _0x55ba38, _0x3ef648, _0x286325), _0x9250c9(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0xe7ce4d(_0x17ccd4, _0xa1536, _0x3bab3a, _0x10fc02, _0x12566f, _0x4d9266, _0xce1afd) {
            const _0x48fc2a = _0x479be8;
            _0x12566f = parseInt(_0x12566f[_0x48fc2a(0x419)]()[_0x48fc2a(0x3f5)](0xd, '0'));
            _0x4a14d1[_0x48fc2a(0x28d)] && (_0x12566f = parseInt(_0x12566f['toString']()[_0x48fc2a(0x3f5)](0xd, '0')));
            const _0x171e67 = new Date(_0x12566f), _0x4b5b2a = document[_0x48fc2a(0x2ce)]('a'), _0x4e70b1 = new URL(_0x17ccd4)[_0x48fc2a(0x2f2)][_0x48fc2a(0x345)]('/')['at'](-0x1)[_0x48fc2a(0x345)]('.')[_0x48fc2a(0x266)](0x0, -0x1)['join']('.'), _0x11318c = _0x171e67[_0x48fc2a(0x3d5)]()['toString'](), _0x2c2760 = (_0x171e67[_0x48fc2a(0x23b)]() + 0x1)[_0x48fc2a(0x419)]()[_0x48fc2a(0x242)](0x2, '0'), _0x1a5357 = _0x171e67[_0x48fc2a(0x2cd)]()[_0x48fc2a(0x419)]()[_0x48fc2a(0x242)](0x2, '0'), _0x35cbfa = _0x171e67[_0x48fc2a(0x220)]()[_0x48fc2a(0x419)]()[_0x48fc2a(0x242)](0x2, '0'), _0x3df5a9 = _0x171e67[_0x48fc2a(0x40d)]()['toString']()['padStart'](0x2, '0'), _0xa525c5 = _0x171e67[_0x48fc2a(0x209)]()[_0x48fc2a(0x419)]()[_0x48fc2a(0x242)](0x2, '0');
            var _0x416cf0 = _0x53278b[_0x48fc2a(0x2f3)]['toUpperCase'](), _0x5f9ed9 = _0xce1afd ?? '', _0x41b21a = {
                    '%USERNAME%': _0x3bab3a,
                    '%SOURCE_TYPE%': _0x10fc02,
                    '%SHORTCODE%': _0x5f9ed9,
                    '%YEAR%': _0x11318c,
                    '%2-YEAR%': _0x11318c[_0x48fc2a(0x216)](-0x2),
                    '%MONTH%': _0x2c2760,
                    '%DAY%': _0x1a5357,
                    '%HOUR%': _0x35cbfa,
                    '%MINUTE%': _0x3df5a9,
                    '%SECOND%': _0xa525c5,
                    '%ORIGINAL_NAME%': _0x4e70b1,
                    '%ORIGINAL_NAME_FIRST%': _0x4e70b1[_0x48fc2a(0x345)]('_')['at'](0x0)
                };
            _0x416cf0 = _0x416cf0[_0x48fc2a(0x43f)](/%[\w\-]+%/g, function (_0x41af53) {
                return _0x41b21a[_0x41af53] || _0x41af53;
            });
            const _0x1c9126 = _0x3bab3a + '_' + _0x4e70b1 + '.' + _0x4d9266;
            _0x4b5b2a[_0x48fc2a(0x300)] = URL[_0x48fc2a(0x454)](_0xa1536), _0x4b5b2a[_0x48fc2a(0x327)](_0x48fc2a(0x3dc), _0x4a14d1[_0x48fc2a(0x44b)] ? _0x416cf0 + '.' + _0x4d9266 : _0x1c9126), _0x4b5b2a['click'](), _0x4b5b2a[_0x48fc2a(0x474)]();
        }
        async function _0x3c0549(_0x247479, _0xff7e91) {
            const _0x5dfc75 = _0x479be8;
            let _0x177881 = new Date()['getTime'](), _0x10c871 = Math[_0x5dfc75(0x357)](_0x177881 / 0x3e8), _0x28cc34 = _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x39d)) ? _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x39d)) : _0x53278b[_0x5dfc75(0x409)];
            !_0x28cc34 && _0x2526ef(_0x247479)['attr']('data-path') && (_0x13060d('catching\x20owner\x20name\x20from\x20shortcode:', _0x2526ef(_0x247479)['attr'](_0x5dfc75(0x446))), _0x28cc34 = await _0x21b0cb(_0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x35d)))[_0x5dfc75(0x261)](_0x4918b1 => {
                const _0x579ade = _0x5dfc75;
                _0x13060d(_0x579ade(0x280), _0x4918b1['message']);
            }), _0x28cc34 == null && (_0x28cc34 = _0x5dfc75(0x334)));
            _0x4a14d1['RENAME_PUBLISH_DATE'] && _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x1f9)) && (_0x10c871 = parseInt(_0x2526ef(_0x247479)['attr']('datetime')));
            if (_0x4a14d1[_0x5dfc75(0x428)]) {
                _0x273247(!![]);
                let _0xc680be = await _0x590a69(_0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x29a)));
                _0x273247(![]);
                if (_0xc680be['status'] === 'ok') {
                    var _0x193c90 = null;
                    _0xc680be[_0x5dfc75(0x256)][0x0][_0x5dfc75(0x39f)] ? _0x193c90 = _0xc680be[_0x5dfc75(0x256)][0x0][_0x5dfc75(0x39f)][0x0][_0x5dfc75(0x466)] : (_0xc680be[_0x5dfc75(0x256)][0x0][_0x5dfc75(0x29c)][_0x5dfc75(0x413)][_0x5dfc75(0x43d)](function (_0x2caba0, _0x562486) {
                        const _0x19c419 = _0x5dfc75;
                        let _0x15893b = new URL(_0x2caba0['url'])[_0x19c419(0x279)][_0x19c419(0x212)]('stp'), _0x4c7aa6 = new URL(_0x562486[_0x19c419(0x466)])[_0x19c419(0x279)][_0x19c419(0x212)](_0x19c419(0x219));
                        if (_0x15893b && _0x4c7aa6) {
                            if (_0x15893b[_0x19c419(0x2e8)] > _0x4c7aa6['length'])
                                return 0x1;
                            if (_0x15893b[_0x19c419(0x2e8)] < _0x4c7aa6[_0x19c419(0x2e8)])
                                return -0x1;
                        } else {
                            if (_0x2caba0['width'] < _0x562486[_0x19c419(0x309)])
                                return 0x1;
                            if (_0x2caba0[_0x19c419(0x309)] > _0x562486[_0x19c419(0x309)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x193c90 = _0xc680be[_0x5dfc75(0x256)][0x0][_0x5dfc75(0x29c)][_0x5dfc75(0x413)][0x0]['url']);
                    if (_0xff7e91) {
                        let _0x55ae2c = new URL(_0x193c90);
                        _0x55ae2c[_0x5dfc75(0x25e)] = _0x5dfc75(0x337), _0x26174e(_0x55ae2c[_0x5dfc75(0x300)]);
                    } else
                        _0x3e3781(_0x193c90, _0x28cc34, _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x46a)), _0x10c871, _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x272)), _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x35d)));
                } else {
                    if (_0x4a14d1[_0x5dfc75(0x469)]) {
                        if (_0xff7e91) {
                            let _0x425f42 = new URL(_0x2526ef(_0x247479)['attr'](_0x5dfc75(0x446)));
                            _0x425f42[_0x5dfc75(0x25e)] = _0x5dfc75(0x337), _0x26174e(_0x425f42[_0x5dfc75(0x300)]);
                        } else
                            _0x3e3781(_0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x446)), _0x28cc34, _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x46a)), _0x10c871, _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x272)), _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x35d)));
                    } else
                        alert(_0x5dfc75(0x3e5) + _0xc680be['message']);
                    _0x13060d(_0xc680be);
                }
            } else
                _0x3e3781(_0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x446)), _0x28cc34, _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x46a)), _0x10c871, _0x2526ef(_0x247479)['attr'](_0x5dfc75(0x272)), _0x2526ef(_0x247479)[_0x5dfc75(0x237)](_0x5dfc75(0x35d)));
        }
        function _0x450e61() {
            const _0x490621 = _0x479be8;
            for (let _0x4a48ad of _0x53278b[_0x490621(0x43e)]) {
                _0x13060d('GM_unregisterMenuCommand', _0x4a48ad), GM_unregisterMenuCommand(_0x4a48ad);
            }
            _0x53278b[_0x490621(0x43e)][_0x490621(0x402)](GM_registerMenuCommand(_0x194f3c(_0x490621(0x271)), () => {
                _0x5d6dc0();
            }, { 'accessKey': 'w' })), _0x53278b[_0x490621(0x43e)][_0x490621(0x402)](GM_registerMenuCommand(_0x194f3c(_0x490621(0x33b)), () => {
                const _0x2d2c28 = _0x490621;
                GM_openInTab(_0x2d2c28(0x38b), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x53278b[_0x490621(0x43e)]['push'](GM_registerMenuCommand(_0x194f3c(_0x490621(0x303)), () => {
                _0x5b3596();
            }, { 'accessKey': 'z' })), _0x53278b[_0x490621(0x43e)][_0x490621(0x402)](GM_registerMenuCommand(_0x194f3c(_0x490621(0x369)), () => {
                _0x370f38();
            }, { 'accessKey': 'f' })), _0x53278b['registerMenuIds']['push'](GM_registerMenuCommand(_0x194f3c('CHECK_UPDATE_MENU'), () => {
                _0x58a132();
            }, { 'accessKey': 'c' })), _0x53278b['registerMenuIds']['push'](GM_registerMenuCommand(_0x194f3c(_0x490621(0x353)), () => {
                _0x5abc44();
            }, { 'accessKey': 'r' }));
        }
        function _0x2e1db4(_0x49fba7) {
            const _0x27a573 = _0x479be8;
            if (!_0x4a14d1[_0x27a573(0x3e1)])
                return;
            const _0x4a60a0 = GM_getValue(_0x27a573(0x3b1)) ?? new Date()['getTime'](), _0x552479 = new Date()[_0x27a573(0x3b5)]();
            _0x552479 > parseInt(_0x4a60a0) + _0x49fba7 * 0x3e8 && (GM_setValue(_0x27a573(0x3b1), new Date()[_0x27a573(0x3b5)]()), _0x58a132());
        }
        function _0x58a132() {
            const _0x1822b1 = _0x479be8, _0x3cacb0 = GM_info['script'][_0x1822b1(0x3a8)], _0x362c77 = _0x1822b1(0x3ca);
            GM_xmlhttpRequest({
                'method': _0x1822b1(0x398),
                'url': _0x362c77,
                'onload': function (_0x5e36f8) {
                    const _0x489815 = _0x1822b1, _0x5a11eb = _0x5e36f8[_0x489815(0x1f7)], _0x2b1e73 = _0x5a11eb[_0x489815(0x42f)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x2b1e73 && _0x2b1e73[0x1]) {
                        const _0x23f7ae = _0x2b1e73[0x1];
                        _0x13060d('Current\x20version:\x20', _0x3cacb0, '|', _0x489815(0x2f9), _0x23f7ae), _0x23f7ae !== _0x3cacb0 && typeof this[_0x489815(0x44a)] === _0x489815(0x22c) ? (this[_0x489815(0x44a)] = null, GM_notification({
                            'text': _0x194f3c(_0x489815(0x201)),
                            'title': _0x194f3c(_0x489815(0x1ff)),
                            'tag': _0x489815(0x335),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x489815(0x3d3),
                            'onclick': _0x1b078c => {
                                const _0x62f0a5 = _0x489815;
                                _0x1b078c?.[_0x62f0a5(0x331)]();
                                var _0x1d9f79 = GM_openInTab(GM_info[_0x62f0a5(0x2df)]['downloadURL']);
                                setTimeout(() => {
                                    const _0x88f3bf = _0x62f0a5;
                                    _0x1d9f79[_0x88f3bf(0x28a)]();
                                }, 0xfa);
                            }
                        })) : _0x13060d(_0x489815(0x3b6));
                    } else
                        console[_0x489815(0x3a7)]('Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.');
                }
            });
        }
        function _0x5d6dc0() {
            const _0x434624 = _0x479be8;
            _0x2526ef(_0x434624(0x24e))[_0x434624(0x474)](), _0x57a0cc(), _0x2526ef(_0x434624(0x3ec))[_0x434624(0x40a)](_0x434624(0x27a)), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div')[_0x434624(0x371)](_0x434624(0x2b0));
            for (let _0x2f25bf in _0x363438) {
                _0x2526ef(_0x434624(0x228))[_0x434624(0x371)](_0x434624(0x340) + _0x2f25bf + '\x22\x20' + (_0x53278b[_0x434624(0x2b9)] == _0x2f25bf ? _0x434624(0x35b) : '') + '>' + _0x363438[_0x2f25bf] + '</option>');
            }
            for (let _0x20dd94 in _0x4a14d1) {
                _0x2526ef(_0x434624(0x31f))[_0x434624(0x371)](_0x434624(0x224) + (_0xba7067[_0x434624(0x3f0)](_0x20dd94) ? _0x434624(0x2a3) : '') + _0x434624(0x28b) + _0x194f3c(_0x20dd94 + '_INTRO') + _0x434624(0x348) + (_0x20dd94 + _0x434624(0x37e)) + _0x434624(0x2f4) + _0x20dd94 + '\x22>' + _0x194f3c(_0x20dd94) + _0x434624(0x2aa) + _0x20dd94 + _0x434624(0x3cb) + (_0x4a14d1[_0x20dd94] === !![] ? _0x434624(0x32b) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x20dd94 === _0x434624(0x288) && _0x2526ef(_0x434624(0x32f) + _0x20dd94 + '\x22]')['parent'](_0x434624(0x2b6))['on']('contextmenu', function (_0x3650fc) {
                    const _0x73d7ec = _0x434624;
                    _0x3650fc[_0x73d7ec(0x331)](), _0x2526ef(this)['find'](_0x73d7ec(0x2fe))['length'] === 0x0 && (_0x2526ef(this)['append'](_0x73d7ec(0x3b8)), _0x2526ef(this)['children'](_0x73d7ec(0x2fe))['append'](_0x73d7ec(0x2cb) + _0x53278b[_0x73d7ec(0x1f2)] + _0x73d7ec(0x1f6)), _0x2526ef(this)[_0x73d7ec(0x3c6)](_0x73d7ec(0x2fe))[_0x73d7ec(0x371)](_0x73d7ec(0x2cb) + _0x53278b[_0x73d7ec(0x1f2)] + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x2526ef(this)[_0x73d7ec(0x3c6)](_0x73d7ec(0x2fe))[_0x73d7ec(0x371)](_0x73d7ec(0x432) + _0x41f26c[_0x73d7ec(0x23f)] + _0x73d7ec(0x3e2)));
                }), _0x20dd94 === 'AUTO_RENAME' && _0x2526ef(_0x434624(0x32f) + _0x20dd94 + '\x22]')[_0x434624(0x2d7)](_0x434624(0x2b6))['on']('contextmenu', function (_0x50917d) {
                    const _0xede35b = _0x434624;
                    _0x50917d['preventDefault'](), _0x2526ef(this)[_0xede35b(0x3aa)](_0xede35b(0x2fe))[_0xede35b(0x2e8)] === 0x0 && (_0x2526ef(this)[_0xede35b(0x371)](_0xede35b(0x3b8)), _0x2526ef(this)[_0xede35b(0x3c6)](_0xede35b(0x2fe))[_0xede35b(0x371)]('<input\x20id=\x22date_format\x22\x20value=\x22' + _0x53278b[_0xede35b(0x2f3)] + '\x22\x20/>'), _0x2526ef(this)['children'](_0xede35b(0x2fe))[_0xede35b(0x371)](_0xede35b(0x432) + _0x41f26c[_0xede35b(0x23f)] + '</div>'));
                });
            }
        }
        function _0x5b3596() {
            const _0x588da3 = _0x479be8;
            _0x2526ef(_0x588da3(0x24e))[_0x588da3(0x474)](), _0x57a0cc(), _0x2526ef(_0x588da3(0x3ec))[_0x588da3(0x40a)](_0x588da3(0x420)), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY')['append'](_0x588da3(0x407)), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x588da3(0x371)](_0x588da3(0x386)), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x588da3(0x371)](_0x588da3(0x23c) + _0x194f3c(_0x588da3(0x2f6)) + _0x588da3(0x30a)), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x588da3(0x371)](_0x588da3(0x41b) + _0x194f3c(_0x588da3(0x436)) + _0x588da3(0x30a)), _0x2526ef(_0x588da3(0x423))[_0x588da3(0x371)](_0x588da3(0x2a1) + _0x194f3c(_0x588da3(0x296)) + _0x588da3(0x36c)), _0x2526ef(_0x588da3(0x423))[_0x588da3(0x371)](_0x588da3(0x2c8) + _0x194f3c(_0x588da3(0x461)) + '</a></button>'), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x588da3(0x371)](_0x588da3(0x24f) + _0x194f3c(_0x588da3(0x2e4)) + _0x588da3(0x30a));
        }
        function _0x370f38() {
            const _0x41bfb5 = _0x479be8;
            _0x2526ef('.IG_SN_DIG')[_0x41bfb5(0x474)](), _0x57a0cc(), _0x2526ef(_0x41bfb5(0x3ec))[_0x41bfb5(0x40a)]('Feedback\x20Options'), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x41bfb5(0x371)](_0x41bfb5(0x386)), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x41bfb5(0x371)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>' + _0x194f3c(_0x41bfb5(0x400)) + _0x41bfb5(0x30a)), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append'](_0x41bfb5(0x2c8) + _0x194f3c(_0x41bfb5(0x461)) + _0x41bfb5(0x30a)), _0x2526ef(_0x41bfb5(0x423))[_0x41bfb5(0x371)](_0x41bfb5(0x24f) + _0x194f3c('REPORT_DISCORD') + '</a></button>');
        }
        function _0x26174e(_0x2882e6) {
            const _0xef6d94 = _0x479be8;
            var _0x349e34 = document[_0xef6d94(0x2ce)]('a');
            _0x349e34[_0xef6d94(0x300)] = _0x2882e6, _0x349e34['target'] = _0xef6d94(0x283), document[_0xef6d94(0x3d6)][_0xef6d94(0x275)](_0x349e34), _0x349e34[_0xef6d94(0x3fb)](), _0x349e34[_0xef6d94(0x474)]();
        }
        function _0x5abc44() {
            const _0x352116 = _0x479be8;
            clearInterval(_0x53278b[_0x352116(0x32e)]), _0x53278b[_0x352116(0x3cd)]['forEach'](_0x35f816 => {
                const _0x541dda = _0x352116;
                _0x35f816[_0x541dda(0x3af)][_0x541dda(0x451)](_0x225bb1 => {
                    const _0x271efb = _0x541dda;
                    _0x2526ef(_0x35f816[_0x271efb(0x3a5)])[_0x271efb(0x462)](_0x271efb(0x3fb), _0x225bb1);
                });
            }), _0x53278b['GL_registerEventList'] = [], _0x2526ef(_0x352116(0x248))[_0x352116(0x474)](), _0x2526ef(_0x352116(0x2fb))[_0x352116(0x474)](), _0x2526ef(_0x352116(0x2ec))[_0x352116(0x2ac)](_0x352116(0x329)), _0x53278b[_0x352116(0x473)] = ![], _0x53278b['firstStarted'] = ![], _0x53278b[_0x352116(0x227)] = location[_0x352116(0x300)], _0x53278b[_0x352116(0x2db)][_0x352116(0x2d5)](), _0x13060d(_0x352116(0x33a));
        }
        function _0x13060d(..._0x505619) {
            const _0x171073 = _0x479be8;
            var _0x53af91 = new Date();
            _0x53278b[_0x171073(0x3fe)][_0x171073(0x402)]({
                'time': _0x53af91[_0x171073(0x3b5)](),
                'content': [..._0x505619]
            }), _0x53278b[_0x171073(0x3fe)]['length'] > 0x3e8 && (_0x53278b[_0x171073(0x3fe)] = [
                {
                    'time': _0x53af91[_0x171073(0x3b5)](),
                    'content': ['logger\x20sliced']
                },
                ..._0x53278b[_0x171073(0x3fe)]['slice'](-0x3e7)
            ]), console[_0x171073(0x21c)]('[' + _0x53af91[_0x171073(0x2e9)]() + ']', ..._0x505619);
        }
        function _0x44d3c1() {
            const _0x26d610 = _0x479be8;
            for (let _0xc36f2e in _0x4a14d1) {
                GM_getValue(_0xc36f2e) != null && typeof GM_getValue(_0xc36f2e) === _0x26d610(0x2c1) && (_0x4a14d1[_0xc36f2e] = GM_getValue(_0xc36f2e), _0xc36f2e === 'MODIFY_VIDEO_VOLUME' && GM_getValue(_0xc36f2e) !== !![] && (_0x53278b[_0x26d610(0x1f2)] = 0x1));
            }
        }
        function _0xcc095b(_0x3c5c40, _0x5510cd, _0x4a7f1a, _0x5c843a = '') {
            const _0x5c5ab3 = _0x479be8;
            _0x5510cd[_0x5c5ab3(0x3aa)](_0x5c5ab3(0x215))[_0x5c5ab3(0x2e8)] === 0x0 ? (_0x5510cd[_0x5c5ab3(0x371)](_0x5c5ab3(0x2ea) + _0x5c843a + _0x5c5ab3(0x313)), _0x5510cd[_0x5c5ab3(0x3aa)](_0x5c5ab3(0x215))[_0x5c5ab3(0x371)]('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x53278b[_0x5c5ab3(0x1f2)] + '\x22\x20/></div>'), _0x5510cd[_0x5c5ab3(0x3aa)](_0x5c5ab3(0x38e))['attr']('style', _0x5c5ab3(0x3fd) + (_0x53278b[_0x5c5ab3(0x1f2)] * 0x64 + '%')), _0x5510cd['find'](_0x5c5ab3(0x38e))['on'](_0x5c5ab3(0x393), function () {
                const _0x38a8dc = _0x5c5ab3;
                var _0x379e2e = _0x2526ef(this)['val']() * 0x64 + '%';
                _0x53278b['videoVolume'] = _0x2526ef(this)['val'](), GM_setValue(_0x38a8dc(0x27d), _0x2526ef(this)['val']()), _0x2526ef(this)[_0x38a8dc(0x237)](_0x38a8dc(0x3be), _0x38a8dc(0x3fd) + _0x379e2e), _0x3c5c40['each'](function () {
                    const _0x3bba49 = _0x38a8dc;
                    _0x13060d('(' + _0x4a7f1a + ')', _0x3bba49(0x2c2)), this[_0x3bba49(0x3db)] = _0x53278b[_0x3bba49(0x1f2)];
                });
            }), _0x5510cd[_0x5c5ab3(0x3aa)](_0x5c5ab3(0x38e))['on'](_0x5c5ab3(0x3ac), function () {
                const _0x58dd8f = _0x5c5ab3;
                var _0x46eacf = _0x53278b['videoVolume'] * 0x64 + '%';
                _0x2526ef(this)[_0x58dd8f(0x237)]('style', '--ig-track-progress:\x20' + _0x46eacf), _0x2526ef(this)[_0x58dd8f(0x3de)](_0x53278b[_0x58dd8f(0x1f2)]), _0x3c5c40[_0x58dd8f(0x20b)](function () {
                    const _0x49d539 = _0x58dd8f;
                    _0x13060d('(' + _0x4a7f1a + ')', _0x49d539(0x2c2)), this['volume'] = _0x53278b[_0x49d539(0x1f2)];
                });
            }), _0x5510cd['find'](_0x5c5ab3(0x215))['on']('click', function (_0x39dd10) {
                const _0x466679 = _0x5c5ab3;
                _0x39dd10[_0x466679(0x46b)](), _0x39dd10[_0x466679(0x331)]();
            })) : _0x5510cd[_0x5c5ab3(0x3aa)](_0x5c5ab3(0x215))['remove']();
        }
        function _0x39c2f7() {
            const _0x18b18e = _0x479be8;
            var _0x5183bc = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x18b18e(0x304),
                        'NOTICE_UPDATE_CONTENT': _0x18b18e(0x2f8),
                        'CHECK_UPDATE': 'Checking\x20for\x20Script\x20Updates',
                        'CHECK_UPDATE_MENU': _0x18b18e(0x45a),
                        'CHECK_UPDATE_INTRO': _0x18b18e(0x2e3),
                        'RELOAD_SCRIPT': _0x18b18e(0x3a4),
                        'DONATE': _0x18b18e(0x241),
                        'FEEDBACK': _0x18b18e(0x35e),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x18b18e(0x339),
                        'SELECT_AND_COPY': 'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
                        'DOWNLOAD_DOM_TREE': _0x18b18e(0x263),
                        'REPORT_GITHUB': _0x18b18e(0x2a8),
                        'REPORT_DISCORD': 'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
                        'REPORT_FORK': _0x18b18e(0x1eb),
                        'DEBUG': 'Debug\x20Window',
                        'CLOSE': _0x18b18e(0x36e),
                        'ALL_CHECK': _0x18b18e(0x3f1),
                        'BATCH_DOWNLOAD_SELECTED': _0x18b18e(0x293),
                        'BATCH_DOWNLOAD_DIRECT': _0x18b18e(0x2b8),
                        'IMG': _0x18b18e(0x375),
                        'VID': _0x18b18e(0x430),
                        'DW': _0x18b18e(0x40b),
                        'DW_ALL': _0x18b18e(0x2b8),
                        'THUMBNAIL_INTRO': _0x18b18e(0x314),
                        'LOAD_BLOB_ONE': _0x18b18e(0x2e0),
                        'LOAD_BLOB_MULTIPLE': 'Loading\x20Blob\x20Media\x20and\x20Others...',
                        'LOAD_BLOB_RELOAD': _0x18b18e(0x389),
                        'NO_CHECK_RESOURCE': _0x18b18e(0x421),
                        'NO_VID_URL': 'Cannot\x20find\x20video\x20URL.',
                        'SETTING': _0x18b18e(0x381),
                        'AUTO_RENAME': _0x18b18e(0x471),
                        'RENAME_SHORTCODE': _0x18b18e(0x442),
                        'RENAME_PUBLISH_DATE': _0x18b18e(0x378),
                        'RENAME_LOCATE_DATE': 'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
                        'DISABLE_VIDEO_LOOPING': _0x18b18e(0x2a7),
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x18b18e(0x443),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x18b18e(0x29f),
                        'DIRECT_DOWNLOAD_ALL': _0x18b18e(0x2af),
                        'MODIFY_VIDEO_VOLUME': _0x18b18e(0x346),
                        'SCROLL_BUTTON': _0x18b18e(0x39b),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x18b18e(0x281),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x18b18e(0x2d4),
                        'AUTO_RENAME_INTRO': _0x18b18e(0x447),
                        'RENAME_SHORTCODE_INTRO': _0x18b18e(0x246),
                        'RENAME_PUBLISH_DATE_INTRO': _0x18b18e(0x359),
                        'RENAME_LOCATE_DATE_INTRO': _0x18b18e(0x3bb),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x18b18e(0x292),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x18b18e(0x373),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x18b18e(0x439),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x18b18e(0x21b),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x18b18e(0x370),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x18b18e(0x254),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x18b18e(0x444),
                        'SCROLL_BUTTON_INTRO': _0x18b18e(0x1ec),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x18b18e(0x30c),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x18b18e(0x465),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x18b18e(0x289),
                        'SKIP_VIEW_STORY_CONFIRM': 'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': 'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.'
                    }
                }, _0x5f268e = Object[_0x18b18e(0x3a1)]({}, _0x5183bc, _0x53278b['locale']), _0x286598 = Object[_0x18b18e(0x2dd)](_0x5f268e)[_0x18b18e(0x43d)]()['reduce']((_0x17a81f, _0x192399) => {
                    return _0x17a81f[_0x192399] = _0x5f268e[_0x192399], _0x17a81f;
                }, {});
            return _0x286598;
        }
        async function _0x343a80(_0x54d95a) {
            return new Promise((_0xc76075, _0x4882e8) => {
                const _0x1df40a = a0_0x49b2;
                GM_xmlhttpRequest({
                    'method': _0x1df40a(0x398),
                    'url': _0x1df40a(0x274) + _0x54d95a + _0x1df40a(0x247),
                    'onload': function (_0x5a5aa9) {
                        const _0x1cbd14 = _0x1df40a;
                        try {
                            let _0x2d2482 = JSON[_0x1cbd14(0x42d)](_0x5a5aa9[_0x1cbd14(0x433)]);
                            _0xc76075(_0x2d2482);
                        } catch (_0x379d66) {
                            _0x4882e8(_0x379d66);
                        }
                    },
                    'onerror': function (_0x51f62f) {
                        const _0x26de0a = _0x1df40a;
                        _0x13060d('getTranslationText()', _0x26de0a(0x3df), _0x51f62f), _0x4882e8(_0x51f62f);
                    }
                });
            });
        }
        function _0x194f3c(_0x32883c) {
            const _0x393376 = _0x479be8, _0x2a962f = _0x39c2f7();
            return _0x2a962f[_0x53278b[_0x393376(0x2b9)]] != undefined && _0x2a962f[_0x53278b[_0x393376(0x2b9)]][_0x32883c] != undefined ? _0x2a962f[_0x53278b[_0x393376(0x2b9)]][_0x32883c] : _0x2a962f['en-US'][_0x32883c];
        }
        function _0x2e72d5() {
            const _0x4c5543 = _0x479be8;
            _0x2526ef(_0x4c5543(0x2be))[_0x4c5543(0x20b)](function () {
                const _0x3a2dee = _0x4c5543;
                _0x2526ef(this)[_0x3a2dee(0x40a)](_0x194f3c(_0x2526ef(this)[_0x3a2dee(0x237)](_0x3a2dee(0x30f))));
            }), _0x2526ef(_0x4c5543(0x404))[_0x4c5543(0x20b)](function () {
                const _0x58b734 = _0x4c5543;
                _0x2526ef(this)[_0x58b734(0x237)]('title', _0x194f3c(_0x2526ef(this)[_0x58b734(0x237)](_0x58b734(0x2e2))));
            });
        }
        _0x2526ef(function () {
            const _0x4b1b73 = _0x479be8;
            function _0x1bab50(_0x50c85e) {
                const _0x5561f4 = a0_0x49b2;
                var _0x4e555e = [];
                for (var _0x42ea20 of _0x50c85e) {
                    _0x4e555e[_0x5561f4(0x402)]({
                        'tagName': _0x42ea20[_0x5561f4(0x1f4)],
                        'id': _0x42ea20['id'],
                        'className': _0x42ea20[_0x5561f4(0x425)]
                    });
                }
                return _0x4e555e;
            }
            function _0x47425a() {
                const _0x42c51f = a0_0x49b2;
                let _0x26fa7f = _0x2526ef(_0x42c51f(0x21f))[0x0];
                var _0x4e853e = '';
                _0x53278b[_0x42c51f(0x3fe)][_0x42c51f(0x451)](_0x453940 => {
                    const _0x122577 = _0x42c51f;
                    var _0x2343c7 = JSON['stringify'](_0x453940[_0x122577(0x35f)], function (_0x5bdf6c, _0x4bd66f) {
                        const _0x48f641 = _0x122577;
                        if (Array[_0x48f641(0x2fc)](this)) {
                            if (typeof _0x4bd66f === 'object' && _0x4bd66f instanceof jQuery)
                                return _0x1bab50(_0x4bd66f);
                            return _0x4bd66f;
                        } else
                            return _0x4bd66f;
                    }, '\x09');
                    _0x4e853e += new Date(_0x453940[_0x122577(0x44c)])['toISOString']() + ':\x20' + _0x2343c7 + '\x0a';
                }), _0x2526ef('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x42c51f(0x40a)](_0x42c51f(0x354) + _0x4e853e + _0x42c51f(0x321) + location['pathname'] + _0x42c51f(0x46c) + _0x26fa7f[_0x42c51f(0x23d)]);
            }
            _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x255), function () {
                _0x47425a();
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x2f7), function () {
                const _0x48320a = _0x4b1b73;
                _0x2526ef(_0x48320a(0x384))[_0x48320a(0x458)](), document[_0x48320a(0x2bb)](_0x48320a(0x361));
            }), _0x2526ef(_0x4b1b73(0x3d6))['on']('click', '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE', function () {
                const _0x35f478 = _0x4b1b73;
                _0x2526ef(_0x35f478(0x384))[_0x35f478(0x40a)]()['length'] === 0x0 && _0x47425a();
                var _0x126f7b = _0x2526ef(_0x35f478(0x384))[_0x35f478(0x40a)](), _0x431bfa = document[_0x35f478(0x2ce)]('a'), _0x4dc94d = new Blob([_0x126f7b], { 'type': 'text/plain' });
                _0x431bfa[_0x35f478(0x300)] = URL['createObjectURL'](_0x4dc94d), _0x431bfa['download'] = _0x35f478(0x367) + new Date()[_0x35f478(0x3b5)]() + _0x35f478(0x34f), document[_0x35f478(0x3d6)][_0x35f478(0x275)](_0x431bfa), _0x431bfa[_0x35f478(0x3fb)](), _0x431bfa[_0x35f478(0x474)]();
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x3dd), function () {
                const _0x383258 = _0x4b1b73;
                _0x2526ef(this)[_0x383258(0x2d7)]('#tempWrapper')[_0x383258(0x2e8)] > 0x0 ? _0x2526ef(this)[_0x383258(0x2d7)](_0x383258(0x2fe))[_0x383258(0x298)](0xfa, function () {
                    _0x2526ef(this)['remove']();
                }) : _0x2526ef(_0x383258(0x24e))[_0x383258(0x474)]();
            }), _0x2526ef(window)['on'](_0x4b1b73(0x379), function (_0x2cc555) {
                const _0x36f35e = _0x4b1b73;
                _0x2cc555[_0x36f35e(0x268)] == '81' && _0x2cc555[_0x36f35e(0x2b1)] && (_0x2526ef(_0x36f35e(0x24e))['remove'](), _0x2cc555[_0x36f35e(0x331)]()), _0x2cc555[_0x36f35e(0x268)] == '87' && _0x2cc555[_0x36f35e(0x2b1)] && (_0x5d6dc0(), _0x2cc555[_0x36f35e(0x331)]()), _0x2cc555['which'] == '90' && _0x2cc555[_0x36f35e(0x2b1)] && (_0x5b3596(), _0x2cc555[_0x36f35e(0x331)]()), _0x2cc555['which'] == '82' && _0x2cc555[_0x36f35e(0x2b1)] && (_0x5abc44(), _0x2cc555[_0x36f35e(0x331)]()), _0x2cc555[_0x36f35e(0x268)] == '83' && _0x2cc555[_0x36f35e(0x2b1)] && (location[_0x36f35e(0x300)][_0x36f35e(0x42f)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x2526ef('.IG_DWSTORY')[_0x36f35e(0x2e8)] > 0x0 && _0x2526ef(_0x36f35e(0x27f))?.[_0x36f35e(0x3af)]('click'), location[_0x36f35e(0x300)][_0x36f35e(0x42f)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x2526ef('.IG_DWHISTORY')['length'] > 0x0 && _0x2526ef('.IG_DWHISTORY')?.['trigger']('click'), _0x2cc555[_0x36f35e(0x331)]());
            }), _0x2526ef('body')['on'](_0x4b1b73(0x294), '.IG_SN_DIG\x20input', function () {
                const _0x51e61c = _0x4b1b73;
                var _0x5a2669 = _0x2526ef(this)[_0x51e61c(0x237)]('id');
                if (_0x5a2669 && _0x4a14d1[_0x5a2669] !== undefined) {
                    let _0x5950d0 = _0x2526ef(this)[_0x51e61c(0x308)](_0x51e61c(0x32b));
                    GM_setValue(_0x5a2669, _0x5950d0), _0x4a14d1[_0x5a2669] = _0x5950d0, console['log'](_0x51e61c(0x2a4), _0x5a2669, _0x5950d0);
                }
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x2fa), function (_0x55fc6c) {
                const _0x55c063 = _0x4b1b73;
                _0x2526ef(this)[_0x55c063(0x3aa)]('#tempWrapper')[_0x55c063(0x2e8)] > 0x0 && _0x55fc6c[_0x55c063(0x331)]();
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x294), '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)', function () {
                const _0x18fe67 = _0x4b1b73;
                let _0x5f0661 = _0x2526ef(this)[_0x18fe67(0x3de)]();
                _0x2526ef(this)['attr'](_0x18fe67(0x429)) == _0x18fe67(0x44d) ? _0x2526ef(this)[_0x18fe67(0x265)]()['val'](_0x5f0661) : _0x2526ef(this)[_0x18fe67(0x22a)]()[_0x18fe67(0x3de)](_0x5f0661), _0x5f0661 >= 0x0 && _0x5f0661 <= 0x1 && (_0x53278b['videoVolume'] = _0x5f0661, GM_setValue(_0x18fe67(0x27d), _0x5f0661));
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x393), _0x4b1b73(0x3f7), function () {
                const _0x4cbcd6 = _0x4b1b73;
                if (_0x2526ef(this)[_0x4cbcd6(0x237)](_0x4cbcd6(0x429)) == _0x4cbcd6(0x44d)) {
                    let _0x1bf478 = _0x2526ef(this)[_0x4cbcd6(0x3de)]();
                    _0x2526ef(this)[_0x4cbcd6(0x265)]()[_0x4cbcd6(0x3de)](_0x1bf478);
                } else {
                    let _0x5dc274 = _0x2526ef(this)['val']();
                    _0x5dc274 >= 0x0 && _0x5dc274 <= 0x1 ? _0x2526ef(this)[_0x4cbcd6(0x22a)]()['val'](_0x5dc274) : _0x5dc274 < 0x0 ? _0x2526ef(this)[_0x4cbcd6(0x3de)](0x0) : _0x2526ef(this)[_0x4cbcd6(0x3de)](0x1);
                }
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x393), _0x4b1b73(0x45c), function () {
                const _0x15a9cc = _0x4b1b73;
                GM_setValue('G_RENAME_FORMAT', _0x2526ef(this)[_0x15a9cc(0x3de)]()), _0x53278b['fileRenameFormat'] = _0x2526ef(this)[_0x15a9cc(0x3de)]();
            }), _0x2526ef('body')['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x318), function (_0x1c5b2e) {
                _0x1c5b2e['preventDefault'](), _0x3c0549(this);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x2dc), function () {
                const _0x3ec1a2 = _0x4b1b73;
                if (_0x4a14d1['FORCE_RESOURCE_VIA_MEDIA'] && _0x4a14d1['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                    _0x3c0549(_0x2526ef(this)[_0x3ec1a2(0x2d7)]()[_0x3ec1a2(0x3c6)]('a')['first']()[0x0], !![]);
                else {
                    var _0x21de1b = new URL(_0x2526ef(this)[_0x3ec1a2(0x2d7)]()[_0x3ec1a2(0x3c6)]('a')[_0x3ec1a2(0x237)](_0x3ec1a2(0x446)));
                    _0x21de1b[_0x3ec1a2(0x25e)] = _0x3ec1a2(0x337), _0x26174e(_0x21de1b[_0x3ec1a2(0x300)]);
                }
            }), _0x2526ef('body')['on'](_0x4b1b73(0x3fb), '.IG_SN_DIG_BODY\x20.videoThumbnail', function () {
                const _0x47a284 = _0x4b1b73;
                let _0x1c0e8c = new Date()[_0x47a284(0x3b5)]();
                _0x4a14d1[_0x47a284(0x28d)] && _0x2526ef(this)[_0x47a284(0x2d7)]()['children']('a')[_0x47a284(0x237)]('datetime') && (_0x1c0e8c = _0x2526ef(this)[_0x47a284(0x2d7)]()[_0x47a284(0x3c6)]('a')['attr'](_0x47a284(0x1f9)));
                let _0x45550c = _0x2526ef(this)['parent']()['children']('a')[_0x47a284(0x237)](_0x47a284(0x35d)) ?? _0x2526ef(_0x47a284(0x2fd))[_0x47a284(0x40a)]();
                _0x3e3781(_0x2526ef(this)[_0x47a284(0x2d7)]()['children']('a')[_0x47a284(0x3aa)]('img')[_0x47a284(0x399)]()[_0x47a284(0x237)](_0x47a284(0x3da)), _0x2526ef(this)['parent']()[_0x47a284(0x3c6)]('a')['attr'](_0x47a284(0x39d)), 'thumbnail', _0x1c0e8c, _0x47a284(0x2bc), _0x45550c);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x27f), function () {
                _0x11a7e8(!![]);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x2a5), function () {
                _0xd312b();
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), '.IG_DWNEWTAB', function (_0x22fb61) {
                const _0x433f67 = _0x4b1b73;
                _0x22fb61[_0x433f67(0x331)](), _0x11a7e8(!![], !![], !![]);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on']('click', _0x4b1b73(0x2d9), function () {
                _0x17866b(!![]);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x25c), function (_0x1e968d) {
                const _0x34594c = _0x4b1b73;
                _0x1e968d[_0x34594c(0x46b)](), _0x5388f9(!![]);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), '.IG_DWHISTORY', function () {
                _0x14981d(!![]);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on']('click', '.IG_DWHISTORY_ALL', function () {
                _0x5b635b();
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x26d), function (_0x4e3095) {
                const _0x42016f = _0x4b1b73;
                _0x4e3095[_0x42016f(0x331)](), _0x14981d(!![], !![]);
            }), _0x2526ef('body')['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x342), function () {
                _0xc41be9(!![]);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x326), function () {
                _0x3a195a(!![], !![]);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x31c), function () {
                _0x3a195a(!![], !![], !![]);
            }), _0x2526ef('body')['on']('click', _0x4b1b73(0x29b), function () {
                _0x3a195a(!![], ![]);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x40c), _0x4b1b73(0x2a0), function (_0x4d258f) {
                const _0xa54f7e = _0x4b1b73;
                if (_0x4d258f[_0xa54f7e(0x268)] === 0x3 || _0x4d258f[_0xa54f7e(0x268)] === 0x2) {
                    if (location[_0xa54f7e(0x300)] === _0xa54f7e(0x26b) && _0x4a14d1['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x4d258f[_0xa54f7e(0x331)]();
                        if (_0x2526ef(this)[_0xa54f7e(0x3aa)](_0xa54f7e(0x45d))[_0xa54f7e(0x2e8)] > 0x0) {
                            const _0x56e07a = 'https://www.instagram.com/' + _0x2526ef(this)[_0xa54f7e(0x3c6)](_0xa54f7e(0x449))[_0xa54f7e(0x360)]()[_0xa54f7e(0x40a)]();
                            _0x4d258f['which'] === 0x2 ? GM_openInTab(_0x56e07a) : location[_0xa54f7e(0x300)] = _0x56e07a;
                        }
                    }
                }
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x294), _0x4b1b73(0x2c0), function () {
                const _0x280668 = _0x4b1b73;
                var _0x42271f = _0x2526ef(this)[_0x280668(0x3aa)](_0x280668(0x393))['prop'](_0x280668(0x32b));
                _0x2526ef('.IG_SN_DIG_BODY\x20.inner_box')[_0x280668(0x20b)](function () {
                    const _0x496113 = _0x280668;
                    _0x2526ef(this)[_0x496113(0x308)]('checked', _0x42271f);
                });
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x294), _0x4b1b73(0x3e0), function () {
                const _0x2591fa = _0x4b1b73;
                var _0x4275cd = _0x2526ef(_0x2591fa(0x41c))[_0x2591fa(0x2e8)], _0x467008 = _0x2526ef('.IG_SN_DIG_BODY\x20.inner_box')[_0x2591fa(0x2e8)];
                _0x2526ef('.IG_SN_DIG_TITLE\x20.checkbox')['find'](_0x2591fa(0x393))[_0x2591fa(0x308)](_0x2591fa(0x32b), _0x4275cd == _0x467008);
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x3fb), _0x4b1b73(0x3ba), function () {
                const _0x55b716 = _0x4b1b73;
                let _0x2d990d = 0x0;
                _0x2526ef(_0x55b716(0x259))[_0x55b716(0x20b)](function () {
                    const _0x556db1 = _0x55b716;
                    _0x2526ef(this)[_0x556db1(0x22a)]()[_0x556db1(0x3c6)]('input')[_0x556db1(0x308)]('checked') && (_0x2526ef(this)['trigger'](_0x556db1(0x3fb)), _0x2d990d++);
                }), _0x2d990d == 0x0 && alert(_0x194f3c('NO_CHECK_RESOURCE'));
            }), _0x2526ef(_0x4b1b73(0x3d6))['on'](_0x4b1b73(0x294), _0x4b1b73(0x2ab), function () {
                const _0x547715 = _0x4b1b73;
                GM_setValue('lang', _0x2526ef(this)[_0x547715(0x3de)]()), _0x53278b[_0x547715(0x2b9)] = _0x2526ef(this)[_0x547715(0x3de)](), _0x53278b['lang']?.['startsWith']('en') || _0x53278b['locale'][_0x53278b[_0x547715(0x2b9)]] != null ? (_0x2e72d5(), _0x450e61()) : _0x343a80(_0x53278b[_0x547715(0x2b9)])[_0x547715(0x2d8)](_0x2ac577 => {
                    const _0x178f39 = _0x547715;
                    _0x53278b[_0x178f39(0x437)][_0x53278b[_0x178f39(0x2b9)]] = _0x2ac577, _0x2e72d5(), _0x450e61();
                })[_0x547715(0x261)](_0x24b69d => {
                    const _0x4b8309 = _0x547715;
                    console['error'](_0x4b8309(0x262), _0x24b69d);
                });
            }), _0x2526ef(_0x4b1b73(0x3d6))['on']('click', _0x4b1b73(0x232), function () {
                _0x2526ef('.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]')['each'](function () {
                    const _0x284e52 = a0_0x49b2;
                    _0x2526ef(this)[_0x284e52(0x3af)]('click');
                });
            });
            const _0x1e5c63 = new MutationObserver(_0x472945 => {
                const _0x246bbb = _0x4b1b73;
                for (const _0x2292d5 of _0x472945) {
                    _0x2292d5[_0x246bbb(0x429)] === _0x246bbb(0x2e1) && _0x2292d5[_0x246bbb(0x2eb)][_0x246bbb(0x451)](_0x42b5c8 => {
                        const _0x289ff5 = _0x246bbb, _0x33d79b = _0x2526ef(_0x42b5c8)[_0x289ff5(0x3aa)]('video');
                        if (_0x33d79b[_0x289ff5(0x2e8)] > 0x0) {
                            _0x4a14d1['MODIFY_VIDEO_VOLUME'] && _0x33d79b[_0x289ff5(0x20b)](function () {
                                const _0x12b593 = _0x289ff5;
                                _0x2526ef(this)['on'](_0x12b593(0x21e), function () {
                                    const _0x1bece6 = _0x12b593;
                                    !_0x2526ef(this)[_0x1bece6(0x238)](_0x1bece6(0x245)) && (_0x2526ef(this)['attr']('data-modify', !![]), this[_0x1bece6(0x3db)] = _0x53278b[_0x1bece6(0x1f2)], _0x13060d(_0x1bece6(0x403)));
                                });
                            });
                            if (location[_0x289ff5(0x2f2)][_0x289ff5(0x42f)](/^(\/stories\/)/ig)) {
                                const _0x107567 = location[_0x289ff5(0x2f2)][_0x289ff5(0x42f)](/^(\/stories\/highlights\/)/ig) != null, _0x369b19 = _0x107567 ? _0x289ff5(0x22f) : _0x289ff5(0x1fa);
                                _0x33d79b[_0x289ff5(0x20b)](function () {
                                    const _0x58da8f = _0x289ff5;
                                    _0x2526ef(this)['on']('timeupdate', function () {
                                        const _0x52ffe9 = a0_0x49b2;
                                        if (!_0x2526ef(this)[_0x52ffe9(0x238)](_0x52ffe9(0x452))) {
                                            let _0x58c795 = _0x2526ef(this);
                                            _0x58c795[_0x52ffe9(0x37f)]('div[style][class]')[_0x52ffe9(0x2f1)](function () {
                                                const _0x5d4f5e = _0x52ffe9;
                                                return _0x2526ef(this)[_0x5d4f5e(0x309)]() == _0x58c795[_0x5d4f5e(0x309)]();
                                            })['find']('.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL')[_0x52ffe9(0x2e8)] === 0x0 ? (_0x2526ef(this)['attr'](_0x52ffe9(0x20c), !![]), _0x107567 ? _0xc41be9(![]) : _0x17866b(![]), _0x13060d('(' + _0x369b19 + ')', _0x52ffe9(0x32a))) : (_0x2526ef(this)['attr'](_0x52ffe9(0x20c), !![]), _0x13060d('(' + _0x369b19 + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0x237158 = _0x2526ef(this);
                                    if (_0x4a14d1['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x237158[_0x58da8f(0x238)](_0x58da8f(0x3d1))) {
                                            _0x13060d('(' + _0x369b19 + ')', _0x58da8f(0x25a));
                                            _0x4a14d1[_0x58da8f(0x288)] && (this['volume'] = _0x53278b[_0x58da8f(0x1f2)], _0x237158['on']('loadstart', function () {
                                                const _0x5ecfca = _0x58da8f;
                                                this[_0x5ecfca(0x3db)] = _0x53278b[_0x5ecfca(0x1f2)];
                                            }));
                                            let _0x52620c = _0x237158[_0x58da8f(0x37f)](_0x58da8f(0x449))['filter'](function () {
                                                    const _0x265f5c = _0x58da8f;
                                                    return _0x2526ef(this)[_0x265f5c(0x237)](_0x265f5c(0x472)) == null && _0x2526ef(this)[_0x265f5c(0x237)]('style') == null;
                                                })[_0x58da8f(0x399)](), _0x50776 = _0x52620c[_0x58da8f(0x265)]();
                                            _0x50776[_0x58da8f(0x3f2)]();
                                            let _0x25ce01 = _0x52620c['find'](_0x58da8f(0x267));
                                            _0x25ce01['hide']();
                                            const _0x2e4de4 = function (_0x5759d4) {
                                                const _0x50132b = _0x58da8f;
                                                _0x5759d4[_0x50132b(0x331)](), _0x237158[_0x50132b(0x362)](_0x50132b(0x3f8), '2'), _0x237158[_0x50132b(0x237)](_0x50132b(0x3d1), !![]), _0x25ce01[_0x50132b(0x3f2)](), _0x50776[_0x50132b(0x3f2)](), _0xcc095b(_0x237158, _0x237158[_0x50132b(0x37f)](_0x50132b(0x250))[_0x50132b(0x2f1)](function () {
                                                    const _0x2930e2 = _0x50132b;
                                                    return _0x2526ef(this)['width']() == _0x237158[_0x2930e2(0x309)]();
                                                })[_0x50132b(0x399)](), _0x369b19, _0x50132b(0x31b));
                                            };
                                            _0x237158['parent']()['find'](_0x58da8f(0x45e))['on']('contextmenu', _0x2e4de4), _0x25ce01['on'](_0x58da8f(0x3c7), _0x2e4de4), _0x50776['on']('contextmenu', _0x2e4de4), _0x237158['on'](_0x58da8f(0x3c7), function (_0x219671) {
                                                const _0x139009 = _0x58da8f;
                                                _0x219671[_0x139009(0x331)](), _0x237158[_0x139009(0x362)]('z-index', '-1'), _0x237158[_0x139009(0x2ac)](_0x139009(0x3d1)), _0x50776['show'](), _0x25ce01['show'](), _0xcc095b(_0x237158, _0x237158[_0x139009(0x37f)](_0x139009(0x250))[_0x139009(0x2f1)](function () {
                                                    const _0x863547 = _0x139009;
                                                    return _0x2526ef(this)[_0x863547(0x309)]() == _0x237158['width']();
                                                })[_0x139009(0x399)](), _0x369b19, _0x139009(0x31b));
                                            }), _0x237158['on'](_0x58da8f(0x2da), function () {
                                                const _0x37948b = _0x58da8f;
                                                let _0x1d5078 = _0x52620c[_0x37948b(0x2d7)]()['find'](_0x37948b(0x235))[_0x37948b(0x37f)]('[role=\x22button\x22]')[_0x37948b(0x399)]();
                                                var _0x3e00aa = _0x1d5078[_0x37948b(0x3aa)](_0x37948b(0x221))[_0x37948b(0x2e8)] === 0x0;
                                                this[_0x37948b(0x33d)] != _0x3e00aa && (this[_0x37948b(0x3db)] = _0x53278b[_0x37948b(0x1f2)], _0x1d5078?.[_0x37948b(0x3af)]('click')), _0x2526ef(this)['attr'](_0x37948b(0x2de)) && (_0x53278b[_0x37948b(0x1f2)] = this[_0x37948b(0x3db)], GM_setValue('G_VIDEO_VOLUME', this[_0x37948b(0x3db)])), this[_0x37948b(0x3db)] == _0x53278b['videoVolume'] && _0x2526ef(this)['attr'](_0x37948b(0x2de), !![]);
                                            }), _0x237158[_0x58da8f(0x362)](_0x58da8f(0x3c9), _0x58da8f(0x2ef)), _0x237158[_0x58da8f(0x362)](_0x58da8f(0x3f8), '2'), _0x237158['attr'](_0x58da8f(0x26a), !![]), _0x237158[_0x58da8f(0x237)](_0x58da8f(0x3d1), !![]);
                                        }
                                    } else
                                        _0xcc095b(_0x237158, _0x237158[_0x58da8f(0x37f)](_0x58da8f(0x250))[_0x58da8f(0x2f1)](function () {
                                            const _0x3ab070 = _0x58da8f;
                                            return _0x2526ef(this)[_0x3ab070(0x309)]() == _0x237158[_0x3ab070(0x309)]();
                                        })[_0x58da8f(0x399)](), _0x369b19, _0x58da8f(0x31b));
                                });
                            }
                        }
                    });
                }
            });
            _0x1e5c63[_0x4b1b73(0x431)](_0x2526ef(_0x4b1b73(0x21f))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));