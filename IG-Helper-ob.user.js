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

function a0_0x4467(_0x1e8d14, _0x271429) {
    const _0x3ca4f7 = a0_0x3ca4();
    return a0_0x4467 = function (_0x446721, _0x399bd5) {
        _0x446721 = _0x446721 - 0x180;
        let _0x63da4c = _0x3ca4f7[_0x446721];
        return _0x63da4c;
    }, a0_0x4467(_0x1e8d14, _0x271429);
}
function a0_0x3ca4() {
    const _0x35ab61 = [
        'datetime',
        'x1iyjqo2',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'CLOSE',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'Download\x20Video\x20Thumbnail',
        'floor',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'Request\x20failed\x20with\x20API\x20response\x20',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'push',
        'getBlobMediaWithQueryID()',
        'target',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;',
        '\x22\x20data-ih-locale-title=\x22',
        '.IG_SN_DIG\x20.globalSettings',
        'response',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '<div\x20class=\x22volume_slider\x20',
        'appendChild',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'fadeOut',
        'trigging',
        'relative',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'get',
        'isIntersecting',
        'last',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        '</span>\x20',
        'hd_profile_pic_url_info',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'bottom',
        'children',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'video_url',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '.IG_DWHISTORY_THUMBNAIL',
        '.IG_DWNEWTAB',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'version',
        'canDownload',
        'SKIP_VIEW_STORY_CONFIRM',
        '\x22\x20class=\x22IG_REELS\x22>',
        'slice',
        '__typename',
        'removeAttr',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'muted',
        'isHomepage',
        'preventDefault',
        'label',
        'HTML5_VIDEO_CONTROL',
        '.IG_REELS',
        '</button>',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '</option>',
        'isReels',
        '\x20child',
        'div#splash-screen',
        '#scrollWrapper',
        'show',
        'query_id',
        'log',
        'input',
        'parent',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'SHOW_DOM_TREE',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'NOTICE_UPDATE_CONTENT',
        'logger\x20sliced',
        'DOWNLOAD_DOM_TREE',
        'ALL_CHECK',
        '._acay\x20._acaz',
        'Show\x20DOM\x20Tree',
        'copy',
        'instagram.com/reels/',
        '_ac3q',
        '<a\x20media-id=\x22',
        'query_hash',
        'replaceAll',
        'NOTICE_UPDATE_TITLE',
        'z-index',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'BATCH_DOWNLOAD_DIRECT',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'LOCALE_MANIFEST',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '.IG_DWPROFILE',
        '2iOqcFX',
        '.SNKMS_IG_DW_MAIN',
        'val',
        'createElement',
        'data',
        'next',
        '.IG_REELS_THUMBNAIL',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
        'img',
        'content',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'disconnect',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        '14384728BbEemZ',
        'mp4',
        'hide',
        'body\x20>\x20div\x20section:visible._ac0a',
        'a[href^=\x22/\x22]',
        'getBlobMedia()',
        'addClass',
        'isStory',
        'each',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '\x22\x20/></div>',
        'Debug\x20Window',
        '</div>',
        'canvas._aarh',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        '.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'VID',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'vertical',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'Preference\x20Settings',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'div#scrollview',
        'REPORT_DISCORD',
        'navigator',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'video_versions',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'filter',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'jpg',
        '.IG_DWSTORY_THUMBNAIL',
        '._aagv\x20img',
        'LOAD_BLOB_MULTIPLE',
        'www.',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'startsWith',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'display_resources',
        'div[style][class]',
        '20000',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'image_versions2',
        '%22}',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        '617441htPOjF',
        'data-ih-locale-title',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'padEnd',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        '</span></label>',
        'Reload\x20Script',
        '#tempWrapper',
        'owner',
        'G_LOCATE_DATE_FORMAT',
        '<option\x20value=\x22',
        'getTime',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'Disable\x20Video\x20Auto-looping',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        'volumechange',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        'SETTING',
        'error',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        '[data-ih-locale]',
        'srcset',
        'https://ko-fi.com/snkoarashi',
        'data-loop',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'createObjectURL',
        'DOWNLOAD',
        'loop',
        'FORCE_RESOURCE_VIA_MEDIA',
        'scontent.cdninstagram.com',
        'https://www.instagram.com/reel/',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'onReadyMyDW()\x20Timer',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'div:not([class]):not([style])',
        '\x22\x20datetime=\x22',
        'div',
        'numeric',
        'svg',
        'SCROLL_BUTTON',
        'location',
        'scrollBy',
        '<label\x20class=\x22globalSettings',
        'style',
        'THUMBNAIL_INTRO',
        'reduce',
        'loadstart',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'MODIFY_VIDEO_VOLUME',
        '</a>',
        'Feedback\x20Options',
        '._acnb',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'getPostOwner()',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'forEach',
        'img[referrerpolicy]',
        'parents',
        'https://www.instagram.com/p/',
        'assign',
        'div[class][role=\x22button\x22]',
        'getStories()',
        'parse',
        'li._acaz',
        '\x22]\x20span',
        'G_CHECK_TIMESTAMP',
        'GraphVideo',
        'cursor',
        'modify',
        'Display\x20HTML5\x20Video\x20Controller',
        '/accounts/login',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'Download\x20All\x20Resources',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'Checking\x20for\x20Updates',
        'Settings',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '</div></div>',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        '.IG_REELS_NEWTAB',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'fail',
        'removeClass',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        'getMonth',
        'https://www.instagram.com/',
        'x1s85apg',
        'div\x20>\x20ul\x20li._acaz',
        'which',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        '2473345msVJkU',
        'taken_at_timestamp',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'top',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'getHighlightStories()',
        'script[type=\x22application/json\x22]',
        '\x22\x20title=\x22',
        'data-ih-locale',
        '4373405PipGIh',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'undefined',
        'G_RENAME_FORMAT',
        'G_VIDEO_VOLUME',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'script',
        'first',
        'candidates',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'INTERNAL_CSS',
        'xdt_api__v1__media__shortcode__web_info',
        'timeupdate',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'updatenotification',
        'SELECT_AND_COPY',
        'src',
        'finalUrl',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'ig_cache_key',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'highlight',
        'stringify',
        'checked',
        '\x0a-----\x0a\x0aLocation:\x20',
        'pause',
        'keyCode',
        'data-type',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'body',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'text',
        'time',
        'after',
        '\x22><span\x20data-ih-locale=\x22',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'Found\x20insert\x20point',
        'altKey',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'before',
        'button[role=\x22menuitem\x22]',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'a[href^=\x22/p/\x22]',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'reels',
        'html',
        'REPORT_FORK',
        'type',
        'mousedown',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'NO_VID_URL',
        'catch',
        'controls',
        'Select\x20All',
        'thumbnail',
        '/info/',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'Download\x20Selected\x20Resources',
        'NONE',
        'code',
        'NEW_TAB',
        ':hidden',
        'DIV',
        'Remote\x20version:\x20',
        'x1lix1fw',
        'language',
        'highlights',
        'tagName',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        'data-remove-thumbnail',
        'carousel_media',
        '37px',
        'object',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'faild',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'username',
        'setAttribute',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'is_video',
        'THUMBNAIL',
        'RELOAD_SCRIPT',
        'data-snig',
        'innerHTML',
        'ended',
        'DONATE',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        '13681377LmqETf',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'Main\x20Timer',
        'avatar',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '_INTRO',
        'play\x20playing',
        '610LPNoym',
        'data-completed',
        'data-name',
        'Can\x20not\x20find\x20download\x20url.',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        'profile_pic_url',
        'message',
        'modify-thumbnail',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'shortcode',
        '.IG_SN_DIG\x20input',
        'user',
        'reject',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'Feedback',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'hasClass',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '</p>',
        'video_resources',
        'match',
        'pointer',
        'CHECK_UPDATE_MENU',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'toLowerCase',
        '._acay',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'keydown',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'div.volume_slider',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'NO_CHECK_RESOURCE',
        'userAgent',
        'Current\x20version:\x20',
        'download',
        'GM_unregisterMenuCommand',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'hidden',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        'getUserId()',
        '</a></button><br/>',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '#locatePreview',
        'stories',
        '331463aGjKLR',
        'Donate',
        'video[class]',
        'smooth',
        'toString',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        '.IG_DWHINEWTAB',
        'https://www.instagram.com/web/search/topsearch/?query=',
        '--ig-track-progress:\x20',
        'video\x20+\x20div\x20>\x20div',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'Checking\x20for\x20Script\x20Updates',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'text/plain',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'wrap',
        'padStart',
        '.IG_SN_DIG\x20#post_info',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'then',
        'keys',
        'Manually\x20inserting\x20thumbnail\x20button',
        'height',
        'post',
        'isProfile',
        'video',
        'edges',
        'div:last-child',
        'Cannot\x20find\x20video\x20URL.',
        'REPORT_GITHUB',
        '2-digit',
        'px;top:',
        'FORCE_FETCH_ALL_RESOURCES',
        'NOPATH',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'GET',
        '[role=\x22button\x22]',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'regenerated',
        'DISABLE_VIDEO_LOOPING',
        'includes',
        'className',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'AUTO_RENAME',
        'hasReferrer',
        'getUserHighSizeProfile()',
        'getBlobMediaWithQuery()',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'Download',
        '8rhpWtA',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'reel',
        'body\x20>\x20div\x20section._ac0a',
        'taken_at',
        'Open\x20in\x20New\x20Tab',
        '<div></div>',
        'position',
        'reels_media',
        'host',
        '0px',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '_blank',
        'contextmenu',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'data-path',
        'DIRECT_DOWNLOAD_ALL',
        'split',
        'feedback_message',
        'div[role=\x22presentation\x22]',
        'getUserIdWithAgent()',
        'shortcode_media',
        'append',
        'items',
        'range',
        'users',
        'mouseenter',
        'div[id^=\x22mount\x22]',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'px;\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'prev',
        'pathname',
        'data-modify-thumbnail',
        'Close',
        'getMinutes',
        'data-username',
        'https://i.instagram.com/api/v1/media/',
        'node',
        'main\x20timer\x20re-register\x20completed',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '.IG_SN_DIG',
        'Wololo!\x20New\x20version\x20released.',
        'DOMTree-',
        'url',
        'remove',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'load',
        'data-controls',
        '.json',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'downloadURL',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        '<a\x20datetime=\x22',
        '.IG_DWHISTORY',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'addedNodes',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'attr',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'getMediaInfo()',
        'prop',
        'href',
        'length',
        '1875534rXUoCS',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '._acay\x20+\x20.x24i39r',
        '\x22\x20data-globalIndex=\x22',
        'css',
        '.videoThumbnail',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        '.IG_DWSTORY',
        'lang',
        '6afVKgJ',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'ig_helper_notice',
        'Logger:\x0a',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        '#_SNLOAD',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'media-id',
        'absolute',
        'RENAME_PUBLISH_DATE',
        'Loading\x20Blob\x20Media...',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        '.txt',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'click',
        'join',
        'video\x20volume\x20changed\x20#slider',
        'en-US',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'class',
        'width',
        'DEBUG',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'display_url',
        'status',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '<input\x20value=\x22',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'remove-thumbnail',
        'isHighlightsStory',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'find',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'data-href',
        'Fetch\x20from\x20memory\x20cache:',
        '\x22\x20/>',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        '_acnb',
        '<p\x20id=\x22_SNLOAD\x22>',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'toISOString',
        'Found\x20post\x20container',
        'title',
        'div.volume_slider\x20input',
        '\x20-</a>',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'FEEDBACK',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        '</a></button>',
        'getDate',
        'BATCH_DOWNLOAD_SELECTED',
        '[data-ih-locale-title]',
        'replace',
        'toLocaleString',
        'GraphImage',
        'IMG',
        'getTranslationText()',
        'sort',
        'stopPropagation',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'observe',
        'change',
        'volume',
        'Image',
        'blob'
    ];
    a0_0x3ca4 = function () {
        return _0x35ab61;
    };
    return a0_0x3ca4();
}
(function (_0x220bbc, _0x1f68cb) {
    const _0x532aef = a0_0x4467, _0x1bfbda = _0x220bbc();
    while (!![]) {
        try {
            const _0x4d084c = -parseInt(_0x532aef(0x1b4)) / 0x1 * (-parseInt(_0x532aef(0x3e3)) / 0x2) + parseInt(_0x532aef(0x329)) / 0x3 * (parseInt(_0x532aef(0x2e6)) / 0x4) + -parseInt(_0x532aef(0x21c)) / 0x5 * (-parseInt(_0x532aef(0x334)) / 0x6) + -parseInt(_0x532aef(0x212)) / 0x7 + -parseInt(_0x532aef(0x182)) / 0x8 + -parseInt(_0x532aef(0x279)) / 0x9 + parseInt(_0x532aef(0x280)) / 0xa * (parseInt(_0x532aef(0x2b1)) / 0xb);
            if (_0x4d084c === _0x1f68cb)
                break;
            else
                _0x1bfbda['push'](_0x1bfbda['shift']());
        } catch (_0x3e08e4) {
            _0x1bfbda['push'](_0x1bfbda['shift']());
        }
    }
}(a0_0x3ca4, 0xdded4), function (_0x3138b3) {
    setTimeout(() => {
        'use strict';
        const _0x4e984e = a0_0x4467;
        const _0x2a78cf = {
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
            }, _0x35d48f = [
                _0x4e984e(0x33f),
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
                _0x4e984e(0x190)
            ];
        var _0x4821da = GM_getValue(_0x4e984e(0x221)) ? GM_getValue(_0x4e984e(0x221)) : 0x1, _0x375a7b = ![], _0x2a2a9d = GM_getValue(_0x4e984e(0x220)) ? GM_getValue(_0x4e984e(0x220)) : _0x4e984e(0x2bf);
        const _0x209a06 = {
                'DOWNLOAD': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
                'NEW_TAB': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
                'THUMBNAIL': _0x4e984e(0x382),
                'CLOSE': _0x4e984e(0x339)
            }, _0x4a012e = 0xfa, _0x391421 = GM_getResourceText(_0x4e984e(0x228)), _0x2f87d2 = JSON[_0x4e984e(0x1f3)](GM_getResourceText(_0x4e984e(0x3de)));
        var _0x108075 = [], _0x3338e6 = {}, _0x11ed9d = GM_getValue(_0x4e984e(0x333)) || navigator[_0x4e984e(0x263)] || navigator['userLanguage'], _0x1e0f52 = location['href'], _0x21e60c = ![], _0x13b01e = ![], _0x5257f7 = [], _0x3745d4, _0x5d6d72, _0xff1329, _0x3572de, _0x167495 = {
                'stories': {},
                'highlights': {}
            }, _0x34dc48 = new MutationObserver(function (_0x2745c0, _0x85d78e) {
                _0x293944();
            });
        _0x51f1f1(), GM_addStyle(_0x391421), _0x309445(), _0x2bb0b1(_0x11ed9d)['then'](_0x410ebf => {
            _0x3338e6[_0x11ed9d] = _0x410ebf, _0x5355db(), _0x309445(), _0xa7c45f(0x12c);
        })[_0x4e984e(0x254)](_0x535214 => {
            const _0x10e0e9 = _0x4e984e;
            _0x309445(), _0xa7c45f(0x12c), !_0x11ed9d[_0x10e0e9(0x1a9)]('en') && console['error']('getTranslationText\x20catch\x20error:', _0x535214);
        });
        var _0x56d980 = setInterval(function () {
            const _0x2af692 = _0x4e984e;
            if (_0x3138b3(_0x2af692(0x3be))[_0x2af692(0x328)] > 0x0 && !_0x3138b3(_0x2af692(0x3be))['is'](_0x2af692(0x25f)) || location['pathname']['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location['hostname'][_0x2af692(0x1a9)](_0x2af692(0x1a7))) {
                _0x13b01e = ![];
                return;
            }
            if (_0x1e0f52 != location[_0x2af692(0x327)] || !_0x21e60c || !_0x13b01e) {
                console[_0x2af692(0x3c2)](_0x2af692(0x27b), _0x2af692(0x393)), clearInterval(_0x3572de), _0x13b01e = ![], _0x21e60c = !![], _0x1e0f52 = location[_0x2af692(0x327)], _0x34dc48[_0x2af692(0x180)]();
                if (location[_0x2af692(0x327)][_0x2af692(0x1a9)](_0x2af692(0x1ef)) || location[_0x2af692(0x306)][_0x2af692(0x298)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x2af692(0x327)][_0x2af692(0x1a9)](_0x2af692(0x1d3))) {
                    _0x167495[_0x2af692(0x2b0)] = {}, _0x167495[_0x2af692(0x264)] = {}, _0x23a56a('isDialog');
                    var _0x2a6807 = setInterval(() => {
                        const _0x3adbab = _0x2af692;
                        _0x3138b3(_0x3adbab(0x290))[_0x3adbab(0x328)] > 0x0 && (clearInterval(_0x2a6807), setTimeout(() => {
                            _0x293944(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x13b01e = !![];
                }
                location[_0x2af692(0x327)][_0x2af692(0x1a9)]('https://www.instagram.com/reels/') && (_0x23a56a(_0x2af692(0x3bc)), setTimeout(() => {
                    _0xb21785(![]);
                }, 0x96), _0x13b01e = !![]);
                if (location[_0x2af692(0x327)][_0x2af692(0x2f7)]('?')[0x0] == _0x2af692(0x20d)) {
                    _0x167495[_0x2af692(0x2b0)] = {}, _0x167495[_0x2af692(0x264)] = {};
                    let _0x3ef6db = _0x3745d4?.[_0x2af692(0x298)](/^\/(stories|highlights)\//ig) != null;
                    _0x23a56a(_0x2af692(0x3b1), _0x3ef6db), setTimeout(() => {
                        const _0xb67a0f = _0x2af692;
                        _0x293944(![], _0x3ef6db);
                        const _0x5e54f8 = _0x3138b3(_0xb67a0f(0x3c8))?.[_0xb67a0f(0x3c4)]()[0x0];
                        _0x5e54f8 && _0x34dc48[_0xb67a0f(0x375)](_0x5e54f8, { 'childList': !![] });
                    }, 0x96), _0x13b01e = !![];
                }
                _0x3138b3(_0x2af692(0x28f))[_0x2af692(0x328)] && location[_0x2af692(0x306)][_0x2af692(0x298)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x2af692(0x306)][_0x2af692(0x298)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x23a56a(_0x2af692(0x2c9)), setTimeout(() => {
                    _0x4502fd(![]);
                }, 0x96), _0x13b01e = !![]);
                if (!_0x13b01e) {
                    if (location[_0x2af692(0x327)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig)) {
                        _0x167495[_0x2af692(0x264)] = {}, _0x23a56a(_0x2af692(0x355)), _0x22d458(![]), _0x3572de = setInterval(() => {
                            _0x2e41f4(![]);
                        }, _0x4a012e);
                        _0x3138b3(_0x2af692(0x31e))['length'] && setTimeout(() => {
                            const _0x18176c = _0x2af692;
                            if (_0x2a78cf[_0x18176c(0x3aa)]) {
                                var _0x2e1f0f = _0x3138b3(_0x18176c(0x26d))[_0x18176c(0x1a1)](function () {
                                    const _0x47a568 = _0x18176c;
                                    return _0x3138b3(this)[_0x47a568(0x3a1)]()['length'] === 0x0;
                                });
                                _0x2e1f0f?.[_0x18176c(0x345)]();
                            }
                            _0x13b01e = !![];
                        }, 0x96);
                        ;
                    } else
                        location[_0x2af692(0x327)][_0x2af692(0x298)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x23a56a(_0x2af692(0x189)), _0x3138b3(_0x2af692(0x21d))[_0x2af692(0x328)] > 0x0 && (_0x3138b3(_0x2af692(0x332))[_0x2af692(0x314)](), _0x3138b3('.IG_DWNEWTAB')['remove'](), _0x3138b3(_0x2af692(0x1a4))['length'] && _0x3138b3('.IG_DWSTORY_THUMBNAIL')[_0x2af692(0x314)](), _0x442afe(![]), setTimeout(() => {
                            _0x442afe(![]);
                        }, 0x96)), _0x3138b3(_0x2af692(0x332))['length'] && setTimeout(() => {
                            const _0x410af0 = _0x2af692;
                            if (_0x2a78cf[_0x410af0(0x3aa)]) {
                                var _0x2cf663 = _0x3138b3(_0x410af0(0x26d))[_0x410af0(0x1a1)](function () {
                                    const _0x5a7ba2 = _0x410af0;
                                    return _0x3138b3(this)[_0x5a7ba2(0x3a1)]()[_0x5a7ba2(0x328)] === 0x0;
                                });
                                _0x2cf663?.[_0x410af0(0x345)]();
                            }
                            _0x13b01e = !![];
                        }, 0x96)) : (_0x13b01e = ![], _0x3138b3('.IG_DWSTORY')[_0x2af692(0x328)] && _0x3138b3(_0x2af692(0x332))[_0x2af692(0x314)](), _0x3138b3('.IG_DWNEWTAB')[_0x2af692(0x328)] && _0x3138b3('.IG_DWNEWTAB')[_0x2af692(0x314)](), _0x3138b3('.IG_DWSTORY_THUMBNAIL')[_0x2af692(0x328)] && _0x3138b3(_0x2af692(0x1a4))[_0x2af692(0x314)](), _0x3138b3(_0x2af692(0x31e))[_0x2af692(0x328)] && _0x3138b3(_0x2af692(0x31e))[_0x2af692(0x314)](), _0x3138b3('.IG_DWHINEWTAB')['length'] && _0x3138b3(_0x2af692(0x2b7))[_0x2af692(0x314)](), _0x3138b3(_0x2af692(0x3a5))[_0x2af692(0x328)] && _0x3138b3('.IG_DWHISTORY_THUMBNAIL')[_0x2af692(0x314)]());
                }
                _0xa7c45f(0x12c), _0x3745d4 = new URL(location[_0x2af692(0x327)])[_0x2af692(0x306)];
            }
        }, _0x4a012e);
        async function _0x4502fd(_0x5ae55a) {
            const _0x57579c = _0x4e984e;
            if (_0x5ae55a) {
                _0x742b06(!![]);
                let _0x61c9b7 = new Date()['getTime'](), _0x959ca5 = Math[_0x57579c(0x380)](_0x61c9b7 / 0x3e8), _0x4a27e7 = location[_0x57579c(0x306)][_0x57579c(0x3d7)](/(reels|tagged)\/$/ig, '')[_0x57579c(0x2f7)]('/')[_0x57579c(0x1a1)](_0x58c424 => _0x58c424[_0x57579c(0x328)] > 0x0)['at'](-0x1), _0x494ae7 = await _0x22aafa(_0x4a27e7);
                try {
                    let _0x347fea = await _0x3e8b99(_0x494ae7[_0x57579c(0x28d)]['pk']);
                    _0x16d33f(_0x347fea, _0x4a27e7, _0x57579c(0x27c), _0x959ca5, _0x57579c(0x1a3));
                } catch (_0x124244) {
                    _0x16d33f(_0x494ae7[_0x57579c(0x28d)][_0x57579c(0x286)], _0x4a27e7, _0x57579c(0x27c), _0x959ca5, _0x57579c(0x1a3));
                }
                _0x742b06(![]);
            } else {
                if (!_0x3138b3(_0x57579c(0x3e2))[_0x57579c(0x328)]) {
                    let _0x36067b = setInterval(() => {
                        const _0x17e43a = _0x57579c;
                        if (_0x3138b3(_0x17e43a(0x3e2))[_0x17e43a(0x328)]) {
                            clearInterval(_0x36067b);
                            return;
                        }
                        _0x3138b3(_0x17e43a(0x3b9))[_0x17e43a(0x3c4)]()[_0x17e43a(0x3c4)]()[_0x17e43a(0x2fc)](_0x17e43a(0x32f) + _0x1e06fc('DW') + _0x17e43a(0x1ab) + _0x209a06[_0x17e43a(0x1cf)] + '</div>'), _0x3138b3('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')[_0x17e43a(0x3c4)]()[_0x17e43a(0x3c4)]()[_0x17e43a(0x32d)](_0x17e43a(0x2ed), _0x17e43a(0x394)), _0x3138b3(_0x17e43a(0x3ba))[_0x17e43a(0x3c4)]()[_0x17e43a(0x3c4)]()[_0x17e43a(0x3c4)]()[_0x17e43a(0x2fc)](_0x17e43a(0x32f) + _0x1e06fc('DW') + _0x17e43a(0x1ab) + _0x209a06[_0x17e43a(0x1cf)] + '</div>'), _0x3138b3(_0x17e43a(0x3ba))[_0x17e43a(0x3c4)]()['parent']()['parent']()[_0x17e43a(0x32d)](_0x17e43a(0x2ed), _0x17e43a(0x394));
                    }, 0x96);
                }
            }
        }
        async function _0x22d458(_0x237744, _0x24a368) {
            const _0x12d333 = _0x4e984e;
            if (_0x237744) {
                let _0x5c4fa0 = new Date()[_0x12d333(0x1bf)](), _0x5943bc = Math[_0x12d333(0x380)](_0x5c4fa0 / 0x3e8), _0x5c5f14 = location[_0x12d333(0x327)][_0x12d333(0x36d)](/\/$/ig, '')[_0x12d333(0x2f7)]('/')['at'](-0x1), _0x388e8c = _0x3138b3(_0x12d333(0x2e7))[_0x12d333(0x328)] || _0x3138b3(_0x12d333(0x2a3))[_0x12d333(0x328)] || _0x3138b3('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x12d333(0x357)](_0x12d333(0x27d))[_0x12d333(0x328)], _0x137c11 = '', _0x2ed2dd = 0x0;
                _0x742b06(!![]);
                if (_0x167495[_0x12d333(0x264)][_0x5c5f14]) {
                    _0x23a56a(_0x12d333(0x35b), _0x5c5f14);
                    let _0x56658a = _0x167495[_0x12d333(0x264)][_0x5c5f14][_0x12d333(0x3e7)]['reels_media'][0x0]['items'][_0x12d333(0x328)];
                    _0x137c11 = _0x167495[_0x12d333(0x264)][_0x5c5f14][_0x12d333(0x3e7)][_0x12d333(0x2ee)][0x0][_0x12d333(0x1bc)]['username'], _0x2ed2dd = _0x167495[_0x12d333(0x264)][_0x5c5f14]['data'][_0x12d333(0x2ee)][0x0][_0x12d333(0x2fd)][_0x56658a - _0x388e8c];
                } else {
                    let _0x3915ea = await _0x34fdd2(_0x5c5f14), _0x1d2b2e = _0x3915ea[_0x12d333(0x3e7)][_0x12d333(0x2ee)][0x0][_0x12d333(0x2fd)]['length'];
                    _0x137c11 = _0x3915ea[_0x12d333(0x3e7)][_0x12d333(0x2ee)][0x0]['owner']['username'], _0x2ed2dd = _0x3915ea[_0x12d333(0x3e7)]['reels_media'][0x0]['items'][_0x1d2b2e - _0x388e8c], _0x167495[_0x12d333(0x264)][_0x5c5f14] = _0x3915ea;
                }
                _0x2a78cf[_0x12d333(0x33f)] && (_0x5943bc = _0x2ed2dd[_0x12d333(0x213)]);
                if (_0x2a78cf['FORCE_RESOURCE_VIA_MEDIA'] && !_0x375a7b) {
                    let _0x48da41 = await _0x25e69e(_0x2ed2dd['id']);
                    _0x48da41['status'] === 'ok' ? _0x48da41['items'][0x0]['video_versions'] ? _0x24a368 ? _0x225d2e(_0x48da41['items'][0x0][_0x12d333(0x19f)][0x0][_0x12d333(0x313)]) : _0x16d33f(_0x48da41[_0x12d333(0x2fd)][0x0][_0x12d333(0x19f)][0x0][_0x12d333(0x313)], _0x137c11, _0x12d333(0x264), _0x5943bc, _0x12d333(0x183), _0x5c5f14) : _0x24a368 ? _0x225d2e(_0x48da41[_0x12d333(0x2fd)][0x0][_0x12d333(0x1b1)][_0x12d333(0x225)][0x0][_0x12d333(0x313)]) : _0x16d33f(_0x48da41[_0x12d333(0x2fd)][0x0][_0x12d333(0x1b1)][_0x12d333(0x225)][0x0]['url'], _0x137c11, _0x12d333(0x264), _0x5943bc, _0x12d333(0x1a3), _0x5c5f14) : (_0x2a78cf[_0x12d333(0x3ea)] ? (delete _0x167495[_0x12d333(0x264)][_0x5c5f14], _0x375a7b = !![], _0x22d458(!![], _0x24a368)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x48da41[_0x12d333(0x287)]), _0x23a56a(_0x48da41));
                } else
                    _0x2ed2dd[_0x12d333(0x271)] ? _0x24a368 ? _0x225d2e(_0x2ed2dd['video_resources']['at'](-0x1)[_0x12d333(0x22e)], _0x137c11) : _0x16d33f(_0x2ed2dd[_0x12d333(0x297)]['at'](-0x1)[_0x12d333(0x22e)], _0x137c11, _0x12d333(0x264), _0x5943bc, 'mp4', _0x5c5f14) : _0x24a368 ? _0x225d2e(_0x2ed2dd['display_resources']['at'](-0x1)[_0x12d333(0x22e)], _0x137c11) : _0x16d33f(_0x2ed2dd[_0x12d333(0x1ad)]['at'](-0x1)['src'], _0x137c11, _0x12d333(0x264), _0x5943bc, _0x12d333(0x1a3), _0x5c5f14), _0x375a7b = ![];
                _0x742b06(![]);
            } else {
                if (!_0x3138b3(_0x12d333(0x31e))[_0x12d333(0x328)]) {
                    let _0x2e5cea = null;
                    _0x3138b3('body\x20>\x20div\x20section._ac0a')[_0x12d333(0x328)] > 0x0 ? _0x2e5cea = _0x3138b3(_0x12d333(0x185)) : (_0x2e5cea = _0x3138b3(_0x12d333(0x3a7)), _0x2e5cea[_0x12d333(0x32d)](_0x12d333(0x2ed), 'relative'));
                    if (_0x2e5cea['length'] === 0x0) {
                        let _0x4a68fa = _0x3138b3(_0x12d333(0x3e1)), _0xa2a3e3 = 0x0;
                        _0x4a68fa['each'](function () {
                            const _0x2663ce = _0x12d333;
                            _0x3138b3(this)[_0x2663ce(0x34b)]() > _0xa2a3e3 && (_0xa2a3e3 = _0x3138b3(this)[_0x2663ce(0x34b)](), _0x2e5cea = _0x3138b3(this)[_0x2663ce(0x3a1)](_0x2663ce(0x1d9))[_0x2663ce(0x224)]());
                        });
                    }
                    _0x2e5cea != null && (_0x2e5cea[_0x12d333(0x2fc)](_0x12d333(0x32f) + _0x1e06fc('DW') + _0x12d333(0x27a) + _0x209a06['DOWNLOAD'] + _0x12d333(0x18e)), _0x2e5cea[_0x12d333(0x2fc)](_0x12d333(0x2df) + _0x1e06fc(_0x12d333(0x25e)) + _0x12d333(0x2f1) + _0x209a06['NEW_TAB'] + _0x12d333(0x18e)), _0x2e5cea[_0x12d333(0x357)](_0x12d333(0x1ed))['each'](function () {
                        _0x3138b3(this)['on']('load', function () {
                            const _0x3cd18e = a0_0x4467;
                            !_0x3138b3(this)['data'](_0x3cd18e(0x354)) && (_0x2e5cea[_0x3cd18e(0x357)](_0x3cd18e(0x3a5))['length'] === 0x0 ? (_0x3138b3(this)['attr'](_0x3cd18e(0x267), !![]), _0x3138b3(_0x3cd18e(0x3a5))[_0x3cd18e(0x314)](), _0x23a56a('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x3138b3(this)['attr'](_0x3cd18e(0x267), !![]), _0x23a56a(_0x3cd18e(0x251))));
                        });
                    }));
                }
            }
        }
        async function _0x2e41f4(_0x20b0ef) {
            const _0x197c9f = _0x4e984e;
            if (_0x20b0ef) {
                let _0x569163 = new Date()[_0x197c9f(0x1bf)](), _0x409220 = Math[_0x197c9f(0x380)](_0x569163 / 0x3e8), _0x5d9477 = location[_0x197c9f(0x327)][_0x197c9f(0x36d)](/\/$/ig, '')[_0x197c9f(0x2f7)]('/')['at'](-0x1), _0x44c8a2 = '', _0x9dce7c = _0x3138b3(_0x197c9f(0x2e7))['length'] || _0x3138b3('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x197c9f(0x328)] || _0x3138b3(_0x197c9f(0x26b))['find'](_0x197c9f(0x27d))['length'], _0x3ce92b = '';
                _0x742b06(!![]);
                if (_0x167495[_0x197c9f(0x264)][_0x5d9477]) {
                    _0x23a56a(_0x197c9f(0x35b), _0x5d9477);
                    let _0x4d3045 = _0x167495[_0x197c9f(0x264)][_0x5d9477][_0x197c9f(0x3e7)][_0x197c9f(0x2ee)][0x0][_0x197c9f(0x2fd)]['length'];
                    _0x44c8a2 = _0x167495[_0x197c9f(0x264)][_0x5d9477]['data'][_0x197c9f(0x2ee)][0x0]['owner'][_0x197c9f(0x26e)], _0x3ce92b = _0x167495['highlights'][_0x5d9477][_0x197c9f(0x3e7)][_0x197c9f(0x2ee)][0x0]['items'][_0x4d3045 - _0x9dce7c];
                } else {
                    let _0x31b06f = await _0x34fdd2(_0x5d9477), _0x59fc46 = _0x31b06f[_0x197c9f(0x3e7)]['reels_media'][0x0][_0x197c9f(0x2fd)][_0x197c9f(0x328)];
                    _0x44c8a2 = _0x31b06f[_0x197c9f(0x3e7)][_0x197c9f(0x2ee)][0x0][_0x197c9f(0x1bc)][_0x197c9f(0x26e)], _0x3ce92b = _0x31b06f[_0x197c9f(0x3e7)][_0x197c9f(0x2ee)][0x0]['items'][_0x59fc46 - _0x9dce7c], _0x167495['highlights'][_0x5d9477] = _0x31b06f;
                }
                _0x2a78cf[_0x197c9f(0x33f)] && (_0x409220 = _0x3ce92b[_0x197c9f(0x213)]);
                if (_0x2a78cf[_0x197c9f(0x1d1)] && !_0x375a7b) {
                    let _0x1d71be = await _0x25e69e(_0x3ce92b['id']);
                    _0x1d71be[_0x197c9f(0x34f)] === 'ok' ? _0x16d33f(_0x1d71be['items'][0x0]['image_versions2']['candidates'][0x0][_0x197c9f(0x313)], _0x44c8a2, 'highlights', _0x409220, _0x197c9f(0x1a3), _0x5d9477) : (_0x2a78cf[_0x197c9f(0x3ea)] ? (delete _0x167495[_0x197c9f(0x264)][_0x5d9477], _0x375a7b = !![], _0x2e41f4(!![])) : alert(_0x197c9f(0x29e) + _0x1d71be[_0x197c9f(0x287)]), _0x23a56a(_0x1d71be));
                } else
                    _0x16d33f(_0x3ce92b[_0x197c9f(0x1ad)]['at'](-0x1)['src'], _0x44c8a2, _0x197c9f(0x264), _0x409220, 'jpg', _0x5d9477), _0x375a7b = ![];
                _0x742b06(![]);
            } else {
                if (_0x3138b3(_0x197c9f(0x1b0))[_0x197c9f(0x328)]) {
                    if (!_0x3138b3(_0x197c9f(0x3a5))[_0x197c9f(0x328)]) {
                        let _0x50b452 = null;
                        _0x3138b3(_0x197c9f(0x2e9))['length'] > 0x0 ? _0x50b452 = _0x3138b3(_0x197c9f(0x185)) : (_0x50b452 = _0x3138b3(_0x197c9f(0x3a7)), _0x50b452[_0x197c9f(0x32d)](_0x197c9f(0x2ed), _0x197c9f(0x394)));
                        if (_0x50b452[_0x197c9f(0x328)] === 0x0) {
                            let _0x33d8a9 = _0x3138b3(_0x197c9f(0x3e1)), _0x5a1b6c = 0x0;
                            _0x33d8a9['each'](function () {
                                const _0x2497d0 = _0x197c9f;
                                _0x3138b3(this)[_0x2497d0(0x34b)]() > _0x5a1b6c && (_0x5a1b6c = _0x3138b3(this)[_0x2497d0(0x34b)](), _0x50b452 = _0x3138b3(this)['children']('div')['first']());
                            });
                        }
                        _0x50b452 != null && _0x50b452['append'](_0x197c9f(0x1cd) + _0x1e06fc(_0x197c9f(0x1e1)) + _0x197c9f(0x30e) + _0x209a06[_0x197c9f(0x272)] + _0x197c9f(0x18e));
                    }
                } else
                    _0x3138b3(_0x197c9f(0x3a5))[_0x197c9f(0x314)]();
            }
        }
        async function _0x442afe(_0x165ee2, _0x3541dc, _0x5c69ea) {
            const _0x1f96d7 = _0x4e984e;
            if (_0x165ee2) {
                let _0x185623 = new Date()[_0x1f96d7(0x1bf)](), _0x2e2b46 = Math[_0x1f96d7(0x380)](_0x185623 / 0x3e8), _0x34938c = _0x3138b3(_0x1f96d7(0x2de))[_0x1f96d7(0x224)]()[_0x1f96d7(0x23f)]() || location[_0x1f96d7(0x306)][_0x1f96d7(0x2f7)]('/')[_0x1f96d7(0x1a1)](_0x86f8ca => _0x86f8ca[_0x1f96d7(0x328)] > 0x0)['at'](0x1);
                _0x742b06(!![]);
                if (_0x2a78cf[_0x1f96d7(0x1d1)] && !_0x375a7b) {
                    let _0x1cf963 = null, _0x12f9cd = await _0x22aafa(_0x34938c), _0x4fa450 = _0x12f9cd[_0x1f96d7(0x28d)]['pk'], _0x38a1f9 = await _0x40739d(_0x4fa450), _0xd9a627 = location[_0x1f96d7(0x306)][_0x1f96d7(0x2f7)]('/')['filter'](_0x5c3912 => _0x5c3912['length'] > 0x0 && _0x5c3912['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x38a1f9[_0x1f96d7(0x3e7)]['reels_media'][0x0][_0x1f96d7(0x2fd)][_0x1f96d7(0x1ec)](_0x5d6214 => {
                        _0x5d6214['id'] == _0xd9a627 && (_0x1cf963 = _0x5d6214['id']);
                    });
                    if (_0x1cf963 == null) {
                        let _0x42e654 = _0x3138b3(_0x1f96d7(0x343) + _0x34938c + '\x22]\x20span')[_0x1f96d7(0x1a1)](function () {
                            const _0x4d339d = _0x1f96d7;
                            return _0x3138b3(this)['children']()[_0x4d339d(0x328)] === 0x0 && _0x3138b3(this)['find']('svg')['length'] === 0x0 && _0x3138b3(this)['text']()?.[_0x4d339d(0x29c)]() === _0x34938c?.[_0x4d339d(0x29c)]();
                        })[_0x1f96d7(0x1ee)]('div:not([class]):not([style])')[_0x1f96d7(0x1a1)](function () {
                            const _0x2923ea = _0x1f96d7;
                            return _0x3138b3(this)[_0x2923ea(0x23f)]()?.['toLowerCase']() !== _0x34938c?.[_0x2923ea(0x29c)]();
                        })[_0x1f96d7(0x1a1)](function () {
                            return _0x3138b3(this)['children']()['length'] > 0x1;
                        })['first']();
                        _0x42e654[_0x1f96d7(0x3a1)]()[_0x1f96d7(0x1a1)](function () {
                            const _0x1984d7 = _0x1f96d7;
                            return _0x3138b3(this)[_0x1984d7(0x2c7)]() < 0xa;
                        })[_0x1f96d7(0x224)]()[_0x1f96d7(0x3a1)]()[_0x1f96d7(0x18a)](function (_0x40f9d4) {
                            const _0x3d9101 = _0x1f96d7;
                            _0x3138b3(this)[_0x3d9101(0x3a1)]()[_0x3d9101(0x328)] > 0x0 && (_0x1cf963 = _0x38a1f9[_0x3d9101(0x3e7)]['reels_media'][0x0][_0x3d9101(0x2fd)][_0x40f9d4]['id']);
                        });
                    }
                    _0x1cf963 == null && (_0x3138b3('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x1f96d7(0x18a)](function (_0x536a4c) {
                        const _0x466a4 = _0x1f96d7;
                        _0x3138b3(this)[_0x466a4(0x294)](_0x466a4(0x262)) && (_0x3138b3(this)['children']()['length'] > 0x0 && (_0x1cf963 = _0x38a1f9['data']['reels_media'][0x0]['items'][_0x536a4c]['id']));
                    }), _0x3138b3(_0x1f96d7(0x399))[_0x1f96d7(0x18a)](function (_0x38ee77) {
                        const _0x4be6ba = _0x1f96d7;
                        _0x3138b3(this)['children']()[_0x4be6ba(0x294)](_0x4be6ba(0x3d4)) && (_0x1cf963 = _0x38a1f9[_0x4be6ba(0x3e7)][_0x4be6ba(0x2ee)][0x0][_0x4be6ba(0x2fd)][_0x38ee77]['id']);
                    }));
                    _0x1cf963 == null && (_0x1cf963 = location[_0x1f96d7(0x306)][_0x1f96d7(0x2f7)]('/')[_0x1f96d7(0x1a1)](_0x1fd716 => _0x1fd716['length'] > 0x0 && _0x1fd716[_0x1f96d7(0x298)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x1ca1dd = await _0x25e69e(_0x1cf963);
                    _0x2a78cf[_0x1f96d7(0x33f)] && (_0x2e2b46 = _0x1ca1dd[_0x1f96d7(0x2fd)][0x0]['taken_at']);
                    _0x1ca1dd[_0x1f96d7(0x34f)] === 'ok' ? _0x1ca1dd[_0x1f96d7(0x2fd)][0x0][_0x1f96d7(0x19f)] ? _0x5c69ea ? _0x225d2e(_0x1ca1dd[_0x1f96d7(0x2fd)][0x0]['video_versions'][0x0][_0x1f96d7(0x313)]) : _0x16d33f(_0x1ca1dd['items'][0x0][_0x1f96d7(0x19f)][0x0][_0x1f96d7(0x313)], _0x34938c, _0x1f96d7(0x2b0), _0x2e2b46, _0x1f96d7(0x183), _0x1cf963) : _0x5c69ea ? _0x225d2e(_0x1ca1dd[_0x1f96d7(0x2fd)][0x0][_0x1f96d7(0x1b1)]['candidates'][0x0]['url']) : _0x16d33f(_0x1ca1dd[_0x1f96d7(0x2fd)][0x0][_0x1f96d7(0x1b1)][_0x1f96d7(0x225)][0x0]['url'], _0x34938c, 'stories', _0x2e2b46, _0x1f96d7(0x1a3), _0x1cf963) : (_0x2a78cf[_0x1f96d7(0x3ea)] ? (_0x375a7b = !![], _0x442afe(_0x165ee2, _0x3541dc, _0x5c69ea)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x1ca1dd[_0x1f96d7(0x287)]), _0x23a56a(_0x1ca1dd));
                    _0x742b06(![]);
                    return;
                }
                if (_0x3138b3(_0x1f96d7(0x366))[_0x1f96d7(0x328)] > 0x0) {
                    let _0x5b5968 = _0x1f96d7(0x183), _0x1224aa = '', _0x50a610 = location[_0x1f96d7(0x306)][_0x1f96d7(0x36d)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x2bec0d = null;
                    if (_0x167495[_0x1f96d7(0x2b0)][_0x34938c] && !_0x3541dc) {
                        _0x23a56a(_0x1f96d7(0x35b), _0x34938c), _0x167495['stories'][_0x34938c]['data'][_0x1f96d7(0x2ee)][0x0][_0x1f96d7(0x2fd)][_0x1f96d7(0x1ec)](_0x371923 => {
                            const _0x3ee681 = _0x1f96d7;
                            _0x371923['id'] == _0x50a610 && (_0x1224aa = _0x371923[_0x3ee681(0x297)][0x0]['src'], _0x2a78cf['RENAME_PUBLISH_DATE'] && (_0x2e2b46 = _0x371923[_0x3ee681(0x213)], _0x2bec0d = _0x371923['id']));
                        });
                        if (_0x1224aa[_0x1f96d7(0x328)] == 0x0) {
                            _0x23a56a(_0x1f96d7(0x246), _0x34938c), _0x442afe(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x407a91 = await _0x22aafa(_0x34938c), _0x3d37f5 = _0x407a91[_0x1f96d7(0x28d)]['pk'], _0x3fb2fa = await _0x40739d(_0x3d37f5);
                        _0x3fb2fa[_0x1f96d7(0x3e7)][_0x1f96d7(0x2ee)][0x0][_0x1f96d7(0x2fd)]['forEach'](_0x56d508 => {
                            const _0x4c99c2 = _0x1f96d7;
                            _0x56d508['id'] == _0x50a610 && (_0x1224aa = _0x56d508[_0x4c99c2(0x297)][0x0][_0x4c99c2(0x22e)], _0x2a78cf[_0x4c99c2(0x33f)] && (_0x2e2b46 = _0x56d508[_0x4c99c2(0x213)], _0x2bec0d = _0x56d508['id']));
                        });
                        if (_0x1224aa['length'] == 0x0) {
                            let _0x5d878c = _0x3138b3(_0x1f96d7(0x343) + _0x34938c + '\x22]\x20span')[_0x1f96d7(0x1a1)](function () {
                                const _0x2f405c = _0x1f96d7;
                                return _0x3138b3(this)[_0x2f405c(0x3a1)]()[_0x2f405c(0x328)] === 0x0 && _0x3138b3(this)[_0x2f405c(0x357)]('svg')[_0x2f405c(0x328)] === 0x0 && _0x3138b3(this)['text']()?.[_0x2f405c(0x29c)]() === _0x34938c?.[_0x2f405c(0x29c)]();
                            })[_0x1f96d7(0x1ee)](_0x1f96d7(0x1d7))[_0x1f96d7(0x1a1)](function () {
                                const _0x25d786 = _0x1f96d7;
                                return _0x3138b3(this)[_0x25d786(0x23f)]()?.[_0x25d786(0x29c)]() !== _0x34938c?.[_0x25d786(0x29c)]();
                            })[_0x1f96d7(0x1a1)](function () {
                                const _0x4d9067 = _0x1f96d7;
                                return _0x3138b3(this)[_0x4d9067(0x3a1)]()[_0x4d9067(0x328)] > 0x1;
                            })['first']();
                            _0x5d878c[_0x1f96d7(0x3a1)]()[_0x1f96d7(0x1a1)](function () {
                                const _0xf58a28 = _0x1f96d7;
                                return _0x3138b3(this)[_0xf58a28(0x2c7)]() < 0xa;
                            })[_0x1f96d7(0x224)]()['children']()[_0x1f96d7(0x18a)](function (_0x305b47) {
                                const _0x579b4c = _0x1f96d7;
                                _0x3138b3(this)[_0x579b4c(0x3a1)]()[_0x579b4c(0x328)] > 0x0 && (_0x1224aa = _0x3fb2fa[_0x579b4c(0x3e7)]['reels_media'][0x0][_0x579b4c(0x2fd)][_0x305b47]['video_resources'][0x0]['src'], _0x2a78cf[_0x579b4c(0x33f)] && (_0x2e2b46 = _0x3fb2fa['data'][_0x579b4c(0x2ee)][0x0]['items'][_0x305b47][_0x579b4c(0x213)], _0x2bec0d = _0x3fb2fa[_0x579b4c(0x3e7)][_0x579b4c(0x2ee)][0x0][_0x579b4c(0x2fd)][_0x305b47]['id']));
                            }), _0x1224aa[_0x1f96d7(0x328)] == 0x0 && (_0x3138b3(_0x1f96d7(0x3c6))[_0x1f96d7(0x18a)](function (_0x3c3d81) {
                                const _0x29d4f6 = _0x1f96d7;
                                _0x3138b3(this)[_0x29d4f6(0x294)](_0x29d4f6(0x262)) && (_0x3138b3(this)[_0x29d4f6(0x3a1)]()['length'] > 0x0 && (_0x1224aa = _0x3fb2fa['data'][_0x29d4f6(0x2ee)][0x0][_0x29d4f6(0x2fd)][_0x3c3d81][_0x29d4f6(0x297)][0x0][_0x29d4f6(0x22e)], _0x2a78cf['RENAME_PUBLISH_DATE'] && (_0x2e2b46 = _0x3fb2fa[_0x29d4f6(0x3e7)][_0x29d4f6(0x2ee)][0x0][_0x29d4f6(0x2fd)][_0x3c3d81][_0x29d4f6(0x213)], _0x2bec0d = _0x3fb2fa['data'][_0x29d4f6(0x2ee)][0x0][_0x29d4f6(0x2fd)][_0x3c3d81]['id'])));
                            }), _0x3138b3(_0x1f96d7(0x399))['each'](function (_0x38eb84) {
                                const _0x216a94 = _0x1f96d7;
                                _0x3138b3(this)[_0x216a94(0x3a1)]()['hasClass'](_0x216a94(0x3d4)) && (_0x1224aa = _0x3fb2fa['data'][_0x216a94(0x2ee)][0x0][_0x216a94(0x2fd)][_0x38eb84][_0x216a94(0x297)][0x0][_0x216a94(0x22e)], _0x2a78cf[_0x216a94(0x33f)] && (_0x2e2b46 = _0x3fb2fa[_0x216a94(0x3e7)][_0x216a94(0x2ee)][0x0][_0x216a94(0x2fd)][_0x38eb84]['taken_at_timestamp'], _0x2bec0d = _0x3fb2fa[_0x216a94(0x3e7)]['reels_media'][0x0][_0x216a94(0x2fd)][_0x38eb84]['id']));
                            }));
                        }
                        _0x167495[_0x1f96d7(0x2b0)][_0x34938c] = _0x3fb2fa;
                    }
                    _0x1224aa[_0x1f96d7(0x328)] == 0x0 ? alert(_0x1e06fc(_0x1f96d7(0x253))) : _0x5c69ea ? _0x225d2e(_0x1224aa) : _0x16d33f(_0x1224aa, _0x34938c, _0x1f96d7(0x2b0), _0x2e2b46, _0x5b5968, _0x2bec0d);
                } else {
                    let _0x4ffe9f = _0x3138b3(_0x1f96d7(0x324))[_0x1f96d7(0x323)]('srcset')?.[_0x1f96d7(0x2f7)](',')[0x0]?.[_0x1f96d7(0x2f7)]('\x20')[0x0], _0x4fb9e4 = _0x4ffe9f ? _0x4ffe9f : _0x3138b3(_0x1f96d7(0x324))[_0x1f96d7(0x1a1)](function () {
                            const _0x35371f = _0x1f96d7;
                            return _0x3138b3(this)['parents']('a')[_0x35371f(0x328)] === 0x0 && _0x3138b3(this)[_0x35371f(0x34b)]() === _0x3138b3(this)['parent']()[_0x35371f(0x34b)]();
                        })[_0x1f96d7(0x323)]('src');
                    if (!_0x4fb9e4) {
                        let _0x559c5a = _0x3138b3(_0x1f96d7(0x2a9));
                        _0x4fb9e4 = _0x559c5a[_0x1f96d7(0x323)](_0x1f96d7(0x1ca)) ? _0x559c5a['attr'](_0x1f96d7(0x1ca))?.['split'](',')[0x0]?.[_0x1f96d7(0x2f7)]('\x20')[0x0] : _0x559c5a[_0x1f96d7(0x323)](_0x1f96d7(0x22e));
                    }
                    _0x2a78cf[_0x1f96d7(0x33f)] && (_0x2e2b46 = new Date(_0x3138b3(_0x1f96d7(0x341))[_0x1f96d7(0x224)]()[_0x1f96d7(0x323)]('datetime'))[_0x1f96d7(0x1bf)]());
                    let _0x2eb0f8 = _0x4fb9e4, _0x677369 = _0x1f96d7(0x1a3);
                    _0x5c69ea ? _0x225d2e(_0x2eb0f8) : _0x16d33f(_0x2eb0f8, _0x34938c, 'stories', _0x2e2b46, _0x677369, _0x5c4f77(_0x2eb0f8) ?? '');
                }
                _0x375a7b = ![], _0x742b06(![]);
            } else {
                let _0x5db984 = _0x1f96d7(0x1c3);
                if (!_0x3138b3(_0x1f96d7(0x332))[_0x1f96d7(0x328)]) {
                    _0x167495[_0x1f96d7(0x2b0)] = {};
                    let _0x38045e = null;
                    _0x3138b3(_0x1f96d7(0x2e9))[_0x1f96d7(0x328)] > 0x0 ? _0x38045e = _0x3138b3(_0x1f96d7(0x185)) : (_0x38045e = _0x3138b3(_0x1f96d7(0x3a7)), _0x38045e[_0x1f96d7(0x32d)](_0x1f96d7(0x2ed), _0x1f96d7(0x394)));
                    _0x38045e[_0x1f96d7(0x328)] === 0x0 && (_0x38045e = _0x3138b3(_0x1f96d7(0x21d))[_0x1f96d7(0x3c4)]()['parent']()[_0x1f96d7(0x3c4)]()[_0x1f96d7(0x357)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x38045e['css'](_0x1f96d7(0x2ed), _0x1f96d7(0x394)));
                    _0x38045e[_0x1f96d7(0x328)] === 0x0 && (_0x38045e = _0x3138b3('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x1f96d7(0x3c4)]()[_0x1f96d7(0x3c4)]()[_0x1f96d7(0x3c4)]()[_0x1f96d7(0x357)](_0x1f96d7(0x321)), _0x38045e['css'](_0x1f96d7(0x2ed), _0x1f96d7(0x394)));
                    if (_0x38045e[_0x1f96d7(0x328)] === 0x0) {
                        let _0x5e1ee6 = _0x3138b3(_0x1f96d7(0x3e1)), _0x422424 = 0x0;
                        _0x5e1ee6[_0x1f96d7(0x18a)](function () {
                            const _0x15fe6a = _0x1f96d7;
                            _0x3138b3(this)[_0x15fe6a(0x34b)]() > _0x422424 && (_0x422424 = _0x3138b3(this)[_0x15fe6a(0x34b)](), _0x38045e = _0x3138b3(this)['children']('div')[_0x15fe6a(0x224)]());
                        });
                    }
                    _0x38045e != null && (_0x38045e['first']()[_0x1f96d7(0x32d)](_0x1f96d7(0x2ed), _0x1f96d7(0x394)), _0x38045e[_0x1f96d7(0x224)]()['append'](_0x1f96d7(0x32f) + _0x1e06fc('DW') + _0x1f96d7(0x383) + _0x209a06[_0x1f96d7(0x1cf)] + _0x1f96d7(0x18e)), _0x38045e[_0x1f96d7(0x224)]()[_0x1f96d7(0x2fc)](_0x1f96d7(0x2df) + _0x1e06fc(_0x1f96d7(0x25e)) + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x209a06[_0x1f96d7(0x25e)] + _0x1f96d7(0x18e)), _0x38045e[_0x1f96d7(0x357)](_0x1f96d7(0x1ed))[_0x1f96d7(0x18a)](function () {
                        const _0x55fedc = _0x1f96d7;
                        _0x3138b3(this)['on'](_0x55fedc(0x317), function () {
                            const _0x31045f = _0x55fedc;
                            !_0x3138b3(this)['data'](_0x31045f(0x354)) && (_0x38045e[_0x31045f(0x357)]('.IG_DWSTORY_THUMBNAIL')[_0x31045f(0x328)] === 0x0 ? (_0x3138b3(this)['attr'](_0x31045f(0x267), !![]), _0x3138b3(_0x31045f(0x1a4))[_0x31045f(0x314)](), _0x23a56a(_0x31045f(0x284))) : (_0x3138b3(this)[_0x31045f(0x323)]('data-remove-thumbnail', !![]), _0x23a56a('(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                        });
                    }));
                }
            }
        }
        async function _0x3ca374(_0x129187, _0x3afca2) {
            const _0x2af2e5 = _0x4e984e;
            if (_0x129187) {
                let _0x5ee908 = new Date()[_0x2af2e5(0x1bf)](), _0x2aa7aa = Math[_0x2af2e5(0x380)](_0x5ee908 / 0x3e8), _0x19a85d = _0x2af2e5(0x1a3), _0x5c1188 = _0x3138b3('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()[_0x2af2e5(0x23f)]() || location[_0x2af2e5(0x306)]['split']('/')['at'](0x2), _0x3de760 = _0x2af2e5(0x38a), _0x46a534 = location['pathname'][_0x2af2e5(0x36d)](/\/$/ig, '')[_0x2af2e5(0x2f7)]('/')['at'](-0x1), _0x4c3a47 = '', _0x52ed2d = null;
                _0x742b06(!![]);
                if (_0x2a78cf['FORCE_RESOURCE_VIA_MEDIA'] && !_0x375a7b) {
                    let _0x55aee3 = await _0x22aafa(_0x5c1188), _0x33c05d = _0x55aee3[_0x2af2e5(0x28d)]['pk'], _0xcaae6e = await _0x40739d(_0x33c05d), _0x37abdf = location[_0x2af2e5(0x306)][_0x2af2e5(0x2f7)]('/')[_0x2af2e5(0x1a1)](_0x596930 => _0x596930[_0x2af2e5(0x328)] > 0x0 && _0x596930[_0x2af2e5(0x298)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0xcaae6e[_0x2af2e5(0x3e7)]['reels_media'][0x0][_0x2af2e5(0x2fd)][_0x2af2e5(0x1ec)](_0x4e06e7 => {
                        _0x4e06e7['id'] == _0x37abdf && (_0x52ed2d = _0x4e06e7['id']);
                    });
                    if (_0x52ed2d == null) {
                        let _0x4400b8 = _0x3138b3(_0x2af2e5(0x343) + _0x5c1188 + _0x2af2e5(0x1f5))['filter'](function () {
                            const _0x1846d3 = _0x2af2e5;
                            return _0x3138b3(this)[_0x1846d3(0x3a1)]()[_0x1846d3(0x328)] === 0x0 && _0x3138b3(this)['find'](_0x1846d3(0x1db))['length'] === 0x0 && _0x3138b3(this)[_0x1846d3(0x23f)]()?.[_0x1846d3(0x29c)]() === _0x5c1188?.['toLowerCase']();
                        })[_0x2af2e5(0x1ee)]('div:not([class]):not([style])')[_0x2af2e5(0x1a1)](function () {
                            const _0x2b5f36 = _0x2af2e5;
                            return _0x3138b3(this)['text']()?.[_0x2b5f36(0x29c)]() !== _0x5c1188?.[_0x2b5f36(0x29c)]();
                        })[_0x2af2e5(0x1a1)](function () {
                            const _0x43b464 = _0x2af2e5;
                            return _0x3138b3(this)[_0x43b464(0x3a1)]()[_0x43b464(0x328)] > 0x1;
                        })[_0x2af2e5(0x224)]();
                        _0x4400b8[_0x2af2e5(0x3a1)]()[_0x2af2e5(0x1a1)](function () {
                            const _0x1bf940 = _0x2af2e5;
                            return _0x3138b3(this)[_0x1bf940(0x2c7)]() < 0xa;
                        })[_0x2af2e5(0x224)]()['children']()[_0x2af2e5(0x18a)](function (_0x218939) {
                            const _0x32b121 = _0x2af2e5;
                            _0x3138b3(this)[_0x32b121(0x3a1)]()[_0x32b121(0x328)] > 0x0 && (_0x52ed2d = _0xcaae6e['data'][_0x32b121(0x2ee)][0x0]['items'][_0x218939]['id']);
                        });
                    }
                    _0x52ed2d == null && (_0x3138b3(_0x2af2e5(0x3c6))['each'](function (_0x2083db) {
                        const _0x1a6b46 = _0x2af2e5;
                        _0x3138b3(this)[_0x1a6b46(0x294)](_0x1a6b46(0x262)) && (_0x3138b3(this)[_0x1a6b46(0x3a1)]()[_0x1a6b46(0x328)] > 0x0 && (_0x52ed2d = _0xcaae6e[_0x1a6b46(0x3e7)][_0x1a6b46(0x2ee)][0x0]['items'][_0x2083db]['id']));
                    }), _0x3138b3(_0x2af2e5(0x399))[_0x2af2e5(0x18a)](function (_0x3010d8) {
                        const _0x4e9ca0 = _0x2af2e5;
                        _0x3138b3(this)[_0x4e9ca0(0x3a1)]()[_0x4e9ca0(0x294)](_0x4e9ca0(0x3d4)) && (_0x52ed2d = _0xcaae6e[_0x4e9ca0(0x3e7)][_0x4e9ca0(0x2ee)][0x0]['items'][_0x3010d8]['id']);
                    }));
                    _0x52ed2d == null && (_0x52ed2d = location[_0x2af2e5(0x306)][_0x2af2e5(0x2f7)]('/')[_0x2af2e5(0x1a1)](_0x41e694 => _0x41e694[_0x2af2e5(0x328)] > 0x0 && _0x41e694['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x14fbfd = await _0x25e69e(_0x52ed2d);
                    _0x2a78cf[_0x2af2e5(0x33f)] && (_0x2aa7aa = _0x14fbfd['items'][0x0]['taken_at']);
                    _0x14fbfd[_0x2af2e5(0x34f)] === 'ok' ? _0x16d33f(_0x14fbfd['items'][0x0][_0x2af2e5(0x1b1)][_0x2af2e5(0x225)][0x0][_0x2af2e5(0x313)], _0x5c1188, _0x2af2e5(0x2b0), _0x2aa7aa, 'jpg', _0x52ed2d) : (_0x2a78cf['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT'] ? (_0x375a7b = !![], _0x3ca374(!![], _0x3afca2)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x14fbfd['message']), _0x23a56a(_0x14fbfd));
                    _0x742b06(![]);
                    return;
                }
                if (_0x167495[_0x2af2e5(0x2b0)][_0x5c1188] && !_0x3afca2) {
                    _0x23a56a(_0x2af2e5(0x35b), _0x5c1188), _0x167495[_0x2af2e5(0x2b0)][_0x5c1188][_0x2af2e5(0x3e7)][_0x2af2e5(0x2ee)][0x0][_0x2af2e5(0x2fd)][_0x2af2e5(0x1ec)](_0x5baf6d => {
                        const _0x2f34e7 = _0x2af2e5;
                        _0x5baf6d['id'] == _0x46a534 && (_0x4c3a47 = _0x5baf6d[_0x2f34e7(0x34e)], _0x2a78cf[_0x2f34e7(0x33f)] && (_0x2aa7aa = _0x5baf6d['taken_at_timestamp'], _0x52ed2d = _0x5baf6d['id']));
                    });
                    if (_0x4c3a47['length'] == 0x0) {
                        _0x23a56a('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x5c1188), _0x3ca374(!![], !![]);
                        return;
                    }
                } else {
                    let _0x26e5eb = await _0x22aafa(_0x5c1188), _0x23cd3e = _0x26e5eb['user']['pk'], _0x1031f5 = await _0x40739d(_0x23cd3e);
                    _0x1031f5['data'][_0x2af2e5(0x2ee)][0x0]['items']['forEach'](_0x5824a6 => {
                        const _0xf9ef4b = _0x2af2e5;
                        _0x5824a6['id'] == _0x46a534 && (_0x4c3a47 = _0x5824a6[_0xf9ef4b(0x34e)], _0x2a78cf['RENAME_PUBLISH_DATE'] && (_0x2aa7aa = _0x5824a6[_0xf9ef4b(0x213)], _0x52ed2d = _0x5824a6['id']));
                    });
                    if (_0x4c3a47[_0x2af2e5(0x328)] == 0x0) {
                        let _0x3941bc = _0x3138b3('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x5c1188 + _0x2af2e5(0x1f5))[_0x2af2e5(0x1a1)](function () {
                            const _0x25256b = _0x2af2e5;
                            return _0x3138b3(this)[_0x25256b(0x3a1)]()[_0x25256b(0x328)] === 0x0 && _0x3138b3(this)[_0x25256b(0x357)](_0x25256b(0x1db))[_0x25256b(0x328)] === 0x0 && _0x3138b3(this)[_0x25256b(0x23f)]()?.[_0x25256b(0x29c)]() === _0x5c1188?.[_0x25256b(0x29c)]();
                        })[_0x2af2e5(0x1ee)](_0x2af2e5(0x1d7))[_0x2af2e5(0x1a1)](function () {
                            const _0x4151c5 = _0x2af2e5;
                            return _0x3138b3(this)[_0x4151c5(0x23f)]()?.[_0x4151c5(0x29c)]() !== _0x5c1188?.[_0x4151c5(0x29c)]();
                        })[_0x2af2e5(0x1a1)](function () {
                            const _0x8431bf = _0x2af2e5;
                            return _0x3138b3(this)[_0x8431bf(0x3a1)]()[_0x8431bf(0x328)] > 0x1;
                        })[_0x2af2e5(0x224)]();
                        _0x3941bc['children']()['filter'](function () {
                            const _0x545534 = _0x2af2e5;
                            return _0x3138b3(this)[_0x545534(0x2c7)]() < 0xa;
                        })[_0x2af2e5(0x224)]()[_0x2af2e5(0x3a1)]()['each'](function (_0x255375) {
                            const _0x9a554 = _0x2af2e5;
                            _0x3138b3(this)[_0x9a554(0x3a1)]()[_0x9a554(0x328)] > 0x0 && (_0x4c3a47 = _0x1031f5[_0x9a554(0x3e7)][_0x9a554(0x2ee)][0x0][_0x9a554(0x2fd)][_0x255375][_0x9a554(0x34e)], _0x2a78cf[_0x9a554(0x33f)] && (_0x2aa7aa = _0x1031f5['data'][_0x9a554(0x2ee)][0x0][_0x9a554(0x2fd)][_0x255375][_0x9a554(0x213)], _0x52ed2d = _0x1031f5[_0x9a554(0x3e7)]['reels_media'][0x0][_0x9a554(0x2fd)][_0x255375]['id']));
                        }), _0x4c3a47['length'] == 0x0 && (_0x3138b3(_0x2af2e5(0x3c6))[_0x2af2e5(0x18a)](function (_0x34b848) {
                            const _0x5dfb69 = _0x2af2e5;
                            _0x3138b3(this)[_0x5dfb69(0x294)](_0x5dfb69(0x262)) && (_0x3138b3(this)[_0x5dfb69(0x3a1)]()['length'] > 0x0 && (_0x4c3a47 = _0x1031f5['data'][_0x5dfb69(0x2ee)][0x0]['items'][_0x34b848][_0x5dfb69(0x34e)], _0x2a78cf[_0x5dfb69(0x33f)] && (_0x2aa7aa = _0x1031f5[_0x5dfb69(0x3e7)][_0x5dfb69(0x2ee)][0x0]['items'][_0x34b848][_0x5dfb69(0x213)], _0x52ed2d = _0x1031f5['data'][_0x5dfb69(0x2ee)][0x0][_0x5dfb69(0x2fd)][_0x34b848]['id'])));
                        }), _0x3138b3(_0x2af2e5(0x399))[_0x2af2e5(0x18a)](function (_0x37a1b1) {
                            const _0xf68acf = _0x2af2e5;
                            _0x3138b3(this)['children']()[_0xf68acf(0x294)](_0xf68acf(0x3d4)) && (_0x4c3a47 = _0x1031f5[_0xf68acf(0x3e7)][_0xf68acf(0x2ee)][0x0]['items'][_0x37a1b1]['display_url'], _0x2a78cf[_0xf68acf(0x33f)] && (_0x2aa7aa = _0x1031f5[_0xf68acf(0x3e7)]['reels_media'][0x0][_0xf68acf(0x2fd)][_0x37a1b1][_0xf68acf(0x213)], _0x52ed2d = _0x1031f5[_0xf68acf(0x3e7)][_0xf68acf(0x2ee)][0x0][_0xf68acf(0x2fd)][_0x37a1b1]['id']));
                        }));
                    }
                }
                _0x16d33f(_0x4c3a47, _0x5c1188, _0x2af2e5(0x257), _0x2aa7aa, _0x19a85d, _0x52ed2d), _0x375a7b = ![], _0x742b06(![]);
            } else {
                if (_0x3138b3(_0x2af2e5(0x1a8))['parent']()['find'](_0x2af2e5(0x2b3))[_0x2af2e5(0x328)]) {
                    let _0xc96cc7 = null;
                    _0x3138b3('body\x20>\x20div\x20section._ac0a')[_0x2af2e5(0x328)] > 0x0 ? _0xc96cc7 = _0x3138b3(_0x2af2e5(0x185)) : (_0xc96cc7 = _0x3138b3('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0xc96cc7[_0x2af2e5(0x32d)]('position', _0x2af2e5(0x394)));
                    _0xc96cc7[_0x2af2e5(0x328)] === 0x0 && (_0xc96cc7 = _0x3138b3('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')['parent']()[_0x2af2e5(0x3c4)]()[_0x2af2e5(0x3c4)]()[_0x2af2e5(0x357)](_0x2af2e5(0x1d4)), _0xc96cc7['css'](_0x2af2e5(0x2ed), _0x2af2e5(0x394)));
                    _0xc96cc7[_0x2af2e5(0x328)] === 0x0 && (_0xc96cc7 = _0x3138b3('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x2af2e5(0x3c4)]()[_0x2af2e5(0x3c4)]()[_0x2af2e5(0x3c4)]()[_0x2af2e5(0x357)](_0x2af2e5(0x321)), _0xc96cc7[_0x2af2e5(0x32d)](_0x2af2e5(0x2ed), _0x2af2e5(0x394)));
                    if (_0xc96cc7[_0x2af2e5(0x328)] === 0x0) {
                        let _0x10d63f = _0x3138b3(_0x2af2e5(0x3e1)), _0xae151a = 0x0;
                        _0x10d63f[_0x2af2e5(0x18a)](function () {
                            const _0xc8306d = _0x2af2e5;
                            _0x3138b3(this)[_0xc8306d(0x34b)]() > _0xae151a && (_0xae151a = _0x3138b3(this)[_0xc8306d(0x34b)](), _0xc96cc7 = _0x3138b3(this)['children'](_0xc8306d(0x1d9))[_0xc8306d(0x224)]());
                        });
                    }
                    _0xc96cc7 != null && (_0xc96cc7[_0x2af2e5(0x224)]()[_0x2af2e5(0x32d)]('position', _0x2af2e5(0x394)), _0xc96cc7[_0x2af2e5(0x224)]()[_0x2af2e5(0x2fc)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1e06fc(_0x2af2e5(0x1e1)) + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x209a06[_0x2af2e5(0x272)] + _0x2af2e5(0x18e)));
                }
            }
        }
        async function _0xb21785(_0x1af9e8, _0x711ee2, _0x111c72) {
            const _0x4ec0d3 = _0x4e984e;
            if (_0x1af9e8) {
                _0x742b06(!![]);
                let _0x3f6046 = location[_0x4ec0d3(0x327)][_0x4ec0d3(0x2f7)]('?')['at'](0x0)[_0x4ec0d3(0x2f7)](_0x4ec0d3(0x3d3))['at'](-0x1)[_0x4ec0d3(0x3d7)]('/', ''), _0xa95177 = await _0x5f4402(_0x3f6046), _0x324d6d = _0xa95177['data'], _0x54b5bd = new Date()['getTime']();
                _0x2a78cf[_0x4ec0d3(0x33f)] && (_0xa95177[_0x4ec0d3(0x24f)] === 'query_hash' ? _0x54b5bd = _0x324d6d[_0x4ec0d3(0x2fb)][_0x4ec0d3(0x213)] : _0x54b5bd = _0x324d6d[_0x4ec0d3(0x2ea)]);
                if (_0xa95177[_0x4ec0d3(0x24f)] === _0x4ec0d3(0x3d6)) {
                    if (_0x711ee2 && _0x324d6d[_0x4ec0d3(0x2fb)][_0x4ec0d3(0x271)]) {
                        if (_0x111c72)
                            _0x225d2e(_0x324d6d['shortcode_media'][_0x4ec0d3(0x3a3)]);
                        else {
                            let _0x47031d = _0x4ec0d3(0x183);
                            _0x16d33f(_0x324d6d['shortcode_media']['video_url'], _0x324d6d[_0x4ec0d3(0x2fb)][_0x4ec0d3(0x1bc)][_0x4ec0d3(0x26e)], _0x4ec0d3(0x24c), _0x54b5bd, _0x47031d, _0x3f6046);
                        }
                    } else {
                        if (_0x111c72)
                            _0x225d2e(_0x324d6d[_0x4ec0d3(0x2fb)][_0x4ec0d3(0x1ad)]['at'](-0x1)[_0x4ec0d3(0x22e)]);
                        else {
                            let _0x1c1018 = _0x4ec0d3(0x1a3);
                            _0x16d33f(_0x324d6d[_0x4ec0d3(0x2fb)][_0x4ec0d3(0x1ad)]['at'](-0x1)[_0x4ec0d3(0x22e)], _0x324d6d[_0x4ec0d3(0x2fb)]['owner'][_0x4ec0d3(0x26e)], _0x4ec0d3(0x24c), _0x54b5bd, _0x1c1018, _0x3f6046);
                        }
                    }
                } else {
                    if (_0x711ee2 && _0x324d6d[_0x4ec0d3(0x19f)] != null) {
                        if (_0x111c72)
                            _0x225d2e(_0x324d6d[_0x4ec0d3(0x19f)][0x0][_0x4ec0d3(0x313)]);
                        else {
                            let _0x49994c = _0x4ec0d3(0x183);
                            _0x16d33f(_0x324d6d[_0x4ec0d3(0x19f)][0x0]['url'], _0x324d6d[_0x4ec0d3(0x1bc)][_0x4ec0d3(0x26e)], _0x4ec0d3(0x24c), _0x54b5bd, _0x49994c, _0x3f6046);
                        }
                    } else {
                        if (_0x111c72)
                            _0x225d2e(_0x324d6d[_0x4ec0d3(0x1b1)][_0x4ec0d3(0x225)][0x0][_0x4ec0d3(0x313)]);
                        else {
                            let _0x4b8fc8 = _0x4ec0d3(0x1a3);
                            _0x16d33f(_0x324d6d[_0x4ec0d3(0x1b1)]['candidates'][0x0][_0x4ec0d3(0x313)], _0x324d6d[_0x4ec0d3(0x1bc)]['username'], _0x4ec0d3(0x24c), _0x54b5bd, _0x4b8fc8, _0x3f6046);
                        }
                    }
                }
                _0x742b06(![]);
            } else
                var _0x4e0233 = setInterval(() => {
                    const _0x1cb6c6 = _0x4ec0d3;
                    _0x3138b3(_0x1cb6c6(0x316))[_0x1cb6c6(0x328)] > 0x0 && (clearInterval(_0x4e0233), _0x2a78cf[_0x1cb6c6(0x1dc)] && (_0x3138b3(_0x1cb6c6(0x3bf))['remove'](), _0x3138b3('section\x20>\x20main[role=\x22main\x22]')['append'](_0x1cb6c6(0x322)), _0x3138b3('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x1cb6c6(0x2fc)](_0x1cb6c6(0x2c3)), _0x3138b3(_0x1cb6c6(0x1ff))[_0x1cb6c6(0x2fc)](_0x1cb6c6(0x356)), _0x3138b3(_0x1cb6c6(0x21e))['on'](_0x1cb6c6(0x345), function () {
                        const _0x5cb573 = _0x1cb6c6;
                        _0x3138b3(_0x5cb573(0x2bd))[0x0][_0x5cb573(0x1de)]({
                            'top': -0x1e,
                            'behavior': _0x5cb573(0x2b4)
                        });
                    }), _0x3138b3(_0x1cb6c6(0x304))['on'](_0x1cb6c6(0x345), function () {
                        const _0x23b4fc = _0x1cb6c6;
                        _0x3138b3(_0x23b4fc(0x2bd))[0x0]['scrollBy']({
                            'top': 0x1e,
                            'behavior': 'smooth'
                        });
                    })), _0x3138b3(_0x1cb6c6(0x31f))['children']('div')[_0x1cb6c6(0x18a)](function () {
                        const _0x31b511 = _0x1cb6c6;
                        if (_0x3138b3(this)[_0x31b511(0x3a1)]()[_0x31b511(0x328)] > 0x0) {
                            if (!_0x3138b3(this)[_0x31b511(0x3a1)]()[_0x31b511(0x357)](_0x31b511(0x3b5))[_0x31b511(0x328)]) {
                                var _0x365a75 = _0x3138b3(this);
                                _0x3138b3(this)['children']()[_0x31b511(0x32d)](_0x31b511(0x2ed), _0x31b511(0x394)), _0x3138b3(this)[_0x31b511(0x3a1)]()[_0x31b511(0x2fc)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x1e06fc('DW') + _0x31b511(0x3ab) + _0x209a06['DOWNLOAD'] + _0x31b511(0x18e)), _0x3138b3(this)[_0x31b511(0x3a1)]()[_0x31b511(0x2fc)](_0x31b511(0x2df) + _0x1e06fc(_0x31b511(0x25e)) + _0x31b511(0x259) + _0x209a06[_0x31b511(0x25e)] + _0x31b511(0x18e)), _0x3138b3(this)[_0x31b511(0x3a1)]()[_0x31b511(0x2fc)](_0x31b511(0x1cd) + _0x1e06fc(_0x31b511(0x1e1)) + _0x31b511(0x19a) + _0x209a06[_0x31b511(0x272)] + _0x31b511(0x18e));
                                _0x2a78cf['DISABLE_VIDEO_LOOPING'] && _0x3138b3(this)[_0x31b511(0x357)](_0x31b511(0x2ca))[_0x31b511(0x18a)](function () {
                                    const _0x581f55 = _0x31b511;
                                    _0x3138b3(this)['on'](_0x581f55(0x276), function () {
                                        const _0x565d59 = _0x581f55;
                                        if (!_0x3138b3(this)[_0x565d59(0x3e7)](_0x565d59(0x1d0))) {
                                            let _0x3fd93a = _0x3138b3(this)[_0x565d59(0x3e8)]()[_0x565d59(0x357)](_0x565d59(0x2ae))[_0x565d59(0x1ee)]('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x3fd93a['length'] > 0x0 ? (_0x3138b3(this)['attr'](_0x565d59(0x1cc), !![]), _0x3fd93a[_0x565d59(0x345)](), _0x23a56a(_0x565d59(0x2f4))) : (_0x3138b3(this)[_0x565d59(0x323)]('data-loop', !![]), _0x3138b3(this)[_0x565d59(0x3c4)]()[_0x565d59(0x357)]('.xpgaw4o')[_0x565d59(0x3ae)](_0x565d59(0x1e0)), this[_0x565d59(0x238)](), _0x23a56a(_0x565d59(0x389)));
                                        }
                                    });
                                });
                                _0x2a78cf[_0x31b511(0x3b4)] && _0x3138b3(this)[_0x31b511(0x357)]('video')['each'](function () {
                                    const _0x1c9fa3 = _0x31b511;
                                    if (!_0x3138b3(this)['data']('controls')) {
                                        let _0x45e72f = _0x3138b3(this);
                                        _0x23a56a(_0x1c9fa3(0x331)), this[_0x1c9fa3(0x377)] = _0x4821da, _0x3138b3(this)['on'](_0x1c9fa3(0x1e3), function () {
                                            const _0x2dddbd = _0x1c9fa3;
                                            this[_0x2dddbd(0x377)] = _0x4821da;
                                        }), _0x3138b3(this)['on'](_0x1c9fa3(0x2f3), function (_0x1ed20d) {
                                            const _0x1dbf51 = _0x1c9fa3;
                                            _0x1ed20d['preventDefault'](), _0x45e72f['css'](_0x1dbf51(0x3d9), '-1'), _0x45e72f[_0x1dbf51(0x3ae)](_0x1dbf51(0x255));
                                        }), _0x3138b3(this)[_0x1c9fa3(0x3c4)]()[_0x1c9fa3(0x357)](_0x1c9fa3(0x2b6))[_0x1c9fa3(0x1a1)](function () {
                                            const _0x2d08f3 = _0x1c9fa3;
                                            return _0x3138b3(this)[_0x2d08f3(0x3c4)](_0x2d08f3(0x2f9))[_0x2d08f3(0x328)] > 0x0 && _0x3138b3(this)[_0x2d08f3(0x32d)](_0x2d08f3(0x1f8)) === _0x2d08f3(0x299) && _0x3138b3(this)['attr']('style') != null;
                                        })['first']()['on'](_0x1c9fa3(0x2f3), function (_0x395857) {
                                            const _0xa97626 = _0x1c9fa3;
                                            _0x395857['preventDefault'](), _0x45e72f[_0xa97626(0x32d)](_0xa97626(0x3d9), '2'), _0x45e72f[_0xa97626(0x323)](_0xa97626(0x255), !![]);
                                        }), _0x3138b3(this)['on'](_0x1c9fa3(0x1c4), function () {
                                            const _0x427fad = _0x1c9fa3;
                                            let _0xff89d3 = _0x3138b3(this)['parent']()[_0x427fad(0x357)]('video\x20+\x20div\x20>\x20div')[_0x427fad(0x357)](_0x427fad(0x359))[_0x427fad(0x1a1)](function (_0x228799) {
                                                const _0x1fb3db = _0x427fad;
                                                return _0x3138b3(this)[_0x1fb3db(0x34b)]() <= 0x40 && _0x3138b3(this)[_0x1fb3db(0x2c7)]() <= 0x40 && _0x3138b3(this)[_0x1fb3db(0x357)](_0x1fb3db(0x2a0))[_0x1fb3db(0x328)] > 0x0;
                                            });
                                            var _0x171097 = _0xff89d3['find'](_0x427fad(0x34d))[_0x427fad(0x328)] === 0x0;
                                            this[_0x427fad(0x3b0)] != _0x171097 && (this[_0x427fad(0x377)] = _0x4821da, _0xff89d3?.[_0x427fad(0x345)]()), _0x3138b3(this)['attr'](_0x427fad(0x281)) && (_0x4821da = this[_0x427fad(0x377)], GM_setValue(_0x427fad(0x221), this['volume'])), this['volume'] == _0x4821da && _0x3138b3(this)['attr'](_0x427fad(0x281), !![]);
                                        }), _0x3138b3(this)[_0x1c9fa3(0x32d)](_0x1c9fa3(0x2ed), 'absolute'), _0x3138b3(this)[_0x1c9fa3(0x32d)](_0x1c9fa3(0x3d9), '2'), _0x3138b3(this)[_0x1c9fa3(0x323)](_0x1c9fa3(0x318), !![]), _0x3138b3(this)[_0x1c9fa3(0x323)](_0x1c9fa3(0x255), !![]);
                                    }
                                });
                                var _0x57f7e9 = _0x365a75['find'](_0x31b511(0x2ca)), _0x40131d = _0x3138b3(this)[_0x31b511(0x357)](_0x31b511(0x315))[_0x31b511(0x224)]();
                                _0x1dce25(_0x57f7e9, _0x40131d, _0x31b511(0x2e8));
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x5c4f77(_0x354249) {
            const _0x50ecdd = _0x4e984e;
            let _0x44bd86 = new URL(_0x354249), _0x3bb4e9 = _0x44bd86?.['searchParams']?.[_0x50ecdd(0x396)](_0x50ecdd(0x232))?.['split']('.')['at'](0x0);
            return _0x3bb4e9 ? atob(_0x3bb4e9) : null;
        }
        function _0x34fdd2(_0x33ccf8) {
            return new Promise((_0x16baac, _0x48ffcc) => {
                const _0x22ab16 = a0_0x4467;
                let _0x186318 = _0x22ab16(0x23c) + _0x33ccf8 + _0x22ab16(0x381);
                GM_xmlhttpRequest({
                    'method': _0x22ab16(0x2d4),
                    'url': _0x186318,
                    'onload': function (_0x30dfeb) {
                        const _0x36f326 = _0x22ab16;
                        try {
                            let _0x32f053 = JSON[_0x36f326(0x1f3)](_0x30dfeb[_0x36f326(0x38d)]);
                            _0x16baac(_0x32f053);
                        } catch (_0x44650a) {
                            _0x23a56a(_0x36f326(0x218), _0x36f326(0x28e), _0x44650a[_0x36f326(0x287)]), _0x48ffcc(_0x44650a);
                        }
                    },
                    'onerror': function (_0x3e1bd2) {
                        const _0x5512b1 = _0x22ab16;
                        _0x23a56a('getHighlightStories()', _0x5512b1(0x28e), _0x3e1bd2), _0x48ffcc(_0x3e1bd2);
                    }
                });
            });
        }
        function _0x40739d(_0xde9804) {
            return new Promise((_0x5da854, _0x22e563) => {
                const _0x369f58 = a0_0x4467;
                let _0x22c16e = _0x369f58(0x249) + _0xde9804 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x22c16e,
                    'onload': function (_0x440116) {
                        const _0x5ed3cb = _0x369f58;
                        try {
                            let _0x4c544b = JSON[_0x5ed3cb(0x1f3)](_0x440116[_0x5ed3cb(0x38d)]);
                            _0x23a56a('getStories()', _0x4c544b), _0x5da854(_0x4c544b);
                        } catch (_0x43ca17) {
                            _0x23a56a(_0x5ed3cb(0x1f2), 'reject', _0x43ca17[_0x5ed3cb(0x287)]), _0x22e563(_0x43ca17);
                        }
                    },
                    'onerror': function (_0x319f73) {
                        const _0x487d12 = _0x369f58;
                        _0x23a56a(_0x487d12(0x1f2), 'reject', _0x319f73), _0x22e563(_0x319f73);
                    }
                });
            });
        }
        function _0x22aafa(_0x4dcfd9) {
            return new Promise((_0x38695e, _0x2591c9) => {
                const _0x586f36 = a0_0x4467;
                let _0x1588f9 = _0x586f36(0x2b8) + _0x4dcfd9;
                GM_xmlhttpRequest({
                    'method': _0x586f36(0x2d4),
                    'url': _0x1588f9,
                    'onload': function (_0xc7c9f4) {
                        const _0x2ecba3 = _0x586f36;
                        let _0x1066dc = JSON['parse'](_0xc7c9f4['response']), _0xe0ce30 = null;
                        _0x1066dc[_0x2ecba3(0x2ff)][_0x2ecba3(0x1ec)](_0x3e7b43 => {
                            const _0x2bd6d3 = _0x2ecba3;
                            _0x3e7b43[_0x2bd6d3(0x28d)]['username']?.['toLowerCase']() === _0x4dcfd9?.[_0x2bd6d3(0x29c)]() && (_0xe0ce30 = _0x3e7b43);
                        }), _0xe0ce30 != null ? (_0x23a56a(_0x2ecba3(0x2ac), _0xe0ce30), _0x38695e(_0xe0ce30)) : _0x24fafa(_0x4dcfd9)['then'](_0x1954af => {
                            _0x38695e(_0x1954af);
                        })[_0x2ecba3(0x254)](_0x26143b => {
                            const _0x31a251 = _0x2ecba3;
                            alert(_0x31a251(0x35d));
                        });
                    },
                    'onerror': function (_0x3dee2a) {
                        const _0x333986 = _0x586f36;
                        _0x23a56a(_0x333986(0x2ac), _0x333986(0x28e), _0x3dee2a), _0x2591c9(_0x3dee2a);
                    }
                });
            });
        }
        function _0x24fafa(_0x570a02) {
            return new Promise((_0x532b70, _0x5d76d3) => {
                const _0x2ea8c1 = a0_0x4467;
                let _0x3ddb03 = _0x2ea8c1(0x1c2) + _0x570a02;
                GM_xmlhttpRequest({
                    'method': _0x2ea8c1(0x2d4),
                    'url': _0x3ddb03,
                    'headers': { 'X-IG-App-ID': _0x1f6673() },
                    'onload': function (_0xd82258) {
                        const _0x58685f = _0x2ea8c1;
                        try {
                            let _0x1edee7 = JSON['parse'](_0xd82258[_0x58685f(0x38d)]), _0xb684ca = _0x1edee7?.[_0x58685f(0x3e7)]?.[_0x58685f(0x28d)];
                            if (_0xb684ca != null) {
                                let _0x465ee1 = _0x1edee7?.[_0x58685f(0x3e7)];
                                _0x465ee1[_0x58685f(0x28d)]['pk'] = _0x465ee1[_0x58685f(0x28d)]['id'], _0x23a56a('getUserIdWithAgent()', _0x1edee7), _0x532b70(_0x465ee1);
                            } else
                                _0x23a56a(_0x58685f(0x2fa), _0x58685f(0x28e), _0x58685f(0x21f)), _0x5d76d3(_0x58685f(0x21f));
                        } catch (_0x22ac59) {
                            _0x23a56a(_0x58685f(0x2fa), 'reject', _0x22ac59[_0x58685f(0x287)]), _0x5d76d3(_0x22ac59);
                        }
                    },
                    'onerror': function (_0x5a39f8) {
                        const _0x530d72 = _0x2ea8c1;
                        _0x23a56a(_0x530d72(0x2fa), 'reject', _0x5a39f8), _0x5d76d3(_0x5a39f8);
                    }
                });
            });
        }
        function _0x3e8b99(_0x4975fd) {
            return new Promise((_0x335dcd, _0x278e6a) => {
                const _0x1e99f5 = a0_0x4467;
                let _0x25347e = 'https://i.instagram.com/api/v1/users/' + _0x4975fd + _0x1e99f5(0x258);
                GM_xmlhttpRequest({
                    'method': _0x1e99f5(0x2d4),
                    'url': _0x25347e,
                    'headers': { 'User-Agent': _0x1e99f5(0x374) },
                    'onload': function (_0x2aaaa3) {
                        const _0x36684e = _0x1e99f5;
                        try {
                            let _0x58173f = JSON['parse'](_0x2aaaa3[_0x36684e(0x38d)]);
                            _0x58173f[_0x36684e(0x34f)] !== 'ok' ? (_0x23a56a(_0x36684e(0x2e2), _0x36684e(0x28e), _0x58173f), _0x278e6a(_0x36684e(0x26c))) : (_0x23a56a(_0x36684e(0x2e2), _0x58173f), _0x335dcd(_0x58173f['user'][_0x36684e(0x39d)]?.[_0x36684e(0x313)]));
                        } catch (_0xba47ca) {
                            _0x23a56a(_0x36684e(0x2e2), _0x36684e(0x28e), _0xba47ca), _0x278e6a(_0xba47ca);
                        }
                    },
                    'onerror': function (_0x57b0ef) {
                        const _0x2c92c1 = _0x1e99f5;
                        _0x23a56a(_0x2c92c1(0x2e2), _0x2c92c1(0x28e), _0x57b0ef), _0x278e6a(_0x57b0ef);
                    }
                });
            });
        }
        function _0x4d5efd(_0x4c5d0c) {
            return new Promise((_0x4a2678, _0x18bb5b) => {
                const _0x9f7d40 = a0_0x4467;
                if (!_0x4c5d0c)
                    _0x18bb5b('NOPATH');
                let _0x59b031 = _0x4c5d0c, _0x53d9d4 = _0x9f7d40(0x3e0) + _0x59b031 + _0x9f7d40(0x1b2);
                GM_xmlhttpRequest({
                    'method': _0x9f7d40(0x2d4),
                    'url': _0x53d9d4,
                    'onload': function (_0x5506da) {
                        const _0x4c5389 = _0x9f7d40;
                        try {
                            let _0x302b5e = JSON[_0x4c5389(0x1f3)](_0x5506da['response']);
                            _0x23a56a(_0x4c5389(0x1ea), _0x302b5e), _0x4a2678(_0x302b5e[_0x4c5389(0x3e7)]['shortcode_media'][_0x4c5389(0x1bc)][_0x4c5389(0x26e)]);
                        } catch (_0xeb3a4) {
                            _0x23a56a(_0x4c5389(0x1ea), _0x4c5389(0x28e), _0xeb3a4[_0x4c5389(0x287)]), _0x18bb5b(_0xeb3a4);
                        }
                    },
                    'onerror': function (_0x58964b) {
                        const _0x4a04fe = _0x9f7d40;
                        _0x23a56a(_0x4a04fe(0x1ea), 'reject', _0x58964b), _0x18bb5b(_0x58964b);
                    }
                });
            });
        }
        function _0x5f4402(_0x2af509) {
            return new Promise((_0x3e1d1d, _0x396d6a) => {
                const _0x713cc3 = a0_0x4467;
                if (!_0x2af509)
                    _0x396d6a(_0x713cc3(0x2d2));
                let _0x1a967f = _0x2af509, _0x194807 = _0x713cc3(0x3e0) + _0x1a967f + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x713cc3(0x2d4),
                    'url': _0x194807,
                    'headers': { 'User-Agent': _0x713cc3(0x374) },
                    'onload': function (_0x5e5725) {
                        const _0xbe9ca9 = _0x713cc3;
                        try {
                            let _0x2fde23 = JSON[_0xbe9ca9(0x1f3)](_0x5e5725[_0xbe9ca9(0x38d)]);
                            _0x23a56a(_0x2fde23), _0x2fde23[_0xbe9ca9(0x34f)] === 'fail' ? (_0x23a56a('Request\x20with:', _0xbe9ca9(0x2e3), _0x1a967f), _0x17544a(_0x1a967f)[_0xbe9ca9(0x2c4)](_0x398cdd => {
                                const _0x423cbc = _0xbe9ca9;
                                _0x3e1d1d({
                                    'type': _0x423cbc(0x3c1),
                                    'data': _0x398cdd[_0x423cbc(0x229)][_0x423cbc(0x2fd)][0x0]
                                });
                            })[_0xbe9ca9(0x254)](_0x13b95d => {
                                _0x396d6a(_0x13b95d);
                            })) : _0x3e1d1d({
                                'type': _0xbe9ca9(0x3d6),
                                'data': _0x2fde23['data']
                            });
                        } catch (_0x4ca4c8) {
                            _0x23a56a('getBlobMedia()', _0xbe9ca9(0x28e), _0x4ca4c8[_0xbe9ca9(0x287)]), _0x396d6a(_0x4ca4c8);
                        }
                    },
                    'onerror': function (_0x371bc3) {
                        const _0x3b6709 = _0x713cc3;
                        _0x23a56a(_0x3b6709(0x187), _0x3b6709(0x28e), _0x371bc3), _0x396d6a(_0x371bc3);
                    }
                });
            });
        }
        function _0x17544a(_0x4dd189) {
            return new Promise((_0x3c730f, _0x33ea57) => {
                const _0x4990ed = a0_0x4467;
                if (!_0x4dd189)
                    _0x33ea57('NOPATH');
                let _0x3f7d05 = _0x4dd189, _0x57aed8 = _0x4990ed(0x211) + _0x3f7d05 + _0x4990ed(0x217);
                GM_xmlhttpRequest({
                    'method': _0x4990ed(0x2d4),
                    'url': _0x57aed8,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x1f6673()
                    },
                    'onload': function (_0x357127) {
                        const _0x445efc = _0x4990ed;
                        try {
                            let _0x3243a5 = JSON[_0x445efc(0x1f3)](_0x357127[_0x445efc(0x38d)]);
                            _0x23a56a(_0x3243a5), _0x3243a5[_0x445efc(0x34f)] === _0x445efc(0x209) ? (alert(_0x445efc(0x214) + _0x3243a5[_0x445efc(0x287)] + ':\x20' + _0x3243a5[_0x445efc(0x2f8)]), _0x23a56a(_0x445efc(0x384) + _0x3243a5[_0x445efc(0x287)] + ':\x20' + _0x3243a5[_0x445efc(0x2f8)]), _0x33ea57(_0x357127)) : (_0x23a56a('getBlobMediaWithQueryID()', _0x3243a5[_0x445efc(0x3e7)]), _0x3c730f(_0x3243a5['data']));
                        } catch (_0x4d7786) {
                            _0x23a56a('getBlobMediaWithQueryID()', 'reject', _0x4d7786[_0x445efc(0x287)]), _0x33ea57(_0x4d7786);
                        }
                    },
                    'onerror': function (_0x4ce358) {
                        const _0xc3385c = _0x4990ed;
                        _0x23a56a(_0xc3385c(0x387), _0xc3385c(0x28e), _0x4ce358), _0x33ea57(_0x4ce358);
                    }
                });
            });
        }
        function _0x293944(_0x2a8079, _0x194ec9) {
            const _0xe95d74 = _0x4e984e;
            _0x194ec9 === !![] && (_0x23a56a(_0xe95d74(0x2e1), _0xe95d74(0x2d7)), _0x3138b3(_0xe95d74(0x2db))[_0xe95d74(0x1a1)](function () {
                const _0x5cc9c9 = _0xe95d74;
                return _0x3138b3(this)[_0x5cc9c9(0x357)]('.SNKMS_IG_DW_MAIN')[_0x5cc9c9(0x328)] === 0x0;
            })[_0xe95d74(0x3ae)](_0xe95d74(0x274)));
            if (_0x2a8079 == ![]) {
                const _0x2cbe26 = 0x64;
                let _0x436eb4 = 0x0;
                var _0x5d9a4b = setInterval(() => {
                    const _0x1be737 = _0xe95d74;
                    (_0x436eb4 > _0x2cbe26 || _0x3138b3('article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]')[_0x1be737(0x328)] > 0x0) && (clearInterval(_0x5d9a4b), _0x436eb4 > _0x2cbe26 && console['warn'](_0x1be737(0x1d5), _0x1be737(0x243))), _0x23a56a(_0x1be737(0x1d5), _0x1be737(0x252)), _0x10fe7a(), _0x436eb4++;
                }, 0x32);
            } else
                _0x10fe7a();
        }
        function _0x1f6673() {
            const _0x22b525 = _0x4e984e;
            let _0x5cf039 = null;
            return _0x3138b3(_0x22b525(0x219))[_0x22b525(0x18a)](function () {
                const _0x28ef35 = _0x22b525, _0x483d83 = /"APP_ID":"([0-9]+)"/ig, _0xa572d = _0x3138b3(this)[_0x28ef35(0x23f)]()[_0x28ef35(0x298)](_0x483d83);
                _0xa572d != null && _0x5cf039 == null && (_0x5cf039 = [..._0x3138b3(this)[_0x28ef35(0x23f)]()['matchAll'](_0x483d83)]);
            }), _0x5cf039 ? _0x5cf039['at'](0x0)['at'](-0x1) : null;
        }
        function _0x742b06(_0x47ef22) {
            const _0x5c1bde = _0x4e984e;
            _0x47ef22 ? (_0x3138b3(_0x5c1bde(0x39a))[_0x5c1bde(0x20a)](_0x5c1bde(0x20e)), _0x3138b3(_0x5c1bde(0x39a))[_0x5c1bde(0x32d)]('z-index', _0x5c1bde(0x1af))) : (_0x3138b3(_0x5c1bde(0x39a))[_0x5c1bde(0x188)](_0x5c1bde(0x20e)), _0x3138b3(_0x5c1bde(0x39a))[_0x5c1bde(0x32d)]('z-index', ''));
        }
        function _0x25e69e(_0x2922eb) {
            return new Promise((_0x578de8, _0xacb7b1) => {
                const _0xa251bc = a0_0x4467;
                let _0x43dbb5 = _0xa251bc(0x30b) + _0x2922eb + _0xa251bc(0x258);
                if (_0x2922eb == null) {
                    alert(_0xa251bc(0x216)), _0x23a56a('getMediaInfo()', _0xa251bc(0x28e), _0xa251bc(0x216)), _0x742b06(![]), _0xacb7b1(-0x1);
                    return;
                }
                if (_0x1f6673() == null) {
                    alert(_0xa251bc(0x31a)), _0x23a56a(_0xa251bc(0x325), 'reject', _0xa251bc(0x31a)), _0x742b06(![]), _0xacb7b1(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0xa251bc(0x2d4),
                    'url': _0x43dbb5,
                    'headers': {
                        'User-Agent': window[_0xa251bc(0x19d)][_0xa251bc(0x2a5)],
                        'Accept': '*/*',
                        'X-IG-App-ID': _0x1f6673()
                    },
                    'onload': function (_0x1f8dea) {
                        const _0x2a9d31 = _0xa251bc;
                        if (_0x1f8dea['finalUrl'] == _0x43dbb5) {
                            let _0x1ac70f = JSON[_0x2a9d31(0x1f3)](_0x1f8dea[_0x2a9d31(0x38d)]);
                            _0x23a56a(_0x2a9d31(0x325), _0x1ac70f), _0x578de8(_0x1ac70f);
                        } else {
                            let _0x3397e0 = new URL(_0x1f8dea[_0x2a9d31(0x22f)]);
                            _0x3397e0[_0x2a9d31(0x306)][_0x2a9d31(0x1a9)](_0x2a9d31(0x1fb)) ? (_0x23a56a(_0x2a9d31(0x325), _0x2a9d31(0x28e), _0x2a9d31(0x1e9)), alert(_0x2a9d31(0x1e9))) : (_0x23a56a(_0x2a9d31(0x325), 'reject', _0x2a9d31(0x2bb) + _0x1f8dea[_0x2a9d31(0x22f)] + '\x22'), alert('Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x1f8dea[_0x2a9d31(0x22f)] + '\x22')), _0x742b06(![]), _0xacb7b1(-0x1);
                        }
                    },
                    'onerror': function (_0x74d634) {
                        const _0x56eba5 = _0xa251bc;
                        _0x23a56a(_0x56eba5(0x325), 'reject', _0x74d634), _0x578de8(_0x74d634);
                    }
                });
            });
        }
        function _0x57e6d8(_0x689416) {
            const _0x56048b = _0x4e984e;
            var _0x3e77e5 = 0x0, _0xe531cb = _0x689416[_0x56048b(0x357)]('.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div');
            return (_0xe531cb == null || !_0xe531cb[_0x56048b(0x294)](_0x56048b(0x35e))) && (_0xe531cb = _0x689416['find'](_0x56048b(0x292))['eq'](0x0)[_0x56048b(0x3a1)]('div')), _0xe531cb[_0x56048b(0x1a1)](_0x56048b(0x1e8))[_0x56048b(0x18a)](function (_0x24c27c) {
                const _0x5be7ce = _0x56048b;
                _0x3138b3(this)[_0x5be7ce(0x294)]('_acnf') && (_0x3e77e5 = _0x24c27c);
            }), _0x3e77e5;
        }
        function _0xb98bc5(_0x7acca1) {
            const _0x57d766 = _0x4e984e;
            _0x2a78cf[_0x57d766(0x2d8)] && _0x7acca1[_0x57d766(0x357)](_0x57d766(0x2ca))[_0x57d766(0x18a)](function () {
                const _0x439b69 = _0x57d766;
                _0x3138b3(this)['on'](_0x439b69(0x276), function () {
                    const _0x580e1b = _0x439b69;
                    !_0x3138b3(this)['data'](_0x580e1b(0x1d0)) && (_0x3138b3(this)[_0x580e1b(0x323)](_0x580e1b(0x1cc), !![]), this[_0x580e1b(0x238)](), _0x23a56a(_0x580e1b(0x3da)));
                });
            });
            _0x2a78cf[_0x57d766(0x1e5)] && _0x7acca1[_0x57d766(0x357)]('video')['each'](function () {
                const _0x23078f = _0x57d766;
                _0x3138b3(this)['on'](_0x23078f(0x27f), function () {
                    const _0x126528 = _0x23078f;
                    !_0x3138b3(this)[_0x126528(0x3e7)](_0x126528(0x1f9)) && (_0x3138b3(this)[_0x126528(0x323)]('data-modify', !![]), this[_0x126528(0x377)] = _0x4821da, _0x23a56a(_0x126528(0x24b)));
                });
            });
            _0x2a78cf[_0x57d766(0x3b4)] && _0x7acca1['find']('video')['each'](function () {
                const _0xa16e56 = _0x57d766;
                if (!_0x3138b3(this)[_0xa16e56(0x3e7)]('controls')) {
                    let _0x14824d = _0x3138b3(this);
                    _0x23a56a(_0xa16e56(0x358)), this[_0xa16e56(0x377)] = _0x4821da, _0x3138b3(this)['on'](_0xa16e56(0x1e3), function () {
                        const _0xe99641 = _0xa16e56;
                        this[_0xe99641(0x377)] = _0x4821da;
                    }), _0x3138b3(this)['on'](_0xa16e56(0x2f3), function (_0x3afb84) {
                        const _0x28a643 = _0xa16e56;
                        _0x3afb84[_0x28a643(0x3b2)](), _0x14824d[_0x28a643(0x32d)](_0x28a643(0x3d9), '-1'), _0x14824d['removeAttr'](_0x28a643(0x255));
                    }), _0x3138b3(this)[_0xa16e56(0x3c4)]()['find'](_0xa16e56(0x2ba))['first']()['on'](_0xa16e56(0x2f3), function (_0x51049b) {
                        const _0x2f6b6e = _0xa16e56;
                        _0x51049b[_0x2f6b6e(0x3b2)](), _0x14824d[_0x2f6b6e(0x32d)](_0x2f6b6e(0x3d9), '2'), _0x14824d[_0x2f6b6e(0x323)](_0x2f6b6e(0x255), !![]);
                    }), _0x3138b3(this)['on'](_0xa16e56(0x1c4), function () {
                        const _0x570bc3 = _0xa16e56;
                        let _0x51344a = _0x3138b3(this)['parent']()[_0x570bc3(0x357)]('video\x20+\x20div\x20>\x20div')['find'](_0x570bc3(0x359))[_0x570bc3(0x1a1)](function (_0x317145) {
                            const _0x5b4479 = _0x570bc3;
                            return _0x3138b3(this)['width']() <= 0x40 && _0x3138b3(this)['height']() <= 0x40 && _0x3138b3(this)[_0x5b4479(0x357)](_0x5b4479(0x2a0))[_0x5b4479(0x328)] > 0x0;
                        });
                        var _0x303cd4 = _0x51344a['find'](_0x570bc3(0x34d))[_0x570bc3(0x328)] === 0x0;
                        this['muted'] != _0x303cd4 && (this[_0x570bc3(0x377)] = _0x4821da, _0x51344a?.[_0x570bc3(0x345)]()), _0x3138b3(this)[_0x570bc3(0x323)]('data-completed') && (_0x4821da = this[_0x570bc3(0x377)], GM_setValue(_0x570bc3(0x221), this['volume'])), this[_0x570bc3(0x377)] == _0x4821da && _0x3138b3(this)[_0x570bc3(0x323)](_0x570bc3(0x281), !![]);
                    }), _0x3138b3(this)[_0xa16e56(0x32d)]('position', _0xa16e56(0x33e)), _0x3138b3(this)[_0xa16e56(0x32d)](_0xa16e56(0x3d9), '2'), _0x3138b3(this)['attr']('data-controls', !![]), _0x3138b3(this)[_0xa16e56(0x323)]('controls', !![]);
                }
            });
            var _0xbdc2d8 = _0x7acca1[_0x57d766(0x357)](_0x57d766(0x2ca)), _0x17efbc = _0x7acca1[_0x57d766(0x357)]('video\x20+\x20div\x20>\x20div')[_0x57d766(0x224)]();
            _0x1dce25(_0xbdc2d8, _0x17efbc, _0x57d766(0x2c8), _0x57d766(0x3a0));
        }
        ;
        function _0x10fe7a() {
            const _0x441c1e = _0x4e984e;
            _0x3138b3(_0x441c1e(0x37c))['map'](function (_0x1c3c80) {
                const _0x33e44c = _0x441c1e;
                return _0x3138b3(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x3138b3(this)[_0x33e44c(0x3c4)]()[_0x33e44c(0x3c4)]()[_0x33e44c(0x3c4)]()[_0x33e44c(0x3c4)]()[0x0] : this;
            })['filter'](function () {
                const _0x3952d7 = _0x441c1e;
                return _0x3138b3(this)['height']() > 0x0 && _0x3138b3(this)[_0x3952d7(0x34b)]() > 0x0;
            })[_0x441c1e(0x18a)](function (_0x35a40f) {
                const _0x33ac84 = _0x441c1e;
                if (!_0x3138b3(this)[_0x33ac84(0x323)]('data-snig') && !_0x3138b3(this)[_0x33ac84(0x294)](_0x33ac84(0x37b)) && !_0x3138b3(this)[_0x33ac84(0x3a1)]('article')?.[_0x33ac84(0x294)](_0x33ac84(0x37b)) && _0x3138b3(this)['parents'](_0x33ac84(0x19b))['length'] === 0x0) {
                    _0x23a56a(_0x33ac84(0x362), _0x3138b3(this));
                    var _0x3eade4 = 0xf, _0x43547b = 0xf, _0x2b22bd = _0x3138b3(this), _0x3bae36 = this[_0x33ac84(0x265)];
                    if (_0x3bae36 === _0x33ac84(0x260) && _0x35a40f != 0x0)
                        return;
                    const _0x2c347 = _0x2b22bd[_0x33ac84(0x3a1)](_0x33ac84(0x1d9))[_0x33ac84(0x3a1)]('div');
                    if (_0x2c347[_0x33ac84(0x328)] === 0x0)
                        return;
                    _0x23a56a(_0x33ac84(0x244), _0x2c347);
                    if (_0x2b22bd[_0x33ac84(0x357)](_0x33ac84(0x29d))['length'] > 0x0) {
                        _0x2b22bd['find'](_0x33ac84(0x32b))[_0x33ac84(0x328)] > 0x0 && _0x2b22bd[_0x33ac84(0x357)](_0x33ac84(0x32b))[_0x33ac84(0x32d)](_0x33ac84(0x215), _0x33ac84(0x269));
                        const _0x14433a = _0x2b22bd['find'](_0x33ac84(0x29d))[_0x33ac84(0x224)]()['parent']()[0x0];
                        var _0x5de8a5 = new MutationObserver(function (_0x5d74a4, _0xbeab46) {
                            const _0x5bbc19 = _0x33ac84;
                            _0x2b22bd['find'](_0x5bbc19(0x32b))['css'](_0x5bbc19(0x215), _0x5bbc19(0x269));
                        });
                        _0x5de8a5['observe'](_0x14433a, { 'childList': !![] });
                    }
                    const _0xd72c95 = '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x1e06fc('DW') + _0x33ac84(0x2ab) + _0x3eade4 + _0x33ac84(0x2d0) + _0x43547b + _0x33ac84(0x303) + _0x209a06[_0x33ac84(0x1cf)] + '</div>', _0x58de76 = _0x33ac84(0x2df) + _0x1e06fc(_0x33ac84(0x25e)) + _0x33ac84(0x20b) + (_0x3eade4 + 0x23) + _0x33ac84(0x2d0) + _0x43547b + _0x33ac84(0x303) + _0x209a06[_0x33ac84(0x25e)] + _0x33ac84(0x18e), _0x218049 = _0x33ac84(0x1cd) + _0x1e06fc(_0x33ac84(0x1e1)) + '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:' + (_0x3eade4 + 0x46) + _0x33ac84(0x2d0) + _0x43547b + 'px;\x22>' + _0x209a06['THUMBNAIL'] + '</div>';
                    _0x2c347['eq'](_0x3bae36 === _0x33ac84(0x260) ? 0x0 : _0x2c347[_0x33ac84(0x328)] - 0x2)[_0x33ac84(0x2fc)](_0xd72c95), _0x2c347['eq'](_0x3bae36 === _0x33ac84(0x260) ? 0x0 : _0x2c347[_0x33ac84(0x328)] - 0x2)[_0x33ac84(0x2fc)](_0x58de76), setTimeout(() => {
                        const _0x42a446 = _0x33ac84;
                        if (_0x2c347['eq'](_0x3bae36 === 'DIV' ? 0x0 : _0x2c347[_0x42a446(0x328)] - 0x2)[_0x42a446(0x357)](_0x42a446(0x20f))[_0x42a446(0x328)] === 0x0)
                            _0x2c347['find'](_0x42a446(0x2ca))[_0x42a446(0x328)] > 0x0 && _0x2c347['eq'](_0x3bae36 === 'DIV' ? 0x0 : _0x2c347[_0x42a446(0x328)] - 0x2)[_0x42a446(0x2fc)](_0x218049);
                        else {
                            const _0x992ba2 = (_0x174ad5, _0x5a4d5f) => {
                                    const _0x4429e4 = _0x42a446;
                                    _0x174ad5[_0x4429e4(0x1ec)](_0x43ac8e => {
                                        const _0x3638e9 = _0x4429e4;
                                        if (_0x43ac8e[_0x3638e9(0x397)]) {
                                            var _0x5de64d = _0x3138b3(_0x43ac8e[_0x3638e9(0x388)]);
                                            _0x5de64d[_0x3638e9(0x357)](_0x3638e9(0x2ca))[_0x3638e9(0x328)] > 0x0 ? (_0x2c347['eq'](_0x3bae36 === _0x3638e9(0x260) ? 0x0 : _0x2c347[_0x3638e9(0x328)] - 0x2)['append'](_0x218049), _0xb98bc5(_0x2b22bd)) : _0x2c347[_0x3638e9(0x357)](_0x3638e9(0x3c7))?.['remove']();
                                        }
                                    });
                                }, _0x26fd04 = new IntersectionObserver(_0x992ba2, {
                                    'root': _0x2b22bd[_0x42a446(0x357)]('div\x20>\x20ul._acay')[_0x42a446(0x224)]()[_0x42a446(0x3c4)]()[_0x42a446(0x3c4)]()[_0x42a446(0x3c4)]()[0x0],
                                    'rootMargin': _0x42a446(0x2f0),
                                    'threshold': 0.1
                                }), _0x280521 = new MutationObserver(function (_0x4913a4, _0xa209d0) {
                                    const _0x2a345f = _0x42a446;
                                    var _0x52a0fe = _0x4913a4['at'](0x0)?.['target'];
                                    _0x3138b3(_0x52a0fe)[_0x2a345f(0x357)](_0x2a345f(0x1f4))[_0x2a345f(0x18a)](function () {
                                        const _0x32ff1a = _0x2a345f;
                                        _0x26fd04[_0x32ff1a(0x375)](this);
                                    });
                                });
                            _0x2b22bd['find'](_0x42a446(0x20f))[_0x42a446(0x18a)](function () {
                                const _0x5c4688 = _0x42a446;
                                _0x26fd04[_0x5c4688(0x375)](this);
                            });
                            const _0x469ca7 = _0x2c347['eq'](_0x3bae36 === _0x42a446(0x260) ? 0x0 : _0x2c347[_0x42a446(0x328)] - 0x2)[_0x42a446(0x357)](_0x42a446(0x20f))?.['parent']()[0x0], _0x6a4902 = _0x2c347['eq'](_0x3bae36 === 'DIV' ? 0x0 : _0x2c347[_0x42a446(0x328)] - 0x2)[_0x42a446(0x357)](_0x42a446(0x20f))?.[_0x42a446(0x3c4)]()[_0x42a446(0x3c4)]()[0x0];
                            _0x469ca7 && _0x280521[_0x42a446(0x375)](_0x469ca7, { 'childList': !![] }), _0x6a4902 && _0x280521['observe'](_0x6a4902, { 'attributes': !![] });
                        }
                    }, 0x32), _0x2c347[_0x33ac84(0x32d)](_0x33ac84(0x2ed), _0x33ac84(0x394)), _0xb98bc5(_0x2b22bd), _0x3138b3(this)['on']('click', _0x33ac84(0x3c7), function (_0x36d002) {
                        const _0x373f71 = _0x33ac84;
                        _0x742b06(!![]), _0xff1329 = _0x3138b3(this)['parent']()['parent']()[_0x373f71(0x3c4)]()[_0x373f71(0x323)](_0x373f71(0x30a)), _0x5d6d72 = location['pathname']['replace'](/\/$/, '')[_0x373f71(0x2f7)]('/')['at'](-0x1) || _0x3138b3(this)[_0x373f71(0x3c4)]()[_0x373f71(0x3c4)]()[_0x373f71(0x3c4)]()[_0x373f71(0x357)](_0x373f71(0x24a))['first']()['attr'](_0x373f71(0x327))[_0x373f71(0x2f7)]('/')['at'](0x2) || _0x3138b3(this)['parent']()[_0x373f71(0x3c4)]()[_0x373f71(0x3a1)](_0x373f71(0x2cc))[_0x373f71(0x3a1)]('div')[_0x373f71(0x3a1)](_0x373f71(0x2cc))[_0x373f71(0x357)](_0x373f71(0x24a))[_0x373f71(0x398)]()[_0x373f71(0x323)](_0x373f71(0x327))[_0x373f71(0x2f7)]('/')['at'](0x2);
                        var _0x16d9d6 = _0x3138b3(this)['parent']()[_0x373f71(0x3c4)]()[_0x373f71(0x3c4)](), _0x28ffe9 = _0x57e6d8(_0x16d9d6);
                        _0x4f0e51(!![], ![]), _0x54ecf1(_0x5d6d72, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x373f71(0x2c4)](() => {
                            let _0x1a7f98 = setInterval(() => {
                                const _0x41fb46 = a0_0x4467;
                                if (_0x3138b3(_0x41fb46(0x39f))[_0x41fb46(0x328)] > 0x0) {
                                    clearInterval(_0x1a7f98);
                                    var _0x28ef61 = _0x3138b3(_0x41fb46(0x1b6) + (_0x28ffe9 + 0x1) + '\x22]')?.[_0x41fb46(0x3c4)]()[_0x41fb46(0x357)](_0x41fb46(0x32e))?.['first']();
                                    _0x28ef61 != null && _0x28ef61['length'] > 0x0 ? _0x28ef61[_0x41fb46(0x345)]() : alert(_0x41fb46(0x3af)), _0x742b06(![]), _0x3138b3(_0x41fb46(0x310))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x3138b3(this)['on'](_0x33ac84(0x345), '.SNKMS_IG_NEWTAB_MAIN', function (_0x46ef7e) {
                        const _0x33e7b2 = _0x33ac84;
                        _0x742b06(!![]), _0xff1329 = _0x3138b3(this)[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x323)](_0x33e7b2(0x30a)), _0x5d6d72 = location['pathname']['replace'](/\/$/, '')[_0x33e7b2(0x2f7)]('/')['at'](-0x1) || _0x3138b3(this)[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x357)](_0x33e7b2(0x24a))['first']()[_0x33e7b2(0x323)](_0x33e7b2(0x327))[_0x33e7b2(0x2f7)]('/')['at'](0x2) || _0x3138b3(this)[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x3a1)](_0x33e7b2(0x2cc))[_0x33e7b2(0x3a1)](_0x33e7b2(0x1d9))[_0x33e7b2(0x3a1)](_0x33e7b2(0x2cc))[_0x33e7b2(0x357)](_0x33e7b2(0x24a))[_0x33e7b2(0x398)]()['attr']('href')['split']('/')['at'](0x2);
                        var _0x11afae = _0x3138b3(this)[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x3c4)]()[_0x33e7b2(0x3c4)](), _0x596fea = _0x57e6d8(_0x11afae);
                        _0x4f0e51(!![], ![]), _0x54ecf1(_0x5d6d72, _0x33e7b2(0x197), '')['then'](() => {
                            let _0x28b29a = setInterval(() => {
                                const _0x1496ae = a0_0x4467;
                                if (_0x3138b3(_0x1496ae(0x39f))[_0x1496ae(0x328)] > 0x0) {
                                    clearInterval(_0x28b29a);
                                    var _0xea18d3 = _0x3138b3(_0x1496ae(0x1b6) + (_0x596fea + 0x1) + '\x22]');
                                    if (_0x2a78cf[_0x1496ae(0x1d1)] && _0x2a78cf['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0x11f6aa(_0xea18d3[_0x1496ae(0x224)]()[0x0], !![]);
                                    else {
                                        let _0x375ead = _0xea18d3?.[_0x1496ae(0x323)](_0x1496ae(0x35a));
                                        if (_0x375ead) {
                                            var _0x58f8cc = new URL(_0x375ead);
                                            _0x58f8cc['host'] = _0x1496ae(0x1d2), _0x225d2e(_0x58f8cc[_0x1496ae(0x327)]);
                                        } else
                                            alert('Can\x20not\x20find\x20open\x20tab\x20url.');
                                    }
                                    _0x742b06(![]), _0x3138b3(_0x1496ae(0x310))[_0x1496ae(0x314)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x3138b3(this)['on'](_0x33ac84(0x345), _0x33ac84(0x3e4), async function (_0x59b4bb) {
                        const _0x91dbb6 = _0x33ac84;
                        _0xff1329 = _0x3138b3(this)[_0x91dbb6(0x3c4)]()['parent']()[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x323)]('data-username'), _0x5d6d72 = location[_0x91dbb6(0x306)][_0x91dbb6(0x36d)](/\/$/, '')[_0x91dbb6(0x2f7)]('/')['at'](-0x1) || _0x3138b3(this)[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x357)](_0x91dbb6(0x24a))[_0x91dbb6(0x224)]()[_0x91dbb6(0x323)]('href')[_0x91dbb6(0x2f7)]('/')['at'](0x2) || _0x3138b3(this)[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x3c4)]()['children'](_0x91dbb6(0x2cc))['children'](_0x91dbb6(0x1d9))[_0x91dbb6(0x3a1)](_0x91dbb6(0x2cc))[_0x91dbb6(0x357)]('a[href^=\x22/p/\x22]')[_0x91dbb6(0x398)]()[_0x91dbb6(0x323)](_0x91dbb6(0x327))[_0x91dbb6(0x2f7)]('/')['at'](0x2), _0x4f0e51(_0x2a78cf[_0x91dbb6(0x2f6)], !![]), _0x3138b3('#article-id')[_0x91dbb6(0x24d)](_0x91dbb6(0x2d3) + _0x5d6d72 + '\x22>' + _0x5d6d72 + _0x91dbb6(0x1e6));
                        if (_0x2a78cf[_0x91dbb6(0x31c)]) {
                            _0x742b06(!![]), _0x394462(!![]);
                            var _0x5d6ff8 = _0x57e6d8(_0x3138b3(this)[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x3c4)]());
                            _0x54ecf1(_0x5d6d72, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x91dbb6(0x2c4)](() => {
                                let _0x5a6b18 = setInterval(() => {
                                    const _0x52e20c = a0_0x4467;
                                    if (_0x3138b3(_0x52e20c(0x39f))[_0x52e20c(0x328)] > 0x0) {
                                        clearInterval(_0x5a6b18);
                                        var _0x359a2c = _0x3138b3(_0x52e20c(0x1b6) + (_0x5d6ff8 + 0x1) + '\x22]')?.[_0x52e20c(0x323)](_0x52e20c(0x35a));
                                        _0x359a2c ? (_0x742b06(![]), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x5d6ff8 + 0x1) + '\x22]')?.[_0x52e20c(0x345)]()) : alert(_0x52e20c(0x283)), _0x3138b3(_0x52e20c(0x310))[_0x52e20c(0x314)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x2a78cf['DIRECT_DOWNLOAD_ALL']) {
                            var _0x22537e = 0x0, _0x52b12e = _0x3138b3(this)[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x3c4)]()['find'](_0x91dbb6(0x3d0))['length'], _0x14b2b1 = window[_0x91dbb6(0x1dd)][_0x91dbb6(0x306)], _0x58022d = '/' + _0x14b2b1[_0x91dbb6(0x2f7)]('/')[0x1] + '/' + _0x14b2b1['split']('/')[0x2] + '/', _0x5c44c3 = _0x2a78cf[_0x91dbb6(0x2d1)], _0x280d71 = new Date(_0x3138b3(this)[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x3c4)]()['find'](_0x91dbb6(0x205))[_0x91dbb6(0x224)]()['attr']('datetime'))[_0x91dbb6(0x1bf)]();
                            if (_0x52b12e)
                                _0x3138b3(this)['parent']()[_0x91dbb6(0x357)](_0x91dbb6(0x3d0))['each'](function () {
                                    const _0x34f045 = _0x91dbb6;
                                    let _0x3cf222 = _0x3138b3(this)[_0x34f045(0x3c4)]()[_0x34f045(0x3c4)]()[_0x34f045(0x357)](_0x34f045(0x2ca));
                                    _0x3cf222 && _0x3cf222['attr'](_0x34f045(0x22e)) && (_0x5c44c3 = !![]);
                                }), _0x5c44c3 || _0x2a78cf[_0x91dbb6(0x1d1)] ? _0x54ecf1(_0x5d6d72, _0x91dbb6(0x197), _0x1e06fc(_0x91dbb6(0x1a6))) : (_0x3138b3(this)[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x357)](_0x91dbb6(0x3d0))[_0x91dbb6(0x18a)](function () {
                                    const _0x16af7a = _0x91dbb6;
                                    _0x22537e++;
                                    let _0xfc050 = _0x3138b3(this)[_0x16af7a(0x357)](_0x16af7a(0x2ca)), _0x3c0ca9 = _0x3138b3(this)[_0x16af7a(0x357)](_0x16af7a(0x1a5)), _0x5be2a2 = _0x3c0ca9[_0x16af7a(0x323)]('srcset') ? _0x3c0ca9[_0x16af7a(0x323)](_0x16af7a(0x1ca))[_0x16af7a(0x2f7)]('\x20')[0x0] : _0x3c0ca9[_0x16af7a(0x323)]('src');
                                    _0xfc050 && _0xfc050[_0x16af7a(0x323)](_0x16af7a(0x22e)) && (_0x5c44c3 = !![]), _0x3c0ca9 && _0x5be2a2 && _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')[_0x16af7a(0x2fc)](_0x16af7a(0x31d) + _0x280d71 + _0x16af7a(0x30f) + _0x5d6d72 + _0x16af7a(0x3a4) + _0x22537e + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x5be2a2 + _0x16af7a(0x28a) + _0x5be2a2 + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x1e06fc(_0x16af7a(0x370)) + _0x16af7a(0x39c) + _0x22537e + _0x16af7a(0x365));
                                }), _0x5c44c3 && _0x54ecf1(_0x5d6d72, _0x91dbb6(0x197), _0x1e06fc('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x2a78cf[_0x91dbb6(0x1d1)])
                                    _0x54ecf1(_0x5d6d72, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x1e06fc(_0x91dbb6(0x1a6)));
                                else {
                                    _0x22537e++;
                                    let _0x517f08 = _0x3138b3(this)[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x357)](_0x91dbb6(0x2ca)), _0x5b1f43 = _0x3138b3(this)[_0x91dbb6(0x3c4)]()[_0x91dbb6(0x3c4)]()['find']('._aagv\x20img'), _0x16199c = _0x5b1f43[_0x91dbb6(0x323)](_0x91dbb6(0x1ca)) ? _0x5b1f43[_0x91dbb6(0x323)]('srcset')[_0x91dbb6(0x2f7)]('\x20')[0x0] : _0x5b1f43['attr'](_0x91dbb6(0x22e));
                                    _0x517f08 && _0x517f08[_0x91dbb6(0x323)](_0x91dbb6(0x22e)) && _0x54ecf1(_0x5d6d72, _0x91dbb6(0x197), _0x1e06fc('LOAD_BLOB_ONE')), _0x5b1f43 && _0x16199c && _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')[_0x91dbb6(0x2fc)]('<a\x20datetime=\x22' + _0x280d71 + _0x91dbb6(0x30f) + _0x5d6d72 + _0x91dbb6(0x3a4) + _0x22537e + _0x91dbb6(0x2e4) + _0x16199c + _0x91dbb6(0x28a) + _0x16199c + _0x91dbb6(0x293) + _0x1e06fc(_0x91dbb6(0x370)) + _0x91dbb6(0x39c) + _0x22537e + _0x91dbb6(0x365));
                                }
                            }
                        }
                        _0x3138b3(_0x91dbb6(0x39f))['each'](function () {
                            const _0x3450b8 = _0x91dbb6;
                            _0x3138b3(this)[_0x3450b8(0x2c0)](_0x3450b8(0x2ec)), _0x3138b3(this)['before'](_0x3450b8(0x1e4)), _0x3138b3(this)['after'](_0x3450b8(0x2df) + _0x1e06fc(_0x3450b8(0x25e)) + '\x22\x20class=\x22newTab\x22>' + _0x209a06[_0x3450b8(0x25e)] + '</div>'), _0x3138b3(this)[_0x3450b8(0x323)](_0x3450b8(0x282)) == _0x3450b8(0x2ca) && _0x3138b3(this)[_0x3450b8(0x241)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1e06fc('THUMBNAIL_INTRO') + _0x3450b8(0x2a1) + _0x209a06[_0x3450b8(0x272)] + _0x3450b8(0x18e));
                        }), _0x2a78cf[_0x91dbb6(0x2f6)] && _0x54ecf1(_0x5d6d72, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x1e06fc(_0x91dbb6(0x1a6)))['then'](() => {
                            let _0x2af7b7 = setInterval(() => {
                                const _0x131c6a = a0_0x4467;
                                _0x3138b3(_0x131c6a(0x39f))['length'] > 0x0 && (clearInterval(_0x2af7b7), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x131c6a(0x18a)](function () {
                                    _0x3138b3(this)['click']();
                                }), _0x3138b3(_0x131c6a(0x310))[_0x131c6a(0x314)]());
                            }, 0xfa);
                        });
                    });
                    var _0xf4000f = _0x3138b3(this)[_0x33ac84(0x357)]('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x33ac84(0x224)]()['text']() || _0x3138b3(this)['find'](_0x33ac84(0x186))[_0x33ac84(0x1a1)](function () {
                        const _0x22205c = _0x33ac84;
                        return _0x3138b3(this)?.['text']()?.[_0x22205c(0x328)] > 0x0;
                    })[_0x33ac84(0x224)]()['text']();
                    _0x3138b3(this)[_0x33ac84(0x323)](_0x33ac84(0x274), _0x33ac84(0x3a9)), _0x3138b3(this)[_0x33ac84(0x323)](_0x33ac84(0x30a), _0xf4000f);
                }
            });
        }
        function _0x54ecf1(_0x1d1d02, _0x428cb3, _0x469cc5) {
            return new Promise(async _0x184758 => {
                const _0x2050e9 = a0_0x4467;
                _0x3138b3(_0x428cb3 + '\x20a')[_0x2050e9(0x314)](), _0x3138b3(_0x428cb3)[_0x2050e9(0x2fc)](_0x2050e9(0x35f) + _0x469cc5 + _0x2050e9(0x296));
                let _0x52882b = await _0x5f4402(_0x1d1d02);
                if (_0x52882b[_0x2050e9(0x24f)] === _0x2050e9(0x3d6)) {
                    let _0x164832 = 0x1, _0x206a74 = _0x52882b[_0x2050e9(0x3e7)], _0x276f87 = _0x206a74[_0x2050e9(0x2fb)];
                    _0x276f87['__typename'] == _0x2050e9(0x1f7) && _0x276f87[_0x2050e9(0x3a3)] && (_0x3138b3(_0x428cb3)[_0x2050e9(0x2fc)](_0x2050e9(0x3d5) + _0x276f87['id'] + '\x22\x20datetime=\x22' + _0x276f87[_0x2050e9(0x213)] + _0x2050e9(0x336) + _0x276f87['shortcode'] + _0x2050e9(0x385) + _0x276f87['owner'][_0x2050e9(0x26e)] + _0x2050e9(0x32c) + _0x164832 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x276f87['video_url'] + _0x2050e9(0x28a) + _0x276f87['display_resources'][0x1][_0x2050e9(0x22e)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x1e06fc('VID') + _0x2050e9(0x39c) + _0x164832 + _0x2050e9(0x365)), _0x164832++);
                    _0x276f87[_0x2050e9(0x3ad)] == _0x2050e9(0x36f) && (_0x3138b3(_0x428cb3)[_0x2050e9(0x2fc)](_0x2050e9(0x3d5) + _0x276f87['id'] + _0x2050e9(0x1d8) + _0x276f87[_0x2050e9(0x213)] + _0x2050e9(0x336) + _0x276f87[_0x2050e9(0x28b)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x276f87[_0x2050e9(0x1bc)][_0x2050e9(0x26e)] + _0x2050e9(0x32c) + _0x164832 + _0x2050e9(0x23b) + _0x276f87[_0x2050e9(0x1ad)][_0x276f87[_0x2050e9(0x1ad)][_0x2050e9(0x328)] - 0x1][_0x2050e9(0x22e)] + _0x2050e9(0x28a) + _0x276f87['display_resources'][0x1][_0x2050e9(0x22e)] + _0x2050e9(0x293) + _0x1e06fc(_0x2050e9(0x370)) + _0x2050e9(0x39c) + _0x164832 + '\x20-</a>'), _0x164832++);
                    if (_0x276f87[_0x2050e9(0x3ad)] == 'GraphSidecar' && _0x276f87['edge_sidecar_to_children'])
                        for (let _0x3189af of _0x276f87['edge_sidecar_to_children'][_0x2050e9(0x2cb)]) {
                            _0x3189af[_0x2050e9(0x30c)]['__typename'] == 'GraphVideo' && _0x3138b3(_0x428cb3)['append'](_0x2050e9(0x3d5) + _0x3189af[_0x2050e9(0x30c)]['id'] + _0x2050e9(0x1d8) + _0x276f87[_0x2050e9(0x213)] + _0x2050e9(0x336) + _0x276f87[_0x2050e9(0x28b)] + _0x2050e9(0x385) + _0x276f87[_0x2050e9(0x1bc)][_0x2050e9(0x26e)] + '\x22\x20data-globalIndex=\x22' + _0x164832 + _0x2050e9(0x23b) + _0x3189af[_0x2050e9(0x30c)]['video_url'] + _0x2050e9(0x28a) + _0x3189af[_0x2050e9(0x30c)][_0x2050e9(0x1ad)][0x1]['src'] + _0x2050e9(0x289) + _0x1e06fc(_0x2050e9(0x194)) + '</span>\x20' + _0x164832 + _0x2050e9(0x365)), _0x3189af['node'][_0x2050e9(0x3ad)] == _0x2050e9(0x36f) && _0x3138b3(_0x428cb3)['append'](_0x2050e9(0x3d5) + _0x3189af[_0x2050e9(0x30c)]['id'] + '\x22\x20datetime=\x22' + _0x276f87[_0x2050e9(0x213)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x276f87[_0x2050e9(0x28b)] + _0x2050e9(0x38e) + _0x276f87[_0x2050e9(0x1bc)][_0x2050e9(0x26e)] + _0x2050e9(0x32c) + _0x164832 + _0x2050e9(0x23b) + _0x3189af['node'][_0x2050e9(0x1ad)][_0x3189af[_0x2050e9(0x30c)][_0x2050e9(0x1ad)][_0x2050e9(0x328)] - 0x1]['src'] + _0x2050e9(0x28a) + _0x3189af[_0x2050e9(0x30c)][_0x2050e9(0x1ad)][0x1]['src'] + _0x2050e9(0x293) + _0x1e06fc(_0x2050e9(0x370)) + _0x2050e9(0x39c) + _0x164832 + _0x2050e9(0x365)), _0x164832++;
                        }
                } else {
                    let _0x29068e = _0x52882b[_0x2050e9(0x3e7)];
                    if (_0x29068e[_0x2050e9(0x268)])
                        _0x23a56a(_0x2050e9(0x268)), _0x29068e[_0x2050e9(0x268)][_0x2050e9(0x1ec)]((_0x331b3b, _0x2e1a2f) => {
                            const _0x1c602d = _0x2050e9;
                            let _0x4ca9ef = _0x2e1a2f + 0x1;
                            _0x331b3b['video_versions'] == null ? (_0x331b3b[_0x1c602d(0x1b1)][_0x1c602d(0x225)][_0x1c602d(0x372)](function (_0x12344a, _0x43ee18) {
                                const _0x158270 = _0x1c602d;
                                if (_0x12344a[_0x158270(0x34b)] < _0x43ee18[_0x158270(0x34b)])
                                    return 0x1;
                                if (_0x12344a[_0x158270(0x34b)] > _0x43ee18[_0x158270(0x34b)])
                                    return -0x1;
                                return 0x0;
                            }), _0x3138b3(_0x428cb3)[_0x1c602d(0x2fc)](_0x1c602d(0x3d5) + _0x331b3b['pk'] + _0x1c602d(0x1d8) + _0x331b3b[_0x1c602d(0x2ea)] + _0x1c602d(0x336) + _0x29068e[_0x1c602d(0x25d)] + _0x1c602d(0x38e) + _0x29068e[_0x1c602d(0x1bc)][_0x1c602d(0x26e)] + '\x22\x20data-globalIndex=\x22' + _0x4ca9ef + _0x1c602d(0x23b) + _0x331b3b['image_versions2']['candidates'][0x0][_0x1c602d(0x313)] + _0x1c602d(0x28a) + _0x331b3b['image_versions2']['candidates'][0x0][_0x1c602d(0x313)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x1e06fc('IMG') + _0x1c602d(0x39c) + _0x4ca9ef + _0x1c602d(0x365))) : _0x3138b3(_0x428cb3)[_0x1c602d(0x2fc)](_0x1c602d(0x3d5) + _0x331b3b['pk'] + _0x1c602d(0x1d8) + _0x331b3b[_0x1c602d(0x2ea)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x29068e[_0x1c602d(0x25d)] + _0x1c602d(0x385) + _0x29068e[_0x1c602d(0x1bc)]['username'] + _0x1c602d(0x32c) + _0x4ca9ef + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x331b3b[_0x1c602d(0x19f)][0x0][_0x1c602d(0x313)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x331b3b[_0x1c602d(0x1b1)][_0x1c602d(0x225)][0x0][_0x1c602d(0x313)] + _0x1c602d(0x25a) + _0x1e06fc(_0x1c602d(0x194)) + _0x1c602d(0x39c) + _0x4ca9ef + '\x20-</a>');
                        });
                    else {
                        let _0x28e0b2 = 0x1;
                        _0x29068e[_0x2050e9(0x19f)] == null ? (_0x29068e[_0x2050e9(0x1b1)]['candidates']['sort'](function (_0x57e7cd, _0x51de6b) {
                            const _0x4554d5 = _0x2050e9;
                            if (_0x57e7cd[_0x4554d5(0x34b)] < _0x51de6b['width'])
                                return 0x1;
                            if (_0x57e7cd[_0x4554d5(0x34b)] > _0x51de6b[_0x4554d5(0x34b)])
                                return -0x1;
                            return 0x0;
                        }), _0x3138b3(_0x428cb3)[_0x2050e9(0x2fc)](_0x2050e9(0x3d5) + _0x29068e['pk'] + _0x2050e9(0x1d8) + _0x29068e[_0x2050e9(0x2ea)] + _0x2050e9(0x336) + _0x29068e[_0x2050e9(0x25d)] + _0x2050e9(0x38e) + _0x29068e[_0x2050e9(0x1bc)][_0x2050e9(0x26e)] + _0x2050e9(0x32c) + _0x28e0b2 + _0x2050e9(0x23b) + _0x29068e[_0x2050e9(0x1b1)]['candidates'][0x0][_0x2050e9(0x313)] + _0x2050e9(0x28a) + _0x29068e[_0x2050e9(0x1b1)][_0x2050e9(0x225)][0x0][_0x2050e9(0x313)] + _0x2050e9(0x293) + _0x1e06fc(_0x2050e9(0x370)) + _0x2050e9(0x39c) + _0x28e0b2 + '\x20-</a>')) : _0x3138b3(_0x428cb3)[_0x2050e9(0x2fc)](_0x2050e9(0x3d5) + _0x29068e['pk'] + _0x2050e9(0x1d8) + _0x29068e[_0x2050e9(0x2ea)] + _0x2050e9(0x336) + _0x29068e[_0x2050e9(0x25d)] + _0x2050e9(0x385) + _0x29068e[_0x2050e9(0x1bc)][_0x2050e9(0x26e)] + _0x2050e9(0x32c) + _0x28e0b2 + _0x2050e9(0x23b) + _0x29068e[_0x2050e9(0x19f)][0x0][_0x2050e9(0x313)] + _0x2050e9(0x28a) + _0x29068e[_0x2050e9(0x1b1)][_0x2050e9(0x225)][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x1e06fc(_0x2050e9(0x194)) + _0x2050e9(0x39c) + _0x28e0b2 + _0x2050e9(0x365));
                    }
                }
                _0x3138b3(_0x2050e9(0x33a))[_0x2050e9(0x314)](), _0x3138b3(_0x2050e9(0x39f))[_0x2050e9(0x18a)](function () {
                    const _0x4a5c94 = _0x2050e9;
                    _0x3138b3(this)[_0x4a5c94(0x2c0)]('<div></div>'), _0x3138b3(this)[_0x4a5c94(0x247)](_0x4a5c94(0x1e4)), _0x3138b3(this)[_0x4a5c94(0x241)](_0x4a5c94(0x2df) + _0x1e06fc(_0x4a5c94(0x25e)) + '\x22\x20class=\x22newTab\x22>' + _0x209a06[_0x4a5c94(0x25e)] + _0x4a5c94(0x18e)), _0x3138b3(this)[_0x4a5c94(0x323)](_0x4a5c94(0x282)) == _0x4a5c94(0x2ca) && _0x3138b3(this)['after']('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1e06fc(_0x4a5c94(0x1e1)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x209a06['THUMBNAIL'] + _0x4a5c94(0x18e));
                }), _0x184758(!![]);
            });
        }
        function _0x4f0e51(_0x3cb8cc, _0x1c87f7) {
            const _0x47b6d6 = _0x4e984e;
            let _0x39cdd7 = _0x3cb8cc ? _0x47b6d6(0x2aa) : '';
            _0x3138b3(_0x47b6d6(0x23d))['append']('<div\x20class=\x22IG_SN_DIG\x20' + _0x39cdd7 + _0x47b6d6(0x266)), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')[_0x47b6d6(0x2fc)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x1e06fc(_0x47b6d6(0x37d)) + '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x209a06[_0x47b6d6(0x37d)] + _0x47b6d6(0x204)), _0x1c87f7 && (_0x3138b3(_0x47b6d6(0x1b8))['append'](_0x47b6d6(0x39e)), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')[_0x47b6d6(0x2fc)](_0x47b6d6(0x1a2) + _0x1e06fc(_0x47b6d6(0x36b)) + _0x47b6d6(0x3b6)), _0x3138b3(_0x47b6d6(0x3c9))[_0x47b6d6(0x2fc)]('<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>' + _0x1e06fc(_0x47b6d6(0x3db)) + _0x47b6d6(0x3b6)), _0x3138b3(_0x47b6d6(0x1b8))['append'](_0x47b6d6(0x3dd) + _0x1e06fc(_0x47b6d6(0x3cf)) + _0x47b6d6(0x1b9)));
        }
        function _0x394462(_0x278b63) {
            const _0x1aff9a = _0x4e984e;
            _0x3138b3(_0x1aff9a(0x310))[_0x1aff9a(0x328)] && (_0x278b63 ? _0x3138b3(_0x1aff9a(0x310))[_0x1aff9a(0x188)]('hidden') : _0x3138b3(_0x1aff9a(0x310))[_0x1aff9a(0x20a)](_0x1aff9a(0x2aa)));
        }
        function _0x16d33f(_0x44120f, _0x10e116, _0x4a9a01, _0x41f55f, _0x1059cd, _0x2724fb) {
            setTimeout(() => {
                _0x742b06(!![]), fetch(_0x44120f)['then'](_0x3788bb => {
                    const _0x355aad = a0_0x4467;
                    return _0x3788bb[_0x355aad(0x379)]()[_0x355aad(0x2c4)](_0x16ceb8 => {
                        _0x742b06(![]), _0x4d5f7d(_0x44120f, _0x16ceb8, _0x10e116, _0x4a9a01, _0x41f55f, _0x1059cd, _0x2724fb);
                    });
                });
            }, 0x32);
        }
        function _0x4d5f7d(_0x47ff73, _0x18deb8, _0xa1a671, _0x416afb, _0x56d3a2, _0x2ab90f, _0x3bc245) {
            const _0x47c32c = _0x4e984e;
            _0x56d3a2 = parseInt(_0x56d3a2[_0x47c32c(0x2b5)]()[_0x47c32c(0x1b7)](0xd, '0'));
            _0x2a78cf[_0x47c32c(0x33f)] && (_0x56d3a2 = parseInt(_0x56d3a2['toString']()['padEnd'](0xd, '0')));
            const _0x383e70 = new Date(_0x56d3a2), _0x35f3f8 = document['createElement']('a'), _0x53cd31 = new URL(_0x47ff73)[_0x47c32c(0x306)][_0x47c32c(0x2f7)]('/')['at'](-0x1)[_0x47c32c(0x2f7)]('.')[_0x47c32c(0x3ac)](0x0, -0x1)[_0x47c32c(0x346)]('.'), _0x2079f9 = _0x383e70['getFullYear']()[_0x47c32c(0x2b5)](), _0x2a8039 = (_0x383e70[_0x47c32c(0x20c)]() + 0x1)['toString']()[_0x47c32c(0x2c1)](0x2, '0'), _0x176c07 = _0x383e70[_0x47c32c(0x36a)]()[_0x47c32c(0x2b5)]()[_0x47c32c(0x2c1)](0x2, '0'), _0x329477 = _0x383e70['getHours']()[_0x47c32c(0x2b5)]()['padStart'](0x2, '0'), _0x29d21a = _0x383e70[_0x47c32c(0x309)]()[_0x47c32c(0x2b5)]()[_0x47c32c(0x2c1)](0x2, '0'), _0x5538b7 = _0x383e70['getSeconds']()[_0x47c32c(0x2b5)]()[_0x47c32c(0x2c1)](0x2, '0');
            var _0x5b3576 = _0x2a2a9d['toUpperCase'](), _0x1edd45 = _0x3bc245 ?? '', _0xb93fd4 = {
                    '%USERNAME%': _0xa1a671,
                    '%SOURCE_TYPE%': _0x416afb,
                    '%SHORTCODE%': _0x1edd45,
                    '%YEAR%': _0x2079f9,
                    '%2-YEAR%': _0x2079f9['substr'](-0x2),
                    '%MONTH%': _0x2a8039,
                    '%DAY%': _0x176c07,
                    '%HOUR%': _0x329477,
                    '%MINUTE%': _0x29d21a,
                    '%SECOND%': _0x5538b7,
                    '%ORIGINAL_NAME%': _0x53cd31,
                    '%ORIGINAL_NAME_FIRST%': _0x53cd31[_0x47c32c(0x2f7)]('_')['at'](0x0)
                };
            _0x5b3576 = _0x5b3576[_0x47c32c(0x36d)](/%[\w\-]+%/g, function (_0x8a2d74) {
                return _0xb93fd4[_0x8a2d74] || _0x8a2d74;
            });
            const _0x4ed006 = _0xa1a671 + '_' + _0x53cd31 + '.' + _0x2ab90f;
            _0x35f3f8[_0x47c32c(0x327)] = URL[_0x47c32c(0x1ce)](_0x18deb8), _0x35f3f8[_0x47c32c(0x26f)]('download', _0x2a78cf[_0x47c32c(0x2e0)] ? _0x5b3576 + '.' + _0x2ab90f : _0x4ed006), _0x35f3f8[_0x47c32c(0x345)](), _0x35f3f8[_0x47c32c(0x314)]();
        }
        async function _0x11f6aa(_0x3bcc65, _0x2ea08d) {
            const _0x1a16dc = _0x4e984e;
            let _0x1648dc = new Date()[_0x1a16dc(0x1bf)](), _0x14f878 = Math[_0x1a16dc(0x380)](_0x1648dc / 0x3e8), _0x2dc3da = _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)](_0x1a16dc(0x30a)) ? _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)](_0x1a16dc(0x30a)) : _0xff1329;
            !_0x2dc3da && _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)](_0x1a16dc(0x2f5)) && (_0x23a56a(_0x1a16dc(0x37e), _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)](_0x1a16dc(0x35a))), _0x2dc3da = await _0x4d5efd(_0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)]('data-path'))['catch'](_0x3b2702 => {
                const _0x165d33 = _0x1a16dc;
                _0x23a56a('get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:', _0x3b2702[_0x165d33(0x287)]);
            }), _0x2dc3da == null && (_0x2dc3da = _0x1a16dc(0x25c)));
            _0x2a78cf[_0x1a16dc(0x33f)] && _0x3138b3(_0x3bcc65)['attr'](_0x1a16dc(0x37a)) && (_0x14f878 = parseInt(_0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)](_0x1a16dc(0x37a))));
            if (_0x2a78cf['FORCE_RESOURCE_VIA_MEDIA']) {
                _0x742b06(!![]);
                let _0x1ccdcc = await _0x25e69e(_0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)](_0x1a16dc(0x33d)));
                _0x742b06(![]);
                if (_0x1ccdcc[_0x1a16dc(0x34f)] === 'ok') {
                    var _0x31346d = null;
                    _0x1ccdcc[_0x1a16dc(0x2fd)][0x0]['video_versions'] ? _0x31346d = _0x1ccdcc['items'][0x0][_0x1a16dc(0x19f)][0x0][_0x1a16dc(0x313)] : (_0x1ccdcc['items'][0x0]['image_versions2'][_0x1a16dc(0x225)]['sort'](function (_0xf5fad5, _0xf37b40) {
                        const _0x21b7dd = _0x1a16dc;
                        if (_0xf5fad5[_0x21b7dd(0x34b)] < _0xf37b40[_0x21b7dd(0x34b)])
                            return 0x1;
                        if (_0xf5fad5['width'] > _0xf37b40[_0x21b7dd(0x34b)])
                            return -0x1;
                        return 0x0;
                    }), _0x31346d = _0x1ccdcc[_0x1a16dc(0x2fd)][0x0][_0x1a16dc(0x1b1)][_0x1a16dc(0x225)][0x0][_0x1a16dc(0x313)]);
                    if (_0x2ea08d) {
                        let _0x4be864 = new URL(_0x31346d);
                        _0x4be864[_0x1a16dc(0x2ef)] = _0x1a16dc(0x1d2), _0x225d2e(_0x4be864[_0x1a16dc(0x327)]);
                    } else
                        _0x16d33f(_0x31346d, _0x2dc3da, _0x3138b3(_0x3bcc65)['attr'](_0x1a16dc(0x282)), _0x14f878, _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)]('data-type'), _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)]('data-path'));
                } else {
                    if (_0x2a78cf[_0x1a16dc(0x3ea)]) {
                        if (_0x2ea08d) {
                            let _0x358aff = new URL(_0x3138b3(_0x3bcc65)['attr'](_0x1a16dc(0x35a)));
                            _0x358aff['host'] = 'scontent.cdninstagram.com', _0x225d2e(_0x358aff[_0x1a16dc(0x327)]);
                        } else
                            _0x16d33f(_0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)]('data-href'), _0x2dc3da, _0x3138b3(_0x3bcc65)['attr'](_0x1a16dc(0x282)), _0x14f878, _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)](_0x1a16dc(0x23a)), _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)](_0x1a16dc(0x2f5)));
                    } else
                        alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x1ccdcc['message']);
                    _0x23a56a(_0x1ccdcc);
                }
            } else
                _0x16d33f(_0x3138b3(_0x3bcc65)['attr']('data-href'), _0x2dc3da, _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)]('data-name'), _0x14f878, _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)](_0x1a16dc(0x23a)), _0x3138b3(_0x3bcc65)[_0x1a16dc(0x323)]('data-path'));
        }
        function _0x573230(_0x36256f) {
            const _0x23c52e = _0x4e984e;
            var _0x4b042f = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x23c52e(0x311),
                        'NOTICE_UPDATE_CONTENT': _0x23c52e(0x3b8),
                        'CHECK_UPDATE': _0x23c52e(0x2bc),
                        'CHECK_UPDATE_MENU': _0x23c52e(0x201),
                        'CHECK_UPDATE_INTRO': 'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
                        'RELOAD_SCRIPT': _0x23c52e(0x1ba),
                        'DONATE': _0x23c52e(0x2b2),
                        'FEEDBACK': _0x23c52e(0x291),
                        'NEW_TAB': _0x23c52e(0x2eb),
                        'SHOW_DOM_TREE': _0x23c52e(0x3d1),
                        'SELECT_AND_COPY': _0x23c52e(0x3a2),
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
                        'REPORT_GITHUB': 'Report\x20an\x20Issue\x20on\x20GitHub',
                        'REPORT_DISCORD': _0x23c52e(0x295),
                        'REPORT_FORK': _0x23c52e(0x1c8),
                        'DEBUG': _0x23c52e(0x18d),
                        'CLOSE': _0x23c52e(0x308),
                        'ALL_CHECK': _0x23c52e(0x256),
                        'BATCH_DOWNLOAD_SELECTED': _0x23c52e(0x25b),
                        'BATCH_DOWNLOAD_DIRECT': _0x23c52e(0x1fe),
                        'IMG': _0x23c52e(0x378),
                        'VID': 'Video',
                        'DW': _0x23c52e(0x2e5),
                        'THUMBNAIL_INTRO': _0x23c52e(0x37f),
                        'LOAD_BLOB_ONE': _0x23c52e(0x340),
                        'LOAD_BLOB_MULTIPLE': _0x23c52e(0x22b),
                        'LOAD_BLOB_RELOAD': _0x23c52e(0x391),
                        'NO_CHECK_RESOURCE': _0x23c52e(0x32a),
                        'NO_VID_URL': _0x23c52e(0x2cd),
                        'SETTING': _0x23c52e(0x202),
                        'AUTO_RENAME': _0x23c52e(0x330),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0x23c52e(0x191),
                        'DISABLE_VIDEO_LOOPING': _0x23c52e(0x1c1),
                        'HTML5_VIDEO_CONTROL': _0x23c52e(0x1fa),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': _0x23c52e(0x1eb),
                        'SCROLL_BUTTON': _0x23c52e(0x3cb),
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': _0x23c52e(0x39b),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x23c52e(0x352),
                        'AUTO_RENAME_INTRO': _0x23c52e(0x208),
                        'RENAME_SHORTCODE_INTRO': _0x23c52e(0x2d6),
                        'RENAME_PUBLISH_DATE_INTRO': _0x23c52e(0x1fd),
                        'RENAME_LOCATE_DATE_INTRO': _0x23c52e(0x227),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x23c52e(0x270),
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x23c52e(0x3b7),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x23c52e(0x233),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': 'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x23c52e(0x1ac),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x23c52e(0x353),
                        'SCROLL_BUTTON_INTRO': _0x23c52e(0x23e),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': 'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x23c52e(0x3ed),
                        'SKIP_VIEW_STORY_CONFIRM': _0x23c52e(0x1b3),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x23c52e(0x3dc)
                    }
                }, _0x33f1e4 = Object[_0x23c52e(0x1f0)]({}, _0x4b042f, _0x3338e6), _0x21d254 = Object[_0x23c52e(0x2c5)](_0x33f1e4)[_0x23c52e(0x372)]()[_0x23c52e(0x1e2)]((_0x284e8a, _0x2a5bdb) => {
                    return _0x284e8a[_0x2a5bdb] = _0x33f1e4[_0x2a5bdb], _0x284e8a;
                }, {});
            return _0x21d254;
        }
        async function _0x2bb0b1(_0x3a8611) {
            return new Promise((_0x4db570, _0x36794a) => {
                const _0x389cb0 = a0_0x4467;
                GM_xmlhttpRequest({
                    'method': _0x389cb0(0x2d4),
                    'url': _0x389cb0(0x360) + _0x3a8611 + _0x389cb0(0x319),
                    'onload': function (_0x4980b1) {
                        const _0x13cf07 = _0x389cb0;
                        try {
                            let _0x5baf32 = JSON['parse'](_0x4980b1[_0x13cf07(0x38d)]);
                            _0x4db570(_0x5baf32);
                        } catch (_0x4804cb) {
                            _0x36794a(_0x4804cb);
                        }
                    },
                    'onerror': function (_0x291049) {
                        const _0x2812b6 = _0x389cb0;
                        _0x23a56a(_0x2812b6(0x371), _0x2812b6(0x28e), _0x291049), _0x36794a(_0x291049);
                    }
                });
            });
        }
        function _0x1e06fc(_0x51717b) {
            const _0x2a913b = _0x4e984e, _0x1fd425 = _0x573230();
            return _0x1fd425[_0x11ed9d] != undefined && _0x1fd425[_0x11ed9d][_0x51717b] != undefined ? _0x1fd425[_0x11ed9d][_0x51717b] : _0x1fd425[_0x2a913b(0x348)][_0x51717b];
        }
        function _0x5355db() {
            const _0x8adc06 = _0x4e984e;
            _0x3138b3(_0x8adc06(0x1c9))[_0x8adc06(0x18a)](function () {
                const _0x11422f = _0x8adc06;
                _0x3138b3(this)[_0x11422f(0x23f)](_0x1e06fc(_0x3138b3(this)['attr'](_0x11422f(0x21b))));
            }), _0x3138b3(_0x8adc06(0x36c))[_0x8adc06(0x18a)](function () {
                const _0x1543d7 = _0x8adc06;
                _0x3138b3(this)[_0x1543d7(0x323)](_0x1543d7(0x363), _0x1e06fc(_0x3138b3(this)[_0x1543d7(0x323)](_0x1543d7(0x1b5))));
            });
        }
        function _0x309445() {
            const _0x5b1738 = _0x4e984e;
            for (let _0x5c6ce4 of _0x108075) {
                _0x23a56a(_0x5b1738(0x2a8), _0x5c6ce4), GM_unregisterMenuCommand(_0x5c6ce4);
            }
            _0x108075['push'](GM_registerMenuCommand(_0x1e06fc(_0x5b1738(0x1c6)), () => {
                _0x1aea2f();
            }, { 'accessKey': 'w' })), _0x108075[_0x5b1738(0x386)](GM_registerMenuCommand(_0x1e06fc(_0x5b1738(0x277)), () => {
                const _0x482a3c = _0x5b1738;
                GM_openInTab(_0x482a3c(0x1cb), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x108075[_0x5b1738(0x386)](GM_registerMenuCommand(_0x1e06fc(_0x5b1738(0x34c)), () => {
                _0x4d7db1();
            }, { 'accessKey': 'z' })), _0x108075['push'](GM_registerMenuCommand(_0x1e06fc(_0x5b1738(0x367)), () => {
                _0x1d2f4e();
            }, { 'accessKey': 'f' })), _0x108075[_0x5b1738(0x386)](GM_registerMenuCommand(_0x1e06fc(_0x5b1738(0x29a)), () => {
                _0x3a711b();
            }, { 'accessKey': 'c' })), _0x108075[_0x5b1738(0x386)](GM_registerMenuCommand(_0x1e06fc(_0x5b1738(0x273)), () => {
                _0x46dee7();
            }, { 'accessKey': 'r' }));
        }
        function _0xa7c45f(_0x4bc0bc) {
            const _0xdeadae = _0x4e984e;
            if (!_0x2a78cf['CHECK_UPDATE'])
                return;
            const _0x5924bd = GM_getValue(_0xdeadae(0x1f6)) ?? new Date()[_0xdeadae(0x1bf)](), _0x481f22 = new Date()[_0xdeadae(0x1bf)]();
            _0x481f22 > parseInt(_0x5924bd) + _0x4bc0bc * 0x3e8 && (GM_setValue(_0xdeadae(0x1f6), new Date()[_0xdeadae(0x1bf)]()), _0x3a711b());
        }
        function _0x3a711b() {
            const _0x1d6929 = _0x4e984e, _0x1ee339 = GM_info[_0x1d6929(0x223)][_0x1d6929(0x3a8)], _0x1f5719 = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': _0x1d6929(0x2d4),
                'url': _0x1f5719,
                'onload': function (_0x45be91) {
                    const _0x27b408 = _0x1d6929, _0x54420f = _0x45be91['responseText'], _0x2c6b28 = _0x54420f[_0x27b408(0x298)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x2c6b28 && _0x2c6b28[0x1]) {
                        const _0x190605 = _0x2c6b28[0x1];
                        _0x23a56a(_0x27b408(0x2a6), _0x1ee339, '|', _0x27b408(0x261), _0x190605), _0x190605 !== _0x1ee339 && typeof this[_0x27b408(0x22c)] === _0x27b408(0x21f) ? (this['updatenotification'] = null, GM_notification({
                            'text': _0x1e06fc(_0x27b408(0x3cc)),
                            'title': _0x1e06fc(_0x27b408(0x3d8)),
                            'tag': _0x27b408(0x337),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x27b408(0x231),
                            'onclick': _0x9bee29 => {
                                const _0x242cf9 = _0x27b408;
                                _0x9bee29?.[_0x242cf9(0x3b2)]();
                                var _0x788ca1 = GM_openInTab(GM_info[_0x242cf9(0x223)][_0x242cf9(0x31b)]);
                                setTimeout(() => {
                                    _0x788ca1['close']();
                                }, 0xfa);
                            }
                        })) : _0x23a56a('there\x20is\x20no\x20new\x20update');
                    } else
                        console['error'](_0x27b408(0x193));
                }
            });
        }
        function _0x1aea2f() {
            const _0x14e901 = _0x4e984e;
            _0x3138b3(_0x14e901(0x310))[_0x14e901(0x314)](), _0x4f0e51(), _0x3138b3('.IG_SN_DIG\x20#post_info')['text'](_0x14e901(0x199)), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div')['append']('<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20text\x20is\x20translated\x20using\x20machine\x20translation\x20and\x20may\x20be\x20inaccurate;\x20you\x20can\x20contact\x20support\x20to\x20correct\x20the\x20translation.</div>');
            for (let _0x3dd503 in _0x2f87d2) {
                _0x3138b3(_0x14e901(0x278))['append'](_0x14e901(0x1be) + _0x3dd503 + '\x22\x20' + (_0x11ed9d == _0x3dd503 ? 'selected' : '') + '>' + _0x2f87d2[_0x3dd503] + _0x14e901(0x3bb));
            }
            for (let _0x455290 in _0x2a78cf) {
                _0x3138b3(_0x14e901(0x395))[_0x14e901(0x2fc)](_0x14e901(0x1df) + (_0x35d48f[_0x14e901(0x2d9)](_0x455290) ? _0x14e901(0x3bd) : '') + _0x14e901(0x21a) + _0x1e06fc(_0x455290 + _0x14e901(0x27e)) + _0x14e901(0x38b) + (_0x455290 + _0x14e901(0x27e)) + _0x14e901(0x242) + _0x455290 + '\x22>' + _0x1e06fc(_0x455290) + '</span>\x20<input\x20id=\x22' + _0x455290 + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x2a78cf[_0x455290] === !![] ? _0x14e901(0x236) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x455290 === 'MODIFY_VIDEO_VOLUME' && _0x3138b3(_0x14e901(0x33b) + _0x455290 + '\x22]')['parent'](_0x14e901(0x3b3))['on'](_0x14e901(0x2f3), function (_0x155e38) {
                    const _0x120aee = _0x14e901;
                    _0x155e38[_0x120aee(0x3b2)](), _0x3138b3(this)[_0x120aee(0x357)](_0x120aee(0x1bb))[_0x120aee(0x328)] === 0x0 && (_0x3138b3(this)[_0x120aee(0x2fc)](_0x120aee(0x200)), _0x3138b3(this)[_0x120aee(0x3a1)](_0x120aee(0x1bb))[_0x120aee(0x2fc)](_0x120aee(0x351) + _0x4821da + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0x3138b3(this)['children'](_0x120aee(0x1bb))['append'](_0x120aee(0x351) + _0x4821da + _0x120aee(0x368)), _0x3138b3(this)[_0x120aee(0x3a1)](_0x120aee(0x1bb))[_0x120aee(0x2fc)](_0x120aee(0x1c0) + _0x209a06[_0x120aee(0x37d)] + _0x120aee(0x18e)));
                }), _0x455290 === _0x14e901(0x2e0) && _0x3138b3(_0x14e901(0x33b) + _0x455290 + '\x22]')[_0x14e901(0x3c4)](_0x14e901(0x3b3))['on']('contextmenu', function (_0x474cc6) {
                    const _0x24a530 = _0x14e901;
                    _0x474cc6['preventDefault'](), _0x3138b3(this)[_0x24a530(0x357)](_0x24a530(0x1bb))[_0x24a530(0x328)] === 0x0 && (_0x3138b3(this)['append'](_0x24a530(0x200)), _0x3138b3(this)[_0x24a530(0x3a1)](_0x24a530(0x1bb))[_0x24a530(0x2fc)](_0x24a530(0x350) + _0x2a2a9d + _0x24a530(0x35c)), _0x3138b3(this)[_0x24a530(0x3a1)]('#tempWrapper')[_0x24a530(0x2fc)]('<div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x209a06[_0x24a530(0x37d)] + _0x24a530(0x18e)));
                });
            }
        }
        function _0x4d7db1() {
            const _0x121f30 = _0x4e984e;
            _0x3138b3(_0x121f30(0x310))[_0x121f30(0x314)](), _0x4f0e51(), _0x3138b3(_0x121f30(0x2c2))[_0x121f30(0x23f)]('IG\x20Debug\x20DOM\x20Tree'), _0x3138b3(_0x121f30(0x395))['append']('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x3138b3(_0x121f30(0x395))[_0x121f30(0x2fc)](_0x121f30(0x349)), _0x3138b3(_0x121f30(0x2dc))[_0x121f30(0x2fc)](_0x121f30(0x302) + _0x1e06fc(_0x121f30(0x3ca)) + '</a></button>'), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x121f30(0x2fc)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>' + _0x1e06fc(_0x121f30(0x22d)) + _0x121f30(0x369)), _0x3138b3(_0x121f30(0x2dc))[_0x121f30(0x2fc)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>' + _0x1e06fc(_0x121f30(0x3ce)) + _0x121f30(0x2ad)), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x1e06fc(_0x121f30(0x2ce)) + '</a></button>'), _0x3138b3(_0x121f30(0x2dc))[_0x121f30(0x2fc)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x1e06fc(_0x121f30(0x19c)) + '</a></button>');
        }
        function _0x1d2f4e() {
            const _0x56f99b = _0x4e984e;
            _0x3138b3(_0x56f99b(0x310))[_0x56f99b(0x314)](), _0x4f0e51(), _0x3138b3(_0x56f99b(0x2c2))[_0x56f99b(0x23f)](_0x56f99b(0x1e7)), _0x3138b3(_0x56f99b(0x395))[_0x56f99b(0x2fc)](_0x56f99b(0x349)), _0x3138b3(_0x56f99b(0x2dc))[_0x56f99b(0x2fc)](_0x56f99b(0x230) + _0x1e06fc(_0x56f99b(0x24e)) + _0x56f99b(0x369)), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x56f99b(0x2fc)](_0x56f99b(0x1a0) + _0x1e06fc('REPORT_GITHUB') + _0x56f99b(0x369)), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append'](_0x56f99b(0x226) + _0x1e06fc(_0x56f99b(0x19c)) + _0x56f99b(0x369));
        }
        function _0x225d2e(_0x1b506a) {
            const _0x288a89 = _0x4e984e;
            var _0x3c8679 = document[_0x288a89(0x3e6)]('a');
            _0x3c8679['href'] = _0x1b506a, _0x3c8679[_0x288a89(0x388)] = _0x288a89(0x2f2), document[_0x288a89(0x23d)][_0x288a89(0x390)](_0x3c8679), _0x3c8679[_0x288a89(0x345)](), _0x3c8679[_0x288a89(0x314)]();
        }
        function _0x46dee7() {
            const _0x316694 = _0x4e984e;
            clearInterval(_0x3572de), _0x3138b3(_0x316694(0x192))[_0x316694(0x314)](), _0x3138b3(_0x316694(0x1aa))[_0x316694(0x314)](), _0x3138b3('[data-snig]')[_0x316694(0x3ae)]('data-snig'), _0x13b01e = ![], _0x21e60c = ![], _0x1e0f52 = location[_0x316694(0x327)], _0x34dc48[_0x316694(0x180)](), _0x23a56a(_0x316694(0x30d));
        }
        function _0x23a56a(..._0x1ded20) {
            const _0x40c2a5 = _0x4e984e;
            var _0x3d6ddf = new Date();
            _0x5257f7[_0x40c2a5(0x386)]({
                'time': _0x3d6ddf[_0x40c2a5(0x1bf)](),
                'content': [..._0x1ded20]
            }), _0x5257f7[_0x40c2a5(0x328)] > 0x3e8 && (_0x5257f7 = [
                {
                    'time': _0x3d6ddf[_0x40c2a5(0x1bf)](),
                    'content': [_0x40c2a5(0x3cd)]
                },
                ..._0x5257f7[_0x40c2a5(0x3ac)](-0x3e7)
            ]), console[_0x40c2a5(0x3c2)]('[' + _0x3d6ddf[_0x40c2a5(0x361)]() + ']', ..._0x1ded20);
        }
        function _0x51f1f1() {
            for (let _0x425dfd in _0x2a78cf) {
                GM_getValue(_0x425dfd) != null && typeof GM_getValue(_0x425dfd) === 'boolean' && (_0x2a78cf[_0x425dfd] = GM_getValue(_0x425dfd));
            }
        }
        function _0x1dce25(_0x44c176, _0x8eca95, _0xc26128, _0x297d69 = '') {
            const _0x1a8210 = _0x4e984e;
            _0x8eca95['find'](_0x1a8210(0x2a2))['length'] === 0x0 ? (_0x8eca95[_0x1a8210(0x2fc)](_0x1a8210(0x38f) + _0x297d69 + _0x1a8210(0x35c)), _0x8eca95[_0x1a8210(0x357)](_0x1a8210(0x2a2))[_0x1a8210(0x2fc)](_0x1a8210(0x222) + _0x4821da + _0x1a8210(0x18c)), _0x8eca95[_0x1a8210(0x357)](_0x1a8210(0x364))[_0x1a8210(0x323)](_0x1a8210(0x1e0), _0x1a8210(0x2b9) + (_0x4821da * 0x64 + '%')), _0x8eca95[_0x1a8210(0x357)](_0x1a8210(0x364))['on'](_0x1a8210(0x3c3), function () {
                const _0x510984 = _0x1a8210;
                var _0x5b3757 = _0x3138b3(this)[_0x510984(0x3e5)]() * 0x64 + '%';
                _0x4821da = _0x3138b3(this)[_0x510984(0x3e5)](), GM_setValue(_0x510984(0x221), _0x3138b3(this)[_0x510984(0x3e5)]()), _0x3138b3(this)[_0x510984(0x323)](_0x510984(0x1e0), '--ig-track-progress:\x20' + _0x5b3757), _0x44c176['each'](function () {
                    _0x23a56a('(' + _0xc26128 + ')', 'video\x20volume\x20changed\x20#slider'), this['volume'] = _0x4821da;
                });
            }), _0x8eca95['find'](_0x1a8210(0x364))['on'](_0x1a8210(0x300), function () {
                const _0x38193d = _0x1a8210;
                var _0x5aed0b = _0x4821da * 0x64 + '%';
                _0x3138b3(this)[_0x38193d(0x323)](_0x38193d(0x1e0), '--ig-track-progress:\x20' + _0x5aed0b), _0x3138b3(this)[_0x38193d(0x3e5)](_0x4821da), _0x44c176[_0x38193d(0x18a)](function () {
                    const _0x63d807 = _0x38193d;
                    _0x23a56a('(' + _0xc26128 + ')', _0x63d807(0x347)), this[_0x63d807(0x377)] = _0x4821da;
                });
            }), _0x8eca95['find'](_0x1a8210(0x2a2))['on'](_0x1a8210(0x345), function (_0x2f3f49) {
                const _0x155491 = _0x1a8210;
                _0x2f3f49[_0x155491(0x373)](), _0x2f3f49[_0x155491(0x3b2)]();
            })) : _0x8eca95[_0x1a8210(0x357)](_0x1a8210(0x2a2))[_0x1a8210(0x314)]();
        }
        _0x3138b3(function () {
            const _0x32695d = _0x4e984e;
            function _0xd7978e(_0x40104a) {
                const _0x55d534 = a0_0x4467;
                var _0x377fb8 = [];
                for (var _0x3fc7fe of _0x40104a) {
                    _0x377fb8[_0x55d534(0x386)]({
                        'tagName': _0x3fc7fe[_0x55d534(0x265)],
                        'id': _0x3fc7fe['id'],
                        'className': _0x3fc7fe[_0x55d534(0x2da)]
                    });
                }
                return _0x377fb8;
            }
            function _0x22ae1e() {
                const _0x1f02ed = a0_0x4467;
                let _0x3710c6 = _0x3138b3(_0x1f02ed(0x301))[0x0];
                var _0x39dea4 = '';
                _0x5257f7[_0x1f02ed(0x1ec)](_0xdfa241 => {
                    const _0x191393 = _0x1f02ed;
                    var _0x807655 = JSON[_0x191393(0x235)](_0xdfa241[_0x191393(0x3ec)], function (_0x2cce08, _0x2920aa) {
                        const _0x5d2368 = _0x191393;
                        if (Array['isArray'](this)) {
                            if (typeof _0x2920aa === _0x5d2368(0x26a) && _0x2920aa instanceof jQuery)
                                return _0xd7978e(_0x2920aa);
                            return _0x2920aa;
                        } else
                            return _0x2920aa;
                    }, '\x09');
                    _0x39dea4 += _0xdfa241[_0x191393(0x240)] + ':\x20' + _0x807655 + '\x0a';
                }), _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x1f02ed(0x23f)](_0x1f02ed(0x338) + _0x39dea4 + _0x1f02ed(0x237) + location[_0x1f02ed(0x306)] + _0x1f02ed(0x344) + _0x3710c6[_0x1f02ed(0x275)]);
            }
            _0x3138b3('body')['on'](_0x32695d(0x345), _0x32695d(0x198), function () {
                _0x22ae1e();
            }), _0x3138b3('body')['on'](_0x32695d(0x345), '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x3d9f98 = _0x32695d;
                _0x3138b3(_0x3d9f98(0x19e))['select'](), document['execCommand'](_0x3d9f98(0x3d2));
            }), _0x3138b3(_0x32695d(0x23d))['on']('click', _0x32695d(0x335), function () {
                const _0x448346 = _0x32695d;
                _0x3138b3(_0x448346(0x19e))[_0x448346(0x23f)]()[_0x448346(0x328)] === 0x0 && _0x22ae1e();
                var _0x1c284f = _0x3138b3('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')['text'](), _0x4a1d61 = document[_0x448346(0x3e6)]('a'), _0xe18067 = new Blob([_0x1c284f], { 'type': _0x448346(0x2be) });
                _0x4a1d61[_0x448346(0x327)] = URL[_0x448346(0x1ce)](_0xe18067), _0x4a1d61[_0x448346(0x2a7)] = _0x448346(0x312) + new Date()['getTime']() + _0x448346(0x342), document[_0x448346(0x23d)][_0x448346(0x390)](_0x4a1d61), _0x4a1d61[_0x448346(0x345)](), _0x4a1d61[_0x448346(0x314)]();
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG', function () {
                const _0x544522 = _0x32695d;
                _0x3138b3(this)[_0x544522(0x3c4)](_0x544522(0x1bb))['length'] > 0x0 ? _0x3138b3(this)[_0x544522(0x3c4)](_0x544522(0x1bb))[_0x544522(0x392)](0xfa, function () {
                    const _0x117c1a = _0x544522;
                    _0x3138b3(this)[_0x117c1a(0x314)]();
                }) : _0x3138b3('.IG_SN_DIG')[_0x544522(0x314)]();
            }), _0x3138b3(window)[_0x32695d(0x29f)](function (_0x3b9a9a) {
                const _0x2c3819 = _0x32695d;
                _0x3b9a9a[_0x2c3819(0x239)] == '81' && _0x3b9a9a[_0x2c3819(0x245)] && (_0x3138b3(_0x2c3819(0x310))[_0x2c3819(0x314)](), _0x3b9a9a[_0x2c3819(0x3b2)]()), _0x3b9a9a[_0x2c3819(0x239)] == '87' && _0x3b9a9a[_0x2c3819(0x245)] && (_0x1aea2f(), _0x3b9a9a[_0x2c3819(0x3b2)]()), _0x3b9a9a[_0x2c3819(0x239)] == '90' && _0x3b9a9a[_0x2c3819(0x245)] && (_0x4d7db1(), _0x3b9a9a['preventDefault']()), _0x3b9a9a[_0x2c3819(0x239)] == '82' && _0x3b9a9a[_0x2c3819(0x245)] && (_0x46dee7(), _0x3b9a9a[_0x2c3819(0x3b2)]()), _0x3b9a9a[_0x2c3819(0x239)] == '83' && _0x3b9a9a[_0x2c3819(0x245)] && (location[_0x2c3819(0x327)][_0x2c3819(0x298)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x3138b3('.IG_DWSTORY')[_0x2c3819(0x328)] > 0x0 && _0x3138b3(_0x2c3819(0x332))?.[_0x2c3819(0x345)](), location['href'][_0x2c3819(0x298)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x3138b3(_0x2c3819(0x31e))[_0x2c3819(0x328)] > 0x0 && _0x3138b3('.IG_DWHISTORY')?.['click'](), _0x3b9a9a[_0x2c3819(0x3b2)]());
            }), _0x3138b3(_0x32695d(0x23d))['on']('change', _0x32695d(0x28c), function (_0x373caa) {
                const _0x1a9352 = _0x32695d;
                var _0x1fcdb1 = _0x3138b3(this)[_0x1a9352(0x323)]('id');
                if (_0x1fcdb1 && _0x2a78cf[_0x1fcdb1] !== undefined) {
                    let _0x688e42 = _0x3138b3(this)['prop']('checked');
                    GM_setValue(_0x1fcdb1, _0x688e42), _0x2a78cf[_0x1fcdb1] = _0x688e42, console[_0x1a9352(0x3c2)]('user\x20settings', _0x1fcdb1, _0x688e42);
                }
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), _0x32695d(0x38c), function (_0x568472) {
                const _0x459ee6 = _0x32695d;
                _0x3138b3(this)[_0x459ee6(0x357)](_0x459ee6(0x1bb))[_0x459ee6(0x328)] > 0x0 && _0x568472[_0x459ee6(0x3b2)]();
            }), _0x3138b3(_0x32695d(0x23d))['on']('change', '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)', function () {
                const _0x573054 = _0x32695d;
                let _0x1ab250 = _0x3138b3(this)['val']();
                _0x3138b3(this)['attr'](_0x573054(0x24f)) == _0x573054(0x2fe) ? _0x3138b3(this)[_0x573054(0x3e8)]()[_0x573054(0x3e5)](_0x1ab250) : _0x3138b3(this)['prev']()[_0x573054(0x3e5)](_0x1ab250), _0x1ab250 >= 0x0 && _0x1ab250 <= 0x1 && (_0x4821da = _0x1ab250, GM_setValue(_0x573054(0x221), _0x1ab250));
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x3c3), _0x32695d(0x206), function (_0x76e629) {
                const _0x1e61c8 = _0x32695d;
                if (_0x3138b3(this)['attr']('type') == _0x1e61c8(0x2fe)) {
                    let _0x446067 = _0x3138b3(this)['val']();
                    _0x3138b3(this)['next']()['val'](_0x446067);
                } else {
                    let _0x2b1f81 = _0x3138b3(this)[_0x1e61c8(0x3e5)]();
                    _0x2b1f81 >= 0x0 && _0x2b1f81 <= 0x1 ? _0x3138b3(this)[_0x1e61c8(0x305)]()[_0x1e61c8(0x3e5)](_0x2b1f81) : _0x2b1f81 < 0x0 ? _0x3138b3(this)['val'](0x0) : _0x3138b3(this)['val'](0x1);
                }
            }), _0x3138b3('body')['on'](_0x32695d(0x3c3), _0x32695d(0x1c5), function (_0x2c15ad) {
                const _0x4578f2 = _0x32695d;
                GM_setValue(_0x4578f2(0x220), _0x3138b3(this)['val']()), _0x2a2a9d = _0x3138b3(this)[_0x4578f2(0x3e5)]();
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), 'a[data-needed=\x22direct\x22]', function (_0x5f0f98) {
                const _0x525545 = _0x32695d;
                _0x5f0f98[_0x525545(0x3b2)](), _0x11f6aa(this);
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), '.IG_SN_DIG_BODY\x20.newTab', function () {
                const _0x4a1bf7 = _0x32695d;
                if (_0x2a78cf['FORCE_RESOURCE_VIA_MEDIA'] && _0x2a78cf[_0x4a1bf7(0x190)])
                    _0x11f6aa(_0x3138b3(this)[_0x4a1bf7(0x3c4)]()[_0x4a1bf7(0x3a1)]('a')['first']()[0x0], !![]);
                else {
                    var _0x3c8dd6 = new URL(_0x3138b3(this)[_0x4a1bf7(0x3c4)]()[_0x4a1bf7(0x3a1)]('a')[_0x4a1bf7(0x323)](_0x4a1bf7(0x35a)));
                    _0x3c8dd6[_0x4a1bf7(0x2ef)] = _0x4a1bf7(0x1d2), _0x225d2e(_0x3c8dd6[_0x4a1bf7(0x327)]);
                }
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), _0x32695d(0x285), function () {
                const _0x35f9bf = _0x32695d;
                let _0xdc0412 = new Date()[_0x35f9bf(0x1bf)]();
                _0x2a78cf[_0x35f9bf(0x33f)] && _0x3138b3(this)[_0x35f9bf(0x3c4)]()[_0x35f9bf(0x3a1)]('a')[_0x35f9bf(0x323)](_0x35f9bf(0x37a)) && (_0xdc0412 = _0x3138b3(this)[_0x35f9bf(0x3c4)]()[_0x35f9bf(0x3a1)]('a')[_0x35f9bf(0x323)](_0x35f9bf(0x37a)));
                let _0x51b47a = _0x3138b3(this)[_0x35f9bf(0x3c4)]()[_0x35f9bf(0x3a1)]('a')[_0x35f9bf(0x323)](_0x35f9bf(0x2f5)) ?? _0x3138b3('#article-id')[_0x35f9bf(0x23f)]();
                _0x16d33f(_0x3138b3(this)[_0x35f9bf(0x3c4)]()[_0x35f9bf(0x3a1)]('a')[_0x35f9bf(0x357)](_0x35f9bf(0x3eb))[_0x35f9bf(0x224)]()[_0x35f9bf(0x323)]('src'), _0x3138b3(this)[_0x35f9bf(0x3c4)]()[_0x35f9bf(0x3a1)]('a')[_0x35f9bf(0x323)](_0x35f9bf(0x30a)), 'thumbnail', _0xdc0412, 'jpg', _0x51b47a);
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), _0x32695d(0x332), function () {
                _0x442afe(!![]);
            }), _0x3138b3(_0x32695d(0x23d))['on']('click', _0x32695d(0x3a6), function (_0x1a51d6) {
                const _0x5792b8 = _0x32695d;
                _0x1a51d6[_0x5792b8(0x3b2)](), _0x442afe(!![], !![], !![]);
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), _0x32695d(0x1a4), function () {
                _0x3ca374(!![]);
            }), _0x3138b3('body')['on']('click', _0x32695d(0x3e2), function (_0x217b6c) {
                const _0x421658 = _0x32695d;
                _0x217b6c[_0x421658(0x373)](), _0x4502fd(!![]);
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), _0x32695d(0x31e), function () {
                _0x22d458(!![]);
            }), _0x3138b3('body')['on'](_0x32695d(0x345), '.IG_DWHINEWTAB', function (_0x3cbc4c) {
                _0x3cbc4c['preventDefault'](), _0x22d458(!![], !![]);
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), _0x32695d(0x3a5), function () {
                _0x2e41f4(!![]);
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), '.IG_REELS', function () {
                _0xb21785(!![], !![]);
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), _0x32695d(0x207), function () {
                _0xb21785(!![], !![], !![]);
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), _0x32695d(0x3e9), function () {
                _0xb21785(!![], ![]);
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x250), _0x32695d(0x248), function (_0x5caddc) {
                const _0xb7f92c = _0x32695d;
                if (_0x5caddc[_0xb7f92c(0x210)] === 0x3 || _0x5caddc[_0xb7f92c(0x210)] === 0x2) {
                    if (location[_0xb7f92c(0x327)] === 'https://www.instagram.com/' && _0x2a78cf[_0xb7f92c(0x203)]) {
                        _0x5caddc['preventDefault']();
                        if (_0x3138b3(this)[_0xb7f92c(0x357)](_0xb7f92c(0x18f))[_0xb7f92c(0x328)] > 0x0) {
                            const _0x4ddda9 = 'https://www.instagram.com/' + _0x3138b3(this)[_0xb7f92c(0x3a1)](_0xb7f92c(0x1d9))[_0xb7f92c(0x398)]()[_0xb7f92c(0x23f)]();
                            _0x5caddc[_0xb7f92c(0x210)] === 0x2 ? GM_openInTab(_0x4ddda9) : location[_0xb7f92c(0x327)] = _0x4ddda9;
                        }
                    }
                }
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x376), '.IG_SN_DIG_TITLE\x20.checkbox', function () {
                const _0x4d951d = _0x32695d;
                var _0x19e680 = _0x3138b3(this)[_0x4d951d(0x357)](_0x4d951d(0x3c3))[_0x4d951d(0x326)](_0x4d951d(0x236));
                _0x3138b3('.IG_SN_DIG_BODY\x20.inner_box')[_0x4d951d(0x18a)](function () {
                    const _0x2ba34d = _0x4d951d;
                    _0x3138b3(this)['prop'](_0x2ba34d(0x236), _0x19e680);
                });
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x376), _0x32695d(0x3df), function () {
                const _0x3c80e4 = _0x32695d;
                var _0x52ecfc = _0x3138b3('.IG_SN_DIG_BODY\x20.inner_box:checked')['length'], _0x52c5a1 = _0x3138b3(_0x3c80e4(0x3df))[_0x3c80e4(0x328)];
                _0x3138b3(_0x3c80e4(0x1fc))['find'](_0x3c80e4(0x3c3))['prop'](_0x3c80e4(0x236), _0x52ecfc == _0x52c5a1);
            }), _0x3138b3(_0x32695d(0x23d))['on']('click', _0x32695d(0x195), function () {
                const _0x261798 = _0x32695d;
                let _0x13e193 = 0x0;
                _0x3138b3(_0x261798(0x18b))['each'](function () {
                    const _0x58a849 = _0x261798;
                    _0x3138b3(this)[_0x58a849(0x305)]()[_0x58a849(0x3a1)]('input')[_0x58a849(0x326)](_0x58a849(0x236)) && (_0x3138b3(this)[_0x58a849(0x345)](), _0x13e193++);
                }), _0x13e193 == 0x0 && alert(_0x1e06fc(_0x261798(0x2a4)));
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x376), _0x32695d(0x1d6), function () {
                const _0x28ec7e = _0x32695d;
                GM_setValue(_0x28ec7e(0x333), _0x3138b3(this)['val']()), _0x11ed9d = _0x3138b3(this)[_0x28ec7e(0x3e5)](), _0x11ed9d?.[_0x28ec7e(0x1a9)]('en') || _0x3338e6[_0x11ed9d] != null ? (_0x5355db(), _0x309445()) : _0x2bb0b1(_0x11ed9d)[_0x28ec7e(0x2c4)](_0x4ee381 => {
                    _0x3338e6[_0x11ed9d] = _0x4ee381, _0x5355db(), _0x309445();
                })[_0x28ec7e(0x254)](_0x15b98c => {
                    const _0x333182 = _0x28ec7e;
                    console[_0x333182(0x1c7)]('getTranslationText\x20catch\x20error:', _0x15b98c);
                });
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x376), '.IG_SN_DIG_BODY\x20#locateSelect', function () {
                const _0x1a3ae4 = _0x32695d;
                _0x3138b3(_0x1a3ae4(0x2af))[_0x1a3ae4(0x23f)]('' + new Date()[_0x1a3ae4(0x36e)](_0x3138b3(this)[_0x1a3ae4(0x3e5)](), {
                    'hour12': ![],
                    'second': _0x1a3ae4(0x2cf),
                    'minute': _0x1a3ae4(0x2cf),
                    'hour': _0x1a3ae4(0x2cf),
                    'month': _0x1a3ae4(0x2cf),
                    'day': _0x1a3ae4(0x2cf),
                    'year': _0x1a3ae4(0x1da)
                })['replaceAll']('/', '-')), LOCATE_DATE_FORMAT = _0x3138b3(this)[_0x1a3ae4(0x3e5)](), GM_setValue(_0x1a3ae4(0x1bd), _0x3138b3(this)[_0x1a3ae4(0x3e5)]());
            }), _0x3138b3(_0x32695d(0x23d))['on'](_0x32695d(0x345), _0x32695d(0x3c5), function () {
                const _0x3d2095 = _0x32695d;
                _0x3138b3(_0x3d2095(0x18b))[_0x3d2095(0x18a)](function () {
                    const _0x1e974c = _0x3d2095;
                    _0x3138b3(this)[_0x1e974c(0x345)]();
                });
            });
            const _0x13ffc3 = new MutationObserver(_0x2e1053 => {
                const _0x5322bb = _0x32695d;
                for (const _0xa8f4cb of _0x2e1053) {
                    _0xa8f4cb[_0x5322bb(0x24f)] === 'childList' && _0xa8f4cb[_0x5322bb(0x320)][_0x5322bb(0x1ec)](_0x500566 => {
                        const _0x3968ca = _0x5322bb, _0x267999 = _0x3138b3(_0x500566)[_0x3968ca(0x357)](_0x3968ca(0x2ca));
                        if (_0x267999[_0x3968ca(0x328)] > 0x0) {
                            _0x2a78cf[_0x3968ca(0x1e5)] && _0x267999[_0x3968ca(0x18a)](function () {
                                const _0x9f8bf2 = _0x3968ca;
                                _0x3138b3(this)['on'](_0x9f8bf2(0x27f), function () {
                                    const _0x5884c2 = _0x9f8bf2;
                                    !_0x3138b3(this)[_0x5884c2(0x3e7)]('modify') && (_0x3138b3(this)[_0x5884c2(0x323)]('data-modify', !![]), this['volume'] = _0x4821da, _0x23a56a(_0x5884c2(0x2dd)));
                                });
                            });
                            if (location[_0x3968ca(0x306)][_0x3968ca(0x298)](/^(\/stories\/)/ig)) {
                                const _0x5532d1 = location[_0x3968ca(0x306)][_0x3968ca(0x298)](/^(\/stories\/highlights\/)/ig) != null, _0x2f98d1 = _0x5532d1 ? _0x3968ca(0x234) : 'story';
                                _0x267999[_0x3968ca(0x18a)](function () {
                                    const _0x22f675 = _0x3968ca;
                                    _0x3138b3(this)['on'](_0x22f675(0x22a), function () {
                                        const _0xc5536e = _0x22f675;
                                        if (!_0x3138b3(this)[_0xc5536e(0x3e7)](_0xc5536e(0x288))) {
                                            let _0x37470e = _0x3138b3(this);
                                            _0x37470e[_0xc5536e(0x1ee)]('div[style][class]')[_0xc5536e(0x1a1)](function () {
                                                const _0x3f558 = _0xc5536e;
                                                return _0x3138b3(this)[_0x3f558(0x34b)]() == _0x37470e[_0x3f558(0x34b)]();
                                            })[_0xc5536e(0x357)](_0xc5536e(0x33c))['length'] === 0x0 ? (_0x3138b3(this)[_0xc5536e(0x323)](_0xc5536e(0x307), !![]), _0x5532d1 ? _0x2e41f4(![]) : _0x3ca374(![]), _0x23a56a('(' + _0x2f98d1 + ')', _0xc5536e(0x2c6))) : (_0x3138b3(this)[_0xc5536e(0x323)](_0xc5536e(0x307), !![]), _0x23a56a('(' + _0x2f98d1 + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0xd14a18 = _0x3138b3(this);
                                    if (_0x2a78cf[_0x22f675(0x3b4)]) {
                                        if (!_0xd14a18[_0x22f675(0x3e7)](_0x22f675(0x255))) {
                                            _0x23a56a('(' + _0x2f98d1 + ')', _0x22f675(0x29b)), this[_0x22f675(0x377)] = _0x4821da, _0xd14a18['on'](_0x22f675(0x1e3), function () {
                                                const _0x2ba2fe = _0x22f675;
                                                this[_0x2ba2fe(0x377)] = _0x4821da;
                                            });
                                            let _0x2a01d0 = _0xd14a18['parents'](_0x22f675(0x1d9))[_0x22f675(0x1a1)](function () {
                                                    const _0x1298a6 = _0x22f675;
                                                    return _0x3138b3(this)[_0x1298a6(0x323)](_0x1298a6(0x34a)) == null && _0x3138b3(this)['attr'](_0x1298a6(0x1e0)) == null;
                                                })[_0x22f675(0x224)](), _0x538fc7 = _0x2a01d0[_0x22f675(0x3e8)]();
                                            _0x538fc7[_0x22f675(0x184)]();
                                            let _0x951138 = _0x2a01d0[_0x22f675(0x357)](_0x22f675(0x1f1));
                                            _0x951138[_0x22f675(0x184)]();
                                            const _0xe2df26 = function (_0x44d405) {
                                                const _0x28c288 = _0x22f675;
                                                _0x44d405['preventDefault'](), _0xd14a18['css'](_0x28c288(0x3d9), '2'), _0xd14a18[_0x28c288(0x323)](_0x28c288(0x255), !![]), _0x951138[_0x28c288(0x184)](), _0x538fc7[_0x28c288(0x184)](), _0x1dce25(_0xd14a18, _0xd14a18[_0x28c288(0x1ee)](_0x28c288(0x1ae))['filter'](function () {
                                                    const _0x3c3743 = _0x28c288;
                                                    return _0x3138b3(this)['width']() == _0xd14a18[_0x3c3743(0x34b)]();
                                                })[_0x28c288(0x224)](), _0x2f98d1, 'vertical');
                                            };
                                            _0xd14a18[_0x22f675(0x3c4)]()[_0x22f675(0x357)]('video\x20+\x20div')['on'](_0x22f675(0x2f3), _0xe2df26), _0x951138['on'](_0x22f675(0x2f3), _0xe2df26), _0x538fc7['on'](_0x22f675(0x2f3), _0xe2df26), _0xd14a18['on'](_0x22f675(0x2f3), function (_0x20798a) {
                                                const _0x582789 = _0x22f675;
                                                _0x20798a[_0x582789(0x3b2)](), _0xd14a18[_0x582789(0x32d)](_0x582789(0x3d9), '-1'), _0xd14a18[_0x582789(0x3ae)](_0x582789(0x255)), _0x538fc7['show'](), _0x951138[_0x582789(0x3c0)](), _0x1dce25(_0xd14a18, _0xd14a18[_0x582789(0x1ee)](_0x582789(0x1ae))[_0x582789(0x1a1)](function () {
                                                    return _0x3138b3(this)['width']() == _0xd14a18['width']();
                                                })[_0x582789(0x224)](), _0x2f98d1, 'vertical');
                                            }), _0xd14a18['on'](_0x22f675(0x1c4), function () {
                                                const _0x324946 = _0x22f675;
                                                let _0x534cc3 = _0x2a01d0[_0x324946(0x3c4)]()['find'](_0x324946(0x181))[_0x324946(0x1ee)](_0x324946(0x2d5))[_0x324946(0x224)]();
                                                var _0x28eea5 = _0x534cc3[_0x324946(0x357)](_0x324946(0x34d))[_0x324946(0x328)] === 0x0;
                                                this[_0x324946(0x3b0)] != _0x28eea5 && (this['volume'] = _0x4821da, _0x534cc3?.[_0x324946(0x345)]()), _0x3138b3(this)[_0x324946(0x323)](_0x324946(0x281)) && (_0x4821da = this['volume'], GM_setValue('G_VIDEO_VOLUME', this[_0x324946(0x377)])), this['volume'] == _0x4821da && _0x3138b3(this)[_0x324946(0x323)]('data-completed', !![]);
                                            }), _0xd14a18[_0x22f675(0x32d)]('position', _0x22f675(0x33e)), _0xd14a18[_0x22f675(0x32d)](_0x22f675(0x3d9), '2'), _0xd14a18[_0x22f675(0x323)](_0x22f675(0x318), !![]), _0xd14a18[_0x22f675(0x323)](_0x22f675(0x255), !![]);
                                        }
                                    } else
                                        _0x1dce25(_0xd14a18, _0xd14a18[_0x22f675(0x1ee)](_0x22f675(0x1ae))[_0x22f675(0x1a1)](function () {
                                            const _0x1c95b2 = _0x22f675;
                                            return _0x3138b3(this)[_0x1c95b2(0x34b)]() == _0xd14a18['width']();
                                        })[_0x22f675(0x224)](), _0x2f98d1, _0x22f675(0x196));
                                });
                            }
                        }
                    });
                }
            });
            _0x13ffc3[_0x32695d(0x375)](_0x3138b3('div[id^=\x22mount\x22]')[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));