// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            2.40.2
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

function a0_0x18b9() {
    const _0x4e7a2a = [
        'vertical',
        'https://ko-fi.com/snkoarashi',
        'CLOSE',
        'there\x20is\x20no\x20new\x20update',
        'last',
        'video[class]',
        'prop',
        'instagram.com/reels/',
        'div#splash-screen',
        'owner',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'input',
        'stopPropagation',
        'highlight',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'pause',
        'srcset',
        'stringify',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        '.xpgaw4o',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'video',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'data-snig',
        'userLanguage',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'split',
        'node',
        '</div></div>',
        'NOPATH',
        'ended',
        'div.volume_slider',
        'boolean',
        'LOAD_BLOB_RELOAD',
        'childList',
        'shortcode_media',
        'removeClass',
        '._aagv\x20img',
        'isStory',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        '/accounts/login',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'data-modify',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'Request\x20with:',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'data-ih-locale-title',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'media-id',
        'Donate',
        'data-type',
        'remove-thumbnail',
        'get',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'https://i.instagram.com/api/v1/media/',
        '.json',
        '._acay\x20._acaz',
        'append',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'message',
        'userAgent',
        'data-loop',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'hasReferrer',
        'DISABLE_VIDEO_LOOPING',
        '</a></button>',
        'div[id^=\x22mount\x22]',
        'keyCode',
        'next',
        '2415111qCATsR',
        '20000',
        'carousel_media',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'replaceAll',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '\x22\x20data-globalIndex=\x22',
        '_acnf',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'pathname',
        'disconnect',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        '.IG_DWHISTORY_ALL',
        '4dikXJg',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'controls',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        '<div\x20class=\x22IG_SN_DIG\x20',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'section\x20>\x20main[role=\x22main\x22]',
        'data-modify-thumbnail',
        'bottom',
        'THUMBNAIL',
        'CHECK_UPDATE',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'THUMBNAIL_INTRO',
        'onReadyMyDW()\x20Timer',
        'getBlobMedia()',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'fail',
        'AUTO_RENAME',
        'items',
        'story',
        'ALL_CHECK',
        'assign',
        'selected',
        'NOTICE_UPDATE_TITLE',
        '37px',
        'then',
        'volumechange',
        'Main\x20Timer',
        'change',
        'LOCALE_MANIFEST',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'https://www.instagram.com/reel/',
        'script[type=\x22application/json\x22]',
        'canvas._aarh',
        'Close',
        'map',
        '\x22\x20class=\x22newTab\x22>',
        'RELOAD_SCRIPT',
        'getMediaInfo()',
        'height',
        'BATCH_DOWNLOAD_SELECTED',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        '#article-id',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'username',
        '</span></label>',
        'title',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'DIV',
        'Logger:\x0a',
        'thumbnail',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'MODIFY_VIDEO_VOLUME',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '<div\x20id=\x22tempWrapper\x22></div>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'data-username',
        '18VgmUPT',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'getTime',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        '.IG_REELS_THUMBNAIL',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'main\x20timer\x20re-register\x20completed',
        'padEnd',
        '\x0a-----\x0a\x0aLocation:\x20',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'ig_helper_notice',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        'config_width',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'FORCE_RESOURCE_VIA_MEDIA',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'is_video',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        '.SNKMS_IG_NEWTAB_MAIN',
        '507798fKLZSz',
        'BATCH_DOWNLOAD_DIRECT',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'DW_ALL',
        'reel',
        'getTranslationText\x20catch\x20error:',
        'tagName',
        'div[class][role=\x22button\x22]',
        'mouseenter',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'https://www.instagram.com/reels/',
        'RENAME_PUBLISH_DATE',
        'img[referrerpolicy]',
        '</option>',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        'status',
        'www.',
        '[role=\x22button\x22]',
        '/info/',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'Found\x20insert\x20point',
        'NEW_TAB',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        '_ac3q',
        'FEEDBACK',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'div:not([class]):not([style])',
        'blob',
        'data-ih-locale',
        'parents',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        '3819070sKMLdT',
        'GraphSidecar',
        'type',
        'show',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'data-path',
        'svg',
        'user',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'getFullYear',
        'z-index',
        'after',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'downloadURL',
        'DIRECT_DOWNLOAD_ALL',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'GM_unregisterMenuCommand',
        '.IG_REELS_NEWTAB',
        '.IG_SN_DIG\x20input',
        'x1lix1fw',
        '*/*',
        'pointer',
        'data-href',
        'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;',
        'css',
        'logger\x20sliced',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'cursor',
        '.videoThumbnail',
        '</a></button><br/>',
        'faild',
        'div\x20>\x20ul\x20li._acaz',
        'range',
        'mousedown',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        '--ig-track-progress:\x20',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'GraphVideo',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        '\x22\x20datetime=\x22',
        'li._acaz',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        'sort',
        'datetime',
        'isReels',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        '.IG_REELS',
        'click',
        'video\x20+\x20div\x20>\x20div',
        'video_resources',
        'taken_at_timestamp',
        'Checking\x20for\x20Script\x20Updates',
        'LOAD_BLOB_MULTIPLE',
        'DOWNLOAD_DOM_TREE',
        '_INTRO',
        'DONATE',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'modify',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'toString',
        'Loading\x20Blob\x20Media...',
        'getTranslationText()',
        'Preference\x20Settings',
        'replace',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'prev',
        '.IG_DWHISTORY',
        'DEBUG',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'G_CHECK_TIMESTAMP',
        'remove',
        'time',
        'which',
        'language',
        'substr',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '<input\x20value=\x22',
        'div[style][class]',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'style',
        'log',
        'addedNodes',
        '__typename',
        'GET',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'video\x20+\x20div',
        'reduce',
        '.IG_SN_DIG\x20#post_info',
        'data-name',
        'getMonth',
        'feedback_message',
        'Checking\x20for\x20Updates',
        'getHours',
        '.IG_DWHISTORY_THUMBNAIL',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'NO_VID_URL',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'px;top:',
        'Cannot\x20find\x20video\x20URL.',
        'muted',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        '._acnb',
        'error',
        'searchParams',
        ':hidden',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'target',
        'query_hash',
        '6375928eXvoAH',
        '[data-snig]',
        'video\x20volume\x20changed\x20#slider',
        'reels',
        'parse',
        'DOWNLOAD',
        '2-digit',
        'data-completed',
        'xdt_api__v1__media__shortcode__web_info',
        'text',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'https://i.instagram.com/api/v1/users/',
        'Download',
        '\x20-</a>',
        'getDate',
        'numeric',
        '9650335LLWrvV',
        'getStories()',
        'toISOString',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'top',
        'SCROLL_BUTTON',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'isProfile',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'reels_media',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'video_versions',
        'trigging',
        'candidates',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'hostname',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'contextmenu',
        'isArray',
        'G_VIDEO_VOLUME',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'parent',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'display_resources',
        'data-controls',
        'NO_CHECK_RESOURCE',
        'response',
        'download',
        'hasClass',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'x1iyjqo2',
        'wrap',
        'CHECK_UPDATE_MENU',
        'attr',
        'Show\x20DOM\x20Tree',
        'find',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'toLowerCase',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
        'isHomepage',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'src',
        'filter',
        'getPostOwner()',
        'SELECT_AND_COPY',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        '.IG_DWNEWTAB',
        'observe',
        'Download\x20All\x20Resources',
        'data',
        'createObjectURL',
        'div[role=\x22presentation\x22]',
        'VID',
        '497ISCLcK',
        'fadeOut',
        'avatar',
        'profile_pic_url',
        'modify-thumbnail',
        'body\x20>\x20div\x20section:visible._ac0a',
        'hd_profile_pic_url_info',
        'removeAttr',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'shortcode',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'each',
        'first',
        '.IG_DWSTORY_ALL',
        'Image',
        '90546NZvkEf',
        'HTML5_VIDEO_CONTROL',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'smooth',
        'image_versions2',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'code',
        'match',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'IMG',
        'getUserHighSizeProfile()',
        'loop',
        'mp4',
        'getUserId()',
        'load',
        'getBlobMediaWithQuery()',
        '.IG_DWPROFILE',
        '[data-ih-locale-title]',
        '</span>\x20<input\x20id=\x22',
        'video_url',
        'forEach',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'play\x20playing',
        'scrollBy',
        '</div>',
        'width',
        '\x22\x20class=\x22IG_REELS\x22>',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'addClass',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'checked',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        '.txt',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'navigator',
        'volume',
        'scontent.cdninstagram.com',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'query_id',
        'val',
        'div',
        'REPORT_DISCORD',
        'getBlobMediaWithQueryID()',
        'textContent',
        'matchAll',
        'highlights',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'includes',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'REPORT_GITHUB',
        'Current\x20version:\x20',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'lang',
        '<option\x20value=\x22',
        '%22}',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22]',
        'FORCE_FETCH_ALL_RESOURCES',
        'Reload\x20Script',
        'object',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        '._acay',
        'article',
        'createElement',
        'canDownload',
        'text/plain',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'jpg',
        '<label\x20class=\x22globalSettings',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'undefined',
        '#scrollWrapper',
        '</span>\x20',
        '._acay\x20+\x20.x24i39r',
        'div.volume_slider\x20input',
        'getMinutes',
        'version',
        'content',
        '\x22]\x20span',
        '\x22><span\x20data-ih-locale=\x22',
        'Download\x20Selected\x20Resources',
        'keys',
        '.SNKMS_IG_DW_MAIN',
        'reject',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        '<a\x20datetime=\x22',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'display_url',
        'children',
        'body',
        'LOAD_BLOB_ONE',
        'length',
        'img',
        '.IG_DWSTORY',
        'a[href^=\x22/p/\x22]',
        'getSeconds',
        'altKey',
        'toUpperCase',
        'trim',
        'user\x20settings',
        'hide',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'absolute',
        'push',
        '.IG_SN_DIG',
        '</p>',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        'relative',
        'Request\x20failed\x20with\x20API\x20response\x20',
        '.IG_DWHINEWTAB',
        'isHighlightsStory',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'padStart',
        'loadstart',
        'updatenotification',
        'https://www.instagram.com/',
        'div:last-child',
        'appendChild',
        'finalUrl',
        'position',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'data-remove-thumbnail',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'GraphImage',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'body\x20>\x20div\x20section._ac0a',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '#tempWrapper',
        'DOMTree-',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'startsWith',
        'Settings',
        '\x22\x20/>',
        'href',
        'stories',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'label',
        'catch',
        'SETTING',
        'slice',
        'edge_sidecar_to_children',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'px;\x22>',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'SKIP_VIEW_STORY_CONFIRM',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        '#locatePreview',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'host',
        '.IG_DWSTORY_THUMBNAIL',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        '\x22\x20data-ih-locale-title=\x22',
        'getUserIdWithAgent()',
        'IG\x20Debug\x20DOM\x20Tree',
        '<a\x20media-id=\x22',
        '.IG_SN_DIG\x20.globalSettings',
        '<div></div>',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'responseText',
        'Found\x20post\x20container',
        'script',
        'Fetch\x20from\x20memory\x20cache:',
        'taken_at',
        '<div\x20class=\x22volume_slider\x20',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'url',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'floor',
        'G_RENAME_FORMAT',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        '29868620BiTgFL',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        '0px',
        'ig_cache_key',
        'preventDefault',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'Video'
    ];
    a0_0x18b9 = function () {
        return _0x4e7a2a;
    };
    return a0_0x18b9();
}
function a0_0x1075(_0x4d0347, _0x4c01f6) {
    const _0x18b9d4 = a0_0x18b9();
    return a0_0x1075 = function (_0x107519, _0x1c420b) {
        _0x107519 = _0x107519 - 0x194;
        let _0x12f911 = _0x18b9d4[_0x107519];
        return _0x12f911;
    }, a0_0x1075(_0x4d0347, _0x4c01f6);
}
(function (_0x2b5f5e, _0x2887b3) {
    const _0x5dfff4 = a0_0x1075, _0x14a0a5 = _0x2b5f5e();
    while (!![]) {
        try {
            const _0x1c3366 = parseInt(_0x5dfff4(0x315)) / 0x1 + parseInt(_0x5dfff4(0x33c)) / 0x2 + -parseInt(_0x5dfff4(0x2ac)) / 0x3 * (-parseInt(_0x5dfff4(0x2ba)) / 0x4) + -parseInt(_0x5dfff4(0x3be)) / 0x5 + -parseInt(_0x5dfff4(0x197)) / 0x6 * (-parseInt(_0x5dfff4(0x3fa)) / 0x7) + -parseInt(_0x5dfff4(0x3ae)) / 0x8 * (-parseInt(_0x5dfff4(0x2ff)) / 0x9) + -parseInt(_0x5dfff4(0x251)) / 0xa;
            if (_0x1c3366 === _0x2887b3)
                break;
            else
                _0x14a0a5['push'](_0x14a0a5['shift']());
        } catch (_0x27abe9) {
            _0x14a0a5['push'](_0x14a0a5['shift']());
        }
    }
}(a0_0x18b9, 0xed084), function (_0x5d75dc) {
    setTimeout(() => {
        'use strict';
        const _0x45c6ee = a0_0x1075;
        const _0x160d84 = {
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
            }, _0x5af5cd = [
                _0x45c6ee(0x324),
                _0x45c6ee(0x29a),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ];
        var _0x5bbd81 = GM_getValue('G_VIDEO_VOLUME') ? GM_getValue(_0x45c6ee(0x3d1)) : 0x1, _0x2185ba = ![], _0x2fa82a = GM_getValue(_0x45c6ee(0x24f)) ? GM_getValue('G_RENAME_FORMAT') : _0x45c6ee(0x312);
        const _0x5e5a0b = {
                'DOWNLOAD': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
                'NEW_TAB': _0x45c6ee(0x3e9),
                'THUMBNAIL': _0x45c6ee(0x1be),
                'CLOSE': '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>'
            }, _0x5964fa = 0xfa, _0x5b63d8 = GM_getResourceText('INTERNAL_CSS'), _0x2c6902 = JSON[_0x45c6ee(0x3b2)](GM_getResourceText(_0x45c6ee(0x2d9)));
        var _0x5c04b5 = [], _0x41a59d = {}, _0x2aad8d = GM_getValue(_0x45c6ee(0x1ce)) || navigator[_0x45c6ee(0x38b)] || navigator[_0x45c6ee(0x278)], _0x2ac8d8 = location[_0x45c6ee(0x223)], _0x258a1f = ![], _0x5b55d0 = ![], _0x1f0c15 = [], _0x449464, _0x7af8ba, _0x2e9508, _0x1f7f1a, _0xc11ce1 = {
                'stories': {},
                'highlights': {}
            }, _0x28c49b = new MutationObserver(function (_0xa4d5ca, _0x1e66f9) {
                _0x251be5();
            });
        _0x25de87(), GM_addStyle(_0x5b63d8), _0x2b3164(), _0x51f039(_0x2aad8d)[_0x45c6ee(0x2d5)](_0x357089 => {
            _0x41a59d[_0x2aad8d] = _0x357089, _0x2ef7cd(), _0x2b3164(), _0x38f0d5(0x12c);
        })[_0x45c6ee(0x227)](_0x1beeca => {
            const _0x5190cd = _0x45c6ee;
            _0x2b3164(), _0x38f0d5(0x12c), !_0x2aad8d[_0x5190cd(0x220)]('en') && console[_0x5190cd(0x3a8)]('getTranslationText\x20catch\x20error:', _0x1beeca);
        });
        var _0x4124bc = setInterval(function () {
            const _0x293d75 = _0x45c6ee;
            if (_0x5d75dc(_0x293d75(0x263))[_0x293d75(0x1f7)] > 0x0 && !_0x5d75dc(_0x293d75(0x263))['is'](_0x293d75(0x3aa)) || location[_0x293d75(0x2b6)][_0x293d75(0x19f)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x293d75(0x3cd)][_0x293d75(0x220)](_0x293d75(0x329))) {
                _0x5b55d0 = ![];
                return;
            }
            if (_0x2ac8d8 != location[_0x293d75(0x223)] || !_0x258a1f || !_0x5b55d0) {
                console['log'](_0x293d75(0x2d7), _0x293d75(0x3ca)), clearInterval(_0x1f7f1a), _0x5b55d0 = ![], _0x258a1f = !![], _0x2ac8d8 = location['href'], _0x28c49b[_0x293d75(0x2b7)]();
                if (location[_0x293d75(0x223)][_0x293d75(0x220)]('https://www.instagram.com/p/') || location['pathname'][_0x293d75(0x19f)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x293d75(0x223)][_0x293d75(0x220)](_0x293d75(0x2dc))) {
                    _0xc11ce1[_0x293d75(0x224)] = {}, _0xc11ce1['highlights'] = {}, _0x20b6c7('isDialog');
                    var _0x404436 = setInterval(() => {
                        const _0x2de502 = _0x293d75;
                        _0x5d75dc(_0x2de502(0x3cc))[_0x2de502(0x1f7)] > 0x0 && (clearInterval(_0x404436), setTimeout(() => {
                            _0x251be5(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x5b55d0 = !![];
                }
                location[_0x293d75(0x223)][_0x293d75(0x220)](_0x293d75(0x323)) && (_0x20b6c7(_0x293d75(0x36c)), setTimeout(() => {
                    _0x162401(![]);
                }, 0x96), _0x5b55d0 = !![]);
                if (location[_0x293d75(0x223)][_0x293d75(0x27b)]('?')[0x0] == 'https://www.instagram.com/') {
                    _0xc11ce1[_0x293d75(0x224)] = {}, _0xc11ce1['highlights'] = {};
                    let _0x26ba85 = _0x449464?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x20b6c7(_0x293d75(0x3ea), _0x26ba85), setTimeout(() => {
                        const _0x3bc233 = _0x293d75;
                        _0x251be5(![], _0x26ba85);
                        const _0x570b97 = _0x5d75dc(_0x3bc233(0x20b))?.[_0x3bc233(0x3d5)]()[0x0];
                        _0x570b97 && _0x28c49b[_0x3bc233(0x3f4)](_0x570b97, { 'childList': !![] });
                    }, 0x96), _0x5b55d0 = !![];
                }
                _0x5d75dc(_0x293d75(0x322))['length'] && location[_0x293d75(0x2b6)][_0x293d75(0x19f)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x293d75(0x2b6)]['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x20b6c7(_0x293d75(0x3c5)), setTimeout(() => {
                    _0x2f7f78(![]);
                }, 0x96), _0x5b55d0 = !![]);
                if (!_0x5b55d0) {
                    if (location[_0x293d75(0x223)][_0x293d75(0x19f)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0xc11ce1[_0x293d75(0x1c7)] = {}, _0x20b6c7(_0x293d75(0x20a)), _0x4536e3(![]), _0x1f7f1a = setInterval(() => {
                            _0x532f68(![]);
                        }, _0x5964fa), _0x5d75dc('.IG_DWHISTORY')[_0x293d75(0x1f7)] && setTimeout(() => {
                            const _0x1129ec = _0x293d75;
                            if (_0x160d84[_0x1129ec(0x22f)]) {
                                var _0xe24b11 = _0x5d75dc(_0x1129ec(0x330))['filter'](function () {
                                    const _0x12e589 = _0x1129ec;
                                    return _0x5d75dc(this)[_0x12e589(0x1f4)]()[_0x12e589(0x1f7)] === 0x0 && this['textContent']['trim']() !== '';
                                });
                                _0xe24b11?.[_0x1129ec(0x36f)]();
                            }
                            _0x5b55d0 = !![];
                        }, 0x96);
                    else
                        location['href'][_0x293d75(0x19f)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x20b6c7(_0x293d75(0x287)), _0x5d75dc(_0x293d75(0x2e9))['length'] > 0x0 && (_0x5d75dc('.IG_DWSTORY')['remove'](), _0x5d75dc(_0x293d75(0x3f3))[_0x293d75(0x388)](), _0x5d75dc('.IG_DWSTORY_THUMBNAIL')['length'] && _0x5d75dc(_0x293d75(0x238))['remove'](), _0x208cfb(![]), setTimeout(() => {
                            _0x208cfb(![]);
                        }, 0x96)), _0x5d75dc(_0x293d75(0x1f9))['length'] && setTimeout(() => {
                            const _0x278718 = _0x293d75;
                            if (_0x160d84['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x402643 = _0x5d75dc(_0x278718(0x330))[_0x278718(0x3ed)](function () {
                                    const _0x500a4d = _0x278718;
                                    return _0x5d75dc(this)['children']()[_0x500a4d(0x1f7)] === 0x0 && this[_0x500a4d(0x1c5)][_0x500a4d(0x1fe)]() !== '';
                                });
                                _0x402643?.[_0x278718(0x36f)]();
                            }
                            _0x5b55d0 = !![];
                        }, 0x96)) : (_0x5b55d0 = ![], _0x5d75dc('.IG_DWSTORY')[_0x293d75(0x1f7)] && _0x5d75dc(_0x293d75(0x1f9))[_0x293d75(0x388)](), _0x5d75dc(_0x293d75(0x195))[_0x293d75(0x1f7)] && _0x5d75dc(_0x293d75(0x195))[_0x293d75(0x388)](), _0x5d75dc('.IG_DWNEWTAB')[_0x293d75(0x1f7)] && _0x5d75dc('.IG_DWNEWTAB')[_0x293d75(0x388)](), _0x5d75dc('.IG_DWSTORY_THUMBNAIL')[_0x293d75(0x1f7)] && _0x5d75dc(_0x293d75(0x238))[_0x293d75(0x388)](), _0x5d75dc(_0x293d75(0x384))[_0x293d75(0x1f7)] && _0x5d75dc(_0x293d75(0x384))[_0x293d75(0x388)](), _0x5d75dc('.IG_DWHISTORY_ALL')[_0x293d75(0x1f7)] && _0x5d75dc(_0x293d75(0x2b9))[_0x293d75(0x388)](), _0x5d75dc(_0x293d75(0x209))[_0x293d75(0x1f7)] && _0x5d75dc(_0x293d75(0x209))[_0x293d75(0x388)](), _0x5d75dc(_0x293d75(0x39f))[_0x293d75(0x1f7)] && _0x5d75dc(_0x293d75(0x39f))[_0x293d75(0x388)]());
                }
                _0x38f0d5(0x12c), _0x449464 = new URL(location[_0x293d75(0x223)])[_0x293d75(0x2b6)];
            }
        }, _0x5964fa);
        async function _0x2f7f78(_0x420976) {
            const _0x31fd9c = _0x45c6ee;
            if (_0x420976) {
                _0x9f2e47(!![]);
                let _0x1f0270 = new Date()[_0x31fd9c(0x301)](), _0x1c040f = Math[_0x31fd9c(0x24e)](_0x1f0270 / 0x3e8), _0x430162 = location[_0x31fd9c(0x2b6)][_0x31fd9c(0x2b0)](/(reels|tagged)\/$/ig, '')['split']('/')['filter'](_0x2e1264 => _0x2e1264[_0x31fd9c(0x1f7)] > 0x0)['at'](-0x1), _0x5eb99c = await _0x50f578(_0x430162);
                try {
                    let _0x352cf = await _0xe6503(_0x5eb99c[_0x31fd9c(0x343)]['pk']);
                    _0x4f8b76(_0x352cf, _0x430162, _0x31fd9c(0x3fc), _0x1c040f, _0x31fd9c(0x1de));
                } catch (_0x27eb19) {
                    _0x4f8b76(_0x5eb99c[_0x31fd9c(0x343)][_0x31fd9c(0x3fd)], _0x430162, _0x31fd9c(0x3fc), _0x1c040f, _0x31fd9c(0x1de));
                }
                _0x9f2e47(![]);
            } else {
                if (!_0x5d75dc(_0x31fd9c(0x1a8))[_0x31fd9c(0x1f7)]) {
                    let _0x5ad9e0 = setInterval(() => {
                        const _0x2a5038 = _0x31fd9c;
                        if (_0x5d75dc(_0x2a5038(0x1a8))[_0x2a5038(0x1f7)]) {
                            clearInterval(_0x5ad9e0);
                            return;
                        }
                        _0x5d75dc(_0x2a5038(0x299))['parent']()[_0x2a5038(0x3d5)]()[_0x2a5038(0x29e)](_0x2a5038(0x236) + _0x29ce71('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x5e5a0b['DOWNLOAD'] + _0x2a5038(0x1b1)), _0x5d75dc(_0x2a5038(0x299))[_0x2a5038(0x3d5)]()['parent']()[_0x2a5038(0x354)](_0x2a5038(0x213), 'relative'), _0x5d75dc(_0x2a5038(0x340))[_0x2a5038(0x3d5)]()[_0x2a5038(0x3d5)]()['parent']()[_0x2a5038(0x29e)](_0x2a5038(0x236) + _0x29ce71('DW') + _0x2a5038(0x3d6) + _0x5e5a0b['DOWNLOAD'] + '</div>'), _0x5d75dc(_0x2a5038(0x340))[_0x2a5038(0x3d5)]()[_0x2a5038(0x3d5)]()[_0x2a5038(0x3d5)]()['css']('position', _0x2a5038(0x207));
                    }, 0x96);
                }
            }
        }
        async function _0x4e2f66() {
            const _0x59b9b3 = _0x45c6ee;
            _0x9f2e47(!![]);
            let _0x2a0c0c = new Date()['getTime'](), _0x34e362 = Math[_0x59b9b3(0x24e)](_0x2a0c0c / 0x3e8), _0x31c28d = location[_0x59b9b3(0x223)][_0x59b9b3(0x381)](/\/$/ig, '')[_0x59b9b3(0x27b)]('/')['at'](-0x1), _0x3969f8 = await _0x19edf7(_0x31c28d), _0x2f8bb7 = _0x3969f8[_0x59b9b3(0x3f6)][_0x59b9b3(0x3c7)][0x0][_0x59b9b3(0x264)][_0x59b9b3(0x2ed)];
            _0x3969f8[_0x59b9b3(0x3f6)][_0x59b9b3(0x3c7)][0x0]['items'][_0x59b9b3(0x1ac)]((_0x281c5b, _0x5b6697) => {
                setTimeout(() => {
                    const _0x3ec065 = a0_0x1075;
                    _0x160d84[_0x3ec065(0x324)] && (_0x34e362 = _0x281c5b['taken_at_timestamp']), _0x281c5b[_0x3ec065(0x3d8)][_0x3ec065(0x36a)](function (_0x238e4b, _0x3a80cd) {
                        const _0x4dec9a = _0x3ec065;
                        if (_0x238e4b[_0x4dec9a(0x30d)] < _0x3a80cd[_0x4dec9a(0x30d)])
                            return 0x1;
                        if (_0x238e4b[_0x4dec9a(0x30d)] > _0x3a80cd[_0x4dec9a(0x30d)])
                            return -0x1;
                        return 0x0;
                    }), _0x281c5b['is_video'] ? _0x4f8b76(_0x281c5b[_0x3ec065(0x371)][0x0][_0x3ec065(0x3ec)], _0x2f8bb7, _0x3ec065(0x224), _0x34e362, 'mp4', _0x281c5b['id']) : _0x4f8b76(_0x281c5b[_0x3ec065(0x3d8)][0x0][_0x3ec065(0x3ec)], _0x2f8bb7, _0x3ec065(0x224), _0x34e362, _0x3ec065(0x1de), _0x281c5b['id']);
                }, 0x64 * _0x5b6697);
            });
        }
        async function _0x4536e3(_0x5e6a00, _0x153375) {
            const _0x520287 = _0x45c6ee;
            if (_0x5e6a00) {
                let _0x4e463d = new Date()['getTime'](), _0x5ab4eb = Math['floor'](_0x4e463d / 0x3e8), _0x583b40 = location[_0x520287(0x223)][_0x520287(0x381)](/\/$/ig, '')[_0x520287(0x27b)]('/')['at'](-0x1), _0x19c606 = _0x5d75dc(_0x520287(0x356))['length'] || _0x5d75dc(_0x520287(0x403))[_0x520287(0x1f7)] || _0x5d75dc(_0x520287(0x27a))[_0x520287(0x3e6)](_0x520287(0x279))[_0x520287(0x1f7)], _0x1ab025 = '', _0x324485 = 0x0;
                _0x9f2e47(!![]);
                if (_0xc11ce1['highlights'][_0x583b40]) {
                    _0x20b6c7(_0x520287(0x245), _0x583b40);
                    let _0x16755b = _0xc11ce1[_0x520287(0x1c7)][_0x583b40][_0x520287(0x3f6)]['reels_media'][0x0]['items'][_0x520287(0x1f7)];
                    _0x1ab025 = _0xc11ce1[_0x520287(0x1c7)][_0x583b40][_0x520287(0x3f6)]['reels_media'][0x0][_0x520287(0x264)][_0x520287(0x2ed)], _0x324485 = _0xc11ce1[_0x520287(0x1c7)][_0x583b40][_0x520287(0x3f6)][_0x520287(0x3c7)][0x0][_0x520287(0x2ce)][_0x16755b - _0x19c606];
                } else {
                    let _0x140ef7 = await _0x19edf7(_0x583b40), _0x465101 = _0x140ef7['data'][_0x520287(0x3c7)][0x0][_0x520287(0x2ce)][_0x520287(0x1f7)];
                    _0x1ab025 = _0x140ef7[_0x520287(0x3f6)][_0x520287(0x3c7)][0x0][_0x520287(0x264)][_0x520287(0x2ed)], _0x324485 = _0x140ef7[_0x520287(0x3f6)]['reels_media'][0x0]['items'][_0x465101 - _0x19c606], _0xc11ce1[_0x520287(0x1c7)][_0x583b40] = _0x140ef7;
                }
                _0x160d84['RENAME_PUBLISH_DATE'] && (_0x5ab4eb = _0x324485[_0x520287(0x372)]);
                if (_0x160d84[_0x520287(0x30f)] && !_0x2185ba) {
                    let _0x407457 = await _0x2f3c80(_0x324485['id']);
                    _0x407457['status'] === 'ok' ? _0x407457['items'][0x0][_0x520287(0x3c9)] ? _0x153375 ? _0x43d38e(_0x407457[_0x520287(0x2ce)][0x0][_0x520287(0x3c9)][0x0][_0x520287(0x24c)]) : _0x4f8b76(_0x407457['items'][0x0][_0x520287(0x3c9)][0x0][_0x520287(0x24c)], _0x1ab025, _0x520287(0x1c7), _0x5ab4eb, _0x520287(0x1a4), _0x583b40) : _0x153375 ? _0x43d38e(_0x407457[_0x520287(0x2ce)][0x0]['image_versions2'][_0x520287(0x3cb)][0x0][_0x520287(0x24c)]) : _0x4f8b76(_0x407457['items'][0x0][_0x520287(0x19b)]['candidates'][0x0]['url'], _0x1ab025, _0x520287(0x1c7), _0x5ab4eb, _0x520287(0x1de), _0x583b40) : (_0x160d84['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (delete _0xc11ce1[_0x520287(0x1c7)][_0x583b40], _0x2185ba = !![], _0x4536e3(!![], _0x153375)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x407457[_0x520287(0x2a1)]), _0x20b6c7(_0x407457));
                } else
                    _0x324485[_0x520287(0x311)] ? _0x153375 ? _0x43d38e(_0x324485['video_resources']['at'](-0x1)[_0x520287(0x3ec)], _0x1ab025) : _0x4f8b76(_0x324485['video_resources']['at'](-0x1)[_0x520287(0x3ec)], _0x1ab025, _0x520287(0x1c7), _0x5ab4eb, _0x520287(0x1a4), _0x583b40) : _0x153375 ? _0x43d38e(_0x324485[_0x520287(0x3d8)]['at'](-0x1)[_0x520287(0x3ec)], _0x1ab025) : _0x4f8b76(_0x324485[_0x520287(0x3d8)]['at'](-0x1)['src'], _0x1ab025, _0x520287(0x1c7), _0x5ab4eb, _0x520287(0x1de), _0x583b40), _0x2185ba = ![];
                _0x9f2e47(![]);
            } else {
                if (!_0x5d75dc(_0x520287(0x384))[_0x520287(0x1f7)]) {
                    let _0x57dde0 = null;
                    _0x5d75dc(_0x520287(0x219))[_0x520287(0x1f7)] > 0x0 ? _0x57dde0 = _0x5d75dc(_0x520287(0x3ff)) : (_0x57dde0 = _0x5d75dc(_0x520287(0x3d2)), _0x57dde0[_0x520287(0x354)](_0x520287(0x213), _0x520287(0x207)));
                    if (_0x57dde0[_0x520287(0x1f7)] === 0x0) {
                        let _0x287293 = _0x5d75dc(_0x520287(0x2b1)), _0x3701d8 = 0x0;
                        _0x287293[_0x520287(0x406)](function () {
                            const _0x5d7811 = _0x520287;
                            _0x5d75dc(this)[_0x5d7811(0x1b2)]() > _0x3701d8 && (_0x3701d8 = _0x5d75dc(this)[_0x5d7811(0x1b2)](), _0x57dde0 = _0x5d75dc(this)[_0x5d7811(0x1f4)](_0x5d7811(0x1c2))[_0x5d7811(0x194)]());
                        });
                    }
                    _0x57dde0 != null && (_0x57dde0[_0x520287(0x29e)](_0x520287(0x236) + _0x29ce71('DW') + _0x520287(0x310) + _0x5e5a0b[_0x520287(0x3b3)] + _0x520287(0x1b1)), _0x57dde0[_0x520287(0x29e)](_0x520287(0x274) + _0x29ce71('NEW_TAB') + _0x520287(0x331) + _0x5e5a0b['NEW_TAB'] + _0x520287(0x1b1)), _0x57dde0['append'](_0x520287(0x1b6) + _0x29ce71('DW_ALL') + '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>' + _0x5e5a0b[_0x520287(0x3b3)] + _0x520287(0x1b1)), _0x57dde0[_0x520287(0x3e6)](_0x520287(0x325))['each'](function () {
                        const _0x300fc1 = _0x520287;
                        _0x5d75dc(this)['on'](_0x300fc1(0x1a6), function () {
                            const _0x9bcc8e = _0x300fc1;
                            !_0x5d75dc(this)[_0x9bcc8e(0x3f6)](_0x9bcc8e(0x297)) && (_0x57dde0['find'](_0x9bcc8e(0x39f))['length'] === 0x0 ? (_0x5d75dc(this)[_0x9bcc8e(0x3e4)]('data-remove-thumbnail', !![]), _0x5d75dc('.IG_DWHISTORY_THUMBNAIL')['remove'](), _0x20b6c7(_0x9bcc8e(0x3e7))) : (_0x5d75dc(this)[_0x9bcc8e(0x3e4)]('data-remove-thumbnail', !![]), _0x20b6c7(_0x9bcc8e(0x357))));
                        });
                    }));
                }
            }
        }
        async function _0x532f68(_0x48fe8c) {
            const _0x557002 = _0x45c6ee;
            if (_0x48fe8c) {
                let _0x5705e1 = new Date()[_0x557002(0x301)](), _0x1e5e6b = Math['floor'](_0x5705e1 / 0x3e8), _0x75e2d5 = location['href']['replace'](/\/$/ig, '')[_0x557002(0x27b)]('/')['at'](-0x1), _0x2aefd7 = '', _0x6317cc = _0x5d75dc(_0x557002(0x356))[_0x557002(0x1f7)] || _0x5d75dc(_0x557002(0x403))[_0x557002(0x1f7)] || _0x5d75dc(_0x557002(0x27a))[_0x557002(0x3e6)](_0x557002(0x279))[_0x557002(0x1f7)], _0x5ce37f = '';
                _0x9f2e47(!![]);
                if (_0xc11ce1[_0x557002(0x1c7)][_0x75e2d5]) {
                    _0x20b6c7(_0x557002(0x245), _0x75e2d5);
                    let _0x145dbd = _0xc11ce1['highlights'][_0x75e2d5][_0x557002(0x3f6)][_0x557002(0x3c7)][0x0][_0x557002(0x2ce)][_0x557002(0x1f7)];
                    _0x2aefd7 = _0xc11ce1['highlights'][_0x75e2d5][_0x557002(0x3f6)]['reels_media'][0x0][_0x557002(0x264)][_0x557002(0x2ed)], _0x5ce37f = _0xc11ce1[_0x557002(0x1c7)][_0x75e2d5][_0x557002(0x3f6)][_0x557002(0x3c7)][0x0][_0x557002(0x2ce)][_0x145dbd - _0x6317cc];
                } else {
                    let _0x15ddb3 = await _0x19edf7(_0x75e2d5), _0x5801ab = _0x15ddb3[_0x557002(0x3f6)]['reels_media'][0x0][_0x557002(0x2ce)][_0x557002(0x1f7)];
                    _0x2aefd7 = _0x15ddb3['data'][_0x557002(0x3c7)][0x0][_0x557002(0x264)][_0x557002(0x2ed)], _0x5ce37f = _0x15ddb3[_0x557002(0x3f6)]['reels_media'][0x0][_0x557002(0x2ce)][_0x5801ab - _0x6317cc], _0xc11ce1[_0x557002(0x1c7)][_0x75e2d5] = _0x15ddb3;
                }
                _0x160d84[_0x557002(0x324)] && (_0x1e5e6b = _0x5ce37f[_0x557002(0x372)]);
                if (_0x160d84[_0x557002(0x30f)] && !_0x2185ba) {
                    let _0xa7714 = await _0x2f3c80(_0x5ce37f['id']);
                    _0xa7714[_0x557002(0x328)] === 'ok' ? _0x4f8b76(_0xa7714['items'][0x0][_0x557002(0x19b)][_0x557002(0x3cb)][0x0][_0x557002(0x24c)], _0x2aefd7, _0x557002(0x1c7), _0x1e5e6b, _0x557002(0x1de), _0x75e2d5) : (_0x160d84[_0x557002(0x29a)] ? (delete _0xc11ce1[_0x557002(0x1c7)][_0x75e2d5], _0x2185ba = !![], _0x532f68(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0xa7714[_0x557002(0x2a1)]), _0x20b6c7(_0xa7714));
                } else
                    _0x4f8b76(_0x5ce37f[_0x557002(0x3d8)]['at'](-0x1)[_0x557002(0x3ec)], _0x2aefd7, _0x557002(0x1c7), _0x1e5e6b, _0x557002(0x1de), _0x75e2d5), _0x2185ba = ![];
                _0x9f2e47(![]);
            } else {
                if (_0x5d75dc(_0x557002(0x239))[_0x557002(0x1f7)]) {
                    if (!_0x5d75dc(_0x557002(0x39f))[_0x557002(0x1f7)]) {
                        let _0xe42fa3 = null;
                        _0x5d75dc(_0x557002(0x219))[_0x557002(0x1f7)] > 0x0 ? _0xe42fa3 = _0x5d75dc(_0x557002(0x3ff)) : (_0xe42fa3 = _0x5d75dc(_0x557002(0x3d2)), _0xe42fa3[_0x557002(0x354)](_0x557002(0x213), _0x557002(0x207)));
                        if (_0xe42fa3['length'] === 0x0) {
                            let _0x410834 = _0x5d75dc(_0x557002(0x2b1)), _0x5b72a0 = 0x0;
                            _0x410834[_0x557002(0x406)](function () {
                                const _0x4aa975 = _0x557002;
                                _0x5d75dc(this)[_0x4aa975(0x1b2)]() > _0x5b72a0 && (_0x5b72a0 = _0x5d75dc(this)['width'](), _0xe42fa3 = _0x5d75dc(this)['children'](_0x4aa975(0x1c2))['first']());
                            });
                        }
                        _0xe42fa3 != null && _0xe42fa3[_0x557002(0x29e)](_0x557002(0x21b) + _0x29ce71('THUMBNAIL_INTRO') + _0x557002(0x201) + _0x5e5a0b[_0x557002(0x2c3)] + '</div>');
                    }
                } else
                    _0x5d75dc(_0x557002(0x39f))[_0x557002(0x388)]();
            }
        }
        async function _0x5255b2() {
            const _0x3675fd = _0x45c6ee;
            _0x9f2e47(!![]);
            let _0x166cb5 = new Date()[_0x3675fd(0x301)](), _0x1c49e0 = Math[_0x3675fd(0x24e)](_0x166cb5 / 0x3e8), _0xf734b0 = _0x5d75dc(_0x3675fd(0x37a))['first']()['text']() || location[_0x3675fd(0x2b6)][_0x3675fd(0x27b)]('/')[_0x3675fd(0x3ed)](_0x42eb20 => _0x42eb20[_0x3675fd(0x1f7)] > 0x0)['at'](0x1), _0x5ef398 = await _0x50f578(_0xf734b0), _0x49f85d = _0x5ef398['user']['pk'], _0x20f0fb = await _0x57e988(_0x49f85d);
            _0x20f0fb[_0x3675fd(0x3f6)][_0x3675fd(0x3c7)][0x0][_0x3675fd(0x2ce)]['forEach']((_0x19d90b, _0x2f9849) => {
                setTimeout(() => {
                    const _0x4824f1 = a0_0x1075;
                    _0x160d84['RENAME_PUBLISH_DATE'] && (_0x1c49e0 = _0x19d90b[_0x4824f1(0x372)]), _0x19d90b['display_resources']['sort'](function (_0x55cf02, _0x1a900d) {
                        const _0x4772f2 = _0x4824f1;
                        if (_0x55cf02[_0x4772f2(0x30d)] < _0x1a900d['config_width'])
                            return 0x1;
                        if (_0x55cf02[_0x4772f2(0x30d)] > _0x1a900d[_0x4772f2(0x30d)])
                            return -0x1;
                        return 0x0;
                    }), _0x19d90b[_0x4824f1(0x311)] ? _0x4f8b76(_0x19d90b[_0x4824f1(0x371)][0x0][_0x4824f1(0x3ec)], _0xf734b0, _0x4824f1(0x224), _0x1c49e0, _0x4824f1(0x1a4), _0x19d90b['id']) : _0x4f8b76(_0x19d90b[_0x4824f1(0x3d8)][0x0]['src'], _0xf734b0, 'stories', _0x1c49e0, 'jpg', _0x19d90b['id']);
                }, 0x64 * _0x2f9849);
            });
        }
        async function _0x208cfb(_0xefaa8d, _0x24604f, _0x3a24ec) {
            const _0x4c212c = _0x45c6ee;
            if (_0xefaa8d) {
                let _0x2b233e = new Date()['getTime'](), _0x5e678d = Math['floor'](_0x2b233e / 0x3e8), _0x505787 = _0x5d75dc(_0x4c212c(0x37a))[_0x4c212c(0x194)]()[_0x4c212c(0x3b7)]() || location[_0x4c212c(0x2b6)][_0x4c212c(0x27b)]('/')[_0x4c212c(0x3ed)](_0x3e7dbe => _0x3e7dbe[_0x4c212c(0x1f7)] > 0x0)['at'](0x1);
                _0x9f2e47(!![]);
                if (_0x160d84[_0x4c212c(0x30f)] && !_0x2185ba) {
                    let _0x335ec6 = null, _0x39b075 = await _0x50f578(_0x505787), _0x5d1553 = _0x39b075['user']['pk'], _0x4ee0b3 = await _0x57e988(_0x5d1553), _0x3ce2ac = location['pathname'][_0x4c212c(0x27b)]('/')[_0x4c212c(0x3ed)](_0x31afab => _0x31afab[_0x4c212c(0x1f7)] > 0x0 && _0x31afab[_0x4c212c(0x19f)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x4ee0b3['data']['reels_media'][0x0][_0x4c212c(0x2ce)][_0x4c212c(0x1ac)](_0x59ed2f => {
                        _0x59ed2f['id'] == _0x3ce2ac && (_0x335ec6 = _0x59ed2f['id']);
                    });
                    if (_0x335ec6 == null) {
                        let _0x36df50 = _0x5d75dc(_0x4c212c(0x24a) + _0x505787 + _0x4c212c(0x1e9))['filter'](function () {
                            const _0x1c7691 = _0x4c212c;
                            return _0x5d75dc(this)[_0x1c7691(0x1f4)]()[_0x1c7691(0x1f7)] === 0x0 && _0x5d75dc(this)[_0x1c7691(0x3e6)](_0x1c7691(0x342))[_0x1c7691(0x1f7)] === 0x0 && _0x5d75dc(this)[_0x1c7691(0x3b7)]()?.[_0x1c7691(0x3e8)]() === _0x505787?.[_0x1c7691(0x3e8)]();
                        })['parents'](_0x4c212c(0x337))[_0x4c212c(0x3ed)](function () {
                            return _0x5d75dc(this)['text']()?.['toLowerCase']() !== _0x505787?.['toLowerCase']();
                        })['filter'](function () {
                            const _0x5ed66a = _0x4c212c;
                            return _0x5d75dc(this)[_0x5ed66a(0x1f4)]()[_0x5ed66a(0x1f7)] > 0x1;
                        })[_0x4c212c(0x194)]();
                        _0x36df50[_0x4c212c(0x1f4)]()[_0x4c212c(0x3ed)](function () {
                            const _0x4d42ae = _0x4c212c;
                            return _0x5d75dc(this)[_0x4d42ae(0x2e4)]() < 0xa;
                        })[_0x4c212c(0x194)]()[_0x4c212c(0x1f4)]()[_0x4c212c(0x406)](function (_0x590a94) {
                            const _0x18deb8 = _0x4c212c;
                            _0x5d75dc(this)['children']()['length'] > 0x0 && (_0x335ec6 = _0x4ee0b3['data'][_0x18deb8(0x3c7)][0x0]['items'][_0x590a94]['id']);
                        });
                    }
                    _0x335ec6 == null && (_0x5d75dc(_0x4c212c(0x3d3))[_0x4c212c(0x406)](function (_0x49fdf3) {
                        const _0x24da6b = _0x4c212c;
                        _0x5d75dc(this)[_0x24da6b(0x3dd)](_0x24da6b(0x34f)) && (_0x5d75dc(this)['children']()[_0x24da6b(0x1f7)] > 0x0 && (_0x335ec6 = _0x4ee0b3['data'][_0x24da6b(0x3c7)][0x0][_0x24da6b(0x2ce)][_0x49fdf3]['id']));
                    }), _0x5d75dc(_0x4c212c(0x30e))['each'](function (_0x52274b) {
                        const _0x23c22e = _0x4c212c;
                        _0x5d75dc(this)[_0x23c22e(0x1f4)]()[_0x23c22e(0x3dd)](_0x23c22e(0x334)) && (_0x335ec6 = _0x4ee0b3[_0x23c22e(0x3f6)]['reels_media'][0x0][_0x23c22e(0x2ce)][_0x52274b]['id']);
                    }));
                    _0x335ec6 == null && (_0x335ec6 = location[_0x4c212c(0x2b6)][_0x4c212c(0x27b)]('/')['filter'](_0x5b1ec6 => _0x5b1ec6[_0x4c212c(0x1f7)] > 0x0 && _0x5b1ec6[_0x4c212c(0x19f)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x37ade0 = await _0x2f3c80(_0x335ec6);
                    _0x160d84[_0x4c212c(0x324)] && (_0x5e678d = _0x37ade0[_0x4c212c(0x2ce)][0x0][_0x4c212c(0x246)]);
                    _0x37ade0[_0x4c212c(0x328)] === 'ok' ? _0x37ade0['items'][0x0][_0x4c212c(0x3c9)] ? _0x3a24ec ? _0x43d38e(_0x37ade0['items'][0x0][_0x4c212c(0x3c9)][0x0][_0x4c212c(0x24c)]) : _0x4f8b76(_0x37ade0[_0x4c212c(0x2ce)][0x0][_0x4c212c(0x3c9)][0x0][_0x4c212c(0x24c)], _0x505787, _0x4c212c(0x224), _0x5e678d, 'mp4', _0x335ec6) : _0x3a24ec ? _0x43d38e(_0x37ade0['items'][0x0][_0x4c212c(0x19b)][_0x4c212c(0x3cb)][0x0][_0x4c212c(0x24c)]) : _0x4f8b76(_0x37ade0[_0x4c212c(0x2ce)][0x0][_0x4c212c(0x19b)][_0x4c212c(0x3cb)][0x0][_0x4c212c(0x24c)], _0x505787, _0x4c212c(0x224), _0x5e678d, 'jpg', _0x335ec6) : (_0x160d84[_0x4c212c(0x29a)] ? (_0x2185ba = !![], _0x208cfb(_0xefaa8d, _0x24604f, _0x3a24ec)) : alert(_0x4c212c(0x1ad) + _0x37ade0[_0x4c212c(0x2a1)]), _0x20b6c7(_0x37ade0));
                    _0x9f2e47(![]);
                    return;
                }
                if (_0x5d75dc(_0x4c212c(0x1ba))['length'] > 0x0) {
                    let _0x2d117a = _0x4c212c(0x1a4), _0x1b3d42 = '', _0x4ca613 = location[_0x4c212c(0x2b6)][_0x4c212c(0x381)](/\/$/ig, '')[_0x4c212c(0x27b)]('/')['at'](-0x1), _0x4329a3 = null;
                    if (_0xc11ce1[_0x4c212c(0x224)][_0x505787] && !_0x24604f) {
                        _0x20b6c7(_0x4c212c(0x245), _0x505787), _0xc11ce1['stories'][_0x505787][_0x4c212c(0x3f6)][_0x4c212c(0x3c7)][0x0][_0x4c212c(0x2ce)]['forEach'](_0x20139e => {
                            const _0x998df5 = _0x4c212c;
                            _0x20139e['id'] == _0x4ca613 && (_0x1b3d42 = _0x20139e[_0x998df5(0x371)][0x0][_0x998df5(0x3ec)], _0x160d84[_0x998df5(0x324)] && (_0x5e678d = _0x20139e[_0x998df5(0x372)], _0x4329a3 = _0x20139e['id']));
                        });
                        if (_0x1b3d42[_0x4c212c(0x1f7)] == 0x0) {
                            _0x20b6c7(_0x4c212c(0x2e7), _0x505787), _0x208cfb(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x28e922 = await _0x50f578(_0x505787), _0x3feb89 = _0x28e922['user']['pk'], _0x1d732d = await _0x57e988(_0x3feb89);
                        _0x1d732d[_0x4c212c(0x3f6)]['reels_media'][0x0][_0x4c212c(0x2ce)][_0x4c212c(0x1ac)](_0x88d2b1 => {
                            const _0x2f9e3e = _0x4c212c;
                            _0x88d2b1['id'] == _0x4ca613 && (_0x1b3d42 = _0x88d2b1[_0x2f9e3e(0x371)][0x0][_0x2f9e3e(0x3ec)], _0x160d84[_0x2f9e3e(0x324)] && (_0x5e678d = _0x88d2b1[_0x2f9e3e(0x372)], _0x4329a3 = _0x88d2b1['id']));
                        });
                        if (_0x1b3d42['length'] == 0x0) {
                            let _0x233d36 = _0x5d75dc(_0x4c212c(0x24a) + _0x505787 + _0x4c212c(0x1e9))['filter'](function () {
                                const _0x22779b = _0x4c212c;
                                return _0x5d75dc(this)['children']()[_0x22779b(0x1f7)] === 0x0 && _0x5d75dc(this)[_0x22779b(0x3e6)]('svg')['length'] === 0x0 && _0x5d75dc(this)[_0x22779b(0x3b7)]()?.[_0x22779b(0x3e8)]() === _0x505787?.['toLowerCase']();
                            })[_0x4c212c(0x33a)](_0x4c212c(0x337))[_0x4c212c(0x3ed)](function () {
                                const _0x4bbeaf = _0x4c212c;
                                return _0x5d75dc(this)['text']()?.[_0x4bbeaf(0x3e8)]() !== _0x505787?.['toLowerCase']();
                            })['filter'](function () {
                                const _0x5cbb54 = _0x4c212c;
                                return _0x5d75dc(this)[_0x5cbb54(0x1f4)]()[_0x5cbb54(0x1f7)] > 0x1;
                            })[_0x4c212c(0x194)]();
                            _0x233d36[_0x4c212c(0x1f4)]()[_0x4c212c(0x3ed)](function () {
                                const _0x5bd340 = _0x4c212c;
                                return _0x5d75dc(this)[_0x5bd340(0x2e4)]() < 0xa;
                            })[_0x4c212c(0x194)]()[_0x4c212c(0x1f4)]()[_0x4c212c(0x406)](function (_0x1ca192) {
                                const _0x256db0 = _0x4c212c;
                                _0x5d75dc(this)[_0x256db0(0x1f4)]()['length'] > 0x0 && (_0x1b3d42 = _0x1d732d['data'][_0x256db0(0x3c7)][0x0][_0x256db0(0x2ce)][_0x1ca192]['video_resources'][0x0][_0x256db0(0x3ec)], _0x160d84[_0x256db0(0x324)] && (_0x5e678d = _0x1d732d['data'][_0x256db0(0x3c7)][0x0][_0x256db0(0x2ce)][_0x1ca192]['taken_at_timestamp'], _0x4329a3 = _0x1d732d[_0x256db0(0x3f6)]['reels_media'][0x0][_0x256db0(0x2ce)][_0x1ca192]['id']));
                            }), _0x1b3d42['length'] == 0x0 && (_0x5d75dc(_0x4c212c(0x3d3))[_0x4c212c(0x406)](function (_0x418b01) {
                                const _0xae3144 = _0x4c212c;
                                _0x5d75dc(this)[_0xae3144(0x3dd)](_0xae3144(0x34f)) && (_0x5d75dc(this)['children']()[_0xae3144(0x1f7)] > 0x0 && (_0x1b3d42 = _0x1d732d[_0xae3144(0x3f6)]['reels_media'][0x0][_0xae3144(0x2ce)][_0x418b01][_0xae3144(0x371)][0x0]['src'], _0x160d84[_0xae3144(0x324)] && (_0x5e678d = _0x1d732d[_0xae3144(0x3f6)][_0xae3144(0x3c7)][0x0][_0xae3144(0x2ce)][_0x418b01][_0xae3144(0x372)], _0x4329a3 = _0x1d732d[_0xae3144(0x3f6)][_0xae3144(0x3c7)][0x0][_0xae3144(0x2ce)][_0x418b01]['id'])));
                            }), _0x5d75dc(_0x4c212c(0x30e))[_0x4c212c(0x406)](function (_0x45ba98) {
                                const _0x41d06f = _0x4c212c;
                                _0x5d75dc(this)[_0x41d06f(0x1f4)]()[_0x41d06f(0x3dd)]('_ac3q') && (_0x1b3d42 = _0x1d732d[_0x41d06f(0x3f6)][_0x41d06f(0x3c7)][0x0][_0x41d06f(0x2ce)][_0x45ba98][_0x41d06f(0x371)][0x0][_0x41d06f(0x3ec)], _0x160d84['RENAME_PUBLISH_DATE'] && (_0x5e678d = _0x1d732d['data'][_0x41d06f(0x3c7)][0x0][_0x41d06f(0x2ce)][_0x45ba98][_0x41d06f(0x372)], _0x4329a3 = _0x1d732d[_0x41d06f(0x3f6)][_0x41d06f(0x3c7)][0x0]['items'][_0x45ba98]['id']));
                            }));
                        }
                        _0xc11ce1[_0x4c212c(0x224)][_0x505787] = _0x1d732d;
                    }
                    _0x1b3d42[_0x4c212c(0x1f7)] == 0x0 ? alert(_0x29ce71(_0x4c212c(0x3a1))) : _0x3a24ec ? _0x43d38e(_0x1b3d42) : _0x4f8b76(_0x1b3d42, _0x505787, _0x4c212c(0x224), _0x5e678d, _0x2d117a, _0x4329a3);
                } else {
                    let _0x166578 = _0x5d75dc(_0x4c212c(0x26e))[_0x4c212c(0x3e4)](_0x4c212c(0x26c))?.[_0x4c212c(0x27b)](',')[0x0]?.[_0x4c212c(0x27b)]('\x20')[0x0], _0x12016d = _0x166578 ? _0x166578 : _0x5d75dc('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0x4c212c(0x3ed)](function () {
                            const _0x31c974 = _0x4c212c;
                            return _0x5d75dc(this)[_0x31c974(0x33a)]('a')[_0x31c974(0x1f7)] === 0x0 && _0x5d75dc(this)['width']() === _0x5d75dc(this)['parent']()[_0x31c974(0x1b2)]();
                        })[_0x4c212c(0x3e4)]('src');
                    if (!_0x12016d) {
                        let _0x2c05f2 = _0x5d75dc(_0x4c212c(0x1ca));
                        _0x12016d = _0x2c05f2[_0x4c212c(0x3e4)](_0x4c212c(0x26c)) ? _0x2c05f2[_0x4c212c(0x3e4)](_0x4c212c(0x26c))?.[_0x4c212c(0x27b)](',')[0x0]?.[_0x4c212c(0x27b)]('\x20')[0x0] : _0x2c05f2[_0x4c212c(0x3e4)](_0x4c212c(0x3ec));
                    }
                    _0x160d84[_0x4c212c(0x324)] && (_0x5e678d = new Date(_0x5d75dc(_0x4c212c(0x3df))[_0x4c212c(0x194)]()[_0x4c212c(0x3e4)](_0x4c212c(0x36b)))[_0x4c212c(0x301)]());
                    let _0x20006d = _0x12016d, _0x5dad45 = _0x4c212c(0x1de);
                    _0x3a24ec ? _0x43d38e(_0x20006d) : _0x4f8b76(_0x20006d, _0x505787, 'stories', _0x5e678d, _0x5dad45, _0x325c08(_0x20006d) ?? '');
                }
                _0x2185ba = ![], _0x9f2e47(![]);
            } else {
                let _0x1159bf = _0x4c212c(0x234);
                if (!_0x5d75dc(_0x4c212c(0x1f9))[_0x4c212c(0x1f7)]) {
                    _0xc11ce1['stories'] = {};
                    let _0x477b11 = null;
                    _0x5d75dc(_0x4c212c(0x219))[_0x4c212c(0x1f7)] > 0x0 ? _0x477b11 = _0x5d75dc(_0x4c212c(0x3ff)) : (_0x477b11 = _0x5d75dc(_0x4c212c(0x3d2)), _0x477b11[_0x4c212c(0x354)]('position', _0x4c212c(0x207)));
                    _0x477b11[_0x4c212c(0x1f7)] === 0x0 && (_0x477b11 = _0x5d75dc('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x4c212c(0x3d5)]()[_0x4c212c(0x3d5)]()[_0x4c212c(0x3d5)]()[_0x4c212c(0x3e6)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x477b11['css']('position', _0x4c212c(0x207)));
                    _0x477b11[_0x4c212c(0x1f7)] === 0x0 && (_0x477b11 = _0x5d75dc('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x4c212c(0x3d5)]()[_0x4c212c(0x3d5)]()[_0x4c212c(0x3d5)]()[_0x4c212c(0x3e6)](_0x4c212c(0x2f0)), _0x477b11[_0x4c212c(0x354)](_0x4c212c(0x213), _0x4c212c(0x207)));
                    if (_0x477b11[_0x4c212c(0x1f7)] === 0x0) {
                        let _0x4cce50 = _0x5d75dc(_0x4c212c(0x2b1)), _0x551fa8 = 0x0;
                        _0x4cce50[_0x4c212c(0x406)](function () {
                            const _0x2e1e0f = _0x4c212c;
                            _0x5d75dc(this)['width']() > _0x551fa8 && (_0x551fa8 = _0x5d75dc(this)['width'](), _0x477b11 = _0x5d75dc(this)[_0x2e1e0f(0x1f4)](_0x2e1e0f(0x1c2))['first']());
                        });
                    }
                    _0x477b11 != null && (_0x477b11[_0x4c212c(0x194)]()[_0x4c212c(0x354)](_0x4c212c(0x213), _0x4c212c(0x207)), _0x477b11['first']()[_0x4c212c(0x29e)](_0x4c212c(0x236) + _0x29ce71('DW') + _0x4c212c(0x24d) + _0x5e5a0b[_0x4c212c(0x3b3)] + _0x4c212c(0x1b1)), _0x477b11[_0x4c212c(0x194)]()[_0x4c212c(0x29e)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x29ce71(_0x4c212c(0x32f)) + _0x4c212c(0x362) + _0x5e5a0b['NEW_TAB'] + _0x4c212c(0x1b1)), _0x477b11[_0x4c212c(0x194)]()[_0x4c212c(0x29e)]('<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x29ce71(_0x4c212c(0x31c)) + _0x4c212c(0x34b) + _0x5e5a0b[_0x4c212c(0x3b3)] + _0x4c212c(0x1b1)), _0x477b11[_0x4c212c(0x3e6)](_0x4c212c(0x325))['each'](function () {
                        const _0x611467 = _0x4c212c;
                        _0x5d75dc(this)['on'](_0x611467(0x1a6), function () {
                            const _0x25296d = _0x611467;
                            !_0x5d75dc(this)[_0x25296d(0x3f6)](_0x25296d(0x297)) && (_0x477b11['find']('.IG_DWSTORY_THUMBNAIL')[_0x25296d(0x1f7)] === 0x0 ? (_0x5d75dc(this)[_0x25296d(0x3e4)](_0x25296d(0x215), !![]), _0x5d75dc(_0x25296d(0x238))[_0x25296d(0x388)](), _0x20b6c7('(story)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x5d75dc(this)['attr'](_0x25296d(0x215), !![]), _0x20b6c7(_0x25296d(0x1dd))));
                        });
                    }));
                }
            }
        }
        async function _0x4a775b(_0xfa5c0c, _0x1b9b8e) {
            const _0x2897b5 = _0x45c6ee;
            if (_0xfa5c0c) {
                let _0x29ea5d = new Date()['getTime'](), _0x2bf926 = Math[_0x2897b5(0x24e)](_0x29ea5d / 0x3e8), _0x2a08ea = 'jpg', _0x50d75f = _0x5d75dc(_0x2897b5(0x37a))[_0x2897b5(0x194)]()[_0x2897b5(0x3b7)]() || location[_0x2897b5(0x2b6)]['split']('/')['at'](0x2), _0x1400d2 = _0x2897b5(0x353), _0x5bfcc9 = location['pathname'][_0x2897b5(0x381)](/\/$/ig, '')[_0x2897b5(0x27b)]('/')['at'](-0x1), _0x3f40bd = '', _0x6241d6 = null;
                _0x9f2e47(!![]);
                if (_0x160d84[_0x2897b5(0x30f)] && !_0x2185ba) {
                    let _0x59a3a1 = await _0x50f578(_0x50d75f), _0x265318 = _0x59a3a1[_0x2897b5(0x343)]['pk'], _0x367935 = await _0x57e988(_0x265318), _0x5830dd = location[_0x2897b5(0x2b6)][_0x2897b5(0x27b)]('/')[_0x2897b5(0x3ed)](_0x3e1e2e => _0x3e1e2e['length'] > 0x0 && _0x3e1e2e['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x367935[_0x2897b5(0x3f6)][_0x2897b5(0x3c7)][0x0][_0x2897b5(0x2ce)][_0x2897b5(0x1ac)](_0x56cb48 => {
                        _0x56cb48['id'] == _0x5830dd && (_0x6241d6 = _0x56cb48['id']);
                    });
                    if (_0x6241d6 == null) {
                        let _0x4a7b6b = _0x5d75dc(_0x2897b5(0x24a) + _0x50d75f + _0x2897b5(0x1e9))['filter'](function () {
                            const _0x5e06a7 = _0x2897b5;
                            return _0x5d75dc(this)[_0x5e06a7(0x1f4)]()[_0x5e06a7(0x1f7)] === 0x0 && _0x5d75dc(this)[_0x5e06a7(0x3e6)]('svg')[_0x5e06a7(0x1f7)] === 0x0 && _0x5d75dc(this)[_0x5e06a7(0x3b7)]()?.[_0x5e06a7(0x3e8)]() === _0x50d75f?.[_0x5e06a7(0x3e8)]();
                        })['parents'](_0x2897b5(0x337))[_0x2897b5(0x3ed)](function () {
                            const _0x4417d4 = _0x2897b5;
                            return _0x5d75dc(this)[_0x4417d4(0x3b7)]()?.[_0x4417d4(0x3e8)]() !== _0x50d75f?.['toLowerCase']();
                        })['filter'](function () {
                            const _0x4f7530 = _0x2897b5;
                            return _0x5d75dc(this)[_0x4f7530(0x1f4)]()[_0x4f7530(0x1f7)] > 0x1;
                        })[_0x2897b5(0x194)]();
                        _0x4a7b6b[_0x2897b5(0x1f4)]()[_0x2897b5(0x3ed)](function () {
                            const _0x525ed7 = _0x2897b5;
                            return _0x5d75dc(this)[_0x525ed7(0x2e4)]() < 0xa;
                        })[_0x2897b5(0x194)]()[_0x2897b5(0x1f4)]()[_0x2897b5(0x406)](function (_0x22226b) {
                            const _0x56ae87 = _0x2897b5;
                            _0x5d75dc(this)['children']()[_0x56ae87(0x1f7)] > 0x0 && (_0x6241d6 = _0x367935[_0x56ae87(0x3f6)]['reels_media'][0x0]['items'][_0x22226b]['id']);
                        });
                    }
                    _0x6241d6 == null && (_0x5d75dc(_0x2897b5(0x3d3))[_0x2897b5(0x406)](function (_0x26bd0c) {
                        const _0x392c14 = _0x2897b5;
                        _0x5d75dc(this)[_0x392c14(0x3dd)](_0x392c14(0x34f)) && (_0x5d75dc(this)[_0x392c14(0x1f4)]()['length'] > 0x0 && (_0x6241d6 = _0x367935['data'][_0x392c14(0x3c7)][0x0][_0x392c14(0x2ce)][_0x26bd0c]['id']));
                    }), _0x5d75dc(_0x2897b5(0x30e))[_0x2897b5(0x406)](function (_0x4a3640) {
                        const _0x230450 = _0x2897b5;
                        _0x5d75dc(this)[_0x230450(0x1f4)]()[_0x230450(0x3dd)]('_ac3q') && (_0x6241d6 = _0x367935[_0x230450(0x3f6)]['reels_media'][0x0]['items'][_0x4a3640]['id']);
                    }));
                    _0x6241d6 == null && (_0x6241d6 = location[_0x2897b5(0x2b6)][_0x2897b5(0x27b)]('/')[_0x2897b5(0x3ed)](_0x4b7120 => _0x4b7120['length'] > 0x0 && _0x4b7120[_0x2897b5(0x19f)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x2302f8 = await _0x2f3c80(_0x6241d6);
                    _0x160d84[_0x2897b5(0x324)] && (_0x2bf926 = _0x2302f8[_0x2897b5(0x2ce)][0x0]['taken_at']);
                    _0x2302f8[_0x2897b5(0x328)] === 'ok' ? _0x4f8b76(_0x2302f8[_0x2897b5(0x2ce)][0x0][_0x2897b5(0x19b)][_0x2897b5(0x3cb)][0x0][_0x2897b5(0x24c)], _0x50d75f, 'stories', _0x2bf926, _0x2897b5(0x1de), _0x6241d6) : (_0x160d84['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x2185ba = !![], _0x4a775b(!![], _0x1b9b8e)) : alert(_0x2897b5(0x1ad) + _0x2302f8[_0x2897b5(0x2a1)]), _0x20b6c7(_0x2302f8));
                    _0x9f2e47(![]);
                    return;
                }
                if (_0xc11ce1['stories'][_0x50d75f] && !_0x1b9b8e) {
                    _0x20b6c7(_0x2897b5(0x245), _0x50d75f), _0xc11ce1[_0x2897b5(0x224)][_0x50d75f][_0x2897b5(0x3f6)]['reels_media'][0x0]['items'][_0x2897b5(0x1ac)](_0x3c7fa5 => {
                        _0x3c7fa5['id'] == _0x5bfcc9 && (_0x3f40bd = _0x3c7fa5['display_url'], _0x160d84['RENAME_PUBLISH_DATE'] && (_0x2bf926 = _0x3c7fa5['taken_at_timestamp'], _0x6241d6 = _0x3c7fa5['id']));
                    });
                    if (_0x3f40bd['length'] == 0x0) {
                        _0x20b6c7('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x50d75f), _0x4a775b(!![], !![]);
                        return;
                    }
                } else {
                    let _0x3544ae = await _0x50f578(_0x50d75f), _0x5c4e8b = _0x3544ae[_0x2897b5(0x343)]['pk'], _0x50e62f = await _0x57e988(_0x5c4e8b);
                    _0x50e62f[_0x2897b5(0x3f6)]['reels_media'][0x0][_0x2897b5(0x2ce)][_0x2897b5(0x1ac)](_0x14e1f5 => {
                        const _0x3bf975 = _0x2897b5;
                        _0x14e1f5['id'] == _0x5bfcc9 && (_0x3f40bd = _0x14e1f5[_0x3bf975(0x1f3)], _0x160d84[_0x3bf975(0x324)] && (_0x2bf926 = _0x14e1f5[_0x3bf975(0x372)], _0x6241d6 = _0x14e1f5['id']));
                    });
                    if (_0x3f40bd['length'] == 0x0) {
                        let _0x5420db = _0x5d75dc(_0x2897b5(0x24a) + _0x50d75f + _0x2897b5(0x1e9))[_0x2897b5(0x3ed)](function () {
                            const _0x286548 = _0x2897b5;
                            return _0x5d75dc(this)['children']()[_0x286548(0x1f7)] === 0x0 && _0x5d75dc(this)[_0x286548(0x3e6)](_0x286548(0x342))[_0x286548(0x1f7)] === 0x0 && _0x5d75dc(this)[_0x286548(0x3b7)]()?.['toLowerCase']() === _0x50d75f?.['toLowerCase']();
                        })['parents'](_0x2897b5(0x337))['filter'](function () {
                            const _0x252f16 = _0x2897b5;
                            return _0x5d75dc(this)['text']()?.[_0x252f16(0x3e8)]() !== _0x50d75f?.[_0x252f16(0x3e8)]();
                        })[_0x2897b5(0x3ed)](function () {
                            const _0x6605b9 = _0x2897b5;
                            return _0x5d75dc(this)[_0x6605b9(0x1f4)]()[_0x6605b9(0x1f7)] > 0x1;
                        })[_0x2897b5(0x194)]();
                        _0x5420db['children']()[_0x2897b5(0x3ed)](function () {
                            return _0x5d75dc(this)['height']() < 0xa;
                        })[_0x2897b5(0x194)]()[_0x2897b5(0x1f4)]()[_0x2897b5(0x406)](function (_0x1228f0) {
                            const _0x4b8f92 = _0x2897b5;
                            _0x5d75dc(this)['children']()[_0x4b8f92(0x1f7)] > 0x0 && (_0x3f40bd = _0x50e62f['data'][_0x4b8f92(0x3c7)][0x0][_0x4b8f92(0x2ce)][_0x1228f0][_0x4b8f92(0x1f3)], _0x160d84['RENAME_PUBLISH_DATE'] && (_0x2bf926 = _0x50e62f['data'][_0x4b8f92(0x3c7)][0x0]['items'][_0x1228f0][_0x4b8f92(0x372)], _0x6241d6 = _0x50e62f['data'][_0x4b8f92(0x3c7)][0x0][_0x4b8f92(0x2ce)][_0x1228f0]['id']));
                        }), _0x3f40bd[_0x2897b5(0x1f7)] == 0x0 && (_0x5d75dc(_0x2897b5(0x3d3))['each'](function (_0x4e0345) {
                            const _0x47331d = _0x2897b5;
                            _0x5d75dc(this)[_0x47331d(0x3dd)](_0x47331d(0x34f)) && (_0x5d75dc(this)['children']()[_0x47331d(0x1f7)] > 0x0 && (_0x3f40bd = _0x50e62f[_0x47331d(0x3f6)][_0x47331d(0x3c7)][0x0][_0x47331d(0x2ce)][_0x4e0345]['display_url'], _0x160d84[_0x47331d(0x324)] && (_0x2bf926 = _0x50e62f[_0x47331d(0x3f6)]['reels_media'][0x0][_0x47331d(0x2ce)][_0x4e0345]['taken_at_timestamp'], _0x6241d6 = _0x50e62f['data'][_0x47331d(0x3c7)][0x0]['items'][_0x4e0345]['id'])));
                        }), _0x5d75dc(_0x2897b5(0x30e))[_0x2897b5(0x406)](function (_0x2ddc49) {
                            const _0x1320b4 = _0x2897b5;
                            _0x5d75dc(this)['children']()[_0x1320b4(0x3dd)](_0x1320b4(0x334)) && (_0x3f40bd = _0x50e62f['data'][_0x1320b4(0x3c7)][0x0][_0x1320b4(0x2ce)][_0x2ddc49][_0x1320b4(0x1f3)], _0x160d84['RENAME_PUBLISH_DATE'] && (_0x2bf926 = _0x50e62f['data'][_0x1320b4(0x3c7)][0x0]['items'][_0x2ddc49][_0x1320b4(0x372)], _0x6241d6 = _0x50e62f[_0x1320b4(0x3f6)][_0x1320b4(0x3c7)][0x0][_0x1320b4(0x2ce)][_0x2ddc49]['id']));
                        }));
                    }
                }
                _0x4f8b76(_0x3f40bd, _0x50d75f, 'thumbnail', _0x2bf926, _0x2a08ea, _0x6241d6), _0x2185ba = ![], _0x9f2e47(![]);
            } else {
                if (_0x5d75dc(_0x2897b5(0x3ce))[_0x2897b5(0x3d5)]()[_0x2897b5(0x3e6)](_0x2897b5(0x260))[_0x2897b5(0x1f7)]) {
                    let _0x5886d2 = null;
                    _0x5d75dc(_0x2897b5(0x219))[_0x2897b5(0x1f7)] > 0x0 ? _0x5886d2 = _0x5d75dc('body\x20>\x20div\x20section:visible._ac0a') : (_0x5886d2 = _0x5d75dc('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x5886d2[_0x2897b5(0x354)]('position', _0x2897b5(0x207)));
                    _0x5886d2['length'] === 0x0 && (_0x5886d2 = _0x5d75dc(_0x2897b5(0x2e9))[_0x2897b5(0x3d5)]()[_0x2897b5(0x3d5)]()[_0x2897b5(0x3d5)]()[_0x2897b5(0x3e6)](_0x2897b5(0x2af)), _0x5886d2[_0x2897b5(0x354)](_0x2897b5(0x213), _0x2897b5(0x207)));
                    _0x5886d2[_0x2897b5(0x1f7)] === 0x0 && (_0x5886d2 = _0x5d75dc(_0x2897b5(0x2e9))['parent']()[_0x2897b5(0x3d5)]()[_0x2897b5(0x3d5)]()[_0x2897b5(0x3e6)](_0x2897b5(0x2f0)), _0x5886d2[_0x2897b5(0x354)](_0x2897b5(0x213), 'relative'));
                    if (_0x5886d2[_0x2897b5(0x1f7)] === 0x0) {
                        let _0x1424f2 = _0x5d75dc(_0x2897b5(0x2b1)), _0x303c14 = 0x0;
                        _0x1424f2[_0x2897b5(0x406)](function () {
                            const _0x3268ba = _0x2897b5;
                            _0x5d75dc(this)[_0x3268ba(0x1b2)]() > _0x303c14 && (_0x303c14 = _0x5d75dc(this)[_0x3268ba(0x1b2)](), _0x5886d2 = _0x5d75dc(this)[_0x3268ba(0x1f4)](_0x3268ba(0x1c2))['first']());
                        });
                    }
                    _0x5886d2 != null && (_0x5886d2[_0x2897b5(0x194)]()['css']('position', _0x2897b5(0x207)), _0x5886d2['first']()[_0x2897b5(0x29e)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x29ce71('THUMBNAIL_INTRO') + _0x2897b5(0x233) + _0x5e5a0b[_0x2897b5(0x2c3)] + _0x2897b5(0x1b1)));
                }
            }
        }
        async function _0x162401(_0x547660, _0x539f4e, _0x3d8b22) {
            const _0x2ce3a2 = _0x45c6ee;
            if (_0x547660) {
                _0x9f2e47(!![]);
                let _0x3d241a = location[_0x2ce3a2(0x223)][_0x2ce3a2(0x27b)]('?')['at'](0x0)[_0x2ce3a2(0x27b)](_0x2ce3a2(0x262))['at'](-0x1)[_0x2ce3a2(0x2b0)]('/', ''), _0x59b266 = await _0x3f2848(_0x3d241a), _0x3c7337 = _0x59b266['data'], _0x39c3cc = new Date()[_0x2ce3a2(0x301)]();
                _0x160d84[_0x2ce3a2(0x324)] && (_0x59b266[_0x2ce3a2(0x33e)] === _0x2ce3a2(0x3ad) ? _0x39c3cc = _0x3c7337['shortcode_media'][_0x2ce3a2(0x372)] : _0x39c3cc = _0x3c7337['taken_at']);
                if (_0x59b266[_0x2ce3a2(0x33e)] === _0x2ce3a2(0x3ad)) {
                    if (_0x539f4e && _0x3c7337[_0x2ce3a2(0x284)][_0x2ce3a2(0x311)]) {
                        if (_0x3d8b22)
                            _0x43d38e(_0x3c7337['shortcode_media']['video_url']);
                        else {
                            let _0xf39c9 = _0x2ce3a2(0x1a4);
                            _0x4f8b76(_0x3c7337['shortcode_media'][_0x2ce3a2(0x1ab)], _0x3c7337[_0x2ce3a2(0x284)][_0x2ce3a2(0x264)][_0x2ce3a2(0x2ed)], 'reels', _0x39c3cc, _0xf39c9, _0x3d241a);
                        }
                    } else {
                        if (_0x3d8b22)
                            _0x43d38e(_0x3c7337[_0x2ce3a2(0x284)][_0x2ce3a2(0x3d8)]['at'](-0x1)['src']);
                        else {
                            let _0x54d49e = _0x2ce3a2(0x1de);
                            _0x4f8b76(_0x3c7337[_0x2ce3a2(0x284)][_0x2ce3a2(0x3d8)]['at'](-0x1)[_0x2ce3a2(0x3ec)], _0x3c7337[_0x2ce3a2(0x284)][_0x2ce3a2(0x264)]['username'], _0x2ce3a2(0x3b1), _0x39c3cc, _0x54d49e, _0x3d241a);
                        }
                    }
                } else {
                    if (_0x539f4e && _0x3c7337[_0x2ce3a2(0x3c9)] != null) {
                        if (_0x3d8b22)
                            _0x43d38e(_0x3c7337[_0x2ce3a2(0x3c9)][0x0][_0x2ce3a2(0x24c)]);
                        else {
                            let _0x9395c4 = _0x2ce3a2(0x1a4);
                            _0x4f8b76(_0x3c7337['video_versions'][0x0]['url'], _0x3c7337['owner'][_0x2ce3a2(0x2ed)], _0x2ce3a2(0x3b1), _0x39c3cc, _0x9395c4, _0x3d241a);
                        }
                    } else {
                        if (_0x3d8b22)
                            _0x43d38e(_0x3c7337['image_versions2'][_0x2ce3a2(0x3cb)][0x0][_0x2ce3a2(0x24c)]);
                        else {
                            let _0x3ebb93 = _0x2ce3a2(0x1de);
                            _0x4f8b76(_0x3c7337[_0x2ce3a2(0x19b)]['candidates'][0x0][_0x2ce3a2(0x24c)], _0x3c7337['owner']['username'], _0x2ce3a2(0x3b1), _0x39c3cc, _0x3ebb93, _0x3d241a);
                        }
                    }
                }
                _0x9f2e47(![]);
            } else
                var _0x7000b6 = setInterval(() => {
                    const _0x5daba1 = _0x2ce3a2;
                    _0x5d75dc(_0x5daba1(0x225))[_0x5daba1(0x1f7)] > 0x0 && (clearInterval(_0x7000b6), _0x160d84[_0x5daba1(0x3c3)] && (_0x5d75dc(_0x5daba1(0x1e2))[_0x5daba1(0x388)](), _0x5d75dc(_0x5daba1(0x2c0))[_0x5daba1(0x29e)](_0x5daba1(0x3de)), _0x5d75dc('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x5daba1(0x29e)](_0x5daba1(0x1a0)), _0x5d75dc(_0x5daba1(0x309))['append'](_0x5daba1(0x37c)), _0x5d75dc('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up')['on']('click', function () {
                        const _0x6d4541 = _0x5daba1;
                        _0x5d75dc(_0x6d4541(0x1bf))[0x0][_0x6d4541(0x1b0)]({
                            'top': -0x1e,
                            'behavior': 'smooth'
                        });
                    }), _0x5d75dc(_0x5daba1(0x3d7))['on'](_0x5daba1(0x36f), function () {
                        const _0x301d77 = _0x5daba1;
                        _0x5d75dc('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x301d77(0x1b0)]({
                            'top': 0x1e,
                            'behavior': _0x301d77(0x19a)
                        });
                    })), _0x5d75dc('section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]')[_0x5daba1(0x1f4)](_0x5daba1(0x1c2))['each'](function () {
                        const _0x234f24 = _0x5daba1;
                        if (_0x5d75dc(this)[_0x234f24(0x1f4)]()['length'] > 0x0) {
                            if (!_0x5d75dc(this)['children']()[_0x234f24(0x3e6)]('.IG_REELS')[_0x234f24(0x1f7)]) {
                                var _0xf33ba3 = _0x5d75dc(this);
                                _0x5d75dc(this)[_0x234f24(0x1f4)]()[_0x234f24(0x354)]('position', 'relative'), _0x5d75dc(this)[_0x234f24(0x1f4)]()[_0x234f24(0x29e)](_0x234f24(0x236) + _0x29ce71('DW') + _0x234f24(0x1b3) + _0x5e5a0b[_0x234f24(0x3b3)] + _0x234f24(0x1b1)), _0x5d75dc(this)[_0x234f24(0x1f4)]()[_0x234f24(0x29e)](_0x234f24(0x274) + _0x29ce71('NEW_TAB') + '\x22\x20class=\x22IG_REELS_NEWTAB\x22>' + _0x5e5a0b['NEW_TAB'] + _0x234f24(0x1b1)), _0x5d75dc(this)[_0x234f24(0x1f4)]()[_0x234f24(0x29e)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x29ce71(_0x234f24(0x2c6)) + _0x234f24(0x21e) + _0x5e5a0b[_0x234f24(0x2c3)] + '</div>');
                                _0x160d84[_0x234f24(0x2a7)] && _0x5d75dc(this)[_0x234f24(0x3e6)]('video')[_0x234f24(0x406)](function () {
                                    const _0x16ff7d = _0x234f24;
                                    _0x5d75dc(this)['on'](_0x16ff7d(0x27f), function () {
                                        const _0x3a277b = _0x16ff7d;
                                        if (!_0x5d75dc(this)['data']('loop')) {
                                            let _0x3f1d22 = _0x5d75dc(this)[_0x3a277b(0x2ab)]()[_0x3a277b(0x3e6)](_0x3a277b(0x38d))[_0x3a277b(0x33a)]('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x3f1d22[_0x3a277b(0x1f7)] > 0x0 ? (_0x5d75dc(this)[_0x3a277b(0x3e4)](_0x3a277b(0x2a3), !![]), _0x3f1d22[_0x3a277b(0x36f)](), _0x20b6c7(_0x3a277b(0x302))) : (_0x5d75dc(this)[_0x3a277b(0x3e4)]('data-loop', !![]), _0x5d75dc(this)[_0x3a277b(0x3d5)]()['find'](_0x3a277b(0x272))[_0x3a277b(0x401)](_0x3a277b(0x391)), this[_0x3a277b(0x26b)](), _0x20b6c7('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()'));
                                        }
                                    });
                                });
                                _0x160d84['HTML5_VIDEO_CONTROL'] && _0x5d75dc(this)['find'](_0x234f24(0x275))[_0x234f24(0x406)](function () {
                                    const _0x52b1cc = _0x234f24;
                                    if (!_0x5d75dc(this)[_0x52b1cc(0x3f6)]('controls')) {
                                        let _0x589070 = _0x5d75dc(this);
                                        _0x20b6c7('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), this[_0x52b1cc(0x1bc)] = _0x5bbd81, _0x5d75dc(this)['on'](_0x52b1cc(0x20d), function () {
                                            this['volume'] = _0x5bbd81;
                                        }), _0x5d75dc(this)['on']('contextmenu', function (_0x8e4991) {
                                            const _0x223dfd = _0x52b1cc;
                                            _0x8e4991['preventDefault'](), _0x589070['css'](_0x223dfd(0x346), '-1'), _0x589070['removeAttr'](_0x223dfd(0x2bc));
                                        }), _0x5d75dc(this)['parent']()['find'](_0x52b1cc(0x3c4))[_0x52b1cc(0x3ed)](function () {
                                            const _0x10925d = _0x52b1cc;
                                            return _0x5d75dc(this)[_0x10925d(0x3d5)](_0x10925d(0x3f8))[_0x10925d(0x1f7)] > 0x0 && _0x5d75dc(this)['css'](_0x10925d(0x359)) === _0x10925d(0x351) && _0x5d75dc(this)[_0x10925d(0x3e4)](_0x10925d(0x391)) != null;
                                        })[_0x52b1cc(0x194)]()['on'](_0x52b1cc(0x3cf), function (_0x45c739) {
                                            const _0x5c422b = _0x52b1cc;
                                            _0x45c739['preventDefault'](), _0x589070['css'](_0x5c422b(0x346), '2'), _0x589070['attr'](_0x5c422b(0x2bc), !![]);
                                        }), _0x5d75dc(this)['on'](_0x52b1cc(0x2d6), function () {
                                            const _0x54d6f7 = _0x52b1cc;
                                            let _0x9fa6a6 = _0x5d75dc(this)[_0x54d6f7(0x3d5)]()['find'](_0x54d6f7(0x370))[_0x54d6f7(0x3e6)](_0x54d6f7(0x3e0))[_0x54d6f7(0x3ed)](function (_0x88d66e) {
                                                const _0x57e415 = _0x54d6f7;
                                                return _0x5d75dc(this)[_0x57e415(0x1b2)]() <= 0x40 && _0x5d75dc(this)['height']() <= 0x40 && _0x5d75dc(this)[_0x57e415(0x3e6)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')[_0x57e415(0x1f7)] > 0x0;
                                            });
                                            var _0x5a615f = _0x9fa6a6[_0x54d6f7(0x3e6)](_0x54d6f7(0x3a0))[_0x54d6f7(0x1f7)] === 0x0;
                                            this['muted'] != _0x5a615f && (this['volume'] = _0x5bbd81, _0x9fa6a6?.[_0x54d6f7(0x36f)]()), _0x5d75dc(this)[_0x54d6f7(0x3e4)](_0x54d6f7(0x3b5)) && (_0x5bbd81 = this[_0x54d6f7(0x1bc)], GM_setValue(_0x54d6f7(0x3d1), this[_0x54d6f7(0x1bc)])), this['volume'] == _0x5bbd81 && _0x5d75dc(this)[_0x54d6f7(0x3e4)](_0x54d6f7(0x3b5), !![]);
                                        }), _0x5d75dc(this)[_0x52b1cc(0x354)](_0x52b1cc(0x213), _0x52b1cc(0x202)), _0x5d75dc(this)[_0x52b1cc(0x354)]('z-index', '2'), _0x5d75dc(this)[_0x52b1cc(0x3e4)](_0x52b1cc(0x3d9), !![]), _0x5d75dc(this)[_0x52b1cc(0x3e4)]('controls', !![]);
                                    }
                                });
                                var _0x3afdee = _0xf33ba3['find'](_0x234f24(0x275)), _0xe3e61d = _0x5d75dc(this)[_0x234f24(0x3e6)](_0x234f24(0x368))['first']();
                                _0x59d5a4(_0x3afdee, _0xe3e61d, _0x234f24(0x31d));
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x325c08(_0x45cb07) {
            const _0xcfbf59 = _0x45c6ee;
            let _0x40a3ea = new URL(_0x45cb07), _0x5e0626 = _0x40a3ea?.[_0xcfbf59(0x3a9)]?.[_0xcfbf59(0x298)](_0xcfbf59(0x254))?.[_0xcfbf59(0x27b)]('.')['at'](0x0);
            return _0x5e0626 ? atob(_0x5e0626) : null;
        }
        function _0x19edf7(_0x131e7f) {
            return new Promise((_0x3bfc89, _0x4433dc) => {
                const _0x2c38d6 = a0_0x1075;
                let _0x18a7e1 = _0x2c38d6(0x31b) + _0x131e7f + _0x2c38d6(0x1ae);
                GM_xmlhttpRequest({
                    'method': _0x2c38d6(0x395),
                    'url': _0x18a7e1,
                    'onload': function (_0x46e7ac) {
                        const _0x2e76a6 = _0x2c38d6;
                        try {
                            let _0x246cdb = JSON[_0x2e76a6(0x3b2)](_0x46e7ac[_0x2e76a6(0x3db)]);
                            _0x3bfc89(_0x246cdb);
                        } catch (_0x5d8a95) {
                            _0x20b6c7('getHighlightStories()', _0x2e76a6(0x1ee), _0x5d8a95['message']), _0x4433dc(_0x5d8a95);
                        }
                    },
                    'onerror': function (_0x1addf9) {
                        _0x20b6c7('getHighlightStories()', 'reject', _0x1addf9), _0x4433dc(_0x1addf9);
                    }
                });
            });
        }
        function _0x57e988(_0x20412c) {
            return new Promise((_0x288c47, _0xe57c14) => {
                const _0x303667 = a0_0x1075;
                let _0x51b03a = _0x303667(0x265) + _0x20412c + _0x303667(0x1ae);
                GM_xmlhttpRequest({
                    'method': _0x303667(0x395),
                    'url': _0x51b03a,
                    'onload': function (_0x4bf4f8) {
                        const _0x2b587f = _0x303667;
                        try {
                            let _0x1b8b2b = JSON[_0x2b587f(0x3b2)](_0x4bf4f8[_0x2b587f(0x3db)]);
                            _0x20b6c7(_0x2b587f(0x3bf), _0x1b8b2b), _0x288c47(_0x1b8b2b);
                        } catch (_0x101d02) {
                            _0x20b6c7(_0x2b587f(0x3bf), 'reject', _0x101d02[_0x2b587f(0x2a1)]), _0xe57c14(_0x101d02);
                        }
                    },
                    'onerror': function (_0x236ff5) {
                        const _0x25dd5d = _0x303667;
                        _0x20b6c7(_0x25dd5d(0x3bf), _0x25dd5d(0x1ee), _0x236ff5), _0xe57c14(_0x236ff5);
                    }
                });
            });
        }
        function _0x50f578(_0x4d0fd9) {
            return new Promise((_0x1699a5, _0x1a4899) => {
                const _0xda6f9f = a0_0x1075;
                let _0x3814df = _0xda6f9f(0x28b) + _0x4d0fd9;
                GM_xmlhttpRequest({
                    'method': _0xda6f9f(0x395),
                    'url': _0x3814df,
                    'onload': function (_0x5a5e8a) {
                        const _0x767a76 = _0xda6f9f;
                        let _0x577db5 = JSON[_0x767a76(0x3b2)](_0x5a5e8a[_0x767a76(0x3db)]), _0x24e026 = null;
                        _0x577db5['users'][_0x767a76(0x1ac)](_0x20e600 => {
                            const _0x43c832 = _0x767a76;
                            _0x20e600[_0x43c832(0x343)][_0x43c832(0x2ed)]?.[_0x43c832(0x3e8)]() === _0x4d0fd9?.[_0x43c832(0x3e8)]() && (_0x24e026 = _0x20e600);
                        }), _0x24e026 != null ? (_0x20b6c7(_0x767a76(0x1a5), _0x24e026), _0x1699a5(_0x24e026)) : _0x373b26(_0x4d0fd9)[_0x767a76(0x2d5)](_0x511559 => {
                            _0x1699a5(_0x511559);
                        })[_0x767a76(0x227)](_0x444a88 => {
                            alert('Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()');
                        });
                    },
                    'onerror': function (_0xe6923e) {
                        const _0x19fd18 = _0xda6f9f;
                        _0x20b6c7(_0x19fd18(0x1a5), 'reject', _0xe6923e), _0x1a4899(_0xe6923e);
                    }
                });
            });
        }
        function _0x373b26(_0x4ec29d) {
            return new Promise((_0x22f91a, _0x1f02b8) => {
                const _0x575aa6 = a0_0x1075;
                let _0x50e0ef = _0x575aa6(0x313) + _0x4ec29d;
                GM_xmlhttpRequest({
                    'method': _0x575aa6(0x395),
                    'url': _0x50e0ef,
                    'headers': { 'X-IG-App-ID': _0x407ce1() },
                    'onload': function (_0x5e46e7) {
                        const _0x2a7ba5 = _0x575aa6;
                        try {
                            let _0x301720 = JSON[_0x2a7ba5(0x3b2)](_0x5e46e7[_0x2a7ba5(0x3db)]), _0x2a5bcb = _0x301720?.[_0x2a7ba5(0x3f6)]?.[_0x2a7ba5(0x343)];
                            if (_0x2a5bcb != null) {
                                let _0x58d0ea = _0x301720?.[_0x2a7ba5(0x3f6)];
                                _0x58d0ea[_0x2a7ba5(0x343)]['pk'] = _0x58d0ea['user']['id'], _0x20b6c7(_0x2a7ba5(0x23b), _0x301720), _0x22f91a(_0x58d0ea);
                            } else
                                _0x20b6c7(_0x2a7ba5(0x23b), 'reject', _0x2a7ba5(0x1e1)), _0x1f02b8(_0x2a7ba5(0x1e1));
                        } catch (_0x1cd64d) {
                            _0x20b6c7(_0x2a7ba5(0x23b), _0x2a7ba5(0x1ee), _0x1cd64d['message']), _0x1f02b8(_0x1cd64d);
                        }
                    },
                    'onerror': function (_0x5216e9) {
                        const _0x3deafe = _0x575aa6;
                        _0x20b6c7(_0x3deafe(0x23b), 'reject', _0x5216e9), _0x1f02b8(_0x5216e9);
                    }
                });
            });
        }
        function _0xe6503(_0x50d055) {
            return new Promise((_0x3ad913, _0x3da8c0) => {
                const _0x5d25fb = a0_0x1075;
                let _0x1ba2b1 = _0x5d25fb(0x3b9) + _0x50d055 + _0x5d25fb(0x32b);
                GM_xmlhttpRequest({
                    'method': _0x5d25fb(0x395),
                    'url': _0x1ba2b1,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x5d5698) {
                        const _0x48d238 = _0x5d25fb;
                        try {
                            let _0x4155b3 = JSON['parse'](_0x5d5698['response']);
                            _0x4155b3[_0x48d238(0x328)] !== 'ok' ? (_0x20b6c7('getUserHighSizeProfile()', 'reject', _0x4155b3), _0x3da8c0(_0x48d238(0x35c))) : (_0x20b6c7('getUserHighSizeProfile()', _0x4155b3), _0x3ad913(_0x4155b3[_0x48d238(0x343)][_0x48d238(0x400)]?.[_0x48d238(0x24c)]));
                        } catch (_0x3bbc10) {
                            _0x20b6c7(_0x48d238(0x1a2), _0x48d238(0x1ee), _0x3bbc10), _0x3da8c0(_0x3bbc10);
                        }
                    },
                    'onerror': function (_0x4b0a95) {
                        const _0x19e30e = _0x5d25fb;
                        _0x20b6c7('getUserHighSizeProfile()', _0x19e30e(0x1ee), _0x4b0a95), _0x3da8c0(_0x4b0a95);
                    }
                });
            });
        }
        function _0x35e366(_0x3af381) {
            return new Promise((_0x36d85f, _0x5abc04) => {
                const _0x2c4298 = a0_0x1075;
                if (!_0x3af381)
                    _0x5abc04(_0x2c4298(0x27e));
                let _0x3ed0ae = _0x3af381, _0x5b2069 = _0x2c4298(0x235) + _0x3ed0ae + '%22}';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x5b2069,
                    'onload': function (_0x4610a7) {
                        const _0x998ca5 = _0x2c4298;
                        try {
                            let _0x56b01b = JSON[_0x998ca5(0x3b2)](_0x4610a7[_0x998ca5(0x3db)]);
                            _0x20b6c7(_0x998ca5(0x3ee), _0x56b01b), _0x36d85f(_0x56b01b['data'][_0x998ca5(0x284)][_0x998ca5(0x264)][_0x998ca5(0x2ed)]);
                        } catch (_0x39ba36) {
                            _0x20b6c7(_0x998ca5(0x3ee), 'reject', _0x39ba36[_0x998ca5(0x2a1)]), _0x5abc04(_0x39ba36);
                        }
                    },
                    'onerror': function (_0x1e8e28) {
                        const _0x2590e9 = _0x2c4298;
                        _0x20b6c7('getPostOwner()', _0x2590e9(0x1ee), _0x1e8e28), _0x5abc04(_0x1e8e28);
                    }
                });
            });
        }
        function _0x3f2848(_0x366363) {
            return new Promise((_0x23d48d, _0x2368d6) => {
                const _0x2e439e = a0_0x1075;
                if (!_0x366363)
                    _0x2368d6('NOPATH');
                let _0x522c73 = _0x366363, _0x122c15 = _0x2e439e(0x235) + _0x522c73 + _0x2e439e(0x1d0);
                GM_xmlhttpRequest({
                    'method': _0x2e439e(0x395),
                    'url': _0x122c15,
                    'headers': { 'User-Agent': _0x2e439e(0x37b) },
                    'onload': function (_0x7c455c) {
                        const _0x5b68c4 = _0x2e439e;
                        try {
                            let _0x2c400c = JSON[_0x5b68c4(0x3b2)](_0x7c455c[_0x5b68c4(0x3db)]);
                            _0x20b6c7(_0x2c400c), _0x2c400c[_0x5b68c4(0x328)] === _0x5b68c4(0x2cc) ? (_0x20b6c7(_0x5b68c4(0x28e), _0x5b68c4(0x1a7), _0x522c73), _0x48337a(_0x522c73)[_0x5b68c4(0x2d5)](_0x2a2b55 => {
                                const _0x22b99d = _0x5b68c4;
                                _0x23d48d({
                                    'type': _0x22b99d(0x1c0),
                                    'data': _0x2a2b55[_0x22b99d(0x3b6)]['items'][0x0]
                                });
                            })[_0x5b68c4(0x227)](_0x14beda => {
                                _0x2368d6(_0x14beda);
                            })) : _0x23d48d({
                                'type': 'query_hash',
                                'data': _0x2c400c['data']
                            });
                        } catch (_0x5253bf) {
                            _0x20b6c7(_0x5b68c4(0x2c8), _0x5b68c4(0x1ee), _0x5253bf['message']), _0x2368d6(_0x5253bf);
                        }
                    },
                    'onerror': function (_0x2e10bd) {
                        const _0x3810cd = _0x2e439e;
                        _0x20b6c7(_0x3810cd(0x2c8), _0x3810cd(0x1ee), _0x2e10bd), _0x2368d6(_0x2e10bd);
                    }
                });
            });
        }
        function _0x48337a(_0x75c508) {
            return new Promise((_0x1ccd1d, _0x307ec1) => {
                const _0x71c744 = a0_0x1075;
                if (!_0x75c508)
                    _0x307ec1(_0x71c744(0x27e));
                let _0x4374c0 = _0x75c508, _0x26243c = _0x71c744(0x19c) + _0x4374c0 + _0x71c744(0x2bf);
                GM_xmlhttpRequest({
                    'method': _0x71c744(0x395),
                    'url': _0x26243c,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x407ce1()
                    },
                    'onload': function (_0x274430) {
                        const _0x9c7ca6 = _0x71c744;
                        try {
                            let _0x2d3557 = JSON[_0x9c7ca6(0x3b2)](_0x274430[_0x9c7ca6(0x3db)]);
                            _0x20b6c7(_0x2d3557), _0x2d3557[_0x9c7ca6(0x328)] === _0x9c7ca6(0x2cc) ? (alert(_0x9c7ca6(0x259) + _0x2d3557[_0x9c7ca6(0x2a1)] + ':\x20' + _0x2d3557[_0x9c7ca6(0x39c)]), _0x20b6c7(_0x9c7ca6(0x208) + _0x2d3557[_0x9c7ca6(0x2a1)] + ':\x20' + _0x2d3557[_0x9c7ca6(0x39c)]), _0x307ec1(_0x274430)) : (_0x20b6c7(_0x9c7ca6(0x1c4), _0x2d3557['data']), _0x1ccd1d(_0x2d3557[_0x9c7ca6(0x3f6)]));
                        } catch (_0x574e29) {
                            _0x20b6c7(_0x9c7ca6(0x1c4), _0x9c7ca6(0x1ee), _0x574e29[_0x9c7ca6(0x2a1)]), _0x307ec1(_0x574e29);
                        }
                    },
                    'onerror': function (_0x19ce76) {
                        const _0x5b16a6 = _0x71c744;
                        _0x20b6c7('getBlobMediaWithQueryID()', _0x5b16a6(0x1ee), _0x19ce76), _0x307ec1(_0x19ce76);
                    }
                });
            });
        }
        function _0x251be5(_0x24d512, _0x37c1f3) {
            const _0x2d2558 = _0x45c6ee;
            _0x37c1f3 === !![] && (_0x20b6c7(_0x2d2558(0x2a6), 'regenerated'), _0x5d75dc(_0x2d2558(0x318))[_0x2d2558(0x3ed)](function () {
                const _0x362e1c = _0x2d2558;
                return _0x5d75dc(this)[_0x362e1c(0x3e6)](_0x362e1c(0x1ed))['length'] === 0x0;
            })[_0x2d2558(0x401)]('data-snig'));
            if (_0x24d512 == ![]) {
                const _0x38c3bc = 0x64;
                let _0x2a0821 = 0x0;
                var _0x506b92 = setInterval(() => {
                    const _0x3f55d8 = _0x2d2558;
                    (_0x2a0821 > _0x38c3bc || _0x5d75dc(_0x3f55d8(0x3c1))[_0x3f55d8(0x1f7)] > 0x0) && (clearInterval(_0x506b92), _0x2a0821 > _0x38c3bc && console['warn']('onReadyMyDW()\x20Timer', 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x20b6c7(_0x3f55d8(0x2c7), _0x3f55d8(0x319)), _0x3329eb(), _0x2a0821++;
                }, 0x32);
            } else
                _0x3329eb();
        }
        function _0x407ce1() {
            const _0x159f72 = _0x45c6ee;
            let _0x4ceeb6 = null;
            return _0x5d75dc(_0x159f72(0x2dd))[_0x159f72(0x406)](function () {
                const _0x5befce = _0x159f72, _0x5c6aca = /"APP_ID":"([0-9]+)"/ig, _0x1f540e = _0x5d75dc(this)['text']()[_0x5befce(0x19f)](_0x5c6aca);
                _0x1f540e != null && _0x4ceeb6 == null && (_0x4ceeb6 = [..._0x5d75dc(this)[_0x5befce(0x3b7)]()[_0x5befce(0x1c6)](_0x5c6aca)]);
            }), _0x4ceeb6 ? _0x4ceeb6['at'](0x0)['at'](-0x1) : null;
        }
        function _0x9f2e47(_0x55a7b9) {
            const _0x4aaa9d = _0x45c6ee;
            _0x55a7b9 ? (_0x5d75dc(_0x4aaa9d(0x19d))[_0x4aaa9d(0x285)]('x1s85apg'), _0x5d75dc(_0x4aaa9d(0x19d))[_0x4aaa9d(0x354)]('z-index', _0x4aaa9d(0x2ad))) : (_0x5d75dc(_0x4aaa9d(0x19d))[_0x4aaa9d(0x1b5)]('x1s85apg'), _0x5d75dc(_0x4aaa9d(0x19d))[_0x4aaa9d(0x354)](_0x4aaa9d(0x346), ''));
        }
        function _0x2f3c80(_0x2baf4a) {
            return new Promise((_0x3ffd69, _0x5af668) => {
                const _0x2fe098 = a0_0x1075;
                let _0x5c4cf9 = _0x2fe098(0x29b) + _0x2baf4a + '/info/';
                if (_0x2baf4a == null) {
                    alert(_0x2fe098(0x28f)), _0x20b6c7('getMediaInfo()', _0x2fe098(0x1ee), _0x2fe098(0x28f)), _0x9f2e47(![]), _0x5af668(-0x1);
                    return;
                }
                if (_0x407ce1() == null) {
                    alert(_0x2fe098(0x2e6)), _0x20b6c7('getMediaInfo()', _0x2fe098(0x1ee), 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x9f2e47(![]), _0x5af668(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x2fe098(0x395),
                    'url': _0x5c4cf9,
                    'headers': {
                        'User-Agent': window[_0x2fe098(0x1bb)][_0x2fe098(0x2a2)],
                        'Accept': _0x2fe098(0x350),
                        'X-IG-App-ID': _0x407ce1()
                    },
                    'onload': function (_0x3c015d) {
                        const _0x35eadc = _0x2fe098;
                        if (_0x3c015d[_0x35eadc(0x212)] == _0x5c4cf9) {
                            let _0x2ed98c = JSON[_0x35eadc(0x3b2)](_0x3c015d[_0x35eadc(0x3db)]);
                            _0x20b6c7('getMediaInfo()', _0x2ed98c), _0x3ffd69(_0x2ed98c);
                        } else {
                            let _0x1f58a5 = new URL(_0x3c015d[_0x35eadc(0x212)]);
                            _0x1f58a5[_0x35eadc(0x2b6)]['startsWith'](_0x35eadc(0x289)) ? (_0x20b6c7(_0x35eadc(0x2e3), 'reject', _0x35eadc(0x358)), alert(_0x35eadc(0x358))) : (_0x20b6c7('getMediaInfo()', _0x35eadc(0x1ee), _0x35eadc(0x396) + _0x3c015d[_0x35eadc(0x212)] + '\x22'), alert(_0x35eadc(0x396) + _0x3c015d['finalUrl'] + '\x22')), _0x9f2e47(![]), _0x5af668(-0x1);
                        }
                    },
                    'onerror': function (_0x50e938) {
                        const _0x1c03ba = _0x2fe098;
                        _0x20b6c7('getMediaInfo()', _0x1c03ba(0x1ee), _0x50e938), _0x3ffd69(_0x50e938);
                    }
                });
            });
        }
        function _0x3f4ffb(_0x7b7941) {
            const _0x1e73b6 = _0x45c6ee;
            var _0x565e2a = 0x0, _0x6288e5 = _0x7b7941['find'](_0x1e73b6(0x2bb));
            return (_0x6288e5 == null || !_0x6288e5[_0x1e73b6(0x3dd)]('_acnb')) && (_0x6288e5 = _0x7b7941['find'](_0x1e73b6(0x304))['eq'](0x0)[_0x1e73b6(0x1f4)](_0x1e73b6(0x1c2))), _0x6288e5[_0x1e73b6(0x3ed)](_0x1e73b6(0x3a7))[_0x1e73b6(0x406)](function (_0x31b8c7) {
                const _0x4e96ef = _0x1e73b6;
                _0x5d75dc(this)['hasClass'](_0x4e96ef(0x2b3)) && (_0x565e2a = _0x31b8c7);
            }), _0x565e2a;
        }
        function _0x21e383(_0x396e9e) {
            const _0x3e914c = _0x45c6ee;
            _0x160d84[_0x3e914c(0x2a7)] && _0x396e9e['find']('video')[_0x3e914c(0x406)](function () {
                const _0x2b4bf3 = _0x3e914c;
                _0x5d75dc(this)['on'](_0x2b4bf3(0x27f), function () {
                    const _0x37be64 = _0x2b4bf3;
                    !_0x5d75dc(this)['data'](_0x37be64(0x1a3)) && (_0x5d75dc(this)[_0x37be64(0x3e4)](_0x37be64(0x2a3), !![]), this[_0x37be64(0x26b)](), _0x20b6c7(_0x37be64(0x360)));
                });
            });
            _0x160d84[_0x3e914c(0x2fa)] && _0x396e9e[_0x3e914c(0x3e6)](_0x3e914c(0x275))[_0x3e914c(0x406)](function () {
                const _0x4d5082 = _0x3e914c;
                _0x5d75dc(this)['on'](_0x4d5082(0x1af), function () {
                    const _0x26cd24 = _0x4d5082;
                    !_0x5d75dc(this)[_0x26cd24(0x3f6)]('modify') && (_0x5d75dc(this)[_0x26cd24(0x3e4)]('data-modify', !![]), this['volume'] = _0x5bbd81, _0x20b6c7(_0x26cd24(0x270)));
                });
            });
            _0x160d84[_0x3e914c(0x198)] && _0x396e9e['find']('video')[_0x3e914c(0x406)](function () {
                const _0x3ff797 = _0x3e914c;
                if (!_0x5d75dc(this)[_0x3ff797(0x3f6)](_0x3ff797(0x2bc))) {
                    let _0x520efe = _0x5d75dc(this);
                    _0x20b6c7(_0x3ff797(0x1ef)), this[_0x3ff797(0x1bc)] = _0x5bbd81, _0x5d75dc(this)['on'](_0x3ff797(0x20d), function () {
                        this['volume'] = _0x5bbd81;
                    }), _0x5d75dc(this)['on']('contextmenu', function (_0x4cab78) {
                        const _0x4fb21e = _0x3ff797;
                        _0x4cab78[_0x4fb21e(0x255)](), _0x520efe['css'](_0x4fb21e(0x346), '-1'), _0x520efe[_0x4fb21e(0x401)](_0x4fb21e(0x2bc));
                    }), _0x5d75dc(this)['parent']()[_0x3ff797(0x3e6)](_0x3ff797(0x370))[_0x3ff797(0x194)]()['on'](_0x3ff797(0x3cf), function (_0x32d04f) {
                        const _0x1010eb = _0x3ff797;
                        _0x32d04f['preventDefault'](), _0x520efe[_0x1010eb(0x354)](_0x1010eb(0x346), '2'), _0x520efe[_0x1010eb(0x3e4)](_0x1010eb(0x2bc), !![]);
                    }), _0x5d75dc(this)['on'](_0x3ff797(0x2d6), function () {
                        const _0xb17d55 = _0x3ff797;
                        let _0x396efb = _0x5d75dc(this)[_0xb17d55(0x3d5)]()['find'](_0xb17d55(0x370))[_0xb17d55(0x3e6)](_0xb17d55(0x3e0))[_0xb17d55(0x3ed)](function (_0x53dd62) {
                            const _0x142bfe = _0xb17d55;
                            return _0x5d75dc(this)[_0x142bfe(0x1b2)]() <= 0x40 && _0x5d75dc(this)[_0x142bfe(0x2e4)]() <= 0x40 && _0x5d75dc(this)[_0x142bfe(0x3e6)](_0x142bfe(0x332))['length'] > 0x0;
                        });
                        var _0x5b574b = _0x396efb[_0xb17d55(0x3e6)](_0xb17d55(0x3a0))[_0xb17d55(0x1f7)] === 0x0;
                        this[_0xb17d55(0x3a5)] != _0x5b574b && (this[_0xb17d55(0x1bc)] = _0x5bbd81, _0x396efb?.[_0xb17d55(0x36f)]()), _0x5d75dc(this)[_0xb17d55(0x3e4)](_0xb17d55(0x3b5)) && (_0x5bbd81 = this[_0xb17d55(0x1bc)], GM_setValue('G_VIDEO_VOLUME', this['volume'])), this[_0xb17d55(0x1bc)] == _0x5bbd81 && _0x5d75dc(this)[_0xb17d55(0x3e4)]('data-completed', !![]);
                    }), _0x5d75dc(this)[_0x3ff797(0x354)]('position', _0x3ff797(0x202)), _0x5d75dc(this)[_0x3ff797(0x354)](_0x3ff797(0x346), '2'), _0x5d75dc(this)[_0x3ff797(0x3e4)]('data-controls', !![]), _0x5d75dc(this)[_0x3ff797(0x3e4)]('controls', !![]);
                }
            });
            var _0xb34cea = _0x396e9e[_0x3e914c(0x3e6)](_0x3e914c(0x275)), _0x2ed879 = _0x396e9e['find'](_0x3e914c(0x370))['first']();
            _0x59d5a4(_0xb34cea, _0x2ed879, 'post', _0x3e914c(0x2c2));
        }
        ;
        function _0x3329eb() {
            const _0x247d2a = _0x45c6ee;
            _0x5d75dc('article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr')[_0x247d2a(0x2e0)](function (_0x37103b) {
                const _0x48c761 = _0x247d2a;
                return _0x5d75dc(this)['is'](_0x48c761(0x386)) ? _0x5d75dc(this)[_0x48c761(0x3d5)]()[_0x48c761(0x3d5)]()['parent']()['parent']()[0x0] : this;
            })[_0x247d2a(0x3ed)](function () {
                const _0x1d4f21 = _0x247d2a;
                return _0x5d75dc(this)[_0x1d4f21(0x2e4)]() > 0x0 && _0x5d75dc(this)[_0x1d4f21(0x1b2)]() > 0x0;
            })[_0x247d2a(0x406)](function (_0x191715) {
                const _0xf6dd09 = _0x247d2a;
                if (!_0x5d75dc(this)[_0xf6dd09(0x3e4)](_0xf6dd09(0x277)) && !_0x5d75dc(this)[_0xf6dd09(0x3dd)](_0xf6dd09(0x3e1)) && !_0x5d75dc(this)[_0xf6dd09(0x1f4)](_0xf6dd09(0x1d9))?.[_0xf6dd09(0x3dd)](_0xf6dd09(0x3e1)) && _0x5d75dc(this)[_0xf6dd09(0x33a)]('div#scrollview')[_0xf6dd09(0x1f7)] === 0x0) {
                    _0x20b6c7(_0xf6dd09(0x243), _0x5d75dc(this));
                    var _0x21c74a = 0xf, _0x2f0bc5 = 0xf, _0x42cdc8 = _0x5d75dc(this), _0x49f187 = this[_0xf6dd09(0x31f)];
                    if (_0x49f187 === _0xf6dd09(0x2f5) && _0x191715 != 0x0)
                        return;
                    const _0x142041 = _0x42cdc8[_0xf6dd09(0x1f4)](_0xf6dd09(0x1c2))[_0xf6dd09(0x1f4)](_0xf6dd09(0x1c2));
                    if (_0x142041[_0xf6dd09(0x1f7)] === 0x0)
                        return;
                    _0x20b6c7(_0xf6dd09(0x32e), _0x142041);
                    if (_0x42cdc8[_0xf6dd09(0x3e6)](_0xf6dd09(0x1d8))[_0xf6dd09(0x1f7)] > 0x0) {
                        _0x42cdc8[_0xf6dd09(0x3e6)](_0xf6dd09(0x1e4))[_0xf6dd09(0x1f7)] > 0x0 && _0x42cdc8['find'](_0xf6dd09(0x1e4))[_0xf6dd09(0x354)](_0xf6dd09(0x3c2), _0xf6dd09(0x2d4));
                        const _0x348ecc = _0x42cdc8[_0xf6dd09(0x3e6)](_0xf6dd09(0x1d8))[_0xf6dd09(0x194)]()[_0xf6dd09(0x3d5)]()[0x0];
                        var _0x46c0b4 = new MutationObserver(function (_0x141472, _0x3d9227) {
                            const _0x3831f9 = _0xf6dd09;
                            _0x42cdc8['find'](_0x3831f9(0x1e4))[_0x3831f9(0x354)](_0x3831f9(0x3c2), _0x3831f9(0x2d4));
                        });
                        _0x46c0b4[_0xf6dd09(0x3f4)](_0x348ecc, { 'childList': !![] });
                    }
                    const _0x4e5d30 = _0xf6dd09(0x236) + _0x29ce71('DW') + '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:' + _0x21c74a + _0xf6dd09(0x3a3) + _0x2f0bc5 + _0xf6dd09(0x22c) + _0x5e5a0b[_0xf6dd09(0x3b3)] + _0xf6dd09(0x1b1), _0x57f40c = _0xf6dd09(0x274) + _0x29ce71('NEW_TAB') + _0xf6dd09(0x1d7) + (_0x21c74a + 0x23) + _0xf6dd09(0x3a3) + _0x2f0bc5 + _0xf6dd09(0x22c) + _0x5e5a0b[_0xf6dd09(0x32f)] + '</div>', _0xdb306d = _0xf6dd09(0x21b) + _0x29ce71(_0xf6dd09(0x2c6)) + _0xf6dd09(0x256) + (_0x21c74a + 0x46) + _0xf6dd09(0x3a3) + _0x2f0bc5 + _0xf6dd09(0x22c) + _0x5e5a0b['THUMBNAIL'] + _0xf6dd09(0x1b1);
                    _0x142041['eq'](_0x49f187 === 'DIV' ? 0x0 : _0x142041[_0xf6dd09(0x1f7)] - 0x2)['append'](_0x4e5d30), _0x142041['eq'](_0x49f187 === _0xf6dd09(0x2f5) ? 0x0 : _0x142041[_0xf6dd09(0x1f7)] - 0x2)['append'](_0x57f40c), setTimeout(() => {
                        const _0x2d4997 = _0xf6dd09;
                        if (_0x142041['eq'](_0x49f187 === _0x2d4997(0x2f5) ? 0x0 : _0x142041[_0x2d4997(0x1f7)] - 0x2)[_0x2d4997(0x3e6)](_0x2d4997(0x35d))['length'] === 0x0)
                            _0x142041['find'](_0x2d4997(0x275))['length'] > 0x0 && _0x142041['eq'](_0x49f187 === _0x2d4997(0x2f5) ? 0x0 : _0x142041['length'] - 0x2)[_0x2d4997(0x29e)](_0xdb306d);
                        else {
                            const _0x2a1c14 = (_0x4f3b18, _0x205c90) => {
                                    const _0x575ac6 = _0x2d4997;
                                    _0x4f3b18[_0x575ac6(0x1ac)](_0x301db4 => {
                                        const _0x48bdf5 = _0x575ac6;
                                        if (_0x301db4['isIntersecting']) {
                                            var _0x57ccee = _0x5d75dc(_0x301db4[_0x48bdf5(0x3ac)]);
                                            _0x57ccee['find'](_0x48bdf5(0x275))['length'] > 0x0 ? (_0x142041['eq'](_0x49f187 === _0x48bdf5(0x2f5) ? 0x0 : _0x142041['length'] - 0x2)[_0x48bdf5(0x29e)](_0xdb306d), _0x21e383(_0x42cdc8)) : _0x142041[_0x48bdf5(0x3e6)]('.SNKMS_IG_THUMBNAIL_MAIN')?.[_0x48bdf5(0x388)]();
                                        }
                                    });
                                }, _0xac1646 = new IntersectionObserver(_0x2a1c14, {
                                    'root': _0x42cdc8[_0x2d4997(0x3e6)]('div\x20>\x20ul._acay')['first']()[_0x2d4997(0x3d5)]()[_0x2d4997(0x3d5)]()['parent']()[0x0],
                                    'rootMargin': _0x2d4997(0x253),
                                    'threshold': 0.1
                                }), _0x3008a8 = new MutationObserver(function (_0x47bfd2, _0x543e4c) {
                                    const _0x554a32 = _0x2d4997;
                                    var _0x4052b2 = _0x47bfd2['at'](0x0)?.[_0x554a32(0x3ac)];
                                    _0x5d75dc(_0x4052b2)[_0x554a32(0x3e6)](_0x554a32(0x367))['each'](function () {
                                        const _0x2b8ade = _0x554a32;
                                        _0xac1646[_0x2b8ade(0x3f4)](this);
                                    });
                                });
                            _0x42cdc8[_0x2d4997(0x3e6)](_0x2d4997(0x35d))[_0x2d4997(0x406)](function () {
                                _0xac1646['observe'](this);
                            });
                            const _0x153f7c = _0x142041['eq'](_0x49f187 === _0x2d4997(0x2f5) ? 0x0 : _0x142041['length'] - 0x2)[_0x2d4997(0x3e6)]('div\x20>\x20ul\x20li._acaz')?.[_0x2d4997(0x3d5)]()[0x0], _0x301017 = _0x142041['eq'](_0x49f187 === _0x2d4997(0x2f5) ? 0x0 : _0x142041[_0x2d4997(0x1f7)] - 0x2)[_0x2d4997(0x3e6)](_0x2d4997(0x35d))?.['parent']()[_0x2d4997(0x3d5)]()[0x0];
                            _0x153f7c && _0x3008a8['observe'](_0x153f7c, { 'childList': !![] }), _0x301017 && _0x3008a8[_0x2d4997(0x3f4)](_0x301017, { 'attributes': !![] });
                        }
                    }, 0x32), _0x142041[_0xf6dd09(0x354)](_0xf6dd09(0x213), _0xf6dd09(0x207)), _0x21e383(_0x42cdc8), _0x5d75dc(this)['on'](_0xf6dd09(0x36f), _0xf6dd09(0x26f), function (_0x43b661) {
                        const _0x299329 = _0xf6dd09;
                        _0x9f2e47(!![]), _0x2e9508 = _0x5d75dc(this)['parent']()['parent']()[_0x299329(0x3d5)]()['attr'](_0x299329(0x2fe)), _0x7af8ba = location[_0x299329(0x2b6)][_0x299329(0x381)](/\/$/, '')[_0x299329(0x27b)]('/')['at'](-0x1) || _0x5d75dc(this)[_0x299329(0x3d5)]()['parent']()[_0x299329(0x3d5)]()['find']('a[href^=\x22/p/\x22]')['first']()[_0x299329(0x3e4)](_0x299329(0x223))[_0x299329(0x27b)]('/')['at'](0x2) || _0x5d75dc(this)['parent']()[_0x299329(0x3d5)]()['children']('div:last-child')[_0x299329(0x1f4)]('div')[_0x299329(0x1f4)]('div:last-child')[_0x299329(0x3e6)](_0x299329(0x1fa))[_0x299329(0x25f)]()[_0x299329(0x3e4)](_0x299329(0x223))['split']('/')['at'](0x2);
                        var _0x5647d6 = _0x5d75dc(this)['parent']()[_0x299329(0x3d5)]()[_0x299329(0x3d5)](), _0x21e3d0 = _0x3f4ffb(_0x5647d6);
                        _0x11f069(!![], ![]), _0x57e9e3(_0x7af8ba, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x299329(0x2d5)](() => {
                            let _0x16fd2c = setInterval(() => {
                                const _0x4172a0 = a0_0x1075;
                                if (_0x5d75dc(_0x4172a0(0x317))[_0x4172a0(0x1f7)] > 0x0) {
                                    clearInterval(_0x16fd2c);
                                    var _0xb57e48 = _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x21e3d0 + 0x1) + '\x22]')?.['parent']()[_0x4172a0(0x3e6)](_0x4172a0(0x35a))?.[_0x4172a0(0x194)]();
                                    _0xb57e48 != null && _0xb57e48[_0x4172a0(0x1f7)] > 0x0 ? _0xb57e48[_0x4172a0(0x36f)]() : alert(_0x4172a0(0x2da)), _0x9f2e47(![]), _0x5d75dc(_0x4172a0(0x204))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x5d75dc(this)['on'](_0xf6dd09(0x36f), _0xf6dd09(0x314), function (_0x261043) {
                        const _0x388758 = _0xf6dd09;
                        _0x9f2e47(!![]), _0x2e9508 = _0x5d75dc(this)[_0x388758(0x3d5)]()[_0x388758(0x3d5)]()['parent']()['attr'](_0x388758(0x2fe)), _0x7af8ba = location[_0x388758(0x2b6)]['replace'](/\/$/, '')[_0x388758(0x27b)]('/')['at'](-0x1) || _0x5d75dc(this)[_0x388758(0x3d5)]()[_0x388758(0x3d5)]()['parent']()[_0x388758(0x3e6)](_0x388758(0x1fa))[_0x388758(0x194)]()[_0x388758(0x3e4)](_0x388758(0x223))[_0x388758(0x27b)]('/')['at'](0x2) || _0x5d75dc(this)[_0x388758(0x3d5)]()[_0x388758(0x3d5)]()[_0x388758(0x1f4)](_0x388758(0x210))['children'](_0x388758(0x1c2))[_0x388758(0x1f4)](_0x388758(0x210))[_0x388758(0x3e6)](_0x388758(0x1fa))[_0x388758(0x25f)]()[_0x388758(0x3e4)](_0x388758(0x223))[_0x388758(0x27b)]('/')['at'](0x2);
                        var _0x565a73 = _0x5d75dc(this)[_0x388758(0x3d5)]()['parent']()[_0x388758(0x3d5)](), _0x1af935 = _0x3f4ffb(_0x565a73);
                        _0x11f069(!![], ![]), _0x57e9e3(_0x7af8ba, _0x388758(0x269), '')[_0x388758(0x2d5)](() => {
                            let _0x372543 = setInterval(() => {
                                const _0x156044 = a0_0x1075;
                                if (_0x5d75dc(_0x156044(0x317))['length'] > 0x0) {
                                    clearInterval(_0x372543);
                                    var _0x5af267 = _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x1af935 + 0x1) + '\x22]');
                                    if (_0x160d84[_0x156044(0x30f)] && _0x160d84['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0x521c33(_0x5af267[_0x156044(0x194)]()[0x0], !![]);
                                    else {
                                        let _0x2d0164 = _0x5af267?.['attr'](_0x156044(0x352));
                                        if (_0x2d0164) {
                                            var _0x4a30e5 = new URL(_0x2d0164);
                                            _0x4a30e5[_0x156044(0x237)] = 'scontent.cdninstagram.com', _0x43d38e(_0x4a30e5['href']);
                                        } else
                                            alert('Can\x20not\x20find\x20open\x20tab\x20url.');
                                    }
                                    _0x9f2e47(![]), _0x5d75dc(_0x156044(0x204))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x5d75dc(this)['on'](_0xf6dd09(0x36f), '.SNKMS_IG_DW_MAIN', async function (_0x14222c) {
                        const _0x742321 = _0xf6dd09;
                        _0x2e9508 = _0x5d75dc(this)[_0x742321(0x3d5)]()['parent']()[_0x742321(0x3d5)]()[_0x742321(0x3e4)](_0x742321(0x2fe)), _0x7af8ba = location[_0x742321(0x2b6)]['replace'](/\/$/, '')[_0x742321(0x27b)]('/')['at'](-0x1) || _0x5d75dc(this)[_0x742321(0x3d5)]()[_0x742321(0x3d5)]()[_0x742321(0x3d5)]()[_0x742321(0x3e6)](_0x742321(0x1fa))[_0x742321(0x194)]()[_0x742321(0x3e4)]('href')[_0x742321(0x27b)]('/')['at'](0x2) || _0x5d75dc(this)[_0x742321(0x3d5)]()[_0x742321(0x3d5)]()[_0x742321(0x1f4)]('div:last-child')[_0x742321(0x1f4)]('div')[_0x742321(0x1f4)]('div:last-child')[_0x742321(0x3e6)]('a[href^=\x22/p/\x22]')[_0x742321(0x25f)]()[_0x742321(0x3e4)](_0x742321(0x223))['split']('/')['at'](0x2), _0x11f069(_0x160d84[_0x742321(0x34a)], !![]), _0x5d75dc('#article-id')['html'](_0x742321(0x3b8) + _0x7af8ba + '\x22>' + _0x7af8ba + '</a>');
                        if (_0x160d84[_0x742321(0x363)]) {
                            _0x9f2e47(!![]), _0x101375(!![]);
                            var _0xe8c87b = _0x3f4ffb(_0x5d75dc(this)[_0x742321(0x3d5)]()[_0x742321(0x3d5)]()[_0x742321(0x3d5)]());
                            _0x57e9e3(_0x7af8ba, _0x742321(0x269), '')[_0x742321(0x2d5)](() => {
                                let _0x3d1f40 = setInterval(() => {
                                    const _0x350270 = a0_0x1075;
                                    if (_0x5d75dc(_0x350270(0x317))[_0x350270(0x1f7)] > 0x0) {
                                        clearInterval(_0x3d1f40);
                                        var _0x2f5389 = _0x5d75dc(_0x350270(0x199) + (_0xe8c87b + 0x1) + '\x22]')?.[_0x350270(0x3e4)](_0x350270(0x352));
                                        _0x2f5389 ? (_0x9f2e47(![]), _0x5d75dc(_0x350270(0x199) + (_0xe8c87b + 0x1) + '\x22]')?.['click']()) : alert('Can\x20not\x20find\x20download\x20url.'), _0x5d75dc('.IG_SN_DIG')[_0x350270(0x388)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x160d84[_0x742321(0x34a)]) {
                            var _0x177fc0 = 0x0, _0x345a93 = _0x5d75dc(this)[_0x742321(0x3d5)]()[_0x742321(0x3d5)]()['find'](_0x742321(0x29d))[_0x742321(0x1f7)], _0x161169 = window['location'][_0x742321(0x2b6)], _0x2d0762 = '/' + _0x161169[_0x742321(0x27b)]('/')[0x1] + '/' + _0x161169[_0x742321(0x27b)]('/')[0x2] + '/', _0x57c316 = _0x160d84[_0x742321(0x1d3)], _0x56966f = new Date(_0x5d75dc(this)[_0x742321(0x3d5)]()[_0x742321(0x3d5)]()[_0x742321(0x3e6)](_0x742321(0x33b))[_0x742321(0x194)]()['attr'](_0x742321(0x36b)))[_0x742321(0x301)]();
                            if (_0x345a93)
                                _0x5d75dc(this)[_0x742321(0x3d5)]()['find'](_0x742321(0x29d))[_0x742321(0x406)](function () {
                                    const _0x4a0dbb = _0x742321;
                                    let _0x118462 = _0x5d75dc(this)[_0x4a0dbb(0x3d5)]()[_0x4a0dbb(0x3d5)]()[_0x4a0dbb(0x3e6)]('video');
                                    _0x118462 && _0x118462[_0x4a0dbb(0x3e4)](_0x4a0dbb(0x3ec)) && (_0x57c316 = !![]);
                                }), _0x57c316 || _0x160d84[_0x742321(0x30f)] ? _0x57e9e3(_0x7af8ba, _0x742321(0x269), _0x29ce71(_0x742321(0x374))) : (_0x5d75dc(this)[_0x742321(0x3d5)]()[_0x742321(0x3e6)](_0x742321(0x29d))['each'](function () {
                                    const _0x5cd341 = _0x742321;
                                    _0x177fc0++;
                                    let _0x5e16ac = _0x5d75dc(this)['find']('video'), _0x33a091 = _0x5d75dc(this)[_0x5cd341(0x3e6)](_0x5cd341(0x286)), _0x48046c = _0x33a091[_0x5cd341(0x3e4)](_0x5cd341(0x26c)) ? _0x33a091[_0x5cd341(0x3e4)]('srcset')['split']('\x20')[0x0] : _0x33a091['attr'](_0x5cd341(0x3ec));
                                    _0x5e16ac && _0x5e16ac[_0x5cd341(0x3e4)](_0x5cd341(0x3ec)) && (_0x57c316 = !![]), _0x33a091 && _0x48046c && _0x5d75dc(_0x5cd341(0x269))['append'](_0x5cd341(0x1f0) + _0x56966f + _0x5cd341(0x273) + _0x7af8ba + _0x5cd341(0x248) + _0x177fc0 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x48046c + _0x5cd341(0x216) + _0x48046c + _0x5cd341(0x21f) + _0x29ce71('IMG') + '</span>\x20' + _0x177fc0 + _0x5cd341(0x3bb));
                                }), _0x57c316 && _0x57e9e3(_0x7af8ba, _0x742321(0x269), _0x29ce71(_0x742321(0x282))));
                            else {
                                if (_0x160d84[_0x742321(0x30f)])
                                    _0x57e9e3(_0x7af8ba, _0x742321(0x269), _0x29ce71(_0x742321(0x374)));
                                else {
                                    _0x177fc0++;
                                    let _0x2838f1 = _0x5d75dc(this)[_0x742321(0x3d5)]()['parent']()[_0x742321(0x3e6)](_0x742321(0x275)), _0x49cab2 = _0x5d75dc(this)[_0x742321(0x3d5)]()['parent']()[_0x742321(0x3e6)](_0x742321(0x286)), _0x18db18 = _0x49cab2[_0x742321(0x3e4)](_0x742321(0x26c)) ? _0x49cab2[_0x742321(0x3e4)](_0x742321(0x26c))[_0x742321(0x27b)]('\x20')[0x0] : _0x49cab2[_0x742321(0x3e4)](_0x742321(0x3ec));
                                    _0x2838f1 && _0x2838f1[_0x742321(0x3e4)]('src') && _0x57e9e3(_0x7af8ba, _0x742321(0x269), _0x29ce71(_0x742321(0x1f6))), _0x49cab2 && _0x18db18 && _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')[_0x742321(0x29e)](_0x742321(0x1f0) + _0x56966f + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x7af8ba + _0x742321(0x248) + _0x177fc0 + _0x742321(0x230) + _0x18db18 + _0x742321(0x216) + _0x18db18 + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x29ce71(_0x742321(0x1a1)) + _0x742321(0x1e3) + _0x177fc0 + '\x20-</a>');
                                }
                            }
                        }
                        _0x5d75dc(_0x742321(0x317))[_0x742321(0x406)](function () {
                            const _0x553e7e = _0x742321;
                            _0x5d75dc(this)[_0x553e7e(0x3e2)](_0x553e7e(0x23f)), _0x5d75dc(this)['before'](_0x553e7e(0x305)), _0x5d75dc(this)[_0x553e7e(0x347)](_0x553e7e(0x274) + _0x29ce71(_0x553e7e(0x32f)) + _0x553e7e(0x2e1) + _0x5e5a0b[_0x553e7e(0x32f)] + _0x553e7e(0x1b1)), _0x5d75dc(this)[_0x553e7e(0x3e4)]('data-name') == _0x553e7e(0x275) && _0x5d75dc(this)[_0x553e7e(0x347)](_0x553e7e(0x21b) + _0x29ce71(_0x553e7e(0x2c6)) + _0x553e7e(0x30a) + _0x5e5a0b['THUMBNAIL'] + _0x553e7e(0x1b1));
                        }), _0x160d84[_0x742321(0x34a)] && _0x57e9e3(_0x7af8ba, _0x742321(0x269), _0x29ce71(_0x742321(0x374)))[_0x742321(0x2d5)](() => {
                            let _0x1a646c = setInterval(() => {
                                const _0x216ee6 = a0_0x1075;
                                _0x5d75dc(_0x216ee6(0x317))[_0x216ee6(0x1f7)] > 0x0 && (clearInterval(_0x1a646c), _0x5d75dc(_0x216ee6(0x317))[_0x216ee6(0x406)](function () {
                                    _0x5d75dc(this)['click']();
                                }), _0x5d75dc(_0x216ee6(0x204))[_0x216ee6(0x388)]());
                            }, 0xfa);
                        });
                    });
                    var _0x57dae4 = _0x5d75dc(this)[_0xf6dd09(0x3e6)](_0xf6dd09(0x333))['first']()['text']() || _0x5d75dc(this)[_0xf6dd09(0x3e6)]('a[href^=\x22/\x22]')[_0xf6dd09(0x3ed)](function () {
                        const _0x969966 = _0xf6dd09;
                        return _0x5d75dc(this)?.[_0x969966(0x3b7)]()?.[_0x969966(0x1f7)] > 0x0;
                    })[_0xf6dd09(0x194)]()[_0xf6dd09(0x3b7)]();
                    _0x5d75dc(this)['attr'](_0xf6dd09(0x277), _0xf6dd09(0x1db)), _0x5d75dc(this)[_0xf6dd09(0x3e4)](_0xf6dd09(0x2fe), _0x57dae4);
                }
            });
        }
        function _0x57e9e3(_0x43ccd2, _0x28fac3, _0x1721da) {
            return new Promise(async _0x4b01e0 => {
                const _0x91d9cf = a0_0x1075;
                _0x5d75dc(_0x28fac3 + '\x20a')[_0x91d9cf(0x388)](), _0x5d75dc(_0x28fac3)['append']('<p\x20id=\x22_SNLOAD\x22>' + _0x1721da + _0x91d9cf(0x205));
                let _0x4adb42 = await _0x3f2848(_0x43ccd2);
                if (_0x4adb42[_0x91d9cf(0x33e)] === 'query_hash') {
                    let _0x343a3f = 0x1, _0x5236cd = _0x4adb42[_0x91d9cf(0x3f6)], _0x47d1ea = _0x5236cd[_0x91d9cf(0x284)];
                    _0x47d1ea[_0x91d9cf(0x394)] == _0x91d9cf(0x364) && _0x47d1ea['video_url'] && (_0x5d75dc(_0x28fac3)['append'](_0x91d9cf(0x23d) + _0x47d1ea['id'] + _0x91d9cf(0x366) + _0x47d1ea[_0x91d9cf(0x372)] + _0x91d9cf(0x29f) + _0x47d1ea['shortcode'] + _0x91d9cf(0x26a) + _0x47d1ea[_0x91d9cf(0x264)]['username'] + _0x91d9cf(0x2b2) + _0x343a3f + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x47d1ea[_0x91d9cf(0x1ab)] + _0x91d9cf(0x216) + _0x47d1ea[_0x91d9cf(0x3d8)][0x1][_0x91d9cf(0x3ec)] + _0x91d9cf(0x258) + _0x29ce71('VID') + '</span>\x20' + _0x343a3f + _0x91d9cf(0x3bb)), _0x343a3f++);
                    _0x47d1ea[_0x91d9cf(0x394)] == _0x91d9cf(0x217) && (_0x5d75dc(_0x28fac3)[_0x91d9cf(0x29e)](_0x91d9cf(0x23d) + _0x47d1ea['id'] + _0x91d9cf(0x366) + _0x47d1ea['taken_at_timestamp'] + _0x91d9cf(0x29f) + _0x47d1ea['shortcode'] + _0x91d9cf(0x31a) + _0x47d1ea[_0x91d9cf(0x264)][_0x91d9cf(0x2ed)] + _0x91d9cf(0x2b2) + _0x343a3f + _0x91d9cf(0x348) + _0x47d1ea[_0x91d9cf(0x3d8)][_0x47d1ea['display_resources'][_0x91d9cf(0x1f7)] - 0x1][_0x91d9cf(0x3ec)] + _0x91d9cf(0x216) + _0x47d1ea[_0x91d9cf(0x3d8)][0x1][_0x91d9cf(0x3ec)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x29ce71(_0x91d9cf(0x1a1)) + _0x91d9cf(0x1e3) + _0x343a3f + _0x91d9cf(0x3bb)), _0x343a3f++);
                    if (_0x47d1ea[_0x91d9cf(0x394)] == _0x91d9cf(0x33d) && _0x47d1ea[_0x91d9cf(0x22a)])
                        for (let _0x5bf5d2 of _0x47d1ea['edge_sidecar_to_children']['edges']) {
                            _0x5bf5d2[_0x91d9cf(0x27c)][_0x91d9cf(0x394)] == 'GraphVideo' && _0x5d75dc(_0x28fac3)['append']('<a\x20media-id=\x22' + _0x5bf5d2['node']['id'] + '\x22\x20datetime=\x22' + _0x47d1ea[_0x91d9cf(0x372)] + _0x91d9cf(0x29f) + _0x47d1ea[_0x91d9cf(0x404)] + _0x91d9cf(0x26a) + _0x47d1ea[_0x91d9cf(0x264)][_0x91d9cf(0x2ed)] + _0x91d9cf(0x2b2) + _0x343a3f + _0x91d9cf(0x348) + _0x5bf5d2[_0x91d9cf(0x27c)][_0x91d9cf(0x1ab)] + _0x91d9cf(0x216) + _0x5bf5d2[_0x91d9cf(0x27c)][_0x91d9cf(0x3d8)][0x1][_0x91d9cf(0x3ec)] + _0x91d9cf(0x405) + _0x29ce71(_0x91d9cf(0x3f9)) + '</span>\x20' + _0x343a3f + '\x20-</a>'), _0x5bf5d2['node'][_0x91d9cf(0x394)] == _0x91d9cf(0x217) && _0x5d75dc(_0x28fac3)[_0x91d9cf(0x29e)](_0x91d9cf(0x23d) + _0x5bf5d2[_0x91d9cf(0x27c)]['id'] + _0x91d9cf(0x366) + _0x47d1ea[_0x91d9cf(0x372)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x47d1ea[_0x91d9cf(0x404)] + _0x91d9cf(0x31a) + _0x47d1ea[_0x91d9cf(0x264)][_0x91d9cf(0x2ed)] + _0x91d9cf(0x2b2) + _0x343a3f + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x5bf5d2[_0x91d9cf(0x27c)][_0x91d9cf(0x3d8)][_0x5bf5d2['node'][_0x91d9cf(0x3d8)][_0x91d9cf(0x1f7)] - 0x1][_0x91d9cf(0x3ec)] + _0x91d9cf(0x216) + _0x5bf5d2['node']['display_resources'][0x1]['src'] + _0x91d9cf(0x21f) + _0x29ce71('IMG') + _0x91d9cf(0x1e3) + _0x343a3f + '\x20-</a>'), _0x343a3f++;
                        }
                } else {
                    let _0x3743de = _0x4adb42[_0x91d9cf(0x3f6)];
                    if (_0x3743de['carousel_media'])
                        _0x20b6c7(_0x91d9cf(0x2ae)), _0x3743de[_0x91d9cf(0x2ae)][_0x91d9cf(0x1ac)]((_0x1299c9, _0x4cd371) => {
                            const _0x44fd0f = _0x91d9cf;
                            let _0x5794e6 = _0x4cd371 + 0x1;
                            _0x1299c9[_0x44fd0f(0x3c9)] == null ? (_0x1299c9[_0x44fd0f(0x19b)]['candidates'][_0x44fd0f(0x36a)](function (_0x43c3e3, _0x1229db) {
                                const _0xe89019 = _0x44fd0f;
                                if (_0x43c3e3[_0xe89019(0x1b2)] < _0x1229db[_0xe89019(0x1b2)])
                                    return 0x1;
                                if (_0x43c3e3[_0xe89019(0x1b2)] > _0x1229db[_0xe89019(0x1b2)])
                                    return -0x1;
                                return 0x0;
                            }), _0x5d75dc(_0x28fac3)[_0x44fd0f(0x29e)]('<a\x20media-id=\x22' + _0x1299c9['pk'] + _0x44fd0f(0x366) + _0x1299c9['taken_at'] + _0x44fd0f(0x29f) + _0x3743de[_0x44fd0f(0x19e)] + _0x44fd0f(0x31a) + _0x3743de[_0x44fd0f(0x264)][_0x44fd0f(0x2ed)] + _0x44fd0f(0x2b2) + _0x5794e6 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x1299c9[_0x44fd0f(0x19b)][_0x44fd0f(0x3cb)][0x0]['url'] + _0x44fd0f(0x216) + _0x1299c9[_0x44fd0f(0x19b)][_0x44fd0f(0x3cb)][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x29ce71(_0x44fd0f(0x1a1)) + _0x44fd0f(0x1e3) + _0x5794e6 + _0x44fd0f(0x3bb))) : _0x5d75dc(_0x28fac3)[_0x44fd0f(0x29e)](_0x44fd0f(0x23d) + _0x1299c9['pk'] + _0x44fd0f(0x366) + _0x1299c9['taken_at'] + _0x44fd0f(0x29f) + _0x3743de[_0x44fd0f(0x19e)] + _0x44fd0f(0x26a) + _0x3743de[_0x44fd0f(0x264)][_0x44fd0f(0x2ed)] + _0x44fd0f(0x2b2) + _0x5794e6 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x1299c9['video_versions'][0x0][_0x44fd0f(0x24c)] + _0x44fd0f(0x216) + _0x1299c9[_0x44fd0f(0x19b)][_0x44fd0f(0x3cb)][0x0][_0x44fd0f(0x24c)] + _0x44fd0f(0x258) + _0x29ce71(_0x44fd0f(0x3f9)) + _0x44fd0f(0x1e3) + _0x5794e6 + _0x44fd0f(0x3bb));
                        });
                    else {
                        let _0x4736a6 = 0x1;
                        _0x3743de[_0x91d9cf(0x3c9)] == null ? (_0x3743de[_0x91d9cf(0x19b)][_0x91d9cf(0x3cb)][_0x91d9cf(0x36a)](function (_0x42593b, _0x49ecb8) {
                            const _0xb0df92 = _0x91d9cf;
                            if (_0x42593b['width'] < _0x49ecb8[_0xb0df92(0x1b2)])
                                return 0x1;
                            if (_0x42593b[_0xb0df92(0x1b2)] > _0x49ecb8[_0xb0df92(0x1b2)])
                                return -0x1;
                            return 0x0;
                        }), _0x5d75dc(_0x28fac3)[_0x91d9cf(0x29e)](_0x91d9cf(0x23d) + _0x3743de['pk'] + _0x91d9cf(0x366) + _0x3743de[_0x91d9cf(0x246)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x3743de['code'] + _0x91d9cf(0x31a) + _0x3743de[_0x91d9cf(0x264)][_0x91d9cf(0x2ed)] + '\x22\x20data-globalIndex=\x22' + _0x4736a6 + _0x91d9cf(0x348) + _0x3743de[_0x91d9cf(0x19b)][_0x91d9cf(0x3cb)][0x0][_0x91d9cf(0x24c)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x3743de['image_versions2'][_0x91d9cf(0x3cb)][0x0][_0x91d9cf(0x24c)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x29ce71('IMG') + _0x91d9cf(0x1e3) + _0x4736a6 + '\x20-</a>')) : _0x5d75dc(_0x28fac3)[_0x91d9cf(0x29e)](_0x91d9cf(0x23d) + _0x3743de['pk'] + _0x91d9cf(0x366) + _0x3743de[_0x91d9cf(0x246)] + _0x91d9cf(0x29f) + _0x3743de[_0x91d9cf(0x19e)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x3743de[_0x91d9cf(0x264)][_0x91d9cf(0x2ed)] + _0x91d9cf(0x2b2) + _0x4736a6 + _0x91d9cf(0x348) + _0x3743de['video_versions'][0x0][_0x91d9cf(0x24c)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x3743de[_0x91d9cf(0x19b)][_0x91d9cf(0x3cb)][0x0][_0x91d9cf(0x24c)] + _0x91d9cf(0x258) + _0x29ce71(_0x91d9cf(0x3f9)) + _0x91d9cf(0x1e3) + _0x4736a6 + _0x91d9cf(0x3bb));
                    }
                }
                _0x5d75dc('#_SNLOAD')[_0x91d9cf(0x388)](), _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x91d9cf(0x406)](function () {
                    const _0x40d61a = _0x91d9cf;
                    _0x5d75dc(this)[_0x40d61a(0x3e2)](_0x40d61a(0x23f)), _0x5d75dc(this)['before'](_0x40d61a(0x305)), _0x5d75dc(this)[_0x40d61a(0x347)](_0x40d61a(0x274) + _0x29ce71('NEW_TAB') + _0x40d61a(0x2e1) + _0x5e5a0b[_0x40d61a(0x32f)] + _0x40d61a(0x1b1)), _0x5d75dc(this)[_0x40d61a(0x3e4)](_0x40d61a(0x39a)) == _0x40d61a(0x275) && _0x5d75dc(this)['after'](_0x40d61a(0x21b) + _0x29ce71(_0x40d61a(0x2c6)) + _0x40d61a(0x30a) + _0x5e5a0b[_0x40d61a(0x2c3)] + _0x40d61a(0x1b1));
                }), _0x4b01e0(!![]);
            });
        }
        function _0x11f069(_0x2bcfc8, _0x14e31b) {
            const _0x165957 = _0x45c6ee;
            let _0x117207 = _0x2bcfc8 ? 'hidden' : '';
            _0x5d75dc('body')[_0x165957(0x29e)](_0x165957(0x2be) + _0x117207 + '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>'), _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')[_0x165957(0x29e)](_0x165957(0x32d) + _0x29ce71('CLOSE') + _0x165957(0x2a0) + _0x5e5a0b[_0x165957(0x25d)] + _0x165957(0x27d)), _0x14e31b && (_0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')['append'](_0x165957(0x1d1)), _0x5d75dc(_0x165957(0x293))['append'](_0x165957(0x218) + _0x29ce71(_0x165957(0x2e5)) + '</button>'), _0x5d75dc(_0x165957(0x293))[_0x165957(0x29e)]('<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>' + _0x29ce71(_0x165957(0x316)) + '</button>'), _0x5d75dc(_0x165957(0x369))[_0x165957(0x29e)](_0x165957(0x241) + _0x29ce71(_0x165957(0x2d0)) + _0x165957(0x2ee)));
        }
        function _0x101375(_0x2c6022) {
            const _0x19a84d = _0x45c6ee;
            _0x5d75dc(_0x19a84d(0x204))[_0x19a84d(0x1f7)] && (_0x2c6022 ? _0x5d75dc(_0x19a84d(0x204))[_0x19a84d(0x1b5)]('hidden') : _0x5d75dc(_0x19a84d(0x204))[_0x19a84d(0x285)]('hidden'));
        }
        function _0x4f8b76(_0x476fbf, _0x35bd15, _0x551390, _0x384cfd, _0xf7fb0f, _0x1ffea7) {
            setTimeout(() => {
                _0x9f2e47(!![]), fetch(_0x476fbf)['then'](_0x1ce097 => {
                    const _0x28fb41 = a0_0x1075;
                    return _0x1ce097[_0x28fb41(0x338)]()[_0x28fb41(0x2d5)](_0x3ef8a8 => {
                        _0x9f2e47(![]), _0x41b278(_0x476fbf, _0x3ef8a8, _0x35bd15, _0x551390, _0x384cfd, _0xf7fb0f, _0x1ffea7);
                    });
                });
            }, 0x32);
        }
        function _0x41b278(_0x4d8e76, _0x18d39f, _0x411101, _0x138e87, _0x3a930e, _0x4eda85, _0x377064) {
            const _0x455e03 = _0x45c6ee;
            _0x3a930e = parseInt(_0x3a930e[_0x455e03(0x37d)]()[_0x455e03(0x307)](0xd, '0'));
            _0x160d84[_0x455e03(0x324)] && (_0x3a930e = parseInt(_0x3a930e[_0x455e03(0x37d)]()[_0x455e03(0x307)](0xd, '0')));
            const _0x2c2ea8 = new Date(_0x3a930e), _0x21adbb = document[_0x455e03(0x1da)]('a'), _0x4d79b1 = new URL(_0x4d8e76)[_0x455e03(0x2b6)][_0x455e03(0x27b)]('/')['at'](-0x1)[_0x455e03(0x27b)]('.')['slice'](0x0, -0x1)['join']('.'), _0x294c2c = _0x2c2ea8[_0x455e03(0x345)]()['toString'](), _0x5f0051 = (_0x2c2ea8[_0x455e03(0x39b)]() + 0x1)['toString']()[_0x455e03(0x20c)](0x2, '0'), _0x4c6237 = _0x2c2ea8[_0x455e03(0x3bc)]()['toString']()['padStart'](0x2, '0'), _0x258879 = _0x2c2ea8[_0x455e03(0x39e)]()[_0x455e03(0x37d)]()[_0x455e03(0x20c)](0x2, '0'), _0x317bc2 = _0x2c2ea8[_0x455e03(0x1e6)]()[_0x455e03(0x37d)]()['padStart'](0x2, '0'), _0x159fb3 = _0x2c2ea8[_0x455e03(0x1fb)]()[_0x455e03(0x37d)]()[_0x455e03(0x20c)](0x2, '0');
            var _0x414f63 = _0x2fa82a[_0x455e03(0x1fd)](), _0x3c6c91 = _0x377064 ?? '', _0x5d7542 = {
                    '%USERNAME%': _0x411101,
                    '%SOURCE_TYPE%': _0x138e87,
                    '%SHORTCODE%': _0x3c6c91,
                    '%YEAR%': _0x294c2c,
                    '%2-YEAR%': _0x294c2c[_0x455e03(0x38c)](-0x2),
                    '%MONTH%': _0x5f0051,
                    '%DAY%': _0x4c6237,
                    '%HOUR%': _0x258879,
                    '%MINUTE%': _0x317bc2,
                    '%SECOND%': _0x159fb3,
                    '%ORIGINAL_NAME%': _0x4d79b1,
                    '%ORIGINAL_NAME_FIRST%': _0x4d79b1[_0x455e03(0x27b)]('_')['at'](0x0)
                };
            _0x414f63 = _0x414f63[_0x455e03(0x381)](/%[\w\-]+%/g, function (_0x28c484) {
                return _0x5d7542[_0x28c484] || _0x28c484;
            });
            const _0x5aa140 = _0x411101 + '_' + _0x4d79b1 + '.' + _0x4eda85;
            _0x21adbb['href'] = URL['createObjectURL'](_0x18d39f), _0x21adbb['setAttribute'](_0x455e03(0x3dc), _0x160d84['AUTO_RENAME'] ? _0x414f63 + '.' + _0x4eda85 : _0x5aa140), _0x21adbb[_0x455e03(0x36f)](), _0x21adbb[_0x455e03(0x388)]();
        }
        async function _0x521c33(_0x498506, _0x437271) {
            const _0x3091c2 = _0x45c6ee;
            let _0x4ce731 = new Date()[_0x3091c2(0x301)](), _0x2992e7 = Math[_0x3091c2(0x24e)](_0x4ce731 / 0x3e8), _0x3b2044 = _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)]('data-username') ? _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x2fe)) : _0x2e9508;
            !_0x3b2044 && _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)]('data-path') && (_0x20b6c7(_0x3091c2(0x3f2), _0x5d75dc(_0x498506)['attr'](_0x3091c2(0x352))), _0x3b2044 = await _0x35e366(_0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x341)))['catch'](_0x391016 => {
                const _0x4bf940 = _0x3091c2;
                _0x20b6c7(_0x4bf940(0x249), _0x391016[_0x4bf940(0x2a1)]);
            }), _0x3b2044 == null && (_0x3b2044 = 'NONE'));
            _0x160d84['RENAME_PUBLISH_DATE'] && _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x36b)) && (_0x2992e7 = parseInt(_0x5d75dc(_0x498506)[_0x3091c2(0x3e4)]('datetime')));
            if (_0x160d84['FORCE_RESOURCE_VIA_MEDIA']) {
                _0x9f2e47(!![]);
                let _0x5772a6 = await _0x2f3c80(_0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x294)));
                _0x9f2e47(![]);
                if (_0x5772a6[_0x3091c2(0x328)] === 'ok') {
                    var _0x502db6 = null;
                    _0x5772a6[_0x3091c2(0x2ce)][0x0][_0x3091c2(0x3c9)] ? _0x502db6 = _0x5772a6[_0x3091c2(0x2ce)][0x0]['video_versions'][0x0][_0x3091c2(0x24c)] : (_0x5772a6[_0x3091c2(0x2ce)][0x0][_0x3091c2(0x19b)][_0x3091c2(0x3cb)][_0x3091c2(0x36a)](function (_0x4bcc3b, _0x1036d7) {
                        const _0x100d84 = _0x3091c2;
                        if (_0x4bcc3b[_0x100d84(0x1b2)] < _0x1036d7[_0x100d84(0x1b2)])
                            return 0x1;
                        if (_0x4bcc3b[_0x100d84(0x1b2)] > _0x1036d7[_0x100d84(0x1b2)])
                            return -0x1;
                        return 0x0;
                    }), _0x502db6 = _0x5772a6['items'][0x0]['image_versions2'][_0x3091c2(0x3cb)][0x0][_0x3091c2(0x24c)]);
                    if (_0x437271) {
                        let _0xf30bea = new URL(_0x502db6);
                        _0xf30bea[_0x3091c2(0x237)] = _0x3091c2(0x1bd), _0x43d38e(_0xf30bea[_0x3091c2(0x223)]);
                    } else
                        _0x4f8b76(_0x502db6, _0x3b2044, _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)]('data-name'), _0x2992e7, _0x5d75dc(_0x498506)['attr'](_0x3091c2(0x296)), _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)]('data-path'));
                } else {
                    if (_0x160d84[_0x3091c2(0x29a)]) {
                        if (_0x437271) {
                            let _0x116282 = new URL(_0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x352)));
                            _0x116282[_0x3091c2(0x237)] = _0x3091c2(0x1bd), _0x43d38e(_0x116282[_0x3091c2(0x223)]);
                        } else
                            _0x4f8b76(_0x5d75dc(_0x498506)['attr'](_0x3091c2(0x352)), _0x3b2044, _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x39a)), _0x2992e7, _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)]('data-type'), _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x341)));
                    } else
                        alert(_0x3091c2(0x1ad) + _0x5772a6[_0x3091c2(0x2a1)]);
                    _0x20b6c7(_0x5772a6);
                }
            } else
                _0x4f8b76(_0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x352)), _0x3b2044, _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x39a)), _0x2992e7, _0x5d75dc(_0x498506)['attr'](_0x3091c2(0x296)), _0x5d75dc(_0x498506)[_0x3091c2(0x3e4)](_0x3091c2(0x341)));
        }
        function _0x39dc9f(_0xfb6c40) {
            const _0x32aa49 = _0x45c6ee;
            var _0x49063c = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': 'Wololo!\x20New\x20version\x20released.',
                        'NOTICE_UPDATE_CONTENT': _0x32aa49(0x365),
                        'CHECK_UPDATE': _0x32aa49(0x373),
                        'CHECK_UPDATE_MENU': _0x32aa49(0x39d),
                        'CHECK_UPDATE_INTRO': _0x32aa49(0x3d4),
                        'RELOAD_SCRIPT': _0x32aa49(0x1d4),
                        'DONATE': _0x32aa49(0x295),
                        'FEEDBACK': 'Feedback',
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x32aa49(0x3e5),
                        'SELECT_AND_COPY': _0x32aa49(0x336),
                        'DOWNLOAD_DOM_TREE': _0x32aa49(0x32c),
                        'REPORT_GITHUB': 'Report\x20an\x20Issue\x20on\x20GitHub',
                        'REPORT_DISCORD': _0x32aa49(0x2b4),
                        'REPORT_FORK': 'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
                        'DEBUG': 'Debug\x20Window',
                        'CLOSE': _0x32aa49(0x2df),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0x32aa49(0x1eb),
                        'BATCH_DOWNLOAD_DIRECT': _0x32aa49(0x3f5),
                        'IMG': _0x32aa49(0x196),
                        'VID': _0x32aa49(0x25a),
                        'DW': _0x32aa49(0x3ba),
                        'DW_ALL': _0x32aa49(0x3f5),
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x32aa49(0x37e),
                        'LOAD_BLOB_MULTIPLE': 'Loading\x20Blob\x20Media\x20and\x20Others...',
                        'LOAD_BLOB_RELOAD': 'Detecting\x20Blob\x20Media,\x20reloading...',
                        'NO_CHECK_RESOURCE': 'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
                        'NO_VID_URL': _0x32aa49(0x3a4),
                        'SETTING': _0x32aa49(0x221),
                        'AUTO_RENAME': _0x32aa49(0x300),
                        'RENAME_SHORTCODE': _0x32aa49(0x2db),
                        'RENAME_PUBLISH_DATE': _0x32aa49(0x2eb),
                        'RENAME_LOCATE_DATE': _0x32aa49(0x2f2),
                        'DISABLE_VIDEO_LOOPING': 'Disable\x20Video\x20Auto-looping',
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x32aa49(0x2f4),
                        'FORCE_FETCH_ALL_RESOURCES': _0x32aa49(0x232),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': _0x32aa49(0x22d),
                        'SCROLL_BUTTON': _0x32aa49(0x22b),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x32aa49(0x24b),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x32aa49(0x214),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x32aa49(0x378),
                        'AUTO_RENAME_INTRO': 'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
                        'RENAME_SHORTCODE_INTRO': _0x32aa49(0x28d),
                        'RENAME_PUBLISH_DATE_INTRO': _0x32aa49(0x240),
                        'RENAME_LOCATE_DATE_INTRO': 'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x32aa49(0x1cd),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x32aa49(0x344),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x32aa49(0x2a4),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x32aa49(0x252),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': 'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x32aa49(0x2bd),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x32aa49(0x2cb),
                        'SCROLL_BUTTON_INTRO': 'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x32aa49(0x291),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x32aa49(0x3ab),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x32aa49(0x1d6),
                        'SKIP_VIEW_STORY_CONFIRM': _0x32aa49(0x1b4),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x32aa49(0x22e)
                    }
                }, _0x57e4ea = Object[_0x32aa49(0x2d1)]({}, _0x49063c, _0x41a59d), _0x110160 = Object[_0x32aa49(0x1ec)](_0x57e4ea)[_0x32aa49(0x36a)]()[_0x32aa49(0x398)]((_0x55f8d0, _0x2b0111) => {
                    return _0x55f8d0[_0x2b0111] = _0x57e4ea[_0x2b0111], _0x55f8d0;
                }, {});
            return _0x110160;
        }
        async function _0x51f039(_0x1f0c3c) {
            return new Promise((_0x41bddc, _0x57e1e7) => {
                const _0x55021f = a0_0x1075;
                GM_xmlhttpRequest({
                    'method': _0x55021f(0x395),
                    'url': _0x55021f(0x1f2) + _0x1f0c3c + _0x55021f(0x29c),
                    'onload': function (_0x4b61e2) {
                        const _0x984fbb = _0x55021f;
                        try {
                            let _0x3ec73c = JSON[_0x984fbb(0x3b2)](_0x4b61e2[_0x984fbb(0x3db)]);
                            _0x41bddc(_0x3ec73c);
                        } catch (_0x33dc33) {
                            _0x57e1e7(_0x33dc33);
                        }
                    },
                    'onerror': function (_0x4c4299) {
                        const _0x97c064 = _0x55021f;
                        _0x20b6c7(_0x97c064(0x37f), _0x97c064(0x1ee), _0x4c4299), _0x57e1e7(_0x4c4299);
                    }
                });
            });
        }
        function _0x29ce71(_0x5803eb) {
            const _0x359ba4 = _0x39dc9f();
            return _0x359ba4[_0x2aad8d] != undefined && _0x359ba4[_0x2aad8d][_0x5803eb] != undefined ? _0x359ba4[_0x2aad8d][_0x5803eb] : _0x359ba4['en-US'][_0x5803eb];
        }
        function _0x2ef7cd() {
            const _0x1147c6 = _0x45c6ee;
            _0x5d75dc('[data-ih-locale]')[_0x1147c6(0x406)](function () {
                const _0x490d3d = _0x1147c6;
                _0x5d75dc(this)['text'](_0x29ce71(_0x5d75dc(this)[_0x490d3d(0x3e4)](_0x490d3d(0x339))));
            }), _0x5d75dc(_0x1147c6(0x1a9))[_0x1147c6(0x406)](function () {
                const _0x59bc70 = _0x1147c6;
                _0x5d75dc(this)[_0x59bc70(0x3e4)](_0x59bc70(0x2ef), _0x29ce71(_0x5d75dc(this)['attr'](_0x59bc70(0x292))));
            });
        }
        function _0x2b3164() {
            const _0x256e1e = _0x45c6ee;
            for (let _0x242ad6 of _0x5c04b5) {
                _0x20b6c7(_0x256e1e(0x34c), _0x242ad6), GM_unregisterMenuCommand(_0x242ad6);
            }
            _0x5c04b5[_0x256e1e(0x203)](GM_registerMenuCommand(_0x29ce71(_0x256e1e(0x228)), () => {
                _0x5708ae();
            }, { 'accessKey': 'w' })), _0x5c04b5[_0x256e1e(0x203)](GM_registerMenuCommand(_0x29ce71(_0x256e1e(0x377)), () => {
                const _0x5c1955 = _0x256e1e;
                GM_openInTab(_0x5c1955(0x25c), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x5c04b5[_0x256e1e(0x203)](GM_registerMenuCommand(_0x29ce71(_0x256e1e(0x385)), () => {
                _0x254289();
            }, { 'accessKey': 'z' })), _0x5c04b5['push'](GM_registerMenuCommand(_0x29ce71(_0x256e1e(0x335)), () => {
                _0x21ddc0();
            }, { 'accessKey': 'f' })), _0x5c04b5['push'](GM_registerMenuCommand(_0x29ce71(_0x256e1e(0x3e3)), () => {
                _0x321e33();
            }, { 'accessKey': 'c' })), _0x5c04b5[_0x256e1e(0x203)](GM_registerMenuCommand(_0x29ce71(_0x256e1e(0x2e2)), () => {
                _0x5743be();
            }, { 'accessKey': 'r' }));
        }
        function _0x38f0d5(_0x400a9d) {
            const _0x3c321e = _0x45c6ee;
            if (!_0x160d84[_0x3c321e(0x2c4)])
                return;
            const _0x12949d = GM_getValue(_0x3c321e(0x387)) ?? new Date()[_0x3c321e(0x301)](), _0x504d38 = new Date()[_0x3c321e(0x301)]();
            _0x504d38 > parseInt(_0x12949d) + _0x400a9d * 0x3e8 && (GM_setValue(_0x3c321e(0x387), new Date()[_0x3c321e(0x301)]()), _0x321e33());
        }
        function _0x321e33() {
            const _0x43d0b4 = _0x45c6ee, _0x3d74c1 = GM_info[_0x43d0b4(0x244)][_0x43d0b4(0x1e7)], _0x10ae57 = _0x43d0b4(0x402);
            GM_xmlhttpRequest({
                'method': _0x43d0b4(0x395),
                'url': _0x10ae57,
                'onload': function (_0x4b77b7) {
                    const _0x567d40 = _0x43d0b4, _0x1bbbc9 = _0x4b77b7[_0x567d40(0x242)], _0x3aec86 = _0x1bbbc9[_0x567d40(0x19f)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x3aec86 && _0x3aec86[0x1]) {
                        const _0x4db183 = _0x3aec86[0x1];
                        _0x20b6c7(_0x567d40(0x1cc), _0x3d74c1, '|', 'Remote\x20version:\x20', _0x4db183), _0x4db183 !== _0x3d74c1 && typeof this[_0x567d40(0x20e)] === 'undefined' ? (this[_0x567d40(0x20e)] = null, GM_notification({
                            'text': _0x29ce71('NOTICE_UPDATE_CONTENT'),
                            'title': _0x29ce71(_0x567d40(0x2d3)),
                            'tag': _0x567d40(0x30b),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x567d40(0x250),
                            'onclick': _0x353cab => {
                                const _0x2d56fb = _0x567d40;
                                _0x353cab?.[_0x2d56fb(0x255)]();
                                var _0x54f23c = GM_openInTab(GM_info[_0x2d56fb(0x244)][_0x2d56fb(0x349)]);
                                setTimeout(() => {
                                    _0x54f23c['close']();
                                }, 0xfa);
                            }
                        })) : _0x20b6c7(_0x567d40(0x25e));
                    } else
                        console['error'](_0x567d40(0x288));
                }
            });
        }
        function _0x5708ae() {
            const _0x113154 = _0x45c6ee;
            _0x5d75dc(_0x113154(0x204))[_0x113154(0x388)](), _0x11f069(), _0x5d75dc(_0x113154(0x399))[_0x113154(0x3b7)](_0x113154(0x380)), _0x5d75dc(_0x113154(0x327))['append'](_0x113154(0x36d));
            for (let _0x2985f7 in _0x2c6902) {
                _0x5d75dc(_0x113154(0x28a))['append'](_0x113154(0x1cf) + _0x2985f7 + '\x22\x20' + (_0x2aad8d == _0x2985f7 ? _0x113154(0x2d2) : '') + '>' + _0x2c6902[_0x2985f7] + _0x113154(0x326));
            }
            for (let _0x13d34f in _0x160d84) {
                _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x113154(0x29e)](_0x113154(0x1df) + (_0x5af5cd[_0x113154(0x1c9)](_0x13d34f) ? '\x20child' : '') + '\x22\x20title=\x22' + _0x29ce71(_0x13d34f + _0x113154(0x376)) + _0x113154(0x23a) + (_0x13d34f + _0x113154(0x376)) + _0x113154(0x1ea) + _0x13d34f + '\x22>' + _0x29ce71(_0x13d34f) + _0x113154(0x1aa) + _0x13d34f + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x160d84[_0x13d34f] === !![] ? _0x113154(0x1b7) : '') + _0x113154(0x2ec)), _0x13d34f === _0x113154(0x2fa) && _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22' + _0x13d34f + '\x22]')['parent']('label')['on']('contextmenu', function (_0x5a20c7) {
                    const _0x44b12c = _0x113154;
                    _0x5a20c7['preventDefault'](), _0x5d75dc(this)[_0x44b12c(0x3e6)](_0x44b12c(0x21c))['length'] === 0x0 && (_0x5d75dc(this)[_0x44b12c(0x29e)](_0x44b12c(0x2fc)), _0x5d75dc(this)[_0x44b12c(0x1f4)](_0x44b12c(0x21c))[_0x44b12c(0x29e)](_0x44b12c(0x38e) + _0x5bbd81 + _0x44b12c(0x3a6)), _0x5d75dc(this)[_0x44b12c(0x1f4)](_0x44b12c(0x21c))[_0x44b12c(0x29e)](_0x44b12c(0x38e) + _0x5bbd81 + _0x44b12c(0x290)), _0x5d75dc(this)['children'](_0x44b12c(0x21c))[_0x44b12c(0x29e)](_0x44b12c(0x2f3) + _0x5e5a0b[_0x44b12c(0x25d)] + _0x44b12c(0x1b1)));
                }), _0x13d34f === _0x113154(0x2cd) && _0x5d75dc(_0x113154(0x206) + _0x13d34f + '\x22]')[_0x113154(0x3d5)](_0x113154(0x226))['on'](_0x113154(0x3cf), function (_0x4f6d9e) {
                    const _0x3bae3d = _0x113154;
                    _0x4f6d9e[_0x3bae3d(0x255)](), _0x5d75dc(this)[_0x3bae3d(0x3e6)](_0x3bae3d(0x21c))[_0x3bae3d(0x1f7)] === 0x0 && (_0x5d75dc(this)[_0x3bae3d(0x29e)](_0x3bae3d(0x2fc)), _0x5d75dc(this)[_0x3bae3d(0x1f4)]('#tempWrapper')[_0x3bae3d(0x29e)]('<input\x20id=\x22date_format\x22\x20value=\x22' + _0x2fa82a + '\x22\x20/>'), _0x5d75dc(this)[_0x3bae3d(0x1f4)](_0x3bae3d(0x21c))[_0x3bae3d(0x29e)]('<div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x5e5a0b[_0x3bae3d(0x25d)] + _0x3bae3d(0x1b1)));
                });
            }
        }
        function _0x254289() {
            const _0x159441 = _0x45c6ee;
            _0x5d75dc('.IG_SN_DIG')[_0x159441(0x388)](), _0x11f069(), _0x5d75dc(_0x159441(0x399))['text'](_0x159441(0x23c)), _0x5d75dc(_0x159441(0x2b8))[_0x159441(0x29e)](_0x159441(0x382)), _0x5d75dc(_0x159441(0x2b8))['append'](_0x159441(0x3f0)), _0x5d75dc(_0x159441(0x1e0))['append'](_0x159441(0x271) + _0x29ce71('SHOW_DOM_TREE') + _0x159441(0x2a8)), _0x5d75dc(_0x159441(0x1e0))[_0x159441(0x29e)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>' + _0x29ce71(_0x159441(0x3ef)) + '</a></button>'), _0x5d75dc(_0x159441(0x1e0))[_0x159441(0x29e)](_0x159441(0x2fd) + _0x29ce71(_0x159441(0x375)) + _0x159441(0x35b)), _0x5d75dc(_0x159441(0x1e0))[_0x159441(0x29e)](_0x159441(0x3a2) + _0x29ce71(_0x159441(0x1cb)) + _0x159441(0x2a8)), _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x159441(0x29e)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x29ce71(_0x159441(0x1c3)) + _0x159441(0x2a8));
        }
        function _0x21ddc0() {
            const _0x3be4aa = _0x45c6ee;
            _0x5d75dc(_0x3be4aa(0x204))[_0x3be4aa(0x388)](), _0x11f069(), _0x5d75dc(_0x3be4aa(0x399))[_0x3be4aa(0x3b7)]('Feedback\x20Options'), _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x3be4aa(0x29e)](_0x3be4aa(0x3f0)), _0x5d75dc('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x3be4aa(0x29e)](_0x3be4aa(0x1b8) + _0x29ce71('REPORT_FORK') + _0x3be4aa(0x2a8)), _0x5d75dc(_0x3be4aa(0x1e0))[_0x3be4aa(0x29e)](_0x3be4aa(0x3a2) + _0x29ce71(_0x3be4aa(0x1cb)) + '</a></button>'), _0x5d75dc(_0x3be4aa(0x1e0))[_0x3be4aa(0x29e)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x29ce71(_0x3be4aa(0x1c3)) + _0x3be4aa(0x2a8));
        }
        function _0x43d38e(_0x428457) {
            const _0x4c2890 = _0x45c6ee;
            var _0x395f3c = document[_0x4c2890(0x1da)]('a');
            _0x395f3c[_0x4c2890(0x223)] = _0x428457, _0x395f3c[_0x4c2890(0x3ac)] = '_blank', document['body'][_0x4c2890(0x211)](_0x395f3c), _0x395f3c[_0x4c2890(0x36f)](), _0x395f3c[_0x4c2890(0x388)]();
        }
        function _0x5743be() {
            const _0x36b315 = _0x45c6ee;
            clearInterval(_0x1f7f1a), _0x5d75dc('.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN')[_0x36b315(0x388)](), _0x5d75dc('.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL')[_0x36b315(0x388)](), _0x5d75dc(_0x36b315(0x3af))['removeAttr'](_0x36b315(0x277)), _0x5b55d0 = ![], _0x258a1f = ![], _0x2ac8d8 = location[_0x36b315(0x223)], _0x28c49b[_0x36b315(0x2b7)](), _0x20b6c7(_0x36b315(0x306));
        }
        function _0x20b6c7(..._0x2aedb5) {
            const _0x254632 = _0x45c6ee;
            var _0x27b137 = new Date();
            _0x1f0c15[_0x254632(0x203)]({
                'time': _0x27b137[_0x254632(0x301)](),
                'content': [..._0x2aedb5]
            }), _0x1f0c15[_0x254632(0x1f7)] > 0x3e8 && (_0x1f0c15 = [
                {
                    'time': _0x27b137[_0x254632(0x301)](),
                    'content': [_0x254632(0x355)]
                },
                ..._0x1f0c15[_0x254632(0x229)](-0x3e7)
            ]), console[_0x254632(0x392)]('[' + _0x27b137[_0x254632(0x3c0)]() + ']', ..._0x2aedb5);
        }
        function _0x25de87() {
            const _0x2837d7 = _0x45c6ee;
            for (let _0x373f51 in _0x160d84) {
                GM_getValue(_0x373f51) != null && typeof GM_getValue(_0x373f51) === _0x2837d7(0x281) && (_0x160d84[_0x373f51] = GM_getValue(_0x373f51));
            }
        }
        function _0x59d5a4(_0x3b787, _0x27652e, _0x4c29db, _0x54d6c6 = '') {
            const _0x13dc69 = _0x45c6ee;
            _0x27652e[_0x13dc69(0x3e6)](_0x13dc69(0x280))[_0x13dc69(0x1f7)] === 0x0 ? (_0x27652e[_0x13dc69(0x29e)](_0x13dc69(0x247) + _0x54d6c6 + _0x13dc69(0x222)), _0x27652e[_0x13dc69(0x3e6)](_0x13dc69(0x280))[_0x13dc69(0x29e)](_0x13dc69(0x390) + _0x5bbd81 + '\x22\x20/></div>'), _0x27652e[_0x13dc69(0x3e6)](_0x13dc69(0x1e5))[_0x13dc69(0x3e4)](_0x13dc69(0x391), _0x13dc69(0x361) + (_0x5bbd81 * 0x64 + '%')), _0x27652e[_0x13dc69(0x3e6)](_0x13dc69(0x1e5))['on']('input', function () {
                const _0x22f719 = _0x13dc69;
                var _0xf07e8 = _0x5d75dc(this)[_0x22f719(0x1c1)]() * 0x64 + '%';
                _0x5bbd81 = _0x5d75dc(this)[_0x22f719(0x1c1)](), GM_setValue(_0x22f719(0x3d1), _0x5d75dc(this)['val']()), _0x5d75dc(this)[_0x22f719(0x3e4)]('style', _0x22f719(0x361) + _0xf07e8), _0x3b787[_0x22f719(0x406)](function () {
                    const _0x34c506 = _0x22f719;
                    _0x20b6c7('(' + _0x4c29db + ')', 'video\x20volume\x20changed\x20#slider'), this[_0x34c506(0x1bc)] = _0x5bbd81;
                });
            }), _0x27652e[_0x13dc69(0x3e6)](_0x13dc69(0x1e5))['on'](_0x13dc69(0x321), function () {
                const _0x1e8841 = _0x13dc69;
                var _0x4dfa58 = _0x5bbd81 * 0x64 + '%';
                _0x5d75dc(this)[_0x1e8841(0x3e4)](_0x1e8841(0x391), _0x1e8841(0x361) + _0x4dfa58), _0x5d75dc(this)[_0x1e8841(0x1c1)](_0x5bbd81), _0x3b787[_0x1e8841(0x406)](function () {
                    const _0x22a30e = _0x1e8841;
                    _0x20b6c7('(' + _0x4c29db + ')', _0x22a30e(0x3b0)), this[_0x22a30e(0x1bc)] = _0x5bbd81;
                });
            }), _0x27652e[_0x13dc69(0x3e6)](_0x13dc69(0x280))['on'](_0x13dc69(0x36f), function (_0x57debe) {
                const _0x347a4e = _0x13dc69;
                _0x57debe[_0x347a4e(0x267)](), _0x57debe[_0x347a4e(0x255)]();
            })) : _0x27652e[_0x13dc69(0x3e6)](_0x13dc69(0x280))[_0x13dc69(0x388)]();
        }
        _0x5d75dc(function () {
            const _0x1a44b5 = _0x45c6ee;
            function _0x464077(_0x3229d2) {
                const _0x39d516 = a0_0x1075;
                var _0x3565a3 = [];
                for (var _0x368c66 of _0x3229d2) {
                    _0x3565a3[_0x39d516(0x203)]({
                        'tagName': _0x368c66[_0x39d516(0x31f)],
                        'id': _0x368c66['id'],
                        'className': _0x368c66['className']
                    });
                }
                return _0x3565a3;
            }
            function _0x33e07e() {
                const _0x59de97 = a0_0x1075;
                let _0x509379 = _0x5d75dc(_0x59de97(0x2a9))[0x0];
                var _0x309951 = '';
                _0x1f0c15[_0x59de97(0x1ac)](_0x45898d => {
                    const _0x480bad = _0x59de97;
                    var _0x3eadac = JSON[_0x480bad(0x26d)](_0x45898d[_0x480bad(0x1e8)], function (_0xbb81f5, _0x84681c) {
                        const _0x3ffbaf = _0x480bad;
                        if (Array[_0x3ffbaf(0x3d0)](this)) {
                            if (typeof _0x84681c === _0x3ffbaf(0x1d5) && _0x84681c instanceof jQuery)
                                return _0x464077(_0x84681c);
                            return _0x84681c;
                        } else
                            return _0x84681c;
                    }, '\x09');
                    _0x309951 += _0x45898d[_0x480bad(0x389)] + ':\x20' + _0x3eadac + '\x0a';
                }), _0x5d75dc(_0x59de97(0x2a5))[_0x59de97(0x3b7)](_0x59de97(0x2f6) + _0x309951 + _0x59de97(0x308) + location[_0x59de97(0x2b6)] + _0x59de97(0x1f1) + _0x509379['innerHTML']);
            }
            _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE', function () {
                _0x33e07e();
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x36f), _0x1a44b5(0x2c5), function () {
                const _0x942771 = _0x1a44b5;
                _0x5d75dc(_0x942771(0x2a5))['select'](), document['execCommand']('copy');
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), _0x1a44b5(0x2f9), function () {
                const _0xbcbfcc = _0x1a44b5;
                _0x5d75dc(_0xbcbfcc(0x2a5))['text']()[_0xbcbfcc(0x1f7)] === 0x0 && _0x33e07e();
                var _0x22c1f5 = _0x5d75dc(_0xbcbfcc(0x2a5))[_0xbcbfcc(0x3b7)](), _0x5ee5f7 = document['createElement']('a'), _0x440403 = new Blob([_0x22c1f5], { 'type': _0xbcbfcc(0x1dc) });
                _0x5ee5f7[_0xbcbfcc(0x223)] = URL[_0xbcbfcc(0x3f7)](_0x440403), _0x5ee5f7[_0xbcbfcc(0x3dc)] = _0xbcbfcc(0x21d) + new Date()[_0xbcbfcc(0x301)]() + _0xbcbfcc(0x1b9), document[_0xbcbfcc(0x1f5)]['appendChild'](_0x5ee5f7), _0x5ee5f7[_0xbcbfcc(0x36f)](), _0x5ee5f7['remove']();
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x36f), _0x1a44b5(0x21a), function () {
                const _0x1c6d69 = _0x1a44b5;
                _0x5d75dc(this)['parent'](_0x1c6d69(0x21c))[_0x1c6d69(0x1f7)] > 0x0 ? _0x5d75dc(this)[_0x1c6d69(0x3d5)](_0x1c6d69(0x21c))[_0x1c6d69(0x3fb)](0xfa, function () {
                    _0x5d75dc(this)['remove']();
                }) : _0x5d75dc('.IG_SN_DIG')[_0x1c6d69(0x388)]();
            }), _0x5d75dc(window)['keydown'](function (_0x274f56) {
                const _0x1c36fe = _0x1a44b5;
                _0x274f56[_0x1c36fe(0x2aa)] == '81' && _0x274f56[_0x1c36fe(0x1fc)] && (_0x5d75dc('.IG_SN_DIG')['remove'](), _0x274f56[_0x1c36fe(0x255)]()), _0x274f56[_0x1c36fe(0x2aa)] == '87' && _0x274f56[_0x1c36fe(0x1fc)] && (_0x5708ae(), _0x274f56[_0x1c36fe(0x255)]()), _0x274f56[_0x1c36fe(0x2aa)] == '90' && _0x274f56['altKey'] && (_0x254289(), _0x274f56['preventDefault']()), _0x274f56[_0x1c36fe(0x2aa)] == '82' && _0x274f56['altKey'] && (_0x5743be(), _0x274f56['preventDefault']()), _0x274f56[_0x1c36fe(0x2aa)] == '83' && _0x274f56[_0x1c36fe(0x1fc)] && (location['href']['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x5d75dc(_0x1c36fe(0x1f9))[_0x1c36fe(0x1f7)] > 0x0 && _0x5d75dc(_0x1c36fe(0x1f9))?.['click'](), location['href'][_0x1c36fe(0x19f)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x5d75dc(_0x1c36fe(0x384))['length'] > 0x0 && _0x5d75dc(_0x1c36fe(0x384))?.[_0x1c36fe(0x36f)](), _0x274f56['preventDefault']());
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x2d8), _0x1a44b5(0x34e), function (_0x44ebc8) {
                const _0xab1846 = _0x1a44b5;
                var _0x55ee2a = _0x5d75dc(this)[_0xab1846(0x3e4)]('id');
                if (_0x55ee2a && _0x160d84[_0x55ee2a] !== undefined) {
                    let _0x3c959f = _0x5d75dc(this)['prop'](_0xab1846(0x1b7));
                    GM_setValue(_0x55ee2a, _0x3c959f), _0x160d84[_0x55ee2a] = _0x3c959f, console[_0xab1846(0x392)](_0xab1846(0x1ff), _0x55ee2a, _0x3c959f);
                }
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), _0x1a44b5(0x23e), function (_0x1d631e) {
                const _0x5ab852 = _0x1a44b5;
                _0x5d75dc(this)[_0x5ab852(0x3e6)](_0x5ab852(0x21c))[_0x5ab852(0x1f7)] > 0x0 && _0x1d631e[_0x5ab852(0x255)]();
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on']('change', _0x1a44b5(0x2f8), function () {
                const _0x432048 = _0x1a44b5;
                let _0xcf764c = _0x5d75dc(this)[_0x432048(0x1c1)]();
                _0x5d75dc(this)[_0x432048(0x3e4)](_0x432048(0x33e)) == _0x432048(0x35e) ? _0x5d75dc(this)[_0x432048(0x2ab)]()[_0x432048(0x1c1)](_0xcf764c) : _0x5d75dc(this)[_0x432048(0x383)]()[_0x432048(0x1c1)](_0xcf764c), _0xcf764c >= 0x0 && _0xcf764c <= 0x1 && (_0x5bbd81 = _0xcf764c, GM_setValue('G_VIDEO_VOLUME', _0xcf764c));
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x266), '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)', function (_0x2d4ff1) {
                const _0x506b67 = _0x1a44b5;
                if (_0x5d75dc(this)['attr']('type') == _0x506b67(0x35e)) {
                    let _0x24e00f = _0x5d75dc(this)[_0x506b67(0x1c1)]();
                    _0x5d75dc(this)[_0x506b67(0x2ab)]()['val'](_0x24e00f);
                } else {
                    let _0x538c85 = _0x5d75dc(this)[_0x506b67(0x1c1)]();
                    _0x538c85 >= 0x0 && _0x538c85 <= 0x1 ? _0x5d75dc(this)[_0x506b67(0x383)]()[_0x506b67(0x1c1)](_0x538c85) : _0x538c85 < 0x0 ? _0x5d75dc(this)['val'](0x0) : _0x5d75dc(this)[_0x506b67(0x1c1)](0x1);
                }
            }), _0x5d75dc('body')['on']('input', _0x1a44b5(0x2ea), function (_0x8ce542) {
                const _0x58cad5 = _0x1a44b5;
                GM_setValue('G_RENAME_FORMAT', _0x5d75dc(this)['val']()), _0x2fa82a = _0x5d75dc(this)[_0x58cad5(0x1c1)]();
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x36f), 'a[data-needed=\x22direct\x22]', function (_0x1af36a) {
                const _0x270c70 = _0x1a44b5;
                _0x1af36a[_0x270c70(0x255)](), _0x521c33(this);
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on']('click', '.IG_SN_DIG_BODY\x20.newTab', function () {
                const _0x3a1ee9 = _0x1a44b5;
                if (_0x160d84[_0x3a1ee9(0x30f)] && _0x160d84[_0x3a1ee9(0x276)])
                    _0x521c33(_0x5d75dc(this)[_0x3a1ee9(0x3d5)]()['children']('a')[_0x3a1ee9(0x194)]()[0x0], !![]);
                else {
                    var _0x6b1baa = new URL(_0x5d75dc(this)['parent']()[_0x3a1ee9(0x1f4)]('a')[_0x3a1ee9(0x3e4)](_0x3a1ee9(0x352)));
                    _0x6b1baa[_0x3a1ee9(0x237)] = _0x3a1ee9(0x1bd), _0x43d38e(_0x6b1baa[_0x3a1ee9(0x223)]);
                }
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), _0x1a44b5(0x30c), function () {
                const _0xd66e74 = _0x1a44b5;
                let _0xc035dc = new Date()['getTime']();
                _0x160d84[_0xd66e74(0x324)] && _0x5d75dc(this)[_0xd66e74(0x3d5)]()['children']('a')[_0xd66e74(0x3e4)](_0xd66e74(0x36b)) && (_0xc035dc = _0x5d75dc(this)[_0xd66e74(0x3d5)]()[_0xd66e74(0x1f4)]('a')[_0xd66e74(0x3e4)](_0xd66e74(0x36b)));
                let _0x1da9bb = _0x5d75dc(this)[_0xd66e74(0x3d5)]()['children']('a')[_0xd66e74(0x3e4)](_0xd66e74(0x341)) ?? _0x5d75dc(_0xd66e74(0x2e8))[_0xd66e74(0x3b7)]();
                _0x4f8b76(_0x5d75dc(this)['parent']()[_0xd66e74(0x1f4)]('a')[_0xd66e74(0x3e6)](_0xd66e74(0x1f8))[_0xd66e74(0x194)]()[_0xd66e74(0x3e4)](_0xd66e74(0x3ec)), _0x5d75dc(this)[_0xd66e74(0x3d5)]()[_0xd66e74(0x1f4)]('a')[_0xd66e74(0x3e4)](_0xd66e74(0x2fe)), _0xd66e74(0x2f7), _0xc035dc, 'jpg', _0x1da9bb);
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x36f), _0x1a44b5(0x1f9), function () {
                _0x208cfb(!![]);
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), _0x1a44b5(0x195), function () {
                _0x5255b2();
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), _0x1a44b5(0x3f3), function (_0x5822d9) {
                const _0x3ba497 = _0x1a44b5;
                _0x5822d9[_0x3ba497(0x255)](), _0x208cfb(!![], !![], !![]);
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x36f), _0x1a44b5(0x238), function () {
                _0x4a775b(!![]);
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), '.IG_DWPROFILE', function (_0x1a7d85) {
                _0x1a7d85['stopPropagation'](), _0x2f7f78(!![]);
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), _0x1a44b5(0x384), function () {
                _0x4536e3(!![]);
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), _0x1a44b5(0x2b9), function () {
                _0x4e2f66();
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x36f), _0x1a44b5(0x209), function (_0x4897e4) {
                _0x4897e4['preventDefault'](), _0x4536e3(!![], !![]);
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on']('click', '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x532f68(!![]);
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x36f), _0x1a44b5(0x36e), function () {
                _0x162401(!![], !![]);
            }), _0x5d75dc('body')['on']('click', _0x1a44b5(0x34d), function () {
                _0x162401(!![], !![], !![]);
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x36f), _0x1a44b5(0x303), function () {
                _0x162401(!![], ![]);
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x35f), _0x1a44b5(0x1d2), function (_0x244629) {
                const _0x4810ed = _0x1a44b5;
                if (_0x244629['which'] === 0x3 || _0x244629[_0x4810ed(0x38a)] === 0x2) {
                    if (location[_0x4810ed(0x223)] === _0x4810ed(0x20f) && _0x160d84[_0x4810ed(0x2fb)]) {
                        _0x244629[_0x4810ed(0x255)]();
                        if (_0x5d75dc(this)[_0x4810ed(0x3e6)](_0x4810ed(0x2de))[_0x4810ed(0x1f7)] > 0x0) {
                            const _0x2b9b9c = _0x4810ed(0x20f) + _0x5d75dc(this)[_0x4810ed(0x1f4)](_0x4810ed(0x1c2))[_0x4810ed(0x25f)]()[_0x4810ed(0x3b7)]();
                            _0x244629[_0x4810ed(0x38a)] === 0x2 ? GM_openInTab(_0x2b9b9c) : location[_0x4810ed(0x223)] = _0x2b9b9c;
                        }
                    }
                }
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x2d8), _0x1a44b5(0x3c8), function () {
                const _0x29821b = _0x1a44b5;
                var _0x386bd9 = _0x5d75dc(this)['find']('input')['prop'](_0x29821b(0x1b7));
                _0x5d75dc(_0x29821b(0x2ca))['each'](function () {
                    const _0x2e40bf = _0x29821b;
                    _0x5d75dc(this)[_0x2e40bf(0x261)](_0x2e40bf(0x1b7), _0x386bd9);
                });
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x2d8), _0x1a44b5(0x2ca), function () {
                const _0x421687 = _0x1a44b5;
                var _0x9f503c = _0x5d75dc('.IG_SN_DIG_BODY\x20.inner_box:checked')['length'], _0x5c80a7 = _0x5d75dc('.IG_SN_DIG_BODY\x20.inner_box')[_0x421687(0x1f7)];
                _0x5d75dc(_0x421687(0x3c8))['find']('input')[_0x421687(0x261)](_0x421687(0x1b7), _0x9f503c == _0x5c80a7);
            }), _0x5d75dc('body')['on'](_0x1a44b5(0x36f), _0x1a44b5(0x257), function () {
                const _0x10c35c = _0x1a44b5;
                let _0x47db55 = 0x0;
                _0x5d75dc(_0x10c35c(0x2c9))[_0x10c35c(0x406)](function () {
                    const _0x3137b8 = _0x10c35c;
                    _0x5d75dc(this)[_0x3137b8(0x383)]()['children'](_0x3137b8(0x266))[_0x3137b8(0x261)](_0x3137b8(0x1b7)) && (_0x5d75dc(this)['click'](), _0x47db55++);
                }), _0x47db55 == 0x0 && alert(_0x29ce71(_0x10c35c(0x3da)));
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on'](_0x1a44b5(0x2d8), _0x1a44b5(0x3f1), function () {
                const _0x7e55ff = _0x1a44b5;
                GM_setValue(_0x7e55ff(0x1ce), _0x5d75dc(this)[_0x7e55ff(0x1c1)]()), _0x2aad8d = _0x5d75dc(this)[_0x7e55ff(0x1c1)](), _0x2aad8d?.[_0x7e55ff(0x220)]('en') || _0x41a59d[_0x2aad8d] != null ? (_0x2ef7cd(), _0x2b3164()) : _0x51f039(_0x2aad8d)[_0x7e55ff(0x2d5)](_0x4d0e37 => {
                    _0x41a59d[_0x2aad8d] = _0x4d0e37, _0x2ef7cd(), _0x2b3164();
                })[_0x7e55ff(0x227)](_0x201ec1 => {
                    const _0x542ef6 = _0x7e55ff;
                    console[_0x542ef6(0x3a8)](_0x542ef6(0x31e), _0x201ec1);
                });
            }), _0x5d75dc(_0x1a44b5(0x1f5))['on']('change', _0x1a44b5(0x2f1), function () {
                const _0x2f1935 = _0x1a44b5;
                _0x5d75dc(_0x2f1935(0x231))[_0x2f1935(0x3b7)]('' + new Date()['toLocaleString'](_0x5d75dc(this)['val'](), {
                    'hour12': ![],
                    'second': '2-digit',
                    'minute': _0x2f1935(0x3b4),
                    'hour': _0x2f1935(0x3b4),
                    'month': _0x2f1935(0x3b4),
                    'day': '2-digit',
                    'year': _0x2f1935(0x3bd)
                })['replaceAll']('/', '-')), LOCATE_DATE_FORMAT = _0x5d75dc(this)[_0x2f1935(0x1c1)](), GM_setValue('G_LOCATE_DATE_FORMAT', _0x5d75dc(this)[_0x2f1935(0x1c1)]());
            }), _0x5d75dc('body')['on']('click', '.IG_SN_DIG_TITLE\x20#batch_download_direct', function () {
                const _0x492046 = _0x1a44b5;
                _0x5d75dc('.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x492046(0x406)](function () {
                    const _0x4e7b0f = _0x492046;
                    _0x5d75dc(this)[_0x4e7b0f(0x36f)]();
                });
            });
            const _0x34bfce = new MutationObserver(_0x207fb3 => {
                const _0x264e9f = _0x1a44b5;
                for (const _0x17aa01 of _0x207fb3) {
                    _0x17aa01[_0x264e9f(0x33e)] === _0x264e9f(0x283) && _0x17aa01[_0x264e9f(0x393)][_0x264e9f(0x1ac)](_0x5b8e8a => {
                        const _0x499504 = _0x264e9f, _0x4e9f69 = _0x5d75dc(_0x5b8e8a)['find'](_0x499504(0x275));
                        if (_0x4e9f69[_0x499504(0x1f7)] > 0x0) {
                            _0x160d84[_0x499504(0x2fa)] && _0x4e9f69[_0x499504(0x406)](function () {
                                const _0x3ecd04 = _0x499504;
                                _0x5d75dc(this)['on'](_0x3ecd04(0x1af), function () {
                                    const _0x1a5794 = _0x3ecd04;
                                    !_0x5d75dc(this)[_0x1a5794(0x3f6)](_0x1a5794(0x379)) && (_0x5d75dc(this)[_0x1a5794(0x3e4)](_0x1a5794(0x28c), !![]), this[_0x1a5794(0x1bc)] = _0x5bbd81, _0x20b6c7(_0x1a5794(0x3c6)));
                                });
                            });
                            if (location[_0x499504(0x2b6)][_0x499504(0x19f)](/^(\/stories\/)/ig)) {
                                const _0x13c627 = location[_0x499504(0x2b6)][_0x499504(0x19f)](/^(\/stories\/highlights\/)/ig) != null, _0x45f763 = _0x13c627 ? _0x499504(0x268) : _0x499504(0x2cf);
                                _0x4e9f69['each'](function () {
                                    const _0x440731 = _0x499504;
                                    _0x5d75dc(this)['on']('timeupdate', function () {
                                        const _0x585a00 = a0_0x1075;
                                        if (!_0x5d75dc(this)[_0x585a00(0x3f6)](_0x585a00(0x3fe))) {
                                            let _0x107e8a = _0x5d75dc(this);
                                            _0x107e8a[_0x585a00(0x33a)]('div[style][class]')[_0x585a00(0x3ed)](function () {
                                                const _0x9bf344 = _0x585a00;
                                                return _0x5d75dc(this)['width']() == _0x107e8a[_0x9bf344(0x1b2)]();
                                            })['find'](_0x585a00(0x3eb))[_0x585a00(0x1f7)] === 0x0 ? (_0x5d75dc(this)['attr'](_0x585a00(0x2c1), !![]), _0x13c627 ? _0x532f68(![]) : _0x4a775b(![]), _0x20b6c7('(' + _0x45f763 + ')', 'Manually\x20inserting\x20thumbnail\x20button')) : (_0x5d75dc(this)[_0x585a00(0x3e4)](_0x585a00(0x2c1), !![]), _0x20b6c7('(' + _0x45f763 + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0xf32bcd = _0x5d75dc(this);
                                    if (_0x160d84[_0x440731(0x198)]) {
                                        if (!_0xf32bcd[_0x440731(0x3f6)]('controls')) {
                                            _0x20b6c7('(' + _0x45f763 + ')', _0x440731(0x2b5)), this[_0x440731(0x1bc)] = _0x5bbd81, _0xf32bcd['on'](_0x440731(0x20d), function () {
                                                const _0x137789 = _0x440731;
                                                this[_0x137789(0x1bc)] = _0x5bbd81;
                                            });
                                            let _0x3f07d3 = _0xf32bcd[_0x440731(0x33a)]('div')[_0x440731(0x3ed)](function () {
                                                    const _0x2c8dfd = _0x440731;
                                                    return _0x5d75dc(this)[_0x2c8dfd(0x3e4)]('class') == null && _0x5d75dc(this)[_0x2c8dfd(0x3e4)](_0x2c8dfd(0x391)) == null;
                                                })[_0x440731(0x194)](), _0x1c2578 = _0x3f07d3[_0x440731(0x2ab)]();
                                            _0x1c2578[_0x440731(0x200)]();
                                            let _0x541978 = _0x3f07d3[_0x440731(0x3e6)](_0x440731(0x320));
                                            _0x541978[_0x440731(0x200)]();
                                            const _0x573333 = function (_0x4624d2) {
                                                const _0x3c2ee6 = _0x440731;
                                                _0x4624d2[_0x3c2ee6(0x255)](), _0xf32bcd[_0x3c2ee6(0x354)](_0x3c2ee6(0x346), '2'), _0xf32bcd[_0x3c2ee6(0x3e4)](_0x3c2ee6(0x2bc), !![]), _0x541978[_0x3c2ee6(0x200)](), _0x1c2578[_0x3c2ee6(0x200)](), _0x59d5a4(_0xf32bcd, _0xf32bcd[_0x3c2ee6(0x33a)]('div[style][class]')[_0x3c2ee6(0x3ed)](function () {
                                                    const _0x5e596e = _0x3c2ee6;
                                                    return _0x5d75dc(this)[_0x5e596e(0x1b2)]() == _0xf32bcd[_0x5e596e(0x1b2)]();
                                                })['first'](), _0x45f763, _0x3c2ee6(0x25b));
                                            };
                                            _0xf32bcd[_0x440731(0x3d5)]()[_0x440731(0x3e6)](_0x440731(0x397))['on'](_0x440731(0x3cf), _0x573333), _0x541978['on']('contextmenu', _0x573333), _0x1c2578['on'](_0x440731(0x3cf), _0x573333), _0xf32bcd['on'](_0x440731(0x3cf), function (_0x5a2dde) {
                                                const _0xa5d5fc = _0x440731;
                                                _0x5a2dde['preventDefault'](), _0xf32bcd[_0xa5d5fc(0x354)](_0xa5d5fc(0x346), '-1'), _0xf32bcd[_0xa5d5fc(0x401)]('controls'), _0x1c2578['show'](), _0x541978[_0xa5d5fc(0x33f)](), _0x59d5a4(_0xf32bcd, _0xf32bcd[_0xa5d5fc(0x33a)](_0xa5d5fc(0x38f))[_0xa5d5fc(0x3ed)](function () {
                                                    const _0x3c6d26 = _0xa5d5fc;
                                                    return _0x5d75dc(this)[_0x3c6d26(0x1b2)]() == _0xf32bcd[_0x3c6d26(0x1b2)]();
                                                })[_0xa5d5fc(0x194)](), _0x45f763, _0xa5d5fc(0x25b));
                                            }), _0xf32bcd['on']('volumechange', function () {
                                                const _0x1c1e9e = _0x440731;
                                                let _0x309056 = _0x3f07d3[_0x1c1e9e(0x3d5)]()[_0x1c1e9e(0x3e6)](_0x1c1e9e(0x1c8))[_0x1c1e9e(0x33a)](_0x1c1e9e(0x32a))[_0x1c1e9e(0x194)]();
                                                var _0x37fc38 = _0x309056[_0x1c1e9e(0x3e6)](_0x1c1e9e(0x3a0))[_0x1c1e9e(0x1f7)] === 0x0;
                                                this['muted'] != _0x37fc38 && (this[_0x1c1e9e(0x1bc)] = _0x5bbd81, _0x309056?.[_0x1c1e9e(0x36f)]()), _0x5d75dc(this)['attr'](_0x1c1e9e(0x3b5)) && (_0x5bbd81 = this[_0x1c1e9e(0x1bc)], GM_setValue(_0x1c1e9e(0x3d1), this[_0x1c1e9e(0x1bc)])), this[_0x1c1e9e(0x1bc)] == _0x5bbd81 && _0x5d75dc(this)['attr'](_0x1c1e9e(0x3b5), !![]);
                                            }), _0xf32bcd[_0x440731(0x354)](_0x440731(0x213), _0x440731(0x202)), _0xf32bcd['css'](_0x440731(0x346), '2'), _0xf32bcd['attr'](_0x440731(0x3d9), !![]), _0xf32bcd[_0x440731(0x3e4)](_0x440731(0x2bc), !![]);
                                        }
                                    } else
                                        _0x59d5a4(_0xf32bcd, _0xf32bcd[_0x440731(0x33a)]('div[style][class]')[_0x440731(0x3ed)](function () {
                                            const _0x3ac434 = _0x440731;
                                            return _0x5d75dc(this)[_0x3ac434(0x1b2)]() == _0xf32bcd[_0x3ac434(0x1b2)]();
                                        })[_0x440731(0x194)](), _0x45f763, _0x440731(0x25b));
                                });
                            }
                        }
                    });
                }
            });
            _0x34bfce[_0x1a44b5(0x3f4)](_0x5d75dc(_0x1a44b5(0x2a9))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));