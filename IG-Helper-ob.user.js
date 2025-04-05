// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.2.1
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

function a0_0x2a9c(_0x2ea349, _0x41856d) {
    const _0x39436c = a0_0x3943();
    return a0_0x2a9c = function (_0x2a9cbd, _0x1665cf) {
        _0x2a9cbd = _0x2a9cbd - 0x1b7;
        let _0x215908 = _0x39436c[_0x2a9cbd];
        return _0x215908;
    }, a0_0x2a9c(_0x2ea349, _0x41856d);
}
function a0_0x3943() {
    const _0x128cbb = [
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'getFullYear',
        'smooth',
        'scontent.cdninstagram.com',
        '#iv_close',
        'isHomepage',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'div\x20>\x20ul\x20li._acaz',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'range',
        'node',
        'username',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        'assign',
        'href',
        'match',
        '.IG_REELS_NEWTAB',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'section\x20>\x20main[role=\x22main\x22]',
        'close',
        '81tPEaeN',
        'media-id',
        '#iv_image',
        'Remote\x20version:\x20',
        'includes',
        'getTranslationText\x20catch\x20error:',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'G_CHECK_TIMESTAMP',
        'isDialog',
        'story',
        'Image',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'post',
        'data-path',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'INTERNAL_CSS',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'data-ih-locale-title',
        'FULLSCREEN',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '\x22\x20data-globalIndex=\x22',
        'relative',
        'div:last-child',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        '.IG_REELS',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        '\x22\x20class=\x22newTab\x22>',
        'updatenotification',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'THUMBNAIL_INTRO',
        'reel',
        'mouseenter',
        'ig_helper_notice',
        'show',
        'split',
        '.IG_DW_MAIN',
        'REPORT_FORK',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'code',
        'VID',
        'prop',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'val',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'play\x20playing',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        '.IG_POPUP_DIG\x20input',
        'finalUrl',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'Download\x20All\x20Resources',
        'data-name',
        'isArray',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        'getUserIdWithAgent()',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        '\x22\x20datetime=\x22',
        'jpg',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '\x22\x20data-ih-locale-title=\x22',
        '_ac3q',
        '.IG_DWSTORY_THUMBNAIL',
        'reject',
        'div.volume_slider\x20input',
        'THUMBNAIL',
        '\x22\x20class=\x22IG_REELS\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'LOAD_BLOB_MULTIPLE',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'parents',
        '.IG_DWHISTORY_THUMBNAIL',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'addedNodes',
        'data-remove-thumbnail',
        'img[referrerpolicy]',
        '<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        'forEach',
        'log',
        'modify',
        '<div\x20class=\x22volume_slider\x20',
        'object',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'datetime',
        'videoVolume',
        'image_versions2',
        'addClass',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'version:',
        'carousel_media',
        'Checking\x20for\x20Script\x20Updates',
        '/accounts/login',
        'a[data-needed=\x22direct\x22]',
        'data-loop',
        'DIRECT_DOWNLOAD_ALL',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'Download\x20Video\x20Thumbnail',
        'profile_pic_url',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'query_hash',
        'https://www.instagram.com/p/',
        '5427894eesqIZ',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'absolute',
        'FORCE_RESOURCE_VIA_MEDIA',
        'which',
        'x1iyjqo2',
        'candidates',
        '._acnb',
        'response',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'wheel',
        'mouseup',
        'createMediaListDOM',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'stopPropagation',
        'body',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'thumbnail',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'DISABLE_VIDEO_LOOPING',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'pageLoaded',
        '\x22\x20/>',
        'volume',
        'contextmenu',
        'isProfile',
        'video_resources',
        '1338463vgPsrc',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'childList',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'Logger:\x0a',
        '*/*',
        'div[id^=\x22mount\x22]',
        'prev',
        'owner',
        'video_versions',
        'url',
        '#article-id',
        'substr',
        'edge_sidecar_to_children',
        'element',
        'Cannot\x20find\x20video\x20URL.',
        'xdt_api__v1__media__shortcode__web_info',
        'data-completed',
        'mousedown',
        'appendChild',
        'highlights',
        'getUserHighSizeProfile()',
        'article',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '%22}',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'div[style][class]',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'getBlobMediaWithQuery()',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'floor',
        '2sDpbnN',
        'removeAttr',
        'src',
        'innerHTML',
        '</span></label>',
        '._acay',
        'user',
        'find',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'stories',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'video\x20+\x20div\x20>\x20div',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '._acay\x20+\x20.x24i39r',
        'Download\x20Selected\x20Resources',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'Wololo!\x20New\x20version\x20released.',
        'Debug\x20Window',
        'body\x20>\x20div\x20section._ac0a',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'getTranslationText()',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'query_id',
        'DOWNLOAD',
        'GL_postPath',
        'transform',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'max',
        'data-controls',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'grab',
        'GraphVideo',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'svg',
        'Donate',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        '.circle_wrapper\x20span',
        'innerHeight',
        'startsWith',
        'select',
        'SELECT_AND_COPY',
        'title',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'Fetch\x20from\x20memory\x20cache:',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'G_VIDEO_VOLUME',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        '63jmgFNC',
        'version',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        '.videoThumbnail',
        'a[href]',
        'GL_dataCache',
        'fadeOut',
        'data-modify',
        'highlight',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'a[href]\x20time[datetime]',
        'replaceAll',
        '\x22><span\x20data-ih-locale=\x22',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'name',
        'REPORT_DISCORD',
        'children',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        '.IG_DWHISTORY_ALL',
        'GL_registerEventList',
        'flex',
        'getBlobMedia()',
        'change',
        '#scrollWrapper',
        'keys',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '</a></button><br/>',
        'toString',
        'first',
        'Reload\x20Script',
        'items',
        'fail',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'get',
        'remove-thumbnail',
        'sort',
        'body\x20>\x20div\x20section:visible._ac0a',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'display_url',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'Preference\x20Settings',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '17763456oiRZdp',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'createElement',
        '.IG_DWPROFILE',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'AUTO_RENAME',
        'execCommand',
        'NO_CHECK_RESOURCE',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'Main\x20Timer',
        'mousemove.igHelper',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'REPORT_GITHUB',
        'class',
        'currentURL',
        '/stories/highlights/',
        '.IG_DW_ALL_MAIN',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '15289790jRDFJc',
        'IMAGE_VIEWER',
        '_INTRO',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'position',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'top',
        'pointer',
        'click',
        'RELOAD_SCRIPT',
        'BATCH_DOWNLOAD_SELECTED',
        'disconnect',
        'after',
        'MODIFY_VIDEO_VOLUME',
        'removeClass',
        '.IG_DWNEWTAB',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'onReadyMyDW()\x20Timer',
        'SCROLL_BUTTON',
        'div#scrollview',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'taken_at_timestamp',
        '[role=\x22button\x22]',
        'remove',
        'off',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        'div\x20>\x20ul._acay',
        'each',
        'next',
        '</span>\x20',
        'IMG',
        'Download',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'textContent',
        'data-username',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '.IG_THUMBNAIL_MAIN',
        'padStart',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'blob',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'userAgent',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'fileRenameFormat',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'trim',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'script[type=\x22application/json\x22]',
        'width',
        '_blank',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'height',
        'x1lix1fw',
        'stp',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'data-type',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'data-visualcompletion',
        'https://www.instagram.com/',
        'CLOSE',
        '</option>',
        'toLowerCase',
        'originalEvent',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'reels',
        'video\x20volume\x20changed\x20#slider',
        '<p\x20id=\x22_SNLOAD\x22>',
        'Manually\x20inserting\x20thumbnail\x20button',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'NOTICE_UPDATE_CONTENT',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'registerMenuIds',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'filter',
        'reels_media',
        'responseText',
        '<div></div>',
        'label',
        'www.',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'isIntersecting',
        'parent',
        'GL_repeat',
        '.IG_POPUP_DIG\x20.globalSettings',
        '.circle_wrapper',
        '0px',
        'NOTICE_UPDATE_TITLE',
        'LOAD_BLOB_ONE',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'controls',
        'GraphImage',
        'selected',
        'Feedback',
        'there\x20is\x20no\x20new\x20update',
        'div.volume_slider',
        'hd_profile_pic_url_info',
        'SETTING',
        'matchAll',
        'NO_VID_URL',
        'navigator',
        'BATCH_DOWNLOAD_DIRECT',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'getHours',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'hostname',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'slice',
        '\x20-</a>',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'padEnd',
        'GL_logger',
        '</span>\x20<input\x20id=\x22',
        'SHOW_DOM_TREE',
        'srcset',
        '\x20child',
        'GL_observer',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'html',
        'parse',
        'message',
        'pause',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'text',
        'getTime',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'DIV',
        'CHECK_UPDATE',
        'DEBUG',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '[data-ih-locale]',
        'GET',
        'muted',
        'getStories()',
        'lang',
        '69712vfkCjJ',
        'data-href',
        'Thumbnail\x20button\x20already\x20inserted',
        'GL_username',
        'LOCALE_MANIFEST',
        'Request\x20with:',
        '.button_wrapper',
        '.IG_NEWTAB_MAIN',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'shortcode_media',
        'div[class][role=\x22button\x22]',
        'status',
        'deltaY',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'z-index',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        '.IG_POPUP_DIG\x20#post_info',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        '</button>',
        'before',
        'css',
        'attr',
        'Found\x20post\x20container',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'DOWNLOAD_ALL',
        'pathname',
        '--ig-track-progress:\x20',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'ended',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'video_url',
        'locale',
        'downloadURL',
        '</div></div>',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'undefined',
        'taken_at',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'G_RENAME_FORMAT',
        'carousel_media:\x20undefined\x20username',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '.IG_POPUP_DIG',
        '<option\x20value=\x22',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'data-ih-locale',
        'config_width',
        'div',
        'RENAME_PUBLISH_DATE',
        '20000',
        'Disable\x20Video\x20Auto-looping',
        'toUpperCase',
        'DOMTree-',
        'vertical',
        'pageY',
        'video',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'GL_referrer',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'div#splash-screen',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'canDownload',
        'host',
        'DW_ALL',
        '__typename',
        'volumechange',
        'trigger',
        'replace',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'dragstart\x20drop',
        'type',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'https://ko-fi.com/snkoarashi',
        'scale(',
        'feedback_message',
        'push',
        'hasClass',
        'data-snig',
        'hidden',
        'trigging',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'innerWidth',
        'preventDefault',
        '257704JQSYEm',
        'length',
        'firstStarted',
        'hide',
        'LOAD_BLOB_RELOAD',
        'getMinutes',
        'li._acaz',
        'a[href^=\x22/\x22]',
        'regenerated',
        'userLanguage',
        'time[datetime]',
        'user\x20settings',
        'pageX',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'append',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'getHighlightStories()',
        'style',
        '</div>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'NEW_TAB',
        'getBlobMediaWithQueryID()',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        '11weHnDa',
        '#iv_header',
        '.IG_DWSTORY_ALL',
        'Video',
        'Settings',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        '.txt',
        'hasReferrer',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        'script',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'timeupdate',
        'isHighlightsStory',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'getPostOwner()',
        'then',
        '.IG_DWHISTORY',
        '_acnb',
        'last',
        'loop',
        'searchParams',
        '</a>',
        '<a\x20datetime=\x22',
        'reduce',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'language',
        'cursor',
        'shortcode',
        'getMediaInfo()',
        '.IG_DWHINEWTAB',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20</div>',
        'Close',
        'Open\x20Image\x20In\x20Viewer',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        'left',
        'scrollBy',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'min',
        '5lKRoEW',
        '.IG_DWSTORY',
        'HTML5_VIDEO_CONTROL',
        '</span></div>',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'tagName',
        '.IG_IMAGE_VIEWER',
        'tempFetchRateLimit',
        '._aagv\x20img',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'Current\x20version:\x20',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'load',
        'display_resources',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'NOPATH',
        'is_video',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'img',
        'faild',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'a[href^=\x22/p/\x22]',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'modify-thumbnail',
        'observe',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        '#tempWrapper',
        'avatar',
        'className',
        'loadstart',
        'error',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'SKIP_VIEW_STORY_CONFIRM',
        'wrap',
        '</a></button>',
        'x1s85apg',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'warn',
        '<a\x20media-id=\x22',
        'Show\x20DOM\x20Tree',
        'createObjectURL',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'data',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'checked',
        'input',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'altKey',
        'catch',
        'div[class]',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'target',
        '1726561jXvQIS',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'mp4',
        'boolean'
    ];
    a0_0x3943 = function () {
        return _0x128cbb;
    };
    return a0_0x3943();
}
(function (_0x19263c, _0x34098f) {
    const _0x3d2cd9 = a0_0x2a9c, _0xc152e2 = _0x19263c();
    while (!![]) {
        try {
            const _0x356939 = -parseInt(_0x3d2cd9(0x2d8)) / 0x1 * (parseInt(_0x3d2cd9(0x39e)) / 0x2) + parseInt(_0x3d2cd9(0x2f3)) / 0x3 * (parseInt(_0x3d2cd9(0x205)) / 0x4) + parseInt(_0x3d2cd9(0x29f)) / 0x5 * (-parseInt(_0x3d2cd9(0x35f)) / 0x6) + -parseInt(_0x3d2cd9(0x37c)) / 0x7 + -parseInt(_0x3d2cd9(0x25d)) / 0x8 * (-parseInt(_0x3d2cd9(0x3d0)) / 0x9) + -parseInt(_0x3d2cd9(0x412)) / 0xa * (-parseInt(_0x3d2cd9(0x275)) / 0xb) + parseInt(_0x3d2cd9(0x3ff)) / 0xc;
            if (_0x356939 === _0x34098f)
                break;
            else
                _0xc152e2['push'](_0xc152e2['shift']());
        } catch (_0x3b55ba) {
            _0xc152e2['push'](_0xc152e2['shift']());
        }
    }
}(a0_0x3943, 0xd78cf), function (_0x3e372a) {
    setTimeout(() => {
        'use strict';
        const _0x78f617 = a0_0x2a9c;
        const _0x145f91 = {
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
            }, _0x2bc8a0 = [
                _0x78f617(0x237),
                _0x78f617(0x1e5),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ], _0x53e079 = {
                'DOWNLOAD': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
                'NEW_TAB': _0x78f617(0x2eb),
                'THUMBNAIL': _0x78f617(0x2cc),
                'DOWNLOAD_ALL': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
                'CLOSE': _0x78f617(0x1f3),
                'FULLSCREEN': _0x78f617(0x229)
            }, _0x26f16f = 0xfa, _0x44229b = GM_getResourceText(_0x78f617(0x303)), _0x297823 = JSON[_0x78f617(0x1f5)](GM_getResourceText(_0x78f617(0x209)));
        var _0xa1a7bc = {
            'videoVolume': GM_getValue(_0x78f617(0x3ce)) ? GM_getValue(_0x78f617(0x3ce)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x78f617(0x22e)) ? GM_getValue('G_RENAME_FORMAT') : _0x78f617(0x440),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue('lang') || navigator[_0x78f617(0x292)] || navigator[_0x78f617(0x266)],
            'currentURL': location[_0x78f617(0x2ed)],
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
                _0x3fcf55();
            })
        };
        _0x597442(), GM_addStyle(_0x44229b), _0x27462e(), _0xc0277a(_0xa1a7bc[_0x78f617(0x204)])[_0x78f617(0x287)](_0x777b0a => {
            const _0x4c45ac = _0x78f617;
            _0xa1a7bc['locale'][_0xa1a7bc[_0x4c45ac(0x204)]] = _0x777b0a, _0x531c1d(), _0x27462e(), _0x246150(0x12c);
        })['catch'](_0x5281d7 => {
            const _0x5962c1 = _0x78f617;
            _0x27462e(), _0x246150(0x12c), !_0xa1a7bc[_0x5962c1(0x204)][_0x5962c1(0x3c7)]('en') && console[_0x5962c1(0x2c0)]('getTranslationText\x20catch\x20error:', _0x5281d7);
        }), _0x398e4a('Script\x20Loaded', GM_info['script'][_0x78f617(0x3de)], _0x78f617(0x350), GM_info[_0x78f617(0x280)][_0x78f617(0x3d1)]);
        var _0xee6355 = setInterval(function () {
            const _0x3a8243 = _0x78f617;
            if (_0x3e372a('div#splash-screen')[_0x3a8243(0x25e)] > 0x0 && !_0x3e372a(_0x3a8243(0x243))['is'](':hidden') || location[_0x3a8243(0x21f)][_0x3a8243(0x2ee)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x3a8243(0x1e4)]['startsWith'](_0x3a8243(0x1c9))) {
                _0xa1a7bc[_0x3a8243(0x376)] = ![];
                return;
            }
            if (_0xa1a7bc[_0x3a8243(0x40e)] != location[_0x3a8243(0x2ed)] || !_0xa1a7bc[_0x3a8243(0x25f)] || !_0xa1a7bc[_0x3a8243(0x376)]) {
                console[_0x3a8243(0x345)](_0x3a8243(0x409), _0x3a8243(0x259)), clearInterval(_0xa1a7bc['GL_repeat']), _0xa1a7bc['pageLoaded'] = ![], _0xa1a7bc[_0x3a8243(0x25f)] = !![], _0xa1a7bc[_0x3a8243(0x40e)] = location[_0x3a8243(0x2ed)], _0xa1a7bc[_0x3a8243(0x1ef)][_0x3a8243(0x41e)]();
                if (location[_0x3a8243(0x2ed)]['startsWith'](_0x3a8243(0x35e)) || location[_0x3a8243(0x21f)]['match'](/^\/(.*?)\/(p|reel)\//ig) || location['href'][_0x3a8243(0x3c7)]('https://www.instagram.com/reel/')) {
                    _0xa1a7bc[_0x3a8243(0x3d5)][_0x3a8243(0x3a8)] = {}, _0xa1a7bc[_0x3a8243(0x3d5)]['highlights'] = {}, _0x398e4a(_0x3a8243(0x2fb));
                    var _0x3a3edc = setInterval(() => {
                        const _0x1742ab = _0x3a8243;
                        _0x3e372a(_0x1742ab(0x241))[_0x1742ab(0x25e)] > 0x0 && (clearInterval(_0x3a3edc), setTimeout(() => {
                            _0x3fcf55(![]);
                        }, 0xf));
                    }, 0x64);
                    _0xa1a7bc[_0x3a8243(0x376)] = !![];
                }
                location[_0x3a8243(0x2ed)][_0x3a8243(0x3c7)]('https://www.instagram.com/reels/') && (_0x398e4a('isReels'), setTimeout(() => {
                    _0xfa6da8(![]);
                }, 0x96), _0xa1a7bc[_0x3a8243(0x376)] = !![]);
                if (location[_0x3a8243(0x2ed)][_0x3a8243(0x318)]('?')[0x0] == _0x3a8243(0x44f)) {
                    _0xa1a7bc[_0x3a8243(0x3d5)][_0x3a8243(0x3a8)] = {}, _0xa1a7bc['GL_dataCache']['highlights'] = {};
                    let _0x55b05c = _0xa1a7bc['GL_referrer']?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x398e4a(_0x3a8243(0x2e3), _0x55b05c), setTimeout(() => {
                        const _0x2aa713 = _0x3a8243;
                        _0x3fcf55(![], _0x55b05c);
                        const _0x520c64 = _0x3e372a(_0x2aa713(0x2ab))?.[_0x2aa713(0x1cd)]()[0x0];
                        _0x520c64 && _0xa1a7bc[_0x2aa713(0x1ef)][_0x2aa713(0x2ba)](_0x520c64, { 'childList': !![] });
                    }, 0x96), _0xa1a7bc['pageLoaded'] = !![];
                }
                _0x3e372a(_0x3a8243(0x1f0))[_0x3a8243(0x25e)] && location[_0x3a8243(0x21f)][_0x3a8243(0x2ee)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname'][_0x3a8243(0x2ee)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x398e4a(_0x3a8243(0x37a)), setTimeout(() => {
                    _0x3d8cb2(![]);
                }, 0x96), _0xa1a7bc[_0x3a8243(0x376)] = !![]);
                if (!_0xa1a7bc[_0x3a8243(0x376)]) {
                    if (location[_0x3a8243(0x2ed)][_0x3a8243(0x2ee)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0xa1a7bc[_0x3a8243(0x3d5)][_0x3a8243(0x391)] = {}, _0x398e4a(_0x3a8243(0x284)), _0x3b6a7f(![]), _0xa1a7bc[_0x3a8243(0x1ce)] = setInterval(() => {
                            _0x2b0141(![]);
                        }, _0x26f16f), _0x3e372a(_0x3a8243(0x288))[_0x3a8243(0x25e)] && setTimeout(() => {
                            const _0x56b6e6 = _0x3a8243;
                            if (_0x145f91[_0x56b6e6(0x2c2)]) {
                                var _0x48c0eb = _0x3e372a(_0x56b6e6(0x25a))[_0x56b6e6(0x1c4)](function () {
                                    const _0x203189 = _0x56b6e6;
                                    return _0x3e372a(this)[_0x203189(0x3e0)]()[_0x203189(0x25e)] === 0x0 && this['textContent'][_0x203189(0x442)]() !== '';
                                });
                                _0x48c0eb?.[_0x56b6e6(0x24a)](_0x56b6e6(0x41b));
                            }
                            _0xa1a7bc[_0x56b6e6(0x376)] = !![];
                        }, 0x96);
                    else
                        location[_0x3a8243(0x2ed)][_0x3a8243(0x2ee)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x398e4a('isStory'), _0x3e372a(_0x3a8243(0x1e1))[_0x3a8243(0x25e)] > 0x0 && (_0x3e372a(_0x3a8243(0x2a0))[_0x3a8243(0x42a)](), _0x3e372a(_0x3a8243(0x422))[_0x3a8243(0x42a)](), _0x3e372a('.IG_DWSTORY_THUMBNAIL')[_0x3a8243(0x25e)] && _0x3e372a(_0x3a8243(0x335))[_0x3a8243(0x42a)](), _0x5bf160(![]), setTimeout(() => {
                            _0x5bf160(![]);
                        }, 0x96)), _0x3e372a(_0x3a8243(0x2a0))[_0x3a8243(0x25e)] && setTimeout(() => {
                            const _0x2d9d89 = _0x3a8243;
                            if (_0x145f91[_0x2d9d89(0x2c2)]) {
                                var _0x2f6746 = _0x3e372a('div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')[_0x2d9d89(0x1c4)](function () {
                                    const _0x493532 = _0x2d9d89;
                                    return _0x3e372a(this)[_0x493532(0x3e0)]()['length'] === 0x0 && this[_0x493532(0x434)]['trim']() !== '';
                                });
                                _0x2f6746?.[_0x2d9d89(0x41b)]();
                            }
                            _0xa1a7bc['pageLoaded'] = !![];
                        }, 0x96)) : (_0xa1a7bc[_0x3a8243(0x376)] = ![], _0x3e372a('.IG_DWSTORY')['length'] && _0x3e372a(_0x3a8243(0x2a0))[_0x3a8243(0x42a)](), _0x3e372a('.IG_DWSTORY_ALL')[_0x3a8243(0x25e)] && _0x3e372a(_0x3a8243(0x277))['remove'](), _0x3e372a(_0x3a8243(0x422))[_0x3a8243(0x25e)] && _0x3e372a(_0x3a8243(0x422))[_0x3a8243(0x42a)](), _0x3e372a(_0x3a8243(0x335))[_0x3a8243(0x25e)] && _0x3e372a('.IG_DWSTORY_THUMBNAIL')[_0x3a8243(0x42a)](), _0x3e372a(_0x3a8243(0x288))['length'] && _0x3e372a('.IG_DWHISTORY')[_0x3a8243(0x42a)](), _0x3e372a(_0x3a8243(0x3e2))[_0x3a8243(0x25e)] && _0x3e372a(_0x3a8243(0x3e2))['remove'](), _0x3e372a('.IG_DWHINEWTAB')[_0x3a8243(0x25e)] && _0x3e372a(_0x3a8243(0x296))[_0x3a8243(0x42a)](), _0x3e372a('.IG_DWHISTORY_THUMBNAIL')['length'] && _0x3e372a(_0x3a8243(0x33e))[_0x3a8243(0x42a)]());
                }
                _0x246150(0x12c), _0xa1a7bc[_0x3a8243(0x240)] = new URL(location['href'])[_0x3a8243(0x21f)];
            }
        }, _0x26f16f);
        async function _0x2de136() {
            const _0x26b347 = _0x78f617;
            _0x2e6ed9(!![]);
            let _0x3b7100 = new Date()[_0x26b347(0x1fa)](), _0x2f8338 = Math['floor'](_0x3b7100 / 0x3e8), _0x2854a5 = location[_0x26b347(0x2ed)][_0x26b347(0x24b)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x239912 = await _0x46ba53(_0x2854a5), _0x378a7b = _0x239912[_0x26b347(0x2ce)]['reels_media'][0x0][_0x26b347(0x385)][_0x26b347(0x2e9)], _0x4b0604 = 0x0;
            _0x472082(_0x4b0604, _0x239912['data'][_0x26b347(0x1c5)][0x0]['items'][_0x26b347(0x25e)]), _0x239912[_0x26b347(0x2ce)][_0x26b347(0x1c5)][0x0][_0x26b347(0x3f0)]['forEach']((_0x3f3c8f, _0x47ea5b) => {
                setTimeout(() => {
                    const _0x36ce68 = a0_0x2a9c;
                    _0x145f91[_0x36ce68(0x237)] && (_0x2f8338 = _0x3f3c8f[_0x36ce68(0x428)]), _0x3f3c8f['display_resources'][_0x36ce68(0x3f6)](function (_0x1785d4, _0x4a61e7) {
                        const _0x4a547b = _0x36ce68;
                        if (_0x1785d4[_0x4a547b(0x235)] < _0x4a61e7[_0x4a547b(0x235)])
                            return 0x1;
                        if (_0x1785d4[_0x4a547b(0x235)] > _0x4a61e7['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x3f3c8f['is_video'] ? _0x25ad03(_0x3f3c8f[_0x36ce68(0x37b)][0x0]['src'], _0x378a7b, _0x36ce68(0x3a8), _0x2f8338, _0x36ce68(0x2dc), _0x3f3c8f['id'])['then'](() => {
                        const _0x5d7e26 = _0x36ce68;
                        _0x472082(++_0x4b0604, _0x239912[_0x5d7e26(0x2ce)][_0x5d7e26(0x1c5)][0x0][_0x5d7e26(0x3f0)][_0x5d7e26(0x25e)]);
                    }) : _0x25ad03(_0x3f3c8f[_0x36ce68(0x2ae)][0x0][_0x36ce68(0x3a0)], _0x378a7b, 'stories', _0x2f8338, 'jpg', _0x3f3c8f['id'])['then'](() => {
                        const _0x39a0b8 = _0x36ce68;
                        _0x472082(++_0x4b0604, _0x239912['data'][_0x39a0b8(0x1c5)][0x0][_0x39a0b8(0x3f0)]['length']);
                    });
                }, 0x64 * _0x47ea5b);
            });
        }
        async function _0x3b6a7f(_0x528cd9, _0x1bdb40) {
            const _0x4653a3 = _0x78f617;
            var _0x4ffb64 = _0x3e372a(_0x4653a3(0x2bb))[_0x4653a3(0x1c4)](function () {
                const _0x49e61a = _0x4653a3;
                return _0x3e372a(this)[_0x49e61a(0x21a)](_0x49e61a(0x2ed))[_0x49e61a(0x318)]('/')[_0x49e61a(0x1c4)](_0x246ca8 => _0x246ca8[_0x49e61a(0x25e)] > 0x0)[_0x49e61a(0x25e)] === 0x1;
            })[_0x4653a3(0x3ee)]()[_0x4653a3(0x21a)](_0x4653a3(0x2ed))[_0x4653a3(0x318)]('/')[_0x4653a3(0x1c4)](_0x3a49fd => _0x3a49fd[_0x4653a3(0x25e)] > 0x0)['at'](0x0);
            if (_0x528cd9) {
                let _0x4c4144 = new Date()[_0x4653a3(0x1fa)](), _0x1d297f = Math[_0x4653a3(0x39d)](_0x4c4144 / 0x3e8), _0x19767d = location[_0x4653a3(0x2ed)][_0x4653a3(0x24b)](/\/$/ig, '')[_0x4653a3(0x318)]('/')['at'](-0x1), _0xe3b382 = _0x3e372a('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x4653a3(0x25e)] || _0x3e372a(_0x4653a3(0x308))['length'] || _0x3e372a('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x4653a3(0x3a5)](_0x4653a3(0x1fb))[_0x4653a3(0x25e)], _0x15f99e = 0x0;
                _0x2e6ed9(!![]);
                if (_0xa1a7bc['GL_dataCache'][_0x4653a3(0x391)][_0x19767d]) {
                    _0x398e4a(_0x4653a3(0x3cc), _0x19767d);
                    let _0x5051d2 = _0xa1a7bc[_0x4653a3(0x3d5)][_0x4653a3(0x391)][_0x19767d][_0x4653a3(0x2ce)][_0x4653a3(0x1c5)][0x0][_0x4653a3(0x3f0)][_0x4653a3(0x25e)];
                    _0x4ffb64 = _0xa1a7bc['GL_dataCache'][_0x4653a3(0x391)][_0x19767d][_0x4653a3(0x2ce)][_0x4653a3(0x1c5)][0x0][_0x4653a3(0x385)][_0x4653a3(0x2e9)], _0x15f99e = _0xa1a7bc[_0x4653a3(0x3d5)][_0x4653a3(0x391)][_0x19767d]['data'][_0x4653a3(0x1c5)][0x0][_0x4653a3(0x3f0)][_0x5051d2 - _0xe3b382];
                } else {
                    let _0x5e01ce = await _0x46ba53(_0x19767d), _0x593aaa = _0x5e01ce[_0x4653a3(0x2ce)][_0x4653a3(0x1c5)][0x0][_0x4653a3(0x3f0)][_0x4653a3(0x25e)];
                    _0x4ffb64 = _0x5e01ce[_0x4653a3(0x2ce)][_0x4653a3(0x1c5)][0x0]['owner'][_0x4653a3(0x2e9)], _0x15f99e = _0x5e01ce[_0x4653a3(0x2ce)][_0x4653a3(0x1c5)][0x0][_0x4653a3(0x3f0)][_0x593aaa - _0xe3b382], _0xa1a7bc['GL_dataCache'][_0x4653a3(0x391)][_0x19767d] = _0x5e01ce;
                }
                _0x398e4a('onHighlightsStory', _0x19767d, _0xa1a7bc[_0x4653a3(0x3d5)][_0x4653a3(0x391)][_0x19767d]);
                _0x145f91[_0x4653a3(0x237)] && (_0x1d297f = _0x15f99e[_0x4653a3(0x428)]);
                if (_0x145f91['FORCE_RESOURCE_VIA_MEDIA'] && !_0xa1a7bc[_0x4653a3(0x2a6)]) {
                    let _0x3dc1d5 = await _0x21cba5(_0x15f99e['id']);
                    _0x3dc1d5[_0x4653a3(0x210)] === 'ok' ? _0x3dc1d5[_0x4653a3(0x3f0)][0x0][_0x4653a3(0x386)] ? _0x1bdb40 ? _0x3113c2(_0x3dc1d5[_0x4653a3(0x3f0)][0x0][_0x4653a3(0x386)][0x0]['url']) : _0x25ad03(_0x3dc1d5[_0x4653a3(0x3f0)][0x0][_0x4653a3(0x386)][0x0][_0x4653a3(0x387)], _0x4ffb64, _0x4653a3(0x391), _0x1d297f, _0x4653a3(0x2dc), _0x3dc1d5[_0x4653a3(0x3f0)][0x0]['id']) : _0x1bdb40 ? _0x3113c2(_0x3dc1d5['items'][0x0][_0x4653a3(0x34c)]['candidates'][0x0][_0x4653a3(0x387)]) : _0x25ad03(_0x3dc1d5[_0x4653a3(0x3f0)][0x0][_0x4653a3(0x34c)][_0x4653a3(0x365)][0x0][_0x4653a3(0x387)], _0x4ffb64, _0x4653a3(0x391), _0x1d297f, _0x4653a3(0x331), _0x3dc1d5[_0x4653a3(0x3f0)][0x0]['id']) : (_0x145f91[_0x4653a3(0x1e5)] ? (delete _0xa1a7bc[_0x4653a3(0x3d5)][_0x4653a3(0x391)][_0x19767d], _0xa1a7bc[_0x4653a3(0x2a6)] = !![], _0x3b6a7f(!![], _0x1bdb40)) : alert(_0x4653a3(0x21d) + _0x3dc1d5['message']), _0x398e4a(_0x3dc1d5));
                } else
                    _0x15f99e['is_video'] ? _0x1bdb40 ? _0x3113c2(_0x15f99e[_0x4653a3(0x37b)]['at'](-0x1)['src'], _0x4ffb64) : _0x25ad03(_0x15f99e[_0x4653a3(0x37b)]['at'](-0x1)[_0x4653a3(0x3a0)], _0x4ffb64, _0x4653a3(0x391), _0x1d297f, 'mp4', _0x15f99e['id']) : _0x1bdb40 ? _0x3113c2(_0x15f99e[_0x4653a3(0x2ae)]['at'](-0x1)[_0x4653a3(0x3a0)], _0x4ffb64) : _0x25ad03(_0x15f99e[_0x4653a3(0x2ae)]['at'](-0x1)[_0x4653a3(0x3a0)], _0x4ffb64, 'highlights', _0x1d297f, 'jpg', _0x15f99e['id']), _0xa1a7bc[_0x4653a3(0x2a6)] = ![];
                _0x2e6ed9(![]);
            } else {
                if (!_0x3e372a(_0x4653a3(0x288))[_0x4653a3(0x25e)]) {
                    let _0x2a99c5 = null;
                    _0x3e372a(_0x4653a3(0x3b2))[_0x4653a3(0x25e)] > 0x0 ? _0x2a99c5 = _0x3e372a(_0x4653a3(0x3f7)) : (_0x2a99c5 = _0x3e372a('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x2a99c5[_0x4653a3(0x219)](_0x4653a3(0x417), _0x4653a3(0x30a)));
                    if (_0x2a99c5['length'] === 0x0) {
                        let _0x7efd01 = _0x3e372a(_0x4653a3(0x3e9)), _0x4ada3d = 0x0;
                        _0x7efd01['each'](function () {
                            const _0x1e0d14 = _0x4653a3;
                            _0x3e372a(this)[_0x1e0d14(0x445)]() > _0x4ada3d && (_0x4ada3d = _0x3e372a(this)['width'](), _0x2a99c5 = _0x3e372a(this)[_0x1e0d14(0x3e0)](_0x1e0d14(0x236))[_0x1e0d14(0x3ee)]());
                        });
                    }
                    if (_0x2a99c5 != null) {
                        _0x2a99c5['append'](_0x4653a3(0x2ac) + _0x1dad1c('DW') + _0x4653a3(0x1d4) + _0x53e079[_0x4653a3(0x3b7)] + _0x4653a3(0x26f)), _0x2a99c5[_0x4653a3(0x26b)](_0x4653a3(0x323) + _0x1dad1c(_0x4653a3(0x271)) + _0x4653a3(0x3ac) + _0x53e079[_0x4653a3(0x271)] + _0x4653a3(0x26f));
                        let _0x424ff9 = _0x5a7be8(_0x4ffb64);
                        _0x424ff9[_0x4653a3(0x25e)] > 0x1 && _0x2a99c5[_0x4653a3(0x26b)](_0x4653a3(0x36c) + _0x1dad1c(_0x4653a3(0x247)) + _0x4653a3(0x2e4) + _0x53e079[_0x4653a3(0x21e)] + '</div>');
                        let _0x4d12c7 = _0x424ff9['parents'](_0x4653a3(0x2d5))[_0x4653a3(0x3a5)](_0x4653a3(0x267))?.[_0x4653a3(0x21a)](_0x4653a3(0x3ca));
                        _0x4d12c7 != null && _0x424ff9['parents'](_0x4653a3(0x2d5))['find'](_0x4653a3(0x267))[_0x4653a3(0x1f9)](_0x4d12c7), _0x2a99c5[_0x4653a3(0x3a5)](_0x4653a3(0x342))[_0x4653a3(0x42e)](function () {
                            const _0x49636b = _0x4653a3;
                            _0x3e372a(this)['on'](_0x49636b(0x2ad), function () {
                                const _0x21aed5 = _0x49636b;
                                !_0x3e372a(this)[_0x21aed5(0x2ce)](_0x21aed5(0x3f5)) && (_0x2a99c5[_0x21aed5(0x3a5)](_0x21aed5(0x33e))[_0x21aed5(0x25e)] === 0x0 ? (_0x3e372a(this)[_0x21aed5(0x21a)]('data-remove-thumbnail', !![]), _0x3e372a(_0x21aed5(0x33e))['remove'](), _0x398e4a('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x3e372a(this)[_0x21aed5(0x21a)](_0x21aed5(0x341), !![]), _0x398e4a('(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x2b0141(_0x401979) {
            const _0x59e64f = _0x78f617;
            if (_0x401979) {
                let _0x238c9f = new Date()[_0x59e64f(0x1fa)](), _0x296b8f = Math[_0x59e64f(0x39d)](_0x238c9f / 0x3e8), _0xa22fc = location['href']['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x4d1d73 = '', _0xfe08d5 = _0x3e372a(_0x59e64f(0x251))[_0x59e64f(0x25e)] || _0x3e372a(_0x59e64f(0x308))['length'] || _0x3e372a('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')['find'](_0x59e64f(0x1fb))['length'], _0x284356 = '';
                _0x2e6ed9(!![]);
                if (_0xa1a7bc[_0x59e64f(0x3d5)][_0x59e64f(0x391)][_0xa22fc]) {
                    _0x398e4a(_0x59e64f(0x3cc), _0xa22fc);
                    let _0x181697 = _0xa1a7bc[_0x59e64f(0x3d5)][_0x59e64f(0x391)][_0xa22fc][_0x59e64f(0x2ce)]['reels_media'][0x0][_0x59e64f(0x3f0)][_0x59e64f(0x25e)];
                    _0x4d1d73 = _0xa1a7bc[_0x59e64f(0x3d5)][_0x59e64f(0x391)][_0xa22fc]['data'][_0x59e64f(0x1c5)][0x0][_0x59e64f(0x385)][_0x59e64f(0x2e9)], _0x284356 = _0xa1a7bc[_0x59e64f(0x3d5)][_0x59e64f(0x391)][_0xa22fc][_0x59e64f(0x2ce)]['reels_media'][0x0]['items'][_0x181697 - _0xfe08d5];
                } else {
                    let _0x25b028 = await _0x46ba53(_0xa22fc), _0x2de0e6 = _0x25b028[_0x59e64f(0x2ce)][_0x59e64f(0x1c5)][0x0]['items']['length'];
                    _0x4d1d73 = _0x25b028['data']['reels_media'][0x0][_0x59e64f(0x385)][_0x59e64f(0x2e9)], _0x284356 = _0x25b028[_0x59e64f(0x2ce)]['reels_media'][0x0][_0x59e64f(0x3f0)][_0x2de0e6 - _0xfe08d5], _0xa1a7bc[_0x59e64f(0x3d5)]['highlights'][_0xa22fc] = _0x25b028;
                }
                _0x145f91[_0x59e64f(0x237)] && (_0x296b8f = _0x284356['taken_at_timestamp']);
                if (_0x145f91[_0x59e64f(0x362)] && !_0xa1a7bc[_0x59e64f(0x2a6)]) {
                    let _0x3b9dda = await _0x21cba5(_0x284356['id']);
                    _0x3b9dda['status'] === 'ok' ? _0x25ad03(_0x3b9dda[_0x59e64f(0x3f0)][0x0][_0x59e64f(0x34c)][_0x59e64f(0x365)][0x0]['url'], _0x4d1d73, _0x59e64f(0x391), _0x296b8f, 'jpg', _0xa22fc) : (_0x145f91['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (delete _0xa1a7bc[_0x59e64f(0x3d5)]['highlights'][_0xa22fc], _0xa1a7bc[_0x59e64f(0x2a6)] = !![], _0x2b0141(!![])) : alert(_0x59e64f(0x21d) + _0x3b9dda[_0x59e64f(0x1f6)]), _0x398e4a(_0x3b9dda));
                } else
                    _0x25ad03(_0x284356[_0x59e64f(0x2ae)]['at'](-0x1)[_0x59e64f(0x3a0)], _0x4d1d73, _0x59e64f(0x391), _0x296b8f, _0x59e64f(0x331), _0xa22fc), _0xa1a7bc[_0x59e64f(0x2a6)] = ![];
                _0x2e6ed9(![]);
            } else {
                if (_0x3e372a(_0x59e64f(0x27b))[_0x59e64f(0x25e)]) {
                    if (!_0x3e372a(_0x59e64f(0x33e))['length']) {
                        let _0x4a63dc = null;
                        _0x3e372a(_0x59e64f(0x3b2))[_0x59e64f(0x25e)] > 0x0 ? _0x4a63dc = _0x3e372a('body\x20>\x20div\x20section:visible._ac0a') : (_0x4a63dc = _0x3e372a(_0x59e64f(0x368)), _0x4a63dc[_0x59e64f(0x219)](_0x59e64f(0x417), _0x59e64f(0x30a)));
                        if (_0x4a63dc[_0x59e64f(0x25e)] === 0x0) {
                            let _0x7621ed = _0x3e372a(_0x59e64f(0x3e9)), _0x5aa29b = 0x0;
                            _0x7621ed['each'](function () {
                                const _0x3f40bf = _0x59e64f;
                                _0x3e372a(this)[_0x3f40bf(0x445)]() > _0x5aa29b && (_0x5aa29b = _0x3e372a(this)['width'](), _0x4a63dc = _0x3e372a(this)[_0x3f40bf(0x3e0)](_0x3f40bf(0x236))[_0x3f40bf(0x3ee)]());
                            });
                        }
                        _0x4a63dc != null && _0x4a63dc['append'](_0x59e64f(0x3f2) + _0x1dad1c(_0x59e64f(0x313)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x53e079['THUMBNAIL'] + _0x59e64f(0x26f));
                    }
                } else
                    _0x3e372a('.IG_DWHISTORY_THUMBNAIL')['remove']();
            }
        }
        function _0x3fcf55(_0x1413b6, _0x1823f3) {
            const _0x2e88ad = _0x78f617;
            _0x1823f3 === !![] && (_0x398e4a(_0x2e88ad(0x27e), _0x2e88ad(0x265)), _0x3e372a(_0x2e88ad(0x433))[_0x2e88ad(0x1c4)](function () {
                const _0x2ac8e6 = _0x2e88ad;
                return _0x3e372a(this)[_0x2ac8e6(0x3a5)](_0x2ac8e6(0x319))[_0x2ac8e6(0x25e)] === 0x0;
            })['removeAttr'](_0x2e88ad(0x257)));
            if (_0x1413b6 == ![]) {
                const _0x3d1194 = 0x64;
                let _0xe4a61e = 0x0;
                var _0x48d7a6 = setInterval(() => {
                    const _0x33c809 = _0x2e88ad;
                    (_0xe4a61e > _0x3d1194 || _0x3e372a(_0x33c809(0x2af))['length'] > 0x0) && (clearInterval(_0x48d7a6), _0xe4a61e > _0x3d1194 && console[_0x33c809(0x2c7)](_0x33c809(0x424), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x398e4a(_0x33c809(0x424), _0x33c809(0x3d9)), _0x2a81d(), _0xe4a61e++;
                }, 0x32);
            } else
                _0x2a81d();
        }
        function _0x295677(_0x3c0919) {
            const _0x3be22f = _0x78f617;
            _0x145f91[_0x3be22f(0x374)] && _0x3c0919[_0x3be22f(0x3a5)](_0x3be22f(0x23e))[_0x3be22f(0x42e)](function () {
                const _0x2835e5 = _0x3be22f;
                _0x3e372a(this)['on'](_0x2835e5(0x222), function () {
                    const _0x237a70 = _0x2835e5;
                    !_0x3e372a(this)[_0x237a70(0x2ce)](_0x237a70(0x28b)) && (_0x3e372a(this)[_0x237a70(0x21a)]('data-loop', !![]), this[_0x237a70(0x1f7)](), _0x398e4a(_0x237a70(0x1cb)));
                });
            });
            _0x145f91['MODIFY_VIDEO_VOLUME'] && _0x3c0919['find'](_0x3be22f(0x23e))[_0x3be22f(0x42e)](function () {
                const _0xdba969 = _0x3be22f;
                _0x3e372a(this)['on'](_0xdba969(0x324), function () {
                    const _0x3436a9 = _0xdba969;
                    !_0x3e372a(this)[_0x3436a9(0x2ce)](_0x3436a9(0x346)) && (_0x3e372a(this)[_0x3436a9(0x21a)](_0x3436a9(0x3d7), !![]), this[_0x3436a9(0x378)] = _0xa1a7bc[_0x3436a9(0x34b)], _0x398e4a('(post)\x20Added\x20video\x20event\x20listener\x20#modify'));
                });
            });
            _0x145f91[_0x3be22f(0x2a1)] && _0x3c0919['find'](_0x3be22f(0x23e))[_0x3be22f(0x42e)](function () {
                const _0x3035b0 = _0x3be22f;
                if (!_0x3e372a(this)['data'](_0x3035b0(0x1d5))) {
                    let _0x371275 = _0x3e372a(this);
                    _0x398e4a(_0x3035b0(0x44d)), _0x145f91[_0x3035b0(0x420)] && (this['volume'] = _0xa1a7bc[_0x3035b0(0x34b)], _0x3e372a(this)['on']('loadstart', function () {
                        const _0x2f956d = _0x3035b0;
                        this[_0x2f956d(0x378)] = _0xa1a7bc[_0x2f956d(0x34b)];
                    })), _0x3e372a(this)['on'](_0x3035b0(0x379), function (_0x2100ef) {
                        const _0xb667dd = _0x3035b0;
                        _0x2100ef[_0xb667dd(0x25c)](), _0x371275[_0xb667dd(0x219)](_0xb667dd(0x213), '-1'), _0x371275[_0xb667dd(0x39f)](_0xb667dd(0x1d5));
                    }), _0x3e372a(this)[_0x3035b0(0x1cd)]()['find'](_0x3035b0(0x3ab))[_0x3035b0(0x3ee)]()['on'](_0x3035b0(0x379), function (_0x3c65f2) {
                        const _0x485273 = _0x3035b0;
                        _0x3c65f2[_0x485273(0x25c)](), _0x371275['css'](_0x485273(0x213), '2'), _0x371275[_0x485273(0x21a)](_0x485273(0x1d5), !![]);
                    }), _0x3e372a(this)['on']('volumechange', function () {
                        const _0x186afd = _0x3035b0;
                        let _0x411aa3 = _0x3e372a(this)[_0x186afd(0x1cd)]()[_0x186afd(0x3a5)](_0x186afd(0x3ab))[_0x186afd(0x3a5)](_0x186afd(0x27c))[_0x186afd(0x1c4)](function (_0x81c256) {
                            const _0x835532 = _0x186afd;
                            return _0x3e372a(this)[_0x835532(0x445)]() <= 0x40 && _0x3e372a(this)[_0x835532(0x448)]() <= 0x40 && _0x3e372a(this)[_0x835532(0x3a5)](_0x835532(0x2a8))[_0x835532(0x25e)] > 0x0;
                        });
                        var _0xa4059b = _0x411aa3[_0x186afd(0x3a5)](_0x186afd(0x291))[_0x186afd(0x25e)] === 0x0;
                        this['muted'] != _0xa4059b && (this[_0x186afd(0x378)] = _0xa1a7bc[_0x186afd(0x34b)], _0x411aa3?.[_0x186afd(0x24a)](_0x186afd(0x41b))), _0x3e372a(this)[_0x186afd(0x21a)](_0x186afd(0x38e)) && (_0xa1a7bc['videoVolume'] = this[_0x186afd(0x378)], GM_setValue(_0x186afd(0x3ce), this[_0x186afd(0x378)])), this[_0x186afd(0x378)] == _0xa1a7bc[_0x186afd(0x34b)] && _0x3e372a(this)[_0x186afd(0x21a)](_0x186afd(0x38e), !![]);
                    }), _0x3e372a(this)['css']('position', _0x3035b0(0x361)), _0x3e372a(this)[_0x3035b0(0x219)](_0x3035b0(0x213), '2'), _0x3e372a(this)[_0x3035b0(0x21a)]('data-controls', !![]), _0x3e372a(this)[_0x3035b0(0x21a)]('controls', !![]);
                }
            });
            var _0x42fbf9 = _0x3c0919[_0x3be22f(0x3a5)](_0x3be22f(0x23e)), _0x230a29 = _0x3c0919[_0x3be22f(0x3a5)](_0x3be22f(0x3ab))['first']();
            _0x1e81ff(_0x42fbf9, _0x230a29, _0x3be22f(0x300), 'bottom');
        }
        ;
        function _0x2a81d() {
            const _0x26c00a = _0x78f617;
            _0x3e372a('article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr')['map'](function (_0x368ca3) {
                const _0x3f4f97 = a0_0x2a9c;
                return _0x3e372a(this)['is'](_0x3f4f97(0x21c)) ? _0x3e372a(this)[_0x3f4f97(0x1cd)]()[_0x3f4f97(0x1cd)]()[_0x3f4f97(0x1cd)]()[_0x3f4f97(0x1cd)]()[0x0] : this;
            })[_0x26c00a(0x1c4)](function () {
                const _0x20f239 = _0x26c00a;
                return _0x3e372a(this)[_0x20f239(0x448)]() > 0x0 && _0x3e372a(this)[_0x20f239(0x445)]() > 0x0;
            })['each'](function (_0x220609) {
                const _0x3ea0d6 = _0x26c00a;
                if (!_0x3e372a(this)['attr']('data-snig') && !_0x3e372a(this)[_0x3ea0d6(0x256)](_0x3ea0d6(0x364)) && !_0x3e372a(this)[_0x3ea0d6(0x3e0)](_0x3ea0d6(0x393))?.[_0x3ea0d6(0x256)](_0x3ea0d6(0x364)) && _0x3e372a(this)[_0x3ea0d6(0x33d)](_0x3ea0d6(0x426))['length'] === 0x0) {
                    _0x398e4a(_0x3ea0d6(0x21b), _0x3e372a(this));
                    const _0x3b1bae = _0x3e372a(this), _0x4ab03a = this[_0x3ea0d6(0x2a4)], _0x4571a9 = '._acay\x20._acaz';
                    var _0x353f67;
                    if (_0x4ab03a === _0x3ea0d6(0x1fc) && _0x220609 != 0x0)
                        return;
                    const _0x125651 = _0x3b1bae['children'](_0x3ea0d6(0x236))['children'](_0x3ea0d6(0x236));
                    if (_0x125651['length'] === 0x0)
                        return;
                    _0x398e4a('Found\x20insert\x20point', _0x125651);
                    if (_0x3b1bae['find'](_0x3ea0d6(0x3a3))['length'] > 0x0) {
                        _0x3b1bae[_0x3ea0d6(0x3a5)](_0x3ea0d6(0x3ad))[_0x3ea0d6(0x25e)] > 0x0 && _0x3b1bae[_0x3ea0d6(0x3a5)](_0x3ea0d6(0x3ad))['css'](_0x3ea0d6(0x419), '37px');
                        const _0x12f887 = _0x3b1bae[_0x3ea0d6(0x3a5)]('._acay')[_0x3ea0d6(0x3ee)]()[_0x3ea0d6(0x1cd)]()[0x0];
                        var _0x93e8b4 = new MutationObserver(function () {
                            const _0x545363 = _0x3ea0d6;
                            _0x3b1bae[_0x545363(0x3a5)](_0x545363(0x3ad))['css']('top', '37px');
                        });
                        _0x93e8b4[_0x3ea0d6(0x2ba)](_0x12f887, { 'childList': !![] });
                    }
                    _0x125651['eq'](_0x4ab03a === 'DIV' ? 0x0 : _0x125651[_0x3ea0d6(0x25e)] - 0x2)[_0x3ea0d6(0x26b)]('<div\x20class=\x22button_wrapper\x22>');
                    const _0x3174e5 = _0x3ea0d6(0x2ac) + _0x1dad1c('DW') + '\x22\x20class=\x22IG_DW_MAIN\x22>' + _0x53e079['DOWNLOAD'] + _0x3ea0d6(0x26f), _0x48dd8a = _0x3ea0d6(0x323) + _0x1dad1c(_0x3ea0d6(0x271)) + '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>' + _0x53e079[_0x3ea0d6(0x271)] + _0x3ea0d6(0x26f), _0x33dd02 = _0x3ea0d6(0x3f2) + _0x1dad1c(_0x3ea0d6(0x313)) + _0x3ea0d6(0x37d) + _0x53e079[_0x3ea0d6(0x338)] + _0x3ea0d6(0x26f), _0x4294b7 = _0x3ea0d6(0x436) + _0x1dad1c(_0x3ea0d6(0x413)) + '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>' + _0x53e079[_0x3ea0d6(0x306)] + _0x3ea0d6(0x26f);
                    _0x125651['find'](_0x3ea0d6(0x20b))['append'](_0x3174e5);
                    const _0x147fe2 = _0x3b1bae[_0x3ea0d6(0x3a5)](_0x4571a9)[_0x3ea0d6(0x25e)];
                    if (_0x147fe2 > 0x1 && _0x145f91['DIRECT_DOWNLOAD_VISIBLE_RESOURCE'] && !_0x145f91[_0x3ea0d6(0x356)]) {
                        const _0xe6ef6 = _0x3ea0d6(0x36c) + _0x1dad1c('DW_ALL') + _0x3ea0d6(0x1c3) + _0x53e079[_0x3ea0d6(0x21e)] + _0x3ea0d6(0x26f);
                        _0x125651[_0x3ea0d6(0x3a5)](_0x3ea0d6(0x20b))['append'](_0xe6ef6);
                    }
                    _0x125651[_0x3ea0d6(0x3a5)](_0x3ea0d6(0x20b))[_0x3ea0d6(0x26b)](_0x48dd8a), setTimeout(() => {
                        const _0x2f415d = _0x3ea0d6;
                        if (_0x125651['eq'](_0x4ab03a === 'DIV' ? 0x0 : _0x125651[_0x2f415d(0x25e)] - 0x2)[_0x2f415d(0x3a5)](_0x2f415d(0x2e5))['length'] === 0x0)
                            _0x125651[_0x2f415d(0x3a5)](_0x2f415d(0x23e))['length'] > 0x0 ? _0x125651['find'](_0x2f415d(0x20b))[_0x2f415d(0x26b)](_0x33dd02) : (_0x353f67 = _0x3b1bae[_0x2f415d(0x3a5)]('img')['filter'](function () {
                                const _0x33f52f = _0x2f415d;
                                return _0x3e372a(this)[_0x33f52f(0x445)]() > 0xc8 && _0x3e372a(this)['height']() > 0xc8;
                            })[_0x2f415d(0x21a)](_0x2f415d(0x3a0)), _0x125651[_0x2f415d(0x3a5)](_0x2f415d(0x20b))[_0x2f415d(0x26b)](_0x4294b7));
                        else {
                            const _0x4df43f = (_0x43d49b, _0x2f28a7) => {
                                    const _0x12e6cd = _0x2f415d;
                                    _0x43d49b[_0x12e6cd(0x344)](_0x5b2442 => {
                                        const _0x1327a1 = _0x12e6cd;
                                        if (_0x5b2442[_0x1327a1(0x1cc)]) {
                                            var _0x3dc628 = _0x3e372a(_0x5b2442[_0x1327a1(0x2d7)]);
                                            _0x125651[_0x1327a1(0x3a5)](_0x1327a1(0x438))?.['remove'](), _0x125651[_0x1327a1(0x3a5)]('.IG_IMAGE_VIEWER')?.['remove'](), _0x3dc628[_0x1327a1(0x3a5)](_0x1327a1(0x23e))[_0x1327a1(0x25e)] > 0x0 ? (_0x125651[_0x1327a1(0x3a5)](_0x1327a1(0x438))['length'] === 0x0 && _0x125651[_0x1327a1(0x3a5)](_0x1327a1(0x20b))['append'](_0x33dd02), _0x295677(_0x3b1bae)) : (_0x353f67 = _0x3dc628['find']('img')[_0x1327a1(0x21a)](_0x1327a1(0x3a0)), _0x125651['find'](_0x1327a1(0x20b))[_0x1327a1(0x26b)](_0x4294b7));
                                        }
                                    });
                                }, _0x169337 = new IntersectionObserver(_0x4df43f, {
                                    'root': _0x3b1bae[_0x2f415d(0x3a5)](_0x2f415d(0x42d))[_0x2f415d(0x3ee)]()[_0x2f415d(0x1cd)]()[_0x2f415d(0x1cd)]()[_0x2f415d(0x1cd)]()[0x0],
                                    'rootMargin': _0x2f415d(0x1d1),
                                    'threshold': 0.1
                                }), _0x5adde3 = new MutationObserver(function (_0x237154, _0x28da37) {
                                    const _0x1718aa = _0x2f415d;
                                    var _0x543461 = _0x237154['at'](0x0)?.[_0x1718aa(0x2d7)];
                                    _0x3e372a(_0x543461)[_0x1718aa(0x3a5)](_0x1718aa(0x263))['each'](function () {
                                        const _0x2f22e3 = _0x1718aa;
                                        _0x169337[_0x2f22e3(0x2ba)](this);
                                    });
                                });
                            _0x3b1bae[_0x2f415d(0x3a5)](_0x2f415d(0x2e5))['each'](function () {
                                const _0x4d87d5 = _0x2f415d;
                                _0x169337[_0x4d87d5(0x2ba)](this);
                            });
                            const _0x39796c = _0x125651['eq'](_0x4ab03a === _0x2f415d(0x1fc) ? 0x0 : _0x125651[_0x2f415d(0x25e)] - 0x2)[_0x2f415d(0x3a5)]('div\x20>\x20ul\x20li._acaz')?.[_0x2f415d(0x1cd)]()[0x0], _0x16a5f6 = _0x125651['eq'](_0x4ab03a === 'DIV' ? 0x0 : _0x125651[_0x2f415d(0x25e)] - 0x2)[_0x2f415d(0x3a5)](_0x2f415d(0x2e5))?.['parent']()[_0x2f415d(0x1cd)]()[0x0];
                            _0x39796c && _0x5adde3[_0x2f415d(0x2ba)](_0x39796c, { 'childList': !![] }), _0x16a5f6 && _0x5adde3[_0x2f415d(0x2ba)](_0x16a5f6, { 'attributes': !![] });
                        }
                    }, 0x32), _0x125651[_0x3ea0d6(0x219)](_0x3ea0d6(0x417), 'relative'), _0x295677(_0x3b1bae), _0xa1a7bc[_0x3ea0d6(0x3e3)]['push']({
                        'element': this,
                        'trigger': [
                            _0x3ea0d6(0x438),
                            _0x3ea0d6(0x20c),
                            _0x3ea0d6(0x410),
                            _0x3ea0d6(0x319),
                            _0x3ea0d6(0x2a5)
                        ]
                    }), _0x3e372a(this)['on']('click', '.IG_IMAGE_VIEWER', function () {
                        _0x353f67 != null ? _0x250959(_0x353f67) : alert('Cannot\x20find\x20resource\x20url.');
                    }), _0x3e372a(this)['on']('click', _0x3ea0d6(0x438), function () {
                        const _0x32f9af = _0x3ea0d6;
                        _0x2e6ed9(!![]), _0xa1a7bc[_0x32f9af(0x208)] = _0x3b1bae[_0x32f9af(0x21a)](_0x32f9af(0x435)), _0xa1a7bc[_0x32f9af(0x3b8)] = location[_0x32f9af(0x21f)][_0x32f9af(0x24b)](/\/$/, '')['split']('/')['at'](-0x1) || _0x3b1bae[_0x32f9af(0x3a5)](_0x32f9af(0x2b7))[_0x32f9af(0x3ee)]()[_0x32f9af(0x21a)]('href')[_0x32f9af(0x318)]('/')['at'](0x2) || _0x3e372a(this)[_0x32f9af(0x1cd)]()[_0x32f9af(0x1cd)]()[_0x32f9af(0x1cd)]()[_0x32f9af(0x3e0)](_0x32f9af(0x30b))[_0x32f9af(0x3e0)](_0x32f9af(0x236))[_0x32f9af(0x3e0)](_0x32f9af(0x30b))[_0x32f9af(0x3a5)](_0x32f9af(0x2b7))[_0x32f9af(0x28a)]()['attr'](_0x32f9af(0x2ed))[_0x32f9af(0x318)]('/')['at'](0x2);
                        var _0x373e88 = _0x2b4833(_0x3b1bae);
                        _0x7ea799(!![], ![]), _0xb9c0(_0xa1a7bc[_0x32f9af(0x3b8)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x32f9af(0x287)](() => {
                            let _0x40b8e4 = setInterval(() => {
                                const _0x2a1997 = a0_0x2a9c;
                                if (_0x3e372a(_0x2a1997(0x242))[_0x2a1997(0x25e)] > 0x0) {
                                    clearInterval(_0x40b8e4);
                                    var _0x28188b = _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x373e88 + 0x1) + '\x22]')?.['parent']()['find'](_0x2a1997(0x3d3))?.['first']();
                                    _0x28188b != null && _0x28188b['length'] > 0x0 ? _0x28188b[_0x2a1997(0x24a)](_0x2a1997(0x41b)) : alert(_0x2a1997(0x403)), _0x2e6ed9(![]), _0x3e372a('.IG_POPUP_DIG')['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x3e372a(this)['on'](_0x3ea0d6(0x41b), _0x3ea0d6(0x20c), function () {
                        const _0x4cf896 = _0x3ea0d6;
                        _0x2e6ed9(!![]), _0xa1a7bc[_0x4cf896(0x208)] = _0x3b1bae[_0x4cf896(0x21a)]('data-username'), _0xa1a7bc[_0x4cf896(0x3b8)] = location[_0x4cf896(0x21f)][_0x4cf896(0x24b)](/\/$/, '')[_0x4cf896(0x318)]('/')['at'](-0x1) || _0x3b1bae[_0x4cf896(0x3a5)](_0x4cf896(0x2b7))['first']()[_0x4cf896(0x21a)]('href')[_0x4cf896(0x318)]('/')['at'](0x2) || _0x3e372a(this)[_0x4cf896(0x1cd)]()[_0x4cf896(0x1cd)]()[_0x4cf896(0x1cd)]()['children'](_0x4cf896(0x30b))[_0x4cf896(0x3e0)]('div')['children'](_0x4cf896(0x30b))[_0x4cf896(0x3a5)]('a[href^=\x22/p/\x22]')['last']()['attr'](_0x4cf896(0x2ed))[_0x4cf896(0x318)]('/')['at'](0x2);
                        var _0x5b1454 = _0x2b4833(_0x3b1bae);
                        _0x7ea799(!![], ![]), _0xb9c0(_0xa1a7bc[_0x4cf896(0x3b8)], _0x4cf896(0x325), '')[_0x4cf896(0x287)](() => {
                            let _0x1ae9e7 = setInterval(() => {
                                const _0x41ea6e = a0_0x2a9c;
                                if (_0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x41ea6e(0x25e)] > 0x0) {
                                    clearInterval(_0x1ae9e7);
                                    var _0x2ddfa4 = _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x5b1454 + 0x1) + '\x22]');
                                    if (_0x145f91[_0x41ea6e(0x362)] && _0x145f91[_0x41ea6e(0x307)])
                                        _0x454414(_0x2ddfa4['first']()[0x0], !![]);
                                    else {
                                        let _0x39c091 = _0x2ddfa4?.[_0x41ea6e(0x21a)]('data-href');
                                        if (_0x39c091) {
                                            var _0x512e04 = new URL(_0x39c091);
                                            _0x512e04['host'] = _0x41ea6e(0x2e1), _0x3113c2(_0x512e04[_0x41ea6e(0x2ed)]);
                                        } else
                                            alert(_0x41ea6e(0x394));
                                    }
                                    _0x2e6ed9(![]), _0x3e372a('.IG_POPUP_DIG')['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x3e372a(this)['on']('click', '.IG_DW_ALL_MAIN', async function () {
                        const _0x28d781 = _0x3ea0d6;
                        _0xa1a7bc[_0x28d781(0x208)] = _0x3b1bae[_0x28d781(0x21a)](_0x28d781(0x435)), _0xa1a7bc['GL_postPath'] = location[_0x28d781(0x21f)][_0x28d781(0x24b)](/\/$/, '')[_0x28d781(0x318)]('/')['at'](-0x1) || _0x3b1bae['find'](_0x28d781(0x2b7))[_0x28d781(0x3ee)]()[_0x28d781(0x21a)]('href')[_0x28d781(0x318)]('/')['at'](0x2) || _0x3e372a(this)[_0x28d781(0x1cd)]()[_0x28d781(0x1cd)]()['parent']()['children']('div:last-child')['children'](_0x28d781(0x236))['children'](_0x28d781(0x30b))[_0x28d781(0x3a5)](_0x28d781(0x2b7))['last']()['attr'](_0x28d781(0x2ed))[_0x28d781(0x318)]('/')['at'](0x2), _0x7ea799(_0x145f91[_0x28d781(0x356)], !![]), _0x3e372a(_0x28d781(0x388))['html']('<a\x20href=\x22https://www.instagram.com/p/' + _0xa1a7bc[_0x28d781(0x3b8)] + '\x22>' + _0xa1a7bc[_0x28d781(0x3b8)] + _0x28d781(0x28d)), _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x28d781(0x42e)](function () {
                            const _0x897e7f = _0x28d781;
                            _0x3e372a(this)[_0x897e7f(0x2c3)](_0x897e7f(0x1c7)), _0x3e372a(this)[_0x897e7f(0x218)](_0x897e7f(0x233)), _0x3e372a(this)[_0x897e7f(0x41f)](_0x897e7f(0x323) + _0x1dad1c(_0x897e7f(0x271)) + '\x22\x20class=\x22newTab\x22>' + _0x53e079[_0x897e7f(0x271)] + '</div>'), _0x3e372a(this)['attr'](_0x897e7f(0x32b)) == _0x897e7f(0x23e) && _0x3e372a(this)['after'](_0x897e7f(0x3f2) + _0x1dad1c('THUMBNAIL_INTRO') + _0x897e7f(0x44b) + _0x53e079['THUMBNAIL'] + _0x897e7f(0x26f));
                        }), _0xb9c0(_0xa1a7bc['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1dad1c(_0x28d781(0x33b)))['then'](() => {
                            let _0x2709f1 = setInterval(() => {
                                const _0x48b23d = a0_0x2a9c;
                                _0x3e372a(_0x48b23d(0x242))[_0x48b23d(0x25e)] > 0x0 && (clearInterval(_0x2709f1), _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x48b23d(0x42e)](function () {
                                    const _0xab3707 = _0x48b23d;
                                    _0x3e372a(this)[_0xab3707(0x24a)](_0xab3707(0x41b));
                                }), _0x3e372a(_0x48b23d(0x231))['remove']());
                            }, 0xfa);
                        });
                    }), _0x3e372a(this)['on'](_0x3ea0d6(0x41b), _0x3ea0d6(0x319), async function () {
                        const _0x3c3275 = _0x3ea0d6;
                        _0xa1a7bc['GL_username'] = _0x3b1bae[_0x3c3275(0x21a)](_0x3c3275(0x435)), _0xa1a7bc[_0x3c3275(0x3b8)] = location[_0x3c3275(0x21f)][_0x3c3275(0x24b)](/\/$/, '')[_0x3c3275(0x318)]('/')['at'](-0x1) || _0x3b1bae['find']('a[href^=\x22/p/\x22]')[_0x3c3275(0x3ee)]()[_0x3c3275(0x21a)](_0x3c3275(0x2ed))[_0x3c3275(0x318)]('/')['at'](0x2) || _0x3e372a(this)['parent']()[_0x3c3275(0x1cd)]()[_0x3c3275(0x1cd)]()['children'](_0x3c3275(0x30b))[_0x3c3275(0x3e0)](_0x3c3275(0x236))[_0x3c3275(0x3e0)](_0x3c3275(0x30b))[_0x3c3275(0x3a5)]('a[href^=\x22/p/\x22]')[_0x3c3275(0x28a)]()['attr'](_0x3c3275(0x2ed))['split']('/')['at'](0x2), _0x7ea799(_0x145f91[_0x3c3275(0x356)], !![]), _0x3e372a(_0x3c3275(0x388))[_0x3c3275(0x1f4)](_0x3c3275(0x40b) + _0xa1a7bc['GL_postPath'] + '\x22>' + _0xa1a7bc['GL_postPath'] + _0x3c3275(0x28d));
                        if (_0x145f91[_0x3c3275(0x282)]) {
                            _0x2e6ed9(!![]), _0x39ec4c(!![]);
                            var _0x50f987 = _0x2b4833(_0x3e372a(this)[_0x3c3275(0x1cd)]()[_0x3c3275(0x1cd)]()['parent']());
                            _0xb9c0(_0xa1a7bc[_0x3c3275(0x3b8)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x3c3275(0x287)](() => {
                                let _0x3b1dab = setInterval(() => {
                                    const _0x1f17ef = a0_0x2a9c;
                                    if (_0x3e372a(_0x1f17ef(0x242))['length'] > 0x0) {
                                        clearInterval(_0x3b1dab);
                                        var _0x4879ab = _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x50f987 + 0x1) + '\x22]')?.[_0x1f17ef(0x21a)](_0x1f17ef(0x206));
                                        _0x4879ab ? (_0x2e6ed9(![]), _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x50f987 + 0x1) + '\x22]')?.[_0x1f17ef(0x24a)](_0x1f17ef(0x41b))) : alert('Can\x20not\x20find\x20download\x20url.'), _0x3e372a(_0x1f17ef(0x231))[_0x1f17ef(0x42a)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x145f91[_0x3c3275(0x356)]) {
                            var _0x25caec = 0x0, _0x58d773 = _0x3e372a(this)[_0x3c3275(0x1cd)]()[_0x3c3275(0x1cd)]()[_0x3c3275(0x3a5)](_0x4571a9)[_0x3c3275(0x25e)], _0x159e7e = _0x145f91['FORCE_FETCH_ALL_RESOURCES'], _0x4e7515 = new Date(_0x3e372a(this)[_0x3c3275(0x1cd)]()[_0x3c3275(0x1cd)]()['parent']()['find'](_0x3c3275(0x3da))[_0x3c3275(0x1c4)](function () {
                                    const _0x12339c = _0x3c3275;
                                    let _0x520045 = _0x3e372a(this)[_0x12339c(0x33d)](_0x12339c(0x3d4))['attr'](_0x12339c(0x2ed));
                                    return _0x520045?.[_0x12339c(0x3c7)]('/p/') || _0x520045?.[_0x12339c(0x2ee)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })[_0x3c3275(0x3ee)]()[_0x3c3275(0x21a)](_0x3c3275(0x34a)))[_0x3c3275(0x1fa)]();
                            if (_0x58d773)
                                _0x3e372a(this)['parent']()[_0x3c3275(0x1cd)]()[_0x3c3275(0x3a5)](_0x4571a9)[_0x3c3275(0x42e)](function () {
                                    const _0x166f87 = _0x3c3275;
                                    let _0x10525c = _0x3e372a(this)[_0x166f87(0x1cd)]()[_0x166f87(0x1cd)]()[_0x166f87(0x1cd)]()[_0x166f87(0x3a5)](_0x166f87(0x23e));
                                    _0x10525c && _0x10525c[_0x166f87(0x21a)](_0x166f87(0x3a0)) && (_0x159e7e = !![]);
                                }), _0x159e7e || _0x145f91['FORCE_RESOURCE_VIA_MEDIA'] ? _0xb9c0(_0xa1a7bc[_0x3c3275(0x3b8)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1dad1c('LOAD_BLOB_MULTIPLE')) : (_0x3e372a(this)[_0x3c3275(0x1cd)]()['parent']()[_0x3c3275(0x3a5)](_0x4571a9)[_0x3c3275(0x42e)](function () {
                                    const _0x2e9e90 = _0x3c3275;
                                    _0x25caec++;
                                    let _0x44ff5c = _0x3e372a(this)[_0x2e9e90(0x3a5)](_0x2e9e90(0x23e)), _0x276776 = _0x3e372a(this)[_0x2e9e90(0x3a5)]('._aagv\x20img'), _0x37776c = _0x276776['attr'](_0x2e9e90(0x1ed)) ? _0x276776[_0x2e9e90(0x21a)](_0x2e9e90(0x1ed))['split']('\x20')[0x0] : _0x276776[_0x2e9e90(0x21a)](_0x2e9e90(0x3a0));
                                    _0x44ff5c && _0x44ff5c['attr'](_0x2e9e90(0x3a0)) && (_0x159e7e = !![]), _0x276776 && _0x37776c && _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY')[_0x2e9e90(0x26b)]('<a\x20datetime=\x22' + _0x4e7515 + _0x2e9e90(0x2ff) + _0xa1a7bc[_0x2e9e90(0x3b8)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x25caec + _0x2e9e90(0x3cb) + _0x37776c + _0x2e9e90(0x20d) + _0x37776c + _0x2e9e90(0x29d) + _0x1dad1c('IMG') + _0x2e9e90(0x430) + _0x25caec + _0x2e9e90(0x1e7));
                                }), _0x159e7e && _0xb9c0(_0xa1a7bc[_0x3c3275(0x3b8)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1dad1c(_0x3c3275(0x261))));
                            else {
                                if (_0x145f91[_0x3c3275(0x362)])
                                    _0xb9c0(_0xa1a7bc[_0x3c3275(0x3b8)], _0x3c3275(0x325), _0x1dad1c(_0x3c3275(0x33b)));
                                else {
                                    _0x25caec++;
                                    let _0x49cc51 = _0x3e372a(this)[_0x3c3275(0x1cd)]()[_0x3c3275(0x1cd)]()[_0x3c3275(0x1cd)]()[_0x3c3275(0x3a5)](_0x3c3275(0x23e)), _0x55da20 = _0x3e372a(this)[_0x3c3275(0x1cd)]()[_0x3c3275(0x1cd)]()['parent']()[_0x3c3275(0x3a5)](_0x3c3275(0x2a7)), _0x2d0caf = _0x55da20[_0x3c3275(0x21a)](_0x3c3275(0x1ed)) ? _0x55da20[_0x3c3275(0x21a)](_0x3c3275(0x1ed))[_0x3c3275(0x318)]('\x20')[0x0] : _0x55da20['attr'](_0x3c3275(0x3a0));
                                    _0x49cc51 && _0x49cc51[_0x3c3275(0x21a)](_0x3c3275(0x3a0)) && _0xb9c0(_0xa1a7bc[_0x3c3275(0x3b8)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1dad1c(_0x3c3275(0x1d3))), _0x55da20 && _0x2d0caf && _0x3e372a(_0x3c3275(0x325))['append'](_0x3c3275(0x28e) + _0x4e7515 + _0x3c3275(0x2ff) + _0xa1a7bc[_0x3c3275(0x3b8)] + _0x3c3275(0x3fe) + _0x25caec + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x2d0caf + _0x3c3275(0x20d) + _0x2d0caf + _0x3c3275(0x29d) + _0x1dad1c(_0x3c3275(0x431)) + _0x3c3275(0x430) + _0x25caec + '\x20-</a>');
                                }
                            }
                        }
                        _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x3c3275(0x42e)](function () {
                            const _0x5d9e04 = _0x3c3275;
                            _0x3e372a(this)[_0x5d9e04(0x2c3)]('<div></div>'), _0x3e372a(this)[_0x5d9e04(0x218)](_0x5d9e04(0x233)), _0x3e372a(this)[_0x5d9e04(0x41f)](_0x5d9e04(0x323) + _0x1dad1c(_0x5d9e04(0x271)) + _0x5d9e04(0x30f) + _0x53e079[_0x5d9e04(0x271)] + _0x5d9e04(0x26f)), _0x3e372a(this)[_0x5d9e04(0x21a)](_0x5d9e04(0x32b)) == _0x5d9e04(0x23e) && _0x3e372a(this)['after']('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1dad1c('THUMBNAIL_INTRO') + _0x5d9e04(0x44b) + _0x53e079['THUMBNAIL'] + '</div>');
                        }), _0x145f91['DIRECT_DOWNLOAD_ALL'] && _0xb9c0(_0xa1a7bc[_0x3c3275(0x3b8)], _0x3c3275(0x325), _0x1dad1c(_0x3c3275(0x33b)))['then'](() => {
                            let _0x4a17ad = setInterval(() => {
                                const _0x736d5c = a0_0x2a9c;
                                _0x3e372a(_0x736d5c(0x242))[_0x736d5c(0x25e)] > 0x0 && (clearInterval(_0x4a17ad), _0x3e372a(_0x736d5c(0x242))[_0x736d5c(0x42e)](function () {
                                    const _0x38e80d = _0x736d5c;
                                    _0x3e372a(this)[_0x38e80d(0x24a)](_0x38e80d(0x41b));
                                }), _0x3e372a(_0x736d5c(0x231))[_0x736d5c(0x42a)]());
                            }, 0xfa);
                        });
                    });
                    var _0x56d76e = _0x3e372a(this)[_0x3ea0d6(0x3a5)](_0x3ea0d6(0x415))['first']()[_0x3ea0d6(0x1f9)]() || _0x3e372a(this)[_0x3ea0d6(0x3a5)](_0x3ea0d6(0x264))[_0x3ea0d6(0x1c4)](function () {
                        return _0x3e372a(this)?.['text']()?.['length'] > 0x0;
                    })[_0x3ea0d6(0x3ee)]()[_0x3ea0d6(0x1f9)]();
                    _0x3e372a(this)[_0x3ea0d6(0x21a)](_0x3ea0d6(0x257), _0x3ea0d6(0x245)), _0x3e372a(this)[_0x3ea0d6(0x21a)](_0x3ea0d6(0x435), _0x56d76e);
                }
            });
        }
        function _0x414a56(_0x3319c4) {
            const _0x5dfb83 = _0x78f617;
            var _0x2a3d63 = _0x3319c4['shortcode_media'] ?? _0x3319c4;
            return _0x2a3d63['owner'] == null && _0x2a3d63[_0x5dfb83(0x3a4)] != null && (_0x2a3d63[_0x5dfb83(0x385)] = _0x2a3d63[_0x5dfb83(0x3a4)]), _0x2a3d63['owner'] == null && (_0x398e4a('carousel_media:', 'undefined\x20username'), alert(_0x5dfb83(0x22f))), _0x2a3d63;
        }
        async function _0xb9c0(_0x38c746, _0x204007, _0x23ca23) {
            const _0x2655c2 = _0x78f617;
            try {
                _0x3e372a(_0x204007 + '\x20a')[_0x2655c2(0x42a)](), _0x3e372a(_0x204007)[_0x2655c2(0x26b)](_0x2655c2(0x1bc) + _0x23ca23 + '</p>');
                let _0x327be1 = await _0x3031fe(_0x38c746), _0xb63932 = _0x414a56(_0x327be1['data']);
                if (_0x327be1[_0x2655c2(0x250)] === _0x2655c2(0x35d)) {
                    let _0x125992 = 0x1;
                    _0xb63932[_0x2655c2(0x248)] == _0x2655c2(0x3bf) && _0xb63932['video_url'] && (_0x3e372a(_0x204007)[_0x2655c2(0x26b)](_0x2655c2(0x2c8) + _0xb63932['id'] + '\x22\x20datetime=\x22' + _0xb63932[_0x2655c2(0x428)] + _0x2655c2(0x230) + _0xb63932[_0x2655c2(0x294)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0xb63932[_0x2655c2(0x385)][_0x2655c2(0x2e9)] + _0x2655c2(0x309) + _0x125992 + _0x2655c2(0x3cb) + _0xb63932[_0x2655c2(0x224)] + _0x2655c2(0x20d) + _0xb63932['display_resources'][0x1][_0x2655c2(0x3a0)] + _0x2655c2(0x31b) + _0x1dad1c(_0x2655c2(0x31e)) + _0x2655c2(0x430) + _0x125992 + _0x2655c2(0x1e7)), _0x125992++);
                    _0xb63932[_0x2655c2(0x248)] == 'GraphImage' && (_0x3e372a(_0x204007)[_0x2655c2(0x26b)](_0x2655c2(0x2c8) + _0xb63932['id'] + '\x22\x20datetime=\x22' + _0xb63932['taken_at_timestamp'] + _0x2655c2(0x230) + _0xb63932[_0x2655c2(0x294)] + _0x2655c2(0x1be) + _0xb63932[_0x2655c2(0x385)]['username'] + _0x2655c2(0x309) + _0x125992 + _0x2655c2(0x3cb) + _0xb63932[_0x2655c2(0x2ae)][_0xb63932[_0x2655c2(0x2ae)]['length'] - 0x1]['src'] + _0x2655c2(0x20d) + _0xb63932['display_resources'][0x1][_0x2655c2(0x3a0)] + _0x2655c2(0x29d) + _0x1dad1c(_0x2655c2(0x431)) + _0x2655c2(0x430) + _0x125992 + _0x2655c2(0x1e7)), _0x125992++);
                    if (_0xb63932[_0x2655c2(0x248)] == 'GraphSidecar' && _0xb63932[_0x2655c2(0x38a)])
                        for (let _0x27f5f1 of _0xb63932[_0x2655c2(0x38a)]['edges']) {
                            _0x27f5f1[_0x2655c2(0x2e8)][_0x2655c2(0x248)] == _0x2655c2(0x3bf) && _0x3e372a(_0x204007)[_0x2655c2(0x26b)]('<a\x20media-id=\x22' + _0x27f5f1['node']['id'] + _0x2655c2(0x330) + _0xb63932[_0x2655c2(0x428)] + _0x2655c2(0x230) + _0xb63932['shortcode'] + _0x2655c2(0x2b2) + _0xb63932[_0x2655c2(0x385)]['username'] + _0x2655c2(0x309) + _0x125992 + _0x2655c2(0x3cb) + _0x27f5f1[_0x2655c2(0x2e8)]['video_url'] + _0x2655c2(0x20d) + _0x27f5f1[_0x2655c2(0x2e8)][_0x2655c2(0x2ae)][0x1]['src'] + _0x2655c2(0x1b9) + _0x1dad1c(_0x2655c2(0x31e)) + _0x2655c2(0x430) + _0x125992 + '\x20-</a>'), _0x27f5f1[_0x2655c2(0x2e8)][_0x2655c2(0x248)] == _0x2655c2(0x1d6) && _0x3e372a(_0x204007)['append'](_0x2655c2(0x2c8) + _0x27f5f1['node']['id'] + '\x22\x20datetime=\x22' + _0xb63932[_0x2655c2(0x428)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0xb63932['shortcode'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0xb63932['owner'][_0x2655c2(0x2e9)] + '\x22\x20data-globalIndex=\x22' + _0x125992 + _0x2655c2(0x3cb) + _0x27f5f1[_0x2655c2(0x2e8)][_0x2655c2(0x2ae)][_0x27f5f1['node'][_0x2655c2(0x2ae)][_0x2655c2(0x25e)] - 0x1][_0x2655c2(0x3a0)] + _0x2655c2(0x20d) + _0x27f5f1[_0x2655c2(0x2e8)][_0x2655c2(0x2ae)][0x1][_0x2655c2(0x3a0)] + _0x2655c2(0x29d) + _0x1dad1c('IMG') + '</span>\x20' + _0x125992 + _0x2655c2(0x1e7)), _0x125992++;
                        }
                } else {
                    if (_0xb63932[_0x2655c2(0x351)])
                        _0x398e4a(_0x2655c2(0x351)), _0xb63932[_0x2655c2(0x351)][_0x2655c2(0x344)]((_0x3bf6a1, _0x137679) => {
                            const _0x1213d4 = _0x2655c2;
                            let _0x1cc02f = _0x137679 + 0x1;
                            _0x3bf6a1[_0x1213d4(0x386)] == null ? (_0x3bf6a1[_0x1213d4(0x34c)][_0x1213d4(0x365)][_0x1213d4(0x3f6)](function (_0x39cac5, _0x3f347e) {
                                const _0x41aaae = _0x1213d4;
                                let _0xae810c = new URL(_0x39cac5[_0x41aaae(0x387)])[_0x41aaae(0x28c)]['get']('stp'), _0x2645f5 = new URL(_0x3f347e['url'])[_0x41aaae(0x28c)][_0x41aaae(0x3f4)](_0x41aaae(0x44a));
                                if (_0xae810c && _0x2645f5) {
                                    if (_0xae810c[_0x41aaae(0x25e)] > _0x2645f5['length'])
                                        return 0x1;
                                    if (_0xae810c['length'] < _0x2645f5[_0x41aaae(0x25e)])
                                        return -0x1;
                                } else {
                                    if (_0x39cac5[_0x41aaae(0x445)] < _0x3f347e[_0x41aaae(0x445)])
                                        return 0x1;
                                    if (_0x39cac5[_0x41aaae(0x445)] > _0x3f347e[_0x41aaae(0x445)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x3e372a(_0x204007)[_0x1213d4(0x26b)](_0x1213d4(0x2c8) + _0x3bf6a1['pk'] + _0x1213d4(0x330) + _0x3bf6a1[_0x1213d4(0x22c)] + _0x1213d4(0x230) + _0xb63932[_0x1213d4(0x31d)] + _0x1213d4(0x1be) + _0xb63932[_0x1213d4(0x385)][_0x1213d4(0x2e9)] + '\x22\x20data-globalIndex=\x22' + _0x1cc02f + _0x1213d4(0x3cb) + _0x3bf6a1['image_versions2'][_0x1213d4(0x365)][0x0][_0x1213d4(0x387)] + _0x1213d4(0x20d) + _0x3bf6a1[_0x1213d4(0x34c)][_0x1213d4(0x365)][0x0]['url'] + _0x1213d4(0x29d) + _0x1dad1c(_0x1213d4(0x431)) + '</span>\x20' + _0x1cc02f + _0x1213d4(0x1e7))) : _0x3e372a(_0x204007)[_0x1213d4(0x26b)](_0x1213d4(0x2c8) + _0x3bf6a1['pk'] + '\x22\x20datetime=\x22' + _0x3bf6a1['taken_at'] + _0x1213d4(0x230) + _0xb63932[_0x1213d4(0x31d)] + _0x1213d4(0x2b2) + _0xb63932[_0x1213d4(0x385)][_0x1213d4(0x2e9)] + _0x1213d4(0x309) + _0x1cc02f + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x3bf6a1[_0x1213d4(0x386)][0x0]['url'] + _0x1213d4(0x20d) + _0x3bf6a1[_0x1213d4(0x34c)]['candidates'][0x0][_0x1213d4(0x387)] + _0x1213d4(0x31b) + _0x1dad1c(_0x1213d4(0x31e)) + _0x1213d4(0x430) + _0x1cc02f + _0x1213d4(0x1e7));
                        });
                    else {
                        let _0x44f509 = 0x1;
                        _0xb63932[_0x2655c2(0x386)] == null ? (_0xb63932[_0x2655c2(0x34c)][_0x2655c2(0x365)]['sort'](function (_0x20308e, _0x3bfd77) {
                            const _0x48bf01 = _0x2655c2;
                            let _0x221138 = new URL(_0x20308e[_0x48bf01(0x387)])[_0x48bf01(0x28c)][_0x48bf01(0x3f4)](_0x48bf01(0x44a)), _0x1c8041 = new URL(_0x3bfd77[_0x48bf01(0x387)])[_0x48bf01(0x28c)][_0x48bf01(0x3f4)](_0x48bf01(0x44a));
                            if (_0x221138 && _0x1c8041) {
                                if (_0x221138[_0x48bf01(0x25e)] > _0x1c8041[_0x48bf01(0x25e)])
                                    return 0x1;
                                if (_0x221138[_0x48bf01(0x25e)] < _0x1c8041['length'])
                                    return -0x1;
                            } else {
                                if (_0x20308e[_0x48bf01(0x445)] < _0x3bfd77[_0x48bf01(0x445)])
                                    return 0x1;
                                if (_0x20308e[_0x48bf01(0x445)] > _0x3bfd77[_0x48bf01(0x445)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x3e372a(_0x204007)['append'](_0x2655c2(0x2c8) + _0xb63932['pk'] + _0x2655c2(0x330) + _0xb63932[_0x2655c2(0x22c)] + _0x2655c2(0x230) + _0xb63932[_0x2655c2(0x31d)] + _0x2655c2(0x1be) + _0xb63932[_0x2655c2(0x385)][_0x2655c2(0x2e9)] + _0x2655c2(0x309) + _0x44f509 + _0x2655c2(0x3cb) + _0xb63932[_0x2655c2(0x34c)][_0x2655c2(0x365)][0x0][_0x2655c2(0x387)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xb63932[_0x2655c2(0x34c)][_0x2655c2(0x365)][0x0]['url'] + _0x2655c2(0x29d) + _0x1dad1c(_0x2655c2(0x431)) + '</span>\x20' + _0x44f509 + '\x20-</a>')) : _0x3e372a(_0x204007)[_0x2655c2(0x26b)](_0x2655c2(0x2c8) + _0xb63932['pk'] + '\x22\x20datetime=\x22' + _0xb63932[_0x2655c2(0x22c)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0xb63932[_0x2655c2(0x31d)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0xb63932[_0x2655c2(0x385)][_0x2655c2(0x2e9)] + '\x22\x20data-globalIndex=\x22' + _0x44f509 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0xb63932[_0x2655c2(0x386)][0x0][_0x2655c2(0x387)] + _0x2655c2(0x20d) + _0xb63932[_0x2655c2(0x34c)]['candidates'][0x0]['url'] + _0x2655c2(0x31b) + _0x1dad1c(_0x2655c2(0x31e)) + '</span>\x20' + _0x44f509 + _0x2655c2(0x1e7));
                    }
                }
                _0x3e372a('#_SNLOAD')['remove'](), _0x3e372a(_0x2655c2(0x242))[_0x2655c2(0x42e)](function () {
                    const _0x440ee3 = _0x2655c2;
                    _0x3e372a(this)['wrap'](_0x440ee3(0x1c7)), _0x3e372a(this)['before'](_0x440ee3(0x233)), _0x3e372a(this)[_0x440ee3(0x41f)](_0x440ee3(0x323) + _0x1dad1c(_0x440ee3(0x271)) + _0x440ee3(0x30f) + _0x53e079['NEW_TAB'] + _0x440ee3(0x26f)), _0x3e372a(this)[_0x440ee3(0x21a)](_0x440ee3(0x32b)) == _0x440ee3(0x23e) && _0x3e372a(this)[_0x440ee3(0x41f)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1dad1c(_0x440ee3(0x313)) + _0x440ee3(0x44b) + _0x53e079[_0x440ee3(0x338)] + _0x440ee3(0x26f));
                });
            } catch (_0x538610) {
                _0x398e4a(_0x2655c2(0x36b), _0x538610);
            }
            ;
        }
        function _0x2b4833(_0x463fd9) {
            const _0x1ffb21 = _0x78f617;
            var _0x3e156c = 0x0, _0x2b839e = _0x463fd9[_0x1ffb21(0x3a5)](_0x1ffb21(0x26c));
            return (_0x2b839e == null || !_0x2b839e[_0x1ffb21(0x256)](_0x1ffb21(0x289))) && (_0x2b839e = _0x463fd9[_0x1ffb21(0x3a5)](_0x1ffb21(0x380))['eq'](0x0)[_0x1ffb21(0x3e0)](_0x1ffb21(0x236))), _0x2b839e['filter'](_0x1ffb21(0x366))[_0x1ffb21(0x42e)](function (_0x4cb77e) {
                _0x3e372a(this)['hasClass']('_acnf') && (_0x3e156c = _0x4cb77e);
            }), _0x3e156c;
        }
        async function _0x3d8cb2(_0xe7920a) {
            const _0x118352 = _0x78f617;
            if (_0xe7920a) {
                _0x2e6ed9(!![]);
                let _0x422a0d = new Date()['getTime'](), _0x342955 = Math['floor'](_0x422a0d / 0x3e8), _0x318d7b = location[_0x118352(0x21f)][_0x118352(0x3db)](/(reels|tagged)\/$/ig, '')[_0x118352(0x318)]('/')[_0x118352(0x1c4)](_0x52c5f5 => _0x52c5f5[_0x118352(0x25e)] > 0x0)['at'](-0x1), _0x2ab6bb = await _0xf927fb(_0x318d7b);
                try {
                    let _0x3a99e6 = await _0x17c9ee(_0x2ab6bb['user']['pk']);
                    _0x25ad03(_0x3a99e6, _0x318d7b, _0x118352(0x2bd), _0x342955, 'jpg');
                } catch (_0xf5434c) {
                    _0x25ad03(_0x2ab6bb[_0x118352(0x3a4)][_0x118352(0x35b)], _0x318d7b, 'avatar', _0x342955, 'jpg');
                }
                _0x2e6ed9(![]);
            } else {
                if (!_0x3e372a(_0x118352(0x402))[_0x118352(0x25e)]) {
                    let _0x210017 = setInterval(() => {
                        const _0x4283cf = _0x118352;
                        if (_0x3e372a(_0x4283cf(0x402))[_0x4283cf(0x25e)]) {
                            clearInterval(_0x210017);
                            return;
                        }
                        _0x3e372a(_0x4283cf(0x416))[_0x4283cf(0x1cd)]()['parent']()[_0x4283cf(0x26b)](_0x4283cf(0x2ac) + _0x1dad1c('DW') + _0x4283cf(0x3ea) + _0x53e079['DOWNLOAD'] + _0x4283cf(0x26f)), _0x3e372a(_0x4283cf(0x416))['parent']()[_0x4283cf(0x1cd)]()[_0x4283cf(0x219)](_0x4283cf(0x417), 'relative'), _0x3e372a(_0x4283cf(0x2cd))[_0x4283cf(0x1cd)]()[_0x4283cf(0x1cd)]()['parent']()[_0x4283cf(0x26b)](_0x4283cf(0x2ac) + _0x1dad1c('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x53e079[_0x4283cf(0x3b7)] + '</div>'), _0x3e372a(_0x4283cf(0x2cd))[_0x4283cf(0x1cd)]()[_0x4283cf(0x1cd)]()[_0x4283cf(0x1cd)]()[_0x4283cf(0x219)](_0x4283cf(0x417), _0x4283cf(0x30a));
                    }, 0x96);
                }
            }
        }
        async function _0xfa6da8(_0x50de3a, _0x57925a, _0x2e9477) {
            const _0x514f3d = _0x78f617;
            if (_0x50de3a) {
                _0x2e6ed9(!![]);
                let _0x4e2302 = location[_0x514f3d(0x2ed)]['split']('?')['at'](0x0)[_0x514f3d(0x318)]('instagram.com/reels/')['at'](-0x1)[_0x514f3d(0x3db)]('/', ''), _0x93bbf7 = await _0x3031fe(_0x4e2302), _0x2c910c = _0x414a56(_0x93bbf7[_0x514f3d(0x2ce)]), _0x30efe3 = new Date()[_0x514f3d(0x1fa)]();
                _0x145f91['RENAME_PUBLISH_DATE'] && (_0x93bbf7[_0x514f3d(0x250)] === _0x514f3d(0x35d) ? _0x30efe3 = _0x2c910c[_0x514f3d(0x20e)]['taken_at_timestamp'] : _0x30efe3 = _0x2c910c[_0x514f3d(0x22c)]);
                if (_0x93bbf7[_0x514f3d(0x250)] === 'query_hash') {
                    if (_0x57925a && _0x2c910c['shortcode_media']['is_video']) {
                        if (_0x2e9477)
                            _0x3113c2(_0x2c910c[_0x514f3d(0x20e)][_0x514f3d(0x224)]);
                        else {
                            let _0x205d02 = 'mp4';
                            _0x25ad03(_0x2c910c['shortcode_media']['video_url'], _0x2c910c['shortcode_media']['owner']['username'], 'reels', _0x30efe3, _0x205d02, _0x4e2302);
                        }
                    } else {
                        if (_0x2e9477)
                            _0x3113c2(_0x2c910c[_0x514f3d(0x20e)][_0x514f3d(0x2ae)]['at'](-0x1)[_0x514f3d(0x3a0)]);
                        else {
                            let _0x531914 = 'jpg';
                            _0x25ad03(_0x2c910c[_0x514f3d(0x20e)][_0x514f3d(0x2ae)]['at'](-0x1)['src'], _0x2c910c[_0x514f3d(0x20e)][_0x514f3d(0x385)][_0x514f3d(0x2e9)], 'reels', _0x30efe3, _0x531914, _0x4e2302);
                        }
                    }
                } else {
                    if (_0x57925a && _0x2c910c[_0x514f3d(0x386)] != null) {
                        if (_0x2e9477)
                            _0x3113c2(_0x2c910c[_0x514f3d(0x386)][0x0][_0x514f3d(0x387)]);
                        else {
                            let _0x355af0 = _0x514f3d(0x2dc);
                            _0x25ad03(_0x2c910c[_0x514f3d(0x386)][0x0][_0x514f3d(0x387)], _0x2c910c[_0x514f3d(0x385)][_0x514f3d(0x2e9)], _0x514f3d(0x1ba), _0x30efe3, _0x355af0, _0x4e2302);
                        }
                    } else {
                        if (_0x2e9477)
                            _0x3113c2(_0x2c910c[_0x514f3d(0x34c)][_0x514f3d(0x365)][0x0][_0x514f3d(0x387)]);
                        else {
                            let _0x490eb3 = 'jpg';
                            _0x25ad03(_0x2c910c['image_versions2'][_0x514f3d(0x365)][0x0][_0x514f3d(0x387)], _0x2c910c[_0x514f3d(0x385)][_0x514f3d(0x2e9)], _0x514f3d(0x1ba), _0x30efe3, _0x490eb3, _0x4e2302);
                        }
                    }
                }
                _0x2e6ed9(![]);
            } else
                var _0x31435d = setInterval(() => {
                    const _0x3740a7 = _0x514f3d;
                    _0x3e372a(_0x3740a7(0x270))[_0x3740a7(0x25e)] > 0x0 && (clearInterval(_0x31435d), _0x145f91[_0x3740a7(0x425)] && (_0x3e372a(_0x3740a7(0x3e7))['remove'](), _0x3e372a(_0x3740a7(0x2f1))[_0x3740a7(0x26b)](_0x3740a7(0x375)), _0x3e372a('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x3740a7(0x26b)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x3e372a(_0x3740a7(0x22d))['append'](_0x3740a7(0x441)), _0x3e372a(_0x3740a7(0x3b5))['on'](_0x3740a7(0x41b), function () {
                        const _0x3022c6 = _0x3740a7;
                        _0x3e372a(_0x3022c6(0x2c1))[0x0][_0x3022c6(0x29c)]({
                            'top': -0x1e,
                            'behavior': 'smooth'
                        });
                    }), _0x3e372a(_0x3740a7(0x2d2))['on'](_0x3740a7(0x41b), function () {
                        const _0x252dcc = _0x3740a7;
                        _0x3e372a(_0x252dcc(0x2c1))[0x0][_0x252dcc(0x29c)]({
                            'top': 0x1e,
                            'behavior': _0x252dcc(0x2e0)
                        });
                    })), _0x3e372a(_0x3740a7(0x23f))['children'](_0x3740a7(0x236))[_0x3740a7(0x42e)](function () {
                        const _0x2a79d7 = _0x3740a7;
                        if (_0x3e372a(this)[_0x2a79d7(0x3e0)]()[_0x2a79d7(0x25e)] > 0x0) {
                            if (!_0x3e372a(this)['children']()[_0x2a79d7(0x3a5)](_0x2a79d7(0x30d))[_0x2a79d7(0x25e)]) {
                                var _0xf1f605 = _0x3e372a(this);
                                _0x3e372a(this)[_0x2a79d7(0x3e0)]()[_0x2a79d7(0x219)](_0x2a79d7(0x417), 'relative'), _0x3e372a(this)[_0x2a79d7(0x3e0)]()[_0x2a79d7(0x26b)](_0x2a79d7(0x2ac) + _0x1dad1c('DW') + _0x2a79d7(0x339) + _0x53e079[_0x2a79d7(0x3b7)] + '</div>'), _0x3e372a(this)[_0x2a79d7(0x3e0)]()[_0x2a79d7(0x26b)](_0x2a79d7(0x323) + _0x1dad1c('NEW_TAB') + _0x2a79d7(0x311) + _0x53e079['NEW_TAB'] + _0x2a79d7(0x26f)), _0x3e372a(this)['children']()[_0x2a79d7(0x26b)](_0x2a79d7(0x3f2) + _0x1dad1c('THUMBNAIL_INTRO') + _0x2a79d7(0x2b6) + _0x53e079[_0x2a79d7(0x338)] + _0x2a79d7(0x26f));
                                _0x145f91[_0x2a79d7(0x374)] && _0x3e372a(this)[_0x2a79d7(0x3a5)]('video')[_0x2a79d7(0x42e)](function () {
                                    const _0x37723f = _0x2a79d7;
                                    _0x3e372a(this)['on'](_0x37723f(0x222), function () {
                                        const _0x2c4766 = _0x37723f;
                                        if (!_0x3e372a(this)[_0x2c4766(0x2ce)]('loop')) {
                                            let _0x37f162 = _0x3e372a(this)[_0x2c4766(0x42f)]()[_0x2c4766(0x3a5)](_0x2c4766(0x399))[_0x2c4766(0x33d)]('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x37f162['length'] > 0x0 ? (_0x3e372a(this)['attr'](_0x2c4766(0x355), !![]), _0x37f162['trigger']('click'), _0x398e4a('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()')) : (_0x3e372a(this)['attr']('data-loop', !![]), _0x3e372a(this)[_0x2c4766(0x1cd)]()[_0x2c4766(0x3a5)]('.xpgaw4o')[_0x2c4766(0x39f)]('style'), this[_0x2c4766(0x1f7)](), _0x398e4a(_0x2c4766(0x304)));
                                        }
                                    });
                                });
                                _0x145f91['HTML5_VIDEO_CONTROL'] && _0x3e372a(this)[_0x2a79d7(0x3a5)](_0x2a79d7(0x23e))[_0x2a79d7(0x42e)](function () {
                                    const _0x99a36e = _0x2a79d7;
                                    if (!_0x3e372a(this)[_0x99a36e(0x2ce)](_0x99a36e(0x1d5))) {
                                        let _0x45aee0 = _0x3e372a(this);
                                        _0x398e4a('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x145f91[_0x99a36e(0x420)] && (this[_0x99a36e(0x378)] = _0xa1a7bc[_0x99a36e(0x34b)], _0x3e372a(this)['on'](_0x99a36e(0x2bf), function () {
                                            const _0x2cba4c = _0x99a36e;
                                            this[_0x2cba4c(0x378)] = _0xa1a7bc['videoVolume'];
                                        })), _0x3e372a(this)['on'](_0x99a36e(0x379), function (_0x3d89ef) {
                                            const _0x57f4bf = _0x99a36e;
                                            _0x3d89ef[_0x57f4bf(0x25c)](), _0x45aee0['css']('z-index', '-1'), _0x45aee0[_0x57f4bf(0x39f)](_0x57f4bf(0x1d5));
                                        }), _0x3e372a(this)[_0x99a36e(0x1cd)]()[_0x99a36e(0x3a5)](_0x99a36e(0x43a))['filter'](function () {
                                            const _0x100237 = _0x99a36e;
                                            return _0x3e372a(this)[_0x100237(0x1cd)]('div[role=\x22presentation\x22]')[_0x100237(0x25e)] > 0x0 && _0x3e372a(this)['css'](_0x100237(0x293)) === _0x100237(0x41a) && _0x3e372a(this)[_0x100237(0x21a)]('style') != null;
                                        })['first']()['on'](_0x99a36e(0x379), function (_0x2eaf04) {
                                            const _0xe8e2bc = _0x99a36e;
                                            _0x2eaf04[_0xe8e2bc(0x25c)](), _0x45aee0[_0xe8e2bc(0x219)](_0xe8e2bc(0x213), '2'), _0x45aee0[_0xe8e2bc(0x21a)](_0xe8e2bc(0x1d5), !![]);
                                        }), _0x3e372a(this)['on'](_0x99a36e(0x249), function () {
                                            const _0x6e5f16 = _0x99a36e;
                                            let _0x46882c = _0x3e372a(this)[_0x6e5f16(0x1cd)]()[_0x6e5f16(0x3a5)](_0x6e5f16(0x3ab))[_0x6e5f16(0x3a5)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x6e5f16(0x1c4)](function (_0x4eaae1) {
                                                const _0x36237d = _0x6e5f16;
                                                return _0x3e372a(this)[_0x36237d(0x445)]() <= 0x40 && _0x3e372a(this)[_0x36237d(0x448)]() <= 0x40 && _0x3e372a(this)['find'](_0x36237d(0x2a8))[_0x36237d(0x25e)] > 0x0;
                                            });
                                            var _0x5f2c51 = _0x46882c[_0x6e5f16(0x3a5)](_0x6e5f16(0x291))['length'] === 0x0;
                                            this[_0x6e5f16(0x202)] != _0x5f2c51 && (this['volume'] = _0xa1a7bc[_0x6e5f16(0x34b)], _0x46882c?.['trigger'](_0x6e5f16(0x41b))), _0x3e372a(this)[_0x6e5f16(0x21a)]('data-completed') && (_0xa1a7bc[_0x6e5f16(0x34b)] = this[_0x6e5f16(0x378)], GM_setValue('G_VIDEO_VOLUME', this['volume'])), this[_0x6e5f16(0x378)] == _0xa1a7bc[_0x6e5f16(0x34b)] && _0x3e372a(this)[_0x6e5f16(0x21a)](_0x6e5f16(0x38e), !![]);
                                        }), _0x3e372a(this)[_0x99a36e(0x219)]('position', _0x99a36e(0x361)), _0x3e372a(this)[_0x99a36e(0x219)](_0x99a36e(0x213), '2'), _0x3e372a(this)['attr'](_0x99a36e(0x3bc), !![]), _0x3e372a(this)['attr'](_0x99a36e(0x1d5), !![]);
                                    }
                                });
                                var _0x45b2a4 = _0xf1f605[_0x2a79d7(0x3a5)](_0x2a79d7(0x23e)), _0x203f6b = _0x3e372a(this)[_0x2a79d7(0x3a5)](_0x2a79d7(0x3f8))[_0x2a79d7(0x3ee)]();
                                _0x1e81ff(_0x45b2a4, _0x203f6b, _0x2a79d7(0x314));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x34788c() {
            const _0x505c6d = _0x78f617;
            _0x2e6ed9(!![]);
            let _0x33720b = new Date()[_0x505c6d(0x1fa)](), _0x32ffa8 = Math[_0x505c6d(0x39d)](_0x33720b / 0x3e8), _0x3ac9e1 = _0x3e372a('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()['text']() || location[_0x505c6d(0x21f)][_0x505c6d(0x318)]('/')[_0x505c6d(0x1c4)](_0x5c65bd => _0x5c65bd[_0x505c6d(0x25e)] > 0x0)['at'](0x1), _0x2e3c93 = await _0xf927fb(_0x3ac9e1), _0x346235 = _0x2e3c93['user']['pk'], _0x394116 = await _0x2d0ba0(_0x346235), _0x15d63b = 0x0;
            _0x472082(_0x15d63b, _0x394116[_0x505c6d(0x2ce)][_0x505c6d(0x1c5)][0x0]['items'][_0x505c6d(0x25e)]), _0x394116[_0x505c6d(0x2ce)][_0x505c6d(0x1c5)][0x0][_0x505c6d(0x3f0)]['forEach']((_0x3e6e26, _0x43849a) => {
                setTimeout(() => {
                    const _0x1b4201 = a0_0x2a9c;
                    _0x145f91[_0x1b4201(0x237)] && (_0x32ffa8 = _0x3e6e26['taken_at_timestamp']), _0x3e6e26['display_resources'][_0x1b4201(0x3f6)](function (_0x39ef1a, _0x4e6269) {
                        const _0x4cb48a = _0x1b4201;
                        if (_0x39ef1a[_0x4cb48a(0x235)] < _0x4e6269[_0x4cb48a(0x235)])
                            return 0x1;
                        if (_0x39ef1a[_0x4cb48a(0x235)] > _0x4e6269[_0x4cb48a(0x235)])
                            return -0x1;
                        return 0x0;
                    }), _0x3e6e26[_0x1b4201(0x2b1)] ? _0x25ad03(_0x3e6e26[_0x1b4201(0x37b)][0x0][_0x1b4201(0x3a0)], _0x3ac9e1, _0x1b4201(0x3a8), _0x32ffa8, _0x1b4201(0x2dc), _0x3e6e26['id'])[_0x1b4201(0x287)](() => {
                        const _0x33721b = _0x1b4201;
                        _0x472082(++_0x15d63b, _0x394116['data'][_0x33721b(0x1c5)][0x0]['items'][_0x33721b(0x25e)]);
                    }) : _0x25ad03(_0x3e6e26[_0x1b4201(0x2ae)][0x0][_0x1b4201(0x3a0)], _0x3ac9e1, _0x1b4201(0x3a8), _0x32ffa8, 'jpg', _0x3e6e26['id'])[_0x1b4201(0x287)](() => {
                        const _0x498dbd = _0x1b4201;
                        _0x472082(++_0x15d63b, _0x394116[_0x498dbd(0x2ce)]['reels_media'][0x0]['items']['length']);
                    });
                }, 0x64 * _0x43849a);
            });
        }
        async function _0x5bf160(_0x4d74aa, _0x300b1c, _0x402e97) {
            const _0xafa095 = _0x78f617;
            var _0x3deb98 = _0x3e372a(_0xafa095(0x358))['first']()['text']() || location['pathname'][_0xafa095(0x318)]('/')['filter'](_0xfa9ea0 => _0xfa9ea0['length'] > 0x0)['at'](0x1);
            if (_0x4d74aa) {
                let _0x3cbab9 = new Date()[_0xafa095(0x1fa)](), _0x2d055f = Math['floor'](_0x3cbab9 / 0x3e8);
                _0x2e6ed9(!![]);
                if (_0x145f91['FORCE_RESOURCE_VIA_MEDIA'] && !_0xa1a7bc[_0xafa095(0x2a6)]) {
                    let _0x36064b = null, _0x3c5e47 = await _0xf927fb(_0x3deb98), _0x49d851 = _0x3c5e47['user']['pk'], _0x6e35d8 = await _0x2d0ba0(_0x49d851), _0x5d22ad = location[_0xafa095(0x21f)][_0xafa095(0x318)]('/')[_0xafa095(0x1c4)](_0x2f7ec5 => _0x2f7ec5[_0xafa095(0x25e)] > 0x0 && _0x2f7ec5[_0xafa095(0x2ee)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x6e35d8[_0xafa095(0x2ce)][_0xafa095(0x1c5)][0x0][_0xafa095(0x3f0)]['forEach'](_0x1d2a3a => {
                        _0x1d2a3a['id'] == _0x5d22ad && (_0x36064b = _0x1d2a3a['id']);
                    });
                    if (_0x36064b == null) {
                        let _0x3a0ba4 = _0x5a7be8(_0x3deb98);
                        _0x3a0ba4[_0xafa095(0x42e)](function (_0xe11d4b) {
                            const _0x12bf76 = _0xafa095;
                            _0x3e372a(this)[_0x12bf76(0x3e0)]()[_0x12bf76(0x25e)] > 0x0 && (_0x36064b = _0x6e35d8[_0x12bf76(0x2ce)]['reels_media'][0x0][_0x12bf76(0x3f0)][_0xe11d4b]['id']);
                        });
                    }
                    _0x36064b == null && (_0x3e372a(_0xafa095(0x437))[_0xafa095(0x42e)](function (_0x1273c0) {
                        const _0x2a4ed9 = _0xafa095;
                        _0x3e372a(this)[_0x2a4ed9(0x256)]('x1lix1fw') && (_0x3e372a(this)[_0x2a4ed9(0x3e0)]()[_0x2a4ed9(0x25e)] > 0x0 && (_0x36064b = _0x6e35d8[_0x2a4ed9(0x2ce)][_0x2a4ed9(0x1c5)][0x0][_0x2a4ed9(0x3f0)][_0x1273c0]['id']));
                    }), _0x3e372a(_0xafa095(0x2b5))[_0xafa095(0x42e)](function (_0x3468ba) {
                        const _0x3cfa8d = _0xafa095;
                        _0x3e372a(this)[_0x3cfa8d(0x3e0)]()[_0x3cfa8d(0x256)](_0x3cfa8d(0x334)) && (_0x36064b = _0x6e35d8[_0x3cfa8d(0x2ce)][_0x3cfa8d(0x1c5)][0x0][_0x3cfa8d(0x3f0)][_0x3468ba]['id']);
                    }));
                    _0x36064b == null && (_0x36064b = location[_0xafa095(0x21f)][_0xafa095(0x318)]('/')[_0xafa095(0x1c4)](_0x5142de => _0x5142de[_0xafa095(0x25e)] > 0x0 && _0x5142de[_0xafa095(0x2ee)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0xb67538 = await _0x21cba5(_0x36064b);
                    _0x145f91[_0xafa095(0x237)] && (_0x2d055f = _0xb67538['items'][0x0][_0xafa095(0x22c)]);
                    _0xb67538[_0xafa095(0x210)] === 'ok' ? _0xb67538[_0xafa095(0x3f0)][0x0][_0xafa095(0x386)] ? _0x402e97 ? _0x3113c2(_0xb67538[_0xafa095(0x3f0)][0x0][_0xafa095(0x386)][0x0]['url']) : _0x25ad03(_0xb67538[_0xafa095(0x3f0)][0x0][_0xafa095(0x386)][0x0][_0xafa095(0x387)], _0x3deb98, _0xafa095(0x3a8), _0x2d055f, _0xafa095(0x2dc), _0x36064b) : _0x402e97 ? _0x3113c2(_0xb67538[_0xafa095(0x3f0)][0x0][_0xafa095(0x34c)][_0xafa095(0x365)][0x0][_0xafa095(0x387)]) : _0x25ad03(_0xb67538[_0xafa095(0x3f0)][0x0][_0xafa095(0x34c)][_0xafa095(0x365)][0x0][_0xafa095(0x387)], _0x3deb98, _0xafa095(0x3a8), _0x2d055f, 'jpg', _0x36064b) : (_0x145f91['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0xa1a7bc[_0xafa095(0x2a6)] = !![], _0x5bf160(_0x4d74aa, _0x300b1c, _0x402e97)) : alert(_0xafa095(0x21d) + _0xb67538['message']), _0x398e4a(_0xb67538));
                    _0x2e6ed9(![]);
                    return;
                }
                if (_0x3e372a(_0xafa095(0x372))[_0xafa095(0x25e)] > 0x0) {
                    let _0xa1f082 = _0xafa095(0x2dc), _0x4dc23a = '', _0x26de3d = location['pathname']['replace'](/\/$/ig, '')[_0xafa095(0x318)]('/')['at'](-0x1), _0x268d46 = null;
                    if (_0xa1a7bc[_0xafa095(0x3d5)]['stories'][_0x3deb98] && !_0x300b1c) {
                        _0x398e4a(_0xafa095(0x3cc), _0x3deb98), _0xa1a7bc['GL_dataCache'][_0xafa095(0x3a8)][_0x3deb98]['data'][_0xafa095(0x1c5)][0x0][_0xafa095(0x3f0)]['forEach'](_0x3cc954 => {
                            const _0x4c3bc6 = _0xafa095;
                            _0x3cc954['id'] == _0x26de3d && (_0x4dc23a = _0x3cc954[_0x4c3bc6(0x37b)][0x0]['src'], _0x145f91[_0x4c3bc6(0x237)] && (_0x2d055f = _0x3cc954[_0x4c3bc6(0x428)], _0x268d46 = _0x3cc954['id']));
                        });
                        if (_0x4dc23a[_0xafa095(0x25e)] == 0x0) {
                            _0x398e4a(_0xafa095(0x26a), _0x3deb98), _0x5bf160(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x3f117e = await _0xf927fb(_0x3deb98), _0x5d4a4f = _0x3f117e['user']['pk'], _0x5ced6a = await _0x2d0ba0(_0x5d4a4f);
                        _0x5ced6a['data'][_0xafa095(0x1c5)][0x0]['items'][_0xafa095(0x344)](_0xfff73e => {
                            const _0x4b29d5 = _0xafa095;
                            _0xfff73e['id'] == _0x26de3d && (_0x4dc23a = _0xfff73e[_0x4b29d5(0x37b)][0x0][_0x4b29d5(0x3a0)], _0x145f91[_0x4b29d5(0x237)] && (_0x2d055f = _0xfff73e[_0x4b29d5(0x428)], _0x268d46 = _0xfff73e['id']));
                        });
                        if (_0x4dc23a[_0xafa095(0x25e)] == 0x0) {
                            let _0x3a5b72 = _0x5a7be8(_0x3deb98);
                            _0x3a5b72[_0xafa095(0x42e)](function (_0x5ef50c) {
                                const _0xbd2936 = _0xafa095;
                                _0x3e372a(this)['children']()[_0xbd2936(0x25e)] > 0x0 && (_0x4dc23a = _0x5ced6a[_0xbd2936(0x2ce)][_0xbd2936(0x1c5)][0x0][_0xbd2936(0x3f0)][_0x5ef50c][_0xbd2936(0x37b)][0x0][_0xbd2936(0x3a0)], _0x145f91[_0xbd2936(0x237)] && (_0x2d055f = _0x5ced6a[_0xbd2936(0x2ce)][_0xbd2936(0x1c5)][0x0]['items'][_0x5ef50c][_0xbd2936(0x428)], _0x268d46 = _0x5ced6a['data']['reels_media'][0x0]['items'][_0x5ef50c]['id']));
                            }), _0x4dc23a[_0xafa095(0x25e)] == 0x0 && (_0x3e372a(_0xafa095(0x437))[_0xafa095(0x42e)](function (_0x2b5bec) {
                                const _0x50d4d6 = _0xafa095;
                                _0x3e372a(this)[_0x50d4d6(0x256)](_0x50d4d6(0x449)) && (_0x3e372a(this)[_0x50d4d6(0x3e0)]()['length'] > 0x0 && (_0x4dc23a = _0x5ced6a[_0x50d4d6(0x2ce)][_0x50d4d6(0x1c5)][0x0][_0x50d4d6(0x3f0)][_0x2b5bec][_0x50d4d6(0x37b)][0x0][_0x50d4d6(0x3a0)], _0x145f91[_0x50d4d6(0x237)] && (_0x2d055f = _0x5ced6a[_0x50d4d6(0x2ce)][_0x50d4d6(0x1c5)][0x0][_0x50d4d6(0x3f0)][_0x2b5bec][_0x50d4d6(0x428)], _0x268d46 = _0x5ced6a['data'][_0x50d4d6(0x1c5)][0x0]['items'][_0x2b5bec]['id'])));
                            }), _0x3e372a(_0xafa095(0x2b5))['each'](function (_0x2ef1bb) {
                                const _0x1c889a = _0xafa095;
                                _0x3e372a(this)[_0x1c889a(0x3e0)]()[_0x1c889a(0x256)](_0x1c889a(0x334)) && (_0x4dc23a = _0x5ced6a[_0x1c889a(0x2ce)][_0x1c889a(0x1c5)][0x0]['items'][_0x2ef1bb][_0x1c889a(0x37b)][0x0]['src'], _0x145f91['RENAME_PUBLISH_DATE'] && (_0x2d055f = _0x5ced6a[_0x1c889a(0x2ce)]['reels_media'][0x0][_0x1c889a(0x3f0)][_0x2ef1bb]['taken_at_timestamp'], _0x268d46 = _0x5ced6a[_0x1c889a(0x2ce)][_0x1c889a(0x1c5)][0x0][_0x1c889a(0x3f0)][_0x2ef1bb]['id']));
                            }));
                        }
                        _0xa1a7bc[_0xafa095(0x3d5)][_0xafa095(0x3a8)][_0x3deb98] = _0x5ced6a;
                    }
                    _0x4dc23a[_0xafa095(0x25e)] == 0x0 ? alert(_0x1dad1c(_0xafa095(0x1de))) : _0x402e97 ? _0x3113c2(_0x4dc23a) : _0x25ad03(_0x4dc23a, _0x3deb98, _0xafa095(0x3a8), _0x2d055f, _0xa1f082, _0x268d46);
                } else {
                    let _0x343ac5 = _0x3e372a('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0xafa095(0x21a)]('srcset')?.['split'](',')[0x0]?.[_0xafa095(0x318)]('\x20')[0x0], _0x30a024 = _0x343ac5 ? _0x343ac5 : _0x3e372a(_0xafa095(0x2de))['filter'](function () {
                            const _0x3dcc88 = _0xafa095;
                            return _0x3e372a(this)[_0x3dcc88(0x33d)]('a')[_0x3dcc88(0x25e)] === 0x0 && _0x3e372a(this)['width']() === _0x3e372a(this)[_0x3dcc88(0x1cd)]()[_0x3dcc88(0x445)]();
                        })[_0xafa095(0x21a)](_0xafa095(0x3a0));
                    if (!_0x30a024) {
                        let _0x5400b4 = _0x3e372a(_0xafa095(0x3b3));
                        _0x30a024 = _0x5400b4[_0xafa095(0x21a)](_0xafa095(0x1ed)) ? _0x5400b4[_0xafa095(0x21a)]('srcset')?.[_0xafa095(0x318)](',')[0x0]?.[_0xafa095(0x318)]('\x20')[0x0] : _0x5400b4['attr'](_0xafa095(0x3a0));
                    }
                    _0x145f91[_0xafa095(0x237)] && (_0x2d055f = new Date(_0x3e372a(_0xafa095(0x30e))['first']()[_0xafa095(0x21a)]('datetime'))[_0xafa095(0x1fa)]());
                    let _0x14e9b5 = _0x30a024, _0x4f8e2d = _0xafa095(0x331);
                    _0x402e97 ? _0x3113c2(_0x14e9b5) : _0x25ad03(_0x14e9b5, _0x3deb98, 'stories', _0x2d055f, _0x4f8e2d, _0xfd2b2e(_0x14e9b5) ?? '');
                }
                _0xa1a7bc[_0xafa095(0x2a6)] = ![], _0x2e6ed9(![]);
            } else {
                if (!_0x3e372a(_0xafa095(0x2a0))['length']) {
                    _0xa1a7bc[_0xafa095(0x3d5)][_0xafa095(0x3a8)] = {};
                    let _0x1c98e6 = null;
                    _0x3e372a(_0xafa095(0x3b2))[_0xafa095(0x25e)] > 0x0 ? _0x1c98e6 = _0x3e372a(_0xafa095(0x3f7)) : (_0x1c98e6 = _0x3e372a('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x1c98e6[_0xafa095(0x219)]('position', _0xafa095(0x30a)));
                    _0x1c98e6[_0xafa095(0x25e)] === 0x0 && (_0x1c98e6 = _0x3e372a(_0xafa095(0x1e1))[_0xafa095(0x1cd)]()['parent']()[_0xafa095(0x1cd)]()[_0xafa095(0x3a5)](_0xafa095(0x24e)), _0x1c98e6[_0xafa095(0x219)](_0xafa095(0x417), _0xafa095(0x30a)));
                    _0x1c98e6[_0xafa095(0x25e)] === 0x0 && (_0x1c98e6 = _0x3e372a(_0xafa095(0x1e1))['parent']()[_0xafa095(0x1cd)]()[_0xafa095(0x1cd)]()['find']('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x1c98e6[_0xafa095(0x219)](_0xafa095(0x417), _0xafa095(0x30a)));
                    if (_0x1c98e6[_0xafa095(0x25e)] === 0x0) {
                        let _0x5ed6c4 = _0x3e372a(_0xafa095(0x3e9)), _0x50a38d = 0x0;
                        _0x5ed6c4[_0xafa095(0x42e)](function () {
                            const _0x1058f8 = _0xafa095;
                            _0x3e372a(this)['width']() > _0x50a38d && (_0x50a38d = _0x3e372a(this)[_0x1058f8(0x445)](), _0x1c98e6 = _0x3e372a(this)[_0x1058f8(0x3e0)](_0x1058f8(0x236))[_0x1058f8(0x3ee)]());
                        });
                    }
                    if (_0x1c98e6 != null) {
                        _0x1c98e6[_0xafa095(0x3ee)]()[_0xafa095(0x219)]('position', _0xafa095(0x30a)), _0x1c98e6['first']()[_0xafa095(0x26b)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x1dad1c('DW') + _0xafa095(0x24d) + _0x53e079[_0xafa095(0x3b7)] + _0xafa095(0x26f)), _0x1c98e6['first']()[_0xafa095(0x26b)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x1dad1c('NEW_TAB') + _0xafa095(0x3a7) + _0x53e079[_0xafa095(0x271)] + _0xafa095(0x26f));
                        let _0x5c8b07 = _0x5a7be8(_0x3deb98);
                        _0x5c8b07[_0xafa095(0x25e)] > 0x1 && _0x1c98e6['first']()['append'](_0xafa095(0x36c) + _0x1dad1c(_0xafa095(0x247)) + _0xafa095(0x427) + _0x53e079[_0xafa095(0x21e)] + _0xafa095(0x26f)), _0x1c98e6[_0xafa095(0x3a5)](_0xafa095(0x342))['each'](function () {
                            const _0x172672 = _0xafa095;
                            _0x3e372a(this)['on'](_0x172672(0x2ad), function () {
                                const _0x64e0e9 = _0x172672;
                                !_0x3e372a(this)[_0x64e0e9(0x2ce)](_0x64e0e9(0x3f5)) && (_0x1c98e6[_0x64e0e9(0x3a5)](_0x64e0e9(0x335))[_0x64e0e9(0x25e)] === 0x0 ? (_0x3e372a(this)[_0x64e0e9(0x21a)](_0x64e0e9(0x341), !![]), _0x3e372a(_0x64e0e9(0x335))[_0x64e0e9(0x42a)](), _0x398e4a(_0x64e0e9(0x397))) : (_0x3e372a(this)[_0x64e0e9(0x21a)](_0x64e0e9(0x341), !![]), _0x398e4a(_0x64e0e9(0x27a))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x1cc9d6(_0x906a7d, _0xe73ff0) {
            const _0x53dc36 = _0x78f617;
            if (_0x906a7d) {
                let _0x5dbf6b = new Date()[_0x53dc36(0x1fa)](), _0x4b916f = Math['floor'](_0x5dbf6b / 0x3e8), _0x3551ac = _0x53dc36(0x331), _0x44f838 = _0x3e372a('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x53dc36(0x3ee)]()[_0x53dc36(0x1f9)]() || location[_0x53dc36(0x21f)][_0x53dc36(0x318)]('/')['at'](0x2), _0x447893 = location['pathname'][_0x53dc36(0x24b)](/\/$/ig, '')[_0x53dc36(0x318)]('/')['at'](-0x1), _0x8e9f2a = '', _0x4d5934 = null;
                _0x2e6ed9(!![]);
                if (_0x145f91[_0x53dc36(0x362)] && !_0xa1a7bc['tempFetchRateLimit']) {
                    let _0xc4d15e = await _0xf927fb(_0x44f838), _0x5ce40a = _0xc4d15e[_0x53dc36(0x3a4)]['pk'], _0x1dd6cd = await _0x2d0ba0(_0x5ce40a), _0x5d2a79 = location['pathname'][_0x53dc36(0x318)]('/')['filter'](_0x4a8022 => _0x4a8022['length'] > 0x0 && _0x4a8022['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x1dd6cd[_0x53dc36(0x2ce)][_0x53dc36(0x1c5)][0x0][_0x53dc36(0x3f0)]['forEach'](_0x4c6785 => {
                        _0x4c6785['id'] == _0x5d2a79 && (_0x4d5934 = _0x4c6785['id']);
                    });
                    if (_0x4d5934 == null) {
                        let _0xfaa2f = _0x5a7be8(_0x44f838);
                        _0xfaa2f[_0x53dc36(0x42e)](function (_0x49cb86) {
                            const _0x286e22 = _0x53dc36;
                            _0x3e372a(this)[_0x286e22(0x3e0)]()[_0x286e22(0x25e)] > 0x0 && (_0x4d5934 = _0x1dd6cd[_0x286e22(0x2ce)][_0x286e22(0x1c5)][0x0][_0x286e22(0x3f0)][_0x49cb86]['id']);
                        });
                    }
                    _0x4d5934 == null && (_0x3e372a('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')['each'](function (_0x2f2248) {
                        const _0x2189f1 = _0x53dc36;
                        _0x3e372a(this)[_0x2189f1(0x256)](_0x2189f1(0x449)) && (_0x3e372a(this)[_0x2189f1(0x3e0)]()[_0x2189f1(0x25e)] > 0x0 && (_0x4d5934 = _0x1dd6cd[_0x2189f1(0x2ce)][_0x2189f1(0x1c5)][0x0][_0x2189f1(0x3f0)][_0x2f2248]['id']));
                    }), _0x3e372a(_0x53dc36(0x2b5))[_0x53dc36(0x42e)](function (_0x3a206d) {
                        const _0x4a9a79 = _0x53dc36;
                        _0x3e372a(this)[_0x4a9a79(0x3e0)]()[_0x4a9a79(0x256)]('_ac3q') && (_0x4d5934 = _0x1dd6cd['data'][_0x4a9a79(0x1c5)][0x0][_0x4a9a79(0x3f0)][_0x3a206d]['id']);
                    }));
                    _0x4d5934 == null && (_0x4d5934 = location['pathname'][_0x53dc36(0x318)]('/')[_0x53dc36(0x1c4)](_0x294dd2 => _0x294dd2[_0x53dc36(0x25e)] > 0x0 && _0x294dd2[_0x53dc36(0x2ee)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x43b84f = await _0x21cba5(_0x4d5934);
                    _0x145f91[_0x53dc36(0x237)] && (_0x4b916f = _0x43b84f[_0x53dc36(0x3f0)][0x0][_0x53dc36(0x22c)]);
                    _0x43b84f[_0x53dc36(0x210)] === 'ok' ? _0x25ad03(_0x43b84f[_0x53dc36(0x3f0)][0x0]['image_versions2'][_0x53dc36(0x365)][0x0]['url'], _0x44f838, _0x53dc36(0x3a8), _0x4b916f, _0x53dc36(0x331), _0x4d5934) : (_0x145f91[_0x53dc36(0x1e5)] ? (_0xa1a7bc[_0x53dc36(0x2a6)] = !![], _0x1cc9d6(!![], _0xe73ff0)) : alert(_0x53dc36(0x21d) + _0x43b84f[_0x53dc36(0x1f6)]), _0x398e4a(_0x43b84f));
                    _0x2e6ed9(![]);
                    return;
                }
                if (_0xa1a7bc[_0x53dc36(0x3d5)][_0x53dc36(0x3a8)][_0x44f838] && !_0xe73ff0) {
                    _0x398e4a(_0x53dc36(0x3cc), _0x44f838), _0xa1a7bc['GL_dataCache'][_0x53dc36(0x3a8)][_0x44f838][_0x53dc36(0x2ce)][_0x53dc36(0x1c5)][0x0][_0x53dc36(0x3f0)][_0x53dc36(0x344)](_0x8ec945 => {
                        const _0xfbaff = _0x53dc36;
                        _0x8ec945['id'] == _0x447893 && (_0x8e9f2a = _0x8ec945['display_url'], _0x145f91[_0xfbaff(0x237)] && (_0x4b916f = _0x8ec945[_0xfbaff(0x428)], _0x4d5934 = _0x8ec945['id']));
                    });
                    if (_0x8e9f2a[_0x53dc36(0x25e)] == 0x0) {
                        _0x398e4a(_0x53dc36(0x26a), _0x44f838), _0x1cc9d6(!![], !![]);
                        return;
                    }
                } else {
                    let _0x2cf700 = await _0xf927fb(_0x44f838), _0x230c95 = _0x2cf700[_0x53dc36(0x3a4)]['pk'], _0x558645 = await _0x2d0ba0(_0x230c95);
                    _0x558645[_0x53dc36(0x2ce)][_0x53dc36(0x1c5)][0x0][_0x53dc36(0x3f0)][_0x53dc36(0x344)](_0x7e0498 => {
                        const _0x4b7492 = _0x53dc36;
                        _0x7e0498['id'] == _0x447893 && (_0x8e9f2a = _0x7e0498[_0x4b7492(0x3f9)], _0x145f91[_0x4b7492(0x237)] && (_0x4b916f = _0x7e0498[_0x4b7492(0x428)], _0x4d5934 = _0x7e0498['id']));
                    });
                    if (_0x8e9f2a[_0x53dc36(0x25e)] == 0x0) {
                        let _0x47aa30 = _0x5a7be8(_0x44f838);
                        _0x47aa30[_0x53dc36(0x42e)](function (_0x91b43e) {
                            const _0x223d7e = _0x53dc36;
                            _0x3e372a(this)['children']()[_0x223d7e(0x25e)] > 0x0 && (_0x8e9f2a = _0x558645[_0x223d7e(0x2ce)][_0x223d7e(0x1c5)][0x0][_0x223d7e(0x3f0)][_0x91b43e][_0x223d7e(0x3f9)], _0x145f91[_0x223d7e(0x237)] && (_0x4b916f = _0x558645['data']['reels_media'][0x0]['items'][_0x91b43e][_0x223d7e(0x428)], _0x4d5934 = _0x558645[_0x223d7e(0x2ce)][_0x223d7e(0x1c5)][0x0][_0x223d7e(0x3f0)][_0x91b43e]['id']));
                        }), _0x8e9f2a[_0x53dc36(0x25e)] == 0x0 && (_0x3e372a(_0x53dc36(0x437))['each'](function (_0x3de3c4) {
                            const _0x4bdd4c = _0x53dc36;
                            _0x3e372a(this)[_0x4bdd4c(0x256)]('x1lix1fw') && (_0x3e372a(this)['children']()[_0x4bdd4c(0x25e)] > 0x0 && (_0x8e9f2a = _0x558645[_0x4bdd4c(0x2ce)]['reels_media'][0x0][_0x4bdd4c(0x3f0)][_0x3de3c4]['display_url'], _0x145f91[_0x4bdd4c(0x237)] && (_0x4b916f = _0x558645[_0x4bdd4c(0x2ce)]['reels_media'][0x0]['items'][_0x3de3c4][_0x4bdd4c(0x428)], _0x4d5934 = _0x558645['data'][_0x4bdd4c(0x1c5)][0x0][_0x4bdd4c(0x3f0)][_0x3de3c4]['id'])));
                        }), _0x3e372a(_0x53dc36(0x2b5))[_0x53dc36(0x42e)](function (_0x2b6b96) {
                            const _0x532de5 = _0x53dc36;
                            _0x3e372a(this)['children']()['hasClass']('_ac3q') && (_0x8e9f2a = _0x558645[_0x532de5(0x2ce)][_0x532de5(0x1c5)][0x0][_0x532de5(0x3f0)][_0x2b6b96]['display_url'], _0x145f91['RENAME_PUBLISH_DATE'] && (_0x4b916f = _0x558645[_0x532de5(0x2ce)][_0x532de5(0x1c5)][0x0][_0x532de5(0x3f0)][_0x2b6b96][_0x532de5(0x428)], _0x4d5934 = _0x558645['data'][_0x532de5(0x1c5)][0x0]['items'][_0x2b6b96]['id']));
                        }));
                    }
                }
                _0x25ad03(_0x8e9f2a, _0x44f838, _0x53dc36(0x371), _0x4b916f, _0x3551ac, _0x4d5934), _0xa1a7bc[_0x53dc36(0x2a6)] = ![], _0x2e6ed9(![]);
            } else {
                if (_0x3e372a(_0x53dc36(0x2ea))[_0x53dc36(0x1cd)]()['find']('video[class]')[_0x53dc36(0x25e)]) {
                    let _0x46c55c = null;
                    _0x3e372a(_0x53dc36(0x3b2))['length'] > 0x0 ? _0x46c55c = _0x3e372a(_0x53dc36(0x3f7)) : (_0x46c55c = _0x3e372a(_0x53dc36(0x368)), _0x46c55c[_0x53dc36(0x219)](_0x53dc36(0x417), 'relative'));
                    _0x46c55c[_0x53dc36(0x25e)] === 0x0 && (_0x46c55c = _0x3e372a(_0x53dc36(0x1e1))[_0x53dc36(0x1cd)]()[_0x53dc36(0x1cd)]()[_0x53dc36(0x1cd)]()['find'](_0x53dc36(0x24e)), _0x46c55c[_0x53dc36(0x219)](_0x53dc36(0x417), _0x53dc36(0x30a)));
                    _0x46c55c[_0x53dc36(0x25e)] === 0x0 && (_0x46c55c = _0x3e372a('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')['parent']()[_0x53dc36(0x1cd)]()['parent']()[_0x53dc36(0x3a5)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x46c55c[_0x53dc36(0x219)]('position', _0x53dc36(0x30a)));
                    if (_0x46c55c[_0x53dc36(0x25e)] === 0x0) {
                        let _0x4a055b = _0x3e372a(_0x53dc36(0x3e9)), _0x3e728c = 0x0;
                        _0x4a055b['each'](function () {
                            const _0x286d21 = _0x53dc36;
                            _0x3e372a(this)[_0x286d21(0x445)]() > _0x3e728c && (_0x3e728c = _0x3e372a(this)[_0x286d21(0x445)](), _0x46c55c = _0x3e372a(this)[_0x286d21(0x3e0)](_0x286d21(0x236))[_0x286d21(0x3ee)]());
                        });
                    }
                    _0x46c55c != null && (_0x46c55c['first']()[_0x53dc36(0x219)]('position', _0x53dc36(0x30a)), _0x46c55c[_0x53dc36(0x3ee)]()['append'](_0x53dc36(0x3f2) + _0x1dad1c(_0x53dc36(0x313)) + _0x53dc36(0x1c1) + _0x53e079[_0x53dc36(0x338)] + _0x53dc36(0x26f)));
                }
            }
        }
        function _0x46ba53(_0x17cd4e) {
            return new Promise((_0x537769, _0x5787bb) => {
                const _0x5b964c = a0_0x2a9c;
                let _0x53f054 = _0x5b964c(0x3bd) + _0x17cd4e + _0x5b964c(0x1f1);
                GM_xmlhttpRequest({
                    'method': _0x5b964c(0x201),
                    'url': _0x53f054,
                    'onload': function (_0x289633) {
                        const _0x5e262b = _0x5b964c;
                        try {
                            let _0x478f23 = JSON[_0x5e262b(0x1f5)](_0x289633['response']);
                            _0x537769(_0x478f23);
                        } catch (_0x2d60fa) {
                            _0x398e4a(_0x5e262b(0x26d), _0x5e262b(0x336), _0x2d60fa[_0x5e262b(0x1f6)]), _0x5787bb(_0x2d60fa);
                        }
                    },
                    'onerror': function (_0xcdbdac) {
                        const _0x52f972 = _0x5b964c;
                        _0x398e4a(_0x52f972(0x26d), _0x52f972(0x336), _0xcdbdac), _0x5787bb(_0xcdbdac);
                    }
                });
            });
        }
        function _0x2d0ba0(_0x2d9c4f) {
            return new Promise((_0x299864, _0x14e747) => {
                const _0x1d43aa = a0_0x2a9c;
                let _0x322408 = _0x1d43aa(0x373) + _0x2d9c4f + _0x1d43aa(0x1f1);
                GM_xmlhttpRequest({
                    'method': _0x1d43aa(0x201),
                    'url': _0x322408,
                    'onload': function (_0x2ab649) {
                        const _0x3add3a = _0x1d43aa;
                        try {
                            let _0x30bffb = JSON[_0x3add3a(0x1f5)](_0x2ab649['response']);
                            _0x398e4a(_0x3add3a(0x203), _0x30bffb), _0x299864(_0x30bffb);
                        } catch (_0x42f45e) {
                            _0x398e4a(_0x3add3a(0x203), _0x3add3a(0x336), _0x42f45e[_0x3add3a(0x1f6)]), _0x14e747(_0x42f45e);
                        }
                    },
                    'onerror': function (_0x5e450e) {
                        const _0xbe955a = _0x1d43aa;
                        _0x398e4a('getStories()', _0xbe955a(0x336), _0x5e450e), _0x14e747(_0x5e450e);
                    }
                });
            });
        }
        function _0xf927fb(_0x1721f3) {
            return new Promise((_0x31cd8c, _0x41cc4b) => {
                const _0x28177d = a0_0x2a9c;
                let _0x49fd8a = _0x28177d(0x212) + _0x1721f3;
                GM_xmlhttpRequest({
                    'method': _0x28177d(0x201),
                    'url': _0x49fd8a,
                    'onload': function (_0x2ae52c) {
                        const _0x1a3ee0 = _0x28177d;
                        let _0x208c8a = JSON[_0x1a3ee0(0x1f5)](_0x2ae52c[_0x1a3ee0(0x367)]), _0x326bd9 = null;
                        _0x208c8a['users']['forEach'](_0x618261 => {
                            const _0x1f11f3 = _0x1a3ee0;
                            _0x618261[_0x1f11f3(0x3a4)]['username']?.['toLowerCase']() === _0x1721f3?.['toLowerCase']() && (_0x326bd9 = _0x618261);
                        }), _0x326bd9 != null ? (_0x398e4a('getUserId()', _0x326bd9), _0x31cd8c(_0x326bd9)) : _0x537907(_0x1721f3)[_0x1a3ee0(0x287)](_0x3f46f9 => {
                            _0x31cd8c(_0x3f46f9);
                        })[_0x1a3ee0(0x2d4)](_0x2cc762 => {
                            const _0x31b39d = _0x1a3ee0;
                            alert(_0x31b39d(0x285));
                        });
                    },
                    'onerror': function (_0x5c8a88) {
                        const _0x4eb6c6 = _0x28177d;
                        _0x398e4a('getUserId()', _0x4eb6c6(0x336), _0x5c8a88), _0x41cc4b(_0x5c8a88);
                    }
                });
            });
        }
        function _0x537907(_0x1323b6) {
            return new Promise((_0x386710, _0x319dce) => {
                const _0x581943 = a0_0x2a9c;
                let _0x8bb07b = 'https://i.instagram.com/api/v1/users/web_profile_info/?username=' + _0x1323b6;
                GM_xmlhttpRequest({
                    'method': _0x581943(0x201),
                    'url': _0x8bb07b,
                    'headers': { 'X-IG-App-ID': _0x153224() },
                    'onload': function (_0x4349b3) {
                        const _0xb7e907 = _0x581943;
                        try {
                            let _0x3af3bf = JSON[_0xb7e907(0x1f5)](_0x4349b3[_0xb7e907(0x367)]), _0x3db91e = _0x3af3bf?.['data']?.[_0xb7e907(0x3a4)];
                            if (_0x3db91e != null) {
                                let _0xcccaad = _0x3af3bf?.['data'];
                                _0xcccaad[_0xb7e907(0x3a4)]['pk'] = _0xcccaad['user']['id'], _0x398e4a(_0xb7e907(0x32e), _0x3af3bf), _0x386710(_0xcccaad);
                            } else
                                _0x398e4a(_0xb7e907(0x32e), 'reject', _0xb7e907(0x22b)), _0x319dce('undefined');
                        } catch (_0x3e0e49) {
                            _0x398e4a(_0xb7e907(0x32e), 'reject', _0x3e0e49[_0xb7e907(0x1f6)]), _0x319dce(_0x3e0e49);
                        }
                    },
                    'onerror': function (_0x3dcfa0) {
                        const _0x178588 = _0x581943;
                        _0x398e4a('getUserIdWithAgent()', _0x178588(0x336), _0x3dcfa0), _0x319dce(_0x3dcfa0);
                    }
                });
            });
        }
        function _0x17c9ee(_0x17e9d8) {
            return new Promise((_0x2032a1, _0x4cd69a) => {
                const _0xeaaa44 = a0_0x2a9c;
                let _0x417a0f = 'https://i.instagram.com/api/v1/users/' + _0x17e9d8 + '/info/';
                GM_xmlhttpRequest({
                    'method': _0xeaaa44(0x201),
                    'url': _0x417a0f,
                    'headers': { 'User-Agent': _0xeaaa44(0x3eb) },
                    'onload': function (_0x21a33c) {
                        const _0x20bed9 = _0xeaaa44;
                        try {
                            let _0x3b34a5 = JSON['parse'](_0x21a33c['response']);
                            _0x3b34a5[_0x20bed9(0x210)] !== 'ok' ? (_0x398e4a(_0x20bed9(0x392), _0x20bed9(0x336), _0x3b34a5), _0x4cd69a(_0x20bed9(0x2b4))) : (_0x398e4a(_0x20bed9(0x392), _0x3b34a5), _0x2032a1(_0x3b34a5[_0x20bed9(0x3a4)][_0x20bed9(0x1db)]?.[_0x20bed9(0x387)]));
                        } catch (_0x31528b) {
                            _0x398e4a('getUserHighSizeProfile()', _0x20bed9(0x336), _0x31528b), _0x4cd69a(_0x31528b);
                        }
                    },
                    'onerror': function (_0x17492c) {
                        const _0x175add = _0xeaaa44;
                        _0x398e4a('getUserHighSizeProfile()', _0x175add(0x336), _0x17492c), _0x4cd69a(_0x17492c);
                    }
                });
            });
        }
        function _0x4c94c3(_0x58cf40) {
            return new Promise((_0x593ebe, _0x4b9364) => {
                const _0x2d6da2 = a0_0x2a9c;
                if (!_0x58cf40)
                    _0x4b9364(_0x2d6da2(0x2b0));
                let _0x5d1c16 = _0x58cf40, _0x92b440 = _0x2d6da2(0x2fe) + _0x5d1c16 + _0x2d6da2(0x395);
                GM_xmlhttpRequest({
                    'method': _0x2d6da2(0x201),
                    'url': _0x92b440,
                    'onload': function (_0x5731ca) {
                        const _0x4f152a = _0x2d6da2;
                        try {
                            let _0x3c06c5 = JSON['parse'](_0x5731ca[_0x4f152a(0x367)]);
                            _0x398e4a(_0x4f152a(0x286), _0x3c06c5), _0x593ebe(_0x3c06c5[_0x4f152a(0x2ce)][_0x4f152a(0x20e)][_0x4f152a(0x385)][_0x4f152a(0x2e9)]);
                        } catch (_0x5875a5) {
                            _0x398e4a(_0x4f152a(0x286), _0x4f152a(0x336), _0x5875a5[_0x4f152a(0x1f6)]), _0x4b9364(_0x5875a5);
                        }
                    },
                    'onerror': function (_0x5d8e32) {
                        const _0x549259 = _0x2d6da2;
                        _0x398e4a(_0x549259(0x286), _0x549259(0x336), _0x5d8e32), _0x4b9364(_0x5d8e32);
                    }
                });
            });
        }
        function _0x3031fe(_0x2833d7) {
            return new Promise((_0x466d03, _0x14d6d2) => {
                const _0x805fb0 = a0_0x2a9c;
                if (!_0x2833d7)
                    _0x14d6d2(_0x805fb0(0x2b0));
                let _0x599a9e = _0x2833d7, _0x35e827 = _0x805fb0(0x2fe) + _0x599a9e + _0x805fb0(0x395);
                GM_xmlhttpRequest({
                    'method': _0x805fb0(0x201),
                    'url': _0x35e827,
                    'headers': { 'User-Agent': _0x805fb0(0x3eb) },
                    'onload': function (_0x124057) {
                        const _0x3c3ce7 = _0x805fb0;
                        try {
                            let _0x3c1ee8 = JSON[_0x3c3ce7(0x1f5)](_0x124057[_0x3c3ce7(0x367)]);
                            _0x398e4a(_0x3c1ee8), _0x3c1ee8[_0x3c3ce7(0x210)] === 'fail' ? (_0x398e4a(_0x3c3ce7(0x20a), _0x3c3ce7(0x39a), _0x599a9e), _0x1f6a1e(_0x599a9e)[_0x3c3ce7(0x287)](_0x3d27a7 => {
                                const _0xb71a9f = _0x3c3ce7;
                                _0x466d03({
                                    'type': _0xb71a9f(0x3b6),
                                    'data': _0x3d27a7[_0xb71a9f(0x38d)][_0xb71a9f(0x3f0)][0x0]
                                });
                            })['catch'](_0x21f299 => {
                                _0x14d6d2(_0x21f299);
                            })) : _0x466d03({
                                'type': _0x3c3ce7(0x35d),
                                'data': _0x3c1ee8['data']
                            });
                        } catch (_0x28152f) {
                            _0x398e4a('getBlobMedia()', 'reject', _0x28152f[_0x3c3ce7(0x1f6)]), _0x14d6d2(_0x28152f);
                        }
                    },
                    'onerror': function (_0x39e461) {
                        const _0x5289c6 = _0x805fb0;
                        _0x398e4a(_0x5289c6(0x3e5), _0x5289c6(0x336), _0x39e461), _0x14d6d2(_0x39e461);
                    }
                });
            });
        }
        function _0x1f6a1e(_0x4c35ad) {
            return new Promise((_0x1868f6, _0x1ed3bf) => {
                const _0x1c5710 = a0_0x2a9c;
                if (!_0x4c35ad)
                    _0x1ed3bf(_0x1c5710(0x2b0));
                let _0x19becb = _0x4c35ad, _0x243db6 = _0x1c5710(0x33c) + _0x19becb + _0x1c5710(0x228);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x243db6,
                    'headers': {
                        'User-Agent': _0x1c5710(0x3eb),
                        'X-IG-App-ID': _0x153224()
                    },
                    'onload': function (_0x3a844d) {
                        const _0x45d84f = _0x1c5710;
                        try {
                            let _0x5c5628 = JSON[_0x45d84f(0x1f5)](_0x3a844d['response']);
                            _0x398e4a(_0x5c5628), _0x5c5628['status'] === _0x45d84f(0x3f1) ? (alert(_0x45d84f(0x2d9) + _0x5c5628[_0x45d84f(0x1f6)] + ':\x20' + _0x5c5628[_0x45d84f(0x254)]), _0x398e4a(_0x45d84f(0x36d) + _0x5c5628[_0x45d84f(0x1f6)] + ':\x20' + _0x5c5628[_0x45d84f(0x254)]), _0x1ed3bf(_0x3a844d)) : (_0x398e4a('getBlobMediaWithQueryID()', _0x5c5628[_0x45d84f(0x2ce)]), _0x1868f6(_0x5c5628[_0x45d84f(0x2ce)]));
                        } catch (_0x3e0ad8) {
                            _0x398e4a('getBlobMediaWithQueryID()', _0x45d84f(0x336), _0x3e0ad8[_0x45d84f(0x1f6)]), _0x1ed3bf(_0x3e0ad8);
                        }
                    },
                    'onerror': function (_0x549170) {
                        const _0x3ec4a8 = _0x1c5710;
                        _0x398e4a(_0x3ec4a8(0x272), _0x3ec4a8(0x336), _0x549170), _0x1ed3bf(_0x549170);
                    }
                });
            });
        }
        function _0x21cba5(_0x3c183a) {
            return new Promise((_0x11a22e, _0x1ed1dd) => {
                const _0x3c2581 = a0_0x2a9c;
                let _0x4166c8 = 'https://i.instagram.com/api/v1/media/' + _0x3c183a + '/info/';
                if (_0x3c183a == null) {
                    alert(_0x3c2581(0x2f0)), _0x398e4a(_0x3c2581(0x295), 'reject', _0x3c2581(0x2f0)), _0x2e6ed9(![]), _0x1ed1dd(-0x1);
                    return;
                }
                if (_0x153224() == null) {
                    alert(_0x3c2581(0x411)), _0x398e4a(_0x3c2581(0x295), _0x3c2581(0x336), _0x3c2581(0x411)), _0x2e6ed9(![]), _0x1ed1dd(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x4166c8,
                    'headers': {
                        'User-Agent': window[_0x3c2581(0x1df)][_0x3c2581(0x43d)],
                        'Accept': _0x3c2581(0x382),
                        'X-IG-App-ID': _0x153224()
                    },
                    'onload': function (_0x71f8f9) {
                        const _0x2f989e = _0x3c2581;
                        if (_0x71f8f9[_0x2f989e(0x327)] == _0x4166c8) {
                            let _0x16da77 = JSON[_0x2f989e(0x1f5)](_0x71f8f9[_0x2f989e(0x367)]);
                            _0x398e4a(_0x2f989e(0x295), _0x16da77), _0x11a22e(_0x16da77);
                        } else {
                            let _0x423ace = new URL(_0x71f8f9['finalUrl']);
                            _0x423ace[_0x2f989e(0x21f)]['startsWith'](_0x2f989e(0x353)) ? (_0x398e4a(_0x2f989e(0x295), _0x2f989e(0x336), _0x2f989e(0x418)), alert(_0x2f989e(0x418))) : (_0x398e4a('getMediaInfo()', _0x2f989e(0x336), _0x2f989e(0x31c) + _0x71f8f9[_0x2f989e(0x327)] + '\x22'), alert('Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x71f8f9['finalUrl'] + '\x22')), _0x2e6ed9(![]), _0x1ed1dd(-0x1);
                        }
                    },
                    'onerror': function (_0x98205c) {
                        const _0x352d52 = _0x3c2581;
                        _0x398e4a(_0x352d52(0x295), _0x352d52(0x336), _0x98205c), _0x11a22e(_0x98205c);
                    }
                });
            });
        }
        function _0xfd2b2e(_0x57b5fc) {
            const _0x26b4eb = _0x78f617;
            let _0x5427da = new URL(_0x57b5fc), _0x2717fa = _0x5427da?.[_0x26b4eb(0x28c)]?.[_0x26b4eb(0x3f4)]('ig_cache_key')?.[_0x26b4eb(0x318)]('.')['at'](0x0);
            return _0x2717fa ? atob(_0x2717fa) : null;
        }
        function _0x153224() {
            const _0x3bb3b6 = _0x78f617;
            let _0x3f102b = null;
            return _0x3e372a(_0x3bb3b6(0x444))[_0x3bb3b6(0x42e)](function () {
                const _0x569e1e = _0x3bb3b6, _0x4a68a4 = /"APP_ID":"([0-9]+)"/ig, _0x14fd33 = _0x3e372a(this)[_0x569e1e(0x1f9)]()['match'](_0x4a68a4);
                _0x14fd33 != null && _0x3f102b == null && (_0x3f102b = [..._0x3e372a(this)[_0x569e1e(0x1f9)]()[_0x569e1e(0x1dd)](_0x4a68a4)]);
            }), _0x3f102b ? _0x3f102b['at'](0x0)['at'](-0x1) : null;
        }
        function _0x2e6ed9(_0xa51e71) {
            const _0x21e301 = _0x78f617;
            _0xa51e71 ? (_0x3e372a(_0x21e301(0x408))[_0x21e301(0x421)](_0x21e301(0x2c5)), _0x3e372a('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x21e301(0x219)](_0x21e301(0x213), _0x21e301(0x238))) : (_0x3e372a(_0x21e301(0x408))[_0x21e301(0x34d)](_0x21e301(0x2c5)), _0x3e372a(_0x21e301(0x408))[_0x21e301(0x219)](_0x21e301(0x213), ''));
        }
        function _0x5a7be8(_0x3f40ed) {
            const _0x2c4fb3 = _0x78f617;
            let _0x4a4f34 = _0x3e372a(_0x2c4fb3(0x3fa) + _0x3f40ed + '\x22]\x20span')[_0x2c4fb3(0x1c4)](function () {
                const _0x37beba = _0x2c4fb3;
                return _0x3e372a(this)['children']()[_0x37beba(0x25e)] === 0x0 && _0x3e372a(this)[_0x37beba(0x3a5)](_0x37beba(0x3c1))[_0x37beba(0x25e)] === 0x0 && _0x3e372a(this)[_0x37beba(0x1f9)]()?.[_0x37beba(0x452)]() === _0x3f40ed?.[_0x37beba(0x452)]();
            })[_0x2c4fb3(0x33d)]('div:not([class]):not([style])')['filter'](function () {
                const _0x1bbe2d = _0x2c4fb3;
                return _0x3e372a(this)[_0x1bbe2d(0x1f9)]()?.[_0x1bbe2d(0x452)]() !== _0x3f40ed?.[_0x1bbe2d(0x452)]();
            })['filter'](function () {
                const _0x3b5148 = _0x2c4fb3;
                return _0x3e372a(this)[_0x3b5148(0x3e0)]()[_0x3b5148(0x25e)] > 0x1;
            })['first']();
            return _0x4a4f34[_0x2c4fb3(0x25e)] === 0x0 && (_0x4a4f34 = _0x3e372a(_0x2c4fb3(0x3fa) + _0x3f40ed + '\x22]')[_0x2c4fb3(0x1c4)](function () {
                const _0x53e6fc = _0x2c4fb3;
                return _0x3e372a(this)[_0x53e6fc(0x3a5)](_0x53e6fc(0x2b3))['length'] > 0x0;
            })[_0x2c4fb3(0x33d)]('div:not([class]):not([style])')[_0x2c4fb3(0x1c4)](function () {
                const _0x186c07 = _0x2c4fb3;
                return _0x3e372a(this)['text']()?.['toLowerCase']() !== _0x3f40ed?.[_0x186c07(0x452)]();
            })[_0x2c4fb3(0x1c4)](function () {
                const _0xdadb99 = _0x2c4fb3;
                return _0x3e372a(this)[_0xdadb99(0x3e0)]()['length'] > 0x1;
            })[_0x2c4fb3(0x3ee)]()), _0x4a4f34[_0x2c4fb3(0x3e0)]()['filter'](function () {
                const _0x3d419f = _0x2c4fb3;
                return _0x3e372a(this)[_0x3d419f(0x448)]() < 0xa;
            })[_0x2c4fb3(0x3ee)]()[_0x2c4fb3(0x3e0)]();
        }
        function _0x472082(_0x44e44b, _0x4e05ec) {
            const _0x27d852 = _0x78f617;
            _0x3e372a(_0x27d852(0x1d0))['length'] ? (_0x3e372a(_0x27d852(0x3c5))['text'](_0x44e44b + '/' + _0x4e05ec), _0x44e44b >= _0x4e05ec && _0x3e372a(_0x27d852(0x1d0))['fadeOut'](0xfa, function () {
                const _0x23fb99 = _0x27d852;
                _0x3e372a(this)[_0x23fb99(0x42a)]();
            })) : _0x3e372a(_0x27d852(0x36f))['append'](_0x27d852(0x312) + _0x44e44b + '/' + _0x4e05ec + _0x27d852(0x2a2));
        }
        function _0x7ea799(_0x581bce, _0xde4a15) {
            const _0x410923 = _0x78f617;
            let _0x3aee45 = _0x581bce ? _0x410923(0x258) : '';
            _0x3e372a(_0x410923(0x36f))[_0x410923(0x26b)]('<div\x20class=\x22IG_POPUP_DIG\x20' + _0x3aee45 + _0x410923(0x27f)), _0x3e372a(_0x410923(0x1e3))[_0x410923(0x26b)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x1dad1c('CLOSE') + _0x410923(0x216) + GM_info['script']['version'] + _0x410923(0x1ff) + _0x53e079[_0x410923(0x450)] + _0x410923(0x227)), _0xde4a15 && (_0x3e372a(_0x410923(0x1e3))[_0x410923(0x26b)](_0x410923(0x3cf)), _0x3e372a(_0x410923(0x3fc))[_0x410923(0x26b)](_0x410923(0x244) + _0x1dad1c(_0x410923(0x41d)) + _0x410923(0x217)), _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group')[_0x410923(0x26b)](_0x410923(0x274) + _0x1dad1c(_0x410923(0x1e0)) + '</button>'), _0x3e372a(_0x410923(0x1e3))[_0x410923(0x26b)](_0x410923(0x2f9) + _0x1dad1c('ALL_CHECK') + _0x410923(0x3a2)));
        }
        function _0x39ec4c(_0x252f05) {
            const _0x599ad8 = _0x78f617;
            _0x3e372a(_0x599ad8(0x231))[_0x599ad8(0x25e)] && (_0x252f05 ? _0x3e372a(_0x599ad8(0x231))['addClass']('hidden') : _0x3e372a('.IG_POPUP_DIG')[_0x599ad8(0x421)](_0x599ad8(0x258)));
        }
        function _0x25ad03(_0x270b7c, _0x3c889e, _0x5876ea, _0x1a32ee, _0x2a437f, _0x577748) {
            return new Promise(_0x3b7444 => {
                setTimeout(() => {
                    const _0x54a7ac = a0_0x2a9c;
                    _0x2e6ed9(!![]), fetch(_0x270b7c)[_0x54a7ac(0x287)](_0x421711 => {
                        const _0x1893dc = _0x54a7ac;
                        return _0x421711[_0x1893dc(0x43b)]()['then'](_0x375e21 => {
                            _0x2e6ed9(![]), _0x5c4185(_0x270b7c, _0x375e21, _0x3c889e, _0x5876ea, _0x1a32ee, _0x2a437f, _0x577748), _0x3b7444(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x5c4185(_0x252a7f, _0x3f7044, _0x4bf100, _0x5e76a5, _0x851e4c, _0xd93242, _0x45c2a9) {
            const _0x117f4e = _0x78f617;
            _0x851e4c = parseInt(_0x851e4c[_0x117f4e(0x3ed)]()[_0x117f4e(0x1e9)](0xd, '0'));
            _0x145f91[_0x117f4e(0x237)] && (_0x851e4c = parseInt(_0x851e4c['toString']()[_0x117f4e(0x1e9)](0xd, '0')));
            const _0x5e85bd = new Date(_0x851e4c), _0x43259b = document[_0x117f4e(0x401)]('a'), _0xa25b07 = new URL(_0x252a7f)[_0x117f4e(0x21f)][_0x117f4e(0x318)]('/')['at'](-0x1)[_0x117f4e(0x318)]('.')['slice'](0x0, -0x1)['join']('.'), _0x5ee205 = _0x5e85bd[_0x117f4e(0x2df)]()['toString'](), _0x3bc204 = (_0x5e85bd['getMonth']() + 0x1)['toString']()[_0x117f4e(0x439)](0x2, '0'), _0x3f72af = _0x5e85bd['getDate']()[_0x117f4e(0x3ed)]()[_0x117f4e(0x439)](0x2, '0'), _0x1d4222 = _0x5e85bd[_0x117f4e(0x1e2)]()[_0x117f4e(0x3ed)]()[_0x117f4e(0x439)](0x2, '0'), _0x62c5fa = _0x5e85bd[_0x117f4e(0x262)]()[_0x117f4e(0x3ed)]()[_0x117f4e(0x439)](0x2, '0'), _0x533b4d = _0x5e85bd['getSeconds']()[_0x117f4e(0x3ed)]()['padStart'](0x2, '0');
            var _0x2c0243 = _0xa1a7bc[_0x117f4e(0x43f)][_0x117f4e(0x23a)](), _0x16342f = _0x45c2a9 ?? '', _0x16e8e1 = {
                    '%USERNAME%': _0x4bf100,
                    '%SOURCE_TYPE%': _0x5e76a5,
                    '%SHORTCODE%': _0x16342f,
                    '%YEAR%': _0x5ee205,
                    '%2-YEAR%': _0x5ee205[_0x117f4e(0x389)](-0x2),
                    '%MONTH%': _0x3bc204,
                    '%DAY%': _0x3f72af,
                    '%HOUR%': _0x1d4222,
                    '%MINUTE%': _0x62c5fa,
                    '%SECOND%': _0x533b4d,
                    '%ORIGINAL_NAME%': _0xa25b07,
                    '%ORIGINAL_NAME_FIRST%': _0xa25b07['split']('_')['at'](0x0)
                };
            _0x2c0243 = _0x2c0243[_0x117f4e(0x24b)](/%[\w\-]+%/g, function (_0x5cda5c) {
                return _0x16e8e1[_0x5cda5c] || _0x5cda5c;
            });
            const _0x1dbf58 = _0x4bf100 + '_' + _0xa25b07 + '.' + _0xd93242;
            _0x43259b['href'] = URL[_0x117f4e(0x2ca)](_0x3f7044), _0x43259b['setAttribute']('download', _0x145f91['AUTO_RENAME'] ? _0x2c0243 + '.' + _0xd93242 : _0x1dbf58), _0x43259b[_0x117f4e(0x41b)](), _0x43259b[_0x117f4e(0x42a)]();
        }
        async function _0x454414(_0x3d746b, _0x5beecc) {
            const _0x4ec83a = _0x78f617;
            let _0x5f4fd9 = new Date()[_0x4ec83a(0x1fa)](), _0x33c7a8 = Math[_0x4ec83a(0x39d)](_0x5f4fd9 / 0x3e8), _0x17a83b = _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x435)) ? _0x3e372a(_0x3d746b)['attr'](_0x4ec83a(0x435)) : _0xa1a7bc[_0x4ec83a(0x208)];
            !_0x17a83b && _0x3e372a(_0x3d746b)['attr'](_0x4ec83a(0x301)) && (_0x398e4a(_0x4ec83a(0x2da), _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x206))), _0x17a83b = await _0x4c94c3(_0x3e372a(_0x3d746b)['attr'](_0x4ec83a(0x301)))['catch'](_0x1d36a1 => {
                const _0x42f34f = _0x4ec83a;
                _0x398e4a(_0x42f34f(0x302), _0x1d36a1[_0x42f34f(0x1f6)]);
            }), _0x17a83b == null && (_0x17a83b = 'NONE'));
            _0x145f91[_0x4ec83a(0x237)] && _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x34a)) && (_0x33c7a8 = parseInt(_0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x34a))));
            if (_0x145f91[_0x4ec83a(0x362)]) {
                _0x2e6ed9(!![]);
                let _0x1f6b83 = await _0x21cba5(_0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x2f4)));
                _0x2e6ed9(![]);
                if (_0x1f6b83[_0x4ec83a(0x210)] === 'ok') {
                    var _0x209f51 = null;
                    _0x1f6b83[_0x4ec83a(0x3f0)][0x0][_0x4ec83a(0x386)] ? _0x209f51 = _0x1f6b83[_0x4ec83a(0x3f0)][0x0][_0x4ec83a(0x386)][0x0][_0x4ec83a(0x387)] : (_0x1f6b83[_0x4ec83a(0x3f0)][0x0][_0x4ec83a(0x34c)]['candidates'][_0x4ec83a(0x3f6)](function (_0x57fbf4, _0x2ef5d7) {
                        const _0x1cd0db = _0x4ec83a;
                        let _0xe111e0 = new URL(_0x57fbf4[_0x1cd0db(0x387)])['searchParams'][_0x1cd0db(0x3f4)](_0x1cd0db(0x44a)), _0xc2d54e = new URL(_0x2ef5d7[_0x1cd0db(0x387)])[_0x1cd0db(0x28c)][_0x1cd0db(0x3f4)](_0x1cd0db(0x44a));
                        if (_0xe111e0 && _0xc2d54e) {
                            if (_0xe111e0[_0x1cd0db(0x25e)] > _0xc2d54e[_0x1cd0db(0x25e)])
                                return 0x1;
                            if (_0xe111e0['length'] < _0xc2d54e[_0x1cd0db(0x25e)])
                                return -0x1;
                        } else {
                            if (_0x57fbf4[_0x1cd0db(0x445)] < _0x2ef5d7[_0x1cd0db(0x445)])
                                return 0x1;
                            if (_0x57fbf4[_0x1cd0db(0x445)] > _0x2ef5d7[_0x1cd0db(0x445)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x209f51 = _0x1f6b83[_0x4ec83a(0x3f0)][0x0][_0x4ec83a(0x34c)][_0x4ec83a(0x365)][0x0]['url']);
                    if (_0x5beecc) {
                        let _0x502574 = new URL(_0x209f51);
                        _0x502574[_0x4ec83a(0x246)] = _0x4ec83a(0x2e1), _0x3113c2(_0x502574[_0x4ec83a(0x2ed)]);
                    } else
                        _0x25ad03(_0x209f51, _0x17a83b, _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x32b)), _0x33c7a8, _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)]('data-type'), _0x3e372a(_0x3d746b)['attr'](_0x4ec83a(0x301)));
                } else {
                    if (_0x145f91[_0x4ec83a(0x1e5)]) {
                        if (_0x5beecc) {
                            let _0x30a518 = new URL(_0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x206)));
                            _0x30a518[_0x4ec83a(0x246)] = _0x4ec83a(0x2e1), _0x3113c2(_0x30a518['href']);
                        } else
                            _0x25ad03(_0x3e372a(_0x3d746b)['attr'](_0x4ec83a(0x206)), _0x17a83b, _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x32b)), _0x33c7a8, _0x3e372a(_0x3d746b)['attr'](_0x4ec83a(0x44c)), _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x301)));
                    } else
                        alert(_0x4ec83a(0x21d) + _0x1f6b83[_0x4ec83a(0x1f6)]);
                    _0x398e4a(_0x1f6b83);
                }
            } else
                _0x25ad03(_0x3e372a(_0x3d746b)['attr'](_0x4ec83a(0x206)), _0x17a83b, _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x32b)), _0x33c7a8, _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)](_0x4ec83a(0x44c)), _0x3e372a(_0x3d746b)[_0x4ec83a(0x21a)]('data-path'));
        }
        function _0x27462e() {
            const _0x2e30df = _0x78f617;
            for (let _0x13c2c3 of _0xa1a7bc[_0x2e30df(0x1c2)]) {
                _0x398e4a('GM_unregisterMenuCommand', _0x13c2c3), GM_unregisterMenuCommand(_0x13c2c3);
            }
            _0xa1a7bc[_0x2e30df(0x1c2)][_0x2e30df(0x255)](GM_registerMenuCommand(_0x1dad1c(_0x2e30df(0x1dc)), () => {
                _0x577ddd();
            }, { 'accessKey': 'w' })), _0xa1a7bc[_0x2e30df(0x1c2)][_0x2e30df(0x255)](GM_registerMenuCommand(_0x1dad1c('DONATE'), () => {
                const _0x3e9cb0 = _0x2e30df;
                GM_openInTab(_0x3e9cb0(0x252), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0xa1a7bc[_0x2e30df(0x1c2)][_0x2e30df(0x255)](GM_registerMenuCommand(_0x1dad1c(_0x2e30df(0x1fe)), () => {
                _0x43c77f();
            }, { 'accessKey': 'z' })), _0xa1a7bc[_0x2e30df(0x1c2)][_0x2e30df(0x255)](GM_registerMenuCommand(_0x1dad1c('FEEDBACK'), () => {
                _0x560f6a();
            }, { 'accessKey': 'f' })), _0xa1a7bc[_0x2e30df(0x1c2)][_0x2e30df(0x255)](GM_registerMenuCommand(_0x1dad1c('CHECK_UPDATE_MENU'), () => {
                _0x5ae06b();
            }, { 'accessKey': 'c' })), _0xa1a7bc[_0x2e30df(0x1c2)][_0x2e30df(0x255)](GM_registerMenuCommand(_0x1dad1c(_0x2e30df(0x41c)), () => {
                _0x21a18a();
            }, { 'accessKey': 'r' }));
        }
        function _0x246150(_0x7c8f81) {
            const _0xc29bc1 = _0x78f617;
            if (!_0x145f91[_0xc29bc1(0x1fd)])
                return;
            const _0x170a8d = GM_getValue(_0xc29bc1(0x2fa)) ?? new Date()[_0xc29bc1(0x1fa)](), _0x195e59 = new Date()[_0xc29bc1(0x1fa)]();
            _0x195e59 > parseInt(_0x170a8d) + _0x7c8f81 * 0x3e8 && (GM_setValue(_0xc29bc1(0x2fa), new Date()[_0xc29bc1(0x1fa)]()), _0x5ae06b());
        }
        function _0x5ae06b() {
            const _0x259a09 = _0x78f617, _0x23be81 = GM_info[_0x259a09(0x280)][_0x259a09(0x3d1)], _0x369500 = _0x259a09(0x214);
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x369500,
                'onload': function (_0x2670a1) {
                    const _0x1e9ef7 = _0x259a09, _0x12ff0b = _0x2670a1[_0x1e9ef7(0x1c6)], _0x112ea7 = _0x12ff0b['match'](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x112ea7 && _0x112ea7[0x1]) {
                        const _0xa285d1 = _0x112ea7[0x1];
                        _0x398e4a(_0x1e9ef7(0x2aa), _0x23be81, '|', _0x1e9ef7(0x2f6), _0xa285d1), _0xa285d1 !== _0x23be81 && typeof this[_0x1e9ef7(0x310)] === _0x1e9ef7(0x22b) ? (this[_0x1e9ef7(0x310)] = null, GM_notification({
                            'text': _0x1dad1c(_0x1e9ef7(0x1bf)),
                            'title': _0x1dad1c(_0x1e9ef7(0x1d2)),
                            'tag': _0x1e9ef7(0x316),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
                            'onclick': _0x3fa5bf => {
                                const _0x5e84ce = _0x1e9ef7;
                                _0x3fa5bf?.['preventDefault']();
                                var _0x9da756 = GM_openInTab(GM_info[_0x5e84ce(0x280)][_0x5e84ce(0x226)]);
                                setTimeout(() => {
                                    const _0x1cf900 = _0x5e84ce;
                                    _0x9da756[_0x1cf900(0x2f2)]();
                                }, 0xfa);
                            }
                        })) : _0x398e4a(_0x1e9ef7(0x1d9));
                    } else
                        console[_0x1e9ef7(0x2c0)](_0x1e9ef7(0x3ba));
                }
            });
        }
        function _0x577ddd() {
            const _0xdb5308 = _0x78f617;
            _0x3e372a(_0xdb5308(0x231))[_0xdb5308(0x42a)](), _0x7ea799(), _0x3e372a('.IG_POPUP_DIG\x20#post_info')[_0xdb5308(0x1f9)](_0xdb5308(0x3fb)), _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div')['append'](_0xdb5308(0x407));
            for (let _0x249ca8 in _0x297823) {
                _0x3e372a(_0xdb5308(0x42c))[_0xdb5308(0x26b)](_0xdb5308(0x232) + _0x249ca8 + '\x22\x20' + (_0xa1a7bc[_0xdb5308(0x204)] == _0x249ca8 ? _0xdb5308(0x1d7) : '') + '>' + _0x297823[_0x249ca8] + _0xdb5308(0x451));
            }
            for (let _0x4ee3ca in _0x145f91) {
                _0x3e372a(_0xdb5308(0x39c))[_0xdb5308(0x26b)]('<label\x20class=\x22globalSettings' + (_0x2bc8a0[_0xdb5308(0x2f7)](_0x4ee3ca) ? _0xdb5308(0x1ee) : '') + '\x22\x20title=\x22' + _0x1dad1c(_0x4ee3ca + '_INTRO') + _0xdb5308(0x333) + (_0x4ee3ca + _0xdb5308(0x414)) + _0xdb5308(0x3dc) + _0x4ee3ca + '\x22>' + _0x1dad1c(_0x4ee3ca) + _0xdb5308(0x1eb) + _0x4ee3ca + _0xdb5308(0x3c0) + (_0x145f91[_0x4ee3ca] === !![] ? _0xdb5308(0x2d0) : '') + _0xdb5308(0x2a9)), _0x4ee3ca === _0xdb5308(0x420) && _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22' + _0x4ee3ca + '\x22]')[_0xdb5308(0x1cd)](_0xdb5308(0x1c8))['on'](_0xdb5308(0x379), function (_0x3899ef) {
                    const _0x70a298 = _0xdb5308;
                    _0x3899ef[_0x70a298(0x25c)](), _0x3e372a(this)[_0x70a298(0x3a5)](_0x70a298(0x2bc))[_0x70a298(0x25e)] === 0x0 && (_0x3e372a(this)['append'](_0x70a298(0x3f3)), _0x3e372a(this)[_0x70a298(0x3e0)](_0x70a298(0x2bc))[_0x70a298(0x26b)]('<input\x20value=\x22' + _0xa1a7bc[_0x70a298(0x34b)] + _0x70a298(0x32f)), _0x3e372a(this)[_0x70a298(0x3e0)](_0x70a298(0x2bc))[_0x70a298(0x26b)]('<input\x20value=\x22' + _0xa1a7bc['videoVolume'] + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x3e372a(this)[_0x70a298(0x3e0)](_0x70a298(0x2bc))[_0x70a298(0x26b)](_0x70a298(0x3a6) + _0x53e079[_0x70a298(0x450)] + _0x70a298(0x26f)));
                }), _0x4ee3ca === _0xdb5308(0x404) && _0x3e372a(_0xdb5308(0x33a) + _0x4ee3ca + '\x22]')[_0xdb5308(0x1cd)](_0xdb5308(0x1c8))['on']('contextmenu', function (_0x3f9e1b) {
                    const _0x4cd945 = _0xdb5308;
                    _0x3f9e1b[_0x4cd945(0x25c)](), _0x3e372a(this)[_0x4cd945(0x3a5)](_0x4cd945(0x2bc))[_0x4cd945(0x25e)] === 0x0 && (_0x3e372a(this)['append'](_0x4cd945(0x3f3)), _0x3e372a(this)[_0x4cd945(0x3e0)](_0x4cd945(0x2bc))[_0x4cd945(0x26b)]('<input\x20id=\x22date_format\x22\x20value=\x22' + _0xa1a7bc[_0x4cd945(0x43f)] + '\x22\x20/>'), _0x3e372a(this)[_0x4cd945(0x3e0)](_0x4cd945(0x2bc))[_0x4cd945(0x26b)](_0x4cd945(0x3a6) + _0x53e079[_0x4cd945(0x450)] + '</div>'));
                });
            }
        }
        function _0x43c77f() {
            const _0x55cc1d = _0x78f617;
            _0x3e372a(_0x55cc1d(0x231))[_0x55cc1d(0x42a)](), _0x7ea799(), _0x3e372a('.IG_POPUP_DIG\x20#post_info')['text']('IG\x20Debug\x20DOM\x20Tree'), _0x3e372a(_0x55cc1d(0x39c))[_0x55cc1d(0x26b)](_0x55cc1d(0x290)), _0x3e372a(_0x55cc1d(0x39c))[_0x55cc1d(0x26b)](_0x55cc1d(0x33f)), _0x3e372a(_0x55cc1d(0x3fd))[_0x55cc1d(0x26b)](_0x55cc1d(0x1b8) + _0x1dad1c(_0x55cc1d(0x1ec)) + _0x55cc1d(0x2c4)), _0x3e372a(_0x55cc1d(0x3fd))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>' + _0x1dad1c(_0x55cc1d(0x3c9)) + '</a></button>'), _0x3e372a(_0x55cc1d(0x3fd))['append'](_0x55cc1d(0x329) + _0x1dad1c('DOWNLOAD_DOM_TREE') + _0x55cc1d(0x3ec)), _0x3e372a(_0x55cc1d(0x3fd))[_0x55cc1d(0x26b)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x1dad1c(_0x55cc1d(0x40c)) + _0x55cc1d(0x2c4)), _0x3e372a(_0x55cc1d(0x3fd))[_0x55cc1d(0x26b)](_0x55cc1d(0x39b) + _0x1dad1c(_0x55cc1d(0x3df)) + _0x55cc1d(0x2c4));
        }
        function _0x560f6a() {
            const _0x4e229c = _0x78f617;
            _0x3e372a(_0x4e229c(0x231))['remove'](), _0x7ea799(), _0x3e372a(_0x4e229c(0x215))[_0x4e229c(0x1f9)]('Feedback\x20Options'), _0x3e372a(_0x4e229c(0x39c))['append'](_0x4e229c(0x33f)), _0x3e372a(_0x4e229c(0x3fd))[_0x4e229c(0x26b)](_0x4e229c(0x221) + _0x1dad1c(_0x4e229c(0x31a)) + _0x4e229c(0x2c4)), _0x3e372a(_0x4e229c(0x3fd))[_0x4e229c(0x26b)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x1dad1c('REPORT_GITHUB') + _0x4e229c(0x2c4)), _0x3e372a('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x4e229c(0x26b)](_0x4e229c(0x39b) + _0x1dad1c('REPORT_DISCORD') + _0x4e229c(0x2c4));
        }
        function _0x3113c2(_0x1d2c5e) {
            const _0x3b1bfb = _0x78f617;
            var _0x59e97f = document[_0x3b1bfb(0x401)]('a');
            _0x59e97f[_0x3b1bfb(0x2ed)] = _0x1d2c5e, _0x59e97f[_0x3b1bfb(0x2d7)] = _0x3b1bfb(0x446), document[_0x3b1bfb(0x36f)][_0x3b1bfb(0x390)](_0x59e97f), _0x59e97f[_0x3b1bfb(0x41b)](), _0x59e97f[_0x3b1bfb(0x42a)]();
        }
        function _0x21a18a() {
            const _0x1a5c5a = _0x78f617;
            clearInterval(_0xa1a7bc[_0x1a5c5a(0x1ce)]), _0xa1a7bc[_0x1a5c5a(0x3e3)][_0x1a5c5a(0x344)](_0x3685ec => {
                const _0x25c212 = _0x1a5c5a;
                _0x3685ec[_0x25c212(0x24a)][_0x25c212(0x344)](_0x141e36 => {
                    const _0x52470b = _0x25c212;
                    _0x3e372a(_0x3685ec[_0x52470b(0x38b)])['off'](_0x52470b(0x41b), _0x141e36);
                });
            }), _0xa1a7bc[_0x1a5c5a(0x3e3)] = [], _0x3e372a(_0x1a5c5a(0x20b))[_0x1a5c5a(0x42a)](), _0x3e372a(_0x1a5c5a(0x1e8))[_0x1a5c5a(0x42a)](), _0x3e372a('[data-snig]')[_0x1a5c5a(0x39f)](_0x1a5c5a(0x257)), _0xa1a7bc[_0x1a5c5a(0x376)] = ![], _0xa1a7bc[_0x1a5c5a(0x25f)] = ![], _0xa1a7bc['currentURL'] = location[_0x1a5c5a(0x2ed)], _0xa1a7bc[_0x1a5c5a(0x1ef)][_0x1a5c5a(0x41e)](), _0x398e4a('main\x20timer\x20re-register\x20completed');
        }
        function _0x398e4a(..._0x1d630c) {
            const _0x31aa80 = _0x78f617;
            var _0x20d57b = new Date();
            _0xa1a7bc[_0x31aa80(0x1ea)][_0x31aa80(0x255)]({
                'time': _0x20d57b[_0x31aa80(0x1fa)](),
                'content': [..._0x1d630c]
            }), _0xa1a7bc[_0x31aa80(0x1ea)][_0x31aa80(0x25e)] > 0x3e8 && (_0xa1a7bc[_0x31aa80(0x1ea)] = [
                {
                    'time': _0x20d57b[_0x31aa80(0x1fa)](),
                    'content': ['logger\x20sliced']
                },
                ..._0xa1a7bc['GL_logger'][_0x31aa80(0x1e6)](-0x3e7)
            ]), console[_0x31aa80(0x345)]('[' + _0x20d57b['toISOString']() + ']', ..._0x1d630c);
        }
        function _0x597442() {
            const _0x17bd39 = _0x78f617;
            for (let _0x3be823 in _0x145f91) {
                GM_getValue(_0x3be823) != null && typeof GM_getValue(_0x3be823) === _0x17bd39(0x2dd) && (_0x145f91[_0x3be823] = GM_getValue(_0x3be823), _0x3be823 === _0x17bd39(0x420) && GM_getValue(_0x3be823) !== !![] && (_0xa1a7bc[_0x17bd39(0x34b)] = 0x1));
            }
        }
        function _0x1e81ff(_0x190770, _0x24dcbc, _0x22cff3, _0x4d1880 = '') {
            const _0x1239a0 = _0x78f617;
            _0x24dcbc[_0x1239a0(0x3a5)]('div.volume_slider')[_0x1239a0(0x25e)] === 0x0 ? (_0x24dcbc[_0x1239a0(0x26b)](_0x1239a0(0x347) + _0x4d1880 + _0x1239a0(0x377)), _0x24dcbc[_0x1239a0(0x3a5)](_0x1239a0(0x1da))['append'](_0x1239a0(0x1c0) + _0xa1a7bc[_0x1239a0(0x34b)] + '\x22\x20/></div>'), _0x24dcbc['find'](_0x1239a0(0x337))[_0x1239a0(0x21a)](_0x1239a0(0x26e), _0x1239a0(0x220) + (_0xa1a7bc['videoVolume'] * 0x64 + '%')), _0x24dcbc[_0x1239a0(0x3a5)](_0x1239a0(0x337))['on'](_0x1239a0(0x2d1), function () {
                const _0x4c2e13 = _0x1239a0;
                var _0x57a70e = _0x3e372a(this)[_0x4c2e13(0x321)]() * 0x64 + '%';
                _0xa1a7bc[_0x4c2e13(0x34b)] = _0x3e372a(this)[_0x4c2e13(0x321)](), GM_setValue(_0x4c2e13(0x3ce), _0x3e372a(this)[_0x4c2e13(0x321)]()), _0x3e372a(this)['attr'](_0x4c2e13(0x26e), _0x4c2e13(0x220) + _0x57a70e), _0x190770['each'](function () {
                    const _0x4d8097 = _0x4c2e13;
                    _0x398e4a('(' + _0x22cff3 + ')', _0x4d8097(0x1bb)), this['volume'] = _0xa1a7bc[_0x4d8097(0x34b)];
                });
            }), _0x24dcbc[_0x1239a0(0x3a5)](_0x1239a0(0x337))['on'](_0x1239a0(0x315), function () {
                const _0x465704 = _0x1239a0;
                var _0xd170ef = _0xa1a7bc[_0x465704(0x34b)] * 0x64 + '%';
                _0x3e372a(this)[_0x465704(0x21a)]('style', '--ig-track-progress:\x20' + _0xd170ef), _0x3e372a(this)[_0x465704(0x321)](_0xa1a7bc[_0x465704(0x34b)]), _0x190770[_0x465704(0x42e)](function () {
                    const _0x3361f9 = _0x465704;
                    _0x398e4a('(' + _0x22cff3 + ')', 'video\x20volume\x20changed\x20#slider'), this[_0x3361f9(0x378)] = _0xa1a7bc[_0x3361f9(0x34b)];
                });
            }), _0x24dcbc[_0x1239a0(0x3a5)]('div.volume_slider')['on'](_0x1239a0(0x41b), function (_0x284c4a) {
                const _0x2926b7 = _0x1239a0;
                _0x284c4a[_0x2926b7(0x36e)](), _0x284c4a[_0x2926b7(0x25c)]();
            })) : _0x24dcbc[_0x1239a0(0x3a5)](_0x1239a0(0x1da))[_0x1239a0(0x42a)]();
        }
        function _0x250959(_0x49e75b) {
            const _0x1e96c8 = _0x78f617;
            _0x1e5096(), _0x3e372a(_0x1e96c8(0x36f))[_0x1e96c8(0x26b)](_0x1e96c8(0x343) + _0x53e079['CLOSE'] + _0x1e96c8(0x297));
            const _0x5e9054 = _0x3e372a('#imageViewer'), _0x123ce7 = _0x3e372a(_0x1e96c8(0x276)), _0x551198 = _0x3e372a(_0x1e96c8(0x2e2)), _0x48945d = _0x3e372a(_0x1e96c8(0x2f5));
            _0x48945d[_0x1e96c8(0x21a)]('src', _0x49e75b), _0x5e9054[_0x1e96c8(0x219)]('display', _0x1e96c8(0x3e4));
            let _0x30b103 = 0.75, _0x24b73b = 0x0, _0x447ff9 = 0x0, _0x2ed01c = ![], _0x14e24f, _0x33188e;
            _0x48945d['on']('load', () => {
                const _0x403767 = _0x1e96c8;
                _0x24b73b = (window[_0x403767(0x25b)] - _0x48945d[0x0][_0x403767(0x445)]) / 0x2, _0x447ff9 = (window[_0x403767(0x3c6)] - _0x48945d[0x0][_0x403767(0x448)]) / 0x2, _0x2d3657();
            }), _0x48945d['on'](_0x1e96c8(0x24f), _0x4cc63f => {
                const _0x14338a = _0x1e96c8;
                _0x4cc63f[_0x14338a(0x25c)]();
            }), _0x48945d['on'](_0x1e96c8(0x41b), _0x3eb6e6 => {
                const _0x231182 = _0x1e96c8;
                _0x3eb6e6[_0x231182(0x25c)](), _0x3eb6e6['stopPropagation']();
            }), _0x48945d['on'](_0x1e96c8(0x369), _0x328139 => {
                const _0x3c6b9c = _0x1e96c8;
                _0x328139[_0x3c6b9c(0x25c)](), _0x30b103 += _0x328139[_0x3c6b9c(0x1b7)][_0x3c6b9c(0x211)] > 0x0 ? -0.15 : 0.15, _0x30b103 = Math[_0x3c6b9c(0x29e)](Math[_0x3c6b9c(0x3bb)](0.75, _0x30b103), 0x5), _0x2d3657();
            }), _0x48945d['on']('mousedown', _0x3a2a9c => {
                const _0x37f69f = _0x1e96c8;
                _0x2ed01c = !![], _0x14e24f = _0x3a2a9c[_0x37f69f(0x269)] - _0x24b73b, _0x33188e = _0x3a2a9c[_0x37f69f(0x23d)] - _0x447ff9, _0x48945d['css'](_0x37f69f(0x293), 'grabbing');
            }), _0x48945d['on'](_0x1e96c8(0x36a), () => {
                const _0x4f3149 = _0x1e96c8;
                _0x2ed01c = ![], _0x48945d['css'](_0x4f3149(0x293), _0x4f3149(0x3be));
            }), _0x3e372a(document)['on']('mousemove.igHelper', _0x15ac9e => {
                const _0x21095a = _0x1e96c8;
                if (!_0x2ed01c)
                    return;
                _0x15ac9e[_0x21095a(0x25c)](), _0x24b73b = _0x15ac9e[_0x21095a(0x269)] - _0x14e24f, _0x447ff9 = _0x15ac9e[_0x21095a(0x23d)] - _0x33188e, _0x2d3657();
            }), _0x5e9054['on'](_0x1e96c8(0x41b), () => {
                _0x1e5096();
            }), _0x551198['on'](_0x1e96c8(0x41b), () => {
                _0x1e5096();
            }), _0x123ce7['on'](_0x1e96c8(0x41b), _0x38c952 => {
                const _0x4d9c38 = _0x1e96c8;
                _0x38c952[_0x4d9c38(0x25c)](), _0x38c952[_0x4d9c38(0x36e)]();
            });
            function _0x2d3657() {
                const _0x2d9713 = _0x1e96c8;
                _0x48945d[_0x2d9713(0x219)](_0x2d9713(0x3b9), _0x2d9713(0x253) + _0x30b103 + ')'), _0x48945d['css'](_0x2d9713(0x29b), _0x24b73b + 'px'), _0x48945d[_0x2d9713(0x219)]('top', _0x447ff9 + 'px');
            }
        }
        function _0x1e5096() {
            const _0x439c28 = _0x78f617;
            _0x3e372a('#imageViewer')['remove'](), _0x3e372a(document)[_0x439c28(0x42b)](_0x439c28(0x40a));
        }
        function _0x40d3dc() {
            const _0x261912 = _0x78f617;
            var _0x16109c = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x261912(0x3b0),
                        'NOTICE_UPDATE_CONTENT': 'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
                        'CHECK_UPDATE': _0x261912(0x352),
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': _0x261912(0x22a),
                        'RELOAD_SCRIPT': _0x261912(0x3ef),
                        'DONATE': _0x261912(0x3c2),
                        'FEEDBACK': _0x261912(0x1d8),
                        'IMAGE_VIEWER': _0x261912(0x299),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x261912(0x2c9),
                        'SELECT_AND_COPY': _0x261912(0x2c6),
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
                        'REPORT_GITHUB': _0x261912(0x24c),
                        'REPORT_DISCORD': 'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
                        'REPORT_FORK': _0x261912(0x30c),
                        'DEBUG': _0x261912(0x3b1),
                        'CLOSE': _0x261912(0x298),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0x261912(0x3ae),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x261912(0x2fd),
                        'VID': _0x261912(0x278),
                        'DW': _0x261912(0x432),
                        'DW_ALL': _0x261912(0x32a),
                        'THUMBNAIL_INTRO': _0x261912(0x35a),
                        'LOAD_BLOB_ONE': 'Loading\x20Blob\x20Media...',
                        'LOAD_BLOB_MULTIPLE': _0x261912(0x357),
                        'LOAD_BLOB_RELOAD': _0x261912(0x322),
                        'NO_CHECK_RESOURCE': _0x261912(0x3c3),
                        'NO_VID_URL': _0x261912(0x38c),
                        'SETTING': _0x261912(0x279),
                        'AUTO_RENAME': _0x261912(0x281),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0x261912(0x320),
                        'DISABLE_VIDEO_LOOPING': _0x261912(0x239),
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x261912(0x2b8),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x261912(0x359),
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': _0x261912(0x370),
                        'SCROLL_BUTTON': _0x261912(0x2db),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x261912(0x3aa),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x261912(0x37f),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x261912(0x2d6),
                        'AUTO_RENAME_INTRO': _0x261912(0x3a9),
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': _0x261912(0x273),
                        'RENAME_LOCATE_DATE_INTRO': _0x261912(0x35c),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x261912(0x328),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x261912(0x332),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x261912(0x43c),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': 'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x261912(0x34f),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x261912(0x423),
                        'MODIFY_VIDEO_VOLUME_INTRO': 'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
                        'SCROLL_BUTTON_INTRO': 'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': 'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': _0x261912(0x2cb),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x261912(0x360)
                    }
                }, _0x1279ca = Object[_0x261912(0x2ec)]({}, _0x16109c, _0xa1a7bc[_0x261912(0x225)]), _0x26d164 = Object[_0x261912(0x3e8)](_0x1279ca)[_0x261912(0x3f6)]()[_0x261912(0x28f)]((_0x17818d, _0x21ffb2) => {
                    return _0x17818d[_0x21ffb2] = _0x1279ca[_0x21ffb2], _0x17818d;
                }, {});
            return _0x26d164;
        }
        async function _0xc0277a(_0x164e32) {
            return new Promise((_0x241771, _0x24c918) => {
                const _0x294763 = a0_0x2a9c;
                GM_xmlhttpRequest({
                    'method': _0x294763(0x201),
                    'url': _0x294763(0x396) + _0x164e32 + '.json',
                    'onload': function (_0x31d4a1) {
                        try {
                            let _0x1dbbc0 = JSON['parse'](_0x31d4a1['response']);
                            _0x241771(_0x1dbbc0);
                        } catch (_0x95d104) {
                            _0x24c918(_0x95d104);
                        }
                    },
                    'onerror': function (_0x53fec4) {
                        const _0x2accd9 = _0x294763;
                        _0x398e4a(_0x2accd9(0x3b4), _0x2accd9(0x336), _0x53fec4), _0x24c918(_0x53fec4);
                    }
                });
            });
        }
        function _0x1dad1c(_0x37b875) {
            const _0x1e5afa = _0x78f617, _0x2dae25 = _0x40d3dc();
            return _0x2dae25[_0xa1a7bc[_0x1e5afa(0x204)]] != undefined && _0x2dae25[_0xa1a7bc[_0x1e5afa(0x204)]][_0x37b875] != undefined ? _0x2dae25[_0xa1a7bc[_0x1e5afa(0x204)]][_0x37b875] : _0x2dae25['en-US'][_0x37b875];
        }
        function _0x531c1d() {
            const _0x384df0 = _0x78f617;
            _0x3e372a(_0x384df0(0x200))[_0x384df0(0x42e)](function () {
                const _0x439bb0 = _0x384df0;
                _0x3e372a(this)[_0x439bb0(0x1f9)](_0x1dad1c(_0x3e372a(this)['attr'](_0x439bb0(0x234))));
            }), _0x3e372a('[data-ih-locale-title]')[_0x384df0(0x42e)](function () {
                const _0x20ed26 = _0x384df0;
                _0x3e372a(this)[_0x20ed26(0x21a)](_0x20ed26(0x3ca), _0x1dad1c(_0x3e372a(this)[_0x20ed26(0x21a)](_0x20ed26(0x305))));
            });
        }
        _0x3e372a(function () {
            const _0x3b7d15 = _0x78f617;
            function _0x5c4690(_0x3ca048) {
                const _0x516321 = a0_0x2a9c;
                var _0x567c8b = [];
                for (var _0x5c1f6e of _0x3ca048) {
                    _0x567c8b[_0x516321(0x255)]({
                        'tagName': _0x5c1f6e[_0x516321(0x2a4)],
                        'id': _0x5c1f6e['id'],
                        'className': _0x5c1f6e[_0x516321(0x2be)]
                    });
                }
                return _0x567c8b;
            }
            function _0x53af2a() {
                const _0x2a30de = a0_0x2a9c;
                let _0x4425a7 = _0x3e372a(_0x2a30de(0x383))[0x0];
                var _0x4d5e60 = '';
                _0xa1a7bc[_0x2a30de(0x1ea)][_0x2a30de(0x344)](_0x524598 => {
                    var _0x13598b = JSON['stringify'](_0x524598['content'], function (_0x34b8e2, _0x34157b) {
                        const _0x69689c = a0_0x2a9c;
                        if (Array[_0x69689c(0x32c)](this)) {
                            if (typeof _0x34157b === _0x69689c(0x348) && _0x34157b instanceof jQuery)
                                return _0x5c4690(_0x34157b);
                            return _0x34157b;
                        } else
                            return _0x34157b;
                    }, '\x09');
                    _0x4d5e60 += new Date(_0x524598['time'])['toISOString']() + ':\x20' + _0x13598b + '\x0a';
                }), _0x3e372a(_0x2a30de(0x349))['text'](_0x2a30de(0x381) + _0x4d5e60 + '\x0a-----\x0a\x0aLocation:\x20' + location[_0x2a30de(0x21f)] + '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a' + _0x4425a7[_0x2a30de(0x3a1)]);
            }
            _0x3e372a(_0x3b7d15(0x36f))['on']('click', _0x3b7d15(0x3cd), function () {
                _0x53af2a();
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x41b), _0x3b7d15(0x3af), function () {
                const _0x4361bb = _0x3b7d15;
                _0x3e372a(_0x4361bb(0x349))[_0x4361bb(0x3c8)](), document[_0x4361bb(0x405)]('copy');
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x41b), _0x3b7d15(0x400), function () {
                const _0x22124b = _0x3b7d15;
                _0x3e372a(_0x22124b(0x349))[_0x22124b(0x1f9)]()[_0x22124b(0x25e)] === 0x0 && _0x53af2a();
                var _0x418ed7 = _0x3e372a(_0x22124b(0x349))[_0x22124b(0x1f9)](), _0x57b2ee = document[_0x22124b(0x401)]('a'), _0x16fdb4 = new Blob([_0x418ed7], { 'type': 'text/plain' });
                _0x57b2ee[_0x22124b(0x2ed)] = URL[_0x22124b(0x2ca)](_0x16fdb4), _0x57b2ee['download'] = _0x22124b(0x23b) + new Date()[_0x22124b(0x1fa)]() + _0x22124b(0x27d), document[_0x22124b(0x36f)][_0x22124b(0x390)](_0x57b2ee), _0x57b2ee[_0x22124b(0x41b)](), _0x57b2ee['remove']();
            }), _0x3e372a('body')['on'](_0x3b7d15(0x41b), _0x3b7d15(0x2e6), function () {
                const _0x6c0048 = _0x3b7d15;
                _0x3e372a(this)[_0x6c0048(0x1cd)](_0x6c0048(0x2bc))[_0x6c0048(0x25e)] > 0x0 ? _0x3e372a(this)['parent']('#tempWrapper')[_0x6c0048(0x3d6)](0xfa, function () {
                    const _0x4b145f = _0x6c0048;
                    _0x3e372a(this)[_0x4b145f(0x42a)]();
                }) : _0x3e372a(_0x6c0048(0x231))[_0x6c0048(0x42a)]();
            }), _0x3e372a(window)['on']('keydown', function (_0x1e3de7) {
                const _0x24ba39 = _0x3b7d15;
                _0x1e3de7['which'] == '81' && _0x1e3de7[_0x24ba39(0x2d3)] && (_0x3e372a('.IG_POPUP_DIG')[_0x24ba39(0x42a)](), _0x1e3de7[_0x24ba39(0x25c)]()), _0x1e3de7[_0x24ba39(0x363)] == '87' && _0x1e3de7[_0x24ba39(0x2d3)] && (_0x577ddd(), _0x1e3de7['preventDefault']()), _0x1e3de7[_0x24ba39(0x363)] == '90' && _0x1e3de7[_0x24ba39(0x2d3)] && (_0x43c77f(), _0x1e3de7[_0x24ba39(0x25c)]()), _0x1e3de7[_0x24ba39(0x363)] == '82' && _0x1e3de7['altKey'] && (_0x21a18a(), _0x1e3de7[_0x24ba39(0x25c)]()), _0x1e3de7['which'] == '83' && _0x1e3de7[_0x24ba39(0x2d3)] && (location[_0x24ba39(0x2ed)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x3e372a(_0x24ba39(0x2a0))[_0x24ba39(0x25e)] > 0x0 && _0x3e372a(_0x24ba39(0x2a0))?.[_0x24ba39(0x24a)](_0x24ba39(0x41b)), location[_0x24ba39(0x2ed)][_0x24ba39(0x2ee)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x3e372a('.IG_DWHISTORY')['length'] > 0x0 && _0x3e372a(_0x24ba39(0x288))?.[_0x24ba39(0x24a)](_0x24ba39(0x41b)), _0x1e3de7['preventDefault']());
            }), _0x3e372a('body')['on']('change', _0x3b7d15(0x326), function () {
                const _0x4603f2 = _0x3b7d15;
                var _0x4f707f = _0x3e372a(this)['attr']('id');
                if (_0x4f707f && _0x145f91[_0x4f707f] !== undefined) {
                    let _0x5d25d6 = _0x3e372a(this)['prop']('checked');
                    GM_setValue(_0x4f707f, _0x5d25d6), _0x145f91[_0x4f707f] = _0x5d25d6, console['log'](_0x4603f2(0x268), _0x4f707f, _0x5d25d6);
                }
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('click', _0x3b7d15(0x1cf), function (_0x2cf1fe) {
                const _0x42c5c1 = _0x3b7d15;
                _0x3e372a(this)['find'](_0x42c5c1(0x2bc))[_0x42c5c1(0x25e)] > 0x0 && _0x2cf1fe[_0x42c5c1(0x25c)]();
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x3e6), _0x3b7d15(0x3e1), function () {
                const _0x57de4b = _0x3b7d15;
                let _0x475d00 = _0x3e372a(this)['val']();
                _0x3e372a(this)[_0x57de4b(0x21a)](_0x57de4b(0x250)) == 'range' ? _0x3e372a(this)[_0x57de4b(0x42f)]()[_0x57de4b(0x321)](_0x475d00) : _0x3e372a(this)[_0x57de4b(0x384)]()[_0x57de4b(0x321)](_0x475d00), _0x475d00 >= 0x0 && _0x475d00 <= 0x1 && (_0xa1a7bc[_0x57de4b(0x34b)] = _0x475d00, GM_setValue(_0x57de4b(0x3ce), _0x475d00));
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('input', _0x3b7d15(0x3e1), function () {
                const _0xb9d42 = _0x3b7d15;
                if (_0x3e372a(this)['attr'](_0xb9d42(0x250)) == _0xb9d42(0x2e7)) {
                    let _0x202f5a = _0x3e372a(this)[_0xb9d42(0x321)]();
                    _0x3e372a(this)[_0xb9d42(0x42f)]()['val'](_0x202f5a);
                } else {
                    let _0x4a4b93 = _0x3e372a(this)['val']();
                    _0x4a4b93 >= 0x0 && _0x4a4b93 <= 0x1 ? _0x3e372a(this)[_0xb9d42(0x384)]()[_0xb9d42(0x321)](_0x4a4b93) : _0x4a4b93 < 0x0 ? _0x3e372a(this)['val'](0x0) : _0x3e372a(this)['val'](0x1);
                }
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('input', _0x3b7d15(0x3d2), function () {
                const _0x3b15f7 = _0x3b7d15;
                GM_setValue('G_RENAME_FORMAT', _0x3e372a(this)['val']()), _0xa1a7bc[_0x3b15f7(0x43f)] = _0x3e372a(this)[_0x3b15f7(0x321)]();
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('click', _0x3b7d15(0x354), function (_0x3aacf0) {
                const _0x12438d = _0x3b7d15;
                _0x3aacf0[_0x12438d(0x25c)](), _0x454414(this);
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('click', _0x3b7d15(0x3dd), function () {
                const _0xfb6c95 = _0x3b7d15;
                if (_0x145f91[_0xfb6c95(0x362)] && _0x145f91[_0xfb6c95(0x307)])
                    _0x454414(_0x3e372a(this)['parent']()[_0xfb6c95(0x3e0)]('a')[_0xfb6c95(0x3ee)]()[0x0], !![]);
                else {
                    var _0x5405ee = new URL(_0x3e372a(this)[_0xfb6c95(0x1cd)]()[_0xfb6c95(0x3e0)]('a')[_0xfb6c95(0x21a)](_0xfb6c95(0x206)));
                    _0x5405ee[_0xfb6c95(0x246)] = 'scontent.cdninstagram.com', _0x3113c2(_0x5405ee[_0xfb6c95(0x2ed)]);
                }
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('click', _0x3b7d15(0x29a), function () {
                const _0x543225 = _0x3b7d15;
                let _0x11726f = new Date()[_0x543225(0x1fa)]();
                _0x145f91[_0x543225(0x237)] && _0x3e372a(this)[_0x543225(0x1cd)]()[_0x543225(0x3e0)]('a')[_0x543225(0x21a)]('datetime') && (_0x11726f = _0x3e372a(this)['parent']()[_0x543225(0x3e0)]('a')['attr'](_0x543225(0x34a)));
                let _0x19b549 = _0x3e372a(this)[_0x543225(0x1cd)]()['children']('a')[_0x543225(0x21a)]('data-path') ?? _0x3e372a(_0x543225(0x388))['text']();
                _0x25ad03(_0x3e372a(this)[_0x543225(0x1cd)]()[_0x543225(0x3e0)]('a')[_0x543225(0x3a5)]('img')[_0x543225(0x3ee)]()[_0x543225(0x21a)]('src'), _0x3e372a(this)[_0x543225(0x1cd)]()[_0x543225(0x3e0)]('a')['attr'](_0x543225(0x435)), 'thumbnail', _0x11726f, _0x543225(0x331), _0x19b549);
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x41b), _0x3b7d15(0x2a0), function () {
                _0x5bf160(!![]);
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x41b), '.IG_DWSTORY_ALL', function () {
                _0x34788c();
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x41b), '.IG_DWNEWTAB', function (_0xa33189) {
                const _0x7bf944 = _0x3b7d15;
                _0xa33189[_0x7bf944(0x25c)](), _0x5bf160(!![], !![], !![]);
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('click', '.IG_DWSTORY_THUMBNAIL', function () {
                _0x1cc9d6(!![]);
            }), _0x3e372a('body')['on'](_0x3b7d15(0x41b), _0x3b7d15(0x402), function (_0x5c66ba) {
                const _0xc4d37e = _0x3b7d15;
                _0x5c66ba[_0xc4d37e(0x36e)](), _0x3d8cb2(!![]);
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('click', _0x3b7d15(0x288), function () {
                _0x3b6a7f(!![]);
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x41b), _0x3b7d15(0x3e2), function () {
                _0x2de136();
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x41b), _0x3b7d15(0x296), function (_0xf7f50c) {
                const _0x43f4cb = _0x3b7d15;
                _0xf7f50c[_0x43f4cb(0x25c)](), _0x3b6a7f(!![], !![]);
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('click', '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x2b0141(!![]);
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('click', '.IG_REELS', function () {
                _0xfa6da8(!![], !![]);
            }), _0x3e372a('body')['on']('click', _0x3b7d15(0x2ef), function () {
                _0xfa6da8(!![], !![], !![]);
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x41b), '.IG_REELS_THUMBNAIL', function () {
                _0xfa6da8(!![], ![]);
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x38f), _0x3b7d15(0x34e), function (_0x42bc65) {
                const _0x274134 = _0x3b7d15;
                if (_0x42bc65['which'] === 0x3 || _0x42bc65[_0x274134(0x363)] === 0x2) {
                    if (location[_0x274134(0x2ed)] === 'https://www.instagram.com/' && _0x145f91[_0x274134(0x2cf)]) {
                        _0x42bc65[_0x274134(0x25c)]();
                        if (_0x3e372a(this)[_0x274134(0x3a5)](_0x274134(0x1f2))[_0x274134(0x25e)] > 0x0) {
                            const _0x532f38 = _0x274134(0x44f) + _0x3e372a(this)[_0x274134(0x3e0)]('div')[_0x274134(0x28a)]()[_0x274134(0x1f9)]();
                            _0x42bc65['which'] === 0x2 ? GM_openInTab(_0x532f38) : location[_0x274134(0x2ed)] = _0x532f38;
                        }
                    }
                }
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x3e6), _0x3b7d15(0x43e), function () {
                const _0x25a85f = _0x3b7d15;
                var _0x434b79 = _0x3e372a(this)[_0x25a85f(0x3a5)](_0x25a85f(0x2d1))[_0x25a85f(0x31f)](_0x25a85f(0x2d0));
                _0x3e372a(_0x25a85f(0x3c4))['each'](function () {
                    const _0x30b2c4 = _0x25a85f;
                    _0x3e372a(this)[_0x30b2c4(0x31f)]('checked', _0x434b79);
                });
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x3e6), '.IG_POPUP_DIG_BODY\x20.inner_box', function () {
                const _0x3b882a = _0x3b7d15;
                var _0x5a3dda = _0x3e372a(_0x3b882a(0x32d))[_0x3b882a(0x25e)], _0x53b487 = _0x3e372a(_0x3b882a(0x3c4))[_0x3b882a(0x25e)];
                _0x3e372a('.IG_POPUP_DIG_TITLE\x20.checkbox')['find'](_0x3b882a(0x2d1))[_0x3b882a(0x31f)]('checked', _0x5a3dda == _0x53b487);
            }), _0x3e372a(_0x3b7d15(0x36f))['on'](_0x3b7d15(0x41b), '.IG_POPUP_DIG_TITLE\x20#batch_download_selected', function () {
                const _0x1f05cb = _0x3b7d15;
                let _0x1faf12 = 0x0;
                _0x3e372a('.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x1f05cb(0x42e)](function () {
                    const _0xe10766 = _0x1f05cb;
                    _0x3e372a(this)['prev']()[_0xe10766(0x3e0)](_0xe10766(0x2d1))[_0xe10766(0x31f)](_0xe10766(0x2d0)) && (_0x3e372a(this)[_0xe10766(0x24a)](_0xe10766(0x41b)), _0x1faf12++);
                }), _0x1faf12 == 0x0 && alert(_0x1dad1c(_0x1f05cb(0x406)));
            }), _0x3e372a('body')['on'](_0x3b7d15(0x3e6), _0x3b7d15(0x1f8), function () {
                const _0x9c33fd = _0x3b7d15;
                GM_setValue('lang', _0x3e372a(this)['val']()), _0xa1a7bc['lang'] = _0x3e372a(this)[_0x9c33fd(0x321)](), _0xa1a7bc[_0x9c33fd(0x204)]?.[_0x9c33fd(0x3c7)]('en') || _0xa1a7bc['locale'][_0xa1a7bc[_0x9c33fd(0x204)]] != null ? (_0x531c1d(), _0x27462e()) : _0xc0277a(_0xa1a7bc[_0x9c33fd(0x204)])[_0x9c33fd(0x287)](_0x111e94 => {
                    const _0x7146aa = _0x9c33fd;
                    _0xa1a7bc[_0x7146aa(0x225)][_0xa1a7bc[_0x7146aa(0x204)]] = _0x111e94, _0x531c1d(), _0x27462e();
                })[_0x9c33fd(0x2d4)](_0x5c5b63 => {
                    const _0x151c7c = _0x9c33fd;
                    console[_0x151c7c(0x2c0)](_0x151c7c(0x2f8), _0x5c5b63);
                });
            }), _0x3e372a(_0x3b7d15(0x36f))['on']('click', '.IG_POPUP_DIG_TITLE\x20#batch_download_direct', function () {
                const _0x4f5d37 = _0x3b7d15;
                _0x3e372a(_0x4f5d37(0x2a3))['each'](function () {
                    const _0x10b72f = _0x4f5d37;
                    _0x3e372a(this)[_0x10b72f(0x24a)](_0x10b72f(0x41b));
                });
            });
            const _0x23f755 = new MutationObserver(_0x36bd5a => {
                const _0x347ef6 = _0x3b7d15;
                for (const _0x171979 of _0x36bd5a) {
                    _0x171979[_0x347ef6(0x250)] === _0x347ef6(0x37e) && _0x171979[_0x347ef6(0x340)][_0x347ef6(0x344)](_0x22d390 => {
                        const _0x493b12 = _0x347ef6, _0x4c98d1 = _0x3e372a(_0x22d390)[_0x493b12(0x3a5)](_0x493b12(0x23e));
                        if (location[_0x493b12(0x21f)][_0x493b12(0x3c7)](_0x493b12(0x40f))) {
                            if (_0x3e372a(_0x22d390)[_0x493b12(0x21a)]('data-ih-locale-title') == null && _0x3e372a(_0x22d390)[_0x493b12(0x21a)](_0x493b12(0x44e)) == null && _0x22d390['tagName'] === _0x493b12(0x1fc)) {
                                var _0xecd01c = _0x3e372a(_0x22d390)[_0x493b12(0x3a5)](_0x493b12(0x267));
                                let _0x410ea0 = _0xecd01c?.[_0x493b12(0x21a)](_0x493b12(0x3ca));
                                _0x410ea0 != null && _0xecd01c['text'](_0x410ea0);
                            }
                        }
                        if (_0x4c98d1[_0x493b12(0x25e)] > 0x0) {
                            _0x145f91['MODIFY_VIDEO_VOLUME'] && _0x4c98d1[_0x493b12(0x42e)](function () {
                                const _0x4cb05c = _0x493b12;
                                _0x3e372a(this)['on'](_0x4cb05c(0x324), function () {
                                    const _0x2cbf86 = _0x4cb05c;
                                    !_0x3e372a(this)[_0x2cbf86(0x2ce)](_0x2cbf86(0x346)) && (_0x3e372a(this)[_0x2cbf86(0x21a)](_0x2cbf86(0x3d7), !![]), this['volume'] = _0xa1a7bc[_0x2cbf86(0x34b)], _0x398e4a(_0x2cbf86(0x1ca)));
                                });
                            });
                            if (location['pathname'][_0x493b12(0x2ee)](/^(\/stories\/)/ig)) {
                                const _0x1412e5 = location['pathname'][_0x493b12(0x2ee)](/^(\/stories\/highlights\/)/ig) != null, _0x21b178 = _0x1412e5 ? _0x493b12(0x3d8) : _0x493b12(0x2fc);
                                _0x4c98d1['each'](function () {
                                    const _0x5b134e = _0x493b12;
                                    _0x3e372a(this)['on'](_0x5b134e(0x283), function () {
                                        const _0x1000f7 = _0x5b134e;
                                        if (!_0x3e372a(this)['data'](_0x1000f7(0x2b9))) {
                                            let _0x372935 = _0x3e372a(this);
                                            _0x372935[_0x1000f7(0x33d)](_0x1000f7(0x398))[_0x1000f7(0x1c4)](function () {
                                                const _0x3c7f46 = _0x1000f7;
                                                return _0x3e372a(this)['width']() == _0x372935[_0x3c7f46(0x445)]();
                                            })[_0x1000f7(0x3a5)](_0x1000f7(0x223))[_0x1000f7(0x25e)] === 0x0 ? (_0x3e372a(this)[_0x1000f7(0x21a)]('data-modify-thumbnail', !![]), _0x1412e5 ? _0x2b0141(![]) : _0x1cc9d6(![]), _0x398e4a('(' + _0x21b178 + ')', _0x1000f7(0x1bd))) : (_0x3e372a(this)[_0x1000f7(0x21a)]('data-modify-thumbnail', !![]), _0x398e4a('(' + _0x21b178 + ')', _0x1000f7(0x207)));
                                        }
                                    });
                                    var _0x55ac4f = _0x3e372a(this);
                                    if (_0x145f91['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x55ac4f[_0x5b134e(0x2ce)](_0x5b134e(0x1d5))) {
                                            _0x398e4a('(' + _0x21b178 + ')', _0x5b134e(0x443));
                                            _0x145f91['MODIFY_VIDEO_VOLUME'] && (this[_0x5b134e(0x378)] = _0xa1a7bc['videoVolume'], _0x55ac4f['on'](_0x5b134e(0x2bf), function () {
                                                const _0x46c11c = _0x5b134e;
                                                this[_0x46c11c(0x378)] = _0xa1a7bc[_0x46c11c(0x34b)];
                                            }));
                                            let _0x405cc7 = _0x55ac4f[_0x5b134e(0x33d)](_0x5b134e(0x236))[_0x5b134e(0x1c4)](function () {
                                                    const _0x2c7a50 = _0x5b134e;
                                                    return _0x3e372a(this)[_0x2c7a50(0x21a)](_0x2c7a50(0x40d)) == null && _0x3e372a(this)[_0x2c7a50(0x21a)]('style') == null;
                                                })[_0x5b134e(0x3ee)](), _0x4bc56c = _0x405cc7[_0x5b134e(0x42f)]();
                                            _0x4bc56c[_0x5b134e(0x260)]();
                                            let _0x4cd70c = _0x405cc7['find'](_0x5b134e(0x20f));
                                            _0x4cd70c[_0x5b134e(0x260)]();
                                            const _0x214d62 = function (_0x4ed780) {
                                                const _0x4d25d7 = _0x5b134e;
                                                _0x4ed780[_0x4d25d7(0x25c)](), _0x55ac4f[_0x4d25d7(0x219)](_0x4d25d7(0x213), '2'), _0x55ac4f[_0x4d25d7(0x21a)](_0x4d25d7(0x1d5), !![]), _0x4cd70c[_0x4d25d7(0x260)](), _0x4bc56c[_0x4d25d7(0x260)](), _0x1e81ff(_0x55ac4f, _0x55ac4f[_0x4d25d7(0x33d)](_0x4d25d7(0x398))[_0x4d25d7(0x1c4)](function () {
                                                    const _0x14ad51 = _0x4d25d7;
                                                    return _0x3e372a(this)[_0x14ad51(0x445)]() == _0x55ac4f['width']();
                                                })[_0x4d25d7(0x3ee)](), _0x21b178, _0x4d25d7(0x23c));
                                            };
                                            _0x55ac4f[_0x5b134e(0x1cd)]()[_0x5b134e(0x3a5)]('video\x20+\x20div')['on']('contextmenu', _0x214d62), _0x4cd70c['on']('contextmenu', _0x214d62), _0x4bc56c['on'](_0x5b134e(0x379), _0x214d62), _0x55ac4f['on'](_0x5b134e(0x379), function (_0x49c8fe) {
                                                const _0x5d0d4a = _0x5b134e;
                                                _0x49c8fe[_0x5d0d4a(0x25c)](), _0x55ac4f[_0x5d0d4a(0x219)](_0x5d0d4a(0x213), '-1'), _0x55ac4f[_0x5d0d4a(0x39f)]('controls'), _0x4bc56c[_0x5d0d4a(0x317)](), _0x4cd70c['show'](), _0x1e81ff(_0x55ac4f, _0x55ac4f[_0x5d0d4a(0x33d)](_0x5d0d4a(0x398))[_0x5d0d4a(0x1c4)](function () {
                                                    const _0xdbf8c2 = _0x5d0d4a;
                                                    return _0x3e372a(this)[_0xdbf8c2(0x445)]() == _0x55ac4f[_0xdbf8c2(0x445)]();
                                                })[_0x5d0d4a(0x3ee)](), _0x21b178, 'vertical');
                                            }), _0x55ac4f['on']('volumechange', function () {
                                                const _0x4accb0 = _0x5b134e;
                                                let _0x4a1911 = _0x405cc7[_0x4accb0(0x1cd)]()[_0x4accb0(0x3a5)](_0x4accb0(0x447))['parents'](_0x4accb0(0x429))[_0x4accb0(0x3ee)]();
                                                var _0x58d8f7 = _0x4a1911[_0x4accb0(0x3a5)](_0x4accb0(0x291))[_0x4accb0(0x25e)] === 0x0;
                                                this[_0x4accb0(0x202)] != _0x58d8f7 && (this[_0x4accb0(0x378)] = _0xa1a7bc[_0x4accb0(0x34b)], _0x4a1911?.[_0x4accb0(0x24a)](_0x4accb0(0x41b))), _0x3e372a(this)['attr'](_0x4accb0(0x38e)) && (_0xa1a7bc[_0x4accb0(0x34b)] = this[_0x4accb0(0x378)], GM_setValue('G_VIDEO_VOLUME', this[_0x4accb0(0x378)])), this['volume'] == _0xa1a7bc[_0x4accb0(0x34b)] && _0x3e372a(this)['attr'](_0x4accb0(0x38e), !![]);
                                            }), _0x55ac4f['css'](_0x5b134e(0x417), _0x5b134e(0x361)), _0x55ac4f[_0x5b134e(0x219)](_0x5b134e(0x213), '2'), _0x55ac4f[_0x5b134e(0x21a)](_0x5b134e(0x3bc), !![]), _0x55ac4f['attr'](_0x5b134e(0x1d5), !![]);
                                        }
                                    } else
                                        _0x1e81ff(_0x55ac4f, _0x55ac4f[_0x5b134e(0x33d)](_0x5b134e(0x398))[_0x5b134e(0x1c4)](function () {
                                            const _0x1f4159 = _0x5b134e;
                                            return _0x3e372a(this)[_0x1f4159(0x445)]() == _0x55ac4f[_0x1f4159(0x445)]();
                                        })['first'](), _0x21b178, 'vertical');
                                });
                            }
                        }
                    });
                }
            });
            _0x23f755[_0x3b7d15(0x2ba)](_0x3e372a(_0x3b7d15(0x383))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));