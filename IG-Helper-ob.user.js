// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.5.4
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

function a0_0x2ded(_0x6114a8, _0x2875db) {
    const _0x4ebc50 = a0_0x4ebc();
    return a0_0x2ded = function (_0x2ded45, _0x15d573) {
        _0x2ded45 = _0x2ded45 - 0x183;
        let _0x39f235 = _0x4ebc50[_0x2ded45];
        return _0x39f235;
    }, a0_0x2ded(_0x6114a8, _0x2875db);
}
function a0_0x4ebc() {
    const _0x119cca = [
        'IG\x20Debug\x20DOM\x20Tree',
        'onHighlightsStory',
        'x1s85apg',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        '.IG_NEWTAB_MAIN',
        'html',
        'onReadyMyDW()\x20Timer',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '<a\x20media-id=\x22',
        'script[type=\x22application/json\x22]',
        'execCommand',
        'G_CHECK_TIMESTAMP',
        'main\x20timer\x20re-register\x20completed',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'center',
        'ig_cache_key',
        'GL_postPath',
        'error',
        'ended',
        'grabbing',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'SETTING',
        'registerMenuIds',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        '</p>',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '\x22\x20/>',
        'boolean',
        'video\x20+\x20div',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '.IG_DWSTORY',
        '1356147UBcLCx',
        'min',
        'carousel_media:\x20undefined\x20username',
        'NEW_TAB',
        '<input\x20value=\x22',
        'height',
        'post',
        'log',
        'GL_logger',
        'arrayBuffer',
        'getMediaInfo()',
        'div.volume_slider\x20input',
        'a[data-needed=\x22direct\x22]',
        'THUMBNAIL_INTRO',
        'stringify',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        '.IG_DWHISTORY',
        'hidden',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        '._acay',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'catch',
        'userAgent',
        'removeClass',
        'Logger:\x0a',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'ig_helper_notice',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'div\x20>\x20ul._acay',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'children',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'deltaY',
        'div[style][class]',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'user',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'display',
        'navigator',
        'https://www.instagram.com/p/',
        'getFullYear',
        'Feedback',
        '.IG_DWSTORY_THUMBNAIL',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'a[href]',
        'parents',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'filter',
        'data-modify-thumbnail',
        'DIV',
        'input',
        'MODIFY_VIDEO_VOLUME',
        'display_resources',
        'script',
        'splice',
        'owner',
        'zoom-in',
        '.xpgaw4o',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'NO_CHECK_RESOURCE',
        'modify',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x22\x20class=\x22newTab\x22>',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        '679PiwCJU',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#1f1f1f\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7.34\x206.41L.86\x2012.9l6.49\x206.48\x206.49-6.48-6.5-6.49zM3.69\x2012.9l3.66-3.66L11\x2012.9l-3.66\x203.66-3.65-3.66zm15.67-6.26C17.61\x204.88\x2015.3\x204\x2013\x204V.76L8.76\x205\x2013\x209.24V6c1.79\x200\x203.58.68\x204.95\x202.05\x202.73\x202.73\x202.73\x207.17\x200\x209.9C16.58\x2019.32\x2014.79\x2020\x2013\x2020c-.97\x200-1.94-.21-2.84-.61l-1.49\x201.49C10.02\x2021.62\x2011.51\x2022\x2013\x2022c2.3\x200\x204.61-.88\x206.36-2.64\x203.52-3.51\x203.52-9.21\x200-12.72z\x22/></svg>',
        'reels',
        'pathname',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'G_RENAME_FORMAT',
        'IMAGE_VIEWER',
        'will-change',
        'Cannot\x20find\x20video\x20URL.',
        '[data-snig]',
        'candidates',
        'a[href^=\x22/p/\x22]',
        'mouseenter',
        'map',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'fail',
        'code',
        '.IG_DWSTORY_ALL',
        'childList',
        '18UsRPxL',
        'FORCE_RESOURCE_VIA_MEDIA',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'copy',
        '_acnb',
        'position',
        'items',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'logger\x20sliced',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        'data-completed',
        'reject',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'trim',
        '.IG_POPUP_DIG\x20input',
        '_INTRO',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'tagName',
        'REPORT_DISCORD',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        '/p/',
        'pageY',
        'DW_ALL',
        'IMG',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'Feedback\x20Options',
        '\x22><span\x20data-ih-locale=\x22',
        'getHighlightStories()',
        'load',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'Donate',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '100960OZyeTY',
        'volumechange',
        'DISABLE_VIDEO_LOOPING',
        '#iv_close',
        '.IG_DWHISTORY_THUMBNAIL',
        'a[href^=\x22/\x22]',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'Checking\x20for\x20Script\x20Updates',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'next',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        '<label\x20class=\x22globalSettings',
        'GL_username',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'endsWith',
        'getUint16',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'loadstart',
        'setUint16',
        'url',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'shortcode_media',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'video_url',
        'text',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'message',
        'body',
        'substr',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'WEBP',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'srcset',
        'SCROLL_BUTTON',
        'finalUrl',
        '.IG_DW_MAIN',
        'Close',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'clientY',
        '#rotate_left',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'off',
        'updatenotification',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'translate(',
        'host',
        'Main\x20Timer',
        '--ig-track-progress:\x20',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        '0\x200',
        'click',
        'x1iyjqo2',
        'appendChild',
        'carousel_media:',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'subarray',
        'getUint8',
        'first',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'thumbnail',
        '/info/',
        '/followers/',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'pointer',
        'BATCH_DOWNLOAD_SELECTED',
        'Found\x20post\x20container',
        'language',
        'buffer',
        'assign',
        'VP8X',
        'DOWNLOAD_ALL',
        'response',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'relative',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'ALL_CHECK',
        '.json',
        '.IG_THUMBNAIL_MAIN',
        'getHours',
        'data-href',
        'type',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'createElement',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'isHomepage',
        'label',
        'CLOSE',
        'Thumbnail\x20button\x20already\x20inserted',
        'www.',
        'blob',
        'NOTICE_UPDATE_CONTENT',
        '.videoThumbnail',
        'floor',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        '.IG_DWNEWTAB',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        '.IG_DWHINEWTAB',
        'media-id',
        'tempFetchRateLimit',
        'parent',
        'Can\x20not\x20find\x20download\x20url.',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'volume',
        'length',
        'sort',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'GraphVideo',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'which',
        'status',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_right\x22\x20style=\x22transform:\x20scaleX(-1);cursor:\x20pointer;\x22>',
        '</div>',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'width',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        '</button>',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        '1032qjHXzW',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'prop',
        'https://www.instagram.com/reel/',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        '._acay\x20+\x20.x24i39r',
        '</span>\x20<input\x20id=\x22',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'taken_at_timestamp',
        '__typename',
        '.IG_DWHISTORY_ALL',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'target',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'GL_dataCache',
        'transform\x200.15s\x20ease',
        'deg)',
        'node',
        'controls',
        'hostname',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'query_id',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        '0px',
        'disconnect',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        '._acnb',
        'mousemove.igHelper',
        'trigger',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'stopPropagation',
        'story',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'Download\x20Video\x20Thumbnail',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'image/jpeg',
        'show',
        'video[class]',
        'G_VIDEO_VOLUME',
        'z-index',
        'locale',
        'canDownload',
        'Failed\x20to\x20strip\x20EXIF\x20and/or\x20attach\x20post\x20URL\x20to\x20EXIF.',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '#tempWrapper',
        'highlight',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'setUint32',
        'data-snig',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'includes',
        'stories',
        'REPORT_FORK',
        'div\x20>\x20ul\x20li._acaz',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'join',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        '#iv_image',
        '</a></button><br/>',
        'element',
        'image_versions2',
        '_ac3q',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'data-loop',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'rotate(',
        'video\x20+\x20div\x20>\x20div',
        'Preference\x20Settings',
        'DOMTree-',
        '#article-id',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'style',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'data-path',
        'data-ih-locale',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'GL_registerEventList',
        'smooth',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'text/plain',
        'Request\x20with:',
        'content',
        'img',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'Fetch\x20from\x20memory\x20cache:',
        'HTML5_VIDEO_CONTROL',
        'data-type',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'xdt_api__v1__media__shortcode__web_info',
        'createMediaListDOM',
        'reels_media',
        '</a></button>',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'vertical',
        '.IG_POPUP_DIG\x20.globalSettings',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'div.volume_slider',
        'jpg',
        '.IG_IMAGE_VIEWER',
        'data-modify',
        'class',
        'replaceAll',
        'dragstart\x20drop',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'avatar',
        'time',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'TURN_DEG',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        '/following/',
        'range',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'query_hash',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        '._aagv\x20img',
        'observe',
        'image/webp',
        'download',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        'GET',
        'after',
        '\x20-</a>',
        'src',
        'currentURL',
        '20000',
        'SKIP_VIEW_STORY_CONFIRM',
        'remove-thumbnail',
        'val',
        '37px',
        '16408640iYqVai',
        'then',
        '\x22\x20datetime=\x22',
        'THUMBNAIL',
        'RELOAD_SCRIPT',
        'hasReferrer',
        'RENAME_PUBLISH_DATE',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        'mousedown',
        'CHECK_UPDATE',
        'NOTICE_UPDATE_TITLE',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'match',
        'reel',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'responseText',
        'datetime',
        'highlights',
        '<div\x20id=\x22tempWrapper\x22></div>',
        '._acay\x20._acaz',
        'video_resources',
        'toLowerCase',
        'startsWith',
        'last',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        '.IG_REELS',
        'GraphSidecar',
        'getBlobMediaWithQuery()',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'CHECK_UPDATE_MENU',
        'DOWNLOAD',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '.IG_REELS_NEWTAB',
        '#_SNLOAD',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '<div></div>',
        'px)\x20scale(',
        'data',
        'div[id^=\x22mount\x22]',
        'version:',
        'each',
        'className',
        'change',
        'title',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'innerHTML',
        '</div></div>',
        'removeAttr',
        '.IG_DWPROFILE',
        'li._acaz',
        'Loading\x20Blob\x20Media...',
        'Found\x20insert\x20point',
        'href',
        'Reload\x20Script',
        'stp',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'div[role=\x22presentation\x22]',
        'Exif\x00\x00',
        '[role=\x22button\x22]',
        'is_video',
        'fadeOut',
        'transform',
        'mp4',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        '.txt',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'parse',
        'LOAD_BLOB_MULTIPLE',
        'GL_referrer',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        '#iv_header',
        'lang',
        'FORCE_FETCH_ALL_RESOURCES',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        '.circle_wrapper',
        'encode',
        'taken_at',
        'https://i.instagram.com/api/v1/users/',
        'top',
        'GL_repeat',
        'getBlobMediaWithQueryID()',
        'preventDefault',
        'Script\x20Loaded',
        'data-username',
        'Wololo!\x20New\x20version\x20released.',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_transform\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_rotate\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20</div>',
        '<p\x20id=\x22_SNLOAD\x22>',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'getStories()',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'addClass',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'username',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'name',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'clientX',
        'videoVolume',
        'Cannot\x20find\x20resource\x20url.',
        'feedback_message',
        'selected',
        'transition',
        '</a>',
        'keydown',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'GM_unregisterMenuCommand',
        'hide',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'object',
        '.button_wrapper',
        'max',
        'x1lix1fw',
        'pageX',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'Select\x20All',
        '\x22\x20class=\x22IG_REELS\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'video',
        'scontent.cdninstagram.com',
        'forEach',
        'wrap',
        'getDate',
        'time[datetime]',
        'firstStarted',
        'Current\x20version:\x20',
        'display_url',
        'DIRECT_DOWNLOAD_ALL',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        '\x22\x20title=\x22',
        'padEnd',
        'shortcode',
        'data-name',
        'data-remove-thumbnail',
        'Debug\x20Window',
        '/accounts/login',
        'createObjectURL',
        'hd_profile_pic_url_info',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'EXIF',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'getTranslationText\x20catch\x20error:',
        'fromCharCode',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'contextmenu',
        '_blank',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'muted',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'matchAll',
        '#scrollWrapper',
        'div:last-child',
        'from',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'profile_pic_url',
        'slice',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        '4645200JTKvSZ',
        'Video',
        '/stories/highlights/',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'append',
        'hasClass',
        'data-controls',
        'pause',
        'isIntersecting',
        'GL_observer',
        'pageLoaded',
        '<a\x20datetime=\x22',
        '[data-ih-locale]',
        'article',
        '#iv_rotate',
        'get',
        'AUTO_RENAME',
        'a[href]\x20time[datetime]',
        'absolute',
        'toString',
        'getSeconds',
        'undefined',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        '</span></label>',
        'video_versions',
        '\x0a-----\x0a\x0aLocation:\x20',
        'modify-thumbnail',
        'DOWNLOAD_DOM_TREE',
        'fileRenameFormat',
        'NONE',
        'find',
        'set',
        'prev',
        'Manually\x20inserting\x20thumbnail\x20button',
        'getUserId()',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'keys',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'undefined\x20username',
        'getUserIdWithAgent()',
        '</span></div>',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'Remote\x20version:\x20',
        'checked',
        'photo',
        'carousel_media',
        'MODIFY_RESOURCE_EXIF',
        'body\x20>\x20div\x20section:visible._ac0a',
        'Open\x20in\x20New\x20Tab',
        'getPostOwner()',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'originalEvent',
        '<option\x20value=\x22',
        'remove',
        '14802bphihv',
        'GraphImage',
        'Modify\x20the\x20EXIF\x20​​properties\x20of\x20the\x20image\x20resource\x20to\x20place\x20the\x20post\x20link\x20in\x20it.',
        'byteLength',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'https://www.instagram.com/',
        'transform-origin',
        'replace',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'edge_sidecar_to_children',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        '*/*',
        'wheel',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        '</span>\x20',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'NO_VID_URL',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'getTranslationText()',
        'div[class][role=\x22button\x22]',
        'body\x20>\x20div\x20section._ac0a',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '%22}',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'mouseup',
        'searchParams',
        'reduce',
        'css',
        'Settings',
        '\x22\x20data-globalIndex=\x22',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'div',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'altKey',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'SELECT_AND_COPY',
        'LOAD_BLOB_ONE',
        'SHOW_DOM_TREE',
        'split',
        'video\x20volume\x20changed\x20#slider',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'div[class]',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'attr',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'userLanguage',
        'loop',
        'Not\x20a\x20JPEG\x20or\x20WEBP',
        'config_width',
        'user\x20settings',
        'none',
        'padStart',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'cursor',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'RIFF',
        '1063ydfGvl',
        'div:not([class]):not([style])',
        'https://www.instagram.com/reels/',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]',
        '#rotate_right',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'REPORT_GITHUB',
        'downloadURL',
        'grab',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'VID',
        '.IG_DW_ALL_MAIN',
        '[data-ih-locale-title]',
        '#imageViewer',
        '.IG_POPUP_DIG\x20#post_info',
        'Download\x20All\x20Resources',
        'getUserHighSizeProfile()',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'isArray',
        'Download\x20Selected\x20Resources',
        'div#splash-screen',
        'timeupdate',
        '\x22]\x20span',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'div#scrollview',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'getTime',
        '670675NKxvdD',
        'section\x20>\x20main[role=\x22main\x22]',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'NOPATH',
        '.IG_POPUP_DIG',
        'version',
        'push'
    ];
    a0_0x4ebc = function () {
        return _0x119cca;
    };
    return a0_0x4ebc();
}
(function (_0x21d66e, _0x5e1e39) {
    const _0xd75a3e = a0_0x2ded, _0x256bb8 = _0x21d66e();
    while (!![]) {
        try {
            const _0x3b76a9 = -parseInt(_0xd75a3e(0x36e)) / 0x1 * (-parseInt(_0xd75a3e(0x1cb)) / 0x2) + parseInt(_0xd75a3e(0x3b4)) / 0x3 + parseInt(_0xd75a3e(0x2f7)) / 0x4 + -parseInt(_0xd75a3e(0x38d)) / 0x5 + -parseInt(_0xd75a3e(0x330)) / 0x6 * (-parseInt(_0xd75a3e(0x3f9)) / 0x7) + parseInt(_0xd75a3e(0x431)) / 0x8 * (parseInt(_0xd75a3e(0x40c)) / 0x9) + -parseInt(_0xd75a3e(0x255)) / 0xa;
            if (_0x3b76a9 === _0x5e1e39)
                break;
            else
                _0x256bb8['push'](_0x256bb8['shift']());
        } catch (_0xe1abe5) {
            _0x256bb8['push'](_0x256bb8['shift']());
        }
    }
}(a0_0x4ebc, 0x9f085), function (_0x3a5d3c) {
    setTimeout(() => {
        'use strict';
        const _0x5c99b4 = a0_0x2ded;
        const _0x444c1c = {
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
                'MODIFY_RESOURCE_EXIF': ![],
                'SCROLL_BUTTON': !![],
                'FORCE_RESOURCE_VIA_MEDIA': ![],
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': ![],
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': ![],
                'SKIP_VIEW_STORY_CONFIRM': ![]
            }, _0x574b19 = [
                _0x5c99b4(0x25b),
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
                _0x5c99b4(0x3ac)
            ], _0x44c7de = {
                'DOWNLOAD': _0x5c99b4(0x417),
                'NEW_TAB': _0x5c99b4(0x25c),
                'THUMBNAIL': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
                'DOWNLOAD_ALL': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
                'CLOSE': _0x5c99b4(0x37a),
                'FULLSCREEN': _0x5c99b4(0x449),
                'TURN_DEG': _0x5c99b4(0x3fa)
            }, _0x23b002 = 0xfa, _0x3d4dab = GM_getResourceText('INTERNAL_CSS'), _0x1dd3d3 = JSON[_0x5c99b4(0x29b)](GM_getResourceText('LOCALE_MANIFEST'));
        var _0x286fd9 = {
            'videoVolume': GM_getValue(_0x5c99b4(0x1f2)) ? GM_getValue(_0x5c99b4(0x1f2)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x5c99b4(0x3fe)) ? GM_getValue(_0x5c99b4(0x3fe)) : '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue('lang') || navigator[_0x5c99b4(0x196)] || navigator[_0x5c99b4(0x362)],
            'currentURL': location[_0x5c99b4(0x28c)],
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
                _0x15a2e4();
            })
        };
        _0xe18212(), GM_addStyle(_0x3d4dab), _0x1b440b(), _0x3fab21(_0x286fd9['lang'])[_0x5c99b4(0x256)](_0x3fede3 => {
            const _0x3bb310 = _0x5c99b4;
            _0x286fd9['locale'][_0x286fd9[_0x3bb310(0x2a0)]] = _0x3fede3, _0x15b927(), _0x1b440b(), _0x40279d(0x12c);
        })[_0x5c99b4(0x3c9)](_0x307fc5 => {
            const _0x46afb3 = _0x5c99b4;
            _0x1b440b(), _0x40279d(0x12c), !_0x286fd9[_0x46afb3(0x2a0)][_0x46afb3(0x26b)]('en') && console[_0x46afb3(0x3a5)]('getTranslationText\x20catch\x20error:', _0x307fc5);
        }), _0x1d76a4(_0x5c99b4(0x2ab), GM_info[_0x5c99b4(0x3ea)][_0x5c99b4(0x2b7)], _0x5c99b4(0x27e), GM_info[_0x5c99b4(0x3ea)][_0x5c99b4(0x392)]);
        var _0x3e94ce = setInterval(function () {
            const _0x8088a5 = _0x5c99b4;
            if (_0x3a5d3c(_0x8088a5(0x385))[_0x8088a5(0x1bc)] > 0x0 && !_0x3a5d3c('div#splash-screen')['is'](':hidden') || location[_0x8088a5(0x3fc)][_0x8088a5(0x261)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x8088a5(0x1de)][_0x8088a5(0x26b)](_0x8088a5(0x1ac)) || (location['pathname'][_0x8088a5(0x441)](_0x8088a5(0x191)) || location[_0x8088a5(0x3fc)][_0x8088a5(0x441)](_0x8088a5(0x23d))) && _0x3a5d3c(_0x8088a5(0x373))['length'] > 0x0) {
                _0x286fd9[_0x8088a5(0x304)] = ![];
                return;
            }
            if (_0x286fd9[_0x8088a5(0x24f)] != location[_0x8088a5(0x28c)] || !_0x286fd9[_0x8088a5(0x2d5)] || !_0x286fd9[_0x8088a5(0x304)]) {
                console['log'](_0x8088a5(0x461), 'trigging'), clearInterval(_0x286fd9[_0x8088a5(0x2a8)]), _0x286fd9[_0x8088a5(0x304)] = ![], _0x286fd9[_0x8088a5(0x2d5)] = !![], _0x286fd9[_0x8088a5(0x24f)] = location[_0x8088a5(0x28c)], _0x286fd9['GL_observer']['disconnect']();
                if (location[_0x8088a5(0x28c)][_0x8088a5(0x26b)](_0x8088a5(0x3dc)) || location[_0x8088a5(0x3fc)][_0x8088a5(0x261)](/^\/(.*?)\/(p|reel)\//ig) || location['href']['startsWith'](_0x8088a5(0x1ce))) {
                    _0x286fd9['GL_dataCache'][_0x8088a5(0x200)] = {}, _0x286fd9[_0x8088a5(0x1d9)]['highlights'] = {}, _0x1d76a4('isDialog');
                    var _0x316303 = setInterval(() => {
                        const _0x3768b7 = _0x8088a5;
                        _0x3a5d3c(_0x3768b7(0x3f6))[_0x3768b7(0x1bc)] > 0x0 && (clearInterval(_0x316303), setTimeout(() => {
                            _0x15a2e4(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x286fd9[_0x8088a5(0x304)] = !![];
                }
                location[_0x8088a5(0x28c)]['startsWith'](_0x8088a5(0x370)) && (_0x1d76a4('isReels'), setTimeout(() => {
                    _0x424245(![]);
                }, 0x96), _0x286fd9[_0x8088a5(0x304)] = !![]);
                if (location['href'][_0x8088a5(0x35b)]('?')[0x0] == _0x8088a5(0x336)) {
                    _0x286fd9[_0x8088a5(0x1d9)]['stories'] = {}, _0x286fd9[_0x8088a5(0x1d9)][_0x8088a5(0x266)] = {};
                    let _0x28da09 = _0x286fd9['GL_referrer']?.[_0x8088a5(0x261)](/^\/(stories|highlights)\//ig) != null;
                    _0x1d76a4(_0x8088a5(0x1a8), _0x28da09), setTimeout(() => {
                        const _0x16bf51 = _0x8088a5;
                        _0x15a2e4(![], _0x28da09);
                        const _0x3f7cff = _0x3a5d3c('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.[_0x16bf51(0x1b8)]()[0x0];
                        _0x3f7cff && _0x286fd9[_0x16bf51(0x303)]['observe'](_0x3f7cff, { 'childList': !![] });
                    }, 0x96), _0x286fd9[_0x8088a5(0x304)] = !![];
                }
                _0x3a5d3c(_0x8088a5(0x372))[_0x8088a5(0x1bc)] && location['pathname'][_0x8088a5(0x261)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x8088a5(0x3fc)][_0x8088a5(0x261)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x1d76a4('isProfile'), setTimeout(() => {
                    _0x13cd29(![]);
                }, 0x96), _0x286fd9[_0x8088a5(0x304)] = !![]);
                if (!_0x286fd9[_0x8088a5(0x304)]) {
                    if (location[_0x8088a5(0x28c)][_0x8088a5(0x261)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x286fd9['GL_dataCache'][_0x8088a5(0x266)] = {}, _0x1d76a4('isHighlightsStory'), _0x4a991f(![]), _0x286fd9['GL_repeat'] = setInterval(() => {
                            _0x105231(![]);
                        }, _0x23b002), _0x3a5d3c(_0x8088a5(0x3c4))[_0x8088a5(0x1bc)] && setTimeout(() => {
                            const _0x4d7bdb = _0x8088a5;
                            if (_0x444c1c[_0x4d7bdb(0x251)]) {
                                var _0x31c9d2 = _0x3a5d3c(_0x4d7bdb(0x242))[_0x4d7bdb(0x3e4)](function () {
                                    const _0x1cec13 = _0x4d7bdb;
                                    return _0x3a5d3c(this)[_0x1cec13(0x3d2)]()[_0x1cec13(0x1bc)] === 0x0 && this['textContent'][_0x1cec13(0x41b)]() !== '';
                                });
                                _0x31c9d2?.['trigger'](_0x4d7bdb(0x185));
                            }
                            _0x286fd9[_0x4d7bdb(0x304)] = !![];
                        }, 0x96);
                    else
                        location['href'][_0x8088a5(0x261)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x1d76a4('isStory'), _0x3a5d3c(_0x8088a5(0x1a7))[_0x8088a5(0x1bc)] > 0x0 && (_0x3a5d3c(_0x8088a5(0x3b3))[_0x8088a5(0x32f)](), _0x3a5d3c('.IG_DWNEWTAB')['remove'](), _0x3a5d3c(_0x8088a5(0x3df))[_0x8088a5(0x1bc)] && _0x3a5d3c(_0x8088a5(0x3df))[_0x8088a5(0x32f)](), _0x1c24d0(![]), setTimeout(() => {
                            _0x1c24d0(![]);
                        }, 0x96)), _0x3a5d3c('.IG_DWSTORY')['length'] && setTimeout(() => {
                            const _0x3901d0 = _0x8088a5;
                            if (_0x444c1c[_0x3901d0(0x251)]) {
                                var _0x5a9086 = _0x3a5d3c(_0x3901d0(0x242))[_0x3901d0(0x3e4)](function () {
                                    const _0x462359 = _0x3901d0;
                                    return _0x3a5d3c(this)[_0x462359(0x3d2)]()[_0x462359(0x1bc)] === 0x0 && this['textContent'][_0x462359(0x41b)]() !== '';
                                });
                                _0x5a9086?.[_0x3901d0(0x185)]();
                            }
                            _0x286fd9['pageLoaded'] = !![];
                        }, 0x96)) : (_0x286fd9['pageLoaded'] = ![], _0x3a5d3c(_0x8088a5(0x3b3))[_0x8088a5(0x1bc)] && _0x3a5d3c(_0x8088a5(0x3b3))['remove'](), _0x3a5d3c(_0x8088a5(0x40a))['length'] && _0x3a5d3c(_0x8088a5(0x40a))['remove'](), _0x3a5d3c(_0x8088a5(0x1b2))[_0x8088a5(0x1bc)] && _0x3a5d3c('.IG_DWNEWTAB')[_0x8088a5(0x32f)](), _0x3a5d3c(_0x8088a5(0x3df))[_0x8088a5(0x1bc)] && _0x3a5d3c('.IG_DWSTORY_THUMBNAIL')[_0x8088a5(0x32f)](), _0x3a5d3c(_0x8088a5(0x3c4))['length'] && _0x3a5d3c(_0x8088a5(0x3c4))['remove'](), _0x3a5d3c(_0x8088a5(0x1d5))[_0x8088a5(0x1bc)] && _0x3a5d3c('.IG_DWHISTORY_ALL')[_0x8088a5(0x32f)](), _0x3a5d3c(_0x8088a5(0x1b5))[_0x8088a5(0x1bc)] && _0x3a5d3c(_0x8088a5(0x1b5))[_0x8088a5(0x32f)](), _0x3a5d3c('.IG_DWHISTORY_THUMBNAIL')[_0x8088a5(0x1bc)] && _0x3a5d3c(_0x8088a5(0x435))[_0x8088a5(0x32f)]());
                }
                _0x40279d(0x12c), _0x286fd9[_0x8088a5(0x29d)] = new URL(location['href'])[_0x8088a5(0x3fc)];
            }
        }, _0x23b002);
        async function _0x149a67() {
            const _0x2b5c0d = _0x5c99b4;
            _0x26cd48(!![]);
            let _0x5b6a04 = new Date()[_0x2b5c0d(0x38c)](), _0x8ac4dc = Math['floor'](_0x5b6a04 / 0x3e8), _0x571565 = location[_0x2b5c0d(0x28c)][_0x2b5c0d(0x338)](/\/$/ig, '')[_0x2b5c0d(0x35b)]('/')['at'](-0x1), _0x343438 = await _0x3009ed(_0x571565), _0x2ce970 = _0x343438[_0x2b5c0d(0x27c)][_0x2b5c0d(0x228)][0x0][_0x2b5c0d(0x3ec)][_0x2b5c0d(0x2b5)], _0x1161cf = 0x0;
            _0x42374c(_0x1161cf, _0x343438[_0x2b5c0d(0x27c)][_0x2b5c0d(0x228)][0x0][_0x2b5c0d(0x412)]['length']), _0x343438[_0x2b5c0d(0x27c)]['reels_media'][0x0][_0x2b5c0d(0x412)][_0x2b5c0d(0x2d1)]((_0x56f6e2, _0xcec75e) => {
                setTimeout(() => {
                    const _0xac6d7c = a0_0x2ded;
                    _0x444c1c[_0xac6d7c(0x25b)] && (_0x8ac4dc = _0x56f6e2[_0xac6d7c(0x1d3)]), _0x56f6e2['display_resources'][_0xac6d7c(0x1bd)](function (_0x524daf, _0x56b87e) {
                        const _0x53c2a1 = _0xac6d7c;
                        if (_0x524daf['config_width'] < _0x56b87e[_0x53c2a1(0x365)])
                            return 0x1;
                        if (_0x524daf['config_width'] > _0x56b87e[_0x53c2a1(0x365)])
                            return -0x1;
                        return 0x0;
                    }), _0x56f6e2[_0xac6d7c(0x293)] ? _0x30831b(_0x56f6e2[_0xac6d7c(0x269)][0x0]['src'], _0x2ce970, _0xac6d7c(0x200), _0x8ac4dc, _0xac6d7c(0x296), _0x56f6e2['id'])[_0xac6d7c(0x256)](() => {
                        const _0x5e15a6 = _0xac6d7c;
                        _0x42374c(++_0x1161cf, _0x343438[_0x5e15a6(0x27c)]['reels_media'][0x0]['items'][_0x5e15a6(0x1bc)]);
                    }) : _0x30831b(_0x56f6e2[_0xac6d7c(0x3e9)][0x0]['src'], _0x2ce970, _0xac6d7c(0x200), _0x8ac4dc, _0xac6d7c(0x230), _0x56f6e2['id'])['then'](() => {
                        const _0x1d5def = _0xac6d7c;
                        _0x42374c(++_0x1161cf, _0x343438['data'][_0x1d5def(0x228)][0x0]['items'][_0x1d5def(0x1bc)]);
                    });
                }, 0x64 * _0xcec75e);
            });
        }
        async function _0x4a991f(_0x4ac3bd, _0x345c05) {
            const _0x260fac = _0x5c99b4;
            var _0x10fb3e = _0x3a5d3c('body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]')[_0x260fac(0x3e4)](function () {
                const _0x1eed83 = _0x260fac;
                return _0x3a5d3c(this)['attr'](_0x1eed83(0x28c))[_0x1eed83(0x35b)]('/')[_0x1eed83(0x3e4)](_0x593e0a => _0x593e0a['length'] > 0x0)[_0x1eed83(0x1bc)] === 0x1;
            })[_0x260fac(0x18c)]()[_0x260fac(0x360)](_0x260fac(0x28c))[_0x260fac(0x35b)]('/')[_0x260fac(0x3e4)](_0xfafc5 => _0xfafc5[_0x260fac(0x1bc)] > 0x0)['at'](0x0);
            if (_0x4ac3bd) {
                let _0x17f52a = new Date()[_0x260fac(0x38c)](), _0x8f062b = Math[_0x260fac(0x1b0)](_0x17f52a / 0x3e8), _0x3b67af = location[_0x260fac(0x28c)]['replace'](/\/$/ig, '')[_0x260fac(0x35b)]('/')['at'](-0x1), _0x192071 = _0x3a5d3c('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')['length'] || _0x3a5d3c(_0x260fac(0x349))[_0x260fac(0x1bc)] || _0x3a5d3c(_0x260fac(0x348))[_0x260fac(0x318)](_0x260fac(0x35f))[_0x260fac(0x1bc)], _0x4f2721 = 0x0;
                _0x26cd48(!![]);
                if (_0x286fd9[_0x260fac(0x1d9)]['highlights'][_0x3b67af]) {
                    _0x1d76a4('Fetch\x20from\x20memory\x20cache:', _0x3b67af);
                    let _0xe37c45 = _0x286fd9[_0x260fac(0x1d9)]['highlights'][_0x3b67af][_0x260fac(0x27c)]['reels_media'][0x0][_0x260fac(0x412)][_0x260fac(0x1bc)];
                    _0x10fb3e = _0x286fd9['GL_dataCache']['highlights'][_0x3b67af][_0x260fac(0x27c)][_0x260fac(0x228)][0x0][_0x260fac(0x3ec)][_0x260fac(0x2b5)], _0x4f2721 = _0x286fd9[_0x260fac(0x1d9)][_0x260fac(0x266)][_0x3b67af][_0x260fac(0x27c)]['reels_media'][0x0][_0x260fac(0x412)][_0xe37c45 - _0x192071];
                } else {
                    let _0x2cf7ac = await _0x3009ed(_0x3b67af), _0xcfa539 = _0x2cf7ac['data'][_0x260fac(0x228)][0x0][_0x260fac(0x412)]['length'];
                    _0x10fb3e = _0x2cf7ac[_0x260fac(0x27c)][_0x260fac(0x228)][0x0]['owner']['username'], _0x4f2721 = _0x2cf7ac[_0x260fac(0x27c)]['reels_media'][0x0][_0x260fac(0x412)][_0xcfa539 - _0x192071], _0x286fd9['GL_dataCache']['highlights'][_0x3b67af] = _0x2cf7ac;
                }
                _0x1d76a4(_0x260fac(0x395), _0x3b67af, _0x286fd9[_0x260fac(0x1d9)]['highlights'][_0x3b67af]);
                _0x444c1c['RENAME_PUBLISH_DATE'] && (_0x8f062b = _0x4f2721['taken_at_timestamp']);
                if (_0x444c1c[_0x260fac(0x40d)] && !_0x286fd9[_0x260fac(0x1b7)]) {
                    let _0x14c18c = await _0xc5148d(_0x4f2721['id']);
                    _0x14c18c[_0x260fac(0x1c3)] === 'ok' ? _0x14c18c[_0x260fac(0x412)][0x0][_0x260fac(0x312)] ? _0x345c05 ? _0x4c5cf2(_0x14c18c[_0x260fac(0x412)][0x0][_0x260fac(0x312)][0x0]['url']) : _0x30831b(_0x14c18c[_0x260fac(0x412)][0x0][_0x260fac(0x312)][0x0]['url'], _0x10fb3e, _0x260fac(0x266), _0x8f062b, _0x260fac(0x296), _0x14c18c['items'][0x0]['id']) : _0x345c05 ? _0x4c5cf2(_0x14c18c[_0x260fac(0x412)][0x0][_0x260fac(0x20a)]['candidates'][0x0][_0x260fac(0x446)]) : _0x30831b(_0x14c18c[_0x260fac(0x412)][0x0][_0x260fac(0x20a)][_0x260fac(0x403)][0x0][_0x260fac(0x446)], _0x10fb3e, 'highlights', _0x8f062b, _0x260fac(0x230), _0x14c18c[_0x260fac(0x412)][0x0]['id']) : (_0x444c1c[_0x260fac(0x32c)] ? (delete _0x286fd9[_0x260fac(0x1d9)][_0x260fac(0x266)][_0x3b67af], _0x286fd9[_0x260fac(0x1b7)] = !![], _0x4a991f(!![], _0x345c05)) : alert(_0x260fac(0x388) + _0x14c18c['message']), _0x1d76a4(_0x14c18c));
                } else
                    _0x4f2721[_0x260fac(0x293)] ? _0x345c05 ? _0x4c5cf2(_0x4f2721[_0x260fac(0x269)]['at'](-0x1)[_0x260fac(0x24e)], _0x10fb3e) : _0x30831b(_0x4f2721[_0x260fac(0x269)]['at'](-0x1)[_0x260fac(0x24e)], _0x10fb3e, 'highlights', _0x8f062b, 'mp4', _0x4f2721['id']) : _0x345c05 ? _0x4c5cf2(_0x4f2721['display_resources']['at'](-0x1)[_0x260fac(0x24e)], _0x10fb3e) : _0x30831b(_0x4f2721[_0x260fac(0x3e9)]['at'](-0x1)['src'], _0x10fb3e, 'highlights', _0x8f062b, 'jpg', _0x4f2721['id']), _0x286fd9[_0x260fac(0x1b7)] = ![];
                _0x26cd48(![]);
            } else {
                if (!_0x3a5d3c(_0x260fac(0x3c4))[_0x260fac(0x1bc)]) {
                    let _0x5d76a2 = null;
                    _0x3a5d3c(_0x260fac(0x347))[_0x260fac(0x1bc)] > 0x0 ? _0x5d76a2 = _0x3a5d3c(_0x260fac(0x329)) : (_0x5d76a2 = _0x3a5d3c(_0x260fac(0x2c2)), _0x5d76a2['css'](_0x260fac(0x411), _0x260fac(0x19d)));
                    if (_0x5d76a2[_0x260fac(0x1bc)] === 0x0) {
                        let _0x3b0baf = _0x3a5d3c(_0x260fac(0x407)), _0x2a8fb9 = 0x0;
                        _0x3b0baf[_0x260fac(0x27f)](function () {
                            const _0xd0ad0b = _0x260fac;
                            _0x3a5d3c(this)['width']() > _0x2a8fb9 && (_0x2a8fb9 = _0x3a5d3c(this)[_0xd0ad0b(0x1c7)](), _0x5d76a2 = _0x3a5d3c(this)[_0xd0ad0b(0x3d2)]('div')[_0xd0ad0b(0x18c)]());
                        });
                    }
                    if (_0x5d76a2 != null) {
                        _0x5d76a2[_0x260fac(0x2fe)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x57cf2e('DW') + _0x260fac(0x369) + _0x44c7de['DOWNLOAD'] + _0x260fac(0x1c5)), _0x5d76a2[_0x260fac(0x2fe)](_0x260fac(0x353) + _0x57cf2e(_0x260fac(0x3b7)) + '\x22\x20class=\x22IG_DWHINEWTAB\x22>' + _0x44c7de[_0x260fac(0x3b7)] + '</div>');
                        let _0x23138b = _0x5de5fd(_0x10fb3e);
                        _0x23138b['length'] > 0x1 && _0x5d76a2['append'](_0x260fac(0x440) + _0x57cf2e('DW_ALL') + '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>' + _0x44c7de['DOWNLOAD_ALL'] + _0x260fac(0x1c5));
                        let _0x52eebc = _0x23138b[_0x260fac(0x3e2)](_0x260fac(0x35e))[_0x260fac(0x318)](_0x260fac(0x2d4))?.[_0x260fac(0x360)](_0x260fac(0x282));
                        _0x52eebc != null && _0x23138b[_0x260fac(0x3e2)](_0x260fac(0x35e))[_0x260fac(0x318)](_0x260fac(0x2d4))[_0x260fac(0x44b)](_0x52eebc), _0x5d76a2['find']('img[referrerpolicy]')['each'](function () {
                            const _0x1b6f57 = _0x260fac;
                            _0x3a5d3c(this)['on'](_0x1b6f57(0x42d), function () {
                                const _0xdfa0e9 = _0x1b6f57;
                                !_0x3a5d3c(this)[_0xdfa0e9(0x27c)](_0xdfa0e9(0x252)) && (_0x5d76a2['find']('.IG_DWHISTORY_THUMBNAIL')[_0xdfa0e9(0x1bc)] === 0x0 ? (_0x3a5d3c(this)[_0xdfa0e9(0x360)](_0xdfa0e9(0x2de), !![]), _0x3a5d3c(_0xdfa0e9(0x435))[_0xdfa0e9(0x32f)](), _0x1d76a4(_0xdfa0e9(0x3d3))) : (_0x3a5d3c(this)[_0xdfa0e9(0x360)](_0xdfa0e9(0x2de), !![]), _0x1d76a4(_0xdfa0e9(0x2eb))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x105231(_0x28746f) {
            const _0x28de78 = _0x5c99b4;
            if (_0x28746f) {
                let _0x152f76 = new Date()[_0x28de78(0x38c)](), _0x37dde7 = Math[_0x28de78(0x1b0)](_0x152f76 / 0x3e8), _0x101a85 = location[_0x28de78(0x28c)][_0x28de78(0x338)](/\/$/ig, '')[_0x28de78(0x35b)]('/')['at'](-0x1), _0x2311a3 = '', _0x40381c = _0x3a5d3c('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x28de78(0x1bc)] || _0x3a5d3c(_0x28de78(0x349))[_0x28de78(0x1bc)] || _0x3a5d3c(_0x28de78(0x348))[_0x28de78(0x318)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x28de78(0x1bc)], _0x36509b = '';
                _0x26cd48(!![]);
                if (_0x286fd9[_0x28de78(0x1d9)]['highlights'][_0x101a85]) {
                    _0x1d76a4(_0x28de78(0x222), _0x101a85);
                    let _0x369834 = _0x286fd9[_0x28de78(0x1d9)][_0x28de78(0x266)][_0x101a85][_0x28de78(0x27c)][_0x28de78(0x228)][0x0][_0x28de78(0x412)][_0x28de78(0x1bc)];
                    _0x2311a3 = _0x286fd9[_0x28de78(0x1d9)]['highlights'][_0x101a85][_0x28de78(0x27c)]['reels_media'][0x0][_0x28de78(0x3ec)]['username'], _0x36509b = _0x286fd9[_0x28de78(0x1d9)][_0x28de78(0x266)][_0x101a85][_0x28de78(0x27c)][_0x28de78(0x228)][0x0][_0x28de78(0x412)][_0x369834 - _0x40381c];
                } else {
                    let _0x41e5d2 = await _0x3009ed(_0x101a85), _0x1a9620 = _0x41e5d2[_0x28de78(0x27c)]['reels_media'][0x0]['items']['length'];
                    _0x2311a3 = _0x41e5d2[_0x28de78(0x27c)][_0x28de78(0x228)][0x0][_0x28de78(0x3ec)][_0x28de78(0x2b5)], _0x36509b = _0x41e5d2[_0x28de78(0x27c)][_0x28de78(0x228)][0x0][_0x28de78(0x412)][_0x1a9620 - _0x40381c], _0x286fd9[_0x28de78(0x1d9)]['highlights'][_0x101a85] = _0x41e5d2;
                }
                _0x444c1c[_0x28de78(0x25b)] && (_0x37dde7 = _0x36509b['taken_at_timestamp']);
                if (_0x444c1c[_0x28de78(0x40d)] && !_0x286fd9[_0x28de78(0x1b7)]) {
                    let _0x112551 = await _0xc5148d(_0x36509b['id']);
                    _0x112551[_0x28de78(0x1c3)] === 'ok' ? _0x30831b(_0x112551[_0x28de78(0x412)][0x0][_0x28de78(0x20a)]['candidates'][0x0][_0x28de78(0x446)], _0x2311a3, _0x28de78(0x266), _0x37dde7, _0x28de78(0x230), _0x101a85) : (_0x444c1c[_0x28de78(0x32c)] ? (delete _0x286fd9['GL_dataCache'][_0x28de78(0x266)][_0x101a85], _0x286fd9['tempFetchRateLimit'] = !![], _0x105231(!![])) : alert(_0x28de78(0x388) + _0x112551[_0x28de78(0x44d)]), _0x1d76a4(_0x112551));
                } else
                    _0x30831b(_0x36509b['display_resources']['at'](-0x1)[_0x28de78(0x24e)], _0x2311a3, 'highlights', _0x37dde7, _0x28de78(0x230), _0x101a85), _0x286fd9[_0x28de78(0x1b7)] = ![];
                _0x26cd48(![]);
            } else {
                if (_0x3a5d3c(_0x28de78(0x204))[_0x28de78(0x1bc)]) {
                    if (!_0x3a5d3c(_0x28de78(0x435))[_0x28de78(0x1bc)]) {
                        let _0x2be761 = null;
                        _0x3a5d3c(_0x28de78(0x347))['length'] > 0x0 ? _0x2be761 = _0x3a5d3c(_0x28de78(0x329)) : (_0x2be761 = _0x3a5d3c(_0x28de78(0x2c2)), _0x2be761['css'](_0x28de78(0x411), 'relative'));
                        if (_0x2be761['length'] === 0x0) {
                            let _0x5159fd = _0x3a5d3c(_0x28de78(0x407)), _0x57700e = 0x0;
                            _0x5159fd[_0x28de78(0x27f)](function () {
                                const _0x428fbd = _0x28de78;
                                _0x3a5d3c(this)['width']() > _0x57700e && (_0x57700e = _0x3a5d3c(this)[_0x428fbd(0x1c7)](), _0x2be761 = _0x3a5d3c(this)[_0x428fbd(0x3d2)]('div')[_0x428fbd(0x18c)]());
                            });
                        }
                        _0x2be761 != null && _0x2be761[_0x28de78(0x2fe)](_0x28de78(0x45b) + _0x57cf2e(_0x28de78(0x3c1)) + _0x28de78(0x371) + _0x44c7de[_0x28de78(0x258)] + _0x28de78(0x1c5));
                    }
                } else
                    _0x3a5d3c(_0x28de78(0x435))[_0x28de78(0x32f)]();
            }
        }
        function _0x15a2e4(_0x27eaa5, _0x492a2b) {
            const _0x8992e5 = _0x5c99b4;
            _0x492a2b === !![] && (_0x1d76a4(_0x8992e5(0x25a), 'regenerated'), _0x3a5d3c(_0x8992e5(0x3a1))[_0x8992e5(0x3e4)](function () {
                const _0x1e265c = _0x8992e5;
                return _0x3a5d3c(this)[_0x1e265c(0x318)](_0x1e265c(0x456))['length'] === 0x0;
            })[_0x8992e5(0x287)](_0x8992e5(0x1fc)));
            if (_0x27eaa5 == ![]) {
                const _0x2e8215 = 0x64;
                let _0x3acf75 = 0x0;
                var _0x5690b1 = setInterval(() => {
                    const _0x7fc500 = _0x8992e5;
                    (_0x3acf75 > _0x2e8215 || _0x3a5d3c(_0x7fc500(0x2b2))[_0x7fc500(0x1bc)] > 0x0) && (clearInterval(_0x5690b1), _0x3acf75 > _0x2e8215 && console['warn'](_0x7fc500(0x39a), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x1d76a4(_0x7fc500(0x39a), _0x7fc500(0x18d)), _0x42e4d2(), _0x3acf75++;
                }, 0x32);
            } else
                _0x42e4d2();
        }
        function _0x4e858d(_0x40c411) {
            const _0x478e5b = _0x5c99b4;
            _0x444c1c[_0x478e5b(0x433)] && _0x40c411[_0x478e5b(0x318)](_0x478e5b(0x2cf))[_0x478e5b(0x27f)](function () {
                const _0x4a8987 = _0x478e5b;
                _0x3a5d3c(this)['on'](_0x4a8987(0x3a6), function () {
                    const _0x116aa0 = _0x4a8987;
                    !_0x3a5d3c(this)['data'](_0x116aa0(0x363)) && (_0x3a5d3c(this)[_0x116aa0(0x360)](_0x116aa0(0x20d), !![]), this[_0x116aa0(0x301)](), _0x1d76a4(_0x116aa0(0x1ee)));
                });
            });
            _0x444c1c[_0x478e5b(0x3e8)] && _0x40c411['find']('video')[_0x478e5b(0x27f)](function () {
                _0x3a5d3c(this)['on']('play\x20playing', function () {
                    const _0x5c9fb1 = a0_0x2ded;
                    !_0x3a5d3c(this)[_0x5c9fb1(0x27c)](_0x5c9fb1(0x3f5)) && (_0x3a5d3c(this)[_0x5c9fb1(0x360)](_0x5c9fb1(0x232), !![]), this[_0x5c9fb1(0x1bb)] = _0x286fd9['videoVolume'], _0x1d76a4(_0x5c9fb1(0x375)));
                });
            });
            _0x444c1c[_0x478e5b(0x223)] && _0x40c411[_0x478e5b(0x318)]('video')[_0x478e5b(0x27f)](function () {
                const _0x535a4e = _0x478e5b;
                if (!_0x3a5d3c(this)['data']('controls')) {
                    let _0x2e0475 = _0x3a5d3c(this);
                    _0x1d76a4('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x444c1c[_0x535a4e(0x3e8)] && (this[_0x535a4e(0x1bb)] = _0x286fd9[_0x535a4e(0x2bb)], _0x3a5d3c(this)['on'](_0x535a4e(0x444), function () {
                        const _0xbe24df = _0x535a4e;
                        this['volume'] = _0x286fd9[_0xbe24df(0x2bb)];
                    })), _0x3a5d3c(this)['on']('contextmenu', function (_0x292607) {
                        const _0xb824a9 = _0x535a4e;
                        _0x292607['preventDefault'](), _0x2e0475[_0xb824a9(0x350)](_0xb824a9(0x1f3), '-1'), _0x2e0475[_0xb824a9(0x287)](_0xb824a9(0x1dd));
                    }), _0x3a5d3c(this)[_0x535a4e(0x1b8)]()['find'](_0x535a4e(0x210))[_0x535a4e(0x18c)]()['on'](_0x535a4e(0x2e9), function (_0x53440d) {
                        const _0x4bdff4 = _0x535a4e;
                        _0x53440d[_0x4bdff4(0x2aa)](), _0x2e0475[_0x4bdff4(0x350)](_0x4bdff4(0x1f3), '2'), _0x2e0475['attr'](_0x4bdff4(0x1dd), !![]);
                    }), _0x3a5d3c(this)['on'](_0x535a4e(0x432), function () {
                        const _0x2e864a = _0x535a4e;
                        let _0xe795e6 = _0x3a5d3c(this)['parent']()[_0x2e864a(0x318)]('video\x20+\x20div\x20>\x20div')[_0x2e864a(0x318)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x2e864a(0x3e4)](function (_0x2f5bf6) {
                            const _0x472d2e = _0x2e864a;
                            return _0x3a5d3c(this)[_0x472d2e(0x1c7)]() <= 0x40 && _0x3a5d3c(this)['height']() <= 0x40 && _0x3a5d3c(this)['find'](_0x472d2e(0x439))[_0x472d2e(0x1bc)] > 0x0;
                        });
                        var _0x3b1d46 = _0xe795e6['find'](_0x2e864a(0x1bf))['length'] === 0x0;
                        this[_0x2e864a(0x2ec)] != _0x3b1d46 && (this['volume'] = _0x286fd9[_0x2e864a(0x2bb)], _0xe795e6?.['trigger'](_0x2e864a(0x185))), _0x3a5d3c(this)[_0x2e864a(0x360)](_0x2e864a(0x418)) && (_0x286fd9[_0x2e864a(0x2bb)] = this['volume'], GM_setValue('G_VIDEO_VOLUME', this[_0x2e864a(0x1bb)])), this[_0x2e864a(0x1bb)] == _0x286fd9['videoVolume'] && _0x3a5d3c(this)[_0x2e864a(0x360)]('data-completed', !![]);
                    }), _0x3a5d3c(this)[_0x535a4e(0x350)](_0x535a4e(0x411), _0x535a4e(0x30c)), _0x3a5d3c(this)[_0x535a4e(0x350)](_0x535a4e(0x1f3), '2'), _0x3a5d3c(this)['attr'](_0x535a4e(0x300), !![]), _0x3a5d3c(this)[_0x535a4e(0x360)]('controls', !![]);
                }
            });
            var _0xcf350d = _0x40c411['find'](_0x478e5b(0x2cf)), _0x5b5cec = _0x40c411[_0x478e5b(0x318)]('video\x20+\x20div\x20>\x20div')['first']();
            _0x18133a(_0xcf350d, _0x5b5cec, _0x478e5b(0x3ba), 'bottom');
        }
        ;
        function _0x42e4d2() {
            const _0x4325d6 = _0x5c99b4;
            _0x3a5d3c('article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr')[_0x4325d6(0x406)](function (_0x36a616) {
                const _0x594190 = _0x4325d6;
                return _0x3a5d3c(this)['is'](_0x594190(0x339)) ? _0x3a5d3c(this)[_0x594190(0x1b8)]()[_0x594190(0x1b8)]()[_0x594190(0x1b8)]()[_0x594190(0x1b8)]()[0x0] : this;
            })[_0x4325d6(0x3e4)](function () {
                const _0x3781ed = _0x4325d6;
                return _0x3a5d3c(this)[_0x3781ed(0x3b9)]() > 0x0 && _0x3a5d3c(this)[_0x3781ed(0x1c7)]() > 0x0;
            })[_0x4325d6(0x27f)](function (_0x3c7bbc) {
                const _0x49a909 = _0x4325d6;
                if (!_0x3a5d3c(this)['attr'](_0x49a909(0x1fc)) && !_0x3a5d3c(this)['hasClass'](_0x49a909(0x186)) && !_0x3a5d3c(this)[_0x49a909(0x3d2)](_0x49a909(0x307))?.[_0x49a909(0x2ff)](_0x49a909(0x186)) && _0x3a5d3c(this)[_0x49a909(0x3e2)](_0x49a909(0x38a))[_0x49a909(0x1bc)] === 0x0) {
                    _0x1d76a4(_0x49a909(0x195), _0x3a5d3c(this));
                    const _0x569bb9 = _0x3a5d3c(this), _0x362914 = this[_0x49a909(0x41f)], _0x164ad4 = _0x49a909(0x268);
                    var _0x2a9d0a;
                    if (_0x362914 === _0x49a909(0x3e6) && _0x3c7bbc != 0x0)
                        return;
                    const _0x382350 = _0x569bb9[_0x49a909(0x3d2)](_0x49a909(0x354))[_0x49a909(0x3d2)](_0x49a909(0x354));
                    if (_0x382350[_0x49a909(0x1bc)] === 0x0)
                        return;
                    _0x1d76a4(_0x49a909(0x28b), _0x382350);
                    if (_0x569bb9[_0x49a909(0x318)](_0x49a909(0x3c7))['length'] > 0x0) {
                        _0x569bb9[_0x49a909(0x318)](_0x49a909(0x1d0))[_0x49a909(0x1bc)] > 0x0 && _0x569bb9[_0x49a909(0x318)](_0x49a909(0x1d0))[_0x49a909(0x350)](_0x49a909(0x2a7), _0x49a909(0x254));
                        const _0x51e6c5 = _0x569bb9[_0x49a909(0x318)]('._acay')[_0x49a909(0x18c)]()['parent']()[0x0];
                        var _0x42a134 = new MutationObserver(function () {
                            const _0x48fc0a = _0x49a909;
                            _0x569bb9['find'](_0x48fc0a(0x1d0))[_0x48fc0a(0x350)](_0x48fc0a(0x2a7), _0x48fc0a(0x254));
                        });
                        _0x42a134[_0x49a909(0x245)](_0x51e6c5, { 'childList': !![] });
                    }
                    _0x382350['eq'](_0x362914 === _0x49a909(0x3e6) ? 0x0 : _0x382350['length'] - 0x2)[_0x49a909(0x2fe)]('<div\x20class=\x22button_wrapper\x22>');
                    const _0xc6010c = _0x49a909(0x3e3) + _0x57cf2e('DW') + _0x49a909(0x219) + _0x44c7de[_0x49a909(0x274)] + _0x49a909(0x1c5), _0x1bf99e = _0x49a909(0x353) + _0x57cf2e(_0x49a909(0x3b7)) + _0x49a909(0x416) + _0x44c7de[_0x49a909(0x3b7)] + '</div>', _0x247e14 = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x57cf2e(_0x49a909(0x3c1)) + _0x49a909(0x263) + _0x44c7de['THUMBNAIL'] + _0x49a909(0x1c5), _0x10de60 = '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22' + _0x57cf2e(_0x49a909(0x3ff)) + _0x49a909(0x2e8) + _0x44c7de['FULLSCREEN'] + _0x49a909(0x1c5);
                    _0x382350[_0x49a909(0x318)]('.button_wrapper')[_0x49a909(0x2fe)](_0xc6010c);
                    const _0x8c1634 = _0x569bb9[_0x49a909(0x318)](_0x164ad4)[_0x49a909(0x1bc)];
                    if (_0x8c1634 > 0x1 && _0x444c1c[_0x49a909(0x18e)] && !_0x444c1c['DIRECT_DOWNLOAD_ALL']) {
                        const _0x15511e = _0x49a909(0x440) + _0x57cf2e(_0x49a909(0x424)) + _0x49a909(0x23f) + _0x44c7de[_0x49a909(0x19a)] + _0x49a909(0x1c5);
                        _0x382350[_0x49a909(0x318)](_0x49a909(0x2c7))['append'](_0x15511e);
                    }
                    _0x382350[_0x49a909(0x318)](_0x49a909(0x2c7))[_0x49a909(0x2fe)](_0x1bf99e), setTimeout(() => {
                        const _0x157220 = _0x49a909;
                        if (_0x382350['eq'](_0x362914 === _0x157220(0x3e6) ? 0x0 : _0x382350[_0x157220(0x1bc)] - 0x2)[_0x157220(0x318)]('div\x20>\x20ul\x20li._acaz')['length'] === 0x0)
                            _0x382350[_0x157220(0x318)](_0x157220(0x2cf))['length'] > 0x0 ? _0x382350[_0x157220(0x318)](_0x157220(0x2c7))[_0x157220(0x2fe)](_0x247e14) : (_0x2a9d0a = _0x569bb9[_0x157220(0x318)](_0x157220(0x220))[_0x157220(0x3e4)](function () {
                                const _0x325744 = _0x157220;
                                return _0x3a5d3c(this)[_0x325744(0x1c7)]() > 0xc8 && _0x3a5d3c(this)['height']() > 0xc8;
                            })[_0x157220(0x360)](_0x157220(0x24e)), _0x382350[_0x157220(0x318)]('.button_wrapper')[_0x157220(0x2fe)](_0x10de60));
                        else {
                            const _0x425d16 = (_0x3e6c31, _0x10708a) => {
                                    const _0x41bc8f = _0x157220;
                                    _0x3e6c31[_0x41bc8f(0x2d1)](_0x56fb18 => {
                                        const _0x5c62f3 = _0x41bc8f;
                                        if (_0x56fb18[_0x5c62f3(0x302)]) {
                                            var _0x3582c3 = _0x3a5d3c(_0x56fb18[_0x5c62f3(0x1d7)]);
                                            _0x382350[_0x5c62f3(0x318)](_0x5c62f3(0x1a1))?.[_0x5c62f3(0x32f)](), _0x382350[_0x5c62f3(0x318)](_0x5c62f3(0x231))?.[_0x5c62f3(0x32f)](), _0x3582c3[_0x5c62f3(0x318)]('video')[_0x5c62f3(0x1bc)] > 0x0 ? (_0x382350['find'](_0x5c62f3(0x1a1))[_0x5c62f3(0x1bc)] === 0x0 && _0x382350['find'](_0x5c62f3(0x2c7))[_0x5c62f3(0x2fe)](_0x247e14), _0x4e858d(_0x569bb9)) : (_0x2a9d0a = _0x3582c3[_0x5c62f3(0x318)](_0x5c62f3(0x220))[_0x5c62f3(0x360)](_0x5c62f3(0x24e)), _0x382350['find']('.button_wrapper')[_0x5c62f3(0x2fe)](_0x10de60));
                                        }
                                    });
                                }, _0x53710c = new IntersectionObserver(_0x425d16, {
                                    'root': _0x569bb9['find'](_0x157220(0x3d0))[_0x157220(0x18c)]()[_0x157220(0x1b8)]()[_0x157220(0x1b8)]()[_0x157220(0x1b8)]()[0x0],
                                    'rootMargin': _0x157220(0x1e2),
                                    'threshold': 0.1
                                }), _0x4b239f = new MutationObserver(function (_0x24f722, _0x4e17f4) {
                                    const _0x2f24ff = _0x157220;
                                    var _0x267140 = _0x24f722['at'](0x0)?.[_0x2f24ff(0x1d7)];
                                    _0x3a5d3c(_0x267140)['find'](_0x2f24ff(0x289))[_0x2f24ff(0x27f)](function () {
                                        _0x53710c['observe'](this);
                                    });
                                });
                            _0x569bb9['find']('div\x20>\x20ul\x20li._acaz')[_0x157220(0x27f)](function () {
                                const _0x23abd7 = _0x157220;
                                _0x53710c[_0x23abd7(0x245)](this);
                            });
                            const _0x3b24ca = _0x382350['eq'](_0x362914 === _0x157220(0x3e6) ? 0x0 : _0x382350['length'] - 0x2)[_0x157220(0x318)]('div\x20>\x20ul\x20li._acaz')?.[_0x157220(0x1b8)]()[0x0], _0x5c5da3 = _0x382350['eq'](_0x362914 === _0x157220(0x3e6) ? 0x0 : _0x382350[_0x157220(0x1bc)] - 0x2)['find'](_0x157220(0x202))?.['parent']()['parent']()[0x0];
                            _0x3b24ca && _0x4b239f[_0x157220(0x245)](_0x3b24ca, { 'childList': !![] }), _0x5c5da3 && _0x4b239f[_0x157220(0x245)](_0x5c5da3, { 'attributes': !![] });
                        }
                    }, 0x32), _0x382350[_0x49a909(0x350)]('position', _0x49a909(0x19d)), _0x4e858d(_0x569bb9), _0x286fd9[_0x49a909(0x21a)][_0x49a909(0x393)]({
                        'element': this,
                        'trigger': [
                            _0x49a909(0x1a1),
                            _0x49a909(0x398),
                            _0x49a909(0x37c),
                            '.IG_DW_MAIN',
                            _0x49a909(0x231)
                        ]
                    }), _0x3a5d3c(this)['on']('click', _0x49a909(0x231), function () {
                        const _0x198feb = _0x49a909;
                        _0x2a9d0a != null ? _0x11e8a3(_0x2a9d0a) : alert(_0x198feb(0x2bc));
                    }), _0x3a5d3c(this)['on'](_0x49a909(0x185), _0x49a909(0x1a1), function () {
                        const _0x4284a3 = _0x49a909;
                        _0x26cd48(!![]), _0x286fd9['GL_username'] = _0x569bb9['attr'](_0x4284a3(0x2ac)), _0x286fd9[_0x4284a3(0x3a4)] = location[_0x4284a3(0x3fc)][_0x4284a3(0x338)](/\/$/, '')[_0x4284a3(0x35b)]('/')['at'](-0x1) || _0x569bb9['find'](_0x4284a3(0x404))['first']()[_0x4284a3(0x360)]('href')[_0x4284a3(0x35b)]('/')['at'](0x2) || _0x3a5d3c(this)['parent']()[_0x4284a3(0x1b8)]()['parent']()[_0x4284a3(0x3d2)]('div:last-child')['children'](_0x4284a3(0x354))[_0x4284a3(0x3d2)](_0x4284a3(0x2f1))[_0x4284a3(0x318)](_0x4284a3(0x404))[_0x4284a3(0x26c)]()[_0x4284a3(0x360)](_0x4284a3(0x28c))[_0x4284a3(0x35b)]('/')['at'](0x2);
                        var _0x5c224e = _0x1b371e(_0x569bb9);
                        _0x498290(!![], ![]), _0x46cf5a(_0x286fd9[_0x4284a3(0x3a4)], _0x4284a3(0x31f), '')[_0x4284a3(0x256)](() => {
                            let _0x731da2 = setInterval(() => {
                                const _0xb5c8ac = a0_0x2ded;
                                if (_0x3a5d3c(_0xb5c8ac(0x33b))[_0xb5c8ac(0x1bc)] > 0x0) {
                                    clearInterval(_0x731da2);
                                    var _0x436317 = _0x3a5d3c(_0xb5c8ac(0x1e8) + (_0x5c224e + 0x1) + '\x22]')?.['parent']()[_0xb5c8ac(0x318)](_0xb5c8ac(0x1af))?.[_0xb5c8ac(0x18c)]();
                                    _0x436317 != null && _0x436317['length'] > 0x0 ? _0x436317[_0xb5c8ac(0x1e7)](_0xb5c8ac(0x185)) : alert(_0xb5c8ac(0x2b0)), _0x26cd48(![]), _0x3a5d3c(_0xb5c8ac(0x391))[_0xb5c8ac(0x32f)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x3a5d3c(this)['on'](_0x49a909(0x185), _0x49a909(0x398), function () {
                        const _0x4dca0d = _0x49a909;
                        _0x26cd48(!![]), _0x286fd9['GL_username'] = _0x569bb9[_0x4dca0d(0x360)](_0x4dca0d(0x2ac)), _0x286fd9[_0x4dca0d(0x3a4)] = location[_0x4dca0d(0x3fc)][_0x4dca0d(0x338)](/\/$/, '')[_0x4dca0d(0x35b)]('/')['at'](-0x1) || _0x569bb9[_0x4dca0d(0x318)](_0x4dca0d(0x404))['first']()[_0x4dca0d(0x360)](_0x4dca0d(0x28c))['split']('/')['at'](0x2) || _0x3a5d3c(this)[_0x4dca0d(0x1b8)]()[_0x4dca0d(0x1b8)]()[_0x4dca0d(0x1b8)]()[_0x4dca0d(0x3d2)](_0x4dca0d(0x2f1))['children'](_0x4dca0d(0x354))[_0x4dca0d(0x3d2)]('div:last-child')[_0x4dca0d(0x318)]('a[href^=\x22/p/\x22]')['last']()[_0x4dca0d(0x360)]('href')[_0x4dca0d(0x35b)]('/')['at'](0x2);
                        var _0x1908fe = _0x1b371e(_0x569bb9);
                        _0x498290(!![], ![]), _0x46cf5a(_0x286fd9[_0x4dca0d(0x3a4)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x4dca0d(0x256)](() => {
                            let _0x4ac458 = setInterval(() => {
                                const _0x4e97e3 = a0_0x2ded;
                                if (_0x3a5d3c(_0x4e97e3(0x33b))[_0x4e97e3(0x1bc)] > 0x0) {
                                    clearInterval(_0x4ac458);
                                    var _0x45a3a7 = _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x1908fe + 0x1) + '\x22]');
                                    if (_0x444c1c[_0x4e97e3(0x40d)] && _0x444c1c[_0x4e97e3(0x3ac)])
                                        _0x36152d(_0x45a3a7[_0x4e97e3(0x18c)]()[0x0], !![]);
                                    else {
                                        let _0xa9a216 = _0x45a3a7?.[_0x4e97e3(0x360)](_0x4e97e3(0x1a3));
                                        if (_0xa9a216) {
                                            var _0x3657cc = new URL(_0xa9a216);
                                            _0x3657cc[_0x4e97e3(0x460)] = _0x4e97e3(0x2d0), _0x4c5cf2(_0x3657cc['href']);
                                        } else
                                            alert(_0x4e97e3(0x430));
                                    }
                                    _0x26cd48(![]), _0x3a5d3c(_0x4e97e3(0x391))[_0x4e97e3(0x32f)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x3a5d3c(this)['on']('click', '.IG_DW_ALL_MAIN', async function () {
                        const _0x4dddf = _0x49a909;
                        _0x286fd9['GL_username'] = _0x569bb9[_0x4dddf(0x360)](_0x4dddf(0x2ac)), _0x286fd9[_0x4dddf(0x3a4)] = location[_0x4dddf(0x3fc)]['replace'](/\/$/, '')[_0x4dddf(0x35b)]('/')['at'](-0x1) || _0x569bb9[_0x4dddf(0x318)](_0x4dddf(0x404))[_0x4dddf(0x18c)]()['attr'](_0x4dddf(0x28c))[_0x4dddf(0x35b)]('/')['at'](0x2) || _0x3a5d3c(this)[_0x4dddf(0x1b8)]()['parent']()['parent']()[_0x4dddf(0x3d2)]('div:last-child')[_0x4dddf(0x3d2)]('div')[_0x4dddf(0x3d2)](_0x4dddf(0x2f1))[_0x4dddf(0x318)](_0x4dddf(0x404))['last']()['attr']('href')[_0x4dddf(0x35b)]('/')['at'](0x2), _0x498290(_0x444c1c[_0x4dddf(0x2d8)], !![]), _0x3a5d3c('#article-id')['html'](_0x4dddf(0x36c) + _0x286fd9[_0x4dddf(0x3a4)] + '\x22>' + _0x286fd9[_0x4dddf(0x3a4)] + _0x4dddf(0x2c0)), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['each'](function () {
                            const _0x310046 = _0x4dddf;
                            _0x3a5d3c(this)[_0x310046(0x2d2)](_0x310046(0x27a)), _0x3a5d3c(this)['before']('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x3a5d3c(this)[_0x310046(0x24c)](_0x310046(0x353) + _0x57cf2e(_0x310046(0x3b7)) + _0x310046(0x3f7) + _0x44c7de[_0x310046(0x3b7)] + _0x310046(0x1c5)), _0x3a5d3c(this)[_0x310046(0x360)](_0x310046(0x2dd)) == _0x310046(0x2cf) && _0x3a5d3c(this)[_0x310046(0x24c)](_0x310046(0x45b) + _0x57cf2e('THUMBNAIL_INTRO') + _0x310046(0x437) + _0x44c7de[_0x310046(0x258)] + _0x310046(0x1c5));
                        }), _0x46cf5a(_0x286fd9['GL_postPath'], _0x4dddf(0x31f), _0x57cf2e('LOAD_BLOB_MULTIPLE'))['then'](() => {
                            let _0x1b6334 = setInterval(() => {
                                const _0x22fdb = a0_0x2ded;
                                _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['length'] > 0x0 && (clearInterval(_0x1b6334), _0x3a5d3c(_0x22fdb(0x33b))[_0x22fdb(0x27f)](function () {
                                    const _0x1257f3 = _0x22fdb;
                                    _0x3a5d3c(this)[_0x1257f3(0x1e7)](_0x1257f3(0x185));
                                }), _0x3a5d3c(_0x22fdb(0x391))[_0x22fdb(0x32f)]());
                            }, 0xfa);
                        });
                    }), _0x3a5d3c(this)['on'](_0x49a909(0x185), _0x49a909(0x456), async function () {
                        const _0x4c3a91 = _0x49a909;
                        _0x286fd9[_0x4c3a91(0x43f)] = _0x569bb9[_0x4c3a91(0x360)]('data-username'), _0x286fd9[_0x4c3a91(0x3a4)] = location['pathname']['replace'](/\/$/, '')['split']('/')['at'](-0x1) || _0x569bb9['find'](_0x4c3a91(0x404))[_0x4c3a91(0x18c)]()[_0x4c3a91(0x360)](_0x4c3a91(0x28c))['split']('/')['at'](0x2) || _0x3a5d3c(this)[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x1b8)]()['parent']()[_0x4c3a91(0x3d2)](_0x4c3a91(0x2f1))[_0x4c3a91(0x3d2)](_0x4c3a91(0x354))[_0x4c3a91(0x3d2)]('div:last-child')[_0x4c3a91(0x318)](_0x4c3a91(0x404))['last']()[_0x4c3a91(0x360)](_0x4c3a91(0x28c))[_0x4c3a91(0x35b)]('/')['at'](0x2), _0x498290(_0x444c1c[_0x4c3a91(0x2d8)], !![]), _0x3a5d3c('#article-id')[_0x4c3a91(0x399)](_0x4c3a91(0x36c) + _0x286fd9[_0x4c3a91(0x3a4)] + '\x22>' + _0x286fd9['GL_postPath'] + _0x4c3a91(0x2c0));
                        if (_0x444c1c['DIRECT_DOWNLOAD_VISIBLE_RESOURCE']) {
                            _0x26cd48(!![]), _0x480af2(!![]);
                            var _0x558d29 = _0x1b371e(_0x3a5d3c(this)[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x1b8)]());
                            _0x46cf5a(_0x286fd9[_0x4c3a91(0x3a4)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x4c3a91(0x256)](() => {
                                let _0x37552f = setInterval(() => {
                                    const _0x2c537d = a0_0x2ded;
                                    if (_0x3a5d3c(_0x2c537d(0x33b))['length'] > 0x0) {
                                        clearInterval(_0x37552f);
                                        var _0x4ba64b = _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x558d29 + 0x1) + '\x22]')?.[_0x2c537d(0x360)](_0x2c537d(0x1a3));
                                        _0x4ba64b ? (_0x26cd48(![]), _0x3a5d3c(_0x2c537d(0x1e8) + (_0x558d29 + 0x1) + '\x22]')?.[_0x2c537d(0x1e7)](_0x2c537d(0x185))) : alert(_0x2c537d(0x1b9)), _0x3a5d3c(_0x2c537d(0x391))['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x444c1c[_0x4c3a91(0x2d8)]) {
                            var _0x306c64 = 0x0, _0x5d13c7 = _0x3a5d3c(this)[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x318)](_0x164ad4)[_0x4c3a91(0x1bc)], _0x546c5f = _0x444c1c[_0x4c3a91(0x2a1)], _0x5b5e7f = new Date(_0x3a5d3c(this)[_0x4c3a91(0x1b8)]()['parent']()[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x318)](_0x4c3a91(0x30b))[_0x4c3a91(0x3e4)](function () {
                                    const _0x209c32 = _0x4c3a91;
                                    let _0x2ed481 = _0x3a5d3c(this)['parents'](_0x209c32(0x3e1))[_0x209c32(0x360)](_0x209c32(0x28c));
                                    return _0x2ed481?.[_0x209c32(0x26b)](_0x209c32(0x422)) || _0x2ed481?.[_0x209c32(0x261)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })['first']()['attr'](_0x4c3a91(0x265)))['getTime']();
                            if (_0x5d13c7)
                                _0x3a5d3c(this)[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x1b8)]()['find'](_0x164ad4)[_0x4c3a91(0x27f)](function () {
                                    const _0x235939 = _0x4c3a91;
                                    let _0x212123 = _0x3a5d3c(this)[_0x235939(0x1b8)]()[_0x235939(0x1b8)]()['parent']()[_0x235939(0x318)]('video');
                                    _0x212123 && _0x212123[_0x235939(0x360)](_0x235939(0x24e)) && (_0x546c5f = !![]);
                                }), _0x546c5f || _0x444c1c[_0x4c3a91(0x40d)] ? _0x46cf5a(_0x286fd9[_0x4c3a91(0x3a4)], _0x4c3a91(0x31f), _0x57cf2e(_0x4c3a91(0x29c))) : (_0x3a5d3c(this)[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x318)](_0x164ad4)[_0x4c3a91(0x27f)](function () {
                                    const _0x5b4c4f = _0x4c3a91;
                                    _0x306c64++;
                                    let _0x1263e4 = _0x3a5d3c(this)[_0x5b4c4f(0x318)](_0x5b4c4f(0x2cf)), _0x5f59c8 = _0x3a5d3c(this)['find']('._aagv\x20img'), _0x3d35f1 = _0x5f59c8[_0x5b4c4f(0x360)](_0x5b4c4f(0x453)) ? _0x5f59c8[_0x5b4c4f(0x360)]('srcset')['split']('\x20')[0x0] : _0x5f59c8[_0x5b4c4f(0x360)](_0x5b4c4f(0x24e));
                                    _0x1263e4 && _0x1263e4['attr'](_0x5b4c4f(0x24e)) && (_0x546c5f = !![]), _0x5f59c8 && _0x3d35f1 && _0x3a5d3c(_0x5b4c4f(0x31f))[_0x5b4c4f(0x2fe)](_0x5b4c4f(0x305) + _0x5b5e7f + _0x5b4c4f(0x299) + _0x286fd9['GL_postPath'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x306c64 + _0x5b4c4f(0x33e) + _0x3d35f1 + _0x5b4c4f(0x1d2) + _0x3d35f1 + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x57cf2e(_0x5b4c4f(0x425)) + _0x5b4c4f(0x340) + _0x306c64 + _0x5b4c4f(0x24d));
                                }), _0x546c5f && _0x46cf5a(_0x286fd9[_0x4c3a91(0x3a4)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x57cf2e('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x444c1c[_0x4c3a91(0x40d)])
                                    _0x46cf5a(_0x286fd9[_0x4c3a91(0x3a4)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x57cf2e('LOAD_BLOB_MULTIPLE'));
                                else {
                                    _0x306c64++;
                                    let _0x2c34df = _0x3a5d3c(this)[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x1b8)]()['parent']()[_0x4c3a91(0x318)]('video'), _0x470a70 = _0x3a5d3c(this)[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x1b8)]()[_0x4c3a91(0x318)](_0x4c3a91(0x244)), _0x14e850 = _0x470a70[_0x4c3a91(0x360)]('srcset') ? _0x470a70[_0x4c3a91(0x360)]('srcset')[_0x4c3a91(0x35b)]('\x20')[0x0] : _0x470a70['attr'](_0x4c3a91(0x24e));
                                    _0x2c34df && _0x2c34df['attr'](_0x4c3a91(0x24e)) && _0x46cf5a(_0x286fd9[_0x4c3a91(0x3a4)], _0x4c3a91(0x31f), _0x57cf2e(_0x4c3a91(0x359))), _0x470a70 && _0x14e850 && _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY')[_0x4c3a91(0x2fe)](_0x4c3a91(0x305) + _0x5b5e7f + _0x4c3a91(0x299) + _0x286fd9[_0x4c3a91(0x3a4)] + _0x4c3a91(0x34a) + _0x306c64 + _0x4c3a91(0x1ca) + _0x14e850 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x14e850 + _0x4c3a91(0x1f7) + _0x57cf2e(_0x4c3a91(0x425)) + '</span>\x20' + _0x306c64 + _0x4c3a91(0x24d));
                                }
                            }
                        }
                        _0x3a5d3c(_0x4c3a91(0x33b))['each'](function () {
                            const _0x17f7fc = _0x4c3a91;
                            _0x3a5d3c(this)[_0x17f7fc(0x2d2)](_0x17f7fc(0x27a)), _0x3a5d3c(this)['before']('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x3a5d3c(this)[_0x17f7fc(0x24c)](_0x17f7fc(0x353) + _0x57cf2e(_0x17f7fc(0x3b7)) + '\x22\x20class=\x22newTab\x22>' + _0x44c7de['NEW_TAB'] + '</div>'), _0x3a5d3c(this)[_0x17f7fc(0x360)](_0x17f7fc(0x2dd)) == _0x17f7fc(0x2cf) && _0x3a5d3c(this)[_0x17f7fc(0x24c)](_0x17f7fc(0x45b) + _0x57cf2e(_0x17f7fc(0x3c1)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x44c7de['THUMBNAIL'] + _0x17f7fc(0x1c5));
                        }), _0x444c1c['DIRECT_DOWNLOAD_ALL'] && _0x46cf5a(_0x286fd9['GL_postPath'], _0x4c3a91(0x31f), _0x57cf2e(_0x4c3a91(0x29c)))[_0x4c3a91(0x256)](() => {
                            let _0x18fc39 = setInterval(() => {
                                const _0xc446c = a0_0x2ded;
                                _0x3a5d3c(_0xc446c(0x33b))[_0xc446c(0x1bc)] > 0x0 && (clearInterval(_0x18fc39), _0x3a5d3c(_0xc446c(0x33b))[_0xc446c(0x27f)](function () {
                                    const _0x11b916 = _0xc446c;
                                    _0x3a5d3c(this)[_0x11b916(0x1e7)](_0x11b916(0x185));
                                }), _0x3a5d3c(_0xc446c(0x391))[_0xc446c(0x32f)]());
                            }, 0xfa);
                        });
                    });
                    var _0x1c65d8 = _0x3a5d3c(this)[_0x49a909(0x318)](_0x49a909(0x1c1))['first']()['text']() || _0x3a5d3c(this)[_0x49a909(0x318)](_0x49a909(0x436))['filter'](function () {
                        const _0x36d830 = _0x49a909;
                        return _0x3a5d3c(this)?.[_0x36d830(0x44b)]()?.[_0x36d830(0x1bc)] > 0x0;
                    })[_0x49a909(0x18c)]()['text']();
                    _0x3a5d3c(this)[_0x49a909(0x360)](_0x49a909(0x1fc), _0x49a909(0x1f5)), _0x3a5d3c(this)['attr']('data-username', _0x1c65d8);
                }
            });
        }
        function _0x195342(_0x3198ca) {
            const _0x409eee = _0x5c99b4;
            var _0x2a4b48 = _0x3198ca[_0x409eee(0x448)] ?? _0x3198ca;
            return _0x2a4b48['owner'] == null && _0x2a4b48['user'] != null && (_0x2a4b48[_0x409eee(0x3ec)] = _0x2a4b48[_0x409eee(0x3d7)]), _0x2a4b48[_0x409eee(0x3ec)] == null && (_0x1d76a4(_0x409eee(0x188), _0x409eee(0x320)), alert(_0x409eee(0x3b6))), _0x2a4b48;
        }
        async function _0x46cf5a(_0x440e86, _0x5208f5, _0x46c4ed) {
            const _0x2d9ed6 = _0x5c99b4;
            try {
                _0x3a5d3c(_0x5208f5 + '\x20a')['remove'](), _0x3a5d3c(_0x5208f5)[_0x2d9ed6(0x2fe)](_0x2d9ed6(0x2af) + _0x46c4ed + _0x2d9ed6(0x3ad));
                let _0x5a4133 = await _0x10c5f5(_0x440e86), _0x146fdf = _0x195342(_0x5a4133['data']);
                if (_0x5a4133[_0x2d9ed6(0x1a4)] === 'query_hash') {
                    let _0x4c77c9 = 0x1;
                    _0x146fdf[_0x2d9ed6(0x1d4)] == _0x2d9ed6(0x1c0) && _0x146fdf[_0x2d9ed6(0x44a)] && (_0x3a5d3c(_0x5208f5)[_0x2d9ed6(0x2fe)](_0x2d9ed6(0x39c) + _0x146fdf['id'] + _0x2d9ed6(0x257) + _0x146fdf[_0x2d9ed6(0x1d3)] + _0x2d9ed6(0x39b) + _0x146fdf[_0x2d9ed6(0x2dc)] + _0x2d9ed6(0x357) + _0x146fdf['owner'][_0x2d9ed6(0x2b5)] + '\x22\x20data-globalIndex=\x22' + _0x4c77c9 + _0x2d9ed6(0x33e) + _0x146fdf[_0x2d9ed6(0x44a)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x146fdf[_0x2d9ed6(0x3e9)][0x1][_0x2d9ed6(0x24e)] + _0x2d9ed6(0x3a9) + _0x57cf2e('VID') + _0x2d9ed6(0x340) + _0x4c77c9 + '\x20-</a>'), _0x4c77c9++);
                    _0x146fdf[_0x2d9ed6(0x1d4)] == 'GraphImage' && (_0x3a5d3c(_0x5208f5)[_0x2d9ed6(0x2fe)](_0x2d9ed6(0x39c) + _0x146fdf['id'] + _0x2d9ed6(0x257) + _0x146fdf[_0x2d9ed6(0x1d3)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x146fdf[_0x2d9ed6(0x2dc)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x146fdf[_0x2d9ed6(0x3ec)][_0x2d9ed6(0x2b5)] + '\x22\x20data-globalIndex=\x22' + _0x4c77c9 + _0x2d9ed6(0x33e) + _0x146fdf[_0x2d9ed6(0x3e9)][_0x146fdf[_0x2d9ed6(0x3e9)][_0x2d9ed6(0x1bc)] - 0x1][_0x2d9ed6(0x24e)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x146fdf['display_resources'][0x1][_0x2d9ed6(0x24e)] + _0x2d9ed6(0x1f7) + _0x57cf2e(_0x2d9ed6(0x425)) + _0x2d9ed6(0x340) + _0x4c77c9 + _0x2d9ed6(0x24d)), _0x4c77c9++);
                    if (_0x146fdf['__typename'] == _0x2d9ed6(0x270) && _0x146fdf[_0x2d9ed6(0x33a)])
                        for (let _0x31c44f of _0x146fdf[_0x2d9ed6(0x33a)]['edges']) {
                            _0x31c44f[_0x2d9ed6(0x1dc)][_0x2d9ed6(0x1d4)] == 'GraphVideo' && _0x3a5d3c(_0x5208f5)['append'](_0x2d9ed6(0x39c) + _0x31c44f[_0x2d9ed6(0x1dc)]['id'] + _0x2d9ed6(0x257) + _0x146fdf['taken_at_timestamp'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x146fdf[_0x2d9ed6(0x2dc)] + _0x2d9ed6(0x357) + _0x146fdf[_0x2d9ed6(0x3ec)][_0x2d9ed6(0x2b5)] + _0x2d9ed6(0x352) + _0x4c77c9 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x31c44f[_0x2d9ed6(0x1dc)][_0x2d9ed6(0x44a)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x31c44f[_0x2d9ed6(0x1dc)][_0x2d9ed6(0x3e9)][0x1][_0x2d9ed6(0x24e)] + _0x2d9ed6(0x415) + _0x57cf2e('VID') + _0x2d9ed6(0x340) + _0x4c77c9 + _0x2d9ed6(0x24d)), _0x31c44f['node'][_0x2d9ed6(0x1d4)] == _0x2d9ed6(0x331) && _0x3a5d3c(_0x5208f5)[_0x2d9ed6(0x2fe)](_0x2d9ed6(0x39c) + _0x31c44f[_0x2d9ed6(0x1dc)]['id'] + '\x22\x20datetime=\x22' + _0x146fdf[_0x2d9ed6(0x1d3)] + _0x2d9ed6(0x39b) + _0x146fdf[_0x2d9ed6(0x2dc)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x146fdf[_0x2d9ed6(0x3ec)]['username'] + _0x2d9ed6(0x352) + _0x4c77c9 + _0x2d9ed6(0x33e) + _0x31c44f['node'][_0x2d9ed6(0x3e9)][_0x31c44f[_0x2d9ed6(0x1dc)]['display_resources'][_0x2d9ed6(0x1bc)] - 0x1][_0x2d9ed6(0x24e)] + _0x2d9ed6(0x1d2) + _0x31c44f[_0x2d9ed6(0x1dc)][_0x2d9ed6(0x3e9)][0x1]['src'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x57cf2e(_0x2d9ed6(0x425)) + _0x2d9ed6(0x340) + _0x4c77c9 + _0x2d9ed6(0x24d)), _0x4c77c9++;
                        }
                } else {
                    if (_0x146fdf[_0x2d9ed6(0x327)])
                        _0x1d76a4(_0x2d9ed6(0x327)), _0x146fdf[_0x2d9ed6(0x327)][_0x2d9ed6(0x2d1)]((_0x2d48e1, _0x1fa46a) => {
                            const _0x42ca56 = _0x2d9ed6;
                            let _0x311533 = _0x1fa46a + 0x1;
                            _0x2d48e1[_0x42ca56(0x312)] == null ? (_0x2d48e1['image_versions2'][_0x42ca56(0x403)][_0x42ca56(0x1bd)](function (_0x30e72e, _0xf27d33) {
                                const _0x4020a8 = _0x42ca56;
                                let _0x49362e = new URL(_0x30e72e[_0x4020a8(0x446)])['searchParams'][_0x4020a8(0x309)](_0x4020a8(0x28e)), _0x12cf6d = new URL(_0xf27d33['url'])[_0x4020a8(0x34e)]['get'](_0x4020a8(0x28e));
                                if (_0x49362e && _0x12cf6d) {
                                    if (_0x49362e[_0x4020a8(0x1bc)] > _0x12cf6d[_0x4020a8(0x1bc)])
                                        return 0x1;
                                    if (_0x49362e[_0x4020a8(0x1bc)] < _0x12cf6d['length'])
                                        return -0x1;
                                } else {
                                    if (_0x30e72e[_0x4020a8(0x1c7)] < _0xf27d33[_0x4020a8(0x1c7)])
                                        return 0x1;
                                    if (_0x30e72e[_0x4020a8(0x1c7)] > _0xf27d33[_0x4020a8(0x1c7)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x3a5d3c(_0x5208f5)[_0x42ca56(0x2fe)](_0x42ca56(0x39c) + _0x2d48e1['pk'] + _0x42ca56(0x257) + _0x2d48e1[_0x42ca56(0x2a5)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x146fdf[_0x42ca56(0x409)] + _0x42ca56(0x2e3) + _0x146fdf[_0x42ca56(0x3ec)]['username'] + _0x42ca56(0x352) + _0x311533 + _0x42ca56(0x33e) + _0x2d48e1[_0x42ca56(0x20a)][_0x42ca56(0x403)][0x0][_0x42ca56(0x446)] + _0x42ca56(0x1d2) + _0x2d48e1[_0x42ca56(0x20a)]['candidates'][0x0][_0x42ca56(0x446)] + _0x42ca56(0x1f7) + _0x57cf2e(_0x42ca56(0x425)) + '</span>\x20' + _0x311533 + _0x42ca56(0x24d))) : _0x3a5d3c(_0x5208f5)[_0x42ca56(0x2fe)](_0x42ca56(0x39c) + _0x2d48e1['pk'] + _0x42ca56(0x257) + _0x2d48e1['taken_at'] + _0x42ca56(0x39b) + _0x146fdf[_0x42ca56(0x409)] + _0x42ca56(0x357) + _0x146fdf[_0x42ca56(0x3ec)][_0x42ca56(0x2b5)] + _0x42ca56(0x352) + _0x311533 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x2d48e1[_0x42ca56(0x312)][0x0][_0x42ca56(0x446)] + _0x42ca56(0x1d2) + _0x2d48e1[_0x42ca56(0x20a)]['candidates'][0x0][_0x42ca56(0x446)] + _0x42ca56(0x3a9) + _0x57cf2e('VID') + _0x42ca56(0x340) + _0x311533 + _0x42ca56(0x24d));
                        });
                    else {
                        let _0x2d8bc5 = 0x1;
                        _0x146fdf[_0x2d9ed6(0x312)] == null ? (_0x146fdf[_0x2d9ed6(0x20a)][_0x2d9ed6(0x403)][_0x2d9ed6(0x1bd)](function (_0xbda77c, _0x195dc8) {
                            const _0x5bdb18 = _0x2d9ed6;
                            let _0x44789b = new URL(_0xbda77c['url'])[_0x5bdb18(0x34e)][_0x5bdb18(0x309)](_0x5bdb18(0x28e)), _0x1d4810 = new URL(_0x195dc8[_0x5bdb18(0x446)])['searchParams'][_0x5bdb18(0x309)]('stp');
                            if (_0x44789b && _0x1d4810) {
                                if (_0x44789b[_0x5bdb18(0x1bc)] > _0x1d4810[_0x5bdb18(0x1bc)])
                                    return 0x1;
                                if (_0x44789b[_0x5bdb18(0x1bc)] < _0x1d4810[_0x5bdb18(0x1bc)])
                                    return -0x1;
                            } else {
                                if (_0xbda77c[_0x5bdb18(0x1c7)] < _0x195dc8['width'])
                                    return 0x1;
                                if (_0xbda77c[_0x5bdb18(0x1c7)] > _0x195dc8[_0x5bdb18(0x1c7)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x3a5d3c(_0x5208f5)[_0x2d9ed6(0x2fe)]('<a\x20media-id=\x22' + _0x146fdf['pk'] + _0x2d9ed6(0x257) + _0x146fdf[_0x2d9ed6(0x2a5)] + _0x2d9ed6(0x39b) + _0x146fdf[_0x2d9ed6(0x409)] + _0x2d9ed6(0x2e3) + _0x146fdf[_0x2d9ed6(0x3ec)][_0x2d9ed6(0x2b5)] + _0x2d9ed6(0x352) + _0x2d8bc5 + _0x2d9ed6(0x33e) + _0x146fdf[_0x2d9ed6(0x20a)][_0x2d9ed6(0x403)][0x0]['url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x146fdf[_0x2d9ed6(0x20a)]['candidates'][0x0]['url'] + _0x2d9ed6(0x1f7) + _0x57cf2e('IMG') + _0x2d9ed6(0x340) + _0x2d8bc5 + _0x2d9ed6(0x24d))) : _0x3a5d3c(_0x5208f5)[_0x2d9ed6(0x2fe)](_0x2d9ed6(0x39c) + _0x146fdf['pk'] + _0x2d9ed6(0x257) + _0x146fdf[_0x2d9ed6(0x2a5)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x146fdf[_0x2d9ed6(0x409)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x146fdf[_0x2d9ed6(0x3ec)][_0x2d9ed6(0x2b5)] + _0x2d9ed6(0x352) + _0x2d8bc5 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x146fdf[_0x2d9ed6(0x312)][0x0][_0x2d9ed6(0x446)] + _0x2d9ed6(0x1d2) + _0x146fdf[_0x2d9ed6(0x20a)][_0x2d9ed6(0x403)][0x0][_0x2d9ed6(0x446)] + _0x2d9ed6(0x3a9) + _0x57cf2e(_0x2d9ed6(0x37b)) + _0x2d9ed6(0x340) + _0x2d8bc5 + '\x20-</a>');
                    }
                }
                _0x3a5d3c(_0x2d9ed6(0x277))[_0x2d9ed6(0x32f)](), _0x3a5d3c(_0x2d9ed6(0x33b))[_0x2d9ed6(0x27f)](function () {
                    const _0x233a6b = _0x2d9ed6;
                    _0x3a5d3c(this)['wrap'](_0x233a6b(0x27a)), _0x3a5d3c(this)['before'](_0x233a6b(0x341)), _0x3a5d3c(this)[_0x233a6b(0x24c)](_0x233a6b(0x353) + _0x57cf2e('NEW_TAB') + _0x233a6b(0x3f7) + _0x44c7de['NEW_TAB'] + _0x233a6b(0x1c5)), _0x3a5d3c(this)[_0x233a6b(0x360)]('data-name') == 'video' && _0x3a5d3c(this)[_0x233a6b(0x24c)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x57cf2e(_0x233a6b(0x3c1)) + _0x233a6b(0x437) + _0x44c7de[_0x233a6b(0x258)] + _0x233a6b(0x1c5));
                });
            } catch (_0xc5fa27) {
                _0x1d76a4(_0x2d9ed6(0x227), _0xc5fa27);
            }
            ;
        }
        function _0x1b371e(_0x54995f) {
            const _0x56d1a8 = _0x5c99b4;
            var _0x40145b = 0x0, _0x5e1ee0 = _0x54995f['find'](_0x56d1a8(0x43c));
            return (_0x5e1ee0 == null || !_0x5e1ee0['hasClass'](_0x56d1a8(0x410))) && (_0x5e1ee0 = _0x54995f[_0x56d1a8(0x318)](_0x56d1a8(0x248))['eq'](0x0)[_0x56d1a8(0x3d2)](_0x56d1a8(0x354))), _0x5e1ee0['filter'](_0x56d1a8(0x1e5))[_0x56d1a8(0x27f)](function (_0x2daea2) {
                const _0x5286a9 = _0x56d1a8;
                _0x3a5d3c(this)[_0x5286a9(0x2ff)]('_acnf') && (_0x40145b = _0x2daea2);
            }), _0x40145b;
        }
        async function _0x13cd29(_0x483080) {
            const _0x5393e7 = _0x5c99b4;
            if (_0x483080) {
                _0x26cd48(!![]);
                let _0x1049a3 = new Date()[_0x5393e7(0x38c)](), _0x2c5d7b = Math[_0x5393e7(0x1b0)](_0x1049a3 / 0x3e8), _0x1ea0b9 = location[_0x5393e7(0x3fc)][_0x5393e7(0x234)](/(reels|tagged)\/$/ig, '')[_0x5393e7(0x35b)]('/')[_0x5393e7(0x3e4)](_0x2d4674 => _0x2d4674[_0x5393e7(0x1bc)] > 0x0)['at'](-0x1), _0x5ad909 = await _0x56fdc8(_0x1ea0b9);
                try {
                    let _0x59dbe3 = await _0x1c34d4(_0x5ad909[_0x5393e7(0x3d7)]['pk']);
                    _0x30831b(_0x59dbe3, _0x1ea0b9, _0x5393e7(0x237), _0x2c5d7b, _0x5393e7(0x230));
                } catch (_0x52af74) {
                    _0x30831b(_0x5ad909['user'][_0x5393e7(0x2f4)], _0x1ea0b9, 'avatar', _0x2c5d7b, _0x5393e7(0x230));
                }
                _0x26cd48(![]);
            } else {
                if (!_0x3a5d3c(_0x5393e7(0x288))[_0x5393e7(0x1bc)]) {
                    let _0x2ec1c0 = setInterval(() => {
                        const _0x16a762 = _0x5393e7;
                        if (_0x3a5d3c('.IG_DWPROFILE')['length']) {
                            clearInterval(_0x2ec1c0);
                            return;
                        }
                        _0x3a5d3c(_0x16a762(0x429))[_0x16a762(0x1b8)]()[_0x16a762(0x1b8)]()[_0x16a762(0x2fe)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x57cf2e('DW') + _0x16a762(0x458) + _0x44c7de[_0x16a762(0x274)] + _0x16a762(0x1c5)), _0x3a5d3c(_0x16a762(0x429))[_0x16a762(0x1b8)]()[_0x16a762(0x1b8)]()['css'](_0x16a762(0x411), _0x16a762(0x19d)), _0x3a5d3c('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')[_0x16a762(0x1b8)]()[_0x16a762(0x1b8)]()[_0x16a762(0x1b8)]()[_0x16a762(0x2fe)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x57cf2e('DW') + _0x16a762(0x458) + _0x44c7de[_0x16a762(0x274)] + _0x16a762(0x1c5)), _0x3a5d3c('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')['parent']()['parent']()[_0x16a762(0x1b8)]()[_0x16a762(0x350)](_0x16a762(0x411), _0x16a762(0x19d));
                    }, 0x96);
                }
            }
        }
        async function _0x424245(_0x39cdb1, _0x28b2b0, _0x254361) {
            const _0x4950da = _0x5c99b4;
            if (_0x39cdb1) {
                _0x26cd48(!![]);
                let _0xd11813 = location[_0x4950da(0x28c)][_0x4950da(0x35b)]('?')['at'](0x0)[_0x4950da(0x35b)]('instagram.com/reels/')['at'](-0x1)['replaceAll']('/', ''), _0x314fb4 = await _0x10c5f5(_0xd11813), _0x57ffa5 = _0x195342(_0x314fb4['data']), _0x58e2a2 = new Date()[_0x4950da(0x38c)]();
                _0x444c1c[_0x4950da(0x25b)] && (_0x314fb4[_0x4950da(0x1a4)] === _0x4950da(0x240) ? _0x58e2a2 = _0x57ffa5[_0x4950da(0x448)][_0x4950da(0x1d3)] : _0x58e2a2 = _0x57ffa5[_0x4950da(0x2a5)]);
                if (_0x314fb4[_0x4950da(0x1a4)] === _0x4950da(0x240)) {
                    if (_0x28b2b0 && _0x57ffa5[_0x4950da(0x448)][_0x4950da(0x293)]) {
                        if (_0x254361)
                            _0x4c5cf2(_0x57ffa5['shortcode_media']['video_url']);
                        else {
                            let _0xb367a6 = _0x4950da(0x296);
                            _0x30831b(_0x57ffa5[_0x4950da(0x448)][_0x4950da(0x44a)], _0x57ffa5[_0x4950da(0x448)][_0x4950da(0x3ec)][_0x4950da(0x2b5)], _0x4950da(0x3fb), _0x58e2a2, _0xb367a6, _0xd11813);
                        }
                    } else {
                        if (_0x254361)
                            _0x4c5cf2(_0x57ffa5['shortcode_media'][_0x4950da(0x3e9)]['at'](-0x1)[_0x4950da(0x24e)]);
                        else {
                            let _0x20bb91 = 'jpg';
                            _0x30831b(_0x57ffa5[_0x4950da(0x448)][_0x4950da(0x3e9)]['at'](-0x1)[_0x4950da(0x24e)], _0x57ffa5[_0x4950da(0x448)]['owner'][_0x4950da(0x2b5)], _0x4950da(0x3fb), _0x58e2a2, _0x20bb91, _0xd11813);
                        }
                    }
                } else {
                    if (_0x28b2b0 && _0x57ffa5[_0x4950da(0x312)] != null) {
                        if (_0x254361)
                            _0x4c5cf2(_0x57ffa5[_0x4950da(0x312)][0x0][_0x4950da(0x446)]);
                        else {
                            let _0x55864b = _0x4950da(0x296);
                            _0x30831b(_0x57ffa5[_0x4950da(0x312)][0x0]['url'], _0x57ffa5[_0x4950da(0x3ec)][_0x4950da(0x2b5)], 'reels', _0x58e2a2, _0x55864b, _0xd11813);
                        }
                    } else {
                        if (_0x254361)
                            _0x4c5cf2(_0x57ffa5[_0x4950da(0x20a)][_0x4950da(0x403)][0x0]['url']);
                        else {
                            let _0x53577c = _0x4950da(0x230);
                            _0x30831b(_0x57ffa5['image_versions2'][_0x4950da(0x403)][0x0]['url'], _0x57ffa5['owner'][_0x4950da(0x2b5)], _0x4950da(0x3fb), _0x58e2a2, _0x53577c, _0xd11813);
                        }
                    }
                }
                _0x26cd48(![]);
            } else
                var _0x50f33c = setInterval(() => {
                    const _0x563c5f = _0x4950da;
                    _0x3a5d3c(_0x563c5f(0x1c8))[_0x563c5f(0x1bc)] > 0x0 && (clearInterval(_0x50f33c), _0x444c1c[_0x563c5f(0x454)] && (_0x3a5d3c(_0x563c5f(0x2f0))['remove'](), _0x3a5d3c(_0x563c5f(0x38e))[_0x563c5f(0x2fe)](_0x563c5f(0x1e9)), _0x3a5d3c(_0x563c5f(0x21c))['append'](_0x563c5f(0x3d8)), _0x3a5d3c(_0x563c5f(0x21c))[_0x563c5f(0x2fe)](_0x563c5f(0x3d9)), _0x3a5d3c(_0x563c5f(0x2ce))['on'](_0x563c5f(0x185), function () {
                        const _0x27cec8 = _0x563c5f;
                        _0x3a5d3c(_0x27cec8(0x40e))[0x0]['scrollBy']({
                            'top': -0x1e,
                            'behavior': _0x27cec8(0x21b)
                        });
                    }), _0x3a5d3c(_0x563c5f(0x41e))['on']('click', function () {
                        const _0x2321db = _0x563c5f;
                        _0x3a5d3c('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0]['scrollBy']({
                            'top': 0x1e,
                            'behavior': _0x2321db(0x21b)
                        });
                    })), _0x3a5d3c(_0x563c5f(0x22e))['children']('div')[_0x563c5f(0x27f)](function () {
                        const _0x4ccf16 = _0x563c5f;
                        if (_0x3a5d3c(this)[_0x4ccf16(0x3d2)]()[_0x4ccf16(0x1bc)] > 0x0) {
                            if (!_0x3a5d3c(this)[_0x4ccf16(0x3d2)]()[_0x4ccf16(0x318)](_0x4ccf16(0x26f))[_0x4ccf16(0x1bc)]) {
                                var _0x185dd4 = _0x3a5d3c(this);
                                _0x3a5d3c(this)[_0x4ccf16(0x3d2)]()[_0x4ccf16(0x350)]('position', 'relative'), _0x3a5d3c(this)[_0x4ccf16(0x3d2)]()[_0x4ccf16(0x2fe)](_0x4ccf16(0x3e3) + _0x57cf2e('DW') + _0x4ccf16(0x2cd) + _0x44c7de['DOWNLOAD'] + '</div>'), _0x3a5d3c(this)[_0x4ccf16(0x3d2)]()[_0x4ccf16(0x2fe)](_0x4ccf16(0x353) + _0x57cf2e(_0x4ccf16(0x3b7)) + _0x4ccf16(0x1df) + _0x44c7de['NEW_TAB'] + _0x4ccf16(0x1c5)), _0x3a5d3c(this)[_0x4ccf16(0x3d2)]()[_0x4ccf16(0x2fe)](_0x4ccf16(0x45b) + _0x57cf2e('THUMBNAIL_INTRO') + _0x4ccf16(0x41a) + _0x44c7de[_0x4ccf16(0x258)] + '</div>');
                                _0x444c1c[_0x4ccf16(0x433)] && _0x3a5d3c(this)[_0x4ccf16(0x318)](_0x4ccf16(0x2cf))['each'](function () {
                                    const _0x2702b6 = _0x4ccf16;
                                    _0x3a5d3c(this)['on'](_0x2702b6(0x3a6), function () {
                                        const _0x5b83a0 = _0x2702b6;
                                        if (!_0x3a5d3c(this)[_0x5b83a0(0x27c)]('loop')) {
                                            let _0x138808 = _0x3a5d3c(this)[_0x5b83a0(0x43a)]()[_0x5b83a0(0x318)](_0x5b83a0(0x2fb))['parents']('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x138808[_0x5b83a0(0x1bc)] > 0x0 ? (_0x3a5d3c(this)[_0x5b83a0(0x360)]('data-loop', !![]), _0x138808['trigger']('click'), _0x1d76a4('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()')) : (_0x3a5d3c(this)[_0x5b83a0(0x360)](_0x5b83a0(0x20d), !![]), _0x3a5d3c(this)[_0x5b83a0(0x1b8)]()[_0x5b83a0(0x318)](_0x5b83a0(0x3ee))[_0x5b83a0(0x287)](_0x5b83a0(0x215)), this[_0x5b83a0(0x301)](), _0x1d76a4(_0x5b83a0(0x22a)));
                                        }
                                    });
                                });
                                _0x444c1c[_0x4ccf16(0x223)] && _0x3a5d3c(this)[_0x4ccf16(0x318)](_0x4ccf16(0x2cf))[_0x4ccf16(0x27f)](function () {
                                    const _0x490179 = _0x4ccf16;
                                    if (!_0x3a5d3c(this)[_0x490179(0x27c)](_0x490179(0x1dd))) {
                                        let _0x4bb9e8 = _0x3a5d3c(this);
                                        _0x1d76a4(_0x490179(0x344)), _0x444c1c[_0x490179(0x3e8)] && (this['volume'] = _0x286fd9[_0x490179(0x2bb)], _0x3a5d3c(this)['on']('loadstart', function () {
                                            const _0x251ca9 = _0x490179;
                                            this['volume'] = _0x286fd9[_0x251ca9(0x2bb)];
                                        })), _0x3a5d3c(this)['on'](_0x490179(0x2e9), function (_0x4272c8) {
                                            const _0x5b732b = _0x490179;
                                            _0x4272c8[_0x5b732b(0x2aa)](), _0x4bb9e8[_0x5b732b(0x350)](_0x5b732b(0x1f3), '-1'), _0x4bb9e8['removeAttr'](_0x5b732b(0x1dd));
                                        }), _0x3a5d3c(this)[_0x490179(0x1b8)]()[_0x490179(0x318)](_0x490179(0x214))[_0x490179(0x3e4)](function () {
                                            const _0x1b40df = _0x490179;
                                            return _0x3a5d3c(this)[_0x1b40df(0x1b8)](_0x1b40df(0x290))[_0x1b40df(0x1bc)] > 0x0 && _0x3a5d3c(this)['css'](_0x1b40df(0x36a)) === _0x1b40df(0x193) && _0x3a5d3c(this)[_0x1b40df(0x360)](_0x1b40df(0x215)) != null;
                                        })[_0x490179(0x18c)]()['on'](_0x490179(0x2e9), function (_0x45a3b) {
                                            const _0x52f1d3 = _0x490179;
                                            _0x45a3b[_0x52f1d3(0x2aa)](), _0x4bb9e8['css'](_0x52f1d3(0x1f3), '2'), _0x4bb9e8[_0x52f1d3(0x360)]('controls', !![]);
                                        }), _0x3a5d3c(this)['on'](_0x490179(0x432), function () {
                                            const _0x12e334 = _0x490179;
                                            let _0xef6773 = _0x3a5d3c(this)['parent']()[_0x12e334(0x318)]('video\x20+\x20div\x20>\x20div')['find'](_0x12e334(0x38f))[_0x12e334(0x3e4)](function (_0x1209cf) {
                                                const _0x2008f5 = _0x12e334;
                                                return _0x3a5d3c(this)[_0x2008f5(0x1c7)]() <= 0x40 && _0x3a5d3c(this)[_0x2008f5(0x3b9)]() <= 0x40 && _0x3a5d3c(this)[_0x2008f5(0x318)](_0x2008f5(0x439))[_0x2008f5(0x1bc)] > 0x0;
                                            });
                                            var _0x106a1f = _0xef6773['find']('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0x12e334(0x1bc)] === 0x0;
                                            this['muted'] != _0x106a1f && (this[_0x12e334(0x1bb)] = _0x286fd9[_0x12e334(0x2bb)], _0xef6773?.[_0x12e334(0x1e7)]('click')), _0x3a5d3c(this)[_0x12e334(0x360)](_0x12e334(0x418)) && (_0x286fd9['videoVolume'] = this[_0x12e334(0x1bb)], GM_setValue(_0x12e334(0x1f2), this[_0x12e334(0x1bb)])), this['volume'] == _0x286fd9[_0x12e334(0x2bb)] && _0x3a5d3c(this)[_0x12e334(0x360)](_0x12e334(0x418), !![]);
                                        }), _0x3a5d3c(this)[_0x490179(0x350)](_0x490179(0x411), 'absolute'), _0x3a5d3c(this)[_0x490179(0x350)](_0x490179(0x1f3), '2'), _0x3a5d3c(this)['attr']('data-controls', !![]), _0x3a5d3c(this)['attr']('controls', !![]);
                                    }
                                });
                                var _0x531310 = _0x185dd4[_0x4ccf16(0x318)]('video'), _0x4b84b2 = _0x3a5d3c(this)[_0x4ccf16(0x318)](_0x4ccf16(0x45e))[_0x4ccf16(0x18c)]();
                                _0x18133a(_0x531310, _0x4b84b2, _0x4ccf16(0x262));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0xa0ac7b() {
            const _0x4230ee = _0x5c99b4;
            _0x26cd48(!![]);
            let _0x3c4f36 = new Date()[_0x4230ee(0x38c)](), _0x4acc69 = Math[_0x4230ee(0x1b0)](_0x3c4f36 / 0x3e8), _0x4c6b5c = _0x3a5d3c(_0x4230ee(0x2b4))[_0x4230ee(0x18c)]()[_0x4230ee(0x44b)]() || location[_0x4230ee(0x3fc)][_0x4230ee(0x35b)]('/')[_0x4230ee(0x3e4)](_0x253a52 => _0x253a52[_0x4230ee(0x1bc)] > 0x0)['at'](0x1), _0x559b49 = await _0x56fdc8(_0x4c6b5c), _0x2ef412 = _0x559b49['user']['pk'], _0x30735d = await _0x31e6d6(_0x2ef412), _0x1194fe = 0x0;
            _0x42374c(_0x1194fe, _0x30735d[_0x4230ee(0x27c)][_0x4230ee(0x228)][0x0][_0x4230ee(0x412)][_0x4230ee(0x1bc)]), _0x30735d['data'][_0x4230ee(0x228)][0x0][_0x4230ee(0x412)][_0x4230ee(0x2d1)]((_0x4fc999, _0x251104) => {
                setTimeout(() => {
                    const _0x4cb861 = a0_0x2ded;
                    _0x444c1c['RENAME_PUBLISH_DATE'] && (_0x4acc69 = _0x4fc999['taken_at_timestamp']), _0x4fc999[_0x4cb861(0x3e9)][_0x4cb861(0x1bd)](function (_0xe77f4f, _0xbaa087) {
                        const _0x2d8d83 = _0x4cb861;
                        if (_0xe77f4f[_0x2d8d83(0x365)] < _0xbaa087[_0x2d8d83(0x365)])
                            return 0x1;
                        if (_0xe77f4f[_0x2d8d83(0x365)] > _0xbaa087[_0x2d8d83(0x365)])
                            return -0x1;
                        return 0x0;
                    }), _0x4fc999[_0x4cb861(0x293)] ? _0x30831b(_0x4fc999[_0x4cb861(0x269)][0x0][_0x4cb861(0x24e)], _0x4c6b5c, 'stories', _0x4acc69, _0x4cb861(0x296), _0x4fc999['id'])[_0x4cb861(0x256)](() => {
                        const _0x2ebc73 = _0x4cb861;
                        _0x42374c(++_0x1194fe, _0x30735d['data']['reels_media'][0x0]['items'][_0x2ebc73(0x1bc)]);
                    }) : _0x30831b(_0x4fc999[_0x4cb861(0x3e9)][0x0][_0x4cb861(0x24e)], _0x4c6b5c, _0x4cb861(0x200), _0x4acc69, _0x4cb861(0x230), _0x4fc999['id'])['then'](() => {
                        const _0x6440fa = _0x4cb861;
                        _0x42374c(++_0x1194fe, _0x30735d[_0x6440fa(0x27c)][_0x6440fa(0x228)][0x0]['items']['length']);
                    });
                }, 0x64 * _0x251104);
            });
        }
        async function _0x1c24d0(_0x18885a, _0x127f8c, _0x10b24b) {
            const _0x26812b = _0x5c99b4;
            var _0x481ed2 = _0x3a5d3c(_0x26812b(0x2b4))['first']()['text']() || location[_0x26812b(0x3fc)][_0x26812b(0x35b)]('/')['filter'](_0x4408e5 => _0x4408e5[_0x26812b(0x1bc)] > 0x0)['at'](0x1);
            if (_0x18885a) {
                let _0x372db3 = new Date()['getTime'](), _0x6b93c4 = Math[_0x26812b(0x1b0)](_0x372db3 / 0x3e8);
                _0x26cd48(!![]);
                if (_0x444c1c['FORCE_RESOURCE_VIA_MEDIA'] && !_0x286fd9[_0x26812b(0x1b7)]) {
                    let _0x3cde50 = null, _0x29c1e1 = await _0x56fdc8(_0x481ed2), _0x1408a9 = _0x29c1e1[_0x26812b(0x3d7)]['pk'], _0x38a625 = await _0x31e6d6(_0x1408a9), _0x18f78f = location[_0x26812b(0x3fc)][_0x26812b(0x35b)]('/')[_0x26812b(0x3e4)](_0xb4693a => _0xb4693a['length'] > 0x0 && _0xb4693a[_0x26812b(0x261)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x38a625[_0x26812b(0x27c)][_0x26812b(0x228)][0x0][_0x26812b(0x412)][_0x26812b(0x2d1)](_0xf2af62 => {
                        _0xf2af62['id'] == _0x18f78f && (_0x3cde50 = _0xf2af62['id']);
                    });
                    if (_0x3cde50 == null) {
                        let _0x180382 = _0x5de5fd(_0x481ed2);
                        _0x180382['each'](function (_0x292ea8) {
                            const _0x39ffeb = _0x26812b;
                            _0x3a5d3c(this)[_0x39ffeb(0x3d2)]()['length'] > 0x0 && (_0x3cde50 = _0x38a625[_0x39ffeb(0x27c)][_0x39ffeb(0x228)][0x0][_0x39ffeb(0x412)][_0x292ea8]['id']);
                        });
                    }
                    _0x3cde50 == null && (_0x3a5d3c(_0x26812b(0x426))[_0x26812b(0x27f)](function (_0x25b99f) {
                        const _0x291615 = _0x26812b;
                        _0x3a5d3c(this)[_0x291615(0x2ff)](_0x291615(0x2c9)) && (_0x3a5d3c(this)[_0x291615(0x3d2)]()[_0x291615(0x1bc)] > 0x0 && (_0x3cde50 = _0x38a625[_0x291615(0x27c)][_0x291615(0x228)][0x0][_0x291615(0x412)][_0x25b99f]['id']));
                    }), _0x3a5d3c(_0x26812b(0x1fe))['each'](function (_0x140e3e) {
                        const _0x33f18a = _0x26812b;
                        _0x3a5d3c(this)[_0x33f18a(0x3d2)]()[_0x33f18a(0x2ff)]('_ac3q') && (_0x3cde50 = _0x38a625['data'][_0x33f18a(0x228)][0x0][_0x33f18a(0x412)][_0x140e3e]['id']);
                    }));
                    _0x3cde50 == null && (_0x3cde50 = location[_0x26812b(0x3fc)][_0x26812b(0x35b)]('/')[_0x26812b(0x3e4)](_0x160a6f => _0x160a6f['length'] > 0x0 && _0x160a6f[_0x26812b(0x261)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x2d0867 = await _0xc5148d(_0x3cde50);
                    _0x444c1c[_0x26812b(0x25b)] && (_0x6b93c4 = _0x2d0867[_0x26812b(0x412)][0x0][_0x26812b(0x2a5)]);
                    _0x2d0867[_0x26812b(0x1c3)] === 'ok' ? _0x2d0867[_0x26812b(0x412)][0x0][_0x26812b(0x312)] ? _0x10b24b ? _0x4c5cf2(_0x2d0867[_0x26812b(0x412)][0x0][_0x26812b(0x312)][0x0]['url']) : _0x30831b(_0x2d0867[_0x26812b(0x412)][0x0][_0x26812b(0x312)][0x0][_0x26812b(0x446)], _0x481ed2, _0x26812b(0x200), _0x6b93c4, _0x26812b(0x296), _0x3cde50) : _0x10b24b ? _0x4c5cf2(_0x2d0867[_0x26812b(0x412)][0x0]['image_versions2']['candidates'][0x0][_0x26812b(0x446)]) : _0x30831b(_0x2d0867[_0x26812b(0x412)][0x0]['image_versions2'][_0x26812b(0x403)][0x0][_0x26812b(0x446)], _0x481ed2, 'stories', _0x6b93c4, 'jpg', _0x3cde50) : (_0x444c1c[_0x26812b(0x32c)] ? (_0x286fd9[_0x26812b(0x1b7)] = !![], _0x1c24d0(_0x18885a, _0x127f8c, _0x10b24b)) : alert(_0x26812b(0x388) + _0x2d0867[_0x26812b(0x44d)]), _0x1d76a4(_0x2d0867));
                    _0x26cd48(![]);
                    return;
                }
                if (_0x3a5d3c(_0x26812b(0x297))[_0x26812b(0x1bc)] > 0x0) {
                    let _0x34944c = _0x26812b(0x296), _0x401955 = '', _0x3d06df = location[_0x26812b(0x3fc)][_0x26812b(0x338)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x536f39 = null;
                    if (_0x286fd9[_0x26812b(0x1d9)][_0x26812b(0x200)][_0x481ed2] && !_0x127f8c) {
                        _0x1d76a4(_0x26812b(0x222), _0x481ed2), _0x286fd9[_0x26812b(0x1d9)][_0x26812b(0x200)][_0x481ed2][_0x26812b(0x27c)]['reels_media'][0x0]['items'][_0x26812b(0x2d1)](_0x44c20c => {
                            const _0x16ca77 = _0x26812b;
                            _0x44c20c['id'] == _0x3d06df && (_0x401955 = _0x44c20c[_0x16ca77(0x269)][0x0][_0x16ca77(0x24e)], _0x444c1c[_0x16ca77(0x25b)] && (_0x6b93c4 = _0x44c20c[_0x16ca77(0x1d3)], _0x536f39 = _0x44c20c['id']));
                        });
                        if (_0x401955[_0x26812b(0x1bc)] == 0x0) {
                            _0x1d76a4(_0x26812b(0x1b1), _0x481ed2), _0x1c24d0(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x4b47bb = await _0x56fdc8(_0x481ed2), _0x49ef52 = _0x4b47bb['user']['pk'], _0x42b01d = await _0x31e6d6(_0x49ef52);
                        _0x42b01d[_0x26812b(0x27c)][_0x26812b(0x228)][0x0][_0x26812b(0x412)][_0x26812b(0x2d1)](_0x2f6d7e => {
                            const _0x31316d = _0x26812b;
                            _0x2f6d7e['id'] == _0x3d06df && (_0x401955 = _0x2f6d7e[_0x31316d(0x269)][0x0][_0x31316d(0x24e)], _0x444c1c['RENAME_PUBLISH_DATE'] && (_0x6b93c4 = _0x2f6d7e[_0x31316d(0x1d3)], _0x536f39 = _0x2f6d7e['id']));
                        });
                        if (_0x401955['length'] == 0x0) {
                            let _0x3f36c5 = _0x5de5fd(_0x481ed2);
                            _0x3f36c5[_0x26812b(0x27f)](function (_0x3959de) {
                                const _0x449a9f = _0x26812b;
                                _0x3a5d3c(this)[_0x449a9f(0x3d2)]()[_0x449a9f(0x1bc)] > 0x0 && (_0x401955 = _0x42b01d[_0x449a9f(0x27c)]['reels_media'][0x0][_0x449a9f(0x412)][_0x3959de][_0x449a9f(0x269)][0x0][_0x449a9f(0x24e)], _0x444c1c[_0x449a9f(0x25b)] && (_0x6b93c4 = _0x42b01d['data'][_0x449a9f(0x228)][0x0][_0x449a9f(0x412)][_0x3959de][_0x449a9f(0x1d3)], _0x536f39 = _0x42b01d[_0x449a9f(0x27c)][_0x449a9f(0x228)][0x0][_0x449a9f(0x412)][_0x3959de]['id']));
                            }), _0x401955[_0x26812b(0x1bc)] == 0x0 && (_0x3a5d3c(_0x26812b(0x426))['each'](function (_0x438ec5) {
                                const _0x200262 = _0x26812b;
                                _0x3a5d3c(this)[_0x200262(0x2ff)](_0x200262(0x2c9)) && (_0x3a5d3c(this)[_0x200262(0x3d2)]()[_0x200262(0x1bc)] > 0x0 && (_0x401955 = _0x42b01d[_0x200262(0x27c)][_0x200262(0x228)][0x0][_0x200262(0x412)][_0x438ec5][_0x200262(0x269)][0x0][_0x200262(0x24e)], _0x444c1c[_0x200262(0x25b)] && (_0x6b93c4 = _0x42b01d[_0x200262(0x27c)][_0x200262(0x228)][0x0][_0x200262(0x412)][_0x438ec5][_0x200262(0x1d3)], _0x536f39 = _0x42b01d[_0x200262(0x27c)]['reels_media'][0x0][_0x200262(0x412)][_0x438ec5]['id'])));
                            }), _0x3a5d3c(_0x26812b(0x1fe))[_0x26812b(0x27f)](function (_0x260714) {
                                const _0x741d8a = _0x26812b;
                                _0x3a5d3c(this)[_0x741d8a(0x3d2)]()[_0x741d8a(0x2ff)](_0x741d8a(0x20b)) && (_0x401955 = _0x42b01d['data'][_0x741d8a(0x228)][0x0][_0x741d8a(0x412)][_0x260714][_0x741d8a(0x269)][0x0]['src'], _0x444c1c['RENAME_PUBLISH_DATE'] && (_0x6b93c4 = _0x42b01d[_0x741d8a(0x27c)][_0x741d8a(0x228)][0x0][_0x741d8a(0x412)][_0x260714][_0x741d8a(0x1d3)], _0x536f39 = _0x42b01d[_0x741d8a(0x27c)][_0x741d8a(0x228)][0x0][_0x741d8a(0x412)][_0x260714]['id']));
                            }));
                        }
                        _0x286fd9[_0x26812b(0x1d9)][_0x26812b(0x200)][_0x481ed2] = _0x42b01d;
                    }
                    _0x401955['length'] == 0x0 ? alert(_0x57cf2e(_0x26812b(0x342))) : _0x10b24b ? _0x4c5cf2(_0x401955) : _0x30831b(_0x401955, _0x481ed2, _0x26812b(0x200), _0x6b93c4, _0x34944c, _0x536f39);
                } else {
                    let _0x2d8b6f = _0x3a5d3c(_0x26812b(0x450))[_0x26812b(0x360)](_0x26812b(0x453))?.['split'](',')[0x0]?.['split']('\x20')[0x0], _0x2417db = _0x2d8b6f ? _0x2d8b6f : _0x3a5d3c(_0x26812b(0x450))[_0x26812b(0x3e4)](function () {
                            const _0xeed21e = _0x26812b;
                            return _0x3a5d3c(this)['parents']('a')[_0xeed21e(0x1bc)] === 0x0 && _0x3a5d3c(this)[_0xeed21e(0x1c7)]() === _0x3a5d3c(this)[_0xeed21e(0x1b8)]()['width']();
                        })[_0x26812b(0x360)](_0x26812b(0x24e));
                    if (!_0x2417db) {
                        let _0x1eb829 = _0x3a5d3c(_0x26812b(0x43b));
                        _0x2417db = _0x1eb829[_0x26812b(0x360)]('srcset') ? _0x1eb829[_0x26812b(0x360)](_0x26812b(0x453))?.[_0x26812b(0x35b)](',')[0x0]?.[_0x26812b(0x35b)]('\x20')[0x0] : _0x1eb829[_0x26812b(0x360)](_0x26812b(0x24e));
                    }
                    _0x444c1c[_0x26812b(0x25b)] && (_0x6b93c4 = new Date(_0x3a5d3c(_0x26812b(0x355))['first']()[_0x26812b(0x360)](_0x26812b(0x265)))[_0x26812b(0x38c)]());
                    let _0x296859 = _0x2417db, _0x33f5a2 = 'jpg';
                    _0x10b24b ? _0x4c5cf2(_0x296859) : _0x30831b(_0x296859, _0x481ed2, _0x26812b(0x200), _0x6b93c4, _0x33f5a2, _0x120d27(_0x296859) ?? '');
                }
                _0x286fd9[_0x26812b(0x1b7)] = ![], _0x26cd48(![]);
            } else {
                if (!_0x3a5d3c(_0x26812b(0x3b3))[_0x26812b(0x1bc)]) {
                    _0x286fd9['GL_dataCache'][_0x26812b(0x200)] = {};
                    let _0x49d2b0 = null;
                    _0x3a5d3c(_0x26812b(0x347))[_0x26812b(0x1bc)] > 0x0 ? _0x49d2b0 = _0x3a5d3c('body\x20>\x20div\x20section:visible._ac0a') : (_0x49d2b0 = _0x3a5d3c(_0x26812b(0x2c2)), _0x49d2b0[_0x26812b(0x350)](_0x26812b(0x411), _0x26812b(0x19d)));
                    _0x49d2b0[_0x26812b(0x1bc)] === 0x0 && (_0x49d2b0 = _0x3a5d3c(_0x26812b(0x1a7))['parent']()['parent']()[_0x26812b(0x1b8)]()[_0x26812b(0x318)](_0x26812b(0x323)), _0x49d2b0[_0x26812b(0x350)]('position', _0x26812b(0x19d)));
                    _0x49d2b0[_0x26812b(0x1bc)] === 0x0 && (_0x49d2b0 = _0x3a5d3c('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x26812b(0x1b8)]()[_0x26812b(0x1b8)]()[_0x26812b(0x1b8)]()[_0x26812b(0x318)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x49d2b0[_0x26812b(0x350)](_0x26812b(0x411), _0x26812b(0x19d)));
                    if (_0x49d2b0[_0x26812b(0x1bc)] === 0x0) {
                        let _0x4e3de5 = _0x3a5d3c(_0x26812b(0x407)), _0x39668b = 0x0;
                        _0x4e3de5[_0x26812b(0x27f)](function () {
                            const _0x5c136e = _0x26812b;
                            _0x3a5d3c(this)[_0x5c136e(0x1c7)]() > _0x39668b && (_0x39668b = _0x3a5d3c(this)[_0x5c136e(0x1c7)](), _0x49d2b0 = _0x3a5d3c(this)[_0x5c136e(0x3d2)](_0x5c136e(0x354))[_0x5c136e(0x18c)]());
                        });
                    }
                    if (_0x49d2b0 != null) {
                        _0x49d2b0['first']()[_0x26812b(0x350)](_0x26812b(0x411), _0x26812b(0x19d)), _0x49d2b0[_0x26812b(0x18c)]()[_0x26812b(0x2fe)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x57cf2e('DW') + '\x22\x20class=\x22IG_DWSTORY\x22>' + _0x44c7de[_0x26812b(0x274)] + _0x26812b(0x1c5)), _0x49d2b0[_0x26812b(0x18c)]()['append'](_0x26812b(0x353) + _0x57cf2e('NEW_TAB') + _0x26812b(0x3d6) + _0x44c7de[_0x26812b(0x3b7)] + '</div>');
                        let _0x303a1a = _0x5de5fd(_0x481ed2);
                        _0x303a1a[_0x26812b(0x1bc)] > 0x1 && _0x49d2b0[_0x26812b(0x18c)]()[_0x26812b(0x2fe)](_0x26812b(0x440) + _0x57cf2e('DW_ALL') + _0x26812b(0x236) + _0x44c7de[_0x26812b(0x19a)] + _0x26812b(0x1c5)), _0x49d2b0[_0x26812b(0x318)]('img[referrerpolicy]')[_0x26812b(0x27f)](function () {
                            const _0x4ed068 = _0x26812b;
                            _0x3a5d3c(this)['on'](_0x4ed068(0x42d), function () {
                                const _0x3c1005 = _0x4ed068;
                                !_0x3a5d3c(this)[_0x3c1005(0x27c)]('remove-thumbnail') && (_0x49d2b0[_0x3c1005(0x318)]('.IG_DWSTORY_THUMBNAIL')[_0x3c1005(0x1bc)] === 0x0 ? (_0x3a5d3c(this)[_0x3c1005(0x360)](_0x3c1005(0x2de), !![]), _0x3a5d3c(_0x3c1005(0x3df))['remove'](), _0x1d76a4('(story)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x3a5d3c(this)[_0x3c1005(0x360)](_0x3c1005(0x2de), !![]), _0x1d76a4(_0x3c1005(0x35d))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x49aed1(_0xe42d1b, _0xcc3f37) {
            const _0x4e5ddc = _0x5c99b4;
            if (_0xe42d1b) {
                let _0xbae717 = new Date()[_0x4e5ddc(0x38c)](), _0x3290fd = Math[_0x4e5ddc(0x1b0)](_0xbae717 / 0x3e8), _0x235952 = _0x4e5ddc(0x230), _0x241ec4 = _0x3a5d3c(_0x4e5ddc(0x2b4))[_0x4e5ddc(0x18c)]()[_0x4e5ddc(0x44b)]() || location['pathname'][_0x4e5ddc(0x35b)]('/')['at'](0x2), _0x9021d9 = location[_0x4e5ddc(0x3fc)][_0x4e5ddc(0x338)](/\/$/ig, '')[_0x4e5ddc(0x35b)]('/')['at'](-0x1), _0xc7e74f = '', _0x323f51 = null;
                _0x26cd48(!![]);
                if (_0x444c1c[_0x4e5ddc(0x40d)] && !_0x286fd9[_0x4e5ddc(0x1b7)]) {
                    let _0x4c2202 = await _0x56fdc8(_0x241ec4), _0x369dee = _0x4c2202[_0x4e5ddc(0x3d7)]['pk'], _0x41502b = await _0x31e6d6(_0x369dee), _0x58657e = location[_0x4e5ddc(0x3fc)][_0x4e5ddc(0x35b)]('/')[_0x4e5ddc(0x3e4)](_0x91919b => _0x91919b[_0x4e5ddc(0x1bc)] > 0x0 && _0x91919b['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x41502b[_0x4e5ddc(0x27c)][_0x4e5ddc(0x228)][0x0][_0x4e5ddc(0x412)][_0x4e5ddc(0x2d1)](_0x57e9fd => {
                        _0x57e9fd['id'] == _0x58657e && (_0x323f51 = _0x57e9fd['id']);
                    });
                    if (_0x323f51 == null) {
                        let _0x305d16 = _0x5de5fd(_0x241ec4);
                        _0x305d16[_0x4e5ddc(0x27f)](function (_0x10ea5c) {
                            const _0x3e3d4c = _0x4e5ddc;
                            _0x3a5d3c(this)[_0x3e3d4c(0x3d2)]()[_0x3e3d4c(0x1bc)] > 0x0 && (_0x323f51 = _0x41502b[_0x3e3d4c(0x27c)][_0x3e3d4c(0x228)][0x0][_0x3e3d4c(0x412)][_0x10ea5c]['id']);
                        });
                    }
                    _0x323f51 == null && (_0x3a5d3c(_0x4e5ddc(0x426))[_0x4e5ddc(0x27f)](function (_0x155797) {
                        const _0xc93704 = _0x4e5ddc;
                        _0x3a5d3c(this)[_0xc93704(0x2ff)](_0xc93704(0x2c9)) && (_0x3a5d3c(this)[_0xc93704(0x3d2)]()[_0xc93704(0x1bc)] > 0x0 && (_0x323f51 = _0x41502b[_0xc93704(0x27c)]['reels_media'][0x0]['items'][_0x155797]['id']));
                    }), _0x3a5d3c(_0x4e5ddc(0x1fe))[_0x4e5ddc(0x27f)](function (_0x187d5b) {
                        const _0x5af0b0 = _0x4e5ddc;
                        _0x3a5d3c(this)[_0x5af0b0(0x3d2)]()[_0x5af0b0(0x2ff)](_0x5af0b0(0x20b)) && (_0x323f51 = _0x41502b['data']['reels_media'][0x0][_0x5af0b0(0x412)][_0x187d5b]['id']);
                    }));
                    _0x323f51 == null && (_0x323f51 = location[_0x4e5ddc(0x3fc)][_0x4e5ddc(0x35b)]('/')[_0x4e5ddc(0x3e4)](_0x47cdd1 => _0x47cdd1[_0x4e5ddc(0x1bc)] > 0x0 && _0x47cdd1['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x217093 = await _0xc5148d(_0x323f51);
                    _0x444c1c[_0x4e5ddc(0x25b)] && (_0x3290fd = _0x217093[_0x4e5ddc(0x412)][0x0][_0x4e5ddc(0x2a5)]);
                    _0x217093[_0x4e5ddc(0x1c3)] === 'ok' ? _0x30831b(_0x217093[_0x4e5ddc(0x412)][0x0]['image_versions2']['candidates'][0x0][_0x4e5ddc(0x446)], _0x241ec4, _0x4e5ddc(0x200), _0x3290fd, _0x4e5ddc(0x230), _0x323f51) : (_0x444c1c[_0x4e5ddc(0x32c)] ? (_0x286fd9[_0x4e5ddc(0x1b7)] = !![], _0x49aed1(!![], _0xcc3f37)) : alert(_0x4e5ddc(0x388) + _0x217093[_0x4e5ddc(0x44d)]), _0x1d76a4(_0x217093));
                    _0x26cd48(![]);
                    return;
                }
                if (_0x286fd9[_0x4e5ddc(0x1d9)]['stories'][_0x241ec4] && !_0xcc3f37) {
                    _0x1d76a4('Fetch\x20from\x20memory\x20cache:', _0x241ec4), _0x286fd9[_0x4e5ddc(0x1d9)][_0x4e5ddc(0x200)][_0x241ec4][_0x4e5ddc(0x27c)][_0x4e5ddc(0x228)][0x0][_0x4e5ddc(0x412)]['forEach'](_0x315f7f => {
                        const _0x478e34 = _0x4e5ddc;
                        _0x315f7f['id'] == _0x9021d9 && (_0xc7e74f = _0x315f7f[_0x478e34(0x2d7)], _0x444c1c['RENAME_PUBLISH_DATE'] && (_0x3290fd = _0x315f7f[_0x478e34(0x1d3)], _0x323f51 = _0x315f7f['id']));
                    });
                    if (_0xc7e74f[_0x4e5ddc(0x1bc)] == 0x0) {
                        _0x1d76a4(_0x4e5ddc(0x1b1), _0x241ec4), _0x49aed1(!![], !![]);
                        return;
                    }
                } else {
                    let _0x2ec4ca = await _0x56fdc8(_0x241ec4), _0x5de67e = _0x2ec4ca[_0x4e5ddc(0x3d7)]['pk'], _0x4309e1 = await _0x31e6d6(_0x5de67e);
                    _0x4309e1[_0x4e5ddc(0x27c)][_0x4e5ddc(0x228)][0x0][_0x4e5ddc(0x412)][_0x4e5ddc(0x2d1)](_0x1e9f07 => {
                        const _0x3e31a3 = _0x4e5ddc;
                        _0x1e9f07['id'] == _0x9021d9 && (_0xc7e74f = _0x1e9f07[_0x3e31a3(0x2d7)], _0x444c1c[_0x3e31a3(0x25b)] && (_0x3290fd = _0x1e9f07[_0x3e31a3(0x1d3)], _0x323f51 = _0x1e9f07['id']));
                    });
                    if (_0xc7e74f[_0x4e5ddc(0x1bc)] == 0x0) {
                        let _0x13a84d = _0x5de5fd(_0x241ec4);
                        _0x13a84d[_0x4e5ddc(0x27f)](function (_0x2e782f) {
                            const _0x294cbe = _0x4e5ddc;
                            _0x3a5d3c(this)[_0x294cbe(0x3d2)]()[_0x294cbe(0x1bc)] > 0x0 && (_0xc7e74f = _0x4309e1[_0x294cbe(0x27c)][_0x294cbe(0x228)][0x0][_0x294cbe(0x412)][_0x2e782f]['display_url'], _0x444c1c[_0x294cbe(0x25b)] && (_0x3290fd = _0x4309e1[_0x294cbe(0x27c)][_0x294cbe(0x228)][0x0][_0x294cbe(0x412)][_0x2e782f]['taken_at_timestamp'], _0x323f51 = _0x4309e1['data'][_0x294cbe(0x228)][0x0]['items'][_0x2e782f]['id']));
                        }), _0xc7e74f[_0x4e5ddc(0x1bc)] == 0x0 && (_0x3a5d3c(_0x4e5ddc(0x426))[_0x4e5ddc(0x27f)](function (_0x3f1181) {
                            const _0x57dc36 = _0x4e5ddc;
                            _0x3a5d3c(this)[_0x57dc36(0x2ff)](_0x57dc36(0x2c9)) && (_0x3a5d3c(this)[_0x57dc36(0x3d2)]()[_0x57dc36(0x1bc)] > 0x0 && (_0xc7e74f = _0x4309e1['data']['reels_media'][0x0]['items'][_0x3f1181][_0x57dc36(0x2d7)], _0x444c1c[_0x57dc36(0x25b)] && (_0x3290fd = _0x4309e1['data'][_0x57dc36(0x228)][0x0]['items'][_0x3f1181][_0x57dc36(0x1d3)], _0x323f51 = _0x4309e1[_0x57dc36(0x27c)]['reels_media'][0x0][_0x57dc36(0x412)][_0x3f1181]['id'])));
                        }), _0x3a5d3c('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x4e5ddc(0x27f)](function (_0x5085c5) {
                            const _0x585c35 = _0x4e5ddc;
                            _0x3a5d3c(this)['children']()['hasClass'](_0x585c35(0x20b)) && (_0xc7e74f = _0x4309e1['data'][_0x585c35(0x228)][0x0][_0x585c35(0x412)][_0x5085c5][_0x585c35(0x2d7)], _0x444c1c[_0x585c35(0x25b)] && (_0x3290fd = _0x4309e1[_0x585c35(0x27c)][_0x585c35(0x228)][0x0][_0x585c35(0x412)][_0x5085c5][_0x585c35(0x1d3)], _0x323f51 = _0x4309e1[_0x585c35(0x27c)][_0x585c35(0x228)][0x0][_0x585c35(0x412)][_0x5085c5]['id']));
                        }));
                    }
                }
                _0x30831b(_0xc7e74f, _0x241ec4, _0x4e5ddc(0x18f), _0x3290fd, _0x235952, _0x323f51), _0x286fd9[_0x4e5ddc(0x1b7)] = ![], _0x26cd48(![]);
            } else {
                if (_0x3a5d3c('body\x20>\x20div\x20div.IG_DWSTORY')['parent']()['find'](_0x4e5ddc(0x1f1))['length']) {
                    let _0x163087 = null;
                    _0x3a5d3c('body\x20>\x20div\x20section._ac0a')[_0x4e5ddc(0x1bc)] > 0x0 ? _0x163087 = _0x3a5d3c(_0x4e5ddc(0x329)) : (_0x163087 = _0x3a5d3c('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x163087[_0x4e5ddc(0x350)](_0x4e5ddc(0x411), 'relative'));
                    _0x163087[_0x4e5ddc(0x1bc)] === 0x0 && (_0x163087 = _0x3a5d3c(_0x4e5ddc(0x1a7))['parent']()[_0x4e5ddc(0x1b8)]()[_0x4e5ddc(0x1b8)]()[_0x4e5ddc(0x318)](_0x4e5ddc(0x323)), _0x163087[_0x4e5ddc(0x350)]('position', 'relative'));
                    _0x163087[_0x4e5ddc(0x1bc)] === 0x0 && (_0x163087 = _0x3a5d3c(_0x4e5ddc(0x1a7))['parent']()[_0x4e5ddc(0x1b8)]()[_0x4e5ddc(0x1b8)]()['find'](_0x4e5ddc(0x34c)), _0x163087['css'](_0x4e5ddc(0x411), _0x4e5ddc(0x19d)));
                    if (_0x163087[_0x4e5ddc(0x1bc)] === 0x0) {
                        let _0x44ea83 = _0x3a5d3c(_0x4e5ddc(0x407)), _0x10ca8d = 0x0;
                        _0x44ea83[_0x4e5ddc(0x27f)](function () {
                            const _0x3113ef = _0x4e5ddc;
                            _0x3a5d3c(this)[_0x3113ef(0x1c7)]() > _0x10ca8d && (_0x10ca8d = _0x3a5d3c(this)[_0x3113ef(0x1c7)](), _0x163087 = _0x3a5d3c(this)['children'](_0x3113ef(0x354))[_0x3113ef(0x18c)]());
                        });
                    }
                    _0x163087 != null && (_0x163087[_0x4e5ddc(0x18c)]()[_0x4e5ddc(0x350)](_0x4e5ddc(0x411), _0x4e5ddc(0x19d)), _0x163087[_0x4e5ddc(0x18c)]()[_0x4e5ddc(0x2fe)](_0x4e5ddc(0x45b) + _0x57cf2e('THUMBNAIL_INTRO') + _0x4e5ddc(0x2a2) + _0x44c7de[_0x4e5ddc(0x258)] + _0x4e5ddc(0x1c5)));
                }
            }
        }
        function _0x3009ed(_0x1c89bc) {
            return new Promise((_0x5f17ba, _0x28f7b8) => {
                const _0x36e964 = a0_0x2ded;
                let _0x2122c5 = 'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22' + _0x1c89bc + _0x36e964(0x1a5);
                GM_xmlhttpRequest({
                    'method': _0x36e964(0x24b),
                    'url': _0x2122c5,
                    'onload': function (_0x5bd2eb) {
                        const _0x3bb51c = _0x36e964;
                        try {
                            let _0x108ca7 = JSON[_0x3bb51c(0x29b)](_0x5bd2eb['response']);
                            _0x5f17ba(_0x108ca7);
                        } catch (_0x4d570d) {
                            _0x1d76a4('getHighlightStories()', _0x3bb51c(0x419), _0x4d570d[_0x3bb51c(0x44d)]), _0x28f7b8(_0x4d570d);
                        }
                    },
                    'onerror': function (_0x1281ab) {
                        const _0x5bcda6 = _0x36e964;
                        _0x1d76a4(_0x5bcda6(0x42c), _0x5bcda6(0x419), _0x1281ab), _0x28f7b8(_0x1281ab);
                    }
                });
            });
        }
        function _0x31e6d6(_0x262695) {
            return new Promise((_0x515cc6, _0x12b767) => {
                const _0x5c98a9 = a0_0x2ded;
                let _0x41141c = _0x5c98a9(0x2b9) + _0x262695 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': _0x5c98a9(0x24b),
                    'url': _0x41141c,
                    'onload': function (_0x21d2a7) {
                        const _0x50a8f0 = _0x5c98a9;
                        try {
                            let _0x2f542c = JSON[_0x50a8f0(0x29b)](_0x21d2a7[_0x50a8f0(0x19b)]);
                            _0x1d76a4('getStories()', _0x2f542c), _0x515cc6(_0x2f542c);
                        } catch (_0x4d2249) {
                            _0x1d76a4(_0x50a8f0(0x2b1), 'reject', _0x4d2249[_0x50a8f0(0x44d)]), _0x12b767(_0x4d2249);
                        }
                    },
                    'onerror': function (_0x3d44f6) {
                        const _0x47ff94 = _0x5c98a9;
                        _0x1d76a4(_0x47ff94(0x2b1), _0x47ff94(0x419), _0x3d44f6), _0x12b767(_0x3d44f6);
                    }
                });
            });
        }
        function _0x56fdc8(_0x5732e3) {
            return new Promise((_0xa765fd, _0x56dd4b) => {
                let _0x4bc34c = 'https://www.instagram.com/web/search/topsearch/?query=' + _0x5732e3;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x4bc34c,
                    'onload': function (_0x4c0268) {
                        const _0x4154f6 = a0_0x2ded;
                        let _0x53e72d = JSON['parse'](_0x4c0268[_0x4154f6(0x19b)]), _0x49b139 = null;
                        _0x53e72d['users']['forEach'](_0x333b3c => {
                            const _0x184f73 = _0x4154f6;
                            _0x333b3c['user']['username']?.['toLowerCase']() === _0x5732e3?.[_0x184f73(0x26a)]() && (_0x49b139 = _0x333b3c);
                        }), _0x49b139 != null ? (_0x1d76a4(_0x4154f6(0x31c), _0x49b139), _0xa765fd(_0x49b139)) : _0x420a3c(_0x5732e3)['then'](_0xf3fc76 => {
                            _0xa765fd(_0xf3fc76);
                        })[_0x4154f6(0x3c9)](_0x11f772 => {
                            const _0x5b3faf = _0x4154f6;
                            alert(_0x5b3faf(0x382));
                        });
                    },
                    'onerror': function (_0x51c3cf) {
                        const _0x5f0222 = a0_0x2ded;
                        _0x1d76a4(_0x5f0222(0x31c), _0x5f0222(0x419), _0x51c3cf), _0x56dd4b(_0x51c3cf);
                    }
                });
            });
        }
        function _0x420a3c(_0x11997b) {
            return new Promise((_0x13596d, _0x56bc49) => {
                const _0x3fea3b = a0_0x2ded;
                let _0x4780a2 = _0x3fea3b(0x26d) + _0x11997b;
                GM_xmlhttpRequest({
                    'method': _0x3fea3b(0x24b),
                    'url': _0x4780a2,
                    'headers': { 'X-IG-App-ID': _0x4f3c5e() },
                    'onload': function (_0x57d757) {
                        const _0x250f8a = _0x3fea3b;
                        try {
                            let _0x4bae10 = JSON[_0x250f8a(0x29b)](_0x57d757[_0x250f8a(0x19b)]), _0x498b72 = _0x4bae10?.[_0x250f8a(0x27c)]?.[_0x250f8a(0x3d7)];
                            if (_0x498b72 != null) {
                                let _0x50eb4f = _0x4bae10?.[_0x250f8a(0x27c)];
                                _0x50eb4f['user']['pk'] = _0x50eb4f['user']['id'], _0x1d76a4('getUserIdWithAgent()', _0x4bae10), _0x13596d(_0x50eb4f);
                            } else
                                _0x1d76a4(_0x250f8a(0x321), _0x250f8a(0x419), _0x250f8a(0x30f)), _0x56bc49('undefined');
                        } catch (_0x28aa48) {
                            _0x1d76a4(_0x250f8a(0x321), _0x250f8a(0x419), _0x28aa48[_0x250f8a(0x44d)]), _0x56bc49(_0x28aa48);
                        }
                    },
                    'onerror': function (_0x451214) {
                        const _0x4a609d = _0x3fea3b;
                        _0x1d76a4('getUserIdWithAgent()', _0x4a609d(0x419), _0x451214), _0x56bc49(_0x451214);
                    }
                });
            });
        }
        function _0x1c34d4(_0x7049a2) {
            return new Promise((_0x1060be, _0x312b0d) => {
                const _0x5eb7c6 = a0_0x2ded;
                let _0x3b1a10 = _0x5eb7c6(0x2a6) + _0x7049a2 + _0x5eb7c6(0x190);
                GM_xmlhttpRequest({
                    'method': _0x5eb7c6(0x24b),
                    'url': _0x3b1a10,
                    'headers': { 'User-Agent': _0x5eb7c6(0x279) },
                    'onload': function (_0x38fb19) {
                        const _0x373444 = _0x5eb7c6;
                        try {
                            let _0x43ad19 = JSON[_0x373444(0x29b)](_0x38fb19['response']);
                            _0x43ad19['status'] !== 'ok' ? (_0x1d76a4(_0x373444(0x381), _0x373444(0x419), _0x43ad19), _0x312b0d('faild')) : (_0x1d76a4(_0x373444(0x381), _0x43ad19), _0x1060be(_0x43ad19[_0x373444(0x3d7)][_0x373444(0x2e2)]?.[_0x373444(0x446)]));
                        } catch (_0x1643aa) {
                            _0x1d76a4('getUserHighSizeProfile()', _0x373444(0x419), _0x1643aa), _0x312b0d(_0x1643aa);
                        }
                    },
                    'onerror': function (_0x16861b) {
                        const _0x5354b4 = _0x5eb7c6;
                        _0x1d76a4(_0x5354b4(0x381), _0x5354b4(0x419), _0x16861b), _0x312b0d(_0x16861b);
                    }
                });
            });
        }
        function _0x20e240(_0x524575) {
            return new Promise((_0x1fc4d3, _0x44de42) => {
                const _0x19bcd0 = a0_0x2ded;
                if (!_0x524575)
                    _0x44de42(_0x19bcd0(0x390));
                let _0x43cebc = _0x524575, _0x45e398 = _0x19bcd0(0x2e5) + _0x43cebc + _0x19bcd0(0x34b);
                GM_xmlhttpRequest({
                    'method': _0x19bcd0(0x24b),
                    'url': _0x45e398,
                    'onload': function (_0x558359) {
                        const _0x294d9d = _0x19bcd0;
                        try {
                            let _0x45c8b2 = JSON[_0x294d9d(0x29b)](_0x558359[_0x294d9d(0x19b)]);
                            _0x1d76a4('getPostOwner()', _0x45c8b2), _0x1fc4d3(_0x45c8b2[_0x294d9d(0x27c)][_0x294d9d(0x448)][_0x294d9d(0x3ec)]['username']);
                        } catch (_0x41c40d) {
                            _0x1d76a4(_0x294d9d(0x32b), _0x294d9d(0x419), _0x41c40d['message']), _0x44de42(_0x41c40d);
                        }
                    },
                    'onerror': function (_0x469bc0) {
                        const _0x1e8901 = _0x19bcd0;
                        _0x1d76a4(_0x1e8901(0x32b), _0x1e8901(0x419), _0x469bc0), _0x44de42(_0x469bc0);
                    }
                });
            });
        }
        function _0x10c5f5(_0x1c5e97) {
            return new Promise((_0x2453c8, _0x1ea39d) => {
                const _0x58befd = a0_0x2ded;
                if (!_0x1c5e97)
                    _0x1ea39d(_0x58befd(0x390));
                let _0x398275 = _0x1c5e97, _0x5146af = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x398275 + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x58befd(0x24b),
                    'url': _0x5146af,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x51e87c) {
                        const _0x2a8366 = _0x58befd;
                        try {
                            let _0x5b0d52 = JSON[_0x2a8366(0x29b)](_0x51e87c[_0x2a8366(0x19b)]);
                            _0x1d76a4(_0x5b0d52), _0x5b0d52[_0x2a8366(0x1c3)] === _0x2a8366(0x408) ? (_0x1d76a4(_0x2a8366(0x21e), _0x2a8366(0x271), _0x398275), _0x149340(_0x398275)[_0x2a8366(0x256)](_0x51aee3 => {
                                const _0x1dbdfa = _0x2a8366;
                                _0x2453c8({
                                    'type': _0x1dbdfa(0x1e0),
                                    'data': _0x51aee3[_0x1dbdfa(0x226)][_0x1dbdfa(0x412)][0x0]
                                });
                            })[_0x2a8366(0x3c9)](_0x3b5ca9 => {
                                _0x1ea39d(_0x3b5ca9);
                            })) : _0x2453c8({
                                'type': 'query_hash',
                                'data': _0x5b0d52[_0x2a8366(0x27c)]
                            });
                        } catch (_0x55468c) {
                            _0x1d76a4('getBlobMedia()', _0x2a8366(0x419), _0x55468c[_0x2a8366(0x44d)]), _0x1ea39d(_0x55468c);
                        }
                    },
                    'onerror': function (_0x1bc1a6) {
                        const _0x4000ea = _0x58befd;
                        _0x1d76a4('getBlobMedia()', _0x4000ea(0x419), _0x1bc1a6), _0x1ea39d(_0x1bc1a6);
                    }
                });
            });
        }
        function _0x149340(_0x4d175e) {
            return new Promise((_0x13d909, _0x429d68) => {
                const _0x1b6da7 = a0_0x2ded;
                if (!_0x4d175e)
                    _0x429d68(_0x1b6da7(0x390));
                let _0x2b6a1c = _0x4d175e, _0x571270 = _0x1b6da7(0x3f3) + _0x2b6a1c + _0x1b6da7(0x1b4);
                GM_xmlhttpRequest({
                    'method': _0x1b6da7(0x24b),
                    'url': _0x571270,
                    'headers': {
                        'User-Agent': _0x1b6da7(0x279),
                        'X-IG-App-ID': _0x4f3c5e()
                    },
                    'onload': function (_0x3850c1) {
                        const _0x505548 = _0x1b6da7;
                        try {
                            let _0x1d7b9d = JSON[_0x505548(0x29b)](_0x3850c1['response']);
                            _0x1d76a4(_0x1d7b9d), _0x1d7b9d[_0x505548(0x1c3)] === _0x505548(0x408) ? (alert('getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a' + _0x1d7b9d['message'] + ':\x20' + _0x1d7b9d[_0x505548(0x2bd)]), _0x1d76a4(_0x505548(0x2fa) + _0x1d7b9d[_0x505548(0x44d)] + ':\x20' + _0x1d7b9d[_0x505548(0x2bd)]), _0x429d68(_0x3850c1)) : (_0x1d76a4('getBlobMediaWithQueryID()', _0x1d7b9d[_0x505548(0x27c)]), _0x13d909(_0x1d7b9d[_0x505548(0x27c)]));
                        } catch (_0x2ebdab) {
                            _0x1d76a4(_0x505548(0x2a9), _0x505548(0x419), _0x2ebdab[_0x505548(0x44d)]), _0x429d68(_0x2ebdab);
                        }
                    },
                    'onerror': function (_0x452b9f) {
                        const _0xf587df = _0x1b6da7;
                        _0x1d76a4(_0xf587df(0x2a9), _0xf587df(0x419), _0x452b9f), _0x429d68(_0x452b9f);
                    }
                });
            });
        }
        function _0xc5148d(_0x316519) {
            return new Promise((_0x24fcce, _0x197419) => {
                const _0x4a49c4 = a0_0x2ded;
                let _0x168d42 = 'https://i.instagram.com/api/v1/media/' + _0x316519 + _0x4a49c4(0x190);
                if (_0x316519 == null) {
                    alert(_0x4a49c4(0x239)), _0x1d76a4(_0x4a49c4(0x3be), 'reject', _0x4a49c4(0x239)), _0x26cd48(![]), _0x197419(-0x1);
                    return;
                }
                if (_0x4f3c5e() == null) {
                    alert(_0x4a49c4(0x3f2)), _0x1d76a4('getMediaInfo()', _0x4a49c4(0x419), 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x26cd48(![]), _0x197419(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x4a49c4(0x24b),
                    'url': _0x168d42,
                    'headers': {
                        'User-Agent': window[_0x4a49c4(0x3db)][_0x4a49c4(0x3ca)],
                        'Accept': _0x4a49c4(0x33c),
                        'X-IG-App-ID': _0x4f3c5e()
                    },
                    'onload': function (_0x567cba) {
                        const _0x39a2ac = _0x4a49c4;
                        if (_0x567cba[_0x39a2ac(0x455)] == _0x168d42) {
                            let _0x5b77b5 = JSON[_0x39a2ac(0x29b)](_0x567cba[_0x39a2ac(0x19b)]);
                            _0x1d76a4(_0x39a2ac(0x3be), _0x5b77b5), _0x24fcce(_0x5b77b5);
                        } else {
                            let _0xe43919 = new URL(_0x567cba[_0x39a2ac(0x455)]);
                            _0xe43919[_0x39a2ac(0x3fc)]['startsWith'](_0x39a2ac(0x2e0)) ? (_0x1d76a4(_0x39a2ac(0x3be), _0x39a2ac(0x419), _0x39a2ac(0x3ef)), alert(_0x39a2ac(0x3ef))) : (_0x1d76a4(_0x39a2ac(0x3be), 'reject', _0x39a2ac(0x272) + _0x567cba[_0x39a2ac(0x455)] + '\x22'), alert(_0x39a2ac(0x272) + _0x567cba[_0x39a2ac(0x455)] + '\x22')), _0x26cd48(![]), _0x197419(-0x1);
                        }
                    },
                    'onerror': function (_0x3b91fc) {
                        const _0x232b62 = _0x4a49c4;
                        _0x1d76a4(_0x232b62(0x3be), _0x232b62(0x419), _0x3b91fc), _0x24fcce(_0x3b91fc);
                    }
                });
            });
        }
        function _0x120d27(_0x1e9dec) {
            const _0xfbc62e = _0x5c99b4;
            let _0x4259ea = new URL(_0x1e9dec), _0x182137 = _0x4259ea?.['searchParams']?.[_0xfbc62e(0x309)](_0xfbc62e(0x3a3))?.[_0xfbc62e(0x35b)]('.')['at'](0x0);
            return _0x182137 ? atob(_0x182137) : null;
        }
        function _0x4f3c5e() {
            const _0x4c93e1 = _0x5c99b4;
            let _0x3447a5 = null;
            return _0x3a5d3c(_0x4c93e1(0x39d))[_0x4c93e1(0x27f)](function () {
                const _0xa6835a = _0x4c93e1, _0x1189d0 = /"APP_ID":"([0-9]+)"/ig, _0x4140b3 = _0x3a5d3c(this)[_0xa6835a(0x44b)]()[_0xa6835a(0x261)](_0x1189d0);
                _0x4140b3 != null && _0x3447a5 == null && (_0x3447a5 = [..._0x3a5d3c(this)[_0xa6835a(0x44b)]()[_0xa6835a(0x2ef)](_0x1189d0)]);
            }), _0x3447a5 ? _0x3447a5['at'](0x0)['at'](-0x1) : null;
        }
        function _0x26cd48(_0x1bcecd) {
            const _0x166603 = _0x5c99b4;
            _0x1bcecd ? (_0x3a5d3c(_0x166603(0x1fa))['removeClass'](_0x166603(0x396)), _0x3a5d3c(_0x166603(0x1fa))[_0x166603(0x350)](_0x166603(0x1f3), _0x166603(0x250))) : (_0x3a5d3c('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x166603(0x2b3)]('x1s85apg'), _0x3a5d3c('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x166603(0x350)](_0x166603(0x1f3), ''));
        }
        function _0x5de5fd(_0x46503d) {
            const _0x23b667 = _0x5c99b4;
            let _0x45a63d = _0x3a5d3c('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x46503d + _0x23b667(0x387))['filter'](function () {
                const _0x45e10b = _0x23b667;
                return _0x3a5d3c(this)[_0x45e10b(0x3d2)]()['length'] === 0x0 && _0x3a5d3c(this)[_0x45e10b(0x318)]('svg')[_0x45e10b(0x1bc)] === 0x0 && _0x3a5d3c(this)[_0x45e10b(0x44b)]()?.[_0x45e10b(0x26a)]() === _0x46503d?.['toLowerCase']();
            })[_0x23b667(0x3e2)](_0x23b667(0x36f))[_0x23b667(0x3e4)](function () {
                const _0x2d44b3 = _0x23b667;
                return _0x3a5d3c(this)['text']()?.[_0x2d44b3(0x26a)]() !== _0x46503d?.[_0x2d44b3(0x26a)]();
            })[_0x23b667(0x3e4)](function () {
                return _0x3a5d3c(this)['children']()['length'] > 0x1;
            })[_0x23b667(0x18c)]();
            return _0x45a63d[_0x23b667(0x1bc)] === 0x0 && (_0x45a63d = _0x3a5d3c(_0x23b667(0x2ed) + _0x46503d + '\x22]')[_0x23b667(0x3e4)](function () {
                const _0x13d402 = _0x23b667;
                return _0x3a5d3c(this)['find']('img')[_0x13d402(0x1bc)] > 0x0;
            })['parents'](_0x23b667(0x36f))['filter'](function () {
                const _0x41a63c = _0x23b667;
                return _0x3a5d3c(this)['text']()?.[_0x41a63c(0x26a)]() !== _0x46503d?.[_0x41a63c(0x26a)]();
            })['filter'](function () {
                const _0x3f6960 = _0x23b667;
                return _0x3a5d3c(this)[_0x3f6960(0x3d2)]()['length'] > 0x1;
            })[_0x23b667(0x18c)]()), _0x45a63d['children']()[_0x23b667(0x3e4)](function () {
                const _0x347ec4 = _0x23b667;
                return _0x3a5d3c(this)[_0x347ec4(0x3b9)]() < 0xa;
            })['first']()[_0x23b667(0x3d2)]();
        }
        function _0x42374c(_0x3ae902, _0x1752a8) {
            const _0x1ab295 = _0x5c99b4;
            _0x3a5d3c(_0x1ab295(0x2a3))[_0x1ab295(0x1bc)] ? (_0x3a5d3c('.circle_wrapper\x20span')[_0x1ab295(0x44b)](_0x3ae902 + '/' + _0x1752a8), _0x3ae902 >= _0x1752a8 && _0x3a5d3c('.circle_wrapper')[_0x1ab295(0x294)](0xfa, function () {
                const _0x4f472f = _0x1ab295;
                _0x3a5d3c(this)[_0x4f472f(0x32f)]();
            })) : _0x3a5d3c('body')[_0x1ab295(0x2fe)](_0x1ab295(0x376) + _0x3ae902 + '/' + _0x1752a8 + _0x1ab295(0x322));
        }
        function _0x498290(_0x50ebbc, _0x59174b) {
            const _0x529da6 = _0x5c99b4;
            let _0x3693cb = _0x50ebbc ? 'hidden' : '';
            _0x3a5d3c(_0x529da6(0x44e))[_0x529da6(0x2fe)](_0x529da6(0x203) + _0x3693cb + _0x529da6(0x29e)), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')[_0x529da6(0x2fe)](_0x529da6(0x361) + _0x57cf2e(_0x529da6(0x1aa)) + _0x529da6(0x249) + GM_info[_0x529da6(0x3ea)][_0x529da6(0x392)] + _0x529da6(0x452) + _0x44c7de[_0x529da6(0x1aa)] + _0x529da6(0x286)), _0x59174b && (_0x3a5d3c(_0x529da6(0x2fd))[_0x529da6(0x2fe)](_0x529da6(0x3e0)), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group')['append'](_0x529da6(0x284) + _0x57cf2e(_0x529da6(0x194)) + _0x529da6(0x1c9)), _0x3a5d3c(_0x529da6(0x2b8))['append'](_0x529da6(0x36b) + _0x57cf2e('BATCH_DOWNLOAD_DIRECT') + _0x529da6(0x1c9)), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')['append'](_0x529da6(0x3a8) + _0x57cf2e(_0x529da6(0x19f)) + _0x529da6(0x311)));
        }
        function _0x480af2(_0x31eac0) {
            const _0x209db7 = _0x5c99b4;
            _0x3a5d3c('.IG_POPUP_DIG')['length'] && (_0x31eac0 ? _0x3a5d3c(_0x209db7(0x391))[_0x209db7(0x2b3)](_0x209db7(0x3c5)) : _0x3a5d3c(_0x209db7(0x391))[_0x209db7(0x3cb)](_0x209db7(0x3c5)));
        }
        function _0x30831b(_0x1a1666, _0x33d48f, _0x24116b, _0x4c2a4b, _0x11bab3, _0x70fee7) {
            return new Promise(_0x163cb9 => {
                setTimeout(() => {
                    const _0x4aeb7a = a0_0x2ded;
                    _0x26cd48(!![]), fetch(_0x1a1666)[_0x4aeb7a(0x256)](_0x35a7b4 => {
                        const _0x46170b = _0x4aeb7a;
                        return _0x35a7b4[_0x46170b(0x1ad)]()[_0x46170b(0x256)](_0x4ef6dc => {
                            _0x26cd48(![]), _0x27a908(_0x1a1666, _0x4ef6dc, _0x33d48f, _0x24116b, _0x4c2a4b, _0x11bab3, _0x70fee7), _0x163cb9(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x367882(_0x3aaafa, _0x202ac3) {
            const _0x1926f2 = _0x5c99b4, _0x2e8e60 = document[_0x1926f2(0x1a6)]('a');
            _0x2e8e60[_0x1926f2(0x28c)] = URL[_0x1926f2(0x2e1)](_0x3aaafa), _0x2e8e60[_0x1926f2(0x247)] = _0x202ac3, _0x2e8e60[_0x1926f2(0x185)](), _0x2e8e60[_0x1926f2(0x32f)]();
        }
        function _0x27a908(_0x41ef6b, _0x350fd4, _0x588b73, _0x24d32e, _0x2d0bc2, _0x5cae26, _0x1e774d) {
            const _0x1baac0 = _0x5c99b4;
            _0x2d0bc2 = parseInt(_0x2d0bc2['toString']()[_0x1baac0(0x2db)](0xd, '0'));
            _0x444c1c['RENAME_PUBLISH_DATE'] && (_0x2d0bc2 = parseInt(_0x2d0bc2[_0x1baac0(0x30d)]()[_0x1baac0(0x2db)](0xd, '0')));
            const _0x28fb38 = new Date(_0x2d0bc2), _0x49a552 = new URL(_0x41ef6b)['pathname'][_0x1baac0(0x35b)]('/')['at'](-0x1)[_0x1baac0(0x35b)]('.')['slice'](0x0, -0x1)[_0x1baac0(0x205)]('.'), _0x13e39e = _0x28fb38[_0x1baac0(0x3dd)]()['toString'](), _0x23a222 = (_0x28fb38['getMonth']() + 0x1)[_0x1baac0(0x30d)]()['padStart'](0x2, '0'), _0x4c1d18 = _0x28fb38[_0x1baac0(0x2d3)]()[_0x1baac0(0x30d)]()[_0x1baac0(0x368)](0x2, '0'), _0x16e43b = _0x28fb38[_0x1baac0(0x1a2)]()[_0x1baac0(0x30d)]()[_0x1baac0(0x368)](0x2, '0'), _0x98076b = _0x28fb38['getMinutes']()[_0x1baac0(0x30d)]()[_0x1baac0(0x368)](0x2, '0'), _0x4ae6b5 = _0x28fb38[_0x1baac0(0x30e)]()[_0x1baac0(0x30d)]()[_0x1baac0(0x368)](0x2, '0');
            var _0x4d4f5b = _0x286fd9[_0x1baac0(0x316)]['toUpperCase'](), _0x9c7796 = _0x1e774d ?? '', _0xecb244 = {
                    '%USERNAME%': _0x588b73,
                    '%SOURCE_TYPE%': _0x24d32e,
                    '%SHORTCODE%': _0x9c7796,
                    '%YEAR%': _0x13e39e,
                    '%2-YEAR%': _0x13e39e[_0x1baac0(0x44f)](-0x2),
                    '%MONTH%': _0x23a222,
                    '%DAY%': _0x4c1d18,
                    '%HOUR%': _0x16e43b,
                    '%MINUTE%': _0x98076b,
                    '%SECOND%': _0x4ae6b5,
                    '%ORIGINAL_NAME%': _0x49a552,
                    '%ORIGINAL_NAME_FIRST%': _0x49a552['split']('_')['at'](0x0)
                };
            _0x4d4f5b = _0x4d4f5b[_0x1baac0(0x338)](/%[\w\-]+%/g, function (_0x14c29f) {
                return _0xecb244[_0x14c29f] || _0x14c29f;
            });
            const _0x51bd81 = _0x588b73 + '_' + _0x49a552 + '.' + _0x5cae26, _0x4aea5e = _0x444c1c[_0x1baac0(0x30a)] ? _0x4d4f5b + '.' + _0x5cae26 : _0x51bd81;
            _0x444c1c[_0x1baac0(0x328)] && _0x5cae26 === _0x1baac0(0x230) && _0x1e774d && _0x24d32e === _0x1baac0(0x326) && (_0x350fd4[_0x1baac0(0x1a4)] === 'image/jpeg' || _0x350fd4[_0x1baac0(0x1a4)] === _0x1baac0(0x246)) ? _0x8c1c72(_0x350fd4, _0x1e774d)['then'](_0x48bb17 => _0x367882(_0x48bb17, _0x4aea5e))[_0x1baac0(0x3c9)](_0x4b7d53 => {
                const _0x11cd16 = _0x1baac0;
                console['error'](_0x11cd16(0x1f6), _0x4b7d53), _0x367882(_0x350fd4, _0x4aea5e);
            }) : _0x367882(_0x350fd4, _0x4aea5e);
        }
        async function _0x8c1c72(_0x3b5761, _0x13f6ce) {
            const _0x345f33 = _0x5c99b4, _0x295c2d = (..._0x4273f4) => {
                    const _0xb27bb7 = a0_0x2ded, _0x122eb4 = _0x4273f4[_0xb27bb7(0x34f)]((_0x587c3b, _0x45e027) => _0x587c3b + _0x45e027[_0xb27bb7(0x1bc)], 0x0), _0x4c18b5 = new Uint8Array(_0x122eb4);
                    let _0x1d6322 = 0x0;
                    for (const _0x906321 of _0x4273f4) {
                        _0x4c18b5['set'](_0x906321, _0x1d6322), _0x1d6322 += _0x906321[_0xb27bb7(0x1bc)];
                    }
                    return _0x4c18b5;
                }, _0x165269 = _0x1ac4bb => {
                    const _0xb09304 = a0_0x2ded, _0x26c6c9 = new Uint8Array(0x4);
                    return new DataView(_0x26c6c9[_0xb09304(0x197)])[_0xb09304(0x1fb)](0x0, _0x1ac4bb, !![]), _0x26c6c9;
                }, _0x281358 = _0x190842 => new TextEncoder()[_0x345f33(0x2a4)](_0x190842), _0x2fbcc6 = (_0x38910f, _0x2df319) => String[_0x345f33(0x2e7)](_0x38910f[_0x345f33(0x18b)](_0x2df319), _0x38910f['getUint8'](_0x2df319 + 0x1), _0x38910f[_0x345f33(0x18b)](_0x2df319 + 0x2), _0x38910f[_0x345f33(0x18b)](_0x2df319 + 0x3)), _0x33d8a4 = new Uint8Array(await _0x3b5761[_0x345f33(0x2f5)](0x0, 0xc)[_0x345f33(0x3bd)]()), _0x2e6221 = _0x33d8a4[0x0] === 0xff && _0x33d8a4[0x1] === 0xd8, _0x6a93a5 = _0x33d8a4[_0x345f33(0x1bc)] >= 0xc && String[_0x345f33(0x2e7)](..._0x33d8a4[_0x345f33(0x18a)](0x0, 0x4)) === 'RIFF' && String['fromCharCode'](..._0x33d8a4[_0x345f33(0x18a)](0x8, 0xc)) === _0x345f33(0x451);
            if (!_0x2e6221 && !_0x6a93a5)
                throw new Error(_0x345f33(0x364));
            const _0x5cf52e = _0x281358(_0x345f33(0x3dc) + _0x13f6ce + '/\x00'), _0x35e405 = _0x281358(_0x345f33(0x291)), _0x993b10 = Uint8Array[_0x345f33(0x2f2)]([
                    0x49,
                    0x49,
                    0x2a,
                    0x0,
                    0x8,
                    0x0,
                    0x0,
                    0x0
                ]), _0x53fa0a = Uint8Array[_0x345f33(0x2f2)]([
                    0x1,
                    0x0
                ]), _0x502476 = _0x295c2d(Uint8Array[_0x345f33(0x2f2)]([
                    0xe,
                    0x1,
                    0x2,
                    0x0
                ]), _0x165269(_0x5cf52e[_0x345f33(0x1bc)]), _0x165269(0x8 + 0x2 + 0xc + 0x4)), _0x508bb0 = _0x295c2d(_0x993b10, _0x53fa0a, _0x502476, _0x165269(0x0), _0x5cf52e);
            if (_0x2e6221) {
                const _0x33f3a6 = await _0x3b5761[_0x345f33(0x3bd)](), _0x56a039 = new DataView(_0x33f3a6), _0x23ca46 = _0x295c2d(_0x35e405, _0x508bb0), _0x3b5c07 = new Uint8Array(0x4);
                new DataView(_0x3b5c07['buffer'])[_0x345f33(0x445)](0x0, 0xffe1), new DataView(_0x3b5c07[_0x345f33(0x197)])[_0x345f33(0x445)](0x2, _0x23ca46[_0x345f33(0x1bc)] + 0x2);
                const _0x3962a2 = _0x295c2d(_0x3b5c07, _0x23ca46), _0x25d78f = [new Uint8Array(_0x33f3a6, 0x0, 0x2)];
                let _0x3d0a5a = 0x2, _0x593d7e = ![];
                while (_0x3d0a5a < _0x56a039['byteLength']) {
                    const _0x39558b = _0x56a039[_0x345f33(0x442)](_0x3d0a5a);
                    if ((_0x39558b & 0xff00) !== 0xff00)
                        break;
                    if (_0x39558b === 0xffda) {
                        if (!_0x593d7e)
                            _0x25d78f[_0x345f33(0x393)](_0x3962a2);
                        _0x25d78f[_0x345f33(0x393)](new Uint8Array(_0x33f3a6, _0x3d0a5a));
                        break;
                    }
                    const _0xad0146 = _0x56a039[_0x345f33(0x442)](_0x3d0a5a + 0x2) + 0x2;
                    if (_0x39558b === 0xffe1) {
                        _0x3d0a5a += _0xad0146;
                        continue;
                    }
                    _0x25d78f[_0x345f33(0x393)](new Uint8Array(_0x33f3a6, _0x3d0a5a, _0xad0146)), _0x3d0a5a += _0xad0146;
                }
                const _0x2246ca = _0x25d78f[_0x345f33(0x34f)]((_0x2a3420, _0x376a8a) => _0x2a3420 + _0x376a8a['length'], 0x0), _0x23f98a = new Uint8Array(_0x2246ca);
                let _0x5f258b = 0x0;
                return _0x25d78f[_0x345f33(0x2d1)](_0x487d72 => {
                    const _0x46d85c = _0x345f33;
                    _0x23f98a[_0x46d85c(0x319)](_0x487d72, _0x5f258b), _0x5f258b += _0x487d72[_0x46d85c(0x1bc)];
                }), new Blob([_0x23f98a], { 'type': _0x345f33(0x1ef) });
            }
            const _0x12b4cc = await _0x3b5761['arrayBuffer'](), _0x5c6358 = new DataView(_0x12b4cc), _0x20dba9 = [];
            let _0x5d33ba = -0x1, _0x4006fa = 0xc;
            while (_0x4006fa < _0x5c6358[_0x345f33(0x333)]) {
                const _0x41e582 = _0x2fbcc6(_0x5c6358, _0x4006fa), _0x1723bf = _0x5c6358['getUint32'](_0x4006fa + 0x4, !![]), _0x5de41e = _0x1723bf & 0x1, _0x24601f = 0x8 + _0x1723bf + _0x5de41e;
                if (_0x41e582 !== _0x345f33(0x2e4) && _0x41e582 !== 'XMP\x20') {
                    _0x20dba9[_0x345f33(0x393)](new Uint8Array(_0x12b4cc, _0x4006fa, _0x24601f));
                    if (_0x41e582 === _0x345f33(0x199))
                        _0x5d33ba = _0x20dba9[_0x345f33(0x1bc)] - 0x1;
                }
                _0x4006fa += _0x24601f;
            }
            let _0x35cae8 = _0x295c2d(_0x281358('EXIF'), _0x165269(_0x35e405[_0x345f33(0x1bc)] + _0x508bb0['length']), _0x35e405, _0x508bb0);
            if (_0x35cae8[_0x345f33(0x1bc)] & 0x1)
                _0x35cae8 = _0x295c2d(_0x35cae8, Uint8Array['of'](0x0));
            if (_0x5d33ba !== -0x1) {
                const _0xbcc97c = new Uint8Array(_0x20dba9[_0x5d33ba]);
                _0xbcc97c[0x8] |= 0x10, _0x20dba9[_0x5d33ba] = _0xbcc97c, _0x20dba9[_0x345f33(0x3eb)](_0x5d33ba + 0x1, 0x0, _0x35cae8);
            } else
                _0x20dba9[_0x345f33(0x393)](_0x35cae8);
            const _0xc13431 = _0x20dba9['reduce']((_0x4d4207, _0x5240c3) => _0x4d4207 + _0x5240c3['length'], 0x0), _0x820fe6 = _0x295c2d(_0x281358(_0x345f33(0x36d)), _0x165269(_0xc13431 + 0x4), _0x281358(_0x345f33(0x451))), _0x75b292 = _0x295c2d(_0x820fe6, ..._0x20dba9);
            return new Blob([_0x75b292], { 'type': _0x345f33(0x246) });
        }
        async function _0x36152d(_0x51791b, _0x5f151f) {
            const _0x106641 = _0x5c99b4;
            let _0x117fd1 = new Date()['getTime'](), _0xa57d68 = Math[_0x106641(0x1b0)](_0x117fd1 / 0x3e8), _0x45c38c = _0x3a5d3c(_0x51791b)[_0x106641(0x360)]('data-username') ? _0x3a5d3c(_0x51791b)[_0x106641(0x360)]('data-username') : _0x286fd9[_0x106641(0x43f)];
            !_0x45c38c && _0x3a5d3c(_0x51791b)['attr'](_0x106641(0x217)) && (_0x1d76a4(_0x106641(0x2fc), _0x3a5d3c(_0x51791b)[_0x106641(0x360)](_0x106641(0x1a3))), _0x45c38c = await _0x20e240(_0x3a5d3c(_0x51791b)[_0x106641(0x360)]('data-path'))[_0x106641(0x3c9)](_0x26c24b => {
                const _0x210299 = _0x106641;
                _0x1d76a4(_0x210299(0x221), _0x26c24b[_0x210299(0x44d)]);
            }), _0x45c38c == null && (_0x45c38c = _0x106641(0x317)));
            _0x444c1c[_0x106641(0x25b)] && _0x3a5d3c(_0x51791b)[_0x106641(0x360)](_0x106641(0x265)) && (_0xa57d68 = parseInt(_0x3a5d3c(_0x51791b)[_0x106641(0x360)](_0x106641(0x265))));
            if (_0x444c1c[_0x106641(0x40d)]) {
                _0x26cd48(!![]);
                let _0x2db27b = await _0xc5148d(_0x3a5d3c(_0x51791b)[_0x106641(0x360)](_0x106641(0x1b6)));
                _0x26cd48(![]);
                if (_0x2db27b[_0x106641(0x1c3)] === 'ok') {
                    var _0xf94ac0 = null;
                    _0x2db27b[_0x106641(0x412)][0x0][_0x106641(0x312)] ? _0xf94ac0 = _0x2db27b['items'][0x0][_0x106641(0x312)][0x0]['url'] : (_0x2db27b[_0x106641(0x412)][0x0]['image_versions2']['candidates'][_0x106641(0x1bd)](function (_0x43d281, _0x34eb9f) {
                        const _0x4b1457 = _0x106641;
                        let _0x2cab76 = new URL(_0x43d281[_0x4b1457(0x446)])[_0x4b1457(0x34e)]['get'](_0x4b1457(0x28e)), _0x5d0aea = new URL(_0x34eb9f[_0x4b1457(0x446)])[_0x4b1457(0x34e)][_0x4b1457(0x309)]('stp');
                        if (_0x2cab76 && _0x5d0aea) {
                            if (_0x2cab76[_0x4b1457(0x1bc)] > _0x5d0aea[_0x4b1457(0x1bc)])
                                return 0x1;
                            if (_0x2cab76['length'] < _0x5d0aea['length'])
                                return -0x1;
                        } else {
                            if (_0x43d281['width'] < _0x34eb9f[_0x4b1457(0x1c7)])
                                return 0x1;
                            if (_0x43d281[_0x4b1457(0x1c7)] > _0x34eb9f[_0x4b1457(0x1c7)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0xf94ac0 = _0x2db27b[_0x106641(0x412)][0x0][_0x106641(0x20a)][_0x106641(0x403)][0x0][_0x106641(0x446)]);
                    if (_0x5f151f) {
                        let _0x52e6da = new URL(_0xf94ac0);
                        _0x52e6da[_0x106641(0x460)] = _0x106641(0x2d0), _0x4c5cf2(_0x52e6da[_0x106641(0x28c)]);
                    } else
                        _0x30831b(_0xf94ac0, _0x45c38c, _0x3a5d3c(_0x51791b)[_0x106641(0x360)]('data-name'), _0xa57d68, _0x3a5d3c(_0x51791b)[_0x106641(0x360)](_0x106641(0x224)), _0x3a5d3c(_0x51791b)[_0x106641(0x360)]('data-path'));
                } else {
                    if (_0x444c1c[_0x106641(0x32c)]) {
                        if (_0x5f151f) {
                            let _0x34abf5 = new URL(_0x3a5d3c(_0x51791b)['attr']('data-href'));
                            _0x34abf5[_0x106641(0x460)] = _0x106641(0x2d0), _0x4c5cf2(_0x34abf5[_0x106641(0x28c)]);
                        } else
                            _0x30831b(_0x3a5d3c(_0x51791b)[_0x106641(0x360)](_0x106641(0x1a3)), _0x45c38c, _0x3a5d3c(_0x51791b)[_0x106641(0x360)]('data-name'), _0xa57d68, _0x3a5d3c(_0x51791b)[_0x106641(0x360)]('data-type'), _0x3a5d3c(_0x51791b)['attr'](_0x106641(0x217)));
                    } else
                        alert(_0x106641(0x388) + _0x2db27b[_0x106641(0x44d)]);
                    _0x1d76a4(_0x2db27b);
                }
            } else
                _0x30831b(_0x3a5d3c(_0x51791b)[_0x106641(0x360)](_0x106641(0x1a3)), _0x45c38c, _0x3a5d3c(_0x51791b)[_0x106641(0x360)](_0x106641(0x2dd)), _0xa57d68, _0x3a5d3c(_0x51791b)[_0x106641(0x360)](_0x106641(0x224)), _0x3a5d3c(_0x51791b)['attr'](_0x106641(0x217)));
        }
        function _0x1b440b() {
            const _0x1fe555 = _0x5c99b4;
            for (let _0x1f363f of _0x286fd9[_0x1fe555(0x3ab)]) {
                _0x1d76a4(_0x1fe555(0x2c3), _0x1f363f), GM_unregisterMenuCommand(_0x1f363f);
            }
            _0x286fd9[_0x1fe555(0x3ab)][_0x1fe555(0x393)](GM_registerMenuCommand(_0x57cf2e(_0x1fe555(0x3aa)), () => {
                _0x47ad12();
            }, { 'accessKey': 'w' })), _0x286fd9['registerMenuIds'][_0x1fe555(0x393)](GM_registerMenuCommand(_0x57cf2e('DONATE'), () => {
                GM_openInTab('https://ko-fi.com/snkoarashi', { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x286fd9[_0x1fe555(0x3ab)][_0x1fe555(0x393)](GM_registerMenuCommand(_0x57cf2e('DEBUG'), () => {
                _0x2cce06();
            }, { 'accessKey': 'z' })), _0x286fd9[_0x1fe555(0x3ab)]['push'](GM_registerMenuCommand(_0x57cf2e('FEEDBACK'), () => {
                _0x46fcdf();
            }, { 'accessKey': 'f' })), _0x286fd9[_0x1fe555(0x3ab)][_0x1fe555(0x393)](GM_registerMenuCommand(_0x57cf2e(_0x1fe555(0x273)), () => {
                _0x11f525();
            }, { 'accessKey': 'c' })), _0x286fd9['registerMenuIds']['push'](GM_registerMenuCommand(_0x57cf2e(_0x1fe555(0x259)), () => {
                _0x4a1272();
            }, { 'accessKey': 'r' }));
        }
        function _0x40279d(_0x3d164e) {
            const _0x303b56 = _0x5c99b4;
            if (!_0x444c1c[_0x303b56(0x25e)])
                return;
            const _0x19e45d = GM_getValue('G_CHECK_TIMESTAMP') ?? new Date()[_0x303b56(0x38c)](), _0x2b871c = new Date()['getTime']();
            _0x2b871c > parseInt(_0x19e45d) + _0x3d164e * 0x3e8 && (GM_setValue(_0x303b56(0x39f), new Date()['getTime']()), _0x11f525());
        }
        function _0x11f525() {
            const _0x2b32f6 = _0x5c99b4, _0x5e068d = GM_info['script'][_0x2b32f6(0x392)], _0x33ef8e = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': _0x2b32f6(0x24b),
                'url': _0x33ef8e,
                'onload': function (_0x34cd0f) {
                    const _0x2df1af = _0x2b32f6, _0x290b48 = _0x34cd0f[_0x2df1af(0x264)], _0x4ce465 = _0x290b48[_0x2df1af(0x261)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x4ce465 && _0x4ce465[0x1]) {
                        const _0x17c263 = _0x4ce465[0x1];
                        _0x1d76a4(_0x2df1af(0x2d6), _0x5e068d, '|', _0x2df1af(0x324), _0x17c263), _0x17c263 !== _0x5e068d && typeof this[_0x2df1af(0x45d)] === 'undefined' ? (this[_0x2df1af(0x45d)] = null, GM_notification({
                            'text': _0x57cf2e(_0x2df1af(0x1ae)),
                            'title': _0x57cf2e(_0x2df1af(0x25f)),
                            'tag': _0x2df1af(0x3ce),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
                            'onclick': _0x4017d1 => {
                                const _0x1e5c96 = _0x2df1af;
                                _0x4017d1?.[_0x1e5c96(0x2aa)]();
                                var _0x3d64f4 = GM_openInTab(GM_info[_0x1e5c96(0x3ea)][_0x1e5c96(0x378)]);
                                setTimeout(() => {
                                    _0x3d64f4['close']();
                                }, 0xfa);
                            }
                        })) : _0x1d76a4('there\x20is\x20no\x20new\x20update');
                    } else
                        console[_0x2df1af(0x3a5)](_0x2df1af(0x1e4));
                }
            });
        }
        function _0x47ad12() {
            const _0x1cf4ee = _0x5c99b4;
            _0x3a5d3c('.IG_POPUP_DIG')['remove'](), _0x498290(), _0x3a5d3c(_0x1cf4ee(0x37f))['text'](_0x1cf4ee(0x211)), _0x3a5d3c(_0x1cf4ee(0x192))[_0x1cf4ee(0x2fe)](_0x1cf4ee(0x189));
            for (let _0x4d9650 in _0x1dd3d3) {
                _0x3a5d3c(_0x1cf4ee(0x243))[_0x1cf4ee(0x2fe)](_0x1cf4ee(0x32e) + _0x4d9650 + '\x22\x20' + (_0x286fd9[_0x1cf4ee(0x2a0)] == _0x4d9650 ? _0x1cf4ee(0x2be) : '') + '>' + _0x1dd3d3[_0x4d9650] + '</option>');
            }
            for (let _0x5c4918 in _0x444c1c) {
                _0x3a5d3c(_0x1cf4ee(0x23a))[_0x1cf4ee(0x2fe)](_0x1cf4ee(0x43e) + (_0x574b19[_0x1cf4ee(0x1ff)](_0x5c4918) ? '\x20child' : '') + _0x1cf4ee(0x2da) + _0x57cf2e(_0x5c4918 + _0x1cf4ee(0x41d)) + '\x22\x20data-ih-locale-title=\x22' + (_0x5c4918 + _0x1cf4ee(0x41d)) + _0x1cf4ee(0x42b) + _0x5c4918 + '\x22>' + _0x57cf2e(_0x5c4918) + _0x1cf4ee(0x1d1) + _0x5c4918 + _0x1cf4ee(0x335) + (_0x444c1c[_0x5c4918] === !![] ? _0x1cf4ee(0x325) : '') + _0x1cf4ee(0x31d)), _0x5c4918 === 'MODIFY_VIDEO_VOLUME' && _0x3a5d3c(_0x1cf4ee(0x3fd) + _0x5c4918 + '\x22]')[_0x1cf4ee(0x1b8)]('label')['on'](_0x1cf4ee(0x2e9), function (_0x2a3cdb) {
                    const _0x4af12a = _0x1cf4ee;
                    _0x2a3cdb[_0x4af12a(0x2aa)](), _0x3a5d3c(this)[_0x4af12a(0x318)](_0x4af12a(0x1f8))[_0x4af12a(0x1bc)] === 0x0 && (_0x3a5d3c(this)['append'](_0x4af12a(0x267)), _0x3a5d3c(this)['children'](_0x4af12a(0x1f8))[_0x4af12a(0x2fe)](_0x4af12a(0x3b8) + _0x286fd9[_0x4af12a(0x2bb)] + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0x3a5d3c(this)['children'](_0x4af12a(0x1f8))[_0x4af12a(0x2fe)](_0x4af12a(0x3b8) + _0x286fd9['videoVolume'] + _0x4af12a(0x1d6)), _0x3a5d3c(this)[_0x4af12a(0x3d2)](_0x4af12a(0x1f8))[_0x4af12a(0x2fe)](_0x4af12a(0x20e) + _0x44c7de['CLOSE'] + '</div>'));
                }), _0x5c4918 === _0x1cf4ee(0x30a) && _0x3a5d3c(_0x1cf4ee(0x3fd) + _0x5c4918 + '\x22]')[_0x1cf4ee(0x1b8)](_0x1cf4ee(0x1a9))['on'](_0x1cf4ee(0x2e9), function (_0x438ce8) {
                    const _0x4cac05 = _0x1cf4ee;
                    _0x438ce8[_0x4cac05(0x2aa)](), _0x3a5d3c(this)[_0x4cac05(0x318)](_0x4cac05(0x1f8))['length'] === 0x0 && (_0x3a5d3c(this)[_0x4cac05(0x2fe)](_0x4cac05(0x267)), _0x3a5d3c(this)[_0x4cac05(0x3d2)]('#tempWrapper')['append'](_0x4cac05(0x38b) + _0x286fd9[_0x4cac05(0x316)] + _0x4cac05(0x3af)), _0x3a5d3c(this)['children'](_0x4cac05(0x1f8))['append'](_0x4cac05(0x20e) + _0x44c7de[_0x4cac05(0x1aa)] + _0x4cac05(0x1c5)));
                });
            }
        }
        function _0x2cce06() {
            const _0x102c16 = _0x5c99b4;
            _0x3a5d3c('.IG_POPUP_DIG')['remove'](), _0x498290(), _0x3a5d3c(_0x102c16(0x37f))['text'](_0x102c16(0x394)), _0x3a5d3c(_0x102c16(0x23a))[_0x102c16(0x2fe)](_0x102c16(0x3cd)), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x102c16(0x2fe)](_0x102c16(0x428)), _0x3a5d3c(_0x102c16(0x421))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x57cf2e(_0x102c16(0x35a)) + _0x102c16(0x229)), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x102c16(0x2fe)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>' + _0x57cf2e(_0x102c16(0x358)) + _0x102c16(0x229)), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x102c16(0x2fe)](_0x102c16(0x22d) + _0x57cf2e(_0x102c16(0x315)) + _0x102c16(0x208)), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x102c16(0x2fe)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x57cf2e(_0x102c16(0x377)) + _0x102c16(0x229)), _0x3a5d3c(_0x102c16(0x421))[_0x102c16(0x2fe)](_0x102c16(0x1cc) + _0x57cf2e(_0x102c16(0x420)) + _0x102c16(0x229));
        }
        function _0x46fcdf() {
            const _0x3263c6 = _0x5c99b4;
            _0x3a5d3c('.IG_POPUP_DIG')[_0x3263c6(0x32f)](), _0x498290(), _0x3a5d3c(_0x3263c6(0x37f))[_0x3263c6(0x44b)](_0x3263c6(0x42a)), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')['append']('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x3a5d3c(_0x3263c6(0x421))[_0x3263c6(0x2fe)](_0x3263c6(0x310) + _0x57cf2e(_0x3263c6(0x201)) + _0x3263c6(0x229)), _0x3a5d3c(_0x3263c6(0x421))[_0x3263c6(0x2fe)](_0x3263c6(0x2ee) + _0x57cf2e(_0x3263c6(0x377)) + _0x3263c6(0x229)), _0x3a5d3c(_0x3263c6(0x421))[_0x3263c6(0x2fe)](_0x3263c6(0x1cc) + _0x57cf2e('REPORT_DISCORD') + _0x3263c6(0x229));
        }
        function _0x4c5cf2(_0x50477f) {
            const _0x4a3dda = _0x5c99b4;
            var _0x52622f = document[_0x4a3dda(0x1a6)]('a');
            _0x52622f[_0x4a3dda(0x28c)] = _0x50477f, _0x52622f[_0x4a3dda(0x1d7)] = _0x4a3dda(0x2ea), document[_0x4a3dda(0x44e)][_0x4a3dda(0x187)](_0x52622f), _0x52622f[_0x4a3dda(0x185)](), _0x52622f[_0x4a3dda(0x32f)]();
        }
        function _0x4a1272() {
            const _0x381345 = _0x5c99b4;
            clearInterval(_0x286fd9[_0x381345(0x2a8)]), _0x286fd9[_0x381345(0x21a)][_0x381345(0x2d1)](_0x24d35b => {
                const _0xcbac40 = _0x381345;
                _0x24d35b[_0xcbac40(0x1e7)][_0xcbac40(0x2d1)](_0x376e4b => {
                    const _0x19e5a8 = _0xcbac40;
                    _0x3a5d3c(_0x24d35b[_0x19e5a8(0x209)])[_0x19e5a8(0x45c)](_0x19e5a8(0x185), _0x376e4b);
                });
            }), _0x286fd9[_0x381345(0x21a)] = [], _0x3a5d3c(_0x381345(0x2c7))[_0x381345(0x32f)](), _0x3a5d3c(_0x381345(0x3ae))['remove'](), _0x3a5d3c(_0x381345(0x402))[_0x381345(0x287)]('data-snig'), _0x286fd9[_0x381345(0x304)] = ![], _0x286fd9[_0x381345(0x2d5)] = ![], _0x286fd9[_0x381345(0x24f)] = location[_0x381345(0x28c)], _0x286fd9[_0x381345(0x303)][_0x381345(0x1e3)](), _0x1d76a4(_0x381345(0x3a0));
        }
        function _0x1d76a4(..._0x71d355) {
            const _0x1532a4 = _0x5c99b4;
            var _0x136cdc = new Date();
            _0x286fd9[_0x1532a4(0x3bc)][_0x1532a4(0x393)]({
                'time': _0x136cdc[_0x1532a4(0x38c)](),
                'content': [..._0x71d355]
            }), _0x286fd9[_0x1532a4(0x3bc)][_0x1532a4(0x1bc)] > 0x3e8 && (_0x286fd9[_0x1532a4(0x3bc)] = [
                {
                    'time': _0x136cdc['getTime'](),
                    'content': [_0x1532a4(0x414)]
                },
                ..._0x286fd9[_0x1532a4(0x3bc)][_0x1532a4(0x2f5)](-0x3e7)
            ]), console[_0x1532a4(0x3bb)]('[' + _0x136cdc['toISOString']() + ']', ..._0x71d355);
        }
        function _0xe18212() {
            const _0x1c3a08 = _0x5c99b4;
            for (let _0x8d223 in _0x444c1c) {
                GM_getValue(_0x8d223) != null && typeof GM_getValue(_0x8d223) === _0x1c3a08(0x3b0) && (_0x444c1c[_0x8d223] = GM_getValue(_0x8d223), _0x8d223 === 'MODIFY_VIDEO_VOLUME' && GM_getValue(_0x8d223) !== !![] && (_0x286fd9['videoVolume'] = 0x1));
            }
        }
        function _0x18133a(_0x427912, _0x1caf81, _0x700a, _0x516922 = '') {
            const _0x176d11 = _0x5c99b4;
            _0x1caf81[_0x176d11(0x318)](_0x176d11(0x22f))[_0x176d11(0x1bc)] === 0x0 ? (_0x1caf81[_0x176d11(0x2fe)]('<div\x20class=\x22volume_slider\x20' + _0x516922 + _0x176d11(0x3af)), _0x1caf81[_0x176d11(0x318)](_0x176d11(0x22f))[_0x176d11(0x2fe)](_0x176d11(0x334) + _0x286fd9[_0x176d11(0x2bb)] + '\x22\x20/></div>'), _0x1caf81[_0x176d11(0x318)](_0x176d11(0x3bf))[_0x176d11(0x360)](_0x176d11(0x215), '--ig-track-progress:\x20' + (_0x286fd9['videoVolume'] * 0x64 + '%')), _0x1caf81[_0x176d11(0x318)](_0x176d11(0x3bf))['on'](_0x176d11(0x3e7), function () {
                const _0x46a13d = _0x176d11;
                var _0x402b5a = _0x3a5d3c(this)[_0x46a13d(0x253)]() * 0x64 + '%';
                _0x286fd9[_0x46a13d(0x2bb)] = _0x3a5d3c(this)[_0x46a13d(0x253)](), GM_setValue('G_VIDEO_VOLUME', _0x3a5d3c(this)['val']()), _0x3a5d3c(this)[_0x46a13d(0x360)](_0x46a13d(0x215), '--ig-track-progress:\x20' + _0x402b5a), _0x427912['each'](function () {
                    const _0x542fc7 = _0x46a13d;
                    _0x1d76a4('(' + _0x700a + ')', 'video\x20volume\x20changed\x20#slider'), this['volume'] = _0x286fd9[_0x542fc7(0x2bb)];
                });
            }), _0x1caf81['find'](_0x176d11(0x3bf))['on'](_0x176d11(0x405), function () {
                const _0x2bb2d2 = _0x176d11;
                var _0x535455 = _0x286fd9[_0x2bb2d2(0x2bb)] * 0x64 + '%';
                _0x3a5d3c(this)[_0x2bb2d2(0x360)](_0x2bb2d2(0x215), _0x2bb2d2(0x462) + _0x535455), _0x3a5d3c(this)['val'](_0x286fd9[_0x2bb2d2(0x2bb)]), _0x427912[_0x2bb2d2(0x27f)](function () {
                    const _0x45f0fe = _0x2bb2d2;
                    _0x1d76a4('(' + _0x700a + ')', _0x45f0fe(0x35c)), this['volume'] = _0x286fd9[_0x45f0fe(0x2bb)];
                });
            }), _0x1caf81[_0x176d11(0x318)]('div.volume_slider')['on']('click', function (_0x21f50c) {
                const _0x3c8b51 = _0x176d11;
                _0x21f50c[_0x3c8b51(0x1ea)](), _0x21f50c[_0x3c8b51(0x2aa)]();
            })) : _0x1caf81[_0x176d11(0x318)]('div.volume_slider')[_0x176d11(0x32f)]();
        }
        var _0x3c633f = null;
        function _0x11e8a3(_0xb71a40) {
            const _0x294196 = _0x5c99b4;
            _0x2ffac3(), _0x3a5d3c(_0x294196(0x44e))['append']('<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22display:\x20flex;filter:\x20invert(1);gap:\x208px;margin-right:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_left\x22\x20style=\x22cursor:\x20pointer;\x22>' + _0x44c7de[_0x294196(0x23b)] + _0x294196(0x1c4) + _0x44c7de[_0x294196(0x23b)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>' + _0x44c7de['CLOSE'] + _0x294196(0x2ae));
            const _0xba94bf = _0x3a5d3c(_0x294196(0x37e)), _0x10cda4 = _0x3a5d3c('#imageViewer\x20>\x20section'), _0x1888d8 = _0x3a5d3c('#iv_transform'), _0x2381a5 = _0x3a5d3c(_0x294196(0x308)), _0x934d50 = _0x3a5d3c(_0x294196(0x29f)), _0x5ddd26 = _0x3a5d3c(_0x294196(0x434)), _0x1362c4 = _0x3a5d3c(_0x294196(0x207)), _0x5e634a = _0x3a5d3c(_0x294196(0x45a)), _0x4ea31d = _0x3a5d3c(_0x294196(0x374));
            _0x1362c4[_0x294196(0x360)](_0x294196(0x24e), _0xb71a40), _0xba94bf[_0x294196(0x350)](_0x294196(0x3da), 'flex'), _0x1888d8[_0x294196(0x350)](_0x294196(0x337), _0x294196(0x184)), _0x1888d8[_0x294196(0x350)](_0x294196(0x2bf), 'transform\x200.15s\x20ease'), _0x2381a5['css'](_0x294196(0x337), _0x294196(0x3a2)), _0x2381a5['css'](_0x294196(0x2bf), 'transform\x200.15s\x20ease'), _0x1888d8[_0x294196(0x350)]('will-change', _0x294196(0x295)), _0x2381a5['css'](_0x294196(0x400), 'transform');
            let _0x5557f4 = 0x0, _0x38f19c = 0x1, _0x5a6ca6 = 0x0, _0x6084b9 = 0x0, _0x489bc = ![], _0x4de531 = ![], _0x32912a, _0x4e3252;
            var _0x3e7f69 = {
                'x': 0x0,
                'y': 0x0
            };
            _0x3c633f = setInterval(() => {
                const _0x1f7ba5 = {
                    'x': _0x5a6ca6,
                    'y': _0x6084b9
                };
                _0x1f7ba5['x'] !== _0x3e7f69['x'] || _0x1f7ba5['y'] !== _0x3e7f69['y'] ? _0x4de531 = !![] : _0x4de531 = ![], _0x3e7f69 = _0x1f7ba5;
            }, 0x64), _0x1362c4['on'](_0x294196(0x42d), () => {
                _0x5a6ca6 = 0x0, _0x6084b9 = 0x0, _0x1fe4dd();
            }), _0x1362c4['on'](_0x294196(0x235), _0x1c87e5 => {
                const _0x1cf08d = _0x294196;
                _0x1c87e5[_0x1cf08d(0x2aa)]();
            }), _0x1362c4['on']('click', _0x464f2e => {
                const _0x22e8a5 = _0x294196;
                _0x464f2e[_0x22e8a5(0x2aa)](), _0x464f2e[_0x22e8a5(0x1ea)](), !_0x4de531 && (_0x38f19c <= 0x1 ? _0x23b500(_0x464f2e, Math[_0x22e8a5(0x3b5)](Math[_0x22e8a5(0x2c8)](0x1, _0x38f19c + 1.25), 0x5)) : (_0x38f19c = 0x1, _0x5a6ca6 = 0x0, _0x6084b9 = 0x0), _0x1fe4dd());
            }), _0x10cda4['on'](_0x294196(0x33d), _0x5514de => {
                const _0x290f32 = _0x294196;
                _0x5514de[_0x290f32(0x2aa)](), _0x23b500(_0x5514de);
            }), _0xba94bf['on'](_0x294196(0x33d), _0x5ae1cc => {
                const _0x23699b = _0x294196;
                _0x5ae1cc[_0x23699b(0x2aa)]();
            }), _0x1362c4['on'](_0x294196(0x25d), _0x5db0ef => {
                const _0x134298 = _0x294196;
                if (_0x38f19c == 0x1)
                    return;
                _0x489bc = !![], _0x32912a = _0x5db0ef['pageX'] - _0x5a6ca6, _0x4e3252 = _0x5db0ef['pageY'] - _0x6084b9, _0x1362c4[_0x134298(0x350)]('cursor', _0x134298(0x3a7));
            }), _0x1362c4['on'](_0x294196(0x34d), () => {
                const _0x53cbe3 = _0x294196;
                if (_0x38f19c == 0x1)
                    return;
                _0x489bc = ![], _0x1362c4[_0x53cbe3(0x350)]('cursor', _0x53cbe3(0x379));
            }), _0x5e634a['on']('click', function () {
                _0x5557f4 -= 0x5a, _0x1fe4dd();
            }), _0x4ea31d['on'](_0x294196(0x185), function () {
                _0x5557f4 += 0x5a, _0x1fe4dd();
            }), _0x3a5d3c(document)['on'](_0x294196(0x1e6), _0xdbc9b5 => {
                const _0xbcff94 = _0x294196;
                if (!_0x489bc)
                    return;
                _0xdbc9b5[_0xbcff94(0x2aa)](), _0x5a6ca6 = _0xdbc9b5[_0xbcff94(0x2ca)] - _0x32912a, _0x6084b9 = _0xdbc9b5[_0xbcff94(0x423)] - _0x4e3252, _0x1fe4dd();
            }), _0xba94bf['on'](_0x294196(0x185), () => {
                _0x2ffac3();
            }), _0x5ddd26['on'](_0x294196(0x185), () => {
                _0x2ffac3();
            }), _0x934d50['on'](_0x294196(0x185), _0x3f20e2 => {
                const _0x20f6df = _0x294196;
                _0x3f20e2['preventDefault'](), _0x3f20e2[_0x20f6df(0x1ea)]();
            });
            function _0x1fe4dd() {
                const _0x4d8956 = _0x294196;
                _0x1888d8[_0x4d8956(0x350)](_0x4d8956(0x2bf), _0x4de531 ? _0x4d8956(0x367) : _0x4d8956(0x1da)), _0x1888d8[_0x4d8956(0x350)](_0x4d8956(0x295), _0x4d8956(0x45f) + _0x5a6ca6 + 'px,\x20' + _0x6084b9 + _0x4d8956(0x27b) + _0x38f19c + ')'), _0x2381a5[_0x4d8956(0x350)]('transform', _0x4d8956(0x20f) + _0x5557f4 + _0x4d8956(0x1db)), _0x38f19c == 0x1 ? _0x1362c4['css']('cursor', _0x4d8956(0x3ed)) : _0x1362c4[_0x4d8956(0x350)](_0x4d8956(0x36a), _0x4d8956(0x3a7));
            }
            function _0x23b500(_0x1bebb7, _0x24a133) {
                const _0x9f39c4 = _0x294196;
                _0x1bebb7[_0x9f39c4(0x2aa)]();
                let _0x455228 = _0x38f19c;
                if (_0x24a133 == null) {
                    let _0x48a395 = 0.1, _0x49b3f0 = _0x1bebb7[_0x9f39c4(0x32d)][_0x9f39c4(0x3d4)] < 0x0 ? 0x1 : -0x1;
                    _0x38f19c = Math[_0x9f39c4(0x3b5)](0x5, Math[_0x9f39c4(0x2c8)](0x1, _0x38f19c + _0x49b3f0 * _0x48a395 * _0x38f19c));
                } else
                    _0x38f19c = _0x24a133;
                let _0x48d8b7 = _0x10cda4[0x0]['getBoundingClientRect'](), _0x145509 = _0x1bebb7[_0x9f39c4(0x2ba)] - _0x48d8b7['left'], _0x1ded47 = _0x1bebb7[_0x9f39c4(0x459)] - _0x48d8b7[_0x9f39c4(0x2a7)], _0x1a2939 = (_0x145509 - _0x5a6ca6) / _0x455228, _0x2c36eb = (_0x1ded47 - _0x6084b9) / _0x455228;
                _0x5a6ca6 = -_0x1a2939 * _0x38f19c + _0x145509, _0x6084b9 = -_0x2c36eb * _0x38f19c + _0x1ded47, _0x1fe4dd();
            }
        }
        function _0x2ffac3() {
            const _0x4d9ad2 = _0x5c99b4;
            clearInterval(_0x3c633f), _0x3a5d3c('#imageViewer')[_0x4d9ad2(0x32f)](), _0x3a5d3c(document)[_0x4d9ad2(0x45c)](_0x4d9ad2(0x1e6));
        }
        function _0x11ceb9() {
            const _0x124b45 = _0x5c99b4;
            var _0x3de7da = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x124b45(0x2ad),
                        'NOTICE_UPDATE_CONTENT': 'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
                        'CHECK_UPDATE': _0x124b45(0x438),
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': _0x124b45(0x3c6),
                        'RELOAD_SCRIPT': _0x124b45(0x28d),
                        'DONATE': _0x124b45(0x42f),
                        'FEEDBACK': _0x124b45(0x3de),
                        'IMAGE_VIEWER': 'Open\x20Image\x20In\x20Viewer',
                        'NEW_TAB': _0x124b45(0x32a),
                        'SHOW_DOM_TREE': 'Show\x20DOM\x20Tree',
                        'SELECT_AND_COPY': _0x124b45(0x260),
                        'DOWNLOAD_DOM_TREE': _0x124b45(0x3f1),
                        'REPORT_GITHUB': _0x124b45(0x3cf),
                        'REPORT_DISCORD': _0x124b45(0x1ec),
                        'REPORT_FORK': _0x124b45(0x3f8),
                        'DEBUG': _0x124b45(0x2df),
                        'CLOSE': _0x124b45(0x457),
                        'ALL_CHECK': _0x124b45(0x2cc),
                        'BATCH_DOWNLOAD_SELECTED': _0x124b45(0x384),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': 'Image',
                        'VID': _0x124b45(0x2f8),
                        'DW': 'Download',
                        'DW_ALL': _0x124b45(0x380),
                        'THUMBNAIL_INTRO': _0x124b45(0x1ed),
                        'LOAD_BLOB_ONE': _0x124b45(0x28a),
                        'LOAD_BLOB_MULTIPLE': _0x124b45(0x26e),
                        'LOAD_BLOB_RELOAD': _0x124b45(0x183),
                        'NO_CHECK_RESOURCE': _0x124b45(0x3b2),
                        'NO_VID_URL': _0x124b45(0x401),
                        'SETTING': _0x124b45(0x351),
                        'AUTO_RENAME': _0x124b45(0x43d),
                        'RENAME_SHORTCODE': _0x124b45(0x2f6),
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0x124b45(0x241),
                        'DISABLE_VIDEO_LOOPING': 'Disable\x20Video\x20Auto-looping',
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x124b45(0x1fd),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x124b45(0x1d8),
                        'DIRECT_DOWNLOAD_ALL': _0x124b45(0x29a),
                        'MODIFY_VIDEO_VOLUME': _0x124b45(0x28f),
                        'MODIFY_RESOURCE_EXIF': 'Modify\x20Resource\x20EXIF\x20​​Properties',
                        'SCROLL_BUTTON': _0x124b45(0x3c8),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x124b45(0x33f),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x124b45(0x3c3),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x124b45(0x3f0),
                        'AUTO_RENAME_INTRO': _0x124b45(0x389),
                        'RENAME_SHORTCODE_INTRO': _0x124b45(0x275),
                        'RENAME_PUBLISH_DATE_INTRO': _0x124b45(0x19e),
                        'RENAME_LOCATE_DATE_INTRO': _0x124b45(0x443),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x124b45(0x216),
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x124b45(0x278),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x124b45(0x397),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x124b45(0x1c6),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x124b45(0x427),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x124b45(0x20c),
                        'SCROLL_BUTTON_INTRO': _0x124b45(0x1ba),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': 'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x124b45(0x2b6),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': _0x124b45(0x413),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x124b45(0x44c),
                        'MODIFY_RESOURCE_EXIF_INTRO': _0x124b45(0x332)
                    }
                }, _0x14b7d7 = Object[_0x124b45(0x198)]({}, _0x3de7da, _0x286fd9[_0x124b45(0x1f4)]), _0x3d7c40 = Object[_0x124b45(0x31e)](_0x14b7d7)[_0x124b45(0x1bd)]()['reduce']((_0x1a9342, _0x461d97) => {
                    return _0x1a9342[_0x461d97] = _0x14b7d7[_0x461d97], _0x1a9342;
                }, {});
            return _0x3d7c40;
        }
        async function _0x3fab21(_0x2ea47d) {
            return new Promise((_0x4cad64, _0x422f62) => {
                const _0x1f0dd2 = a0_0x2ded;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x1f0dd2(0x343) + _0x2ea47d + _0x1f0dd2(0x1a0),
                    'onload': function (_0x4d0d69) {
                        const _0x5234af = _0x1f0dd2;
                        try {
                            let _0x521aa4 = JSON[_0x5234af(0x29b)](_0x4d0d69['response']);
                            _0x4cad64(_0x521aa4);
                        } catch (_0x1c1718) {
                            _0x422f62(_0x1c1718);
                        }
                    },
                    'onerror': function (_0xcc396c) {
                        const _0x2c6963 = _0x1f0dd2;
                        _0x1d76a4(_0x2c6963(0x345), _0x2c6963(0x419), _0xcc396c), _0x422f62(_0xcc396c);
                    }
                });
            });
        }
        function _0x57cf2e(_0x49291a) {
            const _0x1212d9 = _0x5c99b4, _0x40fd66 = _0x11ceb9();
            return _0x40fd66[_0x286fd9[_0x1212d9(0x2a0)]] != undefined && _0x40fd66[_0x286fd9[_0x1212d9(0x2a0)]][_0x49291a] != undefined ? _0x40fd66[_0x286fd9[_0x1212d9(0x2a0)]][_0x49291a] : _0x40fd66['en-US'][_0x49291a];
        }
        function _0x15b927() {
            const _0x50f8aa = _0x5c99b4;
            _0x3a5d3c(_0x50f8aa(0x306))[_0x50f8aa(0x27f)](function () {
                const _0x412fc6 = _0x50f8aa;
                _0x3a5d3c(this)[_0x412fc6(0x44b)](_0x57cf2e(_0x3a5d3c(this)[_0x412fc6(0x360)](_0x412fc6(0x218))));
            }), _0x3a5d3c(_0x50f8aa(0x37d))['each'](function () {
                const _0x26c6fa = _0x50f8aa;
                _0x3a5d3c(this)[_0x26c6fa(0x360)](_0x26c6fa(0x282), _0x57cf2e(_0x3a5d3c(this)[_0x26c6fa(0x360)]('data-ih-locale-title')));
            });
        }
        _0x3a5d3c(function () {
            const _0x4814f0 = _0x5c99b4;
            function _0x229d00(_0xec1355) {
                const _0x276135 = a0_0x2ded;
                var _0x515a8c = [];
                for (var _0x5cace8 of _0xec1355) {
                    _0x515a8c[_0x276135(0x393)]({
                        'tagName': _0x5cace8[_0x276135(0x41f)],
                        'id': _0x5cace8['id'],
                        'className': _0x5cace8[_0x276135(0x280)]
                    });
                }
                return _0x515a8c;
            }
            function _0x374abc() {
                const _0x222fea = a0_0x2ded;
                let _0x51c558 = _0x3a5d3c('div[id^=\x22mount\x22]')[0x0];
                var _0x4fca30 = '';
                _0x286fd9['GL_logger'][_0x222fea(0x2d1)](_0x287ba7 => {
                    const _0x4877fd = _0x222fea;
                    var _0xf38410 = JSON[_0x4877fd(0x3c2)](_0x287ba7[_0x4877fd(0x21f)], function (_0x51b7d7, _0x8ab68b) {
                        const _0x5592dc = _0x4877fd;
                        if (Array[_0x5592dc(0x383)](this)) {
                            if (typeof _0x8ab68b === _0x5592dc(0x2c6) && _0x8ab68b instanceof jQuery)
                                return _0x229d00(_0x8ab68b);
                            return _0x8ab68b;
                        } else
                            return _0x8ab68b;
                    }, '\x09');
                    _0x4fca30 += new Date(_0x287ba7[_0x4877fd(0x238)])['toISOString']() + ':\x20' + _0xf38410 + '\x0a';
                }), _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')['text'](_0x222fea(0x3cc) + _0x4fca30 + _0x222fea(0x313) + location[_0x222fea(0x3fc)] + _0x222fea(0x3d1) + _0x51c558[_0x222fea(0x285)]);
            }
            _0x3a5d3c('body')['on']('click', '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE', function () {
                _0x374abc();
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x1be), function () {
                const _0x15c15f = _0x4814f0;
                _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')['select'](), document[_0x15c15f(0x39e)](_0x15c15f(0x40f));
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x2c5), function () {
                const _0x1f5d05 = _0x4814f0;
                _0x3a5d3c(_0x1f5d05(0x19c))[_0x1f5d05(0x44b)]()[_0x1f5d05(0x1bc)] === 0x0 && _0x374abc();
                var _0x3b45f1 = _0x3a5d3c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')['text'](), _0x424c8c = document[_0x1f5d05(0x1a6)]('a'), _0x145ca7 = new Blob([_0x3b45f1], { 'type': _0x1f5d05(0x21d) });
                _0x424c8c[_0x1f5d05(0x28c)] = URL[_0x1f5d05(0x2e1)](_0x145ca7), _0x424c8c[_0x1f5d05(0x247)] = _0x1f5d05(0x212) + new Date()[_0x1f5d05(0x38c)]() + _0x1f5d05(0x298), document[_0x1f5d05(0x44e)][_0x1f5d05(0x187)](_0x424c8c), _0x424c8c['click'](), _0x424c8c[_0x1f5d05(0x32f)]();
            }), _0x3a5d3c('body')['on'](_0x4814f0(0x185), _0x4814f0(0x283), function () {
                const _0x96b4db = _0x4814f0;
                _0x3a5d3c(this)[_0x96b4db(0x1b8)](_0x96b4db(0x1f8))['length'] > 0x0 ? _0x3a5d3c(this)[_0x96b4db(0x1b8)]('#tempWrapper')[_0x96b4db(0x294)](0xfa, function () {
                    _0x3a5d3c(this)['remove']();
                }) : _0x3a5d3c(_0x96b4db(0x391))['remove']();
            }), _0x3a5d3c(window)['on'](_0x4814f0(0x2c1), function (_0x560fd8) {
                const _0x5037ce = _0x4814f0;
                _0x560fd8['which'] == '81' && _0x560fd8['altKey'] && (_0x3a5d3c('.IG_POPUP_DIG')[_0x5037ce(0x32f)](), _0x560fd8[_0x5037ce(0x2aa)]()), _0x560fd8[_0x5037ce(0x1c2)] == '87' && _0x560fd8[_0x5037ce(0x356)] && (_0x47ad12(), _0x560fd8[_0x5037ce(0x2aa)]()), _0x560fd8['which'] == '90' && _0x560fd8[_0x5037ce(0x356)] && (_0x2cce06(), _0x560fd8['preventDefault']()), _0x560fd8[_0x5037ce(0x1c2)] == '82' && _0x560fd8[_0x5037ce(0x356)] && (_0x4a1272(), _0x560fd8['preventDefault']()), _0x560fd8[_0x5037ce(0x1c2)] == '83' && _0x560fd8[_0x5037ce(0x356)] && (location[_0x5037ce(0x28c)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x3a5d3c(_0x5037ce(0x3b3))[_0x5037ce(0x1bc)] > 0x0 && _0x3a5d3c(_0x5037ce(0x3b3))?.['trigger'](_0x5037ce(0x185)), location[_0x5037ce(0x28c)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x3a5d3c(_0x5037ce(0x3c4))[_0x5037ce(0x1bc)] > 0x0 && _0x3a5d3c(_0x5037ce(0x3c4))?.[_0x5037ce(0x1e7)](_0x5037ce(0x185)), _0x560fd8[_0x5037ce(0x2aa)]());
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x281), _0x4814f0(0x41c), function () {
                const _0x20a12c = _0x4814f0;
                var _0x519446 = _0x3a5d3c(this)[_0x20a12c(0x360)]('id');
                if (_0x519446 && _0x444c1c[_0x519446] !== undefined) {
                    let _0x114d30 = _0x3a5d3c(this)[_0x20a12c(0x1cd)]('checked');
                    GM_setValue(_0x519446, _0x114d30), _0x444c1c[_0x519446] = _0x114d30, console[_0x20a12c(0x3bb)](_0x20a12c(0x366), _0x519446, _0x114d30);
                }
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x22c), function (_0x3ca0c6) {
                const _0xeaa6be = _0x4814f0;
                _0x3a5d3c(this)[_0xeaa6be(0x318)](_0xeaa6be(0x1f8))[_0xeaa6be(0x1bc)] > 0x0 && _0x3ca0c6[_0xeaa6be(0x2aa)]();
            }), _0x3a5d3c('body')['on']('change', _0x4814f0(0x1cf), function () {
                const _0x18114c = _0x4814f0;
                let _0x308b27 = _0x3a5d3c(this)['val']();
                _0x3a5d3c(this)[_0x18114c(0x360)](_0x18114c(0x1a4)) == _0x18114c(0x23e) ? _0x3a5d3c(this)['next']()[_0x18114c(0x253)](_0x308b27) : _0x3a5d3c(this)[_0x18114c(0x31a)]()[_0x18114c(0x253)](_0x308b27), _0x308b27 >= 0x0 && _0x308b27 <= 0x1 && (_0x286fd9[_0x18114c(0x2bb)] = _0x308b27, GM_setValue('G_VIDEO_VOLUME', _0x308b27));
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x3e7), _0x4814f0(0x1cf), function () {
                const _0x52e474 = _0x4814f0;
                if (_0x3a5d3c(this)['attr'](_0x52e474(0x1a4)) == 'range') {
                    let _0x4bc497 = _0x3a5d3c(this)['val']();
                    _0x3a5d3c(this)[_0x52e474(0x43a)]()['val'](_0x4bc497);
                } else {
                    let _0x24924c = _0x3a5d3c(this)[_0x52e474(0x253)]();
                    _0x24924c >= 0x0 && _0x24924c <= 0x1 ? _0x3a5d3c(this)[_0x52e474(0x31a)]()[_0x52e474(0x253)](_0x24924c) : _0x24924c < 0x0 ? _0x3a5d3c(this)[_0x52e474(0x253)](0x0) : _0x3a5d3c(this)[_0x52e474(0x253)](0x1);
                }
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x3e7), _0x4814f0(0x1e1), function () {
                const _0x469867 = _0x4814f0;
                GM_setValue(_0x469867(0x3fe), _0x3a5d3c(this)['val']()), _0x286fd9[_0x469867(0x316)] = _0x3a5d3c(this)[_0x469867(0x253)]();
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x3c0), function (_0x261cda) {
                const _0x5111e3 = _0x4814f0;
                _0x261cda[_0x5111e3(0x2aa)](), _0x36152d(this);
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x42e), function () {
                const _0x5a7868 = _0x4814f0;
                if (_0x444c1c[_0x5a7868(0x40d)] && _0x444c1c[_0x5a7868(0x3ac)])
                    _0x36152d(_0x3a5d3c(this)[_0x5a7868(0x1b8)]()[_0x5a7868(0x3d2)]('a')[_0x5a7868(0x18c)]()[0x0], !![]);
                else {
                    var _0x56b267 = new URL(_0x3a5d3c(this)[_0x5a7868(0x1b8)]()[_0x5a7868(0x3d2)]('a')[_0x5a7868(0x360)](_0x5a7868(0x1a3)));
                    _0x56b267[_0x5a7868(0x460)] = _0x5a7868(0x2d0), _0x4c5cf2(_0x56b267[_0x5a7868(0x28c)]);
                }
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), '.IG_POPUP_DIG_BODY\x20.videoThumbnail', function () {
                const _0x447cda = _0x4814f0;
                let _0x3f48de = new Date()[_0x447cda(0x38c)]();
                _0x444c1c['RENAME_PUBLISH_DATE'] && _0x3a5d3c(this)[_0x447cda(0x1b8)]()[_0x447cda(0x3d2)]('a')[_0x447cda(0x360)](_0x447cda(0x265)) && (_0x3f48de = _0x3a5d3c(this)[_0x447cda(0x1b8)]()[_0x447cda(0x3d2)]('a')[_0x447cda(0x360)](_0x447cda(0x265)));
                let _0x453497 = _0x3a5d3c(this)[_0x447cda(0x1b8)]()['children']('a')[_0x447cda(0x360)](_0x447cda(0x217)) ?? _0x3a5d3c(_0x447cda(0x213))['text']();
                _0x30831b(_0x3a5d3c(this)[_0x447cda(0x1b8)]()['children']('a')['find']('img')[_0x447cda(0x18c)]()[_0x447cda(0x360)](_0x447cda(0x24e)), _0x3a5d3c(this)[_0x447cda(0x1b8)]()[_0x447cda(0x3d2)]('a')[_0x447cda(0x360)](_0x447cda(0x2ac)), 'thumbnail', _0x3f48de, _0x447cda(0x230), _0x453497);
            }), _0x3a5d3c('body')['on'](_0x4814f0(0x185), _0x4814f0(0x3b3), function () {
                _0x1c24d0(!![]);
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), '.IG_DWSTORY_ALL', function () {
                _0xa0ac7b();
            }), _0x3a5d3c(_0x4814f0(0x44e))['on']('click', _0x4814f0(0x1b2), function (_0x2f1fa6) {
                _0x2f1fa6['preventDefault'](), _0x1c24d0(!![], !![], !![]);
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x3df), function () {
                _0x49aed1(!![]);
            }), _0x3a5d3c('body')['on'](_0x4814f0(0x185), _0x4814f0(0x288), function (_0x94fa60) {
                const _0x2dfa70 = _0x4814f0;
                _0x94fa60[_0x2dfa70(0x1ea)](), _0x13cd29(!![]);
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x3c4), function () {
                _0x4a991f(!![]);
            }), _0x3a5d3c(_0x4814f0(0x44e))['on']('click', _0x4814f0(0x1d5), function () {
                _0x149a67();
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), '.IG_DWHINEWTAB', function (_0x1c5c98) {
                const _0x39a293 = _0x4814f0;
                _0x1c5c98[_0x39a293(0x2aa)](), _0x4a991f(!![], !![]);
            }), _0x3a5d3c('body')['on'](_0x4814f0(0x185), _0x4814f0(0x435), function () {
                _0x105231(!![]);
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x26f), function () {
                _0x424245(!![], !![]);
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x276), function () {
                _0x424245(!![], !![], !![]);
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), '.IG_REELS_THUMBNAIL', function () {
                _0x424245(!![], ![]);
            }), _0x3a5d3c('body')['on'](_0x4814f0(0x25d), _0x4814f0(0x2cb), function (_0x1927ab) {
                const _0x5da019 = _0x4814f0;
                if (_0x1927ab[_0x5da019(0x1c2)] === 0x3 || _0x1927ab[_0x5da019(0x1c2)] === 0x2) {
                    if (location[_0x5da019(0x28c)] === _0x5da019(0x336) && _0x444c1c[_0x5da019(0x1b3)]) {
                        _0x1927ab['preventDefault']();
                        if (_0x3a5d3c(this)['find']('canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img')[_0x5da019(0x1bc)] > 0x0) {
                            const _0x372004 = _0x5da019(0x336) + _0x3a5d3c(this)['children'](_0x5da019(0x354))[_0x5da019(0x26c)]()[_0x5da019(0x44b)]();
                            _0x1927ab['which'] === 0x2 ? GM_openInTab(_0x372004) : location[_0x5da019(0x28c)] = _0x372004;
                        }
                    }
                }
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x281), _0x4814f0(0x447), function () {
                const _0x2cb6bd = _0x4814f0;
                var _0x2d161e = _0x3a5d3c(this)[_0x2cb6bd(0x318)]('input')[_0x2cb6bd(0x1cd)]('checked');
                _0x3a5d3c('.IG_POPUP_DIG_BODY\x20.inner_box')[_0x2cb6bd(0x27f)](function () {
                    const _0xa7754b = _0x2cb6bd;
                    _0x3a5d3c(this)[_0xa7754b(0x1cd)](_0xa7754b(0x325), _0x2d161e);
                });
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x281), _0x4814f0(0x2d9), function () {
                const _0x1d7af6 = _0x4814f0;
                var _0x45a796 = _0x3a5d3c(_0x1d7af6(0x24a))[_0x1d7af6(0x1bc)], _0x43c5db = _0x3a5d3c('.IG_POPUP_DIG_BODY\x20.inner_box')[_0x1d7af6(0x1bc)];
                _0x3a5d3c('.IG_POPUP_DIG_TITLE\x20.checkbox')[_0x1d7af6(0x318)]('input')[_0x1d7af6(0x1cd)](_0x1d7af6(0x325), _0x45a796 == _0x43c5db);
            }), _0x3a5d3c(_0x4814f0(0x44e))['on']('click', _0x4814f0(0x2f3), function () {
                const _0x3da268 = _0x4814f0;
                let _0x339bf2 = 0x0;
                _0x3a5d3c('.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x3da268(0x27f)](function () {
                    const _0x336bd9 = _0x3da268;
                    _0x3a5d3c(this)[_0x336bd9(0x31a)]()[_0x336bd9(0x3d2)]('input')[_0x336bd9(0x1cd)]('checked') && (_0x3a5d3c(this)[_0x336bd9(0x1e7)]('click'), _0x339bf2++);
                }), _0x339bf2 == 0x0 && alert(_0x57cf2e(_0x3da268(0x3f4)));
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x281), '.IG_POPUP_DIG_TITLE\x20#langSelect', function () {
                const _0x12bf6f = _0x4814f0;
                GM_setValue(_0x12bf6f(0x2a0), _0x3a5d3c(this)['val']()), _0x286fd9['lang'] = _0x3a5d3c(this)['val'](), _0x286fd9[_0x12bf6f(0x2a0)]?.['startsWith']('en') || _0x286fd9[_0x12bf6f(0x1f4)][_0x286fd9[_0x12bf6f(0x2a0)]] != null ? (_0x15b927(), _0x1b440b()) : _0x3fab21(_0x286fd9[_0x12bf6f(0x2a0)])[_0x12bf6f(0x256)](_0x581c4a => {
                    const _0x13c853 = _0x12bf6f;
                    _0x286fd9[_0x13c853(0x1f4)][_0x286fd9['lang']] = _0x581c4a, _0x15b927(), _0x1b440b();
                })[_0x12bf6f(0x3c9)](_0x245940 => {
                    const _0x1da5b0 = _0x12bf6f;
                    console[_0x1da5b0(0x3a5)](_0x1da5b0(0x2e6), _0x245940);
                });
            }), _0x3a5d3c(_0x4814f0(0x44e))['on'](_0x4814f0(0x185), _0x4814f0(0x23c), function () {
                const _0x36d9e2 = _0x4814f0;
                _0x3a5d3c(_0x36d9e2(0x225))['each'](function () {
                    const _0x563361 = _0x36d9e2;
                    _0x3a5d3c(this)[_0x563361(0x1e7)](_0x563361(0x185));
                });
            });
            const _0xfc1006 = new MutationObserver(_0x26c3ca => {
                const _0x6cc3fe = _0x4814f0;
                for (const _0x299c7b of _0x26c3ca) {
                    _0x299c7b[_0x6cc3fe(0x1a4)] === _0x6cc3fe(0x40b) && _0x299c7b['addedNodes']['forEach'](_0x394f36 => {
                        const _0x4b50d1 = _0x6cc3fe, _0x1caf01 = _0x3a5d3c(_0x394f36)['find']('video');
                        if (location[_0x4b50d1(0x3fc)][_0x4b50d1(0x26b)](_0x4b50d1(0x2f9))) {
                            if (_0x3a5d3c(_0x394f36)[_0x4b50d1(0x360)]('data-ih-locale-title') == null && _0x3a5d3c(_0x394f36)[_0x4b50d1(0x360)]('data-visualcompletion') == null && _0x394f36[_0x4b50d1(0x41f)] === _0x4b50d1(0x3e6)) {
                                var _0x18e99f = _0x3a5d3c(_0x394f36)[_0x4b50d1(0x318)](_0x4b50d1(0x2d4));
                                let _0x3d6caf = _0x18e99f?.['attr'](_0x4b50d1(0x282));
                                _0x3d6caf != null && _0x18e99f[_0x4b50d1(0x44b)](_0x3d6caf);
                            }
                        }
                        if (_0x1caf01[_0x4b50d1(0x1bc)] > 0x0) {
                            _0x444c1c['MODIFY_VIDEO_VOLUME'] && _0x1caf01[_0x4b50d1(0x27f)](function () {
                                _0x3a5d3c(this)['on']('play\x20playing', function () {
                                    const _0x15d658 = a0_0x2ded;
                                    !_0x3a5d3c(this)['data'](_0x15d658(0x3f5)) && (_0x3a5d3c(this)[_0x15d658(0x360)](_0x15d658(0x232), !![]), this[_0x15d658(0x1bb)] = _0x286fd9[_0x15d658(0x2bb)], _0x1d76a4('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x4b50d1(0x3fc)]['match'](/^(\/stories\/)/ig)) {
                                const _0x43351a = location[_0x4b50d1(0x3fc)][_0x4b50d1(0x261)](/^(\/stories\/highlights\/)/ig) != null, _0x564f34 = _0x43351a ? _0x4b50d1(0x1f9) : _0x4b50d1(0x1eb);
                                _0x1caf01[_0x4b50d1(0x27f)](function () {
                                    const _0x35da90 = _0x4b50d1;
                                    _0x3a5d3c(this)['on'](_0x35da90(0x386), function () {
                                        const _0x2ad04e = _0x35da90;
                                        if (!_0x3a5d3c(this)[_0x2ad04e(0x27c)](_0x2ad04e(0x314))) {
                                            let _0x4a948b = _0x3a5d3c(this);
                                            _0x4a948b[_0x2ad04e(0x3e2)](_0x2ad04e(0x3d5))[_0x2ad04e(0x3e4)](function () {
                                                const _0x143a65 = _0x2ad04e;
                                                return _0x3a5d3c(this)[_0x143a65(0x1c7)]() == _0x4a948b[_0x143a65(0x1c7)]();
                                            })[_0x2ad04e(0x318)]('.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL')[_0x2ad04e(0x1bc)] === 0x0 ? (_0x3a5d3c(this)['attr'](_0x2ad04e(0x3e5), !![]), _0x43351a ? _0x105231(![]) : _0x49aed1(![]), _0x1d76a4('(' + _0x564f34 + ')', _0x2ad04e(0x31b))) : (_0x3a5d3c(this)[_0x2ad04e(0x360)](_0x2ad04e(0x3e5), !![]), _0x1d76a4('(' + _0x564f34 + ')', _0x2ad04e(0x1ab)));
                                        }
                                    });
                                    var _0x22ead5 = _0x3a5d3c(this);
                                    if (_0x444c1c['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x22ead5[_0x35da90(0x27c)](_0x35da90(0x1dd))) {
                                            _0x1d76a4('(' + _0x564f34 + ')', _0x35da90(0x206));
                                            _0x444c1c[_0x35da90(0x3e8)] && (this[_0x35da90(0x1bb)] = _0x286fd9[_0x35da90(0x2bb)], _0x22ead5['on'](_0x35da90(0x444), function () {
                                                const _0x3ee2a6 = _0x35da90;
                                                this[_0x3ee2a6(0x1bb)] = _0x286fd9['videoVolume'];
                                            }));
                                            let _0x4daa4a = _0x22ead5[_0x35da90(0x3e2)](_0x35da90(0x354))[_0x35da90(0x3e4)](function () {
                                                    const _0x23ec31 = _0x35da90;
                                                    return _0x3a5d3c(this)[_0x23ec31(0x360)](_0x23ec31(0x233)) == null && _0x3a5d3c(this)[_0x23ec31(0x360)](_0x23ec31(0x215)) == null;
                                                })[_0x35da90(0x18c)](), _0x2da9e3 = _0x4daa4a[_0x35da90(0x43a)]();
                                            _0x2da9e3[_0x35da90(0x2c4)]();
                                            let _0x234a49 = _0x4daa4a['find'](_0x35da90(0x346));
                                            _0x234a49[_0x35da90(0x2c4)]();
                                            const _0x10f46e = function (_0x15c20b) {
                                                const _0x20c18d = _0x35da90;
                                                _0x15c20b[_0x20c18d(0x2aa)](), _0x22ead5[_0x20c18d(0x350)](_0x20c18d(0x1f3), '2'), _0x22ead5['attr'](_0x20c18d(0x1dd), !![]), _0x234a49['hide'](), _0x2da9e3[_0x20c18d(0x2c4)](), _0x18133a(_0x22ead5, _0x22ead5[_0x20c18d(0x3e2)](_0x20c18d(0x3d5))['filter'](function () {
                                                    const _0x2752c8 = _0x20c18d;
                                                    return _0x3a5d3c(this)[_0x2752c8(0x1c7)]() == _0x22ead5[_0x2752c8(0x1c7)]();
                                                })[_0x20c18d(0x18c)](), _0x564f34, 'vertical');
                                            };
                                            _0x22ead5[_0x35da90(0x1b8)]()['find'](_0x35da90(0x3b1))['on'](_0x35da90(0x2e9), _0x10f46e), _0x234a49['on'](_0x35da90(0x2e9), _0x10f46e), _0x2da9e3['on'](_0x35da90(0x2e9), _0x10f46e), _0x22ead5['on']('contextmenu', function (_0x1e71e2) {
                                                const _0x54a502 = _0x35da90;
                                                _0x1e71e2[_0x54a502(0x2aa)](), _0x22ead5[_0x54a502(0x350)](_0x54a502(0x1f3), '-1'), _0x22ead5['removeAttr']('controls'), _0x2da9e3['show'](), _0x234a49[_0x54a502(0x1f0)](), _0x18133a(_0x22ead5, _0x22ead5[_0x54a502(0x3e2)](_0x54a502(0x3d5))['filter'](function () {
                                                    const _0xafbed6 = _0x54a502;
                                                    return _0x3a5d3c(this)[_0xafbed6(0x1c7)]() == _0x22ead5[_0xafbed6(0x1c7)]();
                                                })[_0x54a502(0x18c)](), _0x564f34, _0x54a502(0x22b));
                                            }), _0x22ead5['on']('volumechange', function () {
                                                const _0x4570f8 = _0x35da90;
                                                let _0x2d1bda = _0x4daa4a['parent']()[_0x4570f8(0x318)]('svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]')[_0x4570f8(0x3e2)](_0x4570f8(0x292))['first']();
                                                var _0xdc87ed = _0x2d1bda['find']('svg\x20>\x20path[d^=\x22M16.636\x22]')['length'] === 0x0;
                                                this[_0x4570f8(0x2ec)] != _0xdc87ed && (this[_0x4570f8(0x1bb)] = _0x286fd9['videoVolume'], _0x2d1bda?.[_0x4570f8(0x1e7)](_0x4570f8(0x185))), _0x3a5d3c(this)[_0x4570f8(0x360)]('data-completed') && (_0x286fd9[_0x4570f8(0x2bb)] = this[_0x4570f8(0x1bb)], GM_setValue('G_VIDEO_VOLUME', this[_0x4570f8(0x1bb)])), this[_0x4570f8(0x1bb)] == _0x286fd9[_0x4570f8(0x2bb)] && _0x3a5d3c(this)[_0x4570f8(0x360)](_0x4570f8(0x418), !![]);
                                            }), _0x22ead5[_0x35da90(0x350)](_0x35da90(0x411), 'absolute'), _0x22ead5[_0x35da90(0x350)](_0x35da90(0x1f3), '2'), _0x22ead5[_0x35da90(0x360)]('data-controls', !![]), _0x22ead5[_0x35da90(0x360)](_0x35da90(0x1dd), !![]);
                                        }
                                    } else
                                        _0x18133a(_0x22ead5, _0x22ead5[_0x35da90(0x3e2)](_0x35da90(0x3d5))[_0x35da90(0x3e4)](function () {
                                            const _0x283a30 = _0x35da90;
                                            return _0x3a5d3c(this)[_0x283a30(0x1c7)]() == _0x22ead5[_0x283a30(0x1c7)]();
                                        })[_0x35da90(0x18c)](), _0x564f34, 'vertical');
                                });
                            }
                        }
                    });
                }
            });
            _0xfc1006[_0x4814f0(0x245)](_0x3a5d3c(_0x4814f0(0x27d))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));