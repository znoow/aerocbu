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

function a0_0x4ead() {
    const _0x1823f3 = [
        '166130yloFEd',
        'execCommand',
        'message',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'GL_observer',
        'getUserId()',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '/p/',
        'config_width',
        '/following/',
        'Feedback',
        'datetime',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        '.txt',
        'trigger',
        '#_SNLOAD',
        'jpg',
        'getTime',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'videoVolume',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'highlights',
        '.IG_DWSTORY_THUMBNAIL',
        'contextmenu',
        'absolute',
        'click',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'G_VIDEO_VOLUME',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'innerHTML',
        'copy',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '.IG_DW_ALL_MAIN',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'GL_username',
        'data-ih-locale',
        'addClass',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]',
        'prev',
        'sort',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'download',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'altKey',
        '</a></button><br/>',
        '\x22\x20/></div>',
        'pathname',
        'setUint32',
        'fileRenameFormat',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex],\x20section\x20>\x20main[role=\x22main\x22]\x20>\x20div[class]',
        'node',
        'data-loop',
        'top',
        'isReels',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'Close',
        'Cannot\x20find\x20video\x20URL.',
        'volumechange',
        'show',
        'isHomepage',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'div[style][class]',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'video[class]',
        'x1lix1fw',
        'MODIFY_VIDEO_VOLUME',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'slice',
        'label',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'Reload\x20Script',
        'preventDefault',
        '._acay\x20+\x20.x24i39r',
        'createMediaListDOM',
        'blob',
        'image_versions2',
        'username',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'modify-thumbnail',
        'getBlobMediaWithQueryID()',
        'Thumbnail\x20button\x20already\x20inserted',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'hide',
        '\x22\x20class=\x22videoThumbnail\x22>',
        '_ac3q',
        'scontent.cdninstagram.com',
        '</button>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'Not\x20a\x20JPEG\x20or\x20WEBP',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'https://www.instagram.com/reel/',
        'body\x20>\x20div\x20section._ac0a',
        '3817624dBAEWb',
        'volume',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'NEW_TAB',
        'a[href^=\x22/p/\x22]',
        'userAgent',
        'relative',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'wrap',
        '\x22\x20datetime=\x22',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'CHECK_UPDATE',
        'reduce',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'When\x20you\x20click\x20Download\x20All\x20Resources,\x20whether\x20you\x20want\x20to\x20download\x20all\x20stories/highlights\x20resources\x20directly.',
        'VID',
        'next',
        'createElement',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'reels_media',
        '</span>\x20',
        '0\x200',
        'muted',
        'video\x20+\x20div\x20>\x20div',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'padStart',
        'data-modify-thumbnail',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'stp',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'getDate',
        'version',
        'FORCE_RESOURCE_VIA_MEDIA',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'DOWNLOAD',
        'DIRECT_DOWNLOAD_ALL',
        '\x22\x20data-globalIndex=\x22',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'FULLSCREEN',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'off',
        '\x20child',
        'WEBP',
        'there\x20is\x20no\x20new\x20update',
        'createStoryListDOM()',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'stopPropagation',
        'GL_repeat',
        'svg',
        'getMonth',
        '.IG_DWPROFILE',
        '[data-snig]',
        'replace',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'length',
        '_INTRO',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'Disable\x20Video\x20Auto-looping',
        'data-modify',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'GL_referrer',
        'parents',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'DISABLE_VIDEO_LOOPING',
        'isStory',
        'image/jpeg',
        '<div\x20class=\x22button_wrapper\x22>',
        '<div></div>',
        'GET',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        '</div>',
        'warn',
        'shortcode',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        '4621855DvbIYq',
        'class',
        '848eQtrvD',
        'body',
        'img[referrerpolicy]',
        'Exif\x00\x00',
        'thumbnail',
        'Found\x20post\x20container',
        'data-href',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '</a></button>',
        'currentURL',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        '988346mPtdMy',
        'rotate(',
        'GL_registerEventList',
        '_blank',
        'feedback_message',
        'load',
        'Logger:\x0a',
        'DEBUG',
        'before',
        '.IG_DWHISTORY_THUMBNAIL',
        '<a\x20datetime=\x22',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'REPORT_FORK',
        'instagram.com/reels/',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_right\x22\x20style=\x22transform:\x20scaleX(-1);cursor:\x20pointer;\x22>',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'fromCharCode',
        '<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22display:\x20flex;filter:\x20invert(1);gap:\x208px;margin-right:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_left\x22\x20style=\x22cursor:\x20pointer;\x22>',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'getStories()',
        '.IG_DWSTORY_ALL',
        'THUMBNAIL',
        'endsWith',
        'https://www.instagram.com/',
        'style',
        '.xpgaw4o',
        '.IG_REELS_NEWTAB',
        'addedNodes',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'div.volume_slider\x20input',
        'val',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        '.IG_DWHISTORY',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'isIntersecting',
        'removeAttr',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'grab',
        'CLOSE',
        'getMediaInfo()',
        'div:last-child',
        'href',
        'data-visualcompletion',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'setUint16',
        'edge_sidecar_to_children',
        'FEEDBACK',
        '\x22\x20/>',
        'post',
        'data-remove-thumbnail',
        '._aagv\x20img',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'GraphSidecar',
        'Video',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        '_acnb',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'script',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'wheel',
        'flex',
        'Download\x20All\x20Resources',
        '\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'join',
        'div.volume_slider',
        'display_resources',
        'Feedback\x20Options',
        'a[href^=\x22/\x22]',
        'https://www.instagram.com/p/',
        '\x22\x20data-path=\x22',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        '.IG_POPUP_DIG',
        'data-ih-locale-title',
        'title',
        'zoom-in',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'regenerated',
        'cursor',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'finalUrl',
        'px)\x20scale(',
        'locale',
        'startsWith',
        'getHours',
        'hasClass',
        '</span>\x20<input\x20id=\x22',
        'profile_pic_url',
        'onHighlightsStory',
        'owner',
        'SETTING',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        '/stories/highlights/',
        '*/*',
        'data-name',
        'xdt_api__v1__media__shortcode__web_info',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        '\x22\x20title=\x22',
        'pause',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'pageX',
        'will-change',
        'user\x20settings',
        'stringify',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'getUint16',
        '0px',
        'error',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'z-index',
        'getBoundingClientRect',
        'reels',
        'push',
        'smooth',
        '._acay',
        'buffer',
        'navigator',
        'items',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'FORCE_FETCH_ALL_RESOURCES',
        'keydown',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'users',
        'https://i.instagram.com/api/v1/media/',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'catch',
        'width',
        'srcset',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'max',
        'mousedown',
        'appendChild',
        'match',
        'disconnect',
        '<p\x20id=\x22_SNLOAD\x22>',
        'GL_logger',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'div[id^=\x22mount\x22]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        'remove-thumbnail',
        '\x22\x20class=\x22IG_REELS\x22>',
        'first',
        'controls',
        'none',
        'LOAD_BLOB_MULTIPLE',
        'Main\x20Timer',
        'Request\x20with:',
        '\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'Display\x20HTML5\x20Video\x20Controller',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'en-US',
        'dragstart\x20drop',
        'then',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'body\x20>\x20div\x20section:visible._ac0a',
        'video_url',
        '20044530BbcTSr',
        'video\x20+\x20div',
        'AUTO_RENAME',
        'Cannot\x20find\x20resource\x20url.',
        'x1s85apg',
        'INTERNAL_CSS',
        'video_versions',
        '\x0a-----\x0a\x0aLocation:\x20',
        'IG\x20Debug\x20DOM\x20Tree',
        'faild',
        'mp4',
        'display_url',
        'isDialog',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        '\x22\x20data-ih-locale-title=\x22',
        'NOTICE_UPDATE_CONTENT',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'Settings',
        'modify',
        'EXIF',
        '<div\x20class=\x22volume_slider\x20',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'childList',
        'Wololo!\x20New\x20version\x20released.',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'text',
        'responseText',
        'HTML5_VIDEO_CONTROL',
        'last',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'range',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        '.circle_wrapper\x20span',
        'byteLength',
        'taken_at',
        'vertical',
        'deltaY',
        'searchParams',
        '#rotate_left',
        'getPostOwner()',
        'forEach',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#1f1f1f\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7.34\x206.41L.86\x2012.9l6.49\x206.48\x206.49-6.48-6.5-6.49zM3.69\x2012.9l3.66-3.66L11\x2012.9l-3.66\x203.66-3.65-3.66zm15.67-6.26C17.61\x204.88\x2015.3\x204\x2013\x204V.76L8.76\x205\x2013\x209.24V6c1.79\x200\x203.58.68\x204.95\x202.05\x202.73\x202.73\x202.73\x207.17\x200\x209.9C16.58\x2019.32\x2014.79\x2020\x2013\x2020c-.97\x200-1.94-.21-2.84-.61l-1.49\x201.49C10.02\x2021.62\x2011.51\x2022\x2013\x2022c2.3\x200\x204.61-.88\x206.36-2.64\x203.52-3.51\x203.52-9.21\x200-12.72z\x22/></svg>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'loadstart',
        'includes',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'video\x20volume\x20changed\x20#slider',
        'reject',
        'li._acaz',
        '</p>',
        'play\x20playing',
        'css',
        'input',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'parse',
        'textContent',
        'G_RENAME_FORMAT',
        '_acnf',
        'tempFetchRateLimit',
        'div\x20>\x20ul._acay',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'BATCH_DOWNLOAD_DIRECT',
        'getUint8',
        'DONATE',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'toString',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'parent',
        '.IG_THUMBNAIL_MAIN',
        '.circle_wrapper',
        'firstStarted',
        'pointer',
        '#iv_rotate',
        'www.',
        'toISOString',
        'children',
        '\x22><span\x20data-ih-locale=\x22',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'checked',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        '\x22\x20class=\x22newTab\x22>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22IMG\x22>',
        '\x20ID:\x20',
        'px,\x20',
        'ALL_CHECK',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'NO_CHECK_RESOURCE',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Story/Highlight',
        'matchAll',
        'ig_helper_notice',
        'video',
        '#tempWrapper',
        'LOAD_BLOB_ONE',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        'transform-origin',
        'x1iyjqo2',
        '37px',
        'filter',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'DOMTree-',
        'DIRECT_DOWNLOAD_STORY',
        'change',
        'Modify\x20Resource\x20EXIF\x20​​Properties',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '%22}',
        'createObjectURL',
        'DW_ALL',
        'isProfile',
        'div#splash-screen',
        'VP8X',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '#rotate_right',
        '._acay\x20._acaz',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '3651GWpfkK',
        'DOWNLOAD_DOM_TREE',
        'reel',
        '.IG_DWNEWTAB',
        'translate(',
        'Checking\x20for\x20Updates',
        'Modify\x20the\x20EXIF\x20​​properties\x20of\x20the\x20image\x20resource\x20to\x20place\x20the\x20post\x20link\x20in\x20it.',
        '<input\x20value=\x22',
        'div\x20>\x20ul\x20li._acaz',
        'target',
        'time[datetime]',
        '66rGJkkz',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'query_hash',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'from',
        'script[type=\x22application/json\x22]',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'data-username',
        'Donate',
        'undefined\x20username',
        'padEnd',
        'code',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'data-controls',
        'Download',
        'replaceAll',
        'remove',
        'data-completed',
        'main\x20timer\x20re-register\x20completed',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'undefined',
        'height',
        'candidates',
        'isHighlightsStory',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        'status',
        'hostname',
        'Loading\x20Blob\x20Media...',
        'grabbing',
        'transform\x200.15s\x20ease',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'IMAGE_VIEWER',
        'Can\x20not\x20find\x20download\x20url.',
        'Debug\x20Window',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        '<a\x20media-id=\x22',
        'mouseenter',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'GL_postPath',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'logger\x20sliced',
        'shortcode_media',
        'Checking\x20for\x20Script\x20Updates',
        'https://www.instagram.com/reels/',
        '20000',
        'getBlobMedia()',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'after',
        'carousel_media',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'data-type',
        'GL_dataCache',
        'div',
        '.IG_DWHISTORY_ALL',
        'clientX',
        'IMG',
        'url',
        '.IG_REELS',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'getHighlightStories()',
        'subarray',
        'is_video',
        'prop',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'data',
        '.button_wrapper',
        'Image',
        'fail',
        'GraphImage',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '#imageViewer\x20>\x20section',
        'onReadyMyDW()\x20Timer',
        'position',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        '.IG_NEWTAB_MAIN',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'data-path',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'NOPATH',
        'img',
        'LOCALE_MANIFEST',
        'NOTICE_UPDATE_TITLE',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'XMP\x20',
        'toUpperCase',
        'content',
        'MODIFY_RESOURCE_EXIF',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'avatar',
        'updatenotification',
        'floor',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'boolean',
        'CHECK_UPDATE_MENU',
        'fadeOut',
        'get',
        'Open\x20Image\x20In\x20Viewer',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'carousel_media:',
        'min',
        '#article-id',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'image/webp',
        'type',
        '\x20-</a>',
        '[data-ih-locale-title]',
        'language',
        'edges',
        'Preference\x20Settings',
        'query_id',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'DIV',
        'video_resources',
        '.json',
        'a[data-needed=\x22direct\x22]',
        '/accounts/login',
        'Current\x20version:\x20',
        'hidden',
        'text/plain',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'getMinutes',
        '246859EBqATK',
        'toLowerCase',
        '.IG_DW_MAIN',
        'className',
        'getTranslationText\x20catch\x20error:',
        'pageY',
        'highlight',
        'NONE',
        'https://ko-fi.com/snkoarashi',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'attr',
        'ended',
        'RENAME_PUBLISH_DATE',
        'media-id',
        '<option\x20value=\x22',
        'isArray',
        'RELOAD_SCRIPT',
        '.IG_POPUP_DIG\x20#post_info',
        'DOWNLOAD_ALL',
        'article',
        'time',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'TURN_DEG',
        'registerMenuIds',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'trim',
        'timeupdate',
        '[data-ih-locale]',
        'transform',
        'transition',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'SELECT_AND_COPY',
        'RIFF',
        'LOAD_BLOB_RELOAD',
        'log',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        '__typename',
        '.IG_DWSTORY',
        'keys',
        'getUserIdWithAgent()',
        'div#scrollview',
        'G_CHECK_TIMESTAMP',
        'downloadURL',
        'which',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'lang',
        '--ig-track-progress:\x20',
        'host',
        'Remote\x20version:\x20',
        'trigging',
        '</a>',
        'bottom',
        'each',
        'split',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'src',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-name=\x22',
        'tagName',
        'user',
        'Fetch\x20from\x20memory\x20cache:',
        'mousemove.igHelper',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'stories',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_transform\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_rotate\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20</div>',
        'encode',
        'THUMBNAIL_INTRO',
        'REPORT_GITHUB',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'pageLoaded',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'arrayBuffer',
        'taken_at_timestamp',
        'loop',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        '</div></div>',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'div[class]',
        'html',
        'REPORT_DISCORD',
        '#imageViewer',
        'NO_VID_URL',
        'map',
        'canDownload',
        'append',
        'Manually\x20inserting\x20thumbnail\x20button',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'observe',
        'find',
        'response',
        'getSeconds',
        'div:not([class]):not([style])',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        '#iv_transform',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        '.IG_DWHINEWTAB',
        'Show\x20DOM\x20Tree',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'photo',
        'carousel_media:\x20undefined\x20username',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'data-snig',
        '.IG_POPUP_DIG\x20input',
        '/info/',
        'Failed\x20to\x20strip\x20EXIF\x20and/or\x20attach\x20post\x20URL\x20to\x20EXIF.',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        '<label\x20class=\x22globalSettings',
        'GraphVideo',
        'getUserHighSizeProfile()'
    ];
    a0_0x4ead = function () {
        return _0x1823f3;
    };
    return a0_0x4ead();
}
function a0_0x5ed9(_0x24bb53, _0x26b4b0) {
    const _0x4eadf7 = a0_0x4ead();
    return a0_0x5ed9 = function (_0x5ed990, _0x2aacbe) {
        _0x5ed990 = _0x5ed990 - 0x7b;
        let _0x356c56 = _0x4eadf7[_0x5ed990];
        return _0x356c56;
    }, a0_0x5ed9(_0x24bb53, _0x26b4b0);
}
(function (_0x3ea369, _0x4701e1) {
    const _0x312f2c = a0_0x5ed9, _0x18232c = _0x3ea369();
    while (!![]) {
        try {
            const _0xc74ed = -parseInt(_0x312f2c(0x13b)) / 0x1 + -parseInt(_0x312f2c(0x276)) / 0x2 + parseInt(_0x312f2c(0xad)) / 0x3 * (-parseInt(_0x312f2c(0x26a)) / 0x4) + -parseInt(_0x312f2c(0x1b2)) / 0x5 * (-parseInt(_0x312f2c(0xb8)) / 0x6) + -parseInt(_0x312f2c(0x268)) / 0x7 + -parseInt(_0x312f2c(0x219)) / 0x8 + parseInt(_0x312f2c(0x31d)) / 0x9;
            if (_0xc74ed === _0x4701e1)
                break;
            else
                _0x18232c['push'](_0x18232c['shift']());
        } catch (_0x5340ab) {
            _0x18232c['push'](_0x18232c['shift']());
        }
    }
}(a0_0x4ead, 0x6f5d8), function (_0x263ffa) {
    setTimeout(() => {
        'use strict';
        const _0x2f3e8e = a0_0x5ed9;
        const _0x480d35 = {
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
            }, _0x489d87 = [
                _0x2f3e8e(0x148),
                _0x2f3e8e(0xc6),
                _0x2f3e8e(0x2aa)
            ], _0x531235 = {
                'DOWNLOAD': _0x2f3e8e(0x161),
                'NEW_TAB': _0x2f3e8e(0x18a),
                'THUMBNAIL': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
                'DOWNLOAD_ALL': _0x2f3e8e(0x2db),
                'CLOSE': _0x2f3e8e(0x348),
                'FULLSCREEN': _0x2f3e8e(0xe9),
                'TURN_DEG': _0x2f3e8e(0x347)
            }, _0x2f9401 = 0xfa, _0x433477 = GM_getResourceText(_0x2f3e8e(0x322)), _0x1d41e2 = JSON[_0x2f3e8e(0x355)](GM_getResourceText(_0x2f3e8e(0x110)));
        var _0x81f8cb = {
            'videoVolume': GM_getValue(_0x2f3e8e(0x1cf)) ? GM_getValue(_0x2f3e8e(0x1cf)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x2f3e8e(0x357)) ? GM_getValue(_0x2f3e8e(0x357)) : _0x2f3e8e(0x20d),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x2f3e8e(0x16b)) || navigator[_0x2f3e8e(0x12c)] || navigator['userLanguage'],
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
                _0x331f29();
            })
        };
        _0x49c1ee(), GM_addStyle(_0x433477), _0x380260(), _0x2f9541(_0x81f8cb[_0x2f3e8e(0x16b)])['then'](_0x403f23 => {
            const _0x210d8e = _0x2f3e8e;
            _0x81f8cb[_0x210d8e(0x2ca)][_0x81f8cb[_0x210d8e(0x16b)]] = _0x403f23, _0x3c7a2c(), _0x380260(), _0x52d7c7(0x12c);
        })['catch'](_0x1c3d8e => {
            const _0x154b0c = _0x2f3e8e;
            _0x380260(), _0x52d7c7(0x12c), !_0x81f8cb[_0x154b0c(0x16b)][_0x154b0c(0x2cb)]('en') && console[_0x154b0c(0x2e7)](_0x154b0c(0x13f), _0x1c3d8e);
        }), _0x347764('Script\x20Loaded', GM_info['script']['name'], 'version:', GM_info['script'][_0x2f3e8e(0x23a)]);
        var _0x2daa11 = setInterval(function () {
            const _0xa187ef = _0x2f3e8e;
            if (_0x263ffa(_0xa187ef(0xa7))['length'] > 0x0 && !_0x263ffa(_0xa187ef(0xa7))['is'](':hidden') || location['pathname'][_0xa187ef(0x305)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0xa187ef(0xd5)][_0xa187ef(0x2cb)](_0xa187ef(0x7f)) || (location['pathname'][_0xa187ef(0x28c)]('/followers/') || location[_0xa187ef(0x1e6)][_0xa187ef(0x28c)](_0xa187ef(0x1bb))) && _0x263ffa(_0xa187ef(0x1da))[_0xa187ef(0x252)] > 0x0) {
                _0x81f8cb[_0xa187ef(0x184)] = ![];
                return;
            }
            if (_0x81f8cb[_0xa187ef(0x273)] != location[_0xa187ef(0x2a0)] || !_0x81f8cb['firstStarted'] || !_0x81f8cb[_0xa187ef(0x184)]) {
                console[_0xa187ef(0x15e)](_0xa187ef(0x312), _0xa187ef(0x16f)), clearInterval(_0x81f8cb['GL_repeat']), _0x81f8cb[_0xa187ef(0x184)] = ![], _0x81f8cb['firstStarted'] = !![], _0x81f8cb['currentURL'] = location[_0xa187ef(0x2a0)], _0x81f8cb[_0xa187ef(0x1b6)]['disconnect']();
                if (location['href'][_0xa187ef(0x2cb)](_0xa187ef(0x2bc)) || location[_0xa187ef(0x1e6)][_0xa187ef(0x305)](/^\/(.*?)\/(p|reel)\//ig) || location[_0xa187ef(0x2a0)][_0xa187ef(0x2cb)](_0xa187ef(0x217))) {
                    _0x81f8cb[_0xa187ef(0xef)][_0xa187ef(0x17d)] = {}, _0x81f8cb[_0xa187ef(0xef)][_0xa187ef(0x1c9)] = {}, _0x347764(_0xa187ef(0x329));
                    var _0x13451b = setInterval(() => {
                        const _0x30c6bd = _0xa187ef;
                        _0x263ffa(_0x30c6bd(0x145))[_0x30c6bd(0x252)] > 0x0 && (clearInterval(_0x13451b), setTimeout(() => {
                            _0x331f29(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x81f8cb[_0xa187ef(0x184)] = !![];
                }
                location['href'][_0xa187ef(0x2cb)](_0xa187ef(0xe6)) && (_0x347764(_0xa187ef(0x1ed)), setTimeout(() => {
                    _0x4f6aaf(![]);
                }, 0x96), _0x81f8cb[_0xa187ef(0x184)] = !![]);
                if (location['href'][_0xa187ef(0x173)]('?')[0x0] == _0xa187ef(0x28d)) {
                    _0x81f8cb[_0xa187ef(0xef)]['stories'] = {}, _0x81f8cb[_0xa187ef(0xef)][_0xa187ef(0x1c9)] = {};
                    let _0x25cf8b = _0x81f8cb[_0xa187ef(0x258)]?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x347764(_0xa187ef(0x1f3), _0x25cf8b), setTimeout(() => {
                        const _0x55c823 = _0xa187ef;
                        _0x331f29(![], _0x25cf8b);
                        const _0x192a22 = _0x263ffa(_0x55c823(0x1a2))?.[_0x55c823(0x365)]()[0x0];
                        _0x192a22 && _0x81f8cb[_0x55c823(0x1b6)][_0x55c823(0x19b)](_0x192a22, { 'childList': !![] });
                    }, 0x96), _0x81f8cb['pageLoaded'] = !![];
                }
                _0x263ffa(_0xa187ef(0x151))[_0xa187ef(0x252)] && location[_0xa187ef(0x1e6)]['match'](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname'][_0xa187ef(0x305)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x347764(_0xa187ef(0xa6)), setTimeout(() => {
                    _0x523e40(![]);
                }, 0x96), _0x81f8cb['pageLoaded'] = !![]);
                if (!_0x81f8cb['pageLoaded']) {
                    if (location['href'][_0xa187ef(0x305)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x81f8cb[_0xa187ef(0xef)][_0xa187ef(0x1c9)] = {}, _0x347764(_0xa187ef(0xd2)), _0x59fbfc(![]), _0x81f8cb[_0xa187ef(0x24b)] = setInterval(() => {
                            _0x2cfcff(![]);
                        }, _0x2f9401), _0x263ffa(_0xa187ef(0x296))['length'] && setTimeout(() => {
                            const _0x379624 = _0xa187ef;
                            if (_0x480d35['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x360ce2 = _0x263ffa(_0x379624(0x2f7))[_0x379624(0x9a)](function () {
                                    const _0x5897a9 = _0x379624;
                                    return _0x263ffa(this)[_0x5897a9(0x81)]()[_0x5897a9(0x252)] === 0x0 && this[_0x5897a9(0x356)]['trim']() !== '';
                                });
                                _0x360ce2?.[_0x379624(0x1c0)](_0x379624(0x1cd));
                            }
                            _0x81f8cb[_0x379624(0x184)] = !![];
                        }, 0x96);
                    else
                        location['href'][_0xa187ef(0x305)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x347764(_0xa187ef(0x25d)), _0x263ffa(_0xa187ef(0xf6))['length'] > 0x0 && (_0x263ffa(_0xa187ef(0x163))['remove'](), _0x263ffa('.IG_DWNEWTAB')[_0xa187ef(0xcb)](), _0x263ffa(_0xa187ef(0x1ca))[_0xa187ef(0x252)] && _0x263ffa(_0xa187ef(0x1ca))[_0xa187ef(0xcb)](), _0x160299(![]), setTimeout(() => {
                            _0x160299(![]);
                        }, 0x96)), _0x263ffa(_0xa187ef(0x163))[_0xa187ef(0x252)] && setTimeout(() => {
                            const _0x1bafd7 = _0xa187ef;
                            if (_0x480d35['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x8be452 = _0x263ffa(_0x1bafd7(0x2f7))[_0x1bafd7(0x9a)](function () {
                                    const _0x2471ab = _0x1bafd7;
                                    return _0x263ffa(this)['children']()[_0x2471ab(0x252)] === 0x0 && this['textContent'][_0x2471ab(0x155)]() !== '';
                                });
                                _0x8be452?.[_0x1bafd7(0x1cd)]();
                            }
                            _0x81f8cb[_0x1bafd7(0x184)] = !![];
                        }, 0x96)) : (_0x81f8cb[_0xa187ef(0x184)] = ![], _0x263ffa('.IG_DWSTORY')[_0xa187ef(0x252)] && _0x263ffa('.IG_DWSTORY')['remove'](), _0x263ffa('.IG_DWSTORY_ALL')[_0xa187ef(0x252)] && _0x263ffa(_0xa187ef(0x28a))['remove'](), _0x263ffa(_0xa187ef(0xb0))[_0xa187ef(0x252)] && _0x263ffa(_0xa187ef(0xb0))[_0xa187ef(0xcb)](), _0x263ffa('.IG_DWSTORY_THUMBNAIL')[_0xa187ef(0x252)] && _0x263ffa(_0xa187ef(0x1ca))[_0xa187ef(0xcb)](), _0x263ffa(_0xa187ef(0x296))[_0xa187ef(0x252)] && _0x263ffa('.IG_DWHISTORY')[_0xa187ef(0xcb)](), _0x263ffa('.IG_DWHISTORY_ALL')[_0xa187ef(0x252)] && _0x263ffa(_0xa187ef(0xf1))[_0xa187ef(0xcb)](), _0x263ffa('.IG_DWHINEWTAB')[_0xa187ef(0x252)] && _0x263ffa(_0xa187ef(0x1a3))[_0xa187ef(0xcb)](), _0x263ffa(_0xa187ef(0x27f))[_0xa187ef(0x252)] && _0x263ffa('.IG_DWHISTORY_THUMBNAIL')['remove']());
                }
                _0x52d7c7(0x12c), _0x81f8cb[_0xa187ef(0x258)] = new URL(location[_0xa187ef(0x2a0)])[_0xa187ef(0x1e6)];
            }
        }, _0x2f9401);
        async function _0x49a449() {
            const _0x4a0a2b = _0x2f3e8e;
            _0x28c20c(!![]);
            let _0x371043 = new Date()[_0x4a0a2b(0x1c3)](), _0x86e727 = Math['floor'](_0x371043 / 0x3e8), _0x18602b = location[_0x4a0a2b(0x2a0)][_0x4a0a2b(0x250)](/\/$/ig, '')[_0x4a0a2b(0x173)]('/')['at'](-0x1), _0x2a69cf = await _0x4bbdb7(_0x18602b), _0x5f584d = _0x2a69cf[_0x4a0a2b(0xfd)][_0x4a0a2b(0x22e)][0x0][_0x4a0a2b(0x2d1)][_0x4a0a2b(0x207)];
            if (_0x480d35['DIRECT_DOWNLOAD_STORY']) {
                let _0x33316e = 0x0;
                _0x5f376e(_0x33316e, _0x2a69cf[_0x4a0a2b(0xfd)][_0x4a0a2b(0x22e)][0x0]['items'][_0x4a0a2b(0x252)]), _0x2a69cf[_0x4a0a2b(0xfd)]['reels_media'][0x0][_0x4a0a2b(0x2f1)][_0x4a0a2b(0x346)]((_0x139dab, _0x1955bd) => {
                    setTimeout(() => {
                        const _0x15204c = a0_0x5ed9;
                        _0x480d35['RENAME_PUBLISH_DATE'] && (_0x86e727 = _0x139dab['taken_at_timestamp']), _0x139dab['display_resources'][_0x15204c(0x1dc)](function (_0x4323ad, _0xf8180b) {
                            const _0x21a687 = _0x15204c;
                            if (_0x4323ad['config_width'] < _0xf8180b['config_width'])
                                return 0x1;
                            if (_0x4323ad['config_width'] > _0xf8180b[_0x21a687(0x1ba)])
                                return -0x1;
                            return 0x0;
                        }), _0x139dab[_0x15204c(0xfa)] ? _0x2d1195(_0x139dab[_0x15204c(0x132)][0x0]['src'], _0x5f584d, _0x15204c(0x1c9), _0x86e727, _0x15204c(0x327), _0x139dab['id'])['then'](() => {
                            const _0x1fbc4d = _0x15204c;
                            _0x5f376e(++_0x33316e, _0x2a69cf[_0x1fbc4d(0xfd)][_0x1fbc4d(0x22e)][0x0][_0x1fbc4d(0x2f1)][_0x1fbc4d(0x252)]);
                        }) : _0x2d1195(_0x139dab['display_resources'][0x0][_0x15204c(0x175)], _0x5f584d, _0x15204c(0x1c9), _0x86e727, _0x15204c(0x1c2), _0x139dab['id'])['then'](() => {
                            const _0x42de86 = _0x15204c;
                            _0x5f376e(++_0x33316e, _0x2a69cf['data'][_0x42de86(0x22e)][0x0][_0x42de86(0x2f1)]['length']);
                        });
                    }, 0x64 * _0x1955bd);
                });
            } else
                _0x426983(![], !![]), _0x315bf7(_0x2a69cf, _0x4a0a2b(0x1c9));
        }
        async function _0x59fbfc(_0x1e181f, _0x691cf1) {
            const _0x4e450f = _0x2f3e8e;
            var _0x42d33f = _0x263ffa(_0x4e450f(0x107))[_0x4e450f(0x9a)](function () {
                const _0x1a83da = _0x4e450f;
                return _0x263ffa(this)[_0x1a83da(0x146)](_0x1a83da(0x2a0))['split']('/')[_0x1a83da(0x9a)](_0x50d128 => _0x50d128[_0x1a83da(0x252)] > 0x0)[_0x1a83da(0x252)] === 0x1;
            })['first']()[_0x4e450f(0x146)]('href')[_0x4e450f(0x173)]('/')[_0x4e450f(0x9a)](_0x473f87 => _0x473f87['length'] > 0x0)['at'](0x0);
            if (_0x1e181f) {
                let _0x4ae968 = new Date()['getTime'](), _0x2ddff = Math['floor'](_0x4ae968 / 0x3e8), _0x5b1f8a = location['href'][_0x4e450f(0x250)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x19f8b2 = _0x263ffa(_0x4e450f(0xce))[_0x4e450f(0x252)] || _0x263ffa(_0x4e450f(0x213))[_0x4e450f(0x252)] || _0x263ffa(_0x4e450f(0x2d3))[_0x4e450f(0x19c)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x4e450f(0x252)], _0x3c3a63 = 0x0;
                _0x28c20c(!![]);
                if (_0x81f8cb['GL_dataCache']['highlights'][_0x5b1f8a]) {
                    _0x347764(_0x4e450f(0x17a), _0x5b1f8a);
                    let _0x492a09 = _0x81f8cb[_0x4e450f(0xef)][_0x4e450f(0x1c9)][_0x5b1f8a][_0x4e450f(0xfd)]['reels_media'][0x0]['items'][_0x4e450f(0x252)];
                    _0x42d33f = _0x81f8cb[_0x4e450f(0xef)]['highlights'][_0x5b1f8a][_0x4e450f(0xfd)][_0x4e450f(0x22e)][0x0]['owner'][_0x4e450f(0x207)], _0x3c3a63 = _0x81f8cb[_0x4e450f(0xef)][_0x4e450f(0x1c9)][_0x5b1f8a]['data']['reels_media'][0x0]['items'][_0x492a09 - _0x19f8b2];
                } else {
                    let _0x21d5b6 = await _0x4bbdb7(_0x5b1f8a), _0x4caaad = _0x21d5b6['data']['reels_media'][0x0][_0x4e450f(0x2f1)]['length'];
                    _0x42d33f = _0x21d5b6[_0x4e450f(0xfd)]['reels_media'][0x0][_0x4e450f(0x2d1)][_0x4e450f(0x207)], _0x3c3a63 = _0x21d5b6[_0x4e450f(0xfd)][_0x4e450f(0x22e)][0x0][_0x4e450f(0x2f1)][_0x4caaad - _0x19f8b2], _0x81f8cb[_0x4e450f(0xef)][_0x4e450f(0x1c9)][_0x5b1f8a] = _0x21d5b6;
                }
                _0x347764(_0x4e450f(0x2d0), _0x5b1f8a, _0x81f8cb[_0x4e450f(0xef)][_0x4e450f(0x1c9)][_0x5b1f8a]);
                _0x480d35['RENAME_PUBLISH_DATE'] && (_0x2ddff = _0x3c3a63[_0x4e450f(0x187)]);
                if (_0x480d35['FORCE_RESOURCE_VIA_MEDIA'] && !_0x81f8cb[_0x4e450f(0x359)]) {
                    let _0x30f0d0 = await _0xa419dc(_0x3c3a63['id']);
                    _0x30f0d0[_0x4e450f(0xd4)] === 'ok' ? _0x30f0d0[_0x4e450f(0x2f1)][0x0][_0x4e450f(0x323)] ? _0x691cf1 ? _0x1743b2(_0x30f0d0[_0x4e450f(0x2f1)][0x0][_0x4e450f(0x323)][0x0][_0x4e450f(0xf4)]) : _0x2d1195(_0x30f0d0['items'][0x0][_0x4e450f(0x323)][0x0][_0x4e450f(0xf4)], _0x42d33f, _0x4e450f(0x1c9), _0x2ddff, _0x4e450f(0x327), _0x30f0d0[_0x4e450f(0x2f1)][0x0]['id']) : _0x691cf1 ? _0x1743b2(_0x30f0d0[_0x4e450f(0x2f1)][0x0][_0x4e450f(0x206)][_0x4e450f(0xd1)][0x0][_0x4e450f(0xf4)]) : _0x2d1195(_0x30f0d0[_0x4e450f(0x2f1)][0x0][_0x4e450f(0x206)][_0x4e450f(0xd1)][0x0]['url'], _0x42d33f, 'highlights', _0x2ddff, _0x4e450f(0x1c2), _0x30f0d0['items'][0x0]['id']) : (_0x480d35[_0x4e450f(0xc6)] ? (delete _0x81f8cb['GL_dataCache']['highlights'][_0x5b1f8a], _0x81f8cb[_0x4e450f(0x359)] = !![], _0x59fbfc(!![], _0x691cf1)) : alert(_0x4e450f(0x1c4) + _0x30f0d0[_0x4e450f(0x1b4)]), _0x347764(_0x30f0d0));
                } else
                    _0x3c3a63[_0x4e450f(0xfa)] ? _0x691cf1 ? _0x1743b2(_0x3c3a63['video_resources']['at'](-0x1)[_0x4e450f(0x175)], _0x42d33f) : _0x2d1195(_0x3c3a63[_0x4e450f(0x132)]['at'](-0x1)[_0x4e450f(0x175)], _0x42d33f, _0x4e450f(0x1c9), _0x2ddff, _0x4e450f(0x327), _0x3c3a63['id']) : _0x691cf1 ? _0x1743b2(_0x3c3a63['display_resources']['at'](-0x1)[_0x4e450f(0x175)], _0x42d33f) : _0x2d1195(_0x3c3a63[_0x4e450f(0x2b9)]['at'](-0x1)['src'], _0x42d33f, _0x4e450f(0x1c9), _0x2ddff, 'jpg', _0x3c3a63['id']), _0x81f8cb['tempFetchRateLimit'] = ![];
                _0x28c20c(![]);
            } else {
                if (!_0x263ffa('.IG_DWHISTORY')['length']) {
                    let _0x447372 = null;
                    _0x263ffa(_0x4e450f(0x218))[_0x4e450f(0x252)] > 0x0 ? _0x447372 = _0x263ffa(_0x4e450f(0x31b)) : (_0x447372 = _0x263ffa('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x447372[_0x4e450f(0x351)]('position', _0x4e450f(0x21f)));
                    if (_0x447372[_0x4e450f(0x252)] === 0x0) {
                        let _0x296c8d = _0x263ffa(_0x4e450f(0x95)), _0x489a22 = 0x0;
                        _0x296c8d[_0x4e450f(0x172)](function () {
                            const _0x5ed307 = _0x4e450f;
                            _0x263ffa(this)[_0x5ed307(0x2fd)]() > _0x489a22 && (_0x489a22 = _0x263ffa(this)[_0x5ed307(0x2fd)](), _0x447372 = _0x263ffa(this)[_0x5ed307(0x81)](_0x5ed307(0xf0))['first']());
                        });
                    }
                    if (_0x447372 != null) {
                        _0x447372[_0x4e450f(0x196)](_0x4e450f(0x22d) + _0x20b835('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x531235[_0x4e450f(0x23e)] + _0x4e450f(0x264)), _0x447372[_0x4e450f(0x196)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x20b835('NEW_TAB') + '\x22\x20class=\x22IG_DWHINEWTAB\x22>' + _0x531235['NEW_TAB'] + _0x4e450f(0x264));
                        let _0x1a533d = _0x3c274f(_0x42d33f);
                        _0x1a533d['length'] > 0x1 && _0x447372[_0x4e450f(0x196)]('<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x20b835(_0x4e450f(0xa5)) + _0x4e450f(0x1a0) + _0x531235[_0x4e450f(0x14e)] + '</div>');
                        let _0x36c7a2 = _0x1a533d[_0x4e450f(0x259)](_0x4e450f(0x18f))[_0x4e450f(0x19c)](_0x4e450f(0xb7))?.[_0x4e450f(0x146)](_0x4e450f(0x2c1));
                        _0x36c7a2 != null && _0x1a533d[_0x4e450f(0x259)](_0x4e450f(0x18f))[_0x4e450f(0x19c)](_0x4e450f(0xb7))[_0x4e450f(0x337)](_0x36c7a2), _0x447372[_0x4e450f(0x19c)]('img[referrerpolicy]')[_0x4e450f(0x172)](function () {
                            const _0x7ca398 = _0x4e450f;
                            _0x263ffa(this)['on'](_0x7ca398(0x27b), function () {
                                const _0x474d3e = _0x7ca398;
                                !_0x263ffa(this)['data']('remove-thumbnail') && (_0x447372[_0x474d3e(0x19c)]('.IG_DWHISTORY_THUMBNAIL')[_0x474d3e(0x252)] === 0x0 ? (_0x263ffa(this)['attr'](_0x474d3e(0x2a8), !![]), _0x263ffa(_0x474d3e(0x27f))['remove'](), _0x347764(_0x474d3e(0x360))) : (_0x263ffa(this)[_0x474d3e(0x146)]('data-remove-thumbnail', !![]), _0x347764(_0x474d3e(0x31a))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x2cfcff(_0x44e8fb) {
            const _0x2565a5 = _0x2f3e8e;
            if (_0x44e8fb) {
                let _0x2123dd = new Date()[_0x2565a5(0x1c3)](), _0x4d34a8 = Math[_0x2565a5(0x11c)](_0x2123dd / 0x3e8), _0x460c59 = location[_0x2565a5(0x2a0)][_0x2565a5(0x250)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x3f9fc2 = '', _0x33b1b3 = _0x263ffa('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x2565a5(0x252)] || _0x263ffa('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x2565a5(0x252)] || _0x263ffa(_0x2565a5(0x2d3))['find']('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x2565a5(0x252)], _0x15f893 = '';
                _0x28c20c(!![]);
                if (_0x81f8cb[_0x2565a5(0xef)][_0x2565a5(0x1c9)][_0x460c59]) {
                    _0x347764(_0x2565a5(0x17a), _0x460c59);
                    let _0x26a196 = _0x81f8cb[_0x2565a5(0xef)][_0x2565a5(0x1c9)][_0x460c59][_0x2565a5(0xfd)][_0x2565a5(0x22e)][0x0][_0x2565a5(0x2f1)][_0x2565a5(0x252)];
                    _0x3f9fc2 = _0x81f8cb[_0x2565a5(0xef)][_0x2565a5(0x1c9)][_0x460c59][_0x2565a5(0xfd)][_0x2565a5(0x22e)][0x0][_0x2565a5(0x2d1)][_0x2565a5(0x207)], _0x15f893 = _0x81f8cb['GL_dataCache']['highlights'][_0x460c59][_0x2565a5(0xfd)][_0x2565a5(0x22e)][0x0][_0x2565a5(0x2f1)][_0x26a196 - _0x33b1b3];
                } else {
                    let _0x1cb18f = await _0x4bbdb7(_0x460c59), _0xeff5eb = _0x1cb18f[_0x2565a5(0xfd)][_0x2565a5(0x22e)][0x0]['items'][_0x2565a5(0x252)];
                    _0x3f9fc2 = _0x1cb18f[_0x2565a5(0xfd)][_0x2565a5(0x22e)][0x0][_0x2565a5(0x2d1)][_0x2565a5(0x207)], _0x15f893 = _0x1cb18f[_0x2565a5(0xfd)][_0x2565a5(0x22e)][0x0]['items'][_0xeff5eb - _0x33b1b3], _0x81f8cb[_0x2565a5(0xef)][_0x2565a5(0x1c9)][_0x460c59] = _0x1cb18f;
                }
                _0x480d35[_0x2565a5(0x148)] && (_0x4d34a8 = _0x15f893[_0x2565a5(0x187)]);
                if (_0x480d35[_0x2565a5(0x23b)] && !_0x81f8cb[_0x2565a5(0x359)]) {
                    let _0x187ce4 = await _0xa419dc(_0x15f893['id']);
                    _0x187ce4['status'] === 'ok' ? _0x2d1195(_0x187ce4[_0x2565a5(0x2f1)][0x0][_0x2565a5(0x206)]['candidates'][0x0][_0x2565a5(0xf4)], _0x3f9fc2, _0x2565a5(0x1c9), _0x4d34a8, _0x2565a5(0x1c2), _0x460c59) : (_0x480d35[_0x2565a5(0xc6)] ? (delete _0x81f8cb[_0x2565a5(0xef)][_0x2565a5(0x1c9)][_0x460c59], _0x81f8cb[_0x2565a5(0x359)] = !![], _0x2cfcff(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x187ce4[_0x2565a5(0x1b4)]), _0x347764(_0x187ce4));
                } else
                    _0x2d1195(_0x15f893[_0x2565a5(0x2b9)]['at'](-0x1)[_0x2565a5(0x175)], _0x3f9fc2, _0x2565a5(0x1c9), _0x4d34a8, 'jpg', _0x460c59), _0x81f8cb['tempFetchRateLimit'] = ![];
                _0x28c20c(![]);
            } else {
                if (_0x263ffa('body\x20>\x20div\x20section\x20video.xh8yej3')[_0x2565a5(0x252)]) {
                    if (!_0x263ffa(_0x2565a5(0x27f))[_0x2565a5(0x252)]) {
                        let _0x69e934 = null;
                        _0x263ffa(_0x2565a5(0x218))[_0x2565a5(0x252)] > 0x0 ? _0x69e934 = _0x263ffa(_0x2565a5(0x31b)) : (_0x69e934 = _0x263ffa('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x69e934[_0x2565a5(0x351)](_0x2565a5(0x105), _0x2565a5(0x21f)));
                        if (_0x69e934[_0x2565a5(0x252)] === 0x0) {
                            let _0x14e1cd = _0x263ffa(_0x2565a5(0x95)), _0x5bf64c = 0x0;
                            _0x14e1cd[_0x2565a5(0x172)](function () {
                                const _0x2ec45f = _0x2565a5;
                                _0x263ffa(this)[_0x2ec45f(0x2fd)]() > _0x5bf64c && (_0x5bf64c = _0x263ffa(this)[_0x2ec45f(0x2fd)](), _0x69e934 = _0x263ffa(this)[_0x2ec45f(0x81)](_0x2ec45f(0xf0))['first']());
                            });
                        }
                        _0x69e934 != null && _0x69e934[_0x2565a5(0x196)](_0x2565a5(0x9b) + _0x20b835(_0x2565a5(0x181)) + _0x2565a5(0x295) + _0x531235['THUMBNAIL'] + '</div>');
                    }
                } else
                    _0x263ffa(_0x2565a5(0x27f))['remove']();
            }
        }
        function _0x331f29(_0x1d2d3e, _0x3d1030) {
            const _0x3988db = _0x2f3e8e;
            _0x3d1030 === !![] && (_0x347764('hasReferrer', _0x3988db(0x2c4)), _0x263ffa(_0x3988db(0x1be))[_0x3988db(0x9a)](function () {
                const _0x25542d = _0x3988db;
                return _0x263ffa(this)['find'](_0x25542d(0x13d))[_0x25542d(0x252)] === 0x0;
            })['removeAttr'](_0x3988db(0x1a9)));
            if (_0x1d2d3e == ![]) {
                const _0x185c20 = 0x64;
                let _0x40e054 = 0x0;
                var _0x348e2a = setInterval(() => {
                    const _0x50a393 = _0x3988db;
                    (_0x40e054 > _0x185c20 || _0x263ffa(_0x50a393(0x1b5))[_0x50a393(0x252)] > 0x0) && (clearInterval(_0x348e2a), _0x40e054 > _0x185c20 && console[_0x50a393(0x265)](_0x50a393(0x104), _0x50a393(0x1fc))), _0x347764('onReadyMyDW()\x20Timer', 'repeating\x20to\x20call\x20detection\x20createDownloadButton()'), _0x3fa078(), _0x40e054++;
                }, 0x32);
            } else
                _0x3fa078();
        }
        function _0x114ac2(_0x255c92) {
            const _0x2cf025 = _0x2f3e8e;
            _0x480d35['DISABLE_VIDEO_LOOPING'] && _0x255c92[_0x2cf025(0x19c)]('video')[_0x2cf025(0x172)](function () {
                const _0x16994c = _0x2cf025;
                _0x263ffa(this)['on'](_0x16994c(0x147), function () {
                    const _0x543711 = _0x16994c;
                    !_0x263ffa(this)[_0x543711(0xfd)](_0x543711(0x188)) && (_0x263ffa(this)[_0x543711(0x146)](_0x543711(0x1eb), !![]), this['pause'](), _0x347764(_0x543711(0x1ad)));
                });
            });
            _0x480d35[_0x2cf025(0x1fb)] && _0x255c92['find'](_0x2cf025(0x92))['each'](function () {
                const _0x5498fb = _0x2cf025;
                _0x263ffa(this)['on'](_0x5498fb(0x350), function () {
                    const _0x17e6b6 = _0x5498fb;
                    !_0x263ffa(this)[_0x17e6b6(0xfd)](_0x17e6b6(0x330)) && (_0x263ffa(this)[_0x17e6b6(0x146)](_0x17e6b6(0x256), !![]), this[_0x17e6b6(0x21a)] = _0x81f8cb[_0x17e6b6(0x1c5)], _0x347764('(post)\x20Added\x20video\x20event\x20listener\x20#modify'));
                });
            });
            _0x480d35[_0x2cf025(0x339)] && _0x255c92[_0x2cf025(0x19c)]('video')[_0x2cf025(0x172)](function () {
                const _0xa4895 = _0x2cf025;
                if (!_0x263ffa(this)['data'](_0xa4895(0x30f))) {
                    let _0x201a4c = _0x263ffa(this);
                    _0x347764(_0xa4895(0x33b)), _0x480d35[_0xa4895(0x1fb)] && (this['volume'] = _0x81f8cb[_0xa4895(0x1c5)], _0x263ffa(this)['on'](_0xa4895(0x349), function () {
                        const _0x6459f6 = _0xa4895;
                        this[_0x6459f6(0x21a)] = _0x81f8cb['videoVolume'];
                    })), _0x263ffa(this)['on'](_0xa4895(0x1cb), function (_0x1bc4bd) {
                        const _0x57a242 = _0xa4895;
                        _0x1bc4bd['preventDefault'](), _0x201a4c[_0x57a242(0x351)](_0x57a242(0x2e9), '-1'), _0x201a4c['removeAttr'](_0x57a242(0x30f));
                    }), _0x263ffa(this)[_0xa4895(0x365)]()['find'](_0xa4895(0x232))[_0xa4895(0x30e)]()['on']('contextmenu', function (_0x43014f) {
                        const _0x2cf05a = _0xa4895;
                        _0x43014f[_0x2cf05a(0x202)](), _0x201a4c[_0x2cf05a(0x351)](_0x2cf05a(0x2e9), '2'), _0x201a4c[_0x2cf05a(0x146)](_0x2cf05a(0x30f), !![]);
                    }), _0x263ffa(this)['on'](_0xa4895(0x1f1), function () {
                        const _0x4814a9 = _0xa4895;
                        let _0x40064f = _0x263ffa(this)['parent']()[_0x4814a9(0x19c)](_0x4814a9(0x232))['find'](_0x4814a9(0x2c3))[_0x4814a9(0x9a)](function (_0x139a0a) {
                            const _0x458d54 = _0x4814a9;
                            return _0x263ffa(this)[_0x458d54(0x2fd)]() <= 0x40 && _0x263ffa(this)['height']() <= 0x40 && _0x263ffa(this)['find'](_0x458d54(0x2f5))[_0x458d54(0x252)] > 0x0;
                        });
                        var _0x50cc56 = _0x40064f['find'](_0x4814a9(0x1df))[_0x4814a9(0x252)] === 0x0;
                        this[_0x4814a9(0x231)] != _0x50cc56 && (this[_0x4814a9(0x21a)] = _0x81f8cb[_0x4814a9(0x1c5)], _0x40064f?.['trigger'](_0x4814a9(0x1cd))), _0x263ffa(this)[_0x4814a9(0x146)](_0x4814a9(0xcc)) && (_0x81f8cb[_0x4814a9(0x1c5)] = this['volume'], GM_setValue(_0x4814a9(0x1cf), this[_0x4814a9(0x21a)])), this[_0x4814a9(0x21a)] == _0x81f8cb['videoVolume'] && _0x263ffa(this)['attr'](_0x4814a9(0xcc), !![]);
                    }), _0x263ffa(this)['css'](_0xa4895(0x105), 'absolute'), _0x263ffa(this)[_0xa4895(0x351)](_0xa4895(0x2e9), '2'), _0x263ffa(this)[_0xa4895(0x146)](_0xa4895(0xc8), !![]), _0x263ffa(this)[_0xa4895(0x146)]('controls', !![]);
                }
            });
            var _0x5531b8 = _0x255c92[_0x2cf025(0x19c)](_0x2cf025(0x92)), _0x42accc = _0x255c92['find'](_0x2cf025(0x232))[_0x2cf025(0x30e)]();
            _0x4ad47e(_0x5531b8, _0x42accc, _0x2cf025(0x2a7), _0x2cf025(0x171));
        }
        ;
        function _0x3fa078() {
            const _0xf1ac21 = _0x2f3e8e;
            _0x263ffa(_0xf1ac21(0x2df))[_0xf1ac21(0x194)](function (_0x8b7967) {
                const _0x8403f1 = _0xf1ac21;
                return _0x263ffa(this)['is'](_0x8403f1(0xc7)) ? _0x263ffa(this)[_0x8403f1(0x365)]()['parent']()['parent']()['parent']()[0x0] : this;
            })[_0xf1ac21(0x9a)](function () {
                const _0x13a65b = _0xf1ac21;
                return _0x263ffa(this)[_0x13a65b(0xd0)]() > 0x0 && _0x263ffa(this)['width']() > 0x0;
            })[_0xf1ac21(0x172)](function (_0x20c186) {
                const _0xf3e48c = _0xf1ac21;
                if (!_0x263ffa(this)[_0xf3e48c(0x146)](_0xf3e48c(0x1a9)) && !_0x263ffa(this)[_0xf3e48c(0x2cd)](_0xf3e48c(0x98)) && !_0x263ffa(this)['children'](_0xf3e48c(0x14f))?.[_0xf3e48c(0x2cd)](_0xf3e48c(0x98)) && _0x263ffa(this)['parents'](_0xf3e48c(0x166))['length'] === 0x0) {
                    _0x347764(_0xf3e48c(0x26f), _0x263ffa(this));
                    const _0x19f26d = _0x263ffa(this), _0xad4076 = this[_0xf3e48c(0x178)], _0x2768f6 = _0xf3e48c(0xab);
                    var _0x5615fc;
                    if (_0xad4076 === _0xf3e48c(0x131) && _0x20c186 != 0x0)
                        return;
                    const _0x571715 = _0x19f26d['children'](_0xf3e48c(0xf0))[_0xf3e48c(0x81)](_0xf3e48c(0xf0));
                    if (_0x571715[_0xf3e48c(0x252)] === 0x0)
                        return;
                    _0x347764('Found\x20insert\x20point', _0x571715);
                    if (_0x19f26d[_0xf3e48c(0x19c)](_0xf3e48c(0x2ee))[_0xf3e48c(0x252)] > 0x0) {
                        _0x19f26d['find'](_0xf3e48c(0x203))[_0xf3e48c(0x252)] > 0x0 && _0x19f26d[_0xf3e48c(0x19c)]('._acay\x20+\x20.x24i39r')[_0xf3e48c(0x351)](_0xf3e48c(0x1ec), _0xf3e48c(0x99));
                        const _0x398ac2 = _0x19f26d[_0xf3e48c(0x19c)](_0xf3e48c(0x2ee))[_0xf3e48c(0x30e)]()['parent']()[0x0];
                        var _0xe7b829 = new MutationObserver(function () {
                            const _0xffc1d3 = _0xf3e48c;
                            _0x19f26d[_0xffc1d3(0x19c)](_0xffc1d3(0x203))[_0xffc1d3(0x351)]('top', _0xffc1d3(0x99));
                        });
                        _0xe7b829[_0xf3e48c(0x19b)](_0x398ac2, { 'childList': !![] });
                    }
                    _0x571715['eq'](_0xad4076 === _0xf3e48c(0x131) ? 0x0 : _0x571715[_0xf3e48c(0x252)] - 0x2)[_0xf3e48c(0x196)](_0xf3e48c(0x25f));
                    const _0x1b2a8d = '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x20b835('DW') + _0xf3e48c(0xed) + _0x531235[_0xf3e48c(0x23e)] + _0xf3e48c(0x264), _0x486115 = _0xf3e48c(0x154) + _0x20b835('NEW_TAB') + _0xf3e48c(0x32d) + _0x531235[_0xf3e48c(0x21c)] + _0xf3e48c(0x264), _0x19e58e = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x20b835('THUMBNAIL_INTRO') + '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>' + _0x531235[_0xf3e48c(0x28b)] + '</div>', _0x57ea6f = _0xf3e48c(0x354) + _0x20b835(_0xf3e48c(0xda)) + _0xf3e48c(0x2da) + _0x531235[_0xf3e48c(0x242)] + _0xf3e48c(0x264);
                    _0x571715['find'](_0xf3e48c(0xfe))['append'](_0x1b2a8d);
                    const _0x15bc2b = _0x19f26d[_0xf3e48c(0x19c)](_0x2768f6)['length'];
                    if (_0x15bc2b > 0x1 && _0x480d35[_0xf3e48c(0x274)] && !_0x480d35['DIRECT_DOWNLOAD_ALL']) {
                        const _0xdf791a = _0xf3e48c(0x118) + _0x20b835(_0xf3e48c(0xa5)) + '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>' + _0x531235[_0xf3e48c(0x14e)] + _0xf3e48c(0x264);
                        _0x571715[_0xf3e48c(0x19c)]('.button_wrapper')[_0xf3e48c(0x196)](_0xdf791a);
                    }
                    _0x571715[_0xf3e48c(0x19c)](_0xf3e48c(0xfe))[_0xf3e48c(0x196)](_0x486115), setTimeout(() => {
                        const _0x29deef = _0xf3e48c;
                        if (_0x571715['eq'](_0xad4076 === _0x29deef(0x131) ? 0x0 : _0x571715[_0x29deef(0x252)] - 0x2)[_0x29deef(0x19c)]('div\x20>\x20ul\x20li._acaz')[_0x29deef(0x252)] === 0x0)
                            _0x571715['find']('video')['length'] > 0x0 ? _0x571715[_0x29deef(0x19c)](_0x29deef(0xfe))['append'](_0x19e58e) : (_0x5615fc = _0x19f26d[_0x29deef(0x19c)](_0x29deef(0x10f))[_0x29deef(0x9a)](function () {
                                const _0xd7c6e8 = _0x29deef;
                                return _0x263ffa(this)['width']() > 0xc8 && _0x263ffa(this)[_0xd7c6e8(0xd0)]() > 0xc8;
                            })['attr'](_0x29deef(0x175)), _0x571715['find'](_0x29deef(0xfe))['append'](_0x57ea6f));
                        else {
                            const _0xbd585d = (_0x59562a, _0x58a49b) => {
                                    const _0x383b54 = _0x29deef;
                                    _0x59562a[_0x383b54(0x346)](_0x4d2426 => {
                                        const _0x3823ca = _0x383b54;
                                        if (_0x4d2426[_0x3823ca(0x298)]) {
                                            var _0x47c1a5 = _0x263ffa(_0x4d2426[_0x3823ca(0xb6)]);
                                            _0x571715[_0x3823ca(0x19c)](_0x3823ca(0x366))?.[_0x3823ca(0xcb)](), _0x571715[_0x3823ca(0x19c)]('.IG_IMAGE_VIEWER')?.[_0x3823ca(0xcb)](), _0x47c1a5[_0x3823ca(0x19c)]('video')[_0x3823ca(0x252)] > 0x0 ? (_0x571715[_0x3823ca(0x19c)]('.IG_THUMBNAIL_MAIN')['length'] === 0x0 && _0x571715[_0x3823ca(0x19c)](_0x3823ca(0xfe))[_0x3823ca(0x196)](_0x19e58e), _0x114ac2(_0x19f26d)) : (_0x5615fc = _0x47c1a5[_0x3823ca(0x19c)](_0x3823ca(0x10f))[_0x3823ca(0x146)](_0x3823ca(0x175)), _0x571715['find']('.button_wrapper')[_0x3823ca(0x196)](_0x57ea6f));
                                        }
                                    });
                                }, _0x4ac337 = new IntersectionObserver(_0xbd585d, {
                                    'root': _0x19f26d[_0x29deef(0x19c)](_0x29deef(0x35a))[_0x29deef(0x30e)]()[_0x29deef(0x365)]()[_0x29deef(0x365)]()['parent']()[0x0],
                                    'rootMargin': _0x29deef(0x2e6),
                                    'threshold': 0.1
                                }), _0x9a0ec8 = new MutationObserver(function (_0x453bf0, _0x1f7078) {
                                    const _0x3661b9 = _0x29deef;
                                    var _0x574806 = _0x453bf0['at'](0x0)?.['target'];
                                    _0x263ffa(_0x574806)[_0x3661b9(0x19c)](_0x3661b9(0x34e))[_0x3661b9(0x172)](function () {
                                        const _0x1c3c12 = _0x3661b9;
                                        _0x4ac337[_0x1c3c12(0x19b)](this);
                                    });
                                });
                            _0x19f26d[_0x29deef(0x19c)]('div\x20>\x20ul\x20li._acaz')[_0x29deef(0x172)](function () {
                                const _0x48cc6c = _0x29deef;
                                _0x4ac337[_0x48cc6c(0x19b)](this);
                            });
                            const _0x525673 = _0x571715['eq'](_0xad4076 === _0x29deef(0x131) ? 0x0 : _0x571715[_0x29deef(0x252)] - 0x2)['find'](_0x29deef(0xb5))?.[_0x29deef(0x365)]()[0x0], _0x58f699 = _0x571715['eq'](_0xad4076 === 'DIV' ? 0x0 : _0x571715['length'] - 0x2)[_0x29deef(0x19c)](_0x29deef(0xb5))?.[_0x29deef(0x365)]()[_0x29deef(0x365)]()[0x0];
                            _0x525673 && _0x9a0ec8[_0x29deef(0x19b)](_0x525673, { 'childList': !![] }), _0x58f699 && _0x9a0ec8[_0x29deef(0x19b)](_0x58f699, { 'attributes': !![] });
                        }
                    }, 0x32), _0x571715[_0xf3e48c(0x351)](_0xf3e48c(0x105), _0xf3e48c(0x21f)), _0x114ac2(_0x19f26d), _0x81f8cb[_0xf3e48c(0x278)][_0xf3e48c(0x2ec)]({
                        'element': this,
                        'trigger': [
                            _0xf3e48c(0x366),
                            _0xf3e48c(0x109),
                            _0xf3e48c(0x1d5),
                            _0xf3e48c(0x13d),
                            '.IG_IMAGE_VIEWER'
                        ]
                    }), _0x263ffa(this)['on'](_0xf3e48c(0x1cd), '.IG_IMAGE_VIEWER', function () {
                        const _0x506407 = _0xf3e48c;
                        _0x5615fc != null ? _0x50e7a4(_0x5615fc) : alert(_0x506407(0x320));
                    }), _0x263ffa(this)['on'](_0xf3e48c(0x1cd), _0xf3e48c(0x366), function () {
                        const _0x652b58 = _0xf3e48c;
                        _0x28c20c(!![]), _0x81f8cb[_0x652b58(0x1d7)] = _0x19f26d[_0x652b58(0x146)](_0x652b58(0xc0)), _0x81f8cb[_0x652b58(0xe1)] = location[_0x652b58(0x1e6)][_0x652b58(0x250)](/\/$/, '')[_0x652b58(0x173)]('/')['at'](-0x1) || _0x19f26d[_0x652b58(0x19c)](_0x652b58(0x21d))['first']()[_0x652b58(0x146)](_0x652b58(0x2a0))['split']('/')['at'](0x2) || _0x263ffa(this)[_0x652b58(0x365)]()['parent']()[_0x652b58(0x365)]()[_0x652b58(0x81)](_0x652b58(0x29f))['children'](_0x652b58(0xf0))[_0x652b58(0x81)](_0x652b58(0x29f))[_0x652b58(0x19c)](_0x652b58(0x21d))[_0x652b58(0x33a)]()[_0x652b58(0x146)]('href')['split']('/')['at'](0x2);
                        var _0xc07e30 = _0x35c85b(_0x19f26d);
                        _0x426983(!![], ![]), _0x10fad2(_0x81f8cb[_0x652b58(0xe1)], _0x652b58(0x19a), '')[_0x652b58(0x319)](() => {
                            let _0x11ce5b = setInterval(() => {
                                const _0x10b93d = a0_0x5ed9;
                                if (_0x263ffa(_0x10b93d(0x363))[_0x10b93d(0x252)] > 0x0) {
                                    clearInterval(_0x11ce5b);
                                    var _0xe05f55 = _0x263ffa(_0x10b93d(0x96) + (_0xc07e30 + 0x1) + '\x22]')?.[_0x10b93d(0x365)]()[_0x10b93d(0x19c)]('.videoThumbnail')?.[_0x10b93d(0x30e)]();
                                    _0xe05f55 != null && _0xe05f55[_0x10b93d(0x252)] > 0x0 ? _0xe05f55[_0x10b93d(0x1c0)](_0x10b93d(0x1cd)) : alert('Can\x20not\x20find\x20thumbnail\x20url.'), _0x28c20c(![]), _0x263ffa(_0x10b93d(0x2bf))[_0x10b93d(0xcb)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x263ffa(this)['on']('click', '.IG_NEWTAB_MAIN', function () {
                        const _0x206781 = _0xf3e48c;
                        _0x28c20c(!![]), _0x81f8cb[_0x206781(0x1d7)] = _0x19f26d[_0x206781(0x146)](_0x206781(0xc0)), _0x81f8cb[_0x206781(0xe1)] = location['pathname']['replace'](/\/$/, '')[_0x206781(0x173)]('/')['at'](-0x1) || _0x19f26d['find'](_0x206781(0x21d))[_0x206781(0x30e)]()[_0x206781(0x146)](_0x206781(0x2a0))[_0x206781(0x173)]('/')['at'](0x2) || _0x263ffa(this)[_0x206781(0x365)]()[_0x206781(0x365)]()['parent']()[_0x206781(0x81)](_0x206781(0x29f))[_0x206781(0x81)]('div')[_0x206781(0x81)](_0x206781(0x29f))[_0x206781(0x19c)](_0x206781(0x21d))[_0x206781(0x33a)]()['attr'](_0x206781(0x2a0))[_0x206781(0x173)]('/')['at'](0x2);
                        var _0xb01911 = _0x35c85b(_0x19f26d);
                        _0x426983(!![], ![]), _0x10fad2(_0x81f8cb[_0x206781(0xe1)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x206781(0x319)](() => {
                            let _0x587195 = setInterval(() => {
                                const _0x1f8841 = a0_0x5ed9;
                                if (_0x263ffa('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['length'] > 0x0) {
                                    clearInterval(_0x587195);
                                    var _0x3d952f = _0x263ffa(_0x1f8841(0x96) + (_0xb01911 + 0x1) + '\x22]');
                                    if (_0x480d35[_0x1f8841(0x23b)] && _0x480d35['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0x322c0b(_0x3d952f['first']()[0x0], !![]);
                                    else {
                                        let _0x4cf196 = _0x3d952f?.[_0x1f8841(0x146)](_0x1f8841(0x270));
                                        if (_0x4cf196) {
                                            var _0x446f02 = new URL(_0x4cf196);
                                            _0x446f02[_0x1f8841(0x16d)] = _0x1f8841(0x211), _0x1743b2(_0x446f02['href']);
                                        } else
                                            alert(_0x1f8841(0x243));
                                    }
                                    _0x28c20c(![]), _0x263ffa(_0x1f8841(0x2bf))[_0x1f8841(0xcb)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x263ffa(this)['on'](_0xf3e48c(0x1cd), '.IG_DW_ALL_MAIN', async function () {
                        const _0x48810e = _0xf3e48c;
                        _0x81f8cb[_0x48810e(0x1d7)] = _0x19f26d['attr'](_0x48810e(0xc0)), _0x81f8cb[_0x48810e(0xe1)] = location[_0x48810e(0x1e6)][_0x48810e(0x250)](/\/$/, '')[_0x48810e(0x173)]('/')['at'](-0x1) || _0x19f26d[_0x48810e(0x19c)]('a[href^=\x22/p/\x22]')[_0x48810e(0x30e)]()[_0x48810e(0x146)]('href')[_0x48810e(0x173)]('/')['at'](0x2) || _0x263ffa(this)[_0x48810e(0x365)]()[_0x48810e(0x365)]()[_0x48810e(0x365)]()['children'](_0x48810e(0x29f))[_0x48810e(0x81)](_0x48810e(0xf0))['children'](_0x48810e(0x29f))[_0x48810e(0x19c)](_0x48810e(0x21d))[_0x48810e(0x33a)]()[_0x48810e(0x146)]('href')[_0x48810e(0x173)]('/')['at'](0x2), _0x426983(_0x480d35[_0x48810e(0x23f)], !![]), _0x263ffa(_0x48810e(0x126))[_0x48810e(0x190)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x81f8cb[_0x48810e(0xe1)] + '\x22>' + _0x81f8cb[_0x48810e(0xe1)] + '</a>'), _0x263ffa(_0x48810e(0x363))['each'](function () {
                            const _0x40279e = _0x48810e;
                            _0x263ffa(this)[_0x40279e(0x222)]('<div></div>'), _0x263ffa(this)[_0x40279e(0x27e)](_0x40279e(0x2b1)), _0x263ffa(this)[_0x40279e(0xeb)](_0x40279e(0x154) + _0x20b835(_0x40279e(0x21c)) + '\x22\x20class=\x22newTab\x22>' + _0x531235[_0x40279e(0x21c)] + _0x40279e(0x264)), _0x263ffa(this)[_0x40279e(0x146)](_0x40279e(0x2d7)) == 'video' && _0x263ffa(this)[_0x40279e(0xeb)](_0x40279e(0x9b) + _0x20b835(_0x40279e(0x181)) + _0x40279e(0x20f) + _0x531235[_0x40279e(0x28b)] + _0x40279e(0x264));
                        }), _0x10fad2(_0x81f8cb['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x20b835(_0x48810e(0x311)))[_0x48810e(0x319)](() => {
                            let _0x29cd2b = setInterval(() => {
                                const _0x1e32b8 = a0_0x5ed9;
                                _0x263ffa(_0x1e32b8(0x363))[_0x1e32b8(0x252)] > 0x0 && (clearInterval(_0x29cd2b), _0x263ffa(_0x1e32b8(0x363))['each'](function () {
                                    const _0x33cef8 = _0x1e32b8;
                                    _0x263ffa(this)[_0x33cef8(0x1c0)](_0x33cef8(0x1cd));
                                }), _0x263ffa(_0x1e32b8(0x2bf))['remove']());
                            }, 0xfa);
                        });
                    }), _0x263ffa(this)['on'](_0xf3e48c(0x1cd), _0xf3e48c(0x13d), async function () {
                        const _0x42a632 = _0xf3e48c;
                        _0x81f8cb[_0x42a632(0x1d7)] = _0x19f26d[_0x42a632(0x146)]('data-username'), _0x81f8cb[_0x42a632(0xe1)] = location[_0x42a632(0x1e6)]['replace'](/\/$/, '')[_0x42a632(0x173)]('/')['at'](-0x1) || _0x19f26d['find'](_0x42a632(0x21d))[_0x42a632(0x30e)]()[_0x42a632(0x146)](_0x42a632(0x2a0))[_0x42a632(0x173)]('/')['at'](0x2) || _0x263ffa(this)[_0x42a632(0x365)]()[_0x42a632(0x365)]()['parent']()['children'](_0x42a632(0x29f))['children']('div')[_0x42a632(0x81)](_0x42a632(0x29f))[_0x42a632(0x19c)](_0x42a632(0x21d))[_0x42a632(0x33a)]()['attr'](_0x42a632(0x2a0))[_0x42a632(0x173)]('/')['at'](0x2), _0x426983(_0x480d35[_0x42a632(0x23f)], !![]), _0x263ffa(_0x42a632(0x126))[_0x42a632(0x190)](_0x42a632(0x1ff) + _0x81f8cb['GL_postPath'] + '\x22>' + _0x81f8cb[_0x42a632(0xe1)] + _0x42a632(0x170));
                        if (_0x480d35[_0x42a632(0x274)]) {
                            _0x28c20c(!![]), _0x4558fd(!![]);
                            var _0x2ee9c9 = _0x35c85b(_0x263ffa(this)[_0x42a632(0x365)]()[_0x42a632(0x365)]()[_0x42a632(0x365)]());
                            _0x10fad2(_0x81f8cb[_0x42a632(0xe1)], _0x42a632(0x19a), '')[_0x42a632(0x319)](() => {
                                let _0x144d89 = setInterval(() => {
                                    const _0x483c30 = a0_0x5ed9;
                                    if (_0x263ffa(_0x483c30(0x363))[_0x483c30(0x252)] > 0x0) {
                                        clearInterval(_0x144d89);
                                        var _0x5e907e = _0x263ffa(_0x483c30(0x96) + (_0x2ee9c9 + 0x1) + '\x22]')?.[_0x483c30(0x146)](_0x483c30(0x270));
                                        _0x5e907e ? (_0x28c20c(![]), _0x263ffa('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x2ee9c9 + 0x1) + '\x22]')?.[_0x483c30(0x1c0)](_0x483c30(0x1cd))) : alert(_0x483c30(0xdb)), _0x263ffa(_0x483c30(0x2bf))['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x480d35[_0x42a632(0x23f)]) {
                            var _0x1d5112 = 0x0, _0x5bf3e0 = _0x263ffa(this)[_0x42a632(0x365)]()[_0x42a632(0x365)]()[_0x42a632(0x19c)](_0x2768f6)[_0x42a632(0x252)], _0x12185a = _0x480d35[_0x42a632(0x2f3)], _0x1cd678 = new Date(_0x263ffa(this)['parent']()['parent']()[_0x42a632(0x365)]()[_0x42a632(0x19c)]('a[href]\x20time[datetime]')[_0x42a632(0x9a)](function () {
                                    const _0x1bb38e = _0x42a632;
                                    let _0x508b76 = _0x263ffa(this)['parents']('a[href]')[_0x1bb38e(0x146)](_0x1bb38e(0x2a0));
                                    return _0x508b76?.['startsWith'](_0x1bb38e(0x1b9)) || _0x508b76?.[_0x1bb38e(0x305)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })[_0x42a632(0x30e)]()['attr'](_0x42a632(0x1bd)))['getTime']();
                            if (_0x5bf3e0)
                                _0x263ffa(this)['parent']()['parent']()[_0x42a632(0x19c)](_0x2768f6)[_0x42a632(0x172)](function () {
                                    const _0x29cc51 = _0x42a632;
                                    let _0x207e79 = _0x263ffa(this)[_0x29cc51(0x365)]()[_0x29cc51(0x365)]()[_0x29cc51(0x365)]()[_0x29cc51(0x19c)]('video');
                                    _0x207e79 && _0x207e79[_0x29cc51(0x146)]('src') && (_0x12185a = !![]);
                                }), _0x12185a || _0x480d35['FORCE_RESOURCE_VIA_MEDIA'] ? _0x10fad2(_0x81f8cb[_0x42a632(0xe1)], _0x42a632(0x19a), _0x20b835(_0x42a632(0x311))) : (_0x263ffa(this)[_0x42a632(0x365)]()[_0x42a632(0x365)]()[_0x42a632(0x19c)](_0x2768f6)[_0x42a632(0x172)](function () {
                                    const _0x47d798 = _0x42a632;
                                    _0x1d5112++;
                                    let _0x5423f5 = _0x263ffa(this)[_0x47d798(0x19c)](_0x47d798(0x92)), _0x4f569 = _0x263ffa(this)[_0x47d798(0x19c)]('._aagv\x20img'), _0x377269 = _0x4f569[_0x47d798(0x146)](_0x47d798(0x2fe)) ? _0x4f569[_0x47d798(0x146)](_0x47d798(0x2fe))[_0x47d798(0x173)]('\x20')[0x0] : _0x4f569[_0x47d798(0x146)](_0x47d798(0x175));
                                    _0x5423f5 && _0x5423f5['attr'](_0x47d798(0x175)) && (_0x12185a = !![]), _0x4f569 && _0x377269 && _0x263ffa(_0x47d798(0x19a))[_0x47d798(0x196)](_0x47d798(0x280) + _0x1cd678 + _0x47d798(0xfc) + _0x81f8cb[_0x47d798(0xe1)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x1d5112 + _0x47d798(0xf7) + _0x377269 + _0x47d798(0x262) + _0x377269 + _0x47d798(0x18e) + _0x20b835(_0x47d798(0xf3)) + '</span>\x20' + _0x1d5112 + '\x20-</a>');
                                }), _0x12185a && _0x10fad2(_0x81f8cb[_0x42a632(0xe1)], _0x42a632(0x19a), _0x20b835(_0x42a632(0x15d))));
                            else {
                                if (_0x480d35[_0x42a632(0x23b)])
                                    _0x10fad2(_0x81f8cb[_0x42a632(0xe1)], _0x42a632(0x19a), _0x20b835('LOAD_BLOB_MULTIPLE'));
                                else {
                                    _0x1d5112++;
                                    let _0x491894 = _0x263ffa(this)['parent']()[_0x42a632(0x365)]()[_0x42a632(0x365)]()['find']('video'), _0x58bee0 = _0x263ffa(this)['parent']()[_0x42a632(0x365)]()[_0x42a632(0x365)]()[_0x42a632(0x19c)](_0x42a632(0x2a9)), _0x4c705b = _0x58bee0[_0x42a632(0x146)]('srcset') ? _0x58bee0[_0x42a632(0x146)](_0x42a632(0x2fe))['split']('\x20')[0x0] : _0x58bee0['attr'](_0x42a632(0x175));
                                    _0x491894 && _0x491894[_0x42a632(0x146)](_0x42a632(0x175)) && _0x10fad2(_0x81f8cb['GL_postPath'], _0x42a632(0x19a), _0x20b835(_0x42a632(0x94))), _0x58bee0 && _0x4c705b && _0x263ffa(_0x42a632(0x19a))[_0x42a632(0x196)](_0x42a632(0x280) + _0x1cd678 + _0x42a632(0xfc) + _0x81f8cb[_0x42a632(0xe1)] + _0x42a632(0x199) + _0x1d5112 + _0x42a632(0x2d9) + _0x4c705b + _0x42a632(0x262) + _0x4c705b + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x20b835(_0x42a632(0xf3)) + _0x42a632(0x22f) + _0x1d5112 + _0x42a632(0x12a));
                                }
                            }
                        }
                        _0x263ffa(_0x42a632(0x363))[_0x42a632(0x172)](function () {
                            const _0xa95543 = _0x42a632;
                            _0x263ffa(this)[_0xa95543(0x222)](_0xa95543(0x260)), _0x263ffa(this)[_0xa95543(0x27e)](_0xa95543(0x2b1)), _0x263ffa(this)[_0xa95543(0xeb)](_0xa95543(0x154) + _0x20b835(_0xa95543(0x21c)) + _0xa95543(0x88) + _0x531235[_0xa95543(0x21c)] + _0xa95543(0x264)), _0x263ffa(this)['attr'](_0xa95543(0x2d7)) == _0xa95543(0x92) && _0x263ffa(this)[_0xa95543(0xeb)](_0xa95543(0x9b) + _0x20b835('THUMBNAIL_INTRO') + _0xa95543(0x20f) + _0x531235['THUMBNAIL'] + '</div>');
                        }), _0x480d35[_0x42a632(0x23f)] && _0x10fad2(_0x81f8cb['GL_postPath'], _0x42a632(0x19a), _0x20b835('LOAD_BLOB_MULTIPLE'))['then'](() => {
                            let _0x1a4f89 = setInterval(() => {
                                const _0x301933 = a0_0x5ed9;
                                _0x263ffa('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x301933(0x252)] > 0x0 && (clearInterval(_0x1a4f89), _0x263ffa(_0x301933(0x363))[_0x301933(0x172)](function () {
                                    const _0x1df151 = _0x301933;
                                    _0x263ffa(this)[_0x1df151(0x1c0)]('click');
                                }), _0x263ffa(_0x301933(0x2bf))[_0x301933(0xcb)]());
                            }, 0xfa);
                        });
                    });
                    var _0x1c84d4 = _0x263ffa(this)[_0xf3e48c(0x19c)](_0xf3e48c(0x1d1))[_0xf3e48c(0x30e)]()[_0xf3e48c(0x337)]() || _0x263ffa(this)[_0xf3e48c(0x19c)](_0xf3e48c(0x2bb))[_0xf3e48c(0x9a)](function () {
                        const _0x4de8c0 = _0xf3e48c;
                        return _0x263ffa(this)?.[_0x4de8c0(0x337)]()?.[_0x4de8c0(0x252)] > 0x0;
                    })[_0xf3e48c(0x30e)]()[_0xf3e48c(0x337)]();
                    _0x263ffa(this)[_0xf3e48c(0x146)](_0xf3e48c(0x1a9), _0xf3e48c(0x195)), _0x263ffa(this)[_0xf3e48c(0x146)](_0xf3e48c(0xc0), _0x1c84d4);
                }
            });
        }
        function _0x4a2cc2(_0x5c9d63) {
            const _0x128fa0 = _0x2f3e8e;
            var _0x6b235d = _0x5c9d63[_0x128fa0(0xe4)] ?? _0x5c9d63;
            return _0x6b235d['owner'] == null && _0x6b235d['user'] != null && (_0x6b235d[_0x128fa0(0x2d1)] = _0x6b235d[_0x128fa0(0x179)]), _0x6b235d[_0x128fa0(0x2d1)] == null && (_0x347764(_0x128fa0(0x124), _0x128fa0(0xc2)), alert(_0x128fa0(0x1a7))), _0x6b235d;
        }
        async function _0x10fad2(_0x4efede, _0x1f7d5b, _0x58fe2f) {
            const _0x3323c7 = _0x2f3e8e;
            try {
                _0x263ffa(_0x1f7d5b + '\x20a')[_0x3323c7(0xcb)](), _0x263ffa(_0x1f7d5b)[_0x3323c7(0x196)](_0x3323c7(0x307) + _0x58fe2f + _0x3323c7(0x34f));
                let _0x2cd122 = await _0x51f3af(_0x4efede), _0x5cb5ab = _0x4a2cc2(_0x2cd122['data']);
                if (_0x2cd122[_0x3323c7(0x129)] === _0x3323c7(0xba)) {
                    let _0x2ee9b6 = 0x1;
                    _0x5cb5ab[_0x3323c7(0x162)] == _0x3323c7(0x1b0) && _0x5cb5ab[_0x3323c7(0x31c)] && (_0x263ffa(_0x1f7d5b)['append']('<a\x20media-id=\x22' + _0x5cb5ab['id'] + '\x22\x20datetime=\x22' + _0x5cb5ab[_0x3323c7(0x187)] + _0x3323c7(0x112) + _0x5cb5ab['shortcode'] + _0x3323c7(0x364) + _0x5cb5ab[_0x3323c7(0x2d1)]['username'] + '\x22\x20data-globalIndex=\x22' + _0x2ee9b6 + _0x3323c7(0xf7) + _0x5cb5ab[_0x3323c7(0x31c)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5cb5ab[_0x3323c7(0x2b9)][0x1][_0x3323c7(0x175)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x20b835(_0x3323c7(0x22a)) + '</span>\x20' + _0x2ee9b6 + '\x20-</a>'), _0x2ee9b6++);
                    _0x5cb5ab[_0x3323c7(0x162)] == _0x3323c7(0x101) && (_0x263ffa(_0x1f7d5b)['append'](_0x3323c7(0xde) + _0x5cb5ab['id'] + _0x3323c7(0x223) + _0x5cb5ab[_0x3323c7(0x187)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x5cb5ab[_0x3323c7(0x266)] + _0x3323c7(0x127) + _0x5cb5ab[_0x3323c7(0x2d1)][_0x3323c7(0x207)] + _0x3323c7(0x240) + _0x2ee9b6 + _0x3323c7(0xf7) + _0x5cb5ab[_0x3323c7(0x2b9)][_0x5cb5ab[_0x3323c7(0x2b9)][_0x3323c7(0x252)] - 0x1]['src'] + _0x3323c7(0x262) + _0x5cb5ab[_0x3323c7(0x2b9)][0x1][_0x3323c7(0x175)] + _0x3323c7(0x18e) + _0x20b835(_0x3323c7(0xf3)) + '</span>\x20' + _0x2ee9b6 + _0x3323c7(0x12a)), _0x2ee9b6++);
                    if (_0x5cb5ab['__typename'] == _0x3323c7(0x2ab) && _0x5cb5ab[_0x3323c7(0x2a4)])
                        for (let _0x49ea04 of _0x5cb5ab[_0x3323c7(0x2a4)][_0x3323c7(0x12d)]) {
                            _0x49ea04[_0x3323c7(0x1ea)]['__typename'] == _0x3323c7(0x1b0) && _0x263ffa(_0x1f7d5b)[_0x3323c7(0x196)]('<a\x20media-id=\x22' + _0x49ea04['node']['id'] + _0x3323c7(0x223) + _0x5cb5ab[_0x3323c7(0x187)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x5cb5ab['shortcode'] + _0x3323c7(0x364) + _0x5cb5ab[_0x3323c7(0x2d1)][_0x3323c7(0x207)] + _0x3323c7(0x240) + _0x2ee9b6 + _0x3323c7(0xf7) + _0x49ea04['node'][_0x3323c7(0x31c)] + _0x3323c7(0x262) + _0x49ea04[_0x3323c7(0x1ea)][_0x3323c7(0x2b9)][0x1][_0x3323c7(0x175)] + _0x3323c7(0x333) + _0x20b835(_0x3323c7(0x22a)) + _0x3323c7(0x22f) + _0x2ee9b6 + _0x3323c7(0x12a)), _0x49ea04[_0x3323c7(0x1ea)][_0x3323c7(0x162)] == _0x3323c7(0x101) && _0x263ffa(_0x1f7d5b)['append']('<a\x20media-id=\x22' + _0x49ea04[_0x3323c7(0x1ea)]['id'] + '\x22\x20datetime=\x22' + _0x5cb5ab['taken_at_timestamp'] + _0x3323c7(0x112) + _0x5cb5ab[_0x3323c7(0x266)] + _0x3323c7(0x127) + _0x5cb5ab[_0x3323c7(0x2d1)][_0x3323c7(0x207)] + '\x22\x20data-globalIndex=\x22' + _0x2ee9b6 + _0x3323c7(0xf7) + _0x49ea04['node'][_0x3323c7(0x2b9)][_0x49ea04[_0x3323c7(0x1ea)][_0x3323c7(0x2b9)][_0x3323c7(0x252)] - 0x1][_0x3323c7(0x175)] + _0x3323c7(0x262) + _0x49ea04[_0x3323c7(0x1ea)][_0x3323c7(0x2b9)][0x1][_0x3323c7(0x175)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x20b835('IMG') + _0x3323c7(0x22f) + _0x2ee9b6 + _0x3323c7(0x12a)), _0x2ee9b6++;
                        }
                } else {
                    if (_0x5cb5ab['carousel_media'])
                        _0x347764(_0x3323c7(0xec)), _0x5cb5ab[_0x3323c7(0xec)][_0x3323c7(0x346)]((_0xee098f, _0x146848) => {
                            const _0x24592b = _0x3323c7;
                            let _0x7d4dc7 = _0x146848 + 0x1;
                            _0xee098f[_0x24592b(0x323)] == null ? (_0xee098f[_0x24592b(0x206)]['candidates'][_0x24592b(0x1dc)](function (_0x23c45f, _0x43a47b) {
                                const _0x51a4cd = _0x24592b;
                                let _0xd4d0f1 = new URL(_0x23c45f[_0x51a4cd(0xf4)])[_0x51a4cd(0x343)][_0x51a4cd(0x121)](_0x51a4cd(0x237)), _0x504f18 = new URL(_0x43a47b['url'])[_0x51a4cd(0x343)][_0x51a4cd(0x121)](_0x51a4cd(0x237));
                                if (_0xd4d0f1 && _0x504f18) {
                                    if (_0xd4d0f1[_0x51a4cd(0x252)] > _0x504f18[_0x51a4cd(0x252)])
                                        return 0x1;
                                    if (_0xd4d0f1[_0x51a4cd(0x252)] < _0x504f18[_0x51a4cd(0x252)])
                                        return -0x1;
                                } else {
                                    if (_0x23c45f[_0x51a4cd(0x2fd)] < _0x43a47b['width'])
                                        return 0x1;
                                    if (_0x23c45f['width'] > _0x43a47b[_0x51a4cd(0x2fd)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x263ffa(_0x1f7d5b)[_0x24592b(0x196)](_0x24592b(0xde) + _0xee098f['pk'] + _0x24592b(0x223) + _0xee098f[_0x24592b(0x340)] + _0x24592b(0x112) + _0x5cb5ab['code'] + _0x24592b(0x127) + _0x5cb5ab['owner'][_0x24592b(0x207)] + _0x24592b(0x240) + _0x7d4dc7 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0xee098f['image_versions2'][_0x24592b(0xd1)][0x0][_0x24592b(0xf4)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xee098f[_0x24592b(0x206)]['candidates'][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x20b835(_0x24592b(0xf3)) + '</span>\x20' + _0x7d4dc7 + '\x20-</a>')) : _0x263ffa(_0x1f7d5b)[_0x24592b(0x196)](_0x24592b(0xde) + _0xee098f['pk'] + _0x24592b(0x223) + _0xee098f[_0x24592b(0x340)] + _0x24592b(0x112) + _0x5cb5ab[_0x24592b(0xc4)] + _0x24592b(0x364) + _0x5cb5ab[_0x24592b(0x2d1)][_0x24592b(0x207)] + '\x22\x20data-globalIndex=\x22' + _0x7d4dc7 + _0x24592b(0xf7) + _0xee098f[_0x24592b(0x323)][0x0]['url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xee098f[_0x24592b(0x206)][_0x24592b(0xd1)][0x0][_0x24592b(0xf4)] + _0x24592b(0x33d) + _0x20b835(_0x24592b(0x22a)) + _0x24592b(0x22f) + _0x7d4dc7 + _0x24592b(0x12a));
                        });
                    else {
                        let _0x300e64 = 0x1;
                        _0x5cb5ab[_0x3323c7(0x323)] == null ? (_0x5cb5ab['image_versions2'][_0x3323c7(0xd1)]['sort'](function (_0x360767, _0x4ef5eb) {
                            const _0x506ec7 = _0x3323c7;
                            let _0x25b55b = new URL(_0x360767[_0x506ec7(0xf4)])['searchParams'][_0x506ec7(0x121)](_0x506ec7(0x237)), _0x19f43e = new URL(_0x4ef5eb[_0x506ec7(0xf4)])['searchParams'][_0x506ec7(0x121)](_0x506ec7(0x237));
                            if (_0x25b55b && _0x19f43e) {
                                if (_0x25b55b['length'] > _0x19f43e[_0x506ec7(0x252)])
                                    return 0x1;
                                if (_0x25b55b[_0x506ec7(0x252)] < _0x19f43e['length'])
                                    return -0x1;
                            } else {
                                if (_0x360767['width'] < _0x4ef5eb[_0x506ec7(0x2fd)])
                                    return 0x1;
                                if (_0x360767['width'] > _0x4ef5eb[_0x506ec7(0x2fd)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x263ffa(_0x1f7d5b)[_0x3323c7(0x196)](_0x3323c7(0xde) + _0x5cb5ab['pk'] + '\x22\x20datetime=\x22' + _0x5cb5ab[_0x3323c7(0x340)] + _0x3323c7(0x112) + _0x5cb5ab[_0x3323c7(0xc4)] + _0x3323c7(0x127) + _0x5cb5ab[_0x3323c7(0x2d1)][_0x3323c7(0x207)] + '\x22\x20data-globalIndex=\x22' + _0x300e64 + _0x3323c7(0xf7) + _0x5cb5ab['image_versions2'][_0x3323c7(0xd1)][0x0]['url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5cb5ab[_0x3323c7(0x206)][_0x3323c7(0xd1)][0x0][_0x3323c7(0xf4)] + _0x3323c7(0x18e) + _0x20b835(_0x3323c7(0xf3)) + '</span>\x20' + _0x300e64 + _0x3323c7(0x12a))) : _0x263ffa(_0x1f7d5b)['append'](_0x3323c7(0xde) + _0x5cb5ab['pk'] + _0x3323c7(0x223) + _0x5cb5ab[_0x3323c7(0x340)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x5cb5ab[_0x3323c7(0xc4)] + _0x3323c7(0x364) + _0x5cb5ab[_0x3323c7(0x2d1)]['username'] + '\x22\x20data-globalIndex=\x22' + _0x300e64 + _0x3323c7(0xf7) + _0x5cb5ab[_0x3323c7(0x323)][0x0][_0x3323c7(0xf4)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5cb5ab[_0x3323c7(0x206)][_0x3323c7(0xd1)][0x0][_0x3323c7(0xf4)] + _0x3323c7(0x33d) + _0x20b835(_0x3323c7(0x22a)) + '</span>\x20' + _0x300e64 + _0x3323c7(0x12a));
                    }
                }
                _0x263ffa(_0x3323c7(0x1c1))['remove'](), _0x263ffa(_0x3323c7(0x363))[_0x3323c7(0x172)](function () {
                    const _0x198d26 = _0x3323c7;
                    _0x263ffa(this)['wrap'](_0x198d26(0x260)), _0x263ffa(this)[_0x198d26(0x27e)](_0x198d26(0x2b1)), _0x263ffa(this)['after'](_0x198d26(0x154) + _0x20b835('NEW_TAB') + '\x22\x20class=\x22newTab\x22>' + _0x531235[_0x198d26(0x21c)] + _0x198d26(0x264)), _0x263ffa(this)['attr']('data-name') == 'video' && _0x263ffa(this)[_0x198d26(0xeb)](_0x198d26(0x9b) + _0x20b835(_0x198d26(0x181)) + _0x198d26(0x20f) + _0x531235[_0x198d26(0x28b)] + _0x198d26(0x264));
                });
            } catch (_0xb1fbd4) {
                _0x347764(_0x3323c7(0x204), _0xb1fbd4);
            }
            ;
        }
        function _0x35c85b(_0x59cf54) {
            const _0x45c8b5 = _0x2f3e8e;
            var _0x5767ae = 0x0, _0x5e8d8d = _0x59cf54['find'](_0x45c8b5(0x209));
            return (_0x5e8d8d == null || !_0x5e8d8d[_0x45c8b5(0x2cd)](_0x45c8b5(0x2ae))) && (_0x5e8d8d = _0x59cf54[_0x45c8b5(0x19c)](_0x45c8b5(0x1ae))['eq'](0x0)[_0x45c8b5(0x81)](_0x45c8b5(0xf0))), _0x5e8d8d['filter']('._acnb')['each'](function (_0xd10ec5) {
                const _0x2cc8ae = _0x45c8b5;
                _0x263ffa(this)[_0x2cc8ae(0x2cd)](_0x2cc8ae(0x358)) && (_0x5767ae = _0xd10ec5);
            }), _0x5767ae;
        }
        async function _0x523e40(_0x589c2c) {
            const _0x2a0ada = _0x2f3e8e;
            if (_0x589c2c) {
                _0x28c20c(!![]);
                let _0x23faf7 = new Date()[_0x2a0ada(0x1c3)](), _0x44f0fd = Math[_0x2a0ada(0x11c)](_0x23faf7 / 0x3e8), _0x4f3a5f = location[_0x2a0ada(0x1e6)][_0x2a0ada(0xca)](/(reels|tagged)\/$/ig, '')[_0x2a0ada(0x173)]('/')['filter'](_0x4507fd => _0x4507fd[_0x2a0ada(0x252)] > 0x0)['at'](-0x1), _0x37f45e = await _0x320b31(_0x4f3a5f);
                try {
                    let _0xf427c1 = await _0x58ac51(_0x37f45e[_0x2a0ada(0x179)]['pk']);
                    _0x2d1195(_0xf427c1, _0x4f3a5f, 'avatar', _0x44f0fd, _0x2a0ada(0x1c2));
                } catch (_0x6ed420) {
                    _0x2d1195(_0x37f45e[_0x2a0ada(0x179)][_0x2a0ada(0x2cf)], _0x4f3a5f, _0x2a0ada(0x11a), _0x44f0fd, 'jpg');
                }
                _0x28c20c(![]);
            } else {
                if (!_0x263ffa(_0x2a0ada(0x24e))[_0x2a0ada(0x252)]) {
                    let _0x54cad1 = setInterval(() => {
                        const _0x1a7e6d = _0x2a0ada;
                        if (_0x263ffa(_0x1a7e6d(0x24e))[_0x1a7e6d(0x252)]) {
                            clearInterval(_0x54cad1);
                            return;
                        }
                        _0x263ffa(_0x1a7e6d(0x215))['parent']()[_0x1a7e6d(0x365)]()[_0x1a7e6d(0x196)](_0x1a7e6d(0x22d) + _0x20b835('DW') + _0x1a7e6d(0xe0) + _0x531235[_0x1a7e6d(0x23e)] + _0x1a7e6d(0x264)), _0x263ffa(_0x1a7e6d(0x215))[_0x1a7e6d(0x365)]()[_0x1a7e6d(0x365)]()[_0x1a7e6d(0x351)](_0x1a7e6d(0x105), _0x1a7e6d(0x21f)), _0x263ffa(_0x1a7e6d(0x18c))[_0x1a7e6d(0x365)]()['parent']()[_0x1a7e6d(0x365)]()[_0x1a7e6d(0x196)](_0x1a7e6d(0x22d) + _0x20b835('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x531235[_0x1a7e6d(0x23e)] + _0x1a7e6d(0x264)), _0x263ffa(_0x1a7e6d(0x18c))['parent']()[_0x1a7e6d(0x365)]()[_0x1a7e6d(0x365)]()[_0x1a7e6d(0x351)]('position', 'relative');
                    }, 0x96);
                }
            }
        }
        async function _0x4f6aaf(_0x37252f, _0x1967ee, _0x1c11cd) {
            const _0x2c1125 = _0x2f3e8e;
            if (_0x37252f) {
                _0x28c20c(!![]);
                let _0x450a5f = location[_0x2c1125(0x2a0)][_0x2c1125(0x173)]('?')['at'](0x0)[_0x2c1125(0x173)](_0x2c1125(0x283))['at'](-0x1)[_0x2c1125(0xca)]('/', ''), _0x59f92d = await _0x51f3af(_0x450a5f), _0x3b2ec3 = _0x4a2cc2(_0x59f92d[_0x2c1125(0xfd)]), _0x3ed298 = new Date()[_0x2c1125(0x1c3)]();
                _0x480d35[_0x2c1125(0x148)] && (_0x59f92d['type'] === _0x2c1125(0xba) ? _0x3ed298 = _0x3b2ec3['shortcode_media']['taken_at_timestamp'] : _0x3ed298 = _0x3b2ec3[_0x2c1125(0x340)]);
                if (_0x59f92d[_0x2c1125(0x129)] === _0x2c1125(0xba)) {
                    if (_0x1967ee && _0x3b2ec3[_0x2c1125(0xe4)][_0x2c1125(0xfa)]) {
                        if (_0x1c11cd)
                            _0x1743b2(_0x3b2ec3[_0x2c1125(0xe4)][_0x2c1125(0x31c)]);
                        else {
                            let _0x12b88e = 'mp4';
                            _0x2d1195(_0x3b2ec3['shortcode_media'][_0x2c1125(0x31c)], _0x3b2ec3[_0x2c1125(0xe4)][_0x2c1125(0x2d1)]['username'], 'reels', _0x3ed298, _0x12b88e, _0x450a5f);
                        }
                    } else {
                        if (_0x1c11cd)
                            _0x1743b2(_0x3b2ec3['shortcode_media'][_0x2c1125(0x2b9)]['at'](-0x1)[_0x2c1125(0x175)]);
                        else {
                            let _0x3b7e06 = _0x2c1125(0x1c2);
                            _0x2d1195(_0x3b2ec3[_0x2c1125(0xe4)]['display_resources']['at'](-0x1)[_0x2c1125(0x175)], _0x3b2ec3[_0x2c1125(0xe4)]['owner'][_0x2c1125(0x207)], _0x2c1125(0x2eb), _0x3ed298, _0x3b7e06, _0x450a5f);
                        }
                    }
                } else {
                    if (_0x1967ee && _0x3b2ec3[_0x2c1125(0x323)] != null) {
                        if (_0x1c11cd)
                            _0x1743b2(_0x3b2ec3[_0x2c1125(0x323)][0x0][_0x2c1125(0xf4)]);
                        else {
                            let _0x4b0b10 = _0x2c1125(0x327);
                            _0x2d1195(_0x3b2ec3[_0x2c1125(0x323)][0x0][_0x2c1125(0xf4)], _0x3b2ec3[_0x2c1125(0x2d1)][_0x2c1125(0x207)], 'reels', _0x3ed298, _0x4b0b10, _0x450a5f);
                        }
                    } else {
                        if (_0x1c11cd)
                            _0x1743b2(_0x3b2ec3[_0x2c1125(0x206)]['candidates'][0x0]['url']);
                        else {
                            let _0x5f2704 = _0x2c1125(0x1c2);
                            _0x2d1195(_0x3b2ec3['image_versions2'][_0x2c1125(0xd1)][0x0][_0x2c1125(0xf4)], _0x3b2ec3['owner'][_0x2c1125(0x207)], _0x2c1125(0x2eb), _0x3ed298, _0x5f2704, _0x450a5f);
                        }
                    }
                }
                _0x28c20c(![]);
            } else
                var _0xe36033 = setInterval(() => {
                    const _0x2c886d = _0x2c1125;
                    _0x263ffa(_0x2c886d(0x257))[_0x2c886d(0x252)] > 0x0 && (clearInterval(_0xe36033), _0x480d35['SCROLL_BUTTON'] && (_0x263ffa('#scrollWrapper')[_0x2c886d(0xcb)](), _0x263ffa('section\x20>\x20main[role=\x22main\x22]')[_0x2c886d(0x196)](_0x2c886d(0x10d)), _0x263ffa(_0x2c886d(0x236))[_0x2c886d(0x196)](_0x2c886d(0x87)), _0x263ffa(_0x2c886d(0x236))[_0x2c886d(0x196)](_0x2c886d(0x8d)), _0x263ffa(_0x2c886d(0x1e2))['on'](_0x2c886d(0x1cd), function () {
                        const _0x4dbb3f = _0x2c886d;
                        _0x263ffa(_0x4dbb3f(0x228))[0x0]['scrollBy']({
                            'top': -0x1e,
                            'behavior': _0x4dbb3f(0x2ed)
                        });
                    }), _0x263ffa('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0x2c886d(0x1cd), function () {
                        const _0x15100d = _0x2c886d;
                        _0x263ffa(_0x15100d(0x228))[0x0]['scrollBy']({
                            'top': 0x1e,
                            'behavior': _0x15100d(0x2ed)
                        });
                    })), _0x263ffa(_0x2c886d(0x1e9))[_0x2c886d(0x81)](_0x2c886d(0xf0))[_0x2c886d(0x172)](function () {
                        const _0x5e5b69 = _0x2c886d;
                        if (_0x263ffa(this)['children']()[_0x5e5b69(0x252)] > 0x0) {
                            if (!_0x263ffa(this)['children']()[_0x5e5b69(0x19c)](_0x5e5b69(0xf5))[_0x5e5b69(0x252)]) {
                                var _0x571e0f = _0x263ffa(this);
                                _0x263ffa(this)['children']()['css'](_0x5e5b69(0x105), _0x5e5b69(0x21f)), _0x263ffa(this)[_0x5e5b69(0x81)]()[_0x5e5b69(0x196)](_0x5e5b69(0x22d) + _0x20b835('DW') + _0x5e5b69(0x30d) + _0x531235[_0x5e5b69(0x23e)] + _0x5e5b69(0x264)), _0x263ffa(this)[_0x5e5b69(0x81)]()[_0x5e5b69(0x196)](_0x5e5b69(0x154) + _0x20b835('NEW_TAB') + _0x5e5b69(0x361) + _0x531235['NEW_TAB'] + _0x5e5b69(0x264)), _0x263ffa(this)[_0x5e5b69(0x81)]()[_0x5e5b69(0x196)](_0x5e5b69(0x9b) + _0x20b835(_0x5e5b69(0x181)) + _0x5e5b69(0x2e4) + _0x531235[_0x5e5b69(0x28b)] + _0x5e5b69(0x264));
                                _0x480d35[_0x5e5b69(0x25c)] && _0x263ffa(this)[_0x5e5b69(0x19c)](_0x5e5b69(0x92))['each'](function () {
                                    const _0xb349af = _0x5e5b69;
                                    _0x263ffa(this)['on'](_0xb349af(0x147), function () {
                                        const _0x5f2eb6 = _0xb349af;
                                        if (!_0x263ffa(this)[_0x5f2eb6(0xfd)](_0x5f2eb6(0x188))) {
                                            let _0x16cbf0 = _0x263ffa(this)[_0x5f2eb6(0x22b)]()[_0x5f2eb6(0x19c)](_0x5f2eb6(0x1b8))[_0x5f2eb6(0x259)]('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x16cbf0[_0x5f2eb6(0x252)] > 0x0 ? (_0x263ffa(this)['attr']('data-loop', !![]), _0x16cbf0[_0x5f2eb6(0x1c0)](_0x5f2eb6(0x1cd)), _0x347764(_0x5f2eb6(0x32a))) : (_0x263ffa(this)[_0x5f2eb6(0x146)]('data-loop', !![]), _0x263ffa(this)[_0x5f2eb6(0x365)]()['find'](_0x5f2eb6(0x28f))[_0x5f2eb6(0x299)]('style'), this[_0x5f2eb6(0x2dd)](), _0x347764(_0x5f2eb6(0x1ee)));
                                        }
                                    });
                                });
                                _0x480d35[_0x5e5b69(0x339)] && _0x263ffa(this)[_0x5e5b69(0x19c)](_0x5e5b69(0x92))[_0x5e5b69(0x172)](function () {
                                    const _0x1acc67 = _0x5e5b69;
                                    if (!_0x263ffa(this)['data'](_0x1acc67(0x30f))) {
                                        let _0xd6ed79 = _0x263ffa(this);
                                        _0x347764(_0x1acc67(0x1f6)), _0x480d35[_0x1acc67(0x1fb)] && (this[_0x1acc67(0x21a)] = _0x81f8cb['videoVolume'], _0x263ffa(this)['on']('loadstart', function () {
                                            const _0x48d6ed = _0x1acc67;
                                            this[_0x48d6ed(0x21a)] = _0x81f8cb[_0x48d6ed(0x1c5)];
                                        })), _0x263ffa(this)['on'](_0x1acc67(0x1cb), function (_0x409bf7) {
                                            const _0x8e228c = _0x1acc67;
                                            _0x409bf7['preventDefault'](), _0xd6ed79[_0x8e228c(0x351)](_0x8e228c(0x2e9), '-1'), _0xd6ed79[_0x8e228c(0x299)](_0x8e228c(0x30f));
                                        }), _0x263ffa(this)[_0x1acc67(0x365)]()[_0x1acc67(0x19c)](_0x1acc67(0x9c))[_0x1acc67(0x9a)](function () {
                                            const _0x24549d = _0x1acc67;
                                            return _0x263ffa(this)[_0x24549d(0x365)]('div[role=\x22presentation\x22]')[_0x24549d(0x252)] > 0x0 && _0x263ffa(this)['css'](_0x24549d(0x2c5)) === _0x24549d(0x7d) && _0x263ffa(this)[_0x24549d(0x146)](_0x24549d(0x28e)) != null;
                                        })[_0x1acc67(0x30e)]()['on'](_0x1acc67(0x1cb), function (_0x12fd9b) {
                                            const _0x4b24ce = _0x1acc67;
                                            _0x12fd9b[_0x4b24ce(0x202)](), _0xd6ed79['css'](_0x4b24ce(0x2e9), '2'), _0xd6ed79[_0x4b24ce(0x146)](_0x4b24ce(0x30f), !![]);
                                        }), _0x263ffa(this)['on'](_0x1acc67(0x1f1), function () {
                                            const _0xae6f5d = _0x1acc67;
                                            let _0x5aaa7a = _0x263ffa(this)[_0xae6f5d(0x365)]()[_0xae6f5d(0x19c)](_0xae6f5d(0x232))[_0xae6f5d(0x19c)](_0xae6f5d(0x2c3))['filter'](function (_0x1fb98b) {
                                                const _0x26fbde = _0xae6f5d;
                                                return _0x263ffa(this)[_0x26fbde(0x2fd)]() <= 0x40 && _0x263ffa(this)[_0x26fbde(0xd0)]() <= 0x40 && _0x263ffa(this)[_0x26fbde(0x19c)](_0x26fbde(0x2f5))['length'] > 0x0;
                                            });
                                            var _0xa80760 = _0x5aaa7a[_0xae6f5d(0x19c)](_0xae6f5d(0x1df))[_0xae6f5d(0x252)] === 0x0;
                                            this[_0xae6f5d(0x231)] != _0xa80760 && (this[_0xae6f5d(0x21a)] = _0x81f8cb[_0xae6f5d(0x1c5)], _0x5aaa7a?.[_0xae6f5d(0x1c0)]('click')), _0x263ffa(this)[_0xae6f5d(0x146)](_0xae6f5d(0xcc)) && (_0x81f8cb['videoVolume'] = this[_0xae6f5d(0x21a)], GM_setValue(_0xae6f5d(0x1cf), this[_0xae6f5d(0x21a)])), this[_0xae6f5d(0x21a)] == _0x81f8cb['videoVolume'] && _0x263ffa(this)[_0xae6f5d(0x146)](_0xae6f5d(0xcc), !![]);
                                        }), _0x263ffa(this)['css'](_0x1acc67(0x105), _0x1acc67(0x1cc)), _0x263ffa(this)[_0x1acc67(0x351)](_0x1acc67(0x2e9), '2'), _0x263ffa(this)[_0x1acc67(0x146)]('data-controls', !![]), _0x263ffa(this)['attr'](_0x1acc67(0x30f), !![]);
                                    }
                                });
                                var _0x32f8f7 = _0x571e0f[_0x5e5b69(0x19c)]('video'), _0x185b07 = _0x263ffa(this)[_0x5e5b69(0x19c)](_0x5e5b69(0x23c))[_0x5e5b69(0x30e)]();
                                _0x4ad47e(_0x32f8f7, _0x185b07, _0x5e5b69(0xaf));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x315bf7(_0x17c543, _0x398e3b) {
            const _0x2ab3d1 = _0x2f3e8e;
            try {
                _0x263ffa('.IG_POPUP_DIG\x20#post_info')[_0x2ab3d1(0x337)](_0x398e3b + _0x2ab3d1(0x8a) + _0x17c543['data'][_0x2ab3d1(0x22e)][0x0]['id']);
                const _0x3fc24b = _0x2ab3d1(0x19a);
                _0x17c543[_0x2ab3d1(0xfd)][_0x2ab3d1(0x22e)][0x0][_0x2ab3d1(0x2f1)][_0x2ab3d1(0x346)]((_0x3f9eb5, _0x2a4d9d) => {
                    const _0x43564d = _0x2ab3d1;
                    let _0x399ed9 = new Date()[_0x43564d(0x1c3)](), _0x335ef3 = Math['floor'](_0x399ed9 / 0x3e8), _0x31f6ba = _0x17c543[_0x43564d(0xfd)][_0x43564d(0x22e)][0x0]?.[_0x43564d(0x179)]?.[_0x43564d(0x207)] || _0x17c543[_0x43564d(0xfd)][_0x43564d(0x22e)][0x0]?.['owner']?.[_0x43564d(0x207)];
                    _0x480d35['RENAME_PUBLISH_DATE'] && (_0x335ef3 = _0x3f9eb5[_0x43564d(0x187)]), _0x3f9eb5[_0x43564d(0x2b9)][_0x43564d(0x1dc)](function (_0x680690, _0x3c55a5) {
                        const _0x29744b = _0x43564d;
                        if (_0x680690[_0x29744b(0x1ba)] < _0x3c55a5['config_width'])
                            return 0x1;
                        if (_0x680690[_0x29744b(0x1ba)] > _0x3c55a5[_0x29744b(0x1ba)])
                            return -0x1;
                        return 0x0;
                    }), _0x3f9eb5['is_video'] ? _0x263ffa(_0x3fc24b)[_0x43564d(0x196)](_0x43564d(0xde) + _0x3f9eb5['id'] + _0x43564d(0x223) + _0x335ef3 + _0x43564d(0x177) + _0x398e3b + _0x43564d(0x2b5) + _0x31f6ba + _0x43564d(0x2bd) + _0x3f9eb5['id'] + '\x22\x20data-globalIndex=\x22' + (_0x2a4d9d + 0x1) + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x3f9eb5[_0x43564d(0x132)][0x0][_0x43564d(0x175)] + _0x43564d(0x262) + _0x3f9eb5[_0x43564d(0x2b9)][0x0][_0x43564d(0x175)] + _0x43564d(0x333) + _0x20b835(_0x43564d(0x22a)) + _0x43564d(0x22f) + _0x2a4d9d + _0x43564d(0x12a)) : _0x263ffa(_0x3fc24b)[_0x43564d(0x196)](_0x43564d(0xde) + _0x3f9eb5['id'] + _0x43564d(0x223) + _0x335ef3 + _0x43564d(0x177) + _0x398e3b + _0x43564d(0x314) + _0x31f6ba + _0x43564d(0x2bd) + _0x3f9eb5['id'] + _0x43564d(0x240) + (_0x2a4d9d + 0x1) + _0x43564d(0xf7) + _0x3f9eb5[_0x43564d(0x2b9)][0x0][_0x43564d(0x175)] + _0x43564d(0x262) + _0x3f9eb5['display_resources'][0x0]['src'] + _0x43564d(0x89) + _0x20b835(_0x43564d(0xf3)) + _0x43564d(0x22f) + _0x2a4d9d + _0x43564d(0x12a));
                }), _0x263ffa(_0x2ab3d1(0x363))[_0x2ab3d1(0x172)](function () {
                    const _0x30aa5d = _0x2ab3d1;
                    _0x263ffa(this)[_0x30aa5d(0x222)](_0x30aa5d(0x260)), _0x263ffa(this)[_0x30aa5d(0x27e)](_0x30aa5d(0x2b1)), _0x263ffa(this)[_0x30aa5d(0xeb)](_0x30aa5d(0x154) + _0x20b835('NEW_TAB') + '\x22\x20class=\x22newTab\x22>' + _0x531235['NEW_TAB'] + _0x30aa5d(0x264)), _0x263ffa(this)[_0x30aa5d(0x146)](_0x30aa5d(0xee)) == _0x30aa5d(0x327) && _0x263ffa(this)[_0x30aa5d(0xeb)](_0x30aa5d(0x9b) + _0x20b835(_0x30aa5d(0x181)) + _0x30aa5d(0x20f) + _0x531235[_0x30aa5d(0x28b)] + '</div>');
                }), _0x28c20c(![]);
            } catch (_0x81640) {
                console[_0x2ab3d1(0x2e7)](_0x2ab3d1(0x248), _0x81640);
            }
        }
        async function _0xbb6258() {
            const _0x3fa725 = _0x2f3e8e;
            _0x28c20c(!![]);
            let _0x4cd2cf = new Date()[_0x3fa725(0x1c3)](), _0x4fb992 = Math[_0x3fa725(0x11c)](_0x4cd2cf / 0x3e8), _0x2b5869 = _0x263ffa(_0x3fa725(0xa9))[_0x3fa725(0x30e)]()[_0x3fa725(0x337)]() || location[_0x3fa725(0x1e6)]['split']('/')[_0x3fa725(0x9a)](_0x47e785 => _0x47e785[_0x3fa725(0x252)] > 0x0)['at'](0x1), _0x4957a8 = await _0x320b31(_0x2b5869), _0x5dd1a7 = _0x4957a8[_0x3fa725(0x179)]['pk'], _0x5c0b70 = await _0x14b4d5(_0x5dd1a7);
            if (_0x480d35[_0x3fa725(0x9f)]) {
                let _0x5a8b15 = 0x0;
                _0x5f376e(_0x5a8b15, _0x5c0b70[_0x3fa725(0xfd)][_0x3fa725(0x22e)][0x0][_0x3fa725(0x2f1)][_0x3fa725(0x252)]), _0x5c0b70[_0x3fa725(0xfd)][_0x3fa725(0x22e)][0x0][_0x3fa725(0x2f1)][_0x3fa725(0x346)]((_0x32401d, _0x346596) => {
                    setTimeout(() => {
                        const _0x431e16 = a0_0x5ed9;
                        _0x480d35[_0x431e16(0x148)] && (_0x4fb992 = _0x32401d[_0x431e16(0x187)]), _0x32401d['display_resources'][_0x431e16(0x1dc)](function (_0x5c1dda, _0x5de5d3) {
                            const _0x31b874 = _0x431e16;
                            if (_0x5c1dda[_0x31b874(0x1ba)] < _0x5de5d3[_0x31b874(0x1ba)])
                                return 0x1;
                            if (_0x5c1dda[_0x31b874(0x1ba)] > _0x5de5d3[_0x31b874(0x1ba)])
                                return -0x1;
                            return 0x0;
                        }), _0x32401d['is_video'] ? _0x2d1195(_0x32401d['video_resources'][0x0][_0x431e16(0x175)], _0x2b5869, _0x431e16(0x17d), _0x4fb992, _0x431e16(0x327), _0x32401d['id'])[_0x431e16(0x319)](() => {
                            const _0x1a3fca = _0x431e16;
                            _0x5f376e(++_0x5a8b15, _0x5c0b70[_0x1a3fca(0xfd)][_0x1a3fca(0x22e)][0x0]['items'][_0x1a3fca(0x252)]);
                        }) : _0x2d1195(_0x32401d[_0x431e16(0x2b9)][0x0][_0x431e16(0x175)], _0x2b5869, _0x431e16(0x17d), _0x4fb992, _0x431e16(0x1c2), _0x32401d['id'])[_0x431e16(0x319)](() => {
                            const _0x1ee851 = _0x431e16;
                            _0x5f376e(++_0x5a8b15, _0x5c0b70[_0x1ee851(0xfd)][_0x1ee851(0x22e)][0x0][_0x1ee851(0x2f1)][_0x1ee851(0x252)]);
                        });
                    }, 0x64 * _0x346596);
                });
            } else
                _0x426983(![], !![]), _0x315bf7(_0x5c0b70, _0x3fa725(0x17d));
        }
        async function _0x160299(_0x1f224a, _0x2ad22d, _0x149573) {
            const _0x1a3986 = _0x2f3e8e;
            var _0x53c9cb = _0x263ffa(_0x1a3986(0xa9))[_0x1a3986(0x30e)]()['text']() || location[_0x1a3986(0x1e6)][_0x1a3986(0x173)]('/')['filter'](_0x3a5502 => _0x3a5502[_0x1a3986(0x252)] > 0x0)['at'](0x1);
            if (_0x1f224a) {
                let _0x14a49b = new Date()[_0x1a3986(0x1c3)](), _0x4171cb = Math['floor'](_0x14a49b / 0x3e8);
                _0x28c20c(!![]);
                if (_0x480d35[_0x1a3986(0x23b)] && !_0x81f8cb[_0x1a3986(0x359)]) {
                    let _0x3cb03e = null, _0xa369b5 = await _0x320b31(_0x53c9cb), _0xf94142 = _0xa369b5['user']['pk'], _0x53ed8b = await _0x14b4d5(_0xf94142), _0x25d13a = location[_0x1a3986(0x1e6)][_0x1a3986(0x173)]('/')[_0x1a3986(0x9a)](_0x5df437 => _0x5df437[_0x1a3986(0x252)] > 0x0 && _0x5df437['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x53ed8b[_0x1a3986(0xfd)][_0x1a3986(0x22e)][0x0]['items'][_0x1a3986(0x346)](_0x522542 => {
                        _0x522542['id'] == _0x25d13a && (_0x3cb03e = _0x522542['id']);
                    });
                    if (_0x3cb03e == null) {
                        let _0x5316a0 = _0x3c274f(_0x53c9cb);
                        _0x5316a0[_0x1a3986(0x172)](function (_0x4c3b8f) {
                            const _0x11ee16 = _0x1a3986;
                            _0x263ffa(this)[_0x11ee16(0x81)]()['length'] > 0x0 && (_0x3cb03e = _0x53ed8b[_0x11ee16(0xfd)][_0x11ee16(0x22e)][0x0][_0x11ee16(0x2f1)][_0x4c3b8f]['id']);
                        });
                    }
                    _0x3cb03e == null && (_0x263ffa(_0x1a3986(0x102))[_0x1a3986(0x172)](function (_0x250687) {
                        const _0x2202f0 = _0x1a3986;
                        _0x263ffa(this)[_0x2202f0(0x2cd)]('x1lix1fw') && (_0x263ffa(this)['children']()[_0x2202f0(0x252)] > 0x0 && (_0x3cb03e = _0x53ed8b[_0x2202f0(0xfd)][_0x2202f0(0x22e)][0x0][_0x2202f0(0x2f1)][_0x250687]['id']));
                    }), _0x263ffa(_0x1a3986(0x29b))['each'](function (_0x48eeb0) {
                        const _0x4a7ee7 = _0x1a3986;
                        _0x263ffa(this)[_0x4a7ee7(0x81)]()[_0x4a7ee7(0x2cd)](_0x4a7ee7(0x210)) && (_0x3cb03e = _0x53ed8b[_0x4a7ee7(0xfd)][_0x4a7ee7(0x22e)][0x0][_0x4a7ee7(0x2f1)][_0x48eeb0]['id']);
                    }));
                    _0x3cb03e == null && (_0x3cb03e = location[_0x1a3986(0x1e6)][_0x1a3986(0x173)]('/')[_0x1a3986(0x9a)](_0x1d3985 => _0x1d3985[_0x1a3986(0x252)] > 0x0 && _0x1d3985[_0x1a3986(0x305)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x346fd6 = await _0xa419dc(_0x3cb03e);
                    _0x480d35[_0x1a3986(0x148)] && (_0x4171cb = _0x346fd6[_0x1a3986(0x2f1)][0x0][_0x1a3986(0x340)]);
                    _0x346fd6[_0x1a3986(0xd4)] === 'ok' ? _0x346fd6[_0x1a3986(0x2f1)][0x0][_0x1a3986(0x323)] ? _0x149573 ? _0x1743b2(_0x346fd6[_0x1a3986(0x2f1)][0x0][_0x1a3986(0x323)][0x0]['url']) : _0x2d1195(_0x346fd6[_0x1a3986(0x2f1)][0x0][_0x1a3986(0x323)][0x0]['url'], _0x53c9cb, 'stories', _0x4171cb, _0x1a3986(0x327), _0x3cb03e) : _0x149573 ? _0x1743b2(_0x346fd6[_0x1a3986(0x2f1)][0x0]['image_versions2'][_0x1a3986(0xd1)][0x0][_0x1a3986(0xf4)]) : _0x2d1195(_0x346fd6[_0x1a3986(0x2f1)][0x0][_0x1a3986(0x206)][_0x1a3986(0xd1)][0x0]['url'], _0x53c9cb, _0x1a3986(0x17d), _0x4171cb, 'jpg', _0x3cb03e) : (_0x480d35[_0x1a3986(0xc6)] ? (_0x81f8cb[_0x1a3986(0x359)] = !![], _0x160299(_0x1f224a, _0x2ad22d, _0x149573)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x346fd6[_0x1a3986(0x1b4)]), _0x347764(_0x346fd6));
                    _0x28c20c(![]);
                    return;
                }
                if (_0x263ffa(_0x1a3986(0x1c8))['length'] > 0x0) {
                    let _0x1b6a95 = 'mp4', _0x3ae101 = '', _0x1ff00e = location[_0x1a3986(0x1e6)]['replace'](/\/$/ig, '')[_0x1a3986(0x173)]('/')['at'](-0x1), _0x2e825d = null;
                    if (_0x81f8cb[_0x1a3986(0xef)][_0x1a3986(0x17d)][_0x53c9cb] && !_0x2ad22d) {
                        _0x347764('Fetch\x20from\x20memory\x20cache:', _0x53c9cb), _0x81f8cb[_0x1a3986(0xef)][_0x1a3986(0x17d)][_0x53c9cb]['data'][_0x1a3986(0x22e)][0x0][_0x1a3986(0x2f1)][_0x1a3986(0x346)](_0x388d93 => {
                            const _0x36b843 = _0x1a3986;
                            _0x388d93['id'] == _0x1ff00e && (_0x3ae101 = _0x388d93[_0x36b843(0x132)][0x0]['src'], _0x480d35[_0x36b843(0x148)] && (_0x4171cb = _0x388d93['taken_at_timestamp'], _0x2e825d = _0x388d93['id']));
                        });
                        if (_0x3ae101[_0x1a3986(0x252)] == 0x0) {
                            _0x347764('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x53c9cb), _0x160299(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x402ad5 = await _0x320b31(_0x53c9cb), _0x36a242 = _0x402ad5[_0x1a3986(0x179)]['pk'], _0x4734a4 = await _0x14b4d5(_0x36a242);
                        _0x4734a4[_0x1a3986(0xfd)][_0x1a3986(0x22e)][0x0][_0x1a3986(0x2f1)]['forEach'](_0x4dec59 => {
                            const _0x24cfce = _0x1a3986;
                            _0x4dec59['id'] == _0x1ff00e && (_0x3ae101 = _0x4dec59['video_resources'][0x0][_0x24cfce(0x175)], _0x480d35[_0x24cfce(0x148)] && (_0x4171cb = _0x4dec59[_0x24cfce(0x187)], _0x2e825d = _0x4dec59['id']));
                        });
                        if (_0x3ae101[_0x1a3986(0x252)] == 0x0) {
                            let _0x5b686a = _0x3c274f(_0x53c9cb);
                            _0x5b686a['each'](function (_0x3eb13e) {
                                const _0x28ef31 = _0x1a3986;
                                _0x263ffa(this)[_0x28ef31(0x81)]()[_0x28ef31(0x252)] > 0x0 && (_0x3ae101 = _0x4734a4[_0x28ef31(0xfd)]['reels_media'][0x0]['items'][_0x3eb13e][_0x28ef31(0x132)][0x0][_0x28ef31(0x175)], _0x480d35['RENAME_PUBLISH_DATE'] && (_0x4171cb = _0x4734a4[_0x28ef31(0xfd)][_0x28ef31(0x22e)][0x0][_0x28ef31(0x2f1)][_0x3eb13e][_0x28ef31(0x187)], _0x2e825d = _0x4734a4[_0x28ef31(0xfd)][_0x28ef31(0x22e)][0x0]['items'][_0x3eb13e]['id']));
                            }), _0x3ae101[_0x1a3986(0x252)] == 0x0 && (_0x263ffa(_0x1a3986(0x102))[_0x1a3986(0x172)](function (_0x58e1f7) {
                                const _0x19ae71 = _0x1a3986;
                                _0x263ffa(this)[_0x19ae71(0x2cd)]('x1lix1fw') && (_0x263ffa(this)[_0x19ae71(0x81)]()[_0x19ae71(0x252)] > 0x0 && (_0x3ae101 = _0x4734a4[_0x19ae71(0xfd)]['reels_media'][0x0]['items'][_0x58e1f7][_0x19ae71(0x132)][0x0][_0x19ae71(0x175)], _0x480d35[_0x19ae71(0x148)] && (_0x4171cb = _0x4734a4['data'][_0x19ae71(0x22e)][0x0][_0x19ae71(0x2f1)][_0x58e1f7][_0x19ae71(0x187)], _0x2e825d = _0x4734a4[_0x19ae71(0xfd)][_0x19ae71(0x22e)][0x0][_0x19ae71(0x2f1)][_0x58e1f7]['id'])));
                            }), _0x263ffa(_0x1a3986(0x29b))[_0x1a3986(0x172)](function (_0x2e1563) {
                                const _0x460220 = _0x1a3986;
                                _0x263ffa(this)['children']()[_0x460220(0x2cd)](_0x460220(0x210)) && (_0x3ae101 = _0x4734a4['data'][_0x460220(0x22e)][0x0][_0x460220(0x2f1)][_0x2e1563][_0x460220(0x132)][0x0][_0x460220(0x175)], _0x480d35[_0x460220(0x148)] && (_0x4171cb = _0x4734a4[_0x460220(0xfd)][_0x460220(0x22e)][0x0]['items'][_0x2e1563]['taken_at_timestamp'], _0x2e825d = _0x4734a4[_0x460220(0xfd)][_0x460220(0x22e)][0x0][_0x460220(0x2f1)][_0x2e1563]['id']));
                            }));
                        }
                        _0x81f8cb[_0x1a3986(0xef)]['stories'][_0x53c9cb] = _0x4734a4;
                    }
                    _0x3ae101[_0x1a3986(0x252)] == 0x0 ? alert(_0x20b835(_0x1a3986(0x193))) : _0x149573 ? _0x1743b2(_0x3ae101) : _0x2d1195(_0x3ae101, _0x53c9cb, _0x1a3986(0x17d), _0x4171cb, _0x1b6a95, _0x2e825d);
                } else {
                    let _0x4e249d = _0x263ffa(_0x1a3986(0x29a))[_0x1a3986(0x146)](_0x1a3986(0x2fe))?.[_0x1a3986(0x173)](',')[0x0]?.['split']('\x20')[0x0], _0x3dbb37 = _0x4e249d ? _0x4e249d : _0x263ffa(_0x1a3986(0x29a))[_0x1a3986(0x9a)](function () {
                            const _0x45c839 = _0x1a3986;
                            return _0x263ffa(this)['parents']('a')['length'] === 0x0 && _0x263ffa(this)[_0x45c839(0x2fd)]() === _0x263ffa(this)[_0x45c839(0x365)]()[_0x45c839(0x2fd)]();
                        })['attr']('src');
                    if (!_0x3dbb37) {
                        let _0x301af5 = _0x263ffa(_0x1a3986(0x25a));
                        _0x3dbb37 = _0x301af5[_0x1a3986(0x146)](_0x1a3986(0x2fe)) ? _0x301af5[_0x1a3986(0x146)](_0x1a3986(0x2fe))?.[_0x1a3986(0x173)](',')[0x0]?.[_0x1a3986(0x173)]('\x20')[0x0] : _0x301af5['attr'](_0x1a3986(0x175));
                    }
                    _0x480d35[_0x1a3986(0x148)] && (_0x4171cb = new Date(_0x263ffa(_0x1a3986(0x2de))['first']()['attr'](_0x1a3986(0x1bd)))[_0x1a3986(0x1c3)]());
                    let _0x1a7f17 = _0x3dbb37, _0x41301f = _0x1a3986(0x1c2);
                    _0x149573 ? _0x1743b2(_0x1a7f17) : _0x2d1195(_0x1a7f17, _0x53c9cb, _0x1a3986(0x17d), _0x4171cb, _0x41301f, _0x4b1647(_0x1a7f17) ?? '');
                }
                _0x81f8cb[_0x1a3986(0x359)] = ![], _0x28c20c(![]);
            } else {
                if (!_0x263ffa(_0x1a3986(0x163))[_0x1a3986(0x252)]) {
                    _0x81f8cb[_0x1a3986(0xef)][_0x1a3986(0x17d)] = {};
                    let _0x3e3a40 = null;
                    _0x263ffa(_0x1a3986(0x218))[_0x1a3986(0x252)] > 0x0 ? _0x3e3a40 = _0x263ffa(_0x1a3986(0x31b)) : (_0x3e3a40 = _0x263ffa(_0x1a3986(0x17c)), _0x3e3a40['css'](_0x1a3986(0x105), _0x1a3986(0x21f)));
                    _0x3e3a40['length'] === 0x0 && (_0x3e3a40 = _0x263ffa(_0x1a3986(0xf6))[_0x1a3986(0x365)]()[_0x1a3986(0x365)]()[_0x1a3986(0x365)]()[_0x1a3986(0x19c)](_0x1a3986(0x106)), _0x3e3a40[_0x1a3986(0x351)](_0x1a3986(0x105), 'relative'));
                    _0x3e3a40['length'] === 0x0 && (_0x3e3a40 = _0x263ffa('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x1a3986(0x365)]()[_0x1a3986(0x365)]()['parent']()['find']('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x3e3a40[_0x1a3986(0x351)](_0x1a3986(0x105), _0x1a3986(0x21f)));
                    if (_0x3e3a40[_0x1a3986(0x252)] === 0x0) {
                        let _0x2d4c90 = _0x263ffa(_0x1a3986(0x95)), _0x276b27 = 0x0;
                        _0x2d4c90[_0x1a3986(0x172)](function () {
                            const _0x1f044a = _0x1a3986;
                            _0x263ffa(this)[_0x1f044a(0x2fd)]() > _0x276b27 && (_0x276b27 = _0x263ffa(this)['width'](), _0x3e3a40 = _0x263ffa(this)['children'](_0x1f044a(0xf0))[_0x1f044a(0x30e)]());
                        });
                    }
                    if (_0x3e3a40 != null) {
                        _0x3e3a40['first']()[_0x1a3986(0x351)](_0x1a3986(0x105), 'relative'), _0x3e3a40['first']()[_0x1a3986(0x196)](_0x1a3986(0x22d) + _0x20b835('DW') + _0x1a3986(0x174) + _0x531235[_0x1a3986(0x23e)] + _0x1a3986(0x264)), _0x3e3a40['first']()['append'](_0x1a3986(0x154) + _0x20b835(_0x1a3986(0x21c)) + _0x1a3986(0x1c6) + _0x531235[_0x1a3986(0x21c)] + _0x1a3986(0x264));
                        let _0x49136c = _0x3c274f(_0x53c9cb);
                        _0x49136c[_0x1a3986(0x252)] > 0x1 && _0x3e3a40[_0x1a3986(0x30e)]()['append'](_0x1a3986(0x118) + _0x20b835('DW_ALL') + _0x1a3986(0x21b) + _0x531235[_0x1a3986(0x14e)] + _0x1a3986(0x264)), _0x3e3a40['find'](_0x1a3986(0x26c))[_0x1a3986(0x172)](function () {
                            const _0x379ad9 = _0x1a3986;
                            _0x263ffa(this)['on'](_0x379ad9(0x27b), function () {
                                const _0x31aaf7 = _0x379ad9;
                                !_0x263ffa(this)['data'](_0x31aaf7(0x30c)) && (_0x3e3a40[_0x31aaf7(0x19c)]('.IG_DWSTORY_THUMBNAIL')[_0x31aaf7(0x252)] === 0x0 ? (_0x263ffa(this)[_0x31aaf7(0x146)](_0x31aaf7(0x2a8), !![]), _0x263ffa('.IG_DWSTORY_THUMBNAIL')[_0x31aaf7(0xcb)](), _0x347764('(story)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x263ffa(this)[_0x31aaf7(0x146)](_0x31aaf7(0x2a8), !![]), _0x347764('(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x102da3(_0x4fb3df, _0x5e6a1e) {
            const _0x2bd21b = _0x2f3e8e;
            if (_0x4fb3df) {
                let _0x2b9f9c = new Date()[_0x2bd21b(0x1c3)](), _0x1fb65c = Math[_0x2bd21b(0x11c)](_0x2b9f9c / 0x3e8), _0x29aafb = _0x2bd21b(0x1c2), _0x344769 = _0x263ffa(_0x2bd21b(0xa9))[_0x2bd21b(0x30e)]()[_0x2bd21b(0x337)]() || location[_0x2bd21b(0x1e6)]['split']('/')['at'](0x2), _0x1c1094 = location[_0x2bd21b(0x1e6)][_0x2bd21b(0x250)](/\/$/ig, '')[_0x2bd21b(0x173)]('/')['at'](-0x1), _0x56e25e = '', _0x31f051 = null;
                _0x28c20c(!![]);
                if (_0x480d35['FORCE_RESOURCE_VIA_MEDIA'] && !_0x81f8cb[_0x2bd21b(0x359)]) {
                    let _0x40d067 = await _0x320b31(_0x344769), _0x25a946 = _0x40d067[_0x2bd21b(0x179)]['pk'], _0x5e5d65 = await _0x14b4d5(_0x25a946), _0x5c81a5 = location['pathname'][_0x2bd21b(0x173)]('/')[_0x2bd21b(0x9a)](_0xf48201 => _0xf48201['length'] > 0x0 && _0xf48201['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x5e5d65[_0x2bd21b(0xfd)][_0x2bd21b(0x22e)][0x0][_0x2bd21b(0x2f1)][_0x2bd21b(0x346)](_0x903558 => {
                        _0x903558['id'] == _0x5c81a5 && (_0x31f051 = _0x903558['id']);
                    });
                    if (_0x31f051 == null) {
                        let _0x26f03f = _0x3c274f(_0x344769);
                        _0x26f03f['each'](function (_0x3bcf6c) {
                            const _0x3200ec = _0x2bd21b;
                            _0x263ffa(this)['children']()[_0x3200ec(0x252)] > 0x0 && (_0x31f051 = _0x5e5d65[_0x3200ec(0xfd)][_0x3200ec(0x22e)][0x0]['items'][_0x3bcf6c]['id']);
                        });
                    }
                    _0x31f051 == null && (_0x263ffa(_0x2bd21b(0x102))[_0x2bd21b(0x172)](function (_0x51d30e) {
                        const _0x35983 = _0x2bd21b;
                        _0x263ffa(this)[_0x35983(0x2cd)](_0x35983(0x1fa)) && (_0x263ffa(this)['children']()[_0x35983(0x252)] > 0x0 && (_0x31f051 = _0x5e5d65[_0x35983(0xfd)][_0x35983(0x22e)][0x0][_0x35983(0x2f1)][_0x51d30e]['id']));
                    }), _0x263ffa('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x2bd21b(0x172)](function (_0x16e0a6) {
                        const _0x5d8a49 = _0x2bd21b;
                        _0x263ffa(this)[_0x5d8a49(0x81)]()[_0x5d8a49(0x2cd)](_0x5d8a49(0x210)) && (_0x31f051 = _0x5e5d65[_0x5d8a49(0xfd)][_0x5d8a49(0x22e)][0x0][_0x5d8a49(0x2f1)][_0x16e0a6]['id']);
                    }));
                    _0x31f051 == null && (_0x31f051 = location[_0x2bd21b(0x1e6)][_0x2bd21b(0x173)]('/')[_0x2bd21b(0x9a)](_0x43a4d4 => _0x43a4d4['length'] > 0x0 && _0x43a4d4['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x549c33 = await _0xa419dc(_0x31f051);
                    _0x480d35[_0x2bd21b(0x148)] && (_0x1fb65c = _0x549c33[_0x2bd21b(0x2f1)][0x0][_0x2bd21b(0x340)]);
                    _0x549c33['status'] === 'ok' ? _0x2d1195(_0x549c33['items'][0x0][_0x2bd21b(0x206)][_0x2bd21b(0xd1)][0x0]['url'], _0x344769, _0x2bd21b(0x17d), _0x1fb65c, _0x2bd21b(0x1c2), _0x31f051) : (_0x480d35['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x81f8cb['tempFetchRateLimit'] = !![], _0x102da3(!![], _0x5e6a1e)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x549c33[_0x2bd21b(0x1b4)]), _0x347764(_0x549c33));
                    _0x28c20c(![]);
                    return;
                }
                if (_0x81f8cb['GL_dataCache']['stories'][_0x344769] && !_0x5e6a1e) {
                    _0x347764('Fetch\x20from\x20memory\x20cache:', _0x344769), _0x81f8cb[_0x2bd21b(0xef)][_0x2bd21b(0x17d)][_0x344769]['data'][_0x2bd21b(0x22e)][0x0][_0x2bd21b(0x2f1)][_0x2bd21b(0x346)](_0x4152ae => {
                        const _0x2c2795 = _0x2bd21b;
                        _0x4152ae['id'] == _0x1c1094 && (_0x56e25e = _0x4152ae[_0x2c2795(0x328)], _0x480d35['RENAME_PUBLISH_DATE'] && (_0x1fb65c = _0x4152ae['taken_at_timestamp'], _0x31f051 = _0x4152ae['id']));
                    });
                    if (_0x56e25e[_0x2bd21b(0x252)] == 0x0) {
                        _0x347764(_0x2bd21b(0x83), _0x344769), _0x102da3(!![], !![]);
                        return;
                    }
                } else {
                    let _0x304225 = await _0x320b31(_0x344769), _0x3b164f = _0x304225[_0x2bd21b(0x179)]['pk'], _0xc686e1 = await _0x14b4d5(_0x3b164f);
                    _0xc686e1[_0x2bd21b(0xfd)][_0x2bd21b(0x22e)][0x0][_0x2bd21b(0x2f1)][_0x2bd21b(0x346)](_0x4a77f9 => {
                        const _0x45955c = _0x2bd21b;
                        _0x4a77f9['id'] == _0x1c1094 && (_0x56e25e = _0x4a77f9[_0x45955c(0x328)], _0x480d35[_0x45955c(0x148)] && (_0x1fb65c = _0x4a77f9[_0x45955c(0x187)], _0x31f051 = _0x4a77f9['id']));
                    });
                    if (_0x56e25e['length'] == 0x0) {
                        let _0x5a1225 = _0x3c274f(_0x344769);
                        _0x5a1225[_0x2bd21b(0x172)](function (_0x259cf9) {
                            const _0x2c6bbf = _0x2bd21b;
                            _0x263ffa(this)[_0x2c6bbf(0x81)]()['length'] > 0x0 && (_0x56e25e = _0xc686e1[_0x2c6bbf(0xfd)][_0x2c6bbf(0x22e)][0x0][_0x2c6bbf(0x2f1)][_0x259cf9][_0x2c6bbf(0x328)], _0x480d35[_0x2c6bbf(0x148)] && (_0x1fb65c = _0xc686e1[_0x2c6bbf(0xfd)][_0x2c6bbf(0x22e)][0x0][_0x2c6bbf(0x2f1)][_0x259cf9][_0x2c6bbf(0x187)], _0x31f051 = _0xc686e1[_0x2c6bbf(0xfd)][_0x2c6bbf(0x22e)][0x0][_0x2c6bbf(0x2f1)][_0x259cf9]['id']));
                        }), _0x56e25e['length'] == 0x0 && (_0x263ffa('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x2bd21b(0x172)](function (_0x2ecbc0) {
                            const _0x56e3b7 = _0x2bd21b;
                            _0x263ffa(this)[_0x56e3b7(0x2cd)](_0x56e3b7(0x1fa)) && (_0x263ffa(this)[_0x56e3b7(0x81)]()[_0x56e3b7(0x252)] > 0x0 && (_0x56e25e = _0xc686e1[_0x56e3b7(0xfd)][_0x56e3b7(0x22e)][0x0][_0x56e3b7(0x2f1)][_0x2ecbc0][_0x56e3b7(0x328)], _0x480d35[_0x56e3b7(0x148)] && (_0x1fb65c = _0xc686e1[_0x56e3b7(0xfd)][_0x56e3b7(0x22e)][0x0][_0x56e3b7(0x2f1)][_0x2ecbc0][_0x56e3b7(0x187)], _0x31f051 = _0xc686e1[_0x56e3b7(0xfd)][_0x56e3b7(0x22e)][0x0][_0x56e3b7(0x2f1)][_0x2ecbc0]['id'])));
                        }), _0x263ffa(_0x2bd21b(0x29b))['each'](function (_0x52db50) {
                            const _0x19d97a = _0x2bd21b;
                            _0x263ffa(this)[_0x19d97a(0x81)]()['hasClass'](_0x19d97a(0x210)) && (_0x56e25e = _0xc686e1[_0x19d97a(0xfd)]['reels_media'][0x0][_0x19d97a(0x2f1)][_0x52db50][_0x19d97a(0x328)], _0x480d35['RENAME_PUBLISH_DATE'] && (_0x1fb65c = _0xc686e1['data'][_0x19d97a(0x22e)][0x0][_0x19d97a(0x2f1)][_0x52db50][_0x19d97a(0x187)], _0x31f051 = _0xc686e1[_0x19d97a(0xfd)][_0x19d97a(0x22e)][0x0]['items'][_0x52db50]['id']));
                        }));
                    }
                }
                _0x2d1195(_0x56e25e, _0x344769, _0x2bd21b(0x26e), _0x1fb65c, _0x29aafb, _0x31f051), _0x81f8cb[_0x2bd21b(0x359)] = ![], _0x28c20c(![]);
            } else {
                if (_0x263ffa('body\x20>\x20div\x20div.IG_DWSTORY')[_0x2bd21b(0x365)]()[_0x2bd21b(0x19c)](_0x2bd21b(0x1f9))[_0x2bd21b(0x252)]) {
                    let _0x54cfb9 = null;
                    _0x263ffa(_0x2bd21b(0x218))[_0x2bd21b(0x252)] > 0x0 ? _0x54cfb9 = _0x263ffa(_0x2bd21b(0x31b)) : (_0x54cfb9 = _0x263ffa(_0x2bd21b(0x17c)), _0x54cfb9[_0x2bd21b(0x351)](_0x2bd21b(0x105), _0x2bd21b(0x21f)));
                    _0x54cfb9['length'] === 0x0 && (_0x54cfb9 = _0x263ffa('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x2bd21b(0x365)]()['parent']()[_0x2bd21b(0x365)]()[_0x2bd21b(0x19c)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x54cfb9['css'](_0x2bd21b(0x105), 'relative'));
                    _0x54cfb9['length'] === 0x0 && (_0x54cfb9 = _0x263ffa(_0x2bd21b(0xf6))[_0x2bd21b(0x365)]()[_0x2bd21b(0x365)]()['parent']()['find'](_0x2bd21b(0x183)), _0x54cfb9['css'](_0x2bd21b(0x105), 'relative'));
                    if (_0x54cfb9[_0x2bd21b(0x252)] === 0x0) {
                        let _0x523cd2 = _0x263ffa(_0x2bd21b(0x95)), _0x47859e = 0x0;
                        _0x523cd2[_0x2bd21b(0x172)](function () {
                            const _0x28f359 = _0x2bd21b;
                            _0x263ffa(this)[_0x28f359(0x2fd)]() > _0x47859e && (_0x47859e = _0x263ffa(this)['width'](), _0x54cfb9 = _0x263ffa(this)[_0x28f359(0x81)]('div')[_0x28f359(0x30e)]());
                        });
                    }
                    _0x54cfb9 != null && (_0x54cfb9[_0x2bd21b(0x30e)]()[_0x2bd21b(0x351)](_0x2bd21b(0x105), _0x2bd21b(0x21f)), _0x54cfb9[_0x2bd21b(0x30e)]()['append'](_0x2bd21b(0x9b) + _0x20b835(_0x2bd21b(0x181)) + _0x2bd21b(0xc5) + _0x531235['THUMBNAIL'] + _0x2bd21b(0x264)));
                }
            }
        }
        function _0x4bbdb7(_0x29dc3d) {
            return new Promise((_0xab24af, _0x23e4a9) => {
                const _0x3e7364 = a0_0x5ed9;
                let _0x2ce2ae = _0x3e7364(0x233) + _0x29dc3d + _0x3e7364(0x271);
                GM_xmlhttpRequest({
                    'method': _0x3e7364(0x261),
                    'url': _0x2ce2ae,
                    'onload': function (_0x5d1429) {
                        const _0x2af97b = _0x3e7364;
                        try {
                            let _0x3a42f3 = JSON[_0x2af97b(0x355)](_0x5d1429[_0x2af97b(0x19d)]);
                            _0xab24af(_0x3a42f3);
                        } catch (_0x56436e) {
                            _0x347764(_0x2af97b(0xf8), _0x2af97b(0x34d), _0x56436e['message']), _0x23e4a9(_0x56436e);
                        }
                    },
                    'onerror': function (_0x35c7c3) {
                        const _0x40c794 = _0x3e7364;
                        _0x347764(_0x40c794(0xf8), 'reject', _0x35c7c3), _0x23e4a9(_0x35c7c3);
                    }
                });
            });
        }
        function _0x14b4d5(_0xb82fb8) {
            return new Promise((_0x44cf06, _0x305559) => {
                const _0x2e4782 = a0_0x5ed9;
                let _0x137a87 = _0x2e4782(0x200) + _0xb82fb8 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x137a87,
                    'onload': function (_0x15170d) {
                        const _0x524efe = _0x2e4782;
                        try {
                            let _0x3cfe25 = JSON[_0x524efe(0x355)](_0x15170d['response']);
                            _0x347764(_0x524efe(0x289), _0x3cfe25), _0x44cf06(_0x3cfe25);
                        } catch (_0x459f42) {
                            _0x347764(_0x524efe(0x289), _0x524efe(0x34d), _0x459f42[_0x524efe(0x1b4)]), _0x305559(_0x459f42);
                        }
                    },
                    'onerror': function (_0x3ab59f) {
                        const _0x1cf9f4 = _0x2e4782;
                        _0x347764(_0x1cf9f4(0x289), 'reject', _0x3ab59f), _0x305559(_0x3ab59f);
                    }
                });
            });
        }
        function _0x320b31(_0x5a419e) {
            return new Promise((_0x1fdbcf, _0xa1f204) => {
                const _0x2228a3 = a0_0x5ed9;
                let _0x3f438f = _0x2228a3(0xd9) + _0x5a419e;
                GM_xmlhttpRequest({
                    'method': _0x2228a3(0x261),
                    'url': _0x3f438f,
                    'onload': function (_0x5005eb) {
                        const _0x1a3c36 = _0x2228a3;
                        let _0x9d67e6 = JSON[_0x1a3c36(0x355)](_0x5005eb['response']), _0x4ed673 = null;
                        _0x9d67e6[_0x1a3c36(0x2f8)][_0x1a3c36(0x346)](_0x2c4914 => {
                            const _0x5da13f = _0x1a3c36;
                            _0x2c4914[_0x5da13f(0x179)][_0x5da13f(0x207)]?.[_0x5da13f(0x13c)]() === _0x5a419e?.[_0x5da13f(0x13c)]() && (_0x4ed673 = _0x2c4914);
                        }), _0x4ed673 != null ? (_0x347764(_0x1a3c36(0x1b7), _0x4ed673), _0x1fdbcf(_0x4ed673)) : _0x207a30(_0x5a419e)['then'](_0x3c0ee3 => {
                            _0x1fdbcf(_0x3c0ee3);
                        })[_0x1a3c36(0x2fc)](_0x52a936 => {
                            alert('Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()');
                        });
                    },
                    'onerror': function (_0x4bf326) {
                        const _0x3f91ab = _0x2228a3;
                        _0x347764(_0x3f91ab(0x1b7), _0x3f91ab(0x34d), _0x4bf326), _0xa1f204(_0x4bf326);
                    }
                });
            });
        }
        function _0x207a30(_0x4b16de) {
            return new Promise((_0x192127, _0x2de7e7) => {
                const _0x3968c7 = a0_0x5ed9;
                let _0x23316d = _0x3968c7(0x281) + _0x4b16de;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x23316d,
                    'headers': { 'X-IG-App-ID': _0x463409() },
                    'onload': function (_0x53813a) {
                        const _0x574d4b = _0x3968c7;
                        try {
                            let _0x543d2f = JSON[_0x574d4b(0x355)](_0x53813a[_0x574d4b(0x19d)]), _0x2b8f4e = _0x543d2f?.[_0x574d4b(0xfd)]?.[_0x574d4b(0x179)];
                            if (_0x2b8f4e != null) {
                                let _0x4681e9 = _0x543d2f?.[_0x574d4b(0xfd)];
                                _0x4681e9[_0x574d4b(0x179)]['pk'] = _0x4681e9[_0x574d4b(0x179)]['id'], _0x347764(_0x574d4b(0x165), _0x543d2f), _0x192127(_0x4681e9);
                            } else
                                _0x347764(_0x574d4b(0x165), _0x574d4b(0x34d), _0x574d4b(0xcf)), _0x2de7e7(_0x574d4b(0xcf));
                        } catch (_0x26f8f8) {
                            _0x347764(_0x574d4b(0x165), 'reject', _0x26f8f8[_0x574d4b(0x1b4)]), _0x2de7e7(_0x26f8f8);
                        }
                    },
                    'onerror': function (_0x4c2e37) {
                        const _0x19c740 = _0x3968c7;
                        _0x347764(_0x19c740(0x165), _0x19c740(0x34d), _0x4c2e37), _0x2de7e7(_0x4c2e37);
                    }
                });
            });
        }
        function _0x58ac51(_0x109276) {
            return new Promise((_0x4f4fea, _0x215747) => {
                const _0x4ffbc5 = a0_0x5ed9;
                let _0x4bdda9 = 'https://i.instagram.com/api/v1/users/' + _0x109276 + _0x4ffbc5(0x1ab);
                GM_xmlhttpRequest({
                    'method': _0x4ffbc5(0x261),
                    'url': _0x4bdda9,
                    'headers': { 'User-Agent': _0x4ffbc5(0x35c) },
                    'onload': function (_0x2b0b18) {
                        const _0xdeddbc = _0x4ffbc5;
                        try {
                            let _0x320b79 = JSON[_0xdeddbc(0x355)](_0x2b0b18[_0xdeddbc(0x19d)]);
                            _0x320b79['status'] !== 'ok' ? (_0x347764('getUserHighSizeProfile()', _0xdeddbc(0x34d), _0x320b79), _0x215747(_0xdeddbc(0x326))) : (_0x347764(_0xdeddbc(0x1b1), _0x320b79), _0x4f4fea(_0x320b79[_0xdeddbc(0x179)]['hd_profile_pic_url_info']?.['url']));
                        } catch (_0x3b3eab) {
                            _0x347764(_0xdeddbc(0x1b1), 'reject', _0x3b3eab), _0x215747(_0x3b3eab);
                        }
                    },
                    'onerror': function (_0x3969b5) {
                        const _0xb3f85c = _0x4ffbc5;
                        _0x347764(_0xb3f85c(0x1b1), _0xb3f85c(0x34d), _0x3969b5), _0x215747(_0x3969b5);
                    }
                });
            });
        }
        function _0x12ffc2(_0x2cf75a) {
            return new Promise((_0x4cbbb8, _0x34cb1b) => {
                const _0x54131a = a0_0x5ed9;
                if (!_0x2cf75a)
                    _0x34cb1b('NOPATH');
                let _0x4c36c7 = _0x2cf75a, _0x102077 = _0x54131a(0x16a) + _0x4c36c7 + _0x54131a(0xa3);
                GM_xmlhttpRequest({
                    'method': _0x54131a(0x261),
                    'url': _0x102077,
                    'onload': function (_0x3f58b3) {
                        const _0x41559f = _0x54131a;
                        try {
                            let _0x56eb6f = JSON[_0x41559f(0x355)](_0x3f58b3[_0x41559f(0x19d)]);
                            _0x347764(_0x41559f(0x345), _0x56eb6f), _0x4cbbb8(_0x56eb6f['data'][_0x41559f(0xe4)][_0x41559f(0x2d1)][_0x41559f(0x207)]);
                        } catch (_0x55663a) {
                            _0x347764(_0x41559f(0x345), 'reject', _0x55663a[_0x41559f(0x1b4)]), _0x34cb1b(_0x55663a);
                        }
                    },
                    'onerror': function (_0xa18bb6) {
                        const _0x5996b9 = _0x54131a;
                        _0x347764('getPostOwner()', _0x5996b9(0x34d), _0xa18bb6), _0x34cb1b(_0xa18bb6);
                    }
                });
            });
        }
        function _0x51f3af(_0x4e5413) {
            return new Promise((_0x1feea4, _0x1d8e72) => {
                const _0x39e138 = a0_0x5ed9;
                if (!_0x4e5413)
                    _0x1d8e72(_0x39e138(0x10e));
                let _0x27fd03 = _0x4e5413, _0x5dcae9 = _0x39e138(0x16a) + _0x27fd03 + _0x39e138(0xa3);
                GM_xmlhttpRequest({
                    'method': _0x39e138(0x261),
                    'url': _0x5dcae9,
                    'headers': { 'User-Agent': _0x39e138(0x35c) },
                    'onload': function (_0x182acf) {
                        const _0x40b3c3 = _0x39e138;
                        try {
                            let _0x36a90c = JSON[_0x40b3c3(0x355)](_0x182acf['response']);
                            _0x347764(_0x36a90c), _0x36a90c[_0x40b3c3(0xd4)] === 'fail' ? (_0x347764(_0x40b3c3(0x313), 'getBlobMediaWithQuery()', _0x27fd03), _0x37f53f(_0x27fd03)[_0x40b3c3(0x319)](_0x583c88 => {
                                const _0x11996f = _0x40b3c3;
                                _0x1feea4({
                                    'type': _0x11996f(0x12f),
                                    'data': _0x583c88[_0x11996f(0x2d8)][_0x11996f(0x2f1)][0x0]
                                });
                            })[_0x40b3c3(0x2fc)](_0x3acd2b => {
                                _0x1d8e72(_0x3acd2b);
                            })) : _0x1feea4({
                                'type': _0x40b3c3(0xba),
                                'data': _0x36a90c[_0x40b3c3(0xfd)]
                            });
                        } catch (_0x875046) {
                            _0x347764(_0x40b3c3(0xe8), _0x40b3c3(0x34d), _0x875046['message']), _0x1d8e72(_0x875046);
                        }
                    },
                    'onerror': function (_0x5ea8f6) {
                        const _0x224934 = _0x39e138;
                        _0x347764(_0x224934(0xe8), _0x224934(0x34d), _0x5ea8f6), _0x1d8e72(_0x5ea8f6);
                    }
                });
            });
        }
        function _0x37f53f(_0x365b82) {
            return new Promise((_0x25367b, _0x499661) => {
                const _0x5cfb12 = a0_0x5ed9;
                if (!_0x365b82)
                    _0x499661(_0x5cfb12(0x10e));
                let _0x4e89c3 = _0x365b82, _0x967431 = 'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22' + _0x4e89c3 + '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}';
                GM_xmlhttpRequest({
                    'method': _0x5cfb12(0x261),
                    'url': _0x967431,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x463409()
                    },
                    'onload': function (_0xebcd9e) {
                        const _0x7bc100 = _0x5cfb12;
                        try {
                            let _0x3e910f = JSON[_0x7bc100(0x355)](_0xebcd9e[_0x7bc100(0x19d)]);
                            _0x347764(_0x3e910f), _0x3e910f['status'] === _0x7bc100(0x100) ? (alert(_0x7bc100(0x176) + _0x3e910f[_0x7bc100(0x1b4)] + ':\x20' + _0x3e910f['feedback_message']), _0x347764(_0x7bc100(0x1dd) + _0x3e910f[_0x7bc100(0x1b4)] + ':\x20' + _0x3e910f[_0x7bc100(0x27a)]), _0x499661(_0xebcd9e)) : (_0x347764(_0x7bc100(0x20b), _0x3e910f[_0x7bc100(0xfd)]), _0x25367b(_0x3e910f[_0x7bc100(0xfd)]));
                        } catch (_0x298497) {
                            _0x347764('getBlobMediaWithQueryID()', _0x7bc100(0x34d), _0x298497[_0x7bc100(0x1b4)]), _0x499661(_0x298497);
                        }
                    },
                    'onerror': function (_0x2cdcd7) {
                        const _0x28aa87 = _0x5cfb12;
                        _0x347764('getBlobMediaWithQueryID()', _0x28aa87(0x34d), _0x2cdcd7), _0x499661(_0x2cdcd7);
                    }
                });
            });
        }
        function _0xa419dc(_0x2382ea) {
            return new Promise((_0x45db4d, _0x53bf68) => {
                const _0x49dd90 = a0_0x5ed9;
                let _0x3a637c = _0x49dd90(0x2f9) + _0x2382ea + _0x49dd90(0x1ab);
                if (_0x2382ea == null) {
                    alert(_0x49dd90(0x144)), _0x347764('getMediaInfo()', _0x49dd90(0x34d), 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.'), _0x28c20c(![]), _0x53bf68(-0x1);
                    return;
                }
                if (_0x463409() == null) {
                    alert('Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x347764('getMediaInfo()', _0x49dd90(0x34d), _0x49dd90(0xa2)), _0x28c20c(![]), _0x53bf68(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x49dd90(0x261),
                    'url': _0x3a637c,
                    'headers': {
                        'User-Agent': window[_0x49dd90(0x2f0)][_0x49dd90(0x21e)],
                        'Accept': _0x49dd90(0x2d6),
                        'X-IG-App-ID': _0x463409()
                    },
                    'onload': function (_0x573380) {
                        const _0x22f251 = _0x49dd90;
                        if (_0x573380[_0x22f251(0x2c8)] == _0x3a637c) {
                            let _0x182fed = JSON[_0x22f251(0x355)](_0x573380[_0x22f251(0x19d)]);
                            _0x347764(_0x22f251(0x29e), _0x182fed), _0x45db4d(_0x182fed);
                        } else {
                            let _0x1889ee = new URL(_0x573380[_0x22f251(0x2c8)]);
                            _0x1889ee['pathname']['startsWith'](_0x22f251(0x135)) ? (_0x347764(_0x22f251(0x29e), _0x22f251(0x34d), _0x22f251(0x10c)), alert(_0x22f251(0x10c))) : (_0x347764('getMediaInfo()', _0x22f251(0x34d), _0x22f251(0x225) + _0x573380['finalUrl'] + '\x22'), alert('Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x573380[_0x22f251(0x2c8)] + '\x22')), _0x28c20c(![]), _0x53bf68(-0x1);
                        }
                    },
                    'onerror': function (_0x51ed21) {
                        const _0x230fa1 = _0x49dd90;
                        _0x347764(_0x230fa1(0x29e), _0x230fa1(0x34d), _0x51ed21), _0x45db4d(_0x51ed21);
                    }
                });
            });
        }
        function _0x4b1647(_0x396636) {
            const _0x578320 = _0x2f3e8e;
            let _0x4055d3 = new URL(_0x396636), _0x2ed8c7 = _0x4055d3?.[_0x578320(0x343)]?.[_0x578320(0x121)]('ig_cache_key')?.['split']('.')['at'](0x0);
            return _0x2ed8c7 ? atob(_0x2ed8c7) : null;
        }
        function _0x463409() {
            const _0x1e5f8c = _0x2f3e8e;
            let _0x21eb08 = null;
            return _0x263ffa(_0x1e5f8c(0xbe))[_0x1e5f8c(0x172)](function () {
                const _0x49336d = _0x1e5f8c, _0x1286bd = /"APP_ID":"([0-9]+)"/ig, _0x21eb36 = _0x263ffa(this)[_0x49336d(0x337)]()[_0x49336d(0x305)](_0x1286bd);
                _0x21eb36 != null && _0x21eb08 == null && (_0x21eb08 = [..._0x263ffa(this)[_0x49336d(0x337)]()[_0x49336d(0x90)](_0x1286bd)]);
            }), _0x21eb08 ? _0x21eb08['at'](0x0)['at'](-0x1) : null;
        }
        function _0x28c20c(_0x2017ce) {
            const _0x434aab = _0x2f3e8e;
            _0x2017ce ? (_0x263ffa(_0x434aab(0x32e))['removeClass'](_0x434aab(0x321)), _0x263ffa(_0x434aab(0x32e))[_0x434aab(0x351)](_0x434aab(0x2e9), _0x434aab(0xe7))) : (_0x263ffa(_0x434aab(0x32e))[_0x434aab(0x1d9)](_0x434aab(0x321)), _0x263ffa(_0x434aab(0x32e))[_0x434aab(0x351)](_0x434aab(0x2e9), ''));
        }
        function _0x3c274f(_0xabe7ae) {
            const _0x23e679 = _0x2f3e8e;
            let _0x53a64f = _0x263ffa(_0x23e679(0xb9) + _0xabe7ae + '\x22]\x20span')['filter'](function () {
                const _0x57af0c = _0x23e679;
                return _0x263ffa(this)[_0x57af0c(0x81)]()[_0x57af0c(0x252)] === 0x0 && _0x263ffa(this)[_0x57af0c(0x19c)](_0x57af0c(0x24c))[_0x57af0c(0x252)] === 0x0 && _0x263ffa(this)[_0x57af0c(0x337)]()?.[_0x57af0c(0x13c)]() === _0xabe7ae?.[_0x57af0c(0x13c)]();
            })[_0x23e679(0x259)]('div:not([class]):not([style])')[_0x23e679(0x9a)](function () {
                const _0x589895 = _0x23e679;
                return _0x263ffa(this)[_0x589895(0x337)]()?.[_0x589895(0x13c)]() !== _0xabe7ae?.[_0x589895(0x13c)]();
            })[_0x23e679(0x9a)](function () {
                const _0x51236d = _0x23e679;
                return _0x263ffa(this)['children']()[_0x51236d(0x252)] > 0x1;
            })[_0x23e679(0x30e)]();
            return _0x53a64f['length'] === 0x0 && (_0x53a64f = _0x263ffa(_0x23e679(0xb9) + _0xabe7ae + '\x22]')[_0x23e679(0x9a)](function () {
                const _0x3078dc = _0x23e679;
                return _0x263ffa(this)['find']('img')[_0x3078dc(0x252)] > 0x0;
            })[_0x23e679(0x259)](_0x23e679(0x19f))[_0x23e679(0x9a)](function () {
                const _0x4c344b = _0x23e679;
                return _0x263ffa(this)[_0x4c344b(0x337)]()?.[_0x4c344b(0x13c)]() !== _0xabe7ae?.[_0x4c344b(0x13c)]();
            })['filter'](function () {
                const _0x43baf0 = _0x23e679;
                return _0x263ffa(this)[_0x43baf0(0x81)]()[_0x43baf0(0x252)] > 0x1;
            })[_0x23e679(0x30e)]()), _0x53a64f[_0x23e679(0x81)]()[_0x23e679(0x9a)](function () {
                return _0x263ffa(this)['height']() < 0xa;
            })['first']()[_0x23e679(0x81)]();
        }
        function _0x5f376e(_0x1e697b, _0x39f5b3) {
            const _0x328b10 = _0x2f3e8e;
            _0x263ffa('.circle_wrapper')['length'] ? (_0x263ffa(_0x328b10(0x33e))[_0x328b10(0x337)](_0x1e697b + '/' + _0x39f5b3), _0x1e697b >= _0x39f5b3 && _0x263ffa(_0x328b10(0x7b))[_0x328b10(0x120)](0xfa, function () {
                const _0x2ee357 = _0x328b10;
                _0x263ffa(this)[_0x2ee357(0xcb)]();
            })) : _0x263ffa(_0x328b10(0x26b))[_0x328b10(0x196)](_0x328b10(0x336) + _0x1e697b + '/' + _0x39f5b3 + '</span></div>');
        }
        function _0x426983(_0x366d87, _0x16dafa) {
            const _0x56d61e = _0x2f3e8e;
            let _0x36c568 = _0x366d87 ? _0x56d61e(0x137) : '';
            _0x263ffa('body')[_0x56d61e(0x196)]('<div\x20class=\x22IG_POPUP_DIG\x20' + _0x36c568 + _0x56d61e(0x15f)), _0x263ffa(_0x56d61e(0x1d0))['append'](_0x56d61e(0x301) + _0x20b835(_0x56d61e(0x29d)) + _0x56d61e(0x11d) + GM_info['script'][_0x56d61e(0x23a)] + _0x56d61e(0x1d4) + _0x531235['CLOSE'] + _0x56d61e(0x18b)), _0x16dafa && (_0x263ffa(_0x56d61e(0x1d0))[_0x56d61e(0x196)](_0x56d61e(0x1f8)), _0x263ffa('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group')[_0x56d61e(0x196)](_0x56d61e(0x86) + _0x20b835('BATCH_DOWNLOAD_SELECTED') + _0x56d61e(0x212)), _0x263ffa(_0x56d61e(0x18d))[_0x56d61e(0x196)](_0x56d61e(0x220) + _0x20b835(_0x56d61e(0x35d)) + _0x56d61e(0x212)), _0x263ffa(_0x56d61e(0x1d0))[_0x56d61e(0x196)]('<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>' + _0x20b835(_0x56d61e(0x8c)) + '</span></label>'));
        }
        function _0x4558fd(_0x2dc11c) {
            const _0x38164d = _0x2f3e8e;
            _0x263ffa(_0x38164d(0x2bf))[_0x38164d(0x252)] && (_0x2dc11c ? _0x263ffa(_0x38164d(0x2bf))[_0x38164d(0x1d9)](_0x38164d(0x137)) : _0x263ffa(_0x38164d(0x2bf))['removeClass'](_0x38164d(0x137)));
        }
        function _0x2d1195(_0x534e74, _0x24a39f, _0x5a88dd, _0x446c28, _0x49a565, _0x3fd6b3) {
            return new Promise(_0x3953f0 => {
                setTimeout(() => {
                    const _0x1656a7 = a0_0x5ed9;
                    _0x28c20c(!![]), fetch(_0x534e74)[_0x1656a7(0x319)](_0x56ff6e => {
                        const _0x39324a = _0x1656a7;
                        return _0x56ff6e[_0x39324a(0x205)]()[_0x39324a(0x319)](_0x364caf => {
                            _0x28c20c(![]), _0x2bd92b(_0x534e74, _0x364caf, _0x24a39f, _0x5a88dd, _0x446c28, _0x49a565, _0x3fd6b3), _0x3953f0(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x16aed7(_0x3290d1, _0x53c216) {
            const _0x5b6b9f = _0x2f3e8e, _0x268950 = document['createElement']('a');
            _0x268950[_0x5b6b9f(0x2a0)] = URL['createObjectURL'](_0x3290d1), _0x268950[_0x5b6b9f(0x1de)] = _0x53c216, _0x268950[_0x5b6b9f(0x1cd)](), _0x268950['remove']();
        }
        function _0x2bd92b(_0x5b168e, _0xb45be8, _0x33a6ce, _0x5c3ad5, _0x219d69, _0x4b9185, _0x4eaa00) {
            const _0xd4778f = _0x2f3e8e;
            _0x219d69 = parseInt(_0x219d69['toString']()[_0xd4778f(0xc3)](0xd, '0'));
            _0x480d35[_0xd4778f(0x148)] && (_0x219d69 = parseInt(_0x219d69['toString']()[_0xd4778f(0xc3)](0xd, '0')));
            const _0x5380c6 = new Date(_0x219d69), _0x56f93a = new URL(_0x5b168e)['pathname']['split']('/')['at'](-0x1)[_0xd4778f(0x173)]('.')[_0xd4778f(0x1fd)](0x0, -0x1)[_0xd4778f(0x2b7)]('.'), _0x40627a = _0x5380c6['getFullYear']()['toString'](), _0x40212c = (_0x5380c6[_0xd4778f(0x24d)]() + 0x1)['toString']()[_0xd4778f(0x234)](0x2, '0'), _0xe0891f = _0x5380c6[_0xd4778f(0x239)]()[_0xd4778f(0x362)]()[_0xd4778f(0x234)](0x2, '0'), _0x271804 = _0x5380c6[_0xd4778f(0x2cc)]()[_0xd4778f(0x362)]()[_0xd4778f(0x234)](0x2, '0'), _0x2201eb = _0x5380c6[_0xd4778f(0x13a)]()[_0xd4778f(0x362)]()[_0xd4778f(0x234)](0x2, '0'), _0x4e127b = _0x5380c6[_0xd4778f(0x19e)]()['toString']()[_0xd4778f(0x234)](0x2, '0');
            var _0x85fcfb = _0x81f8cb[_0xd4778f(0x1e8)][_0xd4778f(0x114)](), _0x5c8522 = _0x4eaa00 ?? '', _0x39815d = {
                    '%USERNAME%': _0x33a6ce,
                    '%SOURCE_TYPE%': _0x5c3ad5,
                    '%SHORTCODE%': _0x5c8522,
                    '%YEAR%': _0x40627a,
                    '%2-YEAR%': _0x40627a['substr'](-0x2),
                    '%MONTH%': _0x40212c,
                    '%DAY%': _0xe0891f,
                    '%HOUR%': _0x271804,
                    '%MINUTE%': _0x2201eb,
                    '%SECOND%': _0x4e127b,
                    '%ORIGINAL_NAME%': _0x56f93a,
                    '%ORIGINAL_NAME_FIRST%': _0x56f93a[_0xd4778f(0x173)]('_')['at'](0x0)
                };
            _0x85fcfb = _0x85fcfb[_0xd4778f(0x250)](/%[\w\-]+%/g, function (_0x4bf8aa) {
                return _0x39815d[_0x4bf8aa] || _0x4bf8aa;
            });
            const _0xac55c2 = _0x33a6ce + '_' + _0x56f93a + '.' + _0x4b9185, _0x27831c = _0x480d35[_0xd4778f(0x31f)] ? _0x85fcfb + '.' + _0x4b9185 : _0xac55c2;
            _0x480d35[_0xd4778f(0x116)] && _0x4b9185 === 'jpg' && _0x4eaa00 && _0x5c3ad5 === _0xd4778f(0x1a6) && (_0xb45be8['type'] === _0xd4778f(0x25e) || _0xb45be8['type'] === _0xd4778f(0x128)) ? _0x26f59d(_0xb45be8, _0x4eaa00)[_0xd4778f(0x319)](_0x26478f => _0x16aed7(_0x26478f, _0x27831c))['catch'](_0x281903 => {
                const _0x16889c = _0xd4778f;
                console[_0x16889c(0x2e7)](_0x16889c(0x1ac), _0x281903), _0x16aed7(_0xb45be8, _0x27831c);
            }) : _0x16aed7(_0xb45be8, _0x27831c);
        }
        async function _0x26f59d(_0x270395, _0x689cb7) {
            const _0x2ebd68 = _0x2f3e8e, _0x44ed8d = (..._0x3db879) => {
                    const _0xd7c338 = a0_0x5ed9, _0x1eca97 = _0x3db879[_0xd7c338(0x227)]((_0x4664ed, _0x143e54) => _0x4664ed + _0x143e54['length'], 0x0), _0x1b5ceb = new Uint8Array(_0x1eca97);
                    let _0x2c2554 = 0x0;
                    for (const _0x488694 of _0x3db879) {
                        _0x1b5ceb['set'](_0x488694, _0x2c2554), _0x2c2554 += _0x488694[_0xd7c338(0x252)];
                    }
                    return _0x1b5ceb;
                }, _0x55b5f8 = _0x5f126b => {
                    const _0x5f23c5 = a0_0x5ed9, _0x491cf4 = new Uint8Array(0x4);
                    return new DataView(_0x491cf4[_0x5f23c5(0x2ef)])[_0x5f23c5(0x1e7)](0x0, _0x5f126b, !![]), _0x491cf4;
                }, _0x571f7c = _0x167a97 => new TextEncoder()[_0x2ebd68(0x180)](_0x167a97), _0x1f67c3 = (_0xd54c3c, _0x3192a8) => String['fromCharCode'](_0xd54c3c[_0x2ebd68(0x35e)](_0x3192a8), _0xd54c3c[_0x2ebd68(0x35e)](_0x3192a8 + 0x1), _0xd54c3c[_0x2ebd68(0x35e)](_0x3192a8 + 0x2), _0xd54c3c[_0x2ebd68(0x35e)](_0x3192a8 + 0x3)), _0x4e8e0e = new Uint8Array(await _0x270395['slice'](0x0, 0xc)[_0x2ebd68(0x186)]()), _0x19a941 = _0x4e8e0e[0x0] === 0xff && _0x4e8e0e[0x1] === 0xd8, _0x3890e5 = _0x4e8e0e['length'] >= 0xc && String[_0x2ebd68(0x286)](..._0x4e8e0e['subarray'](0x0, 0x4)) === _0x2ebd68(0x15c) && String[_0x2ebd68(0x286)](..._0x4e8e0e[_0x2ebd68(0xf9)](0x8, 0xc)) === _0x2ebd68(0x246);
            if (!_0x19a941 && !_0x3890e5)
                throw new Error(_0x2ebd68(0x214));
            const _0x26f96e = _0x571f7c('https://www.instagram.com/p/' + _0x689cb7 + '/\x00'), _0x4fccfd = _0x571f7c(_0x2ebd68(0x26d)), _0x469483 = Uint8Array['from']([
                    0x49,
                    0x49,
                    0x2a,
                    0x0,
                    0x8,
                    0x0,
                    0x0,
                    0x0
                ]), _0x31b9b4 = Uint8Array[_0x2ebd68(0xbd)]([
                    0x1,
                    0x0
                ]), _0x5f078c = _0x44ed8d(Uint8Array[_0x2ebd68(0xbd)]([
                    0xe,
                    0x1,
                    0x2,
                    0x0
                ]), _0x55b5f8(_0x26f96e[_0x2ebd68(0x252)]), _0x55b5f8(0x8 + 0x2 + 0xc + 0x4)), _0x3c5f00 = _0x44ed8d(_0x469483, _0x31b9b4, _0x5f078c, _0x55b5f8(0x0), _0x26f96e);
            if (_0x19a941) {
                const _0x1c443f = await _0x270395[_0x2ebd68(0x186)](), _0x4034d1 = new DataView(_0x1c443f), _0x3a3034 = _0x44ed8d(_0x4fccfd, _0x3c5f00), _0x1914da = new Uint8Array(0x4);
                new DataView(_0x1914da['buffer'])[_0x2ebd68(0x2a3)](0x0, 0xffe1), new DataView(_0x1914da['buffer'])[_0x2ebd68(0x2a3)](0x2, _0x3a3034[_0x2ebd68(0x252)] + 0x2);
                const _0x17ebff = _0x44ed8d(_0x1914da, _0x3a3034), _0x13fe09 = [new Uint8Array(_0x1c443f, 0x0, 0x2)];
                let _0x5281b3 = 0x2, _0x331993 = ![];
                while (_0x5281b3 < _0x4034d1[_0x2ebd68(0x33f)]) {
                    const _0xb1b106 = _0x4034d1['getUint16'](_0x5281b3);
                    if ((_0xb1b106 & 0xff00) !== 0xff00)
                        break;
                    if (_0xb1b106 === 0xffda) {
                        if (!_0x331993)
                            _0x13fe09[_0x2ebd68(0x2ec)](_0x17ebff);
                        _0x13fe09[_0x2ebd68(0x2ec)](new Uint8Array(_0x1c443f, _0x5281b3));
                        break;
                    }
                    const _0x52b940 = _0x4034d1[_0x2ebd68(0x2e5)](_0x5281b3 + 0x2) + 0x2;
                    if (_0xb1b106 === 0xffe1) {
                        _0x5281b3 += _0x52b940;
                        continue;
                    }
                    _0x13fe09[_0x2ebd68(0x2ec)](new Uint8Array(_0x1c443f, _0x5281b3, _0x52b940)), _0x5281b3 += _0x52b940;
                }
                const _0x48c2b3 = _0x13fe09[_0x2ebd68(0x227)]((_0x1d443a, _0xe4adb2) => _0x1d443a + _0xe4adb2[_0x2ebd68(0x252)], 0x0), _0xef0b04 = new Uint8Array(_0x48c2b3);
                let _0x4a2b03 = 0x0;
                return _0x13fe09[_0x2ebd68(0x346)](_0x503804 => {
                    _0xef0b04['set'](_0x503804, _0x4a2b03), _0x4a2b03 += _0x503804['length'];
                }), new Blob([_0xef0b04], { 'type': 'image/jpeg' });
            }
            const _0x8b8796 = await _0x270395[_0x2ebd68(0x186)](), _0x581803 = new DataView(_0x8b8796), _0x30f987 = [];
            let _0x472212 = -0x1, _0x2c09ca = 0xc;
            while (_0x2c09ca < _0x581803[_0x2ebd68(0x33f)]) {
                const _0x432e9d = _0x1f67c3(_0x581803, _0x2c09ca), _0x354881 = _0x581803['getUint32'](_0x2c09ca + 0x4, !![]), _0x14919d = _0x354881 & 0x1, _0x12ea45 = 0x8 + _0x354881 + _0x14919d;
                if (_0x432e9d !== _0x2ebd68(0x331) && _0x432e9d !== _0x2ebd68(0x113)) {
                    _0x30f987['push'](new Uint8Array(_0x8b8796, _0x2c09ca, _0x12ea45));
                    if (_0x432e9d === _0x2ebd68(0xa8))
                        _0x472212 = _0x30f987[_0x2ebd68(0x252)] - 0x1;
                }
                _0x2c09ca += _0x12ea45;
            }
            let _0x55cf59 = _0x44ed8d(_0x571f7c(_0x2ebd68(0x331)), _0x55b5f8(_0x4fccfd['length'] + _0x3c5f00[_0x2ebd68(0x252)]), _0x4fccfd, _0x3c5f00);
            if (_0x55cf59['length'] & 0x1)
                _0x55cf59 = _0x44ed8d(_0x55cf59, Uint8Array['of'](0x0));
            if (_0x472212 !== -0x1) {
                const _0x14e5ad = new Uint8Array(_0x30f987[_0x472212]);
                _0x14e5ad[0x8] |= 0x10, _0x30f987[_0x472212] = _0x14e5ad, _0x30f987['splice'](_0x472212 + 0x1, 0x0, _0x55cf59);
            } else
                _0x30f987[_0x2ebd68(0x2ec)](_0x55cf59);
            const _0x40b49a = _0x30f987[_0x2ebd68(0x227)]((_0x211419, _0x5efe17) => _0x211419 + _0x5efe17['length'], 0x0), _0x575d26 = _0x44ed8d(_0x571f7c(_0x2ebd68(0x15c)), _0x55b5f8(_0x40b49a + 0x4), _0x571f7c(_0x2ebd68(0x246))), _0x16898c = _0x44ed8d(_0x575d26, ..._0x30f987);
            return new Blob([_0x16898c], { 'type': _0x2ebd68(0x128) });
        }
        async function _0x322c0b(_0x49ff13, _0x36489e) {
            const _0xff3b07 = _0x2f3e8e;
            let _0x33ac97 = new Date()['getTime'](), _0x16c216 = Math['floor'](_0x33ac97 / 0x3e8), _0x18977f = _0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0xc0)) ? _0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0xc0)) : _0x81f8cb[_0xff3b07(0x1d7)];
            !_0x18977f && _0x263ffa(_0x49ff13)[_0xff3b07(0x146)]('data-path') && (_0x347764(_0xff3b07(0x34b), _0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0x270))), _0x18977f = await _0x12ffc2(_0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0x10b)))[_0xff3b07(0x2fc)](_0x5d6599 => {
                const _0x2019f7 = _0xff3b07;
                _0x347764(_0x2019f7(0x2f2), _0x5d6599[_0x2019f7(0x1b4)]);
            }), _0x18977f == null && (_0x18977f = _0xff3b07(0x142)));
            _0x480d35['RENAME_PUBLISH_DATE'] && _0x263ffa(_0x49ff13)[_0xff3b07(0x146)]('datetime') && (_0x16c216 = parseInt(_0x263ffa(_0x49ff13)[_0xff3b07(0x146)]('datetime')));
            if (_0x480d35[_0xff3b07(0x23b)]) {
                _0x28c20c(!![]);
                let _0x59afdb = await _0xa419dc(_0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0x149)));
                _0x28c20c(![]);
                if (_0x59afdb[_0xff3b07(0xd4)] === 'ok') {
                    var _0x43355b = null;
                    if (_0x59afdb[_0xff3b07(0x2f1)][0x0][_0xff3b07(0x323)])
                        _0x43355b = _0x59afdb[_0xff3b07(0x2f1)][0x0][_0xff3b07(0x323)][0x0][_0xff3b07(0xf4)];
                    else {
                        _0x59afdb[_0xff3b07(0x2f1)][0x0]['image_versions2'][_0xff3b07(0xd1)]['sort'](function (_0x3c1b28, _0x2e4cfa) {
                            const _0x473ace = _0xff3b07;
                            let _0x181a09 = new URL(_0x3c1b28[_0x473ace(0xf4)])[_0x473ace(0x343)][_0x473ace(0x121)]('stp'), _0x362e08 = new URL(_0x2e4cfa[_0x473ace(0xf4)])[_0x473ace(0x343)]['get'](_0x473ace(0x237));
                            if (_0x181a09 && _0x362e08) {
                                if (_0x181a09[_0x473ace(0x252)] > _0x362e08['length'])
                                    return 0x1;
                                if (_0x181a09[_0x473ace(0x252)] < _0x362e08[_0x473ace(0x252)])
                                    return -0x1;
                            } else {
                                if (_0x3c1b28[_0x473ace(0x2fd)] < _0x2e4cfa[_0x473ace(0x2fd)])
                                    return 0x1;
                                if (_0x3c1b28[_0x473ace(0x2fd)] > _0x2e4cfa[_0x473ace(0x2fd)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x43355b = _0x59afdb[_0xff3b07(0x2f1)][0x0][_0xff3b07(0x206)][_0xff3b07(0xd1)][0x0][_0xff3b07(0xf4)];
                        const _0x1a3459 = function (_0x50a662) {
                                const _0x491d94 = _0xff3b07;
                                if (_0x50a662['width'] != null)
                                    return _0x50a662[_0x491d94(0x2fd)];
                                const _0x7db72f = new URL(_0x50a662['url']), _0x448dee = _0x7db72f[_0x491d94(0x343)][_0x491d94(0x121)]('stp');
                                return _0x448dee != null ? parseInt(_0x448dee['match'](/_p([0-9]+)x([0-9]+)_/i)?.['at'](0x1) || -0x1) : 0x0;
                            }, _0x421141 = _0x1a3459(_0x59afdb[_0xff3b07(0x2f1)][0x0][_0xff3b07(0x206)][_0xff3b07(0xd1)][0x0]);
                        if (_0x59afdb[_0xff3b07(0x2f1)][0x0]['original_width'] !== _0x421141 && _0x421141 !== -0x1) {
                        }
                    }
                    if (_0x36489e) {
                        let _0x1f1162 = new URL(_0x43355b);
                        _0x1f1162[_0xff3b07(0x16d)] = _0xff3b07(0x211), _0x1743b2(_0x1f1162[_0xff3b07(0x2a0)]);
                    } else
                        _0x2d1195(_0x43355b, _0x18977f, _0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0x2d7)), _0x16c216, _0x263ffa(_0x49ff13)['attr']('data-type'), _0x263ffa(_0x49ff13)[_0xff3b07(0x146)]('data-path'));
                } else {
                    if (_0x480d35[_0xff3b07(0xc6)]) {
                        if (_0x36489e) {
                            let _0x58acc2 = new URL(_0x263ffa(_0x49ff13)[_0xff3b07(0x146)]('data-href'));
                            _0x58acc2['host'] = _0xff3b07(0x211), _0x1743b2(_0x58acc2['href']);
                        } else
                            _0x2d1195(_0x263ffa(_0x49ff13)['attr'](_0xff3b07(0x270)), _0x18977f, _0x263ffa(_0x49ff13)['attr'](_0xff3b07(0x2d7)), _0x16c216, _0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0xee)), _0x263ffa(_0x49ff13)['attr']('data-path'));
                    } else
                        alert(_0xff3b07(0x1c4) + _0x59afdb[_0xff3b07(0x1b4)]);
                    _0x347764(_0x59afdb);
                }
            } else
                _0x2d1195(_0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0x270)), _0x18977f, _0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0x2d7)), _0x16c216, _0x263ffa(_0x49ff13)[_0xff3b07(0x146)](_0xff3b07(0xee)), _0x263ffa(_0x49ff13)['attr']('data-path'));
        }
        function _0x380260() {
            const _0x2cd749 = _0x2f3e8e;
            for (let _0x3f95fc of _0x81f8cb['registerMenuIds']) {
                _0x347764('GM_unregisterMenuCommand', _0x3f95fc), GM_unregisterMenuCommand(_0x3f95fc);
            }
            _0x81f8cb[_0x2cd749(0x153)][_0x2cd749(0x2ec)](GM_registerMenuCommand(_0x20b835(_0x2cd749(0x2d2)), () => {
                _0x64edbb();
            }, { 'accessKey': 'w' })), _0x81f8cb[_0x2cd749(0x153)][_0x2cd749(0x2ec)](GM_registerMenuCommand(_0x20b835(_0x2cd749(0x35f)), () => {
                const _0x196571 = _0x2cd749;
                GM_openInTab(_0x196571(0x143), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x81f8cb['registerMenuIds'][_0x2cd749(0x2ec)](GM_registerMenuCommand(_0x20b835(_0x2cd749(0x27d)), () => {
                _0x43aaa2();
            }, { 'accessKey': 'z' })), _0x81f8cb['registerMenuIds'][_0x2cd749(0x2ec)](GM_registerMenuCommand(_0x20b835(_0x2cd749(0x2a5)), () => {
                _0x14f832();
            }, { 'accessKey': 'f' })), _0x81f8cb[_0x2cd749(0x153)][_0x2cd749(0x2ec)](GM_registerMenuCommand(_0x20b835(_0x2cd749(0x11f)), () => {
                _0x2f1196();
            }, { 'accessKey': 'c' })), _0x81f8cb[_0x2cd749(0x153)][_0x2cd749(0x2ec)](GM_registerMenuCommand(_0x20b835(_0x2cd749(0x14c)), () => {
                _0x219e1f();
            }, { 'accessKey': 'r' }));
        }
        function _0x52d7c7(_0x25cffb) {
            const _0x1cb0c6 = _0x2f3e8e;
            if (!_0x480d35[_0x1cb0c6(0x226)])
                return;
            const _0x461a4c = GM_getValue('G_CHECK_TIMESTAMP') ?? new Date()[_0x1cb0c6(0x1c3)](), _0x118052 = new Date()[_0x1cb0c6(0x1c3)]();
            _0x118052 > parseInt(_0x461a4c) + _0x25cffb * 0x3e8 && (GM_setValue(_0x1cb0c6(0x167), new Date()[_0x1cb0c6(0x1c3)]()), _0x2f1196());
        }
        function _0x2f1196() {
            const _0x4ed8ae = _0x2f3e8e, _0x3d5073 = GM_info[_0x4ed8ae(0x2b0)][_0x4ed8ae(0x23a)], _0x5460ea = _0x4ed8ae(0x185);
            GM_xmlhttpRequest({
                'method': _0x4ed8ae(0x261),
                'url': _0x5460ea,
                'onload': function (_0x18df49) {
                    const _0x1f2146 = _0x4ed8ae, _0x21ef85 = _0x18df49[_0x1f2146(0x338)], _0x4cd172 = _0x21ef85[_0x1f2146(0x305)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x4cd172 && _0x4cd172[0x1]) {
                        const _0x16df09 = _0x4cd172[0x1];
                        _0x347764(_0x1f2146(0x136), _0x3d5073, '|', _0x1f2146(0x16e), _0x16df09), _0x16df09 !== _0x3d5073 && typeof this[_0x1f2146(0x11b)] === _0x1f2146(0xcf) ? (this[_0x1f2146(0x11b)] = null, GM_notification({
                            'text': _0x20b835(_0x1f2146(0x32c)),
                            'title': _0x20b835(_0x1f2146(0x111)),
                            'tag': _0x1f2146(0x91),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x1f2146(0xbc),
                            'onclick': _0x966608 => {
                                const _0x556b6a = _0x1f2146;
                                _0x966608?.[_0x556b6a(0x202)]();
                                var _0x25ee57 = GM_openInTab(GM_info['script'][_0x556b6a(0x168)]);
                                setTimeout(() => {
                                    _0x25ee57['close']();
                                }, 0xfa);
                            }
                        })) : _0x347764(_0x1f2146(0x247));
                    } else
                        console[_0x1f2146(0x2e7)](_0x1f2146(0x130));
                }
            });
        }
        function _0x64edbb() {
            const _0x953b4a = _0x2f3e8e;
            _0x263ffa(_0x953b4a(0x2bf))[_0x953b4a(0xcb)](), _0x426983(), _0x263ffa('.IG_POPUP_DIG\x20#post_info')[_0x953b4a(0x337)](_0x953b4a(0x12e)), _0x263ffa(_0x953b4a(0x198))[_0x953b4a(0x196)]('<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>');
            for (let _0x3bf7f4 in _0x1d41e2) {
                _0x263ffa(_0x953b4a(0x30b))[_0x953b4a(0x196)](_0x953b4a(0x14a) + _0x3bf7f4 + '\x22\x20' + (_0x81f8cb[_0x953b4a(0x16b)] == _0x3bf7f4 ? 'selected' : '') + '>' + _0x1d41e2[_0x3bf7f4] + '</option>');
            }
            for (let _0x2fec40 in _0x480d35) {
                _0x263ffa('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')['append'](_0x953b4a(0x1af) + (_0x489d87[_0x953b4a(0x34a)](_0x2fec40) ? _0x953b4a(0x245) : '') + _0x953b4a(0x2dc) + _0x20b835(_0x2fec40 + _0x953b4a(0x253)) + _0x953b4a(0x32b) + (_0x2fec40 + '_INTRO') + _0x953b4a(0x82) + _0x2fec40 + '\x22>' + _0x20b835(_0x2fec40) + _0x953b4a(0x2ce) + _0x2fec40 + _0x953b4a(0x254) + (_0x480d35[_0x2fec40] === !![] ? _0x953b4a(0x84) : '') + _0x953b4a(0xea)), _0x2fec40 === _0x953b4a(0x1fb) && _0x263ffa('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22' + _0x2fec40 + '\x22]')[_0x953b4a(0x365)](_0x953b4a(0x1fe))['on']('contextmenu', function (_0x106b1f) {
                    const _0x3b1900 = _0x953b4a;
                    _0x106b1f[_0x3b1900(0x202)](), _0x263ffa(this)['find'](_0x3b1900(0x93))[_0x3b1900(0x252)] === 0x0 && (_0x263ffa(this)[_0x3b1900(0x196)](_0x3b1900(0x1a5)), _0x263ffa(this)[_0x3b1900(0x81)]('#tempWrapper')[_0x3b1900(0x196)](_0x3b1900(0xb4) + _0x81f8cb[_0x3b1900(0x1c5)] + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0x263ffa(this)[_0x3b1900(0x81)](_0x3b1900(0x93))[_0x3b1900(0x196)](_0x3b1900(0xb4) + _0x81f8cb[_0x3b1900(0x1c5)] + _0x3b1900(0x2a2)), _0x263ffa(this)[_0x3b1900(0x81)](_0x3b1900(0x93))[_0x3b1900(0x196)](_0x3b1900(0x238) + _0x531235[_0x3b1900(0x29d)] + _0x3b1900(0x264)));
                }), _0x2fec40 === _0x953b4a(0x31f) && _0x263ffa(_0x953b4a(0x2d4) + _0x2fec40 + '\x22]')[_0x953b4a(0x365)](_0x953b4a(0x1fe))['on'](_0x953b4a(0x1cb), function (_0x4ef220) {
                    const _0xdf6ca9 = _0x953b4a;
                    _0x4ef220['preventDefault'](), _0x263ffa(this)[_0xdf6ca9(0x19c)](_0xdf6ca9(0x93))[_0xdf6ca9(0x252)] === 0x0 && (_0x263ffa(this)[_0xdf6ca9(0x196)]('<div\x20id=\x22tempWrapper\x22></div>'), _0x263ffa(this)[_0xdf6ca9(0x81)]('#tempWrapper')[_0xdf6ca9(0x196)](_0xdf6ca9(0x1ce) + _0x81f8cb['fileRenameFormat'] + _0xdf6ca9(0x2a6)), _0x263ffa(this)[_0xdf6ca9(0x81)](_0xdf6ca9(0x93))[_0xdf6ca9(0x196)](_0xdf6ca9(0x238) + _0x531235['CLOSE'] + _0xdf6ca9(0x264)));
                });
            }
        }
        function _0x43aaa2() {
            const _0x28d46e = _0x2f3e8e;
            _0x263ffa(_0x28d46e(0x2bf))['remove'](), _0x426983(), _0x263ffa('.IG_POPUP_DIG\x20#post_info')['text'](_0x28d46e(0x325)), _0x263ffa(_0x28d46e(0x2fa))[_0x28d46e(0x196)](_0x28d46e(0x23d)), _0x263ffa(_0x28d46e(0x2fa))[_0x28d46e(0x196)](_0x28d46e(0x160)), _0x263ffa(_0x28d46e(0x263))[_0x28d46e(0x196)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x20b835('SHOW_DOM_TREE') + _0x28d46e(0x272)), _0x263ffa('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x28d46e(0x196)](_0x28d46e(0x2af) + _0x20b835(_0x28d46e(0x15b)) + '</a></button>'), _0x263ffa(_0x28d46e(0x263))[_0x28d46e(0x196)](_0x28d46e(0x1f7) + _0x20b835(_0x28d46e(0xae)) + _0x28d46e(0x1e4)), _0x263ffa(_0x28d46e(0x263))[_0x28d46e(0x196)](_0x28d46e(0x2fb) + _0x20b835(_0x28d46e(0x182)) + _0x28d46e(0x272)), _0x263ffa(_0x28d46e(0x263))['append'](_0x28d46e(0x2f6) + _0x20b835(_0x28d46e(0x191)) + _0x28d46e(0x272));
        }
        function _0x14f832() {
            const _0x3df367 = _0x2f3e8e;
            _0x263ffa(_0x3df367(0x2bf))[_0x3df367(0xcb)](), _0x426983(), _0x263ffa(_0x3df367(0x14d))[_0x3df367(0x337)](_0x3df367(0x2ba)), _0x263ffa(_0x3df367(0x2fa))[_0x3df367(0x196)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x263ffa(_0x3df367(0x263))['append'](_0x3df367(0x10a) + _0x20b835(_0x3df367(0x282)) + _0x3df367(0x272)), _0x263ffa(_0x3df367(0x263))[_0x3df367(0x196)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x20b835(_0x3df367(0x182)) + '</a></button>'), _0x263ffa(_0x3df367(0x263))[_0x3df367(0x196)](_0x3df367(0x2f6) + _0x20b835(_0x3df367(0x191)) + '</a></button>');
        }
        function _0x1743b2(_0x4a2748) {
            const _0x4d2e96 = _0x2f3e8e;
            var _0x1037ec = document[_0x4d2e96(0x22c)]('a');
            _0x1037ec['href'] = _0x4a2748, _0x1037ec[_0x4d2e96(0xb6)] = _0x4d2e96(0x279), document['body']['appendChild'](_0x1037ec), _0x1037ec[_0x4d2e96(0x1cd)](), _0x1037ec[_0x4d2e96(0xcb)]();
        }
        function _0x219e1f() {
            const _0x21f480 = _0x2f3e8e;
            clearInterval(_0x81f8cb['GL_repeat']), _0x81f8cb[_0x21f480(0x278)][_0x21f480(0x346)](_0x438477 => {
                _0x438477['trigger']['forEach'](_0x133a8b => {
                    const _0x4e6c1d = a0_0x5ed9;
                    _0x263ffa(_0x438477['element'])[_0x4e6c1d(0x244)](_0x4e6c1d(0x1cd), _0x133a8b);
                });
            }), _0x81f8cb[_0x21f480(0x278)] = [], _0x263ffa('.button_wrapper')[_0x21f480(0xcb)](), _0x263ffa(_0x21f480(0x353))[_0x21f480(0xcb)](), _0x263ffa(_0x21f480(0x24f))['removeAttr'](_0x21f480(0x1a9)), _0x81f8cb[_0x21f480(0x184)] = ![], _0x81f8cb[_0x21f480(0x7c)] = ![], _0x81f8cb[_0x21f480(0x273)] = location[_0x21f480(0x2a0)], _0x81f8cb[_0x21f480(0x1b6)][_0x21f480(0x306)](), _0x347764(_0x21f480(0xcd));
        }
        function _0x347764(..._0x558630) {
            const _0x5652d7 = _0x2f3e8e;
            var _0x3fd82c = new Date();
            _0x81f8cb[_0x5652d7(0x308)][_0x5652d7(0x2ec)]({
                'time': _0x3fd82c['getTime'](),
                'content': [..._0x558630]
            }), _0x81f8cb[_0x5652d7(0x308)][_0x5652d7(0x252)] > 0x3e8 && (_0x81f8cb['GL_logger'] = [
                {
                    'time': _0x3fd82c[_0x5652d7(0x1c3)](),
                    'content': [_0x5652d7(0xe3)]
                },
                ..._0x81f8cb[_0x5652d7(0x308)][_0x5652d7(0x1fd)](-0x3e7)
            ]), console['log']('[' + _0x3fd82c[_0x5652d7(0x80)]() + ']', ..._0x558630);
        }
        function _0x49c1ee() {
            const _0x3df8d8 = _0x2f3e8e;
            for (let _0x53bd32 in _0x480d35) {
                GM_getValue(_0x53bd32) != null && typeof GM_getValue(_0x53bd32) === _0x3df8d8(0x11e) && (_0x480d35[_0x53bd32] = GM_getValue(_0x53bd32), _0x53bd32 === _0x3df8d8(0x1fb) && GM_getValue(_0x53bd32) !== !![] && (_0x81f8cb[_0x3df8d8(0x1c5)] = 0x1));
            }
        }
        function _0x4ad47e(_0x5a4d5e, _0xf2dd5d, _0x799ba6, _0x46b615 = '') {
            const _0x25003d = _0x2f3e8e;
            _0xf2dd5d['find'](_0x25003d(0x2b8))[_0x25003d(0x252)] === 0x0 ? (_0xf2dd5d[_0x25003d(0x196)](_0x25003d(0x332) + _0x46b615 + _0x25003d(0x2a6)), _0xf2dd5d['find'](_0x25003d(0x2b8))[_0x25003d(0x196)](_0x25003d(0x1f4) + _0x81f8cb['videoVolume'] + _0x25003d(0x1e5)), _0xf2dd5d[_0x25003d(0x19c)](_0x25003d(0x293))['attr'](_0x25003d(0x28e), '--ig-track-progress:\x20' + (_0x81f8cb[_0x25003d(0x1c5)] * 0x64 + '%')), _0xf2dd5d[_0x25003d(0x19c)]('div.volume_slider\x20input')['on']('input', function () {
                const _0x31ed7c = _0x25003d;
                var _0x1db69e = _0x263ffa(this)[_0x31ed7c(0x294)]() * 0x64 + '%';
                _0x81f8cb[_0x31ed7c(0x1c5)] = _0x263ffa(this)[_0x31ed7c(0x294)](), GM_setValue(_0x31ed7c(0x1cf), _0x263ffa(this)[_0x31ed7c(0x294)]()), _0x263ffa(this)['attr'](_0x31ed7c(0x28e), _0x31ed7c(0x16c) + _0x1db69e), _0x5a4d5e[_0x31ed7c(0x172)](function () {
                    const _0x1fd271 = _0x31ed7c;
                    _0x347764('(' + _0x799ba6 + ')', _0x1fd271(0x34c)), this[_0x1fd271(0x21a)] = _0x81f8cb[_0x1fd271(0x1c5)];
                });
            }), _0xf2dd5d[_0x25003d(0x19c)](_0x25003d(0x293))['on'](_0x25003d(0xdf), function () {
                const _0x126e61 = _0x25003d;
                var _0x1b7965 = _0x81f8cb[_0x126e61(0x1c5)] * 0x64 + '%';
                _0x263ffa(this)[_0x126e61(0x146)]('style', '--ig-track-progress:\x20' + _0x1b7965), _0x263ffa(this)[_0x126e61(0x294)](_0x81f8cb[_0x126e61(0x1c5)]), _0x5a4d5e[_0x126e61(0x172)](function () {
                    const _0x519d90 = _0x126e61;
                    _0x347764('(' + _0x799ba6 + ')', 'video\x20volume\x20changed\x20#slider'), this[_0x519d90(0x21a)] = _0x81f8cb[_0x519d90(0x1c5)];
                });
            }), _0xf2dd5d[_0x25003d(0x19c)](_0x25003d(0x2b8))['on'](_0x25003d(0x1cd), function (_0x395ac9) {
                const _0x1199d0 = _0x25003d;
                _0x395ac9[_0x1199d0(0x24a)](), _0x395ac9['preventDefault']();
            })) : _0xf2dd5d[_0x25003d(0x19c)]('div.volume_slider')[_0x25003d(0xcb)]();
        }
        var _0xe739f8 = null;
        function _0x50e7a4(_0x4f11da) {
            const _0x59beae = _0x2f3e8e;
            _0x17bab6(), _0x263ffa(_0x59beae(0x26b))[_0x59beae(0x196)](_0x59beae(0x287) + _0x531235[_0x59beae(0x152)] + _0x59beae(0x284) + _0x531235[_0x59beae(0x152)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>' + _0x531235[_0x59beae(0x29d)] + _0x59beae(0x17f));
            const _0x3ef93a = _0x263ffa(_0x59beae(0x192)), _0x6d4159 = _0x263ffa(_0x59beae(0x103)), _0x50f6e8 = _0x263ffa(_0x59beae(0x1a1)), _0x524bff = _0x263ffa(_0x59beae(0x7e)), _0x27b9e5 = _0x263ffa('#iv_header'), _0x103e2d = _0x263ffa('#iv_close'), _0x46ed25 = _0x263ffa('#iv_image'), _0x49ef8b = _0x263ffa(_0x59beae(0x344)), _0x3886fd = _0x263ffa(_0x59beae(0xaa));
            _0x46ed25['attr'](_0x59beae(0x175), _0x4f11da), _0x3ef93a['css']('display', _0x59beae(0x2b3)), _0x50f6e8[_0x59beae(0x351)]('transform-origin', _0x59beae(0x230)), _0x50f6e8['css'](_0x59beae(0x159), 'transform\x200.15s\x20ease'), _0x524bff[_0x59beae(0x351)](_0x59beae(0x97), 'center'), _0x524bff['css']('transition', 'transform\x200.15s\x20ease'), _0x50f6e8[_0x59beae(0x351)](_0x59beae(0x2e1), _0x59beae(0x158)), _0x524bff[_0x59beae(0x351)]('will-change', 'transform');
            let _0x30de70 = 0x0, _0x3f07ad = 0x1, _0x10ab6a = 0x0, _0x54fa19 = 0x0, _0x3849bb = ![], _0x26ccfe = ![], _0x3a98b0, _0x206bd9;
            var _0x5a575d = {
                'x': 0x0,
                'y': 0x0
            };
            _0xe739f8 = setInterval(() => {
                const _0x420176 = {
                    'x': _0x10ab6a,
                    'y': _0x54fa19
                };
                _0x420176['x'] !== _0x5a575d['x'] || _0x420176['y'] !== _0x5a575d['y'] ? _0x26ccfe = !![] : _0x26ccfe = ![], _0x5a575d = _0x420176;
            }, 0x64), _0x46ed25['on']('load', () => {
                _0x10ab6a = 0x0, _0x54fa19 = 0x0, _0x36d8c7();
            }), _0x46ed25['on'](_0x59beae(0x318), _0x2acf19 => {
                const _0x451c25 = _0x59beae;
                _0x2acf19[_0x451c25(0x202)]();
            }), _0x46ed25['on'](_0x59beae(0x1cd), _0x41c70c => {
                const _0x37367b = _0x59beae;
                _0x41c70c['preventDefault'](), _0x41c70c[_0x37367b(0x24a)](), !_0x26ccfe && (_0x3f07ad <= 0x1 ? _0x5e6fff(_0x41c70c, Math[_0x37367b(0x125)](Math[_0x37367b(0x302)](0x1, _0x3f07ad + 1.25), 0x5)) : (_0x3f07ad = 0x1, _0x10ab6a = 0x0, _0x54fa19 = 0x0), _0x36d8c7());
            }), _0x6d4159['on'](_0x59beae(0x2b2), _0x2a6b89 => {
                const _0x4f3be8 = _0x59beae;
                _0x2a6b89[_0x4f3be8(0x202)](), _0x5e6fff(_0x2a6b89);
            }), _0x3ef93a['on'](_0x59beae(0x2b2), _0x3866f5 => {
                const _0x3f1ee2 = _0x59beae;
                _0x3866f5[_0x3f1ee2(0x202)]();
            }), _0x46ed25['on']('mousedown', _0x20e963 => {
                const _0x2ddb6d = _0x59beae;
                if (_0x3f07ad == 0x1)
                    return;
                _0x3849bb = !![], _0x3a98b0 = _0x20e963[_0x2ddb6d(0x2e0)] - _0x10ab6a, _0x206bd9 = _0x20e963[_0x2ddb6d(0x140)] - _0x54fa19, _0x46ed25[_0x2ddb6d(0x351)](_0x2ddb6d(0x2c5), _0x2ddb6d(0xd7));
            }), _0x46ed25['on']('mouseup', () => {
                const _0x5e139b = _0x59beae;
                if (_0x3f07ad == 0x1)
                    return;
                _0x3849bb = ![], _0x46ed25[_0x5e139b(0x351)](_0x5e139b(0x2c5), _0x5e139b(0x29c));
            }), _0x49ef8b['on']('click', function () {
                _0x30de70 -= 0x5a, _0x36d8c7();
            }), _0x3886fd['on'](_0x59beae(0x1cd), function () {
                _0x30de70 += 0x5a, _0x36d8c7();
            }), _0x263ffa(document)['on']('mousemove.igHelper', _0x35d9a7 => {
                const _0x15ef36 = _0x59beae;
                if (!_0x3849bb)
                    return;
                _0x35d9a7[_0x15ef36(0x202)](), _0x10ab6a = _0x35d9a7['pageX'] - _0x3a98b0, _0x54fa19 = _0x35d9a7[_0x15ef36(0x140)] - _0x206bd9, _0x36d8c7();
            }), _0x3ef93a['on'](_0x59beae(0x1cd), () => {
                _0x17bab6();
            }), _0x103e2d['on'](_0x59beae(0x1cd), () => {
                _0x17bab6();
            }), _0x27b9e5['on']('click', _0x157bc6 => {
                const _0x530133 = _0x59beae;
                _0x157bc6[_0x530133(0x202)](), _0x157bc6[_0x530133(0x24a)]();
            });
            function _0x36d8c7() {
                const _0x2d50ce = _0x59beae;
                _0x50f6e8[_0x2d50ce(0x351)](_0x2d50ce(0x159), _0x26ccfe ? _0x2d50ce(0x310) : _0x2d50ce(0xd8)), _0x50f6e8[_0x2d50ce(0x351)](_0x2d50ce(0x158), _0x2d50ce(0xb1) + _0x10ab6a + _0x2d50ce(0x8b) + _0x54fa19 + _0x2d50ce(0x2c9) + _0x3f07ad + ')'), _0x524bff[_0x2d50ce(0x351)](_0x2d50ce(0x158), _0x2d50ce(0x277) + _0x30de70 + 'deg)'), _0x3f07ad == 0x1 ? _0x46ed25[_0x2d50ce(0x351)](_0x2d50ce(0x2c5), _0x2d50ce(0x2c2)) : _0x46ed25[_0x2d50ce(0x351)](_0x2d50ce(0x2c5), _0x2d50ce(0xd7));
            }
            function _0x5e6fff(_0x109798, _0x1c43b5) {
                const _0x4604e7 = _0x59beae;
                _0x109798['preventDefault']();
                let _0xe951e9 = _0x3f07ad;
                if (_0x1c43b5 == null) {
                    let _0x2fa1d3 = 0.1, _0x892546 = _0x109798['originalEvent'][_0x4604e7(0x342)] < 0x0 ? 0x1 : -0x1;
                    _0x3f07ad = Math[_0x4604e7(0x125)](0x5, Math[_0x4604e7(0x302)](0x1, _0x3f07ad + _0x892546 * _0x2fa1d3 * _0x3f07ad));
                } else
                    _0x3f07ad = _0x1c43b5;
                let _0x206f7e = _0x6d4159[0x0][_0x4604e7(0x2ea)](), _0x595b8b = _0x109798[_0x4604e7(0xf2)] - _0x206f7e['left'], _0x1015a1 = _0x109798['clientY'] - _0x206f7e[_0x4604e7(0x1ec)], _0x26c9df = (_0x595b8b - _0x10ab6a) / _0xe951e9, _0x11be7e = (_0x1015a1 - _0x54fa19) / _0xe951e9;
                _0x10ab6a = -_0x26c9df * _0x3f07ad + _0x595b8b, _0x54fa19 = -_0x11be7e * _0x3f07ad + _0x1015a1, _0x36d8c7();
            }
        }
        function _0x17bab6() {
            const _0x56889c = _0x2f3e8e;
            clearInterval(_0xe739f8), _0x263ffa('#imageViewer')[_0x56889c(0xcb)](), _0x263ffa(document)['off'](_0x56889c(0x17b));
        }
        function _0x109f3a() {
            const _0x1a3b09 = _0x2f3e8e;
            var _0x188c05 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x1a3b09(0x335),
                        'NOTICE_UPDATE_CONTENT': _0x1a3b09(0x2ad),
                        'CHECK_UPDATE': _0x1a3b09(0xe5),
                        'CHECK_UPDATE_MENU': _0x1a3b09(0xb2),
                        'CHECK_UPDATE_INTRO': _0x1a3b09(0x123),
                        'RELOAD_SCRIPT': _0x1a3b09(0x201),
                        'DONATE': _0x1a3b09(0xc1),
                        'FEEDBACK': _0x1a3b09(0x1bc),
                        'IMAGE_VIEWER': _0x1a3b09(0x122),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x1a3b09(0x1a4),
                        'SELECT_AND_COPY': _0x1a3b09(0x275),
                        'DOWNLOAD_DOM_TREE': _0x1a3b09(0x85),
                        'REPORT_GITHUB': _0x1a3b09(0x288),
                        'REPORT_DISCORD': _0x1a3b09(0x2b6),
                        'REPORT_FORK': 'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
                        'DEBUG': _0x1a3b09(0xdc),
                        'CLOSE': _0x1a3b09(0x1ef),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': 'Download\x20Selected\x20Resources',
                        'BATCH_DOWNLOAD_DIRECT': _0x1a3b09(0x2b4),
                        'IMG': _0x1a3b09(0xff),
                        'VID': _0x1a3b09(0x2ac),
                        'DW': _0x1a3b09(0xc9),
                        'DW_ALL': 'Download\x20All\x20Resources',
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x1a3b09(0xd6),
                        'LOAD_BLOB_MULTIPLE': _0x1a3b09(0x2be),
                        'LOAD_BLOB_RELOAD': _0x1a3b09(0x17e),
                        'NO_CHECK_RESOURCE': 'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
                        'NO_VID_URL': _0x1a3b09(0x1f0),
                        'SETTING': _0x1a3b09(0x32f),
                        'AUTO_RENAME': 'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': 'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
                        'DISABLE_VIDEO_LOOPING': _0x1a3b09(0x255),
                        'HTML5_VIDEO_CONTROL': _0x1a3b09(0x315),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x1a3b09(0x224),
                        'FORCE_FETCH_ALL_RESOURCES': _0x1a3b09(0x249),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x1a3b09(0x221),
                        'DIRECT_DOWNLOAD_ALL': _0x1a3b09(0x2c6),
                        'MODIFY_VIDEO_VOLUME': _0x1a3b09(0x117),
                        'MODIFY_RESOURCE_EXIF': _0x1a3b09(0xa1),
                        'SCROLL_BUTTON': _0x1a3b09(0x108),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x1a3b09(0x285),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x1a3b09(0x189),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': 'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
                        'AUTO_RENAME_INTRO': _0x1a3b09(0x9d),
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': 'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_LOCATE_DATE_INTRO': _0x1a3b09(0x208),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x1a3b09(0x241),
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x1a3b09(0x2e8),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x1a3b09(0xe2),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x1a3b09(0x2ff),
                        'DIRECT_DOWNLOAD_ALL_INTRO': 'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x1a3b09(0xac),
                        'SCROLL_BUTTON_INTRO': _0x1a3b09(0x1e1),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x1a3b09(0x292),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x1a3b09(0x35b),
                        'SKIP_VIEW_STORY_CONFIRM': _0x1a3b09(0x297),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x1a3b09(0x1d6),
                        'MODIFY_RESOURCE_EXIF_INTRO': _0x1a3b09(0xb3),
                        'DIRECT_DOWNLOAD_STORY': _0x1a3b09(0x8f),
                        'DIRECT_DOWNLOAD_STORY_INTRO': _0x1a3b09(0x229)
                    }
                }, _0xa88edc = Object['assign']({}, _0x188c05, _0x81f8cb[_0x1a3b09(0x2ca)]), _0x35d731 = Object[_0x1a3b09(0x164)](_0xa88edc)[_0x1a3b09(0x1dc)]()[_0x1a3b09(0x227)]((_0xb7f268, _0x93c73b) => {
                    return _0xb7f268[_0x93c73b] = _0xa88edc[_0x93c73b], _0xb7f268;
                }, {});
            return _0x35d731;
        }
        async function _0x2f9541(_0xb82952) {
            return new Promise((_0x62780, _0x520e5c) => {
                const _0x17646c = a0_0x5ed9;
                GM_xmlhttpRequest({
                    'method': _0x17646c(0x261),
                    'url': _0x17646c(0x251) + _0xb82952 + _0x17646c(0x133),
                    'onload': function (_0x41eb0a) {
                        const _0x48267f = _0x17646c;
                        try {
                            let _0x5a28a6 = JSON[_0x48267f(0x355)](_0x41eb0a[_0x48267f(0x19d)]);
                            _0x62780(_0x5a28a6);
                        } catch (_0x32643d) {
                            _0x520e5c(_0x32643d);
                        }
                    },
                    'onerror': function (_0x4813b0) {
                        const _0x316c4b = _0x17646c;
                        _0x347764('getTranslationText()', _0x316c4b(0x34d), _0x4813b0), _0x520e5c(_0x4813b0);
                    }
                });
            });
        }
        function _0x20b835(_0x2d1b7c) {
            const _0x2c8a56 = _0x2f3e8e, _0x1b0276 = _0x109f3a();
            return _0x1b0276[_0x81f8cb[_0x2c8a56(0x16b)]] != undefined && _0x1b0276[_0x81f8cb[_0x2c8a56(0x16b)]][_0x2d1b7c] != undefined ? _0x1b0276[_0x81f8cb[_0x2c8a56(0x16b)]][_0x2d1b7c] : _0x1b0276[_0x2c8a56(0x317)][_0x2d1b7c];
        }
        function _0x3c7a2c() {
            const _0x5bddff = _0x2f3e8e;
            _0x263ffa(_0x5bddff(0x157))['each'](function () {
                const _0x45f61a = _0x5bddff;
                _0x263ffa(this)[_0x45f61a(0x337)](_0x20b835(_0x263ffa(this)['attr'](_0x45f61a(0x1d8))));
            }), _0x263ffa(_0x5bddff(0x12b))['each'](function () {
                const _0x2813dd = _0x5bddff;
                _0x263ffa(this)['attr'](_0x2813dd(0x2c1), _0x20b835(_0x263ffa(this)[_0x2813dd(0x146)](_0x2813dd(0x2c0))));
            });
        }
        _0x263ffa(function () {
            const _0x487b2e = _0x2f3e8e;
            function _0x125bd3(_0x3493dd) {
                const _0x185fbd = a0_0x5ed9;
                var _0x10eb96 = [];
                for (var _0x579d93 of _0x3493dd) {
                    _0x10eb96[_0x185fbd(0x2ec)]({
                        'tagName': _0x579d93[_0x185fbd(0x178)],
                        'id': _0x579d93['id'],
                        'className': _0x579d93[_0x185fbd(0x13e)]
                    });
                }
                return _0x10eb96;
            }
            function _0x27b416() {
                const _0x443e6c = a0_0x5ed9;
                let _0x48a3f8 = _0x263ffa(_0x443e6c(0x30a))[0x0];
                var _0x2ec6a3 = '';
                _0x81f8cb['GL_logger'][_0x443e6c(0x346)](_0x50f0c3 => {
                    const _0x1eb86b = _0x443e6c;
                    var _0x154138 = JSON[_0x1eb86b(0x2e3)](_0x50f0c3[_0x1eb86b(0x115)], function (_0x527622, _0x21dae1) {
                        const _0xb102 = _0x1eb86b;
                        if (Array[_0xb102(0x14b)](this)) {
                            if (typeof _0x21dae1 === 'object' && _0x21dae1 instanceof jQuery)
                                return _0x125bd3(_0x21dae1);
                            return _0x21dae1;
                        } else
                            return _0x21dae1;
                    }, '\x09');
                    _0x2ec6a3 += new Date(_0x50f0c3[_0x1eb86b(0x150)])['toISOString']() + ':\x20' + _0x154138 + '\x0a';
                }), _0x263ffa(_0x443e6c(0x316))[_0x443e6c(0x337)](_0x443e6c(0x27c) + _0x2ec6a3 + _0x443e6c(0x324) + location[_0x443e6c(0x1e6)] + '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a' + _0x48a3f8[_0x443e6c(0x1d2)]);
            }
            _0x263ffa('body')['on'](_0x487b2e(0x1cd), _0x487b2e(0x15a), function () {
                _0x27b416();
            }), _0x263ffa(_0x487b2e(0x26b))['on']('click', '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x217b37 = _0x487b2e;
                _0x263ffa(_0x217b37(0x316))['select'](), document[_0x217b37(0x1b3)](_0x217b37(0x1d3));
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), _0x487b2e(0x300), function () {
                const _0x2f7020 = _0x487b2e;
                _0x263ffa(_0x2f7020(0x316))[_0x2f7020(0x337)]()['length'] === 0x0 && _0x27b416();
                var _0x3d2665 = _0x263ffa('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x2f7020(0x337)](), _0x2a41a5 = document[_0x2f7020(0x22c)]('a'), _0x22ca5d = new Blob([_0x3d2665], { 'type': _0x2f7020(0x138) });
                _0x2a41a5[_0x2f7020(0x2a0)] = URL[_0x2f7020(0xa4)](_0x22ca5d), _0x2a41a5[_0x2f7020(0x1de)] = _0x2f7020(0x9e) + new Date()['getTime']() + _0x2f7020(0x1bf), document[_0x2f7020(0x26b)][_0x2f7020(0x304)](_0x2a41a5), _0x2a41a5[_0x2f7020(0x1cd)](), _0x2a41a5['remove']();
            }), _0x263ffa(_0x487b2e(0x26b))['on']('click', _0x487b2e(0x1c7), function () {
                const _0x477dd2 = _0x487b2e;
                _0x263ffa(this)[_0x477dd2(0x365)]('#tempWrapper')[_0x477dd2(0x252)] > 0x0 ? _0x263ffa(this)[_0x477dd2(0x365)](_0x477dd2(0x93))[_0x477dd2(0x120)](0xfa, function () {
                    const _0x5e099b = _0x477dd2;
                    _0x263ffa(this)[_0x5e099b(0xcb)]();
                }) : _0x263ffa('.IG_POPUP_DIG')[_0x477dd2(0xcb)]();
            }), _0x263ffa(window)['on'](_0x487b2e(0x2f4), function (_0x260cc3) {
                const _0x2a3a4d = _0x487b2e;
                _0x260cc3['which'] == '81' && _0x260cc3[_0x2a3a4d(0x1e3)] && (_0x263ffa(_0x2a3a4d(0x2bf))[_0x2a3a4d(0xcb)](), _0x260cc3[_0x2a3a4d(0x202)]()), _0x260cc3[_0x2a3a4d(0x169)] == '87' && _0x260cc3[_0x2a3a4d(0x1e3)] && (_0x64edbb(), _0x260cc3['preventDefault']()), _0x260cc3[_0x2a3a4d(0x169)] == '90' && _0x260cc3[_0x2a3a4d(0x1e3)] && (_0x43aaa2(), _0x260cc3[_0x2a3a4d(0x202)]()), _0x260cc3[_0x2a3a4d(0x169)] == '82' && _0x260cc3['altKey'] && (_0x219e1f(), _0x260cc3[_0x2a3a4d(0x202)]()), _0x260cc3['which'] == '83' && _0x260cc3['altKey'] && (location['href']['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x263ffa('.IG_DWSTORY')[_0x2a3a4d(0x252)] > 0x0 && _0x263ffa(_0x2a3a4d(0x163))?.[_0x2a3a4d(0x1c0)]('click'), location[_0x2a3a4d(0x2a0)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x263ffa('.IG_DWHISTORY')['length'] > 0x0 && _0x263ffa(_0x2a3a4d(0x296))?.['trigger'](_0x2a3a4d(0x1cd)), _0x260cc3['preventDefault']());
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0xa0), _0x487b2e(0x1aa), function () {
                const _0x2c6420 = _0x487b2e;
                var _0x29c70d = _0x263ffa(this)[_0x2c6420(0x146)]('id');
                if (_0x29c70d && _0x480d35[_0x29c70d] !== undefined) {
                    let _0x117cd3 = _0x263ffa(this)['prop'](_0x2c6420(0x84));
                    GM_setValue(_0x29c70d, _0x117cd3), _0x480d35[_0x29c70d] = _0x117cd3, console[_0x2c6420(0x15e)](_0x2c6420(0x2e2), _0x29c70d, _0x117cd3);
                }
            }), _0x263ffa(_0x487b2e(0x26b))['on']('click', '.IG_POPUP_DIG\x20.globalSettings', function (_0x751fce) {
                const _0x4f0491 = _0x487b2e;
                _0x263ffa(this)[_0x4f0491(0x19c)](_0x4f0491(0x93))[_0x4f0491(0x252)] > 0x0 && _0x751fce[_0x4f0491(0x202)]();
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0xa0), _0x487b2e(0x216), function () {
                const _0x4da73c = _0x487b2e;
                let _0x23b2f5 = _0x263ffa(this)[_0x4da73c(0x294)]();
                _0x263ffa(this)['attr'](_0x4da73c(0x129)) == _0x4da73c(0x33c) ? _0x263ffa(this)['next']()[_0x4da73c(0x294)](_0x23b2f5) : _0x263ffa(this)[_0x4da73c(0x1db)]()['val'](_0x23b2f5), _0x23b2f5 >= 0x0 && _0x23b2f5 <= 0x1 && (_0x81f8cb[_0x4da73c(0x1c5)] = _0x23b2f5, GM_setValue(_0x4da73c(0x1cf), _0x23b2f5));
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x352), _0x487b2e(0x216), function () {
                const _0x3e8f6d = _0x487b2e;
                if (_0x263ffa(this)[_0x3e8f6d(0x146)](_0x3e8f6d(0x129)) == _0x3e8f6d(0x33c)) {
                    let _0x1a045d = _0x263ffa(this)['val']();
                    _0x263ffa(this)[_0x3e8f6d(0x22b)]()[_0x3e8f6d(0x294)](_0x1a045d);
                } else {
                    let _0x16bbb3 = _0x263ffa(this)[_0x3e8f6d(0x294)]();
                    _0x16bbb3 >= 0x0 && _0x16bbb3 <= 0x1 ? _0x263ffa(this)[_0x3e8f6d(0x1db)]()[_0x3e8f6d(0x294)](_0x16bbb3) : _0x16bbb3 < 0x0 ? _0x263ffa(this)[_0x3e8f6d(0x294)](0x0) : _0x263ffa(this)[_0x3e8f6d(0x294)](0x1);
                }
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x352), _0x487b2e(0xd3), function () {
                const _0x50bd4a = _0x487b2e;
                GM_setValue('G_RENAME_FORMAT', _0x263ffa(this)[_0x50bd4a(0x294)]()), _0x81f8cb[_0x50bd4a(0x1e8)] = _0x263ffa(this)['val']();
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), _0x487b2e(0x134), function (_0x40a9d1) {
                const _0x5b208f = _0x487b2e;
                _0x40a9d1[_0x5b208f(0x202)](), _0x322c0b(this);
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), _0x487b2e(0x119), function () {
                const _0x2688ab = _0x487b2e;
                if (_0x480d35[_0x2688ab(0x23b)] && _0x480d35[_0x2688ab(0x2aa)])
                    _0x322c0b(_0x263ffa(this)[_0x2688ab(0x365)]()[_0x2688ab(0x81)]('a')[_0x2688ab(0x30e)]()[0x0], !![]);
                else {
                    var _0x241eb1 = new URL(_0x263ffa(this)[_0x2688ab(0x365)]()['children']('a')[_0x2688ab(0x146)](_0x2688ab(0x270)));
                    _0x241eb1[_0x2688ab(0x16d)] = _0x2688ab(0x211), _0x1743b2(_0x241eb1[_0x2688ab(0x2a0)]);
                }
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), '.IG_POPUP_DIG_BODY\x20.videoThumbnail', function () {
                const _0x2eb9f6 = _0x487b2e;
                let _0x74c2b = new Date()[_0x2eb9f6(0x1c3)]();
                _0x480d35[_0x2eb9f6(0x148)] && _0x263ffa(this)[_0x2eb9f6(0x365)]()[_0x2eb9f6(0x81)]('a')[_0x2eb9f6(0x146)](_0x2eb9f6(0x1bd)) && (_0x74c2b = _0x263ffa(this)[_0x2eb9f6(0x365)]()[_0x2eb9f6(0x81)]('a')[_0x2eb9f6(0x146)](_0x2eb9f6(0x1bd)));
                let _0x2527f2 = _0x263ffa(this)[_0x2eb9f6(0x365)]()[_0x2eb9f6(0x81)]('a')[_0x2eb9f6(0x146)](_0x2eb9f6(0x10b)) ?? _0x263ffa(_0x2eb9f6(0x126))[_0x2eb9f6(0x337)]();
                _0x2d1195(_0x263ffa(this)[_0x2eb9f6(0x365)]()['children']('a')['find'](_0x2eb9f6(0x10f))['first']()[_0x2eb9f6(0x146)]('src'), _0x263ffa(this)['parent']()[_0x2eb9f6(0x81)]('a')['attr'](_0x2eb9f6(0xc0)), _0x2eb9f6(0x26e), _0x74c2b, _0x2eb9f6(0x1c2), _0x2527f2);
            }), _0x263ffa(_0x487b2e(0x26b))['on']('click', '.IG_DWSTORY', function () {
                _0x160299(!![]);
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), '.IG_DWSTORY_ALL', function () {
                _0xbb6258();
            }), _0x263ffa('body')['on'](_0x487b2e(0x1cd), _0x487b2e(0xb0), function (_0x49cd3d) {
                const _0x5559f3 = _0x487b2e;
                _0x49cd3d[_0x5559f3(0x202)](), _0x160299(!![], !![], !![]);
            }), _0x263ffa('body')['on'](_0x487b2e(0x1cd), _0x487b2e(0x1ca), function () {
                _0x102da3(!![]);
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), _0x487b2e(0x24e), function (_0x45282d) {
                const _0x21d97f = _0x487b2e;
                _0x45282d[_0x21d97f(0x24a)](), _0x523e40(!![]);
            }), _0x263ffa('body')['on'](_0x487b2e(0x1cd), '.IG_DWHISTORY', function () {
                _0x59fbfc(!![]);
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), _0x487b2e(0xf1), function () {
                _0x49a449();
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), '.IG_DWHINEWTAB', function (_0x1b21f0) {
                const _0x11738a = _0x487b2e;
                _0x1b21f0[_0x11738a(0x202)](), _0x59fbfc(!![], !![]);
            }), _0x263ffa(_0x487b2e(0x26b))['on']('click', _0x487b2e(0x27f), function () {
                _0x2cfcff(!![]);
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), '.IG_REELS', function () {
                _0x4f6aaf(!![], !![]);
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), _0x487b2e(0x290), function () {
                _0x4f6aaf(!![], !![], !![]);
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0x1cd), '.IG_REELS_THUMBNAIL', function () {
                _0x4f6aaf(!![], ![]);
            }), _0x263ffa('body')['on'](_0x487b2e(0x303), _0x487b2e(0xbf), function (_0x61617a) {
                const _0x3fa576 = _0x487b2e;
                if (_0x61617a[_0x3fa576(0x169)] === 0x3 || _0x61617a['which'] === 0x2) {
                    if (location[_0x3fa576(0x2a0)] === _0x3fa576(0x28d) && _0x480d35['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x61617a['preventDefault']();
                        if (_0x263ffa(this)[_0x3fa576(0x19c)](_0x3fa576(0x2c7))[_0x3fa576(0x252)] > 0x0) {
                            const _0x2821ee = _0x3fa576(0x28d) + _0x263ffa(this)[_0x3fa576(0x81)](_0x3fa576(0xf0))['last']()[_0x3fa576(0x337)]();
                            _0x61617a[_0x3fa576(0x169)] === 0x2 ? GM_openInTab(_0x2821ee) : location[_0x3fa576(0x2a0)] = _0x2821ee;
                        }
                    }
                }
            }), _0x263ffa('body')['on'](_0x487b2e(0xa0), _0x487b2e(0x139), function () {
                const _0x46f70f = _0x487b2e;
                var _0x498cf1 = _0x263ffa(this)[_0x46f70f(0x19c)](_0x46f70f(0x352))[_0x46f70f(0xfb)](_0x46f70f(0x84));
                _0x263ffa(_0x46f70f(0x309))[_0x46f70f(0x172)](function () {
                    const _0x2a9fbb = _0x46f70f;
                    _0x263ffa(this)[_0x2a9fbb(0xfb)](_0x2a9fbb(0x84), _0x498cf1);
                });
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0xa0), _0x487b2e(0x309), function () {
                const _0xb1e044 = _0x487b2e;
                var _0x4aaada = _0x263ffa('.IG_POPUP_DIG_BODY\x20.inner_box:checked')[_0xb1e044(0x252)], _0x348745 = _0x263ffa('.IG_POPUP_DIG_BODY\x20.inner_box')[_0xb1e044(0x252)];
                _0x263ffa(_0xb1e044(0x139))[_0xb1e044(0x19c)]('input')['prop'](_0xb1e044(0x84), _0x4aaada == _0x348745);
            }), _0x263ffa('body')['on'](_0x487b2e(0x1cd), _0x487b2e(0x25b), function () {
                const _0x3feb9b = _0x487b2e;
                let _0x83a1ac = 0x0;
                _0x263ffa(_0x3feb9b(0x1a8))['each'](function () {
                    const _0x56aa15 = _0x3feb9b;
                    _0x263ffa(this)[_0x56aa15(0x1db)]()['children']('input')[_0x56aa15(0xfb)]('checked') && (_0x263ffa(this)['trigger'](_0x56aa15(0x1cd)), _0x83a1ac++);
                }), _0x83a1ac == 0x0 && alert(_0x20b835(_0x3feb9b(0x8e)));
            }), _0x263ffa(_0x487b2e(0x26b))['on'](_0x487b2e(0xa0), '.IG_POPUP_DIG_TITLE\x20#langSelect', function () {
                const _0x470410 = _0x487b2e;
                GM_setValue('lang', _0x263ffa(this)[_0x470410(0x294)]()), _0x81f8cb[_0x470410(0x16b)] = _0x263ffa(this)['val'](), _0x81f8cb[_0x470410(0x16b)]?.['startsWith']('en') || _0x81f8cb[_0x470410(0x2ca)][_0x81f8cb[_0x470410(0x16b)]] != null ? (_0x3c7a2c(), _0x380260()) : _0x2f9541(_0x81f8cb['lang'])[_0x470410(0x319)](_0x31c2e8 => {
                    const _0x464693 = _0x470410;
                    _0x81f8cb['locale'][_0x81f8cb[_0x464693(0x16b)]] = _0x31c2e8, _0x3c7a2c(), _0x380260();
                })[_0x470410(0x2fc)](_0x444aa5 => {
                    const _0x412829 = _0x470410;
                    console[_0x412829(0x2e7)](_0x412829(0x13f), _0x444aa5);
                });
            }), _0x263ffa(_0x487b2e(0x26b))['on']('click', _0x487b2e(0x1e0), function () {
                const _0x509663 = _0x487b2e;
                _0x263ffa(_0x509663(0x1a8))['each'](function () {
                    const _0xc182ab = _0x509663;
                    _0x263ffa(this)[_0xc182ab(0x1c0)](_0xc182ab(0x1cd));
                });
            });
            const _0x1f9fae = new MutationObserver(_0x560816 => {
                const _0x370990 = _0x487b2e;
                for (const _0x14f086 of _0x560816) {
                    _0x14f086[_0x370990(0x129)] === _0x370990(0x334) && _0x14f086[_0x370990(0x291)][_0x370990(0x346)](_0x21eab1 => {
                        const _0x3bb612 = _0x370990, _0x5cf299 = _0x263ffa(_0x21eab1)['find'](_0x3bb612(0x92));
                        if (location['pathname']['startsWith'](_0x3bb612(0x2d5))) {
                            if (_0x263ffa(_0x21eab1)[_0x3bb612(0x146)]('data-ih-locale-title') == null && _0x263ffa(_0x21eab1)[_0x3bb612(0x146)](_0x3bb612(0x2a1)) == null && _0x21eab1[_0x3bb612(0x178)] === 'DIV') {
                                var _0x283e6f = _0x263ffa(_0x21eab1)['find'](_0x3bb612(0xb7));
                                let _0x47488c = _0x283e6f?.['attr']('title');
                                _0x47488c != null && _0x283e6f[_0x3bb612(0x337)](_0x47488c);
                            }
                        }
                        if (_0x5cf299['length'] > 0x0) {
                            _0x480d35[_0x3bb612(0x1fb)] && _0x5cf299[_0x3bb612(0x172)](function () {
                                const _0x9af5f1 = _0x3bb612;
                                _0x263ffa(this)['on'](_0x9af5f1(0x350), function () {
                                    const _0x2493bd = _0x9af5f1;
                                    !_0x263ffa(this)[_0x2493bd(0xfd)](_0x2493bd(0x330)) && (_0x263ffa(this)[_0x2493bd(0x146)](_0x2493bd(0x256), !![]), this[_0x2493bd(0x21a)] = _0x81f8cb[_0x2493bd(0x1c5)], _0x347764('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x3bb612(0x1e6)]['match'](/^(\/stories\/)/ig)) {
                                const _0x49b69b = location[_0x3bb612(0x1e6)][_0x3bb612(0x305)](/^(\/stories\/highlights\/)/ig) != null, _0x2b36ef = _0x49b69b ? _0x3bb612(0x141) : 'story';
                                _0x5cf299[_0x3bb612(0x172)](function () {
                                    const _0x48197e = _0x3bb612;
                                    _0x263ffa(this)['on'](_0x48197e(0x156), function () {
                                        const _0x132f1e = _0x48197e;
                                        if (!_0x263ffa(this)[_0x132f1e(0xfd)](_0x132f1e(0x20a))) {
                                            let _0x1836f8 = _0x263ffa(this);
                                            _0x1836f8[_0x132f1e(0x259)]('div[style][class]')[_0x132f1e(0x9a)](function () {
                                                const _0x58c13b = _0x132f1e;
                                                return _0x263ffa(this)[_0x58c13b(0x2fd)]() == _0x1836f8[_0x58c13b(0x2fd)]();
                                            })[_0x132f1e(0x19c)](_0x132f1e(0xdd))[_0x132f1e(0x252)] === 0x0 ? (_0x263ffa(this)[_0x132f1e(0x146)](_0x132f1e(0x235), !![]), _0x49b69b ? _0x2cfcff(![]) : _0x102da3(![]), _0x347764('(' + _0x2b36ef + ')', _0x132f1e(0x197))) : (_0x263ffa(this)[_0x132f1e(0x146)](_0x132f1e(0x235), !![]), _0x347764('(' + _0x2b36ef + ')', _0x132f1e(0x20c)));
                                        }
                                    });
                                    var _0xd23bf7 = _0x263ffa(this);
                                    if (_0x480d35['HTML5_VIDEO_CONTROL']) {
                                        if (!_0xd23bf7[_0x48197e(0xfd)](_0x48197e(0x30f))) {
                                            _0x347764('(' + _0x2b36ef + ')', _0x48197e(0x267));
                                            _0x480d35['MODIFY_VIDEO_VOLUME'] && (this[_0x48197e(0x21a)] = _0x81f8cb['videoVolume'], _0xd23bf7['on'](_0x48197e(0x349), function () {
                                                this['volume'] = _0x81f8cb['videoVolume'];
                                            }));
                                            let _0x587239 = _0xd23bf7['parents'](_0x48197e(0xf0))[_0x48197e(0x9a)](function () {
                                                    const _0x40be28 = _0x48197e;
                                                    return _0x263ffa(this)[_0x40be28(0x146)](_0x40be28(0x269)) == null && _0x263ffa(this)[_0x40be28(0x146)](_0x40be28(0x28e)) == null;
                                                })['first'](), _0x228b0a = _0x587239[_0x48197e(0x22b)]();
                                            _0x228b0a[_0x48197e(0x20e)]();
                                            let _0x2a9040 = _0x587239['find']('div[class][role=\x22button\x22]');
                                            _0x2a9040[_0x48197e(0x20e)]();
                                            const _0x17cf9d = function (_0x3a5aad) {
                                                const _0x82dfa9 = _0x48197e;
                                                _0x3a5aad[_0x82dfa9(0x202)](), _0xd23bf7[_0x82dfa9(0x351)]('z-index', '2'), _0xd23bf7[_0x82dfa9(0x146)](_0x82dfa9(0x30f), !![]), _0x2a9040[_0x82dfa9(0x20e)](), _0x228b0a[_0x82dfa9(0x20e)](), _0x4ad47e(_0xd23bf7, _0xd23bf7[_0x82dfa9(0x259)](_0x82dfa9(0x1f5))[_0x82dfa9(0x9a)](function () {
                                                    const _0x45e91e = _0x82dfa9;
                                                    return _0x263ffa(this)[_0x45e91e(0x2fd)]() == _0xd23bf7['width']();
                                                })[_0x82dfa9(0x30e)](), _0x2b36ef, 'vertical');
                                            };
                                            _0xd23bf7[_0x48197e(0x365)]()[_0x48197e(0x19c)](_0x48197e(0x31e))['on'](_0x48197e(0x1cb), _0x17cf9d), _0x2a9040['on'](_0x48197e(0x1cb), _0x17cf9d), _0x228b0a['on'](_0x48197e(0x1cb), _0x17cf9d), _0xd23bf7['on'](_0x48197e(0x1cb), function (_0x4d3117) {
                                                const _0x3aee61 = _0x48197e;
                                                _0x4d3117[_0x3aee61(0x202)](), _0xd23bf7[_0x3aee61(0x351)](_0x3aee61(0x2e9), '-1'), _0xd23bf7[_0x3aee61(0x299)]('controls'), _0x228b0a['show'](), _0x2a9040[_0x3aee61(0x1f2)](), _0x4ad47e(_0xd23bf7, _0xd23bf7[_0x3aee61(0x259)]('div[style][class]')['filter'](function () {
                                                    const _0x5bd5f8 = _0x3aee61;
                                                    return _0x263ffa(this)[_0x5bd5f8(0x2fd)]() == _0xd23bf7[_0x5bd5f8(0x2fd)]();
                                                })[_0x3aee61(0x30e)](), _0x2b36ef, 'vertical');
                                            }), _0xd23bf7['on'](_0x48197e(0x1f1), function () {
                                                const _0x18f519 = _0x48197e;
                                                let _0x45aa30 = _0x587239[_0x18f519(0x365)]()['find'](_0x18f519(0xbb))['parents']('[role=\x22button\x22]')[_0x18f519(0x30e)]();
                                                var _0x414697 = _0x45aa30['find'](_0x18f519(0x1df))[_0x18f519(0x252)] === 0x0;
                                                this['muted'] != _0x414697 && (this[_0x18f519(0x21a)] = _0x81f8cb[_0x18f519(0x1c5)], _0x45aa30?.[_0x18f519(0x1c0)](_0x18f519(0x1cd))), _0x263ffa(this)[_0x18f519(0x146)]('data-completed') && (_0x81f8cb[_0x18f519(0x1c5)] = this['volume'], GM_setValue(_0x18f519(0x1cf), this[_0x18f519(0x21a)])), this[_0x18f519(0x21a)] == _0x81f8cb['videoVolume'] && _0x263ffa(this)[_0x18f519(0x146)](_0x18f519(0xcc), !![]);
                                            }), _0xd23bf7['css'](_0x48197e(0x105), _0x48197e(0x1cc)), _0xd23bf7[_0x48197e(0x351)](_0x48197e(0x2e9), '2'), _0xd23bf7[_0x48197e(0x146)](_0x48197e(0xc8), !![]), _0xd23bf7[_0x48197e(0x146)](_0x48197e(0x30f), !![]);
                                        }
                                    } else
                                        _0x4ad47e(_0xd23bf7, _0xd23bf7['parents'](_0x48197e(0x1f5))[_0x48197e(0x9a)](function () {
                                            return _0x263ffa(this)['width']() == _0xd23bf7['width']();
                                        })['first'](), _0x2b36ef, _0x48197e(0x341));
                                });
                            }
                        }
                    });
                }
            });
            _0x1f9fae[_0x487b2e(0x19b)](_0x263ffa(_0x487b2e(0x30a))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));