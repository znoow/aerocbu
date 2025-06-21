// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.6.1
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

function a0_0x2f5d(_0x5b4fc2, _0x2e87b8) {
    const _0x286a24 = a0_0x286a();
    return a0_0x2f5d = function (_0x2f5db8, _0x4b964d) {
        _0x2f5db8 = _0x2f5db8 - 0x96;
        let _0x502d2b = _0x286a24[_0x2f5db8];
        return _0x502d2b;
    }, a0_0x2f5d(_0x5b4fc2, _0x2e87b8);
}
function a0_0x286a() {
    const _0x57944c = [
        'Open\x20in\x20New\x20Tab',
        '.IG_DWNEWTAB',
        '</span></label>',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '659820aUFTHA',
        ':hidden',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        '</a></button><br/>',
        'https://i.instagram.com/api/v1/users/',
        'Main\x20Timer',
        'li._acaz',
        'will-change',
        'className',
        '_INTRO',
        'deg)',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'altKey',
        'carousel_media:',
        'reels',
        '\x22\x20/></div>',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'response',
        'videoVolume',
        'z-index',
        '#_SNLOAD',
        'FEEDBACK',
        'subarray',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'div.volume_slider\x20input',
        'SCROLL_BUTTON',
        'INTERNAL_CSS',
        'click',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'trigging',
        'video\x20+\x20div\x20>\x20div',
        'load',
        'Disable\x20Video\x20Auto-looping',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        '.IG_REELS_NEWTAB',
        '\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'cursor',
        'replaceAll',
        'IMAGE_VIEWER',
        'createMediaListDOM',
        'avatar',
        'shortcode',
        '</div></div>',
        'selected',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        'pause',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'div\x20>\x20ul\x20li._acaz',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        'getPostOwner()',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'includes',
        '#iv_transform',
        'srcset',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'G_RENAME_FORMAT',
        '__typename',
        'removeClass',
        'div[class][role=\x22button\x22]',
        '.IG_DWPROFILE',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        'When\x20you\x20click\x20Download\x20All\x20Resources,\x20whether\x20you\x20want\x20to\x20download\x20all\x20stories/highlights\x20resources\x20directly.',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'createStoryListDOM()',
        'append',
        'CHECK_UPDATE_MENU',
        'Download',
        'keys',
        'https://www.instagram.com/p/',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'a[href^=\x22/p/\x22]',
        'getUint16',
        'video',
        'script',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'preventDefault',
        'getFullYear',
        '\x0a-----\x0a\x0aLocation:\x20',
        'checked',
        '.IG_IMAGE_VIEWER',
        'toString',
        'hidden',
        '#rotate_right',
        'mp4',
        'thumbnail',
        'media-id',
        'getStories()',
        'FORCE_FETCH_ALL_RESOURCES',
        'appendChild',
        'remove-thumbnail',
        'getBlobMediaWithQueryID()',
        'div[class]',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'startsWith',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_transform\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_rotate\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20</div>',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'data-href',
        'stopPropagation',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'highlights',
        'text/plain',
        'isHighlightsStory',
        'GL_postPath',
        'play\x20playing',
        'GL_username',
        '.IG_THUMBNAIL_MAIN',
        'removeAttr',
        'https://www.instagram.com/web/search/topsearch/?query=',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'data',
        '</button>',
        'fromCharCode',
        'class',
        'body',
        'transform',
        'CLOSE',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'fileRenameFormat',
        'set',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        '\x20ID:\x20',
        'locale',
        '.IG_NEWTAB_MAIN',
        'modify',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'flex',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'setUint32',
        'floor',
        'LOAD_BLOB_MULTIPLE',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'setUint16',
        'bottom',
        'image_versions2',
        'height',
        'Found\x20post\x20container',
        'fadeOut',
        'img[referrerpolicy]',
        'last',
        'log',
        'hide',
        'push',
        'data-name',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '.txt',
        'Remote\x20version:\x20',
        '.xpgaw4o',
        '_acnf',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]',
        'transform-origin',
        'CHECK_UPDATE',
        'grabbing',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'parents',
        'Select\x20All',
        'VID',
        'profile_pic_url',
        'label',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'getTime',
        'datetime',
        '._acay\x20+\x20.x24i39r',
        'Debug\x20Window',
        '._acnb',
        'GL_referrer',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        '/accounts/login',
        'getSeconds',
        '3620661bbMkcS',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'REPORT_GITHUB',
        'attr',
        '25vpqpHm',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'scrollBy',
        'regenerated',
        'SETTING',
        'MODIFY_VIDEO_VOLUME',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        '0\x200',
        '845IYigqZ',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '696362bEdOvy',
        'DOWNLOAD',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'getMediaInfo()',
        'div[style][class]',
        '.IG_DWSTORY_THUMBNAIL',
        'LOAD_BLOB_ONE',
        'input',
        'deltaY',
        '.IG_DWSTORY',
        'keydown',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'getUint32',
        'body\x20>\x20div\x20section:visible._ac0a',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'G_VIDEO_VOLUME',
        '#iv_header',
        'ALL_CHECK',
        '\x22\x20class=\x22newTab\x22>',
        'version',
        'node',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'THUMBNAIL',
        'language',
        'x1lix1fw',
        'tempFetchRateLimit',
        'owner',
        'https://www.instagram.com/reel/',
        'Not\x20a\x20JPEG\x20or\x20WEBP',
        'px,\x20',
        'RELOAD_SCRIPT',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'observe',
        'execCommand',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'downloadURL',
        'NOPATH',
        'sort',
        'FULLSCREEN',
        'username',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'a[data-needed=\x22direct\x22]',
        'map',
        'RENAME_PUBLISH_DATE',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        'NEW_TAB',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'Checking\x20for\x20Script\x20Updates',
        'data-ih-locale-title',
        'isReels',
        'scontent.cdninstagram.com',
        'NO_VID_URL',
        'prop',
        'getDate',
        'video[class]',
        'EXIF',
        '</span>\x20',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        '[data-ih-locale-title]',
        'data-snig',
        'html',
        '%22}',
        'MODIFY_RESOURCE_EXIF',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22IMG\x22>',
        'ig_helper_notice',
        '1362810MGaFbT',
        'GraphSidecar',
        '.IG_DW_MAIN',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'TURN_DEG',
        '[data-ih-locale]',
        '_blank',
        '_acnb',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_right\x22\x20style=\x22transform:\x20scaleX(-1);cursor:\x20pointer;\x22>',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        'canDownload',
        'original_width',
        'searchParams',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        '\x20child',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'onReadyMyDW()\x20Timer',
        'version:',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'updatenotification',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '._acay',
        'article',
        'taken_at_timestamp',
        'getMonth',
        'Reload\x20Script',
        'https://www.instagram.com/',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'off',
        'trigger',
        'name',
        'SHOW_DOM_TREE',
        '.button_wrapper',
        'Exif\x00\x00',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'GL_dataCache',
        'grab',
        'instagram.com/reels/',
        'ended',
        'childList',
        '4dGtyhq',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'min',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'www.',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        '.IG_DWHISTORY',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'FORCE_RESOURCE_VIA_MEDIA',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '\x22\x20class=\x22IG_REELS\x22>',
        'createElement',
        'data-visualcompletion',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'catch',
        'https://ko-fi.com/snkoarashi',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        '.IG_DWSTORY_ALL',
        'video_url',
        'loadstart',
        'getUserIdWithAgent()',
        'script[type=\x22application/json\x22]',
        'buffer',
        'a[href]',
        'hasClass',
        'NONE',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        '7ieyAXn',
        '\x22\x20/>',
        'WEBP',
        'Modify\x20the\x20EXIF\x20​​properties\x20of\x20the\x20image\x20resource\x20to\x20place\x20the\x20post\x20link\x20in\x20it.',
        'reels_media',
        'relative',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        '</div>',
        'body\x20>\x20div\x20section._ac0a',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        'padEnd',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'div:last-child',
        'rotate(',
        'undefined',
        'isStory',
        'reject',
        '.IG_POPUP_DIG\x20input',
        '\x22\x20data-ih-locale-title=\x22',
        'DIV',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'volumechange',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'data-username',
        'width',
        'host',
        'getBlobMedia()',
        'GraphImage',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'range',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'select',
        '.IG_POPUP_DIG\x20#post_info',
        'GL_registerEventList',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        '.IG_POPUP_DIG',
        'Loading\x20Blob\x20Media...',
        'which',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Story/Highlight',
        'loop',
        '<div></div>',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        '#tempWrapper',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'image/webp',
        'vertical',
        'match',
        'video\x20volume\x20changed\x20#slider',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'DEBUG',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '<a\x20media-id=\x22',
        'each',
        'HTML5_VIDEO_CONTROL',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '--ig-track-progress:\x20',
        'data-loop',
        'getBlobMediaWithQuery()',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '1357456RxsPkD',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'edge_sidecar_to_children',
        '.IG_POPUP_DIG\x20.globalSettings',
        'children',
        'translate(',
        'toUpperCase',
        'originalEvent',
        'DISABLE_VIDEO_LOOPING',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'Close',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'transition',
        '[role=\x22button\x22]',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        '<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22display:\x20flex;filter:\x20invert(1);gap:\x208px;margin-right:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_left\x22\x20style=\x22cursor:\x20pointer;\x22>',
        'remove',
        'GET',
        'items',
        'code',
        '</a></button>',
        'change',
        '</span>\x20<input\x20id=\x22',
        'GraphVideo',
        '<input\x20value=\x22',
        'div.volume_slider',
        'then',
        'VP8X',
        'img',
        'mousemove.igHelper',
        '#imageViewer\x20>\x20section',
        '._acay\x20._acaz',
        'is_video',
        'Show\x20DOM\x20Tree',
        'px)\x20scale(',
        '#article-id',
        'prev',
        'close',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'getHours',
        'x1iyjqo2',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-name=\x22',
        'candidates',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'clientX',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#1f1f1f\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7.34\x206.41L.86\x2012.9l6.49\x206.48\x206.49-6.48-6.5-6.49zM3.69\x2012.9l3.66-3.66L11\x2012.9l-3.66\x203.66-3.65-3.66zm15.67-6.26C17.61\x204.88\x2015.3\x204\x2013\x204V.76L8.76\x205\x2013\x209.24V6c1.79\x200\x203.58.68\x204.95\x202.05\x202.73\x202.73\x202.73\x207.17\x200\x209.9C16.58\x2019.32\x2014.79\x2020\x2013\x2020c-.97\x200-1.94-.21-2.84-.61l-1.49\x201.49C10.02\x2021.62\x2011.51\x2022\x2013\x2022c2.3\x200\x204.61-.88\x206.36-2.64\x203.52-3.51\x203.52-9.21\x200-12.72z\x22/></svg>',
        '.circle_wrapper\x20span',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'getUserId()',
        '#scrollWrapper',
        'byteLength',
        'next',
        'NO_CHECK_RESOURCE',
        'download',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'isProfile',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        '\x22\x20datetime=\x22',
        'SELECT_AND_COPY',
        'NOTICE_UPDATE_CONTENT',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'svg',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'volume',
        'mouseup',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'pageY',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        'Fetch\x20from\x20memory\x20cache:',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'stp',
        'AUTO_RENAME',
        'navigator',
        'tagName',
        'getHighlightStories()',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'Image',
        'filter',
        'video\x20+\x20div',
        'text',
        'disconnect',
        'Settings',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        '/p/',
        'div[id^=\x22mount\x22]',
        'display_url',
        '37px',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'Download\x20Video\x20Thumbnail',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'isHomepage',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'Script\x20Loaded',
        '<a\x20datetime=\x22',
        'GL_observer',
        'Donate',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'post',
        'edges',
        'Display\x20HTML5\x20Video\x20Controller',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'user',
        'status',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        '._aagv\x20img',
        '\x20-</a>',
        'carousel_media',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'main\x20timer\x20re-register\x20completed',
        'replace',
        'onHighlightsStory',
        'modify-thumbnail',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        '9mgitYM',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'wrap',
        'error',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        '\x22\x20title=\x22',
        '<div\x20class=\x22volume_slider\x20',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'pathname',
        'div#scrollview',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'photo',
        'Request\x20with:',
        'SKIP_VIEW_STORY_CONFIRM',
        'G_CHECK_TIMESTAMP',
        'url',
        'GL_logger',
        'registerMenuIds',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'css',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'DIRECT_DOWNLOAD_ALL',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'userLanguage',
        'none',
        'NOTICE_UPDATE_TITLE',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'jpg',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'lang',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'blob',
        'position',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'parse',
        'RIFF',
        'forEach',
        'REPORT_DISCORD',
        'mousedown',
        'https://i.instagram.com/api/v1/media/',
        'muted',
        'absolute',
        '</a>',
        'before',
        'DOMTree-',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        '/followers/',
        'video_versions',
        '/info/',
        'getUserHighSizeProfile()',
        'after',
        'data-path',
        '.IG_DW_ALL_MAIN',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'THUMBNAIL_INTRO',
        'reduce',
        'data-ih-locale',
        'title',
        'DIRECT_DOWNLOAD_STORY',
        '\x22><span\x20data-ih-locale=\x22',
        'assign',
        'contextmenu',
        'div[role=\x22presentation\x22]',
        'left',
        '.circle_wrapper',
        'Feedback',
        'getUint8',
        'div',
        'first',
        '1362408IwbEOD',
        'dragstart\x20drop',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'Video',
        '.IG_REELS_THUMBNAIL',
        'element',
        'display_resources',
        'zoom-in',
        'splice',
        'object',
        'IMG',
        'Found\x20insert\x20point',
        '_ac3q',
        'users',
        'IG\x20Debug\x20DOM\x20Tree',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'top',
        'join',
        'currentURL',
        'display',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'finalUrl',
        'DOWNLOAD_DOM_TREE',
        'getTranslationText()',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'copy',
        'toISOString',
        'Download\x20All\x20Resources',
        'wheel',
        '</option>',
        'href',
        'Open\x20Image\x20In\x20Viewer',
        'taken_at',
        'center',
        '.IG_DWHINEWTAB',
        'DONATE',
        'GL_repeat',
        'smooth',
        'highlight',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'boolean',
        'padStart',
        '.videoThumbnail',
        'ig_cache_key',
        'message',
        'pointer',
        'slice',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'Preference\x20Settings',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '.IG_DWHISTORY_ALL',
        'data-remove-thumbnail',
        '#imageViewer',
        'from',
        'length',
        'Thumbnail\x20button\x20already\x20inserted',
        'data-type',
        '\x22\x20data-globalIndex=\x22',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'hasReferrer',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'firstStarted',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        '.IG_DWHISTORY_THUMBNAIL',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '/stories/highlights/',
        'toLowerCase',
        'get',
        'video_resources',
        'data-completed',
        'shortcode_media',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        '16671640XCUEXX',
        'mouseenter',
        'getTranslationText\x20catch\x20error:',
        'val',
        'type',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'trim',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'pageLoaded',
        '/following/',
        'find',
        'isDialog',
        'stories',
        'query_hash',
        'encode',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'split',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'section\x20>\x20main[role=\x22main\x22]',
        'Wololo!\x20New\x20version\x20released.',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'parent',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'data-modify',
        'controls',
        'Can\x20not\x20find\x20download\x20url.',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'logger\x20sliced',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'time[datetime]',
        'LOCALE_MANIFEST',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'DOWNLOAD_ALL',
        'max',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'Manually\x20inserting\x20thumbnail\x20button',
        'pageX',
        'x1s85apg',
        'faild',
        'arrayBuffer',
        'transform\x200.15s\x20ease',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'a[href]\x20time[datetime]',
        '\x22\x20data-path=\x22',
        'style',
        'Feedback\x20Options',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '20000',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex],\x20section\x20>\x20main[role=\x22main\x22]\x20>\x20div[class]',
        '8evNoDh',
        'config_width',
        'target',
        'src',
        'data-controls',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article'
    ];
    a0_0x286a = function () {
        return _0x57944c;
    };
    return a0_0x286a();
}
(function (_0x1f9ecd, _0x33a8c4) {
    const _0xc23304 = a0_0x2f5d, _0x1275f0 = _0x1f9ecd();
    while (!![]) {
        try {
            const _0x9907f = parseInt(_0xc23304(0x2df)) / 0x1 * (-parseInt(_0xc23304(0x34a)) / 0x2) + parseInt(_0xc23304(0x188)) / 0x3 * (-parseInt(_0xc23304(0x211)) / 0x4) + parseInt(_0xc23304(0x2d5)) / 0x5 * (parseInt(_0xc23304(0x322)) / 0x6) + parseInt(_0xc23304(0x367)) / 0x7 * (-parseInt(_0xc23304(0xc4)) / 0x8) + parseInt(_0xc23304(0x141)) / 0x9 * (-parseInt(_0xc23304(0x1d5)) / 0xa) + parseInt(_0xc23304(0x2cf)) / 0xb + -parseInt(_0xc23304(0x21b)) / 0xc * (-parseInt(_0xc23304(0x2dd)) / 0xd);
            if (_0x9907f === _0x33a8c4)
                break;
            else
                _0x1275f0['push'](_0x1275f0['shift']());
        } catch (_0x133f41) {
            _0x1275f0['push'](_0x1275f0['shift']());
        }
    }
}(a0_0x286a, 0xdbf91), function (_0x573913) {
    setTimeout(() => {
        'use strict';
        const _0x3747bf = a0_0x2f5d;
        const _0x17f2cd = {
                'CHECK_UPDATE': !![],
                'AUTO_RENAME': !![],
                'RENAME_PUBLISH_DATE': !![],
                'DISABLE_VIDEO_LOOPING': ![],
                'HTML5_VIDEO_CONTROL': ![],
                'REDIRECT_CLICK_USER_STORY_PICTURE': ![],
                'FORCE_FETCH_ALL_RESOURCES': ![],
                'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': ![],
                'DIRECT_DOWNLOAD_ALL': ![],
                'DIRECT_DOWNLOAD_STORY': ![],
                'MODIFY_VIDEO_VOLUME': ![],
                'MODIFY_RESOURCE_EXIF': ![],
                'SCROLL_BUTTON': !![],
                'FORCE_RESOURCE_VIA_MEDIA': ![],
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': ![],
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': ![],
                'SKIP_VIEW_STORY_CONFIRM': ![]
            }, _0x2b89ef = [
                _0x3747bf(0x30c),
                _0x3747bf(0x2ff),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ], _0x480abe = {
                'DOWNLOAD': _0x3747bf(0xa7),
                'NEW_TAB': _0x3747bf(0x249),
                'THUMBNAIL': _0x3747bf(0xc7),
                'DOWNLOAD_ALL': _0x3747bf(0x30d),
                'CLOSE': _0x3747bf(0x34b),
                'FULLSCREEN': _0x3747bf(0x12e),
                'TURN_DEG': _0x3747bf(0xf8)
            }, _0x4e7cb3 = 0xfa, _0xde4cb7 = GM_getResourceText(_0x3747bf(0x237)), _0xf74373 = JSON[_0x3747bf(0x164)](GM_getResourceText(_0x3747bf(0x1f9)));
        var _0x2e3123 = {
            'videoVolume': GM_getValue(_0x3747bf(0x2ef)) ? GM_getValue(_0x3747bf(0x2ef)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue('G_RENAME_FORMAT') ? GM_getValue(_0x3747bf(0x254)) : _0x3747bf(0x15e),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x3747bf(0x15f)) || navigator[_0x3747bf(0x2f7)] || navigator[_0x3747bf(0x159)],
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
                _0x2d9f06();
            })
        };
        _0x492ba5(), GM_addStyle(_0xde4cb7), _0x48bd85(), _0x4a97ab(_0x2e3123[_0x3747bf(0x15f)])[_0x3747bf(0xe2)](_0x30aefa => {
            const _0x31b8f0 = _0x3747bf;
            _0x2e3123['locale'][_0x2e3123[_0x31b8f0(0x15f)]] = _0x30aefa, _0x2ae5a7(), _0x48bd85(), _0x335b67(0x12c);
        })[_0x3747bf(0x35a)](_0x495468 => {
            const _0x5aa4bd = _0x3747bf;
            _0x48bd85(), _0x335b67(0x12c), !_0x2e3123[_0x5aa4bd(0x15f)][_0x5aa4bd(0x27b)]('en') && console[_0x5aa4bd(0x144)](_0x5aa4bd(0x1d7), _0x495468);
        }), _0x3ef70d(_0x3747bf(0x12a), GM_info['script'][_0x3747bf(0x340)], _0x3747bf(0x333), GM_info[_0x3747bf(0x267)][_0x3747bf(0x2f3)]);
        var _0x59b7ca = setInterval(function () {
            const _0x41130b = _0x3747bf;
            if (_0x573913('div#splash-screen')['length'] > 0x0 && !_0x573913('div#splash-screen')['is'](_0x41130b(0x21c)) || location[_0x41130b(0x149)][_0x41130b(0xb6)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location['hostname'][_0x41130b(0x27b)](_0x41130b(0x34e)) || (location['pathname']['endsWith'](_0x41130b(0x171)) || location[_0x41130b(0x149)]['endsWith'](_0x41130b(0x1df))) && _0x573913(_0x41130b(0x2ba))[_0x41130b(0x1bf)] > 0x0) {
                _0x2e3123[_0x41130b(0x1de)] = ![];
                return;
            }
            if (_0x2e3123['currentURL'] != location[_0x41130b(0x1a6)] || !_0x2e3123['firstStarted'] || !_0x2e3123[_0x41130b(0x1de)]) {
                console[_0x41130b(0x2ae)](_0x41130b(0x220), _0x41130b(0x23a)), clearInterval(_0x2e3123[_0x41130b(0x1ac)]), _0x2e3123[_0x41130b(0x1de)] = ![], _0x2e3123[_0x41130b(0x1c9)] = !![], _0x2e3123[_0x41130b(0x19a)] = location[_0x41130b(0x1a6)], _0x2e3123[_0x41130b(0x12c)][_0x41130b(0x11d)]();
                if (location[_0x41130b(0x1a6)][_0x41130b(0x27b)](_0x41130b(0x262)) || location[_0x41130b(0x149)][_0x41130b(0xb6)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x41130b(0x1a6)][_0x41130b(0x27b)](_0x41130b(0x2fb))) {
                    _0x2e3123[_0x41130b(0x345)][_0x41130b(0x1e2)] = {}, _0x2e3123[_0x41130b(0x345)]['highlights'] = {}, _0x3ef70d(_0x41130b(0x1e1));
                    var _0x34445b = setInterval(() => {
                        const _0x476ec1 = _0x41130b;
                        _0x573913(_0x476ec1(0x1f2))[_0x476ec1(0x1bf)] > 0x0 && (clearInterval(_0x34445b), setTimeout(() => {
                            _0x2d9f06(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x2e3123[_0x41130b(0x1de)] = !![];
                }
                location[_0x41130b(0x1a6)][_0x41130b(0x27b)]('https://www.instagram.com/reels/') && (_0x3ef70d(_0x41130b(0x312)), setTimeout(() => {
                    _0x220f5c(![]);
                }, 0x96), _0x2e3123[_0x41130b(0x1de)] = !![]);
                if (location[_0x41130b(0x1a6)][_0x41130b(0x1e6)]('?')[0x0] == _0x41130b(0x33c)) {
                    _0x2e3123[_0x41130b(0x345)][_0x41130b(0x1e2)] = {}, _0x2e3123[_0x41130b(0x345)][_0x41130b(0x281)] = {};
                    let _0x4e9359 = _0x2e3123[_0x41130b(0x2cb)]?.[_0x41130b(0xb6)](/^\/(stories|highlights)\//ig) != null;
                    _0x3ef70d(_0x41130b(0x128), _0x4e9359), setTimeout(() => {
                        const _0x3e7544 = _0x41130b;
                        _0x2d9f06(![], _0x4e9359);
                        const _0x4b9719 = _0x573913(_0x3e7544(0x216))?.[_0x3e7544(0x1ed)]()[0x0];
                        _0x4b9719 && _0x2e3123[_0x3e7544(0x12c)][_0x3e7544(0x301)](_0x4b9719, { 'childList': !![] });
                    }, 0x96), _0x2e3123[_0x41130b(0x1de)] = !![];
                }
                _0x573913('header\x20>\x20*[class]:first-child\x20img[alt]')[_0x41130b(0x1bf)] && location[_0x41130b(0x149)][_0x41130b(0xb6)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname']['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x3ef70d(_0x41130b(0x102)), setTimeout(() => {
                    _0x4fc121(![]);
                }, 0x96), _0x2e3123[_0x41130b(0x1de)] = !![]);
                if (!_0x2e3123[_0x41130b(0x1de)]) {
                    if (location[_0x41130b(0x1a6)][_0x41130b(0xb6)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x2e3123['GL_dataCache'][_0x41130b(0x281)] = {}, _0x3ef70d(_0x41130b(0x283)), _0x238e94(![]), _0x2e3123[_0x41130b(0x1ac)] = setInterval(() => {
                            _0x2e5b98(![]);
                        }, _0x4e7cb3), _0x573913(_0x41130b(0x350))['length'] && setTimeout(() => {
                            const _0x41a6dc = _0x41130b;
                            if (_0x17f2cd[_0x41a6dc(0x14e)]) {
                                var _0x18da45 = _0x573913(_0x41a6dc(0x158))[_0x41a6dc(0x11a)](function () {
                                    const _0x1988ca = _0x41a6dc;
                                    return _0x573913(this)[_0x1988ca(0xcb)]()[_0x1988ca(0x1bf)] === 0x0 && this['textContent']['trim']() !== '';
                                });
                                _0x18da45?.[_0x41a6dc(0x33f)](_0x41a6dc(0x238));
                            }
                            _0x2e3123[_0x41a6dc(0x1de)] = !![];
                        }, 0x96);
                    else
                        location[_0x41130b(0x1a6)][_0x41130b(0xb6)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x3ef70d(_0x41130b(0x377)), _0x573913(_0x41130b(0x1da))['length'] > 0x0 && (_0x573913(_0x41130b(0x2e8))['remove'](), _0x573913('.IG_DWNEWTAB')[_0x41130b(0xd8)](), _0x573913(_0x41130b(0x2e4))[_0x41130b(0x1bf)] && _0x573913(_0x41130b(0x2e4))[_0x41130b(0xd8)](), _0x3c21f9(![]), setTimeout(() => {
                            _0x3c21f9(![]);
                        }, 0x96)), _0x573913(_0x41130b(0x2e8))[_0x41130b(0x1bf)] && setTimeout(() => {
                            const _0x45fb2b = _0x41130b;
                            if (_0x17f2cd['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x593bbf = _0x573913(_0x45fb2b(0x158))[_0x45fb2b(0x11a)](function () {
                                    const _0x106c6f = _0x45fb2b;
                                    return _0x573913(this)[_0x106c6f(0xcb)]()[_0x106c6f(0x1bf)] === 0x0 && this['textContent'][_0x106c6f(0x1dc)]() !== '';
                                });
                                _0x593bbf?.[_0x45fb2b(0x238)]();
                            }
                            _0x2e3123[_0x45fb2b(0x1de)] = !![];
                        }, 0x96)) : (_0x2e3123['pageLoaded'] = ![], _0x573913('.IG_DWSTORY')['length'] && _0x573913('.IG_DWSTORY')['remove'](), _0x573913(_0x41130b(0x35d))[_0x41130b(0x1bf)] && _0x573913(_0x41130b(0x35d))[_0x41130b(0xd8)](), _0x573913(_0x41130b(0x218))[_0x41130b(0x1bf)] && _0x573913(_0x41130b(0x218))[_0x41130b(0xd8)](), _0x573913(_0x41130b(0x2e4))[_0x41130b(0x1bf)] && _0x573913('.IG_DWSTORY_THUMBNAIL')[_0x41130b(0xd8)](), _0x573913(_0x41130b(0x350))[_0x41130b(0x1bf)] && _0x573913(_0x41130b(0x350))[_0x41130b(0xd8)](), _0x573913(_0x41130b(0x1bb))['length'] && _0x573913(_0x41130b(0x1bb))[_0x41130b(0xd8)](), _0x573913('.IG_DWHINEWTAB')['length'] && _0x573913(_0x41130b(0x1aa))[_0x41130b(0xd8)](), _0x573913(_0x41130b(0x1cb))[_0x41130b(0x1bf)] && _0x573913(_0x41130b(0x1cb))[_0x41130b(0xd8)]());
                }
                _0x335b67(0x12c), _0x2e3123[_0x41130b(0x2cb)] = new URL(location[_0x41130b(0x1a6)])[_0x41130b(0x149)];
            }
        }, _0x4e7cb3);
        async function _0x15b65a() {
            const _0x551c36 = _0x3747bf;
            _0x26f057(!![]);
            let _0x3897a3 = new Date()[_0x551c36(0x2c6)](), _0x35ded4 = Math[_0x551c36(0x2a3)](_0x3897a3 / 0x3e8), _0x2bf11d = location['href'][_0x551c36(0x13d)](/\/$/ig, '')[_0x551c36(0x1e6)]('/')['at'](-0x1), _0x49baf1 = await _0x2a6254(_0x2bf11d), _0x38e732 = _0x49baf1[_0x551c36(0x28c)]['reels_media'][0x0][_0x551c36(0x2fa)][_0x551c36(0x308)];
            if (_0x17f2cd[_0x551c36(0x17d)]) {
                let _0x5e5b33 = 0x0;
                _0x4ee5bc(_0x5e5b33, _0x49baf1['data'][_0x551c36(0x36b)][0x0][_0x551c36(0xda)][_0x551c36(0x1bf)]), _0x49baf1[_0x551c36(0x28c)][_0x551c36(0x36b)][0x0][_0x551c36(0xda)][_0x551c36(0x166)]((_0x5948d8, _0x2088b3) => {
                    setTimeout(() => {
                        const _0x411a6d = a0_0x2f5d;
                        _0x17f2cd[_0x411a6d(0x30c)] && (_0x35ded4 = _0x5948d8[_0x411a6d(0x339)]), _0x5948d8[_0x411a6d(0x18e)][_0x411a6d(0x306)](function (_0x2c8636, _0x3ab6be) {
                            const _0x1fa3f3 = _0x411a6d;
                            if (_0x2c8636[_0x1fa3f3(0x212)] < _0x3ab6be[_0x1fa3f3(0x212)])
                                return 0x1;
                            if (_0x2c8636['config_width'] > _0x3ab6be[_0x1fa3f3(0x212)])
                                return -0x1;
                            return 0x0;
                        }), _0x5948d8['is_video'] ? _0x11fe73(_0x5948d8[_0x411a6d(0x1d0)][0x0]['src'], _0x38e732, 'highlights', _0x35ded4, _0x411a6d(0x271), _0x5948d8['id'])[_0x411a6d(0xe2)](() => {
                            const _0x1f1487 = _0x411a6d;
                            _0x4ee5bc(++_0x5e5b33, _0x49baf1[_0x1f1487(0x28c)]['reels_media'][0x0][_0x1f1487(0xda)][_0x1f1487(0x1bf)]);
                        }) : _0x11fe73(_0x5948d8[_0x411a6d(0x18e)][0x0]['src'], _0x38e732, 'highlights', _0x35ded4, _0x411a6d(0x15d), _0x5948d8['id'])[_0x411a6d(0xe2)](() => {
                            const _0x2f1a4f = _0x411a6d;
                            _0x4ee5bc(++_0x5e5b33, _0x49baf1[_0x2f1a4f(0x28c)][_0x2f1a4f(0x36b)][0x0][_0x2f1a4f(0xda)]['length']);
                        });
                    }, 0x64 * _0x2088b3);
                });
            } else
                _0x4f5bc8(![], !![]), _0x40a9fc(_0x49baf1, 'highlights');
        }
        async function _0x238e94(_0x3614cc, _0x367ade) {
            const _0x38640d = _0x3747bf;
            var _0x4abb72 = _0x573913(_0x38640d(0x24d))['filter'](function () {
                const _0x2d47ad = _0x38640d;
                return _0x573913(this)[_0x2d47ad(0x2d4)](_0x2d47ad(0x1a6))[_0x2d47ad(0x1e6)]('/')[_0x2d47ad(0x11a)](_0x1de52f => _0x1de52f[_0x2d47ad(0x1bf)] > 0x0)[_0x2d47ad(0x1bf)] === 0x1;
            })['first']()[_0x38640d(0x2d4)](_0x38640d(0x1a6))[_0x38640d(0x1e6)]('/')['filter'](_0x2dd509 => _0x2dd509[_0x38640d(0x1bf)] > 0x0)['at'](0x0);
            if (_0x3614cc) {
                let _0xa34f18 = new Date()[_0x38640d(0x2c6)](), _0x47bc8d = Math[_0x38640d(0x2a3)](_0xa34f18 / 0x3e8), _0x26feb9 = location[_0x38640d(0x1a6)][_0x38640d(0x13d)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x343085 = _0x573913(_0x38640d(0x2ea))[_0x38640d(0x1bf)] || _0x573913(_0x38640d(0x294))['length'] || _0x573913(_0x38640d(0x331))[_0x38640d(0x1e0)](_0x38640d(0x280))['length'], _0x532d38 = 0x0;
                _0x26f057(!![]);
                if (_0x2e3123[_0x38640d(0x345)][_0x38640d(0x281)][_0x26feb9]) {
                    _0x3ef70d(_0x38640d(0x111), _0x26feb9);
                    let _0x18c6f5 = _0x2e3123[_0x38640d(0x345)][_0x38640d(0x281)][_0x26feb9][_0x38640d(0x28c)]['reels_media'][0x0][_0x38640d(0xda)][_0x38640d(0x1bf)];
                    _0x4abb72 = _0x2e3123[_0x38640d(0x345)][_0x38640d(0x281)][_0x26feb9][_0x38640d(0x28c)]['reels_media'][0x0][_0x38640d(0x2fa)]['username'], _0x532d38 = _0x2e3123[_0x38640d(0x345)][_0x38640d(0x281)][_0x26feb9]['data'][_0x38640d(0x36b)][0x0]['items'][_0x18c6f5 - _0x343085];
                } else {
                    let _0x2c0ecd = await _0x2a6254(_0x26feb9), _0x4dee7a = _0x2c0ecd[_0x38640d(0x28c)][_0x38640d(0x36b)][0x0]['items']['length'];
                    _0x4abb72 = _0x2c0ecd['data']['reels_media'][0x0][_0x38640d(0x2fa)][_0x38640d(0x308)], _0x532d38 = _0x2c0ecd[_0x38640d(0x28c)]['reels_media'][0x0]['items'][_0x4dee7a - _0x343085], _0x2e3123['GL_dataCache'][_0x38640d(0x281)][_0x26feb9] = _0x2c0ecd;
                }
                _0x3ef70d(_0x38640d(0x13e), _0x26feb9, _0x2e3123[_0x38640d(0x345)][_0x38640d(0x281)][_0x26feb9]);
                _0x17f2cd['RENAME_PUBLISH_DATE'] && (_0x47bc8d = _0x532d38['taken_at_timestamp']);
                if (_0x17f2cd[_0x38640d(0x352)] && !_0x2e3123[_0x38640d(0x2f9)]) {
                    let _0x1e23fb = await _0x205707(_0x532d38['id']);
                    _0x1e23fb['status'] === 'ok' ? _0x1e23fb[_0x38640d(0xda)][0x0]['video_versions'] ? _0x367ade ? _0x1b86a7(_0x1e23fb['items'][0x0][_0x38640d(0x172)][0x0][_0x38640d(0x150)]) : _0x11fe73(_0x1e23fb[_0x38640d(0xda)][0x0][_0x38640d(0x172)][0x0][_0x38640d(0x150)], _0x4abb72, _0x38640d(0x281), _0x47bc8d, _0x38640d(0x271), _0x1e23fb[_0x38640d(0xda)][0x0]['id']) : _0x367ade ? _0x1b86a7(_0x1e23fb['items'][0x0][_0x38640d(0x2a8)]['candidates'][0x0]['url']) : _0x11fe73(_0x1e23fb[_0x38640d(0xda)][0x0][_0x38640d(0x2a8)][_0x38640d(0xf3)][0x0][_0x38640d(0x150)], _0x4abb72, 'highlights', _0x47bc8d, 'jpg', _0x1e23fb[_0x38640d(0xda)][0x0]['id']) : (_0x17f2cd[_0x38640d(0x2ff)] ? (delete _0x2e3123[_0x38640d(0x345)][_0x38640d(0x281)][_0x26feb9], _0x2e3123[_0x38640d(0x2f9)] = !![], _0x238e94(!![], _0x367ade)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x1e23fb[_0x38640d(0x1b4)]), _0x3ef70d(_0x1e23fb));
                } else
                    _0x532d38[_0x38640d(0xe8)] ? _0x367ade ? _0x1b86a7(_0x532d38['video_resources']['at'](-0x1)['src'], _0x4abb72) : _0x11fe73(_0x532d38['video_resources']['at'](-0x1)[_0x38640d(0x214)], _0x4abb72, _0x38640d(0x281), _0x47bc8d, _0x38640d(0x271), _0x532d38['id']) : _0x367ade ? _0x1b86a7(_0x532d38['display_resources']['at'](-0x1)[_0x38640d(0x214)], _0x4abb72) : _0x11fe73(_0x532d38[_0x38640d(0x18e)]['at'](-0x1)[_0x38640d(0x214)], _0x4abb72, 'highlights', _0x47bc8d, _0x38640d(0x15d), _0x532d38['id']), _0x2e3123[_0x38640d(0x2f9)] = ![];
                _0x26f057(![]);
            } else {
                if (!_0x573913(_0x38640d(0x350))[_0x38640d(0x1bf)]) {
                    let _0x2fac11 = null;
                    _0x573913('body\x20>\x20div\x20section._ac0a')[_0x38640d(0x1bf)] > 0x0 ? _0x2fac11 = _0x573913(_0x38640d(0x2ed)) : (_0x2fac11 = _0x573913(_0x38640d(0x2de)), _0x2fac11[_0x38640d(0x154)](_0x38640d(0x162), 'relative'));
                    if (_0x2fac11[_0x38640d(0x1bf)] === 0x0) {
                        let _0x5f08c2 = _0x573913(_0x38640d(0x2a5)), _0xe8552d = 0x0;
                        _0x5f08c2[_0x38640d(0xbd)](function () {
                            const _0x269094 = _0x38640d;
                            _0x573913(this)[_0x269094(0x9d)]() > _0xe8552d && (_0xe8552d = _0x573913(this)[_0x269094(0x9d)](), _0x2fac11 = _0x573913(this)[_0x269094(0xcb)](_0x269094(0x186))['first']());
                        });
                    }
                    if (_0x2fac11 != null) {
                        _0x2fac11['append'](_0x38640d(0x170) + _0x5ecdf3('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x480abe[_0x38640d(0x2e0)] + _0x38640d(0x36f)), _0x2fac11[_0x38640d(0x25e)](_0x38640d(0xef) + _0x5ecdf3(_0x38640d(0x30e)) + _0x38640d(0x21a) + _0x480abe[_0x38640d(0x30e)] + _0x38640d(0x36f));
                        let _0x542d04 = _0x3a0f5b(_0x4abb72);
                        _0x542d04[_0x38640d(0x1bf)] > 0x1 && _0x2fac11['append']('<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x5ecdf3('DW_ALL') + '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>' + _0x480abe[_0x38640d(0x1fb)] + _0x38640d(0x36f));
                        let _0x35c17e = _0x542d04[_0x38640d(0x2bf)](_0x38640d(0x279))[_0x38640d(0x1e0)](_0x38640d(0x1f8))?.['attr']('title');
                        _0x35c17e != null && _0x542d04[_0x38640d(0x2bf)](_0x38640d(0x279))[_0x38640d(0x1e0)](_0x38640d(0x1f8))[_0x38640d(0x11c)](_0x35c17e), _0x2fac11['find'](_0x38640d(0x2ac))['each'](function () {
                            const _0x398b85 = _0x38640d;
                            _0x573913(this)['on'](_0x398b85(0x23c), function () {
                                const _0x427390 = _0x398b85;
                                !_0x573913(this)[_0x427390(0x28c)](_0x427390(0x277)) && (_0x2fac11[_0x427390(0x1e0)](_0x427390(0x1cb))[_0x427390(0x1bf)] === 0x0 ? (_0x573913(this)[_0x427390(0x2d4)](_0x427390(0x1bc), !![]), _0x573913('.IG_DWHISTORY_THUMBNAIL')[_0x427390(0xd8)](), _0x3ef70d(_0x427390(0x16f))) : (_0x573913(this)[_0x427390(0x2d4)](_0x427390(0x1bc), !![]), _0x3ef70d(_0x427390(0xd3))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x2e5b98(_0x1fee3f) {
            const _0x4496f1 = _0x3747bf;
            if (_0x1fee3f) {
                let _0x1ebd83 = new Date()[_0x4496f1(0x2c6)](), _0x568742 = Math[_0x4496f1(0x2a3)](_0x1ebd83 / 0x3e8), _0x17b53c = location[_0x4496f1(0x1a6)][_0x4496f1(0x13d)](/\/$/ig, '')[_0x4496f1(0x1e6)]('/')['at'](-0x1), _0x1eab36 = '', _0x1e4559 = _0x573913(_0x4496f1(0x2ea))[_0x4496f1(0x1bf)] || _0x573913(_0x4496f1(0x294))[_0x4496f1(0x1bf)] || _0x573913('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x4496f1(0x1e0)](_0x4496f1(0x280))['length'], _0x872329 = '';
                _0x26f057(!![]);
                if (_0x2e3123[_0x4496f1(0x345)][_0x4496f1(0x281)][_0x17b53c]) {
                    _0x3ef70d(_0x4496f1(0x111), _0x17b53c);
                    let _0x2721e3 = _0x2e3123[_0x4496f1(0x345)][_0x4496f1(0x281)][_0x17b53c]['data'][_0x4496f1(0x36b)][0x0][_0x4496f1(0xda)][_0x4496f1(0x1bf)];
                    _0x1eab36 = _0x2e3123[_0x4496f1(0x345)]['highlights'][_0x17b53c][_0x4496f1(0x28c)]['reels_media'][0x0][_0x4496f1(0x2fa)][_0x4496f1(0x308)], _0x872329 = _0x2e3123[_0x4496f1(0x345)][_0x4496f1(0x281)][_0x17b53c][_0x4496f1(0x28c)]['reels_media'][0x0][_0x4496f1(0xda)][_0x2721e3 - _0x1e4559];
                } else {
                    let _0x1508c8 = await _0x2a6254(_0x17b53c), _0x224b40 = _0x1508c8[_0x4496f1(0x28c)][_0x4496f1(0x36b)][0x0]['items'][_0x4496f1(0x1bf)];
                    _0x1eab36 = _0x1508c8[_0x4496f1(0x28c)][_0x4496f1(0x36b)][0x0]['owner'][_0x4496f1(0x308)], _0x872329 = _0x1508c8[_0x4496f1(0x28c)][_0x4496f1(0x36b)][0x0][_0x4496f1(0xda)][_0x224b40 - _0x1e4559], _0x2e3123['GL_dataCache'][_0x4496f1(0x281)][_0x17b53c] = _0x1508c8;
                }
                _0x17f2cd[_0x4496f1(0x30c)] && (_0x568742 = _0x872329[_0x4496f1(0x339)]);
                if (_0x17f2cd[_0x4496f1(0x352)] && !_0x2e3123[_0x4496f1(0x2f9)]) {
                    let _0x1660f9 = await _0x205707(_0x872329['id']);
                    _0x1660f9['status'] === 'ok' ? _0x11fe73(_0x1660f9[_0x4496f1(0xda)][0x0]['image_versions2'][_0x4496f1(0xf3)][0x0]['url'], _0x1eab36, _0x4496f1(0x281), _0x568742, _0x4496f1(0x15d), _0x17b53c) : (_0x17f2cd[_0x4496f1(0x2ff)] ? (delete _0x2e3123[_0x4496f1(0x345)][_0x4496f1(0x281)][_0x17b53c], _0x2e3123[_0x4496f1(0x2f9)] = !![], _0x2e5b98(!![])) : alert(_0x4496f1(0x2f5) + _0x1660f9[_0x4496f1(0x1b4)]), _0x3ef70d(_0x1660f9));
                } else
                    _0x11fe73(_0x872329[_0x4496f1(0x18e)]['at'](-0x1)['src'], _0x1eab36, 'highlights', _0x568742, 'jpg', _0x17b53c), _0x2e3123['tempFetchRateLimit'] = ![];
                _0x26f057(![]);
            } else {
                if (_0x573913(_0x4496f1(0x253))[_0x4496f1(0x1bf)]) {
                    if (!_0x573913(_0x4496f1(0x1cb))['length']) {
                        let _0x53e094 = null;
                        _0x573913(_0x4496f1(0x370))[_0x4496f1(0x1bf)] > 0x0 ? _0x53e094 = _0x573913('body\x20>\x20div\x20section:visible._ac0a') : (_0x53e094 = _0x573913(_0x4496f1(0x2de)), _0x53e094[_0x4496f1(0x154)](_0x4496f1(0x162), _0x4496f1(0x36c)));
                        if (_0x53e094['length'] === 0x0) {
                            let _0x487265 = _0x573913(_0x4496f1(0x2a5)), _0x237098 = 0x0;
                            _0x487265[_0x4496f1(0xbd)](function () {
                                const _0x54e939 = _0x4496f1;
                                _0x573913(this)[_0x54e939(0x9d)]() > _0x237098 && (_0x237098 = _0x573913(this)[_0x54e939(0x9d)](), _0x53e094 = _0x573913(this)[_0x54e939(0xcb)](_0x54e939(0x186))[_0x54e939(0x187)]());
                            });
                        }
                        _0x53e094 != null && _0x53e094[_0x4496f1(0x25e)](_0x4496f1(0x28b) + _0x5ecdf3('THUMBNAIL_INTRO') + _0x4496f1(0xc5) + _0x480abe['THUMBNAIL'] + _0x4496f1(0x36f));
                    }
                } else
                    _0x573913(_0x4496f1(0x1cb))['remove']();
            }
        }
        function _0x2d9f06(_0x2dd60c, _0x4b1ecf) {
            const _0x2edab2 = _0x3747bf;
            _0x4b1ecf === !![] && (_0x3ef70d(_0x2edab2(0x1c4), _0x2edab2(0x2d8)), _0x573913('article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]')[_0x2edab2(0x11a)](function () {
                const _0x1ff03c = _0x2edab2;
                return _0x573913(this)[_0x1ff03c(0x1e0)](_0x1ff03c(0x324))['length'] === 0x0;
            })[_0x2edab2(0x288)](_0x2edab2(0x31c)));
            if (_0x2dd60c == ![]) {
                const _0x4ec069 = 0x64;
                let _0x4f13a3 = 0x0;
                var _0x54235c = setInterval(() => {
                    const _0x5e84af = _0x2edab2;
                    (_0x4f13a3 > _0x4ec069 || _0x573913(_0x5e84af(0x20f))[_0x5e84af(0x1bf)] > 0x0) && (clearInterval(_0x54235c), _0x4f13a3 > _0x4ec069 && console['warn'](_0x5e84af(0x332), _0x5e84af(0x15c))), _0x3ef70d('onReadyMyDW()\x20Timer', _0x5e84af(0x1af)), _0x25c00f(), _0x4f13a3++;
                }, 0x32);
            } else
                _0x25c00f();
        }
        function _0x4ce2b3(_0x2d0756) {
            const _0x2ad3e3 = _0x3747bf;
            _0x17f2cd['DISABLE_VIDEO_LOOPING'] && _0x2d0756[_0x2ad3e3(0x1e0)]('video')['each'](function () {
                _0x573913(this)['on']('ended', function () {
                    const _0x21fb4e = a0_0x2f5d;
                    !_0x573913(this)[_0x21fb4e(0x28c)](_0x21fb4e(0xae)) && (_0x573913(this)['attr'](_0x21fb4e(0xc1), !![]), this['pause'](), _0x3ef70d(_0x21fb4e(0x99)));
                });
            });
            _0x17f2cd[_0x2ad3e3(0x2da)] && _0x2d0756[_0x2ad3e3(0x1e0)]('video')['each'](function () {
                const _0xccc014 = _0x2ad3e3;
                _0x573913(this)['on'](_0xccc014(0x285), function () {
                    const _0x5846d1 = _0xccc014;
                    !_0x573913(this)[_0x5846d1(0x28c)](_0x5846d1(0x29c)) && (_0x573913(this)[_0x5846d1(0x2d4)](_0x5846d1(0x1ef), !![]), this[_0x5846d1(0x10c)] = _0x2e3123['videoVolume'], _0x3ef70d('(post)\x20Added\x20video\x20event\x20listener\x20#modify'));
                });
            });
            _0x17f2cd[_0x2ad3e3(0xbe)] && _0x2d0756[_0x2ad3e3(0x1e0)](_0x2ad3e3(0x266))[_0x2ad3e3(0xbd)](function () {
                const _0x5a3932 = _0x2ad3e3;
                if (!_0x573913(this)[_0x5a3932(0x28c)]('controls')) {
                    let _0xa486c7 = _0x573913(this);
                    _0x3ef70d(_0x5a3932(0x23e)), _0x17f2cd[_0x5a3932(0x2da)] && (this[_0x5a3932(0x10c)] = _0x2e3123[_0x5a3932(0x22f)], _0x573913(this)['on'](_0x5a3932(0x35f), function () {
                        const _0x11a359 = _0x5a3932;
                        this['volume'] = _0x2e3123[_0x11a359(0x22f)];
                    })), _0x573913(this)['on']('contextmenu', function (_0x506ecc) {
                        const _0x2b410b = _0x5a3932;
                        _0x506ecc[_0x2b410b(0x269)](), _0xa486c7[_0x2b410b(0x154)](_0x2b410b(0x230), '-1'), _0xa486c7['removeAttr'](_0x2b410b(0x1f0));
                    }), _0x573913(this)[_0x5a3932(0x1ed)]()[_0x5a3932(0x1e0)](_0x5a3932(0x23b))['first']()['on'](_0x5a3932(0x180), function (_0x10ff70) {
                        const _0x3ed45b = _0x5a3932;
                        _0x10ff70[_0x3ed45b(0x269)](), _0xa486c7[_0x3ed45b(0x154)](_0x3ed45b(0x230), '2'), _0xa486c7[_0x3ed45b(0x2d4)](_0x3ed45b(0x1f0), !![]);
                    }), _0x573913(this)['on'](_0x5a3932(0x9a), function () {
                        const _0x199860 = _0x5a3932;
                        let _0x23e2e8 = _0x573913(this)[_0x199860(0x1ed)]()['find'](_0x199860(0x23b))[_0x199860(0x1e0)](_0x199860(0x125))[_0x199860(0x11a)](function (_0x45b977) {
                            const _0x2160ce = _0x199860;
                            return _0x573913(this)['width']() <= 0x40 && _0x573913(this)[_0x2160ce(0x2a9)]() <= 0x40 && _0x573913(this)[_0x2160ce(0x1e0)](_0x2160ce(0x1f5))[_0x2160ce(0x1bf)] > 0x0;
                        });
                        var _0x3b09c2 = _0x23e2e8['find'](_0x199860(0x29d))[_0x199860(0x1bf)] === 0x0;
                        this[_0x199860(0x16a)] != _0x3b09c2 && (this[_0x199860(0x10c)] = _0x2e3123[_0x199860(0x22f)], _0x23e2e8?.[_0x199860(0x33f)](_0x199860(0x238))), _0x573913(this)['attr'](_0x199860(0x1d1)) && (_0x2e3123[_0x199860(0x22f)] = this[_0x199860(0x10c)], GM_setValue('G_VIDEO_VOLUME', this[_0x199860(0x10c)])), this[_0x199860(0x10c)] == _0x2e3123[_0x199860(0x22f)] && _0x573913(this)[_0x199860(0x2d4)](_0x199860(0x1d1), !![]);
                    }), _0x573913(this)['css'](_0x5a3932(0x162), _0x5a3932(0x16b)), _0x573913(this)[_0x5a3932(0x154)]('z-index', '2'), _0x573913(this)[_0x5a3932(0x2d4)](_0x5a3932(0x215), !![]), _0x573913(this)['attr']('controls', !![]);
                }
            });
            var _0xc31e2b = _0x2d0756['find']('video'), _0x3dc212 = _0x2d0756['find'](_0x2ad3e3(0x23b))[_0x2ad3e3(0x187)]();
            _0x1594e5(_0xc31e2b, _0x3dc212, _0x2ad3e3(0x12f), _0x2ad3e3(0x2a7));
        }
        ;
        function _0x25c00f() {
            const _0x3d5a37 = _0x3747bf;
            _0x573913(_0x3d5a37(0x1fe))[_0x3d5a37(0x30b)](function (_0xa1dbb8) {
                const _0x160f32 = _0x3d5a37;
                return _0x573913(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x573913(this)[_0x160f32(0x1ed)]()['parent']()[_0x160f32(0x1ed)]()[_0x160f32(0x1ed)]()[0x0] : this;
            })['filter'](function () {
                const _0xa0a12c = _0x3d5a37;
                return _0x573913(this)[_0xa0a12c(0x2a9)]() > 0x0 && _0x573913(this)[_0xa0a12c(0x9d)]() > 0x0;
            })[_0x3d5a37(0xbd)](function (_0x1196e6) {
                const _0x354686 = _0x3d5a37;
                if (!_0x573913(this)[_0x354686(0x2d4)](_0x354686(0x31c)) && !_0x573913(this)[_0x354686(0x364)](_0x354686(0xf1)) && !_0x573913(this)[_0x354686(0xcb)](_0x354686(0x338))?.[_0x354686(0x364)](_0x354686(0xf1)) && _0x573913(this)['parents'](_0x354686(0x14a))['length'] === 0x0) {
                    _0x3ef70d(_0x354686(0x2aa), _0x573913(this));
                    const _0x2258e5 = _0x573913(this), _0x1a61be = this[_0x354686(0x116)], _0x469096 = _0x354686(0xe7);
                    var _0x542d6b;
                    if (_0x1a61be === 'DIV' && _0x1196e6 != 0x0)
                        return;
                    const _0x305423 = _0x2258e5['children']('div')[_0x354686(0xcb)](_0x354686(0x186));
                    if (_0x305423[_0x354686(0x1bf)] === 0x0)
                        return;
                    _0x3ef70d(_0x354686(0x193), _0x305423);
                    if (_0x2258e5[_0x354686(0x1e0)](_0x354686(0x337))['length'] > 0x0) {
                        _0x2258e5[_0x354686(0x1e0)](_0x354686(0x2c8))[_0x354686(0x1bf)] > 0x0 && _0x2258e5['find'](_0x354686(0x2c8))['css'](_0x354686(0x198), '37px');
                        const _0x289d35 = _0x2258e5[_0x354686(0x1e0)](_0x354686(0x337))[_0x354686(0x187)]()[_0x354686(0x1ed)]()[0x0];
                        var _0x4810ea = new MutationObserver(function () {
                            const _0x2c1144 = _0x354686;
                            _0x2258e5[_0x2c1144(0x1e0)](_0x2c1144(0x2c8))[_0x2c1144(0x154)](_0x2c1144(0x198), _0x2c1144(0x123));
                        });
                        _0x4810ea[_0x354686(0x301)](_0x289d35, { 'childList': !![] });
                    }
                    _0x305423['eq'](_0x1a61be === 'DIV' ? 0x0 : _0x305423['length'] - 0x2)['append']('<div\x20class=\x22button_wrapper\x22>');
                    const _0x1ea3e9 = _0x354686(0x170) + _0x5ecdf3('DW') + _0x354686(0x10b) + _0x480abe[_0x354686(0x2e0)] + _0x354686(0x36f), _0x55c1e4 = _0x354686(0xef) + _0x5ecdf3(_0x354686(0x30e)) + '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>' + _0x480abe[_0x354686(0x30e)] + _0x354686(0x36f), _0x17bf25 = _0x354686(0x28b) + _0x5ecdf3(_0x354686(0x179)) + _0x354686(0x1d4) + _0x480abe[_0x354686(0x2f6)] + '</div>', _0x4ca2ee = _0x354686(0x36e) + _0x5ecdf3(_0x354686(0x243)) + '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>' + _0x480abe[_0x354686(0x307)] + _0x354686(0x36f);
                    _0x305423[_0x354686(0x1e0)](_0x354686(0x342))[_0x354686(0x25e)](_0x1ea3e9);
                    const _0x1547da = _0x2258e5[_0x354686(0x1e0)](_0x469096)[_0x354686(0x1bf)];
                    if (_0x1547da > 0x1 && _0x17f2cd[_0x354686(0x1fd)] && !_0x17f2cd[_0x354686(0x157)]) {
                        const _0x32b8df = '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x5ecdf3('DW_ALL') + _0x354686(0x35c) + _0x480abe[_0x354686(0x1fb)] + _0x354686(0x36f);
                        _0x305423[_0x354686(0x1e0)]('.button_wrapper')[_0x354686(0x25e)](_0x32b8df);
                    }
                    _0x305423[_0x354686(0x1e0)](_0x354686(0x342))[_0x354686(0x25e)](_0x55c1e4), setTimeout(() => {
                        const _0x18afd8 = _0x354686;
                        if (_0x305423['eq'](_0x1a61be === 'DIV' ? 0x0 : _0x305423[_0x18afd8(0x1bf)] - 0x2)[_0x18afd8(0x1e0)]('div\x20>\x20ul\x20li._acaz')['length'] === 0x0)
                            _0x305423[_0x18afd8(0x1e0)](_0x18afd8(0x266))[_0x18afd8(0x1bf)] > 0x0 ? _0x305423['find']('.button_wrapper')[_0x18afd8(0x25e)](_0x17bf25) : (_0x542d6b = _0x2258e5[_0x18afd8(0x1e0)](_0x18afd8(0xe4))[_0x18afd8(0x11a)](function () {
                                const _0x368cf7 = _0x18afd8;
                                return _0x573913(this)['width']() > 0xc8 && _0x573913(this)[_0x368cf7(0x2a9)]() > 0xc8;
                            })['attr'](_0x18afd8(0x214)), _0x305423[_0x18afd8(0x1e0)](_0x18afd8(0x342))[_0x18afd8(0x25e)](_0x4ca2ee));
                        else {
                            const _0x1d8802 = (_0x57d197, _0x35d7a0) => {
                                    const _0x3ff1bb = _0x18afd8;
                                    _0x57d197[_0x3ff1bb(0x166)](_0x23d793 => {
                                        const _0x1db8e8 = _0x3ff1bb;
                                        if (_0x23d793['isIntersecting']) {
                                            var _0x3b0340 = _0x573913(_0x23d793['target']);
                                            _0x305423[_0x1db8e8(0x1e0)](_0x1db8e8(0x287))?.[_0x1db8e8(0xd8)](), _0x305423[_0x1db8e8(0x1e0)](_0x1db8e8(0x26d))?.[_0x1db8e8(0xd8)](), _0x3b0340['find']('video')['length'] > 0x0 ? (_0x305423[_0x1db8e8(0x1e0)](_0x1db8e8(0x287))[_0x1db8e8(0x1bf)] === 0x0 && _0x305423[_0x1db8e8(0x1e0)](_0x1db8e8(0x342))[_0x1db8e8(0x25e)](_0x17bf25), _0x4ce2b3(_0x2258e5)) : (_0x542d6b = _0x3b0340[_0x1db8e8(0x1e0)](_0x1db8e8(0xe4))[_0x1db8e8(0x2d4)](_0x1db8e8(0x214)), _0x305423[_0x1db8e8(0x1e0)](_0x1db8e8(0x342))[_0x1db8e8(0x25e)](_0x4ca2ee));
                                        }
                                    });
                                }, _0x1b9225 = new IntersectionObserver(_0x1d8802, {
                                    'root': _0x2258e5[_0x18afd8(0x1e0)]('div\x20>\x20ul._acay')[_0x18afd8(0x187)]()[_0x18afd8(0x1ed)]()[_0x18afd8(0x1ed)]()[_0x18afd8(0x1ed)]()[0x0],
                                    'rootMargin': '0px',
                                    'threshold': 0.1
                                }), _0x5d5a16 = new MutationObserver(function (_0x4eccdc, _0x5ce048) {
                                    const _0x203ec8 = _0x18afd8;
                                    var _0x3d64f0 = _0x4eccdc['at'](0x0)?.[_0x203ec8(0x213)];
                                    _0x573913(_0x3d64f0)['find'](_0x203ec8(0x221))[_0x203ec8(0xbd)](function () {
                                        _0x1b9225['observe'](this);
                                    });
                                });
                            _0x2258e5[_0x18afd8(0x1e0)](_0x18afd8(0x24c))[_0x18afd8(0xbd)](function () {
                                const _0xcb55ba = _0x18afd8;
                                _0x1b9225[_0xcb55ba(0x301)](this);
                            });
                            const _0x1fdeb4 = _0x305423['eq'](_0x1a61be === _0x18afd8(0x98) ? 0x0 : _0x305423[_0x18afd8(0x1bf)] - 0x2)[_0x18afd8(0x1e0)]('div\x20>\x20ul\x20li._acaz')?.[_0x18afd8(0x1ed)]()[0x0], _0x21d7f6 = _0x305423['eq'](_0x1a61be === _0x18afd8(0x98) ? 0x0 : _0x305423[_0x18afd8(0x1bf)] - 0x2)[_0x18afd8(0x1e0)](_0x18afd8(0x24c))?.[_0x18afd8(0x1ed)]()[_0x18afd8(0x1ed)]()[0x0];
                            _0x1fdeb4 && _0x5d5a16[_0x18afd8(0x301)](_0x1fdeb4, { 'childList': !![] }), _0x21d7f6 && _0x5d5a16[_0x18afd8(0x301)](_0x21d7f6, { 'attributes': !![] });
                        }
                    }, 0x32), _0x305423[_0x354686(0x154)](_0x354686(0x162), _0x354686(0x36c)), _0x4ce2b3(_0x2258e5), _0x2e3123[_0x354686(0xa6)][_0x354686(0x2b0)]({
                        'element': this,
                        'trigger': [
                            _0x354686(0x287),
                            _0x354686(0x29b),
                            _0x354686(0x177),
                            '.IG_DW_MAIN',
                            _0x354686(0x26d)
                        ]
                    }), _0x573913(this)['on']('click', _0x354686(0x26d), function () {
                        _0x542d6b != null ? _0x198306(_0x542d6b) : alert('Cannot\x20find\x20resource\x20url.');
                    }), _0x573913(this)['on'](_0x354686(0x238), '.IG_THUMBNAIL_MAIN', function () {
                        const _0x1cd2d0 = _0x354686;
                        _0x26f057(!![]), _0x2e3123[_0x1cd2d0(0x286)] = _0x2258e5['attr'](_0x1cd2d0(0x9c)), _0x2e3123[_0x1cd2d0(0x284)] = location[_0x1cd2d0(0x149)][_0x1cd2d0(0x13d)](/\/$/, '')['split']('/')['at'](-0x1) || _0x2258e5[_0x1cd2d0(0x1e0)](_0x1cd2d0(0x264))[_0x1cd2d0(0x187)]()[_0x1cd2d0(0x2d4)](_0x1cd2d0(0x1a6))[_0x1cd2d0(0x1e6)]('/')['at'](0x2) || _0x573913(this)[_0x1cd2d0(0x1ed)]()[_0x1cd2d0(0x1ed)]()[_0x1cd2d0(0x1ed)]()[_0x1cd2d0(0xcb)](_0x1cd2d0(0x374))[_0x1cd2d0(0xcb)](_0x1cd2d0(0x186))['children']('div:last-child')[_0x1cd2d0(0x1e0)]('a[href^=\x22/p/\x22]')[_0x1cd2d0(0x2ad)]()[_0x1cd2d0(0x2d4)](_0x1cd2d0(0x1a6))['split']('/')['at'](0x2);
                        var _0x222701 = _0x45529b(_0x2258e5);
                        _0x4f5bc8(!![], ![]), _0x142e35(_0x2e3123[_0x1cd2d0(0x284)], _0x1cd2d0(0xf4), '')[_0x1cd2d0(0xe2)](() => {
                            let _0x2a03db = setInterval(() => {
                                const _0x30ed41 = a0_0x2f5d;
                                if (_0x573913(_0x30ed41(0x2eb))[_0x30ed41(0x1bf)] > 0x0) {
                                    clearInterval(_0x2a03db);
                                    var _0x3c9a7a = _0x573913(_0x30ed41(0x110) + (_0x222701 + 0x1) + '\x22]')?.[_0x30ed41(0x1ed)]()[_0x30ed41(0x1e0)](_0x30ed41(0x1b2))?.[_0x30ed41(0x187)]();
                                    _0x3c9a7a != null && _0x3c9a7a[_0x30ed41(0x1bf)] > 0x0 ? _0x3c9a7a[_0x30ed41(0x33f)](_0x30ed41(0x238)) : alert('Can\x20not\x20find\x20thumbnail\x20url.'), _0x26f057(![]), _0x573913('.IG_POPUP_DIG')[_0x30ed41(0xd8)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x573913(this)['on']('click', _0x354686(0x29b), function () {
                        const _0x11c616 = _0x354686;
                        _0x26f057(!![]), _0x2e3123[_0x11c616(0x286)] = _0x2258e5[_0x11c616(0x2d4)]('data-username'), _0x2e3123[_0x11c616(0x284)] = location[_0x11c616(0x149)][_0x11c616(0x13d)](/\/$/, '')[_0x11c616(0x1e6)]('/')['at'](-0x1) || _0x2258e5[_0x11c616(0x1e0)](_0x11c616(0x264))[_0x11c616(0x187)]()[_0x11c616(0x2d4)](_0x11c616(0x1a6))[_0x11c616(0x1e6)]('/')['at'](0x2) || _0x573913(this)['parent']()[_0x11c616(0x1ed)]()[_0x11c616(0x1ed)]()[_0x11c616(0xcb)]('div:last-child')[_0x11c616(0xcb)](_0x11c616(0x186))[_0x11c616(0xcb)](_0x11c616(0x374))[_0x11c616(0x1e0)](_0x11c616(0x264))[_0x11c616(0x2ad)]()[_0x11c616(0x2d4)](_0x11c616(0x1a6))[_0x11c616(0x1e6)]('/')['at'](0x2);
                        var _0x5908a6 = _0x45529b(_0x2258e5);
                        _0x4f5bc8(!![], ![]), _0x142e35(_0x2e3123['GL_postPath'], _0x11c616(0xf4), '')['then'](() => {
                            let _0x1db0e5 = setInterval(() => {
                                const _0x290420 = a0_0x2f5d;
                                if (_0x573913(_0x290420(0x2eb))[_0x290420(0x1bf)] > 0x0) {
                                    clearInterval(_0x1db0e5);
                                    var _0xd06dba = _0x573913(_0x290420(0x110) + (_0x5908a6 + 0x1) + '\x22]');
                                    if (_0x17f2cd['FORCE_RESOURCE_VIA_MEDIA'] && _0x17f2cd['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0x148b1f(_0xd06dba[_0x290420(0x187)]()[0x0], !![]);
                                    else {
                                        let _0x17bd78 = _0xd06dba?.['attr'](_0x290420(0x27e));
                                        if (_0x17bd78) {
                                            var _0x2d6d7f = new URL(_0x17bd78);
                                            _0x2d6d7f[_0x290420(0x9e)] = _0x290420(0x313), _0x1b86a7(_0x2d6d7f['href']);
                                        } else
                                            alert(_0x290420(0xbf));
                                    }
                                    _0x26f057(![]), _0x573913(_0x290420(0xaa))[_0x290420(0xd8)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x573913(this)['on'](_0x354686(0x238), '.IG_DW_ALL_MAIN', async function () {
                        const _0x50e909 = _0x354686;
                        _0x2e3123[_0x50e909(0x286)] = _0x2258e5[_0x50e909(0x2d4)](_0x50e909(0x9c)), _0x2e3123[_0x50e909(0x284)] = location[_0x50e909(0x149)]['replace'](/\/$/, '')[_0x50e909(0x1e6)]('/')['at'](-0x1) || _0x2258e5[_0x50e909(0x1e0)]('a[href^=\x22/p/\x22]')['first']()['attr']('href')[_0x50e909(0x1e6)]('/')['at'](0x2) || _0x573913(this)[_0x50e909(0x1ed)]()['parent']()['parent']()[_0x50e909(0xcb)](_0x50e909(0x374))['children'](_0x50e909(0x186))['children']('div:last-child')[_0x50e909(0x1e0)](_0x50e909(0x264))[_0x50e909(0x2ad)]()[_0x50e909(0x2d4)]('href')[_0x50e909(0x1e6)]('/')['at'](0x2), _0x4f5bc8(_0x17f2cd[_0x50e909(0x157)], !![]), _0x573913(_0x50e909(0xeb))['html'](_0x50e909(0xa3) + _0x2e3123[_0x50e909(0x284)] + '\x22>' + _0x2e3123[_0x50e909(0x284)] + _0x50e909(0x16c)), _0x573913(_0x50e909(0x2eb))[_0x50e909(0xbd)](function () {
                            const _0x287779 = _0x50e909;
                            _0x573913(this)[_0x287779(0x143)](_0x287779(0xaf)), _0x573913(this)[_0x287779(0x16d)](_0x287779(0x14b)), _0x573913(this)[_0x287779(0x175)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x5ecdf3(_0x287779(0x30e)) + '\x22\x20class=\x22newTab\x22>' + _0x480abe[_0x287779(0x30e)] + _0x287779(0x36f)), _0x573913(this)[_0x287779(0x2d4)](_0x287779(0x2b1)) == 'video' && _0x573913(this)[_0x287779(0x175)](_0x287779(0x28b) + _0x5ecdf3(_0x287779(0x179)) + _0x287779(0x1f7) + _0x480abe[_0x287779(0x2f6)] + _0x287779(0x36f));
                        }), _0x142e35(_0x2e3123[_0x50e909(0x284)], _0x50e909(0xf4), _0x5ecdf3('LOAD_BLOB_MULTIPLE'))[_0x50e909(0xe2)](() => {
                            let _0x61cd86 = setInterval(() => {
                                const _0x5b0973 = a0_0x2f5d;
                                _0x573913(_0x5b0973(0x2eb))[_0x5b0973(0x1bf)] > 0x0 && (clearInterval(_0x61cd86), _0x573913(_0x5b0973(0x2eb))[_0x5b0973(0xbd)](function () {
                                    const _0x26a651 = _0x5b0973;
                                    _0x573913(this)[_0x26a651(0x33f)](_0x26a651(0x238));
                                }), _0x573913('.IG_POPUP_DIG')[_0x5b0973(0xd8)]());
                            }, 0xfa);
                        });
                    }), _0x573913(this)['on'](_0x354686(0x238), _0x354686(0x324), async function () {
                        const _0x2c5d28 = _0x354686;
                        _0x2e3123[_0x2c5d28(0x286)] = _0x2258e5[_0x2c5d28(0x2d4)](_0x2c5d28(0x9c)), _0x2e3123[_0x2c5d28(0x284)] = location[_0x2c5d28(0x149)][_0x2c5d28(0x13d)](/\/$/, '')[_0x2c5d28(0x1e6)]('/')['at'](-0x1) || _0x2258e5[_0x2c5d28(0x1e0)](_0x2c5d28(0x264))['first']()[_0x2c5d28(0x2d4)](_0x2c5d28(0x1a6))['split']('/')['at'](0x2) || _0x573913(this)['parent']()[_0x2c5d28(0x1ed)]()['parent']()['children']('div:last-child')[_0x2c5d28(0xcb)](_0x2c5d28(0x186))[_0x2c5d28(0xcb)]('div:last-child')[_0x2c5d28(0x1e0)](_0x2c5d28(0x264))[_0x2c5d28(0x2ad)]()['attr'](_0x2c5d28(0x1a6))[_0x2c5d28(0x1e6)]('/')['at'](0x2), _0x4f5bc8(_0x17f2cd[_0x2c5d28(0x157)], !![]), _0x573913(_0x2c5d28(0xeb))[_0x2c5d28(0x31d)](_0x2c5d28(0xa3) + _0x2e3123[_0x2c5d28(0x284)] + '\x22>' + _0x2e3123[_0x2c5d28(0x284)] + '</a>');
                        if (_0x17f2cd[_0x2c5d28(0x1fd)]) {
                            _0x26f057(!![]), _0x84ab14(!![]);
                            var _0x444895 = _0x45529b(_0x573913(this)['parent']()['parent']()['parent']());
                            _0x142e35(_0x2e3123[_0x2c5d28(0x284)], _0x2c5d28(0xf4), '')['then'](() => {
                                let _0x3b0c6d = setInterval(() => {
                                    const _0x3bfec0 = a0_0x2f5d;
                                    if (_0x573913(_0x3bfec0(0x2eb))[_0x3bfec0(0x1bf)] > 0x0) {
                                        clearInterval(_0x3b0c6d);
                                        var _0xbde79d = _0x573913(_0x3bfec0(0x110) + (_0x444895 + 0x1) + '\x22]')?.[_0x3bfec0(0x2d4)](_0x3bfec0(0x27e));
                                        _0xbde79d ? (_0x26f057(![]), _0x573913(_0x3bfec0(0x110) + (_0x444895 + 0x1) + '\x22]')?.[_0x3bfec0(0x33f)]('click')) : alert(_0x3bfec0(0x1f1)), _0x573913(_0x3bfec0(0xaa))[_0x3bfec0(0xd8)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x17f2cd[_0x2c5d28(0x157)]) {
                            var _0x5cf050 = 0x0, _0x4a4e41 = _0x573913(this)[_0x2c5d28(0x1ed)]()[_0x2c5d28(0x1ed)]()['find'](_0x469096)[_0x2c5d28(0x1bf)], _0x1af86e = _0x17f2cd[_0x2c5d28(0x275)], _0x2c0f49 = new Date(_0x573913(this)[_0x2c5d28(0x1ed)]()[_0x2c5d28(0x1ed)]()[_0x2c5d28(0x1ed)]()[_0x2c5d28(0x1e0)](_0x2c5d28(0x207))[_0x2c5d28(0x11a)](function () {
                                    const _0x50d6af = _0x2c5d28;
                                    let _0x53af72 = _0x573913(this)[_0x50d6af(0x2bf)](_0x50d6af(0x363))[_0x50d6af(0x2d4)]('href');
                                    return _0x53af72?.['startsWith'](_0x50d6af(0x120)) || _0x53af72?.[_0x50d6af(0xb6)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })[_0x2c5d28(0x187)]()['attr'](_0x2c5d28(0x2c7)))['getTime']();
                            if (_0x4a4e41)
                                _0x573913(this)[_0x2c5d28(0x1ed)]()['parent']()[_0x2c5d28(0x1e0)](_0x469096)[_0x2c5d28(0xbd)](function () {
                                    const _0xaf6aa0 = _0x2c5d28;
                                    let _0x394fc3 = _0x573913(this)['parent']()[_0xaf6aa0(0x1ed)]()['parent']()[_0xaf6aa0(0x1e0)](_0xaf6aa0(0x266));
                                    _0x394fc3 && _0x394fc3[_0xaf6aa0(0x2d4)](_0xaf6aa0(0x214)) && (_0x1af86e = !![]);
                                }), _0x1af86e || _0x17f2cd[_0x2c5d28(0x352)] ? _0x142e35(_0x2e3123[_0x2c5d28(0x284)], _0x2c5d28(0xf4), _0x5ecdf3(_0x2c5d28(0x2a4))) : (_0x573913(this)[_0x2c5d28(0x1ed)]()[_0x2c5d28(0x1ed)]()[_0x2c5d28(0x1e0)](_0x469096)[_0x2c5d28(0xbd)](function () {
                                    const _0xf21855 = _0x2c5d28;
                                    _0x5cf050++;
                                    let _0x16f293 = _0x573913(this)[_0xf21855(0x1e0)](_0xf21855(0x266)), _0x1be7c7 = _0x573913(this)[_0xf21855(0x1e0)]('._aagv\x20img'), _0x1f52ad = _0x1be7c7[_0xf21855(0x2d4)](_0xf21855(0x252)) ? _0x1be7c7[_0xf21855(0x2d4)]('srcset')[_0xf21855(0x1e6)]('\x20')[0x0] : _0x1be7c7[_0xf21855(0x2d4)](_0xf21855(0x214));
                                    _0x16f293 && _0x16f293['attr'](_0xf21855(0x214)) && (_0x1af86e = !![]), _0x1be7c7 && _0x1f52ad && _0x573913(_0xf21855(0xf4))['append']('<a\x20datetime=\x22' + _0x2c0f49 + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2e3123[_0xf21855(0x284)] + _0xf21855(0x263) + _0x5cf050 + _0xf21855(0x148) + _0x1f52ad + _0xf21855(0x25b) + _0x1f52ad + _0xf21855(0x20e) + _0x5ecdf3('IMG') + _0xf21855(0x319) + _0x5cf050 + _0xf21855(0x139));
                                }), _0x1af86e && _0x142e35(_0x2e3123[_0x2c5d28(0x284)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x5ecdf3('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x17f2cd[_0x2c5d28(0x352)])
                                    _0x142e35(_0x2e3123[_0x2c5d28(0x284)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x5ecdf3('LOAD_BLOB_MULTIPLE'));
                                else {
                                    _0x5cf050++;
                                    let _0x2eff56 = _0x573913(this)[_0x2c5d28(0x1ed)]()['parent']()[_0x2c5d28(0x1ed)]()[_0x2c5d28(0x1e0)]('video'), _0x4c734f = _0x573913(this)[_0x2c5d28(0x1ed)]()[_0x2c5d28(0x1ed)]()[_0x2c5d28(0x1ed)]()['find'](_0x2c5d28(0x138)), _0x2c9683 = _0x4c734f[_0x2c5d28(0x2d4)](_0x2c5d28(0x252)) ? _0x4c734f[_0x2c5d28(0x2d4)](_0x2c5d28(0x252))[_0x2c5d28(0x1e6)]('\x20')[0x0] : _0x4c734f[_0x2c5d28(0x2d4)](_0x2c5d28(0x214));
                                    _0x2eff56 && _0x2eff56[_0x2c5d28(0x2d4)]('src') && _0x142e35(_0x2e3123[_0x2c5d28(0x284)], _0x2c5d28(0xf4), _0x5ecdf3(_0x2c5d28(0x2e5))), _0x4c734f && _0x2c9683 && _0x573913(_0x2c5d28(0xf4))[_0x2c5d28(0x25e)](_0x2c5d28(0x12b) + _0x2c0f49 + _0x2c5d28(0x1db) + _0x2e3123[_0x2c5d28(0x284)] + _0x2c5d28(0x263) + _0x5cf050 + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x2c9683 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2c9683 + _0x2c5d28(0x20e) + _0x5ecdf3(_0x2c5d28(0x192)) + _0x2c5d28(0x319) + _0x5cf050 + _0x2c5d28(0x139));
                                }
                            }
                        }
                        _0x573913(_0x2c5d28(0x2eb))['each'](function () {
                            const _0x476e98 = _0x2c5d28;
                            _0x573913(this)['wrap'](_0x476e98(0xaf)), _0x573913(this)[_0x476e98(0x16d)](_0x476e98(0x14b)), _0x573913(this)[_0x476e98(0x175)](_0x476e98(0xef) + _0x5ecdf3('NEW_TAB') + _0x476e98(0x2f2) + _0x480abe['NEW_TAB'] + _0x476e98(0x36f)), _0x573913(this)[_0x476e98(0x2d4)](_0x476e98(0x2b1)) == _0x476e98(0x266) && _0x573913(this)[_0x476e98(0x175)](_0x476e98(0x28b) + _0x5ecdf3(_0x476e98(0x179)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x480abe[_0x476e98(0x2f6)] + _0x476e98(0x36f));
                        }), _0x17f2cd['DIRECT_DOWNLOAD_ALL'] && _0x142e35(_0x2e3123[_0x2c5d28(0x284)], _0x2c5d28(0xf4), _0x5ecdf3(_0x2c5d28(0x2a4)))[_0x2c5d28(0xe2)](() => {
                            let _0x435ec8 = setInterval(() => {
                                const _0x53222d = a0_0x2f5d;
                                _0x573913(_0x53222d(0x2eb))['length'] > 0x0 && (clearInterval(_0x435ec8), _0x573913('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x53222d(0xbd)](function () {
                                    const _0x4dc181 = _0x53222d;
                                    _0x573913(this)[_0x4dc181(0x33f)](_0x4dc181(0x238));
                                }), _0x573913('.IG_POPUP_DIG')[_0x53222d(0xd8)]());
                            }, 0xfa);
                        });
                    });
                    var _0x124592 = _0x573913(this)[_0x354686(0x1e0)](_0x354686(0x2e1))[_0x354686(0x187)]()[_0x354686(0x11c)]() || _0x573913(this)[_0x354686(0x1e0)]('a[href^=\x22/\x22]')[_0x354686(0x11a)](function () {
                        const _0x14029d = _0x354686;
                        return _0x573913(this)?.[_0x14029d(0x11c)]()?.[_0x14029d(0x1bf)] > 0x0;
                    })[_0x354686(0x187)]()['text']();
                    _0x573913(this)[_0x354686(0x2d4)](_0x354686(0x31c), _0x354686(0x32c)), _0x573913(this)[_0x354686(0x2d4)](_0x354686(0x9c), _0x124592);
                }
            });
        }
        function _0x484d26(_0x5e541d) {
            const _0x20fc79 = _0x3747bf;
            var _0x49314a = _0x5e541d[_0x20fc79(0x1d2)] ?? _0x5e541d;
            return _0x49314a['owner'] == null && _0x49314a['user'] != null && (_0x49314a[_0x20fc79(0x2fa)] = _0x49314a['user']), _0x49314a[_0x20fc79(0x2fa)] == null && (_0x3ef70d(_0x20fc79(0x229), 'undefined\x20username'), alert('carousel_media:\x20undefined\x20username')), _0x49314a;
        }
        async function _0x142e35(_0x28c263, _0x490a56, _0x5d0e04) {
            const _0x3e1dc1 = _0x3747bf;
            try {
                _0x573913(_0x490a56 + '\x20a')[_0x3e1dc1(0xd8)](), _0x573913(_0x490a56)[_0x3e1dc1(0x25e)]('<p\x20id=\x22_SNLOAD\x22>' + _0x5d0e04 + '</p>');
                let _0x4d4ec4 = await _0x553cd8(_0x28c263), _0x358a9d = _0x484d26(_0x4d4ec4[_0x3e1dc1(0x28c)]);
                if (_0x4d4ec4[_0x3e1dc1(0x1d9)] === _0x3e1dc1(0x1e3)) {
                    let _0x17e1a5 = 0x1;
                    _0x358a9d[_0x3e1dc1(0x255)] == _0x3e1dc1(0xdf) && _0x358a9d['video_url'] && (_0x573913(_0x490a56)[_0x3e1dc1(0x25e)](_0x3e1dc1(0xbc) + _0x358a9d['id'] + _0x3e1dc1(0x104) + _0x358a9d[_0x3e1dc1(0x339)] + _0x3e1dc1(0x2c5) + _0x358a9d['shortcode'] + _0x3e1dc1(0x239) + _0x358a9d[_0x3e1dc1(0x2fa)][_0x3e1dc1(0x308)] + '\x22\x20data-globalIndex=\x22' + _0x17e1a5 + _0x3e1dc1(0x148) + _0x358a9d[_0x3e1dc1(0x35e)] + _0x3e1dc1(0x25b) + _0x358a9d[_0x3e1dc1(0x18e)][0x1]['src'] + _0x3e1dc1(0x25c) + _0x5ecdf3(_0x3e1dc1(0x2c1)) + '</span>\x20' + _0x17e1a5 + _0x3e1dc1(0x139)), _0x17e1a5++);
                    _0x358a9d[_0x3e1dc1(0x255)] == 'GraphImage' && (_0x573913(_0x490a56)['append'](_0x3e1dc1(0xbc) + _0x358a9d['id'] + _0x3e1dc1(0x104) + _0x358a9d['taken_at_timestamp'] + _0x3e1dc1(0x2c5) + _0x358a9d[_0x3e1dc1(0x246)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x358a9d[_0x3e1dc1(0x2fa)][_0x3e1dc1(0x308)] + _0x3e1dc1(0x1c2) + _0x17e1a5 + _0x3e1dc1(0x148) + _0x358a9d['display_resources'][_0x358a9d['display_resources'][_0x3e1dc1(0x1bf)] - 0x1][_0x3e1dc1(0x214)] + _0x3e1dc1(0x25b) + _0x358a9d[_0x3e1dc1(0x18e)][0x1][_0x3e1dc1(0x214)] + _0x3e1dc1(0x20e) + _0x5ecdf3(_0x3e1dc1(0x192)) + _0x3e1dc1(0x319) + _0x17e1a5 + _0x3e1dc1(0x139)), _0x17e1a5++);
                    if (_0x358a9d[_0x3e1dc1(0x255)] == _0x3e1dc1(0x323) && _0x358a9d['edge_sidecar_to_children'])
                        for (let _0x115c78 of _0x358a9d[_0x3e1dc1(0xc9)][_0x3e1dc1(0x130)]) {
                            _0x115c78[_0x3e1dc1(0x2f4)][_0x3e1dc1(0x255)] == _0x3e1dc1(0xdf) && _0x573913(_0x490a56)[_0x3e1dc1(0x25e)](_0x3e1dc1(0xbc) + _0x115c78[_0x3e1dc1(0x2f4)]['id'] + _0x3e1dc1(0x104) + _0x358a9d[_0x3e1dc1(0x339)] + _0x3e1dc1(0x2c5) + _0x358a9d[_0x3e1dc1(0x246)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x358a9d[_0x3e1dc1(0x2fa)][_0x3e1dc1(0x308)] + '\x22\x20data-globalIndex=\x22' + _0x17e1a5 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x115c78['node'][_0x3e1dc1(0x35e)] + _0x3e1dc1(0x25b) + _0x115c78[_0x3e1dc1(0x2f4)]['display_resources'][0x1][_0x3e1dc1(0x214)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x5ecdf3('VID') + '</span>\x20' + _0x17e1a5 + _0x3e1dc1(0x139)), _0x115c78[_0x3e1dc1(0x2f4)]['__typename'] == _0x3e1dc1(0xa0) && _0x573913(_0x490a56)[_0x3e1dc1(0x25e)]('<a\x20media-id=\x22' + _0x115c78[_0x3e1dc1(0x2f4)]['id'] + _0x3e1dc1(0x104) + _0x358a9d['taken_at_timestamp'] + _0x3e1dc1(0x2c5) + _0x358a9d[_0x3e1dc1(0x246)] + _0x3e1dc1(0x354) + _0x358a9d[_0x3e1dc1(0x2fa)][_0x3e1dc1(0x308)] + _0x3e1dc1(0x1c2) + _0x17e1a5 + _0x3e1dc1(0x148) + _0x115c78[_0x3e1dc1(0x2f4)][_0x3e1dc1(0x18e)][_0x115c78[_0x3e1dc1(0x2f4)][_0x3e1dc1(0x18e)][_0x3e1dc1(0x1bf)] - 0x1][_0x3e1dc1(0x214)] + _0x3e1dc1(0x25b) + _0x115c78[_0x3e1dc1(0x2f4)][_0x3e1dc1(0x18e)][0x1][_0x3e1dc1(0x214)] + _0x3e1dc1(0x20e) + _0x5ecdf3(_0x3e1dc1(0x192)) + '</span>\x20' + _0x17e1a5 + _0x3e1dc1(0x139)), _0x17e1a5++;
                        }
                } else {
                    if (_0x358a9d[_0x3e1dc1(0x13a)])
                        _0x3ef70d('carousel_media'), _0x358a9d['carousel_media']['forEach']((_0x218686, _0x50c02f) => {
                            const _0x2a169a = _0x3e1dc1;
                            let _0x4847a7 = _0x50c02f + 0x1;
                            _0x218686['video_versions'] == null ? (_0x218686[_0x2a169a(0x2a8)][_0x2a169a(0xf3)][_0x2a169a(0x306)](function (_0x4dee1d, _0x5f2f9f) {
                                const _0x4f8b59 = _0x2a169a;
                                let _0x270410 = new URL(_0x4dee1d[_0x4f8b59(0x150)])[_0x4f8b59(0x32e)][_0x4f8b59(0x1cf)](_0x4f8b59(0x113)), _0x793847 = new URL(_0x5f2f9f[_0x4f8b59(0x150)])[_0x4f8b59(0x32e)]['get']('stp');
                                if (_0x270410 && _0x793847) {
                                    if (_0x270410[_0x4f8b59(0x1bf)] > _0x793847[_0x4f8b59(0x1bf)])
                                        return 0x1;
                                    if (_0x270410['length'] < _0x793847[_0x4f8b59(0x1bf)])
                                        return -0x1;
                                } else {
                                    if (_0x4dee1d[_0x4f8b59(0x9d)] < _0x5f2f9f['width'])
                                        return 0x1;
                                    if (_0x4dee1d[_0x4f8b59(0x9d)] > _0x5f2f9f[_0x4f8b59(0x9d)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x573913(_0x490a56)[_0x2a169a(0x25e)]('<a\x20media-id=\x22' + _0x218686['pk'] + _0x2a169a(0x104) + _0x218686[_0x2a169a(0x1a8)] + _0x2a169a(0x2c5) + _0x358a9d['code'] + _0x2a169a(0x354) + _0x358a9d[_0x2a169a(0x2fa)][_0x2a169a(0x308)] + _0x2a169a(0x1c2) + _0x4847a7 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x218686[_0x2a169a(0x2a8)]['candidates'][0x0][_0x2a169a(0x150)] + _0x2a169a(0x25b) + _0x218686[_0x2a169a(0x2a8)][_0x2a169a(0xf3)][0x0][_0x2a169a(0x150)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x5ecdf3('IMG') + _0x2a169a(0x319) + _0x4847a7 + _0x2a169a(0x139))) : _0x573913(_0x490a56)[_0x2a169a(0x25e)](_0x2a169a(0xbc) + _0x218686['pk'] + _0x2a169a(0x104) + _0x218686[_0x2a169a(0x1a8)] + _0x2a169a(0x2c5) + _0x358a9d[_0x2a169a(0xdb)] + _0x2a169a(0x239) + _0x358a9d[_0x2a169a(0x2fa)][_0x2a169a(0x308)] + _0x2a169a(0x1c2) + _0x4847a7 + _0x2a169a(0x148) + _0x218686[_0x2a169a(0x172)][0x0][_0x2a169a(0x150)] + _0x2a169a(0x25b) + _0x218686[_0x2a169a(0x2a8)][_0x2a169a(0xf3)][0x0]['url'] + _0x2a169a(0x25c) + _0x5ecdf3(_0x2a169a(0x2c1)) + _0x2a169a(0x319) + _0x4847a7 + _0x2a169a(0x139));
                        });
                    else {
                        let _0x1ee6bf = 0x1;
                        _0x358a9d['video_versions'] == null ? (_0x358a9d[_0x3e1dc1(0x2a8)][_0x3e1dc1(0xf3)][_0x3e1dc1(0x306)](function (_0x14b713, _0x1a80c6) {
                            const _0x1dac3a = _0x3e1dc1;
                            let _0x1f4684 = new URL(_0x14b713[_0x1dac3a(0x150)])[_0x1dac3a(0x32e)][_0x1dac3a(0x1cf)](_0x1dac3a(0x113)), _0x528bd1 = new URL(_0x1a80c6['url'])[_0x1dac3a(0x32e)]['get'](_0x1dac3a(0x113));
                            if (_0x1f4684 && _0x528bd1) {
                                if (_0x1f4684[_0x1dac3a(0x1bf)] > _0x528bd1['length'])
                                    return 0x1;
                                if (_0x1f4684[_0x1dac3a(0x1bf)] < _0x528bd1[_0x1dac3a(0x1bf)])
                                    return -0x1;
                            } else {
                                if (_0x14b713['width'] < _0x1a80c6[_0x1dac3a(0x9d)])
                                    return 0x1;
                                if (_0x14b713[_0x1dac3a(0x9d)] > _0x1a80c6['width'])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x573913(_0x490a56)['append'](_0x3e1dc1(0xbc) + _0x358a9d['pk'] + '\x22\x20datetime=\x22' + _0x358a9d['taken_at'] + _0x3e1dc1(0x2c5) + _0x358a9d[_0x3e1dc1(0xdb)] + _0x3e1dc1(0x354) + _0x358a9d['owner']['username'] + '\x22\x20data-globalIndex=\x22' + _0x1ee6bf + _0x3e1dc1(0x148) + _0x358a9d[_0x3e1dc1(0x2a8)][_0x3e1dc1(0xf3)][0x0][_0x3e1dc1(0x150)] + _0x3e1dc1(0x25b) + _0x358a9d[_0x3e1dc1(0x2a8)]['candidates'][0x0][_0x3e1dc1(0x150)] + _0x3e1dc1(0x20e) + _0x5ecdf3(_0x3e1dc1(0x192)) + _0x3e1dc1(0x319) + _0x1ee6bf + _0x3e1dc1(0x139))) : _0x573913(_0x490a56)[_0x3e1dc1(0x25e)](_0x3e1dc1(0xbc) + _0x358a9d['pk'] + '\x22\x20datetime=\x22' + _0x358a9d[_0x3e1dc1(0x1a8)] + _0x3e1dc1(0x2c5) + _0x358a9d['code'] + _0x3e1dc1(0x239) + _0x358a9d[_0x3e1dc1(0x2fa)][_0x3e1dc1(0x308)] + _0x3e1dc1(0x1c2) + _0x1ee6bf + _0x3e1dc1(0x148) + _0x358a9d[_0x3e1dc1(0x172)][0x0][_0x3e1dc1(0x150)] + _0x3e1dc1(0x25b) + _0x358a9d[_0x3e1dc1(0x2a8)][_0x3e1dc1(0xf3)][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x5ecdf3(_0x3e1dc1(0x2c1)) + '</span>\x20' + _0x1ee6bf + _0x3e1dc1(0x139));
                    }
                }
                _0x573913(_0x3e1dc1(0x231))[_0x3e1dc1(0xd8)](), _0x573913(_0x3e1dc1(0x2eb))[_0x3e1dc1(0xbd)](function () {
                    const _0x25185a = _0x3e1dc1;
                    _0x573913(this)['wrap'](_0x25185a(0xaf)), _0x573913(this)[_0x25185a(0x16d)](_0x25185a(0x14b)), _0x573913(this)[_0x25185a(0x175)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x5ecdf3(_0x25185a(0x30e)) + _0x25185a(0x2f2) + _0x480abe[_0x25185a(0x30e)] + _0x25185a(0x36f)), _0x573913(this)[_0x25185a(0x2d4)](_0x25185a(0x2b1)) == _0x25185a(0x266) && _0x573913(this)[_0x25185a(0x175)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x5ecdf3(_0x25185a(0x179)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x480abe[_0x25185a(0x2f6)] + _0x25185a(0x36f));
                });
            } catch (_0x76e5e9) {
                _0x3ef70d(_0x3e1dc1(0x244), _0x76e5e9);
            }
            ;
        }
        function _0x45529b(_0x44874c) {
            const _0x5b6cf6 = _0x3747bf;
            var _0x4f8bb5 = 0x0, _0x112624 = _0x44874c[_0x5b6cf6(0x1e0)](_0x5b6cf6(0x124));
            return (_0x112624 == null || !_0x112624['hasClass'](_0x5b6cf6(0x329))) && (_0x112624 = _0x44874c[_0x5b6cf6(0x1e0)](_0x5b6cf6(0x22c))['eq'](0x0)['children'](_0x5b6cf6(0x186))), _0x112624['filter'](_0x5b6cf6(0x2ca))[_0x5b6cf6(0xbd)](function (_0x44706c) {
                const _0x2026e8 = _0x5b6cf6;
                _0x573913(this)[_0x2026e8(0x364)](_0x2026e8(0x2b7)) && (_0x4f8bb5 = _0x44706c);
            }), _0x4f8bb5;
        }
        async function _0x4fc121(_0x4675bd) {
            const _0x32813b = _0x3747bf;
            if (_0x4675bd) {
                _0x26f057(!![]);
                let _0x1207a1 = new Date()[_0x32813b(0x2c6)](), _0x48699e = Math[_0x32813b(0x2a3)](_0x1207a1 / 0x3e8), _0x848f1f = location[_0x32813b(0x149)][_0x32813b(0x242)](/(reels|tagged)\/$/ig, '')[_0x32813b(0x1e6)]('/')[_0x32813b(0x11a)](_0x427492 => _0x427492[_0x32813b(0x1bf)] > 0x0)['at'](-0x1), _0x175545 = await _0x4e1727(_0x848f1f);
                try {
                    let _0x4bd708 = await _0x10afd3(_0x175545[_0x32813b(0x135)]['pk']);
                    _0x11fe73(_0x4bd708, _0x848f1f, 'avatar', _0x48699e, _0x32813b(0x15d));
                } catch (_0x1a7ad7) {
                    _0x11fe73(_0x175545[_0x32813b(0x135)][_0x32813b(0x2c2)], _0x848f1f, _0x32813b(0x245), _0x48699e, _0x32813b(0x15d));
                }
                _0x26f057(![]);
            } else {
                if (!_0x573913(_0x32813b(0x258))[_0x32813b(0x1bf)]) {
                    let _0x4f7809 = setInterval(() => {
                        const _0x2012fa = _0x32813b;
                        if (_0x573913(_0x2012fa(0x258))[_0x2012fa(0x1bf)]) {
                            clearInterval(_0x4f7809);
                            return;
                        }
                        _0x573913(_0x2012fa(0x197))['parent']()[_0x2012fa(0x1ed)]()[_0x2012fa(0x25e)](_0x2012fa(0x170) + _0x5ecdf3('DW') + _0x2012fa(0x2b8) + _0x480abe['DOWNLOAD'] + _0x2012fa(0x36f)), _0x573913(_0x2012fa(0x197))[_0x2012fa(0x1ed)]()[_0x2012fa(0x1ed)]()['css'](_0x2012fa(0x162), _0x2012fa(0x36c)), _0x573913(_0x2012fa(0x1ea))['parent']()[_0x2012fa(0x1ed)]()[_0x2012fa(0x1ed)]()['append']('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x5ecdf3('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x480abe[_0x2012fa(0x2e0)] + _0x2012fa(0x36f)), _0x573913(_0x2012fa(0x1ea))[_0x2012fa(0x1ed)]()[_0x2012fa(0x1ed)]()[_0x2012fa(0x1ed)]()[_0x2012fa(0x154)](_0x2012fa(0x162), _0x2012fa(0x36c));
                    }, 0x96);
                }
            }
        }
        async function _0x220f5c(_0x3d3eea, _0x1282a6, _0x40089f) {
            const _0xe2d036 = _0x3747bf;
            if (_0x3d3eea) {
                _0x26f057(!![]);
                let _0x58b522 = location['href'][_0xe2d036(0x1e6)]('?')['at'](0x0)[_0xe2d036(0x1e6)](_0xe2d036(0x347))['at'](-0x1)[_0xe2d036(0x242)]('/', ''), _0x557130 = await _0x553cd8(_0x58b522), _0x3c0643 = _0x484d26(_0x557130[_0xe2d036(0x28c)]), _0x55416d = new Date()[_0xe2d036(0x2c6)]();
                _0x17f2cd[_0xe2d036(0x30c)] && (_0x557130[_0xe2d036(0x1d9)] === _0xe2d036(0x1e3) ? _0x55416d = _0x3c0643[_0xe2d036(0x1d2)][_0xe2d036(0x339)] : _0x55416d = _0x3c0643['taken_at']);
                if (_0x557130[_0xe2d036(0x1d9)] === _0xe2d036(0x1e3)) {
                    if (_0x1282a6 && _0x3c0643['shortcode_media']['is_video']) {
                        if (_0x40089f)
                            _0x1b86a7(_0x3c0643[_0xe2d036(0x1d2)][_0xe2d036(0x35e)]);
                        else {
                            let _0x2d3117 = _0xe2d036(0x271);
                            _0x11fe73(_0x3c0643[_0xe2d036(0x1d2)]['video_url'], _0x3c0643[_0xe2d036(0x1d2)][_0xe2d036(0x2fa)]['username'], _0xe2d036(0x22a), _0x55416d, _0x2d3117, _0x58b522);
                        }
                    } else {
                        if (_0x40089f)
                            _0x1b86a7(_0x3c0643[_0xe2d036(0x1d2)][_0xe2d036(0x18e)]['at'](-0x1)[_0xe2d036(0x214)]);
                        else {
                            let _0x47d6b3 = _0xe2d036(0x15d);
                            _0x11fe73(_0x3c0643[_0xe2d036(0x1d2)][_0xe2d036(0x18e)]['at'](-0x1)['src'], _0x3c0643['shortcode_media'][_0xe2d036(0x2fa)][_0xe2d036(0x308)], _0xe2d036(0x22a), _0x55416d, _0x47d6b3, _0x58b522);
                        }
                    }
                } else {
                    if (_0x1282a6 && _0x3c0643[_0xe2d036(0x172)] != null) {
                        if (_0x40089f)
                            _0x1b86a7(_0x3c0643[_0xe2d036(0x172)][0x0][_0xe2d036(0x150)]);
                        else {
                            let _0x106312 = _0xe2d036(0x271);
                            _0x11fe73(_0x3c0643[_0xe2d036(0x172)][0x0][_0xe2d036(0x150)], _0x3c0643[_0xe2d036(0x2fa)][_0xe2d036(0x308)], _0xe2d036(0x22a), _0x55416d, _0x106312, _0x58b522);
                        }
                    } else {
                        if (_0x40089f)
                            _0x1b86a7(_0x3c0643[_0xe2d036(0x2a8)][_0xe2d036(0xf3)][0x0][_0xe2d036(0x150)]);
                        else {
                            let _0x5f1f72 = _0xe2d036(0x15d);
                            _0x11fe73(_0x3c0643[_0xe2d036(0x2a8)][_0xe2d036(0xf3)][0x0][_0xe2d036(0x150)], _0x3c0643[_0xe2d036(0x2fa)]['username'], _0xe2d036(0x22a), _0x55416d, _0x5f1f72, _0x58b522);
                        }
                    }
                }
                _0x26f057(![]);
            } else
                var _0x53608a = setInterval(() => {
                    const _0x1a661f = _0xe2d036;
                    _0x573913(_0x1a661f(0x2d6))[_0x1a661f(0x1bf)] > 0x0 && (clearInterval(_0x53608a), _0x17f2cd[_0x1a661f(0x236)] && (_0x573913(_0x1a661f(0xfc))[_0x1a661f(0xd8)](), _0x573913(_0x1a661f(0x1e8))[_0x1a661f(0x25e)]('<section\x20id=\x22scrollWrapper\x22></section>'), _0x573913(_0x1a661f(0x1a0))[_0x1a661f(0x25e)](_0x1a661f(0xd1)), _0x573913(_0x1a661f(0x1a0))[_0x1a661f(0x25e)](_0x1a661f(0x303)), _0x573913(_0x1a661f(0xf6))['on'](_0x1a661f(0x238), function () {
                        const _0x2acd13 = _0x1a661f;
                        _0x573913(_0x2acd13(0x103))[0x0]['scrollBy']({
                            'top': -0x1e,
                            'behavior': _0x2acd13(0x1ad)
                        });
                    }), _0x573913(_0x1a661f(0xf7))['on'](_0x1a661f(0x238), function () {
                        const _0x38f4d5 = _0x1a661f;
                        _0x573913('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x38f4d5(0x2d7)]({
                            'top': 0x1e,
                            'behavior': _0x38f4d5(0x1ad)
                        });
                    })), _0x573913(_0x1a661f(0x210))[_0x1a661f(0xcb)](_0x1a661f(0x186))[_0x1a661f(0xbd)](function () {
                        const _0xd72c6e = _0x1a661f;
                        if (_0x573913(this)['children']()[_0xd72c6e(0x1bf)] > 0x0) {
                            if (!_0x573913(this)[_0xd72c6e(0xcb)]()[_0xd72c6e(0x1e0)]('.IG_REELS')[_0xd72c6e(0x1bf)]) {
                                var _0x1c3c5c = _0x573913(this);
                                _0x573913(this)[_0xd72c6e(0xcb)]()['css'](_0xd72c6e(0x162), _0xd72c6e(0x36c)), _0x573913(this)['children']()['append'](_0xd72c6e(0x170) + _0x5ecdf3('DW') + _0xd72c6e(0x356) + _0x480abe[_0xd72c6e(0x2e0)] + '</div>'), _0x573913(this)['children']()[_0xd72c6e(0x25e)](_0xd72c6e(0xef) + _0x5ecdf3('NEW_TAB') + _0xd72c6e(0x28a) + _0x480abe[_0xd72c6e(0x30e)] + _0xd72c6e(0x36f)), _0x573913(this)[_0xd72c6e(0xcb)]()[_0xd72c6e(0x25e)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x5ecdf3(_0xd72c6e(0x179)) + '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>' + _0x480abe[_0xd72c6e(0x2f6)] + _0xd72c6e(0x36f));
                                _0x17f2cd[_0xd72c6e(0xcf)] && _0x573913(this)['find'](_0xd72c6e(0x266))[_0xd72c6e(0xbd)](function () {
                                    const _0x239c8f = _0xd72c6e;
                                    _0x573913(this)['on'](_0x239c8f(0x348), function () {
                                        const _0x1f7e68 = _0x239c8f;
                                        if (!_0x573913(this)[_0x1f7e68(0x28c)](_0x1f7e68(0xae))) {
                                            let _0x5e871e = _0x573913(this)[_0x1f7e68(0xfe)]()[_0x1f7e68(0x1e0)](_0x1f7e68(0x336))['parents'](_0x1f7e68(0x1f3));
                                            _0x5e871e['length'] > 0x0 ? (_0x573913(this)['attr'](_0x1f7e68(0xc1), !![]), _0x5e871e[_0x1f7e68(0x33f)](_0x1f7e68(0x238)), _0x3ef70d(_0x1f7e68(0x2b9))) : (_0x573913(this)['attr'](_0x1f7e68(0xc1), !![]), _0x573913(this)[_0x1f7e68(0x1ed)]()[_0x1f7e68(0x1e0)](_0x1f7e68(0x2b6))[_0x1f7e68(0x288)](_0x1f7e68(0x209)), this[_0x1f7e68(0x24a)](), _0x3ef70d('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()'));
                                        }
                                    });
                                });
                                _0x17f2cd[_0xd72c6e(0xbe)] && _0x573913(this)[_0xd72c6e(0x1e0)](_0xd72c6e(0x266))[_0xd72c6e(0xbd)](function () {
                                    const _0x40a04b = _0xd72c6e;
                                    if (!_0x573913(this)[_0x40a04b(0x28c)](_0x40a04b(0x1f0))) {
                                        let _0x2037f0 = _0x573913(this);
                                        _0x3ef70d('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x17f2cd[_0x40a04b(0x2da)] && (this[_0x40a04b(0x10c)] = _0x2e3123[_0x40a04b(0x22f)], _0x573913(this)['on'](_0x40a04b(0x35f), function () {
                                            const _0x579b00 = _0x40a04b;
                                            this['volume'] = _0x2e3123[_0x579b00(0x22f)];
                                        })), _0x573913(this)['on']('contextmenu', function (_0x2039f4) {
                                            const _0x56b8f9 = _0x40a04b;
                                            _0x2039f4['preventDefault'](), _0x2037f0[_0x56b8f9(0x154)](_0x56b8f9(0x230), '-1'), _0x2037f0['removeAttr'](_0x56b8f9(0x1f0));
                                        }), _0x573913(this)[_0x40a04b(0x1ed)]()[_0x40a04b(0x1e0)](_0x40a04b(0x295))['filter'](function () {
                                            const _0x27ce50 = _0x40a04b;
                                            return _0x573913(this)[_0x27ce50(0x1ed)](_0x27ce50(0x181))[_0x27ce50(0x1bf)] > 0x0 && _0x573913(this)['css'](_0x27ce50(0x241)) === _0x27ce50(0x1b5) && _0x573913(this)[_0x27ce50(0x2d4)]('style') != null;
                                        })[_0x40a04b(0x187)]()['on']('contextmenu', function (_0x324943) {
                                            const _0x2f0db8 = _0x40a04b;
                                            _0x324943[_0x2f0db8(0x269)](), _0x2037f0['css'](_0x2f0db8(0x230), '2'), _0x2037f0[_0x2f0db8(0x2d4)](_0x2f0db8(0x1f0), !![]);
                                        }), _0x573913(this)['on']('volumechange', function () {
                                            const _0x2e4044 = _0x40a04b;
                                            let _0x467b0e = _0x573913(this)['parent']()[_0x2e4044(0x1e0)](_0x2e4044(0x23b))[_0x2e4044(0x1e0)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')['filter'](function (_0x3a70e1) {
                                                const _0x2294c0 = _0x2e4044;
                                                return _0x573913(this)['width']() <= 0x40 && _0x573913(this)['height']() <= 0x40 && _0x573913(this)[_0x2294c0(0x1e0)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')[_0x2294c0(0x1bf)] > 0x0;
                                            });
                                            var _0xe3b415 = _0x467b0e[_0x2e4044(0x1e0)](_0x2e4044(0x29d))[_0x2e4044(0x1bf)] === 0x0;
                                            this[_0x2e4044(0x16a)] != _0xe3b415 && (this['volume'] = _0x2e3123[_0x2e4044(0x22f)], _0x467b0e?.['trigger'](_0x2e4044(0x238))), _0x573913(this)['attr'](_0x2e4044(0x1d1)) && (_0x2e3123[_0x2e4044(0x22f)] = this[_0x2e4044(0x10c)], GM_setValue(_0x2e4044(0x2ef), this['volume'])), this[_0x2e4044(0x10c)] == _0x2e3123[_0x2e4044(0x22f)] && _0x573913(this)[_0x2e4044(0x2d4)](_0x2e4044(0x1d1), !![]);
                                        }), _0x573913(this)[_0x40a04b(0x154)](_0x40a04b(0x162), _0x40a04b(0x16b)), _0x573913(this)[_0x40a04b(0x154)](_0x40a04b(0x230), '2'), _0x573913(this)[_0x40a04b(0x2d4)](_0x40a04b(0x215), !![]), _0x573913(this)[_0x40a04b(0x2d4)]('controls', !![]);
                                    }
                                });
                                var _0x64c289 = _0x1c3c5c['find'](_0xd72c6e(0x266)), _0x5f517e = _0x573913(this)[_0xd72c6e(0x1e0)]('div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div')[_0xd72c6e(0x187)]();
                                _0x1594e5(_0x64c289, _0x5f517e, 'reel');
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x40a9fc(_0x2dc2e4, _0x156c21) {
            const _0xedb337 = _0x3747bf;
            try {
                _0x573913(_0xedb337(0xa5))['text'](_0x156c21 + _0xedb337(0x299) + _0x2dc2e4[_0xedb337(0x28c)][_0xedb337(0x36b)][0x0]['id']);
                const _0x35bf71 = _0xedb337(0xf4);
                _0x2dc2e4[_0xedb337(0x28c)][_0xedb337(0x36b)][0x0]['items']['forEach']((_0x4be416, _0x18eda1) => {
                    const _0x536b86 = _0xedb337;
                    let _0x1676b9 = new Date()[_0x536b86(0x2c6)](), _0x526f08 = Math[_0x536b86(0x2a3)](_0x1676b9 / 0x3e8), _0x2d7137 = _0x2dc2e4[_0x536b86(0x28c)][_0x536b86(0x36b)][0x0]?.['user']?.['username'] || _0x2dc2e4[_0x536b86(0x28c)][_0x536b86(0x36b)][0x0]?.[_0x536b86(0x2fa)]?.[_0x536b86(0x308)];
                    _0x17f2cd[_0x536b86(0x30c)] && (_0x526f08 = _0x4be416[_0x536b86(0x339)]), _0x4be416[_0x536b86(0x18e)][_0x536b86(0x306)](function (_0x7d0b1e, _0x31db1c) {
                        const _0x155bf8 = _0x536b86;
                        if (_0x7d0b1e[_0x155bf8(0x212)] < _0x31db1c[_0x155bf8(0x212)])
                            return 0x1;
                        if (_0x7d0b1e['config_width'] > _0x31db1c[_0x155bf8(0x212)])
                            return -0x1;
                        return 0x0;
                    }), _0x4be416['is_video'] ? _0x573913(_0x35bf71)[_0x536b86(0x25e)]('<a\x20media-id=\x22' + _0x4be416['id'] + _0x536b86(0x104) + _0x526f08 + _0x536b86(0xf2) + _0x156c21 + _0x536b86(0x240) + _0x2d7137 + _0x536b86(0x208) + _0x4be416['id'] + _0x536b86(0x1c2) + (_0x18eda1 + 0x1) + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x4be416[_0x536b86(0x1d0)][0x0][_0x536b86(0x214)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x4be416[_0x536b86(0x18e)][0x0][_0x536b86(0x214)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x5ecdf3(_0x536b86(0x2c1)) + _0x536b86(0x319) + _0x18eda1 + '\x20-</a>') : _0x573913(_0x35bf71)[_0x536b86(0x25e)]('<a\x20media-id=\x22' + _0x4be416['id'] + _0x536b86(0x104) + _0x526f08 + _0x536b86(0xf2) + _0x156c21 + _0x536b86(0x2d1) + _0x2d7137 + '\x22\x20data-path=\x22' + _0x4be416['id'] + _0x536b86(0x1c2) + (_0x18eda1 + 0x1) + _0x536b86(0x148) + _0x4be416['display_resources'][0x0][_0x536b86(0x214)] + _0x536b86(0x25b) + _0x4be416['display_resources'][0x0][_0x536b86(0x214)] + _0x536b86(0x320) + _0x5ecdf3(_0x536b86(0x192)) + '</span>\x20' + _0x18eda1 + _0x536b86(0x139));
                }), _0x573913(_0xedb337(0x2eb))['each'](function () {
                    const _0x316ea1 = _0xedb337;
                    _0x573913(this)[_0x316ea1(0x143)](_0x316ea1(0xaf)), _0x573913(this)[_0x316ea1(0x16d)](_0x316ea1(0x14b)), _0x573913(this)[_0x316ea1(0x175)](_0x316ea1(0xef) + _0x5ecdf3('NEW_TAB') + _0x316ea1(0x2f2) + _0x480abe[_0x316ea1(0x30e)] + _0x316ea1(0x36f)), _0x573913(this)[_0x316ea1(0x2d4)]('data-type') == _0x316ea1(0x271) && _0x573913(this)[_0x316ea1(0x175)](_0x316ea1(0x28b) + _0x5ecdf3(_0x316ea1(0x179)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x480abe[_0x316ea1(0x2f6)] + _0x316ea1(0x36f));
                }), _0x26f057(![]);
            } catch (_0x39ce55) {
                console[_0xedb337(0x144)](_0xedb337(0x25d), _0x39ce55);
            }
        }
        async function _0x3d1a0a() {
            const _0xc33779 = _0x3747bf;
            _0x26f057(!![]);
            let _0x5e1571 = new Date()['getTime'](), _0x1bee9c = Math[_0xc33779(0x2a3)](_0x5e1571 / 0x3e8), _0x375b97 = _0x573913(_0xc33779(0x127))['first']()[_0xc33779(0x11c)]() || location[_0xc33779(0x149)][_0xc33779(0x1e6)]('/')[_0xc33779(0x11a)](_0x309254 => _0x309254[_0xc33779(0x1bf)] > 0x0)['at'](0x1), _0x3284a2 = await _0x4e1727(_0x375b97), _0x33b080 = _0x3284a2[_0xc33779(0x135)]['pk'], _0x5db259 = await _0x379b4f(_0x33b080);
            if (_0x17f2cd[_0xc33779(0x17d)]) {
                let _0x4fe8dd = 0x0;
                _0x4ee5bc(_0x4fe8dd, _0x5db259[_0xc33779(0x28c)]['reels_media'][0x0]['items'][_0xc33779(0x1bf)]), _0x5db259[_0xc33779(0x28c)][_0xc33779(0x36b)][0x0][_0xc33779(0xda)][_0xc33779(0x166)]((_0x5b87a3, _0x292388) => {
                    setTimeout(() => {
                        const _0x3ca088 = a0_0x2f5d;
                        _0x17f2cd[_0x3ca088(0x30c)] && (_0x1bee9c = _0x5b87a3[_0x3ca088(0x339)]), _0x5b87a3['display_resources']['sort'](function (_0x44b9c0, _0x1a163a) {
                            const _0x2d6941 = _0x3ca088;
                            if (_0x44b9c0[_0x2d6941(0x212)] < _0x1a163a[_0x2d6941(0x212)])
                                return 0x1;
                            if (_0x44b9c0[_0x2d6941(0x212)] > _0x1a163a[_0x2d6941(0x212)])
                                return -0x1;
                            return 0x0;
                        }), _0x5b87a3[_0x3ca088(0xe8)] ? _0x11fe73(_0x5b87a3[_0x3ca088(0x1d0)][0x0]['src'], _0x375b97, _0x3ca088(0x1e2), _0x1bee9c, 'mp4', _0x5b87a3['id'])[_0x3ca088(0xe2)](() => {
                            const _0x29ba33 = _0x3ca088;
                            _0x4ee5bc(++_0x4fe8dd, _0x5db259[_0x29ba33(0x28c)][_0x29ba33(0x36b)][0x0][_0x29ba33(0xda)][_0x29ba33(0x1bf)]);
                        }) : _0x11fe73(_0x5b87a3[_0x3ca088(0x18e)][0x0]['src'], _0x375b97, _0x3ca088(0x1e2), _0x1bee9c, _0x3ca088(0x15d), _0x5b87a3['id'])[_0x3ca088(0xe2)](() => {
                            const _0x398098 = _0x3ca088;
                            _0x4ee5bc(++_0x4fe8dd, _0x5db259[_0x398098(0x28c)][_0x398098(0x36b)][0x0][_0x398098(0xda)]['length']);
                        });
                    }, 0x64 * _0x292388);
                });
            } else
                _0x4f5bc8(![], !![]), _0x40a9fc(_0x5db259, 'stories');
        }
        async function _0x3c21f9(_0x57b528, _0x5abd1b, _0x14622d) {
            const _0x45b4bd = _0x3747bf;
            var _0xef896e = _0x573913(_0x45b4bd(0x127))[_0x45b4bd(0x187)]()['text']() || location[_0x45b4bd(0x149)]['split']('/')[_0x45b4bd(0x11a)](_0x516da8 => _0x516da8[_0x45b4bd(0x1bf)] > 0x0)['at'](0x1);
            if (_0x57b528) {
                let _0x273ae0 = new Date()['getTime'](), _0x369bbe = Math['floor'](_0x273ae0 / 0x3e8);
                _0x26f057(!![]);
                if (_0x17f2cd[_0x45b4bd(0x352)] && !_0x2e3123['tempFetchRateLimit']) {
                    let _0x4e9fe6 = null, _0x8fee59 = await _0x4e1727(_0xef896e), _0x473629 = _0x8fee59[_0x45b4bd(0x135)]['pk'], _0x291e1f = await _0x379b4f(_0x473629), _0x379e9d = location[_0x45b4bd(0x149)]['split']('/')['filter'](_0xa7e95f => _0xa7e95f[_0x45b4bd(0x1bf)] > 0x0 && _0xa7e95f['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x291e1f[_0x45b4bd(0x28c)]['reels_media'][0x0][_0x45b4bd(0xda)][_0x45b4bd(0x166)](_0x13e87f => {
                        _0x13e87f['id'] == _0x379e9d && (_0x4e9fe6 = _0x13e87f['id']);
                    });
                    if (_0x4e9fe6 == null) {
                        let _0x1cb154 = _0x3a0f5b(_0xef896e);
                        _0x1cb154[_0x45b4bd(0xbd)](function (_0x5d19d8) {
                            const _0x4499ee = _0x45b4bd;
                            _0x573913(this)[_0x4499ee(0xcb)]()['length'] > 0x0 && (_0x4e9fe6 = _0x291e1f[_0x4499ee(0x28c)][_0x4499ee(0x36b)][0x0][_0x4499ee(0xda)][_0x5d19d8]['id']);
                        });
                    }
                    _0x4e9fe6 == null && (_0x573913(_0x45b4bd(0x1ba))['each'](function (_0x420654) {
                        const _0x39d8f8 = _0x45b4bd;
                        _0x573913(this)['hasClass'](_0x39d8f8(0x2f8)) && (_0x573913(this)[_0x39d8f8(0xcb)]()['length'] > 0x0 && (_0x4e9fe6 = _0x291e1f['data'][_0x39d8f8(0x36b)][0x0][_0x39d8f8(0xda)][_0x420654]['id']));
                    }), _0x573913('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x45b4bd(0xbd)](function (_0x15adc0) {
                        const _0x329d7b = _0x45b4bd;
                        _0x573913(this)[_0x329d7b(0xcb)]()['hasClass'](_0x329d7b(0x194)) && (_0x4e9fe6 = _0x291e1f[_0x329d7b(0x28c)][_0x329d7b(0x36b)][0x0][_0x329d7b(0xda)][_0x15adc0]['id']);
                    }));
                    _0x4e9fe6 == null && (_0x4e9fe6 = location['pathname'][_0x45b4bd(0x1e6)]('/')[_0x45b4bd(0x11a)](_0xbd0107 => _0xbd0107['length'] > 0x0 && _0xbd0107[_0x45b4bd(0xb6)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x182a30 = await _0x205707(_0x4e9fe6);
                    _0x17f2cd[_0x45b4bd(0x30c)] && (_0x369bbe = _0x182a30[_0x45b4bd(0xda)][0x0]['taken_at']);
                    _0x182a30[_0x45b4bd(0x136)] === 'ok' ? _0x182a30[_0x45b4bd(0xda)][0x0]['video_versions'] ? _0x14622d ? _0x1b86a7(_0x182a30[_0x45b4bd(0xda)][0x0][_0x45b4bd(0x172)][0x0][_0x45b4bd(0x150)]) : _0x11fe73(_0x182a30['items'][0x0][_0x45b4bd(0x172)][0x0][_0x45b4bd(0x150)], _0xef896e, _0x45b4bd(0x1e2), _0x369bbe, 'mp4', _0x4e9fe6) : _0x14622d ? _0x1b86a7(_0x182a30[_0x45b4bd(0xda)][0x0][_0x45b4bd(0x2a8)][_0x45b4bd(0xf3)][0x0][_0x45b4bd(0x150)]) : _0x11fe73(_0x182a30[_0x45b4bd(0xda)][0x0][_0x45b4bd(0x2a8)][_0x45b4bd(0xf3)][0x0][_0x45b4bd(0x150)], _0xef896e, 'stories', _0x369bbe, _0x45b4bd(0x15d), _0x4e9fe6) : (_0x17f2cd[_0x45b4bd(0x2ff)] ? (_0x2e3123[_0x45b4bd(0x2f9)] = !![], _0x3c21f9(_0x57b528, _0x5abd1b, _0x14622d)) : alert(_0x45b4bd(0x2f5) + _0x182a30['message']), _0x3ef70d(_0x182a30));
                    _0x26f057(![]);
                    return;
                }
                if (_0x573913(_0x45b4bd(0x13b))['length'] > 0x0) {
                    let _0x1d81fd = _0x45b4bd(0x271), _0x520cde = '', _0x16a0af = location[_0x45b4bd(0x149)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x48606e = null;
                    if (_0x2e3123['GL_dataCache']['stories'][_0xef896e] && !_0x5abd1b) {
                        _0x3ef70d(_0x45b4bd(0x111), _0xef896e), _0x2e3123[_0x45b4bd(0x345)][_0x45b4bd(0x1e2)][_0xef896e]['data'][_0x45b4bd(0x36b)][0x0][_0x45b4bd(0xda)][_0x45b4bd(0x166)](_0x216966 => {
                            const _0x2ba0a6 = _0x45b4bd;
                            _0x216966['id'] == _0x16a0af && (_0x520cde = _0x216966[_0x2ba0a6(0x1d0)][0x0][_0x2ba0a6(0x214)], _0x17f2cd[_0x2ba0a6(0x30c)] && (_0x369bbe = _0x216966[_0x2ba0a6(0x339)], _0x48606e = _0x216966['id']));
                        });
                        if (_0x520cde['length'] == 0x0) {
                            _0x3ef70d(_0x45b4bd(0x1d3), _0xef896e), _0x3c21f9(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x20023f = await _0x4e1727(_0xef896e), _0x52a9b9 = _0x20023f[_0x45b4bd(0x135)]['pk'], _0x39e586 = await _0x379b4f(_0x52a9b9);
                        _0x39e586[_0x45b4bd(0x28c)][_0x45b4bd(0x36b)][0x0][_0x45b4bd(0xda)][_0x45b4bd(0x166)](_0x1502bc => {
                            const _0xcda73f = _0x45b4bd;
                            _0x1502bc['id'] == _0x16a0af && (_0x520cde = _0x1502bc[_0xcda73f(0x1d0)][0x0]['src'], _0x17f2cd['RENAME_PUBLISH_DATE'] && (_0x369bbe = _0x1502bc['taken_at_timestamp'], _0x48606e = _0x1502bc['id']));
                        });
                        if (_0x520cde['length'] == 0x0) {
                            let _0x26fa17 = _0x3a0f5b(_0xef896e);
                            _0x26fa17[_0x45b4bd(0xbd)](function (_0x13be6a) {
                                const _0x503e64 = _0x45b4bd;
                                _0x573913(this)[_0x503e64(0xcb)]()[_0x503e64(0x1bf)] > 0x0 && (_0x520cde = _0x39e586[_0x503e64(0x28c)]['reels_media'][0x0][_0x503e64(0xda)][_0x13be6a][_0x503e64(0x1d0)][0x0][_0x503e64(0x214)], _0x17f2cd[_0x503e64(0x30c)] && (_0x369bbe = _0x39e586['data'][_0x503e64(0x36b)][0x0][_0x503e64(0xda)][_0x13be6a][_0x503e64(0x339)], _0x48606e = _0x39e586[_0x503e64(0x28c)][_0x503e64(0x36b)][0x0][_0x503e64(0xda)][_0x13be6a]['id']));
                            }), _0x520cde['length'] == 0x0 && (_0x573913(_0x45b4bd(0x1ba))['each'](function (_0x202e73) {
                                const _0x161327 = _0x45b4bd;
                                _0x573913(this)[_0x161327(0x364)](_0x161327(0x2f8)) && (_0x573913(this)['children']()[_0x161327(0x1bf)] > 0x0 && (_0x520cde = _0x39e586[_0x161327(0x28c)]['reels_media'][0x0][_0x161327(0xda)][_0x202e73]['video_resources'][0x0]['src'], _0x17f2cd[_0x161327(0x30c)] && (_0x369bbe = _0x39e586[_0x161327(0x28c)][_0x161327(0x36b)][0x0][_0x161327(0xda)][_0x202e73][_0x161327(0x339)], _0x48606e = _0x39e586[_0x161327(0x28c)][_0x161327(0x36b)][0x0]['items'][_0x202e73]['id'])));
                            }), _0x573913(_0x45b4bd(0xd6))['each'](function (_0xdd2b4b) {
                                const _0xacf467 = _0x45b4bd;
                                _0x573913(this)[_0xacf467(0xcb)]()[_0xacf467(0x364)](_0xacf467(0x194)) && (_0x520cde = _0x39e586[_0xacf467(0x28c)]['reels_media'][0x0][_0xacf467(0xda)][_0xdd2b4b]['video_resources'][0x0][_0xacf467(0x214)], _0x17f2cd[_0xacf467(0x30c)] && (_0x369bbe = _0x39e586[_0xacf467(0x28c)][_0xacf467(0x36b)][0x0][_0xacf467(0xda)][_0xdd2b4b][_0xacf467(0x339)], _0x48606e = _0x39e586[_0xacf467(0x28c)]['reels_media'][0x0][_0xacf467(0xda)][_0xdd2b4b]['id']));
                            }));
                        }
                        _0x2e3123[_0x45b4bd(0x345)][_0x45b4bd(0x1e2)][_0xef896e] = _0x39e586;
                    }
                    _0x520cde[_0x45b4bd(0x1bf)] == 0x0 ? alert(_0x5ecdf3(_0x45b4bd(0x314))) : _0x14622d ? _0x1b86a7(_0x520cde) : _0x11fe73(_0x520cde, _0xef896e, _0x45b4bd(0x1e2), _0x369bbe, _0x1d81fd, _0x48606e);
                } else {
                    let _0x5b54f1 = _0x573913('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0x45b4bd(0x2d4)](_0x45b4bd(0x252))?.[_0x45b4bd(0x1e6)](',')[0x0]?.['split']('\x20')[0x0], _0x4e7d5f = _0x5b54f1 ? _0x5b54f1 : _0x573913(_0x45b4bd(0xee))[_0x45b4bd(0x11a)](function () {
                            const _0x303413 = _0x45b4bd;
                            return _0x573913(this)['parents']('a')[_0x303413(0x1bf)] === 0x0 && _0x573913(this)[_0x303413(0x9d)]() === _0x573913(this)[_0x303413(0x1ed)]()[_0x303413(0x9d)]();
                        })[_0x45b4bd(0x2d4)](_0x45b4bd(0x214));
                    if (!_0x4e7d5f) {
                        let _0xb94a42 = _0x573913('body\x20>\x20div\x20section:visible\x20img._aa63');
                        _0x4e7d5f = _0xb94a42[_0x45b4bd(0x2d4)](_0x45b4bd(0x252)) ? _0xb94a42[_0x45b4bd(0x2d4)](_0x45b4bd(0x252))?.[_0x45b4bd(0x1e6)](',')[0x0]?.['split']('\x20')[0x0] : _0xb94a42[_0x45b4bd(0x2d4)]('src');
                    }
                    _0x17f2cd[_0x45b4bd(0x30c)] && (_0x369bbe = new Date(_0x573913(_0x45b4bd(0x300))[_0x45b4bd(0x187)]()[_0x45b4bd(0x2d4)](_0x45b4bd(0x2c7)))[_0x45b4bd(0x2c6)]());
                    let _0x34ec84 = _0x4e7d5f, _0x378711 = _0x45b4bd(0x15d);
                    _0x14622d ? _0x1b86a7(_0x34ec84) : _0x11fe73(_0x34ec84, _0xef896e, _0x45b4bd(0x1e2), _0x369bbe, _0x378711, _0x1f0994(_0x34ec84) ?? '');
                }
                _0x2e3123[_0x45b4bd(0x2f9)] = ![], _0x26f057(![]);
            } else {
                if (!_0x573913(_0x45b4bd(0x2e8))[_0x45b4bd(0x1bf)]) {
                    _0x2e3123[_0x45b4bd(0x345)][_0x45b4bd(0x1e2)] = {};
                    let _0x17383d = null;
                    _0x573913(_0x45b4bd(0x370))[_0x45b4bd(0x1bf)] > 0x0 ? _0x17383d = _0x573913(_0x45b4bd(0x2ed)) : (_0x17383d = _0x573913(_0x45b4bd(0x2de)), _0x17383d['css'](_0x45b4bd(0x162), _0x45b4bd(0x36c)));
                    _0x17383d[_0x45b4bd(0x1bf)] === 0x0 && (_0x17383d = _0x573913(_0x45b4bd(0x1da))[_0x45b4bd(0x1ed)]()[_0x45b4bd(0x1ed)]()[_0x45b4bd(0x1ed)]()[_0x45b4bd(0x1e0)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x17383d[_0x45b4bd(0x154)]('position', 'relative'));
                    _0x17383d['length'] === 0x0 && (_0x17383d = _0x573913(_0x45b4bd(0x1da))['parent']()['parent']()[_0x45b4bd(0x1ed)]()[_0x45b4bd(0x1e0)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x17383d['css'](_0x45b4bd(0x162), _0x45b4bd(0x36c)));
                    if (_0x17383d[_0x45b4bd(0x1bf)] === 0x0) {
                        let _0x117e0b = _0x573913(_0x45b4bd(0x2a5)), _0xea9784 = 0x0;
                        _0x117e0b[_0x45b4bd(0xbd)](function () {
                            const _0x512262 = _0x45b4bd;
                            _0x573913(this)[_0x512262(0x9d)]() > _0xea9784 && (_0xea9784 = _0x573913(this)[_0x512262(0x9d)](), _0x17383d = _0x573913(this)['children'](_0x512262(0x186))['first']());
                        });
                    }
                    if (_0x17383d != null) {
                        _0x17383d['first']()[_0x45b4bd(0x154)](_0x45b4bd(0x162), _0x45b4bd(0x36c)), _0x17383d['first']()['append'](_0x45b4bd(0x170) + _0x5ecdf3('DW') + '\x22\x20class=\x22IG_DWSTORY\x22>' + _0x480abe[_0x45b4bd(0x2e0)] + _0x45b4bd(0x36f)), _0x17383d[_0x45b4bd(0x187)]()[_0x45b4bd(0x25e)](_0x45b4bd(0xef) + _0x5ecdf3(_0x45b4bd(0x30e)) + _0x45b4bd(0x2ee) + _0x480abe['NEW_TAB'] + _0x45b4bd(0x36f));
                        let _0x14beec = _0x3a0f5b(_0xef896e);
                        _0x14beec['length'] > 0x1 && _0x17383d[_0x45b4bd(0x187)]()['append'](_0x45b4bd(0x309) + _0x5ecdf3('DW_ALL') + '\x22\x20class=\x22IG_DWSTORY_ALL\x22>' + _0x480abe[_0x45b4bd(0x1fb)] + _0x45b4bd(0x36f)), _0x17383d[_0x45b4bd(0x1e0)](_0x45b4bd(0x2ac))['each'](function () {
                            const _0x346494 = _0x45b4bd;
                            _0x573913(this)['on'](_0x346494(0x23c), function () {
                                const _0x218d31 = _0x346494;
                                !_0x573913(this)[_0x218d31(0x28c)](_0x218d31(0x277)) && (_0x17383d[_0x218d31(0x1e0)](_0x218d31(0x2e4))[_0x218d31(0x1bf)] === 0x0 ? (_0x573913(this)[_0x218d31(0x2d4)](_0x218d31(0x1bc), !![]), _0x573913(_0x218d31(0x2e4))[_0x218d31(0xd8)](), _0x3ef70d('(story)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x573913(this)[_0x218d31(0x2d4)]('data-remove-thumbnail', !![]), _0x3ef70d(_0x218d31(0x33d))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x30ebfa(_0x1d1342, _0x432d1c) {
            const _0x5bbe3e = _0x3747bf;
            if (_0x1d1342) {
                let _0x5a6d93 = new Date()[_0x5bbe3e(0x2c6)](), _0x20a0d6 = Math[_0x5bbe3e(0x2a3)](_0x5a6d93 / 0x3e8), _0x39e8ba = _0x5bbe3e(0x15d), _0x32d5a5 = _0x573913('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x5bbe3e(0x187)]()[_0x5bbe3e(0x11c)]() || location[_0x5bbe3e(0x149)][_0x5bbe3e(0x1e6)]('/')['at'](0x2), _0xd34cc7 = location['pathname'][_0x5bbe3e(0x13d)](/\/$/ig, '')[_0x5bbe3e(0x1e6)]('/')['at'](-0x1), _0x318b2e = '', _0xe12d6 = null;
                _0x26f057(!![]);
                if (_0x17f2cd[_0x5bbe3e(0x352)] && !_0x2e3123[_0x5bbe3e(0x2f9)]) {
                    let _0x6eae46 = await _0x4e1727(_0x32d5a5), _0x4afda3 = _0x6eae46[_0x5bbe3e(0x135)]['pk'], _0x108d4c = await _0x379b4f(_0x4afda3), _0x4456da = location['pathname'][_0x5bbe3e(0x1e6)]('/')['filter'](_0xa930f7 => _0xa930f7[_0x5bbe3e(0x1bf)] > 0x0 && _0xa930f7['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x108d4c[_0x5bbe3e(0x28c)][_0x5bbe3e(0x36b)][0x0][_0x5bbe3e(0xda)][_0x5bbe3e(0x166)](_0x462a48 => {
                        _0x462a48['id'] == _0x4456da && (_0xe12d6 = _0x462a48['id']);
                    });
                    if (_0xe12d6 == null) {
                        let _0x179e82 = _0x3a0f5b(_0x32d5a5);
                        _0x179e82[_0x5bbe3e(0xbd)](function (_0x2cd19b) {
                            const _0xadc091 = _0x5bbe3e;
                            _0x573913(this)['children']()[_0xadc091(0x1bf)] > 0x0 && (_0xe12d6 = _0x108d4c[_0xadc091(0x28c)][_0xadc091(0x36b)][0x0][_0xadc091(0xda)][_0x2cd19b]['id']);
                        });
                    }
                    _0xe12d6 == null && (_0x573913('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x5bbe3e(0xbd)](function (_0x1ed7b2) {
                        const _0x385ba7 = _0x5bbe3e;
                        _0x573913(this)['hasClass'](_0x385ba7(0x2f8)) && (_0x573913(this)[_0x385ba7(0xcb)]()[_0x385ba7(0x1bf)] > 0x0 && (_0xe12d6 = _0x108d4c[_0x385ba7(0x28c)][_0x385ba7(0x36b)][0x0][_0x385ba7(0xda)][_0x1ed7b2]['id']));
                    }), _0x573913('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x5bbe3e(0xbd)](function (_0x556b9c) {
                        const _0x48a460 = _0x5bbe3e;
                        _0x573913(this)[_0x48a460(0xcb)]()[_0x48a460(0x364)](_0x48a460(0x194)) && (_0xe12d6 = _0x108d4c[_0x48a460(0x28c)]['reels_media'][0x0]['items'][_0x556b9c]['id']);
                    }));
                    _0xe12d6 == null && (_0xe12d6 = location[_0x5bbe3e(0x149)][_0x5bbe3e(0x1e6)]('/')[_0x5bbe3e(0x11a)](_0x51e74c => _0x51e74c[_0x5bbe3e(0x1bf)] > 0x0 && _0x51e74c[_0x5bbe3e(0xb6)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x1c6ec6 = await _0x205707(_0xe12d6);
                    _0x17f2cd[_0x5bbe3e(0x30c)] && (_0x20a0d6 = _0x1c6ec6[_0x5bbe3e(0xda)][0x0][_0x5bbe3e(0x1a8)]);
                    _0x1c6ec6[_0x5bbe3e(0x136)] === 'ok' ? _0x11fe73(_0x1c6ec6[_0x5bbe3e(0xda)][0x0][_0x5bbe3e(0x2a8)]['candidates'][0x0]['url'], _0x32d5a5, _0x5bbe3e(0x1e2), _0x20a0d6, _0x5bbe3e(0x15d), _0xe12d6) : (_0x17f2cd[_0x5bbe3e(0x2ff)] ? (_0x2e3123[_0x5bbe3e(0x2f9)] = !![], _0x30ebfa(!![], _0x432d1c)) : alert(_0x5bbe3e(0x2f5) + _0x1c6ec6['message']), _0x3ef70d(_0x1c6ec6));
                    _0x26f057(![]);
                    return;
                }
                if (_0x2e3123[_0x5bbe3e(0x345)][_0x5bbe3e(0x1e2)][_0x32d5a5] && !_0x432d1c) {
                    _0x3ef70d(_0x5bbe3e(0x111), _0x32d5a5), _0x2e3123[_0x5bbe3e(0x345)][_0x5bbe3e(0x1e2)][_0x32d5a5]['data'][_0x5bbe3e(0x36b)][0x0]['items'][_0x5bbe3e(0x166)](_0x12e530 => {
                        const _0x5a2df7 = _0x5bbe3e;
                        _0x12e530['id'] == _0xd34cc7 && (_0x318b2e = _0x12e530[_0x5a2df7(0x122)], _0x17f2cd[_0x5a2df7(0x30c)] && (_0x20a0d6 = _0x12e530[_0x5a2df7(0x339)], _0xe12d6 = _0x12e530['id']));
                    });
                    if (_0x318b2e[_0x5bbe3e(0x1bf)] == 0x0) {
                        _0x3ef70d(_0x5bbe3e(0x1d3), _0x32d5a5), _0x30ebfa(!![], !![]);
                        return;
                    }
                } else {
                    let _0x22bdd3 = await _0x4e1727(_0x32d5a5), _0x1e8c26 = _0x22bdd3[_0x5bbe3e(0x135)]['pk'], _0x1fea09 = await _0x379b4f(_0x1e8c26);
                    _0x1fea09['data'][_0x5bbe3e(0x36b)][0x0][_0x5bbe3e(0xda)][_0x5bbe3e(0x166)](_0x2b0252 => {
                        const _0x15b126 = _0x5bbe3e;
                        _0x2b0252['id'] == _0xd34cc7 && (_0x318b2e = _0x2b0252[_0x15b126(0x122)], _0x17f2cd[_0x15b126(0x30c)] && (_0x20a0d6 = _0x2b0252[_0x15b126(0x339)], _0xe12d6 = _0x2b0252['id']));
                    });
                    if (_0x318b2e['length'] == 0x0) {
                        let _0x4beeda = _0x3a0f5b(_0x32d5a5);
                        _0x4beeda['each'](function (_0x29408f) {
                            const _0x5ce702 = _0x5bbe3e;
                            _0x573913(this)[_0x5ce702(0xcb)]()[_0x5ce702(0x1bf)] > 0x0 && (_0x318b2e = _0x1fea09[_0x5ce702(0x28c)][_0x5ce702(0x36b)][0x0][_0x5ce702(0xda)][_0x29408f][_0x5ce702(0x122)], _0x17f2cd[_0x5ce702(0x30c)] && (_0x20a0d6 = _0x1fea09[_0x5ce702(0x28c)]['reels_media'][0x0][_0x5ce702(0xda)][_0x29408f][_0x5ce702(0x339)], _0xe12d6 = _0x1fea09['data'][_0x5ce702(0x36b)][0x0][_0x5ce702(0xda)][_0x29408f]['id']));
                        }), _0x318b2e[_0x5bbe3e(0x1bf)] == 0x0 && (_0x573913(_0x5bbe3e(0x1ba))['each'](function (_0x1fe0b5) {
                            const _0xb5c3c3 = _0x5bbe3e;
                            _0x573913(this)[_0xb5c3c3(0x364)](_0xb5c3c3(0x2f8)) && (_0x573913(this)[_0xb5c3c3(0xcb)]()[_0xb5c3c3(0x1bf)] > 0x0 && (_0x318b2e = _0x1fea09[_0xb5c3c3(0x28c)][_0xb5c3c3(0x36b)][0x0][_0xb5c3c3(0xda)][_0x1fe0b5][_0xb5c3c3(0x122)], _0x17f2cd['RENAME_PUBLISH_DATE'] && (_0x20a0d6 = _0x1fea09[_0xb5c3c3(0x28c)][_0xb5c3c3(0x36b)][0x0][_0xb5c3c3(0xda)][_0x1fe0b5][_0xb5c3c3(0x339)], _0xe12d6 = _0x1fea09[_0xb5c3c3(0x28c)][_0xb5c3c3(0x36b)][0x0][_0xb5c3c3(0xda)][_0x1fe0b5]['id'])));
                        }), _0x573913('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x5bbe3e(0xbd)](function (_0x581352) {
                            const _0x4cf9a9 = _0x5bbe3e;
                            _0x573913(this)['children']()[_0x4cf9a9(0x364)](_0x4cf9a9(0x194)) && (_0x318b2e = _0x1fea09[_0x4cf9a9(0x28c)][_0x4cf9a9(0x36b)][0x0][_0x4cf9a9(0xda)][_0x581352][_0x4cf9a9(0x122)], _0x17f2cd['RENAME_PUBLISH_DATE'] && (_0x20a0d6 = _0x1fea09[_0x4cf9a9(0x28c)][_0x4cf9a9(0x36b)][0x0]['items'][_0x581352][_0x4cf9a9(0x339)], _0xe12d6 = _0x1fea09[_0x4cf9a9(0x28c)]['reels_media'][0x0][_0x4cf9a9(0xda)][_0x581352]['id']));
                        }));
                    }
                }
                _0x11fe73(_0x318b2e, _0x32d5a5, _0x5bbe3e(0x272), _0x20a0d6, _0x39e8ba, _0xe12d6), _0x2e3123[_0x5bbe3e(0x2f9)] = ![], _0x26f057(![]);
            } else {
                if (_0x573913('body\x20>\x20div\x20div.IG_DWSTORY')[_0x5bbe3e(0x1ed)]()[_0x5bbe3e(0x1e0)](_0x5bbe3e(0x317))[_0x5bbe3e(0x1bf)]) {
                    let _0x4f6a9e = null;
                    _0x573913(_0x5bbe3e(0x370))[_0x5bbe3e(0x1bf)] > 0x0 ? _0x4f6a9e = _0x573913(_0x5bbe3e(0x2ed)) : (_0x4f6a9e = _0x573913(_0x5bbe3e(0x2de)), _0x4f6a9e[_0x5bbe3e(0x154)](_0x5bbe3e(0x162), 'relative'));
                    _0x4f6a9e[_0x5bbe3e(0x1bf)] === 0x0 && (_0x4f6a9e = _0x573913('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')['parent']()[_0x5bbe3e(0x1ed)]()[_0x5bbe3e(0x1ed)]()[_0x5bbe3e(0x1e0)](_0x5bbe3e(0x205)), _0x4f6a9e['css']('position', 'relative'));
                    _0x4f6a9e[_0x5bbe3e(0x1bf)] === 0x0 && (_0x4f6a9e = _0x573913(_0x5bbe3e(0x1da))['parent']()[_0x5bbe3e(0x1ed)]()['parent']()[_0x5bbe3e(0x1e0)](_0x5bbe3e(0x355)), _0x4f6a9e[_0x5bbe3e(0x154)](_0x5bbe3e(0x162), 'relative'));
                    if (_0x4f6a9e['length'] === 0x0) {
                        let _0x2af04d = _0x573913(_0x5bbe3e(0x2a5)), _0x422a9f = 0x0;
                        _0x2af04d['each'](function () {
                            const _0xf97cd3 = _0x5bbe3e;
                            _0x573913(this)[_0xf97cd3(0x9d)]() > _0x422a9f && (_0x422a9f = _0x573913(this)[_0xf97cd3(0x9d)](), _0x4f6a9e = _0x573913(this)[_0xf97cd3(0xcb)](_0xf97cd3(0x186))[_0xf97cd3(0x187)]());
                        });
                    }
                    _0x4f6a9e != null && (_0x4f6a9e[_0x5bbe3e(0x187)]()['css'](_0x5bbe3e(0x162), _0x5bbe3e(0x36c)), _0x4f6a9e[_0x5bbe3e(0x187)]()[_0x5bbe3e(0x25e)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x5ecdf3(_0x5bbe3e(0x179)) + _0x5bbe3e(0x1b8) + _0x480abe[_0x5bbe3e(0x2f6)] + '</div>'));
                }
            }
        }
        function _0x2a6254(_0x535326) {
            return new Promise((_0x2a9a1b, _0x556e42) => {
                const _0x4cd476 = a0_0x2f5d;
                let _0x3ddc51 = 'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22' + _0x535326 + _0x4cd476(0x351);
                GM_xmlhttpRequest({
                    'method': _0x4cd476(0xd9),
                    'url': _0x3ddc51,
                    'onload': function (_0x152f10) {
                        const _0x5a4398 = _0x4cd476;
                        try {
                            let _0x478512 = JSON[_0x5a4398(0x164)](_0x152f10[_0x5a4398(0x22e)]);
                            _0x2a9a1b(_0x478512);
                        } catch (_0x19af98) {
                            _0x3ef70d(_0x5a4398(0x117), 'reject', _0x19af98['message']), _0x556e42(_0x19af98);
                        }
                    },
                    'onerror': function (_0x158388) {
                        const _0x38001f = _0x4cd476;
                        _0x3ef70d(_0x38001f(0x117), _0x38001f(0x378), _0x158388), _0x556e42(_0x158388);
                    }
                });
            });
        }
        function _0x379b4f(_0x381243) {
            return new Promise((_0x7ffae, _0x21362d) => {
                const _0x24b010 = a0_0x2f5d;
                let _0x19bb5c = 'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22' + _0x381243 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': _0x24b010(0xd9),
                    'url': _0x19bb5c,
                    'onload': function (_0x717ed9) {
                        const _0x2f5f16 = _0x24b010;
                        try {
                            let _0x291fe1 = JSON[_0x2f5f16(0x164)](_0x717ed9[_0x2f5f16(0x22e)]);
                            _0x3ef70d(_0x2f5f16(0x274), _0x291fe1), _0x7ffae(_0x291fe1);
                        } catch (_0x3b7a38) {
                            _0x3ef70d(_0x2f5f16(0x274), _0x2f5f16(0x378), _0x3b7a38[_0x2f5f16(0x1b4)]), _0x21362d(_0x3b7a38);
                        }
                    },
                    'onerror': function (_0x3c2f18) {
                        const _0x43865d = _0x24b010;
                        _0x3ef70d(_0x43865d(0x274), _0x43865d(0x378), _0x3c2f18), _0x21362d(_0x3c2f18);
                    }
                });
            });
        }
        function _0x4e1727(_0x4aedae) {
            return new Promise((_0x41989c, _0x3182c1) => {
                const _0x5c8a55 = a0_0x2f5d;
                let _0x3a46ee = _0x5c8a55(0x289) + _0x4aedae;
                GM_xmlhttpRequest({
                    'method': _0x5c8a55(0xd9),
                    'url': _0x3a46ee,
                    'onload': function (_0x4f2bae) {
                        const _0x25d612 = _0x5c8a55;
                        let _0x49c6f9 = JSON[_0x25d612(0x164)](_0x4f2bae['response']), _0x16f935 = null;
                        _0x49c6f9[_0x25d612(0x195)][_0x25d612(0x166)](_0x292eb6 => {
                            const _0x22b4bd = _0x25d612;
                            _0x292eb6[_0x22b4bd(0x135)]['username']?.[_0x22b4bd(0x1ce)]() === _0x4aedae?.[_0x22b4bd(0x1ce)]() && (_0x16f935 = _0x292eb6);
                        }), _0x16f935 != null ? (_0x3ef70d(_0x25d612(0xfb), _0x16f935), _0x41989c(_0x16f935)) : _0x12edfa(_0x4aedae)[_0x25d612(0xe2)](_0xd19c0e => {
                            _0x41989c(_0xd19c0e);
                        })[_0x25d612(0x35a)](_0x32a86d => {
                            alert('Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()');
                        });
                    },
                    'onerror': function (_0x42161e) {
                        const _0x175179 = _0x5c8a55;
                        _0x3ef70d('getUserId()', _0x175179(0x378), _0x42161e), _0x3182c1(_0x42161e);
                    }
                });
            });
        }
        function _0x12edfa(_0x4aecfd) {
            return new Promise((_0x359ef4, _0xe68cd8) => {
                const _0x23309 = a0_0x2f5d;
                let _0x4e5eaf = _0x23309(0x226) + _0x4aecfd;
                GM_xmlhttpRequest({
                    'method': _0x23309(0xd9),
                    'url': _0x4e5eaf,
                    'headers': { 'X-IG-App-ID': _0x553870() },
                    'onload': function (_0x2ec761) {
                        const _0x58ec4f = _0x23309;
                        try {
                            let _0x505ab3 = JSON[_0x58ec4f(0x164)](_0x2ec761['response']), _0x54d43f = _0x505ab3?.[_0x58ec4f(0x28c)]?.[_0x58ec4f(0x135)];
                            if (_0x54d43f != null) {
                                let _0x468ace = _0x505ab3?.[_0x58ec4f(0x28c)];
                                _0x468ace[_0x58ec4f(0x135)]['pk'] = _0x468ace[_0x58ec4f(0x135)]['id'], _0x3ef70d('getUserIdWithAgent()', _0x505ab3), _0x359ef4(_0x468ace);
                            } else
                                _0x3ef70d(_0x58ec4f(0x360), _0x58ec4f(0x378), _0x58ec4f(0x376)), _0xe68cd8(_0x58ec4f(0x376));
                        } catch (_0x47cb12) {
                            _0x3ef70d(_0x58ec4f(0x360), _0x58ec4f(0x378), _0x47cb12[_0x58ec4f(0x1b4)]), _0xe68cd8(_0x47cb12);
                        }
                    },
                    'onerror': function (_0x190dd6) {
                        const _0x1f65bd = _0x23309;
                        _0x3ef70d(_0x1f65bd(0x360), 'reject', _0x190dd6), _0xe68cd8(_0x190dd6);
                    }
                });
            });
        }
        function _0x10afd3(_0x64e6b7) {
            return new Promise((_0x5a6b4f, _0x1776ea) => {
                const _0x106d35 = a0_0x2f5d;
                let _0x310b71 = _0x106d35(0x21f) + _0x64e6b7 + '/info/';
                GM_xmlhttpRequest({
                    'method': _0x106d35(0xd9),
                    'url': _0x310b71,
                    'headers': { 'User-Agent': _0x106d35(0x2a0) },
                    'onload': function (_0x34b306) {
                        const _0x1b5e4c = _0x106d35;
                        try {
                            let _0x3a4d32 = JSON[_0x1b5e4c(0x164)](_0x34b306[_0x1b5e4c(0x22e)]);
                            _0x3a4d32['status'] !== 'ok' ? (_0x3ef70d(_0x1b5e4c(0x174), 'reject', _0x3a4d32), _0x1776ea(_0x1b5e4c(0x202))) : (_0x3ef70d('getUserHighSizeProfile()', _0x3a4d32), _0x5a6b4f(_0x3a4d32[_0x1b5e4c(0x135)]['hd_profile_pic_url_info']?.[_0x1b5e4c(0x150)]));
                        } catch (_0x1da6ec) {
                            _0x3ef70d('getUserHighSizeProfile()', 'reject', _0x1da6ec), _0x1776ea(_0x1da6ec);
                        }
                    },
                    'onerror': function (_0x41ae40) {
                        const _0xb84d98 = _0x106d35;
                        _0x3ef70d(_0xb84d98(0x174), _0xb84d98(0x378), _0x41ae40), _0x1776ea(_0x41ae40);
                    }
                });
            });
        }
        function _0x3e8587(_0xd50881) {
            return new Promise((_0x4f71f3, _0x2cd119) => {
                const _0xff2d3f = a0_0x2f5d;
                if (!_0xd50881)
                    _0x2cd119(_0xff2d3f(0x305));
                let _0x50469e = _0xd50881, _0x56f6a3 = _0xff2d3f(0x366) + _0x50469e + _0xff2d3f(0x31e);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x56f6a3,
                    'onload': function (_0x2e5ccc) {
                        const _0x3e2ccc = _0xff2d3f;
                        try {
                            let _0x4f078c = JSON[_0x3e2ccc(0x164)](_0x2e5ccc[_0x3e2ccc(0x22e)]);
                            _0x3ef70d(_0x3e2ccc(0x24e), _0x4f078c), _0x4f71f3(_0x4f078c[_0x3e2ccc(0x28c)]['shortcode_media'][_0x3e2ccc(0x2fa)][_0x3e2ccc(0x308)]);
                        } catch (_0x1052ee) {
                            _0x3ef70d(_0x3e2ccc(0x24e), _0x3e2ccc(0x378), _0x1052ee[_0x3e2ccc(0x1b4)]), _0x2cd119(_0x1052ee);
                        }
                    },
                    'onerror': function (_0x1141dd) {
                        const _0x130453 = _0xff2d3f;
                        _0x3ef70d('getPostOwner()', _0x130453(0x378), _0x1141dd), _0x2cd119(_0x1141dd);
                    }
                });
            });
        }
        function _0x553cd8(_0x5e35af) {
            return new Promise((_0x5c7a15, _0x5dba63) => {
                const _0x24f6f2 = a0_0x2f5d;
                if (!_0x5e35af)
                    _0x5dba63(_0x24f6f2(0x305));
                let _0x16c4b3 = _0x5e35af, _0x536167 = _0x24f6f2(0x366) + _0x16c4b3 + _0x24f6f2(0x31e);
                GM_xmlhttpRequest({
                    'method': _0x24f6f2(0xd9),
                    'url': _0x536167,
                    'headers': { 'User-Agent': _0x24f6f2(0x2a0) },
                    'onload': function (_0x34470b) {
                        const _0x2868a2 = _0x24f6f2;
                        try {
                            let _0x299b4b = JSON[_0x2868a2(0x164)](_0x34470b[_0x2868a2(0x22e)]);
                            _0x3ef70d(_0x299b4b), _0x299b4b[_0x2868a2(0x136)] === 'fail' ? (_0x3ef70d(_0x2868a2(0x14d), _0x2868a2(0xc2), _0x16c4b3), _0x1471bc(_0x16c4b3)['then'](_0x4d4ba3 => {
                                const _0x3d388b = _0x2868a2;
                                _0x5c7a15({
                                    'type': 'query_id',
                                    'data': _0x4d4ba3['xdt_api__v1__media__shortcode__web_info'][_0x3d388b(0xda)][0x0]
                                });
                            })['catch'](_0x8765a => {
                                _0x5dba63(_0x8765a);
                            })) : _0x5c7a15({
                                'type': _0x2868a2(0x1e3),
                                'data': _0x299b4b[_0x2868a2(0x28c)]
                            });
                        } catch (_0x508f06) {
                            _0x3ef70d(_0x2868a2(0x9f), _0x2868a2(0x378), _0x508f06[_0x2868a2(0x1b4)]), _0x5dba63(_0x508f06);
                        }
                    },
                    'onerror': function (_0x442ce1) {
                        const _0x489967 = _0x24f6f2;
                        _0x3ef70d(_0x489967(0x9f), _0x489967(0x378), _0x442ce1), _0x5dba63(_0x442ce1);
                    }
                });
            });
        }
        function _0x1471bc(_0x174c44) {
            return new Promise((_0x5c8be3, _0x317e1c) => {
                const _0x2c4791 = a0_0x2f5d;
                if (!_0x174c44)
                    _0x317e1c(_0x2c4791(0x305));
                let _0x43ae6f = _0x174c44, _0x4a476b = 'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22' + _0x43ae6f + _0x2c4791(0x359);
                GM_xmlhttpRequest({
                    'method': _0x2c4791(0xd9),
                    'url': _0x4a476b,
                    'headers': {
                        'User-Agent': _0x2c4791(0x2a0),
                        'X-IG-App-ID': _0x553870()
                    },
                    'onload': function (_0x275805) {
                        const _0x20b25b = _0x2c4791;
                        try {
                            let _0xd4ff05 = JSON[_0x20b25b(0x164)](_0x275805[_0x20b25b(0x22e)]);
                            _0x3ef70d(_0xd4ff05), _0xd4ff05['status'] === 'fail' ? (alert(_0x20b25b(0x112) + _0xd4ff05['message'] + ':\x20' + _0xd4ff05['feedback_message']), _0x3ef70d('Request\x20failed\x20with\x20API\x20response\x20' + _0xd4ff05['message'] + ':\x20' + _0xd4ff05['feedback_message']), _0x317e1c(_0x275805)) : (_0x3ef70d(_0x20b25b(0x278), _0xd4ff05[_0x20b25b(0x28c)]), _0x5c8be3(_0xd4ff05[_0x20b25b(0x28c)]));
                        } catch (_0x483fa0) {
                            _0x3ef70d(_0x20b25b(0x278), _0x20b25b(0x378), _0x483fa0[_0x20b25b(0x1b4)]), _0x317e1c(_0x483fa0);
                        }
                    },
                    'onerror': function (_0x59c3b1) {
                        const _0x71dd07 = _0x2c4791;
                        _0x3ef70d(_0x71dd07(0x278), _0x71dd07(0x378), _0x59c3b1), _0x317e1c(_0x59c3b1);
                    }
                });
            });
        }
        function _0x205707(_0x340dfd) {
            return new Promise((_0x3e525c, _0x56cf12) => {
                const _0x37cf75 = a0_0x2f5d;
                let _0x2e825d = _0x37cf75(0x169) + _0x340dfd + _0x37cf75(0x173);
                if (_0x340dfd == null) {
                    alert(_0x37cf75(0x1c3)), _0x3ef70d('getMediaInfo()', _0x37cf75(0x378), 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.'), _0x26f057(![]), _0x56cf12(-0x1);
                    return;
                }
                if (_0x553870() == null) {
                    alert(_0x37cf75(0x2a1)), _0x3ef70d('getMediaInfo()', _0x37cf75(0x378), _0x37cf75(0x2a1)), _0x26f057(![]), _0x56cf12(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x37cf75(0xd9),
                    'url': _0x2e825d,
                    'headers': {
                        'User-Agent': window[_0x37cf75(0x115)]['userAgent'],
                        'Accept': '*/*',
                        'X-IG-App-ID': _0x553870()
                    },
                    'onload': function (_0x36501d) {
                        const _0x763340 = _0x37cf75;
                        if (_0x36501d['finalUrl'] == _0x2e825d) {
                            let _0x1332e7 = JSON[_0x763340(0x164)](_0x36501d[_0x763340(0x22e)]);
                            _0x3ef70d('getMediaInfo()', _0x1332e7), _0x3e525c(_0x1332e7);
                        } else {
                            let _0x2d50d4 = new URL(_0x36501d[_0x763340(0x19d)]);
                            _0x2d50d4['pathname'][_0x763340(0x27b)](_0x763340(0x2cd)) ? (_0x3ef70d('getMediaInfo()', _0x763340(0x378), _0x763340(0x1cc)), alert(_0x763340(0x1cc))) : (_0x3ef70d(_0x763340(0x2e2), _0x763340(0x378), _0x763340(0x36d) + _0x36501d[_0x763340(0x19d)] + '\x22'), alert(_0x763340(0x36d) + _0x36501d['finalUrl'] + '\x22')), _0x26f057(![]), _0x56cf12(-0x1);
                        }
                    },
                    'onerror': function (_0x2f5f7b) {
                        const _0x28153c = _0x37cf75;
                        _0x3ef70d(_0x28153c(0x2e2), _0x28153c(0x378), _0x2f5f7b), _0x3e525c(_0x2f5f7b);
                    }
                });
            });
        }
        function _0x1f0994(_0x5a00e4) {
            const _0x5cbb02 = _0x3747bf;
            let _0x2b1042 = new URL(_0x5a00e4), _0x13aa82 = _0x2b1042?.[_0x5cbb02(0x32e)]?.['get'](_0x5cbb02(0x1b3))?.[_0x5cbb02(0x1e6)]('.')['at'](0x0);
            return _0x13aa82 ? atob(_0x13aa82) : null;
        }
        function _0x553870() {
            const _0x3ac21 = _0x3747bf;
            let _0x55501d = null;
            return _0x573913(_0x3ac21(0x361))['each'](function () {
                const _0xda5d9d = _0x3ac21, _0x30cedb = /"APP_ID":"([0-9]+)"/ig, _0x58510e = _0x573913(this)[_0xda5d9d(0x11c)]()[_0xda5d9d(0xb6)](_0x30cedb);
                _0x58510e != null && _0x55501d == null && (_0x55501d = [..._0x573913(this)[_0xda5d9d(0x11c)]()['matchAll'](_0x30cedb)]);
            }), _0x55501d ? _0x55501d['at'](0x0)['at'](-0x1) : null;
        }
        function _0x26f057(_0xce371d) {
            const _0x3932b7 = _0x3747bf;
            _0xce371d ? (_0x573913(_0x3932b7(0x9b))[_0x3932b7(0x256)](_0x3932b7(0x201)), _0x573913(_0x3932b7(0x9b))[_0x3932b7(0x154)](_0x3932b7(0x230), _0x3932b7(0x20c))) : (_0x573913('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')['addClass']('x1s85apg'), _0x573913(_0x3932b7(0x9b))[_0x3932b7(0x154)](_0x3932b7(0x230), ''));
        }
        function _0x3a0f5b(_0x33c381) {
            const _0x17f325 = _0x3747bf;
            let _0x3f6254 = _0x573913(_0x17f325(0xb3) + _0x33c381 + '\x22]\x20span')[_0x17f325(0x11a)](function () {
                const _0x4cf2ac = _0x17f325;
                return _0x573913(this)[_0x4cf2ac(0xcb)]()[_0x4cf2ac(0x1bf)] === 0x0 && _0x573913(this)[_0x4cf2ac(0x1e0)](_0x4cf2ac(0x10a))[_0x4cf2ac(0x1bf)] === 0x0 && _0x573913(this)[_0x4cf2ac(0x11c)]()?.[_0x4cf2ac(0x1ce)]() === _0x33c381?.[_0x4cf2ac(0x1ce)]();
            })[_0x17f325(0x2bf)]('div:not([class]):not([style])')[_0x17f325(0x11a)](function () {
                const _0x5c9c69 = _0x17f325;
                return _0x573913(this)[_0x5c9c69(0x11c)]()?.[_0x5c9c69(0x1ce)]() !== _0x33c381?.[_0x5c9c69(0x1ce)]();
            })[_0x17f325(0x11a)](function () {
                const _0x556982 = _0x17f325;
                return _0x573913(this)[_0x556982(0xcb)]()[_0x556982(0x1bf)] > 0x1;
            })[_0x17f325(0x187)]();
            return _0x3f6254[_0x17f325(0x1bf)] === 0x0 && (_0x3f6254 = _0x573913('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x33c381 + '\x22]')[_0x17f325(0x11a)](function () {
                const _0x29e1cb = _0x17f325;
                return _0x573913(this)[_0x29e1cb(0x1e0)](_0x29e1cb(0xe4))['length'] > 0x0;
            })[_0x17f325(0x2bf)]('div:not([class]):not([style])')[_0x17f325(0x11a)](function () {
                const _0x5a2807 = _0x17f325;
                return _0x573913(this)[_0x5a2807(0x11c)]()?.[_0x5a2807(0x1ce)]() !== _0x33c381?.[_0x5a2807(0x1ce)]();
            })[_0x17f325(0x11a)](function () {
                const _0x4579fc = _0x17f325;
                return _0x573913(this)[_0x4579fc(0xcb)]()[_0x4579fc(0x1bf)] > 0x1;
            })[_0x17f325(0x187)]()), _0x3f6254[_0x17f325(0xcb)]()['filter'](function () {
                return _0x573913(this)['height']() < 0xa;
            })[_0x17f325(0x187)]()[_0x17f325(0xcb)]();
        }
        function _0x4ee5bc(_0x2ba766, _0x529eda) {
            const _0x95d080 = _0x3747bf;
            _0x573913(_0x95d080(0x183))['length'] ? (_0x573913(_0x95d080(0xf9))[_0x95d080(0x11c)](_0x2ba766 + '/' + _0x529eda), _0x2ba766 >= _0x529eda && _0x573913('.circle_wrapper')[_0x95d080(0x2ab)](0xfa, function () {
                const _0x344d21 = _0x95d080;
                _0x573913(this)[_0x344d21(0xd8)]();
            })) : _0x573913(_0x95d080(0x290))[_0x95d080(0x25e)](_0x95d080(0x32f) + _0x2ba766 + '/' + _0x529eda + '</span></div>');
        }
        function _0x4f5bc8(_0x3d9a85, _0x1af426) {
            const _0x402047 = _0x3747bf;
            let _0x3e95a6 = _0x3d9a85 ? _0x402047(0x26f) : '';
            _0x573913(_0x402047(0x290))[_0x402047(0x25e)](_0x402047(0x371) + _0x3e95a6 + '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>'), _0x573913(_0x402047(0x34f))[_0x402047(0x25e)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x5ecdf3('CLOSE') + '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v' + GM_info['script']['version'] + _0x402047(0x155) + _0x480abe['CLOSE'] + _0x402047(0x247)), _0x1af426 && (_0x573913(_0x402047(0x34f))[_0x402047(0x25e)](_0x402047(0x1c7)), _0x573913(_0x402047(0xd0))[_0x402047(0x25e)](_0x402047(0x1c5) + _0x5ecdf3('BATCH_DOWNLOAD_SELECTED') + _0x402047(0x28d)), _0x573913('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group')[_0x402047(0x25e)](_0x402047(0x118) + _0x5ecdf3('BATCH_DOWNLOAD_DIRECT') + _0x402047(0x28d)), _0x573913(_0x402047(0x34f))[_0x402047(0x25e)](_0x402047(0x145) + _0x5ecdf3(_0x402047(0x2f1)) + _0x402047(0x219)));
        }
        function _0x84ab14(_0xf3d72) {
            const _0x58d244 = _0x3747bf;
            _0x573913(_0x58d244(0xaa))[_0x58d244(0x1bf)] && (_0xf3d72 ? _0x573913(_0x58d244(0xaa))['addClass'](_0x58d244(0x26f)) : _0x573913(_0x58d244(0xaa))[_0x58d244(0x256)](_0x58d244(0x26f)));
        }
        function _0x11fe73(_0x2f5212, _0x3f33fd, _0x573e4d, _0x4d97ab, _0x262aaa, _0x1547c6) {
            return new Promise(_0x1599c6 => {
                setTimeout(() => {
                    const _0x37f685 = a0_0x2f5d;
                    _0x26f057(!![]), fetch(_0x2f5212)[_0x37f685(0xe2)](_0x36bd3a => {
                        const _0x8ba04 = _0x37f685;
                        return _0x36bd3a[_0x8ba04(0x161)]()[_0x8ba04(0xe2)](_0x1d8f39 => {
                            _0x26f057(![]), _0x4a7aef(_0x2f5212, _0x1d8f39, _0x3f33fd, _0x573e4d, _0x4d97ab, _0x262aaa, _0x1547c6), _0x1599c6(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x46718f(_0x30af1d, _0x543d7a) {
            const _0x59aec4 = _0x3747bf, _0x4d909f = document['createElement']('a');
            _0x4d909f[_0x59aec4(0x1a6)] = URL['createObjectURL'](_0x30af1d), _0x4d909f[_0x59aec4(0x100)] = _0x543d7a, _0x4d909f[_0x59aec4(0x238)](), _0x4d909f[_0x59aec4(0xd8)]();
        }
        function _0x4a7aef(_0x4e22df, _0xa947b9, _0x4790c4, _0x3727be, _0x75249b, _0x395387, _0x53923f) {
            const _0x41ebd8 = _0x3747bf;
            _0x75249b = parseInt(_0x75249b[_0x41ebd8(0x26e)]()[_0x41ebd8(0x372)](0xd, '0'));
            _0x17f2cd['RENAME_PUBLISH_DATE'] && (_0x75249b = parseInt(_0x75249b[_0x41ebd8(0x26e)]()['padEnd'](0xd, '0')));
            const _0xd819ab = new Date(_0x75249b), _0x352598 = new URL(_0x4e22df)[_0x41ebd8(0x149)][_0x41ebd8(0x1e6)]('/')['at'](-0x1)['split']('.')[_0x41ebd8(0x1b6)](0x0, -0x1)[_0x41ebd8(0x199)]('.'), _0x274b3a = _0xd819ab[_0x41ebd8(0x26a)]()[_0x41ebd8(0x26e)](), _0x2333ca = (_0xd819ab[_0x41ebd8(0x33a)]() + 0x1)[_0x41ebd8(0x26e)]()[_0x41ebd8(0x1b1)](0x2, '0'), _0x341a41 = _0xd819ab[_0x41ebd8(0x316)]()[_0x41ebd8(0x26e)]()[_0x41ebd8(0x1b1)](0x2, '0'), _0x586859 = _0xd819ab[_0x41ebd8(0xf0)]()[_0x41ebd8(0x26e)]()[_0x41ebd8(0x1b1)](0x2, '0'), _0x3b5722 = _0xd819ab['getMinutes']()[_0x41ebd8(0x26e)]()[_0x41ebd8(0x1b1)](0x2, '0'), _0x501c23 = _0xd819ab[_0x41ebd8(0x2ce)]()[_0x41ebd8(0x26e)]()[_0x41ebd8(0x1b1)](0x2, '0');
            var _0x375ce9 = _0x2e3123[_0x41ebd8(0x296)][_0x41ebd8(0xcd)](), _0x50ba0c = _0x53923f ?? '', _0x4a5d81 = {
                    '%USERNAME%': _0x4790c4,
                    '%SOURCE_TYPE%': _0x3727be,
                    '%SHORTCODE%': _0x50ba0c,
                    '%YEAR%': _0x274b3a,
                    '%2-YEAR%': _0x274b3a['substr'](-0x2),
                    '%MONTH%': _0x2333ca,
                    '%DAY%': _0x341a41,
                    '%HOUR%': _0x586859,
                    '%MINUTE%': _0x3b5722,
                    '%SECOND%': _0x501c23,
                    '%ORIGINAL_NAME%': _0x352598,
                    '%ORIGINAL_NAME_FIRST%': _0x352598[_0x41ebd8(0x1e6)]('_')['at'](0x0)
                };
            _0x375ce9 = _0x375ce9[_0x41ebd8(0x13d)](/%[\w\-]+%/g, function (_0x49e361) {
                return _0x4a5d81[_0x49e361] || _0x49e361;
            });
            const _0x520376 = _0x4790c4 + '_' + _0x352598 + '.' + _0x395387, _0x5416a5 = _0x17f2cd[_0x41ebd8(0x114)] ? _0x375ce9 + '.' + _0x395387 : _0x520376;
            _0x17f2cd[_0x41ebd8(0x31f)] && _0x395387 === _0x41ebd8(0x15d) && _0x53923f && _0x3727be === _0x41ebd8(0x14c) && (_0xa947b9[_0x41ebd8(0x1d9)] === 'image/jpeg' || _0xa947b9[_0x41ebd8(0x1d9)] === _0x41ebd8(0xb4)) ? _0x68a397(_0xa947b9, _0x53923f)[_0x41ebd8(0xe2)](_0x1b977e => _0x46718f(_0x1b977e, _0x5416a5))[_0x41ebd8(0x35a)](_0x52c373 => {
                const _0x658c6b = _0x41ebd8;
                console[_0x658c6b(0x144)]('Failed\x20to\x20strip\x20EXIF\x20and/or\x20attach\x20post\x20URL\x20to\x20EXIF.', _0x52c373), _0x46718f(_0xa947b9, _0x5416a5);
            }) : _0x46718f(_0xa947b9, _0x5416a5);
        }
        async function _0x68a397(_0x1957e8, _0x2b8db2) {
            const _0x1c1d16 = _0x3747bf, _0x12d90a = (..._0x2a87d7) => {
                    const _0x1f818a = a0_0x2f5d, _0x690524 = _0x2a87d7['reduce']((_0x552b03, _0x3b438e) => _0x552b03 + _0x3b438e['length'], 0x0), _0xf7aa6b = new Uint8Array(_0x690524);
                    let _0x222ae5 = 0x0;
                    for (const _0x4243d2 of _0x2a87d7) {
                        _0xf7aa6b[_0x1f818a(0x297)](_0x4243d2, _0x222ae5), _0x222ae5 += _0x4243d2['length'];
                    }
                    return _0xf7aa6b;
                }, _0xd6f93b = _0x558246 => {
                    const _0x41ebed = a0_0x2f5d, _0x1ec14d = new Uint8Array(0x4);
                    return new DataView(_0x1ec14d[_0x41ebed(0x362)])[_0x41ebed(0x2a2)](0x0, _0x558246, !![]), _0x1ec14d;
                }, _0x4814f2 = _0x3e67fc => new TextEncoder()[_0x1c1d16(0x1e4)](_0x3e67fc), _0x18cb08 = (_0x12c166, _0x54d15c) => String[_0x1c1d16(0x28e)](_0x12c166[_0x1c1d16(0x185)](_0x54d15c), _0x12c166[_0x1c1d16(0x185)](_0x54d15c + 0x1), _0x12c166[_0x1c1d16(0x185)](_0x54d15c + 0x2), _0x12c166[_0x1c1d16(0x185)](_0x54d15c + 0x3)), _0x10d999 = new Uint8Array(await _0x1957e8['slice'](0x0, 0xc)[_0x1c1d16(0x203)]()), _0x3a04a0 = _0x10d999[0x0] === 0xff && _0x10d999[0x1] === 0xd8, _0x47cfb0 = _0x10d999[_0x1c1d16(0x1bf)] >= 0xc && String[_0x1c1d16(0x28e)](..._0x10d999[_0x1c1d16(0x233)](0x0, 0x4)) === _0x1c1d16(0x165) && String[_0x1c1d16(0x28e)](..._0x10d999[_0x1c1d16(0x233)](0x8, 0xc)) === _0x1c1d16(0x369);
            if (!_0x3a04a0 && !_0x47cfb0)
                throw new Error(_0x1c1d16(0x2fc));
            const _0x2f843b = _0x4814f2('https://www.instagram.com/p/' + _0x2b8db2 + '/\x00'), _0x345818 = _0x4814f2(_0x1c1d16(0x343)), _0x2935b5 = Uint8Array['from']([
                    0x49,
                    0x49,
                    0x2a,
                    0x0,
                    0x8,
                    0x0,
                    0x0,
                    0x0
                ]), _0x842732 = Uint8Array[_0x1c1d16(0x1be)]([
                    0x1,
                    0x0
                ]), _0x23c32b = _0x12d90a(Uint8Array['from']([
                    0xe,
                    0x1,
                    0x2,
                    0x0
                ]), _0xd6f93b(_0x2f843b[_0x1c1d16(0x1bf)]), _0xd6f93b(0x8 + 0x2 + 0xc + 0x4)), _0x22e0d8 = _0x12d90a(_0x2935b5, _0x842732, _0x23c32b, _0xd6f93b(0x0), _0x2f843b);
            if (_0x3a04a0) {
                const _0x442af8 = await _0x1957e8[_0x1c1d16(0x203)](), _0x57fdc8 = new DataView(_0x442af8), _0x5acfde = _0x12d90a(_0x345818, _0x22e0d8), _0x20830a = new Uint8Array(0x4);
                new DataView(_0x20830a['buffer'])[_0x1c1d16(0x2a6)](0x0, 0xffe1), new DataView(_0x20830a[_0x1c1d16(0x362)])[_0x1c1d16(0x2a6)](0x2, _0x5acfde[_0x1c1d16(0x1bf)] + 0x2);
                const _0x2db7ce = _0x12d90a(_0x20830a, _0x5acfde), _0x1b0d73 = [new Uint8Array(_0x442af8, 0x0, 0x2)];
                let _0x52df66 = 0x2, _0x48cadb = ![];
                while (_0x52df66 < _0x57fdc8[_0x1c1d16(0xfd)]) {
                    const _0x2efef2 = _0x57fdc8[_0x1c1d16(0x265)](_0x52df66);
                    if ((_0x2efef2 & 0xff00) !== 0xff00)
                        break;
                    if (_0x2efef2 === 0xffda) {
                        if (!_0x48cadb)
                            _0x1b0d73['push'](_0x2db7ce);
                        _0x1b0d73['push'](new Uint8Array(_0x442af8, _0x52df66));
                        break;
                    }
                    const _0x366edc = _0x57fdc8[_0x1c1d16(0x265)](_0x52df66 + 0x2) + 0x2;
                    if (_0x2efef2 === 0xffe1) {
                        _0x52df66 += _0x366edc;
                        continue;
                    }
                    _0x1b0d73[_0x1c1d16(0x2b0)](new Uint8Array(_0x442af8, _0x52df66, _0x366edc)), _0x52df66 += _0x366edc;
                }
                const _0x1f27e4 = _0x1b0d73['reduce']((_0x423b87, _0x2a8fb5) => _0x423b87 + _0x2a8fb5[_0x1c1d16(0x1bf)], 0x0), _0x38b0a2 = new Uint8Array(_0x1f27e4);
                let _0x5d4b7d = 0x0;
                return _0x1b0d73[_0x1c1d16(0x166)](_0x3a554d => {
                    _0x38b0a2['set'](_0x3a554d, _0x5d4b7d), _0x5d4b7d += _0x3a554d['length'];
                }), new Blob([_0x38b0a2], { 'type': 'image/jpeg' });
            }
            const _0x341832 = await _0x1957e8['arrayBuffer'](), _0x44a0d0 = new DataView(_0x341832), _0x5092bc = [];
            let _0x45053e = -0x1, _0xae8805 = 0xc;
            while (_0xae8805 < _0x44a0d0[_0x1c1d16(0xfd)]) {
                const _0x31806f = _0x18cb08(_0x44a0d0, _0xae8805), _0x5890a8 = _0x44a0d0[_0x1c1d16(0x2ec)](_0xae8805 + 0x4, !![]), _0x38af59 = _0x5890a8 & 0x1, _0x5cecd1 = 0x8 + _0x5890a8 + _0x38af59;
                if (_0x31806f !== _0x1c1d16(0x318) && _0x31806f !== 'XMP\x20') {
                    _0x5092bc[_0x1c1d16(0x2b0)](new Uint8Array(_0x341832, _0xae8805, _0x5cecd1));
                    if (_0x31806f === _0x1c1d16(0xe3))
                        _0x45053e = _0x5092bc[_0x1c1d16(0x1bf)] - 0x1;
                }
                _0xae8805 += _0x5cecd1;
            }
            let _0x5c5872 = _0x12d90a(_0x4814f2('EXIF'), _0xd6f93b(_0x345818['length'] + _0x22e0d8[_0x1c1d16(0x1bf)]), _0x345818, _0x22e0d8);
            if (_0x5c5872[_0x1c1d16(0x1bf)] & 0x1)
                _0x5c5872 = _0x12d90a(_0x5c5872, Uint8Array['of'](0x0));
            if (_0x45053e !== -0x1) {
                const _0xb196 = new Uint8Array(_0x5092bc[_0x45053e]);
                _0xb196[0x8] |= 0x10, _0x5092bc[_0x45053e] = _0xb196, _0x5092bc[_0x1c1d16(0x190)](_0x45053e + 0x1, 0x0, _0x5c5872);
            } else
                _0x5092bc[_0x1c1d16(0x2b0)](_0x5c5872);
            const _0x4e0d53 = _0x5092bc[_0x1c1d16(0x17a)]((_0x3a11b8, _0x133129) => _0x3a11b8 + _0x133129[_0x1c1d16(0x1bf)], 0x0), _0x1aea38 = _0x12d90a(_0x4814f2('RIFF'), _0xd6f93b(_0x4e0d53 + 0x4), _0x4814f2(_0x1c1d16(0x369))), _0x3cca4f = _0x12d90a(_0x1aea38, ..._0x5092bc);
            return new Blob([_0x3cca4f], { 'type': _0x1c1d16(0xb4) });
        }
        async function _0x148b1f(_0x6f74a2, _0x54a3f5) {
            const _0x493303 = _0x3747bf;
            let _0x30e382 = new Date()[_0x493303(0x2c6)](), _0x57b2b4 = Math[_0x493303(0x2a3)](_0x30e382 / 0x3e8), _0x48959b = _0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x9c)) ? _0x573913(_0x6f74a2)[_0x493303(0x2d4)]('data-username') : _0x2e3123[_0x493303(0x286)];
            !_0x48959b && _0x573913(_0x6f74a2)[_0x493303(0x2d4)]('data-path') && (_0x3ef70d(_0x493303(0x1ee), _0x573913(_0x6f74a2)['attr'](_0x493303(0x27e))), _0x48959b = await _0x3e8587(_0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x176)))['catch'](_0x192b6d => {
                _0x3ef70d('get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:', _0x192b6d['message']);
            }), _0x48959b == null && (_0x48959b = _0x493303(0x365)));
            _0x17f2cd[_0x493303(0x30c)] && _0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x2c7)) && (_0x57b2b4 = parseInt(_0x573913(_0x6f74a2)['attr'](_0x493303(0x2c7))));
            if (_0x17f2cd['FORCE_RESOURCE_VIA_MEDIA']) {
                _0x26f057(!![]);
                let _0xe8d73c = await _0x205707(_0x573913(_0x6f74a2)['attr'](_0x493303(0x273)));
                _0x26f057(![]);
                if (_0xe8d73c['status'] === 'ok') {
                    var _0x512d5c = null;
                    if (_0xe8d73c[_0x493303(0xda)][0x0][_0x493303(0x172)])
                        _0x512d5c = _0xe8d73c['items'][0x0][_0x493303(0x172)][0x0]['url'];
                    else {
                        _0xe8d73c['items'][0x0]['image_versions2']['candidates']['sort'](function (_0x355d55, _0x5a7e75) {
                            const _0x1a1c65 = _0x493303;
                            let _0x234741 = new URL(_0x355d55[_0x1a1c65(0x150)])[_0x1a1c65(0x32e)][_0x1a1c65(0x1cf)]('stp'), _0x332ebf = new URL(_0x5a7e75['url'])[_0x1a1c65(0x32e)]['get'](_0x1a1c65(0x113));
                            if (_0x234741 && _0x332ebf) {
                                if (_0x234741[_0x1a1c65(0x1bf)] > _0x332ebf[_0x1a1c65(0x1bf)])
                                    return 0x1;
                                if (_0x234741[_0x1a1c65(0x1bf)] < _0x332ebf[_0x1a1c65(0x1bf)])
                                    return -0x1;
                            } else {
                                if (_0x355d55[_0x1a1c65(0x9d)] < _0x5a7e75['width'])
                                    return 0x1;
                                if (_0x355d55['width'] > _0x5a7e75[_0x1a1c65(0x9d)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x512d5c = _0xe8d73c[_0x493303(0xda)][0x0][_0x493303(0x2a8)][_0x493303(0xf3)][0x0][_0x493303(0x150)];
                        const _0x48c5e5 = function (_0x19cb27) {
                                const _0xbd5c10 = _0x493303;
                                if (_0x19cb27[_0xbd5c10(0x9d)] != null)
                                    return _0x19cb27[_0xbd5c10(0x9d)];
                                const _0x5918cd = new URL(_0x19cb27[_0xbd5c10(0x150)]), _0xcc046b = _0x5918cd[_0xbd5c10(0x32e)]['get'](_0xbd5c10(0x113));
                                return _0xcc046b != null ? parseInt(_0xcc046b[_0xbd5c10(0xb6)](/_p([0-9]+)x([0-9]+)_/i)?.['at'](0x1) || -0x1) : 0x0;
                            }, _0x4518c1 = _0x48c5e5(_0xe8d73c[_0x493303(0xda)][0x0]['image_versions2'][_0x493303(0xf3)][0x0]);
                        if (_0xe8d73c[_0x493303(0xda)][0x0][_0x493303(0x32d)] !== _0x4518c1 && _0x4518c1 !== -0x1) {
                        }
                    }
                    if (_0x54a3f5) {
                        let _0x320c8e = new URL(_0x512d5c);
                        _0x320c8e[_0x493303(0x9e)] = 'scontent.cdninstagram.com', _0x1b86a7(_0x320c8e[_0x493303(0x1a6)]);
                    } else
                        _0x11fe73(_0x512d5c, _0x48959b, _0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x2b1)), _0x57b2b4, _0x573913(_0x6f74a2)['attr']('data-type'), _0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x176)));
                } else {
                    if (_0x17f2cd['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT']) {
                        if (_0x54a3f5) {
                            let _0x39b074 = new URL(_0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x27e)));
                            _0x39b074[_0x493303(0x9e)] = _0x493303(0x313), _0x1b86a7(_0x39b074[_0x493303(0x1a6)]);
                        } else
                            _0x11fe73(_0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x27e)), _0x48959b, _0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x2b1)), _0x57b2b4, _0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x1c1)), _0x573913(_0x6f74a2)['attr'](_0x493303(0x176)));
                    } else
                        alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0xe8d73c[_0x493303(0x1b4)]);
                    _0x3ef70d(_0xe8d73c);
                }
            } else
                _0x11fe73(_0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x27e)), _0x48959b, _0x573913(_0x6f74a2)['attr'](_0x493303(0x2b1)), _0x57b2b4, _0x573913(_0x6f74a2)[_0x493303(0x2d4)]('data-type'), _0x573913(_0x6f74a2)[_0x493303(0x2d4)](_0x493303(0x176)));
        }
        function _0x48bd85() {
            const _0x300643 = _0x3747bf;
            for (let _0x4bfb3f of _0x2e3123[_0x300643(0x152)]) {
                _0x3ef70d('GM_unregisterMenuCommand', _0x4bfb3f), GM_unregisterMenuCommand(_0x4bfb3f);
            }
            _0x2e3123[_0x300643(0x152)][_0x300643(0x2b0)](GM_registerMenuCommand(_0x5ecdf3(_0x300643(0x2d9)), () => {
                _0x5ab087();
            }, { 'accessKey': 'w' })), _0x2e3123[_0x300643(0x152)]['push'](GM_registerMenuCommand(_0x5ecdf3(_0x300643(0x1ab)), () => {
                const _0x8b1a27 = _0x300643;
                GM_openInTab(_0x8b1a27(0x35b), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x2e3123[_0x300643(0x152)]['push'](GM_registerMenuCommand(_0x5ecdf3(_0x300643(0xb9)), () => {
                _0x2e7530();
            }, { 'accessKey': 'z' })), _0x2e3123[_0x300643(0x152)][_0x300643(0x2b0)](GM_registerMenuCommand(_0x5ecdf3(_0x300643(0x232)), () => {
                _0x131ced();
            }, { 'accessKey': 'f' })), _0x2e3123[_0x300643(0x152)][_0x300643(0x2b0)](GM_registerMenuCommand(_0x5ecdf3(_0x300643(0x25f)), () => {
                _0x3cd55d();
            }, { 'accessKey': 'c' })), _0x2e3123[_0x300643(0x152)][_0x300643(0x2b0)](GM_registerMenuCommand(_0x5ecdf3(_0x300643(0x2fe)), () => {
                _0x31e622();
            }, { 'accessKey': 'r' }));
        }
        function _0x335b67(_0x4e1c3c) {
            const _0x29961b = _0x3747bf;
            if (!_0x17f2cd[_0x29961b(0x2bc)])
                return;
            const _0x342882 = GM_getValue(_0x29961b(0x14f)) ?? new Date()[_0x29961b(0x2c6)](), _0x52f75b = new Date()[_0x29961b(0x2c6)]();
            _0x52f75b > parseInt(_0x342882) + _0x4e1c3c * 0x3e8 && (GM_setValue(_0x29961b(0x14f), new Date()[_0x29961b(0x2c6)]()), _0x3cd55d());
        }
        function _0x3cd55d() {
            const _0x51f84b = _0x3747bf, _0x3d28a9 = GM_info[_0x51f84b(0x267)][_0x51f84b(0x2f3)], _0x102e44 = _0x51f84b(0x2cc);
            GM_xmlhttpRequest({
                'method': _0x51f84b(0xd9),
                'url': _0x102e44,
                'onload': function (_0x12c6d4) {
                    const _0x29a199 = _0x51f84b, _0x5d689f = _0x12c6d4['responseText'], _0x55d1ef = _0x5d689f['match'](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x55d1ef && _0x55d1ef[0x1]) {
                        const _0x5d98e6 = _0x55d1ef[0x1];
                        _0x3ef70d('Current\x20version:\x20', _0x3d28a9, '|', _0x29a199(0x2b5), _0x5d98e6), _0x5d98e6 !== _0x3d28a9 && typeof this['updatenotification'] === _0x29a199(0x376) ? (this[_0x29a199(0x335)] = null, GM_notification({
                            'text': _0x5ecdf3(_0x29a199(0x106)),
                            'title': _0x5ecdf3(_0x29a199(0x15b)),
                            'tag': _0x29a199(0x321),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x29a199(0xfa),
                            'onclick': _0x2f883a => {
                                const _0x5ad56e = _0x29a199;
                                _0x2f883a?.[_0x5ad56e(0x269)]();
                                var _0x40f298 = GM_openInTab(GM_info[_0x5ad56e(0x267)][_0x5ad56e(0x304)]);
                                setTimeout(() => {
                                    const _0x53b548 = _0x5ad56e;
                                    _0x40f298[_0x53b548(0xed)]();
                                }, 0xfa);
                            }
                        })) : _0x3ef70d('there\x20is\x20no\x20new\x20update');
                    } else
                        console[_0x29a199(0x144)](_0x29a199(0x227));
                }
            });
        }
        function _0x5ab087() {
            const _0x1cf0c9 = _0x3747bf;
            _0x573913(_0x1cf0c9(0xaa))[_0x1cf0c9(0xd8)](), _0x4f5bc8(), _0x573913(_0x1cf0c9(0xa5))[_0x1cf0c9(0x11c)](_0x1cf0c9(0x1b9)), _0x573913(_0x1cf0c9(0x234))[_0x1cf0c9(0x25e)](_0x1cf0c9(0x24f));
            for (let _0x1d870a in _0xf74373) {
                _0x573913('.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect')['append']('<option\x20value=\x22' + _0x1d870a + '\x22\x20' + (_0x2e3123[_0x1cf0c9(0x15f)] == _0x1d870a ? _0x1cf0c9(0x248) : '') + '>' + _0xf74373[_0x1d870a] + _0x1cf0c9(0x1a5));
            }
            for (let _0x29aaae in _0x17f2cd) {
                _0x573913(_0x1cf0c9(0x107))['append']('<label\x20class=\x22globalSettings' + (_0x2b89ef[_0x1cf0c9(0x250)](_0x29aaae) ? _0x1cf0c9(0x330) : '') + _0x1cf0c9(0x146) + _0x5ecdf3(_0x29aaae + '_INTRO') + _0x1cf0c9(0x97) + (_0x29aaae + _0x1cf0c9(0x224)) + _0x1cf0c9(0x17e) + _0x29aaae + '\x22>' + _0x5ecdf3(_0x29aaae) + _0x1cf0c9(0xde) + _0x29aaae + _0x1cf0c9(0x108) + (_0x17f2cd[_0x29aaae] === !![] ? _0x1cf0c9(0x26c) : '') + _0x1cf0c9(0x1eb)), _0x29aaae === _0x1cf0c9(0x2da) && _0x573913(_0x1cf0c9(0x11f) + _0x29aaae + '\x22]')[_0x1cf0c9(0x1ed)](_0x1cf0c9(0x2c3))['on'](_0x1cf0c9(0x180), function (_0x2b5710) {
                    const _0xafe6bf = _0x1cf0c9;
                    _0x2b5710['preventDefault'](), _0x573913(this)[_0xafe6bf(0x1e0)]('#tempWrapper')[_0xafe6bf(0x1bf)] === 0x0 && (_0x573913(this)[_0xafe6bf(0x25e)]('<div\x20id=\x22tempWrapper\x22></div>'), _0x573913(this)[_0xafe6bf(0xcb)](_0xafe6bf(0xb1))[_0xafe6bf(0x25e)](_0xafe6bf(0xe0) + _0x2e3123[_0xafe6bf(0x22f)] + _0xafe6bf(0x140)), _0x573913(this)['children'](_0xafe6bf(0xb1))[_0xafe6bf(0x25e)]('<input\x20value=\x22' + _0x2e3123[_0xafe6bf(0x22f)] + _0xafe6bf(0x2db)), _0x573913(this)[_0xafe6bf(0xcb)](_0xafe6bf(0xb1))['append']('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x480abe[_0xafe6bf(0x292)] + '</div>'));
                }), _0x29aaae === 'AUTO_RENAME' && _0x573913(_0x1cf0c9(0x11f) + _0x29aaae + '\x22]')['parent'](_0x1cf0c9(0x2c3))['on']('contextmenu', function (_0xa0f726) {
                    const _0x1cc533 = _0x1cf0c9;
                    _0xa0f726[_0x1cc533(0x269)](), _0x573913(this)[_0x1cc533(0x1e0)](_0x1cc533(0xb1))['length'] === 0x0 && (_0x573913(this)[_0x1cc533(0x25e)]('<div\x20id=\x22tempWrapper\x22></div>'), _0x573913(this)[_0x1cc533(0xcb)]('#tempWrapper')[_0x1cc533(0x25e)]('<input\x20id=\x22date_format\x22\x20value=\x22' + _0x2e3123[_0x1cc533(0x296)] + _0x1cc533(0x368)), _0x573913(this)[_0x1cc533(0xcb)](_0x1cc533(0xb1))[_0x1cc533(0x25e)]('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x480abe[_0x1cc533(0x292)] + '</div>'));
                });
            }
        }
        function _0x2e7530() {
            const _0x529b29 = _0x3747bf;
            _0x573913('.IG_POPUP_DIG')[_0x529b29(0xd8)](), _0x4f5bc8(), _0x573913(_0x529b29(0xa5))[_0x529b29(0x11c)](_0x529b29(0x196)), _0x573913(_0x529b29(0x107))['append'](_0x529b29(0x20d)), _0x573913(_0x529b29(0x107))['append'](_0x529b29(0x27d)), _0x573913(_0x529b29(0x31a))[_0x529b29(0x25e)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x5ecdf3(_0x529b29(0x341)) + '</a></button>'), _0x573913(_0x529b29(0x31a))[_0x529b29(0x25e)](_0x529b29(0x24b) + _0x5ecdf3(_0x529b29(0x105)) + _0x529b29(0xdc)), _0x573913(_0x529b29(0x31a))[_0x529b29(0x25e)](_0x529b29(0x133) + _0x5ecdf3(_0x529b29(0x19e)) + _0x529b29(0x21e)), _0x573913(_0x529b29(0x31a))[_0x529b29(0x25e)](_0x529b29(0x163) + _0x5ecdf3('REPORT_GITHUB') + '</a></button>'), _0x573913('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append'](_0x529b29(0x293) + _0x5ecdf3('REPORT_DISCORD') + _0x529b29(0xdc));
        }
        function _0x131ced() {
            const _0xc698f1 = _0x3747bf;
            _0x573913(_0xc698f1(0xaa))[_0xc698f1(0xd8)](), _0x4f5bc8(), _0x573913(_0xc698f1(0xa5))['text'](_0xc698f1(0x20a)), _0x573913(_0xc698f1(0x107))['append'](_0xc698f1(0x27d)), _0x573913('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append'](_0xc698f1(0xb2) + _0x5ecdf3('REPORT_FORK') + '</a></button>'), _0x573913(_0xc698f1(0x31a))[_0xc698f1(0x25e)](_0xc698f1(0x163) + _0x5ecdf3(_0xc698f1(0x2d3)) + '</a></button>'), _0x573913(_0xc698f1(0x31a))['append'](_0xc698f1(0x293) + _0x5ecdf3(_0xc698f1(0x167)) + _0xc698f1(0xdc));
        }
        function _0x1b86a7(_0x1f59e3) {
            const _0x3fafd2 = _0x3747bf;
            var _0x38d998 = document['createElement']('a');
            _0x38d998[_0x3fafd2(0x1a6)] = _0x1f59e3, _0x38d998[_0x3fafd2(0x213)] = _0x3fafd2(0x328), document[_0x3fafd2(0x290)]['appendChild'](_0x38d998), _0x38d998['click'](), _0x38d998[_0x3fafd2(0xd8)]();
        }
        function _0x31e622() {
            const _0x47fd94 = _0x3747bf;
            clearInterval(_0x2e3123[_0x47fd94(0x1ac)]), _0x2e3123[_0x47fd94(0xa6)][_0x47fd94(0x166)](_0xa288d8 => {
                const _0x42ec26 = _0x47fd94;
                _0xa288d8['trigger'][_0x42ec26(0x166)](_0xdf4699 => {
                    const _0x51ba95 = _0x42ec26;
                    _0x573913(_0xa288d8[_0x51ba95(0x18d)])[_0x51ba95(0x33e)](_0x51ba95(0x238), _0xdf4699);
                });
            }), _0x2e3123[_0x47fd94(0xa6)] = [], _0x573913(_0x47fd94(0x342))[_0x47fd94(0xd8)](), _0x573913(_0x47fd94(0x1b7))[_0x47fd94(0xd8)](), _0x573913('[data-snig]')['removeAttr']('data-snig'), _0x2e3123[_0x47fd94(0x1de)] = ![], _0x2e3123[_0x47fd94(0x1c9)] = ![], _0x2e3123[_0x47fd94(0x19a)] = location['href'], _0x2e3123[_0x47fd94(0x12c)][_0x47fd94(0x11d)](), _0x3ef70d(_0x47fd94(0x13c));
        }
        function _0x3ef70d(..._0x5fe4d9) {
            const _0x5e6d25 = _0x3747bf;
            var _0x212091 = new Date();
            _0x2e3123[_0x5e6d25(0x151)][_0x5e6d25(0x2b0)]({
                'time': _0x212091['getTime'](),
                'content': [..._0x5fe4d9]
            }), _0x2e3123[_0x5e6d25(0x151)][_0x5e6d25(0x1bf)] > 0x3e8 && (_0x2e3123[_0x5e6d25(0x151)] = [
                {
                    'time': _0x212091[_0x5e6d25(0x2c6)](),
                    'content': [_0x5e6d25(0x1f6)]
                },
                ..._0x2e3123[_0x5e6d25(0x151)]['slice'](-0x3e7)
            ]), console[_0x5e6d25(0x2ae)]('[' + _0x212091[_0x5e6d25(0x1a2)]() + ']', ..._0x5fe4d9);
        }
        function _0x492ba5() {
            const _0x55bbec = _0x3747bf;
            for (let _0x544947 in _0x17f2cd) {
                GM_getValue(_0x544947) != null && typeof GM_getValue(_0x544947) === _0x55bbec(0x1b0) && (_0x17f2cd[_0x544947] = GM_getValue(_0x544947), _0x544947 === _0x55bbec(0x2da) && GM_getValue(_0x544947) !== !![] && (_0x2e3123[_0x55bbec(0x22f)] = 0x1));
            }
        }
        function _0x1594e5(_0x58dbec, _0x987cc1, _0x646c38, _0x35f1a2 = '') {
            const _0x409966 = _0x3747bf;
            _0x987cc1['find']('div.volume_slider')[_0x409966(0x1bf)] === 0x0 ? (_0x987cc1[_0x409966(0x25e)](_0x409966(0x147) + _0x35f1a2 + _0x409966(0x368)), _0x987cc1['find'](_0x409966(0xe1))['append'](_0x409966(0xa8) + _0x2e3123['videoVolume'] + _0x409966(0x22b)), _0x987cc1[_0x409966(0x1e0)](_0x409966(0x235))[_0x409966(0x2d4)]('style', _0x409966(0xc0) + (_0x2e3123[_0x409966(0x22f)] * 0x64 + '%')), _0x987cc1[_0x409966(0x1e0)](_0x409966(0x235))['on']('input', function () {
                const _0x9e7b = _0x409966;
                var _0x431423 = _0x573913(this)[_0x9e7b(0x1d8)]() * 0x64 + '%';
                _0x2e3123[_0x9e7b(0x22f)] = _0x573913(this)[_0x9e7b(0x1d8)](), GM_setValue('G_VIDEO_VOLUME', _0x573913(this)[_0x9e7b(0x1d8)]()), _0x573913(this)['attr'](_0x9e7b(0x209), _0x9e7b(0xc0) + _0x431423), _0x58dbec[_0x9e7b(0xbd)](function () {
                    const _0x1ac987 = _0x9e7b;
                    _0x3ef70d('(' + _0x646c38 + ')', _0x1ac987(0xb7)), this[_0x1ac987(0x10c)] = _0x2e3123[_0x1ac987(0x22f)];
                });
            }), _0x987cc1['find']('div.volume_slider\x20input')['on'](_0x409966(0x1d6), function () {
                const _0x41c34c = _0x409966;
                var _0xc499b = _0x2e3123[_0x41c34c(0x22f)] * 0x64 + '%';
                _0x573913(this)[_0x41c34c(0x2d4)](_0x41c34c(0x209), _0x41c34c(0xc0) + _0xc499b), _0x573913(this)[_0x41c34c(0x1d8)](_0x2e3123[_0x41c34c(0x22f)]), _0x58dbec[_0x41c34c(0xbd)](function () {
                    const _0x4be1f2 = _0x41c34c;
                    _0x3ef70d('(' + _0x646c38 + ')', _0x4be1f2(0xb7)), this[_0x4be1f2(0x10c)] = _0x2e3123[_0x4be1f2(0x22f)];
                });
            }), _0x987cc1[_0x409966(0x1e0)](_0x409966(0xe1))['on'](_0x409966(0x238), function (_0x27814a) {
                const _0x422f1c = _0x409966;
                _0x27814a[_0x422f1c(0x27f)](), _0x27814a['preventDefault']();
            })) : _0x987cc1['find']('div.volume_slider')[_0x409966(0xd8)]();
        }
        var _0x2142fc = null;
        function _0x198306(_0x1b0b58) {
            const _0x5ba83b = _0x3747bf;
            _0x1ae6c9(), _0x573913(_0x5ba83b(0x290))[_0x5ba83b(0x25e)](_0x5ba83b(0xd7) + _0x480abe['TURN_DEG'] + _0x5ba83b(0x32a) + _0x480abe[_0x5ba83b(0x326)] + _0x5ba83b(0xc6) + _0x480abe[_0x5ba83b(0x292)] + _0x5ba83b(0x27c));
            const _0x3d3a02 = _0x573913(_0x5ba83b(0x1bd)), _0xe00373 = _0x573913(_0x5ba83b(0xe6)), _0x27b32b = _0x573913(_0x5ba83b(0x251)), _0x272575 = _0x573913('#iv_rotate'), _0x1b0c73 = _0x573913(_0x5ba83b(0x2f0)), _0x55e211 = _0x573913('#iv_close'), _0x310a63 = _0x573913('#iv_image'), _0x4f7c08 = _0x573913('#rotate_left'), _0x21de71 = _0x573913(_0x5ba83b(0x270));
            _0x310a63[_0x5ba83b(0x2d4)](_0x5ba83b(0x214), _0x1b0b58), _0x3d3a02[_0x5ba83b(0x154)](_0x5ba83b(0x19b), _0x5ba83b(0x29f)), _0x27b32b['css'](_0x5ba83b(0x2bb), _0x5ba83b(0x2dc)), _0x27b32b[_0x5ba83b(0x154)]('transition', _0x5ba83b(0x204)), _0x272575[_0x5ba83b(0x154)](_0x5ba83b(0x2bb), _0x5ba83b(0x1a9)), _0x272575[_0x5ba83b(0x154)](_0x5ba83b(0xd4), _0x5ba83b(0x204)), _0x27b32b[_0x5ba83b(0x154)](_0x5ba83b(0x222), 'transform'), _0x272575[_0x5ba83b(0x154)](_0x5ba83b(0x222), _0x5ba83b(0x291));
            let _0x13b9f8 = 0x0, _0x3d420f = 0x1, _0x51a6ac = 0x0, _0xb0fba7 = 0x0, _0x54c053 = ![], _0x7a41bf = ![], _0x461f24, _0x141102;
            var _0x1263d6 = {
                'x': 0x0,
                'y': 0x0
            };
            _0x2142fc = setInterval(() => {
                const _0x30f451 = {
                    'x': _0x51a6ac,
                    'y': _0xb0fba7
                };
                _0x30f451['x'] !== _0x1263d6['x'] || _0x30f451['y'] !== _0x1263d6['y'] ? _0x7a41bf = !![] : _0x7a41bf = ![], _0x1263d6 = _0x30f451;
            }, 0x64), _0x310a63['on'](_0x5ba83b(0x23c), () => {
                _0x51a6ac = 0x0, _0xb0fba7 = 0x0, _0x24293f();
            }), _0x310a63['on'](_0x5ba83b(0x189), _0xcd5ed7 => {
                const _0x53afd3 = _0x5ba83b;
                _0xcd5ed7[_0x53afd3(0x269)]();
            }), _0x310a63['on']('click', _0x17a028 => {
                const _0x13dce8 = _0x5ba83b;
                _0x17a028[_0x13dce8(0x269)](), _0x17a028[_0x13dce8(0x27f)](), !_0x7a41bf && (_0x3d420f <= 0x1 ? _0x1a04bb(_0x17a028, Math['min'](Math['max'](0x1, _0x3d420f + 1.25), 0x5)) : (_0x3d420f = 0x1, _0x51a6ac = 0x0, _0xb0fba7 = 0x0), _0x24293f());
            }), _0xe00373['on'](_0x5ba83b(0x1a4), _0x162043 => {
                const _0x24f2e2 = _0x5ba83b;
                _0x162043[_0x24f2e2(0x269)](), _0x1a04bb(_0x162043);
            }), _0x3d3a02['on'](_0x5ba83b(0x1a4), _0x1414b7 => {
                const _0x107d70 = _0x5ba83b;
                _0x1414b7[_0x107d70(0x269)]();
            }), _0x310a63['on'](_0x5ba83b(0x168), _0x58812e => {
                const _0x3d1b21 = _0x5ba83b;
                if (_0x3d420f == 0x1)
                    return;
                _0x54c053 = !![], _0x461f24 = _0x58812e[_0x3d1b21(0x200)] - _0x51a6ac, _0x141102 = _0x58812e['pageY'] - _0xb0fba7, _0x310a63['css'](_0x3d1b21(0x241), _0x3d1b21(0x2bd));
            }), _0x310a63['on'](_0x5ba83b(0x10d), () => {
                const _0x43690e = _0x5ba83b;
                if (_0x3d420f == 0x1)
                    return;
                _0x54c053 = ![], _0x310a63[_0x43690e(0x154)]('cursor', _0x43690e(0x346));
            }), _0x4f7c08['on'](_0x5ba83b(0x238), function () {
                _0x13b9f8 -= 0x5a, _0x24293f();
            }), _0x21de71['on'](_0x5ba83b(0x238), function () {
                _0x13b9f8 += 0x5a, _0x24293f();
            }), _0x573913(document)['on'](_0x5ba83b(0xe5), _0x56d0f2 => {
                const _0x379828 = _0x5ba83b;
                if (!_0x54c053)
                    return;
                _0x56d0f2[_0x379828(0x269)](), _0x51a6ac = _0x56d0f2[_0x379828(0x200)] - _0x461f24, _0xb0fba7 = _0x56d0f2[_0x379828(0x10f)] - _0x141102, _0x24293f();
            }), _0x3d3a02['on']('click', () => {
                _0x1ae6c9();
            }), _0x55e211['on'](_0x5ba83b(0x238), () => {
                _0x1ae6c9();
            }), _0x1b0c73['on'](_0x5ba83b(0x238), _0x356691 => {
                const _0x41fda3 = _0x5ba83b;
                _0x356691[_0x41fda3(0x269)](), _0x356691[_0x41fda3(0x27f)]();
            });
            function _0x24293f() {
                const _0x2df675 = _0x5ba83b;
                _0x27b32b['css'](_0x2df675(0xd4), _0x7a41bf ? _0x2df675(0x15a) : 'transform\x200.15s\x20ease'), _0x27b32b[_0x2df675(0x154)]('transform', _0x2df675(0xcc) + _0x51a6ac + _0x2df675(0x2fd) + _0xb0fba7 + _0x2df675(0xea) + _0x3d420f + ')'), _0x272575[_0x2df675(0x154)]('transform', _0x2df675(0x375) + _0x13b9f8 + _0x2df675(0x225)), _0x3d420f == 0x1 ? _0x310a63[_0x2df675(0x154)](_0x2df675(0x241), _0x2df675(0x18f)) : _0x310a63[_0x2df675(0x154)](_0x2df675(0x241), _0x2df675(0x2bd));
            }
            function _0x1a04bb(_0x5b70c4, _0x49ddb8) {
                const _0x406695 = _0x5ba83b;
                _0x5b70c4[_0x406695(0x269)]();
                let _0x3d09d1 = _0x3d420f;
                if (_0x49ddb8 == null) {
                    let _0x662107 = 0.1, _0x49a3e3 = _0x5b70c4[_0x406695(0xce)][_0x406695(0x2e7)] < 0x0 ? 0x1 : -0x1;
                    _0x3d420f = Math[_0x406695(0x34c)](0x5, Math[_0x406695(0x1fc)](0x1, _0x3d420f + _0x49a3e3 * _0x662107 * _0x3d420f));
                } else
                    _0x3d420f = _0x49ddb8;
                let _0x303527 = _0xe00373[0x0]['getBoundingClientRect'](), _0x3952e0 = _0x5b70c4[_0x406695(0xf5)] - _0x303527[_0x406695(0x182)], _0x4e4d9f = _0x5b70c4['clientY'] - _0x303527['top'], _0x17d093 = (_0x3952e0 - _0x51a6ac) / _0x3d09d1, _0x1f6f97 = (_0x4e4d9f - _0xb0fba7) / _0x3d09d1;
                _0x51a6ac = -_0x17d093 * _0x3d420f + _0x3952e0, _0xb0fba7 = -_0x1f6f97 * _0x3d420f + _0x4e4d9f, _0x24293f();
            }
        }
        function _0x1ae6c9() {
            const _0x1ed7ca = _0x3747bf;
            clearInterval(_0x2142fc), _0x573913(_0x1ed7ca(0x1bd))[_0x1ed7ca(0xd8)](), _0x573913(document)[_0x1ed7ca(0x33e)](_0x1ed7ca(0xe5));
        }
        function _0x28e6ec() {
            const _0x2fcd7f = _0x3747bf;
            var _0xa011c3 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x2fcd7f(0x1e9),
                        'NOTICE_UPDATE_CONTENT': _0x2fcd7f(0x19c),
                        'CHECK_UPDATE': _0x2fcd7f(0x310),
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': _0x2fcd7f(0xb8),
                        'RELOAD_SCRIPT': _0x2fcd7f(0x33b),
                        'DONATE': _0x2fcd7f(0x12d),
                        'FEEDBACK': _0x2fcd7f(0x184),
                        'IMAGE_VIEWER': _0x2fcd7f(0x1a7),
                        'NEW_TAB': _0x2fcd7f(0x217),
                        'SHOW_DOM_TREE': _0x2fcd7f(0xe9),
                        'SELECT_AND_COPY': 'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
                        'DOWNLOAD_DOM_TREE': _0x2fcd7f(0xa9),
                        'REPORT_GITHUB': _0x2fcd7f(0x325),
                        'REPORT_DISCORD': _0x2fcd7f(0x2d0),
                        'REPORT_FORK': _0x2fcd7f(0x34d),
                        'DEBUG': _0x2fcd7f(0x2c9),
                        'CLOSE': _0x2fcd7f(0xd2),
                        'ALL_CHECK': _0x2fcd7f(0x2c0),
                        'BATCH_DOWNLOAD_SELECTED': 'Download\x20Selected\x20Resources',
                        'BATCH_DOWNLOAD_DIRECT': _0x2fcd7f(0x1a3),
                        'IMG': _0x2fcd7f(0x119),
                        'VID': _0x2fcd7f(0x18b),
                        'DW': _0x2fcd7f(0x260),
                        'DW_ALL': _0x2fcd7f(0x1a3),
                        'THUMBNAIL_INTRO': _0x2fcd7f(0x126),
                        'LOAD_BLOB_ONE': _0x2fcd7f(0xab),
                        'LOAD_BLOB_MULTIPLE': _0x2fcd7f(0xb0),
                        'LOAD_BLOB_RELOAD': _0x2fcd7f(0x2b2),
                        'NO_CHECK_RESOURCE': _0x2fcd7f(0x1c8),
                        'NO_VID_URL': 'Cannot\x20find\x20video\x20URL.',
                        'SETTING': _0x2fcd7f(0x11e),
                        'AUTO_RENAME': _0x2fcd7f(0x1e5),
                        'RENAME_SHORTCODE': _0x2fcd7f(0x373),
                        'RENAME_PUBLISH_DATE': _0x2fcd7f(0x10e),
                        'RENAME_LOCATE_DATE': _0x2fcd7f(0x27a),
                        'DISABLE_VIDEO_LOOPING': _0x2fcd7f(0x23d),
                        'HTML5_VIDEO_CONTROL': _0x2fcd7f(0x131),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x2fcd7f(0xba),
                        'FORCE_FETCH_ALL_RESOURCES': _0x2fcd7f(0x2be),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x2fcd7f(0x1fa),
                        'DIRECT_DOWNLOAD_ALL': _0x2fcd7f(0x153),
                        'MODIFY_VIDEO_VOLUME': 'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
                        'MODIFY_RESOURCE_EXIF': 'Modify\x20Resource\x20EXIF\x20​​Properties',
                        'SCROLL_BUTTON': 'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x2fcd7f(0x109),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': 'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
                        'AUTO_RENAME_INTRO': _0x2fcd7f(0x132),
                        'RENAME_SHORTCODE_INTRO': _0x2fcd7f(0x353),
                        'RENAME_PUBLISH_DATE_INTRO': _0x2fcd7f(0x2c4),
                        'RENAME_LOCATE_DATE_INTRO': _0x2fcd7f(0x101),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x2fcd7f(0x1e7),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x2fcd7f(0xc3),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': 'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': 'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x2fcd7f(0x137),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x2fcd7f(0x21d),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x2fcd7f(0x2b3),
                        'SCROLL_BUTTON_INTRO': 'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x2fcd7f(0x142),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x2fcd7f(0x1f4),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': _0x2fcd7f(0x30f),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x2fcd7f(0x1ca),
                        'MODIFY_RESOURCE_EXIF_INTRO': _0x2fcd7f(0x36a),
                        'DIRECT_DOWNLOAD_STORY': _0x2fcd7f(0xad),
                        'DIRECT_DOWNLOAD_STORY_INTRO': _0x2fcd7f(0x25a)
                    }
                }, _0x220ef7 = Object[_0x2fcd7f(0x17f)]({}, _0xa011c3, _0x2e3123['locale']), _0x1c0c0f = Object[_0x2fcd7f(0x261)](_0x220ef7)[_0x2fcd7f(0x306)]()[_0x2fcd7f(0x17a)]((_0x5b7a7d, _0x59f42a) => {
                    return _0x5b7a7d[_0x59f42a] = _0x220ef7[_0x59f42a], _0x5b7a7d;
                }, {});
            return _0x1c0c0f;
        }
        async function _0x4a97ab(_0x34ff73) {
            return new Promise((_0xc00cb6, _0x438dee) => {
                const _0xd619cd = a0_0x2f5d;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0xd619cd(0x18a) + _0x34ff73 + '.json',
                    'onload': function (_0x3ec4c8) {
                        const _0x14150e = _0xd619cd;
                        try {
                            let _0x7c0251 = JSON[_0x14150e(0x164)](_0x3ec4c8['response']);
                            _0xc00cb6(_0x7c0251);
                        } catch (_0x518227) {
                            _0x438dee(_0x518227);
                        }
                    },
                    'onerror': function (_0x3db6ad) {
                        const _0x59f36a = _0xd619cd;
                        _0x3ef70d(_0x59f36a(0x19f), _0x59f36a(0x378), _0x3db6ad), _0x438dee(_0x3db6ad);
                    }
                });
            });
        }
        function _0x5ecdf3(_0x181d98) {
            const _0x5687dd = _0x3747bf, _0x196aba = _0x28e6ec();
            return _0x196aba[_0x2e3123[_0x5687dd(0x15f)]] != undefined && _0x196aba[_0x2e3123[_0x5687dd(0x15f)]][_0x181d98] != undefined ? _0x196aba[_0x2e3123[_0x5687dd(0x15f)]][_0x181d98] : _0x196aba['en-US'][_0x181d98];
        }
        function _0x2ae5a7() {
            const _0x529f0c = _0x3747bf;
            _0x573913(_0x529f0c(0x327))[_0x529f0c(0xbd)](function () {
                const _0x1e5e78 = _0x529f0c;
                _0x573913(this)[_0x1e5e78(0x11c)](_0x5ecdf3(_0x573913(this)[_0x1e5e78(0x2d4)](_0x1e5e78(0x17b))));
            }), _0x573913(_0x529f0c(0x31b))[_0x529f0c(0xbd)](function () {
                const _0x8953fa = _0x529f0c;
                _0x573913(this)[_0x8953fa(0x2d4)](_0x8953fa(0x17c), _0x5ecdf3(_0x573913(this)[_0x8953fa(0x2d4)](_0x8953fa(0x311))));
            });
        }
        _0x573913(function () {
            const _0x4f47da = _0x3747bf;
            function _0x5f0c24(_0x3839b4) {
                const _0x16a190 = a0_0x2f5d;
                var _0x2c3f69 = [];
                for (var _0x2f3b27 of _0x3839b4) {
                    _0x2c3f69['push']({
                        'tagName': _0x2f3b27[_0x16a190(0x116)],
                        'id': _0x2f3b27['id'],
                        'className': _0x2f3b27[_0x16a190(0x223)]
                    });
                }
                return _0x2c3f69;
            }
            function _0x3355c3() {
                const _0x3ac790 = a0_0x2f5d;
                let _0x3d13aa = _0x573913(_0x3ac790(0x121))[0x0];
                var _0xd6b385 = '';
                _0x2e3123[_0x3ac790(0x151)][_0x3ac790(0x166)](_0x42ffe3 => {
                    const _0x226312 = _0x3ac790;
                    var _0x554c2b = JSON['stringify'](_0x42ffe3['content'], function (_0x3f998d, _0x4e4eb3) {
                        const _0x508018 = a0_0x2f5d;
                        if (Array['isArray'](this)) {
                            if (typeof _0x4e4eb3 === _0x508018(0x191) && _0x4e4eb3 instanceof jQuery)
                                return _0x5f0c24(_0x4e4eb3);
                            return _0x4e4eb3;
                        } else
                            return _0x4e4eb3;
                    }, '\x09');
                    _0xd6b385 += new Date(_0x42ffe3['time'])[_0x226312(0x1a2)]() + ':\x20' + _0x554c2b + '\x0a';
                }), _0x573913(_0x3ac790(0x1c6))[_0x3ac790(0x11c)]('Logger:\x0a' + _0xd6b385 + _0x3ac790(0x26b) + location[_0x3ac790(0x149)] + _0x3ac790(0x206) + _0x3d13aa['innerHTML']);
            }
            _0x573913('body')['on']('click', '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE', function () {
                _0x3355c3();
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), _0x4f47da(0x160), function () {
                const _0x4ed231 = _0x4f47da;
                _0x573913('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x4ed231(0xa4)](), document[_0x4ed231(0x302)](_0x4ed231(0x1a1));
            }), _0x573913('body')['on']('click', _0x4f47da(0x20b), function () {
                const _0x49310c = _0x4f47da;
                _0x573913(_0x49310c(0x1c6))[_0x49310c(0x11c)]()['length'] === 0x0 && _0x3355c3();
                var _0x24d578 = _0x573913(_0x49310c(0x1c6))['text'](), _0x516885 = document[_0x49310c(0x357)]('a'), _0x1bc312 = new Blob([_0x24d578], { 'type': _0x49310c(0x282) });
                _0x516885[_0x49310c(0x1a6)] = URL['createObjectURL'](_0x1bc312), _0x516885['download'] = _0x49310c(0x16e) + new Date()[_0x49310c(0x2c6)]() + _0x49310c(0x2b4), document['body'][_0x49310c(0x276)](_0x516885), _0x516885[_0x49310c(0x238)](), _0x516885[_0x49310c(0xd8)]();
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), _0x4f47da(0x298), function () {
                const _0x51edc6 = _0x4f47da;
                _0x573913(this)['parent'](_0x51edc6(0xb1))['length'] > 0x0 ? _0x573913(this)[_0x51edc6(0x1ed)]('#tempWrapper')[_0x51edc6(0x2ab)](0xfa, function () {
                    _0x573913(this)['remove']();
                }) : _0x573913('.IG_POPUP_DIG')[_0x51edc6(0xd8)]();
            }), _0x573913(window)['on'](_0x4f47da(0x2e9), function (_0x6fb55a) {
                const _0x1b5223 = _0x4f47da;
                _0x6fb55a[_0x1b5223(0xac)] == '81' && _0x6fb55a[_0x1b5223(0x228)] && (_0x573913(_0x1b5223(0xaa))['remove'](), _0x6fb55a[_0x1b5223(0x269)]()), _0x6fb55a[_0x1b5223(0xac)] == '87' && _0x6fb55a['altKey'] && (_0x5ab087(), _0x6fb55a['preventDefault']()), _0x6fb55a[_0x1b5223(0xac)] == '90' && _0x6fb55a[_0x1b5223(0x228)] && (_0x2e7530(), _0x6fb55a[_0x1b5223(0x269)]()), _0x6fb55a[_0x1b5223(0xac)] == '82' && _0x6fb55a[_0x1b5223(0x228)] && (_0x31e622(), _0x6fb55a[_0x1b5223(0x269)]()), _0x6fb55a['which'] == '83' && _0x6fb55a['altKey'] && (location[_0x1b5223(0x1a6)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x573913(_0x1b5223(0x2e8))[_0x1b5223(0x1bf)] > 0x0 && _0x573913(_0x1b5223(0x2e8))?.[_0x1b5223(0x33f)](_0x1b5223(0x238)), location['href'][_0x1b5223(0xb6)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x573913(_0x1b5223(0x350))[_0x1b5223(0x1bf)] > 0x0 && _0x573913(_0x1b5223(0x350))?.[_0x1b5223(0x33f)](_0x1b5223(0x238)), _0x6fb55a[_0x1b5223(0x269)]());
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0xdd), _0x4f47da(0x96), function () {
                const _0x570d3d = _0x4f47da;
                var _0xda16b6 = _0x573913(this)[_0x570d3d(0x2d4)]('id');
                if (_0xda16b6 && _0x17f2cd[_0xda16b6] !== undefined) {
                    let _0x31a450 = _0x573913(this)[_0x570d3d(0x315)]('checked');
                    GM_setValue(_0xda16b6, _0x31a450), _0x17f2cd[_0xda16b6] = _0x31a450, console[_0x570d3d(0x2ae)]('user\x20settings', _0xda16b6, _0x31a450);
                }
            }), _0x573913('body')['on']('click', _0x4f47da(0xca), function (_0x221820) {
                _0x573913(this)['find']('#tempWrapper')['length'] > 0x0 && _0x221820['preventDefault']();
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0xdd), _0x4f47da(0x156), function () {
                const _0x1a36c3 = _0x4f47da;
                let _0x581765 = _0x573913(this)['val']();
                _0x573913(this)[_0x1a36c3(0x2d4)]('type') == _0x1a36c3(0xa2) ? _0x573913(this)[_0x1a36c3(0xfe)]()[_0x1a36c3(0x1d8)](_0x581765) : _0x573913(this)[_0x1a36c3(0xec)]()[_0x1a36c3(0x1d8)](_0x581765), _0x581765 >= 0x0 && _0x581765 <= 0x1 && (_0x2e3123[_0x1a36c3(0x22f)] = _0x581765, GM_setValue('G_VIDEO_VOLUME', _0x581765));
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x2e6), _0x4f47da(0x156), function () {
                const _0x3005d2 = _0x4f47da;
                if (_0x573913(this)[_0x3005d2(0x2d4)]('type') == _0x3005d2(0xa2)) {
                    let _0x25fde0 = _0x573913(this)[_0x3005d2(0x1d8)]();
                    _0x573913(this)['next']()[_0x3005d2(0x1d8)](_0x25fde0);
                } else {
                    let _0x23b395 = _0x573913(this)[_0x3005d2(0x1d8)]();
                    _0x23b395 >= 0x0 && _0x23b395 <= 0x1 ? _0x573913(this)[_0x3005d2(0xec)]()[_0x3005d2(0x1d8)](_0x23b395) : _0x23b395 < 0x0 ? _0x573913(this)[_0x3005d2(0x1d8)](0x0) : _0x573913(this)[_0x3005d2(0x1d8)](0x1);
                }
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x2e6), _0x4f47da(0x259), function () {
                const _0x2ca8c1 = _0x4f47da;
                GM_setValue(_0x2ca8c1(0x254), _0x573913(this)['val']()), _0x2e3123[_0x2ca8c1(0x296)] = _0x573913(this)[_0x2ca8c1(0x1d8)]();
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), _0x4f47da(0x30a), function (_0x28a152) {
                const _0x592e4b = _0x4f47da;
                _0x28a152[_0x592e4b(0x269)](), _0x148b1f(this);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), _0x4f47da(0x2d2), function () {
                const _0x3855d9 = _0x4f47da;
                if (_0x17f2cd[_0x3855d9(0x352)] && _0x17f2cd[_0x3855d9(0x22d)])
                    _0x148b1f(_0x573913(this)[_0x3855d9(0x1ed)]()[_0x3855d9(0xcb)]('a')['first']()[0x0], !![]);
                else {
                    var _0x2b8c46 = new URL(_0x573913(this)[_0x3855d9(0x1ed)]()[_0x3855d9(0xcb)]('a')[_0x3855d9(0x2d4)]('data-href'));
                    _0x2b8c46[_0x3855d9(0x9e)] = _0x3855d9(0x313), _0x1b86a7(_0x2b8c46[_0x3855d9(0x1a6)]);
                }
            }), _0x573913('body')['on']('click', '.IG_POPUP_DIG_BODY\x20.videoThumbnail', function () {
                const _0x85977e = _0x4f47da;
                let _0x25b7e4 = new Date()[_0x85977e(0x2c6)]();
                _0x17f2cd[_0x85977e(0x30c)] && _0x573913(this)['parent']()[_0x85977e(0xcb)]('a')['attr'](_0x85977e(0x2c7)) && (_0x25b7e4 = _0x573913(this)[_0x85977e(0x1ed)]()[_0x85977e(0xcb)]('a')[_0x85977e(0x2d4)](_0x85977e(0x2c7)));
                let _0x4bcdc4 = _0x573913(this)[_0x85977e(0x1ed)]()[_0x85977e(0xcb)]('a')['attr'](_0x85977e(0x176)) ?? _0x573913(_0x85977e(0xeb))['text']();
                _0x11fe73(_0x573913(this)['parent']()[_0x85977e(0xcb)]('a')[_0x85977e(0x1e0)](_0x85977e(0xe4))[_0x85977e(0x187)]()[_0x85977e(0x2d4)](_0x85977e(0x214)), _0x573913(this)[_0x85977e(0x1ed)]()[_0x85977e(0xcb)]('a')['attr'](_0x85977e(0x9c)), _0x85977e(0x272), _0x25b7e4, _0x85977e(0x15d), _0x4bcdc4);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), _0x4f47da(0x2e8), function () {
                _0x3c21f9(!![]);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), '.IG_DWSTORY_ALL', function () {
                _0x3d1a0a();
            }), _0x573913(_0x4f47da(0x290))['on']('click', _0x4f47da(0x218), function (_0x3690b9) {
                const _0x3854b7 = _0x4f47da;
                _0x3690b9[_0x3854b7(0x269)](), _0x3c21f9(!![], !![], !![]);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), '.IG_DWSTORY_THUMBNAIL', function () {
                _0x30ebfa(!![]);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), _0x4f47da(0x258), function (_0x17fb8e) {
                const _0x3733c9 = _0x4f47da;
                _0x17fb8e[_0x3733c9(0x27f)](), _0x4fc121(!![]);
            }), _0x573913('body')['on'](_0x4f47da(0x238), _0x4f47da(0x350), function () {
                _0x238e94(!![]);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), '.IG_DWHISTORY_ALL', function () {
                _0x15b65a();
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), _0x4f47da(0x1aa), function (_0x5d05f0) {
                const _0x295968 = _0x4f47da;
                _0x5d05f0[_0x295968(0x269)](), _0x238e94(!![], !![]);
            }), _0x573913('body')['on'](_0x4f47da(0x238), _0x4f47da(0x1cb), function () {
                _0x2e5b98(!![]);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), '.IG_REELS', function () {
                _0x220f5c(!![], !![]);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), _0x4f47da(0x23f), function () {
                _0x220f5c(!![], !![], !![]);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), _0x4f47da(0x18c), function () {
                _0x220f5c(!![], ![]);
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x168), _0x4f47da(0x1dd), function (_0x2d1e4e) {
                const _0x1bfe6c = _0x4f47da;
                if (_0x2d1e4e[_0x1bfe6c(0xac)] === 0x3 || _0x2d1e4e[_0x1bfe6c(0xac)] === 0x2) {
                    if (location[_0x1bfe6c(0x1a6)] === _0x1bfe6c(0x33c) && _0x17f2cd[_0x1bfe6c(0xc8)]) {
                        _0x2d1e4e[_0x1bfe6c(0x269)]();
                        if (_0x573913(this)[_0x1bfe6c(0x1e0)](_0x1bfe6c(0x344))[_0x1bfe6c(0x1bf)] > 0x0) {
                            const _0x43d20c = _0x1bfe6c(0x33c) + _0x573913(this)['children'](_0x1bfe6c(0x186))[_0x1bfe6c(0x2ad)]()[_0x1bfe6c(0x11c)]();
                            _0x2d1e4e[_0x1bfe6c(0xac)] === 0x2 ? GM_openInTab(_0x43d20c) : location[_0x1bfe6c(0x1a6)] = _0x43d20c;
                        }
                    }
                }
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0xdd), _0x4f47da(0x29e), function () {
                const _0x2eaf7f = _0x4f47da;
                var _0x411aa0 = _0x573913(this)['find']('input')['prop']('checked');
                _0x573913(_0x2eaf7f(0x129))[_0x2eaf7f(0xbd)](function () {
                    const _0x50c814 = _0x2eaf7f;
                    _0x573913(this)[_0x50c814(0x315)](_0x50c814(0x26c), _0x411aa0);
                });
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0xdd), _0x4f47da(0x129), function () {
                const _0x28ed05 = _0x4f47da;
                var _0x332c84 = _0x573913(_0x28ed05(0x32b))['length'], _0x2bfc73 = _0x573913(_0x28ed05(0x129))[_0x28ed05(0x1bf)];
                _0x573913(_0x28ed05(0x29e))['find'](_0x28ed05(0x2e6))[_0x28ed05(0x315)](_0x28ed05(0x26c), _0x332c84 == _0x2bfc73);
            }), _0x573913('body')['on'](_0x4f47da(0x238), _0x4f47da(0xa1), function () {
                const _0x3722d2 = _0x4f47da;
                let _0x4aeb59 = 0x0;
                _0x573913(_0x3722d2(0xbb))[_0x3722d2(0xbd)](function () {
                    const _0x3dfb25 = _0x3722d2;
                    _0x573913(this)[_0x3dfb25(0xec)]()[_0x3dfb25(0xcb)](_0x3dfb25(0x2e6))[_0x3dfb25(0x315)](_0x3dfb25(0x26c)) && (_0x573913(this)[_0x3dfb25(0x33f)](_0x3dfb25(0x238)), _0x4aeb59++);
                }), _0x4aeb59 == 0x0 && alert(_0x5ecdf3(_0x3722d2(0xff)));
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0xdd), _0x4f47da(0x268), function () {
                const _0x19c639 = _0x4f47da;
                GM_setValue(_0x19c639(0x15f), _0x573913(this)[_0x19c639(0x1d8)]()), _0x2e3123['lang'] = _0x573913(this)[_0x19c639(0x1d8)](), _0x2e3123[_0x19c639(0x15f)]?.[_0x19c639(0x27b)]('en') || _0x2e3123['locale'][_0x2e3123['lang']] != null ? (_0x2ae5a7(), _0x48bd85()) : _0x4a97ab(_0x2e3123[_0x19c639(0x15f)])[_0x19c639(0xe2)](_0x1495f3 => {
                    const _0x29ef34 = _0x19c639;
                    _0x2e3123[_0x29ef34(0x29a)][_0x2e3123[_0x29ef34(0x15f)]] = _0x1495f3, _0x2ae5a7(), _0x48bd85();
                })[_0x19c639(0x35a)](_0x5103ef => {
                    const _0x35cbc7 = _0x19c639;
                    console[_0x35cbc7(0x144)](_0x35cbc7(0x1d7), _0x5103ef);
                });
            }), _0x573913(_0x4f47da(0x290))['on'](_0x4f47da(0x238), '.IG_POPUP_DIG_TITLE\x20#batch_download_direct', function () {
                const _0x3d4494 = _0x4f47da;
                _0x573913(_0x3d4494(0xbb))[_0x3d4494(0xbd)](function () {
                    const _0x44efe8 = _0x3d4494;
                    _0x573913(this)[_0x44efe8(0x33f)]('click');
                });
            });
            const _0x47429f = new MutationObserver(_0x344216 => {
                const _0x56995e = _0x4f47da;
                for (const _0x45071a of _0x344216) {
                    _0x45071a[_0x56995e(0x1d9)] === _0x56995e(0x349) && _0x45071a['addedNodes'][_0x56995e(0x166)](_0x31d50d => {
                        const _0x3df992 = _0x56995e, _0x5eabfe = _0x573913(_0x31d50d)[_0x3df992(0x1e0)](_0x3df992(0x266));
                        if (location[_0x3df992(0x149)][_0x3df992(0x27b)](_0x3df992(0x1cd))) {
                            if (_0x573913(_0x31d50d)[_0x3df992(0x2d4)](_0x3df992(0x311)) == null && _0x573913(_0x31d50d)['attr'](_0x3df992(0x358)) == null && _0x31d50d['tagName'] === _0x3df992(0x98)) {
                                var _0x1f4050 = _0x573913(_0x31d50d)['find'](_0x3df992(0x1f8));
                                let _0xb57a48 = _0x1f4050?.[_0x3df992(0x2d4)]('title');
                                _0xb57a48 != null && _0x1f4050[_0x3df992(0x11c)](_0xb57a48);
                            }
                        }
                        if (_0x5eabfe[_0x3df992(0x1bf)] > 0x0) {
                            _0x17f2cd[_0x3df992(0x2da)] && _0x5eabfe[_0x3df992(0xbd)](function () {
                                const _0x44ca4d = _0x3df992;
                                _0x573913(this)['on'](_0x44ca4d(0x285), function () {
                                    const _0x4507cf = _0x44ca4d;
                                    !_0x573913(this)[_0x4507cf(0x28c)](_0x4507cf(0x29c)) && (_0x573913(this)[_0x4507cf(0x2d4)]('data-modify', !![]), this[_0x4507cf(0x10c)] = _0x2e3123['videoVolume'], _0x3ef70d(_0x4507cf(0x134)));
                                });
                            });
                            if (location['pathname'][_0x3df992(0xb6)](/^(\/stories\/)/ig)) {
                                const _0x1c75c5 = location[_0x3df992(0x149)]['match'](/^(\/stories\/highlights\/)/ig) != null, _0x8e190d = _0x1c75c5 ? _0x3df992(0x1ae) : 'story';
                                _0x5eabfe[_0x3df992(0xbd)](function () {
                                    const _0x196d97 = _0x3df992;
                                    _0x573913(this)['on']('timeupdate', function () {
                                        const _0x504e76 = a0_0x2f5d;
                                        if (!_0x573913(this)[_0x504e76(0x28c)](_0x504e76(0x13f))) {
                                            let _0x36d708 = _0x573913(this);
                                            _0x36d708[_0x504e76(0x2bf)](_0x504e76(0x2e3))['filter'](function () {
                                                const _0x43c1a6 = _0x504e76;
                                                return _0x573913(this)[_0x43c1a6(0x9d)]() == _0x36d708[_0x43c1a6(0x9d)]();
                                            })[_0x504e76(0x1e0)](_0x504e76(0x1ec))[_0x504e76(0x1bf)] === 0x0 ? (_0x573913(this)[_0x504e76(0x2d4)]('data-modify-thumbnail', !![]), _0x1c75c5 ? _0x2e5b98(![]) : _0x30ebfa(![]), _0x3ef70d('(' + _0x8e190d + ')', _0x504e76(0x1ff))) : (_0x573913(this)[_0x504e76(0x2d4)]('data-modify-thumbnail', !![]), _0x3ef70d('(' + _0x8e190d + ')', _0x504e76(0x1c0)));
                                        }
                                    });
                                    var _0x123580 = _0x573913(this);
                                    if (_0x17f2cd['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x123580[_0x196d97(0x28c)](_0x196d97(0x1f0))) {
                                            _0x3ef70d('(' + _0x8e190d + ')', _0x196d97(0x334));
                                            _0x17f2cd[_0x196d97(0x2da)] && (this[_0x196d97(0x10c)] = _0x2e3123['videoVolume'], _0x123580['on'](_0x196d97(0x35f), function () {
                                                const _0x3f2f60 = _0x196d97;
                                                this[_0x3f2f60(0x10c)] = _0x2e3123[_0x3f2f60(0x22f)];
                                            }));
                                            let _0x42f4b8 = _0x123580[_0x196d97(0x2bf)]('div')[_0x196d97(0x11a)](function () {
                                                    const _0x2e8cb9 = _0x196d97;
                                                    return _0x573913(this)[_0x2e8cb9(0x2d4)](_0x2e8cb9(0x28f)) == null && _0x573913(this)['attr'](_0x2e8cb9(0x209)) == null;
                                                })[_0x196d97(0x187)](), _0x2b7599 = _0x42f4b8['next']();
                                            _0x2b7599['hide']();
                                            let _0x3baec0 = _0x42f4b8[_0x196d97(0x1e0)](_0x196d97(0x257));
                                            _0x3baec0[_0x196d97(0x2af)]();
                                            const _0x307304 = function (_0x45ed9f) {
                                                const _0x13bcb5 = _0x196d97;
                                                _0x45ed9f[_0x13bcb5(0x269)](), _0x123580[_0x13bcb5(0x154)](_0x13bcb5(0x230), '2'), _0x123580[_0x13bcb5(0x2d4)]('controls', !![]), _0x3baec0['hide'](), _0x2b7599[_0x13bcb5(0x2af)](), _0x1594e5(_0x123580, _0x123580[_0x13bcb5(0x2bf)](_0x13bcb5(0x2e3))['filter'](function () {
                                                    const _0x24a15b = _0x13bcb5;
                                                    return _0x573913(this)[_0x24a15b(0x9d)]() == _0x123580['width']();
                                                })[_0x13bcb5(0x187)](), _0x8e190d, _0x13bcb5(0xb5));
                                            };
                                            _0x123580[_0x196d97(0x1ed)]()[_0x196d97(0x1e0)](_0x196d97(0x11b))['on'](_0x196d97(0x180), _0x307304), _0x3baec0['on'](_0x196d97(0x180), _0x307304), _0x2b7599['on'](_0x196d97(0x180), _0x307304), _0x123580['on'](_0x196d97(0x180), function (_0x1c9736) {
                                                const _0x38721f = _0x196d97;
                                                _0x1c9736[_0x38721f(0x269)](), _0x123580[_0x38721f(0x154)](_0x38721f(0x230), '-1'), _0x123580[_0x38721f(0x288)]('controls'), _0x2b7599['show'](), _0x3baec0['show'](), _0x1594e5(_0x123580, _0x123580[_0x38721f(0x2bf)]('div[style][class]')[_0x38721f(0x11a)](function () {
                                                    const _0x49a39c = _0x38721f;
                                                    return _0x573913(this)[_0x49a39c(0x9d)]() == _0x123580[_0x49a39c(0x9d)]();
                                                })[_0x38721f(0x187)](), _0x8e190d, 'vertical');
                                            }), _0x123580['on'](_0x196d97(0x9a), function () {
                                                const _0x21e10c = _0x196d97;
                                                let _0x4e24c2 = _0x42f4b8[_0x21e10c(0x1ed)]()['find'](_0x21e10c(0x178))[_0x21e10c(0x2bf)](_0x21e10c(0xd5))[_0x21e10c(0x187)]();
                                                var _0x3da707 = _0x4e24c2[_0x21e10c(0x1e0)](_0x21e10c(0x29d))['length'] === 0x0;
                                                this[_0x21e10c(0x16a)] != _0x3da707 && (this[_0x21e10c(0x10c)] = _0x2e3123[_0x21e10c(0x22f)], _0x4e24c2?.[_0x21e10c(0x33f)](_0x21e10c(0x238))), _0x573913(this)[_0x21e10c(0x2d4)](_0x21e10c(0x1d1)) && (_0x2e3123[_0x21e10c(0x22f)] = this['volume'], GM_setValue(_0x21e10c(0x2ef), this['volume'])), this['volume'] == _0x2e3123[_0x21e10c(0x22f)] && _0x573913(this)[_0x21e10c(0x2d4)](_0x21e10c(0x1d1), !![]);
                                            }), _0x123580[_0x196d97(0x154)](_0x196d97(0x162), _0x196d97(0x16b)), _0x123580[_0x196d97(0x154)]('z-index', '2'), _0x123580['attr'](_0x196d97(0x215), !![]), _0x123580[_0x196d97(0x2d4)]('controls', !![]);
                                        }
                                    } else
                                        _0x1594e5(_0x123580, _0x123580[_0x196d97(0x2bf)](_0x196d97(0x2e3))[_0x196d97(0x11a)](function () {
                                            const _0x3205c0 = _0x196d97;
                                            return _0x573913(this)[_0x3205c0(0x9d)]() == _0x123580['width']();
                                        })[_0x196d97(0x187)](), _0x8e190d, _0x196d97(0xb5));
                                });
                            }
                        }
                    });
                }
            });
            _0x47429f[_0x4f47da(0x301)](_0x573913(_0x4f47da(0x121))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x7d00);
}(jQuery));