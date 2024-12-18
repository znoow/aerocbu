// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            2.39.6
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

function a0_0x4566() {
    const _0x12950e = [
        'pointer',
        'scontent.cdninstagram.com',
        'createObjectURL',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'taken_at_timestamp',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'volume',
        'assign',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '<a\x20datetime=\x22',
        'hidden',
        'REPORT_DISCORD',
        'REPORT_GITHUB',
        'bottom',
        'change',
        '.SNKMS_IG_DW_MAIN',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        '.IG_DWSTORY',
        '#_SNLOAD',
        '.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN',
        'toString',
        'HTML5_VIDEO_CONTROL',
        'Display\x20HTML5\x20Video\x20Controller',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'className',
        'div',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        'img[referrerpolicy]',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        '</option>',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'script[type=\x22application/json\x22]',
        'svg',
        'data-loop',
        'FORCE_RESOURCE_VIA_MEDIA',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'user',
        'getMediaInfo()',
        'data-type',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '72KbFDPY',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'body\x20>\x20div\x20section:visible._ac0a',
        'toLocaleString',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        '--ig-track-progress:\x20',
        'DEBUG',
        'href',
        '.IG_DWPROFILE',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'GraphSidecar',
        '.IG_DWSTORY_THUMBNAIL',
        '_acnf',
        'Disable\x20Video\x20Auto-looping',
        '\x20-</a>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'Download\x20Video\x20Thumbnail',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        'BATCH_DOWNLOAD_DIRECT',
        'downloadURL',
        'REPORT_FORK',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'map',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'is_video',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'scrollBy',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'shortcode_media',
        'position',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'there\x20is\x20no\x20new\x20update',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'response',
        'wrap',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'LOAD_BLOB_ONE',
        'body',
        'getTranslationText\x20catch\x20error:',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'appendChild',
        '</button>',
        'getStories()',
        'modify',
        'find',
        'div#scrollview',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'type',
        '192285LixtaN',
        'searchParams',
        'volumechange',
        '._acnb',
        'isDialog',
        'DISABLE_VIDEO_LOOPING',
        'G_CHECK_TIMESTAMP',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'data-remove-thumbnail',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'highlights',
        'getTranslationText()',
        'relative',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'getFullYear',
        'label',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'Logger:\x0a',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'fail',
        'jpg',
        'which',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        'hide',
        'muted',
        'hostname',
        'parents',
        'onReadyMyDW()\x20Timer',
        'SKIP_VIEW_STORY_CONFIRM',
        'div.volume_slider\x20input',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'Found\x20post\x20container',
        'Loading\x20Blob\x20Media...',
        'userLanguage',
        'Manually\x20inserting\x20thumbnail\x20button',
        '\x22\x20/>',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'fadeOut',
        'getUserId()',
        '.IG_REELS',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        'error',
        'px;top:',
        'https://www.instagram.com/web/search/topsearch/?query=',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'Current\x20version:\x20',
        'a[href^=\x22/\x22]',
        'div\x20>\x20ul\x20li._acaz',
        'post',
        'getBlobMedia()',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'IMG',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        'https://i.instagram.com/api/v1/media/',
        'RENAME_PUBLISH_DATE',
        'img',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'userAgent',
        'undefined',
        'www.',
        'parse',
        'THUMBNAIL',
        '_blank',
        'catch',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'updatenotification',
        'class',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'smooth',
        'prev',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'div:last-child',
        '__typename',
        '%22}',
        'getBlobMediaWithQueryID()',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'Open\x20in\x20New\x20Tab',
        'profile_pic_url',
        'padStart',
        'removeClass',
        'Show\x20DOM\x20Tree',
        'getDate',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'SETTING',
        'before',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'div[id^=\x22mount\x22]',
        'download',
        'video_versions',
        'display_url',
        '<label\x20class=\x22globalSettings',
        '41537gQoUYO',
        'reels_media',
        'height',
        '</a></button><br/>',
        'regenerated',
        'users',
        'Video',
        'G_VIDEO_VOLUME',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'Reload\x20Script',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        '<a\x20media-id=\x22',
        'prop',
        '\x22\x20title=\x22',
        'addClass',
        'createElement',
        'Image',
        'responseText',
        'warn',
        'avatar',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'query_id',
        'finalUrl',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'div:not([class]):not([style])',
        'SCROLL_BUTTON',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'keyCode',
        'video_url',
        'NO_CHECK_RESOURCE',
        'node',
        'each',
        'AUTO_RENAME',
        '.IG_SN_DIG_BODY\x20.newTab',
        'edge_sidecar_to_children',
        'execCommand',
        'target',
        'append',
        'status',
        'vertical',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'Can\x20not\x20find\x20download\x20url.',
        'altKey',
        '.IG_DWHISTORY_THUMBNAIL',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'Request\x20with:',
        'thumbnail',
        '<div></div>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'x1lix1fw',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'split',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'reduce',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'data-modify',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'https://www.instagram.com/p/',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'getBlobMediaWithQuery()',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'logger\x20sliced',
        'xdt_api__v1__media__shortcode__web_info',
        'mouseenter',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'canvas._aarh',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'carousel_media',
        'FORCE_FETCH_ALL_RESOURCES',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'https://www.instagram.com/reels/',
        'data-completed',
        'replace',
        '</a>',
        'DIV',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        'numeric',
        'FEEDBACK',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'instagram.com/reels/',
        'navigator',
        'style',
        'contextmenu',
        'Download\x20All\x20Resources',
        '\x22\x20data-globalIndex=\x22',
        'isProfile',
        '.IG_SN_DIG\x20input',
        'Select\x20All',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'toUpperCase',
        'LOAD_BLOB_MULTIPLE',
        'Preference\x20Settings',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'div[style][class]',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'SHOW_DOM_TREE',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'substr',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'button[role=\x22menuitem\x22]',
        'data',
        '[data-snig]',
        'remove',
        'NOPATH',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'display_resources',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'DOMTree-',
        'body\x20>\x20div\x20section._ac0a',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'ended',
        'DONATE',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'Feedback',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'cursor',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        '<option\x20value=\x22',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'div\x20>\x20ul._acay',
        'video\x20+\x20div\x20>\x20div',
        'Cannot\x20find\x20video\x20URL.',
        'CLOSE',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'addedNodes',
        'src',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'Fetch\x20from\x20memory\x20cache:',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'candidates',
        'NEW_TAB',
        'DOWNLOAD',
        '[role=\x22button\x22]',
        'owner',
        'NOTICE_UPDATE_TITLE',
        '._acay\x20+\x20.x24i39r',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'lang',
        'user\x20settings',
        '.IG_REELS_NEWTAB',
        'data-username',
        'canDownload',
        '#locatePreview',
        'last',
        'script',
        'LOCALE_MANIFEST',
        'stringify',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        '6pUPidL',
        'input',
        'z-index',
        'select',
        '469630QocPmf',
        '._acay\x20._acaz',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'message',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'getUserHighSizeProfile()',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'code',
        'MODIFY_VIDEO_VOLUME',
        'getTime',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        'trim',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'toISOString',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'isStory',
        'join',
        'url',
        'textContent',
        'main\x20timer\x20re-register\x20completed',
        'next',
        '.videoThumbnail',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'hasReferrer',
        'isHighlightsStory',
        'observe',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'text',
        'isReels',
        '773092PMrjAd',
        'slice',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'getHours',
        'controls',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'filter',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'https://ko-fi.com/snkoarashi',
        'text/plain',
        'includes',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        '\x22]\x20span',
        'THUMBNAIL_INTRO',
        'GraphImage',
        'keydown',
        'DIRECT_DOWNLOAD_ALL',
        'story',
        'modify-thumbnail',
        'stopPropagation',
        'highlight',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        '37px',
        'isArray',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'remove-thumbnail',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        'first',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        '/accounts/login',
        '_INTRO',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        '*/*',
        'a[href^=\x22/p/\x22]',
        'parent',
        'keys',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'data-ih-locale',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'reels',
        'username',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'loop',
        'Checking\x20for\x20Script\x20Updates',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        '.IG_DWHINEWTAB',
        'article',
        'RELOAD_SCRIPT',
        'GM_unregisterMenuCommand',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'Close',
        'then',
        '</span>\x20',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        '_ac3q',
        'sort',
        'video',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'datetime',
        'setAttribute',
        'data-controls',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'replaceAll',
        '\x22\x20/></div>',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'video\x20volume\x20changed\x20#slider',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'G_RENAME_FORMAT',
        'media-id',
        'div[role=\x22presentation\x22]',
        'range',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'css',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'items',
        '_acnb',
        '._aagv\x20img',
        'srcset',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        '<div\x20class=\x22volume_slider\x20',
        'top',
        'host',
        'width',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'div[class][role=\x22button\x22]',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        '#article-id',
        'blob',
        'innerHTML',
        ':hidden',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'after',
        'getSeconds',
        '.IG_SN_DIG\x20.globalSettings',
        'boolean',
        '\x22\x20class=\x22IG_REELS\x22>',
        'selected',
        'attr',
        'hasClass',
        'x1s85apg',
        'click',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'getUserIdWithAgent()',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'play\x20playing',
        'location',
        '</a></button>',
        'ig_cache_key',
        'absolute',
        'video\x20+\x20div',
        'checked',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'startsWith',
        'shortcode',
        '/info/',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        '.txt',
        '\x0a-----\x0a\x0aLocation:\x20',
        'Remote\x20version:\x20',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'section\x20>\x20main[role=\x22main\x22]',
        'pathname',
        'data-modify-thumbnail',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '.xpgaw4o',
        'time',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'mp4',
        '#scrollWrapper',
        'disconnect',
        'val',
        'copy',
        'data-snig',
        '.IG_SN_DIG\x20#post_info',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'GET',
        '<a\x20href=\x22https://www.instagram.com/p/',
        '.IG_SN_DIG',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        'li._acaz',
        'children',
        'floor',
        'load',
        'px;\x22>',
        '2-digit',
        '\x22\x20datetime=\x22',
        '<input\x20value=\x22',
        'edges',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'log',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'childList',
        'video_resources',
        '.IG_DWHISTORY',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'BATCH_DOWNLOAD_SELECTED',
        'push',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        '1284462wYNVxt',
        'removeAttr',
        'trigging',
        'toLowerCase',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'loadstart',
        'close',
        'preventDefault',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '<p\x20id=\x22_SNLOAD\x22>',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'length',
        'getHighlightStories()',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'data-path',
        '.IG_DWNEWTAB',
        '._acay',
        '#tempWrapper',
        'padEnd',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'data-name',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'object',
        '\x22\x20class=\x22newTab\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'GraphVideo',
        'stories',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'getMonth',
        'a[data-needed=\x22direct\x22]',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        'div#splash-screen',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'VID',
        'taken_at',
        '2703250SkiyKS',
        'NOTICE_UPDATE_CONTENT',
        '994133ZbUsEH',
        'https://www.instagram.com/',
        'image_versions2',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'pause',
        'div.volume_slider',
        '2HMmktl',
        'data-href',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        'x1iyjqo2',
        'reject',
        'LOAD_BLOB_RELOAD',
        'INTERNAL_CSS',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'query_hash',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'forEach',
        'timeupdate',
        'match',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'feedback_message',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        '</div>',
        '[data-ih-locale]',
        '.SNKMS_IG_NEWTAB_MAIN',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'getPostOwner()'
    ];
    a0_0x4566 = function () {
        return _0x12950e;
    };
    return a0_0x4566();
}
function a0_0x3537(_0x16dbd2, _0x38fb97) {
    const _0x456607 = a0_0x4566();
    return a0_0x3537 = function (_0x3537f7, _0x1469c7) {
        _0x3537f7 = _0x3537f7 - 0x126;
        let _0x6aa37c = _0x456607[_0x3537f7];
        return _0x6aa37c;
    }, a0_0x3537(_0x16dbd2, _0x38fb97);
}
(function (_0x7ab3ec, _0x2f06d2) {
    const _0x272341 = a0_0x3537, _0x4f68e5 = _0x7ab3ec();
    while (!![]) {
        try {
            const _0x47257e = -parseInt(_0x272341(0x2d5)) / 0x1 * (-parseInt(_0x272341(0x1f8)) / 0x2) + parseInt(_0x272341(0x1ca)) / 0x3 + parseInt(_0x272341(0x395)) / 0x4 + -parseInt(_0x272341(0x378)) / 0x5 + parseInt(_0x272341(0x374)) / 0x6 * (-parseInt(_0x272341(0x1f2)) / 0x7) + parseInt(_0x272341(0x236)) / 0x8 * (parseInt(_0x272341(0x26f)) / 0x9) + -parseInt(_0x272341(0x1f0)) / 0xa;
            if (_0x47257e === _0x2f06d2)
                break;
            else
                _0x4f68e5['push'](_0x4f68e5['shift']());
        } catch (_0x3b750f) {
            _0x4f68e5['push'](_0x4f68e5['shift']());
        }
    }
}(a0_0x4566, 0x55333), function (_0x39bd05) {
    setTimeout(() => {
        'use strict';
        const _0x5b11ec = a0_0x3537;
        const _0x57497a = {
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
            }, _0x484c1f = [
                _0x5b11ec(0x2ac),
                _0x5b11ec(0x19c),
                _0x5b11ec(0x142)
            ];
        var _0x14b573 = GM_getValue(_0x5b11ec(0x2dc)) ? GM_getValue(_0x5b11ec(0x2dc)) : 0x1, _0x296ea0 = ![], _0x5b7341 = GM_getValue(_0x5b11ec(0x169)) ? GM_getValue('G_RENAME_FORMAT') : '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%';
        const _0x59d314 = {
                'DOWNLOAD': _0x5b11ec(0x1eb),
                'NEW_TAB': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
                'THUMBNAIL': _0x5b11ec(0x32a),
                'CLOSE': _0x5b11ec(0x287)
            }, _0x142d03 = 0xfa, _0x495474 = GM_getResourceText(_0x5b11ec(0x1fe)), _0x5f3498 = JSON[_0x5b11ec(0x2b3)](GM_getResourceText(_0x5b11ec(0x371)));
        var _0x29fe66 = [], _0x2c0e47 = {}, _0x277ca3 = GM_getValue('lang') || navigator['language'] || navigator[_0x5b11ec(0x294)], _0x213010 = location[_0x5b11ec(0x242)], _0x3c3778 = ![], _0x4daff7 = ![], _0x9ce3d0 = [], _0x5da670, _0x591442, _0x364855, _0x4b49c8, _0x49f4f = {
                'stories': {},
                'highlights': {}
            }, _0xd144f4 = new MutationObserver(function (_0x51d788, _0x49386f) {
                _0x1a1ffa();
            });
        _0x21a8ca(), GM_addStyle(_0x495474), _0x36ce27(), _0x49a085(_0x277ca3)[_0x5b11ec(0x159)](_0x16fbbd => {
            _0x2c0e47[_0x277ca3] = _0x16fbbd, _0x2c58e1(), _0x36ce27(), _0xf57d6b(0x12c);
        })['catch'](_0x5afb13 => {
            const _0x2b04fd = _0x5b11ec;
            _0x36ce27(), _0xf57d6b(0x12c), !_0x277ca3[_0x2b04fd(0x198)]('en') && console[_0x2b04fd(0x29d)](_0x2b04fd(0x263), _0x5afb13);
        });
        var _0x5ca01b = setInterval(function () {
            const _0x5f0463 = _0x5b11ec;
            if (_0x39bd05(_0x5f0463(0x1ec))[_0x5f0463(0x1d7)] > 0x0 && !_0x39bd05('div#splash-screen')['is'](_0x5f0463(0x180)) || location[_0x5f0463(0x1a4)][_0x5f0463(0x204)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x5f0463(0x28a)][_0x5f0463(0x198)](_0x5f0463(0x2b2))) {
                _0x4daff7 = ![];
                return;
            }
            if (_0x213010 != location[_0x5f0463(0x242)] || !_0x3c3778 || !_0x4daff7) {
                console[_0x5f0463(0x1c1)]('Main\x20Timer', _0x5f0463(0x1cc)), clearInterval(_0x4b49c8), _0x4daff7 = ![], _0x3c3778 = !![], _0x213010 = location[_0x5f0463(0x242)], _0xd144f4[_0x5f0463(0x1ad)]();
                if (location[_0x5f0463(0x242)][_0x5f0463(0x198)](_0x5f0463(0x313)) || location[_0x5f0463(0x1a4)][_0x5f0463(0x204)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x5f0463(0x242)][_0x5f0463(0x198)]('https://www.instagram.com/reel/')) {
                    _0x49f4f[_0x5f0463(0x1e7)] = {}, _0x49f4f[_0x5f0463(0x279)] = {}, _0x3e5117(_0x5f0463(0x273));
                    var _0x3a2050 = setInterval(() => {
                        const _0x5e232d = _0x5f0463;
                        _0x39bd05(_0x5e232d(0x265))[_0x5e232d(0x1d7)] > 0x0 && (clearInterval(_0x3a2050), setTimeout(() => {
                            _0x1a1ffa(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x4daff7 = !![];
                }
                location[_0x5f0463(0x242)][_0x5f0463(0x198)](_0x5f0463(0x321)) && (_0x3e5117(_0x5f0463(0x394)), setTimeout(() => {
                    _0x5ecfb9(![]);
                }, 0x96), _0x4daff7 = !![]);
                if (location[_0x5f0463(0x242)][_0x5f0463(0x30a)]('?')[0x0] == _0x5f0463(0x1f3)) {
                    _0x49f4f[_0x5f0463(0x1e7)] = {}, _0x49f4f[_0x5f0463(0x279)] = {};
                    let _0x10d41a = _0x5da670?.[_0x5f0463(0x204)](/^\/(stories|highlights)\//ig) != null;
                    _0x3e5117('isHomepage', _0x10d41a), setTimeout(() => {
                        const _0x9cf1fb = _0x5f0463;
                        _0x1a1ffa(![], _0x10d41a);
                        const _0x175fd4 = _0x39bd05(_0x9cf1fb(0x1b2))?.[_0x9cf1fb(0x148)]()[0x0];
                        _0x175fd4 && _0xd144f4['observe'](_0x175fd4, { 'childList': !![] });
                    }, 0x96), _0x4daff7 = !![];
                }
                _0x39bd05(_0x5f0463(0x316))[_0x5f0463(0x1d7)] && location[_0x5f0463(0x1a4)][_0x5f0463(0x204)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x5f0463(0x1a4)][_0x5f0463(0x204)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x3e5117(_0x5f0463(0x331)), setTimeout(() => {
                    _0x1782cf(![]);
                }, 0x96), _0x4daff7 = !![]);
                if (!_0x4daff7) {
                    if (location['href']['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x49f4f[_0x5f0463(0x279)] = {}, _0x3e5117(_0x5f0463(0x390)), _0x53d451(![]), _0x4b49c8 = setInterval(() => {
                            _0x2b0d6f(![]);
                        }, _0x142d03), _0x39bd05('.IG_DWHISTORY')[_0x5f0463(0x1d7)] && setTimeout(() => {
                            const _0x1d40c3 = _0x5f0463;
                            if (_0x57497a[_0x1d40c3(0x28d)]) {
                                var _0x11bdf9 = _0x39bd05(_0x1d40c3(0x2af))['filter'](function () {
                                    const _0x5758ff = _0x1d40c3;
                                    return _0x39bd05(this)[_0x5758ff(0x1b8)]()['length'] === 0x0 && this['textContent'][_0x5758ff(0x383)]() !== '';
                                });
                                _0x11bdf9?.[_0x1d40c3(0x18b)]();
                            }
                            _0x4daff7 = !![];
                        }, 0x96);
                    else
                        location[_0x5f0463(0x242)][_0x5f0463(0x204)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x3e5117(_0x5f0463(0x387)), _0x39bd05(_0x5f0463(0x33e))[_0x5f0463(0x1d7)] > 0x0 && (_0x39bd05(_0x5f0463(0x21e))[_0x5f0463(0x344)](), _0x39bd05(_0x5f0463(0x1db))[_0x5f0463(0x344)](), _0x39bd05(_0x5f0463(0x246))[_0x5f0463(0x1d7)] && _0x39bd05('.IG_DWSTORY_THUMBNAIL')[_0x5f0463(0x344)](), _0x533bb3(![]), setTimeout(() => {
                            _0x533bb3(![]);
                        }, 0x96)), _0x39bd05(_0x5f0463(0x21e))[_0x5f0463(0x1d7)] && setTimeout(() => {
                            const _0x38741f = _0x5f0463;
                            if (_0x57497a[_0x38741f(0x28d)]) {
                                var _0x4e344b = _0x39bd05(_0x38741f(0x2af))[_0x38741f(0x39c)](function () {
                                    const _0x4a72f0 = _0x38741f;
                                    return _0x39bd05(this)[_0x4a72f0(0x1b8)]()[_0x4a72f0(0x1d7)] === 0x0 && this[_0x4a72f0(0x38a)][_0x4a72f0(0x383)]() !== '';
                                });
                                _0x4e344b?.['click']();
                            }
                            _0x4daff7 = !![];
                        }, 0x96)) : (_0x4daff7 = ![], _0x39bd05('.IG_DWSTORY')[_0x5f0463(0x1d7)] && _0x39bd05(_0x5f0463(0x21e))[_0x5f0463(0x344)](), _0x39bd05(_0x5f0463(0x1db))['length'] && _0x39bd05(_0x5f0463(0x1db))[_0x5f0463(0x344)](), _0x39bd05(_0x5f0463(0x246))[_0x5f0463(0x1d7)] && _0x39bd05('.IG_DWSTORY_THUMBNAIL')[_0x5f0463(0x344)](), _0x39bd05('.IG_DWHISTORY')[_0x5f0463(0x1d7)] && _0x39bd05(_0x5f0463(0x1c5))['remove'](), _0x39bd05(_0x5f0463(0x153))[_0x5f0463(0x1d7)] && _0x39bd05('.IG_DWHINEWTAB')[_0x5f0463(0x344)](), _0x39bd05(_0x5f0463(0x302))[_0x5f0463(0x1d7)] && _0x39bd05(_0x5f0463(0x302))[_0x5f0463(0x344)]());
                }
                _0xf57d6b(0x12c), _0x5da670 = new URL(location[_0x5f0463(0x242)])[_0x5f0463(0x1a4)];
            }
        }, _0x142d03);
        async function _0x1782cf(_0x14c26e) {
            const _0x531aac = _0x5b11ec;
            if (_0x14c26e) {
                _0xe0c226(!![]);
                let _0x140f5c = new Date()[_0x531aac(0x381)](), _0x4a6344 = Math[_0x531aac(0x1b9)](_0x140f5c / 0x3e8), _0x1c6008 = location[_0x531aac(0x1a4)][_0x531aac(0x164)](/(reels|tagged)\/$/ig, '')[_0x531aac(0x30a)]('/')[_0x531aac(0x39c)](_0x12dbaa => _0x12dbaa['length'] > 0x0)['at'](-0x1), _0x45762e = await _0x1f4da5(_0x1c6008);
                try {
                    let _0x19b1ce = await _0x5ad68a(_0x45762e[_0x531aac(0x232)]['pk']);
                    _0x1dfca2(_0x19b1ce, _0x1c6008, _0x531aac(0x2e8), _0x4a6344, _0x531aac(0x285));
                } catch (_0x957303) {
                    _0x1dfca2(_0x45762e['user'][_0x531aac(0x2c6)], _0x1c6008, 'avatar', _0x4a6344, _0x531aac(0x285));
                }
                _0xe0c226(![]);
            } else {
                if (!_0x39bd05(_0x531aac(0x243))['length']) {
                    let _0x336ee9 = setInterval(() => {
                        const _0x5dd53e = _0x531aac;
                        if (_0x39bd05(_0x5dd53e(0x243))[_0x5dd53e(0x1d7)]) {
                            clearInterval(_0x336ee9);
                            return;
                        }
                        _0x39bd05('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')[_0x5dd53e(0x148)]()[_0x5dd53e(0x148)]()['append'](_0x5dd53e(0x39a) + _0x127cc3('DW') + _0x5dd53e(0x1d6) + _0x59d314[_0x5dd53e(0x363)] + _0x5dd53e(0x208)), _0x39bd05(_0x5dd53e(0x37a))[_0x5dd53e(0x148)]()[_0x5dd53e(0x148)]()['css'](_0x5dd53e(0x25a), _0x5dd53e(0x27b)), _0x39bd05(_0x5dd53e(0x18e))[_0x5dd53e(0x148)]()[_0x5dd53e(0x148)]()[_0x5dd53e(0x148)]()[_0x5dd53e(0x2fc)](_0x5dd53e(0x39a) + _0x127cc3('DW') + _0x5dd53e(0x1d6) + _0x59d314[_0x5dd53e(0x363)] + _0x5dd53e(0x208)), _0x39bd05(_0x5dd53e(0x18e))[_0x5dd53e(0x148)]()[_0x5dd53e(0x148)]()[_0x5dd53e(0x148)]()['css']('position', 'relative');
                    }, 0x96);
                }
            }
        }
        async function _0x53d451(_0xe76f15, _0x1d3591) {
            const _0x36494c = _0x5b11ec;
            if (_0xe76f15) {
                let _0x2b3ca1 = new Date()[_0x36494c(0x381)](), _0x9a59bb = Math['floor'](_0x2b3ca1 / 0x3e8), _0x14ca38 = location['href']['replace'](/\/$/ig, '')[_0x36494c(0x30a)]('/')['at'](-0x1), _0x4706e3 = _0x39bd05(_0x36494c(0x250))[_0x36494c(0x1d7)] || _0x39bd05('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')['length'] || _0x39bd05('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x36494c(0x26b)](_0x36494c(0x2f0))[_0x36494c(0x1d7)], _0x8f7c54 = '', _0x401980 = 0x0;
                _0xe0c226(!![]);
                if (_0x49f4f[_0x36494c(0x279)][_0x14ca38]) {
                    _0x3e5117(_0x36494c(0x35f), _0x14ca38);
                    let _0x1fb380 = _0x49f4f[_0x36494c(0x279)][_0x14ca38][_0x36494c(0x342)][_0x36494c(0x2d6)][0x0][_0x36494c(0x170)][_0x36494c(0x1d7)];
                    _0x8f7c54 = _0x49f4f[_0x36494c(0x279)][_0x14ca38]['data'][_0x36494c(0x2d6)][0x0]['owner'][_0x36494c(0x14e)], _0x401980 = _0x49f4f['highlights'][_0x14ca38][_0x36494c(0x342)][_0x36494c(0x2d6)][0x0]['items'][_0x1fb380 - _0x4706e3];
                } else {
                    let _0x4ebdb8 = await _0x549dd7(_0x14ca38), _0x1ad0e4 = _0x4ebdb8[_0x36494c(0x342)][_0x36494c(0x2d6)][0x0][_0x36494c(0x170)][_0x36494c(0x1d7)];
                    _0x8f7c54 = _0x4ebdb8[_0x36494c(0x342)][_0x36494c(0x2d6)][0x0][_0x36494c(0x365)][_0x36494c(0x14e)], _0x401980 = _0x4ebdb8[_0x36494c(0x342)][_0x36494c(0x2d6)][0x0]['items'][_0x1ad0e4 - _0x4706e3], _0x49f4f[_0x36494c(0x279)][_0x14ca38] = _0x4ebdb8;
                }
                _0x57497a[_0x36494c(0x2ac)] && (_0x9a59bb = _0x401980['taken_at_timestamp']);
                if (_0x57497a[_0x36494c(0x230)] && !_0x296ea0) {
                    let _0x427d0b = await _0x381264(_0x401980['id']);
                    _0x427d0b[_0x36494c(0x2fd)] === 'ok' ? _0x427d0b['items'][0x0][_0x36494c(0x2d2)] ? _0x1d3591 ? _0x4ca43c(_0x427d0b[_0x36494c(0x170)][0x0][_0x36494c(0x2d2)][0x0][_0x36494c(0x389)]) : _0x1dfca2(_0x427d0b[_0x36494c(0x170)][0x0][_0x36494c(0x2d2)][0x0]['url'], _0x8f7c54, _0x36494c(0x279), _0x9a59bb, _0x36494c(0x1ab), _0x14ca38) : _0x1d3591 ? _0x4ca43c(_0x427d0b[_0x36494c(0x170)][0x0]['image_versions2']['candidates'][0x0]['url']) : _0x1dfca2(_0x427d0b['items'][0x0]['image_versions2']['candidates'][0x0][_0x36494c(0x389)], _0x8f7c54, _0x36494c(0x279), _0x9a59bb, 'jpg', _0x14ca38) : (_0x57497a[_0x36494c(0x19c)] ? (delete _0x49f4f[_0x36494c(0x279)][_0x14ca38], _0x296ea0 = !![], _0x53d451(!![], _0x1d3591)) : alert(_0x36494c(0x181) + _0x427d0b[_0x36494c(0x37b)]), _0x3e5117(_0x427d0b));
                } else
                    _0x401980[_0x36494c(0x253)] ? _0x1d3591 ? _0x4ca43c(_0x401980[_0x36494c(0x1c4)]['at'](-0x1)[_0x36494c(0x35c)], _0x8f7c54) : _0x1dfca2(_0x401980['video_resources']['at'](-0x1)['src'], _0x8f7c54, _0x36494c(0x279), _0x9a59bb, _0x36494c(0x1ab), _0x14ca38) : _0x1d3591 ? _0x4ca43c(_0x401980['display_resources']['at'](-0x1)[_0x36494c(0x35c)], _0x8f7c54) : _0x1dfca2(_0x401980[_0x36494c(0x347)]['at'](-0x1)['src'], _0x8f7c54, _0x36494c(0x279), _0x9a59bb, _0x36494c(0x285), _0x14ca38), _0x296ea0 = ![];
                _0xe0c226(![]);
            } else {
                if (!_0x39bd05(_0x36494c(0x1c5))[_0x36494c(0x1d7)]) {
                    let _0x2f80a2 = null;
                    _0x39bd05(_0x36494c(0x34a))['length'] > 0x0 ? _0x2f80a2 = _0x39bd05(_0x36494c(0x239)) : (_0x2f80a2 = _0x39bd05(_0x36494c(0x2dd)), _0x2f80a2['css']('position', 'relative'));
                    if (_0x2f80a2['length'] === 0x0) {
                        let _0x129718 = _0x39bd05(_0x36494c(0x339)), _0x65f444 = 0x0;
                        _0x129718['each'](function () {
                            const _0x2d8eef = _0x36494c;
                            _0x39bd05(this)[_0x2d8eef(0x178)]() > _0x65f444 && (_0x65f444 = _0x39bd05(this)[_0x2d8eef(0x178)](), _0x2f80a2 = _0x39bd05(this)[_0x2d8eef(0x1b8)](_0x2d8eef(0x226))[_0x2d8eef(0x140)]());
                        });
                    }
                    _0x2f80a2 != null && (_0x2f80a2['append']('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x127cc3('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x59d314[_0x36494c(0x363)] + _0x36494c(0x208)), _0x2f80a2[_0x36494c(0x2fc)](_0x36494c(0x23d) + _0x127cc3(_0x36494c(0x362)) + _0x36494c(0x1c0) + _0x59d314[_0x36494c(0x362)] + _0x36494c(0x208)), _0x2f80a2[_0x36494c(0x26b)](_0x36494c(0x228))[_0x36494c(0x2f6)](function () {
                        _0x39bd05(this)['on']('load', function () {
                            const _0x3be1fc = a0_0x3537;
                            !_0x39bd05(this)['data']('remove-thumbnail') && (_0x2f80a2[_0x3be1fc(0x26b)]('.IG_DWHISTORY_THUMBNAIL')[_0x3be1fc(0x1d7)] === 0x0 ? (_0x39bd05(this)[_0x3be1fc(0x188)](_0x3be1fc(0x277), !![]), _0x39bd05(_0x3be1fc(0x302))['remove'](), _0x3e5117(_0x3be1fc(0x35a))) : (_0x39bd05(this)['attr'](_0x3be1fc(0x277), !![]), _0x3e5117(_0x3be1fc(0x16d))));
                        });
                    }));
                }
            }
        }
        async function _0x2b0d6f(_0x171323) {
            const _0x499c15 = _0x5b11ec;
            if (_0x171323) {
                let _0xddd5e2 = new Date()[_0x499c15(0x381)](), _0xa577c7 = Math[_0x499c15(0x1b9)](_0xddd5e2 / 0x3e8), _0x2bf356 = location[_0x499c15(0x242)]['replace'](/\/$/ig, '')[_0x499c15(0x30a)]('/')['at'](-0x1), _0x47a2fb = '', _0x1da5ed = _0x39bd05(_0x499c15(0x250))[_0x499c15(0x1d7)] || _0x39bd05(_0x499c15(0x307))[_0x499c15(0x1d7)] || _0x39bd05('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x499c15(0x26b)](_0x499c15(0x2f0))[_0x499c15(0x1d7)], _0x41c012 = '';
                _0xe0c226(!![]);
                if (_0x49f4f[_0x499c15(0x279)][_0x2bf356]) {
                    _0x3e5117('Fetch\x20from\x20memory\x20cache:', _0x2bf356);
                    let _0x1ccdd1 = _0x49f4f[_0x499c15(0x279)][_0x2bf356][_0x499c15(0x342)][_0x499c15(0x2d6)][0x0][_0x499c15(0x170)][_0x499c15(0x1d7)];
                    _0x47a2fb = _0x49f4f[_0x499c15(0x279)][_0x2bf356]['data'][_0x499c15(0x2d6)][0x0][_0x499c15(0x365)][_0x499c15(0x14e)], _0x41c012 = _0x49f4f[_0x499c15(0x279)][_0x2bf356][_0x499c15(0x342)][_0x499c15(0x2d6)][0x0][_0x499c15(0x170)][_0x1ccdd1 - _0x1da5ed];
                } else {
                    let _0xdf0d12 = await _0x549dd7(_0x2bf356), _0x4196e8 = _0xdf0d12[_0x499c15(0x342)][_0x499c15(0x2d6)][0x0][_0x499c15(0x170)]['length'];
                    _0x47a2fb = _0xdf0d12[_0x499c15(0x342)][_0x499c15(0x2d6)][0x0][_0x499c15(0x365)][_0x499c15(0x14e)], _0x41c012 = _0xdf0d12[_0x499c15(0x342)][_0x499c15(0x2d6)][0x0][_0x499c15(0x170)][_0x4196e8 - _0x1da5ed], _0x49f4f[_0x499c15(0x279)][_0x2bf356] = _0xdf0d12;
                }
                _0x57497a[_0x499c15(0x2ac)] && (_0xa577c7 = _0x41c012['taken_at_timestamp']);
                if (_0x57497a[_0x499c15(0x230)] && !_0x296ea0) {
                    let _0x255fb3 = await _0x381264(_0x41c012['id']);
                    _0x255fb3[_0x499c15(0x2fd)] === 'ok' ? _0x1dfca2(_0x255fb3['items'][0x0][_0x499c15(0x1f4)][_0x499c15(0x361)][0x0][_0x499c15(0x389)], _0x47a2fb, _0x499c15(0x279), _0xa577c7, _0x499c15(0x285), _0x2bf356) : (_0x57497a[_0x499c15(0x19c)] ? (delete _0x49f4f[_0x499c15(0x279)][_0x2bf356], _0x296ea0 = !![], _0x2b0d6f(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x255fb3[_0x499c15(0x37b)]), _0x3e5117(_0x255fb3));
                } else
                    _0x1dfca2(_0x41c012['display_resources']['at'](-0x1)[_0x499c15(0x35c)], _0x47a2fb, _0x499c15(0x279), _0xa577c7, _0x499c15(0x285), _0x2bf356), _0x296ea0 = ![];
                _0xe0c226(![]);
            } else {
                if (_0x39bd05(_0x499c15(0x126))['length']) {
                    if (!_0x39bd05(_0x499c15(0x302))['length']) {
                        let _0xb73788 = null;
                        _0x39bd05(_0x499c15(0x34a))[_0x499c15(0x1d7)] > 0x0 ? _0xb73788 = _0x39bd05('body\x20>\x20div\x20section:visible._ac0a') : (_0xb73788 = _0x39bd05('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0xb73788[_0x499c15(0x16e)](_0x499c15(0x25a), 'relative'));
                        if (_0xb73788[_0x499c15(0x1d7)] === 0x0) {
                            let _0x148e72 = _0x39bd05(_0x499c15(0x339)), _0x38ea59 = 0x0;
                            _0x148e72['each'](function () {
                                const _0x2e6826 = _0x499c15;
                                _0x39bd05(this)['width']() > _0x38ea59 && (_0x38ea59 = _0x39bd05(this)[_0x2e6826(0x178)](), _0xb73788 = _0x39bd05(this)[_0x2e6826(0x1b8)](_0x2e6826(0x226))[_0x2e6826(0x140)]());
                            });
                        }
                        _0xb73788 != null && _0xb73788[_0x499c15(0x2fc)](_0x499c15(0x256) + _0x127cc3(_0x499c15(0x130)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x59d314[_0x499c15(0x2b4)] + _0x499c15(0x208));
                    }
                } else
                    _0x39bd05(_0x499c15(0x302))[_0x499c15(0x344)]();
            }
        }
        async function _0x533bb3(_0x48a6ff, _0x359b03, _0x4f1abb) {
            const _0x20aae3 = _0x5b11ec;
            if (_0x48a6ff) {
                let _0x17a45c = new Date()[_0x20aae3(0x381)](), _0x56c098 = Math[_0x20aae3(0x1b9)](_0x17a45c / 0x3e8), _0x3255b0 = _0x39bd05(_0x20aae3(0x260))['first']()[_0x20aae3(0x393)]() || location[_0x20aae3(0x1a4)][_0x20aae3(0x30a)]('/')[_0x20aae3(0x39c)](_0x355302 => _0x355302['length'] > 0x0)['at'](0x1);
                _0xe0c226(!![]);
                if (_0x57497a['FORCE_RESOURCE_VIA_MEDIA'] && !_0x296ea0) {
                    let _0x4edc09 = null, _0x5a50e7 = await _0x1f4da5(_0x3255b0), _0x365f1a = _0x5a50e7['user']['pk'], _0x433129 = await _0x3dc445(_0x365f1a), _0x581728 = location[_0x20aae3(0x1a4)]['split']('/')['filter'](_0x516fbf => _0x516fbf[_0x20aae3(0x1d7)] > 0x0 && _0x516fbf[_0x20aae3(0x204)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x433129[_0x20aae3(0x342)][_0x20aae3(0x2d6)][0x0][_0x20aae3(0x170)][_0x20aae3(0x202)](_0x248b4c => {
                        _0x248b4c['id'] == _0x581728 && (_0x4edc09 = _0x248b4c['id']);
                    });
                    if (_0x4edc09 == null) {
                        let _0x23ae36 = _0x39bd05(_0x20aae3(0x27e) + _0x3255b0 + _0x20aae3(0x12f))[_0x20aae3(0x39c)](function () {
                            const _0x45a406 = _0x20aae3;
                            return _0x39bd05(this)[_0x45a406(0x1b8)]()[_0x45a406(0x1d7)] === 0x0 && _0x39bd05(this)[_0x45a406(0x26b)](_0x45a406(0x22e))[_0x45a406(0x1d7)] === 0x0 && _0x39bd05(this)[_0x45a406(0x393)]()?.[_0x45a406(0x1cd)]() === _0x3255b0?.[_0x45a406(0x1cd)]();
                        })['parents'](_0x20aae3(0x2ee))['filter'](function () {
                            const _0x386f8c = _0x20aae3;
                            return _0x39bd05(this)[_0x386f8c(0x393)]()?.['toLowerCase']() !== _0x3255b0?.[_0x386f8c(0x1cd)]();
                        })[_0x20aae3(0x39c)](function () {
                            const _0x4b25c6 = _0x20aae3;
                            return _0x39bd05(this)[_0x4b25c6(0x1b8)]()['length'] > 0x1;
                        })[_0x20aae3(0x140)]();
                        _0x23ae36[_0x20aae3(0x1b8)]()['filter'](function () {
                            const _0x2a34b8 = _0x20aae3;
                            return _0x39bd05(this)[_0x2a34b8(0x2d7)]() < 0xa;
                        })[_0x20aae3(0x140)]()[_0x20aae3(0x1b8)]()[_0x20aae3(0x2f6)](function (_0x2f6c53) {
                            const _0x365683 = _0x20aae3;
                            _0x39bd05(this)[_0x365683(0x1b8)]()[_0x365683(0x1d7)] > 0x0 && (_0x4edc09 = _0x433129[_0x365683(0x342)][_0x365683(0x2d6)][0x0]['items'][_0x2f6c53]['id']);
                        });
                    }
                    _0x4edc09 == null && (_0x39bd05(_0x20aae3(0x35d))['each'](function (_0x271416) {
                        const _0x471cb1 = _0x20aae3;
                        _0x39bd05(this)[_0x471cb1(0x189)](_0x471cb1(0x308)) && (_0x39bd05(this)[_0x471cb1(0x1b8)]()[_0x471cb1(0x1d7)] > 0x0 && (_0x4edc09 = _0x433129[_0x471cb1(0x342)][_0x471cb1(0x2d6)][0x0][_0x471cb1(0x170)][_0x271416]['id']));
                    }), _0x39bd05(_0x20aae3(0x368))[_0x20aae3(0x2f6)](function (_0x12cb6d) {
                        const _0x5ddb78 = _0x20aae3;
                        _0x39bd05(this)[_0x5ddb78(0x1b8)]()[_0x5ddb78(0x189)]('_ac3q') && (_0x4edc09 = _0x433129[_0x5ddb78(0x342)][_0x5ddb78(0x2d6)][0x0]['items'][_0x12cb6d]['id']);
                    }));
                    _0x4edc09 == null && (_0x4edc09 = location[_0x20aae3(0x1a4)]['split']('/')['filter'](_0x289f21 => _0x289f21[_0x20aae3(0x1d7)] > 0x0 && _0x289f21[_0x20aae3(0x204)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x5c356e = await _0x381264(_0x4edc09);
                    _0x57497a[_0x20aae3(0x2ac)] && (_0x56c098 = _0x5c356e[_0x20aae3(0x170)][0x0]['taken_at']);
                    _0x5c356e[_0x20aae3(0x2fd)] === 'ok' ? _0x5c356e[_0x20aae3(0x170)][0x0][_0x20aae3(0x2d2)] ? _0x4f1abb ? _0x4ca43c(_0x5c356e[_0x20aae3(0x170)][0x0]['video_versions'][0x0][_0x20aae3(0x389)]) : _0x1dfca2(_0x5c356e[_0x20aae3(0x170)][0x0]['video_versions'][0x0][_0x20aae3(0x389)], _0x3255b0, _0x20aae3(0x1e7), _0x56c098, _0x20aae3(0x1ab), _0x4edc09) : _0x4f1abb ? _0x4ca43c(_0x5c356e[_0x20aae3(0x170)][0x0][_0x20aae3(0x1f4)][_0x20aae3(0x361)][0x0][_0x20aae3(0x389)]) : _0x1dfca2(_0x5c356e[_0x20aae3(0x170)][0x0][_0x20aae3(0x1f4)][_0x20aae3(0x361)][0x0][_0x20aae3(0x389)], _0x3255b0, _0x20aae3(0x1e7), _0x56c098, _0x20aae3(0x285), _0x4edc09) : (_0x57497a[_0x20aae3(0x19c)] ? (_0x296ea0 = !![], _0x533bb3(_0x48a6ff, _0x359b03, _0x4f1abb)) : alert(_0x20aae3(0x181) + _0x5c356e[_0x20aae3(0x37b)]), _0x3e5117(_0x5c356e));
                    _0xe0c226(![]);
                    return;
                }
                if (_0x39bd05('body\x20>\x20div\x20section:visible\x20video[playsinline]')[_0x20aae3(0x1d7)] > 0x0) {
                    let _0x1bec91 = _0x20aae3(0x1ab), _0x4cc953 = '', _0x19d2d4 = location[_0x20aae3(0x1a4)][_0x20aae3(0x323)](/\/$/ig, '')[_0x20aae3(0x30a)]('/')['at'](-0x1), _0x1653a2 = null;
                    if (_0x49f4f[_0x20aae3(0x1e7)][_0x3255b0] && !_0x359b03) {
                        _0x3e5117(_0x20aae3(0x35f), _0x3255b0), _0x49f4f['stories'][_0x3255b0][_0x20aae3(0x342)][_0x20aae3(0x2d6)][0x0]['items'][_0x20aae3(0x202)](_0x43d27a => {
                            const _0x40565c = _0x20aae3;
                            _0x43d27a['id'] == _0x19d2d4 && (_0x4cc953 = _0x43d27a[_0x40565c(0x1c4)][0x0][_0x40565c(0x35c)], _0x57497a[_0x40565c(0x2ac)] && (_0x56c098 = _0x43d27a[_0x40565c(0x211)], _0x1653a2 = _0x43d27a['id']));
                        });
                        if (_0x4cc953[_0x20aae3(0x1d7)] == 0x0) {
                            _0x3e5117(_0x20aae3(0x1ff), _0x3255b0), _0x533bb3(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x471505 = await _0x1f4da5(_0x3255b0), _0x4f91ae = _0x471505[_0x20aae3(0x232)]['pk'], _0x2996ec = await _0x3dc445(_0x4f91ae);
                        _0x2996ec[_0x20aae3(0x342)][_0x20aae3(0x2d6)][0x0][_0x20aae3(0x170)][_0x20aae3(0x202)](_0x21816c => {
                            const _0x2d1c0b = _0x20aae3;
                            _0x21816c['id'] == _0x19d2d4 && (_0x4cc953 = _0x21816c[_0x2d1c0b(0x1c4)][0x0]['src'], _0x57497a['RENAME_PUBLISH_DATE'] && (_0x56c098 = _0x21816c[_0x2d1c0b(0x211)], _0x1653a2 = _0x21816c['id']));
                        });
                        if (_0x4cc953['length'] == 0x0) {
                            let _0x5e1208 = _0x39bd05(_0x20aae3(0x27e) + _0x3255b0 + _0x20aae3(0x12f))[_0x20aae3(0x39c)](function () {
                                const _0x1f1b9a = _0x20aae3;
                                return _0x39bd05(this)[_0x1f1b9a(0x1b8)]()['length'] === 0x0 && _0x39bd05(this)[_0x1f1b9a(0x26b)](_0x1f1b9a(0x22e))[_0x1f1b9a(0x1d7)] === 0x0 && _0x39bd05(this)['text']()?.['toLowerCase']() === _0x3255b0?.[_0x1f1b9a(0x1cd)]();
                            })['parents'](_0x20aae3(0x2ee))['filter'](function () {
                                const _0x263e78 = _0x20aae3;
                                return _0x39bd05(this)[_0x263e78(0x393)]()?.[_0x263e78(0x1cd)]() !== _0x3255b0?.[_0x263e78(0x1cd)]();
                            })[_0x20aae3(0x39c)](function () {
                                const _0x3810b2 = _0x20aae3;
                                return _0x39bd05(this)[_0x3810b2(0x1b8)]()[_0x3810b2(0x1d7)] > 0x1;
                            })['first']();
                            _0x5e1208[_0x20aae3(0x1b8)]()[_0x20aae3(0x39c)](function () {
                                const _0x5d488b = _0x20aae3;
                                return _0x39bd05(this)[_0x5d488b(0x2d7)]() < 0xa;
                            })[_0x20aae3(0x140)]()[_0x20aae3(0x1b8)]()[_0x20aae3(0x2f6)](function (_0x41a8eb) {
                                const _0x2be6a0 = _0x20aae3;
                                _0x39bd05(this)['children']()['length'] > 0x0 && (_0x4cc953 = _0x2996ec[_0x2be6a0(0x342)][_0x2be6a0(0x2d6)][0x0][_0x2be6a0(0x170)][_0x41a8eb][_0x2be6a0(0x1c4)][0x0][_0x2be6a0(0x35c)], _0x57497a[_0x2be6a0(0x2ac)] && (_0x56c098 = _0x2996ec[_0x2be6a0(0x342)][_0x2be6a0(0x2d6)][0x0][_0x2be6a0(0x170)][_0x41a8eb]['taken_at_timestamp'], _0x1653a2 = _0x2996ec[_0x2be6a0(0x342)]['reels_media'][0x0][_0x2be6a0(0x170)][_0x41a8eb]['id']));
                            }), _0x4cc953[_0x20aae3(0x1d7)] == 0x0 && (_0x39bd05(_0x20aae3(0x35d))[_0x20aae3(0x2f6)](function (_0x199da2) {
                                const _0x3e7782 = _0x20aae3;
                                _0x39bd05(this)[_0x3e7782(0x189)](_0x3e7782(0x308)) && (_0x39bd05(this)['children']()[_0x3e7782(0x1d7)] > 0x0 && (_0x4cc953 = _0x2996ec[_0x3e7782(0x342)][_0x3e7782(0x2d6)][0x0][_0x3e7782(0x170)][_0x199da2][_0x3e7782(0x1c4)][0x0][_0x3e7782(0x35c)], _0x57497a[_0x3e7782(0x2ac)] && (_0x56c098 = _0x2996ec[_0x3e7782(0x342)][_0x3e7782(0x2d6)][0x0][_0x3e7782(0x170)][_0x199da2][_0x3e7782(0x211)], _0x1653a2 = _0x2996ec['data']['reels_media'][0x0][_0x3e7782(0x170)][_0x199da2]['id'])));
                            }), _0x39bd05(_0x20aae3(0x368))[_0x20aae3(0x2f6)](function (_0x2cc217) {
                                const _0xfbd0b8 = _0x20aae3;
                                _0x39bd05(this)['children']()[_0xfbd0b8(0x189)]('_ac3q') && (_0x4cc953 = _0x2996ec[_0xfbd0b8(0x342)][_0xfbd0b8(0x2d6)][0x0][_0xfbd0b8(0x170)][_0x2cc217][_0xfbd0b8(0x1c4)][0x0]['src'], _0x57497a['RENAME_PUBLISH_DATE'] && (_0x56c098 = _0x2996ec[_0xfbd0b8(0x342)][_0xfbd0b8(0x2d6)][0x0][_0xfbd0b8(0x170)][_0x2cc217][_0xfbd0b8(0x211)], _0x1653a2 = _0x2996ec[_0xfbd0b8(0x342)][_0xfbd0b8(0x2d6)][0x0]['items'][_0x2cc217]['id']));
                            }));
                        }
                        _0x49f4f[_0x20aae3(0x1e7)][_0x3255b0] = _0x2996ec;
                    }
                    _0x4cc953['length'] == 0x0 ? alert(_0x127cc3('NO_VID_URL')) : _0x4f1abb ? _0x4ca43c(_0x4cc953) : _0x1dfca2(_0x4cc953, _0x3255b0, 'stories', _0x56c098, _0x1bec91, _0x1653a2);
                } else {
                    let _0xe26f74 = _0x39bd05(_0x20aae3(0x2e9))[_0x20aae3(0x188)]('srcset')?.[_0x20aae3(0x30a)](',')[0x0]?.[_0x20aae3(0x30a)]('\x20')[0x0], _0x41399a = _0xe26f74 ? _0xe26f74 : _0x39bd05(_0x20aae3(0x2e9))[_0x20aae3(0x39c)](function () {
                            const _0x521759 = _0x20aae3;
                            return _0x39bd05(this)[_0x521759(0x28b)]('a')['length'] === 0x0 && _0x39bd05(this)[_0x521759(0x178)]() === _0x39bd05(this)[_0x521759(0x148)]()['width']();
                        })[_0x20aae3(0x188)](_0x20aae3(0x35c));
                    if (!_0x41399a) {
                        let _0x70ec6 = _0x39bd05(_0x20aae3(0x16f));
                        _0x41399a = _0x70ec6[_0x20aae3(0x188)]('srcset') ? _0x70ec6[_0x20aae3(0x188)]('srcset')?.[_0x20aae3(0x30a)](',')[0x0]?.[_0x20aae3(0x30a)]('\x20')[0x0] : _0x70ec6[_0x20aae3(0x188)](_0x20aae3(0x35c));
                    }
                    _0x57497a['RENAME_PUBLISH_DATE'] && (_0x56c098 = new Date(_0x39bd05(_0x20aae3(0x1ce))[_0x20aae3(0x140)]()[_0x20aae3(0x188)](_0x20aae3(0x160)))[_0x20aae3(0x381)]());
                    let _0x2a36fa = _0x41399a, _0x4ba394 = _0x20aae3(0x285);
                    _0x4f1abb ? _0x4ca43c(_0x2a36fa) : _0x1dfca2(_0x2a36fa, _0x3255b0, _0x20aae3(0x1e7), _0x56c098, _0x4ba394, _0x40e90d(_0x2a36fa) ?? '');
                }
                _0x296ea0 = ![], _0xe0c226(![]);
            } else {
                let _0x1898c4 = _0x20aae3(0x2aa);
                if (!_0x39bd05(_0x20aae3(0x21e))['length']) {
                    _0x49f4f[_0x20aae3(0x1e7)] = {};
                    let _0x30cee9 = null;
                    _0x39bd05(_0x20aae3(0x34a))[_0x20aae3(0x1d7)] > 0x0 ? _0x30cee9 = _0x39bd05('body\x20>\x20div\x20section:visible._ac0a') : (_0x30cee9 = _0x39bd05(_0x20aae3(0x2dd)), _0x30cee9[_0x20aae3(0x16e)](_0x20aae3(0x25a), 'relative'));
                    _0x30cee9[_0x20aae3(0x1d7)] === 0x0 && (_0x30cee9 = _0x39bd05(_0x20aae3(0x33e))['parent']()['parent']()[_0x20aae3(0x148)]()['find'](_0x20aae3(0x212)), _0x30cee9[_0x20aae3(0x16e)]('position', 'relative'));
                    _0x30cee9['length'] === 0x0 && (_0x30cee9 = _0x39bd05('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')['parent']()[_0x20aae3(0x148)]()[_0x20aae3(0x148)]()[_0x20aae3(0x26b)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x30cee9[_0x20aae3(0x16e)](_0x20aae3(0x25a), _0x20aae3(0x27b)));
                    if (_0x30cee9['length'] === 0x0) {
                        let _0x1f3211 = _0x39bd05(_0x20aae3(0x339)), _0x1b33d2 = 0x0;
                        _0x1f3211[_0x20aae3(0x2f6)](function () {
                            const _0x2e963c = _0x20aae3;
                            _0x39bd05(this)[_0x2e963c(0x178)]() > _0x1b33d2 && (_0x1b33d2 = _0x39bd05(this)[_0x2e963c(0x178)](), _0x30cee9 = _0x39bd05(this)['children'](_0x2e963c(0x226))[_0x2e963c(0x140)]());
                        });
                    }
                    _0x30cee9 != null && (_0x30cee9[_0x20aae3(0x140)]()[_0x20aae3(0x16e)](_0x20aae3(0x25a), _0x20aae3(0x27b)), _0x30cee9[_0x20aae3(0x140)]()[_0x20aae3(0x2fc)](_0x20aae3(0x39a) + _0x127cc3('DW') + _0x20aae3(0x205) + _0x59d314[_0x20aae3(0x363)] + _0x20aae3(0x208)), _0x30cee9[_0x20aae3(0x140)]()['append'](_0x20aae3(0x23d) + _0x127cc3(_0x20aae3(0x362)) + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x59d314[_0x20aae3(0x362)] + _0x20aae3(0x208)), _0x30cee9['find'](_0x20aae3(0x228))['each'](function () {
                        const _0x50a975 = _0x20aae3;
                        _0x39bd05(this)['on'](_0x50a975(0x1ba), function () {
                            const _0x2a96ef = _0x50a975;
                            !_0x39bd05(this)[_0x2a96ef(0x342)](_0x2a96ef(0x13d)) && (_0x30cee9['find'](_0x2a96ef(0x246))[_0x2a96ef(0x1d7)] === 0x0 ? (_0x39bd05(this)[_0x2a96ef(0x188)](_0x2a96ef(0x277), !![]), _0x39bd05(_0x2a96ef(0x246))[_0x2a96ef(0x344)](), _0x3e5117(_0x2a96ef(0x27d))) : (_0x39bd05(this)['attr'](_0x2a96ef(0x277), !![]), _0x3e5117(_0x2a96ef(0x30d))));
                        });
                    }));
                }
            }
        }
        async function _0x409ce0(_0x4246f1, _0x1563c0) {
            const _0x39665f = _0x5b11ec;
            if (_0x4246f1) {
                let _0x399cb9 = new Date()['getTime'](), _0x1bc76a = Math[_0x39665f(0x1b9)](_0x399cb9 / 0x3e8), _0x274bfb = _0x39665f(0x285), _0x91ada1 = _0x39bd05(_0x39665f(0x260))[_0x39665f(0x140)]()[_0x39665f(0x393)]() || location[_0x39665f(0x1a4)]['split']('/')['at'](0x2), _0x24225e = 'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;', _0x1d716d = location[_0x39665f(0x1a4)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x7ed271 = '', _0x8a3a1e = null;
                _0xe0c226(!![]);
                if (_0x57497a[_0x39665f(0x230)] && !_0x296ea0) {
                    let _0x44301d = await _0x1f4da5(_0x91ada1), _0x1e2ce9 = _0x44301d[_0x39665f(0x232)]['pk'], _0x2f7998 = await _0x3dc445(_0x1e2ce9), _0x532146 = location[_0x39665f(0x1a4)]['split']('/')[_0x39665f(0x39c)](_0x2c367e => _0x2c367e[_0x39665f(0x1d7)] > 0x0 && _0x2c367e[_0x39665f(0x204)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x2f7998['data'][_0x39665f(0x2d6)][0x0]['items']['forEach'](_0x4c9892 => {
                        _0x4c9892['id'] == _0x532146 && (_0x8a3a1e = _0x4c9892['id']);
                    });
                    if (_0x8a3a1e == null) {
                        let _0x271b51 = _0x39bd05(_0x39665f(0x27e) + _0x91ada1 + _0x39665f(0x12f))['filter'](function () {
                            const _0x25c41e = _0x39665f;
                            return _0x39bd05(this)['children']()[_0x25c41e(0x1d7)] === 0x0 && _0x39bd05(this)[_0x25c41e(0x26b)](_0x25c41e(0x22e))[_0x25c41e(0x1d7)] === 0x0 && _0x39bd05(this)[_0x25c41e(0x393)]()?.[_0x25c41e(0x1cd)]() === _0x91ada1?.[_0x25c41e(0x1cd)]();
                        })['parents'](_0x39665f(0x2ee))[_0x39665f(0x39c)](function () {
                            const _0x13c267 = _0x39665f;
                            return _0x39bd05(this)[_0x13c267(0x393)]()?.[_0x13c267(0x1cd)]() !== _0x91ada1?.['toLowerCase']();
                        })['filter'](function () {
                            const _0x3dba01 = _0x39665f;
                            return _0x39bd05(this)[_0x3dba01(0x1b8)]()['length'] > 0x1;
                        })[_0x39665f(0x140)]();
                        _0x271b51[_0x39665f(0x1b8)]()[_0x39665f(0x39c)](function () {
                            const _0x5dd88f = _0x39665f;
                            return _0x39bd05(this)[_0x5dd88f(0x2d7)]() < 0xa;
                        })['first']()[_0x39665f(0x1b8)]()[_0x39665f(0x2f6)](function (_0x165b06) {
                            const _0x343a7a = _0x39665f;
                            _0x39bd05(this)[_0x343a7a(0x1b8)]()[_0x343a7a(0x1d7)] > 0x0 && (_0x8a3a1e = _0x2f7998[_0x343a7a(0x342)][_0x343a7a(0x2d6)][0x0]['items'][_0x165b06]['id']);
                        });
                    }
                    _0x8a3a1e == null && (_0x39bd05(_0x39665f(0x35d))[_0x39665f(0x2f6)](function (_0x578fcc) {
                        const _0x19d5f1 = _0x39665f;
                        _0x39bd05(this)[_0x19d5f1(0x189)]('x1lix1fw') && (_0x39bd05(this)[_0x19d5f1(0x1b8)]()['length'] > 0x0 && (_0x8a3a1e = _0x2f7998[_0x19d5f1(0x342)]['reels_media'][0x0]['items'][_0x578fcc]['id']));
                    }), _0x39bd05('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x39665f(0x2f6)](function (_0x37aaee) {
                        const _0x553ad6 = _0x39665f;
                        _0x39bd05(this)[_0x553ad6(0x1b8)]()[_0x553ad6(0x189)](_0x553ad6(0x15c)) && (_0x8a3a1e = _0x2f7998[_0x553ad6(0x342)]['reels_media'][0x0][_0x553ad6(0x170)][_0x37aaee]['id']);
                    }));
                    _0x8a3a1e == null && (_0x8a3a1e = location[_0x39665f(0x1a4)][_0x39665f(0x30a)]('/')[_0x39665f(0x39c)](_0x9a8713 => _0x9a8713[_0x39665f(0x1d7)] > 0x0 && _0x9a8713[_0x39665f(0x204)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x2dd98f = await _0x381264(_0x8a3a1e);
                    _0x57497a[_0x39665f(0x2ac)] && (_0x1bc76a = _0x2dd98f[_0x39665f(0x170)][0x0]['taken_at']);
                    _0x2dd98f[_0x39665f(0x2fd)] === 'ok' ? _0x1dfca2(_0x2dd98f[_0x39665f(0x170)][0x0][_0x39665f(0x1f4)][_0x39665f(0x361)][0x0][_0x39665f(0x389)], _0x91ada1, _0x39665f(0x1e7), _0x1bc76a, _0x39665f(0x285), _0x8a3a1e) : (_0x57497a['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x296ea0 = !![], _0x409ce0(!![], _0x1563c0)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x2dd98f[_0x39665f(0x37b)]), _0x3e5117(_0x2dd98f));
                    _0xe0c226(![]);
                    return;
                }
                if (_0x49f4f[_0x39665f(0x1e7)][_0x91ada1] && !_0x1563c0) {
                    _0x3e5117(_0x39665f(0x35f), _0x91ada1), _0x49f4f[_0x39665f(0x1e7)][_0x91ada1][_0x39665f(0x342)][_0x39665f(0x2d6)][0x0]['items'][_0x39665f(0x202)](_0x316cb3 => {
                        const _0x440487 = _0x39665f;
                        _0x316cb3['id'] == _0x1d716d && (_0x7ed271 = _0x316cb3[_0x440487(0x2d3)], _0x57497a[_0x440487(0x2ac)] && (_0x1bc76a = _0x316cb3[_0x440487(0x211)], _0x8a3a1e = _0x316cb3['id']));
                    });
                    if (_0x7ed271[_0x39665f(0x1d7)] == 0x0) {
                        _0x3e5117(_0x39665f(0x1ff), _0x91ada1), _0x409ce0(!![], !![]);
                        return;
                    }
                } else {
                    let _0x60b1fe = await _0x1f4da5(_0x91ada1), _0x304ff3 = _0x60b1fe[_0x39665f(0x232)]['pk'], _0x1d88f1 = await _0x3dc445(_0x304ff3);
                    _0x1d88f1[_0x39665f(0x342)]['reels_media'][0x0][_0x39665f(0x170)][_0x39665f(0x202)](_0x39037a => {
                        const _0x35aa80 = _0x39665f;
                        _0x39037a['id'] == _0x1d716d && (_0x7ed271 = _0x39037a['display_url'], _0x57497a[_0x35aa80(0x2ac)] && (_0x1bc76a = _0x39037a['taken_at_timestamp'], _0x8a3a1e = _0x39037a['id']));
                    });
                    if (_0x7ed271[_0x39665f(0x1d7)] == 0x0) {
                        let _0x2bc2e8 = _0x39bd05('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x91ada1 + _0x39665f(0x12f))[_0x39665f(0x39c)](function () {
                            const _0x4eb7bf = _0x39665f;
                            return _0x39bd05(this)[_0x4eb7bf(0x1b8)]()[_0x4eb7bf(0x1d7)] === 0x0 && _0x39bd05(this)[_0x4eb7bf(0x26b)]('svg')[_0x4eb7bf(0x1d7)] === 0x0 && _0x39bd05(this)['text']()?.['toLowerCase']() === _0x91ada1?.['toLowerCase']();
                        })[_0x39665f(0x28b)](_0x39665f(0x2ee))[_0x39665f(0x39c)](function () {
                            const _0x5361de = _0x39665f;
                            return _0x39bd05(this)[_0x5361de(0x393)]()?.[_0x5361de(0x1cd)]() !== _0x91ada1?.['toLowerCase']();
                        })['filter'](function () {
                            const _0x4fb90c = _0x39665f;
                            return _0x39bd05(this)[_0x4fb90c(0x1b8)]()[_0x4fb90c(0x1d7)] > 0x1;
                        })[_0x39665f(0x140)]();
                        _0x2bc2e8[_0x39665f(0x1b8)]()['filter'](function () {
                            const _0x4036a4 = _0x39665f;
                            return _0x39bd05(this)[_0x4036a4(0x2d7)]() < 0xa;
                        })[_0x39665f(0x140)]()[_0x39665f(0x1b8)]()[_0x39665f(0x2f6)](function (_0x3d055b) {
                            const _0x520a50 = _0x39665f;
                            _0x39bd05(this)['children']()[_0x520a50(0x1d7)] > 0x0 && (_0x7ed271 = _0x1d88f1['data'][_0x520a50(0x2d6)][0x0][_0x520a50(0x170)][_0x3d055b][_0x520a50(0x2d3)], _0x57497a[_0x520a50(0x2ac)] && (_0x1bc76a = _0x1d88f1['data'][_0x520a50(0x2d6)][0x0]['items'][_0x3d055b][_0x520a50(0x211)], _0x8a3a1e = _0x1d88f1['data']['reels_media'][0x0][_0x520a50(0x170)][_0x3d055b]['id']));
                        }), _0x7ed271['length'] == 0x0 && (_0x39bd05(_0x39665f(0x35d))[_0x39665f(0x2f6)](function (_0x2833cc) {
                            const _0x557e13 = _0x39665f;
                            _0x39bd05(this)[_0x557e13(0x189)](_0x557e13(0x308)) && (_0x39bd05(this)[_0x557e13(0x1b8)]()[_0x557e13(0x1d7)] > 0x0 && (_0x7ed271 = _0x1d88f1[_0x557e13(0x342)][_0x557e13(0x2d6)][0x0]['items'][_0x2833cc][_0x557e13(0x2d3)], _0x57497a['RENAME_PUBLISH_DATE'] && (_0x1bc76a = _0x1d88f1['data'][_0x557e13(0x2d6)][0x0][_0x557e13(0x170)][_0x2833cc]['taken_at_timestamp'], _0x8a3a1e = _0x1d88f1[_0x557e13(0x342)][_0x557e13(0x2d6)][0x0][_0x557e13(0x170)][_0x2833cc]['id'])));
                        }), _0x39bd05('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x39665f(0x2f6)](function (_0x2395b5) {
                            const _0xacb97d = _0x39665f;
                            _0x39bd05(this)[_0xacb97d(0x1b8)]()[_0xacb97d(0x189)](_0xacb97d(0x15c)) && (_0x7ed271 = _0x1d88f1[_0xacb97d(0x342)][_0xacb97d(0x2d6)][0x0]['items'][_0x2395b5][_0xacb97d(0x2d3)], _0x57497a[_0xacb97d(0x2ac)] && (_0x1bc76a = _0x1d88f1[_0xacb97d(0x342)][_0xacb97d(0x2d6)][0x0][_0xacb97d(0x170)][_0x2395b5][_0xacb97d(0x211)], _0x8a3a1e = _0x1d88f1[_0xacb97d(0x342)][_0xacb97d(0x2d6)][0x0][_0xacb97d(0x170)][_0x2395b5]['id']));
                        }));
                    }
                }
                _0x1dfca2(_0x7ed271, _0x91ada1, 'thumbnail', _0x1bc76a, _0x274bfb, _0x8a3a1e), _0x296ea0 = ![], _0xe0c226(![]);
            } else {
                if (_0x39bd05('body\x20>\x20div\x20div.IG_DWSTORY')[_0x39665f(0x148)]()['find']('video[class]')[_0x39665f(0x1d7)]) {
                    let _0x245253 = null;
                    _0x39bd05(_0x39665f(0x34a))[_0x39665f(0x1d7)] > 0x0 ? _0x245253 = _0x39bd05(_0x39665f(0x239)) : (_0x245253 = _0x39bd05('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x245253[_0x39665f(0x16e)](_0x39665f(0x25a), 'relative'));
                    _0x245253[_0x39665f(0x1d7)] === 0x0 && (_0x245253 = _0x39bd05(_0x39665f(0x33e))[_0x39665f(0x148)]()['parent']()[_0x39665f(0x148)]()[_0x39665f(0x26b)](_0x39665f(0x212)), _0x245253[_0x39665f(0x16e)](_0x39665f(0x25a), _0x39665f(0x27b)));
                    _0x245253['length'] === 0x0 && (_0x245253 = _0x39bd05(_0x39665f(0x33e))[_0x39665f(0x148)]()['parent']()[_0x39665f(0x148)]()[_0x39665f(0x26b)](_0x39665f(0x33b)), _0x245253['css'](_0x39665f(0x25a), 'relative'));
                    if (_0x245253[_0x39665f(0x1d7)] === 0x0) {
                        let _0x1215a0 = _0x39bd05(_0x39665f(0x339)), _0x2f48f0 = 0x0;
                        _0x1215a0[_0x39665f(0x2f6)](function () {
                            const _0xd972a2 = _0x39665f;
                            _0x39bd05(this)['width']() > _0x2f48f0 && (_0x2f48f0 = _0x39bd05(this)[_0xd972a2(0x178)](), _0x245253 = _0x39bd05(this)[_0xd972a2(0x1b8)](_0xd972a2(0x226))[_0xd972a2(0x140)]());
                        });
                    }
                    _0x245253 != null && (_0x245253[_0x39665f(0x140)]()[_0x39665f(0x16e)](_0x39665f(0x25a), _0x39665f(0x27b)), _0x245253[_0x39665f(0x140)]()['append'](_0x39665f(0x256) + _0x127cc3(_0x39665f(0x130)) + _0x39665f(0x30e) + _0x59d314['THUMBNAIL'] + '</div>'));
                }
            }
        }
        async function _0x5ecfb9(_0x4c1b52, _0x41cb12, _0x330b3f) {
            const _0x532b4c = _0x5b11ec;
            if (_0x4c1b52) {
                _0xe0c226(!![]);
                let _0x53f6a2 = location[_0x532b4c(0x242)]['split']('?')['at'](0x0)[_0x532b4c(0x30a)](_0x532b4c(0x32b))['at'](-0x1)['replaceAll']('/', ''), _0x2ab26c = await _0x481a9d(_0x53f6a2), _0x12c7b3 = _0x2ab26c[_0x532b4c(0x342)], _0x574e22 = new Date()[_0x532b4c(0x381)]();
                _0x57497a[_0x532b4c(0x2ac)] && (_0x2ab26c['type'] === _0x532b4c(0x200) ? _0x574e22 = _0x12c7b3[_0x532b4c(0x259)]['taken_at_timestamp'] : _0x574e22 = _0x12c7b3['taken_at']);
                if (_0x2ab26c[_0x532b4c(0x26e)] === _0x532b4c(0x200)) {
                    if (_0x41cb12 && _0x12c7b3['shortcode_media']['is_video']) {
                        if (_0x330b3f)
                            _0x4ca43c(_0x12c7b3[_0x532b4c(0x259)][_0x532b4c(0x2f3)]);
                        else {
                            let _0x199502 = _0x532b4c(0x1ab);
                            _0x1dfca2(_0x12c7b3[_0x532b4c(0x259)][_0x532b4c(0x2f3)], _0x12c7b3['shortcode_media'][_0x532b4c(0x365)][_0x532b4c(0x14e)], 'reels', _0x574e22, _0x199502, _0x53f6a2);
                        }
                    } else {
                        if (_0x330b3f)
                            _0x4ca43c(_0x12c7b3[_0x532b4c(0x259)][_0x532b4c(0x347)]['at'](-0x1)[_0x532b4c(0x35c)]);
                        else {
                            let _0xa84972 = _0x532b4c(0x285);
                            _0x1dfca2(_0x12c7b3[_0x532b4c(0x259)][_0x532b4c(0x347)]['at'](-0x1)['src'], _0x12c7b3[_0x532b4c(0x259)][_0x532b4c(0x365)]['username'], _0x532b4c(0x14d), _0x574e22, _0xa84972, _0x53f6a2);
                        }
                    }
                } else {
                    if (_0x41cb12 && _0x12c7b3[_0x532b4c(0x2d2)] != null) {
                        if (_0x330b3f)
                            _0x4ca43c(_0x12c7b3[_0x532b4c(0x2d2)][0x0][_0x532b4c(0x389)]);
                        else {
                            let _0x380616 = 'mp4';
                            _0x1dfca2(_0x12c7b3[_0x532b4c(0x2d2)][0x0][_0x532b4c(0x389)], _0x12c7b3['owner']['username'], _0x532b4c(0x14d), _0x574e22, _0x380616, _0x53f6a2);
                        }
                    } else {
                        if (_0x330b3f)
                            _0x4ca43c(_0x12c7b3[_0x532b4c(0x1f4)][_0x532b4c(0x361)][0x0][_0x532b4c(0x389)]);
                        else {
                            let _0x3a8627 = _0x532b4c(0x285);
                            _0x1dfca2(_0x12c7b3[_0x532b4c(0x1f4)][_0x532b4c(0x361)][0x0][_0x532b4c(0x389)], _0x12c7b3['owner']['username'], _0x532b4c(0x14d), _0x574e22, _0x3a8627, _0x53f6a2);
                        }
                    }
                }
                _0xe0c226(![]);
            } else
                var _0xfcd2e5 = setInterval(() => {
                    const _0x4c0261 = _0x532b4c;
                    _0x39bd05('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')[_0x4c0261(0x1d7)] > 0x0 && (clearInterval(_0xfcd2e5), _0x57497a[_0x4c0261(0x2ef)] && (_0x39bd05(_0x4c0261(0x1ac))[_0x4c0261(0x344)](), _0x39bd05(_0x4c0261(0x1a3))[_0x4c0261(0x2fc)](_0x4c0261(0x2a0)), _0x39bd05(_0x4c0261(0x24a))[_0x4c0261(0x2fc)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x39bd05(_0x4c0261(0x24a))[_0x4c0261(0x2fc)]('<div\x20class=\x22button-down\x22><div></div></div>'), _0x39bd05(_0x4c0261(0x224))['on']('click', function () {
                        const _0x269cb6 = _0x4c0261;
                        _0x39bd05(_0x269cb6(0x1e5))[0x0][_0x269cb6(0x257)]({
                            'top': -0x1e,
                            'behavior': _0x269cb6(0x2bb)
                        });
                    }), _0x39bd05(_0x4c0261(0x1c9))['on'](_0x4c0261(0x18b), function () {
                        const _0x47e828 = _0x4c0261;
                        _0x39bd05('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0]['scrollBy']({
                            'top': 0x1e,
                            'behavior': _0x47e828(0x2bb)
                        });
                    })), _0x39bd05(_0x4c0261(0x346))[_0x4c0261(0x1b8)](_0x4c0261(0x226))[_0x4c0261(0x2f6)](function () {
                        const _0x581879 = _0x4c0261;
                        if (_0x39bd05(this)['children']()['length'] > 0x0) {
                            if (!_0x39bd05(this)['children']()[_0x581879(0x26b)](_0x581879(0x29a))[_0x581879(0x1d7)]) {
                                var _0x17bc42 = _0x39bd05(this);
                                _0x39bd05(this)[_0x581879(0x1b8)]()[_0x581879(0x16e)](_0x581879(0x25a), _0x581879(0x27b)), _0x39bd05(this)[_0x581879(0x1b8)]()[_0x581879(0x2fc)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x127cc3('DW') + _0x581879(0x186) + _0x59d314[_0x581879(0x363)] + _0x581879(0x208)), _0x39bd05(this)[_0x581879(0x1b8)]()[_0x581879(0x2fc)](_0x581879(0x23d) + _0x127cc3('NEW_TAB') + '\x22\x20class=\x22IG_REELS_NEWTAB\x22>' + _0x59d314['NEW_TAB'] + '</div>'), _0x39bd05(this)[_0x581879(0x1b8)]()[_0x581879(0x2fc)](_0x581879(0x256) + _0x127cc3('THUMBNAIL_INTRO') + _0x581879(0x2cb) + _0x59d314[_0x581879(0x2b4)] + '</div>');
                                _0x57497a[_0x581879(0x274)] && _0x39bd05(this)[_0x581879(0x26b)]('video')[_0x581879(0x2f6)](function () {
                                    const _0x2c6214 = _0x581879;
                                    _0x39bd05(this)['on'](_0x2c6214(0x34c), function () {
                                        const _0xb860c0 = _0x2c6214;
                                        if (!_0x39bd05(this)['data'](_0xb860c0(0x150))) {
                                            let _0x1fe90e = _0x39bd05(this)['next']()[_0xb860c0(0x26b)](_0xb860c0(0x252))[_0xb860c0(0x28b)](_0xb860c0(0x237));
                                            _0x1fe90e['length'] > 0x0 ? (_0x39bd05(this)[_0xb860c0(0x188)](_0xb860c0(0x22f), !![]), _0x1fe90e[_0xb860c0(0x18b)](), _0x3e5117(_0xb860c0(0x1d5))) : (_0x39bd05(this)[_0xb860c0(0x188)](_0xb860c0(0x22f), !![]), _0x39bd05(this)[_0xb860c0(0x148)]()['find'](_0xb860c0(0x1a8))[_0xb860c0(0x1cb)](_0xb860c0(0x32d)), this[_0xb860c0(0x1f6)](), _0x3e5117(_0xb860c0(0x23f)));
                                        }
                                    });
                                });
                                _0x57497a[_0x581879(0x222)] && _0x39bd05(this)['find'](_0x581879(0x15e))[_0x581879(0x2f6)](function () {
                                    const _0x577437 = _0x581879;
                                    if (!_0x39bd05(this)['data'](_0x577437(0x399))) {
                                        let _0x3c08ab = _0x39bd05(this);
                                        _0x3e5117(_0x577437(0x2c4)), this['volume'] = _0x14b573, _0x39bd05(this)['on'](_0x577437(0x1cf), function () {
                                            const _0x5b16ba = _0x577437;
                                            this[_0x5b16ba(0x213)] = _0x14b573;
                                        }), _0x39bd05(this)['on'](_0x577437(0x32e), function (_0x3c5dac) {
                                            const _0x295901 = _0x577437;
                                            _0x3c5dac[_0x295901(0x1d1)](), _0x3c08ab[_0x295901(0x16e)]('z-index', '-1'), _0x3c08ab['removeAttr'](_0x295901(0x399));
                                        }), _0x39bd05(this)[_0x577437(0x148)]()[_0x577437(0x26b)](_0x577437(0x1c2))[_0x577437(0x39c)](function () {
                                            const _0x3cd353 = _0x577437;
                                            return _0x39bd05(this)[_0x3cd353(0x148)](_0x3cd353(0x16b))[_0x3cd353(0x1d7)] > 0x0 && _0x39bd05(this)[_0x3cd353(0x16e)](_0x3cd353(0x351)) === _0x3cd353(0x20d) && _0x39bd05(this)[_0x3cd353(0x188)](_0x3cd353(0x32d)) != null;
                                        })['first']()['on']('contextmenu', function (_0x2be630) {
                                            const _0x3b30da = _0x577437;
                                            _0x2be630['preventDefault'](), _0x3c08ab[_0x3b30da(0x16e)](_0x3b30da(0x376), '2'), _0x3c08ab[_0x3b30da(0x188)](_0x3b30da(0x399), !![]);
                                        }), _0x39bd05(this)['on'](_0x577437(0x271), function () {
                                            const _0x173a22 = _0x577437;
                                            let _0x7dce71 = _0x39bd05(this)['parent']()[_0x173a22(0x26b)](_0x173a22(0x357))[_0x173a22(0x26b)](_0x173a22(0x14a))['filter'](function (_0x3ccf5a) {
                                                const _0x598fbe = _0x173a22;
                                                return _0x39bd05(this)[_0x598fbe(0x178)]() <= 0x40 && _0x39bd05(this)[_0x598fbe(0x2d7)]() <= 0x40 && _0x39bd05(this)[_0x598fbe(0x26b)](_0x598fbe(0x13b))['length'] > 0x0;
                                            });
                                            var _0xd7ac67 = _0x7dce71[_0x173a22(0x26b)](_0x173a22(0x33d))[_0x173a22(0x1d7)] === 0x0;
                                            this['muted'] != _0xd7ac67 && (this['volume'] = _0x14b573, _0x7dce71?.[_0x173a22(0x18b)]()), _0x39bd05(this)[_0x173a22(0x188)]('data-completed') && (_0x14b573 = this[_0x173a22(0x213)], GM_setValue(_0x173a22(0x2dc), this[_0x173a22(0x213)])), this[_0x173a22(0x213)] == _0x14b573 && _0x39bd05(this)['attr'](_0x173a22(0x322), !![]);
                                        }), _0x39bd05(this)[_0x577437(0x16e)]('position', _0x577437(0x193)), _0x39bd05(this)['css']('z-index', '2'), _0x39bd05(this)['attr'](_0x577437(0x162), !![]), _0x39bd05(this)[_0x577437(0x188)](_0x577437(0x399), !![]);
                                    }
                                });
                                var _0x5121ac = _0x17bc42['find']('video'), _0x1f95ac = _0x39bd05(this)['find'](_0x581879(0x2ba))[_0x581879(0x140)]();
                                _0x2e8afa(_0x5121ac, _0x1f95ac, 'reel');
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x40e90d(_0x41962b) {
            const _0x283167 = _0x5b11ec;
            let _0x5e251a = new URL(_0x41962b), _0x17a6fa = _0x5e251a?.[_0x283167(0x270)]?.['get'](_0x283167(0x192))?.[_0x283167(0x30a)]('.')['at'](0x0);
            return _0x17a6fa ? atob(_0x17a6fa) : null;
        }
        function _0x549dd7(_0x4a3d58) {
            return new Promise((_0x20a372, _0x25790f) => {
                const _0x1870fd = a0_0x3537;
                let _0x37a9d9 = _0x1870fd(0x360) + _0x4a3d58 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x37a9d9,
                    'onload': function (_0x18f539) {
                        const _0x1d349c = _0x1870fd;
                        try {
                            let _0x39cfde = JSON[_0x1d349c(0x2b3)](_0x18f539[_0x1d349c(0x25e)]);
                            _0x20a372(_0x39cfde);
                        } catch (_0x575f54) {
                            _0x3e5117(_0x1d349c(0x1d8), _0x1d349c(0x1fc), _0x575f54[_0x1d349c(0x37b)]), _0x25790f(_0x575f54);
                        }
                    },
                    'onerror': function (_0x1fb5c9) {
                        const _0x3b894d = _0x1870fd;
                        _0x3e5117(_0x3b894d(0x1d8), _0x3b894d(0x1fc), _0x1fb5c9), _0x25790f(_0x1fb5c9);
                    }
                });
            });
        }
        function _0x3dc445(_0x146145) {
            return new Promise((_0x2fe486, _0x3e6ef9) => {
                const _0x159958 = a0_0x3537;
                let _0x59028d = _0x159958(0x283) + _0x146145 + _0x159958(0x384);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x59028d,
                    'onload': function (_0x3d5e85) {
                        const _0x54b244 = _0x159958;
                        try {
                            let _0x24ada5 = JSON[_0x54b244(0x2b3)](_0x3d5e85[_0x54b244(0x25e)]);
                            _0x3e5117(_0x54b244(0x269), _0x24ada5), _0x2fe486(_0x24ada5);
                        } catch (_0x2fc65b) {
                            _0x3e5117(_0x54b244(0x269), 'reject', _0x2fc65b[_0x54b244(0x37b)]), _0x3e6ef9(_0x2fc65b);
                        }
                    },
                    'onerror': function (_0x179d3f) {
                        const _0x50c3aa = _0x159958;
                        _0x3e5117(_0x50c3aa(0x269), _0x50c3aa(0x1fc), _0x179d3f), _0x3e6ef9(_0x179d3f);
                    }
                });
            });
        }
        function _0x1f4da5(_0x41a249) {
            return new Promise((_0x3a6f6b, _0x5a3148) => {
                const _0x4d2a7e = a0_0x3537;
                let _0x4e16e5 = _0x4d2a7e(0x29f) + _0x41a249;
                GM_xmlhttpRequest({
                    'method': _0x4d2a7e(0x1b3),
                    'url': _0x4e16e5,
                    'onload': function (_0x4b5d2e) {
                        const _0x242b47 = _0x4d2a7e;
                        let _0x3eb734 = JSON[_0x242b47(0x2b3)](_0x4b5d2e[_0x242b47(0x25e)]), _0x15fdbe = null;
                        _0x3eb734[_0x242b47(0x2da)][_0x242b47(0x202)](_0x442e61 => {
                            const _0x4141ef = _0x242b47;
                            _0x442e61[_0x4141ef(0x232)]['username']?.[_0x4141ef(0x1cd)]() === _0x41a249?.[_0x4141ef(0x1cd)]() && (_0x15fdbe = _0x442e61);
                        }), _0x15fdbe != null ? (_0x3e5117(_0x242b47(0x299), _0x15fdbe), _0x3a6f6b(_0x15fdbe)) : _0x3a2b8b(_0x41a249)[_0x242b47(0x159)](_0x5e21bb => {
                            _0x3a6f6b(_0x5e21bb);
                        })['catch'](_0x1f5b1a => {
                            const _0x5c70f5 = _0x242b47;
                            alert(_0x5c70f5(0x15f));
                        });
                    },
                    'onerror': function (_0x21a683) {
                        const _0x3fab23 = _0x4d2a7e;
                        _0x3e5117(_0x3fab23(0x299), 'reject', _0x21a683), _0x5a3148(_0x21a683);
                    }
                });
            });
        }
        function _0x3a2b8b(_0x17b4b7) {
            return new Promise((_0x392e80, _0xe98cb8) => {
                const _0xdd7eed = a0_0x3537;
                let _0x5baac1 = _0xdd7eed(0x152) + _0x17b4b7;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x5baac1,
                    'headers': { 'X-IG-App-ID': _0x4d7f01() },
                    'onload': function (_0x2fabaa) {
                        const _0x2f5aac = _0xdd7eed;
                        try {
                            let _0x590ec2 = JSON['parse'](_0x2fabaa[_0x2f5aac(0x25e)]), _0x2b66e3 = _0x590ec2?.[_0x2f5aac(0x342)]?.['user'];
                            if (_0x2b66e3 != null) {
                                let _0x2fcdf5 = _0x590ec2?.['data'];
                                _0x2fcdf5[_0x2f5aac(0x232)]['pk'] = _0x2fcdf5[_0x2f5aac(0x232)]['id'], _0x3e5117(_0x2f5aac(0x18d), _0x590ec2), _0x392e80(_0x2fcdf5);
                            } else
                                _0x3e5117(_0x2f5aac(0x18d), _0x2f5aac(0x1fc), _0x2f5aac(0x2b1)), _0xe98cb8(_0x2f5aac(0x2b1));
                        } catch (_0x411e88) {
                            _0x3e5117(_0x2f5aac(0x18d), _0x2f5aac(0x1fc), _0x411e88['message']), _0xe98cb8(_0x411e88);
                        }
                    },
                    'onerror': function (_0x68437d) {
                        _0x3e5117('getUserIdWithAgent()', 'reject', _0x68437d), _0xe98cb8(_0x68437d);
                    }
                });
            });
        }
        function _0x5ad68a(_0x2885c5) {
            return new Promise((_0x25ccb6, _0x12e1e3) => {
                const _0x355aec = a0_0x3537;
                let _0x2ab500 = 'https://i.instagram.com/api/v1/users/' + _0x2885c5 + _0x355aec(0x19a);
                GM_xmlhttpRequest({
                    'method': _0x355aec(0x1b3),
                    'url': _0x2ab500,
                    'headers': { 'User-Agent': _0x355aec(0x348) },
                    'onload': function (_0x4a408d) {
                        const _0x3ab95f = _0x355aec;
                        try {
                            let _0x26e6de = JSON[_0x3ab95f(0x2b3)](_0x4a408d['response']);
                            _0x26e6de[_0x3ab95f(0x2fd)] !== 'ok' ? (_0x3e5117(_0x3ab95f(0x37d), 'reject', _0x26e6de), _0x12e1e3('faild')) : (_0x3e5117(_0x3ab95f(0x37d), _0x26e6de), _0x25ccb6(_0x26e6de['user']['hd_profile_pic_url_info']?.[_0x3ab95f(0x389)]));
                        } catch (_0xacd2b7) {
                            _0x3e5117(_0x3ab95f(0x37d), _0x3ab95f(0x1fc), _0xacd2b7), _0x12e1e3(_0xacd2b7);
                        }
                    },
                    'onerror': function (_0x20489e) {
                        const _0x3c9e4e = _0x355aec;
                        _0x3e5117(_0x3c9e4e(0x37d), 'reject', _0x20489e), _0x12e1e3(_0x20489e);
                    }
                });
            });
        }
        function _0x11ed6b(_0x3a2a79) {
            return new Promise((_0x241a56, _0x2189d5) => {
                const _0x323038 = a0_0x3537;
                if (!_0x3a2a79)
                    _0x2189d5('NOPATH');
                let _0x505886 = _0x3a2a79, _0x27122a = _0x323038(0x311) + _0x505886 + _0x323038(0x2c1);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x27122a,
                    'onload': function (_0x40279) {
                        const _0x1fd9d2 = _0x323038;
                        try {
                            let _0x1bebe6 = JSON[_0x1fd9d2(0x2b3)](_0x40279[_0x1fd9d2(0x25e)]);
                            _0x3e5117(_0x1fd9d2(0x20c), _0x1bebe6), _0x241a56(_0x1bebe6[_0x1fd9d2(0x342)][_0x1fd9d2(0x259)][_0x1fd9d2(0x365)][_0x1fd9d2(0x14e)]);
                        } catch (_0x3f2c82) {
                            _0x3e5117(_0x1fd9d2(0x20c), _0x1fd9d2(0x1fc), _0x3f2c82[_0x1fd9d2(0x37b)]), _0x2189d5(_0x3f2c82);
                        }
                    },
                    'onerror': function (_0x5aeb70) {
                        const _0x519b9e = _0x323038;
                        _0x3e5117('getPostOwner()', _0x519b9e(0x1fc), _0x5aeb70), _0x2189d5(_0x5aeb70);
                    }
                });
            });
        }
        function _0x481a9d(_0x472b13) {
            return new Promise((_0x2eb7ae, _0x56dbb1) => {
                const _0x3cc517 = a0_0x3537;
                if (!_0x472b13)
                    _0x56dbb1(_0x3cc517(0x345));
                let _0xecc9bb = _0x472b13, _0x648ee7 = _0x3cc517(0x311) + _0xecc9bb + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x3cc517(0x1b3),
                    'url': _0x648ee7,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x1d3fe6) {
                        const _0x3ae72f = _0x3cc517;
                        try {
                            let _0x262cb4 = JSON[_0x3ae72f(0x2b3)](_0x1d3fe6[_0x3ae72f(0x25e)]);
                            _0x3e5117(_0x262cb4), _0x262cb4[_0x3ae72f(0x2fd)] === _0x3ae72f(0x284) ? (_0x3e5117(_0x3ae72f(0x304), _0x3ae72f(0x315), _0xecc9bb), _0x1ef66a(_0xecc9bb)[_0x3ae72f(0x159)](_0x55cd42 => {
                                const _0x52bcef = _0x3ae72f;
                                _0x2eb7ae({
                                    'type': _0x52bcef(0x2ea),
                                    'data': _0x55cd42[_0x52bcef(0x319)][_0x52bcef(0x170)][0x0]
                                });
                            })[_0x3ae72f(0x2b6)](_0x46c3a5 => {
                                _0x56dbb1(_0x46c3a5);
                            })) : _0x2eb7ae({
                                'type': _0x3ae72f(0x200),
                                'data': _0x262cb4[_0x3ae72f(0x342)]
                            });
                        } catch (_0x48c8b0) {
                            _0x3e5117(_0x3ae72f(0x2a5), 'reject', _0x48c8b0[_0x3ae72f(0x37b)]), _0x56dbb1(_0x48c8b0);
                        }
                    },
                    'onerror': function (_0x4a3322) {
                        const _0x2d171d = _0x3cc517;
                        _0x3e5117('getBlobMedia()', _0x2d171d(0x1fc), _0x4a3322), _0x56dbb1(_0x4a3322);
                    }
                });
            });
        }
        function _0x1ef66a(_0x4cfbdc) {
            return new Promise((_0x4a8f08, _0x517bd4) => {
                const _0x19c0a7 = a0_0x3537;
                if (!_0x4cfbdc)
                    _0x517bd4(_0x19c0a7(0x345));
                let _0x136385 = _0x4cfbdc, _0x10f8af = _0x19c0a7(0x310) + _0x136385 + _0x19c0a7(0x145);
                GM_xmlhttpRequest({
                    'method': _0x19c0a7(0x1b3),
                    'url': _0x10f8af,
                    'headers': {
                        'User-Agent': _0x19c0a7(0x348),
                        'X-IG-App-ID': _0x4d7f01()
                    },
                    'onload': function (_0xd55abe) {
                        const _0x13d9b8 = _0x19c0a7;
                        try {
                            let _0x4de5e0 = JSON['parse'](_0xd55abe['response']);
                            _0x3e5117(_0x4de5e0), _0x4de5e0['status'] === _0x13d9b8(0x284) ? (alert(_0x13d9b8(0x1df) + _0x4de5e0[_0x13d9b8(0x37b)] + ':\x20' + _0x4de5e0[_0x13d9b8(0x206)]), _0x3e5117('Request\x20failed\x20with\x20API\x20response\x20' + _0x4de5e0[_0x13d9b8(0x37b)] + ':\x20' + _0x4de5e0[_0x13d9b8(0x206)]), _0x517bd4(_0xd55abe)) : (_0x3e5117(_0x13d9b8(0x2c2), _0x4de5e0[_0x13d9b8(0x342)]), _0x4a8f08(_0x4de5e0[_0x13d9b8(0x342)]));
                        } catch (_0x2d0405) {
                            _0x3e5117('getBlobMediaWithQueryID()', _0x13d9b8(0x1fc), _0x2d0405[_0x13d9b8(0x37b)]), _0x517bd4(_0x2d0405);
                        }
                    },
                    'onerror': function (_0x410021) {
                        const _0x42cc06 = _0x19c0a7;
                        _0x3e5117(_0x42cc06(0x2c2), 'reject', _0x410021), _0x517bd4(_0x410021);
                    }
                });
            });
        }
        function _0x1a1ffa(_0xc60c66, _0x5e2c84) {
            const _0x326f14 = _0x5b11ec;
            _0x5e2c84 === !![] && (_0x3e5117(_0x326f14(0x38f), _0x326f14(0x2d9)), _0x39bd05(_0x326f14(0x2c3))[_0x326f14(0x39c)](function () {
                const _0x317a60 = _0x326f14;
                return _0x39bd05(this)['find'](_0x317a60(0x21c))['length'] === 0x0;
            })[_0x326f14(0x1cb)](_0x326f14(0x1b0)));
            if (_0xc60c66 == ![]) {
                const _0x118955 = 0x64;
                let _0x26e9fe = 0x0;
                var _0x3ab0be = setInterval(() => {
                    const _0x6ef22c = _0x326f14;
                    (_0x26e9fe > _0x118955 || _0x39bd05(_0x6ef22c(0x38e))[_0x6ef22c(0x1d7)] > 0x0) && (clearInterval(_0x3ab0be), _0x26e9fe > _0x118955 && console[_0x6ef22c(0x2e7)]('onReadyMyDW()\x20Timer', _0x6ef22c(0x2ae))), _0x3e5117(_0x6ef22c(0x28c), _0x6ef22c(0x2ce)), _0x1650c1(), _0x26e9fe++;
                }, 0x32);
            } else
                _0x1650c1();
        }
        function _0x4d7f01() {
            const _0x5d604c = _0x5b11ec;
            let _0x1b32a0 = null;
            return _0x39bd05(_0x5d604c(0x22d))[_0x5d604c(0x2f6)](function () {
                const _0x149bf0 = _0x5d604c, _0x547c00 = /"APP_ID":"([0-9]+)"/ig, _0x11eac3 = _0x39bd05(this)[_0x149bf0(0x393)]()[_0x149bf0(0x204)](_0x547c00);
                _0x11eac3 != null && _0x1b32a0 == null && (_0x1b32a0 = [..._0x39bd05(this)[_0x149bf0(0x393)]()['matchAll'](_0x547c00)]);
            }), _0x1b32a0 ? _0x1b32a0['at'](0x0)['at'](-0x1) : null;
        }
        function _0xe0c226(_0x339f71) {
            const _0x2cf590 = _0x5b11ec;
            _0x339f71 ? (_0x39bd05(_0x2cf590(0x1e2))[_0x2cf590(0x2c8)]('x1s85apg'), _0x39bd05('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x2cf590(0x16e)](_0x2cf590(0x376), '20000')) : (_0x39bd05(_0x2cf590(0x1e2))[_0x2cf590(0x2e3)](_0x2cf590(0x18a)), _0x39bd05(_0x2cf590(0x1e2))['css'](_0x2cf590(0x376), ''));
        }
        function _0x381264(_0x306858) {
            return new Promise((_0x24b6f4, _0x13a577) => {
                const _0x274a5e = a0_0x3537;
                let _0x50792f = _0x274a5e(0x2ab) + _0x306858 + _0x274a5e(0x19a);
                if (_0x306858 == null) {
                    alert(_0x274a5e(0x17b)), _0x3e5117(_0x274a5e(0x233), 'reject', _0x274a5e(0x17b)), _0xe0c226(![]), _0x13a577(-0x1);
                    return;
                }
                if (_0x4d7f01() == null) {
                    alert(_0x274a5e(0x354)), _0x3e5117(_0x274a5e(0x233), 'reject', _0x274a5e(0x354)), _0xe0c226(![]), _0x13a577(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x274a5e(0x1b3),
                    'url': _0x50792f,
                    'headers': {
                        'User-Agent': window[_0x274a5e(0x32c)][_0x274a5e(0x2b0)],
                        'Accept': _0x274a5e(0x146),
                        'X-IG-App-ID': _0x4d7f01()
                    },
                    'onload': function (_0x1e393a) {
                        const _0x384c7f = _0x274a5e;
                        if (_0x1e393a[_0x384c7f(0x2eb)] == _0x50792f) {
                            let _0x5dbaac = JSON[_0x384c7f(0x2b3)](_0x1e393a[_0x384c7f(0x25e)]);
                            _0x3e5117(_0x384c7f(0x233), _0x5dbaac), _0x24b6f4(_0x5dbaac);
                        } else {
                            let _0x175386 = new URL(_0x1e393a[_0x384c7f(0x2eb)]);
                            _0x175386[_0x384c7f(0x1a4)]['startsWith'](_0x384c7f(0x143)) ? (_0x3e5117(_0x384c7f(0x233), _0x384c7f(0x1fc), _0x384c7f(0x215)), alert(_0x384c7f(0x215))) : (_0x3e5117(_0x384c7f(0x233), _0x384c7f(0x1fc), _0x384c7f(0x39b) + _0x1e393a['finalUrl'] + '\x22'), alert(_0x384c7f(0x39b) + _0x1e393a[_0x384c7f(0x2eb)] + '\x22')), _0xe0c226(![]), _0x13a577(-0x1);
                        }
                    },
                    'onerror': function (_0x32c085) {
                        const _0x3b4675 = _0x274a5e;
                        _0x3e5117(_0x3b4675(0x233), _0x3b4675(0x1fc), _0x32c085), _0x24b6f4(_0x32c085);
                    }
                });
            });
        }
        function _0x26cee9(_0x335c83) {
            const _0x500c98 = _0x5b11ec;
            var _0x13f01d = 0x0, _0x14acc9 = _0x335c83[_0x500c98(0x26b)](_0x500c98(0x12a));
            return (_0x14acc9 == null || !_0x14acc9[_0x500c98(0x189)](_0x500c98(0x171))) && (_0x14acc9 = _0x335c83[_0x500c98(0x26b)](_0x500c98(0x1d9))['eq'](0x0)[_0x500c98(0x1b8)](_0x500c98(0x226))), _0x14acc9[_0x500c98(0x39c)](_0x500c98(0x272))[_0x500c98(0x2f6)](function (_0x5d6e9d) {
                const _0x433af7 = _0x500c98;
                _0x39bd05(this)[_0x433af7(0x189)](_0x433af7(0x247)) && (_0x13f01d = _0x5d6e9d);
            }), _0x13f01d;
        }
        function _0x4d8e2f(_0x23e584) {
            const _0x14f8ba = _0x5b11ec;
            _0x57497a[_0x14f8ba(0x274)] && _0x23e584[_0x14f8ba(0x26b)]('video')[_0x14f8ba(0x2f6)](function () {
                _0x39bd05(this)['on']('ended', function () {
                    const _0x37a1f6 = a0_0x3537;
                    !_0x39bd05(this)[_0x37a1f6(0x342)]('loop') && (_0x39bd05(this)[_0x37a1f6(0x188)](_0x37a1f6(0x22f), !![]), this[_0x37a1f6(0x1f6)](), _0x3e5117(_0x37a1f6(0x37c)));
                });
            });
            _0x57497a[_0x14f8ba(0x380)] && _0x23e584[_0x14f8ba(0x26b)](_0x14f8ba(0x15e))[_0x14f8ba(0x2f6)](function () {
                const _0x19aff6 = _0x14f8ba;
                _0x39bd05(this)['on'](_0x19aff6(0x18f), function () {
                    const _0x10e1b9 = _0x19aff6;
                    !_0x39bd05(this)[_0x10e1b9(0x342)](_0x10e1b9(0x26a)) && (_0x39bd05(this)['attr'](_0x10e1b9(0x30f), !![]), this[_0x10e1b9(0x213)] = _0x14b573, _0x3e5117(_0x10e1b9(0x1f5)));
                });
            });
            _0x57497a[_0x14f8ba(0x222)] && _0x23e584['find'](_0x14f8ba(0x15e))[_0x14f8ba(0x2f6)](function () {
                const _0x58d042 = _0x14f8ba;
                if (!_0x39bd05(this)[_0x58d042(0x342)](_0x58d042(0x399))) {
                    let _0x4c907e = _0x39bd05(this);
                    _0x3e5117(_0x58d042(0x29b)), this['volume'] = _0x14b573, _0x39bd05(this)['on'](_0x58d042(0x1cf), function () {
                        const _0x2b6205 = _0x58d042;
                        this[_0x2b6205(0x213)] = _0x14b573;
                    }), _0x39bd05(this)['on']('contextmenu', function (_0x5b2f4e) {
                        const _0x904dc3 = _0x58d042;
                        _0x5b2f4e['preventDefault'](), _0x4c907e['css'](_0x904dc3(0x376), '-1'), _0x4c907e[_0x904dc3(0x1cb)](_0x904dc3(0x399));
                    }), _0x39bd05(this)[_0x58d042(0x148)]()[_0x58d042(0x26b)](_0x58d042(0x357))['first']()['on']('contextmenu', function (_0x35ddb9) {
                        const _0x3681d3 = _0x58d042;
                        _0x35ddb9['preventDefault'](), _0x4c907e[_0x3681d3(0x16e)](_0x3681d3(0x376), '2'), _0x4c907e[_0x3681d3(0x188)](_0x3681d3(0x399), !![]);
                    }), _0x39bd05(this)['on'](_0x58d042(0x271), function () {
                        const _0x5510e7 = _0x58d042;
                        let _0x4bb20e = _0x39bd05(this)[_0x5510e7(0x148)]()[_0x5510e7(0x26b)](_0x5510e7(0x357))['find'](_0x5510e7(0x14a))['filter'](function (_0x1798d0) {
                            const _0x3682ce = _0x5510e7;
                            return _0x39bd05(this)[_0x3682ce(0x178)]() <= 0x40 && _0x39bd05(this)[_0x3682ce(0x2d7)]() <= 0x40 && _0x39bd05(this)[_0x3682ce(0x26b)](_0x3682ce(0x13b))[_0x3682ce(0x1d7)] > 0x0;
                        });
                        var _0x429790 = _0x4bb20e[_0x5510e7(0x26b)]('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0x5510e7(0x1d7)] === 0x0;
                        this['muted'] != _0x429790 && (this[_0x5510e7(0x213)] = _0x14b573, _0x4bb20e?.[_0x5510e7(0x18b)]()), _0x39bd05(this)[_0x5510e7(0x188)](_0x5510e7(0x322)) && (_0x14b573 = this['volume'], GM_setValue(_0x5510e7(0x2dc), this[_0x5510e7(0x213)])), this[_0x5510e7(0x213)] == _0x14b573 && _0x39bd05(this)['attr']('data-completed', !![]);
                    }), _0x39bd05(this)[_0x58d042(0x16e)](_0x58d042(0x25a), _0x58d042(0x193)), _0x39bd05(this)[_0x58d042(0x16e)]('z-index', '2'), _0x39bd05(this)[_0x58d042(0x188)](_0x58d042(0x162), !![]), _0x39bd05(this)[_0x58d042(0x188)](_0x58d042(0x399), !![]);
                }
            });
            var _0x185d6f = _0x23e584[_0x14f8ba(0x26b)](_0x14f8ba(0x15e)), _0x27d884 = _0x23e584[_0x14f8ba(0x26b)](_0x14f8ba(0x357))[_0x14f8ba(0x140)]();
            _0x2e8afa(_0x185d6f, _0x27d884, _0x14f8ba(0x2a4), _0x14f8ba(0x21a));
        }
        ;
        function _0x1650c1() {
            const _0x518f3d = _0x5b11ec;
            _0x39bd05(_0x518f3d(0x1a7))[_0x518f3d(0x251)](function (_0x7dbb13) {
                const _0x52d30f = _0x518f3d;
                return _0x39bd05(this)['is'](_0x52d30f(0x2a6)) ? _0x39bd05(this)[_0x52d30f(0x148)]()[_0x52d30f(0x148)]()[_0x52d30f(0x148)]()[_0x52d30f(0x148)]()[0x0] : this;
            })['filter'](function () {
                const _0x4a9e40 = _0x518f3d;
                return _0x39bd05(this)[_0x4a9e40(0x2d7)]() > 0x0 && _0x39bd05(this)['width']() > 0x0;
            })[_0x518f3d(0x2f6)](function (_0x5c49a4) {
                const _0x4ccd6c = _0x518f3d;
                if (!_0x39bd05(this)[_0x4ccd6c(0x188)](_0x4ccd6c(0x1b0)) && !_0x39bd05(this)['hasClass'](_0x4ccd6c(0x1fb)) && !_0x39bd05(this)[_0x4ccd6c(0x1b8)](_0x4ccd6c(0x154))?.[_0x4ccd6c(0x189)]('x1iyjqo2') && _0x39bd05(this)[_0x4ccd6c(0x28b)](_0x4ccd6c(0x26c))[_0x4ccd6c(0x1d7)] === 0x0) {
                    _0x3e5117(_0x4ccd6c(0x292), _0x39bd05(this));
                    var _0x24aaa8 = 0xf, _0x10a19f = 0xf, _0x1a091c = _0x39bd05(this), _0x2166fd = this['tagName'];
                    if (_0x2166fd === 'DIV' && _0x5c49a4 != 0x0)
                        return;
                    const _0x5c7ace = _0x1a091c['children'](_0x4ccd6c(0x226))[_0x4ccd6c(0x1b8)]('div');
                    if (_0x5c7ace['length'] === 0x0)
                        return;
                    _0x3e5117('Found\x20insert\x20point', _0x5c7ace);
                    if (_0x1a091c[_0x4ccd6c(0x26b)](_0x4ccd6c(0x1dc))[_0x4ccd6c(0x1d7)] > 0x0) {
                        _0x1a091c[_0x4ccd6c(0x26b)](_0x4ccd6c(0x367))[_0x4ccd6c(0x1d7)] > 0x0 && _0x1a091c[_0x4ccd6c(0x26b)](_0x4ccd6c(0x367))[_0x4ccd6c(0x16e)](_0x4ccd6c(0x176), _0x4ccd6c(0x139));
                        const _0x2b78c3 = _0x1a091c[_0x4ccd6c(0x26b)](_0x4ccd6c(0x1dc))[_0x4ccd6c(0x140)]()['parent']()[0x0];
                        var _0x4e6058 = new MutationObserver(function (_0x2d569a, _0x2a4d8c) {
                            const _0x1500f2 = _0x4ccd6c;
                            _0x1a091c[_0x1500f2(0x26b)]('._acay\x20+\x20.x24i39r')[_0x1500f2(0x16e)](_0x1500f2(0x176), _0x1500f2(0x139));
                        });
                        _0x4e6058[_0x4ccd6c(0x391)](_0x2b78c3, { 'childList': !![] });
                    }
                    const _0x94c2db = '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x127cc3('DW') + _0x4ccd6c(0x13f) + _0x24aaa8 + _0x4ccd6c(0x29e) + _0x10a19f + _0x4ccd6c(0x1bb) + _0x59d314[_0x4ccd6c(0x363)] + _0x4ccd6c(0x208), _0x424bfc = _0x4ccd6c(0x23d) + _0x127cc3(_0x4ccd6c(0x362)) + _0x4ccd6c(0x24c) + (_0x24aaa8 + 0x23) + _0x4ccd6c(0x29e) + _0x10a19f + _0x4ccd6c(0x1bb) + _0x59d314['NEW_TAB'] + _0x4ccd6c(0x208), _0x3fba98 = _0x4ccd6c(0x256) + _0x127cc3('THUMBNAIL_INTRO') + _0x4ccd6c(0x1fa) + (_0x24aaa8 + 0x46) + _0x4ccd6c(0x29e) + _0x10a19f + 'px;\x22>' + _0x59d314[_0x4ccd6c(0x2b4)] + _0x4ccd6c(0x208);
                    _0x5c7ace['eq'](_0x2166fd === 'DIV' ? 0x0 : _0x5c7ace[_0x4ccd6c(0x1d7)] - 0x2)[_0x4ccd6c(0x2fc)](_0x94c2db), _0x5c7ace['eq'](_0x2166fd === 'DIV' ? 0x0 : _0x5c7ace[_0x4ccd6c(0x1d7)] - 0x2)[_0x4ccd6c(0x2fc)](_0x424bfc), setTimeout(() => {
                        const _0x2fcb8c = _0x4ccd6c;
                        if (_0x5c7ace['eq'](_0x2166fd === _0x2fcb8c(0x325) ? 0x0 : _0x5c7ace[_0x2fcb8c(0x1d7)] - 0x2)[_0x2fcb8c(0x26b)](_0x2fcb8c(0x2a3))['length'] === 0x0)
                            _0x5c7ace[_0x2fcb8c(0x26b)](_0x2fcb8c(0x15e))[_0x2fcb8c(0x1d7)] > 0x0 && _0x5c7ace['eq'](_0x2166fd === 'DIV' ? 0x0 : _0x5c7ace[_0x2fcb8c(0x1d7)] - 0x2)['append'](_0x3fba98);
                        else {
                            const _0x199e18 = (_0x48b793, _0x2ad286) => {
                                    const _0x5b7071 = _0x2fcb8c;
                                    _0x48b793[_0x5b7071(0x202)](_0x534309 => {
                                        const _0x3457dd = _0x5b7071;
                                        if (_0x534309['isIntersecting']) {
                                            var _0x57d073 = _0x39bd05(_0x534309[_0x3457dd(0x2fb)]);
                                            _0x57d073[_0x3457dd(0x26b)]('video')[_0x3457dd(0x1d7)] > 0x0 ? (_0x5c7ace['eq'](_0x2166fd === _0x3457dd(0x325) ? 0x0 : _0x5c7ace['length'] - 0x2)[_0x3457dd(0x2fc)](_0x3fba98), _0x4d8e2f(_0x1a091c)) : _0x5c7ace['find'](_0x3457dd(0x207))?.[_0x3457dd(0x344)]();
                                        }
                                    });
                                }, _0xb46699 = new IntersectionObserver(_0x199e18, {
                                    'root': _0x1a091c[_0x2fcb8c(0x26b)](_0x2fcb8c(0x356))['first']()[_0x2fcb8c(0x148)]()['parent']()[_0x2fcb8c(0x148)]()[0x0],
                                    'rootMargin': '0px',
                                    'threshold': 0.1
                                }), _0x53a823 = new MutationObserver(function (_0xbceb24, _0x1c7b2a) {
                                    const _0xb4edbd = _0x2fcb8c;
                                    var _0x4c7790 = _0xbceb24['at'](0x0)?.[_0xb4edbd(0x2fb)];
                                    _0x39bd05(_0x4c7790)[_0xb4edbd(0x26b)](_0xb4edbd(0x1b7))[_0xb4edbd(0x2f6)](function () {
                                        const _0x5c1874 = _0xb4edbd;
                                        _0xb46699[_0x5c1874(0x391)](this);
                                    });
                                });
                            _0x1a091c['find'](_0x2fcb8c(0x2a3))['each'](function () {
                                const _0x55b3ea = _0x2fcb8c;
                                _0xb46699[_0x55b3ea(0x391)](this);
                            });
                            const _0x21c013 = _0x5c7ace['eq'](_0x2166fd === _0x2fcb8c(0x325) ? 0x0 : _0x5c7ace[_0x2fcb8c(0x1d7)] - 0x2)[_0x2fcb8c(0x26b)](_0x2fcb8c(0x2a3))?.[_0x2fcb8c(0x148)]()[0x0], _0x5c078a = _0x5c7ace['eq'](_0x2166fd === _0x2fcb8c(0x325) ? 0x0 : _0x5c7ace[_0x2fcb8c(0x1d7)] - 0x2)[_0x2fcb8c(0x26b)](_0x2fcb8c(0x2a3))?.['parent']()[_0x2fcb8c(0x148)]()[0x0];
                            _0x21c013 && _0x53a823[_0x2fcb8c(0x391)](_0x21c013, { 'childList': !![] }), _0x5c078a && _0x53a823[_0x2fcb8c(0x391)](_0x5c078a, { 'attributes': !![] });
                        }
                    }, 0x32), _0x5c7ace[_0x4ccd6c(0x16e)](_0x4ccd6c(0x25a), _0x4ccd6c(0x27b)), _0x4d8e2f(_0x1a091c), _0x39bd05(this)['on'](_0x4ccd6c(0x18b), _0x4ccd6c(0x207), function (_0x4df161) {
                        const _0x50d1cc = _0x4ccd6c;
                        _0xe0c226(!![]), _0x364855 = _0x39bd05(this)[_0x50d1cc(0x148)]()[_0x50d1cc(0x148)]()['parent']()['attr'](_0x50d1cc(0x36c)), _0x591442 = location[_0x50d1cc(0x1a4)][_0x50d1cc(0x323)](/\/$/, '')['split']('/')['at'](-0x1) || _0x39bd05(this)[_0x50d1cc(0x148)]()['parent']()[_0x50d1cc(0x148)]()[_0x50d1cc(0x26b)](_0x50d1cc(0x147))['first']()[_0x50d1cc(0x188)](_0x50d1cc(0x242))[_0x50d1cc(0x30a)]('/')['at'](0x2) || _0x39bd05(this)[_0x50d1cc(0x148)]()[_0x50d1cc(0x148)]()[_0x50d1cc(0x1b8)](_0x50d1cc(0x2bf))[_0x50d1cc(0x1b8)](_0x50d1cc(0x226))[_0x50d1cc(0x1b8)](_0x50d1cc(0x2bf))[_0x50d1cc(0x26b)](_0x50d1cc(0x147))['last']()[_0x50d1cc(0x188)](_0x50d1cc(0x242))[_0x50d1cc(0x30a)]('/')['at'](0x2);
                        var _0x426435 = _0x39bd05(this)[_0x50d1cc(0x148)]()[_0x50d1cc(0x148)]()[_0x50d1cc(0x148)](), _0x4bcd0e = _0x26cee9(_0x426435);
                        _0x285eeb(!![], ![]), _0x237726(_0x591442, _0x50d1cc(0x210), '')[_0x50d1cc(0x159)](() => {
                            let _0x5a73d9 = setInterval(() => {
                                const _0x21c044 = a0_0x3537;
                                if (_0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x21c044(0x1d7)] > 0x0) {
                                    clearInterval(_0x5a73d9);
                                    var _0x1f5e74 = _0x39bd05(_0x21c044(0x13c) + (_0x4bcd0e + 0x1) + '\x22]')?.[_0x21c044(0x148)]()[_0x21c044(0x26b)](_0x21c044(0x38d))?.[_0x21c044(0x140)]();
                                    _0x1f5e74 != null && _0x1f5e74[_0x21c044(0x1d7)] > 0x0 ? _0x1f5e74[_0x21c044(0x18b)]() : alert(_0x21c044(0x157)), _0xe0c226(![]), _0x39bd05('.IG_SN_DIG')[_0x21c044(0x344)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x39bd05(this)['on'](_0x4ccd6c(0x18b), _0x4ccd6c(0x20a), function (_0x4e8d25) {
                        const _0xf97e90 = _0x4ccd6c;
                        _0xe0c226(!![]), _0x364855 = _0x39bd05(this)['parent']()[_0xf97e90(0x148)]()['parent']()['attr'](_0xf97e90(0x36c)), _0x591442 = location['pathname']['replace'](/\/$/, '')[_0xf97e90(0x30a)]('/')['at'](-0x1) || _0x39bd05(this)[_0xf97e90(0x148)]()[_0xf97e90(0x148)]()[_0xf97e90(0x148)]()[_0xf97e90(0x26b)]('a[href^=\x22/p/\x22]')[_0xf97e90(0x140)]()['attr'](_0xf97e90(0x242))[_0xf97e90(0x30a)]('/')['at'](0x2) || _0x39bd05(this)[_0xf97e90(0x148)]()[_0xf97e90(0x148)]()['children']('div:last-child')[_0xf97e90(0x1b8)](_0xf97e90(0x226))[_0xf97e90(0x1b8)](_0xf97e90(0x2bf))[_0xf97e90(0x26b)](_0xf97e90(0x147))['last']()['attr'](_0xf97e90(0x242))['split']('/')['at'](0x2);
                        var _0x56fdcd = _0x39bd05(this)[_0xf97e90(0x148)]()[_0xf97e90(0x148)]()[_0xf97e90(0x148)](), _0x291e92 = _0x26cee9(_0x56fdcd);
                        _0x285eeb(!![], ![]), _0x237726(_0x591442, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0xf97e90(0x159)](() => {
                            let _0x13dc45 = setInterval(() => {
                                const _0x2b4750 = a0_0x3537;
                                if (_0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x2b4750(0x1d7)] > 0x0) {
                                    clearInterval(_0x13dc45);
                                    var _0x24add7 = _0x39bd05(_0x2b4750(0x13c) + (_0x291e92 + 0x1) + '\x22]');
                                    if (_0x57497a[_0x2b4750(0x230)] && _0x57497a[_0x2b4750(0x142)])
                                        _0x2f61e7(_0x24add7[_0x2b4750(0x140)]()[0x0], !![]);
                                    else {
                                        let _0x451ca6 = _0x24add7?.['attr'](_0x2b4750(0x1f9));
                                        if (_0x451ca6) {
                                            var _0x21581d = new URL(_0x451ca6);
                                            _0x21581d['host'] = _0x2b4750(0x20e), _0x4ca43c(_0x21581d[_0x2b4750(0x242)]);
                                        } else
                                            alert(_0x2b4750(0x255));
                                    }
                                    _0xe0c226(![]), _0x39bd05(_0x2b4750(0x1b5))[_0x2b4750(0x344)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x39bd05(this)['on'](_0x4ccd6c(0x18b), _0x4ccd6c(0x21c), async function (_0x55adca) {
                        const _0x1fd33f = _0x4ccd6c;
                        _0x364855 = _0x39bd05(this)[_0x1fd33f(0x148)]()[_0x1fd33f(0x148)]()['parent']()[_0x1fd33f(0x188)](_0x1fd33f(0x36c)), _0x591442 = location[_0x1fd33f(0x1a4)][_0x1fd33f(0x323)](/\/$/, '')['split']('/')['at'](-0x1) || _0x39bd05(this)[_0x1fd33f(0x148)]()[_0x1fd33f(0x148)]()[_0x1fd33f(0x148)]()[_0x1fd33f(0x26b)](_0x1fd33f(0x147))[_0x1fd33f(0x140)]()[_0x1fd33f(0x188)](_0x1fd33f(0x242))[_0x1fd33f(0x30a)]('/')['at'](0x2) || _0x39bd05(this)['parent']()[_0x1fd33f(0x148)]()[_0x1fd33f(0x1b8)]('div:last-child')[_0x1fd33f(0x1b8)](_0x1fd33f(0x226))[_0x1fd33f(0x1b8)]('div:last-child')[_0x1fd33f(0x26b)]('a[href^=\x22/p/\x22]')['last']()['attr'](_0x1fd33f(0x242))[_0x1fd33f(0x30a)]('/')['at'](0x2), _0x285eeb(_0x57497a[_0x1fd33f(0x133)], !![]), _0x39bd05('#article-id')['html'](_0x1fd33f(0x1b4) + _0x591442 + '\x22>' + _0x591442 + _0x1fd33f(0x324));
                        if (_0x57497a[_0x1fd33f(0x278)]) {
                            _0xe0c226(!![]), _0x1160c2(!![]);
                            var _0x635c38 = _0x26cee9(_0x39bd05(this)[_0x1fd33f(0x148)]()[_0x1fd33f(0x148)]()['parent']());
                            _0x237726(_0x591442, _0x1fd33f(0x210), '')[_0x1fd33f(0x159)](() => {
                                let _0x4d3cc6 = setInterval(() => {
                                    const _0x436eb4 = a0_0x3537;
                                    if (_0x39bd05(_0x436eb4(0x35e))[_0x436eb4(0x1d7)] > 0x0) {
                                        clearInterval(_0x4d3cc6);
                                        var _0x2b9feb = _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x635c38 + 0x1) + '\x22]')?.[_0x436eb4(0x188)]('data-href');
                                        _0x2b9feb ? (_0xe0c226(![]), _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x635c38 + 0x1) + '\x22]')?.['click']()) : alert(_0x436eb4(0x300)), _0x39bd05(_0x436eb4(0x1b5))[_0x436eb4(0x344)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x57497a[_0x1fd33f(0x133)]) {
                            var _0xa95215 = 0x0, _0x3c0706 = _0x39bd05(this)[_0x1fd33f(0x148)]()[_0x1fd33f(0x148)]()['find'](_0x1fd33f(0x379))[_0x1fd33f(0x1d7)], _0x596fdc = window[_0x1fd33f(0x190)][_0x1fd33f(0x1a4)], _0xc52eeb = '/' + _0x596fdc[_0x1fd33f(0x30a)]('/')[0x1] + '/' + _0x596fdc[_0x1fd33f(0x30a)]('/')[0x2] + '/', _0x3c3036 = _0x57497a[_0x1fd33f(0x31f)], _0x1eca68 = new Date(_0x39bd05(this)['parent']()[_0x1fd33f(0x148)]()[_0x1fd33f(0x26b)](_0x1fd33f(0x29c))[_0x1fd33f(0x140)]()[_0x1fd33f(0x188)]('datetime'))['getTime']();
                            if (_0x3c0706)
                                _0x39bd05(this)['parent']()[_0x1fd33f(0x26b)](_0x1fd33f(0x379))[_0x1fd33f(0x2f6)](function () {
                                    const _0x322ff9 = _0x1fd33f;
                                    let _0x356186 = _0x39bd05(this)[_0x322ff9(0x148)]()[_0x322ff9(0x148)]()[_0x322ff9(0x26b)](_0x322ff9(0x15e));
                                    _0x356186 && _0x356186[_0x322ff9(0x188)]('src') && (_0x3c3036 = !![]);
                                }), _0x3c3036 || _0x57497a[_0x1fd33f(0x230)] ? _0x237726(_0x591442, _0x1fd33f(0x210), _0x127cc3('LOAD_BLOB_MULTIPLE')) : (_0x39bd05(this)[_0x1fd33f(0x148)]()['find'](_0x1fd33f(0x379))[_0x1fd33f(0x2f6)](function () {
                                    const _0x417729 = _0x1fd33f;
                                    _0xa95215++;
                                    let _0x1c0a7a = _0x39bd05(this)['find'](_0x417729(0x15e)), _0x3f10ac = _0x39bd05(this)[_0x417729(0x26b)](_0x417729(0x172)), _0x16f5a5 = _0x3f10ac['attr'](_0x417729(0x173)) ? _0x3f10ac[_0x417729(0x188)](_0x417729(0x173))[_0x417729(0x30a)]('\x20')[0x0] : _0x3f10ac['attr'](_0x417729(0x35c));
                                    _0x1c0a7a && _0x1c0a7a['attr'](_0x417729(0x35c)) && (_0x3c3036 = !![]), _0x3f10ac && _0x16f5a5 && _0x39bd05(_0x417729(0x210))[_0x417729(0x2fc)](_0x417729(0x216) + _0x1eca68 + _0x417729(0x25d) + _0x591442 + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0xa95215 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x16f5a5 + _0x417729(0x276) + _0x16f5a5 + _0x417729(0x312) + _0x127cc3(_0x417729(0x2a8)) + _0x417729(0x15a) + _0xa95215 + _0x417729(0x249));
                                }), _0x3c3036 && _0x237726(_0x591442, _0x1fd33f(0x210), _0x127cc3(_0x1fd33f(0x1fd))));
                            else {
                                if (_0x57497a[_0x1fd33f(0x230)])
                                    _0x237726(_0x591442, _0x1fd33f(0x210), _0x127cc3(_0x1fd33f(0x336)));
                                else {
                                    _0xa95215++;
                                    let _0x4fef1e = _0x39bd05(this)[_0x1fd33f(0x148)]()[_0x1fd33f(0x148)]()[_0x1fd33f(0x26b)](_0x1fd33f(0x15e)), _0x43f1ce = _0x39bd05(this)['parent']()[_0x1fd33f(0x148)]()['find'](_0x1fd33f(0x172)), _0x2a164c = _0x43f1ce['attr'](_0x1fd33f(0x173)) ? _0x43f1ce[_0x1fd33f(0x188)](_0x1fd33f(0x173))[_0x1fd33f(0x30a)]('\x20')[0x0] : _0x43f1ce[_0x1fd33f(0x188)]('src');
                                    _0x4fef1e && _0x4fef1e['attr'](_0x1fd33f(0x35c)) && _0x237726(_0x591442, _0x1fd33f(0x210), _0x127cc3(_0x1fd33f(0x261))), _0x43f1ce && _0x2a164c && _0x39bd05(_0x1fd33f(0x210))[_0x1fd33f(0x2fc)](_0x1fd33f(0x216) + _0x1eca68 + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x591442 + _0x1fd33f(0x20b) + _0xa95215 + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x2a164c + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2a164c + _0x1fd33f(0x312) + _0x127cc3(_0x1fd33f(0x2a8)) + '</span>\x20' + _0xa95215 + _0x1fd33f(0x249));
                                }
                            }
                        }
                        _0x39bd05(_0x1fd33f(0x35e))[_0x1fd33f(0x2f6)](function () {
                            const _0x22be54 = _0x1fd33f;
                            _0x39bd05(this)[_0x22be54(0x25f)](_0x22be54(0x306)), _0x39bd05(this)[_0x22be54(0x2cd)](_0x22be54(0x19d)), _0x39bd05(this)[_0x22be54(0x182)](_0x22be54(0x23d) + _0x127cc3('NEW_TAB') + _0x22be54(0x1e4) + _0x59d314[_0x22be54(0x362)] + '</div>'), _0x39bd05(this)[_0x22be54(0x188)]('data-name') == _0x22be54(0x15e) && _0x39bd05(this)[_0x22be54(0x182)](_0x22be54(0x256) + _0x127cc3(_0x22be54(0x130)) + _0x22be54(0x1a6) + _0x59d314[_0x22be54(0x2b4)] + _0x22be54(0x208));
                        }), _0x57497a[_0x1fd33f(0x133)] && _0x237726(_0x591442, _0x1fd33f(0x210), _0x127cc3(_0x1fd33f(0x336)))[_0x1fd33f(0x159)](() => {
                            let _0x5383c4 = setInterval(() => {
                                const _0xfb3a58 = a0_0x3537;
                                _0x39bd05(_0xfb3a58(0x35e))[_0xfb3a58(0x1d7)] > 0x0 && (clearInterval(_0x5383c4), _0x39bd05(_0xfb3a58(0x35e))[_0xfb3a58(0x2f6)](function () {
                                    const _0x3e92f0 = _0xfb3a58;
                                    _0x39bd05(this)[_0x3e92f0(0x18b)]();
                                }), _0x39bd05('.IG_SN_DIG')[_0xfb3a58(0x344)]());
                            }, 0xfa);
                        });
                    });
                    var _0x36f263 = _0x39bd05(this)['find'](_0x4ccd6c(0x297))[_0x4ccd6c(0x140)]()[_0x4ccd6c(0x393)]() || _0x39bd05(this)[_0x4ccd6c(0x26b)](_0x4ccd6c(0x2a2))[_0x4ccd6c(0x39c)](function () {
                        const _0x244d57 = _0x4ccd6c;
                        return _0x39bd05(this)?.[_0x244d57(0x393)]()?.['length'] > 0x0;
                    })[_0x4ccd6c(0x140)]()[_0x4ccd6c(0x393)]();
                    _0x39bd05(this)[_0x4ccd6c(0x188)]('data-snig', _0x4ccd6c(0x36d)), _0x39bd05(this)['attr'](_0x4ccd6c(0x36c), _0x36f263);
                }
            });
        }
        function _0x237726(_0x4c9e0f, _0x55b82e, _0x52c799) {
            return new Promise(async _0x1fe96e => {
                const _0x43f276 = a0_0x3537;
                _0x39bd05(_0x55b82e + '\x20a')[_0x43f276(0x344)](), _0x39bd05(_0x55b82e)[_0x43f276(0x2fc)](_0x43f276(0x1d4) + _0x52c799 + '</p>');
                let _0x30142c = await _0x481a9d(_0x4c9e0f);
                if (_0x30142c[_0x43f276(0x26e)] === _0x43f276(0x200)) {
                    let _0x51172e = 0x1, _0x32f85a = _0x30142c['data'], _0x24e456 = _0x32f85a[_0x43f276(0x259)];
                    _0x24e456['__typename'] == _0x43f276(0x1e6) && _0x24e456[_0x43f276(0x2f3)] && (_0x39bd05(_0x55b82e)[_0x43f276(0x2fc)]('<a\x20media-id=\x22' + _0x24e456['id'] + _0x43f276(0x1bd) + _0x24e456[_0x43f276(0x211)] + _0x43f276(0x22c) + _0x24e456[_0x43f276(0x199)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x24e456[_0x43f276(0x365)][_0x43f276(0x14e)] + _0x43f276(0x330) + _0x51172e + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x24e456[_0x43f276(0x2f3)] + _0x43f276(0x276) + _0x24e456[_0x43f276(0x347)][0x1][_0x43f276(0x35c)] + _0x43f276(0x2ed) + _0x127cc3('VID') + '</span>\x20' + _0x51172e + _0x43f276(0x249)), _0x51172e++);
                    _0x24e456[_0x43f276(0x2c0)] == 'GraphImage' && (_0x39bd05(_0x55b82e)['append'](_0x43f276(0x2e0) + _0x24e456['id'] + _0x43f276(0x1bd) + _0x24e456[_0x43f276(0x211)] + _0x43f276(0x22c) + _0x24e456[_0x43f276(0x199)] + _0x43f276(0x201) + _0x24e456[_0x43f276(0x365)][_0x43f276(0x14e)] + _0x43f276(0x330) + _0x51172e + _0x43f276(0x141) + _0x24e456['display_resources'][_0x24e456['display_resources'][_0x43f276(0x1d7)] - 0x1]['src'] + _0x43f276(0x276) + _0x24e456['display_resources'][0x1][_0x43f276(0x35c)] + _0x43f276(0x312) + _0x127cc3(_0x43f276(0x2a8)) + _0x43f276(0x15a) + _0x51172e + _0x43f276(0x249)), _0x51172e++);
                    if (_0x24e456[_0x43f276(0x2c0)] == _0x43f276(0x245) && _0x24e456[_0x43f276(0x2f9)])
                        for (let _0x1043d8 of _0x24e456[_0x43f276(0x2f9)][_0x43f276(0x1bf)]) {
                            _0x1043d8[_0x43f276(0x2f5)][_0x43f276(0x2c0)] == 'GraphVideo' && _0x39bd05(_0x55b82e)[_0x43f276(0x2fc)](_0x43f276(0x2e0) + _0x1043d8[_0x43f276(0x2f5)]['id'] + _0x43f276(0x1bd) + _0x24e456['taken_at_timestamp'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x24e456[_0x43f276(0x199)] + _0x43f276(0x1a2) + _0x24e456[_0x43f276(0x365)][_0x43f276(0x14e)] + _0x43f276(0x330) + _0x51172e + _0x43f276(0x141) + _0x1043d8['node'][_0x43f276(0x2f3)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x1043d8[_0x43f276(0x2f5)][_0x43f276(0x347)][0x1]['src'] + _0x43f276(0x22a) + _0x127cc3(_0x43f276(0x1ee)) + _0x43f276(0x15a) + _0x51172e + '\x20-</a>'), _0x1043d8[_0x43f276(0x2f5)][_0x43f276(0x2c0)] == _0x43f276(0x131) && _0x39bd05(_0x55b82e)['append'](_0x43f276(0x2e0) + _0x1043d8[_0x43f276(0x2f5)]['id'] + _0x43f276(0x1bd) + _0x24e456['taken_at_timestamp'] + _0x43f276(0x22c) + _0x24e456['shortcode'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x24e456[_0x43f276(0x365)][_0x43f276(0x14e)] + _0x43f276(0x330) + _0x51172e + _0x43f276(0x141) + _0x1043d8['node'][_0x43f276(0x347)][_0x1043d8[_0x43f276(0x2f5)]['display_resources'][_0x43f276(0x1d7)] - 0x1][_0x43f276(0x35c)] + _0x43f276(0x276) + _0x1043d8[_0x43f276(0x2f5)][_0x43f276(0x347)][0x1][_0x43f276(0x35c)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x127cc3(_0x43f276(0x2a8)) + _0x43f276(0x15a) + _0x51172e + _0x43f276(0x249)), _0x51172e++;
                        }
                } else {
                    let _0x13a228 = _0x30142c[_0x43f276(0x342)];
                    if (_0x13a228[_0x43f276(0x31e)])
                        _0x3e5117(_0x43f276(0x31e)), _0x13a228[_0x43f276(0x31e)]['forEach']((_0x3f0810, _0x26d221) => {
                            const _0x46add4 = _0x43f276;
                            let _0x534669 = _0x26d221 + 0x1;
                            _0x3f0810[_0x46add4(0x2d2)] == null ? (_0x3f0810[_0x46add4(0x1f4)]['candidates'][_0x46add4(0x15d)](function (_0x3c12a4, _0x378517) {
                                const _0x5e5ca1 = _0x46add4;
                                if (_0x3c12a4[_0x5e5ca1(0x178)] < _0x378517[_0x5e5ca1(0x178)])
                                    return 0x1;
                                if (_0x3c12a4['width'] > _0x378517['width'])
                                    return -0x1;
                                return 0x0;
                            }), _0x39bd05(_0x55b82e)['append']('<a\x20media-id=\x22' + _0x3f0810['pk'] + _0x46add4(0x1bd) + _0x3f0810[_0x46add4(0x1ef)] + _0x46add4(0x22c) + _0x13a228[_0x46add4(0x37f)] + _0x46add4(0x201) + _0x13a228[_0x46add4(0x365)][_0x46add4(0x14e)] + _0x46add4(0x330) + _0x534669 + _0x46add4(0x141) + _0x3f0810[_0x46add4(0x1f4)][_0x46add4(0x361)][0x0][_0x46add4(0x389)] + _0x46add4(0x276) + _0x3f0810[_0x46add4(0x1f4)]['candidates'][0x0][_0x46add4(0x389)] + _0x46add4(0x312) + _0x127cc3(_0x46add4(0x2a8)) + _0x46add4(0x15a) + _0x534669 + '\x20-</a>')) : _0x39bd05(_0x55b82e)['append'](_0x46add4(0x2e0) + _0x3f0810['pk'] + _0x46add4(0x1bd) + _0x3f0810['taken_at'] + _0x46add4(0x22c) + _0x13a228[_0x46add4(0x37f)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x13a228[_0x46add4(0x365)]['username'] + _0x46add4(0x330) + _0x534669 + _0x46add4(0x141) + _0x3f0810[_0x46add4(0x2d2)][0x0][_0x46add4(0x389)] + _0x46add4(0x276) + _0x3f0810[_0x46add4(0x1f4)][_0x46add4(0x361)][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x127cc3(_0x46add4(0x1ee)) + _0x46add4(0x15a) + _0x534669 + _0x46add4(0x249));
                        });
                    else {
                        let _0xd60656 = 0x1;
                        _0x13a228[_0x43f276(0x2d2)] == null ? (_0x13a228[_0x43f276(0x1f4)]['candidates']['sort'](function (_0xe563e9, _0x4860b8) {
                            const _0x5f4a3b = _0x43f276;
                            if (_0xe563e9[_0x5f4a3b(0x178)] < _0x4860b8['width'])
                                return 0x1;
                            if (_0xe563e9[_0x5f4a3b(0x178)] > _0x4860b8[_0x5f4a3b(0x178)])
                                return -0x1;
                            return 0x0;
                        }), _0x39bd05(_0x55b82e)[_0x43f276(0x2fc)]('<a\x20media-id=\x22' + _0x13a228['pk'] + _0x43f276(0x1bd) + _0x13a228[_0x43f276(0x1ef)] + _0x43f276(0x22c) + _0x13a228[_0x43f276(0x37f)] + _0x43f276(0x201) + _0x13a228[_0x43f276(0x365)][_0x43f276(0x14e)] + '\x22\x20data-globalIndex=\x22' + _0xd60656 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x13a228[_0x43f276(0x1f4)][_0x43f276(0x361)][0x0]['url'] + _0x43f276(0x276) + _0x13a228['image_versions2'][_0x43f276(0x361)][0x0][_0x43f276(0x389)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x127cc3(_0x43f276(0x2a8)) + _0x43f276(0x15a) + _0xd60656 + _0x43f276(0x249))) : _0x39bd05(_0x55b82e)[_0x43f276(0x2fc)](_0x43f276(0x2e0) + _0x13a228['pk'] + _0x43f276(0x1bd) + _0x13a228[_0x43f276(0x1ef)] + _0x43f276(0x22c) + _0x13a228[_0x43f276(0x37f)] + _0x43f276(0x1a2) + _0x13a228[_0x43f276(0x365)]['username'] + '\x22\x20data-globalIndex=\x22' + _0xd60656 + _0x43f276(0x141) + _0x13a228[_0x43f276(0x2d2)][0x0][_0x43f276(0x389)] + _0x43f276(0x276) + _0x13a228[_0x43f276(0x1f4)][_0x43f276(0x361)][0x0][_0x43f276(0x389)] + _0x43f276(0x2ed) + _0x127cc3(_0x43f276(0x1ee)) + _0x43f276(0x15a) + _0xd60656 + '\x20-</a>');
                    }
                }
                _0x39bd05(_0x43f276(0x21f))[_0x43f276(0x344)](), _0x39bd05(_0x43f276(0x35e))['each'](function () {
                    const _0x565358 = _0x43f276;
                    _0x39bd05(this)['wrap'](_0x565358(0x306)), _0x39bd05(this)[_0x565358(0x2cd)](_0x565358(0x19d)), _0x39bd05(this)['after'](_0x565358(0x23d) + _0x127cc3(_0x565358(0x362)) + _0x565358(0x1e4) + _0x59d314[_0x565358(0x362)] + _0x565358(0x208)), _0x39bd05(this)[_0x565358(0x188)](_0x565358(0x1e1)) == 'video' && _0x39bd05(this)[_0x565358(0x182)](_0x565358(0x256) + _0x127cc3('THUMBNAIL_INTRO') + _0x565358(0x1a6) + _0x59d314[_0x565358(0x2b4)] + _0x565358(0x208));
                }), _0x1fe96e(!![]);
            });
        }
        function _0x285eeb(_0xdf6c51, _0x40c410) {
            const _0x551f79 = _0x5b11ec;
            let _0x55838f = _0xdf6c51 ? _0x551f79(0x217) : '';
            _0x39bd05(_0x551f79(0x262))[_0x551f79(0x2fc)]('<div\x20class=\x22IG_SN_DIG\x20' + _0x55838f + _0x551f79(0x327)), _0x39bd05(_0x551f79(0x227))[_0x551f79(0x2fc)](_0x551f79(0x2a7) + _0x127cc3(_0x551f79(0x359)) + '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x59d314[_0x551f79(0x359)] + '</div></div>'), _0x40c410 && (_0x39bd05(_0x551f79(0x227))[_0x551f79(0x2fc)](_0x551f79(0x174)), _0x39bd05(_0x551f79(0x197))[_0x551f79(0x2fc)](_0x551f79(0x14f) + _0x127cc3(_0x551f79(0x1c7)) + _0x551f79(0x268)), _0x39bd05(_0x551f79(0x197))['append'](_0x551f79(0x34e) + _0x127cc3(_0x551f79(0x24d)) + _0x551f79(0x268)), _0x39bd05(_0x551f79(0x227))['append'](_0x551f79(0x314) + _0x127cc3('ALL_CHECK') + '</span></label>'));
        }
        function _0x1160c2(_0x4a2358) {
            const _0x21e89c = _0x5b11ec;
            _0x39bd05(_0x21e89c(0x1b5))[_0x21e89c(0x1d7)] && (_0x4a2358 ? _0x39bd05('.IG_SN_DIG')['addClass'](_0x21e89c(0x217)) : _0x39bd05('.IG_SN_DIG')[_0x21e89c(0x2c8)](_0x21e89c(0x217)));
        }
        function _0x1dfca2(_0x1172e3, _0x4609ac, _0x49d991, _0x50bfe7, _0x27227c, _0x9016e8) {
            setTimeout(() => {
                const _0x222c19 = a0_0x3537;
                _0xe0c226(!![]), fetch(_0x1172e3)[_0x222c19(0x159)](_0x31844a => {
                    const _0x43ff54 = _0x222c19;
                    return _0x31844a[_0x43ff54(0x17e)]()[_0x43ff54(0x159)](_0x599f36 => {
                        _0xe0c226(![]), _0x518a45(_0x1172e3, _0x599f36, _0x4609ac, _0x49d991, _0x50bfe7, _0x27227c, _0x9016e8);
                    });
                });
            }, 0x32);
        }
        function _0x518a45(_0x1d0602, _0x13ad4d, _0x5d554c, _0x195f18, _0xc6a71f, _0x28ec12, _0x27a7fc) {
            const _0x4e60c1 = _0x5b11ec;
            _0xc6a71f = parseInt(_0xc6a71f[_0x4e60c1(0x221)]()[_0x4e60c1(0x1de)](0xd, '0'));
            _0x57497a['RENAME_PUBLISH_DATE'] && (_0xc6a71f = parseInt(_0xc6a71f[_0x4e60c1(0x221)]()['padEnd'](0xd, '0')));
            const _0x2708fd = new Date(_0xc6a71f), _0x229492 = document[_0x4e60c1(0x2e4)]('a'), _0xe73fb6 = new URL(_0x1d0602)[_0x4e60c1(0x1a4)][_0x4e60c1(0x30a)]('/')['at'](-0x1)[_0x4e60c1(0x30a)]('.')[_0x4e60c1(0x396)](0x0, -0x1)[_0x4e60c1(0x388)]('.'), _0x17313b = _0x2708fd[_0x4e60c1(0x27f)]()['toString'](), _0x2dfadd = (_0x2708fd[_0x4e60c1(0x1e9)]() + 0x1)[_0x4e60c1(0x221)]()['padStart'](0x2, '0'), _0x147cd6 = _0x2708fd[_0x4e60c1(0x2ca)]()[_0x4e60c1(0x221)]()[_0x4e60c1(0x2c7)](0x2, '0'), _0x3b2aa3 = _0x2708fd[_0x4e60c1(0x398)]()[_0x4e60c1(0x221)]()['padStart'](0x2, '0'), _0x483d59 = _0x2708fd['getMinutes']()['toString']()[_0x4e60c1(0x2c7)](0x2, '0'), _0x3bde47 = _0x2708fd[_0x4e60c1(0x183)]()[_0x4e60c1(0x221)]()[_0x4e60c1(0x2c7)](0x2, '0');
            var _0x1bb21b = _0x5b7341[_0x4e60c1(0x335)](), _0x4983b8 = _0x27a7fc ?? '', _0x2917db = {
                    '%USERNAME%': _0x5d554c,
                    '%SOURCE_TYPE%': _0x195f18,
                    '%SHORTCODE%': _0x4983b8,
                    '%YEAR%': _0x17313b,
                    '%2-YEAR%': _0x17313b[_0x4e60c1(0x33f)](-0x2),
                    '%MONTH%': _0x2dfadd,
                    '%DAY%': _0x147cd6,
                    '%HOUR%': _0x3b2aa3,
                    '%MINUTE%': _0x483d59,
                    '%SECOND%': _0x3bde47,
                    '%ORIGINAL_NAME%': _0xe73fb6,
                    '%ORIGINAL_NAME_FIRST%': _0xe73fb6['split']('_')['at'](0x0)
                };
            _0x1bb21b = _0x1bb21b[_0x4e60c1(0x323)](/%[\w\-]+%/g, function (_0x3ba672) {
                return _0x2917db[_0x3ba672] || _0x3ba672;
            });
            const _0x2fe1a4 = _0x5d554c + '_' + _0xe73fb6 + '.' + _0x28ec12;
            _0x229492['href'] = URL['createObjectURL'](_0x13ad4d), _0x229492[_0x4e60c1(0x161)](_0x4e60c1(0x2d1), _0x57497a['AUTO_RENAME'] ? _0x1bb21b + '.' + _0x28ec12 : _0x2fe1a4), _0x229492['click'](), _0x229492[_0x4e60c1(0x344)]();
        }
        async function _0x2f61e7(_0x596f0b, _0x3e37eb) {
            const _0x546ccd = _0x5b11ec;
            let _0x36bae7 = new Date()['getTime'](), _0x32034d = Math[_0x546ccd(0x1b9)](_0x36bae7 / 0x3e8), _0x2f437d = _0x39bd05(_0x596f0b)[_0x546ccd(0x188)](_0x546ccd(0x36c)) ? _0x39bd05(_0x596f0b)[_0x546ccd(0x188)](_0x546ccd(0x36c)) : _0x364855;
            !_0x2f437d && _0x39bd05(_0x596f0b)[_0x546ccd(0x188)](_0x546ccd(0x1da)) && (_0x3e5117(_0x546ccd(0x31b), _0x39bd05(_0x596f0b)[_0x546ccd(0x188)](_0x546ccd(0x1f9))), _0x2f437d = await _0x11ed6b(_0x39bd05(_0x596f0b)['attr'](_0x546ccd(0x1da)))[_0x546ccd(0x2b6)](_0x24d7ad => {
                const _0x19c4ee = _0x546ccd;
                _0x3e5117(_0x19c4ee(0x231), _0x24d7ad['message']);
            }), _0x2f437d == null && (_0x2f437d = 'NONE'));
            _0x57497a['RENAME_PUBLISH_DATE'] && _0x39bd05(_0x596f0b)[_0x546ccd(0x188)]('datetime') && (_0x32034d = parseInt(_0x39bd05(_0x596f0b)[_0x546ccd(0x188)](_0x546ccd(0x160))));
            if (_0x57497a[_0x546ccd(0x230)]) {
                _0xe0c226(!![]);
                let _0x5e5b25 = await _0x381264(_0x39bd05(_0x596f0b)['attr'](_0x546ccd(0x16a)));
                _0xe0c226(![]);
                if (_0x5e5b25[_0x546ccd(0x2fd)] === 'ok') {
                    var _0xd4a27c = null;
                    _0x5e5b25[_0x546ccd(0x170)][0x0][_0x546ccd(0x2d2)] ? _0xd4a27c = _0x5e5b25[_0x546ccd(0x170)][0x0][_0x546ccd(0x2d2)][0x0][_0x546ccd(0x389)] : (_0x5e5b25[_0x546ccd(0x170)][0x0]['image_versions2'][_0x546ccd(0x361)][_0x546ccd(0x15d)](function (_0x5a5bb2, _0x315605) {
                        const _0x3f1329 = _0x546ccd;
                        if (_0x5a5bb2['width'] < _0x315605['width'])
                            return 0x1;
                        if (_0x5a5bb2[_0x3f1329(0x178)] > _0x315605[_0x3f1329(0x178)])
                            return -0x1;
                        return 0x0;
                    }), _0xd4a27c = _0x5e5b25['items'][0x0][_0x546ccd(0x1f4)][_0x546ccd(0x361)][0x0]['url']);
                    if (_0x3e37eb) {
                        let _0x2cd94e = new URL(_0xd4a27c);
                        _0x2cd94e[_0x546ccd(0x177)] = 'scontent.cdninstagram.com', _0x4ca43c(_0x2cd94e[_0x546ccd(0x242)]);
                    } else
                        _0x1dfca2(_0xd4a27c, _0x2f437d, _0x39bd05(_0x596f0b)['attr'](_0x546ccd(0x1e1)), _0x32034d, _0x39bd05(_0x596f0b)['attr'](_0x546ccd(0x234)), _0x39bd05(_0x596f0b)['attr'](_0x546ccd(0x1da)));
                } else {
                    if (_0x57497a[_0x546ccd(0x19c)]) {
                        if (_0x3e37eb) {
                            let _0x1b43b8 = new URL(_0x39bd05(_0x596f0b)[_0x546ccd(0x188)](_0x546ccd(0x1f9)));
                            _0x1b43b8['host'] = 'scontent.cdninstagram.com', _0x4ca43c(_0x1b43b8[_0x546ccd(0x242)]);
                        } else
                            _0x1dfca2(_0x39bd05(_0x596f0b)[_0x546ccd(0x188)]('data-href'), _0x2f437d, _0x39bd05(_0x596f0b)[_0x546ccd(0x188)]('data-name'), _0x32034d, _0x39bd05(_0x596f0b)[_0x546ccd(0x188)]('data-type'), _0x39bd05(_0x596f0b)[_0x546ccd(0x188)](_0x546ccd(0x1da)));
                    } else
                        alert(_0x546ccd(0x181) + _0x5e5b25['message']);
                    _0x3e5117(_0x5e5b25);
                }
            } else
                _0x1dfca2(_0x39bd05(_0x596f0b)[_0x546ccd(0x188)](_0x546ccd(0x1f9)), _0x2f437d, _0x39bd05(_0x596f0b)[_0x546ccd(0x188)]('data-name'), _0x32034d, _0x39bd05(_0x596f0b)['attr'](_0x546ccd(0x234)), _0x39bd05(_0x596f0b)['attr'](_0x546ccd(0x1da)));
        }
        function _0xee19a2(_0x56a6cf) {
            const _0x3a737f = _0x5b11ec;
            var _0xc63416 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': 'Wololo!\x20New\x20version\x20released.',
                        'NOTICE_UPDATE_CONTENT': _0x3a737f(0x352),
                        'CHECK_UPDATE': _0x3a737f(0x151),
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': _0x3a737f(0x166),
                        'RELOAD_SCRIPT': _0x3a737f(0x2de),
                        'DONATE': 'Donate',
                        'FEEDBACK': _0x3a737f(0x34f),
                        'NEW_TAB': _0x3a737f(0x2c5),
                        'SHOW_DOM_TREE': _0x3a737f(0x2c9),
                        'SELECT_AND_COPY': _0x3a737f(0x392),
                        'DOWNLOAD_DOM_TREE': _0x3a737f(0x18c),
                        'REPORT_GITHUB': _0x3a737f(0x168),
                        'REPORT_DISCORD': _0x3a737f(0x281),
                        'REPORT_FORK': _0x3a737f(0x14c),
                        'DEBUG': 'Debug\x20Window',
                        'CLOSE': _0x3a737f(0x158),
                        'ALL_CHECK': _0x3a737f(0x333),
                        'BATCH_DOWNLOAD_SELECTED': 'Download\x20Selected\x20Resources',
                        'BATCH_DOWNLOAD_DIRECT': _0x3a737f(0x32f),
                        'IMG': _0x3a737f(0x2e5),
                        'VID': _0x3a737f(0x2db),
                        'DW': 'Download',
                        'THUMBNAIL_INTRO': _0x3a737f(0x24b),
                        'LOAD_BLOB_ONE': _0x3a737f(0x293),
                        'LOAD_BLOB_MULTIPLE': 'Loading\x20Blob\x20Media\x20and\x20Others...',
                        'LOAD_BLOB_RELOAD': _0x3a737f(0x2f1),
                        'NO_CHECK_RESOURCE': _0x3a737f(0x2cf),
                        'NO_VID_URL': _0x3a737f(0x358),
                        'SETTING': 'Settings',
                        'AUTO_RENAME': _0x3a737f(0x326),
                        'RENAME_SHORTCODE': _0x3a737f(0x373),
                        'RENAME_PUBLISH_DATE': _0x3a737f(0x2be),
                        'RENAME_LOCATE_DATE': _0x3a737f(0x340),
                        'DISABLE_VIDEO_LOOPING': _0x3a737f(0x248),
                        'HTML5_VIDEO_CONTROL': _0x3a737f(0x223),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x3a737f(0x1aa),
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x3a737f(0x2b7),
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': _0x3a737f(0x2a9),
                        'SCROLL_BUTTON': _0x3a737f(0x30b),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x3a737f(0x23e),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x3a737f(0x291),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x3a737f(0x26d),
                        'AUTO_RENAME_INTRO': _0x3a737f(0x179),
                        'RENAME_SHORTCODE_INTRO': _0x3a737f(0x12b),
                        'RENAME_PUBLISH_DATE_INTRO': _0x3a737f(0x264),
                        'RENAME_LOCATE_DATE_INTRO': _0x3a737f(0x19b),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x3a737f(0x229),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x3a737f(0x397),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': 'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x3a737f(0x13e),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x3a737f(0x1d2),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x3a737f(0x1c6),
                        'MODIFY_VIDEO_VOLUME_INTRO': 'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
                        'SCROLL_BUTTON_INTRO': _0x3a737f(0x2bd),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': 'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x3a737f(0x266),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x3a737f(0x31d),
                        'SKIP_VIEW_STORY_CONFIRM': _0x3a737f(0x1ed),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': 'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.'
                    }
                }, _0x5d63ee = Object[_0x3a737f(0x214)]({}, _0xc63416, _0x2c0e47), _0x165169 = Object[_0x3a737f(0x149)](_0x5d63ee)[_0x3a737f(0x15d)]()[_0x3a737f(0x30c)]((_0x1a8fc5, _0x1a5aff) => {
                    return _0x1a8fc5[_0x1a5aff] = _0x5d63ee[_0x1a5aff], _0x1a8fc5;
                }, {});
            return _0x165169;
        }
        async function _0x49a085(_0x3815d0) {
            return new Promise((_0x2da590, _0x4054a8) => {
                const _0x53b026 = a0_0x3537;
                GM_xmlhttpRequest({
                    'method': _0x53b026(0x1b3),
                    'url': 'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/' + _0x3815d0 + '.json',
                    'onload': function (_0x45d56c) {
                        const _0x1c6d76 = _0x53b026;
                        try {
                            let _0x15145d = JSON[_0x1c6d76(0x2b3)](_0x45d56c[_0x1c6d76(0x25e)]);
                            _0x2da590(_0x15145d);
                        } catch (_0x589f5b) {
                            _0x4054a8(_0x589f5b);
                        }
                    },
                    'onerror': function (_0x49453d) {
                        const _0x42dd0a = _0x53b026;
                        _0x3e5117(_0x42dd0a(0x27a), _0x42dd0a(0x1fc), _0x49453d), _0x4054a8(_0x49453d);
                    }
                });
            });
        }
        function _0x127cc3(_0x430367) {
            const _0x2c922e = _0xee19a2();
            return _0x2c922e[_0x277ca3] != undefined && _0x2c922e[_0x277ca3][_0x430367] != undefined ? _0x2c922e[_0x277ca3][_0x430367] : _0x2c922e['en-US'][_0x430367];
        }
        function _0x2c58e1() {
            const _0x4c438d = _0x5b11ec;
            _0x39bd05(_0x4c438d(0x209))[_0x4c438d(0x2f6)](function () {
                const _0x34b245 = _0x4c438d;
                _0x39bd05(this)['text'](_0x127cc3(_0x39bd05(this)[_0x34b245(0x188)](_0x34b245(0x14b))));
            }), _0x39bd05('[data-ih-locale-title]')[_0x4c438d(0x2f6)](function () {
                const _0x25b0b5 = _0x4c438d;
                _0x39bd05(this)[_0x25b0b5(0x188)]('title', _0x127cc3(_0x39bd05(this)[_0x25b0b5(0x188)]('data-ih-locale-title')));
            });
        }
        function _0x36ce27() {
            const _0x3efd4a = _0x5b11ec;
            for (let _0x2e5bce of _0x29fe66) {
                _0x3e5117(_0x3efd4a(0x156), _0x2e5bce), GM_unregisterMenuCommand(_0x2e5bce);
            }
            _0x29fe66['push'](GM_registerMenuCommand(_0x127cc3(_0x3efd4a(0x2cc)), () => {
                _0x58c97e();
            }, { 'accessKey': 'w' })), _0x29fe66[_0x3efd4a(0x1c8)](GM_registerMenuCommand(_0x127cc3(_0x3efd4a(0x34d)), () => {
                const _0x3c7447 = _0x3efd4a;
                GM_openInTab(_0x3c7447(0x127), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x29fe66[_0x3efd4a(0x1c8)](GM_registerMenuCommand(_0x127cc3(_0x3efd4a(0x241)), () => {
                _0x3f1f6();
            }, { 'accessKey': 'z' })), _0x29fe66[_0x3efd4a(0x1c8)](GM_registerMenuCommand(_0x127cc3(_0x3efd4a(0x329)), () => {
                _0x57e045();
            }, { 'accessKey': 'f' })), _0x29fe66[_0x3efd4a(0x1c8)](GM_registerMenuCommand(_0x127cc3('CHECK_UPDATE_MENU'), () => {
                _0x5aaa82();
            }, { 'accessKey': 'c' })), _0x29fe66[_0x3efd4a(0x1c8)](GM_registerMenuCommand(_0x127cc3(_0x3efd4a(0x155)), () => {
                _0x3cfb39();
            }, { 'accessKey': 'r' }));
        }
        function _0xf57d6b(_0x5229cf) {
            const _0x40b54f = _0x5b11ec;
            if (!_0x57497a['CHECK_UPDATE'])
                return;
            const _0x464c38 = GM_getValue('G_CHECK_TIMESTAMP') ?? new Date()[_0x40b54f(0x381)](), _0x116683 = new Date()['getTime']();
            _0x116683 > parseInt(_0x464c38) + _0x5229cf * 0x3e8 && (GM_setValue(_0x40b54f(0x275), new Date()['getTime']()), _0x5aaa82());
        }
        function _0x5aaa82() {
            const _0x26e076 = _0x5b11ec, _0x2c3a14 = GM_info[_0x26e076(0x370)]['version'], _0x1a6431 = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': _0x26e076(0x1b3),
                'url': _0x1a6431,
                'onload': function (_0x4b25cd) {
                    const _0x40caa1 = _0x26e076, _0x1598ac = _0x4b25cd[_0x40caa1(0x2e6)], _0x45bf00 = _0x1598ac[_0x40caa1(0x204)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x45bf00 && _0x45bf00[0x1]) {
                        const _0x10f9b0 = _0x45bf00[0x1];
                        _0x3e5117(_0x40caa1(0x2a1), _0x2c3a14, '|', _0x40caa1(0x1a0), _0x10f9b0), _0x10f9b0 !== _0x2c3a14 && typeof this[_0x40caa1(0x2b8)] === _0x40caa1(0x2b1) ? (this['updatenotification'] = null, GM_notification({
                            'text': _0x127cc3(_0x40caa1(0x1f1)),
                            'title': _0x127cc3(_0x40caa1(0x366)),
                            'tag': 'ig_helper_notice',
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x40caa1(0x258),
                            'onclick': _0x4ea56d => {
                                const _0x357009 = _0x40caa1;
                                _0x4ea56d?.[_0x357009(0x1d1)]();
                                var _0x1cd822 = GM_openInTab(GM_info[_0x357009(0x370)][_0x357009(0x24e)]);
                                setTimeout(() => {
                                    const _0x23dcd2 = _0x357009;
                                    _0x1cd822[_0x23dcd2(0x1d0)]();
                                }, 0xfa);
                            }
                        })) : _0x3e5117(_0x40caa1(0x25c));
                    } else
                        console['error'](_0x40caa1(0x350));
                }
            });
        }
        function _0x58c97e() {
            const _0x1a5326 = _0x5b11ec;
            _0x39bd05(_0x1a5326(0x1b5))[_0x1a5326(0x344)](), _0x285eeb(), _0x39bd05('.IG_SN_DIG\x20#post_info')['text'](_0x1a5326(0x337)), _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div')[_0x1a5326(0x2fc)]('<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>');
            for (let _0x355eda in _0x5f3498) {
                _0x39bd05(_0x1a5326(0x37e))[_0x1a5326(0x2fc)](_0x1a5326(0x353) + _0x355eda + '\x22\x20' + (_0x277ca3 == _0x355eda ? _0x1a5326(0x187) : '') + '>' + _0x5f3498[_0x355eda] + _0x1a5326(0x22b));
            }
            for (let _0x28f698 in _0x57497a) {
                _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x1a5326(0x2fc)](_0x1a5326(0x2d4) + (_0x484c1f[_0x1a5326(0x129)](_0x28f698) ? '\x20child' : '') + _0x1a5326(0x2e2) + _0x127cc3(_0x28f698 + _0x1a5326(0x144)) + '\x22\x20data-ih-locale-title=\x22' + (_0x28f698 + _0x1a5326(0x144)) + '\x22><span\x20data-ih-locale=\x22' + _0x28f698 + '\x22>' + _0x127cc3(_0x28f698) + '</span>\x20<input\x20id=\x22' + _0x28f698 + _0x1a5326(0x386) + (_0x57497a[_0x28f698] === !![] ? 'checked' : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x28f698 === 'MODIFY_VIDEO_VOLUME' && _0x39bd05(_0x1a5326(0x382) + _0x28f698 + '\x22]')[_0x1a5326(0x148)](_0x1a5326(0x280))['on'](_0x1a5326(0x32e), function (_0x1399af) {
                    const _0x182efe = _0x1a5326;
                    _0x1399af['preventDefault'](), _0x39bd05(this)[_0x182efe(0x26b)]('#tempWrapper')[_0x182efe(0x1d7)] === 0x0 && (_0x39bd05(this)['append'](_0x182efe(0x1e0)), _0x39bd05(this)['children'](_0x182efe(0x1dd))[_0x182efe(0x2fc)](_0x182efe(0x1be) + _0x14b573 + _0x182efe(0x2ec)), _0x39bd05(this)[_0x182efe(0x1b8)](_0x182efe(0x1dd))['append'](_0x182efe(0x1be) + _0x14b573 + _0x182efe(0x12e)), _0x39bd05(this)[_0x182efe(0x1b8)](_0x182efe(0x1dd))[_0x182efe(0x2fc)](_0x182efe(0x196) + _0x59d314[_0x182efe(0x359)] + _0x182efe(0x208)));
                }), _0x28f698 === _0x1a5326(0x2f7) && _0x39bd05(_0x1a5326(0x382) + _0x28f698 + '\x22]')[_0x1a5326(0x148)](_0x1a5326(0x280))['on'](_0x1a5326(0x32e), function (_0x2bccb0) {
                    const _0x2ea088 = _0x1a5326;
                    _0x2bccb0['preventDefault'](), _0x39bd05(this)['find'](_0x2ea088(0x1dd))[_0x2ea088(0x1d7)] === 0x0 && (_0x39bd05(this)['append']('<div\x20id=\x22tempWrapper\x22></div>'), _0x39bd05(this)[_0x2ea088(0x1b8)](_0x2ea088(0x1dd))['append'](_0x2ea088(0x235) + _0x5b7341 + _0x2ea088(0x296)), _0x39bd05(this)[_0x2ea088(0x1b8)](_0x2ea088(0x1dd))[_0x2ea088(0x2fc)](_0x2ea088(0x196) + _0x59d314[_0x2ea088(0x359)] + '</div>'));
                });
            }
        }
        function _0x3f1f6() {
            const _0x30ceef = _0x5b11ec;
            _0x39bd05(_0x30ceef(0x1b5))[_0x30ceef(0x344)](), _0x285eeb(), _0x39bd05(_0x30ceef(0x1b1))[_0x30ceef(0x393)]('IG\x20Debug\x20DOM\x20Tree'), _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x30ceef(0x2fc)](_0x30ceef(0x238)), _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x30ceef(0x2fc)](_0x30ceef(0x303)), _0x39bd05(_0x30ceef(0x290))[_0x30ceef(0x2fc)](_0x30ceef(0x21d) + _0x127cc3(_0x30ceef(0x33c)) + _0x30ceef(0x191)), _0x39bd05(_0x30ceef(0x290))['append'](_0x30ceef(0x309) + _0x127cc3('SELECT_AND_COPY') + _0x30ceef(0x191)), _0x39bd05(_0x30ceef(0x290))['append'](_0x30ceef(0x244) + _0x127cc3('DOWNLOAD_DOM_TREE') + _0x30ceef(0x2d8)), _0x39bd05(_0x30ceef(0x290))[_0x30ceef(0x2fc)](_0x30ceef(0x25b) + _0x127cc3(_0x30ceef(0x219)) + '</a></button>'), _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x30ceef(0x2fc)](_0x30ceef(0x23b) + _0x127cc3(_0x30ceef(0x218)) + _0x30ceef(0x191));
        }
        function _0x57e045() {
            const _0xb918c = _0x5b11ec;
            _0x39bd05('.IG_SN_DIG')[_0xb918c(0x344)](), _0x285eeb(), _0x39bd05(_0xb918c(0x1b1))[_0xb918c(0x393)]('Feedback\x20Options'), _0x39bd05(_0xb918c(0x2df))['append']('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x39bd05(_0xb918c(0x290))[_0xb918c(0x2fc)](_0xb918c(0x2ff) + _0x127cc3(_0xb918c(0x24f)) + _0xb918c(0x191)), _0x39bd05(_0xb918c(0x290))['append'](_0xb918c(0x25b) + _0x127cc3('REPORT_GITHUB') + _0xb918c(0x191)), _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0xb918c(0x2fc)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x127cc3(_0xb918c(0x218)) + _0xb918c(0x191));
        }
        function _0x4ca43c(_0xe8ab21) {
            const _0xae4604 = _0x5b11ec;
            var _0x30e52e = document[_0xae4604(0x2e4)]('a');
            _0x30e52e['href'] = _0xe8ab21, _0x30e52e[_0xae4604(0x2fb)] = _0xae4604(0x2b5), document[_0xae4604(0x262)][_0xae4604(0x267)](_0x30e52e), _0x30e52e[_0xae4604(0x18b)](), _0x30e52e[_0xae4604(0x344)]();
        }
        function _0x3cfb39() {
            const _0x435db5 = _0x5b11ec;
            clearInterval(_0x4b49c8), _0x39bd05(_0x435db5(0x220))['remove'](), _0x39bd05(_0x435db5(0x1a1))[_0x435db5(0x344)](), _0x39bd05(_0x435db5(0x343))['removeAttr']('data-snig'), _0x4daff7 = ![], _0x3c3778 = ![], _0x213010 = location['href'], _0xd144f4[_0x435db5(0x1ad)](), _0x3e5117(_0x435db5(0x38b));
        }
        function _0x3e5117(..._0x5ad91a) {
            const _0x5edb46 = _0x5b11ec;
            var _0x33be0 = new Date();
            _0x9ce3d0['push']({
                'time': _0x33be0[_0x5edb46(0x381)](),
                'content': [..._0x5ad91a]
            }), _0x9ce3d0[_0x5edb46(0x1d7)] > 0x3e8 && (_0x9ce3d0 = [
                {
                    'time': _0x33be0[_0x5edb46(0x381)](),
                    'content': [_0x5edb46(0x318)]
                },
                ..._0x9ce3d0['slice'](-0x3e7)
            ]), console[_0x5edb46(0x1c1)]('[' + _0x33be0[_0x5edb46(0x385)]() + ']', ..._0x5ad91a);
        }
        function _0x21a8ca() {
            const _0x1e285b = _0x5b11ec;
            for (let _0x428263 in _0x57497a) {
                GM_getValue(_0x428263) != null && typeof GM_getValue(_0x428263) === _0x1e285b(0x185) && (_0x57497a[_0x428263] = GM_getValue(_0x428263));
            }
        }
        function _0x2e8afa(_0x2aee7d, _0xffe4ec, _0xe9509c, _0x2a1b7c = '') {
            const _0xd8bba9 = _0x5b11ec;
            _0xffe4ec[_0xd8bba9(0x26b)](_0xd8bba9(0x1f7))[_0xd8bba9(0x1d7)] === 0x0 ? (_0xffe4ec[_0xd8bba9(0x2fc)](_0xd8bba9(0x175) + _0x2a1b7c + '\x22\x20/>'), _0xffe4ec[_0xd8bba9(0x26b)](_0xd8bba9(0x1f7))[_0xd8bba9(0x2fc)]('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x14b573 + _0xd8bba9(0x165)), _0xffe4ec[_0xd8bba9(0x26b)]('div.volume_slider\x20input')['attr'](_0xd8bba9(0x32d), _0xd8bba9(0x240) + (_0x14b573 * 0x64 + '%')), _0xffe4ec[_0xd8bba9(0x26b)](_0xd8bba9(0x28e))['on']('input', function () {
                const _0x4f0441 = _0xd8bba9;
                var _0x255af1 = _0x39bd05(this)[_0x4f0441(0x1ae)]() * 0x64 + '%';
                _0x14b573 = _0x39bd05(this)['val'](), GM_setValue(_0x4f0441(0x2dc), _0x39bd05(this)[_0x4f0441(0x1ae)]()), _0x39bd05(this)['attr'](_0x4f0441(0x32d), _0x4f0441(0x240) + _0x255af1), _0x2aee7d[_0x4f0441(0x2f6)](function () {
                    const _0x20ff84 = _0x4f0441;
                    _0x3e5117('(' + _0xe9509c + ')', _0x20ff84(0x167)), this[_0x20ff84(0x213)] = _0x14b573;
                });
            }), _0xffe4ec[_0xd8bba9(0x26b)](_0xd8bba9(0x28e))['on'](_0xd8bba9(0x31a), function () {
                const _0x10f528 = _0xd8bba9;
                var _0x4c1466 = _0x14b573 * 0x64 + '%';
                _0x39bd05(this)[_0x10f528(0x188)](_0x10f528(0x32d), _0x10f528(0x240) + _0x4c1466), _0x39bd05(this)[_0x10f528(0x1ae)](_0x14b573), _0x2aee7d[_0x10f528(0x2f6)](function () {
                    const _0xde534d = _0x10f528;
                    _0x3e5117('(' + _0xe9509c + ')', 'video\x20volume\x20changed\x20#slider'), this[_0xde534d(0x213)] = _0x14b573;
                });
            }), _0xffe4ec[_0xd8bba9(0x26b)](_0xd8bba9(0x1f7))['on']('click', function (_0x144691) {
                const _0x2b1bbe = _0xd8bba9;
                _0x144691['stopPropagation'](), _0x144691[_0x2b1bbe(0x1d1)]();
            })) : _0xffe4ec[_0xd8bba9(0x26b)]('div.volume_slider')[_0xd8bba9(0x344)]();
        }
        _0x39bd05(function () {
            const _0x651829 = _0x5b11ec;
            function _0x3fea3a(_0x3cb6e0) {
                const _0xc50c60 = a0_0x3537;
                var _0x168cb8 = [];
                for (var _0x28f531 of _0x3cb6e0) {
                    _0x168cb8['push']({
                        'tagName': _0x28f531['tagName'],
                        'id': _0x28f531['id'],
                        'className': _0x28f531[_0xc50c60(0x225)]
                    });
                }
                return _0x168cb8;
            }
            function _0x28fa28() {
                const _0x1e8a5f = a0_0x3537;
                let _0x462dba = _0x39bd05(_0x1e8a5f(0x2d0))[0x0];
                var _0x16be87 = '';
                _0x9ce3d0[_0x1e8a5f(0x202)](_0xc4af4c => {
                    const _0x56b441 = _0x1e8a5f;
                    var _0x210356 = JSON[_0x56b441(0x372)](_0xc4af4c['content'], function (_0xe6e3cf, _0x371cd1) {
                        const _0x2608ea = _0x56b441;
                        if (Array[_0x2608ea(0x13a)](this)) {
                            if (typeof _0x371cd1 === _0x2608ea(0x1e3) && _0x371cd1 instanceof jQuery)
                                return _0x3fea3a(_0x371cd1);
                            return _0x371cd1;
                        } else
                            return _0x371cd1;
                    }, '\x09');
                    _0x16be87 += _0xc4af4c[_0x56b441(0x1a9)] + ':\x20' + _0x210356 + '\x0a';
                }), _0x39bd05(_0x1e8a5f(0x317))[_0x1e8a5f(0x393)](_0x1e8a5f(0x282) + _0x16be87 + _0x1e8a5f(0x19f) + location[_0x1e8a5f(0x1a4)] + '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a' + _0x462dba[_0x1e8a5f(0x17f)]);
            }
            _0x39bd05(_0x651829(0x262))['on']('click', _0x651829(0x254), function () {
                _0x28fa28();
            }), _0x39bd05(_0x651829(0x262))['on']('click', _0x651829(0x27c), function () {
                const _0x327eb2 = _0x651829;
                _0x39bd05(_0x327eb2(0x317))[_0x327eb2(0x377)](), document[_0x327eb2(0x2fa)](_0x327eb2(0x1af));
            }), _0x39bd05(_0x651829(0x262))['on']('click', '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE', function () {
                const _0x47b878 = _0x651829;
                _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x47b878(0x393)]()[_0x47b878(0x1d7)] === 0x0 && _0x28fa28();
                var _0x453d0b = _0x39bd05('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x47b878(0x393)](), _0x2c3db3 = document[_0x47b878(0x2e4)]('a'), _0x5a710c = new Blob([_0x453d0b], { 'type': _0x47b878(0x128) });
                _0x2c3db3[_0x47b878(0x242)] = URL[_0x47b878(0x20f)](_0x5a710c), _0x2c3db3[_0x47b878(0x2d1)] = _0x47b878(0x349) + new Date()[_0x47b878(0x381)]() + _0x47b878(0x19e), document[_0x47b878(0x262)]['appendChild'](_0x2c3db3), _0x2c3db3['click'](), _0x2c3db3[_0x47b878(0x344)]();
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x18b), _0x651829(0x12d), function () {
                const _0x4fd5a5 = _0x651829;
                _0x39bd05(this)[_0x4fd5a5(0x148)](_0x4fd5a5(0x1dd))[_0x4fd5a5(0x1d7)] > 0x0 ? _0x39bd05(this)['parent']('#tempWrapper')[_0x4fd5a5(0x298)](0xfa, function () {
                    _0x39bd05(this)['remove']();
                }) : _0x39bd05(_0x4fd5a5(0x1b5))[_0x4fd5a5(0x344)]();
            }), _0x39bd05(window)[_0x651829(0x132)](function (_0x40e8ec) {
                const _0x1721a7 = _0x651829;
                _0x40e8ec[_0x1721a7(0x2f2)] == '81' && _0x40e8ec[_0x1721a7(0x301)] && (_0x39bd05('.IG_SN_DIG')[_0x1721a7(0x344)](), _0x40e8ec[_0x1721a7(0x1d1)]()), _0x40e8ec[_0x1721a7(0x2f2)] == '87' && _0x40e8ec[_0x1721a7(0x301)] && (_0x58c97e(), _0x40e8ec[_0x1721a7(0x1d1)]()), _0x40e8ec['keyCode'] == '90' && _0x40e8ec['altKey'] && (_0x3f1f6(), _0x40e8ec['preventDefault']()), _0x40e8ec[_0x1721a7(0x2f2)] == '82' && _0x40e8ec[_0x1721a7(0x301)] && (_0x3cfb39(), _0x40e8ec[_0x1721a7(0x1d1)]()), _0x40e8ec[_0x1721a7(0x2f2)] == '83' && _0x40e8ec[_0x1721a7(0x301)] && (location[_0x1721a7(0x242)][_0x1721a7(0x204)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x39bd05(_0x1721a7(0x21e))['length'] > 0x0 && _0x39bd05(_0x1721a7(0x21e))?.['click'](), location[_0x1721a7(0x242)][_0x1721a7(0x204)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x39bd05('.IG_DWHISTORY')['length'] > 0x0 && _0x39bd05(_0x1721a7(0x1c5))?.['click'](), _0x40e8ec[_0x1721a7(0x1d1)]());
            }), _0x39bd05(_0x651829(0x262))['on']('change', _0x651829(0x332), function (_0x499371) {
                const _0x27b126 = _0x651829;
                var _0x2b0213 = _0x39bd05(this)['attr']('id');
                if (_0x2b0213 && _0x57497a[_0x2b0213] !== undefined) {
                    let _0x5bf34c = _0x39bd05(this)['prop'](_0x27b126(0x195));
                    GM_setValue(_0x2b0213, _0x5bf34c), _0x57497a[_0x2b0213] = _0x5bf34c, console[_0x27b126(0x1c1)](_0x27b126(0x36a), _0x2b0213, _0x5bf34c);
                }
            }), _0x39bd05(_0x651829(0x262))['on']('click', _0x651829(0x184), function (_0x1c4c42) {
                const _0x2fd0cd = _0x651829;
                _0x39bd05(this)['find'](_0x2fd0cd(0x1dd))[_0x2fd0cd(0x1d7)] > 0x0 && _0x1c4c42['preventDefault']();
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x21b), _0x651829(0x163), function () {
                const _0x5f22d2 = _0x651829;
                let _0x44fd17 = _0x39bd05(this)[_0x5f22d2(0x1ae)]();
                _0x39bd05(this)[_0x5f22d2(0x188)](_0x5f22d2(0x26e)) == _0x5f22d2(0x16c) ? _0x39bd05(this)['next']()[_0x5f22d2(0x1ae)](_0x44fd17) : _0x39bd05(this)[_0x5f22d2(0x2bc)]()['val'](_0x44fd17), _0x44fd17 >= 0x0 && _0x44fd17 <= 0x1 && (_0x14b573 = _0x44fd17, GM_setValue('G_VIDEO_VOLUME', _0x44fd17));
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x375), _0x651829(0x163), function (_0x1fef67) {
                const _0x3d3685 = _0x651829;
                if (_0x39bd05(this)[_0x3d3685(0x188)](_0x3d3685(0x26e)) == _0x3d3685(0x16c)) {
                    let _0x2cca90 = _0x39bd05(this)[_0x3d3685(0x1ae)]();
                    _0x39bd05(this)['next']()[_0x3d3685(0x1ae)](_0x2cca90);
                } else {
                    let _0x208e6d = _0x39bd05(this)['val']();
                    _0x208e6d >= 0x0 && _0x208e6d <= 0x1 ? _0x39bd05(this)['prev']()[_0x3d3685(0x1ae)](_0x208e6d) : _0x208e6d < 0x0 ? _0x39bd05(this)[_0x3d3685(0x1ae)](0x0) : _0x39bd05(this)[_0x3d3685(0x1ae)](0x1);
                }
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x375), _0x651829(0x15b), function (_0x43ecae) {
                const _0x5226db = _0x651829;
                GM_setValue(_0x5226db(0x169), _0x39bd05(this)[_0x5226db(0x1ae)]()), _0x5b7341 = _0x39bd05(this)[_0x5226db(0x1ae)]();
            }), _0x39bd05(_0x651829(0x262))['on']('click', _0x651829(0x1ea), function (_0x42e0fa) {
                const _0x593723 = _0x651829;
                _0x42e0fa[_0x593723(0x1d1)](), _0x2f61e7(this);
            }), _0x39bd05('body')['on'](_0x651829(0x18b), _0x651829(0x2f8), function () {
                const _0x1d3b86 = _0x651829;
                if (_0x57497a['FORCE_RESOURCE_VIA_MEDIA'] && _0x57497a[_0x1d3b86(0x142)])
                    _0x2f61e7(_0x39bd05(this)[_0x1d3b86(0x148)]()[_0x1d3b86(0x1b8)]('a')[_0x1d3b86(0x140)]()[0x0], !![]);
                else {
                    var _0xf7bf1 = new URL(_0x39bd05(this)[_0x1d3b86(0x148)]()[_0x1d3b86(0x1b8)]('a')[_0x1d3b86(0x188)](_0x1d3b86(0x1f9)));
                    _0xf7bf1[_0x1d3b86(0x177)] = _0x1d3b86(0x20e), _0x4ca43c(_0xf7bf1[_0x1d3b86(0x242)]);
                }
            }), _0x39bd05('body')['on'](_0x651829(0x18b), _0x651829(0x12c), function () {
                const _0x257e8a = _0x651829;
                let _0xdc27bc = new Date()[_0x257e8a(0x381)]();
                _0x57497a['RENAME_PUBLISH_DATE'] && _0x39bd05(this)[_0x257e8a(0x148)]()['children']('a')['attr'](_0x257e8a(0x160)) && (_0xdc27bc = _0x39bd05(this)[_0x257e8a(0x148)]()[_0x257e8a(0x1b8)]('a')[_0x257e8a(0x188)]('datetime'));
                let _0x1b89c0 = _0x39bd05(this)[_0x257e8a(0x148)]()['children']('a')[_0x257e8a(0x188)]('data-path') ?? _0x39bd05(_0x257e8a(0x17d))[_0x257e8a(0x393)]();
                _0x1dfca2(_0x39bd05(this)[_0x257e8a(0x148)]()[_0x257e8a(0x1b8)]('a')['find'](_0x257e8a(0x2ad))[_0x257e8a(0x140)]()[_0x257e8a(0x188)](_0x257e8a(0x35c)), _0x39bd05(this)['parent']()[_0x257e8a(0x1b8)]('a')[_0x257e8a(0x188)](_0x257e8a(0x36c)), _0x257e8a(0x305), _0xdc27bc, _0x257e8a(0x285), _0x1b89c0);
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x18b), _0x651829(0x21e), function () {
                _0x533bb3(!![]);
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x18b), _0x651829(0x1db), function (_0x22b35e) {
                _0x22b35e['preventDefault'](), _0x533bb3(!![], !![], !![]);
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x18b), _0x651829(0x246), function () {
                _0x409ce0(!![]);
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x18b), _0x651829(0x243), function (_0x3eb024) {
                const _0x8ef53d = _0x651829;
                _0x3eb024[_0x8ef53d(0x136)](), _0x1782cf(!![]);
            }), _0x39bd05(_0x651829(0x262))['on']('click', _0x651829(0x1c5), function () {
                _0x53d451(!![]);
            }), _0x39bd05(_0x651829(0x262))['on']('click', '.IG_DWHINEWTAB', function (_0x239967) {
                const _0x2a2b1b = _0x651829;
                _0x239967[_0x2a2b1b(0x1d1)](), _0x53d451(!![], !![]);
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x18b), '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x2b0d6f(!![]);
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x18b), '.IG_REELS', function () {
                _0x5ecfb9(!![], !![]);
            }), _0x39bd05(_0x651829(0x262))['on']('click', _0x651829(0x36b), function () {
                _0x5ecfb9(!![], !![], !![]);
            }), _0x39bd05('body')['on']('click', '.IG_REELS_THUMBNAIL', function () {
                _0x5ecfb9(!![], ![]);
            }), _0x39bd05('body')['on']('mousedown', _0x651829(0x341), function (_0x4b72f3) {
                const _0x5781bc = _0x651829;
                if (_0x4b72f3[_0x5781bc(0x286)] === 0x3 || _0x4b72f3[_0x5781bc(0x286)] === 0x2) {
                    if (location['href'] === _0x5781bc(0x1f3) && _0x57497a[_0x5781bc(0x1d3)]) {
                        _0x4b72f3[_0x5781bc(0x1d1)]();
                        if (_0x39bd05(this)[_0x5781bc(0x26b)](_0x5781bc(0x31c))[_0x5781bc(0x1d7)] > 0x0) {
                            const _0x1f669b = _0x5781bc(0x1f3) + _0x39bd05(this)['children']('div')[_0x5781bc(0x36f)]()['text']();
                            _0x4b72f3[_0x5781bc(0x286)] === 0x2 ? GM_openInTab(_0x1f669b) : location[_0x5781bc(0x242)] = _0x1f669b;
                        }
                    }
                }
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x21b), _0x651829(0x320), function () {
                const _0x49e87d = _0x651829;
                var _0x4ab940 = _0x39bd05(this)[_0x49e87d(0x26b)](_0x49e87d(0x375))[_0x49e87d(0x2e1)](_0x49e87d(0x195));
                _0x39bd05(_0x49e87d(0x334))[_0x49e87d(0x2f6)](function () {
                    const _0x11ef80 = _0x49e87d;
                    _0x39bd05(this)[_0x11ef80(0x2e1)](_0x11ef80(0x195), _0x4ab940);
                });
            }), _0x39bd05(_0x651829(0x262))['on']('change', _0x651829(0x334), function () {
                const _0x27f812 = _0x651829;
                var _0x5306a4 = _0x39bd05(_0x27f812(0x138))[_0x27f812(0x1d7)], _0x13a290 = _0x39bd05(_0x27f812(0x334))[_0x27f812(0x1d7)];
                _0x39bd05('.IG_SN_DIG_TITLE\x20.checkbox')[_0x27f812(0x26b)](_0x27f812(0x375))[_0x27f812(0x2e1)](_0x27f812(0x195), _0x5306a4 == _0x13a290);
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x18b), _0x651829(0x1e8), function () {
                const _0x3ab830 = _0x651829;
                let _0x4ab593 = 0x0;
                _0x39bd05(_0x3ab830(0x28f))[_0x3ab830(0x2f6)](function () {
                    const _0x543772 = _0x3ab830;
                    _0x39bd05(this)[_0x543772(0x2bc)]()[_0x543772(0x1b8)]('input')[_0x543772(0x2e1)](_0x543772(0x195)) && (_0x39bd05(this)[_0x543772(0x18b)](), _0x4ab593++);
                }), _0x4ab593 == 0x0 && alert(_0x127cc3(_0x3ab830(0x2f4)));
            }), _0x39bd05('body')['on'](_0x651829(0x21b), _0x651829(0x355), function () {
                const _0xe2f237 = _0x651829;
                GM_setValue(_0xe2f237(0x369), _0x39bd05(this)[_0xe2f237(0x1ae)]()), _0x277ca3 = _0x39bd05(this)[_0xe2f237(0x1ae)](), _0x277ca3?.[_0xe2f237(0x198)]('en') || _0x2c0e47[_0x277ca3] != null ? (_0x2c58e1(), _0x36ce27()) : _0x49a085(_0x277ca3)[_0xe2f237(0x159)](_0x2b87a6 => {
                    _0x2c0e47[_0x277ca3] = _0x2b87a6, _0x2c58e1(), _0x36ce27();
                })[_0xe2f237(0x2b6)](_0xd24fbb => {
                    const _0x3bd7e9 = _0xe2f237;
                    console[_0x3bd7e9(0x29d)](_0x3bd7e9(0x263), _0xd24fbb);
                });
            }), _0x39bd05(_0x651829(0x262))['on'](_0x651829(0x21b), _0x651829(0x23c), function () {
                const _0x5aa010 = _0x651829;
                _0x39bd05(_0x5aa010(0x36e))[_0x5aa010(0x393)]('' + new Date()[_0x5aa010(0x23a)](_0x39bd05(this)['val'](), {
                    'hour12': ![],
                    'second': _0x5aa010(0x1bc),
                    'minute': _0x5aa010(0x1bc),
                    'hour': _0x5aa010(0x1bc),
                    'month': _0x5aa010(0x1bc),
                    'day': _0x5aa010(0x1bc),
                    'year': _0x5aa010(0x328)
                })[_0x5aa010(0x164)]('/', '-')), LOCATE_DATE_FORMAT = _0x39bd05(this)[_0x5aa010(0x1ae)](), GM_setValue('G_LOCATE_DATE_FORMAT', _0x39bd05(this)['val']());
            }), _0x39bd05(_0x651829(0x262))['on']('click', _0x651829(0x1b6), function () {
                const _0x11a2be = _0x651829;
                _0x39bd05(_0x11a2be(0x28f))[_0x11a2be(0x2f6)](function () {
                    const _0x4f9124 = _0x11a2be;
                    _0x39bd05(this)[_0x4f9124(0x18b)]();
                });
            });
            const _0x4c7b42 = new MutationObserver(_0x293cec => {
                const _0x329d5b = _0x651829;
                for (const _0x38dc69 of _0x293cec) {
                    _0x38dc69[_0x329d5b(0x26e)] === _0x329d5b(0x1c3) && _0x38dc69[_0x329d5b(0x35b)]['forEach'](_0x49b748 => {
                        const _0x3eb949 = _0x329d5b, _0x14529f = _0x39bd05(_0x49b748)['find'](_0x3eb949(0x15e));
                        if (_0x14529f['length'] > 0x0) {
                            _0x57497a[_0x3eb949(0x380)] && _0x14529f[_0x3eb949(0x2f6)](function () {
                                const _0x1591eb = _0x3eb949;
                                _0x39bd05(this)['on'](_0x1591eb(0x18f), function () {
                                    const _0x86068a = _0x1591eb;
                                    !_0x39bd05(this)[_0x86068a(0x342)](_0x86068a(0x26a)) && (_0x39bd05(this)['attr'](_0x86068a(0x30f), !![]), this[_0x86068a(0x213)] = _0x14b573, _0x3e5117(_0x86068a(0x338)));
                                });
                            });
                            if (location[_0x3eb949(0x1a4)][_0x3eb949(0x204)](/^(\/stories\/)/ig)) {
                                const _0x23b0a0 = location[_0x3eb949(0x1a4)][_0x3eb949(0x204)](/^(\/stories\/highlights\/)/ig) != null, _0x1ee369 = _0x23b0a0 ? _0x3eb949(0x137) : _0x3eb949(0x134);
                                _0x14529f['each'](function () {
                                    const _0x23eca4 = _0x3eb949;
                                    _0x39bd05(this)['on'](_0x23eca4(0x203), function () {
                                        const _0x2ca5c6 = _0x23eca4;
                                        if (!_0x39bd05(this)[_0x2ca5c6(0x342)](_0x2ca5c6(0x135))) {
                                            let _0x57bfb2 = _0x39bd05(this);
                                            _0x57bfb2[_0x2ca5c6(0x28b)](_0x2ca5c6(0x33a))['filter'](function () {
                                                return _0x39bd05(this)['width']() == _0x57bfb2['width']();
                                            })[_0x2ca5c6(0x26b)](_0x2ca5c6(0x17c))[_0x2ca5c6(0x1d7)] === 0x0 ? (_0x39bd05(this)[_0x2ca5c6(0x188)](_0x2ca5c6(0x1a5), !![]), _0x23b0a0 ? _0x2b0d6f(![]) : _0x409ce0(![]), _0x3e5117('(' + _0x1ee369 + ')', _0x2ca5c6(0x295))) : (_0x39bd05(this)['attr']('data-modify-thumbnail', !![]), _0x3e5117('(' + _0x1ee369 + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0x2cfd98 = _0x39bd05(this);
                                    if (_0x57497a['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x2cfd98['data'](_0x23eca4(0x399))) {
                                            _0x3e5117('(' + _0x1ee369 + ')', 'Added\x20video\x20html5\x20contorller\x20#modify'), this[_0x23eca4(0x213)] = _0x14b573, _0x2cfd98['on']('loadstart', function () {
                                                const _0x1bf0aa = _0x23eca4;
                                                this[_0x1bf0aa(0x213)] = _0x14b573;
                                            });
                                            let _0x32db44 = _0x2cfd98['parents'](_0x23eca4(0x226))['filter'](function () {
                                                    const _0xb6a627 = _0x23eca4;
                                                    return _0x39bd05(this)[_0xb6a627(0x188)](_0xb6a627(0x2b9)) == null && _0x39bd05(this)['attr'](_0xb6a627(0x32d)) == null;
                                                })[_0x23eca4(0x140)](), _0x55ace1 = _0x32db44[_0x23eca4(0x38c)]();
                                            _0x55ace1[_0x23eca4(0x288)]();
                                            let _0x467c7f = _0x32db44[_0x23eca4(0x26b)](_0x23eca4(0x17a));
                                            _0x467c7f[_0x23eca4(0x288)]();
                                            const _0x195572 = function (_0xa4cb80) {
                                                const _0x3f785a = _0x23eca4;
                                                _0xa4cb80[_0x3f785a(0x1d1)](), _0x2cfd98[_0x3f785a(0x16e)](_0x3f785a(0x376), '2'), _0x2cfd98[_0x3f785a(0x188)]('controls', !![]), _0x467c7f[_0x3f785a(0x288)](), _0x55ace1[_0x3f785a(0x288)](), _0x2e8afa(_0x2cfd98, _0x2cfd98[_0x3f785a(0x28b)](_0x3f785a(0x33a))['filter'](function () {
                                                    const _0x3d8d51 = _0x3f785a;
                                                    return _0x39bd05(this)[_0x3d8d51(0x178)]() == _0x2cfd98[_0x3d8d51(0x178)]();
                                                })['first'](), _0x1ee369, _0x3f785a(0x2fe));
                                            };
                                            _0x2cfd98['parent']()[_0x23eca4(0x26b)](_0x23eca4(0x194))['on'](_0x23eca4(0x32e), _0x195572), _0x467c7f['on'](_0x23eca4(0x32e), _0x195572), _0x55ace1['on'](_0x23eca4(0x32e), _0x195572), _0x2cfd98['on']('contextmenu', function (_0x509e03) {
                                                const _0xe13b3b = _0x23eca4;
                                                _0x509e03[_0xe13b3b(0x1d1)](), _0x2cfd98[_0xe13b3b(0x16e)](_0xe13b3b(0x376), '-1'), _0x2cfd98[_0xe13b3b(0x1cb)](_0xe13b3b(0x399)), _0x55ace1['show'](), _0x467c7f['show'](), _0x2e8afa(_0x2cfd98, _0x2cfd98[_0xe13b3b(0x28b)](_0xe13b3b(0x33a))[_0xe13b3b(0x39c)](function () {
                                                    const _0x125f28 = _0xe13b3b;
                                                    return _0x39bd05(this)[_0x125f28(0x178)]() == _0x2cfd98[_0x125f28(0x178)]();
                                                })[_0xe13b3b(0x140)](), _0x1ee369, 'vertical');
                                            }), _0x2cfd98['on'](_0x23eca4(0x271), function () {
                                                const _0x344262 = _0x23eca4;
                                                let _0xea4fc3 = _0x32db44[_0x344262(0x148)]()['find'](_0x344262(0x34b))[_0x344262(0x28b)](_0x344262(0x364))[_0x344262(0x140)]();
                                                var _0x20f6e0 = _0xea4fc3[_0x344262(0x26b)](_0x344262(0x33d))[_0x344262(0x1d7)] === 0x0;
                                                this[_0x344262(0x289)] != _0x20f6e0 && (this['volume'] = _0x14b573, _0xea4fc3?.[_0x344262(0x18b)]()), _0x39bd05(this)[_0x344262(0x188)](_0x344262(0x322)) && (_0x14b573 = this[_0x344262(0x213)], GM_setValue('G_VIDEO_VOLUME', this[_0x344262(0x213)])), this['volume'] == _0x14b573 && _0x39bd05(this)[_0x344262(0x188)](_0x344262(0x322), !![]);
                                            }), _0x2cfd98[_0x23eca4(0x16e)](_0x23eca4(0x25a), _0x23eca4(0x193)), _0x2cfd98[_0x23eca4(0x16e)](_0x23eca4(0x376), '2'), _0x2cfd98[_0x23eca4(0x188)]('data-controls', !![]), _0x2cfd98[_0x23eca4(0x188)](_0x23eca4(0x399), !![]);
                                        }
                                    } else
                                        _0x2e8afa(_0x2cfd98, _0x2cfd98['parents'](_0x23eca4(0x33a))[_0x23eca4(0x39c)](function () {
                                            const _0x1c08ae = _0x23eca4;
                                            return _0x39bd05(this)[_0x1c08ae(0x178)]() == _0x2cfd98[_0x1c08ae(0x178)]();
                                        })[_0x23eca4(0x140)](), _0x1ee369, _0x23eca4(0x2fe));
                                });
                            }
                        }
                    });
                }
            });
            _0x4c7b42['observe'](_0x39bd05('div[id^=\x22mount\x22]')[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));