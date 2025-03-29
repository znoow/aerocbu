// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.1.2
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

function a0_0xe1f8(_0x3ac928, _0x46a0f8) {
    const _0xf44ffd = a0_0xf44f();
    return a0_0xe1f8 = function (_0xe1f85a, _0x1a0dc6) {
        _0xe1f85a = _0xe1f85a - 0x10c;
        let _0x13730c = _0xf44ffd[_0xe1f85a];
        return _0x13730c;
    }, a0_0xe1f8(_0x3ac928, _0x46a0f8);
}
function a0_0xf44f() {
    const _0x32ccaa = [
        'div.volume_slider',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'mousemove.igHelper',
        'tagName',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'Debug\x20Window',
        'status',
        '\x22\x20title=\x22',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'hasClass',
        'addedNodes',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'undefined\x20username',
        'parents',
        '88TdfRoC',
        'substr',
        'version',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'split',
        'data-href',
        'tempFetchRateLimit',
        'FEEDBACK',
        'updatenotification',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'is_video',
        'position',
        '/accounts/login',
        '\x22\x20/>',
        'host',
        'wheel',
        'G_CHECK_TIMESTAMP',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'Wololo!\x20New\x20version\x20released.',
        '</div></div>',
        'carousel_media:',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'wrap',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'getMonth',
        'LOAD_BLOB_ONE',
        'append',
        'data-username',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'label',
        '\x20child',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'load',
        '\x22><span\x20data-ih-locale=\x22',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'SKIP_VIEW_STORY_CONFIRM',
        '<a\x20media-id=\x22',
        'getBlobMediaWithQueryID()',
        'owner',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'G_VIDEO_VOLUME',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'GraphImage',
        '_INTRO',
        'createObjectURL',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'loop',
        'setAttribute',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'pageLoaded',
        'data-ih-locale',
        'xdt_api__v1__media__shortcode__web_info',
        'pointer',
        'toISOString',
        'innerHTML',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'controls',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'there\x20is\x20no\x20new\x20update',
        '5662lHpLIt',
        'query_hash',
        'trigger',
        '<div\x20class=\x22button_wrapper\x22>',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'user',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        '78hwxwoC',
        'currentURL',
        '_acnb',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'forEach',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        '*/*',
        'li._acaz',
        'name',
        'IMG',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'then',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'modify-thumbnail',
        'script',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'prop',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'https://www.instagram.com/',
        'parent',
        '37px',
        'SETTING',
        'DW_ALL',
        '</div>',
        'video_versions',
        'INTERNAL_CSS',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'RENAME_PUBLISH_DATE',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'faild',
        'next',
        'fadeOut',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'profile_pic_url',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'smooth',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'THUMBNAIL',
        '_ac3q',
        'NOTICE_UPDATE_CONTENT',
        '</a>',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        '\x0a-----\x0a\x0aLocation:\x20',
        'x1iyjqo2',
        'a[href]',
        'Main\x20Timer',
        '.IG_POPUP_DIG\x20.globalSettings',
        'Show\x20DOM\x20Tree',
        'play\x20playing',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'data-completed',
        'altKey',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        'vertical',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'css',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'datetime',
        'div',
        'HTML5_VIDEO_CONTROL',
        'LOAD_BLOB_RELOAD',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'www.',
        'video_resources',
        'data-loop',
        'data-name',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'href',
        '.circle_wrapper',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'FORCE_FETCH_ALL_RESOURCES',
        '#iv_image',
        'NOPATH',
        '/p/',
        'childList',
        'Feedback',
        'preventDefault',
        'version:',
        'THUMBNAIL_INTRO',
        'main\x20timer\x20re-register\x20completed',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'shortcode',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'registerMenuIds',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'match',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'taken_at_timestamp',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'data-snig',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '._acay\x20._acaz',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'LOAD_BLOB_MULTIPLE',
        'Download\x20All\x20Resources',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'pathname',
        '._acnb',
        'undefined',
        'pause',
        'data-modify',
        'removeAttr',
        'createElement',
        '.videoThumbnail',
        'mousedown',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'url',
        'grabbing',
        '1201104jfeDAv',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'DISABLE_VIDEO_LOOPING',
        'toLowerCase',
        'NO_CHECK_RESOURCE',
        'highlights',
        'scontent.cdninstagram.com',
        'text/plain',
        'filter',
        'keydown',
        'reject',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'carousel_media',
        'avatar',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'getTime',
        'getTranslationText\x20catch\x20error:',
        'GL_repeat',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'display_resources',
        'textContent',
        'replace',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'taken_at',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'IG\x20Debug\x20DOM\x20Tree',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'floor',
        'div\x20>\x20ul\x20li._acaz',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'push',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'DOMTree-',
        'removeClass',
        'stories',
        '.IG_DW_MAIN',
        'appendChild',
        'Cannot\x20find\x20video\x20URL.',
        'DONATE',
        'Display\x20HTML5\x20Video\x20Controller',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'mp4',
        '</button>',
        'getHighlightStories()',
        'https://www.instagram.com/reel/',
        '</span>\x20<input\x20id=\x22',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'time',
        'replaceAll',
        '#scrollWrapper',
        'volume',
        'height',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '\x22\x20class=\x22IG_REELS\x22>',
        'NEW_TAB',
        'config_width',
        'users',
        '\x22\x20class=\x22newTab\x22>',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '.IG_REELS_THUMBNAIL',
        'instagram.com/reels/',
        '<a\x20datetime=\x22',
        '._acay',
        'DOWNLOAD_DOM_TREE',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'videoVolume',
        'padEnd',
        'checked',
        'LOCALE_MANIFEST',
        'Thumbnail\x20button\x20already\x20inserted',
        '<div\x20class=\x22volume_slider\x20',
        '[data-ih-locale]',
        '__typename',
        '.IG_DWHISTORY_THUMBNAIL',
        'off',
        'a[href^=\x22/p/\x22]',
        'highlight',
        'children',
        'body\x20>\x20div\x20section:visible._ac0a',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'locale',
        'reels_media',
        'slice',
        'startsWith',
        '</span>\x20',
        'GL_logger',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '._aagv\x20img',
        'style',
        'DOWNLOAD_ALL',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'object',
        'stringify',
        '.IG_DWSTORY_ALL',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'data-path',
        '.IG_IMAGE_VIEWER',
        '/info/',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'en-US',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'div\x20>\x20ul._acay',
        'data-controls',
        'hasReferrer',
        'GL_username',
        'blob',
        'range',
        'val',
        '<input\x20value=\x22',
        '.IG_DWNEWTAB',
        'show',
        'last',
        'searchParams',
        'hide',
        'video',
        '--ig-track-progress:\x20',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'MODIFY_VIDEO_VOLUME',
        '\x22]\x20span',
        'copy',
        'isIntersecting',
        'Preference\x20Settings',
        'FORCE_RESOURCE_VIA_MEDIA',
        'volumechange',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'div[id^=\x22mount\x22]',
        'prev',
        '.IG_REELS_NEWTAB',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'attr',
        'hostname',
        '.IG_DWHISTORY',
        'get',
        'z-index',
        '42742WRsFMp',
        'image_versions2',
        '9xCeCNM',
        'a[href^=\x22/\x22]',
        'keys',
        'catch',
        '.IG_DWHISTORY_ALL',
        '.IG_DWPROFILE',
        'data',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'loadstart',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        '314538hCsIXn',
        'boolean',
        'getUserId()',
        'input',
        'SHOW_DOM_TREE',
        'data-remove-thumbnail',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'div#splash-screen',
        'pageY',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'userAgent',
        '<option\x20value=\x22',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'BATCH_DOWNLOAD_SELECTED',
        '\x22\x20data-globalIndex=\x22',
        'GL_registerEventList',
        'cursor',
        'BATCH_DOWNLOAD_DIRECT',
        '.xpgaw4o',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'Select\x20All',
        'body',
        'getDate',
        'remove',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'matchAll',
        'Feedback\x20Options',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'DOWNLOAD',
        '[data-snig]',
        '0px',
        'DIV',
        '</a></button><br/>',
        'remove-thumbnail',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'ended',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'GL_referrer',
        'Open\x20Image\x20In\x20Viewer',
        'NOTICE_UPDATE_TITLE',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'stp',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        'find',
        '</span></div>',
        'regenerated',
        'GraphSidecar',
        '_blank',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'DEBUG',
        'query_id',
        'log',
        '.button_wrapper',
        'getUserIdWithAgent()',
        'getBlobMedia()',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'width',
        'text',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'NONE',
        'code',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'Can\x20not\x20find\x20download\x20url.',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'Reload\x20Script',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'modify',
        'mouseup',
        'hidden',
        'top',
        'candidates',
        'first',
        'message',
        'G_RENAME_FORMAT',
        'REPORT_GITHUB',
        '#_SNLOAD',
        'username',
        'Request\x20with:',
        'change',
        'carousel_media:\x20undefined\x20username',
        'div:last-child',
        'img[referrerpolicy]',
        'node',
        '%22}',
        'getPostOwner()',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'language',
        'items',
        '.IG_DW_ALL_MAIN',
        'REPORT_DISCORD',
        'relative',
        'div.volume_slider\x20input',
        'post',
        'observe',
        'target',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'GET',
        'html',
        'addClass',
        'deltaY',
        'Remote\x20version:\x20',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '_acnf',
        'disconnect',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'max',
        'dragstart\x20drop',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'x1s85apg',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '#imageViewer',
        'feedback_message',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'isHighlightsStory',
        'response',
        '._acay\x20+\x20.x24i39r',
        '\x22\x20datetime=\x22',
        'originalEvent',
        'ALL_CHECK',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        '#article-id',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'getBlobMediaWithQuery()',
        'GM_unregisterMenuCommand',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'padStart',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'section\x20>\x20main[role=\x22main\x22]',
        'getMediaInfo()',
        'length',
        'GL_dataCache',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        '[role=\x22button\x22]',
        'pageX',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'GL_observer',
        'warn',
        'close',
        'isArray',
        'hd_profile_pic_url_info',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'a[data-needed=\x22direct\x22]',
        '.IG_REELS',
        'fileRenameFormat',
        'https://www.instagram.com/p/',
        'className',
        'includes',
        'data-modify-thumbnail',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'getUserHighSizeProfile()',
        'download',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'svg',
        'absolute',
        'sort',
        'parse',
        'finalUrl',
        'DIRECT_DOWNLOAD_ALL',
        'before',
        'after',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'select',
        '<div></div>',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'CLOSE',
        'media-id',
        'trigging',
        'timeupdate',
        'article',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'mouseenter',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'Found\x20post\x20container',
        'firstStarted',
        'Found\x20insert\x20point',
        'responseText',
        '\x20-</a>',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'isHomepage',
        'content',
        '.IG_NEWTAB_MAIN',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        'scrollBy',
        'fail',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'shortcode_media',
        'type',
        'video\x20+\x20div',
        'div[class][role=\x22button\x22]',
        'error',
        'display_url',
        'srcset',
        '.IG_POPUP_DIG\x20#post_info',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'reel',
        'canDownload',
        '.IG_THUMBNAIL_MAIN',
        'click',
        'CHECK_UPDATE',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'toUpperCase',
        'video_url',
        '.circle_wrapper\x20span',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'isDialog',
        'src',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20</div>',
        'left',
        '#iv_header',
        'getStories()',
        'isReels',
        '.IG_DWSTORY',
        'onReadyMyDW()\x20Timer',
        'lang',
        '3750910HenwAf',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'GraphVideo',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'ig_helper_notice',
        'which',
        'Close',
        'GL_postPath',
        '924010DuwIhp',
        '\x22\x20data-ih-locale-title=\x22',
        'https://i.instagram.com/api/v1/media/',
        'VID',
        'Fetch\x20from\x20memory\x20cache:',
        'x1lix1fw',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'AUTO_RENAME',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        '.IG_DWSTORY_THUMBNAIL',
        'bottom',
        'innerHeight',
        'stopPropagation',
        'SELECT_AND_COPY',
        '</span></label>',
        '608104uqCVVK',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'jpg',
        'flex',
        'img',
        'toString',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'each',
        'contextmenu',
        '20000',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'video\x20volume\x20changed\x20#slider',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'CHECK_UPDATE_MENU',
        '\x22\x20/></div>',
        'div[style][class]',
        'reels',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        '.IG_DWHINEWTAB',
        '.json',
        'map',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'createMediaListDOM',
        '.IG_POPUP_DIG',
        'data-type',
        'body\x20>\x20div\x20section._ac0a',
        'video\x20+\x20div\x20>\x20div',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        '#tempWrapper',
        '</a></button>',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'Donate',
        'trim',
        '.txt'
    ];
    a0_0xf44f = function () {
        return _0x32ccaa;
    };
    return a0_0xf44f();
}
(function (_0x147a4a, _0x12d2fe) {
    const _0x26f0e3 = a0_0xe1f8, _0x47a14e = _0x147a4a();
    while (!![]) {
        try {
            const _0x5ce5b5 = -parseInt(_0x26f0e3(0x303)) / 0x1 * (parseInt(_0x26f0e3(0x2c0)) / 0x2) + -parseInt(_0x26f0e3(0x188)) / 0x3 + parseInt(_0x26f0e3(0x28b)) / 0x4 + parseInt(_0x26f0e3(0x27c)) / 0x5 + parseInt(_0x26f0e3(0x30c)) / 0x6 * (-parseInt(_0x26f0e3(0x17b)) / 0x7) + -parseInt(_0x26f0e3(0x381)) / 0x8 * (parseInt(_0x26f0e3(0x17d)) / 0x9) + parseInt(_0x26f0e3(0x273)) / 0xa;
            if (_0x5ce5b5 === _0x12d2fe)
                break;
            else
                _0x47a14e['push'](_0x47a14e['shift']());
        } catch (_0x5bab63) {
            _0x47a14e['push'](_0x47a14e['shift']());
        }
    }
}(a0_0xf44f, 0x1f5ad), function (_0x4c4554) {
    setTimeout(() => {
        'use strict';
        const _0x49db9c = a0_0xe1f8;
        const _0x553be6 = {
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
            }, _0x43ed02 = [
                _0x49db9c(0x329),
                _0x49db9c(0x34d),
                _0x49db9c(0x357)
            ], _0x13a0d9 = {
                'DOWNLOAD': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
                'NEW_TAB': _0x49db9c(0x344),
                'THUMBNAIL': _0x49db9c(0x341),
                'DOWNLOAD_ALL': _0x49db9c(0x252),
                'CLOSE': _0x49db9c(0x2a7),
                'FULLSCREEN': _0x49db9c(0x371)
            }, _0x3df79d = 0xfa, _0x422ec1 = GM_getResourceText(_0x49db9c(0x327)), _0x148bfb = JSON[_0x49db9c(0x236)](GM_getResourceText(_0x49db9c(0x138)));
        var _0x1e6772 = {
            'videoVolume': GM_getValue('G_VIDEO_VOLUME') ? GM_getValue(_0x49db9c(0x2ea)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue('G_RENAME_FORMAT') ? GM_getValue(_0x49db9c(0x1da)) : _0x49db9c(0x224),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue('lang') || navigator[_0x49db9c(0x1e8)] || navigator['userLanguage'],
            'currentURL': location[_0x49db9c(0x355)],
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
                _0x58f5aa();
            })
        };
        _0x3e4274(), GM_addStyle(_0x422ec1), _0xb9ae32(), _0x1d9a6a(_0x1e6772[_0x49db9c(0x272)])['then'](_0x41d423 => {
            const _0x26b300 = _0x49db9c;
            _0x1e6772[_0x26b300(0x145)][_0x1e6772[_0x26b300(0x272)]] = _0x41d423, _0x4baf6a(), _0xb9ae32(), _0x2706ba(0x12c);
        })[_0x49db9c(0x180)](_0x2a00b9 => {
            const _0x1d752e = _0x49db9c;
            _0xb9ae32(), _0x2706ba(0x12c), !_0x1e6772[_0x1d752e(0x272)]['startsWith']('en') && console[_0x1d752e(0x25a)]('getTranslationText\x20catch\x20error:', _0x2a00b9);
        }), _0x52fd98('Script\x20Loaded', GM_info[_0x49db9c(0x31c)][_0x49db9c(0x314)], _0x49db9c(0x35f), GM_info['script'][_0x49db9c(0x2c2)]);
        var _0x16f139 = setInterval(function () {
            const _0xa55799 = _0x49db9c;
            if (_0x4c4554(_0xa55799(0x18f))[_0xa55799(0x218)] > 0x0 && !_0x4c4554(_0xa55799(0x18f))['is'](':hidden') || location[_0xa55799(0x375)][_0xa55799(0x367)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0xa55799(0x177)][_0xa55799(0x148)](_0xa55799(0x34e))) {
                _0x1e6772['pageLoaded'] = ![];
                return;
            }
            if (_0x1e6772[_0xa55799(0x30d)] != location[_0xa55799(0x355)] || !_0x1e6772[_0xa55799(0x249)] || !_0x1e6772['pageLoaded']) {
                console[_0xa55799(0x1bc)](_0xa55799(0x33d), _0xa55799(0x242)), clearInterval(_0x1e6772[_0xa55799(0x395)]), _0x1e6772[_0xa55799(0x2f6)] = ![], _0x1e6772['firstStarted'] = !![], _0x1e6772[_0xa55799(0x30d)] = location[_0xa55799(0x355)], _0x1e6772[_0xa55799(0x21e)][_0xa55799(0x1f9)]();
                if (location['href'][_0xa55799(0x148)](_0xa55799(0x22a)) || location[_0xa55799(0x375)]['match'](/^\/(.*?)\/(p|reel)\//ig) || location[_0xa55799(0x355)][_0xa55799(0x148)](_0xa55799(0x120))) {
                    _0x1e6772[_0xa55799(0x219)][_0xa55799(0x116)] = {}, _0x1e6772[_0xa55799(0x219)]['highlights'] = {}, _0x52fd98(_0xa55799(0x269));
                    var _0x21bd17 = setInterval(() => {
                        const _0x3dea37 = _0xa55799;
                        _0x4c4554(_0x3dea37(0x1f7))[_0x3dea37(0x218)] > 0x0 && (clearInterval(_0x21bd17), setTimeout(() => {
                            _0x58f5aa(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x1e6772[_0xa55799(0x2f6)] = !![];
                }
                location[_0xa55799(0x355)][_0xa55799(0x148)]('https://www.instagram.com/reels/') && (_0x52fd98(_0xa55799(0x26f)), setTimeout(() => {
                    _0x43ab85(![]);
                }, 0x96), _0x1e6772[_0xa55799(0x2f6)] = !![]);
                if (location['href'][_0xa55799(0x2c5)]('?')[0x0] == _0xa55799(0x320)) {
                    _0x1e6772[_0xa55799(0x219)][_0xa55799(0x116)] = {}, _0x1e6772[_0xa55799(0x219)][_0xa55799(0x387)] = {};
                    let _0x261f9d = _0x1e6772[_0xa55799(0x1ad)]?.[_0xa55799(0x367)](/^\/(stories|highlights)\//ig) != null;
                    _0x52fd98(_0xa55799(0x24e), _0x261f9d), setTimeout(() => {
                        const _0x1befc2 = _0xa55799;
                        _0x58f5aa(![], _0x261f9d);
                        const _0x5f0cb9 = _0x4c4554('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.[_0x1befc2(0x321)]()[0x0];
                        _0x5f0cb9 && _0x1e6772[_0x1befc2(0x21e)][_0x1befc2(0x1ef)](_0x5f0cb9, { 'childList': !![] });
                    }, 0x96), _0x1e6772[_0xa55799(0x2f6)] = !![];
                }
                _0x4c4554(_0xa55799(0x2bd))[_0xa55799(0x218)] && location[_0xa55799(0x375)][_0xa55799(0x367)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0xa55799(0x375)][_0xa55799(0x367)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x52fd98('isProfile'), setTimeout(() => {
                    _0x123339(![]);
                }, 0x96), _0x1e6772[_0xa55799(0x2f6)] = !![]);
                if (!_0x1e6772[_0xa55799(0x2f6)]) {
                    if (location[_0xa55799(0x355)][_0xa55799(0x367)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x1e6772[_0xa55799(0x219)][_0xa55799(0x387)] = {}, _0x52fd98(_0xa55799(0x204)), _0x4fdac7(![]), _0x1e6772[_0xa55799(0x395)] = setInterval(() => {
                            _0x173b2e(![]);
                        }, _0x3df79d), _0x4c4554(_0xa55799(0x178))[_0xa55799(0x218)] && setTimeout(() => {
                            const _0x58fbef = _0xa55799;
                            if (_0x553be6[_0x58fbef(0x2e5)]) {
                                var _0x300d61 = _0x4c4554(_0x58fbef(0x2e9))['filter'](function () {
                                    const _0x10a113 = _0x58fbef;
                                    return _0x4c4554(this)[_0x10a113(0x141)]()[_0x10a113(0x218)] === 0x0 && this[_0x10a113(0x398)][_0x10a113(0x2ae)]() !== '';
                                });
                                _0x300d61?.[_0x58fbef(0x305)](_0x58fbef(0x262));
                            }
                            _0x1e6772['pageLoaded'] = !![];
                        }, 0x96);
                    else
                        location[_0xa55799(0x355)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x52fd98('isStory'), _0x4c4554(_0xa55799(0x12e))['length'] > 0x0 && (_0x4c4554(_0xa55799(0x270))[_0xa55799(0x19f)](), _0x4c4554('.IG_DWNEWTAB')[_0xa55799(0x19f)](), _0x4c4554('.IG_DWSTORY_THUMBNAIL')[_0xa55799(0x218)] && _0x4c4554(_0xa55799(0x285))[_0xa55799(0x19f)](), _0xd14af3(![]), setTimeout(() => {
                            _0xd14af3(![]);
                        }, 0x96)), _0x4c4554(_0xa55799(0x270))[_0xa55799(0x218)] && setTimeout(() => {
                            const _0x2ee29a = _0xa55799;
                            if (_0x553be6[_0x2ee29a(0x2e5)]) {
                                var _0x54c05a = _0x4c4554(_0x2ee29a(0x2e9))['filter'](function () {
                                    const _0x4239af = _0x2ee29a;
                                    return _0x4c4554(this)[_0x4239af(0x141)]()[_0x4239af(0x218)] === 0x0 && this[_0x4239af(0x398)][_0x4239af(0x2ae)]() !== '';
                                });
                                _0x54c05a?.[_0x2ee29a(0x262)]();
                            }
                            _0x1e6772[_0x2ee29a(0x2f6)] = !![];
                        }, 0x96)) : (_0x1e6772['pageLoaded'] = ![], _0x4c4554('.IG_DWSTORY')[_0xa55799(0x218)] && _0x4c4554('.IG_DWSTORY')[_0xa55799(0x19f)](), _0x4c4554(_0xa55799(0x152))[_0xa55799(0x218)] && _0x4c4554(_0xa55799(0x152))[_0xa55799(0x19f)](), _0x4c4554(_0xa55799(0x162))[_0xa55799(0x218)] && _0x4c4554(_0xa55799(0x162))[_0xa55799(0x19f)](), _0x4c4554(_0xa55799(0x285))['length'] && _0x4c4554(_0xa55799(0x285))['remove'](), _0x4c4554(_0xa55799(0x178))[_0xa55799(0x218)] && _0x4c4554('.IG_DWHISTORY')[_0xa55799(0x19f)](), _0x4c4554(_0xa55799(0x181))[_0xa55799(0x218)] && _0x4c4554(_0xa55799(0x181))['remove'](), _0x4c4554(_0xa55799(0x29d))[_0xa55799(0x218)] && _0x4c4554(_0xa55799(0x29d))[_0xa55799(0x19f)](), _0x4c4554(_0xa55799(0x13d))[_0xa55799(0x218)] && _0x4c4554(_0xa55799(0x13d))[_0xa55799(0x19f)]());
                }
                _0x2706ba(0x12c), _0x1e6772[_0xa55799(0x1ad)] = new URL(location[_0xa55799(0x355)])[_0xa55799(0x375)];
            }
        }, _0x3df79d);
        async function _0x28a499() {
            const _0x437f0e = _0x49db9c;
            _0x11dd8b(!![]);
            let _0x26d42f = new Date()['getTime'](), _0x2f0ad5 = Math[_0x437f0e(0x10e)](_0x26d42f / 0x3e8), _0x3ba33d = location[_0x437f0e(0x355)][_0x437f0e(0x399)](/\/$/ig, '')[_0x437f0e(0x2c5)]('/')['at'](-0x1), _0x1c8bf7 = await _0x2a2e74(_0x3ba33d), _0x3cf8f1 = _0x1c8bf7['data'][_0x437f0e(0x146)][0x0][_0x437f0e(0x2e8)][_0x437f0e(0x1dd)], _0x4e9771 = 0x0;
            _0x35b6c9(_0x4e9771, _0x1c8bf7[_0x437f0e(0x183)][_0x437f0e(0x146)][0x0][_0x437f0e(0x1e9)][_0x437f0e(0x218)]), _0x1c8bf7[_0x437f0e(0x183)][_0x437f0e(0x146)][0x0][_0x437f0e(0x1e9)]['forEach']((_0x528e33, _0x5c1128) => {
                setTimeout(() => {
                    const _0x5f4c18 = a0_0xe1f8;
                    _0x553be6[_0x5f4c18(0x329)] && (_0x2f0ad5 = _0x528e33[_0x5f4c18(0x36b)]), _0x528e33[_0x5f4c18(0x397)][_0x5f4c18(0x235)](function (_0x3c6c8c, _0xcb090) {
                        const _0x559adf = _0x5f4c18;
                        if (_0x3c6c8c[_0x559adf(0x12b)] < _0xcb090[_0x559adf(0x12b)])
                            return 0x1;
                        if (_0x3c6c8c['config_width'] > _0xcb090[_0x559adf(0x12b)])
                            return -0x1;
                        return 0x0;
                    }), _0x528e33['is_video'] ? _0x14dcb5(_0x528e33[_0x5f4c18(0x34f)][0x0][_0x5f4c18(0x26a)], _0x3cf8f1, _0x5f4c18(0x116), _0x2f0ad5, _0x5f4c18(0x11d), _0x528e33['id'])[_0x5f4c18(0x318)](() => {
                        const _0x4846e7 = _0x5f4c18;
                        _0x35b6c9(++_0x4e9771, _0x1c8bf7[_0x4846e7(0x183)]['reels_media'][0x0][_0x4846e7(0x1e9)]['length']);
                    }) : _0x14dcb5(_0x528e33[_0x5f4c18(0x397)][0x0][_0x5f4c18(0x26a)], _0x3cf8f1, _0x5f4c18(0x116), _0x2f0ad5, _0x5f4c18(0x28d), _0x528e33['id'])[_0x5f4c18(0x318)](() => {
                        const _0x4c895e = _0x5f4c18;
                        _0x35b6c9(++_0x4e9771, _0x1c8bf7[_0x4c895e(0x183)][_0x4c895e(0x146)][0x0][_0x4c895e(0x1e9)]['length']);
                    });
                }, 0x64 * _0x5c1128);
            });
        }
        async function _0x4fdac7(_0x4b16cf, _0x274254) {
            const _0x1d8909 = _0x49db9c;
            var _0x2cd9f4 = _0x4c4554(_0x1d8909(0x187))['filter'](function () {
                const _0x7b95b2 = _0x1d8909;
                return _0x4c4554(this)[_0x7b95b2(0x176)](_0x7b95b2(0x355))[_0x7b95b2(0x2c5)]('/')['filter'](_0x435188 => _0x435188[_0x7b95b2(0x218)] > 0x0)[_0x7b95b2(0x218)] === 0x1;
            })['first']()[_0x1d8909(0x176)]('href')[_0x1d8909(0x2c5)]('/')[_0x1d8909(0x38a)](_0x155e7a => _0x155e7a[_0x1d8909(0x218)] > 0x0)['at'](0x0);
            if (_0x4b16cf) {
                let _0x890b34 = new Date()[_0x1d8909(0x393)](), _0x527533 = Math['floor'](_0x890b34 / 0x3e8), _0x680a4b = location[_0x1d8909(0x355)][_0x1d8909(0x399)](/\/$/ig, '')[_0x1d8909(0x2c5)]('/')['at'](-0x1), _0x3a5b5d = _0x4c4554(_0x1d8909(0x2f1))['length'] || _0x4c4554(_0x1d8909(0x1b0))[_0x1d8909(0x218)] || _0x4c4554('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x1d8909(0x1b3)](_0x1d8909(0x374))['length'], _0x38e1eb = 0x0;
                _0x11dd8b(!![]);
                if (_0x1e6772[_0x1d8909(0x219)]['highlights'][_0x680a4b]) {
                    _0x52fd98(_0x1d8909(0x280), _0x680a4b);
                    let _0x4614c1 = _0x1e6772['GL_dataCache']['highlights'][_0x680a4b][_0x1d8909(0x183)][_0x1d8909(0x146)][0x0][_0x1d8909(0x1e9)][_0x1d8909(0x218)];
                    _0x2cd9f4 = _0x1e6772[_0x1d8909(0x219)][_0x1d8909(0x387)][_0x680a4b][_0x1d8909(0x183)][_0x1d8909(0x146)][0x0][_0x1d8909(0x2e8)][_0x1d8909(0x1dd)], _0x38e1eb = _0x1e6772[_0x1d8909(0x219)][_0x1d8909(0x387)][_0x680a4b][_0x1d8909(0x183)]['reels_media'][0x0][_0x1d8909(0x1e9)][_0x4614c1 - _0x3a5b5d];
                } else {
                    let _0x352df3 = await _0x2a2e74(_0x680a4b), _0x3de47c = _0x352df3[_0x1d8909(0x183)][_0x1d8909(0x146)][0x0]['items']['length'];
                    _0x2cd9f4 = _0x352df3[_0x1d8909(0x183)][_0x1d8909(0x146)][0x0][_0x1d8909(0x2e8)][_0x1d8909(0x1dd)], _0x38e1eb = _0x352df3[_0x1d8909(0x183)][_0x1d8909(0x146)][0x0][_0x1d8909(0x1e9)][_0x3de47c - _0x3a5b5d], _0x1e6772['GL_dataCache'][_0x1d8909(0x387)][_0x680a4b] = _0x352df3;
                }
                _0x52fd98('onHighlightsStory', _0x680a4b, _0x1e6772[_0x1d8909(0x219)][_0x1d8909(0x387)][_0x680a4b]);
                _0x553be6[_0x1d8909(0x329)] && (_0x527533 = _0x38e1eb[_0x1d8909(0x36b)]);
                if (_0x553be6[_0x1d8909(0x16f)] && !_0x1e6772['tempFetchRateLimit']) {
                    let _0x138342 = await _0xbaab7e(_0x38e1eb['id']);
                    _0x138342[_0x1d8909(0x2b8)] === 'ok' ? _0x138342['items'][0x0][_0x1d8909(0x326)] ? _0x274254 ? _0x2bb277(_0x138342[_0x1d8909(0x1e9)][0x0][_0x1d8909(0x326)][0x0]['url']) : _0x14dcb5(_0x138342[_0x1d8909(0x1e9)][0x0][_0x1d8909(0x326)][0x0][_0x1d8909(0x37f)], _0x2cd9f4, _0x1d8909(0x387), _0x527533, _0x1d8909(0x11d), _0x138342[_0x1d8909(0x1e9)][0x0]['id']) : _0x274254 ? _0x2bb277(_0x138342[_0x1d8909(0x1e9)][0x0][_0x1d8909(0x17c)]['candidates'][0x0][_0x1d8909(0x37f)]) : _0x14dcb5(_0x138342[_0x1d8909(0x1e9)][0x0][_0x1d8909(0x17c)]['candidates'][0x0]['url'], _0x2cd9f4, 'highlights', _0x527533, _0x1d8909(0x28d), _0x138342[_0x1d8909(0x1e9)][0x0]['id']) : (_0x553be6[_0x1d8909(0x34d)] ? (delete _0x1e6772[_0x1d8909(0x219)]['highlights'][_0x680a4b], _0x1e6772[_0x1d8909(0x2c7)] = !![], _0x4fdac7(!![], _0x274254)) : alert(_0x1d8909(0x14f) + _0x138342[_0x1d8909(0x1d9)]), _0x52fd98(_0x138342));
                } else
                    _0x38e1eb['is_video'] ? _0x274254 ? _0x2bb277(_0x38e1eb[_0x1d8909(0x34f)]['at'](-0x1)['src'], _0x2cd9f4) : _0x14dcb5(_0x38e1eb['video_resources']['at'](-0x1)[_0x1d8909(0x26a)], _0x2cd9f4, _0x1d8909(0x387), _0x527533, _0x1d8909(0x11d), _0x38e1eb['id']) : _0x274254 ? _0x2bb277(_0x38e1eb[_0x1d8909(0x397)]['at'](-0x1)['src'], _0x2cd9f4) : _0x14dcb5(_0x38e1eb[_0x1d8909(0x397)]['at'](-0x1)[_0x1d8909(0x26a)], _0x2cd9f4, 'highlights', _0x527533, _0x1d8909(0x28d), _0x38e1eb['id']), _0x1e6772['tempFetchRateLimit'] = ![];
                _0x11dd8b(![]);
            } else {
                if (!_0x4c4554(_0x1d8909(0x178))[_0x1d8909(0x218)]) {
                    let _0x276c34 = null;
                    _0x4c4554(_0x1d8909(0x2a5))[_0x1d8909(0x218)] > 0x0 ? _0x276c34 = _0x4c4554(_0x1d8909(0x142)) : (_0x276c34 = _0x4c4554(_0x1d8909(0x185)), _0x276c34[_0x1d8909(0x347)](_0x1d8909(0x2cd), _0x1d8909(0x1ec)));
                    if (_0x276c34[_0x1d8909(0x218)] === 0x0) {
                        let _0x199581 = _0x4c4554(_0x1d8909(0x2fc)), _0x5620f6 = 0x0;
                        _0x199581[_0x1d8909(0x292)](function () {
                            const _0x54e3da = _0x1d8909;
                            _0x4c4554(this)['width']() > _0x5620f6 && (_0x5620f6 = _0x4c4554(this)['width'](), _0x276c34 = _0x4c4554(this)[_0x54e3da(0x141)](_0x54e3da(0x34a))[_0x54e3da(0x1d8)]());
                        });
                    }
                    if (_0x276c34 != null) {
                        _0x276c34['append'](_0x1d8909(0x153) + _0x1ca060('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x13a0d9[_0x1d8909(0x1a4)] + _0x1d8909(0x325)), _0x276c34[_0x1d8909(0x2dc)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x1ca060('NEW_TAB') + _0x1d8909(0x309) + _0x13a0d9[_0x1d8909(0x12a)] + _0x1d8909(0x325));
                        let _0x35610c = _0x2286d6(_0x2cd9f4);
                        _0x35610c[_0x1d8909(0x218)] > 0x1 && _0x276c34[_0x1d8909(0x2dc)](_0x1d8909(0x339) + _0x1ca060(_0x1d8909(0x324)) + _0x1d8909(0x362) + _0x13a0d9[_0x1d8909(0x14e)] + _0x1d8909(0x325)), _0x276c34[_0x1d8909(0x1b3)](_0x1d8909(0x1e2))[_0x1d8909(0x292)](function () {
                            const _0x48ed47 = _0x1d8909;
                            _0x4c4554(this)['on'](_0x48ed47(0x2e2), function () {
                                const _0x2b6c90 = _0x48ed47;
                                !_0x4c4554(this)[_0x2b6c90(0x183)](_0x2b6c90(0x1a9)) && (_0x276c34[_0x2b6c90(0x1b3)](_0x2b6c90(0x13d))['length'] === 0x0 ? (_0x4c4554(this)[_0x2b6c90(0x176)](_0x2b6c90(0x18d), !![]), _0x4c4554('.IG_DWHISTORY_THUMBNAIL')['remove'](), _0x52fd98('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x4c4554(this)[_0x2b6c90(0x176)](_0x2b6c90(0x18d), !![]), _0x52fd98(_0x2b6c90(0x251))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x173b2e(_0x5c1806) {
            const _0x11b2ff = _0x49db9c;
            if (_0x5c1806) {
                let _0x1b43cd = new Date()[_0x11b2ff(0x393)](), _0x134cb1 = Math[_0x11b2ff(0x10e)](_0x1b43cd / 0x3e8), _0x1fb1c9 = location['href'][_0x11b2ff(0x399)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x312bef = '', _0x2c6601 = _0x4c4554(_0x11b2ff(0x2f1))[_0x11b2ff(0x218)] || _0x4c4554(_0x11b2ff(0x1b0))['length'] || _0x4c4554(_0x11b2ff(0x2ac))[_0x11b2ff(0x1b3)](_0x11b2ff(0x374))[_0x11b2ff(0x218)], _0x2bddc6 = '';
                _0x11dd8b(!![]);
                if (_0x1e6772[_0x11b2ff(0x219)][_0x11b2ff(0x387)][_0x1fb1c9]) {
                    _0x52fd98('Fetch\x20from\x20memory\x20cache:', _0x1fb1c9);
                    let _0x264e57 = _0x1e6772[_0x11b2ff(0x219)][_0x11b2ff(0x387)][_0x1fb1c9]['data'][_0x11b2ff(0x146)][0x0][_0x11b2ff(0x1e9)][_0x11b2ff(0x218)];
                    _0x312bef = _0x1e6772[_0x11b2ff(0x219)][_0x11b2ff(0x387)][_0x1fb1c9][_0x11b2ff(0x183)][_0x11b2ff(0x146)][0x0][_0x11b2ff(0x2e8)][_0x11b2ff(0x1dd)], _0x2bddc6 = _0x1e6772['GL_dataCache'][_0x11b2ff(0x387)][_0x1fb1c9][_0x11b2ff(0x183)][_0x11b2ff(0x146)][0x0]['items'][_0x264e57 - _0x2c6601];
                } else {
                    let _0x39faca = await _0x2a2e74(_0x1fb1c9), _0x56ca55 = _0x39faca[_0x11b2ff(0x183)][_0x11b2ff(0x146)][0x0]['items']['length'];
                    _0x312bef = _0x39faca[_0x11b2ff(0x183)][_0x11b2ff(0x146)][0x0][_0x11b2ff(0x2e8)][_0x11b2ff(0x1dd)], _0x2bddc6 = _0x39faca[_0x11b2ff(0x183)]['reels_media'][0x0][_0x11b2ff(0x1e9)][_0x56ca55 - _0x2c6601], _0x1e6772[_0x11b2ff(0x219)]['highlights'][_0x1fb1c9] = _0x39faca;
                }
                _0x553be6['RENAME_PUBLISH_DATE'] && (_0x134cb1 = _0x2bddc6['taken_at_timestamp']);
                if (_0x553be6['FORCE_RESOURCE_VIA_MEDIA'] && !_0x1e6772[_0x11b2ff(0x2c7)]) {
                    let _0x4f3acd = await _0xbaab7e(_0x2bddc6['id']);
                    _0x4f3acd[_0x11b2ff(0x2b8)] === 'ok' ? _0x14dcb5(_0x4f3acd[_0x11b2ff(0x1e9)][0x0][_0x11b2ff(0x17c)]['candidates'][0x0][_0x11b2ff(0x37f)], _0x312bef, 'highlights', _0x134cb1, _0x11b2ff(0x28d), _0x1fb1c9) : (_0x553be6[_0x11b2ff(0x34d)] ? (delete _0x1e6772[_0x11b2ff(0x219)][_0x11b2ff(0x387)][_0x1fb1c9], _0x1e6772[_0x11b2ff(0x2c7)] = !![], _0x173b2e(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x4f3acd[_0x11b2ff(0x1d9)]), _0x52fd98(_0x4f3acd));
                } else
                    _0x14dcb5(_0x2bddc6[_0x11b2ff(0x397)]['at'](-0x1)[_0x11b2ff(0x26a)], _0x312bef, _0x11b2ff(0x387), _0x134cb1, 'jpg', _0x1fb1c9), _0x1e6772[_0x11b2ff(0x2c7)] = ![];
                _0x11dd8b(![]);
            } else {
                if (_0x4c4554('body\x20>\x20div\x20section\x20video.xh8yej3')[_0x11b2ff(0x218)]) {
                    if (!_0x4c4554(_0x11b2ff(0x13d))['length']) {
                        let _0x3b166e = null;
                        _0x4c4554('body\x20>\x20div\x20section._ac0a')['length'] > 0x0 ? _0x3b166e = _0x4c4554(_0x11b2ff(0x142)) : (_0x3b166e = _0x4c4554(_0x11b2ff(0x185)), _0x3b166e[_0x11b2ff(0x347)](_0x11b2ff(0x2cd), _0x11b2ff(0x1ec)));
                        if (_0x3b166e['length'] === 0x0) {
                            let _0x1dbd3f = _0x4c4554(_0x11b2ff(0x2fc)), _0x57bf7d = 0x0;
                            _0x1dbd3f[_0x11b2ff(0x292)](function () {
                                const _0xdbaaf2 = _0x11b2ff;
                                _0x4c4554(this)[_0xdbaaf2(0x1c3)]() > _0x57bf7d && (_0x57bf7d = _0x4c4554(this)[_0xdbaaf2(0x1c3)](), _0x3b166e = _0x4c4554(this)[_0xdbaaf2(0x141)]('div')['first']());
                            });
                        }
                        _0x3b166e != null && _0x3b166e[_0x11b2ff(0x2dc)](_0x11b2ff(0x36f) + _0x1ca060(_0x11b2ff(0x360)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x13a0d9[_0x11b2ff(0x335)] + _0x11b2ff(0x325));
                    }
                } else
                    _0x4c4554(_0x11b2ff(0x13d))[_0x11b2ff(0x19f)]();
            }
        }
        function _0x58f5aa(_0x561557, _0x5816b6) {
            const _0x5379f1 = _0x49db9c;
            _0x5816b6 === !![] && (_0x52fd98(_0x5379f1(0x15c), _0x5379f1(0x1b5)), _0x4c4554(_0x5379f1(0x2c4))[_0x5379f1(0x38a)](function () {
                const _0x1d6be7 = _0x5379f1;
                return _0x4c4554(this)[_0x1d6be7(0x1b3)](_0x1d6be7(0x117))[_0x1d6be7(0x218)] === 0x0;
            })['removeAttr']('data-snig'));
            if (_0x561557 == ![]) {
                const _0x33db49 = 0x64;
                let _0xfe2c8a = 0x0;
                var _0x3ff76c = setInterval(() => {
                    const _0x56a7ee = _0x5379f1;
                    (_0xfe2c8a > _0x33db49 || _0x4c4554(_0x56a7ee(0x1a0))['length'] > 0x0) && (clearInterval(_0x3ff76c), _0xfe2c8a > _0x33db49 && console[_0x56a7ee(0x21f)](_0x56a7ee(0x271), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x52fd98(_0x56a7ee(0x271), 'repeating\x20to\x20call\x20detection\x20createDownloadButton()'), _0x333e25(), _0xfe2c8a++;
                }, 0x32);
            } else
                _0x333e25();
        }
        function _0x5a6bad(_0x3fb89d) {
            const _0xd1057 = _0x49db9c;
            _0x553be6[_0xd1057(0x384)] && _0x3fb89d['find'](_0xd1057(0x167))['each'](function () {
                const _0x20e71a = _0xd1057;
                _0x4c4554(this)['on'](_0x20e71a(0x1ab), function () {
                    const _0x22a05f = _0x20e71a;
                    !_0x4c4554(this)[_0x22a05f(0x183)](_0x22a05f(0x2f3)) && (_0x4c4554(this)[_0x22a05f(0x176)](_0x22a05f(0x350), !![]), this[_0x22a05f(0x378)](), _0x52fd98(_0x22a05f(0x396)));
                });
            });
            _0x553be6['MODIFY_VIDEO_VOLUME'] && _0x3fb89d[_0xd1057(0x1b3)](_0xd1057(0x167))['each'](function () {
                const _0x2f3024 = _0xd1057;
                _0x4c4554(this)['on'](_0x2f3024(0x340), function () {
                    const _0x38d5da = _0x2f3024;
                    !_0x4c4554(this)[_0x38d5da(0x183)](_0x38d5da(0x1d3)) && (_0x4c4554(this)[_0x38d5da(0x176)](_0x38d5da(0x379), !![]), this[_0x38d5da(0x126)] = _0x1e6772['videoVolume'], _0x52fd98(_0x38d5da(0x369)));
                });
            });
            _0x553be6[_0xd1057(0x34b)] && _0x3fb89d[_0xd1057(0x1b3)](_0xd1057(0x167))['each'](function () {
                const _0x51bd61 = _0xd1057;
                if (!_0x4c4554(this)['data'](_0x51bd61(0x2fd))) {
                    let _0x11545a = _0x4c4554(this);
                    _0x52fd98('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x553be6[_0x51bd61(0x16a)] && (this[_0x51bd61(0x126)] = _0x1e6772[_0x51bd61(0x135)], _0x4c4554(this)['on']('loadstart', function () {
                        const _0x5a7ed7 = _0x51bd61;
                        this['volume'] = _0x1e6772[_0x5a7ed7(0x135)];
                    })), _0x4c4554(this)['on']('contextmenu', function (_0x35d8e1) {
                        const _0x5c09cb = _0x51bd61;
                        _0x35d8e1[_0x5c09cb(0x35e)](), _0x11545a[_0x5c09cb(0x347)](_0x5c09cb(0x17a), '-1'), _0x11545a['removeAttr']('controls');
                    }), _0x4c4554(this)[_0x51bd61(0x321)]()[_0x51bd61(0x1b3)]('video\x20+\x20div\x20>\x20div')['first']()['on'](_0x51bd61(0x293), function (_0x40d9b1) {
                        const _0x2eb06f = _0x51bd61;
                        _0x40d9b1[_0x2eb06f(0x35e)](), _0x11545a['css'](_0x2eb06f(0x17a), '2'), _0x11545a['attr']('controls', !![]);
                    }), _0x4c4554(this)['on'](_0x51bd61(0x170), function () {
                        const _0x3a956e = _0x51bd61;
                        let _0x618f48 = _0x4c4554(this)[_0x3a956e(0x321)]()[_0x3a956e(0x1b3)](_0x3a956e(0x2a6))[_0x3a956e(0x1b3)](_0x3a956e(0x364))['filter'](function (_0x5a5f3f) {
                            const _0x1292c5 = _0x3a956e;
                            return _0x4c4554(this)[_0x1292c5(0x1c3)]() <= 0x40 && _0x4c4554(this)['height']() <= 0x40 && _0x4c4554(this)[_0x1292c5(0x1b3)](_0x1292c5(0x300))['length'] > 0x0;
                        });
                        var _0x5e8817 = _0x618f48['find'](_0x3a956e(0x144))[_0x3a956e(0x218)] === 0x0;
                        this['muted'] != _0x5e8817 && (this['volume'] = _0x1e6772[_0x3a956e(0x135)], _0x618f48?.[_0x3a956e(0x305)](_0x3a956e(0x262))), _0x4c4554(this)[_0x3a956e(0x176)]('data-completed') && (_0x1e6772[_0x3a956e(0x135)] = this['volume'], GM_setValue('G_VIDEO_VOLUME', this[_0x3a956e(0x126)])), this[_0x3a956e(0x126)] == _0x1e6772['videoVolume'] && _0x4c4554(this)['attr']('data-completed', !![]);
                    }), _0x4c4554(this)[_0x51bd61(0x347)](_0x51bd61(0x2cd), _0x51bd61(0x234)), _0x4c4554(this)[_0x51bd61(0x347)]('z-index', '2'), _0x4c4554(this)[_0x51bd61(0x176)](_0x51bd61(0x15b), !![]), _0x4c4554(this)[_0x51bd61(0x176)]('controls', !![]);
                }
            });
            var _0x2db429 = _0x3fb89d[_0xd1057(0x1b3)](_0xd1057(0x167)), _0x44ba94 = _0x3fb89d['find']('video\x20+\x20div\x20>\x20div')[_0xd1057(0x1d8)]();
            _0x4f726e(_0x2db429, _0x44ba94, _0xd1057(0x1ee), _0xd1057(0x286));
        }
        ;
        function _0x333e25() {
            const _0x128231 = _0x49db9c;
            _0x4c4554(_0x128231(0x36d))[_0x128231(0x29f)](function (_0x3fe67a) {
                const _0x544a2b = _0x128231;
                return _0x4c4554(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x4c4554(this)['parent']()[_0x544a2b(0x321)]()[_0x544a2b(0x321)]()[_0x544a2b(0x321)]()[0x0] : this;
            })['filter'](function () {
                const _0x56c82a = _0x128231;
                return _0x4c4554(this)[_0x56c82a(0x127)]() > 0x0 && _0x4c4554(this)[_0x56c82a(0x1c3)]() > 0x0;
            })['each'](function (_0x406b81) {
                const _0x20679c = _0x128231;
                if (!_0x4c4554(this)['attr'](_0x20679c(0x36e)) && !_0x4c4554(this)[_0x20679c(0x2bb)]('x1iyjqo2') && !_0x4c4554(this)[_0x20679c(0x141)](_0x20679c(0x244))?.[_0x20679c(0x2bb)](_0x20679c(0x33b)) && _0x4c4554(this)[_0x20679c(0x2bf)]('div#scrollview')[_0x20679c(0x218)] === 0x0) {
                    _0x52fd98(_0x20679c(0x248), _0x4c4554(this));
                    const _0x3ab8b1 = _0x4c4554(this), _0x42494c = this['tagName'], _0x594d1c = _0x20679c(0x370);
                    var _0x1444e3;
                    if (_0x42494c === 'DIV' && _0x406b81 != 0x0)
                        return;
                    const _0x17599d = _0x3ab8b1[_0x20679c(0x141)]('div')[_0x20679c(0x141)]('div');
                    if (_0x17599d['length'] === 0x0)
                        return;
                    _0x52fd98(_0x20679c(0x24a), _0x17599d);
                    if (_0x3ab8b1[_0x20679c(0x1b3)](_0x20679c(0x132))[_0x20679c(0x218)] > 0x0) {
                        _0x3ab8b1[_0x20679c(0x1b3)](_0x20679c(0x206))[_0x20679c(0x218)] > 0x0 && _0x3ab8b1[_0x20679c(0x1b3)](_0x20679c(0x206))[_0x20679c(0x347)](_0x20679c(0x1d6), '37px');
                        const _0x31b646 = _0x3ab8b1['find'](_0x20679c(0x132))[_0x20679c(0x1d8)]()[_0x20679c(0x321)]()[0x0];
                        var _0x485371 = new MutationObserver(function () {
                            const _0x4b0f2e = _0x20679c;
                            _0x3ab8b1['find'](_0x4b0f2e(0x206))[_0x4b0f2e(0x347)](_0x4b0f2e(0x1d6), _0x4b0f2e(0x322));
                        });
                        _0x485371['observe'](_0x31b646, { 'childList': !![] });
                    }
                    _0x17599d['eq'](_0x42494c === _0x20679c(0x1a7) ? 0x0 : _0x17599d[_0x20679c(0x218)] - 0x2)[_0x20679c(0x2dc)](_0x20679c(0x306));
                    const _0x52bae1 = '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x1ca060('DW') + _0x20679c(0x2b6) + _0x13a0d9[_0x20679c(0x1a4)] + '</div>', _0x179bb3 = '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x1ca060(_0x20679c(0x12a)) + '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>' + _0x13a0d9[_0x20679c(0x12a)] + _0x20679c(0x325), _0x5d2e2f = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1ca060(_0x20679c(0x360)) + _0x20679c(0x1c7) + _0x13a0d9[_0x20679c(0x335)] + _0x20679c(0x325), _0x1b950e = _0x20679c(0x23f) + _0x1ca060('IMAGE_VIEWER') + _0x20679c(0x31a) + _0x13a0d9['FULLSCREEN'] + '</div>';
                    _0x17599d[_0x20679c(0x1b3)]('.button_wrapper')[_0x20679c(0x2dc)](_0x52bae1);
                    const _0x498086 = _0x3ab8b1[_0x20679c(0x1b3)](_0x594d1c)[_0x20679c(0x218)];
                    if (_0x498086 > 0x1 && _0x553be6[_0x20679c(0x1cb)] && !_0x553be6[_0x20679c(0x238)]) {
                        const _0x556ece = _0x20679c(0x339) + _0x1ca060(_0x20679c(0x324)) + _0x20679c(0x1e7) + _0x13a0d9[_0x20679c(0x14e)] + _0x20679c(0x325);
                        _0x17599d['find']('.button_wrapper')[_0x20679c(0x2dc)](_0x556ece);
                    }
                    _0x17599d[_0x20679c(0x1b3)]('.button_wrapper')[_0x20679c(0x2dc)](_0x179bb3), setTimeout(() => {
                        const _0x4f1d1e = _0x20679c;
                        if (_0x17599d['eq'](_0x42494c === _0x4f1d1e(0x1a7) ? 0x0 : _0x17599d[_0x4f1d1e(0x218)] - 0x2)['find']('div\x20>\x20ul\x20li._acaz')['length'] === 0x0)
                            _0x17599d['find']('video')['length'] > 0x0 ? _0x17599d[_0x4f1d1e(0x1b3)](_0x4f1d1e(0x1bd))[_0x4f1d1e(0x2dc)](_0x5d2e2f) : (_0x1444e3 = _0x3ab8b1[_0x4f1d1e(0x1b3)](_0x4f1d1e(0x28f))[_0x4f1d1e(0x38a)](function () {
                                const _0x404507 = _0x4f1d1e;
                                return _0x4c4554(this)[_0x404507(0x1c3)]() > 0xc8 && _0x4c4554(this)[_0x404507(0x127)]() > 0xc8;
                            })['attr'](_0x4f1d1e(0x26a)), _0x17599d[_0x4f1d1e(0x1b3)](_0x4f1d1e(0x1bd))[_0x4f1d1e(0x2dc)](_0x1b950e));
                        else {
                            const _0xd0645a = (_0x157034, _0x2aab47) => {
                                    const _0xa3b0cc = _0x4f1d1e;
                                    _0x157034[_0xa3b0cc(0x310)](_0x24f438 => {
                                        const _0x56794a = _0xa3b0cc;
                                        if (_0x24f438[_0x56794a(0x16d)]) {
                                            var _0x55441b = _0x4c4554(_0x24f438['target']);
                                            _0x17599d[_0x56794a(0x1b3)](_0x56794a(0x261))?.[_0x56794a(0x19f)](), _0x17599d[_0x56794a(0x1b3)]('.IG_IMAGE_VIEWER')?.[_0x56794a(0x19f)](), _0x55441b[_0x56794a(0x1b3)]('video')[_0x56794a(0x218)] > 0x0 ? (_0x17599d['find'](_0x56794a(0x261))[_0x56794a(0x218)] === 0x0 && _0x17599d[_0x56794a(0x1b3)](_0x56794a(0x1bd))['append'](_0x5d2e2f), _0x5a6bad(_0x3ab8b1)) : (_0x1444e3 = _0x55441b[_0x56794a(0x1b3)]('img')[_0x56794a(0x176)](_0x56794a(0x26a)), _0x17599d['find'](_0x56794a(0x1bd))[_0x56794a(0x2dc)](_0x1b950e));
                                        }
                                    });
                                }, _0x3e8134 = new IntersectionObserver(_0xd0645a, {
                                    'root': _0x3ab8b1['find'](_0x4f1d1e(0x15a))[_0x4f1d1e(0x1d8)]()[_0x4f1d1e(0x321)]()[_0x4f1d1e(0x321)]()[_0x4f1d1e(0x321)]()[0x0],
                                    'rootMargin': _0x4f1d1e(0x1a6),
                                    'threshold': 0.1
                                }), _0x5e8d5b = new MutationObserver(function (_0x2f3191, _0x4dd000) {
                                    const _0xfb5d7c = _0x4f1d1e;
                                    var _0x5974e3 = _0x2f3191['at'](0x0)?.['target'];
                                    _0x4c4554(_0x5974e3)[_0xfb5d7c(0x1b3)](_0xfb5d7c(0x313))[_0xfb5d7c(0x292)](function () {
                                        const _0x5f2b65 = _0xfb5d7c;
                                        _0x3e8134[_0x5f2b65(0x1ef)](this);
                                    });
                                });
                            _0x3ab8b1[_0x4f1d1e(0x1b3)](_0x4f1d1e(0x10f))[_0x4f1d1e(0x292)](function () {
                                _0x3e8134['observe'](this);
                            });
                            const _0x43db3b = _0x17599d['eq'](_0x42494c === 'DIV' ? 0x0 : _0x17599d[_0x4f1d1e(0x218)] - 0x2)[_0x4f1d1e(0x1b3)](_0x4f1d1e(0x10f))?.[_0x4f1d1e(0x321)]()[0x0], _0x4f8b7b = _0x17599d['eq'](_0x42494c === _0x4f1d1e(0x1a7) ? 0x0 : _0x17599d[_0x4f1d1e(0x218)] - 0x2)[_0x4f1d1e(0x1b3)](_0x4f1d1e(0x10f))?.[_0x4f1d1e(0x321)]()[_0x4f1d1e(0x321)]()[0x0];
                            _0x43db3b && _0x5e8d5b[_0x4f1d1e(0x1ef)](_0x43db3b, { 'childList': !![] }), _0x4f8b7b && _0x5e8d5b[_0x4f1d1e(0x1ef)](_0x4f8b7b, { 'attributes': !![] });
                        }
                    }, 0x32), _0x17599d[_0x20679c(0x347)](_0x20679c(0x2cd), _0x20679c(0x1ec)), _0x5a6bad(_0x3ab8b1), _0x1e6772[_0x20679c(0x197)][_0x20679c(0x111)]({
                        'element': this,
                        'trigger': [
                            '.IG_THUMBNAIL_MAIN',
                            '.IG_NEWTAB_MAIN',
                            _0x20679c(0x1ea),
                            _0x20679c(0x117),
                            _0x20679c(0x155)
                        ]
                    }), _0x4c4554(this)['on'](_0x20679c(0x262), _0x20679c(0x155), function () {
                        _0x1444e3 != null ? _0x40442b(_0x1444e3) : alert('Cannot\x20find\x20resource\x20url.');
                    }), _0x4c4554(this)['on'](_0x20679c(0x262), _0x20679c(0x261), function () {
                        const _0x3fe4ca = _0x20679c;
                        _0x11dd8b(!![]), _0x1e6772[_0x3fe4ca(0x15d)] = _0x3ab8b1[_0x3fe4ca(0x176)](_0x3fe4ca(0x2dd)), _0x1e6772[_0x3fe4ca(0x27b)] = location[_0x3fe4ca(0x375)]['replace'](/\/$/, '')[_0x3fe4ca(0x2c5)]('/')['at'](-0x1) || _0x3ab8b1[_0x3fe4ca(0x1b3)](_0x3fe4ca(0x13f))[_0x3fe4ca(0x1d8)]()[_0x3fe4ca(0x176)](_0x3fe4ca(0x355))['split']('/')['at'](0x2) || _0x4c4554(this)['parent']()[_0x3fe4ca(0x321)]()['parent']()[_0x3fe4ca(0x141)](_0x3fe4ca(0x1e1))['children'](_0x3fe4ca(0x34a))[_0x3fe4ca(0x141)](_0x3fe4ca(0x1e1))[_0x3fe4ca(0x1b3)]('a[href^=\x22/p/\x22]')[_0x3fe4ca(0x164)]()['attr'](_0x3fe4ca(0x355))[_0x3fe4ca(0x2c5)]('/')['at'](0x2);
                        var _0x41c25d = _0x42e0b9(_0x3ab8b1);
                        _0xc5b185(!![], ![]), _0x3e604f(_0x1e6772[_0x3fe4ca(0x27b)], _0x3fe4ca(0x317), '')[_0x3fe4ca(0x318)](() => {
                            let _0xdf734f = setInterval(() => {
                                const _0x14c21c = a0_0xe1f8;
                                if (_0x4c4554('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x14c21c(0x218)] > 0x0) {
                                    clearInterval(_0xdf734f);
                                    var _0x43a112 = _0x4c4554(_0x14c21c(0x1b2) + (_0x41c25d + 0x1) + '\x22]')?.['parent']()[_0x14c21c(0x1b3)](_0x14c21c(0x37c))?.['first']();
                                    _0x43a112 != null && _0x43a112[_0x14c21c(0x218)] > 0x0 ? _0x43a112[_0x14c21c(0x305)](_0x14c21c(0x262)) : alert(_0x14c21c(0x268)), _0x11dd8b(![]), _0x4c4554(_0x14c21c(0x2a3))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x4c4554(this)['on'](_0x20679c(0x262), _0x20679c(0x250), function () {
                        const _0x2b90b3 = _0x20679c;
                        _0x11dd8b(!![]), _0x1e6772[_0x2b90b3(0x15d)] = _0x3ab8b1[_0x2b90b3(0x176)](_0x2b90b3(0x2dd)), _0x1e6772[_0x2b90b3(0x27b)] = location[_0x2b90b3(0x375)][_0x2b90b3(0x399)](/\/$/, '')[_0x2b90b3(0x2c5)]('/')['at'](-0x1) || _0x3ab8b1['find'](_0x2b90b3(0x13f))[_0x2b90b3(0x1d8)]()[_0x2b90b3(0x176)](_0x2b90b3(0x355))[_0x2b90b3(0x2c5)]('/')['at'](0x2) || _0x4c4554(this)['parent']()[_0x2b90b3(0x321)]()['parent']()['children']('div:last-child')[_0x2b90b3(0x141)](_0x2b90b3(0x34a))[_0x2b90b3(0x141)](_0x2b90b3(0x1e1))[_0x2b90b3(0x1b3)](_0x2b90b3(0x13f))[_0x2b90b3(0x164)]()[_0x2b90b3(0x176)](_0x2b90b3(0x355))[_0x2b90b3(0x2c5)]('/')['at'](0x2);
                        var _0x5d6a2d = _0x42e0b9(_0x3ab8b1);
                        _0xc5b185(!![], ![]), _0x3e604f(_0x1e6772[_0x2b90b3(0x27b)], _0x2b90b3(0x317), '')[_0x2b90b3(0x318)](() => {
                            let _0x256e13 = setInterval(() => {
                                const _0x49b273 = a0_0xe1f8;
                                if (_0x4c4554(_0x49b273(0x2f5))['length'] > 0x0) {
                                    clearInterval(_0x256e13);
                                    var _0x17c2db = _0x4c4554(_0x49b273(0x1b2) + (_0x5d6a2d + 0x1) + '\x22]');
                                    if (_0x553be6[_0x49b273(0x16f)] && _0x553be6[_0x49b273(0x357)])
                                        _0x422b(_0x17c2db[_0x49b273(0x1d8)]()[0x0], !![]);
                                    else {
                                        let _0x24d84c = _0x17c2db?.[_0x49b273(0x176)](_0x49b273(0x2c6));
                                        if (_0x24d84c) {
                                            var _0x4eddff = new URL(_0x24d84c);
                                            _0x4eddff[_0x49b273(0x2d0)] = _0x49b273(0x388), _0x2bb277(_0x4eddff[_0x49b273(0x355)]);
                                        } else
                                            alert(_0x49b273(0x1e6));
                                    }
                                    _0x11dd8b(![]), _0x4c4554(_0x49b273(0x2a3))[_0x49b273(0x19f)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x4c4554(this)['on'](_0x20679c(0x262), _0x20679c(0x1ea), async function () {
                        const _0x457ece = _0x20679c;
                        _0x1e6772[_0x457ece(0x15d)] = _0x3ab8b1[_0x457ece(0x176)](_0x457ece(0x2dd)), _0x1e6772[_0x457ece(0x27b)] = location[_0x457ece(0x375)][_0x457ece(0x399)](/\/$/, '')[_0x457ece(0x2c5)]('/')['at'](-0x1) || _0x3ab8b1[_0x457ece(0x1b3)]('a[href^=\x22/p/\x22]')[_0x457ece(0x1d8)]()['attr'](_0x457ece(0x355))[_0x457ece(0x2c5)]('/')['at'](0x2) || _0x4c4554(this)[_0x457ece(0x321)]()[_0x457ece(0x321)]()[_0x457ece(0x321)]()[_0x457ece(0x141)]('div:last-child')[_0x457ece(0x141)](_0x457ece(0x34a))[_0x457ece(0x141)](_0x457ece(0x1e1))[_0x457ece(0x1b3)]('a[href^=\x22/p/\x22]')[_0x457ece(0x164)]()[_0x457ece(0x176)](_0x457ece(0x355))['split']('/')['at'](0x2), _0xc5b185(_0x553be6['DIRECT_DOWNLOAD_ALL'], !![]), _0x4c4554(_0x457ece(0x20c))[_0x457ece(0x1f3)](_0x457ece(0x2f2) + _0x1e6772['GL_postPath'] + '\x22>' + _0x1e6772[_0x457ece(0x27b)] + _0x457ece(0x338)), _0x4c4554(_0x457ece(0x2f5))[_0x457ece(0x292)](function () {
                            const _0x155f99 = _0x457ece;
                            _0x4c4554(this)[_0x155f99(0x2d8)](_0x155f99(0x23d)), _0x4c4554(this)[_0x155f99(0x239)](_0x155f99(0x275)), _0x4c4554(this)[_0x155f99(0x23a)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x1ca060(_0x155f99(0x12a)) + _0x155f99(0x12d) + _0x13a0d9[_0x155f99(0x12a)] + '</div>'), _0x4c4554(this)[_0x155f99(0x176)](_0x155f99(0x351)) == _0x155f99(0x167) && _0x4c4554(this)[_0x155f99(0x23a)](_0x155f99(0x36f) + _0x1ca060('THUMBNAIL_INTRO') + _0x155f99(0x1aa) + _0x13a0d9[_0x155f99(0x335)] + '</div>');
                        }), _0x3e604f(_0x1e6772[_0x457ece(0x27b)], _0x457ece(0x317), _0x1ca060('LOAD_BLOB_MULTIPLE'))[_0x457ece(0x318)](() => {
                            let _0x65f71 = setInterval(() => {
                                const _0x2c00bb = a0_0xe1f8;
                                _0x4c4554(_0x2c00bb(0x2f5))[_0x2c00bb(0x218)] > 0x0 && (clearInterval(_0x65f71), _0x4c4554(_0x2c00bb(0x2f5))[_0x2c00bb(0x292)](function () {
                                    const _0x20dba6 = _0x2c00bb;
                                    _0x4c4554(this)[_0x20dba6(0x305)]('click');
                                }), _0x4c4554(_0x2c00bb(0x2a3))[_0x2c00bb(0x19f)]());
                            }, 0xfa);
                        });
                    }), _0x4c4554(this)['on'](_0x20679c(0x262), '.IG_DW_MAIN', async function () {
                        const _0x2606a8 = _0x20679c;
                        _0x1e6772[_0x2606a8(0x15d)] = _0x3ab8b1['attr'](_0x2606a8(0x2dd)), _0x1e6772[_0x2606a8(0x27b)] = location[_0x2606a8(0x375)][_0x2606a8(0x399)](/\/$/, '')[_0x2606a8(0x2c5)]('/')['at'](-0x1) || _0x3ab8b1[_0x2606a8(0x1b3)](_0x2606a8(0x13f))[_0x2606a8(0x1d8)]()[_0x2606a8(0x176)](_0x2606a8(0x355))[_0x2606a8(0x2c5)]('/')['at'](0x2) || _0x4c4554(this)['parent']()[_0x2606a8(0x321)]()[_0x2606a8(0x321)]()[_0x2606a8(0x141)](_0x2606a8(0x1e1))[_0x2606a8(0x141)](_0x2606a8(0x34a))[_0x2606a8(0x141)]('div:last-child')[_0x2606a8(0x1b3)](_0x2606a8(0x13f))[_0x2606a8(0x164)]()['attr']('href')['split']('/')['at'](0x2), _0xc5b185(_0x553be6['DIRECT_DOWNLOAD_ALL'], !![]), _0x4c4554(_0x2606a8(0x20c))[_0x2606a8(0x1f3)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x1e6772[_0x2606a8(0x27b)] + '\x22>' + _0x1e6772[_0x2606a8(0x27b)] + _0x2606a8(0x338));
                        if (_0x553be6[_0x2606a8(0x1cb)]) {
                            _0x11dd8b(!![]), _0x5765dc(!![]);
                            var _0x5183a2 = _0x42e0b9(_0x4c4554(this)[_0x2606a8(0x321)]()[_0x2606a8(0x321)]()[_0x2606a8(0x321)]());
                            _0x3e604f(_0x1e6772[_0x2606a8(0x27b)], _0x2606a8(0x317), '')['then'](() => {
                                let _0x291364 = setInterval(() => {
                                    const _0x1c9428 = a0_0xe1f8;
                                    if (_0x4c4554(_0x1c9428(0x2f5))[_0x1c9428(0x218)] > 0x0) {
                                        clearInterval(_0x291364);
                                        var _0x1a22cc = _0x4c4554(_0x1c9428(0x1b2) + (_0x5183a2 + 0x1) + '\x22]')?.[_0x1c9428(0x176)](_0x1c9428(0x2c6));
                                        _0x1a22cc ? (_0x11dd8b(![]), _0x4c4554('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x5183a2 + 0x1) + '\x22]')?.[_0x1c9428(0x305)](_0x1c9428(0x262))) : alert(_0x1c9428(0x1cd)), _0x4c4554(_0x1c9428(0x2a3))[_0x1c9428(0x19f)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x553be6[_0x2606a8(0x238)]) {
                            var _0x5ba64d = 0x0, _0x46f89a = _0x4c4554(this)[_0x2606a8(0x321)]()[_0x2606a8(0x321)]()['find'](_0x594d1c)['length'], _0x560610 = _0x553be6[_0x2606a8(0x358)], _0x36b8a7 = new Date(_0x4c4554(this)[_0x2606a8(0x321)]()[_0x2606a8(0x321)]()[_0x2606a8(0x321)]()[_0x2606a8(0x1b3)]('a[href]\x20time[datetime]')['filter'](function () {
                                    const _0x267d46 = _0x2606a8;
                                    let _0x25e2c0 = _0x4c4554(this)[_0x267d46(0x2bf)](_0x267d46(0x33c))['attr'](_0x267d46(0x355));
                                    return _0x25e2c0?.[_0x267d46(0x148)](_0x267d46(0x35b)) || _0x25e2c0?.['match'](/\/([\w.\-_]+)\/p\//ig) != null;
                                })[_0x2606a8(0x1d8)]()[_0x2606a8(0x176)](_0x2606a8(0x349)))[_0x2606a8(0x393)]();
                            if (_0x46f89a)
                                _0x4c4554(this)[_0x2606a8(0x321)]()[_0x2606a8(0x321)]()['find'](_0x594d1c)[_0x2606a8(0x292)](function () {
                                    const _0x38c8a4 = _0x2606a8;
                                    let _0x2b174e = _0x4c4554(this)[_0x38c8a4(0x321)]()[_0x38c8a4(0x321)]()[_0x38c8a4(0x321)]()[_0x38c8a4(0x1b3)](_0x38c8a4(0x167));
                                    _0x2b174e && _0x2b174e[_0x38c8a4(0x176)](_0x38c8a4(0x26a)) && (_0x560610 = !![]);
                                }), _0x560610 || _0x553be6['FORCE_RESOURCE_VIA_MEDIA'] ? _0x3e604f(_0x1e6772['GL_postPath'], _0x2606a8(0x317), _0x1ca060(_0x2606a8(0x372))) : (_0x4c4554(this)[_0x2606a8(0x321)]()['parent']()[_0x2606a8(0x1b3)](_0x594d1c)['each'](function () {
                                    const _0x576f43 = _0x2606a8;
                                    _0x5ba64d++;
                                    let _0x4b4dd7 = _0x4c4554(this)['find'](_0x576f43(0x167)), _0x533964 = _0x4c4554(this)[_0x576f43(0x1b3)](_0x576f43(0x14c)), _0x4fa3b3 = _0x533964['attr'](_0x576f43(0x25c)) ? _0x533964[_0x576f43(0x176)]('srcset')[_0x576f43(0x2c5)]('\x20')[0x0] : _0x533964['attr'](_0x576f43(0x26a));
                                    _0x4b4dd7 && _0x4b4dd7['attr'](_0x576f43(0x26a)) && (_0x560610 = !![]), _0x533964 && _0x4fa3b3 && _0x4c4554(_0x576f43(0x317))[_0x576f43(0x2dc)](_0x576f43(0x131) + _0x36b8a7 + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x1e6772['GL_postPath'] + _0x576f43(0x157) + _0x5ba64d + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x4fa3b3 + _0x576f43(0x23b) + _0x4fa3b3 + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x1ca060('IMG') + _0x576f43(0x149) + _0x5ba64d + _0x576f43(0x24c));
                                }), _0x560610 && _0x3e604f(_0x1e6772[_0x2606a8(0x27b)], _0x2606a8(0x317), _0x1ca060(_0x2606a8(0x34c))));
                            else {
                                if (_0x553be6[_0x2606a8(0x16f)])
                                    _0x3e604f(_0x1e6772[_0x2606a8(0x27b)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1ca060('LOAD_BLOB_MULTIPLE'));
                                else {
                                    _0x5ba64d++;
                                    let _0x5ace11 = _0x4c4554(this)[_0x2606a8(0x321)]()[_0x2606a8(0x321)]()['parent']()[_0x2606a8(0x1b3)](_0x2606a8(0x167)), _0x4ddc3c = _0x4c4554(this)[_0x2606a8(0x321)]()[_0x2606a8(0x321)]()['parent']()[_0x2606a8(0x1b3)](_0x2606a8(0x14c)), _0x29f1c3 = _0x4ddc3c[_0x2606a8(0x176)](_0x2606a8(0x25c)) ? _0x4ddc3c[_0x2606a8(0x176)](_0x2606a8(0x25c))[_0x2606a8(0x2c5)]('\x20')[0x0] : _0x4ddc3c[_0x2606a8(0x176)]('src');
                                    _0x5ace11 && _0x5ace11['attr']('src') && _0x3e604f(_0x1e6772[_0x2606a8(0x27b)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1ca060(_0x2606a8(0x2db))), _0x4ddc3c && _0x29f1c3 && _0x4c4554('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY')['append']('<a\x20datetime=\x22' + _0x36b8a7 + _0x2606a8(0x334) + _0x1e6772['GL_postPath'] + _0x2606a8(0x157) + _0x5ba64d + _0x2606a8(0x28c) + _0x29f1c3 + _0x2606a8(0x23b) + _0x29f1c3 + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x1ca060(_0x2606a8(0x315)) + _0x2606a8(0x149) + _0x5ba64d + '\x20-</a>');
                                }
                            }
                        }
                        _0x4c4554(_0x2606a8(0x2f5))[_0x2606a8(0x292)](function () {
                            const _0x3f29a9 = _0x2606a8;
                            _0x4c4554(this)[_0x3f29a9(0x2d8)](_0x3f29a9(0x23d)), _0x4c4554(this)[_0x3f29a9(0x239)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x4c4554(this)[_0x3f29a9(0x23a)](_0x3f29a9(0x316) + _0x1ca060(_0x3f29a9(0x12a)) + _0x3f29a9(0x12d) + _0x13a0d9[_0x3f29a9(0x12a)] + _0x3f29a9(0x325)), _0x4c4554(this)[_0x3f29a9(0x176)]('data-name') == _0x3f29a9(0x167) && _0x4c4554(this)['after'](_0x3f29a9(0x36f) + _0x1ca060(_0x3f29a9(0x360)) + _0x3f29a9(0x1aa) + _0x13a0d9['THUMBNAIL'] + _0x3f29a9(0x325));
                        }), _0x553be6['DIRECT_DOWNLOAD_ALL'] && _0x3e604f(_0x1e6772['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1ca060(_0x2606a8(0x372)))[_0x2606a8(0x318)](() => {
                            let _0x341765 = setInterval(() => {
                                const _0x4d9cc1 = a0_0xe1f8;
                                _0x4c4554(_0x4d9cc1(0x2f5))['length'] > 0x0 && (clearInterval(_0x341765), _0x4c4554(_0x4d9cc1(0x2f5))[_0x4d9cc1(0x292)](function () {
                                    const _0x1e8704 = _0x4d9cc1;
                                    _0x4c4554(this)[_0x1e8704(0x305)](_0x1e8704(0x262));
                                }), _0x4c4554(_0x4d9cc1(0x2a3))[_0x4d9cc1(0x19f)]());
                            }, 0xfa);
                        });
                    });
                    var _0x5d537f = _0x4c4554(this)['find'](_0x20679c(0x297))[_0x20679c(0x1d8)]()[_0x20679c(0x1c4)]() || _0x4c4554(this)[_0x20679c(0x1b3)](_0x20679c(0x17e))[_0x20679c(0x38a)](function () {
                        const _0x19c149 = _0x20679c;
                        return _0x4c4554(this)?.[_0x19c149(0x1c4)]()?.['length'] > 0x0;
                    })[_0x20679c(0x1d8)]()['text']();
                    _0x4c4554(this)[_0x20679c(0x176)](_0x20679c(0x36e), _0x20679c(0x260)), _0x4c4554(this)[_0x20679c(0x176)](_0x20679c(0x2dd), _0x5d537f);
                }
            });
        }
        function _0x4579fd(_0xc2536f) {
            const _0x5242ff = _0x49db9c;
            var _0x12f0c0 = _0xc2536f[_0x5242ff(0x256)] ?? _0xc2536f;
            return _0x12f0c0['owner'] == null && _0x12f0c0[_0x5242ff(0x30a)] != null && (_0x12f0c0['owner'] = _0x12f0c0[_0x5242ff(0x30a)]), _0x12f0c0[_0x5242ff(0x2e8)] == null && (_0x52fd98(_0x5242ff(0x2d6), _0x5242ff(0x2be)), alert(_0x5242ff(0x1e0))), _0x12f0c0;
        }
        async function _0x3e604f(_0x99a1e8, _0x51a529, _0x51749d) {
            const _0x2f1105 = _0x49db9c;
            try {
                _0x4c4554(_0x51a529 + '\x20a')[_0x2f1105(0x19f)](), _0x4c4554(_0x51a529)['append']('<p\x20id=\x22_SNLOAD\x22>' + _0x51749d + '</p>');
                let _0x4792c6 = await _0xf96600(_0x99a1e8), _0x13d098 = _0x4579fd(_0x4792c6['data']);
                if (_0x4792c6[_0x2f1105(0x257)] === _0x2f1105(0x304)) {
                    let _0x1b6641 = 0x1;
                    _0x13d098[_0x2f1105(0x13c)] == 'GraphVideo' && _0x13d098[_0x2f1105(0x266)] && (_0x4c4554(_0x51a529)['append']('<a\x20media-id=\x22' + _0x13d098['id'] + _0x2f1105(0x207) + _0x13d098[_0x2f1105(0x36b)] + _0x2f1105(0x175) + _0x13d098[_0x2f1105(0x363)] + _0x2f1105(0x282) + _0x13d098[_0x2f1105(0x2e8)]['username'] + _0x2f1105(0x196) + _0x1b6641 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x13d098[_0x2f1105(0x266)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x13d098[_0x2f1105(0x397)][0x1]['src'] + _0x2f1105(0x231) + _0x1ca060('VID') + '</span>\x20' + _0x1b6641 + _0x2f1105(0x24c)), _0x1b6641++);
                    _0x13d098[_0x2f1105(0x13c)] == _0x2f1105(0x2ee) && (_0x4c4554(_0x51a529)[_0x2f1105(0x2dc)]('<a\x20media-id=\x22' + _0x13d098['id'] + _0x2f1105(0x207) + _0x13d098[_0x2f1105(0x36b)] + _0x2f1105(0x175) + _0x13d098[_0x2f1105(0x363)] + _0x2f1105(0x392) + _0x13d098[_0x2f1105(0x2e8)][_0x2f1105(0x1dd)] + _0x2f1105(0x196) + _0x1b6641 + _0x2f1105(0x30f) + _0x13d098[_0x2f1105(0x397)][_0x13d098[_0x2f1105(0x397)][_0x2f1105(0x218)] - 0x1][_0x2f1105(0x26a)] + _0x2f1105(0x23b) + _0x13d098['display_resources'][0x1][_0x2f1105(0x26a)] + _0x2f1105(0x191) + _0x1ca060(_0x2f1105(0x315)) + _0x2f1105(0x149) + _0x1b6641 + _0x2f1105(0x24c)), _0x1b6641++);
                    if (_0x13d098['__typename'] == _0x2f1105(0x1b6) && _0x13d098['edge_sidecar_to_children'])
                        for (let _0x19b576 of _0x13d098['edge_sidecar_to_children']['edges']) {
                            _0x19b576['node'][_0x2f1105(0x13c)] == _0x2f1105(0x276) && _0x4c4554(_0x51a529)[_0x2f1105(0x2dc)](_0x2f1105(0x2e6) + _0x19b576[_0x2f1105(0x1e3)]['id'] + _0x2f1105(0x207) + _0x13d098[_0x2f1105(0x36b)] + _0x2f1105(0x175) + _0x13d098['shortcode'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x13d098['owner'][_0x2f1105(0x1dd)] + _0x2f1105(0x196) + _0x1b6641 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x19b576['node'][_0x2f1105(0x266)] + _0x2f1105(0x23b) + _0x19b576[_0x2f1105(0x1e3)]['display_resources'][0x1][_0x2f1105(0x26a)] + _0x2f1105(0x2ca) + _0x1ca060('VID') + _0x2f1105(0x149) + _0x1b6641 + _0x2f1105(0x24c)), _0x19b576[_0x2f1105(0x1e3)][_0x2f1105(0x13c)] == _0x2f1105(0x2ee) && _0x4c4554(_0x51a529)[_0x2f1105(0x2dc)]('<a\x20media-id=\x22' + _0x19b576['node']['id'] + _0x2f1105(0x207) + _0x13d098['taken_at_timestamp'] + _0x2f1105(0x175) + _0x13d098[_0x2f1105(0x363)] + _0x2f1105(0x392) + _0x13d098[_0x2f1105(0x2e8)]['username'] + '\x22\x20data-globalIndex=\x22' + _0x1b6641 + _0x2f1105(0x30f) + _0x19b576[_0x2f1105(0x1e3)][_0x2f1105(0x397)][_0x19b576[_0x2f1105(0x1e3)][_0x2f1105(0x397)][_0x2f1105(0x218)] - 0x1][_0x2f1105(0x26a)] + _0x2f1105(0x23b) + _0x19b576[_0x2f1105(0x1e3)][_0x2f1105(0x397)][0x1]['src'] + _0x2f1105(0x191) + _0x1ca060(_0x2f1105(0x315)) + _0x2f1105(0x149) + _0x1b6641 + _0x2f1105(0x24c)), _0x1b6641++;
                        }
                } else {
                    if (_0x13d098['carousel_media'])
                        _0x52fd98('carousel_media'), _0x13d098[_0x2f1105(0x390)][_0x2f1105(0x310)]((_0x45ff21, _0x2182ef) => {
                            const _0x5445b5 = _0x2f1105;
                            let _0x40e5e0 = _0x2182ef + 0x1;
                            _0x45ff21[_0x5445b5(0x326)] == null ? (_0x45ff21['image_versions2'][_0x5445b5(0x1d7)]['sort'](function (_0x324b8c, _0x320e6d) {
                                const _0x37d5e0 = _0x5445b5;
                                let _0xa15e1f = new URL(_0x324b8c['url'])['searchParams']['get'](_0x37d5e0(0x1b1)), _0x4e75b7 = new URL(_0x320e6d[_0x37d5e0(0x37f)])[_0x37d5e0(0x165)]['get'](_0x37d5e0(0x1b1));
                                if (_0xa15e1f && _0x4e75b7) {
                                    if (_0xa15e1f[_0x37d5e0(0x218)] > _0x4e75b7[_0x37d5e0(0x218)])
                                        return 0x1;
                                    if (_0xa15e1f['length'] < _0x4e75b7[_0x37d5e0(0x218)])
                                        return -0x1;
                                } else {
                                    if (_0x324b8c[_0x37d5e0(0x1c3)] < _0x320e6d[_0x37d5e0(0x1c3)])
                                        return 0x1;
                                    if (_0x324b8c[_0x37d5e0(0x1c3)] > _0x320e6d['width'])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x4c4554(_0x51a529)[_0x5445b5(0x2dc)](_0x5445b5(0x2e6) + _0x45ff21['pk'] + '\x22\x20datetime=\x22' + _0x45ff21['taken_at'] + _0x5445b5(0x175) + _0x13d098[_0x5445b5(0x1c9)] + _0x5445b5(0x392) + _0x13d098['owner'][_0x5445b5(0x1dd)] + '\x22\x20data-globalIndex=\x22' + _0x40e5e0 + _0x5445b5(0x30f) + _0x45ff21[_0x5445b5(0x17c)][_0x5445b5(0x1d7)][0x0][_0x5445b5(0x37f)] + _0x5445b5(0x23b) + _0x45ff21['image_versions2'][_0x5445b5(0x1d7)][0x0][_0x5445b5(0x37f)] + _0x5445b5(0x191) + _0x1ca060(_0x5445b5(0x315)) + _0x5445b5(0x149) + _0x40e5e0 + _0x5445b5(0x24c))) : _0x4c4554(_0x51a529)['append']('<a\x20media-id=\x22' + _0x45ff21['pk'] + _0x5445b5(0x207) + _0x45ff21[_0x5445b5(0x39c)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x13d098[_0x5445b5(0x1c9)] + _0x5445b5(0x282) + _0x13d098[_0x5445b5(0x2e8)][_0x5445b5(0x1dd)] + _0x5445b5(0x196) + _0x40e5e0 + _0x5445b5(0x30f) + _0x45ff21[_0x5445b5(0x326)][0x0]['url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x45ff21[_0x5445b5(0x17c)][_0x5445b5(0x1d7)][0x0][_0x5445b5(0x37f)] + _0x5445b5(0x231) + _0x1ca060(_0x5445b5(0x27f)) + _0x5445b5(0x149) + _0x40e5e0 + _0x5445b5(0x24c));
                        });
                    else {
                        let _0x7e3e87 = 0x1;
                        _0x13d098[_0x2f1105(0x326)] == null ? (_0x13d098[_0x2f1105(0x17c)][_0x2f1105(0x1d7)][_0x2f1105(0x235)](function (_0x2533f6, _0x5738e8) {
                            const _0x568ea5 = _0x2f1105;
                            let _0x4db8da = new URL(_0x2533f6[_0x568ea5(0x37f)])[_0x568ea5(0x165)][_0x568ea5(0x179)]('stp'), _0x5cec5f = new URL(_0x5738e8[_0x568ea5(0x37f)])['searchParams'][_0x568ea5(0x179)](_0x568ea5(0x1b1));
                            if (_0x4db8da && _0x5cec5f) {
                                if (_0x4db8da['length'] > _0x5cec5f[_0x568ea5(0x218)])
                                    return 0x1;
                                if (_0x4db8da[_0x568ea5(0x218)] < _0x5cec5f[_0x568ea5(0x218)])
                                    return -0x1;
                            } else {
                                if (_0x2533f6[_0x568ea5(0x1c3)] < _0x5738e8[_0x568ea5(0x1c3)])
                                    return 0x1;
                                if (_0x2533f6[_0x568ea5(0x1c3)] > _0x5738e8[_0x568ea5(0x1c3)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x4c4554(_0x51a529)['append'](_0x2f1105(0x2e6) + _0x13d098['pk'] + _0x2f1105(0x207) + _0x13d098['taken_at'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x13d098['code'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x13d098['owner'][_0x2f1105(0x1dd)] + _0x2f1105(0x196) + _0x7e3e87 + _0x2f1105(0x30f) + _0x13d098['image_versions2'][_0x2f1105(0x1d7)][0x0][_0x2f1105(0x37f)] + _0x2f1105(0x23b) + _0x13d098[_0x2f1105(0x17c)][_0x2f1105(0x1d7)][0x0][_0x2f1105(0x37f)] + _0x2f1105(0x191) + _0x1ca060(_0x2f1105(0x315)) + _0x2f1105(0x149) + _0x7e3e87 + _0x2f1105(0x24c))) : _0x4c4554(_0x51a529)[_0x2f1105(0x2dc)]('<a\x20media-id=\x22' + _0x13d098['pk'] + _0x2f1105(0x207) + _0x13d098['taken_at'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x13d098[_0x2f1105(0x1c9)] + _0x2f1105(0x282) + _0x13d098[_0x2f1105(0x2e8)][_0x2f1105(0x1dd)] + _0x2f1105(0x196) + _0x7e3e87 + _0x2f1105(0x30f) + _0x13d098[_0x2f1105(0x326)][0x0][_0x2f1105(0x37f)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x13d098[_0x2f1105(0x17c)][_0x2f1105(0x1d7)][0x0][_0x2f1105(0x37f)] + _0x2f1105(0x231) + _0x1ca060(_0x2f1105(0x27f)) + _0x2f1105(0x149) + _0x7e3e87 + '\x20-</a>');
                    }
                }
                _0x4c4554(_0x2f1105(0x1dc))['remove'](), _0x4c4554('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x2f1105(0x292)](function () {
                    const _0x54353c = _0x2f1105;
                    _0x4c4554(this)[_0x54353c(0x2d8)](_0x54353c(0x23d)), _0x4c4554(this)[_0x54353c(0x239)](_0x54353c(0x275)), _0x4c4554(this)[_0x54353c(0x23a)](_0x54353c(0x316) + _0x1ca060(_0x54353c(0x12a)) + _0x54353c(0x12d) + _0x13a0d9['NEW_TAB'] + _0x54353c(0x325)), _0x4c4554(this)['attr'](_0x54353c(0x351)) == 'video' && _0x4c4554(this)[_0x54353c(0x23a)](_0x54353c(0x36f) + _0x1ca060(_0x54353c(0x360)) + _0x54353c(0x1aa) + _0x13a0d9[_0x54353c(0x335)] + _0x54353c(0x325));
                });
            } catch (_0x5bd162) {
                _0x52fd98(_0x2f1105(0x2a2), _0x5bd162);
            }
            ;
        }
        function _0x42e0b9(_0x2f4141) {
            const _0xe68c57 = _0x49db9c;
            var _0xac7946 = 0x0, _0x1a8ee8 = _0x2f4141[_0xe68c57(0x1b3)](_0xe68c57(0x2c3));
            return (_0x1a8ee8 == null || !_0x1a8ee8[_0xe68c57(0x2bb)](_0xe68c57(0x30e))) && (_0x1a8ee8 = _0x2f4141[_0xe68c57(0x1b3)](_0xe68c57(0x2ab))['eq'](0x0)[_0xe68c57(0x141)](_0xe68c57(0x34a))), _0x1a8ee8[_0xe68c57(0x38a)](_0xe68c57(0x376))['each'](function (_0x31bf2e) {
                const _0x507db8 = _0xe68c57;
                _0x4c4554(this)[_0x507db8(0x2bb)](_0x507db8(0x1f8)) && (_0xac7946 = _0x31bf2e);
            }), _0xac7946;
        }
        async function _0x123339(_0x43d7d9) {
            const _0x7391de = _0x49db9c;
            if (_0x43d7d9) {
                _0x11dd8b(!![]);
                let _0x2251cf = new Date()[_0x7391de(0x393)](), _0x2463e6 = Math[_0x7391de(0x10e)](_0x2251cf / 0x3e8), _0x48ca75 = location['pathname'][_0x7391de(0x124)](/(reels|tagged)\/$/ig, '')[_0x7391de(0x2c5)]('/')[_0x7391de(0x38a)](_0x3fce0c => _0x3fce0c[_0x7391de(0x218)] > 0x0)['at'](-0x1), _0x52762 = await _0x249639(_0x48ca75);
                try {
                    let _0x2497ed = await _0x1826cd(_0x52762[_0x7391de(0x30a)]['pk']);
                    _0x14dcb5(_0x2497ed, _0x48ca75, 'avatar', _0x2463e6, _0x7391de(0x28d));
                } catch (_0x4d6476) {
                    _0x14dcb5(_0x52762[_0x7391de(0x30a)][_0x7391de(0x32f)], _0x48ca75, _0x7391de(0x391), _0x2463e6, _0x7391de(0x28d));
                }
                _0x11dd8b(![]);
            } else {
                if (!_0x4c4554('.IG_DWPROFILE')[_0x7391de(0x218)]) {
                    let _0x55dc15 = setInterval(() => {
                        const _0x3422a1 = _0x7391de;
                        if (_0x4c4554(_0x3422a1(0x182))[_0x3422a1(0x218)]) {
                            clearInterval(_0x55dc15);
                            return;
                        }
                        _0x4c4554(_0x3422a1(0x38e))[_0x3422a1(0x321)]()[_0x3422a1(0x321)]()['append'](_0x3422a1(0x153) + _0x1ca060('DW') + _0x3422a1(0x37e) + _0x13a0d9[_0x3422a1(0x1a4)] + _0x3422a1(0x325)), _0x4c4554(_0x3422a1(0x38e))['parent']()[_0x3422a1(0x321)]()[_0x3422a1(0x347)](_0x3422a1(0x2cd), _0x3422a1(0x1ec)), _0x4c4554('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')[_0x3422a1(0x321)]()[_0x3422a1(0x321)]()[_0x3422a1(0x321)]()[_0x3422a1(0x2dc)](_0x3422a1(0x153) + _0x1ca060('DW') + _0x3422a1(0x37e) + _0x13a0d9[_0x3422a1(0x1a4)] + _0x3422a1(0x325)), _0x4c4554(_0x3422a1(0x25e))[_0x3422a1(0x321)]()[_0x3422a1(0x321)]()[_0x3422a1(0x321)]()['css'](_0x3422a1(0x2cd), _0x3422a1(0x1ec));
                    }, 0x96);
                }
            }
        }
        async function _0x43ab85(_0x32cb25, _0x2686ea, _0x4d340c) {
            const _0x16f873 = _0x49db9c;
            if (_0x32cb25) {
                _0x11dd8b(!![]);
                let _0x7260c0 = location[_0x16f873(0x355)][_0x16f873(0x2c5)]('?')['at'](0x0)['split'](_0x16f873(0x130))['at'](-0x1)['replaceAll']('/', ''), _0x91f8bf = await _0xf96600(_0x7260c0), _0xbcb2c1 = _0x4579fd(_0x91f8bf[_0x16f873(0x183)]), _0x106345 = new Date()[_0x16f873(0x393)]();
                _0x553be6['RENAME_PUBLISH_DATE'] && (_0x91f8bf[_0x16f873(0x257)] === _0x16f873(0x304) ? _0x106345 = _0xbcb2c1[_0x16f873(0x256)][_0x16f873(0x36b)] : _0x106345 = _0xbcb2c1[_0x16f873(0x39c)]);
                if (_0x91f8bf[_0x16f873(0x257)] === _0x16f873(0x304)) {
                    if (_0x2686ea && _0xbcb2c1['shortcode_media'][_0x16f873(0x2cc)]) {
                        if (_0x4d340c)
                            _0x2bb277(_0xbcb2c1[_0x16f873(0x256)][_0x16f873(0x266)]);
                        else {
                            let _0x1427e2 = 'mp4';
                            _0x14dcb5(_0xbcb2c1[_0x16f873(0x256)][_0x16f873(0x266)], _0xbcb2c1['shortcode_media']['owner'][_0x16f873(0x1dd)], _0x16f873(0x29b), _0x106345, _0x1427e2, _0x7260c0);
                        }
                    } else {
                        if (_0x4d340c)
                            _0x2bb277(_0xbcb2c1['shortcode_media'][_0x16f873(0x397)]['at'](-0x1)[_0x16f873(0x26a)]);
                        else {
                            let _0x3dc335 = 'jpg';
                            _0x14dcb5(_0xbcb2c1['shortcode_media'][_0x16f873(0x397)]['at'](-0x1)[_0x16f873(0x26a)], _0xbcb2c1[_0x16f873(0x256)]['owner'][_0x16f873(0x1dd)], 'reels', _0x106345, _0x3dc335, _0x7260c0);
                        }
                    }
                } else {
                    if (_0x2686ea && _0xbcb2c1[_0x16f873(0x326)] != null) {
                        if (_0x4d340c)
                            _0x2bb277(_0xbcb2c1['video_versions'][0x0][_0x16f873(0x37f)]);
                        else {
                            let _0x3c7390 = _0x16f873(0x11d);
                            _0x14dcb5(_0xbcb2c1[_0x16f873(0x326)][0x0][_0x16f873(0x37f)], _0xbcb2c1[_0x16f873(0x2e8)]['username'], _0x16f873(0x29b), _0x106345, _0x3c7390, _0x7260c0);
                        }
                    } else {
                        if (_0x4d340c)
                            _0x2bb277(_0xbcb2c1[_0x16f873(0x17c)][_0x16f873(0x1d7)][0x0][_0x16f873(0x37f)]);
                        else {
                            let _0x263dd8 = 'jpg';
                            _0x14dcb5(_0xbcb2c1[_0x16f873(0x17c)][_0x16f873(0x1d7)][0x0][_0x16f873(0x37f)], _0xbcb2c1[_0x16f873(0x2e8)][_0x16f873(0x1dd)], _0x16f873(0x29b), _0x106345, _0x263dd8, _0x7260c0);
                        }
                    }
                }
                _0x11dd8b(![]);
            } else
                var _0x1b4bfa = setInterval(() => {
                    const _0x16cd71 = _0x16f873;
                    _0x4c4554('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')[_0x16cd71(0x218)] > 0x0 && (clearInterval(_0x1b4bfa), _0x553be6['SCROLL_BUTTON'] && (_0x4c4554(_0x16cd71(0x125))[_0x16cd71(0x19f)](), _0x4c4554(_0x16cd71(0x216))[_0x16cd71(0x2dc)](_0x16cd71(0x20b)), _0x4c4554(_0x16cd71(0x2d9))[_0x16cd71(0x2dc)](_0x16cd71(0x319)), _0x4c4554(_0x16cd71(0x2d9))[_0x16cd71(0x2dc)](_0x16cd71(0x2a1)), _0x4c4554(_0x16cd71(0x1fb))['on'](_0x16cd71(0x262), function () {
                        const _0xa64861 = _0x16cd71;
                        _0x4c4554('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0]['scrollBy']({
                            'top': -0x1e,
                            'behavior': _0xa64861(0x332)
                        });
                    }), _0x4c4554(_0x16cd71(0x2e1))['on'](_0x16cd71(0x262), function () {
                        const _0x1e70e1 = _0x16cd71;
                        _0x4c4554(_0x1e70e1(0x1b9))[0x0][_0x1e70e1(0x253)]({
                            'top': 0x1e,
                            'behavior': _0x1e70e1(0x332)
                        });
                    })), _0x4c4554('section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]')['children'](_0x16cd71(0x34a))['each'](function () {
                        const _0x4bbb4b = _0x16cd71;
                        if (_0x4c4554(this)['children']()[_0x4bbb4b(0x218)] > 0x0) {
                            if (!_0x4c4554(this)[_0x4bbb4b(0x141)]()[_0x4bbb4b(0x1b3)](_0x4bbb4b(0x228))[_0x4bbb4b(0x218)]) {
                                var _0x5109fd = _0x4c4554(this);
                                _0x4c4554(this)['children']()[_0x4bbb4b(0x347)](_0x4bbb4b(0x2cd), _0x4bbb4b(0x1ec)), _0x4c4554(this)[_0x4bbb4b(0x141)]()['append'](_0x4bbb4b(0x153) + _0x1ca060('DW') + _0x4bbb4b(0x129) + _0x13a0d9['DOWNLOAD'] + _0x4bbb4b(0x325)), _0x4c4554(this)[_0x4bbb4b(0x141)]()[_0x4bbb4b(0x2dc)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x1ca060('NEW_TAB') + _0x4bbb4b(0x143) + _0x13a0d9[_0x4bbb4b(0x12a)] + '</div>'), _0x4c4554(this)[_0x4bbb4b(0x141)]()[_0x4bbb4b(0x2dc)](_0x4bbb4b(0x36f) + _0x1ca060(_0x4bbb4b(0x360)) + '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>' + _0x13a0d9[_0x4bbb4b(0x335)] + _0x4bbb4b(0x325));
                                _0x553be6[_0x4bbb4b(0x384)] && _0x4c4554(this)[_0x4bbb4b(0x1b3)](_0x4bbb4b(0x167))['each'](function () {
                                    const _0x8a76ce = _0x4bbb4b;
                                    _0x4c4554(this)['on'](_0x8a76ce(0x1ab), function () {
                                        const _0x33c04f = _0x8a76ce;
                                        if (!_0x4c4554(this)[_0x33c04f(0x183)](_0x33c04f(0x2f3))) {
                                            let _0x59a7f4 = _0x4c4554(this)[_0x33c04f(0x32c)]()[_0x33c04f(0x1b3)](_0x33c04f(0x2e4))[_0x33c04f(0x2bf)](_0x33c04f(0x1cf));
                                            _0x59a7f4[_0x33c04f(0x218)] > 0x0 ? (_0x4c4554(this)[_0x33c04f(0x176)]('data-loop', !![]), _0x59a7f4[_0x33c04f(0x305)](_0x33c04f(0x262)), _0x52fd98(_0x33c04f(0x2a0))) : (_0x4c4554(this)['attr'](_0x33c04f(0x350), !![]), _0x4c4554(this)['parent']()['find'](_0x33c04f(0x19a))[_0x33c04f(0x37a)](_0x33c04f(0x14d)), this[_0x33c04f(0x378)](), _0x52fd98('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()'));
                                        }
                                    });
                                });
                                _0x553be6[_0x4bbb4b(0x34b)] && _0x4c4554(this)[_0x4bbb4b(0x1b3)]('video')[_0x4bbb4b(0x292)](function () {
                                    const _0x3935aa = _0x4bbb4b;
                                    if (!_0x4c4554(this)[_0x3935aa(0x183)]('controls')) {
                                        let _0x39d65f = _0x4c4554(this);
                                        _0x52fd98(_0x3935aa(0x232)), _0x553be6['MODIFY_VIDEO_VOLUME'] && (this[_0x3935aa(0x126)] = _0x1e6772[_0x3935aa(0x135)], _0x4c4554(this)['on']('loadstart', function () {
                                            const _0xcac4a2 = _0x3935aa;
                                            this[_0xcac4a2(0x126)] = _0x1e6772[_0xcac4a2(0x135)];
                                        })), _0x4c4554(this)['on']('contextmenu', function (_0x143389) {
                                            const _0x56e545 = _0x3935aa;
                                            _0x143389[_0x56e545(0x35e)](), _0x39d65f[_0x56e545(0x347)](_0x56e545(0x17a), '-1'), _0x39d65f[_0x56e545(0x37a)](_0x56e545(0x2fd));
                                        }), _0x4c4554(this)[_0x3935aa(0x321)]()[_0x3935aa(0x1b3)](_0x3935aa(0x255))[_0x3935aa(0x38a)](function () {
                                            const _0x2418c7 = _0x3935aa;
                                            return _0x4c4554(this)[_0x2418c7(0x321)]('div[role=\x22presentation\x22]')[_0x2418c7(0x218)] > 0x0 && _0x4c4554(this)['css']('cursor') === _0x2418c7(0x2f9) && _0x4c4554(this)[_0x2418c7(0x176)](_0x2418c7(0x14d)) != null;
                                        })['first']()['on'](_0x3935aa(0x293), function (_0x52c31d) {
                                            const _0x49efcb = _0x3935aa;
                                            _0x52c31d[_0x49efcb(0x35e)](), _0x39d65f['css']('z-index', '2'), _0x39d65f[_0x49efcb(0x176)](_0x49efcb(0x2fd), !![]);
                                        }), _0x4c4554(this)['on'](_0x3935aa(0x170), function () {
                                            const _0x1ee2f5 = _0x3935aa;
                                            let _0x13480c = _0x4c4554(this)[_0x1ee2f5(0x321)]()[_0x1ee2f5(0x1b3)](_0x1ee2f5(0x2a6))[_0x1ee2f5(0x1b3)](_0x1ee2f5(0x364))['filter'](function (_0x1a6c78) {
                                                const _0x1c877e = _0x1ee2f5;
                                                return _0x4c4554(this)[_0x1c877e(0x1c3)]() <= 0x40 && _0x4c4554(this)[_0x1c877e(0x127)]() <= 0x40 && _0x4c4554(this)[_0x1c877e(0x1b3)](_0x1c877e(0x300))[_0x1c877e(0x218)] > 0x0;
                                            });
                                            var _0xa8cf04 = _0x13480c[_0x1ee2f5(0x1b3)]('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0x1ee2f5(0x218)] === 0x0;
                                            this['muted'] != _0xa8cf04 && (this[_0x1ee2f5(0x126)] = _0x1e6772[_0x1ee2f5(0x135)], _0x13480c?.[_0x1ee2f5(0x305)]('click')), _0x4c4554(this)[_0x1ee2f5(0x176)](_0x1ee2f5(0x342)) && (_0x1e6772['videoVolume'] = this[_0x1ee2f5(0x126)], GM_setValue(_0x1ee2f5(0x2ea), this[_0x1ee2f5(0x126)])), this[_0x1ee2f5(0x126)] == _0x1e6772['videoVolume'] && _0x4c4554(this)['attr'](_0x1ee2f5(0x342), !![]);
                                        }), _0x4c4554(this)[_0x3935aa(0x347)](_0x3935aa(0x2cd), _0x3935aa(0x234)), _0x4c4554(this)[_0x3935aa(0x347)](_0x3935aa(0x17a), '2'), _0x4c4554(this)[_0x3935aa(0x176)](_0x3935aa(0x15b), !![]), _0x4c4554(this)[_0x3935aa(0x176)](_0x3935aa(0x2fd), !![]);
                                    }
                                });
                                var _0x1ab749 = _0x5109fd[_0x4bbb4b(0x1b3)](_0x4bbb4b(0x167)), _0x8caf0a = _0x4c4554(this)[_0x4bbb4b(0x1b3)]('div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div')[_0x4bbb4b(0x1d8)]();
                                _0x4f726e(_0x1ab749, _0x8caf0a, _0x4bbb4b(0x25f));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0xa81c3e() {
            const _0x354daa = _0x49db9c;
            _0x11dd8b(!![]);
            let _0x36ee87 = new Date()['getTime'](), _0x54955d = Math[_0x354daa(0x10e)](_0x36ee87 / 0x3e8), _0x10742c = _0x4c4554('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x354daa(0x1d8)]()['text']() || location[_0x354daa(0x375)][_0x354daa(0x2c5)]('/')[_0x354daa(0x38a)](_0x25c9d2 => _0x25c9d2['length'] > 0x0)['at'](0x1), _0x380a81 = await _0x249639(_0x10742c), _0x3bbbc0 = _0x380a81['user']['pk'], _0xc52a2a = await _0x43fa9b(_0x3bbbc0), _0x1fe711 = 0x0;
            _0x35b6c9(_0x1fe711, _0xc52a2a[_0x354daa(0x183)]['reels_media'][0x0][_0x354daa(0x1e9)]['length']), _0xc52a2a[_0x354daa(0x183)]['reels_media'][0x0][_0x354daa(0x1e9)][_0x354daa(0x310)]((_0x107cb9, _0x124f87) => {
                setTimeout(() => {
                    const _0x26180e = a0_0xe1f8;
                    _0x553be6[_0x26180e(0x329)] && (_0x54955d = _0x107cb9[_0x26180e(0x36b)]), _0x107cb9[_0x26180e(0x397)][_0x26180e(0x235)](function (_0x26581b, _0x4138ab) {
                        const _0x6c435e = _0x26180e;
                        if (_0x26581b[_0x6c435e(0x12b)] < _0x4138ab['config_width'])
                            return 0x1;
                        if (_0x26581b[_0x6c435e(0x12b)] > _0x4138ab[_0x6c435e(0x12b)])
                            return -0x1;
                        return 0x0;
                    }), _0x107cb9['is_video'] ? _0x14dcb5(_0x107cb9[_0x26180e(0x34f)][0x0][_0x26180e(0x26a)], _0x10742c, _0x26180e(0x116), _0x54955d, 'mp4', _0x107cb9['id'])['then'](() => {
                        const _0xa15e50 = _0x26180e;
                        _0x35b6c9(++_0x1fe711, _0xc52a2a[_0xa15e50(0x183)][_0xa15e50(0x146)][0x0]['items'][_0xa15e50(0x218)]);
                    }) : _0x14dcb5(_0x107cb9[_0x26180e(0x397)][0x0][_0x26180e(0x26a)], _0x10742c, _0x26180e(0x116), _0x54955d, _0x26180e(0x28d), _0x107cb9['id'])[_0x26180e(0x318)](() => {
                        const _0x42b0d0 = _0x26180e;
                        _0x35b6c9(++_0x1fe711, _0xc52a2a['data'][_0x42b0d0(0x146)][0x0][_0x42b0d0(0x1e9)]['length']);
                    });
                }, 0x64 * _0x124f87);
            });
        }
        async function _0xd14af3(_0x2df8d2, _0x40ec5f, _0x1b99d4) {
            const _0x342098 = _0x49db9c;
            var _0x1e1429 = _0x4c4554(_0x342098(0x2fe))[_0x342098(0x1d8)]()[_0x342098(0x1c4)]() || location[_0x342098(0x375)][_0x342098(0x2c5)]('/')['filter'](_0x157411 => _0x157411[_0x342098(0x218)] > 0x0)['at'](0x1);
            if (_0x2df8d2) {
                let _0xe775f = new Date()[_0x342098(0x393)](), _0x5157c5 = Math[_0x342098(0x10e)](_0xe775f / 0x3e8);
                _0x11dd8b(!![]);
                if (_0x553be6['FORCE_RESOURCE_VIA_MEDIA'] && !_0x1e6772[_0x342098(0x2c7)]) {
                    let _0x5b6145 = null, _0x31bc32 = await _0x249639(_0x1e1429), _0x30e287 = _0x31bc32[_0x342098(0x30a)]['pk'], _0x2e6dc1 = await _0x43fa9b(_0x30e287), _0x4ce3ad = location[_0x342098(0x375)][_0x342098(0x2c5)]('/')['filter'](_0x1e3db1 => _0x1e3db1[_0x342098(0x218)] > 0x0 && _0x1e3db1[_0x342098(0x367)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x2e6dc1[_0x342098(0x183)]['reels_media'][0x0]['items']['forEach'](_0x35c52e => {
                        _0x35c52e['id'] == _0x4ce3ad && (_0x5b6145 = _0x35c52e['id']);
                    });
                    if (_0x5b6145 == null) {
                        let _0xc85823 = _0x2286d6(_0x1e1429);
                        _0xc85823[_0x342098(0x292)](function (_0x57c0e4) {
                            const _0x3b79e0 = _0x342098;
                            _0x4c4554(this)['children']()['length'] > 0x0 && (_0x5b6145 = _0x2e6dc1[_0x3b79e0(0x183)][_0x3b79e0(0x146)][0x0][_0x3b79e0(0x1e9)][_0x57c0e4]['id']);
                        });
                    }
                    _0x5b6145 == null && (_0x4c4554(_0x342098(0x333))[_0x342098(0x292)](function (_0x1b429c) {
                        const _0x222084 = _0x342098;
                        _0x4c4554(this)['hasClass'](_0x222084(0x281)) && (_0x4c4554(this)['children']()['length'] > 0x0 && (_0x5b6145 = _0x2e6dc1['data']['reels_media'][0x0]['items'][_0x1b429c]['id']));
                    }), _0x4c4554(_0x342098(0x22e))[_0x342098(0x292)](function (_0x1bb368) {
                        const _0x2e516d = _0x342098;
                        _0x4c4554(this)[_0x2e516d(0x141)]()[_0x2e516d(0x2bb)](_0x2e516d(0x336)) && (_0x5b6145 = _0x2e6dc1[_0x2e516d(0x183)]['reels_media'][0x0]['items'][_0x1bb368]['id']);
                    }));
                    _0x5b6145 == null && (_0x5b6145 = location[_0x342098(0x375)][_0x342098(0x2c5)]('/')[_0x342098(0x38a)](_0x354731 => _0x354731[_0x342098(0x218)] > 0x0 && _0x354731[_0x342098(0x367)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x3d13b5 = await _0xbaab7e(_0x5b6145);
                    _0x553be6['RENAME_PUBLISH_DATE'] && (_0x5157c5 = _0x3d13b5[_0x342098(0x1e9)][0x0][_0x342098(0x39c)]);
                    _0x3d13b5[_0x342098(0x2b8)] === 'ok' ? _0x3d13b5['items'][0x0]['video_versions'] ? _0x1b99d4 ? _0x2bb277(_0x3d13b5[_0x342098(0x1e9)][0x0][_0x342098(0x326)][0x0]['url']) : _0x14dcb5(_0x3d13b5[_0x342098(0x1e9)][0x0]['video_versions'][0x0][_0x342098(0x37f)], _0x1e1429, 'stories', _0x5157c5, 'mp4', _0x5b6145) : _0x1b99d4 ? _0x2bb277(_0x3d13b5[_0x342098(0x1e9)][0x0][_0x342098(0x17c)][_0x342098(0x1d7)][0x0]['url']) : _0x14dcb5(_0x3d13b5[_0x342098(0x1e9)][0x0][_0x342098(0x17c)]['candidates'][0x0][_0x342098(0x37f)], _0x1e1429, _0x342098(0x116), _0x5157c5, _0x342098(0x28d), _0x5b6145) : (_0x553be6[_0x342098(0x34d)] ? (_0x1e6772[_0x342098(0x2c7)] = !![], _0xd14af3(_0x2df8d2, _0x40ec5f, _0x1b99d4)) : alert(_0x342098(0x14f) + _0x3d13b5[_0x342098(0x1d9)]), _0x52fd98(_0x3d13b5));
                    _0x11dd8b(![]);
                    return;
                }
                if (_0x4c4554(_0x342098(0x20e))[_0x342098(0x218)] > 0x0) {
                    let _0x1694fc = _0x342098(0x11d), _0x13f1b5 = '', _0xbdf26f = location[_0x342098(0x375)]['replace'](/\/$/ig, '')[_0x342098(0x2c5)]('/')['at'](-0x1), _0x43c207 = null;
                    if (_0x1e6772[_0x342098(0x219)][_0x342098(0x116)][_0x1e1429] && !_0x40ec5f) {
                        _0x52fd98(_0x342098(0x280), _0x1e1429), _0x1e6772['GL_dataCache'][_0x342098(0x116)][_0x1e1429][_0x342098(0x183)]['reels_media'][0x0][_0x342098(0x1e9)]['forEach'](_0x4df5aa => {
                            const _0x4a00f7 = _0x342098;
                            _0x4df5aa['id'] == _0xbdf26f && (_0x13f1b5 = _0x4df5aa[_0x4a00f7(0x34f)][0x0][_0x4a00f7(0x26a)], _0x553be6[_0x4a00f7(0x329)] && (_0x5157c5 = _0x4df5aa['taken_at_timestamp'], _0x43c207 = _0x4df5aa['id']));
                        });
                        if (_0x13f1b5[_0x342098(0x218)] == 0x0) {
                            _0x52fd98(_0x342098(0x247), _0x1e1429), _0xd14af3(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x5f2cf6 = await _0x249639(_0x1e1429), _0x301da0 = _0x5f2cf6['user']['pk'], _0x30ed6a = await _0x43fa9b(_0x301da0);
                        _0x30ed6a[_0x342098(0x183)][_0x342098(0x146)][0x0][_0x342098(0x1e9)][_0x342098(0x310)](_0x57ade8 => {
                            const _0x16686b = _0x342098;
                            _0x57ade8['id'] == _0xbdf26f && (_0x13f1b5 = _0x57ade8['video_resources'][0x0][_0x16686b(0x26a)], _0x553be6['RENAME_PUBLISH_DATE'] && (_0x5157c5 = _0x57ade8[_0x16686b(0x36b)], _0x43c207 = _0x57ade8['id']));
                        });
                        if (_0x13f1b5['length'] == 0x0) {
                            let _0xf2fa23 = _0x2286d6(_0x1e1429);
                            _0xf2fa23['each'](function (_0x91cee1) {
                                const _0x59f600 = _0x342098;
                                _0x4c4554(this)[_0x59f600(0x141)]()[_0x59f600(0x218)] > 0x0 && (_0x13f1b5 = _0x30ed6a[_0x59f600(0x183)]['reels_media'][0x0]['items'][_0x91cee1][_0x59f600(0x34f)][0x0][_0x59f600(0x26a)], _0x553be6[_0x59f600(0x329)] && (_0x5157c5 = _0x30ed6a['data'][_0x59f600(0x146)][0x0][_0x59f600(0x1e9)][_0x91cee1][_0x59f600(0x36b)], _0x43c207 = _0x30ed6a[_0x59f600(0x183)][_0x59f600(0x146)][0x0][_0x59f600(0x1e9)][_0x91cee1]['id']));
                            }), _0x13f1b5['length'] == 0x0 && (_0x4c4554(_0x342098(0x333))[_0x342098(0x292)](function (_0x3cf25a) {
                                const _0x568e77 = _0x342098;
                                _0x4c4554(this)[_0x568e77(0x2bb)](_0x568e77(0x281)) && (_0x4c4554(this)['children']()[_0x568e77(0x218)] > 0x0 && (_0x13f1b5 = _0x30ed6a[_0x568e77(0x183)]['reels_media'][0x0][_0x568e77(0x1e9)][_0x3cf25a][_0x568e77(0x34f)][0x0][_0x568e77(0x26a)], _0x553be6[_0x568e77(0x329)] && (_0x5157c5 = _0x30ed6a[_0x568e77(0x183)][_0x568e77(0x146)][0x0][_0x568e77(0x1e9)][_0x3cf25a][_0x568e77(0x36b)], _0x43c207 = _0x30ed6a[_0x568e77(0x183)][_0x568e77(0x146)][0x0][_0x568e77(0x1e9)][_0x3cf25a]['id'])));
                            }), _0x4c4554(_0x342098(0x22e))[_0x342098(0x292)](function (_0x3a0a23) {
                                const _0x1fced8 = _0x342098;
                                _0x4c4554(this)[_0x1fced8(0x141)]()['hasClass'](_0x1fced8(0x336)) && (_0x13f1b5 = _0x30ed6a[_0x1fced8(0x183)][_0x1fced8(0x146)][0x0][_0x1fced8(0x1e9)][_0x3a0a23][_0x1fced8(0x34f)][0x0][_0x1fced8(0x26a)], _0x553be6[_0x1fced8(0x329)] && (_0x5157c5 = _0x30ed6a['data']['reels_media'][0x0]['items'][_0x3a0a23][_0x1fced8(0x36b)], _0x43c207 = _0x30ed6a[_0x1fced8(0x183)][_0x1fced8(0x146)][0x0][_0x1fced8(0x1e9)][_0x3a0a23]['id']));
                            }));
                        }
                        _0x1e6772[_0x342098(0x219)][_0x342098(0x116)][_0x1e1429] = _0x30ed6a;
                    }
                    _0x13f1b5[_0x342098(0x218)] == 0x0 ? alert(_0x1ca060('NO_VID_URL')) : _0x1b99d4 ? _0x2bb277(_0x13f1b5) : _0x14dcb5(_0x13f1b5, _0x1e1429, _0x342098(0x116), _0x5157c5, _0x1694fc, _0x43c207);
                } else {
                    let _0x1a2aa9 = _0x4c4554(_0x342098(0x264))[_0x342098(0x176)](_0x342098(0x25c))?.[_0x342098(0x2c5)](',')[0x0]?.[_0x342098(0x2c5)]('\x20')[0x0], _0x3068d9 = _0x1a2aa9 ? _0x1a2aa9 : _0x4c4554(_0x342098(0x264))[_0x342098(0x38a)](function () {
                            const _0x22cbde = _0x342098;
                            return _0x4c4554(this)[_0x22cbde(0x2bf)]('a')[_0x22cbde(0x218)] === 0x0 && _0x4c4554(this)[_0x22cbde(0x1c3)]() === _0x4c4554(this)[_0x22cbde(0x321)]()['width']();
                        })[_0x342098(0x176)](_0x342098(0x26a));
                    if (!_0x3068d9) {
                        let _0x3118af = _0x4c4554(_0x342098(0x2b5));
                        _0x3068d9 = _0x3118af[_0x342098(0x176)](_0x342098(0x25c)) ? _0x3118af[_0x342098(0x176)]('srcset')?.[_0x342098(0x2c5)](',')[0x0]?.[_0x342098(0x2c5)]('\x20')[0x0] : _0x3118af[_0x342098(0x176)](_0x342098(0x26a));
                    }
                    _0x553be6[_0x342098(0x329)] && (_0x5157c5 = new Date(_0x4c4554(_0x342098(0x277))[_0x342098(0x1d8)]()[_0x342098(0x176)](_0x342098(0x349)))[_0x342098(0x393)]());
                    let _0x5be866 = _0x3068d9, _0x434b13 = _0x342098(0x28d);
                    _0x1b99d4 ? _0x2bb277(_0x5be866) : _0x14dcb5(_0x5be866, _0x1e1429, 'stories', _0x5157c5, _0x434b13, _0x5bef9f(_0x5be866) ?? '');
                }
                _0x1e6772[_0x342098(0x2c7)] = ![], _0x11dd8b(![]);
            } else {
                if (!_0x4c4554(_0x342098(0x270))[_0x342098(0x218)]) {
                    _0x1e6772[_0x342098(0x219)][_0x342098(0x116)] = {};
                    let _0x3d706f = null;
                    _0x4c4554(_0x342098(0x2a5))[_0x342098(0x218)] > 0x0 ? _0x3d706f = _0x4c4554('body\x20>\x20div\x20section:visible._ac0a') : (_0x3d706f = _0x4c4554(_0x342098(0x185)), _0x3d706f['css']('position', _0x342098(0x1ec)));
                    _0x3d706f[_0x342098(0x218)] === 0x0 && (_0x3d706f = _0x4c4554(_0x342098(0x12e))[_0x342098(0x321)]()[_0x342098(0x321)]()['parent']()[_0x342098(0x1b3)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x3d706f[_0x342098(0x347)]('position', 'relative'));
                    _0x3d706f['length'] === 0x0 && (_0x3d706f = _0x4c4554(_0x342098(0x12e))[_0x342098(0x321)]()['parent']()['parent']()['find']('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x3d706f[_0x342098(0x347)](_0x342098(0x2cd), _0x342098(0x1ec)));
                    if (_0x3d706f['length'] === 0x0) {
                        let _0x202b44 = _0x4c4554(_0x342098(0x2fc)), _0x4cd34b = 0x0;
                        _0x202b44[_0x342098(0x292)](function () {
                            const _0x387499 = _0x342098;
                            _0x4c4554(this)[_0x387499(0x1c3)]() > _0x4cd34b && (_0x4cd34b = _0x4c4554(this)['width'](), _0x3d706f = _0x4c4554(this)[_0x387499(0x141)](_0x387499(0x34a))[_0x387499(0x1d8)]());
                        });
                    }
                    if (_0x3d706f != null) {
                        _0x3d706f[_0x342098(0x1d8)]()['css'](_0x342098(0x2cd), _0x342098(0x1ec)), _0x3d706f['first']()['append'](_0x342098(0x153) + _0x1ca060('DW') + _0x342098(0x1ac) + _0x13a0d9[_0x342098(0x1a4)] + _0x342098(0x325)), _0x3d706f['first']()[_0x342098(0x2dc)](_0x342098(0x316) + _0x1ca060('NEW_TAB') + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x13a0d9[_0x342098(0x12a)] + _0x342098(0x325));
                        let _0x5abb21 = _0x2286d6(_0x1e1429);
                        _0x5abb21['length'] > 0x1 && _0x3d706f[_0x342098(0x1d8)]()['append'](_0x342098(0x339) + _0x1ca060(_0x342098(0x324)) + '\x22\x20class=\x22IG_DWSTORY_ALL\x22>' + _0x13a0d9[_0x342098(0x14e)] + _0x342098(0x325)), _0x3d706f[_0x342098(0x1b3)](_0x342098(0x1e2))[_0x342098(0x292)](function () {
                            const _0x231a88 = _0x342098;
                            _0x4c4554(this)['on'](_0x231a88(0x2e2), function () {
                                const _0x5e10de = _0x231a88;
                                !_0x4c4554(this)[_0x5e10de(0x183)](_0x5e10de(0x1a9)) && (_0x3d706f['find']('.IG_DWSTORY_THUMBNAIL')['length'] === 0x0 ? (_0x4c4554(this)['attr']('data-remove-thumbnail', !![]), _0x4c4554(_0x5e10de(0x285))[_0x5e10de(0x19f)](), _0x52fd98(_0x5e10de(0x21a))) : (_0x4c4554(this)['attr'](_0x5e10de(0x18d), !![]), _0x52fd98('(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x1f82b1(_0x49c837, _0x20a50e) {
            const _0x8414b4 = _0x49db9c;
            if (_0x49c837) {
                let _0x37fd9f = new Date()[_0x8414b4(0x393)](), _0x20ff7f = Math[_0x8414b4(0x10e)](_0x37fd9f / 0x3e8), _0x1141cc = 'jpg', _0x3ff2ba = _0x4c4554(_0x8414b4(0x2fe))[_0x8414b4(0x1d8)]()['text']() || location[_0x8414b4(0x375)]['split']('/')['at'](0x2), _0x2b890e = location[_0x8414b4(0x375)][_0x8414b4(0x399)](/\/$/ig, '')[_0x8414b4(0x2c5)]('/')['at'](-0x1), _0x1dadf7 = '', _0x591024 = null;
                _0x11dd8b(!![]);
                if (_0x553be6[_0x8414b4(0x16f)] && !_0x1e6772[_0x8414b4(0x2c7)]) {
                    let _0x43b9e8 = await _0x249639(_0x3ff2ba), _0x55814b = _0x43b9e8[_0x8414b4(0x30a)]['pk'], _0x35cc4d = await _0x43fa9b(_0x55814b), _0x5a7684 = location[_0x8414b4(0x375)][_0x8414b4(0x2c5)]('/')[_0x8414b4(0x38a)](_0xa1307c => _0xa1307c[_0x8414b4(0x218)] > 0x0 && _0xa1307c[_0x8414b4(0x367)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x35cc4d['data'][_0x8414b4(0x146)][0x0][_0x8414b4(0x1e9)]['forEach'](_0xa3c220 => {
                        _0xa3c220['id'] == _0x5a7684 && (_0x591024 = _0xa3c220['id']);
                    });
                    if (_0x591024 == null) {
                        let _0x12d6c2 = _0x2286d6(_0x3ff2ba);
                        _0x12d6c2['each'](function (_0x2bb031) {
                            const _0x44b56f = _0x8414b4;
                            _0x4c4554(this)['children']()[_0x44b56f(0x218)] > 0x0 && (_0x591024 = _0x35cc4d['data']['reels_media'][0x0][_0x44b56f(0x1e9)][_0x2bb031]['id']);
                        });
                    }
                    _0x591024 == null && (_0x4c4554('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x8414b4(0x292)](function (_0x18bfd4) {
                        const _0x394f94 = _0x8414b4;
                        _0x4c4554(this)[_0x394f94(0x2bb)](_0x394f94(0x281)) && (_0x4c4554(this)[_0x394f94(0x141)]()[_0x394f94(0x218)] > 0x0 && (_0x591024 = _0x35cc4d[_0x394f94(0x183)][_0x394f94(0x146)][0x0][_0x394f94(0x1e9)][_0x18bfd4]['id']));
                    }), _0x4c4554(_0x8414b4(0x22e))[_0x8414b4(0x292)](function (_0x4ab03b) {
                        const _0x3d973b = _0x8414b4;
                        _0x4c4554(this)[_0x3d973b(0x141)]()[_0x3d973b(0x2bb)](_0x3d973b(0x336)) && (_0x591024 = _0x35cc4d['data'][_0x3d973b(0x146)][0x0][_0x3d973b(0x1e9)][_0x4ab03b]['id']);
                    }));
                    _0x591024 == null && (_0x591024 = location[_0x8414b4(0x375)][_0x8414b4(0x2c5)]('/')[_0x8414b4(0x38a)](_0x2468f4 => _0x2468f4[_0x8414b4(0x218)] > 0x0 && _0x2468f4[_0x8414b4(0x367)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x24f82b = await _0xbaab7e(_0x591024);
                    _0x553be6[_0x8414b4(0x329)] && (_0x20ff7f = _0x24f82b[_0x8414b4(0x1e9)][0x0][_0x8414b4(0x39c)]);
                    _0x24f82b[_0x8414b4(0x2b8)] === 'ok' ? _0x14dcb5(_0x24f82b[_0x8414b4(0x1e9)][0x0][_0x8414b4(0x17c)][_0x8414b4(0x1d7)][0x0][_0x8414b4(0x37f)], _0x3ff2ba, 'stories', _0x20ff7f, _0x8414b4(0x28d), _0x591024) : (_0x553be6[_0x8414b4(0x34d)] ? (_0x1e6772['tempFetchRateLimit'] = !![], _0x1f82b1(!![], _0x20a50e)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x24f82b[_0x8414b4(0x1d9)]), _0x52fd98(_0x24f82b));
                    _0x11dd8b(![]);
                    return;
                }
                if (_0x1e6772[_0x8414b4(0x219)]['stories'][_0x3ff2ba] && !_0x20a50e) {
                    _0x52fd98('Fetch\x20from\x20memory\x20cache:', _0x3ff2ba), _0x1e6772[_0x8414b4(0x219)][_0x8414b4(0x116)][_0x3ff2ba]['data']['reels_media'][0x0][_0x8414b4(0x1e9)][_0x8414b4(0x310)](_0x1cafce => {
                        const _0x1799d1 = _0x8414b4;
                        _0x1cafce['id'] == _0x2b890e && (_0x1dadf7 = _0x1cafce[_0x1799d1(0x25b)], _0x553be6[_0x1799d1(0x329)] && (_0x20ff7f = _0x1cafce[_0x1799d1(0x36b)], _0x591024 = _0x1cafce['id']));
                    });
                    if (_0x1dadf7[_0x8414b4(0x218)] == 0x0) {
                        _0x52fd98(_0x8414b4(0x247), _0x3ff2ba), _0x1f82b1(!![], !![]);
                        return;
                    }
                } else {
                    let _0x13c903 = await _0x249639(_0x3ff2ba), _0x1347be = _0x13c903[_0x8414b4(0x30a)]['pk'], _0xd5f0d4 = await _0x43fa9b(_0x1347be);
                    _0xd5f0d4['data'][_0x8414b4(0x146)][0x0][_0x8414b4(0x1e9)][_0x8414b4(0x310)](_0x3063bc => {
                        const _0x4b56d9 = _0x8414b4;
                        _0x3063bc['id'] == _0x2b890e && (_0x1dadf7 = _0x3063bc[_0x4b56d9(0x25b)], _0x553be6[_0x4b56d9(0x329)] && (_0x20ff7f = _0x3063bc[_0x4b56d9(0x36b)], _0x591024 = _0x3063bc['id']));
                    });
                    if (_0x1dadf7['length'] == 0x0) {
                        let _0x2a690c = _0x2286d6(_0x3ff2ba);
                        _0x2a690c['each'](function (_0x3b81e0) {
                            const _0x55ddc0 = _0x8414b4;
                            _0x4c4554(this)['children']()[_0x55ddc0(0x218)] > 0x0 && (_0x1dadf7 = _0xd5f0d4['data'][_0x55ddc0(0x146)][0x0]['items'][_0x3b81e0][_0x55ddc0(0x25b)], _0x553be6[_0x55ddc0(0x329)] && (_0x20ff7f = _0xd5f0d4[_0x55ddc0(0x183)][_0x55ddc0(0x146)][0x0][_0x55ddc0(0x1e9)][_0x3b81e0][_0x55ddc0(0x36b)], _0x591024 = _0xd5f0d4['data'][_0x55ddc0(0x146)][0x0]['items'][_0x3b81e0]['id']));
                        }), _0x1dadf7[_0x8414b4(0x218)] == 0x0 && (_0x4c4554(_0x8414b4(0x333))[_0x8414b4(0x292)](function (_0x1e90f9) {
                            const _0x3abc34 = _0x8414b4;
                            _0x4c4554(this)[_0x3abc34(0x2bb)](_0x3abc34(0x281)) && (_0x4c4554(this)[_0x3abc34(0x141)]()['length'] > 0x0 && (_0x1dadf7 = _0xd5f0d4['data'][_0x3abc34(0x146)][0x0][_0x3abc34(0x1e9)][_0x1e90f9][_0x3abc34(0x25b)], _0x553be6['RENAME_PUBLISH_DATE'] && (_0x20ff7f = _0xd5f0d4[_0x3abc34(0x183)][_0x3abc34(0x146)][0x0][_0x3abc34(0x1e9)][_0x1e90f9][_0x3abc34(0x36b)], _0x591024 = _0xd5f0d4['data'][_0x3abc34(0x146)][0x0][_0x3abc34(0x1e9)][_0x1e90f9]['id'])));
                        }), _0x4c4554(_0x8414b4(0x22e))[_0x8414b4(0x292)](function (_0x1637d4) {
                            const _0x1a6242 = _0x8414b4;
                            _0x4c4554(this)['children']()[_0x1a6242(0x2bb)]('_ac3q') && (_0x1dadf7 = _0xd5f0d4['data']['reels_media'][0x0][_0x1a6242(0x1e9)][_0x1637d4]['display_url'], _0x553be6[_0x1a6242(0x329)] && (_0x20ff7f = _0xd5f0d4['data'][_0x1a6242(0x146)][0x0][_0x1a6242(0x1e9)][_0x1637d4][_0x1a6242(0x36b)], _0x591024 = _0xd5f0d4[_0x1a6242(0x183)][_0x1a6242(0x146)][0x0]['items'][_0x1637d4]['id']));
                        }));
                    }
                }
                _0x14dcb5(_0x1dadf7, _0x3ff2ba, 'thumbnail', _0x20ff7f, _0x1141cc, _0x591024), _0x1e6772[_0x8414b4(0x2c7)] = ![], _0x11dd8b(![]);
            } else {
                if (_0x4c4554('body\x20>\x20div\x20div.IG_DWSTORY')['parent']()['find']('video[class]')['length']) {
                    let _0x51d1ab = null;
                    _0x4c4554(_0x8414b4(0x2a5))[_0x8414b4(0x218)] > 0x0 ? _0x51d1ab = _0x4c4554(_0x8414b4(0x142)) : (_0x51d1ab = _0x4c4554('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x51d1ab[_0x8414b4(0x347)](_0x8414b4(0x2cd), _0x8414b4(0x1ec)));
                    _0x51d1ab[_0x8414b4(0x218)] === 0x0 && (_0x51d1ab = _0x4c4554('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x8414b4(0x321)]()['parent']()['parent']()[_0x8414b4(0x1b3)](_0x8414b4(0x38d)), _0x51d1ab[_0x8414b4(0x347)]('position', _0x8414b4(0x1ec)));
                    _0x51d1ab[_0x8414b4(0x218)] === 0x0 && (_0x51d1ab = _0x4c4554(_0x8414b4(0x12e))['parent']()[_0x8414b4(0x321)]()[_0x8414b4(0x321)]()[_0x8414b4(0x1b3)](_0x8414b4(0x274)), _0x51d1ab[_0x8414b4(0x347)](_0x8414b4(0x2cd), _0x8414b4(0x1ec)));
                    if (_0x51d1ab[_0x8414b4(0x218)] === 0x0) {
                        let _0x26bd97 = _0x4c4554(_0x8414b4(0x2fc)), _0x59d8a9 = 0x0;
                        _0x26bd97[_0x8414b4(0x292)](function () {
                            const _0x26ec3c = _0x8414b4;
                            _0x4c4554(this)['width']() > _0x59d8a9 && (_0x59d8a9 = _0x4c4554(this)[_0x26ec3c(0x1c3)](), _0x51d1ab = _0x4c4554(this)[_0x26ec3c(0x141)](_0x26ec3c(0x34a))[_0x26ec3c(0x1d8)]());
                        });
                    }
                    _0x51d1ab != null && (_0x51d1ab[_0x8414b4(0x1d8)]()[_0x8414b4(0x347)](_0x8414b4(0x2cd), 'relative'), _0x51d1ab[_0x8414b4(0x1d8)]()['append'](_0x8414b4(0x36f) + _0x1ca060(_0x8414b4(0x360)) + _0x8414b4(0x32e) + _0x13a0d9['THUMBNAIL'] + '</div>'));
                }
            }
        }
        function _0x2a2e74(_0x66ae85) {
            return new Promise((_0x5a0a6a, _0x1164e5) => {
                const _0x1e316c = a0_0xe1f8;
                let _0x5ba9b8 = 'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22' + _0x66ae85 + _0x1e316c(0x346);
                GM_xmlhttpRequest({
                    'method': _0x1e316c(0x1f2),
                    'url': _0x5ba9b8,
                    'onload': function (_0x294307) {
                        const _0x7bc1bb = _0x1e316c;
                        try {
                            let _0x529b67 = JSON['parse'](_0x294307[_0x7bc1bb(0x205)]);
                            _0x5a0a6a(_0x529b67);
                        } catch (_0x5b1f8d) {
                            _0x52fd98(_0x7bc1bb(0x11f), 'reject', _0x5b1f8d[_0x7bc1bb(0x1d9)]), _0x1164e5(_0x5b1f8d);
                        }
                    },
                    'onerror': function (_0x378424) {
                        const _0x4ee07d = _0x1e316c;
                        _0x52fd98(_0x4ee07d(0x11f), _0x4ee07d(0x38c), _0x378424), _0x1164e5(_0x378424);
                    }
                });
            });
        }
        function _0x43fa9b(_0x176fea) {
            return new Promise((_0x2c1550, _0x260c05) => {
                const _0x5eb34a = a0_0xe1f8;
                let _0x2aaad4 = _0x5eb34a(0x2d7) + _0x176fea + _0x5eb34a(0x346);
                GM_xmlhttpRequest({
                    'method': _0x5eb34a(0x1f2),
                    'url': _0x2aaad4,
                    'onload': function (_0x5ccc37) {
                        const _0x3efc2a = _0x5eb34a;
                        try {
                            let _0x5cb8cf = JSON['parse'](_0x5ccc37['response']);
                            _0x52fd98(_0x3efc2a(0x26e), _0x5cb8cf), _0x2c1550(_0x5cb8cf);
                        } catch (_0x5cde31) {
                            _0x52fd98(_0x3efc2a(0x26e), 'reject', _0x5cde31[_0x3efc2a(0x1d9)]), _0x260c05(_0x5cde31);
                        }
                    },
                    'onerror': function (_0x31da85) {
                        const _0x4e4630 = _0x5eb34a;
                        _0x52fd98(_0x4e4630(0x26e), _0x4e4630(0x38c), _0x31da85), _0x260c05(_0x31da85);
                    }
                });
            });
        }
        function _0x249639(_0x3f0863) {
            return new Promise((_0x44e103, _0xaf6844) => {
                const _0x5e5a96 = a0_0xe1f8;
                let _0x19c414 = _0x5e5a96(0x36c) + _0x3f0863;
                GM_xmlhttpRequest({
                    'method': _0x5e5a96(0x1f2),
                    'url': _0x19c414,
                    'onload': function (_0x2a498e) {
                        const _0x5405c0 = _0x5e5a96;
                        let _0x2fc50b = JSON[_0x5405c0(0x236)](_0x2a498e[_0x5405c0(0x205)]), _0x931e4c = null;
                        _0x2fc50b[_0x5405c0(0x12c)][_0x5405c0(0x310)](_0x1485b8 => {
                            const _0x1e9a49 = _0x5405c0;
                            _0x1485b8[_0x1e9a49(0x30a)]['username']?.[_0x1e9a49(0x385)]() === _0x3f0863?.[_0x1e9a49(0x385)]() && (_0x931e4c = _0x1485b8);
                        }), _0x931e4c != null ? (_0x52fd98(_0x5405c0(0x18a), _0x931e4c), _0x44e103(_0x931e4c)) : _0x2d6a01(_0x3f0863)[_0x5405c0(0x318)](_0x3430af => {
                            _0x44e103(_0x3430af);
                        })[_0x5405c0(0x180)](_0x2b760c => {
                            alert('Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()');
                        });
                    },
                    'onerror': function (_0x25cc5c) {
                        const _0x13f503 = _0x5e5a96;
                        _0x52fd98('getUserId()', _0x13f503(0x38c), _0x25cc5c), _0xaf6844(_0x25cc5c);
                    }
                });
            });
        }
        function _0x2d6a01(_0x2e58e6) {
            return new Promise((_0x3ae301, _0x52ff41) => {
                const _0xd865a6 = a0_0xe1f8;
                let _0xf9fc3f = _0xd865a6(0x31f) + _0x2e58e6;
                GM_xmlhttpRequest({
                    'method': _0xd865a6(0x1f2),
                    'url': _0xf9fc3f,
                    'headers': { 'X-IG-App-ID': _0x4004ed() },
                    'onload': function (_0x388ca6) {
                        const _0xdf0013 = _0xd865a6;
                        try {
                            let _0x13f62 = JSON['parse'](_0x388ca6[_0xdf0013(0x205)]), _0x37b85e = _0x13f62?.[_0xdf0013(0x183)]?.[_0xdf0013(0x30a)];
                            if (_0x37b85e != null) {
                                let _0x420920 = _0x13f62?.[_0xdf0013(0x183)];
                                _0x420920[_0xdf0013(0x30a)]['pk'] = _0x420920[_0xdf0013(0x30a)]['id'], _0x52fd98(_0xdf0013(0x1be), _0x13f62), _0x3ae301(_0x420920);
                            } else
                                _0x52fd98(_0xdf0013(0x1be), _0xdf0013(0x38c), _0xdf0013(0x377)), _0x52ff41(_0xdf0013(0x377));
                        } catch (_0xd233de) {
                            _0x52fd98('getUserIdWithAgent()', _0xdf0013(0x38c), _0xd233de[_0xdf0013(0x1d9)]), _0x52ff41(_0xd233de);
                        }
                    },
                    'onerror': function (_0x42d15e) {
                        const _0xeb999e = _0xd865a6;
                        _0x52fd98(_0xeb999e(0x1be), 'reject', _0x42d15e), _0x52ff41(_0x42d15e);
                    }
                });
            });
        }
        function _0x1826cd(_0x1b63fc) {
            return new Promise((_0x24e35f, _0x491479) => {
                const _0x4cd7ae = a0_0xe1f8;
                let _0x3e19b4 = 'https://i.instagram.com/api/v1/users/' + _0x1b63fc + '/info/';
                GM_xmlhttpRequest({
                    'method': _0x4cd7ae(0x1f2),
                    'url': _0x3e19b4,
                    'headers': { 'User-Agent': _0x4cd7ae(0x1f1) },
                    'onload': function (_0x445924) {
                        const _0x3bd54d = _0x4cd7ae;
                        try {
                            let _0x49d86d = JSON[_0x3bd54d(0x236)](_0x445924[_0x3bd54d(0x205)]);
                            _0x49d86d[_0x3bd54d(0x2b8)] !== 'ok' ? (_0x52fd98('getUserHighSizeProfile()', 'reject', _0x49d86d), _0x491479(_0x3bd54d(0x32b))) : (_0x52fd98('getUserHighSizeProfile()', _0x49d86d), _0x24e35f(_0x49d86d['user'][_0x3bd54d(0x222)]?.[_0x3bd54d(0x37f)]));
                        } catch (_0x18677e) {
                            _0x52fd98('getUserHighSizeProfile()', _0x3bd54d(0x38c), _0x18677e), _0x491479(_0x18677e);
                        }
                    },
                    'onerror': function (_0x508ebf) {
                        const _0x244b2a = _0x4cd7ae;
                        _0x52fd98(_0x244b2a(0x22f), _0x244b2a(0x38c), _0x508ebf), _0x491479(_0x508ebf);
                    }
                });
            });
        }
        function _0x5d4ba7(_0x2a9b34) {
            return new Promise((_0x3b50a4, _0x3b5251) => {
                const _0x4e83e3 = a0_0xe1f8;
                if (!_0x2a9b34)
                    _0x3b5251(_0x4e83e3(0x35a));
                let _0x4c43fc = _0x2a9b34, _0x337c0a = _0x4e83e3(0x1ce) + _0x4c43fc + _0x4e83e3(0x1e4);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x337c0a,
                    'onload': function (_0x3169fe) {
                        const _0x5bba0a = _0x4e83e3;
                        try {
                            let _0x5b7d32 = JSON[_0x5bba0a(0x236)](_0x3169fe[_0x5bba0a(0x205)]);
                            _0x52fd98(_0x5bba0a(0x1e5), _0x5b7d32), _0x3b50a4(_0x5b7d32[_0x5bba0a(0x183)][_0x5bba0a(0x256)][_0x5bba0a(0x2e8)]['username']);
                        } catch (_0x53f74b) {
                            _0x52fd98('getPostOwner()', 'reject', _0x53f74b[_0x5bba0a(0x1d9)]), _0x3b5251(_0x53f74b);
                        }
                    },
                    'onerror': function (_0x47f0b8) {
                        const _0x2331bb = _0x4e83e3;
                        _0x52fd98(_0x2331bb(0x1e5), _0x2331bb(0x38c), _0x47f0b8), _0x3b5251(_0x47f0b8);
                    }
                });
            });
        }
        function _0xf96600(_0x1352db) {
            return new Promise((_0x423fa4, _0xae3d3f) => {
                const _0x1f1c1c = a0_0xe1f8;
                if (!_0x1352db)
                    _0xae3d3f(_0x1f1c1c(0x35a));
                let _0x51d180 = _0x1352db, _0x593776 = _0x1f1c1c(0x1ce) + _0x51d180 + '%22}';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x593776,
                    'headers': { 'User-Agent': _0x1f1c1c(0x1f1) },
                    'onload': function (_0x665559) {
                        const _0x5bce41 = _0x1f1c1c;
                        try {
                            let _0x1a0f67 = JSON[_0x5bce41(0x236)](_0x665559[_0x5bce41(0x205)]);
                            _0x52fd98(_0x1a0f67), _0x1a0f67[_0x5bce41(0x2b8)] === _0x5bce41(0x254) ? (_0x52fd98(_0x5bce41(0x1de), _0x5bce41(0x20f), _0x51d180), _0x4a94a8(_0x51d180)[_0x5bce41(0x318)](_0x3a5340 => {
                                const _0x2dc5db = _0x5bce41;
                                _0x423fa4({
                                    'type': _0x2dc5db(0x1bb),
                                    'data': _0x3a5340[_0x2dc5db(0x2f8)][_0x2dc5db(0x1e9)][0x0]
                                });
                            })[_0x5bce41(0x180)](_0x527f67 => {
                                _0xae3d3f(_0x527f67);
                            })) : _0x423fa4({
                                'type': _0x5bce41(0x304),
                                'data': _0x1a0f67[_0x5bce41(0x183)]
                            });
                        } catch (_0x462d3a) {
                            _0x52fd98(_0x5bce41(0x1bf), 'reject', _0x462d3a[_0x5bce41(0x1d9)]), _0xae3d3f(_0x462d3a);
                        }
                    },
                    'onerror': function (_0x15bbac) {
                        const _0x12eeb7 = _0x1f1c1c;
                        _0x52fd98(_0x12eeb7(0x1bf), _0x12eeb7(0x38c), _0x15bbac), _0xae3d3f(_0x15bbac);
                    }
                });
            });
        }
        function _0x4a94a8(_0x491a46) {
            return new Promise((_0x506001, _0x1d7cf9) => {
                const _0x8477d9 = a0_0xe1f8;
                if (!_0x491a46)
                    _0x1d7cf9(_0x8477d9(0x35a));
                let _0x202131 = _0x491a46, _0x2080c5 = 'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22' + _0x202131 + _0x8477d9(0x2ec);
                GM_xmlhttpRequest({
                    'method': _0x8477d9(0x1f2),
                    'url': _0x2080c5,
                    'headers': {
                        'User-Agent': _0x8477d9(0x1f1),
                        'X-IG-App-ID': _0x4004ed()
                    },
                    'onload': function (_0x2d811e) {
                        const _0x1e8718 = _0x8477d9;
                        try {
                            let _0x38ca8b = JSON[_0x1e8718(0x236)](_0x2d811e[_0x1e8718(0x205)]);
                            _0x52fd98(_0x38ca8b), _0x38ca8b[_0x1e8718(0x2b8)] === _0x1e8718(0x254) ? (alert(_0x1e8718(0x1c2) + _0x38ca8b[_0x1e8718(0x1d9)] + ':\x20' + _0x38ca8b[_0x1e8718(0x202)]), _0x52fd98(_0x1e8718(0x352) + _0x38ca8b[_0x1e8718(0x1d9)] + ':\x20' + _0x38ca8b[_0x1e8718(0x202)]), _0x1d7cf9(_0x2d811e)) : (_0x52fd98(_0x1e8718(0x2e7), _0x38ca8b[_0x1e8718(0x183)]), _0x506001(_0x38ca8b[_0x1e8718(0x183)]));
                        } catch (_0x4666da) {
                            _0x52fd98(_0x1e8718(0x2e7), 'reject', _0x4666da[_0x1e8718(0x1d9)]), _0x1d7cf9(_0x4666da);
                        }
                    },
                    'onerror': function (_0x3eaae1) {
                        const _0xd88aeb = _0x8477d9;
                        _0x52fd98('getBlobMediaWithQueryID()', _0xd88aeb(0x38c), _0x3eaae1), _0x1d7cf9(_0x3eaae1);
                    }
                });
            });
        }
        function _0xbaab7e(_0x62641a) {
            return new Promise((_0x446f5f, _0x45043f) => {
                const _0x210d43 = a0_0xe1f8;
                let _0x31badf = _0x210d43(0x27e) + _0x62641a + _0x210d43(0x156);
                if (_0x62641a == null) {
                    alert(_0x210d43(0x159)), _0x52fd98(_0x210d43(0x217), _0x210d43(0x38c), _0x210d43(0x159)), _0x11dd8b(![]), _0x45043f(-0x1);
                    return;
                }
                if (_0x4004ed() == null) {
                    alert(_0x210d43(0x128)), _0x52fd98(_0x210d43(0x217), _0x210d43(0x38c), _0x210d43(0x128)), _0x11dd8b(![]), _0x45043f(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x31badf,
                    'headers': {
                        'User-Agent': window['navigator'][_0x210d43(0x192)],
                        'Accept': _0x210d43(0x312),
                        'X-IG-App-ID': _0x4004ed()
                    },
                    'onload': function (_0x416097) {
                        const _0x4a19e0 = _0x210d43;
                        if (_0x416097[_0x4a19e0(0x237)] == _0x31badf) {
                            let _0x4a0210 = JSON[_0x4a19e0(0x236)](_0x416097[_0x4a19e0(0x205)]);
                            _0x52fd98(_0x4a19e0(0x217), _0x4a0210), _0x446f5f(_0x4a0210);
                        } else {
                            let _0x52825b = new URL(_0x416097[_0x4a19e0(0x237)]);
                            _0x52825b[_0x4a19e0(0x375)]['startsWith'](_0x4a19e0(0x2ce)) ? (_0x52fd98(_0x4a19e0(0x217), _0x4a19e0(0x38c), _0x4a19e0(0x2eb)), alert('The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.')) : (_0x52fd98(_0x4a19e0(0x217), _0x4a19e0(0x38c), 'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x416097['finalUrl'] + '\x22'), alert('Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x416097['finalUrl'] + '\x22')), _0x11dd8b(![]), _0x45043f(-0x1);
                        }
                    },
                    'onerror': function (_0x27001f) {
                        const _0x190eae = _0x210d43;
                        _0x52fd98(_0x190eae(0x217), _0x190eae(0x38c), _0x27001f), _0x446f5f(_0x27001f);
                    }
                });
            });
        }
        function _0x5bef9f(_0x26bcf4) {
            const _0x345e7f = _0x49db9c;
            let _0x229614 = new URL(_0x26bcf4), _0x18e1d7 = _0x229614?.[_0x345e7f(0x165)]?.[_0x345e7f(0x179)]('ig_cache_key')?.[_0x345e7f(0x2c5)]('.')['at'](0x0);
            return _0x18e1d7 ? atob(_0x18e1d7) : null;
        }
        function _0x4004ed() {
            const _0x80dcc7 = _0x49db9c;
            let _0x591b21 = null;
            return _0x4c4554('script[type=\x22application/json\x22]')[_0x80dcc7(0x292)](function () {
                const _0x5bc1cb = _0x80dcc7, _0x3145a4 = /"APP_ID":"([0-9]+)"/ig, _0x5c33d5 = _0x4c4554(this)['text']()[_0x5bc1cb(0x367)](_0x3145a4);
                _0x5c33d5 != null && _0x591b21 == null && (_0x591b21 = [..._0x4c4554(this)[_0x5bc1cb(0x1c4)]()[_0x5bc1cb(0x1a1)](_0x3145a4)]);
            }), _0x591b21 ? _0x591b21['at'](0x0)['at'](-0x1) : null;
        }
        function _0x11dd8b(_0x239da6) {
            const _0x5c4ead = _0x49db9c;
            _0x239da6 ? (_0x4c4554(_0x5c4ead(0x39a))[_0x5c4ead(0x115)](_0x5c4ead(0x1ff)), _0x4c4554(_0x5c4ead(0x39a))['css']('z-index', _0x5c4ead(0x294))) : (_0x4c4554(_0x5c4ead(0x39a))[_0x5c4ead(0x1f4)]('x1s85apg'), _0x4c4554('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x5c4ead(0x347)](_0x5c4ead(0x17a), ''));
        }
        function _0x2286d6(_0x220de9) {
            const _0x3fa6e3 = _0x49db9c;
            let _0x450f55 = _0x4c4554(_0x3fa6e3(0x14b) + _0x220de9 + _0x3fa6e3(0x16b))[_0x3fa6e3(0x38a)](function () {
                const _0x41b924 = _0x3fa6e3;
                return _0x4c4554(this)[_0x41b924(0x141)]()['length'] === 0x0 && _0x4c4554(this)[_0x41b924(0x1b3)](_0x41b924(0x233))[_0x41b924(0x218)] === 0x0 && _0x4c4554(this)[_0x41b924(0x1c4)]()?.[_0x41b924(0x385)]() === _0x220de9?.[_0x41b924(0x385)]();
            })['parents']('div:not([class]):not([style])')[_0x3fa6e3(0x38a)](function () {
                const _0x44e964 = _0x3fa6e3;
                return _0x4c4554(this)[_0x44e964(0x1c4)]()?.[_0x44e964(0x385)]() !== _0x220de9?.[_0x44e964(0x385)]();
            })['filter'](function () {
                const _0x41f204 = _0x3fa6e3;
                return _0x4c4554(this)['children']()[_0x41f204(0x218)] > 0x1;
            })['first']();
            return _0x450f55[_0x3fa6e3(0x218)] === 0x0 && (_0x450f55 = _0x4c4554('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x220de9 + '\x22]')[_0x3fa6e3(0x38a)](function () {
                const _0x34cfc9 = _0x3fa6e3;
                return _0x4c4554(this)[_0x34cfc9(0x1b3)]('img')[_0x34cfc9(0x218)] > 0x0;
            })[_0x3fa6e3(0x2bf)]('div:not([class]):not([style])')['filter'](function () {
                const _0x579988 = _0x3fa6e3;
                return _0x4c4554(this)[_0x579988(0x1c4)]()?.[_0x579988(0x385)]() !== _0x220de9?.[_0x579988(0x385)]();
            })['filter'](function () {
                const _0x1cf35e = _0x3fa6e3;
                return _0x4c4554(this)[_0x1cf35e(0x141)]()['length'] > 0x1;
            })['first']()), _0x450f55[_0x3fa6e3(0x141)]()[_0x3fa6e3(0x38a)](function () {
                const _0x25aaf2 = _0x3fa6e3;
                return _0x4c4554(this)[_0x25aaf2(0x127)]() < 0xa;
            })['first']()['children']();
        }
        function _0x35b6c9(_0x56fab9, _0xb64ec7) {
            const _0x100643 = _0x49db9c;
            _0x4c4554(_0x100643(0x356))['length'] ? (_0x4c4554(_0x100643(0x267))[_0x100643(0x1c4)](_0x56fab9 + '/' + _0xb64ec7), _0x56fab9 >= _0xb64ec7 && _0x4c4554('.circle_wrapper')[_0x100643(0x32d)](0xfa, function () {
                const _0x5ceec1 = _0x100643;
                _0x4c4554(this)[_0x5ceec1(0x19f)]();
            })) : _0x4c4554(_0x100643(0x19d))[_0x100643(0x2dc)](_0x100643(0x113) + _0x56fab9 + '/' + _0xb64ec7 + _0x100643(0x1b4));
        }
        function _0xc5b185(_0x6aa36e, _0x2ac78d) {
            const _0x5cbf88 = _0x49db9c;
            let _0x3d5a16 = _0x6aa36e ? 'hidden' : '';
            _0x4c4554(_0x5cbf88(0x19d))[_0x5cbf88(0x2dc)]('<div\x20class=\x22IG_POPUP_DIG\x20' + _0x3d5a16 + _0x5cbf88(0x368)), _0x4c4554(_0x5cbf88(0x382))[_0x5cbf88(0x2dc)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x1ca060(_0x5cbf88(0x240)) + _0x5cbf88(0x328) + GM_info['script'][_0x5cbf88(0x2c2)] + '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x13a0d9[_0x5cbf88(0x240)] + _0x5cbf88(0x2d5)), _0x2ac78d && (_0x4c4554(_0x5cbf88(0x382))[_0x5cbf88(0x2dc)](_0x5cbf88(0x32a)), _0x4c4554(_0x5cbf88(0x30b))['append']('<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>' + _0x1ca060(_0x5cbf88(0x195)) + _0x5cbf88(0x11e)), _0x4c4554(_0x5cbf88(0x30b))[_0x5cbf88(0x2dc)](_0x5cbf88(0x24d) + _0x1ca060(_0x5cbf88(0x199)) + _0x5cbf88(0x11e)), _0x4c4554(_0x5cbf88(0x382))['append']('<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>' + _0x1ca060(_0x5cbf88(0x209)) + _0x5cbf88(0x28a)));
        }
        function _0x5765dc(_0x7dde0f) {
            const _0x4e53f2 = _0x49db9c;
            _0x4c4554(_0x4e53f2(0x2a3))[_0x4e53f2(0x218)] && (_0x7dde0f ? _0x4c4554(_0x4e53f2(0x2a3))[_0x4e53f2(0x1f4)](_0x4e53f2(0x1d5)) : _0x4c4554(_0x4e53f2(0x2a3))[_0x4e53f2(0x115)](_0x4e53f2(0x1d5)));
        }
        function _0x14dcb5(_0x2be898, _0x40bc8b, _0x37aa20, _0x123440, _0x1075ec, _0xdf17d9) {
            return new Promise(_0x910fe2 => {
                setTimeout(() => {
                    _0x11dd8b(!![]), fetch(_0x2be898)['then'](_0x403721 => {
                        const _0x151577 = a0_0xe1f8;
                        return _0x403721[_0x151577(0x15e)]()[_0x151577(0x318)](_0x334225 => {
                            _0x11dd8b(![]), _0xb21a0b(_0x2be898, _0x334225, _0x40bc8b, _0x37aa20, _0x123440, _0x1075ec, _0xdf17d9), _0x910fe2(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0xb21a0b(_0xd734a5, _0x4447bd, _0x2a86f3, _0x5a2c22, _0x57b56e, _0x211828, _0x54cf71) {
            const _0x35c0a8 = _0x49db9c;
            _0x57b56e = parseInt(_0x57b56e[_0x35c0a8(0x290)]()[_0x35c0a8(0x136)](0xd, '0'));
            _0x553be6[_0x35c0a8(0x329)] && (_0x57b56e = parseInt(_0x57b56e['toString']()[_0x35c0a8(0x136)](0xd, '0')));
            const _0x1e7120 = new Date(_0x57b56e), _0x117831 = document[_0x35c0a8(0x37b)]('a'), _0x60325f = new URL(_0xd734a5)[_0x35c0a8(0x375)][_0x35c0a8(0x2c5)]('/')['at'](-0x1)['split']('.')['slice'](0x0, -0x1)['join']('.'), _0x526f64 = _0x1e7120['getFullYear']()['toString'](), _0x527fac = (_0x1e7120[_0x35c0a8(0x2da)]() + 0x1)[_0x35c0a8(0x290)]()[_0x35c0a8(0x213)](0x2, '0'), _0x538601 = _0x1e7120[_0x35c0a8(0x19e)]()[_0x35c0a8(0x290)]()[_0x35c0a8(0x213)](0x2, '0'), _0x38e113 = _0x1e7120['getHours']()[_0x35c0a8(0x290)]()[_0x35c0a8(0x213)](0x2, '0'), _0x145823 = _0x1e7120['getMinutes']()[_0x35c0a8(0x290)]()['padStart'](0x2, '0'), _0x44d245 = _0x1e7120['getSeconds']()[_0x35c0a8(0x290)]()[_0x35c0a8(0x213)](0x2, '0');
            var _0x1ce2e8 = _0x1e6772[_0x35c0a8(0x229)][_0x35c0a8(0x265)](), _0x154f95 = _0x54cf71 ?? '', _0x5db443 = {
                    '%USERNAME%': _0x2a86f3,
                    '%SOURCE_TYPE%': _0x5a2c22,
                    '%SHORTCODE%': _0x154f95,
                    '%YEAR%': _0x526f64,
                    '%2-YEAR%': _0x526f64[_0x35c0a8(0x2c1)](-0x2),
                    '%MONTH%': _0x527fac,
                    '%DAY%': _0x538601,
                    '%HOUR%': _0x38e113,
                    '%MINUTE%': _0x145823,
                    '%SECOND%': _0x44d245,
                    '%ORIGINAL_NAME%': _0x60325f,
                    '%ORIGINAL_NAME_FIRST%': _0x60325f[_0x35c0a8(0x2c5)]('_')['at'](0x0)
                };
            _0x1ce2e8 = _0x1ce2e8['replace'](/%[\w\-]+%/g, function (_0x1a73d4) {
                return _0x5db443[_0x1a73d4] || _0x1a73d4;
            });
            const _0x120e5d = _0x2a86f3 + '_' + _0x60325f + '.' + _0x211828;
            _0x117831[_0x35c0a8(0x355)] = URL['createObjectURL'](_0x4447bd), _0x117831[_0x35c0a8(0x2f4)](_0x35c0a8(0x230), _0x553be6[_0x35c0a8(0x283)] ? _0x1ce2e8 + '.' + _0x211828 : _0x120e5d), _0x117831[_0x35c0a8(0x262)](), _0x117831[_0x35c0a8(0x19f)]();
        }
        async function _0x422b(_0x17b915, _0x4fd47) {
            const _0x5a030d = _0x49db9c;
            let _0xa96e25 = new Date()['getTime'](), _0x50107e = Math[_0x5a030d(0x10e)](_0xa96e25 / 0x3e8), _0x54079c = _0x4c4554(_0x17b915)['attr']('data-username') ? _0x4c4554(_0x17b915)[_0x5a030d(0x176)](_0x5a030d(0x2dd)) : _0x1e6772[_0x5a030d(0x15d)];
            !_0x54079c && _0x4c4554(_0x17b915)[_0x5a030d(0x176)](_0x5a030d(0x154)) && (_0x52fd98(_0x5a030d(0x330), _0x4c4554(_0x17b915)[_0x5a030d(0x176)](_0x5a030d(0x2c6))), _0x54079c = await _0x5d4ba7(_0x4c4554(_0x17b915)[_0x5a030d(0x176)]('data-path'))[_0x5a030d(0x180)](_0x1f36de => {
                const _0x21b9e1 = _0x5a030d;
                _0x52fd98('get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:', _0x1f36de[_0x21b9e1(0x1d9)]);
            }), _0x54079c == null && (_0x54079c = _0x5a030d(0x1c8)));
            _0x553be6[_0x5a030d(0x329)] && _0x4c4554(_0x17b915)[_0x5a030d(0x176)](_0x5a030d(0x349)) && (_0x50107e = parseInt(_0x4c4554(_0x17b915)['attr'](_0x5a030d(0x349))));
            if (_0x553be6[_0x5a030d(0x16f)]) {
                _0x11dd8b(!![]);
                let _0x38377a = await _0xbaab7e(_0x4c4554(_0x17b915)['attr'](_0x5a030d(0x241)));
                _0x11dd8b(![]);
                if (_0x38377a['status'] === 'ok') {
                    var _0x37c819 = null;
                    _0x38377a[_0x5a030d(0x1e9)][0x0][_0x5a030d(0x326)] ? _0x37c819 = _0x38377a[_0x5a030d(0x1e9)][0x0][_0x5a030d(0x326)][0x0][_0x5a030d(0x37f)] : (_0x38377a[_0x5a030d(0x1e9)][0x0][_0x5a030d(0x17c)]['candidates']['sort'](function (_0x133352, _0x576f81) {
                        const _0x1478e4 = _0x5a030d;
                        let _0x48c0e3 = new URL(_0x133352[_0x1478e4(0x37f)])[_0x1478e4(0x165)][_0x1478e4(0x179)](_0x1478e4(0x1b1)), _0x1c9ef7 = new URL(_0x576f81[_0x1478e4(0x37f)])[_0x1478e4(0x165)][_0x1478e4(0x179)](_0x1478e4(0x1b1));
                        if (_0x48c0e3 && _0x1c9ef7) {
                            if (_0x48c0e3['length'] > _0x1c9ef7[_0x1478e4(0x218)])
                                return 0x1;
                            if (_0x48c0e3[_0x1478e4(0x218)] < _0x1c9ef7['length'])
                                return -0x1;
                        } else {
                            if (_0x133352[_0x1478e4(0x1c3)] < _0x576f81[_0x1478e4(0x1c3)])
                                return 0x1;
                            if (_0x133352[_0x1478e4(0x1c3)] > _0x576f81[_0x1478e4(0x1c3)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x37c819 = _0x38377a[_0x5a030d(0x1e9)][0x0][_0x5a030d(0x17c)]['candidates'][0x0][_0x5a030d(0x37f)]);
                    if (_0x4fd47) {
                        let _0x509c1c = new URL(_0x37c819);
                        _0x509c1c['host'] = _0x5a030d(0x388), _0x2bb277(_0x509c1c[_0x5a030d(0x355)]);
                    } else
                        _0x14dcb5(_0x37c819, _0x54079c, _0x4c4554(_0x17b915)[_0x5a030d(0x176)](_0x5a030d(0x351)), _0x50107e, _0x4c4554(_0x17b915)['attr'](_0x5a030d(0x2a4)), _0x4c4554(_0x17b915)['attr'](_0x5a030d(0x154)));
                } else {
                    if (_0x553be6[_0x5a030d(0x34d)]) {
                        if (_0x4fd47) {
                            let _0x300490 = new URL(_0x4c4554(_0x17b915)[_0x5a030d(0x176)]('data-href'));
                            _0x300490[_0x5a030d(0x2d0)] = _0x5a030d(0x388), _0x2bb277(_0x300490['href']);
                        } else
                            _0x14dcb5(_0x4c4554(_0x17b915)[_0x5a030d(0x176)](_0x5a030d(0x2c6)), _0x54079c, _0x4c4554(_0x17b915)['attr'](_0x5a030d(0x351)), _0x50107e, _0x4c4554(_0x17b915)['attr'](_0x5a030d(0x2a4)), _0x4c4554(_0x17b915)['attr'](_0x5a030d(0x154)));
                    } else
                        alert(_0x5a030d(0x14f) + _0x38377a[_0x5a030d(0x1d9)]);
                    _0x52fd98(_0x38377a);
                }
            } else
                _0x14dcb5(_0x4c4554(_0x17b915)[_0x5a030d(0x176)](_0x5a030d(0x2c6)), _0x54079c, _0x4c4554(_0x17b915)[_0x5a030d(0x176)](_0x5a030d(0x351)), _0x50107e, _0x4c4554(_0x17b915)['attr'](_0x5a030d(0x2a4)), _0x4c4554(_0x17b915)[_0x5a030d(0x176)]('data-path'));
        }
        function _0xb9ae32() {
            const _0x402257 = _0x49db9c;
            for (let _0x36e6d8 of _0x1e6772[_0x402257(0x365)]) {
                _0x52fd98(_0x402257(0x210), _0x36e6d8), GM_unregisterMenuCommand(_0x36e6d8);
            }
            _0x1e6772[_0x402257(0x365)]['push'](GM_registerMenuCommand(_0x1ca060(_0x402257(0x323)), () => {
                _0x15f395();
            }, { 'accessKey': 'w' })), _0x1e6772['registerMenuIds'][_0x402257(0x111)](GM_registerMenuCommand(_0x1ca060(_0x402257(0x11a)), () => {
                GM_openInTab('https://ko-fi.com/snkoarashi', { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x1e6772[_0x402257(0x365)][_0x402257(0x111)](GM_registerMenuCommand(_0x1ca060(_0x402257(0x1ba)), () => {
                _0x5e5ec4();
            }, { 'accessKey': 'z' })), _0x1e6772[_0x402257(0x365)]['push'](GM_registerMenuCommand(_0x1ca060(_0x402257(0x2c8)), () => {
                _0x59990c();
            }, { 'accessKey': 'f' })), _0x1e6772['registerMenuIds']['push'](GM_registerMenuCommand(_0x1ca060(_0x402257(0x298)), () => {
                _0x52c553();
            }, { 'accessKey': 'c' })), _0x1e6772[_0x402257(0x365)][_0x402257(0x111)](GM_registerMenuCommand(_0x1ca060('RELOAD_SCRIPT'), () => {
                _0x36a371();
            }, { 'accessKey': 'r' }));
        }
        function _0x2706ba(_0x40cef0) {
            const _0x26200f = _0x49db9c;
            if (!_0x553be6[_0x26200f(0x263)])
                return;
            const _0x31c8a8 = GM_getValue(_0x26200f(0x2d2)) ?? new Date()[_0x26200f(0x393)](), _0x1aed26 = new Date()[_0x26200f(0x393)]();
            _0x1aed26 > parseInt(_0x31c8a8) + _0x40cef0 * 0x3e8 && (GM_setValue(_0x26200f(0x2d2), new Date()['getTime']()), _0x52c553());
        }
        function _0x52c553() {
            const _0xb8f246 = _0x49db9c, _0x2070f8 = GM_info[_0xb8f246(0x31c)][_0xb8f246(0x2c2)], _0x505c20 = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': _0xb8f246(0x1f2),
                'url': _0x505c20,
                'onload': function (_0x214e91) {
                    const _0x15dd5f = _0xb8f246, _0x4d13b0 = _0x214e91[_0x15dd5f(0x24b)], _0xc4781d = _0x4d13b0[_0x15dd5f(0x367)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0xc4781d && _0xc4781d[0x1]) {
                        const _0x4df60e = _0xc4781d[0x1];
                        _0x52fd98('Current\x20version:\x20', _0x2070f8, '|', _0x15dd5f(0x1f6), _0x4df60e), _0x4df60e !== _0x2070f8 && typeof this[_0x15dd5f(0x2c9)] === _0x15dd5f(0x377) ? (this[_0x15dd5f(0x2c9)] = null, GM_notification({
                            'text': _0x1ca060(_0x15dd5f(0x337)),
                            'title': _0x1ca060(_0x15dd5f(0x1af)),
                            'tag': _0x15dd5f(0x278),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x15dd5f(0x1ca),
                            'onclick': _0x541fbb => {
                                const _0x4fc4ea = _0x15dd5f;
                                _0x541fbb?.[_0x4fc4ea(0x35e)]();
                                var _0x2bd7da = GM_openInTab(GM_info[_0x4fc4ea(0x31c)]['downloadURL']);
                                setTimeout(() => {
                                    const _0x1d2762 = _0x4fc4ea;
                                    _0x2bd7da[_0x1d2762(0x220)]();
                                }, 0xfa);
                            }
                        })) : _0x52fd98(_0x15dd5f(0x302));
                    } else
                        console[_0x15dd5f(0x25a)](_0x15dd5f(0x1fe));
                }
            });
        }
        function _0x15f395() {
            const _0x347bd3 = _0x49db9c;
            _0x4c4554(_0x347bd3(0x2a3))[_0x347bd3(0x19f)](), _0xc5b185(), _0x4c4554('.IG_POPUP_DIG\x20#post_info')[_0x347bd3(0x1c4)](_0x347bd3(0x16e)), _0x4c4554(_0x347bd3(0x11c))[_0x347bd3(0x2dc)]('<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>');
            for (let _0x4381de in _0x148bfb) {
                _0x4c4554(_0x347bd3(0x211))['append'](_0x347bd3(0x193) + _0x4381de + '\x22\x20' + (_0x1e6772[_0x347bd3(0x272)] == _0x4381de ? 'selected' : '') + '>' + _0x148bfb[_0x4381de] + '</option>');
            }
            for (let _0x53f786 in _0x553be6) {
                _0x4c4554(_0x347bd3(0x223))[_0x347bd3(0x2dc)]('<label\x20class=\x22globalSettings' + (_0x43ed02[_0x347bd3(0x22c)](_0x53f786) ? _0x347bd3(0x2e0) : '') + _0x347bd3(0x2b9) + _0x1ca060(_0x53f786 + _0x347bd3(0x2ef)) + _0x347bd3(0x27d) + (_0x53f786 + '_INTRO') + _0x347bd3(0x2e3) + _0x53f786 + '\x22>' + _0x1ca060(_0x53f786) + _0x347bd3(0x121) + _0x53f786 + _0x347bd3(0x245) + (_0x553be6[_0x53f786] === !![] ? _0x347bd3(0x137) : '') + _0x347bd3(0x2ba)), _0x53f786 === 'MODIFY_VIDEO_VOLUME' && _0x4c4554(_0x347bd3(0x212) + _0x53f786 + '\x22]')[_0x347bd3(0x321)](_0x347bd3(0x2df))['on'](_0x347bd3(0x293), function (_0x1e2202) {
                    const _0x3ca656 = _0x347bd3;
                    _0x1e2202[_0x3ca656(0x35e)](), _0x4c4554(this)[_0x3ca656(0x1b3)](_0x3ca656(0x2a9))[_0x3ca656(0x218)] === 0x0 && (_0x4c4554(this)[_0x3ca656(0x2dc)](_0x3ca656(0x18e)), _0x4c4554(this)['children'](_0x3ca656(0x2a9))[_0x3ca656(0x2dc)](_0x3ca656(0x161) + _0x1e6772[_0x3ca656(0x135)] + _0x3ca656(0x31d)), _0x4c4554(this)['children'](_0x3ca656(0x2a9))['append'](_0x3ca656(0x161) + _0x1e6772[_0x3ca656(0x135)] + _0x3ca656(0x39b)), _0x4c4554(this)[_0x3ca656(0x141)]('#tempWrapper')[_0x3ca656(0x2dc)](_0x3ca656(0x2d3) + _0x13a0d9[_0x3ca656(0x240)] + '</div>'));
                }), _0x53f786 === 'AUTO_RENAME' && _0x4c4554(_0x347bd3(0x212) + _0x53f786 + '\x22]')[_0x347bd3(0x321)](_0x347bd3(0x2df))['on'](_0x347bd3(0x293), function (_0x474d76) {
                    const _0xfaec4e = _0x347bd3;
                    _0x474d76[_0xfaec4e(0x35e)](), _0x4c4554(this)[_0xfaec4e(0x1b3)]('#tempWrapper')[_0xfaec4e(0x218)] === 0x0 && (_0x4c4554(this)[_0xfaec4e(0x2dc)](_0xfaec4e(0x18e)), _0x4c4554(this)[_0xfaec4e(0x141)](_0xfaec4e(0x2a9))[_0xfaec4e(0x2dc)](_0xfaec4e(0x226) + _0x1e6772[_0xfaec4e(0x229)] + '\x22\x20/>'), _0x4c4554(this)[_0xfaec4e(0x141)](_0xfaec4e(0x2a9))[_0xfaec4e(0x2dc)](_0xfaec4e(0x2d3) + _0x13a0d9['CLOSE'] + _0xfaec4e(0x325)));
                });
            }
        }
        function _0x5e5ec4() {
            const _0x18159f = _0x49db9c;
            _0x4c4554(_0x18159f(0x2a3))['remove'](), _0xc5b185(), _0x4c4554(_0x18159f(0x25d))['text'](_0x18159f(0x10c)), _0x4c4554(_0x18159f(0x223))[_0x18159f(0x2dc)]('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x4c4554('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x18159f(0x2dc)](_0x18159f(0x225)), _0x4c4554('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x18159f(0x2dc)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x1ca060(_0x18159f(0x18c)) + '</a></button>'), _0x4c4554(_0x18159f(0x1d0))[_0x18159f(0x2dc)](_0x18159f(0x110) + _0x1ca060(_0x18159f(0x289)) + _0x18159f(0x2aa)), _0x4c4554('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x18159f(0x2dc)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>' + _0x1ca060(_0x18159f(0x133)) + _0x18159f(0x1a8)), _0x4c4554(_0x18159f(0x1d0))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x1ca060(_0x18159f(0x1db)) + _0x18159f(0x2aa)), _0x4c4554(_0x18159f(0x1d0))[_0x18159f(0x2dc)](_0x18159f(0x122) + _0x1ca060(_0x18159f(0x1eb)) + '</a></button>');
        }
        function _0x59990c() {
            const _0x1ec4c3 = _0x49db9c;
            _0x4c4554(_0x1ec4c3(0x2a3))[_0x1ec4c3(0x19f)](), _0xc5b185(), _0x4c4554('.IG_POPUP_DIG\x20#post_info')['text'](_0x1ec4c3(0x1a2)), _0x4c4554(_0x1ec4c3(0x223))[_0x1ec4c3(0x2dc)](_0x1ec4c3(0x225)), _0x4c4554(_0x1ec4c3(0x1d0))[_0x1ec4c3(0x2dc)](_0x1ec4c3(0x21d) + _0x1ca060('REPORT_FORK') + _0x1ec4c3(0x2aa)), _0x4c4554(_0x1ec4c3(0x1d0))['append'](_0x1ec4c3(0x1cc) + _0x1ca060(_0x1ec4c3(0x1db)) + '</a></button>'), _0x4c4554(_0x1ec4c3(0x1d0))[_0x1ec4c3(0x2dc)](_0x1ec4c3(0x122) + _0x1ca060(_0x1ec4c3(0x1eb)) + _0x1ec4c3(0x2aa));
        }
        function _0x2bb277(_0x30e4d3) {
            const _0x1dd24a = _0x49db9c;
            var _0x58189f = document['createElement']('a');
            _0x58189f[_0x1dd24a(0x355)] = _0x30e4d3, _0x58189f[_0x1dd24a(0x1f0)] = _0x1dd24a(0x1b7), document[_0x1dd24a(0x19d)][_0x1dd24a(0x118)](_0x58189f), _0x58189f[_0x1dd24a(0x262)](), _0x58189f['remove']();
        }
        function _0x36a371() {
            const _0x50588c = _0x49db9c;
            clearInterval(_0x1e6772['GL_repeat']), _0x1e6772[_0x50588c(0x197)][_0x50588c(0x310)](_0x30b524 => {
                _0x30b524['trigger']['forEach'](_0x5d7f9b => {
                    const _0x5800c2 = a0_0xe1f8;
                    _0x4c4554(_0x30b524['element'])[_0x5800c2(0x13e)](_0x5800c2(0x262), _0x5d7f9b);
                });
            }), _0x1e6772['GL_registerEventList'] = [], _0x4c4554('.button_wrapper')['remove'](), _0x4c4554(_0x50588c(0x348))['remove'](), _0x4c4554(_0x50588c(0x1a5))[_0x50588c(0x37a)](_0x50588c(0x36e)), _0x1e6772[_0x50588c(0x2f6)] = ![], _0x1e6772[_0x50588c(0x249)] = ![], _0x1e6772[_0x50588c(0x30d)] = location[_0x50588c(0x355)], _0x1e6772[_0x50588c(0x21e)]['disconnect'](), _0x52fd98(_0x50588c(0x361));
        }
        function _0x52fd98(..._0x169457) {
            const _0x514dfe = _0x49db9c;
            var _0x4eaa25 = new Date();
            _0x1e6772[_0x514dfe(0x14a)]['push']({
                'time': _0x4eaa25[_0x514dfe(0x393)](),
                'content': [..._0x169457]
            }), _0x1e6772[_0x514dfe(0x14a)]['length'] > 0x3e8 && (_0x1e6772['GL_logger'] = [
                {
                    'time': _0x4eaa25['getTime'](),
                    'content': ['logger\x20sliced']
                },
                ..._0x1e6772['GL_logger'][_0x514dfe(0x147)](-0x3e7)
            ]), console[_0x514dfe(0x1bc)]('[' + _0x4eaa25[_0x514dfe(0x2fa)]() + ']', ..._0x169457);
        }
        function _0x3e4274() {
            const _0x19c55b = _0x49db9c;
            for (let _0x123bea in _0x553be6) {
                GM_getValue(_0x123bea) != null && typeof GM_getValue(_0x123bea) === _0x19c55b(0x189) && (_0x553be6[_0x123bea] = GM_getValue(_0x123bea), _0x123bea === _0x19c55b(0x16a) && GM_getValue(_0x123bea) !== !![] && (_0x1e6772[_0x19c55b(0x135)] = 0x1));
            }
        }
        function _0x4f726e(_0x42910a, _0x16e198, _0xb5f132, _0x3449e1 = '') {
            const _0x39acae = _0x49db9c;
            _0x16e198[_0x39acae(0x1b3)](_0x39acae(0x2b0))[_0x39acae(0x218)] === 0x0 ? (_0x16e198[_0x39acae(0x2dc)](_0x39acae(0x13a) + _0x3449e1 + _0x39acae(0x2cf)), _0x16e198[_0x39acae(0x1b3)](_0x39acae(0x2b0))[_0x39acae(0x2dc)](_0x39acae(0x1c6) + _0x1e6772['videoVolume'] + _0x39acae(0x299)), _0x16e198[_0x39acae(0x1b3)](_0x39acae(0x1ed))[_0x39acae(0x176)]('style', _0x39acae(0x168) + (_0x1e6772[_0x39acae(0x135)] * 0x64 + '%')), _0x16e198['find'](_0x39acae(0x1ed))['on'](_0x39acae(0x18b), function () {
                const _0x231c46 = _0x39acae;
                var _0x14a7a8 = _0x4c4554(this)[_0x231c46(0x160)]() * 0x64 + '%';
                _0x1e6772[_0x231c46(0x135)] = _0x4c4554(this)[_0x231c46(0x160)](), GM_setValue(_0x231c46(0x2ea), _0x4c4554(this)[_0x231c46(0x160)]()), _0x4c4554(this)[_0x231c46(0x176)](_0x231c46(0x14d), _0x231c46(0x168) + _0x14a7a8), _0x42910a[_0x231c46(0x292)](function () {
                    const _0x5d9419 = _0x231c46;
                    _0x52fd98('(' + _0xb5f132 + ')', _0x5d9419(0x296)), this['volume'] = _0x1e6772[_0x5d9419(0x135)];
                });
            }), _0x16e198[_0x39acae(0x1b3)](_0x39acae(0x1ed))['on'](_0x39acae(0x246), function () {
                const _0x2f7550 = _0x39acae;
                var _0xef292b = _0x1e6772[_0x2f7550(0x135)] * 0x64 + '%';
                _0x4c4554(this)[_0x2f7550(0x176)](_0x2f7550(0x14d), '--ig-track-progress:\x20' + _0xef292b), _0x4c4554(this)[_0x2f7550(0x160)](_0x1e6772['videoVolume']), _0x42910a[_0x2f7550(0x292)](function () {
                    const _0x203b12 = _0x2f7550;
                    _0x52fd98('(' + _0xb5f132 + ')', _0x203b12(0x296)), this['volume'] = _0x1e6772[_0x203b12(0x135)];
                });
            }), _0x16e198[_0x39acae(0x1b3)]('div.volume_slider')['on'](_0x39acae(0x262), function (_0x1e2234) {
                const _0x427f85 = _0x39acae;
                _0x1e2234[_0x427f85(0x288)](), _0x1e2234[_0x427f85(0x35e)]();
            })) : _0x16e198[_0x39acae(0x1b3)](_0x39acae(0x2b0))[_0x39acae(0x19f)]();
        }
        function _0x40442b(_0x237efb) {
            const _0x58e090 = _0x49db9c;
            _0x4fb94b(), _0x4c4554('body')['append']('<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>' + _0x13a0d9[_0x58e090(0x240)] + _0x58e090(0x26b));
            const _0x5d0c64 = _0x4c4554(_0x58e090(0x201)), _0x22e0bf = _0x4c4554(_0x58e090(0x26d)), _0xabd6cf = _0x4c4554('#iv_close'), _0x496fdf = _0x4c4554(_0x58e090(0x359));
            _0x496fdf[_0x58e090(0x176)]('src', _0x237efb), _0x5d0c64['css']('display', _0x58e090(0x28e));
            let _0x2a93fb = 0.75, _0x3de381 = 0x0, _0x502cb9 = 0x0, _0x53579e = ![], _0x40e7bc, _0x596cf7;
            _0x496fdf['on'](_0x58e090(0x2e2), () => {
                const _0x78c606 = _0x58e090;
                _0x3de381 = (window['innerWidth'] - _0x496fdf[0x0][_0x78c606(0x1c3)]) / 0x2, _0x502cb9 = (window[_0x78c606(0x287)] - _0x496fdf[0x0][_0x78c606(0x127)]) / 0x2, _0x5c1980();
            }), _0x496fdf['on'](_0x58e090(0x1fd), _0x3636df => {
                _0x3636df['preventDefault']();
            }), _0x496fdf['on']('click', _0x895940 => {
                const _0x186d32 = _0x58e090;
                _0x895940[_0x186d32(0x35e)](), _0x895940[_0x186d32(0x288)]();
            }), _0x496fdf['on'](_0x58e090(0x2d1), _0x66dc7c => {
                const _0x5c4e19 = _0x58e090;
                _0x66dc7c[_0x5c4e19(0x35e)](), _0x2a93fb += _0x66dc7c[_0x5c4e19(0x208)][_0x5c4e19(0x1f5)] > 0x0 ? -0.15 : 0.15, _0x2a93fb = Math['min'](Math[_0x5c4e19(0x1fc)](0.75, _0x2a93fb), 0x5), _0x5c1980();
            }), _0x496fdf['on'](_0x58e090(0x37d), _0x8c5da => {
                const _0x8b4e41 = _0x58e090;
                _0x53579e = !![], _0x40e7bc = _0x8c5da[_0x8b4e41(0x21c)] - _0x3de381, _0x596cf7 = _0x8c5da[_0x8b4e41(0x190)] - _0x502cb9, _0x496fdf[_0x8b4e41(0x347)](_0x8b4e41(0x198), _0x8b4e41(0x380));
            }), _0x496fdf['on'](_0x58e090(0x1d4), () => {
                const _0x1db2bf = _0x58e090;
                _0x53579e = ![], _0x496fdf[_0x1db2bf(0x347)](_0x1db2bf(0x198), 'grab');
            }), _0x4c4554(document)['on'](_0x58e090(0x2b2), _0x49db10 => {
                const _0x174280 = _0x58e090;
                if (!_0x53579e)
                    return;
                _0x49db10[_0x174280(0x35e)](), _0x3de381 = _0x49db10[_0x174280(0x21c)] - _0x40e7bc, _0x502cb9 = _0x49db10[_0x174280(0x190)] - _0x596cf7, _0x5c1980();
            }), _0x5d0c64['on']('click', () => {
                _0x4fb94b();
            }), _0xabd6cf['on'](_0x58e090(0x262), () => {
                _0x4fb94b();
            }), _0x22e0bf['on'](_0x58e090(0x262), _0x72bff3 => {
                const _0x121a6f = _0x58e090;
                _0x72bff3['preventDefault'](), _0x72bff3[_0x121a6f(0x288)]();
            });
            function _0x5c1980() {
                const _0x53b4ed = _0x58e090;
                _0x496fdf['css']('transform', 'scale(' + _0x2a93fb + ')'), _0x496fdf[_0x53b4ed(0x347)](_0x53b4ed(0x26c), _0x3de381 + 'px'), _0x496fdf[_0x53b4ed(0x347)]('top', _0x502cb9 + 'px');
            }
        }
        function _0x4fb94b() {
            const _0x493f75 = _0x49db9c;
            _0x4c4554(_0x493f75(0x201))[_0x493f75(0x19f)](), _0x4c4554(document)[_0x493f75(0x13e)](_0x493f75(0x2b2));
        }
        function _0x522500() {
            const _0x19b518 = _0x49db9c;
            var _0x128d7b = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x19b518(0x2d4),
                        'NOTICE_UPDATE_CONTENT': _0x19b518(0x169),
                        'CHECK_UPDATE': 'Checking\x20for\x20Script\x20Updates',
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': _0x19b518(0x383),
                        'RELOAD_SCRIPT': _0x19b518(0x1d1),
                        'DONATE': _0x19b518(0x2ad),
                        'FEEDBACK': _0x19b518(0x35d),
                        'IMAGE_VIEWER': _0x19b518(0x1ae),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x19b518(0x33f),
                        'SELECT_AND_COPY': _0x19b518(0x184),
                        'DOWNLOAD_DOM_TREE': _0x19b518(0x20a),
                        'REPORT_GITHUB': 'Report\x20an\x20Issue\x20on\x20GitHub',
                        'REPORT_DISCORD': _0x19b518(0x2cb),
                        'REPORT_FORK': _0x19b518(0x301),
                        'DEBUG': _0x19b518(0x2b7),
                        'CLOSE': _0x19b518(0x27a),
                        'ALL_CHECK': _0x19b518(0x19c),
                        'BATCH_DOWNLOAD_SELECTED': 'Download\x20Selected\x20Resources',
                        'BATCH_DOWNLOAD_DIRECT': _0x19b518(0x373),
                        'IMG': 'Image',
                        'VID': 'Video',
                        'DW': 'Download',
                        'DW_ALL': _0x19b518(0x373),
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': 'Loading\x20Blob\x20Media...',
                        'LOAD_BLOB_MULTIPLE': 'Loading\x20Blob\x20Media\x20and\x20Others...',
                        'LOAD_BLOB_RELOAD': 'Detecting\x20Blob\x20Media,\x20reloading...',
                        'NO_CHECK_RESOURCE': _0x19b518(0x203),
                        'NO_VID_URL': _0x19b518(0x119),
                        'SETTING': 'Settings',
                        'AUTO_RENAME': _0x19b518(0x2ff),
                        'RENAME_SHORTCODE': _0x19b518(0x1fa),
                        'RENAME_PUBLISH_DATE': _0x19b518(0x311),
                        'RENAME_LOCATE_DATE': _0x19b518(0x2ed),
                        'DISABLE_VIDEO_LOOPING': 'Disable\x20Video\x20Auto-looping',
                        'HTML5_VIDEO_CONTROL': _0x19b518(0x11b),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x19b518(0x354),
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': _0x19b518(0x1a3),
                        'MODIFY_VIDEO_VOLUME': _0x19b518(0x366),
                        'SCROLL_BUTTON': 'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
                        'FORCE_RESOURCE_VIA_MEDIA': _0x19b518(0x1c1),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': 'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
                        'AUTO_RENAME_INTRO': 'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
                        'RENAME_SHORTCODE_INTRO': _0x19b518(0x331),
                        'RENAME_PUBLISH_DATE_INTRO': _0x19b518(0x1c5),
                        'RENAME_LOCATE_DATE_INTRO': _0x19b518(0x112),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x19b518(0x2b4),
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x19b518(0x215),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x19b518(0x10d),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': 'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x19b518(0x291),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x19b518(0x307),
                        'SCROLL_BUTTON_INTRO': _0x19b518(0x353),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x19b518(0x2a8),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x19b518(0x284),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': _0x19b518(0x38f),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x19b518(0x2de)
                    }
                }, _0xc5a3eb = Object['assign']({}, _0x128d7b, _0x1e6772[_0x19b518(0x145)]), _0x39474b = Object[_0x19b518(0x17f)](_0xc5a3eb)[_0x19b518(0x235)]()['reduce']((_0x2f86ba, _0x53f4d1) => {
                    return _0x2f86ba[_0x53f4d1] = _0xc5a3eb[_0x53f4d1], _0x2f86ba;
                }, {});
            return _0x39474b;
        }
        async function _0x1d9a6a(_0x2e4d3e) {
            return new Promise((_0xc9eaad, _0x23e7fc) => {
                const _0x374e2c = a0_0xe1f8;
                GM_xmlhttpRequest({
                    'method': _0x374e2c(0x1f2),
                    'url': _0x374e2c(0x1d2) + _0x2e4d3e + _0x374e2c(0x29e),
                    'onload': function (_0x5a3bbc) {
                        const _0x52fda6 = _0x374e2c;
                        try {
                            let _0x8a2d84 = JSON[_0x52fda6(0x236)](_0x5a3bbc['response']);
                            _0xc9eaad(_0x8a2d84);
                        } catch (_0x16b7c5) {
                            _0x23e7fc(_0x16b7c5);
                        }
                    },
                    'onerror': function (_0x337717) {
                        const _0x4320bd = _0x374e2c;
                        _0x52fd98('getTranslationText()', _0x4320bd(0x38c), _0x337717), _0x23e7fc(_0x337717);
                    }
                });
            });
        }
        function _0x1ca060(_0x47ad46) {
            const _0x69bb31 = _0x49db9c, _0x5b828d = _0x522500();
            return _0x5b828d[_0x1e6772[_0x69bb31(0x272)]] != undefined && _0x5b828d[_0x1e6772['lang']][_0x47ad46] != undefined ? _0x5b828d[_0x1e6772[_0x69bb31(0x272)]][_0x47ad46] : _0x5b828d[_0x69bb31(0x158)][_0x47ad46];
        }
        function _0x4baf6a() {
            const _0x575f8d = _0x49db9c;
            _0x4c4554(_0x575f8d(0x13b))['each'](function () {
                const _0x1a43ee = _0x575f8d;
                _0x4c4554(this)[_0x1a43ee(0x1c4)](_0x1ca060(_0x4c4554(this)[_0x1a43ee(0x176)](_0x1a43ee(0x2f7))));
            }), _0x4c4554('[data-ih-locale-title]')[_0x575f8d(0x292)](function () {
                const _0x56cb57 = _0x575f8d;
                _0x4c4554(this)[_0x56cb57(0x176)]('title', _0x1ca060(_0x4c4554(this)[_0x56cb57(0x176)]('data-ih-locale-title')));
            });
        }
        _0x4c4554(function () {
            const _0x5bd454 = _0x49db9c;
            function _0x5eeb1b(_0xecb227) {
                const _0x2e1d99 = a0_0xe1f8;
                var _0x55b703 = [];
                for (var _0x2da419 of _0xecb227) {
                    _0x55b703[_0x2e1d99(0x111)]({
                        'tagName': _0x2da419[_0x2e1d99(0x2b3)],
                        'id': _0x2da419['id'],
                        'className': _0x2da419[_0x2e1d99(0x22b)]
                    });
                }
                return _0x55b703;
            }
            function _0x55b919() {
                const _0x2ea6a5 = a0_0xe1f8;
                let _0x4aefa2 = _0x4c4554('div[id^=\x22mount\x22]')[0x0];
                var _0x17dd62 = '';
                _0x1e6772[_0x2ea6a5(0x14a)][_0x2ea6a5(0x310)](_0x4d4cef => {
                    const _0xa803bb = _0x2ea6a5;
                    var _0x65a4e2 = JSON[_0xa803bb(0x151)](_0x4d4cef[_0xa803bb(0x24f)], function (_0x46d472, _0x2eb9e2) {
                        const _0x2b9707 = _0xa803bb;
                        if (Array[_0x2b9707(0x221)](this)) {
                            if (typeof _0x2eb9e2 === _0x2b9707(0x150) && _0x2eb9e2 instanceof jQuery)
                                return _0x5eeb1b(_0x2eb9e2);
                            return _0x2eb9e2;
                        } else
                            return _0x2eb9e2;
                    }, '\x09');
                    _0x17dd62 += new Date(_0x4d4cef[_0xa803bb(0x123)])[_0xa803bb(0x2fa)]() + ':\x20' + _0x65a4e2 + '\x0a';
                }), _0x4c4554('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')['text']('Logger:\x0a' + _0x17dd62 + _0x2ea6a5(0x33a) + location[_0x2ea6a5(0x375)] + '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a' + _0x4aefa2[_0x2ea6a5(0x2fb)]);
            }
            _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE', function () {
                _0x55b919();
            }), _0x4c4554(_0x5bd454(0x19d))['on']('click', '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x129446 = _0x5bd454;
                _0x4c4554(_0x129446(0x171))[_0x129446(0x23c)](), document['execCommand'](_0x129446(0x16c));
            }), _0x4c4554(_0x5bd454(0x19d))['on']('click', _0x5bd454(0x36a), function () {
                const _0x542d30 = _0x5bd454;
                _0x4c4554(_0x542d30(0x171))['text']()[_0x542d30(0x218)] === 0x0 && _0x55b919();
                var _0x1bd5b5 = _0x4c4554(_0x542d30(0x171))['text'](), _0x1fa03d = document['createElement']('a'), _0x3601e8 = new Blob([_0x1bd5b5], { 'type': _0x542d30(0x389) });
                _0x1fa03d['href'] = URL[_0x542d30(0x2f0)](_0x3601e8), _0x1fa03d[_0x542d30(0x230)] = _0x542d30(0x114) + new Date()[_0x542d30(0x393)]() + _0x542d30(0x2af), document[_0x542d30(0x19d)][_0x542d30(0x118)](_0x1fa03d), _0x1fa03d[_0x542d30(0x262)](), _0x1fa03d[_0x542d30(0x19f)]();
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), _0x5bd454(0x295), function () {
                const _0x46607d = _0x5bd454;
                _0x4c4554(this)[_0x46607d(0x321)](_0x46607d(0x2a9))[_0x46607d(0x218)] > 0x0 ? _0x4c4554(this)[_0x46607d(0x321)]('#tempWrapper')[_0x46607d(0x32d)](0xfa, function () {
                    const _0x459b62 = _0x46607d;
                    _0x4c4554(this)[_0x459b62(0x19f)]();
                }) : _0x4c4554(_0x46607d(0x2a3))['remove']();
            }), _0x4c4554(window)['on'](_0x5bd454(0x38b), function (_0x1a66eb) {
                const _0x32bf62 = _0x5bd454;
                _0x1a66eb[_0x32bf62(0x279)] == '81' && _0x1a66eb[_0x32bf62(0x343)] && (_0x4c4554('.IG_POPUP_DIG')['remove'](), _0x1a66eb[_0x32bf62(0x35e)]()), _0x1a66eb['which'] == '87' && _0x1a66eb[_0x32bf62(0x343)] && (_0x15f395(), _0x1a66eb['preventDefault']()), _0x1a66eb[_0x32bf62(0x279)] == '90' && _0x1a66eb[_0x32bf62(0x343)] && (_0x5e5ec4(), _0x1a66eb[_0x32bf62(0x35e)]()), _0x1a66eb['which'] == '82' && _0x1a66eb[_0x32bf62(0x343)] && (_0x36a371(), _0x1a66eb['preventDefault']()), _0x1a66eb[_0x32bf62(0x279)] == '83' && _0x1a66eb[_0x32bf62(0x343)] && (location[_0x32bf62(0x355)][_0x32bf62(0x367)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x4c4554('.IG_DWSTORY')[_0x32bf62(0x218)] > 0x0 && _0x4c4554('.IG_DWSTORY')?.['trigger'](_0x32bf62(0x262)), location[_0x32bf62(0x355)][_0x32bf62(0x367)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x4c4554(_0x32bf62(0x178))['length'] > 0x0 && _0x4c4554('.IG_DWHISTORY')?.[_0x32bf62(0x305)](_0x32bf62(0x262)), _0x1a66eb[_0x32bf62(0x35e)]());
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x1df), '.IG_POPUP_DIG\x20input', function () {
                const _0x16e994 = _0x5bd454;
                var _0xe97e4d = _0x4c4554(this)[_0x16e994(0x176)]('id');
                if (_0xe97e4d && _0x553be6[_0xe97e4d] !== undefined) {
                    let _0xa27cc4 = _0x4c4554(this)['prop'](_0x16e994(0x137));
                    GM_setValue(_0xe97e4d, _0xa27cc4), _0x553be6[_0xe97e4d] = _0xa27cc4, console[_0x16e994(0x1bc)]('user\x20settings', _0xe97e4d, _0xa27cc4);
                }
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), _0x5bd454(0x33e), function (_0x51a175) {
                const _0x2d7bf4 = _0x5bd454;
                _0x4c4554(this)[_0x2d7bf4(0x1b3)](_0x2d7bf4(0x2a9))[_0x2d7bf4(0x218)] > 0x0 && _0x51a175[_0x2d7bf4(0x35e)]();
            }), _0x4c4554('body')['on'](_0x5bd454(0x1df), _0x5bd454(0x1c0), function () {
                const _0x2145ac = _0x5bd454;
                let _0x3791fc = _0x4c4554(this)[_0x2145ac(0x160)]();
                _0x4c4554(this)[_0x2145ac(0x176)](_0x2145ac(0x257)) == _0x2145ac(0x15f) ? _0x4c4554(this)[_0x2145ac(0x32c)]()['val'](_0x3791fc) : _0x4c4554(this)[_0x2145ac(0x173)]()[_0x2145ac(0x160)](_0x3791fc), _0x3791fc >= 0x0 && _0x3791fc <= 0x1 && (_0x1e6772[_0x2145ac(0x135)] = _0x3791fc, GM_setValue(_0x2145ac(0x2ea), _0x3791fc));
            }), _0x4c4554(_0x5bd454(0x19d))['on']('input', _0x5bd454(0x1c0), function () {
                const _0x2b2523 = _0x5bd454;
                if (_0x4c4554(this)[_0x2b2523(0x176)](_0x2b2523(0x257)) == _0x2b2523(0x15f)) {
                    let _0x2bc016 = _0x4c4554(this)[_0x2b2523(0x160)]();
                    _0x4c4554(this)[_0x2b2523(0x32c)]()[_0x2b2523(0x160)](_0x2bc016);
                } else {
                    let _0x479da9 = _0x4c4554(this)[_0x2b2523(0x160)]();
                    _0x479da9 >= 0x0 && _0x479da9 <= 0x1 ? _0x4c4554(this)[_0x2b2523(0x173)]()[_0x2b2523(0x160)](_0x479da9) : _0x479da9 < 0x0 ? _0x4c4554(this)[_0x2b2523(0x160)](0x0) : _0x4c4554(this)[_0x2b2523(0x160)](0x1);
                }
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x18b), '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format', function () {
                const _0x3949fd = _0x5bd454;
                GM_setValue(_0x3949fd(0x1da), _0x4c4554(this)[_0x3949fd(0x160)]()), _0x1e6772[_0x3949fd(0x229)] = _0x4c4554(this)[_0x3949fd(0x160)]();
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), _0x5bd454(0x227), function (_0x3639a9) {
                const _0x92843e = _0x5bd454;
                _0x3639a9[_0x92843e(0x35e)](), _0x422b(this);
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), _0x5bd454(0x134), function () {
                const _0x3d48d8 = _0x5bd454;
                if (_0x553be6[_0x3d48d8(0x16f)] && _0x553be6[_0x3d48d8(0x357)])
                    _0x422b(_0x4c4554(this)[_0x3d48d8(0x321)]()[_0x3d48d8(0x141)]('a')[_0x3d48d8(0x1d8)]()[0x0], !![]);
                else {
                    var _0x875376 = new URL(_0x4c4554(this)['parent']()['children']('a')[_0x3d48d8(0x176)](_0x3d48d8(0x2c6)));
                    _0x875376[_0x3d48d8(0x2d0)] = _0x3d48d8(0x388), _0x2bb277(_0x875376[_0x3d48d8(0x355)]);
                }
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), '.IG_POPUP_DIG_BODY\x20.videoThumbnail', function () {
                const _0x53734a = _0x5bd454;
                let _0xb9f1e7 = new Date()[_0x53734a(0x393)]();
                _0x553be6['RENAME_PUBLISH_DATE'] && _0x4c4554(this)[_0x53734a(0x321)]()[_0x53734a(0x141)]('a')['attr']('datetime') && (_0xb9f1e7 = _0x4c4554(this)[_0x53734a(0x321)]()[_0x53734a(0x141)]('a')[_0x53734a(0x176)](_0x53734a(0x349)));
                let _0x2ecf64 = _0x4c4554(this)[_0x53734a(0x321)]()[_0x53734a(0x141)]('a')['attr'](_0x53734a(0x154)) ?? _0x4c4554(_0x53734a(0x20c))['text']();
                _0x14dcb5(_0x4c4554(this)[_0x53734a(0x321)]()['children']('a')[_0x53734a(0x1b3)](_0x53734a(0x28f))['first']()[_0x53734a(0x176)]('src'), _0x4c4554(this)['parent']()['children']('a')[_0x53734a(0x176)](_0x53734a(0x2dd)), 'thumbnail', _0xb9f1e7, _0x53734a(0x28d), _0x2ecf64);
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), _0x5bd454(0x270), function () {
                _0xd14af3(!![]);
            }), _0x4c4554(_0x5bd454(0x19d))['on']('click', _0x5bd454(0x152), function () {
                _0xa81c3e();
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), _0x5bd454(0x162), function (_0x23369c) {
                _0x23369c['preventDefault'](), _0xd14af3(!![], !![], !![]);
            }), _0x4c4554(_0x5bd454(0x19d))['on']('click', _0x5bd454(0x285), function () {
                _0x1f82b1(!![]);
            }), _0x4c4554('body')['on'](_0x5bd454(0x262), _0x5bd454(0x182), function (_0x25d159) {
                _0x25d159['stopPropagation'](), _0x123339(!![]);
            }), _0x4c4554('body')['on'](_0x5bd454(0x262), _0x5bd454(0x178), function () {
                _0x4fdac7(!![]);
            }), _0x4c4554('body')['on'](_0x5bd454(0x262), _0x5bd454(0x181), function () {
                _0x28a499();
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), '.IG_DWHINEWTAB', function (_0x3d1baa) {
                const _0xccfd3d = _0x5bd454;
                _0x3d1baa[_0xccfd3d(0x35e)](), _0x4fdac7(!![], !![]);
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), _0x5bd454(0x13d), function () {
                _0x173b2e(!![]);
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), _0x5bd454(0x228), function () {
                _0x43ab85(!![], !![]);
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), _0x5bd454(0x174), function () {
                _0x43ab85(!![], !![], !![]);
            }), _0x4c4554('body')['on'](_0x5bd454(0x262), _0x5bd454(0x12f), function () {
                _0x43ab85(!![], ![]);
            }), _0x4c4554('body')['on']('mousedown', 'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]', function (_0x2669aa) {
                const _0x9a7096 = _0x5bd454;
                if (_0x2669aa[_0x9a7096(0x279)] === 0x3 || _0x2669aa[_0x9a7096(0x279)] === 0x2) {
                    if (location[_0x9a7096(0x355)] === _0x9a7096(0x320) && _0x553be6[_0x9a7096(0x200)]) {
                        _0x2669aa[_0x9a7096(0x35e)]();
                        if (_0x4c4554(this)[_0x9a7096(0x1b3)](_0x9a7096(0x2b1))[_0x9a7096(0x218)] > 0x0) {
                            const _0x7d6c4b = _0x9a7096(0x320) + _0x4c4554(this)[_0x9a7096(0x141)](_0x9a7096(0x34a))[_0x9a7096(0x164)]()[_0x9a7096(0x1c4)]();
                            _0x2669aa[_0x9a7096(0x279)] === 0x2 ? GM_openInTab(_0x7d6c4b) : location[_0x9a7096(0x355)] = _0x7d6c4b;
                        }
                    }
                }
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x1df), _0x5bd454(0x23e), function () {
                const _0x4203d2 = _0x5bd454;
                var _0x14d032 = _0x4c4554(this)[_0x4203d2(0x1b3)](_0x4203d2(0x18b))[_0x4203d2(0x31e)](_0x4203d2(0x137));
                _0x4c4554('.IG_POPUP_DIG_BODY\x20.inner_box')['each'](function () {
                    const _0x4a5c11 = _0x4203d2;
                    _0x4c4554(this)[_0x4a5c11(0x31e)](_0x4a5c11(0x137), _0x14d032);
                });
            }), _0x4c4554(_0x5bd454(0x19d))['on']('change', _0x5bd454(0x39d), function () {
                const _0x11d51f = _0x5bd454;
                var _0x2f09a4 = _0x4c4554(_0x11d51f(0x29c))[_0x11d51f(0x218)], _0x68a2f5 = _0x4c4554(_0x11d51f(0x39d))[_0x11d51f(0x218)];
                _0x4c4554('.IG_POPUP_DIG_TITLE\x20.checkbox')[_0x11d51f(0x1b3)]('input')[_0x11d51f(0x31e)](_0x11d51f(0x137), _0x2f09a4 == _0x68a2f5);
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x262), '.IG_POPUP_DIG_TITLE\x20#batch_download_selected', function () {
                const _0x2ec5a9 = _0x5bd454;
                let _0x34d8ec = 0x0;
                _0x4c4554('.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x2ec5a9(0x292)](function () {
                    const _0x50f465 = _0x2ec5a9;
                    _0x4c4554(this)['prev']()[_0x50f465(0x141)]('input')['prop'](_0x50f465(0x137)) && (_0x4c4554(this)['trigger'](_0x50f465(0x262)), _0x34d8ec++);
                }), _0x34d8ec == 0x0 && alert(_0x1ca060(_0x2ec5a9(0x386)));
            }), _0x4c4554(_0x5bd454(0x19d))['on'](_0x5bd454(0x1df), _0x5bd454(0x194), function () {
                const _0xa19cb9 = _0x5bd454;
                GM_setValue(_0xa19cb9(0x272), _0x4c4554(this)[_0xa19cb9(0x160)]()), _0x1e6772[_0xa19cb9(0x272)] = _0x4c4554(this)['val'](), _0x1e6772['lang']?.[_0xa19cb9(0x148)]('en') || _0x1e6772['locale'][_0x1e6772[_0xa19cb9(0x272)]] != null ? (_0x4baf6a(), _0xb9ae32()) : _0x1d9a6a(_0x1e6772[_0xa19cb9(0x272)])[_0xa19cb9(0x318)](_0x37704a => {
                    const _0x1b8084 = _0xa19cb9;
                    _0x1e6772[_0x1b8084(0x145)][_0x1e6772['lang']] = _0x37704a, _0x4baf6a(), _0xb9ae32();
                })[_0xa19cb9(0x180)](_0x2f8b5d => {
                    const _0x2b22c5 = _0xa19cb9;
                    console['error'](_0x2b22c5(0x394), _0x2f8b5d);
                });
            }), _0x4c4554('body')['on'](_0x5bd454(0x262), _0x5bd454(0x20d), function () {
                const _0x531984 = _0x5bd454;
                _0x4c4554(_0x531984(0x308))[_0x531984(0x292)](function () {
                    const _0x5047e2 = _0x531984;
                    _0x4c4554(this)[_0x5047e2(0x305)]('click');
                });
            });
            const _0x4fc177 = new MutationObserver(_0x2e6676 => {
                const _0x5b76 = _0x5bd454;
                for (const _0xc882d5 of _0x2e6676) {
                    _0xc882d5[_0x5b76(0x257)] === _0x5b76(0x35c) && _0xc882d5[_0x5b76(0x2bc)][_0x5b76(0x310)](_0xa47439 => {
                        const _0x5e6ba6 = _0x5b76, _0x225c20 = _0x4c4554(_0xa47439)['find'](_0x5e6ba6(0x167));
                        if (_0x225c20[_0x5e6ba6(0x218)] > 0x0) {
                            _0x553be6['MODIFY_VIDEO_VOLUME'] && _0x225c20['each'](function () {
                                const _0x1f4b5e = _0x5e6ba6;
                                _0x4c4554(this)['on'](_0x1f4b5e(0x340), function () {
                                    const _0x523d03 = _0x1f4b5e;
                                    !_0x4c4554(this)[_0x523d03(0x183)]('modify') && (_0x4c4554(this)[_0x523d03(0x176)](_0x523d03(0x379), !![]), this[_0x523d03(0x126)] = _0x1e6772[_0x523d03(0x135)], _0x52fd98(_0x523d03(0x1b8)));
                                });
                            });
                            if (location[_0x5e6ba6(0x375)][_0x5e6ba6(0x367)](/^(\/stories\/)/ig)) {
                                const _0x15a1b2 = location[_0x5e6ba6(0x375)]['match'](/^(\/stories\/highlights\/)/ig) != null, _0x44404e = _0x15a1b2 ? _0x5e6ba6(0x140) : 'story';
                                _0x225c20[_0x5e6ba6(0x292)](function () {
                                    const _0x1fb745 = _0x5e6ba6;
                                    _0x4c4554(this)['on'](_0x1fb745(0x243), function () {
                                        const _0x1b7f59 = _0x1fb745;
                                        if (!_0x4c4554(this)[_0x1b7f59(0x183)](_0x1b7f59(0x31b))) {
                                            let _0xdf4937 = _0x4c4554(this);
                                            _0xdf4937['parents'](_0x1b7f59(0x29a))[_0x1b7f59(0x38a)](function () {
                                                const _0x5901bd = _0x1b7f59;
                                                return _0x4c4554(this)['width']() == _0xdf4937[_0x5901bd(0x1c3)]();
                                            })[_0x1b7f59(0x1b3)]('.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL')[_0x1b7f59(0x218)] === 0x0 ? (_0x4c4554(this)[_0x1b7f59(0x176)]('data-modify-thumbnail', !![]), _0x15a1b2 ? _0x173b2e(![]) : _0x1f82b1(![]), _0x52fd98('(' + _0x44404e + ')', 'Manually\x20inserting\x20thumbnail\x20button')) : (_0x4c4554(this)[_0x1b7f59(0x176)](_0x1b7f59(0x22d), !![]), _0x52fd98('(' + _0x44404e + ')', _0x1b7f59(0x139)));
                                        }
                                    });
                                    var _0x320812 = _0x4c4554(this);
                                    if (_0x553be6[_0x1fb745(0x34b)]) {
                                        if (!_0x320812[_0x1fb745(0x183)]('controls')) {
                                            _0x52fd98('(' + _0x44404e + ')', _0x1fb745(0x19b));
                                            _0x553be6[_0x1fb745(0x16a)] && (this[_0x1fb745(0x126)] = _0x1e6772[_0x1fb745(0x135)], _0x320812['on'](_0x1fb745(0x186), function () {
                                                const _0x50d679 = _0x1fb745;
                                                this[_0x50d679(0x126)] = _0x1e6772[_0x50d679(0x135)];
                                            }));
                                            let _0x7fa1ea = _0x320812['parents'](_0x1fb745(0x34a))['filter'](function () {
                                                    const _0x3b0e5c = _0x1fb745;
                                                    return _0x4c4554(this)['attr']('class') == null && _0x4c4554(this)[_0x3b0e5c(0x176)]('style') == null;
                                                })[_0x1fb745(0x1d8)](), _0x3a0c2d = _0x7fa1ea[_0x1fb745(0x32c)]();
                                            _0x3a0c2d['hide']();
                                            let _0x5970f5 = _0x7fa1ea[_0x1fb745(0x1b3)](_0x1fb745(0x259));
                                            _0x5970f5[_0x1fb745(0x166)]();
                                            const _0x2afb94 = function (_0x4ce14f) {
                                                const _0x6cf3d3 = _0x1fb745;
                                                _0x4ce14f[_0x6cf3d3(0x35e)](), _0x320812[_0x6cf3d3(0x347)](_0x6cf3d3(0x17a), '2'), _0x320812[_0x6cf3d3(0x176)](_0x6cf3d3(0x2fd), !![]), _0x5970f5[_0x6cf3d3(0x166)](), _0x3a0c2d[_0x6cf3d3(0x166)](), _0x4f726e(_0x320812, _0x320812[_0x6cf3d3(0x2bf)](_0x6cf3d3(0x29a))[_0x6cf3d3(0x38a)](function () {
                                                    const _0x5f20c1 = _0x6cf3d3;
                                                    return _0x4c4554(this)[_0x5f20c1(0x1c3)]() == _0x320812['width']();
                                                })[_0x6cf3d3(0x1d8)](), _0x44404e, 'vertical');
                                            };
                                            _0x320812[_0x1fb745(0x321)]()['find'](_0x1fb745(0x258))['on'](_0x1fb745(0x293), _0x2afb94), _0x5970f5['on'](_0x1fb745(0x293), _0x2afb94), _0x3a0c2d['on'](_0x1fb745(0x293), _0x2afb94), _0x320812['on'](_0x1fb745(0x293), function (_0x351553) {
                                                const _0x4c5c22 = _0x1fb745;
                                                _0x351553[_0x4c5c22(0x35e)](), _0x320812['css'](_0x4c5c22(0x17a), '-1'), _0x320812['removeAttr'](_0x4c5c22(0x2fd)), _0x3a0c2d[_0x4c5c22(0x163)](), _0x5970f5[_0x4c5c22(0x163)](), _0x4f726e(_0x320812, _0x320812[_0x4c5c22(0x2bf)](_0x4c5c22(0x29a))[_0x4c5c22(0x38a)](function () {
                                                    const _0x30435d = _0x4c5c22;
                                                    return _0x4c4554(this)[_0x30435d(0x1c3)]() == _0x320812[_0x30435d(0x1c3)]();
                                                })[_0x4c5c22(0x1d8)](), _0x44404e, _0x4c5c22(0x345));
                                            }), _0x320812['on'](_0x1fb745(0x170), function () {
                                                const _0x4271f9 = _0x1fb745;
                                                let _0x5544dd = _0x7fa1ea['parent']()['find'](_0x4271f9(0x214))[_0x4271f9(0x2bf)](_0x4271f9(0x21b))[_0x4271f9(0x1d8)]();
                                                var _0x2711c4 = _0x5544dd[_0x4271f9(0x1b3)](_0x4271f9(0x144))[_0x4271f9(0x218)] === 0x0;
                                                this['muted'] != _0x2711c4 && (this[_0x4271f9(0x126)] = _0x1e6772[_0x4271f9(0x135)], _0x5544dd?.['trigger'](_0x4271f9(0x262))), _0x4c4554(this)[_0x4271f9(0x176)](_0x4271f9(0x342)) && (_0x1e6772['videoVolume'] = this[_0x4271f9(0x126)], GM_setValue(_0x4271f9(0x2ea), this['volume'])), this[_0x4271f9(0x126)] == _0x1e6772[_0x4271f9(0x135)] && _0x4c4554(this)['attr']('data-completed', !![]);
                                            }), _0x320812[_0x1fb745(0x347)]('position', _0x1fb745(0x234)), _0x320812[_0x1fb745(0x347)](_0x1fb745(0x17a), '2'), _0x320812['attr']('data-controls', !![]), _0x320812[_0x1fb745(0x176)](_0x1fb745(0x2fd), !![]);
                                        }
                                    } else
                                        _0x4f726e(_0x320812, _0x320812[_0x1fb745(0x2bf)](_0x1fb745(0x29a))[_0x1fb745(0x38a)](function () {
                                            const _0x2a099c = _0x1fb745;
                                            return _0x4c4554(this)[_0x2a099c(0x1c3)]() == _0x320812[_0x2a099c(0x1c3)]();
                                        })['first'](), _0x44404e, 'vertical');
                                });
                            }
                        }
                    });
                }
            });
            _0x4fc177['observe'](_0x4c4554(_0x5bd454(0x172))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));