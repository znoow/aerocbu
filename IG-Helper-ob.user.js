// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.0.7
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

function a0_0xd21c(_0x3188c8, _0x453224) {
    const _0x1b2fe4 = a0_0x1b2f();
    return a0_0xd21c = function (_0xd21c75, _0x3faa0f) {
        _0xd21c75 = _0xd21c75 - 0x179;
        let _0x21003f = _0x1b2fe4[_0xd21c75];
        return _0x21003f;
    }, a0_0xd21c(_0x3188c8, _0x453224);
}
function a0_0x1b2f() {
    const _0x5990fa = [
        'FORCE_RESOURCE_VIA_MEDIA',
        'a[href^=\x22/p/\x22]',
        'Current\x20version:\x20',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        '.IG_SN_DIG_BODY\x20.newTab',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        '_acnf',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'assign',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'position',
        'video\x20volume\x20changed\x20#slider',
        '</button>',
        '\x22\x20/></div>',
        'data-modify',
        'pageLoaded',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'avatar',
        'Close',
        'tagName',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22>',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'data-type',
        'code',
        'image_versions2',
        'prev',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '[data-ih-locale]',
        'includes',
        'node',
        'AUTO_RENAME',
        'LOCALE_MANIFEST',
        'BATCH_DOWNLOAD_DIRECT',
        'G_RENAME_FORMAT',
        'Checking\x20for\x20Updates',
        '.txt',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'hasClass',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22>',
        'forEach',
        '\x20-</a>',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'selected',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        '.videoThumbnail',
        'title',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'createElement',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        '--ig-track-progress:\x20',
        'video_url',
        '298390wqIxTf',
        'html',
        'Wololo!\x20New\x20version\x20released.',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        '*/*',
        'INTERNAL_CSS',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '.IG_DWNEWTAB',
        'modify',
        'https://www.instagram.com/',
        '._acay',
        'setAttribute',
        'carousel_media:\x20undefined\x20username',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'tempFetchRateLimit',
        '.circle_wrapper\x20span',
        '4yfGwmR',
        'updatenotification',
        'last',
        '.SNKMS_IG_DW_ALL_MAIN',
        '\x22\x20class=\x22newTab\x22>',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'input',
        'searchParams',
        'GraphSidecar',
        '[data-snig]',
        'startsWith',
        'stories',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'data-snig',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        '\x22><span\x20data-ih-locale=\x22',
        'GraphImage',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        '.IG_DWSTORY_THUMBNAIL',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'Checking\x20for\x20Script\x20Updates',
        '.IG_DWHISTORY_ALL',
        '._acay\x20._acaz',
        'LOAD_BLOB_MULTIPLE',
        '36jLRhgB',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '</div>',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'GL_referrer',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'x1lix1fw',
        'class',
        'NO_VID_URL',
        'REPORT_DISCORD',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'NOPATH',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'video\x20+\x20div\x20>\x20div',
        '_ac3q',
        'owner',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'toString',
        'DOMTree-',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'checked',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'div.volume_slider',
        'query_hash',
        'push',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'attr',
        'script',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'GL_registerEventList',
        'en-US',
        'taken_at_timestamp',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'div[role=\x22presentation\x22]',
        'registerMenuIds',
        'relative',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'absolute',
        'getUserHighSizeProfile()',
        'username',
        'remove',
        '<label\x20class=\x22globalSettings',
        'x1iyjqo2',
        'div[style][class]',
        'IG\x20Debug\x20DOM\x20Tree',
        'text/plain',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'LOAD_BLOB_ONE',
        'before',
        'display_resources',
        '#_SNLOAD',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22m191\x20208c-1-5-6-8-10-8l-42\x200\x200-184c0-8-5-15-11-15l-42\x200c-6\x200-11\x207-11\x2015l0\x20184-42\x200c-4\x200-8\x203-9\x208c-2\x206-1\x2012\x201\x2016l74\x20105c2\x203\x205\x205\x208\x205s6-2\x208-5l74-105c2-4\x204-9\x202-16z\x22></g></g><g><g><path\x20d=\x22m486.3\x20208c-1-5-6-8-10-8l-42\x200\x200-184c0-8-5-15-11-15l-43\x200c-6\x200-11\x207-11\x2015l0\x20184-41\x200c-4\x200-8\x203-9\x208c-2\x206-1\x2012\x201\x2016l74\x20105c2\x203\x205\x205\x208\x205s6-2\x208-5l74-105c2-4\x204-9\x202-16z\x22></g></g><g><g><path\x20d=\x22m342.3\x20299c-1-5-6-8-10-8l-42\x200\x200-275c0-8-5-15-11-15l-42\x200c-6\x200-11\x207-11\x2015l0\x20275-42\x200c-4\x200-8\x203-9\x208c-2\x206-1\x2012\x201\x2016l74\x20105c2\x203\x205\x205\x208\x205s6-2\x208-5l74-105c2-4\x204-9\x202-16z\x22></g></g><g><g><path\x20d=\x22m422.79\x20380.79l0\x2074.12-338.83\x200\x200-74.12-67.34\x200\x200\x2089.45c0\x2023\x2014.73\x2040.89\x2033.67\x2040.89l408.28\x200c18.94\x200\x2033.67-17.89\x2033.67-40.89l0-89.45-69.45\x200z\x22/></g></g></svg>',
        'val',
        '.IG_DWHISTORY_THUMBNAIL',
        'Logger:\x0a',
        '.IG_DWHINEWTAB',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'controls',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'padStart',
        'feedback_message',
        'G_CHECK_TIMESTAMP',
        'users',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'div#splash-screen',
        'Fetch\x20from\x20memory\x20cache:',
        'find',
        'firstStarted',
        'li._acaz',
        'click',
        'shortcode',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        'edges',
        'remove-thumbnail',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'Main\x20Timer',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'which',
        'SELECT_AND_COPY',
        '.button_wrapper',
        'css',
        'thumbnail',
        '[data-ih-locale-title]',
        'BATCH_DOWNLOAD_SELECTED',
        '2287545BtBlVr',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        '\x22\x20class=\x22IG_REELS\x22>',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'Disable\x20Video\x20Auto-looping',
        'config_width',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'FORCE_FETCH_ALL_RESOURCES',
        'story',
        'innerHTML',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'isHighlightsStory',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'ended',
        'className',
        'split',
        'altKey',
        '479845rIZGiI',
        'post',
        'Download\x20Video\x20Thumbnail',
        'DOWNLOAD_ALL',
        'div[id^=\x22mount\x22]',
        'getTime',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'div:last-child',
        '.IG_REELS_THUMBNAIL',
        '948DjFOTd',
        '1035GQjhyg',
        'user\x20settings',
        'isIntersecting',
        '</span>\x20',
        'hostname',
        'NEW_TAB',
        '54dTNTIj',
        'stp',
        'data',
        'slice',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        'a[href^=\x22/\x22]',
        'shortcode_media',
        'change',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'reels_media',
        'replace',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'trigger',
        'getHours',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'finalUrl',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'GL_logger',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        '_INTRO',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'data-remove-thumbnail',
        '\x22\x20data-ih-locale-title=\x22',
        '.IG_DWSTORY_ALL',
        'canDownload',
        'children',
        'keys',
        'body',
        '<a\x20datetime=\x22',
        'language',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'data-href',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'img[referrerpolicy]',
        'taken_at',
        '#article-id',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'Script\x20Loaded',
        '<div\x20class=\x22volume_slider\x20',
        'https://www.instagram.com/reels/',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'Loading\x20Blob\x20Media...',
        'smooth',
        'contextmenu',
        'getBlobMedia()',
        'DOWNLOAD_DOM_TREE',
        'onReadyMyDW()\x20Timer',
        'textContent',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        '/info/',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'getStories()',
        '_blank',
        '._acnb',
        'height',
        'CHECK_UPDATE_MENU',
        'volume',
        'video_versions',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'muted',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '</a></button>',
        '.IG_DWHISTORY',
        'bottom',
        'body\x20>\x20div\x20section._ac0a',
        'https://i.instagram.com/api/v1/users/',
        'body\x20>\x20div\x20section:visible._ac0a',
        'fadeOut',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'instagram.com/reels/',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'data-username',
        '._acay\x20+\x20.x24i39r',
        'Download\x20Selected\x20Resources',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '%22}',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'parent',
        'reel',
        'volumechange',
        'match',
        'select',
        'Donate',
        '.json',
        'getMonth',
        'media-id',
        'GL_dataCache',
        'G_VIDEO_VOLUME',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'Cannot\x20find\x20video\x20URL.',
        'video[class]',
        'catch',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'sort',
        '\x22]\x20span',
        'getTranslationText()',
        'GM_unregisterMenuCommand',
        '.SNKMS_IG_NEWTAB_MAIN',
        'hide',
        'floor',
        'DIRECT_DOWNLOAD_ALL',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        '\x22\x20datetime=\x22',
        '</div></div>',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'boolean',
        'div#scrollview',
        'GL_username',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'modify-thumbnail',
        '\x0a-----\x0a\x0aLocation:\x20',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'DOWNLOAD',
        'response',
        'url',
        '</p>',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'GL_observer',
        'videoVolume',
        'DONATE',
        'faild',
        'profile_pic_url',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'Request\x20with:',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'Open\x20in\x20New\x20Tab',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'host',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'loop',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'GL_postPath',
        'getHighlightStories()',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'SKIP_VIEW_STORY_CONFIRM',
        'div\x20>\x20ul\x20li._acaz',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'close',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'NOTICE_UPDATE_CONTENT',
        'FEEDBACK',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'getPostOwner()',
        'wrap',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'GL_repeat',
        '81422cERSzh',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '\x22\x20/>',
        'replaceAll',
        'version',
        '\x22\x20title=\x22',
        'div',
        'div\x20>\x20ul._acay',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'blob',
        'width',
        'trigging',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'stringify',
        'href',
        '.circle_wrapper',
        'appendChild',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'reduce',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'createObjectURL',
        'hidden',
        'data-loop',
        'Can\x20not\x20find\x20download\x20url.',
        'MODIFY_VIDEO_VOLUME',
        'vertical',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'DIV',
        '3403976GTaLCV',
        'disconnect',
        'text',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'getUserIdWithAgent()',
        'observe',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'ig_cache_key',
        'carousel_media',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '.IG_DWPROFILE',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'label',
        'toLowerCase',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'target',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'Show\x20DOM\x20Tree',
        'SCROLL_BUTTON',
        'mouseenter',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'top',
        'GET',
        'DEBUG',
        'data-path',
        'style',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'candidates',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'scrollBy',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'Video',
        'Reload\x20Script',
        'Preference\x20Settings',
        'warn',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'REPORT_GITHUB',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'ig_helper_notice',
        'get',
        'loadstart',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'object',
        'IMG',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'hasReferrer',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'RELOAD_SCRIPT',
        'lang',
        'svg',
        'Feedback\x20Options',
        'section\x20>\x20main[role=\x22main\x22]',
        'Display\x20HTML5\x20Video\x20Controller',
        'load',
        'message',
        'log',
        'RENAME_PUBLISH_DATE',
        'THUMBNAIL_INTRO',
        '#tempWrapper',
        '</span></div>',
        'data-completed',
        '__typename',
        '.IG_SN_DIG\x20#post_info',
        'Download',
        '1318anbyeb',
        '154910eOjCQY',
        'reject',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'range',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'datetime',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'keydown',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'script[type=\x22application/json\x22]',
        'padEnd',
        'then',
        '<div\x20class=\x22button_wrapper\x22>',
        'mp4',
        'CLOSE',
        'navigator',
        'type',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '<option\x20value=\x22',
        'div.volume_slider\x20input',
        'toISOString',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        '</span></label>',
        '</a>',
        'after',
        'THUMBNAIL',
        'jpg',
        'addClass',
        'https://www.instagram.com/reel/',
        'getTranslationText\x20catch\x20error:',
        'time',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'length',
        'locale',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        '.IG_DWSTORY',
        'parse',
        'data-controls',
        '_acnb',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'items',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'logger\x20sliced',
        'removeClass',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        '<a\x20media-id=\x22',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'GraphVideo',
        'download',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'show',
        'Found\x20insert\x20point',
        '\x20child',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'matchAll',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'CHECK_UPDATE',
        'display_url',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'video\x20+\x20div',
        '.IG_SN_DIG',
        'first',
        'SHOW_DOM_TREE',
        'error',
        'DW_ALL',
        'childList',
        'undefined',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'currentURL',
        'query_id',
        'status',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'onHighlightsStory',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'pathname',
        'img',
        'Download\x20All\x20Resources',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'reels',
        '<a\x20href=\x22https://www.instagram.com/p/',
        '.SNKMS_IG_DW_MAIN',
        'scontent.cdninstagram.com',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'z-index',
        'trim',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'highlights',
        'undefined\x20username',
        'video',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'https://ko-fi.com/snkoarashi',
        'preventDefault',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'edge_sidecar_to_children',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'Remote\x20version:\x20',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'next',
        '.xpgaw4o',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '<input\x20value=\x22',
        'NONE',
        '\x22\x20class=\x22SNKMS_IG_DW_ALL_MAIN\x22>',
        'user',
        'getMediaInfo()',
        'fileRenameFormat',
        'name',
        'isProfile',
        '\x22\x20data-globalIndex=\x22',
        '[role=\x22button\x22]',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'ALL_CHECK',
        'prop',
        'src',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        '20000',
        'filter',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'fail',
        'isArray',
        'div:not([class]):not([style])',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'DISABLE_VIDEO_LOOPING',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'data-modify-thumbnail',
        'article',
        '0px',
        'stopPropagation',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'removeAttr',
        'each',
        'Feedback',
        'getBlobMediaWithQueryID()',
        'data-name',
        'append',
        'x1s85apg',
        'Select\x20All',
        'parents',
        '<div></div>',
        'video_resources',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'pause',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'is_video',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        '<div\x20class=\x22IG_SN_DIG\x20',
        'getMinutes',
        'srcset',
        '.IG_SN_DIG\x20.globalSettings',
        'responseText'
    ];
    a0_0x1b2f = function () {
        return _0x5990fa;
    };
    return a0_0x1b2f();
}
(function (_0x1f88de, _0x48354d) {
    const _0x1c6f3c = a0_0xd21c, _0x46b813 = _0x1f88de();
    while (!![]) {
        try {
            const _0x39355d = parseInt(_0x1c6f3c(0x3b0)) / 0x1 + -parseInt(_0x1c6f3c(0x248)) / 0x2 * (-parseInt(_0x1c6f3c(0x3ba)) / 0x3) + parseInt(_0x1c6f3c(0x32e)) / 0x4 * (-parseInt(_0x1c6f3c(0x39e)) / 0x5) + parseInt(_0x1c6f3c(0x3c0)) / 0x6 * (-parseInt(_0x1c6f3c(0x249)) / 0x7) + -parseInt(_0x1c6f3c(0x205)) / 0x8 + parseInt(_0x1c6f3c(0x346)) / 0x9 * (parseInt(_0x1c6f3c(0x31d)) / 0xa) + -parseInt(_0x1c6f3c(0x1e7)) / 0xb * (-parseInt(_0x1c6f3c(0x3b9)) / 0xc);
            if (_0x39355d === _0x48354d)
                break;
            else
                _0x46b813['push'](_0x46b813['shift']());
        } catch (_0x334bea) {
            _0x46b813['push'](_0x46b813['shift']());
        }
    }
}(a0_0x1b2f, 0x505b2), function (_0x50a49c) {
    setTimeout(() => {
        'use strict';
        const _0x24ad6a = a0_0xd21c;
        const _0x43d8a3 = {
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
            }, _0x3b437d = [
                _0x24ad6a(0x240),
                _0x24ad6a(0x24f),
                _0x24ad6a(0x275)
            ], _0x1c1587 = {
                'DOWNLOAD': _0x24ad6a(0x34c),
                'NEW_TAB': _0x24ad6a(0x1cc),
                'THUMBNAIL': _0x24ad6a(0x2c0),
                'DOWNLOAD_ALL': _0x24ad6a(0x37d),
                'CLOSE': '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>'
            }, _0x470fdc = 0xfa, _0x4439c6 = GM_getResourceText(_0x24ad6a(0x322)), _0x2ef46e = JSON[_0x24ad6a(0x26f)](GM_getResourceText(_0x24ad6a(0x309)));
        var _0x1e78f9 = {
            'videoVolume': GM_getValue(_0x24ad6a(0x1a7)) ? GM_getValue('G_VIDEO_VOLUME') : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x24ad6a(0x30b)) ? GM_getValue(_0x24ad6a(0x30b)) : _0x24ad6a(0x3a1),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue('lang') || navigator[_0x24ad6a(0x3e4)] || navigator['userLanguage'],
            'currentURL': location[_0x24ad6a(0x1f7)],
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
                _0x16629f();
            })
        };
        _0x5c6c67(), GM_addStyle(_0x4439c6), _0x3c9f7b(), _0x1885a3(_0x1e78f9[_0x24ad6a(0x238)])['then'](_0x482a47 => {
            const _0x419d78 = _0x24ad6a;
            _0x1e78f9['locale'][_0x1e78f9[_0x419d78(0x238)]] = _0x482a47, _0x531bda(), _0x3c9f7b(), _0x2bfff2(0x12c);
        })[_0x24ad6a(0x1ab)](_0x31eb4e => {
            const _0x53f6e8 = _0x24ad6a;
            _0x3c9f7b(), _0x2bfff2(0x12c), !_0x1e78f9[_0x53f6e8(0x238)][_0x53f6e8(0x338)]('en') && console[_0x53f6e8(0x28d)]('getTranslationText\x20catch\x20error:', _0x31eb4e);
        }), _0x4e6c29(_0x24ad6a(0x3ec), GM_info['script'][_0x24ad6a(0x2bc)], 'version:', GM_info[_0x24ad6a(0x363)][_0x24ad6a(0x1eb)]);
        var _0x542f6f = setInterval(function () {
            const _0x43f8ee = _0x24ad6a;
            if (_0x50a49c(_0x43f8ee(0x38a))['length'] > 0x0 && !_0x50a49c('div#splash-screen')['is'](':hidden') || location[_0x43f8ee(0x298)][_0x43f8ee(0x1a0)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x43f8ee(0x3be)]['startsWith']('www.')) {
                _0x1e78f9[_0x43f8ee(0x2f9)] = ![];
                return;
            }
            if (_0x1e78f9[_0x43f8ee(0x292)] != location[_0x43f8ee(0x1f7)] || !_0x1e78f9[_0x43f8ee(0x38d)] || !_0x1e78f9[_0x43f8ee(0x2f9)]) {
                console[_0x43f8ee(0x23f)](_0x43f8ee(0x395), _0x43f8ee(0x1f2)), clearInterval(_0x1e78f9['GL_repeat']), _0x1e78f9['pageLoaded'] = ![], _0x1e78f9[_0x43f8ee(0x38d)] = !![], _0x1e78f9['currentURL'] = location[_0x43f8ee(0x1f7)], _0x1e78f9[_0x43f8ee(0x1c6)][_0x43f8ee(0x206)]();
                if (location[_0x43f8ee(0x1f7)][_0x43f8ee(0x338)]('https://www.instagram.com/p/') || location[_0x43f8ee(0x298)][_0x43f8ee(0x1a0)](/^\/(.*?)\/(p|reel)\//ig) || location['href'][_0x43f8ee(0x338)](_0x43f8ee(0x265))) {
                    _0x1e78f9[_0x43f8ee(0x1a6)][_0x43f8ee(0x339)] = {}, _0x1e78f9[_0x43f8ee(0x1a6)][_0x43f8ee(0x2a6)] = {}, _0x4e6c29('isDialog');
                    var _0x2793c3 = setInterval(() => {
                        const _0x2224f5 = _0x43f8ee;
                        _0x50a49c(_0x2224f5(0x199))[_0x2224f5(0x269)] > 0x0 && (clearInterval(_0x2793c3), setTimeout(() => {
                            _0x16629f(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x1e78f9[_0x43f8ee(0x2f9)] = !![];
                }
                location[_0x43f8ee(0x1f7)][_0x43f8ee(0x338)](_0x43f8ee(0x3ee)) && (_0x4e6c29('isReels'), setTimeout(() => {
                    _0x4d47cb(![]);
                }, 0x96), _0x1e78f9[_0x43f8ee(0x2f9)] = !![]);
                if (location[_0x43f8ee(0x1f7)][_0x43f8ee(0x3ae)]('?')[0x0] == _0x43f8ee(0x326)) {
                    _0x1e78f9[_0x43f8ee(0x1a6)][_0x43f8ee(0x339)] = {}, _0x1e78f9[_0x43f8ee(0x1a6)][_0x43f8ee(0x2a6)] = {};
                    let _0x4766a1 = _0x1e78f9[_0x43f8ee(0x34b)]?.[_0x43f8ee(0x1a0)](/^\/(stories|highlights)\//ig) != null;
                    _0x4e6c29('isHomepage', _0x4766a1), setTimeout(() => {
                        const _0x600114 = _0x43f8ee;
                        _0x16629f(![], _0x4766a1);
                        const _0x51698e = _0x50a49c('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.[_0x600114(0x19d)]()[0x0];
                        _0x51698e && _0x1e78f9[_0x600114(0x1c6)][_0x600114(0x20a)](_0x51698e, { 'childList': !![] });
                    }, 0x96), _0x1e78f9[_0x43f8ee(0x2f9)] = !![];
                }
                _0x50a49c('header\x20>\x20*[class]:first-child\x20img[alt]')[_0x43f8ee(0x269)] && location['pathname'][_0x43f8ee(0x1a0)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x43f8ee(0x298)]['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x4e6c29(_0x43f8ee(0x2bd)), setTimeout(() => {
                    _0x362cfa(![]);
                }, 0x96), _0x1e78f9['pageLoaded'] = !![]);
                if (!_0x1e78f9[_0x43f8ee(0x2f9)]) {
                    if (location['href'][_0x43f8ee(0x1a0)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x1e78f9[_0x43f8ee(0x1a6)]['highlights'] = {}, _0x4e6c29(_0x43f8ee(0x3aa)), _0x418bea(![]), _0x1e78f9[_0x43f8ee(0x1e6)] = setInterval(() => {
                            _0x59ac32(![]);
                        }, _0x470fdc), _0x50a49c('.IG_DWHISTORY')['length'] && setTimeout(() => {
                            const _0x3226b2 = _0x43f8ee;
                            if (_0x43d8a3[_0x3226b2(0x1db)]) {
                                var _0x4840a7 = _0x50a49c(_0x3226b2(0x2e1))[_0x3226b2(0x2c6)](function () {
                                    const _0x323fd5 = _0x3226b2;
                                    return _0x50a49c(this)[_0x323fd5(0x3e0)]()['length'] === 0x0 && this['textContent'][_0x323fd5(0x2a3)]() !== '';
                                });
                                _0x4840a7?.[_0x3226b2(0x3ce)]('click');
                            }
                            _0x1e78f9[_0x3226b2(0x2f9)] = !![];
                        }, 0x96);
                    else
                        location[_0x43f8ee(0x1f7)][_0x43f8ee(0x1a0)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x4e6c29('isStory'), _0x50a49c(_0x43f8ee(0x1f3))[_0x43f8ee(0x269)] > 0x0 && (_0x50a49c(_0x43f8ee(0x26e))['remove'](), _0x50a49c(_0x43f8ee(0x324))[_0x43f8ee(0x372)](), _0x50a49c(_0x43f8ee(0x340))['length'] && _0x50a49c(_0x43f8ee(0x340))[_0x43f8ee(0x372)](), _0x28c6f9(![]), setTimeout(() => {
                            _0x28c6f9(![]);
                        }, 0x96)), _0x50a49c('.IG_DWSTORY')[_0x43f8ee(0x269)] && setTimeout(() => {
                            const _0x1905dd = _0x43f8ee;
                            if (_0x43d8a3['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x50f1af = _0x50a49c(_0x1905dd(0x2e1))[_0x1905dd(0x2c6)](function () {
                                    const _0x328ff0 = _0x1905dd;
                                    return _0x50a49c(this)[_0x328ff0(0x3e0)]()['length'] === 0x0 && this[_0x328ff0(0x17d)][_0x328ff0(0x2a3)]() !== '';
                                });
                                _0x50f1af?.[_0x1905dd(0x38f)]();
                            }
                            _0x1e78f9['pageLoaded'] = !![];
                        }, 0x96)) : (_0x1e78f9[_0x43f8ee(0x2f9)] = ![], _0x50a49c(_0x43f8ee(0x26e))[_0x43f8ee(0x269)] && _0x50a49c(_0x43f8ee(0x26e))[_0x43f8ee(0x372)](), _0x50a49c(_0x43f8ee(0x3de))[_0x43f8ee(0x269)] && _0x50a49c(_0x43f8ee(0x3de))[_0x43f8ee(0x372)](), _0x50a49c(_0x43f8ee(0x324))[_0x43f8ee(0x269)] && _0x50a49c(_0x43f8ee(0x324))[_0x43f8ee(0x372)](), _0x50a49c('.IG_DWSTORY_THUMBNAIL')['length'] && _0x50a49c('.IG_DWSTORY_THUMBNAIL')[_0x43f8ee(0x372)](), _0x50a49c(_0x43f8ee(0x18d))[_0x43f8ee(0x269)] && _0x50a49c(_0x43f8ee(0x18d))[_0x43f8ee(0x372)](), _0x50a49c('.IG_DWHISTORY_ALL')['length'] && _0x50a49c(_0x43f8ee(0x343))[_0x43f8ee(0x372)](), _0x50a49c(_0x43f8ee(0x381))['length'] && _0x50a49c('.IG_DWHINEWTAB')[_0x43f8ee(0x372)](), _0x50a49c(_0x43f8ee(0x37f))[_0x43f8ee(0x269)] && _0x50a49c(_0x43f8ee(0x37f))[_0x43f8ee(0x372)]());
                }
                _0x2bfff2(0x12c), _0x1e78f9['GL_referrer'] = new URL(location[_0x43f8ee(0x1f7)])[_0x43f8ee(0x298)];
            }
        }, _0x470fdc);
        async function _0x5a360c() {
            const _0x10ef09 = _0x24ad6a;
            _0x4a85bf(!![]);
            let _0x500ae8 = new Date()[_0x10ef09(0x3b5)](), _0x35468e = Math[_0x10ef09(0x1b3)](_0x500ae8 / 0x3e8), _0x432b3a = location[_0x10ef09(0x1f7)][_0x10ef09(0x3cc)](/\/$/ig, '')[_0x10ef09(0x3ae)]('/')['at'](-0x1), _0x1aaa24 = await _0x1ee1c1(_0x432b3a), _0x11e62b = _0x1aaa24[_0x10ef09(0x3c2)][_0x10ef09(0x3cb)][0x0][_0x10ef09(0x357)][_0x10ef09(0x371)], _0x39be3a = 0x0;
            _0x37934c(_0x39be3a, _0x1aaa24[_0x10ef09(0x3c2)][_0x10ef09(0x3cb)][0x0][_0x10ef09(0x273)][_0x10ef09(0x269)]), _0x1aaa24[_0x10ef09(0x3c2)]['reels_media'][0x0]['items']['forEach']((_0x201f21, _0x23d112) => {
                setTimeout(() => {
                    const _0x53892f = a0_0xd21c;
                    _0x43d8a3[_0x53892f(0x240)] && (_0x35468e = _0x201f21[_0x53892f(0x367)]), _0x201f21['display_resources'][_0x53892f(0x1ad)](function (_0x20dcfe, _0x5e5a8c) {
                        const _0x26545f = _0x53892f;
                        if (_0x20dcfe[_0x26545f(0x3a4)] < _0x5e5a8c[_0x26545f(0x3a4)])
                            return 0x1;
                        if (_0x20dcfe[_0x26545f(0x3a4)] > _0x5e5a8c[_0x26545f(0x3a4)])
                            return -0x1;
                        return 0x0;
                    }), _0x201f21[_0x53892f(0x2e2)] ? _0x9382f4(_0x201f21[_0x53892f(0x2de)][0x0][_0x53892f(0x2c3)], _0x11e62b, _0x53892f(0x339), _0x35468e, _0x53892f(0x256), _0x201f21['id'])[_0x53892f(0x254)](() => {
                        const _0xec3777 = _0x53892f;
                        _0x37934c(++_0x39be3a, _0x1aaa24[_0xec3777(0x3c2)][_0xec3777(0x3cb)][0x0]['items'][_0xec3777(0x269)]);
                    }) : _0x9382f4(_0x201f21['display_resources'][0x0][_0x53892f(0x2c3)], _0x11e62b, _0x53892f(0x339), _0x35468e, _0x53892f(0x263), _0x201f21['id'])[_0x53892f(0x254)](() => {
                        const _0x27aaa6 = _0x53892f;
                        _0x37934c(++_0x39be3a, _0x1aaa24['data'][_0x27aaa6(0x3cb)][0x0][_0x27aaa6(0x273)][_0x27aaa6(0x269)]);
                    });
                }, 0x64 * _0x23d112);
            });
        }
        async function _0x418bea(_0x2b5922, _0x106433) {
            const _0x49e686 = _0x24ad6a;
            var _0x19aeca = _0x50a49c('body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]')[_0x49e686(0x2c6)](function () {
                const _0x1f9adf = _0x49e686;
                return _0x50a49c(this)[_0x1f9adf(0x362)](_0x1f9adf(0x1f7))['split']('/')['filter'](_0x25142a => _0x25142a[_0x1f9adf(0x269)] > 0x0)[_0x1f9adf(0x269)] === 0x1;
            })[_0x49e686(0x28b)]()[_0x49e686(0x362)](_0x49e686(0x1f7))[_0x49e686(0x3ae)]('/')[_0x49e686(0x2c6)](_0x1ba729 => _0x1ba729['length'] > 0x0)['at'](0x0);
            if (_0x2b5922) {
                let _0x5a1622 = new Date()[_0x49e686(0x3b5)](), _0xbbc8e2 = Math[_0x49e686(0x1b3)](_0x5a1622 / 0x3e8), _0xe1bf88 = location['href'][_0x49e686(0x3cc)](/\/$/ig, '')[_0x49e686(0x3ae)]('/')['at'](-0x1), _0x5d92f2 = _0x50a49c(_0x49e686(0x221))[_0x49e686(0x269)] || _0x50a49c(_0x49e686(0x29b))['length'] || _0x50a49c('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')['find'](_0x49e686(0x26b))[_0x49e686(0x269)], _0x3fdfdc = 0x0;
                _0x4a85bf(!![]);
                if (_0x1e78f9[_0x49e686(0x1a6)][_0x49e686(0x2a6)][_0xe1bf88]) {
                    _0x4e6c29(_0x49e686(0x38b), _0xe1bf88);
                    let _0x2c1825 = _0x1e78f9[_0x49e686(0x1a6)][_0x49e686(0x2a6)][_0xe1bf88][_0x49e686(0x3c2)][_0x49e686(0x3cb)][0x0][_0x49e686(0x273)]['length'];
                    _0x19aeca = _0x1e78f9['GL_dataCache'][_0x49e686(0x2a6)][_0xe1bf88][_0x49e686(0x3c2)][_0x49e686(0x3cb)][0x0][_0x49e686(0x357)]['username'], _0x3fdfdc = _0x1e78f9[_0x49e686(0x1a6)][_0x49e686(0x2a6)][_0xe1bf88]['data'][_0x49e686(0x3cb)][0x0]['items'][_0x2c1825 - _0x5d92f2];
                } else {
                    let _0x3f057f = await _0x1ee1c1(_0xe1bf88), _0x7fec1c = _0x3f057f[_0x49e686(0x3c2)][_0x49e686(0x3cb)][0x0][_0x49e686(0x273)][_0x49e686(0x269)];
                    _0x19aeca = _0x3f057f[_0x49e686(0x3c2)][_0x49e686(0x3cb)][0x0][_0x49e686(0x357)][_0x49e686(0x371)], _0x3fdfdc = _0x3f057f[_0x49e686(0x3c2)][_0x49e686(0x3cb)][0x0][_0x49e686(0x273)][_0x7fec1c - _0x5d92f2], _0x1e78f9['GL_dataCache'][_0x49e686(0x2a6)][_0xe1bf88] = _0x3f057f;
                }
                _0x4e6c29(_0x49e686(0x296), _0xe1bf88, _0x1e78f9['GL_dataCache'][_0x49e686(0x2a6)][_0xe1bf88]);
                _0x43d8a3[_0x49e686(0x240)] && (_0xbbc8e2 = _0x3fdfdc[_0x49e686(0x367)]);
                if (_0x43d8a3[_0x49e686(0x2ea)] && !_0x1e78f9[_0x49e686(0x32c)]) {
                    let _0x4e0908 = await _0x3ac00a(_0x3fdfdc['id']);
                    _0x4e0908['status'] === 'ok' ? _0x4e0908[_0x49e686(0x273)][0x0]['video_versions'] ? _0x106433 ? _0x17dfc0(_0x4e0908[_0x49e686(0x273)][0x0]['video_versions'][0x0][_0x49e686(0x1c3)]) : _0x9382f4(_0x4e0908[_0x49e686(0x273)][0x0][_0x49e686(0x188)][0x0][_0x49e686(0x1c3)], _0x19aeca, _0x49e686(0x2a6), _0xbbc8e2, 'mp4', _0x4e0908[_0x49e686(0x273)][0x0]['id']) : _0x106433 ? _0x17dfc0(_0x4e0908[_0x49e686(0x273)][0x0][_0x49e686(0x302)][_0x49e686(0x220)][0x0][_0x49e686(0x1c3)]) : _0x9382f4(_0x4e0908[_0x49e686(0x273)][0x0][_0x49e686(0x302)][_0x49e686(0x220)][0x0][_0x49e686(0x1c3)], _0x19aeca, 'highlights', _0xbbc8e2, _0x49e686(0x263), _0x4e0908[_0x49e686(0x273)][0x0]['id']) : (_0x43d8a3[_0x49e686(0x24f)] ? (delete _0x1e78f9[_0x49e686(0x1a6)][_0x49e686(0x2a6)][_0xe1bf88], _0x1e78f9[_0x49e686(0x32c)] = !![], _0x418bea(!![], _0x106433)) : alert(_0x49e686(0x2cd) + _0x4e0908[_0x49e686(0x23e)]), _0x4e6c29(_0x4e0908));
                } else
                    _0x3fdfdc['is_video'] ? _0x106433 ? _0x17dfc0(_0x3fdfdc[_0x49e686(0x2de)]['at'](-0x1)[_0x49e686(0x2c3)], _0x19aeca) : _0x9382f4(_0x3fdfdc[_0x49e686(0x2de)]['at'](-0x1)['src'], _0x19aeca, _0x49e686(0x2a6), _0xbbc8e2, 'mp4', _0x3fdfdc['id']) : _0x106433 ? _0x17dfc0(_0x3fdfdc['display_resources']['at'](-0x1)[_0x49e686(0x2c3)], _0x19aeca) : _0x9382f4(_0x3fdfdc['display_resources']['at'](-0x1)[_0x49e686(0x2c3)], _0x19aeca, _0x49e686(0x2a6), _0xbbc8e2, _0x49e686(0x263), _0x3fdfdc['id']), _0x1e78f9[_0x49e686(0x32c)] = ![];
                _0x4a85bf(![]);
            } else {
                if (!_0x50a49c(_0x49e686(0x18d))[_0x49e686(0x269)]) {
                    let _0x33acdb = null;
                    _0x50a49c('body\x20>\x20div\x20section._ac0a')[_0x49e686(0x269)] > 0x0 ? _0x33acdb = _0x50a49c('body\x20>\x20div\x20section:visible._ac0a') : (_0x33acdb = _0x50a49c('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x33acdb[_0x49e686(0x39a)](_0x49e686(0x2f4), 'relative'));
                    if (_0x33acdb[_0x49e686(0x269)] === 0x0) {
                        let _0x2e7ebc = _0x50a49c(_0x49e686(0x19a)), _0x2bb4b7 = 0x0;
                        _0x2e7ebc[_0x49e686(0x2d5)](function () {
                            const _0x57e85c = _0x49e686;
                            _0x50a49c(this)[_0x57e85c(0x1f1)]() > _0x2bb4b7 && (_0x2bb4b7 = _0x50a49c(this)[_0x57e85c(0x1f1)](), _0x33acdb = _0x50a49c(this)[_0x57e85c(0x3e0)](_0x57e85c(0x1ed))['first']());
                        });
                    }
                    if (_0x33acdb != null) {
                        _0x33acdb['append'](_0x49e686(0x283) + _0x1a37dd('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x1c1587[_0x49e686(0x1c1)] + _0x49e686(0x348)), _0x33acdb['append'](_0x49e686(0x3d3) + _0x1a37dd(_0x49e686(0x3bf)) + _0x49e686(0x3e7) + _0x1c1587['NEW_TAB'] + _0x49e686(0x348));
                        let _0x151807 = _0x414a33(_0x19aeca);
                        _0x151807[_0x49e686(0x269)] > 0x1 && _0x33acdb[_0x49e686(0x2d9)]('<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x1a37dd(_0x49e686(0x28e)) + _0x49e686(0x32b) + _0x1c1587[_0x49e686(0x3b3)] + _0x49e686(0x348)), _0x33acdb[_0x49e686(0x38c)](_0x49e686(0x3e8))['each'](function () {
                            const _0x183c4e = _0x49e686;
                            _0x50a49c(this)['on'](_0x183c4e(0x23d), function () {
                                const _0x21aca4 = _0x183c4e;
                                !_0x50a49c(this)[_0x21aca4(0x3c2)]('remove-thumbnail') && (_0x33acdb['find'](_0x21aca4(0x37f))[_0x21aca4(0x269)] === 0x0 ? (_0x50a49c(this)[_0x21aca4(0x362)](_0x21aca4(0x3dc), !![]), _0x50a49c(_0x21aca4(0x37f))[_0x21aca4(0x372)](), _0x4e6c29('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x50a49c(this)['attr'](_0x21aca4(0x3dc), !![]), _0x4e6c29(_0x21aca4(0x2b5))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x59ac32(_0x15a1d5) {
            const _0x31d417 = _0x24ad6a;
            if (_0x15a1d5) {
                let _0x40f22d = new Date()[_0x31d417(0x3b5)](), _0x1c2016 = Math[_0x31d417(0x1b3)](_0x40f22d / 0x3e8), _0x364fe4 = location['href']['replace'](/\/$/ig, '')[_0x31d417(0x3ae)]('/')['at'](-0x1), _0x1c9e35 = '', _0x197f0a = _0x50a49c(_0x31d417(0x221))['length'] || _0x50a49c(_0x31d417(0x29b))[_0x31d417(0x269)] || _0x50a49c(_0x31d417(0x27a))['find'](_0x31d417(0x26b))['length'], _0x557c1f = '';
                _0x4a85bf(!![]);
                if (_0x1e78f9[_0x31d417(0x1a6)]['highlights'][_0x364fe4]) {
                    _0x4e6c29('Fetch\x20from\x20memory\x20cache:', _0x364fe4);
                    let _0xf3351d = _0x1e78f9['GL_dataCache'][_0x31d417(0x2a6)][_0x364fe4][_0x31d417(0x3c2)][_0x31d417(0x3cb)][0x0]['items']['length'];
                    _0x1c9e35 = _0x1e78f9[_0x31d417(0x1a6)][_0x31d417(0x2a6)][_0x364fe4][_0x31d417(0x3c2)][_0x31d417(0x3cb)][0x0][_0x31d417(0x357)][_0x31d417(0x371)], _0x557c1f = _0x1e78f9['GL_dataCache'][_0x31d417(0x2a6)][_0x364fe4][_0x31d417(0x3c2)][_0x31d417(0x3cb)][0x0][_0x31d417(0x273)][_0xf3351d - _0x197f0a];
                } else {
                    let _0x593f17 = await _0x1ee1c1(_0x364fe4), _0x20d1f8 = _0x593f17['data'][_0x31d417(0x3cb)][0x0]['items'][_0x31d417(0x269)];
                    _0x1c9e35 = _0x593f17[_0x31d417(0x3c2)][_0x31d417(0x3cb)][0x0][_0x31d417(0x357)][_0x31d417(0x371)], _0x557c1f = _0x593f17['data'][_0x31d417(0x3cb)][0x0][_0x31d417(0x273)][_0x20d1f8 - _0x197f0a], _0x1e78f9[_0x31d417(0x1a6)]['highlights'][_0x364fe4] = _0x593f17;
                }
                _0x43d8a3[_0x31d417(0x240)] && (_0x1c2016 = _0x557c1f['taken_at_timestamp']);
                if (_0x43d8a3[_0x31d417(0x2ea)] && !_0x1e78f9[_0x31d417(0x32c)]) {
                    let _0x4d526a = await _0x3ac00a(_0x557c1f['id']);
                    _0x4d526a['status'] === 'ok' ? _0x9382f4(_0x4d526a['items'][0x0][_0x31d417(0x302)]['candidates'][0x0]['url'], _0x1c9e35, _0x31d417(0x2a6), _0x1c2016, _0x31d417(0x263), _0x364fe4) : (_0x43d8a3[_0x31d417(0x24f)] ? (delete _0x1e78f9[_0x31d417(0x1a6)][_0x31d417(0x2a6)][_0x364fe4], _0x1e78f9[_0x31d417(0x32c)] = !![], _0x59ac32(!![])) : alert(_0x31d417(0x2cd) + _0x4d526a['message']), _0x4e6c29(_0x4d526a));
                } else
                    _0x9382f4(_0x557c1f[_0x31d417(0x37b)]['at'](-0x1)[_0x31d417(0x2c3)], _0x1c9e35, _0x31d417(0x2a6), _0x1c2016, _0x31d417(0x263), _0x364fe4), _0x1e78f9['tempFetchRateLimit'] = ![];
                _0x4a85bf(![]);
            } else {
                if (_0x50a49c(_0x31d417(0x1cd))[_0x31d417(0x269)]) {
                    if (!_0x50a49c(_0x31d417(0x37f))[_0x31d417(0x269)]) {
                        let _0x3927c1 = null;
                        _0x50a49c('body\x20>\x20div\x20section._ac0a')[_0x31d417(0x269)] > 0x0 ? _0x3927c1 = _0x50a49c(_0x31d417(0x191)) : (_0x3927c1 = _0x50a49c(_0x31d417(0x3d4)), _0x3927c1[_0x31d417(0x39a)](_0x31d417(0x2f4), _0x31d417(0x36c)));
                        if (_0x3927c1['length'] === 0x0) {
                            let _0x2872a0 = _0x50a49c(_0x31d417(0x19a)), _0x11502c = 0x0;
                            _0x2872a0[_0x31d417(0x2d5)](function () {
                                const _0x3259b6 = _0x31d417;
                                _0x50a49c(this)[_0x3259b6(0x1f1)]() > _0x11502c && (_0x11502c = _0x50a49c(this)[_0x3259b6(0x1f1)](), _0x3927c1 = _0x50a49c(this)[_0x3259b6(0x3e0)](_0x3259b6(0x1ed))[_0x3259b6(0x28b)]());
                            });
                        }
                        _0x3927c1 != null && _0x3927c1[_0x31d417(0x2d9)](_0x31d417(0x382) + _0x1a37dd(_0x31d417(0x241)) + _0x31d417(0x215) + _0x1c1587[_0x31d417(0x262)] + _0x31d417(0x348));
                    }
                } else
                    _0x50a49c(_0x31d417(0x37f))[_0x31d417(0x372)]();
            }
        }
        function _0x16629f(_0x4ec6c9, _0x2f7bbc) {
            const _0x2d3a63 = _0x24ad6a;
            _0x2f7bbc === !![] && (_0x4e6c29(_0x2d3a63(0x235), 'regenerated'), _0x50a49c(_0x2d3a63(0x231))[_0x2d3a63(0x2c6)](function () {
                const _0x339f65 = _0x2d3a63;
                return _0x50a49c(this)[_0x339f65(0x38c)](_0x339f65(0x29e))[_0x339f65(0x269)] === 0x0;
            })[_0x2d3a63(0x2d4)]('data-snig'));
            if (_0x4ec6c9 == ![]) {
                const _0x5a42cb = 0x64;
                let _0xf36c8a = 0x0;
                var _0x225aef = setInterval(() => {
                    const _0x367c8d = _0x2d3a63;
                    (_0xf36c8a > _0x5a42cb || _0x50a49c(_0x367c8d(0x1e5))['length'] > 0x0) && (clearInterval(_0x225aef), _0xf36c8a > _0x5a42cb && console[_0x367c8d(0x229)](_0x367c8d(0x17c), _0x367c8d(0x315))), _0x4e6c29(_0x367c8d(0x17c), _0x367c8d(0x354)), _0x1eca41(), _0xf36c8a++;
                }, 0x32);
            } else
                _0x1eca41();
        }
        function _0x1e03db(_0x37a252) {
            const _0x50420a = _0x24ad6a;
            _0x43d8a3[_0x50420a(0x2cc)] && _0x37a252[_0x50420a(0x38c)](_0x50420a(0x2a8))[_0x50420a(0x2d5)](function () {
                _0x50a49c(this)['on']('ended', function () {
                    const _0x1a8969 = a0_0xd21c;
                    !_0x50a49c(this)['data'](_0x1a8969(0x1d6)) && (_0x50a49c(this)[_0x1a8969(0x362)](_0x1a8969(0x1ff), !![]), this['pause'](), _0x4e6c29('(post)\x20Added\x20video\x20event\x20listener\x20#loop'));
                });
            });
            _0x43d8a3[_0x50420a(0x201)] && _0x37a252[_0x50420a(0x38c)]('video')[_0x50420a(0x2d5)](function () {
                _0x50a49c(this)['on']('play\x20playing', function () {
                    const _0x460abf = a0_0xd21c;
                    !_0x50a49c(this)[_0x460abf(0x3c2)]('modify') && (_0x50a49c(this)['attr']('data-modify', !![]), this[_0x460abf(0x187)] = _0x1e78f9[_0x460abf(0x1c7)], _0x4e6c29(_0x460abf(0x2fa)));
                });
            });
            _0x43d8a3['HTML5_VIDEO_CONTROL'] && _0x37a252[_0x50420a(0x38c)](_0x50420a(0x2a8))[_0x50420a(0x2d5)](function () {
                const _0x337991 = _0x50420a;
                if (!_0x50a49c(this)['data'](_0x337991(0x383))) {
                    let _0x11baf6 = _0x50a49c(this);
                    _0x4e6c29('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x43d8a3[_0x337991(0x201)] && (this[_0x337991(0x187)] = _0x1e78f9[_0x337991(0x1c7)], _0x50a49c(this)['on'](_0x337991(0x230), function () {
                        const _0x4c0f9a = _0x337991;
                        this[_0x4c0f9a(0x187)] = _0x1e78f9[_0x4c0f9a(0x1c7)];
                    })), _0x50a49c(this)['on'](_0x337991(0x179), function (_0x4ec6c1) {
                        const _0x3b5353 = _0x337991;
                        _0x4ec6c1[_0x3b5353(0x2ab)](), _0x11baf6[_0x3b5353(0x39a)](_0x3b5353(0x2a2), '-1'), _0x11baf6[_0x3b5353(0x2d4)](_0x3b5353(0x383));
                    }), _0x50a49c(this)['parent']()['find'](_0x337991(0x355))[_0x337991(0x28b)]()['on'](_0x337991(0x179), function (_0x180bba) {
                        const _0x308191 = _0x337991;
                        _0x180bba[_0x308191(0x2ab)](), _0x11baf6[_0x308191(0x39a)]('z-index', '2'), _0x11baf6[_0x308191(0x362)](_0x308191(0x383), !![]);
                    }), _0x50a49c(this)['on']('volumechange', function () {
                        const _0x3a3ccf = _0x337991;
                        let _0x553814 = _0x50a49c(this)[_0x3a3ccf(0x19d)]()[_0x3a3ccf(0x38c)](_0x3a3ccf(0x355))[_0x3a3ccf(0x38c)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x3a3ccf(0x2c6)](function (_0x292598) {
                            const _0x1f49c2 = _0x3a3ccf;
                            return _0x50a49c(this)['width']() <= 0x40 && _0x50a49c(this)[_0x1f49c2(0x185)]() <= 0x40 && _0x50a49c(this)[_0x1f49c2(0x38c)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')['length'] > 0x0;
                        });
                        var _0x4bff33 = _0x553814['find'](_0x3a3ccf(0x291))[_0x3a3ccf(0x269)] === 0x0;
                        this[_0x3a3ccf(0x18a)] != _0x4bff33 && (this[_0x3a3ccf(0x187)] = _0x1e78f9['videoVolume'], _0x553814?.['trigger']('click')), _0x50a49c(this)['attr']('data-completed') && (_0x1e78f9[_0x3a3ccf(0x1c7)] = this[_0x3a3ccf(0x187)], GM_setValue(_0x3a3ccf(0x1a7), this[_0x3a3ccf(0x187)])), this[_0x3a3ccf(0x187)] == _0x1e78f9[_0x3a3ccf(0x1c7)] && _0x50a49c(this)[_0x3a3ccf(0x362)](_0x3a3ccf(0x244), !![]);
                    }), _0x50a49c(this)[_0x337991(0x39a)](_0x337991(0x2f4), _0x337991(0x36f)), _0x50a49c(this)[_0x337991(0x39a)]('z-index', '2'), _0x50a49c(this)[_0x337991(0x362)](_0x337991(0x270), !![]), _0x50a49c(this)['attr'](_0x337991(0x383), !![]);
                }
            });
            var _0x3edcc3 = _0x37a252[_0x50420a(0x38c)](_0x50420a(0x2a8)), _0x48cac7 = _0x37a252[_0x50420a(0x38c)]('video\x20+\x20div\x20>\x20div')[_0x50420a(0x28b)]();
            _0x12f4f7(_0x3edcc3, _0x48cac7, _0x50420a(0x3b1), _0x50420a(0x18e));
        }
        ;
        function _0x1eca41() {
            const _0x7b1191 = _0x24ad6a;
            _0x50a49c(_0x7b1191(0x1b5))['map'](function (_0x3dc17e) {
                const _0x2517f1 = _0x7b1191;
                return _0x50a49c(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x50a49c(this)[_0x2517f1(0x19d)]()[_0x2517f1(0x19d)]()['parent']()['parent']()[0x0] : this;
            })['filter'](function () {
                const _0x565656 = _0x7b1191;
                return _0x50a49c(this)[_0x565656(0x185)]() > 0x0 && _0x50a49c(this)[_0x565656(0x1f1)]() > 0x0;
            })[_0x7b1191(0x2d5)](function (_0x49e97d) {
                const _0x52b8a4 = _0x7b1191;
                if (!_0x50a49c(this)['attr'](_0x52b8a4(0x33b)) && !_0x50a49c(this)['hasClass'](_0x52b8a4(0x374)) && !_0x50a49c(this)['children'](_0x52b8a4(0x2d0))?.[_0x52b8a4(0x30f)]('x1iyjqo2') && _0x50a49c(this)[_0x52b8a4(0x2dc)](_0x52b8a4(0x1bb))[_0x52b8a4(0x269)] === 0x0) {
                    _0x4e6c29('Found\x20post\x20container', _0x50a49c(this));
                    const _0x1dc044 = _0x50a49c(this), _0x33c2b4 = this[_0x52b8a4(0x2fd)], _0x106db0 = _0x52b8a4(0x344);
                    if (_0x33c2b4 === _0x52b8a4(0x204) && _0x49e97d != 0x0)
                        return;
                    const _0x4a87e3 = _0x1dc044[_0x52b8a4(0x3e0)](_0x52b8a4(0x1ed))[_0x52b8a4(0x3e0)](_0x52b8a4(0x1ed));
                    if (_0x4a87e3[_0x52b8a4(0x269)] === 0x0)
                        return;
                    _0x4e6c29(_0x52b8a4(0x280), _0x4a87e3);
                    if (_0x1dc044[_0x52b8a4(0x38c)](_0x52b8a4(0x327))['length'] > 0x0) {
                        _0x1dc044[_0x52b8a4(0x38c)]('._acay\x20+\x20.x24i39r')[_0x52b8a4(0x269)] > 0x0 && _0x1dc044[_0x52b8a4(0x38c)](_0x52b8a4(0x197))['css'](_0x52b8a4(0x21a), '37px');
                        const _0x20ad5b = _0x1dc044['find']('._acay')['first']()[_0x52b8a4(0x19d)]()[0x0];
                        var _0x51acc1 = new MutationObserver(function () {
                            const _0x558cb8 = _0x52b8a4;
                            _0x1dc044[_0x558cb8(0x38c)](_0x558cb8(0x197))['css']('top', '37px');
                        });
                        _0x51acc1[_0x52b8a4(0x20a)](_0x20ad5b, { 'childList': !![] });
                    }
                    _0x4a87e3['eq'](_0x33c2b4 === _0x52b8a4(0x204) ? 0x0 : _0x4a87e3[_0x52b8a4(0x269)] - 0x2)['append'](_0x52b8a4(0x255));
                    const _0x2bbead = '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x1a37dd('DW') + '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22>' + _0x1c1587['DOWNLOAD'] + '</div>', _0x4477ec = _0x52b8a4(0x3d3) + _0x1a37dd('NEW_TAB') + _0x52b8a4(0x310) + _0x1c1587[_0x52b8a4(0x3bf)] + '</div>', _0xfb878e = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1a37dd(_0x52b8a4(0x241)) + _0x52b8a4(0x2fe) + _0x1c1587[_0x52b8a4(0x262)] + '</div>';
                    _0x4a87e3[_0x52b8a4(0x38c)](_0x52b8a4(0x399))[_0x52b8a4(0x2d9)](_0x2bbead);
                    const _0x2cee8f = _0x1dc044[_0x52b8a4(0x38c)](_0x106db0)[_0x52b8a4(0x269)];
                    if (_0x2cee8f > 0x1 && _0x43d8a3['DIRECT_DOWNLOAD_VISIBLE_RESOURCE'] && !_0x43d8a3[_0x52b8a4(0x1b4)]) {
                        const _0x59dda0 = _0x52b8a4(0x1fc) + _0x1a37dd(_0x52b8a4(0x28e)) + _0x52b8a4(0x2b8) + _0x1c1587[_0x52b8a4(0x3b3)] + '</div>';
                        _0x4a87e3['find'](_0x52b8a4(0x399))[_0x52b8a4(0x2d9)](_0x59dda0);
                    }
                    _0x4a87e3['find'](_0x52b8a4(0x399))['append'](_0x4477ec), setTimeout(() => {
                        const _0x334198 = _0x52b8a4;
                        if (_0x4a87e3['eq'](_0x33c2b4 === _0x334198(0x204) ? 0x0 : _0x4a87e3[_0x334198(0x269)] - 0x2)[_0x334198(0x38c)](_0x334198(0x1dc))['length'] === 0x0)
                            _0x4a87e3['find'](_0x334198(0x2a8))[_0x334198(0x269)] > 0x0 && _0x4a87e3['find']('.button_wrapper')[_0x334198(0x2d9)](_0xfb878e);
                        else {
                            const _0x370048 = (_0x5ee378, _0x46d18b) => {
                                    const _0x383a17 = _0x334198;
                                    _0x5ee378[_0x383a17(0x311)](_0x38f611 => {
                                        const _0x36497b = _0x383a17;
                                        if (_0x38f611[_0x36497b(0x3bc)]) {
                                            var _0x1b887d = _0x50a49c(_0x38f611[_0x36497b(0x214)]);
                                            _0x1b887d['find'](_0x36497b(0x2a8))[_0x36497b(0x269)] > 0x0 ? (_0x4a87e3[_0x36497b(0x38c)]('.button_wrapper')['append'](_0xfb878e), _0x1e03db(_0x1dc044)) : _0x4a87e3['find'](_0x36497b(0x2b1))?.[_0x36497b(0x372)]();
                                        }
                                    });
                                }, _0x42fd2d = new IntersectionObserver(_0x370048, {
                                    'root': _0x1dc044[_0x334198(0x38c)](_0x334198(0x1ee))[_0x334198(0x28b)]()[_0x334198(0x19d)]()[_0x334198(0x19d)]()[_0x334198(0x19d)]()[0x0],
                                    'rootMargin': _0x334198(0x2d1),
                                    'threshold': 0.1
                                }), _0x3c41a1 = new MutationObserver(function (_0x162258, _0x1ed213) {
                                    const _0x3bedd4 = _0x334198;
                                    var _0x29f2d2 = _0x162258['at'](0x0)?.[_0x3bedd4(0x214)];
                                    _0x50a49c(_0x29f2d2)['find'](_0x3bedd4(0x38e))[_0x3bedd4(0x2d5)](function () {
                                        _0x42fd2d['observe'](this);
                                    });
                                });
                            _0x1dc044[_0x334198(0x38c)]('div\x20>\x20ul\x20li._acaz')[_0x334198(0x2d5)](function () {
                                const _0x602589 = _0x334198;
                                _0x42fd2d[_0x602589(0x20a)](this);
                            });
                            const _0x37c553 = _0x4a87e3['eq'](_0x33c2b4 === 'DIV' ? 0x0 : _0x4a87e3['length'] - 0x2)[_0x334198(0x38c)](_0x334198(0x1dc))?.['parent']()[0x0], _0x2269ef = _0x4a87e3['eq'](_0x33c2b4 === _0x334198(0x204) ? 0x0 : _0x4a87e3[_0x334198(0x269)] - 0x2)[_0x334198(0x38c)](_0x334198(0x1dc))?.[_0x334198(0x19d)]()['parent']()[0x0];
                            _0x37c553 && _0x3c41a1[_0x334198(0x20a)](_0x37c553, { 'childList': !![] }), _0x2269ef && _0x3c41a1['observe'](_0x2269ef, { 'attributes': !![] });
                        }
                    }, 0x32), _0x4a87e3['css'](_0x52b8a4(0x2f4), _0x52b8a4(0x36c)), _0x1e03db(_0x1dc044), _0x1e78f9['GL_registerEventList'][_0x52b8a4(0x360)]({
                        'element': this,
                        'trigger': [
                            _0x52b8a4(0x2b1),
                            _0x52b8a4(0x1b1),
                            _0x52b8a4(0x331),
                            '.SNKMS_IG_DW_MAIN'
                        ]
                    }), _0x50a49c(this)['on'](_0x52b8a4(0x38f), _0x52b8a4(0x2b1), function () {
                        const _0x3a3900 = _0x52b8a4;
                        _0x4a85bf(!![]), _0x1e78f9[_0x3a3900(0x1bc)] = _0x1dc044[_0x3a3900(0x362)](_0x3a3900(0x196)), _0x1e78f9['GL_postPath'] = location[_0x3a3900(0x298)]['replace'](/\/$/, '')[_0x3a3900(0x3ae)]('/')['at'](-0x1) || _0x1dc044[_0x3a3900(0x38c)](_0x3a3900(0x2eb))[_0x3a3900(0x28b)]()[_0x3a3900(0x362)](_0x3a3900(0x1f7))[_0x3a3900(0x3ae)]('/')['at'](0x2) || _0x50a49c(this)['parent']()['parent']()[_0x3a3900(0x19d)]()['children'](_0x3a3900(0x3b7))['children'](_0x3a3900(0x1ed))['children'](_0x3a3900(0x3b7))['find']('a[href^=\x22/p/\x22]')[_0x3a3900(0x330)]()['attr'](_0x3a3900(0x1f7))[_0x3a3900(0x3ae)]('/')['at'](0x2);
                        var _0x56423c = _0x458ab3(_0x1dc044);
                        _0x5c0694(!![], ![]), _0x2c6a54(_0x1e78f9['GL_postPath'], '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x3a3900(0x254)](() => {
                            let _0x5e5edd = setInterval(() => {
                                const _0x5d35ff = a0_0xd21c;
                                if (_0x50a49c(_0x5d35ff(0x27e))[_0x5d35ff(0x269)] > 0x0) {
                                    clearInterval(_0x5e5edd);
                                    var _0x4a60ad = _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x56423c + 0x1) + '\x22]')?.['parent']()[_0x5d35ff(0x38c)](_0x5d35ff(0x316))?.[_0x5d35ff(0x28b)]();
                                    _0x4a60ad != null && _0x4a60ad[_0x5d35ff(0x269)] > 0x0 ? _0x4a60ad[_0x5d35ff(0x3ce)](_0x5d35ff(0x38f)) : alert(_0x5d35ff(0x2a0)), _0x4a85bf(![]), _0x50a49c('.IG_SN_DIG')['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x50a49c(this)['on'](_0x52b8a4(0x38f), _0x52b8a4(0x1b1), function () {
                        const _0x527dce = _0x52b8a4;
                        _0x4a85bf(!![]), _0x1e78f9[_0x527dce(0x1bc)] = _0x1dc044['attr'](_0x527dce(0x196)), _0x1e78f9[_0x527dce(0x1d8)] = location['pathname'][_0x527dce(0x3cc)](/\/$/, '')['split']('/')['at'](-0x1) || _0x1dc044[_0x527dce(0x38c)](_0x527dce(0x2eb))['first']()[_0x527dce(0x362)](_0x527dce(0x1f7))[_0x527dce(0x3ae)]('/')['at'](0x2) || _0x50a49c(this)[_0x527dce(0x19d)]()[_0x527dce(0x19d)]()[_0x527dce(0x19d)]()[_0x527dce(0x3e0)](_0x527dce(0x3b7))['children'](_0x527dce(0x1ed))[_0x527dce(0x3e0)](_0x527dce(0x3b7))[_0x527dce(0x38c)]('a[href^=\x22/p/\x22]')[_0x527dce(0x330)]()[_0x527dce(0x362)](_0x527dce(0x1f7))[_0x527dce(0x3ae)]('/')['at'](0x2);
                        var _0x407a81 = _0x458ab3(_0x1dc044);
                        _0x5c0694(!![], ![]), _0x2c6a54(_0x1e78f9[_0x527dce(0x1d8)], _0x527dce(0x3d5), '')['then'](() => {
                            let _0x1da100 = setInterval(() => {
                                const _0x437559 = a0_0xd21c;
                                if (_0x50a49c(_0x437559(0x27e))[_0x437559(0x269)] > 0x0) {
                                    clearInterval(_0x1da100);
                                    var _0x3fece9 = _0x50a49c(_0x437559(0x223) + (_0x407a81 + 0x1) + '\x22]');
                                    if (_0x43d8a3['FORCE_RESOURCE_VIA_MEDIA'] && _0x43d8a3[_0x437559(0x275)])
                                        _0x8fdc86(_0x3fece9[_0x437559(0x28b)]()[0x0], !![]);
                                    else {
                                        let _0x170fb8 = _0x3fece9?.[_0x437559(0x362)]('data-href');
                                        if (_0x170fb8) {
                                            var _0x2da0df = new URL(_0x170fb8);
                                            _0x2da0df[_0x437559(0x1d4)] = _0x437559(0x29f), _0x17dfc0(_0x2da0df[_0x437559(0x1f7)]);
                                        } else
                                            alert(_0x437559(0x3d7));
                                    }
                                    _0x4a85bf(![]), _0x50a49c(_0x437559(0x28a))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x50a49c(this)['on'](_0x52b8a4(0x38f), _0x52b8a4(0x331), async function () {
                        const _0x4799ca = _0x52b8a4;
                        _0x1e78f9[_0x4799ca(0x1bc)] = _0x1dc044[_0x4799ca(0x362)](_0x4799ca(0x196)), _0x1e78f9[_0x4799ca(0x1d8)] = location['pathname'][_0x4799ca(0x3cc)](/\/$/, '')['split']('/')['at'](-0x1) || _0x1dc044[_0x4799ca(0x38c)]('a[href^=\x22/p/\x22]')[_0x4799ca(0x28b)]()[_0x4799ca(0x362)](_0x4799ca(0x1f7))[_0x4799ca(0x3ae)]('/')['at'](0x2) || _0x50a49c(this)[_0x4799ca(0x19d)]()[_0x4799ca(0x19d)]()[_0x4799ca(0x19d)]()['children'](_0x4799ca(0x3b7))[_0x4799ca(0x3e0)](_0x4799ca(0x1ed))[_0x4799ca(0x3e0)](_0x4799ca(0x3b7))[_0x4799ca(0x38c)](_0x4799ca(0x2eb))[_0x4799ca(0x330)]()[_0x4799ca(0x362)]('href')[_0x4799ca(0x3ae)]('/')['at'](0x2), _0x5c0694(_0x43d8a3[_0x4799ca(0x1b4)], !![]), _0x50a49c(_0x4799ca(0x3ea))[_0x4799ca(0x31e)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x1e78f9[_0x4799ca(0x1d8)] + '\x22>' + _0x1e78f9['GL_postPath'] + _0x4799ca(0x260)), _0x50a49c(_0x4799ca(0x27e))[_0x4799ca(0x2d5)](function () {
                            const _0x3ea6ed = _0x4799ca;
                            _0x50a49c(this)[_0x3ea6ed(0x1e4)](_0x3ea6ed(0x2dd)), _0x50a49c(this)['before'](_0x3ea6ed(0x20b)), _0x50a49c(this)[_0x3ea6ed(0x261)](_0x3ea6ed(0x3d3) + _0x1a37dd(_0x3ea6ed(0x3bf)) + _0x3ea6ed(0x332) + _0x1c1587['NEW_TAB'] + _0x3ea6ed(0x348)), _0x50a49c(this)[_0x3ea6ed(0x362)](_0x3ea6ed(0x2d8)) == _0x3ea6ed(0x2a8) && _0x50a49c(this)[_0x3ea6ed(0x261)](_0x3ea6ed(0x382) + _0x1a37dd(_0x3ea6ed(0x241)) + _0x3ea6ed(0x1ac) + _0x1c1587[_0x3ea6ed(0x262)] + _0x3ea6ed(0x348));
                        }), _0x2c6a54(_0x1e78f9[_0x4799ca(0x1d8)], '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x1a37dd(_0x4799ca(0x345)))[_0x4799ca(0x254)](() => {
                            let _0x367ba3 = setInterval(() => {
                                const _0x304d85 = a0_0xd21c;
                                _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x304d85(0x269)] > 0x0 && (clearInterval(_0x367ba3), _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x304d85(0x2d5)](function () {
                                    const _0x37e51b = _0x304d85;
                                    _0x50a49c(this)['trigger'](_0x37e51b(0x38f));
                                }), _0x50a49c(_0x304d85(0x28a))[_0x304d85(0x372)]());
                            }, 0xfa);
                        });
                    }), _0x50a49c(this)['on'](_0x52b8a4(0x38f), _0x52b8a4(0x29e), async function () {
                        const _0x1acf64 = _0x52b8a4;
                        _0x1e78f9['GL_username'] = _0x1dc044[_0x1acf64(0x362)](_0x1acf64(0x196)), _0x1e78f9[_0x1acf64(0x1d8)] = location[_0x1acf64(0x298)][_0x1acf64(0x3cc)](/\/$/, '')[_0x1acf64(0x3ae)]('/')['at'](-0x1) || _0x1dc044[_0x1acf64(0x38c)](_0x1acf64(0x2eb))['first']()['attr'](_0x1acf64(0x1f7))[_0x1acf64(0x3ae)]('/')['at'](0x2) || _0x50a49c(this)['parent']()[_0x1acf64(0x19d)]()[_0x1acf64(0x19d)]()[_0x1acf64(0x3e0)]('div:last-child')[_0x1acf64(0x3e0)](_0x1acf64(0x1ed))[_0x1acf64(0x3e0)](_0x1acf64(0x3b7))['find']('a[href^=\x22/p/\x22]')[_0x1acf64(0x330)]()['attr'](_0x1acf64(0x1f7))[_0x1acf64(0x3ae)]('/')['at'](0x2), _0x5c0694(_0x43d8a3[_0x1acf64(0x1b4)], !![]), _0x50a49c('#article-id')['html'](_0x1acf64(0x29d) + _0x1e78f9[_0x1acf64(0x1d8)] + '\x22>' + _0x1e78f9[_0x1acf64(0x1d8)] + '</a>');
                        if (_0x43d8a3[_0x1acf64(0x369)]) {
                            _0x4a85bf(!![]), _0x270399(!![]);
                            var _0xec5740 = _0x458ab3(_0x50a49c(this)[_0x1acf64(0x19d)]()[_0x1acf64(0x19d)]()[_0x1acf64(0x19d)]());
                            _0x2c6a54(_0x1e78f9[_0x1acf64(0x1d8)], '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x1acf64(0x254)](() => {
                                let _0x5561e0 = setInterval(() => {
                                    const _0x55bdee = a0_0xd21c;
                                    if (_0x50a49c(_0x55bdee(0x27e))[_0x55bdee(0x269)] > 0x0) {
                                        clearInterval(_0x5561e0);
                                        var _0x36c37b = _0x50a49c(_0x55bdee(0x223) + (_0xec5740 + 0x1) + '\x22]')?.['attr'](_0x55bdee(0x3e6));
                                        _0x36c37b ? (_0x4a85bf(![]), _0x50a49c(_0x55bdee(0x223) + (_0xec5740 + 0x1) + '\x22]')?.[_0x55bdee(0x3ce)]('click')) : alert(_0x55bdee(0x200)), _0x50a49c(_0x55bdee(0x28a))['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x43d8a3[_0x1acf64(0x1b4)]) {
                            var _0x5707e4 = 0x0, _0x499c34 = _0x50a49c(this)['parent']()[_0x1acf64(0x19d)]()[_0x1acf64(0x38c)](_0x106db0)['length'], _0x23563f = _0x43d8a3[_0x1acf64(0x3a6)], _0x1a0d4c = new Date(_0x50a49c(this)['parent']()[_0x1acf64(0x19d)]()['find'](_0x1acf64(0x26d))['first']()[_0x1acf64(0x362)](_0x1acf64(0x24e)))[_0x1acf64(0x3b5)]();
                            if (_0x499c34)
                                _0x50a49c(this)['parent']()[_0x1acf64(0x19d)]()[_0x1acf64(0x38c)](_0x106db0)[_0x1acf64(0x2d5)](function () {
                                    const _0x6582f1 = _0x1acf64;
                                    let _0x368c88 = _0x50a49c(this)[_0x6582f1(0x19d)]()[_0x6582f1(0x19d)]()[_0x6582f1(0x19d)]()['find'](_0x6582f1(0x2a8));
                                    _0x368c88 && _0x368c88['attr'](_0x6582f1(0x2c3)) && (_0x23563f = !![]);
                                }), _0x23563f || _0x43d8a3['FORCE_RESOURCE_VIA_MEDIA'] ? _0x2c6a54(_0x1e78f9[_0x1acf64(0x1d8)], _0x1acf64(0x3d5), _0x1a37dd(_0x1acf64(0x345))) : (_0x50a49c(this)[_0x1acf64(0x19d)]()[_0x1acf64(0x19d)]()[_0x1acf64(0x38c)](_0x106db0)['each'](function () {
                                    const _0x40d973 = _0x1acf64;
                                    _0x5707e4++;
                                    let _0x6f9c42 = _0x50a49c(this)[_0x40d973(0x38c)](_0x40d973(0x2a8)), _0x47e603 = _0x50a49c(this)[_0x40d973(0x38c)]('._aagv\x20img'), _0x135469 = _0x47e603[_0x40d973(0x362)](_0x40d973(0x2e7)) ? _0x47e603[_0x40d973(0x362)](_0x40d973(0x2e7))[_0x40d973(0x3ae)]('\x20')[0x0] : _0x47e603[_0x40d973(0x362)](_0x40d973(0x2c3));
                                    _0x6f9c42 && _0x6f9c42[_0x40d973(0x362)](_0x40d973(0x2c3)) && (_0x23563f = !![]), _0x47e603 && _0x135469 && _0x50a49c(_0x40d973(0x3d5))[_0x40d973(0x2d9)](_0x40d973(0x3e3) + _0x1a0d4c + _0x40d973(0x19c) + _0x1e78f9[_0x40d973(0x1d8)] + _0x40d973(0x3eb) + _0x5707e4 + _0x40d973(0x2ce) + _0x135469 + _0x40d973(0x20e) + _0x135469 + _0x40d973(0x18b) + _0x1a37dd(_0x40d973(0x233)) + _0x40d973(0x3bd) + _0x5707e4 + _0x40d973(0x312));
                                }), _0x23563f && _0x2c6a54(_0x1e78f9[_0x1acf64(0x1d8)], _0x1acf64(0x3d5), _0x1a37dd('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x43d8a3[_0x1acf64(0x2ea)])
                                    _0x2c6a54(_0x1e78f9['GL_postPath'], _0x1acf64(0x3d5), _0x1a37dd(_0x1acf64(0x345)));
                                else {
                                    _0x5707e4++;
                                    let _0x4522d8 = _0x50a49c(this)['parent']()[_0x1acf64(0x19d)]()[_0x1acf64(0x19d)]()[_0x1acf64(0x38c)]('video'), _0x51e145 = _0x50a49c(this)[_0x1acf64(0x19d)]()[_0x1acf64(0x19d)]()[_0x1acf64(0x19d)]()[_0x1acf64(0x38c)]('._aagv\x20img'), _0x3c775a = _0x51e145['attr']('srcset') ? _0x51e145[_0x1acf64(0x362)](_0x1acf64(0x2e7))['split']('\x20')[0x0] : _0x51e145[_0x1acf64(0x362)]('src');
                                    _0x4522d8 && _0x4522d8['attr'](_0x1acf64(0x2c3)) && _0x2c6a54(_0x1e78f9['GL_postPath'], '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x1a37dd(_0x1acf64(0x379))), _0x51e145 && _0x3c775a && _0x50a49c(_0x1acf64(0x3d5))['append'](_0x1acf64(0x3e3) + _0x1a0d4c + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x1e78f9[_0x1acf64(0x1d8)] + _0x1acf64(0x3eb) + _0x5707e4 + _0x1acf64(0x2ff) + _0x3c775a + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x3c775a + _0x1acf64(0x18b) + _0x1a37dd(_0x1acf64(0x233)) + '</span>\x20' + _0x5707e4 + _0x1acf64(0x312));
                                }
                            }
                        }
                        _0x50a49c(_0x1acf64(0x27e))['each'](function () {
                            const _0x335eba = _0x1acf64;
                            _0x50a49c(this)['wrap'](_0x335eba(0x2dd)), _0x50a49c(this)['before'](_0x335eba(0x20b)), _0x50a49c(this)[_0x335eba(0x261)](_0x335eba(0x3d3) + _0x1a37dd(_0x335eba(0x3bf)) + _0x335eba(0x332) + _0x1c1587[_0x335eba(0x3bf)] + _0x335eba(0x348)), _0x50a49c(this)['attr'](_0x335eba(0x2d8)) == _0x335eba(0x2a8) && _0x50a49c(this)[_0x335eba(0x261)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1a37dd(_0x335eba(0x241)) + _0x335eba(0x1ac) + _0x1c1587[_0x335eba(0x262)] + _0x335eba(0x348));
                        }), _0x43d8a3[_0x1acf64(0x1b4)] && _0x2c6a54(_0x1e78f9[_0x1acf64(0x1d8)], '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x1a37dd(_0x1acf64(0x345)))[_0x1acf64(0x254)](() => {
                            let _0x5a0ed3 = setInterval(() => {
                                const _0xab61b4 = a0_0xd21c;
                                _0x50a49c(_0xab61b4(0x27e))[_0xab61b4(0x269)] > 0x0 && (clearInterval(_0x5a0ed3), _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')['each'](function () {
                                    const _0x23efba = _0xab61b4;
                                    _0x50a49c(this)[_0x23efba(0x3ce)]('click');
                                }), _0x50a49c(_0xab61b4(0x28a))[_0xab61b4(0x372)]());
                            }, 0xfa);
                        });
                    });
                    var _0x2f515f = _0x50a49c(this)[_0x52b8a4(0x38c)](_0x52b8a4(0x389))[_0x52b8a4(0x28b)]()[_0x52b8a4(0x207)]() || _0x50a49c(this)['find'](_0x52b8a4(0x3c5))[_0x52b8a4(0x2c6)](function () {
                        const _0x2757f9 = _0x52b8a4;
                        return _0x50a49c(this)?.[_0x2757f9(0x207)]()?.[_0x2757f9(0x269)] > 0x0;
                    })[_0x52b8a4(0x28b)]()['text']();
                    _0x50a49c(this)[_0x52b8a4(0x362)]('data-snig', _0x52b8a4(0x3df)), _0x50a49c(this)[_0x52b8a4(0x362)](_0x52b8a4(0x196), _0x2f515f);
                }
            });
        }
        function _0x5cccb6(_0x18d53b) {
            const _0x2b414c = _0x24ad6a;
            var _0x35be72 = _0x18d53b['shortcode_media'] ?? _0x18d53b;
            return _0x35be72[_0x2b414c(0x357)] == null && _0x35be72[_0x2b414c(0x2b9)] != null && (_0x35be72[_0x2b414c(0x357)] = _0x35be72[_0x2b414c(0x2b9)]), _0x35be72[_0x2b414c(0x357)] == null && (_0x4e6c29('carousel_media:', _0x2b414c(0x2a7)), alert(_0x2b414c(0x329))), _0x35be72;
        }
        async function _0x2c6a54(_0x42283f, _0x10680c, _0x2f2a23) {
            const _0x1b48d3 = _0x24ad6a;
            try {
                _0x50a49c(_0x10680c + '\x20a')[_0x1b48d3(0x372)](), _0x50a49c(_0x10680c)['append']('<p\x20id=\x22_SNLOAD\x22>' + _0x2f2a23 + _0x1b48d3(0x1c4));
                let _0x1ab992 = await _0x115603(_0x42283f), _0x4403d8 = _0x5cccb6(_0x1ab992['data']);
                if (_0x1ab992[_0x1b48d3(0x259)] === _0x1b48d3(0x35f)) {
                    let _0x424f04 = 0x1;
                    _0x4403d8[_0x1b48d3(0x245)] == _0x1b48d3(0x27c) && _0x4403d8['video_url'] && (_0x50a49c(_0x10680c)[_0x1b48d3(0x2d9)](_0x1b48d3(0x279) + _0x4403d8['id'] + _0x1b48d3(0x1b7) + _0x4403d8[_0x1b48d3(0x367)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x4403d8[_0x1b48d3(0x390)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x4403d8[_0x1b48d3(0x357)][_0x1b48d3(0x371)] + _0x1b48d3(0x2be) + _0x424f04 + _0x1b48d3(0x2ce) + _0x4403d8['video_url'] + _0x1b48d3(0x20e) + _0x4403d8[_0x1b48d3(0x37b)][0x1][_0x1b48d3(0x2c3)] + _0x1b48d3(0x3cd) + _0x1a37dd('VID') + _0x1b48d3(0x3bd) + _0x424f04 + '\x20-</a>'), _0x424f04++);
                    _0x4403d8[_0x1b48d3(0x245)] == _0x1b48d3(0x33e) && (_0x50a49c(_0x10680c)[_0x1b48d3(0x2d9)](_0x1b48d3(0x279) + _0x4403d8['id'] + _0x1b48d3(0x1b7) + _0x4403d8[_0x1b48d3(0x367)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x4403d8[_0x1b48d3(0x390)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x4403d8[_0x1b48d3(0x357)][_0x1b48d3(0x371)] + '\x22\x20data-globalIndex=\x22' + _0x424f04 + _0x1b48d3(0x2ce) + _0x4403d8[_0x1b48d3(0x37b)][_0x4403d8[_0x1b48d3(0x37b)][_0x1b48d3(0x269)] - 0x1]['src'] + _0x1b48d3(0x20e) + _0x4403d8[_0x1b48d3(0x37b)][0x1][_0x1b48d3(0x2c3)] + _0x1b48d3(0x18b) + _0x1a37dd('IMG') + _0x1b48d3(0x3bd) + _0x424f04 + _0x1b48d3(0x312)), _0x424f04++);
                    if (_0x4403d8['__typename'] == _0x1b48d3(0x336) && _0x4403d8[_0x1b48d3(0x2ae)])
                        for (let _0x3b775f of _0x4403d8[_0x1b48d3(0x2ae)][_0x1b48d3(0x392)]) {
                            _0x3b775f['node'][_0x1b48d3(0x245)] == _0x1b48d3(0x27c) && _0x50a49c(_0x10680c)[_0x1b48d3(0x2d9)](_0x1b48d3(0x279) + _0x3b775f[_0x1b48d3(0x307)]['id'] + _0x1b48d3(0x1b7) + _0x4403d8[_0x1b48d3(0x367)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x4403d8[_0x1b48d3(0x390)] + _0x1b48d3(0x208) + _0x4403d8[_0x1b48d3(0x357)][_0x1b48d3(0x371)] + '\x22\x20data-globalIndex=\x22' + _0x424f04 + _0x1b48d3(0x2ce) + _0x3b775f[_0x1b48d3(0x307)]['video_url'] + _0x1b48d3(0x20e) + _0x3b775f[_0x1b48d3(0x307)]['display_resources'][0x1]['src'] + _0x1b48d3(0x2e4) + _0x1a37dd('VID') + '</span>\x20' + _0x424f04 + _0x1b48d3(0x312)), _0x3b775f['node'][_0x1b48d3(0x245)] == _0x1b48d3(0x33e) && _0x50a49c(_0x10680c)[_0x1b48d3(0x2d9)](_0x1b48d3(0x279) + _0x3b775f[_0x1b48d3(0x307)]['id'] + _0x1b48d3(0x1b7) + _0x4403d8[_0x1b48d3(0x367)] + _0x1b48d3(0x1e8) + _0x4403d8[_0x1b48d3(0x390)] + _0x1b48d3(0x22d) + _0x4403d8[_0x1b48d3(0x357)][_0x1b48d3(0x371)] + _0x1b48d3(0x2be) + _0x424f04 + _0x1b48d3(0x2ce) + _0x3b775f[_0x1b48d3(0x307)][_0x1b48d3(0x37b)][_0x3b775f[_0x1b48d3(0x307)][_0x1b48d3(0x37b)][_0x1b48d3(0x269)] - 0x1]['src'] + _0x1b48d3(0x20e) + _0x3b775f[_0x1b48d3(0x307)]['display_resources'][0x1][_0x1b48d3(0x2c3)] + _0x1b48d3(0x18b) + _0x1a37dd(_0x1b48d3(0x233)) + _0x1b48d3(0x3bd) + _0x424f04 + _0x1b48d3(0x312)), _0x424f04++;
                        }
                } else {
                    if (_0x4403d8[_0x1b48d3(0x20d)])
                        _0x4e6c29(_0x1b48d3(0x20d)), _0x4403d8[_0x1b48d3(0x20d)][_0x1b48d3(0x311)]((_0x4a01a3, _0x5adbd3) => {
                            const _0x5057bc = _0x1b48d3;
                            let _0x31fab7 = _0x5adbd3 + 0x1;
                            _0x4a01a3['video_versions'] == null ? (_0x4a01a3[_0x5057bc(0x302)][_0x5057bc(0x220)]['sort'](function (_0x13af87, _0x2f9de4) {
                                const _0x41f882 = _0x5057bc;
                                let _0x4fa821 = new URL(_0x13af87[_0x41f882(0x1c3)])[_0x41f882(0x335)][_0x41f882(0x22f)](_0x41f882(0x3c1)), _0x44ab79 = new URL(_0x2f9de4[_0x41f882(0x1c3)])[_0x41f882(0x335)][_0x41f882(0x22f)](_0x41f882(0x3c1));
                                if (_0x4fa821 && _0x44ab79) {
                                    if (_0x4fa821['length'] > _0x44ab79['length'])
                                        return 0x1;
                                    if (_0x4fa821['length'] < _0x44ab79[_0x41f882(0x269)])
                                        return -0x1;
                                } else {
                                    if (_0x13af87['width'] < _0x2f9de4['width'])
                                        return 0x1;
                                    if (_0x13af87['width'] > _0x2f9de4['width'])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x50a49c(_0x10680c)[_0x5057bc(0x2d9)](_0x5057bc(0x279) + _0x4a01a3['pk'] + '\x22\x20datetime=\x22' + _0x4a01a3[_0x5057bc(0x3e9)] + _0x5057bc(0x1e8) + _0x4403d8['code'] + _0x5057bc(0x22d) + _0x4403d8[_0x5057bc(0x357)][_0x5057bc(0x371)] + '\x22\x20data-globalIndex=\x22' + _0x31fab7 + _0x5057bc(0x2ce) + _0x4a01a3[_0x5057bc(0x302)][_0x5057bc(0x220)][0x0]['url'] + _0x5057bc(0x20e) + _0x4a01a3[_0x5057bc(0x302)]['candidates'][0x0][_0x5057bc(0x1c3)] + _0x5057bc(0x18b) + _0x1a37dd('IMG') + _0x5057bc(0x3bd) + _0x31fab7 + _0x5057bc(0x312))) : _0x50a49c(_0x10680c)[_0x5057bc(0x2d9)](_0x5057bc(0x279) + _0x4a01a3['pk'] + _0x5057bc(0x1b7) + _0x4a01a3[_0x5057bc(0x3e9)] + _0x5057bc(0x1e8) + _0x4403d8[_0x5057bc(0x301)] + _0x5057bc(0x208) + _0x4403d8[_0x5057bc(0x357)][_0x5057bc(0x371)] + _0x5057bc(0x2be) + _0x31fab7 + _0x5057bc(0x2ce) + _0x4a01a3[_0x5057bc(0x188)][0x0][_0x5057bc(0x1c3)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x4a01a3['image_versions2'][_0x5057bc(0x220)][0x0][_0x5057bc(0x1c3)] + _0x5057bc(0x3cd) + _0x1a37dd('VID') + _0x5057bc(0x3bd) + _0x31fab7 + _0x5057bc(0x312));
                        });
                    else {
                        let _0x2c94d7 = 0x1;
                        _0x4403d8[_0x1b48d3(0x188)] == null ? (_0x4403d8['image_versions2'][_0x1b48d3(0x220)][_0x1b48d3(0x1ad)](function (_0x1bc1c1, _0x528c1e) {
                            const _0x22d3d3 = _0x1b48d3;
                            let _0x1ff1b5 = new URL(_0x1bc1c1[_0x22d3d3(0x1c3)])[_0x22d3d3(0x335)][_0x22d3d3(0x22f)](_0x22d3d3(0x3c1)), _0x468fd2 = new URL(_0x528c1e[_0x22d3d3(0x1c3)])[_0x22d3d3(0x335)][_0x22d3d3(0x22f)](_0x22d3d3(0x3c1));
                            if (_0x1ff1b5 && _0x468fd2) {
                                if (_0x1ff1b5['length'] > _0x468fd2[_0x22d3d3(0x269)])
                                    return 0x1;
                                if (_0x1ff1b5[_0x22d3d3(0x269)] < _0x468fd2[_0x22d3d3(0x269)])
                                    return -0x1;
                            } else {
                                if (_0x1bc1c1[_0x22d3d3(0x1f1)] < _0x528c1e['width'])
                                    return 0x1;
                                if (_0x1bc1c1[_0x22d3d3(0x1f1)] > _0x528c1e[_0x22d3d3(0x1f1)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x50a49c(_0x10680c)['append'](_0x1b48d3(0x279) + _0x4403d8['pk'] + _0x1b48d3(0x1b7) + _0x4403d8[_0x1b48d3(0x3e9)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x4403d8[_0x1b48d3(0x301)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x4403d8[_0x1b48d3(0x357)][_0x1b48d3(0x371)] + _0x1b48d3(0x2be) + _0x2c94d7 + _0x1b48d3(0x2ce) + _0x4403d8[_0x1b48d3(0x302)]['candidates'][0x0]['url'] + _0x1b48d3(0x20e) + _0x4403d8[_0x1b48d3(0x302)][_0x1b48d3(0x220)][0x0]['url'] + _0x1b48d3(0x18b) + _0x1a37dd(_0x1b48d3(0x233)) + '</span>\x20' + _0x2c94d7 + _0x1b48d3(0x312))) : _0x50a49c(_0x10680c)['append'](_0x1b48d3(0x279) + _0x4403d8['pk'] + _0x1b48d3(0x1b7) + _0x4403d8['taken_at'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x4403d8['code'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x4403d8[_0x1b48d3(0x357)]['username'] + '\x22\x20data-globalIndex=\x22' + _0x2c94d7 + _0x1b48d3(0x2ce) + _0x4403d8[_0x1b48d3(0x188)][0x0][_0x1b48d3(0x1c3)] + _0x1b48d3(0x20e) + _0x4403d8[_0x1b48d3(0x302)][_0x1b48d3(0x220)][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x1a37dd('VID') + '</span>\x20' + _0x2c94d7 + _0x1b48d3(0x312));
                    }
                }
                _0x50a49c(_0x1b48d3(0x37c))['remove'](), _0x50a49c(_0x1b48d3(0x27e))['each'](function () {
                    const _0x3cfe76 = _0x1b48d3;
                    _0x50a49c(this)[_0x3cfe76(0x1e4)](_0x3cfe76(0x2dd)), _0x50a49c(this)[_0x3cfe76(0x37a)](_0x3cfe76(0x20b)), _0x50a49c(this)[_0x3cfe76(0x261)](_0x3cfe76(0x3d3) + _0x1a37dd(_0x3cfe76(0x3bf)) + _0x3cfe76(0x332) + _0x1c1587[_0x3cfe76(0x3bf)] + _0x3cfe76(0x348)), _0x50a49c(this)['attr'](_0x3cfe76(0x2d8)) == _0x3cfe76(0x2a8) && _0x50a49c(this)[_0x3cfe76(0x261)](_0x3cfe76(0x382) + _0x1a37dd(_0x3cfe76(0x241)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x1c1587[_0x3cfe76(0x262)] + _0x3cfe76(0x348));
                });
            } catch (_0x3a5ff6) {
                _0x4e6c29('createMediaListDOM', _0x3a5ff6);
            }
            ;
        }
        function _0x458ab3(_0x297b3d) {
            const _0x52ec5f = _0x24ad6a;
            var _0x2b607d = 0x0, _0x29897c = _0x297b3d['find']('.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div');
            return (_0x29897c == null || !_0x29897c['hasClass'](_0x52ec5f(0x271))) && (_0x29897c = _0x297b3d[_0x52ec5f(0x38c)](_0x52ec5f(0x318))['eq'](0x0)[_0x52ec5f(0x3e0)]('div')), _0x29897c[_0x52ec5f(0x2c6)](_0x52ec5f(0x184))['each'](function (_0xfc7e4f) {
                const _0x1baa30 = _0x52ec5f;
                _0x50a49c(this)[_0x1baa30(0x30f)](_0x1baa30(0x2f0)) && (_0x2b607d = _0xfc7e4f);
            }), _0x2b607d;
        }
        async function _0x362cfa(_0xd6ba83) {
            const _0x516016 = _0x24ad6a;
            if (_0xd6ba83) {
                _0x4a85bf(!![]);
                let _0x5d5ecb = new Date()[_0x516016(0x3b5)](), _0x4c557a = Math[_0x516016(0x1b3)](_0x5d5ecb / 0x3e8), _0x579624 = location['pathname'][_0x516016(0x1ea)](/(reels|tagged)\/$/ig, '')[_0x516016(0x3ae)]('/')[_0x516016(0x2c6)](_0x2ab093 => _0x2ab093[_0x516016(0x269)] > 0x0)['at'](-0x1), _0x5b8a8e = await _0x5ed0b4(_0x579624);
                try {
                    let _0x4273d5 = await _0x1b7519(_0x5b8a8e['user']['pk']);
                    _0x9382f4(_0x4273d5, _0x579624, _0x516016(0x2fb), _0x4c557a, _0x516016(0x263));
                } catch (_0xd36277) {
                    _0x9382f4(_0x5b8a8e[_0x516016(0x2b9)][_0x516016(0x1ca)], _0x579624, _0x516016(0x2fb), _0x4c557a, _0x516016(0x263));
                }
                _0x4a85bf(![]);
            } else {
                if (!_0x50a49c(_0x516016(0x20f))['length']) {
                    let _0x3c17e2 = setInterval(() => {
                        const _0x13a25c = _0x516016;
                        if (_0x50a49c('.IG_DWPROFILE')[_0x13a25c(0x269)]) {
                            clearInterval(_0x3c17e2);
                            return;
                        }
                        _0x50a49c(_0x13a25c(0x378))[_0x13a25c(0x19d)]()[_0x13a25c(0x19d)]()[_0x13a25c(0x2d9)](_0x13a25c(0x283) + _0x1a37dd('DW') + _0x13a25c(0x1cf) + _0x1c1587[_0x13a25c(0x1c1)] + _0x13a25c(0x348)), _0x50a49c(_0x13a25c(0x378))[_0x13a25c(0x19d)]()[_0x13a25c(0x19d)]()[_0x13a25c(0x39a)]('position', _0x13a25c(0x36c)), _0x50a49c(_0x13a25c(0x1a8))['parent']()[_0x13a25c(0x19d)]()[_0x13a25c(0x19d)]()[_0x13a25c(0x2d9)](_0x13a25c(0x283) + _0x1a37dd('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x1c1587[_0x13a25c(0x1c1)] + '</div>'), _0x50a49c(_0x13a25c(0x1a8))[_0x13a25c(0x19d)]()[_0x13a25c(0x19d)]()[_0x13a25c(0x19d)]()['css']('position', 'relative');
                    }, 0x96);
                }
            }
        }
        async function _0x4d47cb(_0x7cc25e, _0x544694, _0x3ab4ad) {
            const _0x2ce6ae = _0x24ad6a;
            if (_0x7cc25e) {
                _0x4a85bf(!![]);
                let _0x5368a4 = location[_0x2ce6ae(0x1f7)][_0x2ce6ae(0x3ae)]('?')['at'](0x0)[_0x2ce6ae(0x3ae)](_0x2ce6ae(0x194))['at'](-0x1)[_0x2ce6ae(0x1ea)]('/', ''), _0x14c026 = await _0x115603(_0x5368a4), _0x1d9670 = _0x5cccb6(_0x14c026['data']), _0x2bf4f8 = new Date()[_0x2ce6ae(0x3b5)]();
                _0x43d8a3[_0x2ce6ae(0x240)] && (_0x14c026[_0x2ce6ae(0x259)] === _0x2ce6ae(0x35f) ? _0x2bf4f8 = _0x1d9670[_0x2ce6ae(0x3c6)][_0x2ce6ae(0x367)] : _0x2bf4f8 = _0x1d9670[_0x2ce6ae(0x3e9)]);
                if (_0x14c026[_0x2ce6ae(0x259)] === _0x2ce6ae(0x35f)) {
                    if (_0x544694 && _0x1d9670['shortcode_media'][_0x2ce6ae(0x2e2)]) {
                        if (_0x3ab4ad)
                            _0x17dfc0(_0x1d9670['shortcode_media'][_0x2ce6ae(0x31c)]);
                        else {
                            let _0x15e0f5 = 'mp4';
                            _0x9382f4(_0x1d9670['shortcode_media']['video_url'], _0x1d9670[_0x2ce6ae(0x3c6)][_0x2ce6ae(0x357)]['username'], _0x2ce6ae(0x29c), _0x2bf4f8, _0x15e0f5, _0x5368a4);
                        }
                    } else {
                        if (_0x3ab4ad)
                            _0x17dfc0(_0x1d9670[_0x2ce6ae(0x3c6)][_0x2ce6ae(0x37b)]['at'](-0x1)['src']);
                        else {
                            let _0x619909 = _0x2ce6ae(0x263);
                            _0x9382f4(_0x1d9670['shortcode_media'][_0x2ce6ae(0x37b)]['at'](-0x1)['src'], _0x1d9670['shortcode_media'][_0x2ce6ae(0x357)][_0x2ce6ae(0x371)], _0x2ce6ae(0x29c), _0x2bf4f8, _0x619909, _0x5368a4);
                        }
                    }
                } else {
                    if (_0x544694 && _0x1d9670[_0x2ce6ae(0x188)] != null) {
                        if (_0x3ab4ad)
                            _0x17dfc0(_0x1d9670[_0x2ce6ae(0x188)][0x0][_0x2ce6ae(0x1c3)]);
                        else {
                            let _0x7c5c75 = 'mp4';
                            _0x9382f4(_0x1d9670[_0x2ce6ae(0x188)][0x0][_0x2ce6ae(0x1c3)], _0x1d9670[_0x2ce6ae(0x357)][_0x2ce6ae(0x371)], _0x2ce6ae(0x29c), _0x2bf4f8, _0x7c5c75, _0x5368a4);
                        }
                    } else {
                        if (_0x3ab4ad)
                            _0x17dfc0(_0x1d9670[_0x2ce6ae(0x302)]['candidates'][0x0][_0x2ce6ae(0x1c3)]);
                        else {
                            let _0x543c32 = _0x2ce6ae(0x263);
                            _0x9382f4(_0x1d9670[_0x2ce6ae(0x302)][_0x2ce6ae(0x220)][0x0][_0x2ce6ae(0x1c3)], _0x1d9670[_0x2ce6ae(0x357)][_0x2ce6ae(0x371)], _0x2ce6ae(0x29c), _0x2bf4f8, _0x543c32, _0x5368a4);
                        }
                    }
                }
                _0x4a85bf(![]);
            } else
                var _0x3f5154 = setInterval(() => {
                    const _0x3effbb = _0x2ce6ae;
                    _0x50a49c(_0x3effbb(0x32a))[_0x3effbb(0x269)] > 0x0 && (clearInterval(_0x3f5154), _0x43d8a3[_0x3effbb(0x217)] && (_0x50a49c('#scrollWrapper')[_0x3effbb(0x372)](), _0x50a49c(_0x3effbb(0x23b))[_0x3effbb(0x2d9)](_0x3effbb(0x24b)), _0x50a49c(_0x3effbb(0x285))[_0x3effbb(0x2d9)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x50a49c(_0x3effbb(0x285))[_0x3effbb(0x2d9)]('<div\x20class=\x22button-down\x22><div></div></div>'), _0x50a49c(_0x3effbb(0x341))['on'](_0x3effbb(0x38f), function () {
                        const _0x3f6fd9 = _0x3effbb;
                        _0x50a49c(_0x3f6fd9(0x1d7))[0x0][_0x3f6fd9(0x224)]({
                            'top': -0x1e,
                            'behavior': _0x3f6fd9(0x3f1)
                        });
                    }), _0x50a49c(_0x3effbb(0x17f))['on'](_0x3effbb(0x38f), function () {
                        const _0x5ce0a3 = _0x3effbb;
                        _0x50a49c(_0x5ce0a3(0x1d7))[0x0][_0x5ce0a3(0x224)]({
                            'top': 0x1e,
                            'behavior': 'smooth'
                        });
                    })), _0x50a49c(_0x3effbb(0x394))[_0x3effbb(0x3e0)](_0x3effbb(0x1ed))[_0x3effbb(0x2d5)](function () {
                        const _0x392c35 = _0x3effbb;
                        if (_0x50a49c(this)[_0x392c35(0x3e0)]()[_0x392c35(0x269)] > 0x0) {
                            if (!_0x50a49c(this)[_0x392c35(0x3e0)]()[_0x392c35(0x38c)]('.IG_REELS')['length']) {
                                var _0x81c36c = _0x50a49c(this);
                                _0x50a49c(this)[_0x392c35(0x3e0)]()[_0x392c35(0x39a)]('position', _0x392c35(0x36c)), _0x50a49c(this)['children']()[_0x392c35(0x2d9)](_0x392c35(0x283) + _0x1a37dd('DW') + _0x392c35(0x3a0) + _0x1c1587[_0x392c35(0x1c1)] + _0x392c35(0x348)), _0x50a49c(this)[_0x392c35(0x3e0)]()['append'](_0x392c35(0x3d3) + _0x1a37dd(_0x392c35(0x3bf)) + _0x392c35(0x27b) + _0x1c1587[_0x392c35(0x3bf)] + _0x392c35(0x348)), _0x50a49c(this)[_0x392c35(0x3e0)]()[_0x392c35(0x2d9)](_0x392c35(0x382) + _0x1a37dd(_0x392c35(0x241)) + _0x392c35(0x268) + _0x1c1587[_0x392c35(0x262)] + _0x392c35(0x348));
                                _0x43d8a3[_0x392c35(0x2cc)] && _0x50a49c(this)[_0x392c35(0x38c)](_0x392c35(0x2a8))[_0x392c35(0x2d5)](function () {
                                    const _0x52b43d = _0x392c35;
                                    _0x50a49c(this)['on'](_0x52b43d(0x3ac), function () {
                                        const _0x350712 = _0x52b43d;
                                        if (!_0x50a49c(this)[_0x350712(0x3c2)]('loop')) {
                                            let _0x47e99a = _0x50a49c(this)['next']()[_0x350712(0x38c)](_0x350712(0x272))[_0x350712(0x2dc)](_0x350712(0x320));
                                            _0x47e99a['length'] > 0x0 ? (_0x50a49c(this)[_0x350712(0x362)]('data-loop', !![]), _0x47e99a[_0x350712(0x3ce)](_0x350712(0x38f)), _0x4e6c29(_0x350712(0x35d))) : (_0x50a49c(this)[_0x350712(0x362)](_0x350712(0x1ff), !![]), _0x50a49c(this)['parent']()[_0x350712(0x38c)](_0x350712(0x2b3))['removeAttr'](_0x350712(0x21e)), this[_0x350712(0x2e0)](), _0x4e6c29(_0x350712(0x36d)));
                                        }
                                    });
                                });
                                _0x43d8a3['HTML5_VIDEO_CONTROL'] && _0x50a49c(this)[_0x392c35(0x38c)](_0x392c35(0x2a8))[_0x392c35(0x2d5)](function () {
                                    const _0x184206 = _0x392c35;
                                    if (!_0x50a49c(this)['data']('controls')) {
                                        let _0x1874e6 = _0x50a49c(this);
                                        _0x4e6c29(_0x184206(0x1df)), _0x43d8a3[_0x184206(0x201)] && (this[_0x184206(0x187)] = _0x1e78f9[_0x184206(0x1c7)], _0x50a49c(this)['on']('loadstart', function () {
                                            const _0x2de952 = _0x184206;
                                            this[_0x2de952(0x187)] = _0x1e78f9[_0x2de952(0x1c7)];
                                        })), _0x50a49c(this)['on'](_0x184206(0x179), function (_0x30f909) {
                                            const _0x4a2372 = _0x184206;
                                            _0x30f909['preventDefault'](), _0x1874e6[_0x4a2372(0x39a)](_0x4a2372(0x2a2), '-1'), _0x1874e6['removeAttr'](_0x4a2372(0x383));
                                        }), _0x50a49c(this)[_0x184206(0x19d)]()[_0x184206(0x38c)](_0x184206(0x2ef))[_0x184206(0x2c6)](function () {
                                            const _0x38ac36 = _0x184206;
                                            return _0x50a49c(this)[_0x38ac36(0x19d)](_0x38ac36(0x36a))[_0x38ac36(0x269)] > 0x0 && _0x50a49c(this)[_0x38ac36(0x39a)]('cursor') === 'pointer' && _0x50a49c(this)[_0x38ac36(0x362)]('style') != null;
                                        })[_0x184206(0x28b)]()['on']('contextmenu', function (_0x23a053) {
                                            const _0x26a555 = _0x184206;
                                            _0x23a053[_0x26a555(0x2ab)](), _0x1874e6[_0x26a555(0x39a)](_0x26a555(0x2a2), '2'), _0x1874e6[_0x26a555(0x362)](_0x26a555(0x383), !![]);
                                        }), _0x50a49c(this)['on'](_0x184206(0x19f), function () {
                                            const _0x312c4e = _0x184206;
                                            let _0x3f7d2c = _0x50a49c(this)[_0x312c4e(0x19d)]()[_0x312c4e(0x38c)]('video\x20+\x20div\x20>\x20div')[_0x312c4e(0x38c)](_0x312c4e(0x1d3))[_0x312c4e(0x2c6)](function (_0x47a7ed) {
                                                const _0x296df2 = _0x312c4e;
                                                return _0x50a49c(this)[_0x296df2(0x1f1)]() <= 0x40 && _0x50a49c(this)[_0x296df2(0x185)]() <= 0x40 && _0x50a49c(this)[_0x296df2(0x38c)](_0x296df2(0x1cb))[_0x296df2(0x269)] > 0x0;
                                            });
                                            var _0x49005c = _0x3f7d2c[_0x312c4e(0x38c)](_0x312c4e(0x291))[_0x312c4e(0x269)] === 0x0;
                                            this['muted'] != _0x49005c && (this['volume'] = _0x1e78f9[_0x312c4e(0x1c7)], _0x3f7d2c?.['trigger'](_0x312c4e(0x38f))), _0x50a49c(this)[_0x312c4e(0x362)](_0x312c4e(0x244)) && (_0x1e78f9[_0x312c4e(0x1c7)] = this[_0x312c4e(0x187)], GM_setValue('G_VIDEO_VOLUME', this[_0x312c4e(0x187)])), this[_0x312c4e(0x187)] == _0x1e78f9[_0x312c4e(0x1c7)] && _0x50a49c(this)[_0x312c4e(0x362)]('data-completed', !![]);
                                        }), _0x50a49c(this)[_0x184206(0x39a)]('position', _0x184206(0x36f)), _0x50a49c(this)['css']('z-index', '2'), _0x50a49c(this)[_0x184206(0x362)](_0x184206(0x270), !![]), _0x50a49c(this)[_0x184206(0x362)]('controls', !![]);
                                    }
                                });
                                var _0x120e78 = _0x81c36c[_0x392c35(0x38c)](_0x392c35(0x2a8)), _0x1d1d04 = _0x50a49c(this)['find'](_0x392c35(0x3a5))[_0x392c35(0x28b)]();
                                _0x12f4f7(_0x120e78, _0x1d1d04, _0x392c35(0x19e));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0xfffd3e() {
            const _0x26e6c0 = _0x24ad6a;
            _0x4a85bf(!![]);
            let _0x24200f = new Date()[_0x26e6c0(0x3b5)](), _0x398198 = Math['floor'](_0x24200f / 0x3e8), _0x30a1bb = _0x50a49c(_0x26e6c0(0x323))[_0x26e6c0(0x28b)]()[_0x26e6c0(0x207)]() || location[_0x26e6c0(0x298)]['split']('/')['filter'](_0x138923 => _0x138923['length'] > 0x0)['at'](0x1), _0xbe651d = await _0x5ed0b4(_0x30a1bb), _0x4a52c4 = _0xbe651d[_0x26e6c0(0x2b9)]['pk'], _0x292830 = await _0x10f7fc(_0x4a52c4), _0x45dc61 = 0x0;
            _0x37934c(_0x45dc61, _0x292830[_0x26e6c0(0x3c2)][_0x26e6c0(0x3cb)][0x0][_0x26e6c0(0x273)][_0x26e6c0(0x269)]), _0x292830[_0x26e6c0(0x3c2)]['reels_media'][0x0][_0x26e6c0(0x273)][_0x26e6c0(0x311)]((_0x3cdc71, _0x59e1a6) => {
                setTimeout(() => {
                    const _0x5102ac = a0_0xd21c;
                    _0x43d8a3['RENAME_PUBLISH_DATE'] && (_0x398198 = _0x3cdc71['taken_at_timestamp']), _0x3cdc71[_0x5102ac(0x37b)][_0x5102ac(0x1ad)](function (_0x4bd754, _0x5269ba) {
                        const _0x5403cc = _0x5102ac;
                        if (_0x4bd754[_0x5403cc(0x3a4)] < _0x5269ba[_0x5403cc(0x3a4)])
                            return 0x1;
                        if (_0x4bd754[_0x5403cc(0x3a4)] > _0x5269ba[_0x5403cc(0x3a4)])
                            return -0x1;
                        return 0x0;
                    }), _0x3cdc71[_0x5102ac(0x2e2)] ? _0x9382f4(_0x3cdc71[_0x5102ac(0x2de)][0x0]['src'], _0x30a1bb, 'stories', _0x398198, _0x5102ac(0x256), _0x3cdc71['id'])[_0x5102ac(0x254)](() => {
                        const _0xf8d27 = _0x5102ac;
                        _0x37934c(++_0x45dc61, _0x292830[_0xf8d27(0x3c2)][_0xf8d27(0x3cb)][0x0]['items'][_0xf8d27(0x269)]);
                    }) : _0x9382f4(_0x3cdc71[_0x5102ac(0x37b)][0x0][_0x5102ac(0x2c3)], _0x30a1bb, _0x5102ac(0x339), _0x398198, _0x5102ac(0x263), _0x3cdc71['id'])[_0x5102ac(0x254)](() => {
                        const _0x2be24b = _0x5102ac;
                        _0x37934c(++_0x45dc61, _0x292830[_0x2be24b(0x3c2)][_0x2be24b(0x3cb)][0x0][_0x2be24b(0x273)][_0x2be24b(0x269)]);
                    });
                }, 0x64 * _0x59e1a6);
            });
        }
        async function _0x28c6f9(_0x4b2cec, _0x4636ba, _0x436a53) {
            const _0x2a57e2 = _0x24ad6a;
            var _0x3763d1 = _0x50a49c(_0x2a57e2(0x323))[_0x2a57e2(0x28b)]()[_0x2a57e2(0x207)]() || location[_0x2a57e2(0x298)][_0x2a57e2(0x3ae)]('/')[_0x2a57e2(0x2c6)](_0x3ab49d => _0x3ab49d[_0x2a57e2(0x269)] > 0x0)['at'](0x1);
            if (_0x4b2cec) {
                let _0xe3b19b = new Date()['getTime'](), _0x154974 = Math[_0x2a57e2(0x1b3)](_0xe3b19b / 0x3e8);
                _0x4a85bf(!![]);
                if (_0x43d8a3[_0x2a57e2(0x2ea)] && !_0x1e78f9[_0x2a57e2(0x32c)]) {
                    let _0x372d5f = null, _0x466266 = await _0x5ed0b4(_0x3763d1), _0x569808 = _0x466266[_0x2a57e2(0x2b9)]['pk'], _0x51f044 = await _0x10f7fc(_0x569808), _0x1f8e3b = location[_0x2a57e2(0x298)][_0x2a57e2(0x3ae)]('/')[_0x2a57e2(0x2c6)](_0x3f1af1 => _0x3f1af1['length'] > 0x0 && _0x3f1af1[_0x2a57e2(0x1a0)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x51f044[_0x2a57e2(0x3c2)][_0x2a57e2(0x3cb)][0x0][_0x2a57e2(0x273)]['forEach'](_0x14c4de => {
                        _0x14c4de['id'] == _0x1f8e3b && (_0x372d5f = _0x14c4de['id']);
                    });
                    if (_0x372d5f == null) {
                        let _0x1d37a5 = _0x414a33(_0x3763d1);
                        _0x1d37a5['each'](function (_0x364de2) {
                            const _0x4c8421 = _0x2a57e2;
                            _0x50a49c(this)[_0x4c8421(0x3e0)]()[_0x4c8421(0x269)] > 0x0 && (_0x372d5f = _0x51f044['data'][_0x4c8421(0x3cb)][0x0]['items'][_0x364de2]['id']);
                        });
                    }
                    _0x372d5f == null && (_0x50a49c(_0x2a57e2(0x236))[_0x2a57e2(0x2d5)](function (_0x4f310a) {
                        const _0x230f33 = _0x2a57e2;
                        _0x50a49c(this)[_0x230f33(0x30f)](_0x230f33(0x34e)) && (_0x50a49c(this)[_0x230f33(0x3e0)]()[_0x230f33(0x269)] > 0x0 && (_0x372d5f = _0x51f044[_0x230f33(0x3c2)]['reels_media'][0x0][_0x230f33(0x273)][_0x4f310a]['id']));
                    }), _0x50a49c('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x2a57e2(0x2d5)](function (_0x2ba93) {
                        const _0x4eba24 = _0x2a57e2;
                        _0x50a49c(this)['children']()['hasClass']('_ac3q') && (_0x372d5f = _0x51f044[_0x4eba24(0x3c2)]['reels_media'][0x0]['items'][_0x2ba93]['id']);
                    }));
                    _0x372d5f == null && (_0x372d5f = location[_0x2a57e2(0x298)][_0x2a57e2(0x3ae)]('/')[_0x2a57e2(0x2c6)](_0x51efb9 => _0x51efb9[_0x2a57e2(0x269)] > 0x0 && _0x51efb9[_0x2a57e2(0x1a0)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x3b8b90 = await _0x3ac00a(_0x372d5f);
                    _0x43d8a3['RENAME_PUBLISH_DATE'] && (_0x154974 = _0x3b8b90[_0x2a57e2(0x273)][0x0]['taken_at']);
                    _0x3b8b90[_0x2a57e2(0x294)] === 'ok' ? _0x3b8b90['items'][0x0][_0x2a57e2(0x188)] ? _0x436a53 ? _0x17dfc0(_0x3b8b90[_0x2a57e2(0x273)][0x0]['video_versions'][0x0][_0x2a57e2(0x1c3)]) : _0x9382f4(_0x3b8b90[_0x2a57e2(0x273)][0x0]['video_versions'][0x0][_0x2a57e2(0x1c3)], _0x3763d1, _0x2a57e2(0x339), _0x154974, 'mp4', _0x372d5f) : _0x436a53 ? _0x17dfc0(_0x3b8b90[_0x2a57e2(0x273)][0x0][_0x2a57e2(0x302)]['candidates'][0x0][_0x2a57e2(0x1c3)]) : _0x9382f4(_0x3b8b90['items'][0x0][_0x2a57e2(0x302)]['candidates'][0x0][_0x2a57e2(0x1c3)], _0x3763d1, _0x2a57e2(0x339), _0x154974, _0x2a57e2(0x263), _0x372d5f) : (_0x43d8a3['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x1e78f9[_0x2a57e2(0x32c)] = !![], _0x28c6f9(_0x4b2cec, _0x4636ba, _0x436a53)) : alert(_0x2a57e2(0x2cd) + _0x3b8b90[_0x2a57e2(0x23e)]), _0x4e6c29(_0x3b8b90));
                    _0x4a85bf(![]);
                    return;
                }
                if (_0x50a49c(_0x2a57e2(0x22a))[_0x2a57e2(0x269)] > 0x0) {
                    let _0x309e62 = _0x2a57e2(0x256), _0x3f6915 = '', _0x25748a = location['pathname'][_0x2a57e2(0x3cc)](/\/$/ig, '')[_0x2a57e2(0x3ae)]('/')['at'](-0x1), _0x35204c = null;
                    if (_0x1e78f9[_0x2a57e2(0x1a6)]['stories'][_0x3763d1] && !_0x4636ba) {
                        _0x4e6c29(_0x2a57e2(0x38b), _0x3763d1), _0x1e78f9['GL_dataCache'][_0x2a57e2(0x339)][_0x3763d1][_0x2a57e2(0x3c2)][_0x2a57e2(0x3cb)][0x0][_0x2a57e2(0x273)][_0x2a57e2(0x311)](_0x11d10f => {
                            const _0x1a9698 = _0x2a57e2;
                            _0x11d10f['id'] == _0x25748a && (_0x3f6915 = _0x11d10f[_0x1a9698(0x2de)][0x0][_0x1a9698(0x2c3)], _0x43d8a3['RENAME_PUBLISH_DATE'] && (_0x154974 = _0x11d10f[_0x1a9698(0x367)], _0x35204c = _0x11d10f['id']));
                        });
                        if (_0x3f6915[_0x2a57e2(0x269)] == 0x0) {
                            _0x4e6c29('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x3763d1), _0x28c6f9(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x1ff6f5 = await _0x5ed0b4(_0x3763d1), _0x158f5c = _0x1ff6f5[_0x2a57e2(0x2b9)]['pk'], _0x2ca8d3 = await _0x10f7fc(_0x158f5c);
                        _0x2ca8d3[_0x2a57e2(0x3c2)][_0x2a57e2(0x3cb)][0x0][_0x2a57e2(0x273)][_0x2a57e2(0x311)](_0x388119 => {
                            const _0x331d3b = _0x2a57e2;
                            _0x388119['id'] == _0x25748a && (_0x3f6915 = _0x388119[_0x331d3b(0x2de)][0x0][_0x331d3b(0x2c3)], _0x43d8a3[_0x331d3b(0x240)] && (_0x154974 = _0x388119[_0x331d3b(0x367)], _0x35204c = _0x388119['id']));
                        });
                        if (_0x3f6915[_0x2a57e2(0x269)] == 0x0) {
                            let _0x9ac86b = _0x414a33(_0x3763d1);
                            _0x9ac86b[_0x2a57e2(0x2d5)](function (_0x34e1e6) {
                                const _0x5153c4 = _0x2a57e2;
                                _0x50a49c(this)[_0x5153c4(0x3e0)]()[_0x5153c4(0x269)] > 0x0 && (_0x3f6915 = _0x2ca8d3[_0x5153c4(0x3c2)][_0x5153c4(0x3cb)][0x0]['items'][_0x34e1e6][_0x5153c4(0x2de)][0x0][_0x5153c4(0x2c3)], _0x43d8a3[_0x5153c4(0x240)] && (_0x154974 = _0x2ca8d3['data'][_0x5153c4(0x3cb)][0x0]['items'][_0x34e1e6][_0x5153c4(0x367)], _0x35204c = _0x2ca8d3[_0x5153c4(0x3c2)][_0x5153c4(0x3cb)][0x0][_0x5153c4(0x273)][_0x34e1e6]['id']));
                            }), _0x3f6915[_0x2a57e2(0x269)] == 0x0 && (_0x50a49c('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x2a57e2(0x2d5)](function (_0x44814f) {
                                const _0x5602ce = _0x2a57e2;
                                _0x50a49c(this)['hasClass'](_0x5602ce(0x34e)) && (_0x50a49c(this)[_0x5602ce(0x3e0)]()['length'] > 0x0 && (_0x3f6915 = _0x2ca8d3[_0x5602ce(0x3c2)][_0x5602ce(0x3cb)][0x0][_0x5602ce(0x273)][_0x44814f][_0x5602ce(0x2de)][0x0][_0x5602ce(0x2c3)], _0x43d8a3['RENAME_PUBLISH_DATE'] && (_0x154974 = _0x2ca8d3[_0x5602ce(0x3c2)]['reels_media'][0x0][_0x5602ce(0x273)][_0x44814f]['taken_at_timestamp'], _0x35204c = _0x2ca8d3['data'][_0x5602ce(0x3cb)][0x0]['items'][_0x44814f]['id'])));
                            }), _0x50a49c(_0x2a57e2(0x2f3))['each'](function (_0x52e2c7) {
                                const _0x5e5f0a = _0x2a57e2;
                                _0x50a49c(this)[_0x5e5f0a(0x3e0)]()[_0x5e5f0a(0x30f)](_0x5e5f0a(0x356)) && (_0x3f6915 = _0x2ca8d3[_0x5e5f0a(0x3c2)][_0x5e5f0a(0x3cb)][0x0][_0x5e5f0a(0x273)][_0x52e2c7][_0x5e5f0a(0x2de)][0x0][_0x5e5f0a(0x2c3)], _0x43d8a3[_0x5e5f0a(0x240)] && (_0x154974 = _0x2ca8d3[_0x5e5f0a(0x3c2)][_0x5e5f0a(0x3cb)][0x0][_0x5e5f0a(0x273)][_0x52e2c7][_0x5e5f0a(0x367)], _0x35204c = _0x2ca8d3['data'][_0x5e5f0a(0x3cb)][0x0][_0x5e5f0a(0x273)][_0x52e2c7]['id']));
                            }));
                        }
                        _0x1e78f9['GL_dataCache']['stories'][_0x3763d1] = _0x2ca8d3;
                    }
                    _0x3f6915[_0x2a57e2(0x269)] == 0x0 ? alert(_0x1a37dd(_0x2a57e2(0x350))) : _0x436a53 ? _0x17dfc0(_0x3f6915) : _0x9382f4(_0x3f6915, _0x3763d1, _0x2a57e2(0x339), _0x154974, _0x309e62, _0x35204c);
                } else {
                    let _0x5918f3 = _0x50a49c(_0x2a57e2(0x297))[_0x2a57e2(0x362)](_0x2a57e2(0x2e7))?.[_0x2a57e2(0x3ae)](',')[0x0]?.['split']('\x20')[0x0], _0x1510e7 = _0x5918f3 ? _0x5918f3 : _0x50a49c('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0x2a57e2(0x2c6)](function () {
                            const _0x4e13a4 = _0x2a57e2;
                            return _0x50a49c(this)[_0x4e13a4(0x2dc)]('a')[_0x4e13a4(0x269)] === 0x0 && _0x50a49c(this)[_0x4e13a4(0x1f1)]() === _0x50a49c(this)['parent']()[_0x4e13a4(0x1f1)]();
                        })[_0x2a57e2(0x362)](_0x2a57e2(0x2c3));
                    if (!_0x1510e7) {
                        let _0x362f78 = _0x50a49c('body\x20>\x20div\x20section:visible\x20img._aa63');
                        _0x1510e7 = _0x362f78[_0x2a57e2(0x362)](_0x2a57e2(0x2e7)) ? _0x362f78['attr'](_0x2a57e2(0x2e7))?.[_0x2a57e2(0x3ae)](',')[0x0]?.[_0x2a57e2(0x3ae)]('\x20')[0x0] : _0x362f78[_0x2a57e2(0x362)]('src');
                    }
                    _0x43d8a3['RENAME_PUBLISH_DATE'] && (_0x154974 = new Date(_0x50a49c(_0x2a57e2(0x1c5))[_0x2a57e2(0x28b)]()['attr'](_0x2a57e2(0x24e)))[_0x2a57e2(0x3b5)]());
                    let _0x267b6d = _0x1510e7, _0x2448e0 = _0x2a57e2(0x263);
                    _0x436a53 ? _0x17dfc0(_0x267b6d) : _0x9382f4(_0x267b6d, _0x3763d1, _0x2a57e2(0x339), _0x154974, _0x2448e0, _0x4d239b(_0x267b6d) ?? '');
                }
                _0x1e78f9['tempFetchRateLimit'] = ![], _0x4a85bf(![]);
            } else {
                if (!_0x50a49c(_0x2a57e2(0x26e))[_0x2a57e2(0x269)]) {
                    _0x1e78f9[_0x2a57e2(0x1a6)][_0x2a57e2(0x339)] = {};
                    let _0x478b8a = null;
                    _0x50a49c(_0x2a57e2(0x18f))[_0x2a57e2(0x269)] > 0x0 ? _0x478b8a = _0x50a49c(_0x2a57e2(0x191)) : (_0x478b8a = _0x50a49c('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x478b8a[_0x2a57e2(0x39a)]('position', _0x2a57e2(0x36c)));
                    _0x478b8a[_0x2a57e2(0x269)] === 0x0 && (_0x478b8a = _0x50a49c(_0x2a57e2(0x1f3))['parent']()[_0x2a57e2(0x19d)]()['parent']()[_0x2a57e2(0x38c)](_0x2a57e2(0x203)), _0x478b8a[_0x2a57e2(0x39a)]('position', _0x2a57e2(0x36c)));
                    _0x478b8a['length'] === 0x0 && (_0x478b8a = _0x50a49c(_0x2a57e2(0x1f3))[_0x2a57e2(0x19d)]()['parent']()['parent']()[_0x2a57e2(0x38c)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x478b8a[_0x2a57e2(0x39a)](_0x2a57e2(0x2f4), _0x2a57e2(0x36c)));
                    if (_0x478b8a[_0x2a57e2(0x269)] === 0x0) {
                        let _0x439d5a = _0x50a49c(_0x2a57e2(0x19a)), _0x3b60fa = 0x0;
                        _0x439d5a[_0x2a57e2(0x2d5)](function () {
                            const _0x123e41 = _0x2a57e2;
                            _0x50a49c(this)[_0x123e41(0x1f1)]() > _0x3b60fa && (_0x3b60fa = _0x50a49c(this)[_0x123e41(0x1f1)](), _0x478b8a = _0x50a49c(this)[_0x123e41(0x3e0)](_0x123e41(0x1ed))[_0x123e41(0x28b)]());
                        });
                    }
                    if (_0x478b8a != null) {
                        _0x478b8a['first']()[_0x2a57e2(0x39a)](_0x2a57e2(0x2f4), _0x2a57e2(0x36c)), _0x478b8a[_0x2a57e2(0x28b)]()[_0x2a57e2(0x2d9)](_0x2a57e2(0x283) + _0x1a37dd('DW') + _0x2a57e2(0x219) + _0x1c1587[_0x2a57e2(0x1c1)] + _0x2a57e2(0x348)), _0x478b8a[_0x2a57e2(0x28b)]()[_0x2a57e2(0x2d9)](_0x2a57e2(0x3d3) + _0x1a37dd(_0x2a57e2(0x3bf)) + _0x2a57e2(0x26c) + _0x1c1587[_0x2a57e2(0x3bf)] + _0x2a57e2(0x348));
                        let _0x41ae36 = _0x414a33(_0x3763d1);
                        _0x41ae36[_0x2a57e2(0x269)] > 0x1 && _0x478b8a['first']()['append']('<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x1a37dd(_0x2a57e2(0x28e)) + '\x22\x20class=\x22IG_DWSTORY_ALL\x22>' + _0x1c1587[_0x2a57e2(0x3b3)] + _0x2a57e2(0x348)), _0x478b8a[_0x2a57e2(0x38c)](_0x2a57e2(0x3e8))['each'](function () {
                            const _0x775772 = _0x2a57e2;
                            _0x50a49c(this)['on'](_0x775772(0x23d), function () {
                                const _0x2524ec = _0x775772;
                                !_0x50a49c(this)['data'](_0x2524ec(0x393)) && (_0x478b8a[_0x2524ec(0x38c)](_0x2524ec(0x340))['length'] === 0x0 ? (_0x50a49c(this)[_0x2524ec(0x362)](_0x2524ec(0x3dc), !![]), _0x50a49c(_0x2524ec(0x340))[_0x2524ec(0x372)](), _0x4e6c29(_0x2524ec(0x2cb))) : (_0x50a49c(this)['attr'](_0x2524ec(0x3dc), !![]), _0x4e6c29(_0x2524ec(0x2e3))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x47dbdf(_0x34d5a6, _0x10d931) {
            const _0x3d24ea = _0x24ad6a;
            if (_0x34d5a6) {
                let _0x5f3abd = new Date()[_0x3d24ea(0x3b5)](), _0x1a39fc = Math['floor'](_0x5f3abd / 0x3e8), _0x3d966f = _0x3d24ea(0x263), _0x540d25 = _0x50a49c(_0x3d24ea(0x323))[_0x3d24ea(0x28b)]()['text']() || location[_0x3d24ea(0x298)][_0x3d24ea(0x3ae)]('/')['at'](0x2), _0x3dd992 = location[_0x3d24ea(0x298)][_0x3d24ea(0x3cc)](/\/$/ig, '')[_0x3d24ea(0x3ae)]('/')['at'](-0x1), _0x511e41 = '', _0x4c40f5 = null;
                _0x4a85bf(!![]);
                if (_0x43d8a3[_0x3d24ea(0x2ea)] && !_0x1e78f9[_0x3d24ea(0x32c)]) {
                    let _0x314409 = await _0x5ed0b4(_0x540d25), _0x51a99f = _0x314409[_0x3d24ea(0x2b9)]['pk'], _0x138bba = await _0x10f7fc(_0x51a99f), _0x211c48 = location['pathname'][_0x3d24ea(0x3ae)]('/')[_0x3d24ea(0x2c6)](_0x4a1626 => _0x4a1626[_0x3d24ea(0x269)] > 0x0 && _0x4a1626[_0x3d24ea(0x1a0)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x138bba[_0x3d24ea(0x3c2)]['reels_media'][0x0][_0x3d24ea(0x273)][_0x3d24ea(0x311)](_0x355871 => {
                        _0x355871['id'] == _0x211c48 && (_0x4c40f5 = _0x355871['id']);
                    });
                    if (_0x4c40f5 == null) {
                        let _0x1bac1c = _0x414a33(_0x540d25);
                        _0x1bac1c[_0x3d24ea(0x2d5)](function (_0x4de82a) {
                            const _0xb04989 = _0x3d24ea;
                            _0x50a49c(this)[_0xb04989(0x3e0)]()[_0xb04989(0x269)] > 0x0 && (_0x4c40f5 = _0x138bba[_0xb04989(0x3c2)][_0xb04989(0x3cb)][0x0][_0xb04989(0x273)][_0x4de82a]['id']);
                        });
                    }
                    _0x4c40f5 == null && (_0x50a49c(_0x3d24ea(0x236))[_0x3d24ea(0x2d5)](function (_0x47c619) {
                        const _0x1cee6c = _0x3d24ea;
                        _0x50a49c(this)[_0x1cee6c(0x30f)]('x1lix1fw') && (_0x50a49c(this)[_0x1cee6c(0x3e0)]()['length'] > 0x0 && (_0x4c40f5 = _0x138bba[_0x1cee6c(0x3c2)][_0x1cee6c(0x3cb)][0x0][_0x1cee6c(0x273)][_0x47c619]['id']));
                    }), _0x50a49c(_0x3d24ea(0x2f3))[_0x3d24ea(0x2d5)](function (_0x80e7be) {
                        const _0x114107 = _0x3d24ea;
                        _0x50a49c(this)[_0x114107(0x3e0)]()[_0x114107(0x30f)](_0x114107(0x356)) && (_0x4c40f5 = _0x138bba[_0x114107(0x3c2)][_0x114107(0x3cb)][0x0][_0x114107(0x273)][_0x80e7be]['id']);
                    }));
                    _0x4c40f5 == null && (_0x4c40f5 = location[_0x3d24ea(0x298)][_0x3d24ea(0x3ae)]('/')[_0x3d24ea(0x2c6)](_0x21d849 => _0x21d849['length'] > 0x0 && _0x21d849[_0x3d24ea(0x1a0)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x39a765 = await _0x3ac00a(_0x4c40f5);
                    _0x43d8a3[_0x3d24ea(0x240)] && (_0x1a39fc = _0x39a765['items'][0x0][_0x3d24ea(0x3e9)]);
                    _0x39a765[_0x3d24ea(0x294)] === 'ok' ? _0x9382f4(_0x39a765['items'][0x0][_0x3d24ea(0x302)][_0x3d24ea(0x220)][0x0][_0x3d24ea(0x1c3)], _0x540d25, _0x3d24ea(0x339), _0x1a39fc, _0x3d24ea(0x263), _0x4c40f5) : (_0x43d8a3[_0x3d24ea(0x24f)] ? (_0x1e78f9[_0x3d24ea(0x32c)] = !![], _0x47dbdf(!![], _0x10d931)) : alert(_0x3d24ea(0x2cd) + _0x39a765[_0x3d24ea(0x23e)]), _0x4e6c29(_0x39a765));
                    _0x4a85bf(![]);
                    return;
                }
                if (_0x1e78f9['GL_dataCache'][_0x3d24ea(0x339)][_0x540d25] && !_0x10d931) {
                    _0x4e6c29('Fetch\x20from\x20memory\x20cache:', _0x540d25), _0x1e78f9[_0x3d24ea(0x1a6)]['stories'][_0x540d25][_0x3d24ea(0x3c2)][_0x3d24ea(0x3cb)][0x0][_0x3d24ea(0x273)][_0x3d24ea(0x311)](_0x1beb6c => {
                        const _0x351a93 = _0x3d24ea;
                        _0x1beb6c['id'] == _0x3dd992 && (_0x511e41 = _0x1beb6c[_0x351a93(0x287)], _0x43d8a3['RENAME_PUBLISH_DATE'] && (_0x1a39fc = _0x1beb6c[_0x351a93(0x367)], _0x4c40f5 = _0x1beb6c['id']));
                    });
                    if (_0x511e41[_0x3d24ea(0x269)] == 0x0) {
                        _0x4e6c29(_0x3d24ea(0x2c4), _0x540d25), _0x47dbdf(!![], !![]);
                        return;
                    }
                } else {
                    let _0x5331f1 = await _0x5ed0b4(_0x540d25), _0x4db50a = _0x5331f1['user']['pk'], _0x14279c = await _0x10f7fc(_0x4db50a);
                    _0x14279c[_0x3d24ea(0x3c2)][_0x3d24ea(0x3cb)][0x0][_0x3d24ea(0x273)][_0x3d24ea(0x311)](_0x3a82bc => {
                        const _0x464e36 = _0x3d24ea;
                        _0x3a82bc['id'] == _0x3dd992 && (_0x511e41 = _0x3a82bc['display_url'], _0x43d8a3['RENAME_PUBLISH_DATE'] && (_0x1a39fc = _0x3a82bc[_0x464e36(0x367)], _0x4c40f5 = _0x3a82bc['id']));
                    });
                    if (_0x511e41[_0x3d24ea(0x269)] == 0x0) {
                        let _0x582a82 = _0x414a33(_0x540d25);
                        _0x582a82[_0x3d24ea(0x2d5)](function (_0x31e84b) {
                            const _0x3fd9f2 = _0x3d24ea;
                            _0x50a49c(this)[_0x3fd9f2(0x3e0)]()[_0x3fd9f2(0x269)] > 0x0 && (_0x511e41 = _0x14279c[_0x3fd9f2(0x3c2)][_0x3fd9f2(0x3cb)][0x0][_0x3fd9f2(0x273)][_0x31e84b][_0x3fd9f2(0x287)], _0x43d8a3[_0x3fd9f2(0x240)] && (_0x1a39fc = _0x14279c['data'][_0x3fd9f2(0x3cb)][0x0][_0x3fd9f2(0x273)][_0x31e84b][_0x3fd9f2(0x367)], _0x4c40f5 = _0x14279c[_0x3fd9f2(0x3c2)][_0x3fd9f2(0x3cb)][0x0][_0x3fd9f2(0x273)][_0x31e84b]['id']));
                        }), _0x511e41[_0x3d24ea(0x269)] == 0x0 && (_0x50a49c(_0x3d24ea(0x236))['each'](function (_0x5edee8) {
                            const _0x21cec1 = _0x3d24ea;
                            _0x50a49c(this)[_0x21cec1(0x30f)](_0x21cec1(0x34e)) && (_0x50a49c(this)[_0x21cec1(0x3e0)]()[_0x21cec1(0x269)] > 0x0 && (_0x511e41 = _0x14279c[_0x21cec1(0x3c2)][_0x21cec1(0x3cb)][0x0]['items'][_0x5edee8][_0x21cec1(0x287)], _0x43d8a3[_0x21cec1(0x240)] && (_0x1a39fc = _0x14279c[_0x21cec1(0x3c2)][_0x21cec1(0x3cb)][0x0][_0x21cec1(0x273)][_0x5edee8][_0x21cec1(0x367)], _0x4c40f5 = _0x14279c[_0x21cec1(0x3c2)][_0x21cec1(0x3cb)][0x0][_0x21cec1(0x273)][_0x5edee8]['id'])));
                        }), _0x50a49c(_0x3d24ea(0x2f3))[_0x3d24ea(0x2d5)](function (_0x412f39) {
                            const _0x4b132d = _0x3d24ea;
                            _0x50a49c(this)[_0x4b132d(0x3e0)]()[_0x4b132d(0x30f)]('_ac3q') && (_0x511e41 = _0x14279c[_0x4b132d(0x3c2)][_0x4b132d(0x3cb)][0x0][_0x4b132d(0x273)][_0x412f39][_0x4b132d(0x287)], _0x43d8a3[_0x4b132d(0x240)] && (_0x1a39fc = _0x14279c[_0x4b132d(0x3c2)]['reels_media'][0x0][_0x4b132d(0x273)][_0x412f39]['taken_at_timestamp'], _0x4c40f5 = _0x14279c[_0x4b132d(0x3c2)][_0x4b132d(0x3cb)][0x0]['items'][_0x412f39]['id']));
                        }));
                    }
                }
                _0x9382f4(_0x511e41, _0x540d25, 'thumbnail', _0x1a39fc, _0x3d966f, _0x4c40f5), _0x1e78f9[_0x3d24ea(0x32c)] = ![], _0x4a85bf(![]);
            } else {
                if (_0x50a49c(_0x3d24ea(0x25e))[_0x3d24ea(0x19d)]()['find'](_0x3d24ea(0x1aa))[_0x3d24ea(0x269)]) {
                    let _0x2f056d = null;
                    _0x50a49c('body\x20>\x20div\x20section._ac0a')[_0x3d24ea(0x269)] > 0x0 ? _0x2f056d = _0x50a49c('body\x20>\x20div\x20section:visible._ac0a') : (_0x2f056d = _0x50a49c('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x2f056d[_0x3d24ea(0x39a)]('position', _0x3d24ea(0x36c)));
                    _0x2f056d[_0x3d24ea(0x269)] === 0x0 && (_0x2f056d = _0x50a49c(_0x3d24ea(0x1f3))['parent']()[_0x3d24ea(0x19d)]()[_0x3d24ea(0x19d)]()[_0x3d24ea(0x38c)](_0x3d24ea(0x203)), _0x2f056d['css'](_0x3d24ea(0x2f4), _0x3d24ea(0x36c)));
                    _0x2f056d[_0x3d24ea(0x269)] === 0x0 && (_0x2f056d = _0x50a49c(_0x3d24ea(0x1f3))[_0x3d24ea(0x19d)]()['parent']()[_0x3d24ea(0x19d)]()[_0x3d24ea(0x38c)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x2f056d[_0x3d24ea(0x39a)]('position', _0x3d24ea(0x36c)));
                    if (_0x2f056d['length'] === 0x0) {
                        let _0x476085 = _0x50a49c(_0x3d24ea(0x19a)), _0x372982 = 0x0;
                        _0x476085[_0x3d24ea(0x2d5)](function () {
                            const _0x1b997f = _0x3d24ea;
                            _0x50a49c(this)[_0x1b997f(0x1f1)]() > _0x372982 && (_0x372982 = _0x50a49c(this)['width'](), _0x2f056d = _0x50a49c(this)[_0x1b997f(0x3e0)](_0x1b997f(0x1ed))[_0x1b997f(0x28b)]());
                        });
                    }
                    _0x2f056d != null && (_0x2f056d[_0x3d24ea(0x28b)]()[_0x3d24ea(0x39a)](_0x3d24ea(0x2f4), _0x3d24ea(0x36c)), _0x2f056d['first']()['append'](_0x3d24ea(0x382) + _0x1a37dd(_0x3d24ea(0x241)) + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x1c1587[_0x3d24ea(0x262)] + _0x3d24ea(0x348)));
                }
            }
        }
        function _0x1ee1c1(_0x11ec79) {
            return new Promise((_0x45bdbc, _0x1eff05) => {
                const _0x1de45a = a0_0xd21c;
                let _0x1eb1c0 = _0x1de45a(0x1f5) + _0x11ec79 + _0x1de45a(0x1d5);
                GM_xmlhttpRequest({
                    'method': _0x1de45a(0x21b),
                    'url': _0x1eb1c0,
                    'onload': function (_0x3c0613) {
                        const _0x6ff289 = _0x1de45a;
                        try {
                            let _0xd902ec = JSON[_0x6ff289(0x26f)](_0x3c0613[_0x6ff289(0x1c2)]);
                            _0x45bdbc(_0xd902ec);
                        } catch (_0xfe7c9d) {
                            _0x4e6c29(_0x6ff289(0x1d9), _0x6ff289(0x24a), _0xfe7c9d['message']), _0x1eff05(_0xfe7c9d);
                        }
                    },
                    'onerror': function (_0x384df0) {
                        const _0x19f4dd = _0x1de45a;
                        _0x4e6c29(_0x19f4dd(0x1d9), _0x19f4dd(0x24a), _0x384df0), _0x1eff05(_0x384df0);
                    }
                });
            });
        }
        function _0x10f7fc(_0x363bd6) {
            return new Promise((_0x44f90c, _0x19adf8) => {
                const _0x36c308 = a0_0xd21c;
                let _0xedfc3b = _0x36c308(0x213) + _0x363bd6 + _0x36c308(0x1d5);
                GM_xmlhttpRequest({
                    'method': _0x36c308(0x21b),
                    'url': _0xedfc3b,
                    'onload': function (_0x1d7846) {
                        const _0x477442 = _0x36c308;
                        try {
                            let _0x5c859d = JSON[_0x477442(0x26f)](_0x1d7846[_0x477442(0x1c2)]);
                            _0x4e6c29(_0x477442(0x182), _0x5c859d), _0x44f90c(_0x5c859d);
                        } catch (_0x2e3aa2) {
                            _0x4e6c29(_0x477442(0x182), 'reject', _0x2e3aa2[_0x477442(0x23e)]), _0x19adf8(_0x2e3aa2);
                        }
                    },
                    'onerror': function (_0x198b03) {
                        _0x4e6c29('getStories()', 'reject', _0x198b03), _0x19adf8(_0x198b03);
                    }
                });
            });
        }
        function _0x5ed0b4(_0x3c1600) {
            return new Promise((_0x4a27df, _0x21d449) => {
                const _0xe79c62 = a0_0xd21c;
                let _0x1b12b6 = _0xe79c62(0x210) + _0x3c1600;
                GM_xmlhttpRequest({
                    'method': _0xe79c62(0x21b),
                    'url': _0x1b12b6,
                    'onload': function (_0x591681) {
                        const _0x5db440 = _0xe79c62;
                        let _0x1499c2 = JSON[_0x5db440(0x26f)](_0x591681[_0x5db440(0x1c2)]), _0x40c8ae = null;
                        _0x1499c2[_0x5db440(0x388)][_0x5db440(0x311)](_0x33b433 => {
                            const _0x346de6 = _0x5db440;
                            _0x33b433[_0x346de6(0x2b9)]['username']?.[_0x346de6(0x212)]() === _0x3c1600?.[_0x346de6(0x212)]() && (_0x40c8ae = _0x33b433);
                        }), _0x40c8ae != null ? (_0x4e6c29('getUserId()', _0x40c8ae), _0x4a27df(_0x40c8ae)) : _0xc3871b(_0x3c1600)['then'](_0x575241 => {
                            _0x4a27df(_0x575241);
                        })[_0x5db440(0x1ab)](_0x588aa4 => {
                            alert('Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()');
                        });
                    },
                    'onerror': function (_0x2d6278) {
                        const _0x4a3d0e = _0xe79c62;
                        _0x4e6c29('getUserId()', _0x4a3d0e(0x24a), _0x2d6278), _0x21d449(_0x2d6278);
                    }
                });
            });
        }
        function _0xc3871b(_0x442252) {
            return new Promise((_0x56bf22, _0x150562) => {
                const _0x3e0027 = a0_0xd21c;
                let _0x528427 = _0x3e0027(0x251) + _0x442252;
                GM_xmlhttpRequest({
                    'method': _0x3e0027(0x21b),
                    'url': _0x528427,
                    'headers': { 'X-IG-App-ID': _0xe47368() },
                    'onload': function (_0xc7c3af) {
                        const _0x8528fa = _0x3e0027;
                        try {
                            let _0x16acde = JSON[_0x8528fa(0x26f)](_0xc7c3af['response']), _0x22dc79 = _0x16acde?.['data']?.['user'];
                            if (_0x22dc79 != null) {
                                let _0x2961da = _0x16acde?.[_0x8528fa(0x3c2)];
                                _0x2961da[_0x8528fa(0x2b9)]['pk'] = _0x2961da[_0x8528fa(0x2b9)]['id'], _0x4e6c29(_0x8528fa(0x209), _0x16acde), _0x56bf22(_0x2961da);
                            } else
                                _0x4e6c29(_0x8528fa(0x209), _0x8528fa(0x24a), _0x8528fa(0x290)), _0x150562(_0x8528fa(0x290));
                        } catch (_0x8e3790) {
                            _0x4e6c29(_0x8528fa(0x209), _0x8528fa(0x24a), _0x8e3790[_0x8528fa(0x23e)]), _0x150562(_0x8e3790);
                        }
                    },
                    'onerror': function (_0x29334d) {
                        const _0x401ebd = _0x3e0027;
                        _0x4e6c29('getUserIdWithAgent()', _0x401ebd(0x24a), _0x29334d), _0x150562(_0x29334d);
                    }
                });
            });
        }
        function _0x1b7519(_0x1949ea) {
            return new Promise((_0x23b95e, _0x448f0e) => {
                const _0x52e3f5 = a0_0xd21c;
                let _0x3bf062 = _0x52e3f5(0x190) + _0x1949ea + _0x52e3f5(0x180);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3bf062,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x496d47) {
                        const _0x101fe1 = _0x52e3f5;
                        try {
                            let _0x17d3bb = JSON[_0x101fe1(0x26f)](_0x496d47['response']);
                            _0x17d3bb[_0x101fe1(0x294)] !== 'ok' ? (_0x4e6c29(_0x101fe1(0x370), _0x101fe1(0x24a), _0x17d3bb), _0x448f0e(_0x101fe1(0x1c9))) : (_0x4e6c29(_0x101fe1(0x370), _0x17d3bb), _0x23b95e(_0x17d3bb['user']['hd_profile_pic_url_info']?.['url']));
                        } catch (_0x262611) {
                            _0x4e6c29('getUserHighSizeProfile()', _0x101fe1(0x24a), _0x262611), _0x448f0e(_0x262611);
                        }
                    },
                    'onerror': function (_0x3c496c) {
                        const _0x2ed867 = _0x52e3f5;
                        _0x4e6c29('getUserHighSizeProfile()', _0x2ed867(0x24a), _0x3c496c), _0x448f0e(_0x3c496c);
                    }
                });
            });
        }
        function _0x29c256(_0x337090) {
            return new Promise((_0xea1f45, _0x5ec58e) => {
                const _0xb0b363 = a0_0xd21c;
                if (!_0x337090)
                    _0x5ec58e(_0xb0b363(0x353));
                let _0x353926 = _0x337090, _0x242ae0 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x353926 + _0xb0b363(0x19b);
                GM_xmlhttpRequest({
                    'method': _0xb0b363(0x21b),
                    'url': _0x242ae0,
                    'onload': function (_0x19c1e1) {
                        const _0x4aaa54 = _0xb0b363;
                        try {
                            let _0x1c55bf = JSON[_0x4aaa54(0x26f)](_0x19c1e1['response']);
                            _0x4e6c29('getPostOwner()', _0x1c55bf), _0xea1f45(_0x1c55bf[_0x4aaa54(0x3c2)][_0x4aaa54(0x3c6)]['owner']['username']);
                        } catch (_0x77dbd8) {
                            _0x4e6c29(_0x4aaa54(0x1e3), _0x4aaa54(0x24a), _0x77dbd8[_0x4aaa54(0x23e)]), _0x5ec58e(_0x77dbd8);
                        }
                    },
                    'onerror': function (_0x3889c9) {
                        const _0x362765 = _0xb0b363;
                        _0x4e6c29(_0x362765(0x1e3), _0x362765(0x24a), _0x3889c9), _0x5ec58e(_0x3889c9);
                    }
                });
            });
        }
        function _0x115603(_0x14acba) {
            return new Promise((_0xc180b1, _0x374c31) => {
                const _0x55d532 = a0_0xd21c;
                if (!_0x14acba)
                    _0x374c31(_0x55d532(0x353));
                let _0x28d511 = _0x14acba, _0x292cf5 = _0x55d532(0x352) + _0x28d511 + _0x55d532(0x19b);
                GM_xmlhttpRequest({
                    'method': _0x55d532(0x21b),
                    'url': _0x292cf5,
                    'headers': { 'User-Agent': _0x55d532(0x25a) },
                    'onload': function (_0x2e174d) {
                        const _0x1ec2c9 = _0x55d532;
                        try {
                            let _0x3df89c = JSON['parse'](_0x2e174d[_0x1ec2c9(0x1c2)]);
                            _0x4e6c29(_0x3df89c), _0x3df89c['status'] === 'fail' ? (_0x4e6c29(_0x1ec2c9(0x1d0), 'getBlobMediaWithQuery()', _0x28d511), _0x5b53ef(_0x28d511)['then'](_0x16be93 => {
                                const _0x593939 = _0x1ec2c9;
                                _0xc180b1({
                                    'type': _0x593939(0x293),
                                    'data': _0x16be93['xdt_api__v1__media__shortcode__web_info'][_0x593939(0x273)][0x0]
                                });
                            })[_0x1ec2c9(0x1ab)](_0x3fbbef => {
                                _0x374c31(_0x3fbbef);
                            })) : _0xc180b1({
                                'type': _0x1ec2c9(0x35f),
                                'data': _0x3df89c[_0x1ec2c9(0x3c2)]
                            });
                        } catch (_0x21035e) {
                            _0x4e6c29('getBlobMedia()', _0x1ec2c9(0x24a), _0x21035e[_0x1ec2c9(0x23e)]), _0x374c31(_0x21035e);
                        }
                    },
                    'onerror': function (_0x1ffe09) {
                        const _0x36647c = _0x55d532;
                        _0x4e6c29(_0x36647c(0x17a), _0x36647c(0x24a), _0x1ffe09), _0x374c31(_0x1ffe09);
                    }
                });
            });
        }
        function _0x5b53ef(_0x3440f2) {
            return new Promise((_0x507d69, _0xe78bb8) => {
                const _0x17160d = a0_0xd21c;
                if (!_0x3440f2)
                    _0xe78bb8(_0x17160d(0x353));
                let _0x1f8747 = _0x3440f2, _0x1c7e00 = _0x17160d(0x36e) + _0x1f8747 + _0x17160d(0x396);
                GM_xmlhttpRequest({
                    'method': _0x17160d(0x21b),
                    'url': _0x1c7e00,
                    'headers': {
                        'User-Agent': _0x17160d(0x25a),
                        'X-IG-App-ID': _0xe47368()
                    },
                    'onload': function (_0x5987cf) {
                        const _0x5e6145 = _0x17160d;
                        try {
                            let _0x59584b = JSON[_0x5e6145(0x26f)](_0x5987cf[_0x5e6145(0x1c2)]);
                            _0x4e6c29(_0x59584b), _0x59584b[_0x5e6145(0x294)] === _0x5e6145(0x2c8) ? (alert(_0x5e6145(0x1ef) + _0x59584b[_0x5e6145(0x23e)] + ':\x20' + _0x59584b[_0x5e6145(0x386)]), _0x4e6c29(_0x5e6145(0x2df) + _0x59584b[_0x5e6145(0x23e)] + ':\x20' + _0x59584b[_0x5e6145(0x386)]), _0xe78bb8(_0x5987cf)) : (_0x4e6c29(_0x5e6145(0x2d7), _0x59584b[_0x5e6145(0x3c2)]), _0x507d69(_0x59584b[_0x5e6145(0x3c2)]));
                        } catch (_0x3761fd) {
                            _0x4e6c29('getBlobMediaWithQueryID()', 'reject', _0x3761fd['message']), _0xe78bb8(_0x3761fd);
                        }
                    },
                    'onerror': function (_0x201807) {
                        const _0x38d8c5 = _0x17160d;
                        _0x4e6c29(_0x38d8c5(0x2d7), _0x38d8c5(0x24a), _0x201807), _0xe78bb8(_0x201807);
                    }
                });
            });
        }
        function _0x3ac00a(_0x3c24dd) {
            return new Promise((_0x338c4d, _0x5e68d2) => {
                const _0x1baec7 = a0_0xd21c;
                let _0x2d01e1 = 'https://i.instagram.com/api/v1/media/' + _0x3c24dd + _0x1baec7(0x180);
                if (_0x3c24dd == null) {
                    alert(_0x1baec7(0x22b)), _0x4e6c29(_0x1baec7(0x2ba), 'reject', 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.'), _0x4a85bf(![]), _0x5e68d2(-0x1);
                    return;
                }
                if (_0xe47368() == null) {
                    alert(_0x1baec7(0x3b6)), _0x4e6c29(_0x1baec7(0x2ba), _0x1baec7(0x24a), _0x1baec7(0x3b6)), _0x4a85bf(![]), _0x5e68d2(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x1baec7(0x21b),
                    'url': _0x2d01e1,
                    'headers': {
                        'User-Agent': window[_0x1baec7(0x258)]['userAgent'],
                        'Accept': _0x1baec7(0x321),
                        'X-IG-App-ID': _0xe47368()
                    },
                    'onload': function (_0x37362e) {
                        const _0x409a71 = _0x1baec7;
                        if (_0x37362e[_0x409a71(0x3d1)] == _0x2d01e1) {
                            let _0xa2ed98 = JSON[_0x409a71(0x26f)](_0x37362e[_0x409a71(0x1c2)]);
                            _0x4e6c29(_0x409a71(0x2ba), _0xa2ed98), _0x338c4d(_0xa2ed98);
                        } else {
                            let _0x3c29be = new URL(_0x37362e[_0x409a71(0x3d1)]);
                            _0x3c29be[_0x409a71(0x298)][_0x409a71(0x338)]('/accounts/login') ? (_0x4e6c29('getMediaInfo()', _0x409a71(0x24a), _0x409a71(0x1dd)), alert(_0x409a71(0x1dd))) : (_0x4e6c29('getMediaInfo()', _0x409a71(0x24a), 'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x37362e[_0x409a71(0x3d1)] + '\x22'), alert(_0x409a71(0x2c7) + _0x37362e['finalUrl'] + '\x22')), _0x4a85bf(![]), _0x5e68d2(-0x1);
                        }
                    },
                    'onerror': function (_0x473277) {
                        _0x4e6c29('getMediaInfo()', 'reject', _0x473277), _0x338c4d(_0x473277);
                    }
                });
            });
        }
        function _0x4d239b(_0x381bb0) {
            const _0x4bfdf0 = _0x24ad6a;
            let _0x54a9e5 = new URL(_0x381bb0), _0x558d09 = _0x54a9e5?.[_0x4bfdf0(0x335)]?.['get'](_0x4bfdf0(0x20c))?.[_0x4bfdf0(0x3ae)]('.')['at'](0x0);
            return _0x558d09 ? atob(_0x558d09) : null;
        }
        function _0xe47368() {
            const _0x2c62cd = _0x24ad6a;
            let _0x1eb2f7 = null;
            return _0x50a49c(_0x2c62cd(0x252))[_0x2c62cd(0x2d5)](function () {
                const _0x2d8753 = _0x2c62cd, _0x40dc0f = /"APP_ID":"([0-9]+)"/ig, _0x4e7a58 = _0x50a49c(this)['text']()[_0x2d8753(0x1a0)](_0x40dc0f);
                _0x4e7a58 != null && _0x1eb2f7 == null && (_0x1eb2f7 = [..._0x50a49c(this)[_0x2d8753(0x207)]()[_0x2d8753(0x284)](_0x40dc0f)]);
            }), _0x1eb2f7 ? _0x1eb2f7['at'](0x0)['at'](-0x1) : null;
        }
        function _0x4a85bf(_0x21d05f) {
            const _0x49005f = _0x24ad6a;
            _0x21d05f ? (_0x50a49c('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x49005f(0x277)](_0x49005f(0x2da)), _0x50a49c(_0x49005f(0x1da))[_0x49005f(0x39a)](_0x49005f(0x2a2), _0x49005f(0x2c5))) : (_0x50a49c(_0x49005f(0x1da))[_0x49005f(0x264)]('x1s85apg'), _0x50a49c(_0x49005f(0x1da))[_0x49005f(0x39a)](_0x49005f(0x2a2), ''));
        }
        function _0x414a33(_0x325313) {
            const _0xfb3d74 = _0x24ad6a;
            let _0x4376bc = _0x50a49c(_0xfb3d74(0x2b4) + _0x325313 + _0xfb3d74(0x1ae))[_0xfb3d74(0x2c6)](function () {
                const _0xdbc524 = _0xfb3d74;
                return _0x50a49c(this)[_0xdbc524(0x3e0)]()[_0xdbc524(0x269)] === 0x0 && _0x50a49c(this)[_0xdbc524(0x38c)](_0xdbc524(0x239))['length'] === 0x0 && _0x50a49c(this)['text']()?.[_0xdbc524(0x212)]() === _0x325313?.[_0xdbc524(0x212)]();
            })['parents'](_0xfb3d74(0x2ca))[_0xfb3d74(0x2c6)](function () {
                const _0x5d58b2 = _0xfb3d74;
                return _0x50a49c(this)[_0x5d58b2(0x207)]()?.['toLowerCase']() !== _0x325313?.[_0x5d58b2(0x212)]();
            })[_0xfb3d74(0x2c6)](function () {
                const _0x18b3fe = _0xfb3d74;
                return _0x50a49c(this)[_0x18b3fe(0x3e0)]()[_0x18b3fe(0x269)] > 0x1;
            })['first']();
            return _0x4376bc['length'] === 0x0 && (_0x4376bc = _0x50a49c(_0xfb3d74(0x2b4) + _0x325313 + '\x22]')[_0xfb3d74(0x2c6)](function () {
                const _0x1b1b63 = _0xfb3d74;
                return _0x50a49c(this)['find'](_0x1b1b63(0x299))['length'] > 0x0;
            })[_0xfb3d74(0x2dc)](_0xfb3d74(0x2ca))['filter'](function () {
                const _0x4be2e2 = _0xfb3d74;
                return _0x50a49c(this)[_0x4be2e2(0x207)]()?.[_0x4be2e2(0x212)]() !== _0x325313?.[_0x4be2e2(0x212)]();
            })[_0xfb3d74(0x2c6)](function () {
                const _0x183d90 = _0xfb3d74;
                return _0x50a49c(this)[_0x183d90(0x3e0)]()[_0x183d90(0x269)] > 0x1;
            })[_0xfb3d74(0x28b)]()), _0x4376bc[_0xfb3d74(0x3e0)]()['filter'](function () {
                const _0x8e553a = _0xfb3d74;
                return _0x50a49c(this)[_0x8e553a(0x185)]() < 0xa;
            })['first']()[_0xfb3d74(0x3e0)]();
        }
        function _0x37934c(_0x22f532, _0x15c6a6) {
            const _0x1cce40 = _0x24ad6a;
            _0x50a49c(_0x1cce40(0x1f8))['length'] ? (_0x50a49c(_0x1cce40(0x32d))[_0x1cce40(0x207)](_0x22f532 + '/' + _0x15c6a6), _0x22f532 >= _0x15c6a6 && _0x50a49c(_0x1cce40(0x1f8))[_0x1cce40(0x192)](0xfa, function () {
                const _0x97b16 = _0x1cce40;
                _0x50a49c(this)[_0x97b16(0x372)]();
            })) : _0x50a49c(_0x1cce40(0x3e2))['append']('<div\x20class=\x22circle_wrapper\x22><circle></circle><span>' + _0x22f532 + '/' + _0x15c6a6 + _0x1cce40(0x243));
        }
        function _0x5c0694(_0x406b1e, _0x50c4ab) {
            const _0x4225b7 = _0x24ad6a;
            let _0x3351f4 = _0x406b1e ? _0x4225b7(0x1fe) : '';
            _0x50a49c(_0x4225b7(0x3e2))[_0x4225b7(0x2d9)](_0x4225b7(0x2e5) + _0x3351f4 + _0x4225b7(0x3c4)), _0x50a49c(_0x4225b7(0x39f))[_0x4225b7(0x2d9)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x1a37dd(_0x4225b7(0x257)) + _0x4225b7(0x222) + GM_info[_0x4225b7(0x363)][_0x4225b7(0x1eb)] + _0x4225b7(0x17e) + _0x1c1587[_0x4225b7(0x257)] + _0x4225b7(0x1b8)), _0x50c4ab && (_0x50a49c(_0x4225b7(0x39f))[_0x4225b7(0x2d9)](_0x4225b7(0x21f)), _0x50a49c(_0x4225b7(0x384))[_0x4225b7(0x2d9)](_0x4225b7(0x304) + _0x1a37dd(_0x4225b7(0x39d)) + _0x4225b7(0x2f6)), _0x50a49c(_0x4225b7(0x384))[_0x4225b7(0x2d9)]('<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>' + _0x1a37dd(_0x4225b7(0x30a)) + _0x4225b7(0x2f6)), _0x50a49c(_0x4225b7(0x39f))[_0x4225b7(0x2d9)](_0x4225b7(0x1e2) + _0x1a37dd(_0x4225b7(0x2c1)) + _0x4225b7(0x25f)));
        }
        function _0x270399(_0x37211f) {
            const _0x3678d0 = _0x24ad6a;
            _0x50a49c(_0x3678d0(0x28a))['length'] && (_0x37211f ? _0x50a49c(_0x3678d0(0x28a))[_0x3678d0(0x264)](_0x3678d0(0x1fe)) : _0x50a49c('.IG_SN_DIG')[_0x3678d0(0x277)]('hidden'));
        }
        function _0x9382f4(_0x3913e9, _0x4701f7, _0x5bc9e7, _0x2c923d, _0x1317b3, _0x4e1755) {
            return new Promise(_0x146968 => {
                setTimeout(() => {
                    const _0x24b200 = a0_0xd21c;
                    _0x4a85bf(!![]), fetch(_0x3913e9)[_0x24b200(0x254)](_0x5cb59f => {
                        const _0x2c2935 = _0x24b200;
                        return _0x5cb59f[_0x2c2935(0x1f0)]()[_0x2c2935(0x254)](_0x48164b => {
                            _0x4a85bf(![]), _0x51f753(_0x3913e9, _0x48164b, _0x4701f7, _0x5bc9e7, _0x2c923d, _0x1317b3, _0x4e1755), _0x146968(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x51f753(_0x3c027c, _0x6f0fde, _0x450b1c, _0x1e2e98, _0x5deaa9, _0xbf3916, _0x2e268c) {
            const _0x2060de = _0x24ad6a;
            _0x5deaa9 = parseInt(_0x5deaa9[_0x2060de(0x359)]()[_0x2060de(0x253)](0xd, '0'));
            _0x43d8a3[_0x2060de(0x240)] && (_0x5deaa9 = parseInt(_0x5deaa9[_0x2060de(0x359)]()['padEnd'](0xd, '0')));
            const _0x51595b = new Date(_0x5deaa9), _0x4bf218 = document[_0x2060de(0x319)]('a'), _0x357f18 = new URL(_0x3c027c)[_0x2060de(0x298)][_0x2060de(0x3ae)]('/')['at'](-0x1)[_0x2060de(0x3ae)]('.')[_0x2060de(0x3c3)](0x0, -0x1)['join']('.'), _0x288c0d = _0x51595b['getFullYear']()[_0x2060de(0x359)](), _0x334c3a = (_0x51595b[_0x2060de(0x1a4)]() + 0x1)[_0x2060de(0x359)]()[_0x2060de(0x385)](0x2, '0'), _0x43489e = _0x51595b['getDate']()[_0x2060de(0x359)]()[_0x2060de(0x385)](0x2, '0'), _0x2e43cb = _0x51595b[_0x2060de(0x3cf)]()[_0x2060de(0x359)]()[_0x2060de(0x385)](0x2, '0'), _0x4d9986 = _0x51595b[_0x2060de(0x2e6)]()[_0x2060de(0x359)]()[_0x2060de(0x385)](0x2, '0'), _0x24a440 = _0x51595b['getSeconds']()[_0x2060de(0x359)]()['padStart'](0x2, '0');
            var _0x273d10 = _0x1e78f9[_0x2060de(0x2bb)]['toUpperCase'](), _0x1b1ac5 = _0x2e268c ?? '', _0x1ffb79 = {
                    '%USERNAME%': _0x450b1c,
                    '%SOURCE_TYPE%': _0x1e2e98,
                    '%SHORTCODE%': _0x1b1ac5,
                    '%YEAR%': _0x288c0d,
                    '%2-YEAR%': _0x288c0d['substr'](-0x2),
                    '%MONTH%': _0x334c3a,
                    '%DAY%': _0x43489e,
                    '%HOUR%': _0x2e43cb,
                    '%MINUTE%': _0x4d9986,
                    '%SECOND%': _0x24a440,
                    '%ORIGINAL_NAME%': _0x357f18,
                    '%ORIGINAL_NAME_FIRST%': _0x357f18[_0x2060de(0x3ae)]('_')['at'](0x0)
                };
            _0x273d10 = _0x273d10[_0x2060de(0x3cc)](/%[\w\-]+%/g, function (_0x41adfd) {
                return _0x1ffb79[_0x41adfd] || _0x41adfd;
            });
            const _0x41e244 = _0x450b1c + '_' + _0x357f18 + '.' + _0xbf3916;
            _0x4bf218[_0x2060de(0x1f7)] = URL[_0x2060de(0x1fd)](_0x6f0fde), _0x4bf218[_0x2060de(0x328)](_0x2060de(0x27d), _0x43d8a3[_0x2060de(0x308)] ? _0x273d10 + '.' + _0xbf3916 : _0x41e244), _0x4bf218[_0x2060de(0x38f)](), _0x4bf218['remove']();
        }
        async function _0x8fdc86(_0x949f39, _0x84c73e) {
            const _0x302a63 = _0x24ad6a;
            let _0x2ff1ba = new Date()[_0x302a63(0x3b5)](), _0x51f87b = Math[_0x302a63(0x1b3)](_0x2ff1ba / 0x3e8), _0x19d43d = _0x50a49c(_0x949f39)[_0x302a63(0x362)]('data-username') ? _0x50a49c(_0x949f39)['attr'](_0x302a63(0x196)) : _0x1e78f9[_0x302a63(0x1bc)];
            !_0x19d43d && _0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x21d)) && (_0x4e6c29(_0x302a63(0x3d0), _0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x3e6))), _0x19d43d = await _0x29c256(_0x50a49c(_0x949f39)['attr'](_0x302a63(0x21d)))[_0x302a63(0x1ab)](_0x577982 => {
                const _0x21e462 = _0x302a63;
                _0x4e6c29(_0x21e462(0x189), _0x577982[_0x21e462(0x23e)]);
            }), _0x19d43d == null && (_0x19d43d = _0x302a63(0x2b7)));
            _0x43d8a3['RENAME_PUBLISH_DATE'] && _0x50a49c(_0x949f39)[_0x302a63(0x362)]('datetime') && (_0x51f87b = parseInt(_0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x24e))));
            if (_0x43d8a3[_0x302a63(0x2ea)]) {
                _0x4a85bf(!![]);
                let _0x11ce2c = await _0x3ac00a(_0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x1a5)));
                _0x4a85bf(![]);
                if (_0x11ce2c[_0x302a63(0x294)] === 'ok') {
                    var _0x2f6e48 = null;
                    _0x11ce2c[_0x302a63(0x273)][0x0][_0x302a63(0x188)] ? _0x2f6e48 = _0x11ce2c[_0x302a63(0x273)][0x0][_0x302a63(0x188)][0x0][_0x302a63(0x1c3)] : (_0x11ce2c[_0x302a63(0x273)][0x0][_0x302a63(0x302)][_0x302a63(0x220)][_0x302a63(0x1ad)](function (_0x4389db, _0x5cc248) {
                        const _0x279cd7 = _0x302a63;
                        let _0x48846c = new URL(_0x4389db[_0x279cd7(0x1c3)])[_0x279cd7(0x335)][_0x279cd7(0x22f)](_0x279cd7(0x3c1)), _0x442f5f = new URL(_0x5cc248[_0x279cd7(0x1c3)])['searchParams'][_0x279cd7(0x22f)](_0x279cd7(0x3c1));
                        if (_0x48846c && _0x442f5f) {
                            if (_0x48846c[_0x279cd7(0x269)] > _0x442f5f[_0x279cd7(0x269)])
                                return 0x1;
                            if (_0x48846c[_0x279cd7(0x269)] < _0x442f5f[_0x279cd7(0x269)])
                                return -0x1;
                        } else {
                            if (_0x4389db[_0x279cd7(0x1f1)] < _0x5cc248[_0x279cd7(0x1f1)])
                                return 0x1;
                            if (_0x4389db[_0x279cd7(0x1f1)] > _0x5cc248['width'])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x2f6e48 = _0x11ce2c['items'][0x0][_0x302a63(0x302)][_0x302a63(0x220)][0x0][_0x302a63(0x1c3)]);
                    if (_0x84c73e) {
                        let _0x33edab = new URL(_0x2f6e48);
                        _0x33edab[_0x302a63(0x1d4)] = 'scontent.cdninstagram.com', _0x17dfc0(_0x33edab[_0x302a63(0x1f7)]);
                    } else
                        _0x9382f4(_0x2f6e48, _0x19d43d, _0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x2d8)), _0x51f87b, _0x50a49c(_0x949f39)['attr'](_0x302a63(0x300)), _0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x21d)));
                } else {
                    if (_0x43d8a3[_0x302a63(0x24f)]) {
                        if (_0x84c73e) {
                            let _0xbc5a13 = new URL(_0x50a49c(_0x949f39)[_0x302a63(0x362)]('data-href'));
                            _0xbc5a13[_0x302a63(0x1d4)] = _0x302a63(0x29f), _0x17dfc0(_0xbc5a13['href']);
                        } else
                            _0x9382f4(_0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x3e6)), _0x19d43d, _0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x2d8)), _0x51f87b, _0x50a49c(_0x949f39)['attr'](_0x302a63(0x300)), _0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x21d)));
                    } else
                        alert(_0x302a63(0x2cd) + _0x11ce2c['message']);
                    _0x4e6c29(_0x11ce2c);
                }
            } else
                _0x9382f4(_0x50a49c(_0x949f39)[_0x302a63(0x362)]('data-href'), _0x19d43d, _0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x2d8)), _0x51f87b, _0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x300)), _0x50a49c(_0x949f39)[_0x302a63(0x362)](_0x302a63(0x21d)));
        }
        function _0x3c9f7b() {
            const _0x29c486 = _0x24ad6a;
            for (let _0x2c1baa of _0x1e78f9[_0x29c486(0x36b)]) {
                _0x4e6c29(_0x29c486(0x1b0), _0x2c1baa), GM_unregisterMenuCommand(_0x2c1baa);
            }
            _0x1e78f9['registerMenuIds']['push'](GM_registerMenuCommand(_0x1a37dd('SETTING'), () => {
                _0x397265();
            }, { 'accessKey': 'w' })), _0x1e78f9[_0x29c486(0x36b)][_0x29c486(0x360)](GM_registerMenuCommand(_0x1a37dd(_0x29c486(0x1c8)), () => {
                const _0x391416 = _0x29c486;
                GM_openInTab(_0x391416(0x2aa), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x1e78f9['registerMenuIds'][_0x29c486(0x360)](GM_registerMenuCommand(_0x1a37dd(_0x29c486(0x21c)), () => {
                _0x1d7557();
            }, { 'accessKey': 'z' })), _0x1e78f9[_0x29c486(0x36b)]['push'](GM_registerMenuCommand(_0x1a37dd(_0x29c486(0x1e1)), () => {
                _0x39027c();
            }, { 'accessKey': 'f' })), _0x1e78f9[_0x29c486(0x36b)][_0x29c486(0x360)](GM_registerMenuCommand(_0x1a37dd(_0x29c486(0x186)), () => {
                _0x3d53de();
            }, { 'accessKey': 'c' })), _0x1e78f9[_0x29c486(0x36b)]['push'](GM_registerMenuCommand(_0x1a37dd(_0x29c486(0x237)), () => {
                _0x324e05();
            }, { 'accessKey': 'r' }));
        }
        function _0x2bfff2(_0x2fb18b) {
            const _0x571d28 = _0x24ad6a;
            if (!_0x43d8a3[_0x571d28(0x286)])
                return;
            const _0x18c51e = GM_getValue(_0x571d28(0x387)) ?? new Date()[_0x571d28(0x3b5)](), _0x3c33c2 = new Date()[_0x571d28(0x3b5)]();
            _0x3c33c2 > parseInt(_0x18c51e) + _0x2fb18b * 0x3e8 && (GM_setValue(_0x571d28(0x387), new Date()[_0x571d28(0x3b5)]()), _0x3d53de());
        }
        function _0x3d53de() {
            const _0x57903b = _0x24ad6a, _0x108df9 = GM_info[_0x57903b(0x363)][_0x57903b(0x1eb)], _0x334a57 = _0x57903b(0x34a);
            GM_xmlhttpRequest({
                'method': _0x57903b(0x21b),
                'url': _0x334a57,
                'onload': function (_0x23a652) {
                    const _0x4ed6e8 = _0x57903b, _0x3e7468 = _0x23a652[_0x4ed6e8(0x2e9)], _0x2eac4b = _0x3e7468[_0x4ed6e8(0x1a0)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x2eac4b && _0x2eac4b[0x1]) {
                        const _0x250c9b = _0x2eac4b[0x1];
                        _0x4e6c29(_0x4ed6e8(0x2ec), _0x108df9, '|', _0x4ed6e8(0x2b0), _0x250c9b), _0x250c9b !== _0x108df9 && typeof this['updatenotification'] === _0x4ed6e8(0x290) ? (this[_0x4ed6e8(0x32f)] = null, GM_notification({
                            'text': _0x1a37dd(_0x4ed6e8(0x1e0)),
                            'title': _0x1a37dd('NOTICE_UPDATE_TITLE'),
                            'tag': _0x4ed6e8(0x22e),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
                            'onclick': _0x47870f => {
                                const _0x544c46 = _0x4ed6e8;
                                _0x47870f?.['preventDefault']();
                                var _0x296c45 = GM_openInTab(GM_info[_0x544c46(0x363)]['downloadURL']);
                                setTimeout(() => {
                                    const _0x1a1c39 = _0x544c46;
                                    _0x296c45[_0x1a1c39(0x1de)]();
                                }, 0xfa);
                            }
                        })) : _0x4e6c29('there\x20is\x20no\x20new\x20update');
                    } else
                        console['error'](_0x4ed6e8(0x181));
                }
            });
        }
        function _0x397265() {
            const _0x4440c7 = _0x24ad6a;
            _0x50a49c(_0x4440c7(0x28a))[_0x4440c7(0x372)](), _0x5c0694(), _0x50a49c('.IG_SN_DIG\x20#post_info')['text'](_0x4440c7(0x228)), _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div')[_0x4440c7(0x2d9)](_0x4440c7(0x2ac));
            for (let _0xad3a2c in _0x2ef46e) {
                _0x50a49c(_0x4440c7(0x333))[_0x4440c7(0x2d9)](_0x4440c7(0x25b) + _0xad3a2c + '\x22\x20' + (_0x1e78f9[_0x4440c7(0x238)] == _0xad3a2c ? _0x4440c7(0x314) : '') + '>' + _0x2ef46e[_0xad3a2c] + '</option>');
            }
            for (let _0x56b84e in _0x43d8a3) {
                _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_BODY')['append'](_0x4440c7(0x373) + (_0x3b437d[_0x4440c7(0x306)](_0x56b84e) ? _0x4440c7(0x281) : '') + _0x4440c7(0x1ec) + _0x1a37dd(_0x56b84e + _0x4440c7(0x3da)) + _0x4440c7(0x3dd) + (_0x56b84e + _0x4440c7(0x3da)) + _0x4440c7(0x33d) + _0x56b84e + '\x22>' + _0x1a37dd(_0x56b84e) + '</span>\x20<input\x20id=\x22' + _0x56b84e + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x43d8a3[_0x56b84e] === !![] ? 'checked' : '') + _0x4440c7(0x358)), _0x56b84e === _0x4440c7(0x201) && _0x50a49c(_0x4440c7(0x2ed) + _0x56b84e + '\x22]')[_0x4440c7(0x19d)](_0x4440c7(0x211))['on'](_0x4440c7(0x179), function (_0x4a6338) {
                    const _0x527395 = _0x4440c7;
                    _0x4a6338[_0x527395(0x2ab)](), _0x50a49c(this)['find'](_0x527395(0x242))[_0x527395(0x269)] === 0x0 && (_0x50a49c(this)[_0x527395(0x2d9)](_0x527395(0x3a9)), _0x50a49c(this)['children'](_0x527395(0x242))[_0x527395(0x2d9)](_0x527395(0x2b6) + _0x1e78f9[_0x527395(0x1c7)] + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0x50a49c(this)[_0x527395(0x3e0)](_0x527395(0x242))[_0x527395(0x2d9)](_0x527395(0x2b6) + _0x1e78f9[_0x527395(0x1c7)] + _0x527395(0x1b6)), _0x50a49c(this)[_0x527395(0x3e0)](_0x527395(0x242))[_0x527395(0x2d9)](_0x527395(0x278) + _0x1c1587[_0x527395(0x257)] + _0x527395(0x348)));
                }), _0x56b84e === _0x4440c7(0x308) && _0x50a49c(_0x4440c7(0x2ed) + _0x56b84e + '\x22]')[_0x4440c7(0x19d)](_0x4440c7(0x211))['on'](_0x4440c7(0x179), function (_0x4018a9) {
                    const _0x4733d7 = _0x4440c7;
                    _0x4018a9['preventDefault'](), _0x50a49c(this)[_0x4733d7(0x38c)](_0x4733d7(0x242))[_0x4733d7(0x269)] === 0x0 && (_0x50a49c(this)[_0x4733d7(0x2d9)](_0x4733d7(0x3a9)), _0x50a49c(this)[_0x4733d7(0x3e0)]('#tempWrapper')[_0x4733d7(0x2d9)]('<input\x20id=\x22date_format\x22\x20value=\x22' + _0x1e78f9[_0x4733d7(0x2bb)] + _0x4733d7(0x1e9)), _0x50a49c(this)[_0x4733d7(0x3e0)](_0x4733d7(0x242))[_0x4733d7(0x2d9)](_0x4733d7(0x278) + _0x1c1587[_0x4733d7(0x257)] + _0x4733d7(0x348)));
                });
            }
        }
        function _0x1d7557() {
            const _0x53ac96 = _0x24ad6a;
            _0x50a49c(_0x53ac96(0x28a))['remove'](), _0x5c0694(), _0x50a49c(_0x53ac96(0x246))['text'](_0x53ac96(0x376)), _0x50a49c(_0x53ac96(0x282))['append']('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x50a49c(_0x53ac96(0x282))['append'](_0x53ac96(0x2d3)), _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append'](_0x53ac96(0x295) + _0x1a37dd(_0x53ac96(0x28c)) + _0x53ac96(0x18c)), _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append'](_0x53ac96(0x1d1) + _0x1a37dd(_0x53ac96(0x398)) + _0x53ac96(0x18c)), _0x50a49c(_0x53ac96(0x35b))[_0x53ac96(0x2d9)](_0x53ac96(0x34d) + _0x1a37dd(_0x53ac96(0x17b)) + '</a></button><br/>'), _0x50a49c(_0x53ac96(0x35b))[_0x53ac96(0x2d9)](_0x53ac96(0x2ad) + _0x1a37dd(_0x53ac96(0x22c)) + _0x53ac96(0x18c)), _0x50a49c(_0x53ac96(0x35b))[_0x53ac96(0x2d9)](_0x53ac96(0x1fa) + _0x1a37dd(_0x53ac96(0x351)) + _0x53ac96(0x18c));
        }
        function _0x39027c() {
            const _0xb7d147 = _0x24ad6a;
            _0x50a49c('.IG_SN_DIG')['remove'](), _0x5c0694(), _0x50a49c(_0xb7d147(0x246))[_0xb7d147(0x207)](_0xb7d147(0x23a)), _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0xb7d147(0x2d9)](_0xb7d147(0x2d3)), _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>' + _0x1a37dd('REPORT_FORK') + _0xb7d147(0x18c)), _0x50a49c(_0xb7d147(0x35b))['append'](_0xb7d147(0x2ad) + _0x1a37dd(_0xb7d147(0x22c)) + _0xb7d147(0x18c)), _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0xb7d147(0x2d9)](_0xb7d147(0x1fa) + _0x1a37dd('REPORT_DISCORD') + _0xb7d147(0x18c));
        }
        function _0x17dfc0(_0x26aec4) {
            const _0x9c42c1 = _0x24ad6a;
            var _0xe41968 = document[_0x9c42c1(0x319)]('a');
            _0xe41968[_0x9c42c1(0x1f7)] = _0x26aec4, _0xe41968['target'] = _0x9c42c1(0x183), document[_0x9c42c1(0x3e2)][_0x9c42c1(0x1f9)](_0xe41968), _0xe41968[_0x9c42c1(0x38f)](), _0xe41968['remove']();
        }
        function _0x324e05() {
            const _0x3ef965 = _0x24ad6a;
            clearInterval(_0x1e78f9[_0x3ef965(0x1e6)]), _0x1e78f9['GL_registerEventList']['forEach'](_0x4ecfba => {
                const _0x186df7 = _0x3ef965;
                _0x4ecfba[_0x186df7(0x3ce)][_0x186df7(0x311)](_0x15b080 => {
                    const _0x3fcdf4 = _0x186df7;
                    _0x50a49c(_0x4ecfba['element'])['off'](_0x3fcdf4(0x38f), _0x15b080);
                });
            }), _0x1e78f9[_0x3ef965(0x365)] = [], _0x50a49c('.button_wrapper')[_0x3ef965(0x372)](), _0x50a49c('.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL')['remove'](), _0x50a49c(_0x3ef965(0x337))[_0x3ef965(0x2d4)](_0x3ef965(0x33b)), _0x1e78f9[_0x3ef965(0x2f9)] = ![], _0x1e78f9[_0x3ef965(0x38d)] = ![], _0x1e78f9[_0x3ef965(0x292)] = location['href'], _0x1e78f9[_0x3ef965(0x1c6)]['disconnect'](), _0x4e6c29('main\x20timer\x20re-register\x20completed');
        }
        function _0x4e6c29(..._0x5c4a46) {
            const _0x8bc02c = _0x24ad6a;
            var _0x2c4147 = new Date();
            _0x1e78f9['GL_logger']['push']({
                'time': _0x2c4147[_0x8bc02c(0x3b5)](),
                'content': [..._0x5c4a46]
            }), _0x1e78f9[_0x8bc02c(0x3d6)]['length'] > 0x3e8 && (_0x1e78f9[_0x8bc02c(0x3d6)] = [
                {
                    'time': _0x2c4147[_0x8bc02c(0x3b5)](),
                    'content': [_0x8bc02c(0x276)]
                },
                ..._0x1e78f9[_0x8bc02c(0x3d6)][_0x8bc02c(0x3c3)](-0x3e7)
            ]), console[_0x8bc02c(0x23f)]('[' + _0x2c4147[_0x8bc02c(0x25d)]() + ']', ..._0x5c4a46);
        }
        function _0x5c6c67() {
            const _0x253090 = _0x24ad6a;
            for (let _0x4635ba in _0x43d8a3) {
                GM_getValue(_0x4635ba) != null && typeof GM_getValue(_0x4635ba) === _0x253090(0x1ba) && (_0x43d8a3[_0x4635ba] = GM_getValue(_0x4635ba), _0x4635ba === _0x253090(0x201) && GM_getValue(_0x4635ba) !== !![] && (_0x1e78f9[_0x253090(0x1c7)] = 0x1));
            }
        }
        function _0x12f4f7(_0x58168d, _0x46b286, _0x17a137, _0x40c904 = '') {
            const _0x52da12 = _0x24ad6a;
            _0x46b286[_0x52da12(0x38c)](_0x52da12(0x35e))[_0x52da12(0x269)] === 0x0 ? (_0x46b286[_0x52da12(0x2d9)](_0x52da12(0x3ed) + _0x40c904 + _0x52da12(0x1e9)), _0x46b286[_0x52da12(0x38c)](_0x52da12(0x35e))[_0x52da12(0x2d9)](_0x52da12(0x2a9) + _0x1e78f9[_0x52da12(0x1c7)] + _0x52da12(0x2f7)), _0x46b286[_0x52da12(0x38c)](_0x52da12(0x25c))['attr'](_0x52da12(0x21e), _0x52da12(0x31b) + (_0x1e78f9['videoVolume'] * 0x64 + '%')), _0x46b286['find'](_0x52da12(0x25c))['on'](_0x52da12(0x334), function () {
                const _0x36d9b1 = _0x52da12;
                var _0x1e17cf = _0x50a49c(this)['val']() * 0x64 + '%';
                _0x1e78f9[_0x36d9b1(0x1c7)] = _0x50a49c(this)['val'](), GM_setValue(_0x36d9b1(0x1a7), _0x50a49c(this)[_0x36d9b1(0x37e)]()), _0x50a49c(this)[_0x36d9b1(0x362)](_0x36d9b1(0x21e), _0x36d9b1(0x31b) + _0x1e17cf), _0x58168d[_0x36d9b1(0x2d5)](function () {
                    const _0xbd1a3e = _0x36d9b1;
                    _0x4e6c29('(' + _0x17a137 + ')', _0xbd1a3e(0x2f5)), this['volume'] = _0x1e78f9['videoVolume'];
                });
            }), _0x46b286[_0x52da12(0x38c)](_0x52da12(0x25c))['on'](_0x52da12(0x218), function () {
                const _0x3c1304 = _0x52da12;
                var _0x4248af = _0x1e78f9['videoVolume'] * 0x64 + '%';
                _0x50a49c(this)[_0x3c1304(0x362)](_0x3c1304(0x21e), '--ig-track-progress:\x20' + _0x4248af), _0x50a49c(this)['val'](_0x1e78f9[_0x3c1304(0x1c7)]), _0x58168d[_0x3c1304(0x2d5)](function () {
                    const _0x5190da = _0x3c1304;
                    _0x4e6c29('(' + _0x17a137 + ')', _0x5190da(0x2f5)), this[_0x5190da(0x187)] = _0x1e78f9[_0x5190da(0x1c7)];
                });
            }), _0x46b286[_0x52da12(0x38c)](_0x52da12(0x35e))['on'](_0x52da12(0x38f), function (_0x16ff80) {
                const _0x3ed0f3 = _0x52da12;
                _0x16ff80[_0x3ed0f3(0x2d2)](), _0x16ff80[_0x3ed0f3(0x2ab)]();
            })) : _0x46b286[_0x52da12(0x38c)]('div.volume_slider')['remove']();
        }
        function _0x3a53ed() {
            const _0x2a92c7 = _0x24ad6a;
            var _0x3040f3 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x2a92c7(0x31f),
                        'NOTICE_UPDATE_CONTENT': 'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
                        'CHECK_UPDATE': _0x2a92c7(0x342),
                        'CHECK_UPDATE_MENU': _0x2a92c7(0x30c),
                        'CHECK_UPDATE_INTRO': _0x2a92c7(0x193),
                        'RELOAD_SCRIPT': _0x2a92c7(0x227),
                        'DONATE': _0x2a92c7(0x1a2),
                        'FEEDBACK': _0x2a92c7(0x2d6),
                        'NEW_TAB': _0x2a92c7(0x1d2),
                        'SHOW_DOM_TREE': _0x2a92c7(0x216),
                        'SELECT_AND_COPY': _0x2a92c7(0x3d8),
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
                        'REPORT_GITHUB': _0x2a92c7(0x2f1),
                        'REPORT_DISCORD': _0x2a92c7(0x2a1),
                        'REPORT_FORK': _0x2a92c7(0x1c0),
                        'DEBUG': 'Debug\x20Window',
                        'CLOSE': _0x2a92c7(0x2fc),
                        'ALL_CHECK': _0x2a92c7(0x2db),
                        'BATCH_DOWNLOAD_SELECTED': _0x2a92c7(0x198),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': 'Image',
                        'VID': _0x2a92c7(0x226),
                        'DW': _0x2a92c7(0x247),
                        'DW_ALL': _0x2a92c7(0x29a),
                        'THUMBNAIL_INTRO': _0x2a92c7(0x3b2),
                        'LOAD_BLOB_ONE': _0x2a92c7(0x3f0),
                        'LOAD_BLOB_MULTIPLE': _0x2a92c7(0x288),
                        'LOAD_BLOB_RELOAD': _0x2a92c7(0x3e5),
                        'NO_CHECK_RESOURCE': 'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
                        'NO_VID_URL': _0x2a92c7(0x1a9),
                        'SETTING': 'Settings',
                        'AUTO_RENAME': 'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
                        'RENAME_SHORTCODE': _0x2a92c7(0x3d9),
                        'RENAME_PUBLISH_DATE': _0x2a92c7(0x1bd),
                        'RENAME_LOCATE_DATE': 'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
                        'DISABLE_VIDEO_LOOPING': _0x2a92c7(0x3a3),
                        'HTML5_VIDEO_CONTROL': _0x2a92c7(0x23c),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x2a92c7(0x33c),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x2a92c7(0x361),
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': 'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
                        'SCROLL_BUTTON': _0x2a92c7(0x364),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x2a92c7(0x30e),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x2a92c7(0x2af),
                        'AUTO_RENAME_INTRO': 'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
                        'RENAME_SHORTCODE_INTRO': _0x2a92c7(0x1f4),
                        'RENAME_PUBLISH_DATE_INTRO': _0x2a92c7(0x3d2),
                        'RENAME_LOCATE_DATE_INTRO': 'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x2a92c7(0x234),
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x2a92c7(0x3ef),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': 'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': 'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x2a92c7(0x3ab),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x2a92c7(0x2a4),
                        'SCROLL_BUTTON_INTRO': _0x2a92c7(0x313),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x2a92c7(0x349),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x2a92c7(0x274),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x2a92c7(0x195),
                        'SKIP_VIEW_STORY_CONFIRM': _0x2a92c7(0x31a),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': 'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.'
                    }
                }, _0x1170a0 = Object[_0x2a92c7(0x2f2)]({}, _0x3040f3, _0x1e78f9['locale']), _0x465c65 = Object[_0x2a92c7(0x3e1)](_0x1170a0)[_0x2a92c7(0x1ad)]()[_0x2a92c7(0x1fb)]((_0x5c405b, _0x5bd30b) => {
                    return _0x5c405b[_0x5bd30b] = _0x1170a0[_0x5bd30b], _0x5c405b;
                }, {});
            return _0x465c65;
        }
        async function _0x1885a3(_0x29247f) {
            return new Promise((_0x222e7d, _0x3a7b9a) => {
                const _0x28a880 = a0_0xd21c;
                GM_xmlhttpRequest({
                    'method': _0x28a880(0x21b),
                    'url': 'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/' + _0x29247f + _0x28a880(0x1a3),
                    'onload': function (_0x2c876e) {
                        try {
                            let _0x12c8aa = JSON['parse'](_0x2c876e['response']);
                            _0x222e7d(_0x12c8aa);
                        } catch (_0x6b17ad) {
                            _0x3a7b9a(_0x6b17ad);
                        }
                    },
                    'onerror': function (_0x1c3e87) {
                        const _0x377709 = _0x28a880;
                        _0x4e6c29(_0x377709(0x1af), _0x377709(0x24a), _0x1c3e87), _0x3a7b9a(_0x1c3e87);
                    }
                });
            });
        }
        function _0x1a37dd(_0xdc7476) {
            const _0x5343ae = _0x24ad6a, _0x2ae03b = _0x3a53ed();
            return _0x2ae03b[_0x1e78f9['lang']] != undefined && _0x2ae03b[_0x1e78f9[_0x5343ae(0x238)]][_0xdc7476] != undefined ? _0x2ae03b[_0x1e78f9[_0x5343ae(0x238)]][_0xdc7476] : _0x2ae03b[_0x5343ae(0x366)][_0xdc7476];
        }
        function _0x531bda() {
            const _0x4c29a5 = _0x24ad6a;
            _0x50a49c(_0x4c29a5(0x305))['each'](function () {
                const _0x2906e6 = _0x4c29a5;
                _0x50a49c(this)[_0x2906e6(0x207)](_0x1a37dd(_0x50a49c(this)[_0x2906e6(0x362)]('data-ih-locale')));
            }), _0x50a49c(_0x4c29a5(0x39c))[_0x4c29a5(0x2d5)](function () {
                const _0x4afc67 = _0x4c29a5;
                _0x50a49c(this)[_0x4afc67(0x362)](_0x4afc67(0x317), _0x1a37dd(_0x50a49c(this)[_0x4afc67(0x362)]('data-ih-locale-title')));
            });
        }
        _0x50a49c(function () {
            const _0x584305 = _0x24ad6a;
            function _0x33cd83(_0x15fd0f) {
                const _0x4b1b32 = a0_0xd21c;
                var _0x56effb = [];
                for (var _0x5be1f3 of _0x15fd0f) {
                    _0x56effb[_0x4b1b32(0x360)]({
                        'tagName': _0x5be1f3[_0x4b1b32(0x2fd)],
                        'id': _0x5be1f3['id'],
                        'className': _0x5be1f3[_0x4b1b32(0x3ad)]
                    });
                }
                return _0x56effb;
            }
            function _0x5ed838() {
                const _0x1d9ae8 = a0_0xd21c;
                let _0x4dcbf6 = _0x50a49c(_0x1d9ae8(0x3b4))[0x0];
                var _0x3b7aef = '';
                _0x1e78f9[_0x1d9ae8(0x3d6)][_0x1d9ae8(0x311)](_0x5e3847 => {
                    const _0x24bd51 = _0x1d9ae8;
                    var _0x65ac7e = JSON[_0x24bd51(0x1f6)](_0x5e3847['content'], function (_0x36544a, _0x10fab8) {
                        const _0x3a83fc = _0x24bd51;
                        if (Array[_0x3a83fc(0x2c9)](this)) {
                            if (typeof _0x10fab8 === _0x3a83fc(0x232) && _0x10fab8 instanceof jQuery)
                                return _0x33cd83(_0x10fab8);
                            return _0x10fab8;
                        } else
                            return _0x10fab8;
                    }, '\x09');
                    _0x3b7aef += new Date(_0x5e3847[_0x24bd51(0x267)])[_0x24bd51(0x25d)]() + ':\x20' + _0x65ac7e + '\x0a';
                }), _0x50a49c(_0x1d9ae8(0x3a2))['text'](_0x1d9ae8(0x380) + _0x3b7aef + _0x1d9ae8(0x1bf) + location[_0x1d9ae8(0x298)] + _0x1d9ae8(0x1ce) + _0x4dcbf6[_0x1d9ae8(0x3a8)]);
            }
            _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), _0x584305(0x3ca), function () {
                _0x5ed838();
            }), _0x50a49c('body')['on'](_0x584305(0x38f), _0x584305(0x33f), function () {
                const _0x23e581 = _0x584305;
                _0x50a49c('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x23e581(0x1a1)](), document['execCommand']('copy');
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), _0x584305(0x347), function () {
                const _0x4811e7 = _0x584305;
                _0x50a49c(_0x4811e7(0x3a2))[_0x4811e7(0x207)]()['length'] === 0x0 && _0x5ed838();
                var _0x3b80e6 = _0x50a49c(_0x4811e7(0x3a2))['text'](), _0x44a90c = document[_0x4811e7(0x319)]('a'), _0x3df160 = new Blob([_0x3b80e6], { 'type': _0x4811e7(0x377) });
                _0x44a90c[_0x4811e7(0x1f7)] = URL[_0x4811e7(0x1fd)](_0x3df160), _0x44a90c[_0x4811e7(0x27d)] = _0x4811e7(0x35a) + new Date()[_0x4811e7(0x3b5)]() + _0x4811e7(0x30d), document[_0x4811e7(0x3e2)][_0x4811e7(0x1f9)](_0x44a90c), _0x44a90c['click'](), _0x44a90c['remove']();
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG', function () {
                const _0x1a61a5 = _0x584305;
                _0x50a49c(this)['parent'](_0x1a61a5(0x242))[_0x1a61a5(0x269)] > 0x0 ? _0x50a49c(this)[_0x1a61a5(0x19d)]('#tempWrapper')[_0x1a61a5(0x192)](0xfa, function () {
                    const _0x50ad7e = _0x1a61a5;
                    _0x50a49c(this)[_0x50ad7e(0x372)]();
                }) : _0x50a49c(_0x1a61a5(0x28a))['remove']();
            }), _0x50a49c(window)['on'](_0x584305(0x250), function (_0x293a2c) {
                const _0x5b4f77 = _0x584305;
                _0x293a2c[_0x5b4f77(0x397)] == '81' && _0x293a2c[_0x5b4f77(0x3af)] && (_0x50a49c(_0x5b4f77(0x28a))[_0x5b4f77(0x372)](), _0x293a2c[_0x5b4f77(0x2ab)]()), _0x293a2c[_0x5b4f77(0x397)] == '87' && _0x293a2c['altKey'] && (_0x397265(), _0x293a2c['preventDefault']()), _0x293a2c[_0x5b4f77(0x397)] == '90' && _0x293a2c['altKey'] && (_0x1d7557(), _0x293a2c[_0x5b4f77(0x2ab)]()), _0x293a2c[_0x5b4f77(0x397)] == '82' && _0x293a2c['altKey'] && (_0x324e05(), _0x293a2c[_0x5b4f77(0x2ab)]()), _0x293a2c[_0x5b4f77(0x397)] == '83' && _0x293a2c['altKey'] && (location[_0x5b4f77(0x1f7)][_0x5b4f77(0x1a0)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x50a49c(_0x5b4f77(0x26e))[_0x5b4f77(0x269)] > 0x0 && _0x50a49c(_0x5b4f77(0x26e))?.[_0x5b4f77(0x3ce)](_0x5b4f77(0x38f)), location[_0x5b4f77(0x1f7)][_0x5b4f77(0x1a0)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x50a49c(_0x5b4f77(0x18d))[_0x5b4f77(0x269)] > 0x0 && _0x50a49c(_0x5b4f77(0x18d))?.['trigger'](_0x5b4f77(0x38f)), _0x293a2c[_0x5b4f77(0x2ab)]());
            }), _0x50a49c('body')['on'](_0x584305(0x3c7), '.IG_SN_DIG\x20input', function () {
                const _0x376fb9 = _0x584305;
                var _0x336f45 = _0x50a49c(this)[_0x376fb9(0x362)]('id');
                if (_0x336f45 && _0x43d8a3[_0x336f45] !== undefined) {
                    let _0x197a6f = _0x50a49c(this)[_0x376fb9(0x2c2)]('checked');
                    GM_setValue(_0x336f45, _0x197a6f), _0x43d8a3[_0x336f45] = _0x197a6f, console['log'](_0x376fb9(0x3bb), _0x336f45, _0x197a6f);
                }
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), _0x584305(0x2e8), function (_0x3e7724) {
                const _0x16bf42 = _0x584305;
                _0x50a49c(this)['find']('#tempWrapper')[_0x16bf42(0x269)] > 0x0 && _0x3e7724[_0x16bf42(0x2ab)]();
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x3c7), _0x584305(0x2a5), function () {
                const _0x499524 = _0x584305;
                let _0x4847b2 = _0x50a49c(this)[_0x499524(0x37e)]();
                _0x50a49c(this)['attr']('type') == _0x499524(0x24c) ? _0x50a49c(this)[_0x499524(0x2b2)]()[_0x499524(0x37e)](_0x4847b2) : _0x50a49c(this)['prev']()[_0x499524(0x37e)](_0x4847b2), _0x4847b2 >= 0x0 && _0x4847b2 <= 0x1 && (_0x1e78f9[_0x499524(0x1c7)] = _0x4847b2, GM_setValue('G_VIDEO_VOLUME', _0x4847b2));
            }), _0x50a49c('body')['on'](_0x584305(0x334), _0x584305(0x2a5), function () {
                const _0x14dab5 = _0x584305;
                if (_0x50a49c(this)[_0x14dab5(0x362)](_0x14dab5(0x259)) == _0x14dab5(0x24c)) {
                    let _0x28ec44 = _0x50a49c(this)[_0x14dab5(0x37e)]();
                    _0x50a49c(this)['next']()[_0x14dab5(0x37e)](_0x28ec44);
                } else {
                    let _0x50411a = _0x50a49c(this)[_0x14dab5(0x37e)]();
                    _0x50411a >= 0x0 && _0x50411a <= 0x1 ? _0x50a49c(this)[_0x14dab5(0x303)]()[_0x14dab5(0x37e)](_0x50411a) : _0x50411a < 0x0 ? _0x50a49c(this)[_0x14dab5(0x37e)](0x0) : _0x50a49c(this)[_0x14dab5(0x37e)](0x1);
                }
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x334), '.IG_SN_DIG\x20#tempWrapper\x20input#date_format', function () {
                const _0x3747c8 = _0x584305;
                GM_setValue(_0x3747c8(0x30b), _0x50a49c(this)[_0x3747c8(0x37e)]()), _0x1e78f9['fileRenameFormat'] = _0x50a49c(this)['val']();
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), 'a[data-needed=\x22direct\x22]', function (_0x4ea52e) {
                _0x4ea52e['preventDefault'](), _0x8fdc86(this);
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), _0x584305(0x2ee), function () {
                const _0x35b9ad = _0x584305;
                if (_0x43d8a3[_0x35b9ad(0x2ea)] && _0x43d8a3['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                    _0x8fdc86(_0x50a49c(this)[_0x35b9ad(0x19d)]()[_0x35b9ad(0x3e0)]('a')['first']()[0x0], !![]);
                else {
                    var _0x16bc20 = new URL(_0x50a49c(this)['parent']()[_0x35b9ad(0x3e0)]('a')[_0x35b9ad(0x362)]('data-href'));
                    _0x16bc20[_0x35b9ad(0x1d4)] = _0x35b9ad(0x29f), _0x17dfc0(_0x16bc20['href']);
                }
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), '.IG_SN_DIG_BODY\x20.videoThumbnail', function () {
                const _0x17e96c = _0x584305;
                let _0x55f386 = new Date()['getTime']();
                _0x43d8a3['RENAME_PUBLISH_DATE'] && _0x50a49c(this)[_0x17e96c(0x19d)]()[_0x17e96c(0x3e0)]('a')[_0x17e96c(0x362)]('datetime') && (_0x55f386 = _0x50a49c(this)[_0x17e96c(0x19d)]()[_0x17e96c(0x3e0)]('a')['attr'](_0x17e96c(0x24e)));
                let _0xf2e519 = _0x50a49c(this)[_0x17e96c(0x19d)]()[_0x17e96c(0x3e0)]('a')[_0x17e96c(0x362)](_0x17e96c(0x21d)) ?? _0x50a49c(_0x17e96c(0x3ea))['text']();
                _0x9382f4(_0x50a49c(this)['parent']()[_0x17e96c(0x3e0)]('a')[_0x17e96c(0x38c)](_0x17e96c(0x299))[_0x17e96c(0x28b)]()[_0x17e96c(0x362)](_0x17e96c(0x2c3)), _0x50a49c(this)[_0x17e96c(0x19d)]()['children']('a')[_0x17e96c(0x362)](_0x17e96c(0x196)), _0x17e96c(0x39b), _0x55f386, _0x17e96c(0x263), _0xf2e519);
            }), _0x50a49c('body')['on']('click', '.IG_DWSTORY', function () {
                _0x28c6f9(!![]);
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), '.IG_DWSTORY_ALL', function () {
                _0xfffd3e();
            }), _0x50a49c(_0x584305(0x3e2))['on']('click', _0x584305(0x324), function (_0xd9bf06) {
                const _0x484a64 = _0x584305;
                _0xd9bf06[_0x484a64(0x2ab)](), _0x28c6f9(!![], !![], !![]);
            }), _0x50a49c(_0x584305(0x3e2))['on']('click', _0x584305(0x340), function () {
                _0x47dbdf(!![]);
            }), _0x50a49c('body')['on']('click', _0x584305(0x20f), function (_0x55d645) {
                const _0x4ebae2 = _0x584305;
                _0x55d645[_0x4ebae2(0x2d2)](), _0x362cfa(!![]);
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), _0x584305(0x18d), function () {
                _0x418bea(!![]);
            }), _0x50a49c(_0x584305(0x3e2))['on']('click', _0x584305(0x343), function () {
                _0x5a360c();
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), _0x584305(0x381), function (_0x1faab2) {
                const _0x9e2ae3 = _0x584305;
                _0x1faab2[_0x9e2ae3(0x2ab)](), _0x418bea(!![], !![]);
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x59ac32(!![]);
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), '.IG_REELS', function () {
                _0x4d47cb(!![], !![]);
            }), _0x50a49c(_0x584305(0x3e2))['on']('click', '.IG_REELS_NEWTAB', function () {
                _0x4d47cb(!![], !![], !![]);
            }), _0x50a49c(_0x584305(0x3e2))['on']('click', _0x584305(0x3b8), function () {
                _0x4d47cb(!![], ![]);
            }), _0x50a49c(_0x584305(0x3e2))['on']('mousedown', _0x584305(0x3c9), function (_0x4bcbc3) {
                const _0x23bdd5 = _0x584305;
                if (_0x4bcbc3[_0x23bdd5(0x397)] === 0x3 || _0x4bcbc3['which'] === 0x2) {
                    if (location[_0x23bdd5(0x1f7)] === _0x23bdd5(0x326) && _0x43d8a3['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x4bcbc3[_0x23bdd5(0x2ab)]();
                        if (_0x50a49c(this)[_0x23bdd5(0x38c)](_0x23bdd5(0x3c8))[_0x23bdd5(0x269)] > 0x0) {
                            const _0x1975ff = _0x23bdd5(0x326) + _0x50a49c(this)[_0x23bdd5(0x3e0)](_0x23bdd5(0x1ed))['last']()[_0x23bdd5(0x207)]();
                            _0x4bcbc3[_0x23bdd5(0x397)] === 0x2 ? GM_openInTab(_0x1975ff) : location[_0x23bdd5(0x1f7)] = _0x1975ff;
                        }
                    }
                }
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x3c7), _0x584305(0x3db), function () {
                const _0x59d1a6 = _0x584305;
                var _0x5504a7 = _0x50a49c(this)[_0x59d1a6(0x38c)](_0x59d1a6(0x334))['prop']('checked');
                _0x50a49c('.IG_SN_DIG_BODY\x20.inner_box')[_0x59d1a6(0x2d5)](function () {
                    const _0x40d21d = _0x59d1a6;
                    _0x50a49c(this)[_0x40d21d(0x2c2)](_0x40d21d(0x35c), _0x5504a7);
                });
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x3c7), '.IG_SN_DIG_BODY\x20.inner_box', function () {
                const _0x19b7a9 = _0x584305;
                var _0x34d2ef = _0x50a49c(_0x19b7a9(0x391))[_0x19b7a9(0x269)], _0x12a54d = _0x50a49c('.IG_SN_DIG_BODY\x20.inner_box')[_0x19b7a9(0x269)];
                _0x50a49c(_0x19b7a9(0x3db))[_0x19b7a9(0x38c)]('input')['prop'](_0x19b7a9(0x35c), _0x34d2ef == _0x12a54d);
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), _0x584305(0x368), function () {
                const _0x5978a0 = _0x584305;
                let _0x2f8ecf = 0x0;
                _0x50a49c(_0x5978a0(0x24d))[_0x5978a0(0x2d5)](function () {
                    const _0x324030 = _0x5978a0;
                    _0x50a49c(this)['prev']()[_0x324030(0x3e0)](_0x324030(0x334))['prop']('checked') && (_0x50a49c(this)[_0x324030(0x3ce)](_0x324030(0x38f)), _0x2f8ecf++);
                }), _0x2f8ecf == 0x0 && alert(_0x1a37dd('NO_CHECK_RESOURCE'));
            }), _0x50a49c('body')['on'](_0x584305(0x3c7), _0x584305(0x1b9), function () {
                const _0x1b214b = _0x584305;
                GM_setValue(_0x1b214b(0x238), _0x50a49c(this)[_0x1b214b(0x37e)]()), _0x1e78f9['lang'] = _0x50a49c(this)['val'](), _0x1e78f9[_0x1b214b(0x238)]?.[_0x1b214b(0x338)]('en') || _0x1e78f9[_0x1b214b(0x26a)][_0x1e78f9[_0x1b214b(0x238)]] != null ? (_0x531bda(), _0x3c9f7b()) : _0x1885a3(_0x1e78f9['lang'])[_0x1b214b(0x254)](_0x18cb01 => {
                    const _0x275066 = _0x1b214b;
                    _0x1e78f9[_0x275066(0x26a)][_0x1e78f9[_0x275066(0x238)]] = _0x18cb01, _0x531bda(), _0x3c9f7b();
                })[_0x1b214b(0x1ab)](_0x55ac47 => {
                    const _0x537fb5 = _0x1b214b;
                    console[_0x537fb5(0x28d)](_0x537fb5(0x266), _0x55ac47);
                });
            }), _0x50a49c(_0x584305(0x3e2))['on'](_0x584305(0x38f), '.IG_SN_DIG_TITLE\x20#batch_download_direct', function () {
                const _0x5ee619 = _0x584305;
                _0x50a49c('.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x5ee619(0x2d5)](function () {
                    const _0x2ade7b = _0x5ee619;
                    _0x50a49c(this)[_0x2ade7b(0x3ce)]('click');
                });
            });
            const _0x4f04e0 = new MutationObserver(_0x1c6340 => {
                const _0x2b1bc2 = _0x584305;
                for (const _0xc7b89e of _0x1c6340) {
                    _0xc7b89e[_0x2b1bc2(0x259)] === _0x2b1bc2(0x28f) && _0xc7b89e['addedNodes'][_0x2b1bc2(0x311)](_0x2a4374 => {
                        const _0x1d61be = _0x2b1bc2, _0x143870 = _0x50a49c(_0x2a4374)[_0x1d61be(0x38c)](_0x1d61be(0x2a8));
                        if (_0x143870['length'] > 0x0) {
                            _0x43d8a3['MODIFY_VIDEO_VOLUME'] && _0x143870['each'](function () {
                                _0x50a49c(this)['on']('play\x20playing', function () {
                                    const _0x26127b = a0_0xd21c;
                                    !_0x50a49c(this)[_0x26127b(0x3c2)](_0x26127b(0x325)) && (_0x50a49c(this)[_0x26127b(0x362)](_0x26127b(0x2f8), !![]), this['volume'] = _0x1e78f9[_0x26127b(0x1c7)], _0x4e6c29('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x1d61be(0x298)][_0x1d61be(0x1a0)](/^(\/stories\/)/ig)) {
                                const _0x41ff75 = location[_0x1d61be(0x298)]['match'](/^(\/stories\/highlights\/)/ig) != null, _0x512580 = _0x41ff75 ? 'highlight' : _0x1d61be(0x3a7);
                                _0x143870['each'](function () {
                                    const _0xd02a01 = _0x1d61be;
                                    _0x50a49c(this)['on']('timeupdate', function () {
                                        const _0x42fa69 = a0_0xd21c;
                                        if (!_0x50a49c(this)[_0x42fa69(0x3c2)](_0x42fa69(0x1be))) {
                                            let _0x5114c0 = _0x50a49c(this);
                                            _0x5114c0['parents'](_0x42fa69(0x375))['filter'](function () {
                                                const _0x1ebe27 = _0x42fa69;
                                                return _0x50a49c(this)[_0x1ebe27(0x1f1)]() == _0x5114c0['width']();
                                            })[_0x42fa69(0x38c)](_0x42fa69(0x33a))[_0x42fa69(0x269)] === 0x0 ? (_0x50a49c(this)[_0x42fa69(0x362)](_0x42fa69(0x2cf), !![]), _0x41ff75 ? _0x59ac32(![]) : _0x47dbdf(![]), _0x4e6c29('(' + _0x512580 + ')', 'Manually\x20inserting\x20thumbnail\x20button')) : (_0x50a49c(this)[_0x42fa69(0x362)](_0x42fa69(0x2cf), !![]), _0x4e6c29('(' + _0x512580 + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0x5c0ab1 = _0x50a49c(this);
                                    if (_0x43d8a3['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x5c0ab1[_0xd02a01(0x3c2)]('controls')) {
                                            _0x4e6c29('(' + _0x512580 + ')', _0xd02a01(0x225));
                                            _0x43d8a3[_0xd02a01(0x201)] && (this[_0xd02a01(0x187)] = _0x1e78f9['videoVolume'], _0x5c0ab1['on'](_0xd02a01(0x230), function () {
                                                const _0x560330 = _0xd02a01;
                                                this[_0x560330(0x187)] = _0x1e78f9[_0x560330(0x1c7)];
                                            }));
                                            let _0x4201d3 = _0x5c0ab1[_0xd02a01(0x2dc)](_0xd02a01(0x1ed))[_0xd02a01(0x2c6)](function () {
                                                    const _0x176776 = _0xd02a01;
                                                    return _0x50a49c(this)[_0x176776(0x362)](_0x176776(0x34f)) == null && _0x50a49c(this)['attr'](_0x176776(0x21e)) == null;
                                                })[_0xd02a01(0x28b)](), _0x418bae = _0x4201d3[_0xd02a01(0x2b2)]();
                                            _0x418bae['hide']();
                                            let _0x5edf0b = _0x4201d3[_0xd02a01(0x38c)]('div[class][role=\x22button\x22]');
                                            _0x5edf0b[_0xd02a01(0x1b2)]();
                                            const _0x379166 = function (_0x56f1a1) {
                                                const _0x48d8d0 = _0xd02a01;
                                                _0x56f1a1[_0x48d8d0(0x2ab)](), _0x5c0ab1[_0x48d8d0(0x39a)](_0x48d8d0(0x2a2), '2'), _0x5c0ab1['attr'](_0x48d8d0(0x383), !![]), _0x5edf0b[_0x48d8d0(0x1b2)](), _0x418bae[_0x48d8d0(0x1b2)](), _0x12f4f7(_0x5c0ab1, _0x5c0ab1[_0x48d8d0(0x2dc)](_0x48d8d0(0x375))[_0x48d8d0(0x2c6)](function () {
                                                    const _0x5ea9d5 = _0x48d8d0;
                                                    return _0x50a49c(this)[_0x5ea9d5(0x1f1)]() == _0x5c0ab1[_0x5ea9d5(0x1f1)]();
                                                })[_0x48d8d0(0x28b)](), _0x512580, _0x48d8d0(0x202));
                                            };
                                            _0x5c0ab1['parent']()[_0xd02a01(0x38c)](_0xd02a01(0x289))['on'](_0xd02a01(0x179), _0x379166), _0x5edf0b['on'](_0xd02a01(0x179), _0x379166), _0x418bae['on'](_0xd02a01(0x179), _0x379166), _0x5c0ab1['on'](_0xd02a01(0x179), function (_0x44078a) {
                                                const _0x18e986 = _0xd02a01;
                                                _0x44078a['preventDefault'](), _0x5c0ab1[_0x18e986(0x39a)]('z-index', '-1'), _0x5c0ab1[_0x18e986(0x2d4)]('controls'), _0x418bae[_0x18e986(0x27f)](), _0x5edf0b['show'](), _0x12f4f7(_0x5c0ab1, _0x5c0ab1[_0x18e986(0x2dc)](_0x18e986(0x375))['filter'](function () {
                                                    const _0x5cbc98 = _0x18e986;
                                                    return _0x50a49c(this)[_0x5cbc98(0x1f1)]() == _0x5c0ab1[_0x5cbc98(0x1f1)]();
                                                })[_0x18e986(0x28b)](), _0x512580, _0x18e986(0x202));
                                            }), _0x5c0ab1['on']('volumechange', function () {
                                                const _0x60bcda = _0xd02a01;
                                                let _0x5658f2 = _0x4201d3['parent']()['find']('svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]')['parents'](_0x60bcda(0x2bf))[_0x60bcda(0x28b)]();
                                                var _0x3c275f = _0x5658f2[_0x60bcda(0x38c)](_0x60bcda(0x291))[_0x60bcda(0x269)] === 0x0;
                                                this[_0x60bcda(0x18a)] != _0x3c275f && (this[_0x60bcda(0x187)] = _0x1e78f9[_0x60bcda(0x1c7)], _0x5658f2?.[_0x60bcda(0x3ce)](_0x60bcda(0x38f))), _0x50a49c(this)[_0x60bcda(0x362)]('data-completed') && (_0x1e78f9['videoVolume'] = this[_0x60bcda(0x187)], GM_setValue('G_VIDEO_VOLUME', this[_0x60bcda(0x187)])), this['volume'] == _0x1e78f9[_0x60bcda(0x1c7)] && _0x50a49c(this)[_0x60bcda(0x362)]('data-completed', !![]);
                                            }), _0x5c0ab1[_0xd02a01(0x39a)](_0xd02a01(0x2f4), _0xd02a01(0x36f)), _0x5c0ab1[_0xd02a01(0x39a)](_0xd02a01(0x2a2), '2'), _0x5c0ab1['attr'](_0xd02a01(0x270), !![]), _0x5c0ab1[_0xd02a01(0x362)](_0xd02a01(0x383), !![]);
                                        }
                                    } else
                                        _0x12f4f7(_0x5c0ab1, _0x5c0ab1[_0xd02a01(0x2dc)](_0xd02a01(0x375))[_0xd02a01(0x2c6)](function () {
                                            const _0x14df17 = _0xd02a01;
                                            return _0x50a49c(this)[_0x14df17(0x1f1)]() == _0x5c0ab1[_0x14df17(0x1f1)]();
                                        })[_0xd02a01(0x28b)](), _0x512580, _0xd02a01(0x202));
                                });
                            }
                        }
                    });
                }
            });
            _0x4f04e0['observe'](_0x50a49c(_0x584305(0x3b4))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));