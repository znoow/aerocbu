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

function a0_0xc0b7() {
    const _0x554ced = [
        '._acnb',
        'getStories()',
        '.IG_SN_DIG\x20#post_info',
        'join',
        'getHighlightStories()',
        'time',
        'BATCH_DOWNLOAD_DIRECT',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'stringify',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'innerHTML',
        'fail',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'user',
        'query_hash',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'NEW_TAB',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'pointer',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'replaceAll',
        'attr',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'G_RENAME_FORMAT',
        'data-type',
        'length',
        'AUTO_RENAME',
        'href',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'padEnd',
        'top',
        '#locatePreview',
        'canvas._aarh',
        'shortcode',
        'Logger:\x0a',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'val',
        'isIntersecting',
        'position',
        'media-id',
        'Current\x20version:\x20',
        'appendChild',
        'numeric',
        'bottom',
        '<div></div>',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'img',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        '.SNKMS_IG_DW_MAIN',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'parents',
        'responseText',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '<p\x20id=\x22_SNLOAD\x22>',
        'className',
        'fadeOut',
        '37px',
        '1403760BSZhgU',
        'Manually\x20inserting\x20thumbnail\x20button',
        '305019zFFpPF',
        'data-modify-thumbnail',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        '.IG_DWHISTORY_THUMBNAIL',
        'isReels',
        'GraphVideo',
        'instagram.com/reels/',
        'getUserHighSizeProfile()',
        '<div\x20class=\x22volume_slider\x20',
        'toLowerCase',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '20000',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'altKey',
        'removeAttr',
        'x1lix1fw',
        'data-href',
        'video_resources',
        'before',
        'https://i.instagram.com/api/v1/users/',
        'modify-thumbnail',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'selected',
        'getUserId()',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'html',
        'modify',
        'status',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'Cannot\x20find\x20video\x20URL.',
        '#article-id',
        'forEach',
        '.IG_DWPROFILE',
        '.IG_SN_DIG',
        '/accounts/login',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'srcset',
        'Thumbnail\x20button\x20already\x20inserted',
        'Debug\x20Window',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'getMinutes',
        'highlights',
        '4drMHlY',
        '._acay\x20+\x20.x24i39r',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'last',
        'controls',
        'FORCE_RESOURCE_VIA_MEDIA',
        'first',
        'https://www.instagram.com/web/search/topsearch/?query=',
        '</div>',
        'getTranslationText()',
        'video_url',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'edge_sidecar_to_children',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '#scrollWrapper',
        '\x22\x20datetime=\x22',
        'relative',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'div.volume_slider\x20input',
        '\x22\x20class=\x22newTab\x22>',
        '<label\x20class=\x22globalSettings',
        'play\x20playing',
        'class',
        'CHECK_UPDATE',
        'FORCE_FETCH_ALL_RESOURCES',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'ig_helper_notice',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '</button>',
        '18XKeKDT',
        '188PLBnam',
        'Settings',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'updatenotification',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'script[type=\x22application/json\x22]',
        'a[href^=\x22/\x22]',
        'scontent.cdninstagram.com',
        'IG\x20Debug\x20DOM\x20Tree',
        'NO_VID_URL',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'type',
        'video',
        'boolean',
        'label',
        'THUMBNAIL_INTRO',
        'hide',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        'data-snig',
        'G_CHECK_TIMESTAMP',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'div.volume_slider',
        'Preference\x20Settings',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'location',
        'object',
        'pathname',
        'div[class][role=\x22button\x22]',
        '.IG_REELS_NEWTAB',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'mouseenter',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'reels_media',
        'SKIP_VIEW_STORY_CONFIRM',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'isProfile',
        'download',
        '\x22\x20data-ih-locale-title=\x22',
        '.IG_DWHINEWTAB',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'username',
        'match',
        'muted',
        'RENAME_PUBLISH_DATE',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'then',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'split',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        '._acay',
        'video_versions',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'code',
        'log',
        'load',
        'canDownload',
        '\x22]\x20span',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        '2755roidLq',
        'z-index',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'createElement',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'SHOW_DOM_TREE',
        'div:not([class]):not([style])',
        '\x22\x20/>',
        'taken_at_timestamp',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'smooth',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        'Download\x20All\x20Resources',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'finalUrl',
        'checked',
        'avatar',
        'downloadURL',
        '#tempWrapper',
        'DOWNLOAD_DOM_TREE',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '*/*',
        'language',
        'each',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'https://www.instagram.com/',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'mp4',
        'DONATE',
        'message',
        'loadstart',
        'substr',
        'which',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        'Show\x20DOM\x20Tree',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'thumbnail',
        '2636858yaZwEh',
        '\x22\x20class=\x22videoThumbnail\x22>',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'range',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'px;\x22>',
        'getSeconds',
        'DIRECT_DOWNLOAD_ALL',
        'url',
        'data-controls',
        'div[style][class]',
        'sort',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        '.IG_SN_DIG\x20input',
        '6UlIwHN',
        'title',
        'input',
        'push',
        'response',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'childList',
        '.IG_DWNEWTAB',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'div#splash-screen',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'data-path',
        'height',
        'profile_pic_url',
        'en-US',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'ALL_CHECK',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'getTime',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        'div[role=\x22presentation\x22]',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'Checking\x20for\x20Script\x20Updates',
        'error',
        '<option\x20value=\x22',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'timeupdate',
        'target',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'image_versions2',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'parent',
        'padStart',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'Image',
        'DISABLE_VIDEO_LOOPING',
        'Donate',
        'user\x20settings',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'toString',
        '</span>\x20',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'li._acaz',
        'loop',
        'NOTICE_UPDATE_TITLE',
        'REPORT_GITHUB',
        'post',
        'IMG',
        'https://ko-fi.com/snkoarashi',
        'assign',
        'data-ih-locale',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'display_url',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'story',
        'host',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        '</span></label>',
        'shortcode_media',
        '--ig-track-progress:\x20',
        'Main\x20Timer',
        'toISOString',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'Feedback',
        '.xpgaw4o',
        'hd_profile_pic_url_info',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'owner',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'GET',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'remove-thumbnail',
        'src',
        'data-name',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'video[class]',
        'parse',
        'article',
        '</p>',
        'data-username',
        'style',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'Close',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'getBlobMediaWithQueryID()',
        'taken_at',
        'a[data-needed=\x22direct\x22]',
        'reels',
        'show',
        'removeClass',
        '\x20-</a>',
        'node',
        'display_resources',
        'vertical',
        'SETTING',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        '\x20child',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'Can\x20not\x20find\x20download\x20url.',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20text\x20is\x20translated\x20using\x20machine\x20translation\x20and\x20may\x20be\x20inaccurate;\x20you\x20can\x20contact\x20support\x20to\x20correct\x20the\x20translation.</div>',
        'feedback_message',
        'video\x20+\x20div',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        '#_SNLOAD',
        'there\x20is\x20no\x20new\x20update',
        'Found\x20post\x20container',
        'body',
        'hasReferrer',
        'replace',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        'G_LOCATE_DATE_FORMAT',
        'ended',
        'svg',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'change',
        '._aagv\x20img',
        '<a\x20datetime=\x22',
        'catch',
        'getUserIdWithAgent()',
        '\x22\x20class=\x22IG_REELS\x22>',
        'preventDefault',
        'getTranslationText\x20catch\x20error:',
        'find',
        'isArray',
        'stories',
        '.SNKMS_IG_NEWTAB_MAIN',
        'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        '.IG_DWSTORY',
        'Display\x20HTML5\x20Video\x20Controller',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '/info/',
        '[data-snig]',
        '.txt',
        'append',
        'DOWNLOAD',
        '</a></button><br/>',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'https://www.instagram.com/reel/',
        'children',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
        '<a\x20href=\x22https://www.instagram.com/p/',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'xdt_api__v1__media__shortcode__web_info',
        'slice',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        '10267125hDFyZt',
        'wrap',
        'LOAD_BLOB_MULTIPLE',
        'contextmenu',
        'div#scrollview',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'getMediaInfo()',
        'Disable\x20Video\x20Auto-looping',
        '2-digit',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'px;top:',
        '\x22\x20data-globalIndex=\x22',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'NOPATH',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'body\x20>\x20div\x20section._ac0a',
        'logger\x20sliced',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'faild',
        'div[id^=\x22mount\x22]',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'Found\x20insert\x20point',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        '\x22\x20title=\x22',
        'mousedown',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'onReadyMyDW()\x20Timer',
        'volume',
        'VID',
        'getBlobMedia()',
        'NOTICE_UPDATE_CONTENT',
        '._acay\x20._acaz',
        'video\x20volume\x20changed\x20#slider',
        'data-ih-locale-title',
        'x1s85apg',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        '_ac3q',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'regenerated',
        'prev',
        'CLOSE',
        'GraphImage',
        'div\x20>\x20ul\x20li._acaz',
        'hasClass',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'observe',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        '__typename',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'BATCH_DOWNLOAD_SELECTED',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        '320279OQofWC',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        '\x22><span\x20data-ih-locale=\x22',
        'query_id',
        'div:last-child',
        'section\x20>\x20main[role=\x22main\x22]',
        'Video',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        '<input\x20value=\x22',
        'Checking\x20for\x20Updates',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        '.IG_DWHISTORY',
        'edges',
        'cursor',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'highlight',
        'THUMBNAIL',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'button[role=\x22menuitem\x22]',
        'lang',
        'Fetch\x20from\x20memory\x20cache:',
        'Loading\x20Blob\x20Media...',
        'is_video',
        'stopPropagation',
        'next',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'Download\x20Selected\x20Resources',
        'getPostOwner()',
        'undefined',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'width',
        'candidates',
        'getMonth',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'carousel_media',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'data',
        'CHECK_UPDATE_MENU',
        'startsWith',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'css',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'text',
        'hostname',
        'reject',
        'scrollBy',
        '</div></div>',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'a[href^=\x22/p/\x22]',
        'INTERNAL_CSS',
        'div',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'isHighlightsStory',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        'img[referrerpolicy]',
        'datetime',
        'floor',
        'filter',
        'body\x20>\x20div\x20section:visible._ac0a',
        'https://www.instagram.com/reels/',
        '\x22\x20/></div>',
        'select',
        'after',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        '%22}',
        'items',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'tagName',
        'jpg',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '.IG_REELS',
        'NONE',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'FEEDBACK',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'reel',
        'data-remove-thumbnail',
        'version',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '</option>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'volumechange',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'addedNodes',
        'pause',
        'script',
        'remove',
        'getDate',
        'includes',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'Feedback\x20Options',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        'GM_unregisterMenuCommand',
        'data-modify',
        '<a\x20media-id=\x22',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'https://www.instagram.com/p/',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'GraphSidecar',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'matchAll',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '.IG_DWSTORY_THUMBNAIL',
        'https://i.instagram.com/api/v1/media/',
        'data-loop',
        'disconnect',
        'data-completed',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'keyCode',
        'prop',
        'LOAD_BLOB_RELOAD',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'close',
        '.IG_SN_DIG\x20.globalSettings',
        'userAgent',
        'ig_cache_key',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'DIV',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        '.IG_REELS_THUMBNAIL',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'absolute',
        'hidden',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '0px',
        'MODIFY_VIDEO_VOLUME',
        '</a></button>',
        'navigator',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'G_VIDEO_VOLUME',
        'searchParams',
        'keys',
        'div\x20>\x20ul._acay',
        'execCommand',
        '220768eevkVU',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'Remote\x20version:\x20',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'video\x20+\x20div\x20>\x20div',
        'Select\x20All',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        '.videoThumbnail',
        'SELECT_AND_COPY',
        'text/plain',
        'LOCALE_MANIFEST',
        'DOMTree-',
        '.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN',
        'getHours',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'setAttribute',
        'click',
        'HTML5_VIDEO_CONTROL',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        '_INTRO',
        '\x0a-----\x0a\x0aLocation:\x20'
    ];
    a0_0xc0b7 = function () {
        return _0x554ced;
    };
    return a0_0xc0b7();
}
function a0_0x200b(_0x48248b, _0x4e9fef) {
    const _0xc0b700 = a0_0xc0b7();
    return a0_0x200b = function (_0x200b23, _0x19d54a) {
        _0x200b23 = _0x200b23 - 0x16c;
        let _0x179b60 = _0xc0b700[_0x200b23];
        return _0x179b60;
    }, a0_0x200b(_0x48248b, _0x4e9fef);
}
(function (_0x9fd631, _0x49b3d1) {
    const _0x15d131 = a0_0x200b, _0x1f971f = _0x9fd631();
    while (!![]) {
        try {
            const _0x49e54a = parseInt(_0x15d131(0x24a)) / 0x1 + -parseInt(_0x15d131(0x360)) / 0x2 * (-parseInt(_0x15d131(0x32e)) / 0x3) + parseInt(_0x15d131(0x37f)) / 0x4 * (parseInt(_0x15d131(0x3bc)) / 0x5) + parseInt(_0x15d131(0x17b)) / 0x6 * (parseInt(_0x15d131(0x16d)) / 0x7) + -parseInt(_0x15d131(0x2da)) / 0x8 * (-parseInt(_0x15d131(0x37e)) / 0x9) + parseInt(_0x15d131(0x32c)) / 0xa + -parseInt(_0x15d131(0x216)) / 0xb;
            if (_0x49e54a === _0x49b3d1)
                break;
            else
                _0x1f971f['push'](_0x1f971f['shift']());
        } catch (_0x3dc55c) {
            _0x1f971f['push'](_0x1f971f['shift']());
        }
    }
}(a0_0xc0b7, 0x2dff9), function (_0x2fb0bd) {
    setTimeout(() => {
        'use strict';
        const _0x1b3a45 = a0_0x200b;
        const _0x216f60 = {
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
            }, _0x5617fd = [
                _0x1b3a45(0x3ad),
                _0x1b3a45(0x210),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ];
        var _0x4f0b72 = GM_getValue(_0x1b3a45(0x2d5)) ? GM_getValue('G_VIDEO_VOLUME') : 0x1, _0xb045c3 = ![], _0x2c4e7a = GM_getValue(_0x1b3a45(0x309)) ? GM_getValue('G_RENAME_FORMAT') : _0x1b3a45(0x350);
        const _0x3a2b6b = {
                'DOWNLOAD': _0x1b3a45(0x3c7),
                'NEW_TAB': _0x1b3a45(0x34d),
                'THUMBNAIL': _0x1b3a45(0x29f),
                'CLOSE': '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>'
            }, _0x53f3c7 = 0xfa, _0x17bd78 = GM_getResourceText(_0x1b3a45(0x27d)), _0x5cf8a4 = JSON[_0x1b3a45(0x1cc)](GM_getResourceText(_0x1b3a45(0x2e5)));
        var _0x1a0608 = [], _0x50e786 = {}, _0xfcc1a4 = GM_getValue(_0x1b3a45(0x25d)) || navigator[_0x1b3a45(0x3d5)] || navigator['userLanguage'], _0x1ca613 = location['href'], _0x6fabb = ![], _0x39ff46 = ![], _0x22ab83 = [], _0x1f2c87, _0x217b8d, _0x4586a9, _0x488021, _0x8f0beb = {
                'stories': {},
                'highlights': {}
            }, _0x369582 = new MutationObserver(function (_0x15ce9a, _0x1887aa) {
                _0x150e5c();
            });
        _0x5a1668(), GM_addStyle(_0x17bd78), _0x15ade2(), _0x14dbde(_0xfcc1a4)[_0x1b3a45(0x3af)](_0x42ff3a => {
            _0x50e786[_0xfcc1a4] = _0x42ff3a, _0x8d2001(), _0x15ade2(), _0x40054f(0x12c);
        })['catch'](_0x1542e3 => {
            const _0xebbd6d = _0x1b3a45;
            _0x15ade2(), _0x40054f(0x12c), !_0xfcc1a4[_0xebbd6d(0x272)]('en') && console[_0xebbd6d(0x193)](_0xebbd6d(0x1fc), _0x1542e3);
        });
        var _0x5547c3 = setInterval(function () {
            const _0x37fed5 = _0x1b3a45;
            if (_0x2fb0bd(_0x37fed5(0x184))[_0x37fed5(0x30b)] > 0x0 && !_0x2fb0bd(_0x37fed5(0x184))['is'](':hidden') || location[_0x37fed5(0x39b)]['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x37fed5(0x277)][_0x37fed5(0x272)]('www.')) {
                _0x39ff46 = ![];
                return;
            }
            if (_0x1ca613 != location['href'] || !_0x6fabb || !_0x39ff46) {
                console[_0x37fed5(0x3b7)](_0x37fed5(0x1ba), 'trigging'), clearInterval(_0x488021), _0x39ff46 = ![], _0x6fabb = !![], _0x1ca613 = location[_0x37fed5(0x30d)], _0x369582[_0x37fed5(0x2ba)]();
                if (location[_0x37fed5(0x30d)][_0x37fed5(0x272)](_0x37fed5(0x2b1)) || location[_0x37fed5(0x39b)][_0x37fed5(0x3ab)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x37fed5(0x30d)][_0x37fed5(0x272)](_0x37fed5(0x20e))) {
                    _0x8f0beb[_0x37fed5(0x1ff)] = {}, _0x8f0beb[_0x37fed5(0x35f)] = {}, _0x3bd434('isDialog');
                    var _0x570841 = setInterval(() => {
                        const _0x27ffba = _0x37fed5;
                        _0x2fb0bd(_0x27ffba(0x2de))[_0x27ffba(0x30b)] > 0x0 && (clearInterval(_0x570841), setTimeout(() => {
                            _0x150e5c(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x39ff46 = !![];
                }
                location[_0x37fed5(0x30d)][_0x37fed5(0x272)](_0x37fed5(0x288)) && (_0x3bd434(_0x37fed5(0x332)), setTimeout(() => {
                    _0x2f64bd(![]);
                }, 0x96), _0x39ff46 = !![]);
                if (location['href']['split']('?')[0x0] == _0x37fed5(0x3d8)) {
                    _0x8f0beb[_0x37fed5(0x1ff)] = {}, _0x8f0beb[_0x37fed5(0x35f)] = {};
                    let _0x5be1e0 = _0x1f2c87?.[_0x37fed5(0x3ab)](/^\/(stories|highlights)\//ig) != null;
                    _0x3bd434('isHomepage', _0x5be1e0), setTimeout(() => {
                        const _0x1ff230 = _0x37fed5;
                        _0x150e5c(![], _0x5be1e0);
                        const _0x21e1fb = _0x2fb0bd(_0x1ff230(0x230))?.[_0x1ff230(0x19b)]()[0x0];
                        _0x21e1fb && _0x369582[_0x1ff230(0x244)](_0x21e1fb, { 'childList': !![] });
                    }, 0x96), _0x39ff46 = !![];
                }
                _0x2fb0bd(_0x37fed5(0x322))[_0x37fed5(0x30b)] && location[_0x37fed5(0x39b)][_0x37fed5(0x3ab)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x37fed5(0x39b)][_0x37fed5(0x3ab)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x3bd434(_0x37fed5(0x3a4)), setTimeout(() => {
                    _0x230aae(![]);
                }, 0x96), _0x39ff46 = !![]);
                if (!_0x39ff46) {
                    if (location[_0x37fed5(0x30d)][_0x37fed5(0x3ab)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig)) {
                        _0x8f0beb[_0x37fed5(0x35f)] = {}, _0x3bd434(_0x37fed5(0x281)), _0x3b4e62(![]), _0x488021 = setInterval(() => {
                            _0x3b8400(![]);
                        }, _0x53f3c7);
                        _0x2fb0bd(_0x37fed5(0x255))[_0x37fed5(0x30b)] && setTimeout(() => {
                            const _0x5d2715 = _0x37fed5;
                            if (_0x216f60['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0xccd63b = _0x2fb0bd(_0x5d2715(0x2c1))[_0x5d2715(0x286)](function () {
                                    const _0x2440a9 = _0x5d2715;
                                    return _0x2fb0bd(this)[_0x2440a9(0x20f)]()[_0x2440a9(0x30b)] === 0x0;
                                });
                                _0xccd63b?.[_0x5d2715(0x2eb)]();
                            }
                            _0x39ff46 = !![];
                        }, 0x96);
                        ;
                    } else
                        location[_0x37fed5(0x30d)][_0x37fed5(0x3ab)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x3bd434('isStory'), _0x2fb0bd(_0x37fed5(0x3ca))[_0x37fed5(0x30b)] > 0x0 && (_0x2fb0bd(_0x37fed5(0x203))[_0x37fed5(0x2a6)](), _0x2fb0bd('.IG_DWNEWTAB')[_0x37fed5(0x2a6)](), _0x2fb0bd('.IG_DWSTORY_THUMBNAIL')[_0x37fed5(0x30b)] && _0x2fb0bd(_0x37fed5(0x2b7))[_0x37fed5(0x2a6)](), _0x5a3053(![]), setTimeout(() => {
                            _0x5a3053(![]);
                        }, 0x96)), _0x2fb0bd('.IG_DWSTORY')['length'] && setTimeout(() => {
                            const _0x4d9f08 = _0x37fed5;
                            if (_0x216f60[_0x4d9f08(0x3a2)]) {
                                var _0x3460f3 = _0x2fb0bd(_0x4d9f08(0x2c1))['filter'](function () {
                                    const _0x27a427 = _0x4d9f08;
                                    return _0x2fb0bd(this)[_0x27a427(0x20f)]()[_0x27a427(0x30b)] === 0x0;
                                });
                                _0x3460f3?.['click']();
                            }
                            _0x39ff46 = !![];
                        }, 0x96)) : (_0x39ff46 = ![], _0x2fb0bd(_0x37fed5(0x203))[_0x37fed5(0x30b)] && _0x2fb0bd(_0x37fed5(0x203))[_0x37fed5(0x2a6)](), _0x2fb0bd(_0x37fed5(0x182))[_0x37fed5(0x30b)] && _0x2fb0bd('.IG_DWNEWTAB')[_0x37fed5(0x2a6)](), _0x2fb0bd('.IG_DWSTORY_THUMBNAIL')['length'] && _0x2fb0bd(_0x37fed5(0x2b7))[_0x37fed5(0x2a6)](), _0x2fb0bd('.IG_DWHISTORY')[_0x37fed5(0x30b)] && _0x2fb0bd(_0x37fed5(0x255))[_0x37fed5(0x2a6)](), _0x2fb0bd(_0x37fed5(0x3a7))['length'] && _0x2fb0bd(_0x37fed5(0x3a7))[_0x37fed5(0x2a6)](), _0x2fb0bd(_0x37fed5(0x331))['length'] && _0x2fb0bd('.IG_DWHISTORY_THUMBNAIL')[_0x37fed5(0x2a6)]());
                }
                _0x40054f(0x12c), _0x1f2c87 = new URL(location[_0x37fed5(0x30d)])[_0x37fed5(0x39b)];
            }
        }, _0x53f3c7);
        async function _0x230aae(_0x16dcc0) {
            const _0x1946d9 = _0x1b3a45;
            if (_0x16dcc0) {
                _0x386d4c(!![]);
                let _0x17def5 = new Date()[_0x1946d9(0x18e)](), _0x49fd11 = Math[_0x1946d9(0x285)](_0x17def5 / 0x3e8), _0x414fee = location[_0x1946d9(0x39b)][_0x1946d9(0x305)](/(reels|tagged)\/$/ig, '')['split']('/')[_0x1946d9(0x286)](_0x5b708f => _0x5b708f[_0x1946d9(0x30b)] > 0x0)['at'](-0x1), _0x269f96 = await _0x525bb1(_0x414fee);
                try {
                    let _0x25c90b = await _0x43622d(_0x269f96[_0x1946d9(0x2fd)]['pk']);
                    _0x15b992(_0x25c90b, _0x414fee, _0x1946d9(0x3ce), _0x49fd11, _0x1946d9(0x291));
                } catch (_0x4a37b8) {
                    _0x15b992(_0x269f96[_0x1946d9(0x2fd)][_0x1946d9(0x188)], _0x414fee, _0x1946d9(0x3ce), _0x49fd11, _0x1946d9(0x291));
                }
                _0x386d4c(![]);
            } else {
                if (!_0x2fb0bd(_0x1946d9(0x355))[_0x1946d9(0x30b)]) {
                    let _0x1065ff = setInterval(() => {
                        const _0x11424b = _0x1946d9;
                        if (_0x2fb0bd(_0x11424b(0x355))[_0x11424b(0x30b)]) {
                            clearInterval(_0x1065ff);
                            return;
                        }
                        _0x2fb0bd(_0x11424b(0x2c3))[_0x11424b(0x19b)]()[_0x11424b(0x19b)]()[_0x11424b(0x20a)](_0x11424b(0x33a) + _0x2e373e('DW') + _0x11424b(0x3be) + _0x3a2b6b[_0x11424b(0x20b)] + _0x11424b(0x368)), _0x2fb0bd(_0x11424b(0x2c3))['parent']()[_0x11424b(0x19b)]()['css']('position', _0x11424b(0x370)), _0x2fb0bd(_0x11424b(0x371))[_0x11424b(0x19b)]()[_0x11424b(0x19b)]()['parent']()[_0x11424b(0x20a)](_0x11424b(0x33a) + _0x2e373e('DW') + _0x11424b(0x3be) + _0x3a2b6b[_0x11424b(0x20b)] + _0x11424b(0x368)), _0x2fb0bd('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')[_0x11424b(0x19b)]()[_0x11424b(0x19b)]()[_0x11424b(0x19b)]()[_0x11424b(0x274)](_0x11424b(0x318), _0x11424b(0x370));
                    }, 0x96);
                }
            }
        }
        async function _0x3b4e62(_0x15f5fd, _0x2965cc) {
            const _0x48269b = _0x1b3a45;
            if (_0x15f5fd) {
                let _0x1c98da = new Date()[_0x48269b(0x18e)](), _0x2f14b5 = Math[_0x48269b(0x285)](_0x1c98da / 0x3e8), _0x29313 = location[_0x48269b(0x30d)][_0x48269b(0x1ee)](/\/$/ig, '')[_0x48269b(0x3b1)]('/')['at'](-0x1), _0x15c0ce = _0x2fb0bd('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')['length'] || _0x2fb0bd(_0x48269b(0x33b))[_0x48269b(0x30b)] || _0x2fb0bd(_0x48269b(0x22c))[_0x48269b(0x1fd)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x48269b(0x30b)], _0x320c3a = '', _0x278f37 = 0x0;
                _0x386d4c(!![]);
                if (_0x8f0beb[_0x48269b(0x35f)][_0x29313]) {
                    _0x3bd434('Fetch\x20from\x20memory\x20cache:', _0x29313);
                    let _0x1d14f4 = _0x8f0beb[_0x48269b(0x35f)][_0x29313][_0x48269b(0x270)][_0x48269b(0x3a1)][0x0][_0x48269b(0x28e)]['length'];
                    _0x320c3a = _0x8f0beb[_0x48269b(0x35f)][_0x29313]['data'][_0x48269b(0x3a1)][0x0][_0x48269b(0x1c1)]['username'], _0x278f37 = _0x8f0beb[_0x48269b(0x35f)][_0x29313][_0x48269b(0x270)][_0x48269b(0x3a1)][0x0]['items'][_0x1d14f4 - _0x15c0ce];
                } else {
                    let _0x40e1b7 = await _0x5a9fe6(_0x29313), _0x119767 = _0x40e1b7[_0x48269b(0x270)][_0x48269b(0x3a1)][0x0][_0x48269b(0x28e)][_0x48269b(0x30b)];
                    _0x320c3a = _0x40e1b7[_0x48269b(0x270)][_0x48269b(0x3a1)][0x0][_0x48269b(0x1c1)][_0x48269b(0x3aa)], _0x278f37 = _0x40e1b7[_0x48269b(0x270)][_0x48269b(0x3a1)][0x0][_0x48269b(0x28e)][_0x119767 - _0x15c0ce], _0x8f0beb[_0x48269b(0x35f)][_0x29313] = _0x40e1b7;
                }
                _0x216f60[_0x48269b(0x3ad)] && (_0x2f14b5 = _0x278f37[_0x48269b(0x3c4)]);
                if (_0x216f60[_0x48269b(0x365)] && !_0xb045c3) {
                    let _0x5271a0 = await _0x4e82eb(_0x278f37['id']);
                    _0x5271a0['status'] === 'ok' ? _0x5271a0[_0x48269b(0x28e)][0x0][_0x48269b(0x3b4)] ? _0x2965cc ? _0x579cf7(_0x5271a0['items'][0x0][_0x48269b(0x3b4)][0x0][_0x48269b(0x175)]) : _0x15b992(_0x5271a0[_0x48269b(0x28e)][0x0]['video_versions'][0x0][_0x48269b(0x175)], _0x320c3a, _0x48269b(0x35f), _0x2f14b5, _0x48269b(0x3da), _0x29313) : _0x2965cc ? _0x579cf7(_0x5271a0[_0x48269b(0x28e)][0x0][_0x48269b(0x199)][_0x48269b(0x26a)][0x0][_0x48269b(0x175)]) : _0x15b992(_0x5271a0['items'][0x0][_0x48269b(0x199)]['candidates'][0x0][_0x48269b(0x175)], _0x320c3a, _0x48269b(0x35f), _0x2f14b5, _0x48269b(0x291), _0x29313) : (_0x216f60['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT'] ? (delete _0x8f0beb[_0x48269b(0x35f)][_0x29313], _0xb045c3 = !![], _0x3b4e62(!![], _0x2965cc)) : alert(_0x48269b(0x247) + _0x5271a0[_0x48269b(0x3dc)]), _0x3bd434(_0x5271a0));
                } else
                    _0x278f37[_0x48269b(0x260)] ? _0x2965cc ? _0x579cf7(_0x278f37[_0x48269b(0x341)]['at'](-0x1)[_0x48269b(0x1c8)], _0x320c3a) : _0x15b992(_0x278f37[_0x48269b(0x341)]['at'](-0x1)[_0x48269b(0x1c8)], _0x320c3a, _0x48269b(0x35f), _0x2f14b5, _0x48269b(0x3da), _0x29313) : _0x2965cc ? _0x579cf7(_0x278f37[_0x48269b(0x1dc)]['at'](-0x1)['src'], _0x320c3a) : _0x15b992(_0x278f37[_0x48269b(0x1dc)]['at'](-0x1)['src'], _0x320c3a, 'highlights', _0x2f14b5, 'jpg', _0x29313), _0xb045c3 = ![];
                _0x386d4c(![]);
            } else {
                if (!_0x2fb0bd('.IG_DWHISTORY')[_0x48269b(0x30b)]) {
                    let _0x2cc070 = null;
                    _0x2fb0bd(_0x48269b(0x225))['length'] > 0x0 ? _0x2cc070 = _0x2fb0bd('body\x20>\x20div\x20section:visible._ac0a') : (_0x2cc070 = _0x2fb0bd(_0x48269b(0x2d4)), _0x2cc070[_0x48269b(0x274)](_0x48269b(0x318), _0x48269b(0x370)));
                    if (_0x2cc070[_0x48269b(0x30b)] === 0x0) {
                        let _0x5ef9ae = _0x2fb0bd(_0x48269b(0x37c)), _0x4b72e6 = 0x0;
                        _0x5ef9ae[_0x48269b(0x3d6)](function () {
                            const _0x585aab = _0x48269b;
                            _0x2fb0bd(this)[_0x585aab(0x269)]() > _0x4b72e6 && (_0x4b72e6 = _0x2fb0bd(this)[_0x585aab(0x269)](), _0x2cc070 = _0x2fb0bd(this)[_0x585aab(0x20f)]('div')['first']());
                        });
                    }
                    _0x2cc070 != null && (_0x2cc070[_0x48269b(0x20a)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x2e373e('DW') + _0x48269b(0x3a9) + _0x3a2b6b['DOWNLOAD'] + _0x48269b(0x368)), _0x2cc070[_0x48269b(0x20a)](_0x48269b(0x36d) + _0x2e373e(_0x48269b(0x301)) + _0x48269b(0x362) + _0x3a2b6b['NEW_TAB'] + '</div>'), _0x2cc070['find'](_0x48269b(0x283))[_0x48269b(0x3d6)](function () {
                        const _0x417877 = _0x48269b;
                        _0x2fb0bd(this)['on'](_0x417877(0x3b8), function () {
                            const _0x1f11b5 = _0x417877;
                            !_0x2fb0bd(this)['data'](_0x1f11b5(0x1c7)) && (_0x2cc070[_0x1f11b5(0x1fd)](_0x1f11b5(0x331))[_0x1f11b5(0x30b)] === 0x0 ? (_0x2fb0bd(this)[_0x1f11b5(0x306)](_0x1f11b5(0x29a), !![]), _0x2fb0bd(_0x1f11b5(0x331))[_0x1f11b5(0x2a6)](), _0x3bd434(_0x1f11b5(0x18a))) : (_0x2fb0bd(this)[_0x1f11b5(0x306)](_0x1f11b5(0x29a), !![]), _0x3bd434('(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                        });
                    }));
                }
            }
        }
        async function _0x3b8400(_0x5cc4d1) {
            const _0x172591 = _0x1b3a45;
            if (_0x5cc4d1) {
                let _0x316123 = new Date()[_0x172591(0x18e)](), _0x3195ef = Math[_0x172591(0x285)](_0x316123 / 0x3e8), _0x1115a2 = location[_0x172591(0x30d)]['replace'](/\/$/ig, '')[_0x172591(0x3b1)]('/')['at'](-0x1), _0x46d20b = '', _0x2b11ba = _0x2fb0bd(_0x172591(0x2b6))[_0x172591(0x30b)] || _0x2fb0bd(_0x172591(0x33b))['length'] || _0x2fb0bd(_0x172591(0x22c))['find'](_0x172591(0x205))[_0x172591(0x30b)], _0x2843cb = '';
                _0x386d4c(!![]);
                if (_0x8f0beb[_0x172591(0x35f)][_0x1115a2]) {
                    _0x3bd434(_0x172591(0x25e), _0x1115a2);
                    let _0x7e48c5 = _0x8f0beb['highlights'][_0x1115a2][_0x172591(0x270)][_0x172591(0x3a1)][0x0][_0x172591(0x28e)][_0x172591(0x30b)];
                    _0x46d20b = _0x8f0beb[_0x172591(0x35f)][_0x1115a2][_0x172591(0x270)][_0x172591(0x3a1)][0x0][_0x172591(0x1c1)]['username'], _0x2843cb = _0x8f0beb[_0x172591(0x35f)][_0x1115a2][_0x172591(0x270)][_0x172591(0x3a1)][0x0][_0x172591(0x28e)][_0x7e48c5 - _0x2b11ba];
                } else {
                    let _0x1169da = await _0x5a9fe6(_0x1115a2), _0x28355e = _0x1169da['data']['reels_media'][0x0][_0x172591(0x28e)][_0x172591(0x30b)];
                    _0x46d20b = _0x1169da[_0x172591(0x270)][_0x172591(0x3a1)][0x0][_0x172591(0x1c1)][_0x172591(0x3aa)], _0x2843cb = _0x1169da[_0x172591(0x270)][_0x172591(0x3a1)][0x0][_0x172591(0x28e)][_0x28355e - _0x2b11ba], _0x8f0beb['highlights'][_0x1115a2] = _0x1169da;
                }
                _0x216f60['RENAME_PUBLISH_DATE'] && (_0x3195ef = _0x2843cb[_0x172591(0x3c4)]);
                if (_0x216f60[_0x172591(0x365)] && !_0xb045c3) {
                    let _0x1bd70a = await _0x4e82eb(_0x2843cb['id']);
                    _0x1bd70a[_0x172591(0x34c)] === 'ok' ? _0x15b992(_0x1bd70a['items'][0x0][_0x172591(0x199)][_0x172591(0x26a)][0x0][_0x172591(0x175)], _0x46d20b, _0x172591(0x35f), _0x3195ef, 'jpg', _0x1115a2) : (_0x216f60[_0x172591(0x210)] ? (delete _0x8f0beb[_0x172591(0x35f)][_0x1115a2], _0xb045c3 = !![], _0x3b8400(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x1bd70a[_0x172591(0x3dc)]), _0x3bd434(_0x1bd70a));
                } else
                    _0x15b992(_0x2843cb[_0x172591(0x1dc)]['at'](-0x1)[_0x172591(0x1c8)], _0x46d20b, _0x172591(0x35f), _0x3195ef, _0x172591(0x291), _0x1115a2), _0xb045c3 = ![];
                _0x386d4c(![]);
            } else {
                if (_0x2fb0bd(_0x172591(0x298))[_0x172591(0x30b)]) {
                    if (!_0x2fb0bd(_0x172591(0x331))['length']) {
                        let _0x28ef75 = null;
                        _0x2fb0bd('body\x20>\x20div\x20section._ac0a')['length'] > 0x0 ? _0x28ef75 = _0x2fb0bd('body\x20>\x20div\x20section:visible._ac0a') : (_0x28ef75 = _0x2fb0bd(_0x172591(0x2d4)), _0x28ef75[_0x172591(0x274)]('position', _0x172591(0x370)));
                        if (_0x28ef75[_0x172591(0x30b)] === 0x0) {
                            let _0x8ffe5d = _0x2fb0bd(_0x172591(0x37c)), _0xc7ac77 = 0x0;
                            _0x8ffe5d[_0x172591(0x3d6)](function () {
                                const _0x66b23b = _0x172591;
                                _0x2fb0bd(this)['width']() > _0xc7ac77 && (_0xc7ac77 = _0x2fb0bd(this)['width'](), _0x28ef75 = _0x2fb0bd(this)[_0x66b23b(0x20f)](_0x66b23b(0x27e))['first']());
                            });
                        }
                        _0x28ef75 != null && _0x28ef75[_0x172591(0x20a)](_0x172591(0x273) + _0x2e373e(_0x172591(0x38e)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x3a2b6b[_0x172591(0x25a)] + _0x172591(0x368));
                    }
                } else
                    _0x2fb0bd('.IG_DWHISTORY_THUMBNAIL')[_0x172591(0x2a6)]();
            }
        }
        async function _0x5a3053(_0x1a0cb0, _0x51ab46, _0x3e8fba) {
            const _0x579e8f = _0x1b3a45;
            if (_0x1a0cb0) {
                let _0x94a061 = new Date()[_0x579e8f(0x18e)](), _0x14895e = Math[_0x579e8f(0x285)](_0x94a061 / 0x3e8), _0x18134d = _0x2fb0bd('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x579e8f(0x366)]()[_0x579e8f(0x276)]() || location['pathname'][_0x579e8f(0x3b1)]('/')[_0x579e8f(0x286)](_0x5a69c3 => _0x5a69c3[_0x579e8f(0x30b)] > 0x0)['at'](0x1);
                _0x386d4c(!![]);
                if (_0x216f60['FORCE_RESOURCE_VIA_MEDIA'] && !_0xb045c3) {
                    let _0x332151 = null, _0xddcc67 = await _0x525bb1(_0x18134d), _0x4a72cb = _0xddcc67[_0x579e8f(0x2fd)]['pk'], _0x5a6009 = await _0x197b49(_0x4a72cb), _0x49c49f = location['pathname'][_0x579e8f(0x3b1)]('/')[_0x579e8f(0x286)](_0x4742a1 => _0x4742a1[_0x579e8f(0x30b)] > 0x0 && _0x4742a1[_0x579e8f(0x3ab)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x5a6009[_0x579e8f(0x270)][_0x579e8f(0x3a1)][0x0]['items']['forEach'](_0x508505 => {
                        _0x508505['id'] == _0x49c49f && (_0x332151 = _0x508505['id']);
                    });
                    if (_0x332151 == null) {
                        let _0x3db679 = _0x2fb0bd(_0x579e8f(0x1b0) + _0x18134d + _0x579e8f(0x3ba))[_0x579e8f(0x286)](function () {
                            const _0x2e504e = _0x579e8f;
                            return _0x2fb0bd(this)[_0x2e504e(0x20f)]()[_0x2e504e(0x30b)] === 0x0 && _0x2fb0bd(this)['find'](_0x2e504e(0x1f2))['length'] === 0x0 && _0x2fb0bd(this)[_0x2e504e(0x276)]()?.[_0x2e504e(0x337)]() === _0x18134d?.[_0x2e504e(0x337)]();
                        })['parents'](_0x579e8f(0x3c2))[_0x579e8f(0x286)](function () {
                            const _0x5637fe = _0x579e8f;
                            return _0x2fb0bd(this)[_0x5637fe(0x276)]()?.[_0x5637fe(0x337)]() !== _0x18134d?.['toLowerCase']();
                        })[_0x579e8f(0x286)](function () {
                            const _0x4eae15 = _0x579e8f;
                            return _0x2fb0bd(this)[_0x4eae15(0x20f)]()[_0x4eae15(0x30b)] > 0x1;
                        })[_0x579e8f(0x366)]();
                        _0x3db679[_0x579e8f(0x20f)]()[_0x579e8f(0x286)](function () {
                            const _0x3ac1c5 = _0x579e8f;
                            return _0x2fb0bd(this)[_0x3ac1c5(0x187)]() < 0xa;
                        })[_0x579e8f(0x366)]()[_0x579e8f(0x20f)]()[_0x579e8f(0x3d6)](function (_0x4973a4) {
                            const _0xe6425b = _0x579e8f;
                            _0x2fb0bd(this)[_0xe6425b(0x20f)]()[_0xe6425b(0x30b)] > 0x0 && (_0x332151 = _0x5a6009[_0xe6425b(0x270)][_0xe6425b(0x3a1)][0x0][_0xe6425b(0x28e)][_0x4973a4]['id']);
                        });
                    }
                    _0x332151 == null && (_0x2fb0bd(_0x579e8f(0x1a5))['each'](function (_0x3ee7ac) {
                        const _0x285406 = _0x579e8f;
                        _0x2fb0bd(this)[_0x285406(0x242)](_0x285406(0x33f)) && (_0x2fb0bd(this)[_0x285406(0x20f)]()[_0x285406(0x30b)] > 0x0 && (_0x332151 = _0x5a6009[_0x285406(0x270)][_0x285406(0x3a1)][0x0][_0x285406(0x28e)][_0x3ee7ac]['id']));
                    }), _0x2fb0bd(_0x579e8f(0x1d3))['each'](function (_0x5af2e2) {
                        const _0x4231a3 = _0x579e8f;
                        _0x2fb0bd(this)[_0x4231a3(0x20f)]()['hasClass'](_0x4231a3(0x23b)) && (_0x332151 = _0x5a6009[_0x4231a3(0x270)]['reels_media'][0x0][_0x4231a3(0x28e)][_0x5af2e2]['id']);
                    }));
                    _0x332151 == null && (_0x332151 = location[_0x579e8f(0x39b)][_0x579e8f(0x3b1)]('/')[_0x579e8f(0x286)](_0x3123a0 => _0x3123a0['length'] > 0x0 && _0x3123a0[_0x579e8f(0x3ab)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0xcd2fbd = await _0x4e82eb(_0x332151);
                    _0x216f60['RENAME_PUBLISH_DATE'] && (_0x14895e = _0xcd2fbd[_0x579e8f(0x28e)][0x0][_0x579e8f(0x1d5)]);
                    _0xcd2fbd[_0x579e8f(0x34c)] === 'ok' ? _0xcd2fbd[_0x579e8f(0x28e)][0x0]['video_versions'] ? _0x3e8fba ? _0x579cf7(_0xcd2fbd['items'][0x0][_0x579e8f(0x3b4)][0x0][_0x579e8f(0x175)]) : _0x15b992(_0xcd2fbd['items'][0x0][_0x579e8f(0x3b4)][0x0]['url'], _0x18134d, _0x579e8f(0x1ff), _0x14895e, _0x579e8f(0x3da), _0x332151) : _0x3e8fba ? _0x579cf7(_0xcd2fbd['items'][0x0][_0x579e8f(0x199)][_0x579e8f(0x26a)][0x0][_0x579e8f(0x175)]) : _0x15b992(_0xcd2fbd[_0x579e8f(0x28e)][0x0][_0x579e8f(0x199)][_0x579e8f(0x26a)][0x0][_0x579e8f(0x175)], _0x18134d, _0x579e8f(0x1ff), _0x14895e, _0x579e8f(0x291), _0x332151) : (_0x216f60[_0x579e8f(0x210)] ? (_0xb045c3 = !![], _0x5a3053(_0x1a0cb0, _0x51ab46, _0x3e8fba)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0xcd2fbd[_0x579e8f(0x3dc)]), _0x3bd434(_0xcd2fbd));
                    _0x386d4c(![]);
                    return;
                }
                if (_0x2fb0bd(_0x579e8f(0x2aa))[_0x579e8f(0x30b)] > 0x0) {
                    let _0x596694 = 'mp4', _0x19fe0d = '', _0x4c4242 = location[_0x579e8f(0x39b)][_0x579e8f(0x1ee)](/\/$/ig, '')[_0x579e8f(0x3b1)]('/')['at'](-0x1), _0x3d2117 = null;
                    if (_0x8f0beb['stories'][_0x18134d] && !_0x51ab46) {
                        _0x3bd434(_0x579e8f(0x25e), _0x18134d), _0x8f0beb[_0x579e8f(0x1ff)][_0x18134d][_0x579e8f(0x270)]['reels_media'][0x0][_0x579e8f(0x28e)][_0x579e8f(0x354)](_0x4e53d5 => {
                            const _0x1fe7ea = _0x579e8f;
                            _0x4e53d5['id'] == _0x4c4242 && (_0x19fe0d = _0x4e53d5[_0x1fe7ea(0x341)][0x0][_0x1fe7ea(0x1c8)], _0x216f60[_0x1fe7ea(0x3ad)] && (_0x14895e = _0x4e53d5[_0x1fe7ea(0x3c4)], _0x3d2117 = _0x4e53d5['id']));
                        });
                        if (_0x19fe0d[_0x579e8f(0x30b)] == 0x0) {
                            _0x3bd434(_0x579e8f(0x263), _0x18134d), _0x5a3053(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x1dcc74 = await _0x525bb1(_0x18134d), _0x47938a = _0x1dcc74[_0x579e8f(0x2fd)]['pk'], _0x2b9223 = await _0x197b49(_0x47938a);
                        _0x2b9223[_0x579e8f(0x270)][_0x579e8f(0x3a1)][0x0][_0x579e8f(0x28e)]['forEach'](_0x73ac7d => {
                            const _0xee67bd = _0x579e8f;
                            _0x73ac7d['id'] == _0x4c4242 && (_0x19fe0d = _0x73ac7d[_0xee67bd(0x341)][0x0][_0xee67bd(0x1c8)], _0x216f60[_0xee67bd(0x3ad)] && (_0x14895e = _0x73ac7d[_0xee67bd(0x3c4)], _0x3d2117 = _0x73ac7d['id']));
                        });
                        if (_0x19fe0d['length'] == 0x0) {
                            let _0x214740 = _0x2fb0bd(_0x579e8f(0x1b0) + _0x18134d + _0x579e8f(0x3ba))[_0x579e8f(0x286)](function () {
                                const _0x703091 = _0x579e8f;
                                return _0x2fb0bd(this)[_0x703091(0x20f)]()[_0x703091(0x30b)] === 0x0 && _0x2fb0bd(this)[_0x703091(0x1fd)](_0x703091(0x1f2))[_0x703091(0x30b)] === 0x0 && _0x2fb0bd(this)['text']()?.[_0x703091(0x337)]() === _0x18134d?.['toLowerCase']();
                            })[_0x579e8f(0x325)]('div:not([class]):not([style])')[_0x579e8f(0x286)](function () {
                                const _0x3b1b6b = _0x579e8f;
                                return _0x2fb0bd(this)[_0x3b1b6b(0x276)]()?.[_0x3b1b6b(0x337)]() !== _0x18134d?.[_0x3b1b6b(0x337)]();
                            })[_0x579e8f(0x286)](function () {
                                return _0x2fb0bd(this)['children']()['length'] > 0x1;
                            })[_0x579e8f(0x366)]();
                            _0x214740[_0x579e8f(0x20f)]()[_0x579e8f(0x286)](function () {
                                const _0x3e7b37 = _0x579e8f;
                                return _0x2fb0bd(this)[_0x3e7b37(0x187)]() < 0xa;
                            })['first']()[_0x579e8f(0x20f)]()[_0x579e8f(0x3d6)](function (_0x57fba8) {
                                const _0x2b49f0 = _0x579e8f;
                                _0x2fb0bd(this)['children']()[_0x2b49f0(0x30b)] > 0x0 && (_0x19fe0d = _0x2b9223[_0x2b49f0(0x270)]['reels_media'][0x0][_0x2b49f0(0x28e)][_0x57fba8]['video_resources'][0x0][_0x2b49f0(0x1c8)], _0x216f60[_0x2b49f0(0x3ad)] && (_0x14895e = _0x2b9223[_0x2b49f0(0x270)][_0x2b49f0(0x3a1)][0x0][_0x2b49f0(0x28e)][_0x57fba8][_0x2b49f0(0x3c4)], _0x3d2117 = _0x2b9223[_0x2b49f0(0x270)][_0x2b49f0(0x3a1)][0x0]['items'][_0x57fba8]['id']));
                            }), _0x19fe0d[_0x579e8f(0x30b)] == 0x0 && (_0x2fb0bd(_0x579e8f(0x1a5))[_0x579e8f(0x3d6)](function (_0x226a21) {
                                const _0x3f105e = _0x579e8f;
                                _0x2fb0bd(this)[_0x3f105e(0x242)](_0x3f105e(0x33f)) && (_0x2fb0bd(this)[_0x3f105e(0x20f)]()[_0x3f105e(0x30b)] > 0x0 && (_0x19fe0d = _0x2b9223[_0x3f105e(0x270)][_0x3f105e(0x3a1)][0x0]['items'][_0x226a21]['video_resources'][0x0][_0x3f105e(0x1c8)], _0x216f60[_0x3f105e(0x3ad)] && (_0x14895e = _0x2b9223['data'][_0x3f105e(0x3a1)][0x0][_0x3f105e(0x28e)][_0x226a21][_0x3f105e(0x3c4)], _0x3d2117 = _0x2b9223[_0x3f105e(0x270)][_0x3f105e(0x3a1)][0x0][_0x3f105e(0x28e)][_0x226a21]['id'])));
                            }), _0x2fb0bd('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x579e8f(0x3d6)](function (_0x19e365) {
                                const _0x6bef50 = _0x579e8f;
                                _0x2fb0bd(this)['children']()[_0x6bef50(0x242)]('_ac3q') && (_0x19fe0d = _0x2b9223[_0x6bef50(0x270)]['reels_media'][0x0]['items'][_0x19e365]['video_resources'][0x0][_0x6bef50(0x1c8)], _0x216f60['RENAME_PUBLISH_DATE'] && (_0x14895e = _0x2b9223[_0x6bef50(0x270)][_0x6bef50(0x3a1)][0x0][_0x6bef50(0x28e)][_0x19e365][_0x6bef50(0x3c4)], _0x3d2117 = _0x2b9223[_0x6bef50(0x270)][_0x6bef50(0x3a1)][0x0]['items'][_0x19e365]['id']));
                            }));
                        }
                        _0x8f0beb[_0x579e8f(0x1ff)][_0x18134d] = _0x2b9223;
                    }
                    _0x19fe0d[_0x579e8f(0x30b)] == 0x0 ? alert(_0x2e373e(_0x579e8f(0x388))) : _0x3e8fba ? _0x579cf7(_0x19fe0d) : _0x15b992(_0x19fe0d, _0x18134d, _0x579e8f(0x1ff), _0x14895e, _0x596694, _0x3d2117);
                } else {
                    let _0x115ed7 = _0x2fb0bd(_0x579e8f(0x3e2))[_0x579e8f(0x306)](_0x579e8f(0x35a))?.[_0x579e8f(0x3b1)](',')[0x0]?.[_0x579e8f(0x3b1)]('\x20')[0x0], _0x53cc41 = _0x115ed7 ? _0x115ed7 : _0x2fb0bd(_0x579e8f(0x3e2))['filter'](function () {
                            const _0x2e6f67 = _0x579e8f;
                            return _0x2fb0bd(this)[_0x2e6f67(0x325)]('a')['length'] === 0x0 && _0x2fb0bd(this)[_0x2e6f67(0x269)]() === _0x2fb0bd(this)['parent']()[_0x2e6f67(0x269)]();
                        })['attr'](_0x579e8f(0x1c8));
                    if (!_0x53cc41) {
                        let _0x25e210 = _0x2fb0bd(_0x579e8f(0x34e));
                        _0x53cc41 = _0x25e210[_0x579e8f(0x306)](_0x579e8f(0x35a)) ? _0x25e210[_0x579e8f(0x306)]('srcset')?.[_0x579e8f(0x3b1)](',')[0x0]?.[_0x579e8f(0x3b1)]('\x20')[0x0] : _0x25e210[_0x579e8f(0x306)](_0x579e8f(0x1c8));
                    }
                    _0x216f60[_0x579e8f(0x3ad)] && (_0x14895e = new Date(_0x2fb0bd('body\x20>\x20div\x20section:visible\x20time[datetime][class]')['first']()[_0x579e8f(0x306)](_0x579e8f(0x284)))[_0x579e8f(0x18e)]());
                    let _0x4a9588 = _0x53cc41, _0x4033dd = _0x579e8f(0x291);
                    _0x3e8fba ? _0x579cf7(_0x4a9588) : _0x15b992(_0x4a9588, _0x18134d, _0x579e8f(0x1ff), _0x14895e, _0x4033dd, _0x428886(_0x4a9588) ?? '');
                }
                _0xb045c3 = ![], _0x386d4c(![]);
            } else {
                let _0x5db13d = _0x579e8f(0x282);
                if (!_0x2fb0bd(_0x579e8f(0x203))[_0x579e8f(0x30b)]) {
                    _0x8f0beb[_0x579e8f(0x1ff)] = {};
                    let _0x3e972e = null;
                    _0x2fb0bd(_0x579e8f(0x225))[_0x579e8f(0x30b)] > 0x0 ? _0x3e972e = _0x2fb0bd(_0x579e8f(0x287)) : (_0x3e972e = _0x2fb0bd(_0x579e8f(0x2d4)), _0x3e972e['css'](_0x579e8f(0x318), _0x579e8f(0x370)));
                    _0x3e972e['length'] === 0x0 && (_0x3e972e = _0x2fb0bd(_0x579e8f(0x3ca))[_0x579e8f(0x19b)]()['parent']()[_0x579e8f(0x19b)]()[_0x579e8f(0x1fd)](_0x579e8f(0x31f)), _0x3e972e[_0x579e8f(0x274)](_0x579e8f(0x318), _0x579e8f(0x370)));
                    _0x3e972e[_0x579e8f(0x30b)] === 0x0 && (_0x3e972e = _0x2fb0bd('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')['parent']()['parent']()[_0x579e8f(0x19b)]()[_0x579e8f(0x1fd)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x3e972e[_0x579e8f(0x274)](_0x579e8f(0x318), _0x579e8f(0x370)));
                    if (_0x3e972e['length'] === 0x0) {
                        let _0x209d2f = _0x2fb0bd(_0x579e8f(0x37c)), _0x2b8c17 = 0x0;
                        _0x209d2f['each'](function () {
                            const _0x436d9e = _0x579e8f;
                            _0x2fb0bd(this)[_0x436d9e(0x269)]() > _0x2b8c17 && (_0x2b8c17 = _0x2fb0bd(this)[_0x436d9e(0x269)](), _0x3e972e = _0x2fb0bd(this)[_0x436d9e(0x20f)](_0x436d9e(0x27e))[_0x436d9e(0x366)]());
                        });
                    }
                    _0x3e972e != null && (_0x3e972e[_0x579e8f(0x366)]()[_0x579e8f(0x274)]('position', _0x579e8f(0x370)), _0x3e972e['first']()[_0x579e8f(0x20a)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x2e373e('DW') + '\x22\x20class=\x22IG_DWSTORY\x22>' + _0x3a2b6b[_0x579e8f(0x20b)] + _0x579e8f(0x368)), _0x3e972e[_0x579e8f(0x366)]()[_0x579e8f(0x20a)](_0x579e8f(0x36d) + _0x2e373e(_0x579e8f(0x301)) + _0x579e8f(0x183) + _0x3a2b6b['NEW_TAB'] + _0x579e8f(0x368)), _0x3e972e[_0x579e8f(0x1fd)](_0x579e8f(0x283))[_0x579e8f(0x3d6)](function () {
                        const _0x2879e2 = _0x579e8f;
                        _0x2fb0bd(this)['on'](_0x2879e2(0x3b8), function () {
                            const _0x592227 = _0x2879e2;
                            !_0x2fb0bd(this)['data'](_0x592227(0x1c7)) && (_0x3e972e['find'](_0x592227(0x2b7))['length'] === 0x0 ? (_0x2fb0bd(this)[_0x592227(0x306)](_0x592227(0x29a), !![]), _0x2fb0bd('.IG_DWSTORY_THUMBNAIL')[_0x592227(0x2a6)](), _0x3bd434(_0x592227(0x2a1))) : (_0x2fb0bd(this)['attr'](_0x592227(0x29a), !![]), _0x3bd434('(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                        });
                    }));
                }
            }
        }
        async function _0x4e372b(_0x4ef4f1, _0x5ef24e) {
            const _0x274b1b = _0x1b3a45;
            if (_0x4ef4f1) {
                let _0x60f99f = new Date()[_0x274b1b(0x18e)](), _0x4c3a5b = Math['floor'](_0x60f99f / 0x3e8), _0x340be7 = _0x274b1b(0x291), _0x1acb9d = _0x2fb0bd(_0x274b1b(0x302))['first']()[_0x274b1b(0x276)]() || location['pathname'][_0x274b1b(0x3b1)]('/')['at'](0x2), _0xee9eb2 = _0x274b1b(0x201), _0x3f2b7d = location['pathname'][_0x274b1b(0x1ee)](/\/$/ig, '')[_0x274b1b(0x3b1)]('/')['at'](-0x1), _0x467a3a = '', _0x578154 = null;
                _0x386d4c(!![]);
                if (_0x216f60[_0x274b1b(0x365)] && !_0xb045c3) {
                    let _0x2ff62b = await _0x525bb1(_0x1acb9d), _0x37bd59 = _0x2ff62b[_0x274b1b(0x2fd)]['pk'], _0x323770 = await _0x197b49(_0x37bd59), _0x3b146b = location[_0x274b1b(0x39b)][_0x274b1b(0x3b1)]('/')[_0x274b1b(0x286)](_0x5f3222 => _0x5f3222['length'] > 0x0 && _0x5f3222[_0x274b1b(0x3ab)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x323770[_0x274b1b(0x270)][_0x274b1b(0x3a1)][0x0][_0x274b1b(0x28e)][_0x274b1b(0x354)](_0x3a99d7 => {
                        _0x3a99d7['id'] == _0x3b146b && (_0x578154 = _0x3a99d7['id']);
                    });
                    if (_0x578154 == null) {
                        let _0x511513 = _0x2fb0bd('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x1acb9d + _0x274b1b(0x3ba))[_0x274b1b(0x286)](function () {
                            const _0x5aaa61 = _0x274b1b;
                            return _0x2fb0bd(this)[_0x5aaa61(0x20f)]()[_0x5aaa61(0x30b)] === 0x0 && _0x2fb0bd(this)[_0x5aaa61(0x1fd)]('svg')['length'] === 0x0 && _0x2fb0bd(this)['text']()?.['toLowerCase']() === _0x1acb9d?.[_0x5aaa61(0x337)]();
                        })[_0x274b1b(0x325)](_0x274b1b(0x3c2))[_0x274b1b(0x286)](function () {
                            const _0x382f42 = _0x274b1b;
                            return _0x2fb0bd(this)[_0x382f42(0x276)]()?.['toLowerCase']() !== _0x1acb9d?.[_0x382f42(0x337)]();
                        })[_0x274b1b(0x286)](function () {
                            const _0x3de9ae = _0x274b1b;
                            return _0x2fb0bd(this)[_0x3de9ae(0x20f)]()[_0x3de9ae(0x30b)] > 0x1;
                        })[_0x274b1b(0x366)]();
                        _0x511513[_0x274b1b(0x20f)]()[_0x274b1b(0x286)](function () {
                            const _0x9382b6 = _0x274b1b;
                            return _0x2fb0bd(this)[_0x9382b6(0x187)]() < 0xa;
                        })[_0x274b1b(0x366)]()['children']()['each'](function (_0x16292e) {
                            const _0x15819e = _0x274b1b;
                            _0x2fb0bd(this)['children']()[_0x15819e(0x30b)] > 0x0 && (_0x578154 = _0x323770[_0x15819e(0x270)]['reels_media'][0x0]['items'][_0x16292e]['id']);
                        });
                    }
                    _0x578154 == null && (_0x2fb0bd(_0x274b1b(0x1a5))['each'](function (_0x3cf024) {
                        const _0xf133a1 = _0x274b1b;
                        _0x2fb0bd(this)[_0xf133a1(0x242)](_0xf133a1(0x33f)) && (_0x2fb0bd(this)['children']()[_0xf133a1(0x30b)] > 0x0 && (_0x578154 = _0x323770[_0xf133a1(0x270)][_0xf133a1(0x3a1)][0x0]['items'][_0x3cf024]['id']));
                    }), _0x2fb0bd(_0x274b1b(0x1d3))[_0x274b1b(0x3d6)](function (_0x4d6a8c) {
                        const _0x398ccb = _0x274b1b;
                        _0x2fb0bd(this)[_0x398ccb(0x20f)]()[_0x398ccb(0x242)](_0x398ccb(0x23b)) && (_0x578154 = _0x323770[_0x398ccb(0x270)]['reels_media'][0x0]['items'][_0x4d6a8c]['id']);
                    }));
                    _0x578154 == null && (_0x578154 = location[_0x274b1b(0x39b)]['split']('/')['filter'](_0x4dc5c3 => _0x4dc5c3[_0x274b1b(0x30b)] > 0x0 && _0x4dc5c3['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0xba3f3c = await _0x4e82eb(_0x578154);
                    _0x216f60[_0x274b1b(0x3ad)] && (_0x4c3a5b = _0xba3f3c[_0x274b1b(0x28e)][0x0][_0x274b1b(0x1d5)]);
                    _0xba3f3c[_0x274b1b(0x34c)] === 'ok' ? _0x15b992(_0xba3f3c[_0x274b1b(0x28e)][0x0][_0x274b1b(0x199)][_0x274b1b(0x26a)][0x0][_0x274b1b(0x175)], _0x1acb9d, _0x274b1b(0x1ff), _0x4c3a5b, _0x274b1b(0x291), _0x578154) : (_0x216f60[_0x274b1b(0x210)] ? (_0xb045c3 = !![], _0x4e372b(!![], _0x5ef24e)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0xba3f3c[_0x274b1b(0x3dc)]), _0x3bd434(_0xba3f3c));
                    _0x386d4c(![]);
                    return;
                }
                if (_0x8f0beb['stories'][_0x1acb9d] && !_0x5ef24e) {
                    _0x3bd434('Fetch\x20from\x20memory\x20cache:', _0x1acb9d), _0x8f0beb[_0x274b1b(0x1ff)][_0x1acb9d][_0x274b1b(0x270)][_0x274b1b(0x3a1)][0x0][_0x274b1b(0x28e)][_0x274b1b(0x354)](_0x49fe59 => {
                        const _0x3595c2 = _0x274b1b;
                        _0x49fe59['id'] == _0x3f2b7d && (_0x467a3a = _0x49fe59[_0x3595c2(0x1b1)], _0x216f60['RENAME_PUBLISH_DATE'] && (_0x4c3a5b = _0x49fe59['taken_at_timestamp'], _0x578154 = _0x49fe59['id']));
                    });
                    if (_0x467a3a[_0x274b1b(0x30b)] == 0x0) {
                        _0x3bd434(_0x274b1b(0x263), _0x1acb9d), _0x4e372b(!![], !![]);
                        return;
                    }
                } else {
                    let _0x2cfad0 = await _0x525bb1(_0x1acb9d), _0x1c454b = _0x2cfad0[_0x274b1b(0x2fd)]['pk'], _0x310470 = await _0x197b49(_0x1c454b);
                    _0x310470['data'][_0x274b1b(0x3a1)][0x0][_0x274b1b(0x28e)]['forEach'](_0x38a5e0 => {
                        const _0x5a3c69 = _0x274b1b;
                        _0x38a5e0['id'] == _0x3f2b7d && (_0x467a3a = _0x38a5e0[_0x5a3c69(0x1b1)], _0x216f60[_0x5a3c69(0x3ad)] && (_0x4c3a5b = _0x38a5e0[_0x5a3c69(0x3c4)], _0x578154 = _0x38a5e0['id']));
                    });
                    if (_0x467a3a[_0x274b1b(0x30b)] == 0x0) {
                        let _0x4b0fcc = _0x2fb0bd(_0x274b1b(0x1b0) + _0x1acb9d + _0x274b1b(0x3ba))[_0x274b1b(0x286)](function () {
                            const _0x4e05f5 = _0x274b1b;
                            return _0x2fb0bd(this)['children']()[_0x4e05f5(0x30b)] === 0x0 && _0x2fb0bd(this)[_0x4e05f5(0x1fd)]('svg')[_0x4e05f5(0x30b)] === 0x0 && _0x2fb0bd(this)[_0x4e05f5(0x276)]()?.[_0x4e05f5(0x337)]() === _0x1acb9d?.['toLowerCase']();
                        })[_0x274b1b(0x325)](_0x274b1b(0x3c2))[_0x274b1b(0x286)](function () {
                            const _0x2a9f6d = _0x274b1b;
                            return _0x2fb0bd(this)['text']()?.[_0x2a9f6d(0x337)]() !== _0x1acb9d?.[_0x2a9f6d(0x337)]();
                        })[_0x274b1b(0x286)](function () {
                            const _0x6545ea = _0x274b1b;
                            return _0x2fb0bd(this)[_0x6545ea(0x20f)]()[_0x6545ea(0x30b)] > 0x1;
                        })[_0x274b1b(0x366)]();
                        _0x4b0fcc['children']()[_0x274b1b(0x286)](function () {
                            const _0x34ccea = _0x274b1b;
                            return _0x2fb0bd(this)[_0x34ccea(0x187)]() < 0xa;
                        })['first']()[_0x274b1b(0x20f)]()[_0x274b1b(0x3d6)](function (_0x26d9bc) {
                            const _0x302b0d = _0x274b1b;
                            _0x2fb0bd(this)[_0x302b0d(0x20f)]()[_0x302b0d(0x30b)] > 0x0 && (_0x467a3a = _0x310470[_0x302b0d(0x270)][_0x302b0d(0x3a1)][0x0]['items'][_0x26d9bc][_0x302b0d(0x1b1)], _0x216f60[_0x302b0d(0x3ad)] && (_0x4c3a5b = _0x310470[_0x302b0d(0x270)][_0x302b0d(0x3a1)][0x0][_0x302b0d(0x28e)][_0x26d9bc][_0x302b0d(0x3c4)], _0x578154 = _0x310470[_0x302b0d(0x270)][_0x302b0d(0x3a1)][0x0][_0x302b0d(0x28e)][_0x26d9bc]['id']));
                        }), _0x467a3a['length'] == 0x0 && (_0x2fb0bd('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x274b1b(0x3d6)](function (_0x43a247) {
                            const _0x4fde93 = _0x274b1b;
                            _0x2fb0bd(this)['hasClass'](_0x4fde93(0x33f)) && (_0x2fb0bd(this)[_0x4fde93(0x20f)]()['length'] > 0x0 && (_0x467a3a = _0x310470[_0x4fde93(0x270)]['reels_media'][0x0]['items'][_0x43a247][_0x4fde93(0x1b1)], _0x216f60['RENAME_PUBLISH_DATE'] && (_0x4c3a5b = _0x310470[_0x4fde93(0x270)]['reels_media'][0x0][_0x4fde93(0x28e)][_0x43a247][_0x4fde93(0x3c4)], _0x578154 = _0x310470[_0x4fde93(0x270)][_0x4fde93(0x3a1)][0x0][_0x4fde93(0x28e)][_0x43a247]['id'])));
                        }), _0x2fb0bd(_0x274b1b(0x1d3))[_0x274b1b(0x3d6)](function (_0x3a611a) {
                            const _0x32418f = _0x274b1b;
                            _0x2fb0bd(this)['children']()['hasClass'](_0x32418f(0x23b)) && (_0x467a3a = _0x310470[_0x32418f(0x270)][_0x32418f(0x3a1)][0x0]['items'][_0x3a611a][_0x32418f(0x1b1)], _0x216f60['RENAME_PUBLISH_DATE'] && (_0x4c3a5b = _0x310470[_0x32418f(0x270)]['reels_media'][0x0][_0x32418f(0x28e)][_0x3a611a][_0x32418f(0x3c4)], _0x578154 = _0x310470[_0x32418f(0x270)][_0x32418f(0x3a1)][0x0][_0x32418f(0x28e)][_0x3a611a]['id']));
                        }));
                    }
                }
                _0x15b992(_0x467a3a, _0x1acb9d, 'thumbnail', _0x4c3a5b, _0x340be7, _0x578154), _0xb045c3 = ![], _0x386d4c(![]);
            } else {
                if (_0x2fb0bd(_0x274b1b(0x268))[_0x274b1b(0x19b)]()['find'](_0x274b1b(0x1cb))[_0x274b1b(0x30b)]) {
                    let _0x1226d8 = null;
                    _0x2fb0bd(_0x274b1b(0x225))[_0x274b1b(0x30b)] > 0x0 ? _0x1226d8 = _0x2fb0bd('body\x20>\x20div\x20section:visible._ac0a') : (_0x1226d8 = _0x2fb0bd('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x1226d8[_0x274b1b(0x274)](_0x274b1b(0x318), _0x274b1b(0x370)));
                    _0x1226d8[_0x274b1b(0x30b)] === 0x0 && (_0x1226d8 = _0x2fb0bd(_0x274b1b(0x3ca))[_0x274b1b(0x19b)]()['parent']()[_0x274b1b(0x19b)]()['find'](_0x274b1b(0x31f)), _0x1226d8[_0x274b1b(0x274)](_0x274b1b(0x318), _0x274b1b(0x370)));
                    _0x1226d8[_0x274b1b(0x30b)] === 0x0 && (_0x1226d8 = _0x2fb0bd(_0x274b1b(0x3ca))[_0x274b1b(0x19b)]()['parent']()[_0x274b1b(0x19b)]()[_0x274b1b(0x1fd)](_0x274b1b(0x1df)), _0x1226d8['css'](_0x274b1b(0x318), _0x274b1b(0x370)));
                    if (_0x1226d8[_0x274b1b(0x30b)] === 0x0) {
                        let _0x4b0bb5 = _0x2fb0bd(_0x274b1b(0x37c)), _0x53d4e5 = 0x0;
                        _0x4b0bb5[_0x274b1b(0x3d6)](function () {
                            const _0x5e2c60 = _0x274b1b;
                            _0x2fb0bd(this)['width']() > _0x53d4e5 && (_0x53d4e5 = _0x2fb0bd(this)[_0x5e2c60(0x269)](), _0x1226d8 = _0x2fb0bd(this)[_0x5e2c60(0x20f)](_0x5e2c60(0x27e))[_0x5e2c60(0x366)]());
                        });
                    }
                    _0x1226d8 != null && (_0x1226d8[_0x274b1b(0x366)]()[_0x274b1b(0x274)](_0x274b1b(0x318), _0x274b1b(0x370)), _0x1226d8[_0x274b1b(0x366)]()[_0x274b1b(0x20a)](_0x274b1b(0x273) + _0x2e373e(_0x274b1b(0x38e)) + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x3a2b6b[_0x274b1b(0x25a)] + '</div>'));
                }
            }
        }
        async function _0x2f64bd(_0x207140, _0x3b7670, _0x108d59) {
            const _0x36628d = _0x1b3a45;
            if (_0x207140) {
                _0x386d4c(!![]);
                let _0x3a0b88 = location[_0x36628d(0x30d)][_0x36628d(0x3b1)]('?')['at'](0x0)['split'](_0x36628d(0x334))['at'](-0x1)['replaceAll']('/', ''), _0x59c5b5 = await _0x89f435(_0x3a0b88), _0x5d0ccb = _0x59c5b5[_0x36628d(0x270)], _0x16572c = new Date()[_0x36628d(0x18e)]();
                _0x216f60[_0x36628d(0x3ad)] && (_0x59c5b5[_0x36628d(0x38a)] === _0x36628d(0x2fe) ? _0x16572c = _0x5d0ccb[_0x36628d(0x1b8)][_0x36628d(0x3c4)] : _0x16572c = _0x5d0ccb[_0x36628d(0x1d5)]);
                if (_0x59c5b5[_0x36628d(0x38a)] === _0x36628d(0x2fe)) {
                    if (_0x3b7670 && _0x5d0ccb[_0x36628d(0x1b8)][_0x36628d(0x260)]) {
                        if (_0x108d59)
                            _0x579cf7(_0x5d0ccb[_0x36628d(0x1b8)][_0x36628d(0x36a)]);
                        else {
                            let _0x21f11b = _0x36628d(0x3da);
                            _0x15b992(_0x5d0ccb[_0x36628d(0x1b8)]['video_url'], _0x5d0ccb[_0x36628d(0x1b8)]['owner']['username'], _0x36628d(0x1d7), _0x16572c, _0x21f11b, _0x3a0b88);
                        }
                    } else {
                        if (_0x108d59)
                            _0x579cf7(_0x5d0ccb[_0x36628d(0x1b8)]['display_resources']['at'](-0x1)[_0x36628d(0x1c8)]);
                        else {
                            let _0x242640 = _0x36628d(0x291);
                            _0x15b992(_0x5d0ccb[_0x36628d(0x1b8)]['display_resources']['at'](-0x1)[_0x36628d(0x1c8)], _0x5d0ccb[_0x36628d(0x1b8)]['owner'][_0x36628d(0x3aa)], _0x36628d(0x1d7), _0x16572c, _0x242640, _0x3a0b88);
                        }
                    }
                } else {
                    if (_0x3b7670 && _0x5d0ccb[_0x36628d(0x3b4)] != null) {
                        if (_0x108d59)
                            _0x579cf7(_0x5d0ccb[_0x36628d(0x3b4)][0x0][_0x36628d(0x175)]);
                        else {
                            let _0x50a142 = _0x36628d(0x3da);
                            _0x15b992(_0x5d0ccb[_0x36628d(0x3b4)][0x0][_0x36628d(0x175)], _0x5d0ccb[_0x36628d(0x1c1)][_0x36628d(0x3aa)], _0x36628d(0x1d7), _0x16572c, _0x50a142, _0x3a0b88);
                        }
                    } else {
                        if (_0x108d59)
                            _0x579cf7(_0x5d0ccb[_0x36628d(0x199)][_0x36628d(0x26a)][0x0][_0x36628d(0x175)]);
                        else {
                            let _0x5bf479 = _0x36628d(0x291);
                            _0x15b992(_0x5d0ccb[_0x36628d(0x199)][_0x36628d(0x26a)][0x0]['url'], _0x5d0ccb['owner']['username'], 'reels', _0x16572c, _0x5bf479, _0x3a0b88);
                        }
                    }
                }
                _0x386d4c(![]);
            } else
                var _0x409178 = setInterval(() => {
                    const _0xf21d4 = _0x36628d;
                    _0x2fb0bd('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')[_0xf21d4(0x30b)] > 0x0 && (clearInterval(_0x409178), _0x216f60['SCROLL_BUTTON'] && (_0x2fb0bd(_0xf21d4(0x36e))[_0xf21d4(0x2a6)](), _0x2fb0bd(_0xf21d4(0x24f))[_0xf21d4(0x20a)](_0xf21d4(0x1af)), _0x2fb0bd(_0xf21d4(0x26d))['append'](_0xf21d4(0x243)), _0x2fb0bd('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0xf21d4(0x20a)](_0xf21d4(0x393)), _0x2fb0bd(_0xf21d4(0x29e))['on'](_0xf21d4(0x2eb), function () {
                        const _0x359878 = _0xf21d4;
                        _0x2fb0bd(_0x359878(0x264))[0x0][_0x359878(0x279)]({
                            'top': -0x1e,
                            'behavior': 'smooth'
                        });
                    }), _0x2fb0bd('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0xf21d4(0x2eb), function () {
                        const _0x323212 = _0xf21d4;
                        _0x2fb0bd('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x323212(0x279)]({
                            'top': 0x1e,
                            'behavior': _0x323212(0x3c6)
                        });
                    })), _0x2fb0bd(_0xf21d4(0x1ca))[_0xf21d4(0x20f)](_0xf21d4(0x27e))[_0xf21d4(0x3d6)](function () {
                        const _0x153725 = _0xf21d4;
                        if (_0x2fb0bd(this)[_0x153725(0x20f)]()[_0x153725(0x30b)] > 0x0) {
                            if (!_0x2fb0bd(this)[_0x153725(0x20f)]()[_0x153725(0x1fd)](_0x153725(0x293))[_0x153725(0x30b)]) {
                                var _0x5e30da = _0x2fb0bd(this);
                                _0x2fb0bd(this)[_0x153725(0x20f)]()['css'](_0x153725(0x318), _0x153725(0x370)), _0x2fb0bd(this)[_0x153725(0x20f)]()['append'](_0x153725(0x33a) + _0x2e373e('DW') + _0x153725(0x1fa) + _0x3a2b6b[_0x153725(0x20b)] + '</div>'), _0x2fb0bd(this)[_0x153725(0x20f)]()['append'](_0x153725(0x36d) + _0x2e373e(_0x153725(0x301)) + _0x153725(0x1c6) + _0x3a2b6b[_0x153725(0x301)] + _0x153725(0x368)), _0x2fb0bd(this)[_0x153725(0x20f)]()[_0x153725(0x20a)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x2e373e(_0x153725(0x38e)) + '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>' + _0x3a2b6b['THUMBNAIL'] + _0x153725(0x368));
                                _0x216f60[_0x153725(0x19f)] && _0x2fb0bd(this)[_0x153725(0x1fd)](_0x153725(0x38b))['each'](function () {
                                    _0x2fb0bd(this)['on']('ended', function () {
                                        const _0x16d439 = a0_0x200b;
                                        if (!_0x2fb0bd(this)['data'](_0x16d439(0x1a7))) {
                                            let _0x5187fb = _0x2fb0bd(this)[_0x16d439(0x262)]()[_0x16d439(0x1fd)](_0x16d439(0x398))[_0x16d439(0x325)](_0x16d439(0x224));
                                            _0x5187fb[_0x16d439(0x30b)] > 0x0 ? (_0x2fb0bd(this)[_0x16d439(0x306)](_0x16d439(0x2b9), !![]), _0x5187fb[_0x16d439(0x2eb)](), _0x3bd434(_0x16d439(0x35d))) : (_0x2fb0bd(this)[_0x16d439(0x306)](_0x16d439(0x2b9), !![]), _0x2fb0bd(this)['parent']()['find'](_0x16d439(0x1be))[_0x16d439(0x33e)](_0x16d439(0x1d0)), this[_0x16d439(0x2a4)](), _0x3bd434(_0x16d439(0x2b4)));
                                        }
                                    });
                                });
                                _0x216f60[_0x153725(0x2ec)] && _0x2fb0bd(this)[_0x153725(0x1fd)](_0x153725(0x38b))[_0x153725(0x3d6)](function () {
                                    const _0x377514 = _0x153725;
                                    if (!_0x2fb0bd(this)[_0x377514(0x270)](_0x377514(0x364))) {
                                        let _0x2c4bc5 = _0x2fb0bd(this);
                                        _0x3bd434(_0x377514(0x297)), this[_0x377514(0x232)] = _0x4f0b72, _0x2fb0bd(this)['on'](_0x377514(0x3dd), function () {
                                            this['volume'] = _0x4f0b72;
                                        }), _0x2fb0bd(this)['on'](_0x377514(0x219), function (_0x168c79) {
                                            const _0x4f62eb = _0x377514;
                                            _0x168c79[_0x4f62eb(0x1fb)](), _0x2c4bc5[_0x4f62eb(0x274)](_0x4f62eb(0x3bd), '-1'), _0x2c4bc5[_0x4f62eb(0x33e)](_0x4f62eb(0x364));
                                        }), _0x2fb0bd(this)[_0x377514(0x19b)]()[_0x377514(0x1fd)]('video\x20+\x20div\x20div[role=\x22button\x22]')['filter'](function () {
                                            const _0x5e0774 = _0x377514;
                                            return _0x2fb0bd(this)[_0x5e0774(0x19b)](_0x5e0774(0x190))[_0x5e0774(0x30b)] > 0x0 && _0x2fb0bd(this)[_0x5e0774(0x274)](_0x5e0774(0x257)) === _0x5e0774(0x303) && _0x2fb0bd(this)[_0x5e0774(0x306)](_0x5e0774(0x1d0)) != null;
                                        })[_0x377514(0x366)]()['on'](_0x377514(0x219), function (_0x3f0635) {
                                            const _0x43dde1 = _0x377514;
                                            _0x3f0635['preventDefault'](), _0x2c4bc5['css']('z-index', '2'), _0x2c4bc5[_0x43dde1(0x306)](_0x43dde1(0x364), !![]);
                                        }), _0x2fb0bd(this)['on'](_0x377514(0x2a0), function () {
                                            const _0x322196 = _0x377514;
                                            let _0x496435 = _0x2fb0bd(this)['parent']()['find']('video\x20+\x20div\x20>\x20div')[_0x322196(0x1fd)](_0x322196(0x394))['filter'](function (_0xb68327) {
                                                const _0x4ee587 = _0x322196;
                                                return _0x2fb0bd(this)['width']() <= 0x40 && _0x2fb0bd(this)[_0x4ee587(0x187)]() <= 0x40 && _0x2fb0bd(this)[_0x4ee587(0x1fd)](_0x4ee587(0x26c))[_0x4ee587(0x30b)] > 0x0;
                                            });
                                            var _0xd9c20e = _0x496435[_0x322196(0x1fd)](_0x322196(0x327))[_0x322196(0x30b)] === 0x0;
                                            this[_0x322196(0x3ac)] != _0xd9c20e && (this[_0x322196(0x232)] = _0x4f0b72, _0x496435?.[_0x322196(0x2eb)]()), _0x2fb0bd(this)[_0x322196(0x306)]('data-completed') && (_0x4f0b72 = this['volume'], GM_setValue(_0x322196(0x2d5), this['volume'])), this[_0x322196(0x232)] == _0x4f0b72 && _0x2fb0bd(this)[_0x322196(0x306)]('data-completed', !![]);
                                        }), _0x2fb0bd(this)[_0x377514(0x274)]('position', _0x377514(0x2cd)), _0x2fb0bd(this)[_0x377514(0x274)]('z-index', '2'), _0x2fb0bd(this)[_0x377514(0x306)](_0x377514(0x176), !![]), _0x2fb0bd(this)[_0x377514(0x306)](_0x377514(0x364), !![]);
                                    }
                                });
                                var _0x291c11 = _0x5e30da[_0x153725(0x1fd)](_0x153725(0x38b)), _0x5332bc = _0x2fb0bd(this)[_0x153725(0x1fd)]('div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div')[_0x153725(0x366)]();
                                _0x3300c3(_0x291c11, _0x5332bc, _0x153725(0x299));
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x428886(_0x2ca4c3) {
            const _0x1f315f = _0x1b3a45;
            let _0x41c54f = new URL(_0x2ca4c3), _0x599b72 = _0x41c54f?.[_0x1f315f(0x2d6)]?.['get'](_0x1f315f(0x2c7))?.[_0x1f315f(0x3b1)]('.')['at'](0x0);
            return _0x599b72 ? atob(_0x599b72) : null;
        }
        function _0x5a9fe6(_0x14ea37) {
            return new Promise((_0x57b9b5, _0x26a3c8) => {
                const _0x7d34cf = a0_0x200b;
                let _0x2e3e7b = _0x7d34cf(0x25b) + _0x14ea37 + _0x7d34cf(0x206);
                GM_xmlhttpRequest({
                    'method': _0x7d34cf(0x1c4),
                    'url': _0x2e3e7b,
                    'onload': function (_0xfaa9d1) {
                        const _0x4d0dad = _0x7d34cf;
                        try {
                            let _0x13c993 = JSON[_0x4d0dad(0x1cc)](_0xfaa9d1['response']);
                            _0x57b9b5(_0x13c993);
                        } catch (_0x167ab1) {
                            _0x3bd434(_0x4d0dad(0x2f4), _0x4d0dad(0x278), _0x167ab1[_0x4d0dad(0x3dc)]), _0x26a3c8(_0x167ab1);
                        }
                    },
                    'onerror': function (_0x5617a7) {
                        const _0x1e6bf6 = _0x7d34cf;
                        _0x3bd434(_0x1e6bf6(0x2f4), _0x1e6bf6(0x278), _0x5617a7), _0x26a3c8(_0x5617a7);
                    }
                });
            });
        }
        function _0x197b49(_0x4753be) {
            return new Promise((_0x944d1, _0x22aed3) => {
                const _0xa55891 = a0_0x200b;
                let _0x190d8c = _0xa55891(0x21f) + _0x4753be + _0xa55891(0x206);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x190d8c,
                    'onload': function (_0x2a4bc0) {
                        const _0x5d9279 = _0xa55891;
                        try {
                            let _0x2df59f = JSON[_0x5d9279(0x1cc)](_0x2a4bc0[_0x5d9279(0x17f)]);
                            _0x3bd434(_0x5d9279(0x2f1), _0x2df59f), _0x944d1(_0x2df59f);
                        } catch (_0x43706e) {
                            _0x3bd434('getStories()', 'reject', _0x43706e[_0x5d9279(0x3dc)]), _0x22aed3(_0x43706e);
                        }
                    },
                    'onerror': function (_0x46af2c) {
                        const _0x2e822e = _0xa55891;
                        _0x3bd434(_0x2e822e(0x2f1), _0x2e822e(0x278), _0x46af2c), _0x22aed3(_0x46af2c);
                    }
                });
            });
        }
        function _0x525bb1(_0x4a9e0a) {
            return new Promise((_0x550139, _0x4b3938) => {
                const _0x1ee6f7 = a0_0x200b;
                let _0x3bd4da = _0x1ee6f7(0x367) + _0x4a9e0a;
                GM_xmlhttpRequest({
                    'method': _0x1ee6f7(0x1c4),
                    'url': _0x3bd4da,
                    'onload': function (_0x1bfdc4) {
                        const _0x1f10e2 = _0x1ee6f7;
                        let _0x3db507 = JSON[_0x1f10e2(0x1cc)](_0x1bfdc4[_0x1f10e2(0x17f)]), _0x51dd1c = null;
                        _0x3db507['users'][_0x1f10e2(0x354)](_0x2596cc => {
                            const _0x28db6f = _0x1f10e2;
                            _0x2596cc[_0x28db6f(0x2fd)][_0x28db6f(0x3aa)]?.['toLowerCase']() === _0x4a9e0a?.[_0x28db6f(0x337)]() && (_0x51dd1c = _0x2596cc);
                        }), _0x51dd1c != null ? (_0x3bd434(_0x1f10e2(0x348), _0x51dd1c), _0x550139(_0x51dd1c)) : _0x35407b(_0x4a9e0a)[_0x1f10e2(0x3af)](_0x26d8f8 => {
                            _0x550139(_0x26d8f8);
                        })[_0x1f10e2(0x1f8)](_0x3b31c1 => {
                            const _0x1b2cce = _0x1f10e2;
                            alert(_0x1b2cce(0x3d2));
                        });
                    },
                    'onerror': function (_0x214d61) {
                        _0x3bd434('getUserId()', 'reject', _0x214d61), _0x4b3938(_0x214d61);
                    }
                });
            });
        }
        function _0x35407b(_0x2a5144) {
            return new Promise((_0x1f47ed, _0x5021ae) => {
                const _0x3d1e1b = a0_0x200b;
                let _0x882bfa = _0x3d1e1b(0x346) + _0x2a5144;
                GM_xmlhttpRequest({
                    'method': _0x3d1e1b(0x1c4),
                    'url': _0x882bfa,
                    'headers': { 'X-IG-App-ID': _0x3b95cc() },
                    'onload': function (_0x2b88dc) {
                        const _0x2f19e6 = _0x3d1e1b;
                        try {
                            let _0x2e08f0 = JSON[_0x2f19e6(0x1cc)](_0x2b88dc['response']), _0x39a20b = _0x2e08f0?.['data']?.['user'];
                            if (_0x39a20b != null) {
                                let _0x9c64f0 = _0x2e08f0?.[_0x2f19e6(0x270)];
                                _0x9c64f0[_0x2f19e6(0x2fd)]['pk'] = _0x9c64f0['user']['id'], _0x3bd434(_0x2f19e6(0x1f9), _0x2e08f0), _0x1f47ed(_0x9c64f0);
                            } else
                                _0x3bd434(_0x2f19e6(0x1f9), 'reject', 'undefined'), _0x5021ae(_0x2f19e6(0x267));
                        } catch (_0x378569) {
                            _0x3bd434('getUserIdWithAgent()', 'reject', _0x378569[_0x2f19e6(0x3dc)]), _0x5021ae(_0x378569);
                        }
                    },
                    'onerror': function (_0x54eb4c) {
                        const _0x363405 = _0x3d1e1b;
                        _0x3bd434(_0x363405(0x1f9), _0x363405(0x278), _0x54eb4c), _0x5021ae(_0x54eb4c);
                    }
                });
            });
        }
        function _0x43622d(_0x1be40f) {
            return new Promise((_0x17b16c, _0x16ad46) => {
                const _0x2998ba = a0_0x200b;
                let _0x4613ba = _0x2998ba(0x343) + _0x1be40f + '/info/';
                GM_xmlhttpRequest({
                    'method': _0x2998ba(0x1c4),
                    'url': _0x4613ba,
                    'headers': { 'User-Agent': _0x2998ba(0x2f9) },
                    'onload': function (_0xe0508e) {
                        const _0x417282 = _0x2998ba;
                        try {
                            let _0x258420 = JSON[_0x417282(0x1cc)](_0xe0508e['response']);
                            _0x258420['status'] !== 'ok' ? (_0x3bd434('getUserHighSizeProfile()', 'reject', _0x258420), _0x16ad46(_0x417282(0x228))) : (_0x3bd434(_0x417282(0x335), _0x258420), _0x17b16c(_0x258420[_0x417282(0x2fd)][_0x417282(0x1bf)]?.[_0x417282(0x175)]));
                        } catch (_0x478da7) {
                            _0x3bd434(_0x417282(0x335), _0x417282(0x278), _0x478da7), _0x16ad46(_0x478da7);
                        }
                    },
                    'onerror': function (_0x392886) {
                        const _0x4f9c44 = _0x2998ba;
                        _0x3bd434(_0x4f9c44(0x335), 'reject', _0x392886), _0x16ad46(_0x392886);
                    }
                });
            });
        }
        function _0x5cfd97(_0x4d01f9) {
            return new Promise((_0x18a1a3, _0x2ce294) => {
                const _0xa63c26 = a0_0x200b;
                if (!_0x4d01f9)
                    _0x2ce294(_0xa63c26(0x223));
                let _0xec9c25 = _0x4d01f9, _0x486a32 = _0xa63c26(0x215) + _0xec9c25 + _0xa63c26(0x28d);
                GM_xmlhttpRequest({
                    'method': _0xa63c26(0x1c4),
                    'url': _0x486a32,
                    'onload': function (_0x3dfa31) {
                        const _0x25926e = _0xa63c26;
                        try {
                            let _0x493030 = JSON[_0x25926e(0x1cc)](_0x3dfa31[_0x25926e(0x17f)]);
                            _0x3bd434(_0x25926e(0x266), _0x493030), _0x18a1a3(_0x493030[_0x25926e(0x270)][_0x25926e(0x1b8)][_0x25926e(0x1c1)][_0x25926e(0x3aa)]);
                        } catch (_0x1b70a7) {
                            _0x3bd434(_0x25926e(0x266), 'reject', _0x1b70a7['message']), _0x2ce294(_0x1b70a7);
                        }
                    },
                    'onerror': function (_0x4c42a2) {
                        const _0x22716b = _0xa63c26;
                        _0x3bd434(_0x22716b(0x266), _0x22716b(0x278), _0x4c42a2), _0x2ce294(_0x4c42a2);
                    }
                });
            });
        }
        function _0x89f435(_0x329c84) {
            return new Promise((_0xa89232, _0x3d531a) => {
                const _0x3b7b7f = a0_0x200b;
                if (!_0x329c84)
                    _0x3d531a('NOPATH');
                let _0x599ac4 = _0x329c84, _0x50fe15 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x599ac4 + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x3b7b7f(0x1c4),
                    'url': _0x50fe15,
                    'headers': { 'User-Agent': _0x3b7b7f(0x2f9) },
                    'onload': function (_0x1bebeb) {
                        const _0x3b149f = _0x3b7b7f;
                        try {
                            let _0x612e53 = JSON['parse'](_0x1bebeb[_0x3b149f(0x17f)]);
                            _0x3bd434(_0x612e53), _0x612e53[_0x3b149f(0x34c)] === _0x3b149f(0x2fb) ? (_0x3bd434('Request\x20with:', 'getBlobMediaWithQuery()', _0x599ac4), _0x3a9bfd(_0x599ac4)[_0x3b149f(0x3af)](_0x38e888 => {
                                const _0x276f67 = _0x3b149f;
                                _0xa89232({
                                    'type': _0x276f67(0x24d),
                                    'data': _0x38e888[_0x276f67(0x213)]['items'][0x0]
                                });
                            })['catch'](_0x3fe6dd => {
                                _0x3d531a(_0x3fe6dd);
                            })) : _0xa89232({
                                'type': 'query_hash',
                                'data': _0x612e53[_0x3b149f(0x270)]
                            });
                        } catch (_0x5587ac) {
                            _0x3bd434(_0x3b149f(0x234), _0x3b149f(0x278), _0x5587ac['message']), _0x3d531a(_0x5587ac);
                        }
                    },
                    'onerror': function (_0x261983) {
                        const _0x289a1f = _0x3b7b7f;
                        _0x3bd434(_0x289a1f(0x234), _0x289a1f(0x278), _0x261983), _0x3d531a(_0x261983);
                    }
                });
            });
        }
        function _0x3a9bfd(_0x28dff3) {
            return new Promise((_0xf606e0, _0x412501) => {
                const _0x49e6c4 = a0_0x200b;
                if (!_0x28dff3)
                    _0x412501(_0x49e6c4(0x223));
                let _0x395e0f = _0x28dff3, _0x109fa9 = 'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22' + _0x395e0f + _0x49e6c4(0x2c8);
                GM_xmlhttpRequest({
                    'method': _0x49e6c4(0x1c4),
                    'url': _0x109fa9,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x3b95cc()
                    },
                    'onload': function (_0x37c82e) {
                        const _0x283cfa = _0x49e6c4;
                        try {
                            let _0x3cecb6 = JSON['parse'](_0x37c82e[_0x283cfa(0x17f)]);
                            _0x3bd434(_0x3cecb6), _0x3cecb6[_0x283cfa(0x34c)] === _0x283cfa(0x2fb) ? (alert(_0x283cfa(0x179) + _0x3cecb6['message'] + ':\x20' + _0x3cecb6[_0x283cfa(0x1e6)]), _0x3bd434('Request\x20failed\x20with\x20API\x20response\x20' + _0x3cecb6[_0x283cfa(0x3dc)] + ':\x20' + _0x3cecb6[_0x283cfa(0x1e6)]), _0x412501(_0x37c82e)) : (_0x3bd434(_0x283cfa(0x1d4), _0x3cecb6[_0x283cfa(0x270)]), _0xf606e0(_0x3cecb6['data']));
                        } catch (_0x1f002e) {
                            _0x3bd434('getBlobMediaWithQueryID()', _0x283cfa(0x278), _0x1f002e[_0x283cfa(0x3dc)]), _0x412501(_0x1f002e);
                        }
                    },
                    'onerror': function (_0x21bb71) {
                        const _0x3a3fa2 = _0x49e6c4;
                        _0x3bd434(_0x3a3fa2(0x1d4), 'reject', _0x21bb71), _0x412501(_0x21bb71);
                    }
                });
            });
        }
        function _0x150e5c(_0x493e09, _0x862a15) {
            const _0x585d1d = _0x1b3a45;
            _0x862a15 === !![] && (_0x3bd434(_0x585d1d(0x1ed), _0x585d1d(0x23d)), _0x2fb0bd(_0x585d1d(0x2a9))[_0x585d1d(0x286)](function () {
                const _0x1d6365 = _0x585d1d;
                return _0x2fb0bd(this)['find'](_0x1d6365(0x323))[_0x1d6365(0x30b)] === 0x0;
            })[_0x585d1d(0x33e)](_0x585d1d(0x391)));
            if (_0x493e09 == ![]) {
                const _0x31a5f7 = 0x64;
                let _0x11537b = 0x0;
                var _0xb1f666 = setInterval(() => {
                    const _0x142f3b = _0x585d1d;
                    (_0x11537b > _0x31a5f7 || _0x2fb0bd(_0x142f3b(0x2ca))['length'] > 0x0) && (clearInterval(_0xb1f666), _0x11537b > _0x31a5f7 && console['warn'](_0x142f3b(0x231), _0x142f3b(0x381))), _0x3bd434('onReadyMyDW()\x20Timer', _0x142f3b(0x227)), _0x5dd596(), _0x11537b++;
                }, 0x32);
            } else
                _0x5dd596();
        }
        function _0x3b95cc() {
            const _0x4e8101 = _0x1b3a45;
            let _0x5c22c0 = null;
            return _0x2fb0bd(_0x4e8101(0x384))[_0x4e8101(0x3d6)](function () {
                const _0xd308e1 = _0x4e8101, _0x584e64 = /"APP_ID":"([0-9]+)"/ig, _0x4d6503 = _0x2fb0bd(this)[_0xd308e1(0x276)]()[_0xd308e1(0x3ab)](_0x584e64);
                _0x4d6503 != null && _0x5c22c0 == null && (_0x5c22c0 = [..._0x2fb0bd(this)[_0xd308e1(0x276)]()[_0xd308e1(0x2b5)](_0x584e64)]);
            }), _0x5c22c0 ? _0x5c22c0['at'](0x0)['at'](-0x1) : null;
        }
        function _0x386d4c(_0x5f2dbd) {
            const _0x325dbb = _0x1b3a45;
            _0x5f2dbd ? (_0x2fb0bd(_0x325dbb(0x315))[_0x325dbb(0x1d9)](_0x325dbb(0x239)), _0x2fb0bd('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x325dbb(0x274)](_0x325dbb(0x3bd), _0x325dbb(0x339))) : (_0x2fb0bd(_0x325dbb(0x315))['addClass'](_0x325dbb(0x239)), _0x2fb0bd(_0x325dbb(0x315))[_0x325dbb(0x274)](_0x325dbb(0x3bd), ''));
        }
        function _0x4e82eb(_0x15e0e2) {
            return new Promise((_0x6ea733, _0x477385) => {
                const _0x5728a4 = a0_0x200b;
                let _0x480238 = _0x5728a4(0x2b8) + _0x15e0e2 + _0x5728a4(0x207);
                if (_0x15e0e2 == null) {
                    alert(_0x5728a4(0x3a3)), _0x3bd434(_0x5728a4(0x21c), 'reject', _0x5728a4(0x3a3)), _0x386d4c(![]), _0x477385(-0x1);
                    return;
                }
                if (_0x3b95cc() == null) {
                    alert(_0x5728a4(0x338)), _0x3bd434(_0x5728a4(0x21c), _0x5728a4(0x278), 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x386d4c(![]), _0x477385(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x480238,
                    'headers': {
                        'User-Agent': window[_0x5728a4(0x2d3)][_0x5728a4(0x2c6)],
                        'Accept': _0x5728a4(0x3d4),
                        'X-IG-App-ID': _0x3b95cc()
                    },
                    'onload': function (_0x1b9912) {
                        const _0x20f7a9 = _0x5728a4;
                        if (_0x1b9912[_0x20f7a9(0x3cc)] == _0x480238) {
                            let _0x399db5 = JSON[_0x20f7a9(0x1cc)](_0x1b9912[_0x20f7a9(0x17f)]);
                            _0x3bd434(_0x20f7a9(0x21c), _0x399db5), _0x6ea733(_0x399db5);
                        } else {
                            let _0x861371 = new URL(_0x1b9912[_0x20f7a9(0x3cc)]);
                            _0x861371[_0x20f7a9(0x39b)]['startsWith'](_0x20f7a9(0x357)) ? (_0x3bd434(_0x20f7a9(0x21c), 'reject', 'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.'), alert(_0x20f7a9(0x22a))) : (_0x3bd434(_0x20f7a9(0x21c), _0x20f7a9(0x278), _0x20f7a9(0x3d3) + _0x1b9912['finalUrl'] + '\x22'), alert(_0x20f7a9(0x3d3) + _0x1b9912['finalUrl'] + '\x22')), _0x386d4c(![]), _0x477385(-0x1);
                        }
                    },
                    'onerror': function (_0x33f2a8) {
                        const _0x42957e = _0x5728a4;
                        _0x3bd434(_0x42957e(0x21c), _0x42957e(0x278), _0x33f2a8), _0x6ea733(_0x33f2a8);
                    }
                });
            });
        }
        function _0x4aa7bd(_0x3fc955) {
            const _0x5d0408 = _0x1b3a45;
            var _0x493fd7 = 0x0, _0x53c12d = _0x3fc955['find'](_0x5d0408(0x22f));
            return (_0x53c12d == null || !_0x53c12d[_0x5d0408(0x242)]('_acnb')) && (_0x53c12d = _0x3fc955[_0x5d0408(0x1fd)](_0x5d0408(0x307))['eq'](0x0)[_0x5d0408(0x20f)](_0x5d0408(0x27e))), _0x53c12d[_0x5d0408(0x286)](_0x5d0408(0x2f0))[_0x5d0408(0x3d6)](function (_0x5083fd) {
                const _0x261feb = _0x5d0408;
                _0x2fb0bd(this)[_0x261feb(0x242)]('_acnf') && (_0x493fd7 = _0x5083fd);
            }), _0x493fd7;
        }
        function _0x151572(_0x3deecf) {
            const _0x4ec78c = _0x1b3a45;
            _0x216f60['DISABLE_VIDEO_LOOPING'] && _0x3deecf[_0x4ec78c(0x1fd)](_0x4ec78c(0x38b))[_0x4ec78c(0x3d6)](function () {
                const _0xbbee5c = _0x4ec78c;
                _0x2fb0bd(this)['on'](_0xbbee5c(0x1f1), function () {
                    const _0x94d23e = _0xbbee5c;
                    !_0x2fb0bd(this)[_0x94d23e(0x270)](_0x94d23e(0x1a7)) && (_0x2fb0bd(this)['attr'](_0x94d23e(0x2b9), !![]), this['pause'](), _0x3bd434(_0x94d23e(0x191)));
                });
            });
            _0x216f60[_0x4ec78c(0x2d1)] && _0x3deecf['find'](_0x4ec78c(0x38b))[_0x4ec78c(0x3d6)](function () {
                const _0x34d99f = _0x4ec78c;
                _0x2fb0bd(this)['on'](_0x34d99f(0x376), function () {
                    const _0x2d4906 = _0x34d99f;
                    !_0x2fb0bd(this)[_0x2d4906(0x270)]('modify') && (_0x2fb0bd(this)['attr'](_0x2d4906(0x2ae), !![]), this['volume'] = _0x4f0b72, _0x3bd434(_0x2d4906(0x1c3)));
                });
            });
            _0x216f60[_0x4ec78c(0x2ec)] && _0x3deecf['find']('video')['each'](function () {
                const _0x501ca2 = _0x4ec78c;
                if (!_0x2fb0bd(this)[_0x501ca2(0x270)](_0x501ca2(0x364))) {
                    let _0x1de7da = _0x2fb0bd(this);
                    _0x3bd434(_0x501ca2(0x395)), this[_0x501ca2(0x232)] = _0x4f0b72, _0x2fb0bd(this)['on'](_0x501ca2(0x3dd), function () {
                        const _0x14a8e7 = _0x501ca2;
                        this[_0x14a8e7(0x232)] = _0x4f0b72;
                    }), _0x2fb0bd(this)['on']('contextmenu', function (_0x5407e2) {
                        const _0x414895 = _0x501ca2;
                        _0x5407e2[_0x414895(0x1fb)](), _0x1de7da[_0x414895(0x274)](_0x414895(0x3bd), '-1'), _0x1de7da[_0x414895(0x33e)](_0x414895(0x364));
                    }), _0x2fb0bd(this)[_0x501ca2(0x19b)]()[_0x501ca2(0x1fd)](_0x501ca2(0x2df))[_0x501ca2(0x366)]()['on'](_0x501ca2(0x219), function (_0x3a0583) {
                        const _0x53da69 = _0x501ca2;
                        _0x3a0583[_0x53da69(0x1fb)](), _0x1de7da[_0x53da69(0x274)]('z-index', '2'), _0x1de7da[_0x53da69(0x306)](_0x53da69(0x364), !![]);
                    }), _0x2fb0bd(this)['on']('volumechange', function () {
                        const _0x208e74 = _0x501ca2;
                        let _0x2bf67a = _0x2fb0bd(this)[_0x208e74(0x19b)]()['find'](_0x208e74(0x2df))[_0x208e74(0x1fd)](_0x208e74(0x394))['filter'](function (_0x28d7cf) {
                            const _0x1cb332 = _0x208e74;
                            return _0x2fb0bd(this)[_0x1cb332(0x269)]() <= 0x40 && _0x2fb0bd(this)['height']() <= 0x40 && _0x2fb0bd(this)[_0x1cb332(0x1fd)](_0x1cb332(0x26c))[_0x1cb332(0x30b)] > 0x0;
                        });
                        var _0x24e3cc = _0x2bf67a[_0x208e74(0x1fd)](_0x208e74(0x327))['length'] === 0x0;
                        this[_0x208e74(0x3ac)] != _0x24e3cc && (this[_0x208e74(0x232)] = _0x4f0b72, _0x2bf67a?.[_0x208e74(0x2eb)]()), _0x2fb0bd(this)[_0x208e74(0x306)](_0x208e74(0x2bb)) && (_0x4f0b72 = this[_0x208e74(0x232)], GM_setValue('G_VIDEO_VOLUME', this[_0x208e74(0x232)])), this[_0x208e74(0x232)] == _0x4f0b72 && _0x2fb0bd(this)[_0x208e74(0x306)](_0x208e74(0x2bb), !![]);
                    }), _0x2fb0bd(this)[_0x501ca2(0x274)](_0x501ca2(0x318), _0x501ca2(0x2cd)), _0x2fb0bd(this)['css'](_0x501ca2(0x3bd), '2'), _0x2fb0bd(this)[_0x501ca2(0x306)]('data-controls', !![]), _0x2fb0bd(this)[_0x501ca2(0x306)](_0x501ca2(0x364), !![]);
                }
            });
            var _0x11fa30 = _0x3deecf[_0x4ec78c(0x1fd)](_0x4ec78c(0x38b)), _0xfc7a18 = _0x3deecf['find'](_0x4ec78c(0x2df))[_0x4ec78c(0x366)]();
            _0x3300c3(_0x11fa30, _0xfc7a18, _0x4ec78c(0x1aa), _0x4ec78c(0x31d));
        }
        ;
        function _0x5dd596() {
            const _0x169c51 = _0x1b3a45;
            _0x2fb0bd(_0x169c51(0x372))['map'](function (_0x1ca3c5) {
                const _0x1e5513 = _0x169c51;
                return _0x2fb0bd(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x2fb0bd(this)[_0x1e5513(0x19b)]()['parent']()['parent']()[_0x1e5513(0x19b)]()[0x0] : this;
            })[_0x169c51(0x286)](function () {
                const _0x4339f6 = _0x169c51;
                return _0x2fb0bd(this)[_0x4339f6(0x187)]() > 0x0 && _0x2fb0bd(this)[_0x4339f6(0x269)]() > 0x0;
            })['each'](function (_0x30afea) {
                const _0x592c7d = _0x169c51;
                if (!_0x2fb0bd(this)[_0x592c7d(0x306)](_0x592c7d(0x391)) && !_0x2fb0bd(this)[_0x592c7d(0x242)]('x1iyjqo2') && !_0x2fb0bd(this)[_0x592c7d(0x20f)](_0x592c7d(0x1cd))?.[_0x592c7d(0x242)]('x1iyjqo2') && _0x2fb0bd(this)['parents'](_0x592c7d(0x21a))[_0x592c7d(0x30b)] === 0x0) {
                    _0x3bd434(_0x592c7d(0x1eb), _0x2fb0bd(this));
                    var _0x2b7c50 = 0xf, _0x468c4b = 0xf, _0x1fb822 = _0x2fb0bd(this), _0x443972 = this[_0x592c7d(0x290)];
                    if (_0x443972 === _0x592c7d(0x2c9) && _0x30afea != 0x0)
                        return;
                    const _0x40441a = _0x1fb822[_0x592c7d(0x20f)](_0x592c7d(0x27e))['children'](_0x592c7d(0x27e));
                    if (_0x40441a['length'] === 0x0)
                        return;
                    _0x3bd434(_0x592c7d(0x22b), _0x40441a);
                    if (_0x1fb822[_0x592c7d(0x1fd)](_0x592c7d(0x3b3))['length'] > 0x0) {
                        _0x1fb822[_0x592c7d(0x1fd)]('._acay\x20+\x20.x24i39r')['length'] > 0x0 && _0x1fb822['find'](_0x592c7d(0x361))[_0x592c7d(0x274)](_0x592c7d(0x310), _0x592c7d(0x32b));
                        const _0x5b1015 = _0x1fb822[_0x592c7d(0x1fd)](_0x592c7d(0x3b3))['first']()[_0x592c7d(0x19b)]()[0x0];
                        var _0x5226c9 = new MutationObserver(function (_0x4daff0, _0x42dc76) {
                            const _0x380041 = _0x592c7d;
                            _0x1fb822[_0x380041(0x1fd)](_0x380041(0x361))['css'](_0x380041(0x310), _0x380041(0x32b));
                        });
                        _0x5226c9[_0x592c7d(0x244)](_0x5b1015, { 'childList': !![] });
                    }
                    const _0x20c986 = _0x592c7d(0x33a) + _0x2e373e('DW') + _0x592c7d(0x202) + _0x2b7c50 + 'px;top:' + _0x468c4b + _0x592c7d(0x172) + _0x3a2b6b['DOWNLOAD'] + '</div>', _0x222323 = _0x592c7d(0x36d) + _0x2e373e('NEW_TAB') + _0x592c7d(0x1e0) + (_0x2b7c50 + 0x23) + _0x592c7d(0x220) + _0x468c4b + 'px;\x22>' + _0x3a2b6b['NEW_TAB'] + _0x592c7d(0x368), _0x265550 = _0x592c7d(0x273) + _0x2e373e('THUMBNAIL_INTRO') + _0x592c7d(0x1ef) + (_0x2b7c50 + 0x46) + _0x592c7d(0x220) + _0x468c4b + _0x592c7d(0x172) + _0x3a2b6b[_0x592c7d(0x25a)] + '</div>';
                    _0x40441a['eq'](_0x443972 === _0x592c7d(0x2c9) ? 0x0 : _0x40441a[_0x592c7d(0x30b)] - 0x2)[_0x592c7d(0x20a)](_0x20c986), _0x40441a['eq'](_0x443972 === _0x592c7d(0x2c9) ? 0x0 : _0x40441a[_0x592c7d(0x30b)] - 0x2)[_0x592c7d(0x20a)](_0x222323), setTimeout(() => {
                        const _0x4971ba = _0x592c7d;
                        if (_0x40441a['eq'](_0x443972 === _0x4971ba(0x2c9) ? 0x0 : _0x40441a[_0x4971ba(0x30b)] - 0x2)['find'](_0x4971ba(0x241))[_0x4971ba(0x30b)] === 0x0)
                            _0x40441a[_0x4971ba(0x1fd)]('video')[_0x4971ba(0x30b)] > 0x0 && _0x40441a['eq'](_0x443972 === _0x4971ba(0x2c9) ? 0x0 : _0x40441a[_0x4971ba(0x30b)] - 0x2)[_0x4971ba(0x20a)](_0x265550);
                        else {
                            const _0x45620c = (_0x5a25a0, _0x482c76) => {
                                    const _0xc12172 = _0x4971ba;
                                    _0x5a25a0[_0xc12172(0x354)](_0xc2595e => {
                                        const _0x50da7b = _0xc12172;
                                        if (_0xc2595e[_0x50da7b(0x317)]) {
                                            var _0xc8efe0 = _0x2fb0bd(_0xc2595e[_0x50da7b(0x197)]);
                                            _0xc8efe0['find']('video')['length'] > 0x0 ? (_0x40441a['eq'](_0x443972 === _0x50da7b(0x2c9) ? 0x0 : _0x40441a[_0x50da7b(0x30b)] - 0x2)[_0x50da7b(0x20a)](_0x265550), _0x151572(_0x1fb822)) : _0x40441a['find'](_0x50da7b(0x349))?.['remove']();
                                        }
                                    });
                                }, _0x1ac5d2 = new IntersectionObserver(_0x45620c, {
                                    'root': _0x1fb822['find'](_0x4971ba(0x2d8))[_0x4971ba(0x366)]()[_0x4971ba(0x19b)]()[_0x4971ba(0x19b)]()[_0x4971ba(0x19b)]()[0x0],
                                    'rootMargin': _0x4971ba(0x2d0),
                                    'threshold': 0.1
                                }), _0x45d46e = new MutationObserver(function (_0x21d3fd, _0x58b516) {
                                    const _0x342e2c = _0x4971ba;
                                    var _0x2d2443 = _0x21d3fd['at'](0x0)?.[_0x342e2c(0x197)];
                                    _0x2fb0bd(_0x2d2443)[_0x342e2c(0x1fd)](_0x342e2c(0x1a6))[_0x342e2c(0x3d6)](function () {
                                        const _0x2b972e = _0x342e2c;
                                        _0x1ac5d2[_0x2b972e(0x244)](this);
                                    });
                                });
                            _0x1fb822['find'](_0x4971ba(0x241))['each'](function () {
                                _0x1ac5d2['observe'](this);
                            });
                            const _0x25c7a7 = _0x40441a['eq'](_0x443972 === 'DIV' ? 0x0 : _0x40441a[_0x4971ba(0x30b)] - 0x2)['find'](_0x4971ba(0x241))?.[_0x4971ba(0x19b)]()[0x0], _0x4b9443 = _0x40441a['eq'](_0x443972 === _0x4971ba(0x2c9) ? 0x0 : _0x40441a[_0x4971ba(0x30b)] - 0x2)[_0x4971ba(0x1fd)](_0x4971ba(0x241))?.[_0x4971ba(0x19b)]()[_0x4971ba(0x19b)]()[0x0];
                            _0x25c7a7 && _0x45d46e[_0x4971ba(0x244)](_0x25c7a7, { 'childList': !![] }), _0x4b9443 && _0x45d46e[_0x4971ba(0x244)](_0x4b9443, { 'attributes': !![] });
                        }
                    }, 0x32), _0x40441a[_0x592c7d(0x274)](_0x592c7d(0x318), 'relative'), _0x151572(_0x1fb822), _0x2fb0bd(this)['on'](_0x592c7d(0x2eb), _0x592c7d(0x349), function (_0x56df98) {
                        const _0x1e52b4 = _0x592c7d;
                        _0x386d4c(!![]), _0x4586a9 = _0x2fb0bd(this)['parent']()[_0x1e52b4(0x19b)]()['parent']()[_0x1e52b4(0x306)](_0x1e52b4(0x1cf)), _0x217b8d = location[_0x1e52b4(0x39b)][_0x1e52b4(0x1ee)](/\/$/, '')[_0x1e52b4(0x3b1)]('/')['at'](-0x1) || _0x2fb0bd(this)[_0x1e52b4(0x19b)]()['parent']()[_0x1e52b4(0x19b)]()[_0x1e52b4(0x1fd)](_0x1e52b4(0x27c))[_0x1e52b4(0x366)]()['attr'](_0x1e52b4(0x30d))[_0x1e52b4(0x3b1)]('/')['at'](0x2) || _0x2fb0bd(this)['parent']()[_0x1e52b4(0x19b)]()['children'](_0x1e52b4(0x24e))['children'](_0x1e52b4(0x27e))[_0x1e52b4(0x20f)](_0x1e52b4(0x24e))['find'](_0x1e52b4(0x27c))[_0x1e52b4(0x363)]()[_0x1e52b4(0x306)](_0x1e52b4(0x30d))['split']('/')['at'](0x2);
                        var _0x22a4f4 = _0x2fb0bd(this)['parent']()['parent']()['parent'](), _0x1760db = _0x4aa7bd(_0x22a4f4);
                        _0x5a6ae4(!![], ![]), _0x4aaa4a(_0x217b8d, _0x1e52b4(0x275), '')[_0x1e52b4(0x3af)](() => {
                            let _0x279086 = setInterval(() => {
                                const _0x167efb = a0_0x200b;
                                if (_0x2fb0bd('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')['length'] > 0x0) {
                                    clearInterval(_0x279086);
                                    var _0x436e66 = _0x2fb0bd(_0x167efb(0x3c0) + (_0x1760db + 0x1) + '\x22]')?.[_0x167efb(0x19b)]()['find'](_0x167efb(0x2e2))?.[_0x167efb(0x366)]();
                                    _0x436e66 != null && _0x436e66[_0x167efb(0x30b)] > 0x0 ? _0x436e66[_0x167efb(0x2eb)]() : alert(_0x167efb(0x2ff)), _0x386d4c(![]), _0x2fb0bd(_0x167efb(0x356))[_0x167efb(0x2a6)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x2fb0bd(this)['on'](_0x592c7d(0x2eb), _0x592c7d(0x200), function (_0x119574) {
                        const _0x2e3ffb = _0x592c7d;
                        _0x386d4c(!![]), _0x4586a9 = _0x2fb0bd(this)[_0x2e3ffb(0x19b)]()[_0x2e3ffb(0x19b)]()[_0x2e3ffb(0x19b)]()[_0x2e3ffb(0x306)](_0x2e3ffb(0x1cf)), _0x217b8d = location['pathname'][_0x2e3ffb(0x1ee)](/\/$/, '')[_0x2e3ffb(0x3b1)]('/')['at'](-0x1) || _0x2fb0bd(this)[_0x2e3ffb(0x19b)]()[_0x2e3ffb(0x19b)]()[_0x2e3ffb(0x19b)]()[_0x2e3ffb(0x1fd)](_0x2e3ffb(0x27c))[_0x2e3ffb(0x366)]()[_0x2e3ffb(0x306)](_0x2e3ffb(0x30d))[_0x2e3ffb(0x3b1)]('/')['at'](0x2) || _0x2fb0bd(this)[_0x2e3ffb(0x19b)]()[_0x2e3ffb(0x19b)]()[_0x2e3ffb(0x20f)]('div:last-child')[_0x2e3ffb(0x20f)](_0x2e3ffb(0x27e))[_0x2e3ffb(0x20f)]('div:last-child')['find'](_0x2e3ffb(0x27c))['last']()[_0x2e3ffb(0x306)](_0x2e3ffb(0x30d))[_0x2e3ffb(0x3b1)]('/')['at'](0x2);
                        var _0x16e31b = _0x2fb0bd(this)['parent']()[_0x2e3ffb(0x19b)]()[_0x2e3ffb(0x19b)](), _0x2d1586 = _0x4aa7bd(_0x16e31b);
                        _0x5a6ae4(!![], ![]), _0x4aaa4a(_0x217b8d, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x2e3ffb(0x3af)](() => {
                            let _0x311fe9 = setInterval(() => {
                                const _0x37a763 = a0_0x200b;
                                if (_0x2fb0bd(_0x37a763(0x3e3))[_0x37a763(0x30b)] > 0x0) {
                                    clearInterval(_0x311fe9);
                                    var _0x141528 = _0x2fb0bd(_0x37a763(0x3c0) + (_0x2d1586 + 0x1) + '\x22]');
                                    if (_0x216f60['FORCE_RESOURCE_VIA_MEDIA'] && _0x216f60[_0x37a763(0x3b5)])
                                        _0x360447(_0x141528[_0x37a763(0x366)]()[0x0], !![]);
                                    else {
                                        let _0x2102e8 = _0x141528?.['attr'](_0x37a763(0x340));
                                        if (_0x2102e8) {
                                            var _0x37eef3 = new URL(_0x2102e8);
                                            _0x37eef3['host'] = _0x37a763(0x386), _0x579cf7(_0x37eef3[_0x37a763(0x30d)]);
                                        } else
                                            alert(_0x37a763(0x3d7));
                                    }
                                    _0x386d4c(![]), _0x2fb0bd(_0x37a763(0x356))[_0x37a763(0x2a6)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x2fb0bd(this)['on'](_0x592c7d(0x2eb), '.SNKMS_IG_DW_MAIN', async function (_0x1828b8) {
                        const _0x56c472 = _0x592c7d;
                        _0x4586a9 = _0x2fb0bd(this)[_0x56c472(0x19b)]()[_0x56c472(0x19b)]()['parent']()[_0x56c472(0x306)](_0x56c472(0x1cf)), _0x217b8d = location[_0x56c472(0x39b)][_0x56c472(0x1ee)](/\/$/, '')[_0x56c472(0x3b1)]('/')['at'](-0x1) || _0x2fb0bd(this)[_0x56c472(0x19b)]()['parent']()['parent']()[_0x56c472(0x1fd)](_0x56c472(0x27c))[_0x56c472(0x366)]()[_0x56c472(0x306)](_0x56c472(0x30d))[_0x56c472(0x3b1)]('/')['at'](0x2) || _0x2fb0bd(this)[_0x56c472(0x19b)]()[_0x56c472(0x19b)]()[_0x56c472(0x20f)](_0x56c472(0x24e))['children'](_0x56c472(0x27e))[_0x56c472(0x20f)]('div:last-child')[_0x56c472(0x1fd)]('a[href^=\x22/p/\x22]')['last']()['attr'](_0x56c472(0x30d))['split']('/')['at'](0x2), _0x5a6ae4(_0x216f60[_0x56c472(0x174)], !![]), _0x2fb0bd('#article-id')[_0x56c472(0x34a)](_0x56c472(0x211) + _0x217b8d + '\x22>' + _0x217b8d + '</a>');
                        if (_0x216f60['DIRECT_DOWNLOAD_VISIBLE_RESOURCE']) {
                            _0x386d4c(!![]), _0x12b1e7(!![]);
                            var _0x290589 = _0x4aa7bd(_0x2fb0bd(this)[_0x56c472(0x19b)]()[_0x56c472(0x19b)]()[_0x56c472(0x19b)]());
                            _0x4aaa4a(_0x217b8d, _0x56c472(0x275), '')[_0x56c472(0x3af)](() => {
                                let _0x53fed8 = setInterval(() => {
                                    const _0x397da4 = a0_0x200b;
                                    if (_0x2fb0bd('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x397da4(0x30b)] > 0x0) {
                                        clearInterval(_0x53fed8);
                                        var _0xae16d8 = _0x2fb0bd(_0x397da4(0x3c0) + (_0x290589 + 0x1) + '\x22]')?.[_0x397da4(0x306)]('data-href');
                                        _0xae16d8 ? (_0x386d4c(![]), _0x2fb0bd(_0x397da4(0x3c0) + (_0x290589 + 0x1) + '\x22]')?.[_0x397da4(0x2eb)]()) : alert(_0x397da4(0x1e4)), _0x2fb0bd(_0x397da4(0x356))['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x216f60['DIRECT_DOWNLOAD_ALL']) {
                            var _0x5991bc = 0x0, _0x449942 = _0x2fb0bd(this)[_0x56c472(0x19b)]()[_0x56c472(0x19b)]()['find']('._acay\x20._acaz')[_0x56c472(0x30b)], _0x273fe7 = window[_0x56c472(0x399)][_0x56c472(0x39b)], _0x3a6589 = '/' + _0x273fe7['split']('/')[0x1] + '/' + _0x273fe7[_0x56c472(0x3b1)]('/')[0x2] + '/', _0x4f20e0 = _0x216f60[_0x56c472(0x379)], _0x3ebe3c = new Date(_0x2fb0bd(this)[_0x56c472(0x19b)]()['parent']()[_0x56c472(0x1fd)](_0x56c472(0x18f))[_0x56c472(0x366)]()[_0x56c472(0x306)](_0x56c472(0x284)))[_0x56c472(0x18e)]();
                            if (_0x449942)
                                _0x2fb0bd(this)['parent']()['find'](_0x56c472(0x236))[_0x56c472(0x3d6)](function () {
                                    const _0x38ec57 = _0x56c472;
                                    let _0x529b9a = _0x2fb0bd(this)['parent']()[_0x38ec57(0x19b)]()[_0x38ec57(0x1fd)]('video');
                                    _0x529b9a && _0x529b9a[_0x38ec57(0x306)]('src') && (_0x4f20e0 = !![]);
                                }), _0x4f20e0 || _0x216f60['FORCE_RESOURCE_VIA_MEDIA'] ? _0x4aaa4a(_0x217b8d, _0x56c472(0x275), _0x2e373e('LOAD_BLOB_MULTIPLE')) : (_0x2fb0bd(this)[_0x56c472(0x19b)]()['find']('._acay\x20._acaz')[_0x56c472(0x3d6)](function () {
                                    const _0x130b24 = _0x56c472;
                                    _0x5991bc++;
                                    let _0x18bd6b = _0x2fb0bd(this)['find']('video'), _0x571ae4 = _0x2fb0bd(this)[_0x130b24(0x1fd)](_0x130b24(0x1f6)), _0x5e1980 = _0x571ae4[_0x130b24(0x306)](_0x130b24(0x35a)) ? _0x571ae4[_0x130b24(0x306)]('srcset')[_0x130b24(0x3b1)]('\x20')[0x0] : _0x571ae4[_0x130b24(0x306)](_0x130b24(0x1c8));
                                    _0x18bd6b && _0x18bd6b['attr'](_0x130b24(0x1c8)) && (_0x4f20e0 = !![]), _0x571ae4 && _0x5e1980 && _0x2fb0bd('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')['append']('<a\x20datetime=\x22' + _0x3ebe3c + _0x130b24(0x308) + _0x217b8d + _0x130b24(0x1b3) + _0x5991bc + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x5e1980 + _0x130b24(0x27f) + _0x5e1980 + _0x130b24(0x2dc) + _0x2e373e('IMG') + _0x130b24(0x1a4) + _0x5991bc + '\x20-</a>');
                                }), _0x4f20e0 && _0x4aaa4a(_0x217b8d, _0x56c472(0x275), _0x2e373e(_0x56c472(0x2c0))));
                            else {
                                if (_0x216f60[_0x56c472(0x365)])
                                    _0x4aaa4a(_0x217b8d, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x2e373e('LOAD_BLOB_MULTIPLE'));
                                else {
                                    _0x5991bc++;
                                    let _0x4bddb7 = _0x2fb0bd(this)['parent']()[_0x56c472(0x19b)]()[_0x56c472(0x1fd)](_0x56c472(0x38b)), _0x2e67b9 = _0x2fb0bd(this)[_0x56c472(0x19b)]()[_0x56c472(0x19b)]()[_0x56c472(0x1fd)](_0x56c472(0x1f6)), _0x58f603 = _0x2e67b9['attr']('srcset') ? _0x2e67b9[_0x56c472(0x306)]('srcset')[_0x56c472(0x3b1)]('\x20')[0x0] : _0x2e67b9[_0x56c472(0x306)]('src');
                                    _0x4bddb7 && _0x4bddb7[_0x56c472(0x306)](_0x56c472(0x1c8)) && _0x4aaa4a(_0x217b8d, _0x56c472(0x275), _0x2e373e('LOAD_BLOB_ONE')), _0x2e67b9 && _0x58f603 && _0x2fb0bd(_0x56c472(0x275))[_0x56c472(0x20a)](_0x56c472(0x1f7) + _0x3ebe3c + _0x56c472(0x308) + _0x217b8d + _0x56c472(0x1b3) + _0x5991bc + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x58f603 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x58f603 + _0x56c472(0x2dc) + _0x2e373e(_0x56c472(0x1ab)) + _0x56c472(0x1a4) + _0x5991bc + '\x20-</a>');
                                }
                            }
                        }
                        _0x2fb0bd(_0x56c472(0x3e3))[_0x56c472(0x3d6)](function () {
                            const _0x2abefa = _0x56c472;
                            _0x2fb0bd(this)[_0x2abefa(0x217)](_0x2abefa(0x31e)), _0x2fb0bd(this)[_0x2abefa(0x342)](_0x2abefa(0x1b6)), _0x2fb0bd(this)[_0x2abefa(0x28b)](_0x2abefa(0x36d) + _0x2e373e(_0x2abefa(0x301)) + _0x2abefa(0x374) + _0x3a2b6b[_0x2abefa(0x301)] + '</div>'), _0x2fb0bd(this)[_0x2abefa(0x306)](_0x2abefa(0x1c9)) == 'video' && _0x2fb0bd(this)['after'](_0x2abefa(0x273) + _0x2e373e(_0x2abefa(0x38e)) + _0x2abefa(0x16e) + _0x3a2b6b['THUMBNAIL'] + '</div>');
                        }), _0x216f60[_0x56c472(0x174)] && _0x4aaa4a(_0x217b8d, _0x56c472(0x275), _0x2e373e(_0x56c472(0x218)))['then'](() => {
                            let _0x11aec3 = setInterval(() => {
                                const _0x419b1d = a0_0x200b;
                                _0x2fb0bd(_0x419b1d(0x3e3))[_0x419b1d(0x30b)] > 0x0 && (clearInterval(_0x11aec3), _0x2fb0bd(_0x419b1d(0x3e3))['each'](function () {
                                    const _0x3a395b = _0x419b1d;
                                    _0x2fb0bd(this)[_0x3a395b(0x2eb)]();
                                }), _0x2fb0bd('.IG_SN_DIG')[_0x419b1d(0x2a6)]());
                            }, 0xfa);
                        });
                    });
                    var _0x755d2d = _0x2fb0bd(this)[_0x592c7d(0x1fd)](_0x592c7d(0x171))[_0x592c7d(0x366)]()[_0x592c7d(0x276)]() || _0x2fb0bd(this)['find'](_0x592c7d(0x385))[_0x592c7d(0x286)](function () {
                        return _0x2fb0bd(this)?.['text']()?.['length'] > 0x0;
                    })[_0x592c7d(0x366)]()[_0x592c7d(0x276)]();
                    _0x2fb0bd(this)[_0x592c7d(0x306)]('data-snig', _0x592c7d(0x3b9)), _0x2fb0bd(this)[_0x592c7d(0x306)](_0x592c7d(0x1cf), _0x755d2d);
                }
            });
        }
        function _0x4aaa4a(_0x553131, _0x106c99, _0xc4f2ef) {
            return new Promise(async _0xad3f2b => {
                const _0x110e41 = a0_0x200b;
                _0x2fb0bd(_0x106c99 + '\x20a')[_0x110e41(0x2a6)](), _0x2fb0bd(_0x106c99)['append'](_0x110e41(0x328) + _0xc4f2ef + _0x110e41(0x1ce));
                let _0x2e59d1 = await _0x89f435(_0x553131);
                if (_0x2e59d1[_0x110e41(0x38a)] === _0x110e41(0x2fe)) {
                    let _0x183092 = 0x1, _0x172f1c = _0x2e59d1['data'], _0x11a22d = _0x172f1c['shortcode_media'];
                    _0x11a22d[_0x110e41(0x246)] == _0x110e41(0x333) && _0x11a22d[_0x110e41(0x36a)] && (_0x2fb0bd(_0x106c99)[_0x110e41(0x20a)](_0x110e41(0x2af) + _0x11a22d['id'] + '\x22\x20datetime=\x22' + _0x11a22d['taken_at_timestamp'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x11a22d['shortcode'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x11a22d['owner'][_0x110e41(0x3aa)] + _0x110e41(0x221) + _0x183092 + _0x110e41(0x254) + _0x11a22d['video_url'] + _0x110e41(0x27f) + _0x11a22d[_0x110e41(0x1dc)][0x1][_0x110e41(0x1c8)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x2e373e('VID') + '</span>\x20' + _0x183092 + '\x20-</a>'), _0x183092++);
                    _0x11a22d['__typename'] == _0x110e41(0x240) && (_0x2fb0bd(_0x106c99)[_0x110e41(0x20a)]('<a\x20media-id=\x22' + _0x11a22d['id'] + '\x22\x20datetime=\x22' + _0x11a22d[_0x110e41(0x3c4)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x11a22d[_0x110e41(0x313)] + _0x110e41(0x1f3) + _0x11a22d['owner'][_0x110e41(0x3aa)] + '\x22\x20data-globalIndex=\x22' + _0x183092 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x11a22d[_0x110e41(0x1dc)][_0x11a22d[_0x110e41(0x1dc)][_0x110e41(0x30b)] - 0x1]['src'] + _0x110e41(0x27f) + _0x11a22d[_0x110e41(0x1dc)][0x1][_0x110e41(0x1c8)] + _0x110e41(0x2dc) + _0x2e373e('IMG') + _0x110e41(0x1a4) + _0x183092 + _0x110e41(0x1da)), _0x183092++);
                    if (_0x11a22d['__typename'] == _0x110e41(0x2b3) && _0x11a22d[_0x110e41(0x36c)])
                        for (let _0xe1e86e of _0x11a22d[_0x110e41(0x36c)][_0x110e41(0x256)]) {
                            _0xe1e86e[_0x110e41(0x1db)][_0x110e41(0x246)] == _0x110e41(0x333) && _0x2fb0bd(_0x106c99)[_0x110e41(0x20a)]('<a\x20media-id=\x22' + _0xe1e86e[_0x110e41(0x1db)]['id'] + _0x110e41(0x36f) + _0x11a22d[_0x110e41(0x3c4)] + _0x110e41(0x2bc) + _0x11a22d[_0x110e41(0x313)] + _0x110e41(0x1c5) + _0x11a22d[_0x110e41(0x1c1)][_0x110e41(0x3aa)] + _0x110e41(0x221) + _0x183092 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0xe1e86e[_0x110e41(0x1db)][_0x110e41(0x36a)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xe1e86e['node'][_0x110e41(0x1dc)][0x1][_0x110e41(0x1c8)] + _0x110e41(0x1c0) + _0x2e373e(_0x110e41(0x233)) + _0x110e41(0x1a4) + _0x183092 + _0x110e41(0x1da)), _0xe1e86e[_0x110e41(0x1db)][_0x110e41(0x246)] == _0x110e41(0x240) && _0x2fb0bd(_0x106c99)['append'](_0x110e41(0x2af) + _0xe1e86e['node']['id'] + _0x110e41(0x36f) + _0x11a22d[_0x110e41(0x3c4)] + _0x110e41(0x2bc) + _0x11a22d[_0x110e41(0x313)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x11a22d['owner'][_0x110e41(0x3aa)] + '\x22\x20data-globalIndex=\x22' + _0x183092 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0xe1e86e[_0x110e41(0x1db)][_0x110e41(0x1dc)][_0xe1e86e[_0x110e41(0x1db)][_0x110e41(0x1dc)][_0x110e41(0x30b)] - 0x1][_0x110e41(0x1c8)] + _0x110e41(0x27f) + _0xe1e86e[_0x110e41(0x1db)][_0x110e41(0x1dc)][0x1][_0x110e41(0x1c8)] + _0x110e41(0x2dc) + _0x2e373e('IMG') + '</span>\x20' + _0x183092 + _0x110e41(0x1da)), _0x183092++;
                        }
                } else {
                    let _0x4b8849 = _0x2e59d1[_0x110e41(0x270)];
                    if (_0x4b8849['carousel_media'])
                        _0x3bd434(_0x110e41(0x26e)), _0x4b8849[_0x110e41(0x26e)]['forEach']((_0x552bf1, _0x34ddf2) => {
                            const _0x44a5d8 = _0x110e41;
                            let _0x3f4a3e = _0x34ddf2 + 0x1;
                            _0x552bf1[_0x44a5d8(0x3b4)] == null ? (_0x552bf1[_0x44a5d8(0x199)][_0x44a5d8(0x26a)][_0x44a5d8(0x178)](function (_0x206983, _0x8065a8) {
                                const _0x34ba7e = _0x44a5d8;
                                if (_0x206983[_0x34ba7e(0x269)] < _0x8065a8['width'])
                                    return 0x1;
                                if (_0x206983[_0x34ba7e(0x269)] > _0x8065a8['width'])
                                    return -0x1;
                                return 0x0;
                            }), _0x2fb0bd(_0x106c99)[_0x44a5d8(0x20a)](_0x44a5d8(0x2af) + _0x552bf1['pk'] + '\x22\x20datetime=\x22' + _0x552bf1[_0x44a5d8(0x1d5)] + _0x44a5d8(0x2bc) + _0x4b8849[_0x44a5d8(0x3b6)] + _0x44a5d8(0x1f3) + _0x4b8849[_0x44a5d8(0x1c1)][_0x44a5d8(0x3aa)] + _0x44a5d8(0x221) + _0x3f4a3e + _0x44a5d8(0x254) + _0x552bf1[_0x44a5d8(0x199)][_0x44a5d8(0x26a)][0x0][_0x44a5d8(0x175)] + _0x44a5d8(0x27f) + _0x552bf1[_0x44a5d8(0x199)][_0x44a5d8(0x26a)][0x0][_0x44a5d8(0x175)] + _0x44a5d8(0x2dc) + _0x2e373e(_0x44a5d8(0x1ab)) + _0x44a5d8(0x1a4) + _0x3f4a3e + _0x44a5d8(0x1da))) : _0x2fb0bd(_0x106c99)[_0x44a5d8(0x20a)](_0x44a5d8(0x2af) + _0x552bf1['pk'] + '\x22\x20datetime=\x22' + _0x552bf1[_0x44a5d8(0x1d5)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x4b8849[_0x44a5d8(0x3b6)] + _0x44a5d8(0x1c5) + _0x4b8849['owner']['username'] + '\x22\x20data-globalIndex=\x22' + _0x3f4a3e + _0x44a5d8(0x254) + _0x552bf1[_0x44a5d8(0x3b4)][0x0][_0x44a5d8(0x175)] + _0x44a5d8(0x27f) + _0x552bf1[_0x44a5d8(0x199)][_0x44a5d8(0x26a)][0x0]['url'] + _0x44a5d8(0x1c2) + _0x2e373e('VID') + '</span>\x20' + _0x3f4a3e + '\x20-</a>');
                        });
                    else {
                        let _0x19e4d8 = 0x1;
                        _0x4b8849[_0x110e41(0x3b4)] == null ? (_0x4b8849[_0x110e41(0x199)][_0x110e41(0x26a)]['sort'](function (_0x4240d0, _0x3d3e56) {
                            const _0x424804 = _0x110e41;
                            if (_0x4240d0[_0x424804(0x269)] < _0x3d3e56[_0x424804(0x269)])
                                return 0x1;
                            if (_0x4240d0[_0x424804(0x269)] > _0x3d3e56[_0x424804(0x269)])
                                return -0x1;
                            return 0x0;
                        }), _0x2fb0bd(_0x106c99)[_0x110e41(0x20a)]('<a\x20media-id=\x22' + _0x4b8849['pk'] + _0x110e41(0x36f) + _0x4b8849[_0x110e41(0x1d5)] + _0x110e41(0x2bc) + _0x4b8849[_0x110e41(0x3b6)] + _0x110e41(0x1f3) + _0x4b8849['owner'][_0x110e41(0x3aa)] + _0x110e41(0x221) + _0x19e4d8 + _0x110e41(0x254) + _0x4b8849[_0x110e41(0x199)][_0x110e41(0x26a)][0x0][_0x110e41(0x175)] + _0x110e41(0x27f) + _0x4b8849['image_versions2'][_0x110e41(0x26a)][0x0][_0x110e41(0x175)] + _0x110e41(0x2dc) + _0x2e373e(_0x110e41(0x1ab)) + '</span>\x20' + _0x19e4d8 + _0x110e41(0x1da))) : _0x2fb0bd(_0x106c99)[_0x110e41(0x20a)](_0x110e41(0x2af) + _0x4b8849['pk'] + _0x110e41(0x36f) + _0x4b8849[_0x110e41(0x1d5)] + _0x110e41(0x2bc) + _0x4b8849[_0x110e41(0x3b6)] + _0x110e41(0x1c5) + _0x4b8849['owner'][_0x110e41(0x3aa)] + _0x110e41(0x221) + _0x19e4d8 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x4b8849[_0x110e41(0x3b4)][0x0][_0x110e41(0x175)] + _0x110e41(0x27f) + _0x4b8849['image_versions2'][_0x110e41(0x26a)][0x0][_0x110e41(0x175)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x2e373e(_0x110e41(0x233)) + _0x110e41(0x1a4) + _0x19e4d8 + _0x110e41(0x1da));
                    }
                }
                _0x2fb0bd(_0x110e41(0x1e9))['remove'](), _0x2fb0bd(_0x110e41(0x3e3))[_0x110e41(0x3d6)](function () {
                    const _0x2838d5 = _0x110e41;
                    _0x2fb0bd(this)['wrap'](_0x2838d5(0x31e)), _0x2fb0bd(this)[_0x2838d5(0x342)](_0x2838d5(0x1b6)), _0x2fb0bd(this)[_0x2838d5(0x28b)](_0x2838d5(0x36d) + _0x2e373e(_0x2838d5(0x301)) + _0x2838d5(0x374) + _0x3a2b6b[_0x2838d5(0x301)] + _0x2838d5(0x368)), _0x2fb0bd(this)[_0x2838d5(0x306)](_0x2838d5(0x1c9)) == _0x2838d5(0x38b) && _0x2fb0bd(this)[_0x2838d5(0x28b)](_0x2838d5(0x273) + _0x2e373e(_0x2838d5(0x38e)) + _0x2838d5(0x16e) + _0x3a2b6b[_0x2838d5(0x25a)] + '</div>');
                }), _0xad3f2b(!![]);
            });
        }
        function _0x5a6ae4(_0xc3c673, _0x3f417a) {
            const _0x53d93d = _0x1b3a45;
            let _0x578b9f = _0xc3c673 ? _0x53d93d(0x2ce) : '';
            _0x2fb0bd(_0x53d93d(0x1ec))[_0x53d93d(0x20a)]('<div\x20class=\x22IG_SN_DIG\x20' + _0x578b9f + '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>'), _0x2fb0bd(_0x53d93d(0x3e0))[_0x53d93d(0x20a)](_0x53d93d(0x3b0) + _0x2e373e('CLOSE') + _0x53d93d(0x2ed) + _0x3a2b6b[_0x53d93d(0x23f)] + _0x53d93d(0x27a)), _0x3f417a && (_0x2fb0bd(_0x53d93d(0x3e0))[_0x53d93d(0x20a)]('<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>'), _0x2fb0bd('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')['append'](_0x53d93d(0x3c5) + _0x2e373e(_0x53d93d(0x248)) + '</button>'), _0x2fb0bd(_0x53d93d(0x280))[_0x53d93d(0x20a)](_0x53d93d(0x36b) + _0x2e373e(_0x53d93d(0x2f6)) + _0x53d93d(0x37d)), _0x2fb0bd('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')[_0x53d93d(0x20a)](_0x53d93d(0x324) + _0x2e373e(_0x53d93d(0x18b)) + _0x53d93d(0x1b7)));
        }
        function _0x12b1e7(_0x390bce) {
            const _0x2ef8a6 = _0x1b3a45;
            _0x2fb0bd(_0x2ef8a6(0x356))[_0x2ef8a6(0x30b)] && (_0x390bce ? _0x2fb0bd(_0x2ef8a6(0x356))['addClass']('hidden') : _0x2fb0bd(_0x2ef8a6(0x356))[_0x2ef8a6(0x1d9)](_0x2ef8a6(0x2ce)));
        }
        function _0x15b992(_0x2edc9a, _0x2632bc, _0x5a4b3d, _0x5bd599, _0x1689ac, _0x500460) {
            setTimeout(() => {
                _0x386d4c(!![]), fetch(_0x2edc9a)['then'](_0x698a33 => {
                    return _0x698a33['blob']()['then'](_0xf5d1e0 => {
                        _0x386d4c(![]), _0x3e056c(_0x2edc9a, _0xf5d1e0, _0x2632bc, _0x5a4b3d, _0x5bd599, _0x1689ac, _0x500460);
                    });
                });
            }, 0x32);
        }
        function _0x3e056c(_0x165123, _0x146953, _0x6d72f7, _0x335e40, _0x26dcd5, _0x59eeee, _0x2db0c2) {
            const _0x433176 = _0x1b3a45;
            _0x26dcd5 = parseInt(_0x26dcd5['toString']()[_0x433176(0x30f)](0xd, '0'));
            _0x216f60[_0x433176(0x3ad)] && (_0x26dcd5 = parseInt(_0x26dcd5['toString']()[_0x433176(0x30f)](0xd, '0')));
            const _0x439f5d = new Date(_0x26dcd5), _0x7c4a1b = document[_0x433176(0x3bf)]('a'), _0x39953b = new URL(_0x165123)[_0x433176(0x39b)][_0x433176(0x3b1)]('/')['at'](-0x1)[_0x433176(0x3b1)]('.')[_0x433176(0x214)](0x0, -0x1)[_0x433176(0x2f3)]('.'), _0x300bc0 = _0x439f5d['getFullYear']()[_0x433176(0x1a3)](), _0x194a79 = (_0x439f5d[_0x433176(0x26b)]() + 0x1)[_0x433176(0x1a3)]()[_0x433176(0x19c)](0x2, '0'), _0x4b6489 = _0x439f5d[_0x433176(0x2a7)]()[_0x433176(0x1a3)]()[_0x433176(0x19c)](0x2, '0'), _0x3923e2 = _0x439f5d[_0x433176(0x2e8)]()['toString']()[_0x433176(0x19c)](0x2, '0'), _0x376938 = _0x439f5d[_0x433176(0x35e)]()[_0x433176(0x1a3)]()[_0x433176(0x19c)](0x2, '0'), _0x44cadc = _0x439f5d[_0x433176(0x173)]()[_0x433176(0x1a3)]()[_0x433176(0x19c)](0x2, '0');
            var _0x42c049 = _0x2c4e7a['toUpperCase'](), _0x578b9a = _0x2db0c2 ?? '', _0x3608fe = {
                    '%USERNAME%': _0x6d72f7,
                    '%SOURCE_TYPE%': _0x335e40,
                    '%SHORTCODE%': _0x578b9a,
                    '%YEAR%': _0x300bc0,
                    '%2-YEAR%': _0x300bc0[_0x433176(0x3de)](-0x2),
                    '%MONTH%': _0x194a79,
                    '%DAY%': _0x4b6489,
                    '%HOUR%': _0x3923e2,
                    '%MINUTE%': _0x376938,
                    '%SECOND%': _0x44cadc,
                    '%ORIGINAL_NAME%': _0x39953b,
                    '%ORIGINAL_NAME_FIRST%': _0x39953b[_0x433176(0x3b1)]('_')['at'](0x0)
                };
            _0x42c049 = _0x42c049[_0x433176(0x1ee)](/%[\w\-]+%/g, function (_0x72dadf) {
                return _0x3608fe[_0x72dadf] || _0x72dadf;
            });
            const _0x3d5eac = _0x6d72f7 + '_' + _0x39953b + '.' + _0x59eeee;
            _0x7c4a1b[_0x433176(0x30d)] = URL['createObjectURL'](_0x146953), _0x7c4a1b[_0x433176(0x2ea)](_0x433176(0x3a5), _0x216f60[_0x433176(0x30c)] ? _0x42c049 + '.' + _0x59eeee : _0x3d5eac), _0x7c4a1b[_0x433176(0x2eb)](), _0x7c4a1b['remove']();
        }
        async function _0x360447(_0x4f372d, _0x1153cc) {
            const _0x53abae = _0x1b3a45;
            let _0x3cee34 = new Date()[_0x53abae(0x18e)](), _0x1ea0db = Math[_0x53abae(0x285)](_0x3cee34 / 0x3e8), _0x237ecb = _0x2fb0bd(_0x4f372d)['attr'](_0x53abae(0x1cf)) ? _0x2fb0bd(_0x4f372d)['attr'](_0x53abae(0x1cf)) : _0x4586a9;
            !_0x237ecb && _0x2fb0bd(_0x4f372d)['attr'](_0x53abae(0x186)) && (_0x3bd434(_0x53abae(0x2db), _0x2fb0bd(_0x4f372d)[_0x53abae(0x306)]('data-href')), _0x237ecb = await _0x5cfd97(_0x2fb0bd(_0x4f372d)[_0x53abae(0x306)]('data-path'))['catch'](_0x3b991a => {
                const _0x4a8ba6 = _0x53abae;
                _0x3bd434(_0x4a8ba6(0x2e1), _0x3b991a['message']);
            }), _0x237ecb == null && (_0x237ecb = _0x53abae(0x294)));
            _0x216f60['RENAME_PUBLISH_DATE'] && _0x2fb0bd(_0x4f372d)['attr'](_0x53abae(0x284)) && (_0x1ea0db = parseInt(_0x2fb0bd(_0x4f372d)[_0x53abae(0x306)](_0x53abae(0x284))));
            if (_0x216f60[_0x53abae(0x365)]) {
                _0x386d4c(!![]);
                let _0x3c3127 = await _0x4e82eb(_0x2fb0bd(_0x4f372d)[_0x53abae(0x306)](_0x53abae(0x319)));
                _0x386d4c(![]);
                if (_0x3c3127[_0x53abae(0x34c)] === 'ok') {
                    var _0x410d95 = null;
                    _0x3c3127[_0x53abae(0x28e)][0x0][_0x53abae(0x3b4)] ? _0x410d95 = _0x3c3127['items'][0x0][_0x53abae(0x3b4)][0x0][_0x53abae(0x175)] : (_0x3c3127[_0x53abae(0x28e)][0x0][_0x53abae(0x199)][_0x53abae(0x26a)]['sort'](function (_0x25e2ae, _0x175368) {
                        const _0x1217cf = _0x53abae;
                        if (_0x25e2ae[_0x1217cf(0x269)] < _0x175368[_0x1217cf(0x269)])
                            return 0x1;
                        if (_0x25e2ae[_0x1217cf(0x269)] > _0x175368[_0x1217cf(0x269)])
                            return -0x1;
                        return 0x0;
                    }), _0x410d95 = _0x3c3127[_0x53abae(0x28e)][0x0]['image_versions2'][_0x53abae(0x26a)][0x0][_0x53abae(0x175)]);
                    if (_0x1153cc) {
                        let _0x122bb6 = new URL(_0x410d95);
                        _0x122bb6[_0x53abae(0x1b5)] = _0x53abae(0x386), _0x579cf7(_0x122bb6[_0x53abae(0x30d)]);
                    } else
                        _0x15b992(_0x410d95, _0x237ecb, _0x2fb0bd(_0x4f372d)['attr']('data-name'), _0x1ea0db, _0x2fb0bd(_0x4f372d)[_0x53abae(0x306)](_0x53abae(0x30a)), _0x2fb0bd(_0x4f372d)[_0x53abae(0x306)](_0x53abae(0x186)));
                } else {
                    if (_0x216f60[_0x53abae(0x210)]) {
                        if (_0x1153cc) {
                            let _0x5b165b = new URL(_0x2fb0bd(_0x4f372d)[_0x53abae(0x306)](_0x53abae(0x340)));
                            _0x5b165b[_0x53abae(0x1b5)] = 'scontent.cdninstagram.com', _0x579cf7(_0x5b165b[_0x53abae(0x30d)]);
                        } else
                            _0x15b992(_0x2fb0bd(_0x4f372d)['attr']('data-href'), _0x237ecb, _0x2fb0bd(_0x4f372d)['attr'](_0x53abae(0x1c9)), _0x1ea0db, _0x2fb0bd(_0x4f372d)[_0x53abae(0x306)]('data-type'), _0x2fb0bd(_0x4f372d)[_0x53abae(0x306)](_0x53abae(0x186)));
                    } else
                        alert(_0x53abae(0x247) + _0x3c3127[_0x53abae(0x3dc)]);
                    _0x3bd434(_0x3c3127);
                }
            } else
                _0x15b992(_0x2fb0bd(_0x4f372d)['attr'](_0x53abae(0x340)), _0x237ecb, _0x2fb0bd(_0x4f372d)[_0x53abae(0x306)](_0x53abae(0x1c9)), _0x1ea0db, _0x2fb0bd(_0x4f372d)['attr'](_0x53abae(0x30a)), _0x2fb0bd(_0x4f372d)['attr'](_0x53abae(0x186)));
        }
        function _0x230020(_0x10ff47) {
            const _0x1df998 = _0x1b3a45;
            var _0x5e2d74 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': 'Wololo!\x20New\x20version\x20released.',
                        'NOTICE_UPDATE_CONTENT': _0x1df998(0x2cc),
                        'CHECK_UPDATE': _0x1df998(0x192),
                        'CHECK_UPDATE_MENU': _0x1df998(0x253),
                        'CHECK_UPDATE_INTRO': _0x1df998(0x28f),
                        'RELOAD_SCRIPT': 'Reload\x20Script',
                        'DONATE': _0x1df998(0x1a0),
                        'FEEDBACK': _0x1df998(0x1bd),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x1df998(0x3e1),
                        'SELECT_AND_COPY': 'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
                        'DOWNLOAD_DOM_TREE': _0x1df998(0x33c),
                        'REPORT_GITHUB': _0x1df998(0x198),
                        'REPORT_DISCORD': 'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
                        'REPORT_FORK': _0x1df998(0x245),
                        'DEBUG': _0x1df998(0x35c),
                        'CLOSE': _0x1df998(0x1d2),
                        'ALL_CHECK': _0x1df998(0x2e0),
                        'BATCH_DOWNLOAD_SELECTED': _0x1df998(0x265),
                        'BATCH_DOWNLOAD_DIRECT': _0x1df998(0x3c8),
                        'IMG': _0x1df998(0x19e),
                        'VID': _0x1df998(0x250),
                        'DW': 'Download',
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x1df998(0x25f),
                        'LOAD_BLOB_MULTIPLE': _0x1df998(0x3ae),
                        'LOAD_BLOB_RELOAD': _0x1df998(0x39e),
                        'NO_CHECK_RESOURCE': _0x1df998(0x292),
                        'NO_VID_URL': _0x1df998(0x352),
                        'SETTING': _0x1df998(0x380),
                        'AUTO_RENAME': _0x1df998(0x345),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': _0x1df998(0x3cb),
                        'RENAME_LOCATE_DATE': _0x1df998(0x389),
                        'DISABLE_VIDEO_LOOPING': _0x1df998(0x21d),
                        'HTML5_VIDEO_CONTROL': _0x1df998(0x204),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x1df998(0x1d1),
                        'FORCE_FETCH_ALL_RESOURCES': _0x1df998(0x28c),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x1df998(0x351),
                        'DIRECT_DOWNLOAD_ALL': _0x1df998(0x295),
                        'MODIFY_VIDEO_VOLUME': _0x1df998(0x383),
                        'SCROLL_BUTTON': _0x1df998(0x2b0),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x1df998(0x18d),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': _0x1df998(0x180),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': 'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
                        'AUTO_RENAME_INTRO': _0x1df998(0x37a),
                        'RENAME_SHORTCODE_INTRO': _0x1df998(0x27b),
                        'RENAME_PUBLISH_DATE_INTRO': _0x1df998(0x19d),
                        'RENAME_LOCATE_DATE_INTRO': _0x1df998(0x29c),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x1df998(0x300),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x1df998(0x359),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x1df998(0x23c),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': 'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x1df998(0x3d9),
                        'DIRECT_DOWNLOAD_ALL_INTRO': 'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x1df998(0x3a0),
                        'SCROLL_BUTTON_INTRO': 'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x1df998(0x1a2),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': 'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x1df998(0x258)
                    }
                }, _0x584f96 = Object[_0x1df998(0x1ad)]({}, _0x5e2d74, _0x50e786), _0x1dcdb5 = Object[_0x1df998(0x2d7)](_0x584f96)[_0x1df998(0x178)]()['reduce']((_0x4d6803, _0x31a570) => {
                    return _0x4d6803[_0x31a570] = _0x584f96[_0x31a570], _0x4d6803;
                }, {});
            return _0x1dcdb5;
        }
        async function _0x14dbde(_0x465265) {
            return new Promise((_0x26124f, _0x2fa0f4) => {
                const _0xc622e0 = a0_0x200b;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0xc622e0(0x2fc) + _0x465265 + '.json',
                    'onload': function (_0x3e4158) {
                        const _0x3bcb9c = _0xc622e0;
                        try {
                            let _0x46b3b3 = JSON[_0x3bcb9c(0x1cc)](_0x3e4158[_0x3bcb9c(0x17f)]);
                            _0x26124f(_0x46b3b3);
                        } catch (_0x91cca6) {
                            _0x2fa0f4(_0x91cca6);
                        }
                    },
                    'onerror': function (_0x22bf2d) {
                        const _0x3fd9a5 = _0xc622e0;
                        _0x3bd434(_0x3fd9a5(0x369), _0x3fd9a5(0x278), _0x22bf2d), _0x2fa0f4(_0x22bf2d);
                    }
                });
            });
        }
        function _0x2e373e(_0x22f3fa) {
            const _0x279c14 = _0x1b3a45, _0x505f40 = _0x230020();
            return _0x505f40[_0xfcc1a4] != undefined && _0x505f40[_0xfcc1a4][_0x22f3fa] != undefined ? _0x505f40[_0xfcc1a4][_0x22f3fa] : _0x505f40[_0x279c14(0x189)][_0x22f3fa];
        }
        function _0x8d2001() {
            const _0x28e374 = _0x1b3a45;
            _0x2fb0bd('[data-ih-locale]')[_0x28e374(0x3d6)](function () {
                const _0x6422cf = _0x28e374;
                _0x2fb0bd(this)[_0x6422cf(0x276)](_0x2e373e(_0x2fb0bd(this)[_0x6422cf(0x306)](_0x6422cf(0x1ae))));
            }), _0x2fb0bd('[data-ih-locale-title]')['each'](function () {
                const _0x579efe = _0x28e374;
                _0x2fb0bd(this)[_0x579efe(0x306)](_0x579efe(0x17c), _0x2e373e(_0x2fb0bd(this)[_0x579efe(0x306)](_0x579efe(0x238))));
            });
        }
        function _0x15ade2() {
            const _0x1fb398 = _0x1b3a45;
            for (let _0x4511d2 of _0x1a0608) {
                _0x3bd434(_0x1fb398(0x2ad), _0x4511d2), GM_unregisterMenuCommand(_0x4511d2);
            }
            _0x1a0608[_0x1fb398(0x17e)](GM_registerMenuCommand(_0x2e373e(_0x1fb398(0x1de)), () => {
                _0x34ddd5();
            }, { 'accessKey': 'w' })), _0x1a0608[_0x1fb398(0x17e)](GM_registerMenuCommand(_0x2e373e(_0x1fb398(0x3db)), () => {
                const _0x214809 = _0x1fb398;
                GM_openInTab(_0x214809(0x1ac), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x1a0608[_0x1fb398(0x17e)](GM_registerMenuCommand(_0x2e373e('DEBUG'), () => {
                _0x575c12();
            }, { 'accessKey': 'z' })), _0x1a0608[_0x1fb398(0x17e)](GM_registerMenuCommand(_0x2e373e(_0x1fb398(0x296)), () => {
                _0x5b5900();
            }, { 'accessKey': 'f' })), _0x1a0608[_0x1fb398(0x17e)](GM_registerMenuCommand(_0x2e373e(_0x1fb398(0x271)), () => {
                _0x51b6d9();
            }, { 'accessKey': 'c' })), _0x1a0608[_0x1fb398(0x17e)](GM_registerMenuCommand(_0x2e373e('RELOAD_SCRIPT'), () => {
                _0x3fa1f5();
            }, { 'accessKey': 'r' }));
        }
        function _0x40054f(_0x55eb84) {
            const _0xa0fdc6 = _0x1b3a45;
            if (!_0x216f60[_0xa0fdc6(0x378)])
                return;
            const _0x1d294b = GM_getValue(_0xa0fdc6(0x392)) ?? new Date()[_0xa0fdc6(0x18e)](), _0x2b922f = new Date()[_0xa0fdc6(0x18e)]();
            _0x2b922f > parseInt(_0x1d294b) + _0x55eb84 * 0x3e8 && (GM_setValue(_0xa0fdc6(0x392), new Date()['getTime']()), _0x51b6d9());
        }
        function _0x51b6d9() {
            const _0x4fe765 = _0x1b3a45, _0x41f97d = GM_info[_0x4fe765(0x2a5)][_0x4fe765(0x29b)], _0x2467ee = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x2467ee,
                'onload': function (_0x1ee34b) {
                    const _0x2fb664 = _0x4fe765, _0x477995 = _0x1ee34b[_0x2fb664(0x326)], _0x1a3c6b = _0x477995[_0x2fb664(0x3ab)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x1a3c6b && _0x1a3c6b[0x1]) {
                        const _0x2ca00 = _0x1a3c6b[0x1];
                        _0x3bd434(_0x2fb664(0x31a), _0x41f97d, '|', _0x2fb664(0x2dd), _0x2ca00), _0x2ca00 !== _0x41f97d && typeof this[_0x2fb664(0x382)] === _0x2fb664(0x267) ? (this[_0x2fb664(0x382)] = null, GM_notification({
                            'text': _0x2e373e(_0x2fb664(0x235)),
                            'title': _0x2e373e(_0x2fb664(0x1a8)),
                            'tag': _0x2fb664(0x37b),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x2fb664(0x3c9),
                            'onclick': _0x5a56d7 => {
                                const _0x44bab2 = _0x2fb664;
                                _0x5a56d7?.[_0x44bab2(0x1fb)]();
                                var _0x3d8470 = GM_openInTab(GM_info['script'][_0x44bab2(0x3cf)]);
                                setTimeout(() => {
                                    const _0x1210f6 = _0x44bab2;
                                    _0x3d8470[_0x1210f6(0x2c4)]();
                                }, 0xfa);
                            }
                        })) : _0x3bd434(_0x2fb664(0x1ea));
                    } else
                        console[_0x2fb664(0x193)]('Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.');
                }
            });
        }
        function _0x34ddd5() {
            const _0x18b22e = _0x1b3a45;
            _0x2fb0bd('.IG_SN_DIG')[_0x18b22e(0x2a6)](), _0x5a6ae4(), _0x2fb0bd('.IG_SN_DIG\x20#post_info')['text'](_0x18b22e(0x397)), _0x2fb0bd('.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div')['append'](_0x18b22e(0x1e5));
            for (let _0x55716c in _0x5cf8a4) {
                _0x2fb0bd(_0x18b22e(0x2c2))[_0x18b22e(0x20a)](_0x18b22e(0x194) + _0x55716c + '\x22\x20' + (_0xfcc1a4 == _0x55716c ? _0x18b22e(0x347) : '') + '>' + _0x5cf8a4[_0x55716c] + _0x18b22e(0x29d));
            }
            for (let _0xa73a1e in _0x216f60) {
                _0x2fb0bd(_0x18b22e(0x26f))['append'](_0x18b22e(0x375) + (_0x5617fd[_0x18b22e(0x2a8)](_0xa73a1e) ? _0x18b22e(0x1e1) : '') + _0x18b22e(0x22d) + _0x2e373e(_0xa73a1e + _0x18b22e(0x2ee)) + _0x18b22e(0x3a6) + (_0xa73a1e + _0x18b22e(0x2ee)) + _0x18b22e(0x24c) + _0xa73a1e + '\x22>' + _0x2e373e(_0xa73a1e) + '</span>\x20<input\x20id=\x22' + _0xa73a1e + _0x18b22e(0x30e) + (_0x216f60[_0xa73a1e] === !![] ? _0x18b22e(0x3cd) : '') + _0x18b22e(0x20d)), _0xa73a1e === _0x18b22e(0x2d1) && _0x2fb0bd(_0x18b22e(0x1e8) + _0xa73a1e + '\x22]')['parent']('label')['on'](_0x18b22e(0x219), function (_0x4ebade) {
                    const _0x4555d1 = _0x18b22e;
                    _0x4ebade[_0x4555d1(0x1fb)](), _0x2fb0bd(this)[_0x4555d1(0x1fd)](_0x4555d1(0x3d0))[_0x4555d1(0x30b)] === 0x0 && (_0x2fb0bd(this)[_0x4555d1(0x20a)](_0x4555d1(0x19a)), _0x2fb0bd(this)[_0x4555d1(0x20f)]('#tempWrapper')[_0x4555d1(0x20a)](_0x4555d1(0x252) + _0x4f0b72 + _0x4555d1(0x1f4)), _0x2fb0bd(this)['children'](_0x4555d1(0x3d0))[_0x4555d1(0x20a)](_0x4555d1(0x252) + _0x4f0b72 + _0x4555d1(0x212)), _0x2fb0bd(this)[_0x4555d1(0x20f)](_0x4555d1(0x3d0))['append'](_0x4555d1(0x23a) + _0x3a2b6b[_0x4555d1(0x23f)] + '</div>'));
                }), _0xa73a1e === _0x18b22e(0x30c) && _0x2fb0bd(_0x18b22e(0x1e8) + _0xa73a1e + '\x22]')[_0x18b22e(0x19b)](_0x18b22e(0x38d))['on'](_0x18b22e(0x219), function (_0x54822a) {
                    const _0x27ff7e = _0x18b22e;
                    _0x54822a['preventDefault'](), _0x2fb0bd(this)[_0x27ff7e(0x1fd)](_0x27ff7e(0x3d0))[_0x27ff7e(0x30b)] === 0x0 && (_0x2fb0bd(this)[_0x27ff7e(0x20a)](_0x27ff7e(0x19a)), _0x2fb0bd(this)['children']('#tempWrapper')[_0x27ff7e(0x20a)]('<input\x20id=\x22date_format\x22\x20value=\x22' + _0x2c4e7a + _0x27ff7e(0x3c3)), _0x2fb0bd(this)[_0x27ff7e(0x20f)](_0x27ff7e(0x3d0))['append'](_0x27ff7e(0x23a) + _0x3a2b6b[_0x27ff7e(0x23f)] + _0x27ff7e(0x368)));
                });
            }
        }
        function _0x575c12() {
            const _0x39b86f = _0x1b3a45;
            _0x2fb0bd('.IG_SN_DIG')[_0x39b86f(0x2a6)](), _0x5a6ae4(), _0x2fb0bd(_0x39b86f(0x2f2))['text'](_0x39b86f(0x387)), _0x2fb0bd('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x39b86f(0x20a)](_0x39b86f(0x16f)), _0x2fb0bd(_0x39b86f(0x26f))['append']('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x2fb0bd(_0x39b86f(0x195))[_0x39b86f(0x20a)](_0x39b86f(0x2f7) + _0x2e373e(_0x39b86f(0x3c1)) + _0x39b86f(0x2d2)), _0x2fb0bd(_0x39b86f(0x195))[_0x39b86f(0x20a)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>' + _0x2e373e(_0x39b86f(0x2e3)) + _0x39b86f(0x2d2)), _0x2fb0bd(_0x39b86f(0x195))[_0x39b86f(0x20a)](_0x39b86f(0x1b2) + _0x2e373e(_0x39b86f(0x3d1)) + _0x39b86f(0x20c)), _0x2fb0bd(_0x39b86f(0x195))[_0x39b86f(0x20a)](_0x39b86f(0x3b2) + _0x2e373e(_0x39b86f(0x1a9)) + '</a></button>'), _0x2fb0bd(_0x39b86f(0x195))[_0x39b86f(0x20a)](_0x39b86f(0x1e2) + _0x2e373e('REPORT_DISCORD') + _0x39b86f(0x2d2));
        }
        function _0x5b5900() {
            const _0x53297f = _0x1b3a45;
            _0x2fb0bd(_0x53297f(0x356))['remove'](), _0x5a6ae4(), _0x2fb0bd(_0x53297f(0x2f2))['text'](_0x53297f(0x2ab)), _0x2fb0bd(_0x53297f(0x26f))[_0x53297f(0x20a)](_0x53297f(0x251)), _0x2fb0bd(_0x53297f(0x195))[_0x53297f(0x20a)](_0x53297f(0x358) + _0x2e373e('REPORT_FORK') + _0x53297f(0x2d2)), _0x2fb0bd(_0x53297f(0x195))[_0x53297f(0x20a)](_0x53297f(0x3b2) + _0x2e373e(_0x53297f(0x1a9)) + _0x53297f(0x2d2)), _0x2fb0bd(_0x53297f(0x195))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x2e373e('REPORT_DISCORD') + _0x53297f(0x2d2));
        }
        function _0x579cf7(_0x39bd7a) {
            const _0x521d2d = _0x1b3a45;
            var _0x36f5dd = document[_0x521d2d(0x3bf)]('a');
            _0x36f5dd[_0x521d2d(0x30d)] = _0x39bd7a, _0x36f5dd[_0x521d2d(0x197)] = '_blank', document['body']['appendChild'](_0x36f5dd), _0x36f5dd[_0x521d2d(0x2eb)](), _0x36f5dd[_0x521d2d(0x2a6)]();
        }
        function _0x3fa1f5() {
            const _0x30c926 = _0x1b3a45;
            clearInterval(_0x488021), _0x2fb0bd(_0x30c926(0x2e7))[_0x30c926(0x2a6)](), _0x2fb0bd(_0x30c926(0x21b))[_0x30c926(0x2a6)](), _0x2fb0bd(_0x30c926(0x208))[_0x30c926(0x33e)](_0x30c926(0x391)), _0x39ff46 = ![], _0x6fabb = ![], _0x1ca613 = location[_0x30c926(0x30d)], _0x369582[_0x30c926(0x2ba)](), _0x3bd434('main\x20timer\x20re-register\x20completed');
        }
        function _0x3bd434(..._0x2290ba) {
            const _0x21035f = _0x1b3a45;
            var _0x24cc50 = new Date();
            _0x22ab83[_0x21035f(0x17e)]({
                'time': _0x24cc50[_0x21035f(0x18e)](),
                'content': [..._0x2290ba]
            }), _0x22ab83[_0x21035f(0x30b)] > 0x3e8 && (_0x22ab83 = [
                {
                    'time': _0x24cc50[_0x21035f(0x18e)](),
                    'content': [_0x21035f(0x226)]
                },
                ..._0x22ab83[_0x21035f(0x214)](-0x3e7)
            ]), console[_0x21035f(0x3b7)]('[' + _0x24cc50[_0x21035f(0x1bb)]() + ']', ..._0x2290ba);
        }
        function _0x5a1668() {
            const _0x4f4da5 = _0x1b3a45;
            for (let _0x429edf in _0x216f60) {
                GM_getValue(_0x429edf) != null && typeof GM_getValue(_0x429edf) === _0x4f4da5(0x38c) && (_0x216f60[_0x429edf] = GM_getValue(_0x429edf));
            }
        }
        function _0x3300c3(_0x4acdc2, _0x3b1650, _0x1a9bae, _0x2ad942 = '') {
            const _0x1acda7 = _0x1b3a45;
            _0x3b1650[_0x1acda7(0x1fd)](_0x1acda7(0x396))['length'] === 0x0 ? (_0x3b1650[_0x1acda7(0x20a)](_0x1acda7(0x336) + _0x2ad942 + _0x1acda7(0x3c3)), _0x3b1650[_0x1acda7(0x1fd)](_0x1acda7(0x396))[_0x1acda7(0x20a)](_0x1acda7(0x1e3) + _0x4f0b72 + _0x1acda7(0x289)), _0x3b1650[_0x1acda7(0x1fd)](_0x1acda7(0x373))[_0x1acda7(0x306)](_0x1acda7(0x1d0), _0x1acda7(0x1b9) + (_0x4f0b72 * 0x64 + '%')), _0x3b1650[_0x1acda7(0x1fd)](_0x1acda7(0x373))['on']('input', function () {
                const _0x20f3a3 = _0x1acda7;
                var _0x283d9f = _0x2fb0bd(this)[_0x20f3a3(0x316)]() * 0x64 + '%';
                _0x4f0b72 = _0x2fb0bd(this)[_0x20f3a3(0x316)](), GM_setValue(_0x20f3a3(0x2d5), _0x2fb0bd(this)[_0x20f3a3(0x316)]()), _0x2fb0bd(this)[_0x20f3a3(0x306)](_0x20f3a3(0x1d0), '--ig-track-progress:\x20' + _0x283d9f), _0x4acdc2['each'](function () {
                    _0x3bd434('(' + _0x1a9bae + ')', 'video\x20volume\x20changed\x20#slider'), this['volume'] = _0x4f0b72;
                });
            }), _0x3b1650['find'](_0x1acda7(0x373))['on'](_0x1acda7(0x39f), function () {
                const _0x54cc78 = _0x1acda7;
                var _0x43a30e = _0x4f0b72 * 0x64 + '%';
                _0x2fb0bd(this)[_0x54cc78(0x306)]('style', _0x54cc78(0x1b9) + _0x43a30e), _0x2fb0bd(this)[_0x54cc78(0x316)](_0x4f0b72), _0x4acdc2[_0x54cc78(0x3d6)](function () {
                    const _0x4de013 = _0x54cc78;
                    _0x3bd434('(' + _0x1a9bae + ')', _0x4de013(0x237)), this[_0x4de013(0x232)] = _0x4f0b72;
                });
            }), _0x3b1650[_0x1acda7(0x1fd)]('div.volume_slider')['on'](_0x1acda7(0x2eb), function (_0x16fcce) {
                const _0x5b8e5d = _0x1acda7;
                _0x16fcce[_0x5b8e5d(0x261)](), _0x16fcce[_0x5b8e5d(0x1fb)]();
            })) : _0x3b1650['find'](_0x1acda7(0x396))['remove']();
        }
        _0x2fb0bd(function () {
            const _0x37c666 = _0x1b3a45;
            function _0x1a2099(_0x32a74c) {
                const _0x526b5f = a0_0x200b;
                var _0x220029 = [];
                for (var _0x307c64 of _0x32a74c) {
                    _0x220029['push']({
                        'tagName': _0x307c64[_0x526b5f(0x290)],
                        'id': _0x307c64['id'],
                        'className': _0x307c64[_0x526b5f(0x329)]
                    });
                }
                return _0x220029;
            }
            function _0x22e3bc() {
                const _0x48eab1 = a0_0x200b;
                let _0x53d485 = _0x2fb0bd(_0x48eab1(0x229))[0x0];
                var _0x3527c4 = '';
                _0x22ab83['forEach'](_0x573ef8 => {
                    const _0x11fb79 = _0x48eab1;
                    var _0x150aa5 = JSON[_0x11fb79(0x2f8)](_0x573ef8['content'], function (_0x36722c, _0x51baef) {
                        const _0x33713b = _0x11fb79;
                        if (Array[_0x33713b(0x1fe)](this)) {
                            if (typeof _0x51baef === _0x33713b(0x39a) && _0x51baef instanceof jQuery)
                                return _0x1a2099(_0x51baef);
                            return _0x51baef;
                        } else
                            return _0x51baef;
                    }, '\x09');
                    _0x3527c4 += _0x573ef8[_0x11fb79(0x2f5)] + ':\x20' + _0x150aa5 + '\x0a';
                }), _0x2fb0bd(_0x48eab1(0x34f))[_0x48eab1(0x276)](_0x48eab1(0x314) + _0x3527c4 + _0x48eab1(0x2ef) + location[_0x48eab1(0x39b)] + _0x48eab1(0x304) + _0x53d485[_0x48eab1(0x2fa)]);
            }
            _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), _0x37c666(0x24b), function () {
                _0x22e3bc();
            }), _0x2fb0bd('body')['on'](_0x37c666(0x2eb), _0x37c666(0x222), function () {
                const _0x1a386b = _0x37c666;
                _0x2fb0bd('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x1a386b(0x28a)](), document[_0x1a386b(0x2d9)]('copy');
            }), _0x2fb0bd('body')['on'](_0x37c666(0x2eb), '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE', function () {
                const _0x580d89 = _0x37c666;
                _0x2fb0bd(_0x580d89(0x34f))['text']()[_0x580d89(0x30b)] === 0x0 && _0x22e3bc();
                var _0x133cf1 = _0x2fb0bd(_0x580d89(0x34f))[_0x580d89(0x276)](), _0x4ec220 = document[_0x580d89(0x3bf)]('a'), _0x4eb5f9 = new Blob([_0x133cf1], { 'type': _0x580d89(0x2e4) });
                _0x4ec220['href'] = URL['createObjectURL'](_0x4eb5f9), _0x4ec220[_0x580d89(0x3a5)] = _0x580d89(0x2e6) + new Date()[_0x580d89(0x18e)]() + _0x580d89(0x209), document['body'][_0x580d89(0x31b)](_0x4ec220), _0x4ec220[_0x580d89(0x2eb)](), _0x4ec220[_0x580d89(0x2a6)]();
            }), _0x2fb0bd(_0x37c666(0x1ec))['on']('click', _0x37c666(0x330), function () {
                const _0xecb58d = _0x37c666;
                _0x2fb0bd(this)[_0xecb58d(0x19b)](_0xecb58d(0x3d0))[_0xecb58d(0x30b)] > 0x0 ? _0x2fb0bd(this)['parent']('#tempWrapper')[_0xecb58d(0x32a)](0xfa, function () {
                    const _0x37783c = _0xecb58d;
                    _0x2fb0bd(this)[_0x37783c(0x2a6)]();
                }) : _0x2fb0bd('.IG_SN_DIG')[_0xecb58d(0x2a6)]();
            }), _0x2fb0bd(window)['keydown'](function (_0x5bf9cb) {
                const _0x20cce7 = _0x37c666;
                _0x5bf9cb[_0x20cce7(0x2be)] == '81' && _0x5bf9cb[_0x20cce7(0x33d)] && (_0x2fb0bd('.IG_SN_DIG')[_0x20cce7(0x2a6)](), _0x5bf9cb[_0x20cce7(0x1fb)]()), _0x5bf9cb[_0x20cce7(0x2be)] == '87' && _0x5bf9cb['altKey'] && (_0x34ddd5(), _0x5bf9cb['preventDefault']()), _0x5bf9cb[_0x20cce7(0x2be)] == '90' && _0x5bf9cb['altKey'] && (_0x575c12(), _0x5bf9cb[_0x20cce7(0x1fb)]()), _0x5bf9cb[_0x20cce7(0x2be)] == '82' && _0x5bf9cb[_0x20cce7(0x33d)] && (_0x3fa1f5(), _0x5bf9cb[_0x20cce7(0x1fb)]()), _0x5bf9cb[_0x20cce7(0x2be)] == '83' && _0x5bf9cb[_0x20cce7(0x33d)] && (location['href'][_0x20cce7(0x3ab)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x2fb0bd(_0x20cce7(0x203))[_0x20cce7(0x30b)] > 0x0 && _0x2fb0bd(_0x20cce7(0x203))?.['click'](), location[_0x20cce7(0x30d)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x2fb0bd(_0x20cce7(0x255))[_0x20cce7(0x30b)] > 0x0 && _0x2fb0bd(_0x20cce7(0x255))?.[_0x20cce7(0x2eb)](), _0x5bf9cb['preventDefault']());
            }), _0x2fb0bd('body')['on']('change', _0x37c666(0x17a), function (_0x19e3ec) {
                const _0xa5ec7d = _0x37c666;
                var _0x3f25aa = _0x2fb0bd(this)[_0xa5ec7d(0x306)]('id');
                if (_0x3f25aa && _0x216f60[_0x3f25aa] !== undefined) {
                    let _0x46ad96 = _0x2fb0bd(this)[_0xa5ec7d(0x2bf)](_0xa5ec7d(0x3cd));
                    GM_setValue(_0x3f25aa, _0x46ad96), _0x216f60[_0x3f25aa] = _0x46ad96, console[_0xa5ec7d(0x3b7)](_0xa5ec7d(0x1a1), _0x3f25aa, _0x46ad96);
                }
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), _0x37c666(0x2c5), function (_0x1604dd) {
                const _0x5b862b = _0x37c666;
                _0x2fb0bd(this)[_0x5b862b(0x1fd)](_0x5b862b(0x3d0))[_0x5b862b(0x30b)] > 0x0 && _0x1604dd[_0x5b862b(0x1fb)]();
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x1f5), '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)', function () {
                const _0x21c646 = _0x37c666;
                let _0x3a1fd3 = _0x2fb0bd(this)['val']();
                _0x2fb0bd(this)['attr'](_0x21c646(0x38a)) == _0x21c646(0x170) ? _0x2fb0bd(this)[_0x21c646(0x262)]()['val'](_0x3a1fd3) : _0x2fb0bd(this)[_0x21c646(0x23e)]()['val'](_0x3a1fd3), _0x3a1fd3 >= 0x0 && _0x3a1fd3 <= 0x1 && (_0x4f0b72 = _0x3a1fd3, GM_setValue('G_VIDEO_VOLUME', _0x3a1fd3));
            }), _0x2fb0bd('body')['on'](_0x37c666(0x17d), _0x37c666(0x2b2), function (_0xad1aca) {
                const _0x407d93 = _0x37c666;
                if (_0x2fb0bd(this)[_0x407d93(0x306)](_0x407d93(0x38a)) == 'range') {
                    let _0x1b4adb = _0x2fb0bd(this)[_0x407d93(0x316)]();
                    _0x2fb0bd(this)[_0x407d93(0x262)]()[_0x407d93(0x316)](_0x1b4adb);
                } else {
                    let _0x1ee506 = _0x2fb0bd(this)[_0x407d93(0x316)]();
                    _0x1ee506 >= 0x0 && _0x1ee506 <= 0x1 ? _0x2fb0bd(this)[_0x407d93(0x23e)]()[_0x407d93(0x316)](_0x1ee506) : _0x1ee506 < 0x0 ? _0x2fb0bd(this)[_0x407d93(0x316)](0x0) : _0x2fb0bd(this)[_0x407d93(0x316)](0x1);
                }
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x17d), '.IG_SN_DIG\x20#tempWrapper\x20input#date_format', function (_0x1d6bff) {
                const _0x394e3f = _0x37c666;
                GM_setValue(_0x394e3f(0x309), _0x2fb0bd(this)['val']()), _0x2c4e7a = _0x2fb0bd(this)[_0x394e3f(0x316)]();
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), _0x37c666(0x1d6), function (_0x419acf) {
                const _0x2f7649 = _0x37c666;
                _0x419acf[_0x2f7649(0x1fb)](), _0x360447(this);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), '.IG_SN_DIG_BODY\x20.newTab', function () {
                const _0x5d7d26 = _0x37c666;
                if (_0x216f60['FORCE_RESOURCE_VIA_MEDIA'] && _0x216f60[_0x5d7d26(0x3b5)])
                    _0x360447(_0x2fb0bd(this)[_0x5d7d26(0x19b)]()[_0x5d7d26(0x20f)]('a')['first']()[0x0], !![]);
                else {
                    var _0x46bab7 = new URL(_0x2fb0bd(this)[_0x5d7d26(0x19b)]()['children']('a')[_0x5d7d26(0x306)](_0x5d7d26(0x340)));
                    _0x46bab7[_0x5d7d26(0x1b5)] = 'scontent.cdninstagram.com', _0x579cf7(_0x46bab7[_0x5d7d26(0x30d)]);
                }
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), _0x37c666(0x18c), function () {
                const _0x259e57 = _0x37c666;
                let _0x2a5316 = new Date()['getTime']();
                _0x216f60['RENAME_PUBLISH_DATE'] && _0x2fb0bd(this)[_0x259e57(0x19b)]()[_0x259e57(0x20f)]('a')['attr'](_0x259e57(0x284)) && (_0x2a5316 = _0x2fb0bd(this)[_0x259e57(0x19b)]()[_0x259e57(0x20f)]('a')[_0x259e57(0x306)](_0x259e57(0x284)));
                let _0x1fb642 = _0x2fb0bd(this)[_0x259e57(0x19b)]()['children']('a')[_0x259e57(0x306)](_0x259e57(0x186)) ?? _0x2fb0bd(_0x259e57(0x353))[_0x259e57(0x276)]();
                _0x15b992(_0x2fb0bd(this)[_0x259e57(0x19b)]()['children']('a')[_0x259e57(0x1fd)](_0x259e57(0x320))['first']()[_0x259e57(0x306)](_0x259e57(0x1c8)), _0x2fb0bd(this)['parent']()['children']('a')[_0x259e57(0x306)](_0x259e57(0x1cf)), _0x259e57(0x16c), _0x2a5316, _0x259e57(0x291), _0x1fb642);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on']('click', _0x37c666(0x203), function () {
                _0x5a3053(!![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on']('click', _0x37c666(0x182), function (_0x357f9d) {
                const _0x2a14a6 = _0x37c666;
                _0x357f9d[_0x2a14a6(0x1fb)](), _0x5a3053(!![], !![], !![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on']('click', _0x37c666(0x2b7), function () {
                _0x4e372b(!![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), _0x37c666(0x355), function (_0x4e48cf) {
                const _0x1e7e4d = _0x37c666;
                _0x4e48cf[_0x1e7e4d(0x261)](), _0x230aae(!![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), '.IG_DWHISTORY', function () {
                _0x3b4e62(!![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), '.IG_DWHINEWTAB', function (_0x38919f) {
                const _0x4085b8 = _0x37c666;
                _0x38919f[_0x4085b8(0x1fb)](), _0x3b4e62(!![], !![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on']('click', '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x3b8400(!![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), _0x37c666(0x293), function () {
                _0x2f64bd(!![], !![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), _0x37c666(0x39d), function () {
                _0x2f64bd(!![], !![], !![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), _0x37c666(0x2cb), function () {
                _0x2f64bd(!![], ![]);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x22e), _0x37c666(0x25c), function (_0x1176e2) {
                const _0x4b7f30 = _0x37c666;
                if (_0x1176e2[_0x4b7f30(0x3df)] === 0x3 || _0x1176e2[_0x4b7f30(0x3df)] === 0x2) {
                    if (location[_0x4b7f30(0x30d)] === _0x4b7f30(0x3d8) && _0x216f60[_0x4b7f30(0x2e9)]) {
                        _0x1176e2[_0x4b7f30(0x1fb)]();
                        if (_0x2fb0bd(this)['find'](_0x4b7f30(0x312))[_0x4b7f30(0x30b)] > 0x0) {
                            const _0x18a31e = 'https://www.instagram.com/' + _0x2fb0bd(this)[_0x4b7f30(0x20f)]('div')[_0x4b7f30(0x363)]()['text']();
                            _0x1176e2[_0x4b7f30(0x3df)] === 0x2 ? GM_openInTab(_0x18a31e) : location[_0x4b7f30(0x30d)] = _0x18a31e;
                        }
                    }
                }
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x1f5), _0x37c666(0x1bc), function () {
                const _0x5a649b = _0x37c666;
                var _0x4348ff = _0x2fb0bd(this)[_0x5a649b(0x1fd)](_0x5a649b(0x17d))[_0x5a649b(0x2bf)](_0x5a649b(0x3cd));
                _0x2fb0bd(_0x5a649b(0x185))['each'](function () {
                    const _0x28126b = _0x5a649b;
                    _0x2fb0bd(this)[_0x28126b(0x2bf)](_0x28126b(0x3cd), _0x4348ff);
                });
            }), _0x2fb0bd('body')['on'](_0x37c666(0x1f5), '.IG_SN_DIG_BODY\x20.inner_box', function () {
                const _0x22f3bd = _0x37c666;
                var _0x1e5757 = _0x2fb0bd(_0x22f3bd(0x2ac))[_0x22f3bd(0x30b)], _0x422c78 = _0x2fb0bd(_0x22f3bd(0x185))[_0x22f3bd(0x30b)];
                _0x2fb0bd(_0x22f3bd(0x1bc))[_0x22f3bd(0x1fd)](_0x22f3bd(0x17d))[_0x22f3bd(0x2bf)](_0x22f3bd(0x3cd), _0x1e5757 == _0x422c78);
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x2eb), _0x37c666(0x3a8), function () {
                const _0x73c6f9 = _0x37c666;
                let _0x2107d3 = 0x0;
                _0x2fb0bd('.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x73c6f9(0x3d6)](function () {
                    const _0x4e74ed = _0x73c6f9;
                    _0x2fb0bd(this)['prev']()[_0x4e74ed(0x20f)]('input')[_0x4e74ed(0x2bf)]('checked') && (_0x2fb0bd(this)[_0x4e74ed(0x2eb)](), _0x2107d3++);
                }), _0x2107d3 == 0x0 && alert(_0x2e373e('NO_CHECK_RESOURCE'));
            }), _0x2fb0bd(_0x37c666(0x1ec))['on'](_0x37c666(0x1f5), _0x37c666(0x2bd), function () {
                const _0x26311b = _0x37c666;
                GM_setValue('lang', _0x2fb0bd(this)['val']()), _0xfcc1a4 = _0x2fb0bd(this)[_0x26311b(0x316)](), _0xfcc1a4?.['startsWith']('en') || _0x50e786[_0xfcc1a4] != null ? (_0x8d2001(), _0x15ade2()) : _0x14dbde(_0xfcc1a4)[_0x26311b(0x3af)](_0x1ab864 => {
                    _0x50e786[_0xfcc1a4] = _0x1ab864, _0x8d2001(), _0x15ade2();
                })[_0x26311b(0x1f8)](_0x158704 => {
                    const _0x3cbbab = _0x26311b;
                    console[_0x3cbbab(0x193)](_0x3cbbab(0x1fc), _0x158704);
                });
            }), _0x2fb0bd('body')['on'](_0x37c666(0x1f5), _0x37c666(0x390), function () {
                const _0x330b63 = _0x37c666;
                _0x2fb0bd(_0x330b63(0x311))[_0x330b63(0x276)]('' + new Date()['toLocaleString'](_0x2fb0bd(this)['val'](), {
                    'hour12': ![],
                    'second': '2-digit',
                    'minute': _0x330b63(0x21e),
                    'hour': _0x330b63(0x21e),
                    'month': '2-digit',
                    'day': _0x330b63(0x21e),
                    'year': _0x330b63(0x31c)
                })[_0x330b63(0x305)]('/', '-')), LOCATE_DATE_FORMAT = _0x2fb0bd(this)[_0x330b63(0x316)](), GM_setValue(_0x330b63(0x1f0), _0x2fb0bd(this)[_0x330b63(0x316)]());
            }), _0x2fb0bd('body')['on']('click', _0x37c666(0x3bb), function () {
                const _0x43b4c8 = _0x37c666;
                _0x2fb0bd(_0x43b4c8(0x2cf))[_0x43b4c8(0x3d6)](function () {
                    const _0x54378d = _0x43b4c8;
                    _0x2fb0bd(this)[_0x54378d(0x2eb)]();
                });
            });
            const _0x57c49c = new MutationObserver(_0x1a9355 => {
                const _0x32aa4a = _0x37c666;
                for (const _0x59c0c3 of _0x1a9355) {
                    _0x59c0c3[_0x32aa4a(0x38a)] === _0x32aa4a(0x181) && _0x59c0c3[_0x32aa4a(0x2a3)][_0x32aa4a(0x354)](_0x3145d9 => {
                        const _0x5f5d5e = _0x32aa4a, _0xc38f23 = _0x2fb0bd(_0x3145d9)[_0x5f5d5e(0x1fd)](_0x5f5d5e(0x38b));
                        if (_0xc38f23['length'] > 0x0) {
                            _0x216f60['MODIFY_VIDEO_VOLUME'] && _0xc38f23['each'](function () {
                                const _0x463492 = _0x5f5d5e;
                                _0x2fb0bd(this)['on'](_0x463492(0x376), function () {
                                    const _0x4718f4 = _0x463492;
                                    !_0x2fb0bd(this)['data'](_0x4718f4(0x34b)) && (_0x2fb0bd(this)[_0x4718f4(0x306)](_0x4718f4(0x2ae), !![]), this['volume'] = _0x4f0b72, _0x3bd434('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x5f5d5e(0x39b)][_0x5f5d5e(0x3ab)](/^(\/stories\/)/ig)) {
                                const _0x1435be = location[_0x5f5d5e(0x39b)][_0x5f5d5e(0x3ab)](/^(\/stories\/highlights\/)/ig) != null, _0x58518d = _0x1435be ? _0x5f5d5e(0x259) : _0x5f5d5e(0x1b4);
                                _0xc38f23[_0x5f5d5e(0x3d6)](function () {
                                    const _0x11ca12 = _0x5f5d5e;
                                    _0x2fb0bd(this)['on'](_0x11ca12(0x196), function () {
                                        const _0x248034 = _0x11ca12;
                                        if (!_0x2fb0bd(this)[_0x248034(0x270)](_0x248034(0x344))) {
                                            let _0x21fe48 = _0x2fb0bd(this);
                                            _0x21fe48[_0x248034(0x325)](_0x248034(0x177))[_0x248034(0x286)](function () {
                                                const _0x5e5380 = _0x248034;
                                                return _0x2fb0bd(this)[_0x5e5380(0x269)]() == _0x21fe48['width']();
                                            })[_0x248034(0x1fd)](_0x248034(0x2a2))[_0x248034(0x30b)] === 0x0 ? (_0x2fb0bd(this)['attr'](_0x248034(0x32f), !![]), _0x1435be ? _0x3b8400(![]) : _0x4e372b(![]), _0x3bd434('(' + _0x58518d + ')', _0x248034(0x32d))) : (_0x2fb0bd(this)[_0x248034(0x306)](_0x248034(0x32f), !![]), _0x3bd434('(' + _0x58518d + ')', _0x248034(0x35b)));
                                        }
                                    });
                                    var _0x49d68f = _0x2fb0bd(this);
                                    if (_0x216f60['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x49d68f[_0x11ca12(0x270)](_0x11ca12(0x364))) {
                                            _0x3bd434('(' + _0x58518d + ')', _0x11ca12(0x249)), this[_0x11ca12(0x232)] = _0x4f0b72, _0x49d68f['on'](_0x11ca12(0x3dd), function () {
                                                const _0x1ea591 = _0x11ca12;
                                                this[_0x1ea591(0x232)] = _0x4f0b72;
                                            });
                                            let _0x2e3c71 = _0x49d68f[_0x11ca12(0x325)](_0x11ca12(0x27e))[_0x11ca12(0x286)](function () {
                                                    const _0x47f487 = _0x11ca12;
                                                    return _0x2fb0bd(this)['attr'](_0x47f487(0x377)) == null && _0x2fb0bd(this)[_0x47f487(0x306)](_0x47f487(0x1d0)) == null;
                                                })[_0x11ca12(0x366)](), _0x23b22d = _0x2e3c71[_0x11ca12(0x262)]();
                                            _0x23b22d[_0x11ca12(0x38f)]();
                                            let _0x31c23b = _0x2e3c71[_0x11ca12(0x1fd)](_0x11ca12(0x39c));
                                            _0x31c23b['hide']();
                                            const _0x5ccb80 = function (_0x3934da) {
                                                const _0x2f8ca2 = _0x11ca12;
                                                _0x3934da[_0x2f8ca2(0x1fb)](), _0x49d68f[_0x2f8ca2(0x274)]('z-index', '2'), _0x49d68f[_0x2f8ca2(0x306)](_0x2f8ca2(0x364), !![]), _0x31c23b['hide'](), _0x23b22d['hide'](), _0x3300c3(_0x49d68f, _0x49d68f[_0x2f8ca2(0x325)](_0x2f8ca2(0x177))['filter'](function () {
                                                    const _0x35a492 = _0x2f8ca2;
                                                    return _0x2fb0bd(this)['width']() == _0x49d68f[_0x35a492(0x269)]();
                                                })[_0x2f8ca2(0x366)](), _0x58518d, _0x2f8ca2(0x1dd));
                                            };
                                            _0x49d68f['parent']()[_0x11ca12(0x1fd)](_0x11ca12(0x1e7))['on'](_0x11ca12(0x219), _0x5ccb80), _0x31c23b['on'](_0x11ca12(0x219), _0x5ccb80), _0x23b22d['on'](_0x11ca12(0x219), _0x5ccb80), _0x49d68f['on'](_0x11ca12(0x219), function (_0xef8e25) {
                                                const _0x248c66 = _0x11ca12;
                                                _0xef8e25[_0x248c66(0x1fb)](), _0x49d68f[_0x248c66(0x274)]('z-index', '-1'), _0x49d68f[_0x248c66(0x33e)](_0x248c66(0x364)), _0x23b22d['show'](), _0x31c23b[_0x248c66(0x1d8)](), _0x3300c3(_0x49d68f, _0x49d68f[_0x248c66(0x325)](_0x248c66(0x177))[_0x248c66(0x286)](function () {
                                                    const _0x7351fa = _0x248c66;
                                                    return _0x2fb0bd(this)[_0x7351fa(0x269)]() == _0x49d68f[_0x7351fa(0x269)]();
                                                })[_0x248c66(0x366)](), _0x58518d, _0x248c66(0x1dd));
                                            }), _0x49d68f['on'](_0x11ca12(0x2a0), function () {
                                                const _0x46ac16 = _0x11ca12;
                                                let _0x29fcfc = _0x2e3c71['parent']()[_0x46ac16(0x1fd)](_0x46ac16(0x321))['parents']('[role=\x22button\x22]')[_0x46ac16(0x366)]();
                                                var _0xa602ba = _0x29fcfc[_0x46ac16(0x1fd)]('svg\x20>\x20path[d^=\x22M16.636\x22]')['length'] === 0x0;
                                                this[_0x46ac16(0x3ac)] != _0xa602ba && (this[_0x46ac16(0x232)] = _0x4f0b72, _0x29fcfc?.[_0x46ac16(0x2eb)]()), _0x2fb0bd(this)[_0x46ac16(0x306)](_0x46ac16(0x2bb)) && (_0x4f0b72 = this[_0x46ac16(0x232)], GM_setValue('G_VIDEO_VOLUME', this[_0x46ac16(0x232)])), this[_0x46ac16(0x232)] == _0x4f0b72 && _0x2fb0bd(this)[_0x46ac16(0x306)](_0x46ac16(0x2bb), !![]);
                                            }), _0x49d68f['css']('position', _0x11ca12(0x2cd)), _0x49d68f[_0x11ca12(0x274)](_0x11ca12(0x3bd), '2'), _0x49d68f[_0x11ca12(0x306)](_0x11ca12(0x176), !![]), _0x49d68f[_0x11ca12(0x306)](_0x11ca12(0x364), !![]);
                                        }
                                    } else
                                        _0x3300c3(_0x49d68f, _0x49d68f[_0x11ca12(0x325)]('div[style][class]')['filter'](function () {
                                            return _0x2fb0bd(this)['width']() == _0x49d68f['width']();
                                        })['first'](), _0x58518d, 'vertical');
                                });
                            }
                        }
                    });
                }
            });
            _0x57c49c['observe'](_0x2fb0bd(_0x37c666(0x229))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));