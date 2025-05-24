// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.5.5
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

function a0_0x1d28() {
    const _0x27e81e = [
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'getMediaInfo()',
        'data-ih-locale-title',
        'users',
        'transform\x200.15s\x20ease',
        'px)\x20scale(',
        'instagram.com/reels/',
        'hd_profile_pic_url_info',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        'config_width',
        'status',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'getTime',
        'data-ih-locale',
        'Modify\x20the\x20EXIF\x20​​properties\x20of\x20the\x20image\x20resource\x20to\x20place\x20the\x20post\x20link\x20in\x20it.',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        'Preference\x20Settings',
        'faild',
        'getTranslationText()',
        '367OLwsHw',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'deg)',
        'div.volume_slider\x20input',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        '.IG_NEWTAB_MAIN',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'GL_referrer',
        'show',
        'reject',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'range',
        'blob',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'body\x20>\x20div\x20section._ac0a',
        'selected',
        'Feedback\x20Options',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'position',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'src',
        'Download\x20Selected\x20Resources',
        'mousemove.igHelper',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'SELECT_AND_COPY',
        'padEnd',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'includes',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'video_versions',
        '20000',
        'video_resources',
        'avatar',
        'volume',
        'response',
        'body\x20>\x20div\x20section:visible._ac0a',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        '#article-id',
        '474084BNTUcg',
        'data-loop',
        '%22}',
        'x1s85apg',
        'hidden',
        'VID',
        'user\x20settings',
        'transform',
        'Request\x20with:',
        '</span>\x20<input\x20id=\x22',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        '/accounts/login',
        'Reload\x20Script',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        '.IG_DW_MAIN',
        'getBoundingClientRect',
        'volumechange',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'toLowerCase',
        'time[datetime]',
        'replace',
        '/stories/highlights/',
        'ig_cache_key',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'css',
        'fail',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'GM_unregisterMenuCommand',
        'lang',
        'off',
        'fromCharCode',
        'style',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'LOAD_BLOB_RELOAD',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'registerMenuIds',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'pageLoaded',
        '.IG_POPUP_DIG',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'VP8X',
        'muted',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'data-name',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'x1iyjqo2',
        'post',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'mousedown',
        'highlights',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        '\x22]\x20span',
        'FORCE_RESOURCE_VIA_MEDIA',
        'play\x20playing',
        'arrayBuffer',
        '.IG_DWHISTORY_ALL',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '.IG_DWHISTORY_THUMBNAIL',
        'NOTICE_UPDATE_TITLE',
        'data-remove-thumbnail',
        'https://www.instagram.com/p/',
        'modify-thumbnail',
        'user',
        'Found\x20insert\x20point',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '.IG_POPUP_DIG\x20input',
        'match',
        'updatenotification',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'stp',
        '--ig-track-progress:\x20',
        'div#scrollview',
        'LOCALE_MANIFEST',
        '.txt',
        'cursor',
        'shortcode',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'error',
        'matchAll',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'pageY',
        '</p>',
        '/followers/',
        'stopPropagation',
        'toISOString',
        'DOWNLOAD_ALL',
        'video\x20+\x20div\x20>\x20div',
        'Feedback',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'GET',
        '<a\x20datetime=\x22',
        'width',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'fadeOut',
        'data-modify',
        'items',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '#tempWrapper',
        '#scrollWrapper',
        'translate(',
        'split',
        'MODIFY_VIDEO_VOLUME',
        'en-US',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'wheel',
        'svg',
        'replaceAll',
        'navigator',
        '0\x200',
        'disconnect',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        'pathname',
        'G_VIDEO_VOLUME',
        'there\x20is\x20no\x20new\x20update',
        'trigger',
        'Wololo!\x20New\x20version\x20released.',
        'stringify',
        'grab',
        '#imageViewer\x20>\x20section',
        'data-path',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'get',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_transform\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_rotate\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20</div>',
        'observe',
        ':hidden',
        'LOAD_BLOB_MULTIPLE',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'pageX',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'display_url',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'which',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'controls',
        '_ac3q',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'MODIFY_RESOURCE_EXIF',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'parent',
        'html',
        'setUint32',
        'tagName',
        'div',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'ALL_CHECK',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'getBlobMediaWithQuery()',
        'prop',
        '0px',
        'div.volume_slider',
        '.IG_DWSTORY_ALL',
        'getMonth',
        'appendChild',
        'ig_helper_notice',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'innerHTML',
        'ended',
        'script',
        'DISABLE_VIDEO_LOOPING',
        'map',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        '/info/',
        'catch',
        'filter',
        'srcset',
        'isStory',
        'z-index',
        'GL_username',
        'REPORT_FORK',
        '.IG_THUMBNAIL_MAIN',
        'endsWith',
        'HTML5_VIDEO_CONTROL',
        'append',
        'reel',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'a[href^=\x22/\x22]',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'FULLSCREEN',
        'hasReferrer',
        'subarray',
        'div[style][class]',
        'highlight',
        'Logger:\x0a',
        'DIV',
        'Debug\x20Window',
        'Image',
        '\x0a-----\x0a\x0aLocation:\x20',
        'scontent.cdninstagram.com',
        'grabbing',
        'regenerated',
        'text',
        'GL_postPath',
        'www.',
        'push',
        'createElement',
        'substr',
        'byteLength',
        'searchParams',
        'https://i.instagram.com/api/v1/users/',
        '__typename',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'is_video',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'Donate',
        '2210765euIjyS',
        'time',
        'taken_at_timestamp',
        'SKIP_VIEW_STORY_CONFIRM',
        'boolean',
        'removeAttr',
        'target',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'div#splash-screen',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        '37px',
        'owner',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'length',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'keys',
        'close',
        '[data-ih-locale]',
        'remove-thumbnail',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'bottom',
        'getBlobMediaWithQueryID()',
        'NEW_TAB',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'G_RENAME_FORMAT',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'absolute',
        'Settings',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        '</div>',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'Show\x20DOM\x20Tree',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'deltaY',
        'relative',
        'NOPATH',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        '</a></button>',
        '</span></div>',
        '\x22\x20class=\x22IG_REELS\x22>',
        '<input\x20value=\x22',
        'CLOSE',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '.IG_DWSTORY',
        '</a></button><br/>',
        'smooth',
        'first',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'class',
        'rotate(',
        'WEBP',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        '#rotate_left',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'Fetch\x20from\x20memory\x20cache:',
        'videoVolume',
        '.button_wrapper',
        'section\x20>\x20main[role=\x22main\x22]',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'getUint8',
        'code',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'CHECK_UPDATE_MENU',
        '</span></label>',
        'copy',
        'currentURL',
        'https://www.instagram.com/',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        '#rotate_right',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'RELOAD_SCRIPT',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'input',
        'video[class]',
        '\x22\x20data-ih-locale-title=\x22',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        'downloadURL',
        'parse',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'IMG',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'DW_ALL',
        'Main\x20Timer',
        'from',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'reduce',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'assign',
        'addedNodes',
        'parents',
        'version',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'Exif\x00\x00',
        'getPostOwner()',
        'mp4',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'slice',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'SCROLL_BUTTON',
        'data-snig',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'hide',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'url',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_right\x22\x20style=\x22transform:\x20scaleX(-1);cursor:\x20pointer;\x22>',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'getMinutes',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'INTERNAL_CSS',
        'addClass',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'Remote\x20version:\x20',
        'host',
        'THUMBNAIL',
        'padStart',
        'Cannot\x20find\x20video\x20URL.',
        'attr',
        'trim',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'Modify\x20Resource\x20EXIF\x20​​Properties',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'remove',
        'node',
        'a[href^=\x22/p/\x22]',
        'Select\x20All',
        'NONE',
        '5188jxYTeE',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'vertical',
        'center',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'stories',
        '</button>',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'https://www.instagram.com/reels/',
        'mouseenter',
        'children',
        'undefined\x20username',
        'next',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'data-completed',
        'thumbnail',
        'isProfile',
        'data-type',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'Found\x20post\x20container',
        'firstStarted',
        '\x22\x20data-globalIndex=\x22',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'loadstart',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'href',
        'display_resources',
        'a[href]',
        'after',
        'video\x20+\x20div',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        '3736AxYmeN',
        '._acay',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'originalEvent',
        'GL_dataCache',
        '6OiyRFN',
        'RIFF',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'undefined',
        'candidates',
        'download',
        '\x22\x20class=\x22newTab\x22>',
        'object',
        'Thumbnail\x20button\x20already\x20inserted',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'hasClass',
        'val',
        'x1lix1fw',
        'reels_media',
        'contextmenu',
        'startsWith',
        'div[class]',
        'prev',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'data-controls',
        '.IG_REELS',
        'text/plain',
        'getFullYear',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'top',
        'click',
        'IG\x20Debug\x20DOM\x20Tree',
        'buffer',
        'locale',
        '\x22\x20datetime=\x22',
        'video_url',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'getDate',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'onHighlightsStory',
        'DOWNLOAD',
        'DOMTree-',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        '.IG_DWPROFILE',
        'log',
        'G_CHECK_TIMESTAMP',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        '6344429RSuXVJ',
        'Manually\x20inserting\x20thumbnail\x20button',
        '.IG_DW_ALL_MAIN',
        '/p/',
        '.IG_DWHISTORY',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        '<option\x20value=\x22',
        'EXIF',
        '\x22\x20/>',
        'jpg',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'forEach',
        'onReadyMyDW()\x20Timer',
        'wrap',
        '.videoThumbnail',
        'username',
        'getUserIdWithAgent()',
        'height',
        'feedback_message',
        '\x20-</a>',
        'GL_registerEventList',
        'fileRenameFormat',
        'setUint16',
        '</span>\x20',
        '<a\x20media-id=\x22',
        'div\x20>\x20ul._acay',
        'shortcode_media',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        '</option>',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'data-href',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '_INTRO',
        'will-change',
        'transition',
        'createMediaListDOM',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        '\x22><span\x20data-ih-locale=\x22',
        'transform-origin',
        'loop',
        'query_id',
        '#imageViewer',
        'DONATE',
        '.IG_IMAGE_VIEWER',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'SETTING',
        'XMP\x20',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'GL_repeat',
        'clientY',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'image_versions2',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'data-modify-thumbnail',
        'each',
        '.IG_POPUP_DIG\x20.globalSettings',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        '.xpgaw4o',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '10827pGUmlb',
        'getUserId()',
        'min',
        'THUMBNAIL_INTRO',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'pause',
        'GL_observer',
        'getUserHighSizeProfile()',
        'Not\x20a\x20JPEG\x20or\x20WEBP',
        'data-username',
        'profile_pic_url',
        'article',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]',
        'main\x20timer\x20re-register\x20completed',
        '.IG_DWHINEWTAB',
        '#iv_transform',
        '._acnb',
        'max',
        'GL_logger',
        'select',
        'DIRECT_DOWNLOAD_ALL',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'change',
        '*/*',
        'getHighlightStories()',
        'zoom-in',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'sort',
        'floor',
        'mouseup',
        'TURN_DEG',
        'last',
        'Disable\x20Video\x20Auto-looping',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'GraphVideo',
        'script[type=\x22application/json\x22]',
        'query_hash',
        'datetime',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        '._aagv\x20img',
        '.circle_wrapper',
        '911748DLCplq',
        '<p\x20id=\x22_SNLOAD\x22>',
        'userLanguage',
        'div:last-child',
        'preventDefault',
        'edges',
        'div[id^=\x22mount\x22]',
        'div\x20>\x20ul\x20li._acaz',
        'textContent',
        'REPORT_DISCORD',
        'isIntersecting',
        'find',
        'Failed\x20to\x20strip\x20EXIF\x20and/or\x20attach\x20post\x20URL\x20to\x20EXIF.',
        'image/jpeg',
        'reels',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        '4PTCrYz',
        'modify',
        'title',
        '[data-ih-locale-title]',
        'DOWNLOAD_DOM_TREE',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        '\x22\x20/></div>',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        '.IG_DWSTORY_THUMBNAIL',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'carousel_media',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'splice',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'Loading\x20Blob\x20Media...',
        'tempFetchRateLimit',
        'image/webp',
        'https://ko-fi.com/snkoarashi',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        'media-id',
        'finalUrl',
        'then',
        'set',
        'GraphImage',
        'keydown',
        'createObjectURL',
        'getStories()',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'edge_sidecar_to_children',
        '.json',
        '#iv_close',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'checked',
        'childList',
        'data',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'label',
        'left',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'px,\x20',
        'altKey',
        'isArray',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'Video',
        'isHomepage',
        'video',
        'AUTO_RENAME',
        'load',
        'body',
        '.IG_REELS_NEWTAB',
        '[data-snig]',
        'img',
        'Download\x20All\x20Resources',
        'toString',
        'removeClass',
        'img[referrerpolicy]',
        '.IG_REELS_THUMBNAIL',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '253YUntPZ',
        'div[role=\x22presentation\x22]',
        '[role=\x22button\x22]',
        'before',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'taken_at',
        '.IG_POPUP_DIG\x20#post_info',
        'RENAME_PUBLISH_DATE',
        'type',
        'getUint16',
        'video\x20volume\x20changed\x20#slider',
        'LOAD_BLOB_ONE',
        'dragstart\x20drop',
        '.IG_DWNEWTAB',
        'message',
        '13164330AYSJGi',
        '<div></div>',
        'NO_VID_URL',
        'a[data-needed=\x22direct\x22]'
    ];
    a0_0x1d28 = function () {
        return _0x27e81e;
    };
    return a0_0x1d28();
}
function a0_0xa48a(_0x56c875, _0xa49c0b) {
    const _0x1d280b = a0_0x1d28();
    return a0_0xa48a = function (_0xa48a6e, _0x121cdd) {
        _0xa48a6e = _0xa48a6e - 0x1aa;
        let _0x24e92c = _0x1d280b[_0xa48a6e];
        return _0x24e92c;
    }, a0_0xa48a(_0x56c875, _0xa49c0b);
}
(function (_0x4bbb97, _0x3d55f8) {
    const _0x56c075 = a0_0xa48a, _0x553489 = _0x4bbb97();
    while (!![]) {
        try {
            const _0xdcd64a = parseInt(_0x56c075(0x39e)) / 0x1 * (parseInt(_0x56c075(0x25f)) / 0x2) + -parseInt(_0x56c075(0x32a)) / 0x3 + parseInt(_0x56c075(0x33a)) / 0x4 * (-parseInt(_0x56c075(0x1d4)) / 0x5) + -parseInt(_0x56c075(0x289)) / 0x6 * (parseInt(_0x56c075(0x2ba)) / 0x7) + parseInt(_0x56c075(0x283)) / 0x8 * (-parseInt(_0x56c075(0x2fd)) / 0x9) + parseInt(_0x56c075(0x387)) / 0xa + parseInt(_0x56c075(0x376)) / 0xb * (parseInt(_0x56c075(0x3c8)) / 0xc);
            if (_0xdcd64a === _0x3d55f8)
                break;
            else
                _0x553489['push'](_0x553489['shift']());
        } catch (_0x5b5745) {
            _0x553489['push'](_0x553489['shift']());
        }
    }
}(a0_0x1d28, 0xeb13b), function (_0x4f7051) {
    setTimeout(() => {
        'use strict';
        const _0x8bfcd5 = a0_0xa48a;
        const _0x38b6ed = {
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
            }, _0x6aab0c = [
                _0x8bfcd5(0x37f),
                _0x8bfcd5(0x3ee),
                _0x8bfcd5(0x2b5)
            ], _0x44169f = {
                'DOWNLOAD': _0x8bfcd5(0x2b9),
                'NEW_TAB': _0x8bfcd5(0x2e8),
                'THUMBNAIL': _0x8bfcd5(0x2e9),
                'DOWNLOAD_ALL': _0x8bfcd5(0x43a),
                'CLOSE': _0x8bfcd5(0x457),
                'FULLSCREEN': _0x8bfcd5(0x444),
                'TURN_DEG': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#1f1f1f\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7.34\x206.41L.86\x2012.9l6.49\x206.48\x206.49-6.48-6.5-6.49zM3.69\x2012.9l3.66-3.66L11\x2012.9l-3.66\x203.66-3.65-3.66zm15.67-6.26C17.61\x204.88\x2015.3\x204\x2013\x204V.76L8.76\x205\x2013\x209.24V6c1.79\x200\x203.58.68\x204.95\x202.05\x202.73\x202.73\x202.73\x207.17\x200\x209.9C16.58\x2019.32\x2014.79\x2020\x2013\x2020c-.97\x200-1.94-.21-2.84-.61l-1.49\x201.49C10.02\x2021.62\x2011.51\x2022\x2013\x2022c2.3\x200\x204.61-.88\x206.36-2.64\x203.52-3.51\x203.52-9.21\x200-12.72z\x22/></svg>'
            }, _0x53bd7a = 0xfa, _0x26f668 = GM_getResourceText(_0x8bfcd5(0x24b)), _0x151ea2 = JSON[_0x8bfcd5(0x226)](GM_getResourceText(_0x8bfcd5(0x413)));
        var _0x4116c6 = {
            'videoVolume': GM_getValue(_0x8bfcd5(0x43c)) ? GM_getValue('G_VIDEO_VOLUME') : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue('G_RENAME_FORMAT') ? GM_getValue(_0x8bfcd5(0x1f1)) : _0x8bfcd5(0x3a9),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x8bfcd5(0x3e6)) || navigator['language'] || navigator[_0x8bfcd5(0x32c)],
            'currentURL': location[_0x8bfcd5(0x27d)],
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
                _0x4b6329();
            })
        };
        _0x310e33(), GM_addStyle(_0x26f668), _0x30dcb8(), _0x2e269a(_0x4116c6[_0x8bfcd5(0x3e6)])[_0x8bfcd5(0x351)](_0x415d2e => {
            const _0x291464 = _0x8bfcd5;
            _0x4116c6[_0x291464(0x2ac)][_0x4116c6[_0x291464(0x3e6)]] = _0x415d2e, _0x28a084(), _0x30dcb8(), _0x6260c0(0x12c);
        })[_0x8bfcd5(0x476)](_0x18f171 => {
            const _0x3982de = _0x8bfcd5;
            _0x30dcb8(), _0x6260c0(0x12c), !_0x4116c6[_0x3982de(0x3e6)][_0x3982de(0x299)]('en') && console[_0x3982de(0x418)]('getTranslationText\x20catch\x20error:', _0x18f171);
        }), _0x128583('Script\x20Loaded', GM_info['script']['name'], 'version:', GM_info[_0x8bfcd5(0x471)][_0x8bfcd5(0x237)]);
        var _0x3b6db2 = setInterval(function () {
            const _0x25fb4b = _0x8bfcd5;
            if (_0x4f7051(_0x25fb4b(0x1dc))[_0x25fb4b(0x1e2)] > 0x0 && !_0x4f7051(_0x25fb4b(0x1dc))['is'](_0x25fb4b(0x449)) || location[_0x25fb4b(0x43b)]['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location['hostname'][_0x25fb4b(0x299)](_0x25fb4b(0x1c6)) || (location[_0x25fb4b(0x43b)]['endsWith'](_0x25fb4b(0x41d)) || location[_0x25fb4b(0x43b)][_0x25fb4b(0x1b0)]('/following/')) && _0x4f7051(_0x25fb4b(0x30b))[_0x25fb4b(0x1e2)] > 0x0) {
                _0x4116c6[_0x25fb4b(0x3ef)] = ![];
                return;
            }
            if (_0x4116c6['currentURL'] != location['href'] || !_0x4116c6[_0x25fb4b(0x275)] || !_0x4116c6[_0x25fb4b(0x3ef)]) {
                console[_0x25fb4b(0x2b7)](_0x25fb4b(0x22f), 'trigging'), clearInterval(_0x4116c6[_0x25fb4b(0x2ee)]), _0x4116c6['pageLoaded'] = ![], _0x4116c6[_0x25fb4b(0x275)] = !![], _0x4116c6['currentURL'] = location[_0x25fb4b(0x27d)], _0x4116c6[_0x25fb4b(0x304)]['disconnect']();
                if (location[_0x25fb4b(0x27d)]['startsWith'](_0x25fb4b(0x407)) || location[_0x25fb4b(0x43b)][_0x25fb4b(0x40d)](/^\/(.*?)\/(p|reel)\//ig) || location['href'][_0x25fb4b(0x299)]('https://www.instagram.com/reel/')) {
                    _0x4116c6[_0x25fb4b(0x288)]['stories'] = {}, _0x4116c6[_0x25fb4b(0x288)]['highlights'] = {}, _0x128583('isDialog');
                    var _0x295495 = setInterval(() => {
                        const _0x51db20 = _0x25fb4b;
                        _0x4f7051(_0x51db20(0x2da))['length'] > 0x0 && (clearInterval(_0x295495), setTimeout(() => {
                            _0x4b6329(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x4116c6['pageLoaded'] = !![];
                }
                location['href']['startsWith'](_0x25fb4b(0x269)) && (_0x128583('isReels'), setTimeout(() => {
                    _0x24ba99(![]);
                }, 0x96), _0x4116c6['pageLoaded'] = !![]);
                if (location[_0x25fb4b(0x27d)]['split']('?')[0x0] == _0x25fb4b(0x21b)) {
                    _0x4116c6['GL_dataCache'][_0x25fb4b(0x266)] = {}, _0x4116c6[_0x25fb4b(0x288)][_0x25fb4b(0x3fc)] = {};
                    let _0x324f9c = _0x4116c6[_0x25fb4b(0x3a5)]?.[_0x25fb4b(0x40d)](/^\/(stories|highlights)\//ig) != null;
                    _0x128583(_0x25fb4b(0x368), _0x324f9c), setTimeout(() => {
                        const _0x546938 = _0x25fb4b;
                        _0x4b6329(![], _0x324f9c);
                        const _0x4a4017 = _0x4f7051('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.[_0x546938(0x45c)]()[0x0];
                        _0x4a4017 && _0x4116c6[_0x546938(0x304)]['observe'](_0x4a4017, { 'childList': !![] });
                    }, 0x96), _0x4116c6[_0x25fb4b(0x3ef)] = !![];
                }
                _0x4f7051('header\x20>\x20*[class]:first-child\x20img[alt]')[_0x25fb4b(0x1e2)] && location['pathname'][_0x25fb4b(0x40d)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname'][_0x25fb4b(0x40d)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x128583(_0x25fb4b(0x271)), setTimeout(() => {
                    _0x28ff59(![]);
                }, 0x96), _0x4116c6[_0x25fb4b(0x3ef)] = !![]);
                if (!_0x4116c6['pageLoaded']) {
                    if (location[_0x25fb4b(0x27d)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x4116c6['GL_dataCache']['highlights'] = {}, _0x128583('isHighlightsStory'), _0x175c33(![]), _0x4116c6['GL_repeat'] = setInterval(() => {
                            _0x56a120(![]);
                        }, _0x53bd7a), _0x4f7051('.IG_DWHISTORY')[_0x25fb4b(0x1e2)] && setTimeout(() => {
                            const _0x44d6b8 = _0x25fb4b;
                            if (_0x38b6ed[_0x44d6b8(0x1d7)]) {
                                var _0xebba28 = _0x4f7051(_0x44d6b8(0x23f))['filter'](function () {
                                    const _0x51ab0f = _0x44d6b8;
                                    return _0x4f7051(this)[_0x51ab0f(0x26b)]()[_0x51ab0f(0x1e2)] === 0x0 && this[_0x51ab0f(0x332)]['trim']() !== '';
                                });
                                _0xebba28?.[_0x44d6b8(0x43e)](_0x44d6b8(0x2a9));
                            }
                            _0x4116c6['pageLoaded'] = !![];
                        }, 0x96);
                    else
                        location[_0x25fb4b(0x27d)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x128583(_0x25fb4b(0x1ab)), _0x4f7051(_0x25fb4b(0x255))[_0x25fb4b(0x1e2)] > 0x0 && (_0x4f7051('.IG_DWSTORY')['remove'](), _0x4f7051(_0x25fb4b(0x385))[_0x25fb4b(0x25a)](), _0x4f7051('.IG_DWSTORY_THUMBNAIL')[_0x25fb4b(0x1e2)] && _0x4f7051(_0x25fb4b(0x343))[_0x25fb4b(0x25a)](), _0x2e6308(![]), setTimeout(() => {
                            _0x2e6308(![]);
                        }, 0x96)), _0x4f7051(_0x25fb4b(0x204))[_0x25fb4b(0x1e2)] && setTimeout(() => {
                            const _0x18462e = _0x25fb4b;
                            if (_0x38b6ed[_0x18462e(0x1d7)]) {
                                var _0x373e27 = _0x4f7051(_0x18462e(0x23f))[_0x18462e(0x477)](function () {
                                    const _0x11407c = _0x18462e;
                                    return _0x4f7051(this)['children']()[_0x11407c(0x1e2)] === 0x0 && this[_0x11407c(0x332)][_0x11407c(0x254)]() !== '';
                                });
                                _0x373e27?.[_0x18462e(0x2a9)]();
                            }
                            _0x4116c6[_0x18462e(0x3ef)] = !![];
                        }, 0x96)) : (_0x4116c6[_0x25fb4b(0x3ef)] = ![], _0x4f7051(_0x25fb4b(0x204))[_0x25fb4b(0x1e2)] && _0x4f7051('.IG_DWSTORY')[_0x25fb4b(0x25a)](), _0x4f7051('.IG_DWSTORY_ALL')[_0x25fb4b(0x1e2)] && _0x4f7051(_0x25fb4b(0x46a))[_0x25fb4b(0x25a)](), _0x4f7051(_0x25fb4b(0x385))[_0x25fb4b(0x1e2)] && _0x4f7051('.IG_DWNEWTAB')[_0x25fb4b(0x25a)](), _0x4f7051(_0x25fb4b(0x343))[_0x25fb4b(0x1e2)] && _0x4f7051(_0x25fb4b(0x343))[_0x25fb4b(0x25a)](), _0x4f7051(_0x25fb4b(0x2be))['length'] && _0x4f7051(_0x25fb4b(0x2be))['remove'](), _0x4f7051(_0x25fb4b(0x402))[_0x25fb4b(0x1e2)] && _0x4f7051(_0x25fb4b(0x402))[_0x25fb4b(0x25a)](), _0x4f7051('.IG_DWHINEWTAB')[_0x25fb4b(0x1e2)] && _0x4f7051(_0x25fb4b(0x30d))[_0x25fb4b(0x25a)](), _0x4f7051('.IG_DWHISTORY_THUMBNAIL')[_0x25fb4b(0x1e2)] && _0x4f7051('.IG_DWHISTORY_THUMBNAIL')[_0x25fb4b(0x25a)]());
                }
                _0x6260c0(0x12c), _0x4116c6[_0x25fb4b(0x3a5)] = new URL(location[_0x25fb4b(0x27d)])[_0x25fb4b(0x43b)];
            }
        }, _0x53bd7a);
        async function _0x344c1b() {
            const _0x1c9bb4 = _0x8bfcd5;
            _0x5ac088(!![]);
            let _0x5d3764 = new Date()[_0x1c9bb4(0x397)](), _0x22ad31 = Math[_0x1c9bb4(0x31d)](_0x5d3764 / 0x3e8), _0x49ff21 = location['href'][_0x1c9bb4(0x3dc)](/\/$/ig, '')[_0x1c9bb4(0x430)]('/')['at'](-0x1), _0x491b90 = await _0x185a4a(_0x49ff21), _0x42179d = _0x491b90[_0x1c9bb4(0x35e)][_0x1c9bb4(0x297)][0x0][_0x1c9bb4(0x1e0)][_0x1c9bb4(0x2c9)], _0x228fcc = 0x0;
            _0x4a5c74(_0x228fcc, _0x491b90[_0x1c9bb4(0x35e)][_0x1c9bb4(0x297)][0x0][_0x1c9bb4(0x42a)][_0x1c9bb4(0x1e2)]), _0x491b90[_0x1c9bb4(0x35e)][_0x1c9bb4(0x297)][0x0][_0x1c9bb4(0x42a)][_0x1c9bb4(0x2c5)]((_0x423976, _0x16f478) => {
                setTimeout(() => {
                    const _0x374455 = a0_0xa48a;
                    _0x38b6ed['RENAME_PUBLISH_DATE'] && (_0x22ad31 = _0x423976[_0x374455(0x1d6)]), _0x423976['display_resources'][_0x374455(0x31c)](function (_0x3c2a21, _0x26388f) {
                        const _0x367e75 = _0x374455;
                        if (_0x3c2a21[_0x367e75(0x394)] < _0x26388f[_0x367e75(0x394)])
                            return 0x1;
                        if (_0x3c2a21['config_width'] > _0x26388f[_0x367e75(0x394)])
                            return -0x1;
                        return 0x0;
                    }), _0x423976[_0x374455(0x1cf)] ? _0x5a9811(_0x423976[_0x374455(0x3c1)][0x0][_0x374455(0x3b6)], _0x42179d, 'stories', _0x22ad31, _0x374455(0x23b), _0x423976['id'])[_0x374455(0x351)](() => {
                        const _0x1ea5eb = _0x374455;
                        _0x4a5c74(++_0x228fcc, _0x491b90[_0x1ea5eb(0x35e)][_0x1ea5eb(0x297)][0x0][_0x1ea5eb(0x42a)][_0x1ea5eb(0x1e2)]);
                    }) : _0x5a9811(_0x423976[_0x374455(0x27e)][0x0][_0x374455(0x3b6)], _0x42179d, _0x374455(0x266), _0x22ad31, 'jpg', _0x423976['id'])[_0x374455(0x351)](() => {
                        const _0x115237 = _0x374455;
                        _0x4a5c74(++_0x228fcc, _0x491b90[_0x115237(0x35e)][_0x115237(0x297)][0x0][_0x115237(0x42a)]['length']);
                    });
                }, 0x64 * _0x16f478);
            });
        }
        async function _0x175c33(_0x3250b4, _0x4996f6) {
            const _0x4f5d63 = _0x8bfcd5;
            var _0x27585e = _0x4f7051(_0x4f5d63(0x3b0))['filter'](function () {
                const _0x46d90b = _0x4f5d63;
                return _0x4f7051(this)[_0x46d90b(0x253)](_0x46d90b(0x27d))[_0x46d90b(0x430)]('/')[_0x46d90b(0x477)](_0x35b235 => _0x35b235[_0x46d90b(0x1e2)] > 0x0)[_0x46d90b(0x1e2)] === 0x1;
            })[_0x4f5d63(0x207)]()[_0x4f5d63(0x253)](_0x4f5d63(0x27d))[_0x4f5d63(0x430)]('/')[_0x4f5d63(0x477)](_0x1b33b7 => _0x1b33b7[_0x4f5d63(0x1e2)] > 0x0)['at'](0x0);
            if (_0x3250b4) {
                let _0x55ac04 = new Date()[_0x4f5d63(0x397)](), _0x2d9eef = Math['floor'](_0x55ac04 / 0x3e8), _0x1a7bd2 = location[_0x4f5d63(0x27d)][_0x4f5d63(0x3dc)](/\/$/ig, '')[_0x4f5d63(0x430)]('/')['at'](-0x1), _0x1f90fb = _0x4f7051(_0x4f5d63(0x39f))['length'] || _0x4f7051('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x4f5d63(0x1e2)] || _0x4f7051(_0x4f5d63(0x3f1))[_0x4f5d63(0x335)](_0x4f5d63(0x2d5))[_0x4f5d63(0x1e2)], _0x15afb0 = 0x0;
                _0x5ac088(!![]);
                if (_0x4116c6[_0x4f5d63(0x288)][_0x4f5d63(0x3fc)][_0x1a7bd2]) {
                    _0x128583(_0x4f5d63(0x20f), _0x1a7bd2);
                    let _0x593f39 = _0x4116c6[_0x4f5d63(0x288)][_0x4f5d63(0x3fc)][_0x1a7bd2]['data'][_0x4f5d63(0x297)][0x0][_0x4f5d63(0x42a)][_0x4f5d63(0x1e2)];
                    _0x27585e = _0x4116c6[_0x4f5d63(0x288)][_0x4f5d63(0x3fc)][_0x1a7bd2][_0x4f5d63(0x35e)][_0x4f5d63(0x297)][0x0][_0x4f5d63(0x1e0)][_0x4f5d63(0x2c9)], _0x15afb0 = _0x4116c6[_0x4f5d63(0x288)][_0x4f5d63(0x3fc)][_0x1a7bd2]['data'][_0x4f5d63(0x297)][0x0][_0x4f5d63(0x42a)][_0x593f39 - _0x1f90fb];
                } else {
                    let _0x3575f2 = await _0x185a4a(_0x1a7bd2), _0x432eca = _0x3575f2[_0x4f5d63(0x35e)][_0x4f5d63(0x297)][0x0][_0x4f5d63(0x42a)][_0x4f5d63(0x1e2)];
                    _0x27585e = _0x3575f2[_0x4f5d63(0x35e)]['reels_media'][0x0][_0x4f5d63(0x1e0)][_0x4f5d63(0x2c9)], _0x15afb0 = _0x3575f2['data'][_0x4f5d63(0x297)][0x0][_0x4f5d63(0x42a)][_0x432eca - _0x1f90fb], _0x4116c6['GL_dataCache']['highlights'][_0x1a7bd2] = _0x3575f2;
                }
                _0x128583(_0x4f5d63(0x2b2), _0x1a7bd2, _0x4116c6[_0x4f5d63(0x288)]['highlights'][_0x1a7bd2]);
                _0x38b6ed['RENAME_PUBLISH_DATE'] && (_0x2d9eef = _0x15afb0[_0x4f5d63(0x1d6)]);
                if (_0x38b6ed[_0x4f5d63(0x3ff)] && !_0x4116c6[_0x4f5d63(0x34b)]) {
                    let _0x16ede8 = await _0x370347(_0x15afb0['id']);
                    _0x16ede8['status'] === 'ok' ? _0x16ede8[_0x4f5d63(0x42a)][0x0][_0x4f5d63(0x3bf)] ? _0x4996f6 ? _0x4cea82(_0x16ede8[_0x4f5d63(0x42a)][0x0][_0x4f5d63(0x3bf)][0x0]['url']) : _0x5a9811(_0x16ede8[_0x4f5d63(0x42a)][0x0][_0x4f5d63(0x3bf)][0x0][_0x4f5d63(0x246)], _0x27585e, _0x4f5d63(0x3fc), _0x2d9eef, _0x4f5d63(0x23b), _0x16ede8[_0x4f5d63(0x42a)][0x0]['id']) : _0x4996f6 ? _0x4cea82(_0x16ede8[_0x4f5d63(0x42a)][0x0][_0x4f5d63(0x2f1)][_0x4f5d63(0x28d)][0x0][_0x4f5d63(0x246)]) : _0x5a9811(_0x16ede8[_0x4f5d63(0x42a)][0x0][_0x4f5d63(0x2f1)][_0x4f5d63(0x28d)][0x0]['url'], _0x27585e, 'highlights', _0x2d9eef, _0x4f5d63(0x2c3), _0x16ede8['items'][0x0]['id']) : (_0x38b6ed[_0x4f5d63(0x3ee)] ? (delete _0x4116c6[_0x4f5d63(0x288)]['highlights'][_0x1a7bd2], _0x4116c6['tempFetchRateLimit'] = !![], _0x175c33(!![], _0x4996f6)) : alert(_0x4f5d63(0x1b4) + _0x16ede8[_0x4f5d63(0x386)]), _0x128583(_0x16ede8));
                } else
                    _0x15afb0['is_video'] ? _0x4996f6 ? _0x4cea82(_0x15afb0[_0x4f5d63(0x3c1)]['at'](-0x1)[_0x4f5d63(0x3b6)], _0x27585e) : _0x5a9811(_0x15afb0[_0x4f5d63(0x3c1)]['at'](-0x1)[_0x4f5d63(0x3b6)], _0x27585e, _0x4f5d63(0x3fc), _0x2d9eef, _0x4f5d63(0x23b), _0x15afb0['id']) : _0x4996f6 ? _0x4cea82(_0x15afb0[_0x4f5d63(0x27e)]['at'](-0x1)[_0x4f5d63(0x3b6)], _0x27585e) : _0x5a9811(_0x15afb0['display_resources']['at'](-0x1)['src'], _0x27585e, 'highlights', _0x2d9eef, _0x4f5d63(0x2c3), _0x15afb0['id']), _0x4116c6[_0x4f5d63(0x34b)] = ![];
                _0x5ac088(![]);
            } else {
                if (!_0x4f7051(_0x4f5d63(0x2be))['length']) {
                    let _0x4eb29b = null;
                    _0x4f7051('body\x20>\x20div\x20section._ac0a')['length'] > 0x0 ? _0x4eb29b = _0x4f7051('body\x20>\x20div\x20section:visible._ac0a') : (_0x4eb29b = _0x4f7051(_0x4f5d63(0x2fc)), _0x4eb29b['css'](_0x4f5d63(0x3b4), _0x4f5d63(0x1fb)));
                    if (_0x4eb29b[_0x4f5d63(0x1e2)] === 0x0) {
                        let _0x4e2bba = _0x4f7051(_0x4f5d63(0x3a8)), _0x5eec55 = 0x0;
                        _0x4e2bba['each'](function () {
                            const _0x1b62b2 = _0x4f5d63;
                            _0x4f7051(this)[_0x1b62b2(0x426)]() > _0x5eec55 && (_0x5eec55 = _0x4f7051(this)['width'](), _0x4eb29b = _0x4f7051(this)[_0x1b62b2(0x26b)]('div')[_0x1b62b2(0x207)]());
                        });
                    }
                    if (_0x4eb29b != null) {
                        _0x4eb29b[_0x4f5d63(0x1b2)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x4e68d5('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x44169f[_0x4f5d63(0x2b3)] + _0x4f5d63(0x1f6)), _0x4eb29b[_0x4f5d63(0x1b2)](_0x4f5d63(0x1d2) + _0x4e68d5(_0x4f5d63(0x1ee)) + _0x4f5d63(0x29d) + _0x44169f[_0x4f5d63(0x1ee)] + '</div>');
                        let _0x38e836 = _0x29a9d2(_0x27585e);
                        _0x38e836[_0x4f5d63(0x1e2)] > 0x1 && _0x4eb29b[_0x4f5d63(0x1b2)](_0x4f5d63(0x238) + _0x4e68d5(_0x4f5d63(0x22e)) + _0x4f5d63(0x1e4) + _0x44169f[_0x4f5d63(0x420)] + '</div>');
                        let _0x5e7f19 = _0x38e836[_0x4f5d63(0x236)](_0x4f5d63(0x29a))[_0x4f5d63(0x335)](_0x4f5d63(0x3db))?.['attr'](_0x4f5d63(0x33c));
                        _0x5e7f19 != null && _0x38e836[_0x4f5d63(0x236)](_0x4f5d63(0x29a))[_0x4f5d63(0x335)](_0x4f5d63(0x3db))[_0x4f5d63(0x1c4)](_0x5e7f19), _0x4eb29b['find']('img[referrerpolicy]')[_0x4f5d63(0x2f4)](function () {
                            _0x4f7051(this)['on']('load', function () {
                                const _0x393839 = a0_0xa48a;
                                !_0x4f7051(this)[_0x393839(0x35e)](_0x393839(0x1e8)) && (_0x4eb29b['find'](_0x393839(0x404))[_0x393839(0x1e2)] === 0x0 ? (_0x4f7051(this)[_0x393839(0x253)](_0x393839(0x406), !![]), _0x4f7051(_0x393839(0x404))['remove'](), _0x128583('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x4f7051(this)['attr'](_0x393839(0x406), !![]), _0x128583(_0x393839(0x1d1))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x56a120(_0x427361) {
            const _0x4ba3b3 = _0x8bfcd5;
            if (_0x427361) {
                let _0x410e91 = new Date()[_0x4ba3b3(0x397)](), _0xe4a3af = Math['floor'](_0x410e91 / 0x3e8), _0x7b7a25 = location['href'][_0x4ba3b3(0x3dc)](/\/$/ig, '')[_0x4ba3b3(0x430)]('/')['at'](-0x1), _0x4a24a0 = '', _0x453836 = _0x4f7051(_0x4ba3b3(0x39f))['length'] || _0x4f7051('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')['length'] || _0x4f7051('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x4ba3b3(0x335)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x4ba3b3(0x1e2)], _0x26545c = '';
                _0x5ac088(!![]);
                if (_0x4116c6[_0x4ba3b3(0x288)][_0x4ba3b3(0x3fc)][_0x7b7a25]) {
                    _0x128583('Fetch\x20from\x20memory\x20cache:', _0x7b7a25);
                    let _0x248040 = _0x4116c6[_0x4ba3b3(0x288)][_0x4ba3b3(0x3fc)][_0x7b7a25]['data'][_0x4ba3b3(0x297)][0x0][_0x4ba3b3(0x42a)]['length'];
                    _0x4a24a0 = _0x4116c6['GL_dataCache'][_0x4ba3b3(0x3fc)][_0x7b7a25][_0x4ba3b3(0x35e)][_0x4ba3b3(0x297)][0x0][_0x4ba3b3(0x1e0)][_0x4ba3b3(0x2c9)], _0x26545c = _0x4116c6[_0x4ba3b3(0x288)][_0x4ba3b3(0x3fc)][_0x7b7a25][_0x4ba3b3(0x35e)][_0x4ba3b3(0x297)][0x0][_0x4ba3b3(0x42a)][_0x248040 - _0x453836];
                } else {
                    let _0xbebf48 = await _0x185a4a(_0x7b7a25), _0x16b60e = _0xbebf48[_0x4ba3b3(0x35e)][_0x4ba3b3(0x297)][0x0]['items'][_0x4ba3b3(0x1e2)];
                    _0x4a24a0 = _0xbebf48['data']['reels_media'][0x0][_0x4ba3b3(0x1e0)][_0x4ba3b3(0x2c9)], _0x26545c = _0xbebf48[_0x4ba3b3(0x35e)][_0x4ba3b3(0x297)][0x0][_0x4ba3b3(0x42a)][_0x16b60e - _0x453836], _0x4116c6[_0x4ba3b3(0x288)][_0x4ba3b3(0x3fc)][_0x7b7a25] = _0xbebf48;
                }
                _0x38b6ed['RENAME_PUBLISH_DATE'] && (_0xe4a3af = _0x26545c[_0x4ba3b3(0x1d6)]);
                if (_0x38b6ed['FORCE_RESOURCE_VIA_MEDIA'] && !_0x4116c6[_0x4ba3b3(0x34b)]) {
                    let _0x2f9bcc = await _0x370347(_0x26545c['id']);
                    _0x2f9bcc[_0x4ba3b3(0x395)] === 'ok' ? _0x5a9811(_0x2f9bcc[_0x4ba3b3(0x42a)][0x0]['image_versions2'][_0x4ba3b3(0x28d)][0x0][_0x4ba3b3(0x246)], _0x4a24a0, _0x4ba3b3(0x3fc), _0xe4a3af, _0x4ba3b3(0x2c3), _0x7b7a25) : (_0x38b6ed[_0x4ba3b3(0x3ee)] ? (delete _0x4116c6[_0x4ba3b3(0x288)][_0x4ba3b3(0x3fc)][_0x7b7a25], _0x4116c6[_0x4ba3b3(0x34b)] = !![], _0x56a120(!![])) : alert(_0x4ba3b3(0x1b4) + _0x2f9bcc[_0x4ba3b3(0x386)]), _0x128583(_0x2f9bcc));
                } else
                    _0x5a9811(_0x26545c[_0x4ba3b3(0x27e)]['at'](-0x1)[_0x4ba3b3(0x3b6)], _0x4a24a0, _0x4ba3b3(0x3fc), _0xe4a3af, _0x4ba3b3(0x2c3), _0x7b7a25), _0x4116c6[_0x4ba3b3(0x34b)] = ![];
                _0x5ac088(![]);
            } else {
                if (_0x4f7051(_0x4ba3b3(0x474))['length']) {
                    if (!_0x4f7051(_0x4ba3b3(0x404))[_0x4ba3b3(0x1e2)]) {
                        let _0x2ab160 = null;
                        _0x4f7051(_0x4ba3b3(0x3ad))[_0x4ba3b3(0x1e2)] > 0x0 ? _0x2ab160 = _0x4f7051(_0x4ba3b3(0x3c5)) : (_0x2ab160 = _0x4f7051('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x2ab160[_0x4ba3b3(0x3e2)]('position', _0x4ba3b3(0x1fb)));
                        if (_0x2ab160[_0x4ba3b3(0x1e2)] === 0x0) {
                            let _0x51e858 = _0x4f7051(_0x4ba3b3(0x3a8)), _0x1b060e = 0x0;
                            _0x51e858[_0x4ba3b3(0x2f4)](function () {
                                const _0x2261f3 = _0x4ba3b3;
                                _0x4f7051(this)['width']() > _0x1b060e && (_0x1b060e = _0x4f7051(this)[_0x2261f3(0x426)](), _0x2ab160 = _0x4f7051(this)['children']('div')[_0x2261f3(0x207)]());
                            });
                        }
                        _0x2ab160 != null && _0x2ab160[_0x4ba3b3(0x1b2)](_0x4ba3b3(0x263) + _0x4e68d5(_0x4ba3b3(0x300)) + _0x4ba3b3(0x21e) + _0x44169f[_0x4ba3b3(0x250)] + _0x4ba3b3(0x1f6));
                    }
                } else
                    _0x4f7051('.IG_DWHISTORY_THUMBNAIL')[_0x4ba3b3(0x25a)]();
            }
        }
        function _0x4b6329(_0x249dd4, _0x382b2) {
            const _0x2fc0c1 = _0x8bfcd5;
            _0x382b2 === !![] && (_0x128583(_0x2fc0c1(0x1b8), _0x2fc0c1(0x1c3)), _0x4f7051(_0x2fc0c1(0x233))[_0x2fc0c1(0x477)](function () {
                const _0x50f6fc = _0x2fc0c1;
                return _0x4f7051(this)[_0x50f6fc(0x335)](_0x50f6fc(0x3d6))[_0x50f6fc(0x1e2)] === 0x0;
            })['removeAttr'](_0x2fc0c1(0x241)));
            if (_0x249dd4 == ![]) {
                const _0x23e1be = 0x64;
                let _0x394255 = 0x0;
                var _0x5e73b9 = setInterval(() => {
                    const _0x44bd89 = _0x2fc0c1;
                    (_0x394255 > _0x23e1be || _0x4f7051(_0x44bd89(0x21c))[_0x44bd89(0x1e2)] > 0x0) && (clearInterval(_0x5e73b9), _0x394255 > _0x23e1be && console['warn'](_0x44bd89(0x2c6), _0x44bd89(0x3d9))), _0x128583(_0x44bd89(0x2c6), 'repeating\x20to\x20call\x20detection\x20createDownloadButton()'), _0x3f2b39(), _0x394255++;
                }, 0x32);
            } else
                _0x3f2b39();
        }
        function _0x1916eb(_0x31246c) {
            const _0x1f895a = _0x8bfcd5;
            _0x38b6ed['DISABLE_VIDEO_LOOPING'] && _0x31246c[_0x1f895a(0x335)](_0x1f895a(0x369))[_0x1f895a(0x2f4)](function () {
                const _0x43b412 = _0x1f895a;
                _0x4f7051(this)['on'](_0x43b412(0x470), function () {
                    const _0x1a2c7d = _0x43b412;
                    !_0x4f7051(this)['data'](_0x1a2c7d(0x2e2)) && (_0x4f7051(this)[_0x1a2c7d(0x253)](_0x1a2c7d(0x3c9), !![]), this[_0x1a2c7d(0x303)](), _0x128583(_0x1a2c7d(0x1ce)));
                });
            });
            _0x38b6ed['MODIFY_VIDEO_VOLUME'] && _0x31246c[_0x1f895a(0x335)](_0x1f895a(0x369))[_0x1f895a(0x2f4)](function () {
                _0x4f7051(this)['on']('play\x20playing', function () {
                    const _0x12680a = a0_0xa48a;
                    !_0x4f7051(this)[_0x12680a(0x35e)](_0x12680a(0x33b)) && (_0x4f7051(this)[_0x12680a(0x253)](_0x12680a(0x429), !![]), this[_0x12680a(0x3c3)] = _0x4116c6[_0x12680a(0x210)], _0x128583(_0x12680a(0x37c)));
                });
            });
            _0x38b6ed[_0x1f895a(0x1b1)] && _0x31246c[_0x1f895a(0x335)](_0x1f895a(0x369))[_0x1f895a(0x2f4)](function () {
                const _0x61169b = _0x1f895a;
                if (!_0x4f7051(this)[_0x61169b(0x35e)]('controls')) {
                    let _0x59122f = _0x4f7051(this);
                    _0x128583(_0x61169b(0x461)), _0x38b6ed[_0x61169b(0x431)] && (this['volume'] = _0x4116c6['videoVolume'], _0x4f7051(this)['on'](_0x61169b(0x278), function () {
                        const _0x273543 = _0x61169b;
                        this['volume'] = _0x4116c6[_0x273543(0x210)];
                    })), _0x4f7051(this)['on']('contextmenu', function (_0x1f5578) {
                        const _0x54cd8c = _0x61169b;
                        _0x1f5578[_0x54cd8c(0x32e)](), _0x59122f[_0x54cd8c(0x3e2)](_0x54cd8c(0x1ac), '-1'), _0x59122f[_0x54cd8c(0x1d9)](_0x54cd8c(0x453));
                    }), _0x4f7051(this)['parent']()[_0x61169b(0x335)]('video\x20+\x20div\x20>\x20div')[_0x61169b(0x207)]()['on']('contextmenu', function (_0x1a860c) {
                        const _0x327cfa = _0x61169b;
                        _0x1a860c['preventDefault'](), _0x59122f[_0x327cfa(0x3e2)](_0x327cfa(0x1ac), '2'), _0x59122f['attr'](_0x327cfa(0x453), !![]);
                    }), _0x4f7051(this)['on']('volumechange', function () {
                        const _0x4a6549 = _0x61169b;
                        let _0x5ea7ab = _0x4f7051(this)[_0x4a6549(0x45c)]()[_0x4a6549(0x335)]('video\x20+\x20div\x20>\x20div')[_0x4a6549(0x335)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x4a6549(0x477)](function (_0x1a702e) {
                            const _0x36bb5c = _0x4a6549;
                            return _0x4f7051(this)['width']() <= 0x40 && _0x4f7051(this)[_0x36bb5c(0x2cb)]() <= 0x40 && _0x4f7051(this)[_0x36bb5c(0x335)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')[_0x36bb5c(0x1e2)] > 0x0;
                        });
                        var _0x26e8f4 = _0x5ea7ab[_0x4a6549(0x335)](_0x4a6549(0x248))[_0x4a6549(0x1e2)] === 0x0;
                        this[_0x4a6549(0x3f3)] != _0x26e8f4 && (this[_0x4a6549(0x3c3)] = _0x4116c6[_0x4a6549(0x210)], _0x5ea7ab?.['trigger'](_0x4a6549(0x2a9))), _0x4f7051(this)[_0x4a6549(0x253)]('data-completed') && (_0x4116c6[_0x4a6549(0x210)] = this[_0x4a6549(0x3c3)], GM_setValue(_0x4a6549(0x43c), this[_0x4a6549(0x3c3)])), this[_0x4a6549(0x3c3)] == _0x4116c6['videoVolume'] && _0x4f7051(this)[_0x4a6549(0x253)](_0x4a6549(0x26f), !![]);
                    }), _0x4f7051(this)[_0x61169b(0x3e2)](_0x61169b(0x3b4), _0x61169b(0x1f3)), _0x4f7051(this)[_0x61169b(0x3e2)](_0x61169b(0x1ac), '2'), _0x4f7051(this)[_0x61169b(0x253)](_0x61169b(0x29e), !![]), _0x4f7051(this)[_0x61169b(0x253)](_0x61169b(0x453), !![]);
                }
            });
            var _0x15fe96 = _0x31246c[_0x1f895a(0x335)](_0x1f895a(0x369)), _0x557007 = _0x31246c[_0x1f895a(0x335)](_0x1f895a(0x421))[_0x1f895a(0x207)]();
            _0x2138a6(_0x15fe96, _0x557007, _0x1f895a(0x3f9), _0x1f895a(0x1ec));
        }
        ;
        function _0x3f2b39() {
            const _0x5410ef = _0x8bfcd5;
            _0x4f7051(_0x5410ef(0x1e3))[_0x5410ef(0x473)](function (_0x5873e9) {
                const _0x58b508 = _0x5410ef;
                return _0x4f7051(this)['is'](_0x58b508(0x41a)) ? _0x4f7051(this)[_0x58b508(0x45c)]()[_0x58b508(0x45c)]()[_0x58b508(0x45c)]()['parent']()[0x0] : this;
            })[_0x5410ef(0x477)](function () {
                const _0x4b0caa = _0x5410ef;
                return _0x4f7051(this)[_0x4b0caa(0x2cb)]() > 0x0 && _0x4f7051(this)[_0x4b0caa(0x426)]() > 0x0;
            })['each'](function (_0x157d63) {
                const _0x3a8a79 = _0x5410ef;
                if (!_0x4f7051(this)['attr'](_0x3a8a79(0x241)) && !_0x4f7051(this)[_0x3a8a79(0x294)](_0x3a8a79(0x3f8)) && !_0x4f7051(this)[_0x3a8a79(0x26b)](_0x3a8a79(0x309))?.[_0x3a8a79(0x294)](_0x3a8a79(0x3f8)) && _0x4f7051(this)[_0x3a8a79(0x236)](_0x3a8a79(0x412))[_0x3a8a79(0x1e2)] === 0x0) {
                    _0x128583(_0x3a8a79(0x274), _0x4f7051(this));
                    const _0x1bd27a = _0x4f7051(this), _0x2f9d07 = this[_0x3a8a79(0x45f)], _0x5bcc93 = '._acay\x20._acaz';
                    var _0xb8c753;
                    if (_0x2f9d07 === _0x3a8a79(0x1bd) && _0x157d63 != 0x0)
                        return;
                    const _0x352407 = _0x1bd27a[_0x3a8a79(0x26b)]('div')[_0x3a8a79(0x26b)](_0x3a8a79(0x460));
                    if (_0x352407['length'] === 0x0)
                        return;
                    _0x128583(_0x3a8a79(0x40a), _0x352407);
                    if (_0x1bd27a[_0x3a8a79(0x335)](_0x3a8a79(0x284))['length'] > 0x0) {
                        _0x1bd27a['find']('._acay\x20+\x20.x24i39r')[_0x3a8a79(0x1e2)] > 0x0 && _0x1bd27a[_0x3a8a79(0x335)]('._acay\x20+\x20.x24i39r')[_0x3a8a79(0x3e2)](_0x3a8a79(0x2a8), _0x3a8a79(0x1df));
                        const _0xd0ef44 = _0x1bd27a[_0x3a8a79(0x335)](_0x3a8a79(0x284))[_0x3a8a79(0x207)]()[_0x3a8a79(0x45c)]()[0x0];
                        var _0x3d526a = new MutationObserver(function () {
                            const _0x3026dd = _0x3a8a79;
                            _0x1bd27a[_0x3026dd(0x335)]('._acay\x20+\x20.x24i39r')['css'](_0x3026dd(0x2a8), '37px');
                        });
                        _0x3d526a[_0x3a8a79(0x448)](_0xd0ef44, { 'childList': !![] });
                    }
                    _0x352407['eq'](_0x2f9d07 === 'DIV' ? 0x0 : _0x352407[_0x3a8a79(0x1e2)] - 0x2)[_0x3a8a79(0x1b2)]('<div\x20class=\x22button_wrapper\x22>');
                    const _0x714457 = _0x3a8a79(0x1ea) + _0x4e68d5('DW') + '\x22\x20class=\x22IG_DW_MAIN\x22>' + _0x44169f['DOWNLOAD'] + _0x3a8a79(0x1f6), _0x1a0f5b = _0x3a8a79(0x1d2) + _0x4e68d5(_0x3a8a79(0x1ee)) + _0x3a8a79(0x34e) + _0x44169f[_0x3a8a79(0x1ee)] + _0x3a8a79(0x1f6), _0x94f876 = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x4e68d5(_0x3a8a79(0x300)) + _0x3a8a79(0x23c) + _0x44169f['THUMBNAIL'] + _0x3a8a79(0x1f6), _0x2fde00 = '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22' + _0x4e68d5('IMAGE_VIEWER') + _0x3a8a79(0x3fa) + _0x44169f[_0x3a8a79(0x1b7)] + '</div>';
                    _0x352407['find']('.button_wrapper')['append'](_0x714457);
                    const _0x461873 = _0x1bd27a[_0x3a8a79(0x335)](_0x5bcc93)['length'];
                    if (_0x461873 > 0x1 && _0x38b6ed[_0x3a8a79(0x286)] && !_0x38b6ed[_0x3a8a79(0x313)]) {
                        const _0x559b7a = _0x3a8a79(0x238) + _0x4e68d5(_0x3a8a79(0x22e)) + _0x3a8a79(0x344) + _0x44169f[_0x3a8a79(0x420)] + _0x3a8a79(0x1f6);
                        _0x352407[_0x3a8a79(0x335)](_0x3a8a79(0x211))['append'](_0x559b7a);
                    }
                    _0x352407[_0x3a8a79(0x335)](_0x3a8a79(0x211))[_0x3a8a79(0x1b2)](_0x1a0f5b), setTimeout(() => {
                        const _0x433595 = _0x3a8a79;
                        if (_0x352407['eq'](_0x2f9d07 === 'DIV' ? 0x0 : _0x352407['length'] - 0x2)['find'](_0x433595(0x331))['length'] === 0x0)
                            _0x352407[_0x433595(0x335)](_0x433595(0x369))[_0x433595(0x1e2)] > 0x0 ? _0x352407[_0x433595(0x335)](_0x433595(0x211))[_0x433595(0x1b2)](_0x94f876) : (_0xb8c753 = _0x1bd27a['find']('img')[_0x433595(0x477)](function () {
                                const _0x3c97c2 = _0x433595;
                                return _0x4f7051(this)['width']() > 0xc8 && _0x4f7051(this)[_0x3c97c2(0x2cb)]() > 0xc8;
                            })[_0x433595(0x253)](_0x433595(0x3b6)), _0x352407[_0x433595(0x335)](_0x433595(0x211))[_0x433595(0x1b2)](_0x2fde00));
                        else {
                            const _0x2dda8c = (_0x384960, _0x597e5d) => {
                                    const _0x2d5735 = _0x433595;
                                    _0x384960[_0x2d5735(0x2c5)](_0x59c135 => {
                                        const _0x476f44 = _0x2d5735;
                                        if (_0x59c135[_0x476f44(0x334)]) {
                                            var _0x3f3c67 = _0x4f7051(_0x59c135[_0x476f44(0x1da)]);
                                            _0x352407['find']('.IG_THUMBNAIL_MAIN')?.['remove'](), _0x352407[_0x476f44(0x335)]('.IG_IMAGE_VIEWER')?.[_0x476f44(0x25a)](), _0x3f3c67[_0x476f44(0x335)]('video')[_0x476f44(0x1e2)] > 0x0 ? (_0x352407[_0x476f44(0x335)](_0x476f44(0x1af))[_0x476f44(0x1e2)] === 0x0 && _0x352407[_0x476f44(0x335)](_0x476f44(0x211))['append'](_0x94f876), _0x1916eb(_0x1bd27a)) : (_0xb8c753 = _0x3f3c67[_0x476f44(0x335)](_0x476f44(0x36f))[_0x476f44(0x253)](_0x476f44(0x3b6)), _0x352407[_0x476f44(0x335)](_0x476f44(0x211))[_0x476f44(0x1b2)](_0x2fde00));
                                        }
                                    });
                                }, _0x1dd596 = new IntersectionObserver(_0x2dda8c, {
                                    'root': _0x1bd27a[_0x433595(0x335)](_0x433595(0x2d3))['first']()['parent']()[_0x433595(0x45c)]()[_0x433595(0x45c)]()[0x0],
                                    'rootMargin': _0x433595(0x468),
                                    'threshold': 0.1
                                }), _0x4e7b84 = new MutationObserver(function (_0x450f79, _0x83964a) {
                                    const _0x180498 = _0x433595;
                                    var _0x38937e = _0x450f79['at'](0x0)?.[_0x180498(0x1da)];
                                    _0x4f7051(_0x38937e)['find']('li._acaz')['each'](function () {
                                        const _0x1bd051 = _0x180498;
                                        _0x1dd596[_0x1bd051(0x448)](this);
                                    });
                                });
                            _0x1bd27a[_0x433595(0x335)](_0x433595(0x331))['each'](function () {
                                const _0x48d0f5 = _0x433595;
                                _0x1dd596[_0x48d0f5(0x448)](this);
                            });
                            const _0x288007 = _0x352407['eq'](_0x2f9d07 === _0x433595(0x1bd) ? 0x0 : _0x352407[_0x433595(0x1e2)] - 0x2)[_0x433595(0x335)]('div\x20>\x20ul\x20li._acaz')?.[_0x433595(0x45c)]()[0x0], _0x3eaed1 = _0x352407['eq'](_0x2f9d07 === 'DIV' ? 0x0 : _0x352407['length'] - 0x2)[_0x433595(0x335)]('div\x20>\x20ul\x20li._acaz')?.[_0x433595(0x45c)]()[_0x433595(0x45c)]()[0x0];
                            _0x288007 && _0x4e7b84[_0x433595(0x448)](_0x288007, { 'childList': !![] }), _0x3eaed1 && _0x4e7b84[_0x433595(0x448)](_0x3eaed1, { 'attributes': !![] });
                        }
                    }, 0x32), _0x352407[_0x3a8a79(0x3e2)](_0x3a8a79(0x3b4), _0x3a8a79(0x1fb)), _0x1916eb(_0x1bd27a), _0x4116c6['GL_registerEventList'][_0x3a8a79(0x1c7)]({
                        'element': this,
                        'trigger': [
                            _0x3a8a79(0x1af),
                            _0x3a8a79(0x3a3),
                            _0x3a8a79(0x2bc),
                            _0x3a8a79(0x3d6),
                            _0x3a8a79(0x2e6)
                        ]
                    }), _0x4f7051(this)['on'](_0x3a8a79(0x2a9), _0x3a8a79(0x2e6), function () {
                        _0xb8c753 != null ? _0x6372d(_0xb8c753) : alert('Cannot\x20find\x20resource\x20url.');
                    }), _0x4f7051(this)['on']('click', _0x3a8a79(0x1af), function () {
                        const _0x444d16 = _0x3a8a79;
                        _0x5ac088(!![]), _0x4116c6[_0x444d16(0x1ad)] = _0x1bd27a[_0x444d16(0x253)](_0x444d16(0x307)), _0x4116c6[_0x444d16(0x1c5)] = location[_0x444d16(0x43b)][_0x444d16(0x3dc)](/\/$/, '')[_0x444d16(0x430)]('/')['at'](-0x1) || _0x1bd27a[_0x444d16(0x335)]('a[href^=\x22/p/\x22]')[_0x444d16(0x207)]()[_0x444d16(0x253)](_0x444d16(0x27d))['split']('/')['at'](0x2) || _0x4f7051(this)['parent']()[_0x444d16(0x45c)]()[_0x444d16(0x45c)]()['children'](_0x444d16(0x32d))[_0x444d16(0x26b)](_0x444d16(0x460))[_0x444d16(0x26b)](_0x444d16(0x32d))[_0x444d16(0x335)](_0x444d16(0x25c))['last']()[_0x444d16(0x253)]('href')[_0x444d16(0x430)]('/')['at'](0x2);
                        var _0x3781f9 = _0xe503b3(_0x1bd27a);
                        _0x5f5be1(!![], ![]), _0x43e053(_0x4116c6['GL_postPath'], _0x444d16(0x1d0), '')[_0x444d16(0x351)](() => {
                            let _0x1f3cfe = setInterval(() => {
                                const _0x5873f2 = a0_0xa48a;
                                if (_0x4f7051(_0x5873f2(0x44b))[_0x5873f2(0x1e2)] > 0x0) {
                                    clearInterval(_0x1f3cfe);
                                    var _0x32666f = _0x4f7051(_0x5873f2(0x282) + (_0x3781f9 + 0x1) + '\x22]')?.['parent']()['find'](_0x5873f2(0x2c8))?.[_0x5873f2(0x207)]();
                                    _0x32666f != null && _0x32666f[_0x5873f2(0x1e2)] > 0x0 ? _0x32666f[_0x5873f2(0x43e)](_0x5873f2(0x2a9)) : alert(_0x5873f2(0x2f0)), _0x5ac088(![]), _0x4f7051('.IG_POPUP_DIG')['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x4f7051(this)['on'](_0x3a8a79(0x2a9), '.IG_NEWTAB_MAIN', function () {
                        const _0x210b0f = _0x3a8a79;
                        _0x5ac088(!![]), _0x4116c6[_0x210b0f(0x1ad)] = _0x1bd27a[_0x210b0f(0x253)]('data-username'), _0x4116c6[_0x210b0f(0x1c5)] = location[_0x210b0f(0x43b)][_0x210b0f(0x3dc)](/\/$/, '')[_0x210b0f(0x430)]('/')['at'](-0x1) || _0x1bd27a['find']('a[href^=\x22/p/\x22]')[_0x210b0f(0x207)]()[_0x210b0f(0x253)](_0x210b0f(0x27d))[_0x210b0f(0x430)]('/')['at'](0x2) || _0x4f7051(this)[_0x210b0f(0x45c)]()[_0x210b0f(0x45c)]()['parent']()[_0x210b0f(0x26b)](_0x210b0f(0x32d))['children'](_0x210b0f(0x460))[_0x210b0f(0x26b)](_0x210b0f(0x32d))[_0x210b0f(0x335)](_0x210b0f(0x25c))[_0x210b0f(0x320)]()[_0x210b0f(0x253)](_0x210b0f(0x27d))[_0x210b0f(0x430)]('/')['at'](0x2);
                        var _0x155e5e = _0xe503b3(_0x1bd27a);
                        _0x5f5be1(!![], ![]), _0x43e053(_0x4116c6[_0x210b0f(0x1c5)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')['then'](() => {
                            let _0x3b05fa = setInterval(() => {
                                const _0x3a2799 = a0_0xa48a;
                                if (_0x4f7051(_0x3a2799(0x44b))[_0x3a2799(0x1e2)] > 0x0) {
                                    clearInterval(_0x3b05fa);
                                    var _0x7d323f = _0x4f7051('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x155e5e + 0x1) + '\x22]');
                                    if (_0x38b6ed[_0x3a2799(0x3ff)] && _0x38b6ed[_0x3a2799(0x2b5)])
                                        _0x485b69(_0x7d323f[_0x3a2799(0x207)]()[0x0], !![]);
                                    else {
                                        let _0x30ce4b = _0x7d323f?.[_0x3a2799(0x253)](_0x3a2799(0x2d9));
                                        if (_0x30ce4b) {
                                            var _0x1cf976 = new URL(_0x30ce4b);
                                            _0x1cf976[_0x3a2799(0x24f)] = _0x3a2799(0x1c1), _0x4cea82(_0x1cf976[_0x3a2799(0x27d)]);
                                        } else
                                            alert(_0x3a2799(0x375));
                                    }
                                    _0x5ac088(![]), _0x4f7051('.IG_POPUP_DIG')[_0x3a2799(0x25a)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x4f7051(this)['on']('click', _0x3a8a79(0x2bc), async function () {
                        const _0x1b6991 = _0x3a8a79;
                        _0x4116c6[_0x1b6991(0x1ad)] = _0x1bd27a[_0x1b6991(0x253)](_0x1b6991(0x307)), _0x4116c6['GL_postPath'] = location['pathname'][_0x1b6991(0x3dc)](/\/$/, '')[_0x1b6991(0x430)]('/')['at'](-0x1) || _0x1bd27a[_0x1b6991(0x335)](_0x1b6991(0x25c))[_0x1b6991(0x207)]()['attr'](_0x1b6991(0x27d))[_0x1b6991(0x430)]('/')['at'](0x2) || _0x4f7051(this)['parent']()[_0x1b6991(0x45c)]()[_0x1b6991(0x45c)]()['children']('div:last-child')[_0x1b6991(0x26b)](_0x1b6991(0x460))[_0x1b6991(0x26b)]('div:last-child')['find'](_0x1b6991(0x25c))['last']()['attr']('href')['split']('/')['at'](0x2), _0x5f5be1(_0x38b6ed[_0x1b6991(0x313)], !![]), _0x4f7051(_0x1b6991(0x3c7))[_0x1b6991(0x45d)](_0x1b6991(0x396) + _0x4116c6[_0x1b6991(0x1c5)] + '\x22>' + _0x4116c6[_0x1b6991(0x1c5)] + '</a>'), _0x4f7051(_0x1b6991(0x44b))[_0x1b6991(0x2f4)](function () {
                            const _0x10eaa2 = _0x1b6991;
                            _0x4f7051(this)['wrap'](_0x10eaa2(0x388)), _0x4f7051(this)[_0x10eaa2(0x379)](_0x10eaa2(0x3df)), _0x4f7051(this)[_0x10eaa2(0x280)](_0x10eaa2(0x1d2) + _0x4e68d5(_0x10eaa2(0x1ee)) + _0x10eaa2(0x28f) + _0x44169f[_0x10eaa2(0x1ee)] + '</div>'), _0x4f7051(this)['attr'](_0x10eaa2(0x3f5)) == _0x10eaa2(0x369) && _0x4f7051(this)[_0x10eaa2(0x280)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x4e68d5(_0x10eaa2(0x300)) + _0x10eaa2(0x46e) + _0x44169f[_0x10eaa2(0x250)] + _0x10eaa2(0x1f6));
                        }), _0x43e053(_0x4116c6[_0x1b6991(0x1c5)], _0x1b6991(0x1d0), _0x4e68d5(_0x1b6991(0x44a)))[_0x1b6991(0x351)](() => {
                            let _0xa59436 = setInterval(() => {
                                const _0x13683e = a0_0xa48a;
                                _0x4f7051(_0x13683e(0x44b))[_0x13683e(0x1e2)] > 0x0 && (clearInterval(_0xa59436), _0x4f7051(_0x13683e(0x44b))[_0x13683e(0x2f4)](function () {
                                    const _0x406db0 = _0x13683e;
                                    _0x4f7051(this)[_0x406db0(0x43e)]('click');
                                }), _0x4f7051(_0x13683e(0x3f0))['remove']());
                            }, 0xfa);
                        });
                    }), _0x4f7051(this)['on'](_0x3a8a79(0x2a9), _0x3a8a79(0x3d6), async function () {
                        const _0x18368c = _0x3a8a79;
                        _0x4116c6[_0x18368c(0x1ad)] = _0x1bd27a['attr'](_0x18368c(0x307)), _0x4116c6['GL_postPath'] = location[_0x18368c(0x43b)][_0x18368c(0x3dc)](/\/$/, '')[_0x18368c(0x430)]('/')['at'](-0x1) || _0x1bd27a[_0x18368c(0x335)](_0x18368c(0x25c))[_0x18368c(0x207)]()[_0x18368c(0x253)]('href')['split']('/')['at'](0x2) || _0x4f7051(this)[_0x18368c(0x45c)]()['parent']()['parent']()[_0x18368c(0x26b)](_0x18368c(0x32d))[_0x18368c(0x26b)](_0x18368c(0x460))[_0x18368c(0x26b)](_0x18368c(0x32d))[_0x18368c(0x335)](_0x18368c(0x25c))[_0x18368c(0x320)]()[_0x18368c(0x253)](_0x18368c(0x27d))[_0x18368c(0x430)]('/')['at'](0x2), _0x5f5be1(_0x38b6ed[_0x18368c(0x313)], !![]), _0x4f7051('#article-id')[_0x18368c(0x45d)](_0x18368c(0x396) + _0x4116c6[_0x18368c(0x1c5)] + '\x22>' + _0x4116c6[_0x18368c(0x1c5)] + '</a>');
                        if (_0x38b6ed[_0x18368c(0x286)]) {
                            _0x5ac088(!![]), _0x2ff70d(!![]);
                            var _0x32567d = _0xe503b3(_0x4f7051(this)['parent']()['parent']()[_0x18368c(0x45c)]());
                            _0x43e053(_0x4116c6['GL_postPath'], _0x18368c(0x1d0), '')[_0x18368c(0x351)](() => {
                                let _0x2fa839 = setInterval(() => {
                                    const _0x415a7c = a0_0xa48a;
                                    if (_0x4f7051(_0x415a7c(0x44b))[_0x415a7c(0x1e2)] > 0x0) {
                                        clearInterval(_0x2fa839);
                                        var _0x29f6c8 = _0x4f7051(_0x415a7c(0x282) + (_0x32567d + 0x1) + '\x22]')?.[_0x415a7c(0x253)]('data-href');
                                        _0x29f6c8 ? (_0x5ac088(![]), _0x4f7051(_0x415a7c(0x282) + (_0x32567d + 0x1) + '\x22]')?.[_0x415a7c(0x43e)](_0x415a7c(0x2a9))) : alert('Can\x20not\x20find\x20download\x20url.'), _0x4f7051('.IG_POPUP_DIG')['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x38b6ed[_0x18368c(0x313)]) {
                            var _0x5039ed = 0x0, _0x16b511 = _0x4f7051(this)[_0x18368c(0x45c)]()[_0x18368c(0x45c)]()[_0x18368c(0x335)](_0x5bcc93)[_0x18368c(0x1e2)], _0x292a89 = _0x38b6ed['FORCE_FETCH_ALL_RESOURCES'], _0x2b0e54 = new Date(_0x4f7051(this)[_0x18368c(0x45c)]()[_0x18368c(0x45c)]()[_0x18368c(0x45c)]()['find']('a[href]\x20time[datetime]')[_0x18368c(0x477)](function () {
                                    const _0x4988f1 = _0x18368c;
                                    let _0x2f4b73 = _0x4f7051(this)['parents'](_0x4988f1(0x27f))[_0x4988f1(0x253)](_0x4988f1(0x27d));
                                    return _0x2f4b73?.[_0x4988f1(0x299)](_0x4988f1(0x2bd)) || _0x2f4b73?.[_0x4988f1(0x40d)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })['first']()['attr']('datetime'))[_0x18368c(0x397)]();
                            if (_0x16b511)
                                _0x4f7051(this)[_0x18368c(0x45c)]()[_0x18368c(0x45c)]()['find'](_0x5bcc93)['each'](function () {
                                    const _0x1cf927 = _0x18368c;
                                    let _0x56d7a2 = _0x4f7051(this)[_0x1cf927(0x45c)]()['parent']()[_0x1cf927(0x45c)]()[_0x1cf927(0x335)](_0x1cf927(0x369));
                                    _0x56d7a2 && _0x56d7a2[_0x1cf927(0x253)]('src') && (_0x292a89 = !![]);
                                }), _0x292a89 || _0x38b6ed[_0x18368c(0x3ff)] ? _0x43e053(_0x4116c6['GL_postPath'], _0x18368c(0x1d0), _0x4e68d5(_0x18368c(0x44a))) : (_0x4f7051(this)[_0x18368c(0x45c)]()[_0x18368c(0x45c)]()[_0x18368c(0x335)](_0x5bcc93)[_0x18368c(0x2f4)](function () {
                                    const _0x160b23 = _0x18368c;
                                    _0x5039ed++;
                                    let _0x59bbbd = _0x4f7051(this)[_0x160b23(0x335)](_0x160b23(0x369)), _0x8b134f = _0x4f7051(this)[_0x160b23(0x335)](_0x160b23(0x328)), _0x4d532d = _0x8b134f[_0x160b23(0x253)]('srcset') ? _0x8b134f[_0x160b23(0x253)](_0x160b23(0x1aa))[_0x160b23(0x430)]('\x20')[0x0] : _0x8b134f[_0x160b23(0x253)](_0x160b23(0x3b6));
                                    _0x59bbbd && _0x59bbbd[_0x160b23(0x253)]('src') && (_0x292a89 = !![]), _0x8b134f && _0x4d532d && _0x4f7051('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY')[_0x160b23(0x1b2)]('<a\x20datetime=\x22' + _0x2b0e54 + _0x160b23(0x349) + _0x4116c6[_0x160b23(0x1c5)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x5039ed + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x4d532d + _0x160b23(0x366) + _0x4d532d + _0x160b23(0x3b2) + _0x4e68d5(_0x160b23(0x228)) + _0x160b23(0x2d1) + _0x5039ed + '\x20-</a>');
                                }), _0x292a89 && _0x43e053(_0x4116c6['GL_postPath'], _0x18368c(0x1d0), _0x4e68d5(_0x18368c(0x3eb))));
                            else {
                                if (_0x38b6ed[_0x18368c(0x3ff)])
                                    _0x43e053(_0x4116c6[_0x18368c(0x1c5)], _0x18368c(0x1d0), _0x4e68d5(_0x18368c(0x44a)));
                                else {
                                    _0x5039ed++;
                                    let _0x11f441 = _0x4f7051(this)[_0x18368c(0x45c)]()[_0x18368c(0x45c)]()[_0x18368c(0x45c)]()['find'](_0x18368c(0x369)), _0x575a39 = _0x4f7051(this)[_0x18368c(0x45c)]()[_0x18368c(0x45c)]()[_0x18368c(0x45c)]()['find'](_0x18368c(0x328)), _0x5b2e1c = _0x575a39[_0x18368c(0x253)](_0x18368c(0x1aa)) ? _0x575a39[_0x18368c(0x253)](_0x18368c(0x1aa))[_0x18368c(0x430)]('\x20')[0x0] : _0x575a39[_0x18368c(0x253)](_0x18368c(0x3b6));
                                    _0x11f441 && _0x11f441['attr'](_0x18368c(0x3b6)) && _0x43e053(_0x4116c6[_0x18368c(0x1c5)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x4e68d5(_0x18368c(0x383))), _0x575a39 && _0x5b2e1c && _0x4f7051(_0x18368c(0x1d0))['append'](_0x18368c(0x425) + _0x2b0e54 + _0x18368c(0x349) + _0x4116c6['GL_postPath'] + _0x18368c(0x3e1) + _0x5039ed + _0x18368c(0x2fb) + _0x5b2e1c + _0x18368c(0x366) + _0x5b2e1c + _0x18368c(0x3b2) + _0x4e68d5(_0x18368c(0x228)) + _0x18368c(0x2d1) + _0x5039ed + _0x18368c(0x2cd));
                                }
                            }
                        }
                        _0x4f7051('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x18368c(0x2f4)](function () {
                            const _0x35b528 = _0x18368c;
                            _0x4f7051(this)[_0x35b528(0x2c7)](_0x35b528(0x388)), _0x4f7051(this)['before']('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x4f7051(this)[_0x35b528(0x280)](_0x35b528(0x1d2) + _0x4e68d5(_0x35b528(0x1ee)) + _0x35b528(0x28f) + _0x44169f[_0x35b528(0x1ee)] + _0x35b528(0x1f6)), _0x4f7051(this)['attr']('data-name') == _0x35b528(0x369) && _0x4f7051(this)['after'](_0x35b528(0x263) + _0x4e68d5(_0x35b528(0x300)) + _0x35b528(0x46e) + _0x44169f[_0x35b528(0x250)] + _0x35b528(0x1f6));
                        }), _0x38b6ed['DIRECT_DOWNLOAD_ALL'] && _0x43e053(_0x4116c6[_0x18368c(0x1c5)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x4e68d5(_0x18368c(0x44a)))[_0x18368c(0x351)](() => {
                            let _0x51ccb1 = setInterval(() => {
                                const _0xb87cb0 = a0_0xa48a;
                                _0x4f7051('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0xb87cb0(0x1e2)] > 0x0 && (clearInterval(_0x51ccb1), _0x4f7051(_0xb87cb0(0x44b))[_0xb87cb0(0x2f4)](function () {
                                    const _0x1ab649 = _0xb87cb0;
                                    _0x4f7051(this)[_0x1ab649(0x43e)]('click');
                                }), _0x4f7051('.IG_POPUP_DIG')['remove']());
                            }, 0xfa);
                        });
                    });
                    var _0x10fdb3 = _0x4f7051(this)[_0x3a8a79(0x335)]('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x3a8a79(0x207)]()[_0x3a8a79(0x1c4)]() || _0x4f7051(this)[_0x3a8a79(0x335)](_0x3a8a79(0x1b5))['filter'](function () {
                        const _0x5bf58f = _0x3a8a79;
                        return _0x4f7051(this)?.[_0x5bf58f(0x1c4)]()?.[_0x5bf58f(0x1e2)] > 0x0;
                    })[_0x3a8a79(0x207)]()[_0x3a8a79(0x1c4)]();
                    _0x4f7051(this)['attr'](_0x3a8a79(0x241), 'canDownload'), _0x4f7051(this)[_0x3a8a79(0x253)]('data-username', _0x10fdb3);
                }
            });
        }
        function _0x353dd3(_0x362f0f) {
            const _0x31d325 = _0x8bfcd5;
            var _0x5b71cc = _0x362f0f['shortcode_media'] ?? _0x362f0f;
            return _0x5b71cc[_0x31d325(0x1e0)] == null && _0x5b71cc[_0x31d325(0x409)] != null && (_0x5b71cc['owner'] = _0x5b71cc['user']), _0x5b71cc['owner'] == null && (_0x128583('carousel_media:', _0x31d325(0x26c)), alert('carousel_media:\x20undefined\x20username')), _0x5b71cc;
        }
        async function _0x43e053(_0x5204a6, _0x1db445, _0x5933af) {
            const _0x4c5667 = _0x8bfcd5;
            try {
                _0x4f7051(_0x1db445 + '\x20a')[_0x4c5667(0x25a)](), _0x4f7051(_0x1db445)[_0x4c5667(0x1b2)](_0x4c5667(0x32b) + _0x5933af + _0x4c5667(0x41c));
                let _0x1bb5d2 = await _0x5ba2ae(_0x5204a6), _0x2fba65 = _0x353dd3(_0x1bb5d2[_0x4c5667(0x35e)]);
                if (_0x1bb5d2['type'] === _0x4c5667(0x325)) {
                    let _0x5583dd = 0x1;
                    _0x2fba65['__typename'] == _0x4c5667(0x323) && _0x2fba65[_0x4c5667(0x2ae)] && (_0x4f7051(_0x1db445)[_0x4c5667(0x1b2)]('<a\x20media-id=\x22' + _0x2fba65['id'] + '\x22\x20datetime=\x22' + _0x2fba65[_0x4c5667(0x1d6)] + _0x4c5667(0x315) + _0x2fba65[_0x4c5667(0x416)] + _0x4c5667(0x244) + _0x2fba65[_0x4c5667(0x1e0)][_0x4c5667(0x2c9)] + _0x4c5667(0x276) + _0x5583dd + _0x4c5667(0x293) + _0x2fba65[_0x4c5667(0x2ae)] + _0x4c5667(0x366) + _0x2fba65['display_resources'][0x1]['src'] + _0x4c5667(0x2ec) + _0x4e68d5(_0x4c5667(0x3cd)) + _0x4c5667(0x2d1) + _0x5583dd + _0x4c5667(0x2cd)), _0x5583dd++);
                    _0x2fba65[_0x4c5667(0x1cd)] == _0x4c5667(0x353) && (_0x4f7051(_0x1db445)['append'](_0x4c5667(0x2d2) + _0x2fba65['id'] + _0x4c5667(0x2ad) + _0x2fba65['taken_at_timestamp'] + _0x4c5667(0x315) + _0x2fba65['shortcode'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x2fba65['owner'][_0x4c5667(0x2c9)] + _0x4c5667(0x276) + _0x5583dd + _0x4c5667(0x293) + _0x2fba65[_0x4c5667(0x27e)][_0x2fba65['display_resources'][_0x4c5667(0x1e2)] - 0x1][_0x4c5667(0x3b6)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2fba65[_0x4c5667(0x27e)][0x1][_0x4c5667(0x3b6)] + _0x4c5667(0x3b2) + _0x4e68d5(_0x4c5667(0x228)) + _0x4c5667(0x2d1) + _0x5583dd + _0x4c5667(0x2cd)), _0x5583dd++);
                    if (_0x2fba65['__typename'] == 'GraphSidecar' && _0x2fba65[_0x4c5667(0x358)])
                        for (let _0x50bae4 of _0x2fba65['edge_sidecar_to_children'][_0x4c5667(0x32f)]) {
                            _0x50bae4[_0x4c5667(0x25b)][_0x4c5667(0x1cd)] == 'GraphVideo' && _0x4f7051(_0x1db445)[_0x4c5667(0x1b2)]('<a\x20media-id=\x22' + _0x50bae4[_0x4c5667(0x25b)]['id'] + _0x4c5667(0x2ad) + _0x2fba65[_0x4c5667(0x1d6)] + _0x4c5667(0x315) + _0x2fba65[_0x4c5667(0x416)] + _0x4c5667(0x244) + _0x2fba65[_0x4c5667(0x1e0)][_0x4c5667(0x2c9)] + '\x22\x20data-globalIndex=\x22' + _0x5583dd + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x50bae4[_0x4c5667(0x25b)][_0x4c5667(0x2ae)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x50bae4[_0x4c5667(0x25b)][_0x4c5667(0x27e)][0x1][_0x4c5667(0x3b6)] + _0x4c5667(0x31b) + _0x4e68d5(_0x4c5667(0x3cd)) + _0x4c5667(0x2d1) + _0x5583dd + _0x4c5667(0x2cd)), _0x50bae4[_0x4c5667(0x25b)][_0x4c5667(0x1cd)] == _0x4c5667(0x353) && _0x4f7051(_0x1db445)['append']('<a\x20media-id=\x22' + _0x50bae4['node']['id'] + _0x4c5667(0x2ad) + _0x2fba65[_0x4c5667(0x1d6)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2fba65[_0x4c5667(0x416)] + _0x4c5667(0x3b3) + _0x2fba65[_0x4c5667(0x1e0)][_0x4c5667(0x2c9)] + '\x22\x20data-globalIndex=\x22' + _0x5583dd + _0x4c5667(0x293) + _0x50bae4[_0x4c5667(0x25b)][_0x4c5667(0x27e)][_0x50bae4[_0x4c5667(0x25b)][_0x4c5667(0x27e)]['length'] - 0x1]['src'] + _0x4c5667(0x366) + _0x50bae4[_0x4c5667(0x25b)][_0x4c5667(0x27e)][0x1][_0x4c5667(0x3b6)] + _0x4c5667(0x3b2) + _0x4e68d5(_0x4c5667(0x228)) + _0x4c5667(0x2d1) + _0x5583dd + _0x4c5667(0x2cd)), _0x5583dd++;
                        }
                } else {
                    if (_0x2fba65['carousel_media'])
                        _0x128583(_0x4c5667(0x345)), _0x2fba65[_0x4c5667(0x345)][_0x4c5667(0x2c5)]((_0x5a2988, _0x19d34f) => {
                            const _0x72ffef = _0x4c5667;
                            let _0x50fcdc = _0x19d34f + 0x1;
                            _0x5a2988[_0x72ffef(0x3bf)] == null ? (_0x5a2988['image_versions2'][_0x72ffef(0x28d)][_0x72ffef(0x31c)](function (_0x51fafb, _0x18ebe0) {
                                const _0x20bdbe = _0x72ffef;
                                let _0x442894 = new URL(_0x51fafb[_0x20bdbe(0x246)])[_0x20bdbe(0x1cb)][_0x20bdbe(0x446)]('stp'), _0x5dc7ac = new URL(_0x18ebe0[_0x20bdbe(0x246)])[_0x20bdbe(0x1cb)][_0x20bdbe(0x446)](_0x20bdbe(0x410));
                                if (_0x442894 && _0x5dc7ac) {
                                    if (_0x442894[_0x20bdbe(0x1e2)] > _0x5dc7ac[_0x20bdbe(0x1e2)])
                                        return 0x1;
                                    if (_0x442894['length'] < _0x5dc7ac[_0x20bdbe(0x1e2)])
                                        return -0x1;
                                } else {
                                    if (_0x51fafb[_0x20bdbe(0x426)] < _0x18ebe0[_0x20bdbe(0x426)])
                                        return 0x1;
                                    if (_0x51fafb[_0x20bdbe(0x426)] > _0x18ebe0[_0x20bdbe(0x426)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x4f7051(_0x1db445)['append'](_0x72ffef(0x2d2) + _0x5a2988['pk'] + _0x72ffef(0x2ad) + _0x5a2988[_0x72ffef(0x37d)] + _0x72ffef(0x315) + _0x2fba65[_0x72ffef(0x215)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x2fba65[_0x72ffef(0x1e0)][_0x72ffef(0x2c9)] + '\x22\x20data-globalIndex=\x22' + _0x50fcdc + _0x72ffef(0x293) + _0x5a2988[_0x72ffef(0x2f1)]['candidates'][0x0][_0x72ffef(0x246)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5a2988[_0x72ffef(0x2f1)][_0x72ffef(0x28d)][0x0][_0x72ffef(0x246)] + _0x72ffef(0x3b2) + _0x4e68d5(_0x72ffef(0x228)) + _0x72ffef(0x2d1) + _0x50fcdc + '\x20-</a>')) : _0x4f7051(_0x1db445)[_0x72ffef(0x1b2)]('<a\x20media-id=\x22' + _0x5a2988['pk'] + _0x72ffef(0x2ad) + _0x5a2988[_0x72ffef(0x37d)] + _0x72ffef(0x315) + _0x2fba65[_0x72ffef(0x215)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x2fba65['owner'][_0x72ffef(0x2c9)] + _0x72ffef(0x276) + _0x50fcdc + _0x72ffef(0x293) + _0x5a2988[_0x72ffef(0x3bf)][0x0]['url'] + _0x72ffef(0x366) + _0x5a2988[_0x72ffef(0x2f1)]['candidates'][0x0]['url'] + _0x72ffef(0x2ec) + _0x4e68d5(_0x72ffef(0x3cd)) + _0x72ffef(0x2d1) + _0x50fcdc + '\x20-</a>');
                        });
                    else {
                        let _0x3e647f = 0x1;
                        _0x2fba65[_0x4c5667(0x3bf)] == null ? (_0x2fba65[_0x4c5667(0x2f1)][_0x4c5667(0x28d)][_0x4c5667(0x31c)](function (_0x3d89fc, _0x5d9e20) {
                            const _0x2d5d4c = _0x4c5667;
                            let _0x13f178 = new URL(_0x3d89fc[_0x2d5d4c(0x246)])[_0x2d5d4c(0x1cb)][_0x2d5d4c(0x446)](_0x2d5d4c(0x410)), _0x12bf97 = new URL(_0x5d9e20[_0x2d5d4c(0x246)])[_0x2d5d4c(0x1cb)]['get']('stp');
                            if (_0x13f178 && _0x12bf97) {
                                if (_0x13f178[_0x2d5d4c(0x1e2)] > _0x12bf97[_0x2d5d4c(0x1e2)])
                                    return 0x1;
                                if (_0x13f178[_0x2d5d4c(0x1e2)] < _0x12bf97['length'])
                                    return -0x1;
                            } else {
                                if (_0x3d89fc[_0x2d5d4c(0x426)] < _0x5d9e20[_0x2d5d4c(0x426)])
                                    return 0x1;
                                if (_0x3d89fc[_0x2d5d4c(0x426)] > _0x5d9e20['width'])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x4f7051(_0x1db445)[_0x4c5667(0x1b2)](_0x4c5667(0x2d2) + _0x2fba65['pk'] + _0x4c5667(0x2ad) + _0x2fba65[_0x4c5667(0x37d)] + _0x4c5667(0x315) + _0x2fba65[_0x4c5667(0x215)] + _0x4c5667(0x3b3) + _0x2fba65[_0x4c5667(0x1e0)][_0x4c5667(0x2c9)] + _0x4c5667(0x276) + _0x3e647f + _0x4c5667(0x293) + _0x2fba65[_0x4c5667(0x2f1)][_0x4c5667(0x28d)][0x0][_0x4c5667(0x246)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2fba65['image_versions2'][_0x4c5667(0x28d)][0x0][_0x4c5667(0x246)] + _0x4c5667(0x3b2) + _0x4e68d5(_0x4c5667(0x228)) + _0x4c5667(0x2d1) + _0x3e647f + _0x4c5667(0x2cd))) : _0x4f7051(_0x1db445)[_0x4c5667(0x1b2)]('<a\x20media-id=\x22' + _0x2fba65['pk'] + _0x4c5667(0x2ad) + _0x2fba65[_0x4c5667(0x37d)] + _0x4c5667(0x315) + _0x2fba65['code'] + _0x4c5667(0x244) + _0x2fba65[_0x4c5667(0x1e0)][_0x4c5667(0x2c9)] + _0x4c5667(0x276) + _0x3e647f + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x2fba65['video_versions'][0x0][_0x4c5667(0x246)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2fba65['image_versions2'][_0x4c5667(0x28d)][0x0][_0x4c5667(0x246)] + _0x4c5667(0x2ec) + _0x4e68d5('VID') + _0x4c5667(0x2d1) + _0x3e647f + _0x4c5667(0x2cd));
                    }
                }
                _0x4f7051('#_SNLOAD')['remove'](), _0x4f7051('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x4c5667(0x2f4)](function () {
                    const _0xc551f8 = _0x4c5667;
                    _0x4f7051(this)[_0xc551f8(0x2c7)]('<div></div>'), _0x4f7051(this)['before']('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x4f7051(this)[_0xc551f8(0x280)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x4e68d5('NEW_TAB') + _0xc551f8(0x28f) + _0x44169f[_0xc551f8(0x1ee)] + _0xc551f8(0x1f6)), _0x4f7051(this)[_0xc551f8(0x253)](_0xc551f8(0x3f5)) == _0xc551f8(0x369) && _0x4f7051(this)[_0xc551f8(0x280)](_0xc551f8(0x263) + _0x4e68d5(_0xc551f8(0x300)) + _0xc551f8(0x46e) + _0x44169f[_0xc551f8(0x250)] + _0xc551f8(0x1f6));
                });
            } catch (_0x59b996) {
                _0x128583(_0x4c5667(0x2de), _0x59b996);
            }
            ;
        }
        function _0xe503b3(_0x45c18e) {
            const _0x3ad892 = _0x8bfcd5;
            var _0x931664 = 0x0, _0x2b7eaf = _0x45c18e[_0x3ad892(0x335)](_0x3ad892(0x27b));
            return (_0x2b7eaf == null || !_0x2b7eaf[_0x3ad892(0x294)]('_acnb')) && (_0x2b7eaf = _0x45c18e['find'](_0x3ad892(0x279))['eq'](0x0)[_0x3ad892(0x26b)](_0x3ad892(0x460))), _0x2b7eaf[_0x3ad892(0x477)](_0x3ad892(0x30f))[_0x3ad892(0x2f4)](function (_0x4b1b8a) {
                const _0x54013c = _0x3ad892;
                _0x4f7051(this)[_0x54013c(0x294)]('_acnf') && (_0x931664 = _0x4b1b8a);
            }), _0x931664;
        }
        async function _0x28ff59(_0x21badf) {
            const _0x4cf250 = _0x8bfcd5;
            if (_0x21badf) {
                _0x5ac088(!![]);
                let _0x1a565e = new Date()[_0x4cf250(0x397)](), _0xee015 = Math[_0x4cf250(0x31d)](_0x1a565e / 0x3e8), _0x48f9ec = location[_0x4cf250(0x43b)][_0x4cf250(0x436)](/(reels|tagged)\/$/ig, '')[_0x4cf250(0x430)]('/')['filter'](_0x10351c => _0x10351c[_0x4cf250(0x1e2)] > 0x0)['at'](-0x1), _0x1e509f = await _0x4562a5(_0x48f9ec);
                try {
                    let _0x4ef47e = await _0x3ca36e(_0x1e509f[_0x4cf250(0x409)]['pk']);
                    _0x5a9811(_0x4ef47e, _0x48f9ec, _0x4cf250(0x3c2), _0xee015, _0x4cf250(0x2c3));
                } catch (_0x24c7bb) {
                    _0x5a9811(_0x1e509f[_0x4cf250(0x409)][_0x4cf250(0x308)], _0x48f9ec, _0x4cf250(0x3c2), _0xee015, _0x4cf250(0x2c3));
                }
                _0x5ac088(![]);
            } else {
                if (!_0x4f7051(_0x4cf250(0x2b6))['length']) {
                    let _0x57f9a0 = setInterval(() => {
                        const _0x356b27 = _0x4cf250;
                        if (_0x4f7051(_0x356b27(0x2b6))['length']) {
                            clearInterval(_0x57f9a0);
                            return;
                        }
                        _0x4f7051(_0x356b27(0x1f0))[_0x356b27(0x45c)]()['parent']()[_0x356b27(0x1b2)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x4e68d5('DW') + _0x356b27(0x3a2) + _0x44169f[_0x356b27(0x2b3)] + _0x356b27(0x1f6)), _0x4f7051(_0x356b27(0x1f0))[_0x356b27(0x45c)]()['parent']()[_0x356b27(0x3e2)]('position', _0x356b27(0x1fb)), _0x4f7051('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')['parent']()[_0x356b27(0x45c)]()[_0x356b27(0x45c)]()[_0x356b27(0x1b2)](_0x356b27(0x1ea) + _0x4e68d5('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x44169f[_0x356b27(0x2b3)] + _0x356b27(0x1f6)), _0x4f7051(_0x356b27(0x346))[_0x356b27(0x45c)]()[_0x356b27(0x45c)]()[_0x356b27(0x45c)]()[_0x356b27(0x3e2)]('position', 'relative');
                    }, 0x96);
                }
            }
        }
        async function _0x24ba99(_0x529f00, _0x504254, _0x45032e) {
            const _0x5bc1be = _0x8bfcd5;
            if (_0x529f00) {
                _0x5ac088(!![]);
                let _0x345c3b = location['href'][_0x5bc1be(0x430)]('?')['at'](0x0)[_0x5bc1be(0x430)](_0x5bc1be(0x391))['at'](-0x1)[_0x5bc1be(0x436)]('/', ''), _0x23c34e = await _0x5ba2ae(_0x345c3b), _0x2165a3 = _0x353dd3(_0x23c34e[_0x5bc1be(0x35e)]), _0x2453ba = new Date()[_0x5bc1be(0x397)]();
                _0x38b6ed[_0x5bc1be(0x37f)] && (_0x23c34e[_0x5bc1be(0x380)] === _0x5bc1be(0x325) ? _0x2453ba = _0x2165a3['shortcode_media'][_0x5bc1be(0x1d6)] : _0x2453ba = _0x2165a3['taken_at']);
                if (_0x23c34e[_0x5bc1be(0x380)] === _0x5bc1be(0x325)) {
                    if (_0x504254 && _0x2165a3[_0x5bc1be(0x2d4)]['is_video']) {
                        if (_0x45032e)
                            _0x4cea82(_0x2165a3[_0x5bc1be(0x2d4)][_0x5bc1be(0x2ae)]);
                        else {
                            let _0x1f7915 = _0x5bc1be(0x23b);
                            _0x5a9811(_0x2165a3[_0x5bc1be(0x2d4)][_0x5bc1be(0x2ae)], _0x2165a3['shortcode_media'][_0x5bc1be(0x1e0)][_0x5bc1be(0x2c9)], 'reels', _0x2453ba, _0x1f7915, _0x345c3b);
                        }
                    } else {
                        if (_0x45032e)
                            _0x4cea82(_0x2165a3['shortcode_media'][_0x5bc1be(0x27e)]['at'](-0x1)[_0x5bc1be(0x3b6)]);
                        else {
                            let _0x136b60 = _0x5bc1be(0x2c3);
                            _0x5a9811(_0x2165a3[_0x5bc1be(0x2d4)][_0x5bc1be(0x27e)]['at'](-0x1)[_0x5bc1be(0x3b6)], _0x2165a3['shortcode_media'][_0x5bc1be(0x1e0)][_0x5bc1be(0x2c9)], _0x5bc1be(0x338), _0x2453ba, _0x136b60, _0x345c3b);
                        }
                    }
                } else {
                    if (_0x504254 && _0x2165a3[_0x5bc1be(0x3bf)] != null) {
                        if (_0x45032e)
                            _0x4cea82(_0x2165a3[_0x5bc1be(0x3bf)][0x0][_0x5bc1be(0x246)]);
                        else {
                            let _0x3eb70d = _0x5bc1be(0x23b);
                            _0x5a9811(_0x2165a3['video_versions'][0x0][_0x5bc1be(0x246)], _0x2165a3[_0x5bc1be(0x1e0)]['username'], _0x5bc1be(0x338), _0x2453ba, _0x3eb70d, _0x345c3b);
                        }
                    } else {
                        if (_0x45032e)
                            _0x4cea82(_0x2165a3[_0x5bc1be(0x2f1)][_0x5bc1be(0x28d)][0x0]['url']);
                        else {
                            let _0x4f0ee5 = 'jpg';
                            _0x5a9811(_0x2165a3[_0x5bc1be(0x2f1)][_0x5bc1be(0x28d)][0x0][_0x5bc1be(0x246)], _0x2165a3[_0x5bc1be(0x1e0)][_0x5bc1be(0x2c9)], _0x5bc1be(0x338), _0x2453ba, _0x4f0ee5, _0x345c3b);
                        }
                    }
                }
                _0x5ac088(![]);
            } else
                var _0x3a41e0 = setInterval(() => {
                    const _0x451a65 = _0x5bc1be;
                    _0x4f7051('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')['length'] > 0x0 && (clearInterval(_0x3a41e0), _0x38b6ed[_0x451a65(0x240)] && (_0x4f7051(_0x451a65(0x42e))['remove'](), _0x4f7051(_0x451a65(0x212))[_0x451a65(0x1b2)](_0x451a65(0x3d2)), _0x4f7051('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')['append'](_0x451a65(0x229)), _0x4f7051(_0x451a65(0x2f8))[_0x451a65(0x1b2)](_0x451a65(0x3f6)), _0x4f7051(_0x451a65(0x2d6))['on'](_0x451a65(0x2a9), function () {
                        const _0x1195f = _0x451a65;
                        _0x4f7051(_0x1195f(0x28b))[0x0]['scrollBy']({
                            'top': -0x1e,
                            'behavior': _0x1195f(0x206)
                        });
                    }), _0x4f7051(_0x451a65(0x357))['on'](_0x451a65(0x2a9), function () {
                        _0x4f7051('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0]['scrollBy']({
                            'top': 0x1e,
                            'behavior': 'smooth'
                        });
                    })), _0x4f7051('section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex],\x20section\x20>\x20main[role=\x22main\x22]\x20>\x20div[class]')[_0x451a65(0x26b)](_0x451a65(0x460))[_0x451a65(0x2f4)](function () {
                        const _0x2dd90c = _0x451a65;
                        if (_0x4f7051(this)[_0x2dd90c(0x26b)]()[_0x2dd90c(0x1e2)] > 0x0) {
                            if (!_0x4f7051(this)[_0x2dd90c(0x26b)]()[_0x2dd90c(0x335)](_0x2dd90c(0x29f))['length']) {
                                var _0x547b49 = _0x4f7051(this);
                                _0x4f7051(this)['children']()['css']('position', _0x2dd90c(0x1fb)), _0x4f7051(this)[_0x2dd90c(0x26b)]()[_0x2dd90c(0x1b2)](_0x2dd90c(0x1ea) + _0x4e68d5('DW') + _0x2dd90c(0x200) + _0x44169f['DOWNLOAD'] + _0x2dd90c(0x1f6)), _0x4f7051(this)['children']()[_0x2dd90c(0x1b2)](_0x2dd90c(0x1d2) + _0x4e68d5('NEW_TAB') + _0x2dd90c(0x220) + _0x44169f[_0x2dd90c(0x1ee)] + _0x2dd90c(0x1f6)), _0x4f7051(this)[_0x2dd90c(0x26b)]()[_0x2dd90c(0x1b2)](_0x2dd90c(0x263) + _0x4e68d5(_0x2dd90c(0x300)) + _0x2dd90c(0x427) + _0x44169f[_0x2dd90c(0x250)] + _0x2dd90c(0x1f6));
                                _0x38b6ed[_0x2dd90c(0x472)] && _0x4f7051(this)[_0x2dd90c(0x335)](_0x2dd90c(0x369))['each'](function () {
                                    const _0x3c97f1 = _0x2dd90c;
                                    _0x4f7051(this)['on'](_0x3c97f1(0x470), function () {
                                        const _0xa9f29b = _0x3c97f1;
                                        if (!_0x4f7051(this)['data'](_0xa9f29b(0x2e2))) {
                                            let _0x2a9265 = _0x4f7051(this)[_0xa9f29b(0x26d)]()[_0xa9f29b(0x335)](_0xa9f29b(0x362))[_0xa9f29b(0x236)]('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x2a9265[_0xa9f29b(0x1e2)] > 0x0 ? (_0x4f7051(this)[_0xa9f29b(0x253)](_0xa9f29b(0x3c9), !![]), _0x2a9265[_0xa9f29b(0x43e)](_0xa9f29b(0x2a9)), _0x128583(_0xa9f29b(0x1b6))) : (_0x4f7051(this)[_0xa9f29b(0x253)]('data-loop', !![]), _0x4f7051(this)[_0xa9f29b(0x45c)]()[_0xa9f29b(0x335)](_0xa9f29b(0x2fa))[_0xa9f29b(0x1d9)]('style'), this[_0xa9f29b(0x303)](), _0x128583(_0xa9f29b(0x27a)));
                                        }
                                    });
                                });
                                _0x38b6ed[_0x2dd90c(0x1b1)] && _0x4f7051(this)['find'](_0x2dd90c(0x369))[_0x2dd90c(0x2f4)](function () {
                                    const _0x1577a7 = _0x2dd90c;
                                    if (!_0x4f7051(this)[_0x1577a7(0x35e)](_0x1577a7(0x453))) {
                                        let _0x74b10c = _0x4f7051(this);
                                        _0x128583(_0x1577a7(0x450)), _0x38b6ed[_0x1577a7(0x431)] && (this[_0x1577a7(0x3c3)] = _0x4116c6[_0x1577a7(0x210)], _0x4f7051(this)['on'](_0x1577a7(0x278), function () {
                                            const _0x3a4432 = _0x1577a7;
                                            this['volume'] = _0x4116c6[_0x3a4432(0x210)];
                                        })), _0x4f7051(this)['on'](_0x1577a7(0x298), function (_0xc6ed53) {
                                            const _0x1c4de6 = _0x1577a7;
                                            _0xc6ed53[_0x1c4de6(0x32e)](), _0x74b10c[_0x1c4de6(0x3e2)]('z-index', '-1'), _0x74b10c[_0x1c4de6(0x1d9)](_0x1c4de6(0x453));
                                        }), _0x4f7051(this)[_0x1577a7(0x45c)]()[_0x1577a7(0x335)](_0x1577a7(0x292))[_0x1577a7(0x477)](function () {
                                            const _0x98bc2 = _0x1577a7;
                                            return _0x4f7051(this)[_0x98bc2(0x45c)](_0x98bc2(0x377))[_0x98bc2(0x1e2)] > 0x0 && _0x4f7051(this)['css'](_0x98bc2(0x415)) === 'pointer' && _0x4f7051(this)['attr'](_0x98bc2(0x3e9)) != null;
                                        })[_0x1577a7(0x207)]()['on'](_0x1577a7(0x298), function (_0x35c22e) {
                                            const _0x28410b = _0x1577a7;
                                            _0x35c22e['preventDefault'](), _0x74b10c['css'](_0x28410b(0x1ac), '2'), _0x74b10c[_0x28410b(0x253)](_0x28410b(0x453), !![]);
                                        }), _0x4f7051(this)['on'](_0x1577a7(0x3d8), function () {
                                            const _0x3e6a28 = _0x1577a7;
                                            let _0x346277 = _0x4f7051(this)[_0x3e6a28(0x45c)]()[_0x3e6a28(0x335)](_0x3e6a28(0x421))[_0x3e6a28(0x335)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x3e6a28(0x477)](function (_0x42c344) {
                                                const _0x4057e9 = _0x3e6a28;
                                                return _0x4f7051(this)[_0x4057e9(0x426)]() <= 0x40 && _0x4f7051(this)['height']() <= 0x40 && _0x4f7051(this)[_0x4057e9(0x335)](_0x4057e9(0x314))[_0x4057e9(0x1e2)] > 0x0;
                                            });
                                            var _0x44f739 = _0x346277[_0x3e6a28(0x335)](_0x3e6a28(0x248))[_0x3e6a28(0x1e2)] === 0x0;
                                            this[_0x3e6a28(0x3f3)] != _0x44f739 && (this['volume'] = _0x4116c6[_0x3e6a28(0x210)], _0x346277?.['trigger'](_0x3e6a28(0x2a9))), _0x4f7051(this)[_0x3e6a28(0x253)](_0x3e6a28(0x26f)) && (_0x4116c6[_0x3e6a28(0x210)] = this[_0x3e6a28(0x3c3)], GM_setValue(_0x3e6a28(0x43c), this[_0x3e6a28(0x3c3)])), this[_0x3e6a28(0x3c3)] == _0x4116c6['videoVolume'] && _0x4f7051(this)[_0x3e6a28(0x253)](_0x3e6a28(0x26f), !![]);
                                        }), _0x4f7051(this)[_0x1577a7(0x3e2)](_0x1577a7(0x3b4), _0x1577a7(0x1f3)), _0x4f7051(this)['css'](_0x1577a7(0x1ac), '2'), _0x4f7051(this)[_0x1577a7(0x253)](_0x1577a7(0x29e), !![]), _0x4f7051(this)[_0x1577a7(0x253)](_0x1577a7(0x453), !![]);
                                    }
                                });
                                var _0x4b3329 = _0x547b49[_0x2dd90c(0x335)](_0x2dd90c(0x369)), _0x429dad = _0x4f7051(this)['find']('div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div')[_0x2dd90c(0x207)]();
                                _0x2138a6(_0x4b3329, _0x429dad, _0x2dd90c(0x1b3));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x9ffb75() {
            const _0x20cb47 = _0x8bfcd5;
            _0x5ac088(!![]);
            let _0x59daaf = new Date()[_0x20cb47(0x397)](), _0x45e798 = Math[_0x20cb47(0x31d)](_0x59daaf / 0x3e8), _0x5eb0a5 = _0x4f7051('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x20cb47(0x207)]()[_0x20cb47(0x1c4)]() || location[_0x20cb47(0x43b)]['split']('/')[_0x20cb47(0x477)](_0x262f07 => _0x262f07[_0x20cb47(0x1e2)] > 0x0)['at'](0x1), _0x349378 = await _0x4562a5(_0x5eb0a5), _0x4ce3d5 = _0x349378[_0x20cb47(0x409)]['pk'], _0x2bd97b = await _0x2fb91a(_0x4ce3d5), _0xebe151 = 0x0;
            _0x4a5c74(_0xebe151, _0x2bd97b['data'][_0x20cb47(0x297)][0x0][_0x20cb47(0x42a)][_0x20cb47(0x1e2)]), _0x2bd97b[_0x20cb47(0x35e)][_0x20cb47(0x297)][0x0][_0x20cb47(0x42a)]['forEach']((_0xaa623c, _0x28f3ba) => {
                setTimeout(() => {
                    const _0x49b50d = a0_0xa48a;
                    _0x38b6ed['RENAME_PUBLISH_DATE'] && (_0x45e798 = _0xaa623c['taken_at_timestamp']), _0xaa623c[_0x49b50d(0x27e)][_0x49b50d(0x31c)](function (_0x5d4d00, _0x48ac66) {
                        const _0xdfa734 = _0x49b50d;
                        if (_0x5d4d00['config_width'] < _0x48ac66[_0xdfa734(0x394)])
                            return 0x1;
                        if (_0x5d4d00[_0xdfa734(0x394)] > _0x48ac66[_0xdfa734(0x394)])
                            return -0x1;
                        return 0x0;
                    }), _0xaa623c[_0x49b50d(0x1cf)] ? _0x5a9811(_0xaa623c['video_resources'][0x0]['src'], _0x5eb0a5, _0x49b50d(0x266), _0x45e798, _0x49b50d(0x23b), _0xaa623c['id'])[_0x49b50d(0x351)](() => {
                        const _0x1fbf42 = _0x49b50d;
                        _0x4a5c74(++_0xebe151, _0x2bd97b[_0x1fbf42(0x35e)][_0x1fbf42(0x297)][0x0][_0x1fbf42(0x42a)][_0x1fbf42(0x1e2)]);
                    }) : _0x5a9811(_0xaa623c[_0x49b50d(0x27e)][0x0]['src'], _0x5eb0a5, _0x49b50d(0x266), _0x45e798, _0x49b50d(0x2c3), _0xaa623c['id'])[_0x49b50d(0x351)](() => {
                        const _0x24ebc1 = _0x49b50d;
                        _0x4a5c74(++_0xebe151, _0x2bd97b[_0x24ebc1(0x35e)][_0x24ebc1(0x297)][0x0]['items'][_0x24ebc1(0x1e2)]);
                    });
                }, 0x64 * _0x28f3ba);
            });
        }
        async function _0x2e6308(_0xac01b1, _0xa65be2, _0x20ce6e) {
            const _0x570a31 = _0x8bfcd5;
            var _0x19c83b = _0x4f7051('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()['text']() || location[_0x570a31(0x43b)][_0x570a31(0x430)]('/')[_0x570a31(0x477)](_0x5dd91e => _0x5dd91e[_0x570a31(0x1e2)] > 0x0)['at'](0x1);
            if (_0xac01b1) {
                let _0x308cab = new Date()[_0x570a31(0x397)](), _0x3ee916 = Math['floor'](_0x308cab / 0x3e8);
                _0x5ac088(!![]);
                if (_0x38b6ed[_0x570a31(0x3ff)] && !_0x4116c6[_0x570a31(0x34b)]) {
                    let _0x9f77ea = null, _0x51dd8f = await _0x4562a5(_0x19c83b), _0x3e1168 = _0x51dd8f[_0x570a31(0x409)]['pk'], _0x1efd30 = await _0x2fb91a(_0x3e1168), _0x1e355a = location['pathname']['split']('/')['filter'](_0x353a81 => _0x353a81[_0x570a31(0x1e2)] > 0x0 && _0x353a81['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x1efd30[_0x570a31(0x35e)][_0x570a31(0x297)][0x0][_0x570a31(0x42a)][_0x570a31(0x2c5)](_0x4d4ad7 => {
                        _0x4d4ad7['id'] == _0x1e355a && (_0x9f77ea = _0x4d4ad7['id']);
                    });
                    if (_0x9f77ea == null) {
                        let _0x3d48d5 = _0x29a9d2(_0x19c83b);
                        _0x3d48d5[_0x570a31(0x2f4)](function (_0xdf357) {
                            const _0x1a04f4 = _0x570a31;
                            _0x4f7051(this)[_0x1a04f4(0x26b)]()[_0x1a04f4(0x1e2)] > 0x0 && (_0x9f77ea = _0x1efd30[_0x1a04f4(0x35e)][_0x1a04f4(0x297)][0x0]['items'][_0xdf357]['id']);
                        });
                    }
                    _0x9f77ea == null && (_0x4f7051(_0x570a31(0x259))[_0x570a31(0x2f4)](function (_0x263329) {
                        const _0x480b44 = _0x570a31;
                        _0x4f7051(this)['hasClass'](_0x480b44(0x296)) && (_0x4f7051(this)[_0x480b44(0x26b)]()[_0x480b44(0x1e2)] > 0x0 && (_0x9f77ea = _0x1efd30[_0x480b44(0x35e)][_0x480b44(0x297)][0x0]['items'][_0x263329]['id']));
                    }), _0x4f7051(_0x570a31(0x27c))['each'](function (_0x58aa34) {
                        const _0x19d4bd = _0x570a31;
                        _0x4f7051(this)[_0x19d4bd(0x26b)]()[_0x19d4bd(0x294)](_0x19d4bd(0x454)) && (_0x9f77ea = _0x1efd30[_0x19d4bd(0x35e)][_0x19d4bd(0x297)][0x0]['items'][_0x58aa34]['id']);
                    }));
                    _0x9f77ea == null && (_0x9f77ea = location['pathname'][_0x570a31(0x430)]('/')['filter'](_0x18c26b => _0x18c26b[_0x570a31(0x1e2)] > 0x0 && _0x18c26b[_0x570a31(0x40d)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x50744e = await _0x370347(_0x9f77ea);
                    _0x38b6ed[_0x570a31(0x37f)] && (_0x3ee916 = _0x50744e[_0x570a31(0x42a)][0x0]['taken_at']);
                    _0x50744e[_0x570a31(0x395)] === 'ok' ? _0x50744e[_0x570a31(0x42a)][0x0]['video_versions'] ? _0x20ce6e ? _0x4cea82(_0x50744e[_0x570a31(0x42a)][0x0][_0x570a31(0x3bf)][0x0][_0x570a31(0x246)]) : _0x5a9811(_0x50744e[_0x570a31(0x42a)][0x0][_0x570a31(0x3bf)][0x0][_0x570a31(0x246)], _0x19c83b, _0x570a31(0x266), _0x3ee916, 'mp4', _0x9f77ea) : _0x20ce6e ? _0x4cea82(_0x50744e[_0x570a31(0x42a)][0x0][_0x570a31(0x2f1)][_0x570a31(0x28d)][0x0][_0x570a31(0x246)]) : _0x5a9811(_0x50744e[_0x570a31(0x42a)][0x0][_0x570a31(0x2f1)]['candidates'][0x0][_0x570a31(0x246)], _0x19c83b, _0x570a31(0x266), _0x3ee916, _0x570a31(0x2c3), _0x9f77ea) : (_0x38b6ed[_0x570a31(0x3ee)] ? (_0x4116c6[_0x570a31(0x34b)] = !![], _0x2e6308(_0xac01b1, _0xa65be2, _0x20ce6e)) : alert(_0x570a31(0x1b4) + _0x50744e[_0x570a31(0x386)]), _0x128583(_0x50744e));
                    _0x5ac088(![]);
                    return;
                }
                if (_0x4f7051(_0x570a31(0x3be))[_0x570a31(0x1e2)] > 0x0) {
                    let _0x5ef27b = _0x570a31(0x23b), _0x5dacc3 = '', _0x53fa2b = location[_0x570a31(0x43b)][_0x570a31(0x3dc)](/\/$/ig, '')[_0x570a31(0x430)]('/')['at'](-0x1), _0x1e2c16 = null;
                    if (_0x4116c6[_0x570a31(0x288)]['stories'][_0x19c83b] && !_0xa65be2) {
                        _0x128583(_0x570a31(0x20f), _0x19c83b), _0x4116c6['GL_dataCache'][_0x570a31(0x266)][_0x19c83b][_0x570a31(0x35e)][_0x570a31(0x297)][0x0]['items']['forEach'](_0x58bc79 => {
                            const _0x207974 = _0x570a31;
                            _0x58bc79['id'] == _0x53fa2b && (_0x5dacc3 = _0x58bc79[_0x207974(0x3c1)][0x0]['src'], _0x38b6ed[_0x207974(0x37f)] && (_0x3ee916 = _0x58bc79[_0x207974(0x1d6)], _0x1e2c16 = _0x58bc79['id']));
                        });
                        if (_0x5dacc3['length'] == 0x0) {
                            _0x128583(_0x570a31(0x1f9), _0x19c83b), _0x2e6308(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x39babc = await _0x4562a5(_0x19c83b), _0x493332 = _0x39babc[_0x570a31(0x409)]['pk'], _0x214efb = await _0x2fb91a(_0x493332);
                        _0x214efb[_0x570a31(0x35e)][_0x570a31(0x297)][0x0][_0x570a31(0x42a)][_0x570a31(0x2c5)](_0x4de1b3 => {
                            const _0x1fd35b = _0x570a31;
                            _0x4de1b3['id'] == _0x53fa2b && (_0x5dacc3 = _0x4de1b3[_0x1fd35b(0x3c1)][0x0][_0x1fd35b(0x3b6)], _0x38b6ed['RENAME_PUBLISH_DATE'] && (_0x3ee916 = _0x4de1b3['taken_at_timestamp'], _0x1e2c16 = _0x4de1b3['id']));
                        });
                        if (_0x5dacc3[_0x570a31(0x1e2)] == 0x0) {
                            let _0x1902bc = _0x29a9d2(_0x19c83b);
                            _0x1902bc[_0x570a31(0x2f4)](function (_0x503ed2) {
                                const _0x69f729 = _0x570a31;
                                _0x4f7051(this)[_0x69f729(0x26b)]()['length'] > 0x0 && (_0x5dacc3 = _0x214efb[_0x69f729(0x35e)][_0x69f729(0x297)][0x0][_0x69f729(0x42a)][_0x503ed2]['video_resources'][0x0][_0x69f729(0x3b6)], _0x38b6ed[_0x69f729(0x37f)] && (_0x3ee916 = _0x214efb[_0x69f729(0x35e)][_0x69f729(0x297)][0x0]['items'][_0x503ed2][_0x69f729(0x1d6)], _0x1e2c16 = _0x214efb[_0x69f729(0x35e)][_0x69f729(0x297)][0x0][_0x69f729(0x42a)][_0x503ed2]['id']));
                            }), _0x5dacc3[_0x570a31(0x1e2)] == 0x0 && (_0x4f7051('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')['each'](function (_0x309443) {
                                const _0x555a84 = _0x570a31;
                                _0x4f7051(this)[_0x555a84(0x294)](_0x555a84(0x296)) && (_0x4f7051(this)['children']()[_0x555a84(0x1e2)] > 0x0 && (_0x5dacc3 = _0x214efb['data'][_0x555a84(0x297)][0x0][_0x555a84(0x42a)][_0x309443][_0x555a84(0x3c1)][0x0][_0x555a84(0x3b6)], _0x38b6ed[_0x555a84(0x37f)] && (_0x3ee916 = _0x214efb[_0x555a84(0x35e)]['reels_media'][0x0][_0x555a84(0x42a)][_0x309443][_0x555a84(0x1d6)], _0x1e2c16 = _0x214efb[_0x555a84(0x35e)][_0x555a84(0x297)][0x0]['items'][_0x309443]['id'])));
                            }), _0x4f7051(_0x570a31(0x27c))['each'](function (_0x5f30e5) {
                                const _0x347d62 = _0x570a31;
                                _0x4f7051(this)[_0x347d62(0x26b)]()['hasClass']('_ac3q') && (_0x5dacc3 = _0x214efb['data']['reels_media'][0x0][_0x347d62(0x42a)][_0x5f30e5][_0x347d62(0x3c1)][0x0][_0x347d62(0x3b6)], _0x38b6ed['RENAME_PUBLISH_DATE'] && (_0x3ee916 = _0x214efb[_0x347d62(0x35e)]['reels_media'][0x0][_0x347d62(0x42a)][_0x5f30e5][_0x347d62(0x1d6)], _0x1e2c16 = _0x214efb['data']['reels_media'][0x0]['items'][_0x5f30e5]['id']));
                            }));
                        }
                        _0x4116c6['GL_dataCache'][_0x570a31(0x266)][_0x19c83b] = _0x214efb;
                    }
                    _0x5dacc3['length'] == 0x0 ? alert(_0x4e68d5(_0x570a31(0x389))) : _0x20ce6e ? _0x4cea82(_0x5dacc3) : _0x5a9811(_0x5dacc3, _0x19c83b, 'stories', _0x3ee916, _0x5ef27b, _0x1e2c16);
                } else {
                    let _0x12036d = _0x4f7051(_0x570a31(0x301))['attr'](_0x570a31(0x1aa))?.['split'](',')[0x0]?.['split']('\x20')[0x0], _0x5f2c05 = _0x12036d ? _0x12036d : _0x4f7051(_0x570a31(0x301))[_0x570a31(0x477)](function () {
                            const _0x50e86c = _0x570a31;
                            return _0x4f7051(this)[_0x50e86c(0x236)]('a')['length'] === 0x0 && _0x4f7051(this)[_0x50e86c(0x426)]() === _0x4f7051(this)[_0x50e86c(0x45c)]()[_0x50e86c(0x426)]();
                        })[_0x570a31(0x253)](_0x570a31(0x3b6));
                    if (!_0x5f2c05) {
                        let _0x5d2b9d = _0x4f7051(_0x570a31(0x462));
                        _0x5f2c05 = _0x5d2b9d['attr'](_0x570a31(0x1aa)) ? _0x5d2b9d[_0x570a31(0x253)](_0x570a31(0x1aa))?.[_0x570a31(0x430)](',')[0x0]?.[_0x570a31(0x430)]('\x20')[0x0] : _0x5d2b9d['attr'](_0x570a31(0x3b6));
                    }
                    _0x38b6ed[_0x570a31(0x37f)] && (_0x3ee916 = new Date(_0x4f7051(_0x570a31(0x3b9))[_0x570a31(0x207)]()['attr'](_0x570a31(0x326)))['getTime']());
                    let _0x4921fd = _0x5f2c05, _0x11ca7c = 'jpg';
                    _0x20ce6e ? _0x4cea82(_0x4921fd) : _0x5a9811(_0x4921fd, _0x19c83b, _0x570a31(0x266), _0x3ee916, _0x11ca7c, _0xd26040(_0x4921fd) ?? '');
                }
                _0x4116c6[_0x570a31(0x34b)] = ![], _0x5ac088(![]);
            } else {
                if (!_0x4f7051(_0x570a31(0x204))[_0x570a31(0x1e2)]) {
                    _0x4116c6[_0x570a31(0x288)][_0x570a31(0x266)] = {};
                    let _0x1584d8 = null;
                    _0x4f7051(_0x570a31(0x3ad))[_0x570a31(0x1e2)] > 0x0 ? _0x1584d8 = _0x4f7051(_0x570a31(0x3c5)) : (_0x1584d8 = _0x4f7051(_0x570a31(0x2fc)), _0x1584d8[_0x570a31(0x3e2)](_0x570a31(0x3b4), _0x570a31(0x1fb)));
                    _0x1584d8[_0x570a31(0x1e2)] === 0x0 && (_0x1584d8 = _0x4f7051(_0x570a31(0x255))[_0x570a31(0x45c)]()[_0x570a31(0x45c)]()[_0x570a31(0x45c)]()[_0x570a31(0x335)](_0x570a31(0x26e)), _0x1584d8[_0x570a31(0x3e2)]('position', _0x570a31(0x1fb)));
                    _0x1584d8[_0x570a31(0x1e2)] === 0x0 && (_0x1584d8 = _0x4f7051(_0x570a31(0x255))[_0x570a31(0x45c)]()[_0x570a31(0x45c)]()['parent']()[_0x570a31(0x335)](_0x570a31(0x2f6)), _0x1584d8[_0x570a31(0x3e2)](_0x570a31(0x3b4), _0x570a31(0x1fb)));
                    if (_0x1584d8['length'] === 0x0) {
                        let _0x13b31c = _0x4f7051(_0x570a31(0x3a8)), _0x11c081 = 0x0;
                        _0x13b31c['each'](function () {
                            const _0x577bf4 = _0x570a31;
                            _0x4f7051(this)[_0x577bf4(0x426)]() > _0x11c081 && (_0x11c081 = _0x4f7051(this)[_0x577bf4(0x426)](), _0x1584d8 = _0x4f7051(this)[_0x577bf4(0x26b)](_0x577bf4(0x460))[_0x577bf4(0x207)]());
                        });
                    }
                    if (_0x1584d8 != null) {
                        _0x1584d8[_0x570a31(0x207)]()[_0x570a31(0x3e2)](_0x570a31(0x3b4), _0x570a31(0x1fb)), _0x1584d8[_0x570a31(0x207)]()[_0x570a31(0x1b2)](_0x570a31(0x1ea) + _0x4e68d5('DW') + _0x570a31(0x3d5) + _0x44169f[_0x570a31(0x2b3)] + _0x570a31(0x1f6)), _0x1584d8[_0x570a31(0x207)]()[_0x570a31(0x1b2)](_0x570a31(0x1d2) + _0x4e68d5(_0x570a31(0x1ee)) + _0x570a31(0x458) + _0x44169f['NEW_TAB'] + _0x570a31(0x1f6));
                        let _0x16a5db = _0x29a9d2(_0x19c83b);
                        _0x16a5db[_0x570a31(0x1e2)] > 0x1 && _0x1584d8[_0x570a31(0x207)]()[_0x570a31(0x1b2)](_0x570a31(0x238) + _0x4e68d5(_0x570a31(0x22e)) + _0x570a31(0x452) + _0x44169f[_0x570a31(0x420)] + _0x570a31(0x1f6)), _0x1584d8['find'](_0x570a31(0x373))[_0x570a31(0x2f4)](function () {
                            const _0x3ea6de = _0x570a31;
                            _0x4f7051(this)['on'](_0x3ea6de(0x36b), function () {
                                const _0x3a64b6 = _0x3ea6de;
                                !_0x4f7051(this)[_0x3a64b6(0x35e)](_0x3a64b6(0x1e8)) && (_0x1584d8['find'](_0x3a64b6(0x343))[_0x3a64b6(0x1e2)] === 0x0 ? (_0x4f7051(this)[_0x3a64b6(0x253)]('data-remove-thumbnail', !![]), _0x4f7051(_0x3a64b6(0x343))[_0x3a64b6(0x25a)](), _0x128583(_0x3a64b6(0x20e))) : (_0x4f7051(this)[_0x3a64b6(0x253)]('data-remove-thumbnail', !![]), _0x128583(_0x3a64b6(0x1ef))));
                            });
                        });
                    }
                }
            }
        }
        async function _0xccb308(_0xadc90b, _0x5e0caa) {
            const _0x46fc31 = _0x8bfcd5;
            if (_0xadc90b) {
                let _0xbf55dc = new Date()[_0x46fc31(0x397)](), _0x262df0 = Math[_0x46fc31(0x31d)](_0xbf55dc / 0x3e8), _0x4f1235 = _0x46fc31(0x2c3), _0x4942d9 = _0x4f7051(_0x46fc31(0x459))[_0x46fc31(0x207)]()[_0x46fc31(0x1c4)]() || location[_0x46fc31(0x43b)][_0x46fc31(0x430)]('/')['at'](0x2), _0x1bf521 = location[_0x46fc31(0x43b)][_0x46fc31(0x3dc)](/\/$/ig, '')[_0x46fc31(0x430)]('/')['at'](-0x1), _0x14b1cc = '', _0x32eb62 = null;
                _0x5ac088(!![]);
                if (_0x38b6ed[_0x46fc31(0x3ff)] && !_0x4116c6['tempFetchRateLimit']) {
                    let _0x2da14a = await _0x4562a5(_0x4942d9), _0x22ffbb = _0x2da14a['user']['pk'], _0x14b156 = await _0x2fb91a(_0x22ffbb), _0x26aca5 = location[_0x46fc31(0x43b)][_0x46fc31(0x430)]('/')[_0x46fc31(0x477)](_0x1f89ba => _0x1f89ba[_0x46fc31(0x1e2)] > 0x0 && _0x1f89ba['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x14b156[_0x46fc31(0x35e)][_0x46fc31(0x297)][0x0][_0x46fc31(0x42a)]['forEach'](_0x1c7bc6 => {
                        _0x1c7bc6['id'] == _0x26aca5 && (_0x32eb62 = _0x1c7bc6['id']);
                    });
                    if (_0x32eb62 == null) {
                        let _0x234942 = _0x29a9d2(_0x4942d9);
                        _0x234942['each'](function (_0x34ccbf) {
                            const _0xfbd36 = _0x46fc31;
                            _0x4f7051(this)[_0xfbd36(0x26b)]()[_0xfbd36(0x1e2)] > 0x0 && (_0x32eb62 = _0x14b156[_0xfbd36(0x35e)][_0xfbd36(0x297)][0x0][_0xfbd36(0x42a)][_0x34ccbf]['id']);
                        });
                    }
                    _0x32eb62 == null && (_0x4f7051(_0x46fc31(0x259))[_0x46fc31(0x2f4)](function (_0x304c7a) {
                        const _0xd257bb = _0x46fc31;
                        _0x4f7051(this)[_0xd257bb(0x294)]('x1lix1fw') && (_0x4f7051(this)[_0xd257bb(0x26b)]()[_0xd257bb(0x1e2)] > 0x0 && (_0x32eb62 = _0x14b156['data'][_0xd257bb(0x297)][0x0][_0xd257bb(0x42a)][_0x304c7a]['id']));
                    }), _0x4f7051(_0x46fc31(0x27c))[_0x46fc31(0x2f4)](function (_0x3ac8e8) {
                        const _0x31f189 = _0x46fc31;
                        _0x4f7051(this)[_0x31f189(0x26b)]()[_0x31f189(0x294)](_0x31f189(0x454)) && (_0x32eb62 = _0x14b156[_0x31f189(0x35e)][_0x31f189(0x297)][0x0]['items'][_0x3ac8e8]['id']);
                    }));
                    _0x32eb62 == null && (_0x32eb62 = location['pathname']['split']('/')[_0x46fc31(0x477)](_0x283d8a => _0x283d8a['length'] > 0x0 && _0x283d8a[_0x46fc31(0x40d)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x132f36 = await _0x370347(_0x32eb62);
                    _0x38b6ed[_0x46fc31(0x37f)] && (_0x262df0 = _0x132f36['items'][0x0]['taken_at']);
                    _0x132f36[_0x46fc31(0x395)] === 'ok' ? _0x5a9811(_0x132f36[_0x46fc31(0x42a)][0x0]['image_versions2'][_0x46fc31(0x28d)][0x0][_0x46fc31(0x246)], _0x4942d9, 'stories', _0x262df0, _0x46fc31(0x2c3), _0x32eb62) : (_0x38b6ed[_0x46fc31(0x3ee)] ? (_0x4116c6[_0x46fc31(0x34b)] = !![], _0xccb308(!![], _0x5e0caa)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x132f36[_0x46fc31(0x386)]), _0x128583(_0x132f36));
                    _0x5ac088(![]);
                    return;
                }
                if (_0x4116c6[_0x46fc31(0x288)][_0x46fc31(0x266)][_0x4942d9] && !_0x5e0caa) {
                    _0x128583(_0x46fc31(0x20f), _0x4942d9), _0x4116c6[_0x46fc31(0x288)][_0x46fc31(0x266)][_0x4942d9]['data']['reels_media'][0x0][_0x46fc31(0x42a)][_0x46fc31(0x2c5)](_0x17b206 => {
                        const _0x2f26b3 = _0x46fc31;
                        _0x17b206['id'] == _0x1bf521 && (_0x14b1cc = _0x17b206['display_url'], _0x38b6ed[_0x2f26b3(0x37f)] && (_0x262df0 = _0x17b206[_0x2f26b3(0x1d6)], _0x32eb62 = _0x17b206['id']));
                    });
                    if (_0x14b1cc[_0x46fc31(0x1e2)] == 0x0) {
                        _0x128583(_0x46fc31(0x1f9), _0x4942d9), _0xccb308(!![], !![]);
                        return;
                    }
                } else {
                    let _0x1148cf = await _0x4562a5(_0x4942d9), _0x45d362 = _0x1148cf[_0x46fc31(0x409)]['pk'], _0xbb2626 = await _0x2fb91a(_0x45d362);
                    _0xbb2626[_0x46fc31(0x35e)][_0x46fc31(0x297)][0x0][_0x46fc31(0x42a)][_0x46fc31(0x2c5)](_0x1d4936 => {
                        const _0x42add8 = _0x46fc31;
                        _0x1d4936['id'] == _0x1bf521 && (_0x14b1cc = _0x1d4936[_0x42add8(0x44e)], _0x38b6ed[_0x42add8(0x37f)] && (_0x262df0 = _0x1d4936[_0x42add8(0x1d6)], _0x32eb62 = _0x1d4936['id']));
                    });
                    if (_0x14b1cc[_0x46fc31(0x1e2)] == 0x0) {
                        let _0x2314e0 = _0x29a9d2(_0x4942d9);
                        _0x2314e0[_0x46fc31(0x2f4)](function (_0x3b677c) {
                            const _0x5ddb28 = _0x46fc31;
                            _0x4f7051(this)[_0x5ddb28(0x26b)]()[_0x5ddb28(0x1e2)] > 0x0 && (_0x14b1cc = _0xbb2626[_0x5ddb28(0x35e)][_0x5ddb28(0x297)][0x0][_0x5ddb28(0x42a)][_0x3b677c][_0x5ddb28(0x44e)], _0x38b6ed['RENAME_PUBLISH_DATE'] && (_0x262df0 = _0xbb2626[_0x5ddb28(0x35e)][_0x5ddb28(0x297)][0x0][_0x5ddb28(0x42a)][_0x3b677c]['taken_at_timestamp'], _0x32eb62 = _0xbb2626[_0x5ddb28(0x35e)][_0x5ddb28(0x297)][0x0][_0x5ddb28(0x42a)][_0x3b677c]['id']));
                        }), _0x14b1cc[_0x46fc31(0x1e2)] == 0x0 && (_0x4f7051('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x46fc31(0x2f4)](function (_0x8dc682) {
                            const _0x5dc6f5 = _0x46fc31;
                            _0x4f7051(this)[_0x5dc6f5(0x294)]('x1lix1fw') && (_0x4f7051(this)[_0x5dc6f5(0x26b)]()[_0x5dc6f5(0x1e2)] > 0x0 && (_0x14b1cc = _0xbb2626[_0x5dc6f5(0x35e)][_0x5dc6f5(0x297)][0x0][_0x5dc6f5(0x42a)][_0x8dc682]['display_url'], _0x38b6ed['RENAME_PUBLISH_DATE'] && (_0x262df0 = _0xbb2626[_0x5dc6f5(0x35e)]['reels_media'][0x0][_0x5dc6f5(0x42a)][_0x8dc682][_0x5dc6f5(0x1d6)], _0x32eb62 = _0xbb2626[_0x5dc6f5(0x35e)][_0x5dc6f5(0x297)][0x0][_0x5dc6f5(0x42a)][_0x8dc682]['id'])));
                        }), _0x4f7051('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x46fc31(0x2f4)](function (_0x193792) {
                            const _0x3db9e7 = _0x46fc31;
                            _0x4f7051(this)[_0x3db9e7(0x26b)]()['hasClass'](_0x3db9e7(0x454)) && (_0x14b1cc = _0xbb2626[_0x3db9e7(0x35e)]['reels_media'][0x0][_0x3db9e7(0x42a)][_0x193792][_0x3db9e7(0x44e)], _0x38b6ed['RENAME_PUBLISH_DATE'] && (_0x262df0 = _0xbb2626[_0x3db9e7(0x35e)][_0x3db9e7(0x297)][0x0][_0x3db9e7(0x42a)][_0x193792][_0x3db9e7(0x1d6)], _0x32eb62 = _0xbb2626['data']['reels_media'][0x0][_0x3db9e7(0x42a)][_0x193792]['id']));
                        }));
                    }
                }
                _0x5a9811(_0x14b1cc, _0x4942d9, _0x46fc31(0x270), _0x262df0, _0x4f1235, _0x32eb62), _0x4116c6[_0x46fc31(0x34b)] = ![], _0x5ac088(![]);
            } else {
                if (_0x4f7051('body\x20>\x20div\x20div.IG_DWSTORY')[_0x46fc31(0x45c)]()[_0x46fc31(0x335)](_0x46fc31(0x222))[_0x46fc31(0x1e2)]) {
                    let _0x5af675 = null;
                    _0x4f7051(_0x46fc31(0x3ad))[_0x46fc31(0x1e2)] > 0x0 ? _0x5af675 = _0x4f7051(_0x46fc31(0x3c5)) : (_0x5af675 = _0x4f7051(_0x46fc31(0x2fc)), _0x5af675[_0x46fc31(0x3e2)](_0x46fc31(0x3b4), _0x46fc31(0x1fb)));
                    _0x5af675[_0x46fc31(0x1e2)] === 0x0 && (_0x5af675 = _0x4f7051('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x46fc31(0x45c)]()[_0x46fc31(0x45c)]()[_0x46fc31(0x45c)]()[_0x46fc31(0x335)](_0x46fc31(0x26e)), _0x5af675['css'](_0x46fc31(0x3b4), 'relative'));
                    _0x5af675['length'] === 0x0 && (_0x5af675 = _0x4f7051(_0x46fc31(0x255))['parent']()['parent']()[_0x46fc31(0x45c)]()[_0x46fc31(0x335)](_0x46fc31(0x2f6)), _0x5af675['css'](_0x46fc31(0x3b4), _0x46fc31(0x1fb)));
                    if (_0x5af675[_0x46fc31(0x1e2)] === 0x0) {
                        let _0x17375a = _0x4f7051(_0x46fc31(0x3a8)), _0x417884 = 0x0;
                        _0x17375a[_0x46fc31(0x2f4)](function () {
                            const _0x56d962 = _0x46fc31;
                            _0x4f7051(this)[_0x56d962(0x426)]() > _0x417884 && (_0x417884 = _0x4f7051(this)['width'](), _0x5af675 = _0x4f7051(this)[_0x56d962(0x26b)](_0x56d962(0x460))[_0x56d962(0x207)]());
                        });
                    }
                    _0x5af675 != null && (_0x5af675[_0x46fc31(0x207)]()[_0x46fc31(0x3e2)](_0x46fc31(0x3b4), _0x46fc31(0x1fb)), _0x5af675[_0x46fc31(0x207)]()['append'](_0x46fc31(0x263) + _0x4e68d5(_0x46fc31(0x300)) + _0x46fc31(0x2c4) + _0x44169f[_0x46fc31(0x250)] + _0x46fc31(0x1f6)));
                }
            }
        }
        function _0x185a4a(_0x3ec1a3) {
            return new Promise((_0x152eae, _0x541baa) => {
                const _0x381e9c = a0_0xa48a;
                let _0x36ea4f = _0x381e9c(0x1de) + _0x3ec1a3 + _0x381e9c(0x302);
                GM_xmlhttpRequest({
                    'method': _0x381e9c(0x424),
                    'url': _0x36ea4f,
                    'onload': function (_0x3f776f) {
                        const _0x49b8d8 = _0x381e9c;
                        try {
                            let _0x14ddbd = JSON[_0x49b8d8(0x226)](_0x3f776f[_0x49b8d8(0x3c4)]);
                            _0x152eae(_0x14ddbd);
                        } catch (_0xd8eaa6) {
                            _0x128583(_0x49b8d8(0x319), _0x49b8d8(0x3a7), _0xd8eaa6[_0x49b8d8(0x386)]), _0x541baa(_0xd8eaa6);
                        }
                    },
                    'onerror': function (_0x1de22b) {
                        const _0x123119 = _0x381e9c;
                        _0x128583('getHighlightStories()', _0x123119(0x3a7), _0x1de22b), _0x541baa(_0x1de22b);
                    }
                });
            });
        }
        function _0x2fb91a(_0x1af33c) {
            return new Promise((_0x2489a3, _0x3f555e) => {
                const _0x121558 = a0_0xa48a;
                let _0x5606c0 = _0x121558(0x2bf) + _0x1af33c + _0x121558(0x302);
                GM_xmlhttpRequest({
                    'method': _0x121558(0x424),
                    'url': _0x5606c0,
                    'onload': function (_0x1fccd9) {
                        const _0x149027 = _0x121558;
                        try {
                            let _0x3ac97b = JSON[_0x149027(0x226)](_0x1fccd9[_0x149027(0x3c4)]);
                            _0x128583(_0x149027(0x356), _0x3ac97b), _0x2489a3(_0x3ac97b);
                        } catch (_0x2f12ee) {
                            _0x128583(_0x149027(0x356), _0x149027(0x3a7), _0x2f12ee[_0x149027(0x386)]), _0x3f555e(_0x2f12ee);
                        }
                    },
                    'onerror': function (_0x80c3e2) {
                        const _0x3b614a = _0x121558;
                        _0x128583('getStories()', _0x3b614a(0x3a7), _0x80c3e2), _0x3f555e(_0x80c3e2);
                    }
                });
            });
        }
        function _0x4562a5(_0xfa56ae) {
            return new Promise((_0x297840, _0x5d819b) => {
                const _0x5cc5a4 = a0_0xa48a;
                let _0x28cdb1 = 'https://www.instagram.com/web/search/topsearch/?query=' + _0xfa56ae;
                GM_xmlhttpRequest({
                    'method': _0x5cc5a4(0x424),
                    'url': _0x28cdb1,
                    'onload': function (_0x3720da) {
                        const _0x4a06b8 = _0x5cc5a4;
                        let _0x5c2c8e = JSON['parse'](_0x3720da['response']), _0x381b8f = null;
                        _0x5c2c8e[_0x4a06b8(0x38e)][_0x4a06b8(0x2c5)](_0x5f0c88 => {
                            const _0xdf5abf = _0x4a06b8;
                            _0x5f0c88[_0xdf5abf(0x409)]['username']?.[_0xdf5abf(0x3da)]() === _0xfa56ae?.[_0xdf5abf(0x3da)]() && (_0x381b8f = _0x5f0c88);
                        }), _0x381b8f != null ? (_0x128583(_0x4a06b8(0x2fe), _0x381b8f), _0x297840(_0x381b8f)) : _0x284ef3(_0xfa56ae)[_0x4a06b8(0x351)](_0x33e77f => {
                            _0x297840(_0x33e77f);
                        })[_0x4a06b8(0x476)](_0x2f1409 => {
                            const _0x3d7725 = _0x4a06b8;
                            alert(_0x3d7725(0x3a4));
                        });
                    },
                    'onerror': function (_0x117ac1) {
                        const _0x5164fd = _0x5cc5a4;
                        _0x128583(_0x5164fd(0x2fe), _0x5164fd(0x3a7), _0x117ac1), _0x5d819b(_0x117ac1);
                    }
                });
            });
        }
        function _0x284ef3(_0x5459a8) {
            return new Promise((_0x2628e2, _0x51f0d7) => {
                let _0x3c6e93 = 'https://i.instagram.com/api/v1/users/web_profile_info/?username=' + _0x5459a8;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3c6e93,
                    'headers': { 'X-IG-App-ID': _0x15e493() },
                    'onload': function (_0x3653d7) {
                        const _0x763d51 = a0_0xa48a;
                        try {
                            let _0x1f62bb = JSON[_0x763d51(0x226)](_0x3653d7[_0x763d51(0x3c4)]), _0x5db072 = _0x1f62bb?.[_0x763d51(0x35e)]?.[_0x763d51(0x409)];
                            if (_0x5db072 != null) {
                                let _0x4257f0 = _0x1f62bb?.['data'];
                                _0x4257f0[_0x763d51(0x409)]['pk'] = _0x4257f0[_0x763d51(0x409)]['id'], _0x128583(_0x763d51(0x2ca), _0x1f62bb), _0x2628e2(_0x4257f0);
                            } else
                                _0x128583(_0x763d51(0x2ca), 'reject', _0x763d51(0x28c)), _0x51f0d7('undefined');
                        } catch (_0x36a3c0) {
                            _0x128583('getUserIdWithAgent()', 'reject', _0x36a3c0[_0x763d51(0x386)]), _0x51f0d7(_0x36a3c0);
                        }
                    },
                    'onerror': function (_0x32e355) {
                        const _0x372449 = a0_0xa48a;
                        _0x128583(_0x372449(0x2ca), _0x372449(0x3a7), _0x32e355), _0x51f0d7(_0x32e355);
                    }
                });
            });
        }
        function _0x3ca36e(_0x131622) {
            return new Promise((_0xeccf31, _0x3470ef) => {
                const _0x3a3502 = a0_0xa48a;
                let _0x49ad23 = _0x3a3502(0x1cc) + _0x131622 + '/info/';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x49ad23,
                    'headers': { 'User-Agent': _0x3a3502(0x2a7) },
                    'onload': function (_0x2ab239) {
                        const _0x4affa5 = _0x3a3502;
                        try {
                            let _0x4d3398 = JSON[_0x4affa5(0x226)](_0x2ab239[_0x4affa5(0x3c4)]);
                            _0x4d3398[_0x4affa5(0x395)] !== 'ok' ? (_0x128583(_0x4affa5(0x305), 'reject', _0x4d3398), _0x3470ef(_0x4affa5(0x39c))) : (_0x128583(_0x4affa5(0x305), _0x4d3398), _0xeccf31(_0x4d3398['user'][_0x4affa5(0x392)]?.[_0x4affa5(0x246)]));
                        } catch (_0x5ed9ff) {
                            _0x128583('getUserHighSizeProfile()', 'reject', _0x5ed9ff), _0x3470ef(_0x5ed9ff);
                        }
                    },
                    'onerror': function (_0x53b598) {
                        const _0x1ad350 = _0x3a3502;
                        _0x128583(_0x1ad350(0x305), _0x1ad350(0x3a7), _0x53b598), _0x3470ef(_0x53b598);
                    }
                });
            });
        }
        function _0x376aff(_0x3dc155) {
            return new Promise((_0x4d1ed0, _0x2af66f) => {
                const _0x28fece = a0_0xa48a;
                if (!_0x3dc155)
                    _0x2af66f(_0x28fece(0x1fc));
                let _0x47f829 = _0x3dc155, _0x45bd5c = _0x28fece(0x1fd) + _0x47f829 + _0x28fece(0x3ca);
                GM_xmlhttpRequest({
                    'method': _0x28fece(0x424),
                    'url': _0x45bd5c,
                    'onload': function (_0x3f1102) {
                        const _0x4752b6 = _0x28fece;
                        try {
                            let _0x3f289c = JSON[_0x4752b6(0x226)](_0x3f1102[_0x4752b6(0x3c4)]);
                            _0x128583('getPostOwner()', _0x3f289c), _0x4d1ed0(_0x3f289c[_0x4752b6(0x35e)][_0x4752b6(0x2d4)][_0x4752b6(0x1e0)][_0x4752b6(0x2c9)]);
                        } catch (_0x4370f0) {
                            _0x128583('getPostOwner()', 'reject', _0x4370f0[_0x4752b6(0x386)]), _0x2af66f(_0x4370f0);
                        }
                    },
                    'onerror': function (_0x59abb3) {
                        const _0x11ab15 = _0x28fece;
                        _0x128583(_0x11ab15(0x23a), _0x11ab15(0x3a7), _0x59abb3), _0x2af66f(_0x59abb3);
                    }
                });
            });
        }
        function _0x5ba2ae(_0xcc7975) {
            return new Promise((_0x4ee245, _0x5ecd7a) => {
                const _0x52ab5a = a0_0xa48a;
                if (!_0xcc7975)
                    _0x5ecd7a(_0x52ab5a(0x1fc));
                let _0x3cbd17 = _0xcc7975, _0x28ebe7 = _0x52ab5a(0x1fd) + _0x3cbd17 + _0x52ab5a(0x3ca);
                GM_xmlhttpRequest({
                    'method': _0x52ab5a(0x424),
                    'url': _0x28ebe7,
                    'headers': { 'User-Agent': _0x52ab5a(0x2a7) },
                    'onload': function (_0x252294) {
                        const _0x647341 = _0x52ab5a;
                        try {
                            let _0xcd3ab0 = JSON['parse'](_0x252294[_0x647341(0x3c4)]);
                            _0x128583(_0xcd3ab0), _0xcd3ab0[_0x647341(0x395)] === _0x647341(0x3e3) ? (_0x128583(_0x647341(0x3d0), _0x647341(0x466), _0x3cbd17), _0x2afee8(_0x3cbd17)[_0x647341(0x351)](_0x167f90 => {
                                const _0x30469d = _0x647341;
                                _0x4ee245({
                                    'type': _0x30469d(0x2e3),
                                    'data': _0x167f90['xdt_api__v1__media__shortcode__web_info'][_0x30469d(0x42a)][0x0]
                                });
                            })[_0x647341(0x476)](_0x38197a => {
                                _0x5ecd7a(_0x38197a);
                            })) : _0x4ee245({
                                'type': _0x647341(0x325),
                                'data': _0xcd3ab0[_0x647341(0x35e)]
                            });
                        } catch (_0x28d71d) {
                            _0x128583('getBlobMedia()', 'reject', _0x28d71d[_0x647341(0x386)]), _0x5ecd7a(_0x28d71d);
                        }
                    },
                    'onerror': function (_0x3d485d) {
                        const _0x182e7f = _0x52ab5a;
                        _0x128583('getBlobMedia()', _0x182e7f(0x3a7), _0x3d485d), _0x5ecd7a(_0x3d485d);
                    }
                });
            });
        }
        function _0x2afee8(_0xdd7857) {
            return new Promise((_0x1722e9, _0x169b3e) => {
                const _0x437faa = a0_0xa48a;
                if (!_0xdd7857)
                    _0x169b3e(_0x437faa(0x1fc));
                let _0x4d37b3 = _0xdd7857, _0x2c8599 = _0x437faa(0x33f) + _0x4d37b3 + _0x437faa(0x2b1);
                GM_xmlhttpRequest({
                    'method': _0x437faa(0x424),
                    'url': _0x2c8599,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x15e493()
                    },
                    'onload': function (_0x569b29) {
                        const _0xd270d1 = _0x437faa;
                        try {
                            let _0x33d280 = JSON['parse'](_0x569b29[_0xd270d1(0x3c4)]);
                            _0x128583(_0x33d280), _0x33d280['status'] === 'fail' ? (alert('getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a' + _0x33d280[_0xd270d1(0x386)] + ':\x20' + _0x33d280[_0xd270d1(0x2cc)]), _0x128583(_0xd270d1(0x463) + _0x33d280[_0xd270d1(0x386)] + ':\x20' + _0x33d280[_0xd270d1(0x2cc)]), _0x169b3e(_0x569b29)) : (_0x128583(_0xd270d1(0x1ed), _0x33d280[_0xd270d1(0x35e)]), _0x1722e9(_0x33d280[_0xd270d1(0x35e)]));
                        } catch (_0x3864a1) {
                            _0x128583(_0xd270d1(0x1ed), _0xd270d1(0x3a7), _0x3864a1[_0xd270d1(0x386)]), _0x169b3e(_0x3864a1);
                        }
                    },
                    'onerror': function (_0x379f43) {
                        const _0xc72bfc = _0x437faa;
                        _0x128583(_0xc72bfc(0x1ed), _0xc72bfc(0x3a7), _0x379f43), _0x169b3e(_0x379f43);
                    }
                });
            });
        }
        function _0x370347(_0x4dc284) {
            return new Promise((_0x4cc834, _0xdae8e3) => {
                const _0x44d46c = a0_0xa48a;
                let _0x5473f2 = 'https://i.instagram.com/api/v1/media/' + _0x4dc284 + _0x44d46c(0x475);
                if (_0x4dc284 == null) {
                    alert(_0x44d46c(0x257)), _0x128583('getMediaInfo()', _0x44d46c(0x3a7), _0x44d46c(0x257)), _0x5ac088(![]), _0xdae8e3(-0x1);
                    return;
                }
                if (_0x15e493() == null) {
                    alert(_0x44d46c(0x3e0)), _0x128583(_0x44d46c(0x38c), _0x44d46c(0x3a7), 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x5ac088(![]), _0xdae8e3(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x5473f2,
                    'headers': {
                        'User-Agent': window[_0x44d46c(0x437)]['userAgent'],
                        'Accept': _0x44d46c(0x318),
                        'X-IG-App-ID': _0x15e493()
                    },
                    'onload': function (_0x3490e3) {
                        const _0x347881 = _0x44d46c;
                        if (_0x3490e3[_0x347881(0x350)] == _0x5473f2) {
                            let _0x7cfda4 = JSON[_0x347881(0x226)](_0x3490e3['response']);
                            _0x128583('getMediaInfo()', _0x7cfda4), _0x4cc834(_0x7cfda4);
                        } else {
                            let _0x34cbd9 = new URL(_0x3490e3[_0x347881(0x350)]);
                            _0x34cbd9['pathname'][_0x347881(0x299)](_0x347881(0x3d3)) ? (_0x128583('getMediaInfo()', _0x347881(0x3a7), _0x347881(0x30a)), alert(_0x347881(0x30a))) : (_0x128583(_0x347881(0x38c), _0x347881(0x3a7), _0x347881(0x455) + _0x3490e3[_0x347881(0x350)] + '\x22'), alert(_0x347881(0x455) + _0x3490e3['finalUrl'] + '\x22')), _0x5ac088(![]), _0xdae8e3(-0x1);
                        }
                    },
                    'onerror': function (_0x302b62) {
                        const _0x4f41df = _0x44d46c;
                        _0x128583(_0x4f41df(0x38c), _0x4f41df(0x3a7), _0x302b62), _0x4cc834(_0x302b62);
                    }
                });
            });
        }
        function _0xd26040(_0x41c30e) {
            const _0x35a8ee = _0x8bfcd5;
            let _0xde09cb = new URL(_0x41c30e), _0x4b3a38 = _0xde09cb?.[_0x35a8ee(0x1cb)]?.[_0x35a8ee(0x446)](_0x35a8ee(0x3de))?.['split']('.')['at'](0x0);
            return _0x4b3a38 ? atob(_0x4b3a38) : null;
        }
        function _0x15e493() {
            const _0x13b5b4 = _0x8bfcd5;
            let _0x38bb5b = null;
            return _0x4f7051(_0x13b5b4(0x324))[_0x13b5b4(0x2f4)](function () {
                const _0x162ba1 = _0x13b5b4, _0x4fe2a2 = /"APP_ID":"([0-9]+)"/ig, _0x5859d2 = _0x4f7051(this)['text']()['match'](_0x4fe2a2);
                _0x5859d2 != null && _0x38bb5b == null && (_0x38bb5b = [..._0x4f7051(this)[_0x162ba1(0x1c4)]()[_0x162ba1(0x419)](_0x4fe2a2)]);
            }), _0x38bb5b ? _0x38bb5b['at'](0x0)['at'](-0x1) : null;
        }
        function _0x5ac088(_0x1025ee) {
            const _0x598265 = _0x8bfcd5;
            _0x1025ee ? (_0x4f7051(_0x598265(0x2a4))[_0x598265(0x372)](_0x598265(0x3cb)), _0x4f7051(_0x598265(0x2a4))[_0x598265(0x3e2)](_0x598265(0x1ac), _0x598265(0x3c0))) : (_0x4f7051('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x598265(0x24c)](_0x598265(0x3cb)), _0x4f7051(_0x598265(0x2a4))[_0x598265(0x3e2)](_0x598265(0x1ac), ''));
        }
        function _0x29a9d2(_0x4b006d) {
            const _0xaccf41 = _0x8bfcd5;
            let _0x375c60 = _0x4f7051(_0xaccf41(0x3b5) + _0x4b006d + _0xaccf41(0x3fe))[_0xaccf41(0x477)](function () {
                const _0x1cde0e = _0xaccf41;
                return _0x4f7051(this)[_0x1cde0e(0x26b)]()[_0x1cde0e(0x1e2)] === 0x0 && _0x4f7051(this)[_0x1cde0e(0x335)](_0x1cde0e(0x435))[_0x1cde0e(0x1e2)] === 0x0 && _0x4f7051(this)[_0x1cde0e(0x1c4)]()?.[_0x1cde0e(0x3da)]() === _0x4b006d?.[_0x1cde0e(0x3da)]();
            })[_0xaccf41(0x236)]('div:not([class]):not([style])')[_0xaccf41(0x477)](function () {
                const _0xf8317c = _0xaccf41;
                return _0x4f7051(this)[_0xf8317c(0x1c4)]()?.[_0xf8317c(0x3da)]() !== _0x4b006d?.[_0xf8317c(0x3da)]();
            })[_0xaccf41(0x477)](function () {
                const _0x11f1e7 = _0xaccf41;
                return _0x4f7051(this)[_0x11f1e7(0x26b)]()['length'] > 0x1;
            })[_0xaccf41(0x207)]();
            return _0x375c60[_0xaccf41(0x1e2)] === 0x0 && (_0x375c60 = _0x4f7051(_0xaccf41(0x3b5) + _0x4b006d + '\x22]')['filter'](function () {
                const _0x366112 = _0xaccf41;
                return _0x4f7051(this)[_0x366112(0x335)](_0x366112(0x36f))['length'] > 0x0;
            })[_0xaccf41(0x236)]('div:not([class]):not([style])')[_0xaccf41(0x477)](function () {
                const _0x2fce62 = _0xaccf41;
                return _0x4f7051(this)['text']()?.[_0x2fce62(0x3da)]() !== _0x4b006d?.['toLowerCase']();
            })['filter'](function () {
                const _0x2a333e = _0xaccf41;
                return _0x4f7051(this)[_0x2a333e(0x26b)]()[_0x2a333e(0x1e2)] > 0x1;
            })[_0xaccf41(0x207)]()), _0x375c60['children']()[_0xaccf41(0x477)](function () {
                const _0x3eb00c = _0xaccf41;
                return _0x4f7051(this)[_0x3eb00c(0x2cb)]() < 0xa;
            })[_0xaccf41(0x207)]()[_0xaccf41(0x26b)]();
        }
        function _0x4a5c74(_0x58e926, _0x1e3c11) {
            const _0x3e635b = _0x8bfcd5;
            _0x4f7051(_0x3e635b(0x329))[_0x3e635b(0x1e2)] ? (_0x4f7051('.circle_wrapper\x20span')['text'](_0x58e926 + '/' + _0x1e3c11), _0x58e926 >= _0x1e3c11 && _0x4f7051('.circle_wrapper')[_0x3e635b(0x428)](0xfa, function () {
                _0x4f7051(this)['remove']();
            })) : _0x4f7051(_0x3e635b(0x36c))[_0x3e635b(0x1b2)](_0x3e635b(0x2f2) + _0x58e926 + '/' + _0x1e3c11 + _0x3e635b(0x1ff));
        }
        function _0x5f5be1(_0x345105, _0x324ee5) {
            const _0x4c80eb = _0x8bfcd5;
            let _0x30d243 = _0x345105 ? 'hidden' : '';
            _0x4f7051(_0x4c80eb(0x36c))[_0x4c80eb(0x1b2)](_0x4c80eb(0x258) + _0x30d243 + _0x4c80eb(0x39a)), _0x4f7051(_0x4c80eb(0x3f7))[_0x4c80eb(0x1b2)](_0x4c80eb(0x322) + _0x4e68d5('CLOSE') + _0x4c80eb(0x327) + GM_info[_0x4c80eb(0x471)][_0x4c80eb(0x237)] + _0x4c80eb(0x40b) + _0x44169f[_0x4c80eb(0x202)] + '</div></div>'), _0x324ee5 && (_0x4f7051(_0x4c80eb(0x3f7))['append']('<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>'), _0x4f7051(_0x4c80eb(0x1e1))[_0x4c80eb(0x1b2)](_0x4c80eb(0x24a) + _0x4e68d5('BATCH_DOWNLOAD_SELECTED') + _0x4c80eb(0x267)), _0x4f7051(_0x4c80eb(0x1e1))['append'](_0x4c80eb(0x242) + _0x4e68d5('BATCH_DOWNLOAD_DIRECT') + _0x4c80eb(0x267)), _0x4f7051(_0x4c80eb(0x3f7))['append'](_0x4c80eb(0x42b) + _0x4e68d5(_0x4c80eb(0x464)) + _0x4c80eb(0x218)));
        }
        function _0x2ff70d(_0x50d061) {
            const _0x4a288b = _0x8bfcd5;
            _0x4f7051(_0x4a288b(0x3f0))[_0x4a288b(0x1e2)] && (_0x50d061 ? _0x4f7051(_0x4a288b(0x3f0))[_0x4a288b(0x24c)](_0x4a288b(0x3cc)) : _0x4f7051(_0x4a288b(0x3f0))[_0x4a288b(0x372)](_0x4a288b(0x3cc)));
        }
        function _0x5a9811(_0x5120e2, _0x17f6f2, _0x4e74d9, _0x59659d, _0x18c1ca, _0xde3ca0) {
            return new Promise(_0x30b09d => {
                setTimeout(() => {
                    const _0x3be74b = a0_0xa48a;
                    _0x5ac088(!![]), fetch(_0x5120e2)[_0x3be74b(0x351)](_0x3c2b22 => {
                        const _0x1f7fdd = _0x3be74b;
                        return _0x3c2b22[_0x1f7fdd(0x3ab)]()[_0x1f7fdd(0x351)](_0x238776 => {
                            _0x5ac088(![]), _0x173c88(_0x5120e2, _0x238776, _0x17f6f2, _0x4e74d9, _0x59659d, _0x18c1ca, _0xde3ca0), _0x30b09d(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x29c138(_0x42aaaf, _0x1426e9) {
            const _0x75edbf = _0x8bfcd5, _0x5e49b8 = document[_0x75edbf(0x1c8)]('a');
            _0x5e49b8[_0x75edbf(0x27d)] = URL['createObjectURL'](_0x42aaaf), _0x5e49b8[_0x75edbf(0x28e)] = _0x1426e9, _0x5e49b8[_0x75edbf(0x2a9)](), _0x5e49b8[_0x75edbf(0x25a)]();
        }
        function _0x173c88(_0x23d294, _0x6546a0, _0x2385f7, _0xb0338e, _0x1e2ce7, _0x330f7c, _0x39c94d) {
            const _0xcc2d0a = _0x8bfcd5;
            _0x1e2ce7 = parseInt(_0x1e2ce7[_0xcc2d0a(0x371)]()[_0xcc2d0a(0x3bb)](0xd, '0'));
            _0x38b6ed[_0xcc2d0a(0x37f)] && (_0x1e2ce7 = parseInt(_0x1e2ce7[_0xcc2d0a(0x371)]()['padEnd'](0xd, '0')));
            const _0xb5c074 = new Date(_0x1e2ce7), _0x4a8716 = new URL(_0x23d294)['pathname']['split']('/')['at'](-0x1)['split']('.')[_0xcc2d0a(0x23d)](0x0, -0x1)['join']('.'), _0x3af2b3 = _0xb5c074[_0xcc2d0a(0x2a1)]()[_0xcc2d0a(0x371)](), _0x553d4f = (_0xb5c074[_0xcc2d0a(0x46b)]() + 0x1)['toString']()[_0xcc2d0a(0x251)](0x2, '0'), _0x134dd6 = _0xb5c074[_0xcc2d0a(0x2b0)]()['toString']()[_0xcc2d0a(0x251)](0x2, '0'), _0x25e43b = _0xb5c074['getHours']()[_0xcc2d0a(0x371)]()['padStart'](0x2, '0'), _0x2961f8 = _0xb5c074[_0xcc2d0a(0x249)]()[_0xcc2d0a(0x371)]()[_0xcc2d0a(0x251)](0x2, '0'), _0xfb5cc7 = _0xb5c074['getSeconds']()[_0xcc2d0a(0x371)]()[_0xcc2d0a(0x251)](0x2, '0');
            var _0x5a9224 = _0x4116c6[_0xcc2d0a(0x2cf)]['toUpperCase'](), _0x396b2a = _0x39c94d ?? '', _0x47e626 = {
                    '%USERNAME%': _0x2385f7,
                    '%SOURCE_TYPE%': _0xb0338e,
                    '%SHORTCODE%': _0x396b2a,
                    '%YEAR%': _0x3af2b3,
                    '%2-YEAR%': _0x3af2b3[_0xcc2d0a(0x1c9)](-0x2),
                    '%MONTH%': _0x553d4f,
                    '%DAY%': _0x134dd6,
                    '%HOUR%': _0x25e43b,
                    '%MINUTE%': _0x2961f8,
                    '%SECOND%': _0xfb5cc7,
                    '%ORIGINAL_NAME%': _0x4a8716,
                    '%ORIGINAL_NAME_FIRST%': _0x4a8716['split']('_')['at'](0x0)
                };
            _0x5a9224 = _0x5a9224[_0xcc2d0a(0x3dc)](/%[\w\-]+%/g, function (_0x957bfd) {
                return _0x47e626[_0x957bfd] || _0x957bfd;
            });
            const _0x1383e3 = _0x2385f7 + '_' + _0x4a8716 + '.' + _0x330f7c, _0x6c3cd7 = _0x38b6ed[_0xcc2d0a(0x36a)] ? _0x5a9224 + '.' + _0x330f7c : _0x1383e3;
            _0x38b6ed[_0xcc2d0a(0x45a)] && _0x330f7c === 'jpg' && _0x39c94d && _0xb0338e === 'photo' && (_0x6546a0[_0xcc2d0a(0x380)] === _0xcc2d0a(0x337) || _0x6546a0[_0xcc2d0a(0x380)] === _0xcc2d0a(0x34c)) ? _0x1aebcf(_0x6546a0, _0x39c94d)[_0xcc2d0a(0x351)](_0x1bbef5 => _0x29c138(_0x1bbef5, _0x6c3cd7))[_0xcc2d0a(0x476)](_0x5d9d43 => {
                const _0x433bb2 = _0xcc2d0a;
                console[_0x433bb2(0x418)](_0x433bb2(0x336), _0x5d9d43), _0x29c138(_0x6546a0, _0x6c3cd7);
            }) : _0x29c138(_0x6546a0, _0x6c3cd7);
        }
        async function _0x1aebcf(_0x1c6e29, _0x27c024) {
            const _0x3117ea = _0x8bfcd5, _0x20b8bb = (..._0xe4727f) => {
                    const _0x58703a = a0_0xa48a, _0x513e6a = _0xe4727f[_0x58703a(0x232)]((_0xb94652, _0x6514e3) => _0xb94652 + _0x6514e3[_0x58703a(0x1e2)], 0x0), _0x32e602 = new Uint8Array(_0x513e6a);
                    let _0x4b3c62 = 0x0;
                    for (const _0x39b857 of _0xe4727f) {
                        _0x32e602[_0x58703a(0x352)](_0x39b857, _0x4b3c62), _0x4b3c62 += _0x39b857[_0x58703a(0x1e2)];
                    }
                    return _0x32e602;
                }, _0x2d40e2 = _0x4e4a1f => {
                    const _0x16bb99 = a0_0xa48a, _0x42b35a = new Uint8Array(0x4);
                    return new DataView(_0x42b35a[_0x16bb99(0x2ab)])[_0x16bb99(0x45e)](0x0, _0x4e4a1f, !![]), _0x42b35a;
                }, _0x5b61dd = _0x33c051 => new TextEncoder()['encode'](_0x33c051), _0x5548f3 = (_0x9beadd, _0x1989fd) => String[_0x3117ea(0x3e8)](_0x9beadd[_0x3117ea(0x214)](_0x1989fd), _0x9beadd[_0x3117ea(0x214)](_0x1989fd + 0x1), _0x9beadd[_0x3117ea(0x214)](_0x1989fd + 0x2), _0x9beadd[_0x3117ea(0x214)](_0x1989fd + 0x3)), _0x45dc16 = new Uint8Array(await _0x1c6e29['slice'](0x0, 0xc)[_0x3117ea(0x401)]()), _0x5ce2d3 = _0x45dc16[0x0] === 0xff && _0x45dc16[0x1] === 0xd8, _0x1b49b1 = _0x45dc16['length'] >= 0xc && String[_0x3117ea(0x3e8)](..._0x45dc16[_0x3117ea(0x1b9)](0x0, 0x4)) === _0x3117ea(0x28a) && String[_0x3117ea(0x3e8)](..._0x45dc16[_0x3117ea(0x1b9)](0x8, 0xc)) === _0x3117ea(0x20b);
            if (!_0x5ce2d3 && !_0x1b49b1)
                throw new Error(_0x3117ea(0x306));
            const _0x2009f6 = _0x5b61dd('https://www.instagram.com/p/' + _0x27c024 + '/\x00'), _0x1f6c2f = _0x5b61dd(_0x3117ea(0x239)), _0x1dd0d8 = Uint8Array['from']([
                    0x49,
                    0x49,
                    0x2a,
                    0x0,
                    0x8,
                    0x0,
                    0x0,
                    0x0
                ]), _0x587bd5 = Uint8Array['from']([
                    0x1,
                    0x0
                ]), _0x40dc3a = _0x20b8bb(Uint8Array[_0x3117ea(0x230)]([
                    0xe,
                    0x1,
                    0x2,
                    0x0
                ]), _0x2d40e2(_0x2009f6[_0x3117ea(0x1e2)]), _0x2d40e2(0x8 + 0x2 + 0xc + 0x4)), _0x351071 = _0x20b8bb(_0x1dd0d8, _0x587bd5, _0x40dc3a, _0x2d40e2(0x0), _0x2009f6);
            if (_0x5ce2d3) {
                const _0x1e36ce = await _0x1c6e29[_0x3117ea(0x401)](), _0x52dfd5 = new DataView(_0x1e36ce), _0x441136 = _0x20b8bb(_0x1f6c2f, _0x351071), _0x468108 = new Uint8Array(0x4);
                new DataView(_0x468108[_0x3117ea(0x2ab)])[_0x3117ea(0x2d0)](0x0, 0xffe1), new DataView(_0x468108[_0x3117ea(0x2ab)])[_0x3117ea(0x2d0)](0x2, _0x441136[_0x3117ea(0x1e2)] + 0x2);
                const _0x5f2d36 = _0x20b8bb(_0x468108, _0x441136), _0x31536b = [new Uint8Array(_0x1e36ce, 0x0, 0x2)];
                let _0x982bc5 = 0x2, _0x31f852 = ![];
                while (_0x982bc5 < _0x52dfd5[_0x3117ea(0x1ca)]) {
                    const _0x3230bb = _0x52dfd5['getUint16'](_0x982bc5);
                    if ((_0x3230bb & 0xff00) !== 0xff00)
                        break;
                    if (_0x3230bb === 0xffda) {
                        if (!_0x31f852)
                            _0x31536b[_0x3117ea(0x1c7)](_0x5f2d36);
                        _0x31536b[_0x3117ea(0x1c7)](new Uint8Array(_0x1e36ce, _0x982bc5));
                        break;
                    }
                    const _0xeec984 = _0x52dfd5[_0x3117ea(0x381)](_0x982bc5 + 0x2) + 0x2;
                    if (_0x3230bb === 0xffe1) {
                        _0x982bc5 += _0xeec984;
                        continue;
                    }
                    _0x31536b[_0x3117ea(0x1c7)](new Uint8Array(_0x1e36ce, _0x982bc5, _0xeec984)), _0x982bc5 += _0xeec984;
                }
                const _0x5c949b = _0x31536b[_0x3117ea(0x232)]((_0x42c599, _0x7722b3) => _0x42c599 + _0x7722b3[_0x3117ea(0x1e2)], 0x0), _0x5f0e1c = new Uint8Array(_0x5c949b);
                let _0x7383a1 = 0x0;
                return _0x31536b[_0x3117ea(0x2c5)](_0x4327fd => {
                    const _0x33c693 = _0x3117ea;
                    _0x5f0e1c['set'](_0x4327fd, _0x7383a1), _0x7383a1 += _0x4327fd[_0x33c693(0x1e2)];
                }), new Blob([_0x5f0e1c], { 'type': _0x3117ea(0x337) });
            }
            const _0x28785e = await _0x1c6e29[_0x3117ea(0x401)](), _0x56b092 = new DataView(_0x28785e), _0xa370c8 = [];
            let _0x3d97b5 = -0x1, _0x45c069 = 0xc;
            while (_0x45c069 < _0x56b092[_0x3117ea(0x1ca)]) {
                const _0x5758a7 = _0x5548f3(_0x56b092, _0x45c069), _0x19dd4e = _0x56b092['getUint32'](_0x45c069 + 0x4, !![]), _0x6b43b2 = _0x19dd4e & 0x1, _0x2fc6bc = 0x8 + _0x19dd4e + _0x6b43b2;
                if (_0x5758a7 !== 'EXIF' && _0x5758a7 !== _0x3117ea(0x2eb)) {
                    _0xa370c8[_0x3117ea(0x1c7)](new Uint8Array(_0x28785e, _0x45c069, _0x2fc6bc));
                    if (_0x5758a7 === _0x3117ea(0x3f2))
                        _0x3d97b5 = _0xa370c8['length'] - 0x1;
                }
                _0x45c069 += _0x2fc6bc;
            }
            let _0x3330b1 = _0x20b8bb(_0x5b61dd(_0x3117ea(0x2c1)), _0x2d40e2(_0x1f6c2f[_0x3117ea(0x1e2)] + _0x351071[_0x3117ea(0x1e2)]), _0x1f6c2f, _0x351071);
            if (_0x3330b1['length'] & 0x1)
                _0x3330b1 = _0x20b8bb(_0x3330b1, Uint8Array['of'](0x0));
            if (_0x3d97b5 !== -0x1) {
                const _0x2ffdf1 = new Uint8Array(_0xa370c8[_0x3d97b5]);
                _0x2ffdf1[0x8] |= 0x10, _0xa370c8[_0x3d97b5] = _0x2ffdf1, _0xa370c8[_0x3117ea(0x348)](_0x3d97b5 + 0x1, 0x0, _0x3330b1);
            } else
                _0xa370c8['push'](_0x3330b1);
            const _0x163723 = _0xa370c8[_0x3117ea(0x232)]((_0x3e1c12, _0x453659) => _0x3e1c12 + _0x453659[_0x3117ea(0x1e2)], 0x0), _0x2e26af = _0x20b8bb(_0x5b61dd('RIFF'), _0x2d40e2(_0x163723 + 0x4), _0x5b61dd(_0x3117ea(0x20b))), _0x399e09 = _0x20b8bb(_0x2e26af, ..._0xa370c8);
            return new Blob([_0x399e09], { 'type': _0x3117ea(0x34c) });
        }
        async function _0x485b69(_0x375b1a, _0x5655bc) {
            const _0x115f6e = _0x8bfcd5;
            let _0x3f5394 = new Date()[_0x115f6e(0x397)](), _0x4f2b97 = Math['floor'](_0x3f5394 / 0x3e8), _0x542b44 = _0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x307)) ? _0x4f7051(_0x375b1a)['attr'](_0x115f6e(0x307)) : _0x4116c6[_0x115f6e(0x1ad)];
            !_0x542b44 && _0x4f7051(_0x375b1a)[_0x115f6e(0x253)]('data-path') && (_0x128583(_0x115f6e(0x3c6), _0x4f7051(_0x375b1a)[_0x115f6e(0x253)]('data-href')), _0x542b44 = await _0x376aff(_0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x443)))[_0x115f6e(0x476)](_0x5b369b => {
                _0x128583('get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:', _0x5b369b['message']);
            }), _0x542b44 == null && (_0x542b44 = _0x115f6e(0x25e)));
            _0x38b6ed[_0x115f6e(0x37f)] && _0x4f7051(_0x375b1a)['attr'](_0x115f6e(0x326)) && (_0x4f2b97 = parseInt(_0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x326))));
            if (_0x38b6ed[_0x115f6e(0x3ff)]) {
                _0x5ac088(!![]);
                let _0x104d47 = await _0x370347(_0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x34f)));
                _0x5ac088(![]);
                if (_0x104d47[_0x115f6e(0x395)] === 'ok') {
                    var _0x3b4e91 = null;
                    _0x104d47[_0x115f6e(0x42a)][0x0][_0x115f6e(0x3bf)] ? _0x3b4e91 = _0x104d47['items'][0x0][_0x115f6e(0x3bf)][0x0]['url'] : (_0x104d47['items'][0x0]['image_versions2'][_0x115f6e(0x28d)][_0x115f6e(0x31c)](function (_0x32123c, _0x350243) {
                        const _0x4b57e9 = _0x115f6e;
                        let _0x430468 = new URL(_0x32123c[_0x4b57e9(0x246)])['searchParams']['get'](_0x4b57e9(0x410)), _0x4848de = new URL(_0x350243[_0x4b57e9(0x246)])['searchParams'][_0x4b57e9(0x446)](_0x4b57e9(0x410));
                        if (_0x430468 && _0x4848de) {
                            if (_0x430468[_0x4b57e9(0x1e2)] > _0x4848de[_0x4b57e9(0x1e2)])
                                return 0x1;
                            if (_0x430468[_0x4b57e9(0x1e2)] < _0x4848de[_0x4b57e9(0x1e2)])
                                return -0x1;
                        } else {
                            if (_0x32123c[_0x4b57e9(0x426)] < _0x350243[_0x4b57e9(0x426)])
                                return 0x1;
                            if (_0x32123c[_0x4b57e9(0x426)] > _0x350243[_0x4b57e9(0x426)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x3b4e91 = _0x104d47[_0x115f6e(0x42a)][0x0][_0x115f6e(0x2f1)][_0x115f6e(0x28d)][0x0][_0x115f6e(0x246)]);
                    if (_0x5655bc) {
                        let _0x154c50 = new URL(_0x3b4e91);
                        _0x154c50['host'] = 'scontent.cdninstagram.com', _0x4cea82(_0x154c50['href']);
                    } else
                        _0x5a9811(_0x3b4e91, _0x542b44, _0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x3f5)), _0x4f2b97, _0x4f7051(_0x375b1a)[_0x115f6e(0x253)]('data-type'), _0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x443)));
                } else {
                    if (_0x38b6ed[_0x115f6e(0x3ee)]) {
                        if (_0x5655bc) {
                            let _0x472511 = new URL(_0x4f7051(_0x375b1a)['attr'](_0x115f6e(0x2d9)));
                            _0x472511[_0x115f6e(0x24f)] = 'scontent.cdninstagram.com', _0x4cea82(_0x472511[_0x115f6e(0x27d)]);
                        } else
                            _0x5a9811(_0x4f7051(_0x375b1a)['attr'](_0x115f6e(0x2d9)), _0x542b44, _0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x3f5)), _0x4f2b97, _0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x272)), _0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x443)));
                    } else
                        alert(_0x115f6e(0x1b4) + _0x104d47[_0x115f6e(0x386)]);
                    _0x128583(_0x104d47);
                }
            } else
                _0x5a9811(_0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x2d9)), _0x542b44, _0x4f7051(_0x375b1a)['attr'](_0x115f6e(0x3f5)), _0x4f2b97, _0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x272)), _0x4f7051(_0x375b1a)[_0x115f6e(0x253)](_0x115f6e(0x443)));
        }
        function _0x30dcb8() {
            const _0x2d30f6 = _0x8bfcd5;
            for (let _0x33e615 of _0x4116c6[_0x2d30f6(0x3ed)]) {
                _0x128583(_0x2d30f6(0x3e5), _0x33e615), GM_unregisterMenuCommand(_0x33e615);
            }
            _0x4116c6[_0x2d30f6(0x3ed)]['push'](GM_registerMenuCommand(_0x4e68d5(_0x2d30f6(0x2ea)), () => {
                _0x188050();
            }, { 'accessKey': 'w' })), _0x4116c6[_0x2d30f6(0x3ed)][_0x2d30f6(0x1c7)](GM_registerMenuCommand(_0x4e68d5(_0x2d30f6(0x2e5)), () => {
                const _0x421995 = _0x2d30f6;
                GM_openInTab(_0x421995(0x34d), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x4116c6[_0x2d30f6(0x3ed)][_0x2d30f6(0x1c7)](GM_registerMenuCommand(_0x4e68d5('DEBUG'), () => {
                _0x49c985();
            }, { 'accessKey': 'z' })), _0x4116c6[_0x2d30f6(0x3ed)][_0x2d30f6(0x1c7)](GM_registerMenuCommand(_0x4e68d5('FEEDBACK'), () => {
                _0x5ace48();
            }, { 'accessKey': 'f' })), _0x4116c6[_0x2d30f6(0x3ed)][_0x2d30f6(0x1c7)](GM_registerMenuCommand(_0x4e68d5(_0x2d30f6(0x217)), () => {
                _0x58277c();
            }, { 'accessKey': 'c' })), _0x4116c6[_0x2d30f6(0x3ed)][_0x2d30f6(0x1c7)](GM_registerMenuCommand(_0x4e68d5(_0x2d30f6(0x21f)), () => {
                _0x11f809();
            }, { 'accessKey': 'r' }));
        }
        function _0x6260c0(_0x1375b9) {
            const _0x395747 = _0x8bfcd5;
            if (!_0x38b6ed['CHECK_UPDATE'])
                return;
            const _0x41eadf = GM_getValue(_0x395747(0x2b8)) ?? new Date()[_0x395747(0x397)](), _0x9fe7ad = new Date()['getTime']();
            _0x9fe7ad > parseInt(_0x41eadf) + _0x1375b9 * 0x3e8 && (GM_setValue('G_CHECK_TIMESTAMP', new Date()[_0x395747(0x397)]()), _0x58277c());
        }
        function _0x58277c() {
            const _0x349c76 = _0x8bfcd5, _0x23eb0e = GM_info['script'][_0x349c76(0x237)], _0x495420 = _0x349c76(0x1eb);
            GM_xmlhttpRequest({
                'method': _0x349c76(0x424),
                'url': _0x495420,
                'onload': function (_0x5c34bf) {
                    const _0x1a2085 = _0x349c76, _0x2d2c3b = _0x5c34bf['responseText'], _0x2631d = _0x2d2c3b[_0x1a2085(0x40d)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x2631d && _0x2631d[0x1]) {
                        const _0x21847c = _0x2631d[0x1];
                        _0x128583('Current\x20version:\x20', _0x23eb0e, '|', _0x1a2085(0x24e), _0x21847c), _0x21847c !== _0x23eb0e && typeof this[_0x1a2085(0x40e)] === _0x1a2085(0x28c) ? (this[_0x1a2085(0x40e)] = null, GM_notification({
                            'text': _0x4e68d5('NOTICE_UPDATE_CONTENT'),
                            'title': _0x4e68d5(_0x1a2085(0x405)),
                            'tag': _0x1a2085(0x46d),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x1a2085(0x341),
                            'onclick': _0x70d205 => {
                                const _0x462fe3 = _0x1a2085;
                                _0x70d205?.['preventDefault']();
                                var _0x425a49 = GM_openInTab(GM_info['script'][_0x462fe3(0x225)]);
                                setTimeout(() => {
                                    const _0x458e8d = _0x462fe3;
                                    _0x425a49[_0x458e8d(0x1e6)]();
                                }, 0xfa);
                            }
                        })) : _0x128583(_0x1a2085(0x43d));
                    } else
                        console[_0x1a2085(0x418)](_0x1a2085(0x433));
                }
            });
        }
        function _0x188050() {
            const _0x141df5 = _0x8bfcd5;
            _0x4f7051(_0x141df5(0x3f0))[_0x141df5(0x25a)](), _0x5f5be1(), _0x4f7051(_0x141df5(0x37e))[_0x141df5(0x1c4)](_0x141df5(0x39b)), _0x4f7051(_0x141df5(0x265))[_0x141df5(0x1b2)](_0x141df5(0x3e4));
            for (let _0x5c9443 in _0x151ea2) {
                _0x4f7051('.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect')[_0x141df5(0x1b2)](_0x141df5(0x2c0) + _0x5c9443 + '\x22\x20' + (_0x4116c6['lang'] == _0x5c9443 ? _0x141df5(0x3ae) : '') + '>' + _0x151ea2[_0x5c9443] + _0x141df5(0x2d7));
            }
            for (let _0x2cfa37 in _0x38b6ed) {
                _0x4f7051('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x141df5(0x1b2)]('<label\x20class=\x22globalSettings' + (_0x6aab0c[_0x141df5(0x3bd)](_0x2cfa37) ? '\x20child' : '') + '\x22\x20title=\x22' + _0x4e68d5(_0x2cfa37 + _0x141df5(0x2db)) + _0x141df5(0x223) + (_0x2cfa37 + '_INTRO') + _0x141df5(0x2e0) + _0x2cfa37 + '\x22>' + _0x4e68d5(_0x2cfa37) + _0x141df5(0x3d1) + _0x2cfa37 + _0x141df5(0x417) + (_0x38b6ed[_0x2cfa37] === !![] ? _0x141df5(0x35c) : '') + _0x141df5(0x227)), _0x2cfa37 === _0x141df5(0x431) && _0x4f7051(_0x141df5(0x260) + _0x2cfa37 + '\x22]')[_0x141df5(0x45c)](_0x141df5(0x360))['on'](_0x141df5(0x298), function (_0x14e2ed) {
                    const _0x3bf0ac = _0x141df5;
                    _0x14e2ed[_0x3bf0ac(0x32e)](), _0x4f7051(this)[_0x3bf0ac(0x335)](_0x3bf0ac(0x42d))['length'] === 0x0 && (_0x4f7051(this)[_0x3bf0ac(0x1b2)](_0x3bf0ac(0x347)), _0x4f7051(this)['children'](_0x3bf0ac(0x42d))[_0x3bf0ac(0x1b2)](_0x3bf0ac(0x201) + _0x4116c6[_0x3bf0ac(0x210)] + _0x3bf0ac(0x465)), _0x4f7051(this)['children']('#tempWrapper')[_0x3bf0ac(0x1b2)](_0x3bf0ac(0x201) + _0x4116c6[_0x3bf0ac(0x210)] + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x4f7051(this)[_0x3bf0ac(0x26b)]('#tempWrapper')[_0x3bf0ac(0x1b2)](_0x3bf0ac(0x42c) + _0x44169f['CLOSE'] + _0x3bf0ac(0x1f6)));
                }), _0x2cfa37 === _0x141df5(0x36a) && _0x4f7051(_0x141df5(0x260) + _0x2cfa37 + '\x22]')[_0x141df5(0x45c)](_0x141df5(0x360))['on'](_0x141df5(0x298), function (_0x547c58) {
                    const _0x2f5df5 = _0x141df5;
                    _0x547c58['preventDefault'](), _0x4f7051(this)['find']('#tempWrapper')[_0x2f5df5(0x1e2)] === 0x0 && (_0x4f7051(this)['append'](_0x2f5df5(0x347)), _0x4f7051(this)[_0x2f5df5(0x26b)](_0x2f5df5(0x42d))[_0x2f5df5(0x1b2)](_0x2f5df5(0x208) + _0x4116c6['fileRenameFormat'] + _0x2f5df5(0x2c2)), _0x4f7051(this)[_0x2f5df5(0x26b)](_0x2f5df5(0x42d))['append'](_0x2f5df5(0x42c) + _0x44169f[_0x2f5df5(0x202)] + '</div>'));
                });
            }
        }
        function _0x49c985() {
            const _0x5296d5 = _0x8bfcd5;
            _0x4f7051(_0x5296d5(0x3f0))['remove'](), _0x5f5be1(), _0x4f7051(_0x5296d5(0x37e))['text'](_0x5296d5(0x2aa)), _0x4f7051(_0x5296d5(0x273))[_0x5296d5(0x1b2)]('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x4f7051(_0x5296d5(0x273))[_0x5296d5(0x1b2)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x4f7051(_0x5296d5(0x3ea))[_0x5296d5(0x1b2)](_0x5296d5(0x2af) + _0x4e68d5('SHOW_DOM_TREE') + _0x5296d5(0x1fe)), _0x4f7051(_0x5296d5(0x3ea))['append'](_0x5296d5(0x37a) + _0x4e68d5(_0x5296d5(0x3ba)) + _0x5296d5(0x1fe)), _0x4f7051(_0x5296d5(0x3ea))['append'](_0x5296d5(0x316) + _0x4e68d5(_0x5296d5(0x33e)) + _0x5296d5(0x205)), _0x4f7051(_0x5296d5(0x3ea))[_0x5296d5(0x1b2)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x4e68d5('REPORT_GITHUB') + _0x5296d5(0x1fe)), _0x4f7051(_0x5296d5(0x3ea))[_0x5296d5(0x1b2)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x4e68d5(_0x5296d5(0x333)) + '</a></button>');
        }
        function _0x5ace48() {
            const _0x1f1255 = _0x8bfcd5;
            _0x4f7051(_0x1f1255(0x3f0))['remove'](), _0x5f5be1(), _0x4f7051(_0x1f1255(0x37e))[_0x1f1255(0x1c4)](_0x1f1255(0x3af)), _0x4f7051(_0x1f1255(0x273))[_0x1f1255(0x1b2)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x4f7051('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append'](_0x1f1255(0x3ec) + _0x4e68d5(_0x1f1255(0x1ae)) + _0x1f1255(0x1fe)), _0x4f7051(_0x1f1255(0x3ea))[_0x1f1255(0x1b2)](_0x1f1255(0x3f4) + _0x4e68d5('REPORT_GITHUB') + _0x1f1255(0x1fe)), _0x4f7051(_0x1f1255(0x3ea))[_0x1f1255(0x1b2)](_0x1f1255(0x1e9) + _0x4e68d5(_0x1f1255(0x333)) + _0x1f1255(0x1fe));
        }
        function _0x4cea82(_0xd4e0d9) {
            const _0x100565 = _0x8bfcd5;
            var _0x38c210 = document['createElement']('a');
            _0x38c210['href'] = _0xd4e0d9, _0x38c210[_0x100565(0x1da)] = '_blank', document[_0x100565(0x36c)][_0x100565(0x46c)](_0x38c210), _0x38c210['click'](), _0x38c210[_0x100565(0x25a)]();
        }
        function _0x11f809() {
            const _0x2009f4 = _0x8bfcd5;
            clearInterval(_0x4116c6[_0x2009f4(0x2ee)]), _0x4116c6[_0x2009f4(0x2ce)][_0x2009f4(0x2c5)](_0x27a2b2 => {
                const _0x325bb3 = _0x2009f4;
                _0x27a2b2[_0x325bb3(0x43e)]['forEach'](_0x454321 => {
                    const _0x5464d1 = _0x325bb3;
                    _0x4f7051(_0x27a2b2['element'])[_0x5464d1(0x3e7)](_0x5464d1(0x2a9), _0x454321);
                });
            }), _0x4116c6[_0x2009f4(0x2ce)] = [], _0x4f7051(_0x2009f4(0x211))[_0x2009f4(0x25a)](), _0x4f7051(_0x2009f4(0x203))[_0x2009f4(0x25a)](), _0x4f7051(_0x2009f4(0x36e))[_0x2009f4(0x1d9)](_0x2009f4(0x241)), _0x4116c6[_0x2009f4(0x3ef)] = ![], _0x4116c6[_0x2009f4(0x275)] = ![], _0x4116c6[_0x2009f4(0x21a)] = location['href'], _0x4116c6['GL_observer'][_0x2009f4(0x439)](), _0x128583(_0x2009f4(0x30c));
        }
        function _0x128583(..._0x53b298) {
            const _0x1ca000 = _0x8bfcd5;
            var _0x32a00d = new Date();
            _0x4116c6[_0x1ca000(0x311)]['push']({
                'time': _0x32a00d[_0x1ca000(0x397)](),
                'content': [..._0x53b298]
            }), _0x4116c6[_0x1ca000(0x311)][_0x1ca000(0x1e2)] > 0x3e8 && (_0x4116c6[_0x1ca000(0x311)] = [
                {
                    'time': _0x32a00d[_0x1ca000(0x397)](),
                    'content': ['logger\x20sliced']
                },
                ..._0x4116c6[_0x1ca000(0x311)][_0x1ca000(0x23d)](-0x3e7)
            ]), console[_0x1ca000(0x2b7)]('[' + _0x32a00d[_0x1ca000(0x41f)]() + ']', ..._0x53b298);
        }
        function _0x310e33() {
            const _0x5cf56f = _0x8bfcd5;
            for (let _0x12e25f in _0x38b6ed) {
                GM_getValue(_0x12e25f) != null && typeof GM_getValue(_0x12e25f) === _0x5cf56f(0x1d8) && (_0x38b6ed[_0x12e25f] = GM_getValue(_0x12e25f), _0x12e25f === 'MODIFY_VIDEO_VOLUME' && GM_getValue(_0x12e25f) !== !![] && (_0x4116c6[_0x5cf56f(0x210)] = 0x1));
            }
        }
        function _0x2138a6(_0x81a988, _0x2d2645, _0x571050, _0x276354 = '') {
            const _0x3acccf = _0x8bfcd5;
            _0x2d2645[_0x3acccf(0x335)](_0x3acccf(0x469))[_0x3acccf(0x1e2)] === 0x0 ? (_0x2d2645[_0x3acccf(0x1b2)]('<div\x20class=\x22volume_slider\x20' + _0x276354 + _0x3acccf(0x2c2)), _0x2d2645[_0x3acccf(0x335)](_0x3acccf(0x469))[_0x3acccf(0x1b2)](_0x3acccf(0x423) + _0x4116c6['videoVolume'] + _0x3acccf(0x340)), _0x2d2645[_0x3acccf(0x335)](_0x3acccf(0x3a1))[_0x3acccf(0x253)](_0x3acccf(0x3e9), '--ig-track-progress:\x20' + (_0x4116c6[_0x3acccf(0x210)] * 0x64 + '%')), _0x2d2645[_0x3acccf(0x335)](_0x3acccf(0x3a1))['on'](_0x3acccf(0x221), function () {
                const _0x3c699d = _0x3acccf;
                var _0x1c0d16 = _0x4f7051(this)[_0x3c699d(0x295)]() * 0x64 + '%';
                _0x4116c6[_0x3c699d(0x210)] = _0x4f7051(this)[_0x3c699d(0x295)](), GM_setValue(_0x3c699d(0x43c), _0x4f7051(this)[_0x3c699d(0x295)]()), _0x4f7051(this)[_0x3c699d(0x253)]('style', '--ig-track-progress:\x20' + _0x1c0d16), _0x81a988['each'](function () {
                    const _0x4df34a = _0x3c699d;
                    _0x128583('(' + _0x571050 + ')', _0x4df34a(0x382)), this[_0x4df34a(0x3c3)] = _0x4116c6['videoVolume'];
                });
            }), _0x2d2645[_0x3acccf(0x335)]('div.volume_slider\x20input')['on'](_0x3acccf(0x26a), function () {
                const _0x60a657 = _0x3acccf;
                var _0x30a8a8 = _0x4116c6['videoVolume'] * 0x64 + '%';
                _0x4f7051(this)[_0x60a657(0x253)]('style', _0x60a657(0x411) + _0x30a8a8), _0x4f7051(this)[_0x60a657(0x295)](_0x4116c6['videoVolume']), _0x81a988[_0x60a657(0x2f4)](function () {
                    const _0x10118c = _0x60a657;
                    _0x128583('(' + _0x571050 + ')', 'video\x20volume\x20changed\x20#slider'), this[_0x10118c(0x3c3)] = _0x4116c6[_0x10118c(0x210)];
                });
            }), _0x2d2645[_0x3acccf(0x335)]('div.volume_slider')['on'](_0x3acccf(0x2a9), function (_0x344d81) {
                const _0xaa2ef5 = _0x3acccf;
                _0x344d81[_0xaa2ef5(0x41e)](), _0x344d81[_0xaa2ef5(0x32e)]();
            })) : _0x2d2645[_0x3acccf(0x335)](_0x3acccf(0x469))['remove']();
        }
        var _0x3ef934 = null;
        function _0x6372d(_0x4b3509) {
            const _0x340e3a = _0x8bfcd5;
            _0x901dde(), _0x4f7051(_0x340e3a(0x36c))[_0x340e3a(0x1b2)]('<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22display:\x20flex;filter:\x20invert(1);gap:\x208px;margin-right:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_left\x22\x20style=\x22cursor:\x20pointer;\x22>' + _0x44169f['TURN_DEG'] + _0x340e3a(0x247) + _0x44169f[_0x340e3a(0x31f)] + _0x340e3a(0x22a) + _0x44169f['CLOSE'] + _0x340e3a(0x447));
            const _0x4682d8 = _0x4f7051(_0x340e3a(0x2e4)), _0x1a230d = _0x4f7051(_0x340e3a(0x442)), _0x126f5f = _0x4f7051(_0x340e3a(0x30e)), _0xf78ccf = _0x4f7051('#iv_rotate'), _0x3b3994 = _0x4f7051('#iv_header'), _0x2681e7 = _0x4f7051(_0x340e3a(0x35a)), _0x4529ee = _0x4f7051('#iv_image'), _0x375e91 = _0x4f7051(_0x340e3a(0x20d)), _0x3c6090 = _0x4f7051(_0x340e3a(0x21d));
            _0x4529ee[_0x340e3a(0x253)](_0x340e3a(0x3b6), _0x4b3509), _0x4682d8['css']('display', 'flex'), _0x126f5f[_0x340e3a(0x3e2)]('transform-origin', _0x340e3a(0x438)), _0x126f5f[_0x340e3a(0x3e2)](_0x340e3a(0x2dd), 'transform\x200.15s\x20ease'), _0xf78ccf['css'](_0x340e3a(0x2e1), _0x340e3a(0x262)), _0xf78ccf[_0x340e3a(0x3e2)](_0x340e3a(0x2dd), _0x340e3a(0x38f)), _0x126f5f[_0x340e3a(0x3e2)](_0x340e3a(0x2dc), _0x340e3a(0x3cf)), _0xf78ccf[_0x340e3a(0x3e2)](_0x340e3a(0x2dc), _0x340e3a(0x3cf));
            let _0x361aae = 0x0, _0x5d2a91 = 0x1, _0xbfce6b = 0x0, _0x3a40a7 = 0x0, _0x47f35b = ![], _0xc3cbcd = ![], _0xa15aee, _0x1c97d9;
            var _0x5e94e8 = {
                'x': 0x0,
                'y': 0x0
            };
            _0x3ef934 = setInterval(() => {
                const _0x506271 = {
                    'x': _0xbfce6b,
                    'y': _0x3a40a7
                };
                _0x506271['x'] !== _0x5e94e8['x'] || _0x506271['y'] !== _0x5e94e8['y'] ? _0xc3cbcd = !![] : _0xc3cbcd = ![], _0x5e94e8 = _0x506271;
            }, 0x64), _0x4529ee['on'](_0x340e3a(0x36b), () => {
                _0xbfce6b = 0x0, _0x3a40a7 = 0x0, _0x3f70bc();
            }), _0x4529ee['on'](_0x340e3a(0x384), _0x372912 => {
                _0x372912['preventDefault']();
            }), _0x4529ee['on'](_0x340e3a(0x2a9), _0x5a2e54 => {
                const _0x262720 = _0x340e3a;
                _0x5a2e54[_0x262720(0x32e)](), _0x5a2e54[_0x262720(0x41e)](), !_0xc3cbcd && (_0x5d2a91 <= 0x1 ? _0x44d911(_0x5a2e54, Math['min'](Math[_0x262720(0x310)](0x1, _0x5d2a91 + 1.25), 0x5)) : (_0x5d2a91 = 0x1, _0xbfce6b = 0x0, _0x3a40a7 = 0x0), _0x3f70bc());
            }), _0x1a230d['on'](_0x340e3a(0x434), _0x583962 => {
                _0x583962['preventDefault'](), _0x44d911(_0x583962);
            }), _0x4682d8['on'](_0x340e3a(0x434), _0x2a6f28 => {
                const _0x5760cd = _0x340e3a;
                _0x2a6f28[_0x5760cd(0x32e)]();
            }), _0x4529ee['on'](_0x340e3a(0x3fb), _0x16b226 => {
                const _0xda46e5 = _0x340e3a;
                if (_0x5d2a91 == 0x1)
                    return;
                _0x47f35b = !![], _0xa15aee = _0x16b226[_0xda46e5(0x44c)] - _0xbfce6b, _0x1c97d9 = _0x16b226[_0xda46e5(0x41b)] - _0x3a40a7, _0x4529ee[_0xda46e5(0x3e2)](_0xda46e5(0x415), 'grabbing');
            }), _0x4529ee['on'](_0x340e3a(0x31e), () => {
                const _0x173c6f = _0x340e3a;
                if (_0x5d2a91 == 0x1)
                    return;
                _0x47f35b = ![], _0x4529ee['css'](_0x173c6f(0x415), _0x173c6f(0x441));
            }), _0x375e91['on'](_0x340e3a(0x2a9), function () {
                _0x361aae -= 0x5a, _0x3f70bc();
            }), _0x3c6090['on'](_0x340e3a(0x2a9), function () {
                _0x361aae += 0x5a, _0x3f70bc();
            }), _0x4f7051(document)['on'](_0x340e3a(0x3b8), _0x5ee9d1 => {
                const _0x4afb50 = _0x340e3a;
                if (!_0x47f35b)
                    return;
                _0x5ee9d1[_0x4afb50(0x32e)](), _0xbfce6b = _0x5ee9d1[_0x4afb50(0x44c)] - _0xa15aee, _0x3a40a7 = _0x5ee9d1['pageY'] - _0x1c97d9, _0x3f70bc();
            }), _0x4682d8['on'](_0x340e3a(0x2a9), () => {
                _0x901dde();
            }), _0x2681e7['on'](_0x340e3a(0x2a9), () => {
                _0x901dde();
            }), _0x3b3994['on'](_0x340e3a(0x2a9), _0x20c81d => {
                _0x20c81d['preventDefault'](), _0x20c81d['stopPropagation']();
            });
            function _0x3f70bc() {
                const _0x488c77 = _0x340e3a;
                _0x126f5f['css']('transition', _0xc3cbcd ? 'none' : _0x488c77(0x38f)), _0x126f5f[_0x488c77(0x3e2)](_0x488c77(0x3cf), _0x488c77(0x42f) + _0xbfce6b + _0x488c77(0x363) + _0x3a40a7 + _0x488c77(0x390) + _0x5d2a91 + ')'), _0xf78ccf[_0x488c77(0x3e2)](_0x488c77(0x3cf), _0x488c77(0x20a) + _0x361aae + _0x488c77(0x3a0)), _0x5d2a91 == 0x1 ? _0x4529ee[_0x488c77(0x3e2)](_0x488c77(0x415), _0x488c77(0x31a)) : _0x4529ee[_0x488c77(0x3e2)](_0x488c77(0x415), _0x488c77(0x1c2));
            }
            function _0x44d911(_0x47f44d, _0x4fb651) {
                const _0x40f9e = _0x340e3a;
                _0x47f44d[_0x40f9e(0x32e)]();
                let _0x264861 = _0x5d2a91;
                if (_0x4fb651 == null) {
                    let _0x53dbb2 = 0.1, _0x70f3c5 = _0x47f44d[_0x40f9e(0x287)][_0x40f9e(0x1fa)] < 0x0 ? 0x1 : -0x1;
                    _0x5d2a91 = Math[_0x40f9e(0x2ff)](0x5, Math[_0x40f9e(0x310)](0x1, _0x5d2a91 + _0x70f3c5 * _0x53dbb2 * _0x5d2a91));
                } else
                    _0x5d2a91 = _0x4fb651;
                let _0x4f1176 = _0x1a230d[0x0][_0x40f9e(0x3d7)](), _0xb837ce = _0x47f44d['clientX'] - _0x4f1176[_0x40f9e(0x361)], _0x1c9332 = _0x47f44d[_0x40f9e(0x2ef)] - _0x4f1176[_0x40f9e(0x2a8)], _0x34b9d0 = (_0xb837ce - _0xbfce6b) / _0x264861, _0x1bf7bd = (_0x1c9332 - _0x3a40a7) / _0x264861;
                _0xbfce6b = -_0x34b9d0 * _0x5d2a91 + _0xb837ce, _0x3a40a7 = -_0x1bf7bd * _0x5d2a91 + _0x1c9332, _0x3f70bc();
            }
        }
        function _0x901dde() {
            const _0x28234f = _0x8bfcd5;
            clearInterval(_0x3ef934), _0x4f7051(_0x28234f(0x2e4))[_0x28234f(0x25a)](), _0x4f7051(document)[_0x28234f(0x3e7)](_0x28234f(0x3b8));
        }
        function _0x51ba38() {
            const _0x106612 = _0x8bfcd5;
            var _0x6a7f1b = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x106612(0x43f),
                        'NOTICE_UPDATE_CONTENT': 'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
                        'CHECK_UPDATE': 'Checking\x20for\x20Script\x20Updates',
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': _0x106612(0x2ed),
                        'RELOAD_SCRIPT': _0x106612(0x3d4),
                        'DONATE': _0x106612(0x1d3),
                        'FEEDBACK': _0x106612(0x422),
                        'IMAGE_VIEWER': 'Open\x20Image\x20In\x20Viewer',
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x106612(0x1f8),
                        'SELECT_AND_COPY': _0x106612(0x44d),
                        'DOWNLOAD_DOM_TREE': _0x106612(0x2f7),
                        'REPORT_GITHUB': _0x106612(0x2d8),
                        'REPORT_DISCORD': _0x106612(0x285),
                        'REPORT_FORK': _0x106612(0x2f9),
                        'DEBUG': _0x106612(0x1be),
                        'CLOSE': 'Close',
                        'ALL_CHECK': _0x106612(0x25d),
                        'BATCH_DOWNLOAD_SELECTED': _0x106612(0x3b7),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x106612(0x1bf),
                        'VID': _0x106612(0x367),
                        'DW': 'Download',
                        'DW_ALL': _0x106612(0x370),
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x106612(0x34a),
                        'LOAD_BLOB_MULTIPLE': _0x106612(0x2a2),
                        'LOAD_BLOB_RELOAD': _0x106612(0x213),
                        'NO_CHECK_RESOURCE': _0x106612(0x22c),
                        'NO_VID_URL': _0x106612(0x252),
                        'SETTING': _0x106612(0x1f4),
                        'AUTO_RENAME': _0x106612(0x1db),
                        'RENAME_SHORTCODE': _0x106612(0x24d),
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0x106612(0x277),
                        'DISABLE_VIDEO_LOOPING': _0x106612(0x321),
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x106612(0x1f2),
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x106612(0x2a6),
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': _0x106612(0x339),
                        'MODIFY_RESOURCE_EXIF': _0x106612(0x256),
                        'SCROLL_BUTTON': _0x106612(0x342),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x106612(0x3b1),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x106612(0x2df),
                        'AUTO_RENAME_INTRO': _0x106612(0x29c),
                        'RENAME_SHORTCODE_INTRO': _0x106612(0x456),
                        'RENAME_PUBLISH_DATE_INTRO': _0x106612(0x2a3),
                        'RENAME_LOCATE_DATE_INTRO': _0x106612(0x445),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x106612(0x216),
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': 'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x106612(0x1dd),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x106612(0x245),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x106612(0x3bc),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x106612(0x44f),
                        'SCROLL_BUTTON_INTRO': _0x106612(0x23e),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': 'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': 'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x106612(0x3fd),
                        'MODIFY_RESOURCE_EXIF_INTRO': _0x106612(0x399)
                    }
                }, _0x2a31ab = Object[_0x106612(0x234)]({}, _0x6a7f1b, _0x4116c6[_0x106612(0x2ac)]), _0x486337 = Object[_0x106612(0x1e5)](_0x2a31ab)[_0x106612(0x31c)]()[_0x106612(0x232)]((_0x5ae2a1, _0x38063f) => {
                    return _0x5ae2a1[_0x38063f] = _0x2a31ab[_0x38063f], _0x5ae2a1;
                }, {});
            return _0x486337;
        }
        async function _0x2e269a(_0x48fcea) {
            return new Promise((_0x32fec8, _0x1e7012) => {
                const _0x2a91ca = a0_0xa48a;
                GM_xmlhttpRequest({
                    'method': _0x2a91ca(0x424),
                    'url': 'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/' + _0x48fcea + _0x2a91ca(0x359),
                    'onload': function (_0x263b5d) {
                        const _0x141dd5 = _0x2a91ca;
                        try {
                            let _0x46c14b = JSON[_0x141dd5(0x226)](_0x263b5d[_0x141dd5(0x3c4)]);
                            _0x32fec8(_0x46c14b);
                        } catch (_0xfd9e) {
                            _0x1e7012(_0xfd9e);
                        }
                    },
                    'onerror': function (_0x342dbd) {
                        const _0x5ef890 = _0x2a91ca;
                        _0x128583(_0x5ef890(0x39d), _0x5ef890(0x3a7), _0x342dbd), _0x1e7012(_0x342dbd);
                    }
                });
            });
        }
        function _0x4e68d5(_0x2a0b82) {
            const _0x4d4346 = _0x8bfcd5, _0xf0aea = _0x51ba38();
            return _0xf0aea[_0x4116c6[_0x4d4346(0x3e6)]] != undefined && _0xf0aea[_0x4116c6['lang']][_0x2a0b82] != undefined ? _0xf0aea[_0x4116c6[_0x4d4346(0x3e6)]][_0x2a0b82] : _0xf0aea[_0x4d4346(0x432)][_0x2a0b82];
        }
        function _0x28a084() {
            const _0x24195a = _0x8bfcd5;
            _0x4f7051(_0x24195a(0x1e7))[_0x24195a(0x2f4)](function () {
                const _0x5bb1fd = _0x24195a;
                _0x4f7051(this)[_0x5bb1fd(0x1c4)](_0x4e68d5(_0x4f7051(this)[_0x5bb1fd(0x253)](_0x5bb1fd(0x398))));
            }), _0x4f7051(_0x24195a(0x33d))[_0x24195a(0x2f4)](function () {
                const _0x3fa50f = _0x24195a;
                _0x4f7051(this)[_0x3fa50f(0x253)](_0x3fa50f(0x33c), _0x4e68d5(_0x4f7051(this)[_0x3fa50f(0x253)](_0x3fa50f(0x38d))));
            });
        }
        _0x4f7051(function () {
            const _0x3e1de = _0x8bfcd5;
            function _0x578faf(_0x2e2508) {
                const _0x5cb919 = a0_0xa48a;
                var _0x13cbb4 = [];
                for (var _0x506574 of _0x2e2508) {
                    _0x13cbb4[_0x5cb919(0x1c7)]({
                        'tagName': _0x506574[_0x5cb919(0x45f)],
                        'id': _0x506574['id'],
                        'className': _0x506574['className']
                    });
                }
                return _0x13cbb4;
            }
            function _0x2b05fa() {
                const _0x2f1278 = a0_0xa48a;
                let _0x454b85 = _0x4f7051(_0x2f1278(0x330))[0x0];
                var _0x1bb110 = '';
                _0x4116c6[_0x2f1278(0x311)][_0x2f1278(0x2c5)](_0x1d21a6 => {
                    const _0x563d85 = _0x2f1278;
                    var _0x154871 = JSON[_0x563d85(0x440)](_0x1d21a6['content'], function (_0x2797d9, _0x43e3d5) {
                        const _0x53ad1f = _0x563d85;
                        if (Array[_0x53ad1f(0x365)](this)) {
                            if (typeof _0x43e3d5 === _0x53ad1f(0x290) && _0x43e3d5 instanceof jQuery)
                                return _0x578faf(_0x43e3d5);
                            return _0x43e3d5;
                        } else
                            return _0x43e3d5;
                    }, '\x09');
                    _0x1bb110 += new Date(_0x1d21a6[_0x563d85(0x1d5)])[_0x563d85(0x41f)]() + ':\x20' + _0x154871 + '\x0a';
                }), _0x4f7051(_0x2f1278(0x40f))[_0x2f1278(0x1c4)](_0x2f1278(0x1bc) + _0x1bb110 + _0x2f1278(0x1c0) + location[_0x2f1278(0x43b)] + _0x2f1278(0x1f7) + _0x454b85[_0x2f1278(0x46f)]);
            }
            _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x37b), function () {
                _0x2b05fa();
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x4d1b57 = _0x3e1de;
                _0x4f7051(_0x4d1b57(0x40f))[_0x4d1b57(0x312)](), document['execCommand'](_0x4d1b57(0x219));
            }), _0x4f7051('body')['on'](_0x3e1de(0x2a9), _0x3e1de(0x2e7), function () {
                const _0x50d830 = _0x3e1de;
                _0x4f7051(_0x50d830(0x40f))[_0x50d830(0x1c4)]()[_0x50d830(0x1e2)] === 0x0 && _0x2b05fa();
                var _0x3bbf43 = _0x4f7051(_0x50d830(0x40f))[_0x50d830(0x1c4)](), _0x3a710f = document[_0x50d830(0x1c8)]('a'), _0x34b347 = new Blob([_0x3bbf43], { 'type': _0x50d830(0x2a0) });
                _0x3a710f[_0x50d830(0x27d)] = URL[_0x50d830(0x355)](_0x34b347), _0x3a710f[_0x50d830(0x28e)] = _0x50d830(0x2b4) + new Date()[_0x50d830(0x397)]() + _0x50d830(0x414), document[_0x50d830(0x36c)][_0x50d830(0x46c)](_0x3a710f), _0x3a710f['click'](), _0x3a710f[_0x50d830(0x25a)]();
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x45b), function () {
                const _0x27dacc = _0x3e1de;
                _0x4f7051(this)[_0x27dacc(0x45c)](_0x27dacc(0x42d))[_0x27dacc(0x1e2)] > 0x0 ? _0x4f7051(this)[_0x27dacc(0x45c)](_0x27dacc(0x42d))['fadeOut'](0xfa, function () {
                    const _0xd7c688 = _0x27dacc;
                    _0x4f7051(this)[_0xd7c688(0x25a)]();
                }) : _0x4f7051(_0x27dacc(0x3f0))[_0x27dacc(0x25a)]();
            }), _0x4f7051(window)['on'](_0x3e1de(0x354), function (_0x42a953) {
                const _0x23f6ea = _0x3e1de;
                _0x42a953[_0x23f6ea(0x451)] == '81' && _0x42a953[_0x23f6ea(0x364)] && (_0x4f7051(_0x23f6ea(0x3f0))['remove'](), _0x42a953[_0x23f6ea(0x32e)]()), _0x42a953[_0x23f6ea(0x451)] == '87' && _0x42a953[_0x23f6ea(0x364)] && (_0x188050(), _0x42a953['preventDefault']()), _0x42a953[_0x23f6ea(0x451)] == '90' && _0x42a953[_0x23f6ea(0x364)] && (_0x49c985(), _0x42a953[_0x23f6ea(0x32e)]()), _0x42a953[_0x23f6ea(0x451)] == '82' && _0x42a953[_0x23f6ea(0x364)] && (_0x11f809(), _0x42a953['preventDefault']()), _0x42a953[_0x23f6ea(0x451)] == '83' && _0x42a953[_0x23f6ea(0x364)] && (location['href'][_0x23f6ea(0x40d)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x4f7051(_0x23f6ea(0x204))[_0x23f6ea(0x1e2)] > 0x0 && _0x4f7051(_0x23f6ea(0x204))?.['trigger'](_0x23f6ea(0x2a9)), location['href'][_0x23f6ea(0x40d)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x4f7051(_0x23f6ea(0x2be))[_0x23f6ea(0x1e2)] > 0x0 && _0x4f7051('.IG_DWHISTORY')?.[_0x23f6ea(0x43e)](_0x23f6ea(0x2a9)), _0x42a953[_0x23f6ea(0x32e)]());
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x317), _0x3e1de(0x40c), function () {
                const _0x1c3ff3 = _0x3e1de;
                var _0xa7970d = _0x4f7051(this)[_0x1c3ff3(0x253)]('id');
                if (_0xa7970d && _0x38b6ed[_0xa7970d] !== undefined) {
                    let _0x102322 = _0x4f7051(this)['prop'](_0x1c3ff3(0x35c));
                    GM_setValue(_0xa7970d, _0x102322), _0x38b6ed[_0xa7970d] = _0x102322, console[_0x1c3ff3(0x2b7)](_0x1c3ff3(0x3ce), _0xa7970d, _0x102322);
                }
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x2f5), function (_0x5bdfb8) {
                const _0x36fa96 = _0x3e1de;
                _0x4f7051(this)[_0x36fa96(0x335)](_0x36fa96(0x42d))['length'] > 0x0 && _0x5bdfb8[_0x36fa96(0x32e)]();
            }), _0x4f7051(_0x3e1de(0x36c))['on']('change', _0x3e1de(0x3ac), function () {
                const _0x2caf72 = _0x3e1de;
                let _0x55c95c = _0x4f7051(this)[_0x2caf72(0x295)]();
                _0x4f7051(this)[_0x2caf72(0x253)](_0x2caf72(0x380)) == _0x2caf72(0x3aa) ? _0x4f7051(this)['next']()[_0x2caf72(0x295)](_0x55c95c) : _0x4f7051(this)[_0x2caf72(0x29b)]()['val'](_0x55c95c), _0x55c95c >= 0x0 && _0x55c95c <= 0x1 && (_0x4116c6[_0x2caf72(0x210)] = _0x55c95c, GM_setValue('G_VIDEO_VOLUME', _0x55c95c));
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x221), _0x3e1de(0x3ac), function () {
                const _0x481e3c = _0x3e1de;
                if (_0x4f7051(this)[_0x481e3c(0x253)]('type') == _0x481e3c(0x3aa)) {
                    let _0x3ac979 = _0x4f7051(this)[_0x481e3c(0x295)]();
                    _0x4f7051(this)[_0x481e3c(0x26d)]()[_0x481e3c(0x295)](_0x3ac979);
                } else {
                    let _0x46d543 = _0x4f7051(this)['val']();
                    _0x46d543 >= 0x0 && _0x46d543 <= 0x1 ? _0x4f7051(this)[_0x481e3c(0x29b)]()[_0x481e3c(0x295)](_0x46d543) : _0x46d543 < 0x0 ? _0x4f7051(this)[_0x481e3c(0x295)](0x0) : _0x4f7051(this)[_0x481e3c(0x295)](0x1);
                }
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x221), '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format', function () {
                const _0x36fc95 = _0x3e1de;
                GM_setValue('G_RENAME_FORMAT', _0x4f7051(this)[_0x36fc95(0x295)]()), _0x4116c6[_0x36fc95(0x2cf)] = _0x4f7051(this)[_0x36fc95(0x295)]();
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x38a), function (_0x55b803) {
                _0x55b803['preventDefault'](), _0x485b69(this);
            }), _0x4f7051('body')['on']('click', _0x3e1de(0x268), function () {
                const _0x456fea = _0x3e1de;
                if (_0x38b6ed[_0x456fea(0x3ff)] && _0x38b6ed['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                    _0x485b69(_0x4f7051(this)[_0x456fea(0x45c)]()[_0x456fea(0x26b)]('a')[_0x456fea(0x207)]()[0x0], !![]);
                else {
                    var _0xa4d1b6 = new URL(_0x4f7051(this)[_0x456fea(0x45c)]()[_0x456fea(0x26b)]('a')[_0x456fea(0x253)](_0x456fea(0x2d9)));
                    _0xa4d1b6[_0x456fea(0x24f)] = _0x456fea(0x1c1), _0x4cea82(_0xa4d1b6[_0x456fea(0x27d)]);
                }
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x224), function () {
                const _0xb3acf9 = _0x3e1de;
                let _0x127ab2 = new Date()[_0xb3acf9(0x397)]();
                _0x38b6ed['RENAME_PUBLISH_DATE'] && _0x4f7051(this)[_0xb3acf9(0x45c)]()[_0xb3acf9(0x26b)]('a')[_0xb3acf9(0x253)](_0xb3acf9(0x326)) && (_0x127ab2 = _0x4f7051(this)[_0xb3acf9(0x45c)]()[_0xb3acf9(0x26b)]('a')['attr']('datetime'));
                let _0x3c1e39 = _0x4f7051(this)['parent']()[_0xb3acf9(0x26b)]('a')[_0xb3acf9(0x253)](_0xb3acf9(0x443)) ?? _0x4f7051(_0xb3acf9(0x3c7))[_0xb3acf9(0x1c4)]();
                _0x5a9811(_0x4f7051(this)[_0xb3acf9(0x45c)]()['children']('a')[_0xb3acf9(0x335)]('img')[_0xb3acf9(0x207)]()[_0xb3acf9(0x253)](_0xb3acf9(0x3b6)), _0x4f7051(this)[_0xb3acf9(0x45c)]()[_0xb3acf9(0x26b)]('a')[_0xb3acf9(0x253)]('data-username'), _0xb3acf9(0x270), _0x127ab2, _0xb3acf9(0x2c3), _0x3c1e39);
            }), _0x4f7051('body')['on'](_0x3e1de(0x2a9), _0x3e1de(0x204), function () {
                _0x2e6308(!![]);
            }), _0x4f7051(_0x3e1de(0x36c))['on']('click', _0x3e1de(0x46a), function () {
                _0x9ffb75();
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), '.IG_DWNEWTAB', function (_0xf481bb) {
                const _0x4959a0 = _0x3e1de;
                _0xf481bb[_0x4959a0(0x32e)](), _0x2e6308(!![], !![], !![]);
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x343), function () {
                _0xccb308(!![]);
            }), _0x4f7051('body')['on'](_0x3e1de(0x2a9), _0x3e1de(0x2b6), function (_0x3ccb66) {
                const _0x21bbdd = _0x3e1de;
                _0x3ccb66[_0x21bbdd(0x41e)](), _0x28ff59(!![]);
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x2be), function () {
                _0x175c33(!![]);
            }), _0x4f7051('body')['on'](_0x3e1de(0x2a9), _0x3e1de(0x402), function () {
                _0x344c1b();
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x30d), function (_0x152329) {
                const _0x31a298 = _0x3e1de;
                _0x152329[_0x31a298(0x32e)](), _0x175c33(!![], !![]);
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x404), function () {
                _0x56a120(!![]);
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), '.IG_REELS', function () {
                _0x24ba99(!![], !![]);
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x36d), function () {
                _0x24ba99(!![], !![], !![]);
            }), _0x4f7051('body')['on']('click', _0x3e1de(0x374), function () {
                _0x24ba99(!![], ![]);
            }), _0x4f7051(_0x3e1de(0x36c))['on']('mousedown', _0x3e1de(0x22d), function (_0x2a1c0e) {
                const _0xe58021 = _0x3e1de;
                if (_0x2a1c0e[_0xe58021(0x451)] === 0x3 || _0x2a1c0e[_0xe58021(0x451)] === 0x2) {
                    if (location['href'] === _0xe58021(0x21b) && _0x38b6ed[_0xe58021(0x403)]) {
                        _0x2a1c0e[_0xe58021(0x32e)]();
                        if (_0x4f7051(this)['find'](_0xe58021(0x2a5))['length'] > 0x0) {
                            const _0x279d29 = _0xe58021(0x21b) + _0x4f7051(this)[_0xe58021(0x26b)](_0xe58021(0x460))[_0xe58021(0x320)]()[_0xe58021(0x1c4)]();
                            _0x2a1c0e[_0xe58021(0x451)] === 0x2 ? GM_openInTab(_0x279d29) : location['href'] = _0x279d29;
                        }
                    }
                }
            }), _0x4f7051('body')['on'](_0x3e1de(0x317), _0x3e1de(0x231), function () {
                const _0x3e74b1 = _0x3e1de;
                var _0x3191b7 = _0x4f7051(this)[_0x3e74b1(0x335)](_0x3e74b1(0x221))[_0x3e74b1(0x467)](_0x3e74b1(0x35c));
                _0x4f7051(_0x3e74b1(0x22b))[_0x3e74b1(0x2f4)](function () {
                    const _0xd66ee1 = _0x3e74b1;
                    _0x4f7051(this)[_0xd66ee1(0x467)](_0xd66ee1(0x35c), _0x3191b7);
                });
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x317), _0x3e1de(0x22b), function () {
                const _0x14374e = _0x3e1de;
                var _0x39ac83 = _0x4f7051(_0x14374e(0x393))['length'], _0x15c7a1 = _0x4f7051(_0x14374e(0x22b))['length'];
                _0x4f7051(_0x14374e(0x231))['find'](_0x14374e(0x221))[_0x14374e(0x467)](_0x14374e(0x35c), _0x39ac83 == _0x15c7a1);
            }), _0x4f7051('body')['on'](_0x3e1de(0x2a9), '.IG_POPUP_DIG_TITLE\x20#batch_download_selected', function () {
                const _0x42f0e4 = _0x3e1de;
                let _0x51ce56 = 0x0;
                _0x4f7051('.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x42f0e4(0x2f4)](function () {
                    const _0x1fe738 = _0x42f0e4;
                    _0x4f7051(this)[_0x1fe738(0x29b)]()['children'](_0x1fe738(0x221))['prop'](_0x1fe738(0x35c)) && (_0x4f7051(this)[_0x1fe738(0x43e)](_0x1fe738(0x2a9)), _0x51ce56++);
                }), _0x51ce56 == 0x0 && alert(_0x4e68d5('NO_CHECK_RESOURCE'));
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x317), _0x3e1de(0x35b), function () {
                const _0x37a449 = _0x3e1de;
                GM_setValue(_0x37a449(0x3e6), _0x4f7051(this)[_0x37a449(0x295)]()), _0x4116c6['lang'] = _0x4f7051(this)[_0x37a449(0x295)](), _0x4116c6[_0x37a449(0x3e6)]?.['startsWith']('en') || _0x4116c6[_0x37a449(0x2ac)][_0x4116c6[_0x37a449(0x3e6)]] != null ? (_0x28a084(), _0x30dcb8()) : _0x2e269a(_0x4116c6['lang'])['then'](_0x200b46 => {
                    const _0x57b2b6 = _0x37a449;
                    _0x4116c6[_0x57b2b6(0x2ac)][_0x4116c6['lang']] = _0x200b46, _0x28a084(), _0x30dcb8();
                })['catch'](_0x2fddaf => {
                    console['error']('getTranslationText\x20catch\x20error:', _0x2fddaf);
                });
            }), _0x4f7051(_0x3e1de(0x36c))['on'](_0x3e1de(0x2a9), _0x3e1de(0x20c), function () {
                const _0x509704 = _0x3e1de;
                _0x4f7051(_0x509704(0x38b))[_0x509704(0x2f4)](function () {
                    const _0x378205 = _0x509704;
                    _0x4f7051(this)[_0x378205(0x43e)]('click');
                });
            });
            const _0x30228e = new MutationObserver(_0xd7ebda => {
                const _0x454b92 = _0x3e1de;
                for (const _0x1218d9 of _0xd7ebda) {
                    _0x1218d9[_0x454b92(0x380)] === _0x454b92(0x35d) && _0x1218d9[_0x454b92(0x235)][_0x454b92(0x2c5)](_0x4fb547 => {
                        const _0x518371 = _0x454b92, _0x377d60 = _0x4f7051(_0x4fb547)[_0x518371(0x335)](_0x518371(0x369));
                        if (location[_0x518371(0x43b)][_0x518371(0x299)](_0x518371(0x3dd))) {
                            if (_0x4f7051(_0x4fb547)[_0x518371(0x253)]('data-ih-locale-title') == null && _0x4f7051(_0x4fb547)[_0x518371(0x253)]('data-visualcompletion') == null && _0x4fb547['tagName'] === _0x518371(0x1bd)) {
                                var _0x317a2e = _0x4f7051(_0x4fb547)[_0x518371(0x335)]('time[datetime]');
                                let _0x35204a = _0x317a2e?.[_0x518371(0x253)](_0x518371(0x33c));
                                _0x35204a != null && _0x317a2e[_0x518371(0x1c4)](_0x35204a);
                            }
                        }
                        if (_0x377d60[_0x518371(0x1e2)] > 0x0) {
                            _0x38b6ed['MODIFY_VIDEO_VOLUME'] && _0x377d60[_0x518371(0x2f4)](function () {
                                const _0x8f100c = _0x518371;
                                _0x4f7051(this)['on'](_0x8f100c(0x400), function () {
                                    const _0x59de3f = _0x8f100c;
                                    !_0x4f7051(this)[_0x59de3f(0x35e)]('modify') && (_0x4f7051(this)[_0x59de3f(0x253)](_0x59de3f(0x429), !![]), this[_0x59de3f(0x3c3)] = _0x4116c6['videoVolume'], _0x128583('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location['pathname'][_0x518371(0x40d)](/^(\/stories\/)/ig)) {
                                const _0x573be4 = location[_0x518371(0x43b)][_0x518371(0x40d)](/^(\/stories\/highlights\/)/ig) != null, _0x507ff8 = _0x573be4 ? _0x518371(0x1bb) : 'story';
                                _0x377d60[_0x518371(0x2f4)](function () {
                                    const _0x1e0900 = _0x518371;
                                    _0x4f7051(this)['on']('timeupdate', function () {
                                        const _0x6f10d2 = a0_0xa48a;
                                        if (!_0x4f7051(this)[_0x6f10d2(0x35e)](_0x6f10d2(0x408))) {
                                            let _0x2e3d2e = _0x4f7051(this);
                                            _0x2e3d2e[_0x6f10d2(0x236)](_0x6f10d2(0x1ba))[_0x6f10d2(0x477)](function () {
                                                const _0x174acb = _0x6f10d2;
                                                return _0x4f7051(this)[_0x174acb(0x426)]() == _0x2e3d2e[_0x174acb(0x426)]();
                                            })[_0x6f10d2(0x335)](_0x6f10d2(0x1f5))[_0x6f10d2(0x1e2)] === 0x0 ? (_0x4f7051(this)['attr'](_0x6f10d2(0x2f3), !![]), _0x573be4 ? _0x56a120(![]) : _0xccb308(![]), _0x128583('(' + _0x507ff8 + ')', _0x6f10d2(0x2bb))) : (_0x4f7051(this)[_0x6f10d2(0x253)](_0x6f10d2(0x2f3), !![]), _0x128583('(' + _0x507ff8 + ')', _0x6f10d2(0x291)));
                                        }
                                    });
                                    var _0xabd9b7 = _0x4f7051(this);
                                    if (_0x38b6ed['HTML5_VIDEO_CONTROL']) {
                                        if (!_0xabd9b7[_0x1e0900(0x35e)](_0x1e0900(0x453))) {
                                            _0x128583('(' + _0x507ff8 + ')', _0x1e0900(0x35f));
                                            _0x38b6ed[_0x1e0900(0x431)] && (this[_0x1e0900(0x3c3)] = _0x4116c6['videoVolume'], _0xabd9b7['on']('loadstart', function () {
                                                const _0xb82e55 = _0x1e0900;
                                                this['volume'] = _0x4116c6[_0xb82e55(0x210)];
                                            }));
                                            let _0x15ed76 = _0xabd9b7['parents'](_0x1e0900(0x460))[_0x1e0900(0x477)](function () {
                                                    const _0x277c91 = _0x1e0900;
                                                    return _0x4f7051(this)[_0x277c91(0x253)](_0x277c91(0x209)) == null && _0x4f7051(this)['attr'](_0x277c91(0x3e9)) == null;
                                                })[_0x1e0900(0x207)](), _0x173708 = _0x15ed76[_0x1e0900(0x26d)]();
                                            _0x173708[_0x1e0900(0x243)]();
                                            let _0x643042 = _0x15ed76['find']('div[class][role=\x22button\x22]');
                                            _0x643042[_0x1e0900(0x243)]();
                                            const _0x26396e = function (_0x11dbe9) {
                                                const _0x272f0f = _0x1e0900;
                                                _0x11dbe9[_0x272f0f(0x32e)](), _0xabd9b7[_0x272f0f(0x3e2)](_0x272f0f(0x1ac), '2'), _0xabd9b7[_0x272f0f(0x253)](_0x272f0f(0x453), !![]), _0x643042[_0x272f0f(0x243)](), _0x173708[_0x272f0f(0x243)](), _0x2138a6(_0xabd9b7, _0xabd9b7[_0x272f0f(0x236)](_0x272f0f(0x1ba))[_0x272f0f(0x477)](function () {
                                                    const _0xba15fd = _0x272f0f;
                                                    return _0x4f7051(this)[_0xba15fd(0x426)]() == _0xabd9b7['width']();
                                                })[_0x272f0f(0x207)](), _0x507ff8, 'vertical');
                                            };
                                            _0xabd9b7['parent']()[_0x1e0900(0x335)](_0x1e0900(0x281))['on'](_0x1e0900(0x298), _0x26396e), _0x643042['on'](_0x1e0900(0x298), _0x26396e), _0x173708['on'](_0x1e0900(0x298), _0x26396e), _0xabd9b7['on']('contextmenu', function (_0x30729c) {
                                                const _0x30bdfc = _0x1e0900;
                                                _0x30729c[_0x30bdfc(0x32e)](), _0xabd9b7[_0x30bdfc(0x3e2)](_0x30bdfc(0x1ac), '-1'), _0xabd9b7[_0x30bdfc(0x1d9)](_0x30bdfc(0x453)), _0x173708[_0x30bdfc(0x3a6)](), _0x643042['show'](), _0x2138a6(_0xabd9b7, _0xabd9b7[_0x30bdfc(0x236)]('div[style][class]')[_0x30bdfc(0x477)](function () {
                                                    const _0x84d0e9 = _0x30bdfc;
                                                    return _0x4f7051(this)[_0x84d0e9(0x426)]() == _0xabd9b7[_0x84d0e9(0x426)]();
                                                })[_0x30bdfc(0x207)](), _0x507ff8, _0x30bdfc(0x261));
                                            }), _0xabd9b7['on'](_0x1e0900(0x3d8), function () {
                                                const _0x3b2753 = _0x1e0900;
                                                let _0x58c657 = _0x15ed76['parent']()['find'](_0x3b2753(0x264))[_0x3b2753(0x236)](_0x3b2753(0x378))[_0x3b2753(0x207)]();
                                                var _0x430f2b = _0x58c657[_0x3b2753(0x335)](_0x3b2753(0x248))['length'] === 0x0;
                                                this[_0x3b2753(0x3f3)] != _0x430f2b && (this[_0x3b2753(0x3c3)] = _0x4116c6[_0x3b2753(0x210)], _0x58c657?.['trigger']('click')), _0x4f7051(this)[_0x3b2753(0x253)](_0x3b2753(0x26f)) && (_0x4116c6['videoVolume'] = this[_0x3b2753(0x3c3)], GM_setValue(_0x3b2753(0x43c), this[_0x3b2753(0x3c3)])), this[_0x3b2753(0x3c3)] == _0x4116c6['videoVolume'] && _0x4f7051(this)[_0x3b2753(0x253)](_0x3b2753(0x26f), !![]);
                                            }), _0xabd9b7[_0x1e0900(0x3e2)]('position', 'absolute'), _0xabd9b7[_0x1e0900(0x3e2)](_0x1e0900(0x1ac), '2'), _0xabd9b7['attr'](_0x1e0900(0x29e), !![]), _0xabd9b7[_0x1e0900(0x253)](_0x1e0900(0x453), !![]);
                                        }
                                    } else
                                        _0x2138a6(_0xabd9b7, _0xabd9b7[_0x1e0900(0x236)](_0x1e0900(0x1ba))['filter'](function () {
                                            const _0x54120b = _0x1e0900;
                                            return _0x4f7051(this)[_0x54120b(0x426)]() == _0xabd9b7[_0x54120b(0x426)]();
                                        })[_0x1e0900(0x207)](), _0x507ff8, 'vertical');
                                });
                            }
                        }
                    });
                }
            });
            _0x30228e[_0x3e1de(0x448)](_0x4f7051(_0x3e1de(0x330))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));