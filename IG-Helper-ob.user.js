// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.3.1
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

function a0_0x56e4() {
    const _0x5e26cf = [
        'isReels',
        'Feedback',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'originalEvent',
        '\x22\x20datetime=\x22',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'data-visualcompletion',
        'pageX',
        'getBlobMedia()',
        'get',
        'last',
        'data-path',
        'img',
        'keydown',
        'time[datetime]',
        'stp',
        'IMG',
        '.IG_DWHISTORY',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'FEEDBACK',
        'change',
        'modify',
        'name',
        'scale(',
        'parents',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        '#tempWrapper',
        '3273156QdraVu',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'responseText',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'FORCE_FETCH_ALL_RESOURCES',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        '<p\x20id=\x22_SNLOAD\x22>',
        'G_VIDEO_VOLUME',
        'query_hash',
        'data-name',
        'THUMBNAIL',
        '<div\x20class=\x22volume_slider\x20',
        'reject',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        '</p>',
        'GM_unregisterMenuCommand',
        'wheel',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'startsWith',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'val',
        'post',
        '.IG_DWSTORY_ALL',
        'SKIP_VIEW_STORY_CONFIRM',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'Found\x20insert\x20point',
        'observe',
        'data-loop',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'GL_repeat',
        'checked',
        'createObjectURL',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'Can\x20not\x20find\x20download\x20url.',
        'url',
        'thumbnail',
        'SETTING',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'NOTICE_UPDATE_TITLE',
        'AUTO_RENAME',
        'carousel_media',
        'div.volume_slider\x20input',
        'addClass',
        'onHighlightsStory',
        'div.volume_slider',
        '/info/',
        'flex',
        'display_url',
        'GL_registerEventList',
        'edges',
        'element',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'prev',
        'muted',
        'parent',
        'toUpperCase',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        '37px',
        'lang',
        'div[id^=\x22mount\x22]',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]',
        'a[href^=\x22/p/\x22]',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '3038650kuMFrT',
        'remove',
        'getMinutes',
        'node',
        'Download',
        'floor',
        'content',
        'finalUrl',
        'data-type',
        '.circle_wrapper',
        'body\x20>\x20div\x20section:visible._ac0a',
        'user\x20settings',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'data-ih-locale-title',
        'getUserIdWithAgent()',
        '34144TwDziU',
        'blob',
        'taken_at',
        'Loading\x20Blob\x20Media...',
        '[role=\x22button\x22]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'currentURL',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'shortcode_media',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'getBlobMediaWithQueryID()',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'DEBUG',
        'Fetch\x20from\x20memory\x20cache:',
        'data-snig',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'GL_observer',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'profile_pic_url',
        'find',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        '.IG_DWPROFILE',
        'REPORT_DISCORD',
        'contextmenu',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'length',
        'avatar',
        'CHECK_UPDATE',
        'https://i.instagram.com/api/v1/media/',
        'reel',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        'volumechange',
        'appendChild',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'Reload\x20Script',
        'data-modify-thumbnail',
        'HTML5_VIDEO_CONTROL',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'reduce',
        '.IG_POPUP_DIG',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'NOPATH',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'undefined\x20username',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'then',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'message',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'Cannot\x20find\x20resource\x20url.',
        'FORCE_RESOURCE_VIA_MEDIA',
        '<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'div\x20>\x20ul._acay',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20</div>',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'Thumbnail\x20button\x20already\x20inserted',
        'object',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'code',
        'https://www.instagram.com/reels/',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'https://www.instagram.com/',
        'div[class]',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'scontent.cdninstagram.com',
        'LOAD_BLOB_RELOAD',
        'off',
        'removeClass',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'div',
        'items',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'attr',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'div[style][class]',
        'altKey',
        'grabbing',
        'mouseenter',
        'GL_logger',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'video_versions',
        'fadeOut',
        '0px',
        'getMonth',
        'SCROLL_BUTTON',
        '_INTRO',
        'time',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'image_versions2',
        'NO_VID_URL',
        'user',
        'taken_at_timestamp',
        'getUserHighSizeProfile()',
        'transform',
        'loadstart',
        'locale',
        'padStart',
        'getMediaInfo()',
        'scrollBy',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'GL_username',
        'forEach',
        'mousemove.igHelper',
        'li._acaz',
        'trigging',
        '</button>',
        'src',
        'css',
        '.IG_DW_MAIN',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'Manually\x20inserting\x20thumbnail\x20button',
        'CLOSE',
        '#_SNLOAD',
        'isIntersecting',
        'replaceAll',
        'jpg',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'setAttribute',
        '\x22\x20title=\x22',
        'Cannot\x20find\x20video\x20URL.',
        'innerWidth',
        'DONATE',
        'pointer',
        'remove-thumbnail',
        'class',
        '\x22\x20class=\x22newTab\x22>',
        'matchAll',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'Video',
        'close',
        'tempFetchRateLimit',
        '--ig-track-progress:\x20',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'log',
        '<input\x20value=\x22',
        'Wololo!\x20New\x20version\x20released.',
        'Settings',
        'video_resources',
        '/following/',
        'x1lix1fw',
        'script',
        '_acnb',
        'NONE',
        '.json',
        'grab',
        'getPostOwner()',
        'DIV',
        'instagram.com/reels/',
        '.IG_POPUP_DIG\x20input',
        'Main\x20Timer',
        'replace',
        '175716unhbpL',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'input',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'volume',
        '</span>\x20<input\x20id=\x22',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        'getUserId()',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        '.IG_POPUP_DIG\x20#post_info',
        'stories',
        'video\x20+\x20div',
        'style',
        'Open\x20in\x20New\x20Tab',
        'sort',
        'display_resources',
        'substr',
        'Debug\x20Window',
        'LOAD_BLOB_ONE',
        'assign',
        'Request\x20with:',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'textContent',
        'top',
        'stopPropagation',
        'REPORT_GITHUB',
        'download',
        '/accounts/login',
        'NO_CHECK_RESOURCE',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '.txt',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        '<div></div>',
        'dragstart\x20drop',
        'map',
        'vertical',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'getHighlightStories()',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        '20579iZqPLq',
        'datetime',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'SHOW_DOM_TREE',
        'trigger',
        'endsWith',
        'body',
        'regenerated',
        'a[href]',
        'childList',
        'BATCH_DOWNLOAD_DIRECT',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        '<a\x20href=\x22https://www.instagram.com/p/',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'append',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'error',
        'load',
        '.IG_IMAGE_VIEWER',
        '.IG_DWHINEWTAB',
        'username',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'faild',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'cursor',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        'BATCH_DOWNLOAD_SELECTED',
        'video',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'www.',
        'isHomepage',
        'data',
        'video\x20volume\x20changed\x20#slider',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'video_url',
        'position',
        'range',
        'config_width',
        'relative',
        'getBlobMediaWithQuery()',
        'RENAME_PUBLISH_DATE',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'tagName',
        'target',
        'onReadyMyDW()\x20Timer',
        '\x20-</a>',
        'fail',
        'en-US',
        'getStories()',
        '.IG_DWHISTORY_ALL',
        'isDialog',
        'after',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '<div\x20class=\x22button_wrapper\x22>',
        'ig_cache_key',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'isStory',
        'undefined',
        '</a></button>',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'div[class][role=\x22button\x22]',
        'owner',
        'pageLoaded',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'children',
        'absolute',
        'section\x20>\x20main[role=\x22main\x22]',
        'G_RENAME_FORMAT',
        'G_CHECK_TIMESTAMP',
        'DISABLE_VIDEO_LOOPING',
        'host',
        'min',
        'mouseup',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '<a\x20media-id=\x22',
        '.IG_DWSTORY',
        '#iv_header',
        'DOWNLOAD',
        'prop',
        'toString',
        'type',
        'pageY',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'Logger:\x0a',
        'ended',
        'copy',
        'NEW_TAB',
        'userAgent',
        'script[type=\x22application/json\x22]',
        'ALL_CHECK',
        'next',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'Remote\x20version:\x20',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'Disable\x20Video\x20Auto-looping',
        '</div>',
        'highlights',
        'before',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        '\x22\x20/></div>',
        'getTime',
        'play\x20playing',
        'each',
        'Image',
        'data-username',
        'navigator',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'x1s85apg',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'GL_dataCache',
        'div[role=\x22presentation\x22]',
        'toLowerCase',
        'parse',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'https://www.instagram.com/reel/',
        'push',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        '#imageViewer',
        'controls',
        'select',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'body\x20>\x20div\x20section._ac0a',
        'which',
        'Download\x20All\x20Resources',
        'reels_media',
        'feedback_message',
        'data-completed',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'click',
        'max',
        '._acay',
        'query_id',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'version:',
        '6nArEiY',
        'is_video',
        'data-remove-thumbnail',
        'keys',
        'hd_profile_pic_url_info',
        'isHighlightsStory',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'join',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'DOWNLOAD_DOM_TREE',
        '._acay\x20._acaz',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'CHECK_UPDATE_MENU',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '.button_wrapper',
        'status',
        '<a\x20datetime=\x22',
        'split',
        '.IG_REELS_THUMBNAIL',
        'text/plain',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'boolean',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'getHours',
        'div#splash-screen',
        'GET',
        'version',
        'mousedown',
        'xdt_api__v1__media__shortcode__web_info',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'innerHeight',
        'getSeconds',
        'Found\x20post\x20container',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'LOAD_BLOB_MULTIPLE',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '</span></div>',
        'disconnect',
        'div#scrollview',
        'there\x20is\x20no\x20new\x20update',
        '.IG_THUMBNAIL_MAIN',
        'getTranslationText\x20catch\x20error:',
        'Display\x20HTML5\x20Video\x20Controller',
        'toISOString',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'modify-thumbnail',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        '.IG_DWNEWTAB',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        '#scrollWrapper',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'DOWNLOAD_ALL',
        'DIRECT_DOWNLOAD_ALL',
        'getFullYear',
        'edge_sidecar_to_children',
        '\x22\x20/>',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'registerMenuIds',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'MODIFY_VIDEO_VOLUME',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'GL_referrer',
        'hide',
        'hostname',
        'div\x20>\x20ul\x20li._acaz',
        'THUMBNAIL_INTRO',
        'filter',
        '._aagv\x20img',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        '.IG_DWSTORY_THUMBNAIL',
        'preventDefault',
        '._acay\x20+\x20.x24i39r',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'carousel_media:\x20undefined\x20username',
        'canDownload',
        'smooth',
        'DW_ALL',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'INTERNAL_CSS',
        'GraphVideo',
        '</option>',
        'div:last-child',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'loop',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'article',
        'highlight',
        '.IG_DWHISTORY_THUMBNAIL',
        '\x20child',
        'removeAttr',
        '__typename',
        'text',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'Preference\x20Settings',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'hasClass',
        'searchParams',
        'userLanguage',
        'pathname',
        'pause',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'story',
        'srcset',
        'div:not([class]):not([style])',
        '.IG_DW_ALL_MAIN',
        'video[class]',
        'Script\x20Loaded',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        'Current\x20version:\x20',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        '_ac3q',
        'wrap',
        '</div></div>',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'first',
        'FULLSCREEN',
        '329iLMWks',
        'response',
        'Close',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'reels',
        '\x22\x20data-globalIndex=\x22',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '</span>\x20',
        'href',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'firstStarted',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'shortcode',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'width',
        'Feedback\x20Options',
        '</span></label>',
        'left',
        'createElement',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'video\x20+\x20div\x20>\x20div',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'updatenotification',
        '\x22\x20data-ih-locale-title=\x22',
        'language',
        '.xpgaw4o',
        '\x22]\x20span',
        'data-controls',
        '[data-snig]',
        'NOTICE_UPDATE_CONTENT',
        '</a></button><br/>',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'addedNodes',
        'getTranslationText()',
        '#article-id',
        'className',
        '.IG_NEWTAB_MAIN',
        'data-modify',
        'catch',
        'candidates',
        'LOCALE_MANIFEST',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'title',
        'hidden',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'match',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'padEnd',
        'createMediaListDOM',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        'Download\x20Selected\x20Resources',
        '_blank',
        'height',
        ':hidden',
        'data-href',
        'users',
        'REPORT_FORK',
        '639985YrNmcC',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'Download\x20Video\x20Thumbnail',
        'GL_postPath',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'warn',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '54FOiUcp',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'trim',
        'mp4',
        '#iv_image',
        'z-index',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'fileRenameFormat',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        '4069638cuAQYo',
        'VID',
        'logger\x20sliced',
        '.IG_REELS',
        '</a>',
        'execCommand',
        '_acnf',
        '[data-ih-locale-title]',
        'slice',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'videoVolume'
    ];
    a0_0x56e4 = function () {
        return _0x5e26cf;
    };
    return a0_0x56e4();
}
function a0_0x3a70(_0x348125, _0x37d852) {
    const _0x56e402 = a0_0x56e4();
    return a0_0x3a70 = function (_0x3a704f, _0x4c1d03) {
        _0x3a704f = _0x3a704f - 0x1ba;
        let _0x3b4e39 = _0x56e402[_0x3a704f];
        return _0x3b4e39;
    }, a0_0x3a70(_0x348125, _0x37d852);
}
(function (_0x23db82, _0x4d28db) {
    const _0x29c378 = a0_0x3a70, _0x3c9b55 = _0x23db82();
    while (!![]) {
        try {
            const _0x378385 = -parseInt(_0x29c378(0x1f6)) / 0x1 * (-parseInt(_0x29c378(0x348)) / 0x2) + -parseInt(_0x29c378(0x281)) / 0x3 * (parseInt(_0x29c378(0x1cc)) / 0x4) + -parseInt(_0x29c378(0x33c)) / 0x5 + -parseInt(_0x29c378(0x37c)) / 0x6 + -parseInt(_0x29c378(0x2fd)) / 0x7 * (parseInt(_0x29c378(0x3cc)) / 0x8) + parseInt(_0x29c378(0x354)) / 0x9 + parseInt(_0x29c378(0x3bd)) / 0xa;
            if (_0x378385 === _0x4d28db)
                break;
            else
                _0x3c9b55['push'](_0x3c9b55['shift']());
        } catch (_0x1bdf13) {
            _0x3c9b55['push'](_0x3c9b55['shift']());
        }
    }
}(a0_0x56e4, 0x55607), function (_0x4434b7) {
    setTimeout(() => {
        'use strict';
        const _0x47aa26 = a0_0x3a70;
        const _0x282c20 = {
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
            }, _0x221a9e = [
                'RENAME_PUBLISH_DATE',
                _0x47aa26(0x399),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ], _0xd8e662 = {
                'DOWNLOAD': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
                'NEW_TAB': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
                'THUMBNAIL': _0x47aa26(0x249),
                'DOWNLOAD_ALL': _0x47aa26(0x371),
                'CLOSE': _0x47aa26(0x3da),
                'FULLSCREEN': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>'
            }, _0x2a61aa = 0xfa, _0x2aea65 = GM_getResourceText(_0x47aa26(0x2d4)), _0x52c527 = JSON[_0x47aa26(0x268)](GM_getResourceText(_0x47aa26(0x32a)));
        var _0xddd390 = {
            'videoVolume': GM_getValue('G_VIDEO_VOLUME') ? GM_getValue('G_VIDEO_VOLUME') : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x47aa26(0x23a)) ? GM_getValue('G_RENAME_FORMAT') : _0x47aa26(0x41c),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x47aa26(0x3b8)) || navigator[_0x47aa26(0x31a)] || navigator[_0x47aa26(0x2e9)],
            'currentURL': location[_0x47aa26(0x307)],
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
                _0x4f4aa2();
            })
        };
        _0x64231e(), GM_addStyle(_0x2aea65), _0x35c03d(), _0x55eaa4(_0xddd390[_0x47aa26(0x3b8)])[_0x47aa26(0x400)](_0x3ffd81 => {
            const _0x262df6 = _0x47aa26;
            _0xddd390['locale'][_0xddd390[_0x262df6(0x3b8)]] = _0x3ffd81, _0x3ab566(), _0x35c03d(), _0x411e9f(0x12c);
        })[_0x47aa26(0x328)](_0x1d03f9 => {
            const _0x5659a8 = _0x47aa26;
            _0x35c03d(), _0x411e9f(0x12c), !_0xddd390['lang'][_0x5659a8(0x38e)]('en') && console[_0x5659a8(0x207)](_0x5659a8(0x2ad), _0x1d03f9);
        }), _0x73b19f(_0x47aa26(0x2f2), GM_info[_0x47aa26(0x1c1)][_0x47aa26(0x377)], _0x47aa26(0x280), GM_info[_0x47aa26(0x1c1)]['version']);
        var _0x1a0ea7 = setInterval(function () {
            const _0x18dd47 = _0x47aa26;
            if (_0x4434b7(_0x18dd47(0x29b))[_0x18dd47(0x3ea)] > 0x0 && !_0x4434b7(_0x18dd47(0x29b))['is'](_0x18dd47(0x338)) || location[_0x18dd47(0x2ea)]['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x18dd47(0x2c4)][_0x18dd47(0x38e)](_0x18dd47(0x214)) || (location[_0x18dd47(0x2ea)][_0x18dd47(0x1fb)]('/followers/') || location['pathname'][_0x18dd47(0x1fb)](_0x18dd47(0x1bf))) && _0x4434b7(_0x18dd47(0x3ba))[_0x18dd47(0x3ea)] > 0x0) {
                _0xddd390['pageLoaded'] = ![];
                return;
            }
            if (_0xddd390[_0x18dd47(0x3d4)] != location[_0x18dd47(0x307)] || !_0xddd390[_0x18dd47(0x309)] || !_0xddd390[_0x18dd47(0x235)]) {
                console[_0x18dd47(0x1ba)](_0x18dd47(0x1ca), _0x18dd47(0x441)), clearInterval(_0xddd390[_0x18dd47(0x39a)]), _0xddd390['pageLoaded'] = ![], _0xddd390[_0x18dd47(0x309)] = !![], _0xddd390['currentURL'] = location['href'], _0xddd390[_0x18dd47(0x3df)][_0x18dd47(0x2a9)]();
                if (location['href']['startsWith']('https://www.instagram.com/p/') || location['pathname'][_0x18dd47(0x330)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x18dd47(0x307)]['startsWith'](_0x18dd47(0x26c))) {
                    _0xddd390[_0x18dd47(0x265)][_0x18dd47(0x1d6)] = {}, _0xddd390[_0x18dd47(0x265)][_0x18dd47(0x257)] = {}, _0x73b19f(_0x18dd47(0x229));
                    var _0x26ead5 = setInterval(() => {
                        const _0x2e8f17 = _0x18dd47;
                        _0x4434b7('body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')[_0x2e8f17(0x3ea)] > 0x0 && (clearInterval(_0x26ead5), setTimeout(() => {
                            _0x4f4aa2(![]);
                        }, 0xf));
                    }, 0x64);
                    _0xddd390[_0x18dd47(0x235)] = !![];
                }
                location[_0x18dd47(0x307)][_0x18dd47(0x38e)](_0x18dd47(0x40f)) && (_0x73b19f(_0x18dd47(0x35f)), setTimeout(() => {
                    _0x358fd2(![]);
                }, 0x96), _0xddd390[_0x18dd47(0x235)] = !![]);
                if (location[_0x18dd47(0x307)][_0x18dd47(0x293)]('?')[0x0] == _0x18dd47(0x412)) {
                    _0xddd390['GL_dataCache'][_0x18dd47(0x1d6)] = {}, _0xddd390[_0x18dd47(0x265)][_0x18dd47(0x257)] = {};
                    let _0x2ba6a0 = _0xddd390[_0x18dd47(0x2c2)]?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x73b19f(_0x18dd47(0x215), _0x2ba6a0), setTimeout(() => {
                        const _0x2e2b18 = _0x18dd47;
                        _0x4f4aa2(![], _0x2ba6a0);
                        const _0x55f524 = _0x4434b7('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.['parent']()[0x0];
                        _0x55f524 && _0xddd390[_0x2e2b18(0x3df)][_0x2e2b18(0x397)](_0x55f524, { 'childList': !![] });
                    }, 0x96), _0xddd390[_0x18dd47(0x235)] = !![];
                }
                _0x4434b7(_0x18dd47(0x381))[_0x18dd47(0x3ea)] && location[_0x18dd47(0x2ea)]['match'](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x18dd47(0x2ea)]['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x73b19f('isProfile'), setTimeout(() => {
                    _0x105166(![]);
                }, 0x96), _0xddd390[_0x18dd47(0x235)] = !![]);
                if (!_0xddd390[_0x18dd47(0x235)]) {
                    if (location['href'][_0x18dd47(0x330)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0xddd390[_0x18dd47(0x265)][_0x18dd47(0x257)] = {}, _0x73b19f(_0x18dd47(0x286)), _0x39a41b(![]), _0xddd390[_0x18dd47(0x39a)] = setInterval(() => {
                            _0x3cfab8(![]);
                        }, _0x2a61aa), _0x4434b7('.IG_DWHISTORY')[_0x18dd47(0x3ea)] && setTimeout(() => {
                            const _0xd80eb0 = _0x18dd47;
                            if (_0x282c20['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x4493e9 = _0x4434b7(_0xd80eb0(0x218))['filter'](function () {
                                    const _0x47d0d0 = _0xd80eb0;
                                    return _0x4434b7(this)[_0x47d0d0(0x237)]()[_0x47d0d0(0x3ea)] === 0x0 && this['textContent'][_0x47d0d0(0x34a)]() !== '';
                                });
                                _0x4493e9?.[_0xd80eb0(0x1fa)](_0xd80eb0(0x27a));
                            }
                            _0xddd390[_0xd80eb0(0x235)] = !![];
                        }, 0x96);
                    else
                        location[_0x18dd47(0x307)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x73b19f(_0x18dd47(0x22f)), _0x4434b7('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x18dd47(0x3ea)] > 0x0 && (_0x4434b7(_0x18dd47(0x242))[_0x18dd47(0x3be)](), _0x4434b7('.IG_DWNEWTAB')[_0x18dd47(0x3be)](), _0x4434b7(_0x18dd47(0x2ca))[_0x18dd47(0x3ea)] && _0x4434b7('.IG_DWSTORY_THUMBNAIL')[_0x18dd47(0x3be)](), _0x21eced(![]), setTimeout(() => {
                            _0x21eced(![]);
                        }, 0x96)), _0x4434b7(_0x18dd47(0x242))[_0x18dd47(0x3ea)] && setTimeout(() => {
                            const _0x59a899 = _0x18dd47;
                            if (_0x282c20[_0x59a899(0x393)]) {
                                var _0x48411d = _0x4434b7(_0x59a899(0x218))[_0x59a899(0x2c7)](function () {
                                    const _0x2439a7 = _0x59a899;
                                    return _0x4434b7(this)[_0x2439a7(0x237)]()[_0x2439a7(0x3ea)] === 0x0 && this[_0x2439a7(0x1e2)][_0x2439a7(0x34a)]() !== '';
                                });
                                _0x48411d?.[_0x59a899(0x27a)]();
                            }
                            _0xddd390[_0x59a899(0x235)] = !![];
                        }, 0x96)) : (_0xddd390[_0x18dd47(0x235)] = ![], _0x4434b7(_0x18dd47(0x242))['length'] && _0x4434b7(_0x18dd47(0x242))[_0x18dd47(0x3be)](), _0x4434b7(_0x18dd47(0x392))[_0x18dd47(0x3ea)] && _0x4434b7(_0x18dd47(0x392))['remove'](), _0x4434b7('.IG_DWNEWTAB')['length'] && _0x4434b7(_0x18dd47(0x2b3))[_0x18dd47(0x3be)](), _0x4434b7(_0x18dd47(0x2ca))[_0x18dd47(0x3ea)] && _0x4434b7(_0x18dd47(0x2ca))[_0x18dd47(0x3be)](), _0x4434b7('.IG_DWHISTORY')[_0x18dd47(0x3ea)] && _0x4434b7(_0x18dd47(0x370))[_0x18dd47(0x3be)](), _0x4434b7('.IG_DWHISTORY_ALL')['length'] && _0x4434b7(_0x18dd47(0x228))['remove'](), _0x4434b7(_0x18dd47(0x20a))['length'] && _0x4434b7(_0x18dd47(0x20a))[_0x18dd47(0x3be)](), _0x4434b7('.IG_DWHISTORY_THUMBNAIL')[_0x18dd47(0x3ea)] && _0x4434b7(_0x18dd47(0x2df))[_0x18dd47(0x3be)]());
                }
                _0x411e9f(0x12c), _0xddd390[_0x18dd47(0x2c2)] = new URL(location[_0x18dd47(0x307)])[_0x18dd47(0x2ea)];
            }
        }, _0x2a61aa);
        async function _0xc4edd5() {
            const _0x86bd17 = _0x47aa26;
            _0x2c4ade(!![]);
            let _0x293cf6 = new Date()[_0x86bd17(0x25c)](), _0x38b020 = Math[_0x86bd17(0x3c2)](_0x293cf6 / 0x3e8), _0xfa39fc = location[_0x86bd17(0x307)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x3baf73 = await _0x51e4f9(_0xfa39fc), _0x595aad = _0x3baf73['data'][_0x86bd17(0x276)][0x0][_0x86bd17(0x234)][_0x86bd17(0x20b)], _0x2616ef = 0x0;
            _0x1a29b2(_0x2616ef, _0x3baf73['data'][_0x86bd17(0x276)][0x0][_0x86bd17(0x41b)][_0x86bd17(0x3ea)]), _0x3baf73['data'][_0x86bd17(0x276)][0x0][_0x86bd17(0x41b)][_0x86bd17(0x43e)]((_0x5efb0f, _0x47f781) => {
                setTimeout(() => {
                    const _0x102df4 = a0_0x3a70;
                    _0x282c20[_0x102df4(0x21f)] && (_0x38b020 = _0x5efb0f[_0x102df4(0x434)]), _0x5efb0f['display_resources'][_0x102df4(0x1da)](function (_0x2ee2ce, _0x1cd56b) {
                        const _0x7cddd4 = _0x102df4;
                        if (_0x2ee2ce['config_width'] < _0x1cd56b[_0x7cddd4(0x21c)])
                            return 0x1;
                        if (_0x2ee2ce[_0x7cddd4(0x21c)] > _0x1cd56b[_0x7cddd4(0x21c)])
                            return -0x1;
                        return 0x0;
                    }), _0x5efb0f[_0x102df4(0x282)] ? _0x3e6c2e(_0x5efb0f[_0x102df4(0x1be)][0x0][_0x102df4(0x443)], _0x595aad, 'stories', _0x38b020, _0x102df4(0x34b), _0x5efb0f['id'])['then'](() => {
                        const _0x329a39 = _0x102df4;
                        _0x1a29b2(++_0x2616ef, _0x3baf73['data'][_0x329a39(0x276)][0x0][_0x329a39(0x41b)][_0x329a39(0x3ea)]);
                    }) : _0x3e6c2e(_0x5efb0f['display_resources'][0x0][_0x102df4(0x443)], _0x595aad, _0x102df4(0x1d6), _0x38b020, _0x102df4(0x44c), _0x5efb0f['id'])[_0x102df4(0x400)](() => {
                        const _0x8b3455 = _0x102df4;
                        _0x1a29b2(++_0x2616ef, _0x3baf73[_0x8b3455(0x216)][_0x8b3455(0x276)][0x0][_0x8b3455(0x41b)][_0x8b3455(0x3ea)]);
                    });
                }, 0x64 * _0x47f781);
            });
        }
        async function _0x39a41b(_0x3803bc, _0x547fff) {
            const _0x453909 = _0x47aa26;
            var _0x4a3b3c = _0x4434b7(_0x453909(0x334))['filter'](function () {
                const _0x2dbddc = _0x453909;
                return _0x4434b7(this)[_0x2dbddc(0x41f)](_0x2dbddc(0x307))[_0x2dbddc(0x293)]('/')['filter'](_0xcc7d0b => _0xcc7d0b[_0x2dbddc(0x3ea)] > 0x0)[_0x2dbddc(0x3ea)] === 0x1;
            })[_0x453909(0x2fb)]()[_0x453909(0x41f)]('href')[_0x453909(0x293)]('/')[_0x453909(0x2c7)](_0x4f267d => _0x4f267d[_0x453909(0x3ea)] > 0x0)['at'](0x0);
            if (_0x3803bc) {
                let _0x569e5d = new Date()[_0x453909(0x25c)](), _0x1be080 = Math['floor'](_0x569e5d / 0x3e8), _0x463dd8 = location[_0x453909(0x307)]['replace'](/\/$/ig, '')[_0x453909(0x293)]('/')['at'](-0x1), _0x4e68d8 = _0x4434b7(_0x453909(0x426))['length'] || _0x4434b7(_0x453909(0x2a7))[_0x453909(0x3ea)] || _0x4434b7(_0x453909(0x2db))[_0x453909(0x3e3)](_0x453909(0x2da))['length'], _0x12037d = 0x0;
                _0x2c4ade(!![]);
                if (_0xddd390['GL_dataCache']['highlights'][_0x463dd8]) {
                    _0x73b19f(_0x453909(0x3dc), _0x463dd8);
                    let _0x1fa99 = _0xddd390['GL_dataCache'][_0x453909(0x257)][_0x463dd8]['data'][_0x453909(0x276)][0x0]['items']['length'];
                    _0x4a3b3c = _0xddd390[_0x453909(0x265)][_0x453909(0x257)][_0x463dd8][_0x453909(0x216)][_0x453909(0x276)][0x0][_0x453909(0x234)][_0x453909(0x20b)], _0x12037d = _0xddd390['GL_dataCache'][_0x453909(0x257)][_0x463dd8][_0x453909(0x216)][_0x453909(0x276)][0x0][_0x453909(0x41b)][_0x1fa99 - _0x4e68d8];
                } else {
                    let _0x5dc572 = await _0x51e4f9(_0x463dd8), _0x5e39d5 = _0x5dc572[_0x453909(0x216)][_0x453909(0x276)][0x0][_0x453909(0x41b)][_0x453909(0x3ea)];
                    _0x4a3b3c = _0x5dc572[_0x453909(0x216)][_0x453909(0x276)][0x0][_0x453909(0x234)][_0x453909(0x20b)], _0x12037d = _0x5dc572[_0x453909(0x216)][_0x453909(0x276)][0x0][_0x453909(0x41b)][_0x5e39d5 - _0x4e68d8], _0xddd390[_0x453909(0x265)][_0x453909(0x257)][_0x463dd8] = _0x5dc572;
                }
                _0x73b19f(_0x453909(0x3a9), _0x463dd8, _0xddd390[_0x453909(0x265)][_0x453909(0x257)][_0x463dd8]);
                _0x282c20['RENAME_PUBLISH_DATE'] && (_0x1be080 = _0x12037d['taken_at_timestamp']);
                if (_0x282c20['FORCE_RESOURCE_VIA_MEDIA'] && !_0xddd390[_0x453909(0x45c)]) {
                    let _0x496c9a = await _0x981f7b(_0x12037d['id']);
                    _0x496c9a['status'] === 'ok' ? _0x496c9a['items'][0x0][_0x453909(0x428)] ? _0x547fff ? _0x45e777(_0x496c9a[_0x453909(0x41b)][0x0][_0x453909(0x428)][0x0][_0x453909(0x3a0)]) : _0x3e6c2e(_0x496c9a[_0x453909(0x41b)][0x0][_0x453909(0x428)][0x0][_0x453909(0x3a0)], _0x4a3b3c, _0x453909(0x257), _0x1be080, _0x453909(0x34b), _0x496c9a['items'][0x0]['id']) : _0x547fff ? _0x45e777(_0x496c9a[_0x453909(0x41b)][0x0][_0x453909(0x431)][_0x453909(0x329)][0x0][_0x453909(0x3a0)]) : _0x3e6c2e(_0x496c9a['items'][0x0][_0x453909(0x431)]['candidates'][0x0]['url'], _0x4a3b3c, _0x453909(0x257), _0x1be080, _0x453909(0x44c), _0x496c9a[_0x453909(0x41b)][0x0]['id']) : (_0x282c20[_0x453909(0x399)] ? (delete _0xddd390[_0x453909(0x265)][_0x453909(0x257)][_0x463dd8], _0xddd390['tempFetchRateLimit'] = !![], _0x39a41b(!![], _0x547fff)) : alert(_0x453909(0x288) + _0x496c9a['message']), _0x73b19f(_0x496c9a));
                } else
                    _0x12037d[_0x453909(0x282)] ? _0x547fff ? _0x45e777(_0x12037d['video_resources']['at'](-0x1)[_0x453909(0x443)], _0x4a3b3c) : _0x3e6c2e(_0x12037d[_0x453909(0x1be)]['at'](-0x1)[_0x453909(0x443)], _0x4a3b3c, _0x453909(0x257), _0x1be080, _0x453909(0x34b), _0x12037d['id']) : _0x547fff ? _0x45e777(_0x12037d[_0x453909(0x1db)]['at'](-0x1)['src'], _0x4a3b3c) : _0x3e6c2e(_0x12037d['display_resources']['at'](-0x1)['src'], _0x4a3b3c, _0x453909(0x257), _0x1be080, _0x453909(0x44c), _0x12037d['id']), _0xddd390[_0x453909(0x45c)] = ![];
                _0x2c4ade(![]);
            } else {
                if (!_0x4434b7(_0x453909(0x370))[_0x453909(0x3ea)]) {
                    let _0x1181fb = null;
                    _0x4434b7(_0x453909(0x273))[_0x453909(0x3ea)] > 0x0 ? _0x1181fb = _0x4434b7(_0x453909(0x3c7)) : (_0x1181fb = _0x4434b7(_0x453909(0x314)), _0x1181fb[_0x453909(0x444)](_0x453909(0x21a), _0x453909(0x21d)));
                    if (_0x1181fb['length'] === 0x0) {
                        let _0x549d63 = _0x4434b7(_0x453909(0x3d5)), _0x4f83f7 = 0x0;
                        _0x549d63[_0x453909(0x25e)](function () {
                            const _0x1debeb = _0x453909;
                            _0x4434b7(this)[_0x1debeb(0x30d)]() > _0x4f83f7 && (_0x4f83f7 = _0x4434b7(this)[_0x1debeb(0x30d)](), _0x1181fb = _0x4434b7(this)[_0x1debeb(0x237)](_0x1debeb(0x41a))[_0x1debeb(0x2fb)]());
                        });
                    }
                    if (_0x1181fb != null) {
                        _0x1181fb['append'](_0x453909(0x32f) + _0x414c8a('DW') + _0x453909(0x287) + _0xd8e662[_0x453909(0x244)] + _0x453909(0x256)), _0x1181fb[_0x453909(0x205)](_0x453909(0x240) + _0x414c8a(_0x453909(0x24d)) + _0x453909(0x299) + _0xd8e662['NEW_TAB'] + '</div>');
                        let _0x59670f = _0x5cb1df(_0x4a3b3c);
                        _0x59670f['length'] > 0x1 && _0x1181fb[_0x453909(0x205)](_0x453909(0x1f8) + _0x414c8a(_0x453909(0x2d2)) + _0x453909(0x2f5) + _0xd8e662[_0x453909(0x2b7)] + _0x453909(0x256));
                        let _0x524850 = _0x59670f[_0x453909(0x379)]('div[class]')['find'](_0x453909(0x36d))?.['attr'](_0x453909(0x32c));
                        _0x524850 != null && _0x59670f['parents'](_0x453909(0x413))[_0x453909(0x3e3)](_0x453909(0x36d))[_0x453909(0x2e3)](_0x524850), _0x1181fb[_0x453909(0x3e3)]('img[referrerpolicy]')[_0x453909(0x25e)](function () {
                            const _0x3c793e = _0x453909;
                            _0x4434b7(this)['on'](_0x3c793e(0x208), function () {
                                const _0x17312b = _0x3c793e;
                                !_0x4434b7(this)[_0x17312b(0x216)]('remove-thumbnail') && (_0x1181fb[_0x17312b(0x3e3)](_0x17312b(0x2df))[_0x17312b(0x3ea)] === 0x0 ? (_0x4434b7(this)[_0x17312b(0x41f)](_0x17312b(0x283), !![]), _0x4434b7('.IG_DWHISTORY_THUMBNAIL')[_0x17312b(0x3be)](), _0x73b19f(_0x17312b(0x38d))) : (_0x4434b7(this)[_0x17312b(0x41f)](_0x17312b(0x283), !![]), _0x73b19f(_0x17312b(0x272))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x3cfab8(_0x5c6b2a) {
            const _0x561cae = _0x47aa26;
            if (_0x5c6b2a) {
                let _0x1179b3 = new Date()['getTime'](), _0x540d33 = Math[_0x561cae(0x3c2)](_0x1179b3 / 0x3e8), _0x53c888 = location['href'][_0x561cae(0x1cb)](/\/$/ig, '')[_0x561cae(0x293)]('/')['at'](-0x1), _0x32fad4 = '', _0x3b2081 = _0x4434b7(_0x561cae(0x426))[_0x561cae(0x3ea)] || _0x4434b7(_0x561cae(0x2a7))['length'] || _0x4434b7(_0x561cae(0x2db))[_0x561cae(0x3e3)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x561cae(0x3ea)], _0x41138a = '';
                _0x2c4ade(!![]);
                if (_0xddd390['GL_dataCache'][_0x561cae(0x257)][_0x53c888]) {
                    _0x73b19f(_0x561cae(0x3dc), _0x53c888);
                    let _0x25d76e = _0xddd390[_0x561cae(0x265)][_0x561cae(0x257)][_0x53c888][_0x561cae(0x216)]['reels_media'][0x0][_0x561cae(0x41b)][_0x561cae(0x3ea)];
                    _0x32fad4 = _0xddd390['GL_dataCache'][_0x561cae(0x257)][_0x53c888][_0x561cae(0x216)]['reels_media'][0x0][_0x561cae(0x234)][_0x561cae(0x20b)], _0x41138a = _0xddd390[_0x561cae(0x265)]['highlights'][_0x53c888][_0x561cae(0x216)]['reels_media'][0x0][_0x561cae(0x41b)][_0x25d76e - _0x3b2081];
                } else {
                    let _0x5e713d = await _0x51e4f9(_0x53c888), _0x2e037d = _0x5e713d[_0x561cae(0x216)][_0x561cae(0x276)][0x0][_0x561cae(0x41b)][_0x561cae(0x3ea)];
                    _0x32fad4 = _0x5e713d['data'][_0x561cae(0x276)][0x0][_0x561cae(0x234)][_0x561cae(0x20b)], _0x41138a = _0x5e713d[_0x561cae(0x216)]['reels_media'][0x0][_0x561cae(0x41b)][_0x2e037d - _0x3b2081], _0xddd390[_0x561cae(0x265)][_0x561cae(0x257)][_0x53c888] = _0x5e713d;
                }
                _0x282c20[_0x561cae(0x21f)] && (_0x540d33 = _0x41138a[_0x561cae(0x434)]);
                if (_0x282c20['FORCE_RESOURCE_VIA_MEDIA'] && !_0xddd390[_0x561cae(0x45c)]) {
                    let _0x52733b = await _0x981f7b(_0x41138a['id']);
                    _0x52733b[_0x561cae(0x291)] === 'ok' ? _0x3e6c2e(_0x52733b[_0x561cae(0x41b)][0x0][_0x561cae(0x431)][_0x561cae(0x329)][0x0]['url'], _0x32fad4, _0x561cae(0x257), _0x540d33, _0x561cae(0x44c), _0x53c888) : (_0x282c20[_0x561cae(0x399)] ? (delete _0xddd390[_0x561cae(0x265)]['highlights'][_0x53c888], _0xddd390[_0x561cae(0x45c)] = !![], _0x3cfab8(!![])) : alert(_0x561cae(0x288) + _0x52733b[_0x561cae(0x402)]), _0x73b19f(_0x52733b));
                } else
                    _0x3e6c2e(_0x41138a[_0x561cae(0x1db)]['at'](-0x1)['src'], _0x32fad4, _0x561cae(0x257), _0x540d33, _0x561cae(0x44c), _0x53c888), _0xddd390[_0x561cae(0x45c)] = ![];
                _0x2c4ade(![]);
            } else {
                if (_0x4434b7(_0x561cae(0x298))['length']) {
                    if (!_0x4434b7(_0x561cae(0x2df))[_0x561cae(0x3ea)]) {
                        let _0x4b8442 = null;
                        _0x4434b7(_0x561cae(0x273))[_0x561cae(0x3ea)] > 0x0 ? _0x4b8442 = _0x4434b7(_0x561cae(0x3c7)) : (_0x4b8442 = _0x4434b7(_0x561cae(0x314)), _0x4b8442[_0x561cae(0x444)]('position', 'relative'));
                        if (_0x4b8442[_0x561cae(0x3ea)] === 0x0) {
                            let _0x1a99a8 = _0x4434b7(_0x561cae(0x3d5)), _0x5f564b = 0x0;
                            _0x1a99a8[_0x561cae(0x25e)](function () {
                                const _0x569363 = _0x561cae;
                                _0x4434b7(this)[_0x569363(0x30d)]() > _0x5f564b && (_0x5f564b = _0x4434b7(this)[_0x569363(0x30d)](), _0x4b8442 = _0x4434b7(this)[_0x569363(0x237)](_0x569363(0x41a))[_0x569363(0x2fb)]());
                            });
                        }
                        _0x4b8442 != null && _0x4b8442['append'](_0x561cae(0x44d) + _0x414c8a(_0x561cae(0x2c6)) + _0x561cae(0x27f) + _0xd8e662[_0x561cae(0x386)] + _0x561cae(0x256));
                    }
                } else
                    _0x4434b7(_0x561cae(0x2df))[_0x561cae(0x3be)]();
            }
        }
        function _0x4f4aa2(_0x30507f, _0x13d83e) {
            const _0x2caac8 = _0x47aa26;
            _0x13d83e === !![] && (_0x73b19f('hasReferrer', _0x2caac8(0x1fd)), _0x4434b7(_0x2caac8(0x3e4))[_0x2caac8(0x2c7)](function () {
                return _0x4434b7(this)['find']('.IG_DW_MAIN')['length'] === 0x0;
            })[_0x2caac8(0x2e1)](_0x2caac8(0x3dd)));
            if (_0x30507f == ![]) {
                const _0x348042 = 0x64;
                let _0x543b9f = 0x0;
                var _0x4de61f = setInterval(() => {
                    const _0xfeb003 = _0x2caac8;
                    (_0x543b9f > _0x348042 || _0x4434b7('article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]')[_0xfeb003(0x3ea)] > 0x0) && (clearInterval(_0x4de61f), _0x543b9f > _0x348042 && console[_0xfeb003(0x342)](_0xfeb003(0x223), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x73b19f(_0xfeb003(0x223), _0xfeb003(0x3f7)), _0x4114bc(), _0x543b9f++;
                }, 0x32);
            } else
                _0x4114bc();
        }
        function _0x3e0d00(_0x47ade2) {
            const _0x48c025 = _0x47aa26;
            _0x282c20['DISABLE_VIDEO_LOOPING'] && _0x47ade2[_0x48c025(0x3e3)](_0x48c025(0x212))['each'](function () {
                const _0x518968 = _0x48c025;
                _0x4434b7(this)['on'](_0x518968(0x24b), function () {
                    const _0x5d088a = _0x518968;
                    !_0x4434b7(this)[_0x5d088a(0x216)](_0x5d088a(0x2d9)) && (_0x4434b7(this)[_0x5d088a(0x41f)](_0x5d088a(0x398), !![]), this[_0x5d088a(0x2eb)](), _0x73b19f(_0x5d088a(0x308)));
                });
            });
            _0x282c20[_0x48c025(0x2c0)] && _0x47ade2[_0x48c025(0x3e3)](_0x48c025(0x212))['each'](function () {
                const _0x523a89 = _0x48c025;
                _0x4434b7(this)['on'](_0x523a89(0x25d), function () {
                    const _0x3e7236 = _0x523a89;
                    !_0x4434b7(this)[_0x3e7236(0x216)](_0x3e7236(0x376)) && (_0x4434b7(this)[_0x3e7236(0x41f)](_0x3e7236(0x327), !![]), this[_0x3e7236(0x1d0)] = _0xddd390[_0x3e7236(0x35e)], _0x73b19f('(post)\x20Added\x20video\x20event\x20listener\x20#modify'));
                });
            });
            _0x282c20[_0x48c025(0x3f6)] && _0x47ade2[_0x48c025(0x3e3)](_0x48c025(0x212))['each'](function () {
                const _0x552144 = _0x48c025;
                if (!_0x4434b7(this)[_0x552144(0x216)](_0x552144(0x270))) {
                    let _0x4d185a = _0x4434b7(this);
                    _0x73b19f('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x282c20[_0x552144(0x2c0)] && (this['volume'] = _0xddd390[_0x552144(0x35e)], _0x4434b7(this)['on'](_0x552144(0x437), function () {
                        const _0xfefa88 = _0x552144;
                        this[_0xfefa88(0x1d0)] = _0xddd390[_0xfefa88(0x35e)];
                    })), _0x4434b7(this)['on']('contextmenu', function (_0x53e8c2) {
                        const _0x3dcfcd = _0x552144;
                        _0x53e8c2[_0x3dcfcd(0x2cb)](), _0x4d185a[_0x3dcfcd(0x444)]('z-index', '-1'), _0x4d185a['removeAttr']('controls');
                    }), _0x4434b7(this)['parent']()['find'](_0x552144(0x316))[_0x552144(0x2fb)]()['on'](_0x552144(0x3e7), function (_0x478694) {
                        const _0x245ddb = _0x552144;
                        _0x478694['preventDefault'](), _0x4d185a[_0x245ddb(0x444)](_0x245ddb(0x34d), '2'), _0x4d185a[_0x245ddb(0x41f)](_0x245ddb(0x270), !![]);
                    }), _0x4434b7(this)['on']('volumechange', function () {
                        const _0x5de1dc = _0x552144;
                        let _0x8b07f2 = _0x4434b7(this)['parent']()[_0x5de1dc(0x3e3)](_0x5de1dc(0x316))['find'](_0x5de1dc(0x315))[_0x5de1dc(0x2c7)](function (_0x4e4289) {
                            const _0x3b4ead = _0x5de1dc;
                            return _0x4434b7(this)[_0x3b4ead(0x30d)]() <= 0x40 && _0x4434b7(this)[_0x3b4ead(0x337)]() <= 0x40 && _0x4434b7(this)[_0x3b4ead(0x3e3)](_0x3b4ead(0x20c))[_0x3b4ead(0x3ea)] > 0x0;
                        });
                        var _0x57484d = _0x8b07f2[_0x5de1dc(0x3e3)](_0x5de1dc(0x304))['length'] === 0x0;
                        this[_0x5de1dc(0x3b3)] != _0x57484d && (this[_0x5de1dc(0x1d0)] = _0xddd390['videoVolume'], _0x8b07f2?.['trigger']('click')), _0x4434b7(this)['attr'](_0x5de1dc(0x278)) && (_0xddd390[_0x5de1dc(0x35e)] = this[_0x5de1dc(0x1d0)], GM_setValue(_0x5de1dc(0x383), this[_0x5de1dc(0x1d0)])), this[_0x5de1dc(0x1d0)] == _0xddd390[_0x5de1dc(0x35e)] && _0x4434b7(this)['attr'](_0x5de1dc(0x278), !![]);
                    }), _0x4434b7(this)['css'](_0x552144(0x21a), _0x552144(0x238)), _0x4434b7(this)[_0x552144(0x444)]('z-index', '2'), _0x4434b7(this)[_0x552144(0x41f)]('data-controls', !![]), _0x4434b7(this)[_0x552144(0x41f)](_0x552144(0x270), !![]);
                }
            });
            var _0x508543 = _0x47ade2['find'](_0x48c025(0x212)), _0xc657 = _0x47ade2[_0x48c025(0x3e3)](_0x48c025(0x316))[_0x48c025(0x2fb)]();
            _0x13e2ec(_0x508543, _0xc657, _0x48c025(0x391), 'bottom');
        }
        ;
        function _0x4114bc() {
            const _0x2364cb = _0x47aa26;
            _0x4434b7(_0x2364cb(0x22e))[_0x2364cb(0x1f1)](function (_0x6c959a) {
                const _0x5cce4d = _0x2364cb;
                return _0x4434b7(this)['is'](_0x5cce4d(0x213)) ? _0x4434b7(this)[_0x5cce4d(0x3b4)]()[_0x5cce4d(0x3b4)]()[_0x5cce4d(0x3b4)]()[_0x5cce4d(0x3b4)]()[0x0] : this;
            })['filter'](function () {
                const _0x97f060 = _0x2364cb;
                return _0x4434b7(this)[_0x97f060(0x337)]() > 0x0 && _0x4434b7(this)[_0x97f060(0x30d)]() > 0x0;
            })[_0x2364cb(0x25e)](function (_0x5ac00f) {
                const _0x2f0b3b = _0x2364cb;
                if (!_0x4434b7(this)[_0x2f0b3b(0x41f)]('data-snig') && !_0x4434b7(this)[_0x2f0b3b(0x2e7)]('x1iyjqo2') && !_0x4434b7(this)[_0x2f0b3b(0x237)](_0x2f0b3b(0x2dd))?.[_0x2f0b3b(0x2e7)]('x1iyjqo2') && _0x4434b7(this)[_0x2f0b3b(0x379)](_0x2f0b3b(0x2aa))['length'] === 0x0) {
                    _0x73b19f(_0x2f0b3b(0x2a3), _0x4434b7(this));
                    const _0x4c510e = _0x4434b7(this), _0x63f085 = this[_0x2f0b3b(0x221)], _0x2f292b = _0x2f0b3b(0x28c);
                    var _0x5de86a;
                    if (_0x63f085 === _0x2f0b3b(0x1c7) && _0x5ac00f != 0x0)
                        return;
                    const _0x478228 = _0x4c510e['children'](_0x2f0b3b(0x41a))[_0x2f0b3b(0x237)](_0x2f0b3b(0x41a));
                    if (_0x478228[_0x2f0b3b(0x3ea)] === 0x0)
                        return;
                    _0x73b19f(_0x2f0b3b(0x396), _0x478228);
                    if (_0x4c510e[_0x2f0b3b(0x3e3)](_0x2f0b3b(0x27c))[_0x2f0b3b(0x3ea)] > 0x0) {
                        _0x4c510e[_0x2f0b3b(0x3e3)]('._acay\x20+\x20.x24i39r')[_0x2f0b3b(0x3ea)] > 0x0 && _0x4c510e[_0x2f0b3b(0x3e3)]('._acay\x20+\x20.x24i39r')[_0x2f0b3b(0x444)](_0x2f0b3b(0x1e3), _0x2f0b3b(0x3b7));
                        const _0x57ec22 = _0x4c510e['find'](_0x2f0b3b(0x27c))['first']()[_0x2f0b3b(0x3b4)]()[0x0];
                        var _0x1ee1f9 = new MutationObserver(function () {
                            const _0x1343d8 = _0x2f0b3b;
                            _0x4c510e[_0x1343d8(0x3e3)](_0x1343d8(0x2cc))[_0x1343d8(0x444)](_0x1343d8(0x1e3), '37px');
                        });
                        _0x1ee1f9[_0x2f0b3b(0x397)](_0x57ec22, { 'childList': !![] });
                    }
                    _0x478228['eq'](_0x63f085 === 'DIV' ? 0x0 : _0x478228[_0x2f0b3b(0x3ea)] - 0x2)[_0x2f0b3b(0x205)](_0x2f0b3b(0x22c));
                    const _0x218ff9 = _0x2f0b3b(0x32f) + _0x414c8a('DW') + _0x2f0b3b(0x3e1) + _0xd8e662[_0x2f0b3b(0x244)] + _0x2f0b3b(0x256), _0x35ac65 = _0x2f0b3b(0x240) + _0x414c8a(_0x2f0b3b(0x24d)) + _0x2f0b3b(0x210) + _0xd8e662[_0x2f0b3b(0x24d)] + _0x2f0b3b(0x256), _0x64e57a = _0x2f0b3b(0x44d) + _0x414c8a(_0x2f0b3b(0x2c6)) + _0x2f0b3b(0x317) + _0xd8e662[_0x2f0b3b(0x386)] + _0x2f0b3b(0x256), _0x15f039 = _0x2f0b3b(0x269) + _0x414c8a('IMAGE_VIEWER') + _0x2f0b3b(0x2a6) + _0xd8e662[_0x2f0b3b(0x2fc)] + _0x2f0b3b(0x256);
                    _0x478228['find'](_0x2f0b3b(0x290))[_0x2f0b3b(0x205)](_0x218ff9);
                    const _0x389d5c = _0x4c510e[_0x2f0b3b(0x3e3)](_0x2f292b)['length'];
                    if (_0x389d5c > 0x1 && _0x282c20[_0x2f0b3b(0x30c)] && !_0x282c20[_0x2f0b3b(0x2b8)]) {
                        const _0x5e2512 = _0x2f0b3b(0x1f8) + _0x414c8a(_0x2f0b3b(0x2d2)) + _0x2f0b3b(0x2a0) + _0xd8e662[_0x2f0b3b(0x2b7)] + _0x2f0b3b(0x256);
                        _0x478228[_0x2f0b3b(0x3e3)]('.button_wrapper')['append'](_0x5e2512);
                    }
                    _0x478228[_0x2f0b3b(0x3e3)](_0x2f0b3b(0x290))['append'](_0x35ac65), setTimeout(() => {
                        const _0x42d310 = _0x2f0b3b;
                        if (_0x478228['eq'](_0x63f085 === _0x42d310(0x1c7) ? 0x0 : _0x478228[_0x42d310(0x3ea)] - 0x2)[_0x42d310(0x3e3)](_0x42d310(0x2c5))[_0x42d310(0x3ea)] === 0x0)
                            _0x478228[_0x42d310(0x3e3)](_0x42d310(0x212))[_0x42d310(0x3ea)] > 0x0 ? _0x478228[_0x42d310(0x3e3)]('.button_wrapper')[_0x42d310(0x205)](_0x64e57a) : (_0x5de86a = _0x4c510e[_0x42d310(0x3e3)](_0x42d310(0x36b))[_0x42d310(0x2c7)](function () {
                                const _0xc95eae = _0x42d310;
                                return _0x4434b7(this)[_0xc95eae(0x30d)]() > 0xc8 && _0x4434b7(this)['height']() > 0xc8;
                            })[_0x42d310(0x41f)]('src'), _0x478228[_0x42d310(0x3e3)](_0x42d310(0x290))[_0x42d310(0x205)](_0x15f039));
                        else {
                            const _0x2fb1b5 = (_0x5e564c, _0x1e46b2) => {
                                    _0x5e564c['forEach'](_0x42e8af => {
                                        const _0x36fe7b = a0_0x3a70;
                                        if (_0x42e8af[_0x36fe7b(0x44a)]) {
                                            var _0x2d3f20 = _0x4434b7(_0x42e8af[_0x36fe7b(0x222)]);
                                            _0x478228['find'](_0x36fe7b(0x2ac))?.[_0x36fe7b(0x3be)](), _0x478228[_0x36fe7b(0x3e3)]('.IG_IMAGE_VIEWER')?.['remove'](), _0x2d3f20[_0x36fe7b(0x3e3)]('video')[_0x36fe7b(0x3ea)] > 0x0 ? (_0x478228['find']('.IG_THUMBNAIL_MAIN')[_0x36fe7b(0x3ea)] === 0x0 && _0x478228['find'](_0x36fe7b(0x290))[_0x36fe7b(0x205)](_0x64e57a), _0x3e0d00(_0x4c510e)) : (_0x5de86a = _0x2d3f20[_0x36fe7b(0x3e3)](_0x36fe7b(0x36b))[_0x36fe7b(0x41f)](_0x36fe7b(0x443)), _0x478228['find'](_0x36fe7b(0x290))['append'](_0x15f039));
                                        }
                                    });
                                }, _0x1f9bbb = new IntersectionObserver(_0x2fb1b5, {
                                    'root': _0x4c510e[_0x42d310(0x3e3)](_0x42d310(0x408))[_0x42d310(0x2fb)]()[_0x42d310(0x3b4)]()['parent']()[_0x42d310(0x3b4)]()[0x0],
                                    'rootMargin': _0x42d310(0x42a),
                                    'threshold': 0.1
                                }), _0x4fc8f5 = new MutationObserver(function (_0xb4da6d, _0x50315a) {
                                    const _0x4ec350 = _0x42d310;
                                    var _0x34fd20 = _0xb4da6d['at'](0x0)?.[_0x4ec350(0x222)];
                                    _0x4434b7(_0x34fd20)[_0x4ec350(0x3e3)](_0x4ec350(0x440))['each'](function () {
                                        const _0x1454c1 = _0x4ec350;
                                        _0x1f9bbb[_0x1454c1(0x397)](this);
                                    });
                                });
                            _0x4c510e[_0x42d310(0x3e3)](_0x42d310(0x2c5))[_0x42d310(0x25e)](function () {
                                const _0x562611 = _0x42d310;
                                _0x1f9bbb[_0x562611(0x397)](this);
                            });
                            const _0x41ef26 = _0x478228['eq'](_0x63f085 === _0x42d310(0x1c7) ? 0x0 : _0x478228[_0x42d310(0x3ea)] - 0x2)[_0x42d310(0x3e3)]('div\x20>\x20ul\x20li._acaz')?.[_0x42d310(0x3b4)]()[0x0], _0x2e3b4e = _0x478228['eq'](_0x63f085 === 'DIV' ? 0x0 : _0x478228[_0x42d310(0x3ea)] - 0x2)[_0x42d310(0x3e3)](_0x42d310(0x2c5))?.[_0x42d310(0x3b4)]()['parent']()[0x0];
                            _0x41ef26 && _0x4fc8f5[_0x42d310(0x397)](_0x41ef26, { 'childList': !![] }), _0x2e3b4e && _0x4fc8f5[_0x42d310(0x397)](_0x2e3b4e, { 'attributes': !![] });
                        }
                    }, 0x32), _0x478228[_0x2f0b3b(0x444)](_0x2f0b3b(0x21a), _0x2f0b3b(0x21d)), _0x3e0d00(_0x4c510e), _0xddd390[_0x2f0b3b(0x3ae)][_0x2f0b3b(0x26d)]({
                        'element': this,
                        'trigger': [
                            '.IG_THUMBNAIL_MAIN',
                            _0x2f0b3b(0x326),
                            _0x2f0b3b(0x2f0),
                            _0x2f0b3b(0x445),
                            _0x2f0b3b(0x209)
                        ]
                    }), _0x4434b7(this)['on']('click', _0x2f0b3b(0x209), function () {
                        const _0x45f199 = _0x2f0b3b;
                        _0x5de86a != null ? _0x1192d8(_0x5de86a) : alert(_0x45f199(0x404));
                    }), _0x4434b7(this)['on'](_0x2f0b3b(0x27a), _0x2f0b3b(0x2ac), function () {
                        const _0x3c4b50 = _0x2f0b3b;
                        _0x2c4ade(!![]), _0xddd390[_0x3c4b50(0x43d)] = _0x4c510e[_0x3c4b50(0x41f)]('data-username'), _0xddd390[_0x3c4b50(0x33f)] = location[_0x3c4b50(0x2ea)][_0x3c4b50(0x1cb)](/\/$/, '')['split']('/')['at'](-0x1) || _0x4c510e['find'](_0x3c4b50(0x3bb))[_0x3c4b50(0x2fb)]()[_0x3c4b50(0x41f)](_0x3c4b50(0x307))['split']('/')['at'](0x2) || _0x4434b7(this)[_0x3c4b50(0x3b4)]()[_0x3c4b50(0x3b4)]()[_0x3c4b50(0x3b4)]()[_0x3c4b50(0x237)]('div:last-child')[_0x3c4b50(0x237)](_0x3c4b50(0x41a))['children'](_0x3c4b50(0x2d7))[_0x3c4b50(0x3e3)](_0x3c4b50(0x3bb))['last']()[_0x3c4b50(0x41f)](_0x3c4b50(0x307))['split']('/')['at'](0x2);
                        var _0x1429e7 = _0x5b7592(_0x4c510e);
                        _0x43e820(!![], ![]), _0x5cabc2(_0xddd390[_0x3c4b50(0x33f)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x3c4b50(0x400)](() => {
                            let _0x24e267 = setInterval(() => {
                                const _0x3aa1f6 = a0_0x3a70;
                                if (_0x4434b7(_0x3aa1f6(0x2e6))[_0x3aa1f6(0x3ea)] > 0x0) {
                                    clearInterval(_0x24e267);
                                    var _0x4a410d = _0x4434b7(_0x3aa1f6(0x353) + (_0x1429e7 + 0x1) + '\x22]')?.[_0x3aa1f6(0x3b4)]()[_0x3aa1f6(0x3e3)]('.videoThumbnail')?.[_0x3aa1f6(0x2fb)]();
                                    _0x4a410d != null && _0x4a410d[_0x3aa1f6(0x3ea)] > 0x0 ? _0x4a410d[_0x3aa1f6(0x1fa)](_0x3aa1f6(0x27a)) : alert(_0x3aa1f6(0x419)), _0x2c4ade(![]), _0x4434b7(_0x3aa1f6(0x3f9))[_0x3aa1f6(0x3be)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x4434b7(this)['on'](_0x2f0b3b(0x27a), _0x2f0b3b(0x326), function () {
                        const _0x2cbb70 = _0x2f0b3b;
                        _0x2c4ade(!![]), _0xddd390[_0x2cbb70(0x43d)] = _0x4c510e[_0x2cbb70(0x41f)](_0x2cbb70(0x260)), _0xddd390['GL_postPath'] = location['pathname'][_0x2cbb70(0x1cb)](/\/$/, '')[_0x2cbb70(0x293)]('/')['at'](-0x1) || _0x4c510e[_0x2cbb70(0x3e3)](_0x2cbb70(0x3bb))[_0x2cbb70(0x2fb)]()[_0x2cbb70(0x41f)]('href')[_0x2cbb70(0x293)]('/')['at'](0x2) || _0x4434b7(this)[_0x2cbb70(0x3b4)]()[_0x2cbb70(0x3b4)]()[_0x2cbb70(0x3b4)]()[_0x2cbb70(0x237)](_0x2cbb70(0x2d7))[_0x2cbb70(0x237)](_0x2cbb70(0x41a))['children']('div:last-child')[_0x2cbb70(0x3e3)](_0x2cbb70(0x3bb))['last']()[_0x2cbb70(0x41f)](_0x2cbb70(0x307))[_0x2cbb70(0x293)]('/')['at'](0x2);
                        var _0x36513c = _0x5b7592(_0x4c510e);
                        _0x43e820(!![], ![]), _0x5cabc2(_0xddd390[_0x2cbb70(0x33f)], _0x2cbb70(0x2fa), '')[_0x2cbb70(0x400)](() => {
                            let _0x212d1f = setInterval(() => {
                                const _0x176b7a = a0_0x3a70;
                                if (_0x4434b7(_0x176b7a(0x2e6))[_0x176b7a(0x3ea)] > 0x0) {
                                    clearInterval(_0x212d1f);
                                    var _0xad14b = _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x36513c + 0x1) + '\x22]');
                                    if (_0x282c20[_0x176b7a(0x405)] && _0x282c20['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0x51f95e(_0xad14b['first']()[0x0], !![]);
                                    else {
                                        let _0x4d5c26 = _0xad14b?.['attr']('data-href');
                                        if (_0x4d5c26) {
                                            var _0xcc0823 = new URL(_0x4d5c26);
                                            _0xcc0823[_0x176b7a(0x23d)] = _0x176b7a(0x415), _0x45e777(_0xcc0823['href']);
                                        } else
                                            alert('Can\x20not\x20find\x20open\x20tab\x20url.');
                                    }
                                    _0x2c4ade(![]), _0x4434b7(_0x176b7a(0x3f9))[_0x176b7a(0x3be)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x4434b7(this)['on']('click', _0x2f0b3b(0x2f0), async function () {
                        const _0x5edd50 = _0x2f0b3b;
                        _0xddd390[_0x5edd50(0x43d)] = _0x4c510e['attr'](_0x5edd50(0x260)), _0xddd390[_0x5edd50(0x33f)] = location[_0x5edd50(0x2ea)][_0x5edd50(0x1cb)](/\/$/, '')['split']('/')['at'](-0x1) || _0x4c510e[_0x5edd50(0x3e3)]('a[href^=\x22/p/\x22]')[_0x5edd50(0x2fb)]()['attr'](_0x5edd50(0x307))[_0x5edd50(0x293)]('/')['at'](0x2) || _0x4434b7(this)[_0x5edd50(0x3b4)]()['parent']()[_0x5edd50(0x3b4)]()[_0x5edd50(0x237)](_0x5edd50(0x2d7))['children'](_0x5edd50(0x41a))['children'](_0x5edd50(0x2d7))[_0x5edd50(0x3e3)]('a[href^=\x22/p/\x22]')[_0x5edd50(0x369)]()[_0x5edd50(0x41f)](_0x5edd50(0x307))[_0x5edd50(0x293)]('/')['at'](0x2), _0x43e820(_0x282c20[_0x5edd50(0x2b8)], !![]), _0x4434b7(_0x5edd50(0x324))['html'](_0x5edd50(0x203) + _0xddd390[_0x5edd50(0x33f)] + '\x22>' + _0xddd390[_0x5edd50(0x33f)] + _0x5edd50(0x358)), _0x4434b7(_0x5edd50(0x2e6))[_0x5edd50(0x25e)](function () {
                            const _0x34f892 = _0x5edd50;
                            _0x4434b7(this)[_0x34f892(0x2f7)]('<div></div>'), _0x4434b7(this)[_0x34f892(0x258)](_0x34f892(0x2b2)), _0x4434b7(this)[_0x34f892(0x22a)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x414c8a(_0x34f892(0x24d)) + _0x34f892(0x457) + _0xd8e662['NEW_TAB'] + '</div>'), _0x4434b7(this)['attr'](_0x34f892(0x385)) == _0x34f892(0x212) && _0x4434b7(this)['after'](_0x34f892(0x44d) + _0x414c8a(_0x34f892(0x2c6)) + _0x34f892(0x1e1) + _0xd8e662['THUMBNAIL'] + '</div>');
                        }), _0x5cabc2(_0xddd390[_0x5edd50(0x33f)], _0x5edd50(0x2fa), _0x414c8a(_0x5edd50(0x2a5)))[_0x5edd50(0x400)](() => {
                            let _0x1436ea = setInterval(() => {
                                const _0x5c9274 = a0_0x3a70;
                                _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x5c9274(0x3ea)] > 0x0 && (clearInterval(_0x1436ea), _0x4434b7(_0x5c9274(0x2e6))[_0x5c9274(0x25e)](function () {
                                    const _0x1617e5 = _0x5c9274;
                                    _0x4434b7(this)['trigger'](_0x1617e5(0x27a));
                                }), _0x4434b7(_0x5c9274(0x3f9))['remove']());
                            }, 0xfa);
                        });
                    }), _0x4434b7(this)['on']('click', _0x2f0b3b(0x445), async function () {
                        const _0x100a23 = _0x2f0b3b;
                        _0xddd390['GL_username'] = _0x4c510e[_0x100a23(0x41f)]('data-username'), _0xddd390[_0x100a23(0x33f)] = location[_0x100a23(0x2ea)][_0x100a23(0x1cb)](/\/$/, '')['split']('/')['at'](-0x1) || _0x4c510e['find']('a[href^=\x22/p/\x22]')[_0x100a23(0x2fb)]()[_0x100a23(0x41f)](_0x100a23(0x307))[_0x100a23(0x293)]('/')['at'](0x2) || _0x4434b7(this)[_0x100a23(0x3b4)]()[_0x100a23(0x3b4)]()[_0x100a23(0x3b4)]()[_0x100a23(0x237)](_0x100a23(0x2d7))['children']('div')[_0x100a23(0x237)](_0x100a23(0x2d7))[_0x100a23(0x3e3)](_0x100a23(0x3bb))[_0x100a23(0x369)]()[_0x100a23(0x41f)](_0x100a23(0x307))[_0x100a23(0x293)]('/')['at'](0x2), _0x43e820(_0x282c20[_0x100a23(0x2b8)], !![]), _0x4434b7(_0x100a23(0x324))['html'](_0x100a23(0x203) + _0xddd390['GL_postPath'] + '\x22>' + _0xddd390['GL_postPath'] + _0x100a23(0x358));
                        if (_0x282c20[_0x100a23(0x30c)]) {
                            _0x2c4ade(!![]), _0x2ad28a(!![]);
                            var _0x42a0fa = _0x5b7592(_0x4434b7(this)['parent']()[_0x100a23(0x3b4)]()[_0x100a23(0x3b4)]());
                            _0x5cabc2(_0xddd390['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x100a23(0x400)](() => {
                                let _0x402628 = setInterval(() => {
                                    const _0x46d604 = a0_0x3a70;
                                    if (_0x4434b7(_0x46d604(0x2e6))[_0x46d604(0x3ea)] > 0x0) {
                                        clearInterval(_0x402628);
                                        var _0x12be4a = _0x4434b7(_0x46d604(0x353) + (_0x42a0fa + 0x1) + '\x22]')?.[_0x46d604(0x41f)](_0x46d604(0x339));
                                        _0x12be4a ? (_0x2c4ade(![]), _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x42a0fa + 0x1) + '\x22]')?.[_0x46d604(0x1fa)](_0x46d604(0x27a))) : alert(_0x46d604(0x39f)), _0x4434b7(_0x46d604(0x3f9))[_0x46d604(0x3be)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x282c20['DIRECT_DOWNLOAD_ALL']) {
                            var _0x51f285 = 0x0, _0x4e72d8 = _0x4434b7(this)[_0x100a23(0x3b4)]()[_0x100a23(0x3b4)]()[_0x100a23(0x3e3)](_0x2f292b)[_0x100a23(0x3ea)], _0x2eefa0 = _0x282c20[_0x100a23(0x380)], _0x239714 = new Date(_0x4434b7(this)['parent']()[_0x100a23(0x3b4)]()['parent']()[_0x100a23(0x3e3)]('a[href]\x20time[datetime]')['filter'](function () {
                                    const _0x24ee36 = _0x100a23;
                                    let _0x20fa19 = _0x4434b7(this)[_0x24ee36(0x379)](_0x24ee36(0x1fe))[_0x24ee36(0x41f)](_0x24ee36(0x307));
                                    return _0x20fa19?.[_0x24ee36(0x38e)]('/p/') || _0x20fa19?.[_0x24ee36(0x330)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })[_0x100a23(0x2fb)]()[_0x100a23(0x41f)]('datetime'))[_0x100a23(0x25c)]();
                            if (_0x4e72d8)
                                _0x4434b7(this)[_0x100a23(0x3b4)]()[_0x100a23(0x3b4)]()['find'](_0x2f292b)[_0x100a23(0x25e)](function () {
                                    const _0x22398b = _0x100a23;
                                    let _0x3814b2 = _0x4434b7(this)['parent']()['parent']()[_0x22398b(0x3b4)]()[_0x22398b(0x3e3)]('video');
                                    _0x3814b2 && _0x3814b2[_0x22398b(0x41f)](_0x22398b(0x443)) && (_0x2eefa0 = !![]);
                                }), _0x2eefa0 || _0x282c20[_0x100a23(0x405)] ? _0x5cabc2(_0xddd390[_0x100a23(0x33f)], _0x100a23(0x2fa), _0x414c8a(_0x100a23(0x2a5))) : (_0x4434b7(this)[_0x100a23(0x3b4)]()[_0x100a23(0x3b4)]()[_0x100a23(0x3e3)](_0x2f292b)[_0x100a23(0x25e)](function () {
                                    const _0x4214b9 = _0x100a23;
                                    _0x51f285++;
                                    let _0x5d3f07 = _0x4434b7(this)['find']('video'), _0x454673 = _0x4434b7(this)[_0x4214b9(0x3e3)](_0x4214b9(0x2c8)), _0x4ab4e8 = _0x454673[_0x4214b9(0x41f)]('srcset') ? _0x454673[_0x4214b9(0x41f)](_0x4214b9(0x2ee))['split']('\x20')[0x0] : _0x454673[_0x4214b9(0x41f)](_0x4214b9(0x443));
                                    _0x5d3f07 && _0x5d3f07['attr'](_0x4214b9(0x443)) && (_0x2eefa0 = !![]), _0x454673 && _0x4ab4e8 && _0x4434b7(_0x4214b9(0x2fa))['append'](_0x4214b9(0x292) + _0x239714 + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0xddd390[_0x4214b9(0x33f)] + _0x4214b9(0x28f) + _0x51f285 + _0x4214b9(0x1cd) + _0x4ab4e8 + _0x4214b9(0x201) + _0x4ab4e8 + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x414c8a('IMG') + _0x4214b9(0x306) + _0x51f285 + _0x4214b9(0x224));
                                }), _0x2eefa0 && _0x5cabc2(_0xddd390[_0x100a23(0x33f)], _0x100a23(0x2fa), _0x414c8a(_0x100a23(0x416))));
                            else {
                                if (_0x282c20[_0x100a23(0x405)])
                                    _0x5cabc2(_0xddd390[_0x100a23(0x33f)], _0x100a23(0x2fa), _0x414c8a(_0x100a23(0x2a5)));
                                else {
                                    _0x51f285++;
                                    let _0x44a672 = _0x4434b7(this)[_0x100a23(0x3b4)]()[_0x100a23(0x3b4)]()['parent']()[_0x100a23(0x3e3)](_0x100a23(0x212)), _0x2c526e = _0x4434b7(this)[_0x100a23(0x3b4)]()['parent']()[_0x100a23(0x3b4)]()[_0x100a23(0x3e3)]('._aagv\x20img'), _0x4b3998 = _0x2c526e[_0x100a23(0x41f)](_0x100a23(0x2ee)) ? _0x2c526e[_0x100a23(0x41f)](_0x100a23(0x2ee))['split']('\x20')[0x0] : _0x2c526e[_0x100a23(0x41f)](_0x100a23(0x443));
                                    _0x44a672 && _0x44a672[_0x100a23(0x41f)](_0x100a23(0x443)) && _0x5cabc2(_0xddd390[_0x100a23(0x33f)], _0x100a23(0x2fa), _0x414c8a(_0x100a23(0x1de))), _0x2c526e && _0x4b3998 && _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY')[_0x100a23(0x205)](_0x100a23(0x292) + _0x239714 + _0x100a23(0x28d) + _0xddd390[_0x100a23(0x33f)] + _0x100a23(0x28f) + _0x51f285 + _0x100a23(0x220) + _0x4b3998 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x4b3998 + _0x100a23(0x410) + _0x414c8a('IMG') + '</span>\x20' + _0x51f285 + _0x100a23(0x224));
                                }
                            }
                        }
                        _0x4434b7(_0x100a23(0x2e6))[_0x100a23(0x25e)](function () {
                            const _0x3c7817 = _0x100a23;
                            _0x4434b7(this)['wrap'](_0x3c7817(0x1ef)), _0x4434b7(this)[_0x3c7817(0x258)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x4434b7(this)[_0x3c7817(0x22a)](_0x3c7817(0x240) + _0x414c8a(_0x3c7817(0x24d)) + _0x3c7817(0x457) + _0xd8e662[_0x3c7817(0x24d)] + _0x3c7817(0x256)), _0x4434b7(this)[_0x3c7817(0x41f)](_0x3c7817(0x385)) == _0x3c7817(0x212) && _0x4434b7(this)[_0x3c7817(0x22a)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x414c8a(_0x3c7817(0x2c6)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0xd8e662[_0x3c7817(0x386)] + _0x3c7817(0x256));
                        }), _0x282c20[_0x100a23(0x2b8)] && _0x5cabc2(_0xddd390[_0x100a23(0x33f)], _0x100a23(0x2fa), _0x414c8a(_0x100a23(0x2a5)))[_0x100a23(0x400)](() => {
                            let _0x42d979 = setInterval(() => {
                                const _0x4e7bda = a0_0x3a70;
                                _0x4434b7(_0x4e7bda(0x2e6))[_0x4e7bda(0x3ea)] > 0x0 && (clearInterval(_0x42d979), _0x4434b7(_0x4e7bda(0x2e6))[_0x4e7bda(0x25e)](function () {
                                    const _0x4703a5 = _0x4e7bda;
                                    _0x4434b7(this)['trigger'](_0x4703a5(0x27a));
                                }), _0x4434b7(_0x4e7bda(0x3f9))['remove']());
                            }, 0xfa);
                        });
                    });
                    var _0x13c7b2 = _0x4434b7(this)[_0x2f0b3b(0x3e3)]('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x2f0b3b(0x2fb)]()[_0x2f0b3b(0x2e3)]() || _0x4434b7(this)['find']('a[href^=\x22/\x22]')['filter'](function () {
                        const _0x526bac = _0x2f0b3b;
                        return _0x4434b7(this)?.['text']()?.[_0x526bac(0x3ea)] > 0x0;
                    })['first']()['text']();
                    _0x4434b7(this)[_0x2f0b3b(0x41f)](_0x2f0b3b(0x3dd), _0x2f0b3b(0x2d0)), _0x4434b7(this)[_0x2f0b3b(0x41f)](_0x2f0b3b(0x260), _0x13c7b2);
                }
            });
        }
        function _0x4e9e21(_0x425e79) {
            const _0x434d87 = _0x47aa26;
            var _0x285822 = _0x425e79[_0x434d87(0x3d6)] ?? _0x425e79;
            return _0x285822['owner'] == null && _0x285822['user'] != null && (_0x285822[_0x434d87(0x234)] = _0x285822['user']), _0x285822[_0x434d87(0x234)] == null && (_0x73b19f('carousel_media:', _0x434d87(0x3fe)), alert(_0x434d87(0x2cf))), _0x285822;
        }
        async function _0x5cabc2(_0x3841e9, _0x57b88d, _0x348f3c) {
            const _0x55d131 = _0x47aa26;
            try {
                _0x4434b7(_0x57b88d + '\x20a')[_0x55d131(0x3be)](), _0x4434b7(_0x57b88d)[_0x55d131(0x205)](_0x55d131(0x382) + _0x348f3c + _0x55d131(0x38a));
                let _0x2fc8a7 = await _0x4893be(_0x3841e9), _0x178eda = _0x4e9e21(_0x2fc8a7[_0x55d131(0x216)]);
                if (_0x2fc8a7[_0x55d131(0x247)] === 'query_hash') {
                    let _0x1df552 = 0x1;
                    _0x178eda[_0x55d131(0x2e2)] == _0x55d131(0x2d5) && _0x178eda[_0x55d131(0x219)] && (_0x4434b7(_0x57b88d)[_0x55d131(0x205)]('<a\x20media-id=\x22' + _0x178eda['id'] + _0x55d131(0x363) + _0x178eda[_0x55d131(0x434)] + _0x55d131(0x279) + _0x178eda[_0x55d131(0x30b)] + _0x55d131(0x236) + _0x178eda[_0x55d131(0x234)][_0x55d131(0x20b)] + '\x22\x20data-globalIndex=\x22' + _0x1df552 + _0x55d131(0x1cd) + _0x178eda['video_url'] + _0x55d131(0x201) + _0x178eda[_0x55d131(0x1db)][0x1][_0x55d131(0x443)] + _0x55d131(0x33d) + _0x414c8a('VID') + _0x55d131(0x306) + _0x1df552 + _0x55d131(0x224)), _0x1df552++);
                    _0x178eda[_0x55d131(0x2e2)] == 'GraphImage' && (_0x4434b7(_0x57b88d)[_0x55d131(0x205)](_0x55d131(0x241) + _0x178eda['id'] + _0x55d131(0x363) + _0x178eda['taken_at_timestamp'] + _0x55d131(0x279) + _0x178eda[_0x55d131(0x30b)] + _0x55d131(0x349) + _0x178eda[_0x55d131(0x234)]['username'] + _0x55d131(0x303) + _0x1df552 + _0x55d131(0x1cd) + _0x178eda[_0x55d131(0x1db)][_0x178eda[_0x55d131(0x1db)][_0x55d131(0x3ea)] - 0x1]['src'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x178eda[_0x55d131(0x1db)][0x1][_0x55d131(0x443)] + _0x55d131(0x410) + _0x414c8a(_0x55d131(0x36f)) + _0x55d131(0x306) + _0x1df552 + '\x20-</a>'), _0x1df552++);
                    if (_0x178eda[_0x55d131(0x2e2)] == 'GraphSidecar' && _0x178eda[_0x55d131(0x2ba)])
                        for (let _0x45cde7 of _0x178eda['edge_sidecar_to_children'][_0x55d131(0x3af)]) {
                            _0x45cde7[_0x55d131(0x3c0)][_0x55d131(0x2e2)] == _0x55d131(0x2d5) && _0x4434b7(_0x57b88d)[_0x55d131(0x205)](_0x55d131(0x241) + _0x45cde7[_0x55d131(0x3c0)]['id'] + '\x22\x20datetime=\x22' + _0x178eda['taken_at_timestamp'] + _0x55d131(0x279) + _0x178eda[_0x55d131(0x30b)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x178eda[_0x55d131(0x234)]['username'] + _0x55d131(0x303) + _0x1df552 + _0x55d131(0x1cd) + _0x45cde7['node'][_0x55d131(0x219)] + _0x55d131(0x201) + _0x45cde7[_0x55d131(0x3c0)][_0x55d131(0x1db)][0x1][_0x55d131(0x443)] + _0x55d131(0x341) + _0x414c8a('VID') + _0x55d131(0x306) + _0x1df552 + _0x55d131(0x224)), _0x45cde7[_0x55d131(0x3c0)][_0x55d131(0x2e2)] == 'GraphImage' && _0x4434b7(_0x57b88d)[_0x55d131(0x205)]('<a\x20media-id=\x22' + _0x45cde7[_0x55d131(0x3c0)]['id'] + _0x55d131(0x363) + _0x178eda[_0x55d131(0x434)] + _0x55d131(0x279) + _0x178eda[_0x55d131(0x30b)] + _0x55d131(0x349) + _0x178eda[_0x55d131(0x234)][_0x55d131(0x20b)] + _0x55d131(0x303) + _0x1df552 + _0x55d131(0x1cd) + _0x45cde7[_0x55d131(0x3c0)][_0x55d131(0x1db)][_0x45cde7[_0x55d131(0x3c0)][_0x55d131(0x1db)][_0x55d131(0x3ea)] - 0x1]['src'] + _0x55d131(0x201) + _0x45cde7[_0x55d131(0x3c0)][_0x55d131(0x1db)][0x1][_0x55d131(0x443)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x414c8a(_0x55d131(0x36f)) + '</span>\x20' + _0x1df552 + _0x55d131(0x224)), _0x1df552++;
                        }
                } else {
                    if (_0x178eda['carousel_media'])
                        _0x73b19f(_0x55d131(0x3a6)), _0x178eda[_0x55d131(0x3a6)][_0x55d131(0x43e)]((_0x265335, _0x3964d9) => {
                            const _0x1646ac = _0x55d131;
                            let _0x233d56 = _0x3964d9 + 0x1;
                            _0x265335['video_versions'] == null ? (_0x265335['image_versions2']['candidates'][_0x1646ac(0x1da)](function (_0x407c6b, _0x2323ee) {
                                const _0x544958 = _0x1646ac;
                                let _0x4a879e = new URL(_0x407c6b[_0x544958(0x3a0)])['searchParams']['get'](_0x544958(0x36e)), _0x11b68e = new URL(_0x2323ee[_0x544958(0x3a0)])[_0x544958(0x2e8)][_0x544958(0x368)]('stp');
                                if (_0x4a879e && _0x11b68e) {
                                    if (_0x4a879e['length'] > _0x11b68e[_0x544958(0x3ea)])
                                        return 0x1;
                                    if (_0x4a879e[_0x544958(0x3ea)] < _0x11b68e[_0x544958(0x3ea)])
                                        return -0x1;
                                } else {
                                    if (_0x407c6b[_0x544958(0x30d)] < _0x2323ee[_0x544958(0x30d)])
                                        return 0x1;
                                    if (_0x407c6b[_0x544958(0x30d)] > _0x2323ee[_0x544958(0x30d)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x4434b7(_0x57b88d)[_0x1646ac(0x205)](_0x1646ac(0x241) + _0x265335['pk'] + '\x22\x20datetime=\x22' + _0x265335[_0x1646ac(0x3ce)] + _0x1646ac(0x279) + _0x178eda[_0x1646ac(0x40e)] + _0x1646ac(0x349) + _0x178eda['owner'][_0x1646ac(0x20b)] + _0x1646ac(0x303) + _0x233d56 + _0x1646ac(0x1cd) + _0x265335[_0x1646ac(0x431)]['candidates'][0x0][_0x1646ac(0x3a0)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x265335['image_versions2']['candidates'][0x0][_0x1646ac(0x3a0)] + _0x1646ac(0x410) + _0x414c8a(_0x1646ac(0x36f)) + _0x1646ac(0x306) + _0x233d56 + _0x1646ac(0x224))) : _0x4434b7(_0x57b88d)[_0x1646ac(0x205)](_0x1646ac(0x241) + _0x265335['pk'] + _0x1646ac(0x363) + _0x265335[_0x1646ac(0x3ce)] + _0x1646ac(0x279) + _0x178eda[_0x1646ac(0x40e)] + _0x1646ac(0x236) + _0x178eda[_0x1646ac(0x234)][_0x1646ac(0x20b)] + _0x1646ac(0x303) + _0x233d56 + _0x1646ac(0x1cd) + _0x265335[_0x1646ac(0x428)][0x0][_0x1646ac(0x3a0)] + _0x1646ac(0x201) + _0x265335[_0x1646ac(0x431)][_0x1646ac(0x329)][0x0][_0x1646ac(0x3a0)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x414c8a(_0x1646ac(0x355)) + _0x1646ac(0x306) + _0x233d56 + '\x20-</a>');
                        });
                    else {
                        let _0x32b73f = 0x1;
                        _0x178eda[_0x55d131(0x428)] == null ? (_0x178eda[_0x55d131(0x431)][_0x55d131(0x329)][_0x55d131(0x1da)](function (_0x1eb03e, _0x8f976) {
                            const _0x3a472a = _0x55d131;
                            let _0x55a59c = new URL(_0x1eb03e[_0x3a472a(0x3a0)])[_0x3a472a(0x2e8)][_0x3a472a(0x368)]('stp'), _0x17364a = new URL(_0x8f976[_0x3a472a(0x3a0)])[_0x3a472a(0x2e8)][_0x3a472a(0x368)](_0x3a472a(0x36e));
                            if (_0x55a59c && _0x17364a) {
                                if (_0x55a59c['length'] > _0x17364a['length'])
                                    return 0x1;
                                if (_0x55a59c['length'] < _0x17364a[_0x3a472a(0x3ea)])
                                    return -0x1;
                            } else {
                                if (_0x1eb03e[_0x3a472a(0x30d)] < _0x8f976[_0x3a472a(0x30d)])
                                    return 0x1;
                                if (_0x1eb03e[_0x3a472a(0x30d)] > _0x8f976[_0x3a472a(0x30d)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x4434b7(_0x57b88d)[_0x55d131(0x205)](_0x55d131(0x241) + _0x178eda['pk'] + _0x55d131(0x363) + _0x178eda[_0x55d131(0x3ce)] + _0x55d131(0x279) + _0x178eda[_0x55d131(0x40e)] + _0x55d131(0x349) + _0x178eda[_0x55d131(0x234)]['username'] + _0x55d131(0x303) + _0x32b73f + _0x55d131(0x1cd) + _0x178eda[_0x55d131(0x431)][_0x55d131(0x329)][0x0][_0x55d131(0x3a0)] + _0x55d131(0x201) + _0x178eda[_0x55d131(0x431)]['candidates'][0x0][_0x55d131(0x3a0)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x414c8a(_0x55d131(0x36f)) + _0x55d131(0x306) + _0x32b73f + '\x20-</a>')) : _0x4434b7(_0x57b88d)['append']('<a\x20media-id=\x22' + _0x178eda['pk'] + _0x55d131(0x363) + _0x178eda[_0x55d131(0x3ce)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x178eda['code'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x178eda[_0x55d131(0x234)][_0x55d131(0x20b)] + _0x55d131(0x303) + _0x32b73f + _0x55d131(0x1cd) + _0x178eda[_0x55d131(0x428)][0x0][_0x55d131(0x3a0)] + _0x55d131(0x201) + _0x178eda['image_versions2'][_0x55d131(0x329)][0x0]['url'] + _0x55d131(0x33d) + _0x414c8a(_0x55d131(0x355)) + _0x55d131(0x306) + _0x32b73f + _0x55d131(0x224));
                    }
                }
                _0x4434b7(_0x55d131(0x449))[_0x55d131(0x3be)](), _0x4434b7(_0x55d131(0x2e6))[_0x55d131(0x25e)](function () {
                    const _0x286abc = _0x55d131;
                    _0x4434b7(this)[_0x286abc(0x2f7)]('<div></div>'), _0x4434b7(this)[_0x286abc(0x258)](_0x286abc(0x2b2)), _0x4434b7(this)['after'](_0x286abc(0x240) + _0x414c8a(_0x286abc(0x24d)) + _0x286abc(0x457) + _0xd8e662['NEW_TAB'] + '</div>'), _0x4434b7(this)[_0x286abc(0x41f)](_0x286abc(0x385)) == _0x286abc(0x212) && _0x4434b7(this)['after'](_0x286abc(0x44d) + _0x414c8a(_0x286abc(0x2c6)) + _0x286abc(0x1e1) + _0xd8e662[_0x286abc(0x386)] + '</div>');
                });
            } catch (_0x16c586) {
                _0x73b19f(_0x55d131(0x333), _0x16c586);
            }
            ;
        }
        function _0x5b7592(_0x40c41e) {
            const _0x2dffa7 = _0x47aa26;
            var _0x1aa22f = 0x0, _0x30970f = _0x40c41e[_0x2dffa7(0x3e3)]('.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div');
            return (_0x30970f == null || !_0x30970f[_0x2dffa7(0x2e7)](_0x2dffa7(0x1c2))) && (_0x30970f = _0x40c41e['find']('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)[_0x2dffa7(0x237)](_0x2dffa7(0x41a))), _0x30970f[_0x2dffa7(0x2c7)]('._acnb')[_0x2dffa7(0x25e)](function (_0x2c2df0) {
                const _0x36fb05 = _0x2dffa7;
                _0x4434b7(this)[_0x36fb05(0x2e7)](_0x36fb05(0x35a)) && (_0x1aa22f = _0x2c2df0);
            }), _0x1aa22f;
        }
        async function _0x105166(_0x4e5225) {
            const _0x47b02e = _0x47aa26;
            if (_0x4e5225) {
                _0x2c4ade(!![]);
                let _0x4922aa = new Date()[_0x47b02e(0x25c)](), _0x3ac8f0 = Math[_0x47b02e(0x3c2)](_0x4922aa / 0x3e8), _0x583183 = location[_0x47b02e(0x2ea)][_0x47b02e(0x44b)](/(reels|tagged)\/$/ig, '')[_0x47b02e(0x293)]('/')[_0x47b02e(0x2c7)](_0x440c0d => _0x440c0d[_0x47b02e(0x3ea)] > 0x0)['at'](-0x1), _0x4a8e10 = await _0x38be80(_0x583183);
                try {
                    let _0xf7cc0d = await _0x3e3d3e(_0x4a8e10[_0x47b02e(0x433)]['pk']);
                    _0x3e6c2e(_0xf7cc0d, _0x583183, _0x47b02e(0x3eb), _0x3ac8f0, 'jpg');
                } catch (_0x4104aa) {
                    _0x3e6c2e(_0x4a8e10[_0x47b02e(0x433)][_0x47b02e(0x3e2)], _0x583183, 'avatar', _0x3ac8f0, _0x47b02e(0x44c));
                }
                _0x2c4ade(![]);
            } else {
                if (!_0x4434b7('.IG_DWPROFILE')[_0x47b02e(0x3ea)]) {
                    let _0x49d630 = setInterval(() => {
                        const _0x2b5569 = _0x47b02e;
                        if (_0x4434b7(_0x2b5569(0x3e5))[_0x2b5569(0x3ea)]) {
                            clearInterval(_0x49d630);
                            return;
                        }
                        _0x4434b7(_0x2b5569(0x394))[_0x2b5569(0x3b4)]()[_0x2b5569(0x3b4)]()['append']('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x414c8a('DW') + _0x2b5569(0x430) + _0xd8e662[_0x2b5569(0x244)] + _0x2b5569(0x256)), _0x4434b7(_0x2b5569(0x394))[_0x2b5569(0x3b4)]()['parent']()[_0x2b5569(0x444)](_0x2b5569(0x21a), _0x2b5569(0x21d)), _0x4434b7('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')[_0x2b5569(0x3b4)]()['parent']()[_0x2b5569(0x3b4)]()[_0x2b5569(0x205)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x414c8a('DW') + _0x2b5569(0x430) + _0xd8e662['DOWNLOAD'] + _0x2b5569(0x256)), _0x4434b7(_0x2b5569(0x312))[_0x2b5569(0x3b4)]()[_0x2b5569(0x3b4)]()[_0x2b5569(0x3b4)]()[_0x2b5569(0x444)](_0x2b5569(0x21a), 'relative');
                    }, 0x96);
                }
            }
        }
        async function _0x358fd2(_0x2b6291, _0x20155b, _0xc458d4) {
            const _0x2b0d9c = _0x47aa26;
            if (_0x2b6291) {
                _0x2c4ade(!![]);
                let _0x310f14 = location['href']['split']('?')['at'](0x0)[_0x2b0d9c(0x293)](_0x2b0d9c(0x1c8))['at'](-0x1)['replaceAll']('/', ''), _0x59e813 = await _0x4893be(_0x310f14), _0x103f68 = _0x4e9e21(_0x59e813[_0x2b0d9c(0x216)]), _0x11c441 = new Date()[_0x2b0d9c(0x25c)]();
                _0x282c20[_0x2b0d9c(0x21f)] && (_0x59e813[_0x2b0d9c(0x247)] === _0x2b0d9c(0x384) ? _0x11c441 = _0x103f68['shortcode_media']['taken_at_timestamp'] : _0x11c441 = _0x103f68[_0x2b0d9c(0x3ce)]);
                if (_0x59e813[_0x2b0d9c(0x247)] === 'query_hash') {
                    if (_0x20155b && _0x103f68[_0x2b0d9c(0x3d6)][_0x2b0d9c(0x282)]) {
                        if (_0xc458d4)
                            _0x45e777(_0x103f68[_0x2b0d9c(0x3d6)][_0x2b0d9c(0x219)]);
                        else {
                            let _0x387cbb = _0x2b0d9c(0x34b);
                            _0x3e6c2e(_0x103f68[_0x2b0d9c(0x3d6)][_0x2b0d9c(0x219)], _0x103f68[_0x2b0d9c(0x3d6)][_0x2b0d9c(0x234)][_0x2b0d9c(0x20b)], _0x2b0d9c(0x302), _0x11c441, _0x387cbb, _0x310f14);
                        }
                    } else {
                        if (_0xc458d4)
                            _0x45e777(_0x103f68[_0x2b0d9c(0x3d6)][_0x2b0d9c(0x1db)]['at'](-0x1)['src']);
                        else {
                            let _0x896984 = 'jpg';
                            _0x3e6c2e(_0x103f68[_0x2b0d9c(0x3d6)]['display_resources']['at'](-0x1)[_0x2b0d9c(0x443)], _0x103f68['shortcode_media'][_0x2b0d9c(0x234)][_0x2b0d9c(0x20b)], _0x2b0d9c(0x302), _0x11c441, _0x896984, _0x310f14);
                        }
                    }
                } else {
                    if (_0x20155b && _0x103f68['video_versions'] != null) {
                        if (_0xc458d4)
                            _0x45e777(_0x103f68[_0x2b0d9c(0x428)][0x0][_0x2b0d9c(0x3a0)]);
                        else {
                            let _0x47c7a1 = _0x2b0d9c(0x34b);
                            _0x3e6c2e(_0x103f68[_0x2b0d9c(0x428)][0x0][_0x2b0d9c(0x3a0)], _0x103f68['owner'][_0x2b0d9c(0x20b)], _0x2b0d9c(0x302), _0x11c441, _0x47c7a1, _0x310f14);
                        }
                    } else {
                        if (_0xc458d4)
                            _0x45e777(_0x103f68[_0x2b0d9c(0x431)]['candidates'][0x0][_0x2b0d9c(0x3a0)]);
                        else {
                            let _0x415282 = 'jpg';
                            _0x3e6c2e(_0x103f68['image_versions2'][_0x2b0d9c(0x329)][0x0][_0x2b0d9c(0x3a0)], _0x103f68[_0x2b0d9c(0x234)][_0x2b0d9c(0x20b)], _0x2b0d9c(0x302), _0x11c441, _0x415282, _0x310f14);
                        }
                    }
                }
                _0x2c4ade(![]);
            } else
                var _0x444ed2 = setInterval(() => {
                    const _0x11613f = _0x2b0d9c;
                    _0x4434b7('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')['length'] > 0x0 && (clearInterval(_0x444ed2), _0x282c20[_0x11613f(0x42c)] && (_0x4434b7(_0x11613f(0x2b5))['remove'](), _0x4434b7(_0x11613f(0x239))[_0x11613f(0x205)](_0x11613f(0x27e)), _0x4434b7(_0x11613f(0x202))[_0x11613f(0x205)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x4434b7(_0x11613f(0x202))[_0x11613f(0x205)](_0x11613f(0x26e)), _0x4434b7(_0x11613f(0x364))['on'](_0x11613f(0x27a), function () {
                        const _0x31bcda = _0x11613f;
                        _0x4434b7(_0x31bcda(0x2bf))[0x0][_0x31bcda(0x43b)]({
                            'top': -0x1e,
                            'behavior': _0x31bcda(0x2d1)
                        });
                    }), _0x4434b7(_0x11613f(0x300))['on'](_0x11613f(0x27a), function () {
                        const _0x4c5d0e = _0x11613f;
                        _0x4434b7(_0x4c5d0e(0x2bf))[0x0][_0x4c5d0e(0x43b)]({
                            'top': 0x1e,
                            'behavior': _0x4c5d0e(0x2d1)
                        });
                    })), _0x4434b7(_0x11613f(0x401))['children'](_0x11613f(0x41a))[_0x11613f(0x25e)](function () {
                        const _0x3c786b = _0x11613f;
                        if (_0x4434b7(this)[_0x3c786b(0x237)]()[_0x3c786b(0x3ea)] > 0x0) {
                            if (!_0x4434b7(this)['children']()[_0x3c786b(0x3e3)](_0x3c786b(0x357))['length']) {
                                var _0x43ceb4 = _0x4434b7(this);
                                _0x4434b7(this)[_0x3c786b(0x237)]()[_0x3c786b(0x444)](_0x3c786b(0x21a), _0x3c786b(0x21d)), _0x4434b7(this)[_0x3c786b(0x237)]()['append'](_0x3c786b(0x32f) + _0x414c8a('DW') + '\x22\x20class=\x22IG_REELS\x22>' + _0xd8e662[_0x3c786b(0x244)] + _0x3c786b(0x256)), _0x4434b7(this)[_0x3c786b(0x237)]()[_0x3c786b(0x205)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x414c8a(_0x3c786b(0x24d)) + _0x3c786b(0x39d) + _0xd8e662[_0x3c786b(0x24d)] + '</div>'), _0x4434b7(this)['children']()[_0x3c786b(0x205)](_0x3c786b(0x44d) + _0x414c8a(_0x3c786b(0x2c6)) + _0x3c786b(0x254) + _0xd8e662[_0x3c786b(0x386)] + _0x3c786b(0x256));
                                _0x282c20[_0x3c786b(0x23c)] && _0x4434b7(this)[_0x3c786b(0x3e3)](_0x3c786b(0x212))['each'](function () {
                                    const _0x28cd6c = _0x3c786b;
                                    _0x4434b7(this)['on'](_0x28cd6c(0x24b), function () {
                                        const _0x40634d = _0x28cd6c;
                                        if (!_0x4434b7(this)[_0x40634d(0x216)](_0x40634d(0x2d9))) {
                                            let _0x26c731 = _0x4434b7(this)[_0x40634d(0x251)]()[_0x40634d(0x3e3)](_0x40634d(0x3e0))['parents']('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x26c731['length'] > 0x0 ? (_0x4434b7(this)[_0x40634d(0x41f)](_0x40634d(0x398), !![]), _0x26c731[_0x40634d(0x1fa)](_0x40634d(0x27a)), _0x73b19f(_0x40634d(0x34e))) : (_0x4434b7(this)[_0x40634d(0x41f)]('data-loop', !![]), _0x4434b7(this)[_0x40634d(0x3b4)]()[_0x40634d(0x3e3)](_0x40634d(0x31b))[_0x40634d(0x2e1)](_0x40634d(0x1d8)), this['pause'](), _0x73b19f('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()'));
                                        }
                                    });
                                });
                                _0x282c20[_0x3c786b(0x3f6)] && _0x4434b7(this)['find'](_0x3c786b(0x212))['each'](function () {
                                    const _0x597aac = _0x3c786b;
                                    if (!_0x4434b7(this)[_0x597aac(0x216)]('controls')) {
                                        let _0x31aa47 = _0x4434b7(this);
                                        _0x73b19f(_0x597aac(0x2b6)), _0x282c20[_0x597aac(0x2c0)] && (this[_0x597aac(0x1d0)] = _0xddd390[_0x597aac(0x35e)], _0x4434b7(this)['on'](_0x597aac(0x437), function () {
                                            const _0x4bfc63 = _0x597aac;
                                            this[_0x4bfc63(0x1d0)] = _0xddd390['videoVolume'];
                                        })), _0x4434b7(this)['on'](_0x597aac(0x3e7), function (_0x55fdae) {
                                            const _0x174697 = _0x597aac;
                                            _0x55fdae[_0x174697(0x2cb)](), _0x31aa47['css'](_0x174697(0x34d), '-1'), _0x31aa47[_0x174697(0x2e1)](_0x174697(0x270));
                                        }), _0x4434b7(this)[_0x597aac(0x3b4)]()['find'](_0x597aac(0x420))[_0x597aac(0x2c7)](function () {
                                            const _0xcb31d = _0x597aac;
                                            return _0x4434b7(this)[_0xcb31d(0x3b4)](_0xcb31d(0x266))[_0xcb31d(0x3ea)] > 0x0 && _0x4434b7(this)['css'](_0xcb31d(0x20f)) === _0xcb31d(0x454) && _0x4434b7(this)['attr'](_0xcb31d(0x1d8)) != null;
                                        })['first']()['on']('contextmenu', function (_0x49afda) {
                                            const _0x3dee48 = _0x597aac;
                                            _0x49afda['preventDefault'](), _0x31aa47[_0x3dee48(0x444)](_0x3dee48(0x34d), '2'), _0x31aa47[_0x3dee48(0x41f)]('controls', !![]);
                                        }), _0x4434b7(this)['on']('volumechange', function () {
                                            const _0x372e39 = _0x597aac;
                                            let _0x3364f5 = _0x4434b7(this)[_0x372e39(0x3b4)]()[_0x372e39(0x3e3)](_0x372e39(0x316))[_0x372e39(0x3e3)](_0x372e39(0x315))[_0x372e39(0x2c7)](function (_0x59f91e) {
                                                const _0x3bfc9d = _0x372e39;
                                                return _0x4434b7(this)[_0x3bfc9d(0x30d)]() <= 0x40 && _0x4434b7(this)['height']() <= 0x40 && _0x4434b7(this)[_0x3bfc9d(0x3e3)](_0x3bfc9d(0x20c))[_0x3bfc9d(0x3ea)] > 0x0;
                                            });
                                            var _0x171c6e = _0x3364f5[_0x372e39(0x3e3)](_0x372e39(0x304))['length'] === 0x0;
                                            this[_0x372e39(0x3b3)] != _0x171c6e && (this['volume'] = _0xddd390[_0x372e39(0x35e)], _0x3364f5?.['trigger']('click')), _0x4434b7(this)[_0x372e39(0x41f)](_0x372e39(0x278)) && (_0xddd390[_0x372e39(0x35e)] = this[_0x372e39(0x1d0)], GM_setValue(_0x372e39(0x383), this[_0x372e39(0x1d0)])), this['volume'] == _0xddd390[_0x372e39(0x35e)] && _0x4434b7(this)[_0x372e39(0x41f)]('data-completed', !![]);
                                        }), _0x4434b7(this)['css'](_0x597aac(0x21a), 'absolute'), _0x4434b7(this)[_0x597aac(0x444)](_0x597aac(0x34d), '2'), _0x4434b7(this)[_0x597aac(0x41f)]('data-controls', !![]), _0x4434b7(this)[_0x597aac(0x41f)](_0x597aac(0x270), !![]);
                                    }
                                });
                                var _0xdbbe73 = _0x43ceb4[_0x3c786b(0x3e3)](_0x3c786b(0x212)), _0x54a519 = _0x4434b7(this)[_0x3c786b(0x3e3)](_0x3c786b(0x2c1))['first']();
                                _0x13e2ec(_0xdbbe73, _0x54a519, _0x3c786b(0x3ee));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x3cf387() {
            const _0x34c8f9 = _0x47aa26;
            _0x2c4ade(!![]);
            let _0x258b8d = new Date()[_0x34c8f9(0x25c)](), _0xd23f9 = Math[_0x34c8f9(0x3c2)](_0x258b8d / 0x3e8), _0x467de6 = _0x4434b7(_0x34c8f9(0x35d))[_0x34c8f9(0x2fb)]()[_0x34c8f9(0x2e3)]() || location['pathname'][_0x34c8f9(0x293)]('/')[_0x34c8f9(0x2c7)](_0x18c6a9 => _0x18c6a9[_0x34c8f9(0x3ea)] > 0x0)['at'](0x1), _0x5be00d = await _0x38be80(_0x467de6), _0x5cdfd9 = _0x5be00d[_0x34c8f9(0x433)]['pk'], _0xf71a58 = await _0xfbea57(_0x5cdfd9), _0x318e59 = 0x0;
            _0x1a29b2(_0x318e59, _0xf71a58[_0x34c8f9(0x216)][_0x34c8f9(0x276)][0x0][_0x34c8f9(0x41b)][_0x34c8f9(0x3ea)]), _0xf71a58[_0x34c8f9(0x216)][_0x34c8f9(0x276)][0x0][_0x34c8f9(0x41b)][_0x34c8f9(0x43e)]((_0x787eb8, _0x55e53c) => {
                setTimeout(() => {
                    const _0x3bc349 = a0_0x3a70;
                    _0x282c20[_0x3bc349(0x21f)] && (_0xd23f9 = _0x787eb8[_0x3bc349(0x434)]), _0x787eb8['display_resources'][_0x3bc349(0x1da)](function (_0x4ccdde, _0x4d5e97) {
                        const _0x20acdc = _0x3bc349;
                        if (_0x4ccdde[_0x20acdc(0x21c)] < _0x4d5e97[_0x20acdc(0x21c)])
                            return 0x1;
                        if (_0x4ccdde['config_width'] > _0x4d5e97['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x787eb8[_0x3bc349(0x282)] ? _0x3e6c2e(_0x787eb8[_0x3bc349(0x1be)][0x0][_0x3bc349(0x443)], _0x467de6, 'stories', _0xd23f9, _0x3bc349(0x34b), _0x787eb8['id'])[_0x3bc349(0x400)](() => {
                        _0x1a29b2(++_0x318e59, _0xf71a58['data']['reels_media'][0x0]['items']['length']);
                    }) : _0x3e6c2e(_0x787eb8[_0x3bc349(0x1db)][0x0][_0x3bc349(0x443)], _0x467de6, 'stories', _0xd23f9, _0x3bc349(0x44c), _0x787eb8['id'])[_0x3bc349(0x400)](() => {
                        const _0xd58f18 = _0x3bc349;
                        _0x1a29b2(++_0x318e59, _0xf71a58[_0xd58f18(0x216)][_0xd58f18(0x276)][0x0][_0xd58f18(0x41b)][_0xd58f18(0x3ea)]);
                    });
                }, 0x64 * _0x55e53c);
            });
        }
        async function _0x21eced(_0x403d17, _0x2797f7, _0x2b0b4b) {
            const _0x4a99d7 = _0x47aa26;
            var _0x1cf8ee = _0x4434b7(_0x4a99d7(0x35d))[_0x4a99d7(0x2fb)]()[_0x4a99d7(0x2e3)]() || location[_0x4a99d7(0x2ea)][_0x4a99d7(0x293)]('/')[_0x4a99d7(0x2c7)](_0x43cc58 => _0x43cc58[_0x4a99d7(0x3ea)] > 0x0)['at'](0x1);
            if (_0x403d17) {
                let _0xb3d441 = new Date()[_0x4a99d7(0x25c)](), _0x438cf0 = Math[_0x4a99d7(0x3c2)](_0xb3d441 / 0x3e8);
                _0x2c4ade(!![]);
                if (_0x282c20[_0x4a99d7(0x405)] && !_0xddd390[_0x4a99d7(0x45c)]) {
                    let _0x26be34 = null, _0x533785 = await _0x38be80(_0x1cf8ee), _0x9b3b19 = _0x533785[_0x4a99d7(0x433)]['pk'], _0x338e0d = await _0xfbea57(_0x9b3b19), _0x4f743b = location[_0x4a99d7(0x2ea)][_0x4a99d7(0x293)]('/')[_0x4a99d7(0x2c7)](_0x4f6bfe => _0x4f6bfe[_0x4a99d7(0x3ea)] > 0x0 && _0x4f6bfe[_0x4a99d7(0x330)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x338e0d[_0x4a99d7(0x216)]['reels_media'][0x0][_0x4a99d7(0x41b)]['forEach'](_0x1807f4 => {
                        _0x1807f4['id'] == _0x4f743b && (_0x26be34 = _0x1807f4['id']);
                    });
                    if (_0x26be34 == null) {
                        let _0xe30f5 = _0x5cb1df(_0x1cf8ee);
                        _0xe30f5['each'](function (_0x443800) {
                            const _0x3a4c89 = _0x4a99d7;
                            _0x4434b7(this)[_0x3a4c89(0x237)]()[_0x3a4c89(0x3ea)] > 0x0 && (_0x26be34 = _0x338e0d[_0x3a4c89(0x216)][_0x3a4c89(0x276)][0x0]['items'][_0x443800]['id']);
                        });
                    }
                    _0x26be34 == null && (_0x4434b7(_0x4a99d7(0x3bc))[_0x4a99d7(0x25e)](function (_0x539106) {
                        const _0x2fb78e = _0x4a99d7;
                        _0x4434b7(this)[_0x2fb78e(0x2e7)](_0x2fb78e(0x1c0)) && (_0x4434b7(this)[_0x2fb78e(0x237)]()[_0x2fb78e(0x3ea)] > 0x0 && (_0x26be34 = _0x338e0d[_0x2fb78e(0x216)][_0x2fb78e(0x276)][0x0][_0x2fb78e(0x41b)][_0x539106]['id']));
                    }), _0x4434b7('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x4a99d7(0x25e)](function (_0x18bf9b) {
                        const _0x5eea5d = _0x4a99d7;
                        _0x4434b7(this)[_0x5eea5d(0x237)]()['hasClass']('_ac3q') && (_0x26be34 = _0x338e0d[_0x5eea5d(0x216)][_0x5eea5d(0x276)][0x0]['items'][_0x18bf9b]['id']);
                    }));
                    _0x26be34 == null && (_0x26be34 = location[_0x4a99d7(0x2ea)][_0x4a99d7(0x293)]('/')[_0x4a99d7(0x2c7)](_0x200452 => _0x200452[_0x4a99d7(0x3ea)] > 0x0 && _0x200452[_0x4a99d7(0x330)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x16d599 = await _0x981f7b(_0x26be34);
                    _0x282c20['RENAME_PUBLISH_DATE'] && (_0x438cf0 = _0x16d599[_0x4a99d7(0x41b)][0x0][_0x4a99d7(0x3ce)]);
                    _0x16d599['status'] === 'ok' ? _0x16d599[_0x4a99d7(0x41b)][0x0]['video_versions'] ? _0x2b0b4b ? _0x45e777(_0x16d599[_0x4a99d7(0x41b)][0x0][_0x4a99d7(0x428)][0x0][_0x4a99d7(0x3a0)]) : _0x3e6c2e(_0x16d599[_0x4a99d7(0x41b)][0x0][_0x4a99d7(0x428)][0x0][_0x4a99d7(0x3a0)], _0x1cf8ee, _0x4a99d7(0x1d6), _0x438cf0, _0x4a99d7(0x34b), _0x26be34) : _0x2b0b4b ? _0x45e777(_0x16d599['items'][0x0]['image_versions2']['candidates'][0x0]['url']) : _0x3e6c2e(_0x16d599[_0x4a99d7(0x41b)][0x0][_0x4a99d7(0x431)][_0x4a99d7(0x329)][0x0][_0x4a99d7(0x3a0)], _0x1cf8ee, _0x4a99d7(0x1d6), _0x438cf0, _0x4a99d7(0x44c), _0x26be34) : (_0x282c20[_0x4a99d7(0x399)] ? (_0xddd390[_0x4a99d7(0x45c)] = !![], _0x21eced(_0x403d17, _0x2797f7, _0x2b0b4b)) : alert(_0x4a99d7(0x288) + _0x16d599[_0x4a99d7(0x402)]), _0x73b19f(_0x16d599));
                    _0x2c4ade(![]);
                    return;
                }
                if (_0x4434b7(_0x4a99d7(0x411))[_0x4a99d7(0x3ea)] > 0x0) {
                    let _0x2a6fe8 = 'mp4', _0x3f0efe = '', _0x242611 = location[_0x4a99d7(0x2ea)][_0x4a99d7(0x1cb)](/\/$/ig, '')[_0x4a99d7(0x293)]('/')['at'](-0x1), _0x612c81 = null;
                    if (_0xddd390[_0x4a99d7(0x265)]['stories'][_0x1cf8ee] && !_0x2797f7) {
                        _0x73b19f(_0x4a99d7(0x3dc), _0x1cf8ee), _0xddd390[_0x4a99d7(0x265)][_0x4a99d7(0x1d6)][_0x1cf8ee]['data']['reels_media'][0x0][_0x4a99d7(0x41b)]['forEach'](_0x1b228a => {
                            const _0x1782b1 = _0x4a99d7;
                            _0x1b228a['id'] == _0x242611 && (_0x3f0efe = _0x1b228a[_0x1782b1(0x1be)][0x0][_0x1782b1(0x443)], _0x282c20['RENAME_PUBLISH_DATE'] && (_0x438cf0 = _0x1b228a[_0x1782b1(0x434)], _0x612c81 = _0x1b228a['id']));
                        });
                        if (_0x3f0efe[_0x4a99d7(0x3ea)] == 0x0) {
                            _0x73b19f(_0x4a99d7(0x28a), _0x1cf8ee), _0x21eced(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x27f4f = await _0x38be80(_0x1cf8ee), _0x49fe89 = _0x27f4f[_0x4a99d7(0x433)]['pk'], _0x21249c = await _0xfbea57(_0x49fe89);
                        _0x21249c[_0x4a99d7(0x216)]['reels_media'][0x0][_0x4a99d7(0x41b)][_0x4a99d7(0x43e)](_0x5329e2 => {
                            const _0x472f46 = _0x4a99d7;
                            _0x5329e2['id'] == _0x242611 && (_0x3f0efe = _0x5329e2[_0x472f46(0x1be)][0x0]['src'], _0x282c20[_0x472f46(0x21f)] && (_0x438cf0 = _0x5329e2[_0x472f46(0x434)], _0x612c81 = _0x5329e2['id']));
                        });
                        if (_0x3f0efe[_0x4a99d7(0x3ea)] == 0x0) {
                            let _0x204b5b = _0x5cb1df(_0x1cf8ee);
                            _0x204b5b[_0x4a99d7(0x25e)](function (_0xe030d7) {
                                const _0xc6f14e = _0x4a99d7;
                                _0x4434b7(this)[_0xc6f14e(0x237)]()[_0xc6f14e(0x3ea)] > 0x0 && (_0x3f0efe = _0x21249c[_0xc6f14e(0x216)][_0xc6f14e(0x276)][0x0][_0xc6f14e(0x41b)][_0xe030d7][_0xc6f14e(0x1be)][0x0][_0xc6f14e(0x443)], _0x282c20['RENAME_PUBLISH_DATE'] && (_0x438cf0 = _0x21249c[_0xc6f14e(0x216)][_0xc6f14e(0x276)][0x0][_0xc6f14e(0x41b)][_0xe030d7][_0xc6f14e(0x434)], _0x612c81 = _0x21249c[_0xc6f14e(0x216)][_0xc6f14e(0x276)][0x0]['items'][_0xe030d7]['id']));
                            }), _0x3f0efe[_0x4a99d7(0x3ea)] == 0x0 && (_0x4434b7(_0x4a99d7(0x3bc))[_0x4a99d7(0x25e)](function (_0x23da82) {
                                const _0x2b9471 = _0x4a99d7;
                                _0x4434b7(this)['hasClass'](_0x2b9471(0x1c0)) && (_0x4434b7(this)[_0x2b9471(0x237)]()[_0x2b9471(0x3ea)] > 0x0 && (_0x3f0efe = _0x21249c[_0x2b9471(0x216)][_0x2b9471(0x276)][0x0][_0x2b9471(0x41b)][_0x23da82][_0x2b9471(0x1be)][0x0]['src'], _0x282c20[_0x2b9471(0x21f)] && (_0x438cf0 = _0x21249c['data']['reels_media'][0x0][_0x2b9471(0x41b)][_0x23da82]['taken_at_timestamp'], _0x612c81 = _0x21249c[_0x2b9471(0x216)][_0x2b9471(0x276)][0x0][_0x2b9471(0x41b)][_0x23da82]['id'])));
                            }), _0x4434b7(_0x4a99d7(0x3ef))[_0x4a99d7(0x25e)](function (_0x3f4609) {
                                const _0x2c8505 = _0x4a99d7;
                                _0x4434b7(this)[_0x2c8505(0x237)]()[_0x2c8505(0x2e7)](_0x2c8505(0x2f6)) && (_0x3f0efe = _0x21249c[_0x2c8505(0x216)]['reels_media'][0x0]['items'][_0x3f4609][_0x2c8505(0x1be)][0x0][_0x2c8505(0x443)], _0x282c20['RENAME_PUBLISH_DATE'] && (_0x438cf0 = _0x21249c[_0x2c8505(0x216)][_0x2c8505(0x276)][0x0]['items'][_0x3f4609][_0x2c8505(0x434)], _0x612c81 = _0x21249c[_0x2c8505(0x216)][_0x2c8505(0x276)][0x0][_0x2c8505(0x41b)][_0x3f4609]['id']));
                            }));
                        }
                        _0xddd390[_0x4a99d7(0x265)]['stories'][_0x1cf8ee] = _0x21249c;
                    }
                    _0x3f0efe[_0x4a99d7(0x3ea)] == 0x0 ? alert(_0x414c8a(_0x4a99d7(0x432))) : _0x2b0b4b ? _0x45e777(_0x3f0efe) : _0x3e6c2e(_0x3f0efe, _0x1cf8ee, 'stories', _0x438cf0, _0x2a6fe8, _0x612c81);
                } else {
                    let _0xb2db68 = _0x4434b7('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')['attr'](_0x4a99d7(0x2ee))?.[_0x4a99d7(0x293)](',')[0x0]?.[_0x4a99d7(0x293)]('\x20')[0x0], _0x4d9811 = _0xb2db68 ? _0xb2db68 : _0x4434b7(_0x4a99d7(0x40d))[_0x4a99d7(0x2c7)](function () {
                            const _0xf009c9 = _0x4a99d7;
                            return _0x4434b7(this)[_0xf009c9(0x379)]('a')[_0xf009c9(0x3ea)] === 0x0 && _0x4434b7(this)[_0xf009c9(0x30d)]() === _0x4434b7(this)[_0xf009c9(0x3b4)]()[_0xf009c9(0x30d)]();
                        })[_0x4a99d7(0x41f)](_0x4a99d7(0x443));
                    if (!_0x4d9811) {
                        let _0x32550c = _0x4434b7('body\x20>\x20div\x20section:visible\x20img._aa63');
                        _0x4d9811 = _0x32550c[_0x4a99d7(0x41f)](_0x4a99d7(0x2ee)) ? _0x32550c['attr'](_0x4a99d7(0x2ee))?.['split'](',')[0x0]?.[_0x4a99d7(0x293)]('\x20')[0x0] : _0x32550c[_0x4a99d7(0x41f)](_0x4a99d7(0x443));
                    }
                    _0x282c20[_0x4a99d7(0x21f)] && (_0x438cf0 = new Date(_0x4434b7(_0x4a99d7(0x372))[_0x4a99d7(0x2fb)]()[_0x4a99d7(0x41f)]('datetime'))[_0x4a99d7(0x25c)]());
                    let _0x240e2b = _0x4d9811, _0x38e3a7 = _0x4a99d7(0x44c);
                    _0x2b0b4b ? _0x45e777(_0x240e2b) : _0x3e6c2e(_0x240e2b, _0x1cf8ee, _0x4a99d7(0x1d6), _0x438cf0, _0x38e3a7, _0x70770c(_0x240e2b) ?? '');
                }
                _0xddd390[_0x4a99d7(0x45c)] = ![], _0x2c4ade(![]);
            } else {
                if (!_0x4434b7(_0x4a99d7(0x242))[_0x4a99d7(0x3ea)]) {
                    _0xddd390['GL_dataCache'][_0x4a99d7(0x1d6)] = {};
                    let _0x4dbdcf = null;
                    _0x4434b7(_0x4a99d7(0x273))['length'] > 0x0 ? _0x4dbdcf = _0x4434b7(_0x4a99d7(0x3c7)) : (_0x4dbdcf = _0x4434b7(_0x4a99d7(0x314)), _0x4dbdcf[_0x4a99d7(0x444)]('position', _0x4a99d7(0x21d)));
                    _0x4dbdcf[_0x4a99d7(0x3ea)] === 0x0 && (_0x4dbdcf = _0x4434b7('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')['parent']()[_0x4a99d7(0x3b4)]()[_0x4a99d7(0x3b4)]()[_0x4a99d7(0x3e3)](_0x4a99d7(0x32b)), _0x4dbdcf[_0x4a99d7(0x444)]('position', _0x4a99d7(0x21d)));
                    _0x4dbdcf[_0x4a99d7(0x3ea)] === 0x0 && (_0x4dbdcf = _0x4434b7(_0x4a99d7(0x262))[_0x4a99d7(0x3b4)]()['parent']()[_0x4a99d7(0x3b4)]()[_0x4a99d7(0x3e3)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x4dbdcf[_0x4a99d7(0x444)](_0x4a99d7(0x21a), 'relative'));
                    if (_0x4dbdcf[_0x4a99d7(0x3ea)] === 0x0) {
                        let _0x1f1fb6 = _0x4434b7(_0x4a99d7(0x3d5)), _0x5175b4 = 0x0;
                        _0x1f1fb6[_0x4a99d7(0x25e)](function () {
                            const _0x233893 = _0x4a99d7;
                            _0x4434b7(this)[_0x233893(0x30d)]() > _0x5175b4 && (_0x5175b4 = _0x4434b7(this)['width'](), _0x4dbdcf = _0x4434b7(this)[_0x233893(0x237)](_0x233893(0x41a))[_0x233893(0x2fb)]());
                        });
                    }
                    if (_0x4dbdcf != null) {
                        _0x4dbdcf['first']()[_0x4a99d7(0x444)](_0x4a99d7(0x21a), 'relative'), _0x4dbdcf[_0x4a99d7(0x2fb)]()[_0x4a99d7(0x205)](_0x4a99d7(0x32f) + _0x414c8a('DW') + _0x4a99d7(0x264) + _0xd8e662[_0x4a99d7(0x244)] + '</div>'), _0x4dbdcf[_0x4a99d7(0x2fb)]()[_0x4a99d7(0x205)](_0x4a99d7(0x240) + _0x414c8a(_0x4a99d7(0x24d)) + _0x4a99d7(0x3fd) + _0xd8e662[_0x4a99d7(0x24d)] + '</div>');
                        let _0x67923 = _0x5cb1df(_0x1cf8ee);
                        _0x67923['length'] > 0x1 && _0x4dbdcf[_0x4a99d7(0x2fb)]()['append'](_0x4a99d7(0x1f8) + _0x414c8a(_0x4a99d7(0x2d2)) + _0x4a99d7(0x1d4) + _0xd8e662[_0x4a99d7(0x2b7)] + _0x4a99d7(0x256)), _0x4dbdcf['find']('img[referrerpolicy]')[_0x4a99d7(0x25e)](function () {
                            _0x4434b7(this)['on']('load', function () {
                                const _0x17614e = a0_0x3a70;
                                !_0x4434b7(this)[_0x17614e(0x216)](_0x17614e(0x455)) && (_0x4dbdcf[_0x17614e(0x3e3)](_0x17614e(0x2ca))[_0x17614e(0x3ea)] === 0x0 ? (_0x4434b7(this)[_0x17614e(0x41f)]('data-remove-thumbnail', !![]), _0x4434b7(_0x17614e(0x2ca))[_0x17614e(0x3be)](), _0x73b19f(_0x17614e(0x232))) : (_0x4434b7(this)[_0x17614e(0x41f)](_0x17614e(0x283), !![]), _0x73b19f('(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x68cb65(_0x801170, _0x5ceefc) {
            const _0x5ca91f = _0x47aa26;
            if (_0x801170) {
                let _0x220103 = new Date()[_0x5ca91f(0x25c)](), _0x579798 = Math[_0x5ca91f(0x3c2)](_0x220103 / 0x3e8), _0x1d3007 = _0x5ca91f(0x44c), _0x3ac895 = _0x4434b7(_0x5ca91f(0x35d))[_0x5ca91f(0x2fb)]()[_0x5ca91f(0x2e3)]() || location[_0x5ca91f(0x2ea)]['split']('/')['at'](0x2), _0x2d7540 = location['pathname'][_0x5ca91f(0x1cb)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x35a228 = '', _0x52c11b = null;
                _0x2c4ade(!![]);
                if (_0x282c20[_0x5ca91f(0x405)] && !_0xddd390['tempFetchRateLimit']) {
                    let _0x10fc92 = await _0x38be80(_0x3ac895), _0x41760b = _0x10fc92[_0x5ca91f(0x433)]['pk'], _0xca4522 = await _0xfbea57(_0x41760b), _0x52c999 = location[_0x5ca91f(0x2ea)][_0x5ca91f(0x293)]('/')[_0x5ca91f(0x2c7)](_0x1a65a4 => _0x1a65a4[_0x5ca91f(0x3ea)] > 0x0 && _0x1a65a4[_0x5ca91f(0x330)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0xca4522['data'][_0x5ca91f(0x276)][0x0][_0x5ca91f(0x41b)]['forEach'](_0x53c95e => {
                        _0x53c95e['id'] == _0x52c999 && (_0x52c11b = _0x53c95e['id']);
                    });
                    if (_0x52c11b == null) {
                        let _0x547082 = _0x5cb1df(_0x3ac895);
                        _0x547082[_0x5ca91f(0x25e)](function (_0x458653) {
                            const _0x11ba52 = _0x5ca91f;
                            _0x4434b7(this)['children']()['length'] > 0x0 && (_0x52c11b = _0xca4522['data'][_0x11ba52(0x276)][0x0][_0x11ba52(0x41b)][_0x458653]['id']);
                        });
                    }
                    _0x52c11b == null && (_0x4434b7('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x5ca91f(0x25e)](function (_0x4860ec) {
                        const _0x2126fd = _0x5ca91f;
                        _0x4434b7(this)['hasClass']('x1lix1fw') && (_0x4434b7(this)[_0x2126fd(0x237)]()['length'] > 0x0 && (_0x52c11b = _0xca4522[_0x2126fd(0x216)][_0x2126fd(0x276)][0x0]['items'][_0x4860ec]['id']));
                    }), _0x4434b7('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x5ca91f(0x25e)](function (_0x12717f) {
                        const _0x300372 = _0x5ca91f;
                        _0x4434b7(this)['children']()['hasClass'](_0x300372(0x2f6)) && (_0x52c11b = _0xca4522[_0x300372(0x216)][_0x300372(0x276)][0x0][_0x300372(0x41b)][_0x12717f]['id']);
                    }));
                    _0x52c11b == null && (_0x52c11b = location[_0x5ca91f(0x2ea)]['split']('/')['filter'](_0x5e402e => _0x5e402e[_0x5ca91f(0x3ea)] > 0x0 && _0x5e402e['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0xfdd692 = await _0x981f7b(_0x52c11b);
                    _0x282c20['RENAME_PUBLISH_DATE'] && (_0x579798 = _0xfdd692[_0x5ca91f(0x41b)][0x0]['taken_at']);
                    _0xfdd692[_0x5ca91f(0x291)] === 'ok' ? _0x3e6c2e(_0xfdd692[_0x5ca91f(0x41b)][0x0][_0x5ca91f(0x431)][_0x5ca91f(0x329)][0x0]['url'], _0x3ac895, _0x5ca91f(0x1d6), _0x579798, _0x5ca91f(0x44c), _0x52c11b) : (_0x282c20[_0x5ca91f(0x399)] ? (_0xddd390[_0x5ca91f(0x45c)] = !![], _0x68cb65(!![], _0x5ceefc)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0xfdd692['message']), _0x73b19f(_0xfdd692));
                    _0x2c4ade(![]);
                    return;
                }
                if (_0xddd390['GL_dataCache'][_0x5ca91f(0x1d6)][_0x3ac895] && !_0x5ceefc) {
                    _0x73b19f(_0x5ca91f(0x3dc), _0x3ac895), _0xddd390[_0x5ca91f(0x265)][_0x5ca91f(0x1d6)][_0x3ac895][_0x5ca91f(0x216)][_0x5ca91f(0x276)][0x0][_0x5ca91f(0x41b)]['forEach'](_0x4034c4 => {
                        const _0x4f688d = _0x5ca91f;
                        _0x4034c4['id'] == _0x2d7540 && (_0x35a228 = _0x4034c4['display_url'], _0x282c20[_0x4f688d(0x21f)] && (_0x579798 = _0x4034c4[_0x4f688d(0x434)], _0x52c11b = _0x4034c4['id']));
                    });
                    if (_0x35a228['length'] == 0x0) {
                        _0x73b19f(_0x5ca91f(0x28a), _0x3ac895), _0x68cb65(!![], !![]);
                        return;
                    }
                } else {
                    let _0x3818dc = await _0x38be80(_0x3ac895), _0x2bc876 = _0x3818dc[_0x5ca91f(0x433)]['pk'], _0x35055c = await _0xfbea57(_0x2bc876);
                    _0x35055c[_0x5ca91f(0x216)]['reels_media'][0x0][_0x5ca91f(0x41b)]['forEach'](_0x1df3c6 => {
                        const _0x5d3d8a = _0x5ca91f;
                        _0x1df3c6['id'] == _0x2d7540 && (_0x35a228 = _0x1df3c6[_0x5d3d8a(0x3ad)], _0x282c20[_0x5d3d8a(0x21f)] && (_0x579798 = _0x1df3c6[_0x5d3d8a(0x434)], _0x52c11b = _0x1df3c6['id']));
                    });
                    if (_0x35a228['length'] == 0x0) {
                        let _0x3ac0ca = _0x5cb1df(_0x3ac895);
                        _0x3ac0ca[_0x5ca91f(0x25e)](function (_0x1f6352) {
                            const _0x5bac36 = _0x5ca91f;
                            _0x4434b7(this)[_0x5bac36(0x237)]()[_0x5bac36(0x3ea)] > 0x0 && (_0x35a228 = _0x35055c[_0x5bac36(0x216)][_0x5bac36(0x276)][0x0][_0x5bac36(0x41b)][_0x1f6352][_0x5bac36(0x3ad)], _0x282c20['RENAME_PUBLISH_DATE'] && (_0x579798 = _0x35055c[_0x5bac36(0x216)]['reels_media'][0x0][_0x5bac36(0x41b)][_0x1f6352][_0x5bac36(0x434)], _0x52c11b = _0x35055c[_0x5bac36(0x216)][_0x5bac36(0x276)][0x0][_0x5bac36(0x41b)][_0x1f6352]['id']));
                        }), _0x35a228['length'] == 0x0 && (_0x4434b7(_0x5ca91f(0x3bc))[_0x5ca91f(0x25e)](function (_0xdc9040) {
                            const _0x5999bc = _0x5ca91f;
                            _0x4434b7(this)['hasClass'](_0x5999bc(0x1c0)) && (_0x4434b7(this)[_0x5999bc(0x237)]()['length'] > 0x0 && (_0x35a228 = _0x35055c[_0x5999bc(0x216)][_0x5999bc(0x276)][0x0][_0x5999bc(0x41b)][_0xdc9040][_0x5999bc(0x3ad)], _0x282c20[_0x5999bc(0x21f)] && (_0x579798 = _0x35055c[_0x5999bc(0x216)][_0x5999bc(0x276)][0x0][_0x5999bc(0x41b)][_0xdc9040][_0x5999bc(0x434)], _0x52c11b = _0x35055c['data'][_0x5999bc(0x276)][0x0]['items'][_0xdc9040]['id'])));
                        }), _0x4434b7(_0x5ca91f(0x3ef))[_0x5ca91f(0x25e)](function (_0x362d92) {
                            const _0x53c287 = _0x5ca91f;
                            _0x4434b7(this)[_0x53c287(0x237)]()[_0x53c287(0x2e7)](_0x53c287(0x2f6)) && (_0x35a228 = _0x35055c[_0x53c287(0x216)][_0x53c287(0x276)][0x0][_0x53c287(0x41b)][_0x362d92][_0x53c287(0x3ad)], _0x282c20['RENAME_PUBLISH_DATE'] && (_0x579798 = _0x35055c[_0x53c287(0x216)][_0x53c287(0x276)][0x0][_0x53c287(0x41b)][_0x362d92][_0x53c287(0x434)], _0x52c11b = _0x35055c[_0x53c287(0x216)][_0x53c287(0x276)][0x0]['items'][_0x362d92]['id']));
                        }));
                    }
                }
                _0x3e6c2e(_0x35a228, _0x3ac895, 'thumbnail', _0x579798, _0x1d3007, _0x52c11b), _0xddd390['tempFetchRateLimit'] = ![], _0x2c4ade(![]);
            } else {
                if (_0x4434b7('body\x20>\x20div\x20div.IG_DWSTORY')[_0x5ca91f(0x3b4)]()[_0x5ca91f(0x3e3)](_0x5ca91f(0x2f1))[_0x5ca91f(0x3ea)]) {
                    let _0x5a3037 = null;
                    _0x4434b7(_0x5ca91f(0x273))[_0x5ca91f(0x3ea)] > 0x0 ? _0x5a3037 = _0x4434b7('body\x20>\x20div\x20section:visible._ac0a') : (_0x5a3037 = _0x4434b7(_0x5ca91f(0x314)), _0x5a3037['css'](_0x5ca91f(0x21a), _0x5ca91f(0x21d)));
                    _0x5a3037[_0x5ca91f(0x3ea)] === 0x0 && (_0x5a3037 = _0x4434b7(_0x5ca91f(0x262))[_0x5ca91f(0x3b4)]()[_0x5ca91f(0x3b4)]()['parent']()[_0x5ca91f(0x3e3)](_0x5ca91f(0x32b)), _0x5a3037['css'](_0x5ca91f(0x21a), _0x5ca91f(0x21d)));
                    _0x5a3037['length'] === 0x0 && (_0x5a3037 = _0x4434b7(_0x5ca91f(0x262))['parent']()['parent']()[_0x5ca91f(0x3b4)]()[_0x5ca91f(0x3e3)](_0x5ca91f(0x1e9)), _0x5a3037[_0x5ca91f(0x444)](_0x5ca91f(0x21a), 'relative'));
                    if (_0x5a3037[_0x5ca91f(0x3ea)] === 0x0) {
                        let _0x167201 = _0x4434b7(_0x5ca91f(0x3d5)), _0x294ff3 = 0x0;
                        _0x167201[_0x5ca91f(0x25e)](function () {
                            const _0x4044cd = _0x5ca91f;
                            _0x4434b7(this)[_0x4044cd(0x30d)]() > _0x294ff3 && (_0x294ff3 = _0x4434b7(this)[_0x4044cd(0x30d)](), _0x5a3037 = _0x4434b7(this)[_0x4044cd(0x237)](_0x4044cd(0x41a))[_0x4044cd(0x2fb)]());
                        });
                    }
                    _0x5a3037 != null && (_0x5a3037[_0x5ca91f(0x2fb)]()['css'](_0x5ca91f(0x21a), _0x5ca91f(0x21d)), _0x5a3037[_0x5ca91f(0x2fb)]()['append'](_0x5ca91f(0x44d) + _0x414c8a(_0x5ca91f(0x2c6)) + _0x5ca91f(0x3c9) + _0xd8e662['THUMBNAIL'] + _0x5ca91f(0x256)));
                }
            }
        }
        function _0x51e4f9(_0x4196fb) {
            return new Promise((_0x5640e0, _0x658aff) => {
                const _0x29d33b = a0_0x3a70;
                let _0x3124d3 = 'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22' + _0x4196fb + _0x29d33b(0x38f);
                GM_xmlhttpRequest({
                    'method': _0x29d33b(0x29c),
                    'url': _0x3124d3,
                    'onload': function (_0x5abe1d) {
                        const _0x5b51e6 = _0x29d33b;
                        try {
                            let _0x1164a8 = JSON[_0x5b51e6(0x268)](_0x5abe1d[_0x5b51e6(0x2fe)]);
                            _0x5640e0(_0x1164a8);
                        } catch (_0x31f548) {
                            _0x73b19f(_0x5b51e6(0x1f4), _0x5b51e6(0x388), _0x31f548['message']), _0x658aff(_0x31f548);
                        }
                    },
                    'onerror': function (_0x59c6d9) {
                        const _0x5ddefb = _0x29d33b;
                        _0x73b19f(_0x5ddefb(0x1f4), _0x5ddefb(0x388), _0x59c6d9), _0x658aff(_0x59c6d9);
                    }
                });
            });
        }
        function _0xfbea57(_0x5bd605) {
            return new Promise((_0x57fd96, _0x244302) => {
                const _0x417864 = a0_0x3a70;
                let _0x5871ef = 'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22' + _0x5bd605 + _0x417864(0x38f);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x5871ef,
                    'onload': function (_0x1b2700) {
                        const _0x25d0b4 = _0x417864;
                        try {
                            let _0x2fa3b1 = JSON['parse'](_0x1b2700['response']);
                            _0x73b19f(_0x25d0b4(0x227), _0x2fa3b1), _0x57fd96(_0x2fa3b1);
                        } catch (_0xfc7246) {
                            _0x73b19f(_0x25d0b4(0x227), _0x25d0b4(0x388), _0xfc7246[_0x25d0b4(0x402)]), _0x244302(_0xfc7246);
                        }
                    },
                    'onerror': function (_0x524d7) {
                        const _0x3f8002 = _0x417864;
                        _0x73b19f(_0x3f8002(0x227), 'reject', _0x524d7), _0x244302(_0x524d7);
                    }
                });
            });
        }
        function _0x38be80(_0x281f75) {
            return new Promise((_0x313cda, _0x2f3321) => {
                const _0x7161fd = a0_0x3a70;
                let _0x4ffc55 = 'https://www.instagram.com/web/search/topsearch/?query=' + _0x281f75;
                GM_xmlhttpRequest({
                    'method': _0x7161fd(0x29c),
                    'url': _0x4ffc55,
                    'onload': function (_0x2f5a44) {
                        const _0x537bd = _0x7161fd;
                        let _0x60cdb5 = JSON[_0x537bd(0x268)](_0x2f5a44[_0x537bd(0x2fe)]), _0x513076 = null;
                        _0x60cdb5[_0x537bd(0x33a)][_0x537bd(0x43e)](_0xeac4a0 => {
                            const _0x371fbf = _0x537bd;
                            _0xeac4a0[_0x371fbf(0x433)][_0x371fbf(0x20b)]?.['toLowerCase']() === _0x281f75?.[_0x371fbf(0x267)]() && (_0x513076 = _0xeac4a0);
                        }), _0x513076 != null ? (_0x73b19f(_0x537bd(0x1d3), _0x513076), _0x313cda(_0x513076)) : _0x8d5c48(_0x281f75)['then'](_0x5fef50 => {
                            _0x313cda(_0x5fef50);
                        })[_0x537bd(0x328)](_0x300b16 => {
                            const _0x32f70e = _0x537bd;
                            alert(_0x32f70e(0x3d8));
                        });
                    },
                    'onerror': function (_0x4efcc3) {
                        const _0x580711 = _0x7161fd;
                        _0x73b19f(_0x580711(0x1d3), _0x580711(0x388), _0x4efcc3), _0x2f3321(_0x4efcc3);
                    }
                });
            });
        }
        function _0x8d5c48(_0x1bdd74) {
            return new Promise((_0x5ed402, _0x3e42d9) => {
                const _0x57fb8b = a0_0x3a70;
                let _0x1dfd65 = _0x57fb8b(0x3d3) + _0x1bdd74;
                GM_xmlhttpRequest({
                    'method': _0x57fb8b(0x29c),
                    'url': _0x1dfd65,
                    'headers': { 'X-IG-App-ID': _0x810f41() },
                    'onload': function (_0x1ef192) {
                        const _0x28c772 = _0x57fb8b;
                        try {
                            let _0x483a14 = JSON[_0x28c772(0x268)](_0x1ef192[_0x28c772(0x2fe)]), _0x2859b9 = _0x483a14?.['data']?.[_0x28c772(0x433)];
                            if (_0x2859b9 != null) {
                                let _0x4b026e = _0x483a14?.[_0x28c772(0x216)];
                                _0x4b026e[_0x28c772(0x433)]['pk'] = _0x4b026e[_0x28c772(0x433)]['id'], _0x73b19f(_0x28c772(0x3cb), _0x483a14), _0x5ed402(_0x4b026e);
                            } else
                                _0x73b19f(_0x28c772(0x3cb), _0x28c772(0x388), _0x28c772(0x230)), _0x3e42d9('undefined');
                        } catch (_0x1a29f7) {
                            _0x73b19f(_0x28c772(0x3cb), _0x28c772(0x388), _0x1a29f7['message']), _0x3e42d9(_0x1a29f7);
                        }
                    },
                    'onerror': function (_0x2e7f4e) {
                        const _0x5bfbd3 = _0x57fb8b;
                        _0x73b19f(_0x5bfbd3(0x3cb), _0x5bfbd3(0x388), _0x2e7f4e), _0x3e42d9(_0x2e7f4e);
                    }
                });
            });
        }
        function _0x3e3d3e(_0x3bfb58) {
            return new Promise((_0x192695, _0xc10170) => {
                const _0x45864b = a0_0x3a70;
                let _0x3b4594 = 'https://i.instagram.com/api/v1/users/' + _0x3bfb58 + _0x45864b(0x3ab);
                GM_xmlhttpRequest({
                    'method': _0x45864b(0x29c),
                    'url': _0x3b4594,
                    'headers': { 'User-Agent': _0x45864b(0x26a) },
                    'onload': function (_0x13ab36) {
                        const _0xf37d00 = _0x45864b;
                        try {
                            let _0x4f92be = JSON[_0xf37d00(0x268)](_0x13ab36[_0xf37d00(0x2fe)]);
                            _0x4f92be[_0xf37d00(0x291)] !== 'ok' ? (_0x73b19f(_0xf37d00(0x435), _0xf37d00(0x388), _0x4f92be), _0xc10170(_0xf37d00(0x20d))) : (_0x73b19f(_0xf37d00(0x435), _0x4f92be), _0x192695(_0x4f92be[_0xf37d00(0x433)][_0xf37d00(0x285)]?.[_0xf37d00(0x3a0)]));
                        } catch (_0x47b036) {
                            _0x73b19f(_0xf37d00(0x435), _0xf37d00(0x388), _0x47b036), _0xc10170(_0x47b036);
                        }
                    },
                    'onerror': function (_0xbe0da3) {
                        const _0x413fcc = _0x45864b;
                        _0x73b19f(_0x413fcc(0x435), _0x413fcc(0x388), _0xbe0da3), _0xc10170(_0xbe0da3);
                    }
                });
            });
        }
        function _0x355892(_0x2161d9) {
            return new Promise((_0x54da34, _0x22a975) => {
                const _0x3bd0c5 = a0_0x3a70;
                if (!_0x2161d9)
                    _0x22a975(_0x3bd0c5(0x3fc));
                let _0x1e6e06 = _0x2161d9, _0x519d16 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x1e6e06 + '%22}';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x519d16,
                    'onload': function (_0xa57faf) {
                        const _0x11bf8d = _0x3bd0c5;
                        try {
                            let _0x147e27 = JSON[_0x11bf8d(0x268)](_0xa57faf[_0x11bf8d(0x2fe)]);
                            _0x73b19f(_0x11bf8d(0x1c6), _0x147e27), _0x54da34(_0x147e27[_0x11bf8d(0x216)][_0x11bf8d(0x3d6)]['owner'][_0x11bf8d(0x20b)]);
                        } catch (_0x2ced53) {
                            _0x73b19f('getPostOwner()', _0x11bf8d(0x388), _0x2ced53[_0x11bf8d(0x402)]), _0x22a975(_0x2ced53);
                        }
                    },
                    'onerror': function (_0x407f72) {
                        const _0x54183f = _0x3bd0c5;
                        _0x73b19f(_0x54183f(0x1c6), 'reject', _0x407f72), _0x22a975(_0x407f72);
                    }
                });
            });
        }
        function _0x4893be(_0x218890) {
            return new Promise((_0x388005, _0x40cfb4) => {
                const _0x3a2daf = a0_0x3a70;
                if (!_0x218890)
                    _0x40cfb4(_0x3a2daf(0x3fc));
                let _0x2169f8 = _0x218890, _0x4717f8 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x2169f8 + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x3a2daf(0x29c),
                    'url': _0x4717f8,
                    'headers': { 'User-Agent': _0x3a2daf(0x26a) },
                    'onload': function (_0x1172b3) {
                        const _0x61aa87 = _0x3a2daf;
                        try {
                            let _0x44a768 = JSON[_0x61aa87(0x268)](_0x1172b3[_0x61aa87(0x2fe)]);
                            _0x73b19f(_0x44a768), _0x44a768[_0x61aa87(0x291)] === _0x61aa87(0x225) ? (_0x73b19f(_0x61aa87(0x1e0), _0x61aa87(0x21e), _0x2169f8), _0x1f6abf(_0x2169f8)[_0x61aa87(0x400)](_0x3f9b79 => {
                                const _0x96d601 = _0x61aa87;
                                _0x388005({
                                    'type': _0x96d601(0x27d),
                                    'data': _0x3f9b79[_0x96d601(0x29f)][_0x96d601(0x41b)][0x0]
                                });
                            })[_0x61aa87(0x328)](_0x12d3fb => {
                                _0x40cfb4(_0x12d3fb);
                            })) : _0x388005({
                                'type': _0x61aa87(0x384),
                                'data': _0x44a768[_0x61aa87(0x216)]
                            });
                        } catch (_0x55514a) {
                            _0x73b19f(_0x61aa87(0x367), 'reject', _0x55514a[_0x61aa87(0x402)]), _0x40cfb4(_0x55514a);
                        }
                    },
                    'onerror': function (_0x10a8c5) {
                        const _0x19d47d = _0x3a2daf;
                        _0x73b19f(_0x19d47d(0x367), 'reject', _0x10a8c5), _0x40cfb4(_0x10a8c5);
                    }
                });
            });
        }
        function _0x1f6abf(_0x4fdd9c) {
            return new Promise((_0x79f72f, _0x19eb9d) => {
                const _0x6d35e2 = a0_0x3a70;
                if (!_0x4fdd9c)
                    _0x19eb9d(_0x6d35e2(0x3fc));
                let _0xf232d4 = _0x4fdd9c, _0x21bc86 = 'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22' + _0xf232d4 + _0x6d35e2(0x20e);
                GM_xmlhttpRequest({
                    'method': _0x6d35e2(0x29c),
                    'url': _0x21bc86,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x810f41()
                    },
                    'onload': function (_0x3f6eeb) {
                        const _0x37ad2c = _0x6d35e2;
                        try {
                            let _0x450820 = JSON[_0x37ad2c(0x268)](_0x3f6eeb[_0x37ad2c(0x2fe)]);
                            _0x73b19f(_0x450820), _0x450820[_0x37ad2c(0x291)] === _0x37ad2c(0x225) ? (alert(_0x37ad2c(0x1ed) + _0x450820[_0x37ad2c(0x402)] + ':\x20' + _0x450820[_0x37ad2c(0x277)]), _0x73b19f(_0x37ad2c(0x2be) + _0x450820['message'] + ':\x20' + _0x450820[_0x37ad2c(0x277)]), _0x19eb9d(_0x3f6eeb)) : (_0x73b19f(_0x37ad2c(0x3d9), _0x450820['data']), _0x79f72f(_0x450820['data']));
                        } catch (_0x48b01b) {
                            _0x73b19f('getBlobMediaWithQueryID()', 'reject', _0x48b01b['message']), _0x19eb9d(_0x48b01b);
                        }
                    },
                    'onerror': function (_0x596243) {
                        const _0x252013 = _0x6d35e2;
                        _0x73b19f(_0x252013(0x3d9), 'reject', _0x596243), _0x19eb9d(_0x596243);
                    }
                });
            });
        }
        function _0x981f7b(_0x380ac0) {
            return new Promise((_0x35fea2, _0x2fae1e) => {
                const _0x4fffa8 = a0_0x3a70;
                let _0x432871 = _0x4fffa8(0x3ed) + _0x380ac0 + _0x4fffa8(0x3ab);
                if (_0x380ac0 == null) {
                    alert(_0x4fffa8(0x3b1)), _0x73b19f(_0x4fffa8(0x43a), _0x4fffa8(0x388), _0x4fffa8(0x3b1)), _0x2c4ade(![]), _0x2fae1e(-0x1);
                    return;
                }
                if (_0x810f41() == null) {
                    alert(_0x4fffa8(0x3fa)), _0x73b19f(_0x4fffa8(0x43a), _0x4fffa8(0x388), 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x2c4ade(![]), _0x2fae1e(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x4fffa8(0x29c),
                    'url': _0x432871,
                    'headers': {
                        'User-Agent': window[_0x4fffa8(0x261)][_0x4fffa8(0x24e)],
                        'Accept': '*/*',
                        'X-IG-App-ID': _0x810f41()
                    },
                    'onload': function (_0x43d187) {
                        const _0x28f3d0 = _0x4fffa8;
                        if (_0x43d187['finalUrl'] == _0x432871) {
                            let _0x544fe4 = JSON[_0x28f3d0(0x268)](_0x43d187[_0x28f3d0(0x2fe)]);
                            _0x73b19f(_0x28f3d0(0x43a), _0x544fe4), _0x35fea2(_0x544fe4);
                        } else {
                            let _0x20b982 = new URL(_0x43d187[_0x28f3d0(0x3c4)]);
                            _0x20b982[_0x28f3d0(0x2ea)][_0x28f3d0(0x38e)](_0x28f3d0(0x1e7)) ? (_0x73b19f(_0x28f3d0(0x43a), _0x28f3d0(0x388), _0x28f3d0(0x2a4)), alert(_0x28f3d0(0x2a4))) : (_0x73b19f('getMediaInfo()', _0x28f3d0(0x388), 'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x43d187['finalUrl'] + '\x22'), alert(_0x28f3d0(0x343) + _0x43d187[_0x28f3d0(0x3c4)] + '\x22')), _0x2c4ade(![]), _0x2fae1e(-0x1);
                        }
                    },
                    'onerror': function (_0x5a0d11) {
                        const _0x390de0 = _0x4fffa8;
                        _0x73b19f(_0x390de0(0x43a), _0x390de0(0x388), _0x5a0d11), _0x35fea2(_0x5a0d11);
                    }
                });
            });
        }
        function _0x70770c(_0x100b48) {
            const _0x16ddf0 = _0x47aa26;
            let _0xdec173 = new URL(_0x100b48), _0x19a85e = _0xdec173?.['searchParams']?.['get'](_0x16ddf0(0x22d))?.[_0x16ddf0(0x293)]('.')['at'](0x0);
            return _0x19a85e ? atob(_0x19a85e) : null;
        }
        function _0x810f41() {
            const _0x3db920 = _0x47aa26;
            let _0x36182d = null;
            return _0x4434b7(_0x3db920(0x24f))['each'](function () {
                const _0x8b0077 = _0x3db920, _0x4e2928 = /"APP_ID":"([0-9]+)"/ig, _0x39a35c = _0x4434b7(this)[_0x8b0077(0x2e3)]()[_0x8b0077(0x330)](_0x4e2928);
                _0x39a35c != null && _0x36182d == null && (_0x36182d = [..._0x4434b7(this)[_0x8b0077(0x2e3)]()[_0x8b0077(0x458)](_0x4e2928)]);
            }), _0x36182d ? _0x36182d['at'](0x0)['at'](-0x1) : null;
        }
        function _0x2c4ade(_0x4dc143) {
            const _0x458665 = _0x47aa26;
            _0x4dc143 ? (_0x4434b7(_0x458665(0x427))[_0x458665(0x418)](_0x458665(0x263)), _0x4434b7(_0x458665(0x427))[_0x458665(0x444)](_0x458665(0x34d), '20000')) : (_0x4434b7(_0x458665(0x427))['addClass'](_0x458665(0x263)), _0x4434b7(_0x458665(0x427))[_0x458665(0x444)](_0x458665(0x34d), ''));
        }
        function _0x5cb1df(_0x16c4b0) {
            const _0x13e888 = _0x47aa26;
            let _0x3b0e23 = _0x4434b7(_0x13e888(0x340) + _0x16c4b0 + _0x13e888(0x31c))['filter'](function () {
                const _0x3560b9 = _0x13e888;
                return _0x4434b7(this)[_0x3560b9(0x237)]()[_0x3560b9(0x3ea)] === 0x0 && _0x4434b7(this)[_0x3560b9(0x3e3)]('svg')[_0x3560b9(0x3ea)] === 0x0 && _0x4434b7(this)[_0x3560b9(0x2e3)]()?.['toLowerCase']() === _0x16c4b0?.[_0x3560b9(0x267)]();
            })['parents'](_0x13e888(0x2ef))[_0x13e888(0x2c7)](function () {
                return _0x4434b7(this)['text']()?.['toLowerCase']() !== _0x16c4b0?.['toLowerCase']();
            })[_0x13e888(0x2c7)](function () {
                const _0x530d74 = _0x13e888;
                return _0x4434b7(this)[_0x530d74(0x237)]()['length'] > 0x1;
            })[_0x13e888(0x2fb)]();
            return _0x3b0e23[_0x13e888(0x3ea)] === 0x0 && (_0x3b0e23 = _0x4434b7(_0x13e888(0x340) + _0x16c4b0 + '\x22]')['filter'](function () {
                const _0x1a7195 = _0x13e888;
                return _0x4434b7(this)[_0x1a7195(0x3e3)]('img')[_0x1a7195(0x3ea)] > 0x0;
            })[_0x13e888(0x379)]('div:not([class]):not([style])')[_0x13e888(0x2c7)](function () {
                const _0x5057c8 = _0x13e888;
                return _0x4434b7(this)[_0x5057c8(0x2e3)]()?.[_0x5057c8(0x267)]() !== _0x16c4b0?.[_0x5057c8(0x267)]();
            })[_0x13e888(0x2c7)](function () {
                const _0x1a40d6 = _0x13e888;
                return _0x4434b7(this)[_0x1a40d6(0x237)]()[_0x1a40d6(0x3ea)] > 0x1;
            })['first']()), _0x3b0e23[_0x13e888(0x237)]()[_0x13e888(0x2c7)](function () {
                const _0x360d22 = _0x13e888;
                return _0x4434b7(this)[_0x360d22(0x337)]() < 0xa;
            })[_0x13e888(0x2fb)]()[_0x13e888(0x237)]();
        }
        function _0x1a29b2(_0x3fa5c7, _0x5310a0) {
            const _0x173699 = _0x47aa26;
            _0x4434b7(_0x173699(0x3c6))[_0x173699(0x3ea)] ? (_0x4434b7('.circle_wrapper\x20span')['text'](_0x3fa5c7 + '/' + _0x5310a0), _0x3fa5c7 >= _0x5310a0 && _0x4434b7('.circle_wrapper')[_0x173699(0x429)](0xfa, function () {
                const _0x577128 = _0x173699;
                _0x4434b7(this)[_0x577128(0x3be)]();
            })) : _0x4434b7('body')['append'](_0x173699(0x2bc) + _0x3fa5c7 + '/' + _0x5310a0 + _0x173699(0x2a8));
        }
        function _0x43e820(_0x46ad7c, _0x3b9b6e) {
            const _0x597b75 = _0x47aa26;
            let _0x4c8c48 = _0x46ad7c ? _0x597b75(0x32d) : '';
            _0x4434b7(_0x597b75(0x1fc))[_0x597b75(0x205)](_0x597b75(0x3f0) + _0x4c8c48 + _0x597b75(0x3d7)), _0x4434b7(_0x597b75(0x296))[_0x597b75(0x205)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x414c8a(_0x597b75(0x448)) + _0x597b75(0x45e) + GM_info[_0x597b75(0x1c1)]['version'] + _0x597b75(0x43c) + _0xd8e662[_0x597b75(0x448)] + _0x597b75(0x2f8)), _0x3b9b6e && (_0x4434b7(_0x597b75(0x296))[_0x597b75(0x205)](_0x597b75(0x3fb)), _0x4434b7(_0x597b75(0x25a))['append']('<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>' + _0x414c8a(_0x597b75(0x211)) + '</button>'), _0x4434b7(_0x597b75(0x25a))[_0x597b75(0x205)](_0x597b75(0x459) + _0x414c8a(_0x597b75(0x200)) + _0x597b75(0x442)), _0x4434b7(_0x597b75(0x296))[_0x597b75(0x205)](_0x597b75(0x1ec) + _0x414c8a(_0x597b75(0x250)) + _0x597b75(0x30f)));
        }
        function _0x2ad28a(_0x5655c1) {
            const _0x54a010 = _0x47aa26;
            _0x4434b7(_0x54a010(0x3f9))[_0x54a010(0x3ea)] && (_0x5655c1 ? _0x4434b7(_0x54a010(0x3f9))[_0x54a010(0x3a8)]('hidden') : _0x4434b7(_0x54a010(0x3f9))['removeClass'](_0x54a010(0x32d)));
        }
        function _0x3e6c2e(_0x22b006, _0x6e7db6, _0x1daba7, _0x229c71, _0x3e2b58, _0x17ebd8) {
            return new Promise(_0x178604 => {
                setTimeout(() => {
                    const _0x54c85b = a0_0x3a70;
                    _0x2c4ade(!![]), fetch(_0x22b006)[_0x54c85b(0x400)](_0x16ffac => {
                        const _0x2a0eb9 = _0x54c85b;
                        return _0x16ffac[_0x2a0eb9(0x3cd)]()[_0x2a0eb9(0x400)](_0x56dd63 => {
                            _0x2c4ade(![]), _0x2c2ab6(_0x22b006, _0x56dd63, _0x6e7db6, _0x1daba7, _0x229c71, _0x3e2b58, _0x17ebd8), _0x178604(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x2c2ab6(_0x3be0d8, _0xeac64e, _0x66a873, _0x8bbbb7, _0x1fbc61, _0x31ad8b, _0x37fbfd) {
            const _0x273431 = _0x47aa26;
            _0x1fbc61 = parseInt(_0x1fbc61[_0x273431(0x246)]()[_0x273431(0x332)](0xd, '0'));
            _0x282c20[_0x273431(0x21f)] && (_0x1fbc61 = parseInt(_0x1fbc61[_0x273431(0x246)]()[_0x273431(0x332)](0xd, '0')));
            const _0x1e0ed4 = new Date(_0x1fbc61), _0x3017dc = document[_0x273431(0x311)]('a'), _0xf50e14 = new URL(_0x3be0d8)[_0x273431(0x2ea)][_0x273431(0x293)]('/')['at'](-0x1)[_0x273431(0x293)]('.')[_0x273431(0x35c)](0x0, -0x1)[_0x273431(0x289)]('.'), _0x29f066 = _0x1e0ed4[_0x273431(0x2b9)]()[_0x273431(0x246)](), _0x4e6759 = (_0x1e0ed4[_0x273431(0x42b)]() + 0x1)[_0x273431(0x246)]()[_0x273431(0x439)](0x2, '0'), _0x3a1fd1 = _0x1e0ed4['getDate']()['toString']()[_0x273431(0x439)](0x2, '0'), _0x41d5af = _0x1e0ed4[_0x273431(0x29a)]()[_0x273431(0x246)]()[_0x273431(0x439)](0x2, '0'), _0x5bf049 = _0x1e0ed4[_0x273431(0x3bf)]()[_0x273431(0x246)]()['padStart'](0x2, '0'), _0x529623 = _0x1e0ed4[_0x273431(0x2a2)]()[_0x273431(0x246)]()['padStart'](0x2, '0');
            var _0x581584 = _0xddd390[_0x273431(0x351)][_0x273431(0x3b5)](), _0x3f44ff = _0x37fbfd ?? '', _0x5a1472 = {
                    '%USERNAME%': _0x66a873,
                    '%SOURCE_TYPE%': _0x8bbbb7,
                    '%SHORTCODE%': _0x3f44ff,
                    '%YEAR%': _0x29f066,
                    '%2-YEAR%': _0x29f066[_0x273431(0x1dc)](-0x2),
                    '%MONTH%': _0x4e6759,
                    '%DAY%': _0x3a1fd1,
                    '%HOUR%': _0x41d5af,
                    '%MINUTE%': _0x5bf049,
                    '%SECOND%': _0x529623,
                    '%ORIGINAL_NAME%': _0xf50e14,
                    '%ORIGINAL_NAME_FIRST%': _0xf50e14[_0x273431(0x293)]('_')['at'](0x0)
                };
            _0x581584 = _0x581584[_0x273431(0x1cb)](/%[\w\-]+%/g, function (_0x4e48bc) {
                return _0x5a1472[_0x4e48bc] || _0x4e48bc;
            });
            const _0x1daf0f = _0x66a873 + '_' + _0xf50e14 + '.' + _0x31ad8b;
            _0x3017dc[_0x273431(0x307)] = URL[_0x273431(0x39c)](_0xeac64e), _0x3017dc[_0x273431(0x44f)]('download', _0x282c20[_0x273431(0x3a5)] ? _0x581584 + '.' + _0x31ad8b : _0x1daf0f), _0x3017dc[_0x273431(0x27a)](), _0x3017dc[_0x273431(0x3be)]();
        }
        async function _0x51f95e(_0xd5ab91, _0x485468) {
            const _0x171717 = _0x47aa26;
            let _0x42a52d = new Date()['getTime'](), _0x2e4a22 = Math[_0x171717(0x3c2)](_0x42a52d / 0x3e8), _0x5eb1b9 = _0x4434b7(_0xd5ab91)[_0x171717(0x41f)]('data-username') ? _0x4434b7(_0xd5ab91)[_0x171717(0x41f)](_0x171717(0x260)) : _0xddd390[_0x171717(0x43d)];
            !_0x5eb1b9 && _0x4434b7(_0xd5ab91)[_0x171717(0x41f)](_0x171717(0x36a)) && (_0x73b19f(_0x171717(0x3ff), _0x4434b7(_0xd5ab91)[_0x171717(0x41f)]('data-href')), _0x5eb1b9 = await _0x355892(_0x4434b7(_0xd5ab91)[_0x171717(0x41f)]('data-path'))[_0x171717(0x328)](_0xcd4720 => {
                const _0x5705b0 = _0x171717;
                _0x73b19f(_0x5705b0(0x345), _0xcd4720[_0x5705b0(0x402)]);
            }), _0x5eb1b9 == null && (_0x5eb1b9 = _0x171717(0x1c3)));
            _0x282c20[_0x171717(0x21f)] && _0x4434b7(_0xd5ab91)[_0x171717(0x41f)](_0x171717(0x1f7)) && (_0x2e4a22 = parseInt(_0x4434b7(_0xd5ab91)[_0x171717(0x41f)](_0x171717(0x1f7))));
            if (_0x282c20['FORCE_RESOURCE_VIA_MEDIA']) {
                _0x2c4ade(!![]);
                let _0x235c30 = await _0x981f7b(_0x4434b7(_0xd5ab91)[_0x171717(0x41f)]('media-id'));
                _0x2c4ade(![]);
                if (_0x235c30[_0x171717(0x291)] === 'ok') {
                    var _0x1f80e8 = null;
                    _0x235c30[_0x171717(0x41b)][0x0][_0x171717(0x428)] ? _0x1f80e8 = _0x235c30[_0x171717(0x41b)][0x0]['video_versions'][0x0]['url'] : (_0x235c30[_0x171717(0x41b)][0x0]['image_versions2'][_0x171717(0x329)]['sort'](function (_0x10861f, _0x4d6caa) {
                        const _0x17ca97 = _0x171717;
                        let _0x15195a = new URL(_0x10861f['url'])[_0x17ca97(0x2e8)][_0x17ca97(0x368)](_0x17ca97(0x36e)), _0x24c717 = new URL(_0x4d6caa['url'])['searchParams'][_0x17ca97(0x368)](_0x17ca97(0x36e));
                        if (_0x15195a && _0x24c717) {
                            if (_0x15195a['length'] > _0x24c717[_0x17ca97(0x3ea)])
                                return 0x1;
                            if (_0x15195a[_0x17ca97(0x3ea)] < _0x24c717[_0x17ca97(0x3ea)])
                                return -0x1;
                        } else {
                            if (_0x10861f[_0x17ca97(0x30d)] < _0x4d6caa[_0x17ca97(0x30d)])
                                return 0x1;
                            if (_0x10861f['width'] > _0x4d6caa['width'])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x1f80e8 = _0x235c30[_0x171717(0x41b)][0x0][_0x171717(0x431)][_0x171717(0x329)][0x0][_0x171717(0x3a0)]);
                    if (_0x485468) {
                        let _0x123e1c = new URL(_0x1f80e8);
                        _0x123e1c[_0x171717(0x23d)] = _0x171717(0x415), _0x45e777(_0x123e1c[_0x171717(0x307)]);
                    } else
                        _0x3e6c2e(_0x1f80e8, _0x5eb1b9, _0x4434b7(_0xd5ab91)['attr']('data-name'), _0x2e4a22, _0x4434b7(_0xd5ab91)['attr'](_0x171717(0x3c5)), _0x4434b7(_0xd5ab91)['attr']('data-path'));
                } else {
                    if (_0x282c20[_0x171717(0x399)]) {
                        if (_0x485468) {
                            let _0x2c8b2c = new URL(_0x4434b7(_0xd5ab91)[_0x171717(0x41f)](_0x171717(0x339)));
                            _0x2c8b2c[_0x171717(0x23d)] = 'scontent.cdninstagram.com', _0x45e777(_0x2c8b2c[_0x171717(0x307)]);
                        } else
                            _0x3e6c2e(_0x4434b7(_0xd5ab91)[_0x171717(0x41f)](_0x171717(0x339)), _0x5eb1b9, _0x4434b7(_0xd5ab91)['attr'](_0x171717(0x385)), _0x2e4a22, _0x4434b7(_0xd5ab91)['attr'](_0x171717(0x3c5)), _0x4434b7(_0xd5ab91)[_0x171717(0x41f)](_0x171717(0x36a)));
                    } else
                        alert(_0x171717(0x288) + _0x235c30[_0x171717(0x402)]);
                    _0x73b19f(_0x235c30);
                }
            } else
                _0x3e6c2e(_0x4434b7(_0xd5ab91)[_0x171717(0x41f)](_0x171717(0x339)), _0x5eb1b9, _0x4434b7(_0xd5ab91)[_0x171717(0x41f)](_0x171717(0x385)), _0x2e4a22, _0x4434b7(_0xd5ab91)[_0x171717(0x41f)]('data-type'), _0x4434b7(_0xd5ab91)['attr'](_0x171717(0x36a)));
        }
        function _0x35c03d() {
            const _0x3d1f4d = _0x47aa26;
            for (let _0x19a391 of _0xddd390[_0x3d1f4d(0x2bd)]) {
                _0x73b19f(_0x3d1f4d(0x38b), _0x19a391), GM_unregisterMenuCommand(_0x19a391);
            }
            _0xddd390[_0x3d1f4d(0x2bd)][_0x3d1f4d(0x26d)](GM_registerMenuCommand(_0x414c8a(_0x3d1f4d(0x3a2)), () => {
                _0x386c1c();
            }, { 'accessKey': 'w' })), _0xddd390[_0x3d1f4d(0x2bd)][_0x3d1f4d(0x26d)](GM_registerMenuCommand(_0x414c8a(_0x3d1f4d(0x453)), () => {
                GM_openInTab('https://ko-fi.com/snkoarashi', { 'active': !![] });
            }, { 'accessKey': 'd' })), _0xddd390[_0x3d1f4d(0x2bd)]['push'](GM_registerMenuCommand(_0x414c8a(_0x3d1f4d(0x3db)), () => {
                _0x17d706();
            }, { 'accessKey': 'z' })), _0xddd390[_0x3d1f4d(0x2bd)]['push'](GM_registerMenuCommand(_0x414c8a(_0x3d1f4d(0x374)), () => {
                _0x39e975();
            }, { 'accessKey': 'f' })), _0xddd390[_0x3d1f4d(0x2bd)][_0x3d1f4d(0x26d)](GM_registerMenuCommand(_0x414c8a(_0x3d1f4d(0x28e)), () => {
                _0xebeb46();
            }, { 'accessKey': 'c' })), _0xddd390['registerMenuIds'][_0x3d1f4d(0x26d)](GM_registerMenuCommand(_0x414c8a('RELOAD_SCRIPT'), () => {
                _0x432289();
            }, { 'accessKey': 'r' }));
        }
        function _0x411e9f(_0x2c356c) {
            const _0x937b22 = _0x47aa26;
            if (!_0x282c20[_0x937b22(0x3ec)])
                return;
            const _0x2d3e79 = GM_getValue(_0x937b22(0x23b)) ?? new Date()['getTime'](), _0x3f3eaf = new Date()[_0x937b22(0x25c)]();
            _0x3f3eaf > parseInt(_0x2d3e79) + _0x2c356c * 0x3e8 && (GM_setValue(_0x937b22(0x23b), new Date()[_0x937b22(0x25c)]()), _0xebeb46());
        }
        function _0xebeb46() {
            const _0x4c534f = _0x47aa26, _0x2f4b0c = GM_info[_0x4c534f(0x1c1)][_0x4c534f(0x29d)], _0x1fe53b = _0x4c534f(0x1cf);
            GM_xmlhttpRequest({
                'method': _0x4c534f(0x29c),
                'url': _0x1fe53b,
                'onload': function (_0x231432) {
                    const _0x248a03 = _0x4c534f, _0x594480 = _0x231432[_0x248a03(0x37e)], _0x407ded = _0x594480[_0x248a03(0x330)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x407ded && _0x407ded[0x1]) {
                        const _0xdf1c89 = _0x407ded[0x1];
                        _0x73b19f(_0x248a03(0x2f4), _0x2f4b0c, '|', _0x248a03(0x253), _0xdf1c89), _0xdf1c89 !== _0x2f4b0c && typeof this['updatenotification'] === 'undefined' ? (this[_0x248a03(0x318)] = null, GM_notification({
                            'text': _0x414c8a(_0x248a03(0x31f)),
                            'title': _0x414c8a(_0x248a03(0x3a4)),
                            'tag': 'ig_helper_notice',
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x248a03(0x3e9),
                            'onclick': _0x2ba396 => {
                                const _0x5bf57d = _0x248a03;
                                _0x2ba396?.['preventDefault']();
                                var _0x419cca = GM_openInTab(GM_info[_0x5bf57d(0x1c1)]['downloadURL']);
                                setTimeout(() => {
                                    const _0x372db7 = _0x5bf57d;
                                    _0x419cca[_0x372db7(0x45b)]();
                                }, 0xfa);
                            }
                        })) : _0x73b19f(_0x248a03(0x2ab));
                    } else
                        console['error']('Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.');
                }
            });
        }
        function _0x386c1c() {
            const _0x26f99a = _0x47aa26;
            _0x4434b7(_0x26f99a(0x3f9))[_0x26f99a(0x3be)](), _0x43e820(), _0x4434b7(_0x26f99a(0x1d5))['text'](_0x26f99a(0x2e5)), _0x4434b7(_0x26f99a(0x407))[_0x26f99a(0x205)]('<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>');
            for (let _0x2e68b6 in _0x52c527) {
                _0x4434b7(_0x26f99a(0x3d1))['append']('<option\x20value=\x22' + _0x2e68b6 + '\x22\x20' + (_0xddd390[_0x26f99a(0x3b8)] == _0x2e68b6 ? 'selected' : '') + '>' + _0x52c527[_0x2e68b6] + _0x26f99a(0x2d6));
            }
            for (let _0x1ec5c6 in _0x282c20) {
                _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x26f99a(0x205)]('<label\x20class=\x22globalSettings' + (_0x221a9e['includes'](_0x1ec5c6) ? _0x26f99a(0x2e0) : '') + _0x26f99a(0x450) + _0x414c8a(_0x1ec5c6 + _0x26f99a(0x42d)) + _0x26f99a(0x319) + (_0x1ec5c6 + _0x26f99a(0x42d)) + '\x22><span\x20data-ih-locale=\x22' + _0x1ec5c6 + '\x22>' + _0x414c8a(_0x1ec5c6) + _0x26f99a(0x1d1) + _0x1ec5c6 + _0x26f99a(0x344) + (_0x282c20[_0x1ec5c6] === !![] ? _0x26f99a(0x39b) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x1ec5c6 === 'MODIFY_VIDEO_VOLUME' && _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22' + _0x1ec5c6 + '\x22]')['parent']('label')['on']('contextmenu', function (_0x3d27ad) {
                    const _0x157810 = _0x26f99a;
                    _0x3d27ad[_0x157810(0x2cb)](), _0x4434b7(this)['find'](_0x157810(0x37b))['length'] === 0x0 && (_0x4434b7(this)[_0x157810(0x205)](_0x157810(0x40a)), _0x4434b7(this)[_0x157810(0x237)]('#tempWrapper')[_0x157810(0x205)](_0x157810(0x1bb) + _0xddd390[_0x157810(0x35e)] + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0x4434b7(this)[_0x157810(0x237)](_0x157810(0x37b))[_0x157810(0x205)](_0x157810(0x1bb) + _0xddd390[_0x157810(0x35e)] + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x4434b7(this)[_0x157810(0x237)](_0x157810(0x37b))[_0x157810(0x205)](_0x157810(0x301) + _0xd8e662[_0x157810(0x448)] + _0x157810(0x256)));
                }), _0x1ec5c6 === _0x26f99a(0x3a5) && _0x4434b7(_0x26f99a(0x395) + _0x1ec5c6 + '\x22]')[_0x26f99a(0x3b4)]('label')['on'](_0x26f99a(0x3e7), function (_0x56913d) {
                    const _0x2928e3 = _0x26f99a;
                    _0x56913d[_0x2928e3(0x2cb)](), _0x4434b7(this)[_0x2928e3(0x3e3)](_0x2928e3(0x37b))['length'] === 0x0 && (_0x4434b7(this)[_0x2928e3(0x205)](_0x2928e3(0x40a)), _0x4434b7(this)[_0x2928e3(0x237)]('#tempWrapper')['append'](_0x2928e3(0x2d8) + _0xddd390[_0x2928e3(0x351)] + '\x22\x20/>'), _0x4434b7(this)[_0x2928e3(0x237)](_0x2928e3(0x37b))[_0x2928e3(0x205)](_0x2928e3(0x301) + _0xd8e662[_0x2928e3(0x448)] + _0x2928e3(0x256)));
                });
            }
        }
        function _0x17d706() {
            const _0x4a8a47 = _0x47aa26;
            _0x4434b7(_0x4a8a47(0x3f9))[_0x4a8a47(0x3be)](), _0x43e820(), _0x4434b7(_0x4a8a47(0x1d5))[_0x4a8a47(0x2e3)]('IG\x20Debug\x20DOM\x20Tree'), _0x4434b7(_0x4a8a47(0x1f3))[_0x4a8a47(0x205)](_0x4a8a47(0x1eb)), _0x4434b7(_0x4a8a47(0x1f3))[_0x4a8a47(0x205)](_0x4a8a47(0x39e)), _0x4434b7(_0x4a8a47(0x3a3))[_0x4a8a47(0x205)](_0x4a8a47(0x2d3) + _0x414c8a(_0x4a8a47(0x1f9)) + _0x4a8a47(0x231)), _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append'](_0x4a8a47(0x34f) + _0x414c8a('SELECT_AND_COPY') + _0x4a8a47(0x231)), _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x4a8a47(0x205)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>' + _0x414c8a(_0x4a8a47(0x28b)) + _0x4a8a47(0x320)), _0x4434b7(_0x4a8a47(0x3a3))[_0x4a8a47(0x205)](_0x4a8a47(0x259) + _0x414c8a(_0x4a8a47(0x1e5)) + _0x4a8a47(0x231)), _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x4a8a47(0x205)](_0x4a8a47(0x204) + _0x414c8a(_0x4a8a47(0x3e6)) + _0x4a8a47(0x231));
        }
        function _0x39e975() {
            const _0x5daa11 = _0x47aa26;
            _0x4434b7(_0x5daa11(0x3f9))[_0x5daa11(0x3be)](), _0x43e820(), _0x4434b7(_0x5daa11(0x1d5))[_0x5daa11(0x2e3)](_0x5daa11(0x30e)), _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')['append']('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x4434b7(_0x5daa11(0x3a3))[_0x5daa11(0x205)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>' + _0x414c8a(_0x5daa11(0x33b)) + '</a></button>'), _0x4434b7(_0x5daa11(0x3a3))[_0x5daa11(0x205)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x414c8a(_0x5daa11(0x1e5)) + _0x5daa11(0x231)), _0x4434b7(_0x5daa11(0x3a3))[_0x5daa11(0x205)](_0x5daa11(0x204) + _0x414c8a('REPORT_DISCORD') + '</a></button>');
        }
        function _0x45e777(_0x246ad6) {
            const _0x8ec6b1 = _0x47aa26;
            var _0x7a351f = document[_0x8ec6b1(0x311)]('a');
            _0x7a351f[_0x8ec6b1(0x307)] = _0x246ad6, _0x7a351f[_0x8ec6b1(0x222)] = _0x8ec6b1(0x336), document[_0x8ec6b1(0x1fc)]['appendChild'](_0x7a351f), _0x7a351f[_0x8ec6b1(0x27a)](), _0x7a351f['remove']();
        }
        function _0x432289() {
            const _0x2d0bd1 = _0x47aa26;
            clearInterval(_0xddd390[_0x2d0bd1(0x39a)]), _0xddd390[_0x2d0bd1(0x3ae)][_0x2d0bd1(0x43e)](_0x220190 => {
                const _0x5ac2c1 = _0x2d0bd1;
                _0x220190[_0x5ac2c1(0x1fa)][_0x5ac2c1(0x43e)](_0x547513 => {
                    const _0x5498c9 = _0x5ac2c1;
                    _0x4434b7(_0x220190[_0x5498c9(0x3b0)])[_0x5498c9(0x417)](_0x5498c9(0x27a), _0x547513);
                });
            }), _0xddd390['GL_registerEventList'] = [], _0x4434b7('.button_wrapper')[_0x2d0bd1(0x3be)](), _0x4434b7(_0x2d0bd1(0x3e8))[_0x2d0bd1(0x3be)](), _0x4434b7(_0x2d0bd1(0x31e))['removeAttr'](_0x2d0bd1(0x3dd)), _0xddd390[_0x2d0bd1(0x235)] = ![], _0xddd390[_0x2d0bd1(0x309)] = ![], _0xddd390[_0x2d0bd1(0x3d4)] = location[_0x2d0bd1(0x307)], _0xddd390[_0x2d0bd1(0x3df)][_0x2d0bd1(0x2a9)](), _0x73b19f('main\x20timer\x20re-register\x20completed');
        }
        function _0x73b19f(..._0x3dbd48) {
            const _0x28955f = _0x47aa26;
            var _0x213791 = new Date();
            _0xddd390['GL_logger'][_0x28955f(0x26d)]({
                'time': _0x213791['getTime'](),
                'content': [..._0x3dbd48]
            }), _0xddd390[_0x28955f(0x425)][_0x28955f(0x3ea)] > 0x3e8 && (_0xddd390[_0x28955f(0x425)] = [
                {
                    'time': _0x213791[_0x28955f(0x25c)](),
                    'content': [_0x28955f(0x356)]
                },
                ..._0xddd390[_0x28955f(0x425)][_0x28955f(0x35c)](-0x3e7)
            ]), console[_0x28955f(0x1ba)]('[' + _0x213791[_0x28955f(0x2af)]() + ']', ..._0x3dbd48);
        }
        function _0x64231e() {
            const _0x1f5df7 = _0x47aa26;
            for (let _0x5d7a38 in _0x282c20) {
                GM_getValue(_0x5d7a38) != null && typeof GM_getValue(_0x5d7a38) === _0x1f5df7(0x297) && (_0x282c20[_0x5d7a38] = GM_getValue(_0x5d7a38), _0x5d7a38 === _0x1f5df7(0x2c0) && GM_getValue(_0x5d7a38) !== !![] && (_0xddd390['videoVolume'] = 0x1));
            }
        }
        function _0x13e2ec(_0x1779c9, _0x185af9, _0x329f79, _0x866c3d = '') {
            const _0x1bfefa = _0x47aa26;
            _0x185af9[_0x1bfefa(0x3e3)](_0x1bfefa(0x3aa))[_0x1bfefa(0x3ea)] === 0x0 ? (_0x185af9[_0x1bfefa(0x205)](_0x1bfefa(0x387) + _0x866c3d + _0x1bfefa(0x2bb)), _0x185af9[_0x1bfefa(0x3e3)](_0x1bfefa(0x3aa))['append'](_0x1bfefa(0x352) + _0xddd390[_0x1bfefa(0x35e)] + _0x1bfefa(0x25b)), _0x185af9[_0x1bfefa(0x3e3)](_0x1bfefa(0x3a7))['attr'](_0x1bfefa(0x1d8), _0x1bfefa(0x45d) + (_0xddd390[_0x1bfefa(0x35e)] * 0x64 + '%')), _0x185af9[_0x1bfefa(0x3e3)](_0x1bfefa(0x3a7))['on'](_0x1bfefa(0x1ce), function () {
                const _0x280f72 = _0x1bfefa;
                var _0x369631 = _0x4434b7(this)[_0x280f72(0x390)]() * 0x64 + '%';
                _0xddd390['videoVolume'] = _0x4434b7(this)[_0x280f72(0x390)](), GM_setValue('G_VIDEO_VOLUME', _0x4434b7(this)[_0x280f72(0x390)]()), _0x4434b7(this)[_0x280f72(0x41f)](_0x280f72(0x1d8), _0x280f72(0x45d) + _0x369631), _0x1779c9['each'](function () {
                    const _0x1a3812 = _0x280f72;
                    _0x73b19f('(' + _0x329f79 + ')', 'video\x20volume\x20changed\x20#slider'), this['volume'] = _0xddd390[_0x1a3812(0x35e)];
                });
            }), _0x185af9['find'](_0x1bfefa(0x3a7))['on'](_0x1bfefa(0x424), function () {
                const _0x11e39a = _0x1bfefa;
                var _0xbcbdc2 = _0xddd390[_0x11e39a(0x35e)] * 0x64 + '%';
                _0x4434b7(this)['attr'](_0x11e39a(0x1d8), _0x11e39a(0x45d) + _0xbcbdc2), _0x4434b7(this)['val'](_0xddd390[_0x11e39a(0x35e)]), _0x1779c9[_0x11e39a(0x25e)](function () {
                    const _0x2f69ae = _0x11e39a;
                    _0x73b19f('(' + _0x329f79 + ')', _0x2f69ae(0x217)), this[_0x2f69ae(0x1d0)] = _0xddd390['videoVolume'];
                });
            }), _0x185af9[_0x1bfefa(0x3e3)](_0x1bfefa(0x3aa))['on'](_0x1bfefa(0x27a), function (_0x10dfcb) {
                const _0x140dfc = _0x1bfefa;
                _0x10dfcb['stopPropagation'](), _0x10dfcb[_0x140dfc(0x2cb)]();
            })) : _0x185af9[_0x1bfefa(0x3e3)](_0x1bfefa(0x3aa))['remove']();
        }
        var _0x1f8cab = null;
        function _0x1192d8(_0x1e8331) {
            const _0x284a12 = _0x47aa26;
            _0x466f51(), _0x4434b7(_0x284a12(0x1fc))[_0x284a12(0x205)](_0x284a12(0x406) + _0xd8e662[_0x284a12(0x448)] + _0x284a12(0x409));
            const _0x3a86ad = _0x4434b7(_0x284a12(0x26f)), _0x1f285b = _0x4434b7(_0x284a12(0x243)), _0x5d0554 = _0x4434b7('#iv_close'), _0x335ae9 = _0x4434b7(_0x284a12(0x34c));
            _0x335ae9['attr'](_0x284a12(0x443), _0x1e8331), _0x3a86ad[_0x284a12(0x444)]('display', _0x284a12(0x3ac));
            let _0x2ce414 = 0.75, _0xf42d71 = 0x0, _0x12a86f = 0x0, _0x36de1e = ![], _0x5af196 = ![], _0xddb31f, _0x430801;
            var _0xcd7582 = _0x335ae9[_0x284a12(0x21a)]();
            _0x1f8cab = setInterval(() => {
                const _0x17a38e = _0x284a12, _0x1ec20e = _0x335ae9[_0x17a38e(0x21a)]();
                _0x1ec20e[_0x17a38e(0x310)] !== _0xcd7582['left'] || _0x1ec20e[_0x17a38e(0x1e3)] !== _0xcd7582[_0x17a38e(0x1e3)] ? _0x5af196 = !![] : _0x5af196 = ![], _0xcd7582 = _0x1ec20e;
            }, 0x64), _0x335ae9['on'](_0x284a12(0x208), () => {
                const _0x36d3bd = _0x284a12;
                _0xf42d71 = (window[_0x36d3bd(0x452)] - _0x335ae9[0x0]['width']) / 0x2, _0x12a86f = (window[_0x36d3bd(0x2a1)] - _0x335ae9[0x0]['height']) / 0x2, _0x250171();
            }), _0x335ae9['on'](_0x284a12(0x1f0), _0x2e0ba3 => {
                _0x2e0ba3['preventDefault']();
            }), _0x335ae9['on'](_0x284a12(0x27a), _0x903f71 => {
                const _0x5b2d97 = _0x284a12;
                _0x903f71[_0x5b2d97(0x2cb)](), _0x903f71[_0x5b2d97(0x1e4)](), !_0x5af196 && (_0x2ce414 <= 0.8 ? (_0x2ce414 += 1.25, _0x2ce414 = Math['min'](Math[_0x5b2d97(0x27b)](0.75, _0x2ce414), 0x5)) : _0x2ce414 = 0.75, _0x250171());
            }), _0x335ae9['on'](_0x284a12(0x38c), _0x26b9c2 => {
                const _0x37ab0b = _0x284a12;
                _0x26b9c2[_0x37ab0b(0x2cb)](), _0x2ce414 += _0x26b9c2[_0x37ab0b(0x362)]['deltaY'] > 0x0 ? -0.15 : 0.15, _0x2ce414 = Math[_0x37ab0b(0x23e)](Math[_0x37ab0b(0x27b)](0.75, _0x2ce414), 0x5), _0x250171();
            }), _0x335ae9['on'](_0x284a12(0x29e), _0x37cd2e => {
                const _0x41576e = _0x284a12;
                _0x36de1e = !![], _0xddb31f = _0x37cd2e[_0x41576e(0x366)] - _0xf42d71, _0x430801 = _0x37cd2e[_0x41576e(0x248)] - _0x12a86f, _0x335ae9[_0x41576e(0x444)](_0x41576e(0x20f), _0x41576e(0x423));
            }), _0x335ae9['on'](_0x284a12(0x23f), () => {
                const _0x38034d = _0x284a12;
                _0x36de1e = ![], _0x335ae9[_0x38034d(0x444)](_0x38034d(0x20f), _0x38034d(0x1c5));
            }), _0x4434b7(document)['on']('mousemove.igHelper', _0x5908ed => {
                const _0x2d7db8 = _0x284a12;
                if (!_0x36de1e)
                    return;
                _0x5908ed[_0x2d7db8(0x2cb)](), _0xf42d71 = _0x5908ed['pageX'] - _0xddb31f, _0x12a86f = _0x5908ed[_0x2d7db8(0x248)] - _0x430801, _0x250171();
            }), _0x3a86ad['on'](_0x284a12(0x27a), () => {
                _0x466f51();
            }), _0x5d0554['on']('click', () => {
                _0x466f51();
            }), _0x1f285b['on'](_0x284a12(0x27a), _0x9b5a73 => {
                const _0x4308b9 = _0x284a12;
                _0x9b5a73['preventDefault'](), _0x9b5a73[_0x4308b9(0x1e4)]();
            });
            function _0x250171() {
                const _0x434b3b = _0x284a12;
                _0x335ae9['css'](_0x434b3b(0x436), _0x434b3b(0x378) + _0x2ce414 + ')'), _0x335ae9['css'](_0x434b3b(0x310), _0xf42d71 + 'px'), _0x335ae9[_0x434b3b(0x444)](_0x434b3b(0x1e3), _0x12a86f + 'px');
            }
        }
        function _0x466f51() {
            const _0x49f05e = _0x47aa26;
            clearInterval(_0x1f8cab), _0x4434b7('#imageViewer')[_0x49f05e(0x3be)](), _0x4434b7(document)[_0x49f05e(0x417)](_0x49f05e(0x43f));
        }
        function _0x3d6840() {
            const _0x2d6654 = _0x47aa26;
            var _0x489560 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x2d6654(0x1bc),
                        'NOTICE_UPDATE_CONTENT': _0x2d6654(0x2ec),
                        'CHECK_UPDATE': 'Checking\x20for\x20Script\x20Updates',
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': 'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
                        'RELOAD_SCRIPT': _0x2d6654(0x3f4),
                        'DONATE': 'Donate',
                        'FEEDBACK': _0x2d6654(0x360),
                        'IMAGE_VIEWER': 'Open\x20Image\x20In\x20Viewer',
                        'NEW_TAB': _0x2d6654(0x1d9),
                        'SHOW_DOM_TREE': 'Show\x20DOM\x20Tree',
                        'SELECT_AND_COPY': 'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
                        'REPORT_GITHUB': 'Report\x20an\x20Issue\x20on\x20GitHub',
                        'REPORT_DISCORD': _0x2d6654(0x321),
                        'REPORT_FORK': _0x2d6654(0x41d),
                        'DEBUG': _0x2d6654(0x1dd),
                        'CLOSE': _0x2d6654(0x2ff),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0x2d6654(0x335),
                        'BATCH_DOWNLOAD_DIRECT': _0x2d6654(0x275),
                        'IMG': _0x2d6654(0x25f),
                        'VID': _0x2d6654(0x45a),
                        'DW': _0x2d6654(0x3c1),
                        'DW_ALL': _0x2d6654(0x275),
                        'THUMBNAIL_INTRO': _0x2d6654(0x33e),
                        'LOAD_BLOB_ONE': _0x2d6654(0x3cf),
                        'LOAD_BLOB_MULTIPLE': _0x2d6654(0x37a),
                        'LOAD_BLOB_RELOAD': 'Detecting\x20Blob\x20Media,\x20reloading...',
                        'NO_CHECK_RESOURCE': _0x2d6654(0x2ce),
                        'NO_VID_URL': _0x2d6654(0x451),
                        'SETTING': _0x2d6654(0x1bd),
                        'AUTO_RENAME': _0x2d6654(0x3b6),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': _0x2d6654(0x446),
                        'RENAME_LOCATE_DATE': 'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
                        'DISABLE_VIDEO_LOOPING': _0x2d6654(0x255),
                        'HTML5_VIDEO_CONTROL': _0x2d6654(0x2ae),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x2d6654(0x3f3),
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': 'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
                        'SCROLL_BUTTON': _0x2d6654(0x44e),
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x2d6654(0x1f5),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x2d6654(0x313),
                        'AUTO_RENAME_INTRO': _0x2d6654(0x331),
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': _0x2d6654(0x361),
                        'RENAME_LOCATE_DATE_INTRO': 'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x2d6654(0x2c9),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x2d6654(0x22b),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x2d6654(0x2b4),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x2d6654(0x2dc),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x2d6654(0x2e4),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x2d6654(0x37f),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x2d6654(0x347),
                        'SCROLL_BUTTON_INTRO': 'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x2d6654(0x373),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x2d6654(0x252),
                        'SKIP_VIEW_STORY_CONFIRM': _0x2d6654(0x1ee),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': 'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.'
                    }
                }, _0x50ee4e = Object[_0x2d6654(0x1df)]({}, _0x489560, _0xddd390[_0x2d6654(0x438)]), _0x5d511e = Object[_0x2d6654(0x284)](_0x50ee4e)[_0x2d6654(0x1da)]()[_0x2d6654(0x3f8)]((_0x1215bd, _0x45095d) => {
                    return _0x1215bd[_0x45095d] = _0x50ee4e[_0x45095d], _0x1215bd;
                }, {});
            return _0x5d511e;
        }
        async function _0x55eaa4(_0x1d2d69) {
            return new Promise((_0x142902, _0x7468f9) => {
                const _0xa72a8e = a0_0x3a70;
                GM_xmlhttpRequest({
                    'method': _0xa72a8e(0x29c),
                    'url': _0xa72a8e(0x37d) + _0x1d2d69 + _0xa72a8e(0x1c4),
                    'onload': function (_0x49b198) {
                        const _0x555d18 = _0xa72a8e;
                        try {
                            let _0x1ae555 = JSON[_0x555d18(0x268)](_0x49b198[_0x555d18(0x2fe)]);
                            _0x142902(_0x1ae555);
                        } catch (_0x206189) {
                            _0x7468f9(_0x206189);
                        }
                    },
                    'onerror': function (_0xe9361d) {
                        const _0x16251d = _0xa72a8e;
                        _0x73b19f(_0x16251d(0x323), _0x16251d(0x388), _0xe9361d), _0x7468f9(_0xe9361d);
                    }
                });
            });
        }
        function _0x414c8a(_0x2613f6) {
            const _0x580840 = _0x47aa26, _0x5eebb3 = _0x3d6840();
            return _0x5eebb3[_0xddd390[_0x580840(0x3b8)]] != undefined && _0x5eebb3[_0xddd390['lang']][_0x2613f6] != undefined ? _0x5eebb3[_0xddd390[_0x580840(0x3b8)]][_0x2613f6] : _0x5eebb3[_0x580840(0x226)][_0x2613f6];
        }
        function _0x3ab566() {
            const _0x1a0fc9 = _0x47aa26;
            _0x4434b7('[data-ih-locale]')[_0x1a0fc9(0x25e)](function () {
                const _0x91c5f0 = _0x1a0fc9;
                _0x4434b7(this)[_0x91c5f0(0x2e3)](_0x414c8a(_0x4434b7(this)['attr']('data-ih-locale')));
            }), _0x4434b7(_0x1a0fc9(0x35b))[_0x1a0fc9(0x25e)](function () {
                const _0x5db623 = _0x1a0fc9;
                _0x4434b7(this)['attr'](_0x5db623(0x32c), _0x414c8a(_0x4434b7(this)[_0x5db623(0x41f)](_0x5db623(0x3ca))));
            });
        }
        _0x4434b7(function () {
            const _0x51bfb5 = _0x47aa26;
            function _0x305d63(_0x28e4c9) {
                const _0x18d51d = a0_0x3a70;
                var _0x11388f = [];
                for (var _0x4d449b of _0x28e4c9) {
                    _0x11388f[_0x18d51d(0x26d)]({
                        'tagName': _0x4d449b[_0x18d51d(0x221)],
                        'id': _0x4d449b['id'],
                        'className': _0x4d449b[_0x18d51d(0x325)]
                    });
                }
                return _0x11388f;
            }
            function _0x380190() {
                const _0x3620c9 = a0_0x3a70;
                let _0x30af63 = _0x4434b7(_0x3620c9(0x3b9))[0x0];
                var _0x366c3e = '';
                _0xddd390[_0x3620c9(0x425)]['forEach'](_0x245f4a => {
                    const _0x1270a0 = _0x3620c9;
                    var _0x273ca1 = JSON['stringify'](_0x245f4a[_0x1270a0(0x3c3)], function (_0x36eebe, _0x36b786) {
                        const _0x296215 = _0x1270a0;
                        if (Array['isArray'](this)) {
                            if (typeof _0x36b786 === _0x296215(0x40c) && _0x36b786 instanceof jQuery)
                                return _0x305d63(_0x36b786);
                            return _0x36b786;
                        } else
                            return _0x36b786;
                    }, '\x09');
                    _0x366c3e += new Date(_0x245f4a[_0x1270a0(0x42e)])['toISOString']() + ':\x20' + _0x273ca1 + '\x0a';
                }), _0x4434b7(_0x3620c9(0x403))[_0x3620c9(0x2e3)](_0x3620c9(0x24a) + _0x366c3e + '\x0a-----\x0a\x0aLocation:\x20' + location['pathname'] + _0x3620c9(0x42f) + _0x30af63['innerHTML']);
            }
            _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), _0x51bfb5(0x26b), function () {
                _0x380190();
            }), _0x4434b7('body')['on'](_0x51bfb5(0x27a), _0x51bfb5(0x2cd), function () {
                const _0x1c2372 = _0x51bfb5;
                _0x4434b7(_0x1c2372(0x403))[_0x1c2372(0x271)](), document[_0x1c2372(0x359)](_0x1c2372(0x24c));
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE', function () {
                const _0x539244 = _0x51bfb5;
                _0x4434b7(_0x539244(0x403))['text']()[_0x539244(0x3ea)] === 0x0 && _0x380190();
                var _0xdab48e = _0x4434b7('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x539244(0x2e3)](), _0x1f9452 = document[_0x539244(0x311)]('a'), _0x5ad928 = new Blob([_0xdab48e], { 'type': _0x539244(0x295) });
                _0x1f9452[_0x539244(0x307)] = URL[_0x539244(0x39c)](_0x5ad928), _0x1f9452[_0x539244(0x1e6)] = 'DOMTree-' + new Date()[_0x539244(0x25c)]() + _0x539244(0x1ea), document[_0x539244(0x1fc)][_0x539244(0x3f2)](_0x1f9452), _0x1f9452[_0x539244(0x27a)](), _0x1f9452[_0x539244(0x3be)]();
            }), _0x4434b7('body')['on'](_0x51bfb5(0x27a), _0x51bfb5(0x2b0), function () {
                const _0x40ce6d = _0x51bfb5;
                _0x4434b7(this)[_0x40ce6d(0x3b4)](_0x40ce6d(0x37b))['length'] > 0x0 ? _0x4434b7(this)[_0x40ce6d(0x3b4)](_0x40ce6d(0x37b))[_0x40ce6d(0x429)](0xfa, function () {
                    const _0x44f3f2 = _0x40ce6d;
                    _0x4434b7(this)[_0x44f3f2(0x3be)]();
                }) : _0x4434b7(_0x40ce6d(0x3f9))[_0x40ce6d(0x3be)]();
            }), _0x4434b7(window)['on'](_0x51bfb5(0x36c), function (_0x133ced) {
                const _0x1ac96e = _0x51bfb5;
                _0x133ced[_0x1ac96e(0x274)] == '81' && _0x133ced[_0x1ac96e(0x422)] && (_0x4434b7('.IG_POPUP_DIG')[_0x1ac96e(0x3be)](), _0x133ced[_0x1ac96e(0x2cb)]()), _0x133ced[_0x1ac96e(0x274)] == '87' && _0x133ced[_0x1ac96e(0x422)] && (_0x386c1c(), _0x133ced[_0x1ac96e(0x2cb)]()), _0x133ced[_0x1ac96e(0x274)] == '90' && _0x133ced[_0x1ac96e(0x422)] && (_0x17d706(), _0x133ced['preventDefault']()), _0x133ced[_0x1ac96e(0x274)] == '82' && _0x133ced[_0x1ac96e(0x422)] && (_0x432289(), _0x133ced[_0x1ac96e(0x2cb)]()), _0x133ced[_0x1ac96e(0x274)] == '83' && _0x133ced['altKey'] && (location[_0x1ac96e(0x307)][_0x1ac96e(0x330)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x4434b7(_0x1ac96e(0x242))[_0x1ac96e(0x3ea)] > 0x0 && _0x4434b7(_0x1ac96e(0x242))?.[_0x1ac96e(0x1fa)](_0x1ac96e(0x27a)), location[_0x1ac96e(0x307)][_0x1ac96e(0x330)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x4434b7(_0x1ac96e(0x370))['length'] > 0x0 && _0x4434b7(_0x1ac96e(0x370))?.[_0x1ac96e(0x1fa)](_0x1ac96e(0x27a)), _0x133ced[_0x1ac96e(0x2cb)]());
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x375), _0x51bfb5(0x1c9), function () {
                const _0x30bef0 = _0x51bfb5;
                var _0x289ad5 = _0x4434b7(this)[_0x30bef0(0x41f)]('id');
                if (_0x289ad5 && _0x282c20[_0x289ad5] !== undefined) {
                    let _0x36706e = _0x4434b7(this)[_0x30bef0(0x245)]('checked');
                    GM_setValue(_0x289ad5, _0x36706e), _0x282c20[_0x289ad5] = _0x36706e, console[_0x30bef0(0x1ba)](_0x30bef0(0x3c8), _0x289ad5, _0x36706e);
                }
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), '.IG_POPUP_DIG\x20.globalSettings', function (_0x4a967a) {
                const _0x583cae = _0x51bfb5;
                _0x4434b7(this)['find']('#tempWrapper')['length'] > 0x0 && _0x4a967a[_0x583cae(0x2cb)]();
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x375), _0x51bfb5(0x2f9), function () {
                const _0x2abb38 = _0x51bfb5;
                let _0xbdb879 = _0x4434b7(this)['val']();
                _0x4434b7(this)[_0x2abb38(0x41f)](_0x2abb38(0x247)) == _0x2abb38(0x21b) ? _0x4434b7(this)[_0x2abb38(0x251)]()[_0x2abb38(0x390)](_0xbdb879) : _0x4434b7(this)['prev']()[_0x2abb38(0x390)](_0xbdb879), _0xbdb879 >= 0x0 && _0xbdb879 <= 0x1 && (_0xddd390[_0x2abb38(0x35e)] = _0xbdb879, GM_setValue(_0x2abb38(0x383), _0xbdb879));
            }), _0x4434b7('body')['on']('input', _0x51bfb5(0x2f9), function () {
                const _0x5e554b = _0x51bfb5;
                if (_0x4434b7(this)['attr'](_0x5e554b(0x247)) == 'range') {
                    let _0x295368 = _0x4434b7(this)[_0x5e554b(0x390)]();
                    _0x4434b7(this)['next']()[_0x5e554b(0x390)](_0x295368);
                } else {
                    let _0x574f5b = _0x4434b7(this)[_0x5e554b(0x390)]();
                    _0x574f5b >= 0x0 && _0x574f5b <= 0x1 ? _0x4434b7(this)[_0x5e554b(0x3b2)]()[_0x5e554b(0x390)](_0x574f5b) : _0x574f5b < 0x0 ? _0x4434b7(this)[_0x5e554b(0x390)](0x0) : _0x4434b7(this)[_0x5e554b(0x390)](0x1);
                }
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x1ce), _0x51bfb5(0x2f3), function () {
                const _0x473666 = _0x51bfb5;
                GM_setValue(_0x473666(0x23a), _0x4434b7(this)[_0x473666(0x390)]()), _0xddd390[_0x473666(0x351)] = _0x4434b7(this)[_0x473666(0x390)]();
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), 'a[data-needed=\x22direct\x22]', function (_0x50698f) {
                const _0x2564f3 = _0x51bfb5;
                _0x50698f[_0x2564f3(0x2cb)](), _0x51f95e(this);
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), '.IG_POPUP_DIG_BODY\x20.newTab', function () {
                const _0x4f2710 = _0x51bfb5;
                if (_0x282c20['FORCE_RESOURCE_VIA_MEDIA'] && _0x282c20[_0x4f2710(0x3de)])
                    _0x51f95e(_0x4434b7(this)[_0x4f2710(0x3b4)]()[_0x4f2710(0x237)]('a')['first']()[0x0], !![]);
                else {
                    var _0xd022b3 = new URL(_0x4434b7(this)[_0x4f2710(0x3b4)]()[_0x4f2710(0x237)]('a')[_0x4f2710(0x41f)](_0x4f2710(0x339)));
                    _0xd022b3['host'] = 'scontent.cdninstagram.com', _0x45e777(_0xd022b3[_0x4f2710(0x307)]);
                }
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), _0x51bfb5(0x1d2), function () {
                const _0x5c18d0 = _0x51bfb5;
                let _0x18fdc8 = new Date()[_0x5c18d0(0x25c)]();
                _0x282c20[_0x5c18d0(0x21f)] && _0x4434b7(this)[_0x5c18d0(0x3b4)]()[_0x5c18d0(0x237)]('a')[_0x5c18d0(0x41f)](_0x5c18d0(0x1f7)) && (_0x18fdc8 = _0x4434b7(this)['parent']()['children']('a')[_0x5c18d0(0x41f)](_0x5c18d0(0x1f7)));
                let _0x31cff9 = _0x4434b7(this)[_0x5c18d0(0x3b4)]()[_0x5c18d0(0x237)]('a')[_0x5c18d0(0x41f)](_0x5c18d0(0x36a)) ?? _0x4434b7(_0x5c18d0(0x324))['text']();
                _0x3e6c2e(_0x4434b7(this)[_0x5c18d0(0x3b4)]()['children']('a')[_0x5c18d0(0x3e3)](_0x5c18d0(0x36b))[_0x5c18d0(0x2fb)]()[_0x5c18d0(0x41f)](_0x5c18d0(0x443)), _0x4434b7(this)['parent']()['children']('a')[_0x5c18d0(0x41f)](_0x5c18d0(0x260)), _0x5c18d0(0x3a1), _0x18fdc8, 'jpg', _0x31cff9);
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), _0x51bfb5(0x242), function () {
                _0x21eced(!![]);
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), '.IG_DWSTORY_ALL', function () {
                _0x3cf387();
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), '.IG_DWNEWTAB', function (_0xe6b478) {
                _0xe6b478['preventDefault'](), _0x21eced(!![], !![], !![]);
            }), _0x4434b7(_0x51bfb5(0x1fc))['on']('click', _0x51bfb5(0x2ca), function () {
                _0x68cb65(!![]);
            }), _0x4434b7('body')['on'](_0x51bfb5(0x27a), _0x51bfb5(0x3e5), function (_0x55ec03) {
                _0x55ec03['stopPropagation'](), _0x105166(!![]);
            }), _0x4434b7('body')['on'](_0x51bfb5(0x27a), '.IG_DWHISTORY', function () {
                _0x39a41b(!![]);
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), _0x51bfb5(0x228), function () {
                _0xc4edd5();
            }), _0x4434b7('body')['on']('click', _0x51bfb5(0x20a), function (_0x4f0011) {
                const _0x558c90 = _0x51bfb5;
                _0x4f0011[_0x558c90(0x2cb)](), _0x39a41b(!![], !![]);
            }), _0x4434b7(_0x51bfb5(0x1fc))['on']('click', _0x51bfb5(0x2df), function () {
                _0x3cfab8(!![]);
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), '.IG_REELS', function () {
                _0x358fd2(!![], !![]);
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), '.IG_REELS_NEWTAB', function () {
                _0x358fd2(!![], !![], !![]);
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x27a), _0x51bfb5(0x294), function () {
                _0x358fd2(!![], ![]);
            }), _0x4434b7('body')['on']('mousedown', _0x51bfb5(0x206), function (_0xb80641) {
                const _0x56ef72 = _0x51bfb5;
                if (_0xb80641[_0x56ef72(0x274)] === 0x3 || _0xb80641[_0x56ef72(0x274)] === 0x2) {
                    if (location['href'] === _0x56ef72(0x412) && _0x282c20['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0xb80641['preventDefault']();
                        if (_0x4434b7(this)[_0x56ef72(0x3e3)]('canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img')[_0x56ef72(0x3ea)] > 0x0) {
                            const _0x284d44 = _0x56ef72(0x412) + _0x4434b7(this)[_0x56ef72(0x237)](_0x56ef72(0x41a))[_0x56ef72(0x369)]()[_0x56ef72(0x2e3)]();
                            _0xb80641[_0x56ef72(0x274)] === 0x2 ? GM_openInTab(_0x284d44) : location[_0x56ef72(0x307)] = _0x284d44;
                        }
                    }
                }
            }), _0x4434b7(_0x51bfb5(0x1fc))['on']('change', '.IG_POPUP_DIG_TITLE\x20.checkbox', function () {
                const _0x21a7a8 = _0x51bfb5;
                var _0x54fd96 = _0x4434b7(this)[_0x21a7a8(0x3e3)](_0x21a7a8(0x1ce))[_0x21a7a8(0x245)](_0x21a7a8(0x39b));
                _0x4434b7('.IG_POPUP_DIG_BODY\x20.inner_box')[_0x21a7a8(0x25e)](function () {
                    const _0x328fcd = _0x21a7a8;
                    _0x4434b7(this)[_0x328fcd(0x245)](_0x328fcd(0x39b), _0x54fd96);
                });
            }), _0x4434b7(_0x51bfb5(0x1fc))['on']('change', _0x51bfb5(0x3d2), function () {
                const _0xc88e7c = _0x51bfb5;
                var _0xea8a5a = _0x4434b7('.IG_POPUP_DIG_BODY\x20.inner_box:checked')[_0xc88e7c(0x3ea)], _0x5283c0 = _0x4434b7(_0xc88e7c(0x3d2))[_0xc88e7c(0x3ea)];
                _0x4434b7(_0xc88e7c(0x32e))[_0xc88e7c(0x3e3)](_0xc88e7c(0x1ce))[_0xc88e7c(0x245)](_0xc88e7c(0x39b), _0xea8a5a == _0x5283c0);
            }), _0x4434b7('body')['on'](_0x51bfb5(0x27a), _0x51bfb5(0x346), function () {
                const _0x36c355 = _0x51bfb5;
                let _0x1b0298 = 0x0;
                _0x4434b7(_0x36c355(0x305))['each'](function () {
                    const _0x5f5bb8 = _0x36c355;
                    _0x4434b7(this)[_0x5f5bb8(0x3b2)]()[_0x5f5bb8(0x237)](_0x5f5bb8(0x1ce))[_0x5f5bb8(0x245)](_0x5f5bb8(0x39b)) && (_0x4434b7(this)[_0x5f5bb8(0x1fa)](_0x5f5bb8(0x27a)), _0x1b0298++);
                }), _0x1b0298 == 0x0 && alert(_0x414c8a(_0x36c355(0x1e8)));
            }), _0x4434b7(_0x51bfb5(0x1fc))['on'](_0x51bfb5(0x375), _0x51bfb5(0x30a), function () {
                const _0x170a15 = _0x51bfb5;
                GM_setValue(_0x170a15(0x3b8), _0x4434b7(this)[_0x170a15(0x390)]()), _0xddd390['lang'] = _0x4434b7(this)[_0x170a15(0x390)](), _0xddd390[_0x170a15(0x3b8)]?.[_0x170a15(0x38e)]('en') || _0xddd390[_0x170a15(0x438)][_0xddd390['lang']] != null ? (_0x3ab566(), _0x35c03d()) : _0x55eaa4(_0xddd390[_0x170a15(0x3b8)])['then'](_0x189339 => {
                    const _0x578556 = _0x170a15;
                    _0xddd390[_0x578556(0x438)][_0xddd390['lang']] = _0x189339, _0x3ab566(), _0x35c03d();
                })[_0x170a15(0x328)](_0x3b609b => {
                    const _0x203af4 = _0x170a15;
                    console['error'](_0x203af4(0x2ad), _0x3b609b);
                });
            }), _0x4434b7(_0x51bfb5(0x1fc))['on']('click', _0x51bfb5(0x389), function () {
                const _0xd29a8e = _0x51bfb5;
                _0x4434b7(_0xd29a8e(0x305))['each'](function () {
                    const _0x55b6bc = _0xd29a8e;
                    _0x4434b7(this)[_0x55b6bc(0x1fa)](_0x55b6bc(0x27a));
                });
            });
            const _0x3c58ac = new MutationObserver(_0x4ab760 => {
                const _0x1ada86 = _0x51bfb5;
                for (const _0x3bb0a4 of _0x4ab760) {
                    _0x3bb0a4[_0x1ada86(0x247)] === _0x1ada86(0x1ff) && _0x3bb0a4[_0x1ada86(0x322)][_0x1ada86(0x43e)](_0x3ac23e => {
                        const _0xdb32b4 = _0x1ada86, _0x4e95f6 = _0x4434b7(_0x3ac23e)[_0xdb32b4(0x3e3)](_0xdb32b4(0x212));
                        if (location[_0xdb32b4(0x2ea)]['startsWith']('/stories/highlights/')) {
                            if (_0x4434b7(_0x3ac23e)[_0xdb32b4(0x41f)](_0xdb32b4(0x3ca)) == null && _0x4434b7(_0x3ac23e)[_0xdb32b4(0x41f)](_0xdb32b4(0x365)) == null && _0x3ac23e['tagName'] === _0xdb32b4(0x1c7)) {
                                var _0x1033fa = _0x4434b7(_0x3ac23e)['find']('time[datetime]');
                                let _0xc46497 = _0x1033fa?.[_0xdb32b4(0x41f)](_0xdb32b4(0x32c));
                                _0xc46497 != null && _0x1033fa[_0xdb32b4(0x2e3)](_0xc46497);
                            }
                        }
                        if (_0x4e95f6[_0xdb32b4(0x3ea)] > 0x0) {
                            _0x282c20['MODIFY_VIDEO_VOLUME'] && _0x4e95f6[_0xdb32b4(0x25e)](function () {
                                _0x4434b7(this)['on']('play\x20playing', function () {
                                    const _0x195119 = a0_0x3a70;
                                    !_0x4434b7(this)['data'](_0x195119(0x376)) && (_0x4434b7(this)[_0x195119(0x41f)](_0x195119(0x327), !![]), this[_0x195119(0x1d0)] = _0xddd390[_0x195119(0x35e)], _0x73b19f(_0x195119(0x41e)));
                                });
                            });
                            if (location[_0xdb32b4(0x2ea)][_0xdb32b4(0x330)](/^(\/stories\/)/ig)) {
                                const _0x5cbb15 = location['pathname'][_0xdb32b4(0x330)](/^(\/stories\/highlights\/)/ig) != null, _0x3d5f00 = _0x5cbb15 ? _0xdb32b4(0x2de) : _0xdb32b4(0x2ed);
                                _0x4e95f6[_0xdb32b4(0x25e)](function () {
                                    const _0x4d37f1 = _0xdb32b4;
                                    _0x4434b7(this)['on']('timeupdate', function () {
                                        const _0x242b33 = a0_0x3a70;
                                        if (!_0x4434b7(this)[_0x242b33(0x216)](_0x242b33(0x2b1))) {
                                            let _0x1d8d85 = _0x4434b7(this);
                                            _0x1d8d85['parents'](_0x242b33(0x421))['filter'](function () {
                                                const _0x52dfc7 = _0x242b33;
                                                return _0x4434b7(this)[_0x52dfc7(0x30d)]() == _0x1d8d85['width']();
                                            })[_0x242b33(0x3e3)](_0x242b33(0x350))[_0x242b33(0x3ea)] === 0x0 ? (_0x4434b7(this)['attr']('data-modify-thumbnail', !![]), _0x5cbb15 ? _0x3cfab8(![]) : _0x68cb65(![]), _0x73b19f('(' + _0x3d5f00 + ')', _0x242b33(0x447))) : (_0x4434b7(this)[_0x242b33(0x41f)](_0x242b33(0x3f5), !![]), _0x73b19f('(' + _0x3d5f00 + ')', _0x242b33(0x40b)));
                                        }
                                    });
                                    var _0x4b1c31 = _0x4434b7(this);
                                    if (_0x282c20[_0x4d37f1(0x3f6)]) {
                                        if (!_0x4b1c31[_0x4d37f1(0x216)](_0x4d37f1(0x270))) {
                                            _0x73b19f('(' + _0x3d5f00 + ')', _0x4d37f1(0x414));
                                            _0x282c20['MODIFY_VIDEO_VOLUME'] && (this[_0x4d37f1(0x1d0)] = _0xddd390[_0x4d37f1(0x35e)], _0x4b1c31['on'](_0x4d37f1(0x437), function () {
                                                const _0x301d1e = _0x4d37f1;
                                                this[_0x301d1e(0x1d0)] = _0xddd390[_0x301d1e(0x35e)];
                                            }));
                                            let _0x42a77e = _0x4b1c31[_0x4d37f1(0x379)](_0x4d37f1(0x41a))[_0x4d37f1(0x2c7)](function () {
                                                    const _0x18d325 = _0x4d37f1;
                                                    return _0x4434b7(this)[_0x18d325(0x41f)](_0x18d325(0x456)) == null && _0x4434b7(this)[_0x18d325(0x41f)]('style') == null;
                                                })[_0x4d37f1(0x2fb)](), _0x564155 = _0x42a77e[_0x4d37f1(0x251)]();
                                            _0x564155[_0x4d37f1(0x2c3)]();
                                            let _0x43126a = _0x42a77e[_0x4d37f1(0x3e3)](_0x4d37f1(0x233));
                                            _0x43126a[_0x4d37f1(0x2c3)]();
                                            const _0xd28b9c = function (_0x19ed2a) {
                                                const _0x25e15f = _0x4d37f1;
                                                _0x19ed2a[_0x25e15f(0x2cb)](), _0x4b1c31['css']('z-index', '2'), _0x4b1c31['attr']('controls', !![]), _0x43126a[_0x25e15f(0x2c3)](), _0x564155['hide'](), _0x13e2ec(_0x4b1c31, _0x4b1c31['parents'](_0x25e15f(0x421))[_0x25e15f(0x2c7)](function () {
                                                    const _0x5b3aec = _0x25e15f;
                                                    return _0x4434b7(this)['width']() == _0x4b1c31[_0x5b3aec(0x30d)]();
                                                })['first'](), _0x3d5f00, _0x25e15f(0x1f2));
                                            };
                                            _0x4b1c31[_0x4d37f1(0x3b4)]()[_0x4d37f1(0x3e3)](_0x4d37f1(0x1d7))['on'](_0x4d37f1(0x3e7), _0xd28b9c), _0x43126a['on'](_0x4d37f1(0x3e7), _0xd28b9c), _0x564155['on']('contextmenu', _0xd28b9c), _0x4b1c31['on']('contextmenu', function (_0x47cbfa) {
                                                const _0x829df9 = _0x4d37f1;
                                                _0x47cbfa[_0x829df9(0x2cb)](), _0x4b1c31['css']('z-index', '-1'), _0x4b1c31[_0x829df9(0x2e1)]('controls'), _0x564155['show'](), _0x43126a['show'](), _0x13e2ec(_0x4b1c31, _0x4b1c31[_0x829df9(0x379)](_0x829df9(0x421))[_0x829df9(0x2c7)](function () {
                                                    const _0x57aebf = _0x829df9;
                                                    return _0x4434b7(this)[_0x57aebf(0x30d)]() == _0x4b1c31[_0x57aebf(0x30d)]();
                                                })[_0x829df9(0x2fb)](), _0x3d5f00, _0x829df9(0x1f2));
                                            }), _0x4b1c31['on'](_0x4d37f1(0x3f1), function () {
                                                const _0x5f8aa5 = _0x4d37f1;
                                                let _0x331f69 = _0x42a77e[_0x5f8aa5(0x3b4)]()[_0x5f8aa5(0x3e3)]('svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]')['parents'](_0x5f8aa5(0x3d0))[_0x5f8aa5(0x2fb)]();
                                                var _0x2b19ce = _0x331f69[_0x5f8aa5(0x3e3)](_0x5f8aa5(0x304))[_0x5f8aa5(0x3ea)] === 0x0;
                                                this[_0x5f8aa5(0x3b3)] != _0x2b19ce && (this['volume'] = _0xddd390[_0x5f8aa5(0x35e)], _0x331f69?.[_0x5f8aa5(0x1fa)](_0x5f8aa5(0x27a))), _0x4434b7(this)[_0x5f8aa5(0x41f)](_0x5f8aa5(0x278)) && (_0xddd390[_0x5f8aa5(0x35e)] = this['volume'], GM_setValue(_0x5f8aa5(0x383), this[_0x5f8aa5(0x1d0)])), this['volume'] == _0xddd390['videoVolume'] && _0x4434b7(this)[_0x5f8aa5(0x41f)](_0x5f8aa5(0x278), !![]);
                                            }), _0x4b1c31[_0x4d37f1(0x444)](_0x4d37f1(0x21a), _0x4d37f1(0x238)), _0x4b1c31[_0x4d37f1(0x444)](_0x4d37f1(0x34d), '2'), _0x4b1c31[_0x4d37f1(0x41f)](_0x4d37f1(0x31d), !![]), _0x4b1c31[_0x4d37f1(0x41f)](_0x4d37f1(0x270), !![]);
                                        }
                                    } else
                                        _0x13e2ec(_0x4b1c31, _0x4b1c31[_0x4d37f1(0x379)]('div[style][class]')[_0x4d37f1(0x2c7)](function () {
                                            const _0x3d8c97 = _0x4d37f1;
                                            return _0x4434b7(this)[_0x3d8c97(0x30d)]() == _0x4b1c31['width']();
                                        })['first'](), _0x3d5f00, _0x4d37f1(0x1f2));
                                });
                            }
                        }
                    });
                }
            });
            _0x3c58ac[_0x51bfb5(0x397)](_0x4434b7(_0x51bfb5(0x3b9))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));