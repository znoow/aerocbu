// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            2.36.8
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

function a0_0x2b09() {
    const _0x51725d = [
        'getFullYear',
        'highlights',
        'NEW_TAB',
        'map',
        'isReels',
        '\x22\x20/></div>',
        'createObjectURL',
        'is_video',
        'candidates',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'query_id',
        'userAgent',
        '<div></div>',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'includes',
        'Wololo!\x20New\x20version\x20released.',
        'button[role=\x22menuitem\x22]',
        '33910uouWlD',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'G_VIDEO_VOLUME',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'DONATE',
        'preventDefault',
        'time',
        'match',
        'MODIFY_VIDEO_VOLUME',
        'https://www.instagram.com/reels/',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'then',
        'header\x20>\x20section:first\x20img[alt]:not([draggable])',
        '140rvYlDe',
        'each',
        'GraphVideo',
        'language',
        'SCROLL_BUTTON',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'getHighlightStories()',
        'video\x20+\x20div\x20>\x20div',
        'REPORT_FORK',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'lang',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'https://www.instagram.com/p/',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'isStory',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        '51328EtXUdS',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        '.SNKMS_IG_DW_MAIN',
        'canvas._aarh',
        'prop',
        'floor',
        '.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN',
        'children',
        'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'log',
        'THUMBNAIL_INTRO',
        'image_versions2',
        'toUpperCase',
        'last',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        '%22}',
        'navigator',
        'responseText',
        '#tempWrapper',
        'carousel_media',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'appendChild',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '2358072ViSWIw',
        'DISABLE_VIDEO_LOOPING',
        'Cannot\x20find\x20video\x20URL.',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'there\x20is\x20no\x20new\x20update',
        '(story)\x20Added\x20video\x20event\x20listener\x20#modify',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'data-loop',
        'display_resources',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'finalUrl',
        'SETTING',
        '\x22\x20class=\x22newTab\x22>',
        'Request\x20failed\x20with\x20API\x20response\x20',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'join',
        'isIntersecting',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        '\x20-</a>',
        '566562jKjUQy',
        'Logger:\x0a',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'Main\x20Timer',
        'Show\x20DOM\x20Tree',
        'stories',
        'jpg',
        '<p\x20id=\x22_SNLOAD\x22>',
        '\x22\x20data-ih-locale-title=\x22',
        'use\x20strict',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'getMediaInfo()',
        'text/plain',
        'Video',
        'loadstart',
        'Current\x20version:\x20',
        'mousedown',
        'Request\x20with:',
        '._acay',
        'reject',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        '\x20child',
        'push',
        'createElement',
        'user\x20settings',
        'src',
        'getTime',
        'GM_unregisterMenuCommand',
        'Open\x20in\x20New\x20Tab',
        'div.volume_slider\x20input',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'selected',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'which',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'DOWNLOAD_DOM_TREE',
        'BATCH_DOWNLOAD_SELECTED',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        '\x22\x20/>',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'innerHTML',
        'sort',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        '.SNKMS_IG_NEWTAB_MAIN',
        'LOCALE_MANIFEST',
        'div[id^=\x22mount\x22]',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        '.IG_DWSTORY_THUMBNAIL',
        '.json',
        'REPORT_GITHUB',
        '.IG_SN_DIG\x20#post_info',
        '--ig-track-progress:\x20',
        'IMG',
        'close',
        'padStart',
        '\x22\x20class=\x22videoThumbnail\x22>',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'val',
        '(reel)\x20Added\x20video\x20event\x20listener\x20#modify',
        '#article-id',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'after',
        'absolute',
        '_ac3q',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        '<a\x20datetime=\x22',
        'canDownload',
        '.IG_SN_DIG\x20input',
        'div:not([class]):not([style])',
        'toString',
        'data-name',
        '<div\x20class=\x22volume_slider\x20bottom\x22\x20/>',
        '[data-snig]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'taken_at',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        '297485XWMjjr',
        'Remote\x20version:\x20',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'toLowerCase',
        'Settings',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'next',
        '</span>\x20<input\x20id=\x22',
        'srcset',
        'getPostOwner()',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'video_versions',
        'select',
        'CHECK_UPDATE',
        'x1iyjqo2',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'forEach',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'assign',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'object',
        'LOAD_BLOB_MULTIPLE',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'LOAD_BLOB_RELOAD',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'AUTO_RENAME',
        'div:last-child',
        'Reload\x20Script',
        'SKIP_VIEW_STORY_CONFIRM',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'isHighlightsStory',
        'video',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'feedback_message',
        'wrap',
        'G_RENAME_FORMAT',
        'text',
        '#scrollWrapper',
        'x1s85apg',
        'svg',
        'CLOSE',
        'input',
        'Download\x20All\x20Resources',
        'li._acaz',
        'remove',
        '</p>',
        '[data-ih-locale]',
        'click',
        'regenerated',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        '__typename',
        'shortcode_media',
        '(highlight)\x20Added\x20video\x20event\x20listener\x20#modify',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'GET',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'CHECK_UPDATE_MENU',
        'modify-thumbnail',
        'HTML5_VIDEO_CONTROL',
        'Download\x20Selected\x20Resources',
        '_acnf',
        '_blank',
        'items',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        'pause',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'Close',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'ig_helper_notice',
        'undefined',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
        'data-controls',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'range',
        'https://www.instagram.com/',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'getMinutes',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '40UbwtTn',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        '\x22\x20data-globalIndex=\x22',
        '._acay\x20._acaz',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'Feedback\x20Options',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'x1lix1fw',
        'header\x20>\x20section:first\x20img[alt][draggable]',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20text\x20is\x20translated\x20using\x20machine\x20translation\x20and\x20may\x20be\x20inaccurate;\x20you\x20can\x20contact\x20support\x20to\x20correct\x20the\x20translation.</div>',
        '.IG_DWPROFILE',
        '(post)\x20video\x20volume\x20changed\x20#slider',
        'reduce',
        'LOAD_BLOB_ONE',
        'playing',
        'matchAll',
        'SHOW_DOM_TREE',
        '</a>',
        'host',
        'mouseenter',
        'RENAME_PUBLISH_DATE',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'isProfile',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'a[data-needed=\x22direct\x22]',
        'hidden',
        '.IG_REELS_NEWTAB',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        'INTERNAL_CSS',
        'user',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        '(reel)\x20Added\x20video\x20event\x20listener\x20#loop',
        'scontent.cdninstagram.com',
        'getTranslationText()',
        '\x22]\x20span',
        '</a></button>',
        '[data-ih-locale-title]',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'location',
        'updatenotification',
        'getStories()',
        'replace',
        'slice',
        'div#splash-screen',
        '.IG_SN_DIG',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'display_url',
        '/info/',
        'ALL_CHECK',
        'data-completed',
        'NOPATH',
        '</a></button><br/>',
        'substr',
        'startsWith',
        'loop',
        '.IG_DWNEWTAB',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'G_LOCATE_DATE_FORMAT',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'instagram.com/reels/',
        'userLanguage',
        'body',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '</span>\x20',
        'reels_media',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'replaceAll',
        'data-path',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '<a\x20media-id=\x22',
        'profile_pic_url',
        'Fetch\x20from\x20memory\x20cache:',
        'data-modify-thumbnail',
        '\x22\x20datetime=\x22',
        'fadeOut',
        'FORCE_RESOURCE_VIA_MEDIA',
        'video_resources',
        'tagName',
        'NO_VID_URL',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'en-US',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'keyCode',
        'Preference\x20Settings',
        '.IG_DWSTORY',
        '(highlight)\x20Added\x20video\x20event\x20listener\x20#modify-thumbnail',
        'Download\x20Video\x20Thumbnail',
        'message',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        '</div></div>',
        'article',
        'hd_profile_pic_url_info',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'split',
        'position',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'data-href',
        'volume',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'scrollBy',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'Download',
        'username',
        'observe',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'edge_sidecar_to_children',
        'video_url',
        'media-id',
        'target',
        '16337620ZheaMl',
        'fail',
        'boolean',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        '.IG_DWHINEWTAB',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'FORCE_FETCH_ALL_RESOURCES',
        'Found\x20post\x20container',
        'data-type',
        'mp4',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'body\x20>\x20div\x20section:visible._ac0a',
        '</div>',
        'getUserIdWithAgent()',
        '.IG_SN_DIG\x20.globalSettings',
        'numeric',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'getUserId()',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        '.IG_DWHISTORY',
        'parse',
        'div.volume_slider',
        'code',
        'blob',
        'catch',
        'href',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'thumbnail',
        'Can\x20not\x20find\x20download\x20url.',
        'muted',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'style',
        'hasClass',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20posts\x20and\x20Reels.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20In\x20Reels\x20pages,\x20the\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'removeAttr',
        'taken_at_timestamp',
        'G_CHECK_TIMESTAMP',
        '\x22\x20class=\x22IG_REELS\x22>',
        'getSeconds',
        'owner',
        'version',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'top',
        'type',
        '<option\x20value=\x22',
        '.txt',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        '40WqlDRS',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '0px',
        '#_SNLOAD',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'https://ko-fi.com/snkoarashi',
        'z-index',
        'getBlobMediaWithQueryID()',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'DOWNLOAD',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'ended',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '/accounts/login',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'attr',
        'DIRECT_DOWNLOAD_ALL',
        'avatar',
        'VID',
        'div',
        'stringify',
        '\x22\x20title=\x22',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'px;top:',
        'className',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        '<a\x20href=\x22https://www.instagram.com/p/',
        '._acay\x20+\x20.x24i39r',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'https://www.instagram.com/reel/',
        'parent',
        'a[href^=\x22/p/\x22]',
        '2-digit',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'section\x20>\x20main[role=\x22main\x22]',
        'NO_CHECK_RESOURCE',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'css',
        '_acnb',
        'altKey',
        'IG\x20Debug\x20DOM\x20Tree',
        'hasReferrer',
        'timeupdate',
        'Checking\x20for\x20Updates',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'THUMBNAIL',
        'getUserHighSizeProfile()',
        'controls',
        'getMonth',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'NOTICE_UPDATE_CONTENT',
        'data-modify',
        'keys',
        'datetime',
        'first',
        'hostname',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        'paused\x20pause()',
        'trigging',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'response',
        'Disable\x20Video\x20Auto-looping',
        'data-username',
        'filter',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'data',
        '<div\x20class=\x22IG_SN_DIG\x20',
        '4866504GHOxfw',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'width',
        'stopPropagation',
        '37px',
        '<input\x20value=\x22',
        'GraphImage',
        'SELECT_AND_COPY',
        'checked',
        'height',
        'execCommand',
        'cursor',
        '.IG_DWHISTORY_THUMBNAIL',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        'addClass',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'users',
        'play',
        'DEBUG',
        'www.',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        'relative',
        'parents',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        'video[class]',
        'getBlobMediaWithQuery()',
        'Display\x20HTML5\x20Video\x20Controller',
        'find',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'label',
        'smooth',
        '.videoThumbnail',
        'query_hash',
        'isHomepage',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'body\x20>\x20div\x20section._ac0a',
        'change',
        'contextmenu',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'shortcode',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'reels',
        '<div\x20class=\x22volume_slider\x22\x20/>',
        'logger\x20sliced',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'data-snig',
        'modify',
        'node',
        'DIV',
        '.IG_REELS',
        'url',
        'faild',
        'keydown',
        'main\x20timer\x20re-register\x20completed',
        'before',
        'REPORT_DISCORD',
        'content',
        'FEEDBACK',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '.IG_REELS_THUMBNAIL',
        'div\x20>\x20ul\x20li._acaz',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        '\x0a-----\x0a\x0aLocation:\x20',
        'pathname',
        'px;\x22>',
        'getBlobMedia()',
        'error',
        'onReadyMyDW()\x20Timer',
        'append',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'removeClass',
        '(story)\x20Added\x20video\x20event\x20listener\x20#modify-thumbnail',
        'length',
        'data-ih-locale',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'status',
        'script',
        'warn',
        'disconnect',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down'
    ];
    a0_0x2b09 = function () {
        return _0x51725d;
    };
    return a0_0x2b09();
}
function a0_0x4c28(_0x16a36a, _0x1406c9) {
    const _0x2b092a = a0_0x2b09();
    return a0_0x4c28 = function (_0x4c28cc, _0x45373b) {
        _0x4c28cc = _0x4c28cc - 0x1e1;
        let _0xed9efc = _0x2b092a[_0x4c28cc];
        return _0xed9efc;
    }, a0_0x4c28(_0x16a36a, _0x1406c9);
}
(function (_0x3a5076, _0x351f13) {
    const _0x5c7cec = a0_0x4c28, _0x3123e9 = _0x3a5076();
    while (!![]) {
        try {
            const _0x4b4b2d = parseInt(_0x5c7cec(0x428)) / 0x1 * (-parseInt(_0x5c7cec(0x283)) / 0x2) + -parseInt(_0x5c7cec(0x2d6)) / 0x3 + -parseInt(_0x5c7cec(0x37e)) / 0x4 * (-parseInt(_0x5c7cec(0x329)) / 0x5) + -parseInt(_0x5c7cec(0x21b)) / 0x6 + parseInt(_0x5c7cec(0x290)) / 0x7 * (parseInt(_0x5c7cec(0x2a4)) / 0x8) + -parseInt(_0x5c7cec(0x2be)) / 0x9 + parseInt(_0x5c7cec(0x3f0)) / 0xa;
            if (_0x4b4b2d === _0x351f13)
                break;
            else
                _0x3123e9['push'](_0x3123e9['shift']());
        } catch (_0x576fba) {
            _0x3123e9['push'](_0x3123e9['shift']());
        }
    }
}(a0_0x2b09, 0x65c8a), function (_0x5bc733) {
    setTimeout(() => {
        const _0x11e903 = a0_0x4c28;
        setInterval(() => {
            _0x415d5e?.();
        }, 0x927c0), _0x11e903(0x2df);
        const _0x391fd7 = {
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
            }, _0x4a68cc = [
                'RENAME_PUBLISH_DATE',
                _0x11e903(0x376),
                _0x11e903(0x2c7)
            ];
        var _0x355a0d = GM_getValue(_0x11e903(0x285)) ? GM_getValue(_0x11e903(0x285)) : 0x1, _0x5804a8 = ![], _0x3185a1 = GM_getValue(_0x11e903(0x350)) ? GM_getValue(_0x11e903(0x350)) : _0x11e903(0x3da);
        const _0x371664 = {
                'DOWNLOAD': _0x11e903(0x3e1),
                'NEW_TAB': _0x11e903(0x2c6),
                'THUMBNAIL': _0x11e903(0x2e4),
                'CLOSE': '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>'
            }, _0x570502 = 0xfa, _0x5c2a1c = GM_getResourceText(_0x11e903(0x39a)), _0x337b45 = JSON[_0x11e903(0x408)](GM_getResourceText(_0x11e903(0x308)));
        var _0x108374 = [], _0x57018c = {}, _0x5dd3d4 = GM_getValue(_0x11e903(0x29d)) || navigator[_0x11e903(0x293)] || navigator[_0x11e903(0x3bd)], _0x5db0aa = location['href'], _0x4eef3b = ![], _0xb92c7e = ![], _0x44dfcd = [], _0x2557a7, _0x32ae10, _0x5ffcd6, _0x2315ba, _0x2f41c7 = {
                'stories': {},
                'highlights': {}
            }, _0x524130 = new MutationObserver(function (_0x425ab9, _0xcd1b75) {
                _0x1ef3d0();
            });
        _0x265b45(), GM_addStyle(_0x5c2a1c), _0x14786a(), _0x4d07f7(_0x5dd3d4)[_0x11e903(0x28e)](_0x280b28 => {
            _0x57018c[_0x5dd3d4] = _0x280b28, _0x17280(), _0x14786a(), _0x313403(0x12c);
        })[_0x11e903(0x40c)](_0x4587da => {
            const _0x4ed5cf = _0x11e903;
            _0x14786a(), _0x313403(0x12c), !_0x5dd3d4[_0x4ed5cf(0x3b5)]('en') && console[_0x4ed5cf(0x260)]('getTranslationText\x20catch\x20error:', _0x4587da);
        });
        var _0x3945d2 = setInterval(function () {
            const _0x92c77a = _0x11e903;
            if (_0x5bc733(_0x92c77a(0x3a9))[_0x92c77a(0x267)] > 0x0 && !_0x5bc733(_0x92c77a(0x3a9))['is'](':hidden') || location[_0x92c77a(0x25d)][_0x92c77a(0x28a)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x92c77a(0x20f)][_0x92c77a(0x3b5)](_0x92c77a(0x22e))) {
                _0xb92c7e = ![];
                return;
            }
            if (_0x5db0aa != location['href'] || !_0x4eef3b || !_0xb92c7e) {
                console[_0x92c77a(0x2ae)](_0x92c77a(0x2d9), _0x92c77a(0x212)), clearInterval(_0x2315ba), _0xb92c7e = ![], _0x4eef3b = !![], _0x5db0aa = location['href'], _0x524130[_0x92c77a(0x26d)]();
                if (location[_0x92c77a(0x40d)][_0x92c77a(0x3b5)](_0x92c77a(0x29f)) || location[_0x92c77a(0x25d)]['match'](/^\/(.*?)\/p\//ig) || location[_0x92c77a(0x40d)][_0x92c77a(0x3b5)](_0x92c77a(0x1f3))) {
                    _0x2f41c7['stories'] = {}, _0x446061('isDialog');
                    var _0x1955ec = setInterval(() => {
                        const _0x5084a7 = _0x92c77a;
                        _0x5bc733('body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')[_0x5084a7(0x267)] > 0x0 && (clearInterval(_0x1955ec), setTimeout(() => {
                            _0x1ef3d0(![]);
                        }, 0xf));
                    }, 0x64);
                    _0xb92c7e = !![];
                }
                location['href'][_0x92c77a(0x3b5)](_0x92c77a(0x28c)) && (_0x446061(_0x92c77a(0x273)), setTimeout(() => {
                    _0x37d73d(![]);
                }, 0x96), _0xb92c7e = !![]);
                if (location[_0x92c77a(0x40d)][_0x92c77a(0x3df)]('?')[0x0] == _0x92c77a(0x37a)) {
                    _0x2f41c7[_0x92c77a(0x2db)] = {};
                    let _0x5985ba = _0x2557a7?.[_0x92c77a(0x28a)](/^\/stories\//ig) != null;
                    _0x446061(_0x92c77a(0x23c), _0x5985ba), setTimeout(() => {
                        const _0x48ba69 = _0x92c77a;
                        _0x1ef3d0(![], _0x5985ba);
                        const _0x20c11d = _0x5bc733('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.['parent']()[0x0];
                        _0x20c11d && _0x524130[_0x48ba69(0x3ea)](_0x20c11d, { 'childList': !![] });
                    }, 0x96), _0xb92c7e = !![];
                }
                _0x5bc733('header\x20>\x20section:first\x20img[alt]')[_0x92c77a(0x267)] && location[_0x92c77a(0x25d)]['match'](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x92c77a(0x25d)][_0x92c77a(0x28a)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x446061(_0x92c77a(0x394)), setTimeout(() => {
                    _0x35f075(![]);
                }, 0x96), _0xb92c7e = !![]);
                if (!_0xb92c7e) {
                    if (location['href'][_0x92c77a(0x28a)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig)) {
                        _0x2f41c7[_0x92c77a(0x270)] = {}, _0x446061(_0x92c77a(0x34b)), _0x22dcb6(![]), _0x2315ba = setInterval(() => {
                            _0x422aec(![]);
                        }, _0x570502);
                        _0x5bc733('.IG_DWHISTORY')[_0x92c77a(0x267)] && setTimeout(() => {
                            const _0x276fef = _0x92c77a;
                            if (_0x391fd7['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x4d340b = _0x5bc733(_0x276fef(0x3a3))[_0x276fef(0x217)](function () {
                                    const _0x238f1b = _0x276fef;
                                    return _0x5bc733(this)['children']()[_0x238f1b(0x267)] === 0x0;
                                });
                                _0x4d340b?.[_0x276fef(0x35c)]();
                            }
                            _0xb92c7e = !![];
                        }, 0x96);
                        ;
                    } else
                        location['href'][_0x92c77a(0x28a)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x446061(_0x92c77a(0x2a2)), _0x5bc733('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x92c77a(0x267)] > 0x0 && (_0x5bc733('.IG_DWSTORY')['remove'](), _0x5bc733(_0x92c77a(0x3b7))[_0x92c77a(0x359)](), _0x5bc733('.IG_DWSTORY_THUMBNAIL')[_0x92c77a(0x267)] && _0x5bc733(_0x92c77a(0x30b))[_0x92c77a(0x359)](), _0x459b3a(![]), setTimeout(() => {
                            _0x459b3a(![]);
                        }, 0x96)), _0x5bc733(_0x92c77a(0x3d6))[_0x92c77a(0x267)] && setTimeout(() => {
                            const _0x4d1ef3 = _0x92c77a;
                            if (_0x391fd7[_0x4d1ef3(0x348)]) {
                                var _0x8f1683 = _0x5bc733(_0x4d1ef3(0x3a3))[_0x4d1ef3(0x217)](function () {
                                    const _0x2e4808 = _0x4d1ef3;
                                    return _0x5bc733(this)[_0x2e4808(0x2ab)]()['length'] === 0x0;
                                });
                                _0x8f1683?.['click']();
                            }
                            _0xb92c7e = !![];
                        }, 0x96)) : (_0xb92c7e = ![], _0x5bc733('.IG_DWSTORY')[_0x92c77a(0x359)](), _0x5bc733(_0x92c77a(0x3b7))[_0x92c77a(0x359)](), _0x5bc733(_0x92c77a(0x30b))[_0x92c77a(0x267)] && _0x5bc733(_0x92c77a(0x30b))[_0x92c77a(0x359)]());
                }
                _0x313403(0x12c), _0x2557a7 = new URL(location['href'])[_0x92c77a(0x25d)];
            }
        }, _0x570502);
        async function _0x35f075(_0x57529c) {
            const _0x598641 = _0x11e903;
            if (_0x57529c) {
                _0x55c6f2(!![]);
                let _0x4fed58 = new Date()[_0x598641(0x2f6)](), _0x3134d4 = Math['floor'](_0x4fed58 / 0x3e8), _0xea1174 = location[_0x598641(0x25d)]['replaceAll'](/(reels|tagged)\/$/ig, '')[_0x598641(0x3df)]('/')[_0x598641(0x217)](_0x22f7ae => _0x22f7ae[_0x598641(0x267)] > 0x0)['at'](-0x1), _0x16c79d = await _0x571932(_0xea1174);
                try {
                    let _0x29e0b1 = await _0x2739d3(_0x16c79d[_0x598641(0x39b)]['pk']);
                    _0x4a027b(_0x29e0b1, _0xea1174, _0x598641(0x1e6), _0x3134d4, 'jpg');
                } catch (_0x204da0) {
                    _0x4a027b(_0x16c79d[_0x598641(0x39b)][_0x598641(0x3c8)], _0xea1174, 'avatar', _0x3134d4, _0x598641(0x2dc));
                }
                _0x55c6f2(![]);
            } else {
                if (!_0x5bc733(_0x598641(0x388))['length']) {
                    let _0x2110f0 = setInterval(() => {
                        const _0x33abb5 = _0x598641;
                        if (_0x5bc733(_0x33abb5(0x388))[_0x33abb5(0x267)]) {
                            clearInterval(_0x2110f0);
                            return;
                        }
                        _0x5bc733(_0x33abb5(0x386))[_0x33abb5(0x1f4)]()['parent']()[_0x33abb5(0x262)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x399229('DW') + _0x33abb5(0x3de) + _0x371664['DOWNLOAD'] + '</div>'), _0x5bc733('header\x20>\x20section:first\x20img[alt][draggable]')[_0x33abb5(0x1f4)]()[_0x33abb5(0x1f4)]()[_0x33abb5(0x1fd)](_0x33abb5(0x3e0), 'relative'), _0x5bc733('header\x20>\x20section:first\x20img[alt]:not([draggable])')[_0x33abb5(0x1f4)]()['parent']()[_0x33abb5(0x1f4)]()[_0x33abb5(0x262)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x399229('DW') + _0x33abb5(0x3de) + _0x371664[_0x33abb5(0x432)] + _0x33abb5(0x3fe)), _0x5bc733(_0x33abb5(0x28f))['parent']()[_0x33abb5(0x1f4)]()[_0x33abb5(0x1f4)]()[_0x33abb5(0x1fd)](_0x33abb5(0x3e0), 'relative');
                    }, 0x96);
                }
            }
        }
        async function _0x22dcb6(_0x4659fa, _0x3120e6) {
            const _0x1342a9 = _0x11e903;
            if (_0x4659fa) {
                let _0x561274 = new Date()['getTime'](), _0x224601 = Math[_0x1342a9(0x2a9)](_0x561274 / 0x3e8), _0x4540b2 = location[_0x1342a9(0x40d)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x2aff31 = _0x5bc733(_0x1342a9(0x1f1))[_0x1342a9(0x267)] || _0x5bc733(_0x1342a9(0x295))['length'] || _0x5bc733(_0x1342a9(0x2ad))['find'](_0x1342a9(0x23e))['length'], _0x4f9a78 = '', _0x173357 = 0x0;
                _0x55c6f2(!![]);
                if (_0x2f41c7[_0x1342a9(0x270)][_0x4540b2]) {
                    _0x446061(_0x1342a9(0x3c9), _0x4540b2);
                    let _0x420fe9 = _0x2f41c7['highlights'][_0x4540b2][_0x1342a9(0x219)][_0x1342a9(0x3c2)][0x0]['items'][_0x1342a9(0x267)];
                    _0x4f9a78 = _0x2f41c7['highlights'][_0x4540b2][_0x1342a9(0x219)]['reels_media'][0x0][_0x1342a9(0x420)][_0x1342a9(0x3e9)], _0x173357 = _0x2f41c7[_0x1342a9(0x270)][_0x4540b2][_0x1342a9(0x219)]['reels_media'][0x0][_0x1342a9(0x36c)][_0x420fe9 - _0x2aff31];
                } else {
                    let _0x31d7e7 = await _0x28ef96(_0x4540b2), _0x2ab5c3 = _0x31d7e7[_0x1342a9(0x219)][_0x1342a9(0x3c2)][0x0][_0x1342a9(0x36c)][_0x1342a9(0x267)];
                    _0x4f9a78 = _0x31d7e7[_0x1342a9(0x219)][_0x1342a9(0x3c2)][0x0][_0x1342a9(0x420)][_0x1342a9(0x3e9)], _0x173357 = _0x31d7e7[_0x1342a9(0x219)][_0x1342a9(0x3c2)][0x0][_0x1342a9(0x36c)][_0x2ab5c3 - _0x2aff31], _0x2f41c7['highlights'][_0x4540b2] = _0x31d7e7;
                }
                _0x391fd7[_0x1342a9(0x392)] && (_0x224601 = _0x173357['taken_at_timestamp']);
                if (_0x391fd7[_0x1342a9(0x3cd)] && !_0x5804a8) {
                    let _0x1461fd = await _0x442557(_0x173357['id']);
                    _0x1461fd[_0x1342a9(0x26a)] === 'ok' ? _0x1461fd[_0x1342a9(0x36c)][0x0][_0x1342a9(0x334)] ? _0x3120e6 ? _0x177725(_0x1461fd[_0x1342a9(0x36c)][0x0]['video_versions'][0x0][_0x1342a9(0x24f)]) : _0x4a027b(_0x1461fd[_0x1342a9(0x36c)][0x0]['video_versions'][0x0]['url'], _0x4f9a78, _0x1342a9(0x270), _0x224601, _0x1342a9(0x3fa)) : _0x3120e6 ? _0x177725(_0x1461fd[_0x1342a9(0x36c)][0x0]['image_versions2'][_0x1342a9(0x277)][0x0][_0x1342a9(0x24f)]) : _0x4a027b(_0x1461fd[_0x1342a9(0x36c)][0x0][_0x1342a9(0x2b0)][_0x1342a9(0x277)][0x0][_0x1342a9(0x24f)], _0x4f9a78, _0x1342a9(0x270), _0x224601, _0x1342a9(0x2dc)) : (_0x391fd7['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT'] ? (delete _0x2f41c7[_0x1342a9(0x270)][_0x4540b2], _0x5804a8 = !![], _0x22dcb6(!![], _0x3120e6)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x1461fd['message']), _0x446061(_0x1461fd));
                } else
                    _0x173357[_0x1342a9(0x276)] ? _0x3120e6 ? _0x177725(_0x173357[_0x1342a9(0x3ce)]['at'](-0x1)[_0x1342a9(0x2f5)], _0x4f9a78) : _0x4a027b(_0x173357['video_resources']['at'](-0x1)[_0x1342a9(0x2f5)], _0x4f9a78, 'highlights', _0x224601, _0x1342a9(0x3fa), _0x4540b2) : _0x3120e6 ? _0x177725(_0x173357[_0x1342a9(0x2c9)]['at'](-0x1)[_0x1342a9(0x2f5)], _0x4f9a78) : _0x4a027b(_0x173357[_0x1342a9(0x2c9)]['at'](-0x1)[_0x1342a9(0x2f5)], _0x4f9a78, _0x1342a9(0x270), _0x224601, _0x1342a9(0x2dc), _0x4540b2), _0x5804a8 = ![];
                _0x55c6f2(![]);
            } else {
                if (!_0x5bc733(_0x1342a9(0x407))[_0x1342a9(0x267)]) {
                    let _0x26a44d = null;
                    _0x5bc733('body\x20>\x20div\x20section._ac0a')[_0x1342a9(0x267)] > 0x0 ? _0x26a44d = _0x5bc733(_0x1342a9(0x3fd)) : (_0x26a44d = _0x5bc733('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x26a44d[_0x1342a9(0x1fd)](_0x1342a9(0x3e0), _0x1342a9(0x230)));
                    if (_0x26a44d[_0x1342a9(0x267)] === 0x0) {
                        let _0x58750a = _0x5bc733(_0x1342a9(0x36f)), _0xf644dd = 0x0;
                        _0x58750a[_0x1342a9(0x291)](function () {
                            const _0x58c1db = _0x1342a9;
                            _0x5bc733(this)[_0x58c1db(0x21d)]() > _0xf644dd && (_0xf644dd = _0x5bc733(this)['width'](), _0x26a44d = _0x5bc733(this)['children'](_0x58c1db(0x1e8))['first']());
                        });
                    }
                    _0x26a44d != null && (_0x26a44d[_0x1342a9(0x262)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x399229('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x371664[_0x1342a9(0x432)] + _0x1342a9(0x3fe)), _0x26a44d[_0x1342a9(0x262)](_0x1342a9(0x412) + _0x399229(_0x1342a9(0x271)) + _0x1342a9(0x2ef) + _0x371664[_0x1342a9(0x271)] + _0x1342a9(0x3fe)), _0x391fd7['MODIFY_VIDEO_VOLUME'] && _0x26a44d[_0x1342a9(0x236)](_0x1342a9(0x34c))['each'](function () {
                        const _0x2acc29 = _0x1342a9;
                        !_0x5bc733(this)['data']('modify') && (_0x446061(_0x2acc29(0x362)), this[_0x2acc29(0x3e4)] = _0x355a0d, _0x5bc733(this)['on'](_0x2acc29(0x22c), function () {
                            const _0x40cd6f = _0x2acc29;
                            this[_0x40cd6f(0x3e4)] = _0x355a0d;
                        }), _0x5bc733(this)['on'](_0x2acc29(0x38c), function () {
                            const _0x3f4412 = _0x2acc29;
                            this[_0x3f4412(0x3e4)] = _0x355a0d;
                        }), _0x5bc733(this)[_0x2acc29(0x1e4)](_0x2acc29(0x20b), !![]));
                    }), _0x26a44d[_0x1342a9(0x236)](_0x1342a9(0x34c))[_0x1342a9(0x291)](function () {
                        const _0x479906 = _0x1342a9;
                        !_0x5bc733(this)[_0x479906(0x219)]('modify-thumbnail') && (_0x446061(_0x479906(0x3d7)), _0x5bc733(this)['on'](_0x479906(0x202), function () {
                            const _0x40740b = _0x479906;
                            _0x26a44d[_0x40740b(0x236)](_0x40740b(0x227))['length'] === 0x0 && _0x422aec(![]);
                        }), _0x5bc733(this)[_0x479906(0x1e4)](_0x479906(0x3ca), !![]));
                    }));
                }
            }
        }
        async function _0x422aec(_0x5db7ac) {
            const _0x2f4fad = _0x11e903;
            if (_0x5db7ac) {
                let _0x59add2 = new Date()[_0x2f4fad(0x2f6)](), _0x1ae1c3 = Math[_0x2f4fad(0x2a9)](_0x59add2 / 0x3e8), _0x4bb11d = location[_0x2f4fad(0x40d)][_0x2f4fad(0x3a7)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x1eb5c7 = '', _0x2ad835 = _0x5bc733('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x2f4fad(0x267)] || _0x5bc733('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x2f4fad(0x267)] || _0x5bc733(_0x2f4fad(0x2ad))[_0x2f4fad(0x236)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')['length'], _0x4ebcf4 = '';
                _0x55c6f2(!![]);
                if (_0x2f41c7[_0x2f4fad(0x270)][_0x4bb11d]) {
                    _0x446061(_0x2f4fad(0x3c9), _0x4bb11d);
                    let _0xc0058b = _0x2f41c7[_0x2f4fad(0x270)][_0x4bb11d]['data'][_0x2f4fad(0x3c2)][0x0][_0x2f4fad(0x36c)][_0x2f4fad(0x267)];
                    _0x1eb5c7 = _0x2f41c7['highlights'][_0x4bb11d]['data'][_0x2f4fad(0x3c2)][0x0][_0x2f4fad(0x420)][_0x2f4fad(0x3e9)], _0x4ebcf4 = _0x2f41c7['highlights'][_0x4bb11d][_0x2f4fad(0x219)]['reels_media'][0x0][_0x2f4fad(0x36c)][_0xc0058b - _0x2ad835];
                } else {
                    let _0x3c0468 = await _0x28ef96(_0x4bb11d), _0x5c8069 = _0x3c0468[_0x2f4fad(0x219)]['reels_media'][0x0]['items'][_0x2f4fad(0x267)];
                    _0x1eb5c7 = _0x3c0468[_0x2f4fad(0x219)][_0x2f4fad(0x3c2)][0x0][_0x2f4fad(0x420)]['username'], _0x4ebcf4 = _0x3c0468['data']['reels_media'][0x0]['items'][_0x5c8069 - _0x2ad835], _0x2f41c7[_0x2f4fad(0x270)][_0x4bb11d] = _0x3c0468;
                }
                _0x391fd7['RENAME_PUBLISH_DATE'] && (_0x1ae1c3 = _0x4ebcf4['taken_at_timestamp']);
                if (_0x391fd7[_0x2f4fad(0x3cd)] && !_0x5804a8) {
                    let _0x569b08 = await _0x442557(_0x4ebcf4['id']);
                    _0x569b08[_0x2f4fad(0x26a)] === 'ok' ? _0x4a027b(_0x569b08['items'][0x0][_0x2f4fad(0x2b0)][_0x2f4fad(0x277)][0x0][_0x2f4fad(0x24f)], _0x1eb5c7, 'highlights', _0x1ae1c3, _0x2f4fad(0x2dc)) : (_0x391fd7[_0x2f4fad(0x376)] ? (delete _0x2f41c7['highlights'][_0x4bb11d], _0x5804a8 = !![], _0x422aec(!![])) : alert(_0x2f4fad(0x33c) + _0x569b08[_0x2f4fad(0x3d9)]), _0x446061(_0x569b08));
                } else
                    _0x4a027b(_0x4ebcf4[_0x2f4fad(0x2c9)]['at'](-0x1)[_0x2f4fad(0x2f5)], _0x1eb5c7, _0x2f4fad(0x270), _0x1ae1c3, _0x2f4fad(0x2dc), _0x4bb11d), _0x5804a8 = ![];
                _0x55c6f2(![]);
            } else {
                if (_0x5bc733(_0x2f4fad(0x209))[_0x2f4fad(0x267)]) {
                    if (!_0x5bc733('.IG_DWHISTORY_THUMBNAIL')[_0x2f4fad(0x267)]) {
                        let _0x2b1c08 = null;
                        _0x5bc733('body\x20>\x20div\x20section._ac0a')[_0x2f4fad(0x267)] > 0x0 ? _0x2b1c08 = _0x5bc733('body\x20>\x20div\x20section:visible._ac0a') : (_0x2b1c08 = _0x5bc733(_0x2f4fad(0x2bd)), _0x2b1c08['css'](_0x2f4fad(0x3e0), _0x2f4fad(0x230)));
                        if (_0x2b1c08[_0x2f4fad(0x267)] === 0x0) {
                            let _0x42a8b7 = _0x5bc733(_0x2f4fad(0x36f)), _0x50e026 = 0x0;
                            _0x42a8b7[_0x2f4fad(0x291)](function () {
                                const _0x1be501 = _0x2f4fad;
                                _0x5bc733(this)[_0x1be501(0x21d)]() > _0x50e026 && (_0x50e026 = _0x5bc733(this)[_0x1be501(0x21d)](), _0x2b1c08 = _0x5bc733(this)['children'](_0x1be501(0x1e8))[_0x1be501(0x20e)]());
                            });
                        }
                        _0x2b1c08 != null && _0x2b1c08['append'](_0x2f4fad(0x384) + _0x399229(_0x2f4fad(0x2af)) + _0x2f4fad(0x35e) + _0x371664[_0x2f4fad(0x205)] + '</div>');
                    }
                } else
                    _0x5bc733(_0x2f4fad(0x227))[_0x2f4fad(0x359)]();
            }
        }
        async function _0x459b3a(_0x3a6e57, _0x2af6df, _0x22c65c) {
            const _0x333e1c = _0x11e903;
            if (_0x3a6e57) {
                let _0x1ff707 = new Date()[_0x333e1c(0x2f6)](), _0x43cf32 = Math['floor'](_0x1ff707 / 0x3e8), _0x1b45f9 = _0x5bc733(_0x333e1c(0x422))[_0x333e1c(0x20e)]()[_0x333e1c(0x351)]() || location[_0x333e1c(0x25d)][_0x333e1c(0x3df)]('/')[_0x333e1c(0x217)](_0x1cabb7 => _0x1cabb7[_0x333e1c(0x267)] > 0x0)['at'](0x1);
                _0x55c6f2(!![]);
                if (_0x391fd7[_0x333e1c(0x3cd)] && !_0x5804a8) {
                    let _0x30e2ef = null, _0x44b2c0 = await _0x571932(_0x1b45f9), _0x50ccbe = _0x44b2c0[_0x333e1c(0x39b)]['pk'], _0x2afdd3 = await _0x46871e(_0x50ccbe), _0x259de9 = location[_0x333e1c(0x25d)][_0x333e1c(0x3df)]('/')[_0x333e1c(0x217)](_0x270bc9 => _0x270bc9[_0x333e1c(0x267)] > 0x0 && _0x270bc9[_0x333e1c(0x28a)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x2afdd3['data']['reels_media'][0x0]['items']['forEach'](_0xde454f => {
                        _0xde454f['id'] == _0x259de9 && (_0x30e2ef = _0xde454f['id']);
                    });
                    if (_0x30e2ef == null) {
                        let _0x512500 = _0x5bc733('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x1b45f9 + '\x22]\x20span')[_0x333e1c(0x217)](function () {
                            const _0x357421 = _0x333e1c;
                            return _0x5bc733(this)[_0x357421(0x2ab)]()[_0x357421(0x267)] === 0x0 && _0x5bc733(this)[_0x357421(0x236)](_0x357421(0x354))[_0x357421(0x267)] === 0x0 && _0x5bc733(this)[_0x357421(0x351)]()?.[_0x357421(0x32c)]() === _0x1b45f9?.[_0x357421(0x32c)]();
                        })[_0x333e1c(0x231)](_0x333e1c(0x320))[_0x333e1c(0x217)](function () {
                            const _0x4aa25d = _0x333e1c;
                            return _0x5bc733(this)[_0x4aa25d(0x351)]()?.['toLowerCase']() !== _0x1b45f9?.[_0x4aa25d(0x32c)]();
                        })[_0x333e1c(0x217)](function () {
                            const _0x801dbd = _0x333e1c;
                            return _0x5bc733(this)[_0x801dbd(0x2ab)]()['length'] > 0x1;
                        })['first']();
                        _0x512500[_0x333e1c(0x2ab)]()[_0x333e1c(0x217)](function () {
                            const _0x47393e = _0x333e1c;
                            return _0x5bc733(this)[_0x47393e(0x224)]() < 0xa;
                        })[_0x333e1c(0x20e)]()[_0x333e1c(0x2ab)]()[_0x333e1c(0x291)](function (_0x872420) {
                            const _0x620fa9 = _0x333e1c;
                            _0x5bc733(this)[_0x620fa9(0x2ab)]()[_0x620fa9(0x267)] > 0x0 && (_0x30e2ef = _0x2afdd3['data'][_0x620fa9(0x3c2)][0x0][_0x620fa9(0x36c)][_0x872420]['id']);
                        });
                    }
                    _0x30e2ef == null && (_0x5bc733(_0x333e1c(0x249))[_0x333e1c(0x291)](function (_0x45ea41) {
                        const _0x27c2c0 = _0x333e1c;
                        _0x5bc733(this)['hasClass'](_0x27c2c0(0x385)) && (_0x5bc733(this)[_0x27c2c0(0x2ab)]()[_0x27c2c0(0x267)] > 0x0 && (_0x30e2ef = _0x2afdd3[_0x27c2c0(0x219)][_0x27c2c0(0x3c2)][0x0]['items'][_0x45ea41]['id']));
                    }), _0x5bc733(_0x333e1c(0x2b3))[_0x333e1c(0x291)](function (_0x5edfdf) {
                        const _0x34678d = _0x333e1c;
                        _0x5bc733(this)[_0x34678d(0x2ab)]()[_0x34678d(0x414)](_0x34678d(0x31b)) && (_0x30e2ef = _0x2afdd3[_0x34678d(0x219)][_0x34678d(0x3c2)][0x0][_0x34678d(0x36c)][_0x5edfdf]['id']);
                    }));
                    _0x30e2ef == null && (_0x30e2ef = location[_0x333e1c(0x25d)][_0x333e1c(0x3df)]('/')['filter'](_0x36a89d => _0x36a89d[_0x333e1c(0x267)] > 0x0 && _0x36a89d['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x50eb11 = await _0x442557(_0x30e2ef);
                    _0x391fd7[_0x333e1c(0x392)] && (_0x43cf32 = _0x50eb11[_0x333e1c(0x36c)][0x0][_0x333e1c(0x326)]);
                    _0x50eb11[_0x333e1c(0x26a)] === 'ok' ? _0x50eb11[_0x333e1c(0x36c)][0x0][_0x333e1c(0x334)] ? _0x22c65c ? _0x177725(_0x50eb11[_0x333e1c(0x36c)][0x0][_0x333e1c(0x334)][0x0][_0x333e1c(0x24f)]) : _0x4a027b(_0x50eb11[_0x333e1c(0x36c)][0x0][_0x333e1c(0x334)][0x0][_0x333e1c(0x24f)], _0x1b45f9, _0x333e1c(0x2db), _0x43cf32, _0x333e1c(0x3fa)) : _0x22c65c ? _0x177725(_0x50eb11[_0x333e1c(0x36c)][0x0][_0x333e1c(0x2b0)][_0x333e1c(0x277)][0x0][_0x333e1c(0x24f)]) : _0x4a027b(_0x50eb11[_0x333e1c(0x36c)][0x0][_0x333e1c(0x2b0)][_0x333e1c(0x277)][0x0][_0x333e1c(0x24f)], _0x1b45f9, _0x333e1c(0x2db), _0x43cf32, _0x333e1c(0x2dc)) : (_0x391fd7['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT'] ? (_0x5804a8 = !![], _0x459b3a(_0x3a6e57, _0x2af6df, _0x22c65c)) : alert(_0x333e1c(0x33c) + _0x50eb11[_0x333e1c(0x3d9)]), _0x446061(_0x50eb11));
                    _0x55c6f2(![]);
                    return;
                }
                if (_0x5bc733(_0x333e1c(0x33f))[_0x333e1c(0x267)] > 0x0) {
                    let _0x30beb5 = 'mp4', _0x13afd4 = '', _0x5190ce = location[_0x333e1c(0x25d)][_0x333e1c(0x3a7)](/\/$/ig, '')[_0x333e1c(0x3df)]('/')['at'](-0x1);
                    if (_0x2f41c7[_0x333e1c(0x2db)][_0x1b45f9] && !_0x2af6df) {
                        _0x446061(_0x333e1c(0x3c9), _0x1b45f9), _0x2f41c7[_0x333e1c(0x2db)][_0x1b45f9][_0x333e1c(0x219)]['reels_media'][0x0][_0x333e1c(0x36c)][_0x333e1c(0x339)](_0x479428 => {
                            const _0x2938aa = _0x333e1c;
                            _0x479428['id'] == _0x5190ce && (_0x13afd4 = _0x479428[_0x2938aa(0x3ce)][0x0][_0x2938aa(0x2f5)], _0x391fd7[_0x2938aa(0x392)] && (_0x43cf32 = _0x479428[_0x2938aa(0x41c)]));
                        });
                        if (_0x13afd4[_0x333e1c(0x267)] == 0x0) {
                            _0x446061(_0x333e1c(0x2d1), _0x1b45f9), _0x459b3a(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x14e991 = await _0x571932(_0x1b45f9), _0x45b1fe = _0x14e991[_0x333e1c(0x39b)]['pk'], _0x32203c = await _0x46871e(_0x45b1fe);
                        _0x32203c[_0x333e1c(0x219)]['reels_media'][0x0][_0x333e1c(0x36c)]['forEach'](_0x127666 => {
                            const _0x1da4ae = _0x333e1c;
                            _0x127666['id'] == _0x5190ce && (_0x13afd4 = _0x127666[_0x1da4ae(0x3ce)][0x0]['src'], _0x391fd7['RENAME_PUBLISH_DATE'] && (_0x43cf32 = _0x127666[_0x1da4ae(0x41c)]));
                        });
                        if (_0x13afd4[_0x333e1c(0x267)] == 0x0) {
                            let _0x4c934b = _0x5bc733(_0x333e1c(0x395) + _0x1b45f9 + _0x333e1c(0x3a0))[_0x333e1c(0x217)](function () {
                                const _0x488af0 = _0x333e1c;
                                return _0x5bc733(this)[_0x488af0(0x2ab)]()[_0x488af0(0x267)] === 0x0 && _0x5bc733(this)[_0x488af0(0x236)](_0x488af0(0x354))[_0x488af0(0x267)] === 0x0 && _0x5bc733(this)[_0x488af0(0x351)]()?.['toLowerCase']() === _0x1b45f9?.[_0x488af0(0x32c)]();
                            })['parents']('div:not([class]):not([style])')[_0x333e1c(0x217)](function () {
                                const _0x48c3e4 = _0x333e1c;
                                return _0x5bc733(this)[_0x48c3e4(0x351)]()?.[_0x48c3e4(0x32c)]() !== _0x1b45f9?.[_0x48c3e4(0x32c)]();
                            })['filter'](function () {
                                const _0x230e53 = _0x333e1c;
                                return _0x5bc733(this)[_0x230e53(0x2ab)]()['length'] > 0x1;
                            })['first']();
                            _0x4c934b['children']()[_0x333e1c(0x217)](function () {
                                const _0x4976d5 = _0x333e1c;
                                return _0x5bc733(this)[_0x4976d5(0x224)]() < 0xa;
                            })[_0x333e1c(0x20e)]()[_0x333e1c(0x2ab)]()[_0x333e1c(0x291)](function (_0x2acd34) {
                                const _0x1aeea5 = _0x333e1c;
                                _0x5bc733(this)['children']()['length'] > 0x0 && (_0x13afd4 = _0x32203c['data'][_0x1aeea5(0x3c2)][0x0][_0x1aeea5(0x36c)][_0x2acd34][_0x1aeea5(0x3ce)][0x0][_0x1aeea5(0x2f5)], _0x391fd7[_0x1aeea5(0x392)] && (_0x43cf32 = _0x32203c[_0x1aeea5(0x219)][_0x1aeea5(0x3c2)][0x0][_0x1aeea5(0x36c)][_0x2acd34][_0x1aeea5(0x41c)]));
                            }), _0x13afd4[_0x333e1c(0x267)] == 0x0 && (_0x5bc733(_0x333e1c(0x249))['each'](function (_0xbc75e4) {
                                const _0x336c18 = _0x333e1c;
                                _0x5bc733(this)['hasClass'](_0x336c18(0x385)) && (_0x5bc733(this)[_0x336c18(0x2ab)]()[_0x336c18(0x267)] > 0x0 && (_0x13afd4 = _0x32203c[_0x336c18(0x219)][_0x336c18(0x3c2)][0x0][_0x336c18(0x36c)][_0xbc75e4]['video_resources'][0x0][_0x336c18(0x2f5)], _0x391fd7[_0x336c18(0x392)] && (_0x43cf32 = _0x32203c[_0x336c18(0x219)]['reels_media'][0x0]['items'][_0xbc75e4][_0x336c18(0x41c)])));
                            }), _0x5bc733(_0x333e1c(0x2b3))[_0x333e1c(0x291)](function (_0x5aa7e3) {
                                const _0x43e080 = _0x333e1c;
                                _0x5bc733(this)['children']()['hasClass'](_0x43e080(0x31b)) && (_0x13afd4 = _0x32203c[_0x43e080(0x219)][_0x43e080(0x3c2)][0x0]['items'][_0x5aa7e3][_0x43e080(0x3ce)][0x0][_0x43e080(0x2f5)], _0x391fd7[_0x43e080(0x392)] && (_0x43cf32 = _0x32203c[_0x43e080(0x219)]['reels_media'][0x0][_0x43e080(0x36c)][_0x5aa7e3]['taken_at_timestamp']));
                            }));
                        }
                        _0x2f41c7[_0x333e1c(0x2db)][_0x1b45f9] = _0x32203c;
                    }
                    _0x13afd4[_0x333e1c(0x267)] == 0x0 ? alert(_0x399229(_0x333e1c(0x3d0))) : _0x22c65c ? _0x177725(_0x13afd4) : _0x4a027b(_0x13afd4, _0x1b45f9, _0x333e1c(0x2db), _0x43cf32, _0x30beb5);
                } else {
                    let _0x23f5b9 = _0x5bc733(_0x333e1c(0x327))[_0x333e1c(0x1e4)](_0x333e1c(0x331))?.[_0x333e1c(0x3df)](',')[0x0]?.[_0x333e1c(0x3df)]('\x20')[0x0], _0x1087c7 = _0x23f5b9 ? _0x23f5b9 : _0x5bc733('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0x333e1c(0x1e4)](_0x333e1c(0x2f5));
                    if (!_0x1087c7) {
                        let _0x5938a8 = _0x5bc733('body\x20>\x20div\x20section:visible\x20img._aa63');
                        _0x1087c7 = _0x5938a8[_0x333e1c(0x1e4)](_0x333e1c(0x331)) ? _0x5938a8[_0x333e1c(0x1e4)](_0x333e1c(0x331))?.[_0x333e1c(0x3df)](',')[0x0]?.[_0x333e1c(0x3df)]('\x20')[0x0] : _0x5938a8[_0x333e1c(0x1e4)](_0x333e1c(0x2f5));
                    }
                    _0x391fd7['RENAME_PUBLISH_DATE'] && (_0x43cf32 = new Date(_0x5bc733(_0x333e1c(0x418))[_0x333e1c(0x20e)]()['attr']('datetime'))[_0x333e1c(0x2f6)]());
                    let _0x2681c3 = _0x1087c7, _0x2b8ced = _0x333e1c(0x2dc);
                    _0x22c65c ? _0x177725(_0x2681c3) : _0x4a027b(_0x2681c3, _0x1b45f9, _0x333e1c(0x2db), _0x43cf32, _0x2b8ced);
                }
                _0x5804a8 = ![], _0x55c6f2(![]);
            } else {
                let _0x3f68d4 = 'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;';
                if (!_0x5bc733('.IG_DWSTORY')[_0x333e1c(0x267)]) {
                    _0x2f41c7[_0x333e1c(0x2db)] = {};
                    let _0x51d13e = null;
                    _0x5bc733(_0x333e1c(0x23f))['length'] > 0x0 ? _0x51d13e = _0x5bc733(_0x333e1c(0x3fd)) : (_0x51d13e = _0x5bc733(_0x333e1c(0x2bd)), _0x51d13e[_0x333e1c(0x1fd)](_0x333e1c(0x3e0), _0x333e1c(0x230)));
                    _0x51d13e[_0x333e1c(0x267)] === 0x0 && (_0x51d13e = _0x5bc733(_0x333e1c(0x263))[_0x333e1c(0x1f4)]()[_0x333e1c(0x1f4)]()[_0x333e1c(0x1f4)]()[_0x333e1c(0x236)](_0x333e1c(0x3ba)), _0x51d13e[_0x333e1c(0x1fd)]('position', _0x333e1c(0x230)));
                    _0x51d13e[_0x333e1c(0x267)] === 0x0 && (_0x51d13e = _0x5bc733(_0x333e1c(0x263))[_0x333e1c(0x1f4)]()[_0x333e1c(0x1f4)]()[_0x333e1c(0x1f4)]()[_0x333e1c(0x236)](_0x333e1c(0x3b8)), _0x51d13e[_0x333e1c(0x1fd)](_0x333e1c(0x3e0), _0x333e1c(0x230)));
                    if (_0x51d13e[_0x333e1c(0x267)] === 0x0) {
                        let _0x18c846 = _0x5bc733('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x3b5dad = 0x0;
                        _0x18c846[_0x333e1c(0x291)](function () {
                            const _0x40b8ce = _0x333e1c;
                            _0x5bc733(this)['width']() > _0x3b5dad && (_0x3b5dad = _0x5bc733(this)[_0x40b8ce(0x21d)](), _0x51d13e = _0x5bc733(this)['children'](_0x40b8ce(0x1e8))[_0x40b8ce(0x20e)]());
                        });
                    }
                    _0x51d13e != null && (_0x51d13e[_0x333e1c(0x20e)]()[_0x333e1c(0x1fd)](_0x333e1c(0x3e0), _0x333e1c(0x230)), _0x51d13e['first']()['append'](_0x333e1c(0x3e7) + _0x399229('DW') + _0x333e1c(0x1ee) + _0x371664[_0x333e1c(0x432)] + '</div>'), _0x51d13e[_0x333e1c(0x20e)]()[_0x333e1c(0x262)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x399229('NEW_TAB') + _0x333e1c(0x372) + _0x371664[_0x333e1c(0x271)] + _0x333e1c(0x3fe)), _0x391fd7[_0x333e1c(0x28b)] && _0x51d13e[_0x333e1c(0x236)](_0x333e1c(0x34c))[_0x333e1c(0x291)](function () {
                        const _0x43dbf8 = _0x333e1c;
                        !_0x5bc733(this)[_0x43dbf8(0x219)](_0x43dbf8(0x24b)) && (_0x446061(_0x43dbf8(0x2c3)), this[_0x43dbf8(0x3e4)] = _0x355a0d, _0x5bc733(this)['on'](_0x43dbf8(0x22c), function () {
                            const _0x4aec25 = _0x43dbf8;
                            this[_0x4aec25(0x3e4)] = _0x355a0d;
                        }), _0x5bc733(this)['on']('playing', function () {
                            this['volume'] = _0x355a0d;
                        }), _0x5bc733(this)[_0x43dbf8(0x1e4)]('data-modify', !![]));
                    }), _0x51d13e[_0x333e1c(0x236)]('video')['each'](function () {
                        const _0x38ca34 = _0x333e1c;
                        !_0x5bc733(this)[_0x38ca34(0x219)](_0x38ca34(0x367)) && (_0x446061(_0x38ca34(0x266)), _0x5bc733(this)['on'](_0x38ca34(0x202), function () {
                            const _0x4e6909 = _0x38ca34;
                            _0x51d13e[_0x4e6909(0x236)]('.IG_DWSTORY_THUMBNAIL')['length'] === 0x0 && _0x5f0c57(![]);
                        }), _0x5bc733(this)[_0x38ca34(0x1e4)](_0x38ca34(0x3ca), !![]));
                    }), _0x5f0c57(![]));
                }
            }
        }
        async function _0x5f0c57(_0x22fbfc, _0x25eafc) {
            const _0x25eb11 = _0x11e903;
            if (_0x22fbfc) {
                let _0x1921a6 = new Date()[_0x25eb11(0x2f6)](), _0x5e8f63 = Math[_0x25eb11(0x2a9)](_0x1921a6 / 0x3e8), _0x20b0a1 = _0x25eb11(0x2dc), _0x3095fa = _0x5bc733(_0x25eb11(0x422))[_0x25eb11(0x20e)]()[_0x25eb11(0x351)]() || location[_0x25eb11(0x25d)]['split']('/')['at'](0x2), _0x3d3e70 = _0x25eb11(0x2ac), _0xd01e14 = location[_0x25eb11(0x25d)][_0x25eb11(0x3a7)](/\/$/ig, '')[_0x25eb11(0x3df)]('/')['at'](-0x1), _0xa131ef = '';
                _0x55c6f2(!![]);
                if (_0x391fd7[_0x25eb11(0x3cd)] && !_0x5804a8) {
                    let _0x5b0ded = null, _0x444ab0 = await _0x571932(_0x3095fa), _0x3a38c4 = _0x444ab0[_0x25eb11(0x39b)]['pk'], _0x4461d9 = await _0x46871e(_0x3a38c4), _0x4cfa2 = location[_0x25eb11(0x25d)][_0x25eb11(0x3df)]('/')[_0x25eb11(0x217)](_0x1aad69 => _0x1aad69[_0x25eb11(0x267)] > 0x0 && _0x1aad69[_0x25eb11(0x28a)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x4461d9[_0x25eb11(0x219)]['reels_media'][0x0][_0x25eb11(0x36c)][_0x25eb11(0x339)](_0x3bf894 => {
                        _0x3bf894['id'] == _0x4cfa2 && (_0x5b0ded = _0x3bf894['id']);
                    });
                    if (_0x5b0ded == null) {
                        let _0x37ed03 = _0x5bc733('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x3095fa + _0x25eb11(0x3a0))[_0x25eb11(0x217)](function () {
                            const _0xb89538 = _0x25eb11;
                            return _0x5bc733(this)[_0xb89538(0x2ab)]()[_0xb89538(0x267)] === 0x0 && _0x5bc733(this)[_0xb89538(0x236)](_0xb89538(0x354))[_0xb89538(0x267)] === 0x0 && _0x5bc733(this)[_0xb89538(0x351)]()?.[_0xb89538(0x32c)]() === _0x3095fa?.['toLowerCase']();
                        })[_0x25eb11(0x231)](_0x25eb11(0x320))[_0x25eb11(0x217)](function () {
                            const _0x4eab73 = _0x25eb11;
                            return _0x5bc733(this)[_0x4eab73(0x351)]()?.[_0x4eab73(0x32c)]() !== _0x3095fa?.[_0x4eab73(0x32c)]();
                        })[_0x25eb11(0x217)](function () {
                            const _0x45b503 = _0x25eb11;
                            return _0x5bc733(this)[_0x45b503(0x2ab)]()[_0x45b503(0x267)] > 0x1;
                        })['first']();
                        _0x37ed03['children']()[_0x25eb11(0x217)](function () {
                            const _0x5d994a = _0x25eb11;
                            return _0x5bc733(this)[_0x5d994a(0x224)]() < 0xa;
                        })['first']()[_0x25eb11(0x2ab)]()[_0x25eb11(0x291)](function (_0x4bf71f) {
                            const _0x1d2774 = _0x25eb11;
                            _0x5bc733(this)[_0x1d2774(0x2ab)]()['length'] > 0x0 && (_0x5b0ded = _0x4461d9[_0x1d2774(0x219)][_0x1d2774(0x3c2)][0x0]['items'][_0x4bf71f]['id']);
                        });
                    }
                    _0x5b0ded == null && (_0x5bc733(_0x25eb11(0x249))[_0x25eb11(0x291)](function (_0x4fa711) {
                        const _0x1858e8 = _0x25eb11;
                        _0x5bc733(this)['hasClass'](_0x1858e8(0x385)) && (_0x5bc733(this)['children']()[_0x1858e8(0x267)] > 0x0 && (_0x5b0ded = _0x4461d9['data'][_0x1858e8(0x3c2)][0x0][_0x1858e8(0x36c)][_0x4fa711]['id']));
                    }), _0x5bc733(_0x25eb11(0x2b3))[_0x25eb11(0x291)](function (_0x5b917e) {
                        const _0x9e911b = _0x25eb11;
                        _0x5bc733(this)[_0x9e911b(0x2ab)]()['hasClass'](_0x9e911b(0x31b)) && (_0x5b0ded = _0x4461d9[_0x9e911b(0x219)]['reels_media'][0x0][_0x9e911b(0x36c)][_0x5b917e]['id']);
                    }));
                    _0x5b0ded == null && (_0x5b0ded = location['pathname'][_0x25eb11(0x3df)]('/')[_0x25eb11(0x217)](_0x53fd4c => _0x53fd4c[_0x25eb11(0x267)] > 0x0 && _0x53fd4c[_0x25eb11(0x28a)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x4e13e8 = await _0x442557(_0x5b0ded);
                    _0x391fd7[_0x25eb11(0x392)] && (_0x5e8f63 = _0x4e13e8['items'][0x0][_0x25eb11(0x326)]);
                    _0x4e13e8[_0x25eb11(0x26a)] === 'ok' ? _0x4a027b(_0x4e13e8[_0x25eb11(0x36c)][0x0][_0x25eb11(0x2b0)][_0x25eb11(0x277)][0x0]['url'], _0x3095fa, _0x25eb11(0x2db), _0x5e8f63, _0x25eb11(0x2dc)) : (_0x391fd7[_0x25eb11(0x376)] ? (_0x5804a8 = !![], _0x5f0c57(!![], _0x25eafc)) : alert(_0x25eb11(0x33c) + _0x4e13e8['message']), _0x446061(_0x4e13e8));
                    _0x55c6f2(![]);
                    return;
                }
                if (_0x2f41c7[_0x25eb11(0x2db)][_0x3095fa] && !_0x25eafc) {
                    _0x446061(_0x25eb11(0x3c9), _0x3095fa), _0x2f41c7[_0x25eb11(0x2db)][_0x3095fa][_0x25eb11(0x219)][_0x25eb11(0x3c2)][0x0]['items'][_0x25eb11(0x339)](_0x508e7b => {
                        const _0x22d243 = _0x25eb11;
                        _0x508e7b['id'] == _0xd01e14 && (_0xa131ef = _0x508e7b[_0x22d243(0x3ae)], _0x391fd7[_0x22d243(0x392)] && (_0x5e8f63 = _0x508e7b[_0x22d243(0x41c)]));
                    });
                    if (_0xa131ef[_0x25eb11(0x267)] == 0x0) {
                        _0x446061(_0x25eb11(0x2d1), _0x3095fa), _0x5f0c57(!![], !![]);
                        return;
                    }
                } else {
                    let _0x50ac77 = await _0x571932(_0x3095fa), _0x435307 = _0x50ac77['user']['pk'], _0x28853b = await _0x46871e(_0x435307);
                    _0x28853b[_0x25eb11(0x219)]['reels_media'][0x0][_0x25eb11(0x36c)][_0x25eb11(0x339)](_0x1733f1 => {
                        const _0x3f8fce = _0x25eb11;
                        _0x1733f1['id'] == _0xd01e14 && (_0xa131ef = _0x1733f1['display_url'], _0x391fd7[_0x3f8fce(0x392)] && (_0x5e8f63 = _0x1733f1[_0x3f8fce(0x41c)]));
                    });
                    if (_0xa131ef[_0x25eb11(0x267)] == 0x0) {
                        let _0x3dd262 = _0x5bc733(_0x25eb11(0x395) + _0x3095fa + _0x25eb11(0x3a0))[_0x25eb11(0x217)](function () {
                            const _0x3d5433 = _0x25eb11;
                            return _0x5bc733(this)[_0x3d5433(0x2ab)]()['length'] === 0x0 && _0x5bc733(this)[_0x3d5433(0x236)](_0x3d5433(0x354))[_0x3d5433(0x267)] === 0x0 && _0x5bc733(this)[_0x3d5433(0x351)]()?.[_0x3d5433(0x32c)]() === _0x3095fa?.[_0x3d5433(0x32c)]();
                        })[_0x25eb11(0x231)](_0x25eb11(0x320))[_0x25eb11(0x217)](function () {
                            const _0x65436f = _0x25eb11;
                            return _0x5bc733(this)[_0x65436f(0x351)]()?.[_0x65436f(0x32c)]() !== _0x3095fa?.[_0x65436f(0x32c)]();
                        })[_0x25eb11(0x217)](function () {
                            const _0x6a609f = _0x25eb11;
                            return _0x5bc733(this)['children']()[_0x6a609f(0x267)] > 0x1;
                        })[_0x25eb11(0x20e)]();
                        _0x3dd262['children']()[_0x25eb11(0x217)](function () {
                            const _0x2625ae = _0x25eb11;
                            return _0x5bc733(this)[_0x2625ae(0x224)]() < 0xa;
                        })[_0x25eb11(0x20e)]()[_0x25eb11(0x2ab)]()[_0x25eb11(0x291)](function (_0x2a8e9f) {
                            const _0x47bebb = _0x25eb11;
                            _0x5bc733(this)['children']()[_0x47bebb(0x267)] > 0x0 && (_0xa131ef = _0x28853b[_0x47bebb(0x219)]['reels_media'][0x0][_0x47bebb(0x36c)][_0x2a8e9f][_0x47bebb(0x3ae)], _0x391fd7[_0x47bebb(0x392)] && (_0x5e8f63 = _0x28853b[_0x47bebb(0x219)]['reels_media'][0x0][_0x47bebb(0x36c)][_0x2a8e9f][_0x47bebb(0x41c)]));
                        }), _0xa131ef[_0x25eb11(0x267)] == 0x0 && (_0x5bc733(_0x25eb11(0x249))['each'](function (_0x2a558a) {
                            const _0x13564a = _0x25eb11;
                            _0x5bc733(this)[_0x13564a(0x414)]('x1lix1fw') && (_0x5bc733(this)[_0x13564a(0x2ab)]()['length'] > 0x0 && (_0xa131ef = _0x28853b['data']['reels_media'][0x0][_0x13564a(0x36c)][_0x2a558a][_0x13564a(0x3ae)], _0x391fd7[_0x13564a(0x392)] && (_0x5e8f63 = _0x28853b[_0x13564a(0x219)][_0x13564a(0x3c2)][0x0]['items'][_0x2a558a][_0x13564a(0x41c)])));
                        }), _0x5bc733('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')['each'](function (_0x27921f) {
                            const _0x37c9b4 = _0x25eb11;
                            _0x5bc733(this)['children']()[_0x37c9b4(0x414)](_0x37c9b4(0x31b)) && (_0xa131ef = _0x28853b[_0x37c9b4(0x219)]['reels_media'][0x0]['items'][_0x27921f][_0x37c9b4(0x3ae)], _0x391fd7[_0x37c9b4(0x392)] && (_0x5e8f63 = _0x28853b[_0x37c9b4(0x219)][_0x37c9b4(0x3c2)][0x0]['items'][_0x27921f][_0x37c9b4(0x41c)]));
                        }));
                    }
                }
                _0x4a027b(_0xa131ef, _0x3095fa, 'thumbnail', _0x5e8f63, _0x20b0a1), _0x5804a8 = ![], _0x55c6f2(![]);
            } else {
                if (_0x5bc733(_0x25eb11(0x218))['parent']()[_0x25eb11(0x236)](_0x25eb11(0x233))[_0x25eb11(0x267)]) {
                    let _0x331a96 = null;
                    _0x5bc733('body\x20>\x20div\x20section._ac0a')[_0x25eb11(0x267)] > 0x0 ? _0x331a96 = _0x5bc733('body\x20>\x20div\x20section:visible._ac0a') : (_0x331a96 = _0x5bc733(_0x25eb11(0x2bd)), _0x331a96['css'](_0x25eb11(0x3e0), 'relative'));
                    _0x331a96[_0x25eb11(0x267)] === 0x0 && (_0x331a96 = _0x5bc733(_0x25eb11(0x263))[_0x25eb11(0x1f4)]()[_0x25eb11(0x1f4)]()[_0x25eb11(0x1f4)]()[_0x25eb11(0x236)](_0x25eb11(0x3ba)), _0x331a96[_0x25eb11(0x1fd)](_0x25eb11(0x3e0), _0x25eb11(0x230)));
                    _0x331a96[_0x25eb11(0x267)] === 0x0 && (_0x331a96 = _0x5bc733(_0x25eb11(0x263))[_0x25eb11(0x1f4)]()['parent']()[_0x25eb11(0x1f4)]()[_0x25eb11(0x236)](_0x25eb11(0x3b8)), _0x331a96[_0x25eb11(0x1fd)](_0x25eb11(0x3e0), _0x25eb11(0x230)));
                    if (_0x331a96[_0x25eb11(0x267)] === 0x0) {
                        let _0x226e50 = _0x5bc733('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x88561c = 0x0;
                        _0x226e50[_0x25eb11(0x291)](function () {
                            const _0x1a6983 = _0x25eb11;
                            _0x5bc733(this)['width']() > _0x88561c && (_0x88561c = _0x5bc733(this)[_0x1a6983(0x21d)](), _0x331a96 = _0x5bc733(this)['children'](_0x1a6983(0x1e8))['first']());
                        });
                    }
                    _0x331a96 != null && (_0x331a96[_0x25eb11(0x20e)]()['css'](_0x25eb11(0x3e0), _0x25eb11(0x230)), _0x331a96[_0x25eb11(0x20e)]()[_0x25eb11(0x262)](_0x25eb11(0x384) + _0x399229('THUMBNAIL_INTRO') + _0x25eb11(0x363) + _0x371664[_0x25eb11(0x205)] + _0x25eb11(0x3fe)));
                }
            }
        }
        async function _0x37d73d(_0x398ae3, _0x1df537, _0x2ff787) {
            const _0x136552 = _0x11e903;
            if (_0x398ae3) {
                _0x55c6f2(!![]);
                let _0x2d9365 = location[_0x136552(0x40d)][_0x136552(0x3df)]('?')['at'](0x0)[_0x136552(0x3df)](_0x136552(0x3bc))['at'](-0x1)[_0x136552(0x3c4)]('/', ''), _0x4a1f8f = await _0x186cd4(_0x2d9365), _0xbfd0ac = _0x4a1f8f['data'], _0x5edc19 = new Date()[_0x136552(0x2f6)]();
                _0x391fd7[_0x136552(0x392)] && (_0x4a1f8f[_0x136552(0x424)] === _0x136552(0x23b) ? _0x5edc19 = _0xbfd0ac[_0x136552(0x361)][_0x136552(0x41c)] : _0x5edc19 = _0xbfd0ac['taken_at']);
                if (_0x4a1f8f[_0x136552(0x424)] === 'query_hash') {
                    if (_0x1df537 && _0xbfd0ac[_0x136552(0x361)][_0x136552(0x276)]) {
                        if (_0x2ff787)
                            _0x177725(_0xbfd0ac[_0x136552(0x361)]['video_url']);
                        else {
                            let _0xac21ba = _0x136552(0x3fa);
                            _0x4a027b(_0xbfd0ac[_0x136552(0x361)][_0x136552(0x3ed)], _0xbfd0ac['shortcode_media'][_0x136552(0x420)][_0x136552(0x3e9)], _0x136552(0x245), _0x5edc19, _0xac21ba, _0x2d9365);
                        }
                    } else {
                        if (_0x2ff787)
                            _0x177725(_0xbfd0ac[_0x136552(0x361)][_0x136552(0x2c9)]['at'](-0x1)[_0x136552(0x2f5)]);
                        else {
                            let _0x408830 = 'jpg';
                            _0x4a027b(_0xbfd0ac[_0x136552(0x361)][_0x136552(0x2c9)]['at'](-0x1)[_0x136552(0x2f5)], _0xbfd0ac[_0x136552(0x361)]['owner'][_0x136552(0x3e9)], 'reels', _0x5edc19, _0x408830, _0x2d9365);
                        }
                    }
                } else {
                    if (_0x1df537 && _0xbfd0ac[_0x136552(0x334)] != null) {
                        if (_0x2ff787)
                            _0x177725(_0xbfd0ac[_0x136552(0x334)][0x0][_0x136552(0x24f)]);
                        else {
                            let _0x3f5978 = _0x136552(0x3fa);
                            _0x4a027b(_0xbfd0ac[_0x136552(0x334)][0x0][_0x136552(0x24f)], _0xbfd0ac[_0x136552(0x420)][_0x136552(0x3e9)], _0x136552(0x245), _0x5edc19, _0x3f5978, _0x2d9365);
                        }
                    } else {
                        if (_0x2ff787)
                            _0x177725(_0xbfd0ac[_0x136552(0x2b0)]['candidates'][0x0]['url']);
                        else {
                            let _0x5521b2 = 'jpg';
                            _0x4a027b(_0xbfd0ac[_0x136552(0x2b0)]['candidates'][0x0][_0x136552(0x24f)], _0xbfd0ac[_0x136552(0x420)][_0x136552(0x3e9)], 'reels', _0x5edc19, _0x5521b2, _0x2d9365);
                        }
                    }
                }
                _0x55c6f2(![]);
            } else
                var _0x2bde52 = setInterval(() => {
                    const _0x582f24 = _0x136552;
                    _0x5bc733('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')['length'] > 0x0 && (clearInterval(_0x2bde52), _0x391fd7[_0x582f24(0x294)] && (_0x5bc733(_0x582f24(0x352))[_0x582f24(0x359)](), _0x5bc733(_0x582f24(0x1f8))['append'](_0x582f24(0x34d)), _0x5bc733(_0x582f24(0x3fb))['append'](_0x582f24(0x1f2)), _0x5bc733(_0x582f24(0x3fb))[_0x582f24(0x262)]('<div\x20class=\x22button-down\x22><div></div></div>'), _0x5bc733(_0x582f24(0x27f))['on'](_0x582f24(0x35c), function () {
                        const _0x5db89e = _0x582f24;
                        _0x5bc733(_0x5db89e(0x41a))[0x0][_0x5db89e(0x3e6)]({
                            'top': -0x1e,
                            'behavior': 'smooth'
                        });
                    }), _0x5bc733(_0x582f24(0x26e))['on'](_0x582f24(0x35c), function () {
                        const _0x42336b = _0x582f24;
                        _0x5bc733(_0x42336b(0x41a))[0x0][_0x42336b(0x3e6)]({
                            'top': 0x1e,
                            'behavior': _0x42336b(0x239)
                        });
                    })), _0x5bc733(_0x582f24(0x2e1))['children'](_0x582f24(0x1e8))[_0x582f24(0x291)](function () {
                        const _0x1319ec = _0x582f24;
                        if (_0x5bc733(this)[_0x1319ec(0x2ab)]()[_0x1319ec(0x267)] > 0x0) {
                            if (!_0x5bc733(this)[_0x1319ec(0x2ab)]()['find'](_0x1319ec(0x24e))[_0x1319ec(0x267)]) {
                                var _0x5584e5 = _0x5bc733(this);
                                _0x5bc733(this)['children']()[_0x1319ec(0x1fd)](_0x1319ec(0x3e0), _0x1319ec(0x230)), _0x5bc733(this)[_0x1319ec(0x2ab)]()[_0x1319ec(0x262)](_0x1319ec(0x3e7) + _0x399229('DW') + _0x1319ec(0x41e) + _0x371664[_0x1319ec(0x432)] + _0x1319ec(0x3fe)), _0x5bc733(this)[_0x1319ec(0x2ab)]()[_0x1319ec(0x262)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x399229(_0x1319ec(0x271)) + _0x1319ec(0x3e5) + _0x371664[_0x1319ec(0x271)] + '</div>'), _0x5bc733(this)[_0x1319ec(0x2ab)]()[_0x1319ec(0x262)](_0x1319ec(0x384) + _0x399229('THUMBNAIL_INTRO') + _0x1319ec(0x1e3) + _0x371664[_0x1319ec(0x205)] + _0x1319ec(0x3fe));
                                _0x391fd7[_0x1319ec(0x2bf)] && _0x5bc733(this)['find'](_0x1319ec(0x34c))[_0x1319ec(0x291)](function () {
                                    const _0x22e8e5 = _0x1319ec;
                                    !_0x5bc733(this)['data']('loop') && (_0x446061(_0x22e8e5(0x39d)), _0x5bc733(this)['on'](_0x22e8e5(0x434), function () {
                                        const _0x282593 = _0x22e8e5;
                                        _0x5bc733(this)[_0x282593(0x1e4)](_0x282593(0x2c8), !![]);
                                        let _0x47e274 = _0x5bc733(this)[_0x282593(0x32f)]()[_0x282593(0x236)](_0x282593(0x3c0))[_0x282593(0x231)](_0x282593(0x2bb));
                                        _0x47e274[_0x282593(0x267)] > 0x0 ? (_0x47e274[_0x282593(0x35c)](), _0x446061('paused\x20click()')) : (_0x5bc733(this)['parent']()['find']('.xpgaw4o')[_0x282593(0x41b)](_0x282593(0x413)), this[_0x282593(0x36e)](), _0x446061(_0x282593(0x211)));
                                    }));
                                });
                                _0x391fd7[_0x1319ec(0x28b)] && _0x5bc733(this)['find'](_0x1319ec(0x34c))[_0x1319ec(0x291)](function () {
                                    const _0x3140a7 = _0x1319ec;
                                    !_0x5bc733(this)['data'](_0x3140a7(0x24b)) && (_0x446061(_0x3140a7(0x316)), this[_0x3140a7(0x3e4)] = _0x355a0d, _0x5bc733(this)['on'](_0x3140a7(0x22c), function () {
                                        const _0x4d93fa = _0x3140a7;
                                        this[_0x4d93fa(0x3e4)] = _0x355a0d;
                                    }), _0x5bc733(this)['on']('playing', function () {
                                        const _0xfb490 = _0x3140a7;
                                        this[_0xfb490(0x3e4)] = _0x355a0d;
                                    }), _0x5bc733(this)['attr'](_0x3140a7(0x20b), !![]));
                                });
                                _0x391fd7[_0x1319ec(0x368)] && _0x5bc733(this)['find']('video')[_0x1319ec(0x291)](function () {
                                    const _0x5c8f36 = _0x1319ec;
                                    if (!_0x5bc733(this)[_0x5c8f36(0x219)]('controls')) {
                                        let _0x255594 = _0x5bc733(this);
                                        _0x446061(_0x5c8f36(0x314)), this['volume'] = _0x355a0d, _0x5bc733(this)['on']('loadstart', function () {
                                            const _0x45c94b = _0x5c8f36;
                                            this[_0x45c94b(0x3e4)] = _0x355a0d;
                                        }), _0x5bc733(this)['on'](_0x5c8f36(0x241), function (_0x53286f) {
                                            const _0x49196e = _0x5c8f36;
                                            _0x53286f[_0x49196e(0x288)](), _0x255594[_0x49196e(0x1fd)](_0x49196e(0x42f), '-1'), _0x255594['removeAttr']('controls');
                                        }), _0x5bc733(this)[_0x5c8f36(0x1f4)]()[_0x5c8f36(0x236)](_0x5c8f36(0x2d8))[_0x5c8f36(0x217)](function () {
                                            const _0x16a432 = _0x5c8f36;
                                            return _0x5bc733(this)[_0x16a432(0x1f4)]('div[role=\x22presentation\x22]')['length'] > 0x0 && _0x5bc733(this)[_0x16a432(0x1fd)](_0x16a432(0x226)) === 'pointer' && _0x5bc733(this)[_0x16a432(0x1e4)](_0x16a432(0x413)) != null;
                                        })[_0x5c8f36(0x20e)]()['on']('contextmenu', function (_0x3b2833) {
                                            const _0x261b7c = _0x5c8f36;
                                            _0x3b2833[_0x261b7c(0x288)](), _0x255594[_0x261b7c(0x1fd)](_0x261b7c(0x42f), '2'), _0x255594[_0x261b7c(0x1e4)](_0x261b7c(0x207), !![]);
                                        }), _0x5bc733(this)['on']('volumechange', function () {
                                            const _0xabc6bf = _0x5c8f36;
                                            let _0x57267b = _0x5bc733(this)[_0xabc6bf(0x1f4)]()[_0xabc6bf(0x236)](_0xabc6bf(0x29a))[_0xabc6bf(0x236)](_0xabc6bf(0x402))[_0xabc6bf(0x217)](function (_0xcefc31) {
                                                const _0x1e8cf8 = _0xabc6bf;
                                                return _0x5bc733(this)[_0x1e8cf8(0x21d)]() <= 0x40 && _0x5bc733(this)['height']() <= 0x40 && _0x5bc733(this)[_0x1e8cf8(0x236)](_0x1e8cf8(0x2fe))[_0x1e8cf8(0x267)] > 0x0;
                                            });
                                            var _0x1a0335 = _0x57267b[_0xabc6bf(0x236)](_0xabc6bf(0x2c5))[_0xabc6bf(0x267)] === 0x0;
                                            this[_0xabc6bf(0x411)] != _0x1a0335 && (this[_0xabc6bf(0x3e4)] = _0x355a0d, _0x57267b?.[_0xabc6bf(0x35c)]()), _0x5bc733(this)[_0xabc6bf(0x1e4)](_0xabc6bf(0x3b1)) && (_0x355a0d = this['volume'], GM_setValue('G_VIDEO_VOLUME', this[_0xabc6bf(0x3e4)])), this['volume'] == _0x355a0d && _0x5bc733(this)[_0xabc6bf(0x1e4)](_0xabc6bf(0x3b1), !![]);
                                        }), _0x5bc733(this)['css'](_0x5c8f36(0x3e0), _0x5c8f36(0x31a)), _0x5bc733(this)['css']('z-index', '2'), _0x5bc733(this)[_0x5c8f36(0x1e4)](_0x5c8f36(0x377), !![]), _0x5bc733(this)[_0x5c8f36(0x1e4)](_0x5c8f36(0x207), !![]);
                                    }
                                });
                                var _0x13045b = _0x5bc733(this)[_0x1319ec(0x236)](_0x1319ec(0x2e3))[_0x1319ec(0x20e)]();
                                _0x13045b[_0x1319ec(0x262)](_0x1319ec(0x246)), _0x13045b['find'](_0x1319ec(0x409))[_0x1319ec(0x262)](_0x1319ec(0x257) + _0x355a0d + '\x22\x20/></div>'), _0x13045b[_0x1319ec(0x236)](_0x1319ec(0x2f9))[_0x1319ec(0x1e4)](_0x1319ec(0x413), _0x1319ec(0x30f) + (_0x355a0d * 0x64 + '%')), _0x13045b['find'](_0x1319ec(0x2f9))['on'](_0x1319ec(0x356), function () {
                                    const _0x406cbc = _0x1319ec;
                                    var _0x14fbbc = _0x5bc733(this)[_0x406cbc(0x315)]() * 0x64 + '%';
                                    _0x355a0d = _0x5bc733(this)['val'](), GM_setValue('G_VIDEO_VOLUME', _0x5bc733(this)[_0x406cbc(0x315)]()), _0x5bc733(this)[_0x406cbc(0x1e4)](_0x406cbc(0x413), _0x406cbc(0x30f) + _0x14fbbc), _0x5584e5['find'](_0x406cbc(0x34c))[_0x406cbc(0x291)](function () {
                                        const _0x109172 = _0x406cbc;
                                        _0x446061('(reel)\x20video\x20volume\x20changed\x20#slider'), this[_0x109172(0x3e4)] = _0x355a0d;
                                    });
                                }), _0x13045b['find'](_0x1319ec(0x2f9))['on']('mouseenter', function () {
                                    const _0x3261d0 = _0x1319ec;
                                    var _0x1ff2fc = _0x355a0d * 0x64 + '%';
                                    _0x5bc733(this)[_0x3261d0(0x1e4)](_0x3261d0(0x413), _0x3261d0(0x30f) + _0x1ff2fc), _0x5bc733(this)['val'](_0x355a0d), _0x5584e5[_0x3261d0(0x236)](_0x3261d0(0x34c))[_0x3261d0(0x291)](function () {
                                        const _0x47e25d = _0x3261d0;
                                        _0x446061('(reel)\x20video\x20volume\x20changed\x20#slider'), this[_0x47e25d(0x3e4)] = _0x355a0d;
                                    });
                                }), _0x13045b[_0x1319ec(0x236)](_0x1319ec(0x409))['on'](_0x1319ec(0x35c), function (_0x10c12a) {
                                    _0x10c12a['stopPropagation'](), _0x10c12a['preventDefault']();
                                });
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x28ef96(_0x51da44) {
            return new Promise((_0x2c49ed, _0x1797ab) => {
                const _0x4f750a = a0_0x4c28;
                let _0xdb3f71 = 'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22' + _0x51da44 + _0x4f750a(0x42a);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0xdb3f71,
                    'onload': function (_0x124584) {
                        const _0x9d194c = _0x4f750a;
                        try {
                            let _0x5c8a87 = JSON[_0x9d194c(0x408)](_0x124584[_0x9d194c(0x214)]);
                            _0x2c49ed(_0x5c8a87);
                        } catch (_0x5b95a5) {
                            _0x446061(_0x9d194c(0x299), 'reject', _0x5b95a5['message']), _0x1797ab(_0x5b95a5);
                        }
                    },
                    'onerror': function (_0x29017b) {
                        _0x446061('getHighlightStories()', 'reject', _0x29017b), _0x1797ab(_0x29017b);
                    }
                });
            });
        }
        function _0x46871e(_0x41688e) {
            return new Promise((_0x143647, _0x521b14) => {
                const _0x3eaa17 = a0_0x4c28;
                let _0x383360 = _0x3eaa17(0x3f3) + _0x41688e + _0x3eaa17(0x42a);
                GM_xmlhttpRequest({
                    'method': _0x3eaa17(0x364),
                    'url': _0x383360,
                    'onload': function (_0xf202b4) {
                        const _0x3dd3ac = _0x3eaa17;
                        try {
                            let _0xb5f9c0 = JSON['parse'](_0xf202b4[_0x3dd3ac(0x214)]);
                            _0x446061(_0x3dd3ac(0x3a6), _0xb5f9c0), _0x143647(_0xb5f9c0);
                        } catch (_0xf33a3e) {
                            _0x446061(_0x3dd3ac(0x3a6), _0x3dd3ac(0x2ed), _0xf33a3e['message']), _0x521b14(_0xf33a3e);
                        }
                    },
                    'onerror': function (_0x24b324) {
                        const _0x25ab2e = _0x3eaa17;
                        _0x446061(_0x25ab2e(0x3a6), _0x25ab2e(0x2ed), _0x24b324), _0x521b14(_0x24b324);
                    }
                });
            });
        }
        function _0x571932(_0x2e2c22) {
            return new Promise((_0x134233, _0x954baf) => {
                const _0x40b92c = a0_0x4c28;
                let _0x12aa44 = _0x40b92c(0x29c) + _0x2e2c22;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x12aa44,
                    'onload': function (_0xb2cef7) {
                        const _0x5bd928 = _0x40b92c;
                        let _0xa72411 = JSON[_0x5bd928(0x408)](_0xb2cef7[_0x5bd928(0x214)]), _0x110a06 = null;
                        _0xa72411[_0x5bd928(0x22b)][_0x5bd928(0x339)](_0x3fc376 => {
                            const _0x2b4d47 = _0x5bd928;
                            _0x3fc376['user'][_0x2b4d47(0x3e9)]?.['toLowerCase']() === _0x2e2c22?.[_0x2b4d47(0x32c)]() && (_0x110a06 = _0x3fc376);
                        }), _0x110a06 != null ? (_0x446061(_0x5bd928(0x403), _0x110a06), _0x134233(_0x110a06)) : _0x2ada07(_0x2e2c22)[_0x5bd928(0x28e)](_0x2f946d => {
                            _0x134233(_0x2f946d);
                        })[_0x5bd928(0x40c)](_0x2e379c => {
                            const _0x365a5b = _0x5bd928;
                            alert(_0x365a5b(0x415));
                        });
                    },
                    'onerror': function (_0x320fcb) {
                        const _0x3495e3 = _0x40b92c;
                        _0x446061(_0x3495e3(0x403), _0x3495e3(0x2ed), _0x320fcb), _0x954baf(_0x320fcb);
                    }
                });
            });
        }
        function _0x2ada07(_0x30fc24) {
            return new Promise((_0x3275e1, _0x48d2c6) => {
                const _0x2dfdde = a0_0x4c28;
                let _0x52ecc3 = _0x2dfdde(0x213) + _0x30fc24;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x52ecc3,
                    'headers': { 'X-IG-App-ID': _0x1b24a2() },
                    'onload': function (_0x784f51) {
                        const _0x11d0f0 = _0x2dfdde;
                        try {
                            let _0xf9bcaf = JSON[_0x11d0f0(0x408)](_0x784f51['response']), _0x15404e = _0xf9bcaf?.['data']?.[_0x11d0f0(0x39b)];
                            if (_0x15404e != null) {
                                let _0x28702c = _0xf9bcaf?.[_0x11d0f0(0x219)];
                                _0x28702c[_0x11d0f0(0x39b)]['pk'] = _0x28702c['user']['id'], _0x446061(_0x11d0f0(0x3ff), _0xf9bcaf), _0x3275e1(_0x28702c);
                            } else
                                _0x446061('getUserIdWithAgent()', _0x11d0f0(0x2ed), _0x11d0f0(0x375)), _0x48d2c6(_0x11d0f0(0x375));
                        } catch (_0x337be0) {
                            _0x446061(_0x11d0f0(0x3ff), 'reject', _0x337be0[_0x11d0f0(0x3d9)]), _0x48d2c6(_0x337be0);
                        }
                    },
                    'onerror': function (_0x1cf87d) {
                        const _0x44364c = _0x2dfdde;
                        _0x446061('getUserIdWithAgent()', _0x44364c(0x2ed), _0x1cf87d), _0x48d2c6(_0x1cf87d);
                    }
                });
            });
        }
        function _0x2739d3(_0x30f056) {
            return new Promise((_0x17dacb, _0xc40cb8) => {
                const _0x4b7417 = a0_0x4c28;
                let _0x3cf9bf = 'https://i.instagram.com/api/v1/users/' + _0x30f056 + _0x4b7417(0x3af);
                GM_xmlhttpRequest({
                    'method': _0x4b7417(0x364),
                    'url': _0x3cf9bf,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x2fb5bf) {
                        const _0x4b5d7f = _0x4b7417;
                        try {
                            let _0x3399eb = JSON['parse'](_0x2fb5bf[_0x4b5d7f(0x214)]);
                            _0x3399eb[_0x4b5d7f(0x26a)] !== 'ok' ? (_0x446061(_0x4b5d7f(0x206), _0x4b5d7f(0x2ed), _0x3399eb), _0xc40cb8(_0x4b5d7f(0x250))) : (_0x446061(_0x4b5d7f(0x206), _0x3399eb), _0x17dacb(_0x3399eb[_0x4b5d7f(0x39b)][_0x4b5d7f(0x3dd)]?.[_0x4b5d7f(0x24f)]));
                        } catch (_0x21e47d) {
                            _0x446061('getUserHighSizeProfile()', _0x4b5d7f(0x2ed), _0x21e47d), _0xc40cb8(_0x21e47d);
                        }
                    },
                    'onerror': function (_0x129df4) {
                        const _0x22df19 = _0x4b7417;
                        _0x446061(_0x22df19(0x206), _0x22df19(0x2ed), _0x129df4), _0xc40cb8(_0x129df4);
                    }
                });
            });
        }
        function _0x1ab29c(_0x5129c7) {
            return new Promise((_0x2a358, _0x1df97a) => {
                const _0x521343 = a0_0x4c28;
                if (!_0x5129c7)
                    _0x1df97a(_0x521343(0x3b2));
                let _0xf48214 = _0x5129c7, _0x3b89d1 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0xf48214 + _0x521343(0x2b5);
                GM_xmlhttpRequest({
                    'method': _0x521343(0x364),
                    'url': _0x3b89d1,
                    'onload': function (_0x54eac2) {
                        const _0x44cd63 = _0x521343;
                        try {
                            let _0x8b8209 = JSON[_0x44cd63(0x408)](_0x54eac2['response']);
                            _0x446061(_0x44cd63(0x332), _0x8b8209), _0x2a358(_0x8b8209[_0x44cd63(0x219)][_0x44cd63(0x361)][_0x44cd63(0x420)][_0x44cd63(0x3e9)]);
                        } catch (_0x63ddba) {
                            _0x446061(_0x44cd63(0x332), _0x44cd63(0x2ed), _0x63ddba[_0x44cd63(0x3d9)]), _0x1df97a(_0x63ddba);
                        }
                    },
                    'onerror': function (_0xfe04c3) {
                        const _0x12fe3b = _0x521343;
                        _0x446061(_0x12fe3b(0x332), _0x12fe3b(0x2ed), _0xfe04c3), _0x1df97a(_0xfe04c3);
                    }
                });
            });
        }
        function _0x186cd4(_0x233877) {
            return new Promise((_0x10bb97, _0x45b4f0) => {
                const _0x440e44 = a0_0x4c28;
                if (!_0x233877)
                    _0x45b4f0(_0x440e44(0x3b2));
                let _0x2e526a = _0x233877, _0x48c18d = _0x440e44(0x2f0) + _0x2e526a + '%22}';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x48c18d,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x580b91) {
                        const _0x5ec4cb = _0x440e44;
                        try {
                            let _0x42594d = JSON['parse'](_0x580b91[_0x5ec4cb(0x214)]);
                            _0x446061(_0x42594d), _0x42594d['status'] === _0x5ec4cb(0x3f1) ? (_0x446061(_0x5ec4cb(0x2eb), _0x5ec4cb(0x234), _0x2e526a), _0x45c7c4(_0x2e526a)['then'](_0x3237d8 => {
                                const _0x4ef84d = _0x5ec4cb;
                                _0x10bb97({
                                    'type': _0x4ef84d(0x27a),
                                    'data': _0x3237d8['xdt_api__v1__media__shortcode__web_info'][_0x4ef84d(0x36c)][0x0]
                                });
                            })[_0x5ec4cb(0x40c)](_0xcc7bcb => {
                                _0x45b4f0(_0xcc7bcb);
                            })) : _0x10bb97({
                                'type': _0x5ec4cb(0x23b),
                                'data': _0x42594d[_0x5ec4cb(0x219)]
                            });
                        } catch (_0x197d7c) {
                            _0x446061(_0x5ec4cb(0x25f), _0x5ec4cb(0x2ed), _0x197d7c[_0x5ec4cb(0x3d9)]), _0x45b4f0(_0x197d7c);
                        }
                    },
                    'onerror': function (_0x28ed9d) {
                        const _0x2633ec = _0x440e44;
                        _0x446061(_0x2633ec(0x25f), _0x2633ec(0x2ed), _0x28ed9d), _0x45b4f0(_0x28ed9d);
                    }
                });
            });
        }
        function _0x45c7c4(_0x4d82b7) {
            return new Promise((_0x1bcc0c, _0x1af772) => {
                const _0x57e89e = a0_0x4c28;
                if (!_0x4d82b7)
                    _0x1af772(_0x57e89e(0x3b2));
                let _0x390288 = _0x4d82b7, _0x10c490 = _0x57e89e(0x23d) + _0x390288 + '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}';
                GM_xmlhttpRequest({
                    'method': _0x57e89e(0x364),
                    'url': _0x10c490,
                    'headers': {
                        'User-Agent': _0x57e89e(0x37b),
                        'X-IG-App-ID': _0x1b24a2()
                    },
                    'onload': function (_0xff426a) {
                        const _0xf47522 = _0x57e89e;
                        try {
                            let _0x369d14 = JSON[_0xf47522(0x408)](_0xff426a['response']);
                            _0x446061(_0x369d14), _0x369d14['status'] === _0xf47522(0x3f1) ? (alert(_0xf47522(0x33d) + _0x369d14[_0xf47522(0x3d9)] + ':\x20' + _0x369d14[_0xf47522(0x34e)]), _0x446061(_0xf47522(0x2cf) + _0x369d14[_0xf47522(0x3d9)] + ':\x20' + _0x369d14[_0xf47522(0x34e)]), _0x1af772(_0xff426a)) : (_0x446061('getBlobMediaWithQueryID()', _0x369d14[_0xf47522(0x219)]), _0x1bcc0c(_0x369d14[_0xf47522(0x219)]));
                        } catch (_0x28cb9f) {
                            _0x446061(_0xf47522(0x430), 'reject', _0x28cb9f[_0xf47522(0x3d9)]), _0x1af772(_0x28cb9f);
                        }
                    },
                    'onerror': function (_0x2b3013) {
                        const _0x596e37 = _0x57e89e;
                        _0x446061(_0x596e37(0x430), 'reject', _0x2b3013), _0x1af772(_0x2b3013);
                    }
                });
            });
        }
        function _0x1ef3d0(_0x1de34f, _0x508006) {
            const _0x5be43b = _0x11e903;
            _0x508006 === !![] && (_0x446061(_0x5be43b(0x201), _0x5be43b(0x35d)), _0x5bc733(_0x5be43b(0x244))[_0x5be43b(0x217)](function () {
                const _0x471e2a = _0x5be43b;
                return _0x5bc733(this)[_0x471e2a(0x236)](_0x471e2a(0x2a6))[_0x471e2a(0x267)] === 0x0;
            })[_0x5be43b(0x41b)](_0x5be43b(0x24a)));
            if (_0x1de34f == ![]) {
                const _0x513c9a = 0x64;
                let _0x9ee97e = 0x0;
                var _0x31657a = setInterval(() => {
                    const _0x5093de = _0x5be43b;
                    (_0x9ee97e > _0x513c9a || _0x5bc733(_0x5093de(0x433))[_0x5093de(0x267)] > 0x0) && (clearInterval(_0x31657a), _0x9ee97e > _0x513c9a && console[_0x5093de(0x26c)]('onReadyMyDW()\x20Timer', _0x5093de(0x30a))), _0x446061(_0x5093de(0x261), _0x5093de(0x242)), _0x2b737f(), _0x9ee97e++;
                }, 0x32);
            } else
                _0x2b737f();
        }
        function _0x1b24a2() {
            const _0x5072a0 = _0x11e903;
            let _0x1c79ac = null;
            return _0x5bc733('script[type=\x22application/json\x22]')[_0x5072a0(0x291)](function () {
                const _0x1dc874 = _0x5072a0, _0x1e3082 = /"APP_ID":"([0-9]+)"/ig, _0x4f2a9c = _0x5bc733(this)[_0x1dc874(0x351)]()[_0x1dc874(0x28a)](_0x1e3082);
                _0x4f2a9c != null && _0x1c79ac == null && (_0x1c79ac = [..._0x5bc733(this)[_0x1dc874(0x351)]()[_0x1dc874(0x38d)](_0x1e3082)]);
            }), _0x1c79ac ? _0x1c79ac['at'](0x0)['at'](-0x1) : null;
        }
        function _0x55c6f2(_0x45973a) {
            const _0x185063 = _0x11e903;
            _0x45973a ? (_0x5bc733('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')['removeClass'](_0x185063(0x353)), _0x5bc733(_0x185063(0x40e))[_0x185063(0x1fd)](_0x185063(0x42f), '20000')) : (_0x5bc733(_0x185063(0x40e))[_0x185063(0x229)](_0x185063(0x353)), _0x5bc733(_0x185063(0x40e))[_0x185063(0x1fd)](_0x185063(0x42f), ''));
        }
        function _0x442557(_0x2927e5) {
            return new Promise((_0xfac1e9, _0x5ea247) => {
                const _0x10bf27 = a0_0x4c28;
                let _0x57ae9e = 'https://i.instagram.com/api/v1/media/' + _0x2927e5 + _0x10bf27(0x3af);
                if (_0x2927e5 == null) {
                    alert(_0x10bf27(0x258)), _0x446061('getMediaInfo()', _0x10bf27(0x2ed), _0x10bf27(0x258)), _0x55c6f2(![]), _0x5ea247(-0x1);
                    return;
                }
                if (_0x1b24a2() == null) {
                    alert(_0x10bf27(0x1fb)), _0x446061(_0x10bf27(0x2e5), _0x10bf27(0x2ed), _0x10bf27(0x1fb)), _0x55c6f2(![]), _0x5ea247(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x10bf27(0x364),
                    'url': _0x57ae9e,
                    'headers': {
                        'User-Agent': window[_0x10bf27(0x2b6)][_0x10bf27(0x27b)],
                        'Accept': '*/*',
                        'X-IG-App-ID': _0x1b24a2()
                    },
                    'onload': function (_0x4bf219) {
                        const _0x3d640e = _0x10bf27;
                        if (_0x4bf219[_0x3d640e(0x2cc)] == _0x57ae9e) {
                            let _0x23f148 = JSON[_0x3d640e(0x408)](_0x4bf219['response']);
                            _0x446061(_0x3d640e(0x2e5), _0x23f148), _0xfac1e9(_0x23f148);
                        } else {
                            let _0x48bfb8 = new URL(_0x4bf219['finalUrl']);
                            _0x48bfb8[_0x3d640e(0x25d)][_0x3d640e(0x3b5)](_0x3d640e(0x1e2)) ? (_0x446061(_0x3d640e(0x2e5), _0x3d640e(0x2ed), 'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.'), alert('The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.')) : (_0x446061(_0x3d640e(0x2e5), _0x3d640e(0x2ed), _0x3d640e(0x318) + _0x4bf219[_0x3d640e(0x2cc)] + '\x22'), alert('Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x4bf219['finalUrl'] + '\x22')), _0x55c6f2(![]), _0x5ea247(-0x1);
                        }
                    },
                    'onerror': function (_0x4dfcee) {
                        const _0x145ec1 = _0x10bf27;
                        _0x446061('getMediaInfo()', _0x145ec1(0x2ed), _0x4dfcee), _0xfac1e9(_0x4dfcee);
                    }
                });
            });
        }
        function _0xbc8079(_0x3ea7b6) {
            const _0x5c2f2d = _0x11e903;
            var _0x40d563 = 0x0, _0x12be97 = _0x3ea7b6[_0x5c2f2d(0x236)](_0x5c2f2d(0x328));
            return (_0x12be97 == null || !_0x12be97['hasClass'](_0x5c2f2d(0x1fe))) && (_0x12be97 = _0x3ea7b6[_0x5c2f2d(0x236)]('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)['children']('div')), _0x12be97[_0x5c2f2d(0x217)]('._acnb')[_0x5c2f2d(0x291)](function (_0x6f6945) {
                const _0x5c2412 = _0x5c2f2d;
                _0x5bc733(this)[_0x5c2412(0x414)](_0x5c2412(0x36a)) && (_0x40d563 = _0x6f6945);
            }), _0x40d563;
        }
        function _0x1ef73b(_0x2a5b12) {
            const _0x1109e3 = _0x11e903;
            _0x391fd7[_0x1109e3(0x2bf)] && _0x2a5b12[_0x1109e3(0x236)](_0x1109e3(0x34c))['each'](function () {
                const _0x55174d = _0x1109e3;
                !_0x5bc733(this)[_0x55174d(0x219)](_0x55174d(0x3b6)) && (_0x446061('(post)\x20Added\x20video\x20event\x20listener\x20#loop'), _0x5bc733(this)['on']('ended', function () {
                    _0x5bc733(this)['attr']('data-loop', !![]), this['pause']();
                }));
            });
            _0x391fd7['MODIFY_VIDEO_VOLUME'] && _0x2a5b12[_0x1109e3(0x236)](_0x1109e3(0x34c))[_0x1109e3(0x291)](function () {
                const _0x50c0a1 = _0x1109e3;
                !_0x5bc733(this)[_0x50c0a1(0x219)](_0x50c0a1(0x24b)) && (_0x446061('(post)\x20Added\x20video\x20event\x20listener\x20#modify'), this[_0x50c0a1(0x3e4)] = _0x355a0d, _0x5bc733(this)['on'](_0x50c0a1(0x22c), function () {
                    const _0x2fe556 = _0x50c0a1;
                    this[_0x2fe556(0x3e4)] = _0x355a0d;
                }), _0x5bc733(this)['on'](_0x50c0a1(0x38c), function () {
                    this['volume'] = _0x355a0d;
                }), _0x5bc733(this)['on'](_0x50c0a1(0x202), function () {
                    const _0x3c5da8 = _0x50c0a1;
                    this[_0x3c5da8(0x3e4)] = _0x355a0d;
                }), _0x5bc733(this)[_0x50c0a1(0x1e4)](_0x50c0a1(0x20b), !![]));
            });
            _0x391fd7['HTML5_VIDEO_CONTROL'] && _0x2a5b12[_0x1109e3(0x236)](_0x1109e3(0x34c))[_0x1109e3(0x291)](function () {
                const _0x269c19 = _0x1109e3;
                !_0x5bc733(this)['data']('controls') && (_0x446061(_0x269c19(0x35f)), this['volume'] = _0x355a0d, _0x5bc733(this)['on'](_0x269c19(0x2e8), function () {
                    const _0x341ee9 = _0x269c19;
                    this[_0x341ee9(0x3e4)] = _0x355a0d;
                }), _0x5bc733(this)['on']('volumechange', function () {
                    const _0x276ab2 = _0x269c19;
                    let _0x3ffc41 = _0x5bc733(this)['parent']()[_0x276ab2(0x236)]('video\x20+\x20div\x20>\x20div')['find'](_0x276ab2(0x402))[_0x276ab2(0x217)](function (_0x193aee) {
                        const _0x71291b = _0x276ab2;
                        return _0x5bc733(this)[_0x71291b(0x21d)]() <= 0x40 && _0x5bc733(this)[_0x71291b(0x224)]() <= 0x40 && _0x5bc733(this)[_0x71291b(0x236)](_0x71291b(0x2fe))[_0x71291b(0x267)] > 0x0;
                    });
                    var _0x138c07 = _0x3ffc41['find'](_0x276ab2(0x2c5))['length'] === 0x0;
                    this[_0x276ab2(0x411)] != _0x138c07 && (this[_0x276ab2(0x3e4)] = _0x355a0d, _0x3ffc41?.[_0x276ab2(0x35c)]()), _0x5bc733(this)[_0x276ab2(0x1e4)](_0x276ab2(0x3b1)) && (_0x355a0d = this['volume'], GM_setValue(_0x276ab2(0x285), this['volume'])), this['volume'] == _0x355a0d && _0x5bc733(this)[_0x276ab2(0x1e4)](_0x276ab2(0x3b1), !![]);
                }), _0x5bc733(this)[_0x269c19(0x1fd)](_0x269c19(0x3e0), _0x269c19(0x31a)), _0x5bc733(this)['css'](_0x269c19(0x42f), '2'), _0x5bc733(this)[_0x269c19(0x1e4)](_0x269c19(0x377), !![]), _0x5bc733(this)[_0x269c19(0x1e4)](_0x269c19(0x207), !![]));
            });
            var _0x132134 = _0x2a5b12[_0x1109e3(0x236)](_0x1109e3(0x29a))['first']();
            _0x132134[_0x1109e3(0x262)](_0x1109e3(0x323)), _0x132134[_0x1109e3(0x236)](_0x1109e3(0x409))['append'](_0x1109e3(0x257) + _0x355a0d + _0x1109e3(0x274)), _0x132134[_0x1109e3(0x236)](_0x1109e3(0x2f9))[_0x1109e3(0x1e4)](_0x1109e3(0x413), _0x1109e3(0x30f) + (_0x355a0d * 0x64 + '%')), _0x132134['find'](_0x1109e3(0x2f9))['on'](_0x1109e3(0x356), function () {
                const _0x5da2b8 = _0x1109e3;
                var _0x2c322a = _0x5bc733(this)['val']() * 0x64 + '%';
                _0x355a0d = _0x5bc733(this)[_0x5da2b8(0x315)](), GM_setValue(_0x5da2b8(0x285), _0x5bc733(this)['val']()), _0x5bc733(this)[_0x5da2b8(0x1e4)](_0x5da2b8(0x413), '--ig-track-progress:\x20' + _0x2c322a), _0x2a5b12['find']('video')[_0x5da2b8(0x291)](function () {
                    const _0x46905b = _0x5da2b8;
                    _0x446061(_0x46905b(0x389)), this[_0x46905b(0x3e4)] = _0x355a0d;
                });
            }), _0x132134[_0x1109e3(0x236)]('div.volume_slider\x20input')['on'](_0x1109e3(0x391), function () {
                const _0x742852 = _0x1109e3;
                var _0x58e0c9 = _0x355a0d * 0x64 + '%';
                _0x5bc733(this)['attr'](_0x742852(0x413), _0x742852(0x30f) + _0x58e0c9), _0x5bc733(this)[_0x742852(0x315)](_0x355a0d), _0x2a5b12[_0x742852(0x236)](_0x742852(0x34c))['each'](function () {
                    const _0x477ff9 = _0x742852;
                    _0x446061(_0x477ff9(0x389)), this['volume'] = _0x355a0d;
                });
            }), _0x132134[_0x1109e3(0x236)]('div.volume_slider')['on'](_0x1109e3(0x35c), function (_0x40d3ae) {
                const _0x59c77e = _0x1109e3;
                _0x40d3ae['stopPropagation'](), _0x40d3ae[_0x59c77e(0x288)]();
            });
        }
        ;
        function _0x2b737f() {
            const _0x13f864 = _0x11e903;
            _0x5bc733(_0x13f864(0x371))[_0x13f864(0x272)](function (_0x285bdd) {
                const _0x36c65d = _0x13f864;
                return _0x5bc733(this)['is'](_0x36c65d(0x303)) ? _0x5bc733(this)[_0x36c65d(0x1f4)]()['parent']()['parent']()['parent']()[0x0] : this;
            })['filter'](function () {
                const _0x368cc4 = _0x13f864;
                return _0x5bc733(this)['height']() > 0x0 && _0x5bc733(this)[_0x368cc4(0x21d)]() > 0x0;
            })['each'](function (_0x2b878a) {
                const _0x271eac = _0x13f864;
                if (!_0x5bc733(this)[_0x271eac(0x1e4)](_0x271eac(0x24a)) && !_0x5bc733(this)[_0x271eac(0x414)](_0x271eac(0x337)) && !_0x5bc733(this)[_0x271eac(0x2ab)](_0x271eac(0x3dc))?.[_0x271eac(0x414)](_0x271eac(0x337)) && _0x5bc733(this)[_0x271eac(0x231)]('div#scrollview')[_0x271eac(0x267)] === 0x0) {
                    _0x446061(_0x271eac(0x3f8), _0x5bc733(this));
                    var _0x299849 = 0xf, _0x3aaef5 = 0xf, _0x4bdbef = _0x5bc733(this), _0x551a63 = this[_0x271eac(0x3cf)];
                    if (_0x551a63 === _0x271eac(0x24d) && _0x2b878a != 0x0)
                        return;
                    const _0x3a0f8b = _0x4bdbef[_0x271eac(0x2ab)](_0x271eac(0x1e8))[_0x271eac(0x2ab)](_0x271eac(0x1e8));
                    if (_0x3a0f8b['length'] === 0x0)
                        return;
                    _0x446061('Found\x20insert\x20point', _0x3a0f8b);
                    if (_0x4bdbef[_0x271eac(0x236)]('._acay')[_0x271eac(0x267)] > 0x0) {
                        _0x4bdbef[_0x271eac(0x236)](_0x271eac(0x1f0))[_0x271eac(0x267)] > 0x0 && _0x4bdbef[_0x271eac(0x236)](_0x271eac(0x1f0))[_0x271eac(0x1fd)]('top', _0x271eac(0x21f));
                        const _0x123087 = _0x4bdbef[_0x271eac(0x236)](_0x271eac(0x2ec))[_0x271eac(0x20e)]()[_0x271eac(0x1f4)]()[0x0];
                        var _0x45a4e0 = new MutationObserver(function (_0x5baf9e, _0x28bd13) {
                            const _0xc274ba = _0x271eac;
                            _0x4bdbef['find'](_0xc274ba(0x1f0))[_0xc274ba(0x1fd)](_0xc274ba(0x423), '37px');
                        });
                        _0x45a4e0['observe'](_0x123087, { 'childList': !![] });
                    }
                    const _0x5441ec = _0x271eac(0x3e7) + _0x399229('DW') + _0x271eac(0x232) + _0x299849 + _0x271eac(0x1ec) + _0x3aaef5 + _0x271eac(0x25e) + _0x371664[_0x271eac(0x432)] + '</div>', _0x38ab78 = '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x399229(_0x271eac(0x271)) + '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:' + (_0x299849 + 0x23) + _0x271eac(0x1ec) + _0x3aaef5 + 'px;\x22>' + _0x371664[_0x271eac(0x271)] + _0x271eac(0x3fe), _0x3effb4 = _0x271eac(0x384) + _0x399229('THUMBNAIL_INTRO') + _0x271eac(0x39c) + (_0x299849 + 0x46) + _0x271eac(0x1ec) + _0x3aaef5 + _0x271eac(0x25e) + _0x371664[_0x271eac(0x205)] + _0x271eac(0x3fe);
                    _0x3a0f8b['eq'](_0x551a63 === 'DIV' ? 0x0 : _0x3a0f8b[_0x271eac(0x267)] - 0x2)['append'](_0x5441ec), _0x3a0f8b['eq'](_0x551a63 === _0x271eac(0x24d) ? 0x0 : _0x3a0f8b['length'] - 0x2)[_0x271eac(0x262)](_0x38ab78), setTimeout(() => {
                        const _0x927aeb = _0x271eac;
                        if (_0x3a0f8b['eq'](_0x551a63 === _0x927aeb(0x24d) ? 0x0 : _0x3a0f8b['length'] - 0x2)['find']('div\x20>\x20ul\x20li._acaz')[_0x927aeb(0x267)] === 0x0)
                            _0x3a0f8b['find']('video')[_0x927aeb(0x267)] > 0x0 && _0x3a0f8b['eq'](_0x551a63 === 'DIV' ? 0x0 : _0x3a0f8b[_0x927aeb(0x267)] - 0x2)[_0x927aeb(0x262)](_0x3effb4);
                        else {
                            const _0x51a46e = (_0x27136d, _0x1f5d40) => {
                                    _0x27136d['forEach'](_0x210081 => {
                                        const _0x59ae46 = a0_0x4c28;
                                        if (_0x210081[_0x59ae46(0x2d3)]) {
                                            var _0x241146 = _0x5bc733(_0x210081['target']);
                                            _0x241146[_0x59ae46(0x236)](_0x59ae46(0x34c))[_0x59ae46(0x267)] > 0x0 ? (_0x3a0f8b['eq'](_0x551a63 === _0x59ae46(0x24d) ? 0x0 : _0x3a0f8b[_0x59ae46(0x267)] - 0x2)[_0x59ae46(0x262)](_0x3effb4), _0x1ef73b(_0x4bdbef)) : _0x3a0f8b[_0x59ae46(0x236)](_0x59ae46(0x32b))?.[_0x59ae46(0x359)]();
                                        }
                                    });
                                }, _0x5ca908 = new IntersectionObserver(_0x51a46e, {
                                    'root': _0x4bdbef['find']('div\x20>\x20ul._acay')[_0x927aeb(0x20e)]()[_0x927aeb(0x1f4)]()[_0x927aeb(0x1f4)]()['parent']()[0x0],
                                    'rootMargin': _0x927aeb(0x42b),
                                    'threshold': 0.1
                                }), _0x14f0f4 = new MutationObserver(function (_0x235430, _0x5d46ce) {
                                    const _0x12e490 = _0x927aeb;
                                    var _0x4820c7 = _0x235430['at'](0x0)?.[_0x12e490(0x3ef)];
                                    _0x5bc733(_0x4820c7)[_0x12e490(0x236)](_0x12e490(0x358))['each'](function () {
                                        const _0x37b009 = _0x12e490;
                                        _0x5ca908[_0x37b009(0x3ea)](this);
                                    });
                                });
                            _0x4bdbef['find'](_0x927aeb(0x25a))[_0x927aeb(0x291)](function () {
                                const _0x21f407 = _0x927aeb;
                                _0x5ca908[_0x21f407(0x3ea)](this);
                            });
                            const _0x31344e = _0x3a0f8b['eq'](_0x551a63 === _0x927aeb(0x24d) ? 0x0 : _0x3a0f8b[_0x927aeb(0x267)] - 0x2)[_0x927aeb(0x236)](_0x927aeb(0x25a))?.['parent']()[0x0], _0x58e22e = _0x3a0f8b['eq'](_0x551a63 === _0x927aeb(0x24d) ? 0x0 : _0x3a0f8b['length'] - 0x2)[_0x927aeb(0x236)](_0x927aeb(0x25a))?.[_0x927aeb(0x1f4)]()[_0x927aeb(0x1f4)]()[0x0];
                            _0x31344e && _0x14f0f4['observe'](_0x31344e, { 'childList': !![] }), _0x58e22e && _0x14f0f4[_0x927aeb(0x3ea)](_0x58e22e, { 'attributes': !![] });
                        }
                    }, 0x32), _0x3a0f8b['css'](_0x271eac(0x3e0), 'relative'), _0x1ef73b(_0x4bdbef), _0x5bc733(this)['on'](_0x271eac(0x35c), _0x271eac(0x32b), function (_0x3fd39b) {
                        const _0x6b0b20 = _0x271eac;
                        _0x55c6f2(!![]), _0x5ffcd6 = _0x5bc733(this)[_0x6b0b20(0x1f4)]()[_0x6b0b20(0x1f4)]()[_0x6b0b20(0x1f4)]()[_0x6b0b20(0x1e4)]('data-username'), _0x32ae10 = location[_0x6b0b20(0x25d)]['replace'](/\/$/, '')[_0x6b0b20(0x3df)]('/')['at'](-0x1) || _0x5bc733(this)[_0x6b0b20(0x1f4)]()[_0x6b0b20(0x1f4)]()['parent']()[_0x6b0b20(0x236)](_0x6b0b20(0x1f5))[_0x6b0b20(0x20e)]()[_0x6b0b20(0x1e4)](_0x6b0b20(0x40d))[_0x6b0b20(0x3df)]('/')['at'](0x2) || _0x5bc733(this)[_0x6b0b20(0x1f4)]()[_0x6b0b20(0x1f4)]()[_0x6b0b20(0x2ab)]('div:last-child')[_0x6b0b20(0x2ab)]('div')[_0x6b0b20(0x2ab)](_0x6b0b20(0x346))[_0x6b0b20(0x236)](_0x6b0b20(0x1f5))[_0x6b0b20(0x2b2)]()[_0x6b0b20(0x1e4)](_0x6b0b20(0x40d))[_0x6b0b20(0x3df)]('/')['at'](0x2);
                        var _0xbf6ebb = _0x5bc733(this)[_0x6b0b20(0x1f4)]()[_0x6b0b20(0x1f4)]()[_0x6b0b20(0x1f4)](), _0x1c1f7e = _0xbc8079(_0xbf6ebb);
                        _0x126fe5(!![], ![]), _0x24e2b3(_0x32ae10, _0x6b0b20(0x338), '')[_0x6b0b20(0x28e)](() => {
                            let _0x315e9f = setInterval(() => {
                                const _0x57920a = a0_0x4c28;
                                if (_0x5bc733(_0x57920a(0x378))[_0x57920a(0x267)] > 0x0) {
                                    clearInterval(_0x315e9f);
                                    var _0x1c499b = _0x5bc733(_0x57920a(0x342) + (_0x1c1f7e + 0x1) + '\x22]')?.[_0x57920a(0x1f4)]()[_0x57920a(0x236)](_0x57920a(0x23a))?.[_0x57920a(0x20e)]();
                                    _0x1c499b != null && _0x1c499b[_0x57920a(0x267)] > 0x0 ? _0x1c499b['click']() : alert(_0x57920a(0x1f7)), _0x55c6f2(![]), _0x5bc733(_0x57920a(0x3aa))[_0x57920a(0x359)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x5bc733(this)['on'](_0x271eac(0x35c), _0x271eac(0x307), function (_0x474016) {
                        const _0x4f2fc3 = _0x271eac;
                        _0x55c6f2(!![]), _0x5ffcd6 = _0x5bc733(this)['parent']()[_0x4f2fc3(0x1f4)]()[_0x4f2fc3(0x1f4)]()[_0x4f2fc3(0x1e4)](_0x4f2fc3(0x216)), _0x32ae10 = location[_0x4f2fc3(0x25d)][_0x4f2fc3(0x3a7)](/\/$/, '')['split']('/')['at'](-0x1) || _0x5bc733(this)['parent']()[_0x4f2fc3(0x1f4)]()[_0x4f2fc3(0x1f4)]()['find'](_0x4f2fc3(0x1f5))[_0x4f2fc3(0x20e)]()[_0x4f2fc3(0x1e4)](_0x4f2fc3(0x40d))[_0x4f2fc3(0x3df)]('/')['at'](0x2) || _0x5bc733(this)[_0x4f2fc3(0x1f4)]()[_0x4f2fc3(0x1f4)]()[_0x4f2fc3(0x2ab)](_0x4f2fc3(0x346))['children'](_0x4f2fc3(0x1e8))['children'](_0x4f2fc3(0x346))[_0x4f2fc3(0x236)](_0x4f2fc3(0x1f5))[_0x4f2fc3(0x2b2)]()[_0x4f2fc3(0x1e4)](_0x4f2fc3(0x40d))['split']('/')['at'](0x2);
                        var _0x7cc87b = _0x5bc733(this)[_0x4f2fc3(0x1f4)]()['parent']()[_0x4f2fc3(0x1f4)](), _0x543097 = _0xbc8079(_0x7cc87b);
                        _0x126fe5(!![], ![]), _0x24e2b3(_0x32ae10, _0x4f2fc3(0x338), '')[_0x4f2fc3(0x28e)](() => {
                            let _0xffd0d1 = setInterval(() => {
                                const _0x68a5c6 = a0_0x4c28;
                                if (_0x5bc733(_0x68a5c6(0x378))[_0x68a5c6(0x267)] > 0x0) {
                                    clearInterval(_0xffd0d1);
                                    var _0x268bda = _0x5bc733(_0x68a5c6(0x342) + (_0x543097 + 0x1) + '\x22]');
                                    if (_0x391fd7[_0x68a5c6(0x3cd)] && _0x391fd7[_0x68a5c6(0x2c7)])
                                        _0x205649(_0x268bda[_0x68a5c6(0x20e)]()[0x0], !![]);
                                    else {
                                        let _0x4c2073 = _0x268bda?.[_0x68a5c6(0x1e4)]('data-href');
                                        if (_0x4c2073) {
                                            var _0x365c58 = new URL(_0x4c2073);
                                            _0x365c58[_0x68a5c6(0x390)] = _0x68a5c6(0x39e), _0x177725(_0x365c58[_0x68a5c6(0x40d)]);
                                        } else
                                            alert(_0x68a5c6(0x349));
                                    }
                                    _0x55c6f2(![]), _0x5bc733(_0x68a5c6(0x3aa))[_0x68a5c6(0x359)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x5bc733(this)['on'](_0x271eac(0x35c), '.SNKMS_IG_DW_MAIN', async function (_0x474505) {
                        const _0x270453 = _0x271eac;
                        _0x5ffcd6 = _0x5bc733(this)[_0x270453(0x1f4)]()['parent']()[_0x270453(0x1f4)]()[_0x270453(0x1e4)](_0x270453(0x216)), _0x32ae10 = location[_0x270453(0x25d)][_0x270453(0x3a7)](/\/$/, '')[_0x270453(0x3df)]('/')['at'](-0x1) || _0x5bc733(this)[_0x270453(0x1f4)]()['parent']()[_0x270453(0x1f4)]()[_0x270453(0x236)](_0x270453(0x1f5))[_0x270453(0x20e)]()['attr']('href')['split']('/')['at'](0x2) || _0x5bc733(this)[_0x270453(0x1f4)]()['parent']()[_0x270453(0x2ab)](_0x270453(0x346))[_0x270453(0x2ab)](_0x270453(0x1e8))[_0x270453(0x2ab)]('div:last-child')[_0x270453(0x236)](_0x270453(0x1f5))[_0x270453(0x2b2)]()[_0x270453(0x1e4)](_0x270453(0x40d))[_0x270453(0x3df)]('/')['at'](0x2), _0x126fe5(_0x391fd7[_0x270453(0x1e5)], !![]), _0x5bc733(_0x270453(0x317))['html'](_0x270453(0x1ef) + _0x32ae10 + '\x22>' + _0x32ae10 + _0x270453(0x38f));
                        if (_0x391fd7['DIRECT_DOWNLOAD_VISIBLE_RESOURCE']) {
                            _0x55c6f2(!![]), _0x4d7cf1(!![]);
                            var _0xad5790 = _0xbc8079(_0x5bc733(this)[_0x270453(0x1f4)]()[_0x270453(0x1f4)]()[_0x270453(0x1f4)]());
                            _0x24e2b3(_0x32ae10, _0x270453(0x338), '')[_0x270453(0x28e)](() => {
                                let _0x130141 = setInterval(() => {
                                    const _0x5a4983 = a0_0x4c28;
                                    if (_0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')['length'] > 0x0) {
                                        clearInterval(_0x130141);
                                        var _0x359877 = _0x5bc733(_0x5a4983(0x342) + (_0xad5790 + 0x1) + '\x22]')?.['attr'](_0x5a4983(0x3e3));
                                        _0x359877 ? (_0x55c6f2(![]), _0x5bc733(_0x5a4983(0x342) + (_0xad5790 + 0x1) + '\x22]')?.['click']()) : alert(_0x5a4983(0x410)), _0x5bc733(_0x5a4983(0x3aa))[_0x5a4983(0x359)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x391fd7[_0x270453(0x1e5)]) {
                            var _0x472a5a = 0x0, _0x550155 = _0x5bc733(this)[_0x270453(0x1f4)]()[_0x270453(0x1f4)]()[_0x270453(0x236)]('._acay\x20._acaz')[_0x270453(0x267)], _0x165785 = window[_0x270453(0x3a4)][_0x270453(0x25d)], _0xd1a4d1 = '/' + _0x165785[_0x270453(0x3df)]('/')[0x1] + '/' + _0x165785[_0x270453(0x3df)]('/')[0x2] + '/', _0x271199 = _0x391fd7[_0x270453(0x3f7)], _0x4e2cbe = new Date(_0x5bc733(this)[_0x270453(0x1f4)]()[_0x270453(0x1f4)]()[_0x270453(0x236)](_0x270453(0x399))['first']()['attr'](_0x270453(0x20d)))[_0x270453(0x2f6)]();
                            if (_0x550155)
                                _0x5bc733(this)[_0x270453(0x1f4)]()[_0x270453(0x236)](_0x270453(0x381))['each'](function () {
                                    const _0x4a5d5b = _0x270453;
                                    let _0xa9ba48 = _0x5bc733(this)[_0x4a5d5b(0x1f4)]()[_0x4a5d5b(0x1f4)]()[_0x4a5d5b(0x236)](_0x4a5d5b(0x34c));
                                    _0xa9ba48 && _0xa9ba48['attr']('src') && (_0x271199 = !![]);
                                }), _0x271199 || _0x391fd7[_0x270453(0x3cd)] ? _0x24e2b3(_0x32ae10, _0x270453(0x338), _0x399229(_0x270453(0x341))) : (_0x5bc733(this)[_0x270453(0x1f4)]()[_0x270453(0x236)](_0x270453(0x381))[_0x270453(0x291)](function () {
                                    const _0x14a526 = _0x270453;
                                    _0x472a5a++;
                                    let _0x5a5381 = _0x5bc733(this)[_0x14a526(0x236)](_0x14a526(0x34c)), _0x3c622f = _0x5bc733(this)[_0x14a526(0x236)]('._aagv\x20img'), _0xb1b634 = _0x3c622f[_0x14a526(0x1e4)]('srcset') ? _0x3c622f[_0x14a526(0x1e4)](_0x14a526(0x331))['split']('\x20')[0x0] : _0x3c622f['attr'](_0x14a526(0x2f5));
                                    _0x5a5381 && _0x5a5381[_0x14a526(0x1e4)]('src') && (_0x271199 = !![]), _0x3c622f && _0xb1b634 && _0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')[_0x14a526(0x262)](_0x14a526(0x31d) + _0x4e2cbe + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x32ae10 + _0x14a526(0x2a0) + _0x472a5a + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0xb1b634 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xb1b634 + _0x14a526(0x33a) + _0x399229('IMG') + _0x14a526(0x3c1) + _0x472a5a + _0x14a526(0x2d5));
                                }), _0x271199 && _0x24e2b3(_0x32ae10, _0x270453(0x338), _0x399229(_0x270453(0x343))));
                            else {
                                if (_0x391fd7['FORCE_RESOURCE_VIA_MEDIA'])
                                    _0x24e2b3(_0x32ae10, _0x270453(0x338), _0x399229(_0x270453(0x341)));
                                else {
                                    _0x472a5a++;
                                    let _0x45152d = _0x5bc733(this)[_0x270453(0x1f4)]()[_0x270453(0x1f4)]()['find'](_0x270453(0x34c)), _0x1061c2 = _0x5bc733(this)['parent']()[_0x270453(0x1f4)]()[_0x270453(0x236)]('._aagv\x20img'), _0x5b254c = _0x1061c2[_0x270453(0x1e4)]('srcset') ? _0x1061c2[_0x270453(0x1e4)](_0x270453(0x331))[_0x270453(0x3df)]('\x20')[0x0] : _0x1061c2[_0x270453(0x1e4)](_0x270453(0x2f5));
                                    _0x45152d && _0x45152d['attr'](_0x270453(0x2f5)) && _0x24e2b3(_0x32ae10, _0x270453(0x338), _0x399229(_0x270453(0x38b))), _0x1061c2 && _0x5b254c && _0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')[_0x270453(0x262)](_0x270453(0x31d) + _0x4e2cbe + _0x270453(0x3c3) + _0x32ae10 + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x472a5a + _0x270453(0x264) + _0x5b254c + _0x270453(0x2cb) + _0x5b254c + _0x270453(0x33a) + _0x399229('IMG') + _0x270453(0x3c1) + _0x472a5a + _0x270453(0x2d5));
                                }
                            }
                        }
                        _0x5bc733(_0x270453(0x378))[_0x270453(0x291)](function () {
                            const _0x17608a = _0x270453;
                            _0x5bc733(this)[_0x17608a(0x34f)](_0x17608a(0x27c)), _0x5bc733(this)['before'](_0x17608a(0x301)), _0x5bc733(this)['after']('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x399229(_0x17608a(0x271)) + _0x17608a(0x2ce) + _0x371664[_0x17608a(0x271)] + _0x17608a(0x3fe)), _0x5bc733(this)[_0x17608a(0x1e4)](_0x17608a(0x322)) == 'video' && _0x5bc733(this)[_0x17608a(0x319)](_0x17608a(0x384) + _0x399229(_0x17608a(0x2af)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x371664[_0x17608a(0x205)] + _0x17608a(0x3fe));
                        }), _0x391fd7[_0x270453(0x1e5)] && _0x24e2b3(_0x32ae10, _0x270453(0x338), _0x399229(_0x270453(0x341)))[_0x270453(0x28e)](() => {
                            let _0x3f84ea = setInterval(() => {
                                const _0x4d155f = a0_0x4c28;
                                _0x5bc733(_0x4d155f(0x378))[_0x4d155f(0x267)] > 0x0 && (clearInterval(_0x3f84ea), _0x5bc733(_0x4d155f(0x378))['each'](function () {
                                    const _0x1a77a6 = _0x4d155f;
                                    _0x5bc733(this)[_0x1a77a6(0x35c)]();
                                }), _0x5bc733(_0x4d155f(0x3aa))[_0x4d155f(0x359)]());
                            }, 0xfa);
                        });
                    });
                    var _0x203a27 = _0x5bc733(this)[_0x271eac(0x236)]('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x271eac(0x20e)]()[_0x271eac(0x351)]();
                    _0x5bc733(this)[_0x271eac(0x1e4)](_0x271eac(0x24a), _0x271eac(0x31e)), _0x5bc733(this)['attr'](_0x271eac(0x216), _0x203a27);
                }
            });
        }
        function _0x24e2b3(_0x56762e, _0x51aeb3, _0x109f93) {
            return new Promise(async _0xc4f50 => {
                const _0x3e3492 = a0_0x4c28;
                _0x5bc733(_0x51aeb3 + '\x20a')['remove'](), _0x5bc733(_0x51aeb3)[_0x3e3492(0x262)](_0x3e3492(0x2dd) + _0x109f93 + _0x3e3492(0x35a));
                let _0x4c967f = await _0x186cd4(_0x56762e);
                if (_0x4c967f[_0x3e3492(0x424)] === _0x3e3492(0x23b)) {
                    let _0x55e166 = 0x1, _0x400986 = _0x4c967f[_0x3e3492(0x219)], _0x1e5635 = _0x400986[_0x3e3492(0x361)];
                    _0x1e5635[_0x3e3492(0x360)] == _0x3e3492(0x292) && _0x1e5635[_0x3e3492(0x3ed)] && (_0x5bc733(_0x51aeb3)[_0x3e3492(0x262)](_0x3e3492(0x3c7) + _0x1e5635['id'] + '\x22\x20datetime=\x22' + _0x1e5635[_0x3e3492(0x41c)] + _0x3e3492(0x333) + _0x1e5635[_0x3e3492(0x243)] + _0x3e3492(0x405) + _0x1e5635[_0x3e3492(0x420)][_0x3e3492(0x3e9)] + _0x3e3492(0x380) + _0x55e166 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x1e5635['video_url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x1e5635[_0x3e3492(0x2c9)][0x1][_0x3e3492(0x2f5)] + _0x3e3492(0x406) + _0x399229(_0x3e3492(0x1e7)) + _0x3e3492(0x3c1) + _0x55e166 + _0x3e3492(0x2d5)), _0x55e166++);
                    _0x1e5635[_0x3e3492(0x360)] == _0x3e3492(0x221) && (_0x5bc733(_0x51aeb3)[_0x3e3492(0x262)](_0x3e3492(0x3c7) + _0x1e5635['id'] + _0x3e3492(0x3cb) + _0x1e5635['taken_at_timestamp'] + _0x3e3492(0x333) + _0x1e5635[_0x3e3492(0x243)] + _0x3e3492(0x3ab) + _0x1e5635['owner'][_0x3e3492(0x3e9)] + _0x3e3492(0x380) + _0x55e166 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x1e5635[_0x3e3492(0x2c9)][_0x1e5635[_0x3e3492(0x2c9)][_0x3e3492(0x267)] - 0x1]['src'] + _0x3e3492(0x2cb) + _0x1e5635[_0x3e3492(0x2c9)][0x1][_0x3e3492(0x2f5)] + _0x3e3492(0x33a) + _0x399229(_0x3e3492(0x310)) + _0x3e3492(0x3c1) + _0x55e166 + _0x3e3492(0x2d5)), _0x55e166++);
                    if (_0x1e5635[_0x3e3492(0x360)] == 'GraphSidecar' && _0x1e5635[_0x3e3492(0x3ec)])
                        for (let _0x2e760f of _0x1e5635[_0x3e3492(0x3ec)]['edges']) {
                            _0x2e760f[_0x3e3492(0x24c)]['__typename'] == _0x3e3492(0x292) && _0x5bc733(_0x51aeb3)[_0x3e3492(0x262)](_0x3e3492(0x3c7) + _0x2e760f['node']['id'] + _0x3e3492(0x3cb) + _0x1e5635[_0x3e3492(0x41c)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x1e5635['shortcode'] + _0x3e3492(0x405) + _0x1e5635[_0x3e3492(0x420)][_0x3e3492(0x3e9)] + _0x3e3492(0x380) + _0x55e166 + _0x3e3492(0x417) + _0x2e760f[_0x3e3492(0x24c)][_0x3e3492(0x3ed)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2e760f[_0x3e3492(0x24c)][_0x3e3492(0x2c9)][0x1][_0x3e3492(0x2f5)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x399229(_0x3e3492(0x1e7)) + '</span>\x20' + _0x55e166 + _0x3e3492(0x2d5)), _0x2e760f['node'][_0x3e3492(0x360)] == _0x3e3492(0x221) && _0x5bc733(_0x51aeb3)[_0x3e3492(0x262)](_0x3e3492(0x3c7) + _0x2e760f['node']['id'] + _0x3e3492(0x3cb) + _0x1e5635['taken_at_timestamp'] + _0x3e3492(0x333) + _0x1e5635['shortcode'] + _0x3e3492(0x3ab) + _0x1e5635[_0x3e3492(0x420)][_0x3e3492(0x3e9)] + _0x3e3492(0x380) + _0x55e166 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x2e760f[_0x3e3492(0x24c)]['display_resources'][_0x2e760f[_0x3e3492(0x24c)]['display_resources'][_0x3e3492(0x267)] - 0x1]['src'] + _0x3e3492(0x2cb) + _0x2e760f[_0x3e3492(0x24c)][_0x3e3492(0x2c9)][0x1]['src'] + _0x3e3492(0x33a) + _0x399229(_0x3e3492(0x310)) + '</span>\x20' + _0x55e166 + _0x3e3492(0x2d5)), _0x55e166++;
                        }
                } else {
                    let _0x2a3d5b = _0x4c967f[_0x3e3492(0x219)];
                    if (_0x2a3d5b['carousel_media'])
                        _0x446061(_0x3e3492(0x2b9)), _0x2a3d5b[_0x3e3492(0x2b9)][_0x3e3492(0x339)]((_0x2757ad, _0x4ab42f) => {
                            const _0x5439e1 = _0x3e3492;
                            let _0x1032ac = _0x4ab42f + 0x1;
                            _0x2757ad['video_versions'] == null ? _0x5bc733(_0x51aeb3)[_0x5439e1(0x262)]('<a\x20media-id=\x22' + _0x2757ad['pk'] + _0x5439e1(0x3cb) + _0x2757ad[_0x5439e1(0x326)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2a3d5b[_0x5439e1(0x40a)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x2a3d5b[_0x5439e1(0x420)][_0x5439e1(0x3e9)] + _0x5439e1(0x380) + _0x1032ac + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x2757ad[_0x5439e1(0x2b0)][_0x5439e1(0x277)][0x0][_0x5439e1(0x24f)] + _0x5439e1(0x2cb) + _0x2757ad[_0x5439e1(0x2b0)]['candidates'][0x0]['url'] + _0x5439e1(0x33a) + _0x399229('IMG') + '</span>\x20' + _0x1032ac + _0x5439e1(0x2d5)) : _0x5bc733(_0x51aeb3)['append'](_0x5439e1(0x3c7) + _0x2757ad['pk'] + '\x22\x20datetime=\x22' + _0x2757ad[_0x5439e1(0x326)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2a3d5b[_0x5439e1(0x40a)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x2a3d5b[_0x5439e1(0x420)]['username'] + '\x22\x20data-globalIndex=\x22' + _0x1032ac + _0x5439e1(0x417) + _0x2757ad[_0x5439e1(0x334)][0x0][_0x5439e1(0x24f)] + _0x5439e1(0x2cb) + _0x2757ad[_0x5439e1(0x2b0)][_0x5439e1(0x277)][0x0][_0x5439e1(0x24f)] + _0x5439e1(0x406) + _0x399229(_0x5439e1(0x1e7)) + _0x5439e1(0x3c1) + _0x1032ac + _0x5439e1(0x2d5));
                        });
                    else {
                        let _0x15ac22 = 0x1;
                        _0x2a3d5b[_0x3e3492(0x334)] == null ? _0x5bc733(_0x51aeb3)[_0x3e3492(0x262)](_0x3e3492(0x3c7) + _0x2a3d5b['pk'] + _0x3e3492(0x3cb) + _0x2a3d5b[_0x3e3492(0x326)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2a3d5b[_0x3e3492(0x40a)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x2a3d5b['owner'][_0x3e3492(0x3e9)] + _0x3e3492(0x380) + _0x15ac22 + _0x3e3492(0x417) + _0x2a3d5b[_0x3e3492(0x2b0)][_0x3e3492(0x277)][0x0]['url'] + _0x3e3492(0x2cb) + _0x2a3d5b[_0x3e3492(0x2b0)][_0x3e3492(0x277)][0x0][_0x3e3492(0x24f)] + _0x3e3492(0x33a) + _0x399229(_0x3e3492(0x310)) + '</span>\x20' + _0x15ac22 + '\x20-</a>') : _0x5bc733(_0x51aeb3)[_0x3e3492(0x262)](_0x3e3492(0x3c7) + _0x2a3d5b['pk'] + _0x3e3492(0x3cb) + _0x2a3d5b['taken_at'] + _0x3e3492(0x333) + _0x2a3d5b[_0x3e3492(0x40a)] + _0x3e3492(0x405) + _0x2a3d5b[_0x3e3492(0x420)][_0x3e3492(0x3e9)] + '\x22\x20data-globalIndex=\x22' + _0x15ac22 + _0x3e3492(0x417) + _0x2a3d5b[_0x3e3492(0x334)][0x0]['url'] + _0x3e3492(0x2cb) + _0x2a3d5b[_0x3e3492(0x2b0)]['candidates'][0x0]['url'] + _0x3e3492(0x406) + _0x399229(_0x3e3492(0x1e7)) + '</span>\x20' + _0x15ac22 + '\x20-</a>');
                    }
                }
                _0x5bc733(_0x3e3492(0x42c))[_0x3e3492(0x359)](), _0x5bc733(_0x3e3492(0x378))[_0x3e3492(0x291)](function () {
                    const _0x11bb9a = _0x3e3492;
                    _0x5bc733(this)[_0x11bb9a(0x34f)]('<div></div>'), _0x5bc733(this)[_0x11bb9a(0x253)](_0x11bb9a(0x301)), _0x5bc733(this)[_0x11bb9a(0x319)](_0x11bb9a(0x412) + _0x399229(_0x11bb9a(0x271)) + '\x22\x20class=\x22newTab\x22>' + _0x371664[_0x11bb9a(0x271)] + _0x11bb9a(0x3fe)), _0x5bc733(this)['attr'](_0x11bb9a(0x322)) == _0x11bb9a(0x34c) && _0x5bc733(this)['after'](_0x11bb9a(0x384) + _0x399229(_0x11bb9a(0x2af)) + _0x11bb9a(0x313) + _0x371664[_0x11bb9a(0x205)] + _0x11bb9a(0x3fe));
                }), _0xc4f50(!![]);
            });
        }
        function _0x126fe5(_0x5d473, _0x1ccc12) {
            const _0x378b53 = _0x11e903;
            let _0x1bcef6 = _0x5d473 ? 'hidden' : '';
            _0x5bc733(_0x378b53(0x3be))[_0x378b53(0x262)](_0x378b53(0x21a) + _0x1bcef6 + _0x378b53(0x22f)), _0x5bc733(_0x378b53(0x306))[_0x378b53(0x262)](_0x378b53(0x404) + _0x399229(_0x378b53(0x355)) + _0x378b53(0x32e) + _0x371664[_0x378b53(0x355)] + _0x378b53(0x3db)), _0x1ccc12 && (_0x5bc733(_0x378b53(0x306))[_0x378b53(0x262)](_0x378b53(0x2e0)), _0x5bc733(_0x378b53(0x284))['append'](_0x378b53(0x33e) + _0x399229(_0x378b53(0x300)) + '</button>'), _0x5bc733(_0x378b53(0x284))[_0x378b53(0x262)](_0x378b53(0x344) + _0x399229('BATCH_DOWNLOAD_DIRECT') + '</button>'), _0x5bc733(_0x378b53(0x306))['append'](_0x378b53(0x2a3) + _0x399229(_0x378b53(0x3b0)) + '</span></label>'));
        }
        function _0x4d7cf1(_0x136e9f) {
            const _0x4deb4a = _0x11e903;
            _0x5bc733(_0x4deb4a(0x3aa))[_0x4deb4a(0x267)] && (_0x136e9f ? _0x5bc733(_0x4deb4a(0x3aa))[_0x4deb4a(0x229)](_0x4deb4a(0x397)) : _0x5bc733(_0x4deb4a(0x3aa))[_0x4deb4a(0x265)](_0x4deb4a(0x397)));
        }
        function _0x4a027b(_0x2e6f96, _0x50c33f, _0x13f3d7, _0x21a323, _0x3bc1ae, _0x92eae5) {
            setTimeout(() => {
                const _0x368f04 = a0_0x4c28;
                _0x55c6f2(!![]), fetch(_0x2e6f96)[_0x368f04(0x28e)](_0x27c807 => {
                    const _0x2c1507 = _0x368f04;
                    return _0x27c807[_0x2c1507(0x40b)]()[_0x2c1507(0x28e)](_0x207668 => {
                        _0x55c6f2(![]), _0x211c02(_0x2e6f96, _0x207668, _0x50c33f, _0x13f3d7, _0x21a323, _0x3bc1ae, _0x92eae5);
                    });
                });
            }, 0x32);
        }
        function _0x211c02(_0x4bd400, _0x41e79f, _0x423e34, _0x46bc86, _0x47b7b0, _0x3d070a, _0x18c54f) {
            const _0x885171 = _0x11e903;
            _0x47b7b0 = parseInt(_0x47b7b0[_0x885171(0x321)]()['padEnd'](0xd, '0'));
            _0x391fd7[_0x885171(0x392)] && (_0x47b7b0 = parseInt(_0x47b7b0[_0x885171(0x321)]()['padEnd'](0xd, '0')));
            const _0x1d27ee = new Date(_0x47b7b0), _0x33d25f = document[_0x885171(0x2f3)]('a'), _0x555491 = new URL(_0x4bd400)[_0x885171(0x25d)][_0x885171(0x3df)]('/')['at'](-0x1)[_0x885171(0x3df)]('.')[_0x885171(0x3a8)](0x0, -0x1)[_0x885171(0x2d2)]('.'), _0x3f32d4 = _0x1d27ee[_0x885171(0x26f)]()['toString'](), _0x45ae8e = (_0x1d27ee[_0x885171(0x208)]() + 0x1)['toString']()['padStart'](0x2, '0'), _0x15bcbe = _0x1d27ee['getDate']()['toString']()['padStart'](0x2, '0'), _0x2ba22a = _0x1d27ee['getHours']()[_0x885171(0x321)]()[_0x885171(0x312)](0x2, '0'), _0x19d9cb = _0x1d27ee[_0x885171(0x37c)]()[_0x885171(0x321)]()[_0x885171(0x312)](0x2, '0'), _0x1ad92f = _0x1d27ee[_0x885171(0x41f)]()[_0x885171(0x321)]()[_0x885171(0x312)](0x2, '0');
            var _0x33fc49 = _0x3185a1[_0x885171(0x2b1)](), _0x559c25 = {
                    '%USERNAME%': _0x423e34,
                    '%SOURCE_TYPE%': _0x46bc86,
                    '%SHORTCODE%': _0x18c54f ? _0x18c54f : '',
                    '%YEAR%': _0x3f32d4,
                    '%2-YEAR%': _0x3f32d4[_0x885171(0x3b4)](-0x2),
                    '%MONTH%': _0x45ae8e,
                    '%DAY%': _0x15bcbe,
                    '%HOUR%': _0x2ba22a,
                    '%MINUTE%': _0x19d9cb,
                    '%SECOND%': _0x1ad92f,
                    '%ORIGINAL_NAME%': _0x555491,
                    '%ORIGINAL_NAME_FIRST%': _0x555491[_0x885171(0x3df)]('_')['at'](0x0)
                };
            _0x33fc49 = _0x33fc49[_0x885171(0x3a7)](/%[\w\-]+%/g, function (_0x388d50) {
                return _0x559c25[_0x388d50] || _0x388d50;
            });
            const _0x45797b = _0x423e34 + '_' + _0x555491 + '.' + _0x3d070a;
            _0x33d25f['href'] = URL[_0x885171(0x275)](_0x41e79f), _0x33d25f['setAttribute']('download', _0x391fd7[_0x885171(0x345)] ? _0x33fc49 + '.' + _0x3d070a : _0x45797b), _0x33d25f[_0x885171(0x35c)](), _0x33d25f[_0x885171(0x359)]();
        }
        async function _0x205649(_0x3f1b4f, _0x307c6a) {
            const _0x54d111 = _0x11e903;
            let _0x4172a4 = new Date()[_0x54d111(0x2f6)](), _0xec2f76 = Math['floor'](_0x4172a4 / 0x3e8), _0x1c3780 = _0x5bc733(_0x3f1b4f)['attr'](_0x54d111(0x216)) ? _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x216)) : _0x5ffcd6;
            !_0x1c3780 && _0x5bc733(_0x3f1b4f)['attr'](_0x54d111(0x3c5)) && (_0x446061(_0x54d111(0x373), _0x5bc733(_0x3f1b4f)['attr'](_0x54d111(0x3e3))), _0x1c3780 = await _0x1ab29c(_0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x3c5))));
            _0x391fd7[_0x54d111(0x392)] && _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x20d)) && (_0xec2f76 = parseInt(_0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x20d))));
            if (_0x391fd7[_0x54d111(0x3cd)]) {
                _0x55c6f2(!![]);
                let _0x100aec = await _0x442557(_0x5bc733(_0x3f1b4f)['attr'](_0x54d111(0x3ee)));
                _0x55c6f2(![]);
                if (_0x100aec[_0x54d111(0x26a)] === 'ok') {
                    var _0x49c3e8 = null;
                    _0x100aec[_0x54d111(0x36c)][0x0]['video_versions'] ? _0x49c3e8 = _0x100aec[_0x54d111(0x36c)][0x0][_0x54d111(0x334)][0x0][_0x54d111(0x24f)] : _0x49c3e8 = _0x100aec[_0x54d111(0x36c)][0x0][_0x54d111(0x2b0)][_0x54d111(0x277)][0x0][_0x54d111(0x24f)];
                    if (_0x307c6a) {
                        let _0x374d46 = new URL(_0x49c3e8);
                        _0x374d46[_0x54d111(0x390)] = _0x54d111(0x39e), _0x177725(_0x374d46[_0x54d111(0x40d)]);
                    } else
                        _0x4a027b(_0x49c3e8, _0x1c3780, _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)]('data-name'), _0xec2f76, _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x3f9)), _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x3c5)));
                } else {
                    if (_0x391fd7[_0x54d111(0x376)]) {
                        if (_0x307c6a) {
                            let _0x557cdf = new URL(_0x5bc733(_0x3f1b4f)['attr'](_0x54d111(0x3e3)));
                            _0x557cdf[_0x54d111(0x390)] = _0x54d111(0x39e), _0x177725(_0x557cdf['href']);
                        } else
                            _0x4a027b(_0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)]('data-href'), _0x1c3780, _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x322)), _0xec2f76, _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x3f9)), _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x3c5)));
                    } else
                        alert(_0x54d111(0x33c) + _0x100aec[_0x54d111(0x3d9)]);
                    _0x446061(_0x100aec);
                }
            } else
                _0x4a027b(_0x5bc733(_0x3f1b4f)['attr'](_0x54d111(0x3e3)), _0x1c3780, _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)]('data-name'), _0xec2f76, _0x5bc733(_0x3f1b4f)['attr'](_0x54d111(0x3f9)), _0x5bc733(_0x3f1b4f)[_0x54d111(0x1e4)](_0x54d111(0x3c5)));
        }
        function _0x2e411c(_0x30d3c4) {
            const _0xa2ce21 = _0x11e903;
            var _0x21a407 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0xa2ce21(0x281),
                        'NOTICE_UPDATE_CONTENT': _0xa2ce21(0x2fa),
                        'CHECK_UPDATE': 'Checking\x20for\x20Script\x20Updates',
                        'CHECK_UPDATE_MENU': _0xa2ce21(0x203),
                        'CHECK_UPDATE_INTRO': 'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
                        'RELOAD_SCRIPT': _0xa2ce21(0x347),
                        'DONATE': 'Donate',
                        'FEEDBACK': 'Feedback',
                        'NEW_TAB': _0xa2ce21(0x2f8),
                        'SHOW_DOM_TREE': _0xa2ce21(0x2da),
                        'SELECT_AND_COPY': _0xa2ce21(0x429),
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
                        'REPORT_GITHUB': _0xa2ce21(0x3d1),
                        'REPORT_DISCORD': _0xa2ce21(0x27d),
                        'REPORT_FORK': _0xa2ce21(0x279),
                        'DEBUG': 'Debug\x20Window',
                        'CLOSE': _0xa2ce21(0x370),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0xa2ce21(0x369),
                        'BATCH_DOWNLOAD_DIRECT': _0xa2ce21(0x357),
                        'IMG': 'Image',
                        'VID': _0xa2ce21(0x2e7),
                        'DW': _0xa2ce21(0x3e8),
                        'THUMBNAIL_INTRO': _0xa2ce21(0x3d8),
                        'LOAD_BLOB_ONE': 'Loading\x20Blob\x20Media...',
                        'LOAD_BLOB_MULTIPLE': _0xa2ce21(0x286),
                        'LOAD_BLOB_RELOAD': _0xa2ce21(0x2a5),
                        'NO_CHECK_RESOURCE': _0xa2ce21(0x204),
                        'NO_VID_URL': _0xa2ce21(0x2c0),
                        'SETTING': _0xa2ce21(0x32d),
                        'AUTO_RENAME': _0xa2ce21(0x3fc),
                        'RENAME_SHORTCODE': _0xa2ce21(0x34a),
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0xa2ce21(0x2e2),
                        'DISABLE_VIDEO_LOOPING': _0xa2ce21(0x215),
                        'HTML5_VIDEO_CONTROL': _0xa2ce21(0x235),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0xa2ce21(0x21c),
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0xa2ce21(0x2b4),
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': _0xa2ce21(0x25b),
                        'SCROLL_BUTTON': _0xa2ce21(0x269),
                        'FORCE_RESOURCE_VIA_MEDIA': _0xa2ce21(0x1fc),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': _0xa2ce21(0x37f),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0xa2ce21(0x1eb),
                        'AUTO_RENAME_INTRO': _0xa2ce21(0x3bb),
                        'RENAME_SHORTCODE_INTRO': _0xa2ce21(0x248),
                        'RENAME_PUBLISH_DATE_INTRO': _0xa2ce21(0x3ac),
                        'RENAME_LOCATE_DATE_INTRO': _0xa2ce21(0x1e1),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0xa2ce21(0x431),
                        'HTML5_VIDEO_CONTROL_INTRO': _0xa2ce21(0x419),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0xa2ce21(0x22a),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0xa2ce21(0x393),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': 'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
                        'DIRECT_DOWNLOAD_ALL_INTRO': 'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
                        'MODIFY_VIDEO_VOLUME_INTRO': _0xa2ce21(0x3bf),
                        'SCROLL_BUTTON_INTRO': _0xa2ce21(0x1fa),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0xa2ce21(0x298),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT_INTRO': _0xa2ce21(0x2d4),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': _0xa2ce21(0x3ad),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0xa2ce21(0x3e2)
                    }
                }, _0x53a223 = Object[_0xa2ce21(0x33b)]({}, _0x21a407, _0x57018c), _0x255dd9 = Object[_0xa2ce21(0x20c)](_0x53a223)[_0xa2ce21(0x305)]()[_0xa2ce21(0x38a)]((_0x505846, _0x579571) => {
                    return _0x505846[_0x579571] = _0x53a223[_0x579571], _0x505846;
                }, {});
            return _0x255dd9;
        }
        async function _0x4d07f7(_0x5e3fd4) {
            return new Promise((_0x916b31, _0x54d9da) => {
                const _0x5e7488 = a0_0x4c28;
                GM_xmlhttpRequest({
                    'method': _0x5e7488(0x364),
                    'url': _0x5e7488(0x2c1) + _0x5e3fd4 + _0x5e7488(0x30c),
                    'onload': function (_0x487630) {
                        const _0x5e375b = _0x5e7488;
                        try {
                            let _0x8922e4 = JSON['parse'](_0x487630[_0x5e375b(0x214)]);
                            _0x916b31(_0x8922e4);
                        } catch (_0x595ff8) {
                            _0x54d9da(_0x595ff8);
                        }
                    },
                    'onerror': function (_0x2beefd) {
                        const _0x182219 = _0x5e7488;
                        _0x446061(_0x182219(0x39f), _0x182219(0x2ed), _0x2beefd), _0x54d9da(_0x2beefd);
                    }
                });
            });
        }
        function _0x399229(_0x5b2825) {
            const _0x321664 = _0x11e903, _0x52b289 = _0x2e411c();
            return _0x52b289[_0x5dd3d4] != undefined && _0x52b289[_0x5dd3d4][_0x5b2825] != undefined ? _0x52b289[_0x5dd3d4][_0x5b2825] : _0x52b289[_0x321664(0x3d2)][_0x5b2825];
        }
        function _0x17280() {
            const _0x1b1db7 = _0x11e903;
            _0x5bc733(_0x1b1db7(0x35b))[_0x1b1db7(0x291)](function () {
                const _0x4aa3ed = _0x1b1db7;
                _0x5bc733(this)['text'](_0x399229(_0x5bc733(this)['attr'](_0x4aa3ed(0x268))));
            }), _0x5bc733(_0x1b1db7(0x3a2))[_0x1b1db7(0x291)](function () {
                const _0x59310d = _0x1b1db7;
                _0x5bc733(this)[_0x59310d(0x1e4)]('title', _0x399229(_0x5bc733(this)[_0x59310d(0x1e4)]('data-ih-locale-title')));
            });
        }
        function _0x14786a() {
            const _0x2d49a7 = _0x11e903;
            for (let _0x31c7d2 of _0x108374) {
                _0x446061(_0x2d49a7(0x2f7), _0x31c7d2), GM_unregisterMenuCommand(_0x31c7d2);
            }
            _0x108374[_0x2d49a7(0x2f2)](GM_registerMenuCommand(_0x399229(_0x2d49a7(0x2cd)), () => {
                _0x46aaaa();
            }, { 'accessKey': 'w' })), _0x108374[_0x2d49a7(0x2f2)](GM_registerMenuCommand(_0x399229(_0x2d49a7(0x287)), () => {
                const _0x1ad317 = _0x2d49a7;
                GM_openInTab(_0x1ad317(0x42e), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x108374[_0x2d49a7(0x2f2)](GM_registerMenuCommand(_0x399229(_0x2d49a7(0x22d)), () => {
                _0x140e84();
            }, { 'accessKey': 'z' })), _0x108374[_0x2d49a7(0x2f2)](GM_registerMenuCommand(_0x399229(_0x2d49a7(0x256)), () => {
                _0x52cca8();
            }, { 'accessKey': 'f' })), _0x108374['push'](GM_registerMenuCommand(_0x399229(_0x2d49a7(0x366)), () => {
                _0x5a8ef6();
            }, { 'accessKey': 'c' })), _0x108374[_0x2d49a7(0x2f2)](GM_registerMenuCommand(_0x399229('RELOAD_SCRIPT'), () => {
                _0x415d5e();
            }, { 'accessKey': 'r' }));
        }
        function _0x313403(_0x1449bf) {
            const _0x59cad7 = _0x11e903;
            if (!_0x391fd7[_0x59cad7(0x336)])
                return;
            const _0x2beb07 = GM_getValue(_0x59cad7(0x41d)) ?? new Date()[_0x59cad7(0x2f6)](), _0x54591a = new Date()[_0x59cad7(0x2f6)]();
            _0x54591a > parseInt(_0x2beb07) + _0x1449bf * 0x3e8 && (GM_setValue(_0x59cad7(0x41d), new Date()[_0x59cad7(0x2f6)]()), _0x5a8ef6());
        }
        function _0x5a8ef6() {
            const _0x205c20 = _0x11e903, _0x3414bf = GM_info[_0x205c20(0x26b)][_0x205c20(0x421)], _0x1e6abf = 'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/refs/heads/master/main.js';
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x1e6abf,
                'onload': function (_0x57fd45) {
                    const _0x1d2559 = _0x205c20, _0x3d3a21 = _0x57fd45[_0x1d2559(0x2b7)], _0x570e8a = _0x3d3a21[_0x1d2559(0x28a)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x570e8a && _0x570e8a[0x1]) {
                        const _0x577ea6 = _0x570e8a[0x1];
                        _0x446061(_0x1d2559(0x2e9), _0x3414bf, '|', _0x1d2559(0x32a), _0x577ea6), _0x577ea6 !== _0x3414bf && typeof this['updatenotification'] === 'undefined' ? (this[_0x1d2559(0x3a5)] = null, GM_notification({
                            'text': _0x399229(_0x1d2559(0x20a)),
                            'title': _0x399229('NOTICE_UPDATE_TITLE'),
                            'tag': _0x1d2559(0x374),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x1d2559(0x3eb),
                            'onclick': _0x1982e9 => {
                                const _0x4fe002 = _0x1d2559;
                                _0x1982e9?.['preventDefault']();
                                var _0x3a398d = GM_openInTab(GM_info[_0x4fe002(0x26b)]['downloadURL']);
                                setTimeout(() => {
                                    const _0x2e62b8 = _0x4fe002;
                                    _0x3a398d[_0x2e62b8(0x311)]();
                                }, 0xfa);
                            }
                        })) : _0x446061(_0x1d2559(0x2c2));
                    } else
                        console[_0x1d2559(0x260)](_0x1d2559(0x2a1));
                }
            });
        }
        function _0x46aaaa() {
            const _0x2291cd = _0x11e903;
            _0x5bc733(_0x2291cd(0x3aa))[_0x2291cd(0x359)](), _0x126fe5(), _0x5bc733(_0x2291cd(0x30e))[_0x2291cd(0x351)](_0x2291cd(0x3d5)), _0x5bc733(_0x2291cd(0x31c))[_0x2291cd(0x262)](_0x2291cd(0x387));
            for (let _0x11e4b3 in _0x337b45) {
                _0x5bc733(_0x2291cd(0x365))[_0x2291cd(0x262)](_0x2291cd(0x425) + _0x11e4b3 + '\x22\x20' + (_0x5dd3d4 == _0x11e4b3 ? _0x2291cd(0x2fb) : '') + '>' + _0x337b45[_0x11e4b3] + '</option>');
            }
            for (let _0x21bb2 in _0x391fd7) {
                _0x5bc733(_0x2291cd(0x3d3))[_0x2291cd(0x262)]('<label\x20class=\x22globalSettings' + (_0x4a68cc[_0x2291cd(0x280)](_0x21bb2) ? _0x2291cd(0x2f1) : '') + _0x2291cd(0x1ea) + _0x399229(_0x21bb2 + '_INTRO') + _0x2291cd(0x2de) + (_0x21bb2 + '_INTRO') + '\x22><span\x20data-ih-locale=\x22' + _0x21bb2 + '\x22>' + _0x399229(_0x21bb2) + _0x2291cd(0x330) + _0x21bb2 + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x391fd7[_0x21bb2] === !![] ? _0x2291cd(0x223) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x21bb2 === _0x2291cd(0x28b) && _0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22' + _0x21bb2 + '\x22]')[_0x2291cd(0x1f4)](_0x2291cd(0x238))['on'](_0x2291cd(0x241), function (_0x58dbf3) {
                    const _0x1b004a = _0x2291cd;
                    _0x58dbf3[_0x1b004a(0x288)](), _0x5bc733(this)['find']('#tempWrapper')[_0x1b004a(0x267)] === 0x0 && (_0x5bc733(this)[_0x1b004a(0x262)](_0x1b004a(0x237)), _0x5bc733(this)[_0x1b004a(0x2ab)](_0x1b004a(0x2b8))[_0x1b004a(0x262)](_0x1b004a(0x220) + _0x355a0d + _0x1b004a(0x28d)), _0x5bc733(this)['children'](_0x1b004a(0x2b8))[_0x1b004a(0x262)]('<input\x20value=\x22' + _0x355a0d + _0x1b004a(0x2ba)), _0x5bc733(this)['children'](_0x1b004a(0x2b8))[_0x1b004a(0x262)]('<div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x371664[_0x1b004a(0x355)] + '</div>'));
                }), _0x21bb2 === _0x2291cd(0x345) && _0x5bc733(_0x2291cd(0x2c4) + _0x21bb2 + '\x22]')['parent'](_0x2291cd(0x238))['on']('contextmenu', function (_0x4ba653) {
                    const _0x4d83b8 = _0x2291cd;
                    _0x4ba653[_0x4d83b8(0x288)](), _0x5bc733(this)['find']('#tempWrapper')[_0x4d83b8(0x267)] === 0x0 && (_0x5bc733(this)['append']('<div\x20id=\x22tempWrapper\x22></div>'), _0x5bc733(this)[_0x4d83b8(0x2ab)](_0x4d83b8(0x2b8))[_0x4d83b8(0x262)](_0x4d83b8(0x3c6) + _0x3185a1 + _0x4d83b8(0x302)), _0x5bc733(this)[_0x4d83b8(0x2ab)](_0x4d83b8(0x2b8))[_0x4d83b8(0x262)]('<div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x371664['CLOSE'] + '</div>'));
                });
            }
        }
        function _0x140e84() {
            const _0x7b5db4 = _0x11e903;
            _0x5bc733(_0x7b5db4(0x3aa))[_0x7b5db4(0x359)](), _0x126fe5(), _0x5bc733(_0x7b5db4(0x30e))[_0x7b5db4(0x351)](_0x7b5db4(0x200)), _0x5bc733(_0x7b5db4(0x3d3))[_0x7b5db4(0x262)]('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x7b5db4(0x262)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x7b5db4(0x262)](_0x7b5db4(0x3f6) + _0x399229(_0x7b5db4(0x38e)) + '</a></button>'), _0x5bc733(_0x7b5db4(0x29e))[_0x7b5db4(0x262)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>' + _0x399229(_0x7b5db4(0x222)) + _0x7b5db4(0x3a1)), _0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>' + _0x399229(_0x7b5db4(0x2ff)) + _0x7b5db4(0x3b3)), _0x5bc733(_0x7b5db4(0x29e))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x399229(_0x7b5db4(0x30d)) + _0x7b5db4(0x3a1)), _0x5bc733(_0x7b5db4(0x29e))['append'](_0x7b5db4(0x2ee) + _0x399229(_0x7b5db4(0x254)) + _0x7b5db4(0x3a1));
        }
        function _0x52cca8() {
            const _0x360759 = _0x11e903;
            _0x5bc733(_0x360759(0x3aa))[_0x360759(0x359)](), _0x126fe5(), _0x5bc733('.IG_SN_DIG\x20#post_info')['text'](_0x360759(0x383)), _0x5bc733(_0x360759(0x3d3))[_0x360759(0x262)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x5bc733(_0x360759(0x29e))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>' + _0x399229(_0x360759(0x29b)) + _0x360759(0x3a1)), _0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x360759(0x262)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x399229(_0x360759(0x30d)) + '</a></button>'), _0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x399229('REPORT_DISCORD') + '</a></button>');
        }
        function _0x177725(_0x117f96) {
            const _0x1355b1 = _0x11e903;
            var _0x12da2d = document[_0x1355b1(0x2f3)]('a');
            _0x12da2d[_0x1355b1(0x40d)] = _0x117f96, _0x12da2d[_0x1355b1(0x3ef)] = _0x1355b1(0x36b), document[_0x1355b1(0x3be)][_0x1355b1(0x2bc)](_0x12da2d), _0x12da2d[_0x1355b1(0x35c)](), _0x12da2d[_0x1355b1(0x359)]();
        }
        function _0x415d5e() {
            const _0x1fed0b = _0x11e903;
            clearInterval(_0x2315ba), _0x5bc733(_0x1fed0b(0x2aa))[_0x1fed0b(0x359)](), _0x5bc733(_0x1fed0b(0x2ca))['remove'](), _0x5bc733(_0x1fed0b(0x324))[_0x1fed0b(0x41b)](_0x1fed0b(0x24a)), _0xb92c7e = ![], _0x4eef3b = ![], _0x5db0aa = location[_0x1fed0b(0x40d)], _0x524130[_0x1fed0b(0x26d)](), _0x446061(_0x1fed0b(0x252));
        }
        function _0x446061(..._0xf6dd20) {
            const _0x4c527a = _0x11e903;
            var _0x2a6307 = new Date();
            _0x44dfcd[_0x4c527a(0x2f2)]({
                'time': _0x2a6307[_0x4c527a(0x2f6)](),
                'content': [..._0xf6dd20]
            }), _0x44dfcd['length'] > 0x3e8 && (_0x44dfcd = [
                {
                    'time': _0x2a6307['getTime'](),
                    'content': [_0x4c527a(0x247)]
                },
                ..._0x44dfcd[_0x4c527a(0x3a8)](-0x3e7)
            ]), console[_0x4c527a(0x2ae)]('[' + _0x2a6307['toISOString']() + ']', ..._0xf6dd20);
        }
        function _0x265b45() {
            const _0x44157d = _0x11e903;
            for (let _0x478b5f in _0x391fd7) {
                GM_getValue(_0x478b5f) != null && typeof GM_getValue(_0x478b5f) === _0x44157d(0x3f2) && (_0x391fd7[_0x478b5f] = GM_getValue(_0x478b5f));
            }
        }
        _0x5bc733(function () {
            const _0x155afe = _0x11e903;
            function _0x313f9b(_0x5db76f) {
                const _0x402017 = a0_0x4c28;
                var _0x3c5a7a = [];
                for (var _0x53cc7f of _0x5db76f) {
                    _0x3c5a7a[_0x402017(0x2f2)]({
                        'tagName': _0x53cc7f[_0x402017(0x3cf)],
                        'id': _0x53cc7f['id'],
                        'className': _0x53cc7f[_0x402017(0x1ed)]
                    });
                }
                return _0x3c5a7a;
            }
            function _0x40e1ee() {
                const _0x5a22a0 = a0_0x4c28;
                let _0x437c41 = _0x5bc733(_0x5a22a0(0x309))[0x0];
                var _0x2fcf0a = '';
                _0x44dfcd[_0x5a22a0(0x339)](_0x10cba7 => {
                    const _0x1aa761 = _0x5a22a0;
                    var _0x10f309 = JSON[_0x1aa761(0x1e9)](_0x10cba7[_0x1aa761(0x255)], function (_0x27d6f4, _0x4445d2) {
                        const _0x23a8ca = _0x1aa761;
                        if (Array['isArray'](this)) {
                            if (typeof _0x4445d2 === _0x23a8ca(0x340) && _0x4445d2 instanceof jQuery)
                                return _0x313f9b(_0x4445d2);
                            return _0x4445d2;
                        } else
                            return _0x4445d2;
                    }, '\x09');
                    _0x2fcf0a += _0x10cba7[_0x1aa761(0x289)] + ':\x20' + _0x10f309 + '\x0a';
                }), _0x5bc733('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x5a22a0(0x351)](_0x5a22a0(0x2d7) + _0x2fcf0a + _0x5a22a0(0x25c) + location[_0x5a22a0(0x25d)] + _0x5a22a0(0x278) + _0x437c41[_0x5a22a0(0x304)]);
            }
            _0x5bc733('body')['on']('click', _0x155afe(0x325), function () {
                _0x40e1ee();
            }), _0x5bc733('body')['on'](_0x155afe(0x35c), _0x155afe(0x416), function () {
                const _0x3bf5e0 = _0x155afe;
                _0x5bc733(_0x3bf5e0(0x27e))[_0x3bf5e0(0x335)](), document[_0x3bf5e0(0x225)]('copy');
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x35c), _0x155afe(0x3f5), function () {
                const _0x6a0bf9 = _0x155afe;
                _0x5bc733(_0x6a0bf9(0x27e))['text']()['length'] === 0x0 && _0x40e1ee();
                var _0x1d2384 = _0x5bc733(_0x6a0bf9(0x27e))[_0x6a0bf9(0x351)](), _0x57b23f = document[_0x6a0bf9(0x2f3)]('a'), _0x5ab190 = new Blob([_0x1d2384], { 'type': _0x6a0bf9(0x2e6) });
                _0x57b23f['href'] = URL[_0x6a0bf9(0x275)](_0x5ab190), _0x57b23f['download'] = 'DOMTree-' + new Date()[_0x6a0bf9(0x2f6)]() + _0x6a0bf9(0x426), document[_0x6a0bf9(0x3be)][_0x6a0bf9(0x2bc)](_0x57b23f), _0x57b23f[_0x6a0bf9(0x35c)](), _0x57b23f[_0x6a0bf9(0x359)]();
            }), _0x5bc733('body')['on'](_0x155afe(0x35c), '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG', function () {
                const _0x2f4784 = _0x155afe;
                _0x5bc733(this)[_0x2f4784(0x1f4)](_0x2f4784(0x2b8))['length'] > 0x0 ? _0x5bc733(this)[_0x2f4784(0x1f4)](_0x2f4784(0x2b8))[_0x2f4784(0x3cc)](0xfa, function () {
                    const _0x5c2b95 = _0x2f4784;
                    _0x5bc733(this)[_0x5c2b95(0x359)]();
                }) : _0x5bc733(_0x2f4784(0x3aa))[_0x2f4784(0x359)]();
            }), _0x5bc733(window)[_0x155afe(0x251)](function (_0x268c6c) {
                const _0x27b016 = _0x155afe;
                _0x268c6c['keyCode'] == '81' && _0x268c6c[_0x27b016(0x1ff)] && (_0x5bc733('.IG_SN_DIG')[_0x27b016(0x359)](), _0x268c6c[_0x27b016(0x288)]()), _0x268c6c['keyCode'] == '87' && _0x268c6c[_0x27b016(0x1ff)] && (_0x46aaaa(), _0x268c6c['preventDefault']()), _0x268c6c['keyCode'] == '90' && _0x268c6c[_0x27b016(0x1ff)] && (_0x140e84(), _0x268c6c['preventDefault']()), _0x268c6c[_0x27b016(0x3d4)] == '82' && _0x268c6c[_0x27b016(0x1ff)] && (_0x415d5e(), _0x268c6c[_0x27b016(0x288)]()), _0x268c6c[_0x27b016(0x3d4)] == '83' && _0x268c6c[_0x27b016(0x1ff)] && (location['href'][_0x27b016(0x28a)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x5bc733(_0x27b016(0x3d6))[_0x27b016(0x267)] > 0x0 && _0x5bc733(_0x27b016(0x3d6))?.[_0x27b016(0x35c)](), location[_0x27b016(0x40d)][_0x27b016(0x28a)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x5bc733(_0x27b016(0x407))[_0x27b016(0x267)] > 0x0 && _0x5bc733(_0x27b016(0x407))?.[_0x27b016(0x35c)](), _0x268c6c[_0x27b016(0x288)]());
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x240), _0x155afe(0x31f), function (_0x4faf04) {
                const _0x13d8f5 = _0x155afe;
                var _0x3676e1 = _0x5bc733(this)[_0x13d8f5(0x1e4)]('id');
                if (_0x3676e1 && _0x391fd7[_0x3676e1] !== undefined) {
                    let _0x20abec = _0x5bc733(this)[_0x13d8f5(0x2a8)](_0x13d8f5(0x223));
                    GM_setValue(_0x3676e1, _0x20abec), _0x391fd7[_0x3676e1] = _0x20abec, console[_0x13d8f5(0x2ae)](_0x13d8f5(0x2f4), _0x3676e1, _0x20abec);
                }
            }), _0x5bc733('body')['on']('click', _0x155afe(0x400), function (_0x36800f) {
                const _0x5abf27 = _0x155afe;
                _0x5bc733(this)['find'](_0x5abf27(0x2b8))[_0x5abf27(0x267)] > 0x0 && _0x36800f['preventDefault']();
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x240), _0x155afe(0x2d0), function () {
                const _0x7686e3 = _0x155afe;
                let _0x4518e2 = _0x5bc733(this)[_0x7686e3(0x315)]();
                _0x5bc733(this)[_0x7686e3(0x1e4)](_0x7686e3(0x424)) == _0x7686e3(0x379) ? _0x5bc733(this)[_0x7686e3(0x32f)]()[_0x7686e3(0x315)](_0x4518e2) : _0x5bc733(this)['prev']()[_0x7686e3(0x315)](_0x4518e2), _0x4518e2 >= 0x0 && _0x4518e2 <= 0x1 && (_0x355a0d = _0x4518e2, GM_setValue(_0x7686e3(0x285), _0x4518e2));
            }), _0x5bc733('body')['on'](_0x155afe(0x356), '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)', function (_0x2a11e9) {
                const _0x3eb794 = _0x155afe;
                if (_0x5bc733(this)[_0x3eb794(0x1e4)](_0x3eb794(0x424)) == _0x3eb794(0x379)) {
                    let _0x323006 = _0x5bc733(this)[_0x3eb794(0x315)]();
                    _0x5bc733(this)[_0x3eb794(0x32f)]()['val'](_0x323006);
                } else {
                    let _0x45c4b9 = _0x5bc733(this)[_0x3eb794(0x315)]();
                    _0x45c4b9 >= 0x0 && _0x45c4b9 <= 0x1 ? _0x5bc733(this)['prev']()[_0x3eb794(0x315)](_0x45c4b9) : _0x45c4b9 < 0x0 ? _0x5bc733(this)[_0x3eb794(0x315)](0x0) : _0x5bc733(this)[_0x3eb794(0x315)](0x1);
                }
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x356), _0x155afe(0x36d), function (_0x12bbec) {
                const _0x1f77ab = _0x155afe;
                GM_setValue(_0x1f77ab(0x350), _0x5bc733(this)[_0x1f77ab(0x315)]()), _0x3185a1 = _0x5bc733(this)['val']();
            }), _0x5bc733('body')['on'](_0x155afe(0x35c), _0x155afe(0x396), function (_0x2f3a09) {
                const _0x421edb = _0x155afe;
                _0x2f3a09[_0x421edb(0x288)](), _0x205649(this);
            }), _0x5bc733('body')['on']('click', '.IG_SN_DIG_BODY\x20.newTab', function () {
                const _0x159214 = _0x155afe;
                if (_0x391fd7[_0x159214(0x3cd)] && _0x391fd7[_0x159214(0x2c7)])
                    _0x205649(_0x5bc733(this)[_0x159214(0x1f4)]()[_0x159214(0x2ab)]('a')[_0x159214(0x20e)]()[0x0], !![]);
                else {
                    var _0x2fc751 = new URL(_0x5bc733(this)['parent']()[_0x159214(0x2ab)]('a')[_0x159214(0x1e4)](_0x159214(0x3e3)));
                    _0x2fc751[_0x159214(0x390)] = _0x159214(0x39e), _0x177725(_0x2fc751[_0x159214(0x40d)]);
                }
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x35c), _0x155afe(0x210), function () {
                const _0x29d765 = _0x155afe;
                _0x4a027b(_0x5bc733(this)['parent']()[_0x29d765(0x2ab)]('a')[_0x29d765(0x236)]('img')['first']()['attr'](_0x29d765(0x2f5)), _0x5bc733(this)[_0x29d765(0x1f4)]()['children']('a')[_0x29d765(0x1e4)](_0x29d765(0x216)), _0x29d765(0x40f), new Date()['getTime'](), _0x29d765(0x2dc), _0x5bc733(_0x29d765(0x317))[_0x29d765(0x351)]());
            }), _0x5bc733('body')['on'](_0x155afe(0x35c), '.IG_DWSTORY', function () {
                _0x459b3a(!![]);
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x35c), _0x155afe(0x3b7), function (_0x37f494) {
                const _0x4fad07 = _0x155afe;
                _0x37f494[_0x4fad07(0x288)](), _0x459b3a(!![], !![], !![]);
            }), _0x5bc733('body')['on']('click', _0x155afe(0x30b), function () {
                _0x5f0c57(!![]);
            }), _0x5bc733('body')['on'](_0x155afe(0x35c), _0x155afe(0x388), function (_0x51c871) {
                const _0x37df99 = _0x155afe;
                _0x51c871[_0x37df99(0x21e)](), _0x35f075(!![]);
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x35c), _0x155afe(0x407), function () {
                _0x22dcb6(!![]);
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x35c), _0x155afe(0x3f4), function (_0x1acd94) {
                const _0x4c5b96 = _0x155afe;
                _0x1acd94[_0x4c5b96(0x288)](), _0x22dcb6(!![], !![]);
            }), _0x5bc733(_0x155afe(0x3be))['on']('click', '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x422aec(!![]);
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x35c), _0x155afe(0x24e), function () {
                _0x37d73d(!![], !![]);
            }), _0x5bc733(_0x155afe(0x3be))['on']('click', _0x155afe(0x398), function () {
                _0x37d73d(!![], !![], !![]);
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x35c), _0x155afe(0x259), function () {
                _0x37d73d(!![], ![]);
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x2ea), _0x155afe(0x282), function (_0x4bb9e1) {
                const _0x36afdf = _0x155afe;
                if (_0x4bb9e1[_0x36afdf(0x2fd)] === 0x3 || _0x4bb9e1['which'] === 0x2) {
                    if (location[_0x36afdf(0x40d)] === _0x36afdf(0x37a) && _0x391fd7[_0x36afdf(0x297)]) {
                        _0x4bb9e1[_0x36afdf(0x288)]();
                        if (_0x5bc733(this)[_0x36afdf(0x236)](_0x36afdf(0x2a7))[_0x36afdf(0x267)] > 0x0) {
                            const _0x52ac10 = _0x36afdf(0x37a) + _0x5bc733(this)[_0x36afdf(0x2ab)]('div')[_0x36afdf(0x2b2)]()[_0x36afdf(0x351)]();
                            _0x4bb9e1['which'] === 0x2 ? GM_openInTab(_0x52ac10) : location['href'] = _0x52ac10;
                        }
                    }
                }
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x240), _0x155afe(0x42d), function () {
                const _0x129968 = _0x155afe;
                var _0x28a164 = _0x5bc733(this)['find'](_0x129968(0x356))[_0x129968(0x2a8)](_0x129968(0x223));
                _0x5bc733(_0x129968(0x296))[_0x129968(0x291)](function () {
                    const _0x33f320 = _0x129968;
                    _0x5bc733(this)['prop'](_0x33f320(0x223), _0x28a164);
                });
            }), _0x5bc733(_0x155afe(0x3be))['on']('change', _0x155afe(0x296), function () {
                const _0x6fc8d3 = _0x155afe;
                var _0x261f7f = _0x5bc733('.IG_SN_DIG_BODY\x20.inner_box:checked')[_0x6fc8d3(0x267)], _0x4273c6 = _0x5bc733('.IG_SN_DIG_BODY\x20.inner_box')['length'];
                _0x5bc733(_0x6fc8d3(0x42d))[_0x6fc8d3(0x236)](_0x6fc8d3(0x356))[_0x6fc8d3(0x2a8)](_0x6fc8d3(0x223), _0x261f7f == _0x4273c6);
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x35c), _0x155afe(0x382), function () {
                const _0x14e3ee = _0x155afe;
                let _0x3fd8e7 = 0x0;
                _0x5bc733(_0x14e3ee(0x37d))[_0x14e3ee(0x291)](function () {
                    const _0x24592e = _0x14e3ee;
                    _0x5bc733(this)['prev']()[_0x24592e(0x2ab)]('input')[_0x24592e(0x2a8)](_0x24592e(0x223)) && (_0x5bc733(this)[_0x24592e(0x35c)](), _0x3fd8e7++);
                }), _0x3fd8e7 == 0x0 && alert(_0x399229(_0x14e3ee(0x1f9)));
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x240), _0x155afe(0x2fc), function () {
                const _0x3e43d8 = _0x155afe;
                GM_setValue(_0x3e43d8(0x29d), _0x5bc733(this)[_0x3e43d8(0x315)]()), _0x5dd3d4 = _0x5bc733(this)[_0x3e43d8(0x315)](), _0x5dd3d4?.[_0x3e43d8(0x3b5)]('en') || _0x57018c[_0x5dd3d4] != null ? (_0x17280(), _0x14786a()) : _0x4d07f7(_0x5dd3d4)[_0x3e43d8(0x28e)](_0x2da6eb => {
                    _0x57018c[_0x5dd3d4] = _0x2da6eb, _0x17280(), _0x14786a();
                })['catch'](_0x146a4c => {
                    console['error']('getTranslationText\x20catch\x20error:', _0x146a4c);
                });
            }), _0x5bc733('body')['on'](_0x155afe(0x240), _0x155afe(0x427), function () {
                const _0x1d004e = _0x155afe;
                _0x5bc733('#locatePreview')[_0x1d004e(0x351)]('' + new Date()['toLocaleString'](_0x5bc733(this)[_0x1d004e(0x315)](), {
                    'hour12': ![],
                    'second': _0x1d004e(0x1f6),
                    'minute': _0x1d004e(0x1f6),
                    'hour': _0x1d004e(0x1f6),
                    'month': _0x1d004e(0x1f6),
                    'day': '2-digit',
                    'year': _0x1d004e(0x401)
                })['replaceAll']('/', '-')), LOCATE_DATE_FORMAT = _0x5bc733(this)[_0x1d004e(0x315)](), GM_setValue(_0x1d004e(0x3b9), _0x5bc733(this)[_0x1d004e(0x315)]());
            }), _0x5bc733(_0x155afe(0x3be))['on'](_0x155afe(0x35c), _0x155afe(0x228), function () {
                const _0x5c309c = _0x155afe;
                _0x5bc733(_0x5c309c(0x37d))['each'](function () {
                    _0x5bc733(this)['click']();
                });
            });
        });
    }, 0x61a8);
}(jQuery));