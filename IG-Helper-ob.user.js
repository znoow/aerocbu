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

function a0_0x5ae0() {
    const _0x1dfb3e = [
        'getTranslationText()',
        'instagram.com/reels/',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'GraphImage',
        'remove',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        '.button_wrapper',
        'Feedback\x20Options',
        '#imageViewer',
        'contextmenu',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '</a></button><br/>',
        'addClass',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'host',
        'padStart',
        'data-snig',
        'main\x20timer\x20re-register\x20completed',
        'REPORT_FORK',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'getTranslationText\x20catch\x20error:',
        '</span>\x20<input\x20id=\x22',
        'deltaY',
        'INTERNAL_CSS',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'pathname',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'hide',
        'language',
        'NOTICE_UPDATE_TITLE',
        'top',
        'volumechange',
        'video_url',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        '#iv_header',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'NOPATH',
        'close',
        'prev',
        'edge_sidecar_to_children',
        'isArray',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '_ac3q',
        'stp',
        'DOWNLOAD_DOM_TREE',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'url',
        'RENAME_PUBLISH_DATE',
        '<div\x20class=\x22volume_slider\x20',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'content',
        'registerMenuIds',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'Current\x20version:\x20',
        'fail',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'message',
        '_INTRO',
        'SELECT_AND_COPY',
        'Close',
        '</a>',
        '<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        'warn',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        '<div\x20class=\x22button_wrapper\x22>',
        'GL_observer',
        'video\x20+\x20div\x20>\x20div',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'div:not([class]):not([style])',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        '[data-ih-locale]',
        'SKIP_VIEW_STORY_CONFIRM',
        'GL_username',
        'show',
        'trim',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'GL_dataCache',
        'addedNodes',
        'lang',
        'userLanguage',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'reels_media',
        'includes',
        '<input\x20value=\x22',
        'data-href',
        'replace',
        'IG\x20Debug\x20DOM\x20Tree',
        '.IG_POPUP_DIG\x20input',
        'isDialog',
        'downloadURL',
        '/info/',
        'datetime',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'post',
        'owner',
        'observe',
        'pageX',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'split',
        'execCommand',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'avatar',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '._acnb',
        'trigger',
        '<div\x20id=\x22tempWrapper\x22></div>',
        '%22}',
        'max',
        'https://www.instagram.com/reel/',
        'profile_pic_url',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'scontent.cdninstagram.com',
        'attr',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'NO_VID_URL',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'getUserHighSizeProfile()',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'navigator',
        'fileRenameFormat',
        'candidates',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'remove-thumbnail',
        'Show\x20DOM\x20Tree',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'display_resources',
        'div\x20>\x20ul._acay',
        'response',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'toISOString',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'pageY',
        'GraphVideo',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'getHighlightStories()',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'video\x20volume\x20changed\x20#slider',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'getMediaInfo()',
        'FEEDBACK',
        'Found\x20post\x20container',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        '__typename',
        '_blank',
        'parent',
        'THUMBNAIL_INTRO',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '.IG_DWSTORY_THUMBNAIL',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'Cannot\x20find\x20video\x20URL.',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'en-US',
        'data-modify',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        '\x22\x20class=\x22newTab\x22>',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '#article-id',
        'users',
        'x1iyjqo2',
        'matchAll',
        '\x22\x20data-globalIndex=\x22',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        '.IG_DWSTORY',
        'Download\x20All\x20Resources',
        'div[id^=\x22mount\x22]',
        'config_width',
        'ended',
        '.json',
        '.IG_NEWTAB_MAIN',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'Main\x20Timer',
        '.IG_DWHINEWTAB',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '._acay\x20._acaz',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'taken_at_timestamp',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        'vertical',
        'Reload\x20Script',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'DIV',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'regenerated',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '</div>',
        'hd_profile_pic_url_info',
        'video_resources',
        'data-name',
        'Fetch\x20from\x20memory\x20cache:',
        '[data-ih-locale-title]',
        'data-loop',
        'play\x20playing',
        'div\x20>\x20ul\x20li._acaz',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'controls',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'toUpperCase',
        'RELOAD_SCRIPT',
        'input',
        'GM_unregisterMenuCommand',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        '</span></div>',
        'THUMBNAIL',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'createMediaListDOM',
        'DOWNLOAD',
        'getUserIdWithAgent()',
        'video',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        '\x0a-----\x0a\x0aLocation:\x20',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'is_video',
        '96gDdvNy',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'toLowerCase',
        'LOAD_BLOB_MULTIPLE',
        'SHOW_DOM_TREE',
        'getFullYear',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'shortcode',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'section\x20>\x20main[role=\x22main\x22]',
        'taken_at',
        'Feedback',
        'div.volume_slider\x20input',
        'innerHeight',
        'LOCALE_MANIFEST',
        'childList',
        'GL_postPath',
        'Logger:\x0a',
        '2665927fSBIpo',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'body\x20>\x20div\x20section._ac0a',
        'which',
        'log',
        '.IG_DW_MAIN',
        '8840799bCwzbO',
        ':hidden',
        'reels',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20</div>',
        'LOAD_BLOB_ONE',
        'carousel_media:\x20undefined\x20username',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'bottom',
        'canDownload',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'modify',
        '#_SNLOAD',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'parents',
        'hasReferrer',
        '_acnf',
        'object',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'Image',
        'DEBUG',
        'next',
        'z-index',
        'reject',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        'Donate',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'data-remove-thumbnail',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '--ig-track-progress:\x20',
        'before',
        'match',
        '400296mAkQic',
        'loop',
        'thumbnail',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        '.IG_POPUP_DIG\x20#post_info',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'faild',
        'IMG',
        'li._acaz',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'AUTO_RENAME',
        'DISABLE_VIDEO_LOOPING',
        '.circle_wrapper',
        'Loading\x20Blob\x20Media...',
        '.IG_POPUP_DIG',
        'trigging',
        'https://www.instagram.com/',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'edges',
        'keys',
        'image_versions2',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'off',
        'display_url',
        'getBlobMedia()',
        'div#splash-screen',
        '*/*',
        'items',
        'GL_referrer',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '0px',
        'absolute',
        'timeupdate',
        'status',
        'wrap',
        'style',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '\x22\x20class=\x22IG_REELS\x22>',
        'x1lix1fw',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'src',
        'textContent',
        'data-controls',
        '_acnb',
        'GL_logger',
        'Open\x20in\x20New\x20Tab',
        'undefined',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'loadstart',
        'getUserId()',
        'createObjectURL',
        'query_hash',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'forEach',
        'img',
        'ig_cache_key',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        '37px',
        'text',
        '1761cepkEH',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'change',
        '.txt',
        'copy',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'div[style][class]',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'click',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'prop',
        '<option\x20value=\x22',
        'push',
        'node',
        'last',
        'volume',
        'height',
        'Settings',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'article',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        '</a></button>',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'https://i.instagram.com/api/v1/media/',
        'range',
        'href',
        'https://i.instagram.com/api/v1/users/',
        'currentURL',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'substr',
        '._acay',
        'FULLSCREEN',
        '.IG_DWHISTORY',
        'Video',
        'position',
        'jpg',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'G_VIDEO_VOLUME',
        'getBlobMediaWithQueryID()',
        'MODIFY_VIDEO_VOLUME',
        '.IG_DWHISTORY_ALL',
        'altKey',
        'display',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'width',
        'media-id',
        '1928HPjmQE',
        'SCROLL_BUTTON',
        'username',
        'stopPropagation',
        'data-completed',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        '#tempWrapper',
        'script',
        'div',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'FORCE_RESOURCE_VIA_MEDIA',
        'NONE',
        'locale',
        '.IG_DWNEWTAB',
        'createElement',
        'DOMTree-',
        'stories',
        'onReadyMyDW()\x20Timer',
        'videoVolume',
        'grab',
        'relative',
        'filter',
        '\x22\x20data-ih-locale-title=\x22',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'hostname',
        'video_versions',
        'get',
        'HTML5_VIDEO_CONTROL',
        'fadeOut',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'blob',
        'getStories()',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        '\x20-</a>',
        'responseText',
        'Download\x20Selected\x20Resources',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'ALL_CHECK',
        'Script\x20Loaded',
        '._aagv\x20img',
        'smooth',
        'Disable\x20Video\x20Auto-looping',
        'css',
        'cursor',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        '#iv_close',
        'mp4',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        '#iv_image',
        'a[href^=\x22/p/\x22]',
        '<p\x20id=\x22_SNLOAD\x22>',
        'user\x20settings',
        '[data-snig]',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'error',
        'data',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'story',
        'shortcode_media',
        '\x22\x20/></div>',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '.IG_POPUP_DIG\x20.globalSettings',
        'replaceAll',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'then',
        'firstStarted',
        'there\x20is\x20no\x20new\x20update',
        '.IG_REELS_THUMBNAIL',
        'onHighlightsStory',
        'version',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        'toString',
        'Found\x20insert\x20point',
        'DOWNLOAD_ALL',
        'scrollBy',
        '.IG_THUMBNAIL_MAIN',
        'https://www.instagram.com/reels/',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'checked',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'GL_repeat',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'startsWith',
        'text/plain',
        'mousemove.igHelper',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'a[href^=\x22/\x22]',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'NEW_TAB',
        'www.',
        'GL_registerEventList',
        'removeClass',
        'label',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        '\x22\x20datetime=\x22',
        'getTime',
        'hasClass',
        '</div></div>',
        '77ezSnLh',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'carousel_media',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        'download',
        '.IG_IMAGE_VIEWER',
        'target',
        'VID',
        'Debug\x20Window',
        'isStory',
        '.xpgaw4o',
        'flex',
        'type',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'length',
        'className',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'removeAttr',
        'each',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        '</span>\x20',
        'first',
        'version:',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'slice',
        'body\x20>\x20div\x20section:visible._ac0a',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'G_RENAME_FORMAT',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'DW_ALL',
        '281805QRbEOh',
        '/accounts/login',
        'boolean',
        'data-username',
        '\x22\x20title=\x22',
        'Open\x20Image\x20In\x20Viewer',
        'SETTING',
        'muted',
        '28540CltSBE',
        'body',
        'NO_CHECK_RESOURCE',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        '299353BuKmui',
        'isHighlightsStory',
        'data-type',
        'select',
        'getPostOwner()',
        'transform',
        'div:last-child',
        'Wololo!\x20New\x20version\x20released.',
        'originalEvent',
        '<a\x20media-id=\x22',
        'Checking\x20for\x20Script\x20Updates',
        'updatenotification',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        'feedback_message',
        'G_CHECK_TIMESTAMP',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'data-modify-thumbnail',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        '.IG_REELS_NEWTAB',
        'padEnd',
        'mousedown',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'Cannot\x20find\x20resource\x20url.',
        'val',
        'tagName',
        'highlights',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'getMonth',
        'grabbing',
        'img[referrerpolicy]',
        'GET',
        '\x22]\x20span',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'data-ih-locale',
        'div[role=\x22presentation\x22]',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'logger\x20sliced',
        'pageLoaded',
        'BATCH_DOWNLOAD_SELECTED',
        'modify-thumbnail',
        'srcset',
        '<a\x20datetime=\x22',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'REPORT_DISCORD',
        'tempFetchRateLimit',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        '.IG_DWHISTORY_THUMBNAIL',
        'REPORT_GITHUB',
        'floor',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'finalUrl',
        'video\x20+\x20div',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'DIRECT_DOWNLOAD_ALL',
        'after',
        '<div></div>',
        'query_id',
        'pause',
        'data-path',
        'reel',
        'user',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        '2McejWP',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'min',
        'CHECK_UPDATE_MENU',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'find',
        'innerWidth',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'left',
        'preventDefault',
        'parse',
        '.IG_DWPROFILE',
        'disconnect',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'CLOSE',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'isProfile',
        '<label\x20class=\x22globalSettings',
        'Remote\x20version:\x20',
        'hidden',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'xdt_api__v1__media__shortcode__web_info',
        '._acay\x20+\x20.x24i39r',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'div.volume_slider',
        'sort',
        'load',
        'append',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'Download',
        'code',
        'searchParams',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'title',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'IMAGE_VIEWER',
        'children',
        'mouseup',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'catch',
        'name',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'element'
    ];
    a0_0x5ae0 = function () {
        return _0x1dfb3e;
    };
    return a0_0x5ae0();
}
function a0_0x499e(_0x542d6e, _0x2832c1) {
    const _0x5ae0a9 = a0_0x5ae0();
    return a0_0x499e = function (_0x499e28, _0xa96694) {
        _0x499e28 = _0x499e28 - 0x137;
        let _0x5bf0dc = _0x5ae0a9[_0x499e28];
        return _0x5bf0dc;
    }, a0_0x499e(_0x542d6e, _0x2832c1);
}
(function (_0x5d17f7, _0x172b4d) {
    const _0x1b313f = a0_0x499e, _0x280316 = _0x5d17f7();
    while (!![]) {
        try {
            const _0x2be236 = -parseInt(_0x1b313f(0x291)) / 0x1 * (parseInt(_0x1b313f(0x2d3)) / 0x2) + -parseInt(_0x1b313f(0x1c8)) / 0x3 * (parseInt(_0x1b313f(0x1f7)) / 0x4) + parseInt(_0x1b313f(0x285)) / 0x5 * (parseInt(_0x1b313f(0x149)) / 0x6) + -parseInt(_0x1b313f(0x264)) / 0x7 * (parseInt(_0x1b313f(0x187)) / 0x8) + parseInt(_0x1b313f(0x163)) / 0x9 + -parseInt(_0x1b313f(0x28d)) / 0xa + -parseInt(_0x1b313f(0x15c)) / 0xb;
            if (_0x2be236 === _0x172b4d)
                break;
            else
                _0x280316['push'](_0x280316['shift']());
        } catch (_0x2719a5) {
            _0x280316['push'](_0x280316['shift']());
        }
    }
}(a0_0x5ae0, 0x7b946), function (_0x23e092) {
    setTimeout(() => {
        'use strict';
        const _0x4b2cd0 = a0_0x499e;
        const _0xd68c62 = {
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
            }, _0x1767d2 = [
                _0x4b2cd0(0x335),
                _0x4b2cd0(0x325),
                _0x4b2cd0(0x301)
            ], _0x30a673 = {
                'DOWNLOAD': _0x4b2cd0(0x267),
                'NEW_TAB': _0x4b2cd0(0x280),
                'THUMBNAIL': _0x4b2cd0(0x317),
                'DOWNLOAD_ALL': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
                'CLOSE': _0x4b2cd0(0x363),
                'FULLSCREEN': _0x4b2cd0(0x281)
            }, _0x356ff5 = 0xfa, _0x13533b = GM_getResourceText(_0x4b2cd0(0x31b)), _0x8393e4 = JSON[_0x4b2cd0(0x2df)](GM_getResourceText(_0x4b2cd0(0x158)));
        var _0x2938ed = {
            'videoVolume': GM_getValue('G_VIDEO_VOLUME') ? GM_getValue(_0x4b2cd0(0x1ee)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x4b2cd0(0x282)) ? GM_getValue(_0x4b2cd0(0x282)) : _0x4b2cd0(0x229),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x4b2cd0(0x355)) || navigator[_0x4b2cd0(0x320)] || navigator[_0x4b2cd0(0x356)],
            'currentURL': location[_0x4b2cd0(0x1e2)],
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
                _0x1089da();
            })
        };
        _0x4b1ed8(), GM_addStyle(_0x13533b), _0x367178(), _0x213035(_0x2938ed[_0x4b2cd0(0x355)])['then'](_0xf00fef => {
            const _0x315353 = _0x4b2cd0;
            _0x2938ed[_0x315353(0x205)][_0x2938ed[_0x315353(0x355)]] = _0xf00fef, _0x1d1dfe(), _0x367178(), _0x2d2362(0x12c);
        })[_0x4b2cd0(0x2ff)](_0x4c7288 => {
            const _0xb368bc = _0x4b2cd0;
            _0x367178(), _0x2d2362(0x12c), !_0x2938ed[_0xb368bc(0x355)]['startsWith']('en') && console[_0xb368bc(0x230)](_0xb368bc(0x318), _0x4c7288);
        }), _0x274880(_0x4b2cd0(0x21f), GM_info[_0x4b2cd0(0x1ff)][_0x4b2cd0(0x300)], _0x4b2cd0(0x27b), GM_info['script']['version']);
        var _0x55fad6 = setInterval(function () {
            const _0x2923e4 = _0x4b2cd0;
            if (_0x23e092(_0x2923e4(0x1a2))[_0x2923e4(0x272)] > 0x0 && !_0x23e092(_0x2923e4(0x1a2))['is'](_0x2923e4(0x164)) || location[_0x2923e4(0x31d)][_0x2923e4(0x186)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x2923e4(0x211)][_0x2923e4(0x250)](_0x2923e4(0x258))) {
                _0x2938ed[_0x2923e4(0x2b9)] = ![];
                return;
            }
            if (_0x2938ed[_0x2923e4(0x1e4)] != location[_0x2923e4(0x1e2)] || !_0x2938ed[_0x2923e4(0x23b)] || !_0x2938ed[_0x2923e4(0x2b9)]) {
                console['log'](_0x2923e4(0x3c0), _0x2923e4(0x198)), clearInterval(_0x2938ed[_0x2923e4(0x24d)]), _0x2938ed[_0x2923e4(0x2b9)] = ![], _0x2938ed[_0x2923e4(0x23b)] = !![], _0x2938ed[_0x2923e4(0x1e4)] = location[_0x2923e4(0x1e2)], _0x2938ed[_0x2923e4(0x347)][_0x2923e4(0x2e1)]();
                if (location[_0x2923e4(0x1e2)][_0x2923e4(0x250)]('https://www.instagram.com/p/') || location[_0x2923e4(0x31d)][_0x2923e4(0x186)](/^\/(.*?)\/(p|reel)\//ig) || location['href'][_0x2923e4(0x250)](_0x2923e4(0x374))) {
                    _0x2938ed['GL_dataCache'][_0x2923e4(0x209)] = {}, _0x2938ed[_0x2923e4(0x353)][_0x2923e4(0x2aa)] = {}, _0x274880(_0x2923e4(0x35f));
                    var _0x563e61 = setInterval(() => {
                        const _0x23c49e = _0x2923e4;
                        _0x23e092(_0x23c49e(0x2ea))[_0x23c49e(0x272)] > 0x0 && (clearInterval(_0x563e61), setTimeout(() => {
                            _0x1089da(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x2938ed[_0x2923e4(0x2b9)] = !![];
                }
                location[_0x2923e4(0x1e2)][_0x2923e4(0x250)](_0x2923e4(0x249)) && (_0x274880('isReels'), setTimeout(() => {
                    _0x2f370a(![]);
                }, 0x96), _0x2938ed[_0x2923e4(0x2b9)] = !![]);
                if (location[_0x2923e4(0x1e2)][_0x2923e4(0x36a)]('?')[0x0] == 'https://www.instagram.com/') {
                    _0x2938ed[_0x2923e4(0x353)][_0x2923e4(0x209)] = {}, _0x2938ed[_0x2923e4(0x353)]['highlights'] = {};
                    let _0x36064c = _0x2938ed['GL_referrer']?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x274880('isHomepage', _0x36064c), setTimeout(() => {
                        const _0x3a9413 = _0x2923e4;
                        _0x1089da(![], _0x36064c);
                        const _0x34d562 = _0x23e092(_0x3a9413(0x357))?.[_0x3a9413(0x3a1)]()[0x0];
                        _0x34d562 && _0x2938ed[_0x3a9413(0x347)]['observe'](_0x34d562, { 'childList': !![] });
                    }, 0x96), _0x2938ed['pageLoaded'] = !![];
                }
                _0x23e092(_0x2923e4(0x253))[_0x2923e4(0x272)] && location[_0x2923e4(0x31d)]['match'](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x2923e4(0x31d)]['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x274880(_0x2923e4(0x2e6)), setTimeout(() => {
                    _0x253939(![]);
                }, 0x96), _0x2938ed['pageLoaded'] = !![]);
                if (!_0x2938ed[_0x2923e4(0x2b9)]) {
                    if (location[_0x2923e4(0x1e2)][_0x2923e4(0x186)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x2938ed[_0x2923e4(0x353)][_0x2923e4(0x2aa)] = {}, _0x274880(_0x2923e4(0x292)), _0x8f5f81(![]), _0x2938ed[_0x2923e4(0x24d)] = setInterval(() => {
                            _0xb9d3ad(![]);
                        }, _0x356ff5), _0x23e092(_0x2923e4(0x1e9))[_0x2923e4(0x272)] && setTimeout(() => {
                            const _0x199d50 = _0x2923e4;
                            if (_0xd68c62[_0x199d50(0x34e)]) {
                                var _0xb4f02c = _0x23e092(_0x199d50(0x38d))[_0x199d50(0x20e)](function () {
                                    const _0x3c13db = _0x199d50;
                                    return _0x23e092(this)[_0x3c13db(0x2fb)]()[_0x3c13db(0x272)] === 0x0 && this[_0x3c13db(0x1b2)]['trim']() !== '';
                                });
                                _0xb4f02c?.['trigger'](_0x199d50(0x1d0));
                            }
                            _0x2938ed[_0x199d50(0x2b9)] = !![];
                        }, 0x96);
                    else
                        location[_0x2923e4(0x1e2)][_0x2923e4(0x186)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x274880(_0x2923e4(0x26d)), _0x23e092(_0x2923e4(0x33a))['length'] > 0x0 && (_0x23e092(_0x2923e4(0x3b8))['remove'](), _0x23e092(_0x2923e4(0x206))['remove'](), _0x23e092(_0x2923e4(0x3a6))[_0x2923e4(0x272)] && _0x23e092(_0x2923e4(0x3a6))['remove'](), _0x529c0d(![]), setTimeout(() => {
                            _0x529c0d(![]);
                        }, 0x96)), _0x23e092('.IG_DWSTORY')[_0x2923e4(0x272)] && setTimeout(() => {
                            const _0x3c0706 = _0x2923e4;
                            if (_0xd68c62[_0x3c0706(0x34e)]) {
                                var _0x573224 = _0x23e092('div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')[_0x3c0706(0x20e)](function () {
                                    const _0x2ad1fb = _0x3c0706;
                                    return _0x23e092(this)[_0x2ad1fb(0x2fb)]()[_0x2ad1fb(0x272)] === 0x0 && this[_0x2ad1fb(0x1b2)][_0x2ad1fb(0x351)]() !== '';
                                });
                                _0x573224?.[_0x3c0706(0x1d0)]();
                            }
                            _0x2938ed[_0x3c0706(0x2b9)] = !![];
                        }, 0x96)) : (_0x2938ed[_0x2923e4(0x2b9)] = ![], _0x23e092('.IG_DWSTORY')[_0x2923e4(0x272)] && _0x23e092(_0x2923e4(0x3b8))[_0x2923e4(0x307)](), _0x23e092('.IG_DWSTORY_ALL')['length'] && _0x23e092('.IG_DWSTORY_ALL')[_0x2923e4(0x307)](), _0x23e092(_0x2923e4(0x206))[_0x2923e4(0x272)] && _0x23e092('.IG_DWNEWTAB')[_0x2923e4(0x307)](), _0x23e092(_0x2923e4(0x3a6))[_0x2923e4(0x272)] && _0x23e092('.IG_DWSTORY_THUMBNAIL')[_0x2923e4(0x307)](), _0x23e092(_0x2923e4(0x1e9))['length'] && _0x23e092(_0x2923e4(0x1e9))['remove'](), _0x23e092(_0x2923e4(0x1f1))[_0x2923e4(0x272)] && _0x23e092('.IG_DWHISTORY_ALL')[_0x2923e4(0x307)](), _0x23e092(_0x2923e4(0x3c1))[_0x2923e4(0x272)] && _0x23e092(_0x2923e4(0x3c1))[_0x2923e4(0x307)](), _0x23e092('.IG_DWHISTORY_THUMBNAIL')[_0x2923e4(0x272)] && _0x23e092(_0x2923e4(0x2c3))[_0x2923e4(0x307)]());
                }
                _0x2d2362(0x12c), _0x2938ed[_0x2923e4(0x1a5)] = new URL(location[_0x2923e4(0x1e2)])[_0x2923e4(0x31d)];
            }
        }, _0x356ff5);
        async function _0x1912c5() {
            const _0x1495de = _0x4b2cd0;
            _0x24d878(!![]);
            let _0x5b970a = new Date()[_0x1495de(0x261)](), _0x20a6a1 = Math['floor'](_0x5b970a / 0x3e8), _0x1ba809 = location[_0x1495de(0x1e2)][_0x1495de(0x35c)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x5bba3f = await _0x21a408(_0x1ba809), _0x173f71 = _0x5bba3f['data'][_0x1495de(0x358)][0x0]['owner']['username'], _0x10547e = 0x0;
            _0x43be1c(_0x10547e, _0x5bba3f[_0x1495de(0x231)][_0x1495de(0x358)][0x0][_0x1495de(0x1a4)][_0x1495de(0x272)]), _0x5bba3f[_0x1495de(0x231)][_0x1495de(0x358)][0x0][_0x1495de(0x1a4)][_0x1495de(0x1c2)]((_0x310cc7, _0x4fc422) => {
                setTimeout(() => {
                    const _0xf5ee1b = a0_0x499e;
                    _0xd68c62['RENAME_PUBLISH_DATE'] && (_0x20a6a1 = _0x310cc7['taken_at_timestamp']), _0x310cc7['display_resources'][_0xf5ee1b(0x2ef)](function (_0xbd4ec1, _0xdb45b1) {
                        const _0x22b552 = _0xf5ee1b;
                        if (_0xbd4ec1['config_width'] < _0xdb45b1[_0x22b552(0x3bb)])
                            return 0x1;
                        if (_0xbd4ec1['config_width'] > _0xdb45b1['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x310cc7[_0xf5ee1b(0x148)] ? _0x306fb5(_0x310cc7[_0xf5ee1b(0x3d0)][0x0][_0xf5ee1b(0x1b1)], _0x173f71, 'stories', _0x20a6a1, _0xf5ee1b(0x228), _0x310cc7['id'])[_0xf5ee1b(0x23a)](() => {
                        const _0x1bc212 = _0xf5ee1b;
                        _0x43be1c(++_0x10547e, _0x5bba3f[_0x1bc212(0x231)][_0x1bc212(0x358)][0x0][_0x1bc212(0x1a4)][_0x1bc212(0x272)]);
                    }) : _0x306fb5(_0x310cc7[_0xf5ee1b(0x388)][0x0]['src'], _0x173f71, 'stories', _0x20a6a1, 'jpg', _0x310cc7['id'])[_0xf5ee1b(0x23a)](() => {
                        const _0x4922e1 = _0xf5ee1b;
                        _0x43be1c(++_0x10547e, _0x5bba3f[_0x4922e1(0x231)]['reels_media'][0x0][_0x4922e1(0x1a4)]['length']);
                    });
                }, 0x64 * _0x4fc422);
            });
        }
        async function _0x8f5f81(_0x5ed275, _0x5c5d58) {
            const _0x365fa4 = _0x4b2cd0;
            var _0x116480 = _0x23e092(_0x365fa4(0x397))[_0x365fa4(0x20e)](function () {
                const _0x322463 = _0x365fa4;
                return _0x23e092(this)[_0x322463(0x379)](_0x322463(0x1e2))[_0x322463(0x36a)]('/')[_0x322463(0x20e)](_0x296175 => _0x296175[_0x322463(0x272)] > 0x0)[_0x322463(0x272)] === 0x1;
            })[_0x365fa4(0x27a)]()[_0x365fa4(0x379)](_0x365fa4(0x1e2))['split']('/')['filter'](_0x53c033 => _0x53c033[_0x365fa4(0x272)] > 0x0)['at'](0x0);
            if (_0x5ed275) {
                let _0x4428cb = new Date()[_0x365fa4(0x261)](), _0x4e34b8 = Math[_0x365fa4(0x2c5)](_0x4428cb / 0x3e8), _0x4b893b = location['href'][_0x365fa4(0x35c)](/\/$/ig, '')[_0x365fa4(0x36a)]('/')['at'](-0x1), _0xd002a7 = _0x23e092(_0x365fa4(0x3c2))[_0x365fa4(0x272)] || _0x23e092(_0x365fa4(0x1cf))['length'] || _0x23e092(_0x365fa4(0x2f9))[_0x365fa4(0x2da)](_0x365fa4(0x1a6))[_0x365fa4(0x272)], _0x156dda = 0x0;
                _0x24d878(!![]);
                if (_0x2938ed[_0x365fa4(0x353)][_0x365fa4(0x2aa)][_0x4b893b]) {
                    _0x274880(_0x365fa4(0x3d2), _0x4b893b);
                    let _0x4d71f1 = _0x2938ed[_0x365fa4(0x353)][_0x365fa4(0x2aa)][_0x4b893b][_0x365fa4(0x231)][_0x365fa4(0x358)][0x0][_0x365fa4(0x1a4)][_0x365fa4(0x272)];
                    _0x116480 = _0x2938ed[_0x365fa4(0x353)][_0x365fa4(0x2aa)][_0x4b893b][_0x365fa4(0x231)][_0x365fa4(0x358)][0x0]['owner'][_0x365fa4(0x1f9)], _0x156dda = _0x2938ed[_0x365fa4(0x353)][_0x365fa4(0x2aa)][_0x4b893b][_0x365fa4(0x231)]['reels_media'][0x0]['items'][_0x4d71f1 - _0xd002a7];
                } else {
                    let _0x2f9e80 = await _0x21a408(_0x4b893b), _0x16c26f = _0x2f9e80[_0x365fa4(0x231)]['reels_media'][0x0][_0x365fa4(0x1a4)][_0x365fa4(0x272)];
                    _0x116480 = _0x2f9e80['data']['reels_media'][0x0]['owner'][_0x365fa4(0x1f9)], _0x156dda = _0x2f9e80[_0x365fa4(0x231)]['reels_media'][0x0][_0x365fa4(0x1a4)][_0x16c26f - _0xd002a7], _0x2938ed[_0x365fa4(0x353)][_0x365fa4(0x2aa)][_0x4b893b] = _0x2f9e80;
                }
                _0x274880(_0x365fa4(0x23e), _0x4b893b, _0x2938ed[_0x365fa4(0x353)]['highlights'][_0x4b893b]);
                _0xd68c62[_0x365fa4(0x335)] && (_0x4e34b8 = _0x156dda[_0x365fa4(0x3c5)]);
                if (_0xd68c62['FORCE_RESOURCE_VIA_MEDIA'] && !_0x2938ed[_0x365fa4(0x2c0)]) {
                    let _0x5d460d = await _0x2d4e3b(_0x156dda['id']);
                    _0x5d460d['status'] === 'ok' ? _0x5d460d[_0x365fa4(0x1a4)][0x0]['video_versions'] ? _0x5c5d58 ? _0x239c68(_0x5d460d[_0x365fa4(0x1a4)][0x0]['video_versions'][0x0][_0x365fa4(0x334)]) : _0x306fb5(_0x5d460d['items'][0x0][_0x365fa4(0x212)][0x0][_0x365fa4(0x334)], _0x116480, _0x365fa4(0x2aa), _0x4e34b8, _0x365fa4(0x228), _0x5d460d['items'][0x0]['id']) : _0x5c5d58 ? _0x239c68(_0x5d460d[_0x365fa4(0x1a4)][0x0][_0x365fa4(0x19d)][_0x365fa4(0x383)][0x0][_0x365fa4(0x334)]) : _0x306fb5(_0x5d460d[_0x365fa4(0x1a4)][0x0][_0x365fa4(0x19d)][_0x365fa4(0x383)][0x0]['url'], _0x116480, _0x365fa4(0x2aa), _0x4e34b8, _0x365fa4(0x1ec), _0x5d460d['items'][0x0]['id']) : (_0xd68c62[_0x365fa4(0x325)] ? (delete _0x2938ed[_0x365fa4(0x353)][_0x365fa4(0x2aa)][_0x4b893b], _0x2938ed[_0x365fa4(0x2c0)] = !![], _0x8f5f81(!![], _0x5c5d58)) : alert(_0x365fa4(0x226) + _0x5d460d[_0x365fa4(0x33e)]), _0x274880(_0x5d460d));
                } else
                    _0x156dda[_0x365fa4(0x148)] ? _0x5c5d58 ? _0x239c68(_0x156dda[_0x365fa4(0x3d0)]['at'](-0x1)['src'], _0x116480) : _0x306fb5(_0x156dda[_0x365fa4(0x3d0)]['at'](-0x1)[_0x365fa4(0x1b1)], _0x116480, _0x365fa4(0x2aa), _0x4e34b8, _0x365fa4(0x228), _0x156dda['id']) : _0x5c5d58 ? _0x239c68(_0x156dda['display_resources']['at'](-0x1)['src'], _0x116480) : _0x306fb5(_0x156dda['display_resources']['at'](-0x1)[_0x365fa4(0x1b1)], _0x116480, _0x365fa4(0x2aa), _0x4e34b8, _0x365fa4(0x1ec), _0x156dda['id']), _0x2938ed[_0x365fa4(0x2c0)] = ![];
                _0x24d878(![]);
            } else {
                if (!_0x23e092(_0x365fa4(0x1e9))[_0x365fa4(0x272)]) {
                    let _0x43438a = null;
                    _0x23e092(_0x365fa4(0x15f))[_0x365fa4(0x272)] > 0x0 ? _0x43438a = _0x23e092(_0x365fa4(0x27e)) : (_0x43438a = _0x23e092('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x43438a['css'](_0x365fa4(0x1eb), _0x365fa4(0x20d)));
                    if (_0x43438a['length'] === 0x0) {
                        let _0x96b0f2 = _0x23e092(_0x365fa4(0x181)), _0x17f281 = 0x0;
                        _0x96b0f2[_0x365fa4(0x277)](function () {
                            const _0x364bf6 = _0x365fa4;
                            _0x23e092(this)[_0x364bf6(0x1f5)]() > _0x17f281 && (_0x17f281 = _0x23e092(this)[_0x364bf6(0x1f5)](), _0x43438a = _0x23e092(this)['children'](_0x364bf6(0x200))['first']());
                        });
                    }
                    if (_0x43438a != null) {
                        _0x43438a[_0x365fa4(0x2f1)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x31ce74('DW') + _0x365fa4(0x1fd) + _0x30a673['DOWNLOAD'] + _0x365fa4(0x3ce)), _0x43438a[_0x365fa4(0x2f1)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x31ce74(_0x365fa4(0x257)) + _0x365fa4(0x37a) + _0x30a673['NEW_TAB'] + _0x365fa4(0x3ce));
                        let _0xdf3700 = _0x509043(_0x116480);
                        _0xdf3700['length'] > 0x1 && _0x43438a[_0x365fa4(0x2f1)](_0x365fa4(0x380) + _0x31ce74(_0x365fa4(0x284)) + _0x365fa4(0x2ab) + _0x30a673[_0x365fa4(0x246)] + _0x365fa4(0x3ce)), _0x43438a['find'](_0x365fa4(0x2af))[_0x365fa4(0x277)](function () {
                            const _0x515eff = _0x365fa4;
                            _0x23e092(this)['on'](_0x515eff(0x2f0), function () {
                                const _0x3b8333 = _0x515eff;
                                !_0x23e092(this)['data'](_0x3b8333(0x385)) && (_0x43438a['find']('.IG_DWHISTORY_THUMBNAIL')['length'] === 0x0 ? (_0x23e092(this)[_0x3b8333(0x379)](_0x3b8333(0x182), !![]), _0x23e092('.IG_DWHISTORY_THUMBNAIL')['remove'](), _0x274880(_0x3b8333(0x398))) : (_0x23e092(this)[_0x3b8333(0x379)]('data-remove-thumbnail', !![]), _0x274880(_0x3b8333(0x305))));
                            });
                        });
                    }
                }
            }
        }
        async function _0xb9d3ad(_0x1cbe68) {
            const _0x2acc07 = _0x4b2cd0;
            if (_0x1cbe68) {
                let _0x234209 = new Date()['getTime'](), _0x12aa58 = Math[_0x2acc07(0x2c5)](_0x234209 / 0x3e8), _0x57965a = location[_0x2acc07(0x1e2)]['replace'](/\/$/ig, '')[_0x2acc07(0x36a)]('/')['at'](-0x1), _0x120c13 = '', _0x1f7626 = _0x23e092(_0x2acc07(0x3c2))[_0x2acc07(0x272)] || _0x23e092('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x2acc07(0x272)] || _0x23e092(_0x2acc07(0x2f9))[_0x2acc07(0x2da)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')['length'], _0x280e2b = '';
                _0x24d878(!![]);
                if (_0x2938ed['GL_dataCache'][_0x2acc07(0x2aa)][_0x57965a]) {
                    _0x274880(_0x2acc07(0x3d2), _0x57965a);
                    let _0x370c43 = _0x2938ed[_0x2acc07(0x353)][_0x2acc07(0x2aa)][_0x57965a][_0x2acc07(0x231)][_0x2acc07(0x358)][0x0][_0x2acc07(0x1a4)][_0x2acc07(0x272)];
                    _0x120c13 = _0x2938ed['GL_dataCache'][_0x2acc07(0x2aa)][_0x57965a]['data'][_0x2acc07(0x358)][0x0][_0x2acc07(0x366)][_0x2acc07(0x1f9)], _0x280e2b = _0x2938ed[_0x2acc07(0x353)]['highlights'][_0x57965a]['data'][_0x2acc07(0x358)][0x0][_0x2acc07(0x1a4)][_0x370c43 - _0x1f7626];
                } else {
                    let _0x1de42f = await _0x21a408(_0x57965a), _0xa61796 = _0x1de42f[_0x2acc07(0x231)][_0x2acc07(0x358)][0x0][_0x2acc07(0x1a4)][_0x2acc07(0x272)];
                    _0x120c13 = _0x1de42f[_0x2acc07(0x231)][_0x2acc07(0x358)][0x0][_0x2acc07(0x366)]['username'], _0x280e2b = _0x1de42f[_0x2acc07(0x231)][_0x2acc07(0x358)][0x0][_0x2acc07(0x1a4)][_0xa61796 - _0x1f7626], _0x2938ed['GL_dataCache'][_0x2acc07(0x2aa)][_0x57965a] = _0x1de42f;
                }
                _0xd68c62[_0x2acc07(0x335)] && (_0x12aa58 = _0x280e2b[_0x2acc07(0x3c5)]);
                if (_0xd68c62[_0x2acc07(0x203)] && !_0x2938ed[_0x2acc07(0x2c0)]) {
                    let _0x2e855f = await _0x2d4e3b(_0x280e2b['id']);
                    _0x2e855f[_0x2acc07(0x1aa)] === 'ok' ? _0x306fb5(_0x2e855f[_0x2acc07(0x1a4)][0x0]['image_versions2'][_0x2acc07(0x383)][0x0][_0x2acc07(0x334)], _0x120c13, _0x2acc07(0x2aa), _0x12aa58, 'jpg', _0x57965a) : (_0xd68c62[_0x2acc07(0x325)] ? (delete _0x2938ed[_0x2acc07(0x353)][_0x2acc07(0x2aa)][_0x57965a], _0x2938ed['tempFetchRateLimit'] = !![], _0xb9d3ad(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x2e855f[_0x2acc07(0x33e)]), _0x274880(_0x2e855f));
                } else
                    _0x306fb5(_0x280e2b[_0x2acc07(0x388)]['at'](-0x1)['src'], _0x120c13, 'highlights', _0x12aa58, _0x2acc07(0x1ec), _0x57965a), _0x2938ed[_0x2acc07(0x2c0)] = ![];
                _0x24d878(![]);
            } else {
                if (_0x23e092(_0x2acc07(0x3b7))[_0x2acc07(0x272)]) {
                    if (!_0x23e092(_0x2acc07(0x2c3))[_0x2acc07(0x272)]) {
                        let _0x361964 = null;
                        _0x23e092(_0x2acc07(0x15f))[_0x2acc07(0x272)] > 0x0 ? _0x361964 = _0x23e092(_0x2acc07(0x27e)) : (_0x361964 = _0x23e092(_0x2acc07(0x25e)), _0x361964['css'](_0x2acc07(0x1eb), 'relative'));
                        if (_0x361964[_0x2acc07(0x272)] === 0x0) {
                            let _0xa818aa = _0x23e092(_0x2acc07(0x181)), _0x499ae5 = 0x0;
                            _0xa818aa[_0x2acc07(0x277)](function () {
                                const _0x20bf01 = _0x2acc07;
                                _0x23e092(this)[_0x20bf01(0x1f5)]() > _0x499ae5 && (_0x499ae5 = _0x23e092(this)[_0x20bf01(0x1f5)](), _0x361964 = _0x23e092(this)['children']('div')[_0x20bf01(0x27a)]());
                            });
                        }
                        _0x361964 != null && _0x361964[_0x2acc07(0x2f1)](_0x2acc07(0x3a7) + _0x31ce74(_0x2acc07(0x3a2)) + _0x2acc07(0x1da) + _0x30a673[_0x2acc07(0x13e)] + _0x2acc07(0x3ce));
                    }
                } else
                    _0x23e092('.IG_DWHISTORY_THUMBNAIL')[_0x2acc07(0x307)]();
            }
        }
        function _0x1089da(_0x306144, _0x3e29dc) {
            const _0x5e1847 = _0x4b2cd0;
            _0x3e29dc === !![] && (_0x274880(_0x5e1847(0x173), _0x5e1847(0x3cc)), _0x23e092(_0x5e1847(0x2a2))[_0x5e1847(0x20e)](function () {
                const _0x324388 = _0x5e1847;
                return _0x23e092(this)[_0x324388(0x2da)]('.IG_DW_MAIN')[_0x324388(0x272)] === 0x0;
            })[_0x5e1847(0x276)](_0x5e1847(0x314)));
            if (_0x306144 == ![]) {
                const _0x3a683b = 0x64;
                let _0x1fb795 = 0x0;
                var _0x59c279 = setInterval(() => {
                    const _0x3180a5 = _0x5e1847;
                    (_0x1fb795 > _0x3a683b || _0x23e092(_0x3180a5(0x1d1))[_0x3180a5(0x272)] > 0x0) && (clearInterval(_0x59c279), _0x1fb795 > _0x3a683b && console[_0x3180a5(0x344)](_0x3180a5(0x20a), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x274880(_0x3180a5(0x20a), _0x3180a5(0x19a)), _0x5de9cb(), _0x1fb795++;
                }, 0x32);
            } else
                _0x5de9cb();
        }
        function _0x310159(_0x22781d) {
            const _0x55e1c3 = _0x4b2cd0;
            _0xd68c62[_0x55e1c3(0x194)] && _0x22781d['find'](_0x55e1c3(0x143))['each'](function () {
                const _0x2ca295 = _0x55e1c3;
                _0x23e092(this)['on'](_0x2ca295(0x3bc), function () {
                    const _0x29607d = _0x2ca295;
                    !_0x23e092(this)[_0x29607d(0x231)](_0x29607d(0x188)) && (_0x23e092(this)[_0x29607d(0x379)]('data-loop', !![]), this[_0x29607d(0x2ce)](), _0x274880(_0x29607d(0x14a)));
                });
            });
            _0xd68c62[_0x55e1c3(0x1f0)] && _0x22781d[_0x55e1c3(0x2da)](_0x55e1c3(0x143))[_0x55e1c3(0x277)](function () {
                const _0x4e6758 = _0x55e1c3;
                _0x23e092(this)['on'](_0x4e6758(0x3d5), function () {
                    const _0x388b81 = _0x4e6758;
                    !_0x23e092(this)['data'](_0x388b81(0x16e)) && (_0x23e092(this)['attr'](_0x388b81(0x3ad), !![]), this[_0x388b81(0x1d7)] = _0x2938ed[_0x388b81(0x20b)], _0x274880(_0x388b81(0x265)));
                });
            });
            _0xd68c62[_0x55e1c3(0x214)] && _0x22781d[_0x55e1c3(0x2da)](_0x55e1c3(0x143))[_0x55e1c3(0x277)](function () {
                const _0x5ba387 = _0x55e1c3;
                if (!_0x23e092(this)[_0x5ba387(0x231)](_0x5ba387(0x3d8))) {
                    let _0x3e0b46 = _0x23e092(this);
                    _0x274880(_0x5ba387(0x2b4)), _0xd68c62['MODIFY_VIDEO_VOLUME'] && (this[_0x5ba387(0x1d7)] = _0x2938ed['videoVolume'], _0x23e092(this)['on'](_0x5ba387(0x1bb), function () {
                        const _0x5201f2 = _0x5ba387;
                        this[_0x5201f2(0x1d7)] = _0x2938ed[_0x5201f2(0x20b)];
                    })), _0x23e092(this)['on']('contextmenu', function (_0x4be9ff) {
                        const _0x5cf280 = _0x5ba387;
                        _0x4be9ff[_0x5cf280(0x2de)](), _0x3e0b46[_0x5cf280(0x223)](_0x5cf280(0x17c), '-1'), _0x3e0b46[_0x5cf280(0x276)](_0x5cf280(0x3d8));
                    }), _0x23e092(this)[_0x5ba387(0x3a1)]()[_0x5ba387(0x2da)](_0x5ba387(0x348))[_0x5ba387(0x27a)]()['on']('contextmenu', function (_0x2cdf3b) {
                        const _0x39f105 = _0x5ba387;
                        _0x2cdf3b['preventDefault'](), _0x3e0b46[_0x39f105(0x223)](_0x39f105(0x17c), '2'), _0x3e0b46[_0x39f105(0x379)]('controls', !![]);
                    }), _0x23e092(this)['on'](_0x5ba387(0x323), function () {
                        const _0x45f0c1 = _0x5ba387;
                        let _0x50bcf9 = _0x23e092(this)[_0x45f0c1(0x3a1)]()[_0x45f0c1(0x2da)]('video\x20+\x20div\x20>\x20div')[_0x45f0c1(0x2da)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x45f0c1(0x20e)](function (_0x14c37f) {
                            const _0x523bec = _0x45f0c1;
                            return _0x23e092(this)['width']() <= 0x40 && _0x23e092(this)['height']() <= 0x40 && _0x23e092(this)['find'](_0x523bec(0x38b))['length'] > 0x0;
                        });
                        var _0x10de66 = _0x50bcf9[_0x45f0c1(0x2da)](_0x45f0c1(0x2d6))[_0x45f0c1(0x272)] === 0x0;
                        this['muted'] != _0x10de66 && (this['volume'] = _0x2938ed[_0x45f0c1(0x20b)], _0x50bcf9?.[_0x45f0c1(0x370)](_0x45f0c1(0x1d0))), _0x23e092(this)[_0x45f0c1(0x379)](_0x45f0c1(0x1fb)) && (_0x2938ed[_0x45f0c1(0x20b)] = this[_0x45f0c1(0x1d7)], GM_setValue(_0x45f0c1(0x1ee), this[_0x45f0c1(0x1d7)])), this[_0x45f0c1(0x1d7)] == _0x2938ed[_0x45f0c1(0x20b)] && _0x23e092(this)[_0x45f0c1(0x379)](_0x45f0c1(0x1fb), !![]);
                    }), _0x23e092(this)[_0x5ba387(0x223)](_0x5ba387(0x1eb), _0x5ba387(0x1a8)), _0x23e092(this)[_0x5ba387(0x223)]('z-index', '2'), _0x23e092(this)[_0x5ba387(0x379)](_0x5ba387(0x1b3), !![]), _0x23e092(this)[_0x5ba387(0x379)](_0x5ba387(0x3d8), !![]);
                }
            });
            var _0x534c9a = _0x22781d[_0x55e1c3(0x2da)]('video'), _0x44bfa4 = _0x22781d[_0x55e1c3(0x2da)]('video\x20+\x20div\x20>\x20div')['first']();
            _0x2404a9(_0x534c9a, _0x44bfa4, _0x55e1c3(0x365), _0x55e1c3(0x16a));
        }
        ;
        function _0x5de9cb() {
            const _0x4c932f = _0x4b2cd0;
            _0x23e092(_0x4c932f(0x32e))['map'](function (_0x119147) {
                const _0x3e95d7 = _0x4c932f;
                return _0x23e092(this)['is'](_0x3e95d7(0x2e2)) ? _0x23e092(this)['parent']()[_0x3e95d7(0x3a1)]()[_0x3e95d7(0x3a1)]()['parent']()[0x0] : this;
            })[_0x4c932f(0x20e)](function () {
                const _0x19bfbf = _0x4c932f;
                return _0x23e092(this)[_0x19bfbf(0x1d8)]() > 0x0 && _0x23e092(this)[_0x19bfbf(0x1f5)]() > 0x0;
            })[_0x4c932f(0x277)](function (_0x5394b1) {
                const _0x3c851b = _0x4c932f;
                if (!_0x23e092(this)['attr']('data-snig') && !_0x23e092(this)[_0x3c851b(0x262)](_0x3c851b(0x3b4)) && !_0x23e092(this)['children'](_0x3c851b(0x1db))?.['hasClass'](_0x3c851b(0x3b4)) && _0x23e092(this)['parents']('div#scrollview')[_0x3c851b(0x272)] === 0x0) {
                    _0x274880(_0x3c851b(0x39d), _0x23e092(this));
                    const _0x3537ea = _0x23e092(this), _0x4e7f5e = this[_0x3c851b(0x2a9)], _0x6baea = _0x3c851b(0x3c3);
                    var _0x5bcfe7;
                    if (_0x4e7f5e === _0x3c851b(0x3ca) && _0x5394b1 != 0x0)
                        return;
                    const _0xf87375 = _0x3537ea[_0x3c851b(0x2fb)](_0x3c851b(0x200))[_0x3c851b(0x2fb)](_0x3c851b(0x200));
                    if (_0xf87375[_0x3c851b(0x272)] === 0x0)
                        return;
                    _0x274880(_0x3c851b(0x245), _0xf87375);
                    if (_0x3537ea[_0x3c851b(0x2da)](_0x3c851b(0x1e7))[_0x3c851b(0x272)] > 0x0) {
                        _0x3537ea[_0x3c851b(0x2da)](_0x3c851b(0x2ec))['length'] > 0x0 && _0x3537ea[_0x3c851b(0x2da)](_0x3c851b(0x2ec))[_0x3c851b(0x223)]('top', _0x3c851b(0x1c6));
                        const _0x1fe14f = _0x3537ea['find']('._acay')[_0x3c851b(0x27a)]()[_0x3c851b(0x3a1)]()[0x0];
                        var _0x33154b = new MutationObserver(function () {
                            const _0x43650b = _0x3c851b;
                            _0x3537ea[_0x43650b(0x2da)](_0x43650b(0x2ec))['css'](_0x43650b(0x322), _0x43650b(0x1c6));
                        });
                        _0x33154b[_0x3c851b(0x367)](_0x1fe14f, { 'childList': !![] });
                    }
                    _0xf87375['eq'](_0x4e7f5e === _0x3c851b(0x3ca) ? 0x0 : _0xf87375['length'] - 0x2)[_0x3c851b(0x2f1)](_0x3c851b(0x346));
                    const _0x13c56d = _0x3c851b(0x19e) + _0x31ce74('DW') + _0x3c851b(0x15d) + _0x30a673[_0x3c851b(0x141)] + _0x3c851b(0x3ce), _0x2e0642 = _0x3c851b(0x3c9) + _0x31ce74(_0x3c851b(0x257)) + '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>' + _0x30a673[_0x3c851b(0x257)] + _0x3c851b(0x3ce), _0x8966f6 = _0x3c851b(0x3a7) + _0x31ce74(_0x3c851b(0x3a2)) + _0x3c851b(0x1fc) + _0x30a673[_0x3c851b(0x13e)] + _0x3c851b(0x3ce), _0x4c9c2a = '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22' + _0x31ce74(_0x3c851b(0x2fa)) + _0x3c851b(0x2f6) + _0x30a673[_0x3c851b(0x1e8)] + _0x3c851b(0x3ce);
                    _0xf87375[_0x3c851b(0x2da)](_0x3c851b(0x30a))['append'](_0x13c56d);
                    const _0x9873ff = _0x3537ea['find'](_0x6baea)[_0x3c851b(0x272)];
                    if (_0x9873ff > 0x1 && _0xd68c62[_0x3c851b(0x14f)] && !_0xd68c62['DIRECT_DOWNLOAD_ALL']) {
                        const _0x24e649 = '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x31ce74(_0x3c851b(0x284)) + '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>' + _0x30a673[_0x3c851b(0x246)] + '</div>';
                        _0xf87375['find'](_0x3c851b(0x30a))['append'](_0x24e649);
                    }
                    _0xf87375['find']('.button_wrapper')['append'](_0x2e0642), setTimeout(() => {
                        const _0x23e619 = _0x3c851b;
                        if (_0xf87375['eq'](_0x4e7f5e === 'DIV' ? 0x0 : _0xf87375[_0x23e619(0x272)] - 0x2)[_0x23e619(0x2da)](_0x23e619(0x3d6))[_0x23e619(0x272)] === 0x0)
                            _0xf87375[_0x23e619(0x2da)]('video')[_0x23e619(0x272)] > 0x0 ? _0xf87375['find'](_0x23e619(0x30a))['append'](_0x8966f6) : (_0x5bcfe7 = _0x3537ea[_0x23e619(0x2da)](_0x23e619(0x1c3))[_0x23e619(0x20e)](function () {
                                const _0x2d842f = _0x23e619;
                                return _0x23e092(this)[_0x2d842f(0x1f5)]() > 0xc8 && _0x23e092(this)[_0x2d842f(0x1d8)]() > 0xc8;
                            })['attr'](_0x23e619(0x1b1)), _0xf87375['find'](_0x23e619(0x30a))['append'](_0x4c9c2a));
                        else {
                            const _0x3b7fd7 = (_0x366ae2, _0x2fac84) => {
                                    _0x366ae2['forEach'](_0x458db9 => {
                                        const _0x251526 = a0_0x499e;
                                        if (_0x458db9['isIntersecting']) {
                                            var _0x11cf09 = _0x23e092(_0x458db9[_0x251526(0x26a)]);
                                            _0xf87375[_0x251526(0x2da)](_0x251526(0x248))?.['remove'](), _0xf87375[_0x251526(0x2da)]('.IG_IMAGE_VIEWER')?.[_0x251526(0x307)](), _0x11cf09[_0x251526(0x2da)](_0x251526(0x143))[_0x251526(0x272)] > 0x0 ? (_0xf87375[_0x251526(0x2da)](_0x251526(0x248))[_0x251526(0x272)] === 0x0 && _0xf87375[_0x251526(0x2da)]('.button_wrapper')[_0x251526(0x2f1)](_0x8966f6), _0x310159(_0x3537ea)) : (_0x5bcfe7 = _0x11cf09[_0x251526(0x2da)](_0x251526(0x1c3))[_0x251526(0x379)](_0x251526(0x1b1)), _0xf87375[_0x251526(0x2da)]('.button_wrapper')[_0x251526(0x2f1)](_0x4c9c2a));
                                        }
                                    });
                                }, _0x366167 = new IntersectionObserver(_0x3b7fd7, {
                                    'root': _0x3537ea[_0x23e619(0x2da)](_0x23e619(0x389))[_0x23e619(0x27a)]()[_0x23e619(0x3a1)]()[_0x23e619(0x3a1)]()[_0x23e619(0x3a1)]()[0x0],
                                    'rootMargin': _0x23e619(0x1a7),
                                    'threshold': 0.1
                                }), _0x35a57d = new MutationObserver(function (_0x4601ac, _0x383062) {
                                    const _0xf70f1f = _0x23e619;
                                    var _0x50dbf0 = _0x4601ac['at'](0x0)?.[_0xf70f1f(0x26a)];
                                    _0x23e092(_0x50dbf0)[_0xf70f1f(0x2da)](_0xf70f1f(0x18f))['each'](function () {
                                        const _0x261856 = _0xf70f1f;
                                        _0x366167[_0x261856(0x367)](this);
                                    });
                                });
                            _0x3537ea['find'](_0x23e619(0x3d6))[_0x23e619(0x277)](function () {
                                const _0x53f956 = _0x23e619;
                                _0x366167[_0x53f956(0x367)](this);
                            });
                            const _0x48b395 = _0xf87375['eq'](_0x4e7f5e === _0x23e619(0x3ca) ? 0x0 : _0xf87375[_0x23e619(0x272)] - 0x2)[_0x23e619(0x2da)](_0x23e619(0x3d6))?.[_0x23e619(0x3a1)]()[0x0], _0x1cc1e3 = _0xf87375['eq'](_0x4e7f5e === _0x23e619(0x3ca) ? 0x0 : _0xf87375[_0x23e619(0x272)] - 0x2)[_0x23e619(0x2da)](_0x23e619(0x3d6))?.[_0x23e619(0x3a1)]()[_0x23e619(0x3a1)]()[0x0];
                            _0x48b395 && _0x35a57d['observe'](_0x48b395, { 'childList': !![] }), _0x1cc1e3 && _0x35a57d['observe'](_0x1cc1e3, { 'attributes': !![] });
                        }
                    }, 0x32), _0xf87375['css'](_0x3c851b(0x1eb), _0x3c851b(0x20d)), _0x310159(_0x3537ea), _0x2938ed['GL_registerEventList'][_0x3c851b(0x1d4)]({
                        'element': this,
                        'trigger': [
                            _0x3c851b(0x248),
                            _0x3c851b(0x3be),
                            '.IG_DW_ALL_MAIN',
                            _0x3c851b(0x162),
                            _0x3c851b(0x269)
                        ]
                    }), _0x23e092(this)['on'](_0x3c851b(0x1d0), _0x3c851b(0x269), function () {
                        const _0x5c0bf6 = _0x3c851b;
                        _0x5bcfe7 != null ? _0x2dfa95(_0x5bcfe7) : alert(_0x5c0bf6(0x2a7));
                    }), _0x23e092(this)['on'](_0x3c851b(0x1d0), _0x3c851b(0x248), function () {
                        const _0x11fbb4 = _0x3c851b;
                        _0x24d878(!![]), _0x2938ed[_0x11fbb4(0x34f)] = _0x3537ea[_0x11fbb4(0x379)](_0x11fbb4(0x288)), _0x2938ed[_0x11fbb4(0x15a)] = location[_0x11fbb4(0x31d)][_0x11fbb4(0x35c)](/\/$/, '')[_0x11fbb4(0x36a)]('/')['at'](-0x1) || _0x3537ea[_0x11fbb4(0x2da)](_0x11fbb4(0x22b))['first']()['attr']('href')[_0x11fbb4(0x36a)]('/')['at'](0x2) || _0x23e092(this)[_0x11fbb4(0x3a1)]()[_0x11fbb4(0x3a1)]()[_0x11fbb4(0x3a1)]()[_0x11fbb4(0x2fb)](_0x11fbb4(0x297))['children'](_0x11fbb4(0x200))[_0x11fbb4(0x2fb)](_0x11fbb4(0x297))[_0x11fbb4(0x2da)](_0x11fbb4(0x22b))[_0x11fbb4(0x1d6)]()[_0x11fbb4(0x379)](_0x11fbb4(0x1e2))[_0x11fbb4(0x36a)]('/')['at'](0x2);
                        var _0xc9d1e6 = _0x22025a(_0x3537ea);
                        _0x24846d(!![], ![]), _0x3b8a83(_0x2938ed[_0x11fbb4(0x15a)], _0x11fbb4(0x18c), '')[_0x11fbb4(0x23a)](() => {
                            let _0x50624f = setInterval(() => {
                                const _0x30174a = a0_0x499e;
                                if (_0x23e092(_0x30174a(0x1c0))[_0x30174a(0x272)] > 0x0) {
                                    clearInterval(_0x50624f);
                                    var _0x4c88f7 = _0x23e092(_0x30174a(0x3c6) + (_0xc9d1e6 + 0x1) + '\x22]')?.[_0x30174a(0x3a1)]()[_0x30174a(0x2da)]('.videoThumbnail')?.[_0x30174a(0x27a)]();
                                    _0x4c88f7 != null && _0x4c88f7[_0x30174a(0x272)] > 0x0 ? _0x4c88f7[_0x30174a(0x370)](_0x30174a(0x1d0)) : alert(_0x30174a(0x384)), _0x24d878(![]), _0x23e092(_0x30174a(0x197))[_0x30174a(0x307)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x23e092(this)['on'](_0x3c851b(0x1d0), _0x3c851b(0x3be), function () {
                        const _0x2c4cfa = _0x3c851b;
                        _0x24d878(!![]), _0x2938ed['GL_username'] = _0x3537ea[_0x2c4cfa(0x379)]('data-username'), _0x2938ed[_0x2c4cfa(0x15a)] = location[_0x2c4cfa(0x31d)][_0x2c4cfa(0x35c)](/\/$/, '')[_0x2c4cfa(0x36a)]('/')['at'](-0x1) || _0x3537ea[_0x2c4cfa(0x2da)](_0x2c4cfa(0x22b))[_0x2c4cfa(0x27a)]()['attr']('href')['split']('/')['at'](0x2) || _0x23e092(this)[_0x2c4cfa(0x3a1)]()[_0x2c4cfa(0x3a1)]()['parent']()[_0x2c4cfa(0x2fb)](_0x2c4cfa(0x297))[_0x2c4cfa(0x2fb)](_0x2c4cfa(0x200))['children'](_0x2c4cfa(0x297))[_0x2c4cfa(0x2da)]('a[href^=\x22/p/\x22]')[_0x2c4cfa(0x1d6)]()[_0x2c4cfa(0x379)](_0x2c4cfa(0x1e2))[_0x2c4cfa(0x36a)]('/')['at'](0x2);
                        var _0x487775 = _0x22025a(_0x3537ea);
                        _0x24846d(!![], ![]), _0x3b8a83(_0x2938ed['GL_postPath'], _0x2c4cfa(0x18c), '')[_0x2c4cfa(0x23a)](() => {
                            let _0x3238af = setInterval(() => {
                                const _0x2e93ec = a0_0x499e;
                                if (_0x23e092(_0x2e93ec(0x1c0))[_0x2e93ec(0x272)] > 0x0) {
                                    clearInterval(_0x3238af);
                                    var _0x4868cd = _0x23e092(_0x2e93ec(0x3c6) + (_0x487775 + 0x1) + '\x22]');
                                    if (_0xd68c62[_0x2e93ec(0x203)] && _0xd68c62[_0x2e93ec(0x301)])
                                        _0x43e921(_0x4868cd[_0x2e93ec(0x27a)]()[0x0], !![]);
                                    else {
                                        let _0xff7d03 = _0x4868cd?.['attr']('data-href');
                                        if (_0xff7d03) {
                                            var _0xd09c73 = new URL(_0xff7d03);
                                            _0xd09c73[_0x2e93ec(0x312)] = _0x2e93ec(0x378), _0x239c68(_0xd09c73[_0x2e93ec(0x1e2)]);
                                        } else
                                            alert('Can\x20not\x20find\x20open\x20tab\x20url.');
                                    }
                                    _0x24d878(![]), _0x23e092('.IG_POPUP_DIG')[_0x2e93ec(0x307)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x23e092(this)['on'](_0x3c851b(0x1d0), '.IG_DW_ALL_MAIN', async function () {
                        const _0x19c4e2 = _0x3c851b;
                        _0x2938ed['GL_username'] = _0x3537ea[_0x19c4e2(0x379)]('data-username'), _0x2938ed[_0x19c4e2(0x15a)] = location[_0x19c4e2(0x31d)][_0x19c4e2(0x35c)](/\/$/, '')['split']('/')['at'](-0x1) || _0x3537ea[_0x19c4e2(0x2da)](_0x19c4e2(0x22b))[_0x19c4e2(0x27a)]()[_0x19c4e2(0x379)](_0x19c4e2(0x1e2))[_0x19c4e2(0x36a)]('/')['at'](0x2) || _0x23e092(this)['parent']()[_0x19c4e2(0x3a1)]()[_0x19c4e2(0x3a1)]()['children'](_0x19c4e2(0x297))[_0x19c4e2(0x2fb)](_0x19c4e2(0x200))[_0x19c4e2(0x2fb)]('div:last-child')[_0x19c4e2(0x2da)]('a[href^=\x22/p/\x22]')[_0x19c4e2(0x1d6)]()[_0x19c4e2(0x379)]('href')['split']('/')['at'](0x2), _0x24846d(_0xd68c62[_0x19c4e2(0x2ca)], !![]), _0x23e092(_0x19c4e2(0x3b2))['html'](_0x19c4e2(0x24e) + _0x2938ed[_0x19c4e2(0x15a)] + '\x22>' + _0x2938ed[_0x19c4e2(0x15a)] + _0x19c4e2(0x342)), _0x23e092(_0x19c4e2(0x1c0))[_0x19c4e2(0x277)](function () {
                            const _0x4c9a08 = _0x19c4e2;
                            _0x23e092(this)[_0x4c9a08(0x1ab)](_0x4c9a08(0x2cc)), _0x23e092(this)[_0x4c9a08(0x185)](_0x4c9a08(0x1df)), _0x23e092(this)['after'](_0x4c9a08(0x3c9) + _0x31ce74('NEW_TAB') + _0x4c9a08(0x3af) + _0x30a673[_0x4c9a08(0x257)] + _0x4c9a08(0x3ce)), _0x23e092(this)[_0x4c9a08(0x379)]('data-name') == _0x4c9a08(0x143) && _0x23e092(this)[_0x4c9a08(0x2cb)](_0x4c9a08(0x3a7) + _0x31ce74(_0x4c9a08(0x3a2)) + _0x4c9a08(0x3ab) + _0x30a673[_0x4c9a08(0x13e)] + _0x4c9a08(0x3ce));
                        }), _0x3b8a83(_0x2938ed[_0x19c4e2(0x15a)], _0x19c4e2(0x18c), _0x31ce74(_0x19c4e2(0x14c)))[_0x19c4e2(0x23a)](() => {
                            let _0x33cf1e = setInterval(() => {
                                const _0x4b24cd = a0_0x499e;
                                _0x23e092(_0x4b24cd(0x1c0))[_0x4b24cd(0x272)] > 0x0 && (clearInterval(_0x33cf1e), _0x23e092(_0x4b24cd(0x1c0))[_0x4b24cd(0x277)](function () {
                                    const _0x537658 = _0x4b24cd;
                                    _0x23e092(this)['trigger'](_0x537658(0x1d0));
                                }), _0x23e092(_0x4b24cd(0x197))[_0x4b24cd(0x307)]());
                            }, 0xfa);
                        });
                    }), _0x23e092(this)['on'](_0x3c851b(0x1d0), _0x3c851b(0x162), async function () {
                        const _0xe422a1 = _0x3c851b;
                        _0x2938ed[_0xe422a1(0x34f)] = _0x3537ea['attr'](_0xe422a1(0x288)), _0x2938ed[_0xe422a1(0x15a)] = location[_0xe422a1(0x31d)][_0xe422a1(0x35c)](/\/$/, '')[_0xe422a1(0x36a)]('/')['at'](-0x1) || _0x3537ea[_0xe422a1(0x2da)](_0xe422a1(0x22b))[_0xe422a1(0x27a)]()[_0xe422a1(0x379)]('href')[_0xe422a1(0x36a)]('/')['at'](0x2) || _0x23e092(this)[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()[_0xe422a1(0x2fb)](_0xe422a1(0x297))['children']('div')[_0xe422a1(0x2fb)]('div:last-child')['find'](_0xe422a1(0x22b))['last']()[_0xe422a1(0x379)](_0xe422a1(0x1e2))[_0xe422a1(0x36a)]('/')['at'](0x2), _0x24846d(_0xd68c62[_0xe422a1(0x2ca)], !![]), _0x23e092(_0xe422a1(0x3b2))['html']('<a\x20href=\x22https://www.instagram.com/p/' + _0x2938ed[_0xe422a1(0x15a)] + '\x22>' + _0x2938ed[_0xe422a1(0x15a)] + _0xe422a1(0x342));
                        if (_0xd68c62[_0xe422a1(0x14f)]) {
                            _0x24d878(!![]), _0x186a6f(!![]);
                            var _0x3e6171 = _0x22025a(_0x23e092(this)[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]());
                            _0x3b8a83(_0x2938ed[_0xe422a1(0x15a)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0xe422a1(0x23a)](() => {
                                let _0xce4686 = setInterval(() => {
                                    const _0x597876 = a0_0x499e;
                                    if (_0x23e092(_0x597876(0x1c0))[_0x597876(0x272)] > 0x0) {
                                        clearInterval(_0xce4686);
                                        var _0x13d4c4 = _0x23e092(_0x597876(0x3c6) + (_0x3e6171 + 0x1) + '\x22]')?.[_0x597876(0x379)](_0x597876(0x35b));
                                        _0x13d4c4 ? (_0x24d878(![]), _0x23e092(_0x597876(0x3c6) + (_0x3e6171 + 0x1) + '\x22]')?.[_0x597876(0x370)](_0x597876(0x1d0))) : alert('Can\x20not\x20find\x20download\x20url.'), _0x23e092(_0x597876(0x197))['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0xd68c62['DIRECT_DOWNLOAD_ALL']) {
                            var _0x2e1f36 = 0x0, _0x2822a6 = _0x23e092(this)[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()[_0xe422a1(0x2da)](_0x6baea)['length'], _0x38b56f = _0xd68c62['FORCE_FETCH_ALL_RESOURCES'], _0x5aa7cf = new Date(_0x23e092(this)[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()['find'](_0xe422a1(0x144))['first']()[_0xe422a1(0x379)](_0xe422a1(0x362)))[_0xe422a1(0x261)]();
                            if (_0x2822a6)
                                _0x23e092(this)[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()['find'](_0x6baea)[_0xe422a1(0x277)](function () {
                                    const _0x4f9b8a = _0xe422a1;
                                    let _0x1c27b2 = _0x23e092(this)[_0x4f9b8a(0x3a1)]()[_0x4f9b8a(0x3a1)]()[_0x4f9b8a(0x3a1)]()['find'](_0x4f9b8a(0x143));
                                    _0x1c27b2 && _0x1c27b2[_0x4f9b8a(0x379)](_0x4f9b8a(0x1b1)) && (_0x38b56f = !![]);
                                }), _0x38b56f || _0xd68c62['FORCE_RESOURCE_VIA_MEDIA'] ? _0x3b8a83(_0x2938ed[_0xe422a1(0x15a)], _0xe422a1(0x18c), _0x31ce74(_0xe422a1(0x14c))) : (_0x23e092(this)[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()[_0xe422a1(0x2da)](_0x6baea)['each'](function () {
                                    const _0x325585 = _0xe422a1;
                                    _0x2e1f36++;
                                    let _0x48dfa1 = _0x23e092(this)[_0x325585(0x2da)]('video'), _0x1f4ded = _0x23e092(this)['find'](_0x325585(0x220)), _0x308895 = _0x1f4ded[_0x325585(0x379)](_0x325585(0x2bc)) ? _0x1f4ded[_0x325585(0x379)]('srcset')[_0x325585(0x36a)]('\x20')[0x0] : _0x1f4ded['attr'](_0x325585(0x1b1));
                                    _0x48dfa1 && _0x48dfa1[_0x325585(0x379)](_0x325585(0x1b1)) && (_0x38b56f = !![]), _0x1f4ded && _0x308895 && _0x23e092(_0x325585(0x18c))[_0x325585(0x2f1)](_0x325585(0x2bd) + _0x5aa7cf + _0x325585(0x2c9) + _0x2938ed[_0x325585(0x15a)] + _0x325585(0x3a8) + _0x2e1f36 + _0x325585(0x2d4) + _0x308895 + _0x325585(0x27c) + _0x308895 + _0x325585(0x1e5) + _0x31ce74(_0x325585(0x18e)) + _0x325585(0x279) + _0x2e1f36 + '\x20-</a>');
                                }), _0x38b56f && _0x3b8a83(_0x2938ed[_0xe422a1(0x15a)], _0xe422a1(0x18c), _0x31ce74('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0xd68c62['FORCE_RESOURCE_VIA_MEDIA'])
                                    _0x3b8a83(_0x2938ed['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x31ce74(_0xe422a1(0x14c)));
                                else {
                                    _0x2e1f36++;
                                    let _0x557fe5 = _0x23e092(this)[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()[_0xe422a1(0x2da)](_0xe422a1(0x143)), _0x5f3cd1 = _0x23e092(this)[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()[_0xe422a1(0x3a1)]()['find'](_0xe422a1(0x220)), _0x44859c = _0x5f3cd1[_0xe422a1(0x379)](_0xe422a1(0x2bc)) ? _0x5f3cd1[_0xe422a1(0x379)](_0xe422a1(0x2bc))[_0xe422a1(0x36a)]('\x20')[0x0] : _0x5f3cd1[_0xe422a1(0x379)](_0xe422a1(0x1b1));
                                    _0x557fe5 && _0x557fe5[_0xe422a1(0x379)](_0xe422a1(0x1b1)) && _0x3b8a83(_0x2938ed[_0xe422a1(0x15a)], _0xe422a1(0x18c), _0x31ce74(_0xe422a1(0x167))), _0x5f3cd1 && _0x44859c && _0x23e092(_0xe422a1(0x18c))[_0xe422a1(0x2f1)](_0xe422a1(0x2bd) + _0x5aa7cf + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2938ed['GL_postPath'] + _0xe422a1(0x3a8) + _0x2e1f36 + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x44859c + _0xe422a1(0x27c) + _0x44859c + _0xe422a1(0x1e5) + _0x31ce74('IMG') + _0xe422a1(0x279) + _0x2e1f36 + _0xe422a1(0x21a));
                                }
                            }
                        }
                        _0x23e092(_0xe422a1(0x1c0))[_0xe422a1(0x277)](function () {
                            const _0x3e4304 = _0xe422a1;
                            _0x23e092(this)[_0x3e4304(0x1ab)](_0x3e4304(0x2cc)), _0x23e092(this)[_0x3e4304(0x185)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x23e092(this)['after']('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x31ce74(_0x3e4304(0x257)) + _0x3e4304(0x3af) + _0x30a673['NEW_TAB'] + _0x3e4304(0x3ce)), _0x23e092(this)[_0x3e4304(0x379)](_0x3e4304(0x3d1)) == 'video' && _0x23e092(this)[_0x3e4304(0x2cb)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x31ce74(_0x3e4304(0x3a2)) + _0x3e4304(0x3ab) + _0x30a673[_0x3e4304(0x13e)] + _0x3e4304(0x3ce));
                        }), _0xd68c62[_0xe422a1(0x2ca)] && _0x3b8a83(_0x2938ed[_0xe422a1(0x15a)], _0xe422a1(0x18c), _0x31ce74(_0xe422a1(0x14c)))[_0xe422a1(0x23a)](() => {
                            let _0x50c08b = setInterval(() => {
                                const _0x1c68bd = a0_0x499e;
                                _0x23e092(_0x1c68bd(0x1c0))[_0x1c68bd(0x272)] > 0x0 && (clearInterval(_0x50c08b), _0x23e092(_0x1c68bd(0x1c0))[_0x1c68bd(0x277)](function () {
                                    const _0x1cee24 = _0x1c68bd;
                                    _0x23e092(this)[_0x1cee24(0x370)]('click');
                                }), _0x23e092(_0x1c68bd(0x197))['remove']());
                            }, 0xfa);
                        });
                    });
                    var _0x43d4b5 = _0x23e092(this)[_0x3c851b(0x2da)]('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x3c851b(0x27a)]()['text']() || _0x23e092(this)[_0x3c851b(0x2da)](_0x3c851b(0x255))[_0x3c851b(0x20e)](function () {
                        const _0x5944d6 = _0x3c851b;
                        return _0x23e092(this)?.[_0x5944d6(0x1c7)]()?.[_0x5944d6(0x272)] > 0x0;
                    })['first']()[_0x3c851b(0x1c7)]();
                    _0x23e092(this)[_0x3c851b(0x379)](_0x3c851b(0x314), _0x3c851b(0x16b)), _0x23e092(this)['attr'](_0x3c851b(0x288), _0x43d4b5);
                }
            });
        }
        function _0x3d337a(_0x3ef26d) {
            const _0x5cd1be = _0x4b2cd0;
            var _0x3f5a73 = _0x3ef26d[_0x5cd1be(0x234)] ?? _0x3ef26d;
            return _0x3f5a73[_0x5cd1be(0x366)] == null && _0x3f5a73[_0x5cd1be(0x2d1)] != null && (_0x3f5a73[_0x5cd1be(0x366)] = _0x3f5a73['user']), _0x3f5a73['owner'] == null && (_0x274880('carousel_media:', 'undefined\x20username'), alert(_0x5cd1be(0x168))), _0x3f5a73;
        }
        async function _0x3b8a83(_0x28a4e7, _0x5f04a5, _0x130f5a) {
            const _0x12fe2c = _0x4b2cd0;
            try {
                _0x23e092(_0x5f04a5 + '\x20a')['remove'](), _0x23e092(_0x5f04a5)[_0x12fe2c(0x2f1)](_0x12fe2c(0x22c) + _0x130f5a + '</p>');
                let _0x58b665 = await _0x7475b6(_0x28a4e7), _0x3e49ad = _0x3d337a(_0x58b665['data']);
                if (_0x58b665[_0x12fe2c(0x270)] === _0x12fe2c(0x1be)) {
                    let _0x9e6e2 = 0x1;
                    _0x3e49ad[_0x12fe2c(0x39f)] == _0x12fe2c(0x38f) && _0x3e49ad[_0x12fe2c(0x324)] && (_0x23e092(_0x5f04a5)[_0x12fe2c(0x2f1)](_0x12fe2c(0x29a) + _0x3e49ad['id'] + '\x22\x20datetime=\x22' + _0x3e49ad[_0x12fe2c(0x3c5)] + _0x12fe2c(0x2dc) + _0x3e49ad[_0x12fe2c(0x150)] + _0x12fe2c(0x176) + _0x3e49ad[_0x12fe2c(0x366)][_0x12fe2c(0x1f9)] + _0x12fe2c(0x3b6) + _0x9e6e2 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x3e49ad[_0x12fe2c(0x324)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x3e49ad[_0x12fe2c(0x388)][0x1][_0x12fe2c(0x1b1)] + _0x12fe2c(0x202) + _0x31ce74(_0x12fe2c(0x26b)) + '</span>\x20' + _0x9e6e2 + _0x12fe2c(0x21a)), _0x9e6e2++);
                    _0x3e49ad[_0x12fe2c(0x39f)] == _0x12fe2c(0x306) && (_0x23e092(_0x5f04a5)[_0x12fe2c(0x2f1)]('<a\x20media-id=\x22' + _0x3e49ad['id'] + _0x12fe2c(0x260) + _0x3e49ad['taken_at_timestamp'] + _0x12fe2c(0x2dc) + _0x3e49ad[_0x12fe2c(0x150)] + _0x12fe2c(0x2c1) + _0x3e49ad[_0x12fe2c(0x366)]['username'] + _0x12fe2c(0x3b6) + _0x9e6e2 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x3e49ad[_0x12fe2c(0x388)][_0x3e49ad[_0x12fe2c(0x388)]['length'] - 0x1][_0x12fe2c(0x1b1)] + _0x12fe2c(0x27c) + _0x3e49ad['display_resources'][0x1]['src'] + _0x12fe2c(0x1e5) + _0x31ce74(_0x12fe2c(0x18e)) + _0x12fe2c(0x279) + _0x9e6e2 + _0x12fe2c(0x21a)), _0x9e6e2++);
                    if (_0x3e49ad[_0x12fe2c(0x39f)] == 'GraphSidecar' && _0x3e49ad[_0x12fe2c(0x32b)])
                        for (let _0xaec24b of _0x3e49ad[_0x12fe2c(0x32b)][_0x12fe2c(0x19b)]) {
                            _0xaec24b[_0x12fe2c(0x1d5)]['__typename'] == _0x12fe2c(0x38f) && _0x23e092(_0x5f04a5)[_0x12fe2c(0x2f1)](_0x12fe2c(0x29a) + _0xaec24b[_0x12fe2c(0x1d5)]['id'] + _0x12fe2c(0x260) + _0x3e49ad[_0x12fe2c(0x3c5)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x3e49ad['shortcode'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x3e49ad['owner'][_0x12fe2c(0x1f9)] + _0x12fe2c(0x3b6) + _0x9e6e2 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0xaec24b[_0x12fe2c(0x1d5)][_0x12fe2c(0x324)] + _0x12fe2c(0x27c) + _0xaec24b['node'][_0x12fe2c(0x388)][0x1][_0x12fe2c(0x1b1)] + _0x12fe2c(0x232) + _0x31ce74(_0x12fe2c(0x26b)) + _0x12fe2c(0x279) + _0x9e6e2 + '\x20-</a>'), _0xaec24b[_0x12fe2c(0x1d5)][_0x12fe2c(0x39f)] == 'GraphImage' && _0x23e092(_0x5f04a5)[_0x12fe2c(0x2f1)](_0x12fe2c(0x29a) + _0xaec24b[_0x12fe2c(0x1d5)]['id'] + _0x12fe2c(0x260) + _0x3e49ad['taken_at_timestamp'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x3e49ad['shortcode'] + _0x12fe2c(0x2c1) + _0x3e49ad[_0x12fe2c(0x366)][_0x12fe2c(0x1f9)] + _0x12fe2c(0x3b6) + _0x9e6e2 + _0x12fe2c(0x2d4) + _0xaec24b[_0x12fe2c(0x1d5)][_0x12fe2c(0x388)][_0xaec24b[_0x12fe2c(0x1d5)]['display_resources'][_0x12fe2c(0x272)] - 0x1][_0x12fe2c(0x1b1)] + _0x12fe2c(0x27c) + _0xaec24b[_0x12fe2c(0x1d5)][_0x12fe2c(0x388)][0x1][_0x12fe2c(0x1b1)] + _0x12fe2c(0x1e5) + _0x31ce74(_0x12fe2c(0x18e)) + _0x12fe2c(0x279) + _0x9e6e2 + _0x12fe2c(0x21a)), _0x9e6e2++;
                        }
                } else {
                    if (_0x3e49ad[_0x12fe2c(0x266)])
                        _0x274880('carousel_media'), _0x3e49ad[_0x12fe2c(0x266)][_0x12fe2c(0x1c2)]((_0x589c18, _0x4b2bca) => {
                            const _0x5be730 = _0x12fe2c;
                            let _0x461f71 = _0x4b2bca + 0x1;
                            _0x589c18[_0x5be730(0x212)] == null ? (_0x589c18['image_versions2']['candidates']['sort'](function (_0x2e8d84, _0x127538) {
                                const _0x50ba9a = _0x5be730;
                                let _0x24d065 = new URL(_0x2e8d84[_0x50ba9a(0x334)])[_0x50ba9a(0x2f5)][_0x50ba9a(0x213)]('stp'), _0x3d31a9 = new URL(_0x127538['url'])[_0x50ba9a(0x2f5)][_0x50ba9a(0x213)](_0x50ba9a(0x330));
                                if (_0x24d065 && _0x3d31a9) {
                                    if (_0x24d065['length'] > _0x3d31a9['length'])
                                        return 0x1;
                                    if (_0x24d065[_0x50ba9a(0x272)] < _0x3d31a9[_0x50ba9a(0x272)])
                                        return -0x1;
                                } else {
                                    if (_0x2e8d84[_0x50ba9a(0x1f5)] < _0x127538['width'])
                                        return 0x1;
                                    if (_0x2e8d84[_0x50ba9a(0x1f5)] > _0x127538[_0x50ba9a(0x1f5)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x23e092(_0x5f04a5)[_0x5be730(0x2f1)]('<a\x20media-id=\x22' + _0x589c18['pk'] + _0x5be730(0x260) + _0x589c18[_0x5be730(0x154)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x3e49ad[_0x5be730(0x2f4)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x3e49ad[_0x5be730(0x366)][_0x5be730(0x1f9)] + _0x5be730(0x3b6) + _0x461f71 + _0x5be730(0x2d4) + _0x589c18[_0x5be730(0x19d)]['candidates'][0x0][_0x5be730(0x334)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x589c18[_0x5be730(0x19d)][_0x5be730(0x383)][0x0][_0x5be730(0x334)] + _0x5be730(0x1e5) + _0x31ce74(_0x5be730(0x18e)) + _0x5be730(0x279) + _0x461f71 + _0x5be730(0x21a))) : _0x23e092(_0x5f04a5)[_0x5be730(0x2f1)](_0x5be730(0x29a) + _0x589c18['pk'] + _0x5be730(0x260) + _0x589c18['taken_at'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x3e49ad[_0x5be730(0x2f4)] + _0x5be730(0x176) + _0x3e49ad[_0x5be730(0x366)][_0x5be730(0x1f9)] + _0x5be730(0x3b6) + _0x461f71 + _0x5be730(0x2d4) + _0x589c18[_0x5be730(0x212)][0x0]['url'] + _0x5be730(0x27c) + _0x589c18[_0x5be730(0x19d)][_0x5be730(0x383)][0x0][_0x5be730(0x334)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x31ce74(_0x5be730(0x26b)) + _0x5be730(0x279) + _0x461f71 + _0x5be730(0x21a));
                        });
                    else {
                        let _0x261b7e = 0x1;
                        _0x3e49ad[_0x12fe2c(0x212)] == null ? (_0x3e49ad[_0x12fe2c(0x19d)][_0x12fe2c(0x383)]['sort'](function (_0x5f5288, _0x2970a5) {
                            const _0x59e795 = _0x12fe2c;
                            let _0x579389 = new URL(_0x5f5288[_0x59e795(0x334)])[_0x59e795(0x2f5)][_0x59e795(0x213)](_0x59e795(0x330)), _0x2c00fc = new URL(_0x2970a5[_0x59e795(0x334)])[_0x59e795(0x2f5)][_0x59e795(0x213)]('stp');
                            if (_0x579389 && _0x2c00fc) {
                                if (_0x579389['length'] > _0x2c00fc['length'])
                                    return 0x1;
                                if (_0x579389['length'] < _0x2c00fc[_0x59e795(0x272)])
                                    return -0x1;
                            } else {
                                if (_0x5f5288[_0x59e795(0x1f5)] < _0x2970a5[_0x59e795(0x1f5)])
                                    return 0x1;
                                if (_0x5f5288[_0x59e795(0x1f5)] > _0x2970a5[_0x59e795(0x1f5)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x23e092(_0x5f04a5)[_0x12fe2c(0x2f1)](_0x12fe2c(0x29a) + _0x3e49ad['pk'] + _0x12fe2c(0x260) + _0x3e49ad['taken_at'] + _0x12fe2c(0x2dc) + _0x3e49ad['code'] + _0x12fe2c(0x2c1) + _0x3e49ad[_0x12fe2c(0x366)][_0x12fe2c(0x1f9)] + '\x22\x20data-globalIndex=\x22' + _0x261b7e + _0x12fe2c(0x2d4) + _0x3e49ad[_0x12fe2c(0x19d)][_0x12fe2c(0x383)][0x0][_0x12fe2c(0x334)] + _0x12fe2c(0x27c) + _0x3e49ad[_0x12fe2c(0x19d)][_0x12fe2c(0x383)][0x0][_0x12fe2c(0x334)] + _0x12fe2c(0x1e5) + _0x31ce74(_0x12fe2c(0x18e)) + _0x12fe2c(0x279) + _0x261b7e + _0x12fe2c(0x21a))) : _0x23e092(_0x5f04a5)[_0x12fe2c(0x2f1)]('<a\x20media-id=\x22' + _0x3e49ad['pk'] + _0x12fe2c(0x260) + _0x3e49ad[_0x12fe2c(0x154)] + _0x12fe2c(0x2dc) + _0x3e49ad[_0x12fe2c(0x2f4)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x3e49ad[_0x12fe2c(0x366)][_0x12fe2c(0x1f9)] + _0x12fe2c(0x3b6) + _0x261b7e + _0x12fe2c(0x2d4) + _0x3e49ad[_0x12fe2c(0x212)][0x0][_0x12fe2c(0x334)] + _0x12fe2c(0x27c) + _0x3e49ad[_0x12fe2c(0x19d)][_0x12fe2c(0x383)][0x0]['url'] + _0x12fe2c(0x202) + _0x31ce74(_0x12fe2c(0x26b)) + _0x12fe2c(0x279) + _0x261b7e + '\x20-</a>');
                    }
                }
                _0x23e092(_0x12fe2c(0x16f))[_0x12fe2c(0x307)](), _0x23e092(_0x12fe2c(0x1c0))[_0x12fe2c(0x277)](function () {
                    const _0x2d68f3 = _0x12fe2c;
                    _0x23e092(this)[_0x2d68f3(0x1ab)](_0x2d68f3(0x2cc)), _0x23e092(this)[_0x2d68f3(0x185)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x23e092(this)[_0x2d68f3(0x2cb)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x31ce74(_0x2d68f3(0x257)) + _0x2d68f3(0x3af) + _0x30a673[_0x2d68f3(0x257)] + _0x2d68f3(0x3ce)), _0x23e092(this)[_0x2d68f3(0x379)]('data-name') == _0x2d68f3(0x143) && _0x23e092(this)[_0x2d68f3(0x2cb)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x31ce74(_0x2d68f3(0x3a2)) + _0x2d68f3(0x3ab) + _0x30a673[_0x2d68f3(0x13e)] + '</div>');
                });
            } catch (_0x23d257) {
                _0x274880(_0x12fe2c(0x140), _0x23d257);
            }
            ;
        }
        function _0x22025a(_0x13b470) {
            const _0x4461a7 = _0x4b2cd0;
            var _0xed4ac2 = 0x0, _0x5c8537 = _0x13b470['find']('.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div');
            return (_0x5c8537 == null || !_0x5c8537[_0x4461a7(0x262)](_0x4461a7(0x1b4))) && (_0x5c8537 = _0x13b470['find'](_0x4461a7(0x309))['eq'](0x0)[_0x4461a7(0x2fb)]('div')), _0x5c8537[_0x4461a7(0x20e)](_0x4461a7(0x36f))[_0x4461a7(0x277)](function (_0x496c3a) {
                const _0x4e17ca = _0x4461a7;
                _0x23e092(this)[_0x4e17ca(0x262)](_0x4e17ca(0x174)) && (_0xed4ac2 = _0x496c3a);
            }), _0xed4ac2;
        }
        async function _0x253939(_0x2191e3) {
            const _0x11886a = _0x4b2cd0;
            if (_0x2191e3) {
                _0x24d878(!![]);
                let _0x4cb522 = new Date()[_0x11886a(0x261)](), _0x2e2366 = Math[_0x11886a(0x2c5)](_0x4cb522 / 0x3e8), _0x433602 = location[_0x11886a(0x31d)]['replaceAll'](/(reels|tagged)\/$/ig, '')[_0x11886a(0x36a)]('/')['filter'](_0x31a7bf => _0x31a7bf['length'] > 0x0)['at'](-0x1), _0x1bc6d8 = await _0x1da2dc(_0x433602);
                try {
                    let _0x67c78b = await _0x5c5b7f(_0x1bc6d8[_0x11886a(0x2d1)]['pk']);
                    _0x306fb5(_0x67c78b, _0x433602, _0x11886a(0x36d), _0x2e2366, _0x11886a(0x1ec));
                } catch (_0x1c943c) {
                    _0x306fb5(_0x1bc6d8[_0x11886a(0x2d1)][_0x11886a(0x375)], _0x433602, 'avatar', _0x2e2366, _0x11886a(0x1ec));
                }
                _0x24d878(![]);
            } else {
                if (!_0x23e092(_0x11886a(0x2e0))['length']) {
                    let _0x4b5b7d = setInterval(() => {
                        const _0x5a3eb6 = _0x11886a;
                        if (_0x23e092(_0x5a3eb6(0x2e0))[_0x5a3eb6(0x272)]) {
                            clearInterval(_0x4b5b7d);
                            return;
                        }
                        _0x23e092(_0x5a3eb6(0x37c))['parent']()[_0x5a3eb6(0x3a1)]()[_0x5a3eb6(0x2f1)](_0x5a3eb6(0x19e) + _0x31ce74('DW') + _0x5a3eb6(0x219) + _0x30a673['DOWNLOAD'] + _0x5a3eb6(0x3ce)), _0x23e092(_0x5a3eb6(0x37c))[_0x5a3eb6(0x3a1)]()[_0x5a3eb6(0x3a1)]()['css'](_0x5a3eb6(0x1eb), _0x5a3eb6(0x20d)), _0x23e092(_0x5a3eb6(0x16d))[_0x5a3eb6(0x3a1)]()['parent']()[_0x5a3eb6(0x3a1)]()[_0x5a3eb6(0x2f1)](_0x5a3eb6(0x19e) + _0x31ce74('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x30a673[_0x5a3eb6(0x141)] + '</div>'), _0x23e092(_0x5a3eb6(0x16d))[_0x5a3eb6(0x3a1)]()['parent']()[_0x5a3eb6(0x3a1)]()['css'](_0x5a3eb6(0x1eb), _0x5a3eb6(0x20d));
                    }, 0x96);
                }
            }
        }
        async function _0x2f370a(_0x5ad9b6, _0x349bea, _0x21192e) {
            const _0xdae686 = _0x4b2cd0;
            if (_0x5ad9b6) {
                _0x24d878(!![]);
                let _0x4a99ec = location[_0xdae686(0x1e2)][_0xdae686(0x36a)]('?')['at'](0x0)[_0xdae686(0x36a)](_0xdae686(0x304))['at'](-0x1)[_0xdae686(0x238)]('/', ''), _0x1ef3e4 = await _0x7475b6(_0x4a99ec), _0x496a84 = _0x3d337a(_0x1ef3e4[_0xdae686(0x231)]), _0x7e15d3 = new Date()[_0xdae686(0x261)]();
                _0xd68c62[_0xdae686(0x335)] && (_0x1ef3e4['type'] === _0xdae686(0x1be) ? _0x7e15d3 = _0x496a84[_0xdae686(0x234)][_0xdae686(0x3c5)] : _0x7e15d3 = _0x496a84['taken_at']);
                if (_0x1ef3e4[_0xdae686(0x270)] === 'query_hash') {
                    if (_0x349bea && _0x496a84[_0xdae686(0x234)]['is_video']) {
                        if (_0x21192e)
                            _0x239c68(_0x496a84[_0xdae686(0x234)][_0xdae686(0x324)]);
                        else {
                            let _0x283302 = _0xdae686(0x228);
                            _0x306fb5(_0x496a84[_0xdae686(0x234)]['video_url'], _0x496a84[_0xdae686(0x234)][_0xdae686(0x366)][_0xdae686(0x1f9)], 'reels', _0x7e15d3, _0x283302, _0x4a99ec);
                        }
                    } else {
                        if (_0x21192e)
                            _0x239c68(_0x496a84['shortcode_media']['display_resources']['at'](-0x1)[_0xdae686(0x1b1)]);
                        else {
                            let _0x1d9466 = _0xdae686(0x1ec);
                            _0x306fb5(_0x496a84['shortcode_media'][_0xdae686(0x388)]['at'](-0x1)[_0xdae686(0x1b1)], _0x496a84['shortcode_media'][_0xdae686(0x366)][_0xdae686(0x1f9)], _0xdae686(0x165), _0x7e15d3, _0x1d9466, _0x4a99ec);
                        }
                    }
                } else {
                    if (_0x349bea && _0x496a84['video_versions'] != null) {
                        if (_0x21192e)
                            _0x239c68(_0x496a84[_0xdae686(0x212)][0x0]['url']);
                        else {
                            let _0x2bb653 = _0xdae686(0x228);
                            _0x306fb5(_0x496a84[_0xdae686(0x212)][0x0][_0xdae686(0x334)], _0x496a84[_0xdae686(0x366)][_0xdae686(0x1f9)], _0xdae686(0x165), _0x7e15d3, _0x2bb653, _0x4a99ec);
                        }
                    } else {
                        if (_0x21192e)
                            _0x239c68(_0x496a84[_0xdae686(0x19d)][_0xdae686(0x383)][0x0][_0xdae686(0x334)]);
                        else {
                            let _0x11c1ba = _0xdae686(0x1ec);
                            _0x306fb5(_0x496a84['image_versions2'][_0xdae686(0x383)][0x0][_0xdae686(0x334)], _0x496a84[_0xdae686(0x366)][_0xdae686(0x1f9)], _0xdae686(0x165), _0x7e15d3, _0x11c1ba, _0x4a99ec);
                        }
                    }
                }
                _0x24d878(![]);
            } else
                var _0x3294f0 = setInterval(() => {
                    const _0x57361a = _0xdae686;
                    _0x23e092(_0x57361a(0x283))[_0x57361a(0x272)] > 0x0 && (clearInterval(_0x3294f0), _0xd68c62[_0x57361a(0x1f8)] && (_0x23e092('#scrollWrapper')[_0x57361a(0x307)](), _0x23e092(_0x57361a(0x153))[_0x57361a(0x2f1)](_0x57361a(0x241)), _0x23e092(_0x57361a(0x1dc))[_0x57361a(0x2f1)](_0x57361a(0x2b7)), _0x23e092('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x57361a(0x2f1)](_0x57361a(0x1b9)), _0x23e092('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up')['on']('click', function () {
                        const _0x3b7274 = _0x57361a;
                        _0x23e092(_0x3b7274(0x13c))[0x0][_0x3b7274(0x247)]({
                            'top': -0x1e,
                            'behavior': _0x3b7274(0x221)
                        });
                    }), _0x23e092(_0x57361a(0x278))['on'](_0x57361a(0x1d0), function () {
                        const _0x923e10 = _0x57361a;
                        _0x23e092('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x923e10(0x247)]({
                            'top': 0x1e,
                            'behavior': _0x923e10(0x221)
                        });
                    })), _0x23e092(_0x57361a(0x137))[_0x57361a(0x2fb)](_0x57361a(0x200))['each'](function () {
                        const _0x1b06ab = _0x57361a;
                        if (_0x23e092(this)[_0x1b06ab(0x2fb)]()[_0x1b06ab(0x272)] > 0x0) {
                            if (!_0x23e092(this)[_0x1b06ab(0x2fb)]()['find']('.IG_REELS')[_0x1b06ab(0x272)]) {
                                var _0x4999a6 = _0x23e092(this);
                                _0x23e092(this)['children']()[_0x1b06ab(0x223)](_0x1b06ab(0x1eb), _0x1b06ab(0x20d)), _0x23e092(this)['children']()[_0x1b06ab(0x2f1)](_0x1b06ab(0x19e) + _0x31ce74('DW') + _0x1b06ab(0x1ae) + _0x30a673[_0x1b06ab(0x141)] + _0x1b06ab(0x3ce)), _0x23e092(this)[_0x1b06ab(0x2fb)]()[_0x1b06ab(0x2f1)](_0x1b06ab(0x3c9) + _0x31ce74(_0x1b06ab(0x257)) + _0x1b06ab(0x332) + _0x30a673[_0x1b06ab(0x257)] + '</div>'), _0x23e092(this)[_0x1b06ab(0x2fb)]()[_0x1b06ab(0x2f1)](_0x1b06ab(0x3a7) + _0x31ce74('THUMBNAIL_INTRO') + '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>' + _0x30a673['THUMBNAIL'] + _0x1b06ab(0x3ce));
                                _0xd68c62[_0x1b06ab(0x194)] && _0x23e092(this)[_0x1b06ab(0x2da)](_0x1b06ab(0x143))[_0x1b06ab(0x277)](function () {
                                    _0x23e092(this)['on']('ended', function () {
                                        const _0x4afe72 = a0_0x499e;
                                        if (!_0x23e092(this)[_0x4afe72(0x231)](_0x4afe72(0x188))) {
                                            let _0x59420f = _0x23e092(this)[_0x4afe72(0x17b)]()['find'](_0x4afe72(0x396))[_0x4afe72(0x172)](_0x4afe72(0x1c1));
                                            _0x59420f[_0x4afe72(0x272)] > 0x0 ? (_0x23e092(this)[_0x4afe72(0x379)](_0x4afe72(0x3d4), !![]), _0x59420f[_0x4afe72(0x370)](_0x4afe72(0x1d0)), _0x274880(_0x4afe72(0x2d5))) : (_0x23e092(this)['attr']('data-loop', !![]), _0x23e092(this)[_0x4afe72(0x3a1)]()[_0x4afe72(0x2da)](_0x4afe72(0x26e))[_0x4afe72(0x276)](_0x4afe72(0x1ac)), this[_0x4afe72(0x2ce)](), _0x274880(_0x4afe72(0x171)));
                                        }
                                    });
                                });
                                _0xd68c62[_0x1b06ab(0x214)] && _0x23e092(this)[_0x1b06ab(0x2da)](_0x1b06ab(0x143))[_0x1b06ab(0x277)](function () {
                                    const _0x11eaf5 = _0x1b06ab;
                                    if (!_0x23e092(this)[_0x11eaf5(0x231)](_0x11eaf5(0x3d8))) {
                                        let _0x5138c1 = _0x23e092(this);
                                        _0x274880('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0xd68c62[_0x11eaf5(0x1f0)] && (this[_0x11eaf5(0x1d7)] = _0x2938ed[_0x11eaf5(0x20b)], _0x23e092(this)['on'](_0x11eaf5(0x1bb), function () {
                                            const _0x10a794 = _0x11eaf5;
                                            this[_0x10a794(0x1d7)] = _0x2938ed[_0x10a794(0x20b)];
                                        })), _0x23e092(this)['on'](_0x11eaf5(0x30d), function (_0x3246ab) {
                                            const _0x5e2f87 = _0x11eaf5;
                                            _0x3246ab[_0x5e2f87(0x2de)](), _0x5138c1[_0x5e2f87(0x223)]('z-index', '-1'), _0x5138c1[_0x5e2f87(0x276)](_0x5e2f87(0x3d8));
                                        }), _0x23e092(this)['parent']()[_0x11eaf5(0x2da)](_0x11eaf5(0x147))[_0x11eaf5(0x20e)](function () {
                                            const _0x4f641a = _0x11eaf5;
                                            return _0x23e092(this)['parent'](_0x4f641a(0x2b6))[_0x4f641a(0x272)] > 0x0 && _0x23e092(this)[_0x4f641a(0x223)](_0x4f641a(0x224)) === 'pointer' && _0x23e092(this)[_0x4f641a(0x379)]('style') != null;
                                        })['first']()['on'](_0x11eaf5(0x30d), function (_0x15ab7c) {
                                            const _0x33e332 = _0x11eaf5;
                                            _0x15ab7c[_0x33e332(0x2de)](), _0x5138c1[_0x33e332(0x223)]('z-index', '2'), _0x5138c1[_0x33e332(0x379)](_0x33e332(0x3d8), !![]);
                                        }), _0x23e092(this)['on'](_0x11eaf5(0x323), function () {
                                            const _0x57d6fc = _0x11eaf5;
                                            let _0x1b6a9e = _0x23e092(this)[_0x57d6fc(0x3a1)]()[_0x57d6fc(0x2da)](_0x57d6fc(0x348))[_0x57d6fc(0x2da)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x57d6fc(0x20e)](function (_0x129050) {
                                                const _0x188492 = _0x57d6fc;
                                                return _0x23e092(this)[_0x188492(0x1f5)]() <= 0x40 && _0x23e092(this)[_0x188492(0x1d8)]() <= 0x40 && _0x23e092(this)[_0x188492(0x2da)](_0x188492(0x38b))[_0x188492(0x272)] > 0x0;
                                            });
                                            var _0x2cab5f = _0x1b6a9e['find'](_0x57d6fc(0x2d6))[_0x57d6fc(0x272)] === 0x0;
                                            this[_0x57d6fc(0x28c)] != _0x2cab5f && (this[_0x57d6fc(0x1d7)] = _0x2938ed[_0x57d6fc(0x20b)], _0x1b6a9e?.[_0x57d6fc(0x370)](_0x57d6fc(0x1d0))), _0x23e092(this)[_0x57d6fc(0x379)](_0x57d6fc(0x1fb)) && (_0x2938ed[_0x57d6fc(0x20b)] = this[_0x57d6fc(0x1d7)], GM_setValue(_0x57d6fc(0x1ee), this[_0x57d6fc(0x1d7)])), this[_0x57d6fc(0x1d7)] == _0x2938ed[_0x57d6fc(0x20b)] && _0x23e092(this)[_0x57d6fc(0x379)](_0x57d6fc(0x1fb), !![]);
                                        }), _0x23e092(this)['css'](_0x11eaf5(0x1eb), _0x11eaf5(0x1a8)), _0x23e092(this)[_0x11eaf5(0x223)](_0x11eaf5(0x17c), '2'), _0x23e092(this)[_0x11eaf5(0x379)]('data-controls', !![]), _0x23e092(this)[_0x11eaf5(0x379)](_0x11eaf5(0x3d8), !![]);
                                    }
                                });
                                var _0x17e261 = _0x4999a6[_0x1b06ab(0x2da)](_0x1b06ab(0x143)), _0x334684 = _0x23e092(this)[_0x1b06ab(0x2da)](_0x1b06ab(0x18a))[_0x1b06ab(0x27a)]();
                                _0x2404a9(_0x17e261, _0x334684, _0x1b06ab(0x2d0));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x3f9573() {
            const _0x3b5dde = _0x4b2cd0;
            _0x24d878(!![]);
            let _0x526ab2 = new Date()[_0x3b5dde(0x261)](), _0xbd7938 = Math['floor'](_0x526ab2 / 0x3e8), _0x37987c = _0x23e092(_0x3b5dde(0x183))['first']()[_0x3b5dde(0x1c7)]() || location['pathname'][_0x3b5dde(0x36a)]('/')[_0x3b5dde(0x20e)](_0x4e60b4 => _0x4e60b4[_0x3b5dde(0x272)] > 0x0)['at'](0x1), _0x38e1e1 = await _0x1da2dc(_0x37987c), _0x39f3a8 = _0x38e1e1[_0x3b5dde(0x2d1)]['pk'], _0x495925 = await _0x436e99(_0x39f3a8), _0x31a1e5 = 0x0;
            _0x43be1c(_0x31a1e5, _0x495925[_0x3b5dde(0x231)][_0x3b5dde(0x358)][0x0][_0x3b5dde(0x1a4)][_0x3b5dde(0x272)]), _0x495925[_0x3b5dde(0x231)][_0x3b5dde(0x358)][0x0][_0x3b5dde(0x1a4)]['forEach']((_0x48a7f9, _0x5c5bc7) => {
                setTimeout(() => {
                    const _0x402caf = a0_0x499e;
                    _0xd68c62['RENAME_PUBLISH_DATE'] && (_0xbd7938 = _0x48a7f9[_0x402caf(0x3c5)]), _0x48a7f9[_0x402caf(0x388)][_0x402caf(0x2ef)](function (_0x9bb6e2, _0x5b1a0e) {
                        const _0x1f455f = _0x402caf;
                        if (_0x9bb6e2[_0x1f455f(0x3bb)] < _0x5b1a0e[_0x1f455f(0x3bb)])
                            return 0x1;
                        if (_0x9bb6e2['config_width'] > _0x5b1a0e['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x48a7f9[_0x402caf(0x148)] ? _0x306fb5(_0x48a7f9[_0x402caf(0x3d0)][0x0]['src'], _0x37987c, 'stories', _0xbd7938, _0x402caf(0x228), _0x48a7f9['id'])['then'](() => {
                        const _0xc8cc2f = _0x402caf;
                        _0x43be1c(++_0x31a1e5, _0x495925[_0xc8cc2f(0x231)][_0xc8cc2f(0x358)][0x0][_0xc8cc2f(0x1a4)][_0xc8cc2f(0x272)]);
                    }) : _0x306fb5(_0x48a7f9[_0x402caf(0x388)][0x0]['src'], _0x37987c, 'stories', _0xbd7938, _0x402caf(0x1ec), _0x48a7f9['id'])[_0x402caf(0x23a)](() => {
                        const _0x54577a = _0x402caf;
                        _0x43be1c(++_0x31a1e5, _0x495925[_0x54577a(0x231)][_0x54577a(0x358)][0x0][_0x54577a(0x1a4)][_0x54577a(0x272)]);
                    });
                }, 0x64 * _0x5c5bc7);
            });
        }
        async function _0x529c0d(_0x4ad994, _0x26bd08, _0x33bee7) {
            const _0x2b25a4 = _0x4b2cd0;
            var _0x5b69b9 = _0x23e092(_0x2b25a4(0x183))[_0x2b25a4(0x27a)]()[_0x2b25a4(0x1c7)]() || location['pathname']['split']('/')[_0x2b25a4(0x20e)](_0x16a425 => _0x16a425['length'] > 0x0)['at'](0x1);
            if (_0x4ad994) {
                let _0x10a186 = new Date()[_0x2b25a4(0x261)](), _0x256fcb = Math[_0x2b25a4(0x2c5)](_0x10a186 / 0x3e8);
                _0x24d878(!![]);
                if (_0xd68c62['FORCE_RESOURCE_VIA_MEDIA'] && !_0x2938ed[_0x2b25a4(0x2c0)]) {
                    let _0xe08f02 = null, _0x196b71 = await _0x1da2dc(_0x5b69b9), _0x4fb73f = _0x196b71[_0x2b25a4(0x2d1)]['pk'], _0x303d0b = await _0x436e99(_0x4fb73f), _0x236c5d = location[_0x2b25a4(0x31d)][_0x2b25a4(0x36a)]('/')[_0x2b25a4(0x20e)](_0x3d1f61 => _0x3d1f61['length'] > 0x0 && _0x3d1f61[_0x2b25a4(0x186)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x303d0b['data'][_0x2b25a4(0x358)][0x0][_0x2b25a4(0x1a4)][_0x2b25a4(0x1c2)](_0x679470 => {
                        _0x679470['id'] == _0x236c5d && (_0xe08f02 = _0x679470['id']);
                    });
                    if (_0xe08f02 == null) {
                        let _0xc89c9f = _0x509043(_0x5b69b9);
                        _0xc89c9f[_0x2b25a4(0x277)](function (_0x1e6a5b) {
                            const _0x4ec43a = _0x2b25a4;
                            _0x23e092(this)[_0x4ec43a(0x2fb)]()['length'] > 0x0 && (_0xe08f02 = _0x303d0b[_0x4ec43a(0x231)][_0x4ec43a(0x358)][0x0]['items'][_0x1e6a5b]['id']);
                        });
                    }
                    _0xe08f02 == null && (_0x23e092(_0x2b25a4(0x3a5))[_0x2b25a4(0x277)](function (_0x656548) {
                        const _0x240fb9 = _0x2b25a4;
                        _0x23e092(this)[_0x240fb9(0x262)](_0x240fb9(0x1af)) && (_0x23e092(this)[_0x240fb9(0x2fb)]()[_0x240fb9(0x272)] > 0x0 && (_0xe08f02 = _0x303d0b['data'][_0x240fb9(0x358)][0x0][_0x240fb9(0x1a4)][_0x656548]['id']));
                    }), _0x23e092(_0x2b25a4(0x169))[_0x2b25a4(0x277)](function (_0x23d3b9) {
                        const _0x35d990 = _0x2b25a4;
                        _0x23e092(this)[_0x35d990(0x2fb)]()[_0x35d990(0x262)](_0x35d990(0x32f)) && (_0xe08f02 = _0x303d0b[_0x35d990(0x231)][_0x35d990(0x358)][0x0][_0x35d990(0x1a4)][_0x23d3b9]['id']);
                    }));
                    _0xe08f02 == null && (_0xe08f02 = location[_0x2b25a4(0x31d)]['split']('/')[_0x2b25a4(0x20e)](_0x27974c => _0x27974c['length'] > 0x0 && _0x27974c['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x5ccde5 = await _0x2d4e3b(_0xe08f02);
                    _0xd68c62[_0x2b25a4(0x335)] && (_0x256fcb = _0x5ccde5[_0x2b25a4(0x1a4)][0x0][_0x2b25a4(0x154)]);
                    _0x5ccde5[_0x2b25a4(0x1aa)] === 'ok' ? _0x5ccde5[_0x2b25a4(0x1a4)][0x0]['video_versions'] ? _0x33bee7 ? _0x239c68(_0x5ccde5[_0x2b25a4(0x1a4)][0x0][_0x2b25a4(0x212)][0x0][_0x2b25a4(0x334)]) : _0x306fb5(_0x5ccde5[_0x2b25a4(0x1a4)][0x0]['video_versions'][0x0]['url'], _0x5b69b9, _0x2b25a4(0x209), _0x256fcb, _0x2b25a4(0x228), _0xe08f02) : _0x33bee7 ? _0x239c68(_0x5ccde5['items'][0x0][_0x2b25a4(0x19d)][_0x2b25a4(0x383)][0x0]['url']) : _0x306fb5(_0x5ccde5[_0x2b25a4(0x1a4)][0x0][_0x2b25a4(0x19d)][_0x2b25a4(0x383)][0x0][_0x2b25a4(0x334)], _0x5b69b9, _0x2b25a4(0x209), _0x256fcb, _0x2b25a4(0x1ec), _0xe08f02) : (_0xd68c62[_0x2b25a4(0x325)] ? (_0x2938ed[_0x2b25a4(0x2c0)] = !![], _0x529c0d(_0x4ad994, _0x26bd08, _0x33bee7)) : alert(_0x2b25a4(0x226) + _0x5ccde5[_0x2b25a4(0x33e)]), _0x274880(_0x5ccde5));
                    _0x24d878(![]);
                    return;
                }
                if (_0x23e092(_0x2b25a4(0x3b0))['length'] > 0x0) {
                    let _0x155932 = _0x2b25a4(0x228), _0x1e34b7 = '', _0x53e7bb = location['pathname'][_0x2b25a4(0x35c)](/\/$/ig, '')[_0x2b25a4(0x36a)]('/')['at'](-0x1), _0x5399c3 = null;
                    if (_0x2938ed[_0x2b25a4(0x353)][_0x2b25a4(0x209)][_0x5b69b9] && !_0x26bd08) {
                        _0x274880(_0x2b25a4(0x3d2), _0x5b69b9), _0x2938ed['GL_dataCache'][_0x2b25a4(0x209)][_0x5b69b9][_0x2b25a4(0x231)]['reels_media'][0x0][_0x2b25a4(0x1a4)][_0x2b25a4(0x1c2)](_0x5e0079 => {
                            const _0x2a464e = _0x2b25a4;
                            _0x5e0079['id'] == _0x53e7bb && (_0x1e34b7 = _0x5e0079[_0x2a464e(0x3d0)][0x0][_0x2a464e(0x1b1)], _0xd68c62['RENAME_PUBLISH_DATE'] && (_0x256fcb = _0x5e0079[_0x2a464e(0x3c5)], _0x5399c3 = _0x5e0079['id']));
                        });
                        if (_0x1e34b7['length'] == 0x0) {
                            _0x274880(_0x2b25a4(0x32d), _0x5b69b9), _0x529c0d(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x35fc91 = await _0x1da2dc(_0x5b69b9), _0x97c6c6 = _0x35fc91[_0x2b25a4(0x2d1)]['pk'], _0x2f30b5 = await _0x436e99(_0x97c6c6);
                        _0x2f30b5[_0x2b25a4(0x231)][_0x2b25a4(0x358)][0x0][_0x2b25a4(0x1a4)][_0x2b25a4(0x1c2)](_0x2fb236 => {
                            const _0x12ebe1 = _0x2b25a4;
                            _0x2fb236['id'] == _0x53e7bb && (_0x1e34b7 = _0x2fb236[_0x12ebe1(0x3d0)][0x0]['src'], _0xd68c62[_0x12ebe1(0x335)] && (_0x256fcb = _0x2fb236['taken_at_timestamp'], _0x5399c3 = _0x2fb236['id']));
                        });
                        if (_0x1e34b7['length'] == 0x0) {
                            let _0x44ddb9 = _0x509043(_0x5b69b9);
                            _0x44ddb9['each'](function (_0x16c88f) {
                                const _0x4eec74 = _0x2b25a4;
                                _0x23e092(this)[_0x4eec74(0x2fb)]()[_0x4eec74(0x272)] > 0x0 && (_0x1e34b7 = _0x2f30b5[_0x4eec74(0x231)]['reels_media'][0x0][_0x4eec74(0x1a4)][_0x16c88f][_0x4eec74(0x3d0)][0x0][_0x4eec74(0x1b1)], _0xd68c62[_0x4eec74(0x335)] && (_0x256fcb = _0x2f30b5[_0x4eec74(0x231)]['reels_media'][0x0]['items'][_0x16c88f][_0x4eec74(0x3c5)], _0x5399c3 = _0x2f30b5['data'][_0x4eec74(0x358)][0x0][_0x4eec74(0x1a4)][_0x16c88f]['id']));
                            }), _0x1e34b7[_0x2b25a4(0x272)] == 0x0 && (_0x23e092(_0x2b25a4(0x3a5))['each'](function (_0x4b224f) {
                                const _0x2e2daa = _0x2b25a4;
                                _0x23e092(this)['hasClass'](_0x2e2daa(0x1af)) && (_0x23e092(this)['children']()[_0x2e2daa(0x272)] > 0x0 && (_0x1e34b7 = _0x2f30b5[_0x2e2daa(0x231)][_0x2e2daa(0x358)][0x0][_0x2e2daa(0x1a4)][_0x4b224f]['video_resources'][0x0]['src'], _0xd68c62[_0x2e2daa(0x335)] && (_0x256fcb = _0x2f30b5['data'][_0x2e2daa(0x358)][0x0][_0x2e2daa(0x1a4)][_0x4b224f][_0x2e2daa(0x3c5)], _0x5399c3 = _0x2f30b5[_0x2e2daa(0x231)][_0x2e2daa(0x358)][0x0]['items'][_0x4b224f]['id'])));
                            }), _0x23e092(_0x2b25a4(0x169))[_0x2b25a4(0x277)](function (_0x22ff5e) {
                                const _0x40bbd0 = _0x2b25a4;
                                _0x23e092(this)[_0x40bbd0(0x2fb)]()[_0x40bbd0(0x262)]('_ac3q') && (_0x1e34b7 = _0x2f30b5[_0x40bbd0(0x231)]['reels_media'][0x0][_0x40bbd0(0x1a4)][_0x22ff5e][_0x40bbd0(0x3d0)][0x0]['src'], _0xd68c62['RENAME_PUBLISH_DATE'] && (_0x256fcb = _0x2f30b5[_0x40bbd0(0x231)]['reels_media'][0x0][_0x40bbd0(0x1a4)][_0x22ff5e][_0x40bbd0(0x3c5)], _0x5399c3 = _0x2f30b5[_0x40bbd0(0x231)][_0x40bbd0(0x358)][0x0][_0x40bbd0(0x1a4)][_0x22ff5e]['id']));
                            }));
                        }
                        _0x2938ed[_0x2b25a4(0x353)][_0x2b25a4(0x209)][_0x5b69b9] = _0x2f30b5;
                    }
                    _0x1e34b7[_0x2b25a4(0x272)] == 0x0 ? alert(_0x31ce74(_0x2b25a4(0x37b))) : _0x33bee7 ? _0x239c68(_0x1e34b7) : _0x306fb5(_0x1e34b7, _0x5b69b9, _0x2b25a4(0x209), _0x256fcb, _0x155932, _0x5399c3);
                } else {
                    let _0x32ecc4 = _0x23e092('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')['attr'](_0x2b25a4(0x2bc))?.[_0x2b25a4(0x36a)](',')[0x0]?.['split']('\x20')[0x0], _0x536a85 = _0x32ecc4 ? _0x32ecc4 : _0x23e092('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')['filter'](function () {
                            const _0x301e85 = _0x2b25a4;
                            return _0x23e092(this)[_0x301e85(0x172)]('a')['length'] === 0x0 && _0x23e092(this)[_0x301e85(0x1f5)]() === _0x23e092(this)['parent']()['width']();
                        })[_0x2b25a4(0x379)]('src');
                    if (!_0x536a85) {
                        let _0x5eb7d7 = _0x23e092(_0x2b25a4(0x1ed));
                        _0x536a85 = _0x5eb7d7[_0x2b25a4(0x379)]('srcset') ? _0x5eb7d7[_0x2b25a4(0x379)](_0x2b25a4(0x2bc))?.[_0x2b25a4(0x36a)](',')[0x0]?.[_0x2b25a4(0x36a)]('\x20')[0x0] : _0x5eb7d7[_0x2b25a4(0x379)](_0x2b25a4(0x1b1));
                    }
                    _0xd68c62[_0x2b25a4(0x335)] && (_0x256fcb = new Date(_0x23e092('body\x20>\x20div\x20section:visible\x20time[datetime][class]')[_0x2b25a4(0x27a)]()['attr'](_0x2b25a4(0x362)))[_0x2b25a4(0x261)]());
                    let _0x302825 = _0x536a85, _0x3dc2ac = _0x2b25a4(0x1ec);
                    _0x33bee7 ? _0x239c68(_0x302825) : _0x306fb5(_0x302825, _0x5b69b9, _0x2b25a4(0x209), _0x256fcb, _0x3dc2ac, _0x37d292(_0x302825) ?? '');
                }
                _0x2938ed[_0x2b25a4(0x2c0)] = ![], _0x24d878(![]);
            } else {
                if (!_0x23e092('.IG_DWSTORY')[_0x2b25a4(0x272)]) {
                    _0x2938ed['GL_dataCache'][_0x2b25a4(0x209)] = {};
                    let _0x2856a1 = null;
                    _0x23e092(_0x2b25a4(0x15f))[_0x2b25a4(0x272)] > 0x0 ? _0x2856a1 = _0x23e092(_0x2b25a4(0x27e)) : (_0x2856a1 = _0x23e092('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x2856a1[_0x2b25a4(0x223)](_0x2b25a4(0x1eb), _0x2b25a4(0x20d)));
                    _0x2856a1[_0x2b25a4(0x272)] === 0x0 && (_0x2856a1 = _0x23e092(_0x2b25a4(0x33a))[_0x2b25a4(0x3a1)]()['parent']()[_0x2b25a4(0x3a1)]()[_0x2b25a4(0x2da)](_0x2b25a4(0x1ad)), _0x2856a1[_0x2b25a4(0x223)]('position', _0x2b25a4(0x20d)));
                    _0x2856a1[_0x2b25a4(0x272)] === 0x0 && (_0x2856a1 = _0x23e092('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x2b25a4(0x3a1)]()['parent']()[_0x2b25a4(0x3a1)]()[_0x2b25a4(0x2da)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x2856a1[_0x2b25a4(0x223)](_0x2b25a4(0x1eb), _0x2b25a4(0x20d)));
                    if (_0x2856a1[_0x2b25a4(0x272)] === 0x0) {
                        let _0x228f9f = _0x23e092(_0x2b25a4(0x181)), _0x395e67 = 0x0;
                        _0x228f9f['each'](function () {
                            const _0x4c59ef = _0x2b25a4;
                            _0x23e092(this)[_0x4c59ef(0x1f5)]() > _0x395e67 && (_0x395e67 = _0x23e092(this)[_0x4c59ef(0x1f5)](), _0x2856a1 = _0x23e092(this)[_0x4c59ef(0x2fb)](_0x4c59ef(0x200))[_0x4c59ef(0x27a)]());
                        });
                    }
                    if (_0x2856a1 != null) {
                        _0x2856a1[_0x2b25a4(0x27a)]()[_0x2b25a4(0x223)](_0x2b25a4(0x1eb), _0x2b25a4(0x20d)), _0x2856a1[_0x2b25a4(0x27a)]()[_0x2b25a4(0x2f1)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x31ce74('DW') + _0x2b25a4(0x152) + _0x30a673[_0x2b25a4(0x141)] + _0x2b25a4(0x3ce)), _0x2856a1[_0x2b25a4(0x27a)]()[_0x2b25a4(0x2f1)](_0x2b25a4(0x3c9) + _0x31ce74('NEW_TAB') + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x30a673[_0x2b25a4(0x257)] + _0x2b25a4(0x3ce));
                        let _0x26abee = _0x509043(_0x5b69b9);
                        _0x26abee['length'] > 0x1 && _0x2856a1[_0x2b25a4(0x27a)]()[_0x2b25a4(0x2f1)](_0x2b25a4(0x380) + _0x31ce74(_0x2b25a4(0x284)) + '\x22\x20class=\x22IG_DWSTORY_ALL\x22>' + _0x30a673[_0x2b25a4(0x246)] + _0x2b25a4(0x3ce)), _0x2856a1['find'](_0x2b25a4(0x2af))[_0x2b25a4(0x277)](function () {
                            _0x23e092(this)['on']('load', function () {
                                const _0xef999c = a0_0x499e;
                                !_0x23e092(this)[_0xef999c(0x231)](_0xef999c(0x385)) && (_0x2856a1['find'](_0xef999c(0x3a6))[_0xef999c(0x272)] === 0x0 ? (_0x23e092(this)[_0xef999c(0x379)](_0xef999c(0x182), !![]), _0x23e092(_0xef999c(0x3a6))[_0xef999c(0x307)](), _0x274880('(story)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x23e092(this)[_0xef999c(0x379)]('data-remove-thumbnail', !![]), _0x274880(_0xef999c(0x393))));
                            });
                        });
                    }
                }
            }
        }
        async function _0xfcb1b4(_0x4539b6, _0x2e4f4e) {
            const _0x329418 = _0x4b2cd0;
            if (_0x4539b6) {
                let _0x5d77fc = new Date()[_0x329418(0x261)](), _0x12f294 = Math[_0x329418(0x2c5)](_0x5d77fc / 0x3e8), _0x4e47f9 = 'jpg', _0x16ea51 = _0x23e092(_0x329418(0x183))[_0x329418(0x27a)]()[_0x329418(0x1c7)]() || location[_0x329418(0x31d)]['split']('/')['at'](0x2), _0x1c921f = location[_0x329418(0x31d)]['replace'](/\/$/ig, '')[_0x329418(0x36a)]('/')['at'](-0x1), _0x18142f = '', _0xd088bf = null;
                _0x24d878(!![]);
                if (_0xd68c62['FORCE_RESOURCE_VIA_MEDIA'] && !_0x2938ed[_0x329418(0x2c0)]) {
                    let _0x1f7b8d = await _0x1da2dc(_0x16ea51), _0x2432dd = _0x1f7b8d[_0x329418(0x2d1)]['pk'], _0x5091a5 = await _0x436e99(_0x2432dd), _0x3090d2 = location[_0x329418(0x31d)][_0x329418(0x36a)]('/')[_0x329418(0x20e)](_0x472a4e => _0x472a4e['length'] > 0x0 && _0x472a4e[_0x329418(0x186)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x5091a5[_0x329418(0x231)][_0x329418(0x358)][0x0][_0x329418(0x1a4)][_0x329418(0x1c2)](_0x464701 => {
                        _0x464701['id'] == _0x3090d2 && (_0xd088bf = _0x464701['id']);
                    });
                    if (_0xd088bf == null) {
                        let _0x32765e = _0x509043(_0x16ea51);
                        _0x32765e[_0x329418(0x277)](function (_0x3a6743) {
                            const _0x10e691 = _0x329418;
                            _0x23e092(this)[_0x10e691(0x2fb)]()['length'] > 0x0 && (_0xd088bf = _0x5091a5[_0x10e691(0x231)][_0x10e691(0x358)][0x0]['items'][_0x3a6743]['id']);
                        });
                    }
                    _0xd088bf == null && (_0x23e092(_0x329418(0x3a5))[_0x329418(0x277)](function (_0x3e9c14) {
                        const _0x4a2e45 = _0x329418;
                        _0x23e092(this)[_0x4a2e45(0x262)](_0x4a2e45(0x1af)) && (_0x23e092(this)[_0x4a2e45(0x2fb)]()[_0x4a2e45(0x272)] > 0x0 && (_0xd088bf = _0x5091a5[_0x4a2e45(0x231)][_0x4a2e45(0x358)][0x0][_0x4a2e45(0x1a4)][_0x3e9c14]['id']));
                    }), _0x23e092(_0x329418(0x169))['each'](function (_0x22a50a) {
                        const _0x224d70 = _0x329418;
                        _0x23e092(this)[_0x224d70(0x2fb)]()[_0x224d70(0x262)](_0x224d70(0x32f)) && (_0xd088bf = _0x5091a5[_0x224d70(0x231)]['reels_media'][0x0][_0x224d70(0x1a4)][_0x22a50a]['id']);
                    }));
                    _0xd088bf == null && (_0xd088bf = location['pathname']['split']('/')[_0x329418(0x20e)](_0x3f2d82 => _0x3f2d82['length'] > 0x0 && _0x3f2d82[_0x329418(0x186)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x21fe27 = await _0x2d4e3b(_0xd088bf);
                    _0xd68c62[_0x329418(0x335)] && (_0x12f294 = _0x21fe27[_0x329418(0x1a4)][0x0]['taken_at']);
                    _0x21fe27[_0x329418(0x1aa)] === 'ok' ? _0x306fb5(_0x21fe27[_0x329418(0x1a4)][0x0][_0x329418(0x19d)][_0x329418(0x383)][0x0][_0x329418(0x334)], _0x16ea51, _0x329418(0x209), _0x12f294, _0x329418(0x1ec), _0xd088bf) : (_0xd68c62[_0x329418(0x325)] ? (_0x2938ed[_0x329418(0x2c0)] = !![], _0xfcb1b4(!![], _0x2e4f4e)) : alert(_0x329418(0x226) + _0x21fe27[_0x329418(0x33e)]), _0x274880(_0x21fe27));
                    _0x24d878(![]);
                    return;
                }
                if (_0x2938ed[_0x329418(0x353)][_0x329418(0x209)][_0x16ea51] && !_0x2e4f4e) {
                    _0x274880(_0x329418(0x3d2), _0x16ea51), _0x2938ed[_0x329418(0x353)][_0x329418(0x209)][_0x16ea51][_0x329418(0x231)]['reels_media'][0x0][_0x329418(0x1a4)][_0x329418(0x1c2)](_0x40032a => {
                        const _0x4d7386 = _0x329418;
                        _0x40032a['id'] == _0x1c921f && (_0x18142f = _0x40032a[_0x4d7386(0x1a0)], _0xd68c62[_0x4d7386(0x335)] && (_0x12f294 = _0x40032a['taken_at_timestamp'], _0xd088bf = _0x40032a['id']));
                    });
                    if (_0x18142f['length'] == 0x0) {
                        _0x274880(_0x329418(0x32d), _0x16ea51), _0xfcb1b4(!![], !![]);
                        return;
                    }
                } else {
                    let _0x3cd7b9 = await _0x1da2dc(_0x16ea51), _0x4239cd = _0x3cd7b9[_0x329418(0x2d1)]['pk'], _0x5d3750 = await _0x436e99(_0x4239cd);
                    _0x5d3750[_0x329418(0x231)][_0x329418(0x358)][0x0][_0x329418(0x1a4)][_0x329418(0x1c2)](_0x386cc4 => {
                        const _0x25bd92 = _0x329418;
                        _0x386cc4['id'] == _0x1c921f && (_0x18142f = _0x386cc4[_0x25bd92(0x1a0)], _0xd68c62[_0x25bd92(0x335)] && (_0x12f294 = _0x386cc4['taken_at_timestamp'], _0xd088bf = _0x386cc4['id']));
                    });
                    if (_0x18142f[_0x329418(0x272)] == 0x0) {
                        let _0x2dd5af = _0x509043(_0x16ea51);
                        _0x2dd5af[_0x329418(0x277)](function (_0x238c07) {
                            const _0x7596da = _0x329418;
                            _0x23e092(this)[_0x7596da(0x2fb)]()[_0x7596da(0x272)] > 0x0 && (_0x18142f = _0x5d3750[_0x7596da(0x231)][_0x7596da(0x358)][0x0][_0x7596da(0x1a4)][_0x238c07][_0x7596da(0x1a0)], _0xd68c62[_0x7596da(0x335)] && (_0x12f294 = _0x5d3750[_0x7596da(0x231)][_0x7596da(0x358)][0x0]['items'][_0x238c07]['taken_at_timestamp'], _0xd088bf = _0x5d3750[_0x7596da(0x231)][_0x7596da(0x358)][0x0][_0x7596da(0x1a4)][_0x238c07]['id']));
                        }), _0x18142f[_0x329418(0x272)] == 0x0 && (_0x23e092('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x329418(0x277)](function (_0x10fb66) {
                            const _0xee3663 = _0x329418;
                            _0x23e092(this)[_0xee3663(0x262)](_0xee3663(0x1af)) && (_0x23e092(this)[_0xee3663(0x2fb)]()['length'] > 0x0 && (_0x18142f = _0x5d3750['data'][_0xee3663(0x358)][0x0][_0xee3663(0x1a4)][_0x10fb66]['display_url'], _0xd68c62[_0xee3663(0x335)] && (_0x12f294 = _0x5d3750[_0xee3663(0x231)][_0xee3663(0x358)][0x0][_0xee3663(0x1a4)][_0x10fb66]['taken_at_timestamp'], _0xd088bf = _0x5d3750[_0xee3663(0x231)][_0xee3663(0x358)][0x0][_0xee3663(0x1a4)][_0x10fb66]['id'])));
                        }), _0x23e092(_0x329418(0x169))[_0x329418(0x277)](function (_0x2db96c) {
                            const _0x4d7152 = _0x329418;
                            _0x23e092(this)[_0x4d7152(0x2fb)]()['hasClass'](_0x4d7152(0x32f)) && (_0x18142f = _0x5d3750[_0x4d7152(0x231)][_0x4d7152(0x358)][0x0][_0x4d7152(0x1a4)][_0x2db96c][_0x4d7152(0x1a0)], _0xd68c62[_0x4d7152(0x335)] && (_0x12f294 = _0x5d3750['data'][_0x4d7152(0x358)][0x0][_0x4d7152(0x1a4)][_0x2db96c]['taken_at_timestamp'], _0xd088bf = _0x5d3750['data']['reels_media'][0x0][_0x4d7152(0x1a4)][_0x2db96c]['id']));
                        }));
                    }
                }
                _0x306fb5(_0x18142f, _0x16ea51, _0x329418(0x189), _0x12f294, _0x4e47f9, _0xd088bf), _0x2938ed[_0x329418(0x2c0)] = ![], _0x24d878(![]);
            } else {
                if (_0x23e092('body\x20>\x20div\x20div.IG_DWSTORY')[_0x329418(0x3a1)]()[_0x329418(0x2da)]('video[class]')['length']) {
                    let _0xada944 = null;
                    _0x23e092(_0x329418(0x15f))[_0x329418(0x272)] > 0x0 ? _0xada944 = _0x23e092(_0x329418(0x27e)) : (_0xada944 = _0x23e092(_0x329418(0x25e)), _0xada944[_0x329418(0x223)](_0x329418(0x1eb), 'relative'));
                    _0xada944[_0x329418(0x272)] === 0x0 && (_0xada944 = _0x23e092(_0x329418(0x33a))[_0x329418(0x3a1)]()[_0x329418(0x3a1)]()[_0x329418(0x3a1)]()[_0x329418(0x2da)](_0x329418(0x1ad)), _0xada944[_0x329418(0x223)](_0x329418(0x1eb), _0x329418(0x20d)));
                    _0xada944[_0x329418(0x272)] === 0x0 && (_0xada944 = _0x23e092(_0x329418(0x33a))[_0x329418(0x3a1)]()['parent']()[_0x329418(0x3a1)]()[_0x329418(0x2da)](_0x329418(0x391)), _0xada944['css'](_0x329418(0x1eb), _0x329418(0x20d)));
                    if (_0xada944[_0x329418(0x272)] === 0x0) {
                        let _0xf8872d = _0x23e092(_0x329418(0x181)), _0x5acc29 = 0x0;
                        _0xf8872d[_0x329418(0x277)](function () {
                            const _0x154a78 = _0x329418;
                            _0x23e092(this)[_0x154a78(0x1f5)]() > _0x5acc29 && (_0x5acc29 = _0x23e092(this)[_0x154a78(0x1f5)](), _0xada944 = _0x23e092(this)[_0x154a78(0x2fb)](_0x154a78(0x200))[_0x154a78(0x27a)]());
                        });
                    }
                    _0xada944 != null && (_0xada944[_0x329418(0x27a)]()[_0x329418(0x223)](_0x329418(0x1eb), 'relative'), _0xada944[_0x329418(0x27a)]()['append'](_0x329418(0x3a7) + _0x31ce74(_0x329418(0x3a2)) + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x30a673['THUMBNAIL'] + _0x329418(0x3ce)));
                }
            }
        }
        function _0x21a408(_0xeacf38) {
            return new Promise((_0x2b34d1, _0x57e266) => {
                const _0x43e396 = a0_0x499e;
                let _0x20eb94 = 'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22' + _0xeacf38 + _0x43e396(0x327);
                GM_xmlhttpRequest({
                    'method': _0x43e396(0x2b0),
                    'url': _0x20eb94,
                    'onload': function (_0x243feb) {
                        const _0x13c657 = _0x43e396;
                        try {
                            let _0x79bc20 = JSON[_0x13c657(0x2df)](_0x243feb[_0x13c657(0x38a)]);
                            _0x2b34d1(_0x79bc20);
                        } catch (_0x16aa14) {
                            _0x274880('getHighlightStories()', _0x13c657(0x17d), _0x16aa14[_0x13c657(0x33e)]), _0x57e266(_0x16aa14);
                        }
                    },
                    'onerror': function (_0x3e1db3) {
                        const _0xa35ed7 = _0x43e396;
                        _0x274880(_0xa35ed7(0x392), _0xa35ed7(0x17d), _0x3e1db3), _0x57e266(_0x3e1db3);
                    }
                });
            });
        }
        function _0x436e99(_0x1086ac) {
            return new Promise((_0x587c73, _0x592681) => {
                const _0x5b24df = a0_0x499e;
                let _0x1f0e67 = _0x5b24df(0x24c) + _0x1086ac + _0x5b24df(0x327);
                GM_xmlhttpRequest({
                    'method': _0x5b24df(0x2b0),
                    'url': _0x1f0e67,
                    'onload': function (_0x6acb13) {
                        const _0x17319f = _0x5b24df;
                        try {
                            let _0x2d3fc7 = JSON['parse'](_0x6acb13[_0x17319f(0x38a)]);
                            _0x274880('getStories()', _0x2d3fc7), _0x587c73(_0x2d3fc7);
                        } catch (_0x1068d8) {
                            _0x274880('getStories()', _0x17319f(0x17d), _0x1068d8[_0x17319f(0x33e)]), _0x592681(_0x1068d8);
                        }
                    },
                    'onerror': function (_0x2bb59a) {
                        const _0xfad16a = _0x5b24df;
                        _0x274880(_0xfad16a(0x218), _0xfad16a(0x17d), _0x2bb59a), _0x592681(_0x2bb59a);
                    }
                });
            });
        }
        function _0x1da2dc(_0x5d14da) {
            return new Promise((_0x5bb197, _0x15c0f3) => {
                const _0x26a75c = a0_0x499e;
                let _0x42e8e5 = _0x26a75c(0x352) + _0x5d14da;
                GM_xmlhttpRequest({
                    'method': _0x26a75c(0x2b0),
                    'url': _0x42e8e5,
                    'onload': function (_0x28f129) {
                        const _0x3ac56f = _0x26a75c;
                        let _0x127d52 = JSON[_0x3ac56f(0x2df)](_0x28f129['response']), _0x28df5c = null;
                        _0x127d52[_0x3ac56f(0x3b3)][_0x3ac56f(0x1c2)](_0x4c4108 => {
                            const _0x17687e = _0x3ac56f;
                            _0x4c4108[_0x17687e(0x2d1)][_0x17687e(0x1f9)]?.[_0x17687e(0x14b)]() === _0x5d14da?.[_0x17687e(0x14b)]() && (_0x28df5c = _0x4c4108);
                        }), _0x28df5c != null ? (_0x274880(_0x3ac56f(0x1bc), _0x28df5c), _0x5bb197(_0x28df5c)) : _0x2c5497(_0x5d14da)[_0x3ac56f(0x23a)](_0x5d82a2 => {
                            _0x5bb197(_0x5d82a2);
                        })[_0x3ac56f(0x2ff)](_0x2adcf4 => {
                            const _0x2cc317 = _0x3ac56f;
                            alert(_0x2cc317(0x2a0));
                        });
                    },
                    'onerror': function (_0x3768ad) {
                        const _0x235966 = _0x26a75c;
                        _0x274880(_0x235966(0x1bc), 'reject', _0x3768ad), _0x15c0f3(_0x3768ad);
                    }
                });
            });
        }
        function _0x2c5497(_0x5f5947) {
            return new Promise((_0x3dc8aa, _0x2b0f08) => {
                const _0x50ea9d = a0_0x499e;
                let _0x3345a2 = _0x50ea9d(0x145) + _0x5f5947;
                GM_xmlhttpRequest({
                    'method': _0x50ea9d(0x2b0),
                    'url': _0x3345a2,
                    'headers': { 'X-IG-App-ID': _0x13c7e4() },
                    'onload': function (_0x551554) {
                        const _0x2f580d = _0x50ea9d;
                        try {
                            let _0x729c2e = JSON[_0x2f580d(0x2df)](_0x551554[_0x2f580d(0x38a)]), _0x43dab9 = _0x729c2e?.[_0x2f580d(0x231)]?.[_0x2f580d(0x2d1)];
                            if (_0x43dab9 != null) {
                                let _0xd8dc9 = _0x729c2e?.['data'];
                                _0xd8dc9[_0x2f580d(0x2d1)]['pk'] = _0xd8dc9['user']['id'], _0x274880(_0x2f580d(0x142), _0x729c2e), _0x3dc8aa(_0xd8dc9);
                            } else
                                _0x274880(_0x2f580d(0x142), _0x2f580d(0x17d), 'undefined'), _0x2b0f08(_0x2f580d(0x1b7));
                        } catch (_0x11c42d) {
                            _0x274880('getUserIdWithAgent()', _0x2f580d(0x17d), _0x11c42d['message']), _0x2b0f08(_0x11c42d);
                        }
                    },
                    'onerror': function (_0x2cae50) {
                        const _0x1f5eb5 = _0x50ea9d;
                        _0x274880(_0x1f5eb5(0x142), _0x1f5eb5(0x17d), _0x2cae50), _0x2b0f08(_0x2cae50);
                    }
                });
            });
        }
        function _0x5c5b7f(_0x532a7d) {
            return new Promise((_0xd75a4e, _0x338483) => {
                const _0x561048 = a0_0x499e;
                let _0x26d51a = _0x561048(0x1e3) + _0x532a7d + _0x561048(0x361);
                GM_xmlhttpRequest({
                    'method': _0x561048(0x2b0),
                    'url': _0x26d51a,
                    'headers': { 'User-Agent': _0x561048(0x36e) },
                    'onload': function (_0x5b9fb7) {
                        const _0x365262 = _0x561048;
                        try {
                            let _0x3b0728 = JSON['parse'](_0x5b9fb7[_0x365262(0x38a)]);
                            _0x3b0728['status'] !== 'ok' ? (_0x274880(_0x365262(0x37e), _0x365262(0x17d), _0x3b0728), _0x338483(_0x365262(0x18d))) : (_0x274880('getUserHighSizeProfile()', _0x3b0728), _0xd75a4e(_0x3b0728[_0x365262(0x2d1)][_0x365262(0x3cf)]?.[_0x365262(0x334)]));
                        } catch (_0x5a4268) {
                            _0x274880(_0x365262(0x37e), _0x365262(0x17d), _0x5a4268), _0x338483(_0x5a4268);
                        }
                    },
                    'onerror': function (_0x12a627) {
                        const _0x1fea4b = _0x561048;
                        _0x274880(_0x1fea4b(0x37e), _0x1fea4b(0x17d), _0x12a627), _0x338483(_0x12a627);
                    }
                });
            });
        }
        function _0x2eab12(_0x1600aa) {
            return new Promise((_0x519fb6, _0x51d46f) => {
                const _0x5ebf62 = a0_0x499e;
                if (!_0x1600aa)
                    _0x51d46f(_0x5ebf62(0x328));
                let _0xf02ea = _0x1600aa, _0x3f8e3c = _0x5ebf62(0x274) + _0xf02ea + _0x5ebf62(0x372);
                GM_xmlhttpRequest({
                    'method': _0x5ebf62(0x2b0),
                    'url': _0x3f8e3c,
                    'onload': function (_0x5213fb) {
                        const _0x198521 = _0x5ebf62;
                        try {
                            let _0x749d04 = JSON[_0x198521(0x2df)](_0x5213fb[_0x198521(0x38a)]);
                            _0x274880('getPostOwner()', _0x749d04), _0x519fb6(_0x749d04[_0x198521(0x231)][_0x198521(0x234)][_0x198521(0x366)][_0x198521(0x1f9)]);
                        } catch (_0x1c7985) {
                            _0x274880(_0x198521(0x295), _0x198521(0x17d), _0x1c7985[_0x198521(0x33e)]), _0x51d46f(_0x1c7985);
                        }
                    },
                    'onerror': function (_0x4d70d0) {
                        const _0x44966f = _0x5ebf62;
                        _0x274880(_0x44966f(0x295), _0x44966f(0x17d), _0x4d70d0), _0x51d46f(_0x4d70d0);
                    }
                });
            });
        }
        function _0x7475b6(_0x1f49d0) {
            return new Promise((_0x146722, _0x5c04be) => {
                const _0xee660 = a0_0x499e;
                if (!_0x1f49d0)
                    _0x5c04be(_0xee660(0x328));
                let _0x442a19 = _0x1f49d0, _0x1d170a = _0xee660(0x274) + _0x442a19 + _0xee660(0x372);
                GM_xmlhttpRequest({
                    'method': _0xee660(0x2b0),
                    'url': _0x1d170a,
                    'headers': { 'User-Agent': _0xee660(0x36e) },
                    'onload': function (_0x47fed1) {
                        const _0x5ace30 = _0xee660;
                        try {
                            let _0x9f620b = JSON[_0x5ace30(0x2df)](_0x47fed1['response']);
                            _0x274880(_0x9f620b), _0x9f620b['status'] === 'fail' ? (_0x274880('Request\x20with:', 'getBlobMediaWithQuery()', _0x442a19), _0xe9677(_0x442a19)[_0x5ace30(0x23a)](_0x55d6c9 => {
                                const _0x2f8aee = _0x5ace30;
                                _0x146722({
                                    'type': _0x2f8aee(0x2cd),
                                    'data': _0x55d6c9[_0x2f8aee(0x2eb)][_0x2f8aee(0x1a4)][0x0]
                                });
                            })['catch'](_0x2af0f9 => {
                                _0x5c04be(_0x2af0f9);
                            })) : _0x146722({
                                'type': _0x5ace30(0x1be),
                                'data': _0x9f620b['data']
                            });
                        } catch (_0xd69b1e) {
                            _0x274880(_0x5ace30(0x1a1), _0x5ace30(0x17d), _0xd69b1e[_0x5ace30(0x33e)]), _0x5c04be(_0xd69b1e);
                        }
                    },
                    'onerror': function (_0x5697df) {
                        const _0xe54d7f = _0xee660;
                        _0x274880(_0xe54d7f(0x1a1), _0xe54d7f(0x17d), _0x5697df), _0x5c04be(_0x5697df);
                    }
                });
            });
        }
        function _0xe9677(_0x11eb66) {
            return new Promise((_0x174bab, _0x5c3916) => {
                const _0x44fca8 = a0_0x499e;
                if (!_0x11eb66)
                    _0x5c3916(_0x44fca8(0x328));
                let _0x18dd71 = _0x11eb66, _0x1fa02a = _0x44fca8(0x16c) + _0x18dd71 + _0x44fca8(0x2fe);
                GM_xmlhttpRequest({
                    'method': _0x44fca8(0x2b0),
                    'url': _0x1fa02a,
                    'headers': {
                        'User-Agent': _0x44fca8(0x36e),
                        'X-IG-App-ID': _0x13c7e4()
                    },
                    'onload': function (_0x1fee3e) {
                        const _0x4083b2 = _0x44fca8;
                        try {
                            let _0x4ce3eb = JSON[_0x4083b2(0x2df)](_0x1fee3e[_0x4083b2(0x38a)]);
                            _0x274880(_0x4ce3eb), _0x4ce3eb[_0x4083b2(0x1aa)] === _0x4083b2(0x33c) ? (alert('getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a' + _0x4ce3eb['message'] + ':\x20' + _0x4ce3eb['feedback_message']), _0x274880(_0x4083b2(0x21d) + _0x4ce3eb[_0x4083b2(0x33e)] + ':\x20' + _0x4ce3eb[_0x4083b2(0x29e)]), _0x5c3916(_0x1fee3e)) : (_0x274880('getBlobMediaWithQueryID()', _0x4ce3eb['data']), _0x174bab(_0x4ce3eb['data']));
                        } catch (_0x36e153) {
                            _0x274880(_0x4083b2(0x1ef), _0x4083b2(0x17d), _0x36e153[_0x4083b2(0x33e)]), _0x5c3916(_0x36e153);
                        }
                    },
                    'onerror': function (_0x2d5c17) {
                        const _0x54424a = _0x44fca8;
                        _0x274880(_0x54424a(0x1ef), _0x54424a(0x17d), _0x2d5c17), _0x5c3916(_0x2d5c17);
                    }
                });
            });
        }
        function _0x2d4e3b(_0x3801a9) {
            return new Promise((_0x165a9f, _0x555dc5) => {
                const _0x10b93a = a0_0x499e;
                let _0x363b86 = _0x10b93a(0x1e0) + _0x3801a9 + '/info/';
                if (_0x3801a9 == null) {
                    alert(_0x10b93a(0x369)), _0x274880(_0x10b93a(0x39b), 'reject', _0x10b93a(0x369)), _0x24d878(![]), _0x555dc5(-0x1);
                    return;
                }
                if (_0x13c7e4() == null) {
                    alert(_0x10b93a(0x3b1)), _0x274880(_0x10b93a(0x39b), _0x10b93a(0x17d), _0x10b93a(0x3b1)), _0x24d878(![]), _0x555dc5(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x10b93a(0x2b0),
                    'url': _0x363b86,
                    'headers': {
                        'User-Agent': window[_0x10b93a(0x381)]['userAgent'],
                        'Accept': _0x10b93a(0x1a3),
                        'X-IG-App-ID': _0x13c7e4()
                    },
                    'onload': function (_0x36f816) {
                        const _0x5dc020 = _0x10b93a;
                        if (_0x36f816['finalUrl'] == _0x363b86) {
                            let _0x41e6a0 = JSON[_0x5dc020(0x2df)](_0x36f816['response']);
                            _0x274880('getMediaInfo()', _0x41e6a0), _0x165a9f(_0x41e6a0);
                        } else {
                            let _0x2dd643 = new URL(_0x36f816['finalUrl']);
                            _0x2dd643[_0x5dc020(0x31d)][_0x5dc020(0x250)](_0x5dc020(0x286)) ? (_0x274880(_0x5dc020(0x39b), _0x5dc020(0x17d), _0x5dc020(0x1bf)), alert(_0x5dc020(0x1bf))) : (_0x274880(_0x5dc020(0x39b), _0x5dc020(0x17d), 'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x36f816[_0x5dc020(0x2c7)] + '\x22'), alert(_0x5dc020(0x399) + _0x36f816[_0x5dc020(0x2c7)] + '\x22')), _0x24d878(![]), _0x555dc5(-0x1);
                        }
                    },
                    'onerror': function (_0x573883) {
                        const _0x437293 = _0x10b93a;
                        _0x274880(_0x437293(0x39b), _0x437293(0x17d), _0x573883), _0x165a9f(_0x573883);
                    }
                });
            });
        }
        function _0x37d292(_0x53f015) {
            const _0x3d4ef3 = _0x4b2cd0;
            let _0x181fd4 = new URL(_0x53f015), _0x1101c2 = _0x181fd4?.[_0x3d4ef3(0x2f5)]?.[_0x3d4ef3(0x213)](_0x3d4ef3(0x1c4))?.[_0x3d4ef3(0x36a)]('.')['at'](0x0);
            return _0x1101c2 ? atob(_0x1101c2) : null;
        }
        function _0x13c7e4() {
            let _0x236594 = null;
            return _0x23e092('script[type=\x22application/json\x22]')['each'](function () {
                const _0x4ffec5 = a0_0x499e, _0x42d47c = /"APP_ID":"([0-9]+)"/ig, _0x2ba843 = _0x23e092(this)['text']()[_0x4ffec5(0x186)](_0x42d47c);
                _0x2ba843 != null && _0x236594 == null && (_0x236594 = [..._0x23e092(this)['text']()[_0x4ffec5(0x3b5)](_0x42d47c)]);
            }), _0x236594 ? _0x236594['at'](0x0)['at'](-0x1) : null;
        }
        function _0x24d878(_0x247d0c) {
            const _0x4fb6e8 = _0x4b2cd0;
            _0x247d0c ? (_0x23e092('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x4fb6e8(0x25a)]('x1s85apg'), _0x23e092('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x4fb6e8(0x223)](_0x4fb6e8(0x17c), '20000')) : (_0x23e092(_0x4fb6e8(0x390))['addClass']('x1s85apg'), _0x23e092(_0x4fb6e8(0x390))[_0x4fb6e8(0x223)]('z-index', ''));
        }
        function _0x509043(_0x2520f5) {
            const _0xfa51c1 = _0x4b2cd0;
            let _0x3260f8 = _0x23e092(_0xfa51c1(0x27f) + _0x2520f5 + _0xfa51c1(0x2b1))[_0xfa51c1(0x20e)](function () {
                const _0x5aa8e8 = _0xfa51c1;
                return _0x23e092(this)['children']()['length'] === 0x0 && _0x23e092(this)[_0x5aa8e8(0x2da)]('svg')['length'] === 0x0 && _0x23e092(this)[_0x5aa8e8(0x1c7)]()?.[_0x5aa8e8(0x14b)]() === _0x2520f5?.[_0x5aa8e8(0x14b)]();
            })[_0xfa51c1(0x172)]('div:not([class]):not([style])')['filter'](function () {
                const _0x57a55e = _0xfa51c1;
                return _0x23e092(this)['text']()?.[_0x57a55e(0x14b)]() !== _0x2520f5?.[_0x57a55e(0x14b)]();
            })[_0xfa51c1(0x20e)](function () {
                const _0x29c5f2 = _0xfa51c1;
                return _0x23e092(this)[_0x29c5f2(0x2fb)]()[_0x29c5f2(0x272)] > 0x1;
            })[_0xfa51c1(0x27a)]();
            return _0x3260f8[_0xfa51c1(0x272)] === 0x0 && (_0x3260f8 = _0x23e092(_0xfa51c1(0x27f) + _0x2520f5 + '\x22]')[_0xfa51c1(0x20e)](function () {
                const _0x3e1968 = _0xfa51c1;
                return _0x23e092(this)[_0x3e1968(0x2da)](_0x3e1968(0x1c3))['length'] > 0x0;
            })[_0xfa51c1(0x172)](_0xfa51c1(0x34b))[_0xfa51c1(0x20e)](function () {
                const _0x252f52 = _0xfa51c1;
                return _0x23e092(this)[_0x252f52(0x1c7)]()?.['toLowerCase']() !== _0x2520f5?.['toLowerCase']();
            })[_0xfa51c1(0x20e)](function () {
                const _0x1e9809 = _0xfa51c1;
                return _0x23e092(this)[_0x1e9809(0x2fb)]()[_0x1e9809(0x272)] > 0x1;
            })[_0xfa51c1(0x27a)]()), _0x3260f8[_0xfa51c1(0x2fb)]()[_0xfa51c1(0x20e)](function () {
                return _0x23e092(this)['height']() < 0xa;
            })[_0xfa51c1(0x27a)]()[_0xfa51c1(0x2fb)]();
        }
        function _0x43be1c(_0x30a032, _0x2b85b9) {
            const _0x115700 = _0x4b2cd0;
            _0x23e092(_0x115700(0x195))[_0x115700(0x272)] ? (_0x23e092('.circle_wrapper\x20span')[_0x115700(0x1c7)](_0x30a032 + '/' + _0x2b85b9), _0x30a032 >= _0x2b85b9 && _0x23e092(_0x115700(0x195))['fadeOut'](0xfa, function () {
                const _0xf82121 = _0x115700;
                _0x23e092(this)[_0xf82121(0x307)]();
            })) : _0x23e092(_0x115700(0x28e))[_0x115700(0x2f1)](_0x115700(0x1b8) + _0x30a032 + '/' + _0x2b85b9 + _0x115700(0x13d));
        }
        function _0x24846d(_0x5a0820, _0x4a6685) {
            const _0x302b63 = _0x4b2cd0;
            let _0x14ffd9 = _0x5a0820 ? _0x302b63(0x2e9) : '';
            _0x23e092(_0x302b63(0x28e))[_0x302b63(0x2f1)](_0x302b63(0x308) + _0x14ffd9 + _0x302b63(0x2c2)), _0x23e092('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')[_0x302b63(0x2f1)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x31ce74('CLOSE') + _0x302b63(0x256) + GM_info[_0x302b63(0x1ff)][_0x302b63(0x23f)] + _0x302b63(0x30e) + _0x30a673[_0x302b63(0x2e3)] + _0x302b63(0x263)), _0x4a6685 && (_0x23e092(_0x302b63(0x2ac))['append'](_0x302b63(0x34c)), _0x23e092(_0x302b63(0x333))[_0x302b63(0x2f1)](_0x302b63(0x2b2) + _0x31ce74(_0x302b63(0x2ba)) + '</button>'), _0x23e092(_0x302b63(0x333))['append'](_0x302b63(0x25d) + _0x31ce74('BATCH_DOWNLOAD_DIRECT') + '</button>'), _0x23e092(_0x302b63(0x2ac))['append'](_0x302b63(0x1c9) + _0x31ce74(_0x302b63(0x21e)) + '</span></label>'));
        }
        function _0x186a6f(_0x556673) {
            const _0x3f4a3f = _0x4b2cd0;
            _0x23e092(_0x3f4a3f(0x197))[_0x3f4a3f(0x272)] && (_0x556673 ? _0x23e092('.IG_POPUP_DIG')[_0x3f4a3f(0x310)](_0x3f4a3f(0x2e9)) : _0x23e092('.IG_POPUP_DIG')['removeClass'](_0x3f4a3f(0x2e9)));
        }
        function _0x306fb5(_0x11932b, _0x3fb383, _0x5bb4ea, _0x1f2471, _0x580970, _0x5bc41d) {
            return new Promise(_0x4f5fbd => {
                setTimeout(() => {
                    const _0x58e7e3 = a0_0x499e;
                    _0x24d878(!![]), fetch(_0x11932b)[_0x58e7e3(0x23a)](_0x3ace30 => {
                        const _0x2b2af2 = _0x58e7e3;
                        return _0x3ace30[_0x2b2af2(0x217)]()[_0x2b2af2(0x23a)](_0x20336e => {
                            _0x24d878(![]), _0x1119ff(_0x11932b, _0x20336e, _0x3fb383, _0x5bb4ea, _0x1f2471, _0x580970, _0x5bc41d), _0x4f5fbd(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x1119ff(_0x35ed35, _0x4bdeea, _0x360849, _0x23bb5d, _0x4227d7, _0x5b2199, _0x2dff57) {
            const _0x515a8e = _0x4b2cd0;
            _0x4227d7 = parseInt(_0x4227d7[_0x515a8e(0x244)]()[_0x515a8e(0x2a4)](0xd, '0'));
            _0xd68c62[_0x515a8e(0x335)] && (_0x4227d7 = parseInt(_0x4227d7[_0x515a8e(0x244)]()[_0x515a8e(0x2a4)](0xd, '0')));
            const _0x1f45ac = new Date(_0x4227d7), _0x4d66c3 = document[_0x515a8e(0x207)]('a'), _0x40aaae = new URL(_0x35ed35)['pathname']['split']('/')['at'](-0x1)['split']('.')['slice'](0x0, -0x1)['join']('.'), _0x45b74d = _0x1f45ac[_0x515a8e(0x14e)]()[_0x515a8e(0x244)](), _0x1b911c = (_0x1f45ac[_0x515a8e(0x2ad)]() + 0x1)[_0x515a8e(0x244)]()[_0x515a8e(0x313)](0x2, '0'), _0x2552f7 = _0x1f45ac['getDate']()[_0x515a8e(0x244)]()['padStart'](0x2, '0'), _0x483a19 = _0x1f45ac['getHours']()['toString']()[_0x515a8e(0x313)](0x2, '0'), _0xda390c = _0x1f45ac['getMinutes']()['toString']()[_0x515a8e(0x313)](0x2, '0'), _0x5f38af = _0x1f45ac['getSeconds']()[_0x515a8e(0x244)]()[_0x515a8e(0x313)](0x2, '0');
            var _0x8614f4 = _0x2938ed['fileRenameFormat'][_0x515a8e(0x138)](), _0x54e515 = _0x2dff57 ?? '', _0x2755b0 = {
                    '%USERNAME%': _0x360849,
                    '%SOURCE_TYPE%': _0x23bb5d,
                    '%SHORTCODE%': _0x54e515,
                    '%YEAR%': _0x45b74d,
                    '%2-YEAR%': _0x45b74d[_0x515a8e(0x1e6)](-0x2),
                    '%MONTH%': _0x1b911c,
                    '%DAY%': _0x2552f7,
                    '%HOUR%': _0x483a19,
                    '%MINUTE%': _0xda390c,
                    '%SECOND%': _0x5f38af,
                    '%ORIGINAL_NAME%': _0x40aaae,
                    '%ORIGINAL_NAME_FIRST%': _0x40aaae[_0x515a8e(0x36a)]('_')['at'](0x0)
                };
            _0x8614f4 = _0x8614f4[_0x515a8e(0x35c)](/%[\w\-]+%/g, function (_0x268bd8) {
                return _0x2755b0[_0x268bd8] || _0x268bd8;
            });
            const _0x55a48e = _0x360849 + '_' + _0x40aaae + '.' + _0x5b2199;
            _0x4d66c3[_0x515a8e(0x1e2)] = URL[_0x515a8e(0x1bd)](_0x4bdeea), _0x4d66c3['setAttribute']('download', _0xd68c62[_0x515a8e(0x193)] ? _0x8614f4 + '.' + _0x5b2199 : _0x55a48e), _0x4d66c3['click'](), _0x4d66c3[_0x515a8e(0x307)]();
        }
        async function _0x43e921(_0xc90761, _0x16ab98) {
            const _0x57fdc9 = _0x4b2cd0;
            let _0x1a94e2 = new Date()['getTime'](), _0x4c7c3b = Math[_0x57fdc9(0x2c5)](_0x1a94e2 / 0x3e8), _0x15e9e0 = _0x23e092(_0xc90761)[_0x57fdc9(0x379)]('data-username') ? _0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x288)) : _0x2938ed[_0x57fdc9(0x34f)];
            !_0x15e9e0 && _0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x2cf)) && (_0x274880(_0x57fdc9(0x271), _0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x35b))), _0x15e9e0 = await _0x2eab12(_0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x2cf)))['catch'](_0x31d6f4 => {
                const _0x1a99bf = _0x57fdc9;
                _0x274880(_0x1a99bf(0x178), _0x31d6f4[_0x1a99bf(0x33e)]);
            }), _0x15e9e0 == null && (_0x15e9e0 = _0x57fdc9(0x204)));
            _0xd68c62[_0x57fdc9(0x335)] && _0x23e092(_0xc90761)[_0x57fdc9(0x379)]('datetime') && (_0x4c7c3b = parseInt(_0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x362))));
            if (_0xd68c62[_0x57fdc9(0x203)]) {
                _0x24d878(!![]);
                let _0x1a90d3 = await _0x2d4e3b(_0x23e092(_0xc90761)['attr'](_0x57fdc9(0x1f6)));
                _0x24d878(![]);
                if (_0x1a90d3[_0x57fdc9(0x1aa)] === 'ok') {
                    var _0x5b0cbd = null;
                    _0x1a90d3[_0x57fdc9(0x1a4)][0x0][_0x57fdc9(0x212)] ? _0x5b0cbd = _0x1a90d3[_0x57fdc9(0x1a4)][0x0][_0x57fdc9(0x212)][0x0][_0x57fdc9(0x334)] : (_0x1a90d3[_0x57fdc9(0x1a4)][0x0][_0x57fdc9(0x19d)][_0x57fdc9(0x383)][_0x57fdc9(0x2ef)](function (_0xb43ebd, _0x226a11) {
                        const _0x1f21dd = _0x57fdc9;
                        let _0x3884d7 = new URL(_0xb43ebd[_0x1f21dd(0x334)])[_0x1f21dd(0x2f5)][_0x1f21dd(0x213)](_0x1f21dd(0x330)), _0x37c011 = new URL(_0x226a11[_0x1f21dd(0x334)])[_0x1f21dd(0x2f5)][_0x1f21dd(0x213)](_0x1f21dd(0x330));
                        if (_0x3884d7 && _0x37c011) {
                            if (_0x3884d7['length'] > _0x37c011[_0x1f21dd(0x272)])
                                return 0x1;
                            if (_0x3884d7[_0x1f21dd(0x272)] < _0x37c011[_0x1f21dd(0x272)])
                                return -0x1;
                        } else {
                            if (_0xb43ebd[_0x1f21dd(0x1f5)] < _0x226a11[_0x1f21dd(0x1f5)])
                                return 0x1;
                            if (_0xb43ebd[_0x1f21dd(0x1f5)] > _0x226a11['width'])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x5b0cbd = _0x1a90d3['items'][0x0][_0x57fdc9(0x19d)][_0x57fdc9(0x383)][0x0][_0x57fdc9(0x334)]);
                    if (_0x16ab98) {
                        let _0x2a2eff = new URL(_0x5b0cbd);
                        _0x2a2eff['host'] = _0x57fdc9(0x378), _0x239c68(_0x2a2eff['href']);
                    } else
                        _0x306fb5(_0x5b0cbd, _0x15e9e0, _0x23e092(_0xc90761)[_0x57fdc9(0x379)]('data-name'), _0x4c7c3b, _0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x293)), _0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x2cf)));
                } else {
                    if (_0xd68c62[_0x57fdc9(0x325)]) {
                        if (_0x16ab98) {
                            let _0x4d20da = new URL(_0x23e092(_0xc90761)['attr'](_0x57fdc9(0x35b)));
                            _0x4d20da[_0x57fdc9(0x312)] = _0x57fdc9(0x378), _0x239c68(_0x4d20da[_0x57fdc9(0x1e2)]);
                        } else
                            _0x306fb5(_0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x35b)), _0x15e9e0, _0x23e092(_0xc90761)[_0x57fdc9(0x379)]('data-name'), _0x4c7c3b, _0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x293)), _0x23e092(_0xc90761)['attr'](_0x57fdc9(0x2cf)));
                    } else
                        alert(_0x57fdc9(0x226) + _0x1a90d3['message']);
                    _0x274880(_0x1a90d3);
                }
            } else
                _0x306fb5(_0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x35b)), _0x15e9e0, _0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x3d1)), _0x4c7c3b, _0x23e092(_0xc90761)[_0x57fdc9(0x379)]('data-type'), _0x23e092(_0xc90761)[_0x57fdc9(0x379)](_0x57fdc9(0x2cf)));
        }
        function _0x367178() {
            const _0x49bee4 = _0x4b2cd0;
            for (let _0xf33739 of _0x2938ed[_0x49bee4(0x339)]) {
                _0x274880(_0x49bee4(0x13b), _0xf33739), GM_unregisterMenuCommand(_0xf33739);
            }
            _0x2938ed[_0x49bee4(0x339)][_0x49bee4(0x1d4)](GM_registerMenuCommand(_0x31ce74(_0x49bee4(0x28b)), () => {
                _0x492138();
            }, { 'accessKey': 'w' })), _0x2938ed['registerMenuIds'][_0x49bee4(0x1d4)](GM_registerMenuCommand(_0x31ce74('DONATE'), () => {
                GM_openInTab('https://ko-fi.com/snkoarashi', { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x2938ed[_0x49bee4(0x339)][_0x49bee4(0x1d4)](GM_registerMenuCommand(_0x31ce74(_0x49bee4(0x17a)), () => {
                _0x2f77e0();
            }, { 'accessKey': 'z' })), _0x2938ed[_0x49bee4(0x339)][_0x49bee4(0x1d4)](GM_registerMenuCommand(_0x31ce74(_0x49bee4(0x39c)), () => {
                _0x221068();
            }, { 'accessKey': 'f' })), _0x2938ed[_0x49bee4(0x339)][_0x49bee4(0x1d4)](GM_registerMenuCommand(_0x31ce74(_0x49bee4(0x2d8)), () => {
                _0x380586();
            }, { 'accessKey': 'c' })), _0x2938ed[_0x49bee4(0x339)][_0x49bee4(0x1d4)](GM_registerMenuCommand(_0x31ce74(_0x49bee4(0x139)), () => {
                _0x1045ce();
            }, { 'accessKey': 'r' }));
        }
        function _0x2d2362(_0x39bd75) {
            const _0x229796 = _0x4b2cd0;
            if (!_0xd68c62['CHECK_UPDATE'])
                return;
            const _0x3eecde = GM_getValue(_0x229796(0x29f)) ?? new Date()['getTime'](), _0x5784c1 = new Date()['getTime']();
            _0x5784c1 > parseInt(_0x3eecde) + _0x39bd75 * 0x3e8 && (GM_setValue(_0x229796(0x29f), new Date()['getTime']()), _0x380586());
        }
        function _0x380586() {
            const _0x47a5ee = _0x4b2cd0, _0x1fadc1 = GM_info[_0x47a5ee(0x1ff)][_0x47a5ee(0x23f)], _0x410a3b = _0x47a5ee(0x1ba);
            GM_xmlhttpRequest({
                'method': _0x47a5ee(0x2b0),
                'url': _0x410a3b,
                'onload': function (_0x342e0a) {
                    const _0x461c53 = _0x47a5ee, _0x1b3462 = _0x342e0a[_0x461c53(0x21b)], _0x5a423a = _0x1b3462[_0x461c53(0x186)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x5a423a && _0x5a423a[0x1]) {
                        const _0x40ac97 = _0x5a423a[0x1];
                        _0x274880(_0x461c53(0x33b), _0x1fadc1, '|', _0x461c53(0x2e8), _0x40ac97), _0x40ac97 !== _0x1fadc1 && typeof this['updatenotification'] === _0x461c53(0x1b7) ? (this[_0x461c53(0x29c)] = null, GM_notification({
                            'text': _0x31ce74('NOTICE_UPDATE_CONTENT'),
                            'title': _0x31ce74(_0x461c53(0x321)),
                            'tag': 'ig_helper_notice',
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x461c53(0x3cb),
                            'onclick': _0x369b3b => {
                                const _0x54a5a1 = _0x461c53;
                                _0x369b3b?.[_0x54a5a1(0x2de)]();
                                var _0x1f6ba3 = GM_openInTab(GM_info[_0x54a5a1(0x1ff)][_0x54a5a1(0x360)]);
                                setTimeout(() => {
                                    const _0x48c2df = _0x54a5a1;
                                    _0x1f6ba3[_0x48c2df(0x329)]();
                                }, 0xfa);
                            }
                        })) : _0x274880(_0x461c53(0x23c));
                    } else
                        console[_0x461c53(0x230)](_0x461c53(0x36c));
                }
            });
        }
        function _0x492138() {
            const _0x231831 = _0x4b2cd0;
            _0x23e092('.IG_POPUP_DIG')[_0x231831(0x307)](), _0x24846d(), _0x23e092('.IG_POPUP_DIG\x20#post_info')[_0x231831(0x1c7)]('Preference\x20Settings'), _0x23e092(_0x231831(0x31e))[_0x231831(0x2f1)](_0x231831(0x2f8));
            for (let _0x30ca8f in _0x8393e4) {
                _0x23e092(_0x231831(0x25c))[_0x231831(0x2f1)](_0x231831(0x1d3) + _0x30ca8f + '\x22\x20' + (_0x2938ed[_0x231831(0x355)] == _0x30ca8f ? 'selected' : '') + '>' + _0x8393e4[_0x30ca8f] + '</option>');
            }
            for (let _0x2fc049 in _0xd68c62) {
                _0x23e092(_0x231831(0x25f))[_0x231831(0x2f1)](_0x231831(0x2e7) + (_0x1767d2[_0x231831(0x359)](_0x2fc049) ? '\x20child' : '') + _0x231831(0x289) + _0x31ce74(_0x2fc049 + _0x231831(0x33f)) + _0x231831(0x20f) + (_0x2fc049 + _0x231831(0x33f)) + '\x22><span\x20data-ih-locale=\x22' + _0x2fc049 + '\x22>' + _0x31ce74(_0x2fc049) + _0x231831(0x319) + _0x2fc049 + _0x231831(0x17e) + (_0xd68c62[_0x2fc049] === !![] ? _0x231831(0x24b) : '') + _0x231831(0x191)), _0x2fc049 === _0x231831(0x1f0) && _0x23e092(_0x231831(0x2be) + _0x2fc049 + '\x22]')['parent'](_0x231831(0x25b))['on'](_0x231831(0x30d), function (_0x310d96) {
                    const _0x1ec252 = _0x231831;
                    _0x310d96[_0x1ec252(0x2de)](), _0x23e092(this)[_0x1ec252(0x2da)](_0x1ec252(0x1fe))[_0x1ec252(0x272)] === 0x0 && (_0x23e092(this)[_0x1ec252(0x2f1)](_0x1ec252(0x371)), _0x23e092(this)[_0x1ec252(0x2fb)](_0x1ec252(0x1fe))[_0x1ec252(0x2f1)](_0x1ec252(0x35a) + _0x2938ed[_0x1ec252(0x20b)] + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0x23e092(this)[_0x1ec252(0x2fb)](_0x1ec252(0x1fe))[_0x1ec252(0x2f1)](_0x1ec252(0x35a) + _0x2938ed[_0x1ec252(0x20b)] + _0x1ec252(0x3da)), _0x23e092(this)[_0x1ec252(0x2fb)](_0x1ec252(0x1fe))[_0x1ec252(0x2f1)](_0x1ec252(0x210) + _0x30a673[_0x1ec252(0x2e3)] + _0x1ec252(0x3ce)));
                }), _0x2fc049 === _0x231831(0x193) && _0x23e092(_0x231831(0x2be) + _0x2fc049 + '\x22]')[_0x231831(0x3a1)](_0x231831(0x25b))['on']('contextmenu', function (_0x170a78) {
                    const _0x5a112c = _0x231831;
                    _0x170a78[_0x5a112c(0x2de)](), _0x23e092(this)[_0x5a112c(0x2da)](_0x5a112c(0x1fe))[_0x5a112c(0x272)] === 0x0 && (_0x23e092(this)[_0x5a112c(0x2f1)](_0x5a112c(0x371)), _0x23e092(this)['children'](_0x5a112c(0x1fe))[_0x5a112c(0x2f1)](_0x5a112c(0x2c6) + _0x2938ed[_0x5a112c(0x382)] + '\x22\x20/>'), _0x23e092(this)[_0x5a112c(0x2fb)]('#tempWrapper')[_0x5a112c(0x2f1)](_0x5a112c(0x210) + _0x30a673[_0x5a112c(0x2e3)] + _0x5a112c(0x3ce)));
                });
            }
        }
        function _0x2f77e0() {
            const _0x16e957 = _0x4b2cd0;
            _0x23e092(_0x16e957(0x197))[_0x16e957(0x307)](), _0x24846d(), _0x23e092(_0x16e957(0x18b))[_0x16e957(0x1c7)](_0x16e957(0x35d)), _0x23e092('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x16e957(0x2f1)](_0x16e957(0x2e4)), _0x23e092(_0x16e957(0x25f))[_0x16e957(0x2f1)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x23e092('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x31ce74(_0x16e957(0x14d)) + '</a></button>'), _0x23e092(_0x16e957(0x3bf))[_0x16e957(0x2f1)](_0x16e957(0x275) + _0x31ce74(_0x16e957(0x340)) + '</a></button>'), _0x23e092('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x16e957(0x2f1)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>' + _0x31ce74(_0x16e957(0x331)) + _0x16e957(0x30f)), _0x23e092(_0x16e957(0x3bf))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x31ce74(_0x16e957(0x2c4)) + '</a></button>'), _0x23e092('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x16e957(0x2f1)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x31ce74('REPORT_DISCORD') + _0x16e957(0x1de));
        }
        function _0x221068() {
            const _0x5c92a5 = _0x4b2cd0;
            _0x23e092(_0x5c92a5(0x197))[_0x5c92a5(0x307)](), _0x24846d(), _0x23e092(_0x5c92a5(0x18b))[_0x5c92a5(0x1c7)](_0x5c92a5(0x30b)), _0x23e092(_0x5c92a5(0x25f))[_0x5c92a5(0x2f1)](_0x5c92a5(0x387)), _0x23e092(_0x5c92a5(0x3bf))[_0x5c92a5(0x2f1)](_0x5c92a5(0x2b3) + _0x31ce74(_0x5c92a5(0x316)) + _0x5c92a5(0x1de)), _0x23e092(_0x5c92a5(0x3bf))[_0x5c92a5(0x2f1)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x31ce74(_0x5c92a5(0x2c4)) + _0x5c92a5(0x1de)), _0x23e092('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x5c92a5(0x2f1)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x31ce74(_0x5c92a5(0x2bf)) + _0x5c92a5(0x1de));
        }
        function _0x239c68(_0x3bb46e) {
            const _0x1fb734 = _0x4b2cd0;
            var _0x2f4787 = document[_0x1fb734(0x207)]('a');
            _0x2f4787[_0x1fb734(0x1e2)] = _0x3bb46e, _0x2f4787[_0x1fb734(0x26a)] = _0x1fb734(0x3a0), document[_0x1fb734(0x28e)]['appendChild'](_0x2f4787), _0x2f4787[_0x1fb734(0x1d0)](), _0x2f4787[_0x1fb734(0x307)]();
        }
        function _0x1045ce() {
            const _0x1b25c1 = _0x4b2cd0;
            clearInterval(_0x2938ed[_0x1b25c1(0x24d)]), _0x2938ed[_0x1b25c1(0x259)]['forEach'](_0x4347fd => {
                const _0x334587 = _0x1b25c1;
                _0x4347fd['trigger'][_0x334587(0x1c2)](_0x55aa6f => {
                    const _0x30ffa6 = _0x334587;
                    _0x23e092(_0x4347fd[_0x30ffa6(0x302)])[_0x30ffa6(0x19f)](_0x30ffa6(0x1d0), _0x55aa6f);
                });
            }), _0x2938ed[_0x1b25c1(0x259)] = [], _0x23e092(_0x1b25c1(0x30a))[_0x1b25c1(0x307)](), _0x23e092(_0x1b25c1(0x2fd))[_0x1b25c1(0x307)](), _0x23e092(_0x1b25c1(0x22e))[_0x1b25c1(0x276)](_0x1b25c1(0x314)), _0x2938ed['pageLoaded'] = ![], _0x2938ed['firstStarted'] = ![], _0x2938ed[_0x1b25c1(0x1e4)] = location[_0x1b25c1(0x1e2)], _0x2938ed[_0x1b25c1(0x347)][_0x1b25c1(0x2e1)](), _0x274880(_0x1b25c1(0x315));
        }
        function _0x274880(..._0x2a6c40) {
            const _0x4e81a0 = _0x4b2cd0;
            var _0x5a0e2f = new Date();
            _0x2938ed[_0x4e81a0(0x1b5)][_0x4e81a0(0x1d4)]({
                'time': _0x5a0e2f['getTime'](),
                'content': [..._0x2a6c40]
            }), _0x2938ed[_0x4e81a0(0x1b5)][_0x4e81a0(0x272)] > 0x3e8 && (_0x2938ed['GL_logger'] = [
                {
                    'time': _0x5a0e2f[_0x4e81a0(0x261)](),
                    'content': [_0x4e81a0(0x2b8)]
                },
                ..._0x2938ed[_0x4e81a0(0x1b5)][_0x4e81a0(0x27d)](-0x3e7)
            ]), console[_0x4e81a0(0x161)]('[' + _0x5a0e2f['toISOString']() + ']', ..._0x2a6c40);
        }
        function _0x4b1ed8() {
            const _0x292a4e = _0x4b2cd0;
            for (let _0x131938 in _0xd68c62) {
                GM_getValue(_0x131938) != null && typeof GM_getValue(_0x131938) === _0x292a4e(0x287) && (_0xd68c62[_0x131938] = GM_getValue(_0x131938), _0x131938 === 'MODIFY_VIDEO_VOLUME' && GM_getValue(_0x131938) !== !![] && (_0x2938ed[_0x292a4e(0x20b)] = 0x1));
            }
        }
        function _0x2404a9(_0x1c33da, _0x4268ed, _0x1a69b6, _0x3b1406 = '') {
            const _0x1b3271 = _0x4b2cd0;
            _0x4268ed[_0x1b3271(0x2da)](_0x1b3271(0x2ee))[_0x1b3271(0x272)] === 0x0 ? (_0x4268ed[_0x1b3271(0x2f1)](_0x1b3271(0x336) + _0x3b1406 + '\x22\x20/>'), _0x4268ed[_0x1b3271(0x2da)](_0x1b3271(0x2ee))[_0x1b3271(0x2f1)]('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x2938ed[_0x1b3271(0x20b)] + _0x1b3271(0x235)), _0x4268ed[_0x1b3271(0x2da)](_0x1b3271(0x156))['attr'](_0x1b3271(0x1ac), _0x1b3271(0x184) + (_0x2938ed[_0x1b3271(0x20b)] * 0x64 + '%')), _0x4268ed[_0x1b3271(0x2da)](_0x1b3271(0x156))['on'](_0x1b3271(0x13a), function () {
                const _0x183fc2 = _0x1b3271;
                var _0x44620d = _0x23e092(this)[_0x183fc2(0x2a8)]() * 0x64 + '%';
                _0x2938ed[_0x183fc2(0x20b)] = _0x23e092(this)[_0x183fc2(0x2a8)](), GM_setValue(_0x183fc2(0x1ee), _0x23e092(this)['val']()), _0x23e092(this)[_0x183fc2(0x379)](_0x183fc2(0x1ac), _0x183fc2(0x184) + _0x44620d), _0x1c33da[_0x183fc2(0x277)](function () {
                    const _0x57d3a9 = _0x183fc2;
                    _0x274880('(' + _0x1a69b6 + ')', _0x57d3a9(0x395)), this[_0x57d3a9(0x1d7)] = _0x2938ed[_0x57d3a9(0x20b)];
                });
            }), _0x4268ed[_0x1b3271(0x2da)](_0x1b3271(0x156))['on']('mouseenter', function () {
                const _0x506737 = _0x1b3271;
                var _0x3460cf = _0x2938ed['videoVolume'] * 0x64 + '%';
                _0x23e092(this)[_0x506737(0x379)](_0x506737(0x1ac), _0x506737(0x184) + _0x3460cf), _0x23e092(this)[_0x506737(0x2a8)](_0x2938ed[_0x506737(0x20b)]), _0x1c33da['each'](function () {
                    const _0x46b234 = _0x506737;
                    _0x274880('(' + _0x1a69b6 + ')', 'video\x20volume\x20changed\x20#slider'), this[_0x46b234(0x1d7)] = _0x2938ed[_0x46b234(0x20b)];
                });
            }), _0x4268ed[_0x1b3271(0x2da)](_0x1b3271(0x2ee))['on']('click', function (_0x1c0d02) {
                const _0x5ce40f = _0x1b3271;
                _0x1c0d02[_0x5ce40f(0x1fa)](), _0x1c0d02[_0x5ce40f(0x2de)]();
            })) : _0x4268ed[_0x1b3271(0x2da)](_0x1b3271(0x2ee))[_0x1b3271(0x307)]();
        }
        function _0x2dfa95(_0x1e7b29) {
            const _0x4486ea = _0x4b2cd0;
            _0x4c0c52(), _0x23e092(_0x4486ea(0x28e))[_0x4486ea(0x2f1)](_0x4486ea(0x343) + _0x30a673[_0x4486ea(0x2e3)] + _0x4486ea(0x166));
            const _0x238ca4 = _0x23e092(_0x4486ea(0x30c)), _0x47443b = _0x23e092(_0x4486ea(0x326)), _0x46f7dd = _0x23e092(_0x4486ea(0x227)), _0xe1cfca = _0x23e092(_0x4486ea(0x22a));
            _0xe1cfca[_0x4486ea(0x379)](_0x4486ea(0x1b1), _0x1e7b29), _0x238ca4[_0x4486ea(0x223)](_0x4486ea(0x1f3), _0x4486ea(0x26f));
            let _0x4f977a = 0.75, _0x32b843 = 0x0, _0x5f2585 = 0x0, _0x92c1cd = ![], _0x578cd2, _0x58b038;
            _0xe1cfca['on'](_0x4486ea(0x2f0), () => {
                const _0x14c8fb = _0x4486ea;
                _0x32b843 = (window[_0x14c8fb(0x2db)] - _0xe1cfca[0x0][_0x14c8fb(0x1f5)]) / 0x2, _0x5f2585 = (window[_0x14c8fb(0x157)] - _0xe1cfca[0x0][_0x14c8fb(0x1d8)]) / 0x2, _0x4c1e21();
            }), _0xe1cfca['on']('dragstart\x20drop', _0x5482a9 => {
                const _0x48af0f = _0x4486ea;
                _0x5482a9[_0x48af0f(0x2de)]();
            }), _0xe1cfca['on']('click', _0xe9141b => {
                const _0x241766 = _0x4486ea;
                _0xe9141b[_0x241766(0x2de)](), _0xe9141b[_0x241766(0x1fa)]();
            }), _0xe1cfca['on']('wheel', _0x6eaaed => {
                const _0x150fd0 = _0x4486ea;
                _0x6eaaed['preventDefault'](), _0x4f977a += _0x6eaaed[_0x150fd0(0x299)][_0x150fd0(0x31a)] > 0x0 ? -0.15 : 0.15, _0x4f977a = Math[_0x150fd0(0x2d7)](Math[_0x150fd0(0x373)](0.75, _0x4f977a), 0x5), _0x4c1e21();
            }), _0xe1cfca['on']('mousedown', _0x5c952b => {
                const _0x26a80f = _0x4486ea;
                _0x92c1cd = !![], _0x578cd2 = _0x5c952b[_0x26a80f(0x368)] - _0x32b843, _0x58b038 = _0x5c952b[_0x26a80f(0x38e)] - _0x5f2585, _0xe1cfca[_0x26a80f(0x223)](_0x26a80f(0x224), _0x26a80f(0x2ae));
            }), _0xe1cfca['on'](_0x4486ea(0x2fc), () => {
                const _0x47a4ca = _0x4486ea;
                _0x92c1cd = ![], _0xe1cfca['css']('cursor', _0x47a4ca(0x20c));
            }), _0x23e092(document)['on'](_0x4486ea(0x252), _0x57147f => {
                const _0x25b64b = _0x4486ea;
                if (!_0x92c1cd)
                    return;
                _0x57147f[_0x25b64b(0x2de)](), _0x32b843 = _0x57147f['pageX'] - _0x578cd2, _0x5f2585 = _0x57147f[_0x25b64b(0x38e)] - _0x58b038, _0x4c1e21();
            }), _0x238ca4['on']('click', () => {
                _0x4c0c52();
            }), _0x46f7dd['on'](_0x4486ea(0x1d0), () => {
                _0x4c0c52();
            }), _0x47443b['on']('click', _0xef3dc2 => {
                const _0x51fddd = _0x4486ea;
                _0xef3dc2[_0x51fddd(0x2de)](), _0xef3dc2[_0x51fddd(0x1fa)]();
            });
            function _0x4c1e21() {
                const _0x21fe29 = _0x4486ea;
                _0xe1cfca[_0x21fe29(0x223)](_0x21fe29(0x296), 'scale(' + _0x4f977a + ')'), _0xe1cfca[_0x21fe29(0x223)](_0x21fe29(0x2dd), _0x32b843 + 'px'), _0xe1cfca[_0x21fe29(0x223)](_0x21fe29(0x322), _0x5f2585 + 'px');
            }
        }
        function _0x4c0c52() {
            const _0xd6b55e = _0x4b2cd0;
            _0x23e092(_0xd6b55e(0x30c))[_0xd6b55e(0x307)](), _0x23e092(document)[_0xd6b55e(0x19f)](_0xd6b55e(0x252));
        }
        function _0xc322b6() {
            const _0x549cf4 = _0x4b2cd0;
            var _0x1ddd0a = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x549cf4(0x298),
                        'NOTICE_UPDATE_CONTENT': _0x549cf4(0x2a6),
                        'CHECK_UPDATE': _0x549cf4(0x29b),
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': _0x549cf4(0x311),
                        'RELOAD_SCRIPT': _0x549cf4(0x3c8),
                        'DONATE': _0x549cf4(0x180),
                        'FEEDBACK': _0x549cf4(0x155),
                        'IMAGE_VIEWER': _0x549cf4(0x28a),
                        'NEW_TAB': _0x549cf4(0x1b6),
                        'SHOW_DOM_TREE': _0x549cf4(0x386),
                        'SELECT_AND_COPY': _0x549cf4(0x201),
                        'DOWNLOAD_DOM_TREE': _0x549cf4(0x24a),
                        'REPORT_GITHUB': _0x549cf4(0x3d7),
                        'REPORT_DISCORD': _0x549cf4(0x151),
                        'REPORT_FORK': _0x549cf4(0x170),
                        'DEBUG': _0x549cf4(0x26c),
                        'CLOSE': _0x549cf4(0x341),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0x549cf4(0x21c),
                        'BATCH_DOWNLOAD_DIRECT': _0x549cf4(0x3b9),
                        'IMG': _0x549cf4(0x179),
                        'VID': _0x549cf4(0x1ea),
                        'DW': _0x549cf4(0x2f3),
                        'DW_ALL': 'Download\x20All\x20Resources',
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x549cf4(0x196),
                        'LOAD_BLOB_MULTIPLE': _0x549cf4(0x345),
                        'LOAD_BLOB_RELOAD': _0x549cf4(0x240),
                        'NO_CHECK_RESOURCE': _0x549cf4(0x225),
                        'NO_VID_URL': _0x549cf4(0x3a9),
                        'SETTING': _0x549cf4(0x1d9),
                        'AUTO_RENAME': 'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': _0x549cf4(0x39e),
                        'RENAME_LOCATE_DATE': _0x549cf4(0x377),
                        'DISABLE_VIDEO_LOOPING': _0x549cf4(0x222),
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x549cf4(0x2d2),
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x549cf4(0x254),
                        'DIRECT_DOWNLOAD_ALL': _0x549cf4(0x364),
                        'MODIFY_VIDEO_VOLUME': 'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
                        'SCROLL_BUTTON': _0x549cf4(0x177),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x549cf4(0x242),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x549cf4(0x1dd),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x549cf4(0x22f),
                        'AUTO_RENAME_INTRO': _0x549cf4(0x33d),
                        'RENAME_SHORTCODE_INTRO': _0x549cf4(0x37f),
                        'RENAME_PUBLISH_DATE_INTRO': _0x549cf4(0x3c4),
                        'RENAME_LOCATE_DATE_INTRO': _0x549cf4(0x236),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x549cf4(0x2f2),
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x549cf4(0x376),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': 'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x549cf4(0x15e),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x549cf4(0x1b0),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x549cf4(0x2e5),
                        'SCROLL_BUTTON_INTRO': _0x549cf4(0x24f),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': 'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x549cf4(0x2ed),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x549cf4(0x290),
                        'SKIP_VIEW_STORY_CONFIRM': _0x549cf4(0x1f4),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x549cf4(0x216)
                    }
                }, _0x4e56cb = Object['assign']({}, _0x1ddd0a, _0x2938ed[_0x549cf4(0x205)]), _0x424922 = Object[_0x549cf4(0x19c)](_0x4e56cb)[_0x549cf4(0x2ef)]()['reduce']((_0x133757, _0x4c5b3a) => {
                    return _0x133757[_0x4c5b3a] = _0x4e56cb[_0x4c5b3a], _0x133757;
                }, {});
            return _0x424922;
        }
        async function _0x213035(_0x4408bd) {
            return new Promise((_0x40c93, _0x5384ff) => {
                const _0x25df73 = a0_0x499e;
                GM_xmlhttpRequest({
                    'method': _0x25df73(0x2b0),
                    'url': _0x25df73(0x2d9) + _0x4408bd + _0x25df73(0x3bd),
                    'onload': function (_0x3a3077) {
                        try {
                            let _0x4cc80e = JSON['parse'](_0x3a3077['response']);
                            _0x40c93(_0x4cc80e);
                        } catch (_0x160c7a) {
                            _0x5384ff(_0x160c7a);
                        }
                    },
                    'onerror': function (_0x5e7917) {
                        const _0x7df448 = _0x25df73;
                        _0x274880(_0x7df448(0x303), _0x7df448(0x17d), _0x5e7917), _0x5384ff(_0x5e7917);
                    }
                });
            });
        }
        function _0x31ce74(_0x58f0b6) {
            const _0x30b8e8 = _0x4b2cd0, _0x27e953 = _0xc322b6();
            return _0x27e953[_0x2938ed['lang']] != undefined && _0x27e953[_0x2938ed['lang']][_0x58f0b6] != undefined ? _0x27e953[_0x2938ed['lang']][_0x58f0b6] : _0x27e953[_0x30b8e8(0x3ac)][_0x58f0b6];
        }
        function _0x1d1dfe() {
            const _0x19ddfd = _0x4b2cd0;
            _0x23e092(_0x19ddfd(0x34d))['each'](function () {
                const _0xbf823f = _0x19ddfd;
                _0x23e092(this)[_0xbf823f(0x1c7)](_0x31ce74(_0x23e092(this)[_0xbf823f(0x379)](_0xbf823f(0x2b5))));
            }), _0x23e092(_0x19ddfd(0x3d3))[_0x19ddfd(0x277)](function () {
                const _0x39b79d = _0x19ddfd;
                _0x23e092(this)['attr'](_0x39b79d(0x2f7), _0x31ce74(_0x23e092(this)[_0x39b79d(0x379)]('data-ih-locale-title')));
            });
        }
        _0x23e092(function () {
            const _0x1628bc = _0x4b2cd0;
            function _0x3d7e58(_0x28f5d7) {
                const _0x5e1e1f = a0_0x499e;
                var _0x3a0414 = [];
                for (var _0x5b98ed of _0x28f5d7) {
                    _0x3a0414[_0x5e1e1f(0x1d4)]({
                        'tagName': _0x5b98ed[_0x5e1e1f(0x2a9)],
                        'id': _0x5b98ed['id'],
                        'className': _0x5b98ed[_0x5e1e1f(0x273)]
                    });
                }
                return _0x3a0414;
            }
            function _0x1ebe60() {
                const _0x5c7216 = a0_0x499e;
                let _0x199800 = _0x23e092('div[id^=\x22mount\x22]')[0x0];
                var _0x31a44c = '';
                _0x2938ed[_0x5c7216(0x1b5)]['forEach'](_0x163376 => {
                    const _0x284561 = _0x5c7216;
                    var _0x454e88 = JSON['stringify'](_0x163376[_0x284561(0x338)], function (_0x36d9ca, _0x10dfee) {
                        const _0x469830 = _0x284561;
                        if (Array[_0x469830(0x32c)](this)) {
                            if (typeof _0x10dfee === _0x469830(0x175) && _0x10dfee instanceof jQuery)
                                return _0x3d7e58(_0x10dfee);
                            return _0x10dfee;
                        } else
                            return _0x10dfee;
                    }, '\x09');
                    _0x31a44c += new Date(_0x163376['time'])[_0x284561(0x38c)]() + ':\x20' + _0x454e88 + '\x0a';
                }), _0x23e092(_0x5c7216(0x3a3))[_0x5c7216(0x1c7)](_0x5c7216(0x15b) + _0x31a44c + _0x5c7216(0x146) + location[_0x5c7216(0x31d)] + _0x5c7216(0x3aa) + _0x199800['innerHTML']);
            }
            _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x1c5), function () {
                _0x1ebe60();
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x3a4), function () {
                const _0x3b310b = _0x1628bc;
                _0x23e092(_0x3b310b(0x3a3))[_0x3b310b(0x294)](), document[_0x3b310b(0x36b)](_0x3b310b(0x1cc));
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x3cd), function () {
                const _0x88ddbb = _0x1628bc;
                _0x23e092('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x88ddbb(0x1c7)]()[_0x88ddbb(0x272)] === 0x0 && _0x1ebe60();
                var _0x3df1ee = _0x23e092('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x88ddbb(0x1c7)](), _0x2f65d3 = document[_0x88ddbb(0x207)]('a'), _0x79f540 = new Blob([_0x3df1ee], { 'type': _0x88ddbb(0x251) });
                _0x2f65d3[_0x88ddbb(0x1e2)] = URL[_0x88ddbb(0x1bd)](_0x79f540), _0x2f65d3[_0x88ddbb(0x268)] = _0x88ddbb(0x208) + new Date()['getTime']() + _0x88ddbb(0x1cb), document['body']['appendChild'](_0x2f65d3), _0x2f65d3[_0x88ddbb(0x1d0)](), _0x2f65d3[_0x88ddbb(0x307)]();
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x37d), function () {
                const _0x3d6e94 = _0x1628bc;
                _0x23e092(this)[_0x3d6e94(0x3a1)](_0x3d6e94(0x1fe))['length'] > 0x0 ? _0x23e092(this)[_0x3d6e94(0x3a1)]('#tempWrapper')[_0x3d6e94(0x215)](0xfa, function () {
                    const _0x16ece5 = _0x3d6e94;
                    _0x23e092(this)[_0x16ece5(0x307)]();
                }) : _0x23e092(_0x3d6e94(0x197))[_0x3d6e94(0x307)]();
            }), _0x23e092(window)['on']('keydown', function (_0x16f4df) {
                const _0x47e379 = _0x1628bc;
                _0x16f4df[_0x47e379(0x160)] == '81' && _0x16f4df[_0x47e379(0x1f2)] && (_0x23e092('.IG_POPUP_DIG')[_0x47e379(0x307)](), _0x16f4df[_0x47e379(0x2de)]()), _0x16f4df[_0x47e379(0x160)] == '87' && _0x16f4df['altKey'] && (_0x492138(), _0x16f4df[_0x47e379(0x2de)]()), _0x16f4df[_0x47e379(0x160)] == '90' && _0x16f4df[_0x47e379(0x1f2)] && (_0x2f77e0(), _0x16f4df[_0x47e379(0x2de)]()), _0x16f4df['which'] == '82' && _0x16f4df[_0x47e379(0x1f2)] && (_0x1045ce(), _0x16f4df[_0x47e379(0x2de)]()), _0x16f4df[_0x47e379(0x160)] == '83' && _0x16f4df['altKey'] && (location[_0x47e379(0x1e2)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x23e092(_0x47e379(0x3b8))[_0x47e379(0x272)] > 0x0 && _0x23e092(_0x47e379(0x3b8))?.[_0x47e379(0x370)](_0x47e379(0x1d0)), location['href'][_0x47e379(0x186)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x23e092(_0x47e379(0x1e9))[_0x47e379(0x272)] > 0x0 && _0x23e092(_0x47e379(0x1e9))?.[_0x47e379(0x370)](_0x47e379(0x1d0)), _0x16f4df[_0x47e379(0x2de)]());
            }), _0x23e092('body')['on']('change', _0x1628bc(0x35e), function () {
                const _0x459641 = _0x1628bc;
                var _0x1dfa8f = _0x23e092(this)[_0x459641(0x379)]('id');
                if (_0x1dfa8f && _0xd68c62[_0x1dfa8f] !== undefined) {
                    let _0x3042ca = _0x23e092(this)['prop'](_0x459641(0x24b));
                    GM_setValue(_0x1dfa8f, _0x3042ca), _0xd68c62[_0x1dfa8f] = _0x3042ca, console[_0x459641(0x161)](_0x459641(0x22d), _0x1dfa8f, _0x3042ca);
                }
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x237), function (_0x543c88) {
                const _0x4e8b2c = _0x1628bc;
                _0x23e092(this)[_0x4e8b2c(0x2da)]('#tempWrapper')[_0x4e8b2c(0x272)] > 0x0 && _0x543c88[_0x4e8b2c(0x2de)]();
            }), _0x23e092('body')['on']('change', _0x1628bc(0x239), function () {
                const _0x315eef = _0x1628bc;
                let _0x202fdc = _0x23e092(this)[_0x315eef(0x2a8)]();
                _0x23e092(this)['attr'](_0x315eef(0x270)) == _0x315eef(0x1e1) ? _0x23e092(this)[_0x315eef(0x17b)]()[_0x315eef(0x2a8)](_0x202fdc) : _0x23e092(this)['prev']()[_0x315eef(0x2a8)](_0x202fdc), _0x202fdc >= 0x0 && _0x202fdc <= 0x1 && (_0x2938ed[_0x315eef(0x20b)] = _0x202fdc, GM_setValue(_0x315eef(0x1ee), _0x202fdc));
            }), _0x23e092(_0x1628bc(0x28e))['on']('input', _0x1628bc(0x239), function () {
                const _0x1d9416 = _0x1628bc;
                if (_0x23e092(this)[_0x1d9416(0x379)](_0x1d9416(0x270)) == _0x1d9416(0x1e1)) {
                    let _0x1eaa5d = _0x23e092(this)[_0x1d9416(0x2a8)]();
                    _0x23e092(this)['next']()['val'](_0x1eaa5d);
                } else {
                    let _0x1c3aa7 = _0x23e092(this)[_0x1d9416(0x2a8)]();
                    _0x1c3aa7 >= 0x0 && _0x1c3aa7 <= 0x1 ? _0x23e092(this)[_0x1d9416(0x32a)]()['val'](_0x1c3aa7) : _0x1c3aa7 < 0x0 ? _0x23e092(this)[_0x1d9416(0x2a8)](0x0) : _0x23e092(this)['val'](0x1);
                }
            }), _0x23e092('body')['on'](_0x1628bc(0x13a), _0x1628bc(0x190), function () {
                const _0x1e5fee = _0x1628bc;
                GM_setValue(_0x1e5fee(0x282), _0x23e092(this)[_0x1e5fee(0x2a8)]()), _0x2938ed[_0x1e5fee(0x382)] = _0x23e092(this)[_0x1e5fee(0x2a8)]();
            }), _0x23e092(_0x1628bc(0x28e))['on']('click', 'a[data-needed=\x22direct\x22]', function (_0x3b987c) {
                const _0x260193 = _0x1628bc;
                _0x3b987c[_0x260193(0x2de)](), _0x43e921(this);
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x192), function () {
                const _0x1db0a0 = _0x1628bc;
                if (_0xd68c62[_0x1db0a0(0x203)] && _0xd68c62[_0x1db0a0(0x301)])
                    _0x43e921(_0x23e092(this)['parent']()['children']('a')[_0x1db0a0(0x27a)]()[0x0], !![]);
                else {
                    var _0x1c3b95 = new URL(_0x23e092(this)[_0x1db0a0(0x3a1)]()[_0x1db0a0(0x2fb)]('a')[_0x1db0a0(0x379)](_0x1db0a0(0x35b)));
                    _0x1c3b95[_0x1db0a0(0x312)] = 'scontent.cdninstagram.com', _0x239c68(_0x1c3b95['href']);
                }
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x17f), function () {
                const _0x31bacc = _0x1628bc;
                let _0x943518 = new Date()[_0x31bacc(0x261)]();
                _0xd68c62['RENAME_PUBLISH_DATE'] && _0x23e092(this)['parent']()[_0x31bacc(0x2fb)]('a')['attr'](_0x31bacc(0x362)) && (_0x943518 = _0x23e092(this)[_0x31bacc(0x3a1)]()[_0x31bacc(0x2fb)]('a')[_0x31bacc(0x379)](_0x31bacc(0x362)));
                let _0x26541c = _0x23e092(this)[_0x31bacc(0x3a1)]()[_0x31bacc(0x2fb)]('a')[_0x31bacc(0x379)](_0x31bacc(0x2cf)) ?? _0x23e092('#article-id')['text']();
                _0x306fb5(_0x23e092(this)[_0x31bacc(0x3a1)]()[_0x31bacc(0x2fb)]('a')[_0x31bacc(0x2da)](_0x31bacc(0x1c3))[_0x31bacc(0x27a)]()['attr'](_0x31bacc(0x1b1)), _0x23e092(this)[_0x31bacc(0x3a1)]()[_0x31bacc(0x2fb)]('a')[_0x31bacc(0x379)](_0x31bacc(0x288)), 'thumbnail', _0x943518, _0x31bacc(0x1ec), _0x26541c);
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x3b8), function () {
                _0x529c0d(!![]);
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), '.IG_DWSTORY_ALL', function () {
                _0x3f9573();
            }), _0x23e092(_0x1628bc(0x28e))['on']('click', '.IG_DWNEWTAB', function (_0x581c08) {
                const _0x12ec83 = _0x1628bc;
                _0x581c08[_0x12ec83(0x2de)](), _0x529c0d(!![], !![], !![]);
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x3a6), function () {
                _0xfcb1b4(!![]);
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x2e0), function (_0xcbaf33) {
                _0xcbaf33['stopPropagation'](), _0x253939(!![]);
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x1e9), function () {
                _0x8f5f81(!![]);
            }), _0x23e092('body')['on'](_0x1628bc(0x1d0), _0x1628bc(0x1f1), function () {
                _0x1912c5();
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x3c1), function (_0x13c53e) {
                const _0x64fb0a = _0x1628bc;
                _0x13c53e[_0x64fb0a(0x2de)](), _0x8f5f81(!![], !![]);
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x2c3), function () {
                _0xb9d3ad(!![]);
            }), _0x23e092(_0x1628bc(0x28e))['on']('click', '.IG_REELS', function () {
                _0x2f370a(!![], !![]);
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x2a3), function () {
                _0x2f370a(!![], !![], !![]);
            }), _0x23e092(_0x1628bc(0x28e))['on']('click', _0x1628bc(0x23d), function () {
                _0x2f370a(!![], ![]);
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x2a5), _0x1628bc(0x3ae), function (_0x1ed154) {
                const _0x17c759 = _0x1628bc;
                if (_0x1ed154[_0x17c759(0x160)] === 0x3 || _0x1ed154[_0x17c759(0x160)] === 0x2) {
                    if (location['href'] === _0x17c759(0x199) && _0xd68c62['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x1ed154[_0x17c759(0x2de)]();
                        if (_0x23e092(this)[_0x17c759(0x2da)](_0x17c759(0x394))[_0x17c759(0x272)] > 0x0) {
                            const _0x1d09e3 = _0x17c759(0x199) + _0x23e092(this)[_0x17c759(0x2fb)]('div')[_0x17c759(0x1d6)]()[_0x17c759(0x1c7)]();
                            _0x1ed154['which'] === 0x2 ? GM_openInTab(_0x1d09e3) : location[_0x17c759(0x1e2)] = _0x1d09e3;
                        }
                    }
                }
            }), _0x23e092('body')['on']('change', '.IG_POPUP_DIG_TITLE\x20.checkbox', function () {
                const _0x337175 = _0x1628bc;
                var _0x4c5831 = _0x23e092(this)[_0x337175(0x2da)](_0x337175(0x13a))['prop'](_0x337175(0x24b));
                _0x23e092(_0x337175(0x39a))[_0x337175(0x277)](function () {
                    const _0x356de1 = _0x337175;
                    _0x23e092(this)[_0x356de1(0x1d2)](_0x356de1(0x24b), _0x4c5831);
                });
            }), _0x23e092(_0x1628bc(0x28e))['on']('change', '.IG_POPUP_DIG_BODY\x20.inner_box', function () {
                const _0x405224 = _0x1628bc;
                var _0x1f0172 = _0x23e092(_0x405224(0x243))[_0x405224(0x272)], _0x47c294 = _0x23e092(_0x405224(0x39a))[_0x405224(0x272)];
                _0x23e092(_0x405224(0x3d9))['find'](_0x405224(0x13a))[_0x405224(0x1d2)](_0x405224(0x24b), _0x1f0172 == _0x47c294);
            }), _0x23e092(_0x1628bc(0x28e))['on']('click', _0x1628bc(0x337), function () {
                const _0x405929 = _0x1628bc;
                let _0x5ac001 = 0x0;
                _0x23e092(_0x405929(0x349))[_0x405929(0x277)](function () {
                    const _0x284da0 = _0x405929;
                    _0x23e092(this)[_0x284da0(0x32a)]()['children'](_0x284da0(0x13a))[_0x284da0(0x1d2)]('checked') && (_0x23e092(this)[_0x284da0(0x370)](_0x284da0(0x1d0)), _0x5ac001++);
                }), _0x5ac001 == 0x0 && alert(_0x31ce74(_0x405929(0x28f)));
            }), _0x23e092('body')['on'](_0x1628bc(0x1ca), _0x1628bc(0x31c), function () {
                const _0x521556 = _0x1628bc;
                GM_setValue('lang', _0x23e092(this)[_0x521556(0x2a8)]()), _0x2938ed[_0x521556(0x355)] = _0x23e092(this)[_0x521556(0x2a8)](), _0x2938ed[_0x521556(0x355)]?.[_0x521556(0x250)]('en') || _0x2938ed[_0x521556(0x205)][_0x2938ed['lang']] != null ? (_0x1d1dfe(), _0x367178()) : _0x213035(_0x2938ed[_0x521556(0x355)])[_0x521556(0x23a)](_0x48e56f => {
                    const _0x4206d5 = _0x521556;
                    _0x2938ed['locale'][_0x2938ed[_0x4206d5(0x355)]] = _0x48e56f, _0x1d1dfe(), _0x367178();
                })[_0x521556(0x2ff)](_0x3c27aa => {
                    const _0xa3902a = _0x521556;
                    console[_0xa3902a(0x230)](_0xa3902a(0x318), _0x3c27aa);
                });
            }), _0x23e092(_0x1628bc(0x28e))['on'](_0x1628bc(0x1d0), _0x1628bc(0x29d), function () {
                const _0x400833 = _0x1628bc;
                _0x23e092('.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x400833(0x277)](function () {
                    const _0x2a13a1 = _0x400833;
                    _0x23e092(this)[_0x2a13a1(0x370)]('click');
                });
            });
            const _0x176fee = new MutationObserver(_0x347d7b => {
                const _0x1909a8 = _0x1628bc;
                for (const _0x46c023 of _0x347d7b) {
                    _0x46c023['type'] === _0x1909a8(0x159) && _0x46c023[_0x1909a8(0x354)][_0x1909a8(0x1c2)](_0x465c18 => {
                        const _0x35c19b = _0x1909a8, _0x40c916 = _0x23e092(_0x465c18)[_0x35c19b(0x2da)](_0x35c19b(0x143));
                        if (_0x40c916[_0x35c19b(0x272)] > 0x0) {
                            _0xd68c62[_0x35c19b(0x1f0)] && _0x40c916['each'](function () {
                                const _0x532068 = _0x35c19b;
                                _0x23e092(this)['on'](_0x532068(0x3d5), function () {
                                    const _0x2bbd47 = _0x532068;
                                    !_0x23e092(this)[_0x2bbd47(0x231)](_0x2bbd47(0x16e)) && (_0x23e092(this)[_0x2bbd47(0x379)]('data-modify', !![]), this[_0x2bbd47(0x1d7)] = _0x2938ed[_0x2bbd47(0x20b)], _0x274880(_0x2bbd47(0x1cd)));
                                });
                            });
                            if (location[_0x35c19b(0x31d)][_0x35c19b(0x186)](/^(\/stories\/)/ig)) {
                                const _0x31ec78 = location['pathname'][_0x35c19b(0x186)](/^(\/stories\/highlights\/)/ig) != null, _0x175a87 = _0x31ec78 ? 'highlight' : _0x35c19b(0x233);
                                _0x40c916[_0x35c19b(0x277)](function () {
                                    const _0x2cbe1e = _0x35c19b;
                                    _0x23e092(this)['on'](_0x2cbe1e(0x1a9), function () {
                                        const _0x2ae0a7 = _0x2cbe1e;
                                        if (!_0x23e092(this)['data'](_0x2ae0a7(0x2bb))) {
                                            let _0x128ce0 = _0x23e092(this);
                                            _0x128ce0['parents'](_0x2ae0a7(0x1ce))['filter'](function () {
                                                const _0x20b499 = _0x2ae0a7;
                                                return _0x23e092(this)[_0x20b499(0x1f5)]() == _0x128ce0[_0x20b499(0x1f5)]();
                                            })[_0x2ae0a7(0x2da)](_0x2ae0a7(0x34a))[_0x2ae0a7(0x272)] === 0x0 ? (_0x23e092(this)[_0x2ae0a7(0x379)](_0x2ae0a7(0x2a1), !![]), _0x31ec78 ? _0xb9d3ad(![]) : _0xfcb1b4(![]), _0x274880('(' + _0x175a87 + ')', 'Manually\x20inserting\x20thumbnail\x20button')) : (_0x23e092(this)['attr'](_0x2ae0a7(0x2a1), !![]), _0x274880('(' + _0x175a87 + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0x180545 = _0x23e092(this);
                                    if (_0xd68c62[_0x2cbe1e(0x214)]) {
                                        if (!_0x180545[_0x2cbe1e(0x231)](_0x2cbe1e(0x3d8))) {
                                            _0x274880('(' + _0x175a87 + ')', _0x2cbe1e(0x13f));
                                            _0xd68c62['MODIFY_VIDEO_VOLUME'] && (this[_0x2cbe1e(0x1d7)] = _0x2938ed[_0x2cbe1e(0x20b)], _0x180545['on'](_0x2cbe1e(0x1bb), function () {
                                                const _0x111c00 = _0x2cbe1e;
                                                this[_0x111c00(0x1d7)] = _0x2938ed['videoVolume'];
                                            }));
                                            let _0x1dae40 = _0x180545[_0x2cbe1e(0x172)](_0x2cbe1e(0x200))[_0x2cbe1e(0x20e)](function () {
                                                    const _0x4b6586 = _0x2cbe1e;
                                                    return _0x23e092(this)[_0x4b6586(0x379)]('class') == null && _0x23e092(this)[_0x4b6586(0x379)](_0x4b6586(0x1ac)) == null;
                                                })[_0x2cbe1e(0x27a)](), _0x1a3179 = _0x1dae40['next']();
                                            _0x1a3179[_0x2cbe1e(0x31f)]();
                                            let _0x49c918 = _0x1dae40[_0x2cbe1e(0x2da)]('div[class][role=\x22button\x22]');
                                            _0x49c918[_0x2cbe1e(0x31f)]();
                                            const _0x40cdaa = function (_0x123efa) {
                                                const _0x3c478a = _0x2cbe1e;
                                                _0x123efa[_0x3c478a(0x2de)](), _0x180545[_0x3c478a(0x223)](_0x3c478a(0x17c), '2'), _0x180545[_0x3c478a(0x379)](_0x3c478a(0x3d8), !![]), _0x49c918[_0x3c478a(0x31f)](), _0x1a3179[_0x3c478a(0x31f)](), _0x2404a9(_0x180545, _0x180545[_0x3c478a(0x172)](_0x3c478a(0x1ce))[_0x3c478a(0x20e)](function () {
                                                    const _0x268dd9 = _0x3c478a;
                                                    return _0x23e092(this)[_0x268dd9(0x1f5)]() == _0x180545['width']();
                                                })[_0x3c478a(0x27a)](), _0x175a87, 'vertical');
                                            };
                                            _0x180545[_0x2cbe1e(0x3a1)]()[_0x2cbe1e(0x2da)](_0x2cbe1e(0x2c8))['on'](_0x2cbe1e(0x30d), _0x40cdaa), _0x49c918['on'](_0x2cbe1e(0x30d), _0x40cdaa), _0x1a3179['on']('contextmenu', _0x40cdaa), _0x180545['on'](_0x2cbe1e(0x30d), function (_0x2b4669) {
                                                const _0x21e72a = _0x2cbe1e;
                                                _0x2b4669['preventDefault'](), _0x180545[_0x21e72a(0x223)](_0x21e72a(0x17c), '-1'), _0x180545[_0x21e72a(0x276)](_0x21e72a(0x3d8)), _0x1a3179[_0x21e72a(0x350)](), _0x49c918['show'](), _0x2404a9(_0x180545, _0x180545[_0x21e72a(0x172)](_0x21e72a(0x1ce))['filter'](function () {
                                                    const _0x3bd71d = _0x21e72a;
                                                    return _0x23e092(this)['width']() == _0x180545[_0x3bd71d(0x1f5)]();
                                                })['first'](), _0x175a87, 'vertical');
                                            }), _0x180545['on'](_0x2cbe1e(0x323), function () {
                                                const _0x3ce8f3 = _0x2cbe1e;
                                                let _0x5e3e4b = _0x1dae40['parent']()[_0x3ce8f3(0x2da)]('svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]')[_0x3ce8f3(0x172)]('[role=\x22button\x22]')[_0x3ce8f3(0x27a)]();
                                                var _0x4fad27 = _0x5e3e4b[_0x3ce8f3(0x2da)](_0x3ce8f3(0x2d6))[_0x3ce8f3(0x272)] === 0x0;
                                                this[_0x3ce8f3(0x28c)] != _0x4fad27 && (this[_0x3ce8f3(0x1d7)] = _0x2938ed['videoVolume'], _0x5e3e4b?.['trigger']('click')), _0x23e092(this)[_0x3ce8f3(0x379)]('data-completed') && (_0x2938ed[_0x3ce8f3(0x20b)] = this['volume'], GM_setValue('G_VIDEO_VOLUME', this['volume'])), this[_0x3ce8f3(0x1d7)] == _0x2938ed[_0x3ce8f3(0x20b)] && _0x23e092(this)[_0x3ce8f3(0x379)](_0x3ce8f3(0x1fb), !![]);
                                            }), _0x180545[_0x2cbe1e(0x223)](_0x2cbe1e(0x1eb), _0x2cbe1e(0x1a8)), _0x180545[_0x2cbe1e(0x223)]('z-index', '2'), _0x180545[_0x2cbe1e(0x379)](_0x2cbe1e(0x1b3), !![]), _0x180545[_0x2cbe1e(0x379)](_0x2cbe1e(0x3d8), !![]);
                                        }
                                    } else
                                        _0x2404a9(_0x180545, _0x180545[_0x2cbe1e(0x172)](_0x2cbe1e(0x1ce))[_0x2cbe1e(0x20e)](function () {
                                            const _0x4b02a9 = _0x2cbe1e;
                                            return _0x23e092(this)[_0x4b02a9(0x1f5)]() == _0x180545[_0x4b02a9(0x1f5)]();
                                        })['first'](), _0x175a87, _0x2cbe1e(0x3c7));
                                });
                            }
                        }
                    });
                }
            });
            _0x176fee[_0x1628bc(0x367)](_0x23e092(_0x1628bc(0x3ba))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));