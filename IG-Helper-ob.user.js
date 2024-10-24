// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            2.36.9
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

function a0_0x2ca3(_0x1e9146, _0x3824c4) {
    const _0x5f4f5d = a0_0x5f4f();
    return a0_0x2ca3 = function (_0x2ca354, _0x3fb3b9) {
        _0x2ca354 = _0x2ca354 - 0x1de;
        let _0x33f288 = _0x5f4f5d[_0x2ca354];
        return _0x33f288;
    }, a0_0x2ca3(_0x1e9146, _0x3824c4);
}
function a0_0x5f4f() {
    const _0x5a5ba3 = [
        '\x22\x20data-globalIndex=\x22',
        'fadeOut',
        'GM_unregisterMenuCommand',
        'shortcode',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'data-ih-locale',
        '_ac3q',
        'css',
        '.IG_SN_DIG\x20#post_info',
        'a[data-needed=\x22direct\x22]',
        'split',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        'x1lix1fw',
        '.IG_DWSTORY',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '</a></button><br/>',
        '\x22\x20datetime=\x22',
        'hasReferrer',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'smooth',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'observe',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        '<label\x20class=\x22globalSettings',
        '/accounts/login',
        'remove',
        '\x22\x20data-ih-locale-title=\x22',
        'body\x20>\x20div\x20section._ac0a',
        'li._acaz',
        ':hidden',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'z-index',
        'data-modify-thumbnail',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'Checking\x20for\x20Updates',
        'getStories()',
        'user\x20settings',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'reject',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        '</button>',
        'top',
        '._acay\x20._acaz',
        'getMinutes',
        'data-username',
        'getBlobMedia()',
        'node',
        'logger\x20sliced',
        'undefined',
        '<input\x20value=\x22',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'Found\x20post\x20container',
        'NOPATH',
        '<div\x20class=\x22volume_slider\x22\x20/>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'isDialog',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        '\x20child',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'Remote\x20version:\x20',
        'owner',
        '._acay',
        '</span>\x20<input\x20id=\x22',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'data-completed',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'Show\x20DOM\x20Tree',
        'Download',
        'display_resources',
        'before',
        'data-href',
        'carousel_media',
        'data-snig',
        'parents',
        'DOMTree-',
        '5902532eJfsix',
        'Fetch\x20from\x20memory\x20cache:',
        'https://ko-fi.com/snkoarashi',
        'scontent.cdninstagram.com',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        'warn',
        'div.volume_slider\x20input',
        '</a></button>',
        'content',
        'reels_media',
        'REPORT_DISCORD',
        'className',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'response',
        'altKey',
        'map',
        'finalUrl',
        'toISOString',
        'removeAttr',
        'isHomepage',
        'avatar',
        '.IG_DWNEWTAB',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'THUMBNAIL_INTRO',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'matchAll',
        'status',
        'replaceAll',
        'data-type',
        'thumbnail',
        'div.volume_slider',
        'GET',
        'blob',
        '._aagv\x20img',
        'article',
        'DISABLE_VIDEO_LOOPING',
        '2-digit',
        '_acnf',
        'isReels',
        'getUserIdWithAgent()',
        '</option>',
        'length',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'CHECK_UPDATE',
        '\x22\x20title=\x22',
        'RELOAD_SCRIPT',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'getTranslationText\x20catch\x20error:',
        'BATCH_DOWNLOAD_SELECTED',
        'FEEDBACK',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'a[href^=\x22/p/\x22]',
        'Cannot\x20find\x20video\x20URL.',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'GraphVideo',
        '.IG_DWSTORY_THUMBNAIL',
        'assign',
        '#scrollWrapper',
        'contextmenu',
        '5RUSnqU',
        'data-controls',
        'sort',
        'padEnd',
        '--ig-track-progress:\x20',
        '._acnb',
        '</span></label>',
        'hasClass',
        'https://www.instagram.com/reel/',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'floor',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'pointer',
        'attr',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'numeric',
        'Download\x20All\x20Resources',
        'GraphSidecar',
        '3165996GgCVwI',
        'ALL_CHECK',
        '*/*',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'modify-thumbnail',
        'fail',
        'Feedback\x20Options',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'copy',
        'canDownload',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'toLocaleString',
        'https://i.instagram.com/api/v1/users/',
        'mp4',
        'responseText',
        'getHours',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'NEW_TAB',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'Video',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'FORCE_FETCH_ALL_RESOURCES',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'catch',
        'header\x20>\x20section:first\x20img[alt]',
        'each',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'appendChild',
        '.IG_DWHISTORY',
        'stopPropagation',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '\x22]\x20span',
        'parent',
        'selected',
        'push',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'https://www.instagram.com/reels/',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'div:not([class]):not([style])',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'reels',
        'isStory',
        '\x20-</a>',
        '(story)\x20Manually\x20inserting\x20thumbnail\x20button',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'timeupdate',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        '<div></div>',
        'getTranslationText()',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'DEBUG',
        'NOTICE_UPDATE_TITLE',
        'replace',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'lang',
        'getUserId()',
        'DIV',
        'div',
        'LOAD_BLOB_MULTIPLE',
        'button[role=\x22menuitem\x22]',
        'href',
        'data-name',
        'https://www.instagram.com/p/',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        '[data-ih-locale]',
        'host',
        'https://i.instagram.com/api/v1/media/',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'volumechange',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        '#article-id',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'text',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'time',
        'join',
        '<a\x20media-id=\x22',
        '\x0a-----\x0a\x0aLocation:\x20',
        'target',
        'Donate',
        'body\x20>\x20div\x20section:visible._ac0a',
        'section\x20>\x20main[role=\x22main\x22]',
        'Display\x20HTML5\x20Video\x20Controller',
        '31913210jGFHdj',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        'children',
        '/info/',
        'muted',
        'px;\x22>',
        'LOCALE_MANIFEST',
        'change',
        'code',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'innerHTML',
        'disconnect',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        '4874416VOjqwa',
        'error',
        '(reel)\x20Added\x20video\x20event\x20listener\x20#modify',
        'click',
        'message',
        '.IG_DWHINEWTAB',
        '(reel)\x20video\x20volume\x20changed\x20#slider',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '(story)\x20Thumbnail\x20button\x20already\x20inserted',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
        'https://www.instagram.com/',
        '.IG_DWPROFILE',
        'createObjectURL',
        'div[role=\x22presentation\x22]',
        'SHOW_DOM_TREE',
        'getFullYear',
        '.xpgaw4o',
        'edge_sidecar_to_children',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'THUMBNAIL',
        'prop',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        '(post)\x20video\x20volume\x20changed\x20#slider',
        'toLowerCase',
        'CHECK_UPDATE_MENU',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'data',
        '#tempWrapper',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'DIRECT_DOWNLOAD_ALL',
        '#_SNLOAD',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'Debug\x20Window',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'REPORT_FORK',
        'last',
        'body',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'loadstart',
        'VID',
        'pathname',
        'object',
        'video',
        'keyCode',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        'Current\x20version:\x20',
        'data-remove-thumbnail',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'main\x20timer\x20re-register\x20completed',
        'div#splash-screen',
        'x1s85apg',
        'width',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'getBlobMediaWithQueryID()',
        'NO_VID_URL',
        '37px',
        '<a\x20datetime=\x22',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'location',
        'find',
        'datetime',
        '.IG_REELS',
        'query_hash',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '14LiHhaW',
        'match',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'username',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'prev',
        'getHighlightStories()',
        'html',
        'toString',
        'regenerated',
        '922184SoqsSf',
        'video\x20+\x20div\x20>\x20div',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'G_RENAME_FORMAT',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        'FORCE_RESOURCE_VIA_MEDIA',
        'Main\x20Timer',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'G_VIDEO_VOLUME',
        'isHighlightsStory',
        'is_video',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        '</span>\x20',
        'HTML5_VIDEO_CONTROL',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'downloadURL',
        'Can\x20not\x20find\x20download\x20url.',
        'isIntersecting',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'Download\x20Video\x20Thumbnail',
        'x1iyjqo2',
        'srcset',
        'NOTICE_UPDATE_CONTENT',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '#locatePreview',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'items',
        'url',
        'getPostOwner()',
        '6MQlSMN',
        'relative',
        'startsWith',
        'volume',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'type',
        'svg',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'script',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'Close',
        '\x22\x20class=\x22newTab\x22>',
        'getMonth',
        'shortcode_media',
        'Wololo!\x20New\x20version\x20released.',
        'users',
        'SCROLL_BUTTON',
        '(highlight)\x20Manually\x20inserting\x20thumbnail\x20button',
        'play\x20playing',
        'stories',
        '\x22\x20/></div>',
        'en-US',
        'updatenotification',
        'Checking\x20for\x20Script\x20Updates',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'ended',
        'src',
        'GraphImage',
        'label',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'ig_helper_notice',
        'reduce',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'after',
        'removeClass',
        'MODIFY_VIDEO_VOLUME',
        'header\x20>\x20section:first\x20img[alt][draggable]',
        'style',
        'data-path',
        'user',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'feedback_message',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'filter',
        'img[referrerpolicy]',
        'edges',
        'checked',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'loop',
        'image_versions2',
        'modify',
        '<p\x20id=\x22_SNLOAD\x22>',
        '0px',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'getTime',
        'cursor',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'toUpperCase',
        '.json',
        'range',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'wrap',
        'remove-thumbnail',
        'preventDefault',
        'mousedown',
        'which',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'createElement',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'forEach',
        'div:last-child',
        '<div\x20class=\x22volume_slider\x20bottom\x22\x20/>',
        '.IG_DWHISTORY_THUMBNAIL',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'height',
        'position',
        'select',
        '._acay\x20+\x20.x24i39r',
        'Feedback',
        'div[id^=\x22mount\x22]',
        'div\x20>\x20ul._acay',
        'controls',
        'close',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'isProfile',
        'video_url',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'append',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'log',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'CLOSE',
        '</div>',
        'INTERNAL_CSS',
        '.IG_SN_DIG',
        'Reload\x20Script',
        '%22}',
        '.txt',
        'slice',
        '(highlight)\x20Thumbnail\x20button\x20already\x20inserted',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'absolute',
        '<div\x20class=\x22IG_SN_DIG\x20',
        'header\x20>\x20section:first\x20img[alt]:not([draggable])',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'Disable\x20Video\x20Auto-looping',
        'REPORT_GITHUB',
        'G_CHECK_TIMESTAMP',
        '.IG_REELS_THUMBNAIL',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        '\x22\x20/>',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'display_url',
        'first',
        'taken_at',
        'then',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20text\x20is\x20translated\x20using\x20machine\x20translation\x20and\x20may\x20be\x20inaccurate;\x20you\x20can\x20contact\x20support\x20to\x20correct\x20the\x20translation.</div>',
        'scrollBy',
        '.SNKMS_IG_DW_MAIN',
        'padStart',
        'jpg',
        'parse',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'Download\x20Selected\x20Resources',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20posts\x20and\x20Reels.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20In\x20Reels\x20pages,\x20the\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'DOWNLOAD',
        'data-loop',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'taken_at_timestamp',
        'Open\x20in\x20New\x20Tab',
        'LOAD_BLOB_ONE',
        'data-ih-locale-title',
        '__typename',
        'pause',
        '\x22><span\x20data-ih-locale=\x22',
        'px;top:',
        'val',
        'img',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'div\x20>\x20ul\x20li._acaz',
        'video[class]',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'RENAME_PUBLISH_DATE',
        'script[type=\x22application/json\x22]',
        'hostname',
        'title',
        '6991290wcgPvF',
        'media-id',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'input',
        '325749Cabamx',
        'getUserHighSizeProfile()',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'onReadyMyDW()\x20Timer',
        'candidates',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'highlights',
        'next',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'video_versions',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '_INTRO',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'load',
        'hidden',
        'Found\x20insert\x20point',
        'IMG',
        'getMediaInfo()',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '.IG_SN_DIG_BODY\x20.newTab',
        'video_resources',
        'data-modify',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'getSeconds',
        '</div></div>',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        'SKIP_VIEW_STORY_CONFIRM',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22'
    ];
    a0_0x5f4f = function () {
        return _0x5a5ba3;
    };
    return a0_0x5f4f();
}
(function (_0x45057d, _0x40e419) {
    const _0x51723f = a0_0x2ca3, _0x2dba76 = _0x45057d();
    while (!![]) {
        try {
            const _0x44643f = -parseInt(_0x51723f(0x400)) / 0x1 + parseInt(_0x51723f(0x41f)) / 0x2 * (parseInt(_0x51723f(0x277)) / 0x3) + parseInt(_0x51723f(0x2e8)) / 0x4 * (-parseInt(_0x51723f(0x329)) / 0x5) + parseInt(_0x51723f(0x33c)) / 0x6 * (parseInt(_0x51723f(0x3f4)) / 0x7) + -parseInt(_0x51723f(0x3ae)) / 0x8 + -parseInt(_0x51723f(0x273)) / 0x9 + parseInt(_0x51723f(0x39e)) / 0xa;
            if (_0x44643f === _0x40e419)
                break;
            else
                _0x2dba76['push'](_0x2dba76['shift']());
        } catch (_0x22a232) {
            _0x2dba76['push'](_0x2dba76['shift']());
        }
    }
}(a0_0x5f4f, 0xc07f9), function (_0x48a1e0) {
    setTimeout(() => {
        'use strict';
        const _0x4782ca = a0_0x2ca3;
        const _0x573435 = {
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
            }, _0x471ad7 = [
                _0x4782ca(0x26f),
                _0x4782ca(0x3ba),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ];
        var _0x3402f9 = GM_getValue('G_VIDEO_VOLUME') ? GM_getValue(_0x4782ca(0x408)) : 0x1, _0xe54a1c = ![], _0x19e4eb = GM_getValue(_0x4782ca(0x403)) ? GM_getValue(_0x4782ca(0x403)) : _0x4782ca(0x25a);
        const _0x48448f = {
                'DOWNLOAD': _0x4782ca(0x36d),
                'NEW_TAB': _0x4782ca(0x209),
                'THUMBNAIL': _0x4782ca(0x31f),
                'CLOSE': _0x4782ca(0x334)
            }, _0x484f9f = 0xfa, _0x44e0af = GM_getResourceText(_0x4782ca(0x239)), _0x1c96d9 = JSON[_0x4782ca(0x259)](GM_getResourceText(_0x4782ca(0x3a4)));
        var _0x1c3d96 = [], _0x1cf3f9 = {}, _0x1fd5d4 = GM_getValue('lang') || navigator['language'] || navigator['userLanguage'], _0xe58f9e = location[_0x4782ca(0x384)], _0x3e07b5 = ![], _0x23eca1 = ![], _0x1595af = [], _0x59b4f0, _0x455890, _0x566050, _0x2a1e66, _0x3b5150 = {
                'stories': {},
                'highlights': {}
            }, _0x141ca3 = new MutationObserver(function (_0x361987, _0x46b620) {
                _0xc4ee75();
            });
        _0x4c9440(), GM_addStyle(_0x44e0af), _0x482e2d(), _0x26f84a(_0x1fd5d4)[_0x4782ca(0x253)](_0x1b2c8b => {
            _0x1cf3f9[_0x1fd5d4] = _0x1b2c8b, _0x28a655(), _0x482e2d(), _0x322029(0x12c);
        })['catch'](_0x1791dc => {
            const _0x52c9ca = _0x4782ca;
            _0x482e2d(), _0x322029(0x12c), !_0x1fd5d4[_0x52c9ca(0x421)]('en') && console[_0x52c9ca(0x3af)](_0x52c9ca(0x31a), _0x1791dc);
        });
        var _0x18758f = setInterval(function () {
            const _0x330c66 = _0x4782ca;
            if (_0x48a1e0('div#splash-screen')[_0x330c66(0x312)] > 0x0 && !_0x48a1e0(_0x330c66(0x3e4))['is'](_0x330c66(0x2b6)) || location[_0x330c66(0x3db)]['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x330c66(0x271)][_0x330c66(0x421)]('www.')) {
                _0x23eca1 = ![];
                return;
            }
            if (_0xe58f9e != location[_0x330c66(0x384)] || !_0x3e07b5 || !_0x23eca1) {
                console[_0x330c66(0x234)](_0x330c66(0x406), 'trigging'), clearInterval(_0x2a1e66), _0x23eca1 = ![], _0x3e07b5 = !![], _0xe58f9e = location[_0x330c66(0x384)], _0x141ca3[_0x330c66(0x3ab)]();
                if (location[_0x330c66(0x384)][_0x330c66(0x421)](_0x330c66(0x386)) || location[_0x330c66(0x3db)]['match'](/^\/(.*?)\/p\//ig) || location[_0x330c66(0x384)][_0x330c66(0x421)](_0x330c66(0x331))) {
                    _0x3b5150['stories'] = {}, _0x1de3c6(_0x330c66(0x2d0));
                    var _0x5a6042 = setInterval(() => {
                        const _0x4074ea = _0x330c66;
                        _0x48a1e0(_0x4074ea(0x283))[_0x4074ea(0x312)] > 0x0 && (clearInterval(_0x5a6042), setTimeout(() => {
                            _0xc4ee75(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x23eca1 = !![];
                }
                location[_0x330c66(0x384)][_0x330c66(0x421)](_0x330c66(0x365)) && (_0x1de3c6(_0x330c66(0x30f)), setTimeout(() => {
                    _0x5af119(![]);
                }, 0x96), _0x23eca1 = !![]);
                if (location[_0x330c66(0x384)][_0x330c66(0x29f)]('?')[0x0] == _0x330c66(0x3bb)) {
                    _0x3b5150['stories'] = {};
                    let _0x1fcf39 = _0x59b4f0?.['match'](/^\/stories\//ig) != null;
                    _0x1de3c6(_0x330c66(0x2fc), _0x1fcf39), setTimeout(() => {
                        const _0x56bfd8 = _0x330c66;
                        _0xc4ee75(![], _0x1fcf39);
                        const _0x21a308 = _0x48a1e0(_0x56bfd8(0x3d8))?.[_0x56bfd8(0x361)]()[0x0];
                        _0x21a308 && _0x141ca3[_0x56bfd8(0x2ad)](_0x21a308, { 'childList': !![] });
                    }, 0x96), _0x23eca1 = !![];
                }
                _0x48a1e0(_0x330c66(0x358))[_0x330c66(0x312)] && location[_0x330c66(0x3db)][_0x330c66(0x3f5)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x330c66(0x3db)]['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x1de3c6(_0x330c66(0x22d)), setTimeout(() => {
                    _0x4de2b6(![]);
                }, 0x96), _0x23eca1 = !![]);
                if (!_0x23eca1) {
                    if (location[_0x330c66(0x384)][_0x330c66(0x3f5)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig)) {
                        _0x3b5150[_0x330c66(0x27d)] = {}, _0x1de3c6(_0x330c66(0x409)), _0x13eda8(![]), _0x2a1e66 = setInterval(() => {
                            _0x31f7e4(![]);
                        }, _0x484f9f);
                        _0x48a1e0(_0x330c66(0x35c))[_0x330c66(0x312)] && setTimeout(() => {
                            const _0x3b7e62 = _0x330c66;
                            if (_0x573435['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x2df00d = _0x48a1e0(_0x3b7e62(0x249))['filter'](function () {
                                    const _0x371e50 = _0x3b7e62;
                                    return _0x48a1e0(this)[_0x371e50(0x3a0)]()['length'] === 0x0;
                                });
                                _0x2df00d?.[_0x3b7e62(0x3b1)]();
                            }
                            _0x23eca1 = !![];
                        }, 0x96);
                        ;
                    } else
                        location[_0x330c66(0x384)][_0x330c66(0x3f5)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x1de3c6(_0x330c66(0x36a)), _0x48a1e0(_0x330c66(0x28b))['length'] > 0x0 && (_0x48a1e0(_0x330c66(0x2a4))[_0x330c66(0x2b2)](), _0x48a1e0(_0x330c66(0x2fe))[_0x330c66(0x2b2)](), _0x48a1e0(_0x330c66(0x325))[_0x330c66(0x312)] && _0x48a1e0('.IG_DWSTORY_THUMBNAIL')[_0x330c66(0x2b2)](), _0x59d5e1(![]), setTimeout(() => {
                            _0x59d5e1(![]);
                        }, 0x96)), _0x48a1e0('.IG_DWSTORY')['length'] && setTimeout(() => {
                            const _0x54205f = _0x330c66;
                            if (_0x573435[_0x54205f(0x293)]) {
                                var _0x2cce14 = _0x48a1e0('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')[_0x54205f(0x1fe)](function () {
                                    const _0x4989e0 = _0x54205f;
                                    return _0x48a1e0(this)[_0x4989e0(0x3a0)]()[_0x4989e0(0x312)] === 0x0;
                                });
                                _0x2cce14?.[_0x54205f(0x3b1)]();
                            }
                            _0x23eca1 = !![];
                        }, 0x96)) : (_0x23eca1 = ![], _0x48a1e0(_0x330c66(0x2a4))['remove'](), _0x48a1e0(_0x330c66(0x2fe))[_0x330c66(0x2b2)](), _0x48a1e0('.IG_DWSTORY_THUMBNAIL')['length'] && _0x48a1e0(_0x330c66(0x325))[_0x330c66(0x2b2)]());
                }
                _0x322029(0x12c), _0x59b4f0 = new URL(location['href'])[_0x330c66(0x3db)];
            }
        }, _0x484f9f);
        async function _0x4de2b6(_0x19fce4) {
            const _0x3261fe = _0x4782ca;
            if (_0x19fce4) {
                _0x1eccfc(!![]);
                let _0x3db545 = new Date()[_0x3261fe(0x20d)](), _0x227482 = Math[_0x3261fe(0x333)](_0x3db545 / 0x3e8), _0x480b8e = location[_0x3261fe(0x3db)]['replaceAll'](/(reels|tagged)\/$/ig, '')[_0x3261fe(0x29f)]('/')[_0x3261fe(0x1fe)](_0x9b55e1 => _0x9b55e1['length'] > 0x0)['at'](-0x1), _0x3c2e4d = await _0x417033(_0x480b8e);
                try {
                    let _0x25beeb = await _0xc6be67(_0x3c2e4d[_0x3261fe(0x1f9)]['pk']);
                    _0x70c382(_0x25beeb, _0x480b8e, _0x3261fe(0x2fd), _0x227482, 'jpg');
                } catch (_0x11b7c2) {
                    _0x70c382(_0x3c2e4d['user']['profile_pic_url'], _0x480b8e, 'avatar', _0x227482, _0x3261fe(0x258));
                }
                _0x1eccfc(![]);
            } else {
                if (!_0x48a1e0(_0x3261fe(0x3bc))['length']) {
                    let _0x184d26 = setInterval(() => {
                        const _0x562fec = _0x3261fe;
                        if (_0x48a1e0(_0x562fec(0x3bc))[_0x562fec(0x312)]) {
                            clearInterval(_0x184d26);
                            return;
                        }
                        _0x48a1e0('header\x20>\x20section:first\x20img[alt][draggable]')[_0x562fec(0x361)]()[_0x562fec(0x361)]()[_0x562fec(0x232)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x28f55f('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x48448f['DOWNLOAD'] + _0x562fec(0x238)), _0x48a1e0(_0x562fec(0x1f6))[_0x562fec(0x361)]()[_0x562fec(0x361)]()[_0x562fec(0x29c)](_0x562fec(0x224), _0x562fec(0x420)), _0x48a1e0(_0x562fec(0x243))['parent']()[_0x562fec(0x361)]()[_0x562fec(0x361)]()[_0x562fec(0x232)](_0x562fec(0x364) + _0x28f55f('DW') + _0x562fec(0x2d3) + _0x48448f[_0x562fec(0x25e)] + _0x562fec(0x238)), _0x48a1e0(_0x562fec(0x243))[_0x562fec(0x361)]()[_0x562fec(0x361)]()[_0x562fec(0x361)]()[_0x562fec(0x29c)]('position', _0x562fec(0x420));
                    }, 0x96);
                }
            }
        }
        async function _0x13eda8(_0x4d7daf, _0x2f0342) {
            const _0x9015c4 = _0x4782ca;
            if (_0x4d7daf) {
                let _0x334e6b = new Date()['getTime'](), _0xcc9a51 = Math[_0x9015c4(0x333)](_0x334e6b / 0x3e8), _0x2cf08f = location[_0x9015c4(0x384)][_0x9015c4(0x37a)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x179d16 = _0x48a1e0(_0x9015c4(0x2ba))[_0x9015c4(0x312)] || _0x48a1e0(_0x9015c4(0x2b7))['length'] || _0x48a1e0(_0x9015c4(0x21c))['find'](_0x9015c4(0x3c6))['length'], _0x135f62 = '', _0x282422 = 0x0;
                _0x1eccfc(!![]);
                if (_0x3b5150[_0x9015c4(0x27d)][_0x2cf08f]) {
                    _0x1de3c6(_0x9015c4(0x2e9), _0x2cf08f);
                    let _0x237d7d = _0x3b5150[_0x9015c4(0x27d)][_0x2cf08f][_0x9015c4(0x3cc)][_0x9015c4(0x2f2)][0x0][_0x9015c4(0x41c)]['length'];
                    _0x135f62 = _0x3b5150['highlights'][_0x2cf08f]['data'][_0x9015c4(0x2f2)][0x0][_0x9015c4(0x2d5)][_0x9015c4(0x3f8)], _0x282422 = _0x3b5150[_0x9015c4(0x27d)][_0x2cf08f][_0x9015c4(0x3cc)][_0x9015c4(0x2f2)][0x0][_0x9015c4(0x41c)][_0x237d7d - _0x179d16];
                } else {
                    let _0x52e097 = await _0x56ed73(_0x2cf08f), _0x618cb0 = _0x52e097['data'][_0x9015c4(0x2f2)][0x0][_0x9015c4(0x41c)]['length'];
                    _0x135f62 = _0x52e097[_0x9015c4(0x3cc)]['reels_media'][0x0]['owner'][_0x9015c4(0x3f8)], _0x282422 = _0x52e097[_0x9015c4(0x3cc)][_0x9015c4(0x2f2)][0x0]['items'][_0x618cb0 - _0x179d16], _0x3b5150['highlights'][_0x2cf08f] = _0x52e097;
                }
                _0x573435['RENAME_PUBLISH_DATE'] && (_0xcc9a51 = _0x282422['taken_at_timestamp']);
                if (_0x573435[_0x9015c4(0x405)] && !_0xe54a1c) {
                    let _0x3cfccd = await _0x2f1f8a(_0x282422['id']);
                    _0x3cfccd['status'] === 'ok' ? _0x3cfccd['items'][0x0][_0x9015c4(0x280)] ? _0x2f0342 ? _0x435363(_0x3cfccd[_0x9015c4(0x41c)][0x0]['video_versions'][0x0]['url']) : _0x70c382(_0x3cfccd[_0x9015c4(0x41c)][0x0][_0x9015c4(0x280)][0x0][_0x9015c4(0x41d)], _0x135f62, _0x9015c4(0x27d), _0xcc9a51, _0x9015c4(0x349)) : _0x2f0342 ? _0x435363(_0x3cfccd['items'][0x0]['image_versions2']['candidates'][0x0][_0x9015c4(0x41d)]) : _0x70c382(_0x3cfccd[_0x9015c4(0x41c)][0x0][_0x9015c4(0x204)][_0x9015c4(0x27b)][0x0][_0x9015c4(0x41d)], _0x135f62, _0x9015c4(0x27d), _0xcc9a51, _0x9015c4(0x258)) : (_0x573435[_0x9015c4(0x3ba)] ? (delete _0x3b5150[_0x9015c4(0x27d)][_0x2cf08f], _0xe54a1c = !![], _0x13eda8(!![], _0x2f0342)) : alert(_0x9015c4(0x314) + _0x3cfccd[_0x9015c4(0x3b2)]), _0x1de3c6(_0x3cfccd));
                } else
                    _0x282422['is_video'] ? _0x2f0342 ? _0x435363(_0x282422['video_resources']['at'](-0x1)['src'], _0x135f62) : _0x70c382(_0x282422[_0x9015c4(0x28d)]['at'](-0x1)['src'], _0x135f62, _0x9015c4(0x27d), _0xcc9a51, _0x9015c4(0x349), _0x2cf08f) : _0x2f0342 ? _0x435363(_0x282422[_0x9015c4(0x2e1)]['at'](-0x1)[_0x9015c4(0x1ec)], _0x135f62) : _0x70c382(_0x282422[_0x9015c4(0x2e1)]['at'](-0x1)[_0x9015c4(0x1ec)], _0x135f62, _0x9015c4(0x27d), _0xcc9a51, _0x9015c4(0x258), _0x2cf08f), _0xe54a1c = ![];
                _0x1eccfc(![]);
            } else {
                if (!_0x48a1e0(_0x9015c4(0x35c))[_0x9015c4(0x312)]) {
                    let _0x41a6a4 = null;
                    _0x48a1e0(_0x9015c4(0x2b4))['length'] > 0x0 ? _0x41a6a4 = _0x48a1e0(_0x9015c4(0x39b)) : (_0x41a6a4 = _0x48a1e0(_0x9015c4(0x346)), _0x41a6a4['css'](_0x9015c4(0x224), _0x9015c4(0x420)));
                    if (_0x41a6a4[_0x9015c4(0x312)] === 0x0) {
                        let _0x2cc9ae = _0x48a1e0(_0x9015c4(0x2aa)), _0xf135f5 = 0x0;
                        _0x2cc9ae['each'](function () {
                            const _0x20faf5 = _0x9015c4;
                            _0x48a1e0(this)[_0x20faf5(0x3e6)]() > _0xf135f5 && (_0xf135f5 = _0x48a1e0(this)[_0x20faf5(0x3e6)](), _0x41a6a4 = _0x48a1e0(this)['children']('div')['first']());
                        });
                    }
                    _0x41a6a4 != null && (_0x41a6a4[_0x9015c4(0x232)](_0x9015c4(0x364) + _0x28f55f('DW') + _0x9015c4(0x240) + _0x48448f[_0x9015c4(0x25e)] + _0x9015c4(0x238)), _0x41a6a4[_0x9015c4(0x232)](_0x9015c4(0x24e) + _0x28f55f(_0x9015c4(0x34d)) + _0x9015c4(0x3f6) + _0x48448f[_0x9015c4(0x34d)] + _0x9015c4(0x238)), _0x573435['MODIFY_VIDEO_VOLUME'] && _0x41a6a4[_0x9015c4(0x3ef)](_0x9015c4(0x3dd))[_0x9015c4(0x359)](function () {
                        _0x48a1e0(this)['on']('play\x20playing', function () {
                            const _0x43781a = a0_0x2ca3;
                            !_0x48a1e0(this)['data']('modify') && (_0x48a1e0(this)[_0x43781a(0x337)](_0x43781a(0x28e), !![]), this[_0x43781a(0x422)] = _0x3402f9, _0x1de3c6('(highlight)\x20Added\x20video\x20event\x20listener\x20#modify'));
                        });
                    }), _0x41a6a4[_0x9015c4(0x3ef)]('img[referrerpolicy]')[_0x9015c4(0x359)](function () {
                        const _0x55e4d6 = _0x9015c4;
                        _0x48a1e0(this)['on'](_0x55e4d6(0x284), function () {
                            const _0x147342 = _0x55e4d6;
                            !_0x48a1e0(this)[_0x147342(0x3cc)](_0x147342(0x216)) && (_0x41a6a4[_0x147342(0x3ef)](_0x147342(0x220))[_0x147342(0x312)] === 0x0 ? (_0x48a1e0(this)['attr'](_0x147342(0x3e1), !![]), _0x48a1e0('.IG_DWHISTORY_THUMBNAIL')[_0x147342(0x2b2)](), _0x1de3c6(_0x147342(0x35e))) : (_0x48a1e0(this)[_0x147342(0x337)]('data-remove-thumbnail', !![]), _0x1de3c6('(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                        });
                    }), _0x41a6a4[_0x9015c4(0x3ef)]('video')[_0x9015c4(0x359)](function () {
                        const _0x59c431 = _0x9015c4;
                        _0x48a1e0(this)['on'](_0x59c431(0x373), function () {
                            const _0x21100d = _0x59c431;
                            !_0x48a1e0(this)['data'](_0x21100d(0x340)) && (_0x41a6a4[_0x21100d(0x3ef)](_0x21100d(0x220))[_0x21100d(0x312)] === 0x0 ? (_0x48a1e0(this)[_0x21100d(0x337)](_0x21100d(0x2b9), !![]), _0x31f7e4(![]), _0x1de3c6(_0x21100d(0x1e3))) : (_0x48a1e0(this)['attr'](_0x21100d(0x2b9), !![]), _0x1de3c6(_0x21100d(0x23f))));
                        });
                    }));
                }
            }
        }
        async function _0x31f7e4(_0x431a7c) {
            const _0x56740e = _0x4782ca;
            if (_0x431a7c) {
                let _0x525888 = new Date()['getTime'](), _0x492ae6 = Math[_0x56740e(0x333)](_0x525888 / 0x3e8), _0x251e7f = location[_0x56740e(0x384)][_0x56740e(0x37a)](/\/$/ig, '')[_0x56740e(0x29f)]('/')['at'](-0x1), _0x182822 = '', _0x4af989 = _0x48a1e0(_0x56740e(0x2ba))[_0x56740e(0x312)] || _0x48a1e0(_0x56740e(0x2b7))['length'] || _0x48a1e0(_0x56740e(0x21c))[_0x56740e(0x3ef)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x56740e(0x312)], _0x2dd667 = '';
                _0x1eccfc(!![]);
                if (_0x3b5150[_0x56740e(0x27d)][_0x251e7f]) {
                    _0x1de3c6(_0x56740e(0x2e9), _0x251e7f);
                    let _0x1ffa39 = _0x3b5150[_0x56740e(0x27d)][_0x251e7f][_0x56740e(0x3cc)][_0x56740e(0x2f2)][0x0][_0x56740e(0x41c)][_0x56740e(0x312)];
                    _0x182822 = _0x3b5150[_0x56740e(0x27d)][_0x251e7f][_0x56740e(0x3cc)]['reels_media'][0x0][_0x56740e(0x2d5)]['username'], _0x2dd667 = _0x3b5150[_0x56740e(0x27d)][_0x251e7f][_0x56740e(0x3cc)]['reels_media'][0x0][_0x56740e(0x41c)][_0x1ffa39 - _0x4af989];
                } else {
                    let _0x3f63f4 = await _0x56ed73(_0x251e7f), _0xe7a47b = _0x3f63f4[_0x56740e(0x3cc)][_0x56740e(0x2f2)][0x0]['items'][_0x56740e(0x312)];
                    _0x182822 = _0x3f63f4[_0x56740e(0x3cc)][_0x56740e(0x2f2)][0x0][_0x56740e(0x2d5)]['username'], _0x2dd667 = _0x3f63f4['data'][_0x56740e(0x2f2)][0x0][_0x56740e(0x41c)][_0xe7a47b - _0x4af989], _0x3b5150['highlights'][_0x251e7f] = _0x3f63f4;
                }
                _0x573435[_0x56740e(0x26f)] && (_0x492ae6 = _0x2dd667[_0x56740e(0x261)]);
                if (_0x573435[_0x56740e(0x405)] && !_0xe54a1c) {
                    let _0x4323b9 = await _0x2f1f8a(_0x2dd667['id']);
                    _0x4323b9['status'] === 'ok' ? _0x70c382(_0x4323b9[_0x56740e(0x41c)][0x0][_0x56740e(0x204)][_0x56740e(0x27b)][0x0][_0x56740e(0x41d)], _0x182822, _0x56740e(0x27d), _0x492ae6, _0x56740e(0x258)) : (_0x573435['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT'] ? (delete _0x3b5150[_0x56740e(0x27d)][_0x251e7f], _0xe54a1c = !![], _0x31f7e4(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x4323b9['message']), _0x1de3c6(_0x4323b9));
                } else
                    _0x70c382(_0x2dd667[_0x56740e(0x2e1)]['at'](-0x1)[_0x56740e(0x1ec)], _0x182822, _0x56740e(0x27d), _0x492ae6, 'jpg', _0x251e7f), _0xe54a1c = ![];
                _0x1eccfc(![]);
            } else {
                if (_0x48a1e0(_0x56740e(0x2a1))[_0x56740e(0x312)]) {
                    if (!_0x48a1e0(_0x56740e(0x220))[_0x56740e(0x312)]) {
                        let _0x12baf9 = null;
                        _0x48a1e0(_0x56740e(0x2b4))[_0x56740e(0x312)] > 0x0 ? _0x12baf9 = _0x48a1e0('body\x20>\x20div\x20section:visible._ac0a') : (_0x12baf9 = _0x48a1e0('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x12baf9[_0x56740e(0x29c)](_0x56740e(0x224), 'relative'));
                        if (_0x12baf9['length'] === 0x0) {
                            let _0x52d2b1 = _0x48a1e0('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x200b65 = 0x0;
                            _0x52d2b1[_0x56740e(0x359)](function () {
                                const _0x3f8e86 = _0x56740e;
                                _0x48a1e0(this)[_0x3f8e86(0x3e6)]() > _0x200b65 && (_0x200b65 = _0x48a1e0(this)[_0x3f8e86(0x3e6)](), _0x12baf9 = _0x48a1e0(this)['children'](_0x3f8e86(0x381))['first']());
                            });
                        }
                        _0x12baf9 != null && _0x12baf9['append'](_0x56740e(0x3a9) + _0x28f55f(_0x56740e(0x300)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x48448f['THUMBNAIL'] + _0x56740e(0x238));
                    }
                } else
                    _0x48a1e0(_0x56740e(0x220))['remove']();
            }
        }
        async function _0x59d5e1(_0x267a5a, _0x23fc52, _0x1dd017) {
            const _0x570fef = _0x4782ca;
            if (_0x267a5a) {
                let _0x34e50c = new Date()[_0x570fef(0x20d)](), _0x1cb7c5 = Math[_0x570fef(0x333)](_0x34e50c / 0x3e8), _0x2877e1 = _0x48a1e0(_0x570fef(0x2f5))[_0x570fef(0x251)]()[_0x570fef(0x390)]() || location[_0x570fef(0x3db)][_0x570fef(0x29f)]('/')[_0x570fef(0x1fe)](_0x139663 => _0x139663[_0x570fef(0x312)] > 0x0)['at'](0x1);
                _0x1eccfc(!![]);
                if (_0x573435[_0x570fef(0x405)] && !_0xe54a1c) {
                    let _0x51b559 = null, _0x3532c9 = await _0x417033(_0x2877e1), _0xd3bb2f = _0x3532c9['user']['pk'], _0x2685ea = await _0x305281(_0xd3bb2f), _0x5276e6 = location['pathname'][_0x570fef(0x29f)]('/')['filter'](_0x498dd3 => _0x498dd3['length'] > 0x0 && _0x498dd3[_0x570fef(0x3f5)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x2685ea[_0x570fef(0x3cc)][_0x570fef(0x2f2)][0x0][_0x570fef(0x41c)][_0x570fef(0x21d)](_0x27fb8d => {
                        _0x27fb8d['id'] == _0x5276e6 && (_0x51b559 = _0x27fb8d['id']);
                    });
                    if (_0x51b559 == null) {
                        let _0x2c30fc = _0x48a1e0(_0x570fef(0x353) + _0x2877e1 + _0x570fef(0x360))['filter'](function () {
                            const _0xb4a0d9 = _0x570fef;
                            return _0x48a1e0(this)[_0xb4a0d9(0x3a0)]()[_0xb4a0d9(0x312)] === 0x0 && _0x48a1e0(this)[_0xb4a0d9(0x3ef)]('svg')['length'] === 0x0 && _0x48a1e0(this)['text']()?.[_0xb4a0d9(0x3c9)]() === _0x2877e1?.['toLowerCase']();
                        })[_0x570fef(0x2e6)](_0x570fef(0x367))['filter'](function () {
                            const _0x1f41ea = _0x570fef;
                            return _0x48a1e0(this)['text']()?.[_0x1f41ea(0x3c9)]() !== _0x2877e1?.[_0x1f41ea(0x3c9)]();
                        })[_0x570fef(0x1fe)](function () {
                            const _0x258cbe = _0x570fef;
                            return _0x48a1e0(this)[_0x258cbe(0x3a0)]()['length'] > 0x1;
                        })[_0x570fef(0x251)]();
                        _0x2c30fc[_0x570fef(0x3a0)]()['filter'](function () {
                            const _0x395a28 = _0x570fef;
                            return _0x48a1e0(this)[_0x395a28(0x223)]() < 0xa;
                        })[_0x570fef(0x251)]()[_0x570fef(0x3a0)]()[_0x570fef(0x359)](function (_0x3516bc) {
                            const _0x29bc90 = _0x570fef;
                            _0x48a1e0(this)['children']()[_0x29bc90(0x312)] > 0x0 && (_0x51b559 = _0x2685ea[_0x29bc90(0x3cc)][_0x29bc90(0x2f2)][0x0][_0x29bc90(0x41c)][_0x3516bc]['id']);
                        });
                    }
                    _0x51b559 == null && (_0x48a1e0(_0x570fef(0x356))[_0x570fef(0x359)](function (_0x133152) {
                        const _0x58fdfd = _0x570fef;
                        _0x48a1e0(this)['hasClass'](_0x58fdfd(0x2a3)) && (_0x48a1e0(this)[_0x58fdfd(0x3a0)]()['length'] > 0x0 && (_0x51b559 = _0x2685ea[_0x58fdfd(0x3cc)][_0x58fdfd(0x2f2)][0x0][_0x58fdfd(0x41c)][_0x133152]['id']));
                    }), _0x48a1e0(_0x570fef(0x3fa))[_0x570fef(0x359)](function (_0x210b0a) {
                        const _0x31eef5 = _0x570fef;
                        _0x48a1e0(this)[_0x31eef5(0x3a0)]()['hasClass'](_0x31eef5(0x29b)) && (_0x51b559 = _0x2685ea[_0x31eef5(0x3cc)]['reels_media'][0x0][_0x31eef5(0x41c)][_0x210b0a]['id']);
                    }));
                    _0x51b559 == null && (_0x51b559 = location['pathname'][_0x570fef(0x29f)]('/')[_0x570fef(0x1fe)](_0x564244 => _0x564244[_0x570fef(0x312)] > 0x0 && _0x564244[_0x570fef(0x3f5)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x224b68 = await _0x2f1f8a(_0x51b559);
                    _0x573435['RENAME_PUBLISH_DATE'] && (_0x1cb7c5 = _0x224b68[_0x570fef(0x41c)][0x0][_0x570fef(0x252)]);
                    _0x224b68[_0x570fef(0x303)] === 'ok' ? _0x224b68['items'][0x0]['video_versions'] ? _0x1dd017 ? _0x435363(_0x224b68['items'][0x0]['video_versions'][0x0][_0x570fef(0x41d)]) : _0x70c382(_0x224b68[_0x570fef(0x41c)][0x0][_0x570fef(0x280)][0x0][_0x570fef(0x41d)], _0x2877e1, _0x570fef(0x1e5), _0x1cb7c5, _0x570fef(0x349)) : _0x1dd017 ? _0x435363(_0x224b68[_0x570fef(0x41c)][0x0][_0x570fef(0x204)][_0x570fef(0x27b)][0x0][_0x570fef(0x41d)]) : _0x70c382(_0x224b68[_0x570fef(0x41c)][0x0][_0x570fef(0x204)][_0x570fef(0x27b)][0x0][_0x570fef(0x41d)], _0x2877e1, 'stories', _0x1cb7c5, _0x570fef(0x258)) : (_0x573435[_0x570fef(0x3ba)] ? (_0xe54a1c = !![], _0x59d5e1(_0x267a5a, _0x23fc52, _0x1dd017)) : alert(_0x570fef(0x314) + _0x224b68[_0x570fef(0x3b2)]), _0x1de3c6(_0x224b68));
                    _0x1eccfc(![]);
                    return;
                }
                if (_0x48a1e0(_0x570fef(0x391))['length'] > 0x0) {
                    let _0x18ec6a = _0x570fef(0x349), _0x33257c = '', _0x25d016 = location[_0x570fef(0x3db)][_0x570fef(0x37a)](/\/$/ig, '')[_0x570fef(0x29f)]('/')['at'](-0x1);
                    if (_0x3b5150[_0x570fef(0x1e5)][_0x2877e1] && !_0x23fc52) {
                        _0x1de3c6(_0x570fef(0x2e9), _0x2877e1), _0x3b5150['stories'][_0x2877e1][_0x570fef(0x3cc)][_0x570fef(0x2f2)][0x0][_0x570fef(0x41c)]['forEach'](_0x2b9a25 => {
                            const _0x4e7bed = _0x570fef;
                            _0x2b9a25['id'] == _0x25d016 && (_0x33257c = _0x2b9a25['video_resources'][0x0]['src'], _0x573435[_0x4e7bed(0x26f)] && (_0x1cb7c5 = _0x2b9a25[_0x4e7bed(0x261)]));
                        });
                        if (_0x33257c[_0x570fef(0x312)] == 0x0) {
                            _0x1de3c6('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x2877e1), _0x59d5e1(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x46d578 = await _0x417033(_0x2877e1), _0x234f1a = _0x46d578[_0x570fef(0x1f9)]['pk'], _0x3b9f5c = await _0x305281(_0x234f1a);
                        _0x3b9f5c[_0x570fef(0x3cc)]['reels_media'][0x0][_0x570fef(0x41c)]['forEach'](_0x1a564e => {
                            const _0x327e80 = _0x570fef;
                            _0x1a564e['id'] == _0x25d016 && (_0x33257c = _0x1a564e[_0x327e80(0x28d)][0x0][_0x327e80(0x1ec)], _0x573435['RENAME_PUBLISH_DATE'] && (_0x1cb7c5 = _0x1a564e[_0x327e80(0x261)]));
                        });
                        if (_0x33257c[_0x570fef(0x312)] == 0x0) {
                            let _0x4a63da = _0x48a1e0(_0x570fef(0x353) + _0x2877e1 + _0x570fef(0x360))[_0x570fef(0x1fe)](function () {
                                const _0x578561 = _0x570fef;
                                return _0x48a1e0(this)[_0x578561(0x3a0)]()['length'] === 0x0 && _0x48a1e0(this)[_0x578561(0x3ef)](_0x578561(0x426))['length'] === 0x0 && _0x48a1e0(this)['text']()?.[_0x578561(0x3c9)]() === _0x2877e1?.[_0x578561(0x3c9)]();
                            })['parents'](_0x570fef(0x367))[_0x570fef(0x1fe)](function () {
                                const _0x1e41f8 = _0x570fef;
                                return _0x48a1e0(this)[_0x1e41f8(0x390)]()?.['toLowerCase']() !== _0x2877e1?.[_0x1e41f8(0x3c9)]();
                            })[_0x570fef(0x1fe)](function () {
                                const _0xb7dbeb = _0x570fef;
                                return _0x48a1e0(this)[_0xb7dbeb(0x3a0)]()[_0xb7dbeb(0x312)] > 0x1;
                            })[_0x570fef(0x251)]();
                            _0x4a63da[_0x570fef(0x3a0)]()['filter'](function () {
                                const _0x323f4d = _0x570fef;
                                return _0x48a1e0(this)[_0x323f4d(0x223)]() < 0xa;
                            })[_0x570fef(0x251)]()[_0x570fef(0x3a0)]()[_0x570fef(0x359)](function (_0x46c672) {
                                const _0x14934d = _0x570fef;
                                _0x48a1e0(this)['children']()[_0x14934d(0x312)] > 0x0 && (_0x33257c = _0x3b9f5c[_0x14934d(0x3cc)][_0x14934d(0x2f2)][0x0][_0x14934d(0x41c)][_0x46c672][_0x14934d(0x28d)][0x0][_0x14934d(0x1ec)], _0x573435[_0x14934d(0x26f)] && (_0x1cb7c5 = _0x3b9f5c['data']['reels_media'][0x0]['items'][_0x46c672]['taken_at_timestamp']));
                            }), _0x33257c[_0x570fef(0x312)] == 0x0 && (_0x48a1e0('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x570fef(0x359)](function (_0x17b29) {
                                const _0x406018 = _0x570fef;
                                _0x48a1e0(this)[_0x406018(0x330)](_0x406018(0x2a3)) && (_0x48a1e0(this)['children']()[_0x406018(0x312)] > 0x0 && (_0x33257c = _0x3b9f5c[_0x406018(0x3cc)][_0x406018(0x2f2)][0x0][_0x406018(0x41c)][_0x17b29]['video_resources'][0x0][_0x406018(0x1ec)], _0x573435[_0x406018(0x26f)] && (_0x1cb7c5 = _0x3b9f5c[_0x406018(0x3cc)][_0x406018(0x2f2)][0x0]['items'][_0x17b29][_0x406018(0x261)])));
                            }), _0x48a1e0(_0x570fef(0x3fa))[_0x570fef(0x359)](function (_0xc20a17) {
                                const _0x1d587e = _0x570fef;
                                _0x48a1e0(this)['children']()['hasClass'](_0x1d587e(0x29b)) && (_0x33257c = _0x3b9f5c[_0x1d587e(0x3cc)][_0x1d587e(0x2f2)][0x0][_0x1d587e(0x41c)][_0xc20a17]['video_resources'][0x0]['src'], _0x573435['RENAME_PUBLISH_DATE'] && (_0x1cb7c5 = _0x3b9f5c[_0x1d587e(0x3cc)][_0x1d587e(0x2f2)][0x0][_0x1d587e(0x41c)][_0xc20a17]['taken_at_timestamp']));
                            }));
                        }
                        _0x3b5150[_0x570fef(0x1e5)][_0x2877e1] = _0x3b9f5c;
                    }
                    _0x33257c[_0x570fef(0x312)] == 0x0 ? alert(_0x28f55f(_0x570fef(0x3e9))) : _0x1dd017 ? _0x435363(_0x33257c) : _0x70c382(_0x33257c, _0x2877e1, _0x570fef(0x1e5), _0x1cb7c5, _0x18ec6a);
                } else {
                    let _0x342f68 = _0x48a1e0(_0x570fef(0x208))[_0x570fef(0x337)](_0x570fef(0x416))?.[_0x570fef(0x29f)](',')[0x0]?.[_0x570fef(0x29f)]('\x20')[0x0], _0x5784e7 = _0x342f68 ? _0x342f68 : _0x48a1e0('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0x570fef(0x337)](_0x570fef(0x1ec));
                    if (!_0x5784e7) {
                        let _0x41ec79 = _0x48a1e0(_0x570fef(0x26b));
                        _0x5784e7 = _0x41ec79['attr'](_0x570fef(0x416)) ? _0x41ec79[_0x570fef(0x337)](_0x570fef(0x416))?.['split'](',')[0x0]?.[_0x570fef(0x29f)]('\x20')[0x0] : _0x41ec79[_0x570fef(0x337)](_0x570fef(0x1ec));
                    }
                    _0x573435['RENAME_PUBLISH_DATE'] && (_0x1cb7c5 = new Date(_0x48a1e0(_0x570fef(0x354))[_0x570fef(0x251)]()[_0x570fef(0x337)]('datetime'))[_0x570fef(0x20d)]());
                    let _0x3aaa9d = _0x5784e7, _0x20a2ae = _0x570fef(0x258);
                    _0x1dd017 ? _0x435363(_0x3aaa9d) : _0x70c382(_0x3aaa9d, _0x2877e1, _0x570fef(0x1e5), _0x1cb7c5, _0x20a2ae);
                }
                _0xe54a1c = ![], _0x1eccfc(![]);
            } else {
                let _0x524380 = _0x570fef(0x221);
                if (!_0x48a1e0('.IG_DWSTORY')[_0x570fef(0x312)]) {
                    _0x3b5150['stories'] = {};
                    let _0x38caf8 = null;
                    _0x48a1e0(_0x570fef(0x2b4))['length'] > 0x0 ? _0x38caf8 = _0x48a1e0(_0x570fef(0x39b)) : (_0x38caf8 = _0x48a1e0(_0x570fef(0x346)), _0x38caf8[_0x570fef(0x29c)]('position', 'relative'));
                    _0x38caf8[_0x570fef(0x312)] === 0x0 && (_0x38caf8 = _0x48a1e0(_0x570fef(0x28b))[_0x570fef(0x361)]()[_0x570fef(0x361)]()[_0x570fef(0x361)]()['find'](_0x570fef(0x3b7)), _0x38caf8[_0x570fef(0x29c)](_0x570fef(0x224), _0x570fef(0x420)));
                    _0x38caf8[_0x570fef(0x312)] === 0x0 && (_0x38caf8 = _0x48a1e0(_0x570fef(0x28b))[_0x570fef(0x361)]()[_0x570fef(0x361)]()[_0x570fef(0x361)]()[_0x570fef(0x3ef)](_0x570fef(0x2ec)), _0x38caf8[_0x570fef(0x29c)](_0x570fef(0x224), _0x570fef(0x420)));
                    if (_0x38caf8[_0x570fef(0x312)] === 0x0) {
                        let _0x27493e = _0x48a1e0(_0x570fef(0x2aa)), _0x43661d = 0x0;
                        _0x27493e[_0x570fef(0x359)](function () {
                            const _0x784b35 = _0x570fef;
                            _0x48a1e0(this)[_0x784b35(0x3e6)]() > _0x43661d && (_0x43661d = _0x48a1e0(this)[_0x784b35(0x3e6)](), _0x38caf8 = _0x48a1e0(this)['children'](_0x784b35(0x381))[_0x784b35(0x251)]());
                        });
                    }
                    _0x38caf8 != null && (_0x38caf8[_0x570fef(0x251)]()[_0x570fef(0x29c)](_0x570fef(0x224), 'relative'), _0x38caf8[_0x570fef(0x251)]()[_0x570fef(0x232)](_0x570fef(0x364) + _0x28f55f('DW') + _0x570fef(0x2c0) + _0x48448f[_0x570fef(0x25e)] + _0x570fef(0x238)), _0x38caf8['first']()['append'](_0x570fef(0x24e) + _0x28f55f(_0x570fef(0x34d)) + _0x570fef(0x236) + _0x48448f[_0x570fef(0x34d)] + _0x570fef(0x238)), _0x573435[_0x570fef(0x1f5)] && _0x38caf8[_0x570fef(0x3ef)](_0x570fef(0x3dd))[_0x570fef(0x359)](function () {
                        _0x48a1e0(this)['on']('play\x20playing', function () {
                            const _0x4c0d16 = a0_0x2ca3;
                            !_0x48a1e0(this)[_0x4c0d16(0x3cc)](_0x4c0d16(0x205)) && (_0x48a1e0(this)['attr']('data-modify', !![]), this[_0x4c0d16(0x422)] = _0x3402f9, _0x1de3c6('(story)\x20Added\x20video\x20event\x20listener\x20#modify'));
                        });
                    }), _0x38caf8['find'](_0x570fef(0x1ff))[_0x570fef(0x359)](function () {
                        const _0x1cf8e7 = _0x570fef;
                        _0x48a1e0(this)['on'](_0x1cf8e7(0x284), function () {
                            const _0x12db12 = _0x1cf8e7;
                            !_0x48a1e0(this)[_0x12db12(0x3cc)]('remove-thumbnail') && (_0x38caf8['find']('.IG_DWSTORY_THUMBNAIL')['length'] === 0x0 ? (_0x48a1e0(this)[_0x12db12(0x337)]('data-remove-thumbnail', !![]), _0x48a1e0('.IG_DWSTORY_THUMBNAIL')[_0x12db12(0x2b2)](), _0x1de3c6(_0x12db12(0x41a))) : (_0x48a1e0(this)[_0x12db12(0x337)](_0x12db12(0x3e1), !![]), _0x1de3c6(_0x12db12(0x231))));
                        });
                    }), _0x38caf8[_0x570fef(0x3ef)](_0x570fef(0x3dd))['each'](function () {
                        const _0x208bab = _0x570fef;
                        _0x48a1e0(this)['on'](_0x208bab(0x373), function () {
                            const _0x48e298 = _0x208bab;
                            !_0x48a1e0(this)[_0x48e298(0x3cc)]('modify-thumbnail') && (_0x38caf8[_0x48e298(0x3ef)](_0x48e298(0x325))['length'] === 0x0 ? (_0x48a1e0(this)['attr']('data-modify-thumbnail', !![]), _0x5e2a4e(![]), _0x1de3c6(_0x48e298(0x36c))) : (_0x48a1e0(this)[_0x48e298(0x337)](_0x48e298(0x2b9), !![]), _0x1de3c6(_0x48e298(0x3b6))));
                        });
                    }));
                }
            }
        }
        async function _0x5e2a4e(_0x580fdc, _0x369635) {
            const _0x587298 = _0x4782ca;
            if (_0x580fdc) {
                let _0x1f1b55 = new Date()[_0x587298(0x20d)](), _0x5385d3 = Math[_0x587298(0x333)](_0x1f1b55 / 0x3e8), _0x39bbee = _0x587298(0x258), _0xa5291 = _0x48a1e0(_0x587298(0x2f5))[_0x587298(0x251)]()['text']() || location[_0x587298(0x3db)][_0x587298(0x29f)]('/')['at'](0x2), _0x4bfea9 = _0x587298(0x370), _0x286c7c = location[_0x587298(0x3db)][_0x587298(0x37a)](/\/$/ig, '')[_0x587298(0x29f)]('/')['at'](-0x1), _0x35686b = '';
                _0x1eccfc(!![]);
                if (_0x573435['FORCE_RESOURCE_VIA_MEDIA'] && !_0xe54a1c) {
                    let _0x4c1d73 = null, _0x4c5eb6 = await _0x417033(_0xa5291), _0x7e8661 = _0x4c5eb6[_0x587298(0x1f9)]['pk'], _0x961fb7 = await _0x305281(_0x7e8661), _0x51315f = location[_0x587298(0x3db)][_0x587298(0x29f)]('/')[_0x587298(0x1fe)](_0x2c94a8 => _0x2c94a8[_0x587298(0x312)] > 0x0 && _0x2c94a8[_0x587298(0x3f5)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x961fb7['data'][_0x587298(0x2f2)][0x0]['items'][_0x587298(0x21d)](_0x4b46f1 => {
                        _0x4b46f1['id'] == _0x51315f && (_0x4c1d73 = _0x4b46f1['id']);
                    });
                    if (_0x4c1d73 == null) {
                        let _0x4c809a = _0x48a1e0('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0xa5291 + _0x587298(0x360))[_0x587298(0x1fe)](function () {
                            const _0x7e987e = _0x587298;
                            return _0x48a1e0(this)['children']()[_0x7e987e(0x312)] === 0x0 && _0x48a1e0(this)[_0x7e987e(0x3ef)](_0x7e987e(0x426))[_0x7e987e(0x312)] === 0x0 && _0x48a1e0(this)[_0x7e987e(0x390)]()?.[_0x7e987e(0x3c9)]() === _0xa5291?.[_0x7e987e(0x3c9)]();
                        })[_0x587298(0x2e6)]('div:not([class]):not([style])')[_0x587298(0x1fe)](function () {
                            const _0xf88e19 = _0x587298;
                            return _0x48a1e0(this)['text']()?.[_0xf88e19(0x3c9)]() !== _0xa5291?.[_0xf88e19(0x3c9)]();
                        })[_0x587298(0x1fe)](function () {
                            const _0x3667ac = _0x587298;
                            return _0x48a1e0(this)[_0x3667ac(0x3a0)]()[_0x3667ac(0x312)] > 0x1;
                        })[_0x587298(0x251)]();
                        _0x4c809a[_0x587298(0x3a0)]()['filter'](function () {
                            const _0x1d4263 = _0x587298;
                            return _0x48a1e0(this)[_0x1d4263(0x223)]() < 0xa;
                        })[_0x587298(0x251)]()[_0x587298(0x3a0)]()[_0x587298(0x359)](function (_0x4274ed) {
                            const _0x361599 = _0x587298;
                            _0x48a1e0(this)[_0x361599(0x3a0)]()[_0x361599(0x312)] > 0x0 && (_0x4c1d73 = _0x961fb7['data'][_0x361599(0x2f2)][0x0]['items'][_0x4274ed]['id']);
                        });
                    }
                    _0x4c1d73 == null && (_0x48a1e0(_0x587298(0x356))[_0x587298(0x359)](function (_0x12cf5a) {
                        const _0x5e7dd3 = _0x587298;
                        _0x48a1e0(this)[_0x5e7dd3(0x330)](_0x5e7dd3(0x2a3)) && (_0x48a1e0(this)[_0x5e7dd3(0x3a0)]()[_0x5e7dd3(0x312)] > 0x0 && (_0x4c1d73 = _0x961fb7[_0x5e7dd3(0x3cc)]['reels_media'][0x0][_0x5e7dd3(0x41c)][_0x12cf5a]['id']));
                    }), _0x48a1e0(_0x587298(0x3fa))[_0x587298(0x359)](function (_0x1eb7dc) {
                        const _0x45840a = _0x587298;
                        _0x48a1e0(this)[_0x45840a(0x3a0)]()[_0x45840a(0x330)](_0x45840a(0x29b)) && (_0x4c1d73 = _0x961fb7[_0x45840a(0x3cc)]['reels_media'][0x0][_0x45840a(0x41c)][_0x1eb7dc]['id']);
                    }));
                    _0x4c1d73 == null && (_0x4c1d73 = location[_0x587298(0x3db)]['split']('/')['filter'](_0x2dc5cc => _0x2dc5cc[_0x587298(0x312)] > 0x0 && _0x2dc5cc['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x2cdfaf = await _0x2f1f8a(_0x4c1d73);
                    _0x573435['RENAME_PUBLISH_DATE'] && (_0x5385d3 = _0x2cdfaf['items'][0x0]['taken_at']);
                    _0x2cdfaf[_0x587298(0x303)] === 'ok' ? _0x70c382(_0x2cdfaf['items'][0x0][_0x587298(0x204)]['candidates'][0x0][_0x587298(0x41d)], _0xa5291, _0x587298(0x1e5), _0x5385d3, 'jpg') : (_0x573435[_0x587298(0x3ba)] ? (_0xe54a1c = !![], _0x5e2a4e(!![], _0x369635)) : alert(_0x587298(0x314) + _0x2cdfaf[_0x587298(0x3b2)]), _0x1de3c6(_0x2cdfaf));
                    _0x1eccfc(![]);
                    return;
                }
                if (_0x3b5150[_0x587298(0x1e5)][_0xa5291] && !_0x369635) {
                    _0x1de3c6('Fetch\x20from\x20memory\x20cache:', _0xa5291), _0x3b5150[_0x587298(0x1e5)][_0xa5291][_0x587298(0x3cc)][_0x587298(0x2f2)][0x0][_0x587298(0x41c)]['forEach'](_0x32771c => {
                        const _0x2f54f7 = _0x587298;
                        _0x32771c['id'] == _0x286c7c && (_0x35686b = _0x32771c['display_url'], _0x573435[_0x2f54f7(0x26f)] && (_0x5385d3 = _0x32771c[_0x2f54f7(0x261)]));
                    });
                    if (_0x35686b['length'] == 0x0) {
                        _0x1de3c6(_0x587298(0x413), _0xa5291), _0x5e2a4e(!![], !![]);
                        return;
                    }
                } else {
                    let _0x4fd6c2 = await _0x417033(_0xa5291), _0x4e343d = _0x4fd6c2['user']['pk'], _0x5274f9 = await _0x305281(_0x4e343d);
                    _0x5274f9[_0x587298(0x3cc)][_0x587298(0x2f2)][0x0][_0x587298(0x41c)]['forEach'](_0x1bc48c => {
                        const _0x3b913f = _0x587298;
                        _0x1bc48c['id'] == _0x286c7c && (_0x35686b = _0x1bc48c[_0x3b913f(0x250)], _0x573435[_0x3b913f(0x26f)] && (_0x5385d3 = _0x1bc48c[_0x3b913f(0x261)]));
                    });
                    if (_0x35686b[_0x587298(0x312)] == 0x0) {
                        let _0x16b40a = _0x48a1e0(_0x587298(0x353) + _0xa5291 + _0x587298(0x360))[_0x587298(0x1fe)](function () {
                            const _0xc48847 = _0x587298;
                            return _0x48a1e0(this)[_0xc48847(0x3a0)]()['length'] === 0x0 && _0x48a1e0(this)[_0xc48847(0x3ef)](_0xc48847(0x426))['length'] === 0x0 && _0x48a1e0(this)[_0xc48847(0x390)]()?.[_0xc48847(0x3c9)]() === _0xa5291?.['toLowerCase']();
                        })[_0x587298(0x2e6)]('div:not([class]):not([style])')[_0x587298(0x1fe)](function () {
                            const _0x315aac = _0x587298;
                            return _0x48a1e0(this)[_0x315aac(0x390)]()?.[_0x315aac(0x3c9)]() !== _0xa5291?.[_0x315aac(0x3c9)]();
                        })['filter'](function () {
                            const _0x2546f2 = _0x587298;
                            return _0x48a1e0(this)[_0x2546f2(0x3a0)]()['length'] > 0x1;
                        })[_0x587298(0x251)]();
                        _0x16b40a[_0x587298(0x3a0)]()[_0x587298(0x1fe)](function () {
                            const _0x12e079 = _0x587298;
                            return _0x48a1e0(this)[_0x12e079(0x223)]() < 0xa;
                        })[_0x587298(0x251)]()[_0x587298(0x3a0)]()[_0x587298(0x359)](function (_0x797031) {
                            const _0x337d13 = _0x587298;
                            _0x48a1e0(this)['children']()['length'] > 0x0 && (_0x35686b = _0x5274f9[_0x337d13(0x3cc)][_0x337d13(0x2f2)][0x0]['items'][_0x797031][_0x337d13(0x250)], _0x573435[_0x337d13(0x26f)] && (_0x5385d3 = _0x5274f9[_0x337d13(0x3cc)][_0x337d13(0x2f2)][0x0][_0x337d13(0x41c)][_0x797031][_0x337d13(0x261)]));
                        }), _0x35686b[_0x587298(0x312)] == 0x0 && (_0x48a1e0('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x587298(0x359)](function (_0xb045c4) {
                            const _0x2a1f4d = _0x587298;
                            _0x48a1e0(this)[_0x2a1f4d(0x330)](_0x2a1f4d(0x2a3)) && (_0x48a1e0(this)['children']()[_0x2a1f4d(0x312)] > 0x0 && (_0x35686b = _0x5274f9[_0x2a1f4d(0x3cc)][_0x2a1f4d(0x2f2)][0x0]['items'][_0xb045c4]['display_url'], _0x573435['RENAME_PUBLISH_DATE'] && (_0x5385d3 = _0x5274f9[_0x2a1f4d(0x3cc)][_0x2a1f4d(0x2f2)][0x0]['items'][_0xb045c4][_0x2a1f4d(0x261)])));
                        }), _0x48a1e0('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x587298(0x359)](function (_0x4cbfb6) {
                            const _0x4e692f = _0x587298;
                            _0x48a1e0(this)[_0x4e692f(0x3a0)]()[_0x4e692f(0x330)](_0x4e692f(0x29b)) && (_0x35686b = _0x5274f9[_0x4e692f(0x3cc)]['reels_media'][0x0][_0x4e692f(0x41c)][_0x4cbfb6][_0x4e692f(0x250)], _0x573435['RENAME_PUBLISH_DATE'] && (_0x5385d3 = _0x5274f9[_0x4e692f(0x3cc)][_0x4e692f(0x2f2)][0x0][_0x4e692f(0x41c)][_0x4cbfb6][_0x4e692f(0x261)]));
                        }));
                    }
                }
                _0x70c382(_0x35686b, _0xa5291, _0x587298(0x306), _0x5385d3, _0x39bbee), _0xe54a1c = ![], _0x1eccfc(![]);
            } else {
                if (_0x48a1e0(_0x587298(0x36f))[_0x587298(0x361)]()[_0x587298(0x3ef)](_0x587298(0x26d))['length']) {
                    let _0x11fb83 = null;
                    _0x48a1e0('body\x20>\x20div\x20section._ac0a')[_0x587298(0x312)] > 0x0 ? _0x11fb83 = _0x48a1e0('body\x20>\x20div\x20section:visible._ac0a') : (_0x11fb83 = _0x48a1e0(_0x587298(0x346)), _0x11fb83[_0x587298(0x29c)]('position', 'relative'));
                    _0x11fb83[_0x587298(0x312)] === 0x0 && (_0x11fb83 = _0x48a1e0(_0x587298(0x28b))[_0x587298(0x361)]()[_0x587298(0x361)]()[_0x587298(0x361)]()[_0x587298(0x3ef)](_0x587298(0x3b7)), _0x11fb83[_0x587298(0x29c)](_0x587298(0x224), 'relative'));
                    _0x11fb83['length'] === 0x0 && (_0x11fb83 = _0x48a1e0(_0x587298(0x28b))[_0x587298(0x361)]()['parent']()[_0x587298(0x361)]()[_0x587298(0x3ef)](_0x587298(0x2ec)), _0x11fb83[_0x587298(0x29c)]('position', _0x587298(0x420)));
                    if (_0x11fb83[_0x587298(0x312)] === 0x0) {
                        let _0x39506d = _0x48a1e0(_0x587298(0x2aa)), _0x497c98 = 0x0;
                        _0x39506d[_0x587298(0x359)](function () {
                            const _0x3de72e = _0x587298;
                            _0x48a1e0(this)['width']() > _0x497c98 && (_0x497c98 = _0x48a1e0(this)[_0x3de72e(0x3e6)](), _0x11fb83 = _0x48a1e0(this)[_0x3de72e(0x3a0)](_0x3de72e(0x381))[_0x3de72e(0x251)]());
                        });
                    }
                    _0x11fb83 != null && (_0x11fb83[_0x587298(0x251)]()[_0x587298(0x29c)](_0x587298(0x224), _0x587298(0x420)), _0x11fb83['first']()[_0x587298(0x232)](_0x587298(0x3a9) + _0x28f55f(_0x587298(0x300)) + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x48448f['THUMBNAIL'] + _0x587298(0x238)));
                }
            }
        }
        async function _0x5af119(_0x16805a, _0x118685, _0x5bcdd8) {
            const _0x4b7c40 = _0x4782ca;
            if (_0x16805a) {
                _0x1eccfc(!![]);
                let _0x428c93 = location[_0x4b7c40(0x384)][_0x4b7c40(0x29f)]('?')['at'](0x0)[_0x4b7c40(0x29f)]('instagram.com/reels/')['at'](-0x1)['replaceAll']('/', ''), _0xf149ee = await _0x303523(_0x428c93), _0x1bf6af = _0xf149ee[_0x4b7c40(0x3cc)], _0x2dc98b = new Date()[_0x4b7c40(0x20d)]();
                _0x573435[_0x4b7c40(0x26f)] && (_0xf149ee[_0x4b7c40(0x425)] === _0x4b7c40(0x3f2) ? _0x2dc98b = _0x1bf6af[_0x4b7c40(0x1df)][_0x4b7c40(0x261)] : _0x2dc98b = _0x1bf6af[_0x4b7c40(0x252)]);
                if (_0xf149ee[_0x4b7c40(0x425)] === 'query_hash') {
                    if (_0x118685 && _0x1bf6af['shortcode_media'][_0x4b7c40(0x40a)]) {
                        if (_0x5bcdd8)
                            _0x435363(_0x1bf6af[_0x4b7c40(0x1df)][_0x4b7c40(0x22e)]);
                        else {
                            let _0x24203c = _0x4b7c40(0x349);
                            _0x70c382(_0x1bf6af[_0x4b7c40(0x1df)][_0x4b7c40(0x22e)], _0x1bf6af[_0x4b7c40(0x1df)]['owner'][_0x4b7c40(0x3f8)], _0x4b7c40(0x369), _0x2dc98b, _0x24203c, _0x428c93);
                        }
                    } else {
                        if (_0x5bcdd8)
                            _0x435363(_0x1bf6af[_0x4b7c40(0x1df)][_0x4b7c40(0x2e1)]['at'](-0x1)['src']);
                        else {
                            let _0x24ff76 = _0x4b7c40(0x258);
                            _0x70c382(_0x1bf6af[_0x4b7c40(0x1df)]['display_resources']['at'](-0x1)['src'], _0x1bf6af['shortcode_media'][_0x4b7c40(0x2d5)]['username'], _0x4b7c40(0x369), _0x2dc98b, _0x24ff76, _0x428c93);
                        }
                    }
                } else {
                    if (_0x118685 && _0x1bf6af[_0x4b7c40(0x280)] != null) {
                        if (_0x5bcdd8)
                            _0x435363(_0x1bf6af[_0x4b7c40(0x280)][0x0][_0x4b7c40(0x41d)]);
                        else {
                            let _0x3c6b75 = _0x4b7c40(0x349);
                            _0x70c382(_0x1bf6af[_0x4b7c40(0x280)][0x0]['url'], _0x1bf6af[_0x4b7c40(0x2d5)][_0x4b7c40(0x3f8)], _0x4b7c40(0x369), _0x2dc98b, _0x3c6b75, _0x428c93);
                        }
                    } else {
                        if (_0x5bcdd8)
                            _0x435363(_0x1bf6af['image_versions2'][_0x4b7c40(0x27b)][0x0][_0x4b7c40(0x41d)]);
                        else {
                            let _0x1f57b5 = 'jpg';
                            _0x70c382(_0x1bf6af['image_versions2'][_0x4b7c40(0x27b)][0x0][_0x4b7c40(0x41d)], _0x1bf6af[_0x4b7c40(0x2d5)]['username'], 'reels', _0x2dc98b, _0x1f57b5, _0x428c93);
                        }
                    }
                }
                _0x1eccfc(![]);
            } else
                var _0x83cb9c = setInterval(() => {
                    const _0x47ddd9 = _0x4b7c40;
                    _0x48a1e0('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')[_0x47ddd9(0x312)] > 0x0 && (clearInterval(_0x83cb9c), _0x573435[_0x47ddd9(0x1e2)] && (_0x48a1e0(_0x47ddd9(0x327))['remove'](), _0x48a1e0(_0x47ddd9(0x39c))[_0x47ddd9(0x232)](_0x47ddd9(0x28f)), _0x48a1e0('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x47ddd9(0x232)](_0x47ddd9(0x423)), _0x48a1e0(_0x47ddd9(0x222))[_0x47ddd9(0x232)]('<div\x20class=\x22button-down\x22><div></div></div>'), _0x48a1e0(_0x47ddd9(0x3f9))['on']('click', function () {
                        const _0x18bf39 = _0x47ddd9;
                        _0x48a1e0(_0x18bf39(0x202))[0x0][_0x18bf39(0x255)]({
                            'top': -0x1e,
                            'behavior': _0x18bf39(0x2ab)
                        });
                    }), _0x48a1e0(_0x47ddd9(0x24c))['on'](_0x47ddd9(0x3b1), function () {
                        const _0x334723 = _0x47ddd9;
                        _0x48a1e0(_0x334723(0x202))[0x0][_0x334723(0x255)]({
                            'top': 0x1e,
                            'behavior': _0x334723(0x2ab)
                        });
                    })), _0x48a1e0('section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]')['children'](_0x47ddd9(0x381))['each'](function () {
                        const _0x299bc1 = _0x47ddd9;
                        if (_0x48a1e0(this)[_0x299bc1(0x3a0)]()['length'] > 0x0) {
                            if (!_0x48a1e0(this)[_0x299bc1(0x3a0)]()[_0x299bc1(0x3ef)](_0x299bc1(0x3f1))['length']) {
                                var _0x202f86 = _0x48a1e0(this);
                                _0x48a1e0(this)[_0x299bc1(0x3a0)]()[_0x299bc1(0x29c)](_0x299bc1(0x224), _0x299bc1(0x420)), _0x48a1e0(this)[_0x299bc1(0x3a0)]()[_0x299bc1(0x232)](_0x299bc1(0x364) + _0x28f55f('DW') + '\x22\x20class=\x22IG_REELS\x22>' + _0x48448f[_0x299bc1(0x25e)] + _0x299bc1(0x238)), _0x48a1e0(this)[_0x299bc1(0x3a0)]()[_0x299bc1(0x232)](_0x299bc1(0x24e) + _0x28f55f(_0x299bc1(0x34d)) + _0x299bc1(0x319) + _0x48448f[_0x299bc1(0x34d)] + '</div>'), _0x48a1e0(this)[_0x299bc1(0x3a0)]()[_0x299bc1(0x232)](_0x299bc1(0x3a9) + _0x28f55f(_0x299bc1(0x300)) + '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>' + _0x48448f[_0x299bc1(0x3c4)] + '</div>');
                                _0x573435[_0x299bc1(0x30c)] && _0x48a1e0(this)[_0x299bc1(0x3ef)](_0x299bc1(0x3dd))[_0x299bc1(0x359)](function () {
                                    const _0x396364 = _0x299bc1;
                                    _0x48a1e0(this)['on'](_0x396364(0x1eb), function () {
                                        const _0x4fa270 = _0x396364;
                                        if (!_0x48a1e0(this)[_0x4fa270(0x3cc)](_0x4fa270(0x203))) {
                                            let _0x30b85d = _0x48a1e0(this)[_0x4fa270(0x27e)]()['find'](_0x4fa270(0x40b))[_0x4fa270(0x2e6)]('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x30b85d['length'] > 0x0 ? (_0x48a1e0(this)[_0x4fa270(0x337)](_0x4fa270(0x25f), !![]), _0x30b85d[_0x4fa270(0x3b1)](), _0x1de3c6(_0x4fa270(0x31d))) : (_0x48a1e0(this)[_0x4fa270(0x337)]('data-loop', !![]), _0x48a1e0(this)[_0x4fa270(0x361)]()[_0x4fa270(0x3ef)](_0x4fa270(0x3c1))[_0x4fa270(0x2fb)]('style'), this[_0x4fa270(0x266)](), _0x1de3c6('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()'));
                                        }
                                    });
                                });
                                _0x573435[_0x299bc1(0x1f5)] && _0x48a1e0(this)[_0x299bc1(0x3ef)](_0x299bc1(0x3dd))[_0x299bc1(0x359)](function () {
                                    const _0xbc602f = _0x299bc1;
                                    _0x48a1e0(this)['on'](_0xbc602f(0x1e4), function () {
                                        const _0x3f3778 = _0xbc602f;
                                        !_0x48a1e0(this)[_0x3f3778(0x3cc)](_0x3f3778(0x205)) && (_0x48a1e0(this)['attr'](_0x3f3778(0x28e), !![]), this['volume'] = _0x3402f9, _0x1de3c6(_0x3f3778(0x3b0)));
                                    });
                                });
                                _0x573435[_0x299bc1(0x40e)] && _0x48a1e0(this)['find'](_0x299bc1(0x3dd))[_0x299bc1(0x359)](function () {
                                    const _0x31bd04 = _0x299bc1;
                                    if (!_0x48a1e0(this)[_0x31bd04(0x3cc)](_0x31bd04(0x22a))) {
                                        let _0x4d5dca = _0x48a1e0(this);
                                        _0x1de3c6(_0x31bd04(0x1ea)), this['volume'] = _0x3402f9, _0x48a1e0(this)['on'](_0x31bd04(0x3d9), function () {
                                            this['volume'] = _0x3402f9;
                                        }), _0x48a1e0(this)['on'](_0x31bd04(0x328), function (_0x2e80eb) {
                                            const _0x2e5262 = _0x31bd04;
                                            _0x2e80eb[_0x2e5262(0x217)](), _0x4d5dca[_0x2e5262(0x29c)](_0x2e5262(0x2b8), '-1'), _0x4d5dca[_0x2e5262(0x2fb)](_0x2e5262(0x22a));
                                        }), _0x48a1e0(this)[_0x31bd04(0x361)]()[_0x31bd04(0x3ef)](_0x31bd04(0x2ae))[_0x31bd04(0x1fe)](function () {
                                            const _0xba2a3e = _0x31bd04;
                                            return _0x48a1e0(this)[_0xba2a3e(0x361)](_0xba2a3e(0x3be))[_0xba2a3e(0x312)] > 0x0 && _0x48a1e0(this)[_0xba2a3e(0x29c)](_0xba2a3e(0x20e)) === _0xba2a3e(0x336) && _0x48a1e0(this)['attr']('style') != null;
                                        })[_0x31bd04(0x251)]()['on']('contextmenu', function (_0x1bdb7c) {
                                            const _0x499370 = _0x31bd04;
                                            _0x1bdb7c[_0x499370(0x217)](), _0x4d5dca[_0x499370(0x29c)](_0x499370(0x2b8), '2'), _0x4d5dca['attr'](_0x499370(0x22a), !![]);
                                        }), _0x48a1e0(this)['on']('volumechange', function () {
                                            const _0x3015fb = _0x31bd04;
                                            let _0x487084 = _0x48a1e0(this)['parent']()['find']('video\x20+\x20div\x20>\x20div')[_0x3015fb(0x3ef)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x3015fb(0x1fe)](function (_0x1c1f24) {
                                                const _0x3cc2ab = _0x3015fb;
                                                return _0x48a1e0(this)[_0x3cc2ab(0x3e6)]() <= 0x40 && _0x48a1e0(this)[_0x3cc2ab(0x223)]() <= 0x40 && _0x48a1e0(this)[_0x3cc2ab(0x3ef)](_0x3cc2ab(0x275))['length'] > 0x0;
                                            });
                                            var _0x2ce074 = _0x487084[_0x3015fb(0x3ef)](_0x3015fb(0x377))[_0x3015fb(0x312)] === 0x0;
                                            this[_0x3015fb(0x3a2)] != _0x2ce074 && (this[_0x3015fb(0x422)] = _0x3402f9, _0x487084?.[_0x3015fb(0x3b1)]()), _0x48a1e0(this)['attr'](_0x3015fb(0x2dc)) && (_0x3402f9 = this['volume'], GM_setValue(_0x3015fb(0x408), this[_0x3015fb(0x422)])), this['volume'] == _0x3402f9 && _0x48a1e0(this)[_0x3015fb(0x337)](_0x3015fb(0x2dc), !![]);
                                        }), _0x48a1e0(this)[_0x31bd04(0x29c)](_0x31bd04(0x224), _0x31bd04(0x241)), _0x48a1e0(this)[_0x31bd04(0x29c)](_0x31bd04(0x2b8), '2'), _0x48a1e0(this)[_0x31bd04(0x337)](_0x31bd04(0x32a), !![]), _0x48a1e0(this)[_0x31bd04(0x337)](_0x31bd04(0x22a), !![]);
                                    }
                                });
                                var _0x41a58a = _0x48a1e0(this)[_0x299bc1(0x3ef)]('div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div')['first']();
                                _0x41a58a[_0x299bc1(0x232)](_0x299bc1(0x2ce)), _0x41a58a[_0x299bc1(0x3ef)](_0x299bc1(0x307))[_0x299bc1(0x232)](_0x299bc1(0x24d) + _0x3402f9 + _0x299bc1(0x1e6)), _0x41a58a[_0x299bc1(0x3ef)]('div.volume_slider\x20input')[_0x299bc1(0x337)](_0x299bc1(0x1f7), _0x299bc1(0x32d) + (_0x3402f9 * 0x64 + '%')), _0x41a58a['find'](_0x299bc1(0x2ef))['on'](_0x299bc1(0x276), function () {
                                    const _0x2e7a74 = _0x299bc1;
                                    var _0x16f4d1 = _0x48a1e0(this)[_0x2e7a74(0x269)]() * 0x64 + '%';
                                    _0x3402f9 = _0x48a1e0(this)[_0x2e7a74(0x269)](), GM_setValue(_0x2e7a74(0x408), _0x48a1e0(this)[_0x2e7a74(0x269)]()), _0x48a1e0(this)['attr'](_0x2e7a74(0x1f7), _0x2e7a74(0x32d) + _0x16f4d1), _0x202f86[_0x2e7a74(0x3ef)](_0x2e7a74(0x3dd))[_0x2e7a74(0x359)](function () {
                                        const _0x279e85 = _0x2e7a74;
                                        _0x1de3c6(_0x279e85(0x3b4)), this[_0x279e85(0x422)] = _0x3402f9;
                                    });
                                }), _0x41a58a['find'](_0x299bc1(0x2ef))['on']('mouseenter', function () {
                                    const _0x595296 = _0x299bc1;
                                    var _0x4cfbcb = _0x3402f9 * 0x64 + '%';
                                    _0x48a1e0(this)[_0x595296(0x337)](_0x595296(0x1f7), _0x595296(0x32d) + _0x4cfbcb), _0x48a1e0(this)[_0x595296(0x269)](_0x3402f9), _0x202f86[_0x595296(0x3ef)](_0x595296(0x3dd))[_0x595296(0x359)](function () {
                                        const _0x1a75d2 = _0x595296;
                                        _0x1de3c6(_0x1a75d2(0x3b4)), this[_0x1a75d2(0x422)] = _0x3402f9;
                                    });
                                }), _0x41a58a[_0x299bc1(0x3ef)](_0x299bc1(0x307))['on'](_0x299bc1(0x3b1), function (_0x2df9e7) {
                                    const _0x4a2c91 = _0x299bc1;
                                    _0x2df9e7[_0x4a2c91(0x35d)](), _0x2df9e7[_0x4a2c91(0x217)]();
                                });
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x56ed73(_0x2503bc) {
            return new Promise((_0x1d522d, _0x430aed) => {
                const _0x35c6ce = a0_0x2ca3;
                let _0x4894ba = _0x35c6ce(0x393) + _0x2503bc + _0x35c6ce(0x3d2);
                GM_xmlhttpRequest({
                    'method': _0x35c6ce(0x308),
                    'url': _0x4894ba,
                    'onload': function (_0x2695d4) {
                        const _0x2bd804 = _0x35c6ce;
                        try {
                            let _0xe31510 = JSON[_0x2bd804(0x259)](_0x2695d4[_0x2bd804(0x2f6)]);
                            _0x1d522d(_0xe31510);
                        } catch (_0x18b42b) {
                            _0x1de3c6(_0x2bd804(0x3fc), _0x2bd804(0x2bf), _0x18b42b['message']), _0x430aed(_0x18b42b);
                        }
                    },
                    'onerror': function (_0x32dca1) {
                        _0x1de3c6('getHighlightStories()', 'reject', _0x32dca1), _0x430aed(_0x32dca1);
                    }
                });
            });
        }
        function _0x305281(_0x40f2b7) {
            return new Promise((_0xd065a4, _0x1af104) => {
                let _0x526693 = 'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22' + _0x40f2b7 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x526693,
                    'onload': function (_0x4ef5cd) {
                        const _0x475013 = a0_0x2ca3;
                        try {
                            let _0x329d79 = JSON[_0x475013(0x259)](_0x4ef5cd['response']);
                            _0x1de3c6(_0x475013(0x2bc), _0x329d79), _0xd065a4(_0x329d79);
                        } catch (_0x5e5e2c) {
                            _0x1de3c6(_0x475013(0x2bc), 'reject', _0x5e5e2c[_0x475013(0x3b2)]), _0x1af104(_0x5e5e2c);
                        }
                    },
                    'onerror': function (_0x16464d) {
                        const _0x595477 = a0_0x2ca3;
                        _0x1de3c6(_0x595477(0x2bc), _0x595477(0x2bf), _0x16464d), _0x1af104(_0x16464d);
                    }
                });
            });
        }
        function _0x417033(_0x26bc3d) {
            return new Promise((_0x1e759f, _0x4c61e3) => {
                const _0x33b282 = a0_0x2ca3;
                let _0x3d35d3 = _0x33b282(0x313) + _0x26bc3d;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3d35d3,
                    'onload': function (_0x2d2f70) {
                        const _0x27b187 = _0x33b282;
                        let _0x1112df = JSON['parse'](_0x2d2f70[_0x27b187(0x2f6)]), _0x4ebe8e = null;
                        _0x1112df[_0x27b187(0x1e1)][_0x27b187(0x21d)](_0x1b84ff => {
                            const _0x787554 = _0x27b187;
                            _0x1b84ff[_0x787554(0x1f9)][_0x787554(0x3f8)]?.[_0x787554(0x3c9)]() === _0x26bc3d?.[_0x787554(0x3c9)]() && (_0x4ebe8e = _0x1b84ff);
                        }), _0x4ebe8e != null ? (_0x1de3c6(_0x27b187(0x37f), _0x4ebe8e), _0x1e759f(_0x4ebe8e)) : _0xd2bbf3(_0x26bc3d)[_0x27b187(0x253)](_0x52f453 => {
                            _0x1e759f(_0x52f453);
                        })[_0x27b187(0x357)](_0x1b9d77 => {
                            const _0x146787 = _0x27b187;
                            alert(_0x146787(0x323));
                        });
                    },
                    'onerror': function (_0x28a1be) {
                        const _0xcf5b65 = _0x33b282;
                        _0x1de3c6(_0xcf5b65(0x37f), 'reject', _0x28a1be), _0x4c61e3(_0x28a1be);
                    }
                });
            });
        }
        function _0xd2bbf3(_0x35bb3c) {
            return new Promise((_0x1806e1, _0x5f3070) => {
                const _0x2c750b = a0_0x2ca3;
                let _0x1fc96a = _0x2c750b(0x33f) + _0x35bb3c;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x1fc96a,
                    'headers': { 'X-IG-App-ID': _0x3e58bf() },
                    'onload': function (_0x4f1dd9) {
                        const _0x3a2535 = _0x2c750b;
                        try {
                            let _0x50cb02 = JSON[_0x3a2535(0x259)](_0x4f1dd9['response']), _0x292dbc = _0x50cb02?.[_0x3a2535(0x3cc)]?.[_0x3a2535(0x1f9)];
                            if (_0x292dbc != null) {
                                let _0x4658ea = _0x50cb02?.['data'];
                                _0x4658ea[_0x3a2535(0x1f9)]['pk'] = _0x4658ea[_0x3a2535(0x1f9)]['id'], _0x1de3c6('getUserIdWithAgent()', _0x50cb02), _0x1806e1(_0x4658ea);
                            } else
                                _0x1de3c6(_0x3a2535(0x310), _0x3a2535(0x2bf), 'undefined'), _0x5f3070(_0x3a2535(0x2c9));
                        } catch (_0x3466f2) {
                            _0x1de3c6(_0x3a2535(0x310), 'reject', _0x3466f2[_0x3a2535(0x3b2)]), _0x5f3070(_0x3466f2);
                        }
                    },
                    'onerror': function (_0x4c786e) {
                        const _0x50c6eb = _0x2c750b;
                        _0x1de3c6(_0x50c6eb(0x310), 'reject', _0x4c786e), _0x5f3070(_0x4c786e);
                    }
                });
            });
        }
        function _0xc6be67(_0x2201ff) {
            return new Promise((_0x30721d, _0x5f7e72) => {
                const _0x4101cb = a0_0x2ca3;
                let _0x57e5f3 = _0x4101cb(0x348) + _0x2201ff + _0x4101cb(0x3a1);
                GM_xmlhttpRequest({
                    'method': _0x4101cb(0x308),
                    'url': _0x57e5f3,
                    'headers': { 'User-Agent': _0x4101cb(0x28a) },
                    'onload': function (_0x558d34) {
                        const _0x341227 = _0x4101cb;
                        try {
                            let _0x36ad1d = JSON['parse'](_0x558d34[_0x341227(0x2f6)]);
                            _0x36ad1d[_0x341227(0x303)] !== 'ok' ? (_0x1de3c6('getUserHighSizeProfile()', 'reject', _0x36ad1d), _0x5f7e72('faild')) : (_0x1de3c6(_0x341227(0x278), _0x36ad1d), _0x30721d(_0x36ad1d['user']['hd_profile_pic_url_info']?.['url']));
                        } catch (_0x534891) {
                            _0x1de3c6(_0x341227(0x278), 'reject', _0x534891), _0x5f7e72(_0x534891);
                        }
                    },
                    'onerror': function (_0x1c6e2d) {
                        const _0x97164e = _0x4101cb;
                        _0x1de3c6(_0x97164e(0x278), _0x97164e(0x2bf), _0x1c6e2d), _0x5f7e72(_0x1c6e2d);
                    }
                });
            });
        }
        function _0x411fbb(_0x2066c6) {
            return new Promise((_0x4f2360, _0xd62897) => {
                const _0x3f267b = a0_0x2ca3;
                if (!_0x2066c6)
                    _0xd62897(_0x3f267b(0x2cd));
                let _0x3138ae = _0x2066c6, _0x389080 = _0x3f267b(0x42a) + _0x3138ae + _0x3f267b(0x23c);
                GM_xmlhttpRequest({
                    'method': _0x3f267b(0x308),
                    'url': _0x389080,
                    'onload': function (_0x1dfb1e) {
                        const _0x2bfe90 = _0x3f267b;
                        try {
                            let _0x311a82 = JSON[_0x2bfe90(0x259)](_0x1dfb1e['response']);
                            _0x1de3c6(_0x2bfe90(0x41e), _0x311a82), _0x4f2360(_0x311a82[_0x2bfe90(0x3cc)][_0x2bfe90(0x1df)]['owner'][_0x2bfe90(0x3f8)]);
                        } catch (_0x346b20) {
                            _0x1de3c6(_0x2bfe90(0x41e), _0x2bfe90(0x2bf), _0x346b20['message']), _0xd62897(_0x346b20);
                        }
                    },
                    'onerror': function (_0x1b1ca9) {
                        const _0x42b02e = _0x3f267b;
                        _0x1de3c6(_0x42b02e(0x41e), _0x42b02e(0x2bf), _0x1b1ca9), _0xd62897(_0x1b1ca9);
                    }
                });
            });
        }
        function _0x303523(_0x21f89b) {
            return new Promise((_0x22a2c2, _0x186408) => {
                const _0x2a3fcc = a0_0x2ca3;
                if (!_0x21f89b)
                    _0x186408(_0x2a3fcc(0x2cd));
                let _0x37a3af = _0x21f89b, _0x3eca1b = _0x2a3fcc(0x42a) + _0x37a3af + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x2a3fcc(0x308),
                    'url': _0x3eca1b,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x453de5) {
                        const _0x3a174e = _0x2a3fcc;
                        try {
                            let _0x4bd01f = JSON[_0x3a174e(0x259)](_0x453de5[_0x3a174e(0x2f6)]);
                            _0x1de3c6(_0x4bd01f), _0x4bd01f[_0x3a174e(0x303)] === 'fail' ? (_0x1de3c6('Request\x20with:', 'getBlobMediaWithQuery()', _0x37a3af), _0x513a14(_0x37a3af)['then'](_0x4eabc5 => {
                                const _0x15dd9b = _0x3a174e;
                                _0x22a2c2({
                                    'type': 'query_id',
                                    'data': _0x4eabc5['xdt_api__v1__media__shortcode__web_info'][_0x15dd9b(0x41c)][0x0]
                                });
                            })[_0x3a174e(0x357)](_0xfc7a6f => {
                                _0x186408(_0xfc7a6f);
                            })) : _0x22a2c2({
                                'type': _0x3a174e(0x3f2),
                                'data': _0x4bd01f['data']
                            });
                        } catch (_0x26c03c) {
                            _0x1de3c6(_0x3a174e(0x2c6), _0x3a174e(0x2bf), _0x26c03c[_0x3a174e(0x3b2)]), _0x186408(_0x26c03c);
                        }
                    },
                    'onerror': function (_0x5506c4) {
                        const _0x3fbd27 = _0x2a3fcc;
                        _0x1de3c6(_0x3fbd27(0x2c6), _0x3fbd27(0x2bf), _0x5506c4), _0x186408(_0x5506c4);
                    }
                });
            });
        }
        function _0x513a14(_0x59d707) {
            return new Promise((_0x5ce67d, _0x181440) => {
                const _0x21c096 = a0_0x2ca3;
                if (!_0x59d707)
                    _0x181440(_0x21c096(0x2cd));
                let _0x52ead5 = _0x59d707, _0x2dec09 = _0x21c096(0x3ce) + _0x52ead5 + '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}';
                GM_xmlhttpRequest({
                    'method': _0x21c096(0x308),
                    'url': _0x2dec09,
                    'headers': {
                        'User-Agent': _0x21c096(0x28a),
                        'X-IG-App-ID': _0x3e58bf()
                    },
                    'onload': function (_0x43d76a) {
                        const _0x4648b2 = _0x21c096;
                        try {
                            let _0x1d0817 = JSON['parse'](_0x43d76a[_0x4648b2(0x2f6)]);
                            _0x1de3c6(_0x1d0817), _0x1d0817[_0x4648b2(0x303)] === _0x4648b2(0x341) ? (alert(_0x4648b2(0x2a0) + _0x1d0817['message'] + ':\x20' + _0x1d0817[_0x4648b2(0x1fb)]), _0x1de3c6(_0x4648b2(0x34c) + _0x1d0817[_0x4648b2(0x3b2)] + ':\x20' + _0x1d0817[_0x4648b2(0x1fb)]), _0x181440(_0x43d76a)) : (_0x1de3c6(_0x4648b2(0x3e8), _0x1d0817[_0x4648b2(0x3cc)]), _0x5ce67d(_0x1d0817[_0x4648b2(0x3cc)]));
                        } catch (_0x3ae304) {
                            _0x1de3c6(_0x4648b2(0x3e8), _0x4648b2(0x2bf), _0x3ae304[_0x4648b2(0x3b2)]), _0x181440(_0x3ae304);
                        }
                    },
                    'onerror': function (_0xc2dcf7) {
                        const _0x1644fc = _0x21c096;
                        _0x1de3c6(_0x1644fc(0x3e8), 'reject', _0xc2dcf7), _0x181440(_0xc2dcf7);
                    }
                });
            });
        }
        function _0xc4ee75(_0x1d7efc, _0x5cd88e) {
            const _0x232395 = _0x4782ca;
            _0x5cd88e === !![] && (_0x1de3c6(_0x232395(0x2a8), _0x232395(0x3ff)), _0x48a1e0(_0x232395(0x3a8))['filter'](function () {
                const _0x159688 = _0x232395;
                return _0x48a1e0(this)['find'](_0x159688(0x256))[_0x159688(0x312)] === 0x0;
            })['removeAttr'](_0x232395(0x2e5)));
            if (_0x1d7efc == ![]) {
                const _0x5dd8f8 = 0x64;
                let _0x2bd1f6 = 0x0;
                var _0x34da98 = setInterval(() => {
                    const _0x3f677c = _0x232395;
                    (_0x2bd1f6 > _0x5dd8f8 || _0x48a1e0(_0x3f677c(0x35a))[_0x3f677c(0x312)] > 0x0) && (clearInterval(_0x34da98), _0x2bd1f6 > _0x5dd8f8 && console[_0x3f677c(0x2ee)](_0x3f677c(0x27a), _0x3f677c(0x402))), _0x1de3c6(_0x3f677c(0x27a), _0x3f677c(0x20a)), _0x3fee11(), _0x2bd1f6++;
                }, 0x32);
            } else
                _0x3fee11();
        }
        function _0x3e58bf() {
            const _0x18a8a9 = _0x4782ca;
            let _0x4b136d = null;
            return _0x48a1e0(_0x18a8a9(0x270))[_0x18a8a9(0x359)](function () {
                const _0x43cf1e = _0x18a8a9, _0x2e937c = /"APP_ID":"([0-9]+)"/ig, _0x1ae6af = _0x48a1e0(this)['text']()[_0x43cf1e(0x3f5)](_0x2e937c);
                _0x1ae6af != null && _0x4b136d == null && (_0x4b136d = [..._0x48a1e0(this)['text']()[_0x43cf1e(0x302)](_0x2e937c)]);
            }), _0x4b136d ? _0x4b136d['at'](0x0)['at'](-0x1) : null;
        }
        function _0x1eccfc(_0x458fd2) {
            const _0x2fba72 = _0x4782ca;
            _0x458fd2 ? (_0x48a1e0(_0x2fba72(0x3c3))[_0x2fba72(0x1f4)](_0x2fba72(0x3e5)), _0x48a1e0(_0x2fba72(0x3c3))[_0x2fba72(0x29c)](_0x2fba72(0x2b8), '20000')) : (_0x48a1e0(_0x2fba72(0x3c3))['addClass']('x1s85apg'), _0x48a1e0(_0x2fba72(0x3c3))[_0x2fba72(0x29c)](_0x2fba72(0x2b8), ''));
        }
        function _0x2f1f8a(_0x224f11) {
            return new Promise((_0x1aad6e, _0x5e7f86) => {
                const _0x456472 = a0_0x2ca3;
                let _0x2e4c3f = _0x456472(0x38a) + _0x224f11 + _0x456472(0x3a1);
                if (_0x224f11 == null) {
                    alert(_0x456472(0x41b)), _0x1de3c6(_0x456472(0x288), _0x456472(0x2bf), 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.'), _0x1eccfc(![]), _0x5e7f86(-0x1);
                    return;
                }
                if (_0x3e58bf() == null) {
                    alert(_0x456472(0x2da)), _0x1de3c6(_0x456472(0x288), _0x456472(0x2bf), _0x456472(0x2da)), _0x1eccfc(![]), _0x5e7f86(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x456472(0x308),
                    'url': _0x2e4c3f,
                    'headers': {
                        'User-Agent': window['navigator']['userAgent'],
                        'Accept': _0x456472(0x33e),
                        'X-IG-App-ID': _0x3e58bf()
                    },
                    'onload': function (_0x231647) {
                        const _0x13d53d = _0x456472;
                        if (_0x231647[_0x13d53d(0x2f9)] == _0x2e4c3f) {
                            let _0x5e0194 = JSON[_0x13d53d(0x259)](_0x231647['response']);
                            _0x1de3c6('getMediaInfo()', _0x5e0194), _0x1aad6e(_0x5e0194);
                        } else {
                            let _0x4994e1 = new URL(_0x231647[_0x13d53d(0x2f9)]);
                            _0x4994e1[_0x13d53d(0x3db)][_0x13d53d(0x421)](_0x13d53d(0x2b1)) ? (_0x1de3c6(_0x13d53d(0x288), _0x13d53d(0x2bf), _0x13d53d(0x2cb)), alert(_0x13d53d(0x2cb))) : (_0x1de3c6(_0x13d53d(0x288), _0x13d53d(0x2bf), _0x13d53d(0x3b8) + _0x231647['finalUrl'] + '\x22'), alert(_0x13d53d(0x3b8) + _0x231647[_0x13d53d(0x2f9)] + '\x22')), _0x1eccfc(![]), _0x5e7f86(-0x1);
                        }
                    },
                    'onerror': function (_0x56bed3) {
                        const _0x235817 = _0x456472;
                        _0x1de3c6(_0x235817(0x288), _0x235817(0x2bf), _0x56bed3), _0x1aad6e(_0x56bed3);
                    }
                });
            });
        }
        function _0x231485(_0xd1db84) {
            const _0x476766 = _0x4782ca;
            var _0x3e8190 = 0x0, _0x56f7f1 = _0xd1db84[_0x476766(0x3ef)](_0x476766(0x350));
            return (_0x56f7f1 == null || !_0x56f7f1[_0x476766(0x330)]('_acnb')) && (_0x56f7f1 = _0xd1db84[_0x476766(0x3ef)](_0x476766(0x372))['eq'](0x0)['children'](_0x476766(0x381))), _0x56f7f1[_0x476766(0x1fe)](_0x476766(0x32e))[_0x476766(0x359)](function (_0x7f08cb) {
                const _0xdd7ca1 = _0x476766;
                _0x48a1e0(this)[_0xdd7ca1(0x330)](_0xdd7ca1(0x30e)) && (_0x3e8190 = _0x7f08cb);
            }), _0x3e8190;
        }
        function _0x3ae31a(_0x298a1b) {
            const _0x4b0977 = _0x4782ca;
            _0x573435[_0x4b0977(0x30c)] && _0x298a1b[_0x4b0977(0x3ef)]('video')[_0x4b0977(0x359)](function () {
                const _0x2de653 = _0x4b0977;
                _0x48a1e0(this)['on'](_0x2de653(0x1eb), function () {
                    const _0x4daee2 = _0x2de653;
                    !_0x48a1e0(this)[_0x4daee2(0x3cc)]('loop') && (_0x48a1e0(this)[_0x4daee2(0x337)](_0x4daee2(0x25f), !![]), this[_0x4daee2(0x266)](), _0x1de3c6('(post)\x20Added\x20video\x20event\x20listener\x20#loop'));
                });
            });
            _0x573435['MODIFY_VIDEO_VOLUME'] && _0x298a1b['find'](_0x4b0977(0x3dd))[_0x4b0977(0x359)](function () {
                _0x48a1e0(this)['on']('play\x20playing', function () {
                    const _0x3b45c8 = a0_0x2ca3;
                    !_0x48a1e0(this)[_0x3b45c8(0x3cc)](_0x3b45c8(0x205)) && (_0x48a1e0(this)[_0x3b45c8(0x337)](_0x3b45c8(0x28e), !![]), this['volume'] = _0x3402f9, _0x1de3c6(_0x3b45c8(0x2af)));
                });
            });
            _0x573435[_0x4b0977(0x40e)] && _0x298a1b[_0x4b0977(0x3ef)](_0x4b0977(0x3dd))['each'](function () {
                const _0x10d6ae = _0x4b0977;
                !_0x48a1e0(this)[_0x10d6ae(0x3cc)](_0x10d6ae(0x22a)) && (_0x1de3c6(_0x10d6ae(0x299)), this[_0x10d6ae(0x422)] = _0x3402f9, _0x48a1e0(this)['on']('loadstart', function () {
                    const _0xe0de5e = _0x10d6ae;
                    this[_0xe0de5e(0x422)] = _0x3402f9;
                }), _0x48a1e0(this)['on'](_0x10d6ae(0x38c), function () {
                    const _0x14476e = _0x10d6ae;
                    let _0x29966c = _0x48a1e0(this)[_0x14476e(0x361)]()['find'](_0x14476e(0x401))[_0x14476e(0x3ef)](_0x14476e(0x3f7))[_0x14476e(0x1fe)](function (_0x1bed19) {
                        const _0x378f02 = _0x14476e;
                        return _0x48a1e0(this)['width']() <= 0x40 && _0x48a1e0(this)[_0x378f02(0x223)]() <= 0x40 && _0x48a1e0(this)[_0x378f02(0x3ef)](_0x378f02(0x275))['length'] > 0x0;
                    });
                    var _0x7f63f9 = _0x29966c[_0x14476e(0x3ef)]('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0x14476e(0x312)] === 0x0;
                    this[_0x14476e(0x3a2)] != _0x7f63f9 && (this[_0x14476e(0x422)] = _0x3402f9, _0x29966c?.[_0x14476e(0x3b1)]()), _0x48a1e0(this)['attr'](_0x14476e(0x2dc)) && (_0x3402f9 = this[_0x14476e(0x422)], GM_setValue(_0x14476e(0x408), this['volume'])), this[_0x14476e(0x422)] == _0x3402f9 && _0x48a1e0(this)[_0x14476e(0x337)](_0x14476e(0x2dc), !![]);
                }), _0x48a1e0(this)[_0x10d6ae(0x29c)](_0x10d6ae(0x224), 'absolute'), _0x48a1e0(this)['css'](_0x10d6ae(0x2b8), '2'), _0x48a1e0(this)[_0x10d6ae(0x337)](_0x10d6ae(0x32a), !![]), _0x48a1e0(this)[_0x10d6ae(0x337)]('controls', !![]));
            });
            var _0x231ae7 = _0x298a1b[_0x4b0977(0x3ef)](_0x4b0977(0x401))['first']();
            _0x231ae7[_0x4b0977(0x232)](_0x4b0977(0x21f)), _0x231ae7[_0x4b0977(0x3ef)](_0x4b0977(0x307))[_0x4b0977(0x232)]('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x3402f9 + _0x4b0977(0x1e6)), _0x231ae7['find'](_0x4b0977(0x2ef))[_0x4b0977(0x337)]('style', _0x4b0977(0x32d) + (_0x3402f9 * 0x64 + '%')), _0x231ae7[_0x4b0977(0x3ef)](_0x4b0977(0x2ef))['on']('input', function () {
                const _0x2e7be4 = _0x4b0977;
                var _0x3dc374 = _0x48a1e0(this)[_0x2e7be4(0x269)]() * 0x64 + '%';
                _0x3402f9 = _0x48a1e0(this)['val'](), GM_setValue(_0x2e7be4(0x408), _0x48a1e0(this)[_0x2e7be4(0x269)]()), _0x48a1e0(this)['attr']('style', _0x2e7be4(0x32d) + _0x3dc374), _0x298a1b[_0x2e7be4(0x3ef)]('video')['each'](function () {
                    const _0x214fe3 = _0x2e7be4;
                    _0x1de3c6(_0x214fe3(0x3c8)), this[_0x214fe3(0x422)] = _0x3402f9;
                });
            }), _0x231ae7[_0x4b0977(0x3ef)](_0x4b0977(0x2ef))['on']('mouseenter', function () {
                const _0x565492 = _0x4b0977;
                var _0x461fd5 = _0x3402f9 * 0x64 + '%';
                _0x48a1e0(this)[_0x565492(0x337)]('style', _0x565492(0x32d) + _0x461fd5), _0x48a1e0(this)['val'](_0x3402f9), _0x298a1b['find'](_0x565492(0x3dd))[_0x565492(0x359)](function () {
                    _0x1de3c6('(post)\x20video\x20volume\x20changed\x20#slider'), this['volume'] = _0x3402f9;
                });
            }), _0x231ae7[_0x4b0977(0x3ef)](_0x4b0977(0x307))['on'](_0x4b0977(0x3b1), function (_0x5bad6c) {
                const _0x3a7699 = _0x4b0977;
                _0x5bad6c['stopPropagation'](), _0x5bad6c[_0x3a7699(0x217)]();
            });
        }
        ;
        function _0x3fee11() {
            const _0x2d744c = _0x4782ca;
            _0x48a1e0(_0x2d744c(0x394))[_0x2d744c(0x2f8)](function (_0x44ead3) {
                const _0x49c8b9 = _0x2d744c;
                return _0x48a1e0(this)['is'](_0x49c8b9(0x3b5)) ? _0x48a1e0(this)['parent']()[_0x49c8b9(0x361)]()['parent']()['parent']()[0x0] : this;
            })[_0x2d744c(0x1fe)](function () {
                const _0x3633bd = _0x2d744c;
                return _0x48a1e0(this)['height']() > 0x0 && _0x48a1e0(this)[_0x3633bd(0x3e6)]() > 0x0;
            })['each'](function (_0xcfb264) {
                const _0x48b188 = _0x2d744c;
                if (!_0x48a1e0(this)[_0x48b188(0x337)](_0x48b188(0x2e5)) && !_0x48a1e0(this)[_0x48b188(0x330)]('x1iyjqo2') && !_0x48a1e0(this)[_0x48b188(0x3a0)](_0x48b188(0x30b))?.[_0x48b188(0x330)](_0x48b188(0x415)) && _0x48a1e0(this)['parents']('div#scrollview')['length'] === 0x0) {
                    _0x1de3c6(_0x48b188(0x2cc), _0x48a1e0(this));
                    var _0x4e473e = 0xf, _0x5d78e6 = 0xf, _0x1bdc76 = _0x48a1e0(this), _0x524dca = this['tagName'];
                    if (_0x524dca === _0x48b188(0x380) && _0xcfb264 != 0x0)
                        return;
                    const _0xd4ff5a = _0x1bdc76[_0x48b188(0x3a0)](_0x48b188(0x381))[_0x48b188(0x3a0)]('div');
                    if (_0xd4ff5a[_0x48b188(0x312)] === 0x0)
                        return;
                    _0x1de3c6(_0x48b188(0x286), _0xd4ff5a);
                    if (_0x1bdc76['find'](_0x48b188(0x2d6))[_0x48b188(0x312)] > 0x0) {
                        _0x1bdc76['find'](_0x48b188(0x226))['length'] > 0x0 && _0x1bdc76[_0x48b188(0x3ef)](_0x48b188(0x226))[_0x48b188(0x29c)](_0x48b188(0x2c2), _0x48b188(0x3ea));
                        const _0x3c438a = _0x1bdc76[_0x48b188(0x3ef)]('._acay')[_0x48b188(0x251)]()[_0x48b188(0x361)]()[0x0];
                        var _0xc99cc3 = new MutationObserver(function (_0x1fe792, _0x53574f) {
                            const _0x58cfc7 = _0x48b188;
                            _0x1bdc76['find']('._acay\x20+\x20.x24i39r')[_0x58cfc7(0x29c)](_0x58cfc7(0x2c2), _0x58cfc7(0x3ea));
                        });
                        _0xc99cc3['observe'](_0x3c438a, { 'childList': !![] });
                    }
                    const _0x58f175 = _0x48b188(0x364) + _0x28f55f('DW') + _0x48b188(0x289) + _0x4e473e + _0x48b188(0x268) + _0x5d78e6 + _0x48b188(0x3a3) + _0x48448f['DOWNLOAD'] + _0x48b188(0x238), _0x13d80c = _0x48b188(0x24e) + _0x28f55f(_0x48b188(0x34d)) + _0x48b188(0x40c) + (_0x4e473e + 0x23) + 'px;top:' + _0x5d78e6 + _0x48b188(0x3a3) + _0x48448f[_0x48b188(0x34d)] + _0x48b188(0x238), _0x57da46 = _0x48b188(0x3a9) + _0x28f55f(_0x48b188(0x300)) + '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:' + (_0x4e473e + 0x46) + _0x48b188(0x268) + _0x5d78e6 + _0x48b188(0x3a3) + _0x48448f[_0x48b188(0x3c4)] + '</div>';
                    _0xd4ff5a['eq'](_0x524dca === _0x48b188(0x380) ? 0x0 : _0xd4ff5a[_0x48b188(0x312)] - 0x2)[_0x48b188(0x232)](_0x58f175), _0xd4ff5a['eq'](_0x524dca === _0x48b188(0x380) ? 0x0 : _0xd4ff5a[_0x48b188(0x312)] - 0x2)['append'](_0x13d80c), setTimeout(() => {
                        const _0x8f44c9 = _0x48b188;
                        if (_0xd4ff5a['eq'](_0x524dca === _0x8f44c9(0x380) ? 0x0 : _0xd4ff5a[_0x8f44c9(0x312)] - 0x2)[_0x8f44c9(0x3ef)](_0x8f44c9(0x26c))['length'] === 0x0)
                            _0xd4ff5a[_0x8f44c9(0x3ef)](_0x8f44c9(0x3dd))[_0x8f44c9(0x312)] > 0x0 && _0xd4ff5a['eq'](_0x524dca === _0x8f44c9(0x380) ? 0x0 : _0xd4ff5a[_0x8f44c9(0x312)] - 0x2)[_0x8f44c9(0x232)](_0x57da46);
                        else {
                            const _0x59c61c = (_0x35a323, _0x4c2653) => {
                                    const _0x18d681 = _0x8f44c9;
                                    _0x35a323[_0x18d681(0x21d)](_0x17e613 => {
                                        const _0x519775 = _0x18d681;
                                        if (_0x17e613[_0x519775(0x412)]) {
                                            var _0x35359d = _0x48a1e0(_0x17e613[_0x519775(0x399)]);
                                            _0x35359d[_0x519775(0x3ef)]('video')[_0x519775(0x312)] > 0x0 ? (_0xd4ff5a['eq'](_0x524dca === 'DIV' ? 0x0 : _0xd4ff5a[_0x519775(0x312)] - 0x2)[_0x519775(0x232)](_0x57da46), _0x3ae31a(_0x1bdc76)) : _0xd4ff5a[_0x519775(0x3ef)](_0x519775(0x407))?.[_0x519775(0x2b2)]();
                                        }
                                    });
                                }, _0x4509ec = new IntersectionObserver(_0x59c61c, {
                                    'root': _0x1bdc76['find'](_0x8f44c9(0x229))['first']()[_0x8f44c9(0x361)]()[_0x8f44c9(0x361)]()[_0x8f44c9(0x361)]()[0x0],
                                    'rootMargin': _0x8f44c9(0x207),
                                    'threshold': 0.1
                                }), _0xfddc6f = new MutationObserver(function (_0x4df590, _0x5183dd) {
                                    const _0x34aa6e = _0x8f44c9;
                                    var _0x4bbdb9 = _0x4df590['at'](0x0)?.[_0x34aa6e(0x399)];
                                    _0x48a1e0(_0x4bbdb9)[_0x34aa6e(0x3ef)](_0x34aa6e(0x2b5))[_0x34aa6e(0x359)](function () {
                                        const _0x1ea0e6 = _0x34aa6e;
                                        _0x4509ec[_0x1ea0e6(0x2ad)](this);
                                    });
                                });
                            _0x1bdc76[_0x8f44c9(0x3ef)](_0x8f44c9(0x26c))[_0x8f44c9(0x359)](function () {
                                const _0x5cebce = _0x8f44c9;
                                _0x4509ec[_0x5cebce(0x2ad)](this);
                            });
                            const _0x47abc3 = _0xd4ff5a['eq'](_0x524dca === _0x8f44c9(0x380) ? 0x0 : _0xd4ff5a[_0x8f44c9(0x312)] - 0x2)[_0x8f44c9(0x3ef)](_0x8f44c9(0x26c))?.[_0x8f44c9(0x361)]()[0x0], _0x2dd283 = _0xd4ff5a['eq'](_0x524dca === 'DIV' ? 0x0 : _0xd4ff5a[_0x8f44c9(0x312)] - 0x2)[_0x8f44c9(0x3ef)](_0x8f44c9(0x26c))?.['parent']()['parent']()[0x0];
                            _0x47abc3 && _0xfddc6f[_0x8f44c9(0x2ad)](_0x47abc3, { 'childList': !![] }), _0x2dd283 && _0xfddc6f[_0x8f44c9(0x2ad)](_0x2dd283, { 'attributes': !![] });
                        }
                    }, 0x32), _0xd4ff5a[_0x48b188(0x29c)](_0x48b188(0x224), _0x48b188(0x420)), _0x3ae31a(_0x1bdc76), _0x48a1e0(this)['on'](_0x48b188(0x3b1), _0x48b188(0x407), function (_0x58efda) {
                        const _0x262909 = _0x48b188;
                        _0x1eccfc(!![]), _0x566050 = _0x48a1e0(this)[_0x262909(0x361)]()[_0x262909(0x361)]()[_0x262909(0x361)]()[_0x262909(0x337)](_0x262909(0x2c5)), _0x455890 = location['pathname'][_0x262909(0x37a)](/\/$/, '')[_0x262909(0x29f)]('/')['at'](-0x1) || _0x48a1e0(this)[_0x262909(0x361)]()[_0x262909(0x361)]()[_0x262909(0x361)]()[_0x262909(0x3ef)](_0x262909(0x320))[_0x262909(0x251)]()['attr'](_0x262909(0x384))[_0x262909(0x29f)]('/')['at'](0x2) || _0x48a1e0(this)['parent']()[_0x262909(0x361)]()['children'](_0x262909(0x21e))['children'](_0x262909(0x381))[_0x262909(0x3a0)](_0x262909(0x21e))['find'](_0x262909(0x320))[_0x262909(0x3d6)]()['attr']('href')[_0x262909(0x29f)]('/')['at'](0x2);
                        var _0x53a286 = _0x48a1e0(this)[_0x262909(0x361)]()[_0x262909(0x361)]()[_0x262909(0x361)](), _0x1d57c8 = _0x231485(_0x53a286);
                        _0xf1174b(!![], ![]), _0x378321(_0x455890, _0x262909(0x27f), '')[_0x262909(0x253)](() => {
                            let _0x21008e = setInterval(() => {
                                const _0x54b84b = a0_0x2ca3;
                                if (_0x48a1e0(_0x54b84b(0x2ff))['length'] > 0x0) {
                                    clearInterval(_0x21008e);
                                    var _0x28745c = _0x48a1e0(_0x54b84b(0x3cb) + (_0x1d57c8 + 0x1) + '\x22]')?.['parent']()[_0x54b84b(0x3ef)]('.videoThumbnail')?.['first']();
                                    _0x28745c != null && _0x28745c['length'] > 0x0 ? _0x28745c[_0x54b84b(0x3b1)]() : alert('Can\x20not\x20find\x20thumbnail\x20url.'), _0x1eccfc(![]), _0x48a1e0(_0x54b84b(0x23a))[_0x54b84b(0x2b2)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x48a1e0(this)['on'](_0x48b188(0x3b1), '.SNKMS_IG_NEWTAB_MAIN', function (_0x16907b) {
                        const _0x3ce1af = _0x48b188;
                        _0x1eccfc(!![]), _0x566050 = _0x48a1e0(this)[_0x3ce1af(0x361)]()[_0x3ce1af(0x361)]()[_0x3ce1af(0x361)]()[_0x3ce1af(0x337)](_0x3ce1af(0x2c5)), _0x455890 = location[_0x3ce1af(0x3db)][_0x3ce1af(0x37a)](/\/$/, '')[_0x3ce1af(0x29f)]('/')['at'](-0x1) || _0x48a1e0(this)[_0x3ce1af(0x361)]()[_0x3ce1af(0x361)]()[_0x3ce1af(0x361)]()[_0x3ce1af(0x3ef)]('a[href^=\x22/p/\x22]')[_0x3ce1af(0x251)]()[_0x3ce1af(0x337)]('href')[_0x3ce1af(0x29f)]('/')['at'](0x2) || _0x48a1e0(this)['parent']()['parent']()['children']('div:last-child')[_0x3ce1af(0x3a0)](_0x3ce1af(0x381))[_0x3ce1af(0x3a0)](_0x3ce1af(0x21e))[_0x3ce1af(0x3ef)](_0x3ce1af(0x320))[_0x3ce1af(0x3d6)]()[_0x3ce1af(0x337)](_0x3ce1af(0x384))[_0x3ce1af(0x29f)]('/')['at'](0x2);
                        var _0x378a43 = _0x48a1e0(this)[_0x3ce1af(0x361)]()['parent']()['parent'](), _0x533ae5 = _0x231485(_0x378a43);
                        _0xf1174b(!![], ![]), _0x378321(_0x455890, _0x3ce1af(0x27f), '')[_0x3ce1af(0x253)](() => {
                            let _0x31e814 = setInterval(() => {
                                const _0x9f1ef = a0_0x2ca3;
                                if (_0x48a1e0(_0x9f1ef(0x2ff))[_0x9f1ef(0x312)] > 0x0) {
                                    clearInterval(_0x31e814);
                                    var _0x41017c = _0x48a1e0(_0x9f1ef(0x3cb) + (_0x533ae5 + 0x1) + '\x22]');
                                    if (_0x573435['FORCE_RESOURCE_VIA_MEDIA'] && _0x573435[_0x9f1ef(0x2db)])
                                        _0x2ba236(_0x41017c[_0x9f1ef(0x251)]()[0x0], !![]);
                                    else {
                                        let _0x2b0010 = _0x41017c?.['attr']('data-href');
                                        if (_0x2b0010) {
                                            var _0x73fe1d = new URL(_0x2b0010);
                                            _0x73fe1d[_0x9f1ef(0x389)] = 'scontent.cdninstagram.com', _0x435363(_0x73fe1d[_0x9f1ef(0x384)]);
                                        } else
                                            alert(_0x9f1ef(0x281));
                                    }
                                    _0x1eccfc(![]), _0x48a1e0(_0x9f1ef(0x23a))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x48a1e0(this)['on'](_0x48b188(0x3b1), _0x48b188(0x256), async function (_0x43c49a) {
                        const _0x129b17 = _0x48b188;
                        _0x566050 = _0x48a1e0(this)[_0x129b17(0x361)]()[_0x129b17(0x361)]()['parent']()[_0x129b17(0x337)](_0x129b17(0x2c5)), _0x455890 = location[_0x129b17(0x3db)][_0x129b17(0x37a)](/\/$/, '')[_0x129b17(0x29f)]('/')['at'](-0x1) || _0x48a1e0(this)[_0x129b17(0x361)]()[_0x129b17(0x361)]()[_0x129b17(0x361)]()['find']('a[href^=\x22/p/\x22]')['first']()['attr'](_0x129b17(0x384))['split']('/')['at'](0x2) || _0x48a1e0(this)[_0x129b17(0x361)]()['parent']()[_0x129b17(0x3a0)]('div:last-child')['children']('div')[_0x129b17(0x3a0)]('div:last-child')[_0x129b17(0x3ef)](_0x129b17(0x320))[_0x129b17(0x3d6)]()['attr'](_0x129b17(0x384))[_0x129b17(0x29f)]('/')['at'](0x2), _0xf1174b(_0x573435[_0x129b17(0x3cf)], !![]), _0x48a1e0('#article-id')[_0x129b17(0x3fd)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x455890 + '\x22>' + _0x455890 + '</a>');
                        if (_0x573435[_0x129b17(0x1fd)]) {
                            _0x1eccfc(!![]), _0x18f7b2(!![]);
                            var _0x450f0c = _0x231485(_0x48a1e0(this)[_0x129b17(0x361)]()['parent']()['parent']());
                            _0x378321(_0x455890, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x129b17(0x253)](() => {
                                let _0x5ed4cb = setInterval(() => {
                                    const _0x57df28 = a0_0x2ca3;
                                    if (_0x48a1e0(_0x57df28(0x2ff))[_0x57df28(0x312)] > 0x0) {
                                        clearInterval(_0x5ed4cb);
                                        var _0x4bd7e0 = _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x450f0c + 0x1) + '\x22]')?.[_0x57df28(0x337)](_0x57df28(0x2e3));
                                        _0x4bd7e0 ? (_0x1eccfc(![]), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x450f0c + 0x1) + '\x22]')?.[_0x57df28(0x3b1)]()) : alert(_0x57df28(0x411)), _0x48a1e0(_0x57df28(0x23a))[_0x57df28(0x2b2)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x573435[_0x129b17(0x3cf)]) {
                            var _0x1d7824 = 0x0, _0x192aec = _0x48a1e0(this)['parent']()[_0x129b17(0x361)]()[_0x129b17(0x3ef)](_0x129b17(0x2c3))[_0x129b17(0x312)], _0x495456 = window[_0x129b17(0x3ee)]['pathname'], _0x413e18 = '/' + _0x495456[_0x129b17(0x29f)]('/')[0x1] + '/' + _0x495456[_0x129b17(0x29f)]('/')[0x2] + '/', _0x251ed5 = _0x573435[_0x129b17(0x355)], _0x6b470f = new Date(_0x48a1e0(this)[_0x129b17(0x361)]()['parent']()[_0x129b17(0x3ef)](_0x129b17(0x404))[_0x129b17(0x251)]()['attr'](_0x129b17(0x3f0)))[_0x129b17(0x20d)]();
                            if (_0x192aec)
                                _0x48a1e0(this)['parent']()[_0x129b17(0x3ef)](_0x129b17(0x2c3))[_0x129b17(0x359)](function () {
                                    const _0x2cc547 = _0x129b17;
                                    let _0x169b07 = _0x48a1e0(this)[_0x2cc547(0x361)]()[_0x2cc547(0x361)]()[_0x2cc547(0x3ef)](_0x2cc547(0x3dd));
                                    _0x169b07 && _0x169b07[_0x2cc547(0x337)](_0x2cc547(0x1ec)) && (_0x251ed5 = !![]);
                                }), _0x251ed5 || _0x573435[_0x129b17(0x405)] ? _0x378321(_0x455890, _0x129b17(0x27f), _0x28f55f(_0x129b17(0x382))) : (_0x48a1e0(this)[_0x129b17(0x361)]()[_0x129b17(0x3ef)](_0x129b17(0x2c3))[_0x129b17(0x359)](function () {
                                    const _0xa8f7cc = _0x129b17;
                                    _0x1d7824++;
                                    let _0xaa0038 = _0x48a1e0(this)['find'](_0xa8f7cc(0x3dd)), _0x390841 = _0x48a1e0(this)['find'](_0xa8f7cc(0x30a)), _0xc8ce85 = _0x390841[_0xa8f7cc(0x337)]('srcset') ? _0x390841[_0xa8f7cc(0x337)](_0xa8f7cc(0x416))[_0xa8f7cc(0x29f)]('\x20')[0x0] : _0x390841['attr'](_0xa8f7cc(0x1ec));
                                    _0xaa0038 && _0xaa0038[_0xa8f7cc(0x337)]('src') && (_0x251ed5 = !![]), _0x390841 && _0xc8ce85 && _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')['append']('<a\x20datetime=\x22' + _0x6b470f + _0xa8f7cc(0x24f) + _0x455890 + _0xa8f7cc(0x294) + _0x1d7824 + _0xa8f7cc(0x3c7) + _0xc8ce85 + _0xa8f7cc(0x20b) + _0xc8ce85 + _0xa8f7cc(0x2a5) + _0x28f55f(_0xa8f7cc(0x287)) + '</span>\x20' + _0x1d7824 + _0xa8f7cc(0x36b));
                                }), _0x251ed5 && _0x378321(_0x455890, _0x129b17(0x27f), _0x28f55f('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x573435[_0x129b17(0x405)])
                                    _0x378321(_0x455890, _0x129b17(0x27f), _0x28f55f(_0x129b17(0x382)));
                                else {
                                    _0x1d7824++;
                                    let _0x2f2297 = _0x48a1e0(this)[_0x129b17(0x361)]()[_0x129b17(0x361)]()['find'](_0x129b17(0x3dd)), _0xbba868 = _0x48a1e0(this)[_0x129b17(0x361)]()[_0x129b17(0x361)]()[_0x129b17(0x3ef)](_0x129b17(0x30a)), _0x2912c0 = _0xbba868[_0x129b17(0x337)]('srcset') ? _0xbba868['attr'](_0x129b17(0x416))[_0x129b17(0x29f)]('\x20')[0x0] : _0xbba868[_0x129b17(0x337)](_0x129b17(0x1ec));
                                    _0x2f2297 && _0x2f2297['attr']('src') && _0x378321(_0x455890, _0x129b17(0x27f), _0x28f55f(_0x129b17(0x263))), _0xbba868 && _0x2912c0 && _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')[_0x129b17(0x232)](_0x129b17(0x3eb) + _0x6b470f + _0x129b17(0x24f) + _0x455890 + _0x129b17(0x294) + _0x1d7824 + _0x129b17(0x427) + _0x2912c0 + _0x129b17(0x20b) + _0x2912c0 + _0x129b17(0x2a5) + _0x28f55f(_0x129b17(0x287)) + _0x129b17(0x40d) + _0x1d7824 + '\x20-</a>');
                                }
                            }
                        }
                        _0x48a1e0(_0x129b17(0x2ff))[_0x129b17(0x359)](function () {
                            const _0x13826f = _0x129b17;
                            _0x48a1e0(this)[_0x13826f(0x215)]('<div></div>'), _0x48a1e0(this)['before']('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x48a1e0(this)['after']('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x28f55f(_0x13826f(0x34d)) + _0x13826f(0x42c) + _0x48448f[_0x13826f(0x34d)] + _0x13826f(0x238)), _0x48a1e0(this)[_0x13826f(0x337)]('data-name') == _0x13826f(0x3dd) && _0x48a1e0(this)[_0x13826f(0x1f3)](_0x13826f(0x3a9) + _0x28f55f(_0x13826f(0x300)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x48448f[_0x13826f(0x3c4)] + _0x13826f(0x238));
                        }), _0x573435[_0x129b17(0x3cf)] && _0x378321(_0x455890, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x28f55f('LOAD_BLOB_MULTIPLE'))[_0x129b17(0x253)](() => {
                            let _0xff0997 = setInterval(() => {
                                const _0x20c1c = a0_0x2ca3;
                                _0x48a1e0(_0x20c1c(0x2ff))['length'] > 0x0 && (clearInterval(_0xff0997), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x20c1c(0x359)](function () {
                                    const _0x38bc09 = _0x20c1c;
                                    _0x48a1e0(this)[_0x38bc09(0x3b1)]();
                                }), _0x48a1e0(_0x20c1c(0x23a))[_0x20c1c(0x2b2)]());
                            }, 0xfa);
                        });
                    });
                    var _0x5ddd5e = _0x48a1e0(this)['find'](_0x48b188(0x230))['first']()[_0x48b188(0x390)]();
                    _0x48a1e0(this)[_0x48b188(0x337)](_0x48b188(0x2e5), _0x48b188(0x345)), _0x48a1e0(this)[_0x48b188(0x337)]('data-username', _0x5ddd5e);
                }
            });
        }
        function _0x378321(_0x1286fd, _0x1111ba, _0x1800a7) {
            return new Promise(async _0x4f47ba => {
                const _0x4294f8 = a0_0x2ca3;
                _0x48a1e0(_0x1111ba + '\x20a')['remove'](), _0x48a1e0(_0x1111ba)[_0x4294f8(0x232)](_0x4294f8(0x206) + _0x1800a7 + '</p>');
                let _0x1f91e4 = await _0x303523(_0x1286fd);
                if (_0x1f91e4[_0x4294f8(0x425)] === _0x4294f8(0x3f2)) {
                    let _0x28a119 = 0x1, _0x1b45b6 = _0x1f91e4[_0x4294f8(0x3cc)], _0x41b5bf = _0x1b45b6[_0x4294f8(0x1df)];
                    _0x41b5bf[_0x4294f8(0x265)] == _0x4294f8(0x324) && _0x41b5bf['video_url'] && (_0x48a1e0(_0x1111ba)[_0x4294f8(0x232)]('<a\x20media-id=\x22' + _0x41b5bf['id'] + _0x4294f8(0x2a7) + _0x41b5bf['taken_at_timestamp'] + _0x4294f8(0x3f3) + _0x41b5bf[_0x4294f8(0x298)] + _0x4294f8(0x2a9) + _0x41b5bf['owner'][_0x4294f8(0x3f8)] + _0x4294f8(0x295) + _0x28a119 + _0x4294f8(0x3c7) + _0x41b5bf[_0x4294f8(0x22e)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x41b5bf['display_resources'][0x1][_0x4294f8(0x1ec)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x28f55f(_0x4294f8(0x3da)) + '</span>\x20' + _0x28a119 + _0x4294f8(0x36b)), _0x28a119++);
                    _0x41b5bf[_0x4294f8(0x265)] == _0x4294f8(0x1ed) && (_0x48a1e0(_0x1111ba)[_0x4294f8(0x232)](_0x4294f8(0x397) + _0x41b5bf['id'] + '\x22\x20datetime=\x22' + _0x41b5bf['taken_at_timestamp'] + _0x4294f8(0x3f3) + _0x41b5bf[_0x4294f8(0x298)] + _0x4294f8(0x2ac) + _0x41b5bf[_0x4294f8(0x2d5)][_0x4294f8(0x3f8)] + _0x4294f8(0x295) + _0x28a119 + _0x4294f8(0x3c7) + _0x41b5bf[_0x4294f8(0x2e1)][_0x41b5bf[_0x4294f8(0x2e1)][_0x4294f8(0x312)] - 0x1]['src'] + _0x4294f8(0x20b) + _0x41b5bf[_0x4294f8(0x2e1)][0x1]['src'] + _0x4294f8(0x2a5) + _0x28f55f(_0x4294f8(0x287)) + _0x4294f8(0x40d) + _0x28a119 + '\x20-</a>'), _0x28a119++);
                    if (_0x41b5bf[_0x4294f8(0x265)] == _0x4294f8(0x33b) && _0x41b5bf[_0x4294f8(0x3c2)])
                        for (let _0x24ce26 of _0x41b5bf[_0x4294f8(0x3c2)][_0x4294f8(0x200)]) {
                            _0x24ce26[_0x4294f8(0x2c7)][_0x4294f8(0x265)] == 'GraphVideo' && _0x48a1e0(_0x1111ba)[_0x4294f8(0x232)](_0x4294f8(0x397) + _0x24ce26[_0x4294f8(0x2c7)]['id'] + _0x4294f8(0x2a7) + _0x41b5bf[_0x4294f8(0x261)] + _0x4294f8(0x3f3) + _0x41b5bf[_0x4294f8(0x298)] + _0x4294f8(0x2a9) + _0x41b5bf[_0x4294f8(0x2d5)]['username'] + _0x4294f8(0x295) + _0x28a119 + _0x4294f8(0x3c7) + _0x24ce26[_0x4294f8(0x2c7)][_0x4294f8(0x22e)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x24ce26[_0x4294f8(0x2c7)]['display_resources'][0x1][_0x4294f8(0x1ec)] + _0x4294f8(0x1ef) + _0x28f55f(_0x4294f8(0x3da)) + '</span>\x20' + _0x28a119 + _0x4294f8(0x36b)), _0x24ce26[_0x4294f8(0x2c7)][_0x4294f8(0x265)] == _0x4294f8(0x1ed) && _0x48a1e0(_0x1111ba)['append'](_0x4294f8(0x397) + _0x24ce26[_0x4294f8(0x2c7)]['id'] + _0x4294f8(0x2a7) + _0x41b5bf['taken_at_timestamp'] + _0x4294f8(0x3f3) + _0x41b5bf[_0x4294f8(0x298)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x41b5bf[_0x4294f8(0x2d5)][_0x4294f8(0x3f8)] + _0x4294f8(0x295) + _0x28a119 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x24ce26[_0x4294f8(0x2c7)][_0x4294f8(0x2e1)][_0x24ce26[_0x4294f8(0x2c7)][_0x4294f8(0x2e1)][_0x4294f8(0x312)] - 0x1][_0x4294f8(0x1ec)] + _0x4294f8(0x20b) + _0x24ce26['node'][_0x4294f8(0x2e1)][0x1][_0x4294f8(0x1ec)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x28f55f(_0x4294f8(0x287)) + _0x4294f8(0x40d) + _0x28a119 + '\x20-</a>'), _0x28a119++;
                        }
                } else {
                    let _0x297679 = _0x1f91e4[_0x4294f8(0x3cc)];
                    if (_0x297679[_0x4294f8(0x2e4)])
                        _0x1de3c6('carousel_media'), _0x297679[_0x4294f8(0x2e4)][_0x4294f8(0x21d)]((_0x3fad25, _0x1fc7bf) => {
                            const _0x27a8ff = _0x4294f8;
                            let _0x4acb08 = _0x1fc7bf + 0x1;
                            _0x3fad25[_0x27a8ff(0x280)] == null ? _0x48a1e0(_0x1111ba)[_0x27a8ff(0x232)](_0x27a8ff(0x397) + _0x3fad25['pk'] + _0x27a8ff(0x2a7) + _0x3fad25[_0x27a8ff(0x252)] + _0x27a8ff(0x3f3) + _0x297679['code'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x297679[_0x27a8ff(0x2d5)][_0x27a8ff(0x3f8)] + _0x27a8ff(0x295) + _0x4acb08 + _0x27a8ff(0x3c7) + _0x3fad25[_0x27a8ff(0x204)][_0x27a8ff(0x27b)][0x0]['url'] + _0x27a8ff(0x20b) + _0x3fad25['image_versions2'][_0x27a8ff(0x27b)][0x0]['url'] + _0x27a8ff(0x2a5) + _0x28f55f(_0x27a8ff(0x287)) + _0x27a8ff(0x40d) + _0x4acb08 + _0x27a8ff(0x36b)) : _0x48a1e0(_0x1111ba)[_0x27a8ff(0x232)]('<a\x20media-id=\x22' + _0x3fad25['pk'] + _0x27a8ff(0x2a7) + _0x3fad25[_0x27a8ff(0x252)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x297679[_0x27a8ff(0x3a6)] + _0x27a8ff(0x2a9) + _0x297679['owner'][_0x27a8ff(0x3f8)] + _0x27a8ff(0x295) + _0x4acb08 + _0x27a8ff(0x3c7) + _0x3fad25[_0x27a8ff(0x280)][0x0][_0x27a8ff(0x41d)] + _0x27a8ff(0x20b) + _0x3fad25['image_versions2'][_0x27a8ff(0x27b)][0x0][_0x27a8ff(0x41d)] + _0x27a8ff(0x332) + _0x28f55f(_0x27a8ff(0x3da)) + _0x27a8ff(0x40d) + _0x4acb08 + _0x27a8ff(0x36b));
                        });
                    else {
                        let _0x79c9dd = 0x1;
                        _0x297679[_0x4294f8(0x280)] == null ? _0x48a1e0(_0x1111ba)[_0x4294f8(0x232)](_0x4294f8(0x397) + _0x297679['pk'] + _0x4294f8(0x2a7) + _0x297679[_0x4294f8(0x252)] + _0x4294f8(0x3f3) + _0x297679['code'] + _0x4294f8(0x2ac) + _0x297679[_0x4294f8(0x2d5)][_0x4294f8(0x3f8)] + _0x4294f8(0x295) + _0x79c9dd + _0x4294f8(0x3c7) + _0x297679['image_versions2'][_0x4294f8(0x27b)][0x0][_0x4294f8(0x41d)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x297679[_0x4294f8(0x204)][_0x4294f8(0x27b)][0x0][_0x4294f8(0x41d)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x28f55f(_0x4294f8(0x287)) + _0x4294f8(0x40d) + _0x79c9dd + '\x20-</a>') : _0x48a1e0(_0x1111ba)[_0x4294f8(0x232)](_0x4294f8(0x397) + _0x297679['pk'] + _0x4294f8(0x2a7) + _0x297679['taken_at'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x297679['code'] + _0x4294f8(0x2a9) + _0x297679[_0x4294f8(0x2d5)][_0x4294f8(0x3f8)] + _0x4294f8(0x295) + _0x79c9dd + _0x4294f8(0x3c7) + _0x297679[_0x4294f8(0x280)][0x0][_0x4294f8(0x41d)] + _0x4294f8(0x20b) + _0x297679[_0x4294f8(0x204)][_0x4294f8(0x27b)][0x0][_0x4294f8(0x41d)] + _0x4294f8(0x332) + _0x28f55f('VID') + _0x4294f8(0x40d) + _0x79c9dd + _0x4294f8(0x36b));
                    }
                }
                _0x48a1e0(_0x4294f8(0x3d0))[_0x4294f8(0x2b2)](), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x4294f8(0x359)](function () {
                    const _0x2489cc = _0x4294f8;
                    _0x48a1e0(this)[_0x2489cc(0x215)](_0x2489cc(0x375)), _0x48a1e0(this)[_0x2489cc(0x2e2)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x48a1e0(this)['after'](_0x2489cc(0x24e) + _0x28f55f(_0x2489cc(0x34d)) + _0x2489cc(0x42c) + _0x48448f[_0x2489cc(0x34d)] + '</div>'), _0x48a1e0(this)[_0x2489cc(0x337)](_0x2489cc(0x385)) == 'video' && _0x48a1e0(this)[_0x2489cc(0x1f3)](_0x2489cc(0x3a9) + _0x28f55f('THUMBNAIL_INTRO') + _0x2489cc(0x37b) + _0x48448f[_0x2489cc(0x3c4)] + _0x2489cc(0x238));
                }), _0x4f47ba(!![]);
            });
        }
        function _0xf1174b(_0xa23556, _0x5735d1) {
            const _0x14e2fc = _0x4782ca;
            let _0x8051f6 = _0xa23556 ? _0x14e2fc(0x285) : '';
            _0x48a1e0(_0x14e2fc(0x3d7))[_0x14e2fc(0x232)](_0x14e2fc(0x242) + _0x8051f6 + _0x14e2fc(0x36e)), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')['append']('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x28f55f('CLOSE') + _0x14e2fc(0x374) + _0x48448f[_0x14e2fc(0x237)] + _0x14e2fc(0x291)), _0x5735d1 && (_0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')['append'](_0x14e2fc(0x351)), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')['append'](_0x14e2fc(0x35f) + _0x28f55f(_0x14e2fc(0x31b)) + '</button>'), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')['append'](_0x14e2fc(0x2de) + _0x28f55f('BATCH_DOWNLOAD_DIRECT') + _0x14e2fc(0x2c1)), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')['append'](_0x14e2fc(0x26e) + _0x28f55f(_0x14e2fc(0x33d)) + _0x14e2fc(0x32f)));
        }
        function _0x18f7b2(_0x23866f) {
            const _0x1198de = _0x4782ca;
            _0x48a1e0(_0x1198de(0x23a))[_0x1198de(0x312)] && (_0x23866f ? _0x48a1e0(_0x1198de(0x23a))['addClass'](_0x1198de(0x285)) : _0x48a1e0(_0x1198de(0x23a))[_0x1198de(0x1f4)](_0x1198de(0x285)));
        }
        function _0x70c382(_0x25bc5b, _0x5c4a8e, _0x3b5cb2, _0x8f7f40, _0x14f326, _0x20efae) {
            setTimeout(() => {
                _0x1eccfc(!![]), fetch(_0x25bc5b)['then'](_0x569e98 => {
                    const _0x11959d = a0_0x2ca3;
                    return _0x569e98[_0x11959d(0x309)]()['then'](_0x535b80 => {
                        _0x1eccfc(![]), _0x36c358(_0x25bc5b, _0x535b80, _0x5c4a8e, _0x3b5cb2, _0x8f7f40, _0x14f326, _0x20efae);
                    });
                });
            }, 0x32);
        }
        function _0x36c358(_0x5ee843, _0xe9246f, _0x2f88c5, _0x2cb838, _0x5dd339, _0x536586, _0xd84ea9) {
            const _0x4c3863 = _0x4782ca;
            _0x5dd339 = parseInt(_0x5dd339['toString']()['padEnd'](0xd, '0'));
            _0x573435['RENAME_PUBLISH_DATE'] && (_0x5dd339 = parseInt(_0x5dd339[_0x4c3863(0x3fe)]()[_0x4c3863(0x32c)](0xd, '0')));
            const _0x51986f = new Date(_0x5dd339), _0x11f598 = document['createElement']('a'), _0x523962 = new URL(_0x5ee843)[_0x4c3863(0x3db)]['split']('/')['at'](-0x1)[_0x4c3863(0x29f)]('.')['slice'](0x0, -0x1)[_0x4c3863(0x396)]('.'), _0x35cebe = _0x51986f[_0x4c3863(0x3c0)]()[_0x4c3863(0x3fe)](), _0x62e7c8 = (_0x51986f[_0x4c3863(0x1de)]() + 0x1)[_0x4c3863(0x3fe)]()[_0x4c3863(0x257)](0x2, '0'), _0x540c28 = _0x51986f['getDate']()[_0x4c3863(0x3fe)]()[_0x4c3863(0x257)](0x2, '0'), _0x4e670a = _0x51986f[_0x4c3863(0x34b)]()[_0x4c3863(0x3fe)]()[_0x4c3863(0x257)](0x2, '0'), _0x847de5 = _0x51986f[_0x4c3863(0x2c4)]()[_0x4c3863(0x3fe)]()[_0x4c3863(0x257)](0x2, '0'), _0x553d0a = _0x51986f[_0x4c3863(0x290)]()[_0x4c3863(0x3fe)]()[_0x4c3863(0x257)](0x2, '0');
            var _0x564e56 = _0x19e4eb[_0x4c3863(0x210)](), _0xa6a3e9 = {
                    '%USERNAME%': _0x2f88c5,
                    '%SOURCE_TYPE%': _0x2cb838,
                    '%SHORTCODE%': _0xd84ea9 ? _0xd84ea9 : '',
                    '%YEAR%': _0x35cebe,
                    '%2-YEAR%': _0x35cebe['substr'](-0x2),
                    '%MONTH%': _0x62e7c8,
                    '%DAY%': _0x540c28,
                    '%HOUR%': _0x4e670a,
                    '%MINUTE%': _0x847de5,
                    '%SECOND%': _0x553d0a,
                    '%ORIGINAL_NAME%': _0x523962,
                    '%ORIGINAL_NAME_FIRST%': _0x523962[_0x4c3863(0x29f)]('_')['at'](0x0)
                };
            _0x564e56 = _0x564e56['replace'](/%[\w\-]+%/g, function (_0x12aa2b) {
                return _0xa6a3e9[_0x12aa2b] || _0x12aa2b;
            });
            const _0x121e86 = _0x2f88c5 + '_' + _0x523962 + '.' + _0x536586;
            _0x11f598['href'] = URL[_0x4c3863(0x3bd)](_0xe9246f), _0x11f598['setAttribute']('download', _0x573435['AUTO_RENAME'] ? _0x564e56 + '.' + _0x536586 : _0x121e86), _0x11f598['click'](), _0x11f598[_0x4c3863(0x2b2)]();
        }
        async function _0x2ba236(_0x36db69, _0x41b03a) {
            const _0x21ce7e = _0x4782ca;
            let _0x122633 = new Date()[_0x21ce7e(0x20d)](), _0x4ea966 = Math[_0x21ce7e(0x333)](_0x122633 / 0x3e8), _0x24adf6 = _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x2c5)) ? _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x2c5)) : _0x566050;
            !_0x24adf6 && _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)]('data-path') && (_0x1de3c6('catching\x20owner\x20name\x20from\x20shortcode:', _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)]('data-href')), _0x24adf6 = await _0x411fbb(_0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x1f8))));
            _0x573435[_0x21ce7e(0x26f)] && _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x3f0)) && (_0x4ea966 = parseInt(_0x48a1e0(_0x36db69)['attr'](_0x21ce7e(0x3f0))));
            if (_0x573435[_0x21ce7e(0x405)]) {
                _0x1eccfc(!![]);
                let _0x37b0c3 = await _0x2f1f8a(_0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x274)));
                _0x1eccfc(![]);
                if (_0x37b0c3['status'] === 'ok') {
                    var _0x4fa488 = null;
                    _0x37b0c3[_0x21ce7e(0x41c)][0x0][_0x21ce7e(0x280)] ? _0x4fa488 = _0x37b0c3[_0x21ce7e(0x41c)][0x0][_0x21ce7e(0x280)][0x0]['url'] : _0x4fa488 = _0x37b0c3[_0x21ce7e(0x41c)][0x0][_0x21ce7e(0x204)][_0x21ce7e(0x27b)][0x0]['url'];
                    if (_0x41b03a) {
                        let _0x3eea38 = new URL(_0x4fa488);
                        _0x3eea38[_0x21ce7e(0x389)] = _0x21ce7e(0x2eb), _0x435363(_0x3eea38[_0x21ce7e(0x384)]);
                    } else
                        _0x70c382(_0x4fa488, _0x24adf6, _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x385)), _0x4ea966, _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x305)), _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x1f8)));
                } else {
                    if (_0x573435[_0x21ce7e(0x3ba)]) {
                        if (_0x41b03a) {
                            let _0x123e15 = new URL(_0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x2e3)));
                            _0x123e15[_0x21ce7e(0x389)] = 'scontent.cdninstagram.com', _0x435363(_0x123e15[_0x21ce7e(0x384)]);
                        } else
                            _0x70c382(_0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x2e3)), _0x24adf6, _0x48a1e0(_0x36db69)['attr'](_0x21ce7e(0x385)), _0x4ea966, _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x305)), _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x1f8)));
                    } else
                        alert(_0x21ce7e(0x314) + _0x37b0c3['message']);
                    _0x1de3c6(_0x37b0c3);
                }
            } else
                _0x70c382(_0x48a1e0(_0x36db69)['attr'](_0x21ce7e(0x2e3)), _0x24adf6, _0x48a1e0(_0x36db69)['attr'](_0x21ce7e(0x385)), _0x4ea966, _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)]('data-type'), _0x48a1e0(_0x36db69)[_0x21ce7e(0x337)](_0x21ce7e(0x1f8)));
        }
        function _0x2aeeca(_0x4b8897) {
            const _0x547d77 = _0x4782ca;
            var _0x4b7580 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x547d77(0x1e0),
                        'NOTICE_UPDATE_CONTENT': _0x547d77(0x3ac),
                        'CHECK_UPDATE': _0x547d77(0x1e9),
                        'CHECK_UPDATE_MENU': _0x547d77(0x2bb),
                        'CHECK_UPDATE_INTRO': 'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
                        'RELOAD_SCRIPT': _0x547d77(0x23b),
                        'DONATE': _0x547d77(0x39a),
                        'FEEDBACK': _0x547d77(0x227),
                        'NEW_TAB': _0x547d77(0x262),
                        'SHOW_DOM_TREE': _0x547d77(0x2df),
                        'SELECT_AND_COPY': 'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
                        'DOWNLOAD_DOM_TREE': _0x547d77(0x235),
                        'REPORT_GITHUB': 'Report\x20an\x20Issue\x20on\x20GitHub',
                        'REPORT_DISCORD': _0x547d77(0x343),
                        'REPORT_FORK': _0x547d77(0x38f),
                        'DEBUG': _0x547d77(0x3d3),
                        'CLOSE': _0x547d77(0x42b),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0x547d77(0x25b),
                        'BATCH_DOWNLOAD_DIRECT': _0x547d77(0x33a),
                        'IMG': 'Image',
                        'VID': _0x547d77(0x34f),
                        'DW': _0x547d77(0x2e0),
                        'THUMBNAIL_INTRO': _0x547d77(0x414),
                        'LOAD_BLOB_ONE': 'Loading\x20Blob\x20Media...',
                        'LOAD_BLOB_MULTIPLE': 'Loading\x20Blob\x20Media\x20and\x20Others...',
                        'LOAD_BLOB_RELOAD': _0x547d77(0x387),
                        'NO_CHECK_RESOURCE': _0x547d77(0x418),
                        'NO_VID_URL': _0x547d77(0x321),
                        'SETTING': 'Settings',
                        'AUTO_RENAME': _0x547d77(0x279),
                        'RENAME_SHORTCODE': _0x547d77(0x318),
                        'RENAME_PUBLISH_DATE': _0x547d77(0x2d8),
                        'RENAME_LOCATE_DATE': _0x547d77(0x3d4),
                        'DISABLE_VIDEO_LOOPING': _0x547d77(0x245),
                        'HTML5_VIDEO_CONTROL': _0x547d77(0x39d),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x547d77(0x428),
                        'FORCE_FETCH_ALL_RESOURCES': _0x547d77(0x335),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': _0x547d77(0x424),
                        'MODIFY_VIDEO_VOLUME': _0x547d77(0x371),
                        'SCROLL_BUTTON': _0x547d77(0x3ad),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x547d77(0x37c),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x547d77(0x368),
                        'AUTO_RENAME_INTRO': 'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
                        'RENAME_SHORTCODE_INTRO': _0x547d77(0x214),
                        'RENAME_PUBLISH_DATE_INTRO': _0x547d77(0x366),
                        'RENAME_LOCATE_DATE_INTRO': _0x547d77(0x322),
                        'DISABLE_VIDEO_LOOPING_INTRO': 'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
                        'HTML5_VIDEO_CONTROL_INTRO': _0x547d77(0x25c),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x547d77(0x3d1),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x547d77(0x27c),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x547d77(0x20c),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x547d77(0x2be),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x547d77(0x22c),
                        'SCROLL_BUTTON_INTRO': 'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x547d77(0x22f),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT_INTRO': _0x547d77(0x392),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x547d77(0x3ed),
                        'SKIP_VIEW_STORY_CONFIRM': _0x547d77(0x1f2),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x547d77(0x25d)
                    }
                }, _0x434f71 = Object[_0x547d77(0x326)]({}, _0x4b7580, _0x1cf3f9), _0x8d0f7 = Object['keys'](_0x434f71)[_0x547d77(0x32b)]()[_0x547d77(0x1f1)]((_0x6659d5, _0x53c618) => {
                    return _0x6659d5[_0x53c618] = _0x434f71[_0x53c618], _0x6659d5;
                }, {});
            return _0x8d0f7;
        }
        async function _0x26f84a(_0x4c4b36) {
            return new Promise((_0x50beac, _0x3496ef) => {
                const _0x21d1c5 = a0_0x2ca3;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': 'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/' + _0x4c4b36 + _0x21d1c5(0x211),
                    'onload': function (_0x5f50dc) {
                        const _0x29ffb1 = _0x21d1c5;
                        try {
                            let _0x20b7bb = JSON[_0x29ffb1(0x259)](_0x5f50dc['response']);
                            _0x50beac(_0x20b7bb);
                        } catch (_0x32e0c8) {
                            _0x3496ef(_0x32e0c8);
                        }
                    },
                    'onerror': function (_0x55b742) {
                        const _0x39ddbb = _0x21d1c5;
                        _0x1de3c6(_0x39ddbb(0x376), _0x39ddbb(0x2bf), _0x55b742), _0x3496ef(_0x55b742);
                    }
                });
            });
        }
        function _0x28f55f(_0x5c6021) {
            const _0x1ef0ea = _0x4782ca, _0x585cb0 = _0x2aeeca();
            return _0x585cb0[_0x1fd5d4] != undefined && _0x585cb0[_0x1fd5d4][_0x5c6021] != undefined ? _0x585cb0[_0x1fd5d4][_0x5c6021] : _0x585cb0[_0x1ef0ea(0x1e7)][_0x5c6021];
        }
        function _0x28a655() {
            const _0x554a2d = _0x4782ca;
            _0x48a1e0(_0x554a2d(0x388))[_0x554a2d(0x359)](function () {
                const _0x2f124d = _0x554a2d;
                _0x48a1e0(this)[_0x2f124d(0x390)](_0x28f55f(_0x48a1e0(this)[_0x2f124d(0x337)](_0x2f124d(0x29a))));
            }), _0x48a1e0('[data-ih-locale-title]')[_0x554a2d(0x359)](function () {
                const _0x2441c5 = _0x554a2d;
                _0x48a1e0(this)[_0x2441c5(0x337)](_0x2441c5(0x272), _0x28f55f(_0x48a1e0(this)[_0x2441c5(0x337)](_0x2441c5(0x264))));
            });
        }
        function _0x482e2d() {
            const _0x226edb = _0x4782ca;
            for (let _0x3ee88b of _0x1c3d96) {
                _0x1de3c6(_0x226edb(0x297), _0x3ee88b), GM_unregisterMenuCommand(_0x3ee88b);
            }
            _0x1c3d96[_0x226edb(0x363)](GM_registerMenuCommand(_0x28f55f('SETTING'), () => {
                _0x382868();
            }, { 'accessKey': 'w' })), _0x1c3d96[_0x226edb(0x363)](GM_registerMenuCommand(_0x28f55f('DONATE'), () => {
                const _0x51b801 = _0x226edb;
                GM_openInTab(_0x51b801(0x2ea), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x1c3d96['push'](GM_registerMenuCommand(_0x28f55f(_0x226edb(0x378)), () => {
                _0x1a76a1();
            }, { 'accessKey': 'z' })), _0x1c3d96['push'](GM_registerMenuCommand(_0x28f55f(_0x226edb(0x31c)), () => {
                _0x3e4b0e();
            }, { 'accessKey': 'f' })), _0x1c3d96[_0x226edb(0x363)](GM_registerMenuCommand(_0x28f55f(_0x226edb(0x3ca)), () => {
                _0x27781a();
            }, { 'accessKey': 'c' })), _0x1c3d96[_0x226edb(0x363)](GM_registerMenuCommand(_0x28f55f(_0x226edb(0x317)), () => {
                _0x1bef7f();
            }, { 'accessKey': 'r' }));
        }
        function _0x322029(_0x51bfe7) {
            const _0x557fa6 = _0x4782ca;
            if (!_0x573435[_0x557fa6(0x315)])
                return;
            const _0x17d4fe = GM_getValue(_0x557fa6(0x247)) ?? new Date()[_0x557fa6(0x20d)](), _0x4253b1 = new Date()[_0x557fa6(0x20d)]();
            _0x4253b1 > parseInt(_0x17d4fe) + _0x51bfe7 * 0x3e8 && (GM_setValue('G_CHECK_TIMESTAMP', new Date()[_0x557fa6(0x20d)]()), _0x27781a());
        }
        function _0x27781a() {
            const _0xd9f979 = _0x4782ca, _0x1ce97b = GM_info[_0xd9f979(0x429)]['version'], _0x449982 = _0xd9f979(0x352);
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x449982,
                'onload': function (_0x4c8539) {
                    const _0x1df761 = _0xd9f979, _0x1b7a15 = _0x4c8539[_0x1df761(0x34a)], _0x40b616 = _0x1b7a15['match'](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x40b616 && _0x40b616[0x1]) {
                        const _0x16aa9c = _0x40b616[0x1];
                        _0x1de3c6(_0x1df761(0x3e0), _0x1ce97b, '|', _0x1df761(0x2d4), _0x16aa9c), _0x16aa9c !== _0x1ce97b && typeof this[_0x1df761(0x1e8)] === _0x1df761(0x2c9) ? (this[_0x1df761(0x1e8)] = null, GM_notification({
                            'text': _0x28f55f(_0x1df761(0x417)),
                            'title': _0x28f55f(_0x1df761(0x379)),
                            'tag': _0x1df761(0x1f0),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
                            'onclick': _0x4db107 => {
                                const _0x3b9f63 = _0x1df761;
                                _0x4db107?.['preventDefault']();
                                var _0x2b82ed = GM_openInTab(GM_info['script'][_0x3b9f63(0x410)]);
                                setTimeout(() => {
                                    const _0x2f5f0b = _0x3b9f63;
                                    _0x2b82ed[_0x2f5f0b(0x22b)]();
                                }, 0xfa);
                            }
                        })) : _0x1de3c6('there\x20is\x20no\x20new\x20update');
                    } else
                        console[_0x1df761(0x3af)](_0x1df761(0x3a7));
                }
            });
        }
        function _0x382868() {
            const _0x11f9cf = _0x4782ca;
            _0x48a1e0(_0x11f9cf(0x23a))['remove'](), _0xf1174b(), _0x48a1e0(_0x11f9cf(0x29d))[_0x11f9cf(0x390)]('Preference\x20Settings'), _0x48a1e0(_0x11f9cf(0x2dd))[_0x11f9cf(0x232)](_0x11f9cf(0x254));
            for (let _0x429045 in _0x1c96d9) {
                _0x48a1e0(_0x11f9cf(0x2d1))[_0x11f9cf(0x232)]('<option\x20value=\x22' + _0x429045 + '\x22\x20' + (_0x1fd5d4 == _0x429045 ? _0x11f9cf(0x362) : '') + '>' + _0x1c96d9[_0x429045] + _0x11f9cf(0x311));
            }
            for (let _0xfa63ea in _0x573435) {
                _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x11f9cf(0x232)](_0x11f9cf(0x2b0) + (_0x471ad7['includes'](_0xfa63ea) ? _0x11f9cf(0x2d2) : '') + _0x11f9cf(0x316) + _0x28f55f(_0xfa63ea + '_INTRO') + _0x11f9cf(0x2b3) + (_0xfa63ea + _0x11f9cf(0x282)) + _0x11f9cf(0x267) + _0xfa63ea + '\x22>' + _0x28f55f(_0xfa63ea) + _0x11f9cf(0x2d7) + _0xfa63ea + _0x11f9cf(0x3b9) + (_0x573435[_0xfa63ea] === !![] ? _0x11f9cf(0x201) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0xfa63ea === _0x11f9cf(0x1f5) && _0x48a1e0(_0x11f9cf(0x38d) + _0xfa63ea + '\x22]')['parent']('label')['on'](_0x11f9cf(0x328), function (_0x544e9e) {
                    const _0x346808 = _0x11f9cf;
                    _0x544e9e[_0x346808(0x217)](), _0x48a1e0(this)[_0x346808(0x3ef)](_0x346808(0x3cd))[_0x346808(0x312)] === 0x0 && (_0x48a1e0(this)[_0x346808(0x232)](_0x346808(0x233)), _0x48a1e0(this)[_0x346808(0x3a0)](_0x346808(0x3cd))[_0x346808(0x232)]('<input\x20value=\x22' + _0x3402f9 + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0x48a1e0(this)['children'](_0x346808(0x3cd))[_0x346808(0x232)](_0x346808(0x2ca) + _0x3402f9 + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x48a1e0(this)[_0x346808(0x3a0)](_0x346808(0x3cd))[_0x346808(0x232)](_0x346808(0x34e) + _0x48448f[_0x346808(0x237)] + '</div>'));
                }), _0xfa63ea === 'AUTO_RENAME' && _0x48a1e0(_0x11f9cf(0x38d) + _0xfa63ea + '\x22]')[_0x11f9cf(0x361)](_0x11f9cf(0x1ee))['on'](_0x11f9cf(0x328), function (_0x403cc1) {
                    const _0x3ad62 = _0x11f9cf;
                    _0x403cc1[_0x3ad62(0x217)](), _0x48a1e0(this)[_0x3ad62(0x3ef)](_0x3ad62(0x3cd))[_0x3ad62(0x312)] === 0x0 && (_0x48a1e0(this)[_0x3ad62(0x232)](_0x3ad62(0x233)), _0x48a1e0(this)[_0x3ad62(0x3a0)](_0x3ad62(0x3cd))[_0x3ad62(0x232)](_0x3ad62(0x301) + _0x19e4eb + _0x3ad62(0x24a)), _0x48a1e0(this)['children']('#tempWrapper')[_0x3ad62(0x232)](_0x3ad62(0x34e) + _0x48448f[_0x3ad62(0x237)] + _0x3ad62(0x238)));
                });
            }
        }
        function _0x1a76a1() {
            const _0x5cd710 = _0x4782ca;
            _0x48a1e0(_0x5cd710(0x23a))[_0x5cd710(0x2b2)](), _0xf1174b(), _0x48a1e0(_0x5cd710(0x29d))['text']('IG\x20Debug\x20DOM\x20Tree'), _0x48a1e0(_0x5cd710(0x3e2))[_0x5cd710(0x232)](_0x5cd710(0x31e)), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_BODY')['append'](_0x5cd710(0x20f)), _0x48a1e0(_0x5cd710(0x338))[_0x5cd710(0x232)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x28f55f(_0x5cd710(0x3bf)) + _0x5cd710(0x2f0)), _0x48a1e0(_0x5cd710(0x338))[_0x5cd710(0x232)](_0x5cd710(0x2d9) + _0x28f55f('SELECT_AND_COPY') + _0x5cd710(0x2f0)), _0x48a1e0(_0x5cd710(0x338))[_0x5cd710(0x232)](_0x5cd710(0x1fa) + _0x28f55f('DOWNLOAD_DOM_TREE') + _0x5cd710(0x2a6)), _0x48a1e0(_0x5cd710(0x338))['append'](_0x5cd710(0x3ec) + _0x28f55f('REPORT_GITHUB') + _0x5cd710(0x2f0)), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append'](_0x5cd710(0x2cf) + _0x28f55f(_0x5cd710(0x2f3)) + _0x5cd710(0x2f0));
        }
        function _0x3e4b0e() {
            const _0x305833 = _0x4782ca;
            _0x48a1e0(_0x305833(0x23a))['remove'](), _0xf1174b(), _0x48a1e0(_0x305833(0x29d))[_0x305833(0x390)](_0x305833(0x342)), _0x48a1e0(_0x305833(0x3e2))[_0x305833(0x232)](_0x305833(0x20f)), _0x48a1e0(_0x305833(0x338))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>' + _0x28f55f(_0x305833(0x3d5)) + _0x305833(0x2f0)), _0x48a1e0(_0x305833(0x338))[_0x305833(0x232)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x28f55f(_0x305833(0x246)) + '</a></button>'), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x305833(0x232)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x28f55f(_0x305833(0x2f3)) + _0x305833(0x2f0));
        }
        function _0x435363(_0x1c67ac) {
            const _0x6fb0ac = _0x4782ca;
            var _0x527973 = document[_0x6fb0ac(0x21b)]('a');
            _0x527973[_0x6fb0ac(0x384)] = _0x1c67ac, _0x527973['target'] = '_blank', document[_0x6fb0ac(0x3d7)]['appendChild'](_0x527973), _0x527973['click'](), _0x527973[_0x6fb0ac(0x2b2)]();
        }
        function _0x1bef7f() {
            const _0xe877b0 = _0x4782ca;
            clearInterval(_0x2a1e66), _0x48a1e0('.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN')['remove'](), _0x48a1e0(_0xe877b0(0x21a))[_0xe877b0(0x2b2)](), _0x48a1e0('[data-snig]')[_0xe877b0(0x2fb)](_0xe877b0(0x2e5)), _0x23eca1 = ![], _0x3e07b5 = ![], _0xe58f9e = location['href'], _0x141ca3[_0xe877b0(0x3ab)](), _0x1de3c6(_0xe877b0(0x3e3));
        }
        function _0x1de3c6(..._0x390410) {
            const _0x4501e6 = _0x4782ca;
            var _0x489b44 = new Date();
            _0x1595af[_0x4501e6(0x363)]({
                'time': _0x489b44[_0x4501e6(0x20d)](),
                'content': [..._0x390410]
            }), _0x1595af[_0x4501e6(0x312)] > 0x3e8 && (_0x1595af = [
                {
                    'time': _0x489b44[_0x4501e6(0x20d)](),
                    'content': [_0x4501e6(0x2c8)]
                },
                ..._0x1595af[_0x4501e6(0x23e)](-0x3e7)
            ]), console[_0x4501e6(0x234)]('[' + _0x489b44[_0x4501e6(0x2fa)]() + ']', ..._0x390410);
        }
        function _0x4c9440() {
            for (let _0xd329d0 in _0x573435) {
                GM_getValue(_0xd329d0) != null && typeof GM_getValue(_0xd329d0) === 'boolean' && (_0x573435[_0xd329d0] = GM_getValue(_0xd329d0));
            }
        }
        _0x48a1e0(function () {
            const _0x3ec08a = _0x4782ca;
            function _0x208a21(_0x5bbcdd) {
                const _0x5a2f01 = a0_0x2ca3;
                var _0x20420f = [];
                for (var _0x19458f of _0x5bbcdd) {
                    _0x20420f['push']({
                        'tagName': _0x19458f['tagName'],
                        'id': _0x19458f['id'],
                        'className': _0x19458f[_0x5a2f01(0x2f4)]
                    });
                }
                return _0x20420f;
            }
            function _0x573aa6() {
                const _0x3b5506 = a0_0x2ca3;
                let _0xf31fa1 = _0x48a1e0(_0x3b5506(0x228))[0x0];
                var _0x5ec784 = '';
                _0x1595af[_0x3b5506(0x21d)](_0x18f33a => {
                    const _0x2ef1e9 = _0x3b5506;
                    var _0x1447c9 = JSON['stringify'](_0x18f33a[_0x2ef1e9(0x2f1)], function (_0x2ed711, _0x2c20d6) {
                        const _0x511aab = _0x2ef1e9;
                        if (Array['isArray'](this)) {
                            if (typeof _0x2c20d6 === _0x511aab(0x3dc) && _0x2c20d6 instanceof jQuery)
                                return _0x208a21(_0x2c20d6);
                            return _0x2c20d6;
                        } else
                            return _0x2c20d6;
                    }, '\x09');
                    _0x5ec784 += _0x18f33a[_0x2ef1e9(0x395)] + ':\x20' + _0x1447c9 + '\x0a';
                }), _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')['text']('Logger:\x0a' + _0x5ec784 + _0x3b5506(0x398) + location[_0x3b5506(0x3db)] + _0x3b5506(0x1fc) + _0xf31fa1[_0x3b5506(0x3aa)]);
            }
            _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), _0x3ec08a(0x213), function () {
                _0x573aa6();
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x13326d = _0x3ec08a;
                _0x48a1e0('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x13326d(0x225)](), document['execCommand'](_0x13326d(0x344));
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on']('click', '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE', function () {
                const _0x24a64c = _0x3ec08a;
                _0x48a1e0(_0x24a64c(0x38b))[_0x24a64c(0x390)]()[_0x24a64c(0x312)] === 0x0 && _0x573aa6();
                var _0x40a8dc = _0x48a1e0(_0x24a64c(0x38b))[_0x24a64c(0x390)](), _0x246f99 = document[_0x24a64c(0x21b)]('a'), _0x1dadc2 = new Blob([_0x40a8dc], { 'type': 'text/plain' });
                _0x246f99[_0x24a64c(0x384)] = URL[_0x24a64c(0x3bd)](_0x1dadc2), _0x246f99['download'] = _0x24a64c(0x2e7) + new Date()[_0x24a64c(0x20d)]() + _0x24a64c(0x23d), document[_0x24a64c(0x3d7)][_0x24a64c(0x35b)](_0x246f99), _0x246f99[_0x24a64c(0x3b1)](), _0x246f99['remove']();
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), _0x3ec08a(0x39f), function () {
                const _0x31f7d8 = _0x3ec08a;
                _0x48a1e0(this)[_0x31f7d8(0x361)](_0x31f7d8(0x3cd))[_0x31f7d8(0x312)] > 0x0 ? _0x48a1e0(this)['parent']('#tempWrapper')[_0x31f7d8(0x296)](0xfa, function () {
                    const _0x580c07 = _0x31f7d8;
                    _0x48a1e0(this)[_0x580c07(0x2b2)]();
                }) : _0x48a1e0('.IG_SN_DIG')['remove']();
            }), _0x48a1e0(window)['keydown'](function (_0x115ae6) {
                const _0x12a21d = _0x3ec08a;
                _0x115ae6[_0x12a21d(0x3de)] == '81' && _0x115ae6['altKey'] && (_0x48a1e0(_0x12a21d(0x23a))['remove'](), _0x115ae6['preventDefault']()), _0x115ae6['keyCode'] == '87' && _0x115ae6[_0x12a21d(0x2f7)] && (_0x382868(), _0x115ae6[_0x12a21d(0x217)]()), _0x115ae6[_0x12a21d(0x3de)] == '90' && _0x115ae6['altKey'] && (_0x1a76a1(), _0x115ae6[_0x12a21d(0x217)]()), _0x115ae6['keyCode'] == '82' && _0x115ae6[_0x12a21d(0x2f7)] && (_0x1bef7f(), _0x115ae6['preventDefault']()), _0x115ae6[_0x12a21d(0x3de)] == '83' && _0x115ae6[_0x12a21d(0x2f7)] && (location[_0x12a21d(0x384)][_0x12a21d(0x3f5)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x48a1e0(_0x12a21d(0x2a4))[_0x12a21d(0x312)] > 0x0 && _0x48a1e0(_0x12a21d(0x2a4))?.['click'](), location['href'][_0x12a21d(0x3f5)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x48a1e0(_0x12a21d(0x35c))[_0x12a21d(0x312)] > 0x0 && _0x48a1e0('.IG_DWHISTORY')?.[_0x12a21d(0x3b1)](), _0x115ae6['preventDefault']());
            }), _0x48a1e0('body')['on'](_0x3ec08a(0x3a5), '.IG_SN_DIG\x20input', function (_0x3b78b3) {
                const _0x5ae414 = _0x3ec08a;
                var _0x149173 = _0x48a1e0(this)[_0x5ae414(0x337)]('id');
                if (_0x149173 && _0x573435[_0x149173] !== undefined) {
                    let _0x462647 = _0x48a1e0(this)[_0x5ae414(0x3c5)](_0x5ae414(0x201));
                    GM_setValue(_0x149173, _0x462647), _0x573435[_0x149173] = _0x462647, console['log'](_0x5ae414(0x2bd), _0x149173, _0x462647);
                }
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), '.IG_SN_DIG\x20.globalSettings', function (_0x18a15c) {
                const _0x2ea233 = _0x3ec08a;
                _0x48a1e0(this)[_0x2ea233(0x3ef)]('#tempWrapper')[_0x2ea233(0x312)] > 0x0 && _0x18a15c[_0x2ea233(0x217)]();
            }), _0x48a1e0('body')['on'](_0x3ec08a(0x3a5), _0x3ec08a(0x3e7), function () {
                const _0x38222a = _0x3ec08a;
                let _0x2bf9fe = _0x48a1e0(this)[_0x38222a(0x269)]();
                _0x48a1e0(this)['attr'](_0x38222a(0x425)) == _0x38222a(0x212) ? _0x48a1e0(this)[_0x38222a(0x27e)]()[_0x38222a(0x269)](_0x2bf9fe) : _0x48a1e0(this)[_0x38222a(0x3fb)]()[_0x38222a(0x269)](_0x2bf9fe), _0x2bf9fe >= 0x0 && _0x2bf9fe <= 0x1 && (_0x3402f9 = _0x2bf9fe, GM_setValue(_0x38222a(0x408), _0x2bf9fe));
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x276), '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)', function (_0x1da879) {
                const _0x4b802d = _0x3ec08a;
                if (_0x48a1e0(this)[_0x4b802d(0x337)](_0x4b802d(0x425)) == _0x4b802d(0x212)) {
                    let _0x54d2c4 = _0x48a1e0(this)[_0x4b802d(0x269)]();
                    _0x48a1e0(this)[_0x4b802d(0x27e)]()['val'](_0x54d2c4);
                } else {
                    let _0x4f1690 = _0x48a1e0(this)[_0x4b802d(0x269)]();
                    _0x4f1690 >= 0x0 && _0x4f1690 <= 0x1 ? _0x48a1e0(this)[_0x4b802d(0x3fb)]()[_0x4b802d(0x269)](_0x4f1690) : _0x4f1690 < 0x0 ? _0x48a1e0(this)[_0x4b802d(0x269)](0x0) : _0x48a1e0(this)[_0x4b802d(0x269)](0x1);
                }
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x276), _0x3ec08a(0x2ed), function (_0x1ceb10) {
                const _0xee5290 = _0x3ec08a;
                GM_setValue(_0xee5290(0x403), _0x48a1e0(this)[_0xee5290(0x269)]()), _0x19e4eb = _0x48a1e0(this)[_0xee5290(0x269)]();
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on']('click', _0x3ec08a(0x29e), function (_0x5d14ee) {
                const _0x3bdef8 = _0x3ec08a;
                _0x5d14ee[_0x3bdef8(0x217)](), _0x2ba236(this);
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), _0x3ec08a(0x28c), function () {
                const _0x1af8be = _0x3ec08a;
                if (_0x573435['FORCE_RESOURCE_VIA_MEDIA'] && _0x573435[_0x1af8be(0x2db)])
                    _0x2ba236(_0x48a1e0(this)[_0x1af8be(0x361)]()[_0x1af8be(0x3a0)]('a')['first']()[0x0], !![]);
                else {
                    var _0x5c83ac = new URL(_0x48a1e0(this)['parent']()[_0x1af8be(0x3a0)]('a')[_0x1af8be(0x337)](_0x1af8be(0x2e3)));
                    _0x5c83ac[_0x1af8be(0x389)] = _0x1af8be(0x2eb), _0x435363(_0x5c83ac[_0x1af8be(0x384)]);
                }
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on']('click', _0x3ec08a(0x3df), function () {
                const _0x3b5b20 = _0x3ec08a;
                _0x70c382(_0x48a1e0(this)[_0x3b5b20(0x361)]()['children']('a')[_0x3b5b20(0x3ef)](_0x3b5b20(0x26a))['first']()[_0x3b5b20(0x337)](_0x3b5b20(0x1ec)), _0x48a1e0(this)[_0x3b5b20(0x361)]()[_0x3b5b20(0x3a0)]('a')['attr']('data-username'), _0x3b5b20(0x306), new Date()[_0x3b5b20(0x20d)](), _0x3b5b20(0x258), _0x48a1e0(_0x3b5b20(0x38e))[_0x3b5b20(0x390)]());
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on']('click', '.IG_DWSTORY', function () {
                _0x59d5e1(!![]);
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on']('click', _0x3ec08a(0x2fe), function (_0x3400f5) {
                const _0x103643 = _0x3ec08a;
                _0x3400f5[_0x103643(0x217)](), _0x59d5e1(!![], !![], !![]);
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), _0x3ec08a(0x325), function () {
                _0x5e2a4e(!![]);
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), _0x3ec08a(0x3bc), function (_0x284887) {
                const _0x505523 = _0x3ec08a;
                _0x284887[_0x505523(0x35d)](), _0x4de2b6(!![]);
            }), _0x48a1e0('body')['on']('click', _0x3ec08a(0x35c), function () {
                _0x13eda8(!![]);
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on']('click', _0x3ec08a(0x3b3), function (_0x4b9b70) {
                _0x4b9b70['preventDefault'](), _0x13eda8(!![], !![]);
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), _0x3ec08a(0x220), function () {
                _0x31f7e4(!![]);
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on']('click', _0x3ec08a(0x3f1), function () {
                _0x5af119(!![], !![]);
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), '.IG_REELS_NEWTAB', function () {
                _0x5af119(!![], !![], !![]);
            }), _0x48a1e0('body')['on'](_0x3ec08a(0x3b1), _0x3ec08a(0x248), function () {
                _0x5af119(!![], ![]);
            }), _0x48a1e0('body')['on'](_0x3ec08a(0x218), _0x3ec08a(0x383), function (_0x542be7) {
                const _0x35a645 = _0x3ec08a;
                if (_0x542be7[_0x35a645(0x219)] === 0x3 || _0x542be7[_0x35a645(0x219)] === 0x2) {
                    if (location[_0x35a645(0x384)] === _0x35a645(0x3bb) && _0x573435[_0x35a645(0x24b)]) {
                        _0x542be7[_0x35a645(0x217)]();
                        if (_0x48a1e0(this)['find']('canvas._aarh')[_0x35a645(0x312)] > 0x0) {
                            const _0x55c33d = 'https://www.instagram.com/' + _0x48a1e0(this)[_0x35a645(0x3a0)](_0x35a645(0x381))[_0x35a645(0x3d6)]()['text']();
                            _0x542be7[_0x35a645(0x219)] === 0x2 ? GM_openInTab(_0x55c33d) : location['href'] = _0x55c33d;
                        }
                    }
                }
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3a5), '.IG_SN_DIG_TITLE\x20.checkbox', function () {
                const _0x45e1f6 = _0x3ec08a;
                var _0x5d2d59 = _0x48a1e0(this)['find'](_0x45e1f6(0x276))[_0x45e1f6(0x3c5)](_0x45e1f6(0x201));
                _0x48a1e0(_0x45e1f6(0x40f))[_0x45e1f6(0x359)](function () {
                    const _0x5e1542 = _0x45e1f6;
                    _0x48a1e0(this)[_0x5e1542(0x3c5)]('checked', _0x5d2d59);
                });
            }), _0x48a1e0('body')['on']('change', _0x3ec08a(0x40f), function () {
                const _0x3899c2 = _0x3ec08a;
                var _0x128226 = _0x48a1e0('.IG_SN_DIG_BODY\x20.inner_box:checked')[_0x3899c2(0x312)], _0x597c94 = _0x48a1e0(_0x3899c2(0x40f))[_0x3899c2(0x312)];
                _0x48a1e0('.IG_SN_DIG_TITLE\x20.checkbox')[_0x3899c2(0x3ef)](_0x3899c2(0x276))['prop'](_0x3899c2(0x201), _0x128226 == _0x597c94);
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3b1), _0x3ec08a(0x244), function () {
                const _0x4c8f6a = _0x3ec08a;
                let _0x2d5ab = 0x0;
                _0x48a1e0('.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x4c8f6a(0x359)](function () {
                    const _0x1fb9ff = _0x4c8f6a;
                    _0x48a1e0(this)[_0x1fb9ff(0x3fb)]()[_0x1fb9ff(0x3a0)](_0x1fb9ff(0x276))[_0x1fb9ff(0x3c5)](_0x1fb9ff(0x201)) && (_0x48a1e0(this)[_0x1fb9ff(0x3b1)](), _0x2d5ab++);
                }), _0x2d5ab == 0x0 && alert(_0x28f55f('NO_CHECK_RESOURCE'));
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3a5), _0x3ec08a(0x260), function () {
                const _0x1f0269 = _0x3ec08a;
                GM_setValue(_0x1f0269(0x37e), _0x48a1e0(this)[_0x1f0269(0x269)]()), _0x1fd5d4 = _0x48a1e0(this)[_0x1f0269(0x269)](), _0x1fd5d4?.[_0x1f0269(0x421)]('en') || _0x1cf3f9[_0x1fd5d4] != null ? (_0x28a655(), _0x482e2d()) : _0x26f84a(_0x1fd5d4)['then'](_0x58fe01 => {
                    _0x1cf3f9[_0x1fd5d4] = _0x58fe01, _0x28a655(), _0x482e2d();
                })['catch'](_0x4843e9 => {
                    const _0x32e7fe = _0x1f0269;
                    console['error'](_0x32e7fe(0x31a), _0x4843e9);
                });
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on'](_0x3ec08a(0x3a5), _0x3ec08a(0x292), function () {
                const _0x473afc = _0x3ec08a;
                _0x48a1e0(_0x473afc(0x419))[_0x473afc(0x390)]('' + new Date()[_0x473afc(0x347)](_0x48a1e0(this)[_0x473afc(0x269)](), {
                    'hour12': ![],
                    'second': _0x473afc(0x30d),
                    'minute': _0x473afc(0x30d),
                    'hour': '2-digit',
                    'month': '2-digit',
                    'day': _0x473afc(0x30d),
                    'year': _0x473afc(0x339)
                })[_0x473afc(0x304)]('/', '-')), LOCATE_DATE_FORMAT = _0x48a1e0(this)[_0x473afc(0x269)](), GM_setValue('G_LOCATE_DATE_FORMAT', _0x48a1e0(this)['val']());
            }), _0x48a1e0(_0x3ec08a(0x3d7))['on']('click', _0x3ec08a(0x2a2), function () {
                const _0x3c6287 = _0x3ec08a;
                _0x48a1e0(_0x3c6287(0x37d))[_0x3c6287(0x359)](function () {
                    const _0x44511f = _0x3c6287;
                    _0x48a1e0(this)[_0x44511f(0x3b1)]();
                });
            });
        });
    }, 0x445c);
}(jQuery));