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

function a0_0x4b53(_0x55b3f2, _0x15f740) {
    const _0x230548 = a0_0x2305();
    return a0_0x4b53 = function (_0x4b53ac, _0x317315) {
        _0x4b53ac = _0x4b53ac - 0x68;
        let _0x4a43d9 = _0x230548[_0x4b53ac];
        return _0x4a43d9;
    }, a0_0x4b53(_0x55b3f2, _0x15f740);
}
function a0_0x2305() {
    const _0x1da832 = [
        'replaceAll',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'responseText',
        'REPORT_FORK',
        'numeric',
        'reduce',
        'substr',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        'altKey',
        '37px',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'find',
        'forEach',
        'datetime',
        'div#splash-screen',
        'getSeconds',
        'warn',
        'Loading\x20Blob\x20Media...',
        '.SNKMS_IG_DW_MAIN',
        'css',
        'filter',
        '<option\x20value=\x22',
        'thumbnail',
        '.IG_SN_DIG\x20input',
        'keyCode',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'appendChild',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'is_video',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'Download\x20Video\x20Thumbnail',
        'SELECT_AND_COPY',
        'val',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'checked',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'user\x20settings',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'loadstart',
        'NOTICE_UPDATE_TITLE',
        'undefined',
        'toString',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'SCROLL_BUTTON',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'code',
        'Request\x20with:',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '</span>\x20',
        'attr',
        'tagName',
        'RENAME_PUBLISH_DATE',
        'LOCALE_MANIFEST',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'query_id',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'addClass',
        'userLanguage',
        '.json',
        'Disable\x20Video\x20Auto-looping',
        'hd_profile_pic_url_info',
        '_acnf',
        'pathname',
        'getMonth',
        '1167381QUUdLz',
        'media-id',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'RELOAD_SCRIPT',
        'getUserId()',
        'display_resources',
        'show',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'Image',
        'Debug\x20Window',
        'owner',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'push',
        'parents',
        'IMG',
        '.IG_DWHINEWTAB',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'image_versions2',
        'before',
        'getUserIdWithAgent()',
        'MODIFY_VIDEO_VOLUME',
        'getMediaInfo()',
        'users',
        'smooth',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'error',
        '154987RIrIGi',
        '._acnb',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'instagram.com/reels/',
        'VID',
        '\x22]\x20span',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'data-completed',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        '%22}',
        'response',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '_ac3q',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'G_LOCATE_DATE_FORMAT',
        'feedback_message',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'div:last-child',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'wrap',
        '.IG_DWHISTORY',
        'div:not([class]):not([style])',
        'video\x20+\x20div',
        'hidden',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'children',
        '.IG_DWNEWTAB',
        'getHighlightStories()',
        'observe',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'disconnect',
        'srcset',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'post',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'split',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'data-href',
        'data-ih-locale-title',
        'getHours',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'canDownload',
        '__typename',
        'play\x20playing',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'data-loop',
        'SKIP_VIEW_STORY_CONFIRM',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'GraphVideo',
        'data-type',
        'width',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'Select\x20All',
        'data-path',
        'div\x20>\x20ul\x20li._acaz',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'navigator',
        'INTERNAL_CSS',
        'https://www.instagram.com/reels/',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        '192DIovwl',
        'position',
        'G_VIDEO_VOLUME',
        'canvas._aarh',
        '.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN',
        'data-controls',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        'join',
        'div.volume_slider\x20input',
        'replace',
        'svg',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'Fetch\x20from\x20memory\x20cache:',
        '.IG_SN_DIG\x20#post_info',
        'time',
        '<div></div>',
        'Wololo!\x20New\x20version\x20released.',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'volume',
        'logger\x20sliced',
        'getTranslationText\x20catch\x20error:',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'textContent',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'isHighlightsStory',
        'remove-thumbnail',
        'relative',
        'mousedown',
        'padStart',
        '._acay\x20._acaz',
        'items',
        'AUTO_RENAME',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        '[data-ih-locale-title]',
        'preventDefault',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'class',
        'select',
        'edges',
        'append',
        'stories',
        'div#scrollview',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        'after',
        'x1lix1fw',
        'CLOSE',
        'script',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'data-username',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'first',
        'Download',
        'G_CHECK_TIMESTAMP',
        '</a>',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'GraphSidecar',
        'video\x20+\x20div\x20>\x20div',
        '\x22\x20data-ih-locale-title=\x22',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'DISABLE_VIDEO_LOOPING',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'Checking\x20for\x20Script\x20Updates',
        '<div\x20class=\x22IG_SN_DIG\x20',
        'height',
        'setAttribute',
        'div[style][class]',
        'stringify',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        '#article-id',
        'reels',
        'https://www.instagram.com/p/',
        'childList',
        'https://www.instagram.com/reel/',
        'NO_VID_URL',
        'trigging',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'hide',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'Show\x20DOM\x20Tree',
        'get',
        '#tempWrapper',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'video',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'Donate',
        'jpg',
        'regenerated',
        'Current\x20version:\x20',
        'LOAD_BLOB_ONE',
        'DONATE',
        'ig_cache_key',
        '.txt',
        '6tmlYSY',
        'avatar',
        '<a\x20datetime=\x22',
        '\x22\x20data-globalIndex=\x22',
        'finalUrl',
        'Can\x20not\x20find\x20download\x20url.',
        'img',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'prop',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'data',
        'Manually\x20inserting\x20thumbnail\x20button',
        'copy',
        '.IG_REELS_NEWTAB',
        'stopPropagation',
        'ALL_CHECK',
        '\x22\x20datetime=\x22',
        'removeAttr',
        'fadeOut',
        '.xpgaw4o',
        'z-index',
        'url',
        'assign',
        'G_RENAME_FORMAT',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'startsWith',
        'getBlobMedia()',
        '<div\x20class=\x22volume_slider\x20',
        '.IG_SN_DIG',
        'https://www.instagram.com/',
        'controls',
        'input',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'prev',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
        '</p>',
        'THUMBNAIL',
        'Remote\x20version:\x20',
        '</div></div>',
        'style',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'target',
        'taken_at',
        'NONE',
        'click',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'download',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'https://i.instagram.com/api/v1/media/',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'toLowerCase',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'a[href^=\x22/p/\x22]',
        'reject',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        '<label\x20class=\x22globalSettings',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'remove',
        'match',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'en-US',
        'Close',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        '\x22><span\x20data-ih-locale=\x22',
        'volumechange',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'div[id^=\x22mount\x22]',
        'body',
        'body\x20>\x20div\x20section._ac0a',
        'faild',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        '20000',
        '</div>',
        '._acay\x20+\x20.x24i39r',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'data-ih-locale',
        'hasReferrer',
        'isProfile',
        'padEnd',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        '</a></button>',
        'title',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        'video_resources',
        'bottom',
        'change',
        'vertical',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'xdt_api__v1__media__shortcode__web_info',
        '_INTRO',
        'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;',
        'x1iyjqo2',
        'story',
        'THUMBNAIL_INTRO',
        'sort',
        'host',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'video_url',
        'img[referrerpolicy]',
        'data-snig',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'CHECK_UPDATE',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'isDialog',
        'node',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'createElement',
        'object',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'IG\x20Debug\x20DOM\x20Tree',
        'REPORT_DISCORD',
        'length',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'getFullYear',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '\x22\x20class=\x22IG_REELS\x22>',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'mouseenter',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'last',
        'div',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'addedNodes',
        '#scrollWrapper',
        'https://ko-fi.com/snkoarashi',
        '2-digit',
        'status',
        '\x20child',
        'getBlobMediaWithQueryID()',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        'isStory',
        'src',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'li._acaz',
        'NOPATH',
        'version',
        '._acay',
        'Settings',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'toLocaleString',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'Thumbnail\x20button\x20already\x20inserted',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'div.volume_slider',
        'contextmenu',
        'edge_sidecar_to_children',
        'div[role=\x22presentation\x22]',
        '</span>\x20<input\x20id=\x22',
        'LOAD_BLOB_MULTIPLE',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'href',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'DIV',
        'lang',
        'getBlobMediaWithQuery()',
        'getPostOwner()',
        'className',
        'searchParams',
        'video_versions',
        '243733WEoAmF',
        'boolean',
        'there\x20is\x20no\x20new\x20update',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        '.IG_DWHISTORY_THUMBNAIL',
        '</a></button><br/>',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'Found\x20insert\x20point',
        'https://i.instagram.com/api/v1/users/',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'cursor',
        'a[href^=\x22/\x22]',
        '</option>',
        'createObjectURL',
        'downloadURL',
        'fail',
        'next',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'button[role=\x22menuitem\x22]',
        'candidates',
        'pointer',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'username',
        'data-remove-thumbnail',
        'shortcode',
        'highlights',
        '[data-snig]',
        'catch',
        'main\x20timer\x20re-register\x20completed',
        'close',
        'REPORT_GITHUB',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        'user',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'FORCE_RESOURCE_VIA_MEDIA',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        '--ig-track-progress:\x20',
        'px;top:',
        'Feedback\x20Options',
        'video\x20volume\x20changed\x20#slider',
        'pause',
        'text',
        'GET',
        'display_url',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'Feedback',
        'modify-thumbnail',
        'message',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'updatenotification',
        'Download\x20Selected\x20Resources',
        'shortcode_media',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        '_blank',
        'NEW_TAB',
        'type',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        '[role=\x22button\x22]',
        'data-modify',
        'body\x20>\x20div\x20section:visible._ac0a',
        'SETTING',
        'profile_pic_url',
        'toISOString',
        '518661AdtHYm',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        '.IG_REELS',
        'query_hash',
        'article',
        'modify',
        '.IG_SN_DIG\x20.globalSettings',
        'load',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        '.IG_DWPROFILE',
        'carousel_media',
        '\x20-</a>',
        'getStories()',
        'hasClass',
        '\x22\x20/></div>',
        'reels_media',
        'floor',
        'ig_helper_notice',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        'removeClass',
        'scrollBy',
        'each',
        'parse',
        'reel',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '<input\x20value=\x22',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'language',
        'Request\x20failed\x20with\x20API\x20response\x20',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'hostname',
        'log',
        '.IG_DWSTORY_THUMBNAIL',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'div\x20>\x20ul._acay',
        'muted',
        'DIRECT_DOWNLOAD_ALL',
        'location',
        'Display\x20HTML5\x20Video\x20Controller',
        'script[type=\x22application/json\x22]',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '.IG_DWSTORY',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'www.',
        '<a\x20media-id=\x22',
        'Checking\x20for\x20Updates',
        '.videoThumbnail',
        '</button>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'keys',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'trim',
        '.IG_SN_DIG_BODY\x20.newTab',
        'GraphImage',
        'getDate',
        'content',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'CHECK_UPDATE_MENU',
        'DOWNLOAD',
        'section\x20>\x20main[role=\x22main\x22]',
        '337976ARcnPk',
        'data-name',
        'taken_at_timestamp',
        'loop',
        'mp4',
        'getTime',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'parent',
        'HTML5_VIDEO_CONTROL',
        'isHomepage',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        '\x0a-----\x0a\x0aLocation:\x20',
        '357220fPFJPw',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'Video',
        'Logger:\x0a',
        'getUserHighSizeProfile()',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'data-modify-thumbnail',
        '\x22\x20/>',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'FORCE_FETCH_ALL_RESOURCES',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'onReadyMyDW()\x20Timer',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'isArray',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'keydown',
        '\x22\x20class=\x22newTab\x22>',
        '/info/',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '#locatePreview',
        'absolute',
        '[data-ih-locale]',
        'SHOW_DOM_TREE',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'top',
        'getTranslationText()',
        'then',
        '.IG_REELS_THUMBNAIL',
        '183470fOMalN',
        'which'
    ];
    a0_0x2305 = function () {
        return _0x1da832;
    };
    return a0_0x2305();
}
(function (_0x75606, _0x1ef0ce) {
    const _0x469dd2 = a0_0x4b53, _0x849a26 = _0x75606();
    while (!![]) {
        try {
            const _0x37159e = -parseInt(_0x469dd2(0xf9)) / 0x1 * (-parseInt(_0x469dd2(0x2b6)) / 0x2) + parseInt(_0x469dd2(0x1fb)) / 0x3 + -parseInt(_0x469dd2(0x18f)) / 0x4 + parseInt(_0x469dd2(0x1b6)) / 0x5 + parseInt(_0x469dd2(0x256)) / 0x6 * (-parseInt(_0x469dd2(0x217)) / 0x7) + -parseInt(_0x469dd2(0x183)) / 0x8 + parseInt(_0x469dd2(0x140)) / 0x9;
            if (_0x37159e === _0x1ef0ce)
                break;
            else
                _0x849a26['push'](_0x849a26['shift']());
        } catch (_0xcd6444) {
            _0x849a26['push'](_0x849a26['shift']());
        }
    }
}(a0_0x2305, 0x5b739), function (_0xba0ecc) {
    setTimeout(() => {
        'use strict';
        const _0x59dba6 = a0_0x4b53;
        const _0x20e445 = {
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
            }, _0xe5d774 = [
                _0x59dba6(0x1ed),
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
                _0x59dba6(0x11b)
            ];
        var _0x47e989 = GM_getValue(_0x59dba6(0x258)) ? GM_getValue(_0x59dba6(0x258)) : 0x1, _0x1e4362 = ![], _0x23e79b = GM_getValue('G_RENAME_FORMAT') ? GM_getValue('G_RENAME_FORMAT') : _0x59dba6(0x194);
        const _0x16a90f = {
                'DOWNLOAD': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
                'NEW_TAB': _0x59dba6(0x72),
                'THUMBNAIL': _0x59dba6(0x139),
                'CLOSE': _0x59dba6(0xa8)
            }, _0x1d4c25 = 0xfa, _0x4dfb1c = GM_getResourceText(_0x59dba6(0x253)), _0x2eece5 = JSON[_0x59dba6(0x159)](GM_getResourceText(_0x59dba6(0x1ee)));
        var _0x369dc3 = [], _0x2f922d = {}, _0x39d78a = GM_getValue(_0x59dba6(0xf3)) || navigator[_0x59dba6(0x160)] || navigator[_0x59dba6(0x1f4)], _0x451dbd = location[_0x59dba6(0xf0)], _0x4b368d = ![], _0x1a7f00 = ![], _0x48ca00 = [], _0x2701cd, _0x45758e, _0x7e910b, _0x1ddf4f, _0x3717bb = {
                'stories': {},
                'highlights': {}
            }, _0x3c716c = new MutationObserver(function (_0xca94f0, _0x2557cf) {
                _0x449efb();
            });
        _0x589b49(), GM_addStyle(_0x4dfb1c), _0x46ed3f(), _0x3aeb28(_0x39d78a)[_0x59dba6(0x1b4)](_0x13d8d9 => {
            _0x2f922d[_0x39d78a] = _0x13d8d9, _0x41c8d1(), _0x46ed3f(), _0x31f963(0x12c);
        })[_0x59dba6(0x115)](_0x5a10ae => {
            const _0x3794e1 = _0x59dba6;
            _0x46ed3f(), _0x31f963(0x12c), !_0x39d78a[_0x3794e1(0x68)]('en') && console[_0x3794e1(0x216)](_0x3794e1(0x26c), _0x5a10ae);
        });
        var _0x120ec2 = setInterval(function () {
            const _0x360113 = _0x59dba6;
            if (_0xba0ecc(_0x360113(0x1c6))['length'] > 0x0 && !_0xba0ecc(_0x360113(0x1c6))['is'](':hidden') || location['pathname'][_0x360113(0x8b)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x360113(0x163)][_0x360113(0x68)](_0x360113(0x171))) {
                _0x1a7f00 = ![];
                return;
            }
            if (_0x451dbd != location[_0x360113(0xf0)] || !_0x4b368d || !_0x1a7f00) {
                console[_0x360113(0x164)]('Main\x20Timer', _0x360113(0x2a4)), clearInterval(_0x1ddf4f), _0x1a7f00 = ![], _0x4b368d = !![], _0x451dbd = location['href'], _0x3c716c[_0x360113(0x237)]();
                if (location[_0x360113(0xf0)][_0x360113(0x68)](_0x360113(0x2a0)) || location['pathname'][_0x360113(0x8b)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x360113(0xf0)][_0x360113(0x68)](_0x360113(0x2a2))) {
                    _0x3717bb[_0x360113(0x280)] = {}, _0x3717bb[_0x360113(0x113)] = {}, _0x13e5c1(_0x360113(0xbf));
                    var _0x21d349 = setInterval(() => {
                        const _0x1e0a87 = _0x360113;
                        _0xba0ecc(_0x1e0a87(0xa0))[_0x1e0a87(0xc7)] > 0x0 && (clearInterval(_0x21d349), setTimeout(() => {
                            _0x449efb(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x1a7f00 = !![];
                }
                location[_0x360113(0xf0)]['startsWith'](_0x360113(0x254)) && (_0x13e5c1('isReels'), setTimeout(() => {
                    _0x370900(![]);
                }, 0x96), _0x1a7f00 = !![]);
                if (location[_0x360113(0xf0)][_0x360113(0x23c)]('?')[0x0] == _0x360113(0x6c)) {
                    _0x3717bb[_0x360113(0x280)] = {}, _0x3717bb['highlights'] = {};
                    let _0x1737f9 = _0x2701cd?.[_0x360113(0x8b)](/^\/(stories|highlights)\//ig) != null;
                    _0x13e5c1(_0x360113(0x18c), _0x1737f9), setTimeout(() => {
                        const _0x56f41d = _0x360113;
                        _0x449efb(![], _0x1737f9);
                        const _0x16f176 = _0xba0ecc('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.[_0x56f41d(0x18a)]()[0x0];
                        _0x16f176 && _0x3c716c[_0x56f41d(0x235)](_0x16f176, { 'childList': !![] });
                    }, 0x96), _0x1a7f00 = !![];
                }
                _0xba0ecc('header\x20>\x20*[class]:first-child\x20img[alt]')['length'] && location['pathname'][_0x360113(0x8b)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x360113(0x1f9)]['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x13e5c1(_0x360113(0xa3)), setTimeout(() => {
                    _0x529e01(![]);
                }, 0x96), _0x1a7f00 = !![]);
                if (!_0x1a7f00) {
                    if (location['href'][_0x360113(0x8b)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x3717bb[_0x360113(0x113)] = {}, _0x13e5c1(_0x360113(0x270)), _0x53ed83(![]), _0x1ddf4f = setInterval(() => {
                            _0x5f228b(![]);
                        }, _0x1d4c25), _0xba0ecc(_0x360113(0x22d))[_0x360113(0xc7)] && setTimeout(() => {
                            const _0x5ccc41 = _0x360113;
                            if (_0x20e445[_0x5ccc41(0x247)]) {
                                var _0x23b7a5 = _0xba0ecc(_0x5ccc41(0x1d1))['filter'](function () {
                                    const _0x587758 = _0x5ccc41;
                                    return _0xba0ecc(this)[_0x587758(0x232)]()['length'] === 0x0 && this[_0x587758(0x26e)]['trim']() !== '';
                                });
                                _0x23b7a5?.['click']();
                            }
                            _0x1a7f00 = !![];
                        }, 0x96);
                    else
                        location[_0x360113(0xf0)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x13e5c1(_0x360113(0xdb)), _0xba0ecc(_0x360113(0xd2))[_0x360113(0xc7)] > 0x0 && (_0xba0ecc('.IG_DWSTORY')['remove'](), _0xba0ecc(_0x360113(0x233))['remove'](), _0xba0ecc(_0x360113(0x165))['length'] && _0xba0ecc(_0x360113(0x165))[_0x360113(0x8a)](), _0x17f907(![]), setTimeout(() => {
                            _0x17f907(![]);
                        }, 0x96)), _0xba0ecc(_0x360113(0x16f))[_0x360113(0xc7)] && setTimeout(() => {
                            const _0xc6a557 = _0x360113;
                            if (_0x20e445[_0xc6a557(0x247)]) {
                                var _0x8b6fd3 = _0xba0ecc(_0xc6a557(0x1d1))[_0xc6a557(0x1cc)](function () {
                                    const _0x28c2f1 = _0xc6a557;
                                    return _0xba0ecc(this)[_0x28c2f1(0x232)]()[_0x28c2f1(0xc7)] === 0x0 && this['textContent'][_0x28c2f1(0x17a)]() !== '';
                                });
                                _0x8b6fd3?.['click']();
                            }
                            _0x1a7f00 = !![];
                        }, 0x96)) : (_0x1a7f00 = ![], _0xba0ecc(_0x360113(0x16f))[_0x360113(0xc7)] && _0xba0ecc('.IG_DWSTORY')[_0x360113(0x8a)](), _0xba0ecc(_0x360113(0x233))[_0x360113(0xc7)] && _0xba0ecc(_0x360113(0x233))[_0x360113(0x8a)](), _0xba0ecc('.IG_DWSTORY_THUMBNAIL')['length'] && _0xba0ecc(_0x360113(0x165))[_0x360113(0x8a)](), _0xba0ecc('.IG_DWHISTORY')[_0x360113(0xc7)] && _0xba0ecc('.IG_DWHISTORY')[_0x360113(0x8a)](), _0xba0ecc(_0x360113(0x20b))[_0x360113(0xc7)] && _0xba0ecc(_0x360113(0x20b))[_0x360113(0x8a)](), _0xba0ecc(_0x360113(0xfd))[_0x360113(0xc7)] && _0xba0ecc('.IG_DWHISTORY_THUMBNAIL')[_0x360113(0x8a)]());
                }
                _0x31f963(0x12c), _0x2701cd = new URL(location[_0x360113(0xf0)])[_0x360113(0x1f9)];
            }
        }, _0x1d4c25);
        async function _0x529e01(_0x17a9f6) {
            const _0x1bcd77 = _0x59dba6;
            if (_0x17a9f6) {
                _0x1609d5(!![]);
                let _0x5efca0 = new Date()[_0x1bcd77(0x188)](), _0xfae055 = Math[_0x1bcd77(0x152)](_0x5efca0 / 0x3e8), _0x4b385e = location[_0x1bcd77(0x1f9)][_0x1bcd77(0x1b8)](/(reels|tagged)\/$/ig, '')[_0x1bcd77(0x23c)]('/')[_0x1bcd77(0x1cc)](_0x362108 => _0x362108[_0x1bcd77(0xc7)] > 0x0)['at'](-0x1), _0x5f50df = await _0x2f6c20(_0x4b385e);
                try {
                    let _0x36da4b = await _0x398435(_0x5f50df['user']['pk']);
                    _0x3788e(_0x36da4b, _0x4b385e, _0x1bcd77(0x2b7), _0xfae055, _0x1bcd77(0x2af));
                } catch (_0x1dc708) {
                    _0x3788e(_0x5f50df['user'][_0x1bcd77(0x13e)], _0x4b385e, 'avatar', _0xfae055, _0x1bcd77(0x2af));
                }
                _0x1609d5(![]);
            } else {
                if (!_0xba0ecc(_0x1bcd77(0x14b))[_0x1bcd77(0xc7)]) {
                    let _0x4082ae = setInterval(() => {
                        const _0x40eabb = _0x1bcd77;
                        if (_0xba0ecc('.IG_DWPROFILE')[_0x40eabb(0xc7)]) {
                            clearInterval(_0x4082ae);
                            return;
                        }
                        _0xba0ecc(_0x40eabb(0x1a2))['parent']()['parent']()[_0x40eabb(0x27f)](_0x40eabb(0xad) + _0x368cd0('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x16a90f['DOWNLOAD'] + '</div>'), _0xba0ecc(_0x40eabb(0x1a2))['parent']()[_0x40eabb(0x18a)]()[_0x40eabb(0x1cb)](_0x40eabb(0x257), _0x40eabb(0x272)), _0xba0ecc(_0x40eabb(0x223))[_0x40eabb(0x18a)]()[_0x40eabb(0x18a)]()[_0x40eabb(0x18a)]()[_0x40eabb(0x27f)](_0x40eabb(0xad) + _0x368cd0('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x16a90f['DOWNLOAD'] + '</div>'), _0xba0ecc(_0x40eabb(0x223))[_0x40eabb(0x18a)]()[_0x40eabb(0x18a)]()[_0x40eabb(0x18a)]()['css'](_0x40eabb(0x257), _0x40eabb(0x272));
                    }, 0x96);
                }
            }
        }
        async function _0x53ed83(_0x350988, _0xd07588) {
            const _0x5d4227 = _0x59dba6;
            if (_0x350988) {
                let _0x4c773e = new Date()[_0x5d4227(0x188)](), _0x2a559e = Math[_0x5d4227(0x152)](_0x4c773e / 0x3e8), _0x5f12c6 = location[_0x5d4227(0xf0)][_0x5d4227(0x260)](/\/$/ig, '')[_0x5d4227(0x23c)]('/')['at'](-0x1), _0x389962 = _0xba0ecc(_0x5d4227(0x141))['length'] || _0xba0ecc(_0x5d4227(0x19f))[_0x5d4227(0xc7)] || _0xba0ecc(_0x5d4227(0x245))[_0x5d4227(0x1c3)](_0x5d4227(0x20d))['length'], _0x3f093d = '', _0x4f4eb0 = 0x0;
                _0x1609d5(!![]);
                if (_0x3717bb[_0x5d4227(0x113)][_0x5f12c6]) {
                    _0x13e5c1(_0x5d4227(0x264), _0x5f12c6);
                    let _0x57937a = _0x3717bb[_0x5d4227(0x113)][_0x5f12c6][_0x5d4227(0x2c0)][_0x5d4227(0x151)][0x0][_0x5d4227(0x276)][_0x5d4227(0xc7)];
                    _0x3f093d = _0x3717bb[_0x5d4227(0x113)][_0x5f12c6][_0x5d4227(0x2c0)]['reels_media'][0x0][_0x5d4227(0x206)][_0x5d4227(0x110)], _0x4f4eb0 = _0x3717bb[_0x5d4227(0x113)][_0x5f12c6]['data'][_0x5d4227(0x151)][0x0]['items'][_0x57937a - _0x389962];
                } else {
                    let _0x3987e3 = await _0x185958(_0x5f12c6), _0x17ac83 = _0x3987e3[_0x5d4227(0x2c0)]['reels_media'][0x0][_0x5d4227(0x276)][_0x5d4227(0xc7)];
                    _0x3f093d = _0x3987e3[_0x5d4227(0x2c0)]['reels_media'][0x0][_0x5d4227(0x206)][_0x5d4227(0x110)], _0x4f4eb0 = _0x3987e3[_0x5d4227(0x2c0)][_0x5d4227(0x151)][0x0][_0x5d4227(0x276)][_0x17ac83 - _0x389962], _0x3717bb[_0x5d4227(0x113)][_0x5f12c6] = _0x3987e3;
                }
                _0x20e445[_0x5d4227(0x1ed)] && (_0x2a559e = _0x4f4eb0['taken_at_timestamp']);
                if (_0x20e445[_0x5d4227(0x11e)] && !_0x1e4362) {
                    let _0x3b9a9a = await _0x40ca37(_0x4f4eb0['id']);
                    _0x3b9a9a[_0x5d4227(0xd7)] === 'ok' ? _0x3b9a9a['items'][0x0]['video_versions'] ? _0xd07588 ? _0x49a481(_0x3b9a9a[_0x5d4227(0x276)][0x0][_0x5d4227(0xf8)][0x0]['url']) : _0x3788e(_0x3b9a9a['items'][0x0][_0x5d4227(0xf8)][0x0][_0x5d4227(0x2cb)], _0x3f093d, _0x5d4227(0x113), _0x2a559e, _0x5d4227(0x187), _0x5f12c6) : _0xd07588 ? _0x49a481(_0x3b9a9a[_0x5d4227(0x276)][0x0]['image_versions2'][_0x5d4227(0x10d)][0x0]['url']) : _0x3788e(_0x3b9a9a['items'][0x0][_0x5d4227(0x20e)][_0x5d4227(0x10d)][0x0][_0x5d4227(0x2cb)], _0x3f093d, 'highlights', _0x2a559e, _0x5d4227(0x2af), _0x5f12c6) : (_0x20e445['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (delete _0x3717bb[_0x5d4227(0x113)][_0x5f12c6], _0x1e4362 = !![], _0x53ed83(!![], _0xd07588)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x3b9a9a[_0x5d4227(0x12b)]), _0x13e5c1(_0x3b9a9a));
                } else
                    _0x4f4eb0[_0x5d4227(0x1d6)] ? _0xd07588 ? _0x49a481(_0x4f4eb0[_0x5d4227(0xa9)]['at'](-0x1)[_0x5d4227(0xdc)], _0x3f093d) : _0x3788e(_0x4f4eb0[_0x5d4227(0xa9)]['at'](-0x1)[_0x5d4227(0xdc)], _0x3f093d, _0x5d4227(0x113), _0x2a559e, 'mp4', _0x5f12c6) : _0xd07588 ? _0x49a481(_0x4f4eb0[_0x5d4227(0x200)]['at'](-0x1)[_0x5d4227(0xdc)], _0x3f093d) : _0x3788e(_0x4f4eb0[_0x5d4227(0x200)]['at'](-0x1)['src'], _0x3f093d, 'highlights', _0x2a559e, _0x5d4227(0x2af), _0x5f12c6), _0x1e4362 = ![];
                _0x1609d5(![]);
            } else {
                if (!_0xba0ecc(_0x5d4227(0x22d))[_0x5d4227(0xc7)]) {
                    let _0x1b078d = null;
                    _0xba0ecc(_0x5d4227(0x9a))[_0x5d4227(0xc7)] > 0x0 ? _0x1b078d = _0xba0ecc(_0x5d4227(0x13c)) : (_0x1b078d = _0xba0ecc(_0x5d4227(0x1a0)), _0x1b078d[_0x5d4227(0x1cb)]('position', _0x5d4227(0x272)));
                    if (_0x1b078d[_0x5d4227(0xc7)] === 0x0) {
                        let _0x201918 = _0xba0ecc(_0x5d4227(0x262)), _0x428ac2 = 0x0;
                        _0x201918[_0x5d4227(0x158)](function () {
                            const _0x42d64e = _0x5d4227;
                            _0xba0ecc(this)['width']() > _0x428ac2 && (_0x428ac2 = _0xba0ecc(this)[_0x42d64e(0x24c)](), _0x1b078d = _0xba0ecc(this)[_0x42d64e(0x232)](_0x42d64e(0xd1))[_0x42d64e(0x28c)]());
                        });
                    }
                    _0x1b078d != null && (_0x1b078d[_0x5d4227(0x27f)](_0x5d4227(0xad) + _0x368cd0('DW') + _0x5d4227(0x287) + _0x16a90f[_0x5d4227(0x181)] + _0x5d4227(0x9e)), _0x1b078d['append'](_0x5d4227(0x28b) + _0x368cd0('NEW_TAB') + _0x5d4227(0x12f) + _0x16a90f[_0x5d4227(0x136)] + _0x5d4227(0x9e)), _0x1b078d[_0x5d4227(0x1c3)](_0x5d4227(0xb8))[_0x5d4227(0x158)](function () {
                        const _0x403838 = _0x5d4227;
                        _0xba0ecc(this)['on'](_0x403838(0x149), function () {
                            const _0x2e8c94 = _0x403838;
                            !_0xba0ecc(this)[_0x2e8c94(0x2c0)](_0x2e8c94(0x271)) && (_0x1b078d['find'](_0x2e8c94(0xfd))['length'] === 0x0 ? (_0xba0ecc(this)[_0x2e8c94(0x1eb)](_0x2e8c94(0x111), !![]), _0xba0ecc(_0x2e8c94(0xfd))['remove'](), _0x13e5c1('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0xba0ecc(this)[_0x2e8c94(0x1eb)](_0x2e8c94(0x111), !![]), _0x13e5c1(_0x2e8c94(0x15d))));
                        });
                    }));
                }
            }
        }
        async function _0x5f228b(_0x156147) {
            const _0x275719 = _0x59dba6;
            if (_0x156147) {
                let _0x23af9e = new Date()[_0x275719(0x188)](), _0x177890 = Math[_0x275719(0x152)](_0x23af9e / 0x3e8), _0x30d198 = location[_0x275719(0xf0)][_0x275719(0x260)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x3a06c3 = '', _0x25216f = _0xba0ecc('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x275719(0xc7)] || _0xba0ecc('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x275719(0xc7)] || _0xba0ecc(_0x275719(0x245))[_0x275719(0x1c3)](_0x275719(0x20d))[_0x275719(0xc7)], _0x30a432 = '';
                _0x1609d5(!![]);
                if (_0x3717bb[_0x275719(0x113)][_0x30d198]) {
                    _0x13e5c1(_0x275719(0x264), _0x30d198);
                    let _0x257d26 = _0x3717bb[_0x275719(0x113)][_0x30d198][_0x275719(0x2c0)]['reels_media'][0x0]['items'][_0x275719(0xc7)];
                    _0x3a06c3 = _0x3717bb[_0x275719(0x113)][_0x30d198][_0x275719(0x2c0)][_0x275719(0x151)][0x0][_0x275719(0x206)][_0x275719(0x110)], _0x30a432 = _0x3717bb[_0x275719(0x113)][_0x30d198][_0x275719(0x2c0)]['reels_media'][0x0][_0x275719(0x276)][_0x257d26 - _0x25216f];
                } else {
                    let _0x15d16a = await _0x185958(_0x30d198), _0x1f834c = _0x15d16a[_0x275719(0x2c0)]['reels_media'][0x0][_0x275719(0x276)]['length'];
                    _0x3a06c3 = _0x15d16a[_0x275719(0x2c0)][_0x275719(0x151)][0x0][_0x275719(0x206)][_0x275719(0x110)], _0x30a432 = _0x15d16a[_0x275719(0x2c0)][_0x275719(0x151)][0x0][_0x275719(0x276)][_0x1f834c - _0x25216f], _0x3717bb[_0x275719(0x113)][_0x30d198] = _0x15d16a;
                }
                _0x20e445[_0x275719(0x1ed)] && (_0x177890 = _0x30a432[_0x275719(0x185)]);
                if (_0x20e445[_0x275719(0x11e)] && !_0x1e4362) {
                    let _0x56949a = await _0x40ca37(_0x30a432['id']);
                    _0x56949a['status'] === 'ok' ? _0x3788e(_0x56949a['items'][0x0]['image_versions2']['candidates'][0x0][_0x275719(0x2cb)], _0x3a06c3, _0x275719(0x113), _0x177890, _0x275719(0x2af), _0x30d198) : (_0x20e445[_0x275719(0x231)] ? (delete _0x3717bb[_0x275719(0x113)][_0x30d198], _0x1e4362 = !![], _0x5f228b(!![])) : alert(_0x275719(0x12d) + _0x56949a[_0x275719(0x12b)]), _0x13e5c1(_0x56949a));
                } else
                    _0x3788e(_0x30a432[_0x275719(0x200)]['at'](-0x1)[_0x275719(0xdc)], _0x3a06c3, _0x275719(0x113), _0x177890, _0x275719(0x2af), _0x30d198), _0x1e4362 = ![];
                _0x1609d5(![]);
            } else {
                if (_0xba0ecc(_0x275719(0x189))['length']) {
                    if (!_0xba0ecc(_0x275719(0xfd))[_0x275719(0xc7)]) {
                        let _0x4f8162 = null;
                        _0xba0ecc(_0x275719(0x9a))['length'] > 0x0 ? _0x4f8162 = _0xba0ecc(_0x275719(0x13c)) : (_0x4f8162 = _0xba0ecc(_0x275719(0x1a0)), _0x4f8162[_0x275719(0x1cb)](_0x275719(0x257), _0x275719(0x272)));
                        if (_0x4f8162[_0x275719(0xc7)] === 0x0) {
                            let _0x460147 = _0xba0ecc(_0x275719(0x262)), _0x2d970c = 0x0;
                            _0x460147['each'](function () {
                                const _0x21d869 = _0x275719;
                                _0xba0ecc(this)[_0x21d869(0x24c)]() > _0x2d970c && (_0x2d970c = _0xba0ecc(this)['width'](), _0x4f8162 = _0xba0ecc(this)[_0x21d869(0x232)](_0x21d869(0xd1))[_0x21d869(0x28c)]());
                            });
                        }
                        _0x4f8162 != null && _0x4f8162[_0x275719(0x27f)](_0x275719(0x71) + _0x368cd0(_0x275719(0xb3)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x16a90f[_0x275719(0x74)] + _0x275719(0x9e));
                    }
                } else
                    _0xba0ecc(_0x275719(0xfd))[_0x275719(0x8a)]();
            }
        }
        async function _0x17f907(_0xbd7c2, _0xdb5f7, _0x3d16d5) {
            const _0x324281 = _0x59dba6;
            if (_0xbd7c2) {
                let _0x452507 = new Date()[_0x324281(0x188)](), _0x1efbcd = Math[_0x324281(0x152)](_0x452507 / 0x3e8), _0x3d00af = _0xba0ecc('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x324281(0x28c)]()[_0x324281(0x125)]() || location[_0x324281(0x1f9)][_0x324281(0x23c)]('/')[_0x324281(0x1cc)](_0x5a3f9d => _0x5a3f9d[_0x324281(0xc7)] > 0x0)['at'](0x1);
                _0x1609d5(!![]);
                if (_0x20e445[_0x324281(0x11e)] && !_0x1e4362) {
                    let _0x22c53e = null, _0x4c26d1 = await _0x2f6c20(_0x3d00af), _0xd559cc = _0x4c26d1[_0x324281(0x11a)]['pk'], _0x341eaf = await _0x1688a5(_0xd559cc), _0x2db730 = location[_0x324281(0x1f9)][_0x324281(0x23c)]('/')[_0x324281(0x1cc)](_0x1af601 => _0x1af601[_0x324281(0xc7)] > 0x0 && _0x1af601[_0x324281(0x8b)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x341eaf['data'][_0x324281(0x151)][0x0]['items'][_0x324281(0x1c4)](_0x5ac317 => {
                        _0x5ac317['id'] == _0x2db730 && (_0x22c53e = _0x5ac317['id']);
                    });
                    if (_0x22c53e == null) {
                        let _0x1dc2d9 = _0xba0ecc(_0x324281(0x215) + _0x3d00af + _0x324281(0x21c))[_0x324281(0x1cc)](function () {
                            const _0x15caae = _0x324281;
                            return _0xba0ecc(this)['children']()['length'] === 0x0 && _0xba0ecc(this)[_0x15caae(0x1c3)](_0x15caae(0x261))['length'] === 0x0 && _0xba0ecc(this)[_0x15caae(0x125)]()?.[_0x15caae(0x83)]() === _0x3d00af?.['toLowerCase']();
                        })[_0x324281(0x209)]('div:not([class]):not([style])')[_0x324281(0x1cc)](function () {
                            const _0x2c60c5 = _0x324281;
                            return _0xba0ecc(this)[_0x2c60c5(0x125)]()?.[_0x2c60c5(0x83)]() !== _0x3d00af?.[_0x2c60c5(0x83)]();
                        })[_0x324281(0x1cc)](function () {
                            const _0x37bc84 = _0x324281;
                            return _0xba0ecc(this)['children']()[_0x37bc84(0xc7)] > 0x1;
                        })[_0x324281(0x28c)]();
                        _0x1dc2d9['children']()[_0x324281(0x1cc)](function () {
                            const _0x31b4b7 = _0x324281;
                            return _0xba0ecc(this)[_0x31b4b7(0x299)]() < 0xa;
                        })[_0x324281(0x28c)]()[_0x324281(0x232)]()[_0x324281(0x158)](function (_0x2d5ec2) {
                            const _0x37a97d = _0x324281;
                            _0xba0ecc(this)[_0x37a97d(0x232)]()[_0x37a97d(0xc7)] > 0x0 && (_0x22c53e = _0x341eaf[_0x37a97d(0x2c0)][_0x37a97d(0x151)][0x0]['items'][_0x2d5ec2]['id']);
                        });
                    }
                    _0x22c53e == null && (_0xba0ecc(_0x324281(0x1e9))[_0x324281(0x158)](function (_0xc0c941) {
                        const _0x13ea90 = _0x324281;
                        _0xba0ecc(this)[_0x13ea90(0x14f)](_0x13ea90(0x284)) && (_0xba0ecc(this)[_0x13ea90(0x232)]()['length'] > 0x0 && (_0x22c53e = _0x341eaf['data']['reels_media'][0x0][_0x13ea90(0x276)][_0xc0c941]['id']));
                    }), _0xba0ecc('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x324281(0x158)](function (_0x52dac1) {
                        const _0x1f9054 = _0x324281;
                        _0xba0ecc(this)[_0x1f9054(0x232)]()[_0x1f9054(0x14f)]('_ac3q') && (_0x22c53e = _0x341eaf[_0x1f9054(0x2c0)][_0x1f9054(0x151)][0x0]['items'][_0x52dac1]['id']);
                    }));
                    _0x22c53e == null && (_0x22c53e = location[_0x324281(0x1f9)][_0x324281(0x23c)]('/')[_0x324281(0x1cc)](_0x3a72c3 => _0x3a72c3[_0x324281(0xc7)] > 0x0 && _0x3a72c3[_0x324281(0x8b)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0xfb7a15 = await _0x40ca37(_0x22c53e);
                    _0x20e445[_0x324281(0x1ed)] && (_0x1efbcd = _0xfb7a15[_0x324281(0x276)][0x0][_0x324281(0x7a)]);
                    _0xfb7a15[_0x324281(0xd7)] === 'ok' ? _0xfb7a15[_0x324281(0x276)][0x0][_0x324281(0xf8)] ? _0x3d16d5 ? _0x49a481(_0xfb7a15[_0x324281(0x276)][0x0][_0x324281(0xf8)][0x0][_0x324281(0x2cb)]) : _0x3788e(_0xfb7a15[_0x324281(0x276)][0x0][_0x324281(0xf8)][0x0][_0x324281(0x2cb)], _0x3d00af, 'stories', _0x1efbcd, _0x324281(0x187), _0x22c53e) : _0x3d16d5 ? _0x49a481(_0xfb7a15[_0x324281(0x276)][0x0][_0x324281(0x20e)]['candidates'][0x0]['url']) : _0x3788e(_0xfb7a15[_0x324281(0x276)][0x0][_0x324281(0x20e)][_0x324281(0x10d)][0x0][_0x324281(0x2cb)], _0x3d00af, _0x324281(0x280), _0x1efbcd, _0x324281(0x2af), _0x22c53e) : (_0x20e445[_0x324281(0x231)] ? (_0x1e4362 = !![], _0x17f907(_0xbd7c2, _0xdb5f7, _0x3d16d5)) : alert(_0x324281(0x12d) + _0xfb7a15['message']), _0x13e5c1(_0xfb7a15));
                    _0x1609d5(![]);
                    return;
                }
                if (_0xba0ecc(_0x324281(0xcf))['length'] > 0x0) {
                    let _0x5b9c89 = _0x324281(0x187), _0x59285e = '', _0x58ac34 = location[_0x324281(0x1f9)][_0x324281(0x260)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x46dfa6 = null;
                    if (_0x3717bb[_0x324281(0x280)][_0x3d00af] && !_0xdb5f7) {
                        _0x13e5c1(_0x324281(0x264), _0x3d00af), _0x3717bb[_0x324281(0x280)][_0x3d00af][_0x324281(0x2c0)][_0x324281(0x151)][0x0]['items']['forEach'](_0x592d0c => {
                            const _0x3b6f0c = _0x324281;
                            _0x592d0c['id'] == _0x58ac34 && (_0x59285e = _0x592d0c[_0x3b6f0c(0xa9)][0x0]['src'], _0x20e445['RENAME_PUBLISH_DATE'] && (_0x1efbcd = _0x592d0c[_0x3b6f0c(0x185)], _0x46dfa6 = _0x592d0c['id']));
                        });
                        if (_0x59285e[_0x324281(0xc7)] == 0x0) {
                            _0x13e5c1(_0x324281(0x1ae), _0x3d00af), _0x17f907(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x1fd83b = await _0x2f6c20(_0x3d00af), _0x1cf6a1 = _0x1fd83b['user']['pk'], _0x3abbcc = await _0x1688a5(_0x1cf6a1);
                        _0x3abbcc[_0x324281(0x2c0)][_0x324281(0x151)][0x0][_0x324281(0x276)][_0x324281(0x1c4)](_0x3e8229 => {
                            const _0x4cf3ff = _0x324281;
                            _0x3e8229['id'] == _0x58ac34 && (_0x59285e = _0x3e8229[_0x4cf3ff(0xa9)][0x0][_0x4cf3ff(0xdc)], _0x20e445[_0x4cf3ff(0x1ed)] && (_0x1efbcd = _0x3e8229['taken_at_timestamp'], _0x46dfa6 = _0x3e8229['id']));
                        });
                        if (_0x59285e[_0x324281(0xc7)] == 0x0) {
                            let _0xc655c3 = _0xba0ecc(_0x324281(0x215) + _0x3d00af + _0x324281(0x21c))['filter'](function () {
                                const _0xf28398 = _0x324281;
                                return _0xba0ecc(this)[_0xf28398(0x232)]()[_0xf28398(0xc7)] === 0x0 && _0xba0ecc(this)[_0xf28398(0x1c3)]('svg')[_0xf28398(0xc7)] === 0x0 && _0xba0ecc(this)[_0xf28398(0x125)]()?.[_0xf28398(0x83)]() === _0x3d00af?.[_0xf28398(0x83)]();
                            })['parents']('div:not([class]):not([style])')['filter'](function () {
                                const _0x4b7dc1 = _0x324281;
                                return _0xba0ecc(this)[_0x4b7dc1(0x125)]()?.[_0x4b7dc1(0x83)]() !== _0x3d00af?.[_0x4b7dc1(0x83)]();
                            })[_0x324281(0x1cc)](function () {
                                const _0x209fe3 = _0x324281;
                                return _0xba0ecc(this)[_0x209fe3(0x232)]()[_0x209fe3(0xc7)] > 0x1;
                            })['first']();
                            _0xc655c3[_0x324281(0x232)]()[_0x324281(0x1cc)](function () {
                                const _0x21d7f2 = _0x324281;
                                return _0xba0ecc(this)[_0x21d7f2(0x299)]() < 0xa;
                            })[_0x324281(0x28c)]()[_0x324281(0x232)]()[_0x324281(0x158)](function (_0x1813c1) {
                                const _0x4cbaba = _0x324281;
                                _0xba0ecc(this)[_0x4cbaba(0x232)]()[_0x4cbaba(0xc7)] > 0x0 && (_0x59285e = _0x3abbcc[_0x4cbaba(0x2c0)][_0x4cbaba(0x151)][0x0][_0x4cbaba(0x276)][_0x1813c1]['video_resources'][0x0][_0x4cbaba(0xdc)], _0x20e445['RENAME_PUBLISH_DATE'] && (_0x1efbcd = _0x3abbcc[_0x4cbaba(0x2c0)][_0x4cbaba(0x151)][0x0]['items'][_0x1813c1][_0x4cbaba(0x185)], _0x46dfa6 = _0x3abbcc['data']['reels_media'][0x0]['items'][_0x1813c1]['id']));
                            }), _0x59285e[_0x324281(0xc7)] == 0x0 && (_0xba0ecc('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x324281(0x158)](function (_0x489d97) {
                                const _0x539dc0 = _0x324281;
                                _0xba0ecc(this)[_0x539dc0(0x14f)](_0x539dc0(0x284)) && (_0xba0ecc(this)[_0x539dc0(0x232)]()['length'] > 0x0 && (_0x59285e = _0x3abbcc[_0x539dc0(0x2c0)][_0x539dc0(0x151)][0x0][_0x539dc0(0x276)][_0x489d97][_0x539dc0(0xa9)][0x0][_0x539dc0(0xdc)], _0x20e445[_0x539dc0(0x1ed)] && (_0x1efbcd = _0x3abbcc[_0x539dc0(0x2c0)][_0x539dc0(0x151)][0x0][_0x539dc0(0x276)][_0x489d97][_0x539dc0(0x185)], _0x46dfa6 = _0x3abbcc['data'][_0x539dc0(0x151)][0x0][_0x539dc0(0x276)][_0x489d97]['id'])));
                            }), _0xba0ecc(_0x324281(0x102))[_0x324281(0x158)](function (_0x87207a) {
                                const _0x30e49b = _0x324281;
                                _0xba0ecc(this)[_0x30e49b(0x232)]()[_0x30e49b(0x14f)](_0x30e49b(0x224)) && (_0x59285e = _0x3abbcc[_0x30e49b(0x2c0)]['reels_media'][0x0][_0x30e49b(0x276)][_0x87207a][_0x30e49b(0xa9)][0x0]['src'], _0x20e445['RENAME_PUBLISH_DATE'] && (_0x1efbcd = _0x3abbcc[_0x30e49b(0x2c0)][_0x30e49b(0x151)][0x0][_0x30e49b(0x276)][_0x87207a][_0x30e49b(0x185)], _0x46dfa6 = _0x3abbcc[_0x30e49b(0x2c0)][_0x30e49b(0x151)][0x0][_0x30e49b(0x276)][_0x87207a]['id']));
                            }));
                        }
                        _0x3717bb[_0x324281(0x280)][_0x3d00af] = _0x3abbcc;
                    }
                    _0x59285e[_0x324281(0xc7)] == 0x0 ? alert(_0x368cd0(_0x324281(0x2a3))) : _0x3d16d5 ? _0x49a481(_0x59285e) : _0x3788e(_0x59285e, _0x3d00af, 'stories', _0x1efbcd, _0x5b9c89, _0x46dfa6);
                } else {
                    let _0x5b70a0 = _0xba0ecc(_0x324281(0x90))[_0x324281(0x1eb)](_0x324281(0x238))?.['split'](',')[0x0]?.[_0x324281(0x23c)]('\x20')[0x0], _0x27717e = _0x5b70a0 ? _0x5b70a0 : _0xba0ecc(_0x324281(0x90))[_0x324281(0x1cc)](function () {
                            const _0x39061a = _0x324281;
                            return _0xba0ecc(this)[_0x39061a(0x209)]('a')[_0x39061a(0xc7)] === 0x0 && _0xba0ecc(this)[_0x39061a(0x24c)]() === _0xba0ecc(this)[_0x39061a(0x18a)]()['width']();
                        })[_0x324281(0x1eb)](_0x324281(0xdc));
                    if (!_0x27717e) {
                        let _0x2d9230 = _0xba0ecc(_0x324281(0x2ab));
                        _0x27717e = _0x2d9230[_0x324281(0x1eb)](_0x324281(0x238)) ? _0x2d9230['attr'](_0x324281(0x238))?.['split'](',')[0x0]?.[_0x324281(0x23c)]('\x20')[0x0] : _0x2d9230[_0x324281(0x1eb)]('src');
                    }
                    _0x20e445[_0x324281(0x1ed)] && (_0x1efbcd = new Date(_0xba0ecc('body\x20>\x20div\x20section:visible\x20time[datetime][class]')['first']()[_0x324281(0x1eb)]('datetime'))['getTime']());
                    let _0xff0774 = _0x27717e, _0x176e1e = 'jpg';
                    _0x3d16d5 ? _0x49a481(_0xff0774) : _0x3788e(_0xff0774, _0x3d00af, _0x324281(0x280), _0x1efbcd, _0x176e1e, _0x12260d(_0xff0774) ?? '');
                }
                _0x1e4362 = ![], _0x1609d5(![]);
            } else {
                let _0x182ec4 = _0x324281(0xda);
                if (!_0xba0ecc(_0x324281(0x16f))[_0x324281(0xc7)]) {
                    _0x3717bb[_0x324281(0x280)] = {};
                    let _0x2b170d = null;
                    _0xba0ecc('body\x20>\x20div\x20section._ac0a')[_0x324281(0xc7)] > 0x0 ? _0x2b170d = _0xba0ecc(_0x324281(0x13c)) : (_0x2b170d = _0xba0ecc('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x2b170d['css'](_0x324281(0x257), _0x324281(0x272)));
                    _0x2b170d['length'] === 0x0 && (_0x2b170d = _0xba0ecc(_0x324281(0xd2))[_0x324281(0x18a)]()[_0x324281(0x18a)]()[_0x324281(0x18a)]()[_0x324281(0x1c3)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x2b170d[_0x324281(0x1cb)](_0x324281(0x257), 'relative'));
                    _0x2b170d[_0x324281(0xc7)] === 0x0 && (_0x2b170d = _0xba0ecc(_0x324281(0xd2))['parent']()[_0x324281(0x18a)]()[_0x324281(0x18a)]()[_0x324281(0x1c3)](_0x324281(0x138)), _0x2b170d[_0x324281(0x1cb)](_0x324281(0x257), 'relative'));
                    if (_0x2b170d[_0x324281(0xc7)] === 0x0) {
                        let _0x6f114d = _0xba0ecc(_0x324281(0x262)), _0xb0d9e2 = 0x0;
                        _0x6f114d[_0x324281(0x158)](function () {
                            const _0x547bed = _0x324281;
                            _0xba0ecc(this)[_0x547bed(0x24c)]() > _0xb0d9e2 && (_0xb0d9e2 = _0xba0ecc(this)[_0x547bed(0x24c)](), _0x2b170d = _0xba0ecc(this)[_0x547bed(0x232)]('div')[_0x547bed(0x28c)]());
                        });
                    }
                    _0x2b170d != null && (_0x2b170d[_0x324281(0x28c)]()[_0x324281(0x1cb)](_0x324281(0x257), _0x324281(0x272)), _0x2b170d['first']()[_0x324281(0x27f)](_0x324281(0xad) + _0x368cd0('DW') + _0x324281(0x21d) + _0x16a90f[_0x324281(0x181)] + _0x324281(0x9e)), _0x2b170d[_0x324281(0x28c)]()['append'](_0x324281(0x28b) + _0x368cd0(_0x324281(0x136)) + _0x324281(0xbd) + _0x16a90f[_0x324281(0x136)] + _0x324281(0x9e)), _0x2b170d[_0x324281(0x1c3)](_0x324281(0xb8))[_0x324281(0x158)](function () {
                        _0xba0ecc(this)['on']('load', function () {
                            const _0xdf1027 = a0_0x4b53;
                            !_0xba0ecc(this)[_0xdf1027(0x2c0)]('remove-thumbnail') && (_0x2b170d[_0xdf1027(0x1c3)](_0xdf1027(0x165))[_0xdf1027(0xc7)] === 0x0 ? (_0xba0ecc(this)[_0xdf1027(0x1eb)](_0xdf1027(0x111), !![]), _0xba0ecc(_0xdf1027(0x165))[_0xdf1027(0x8a)](), _0x13e5c1(_0xdf1027(0x1ef))) : (_0xba0ecc(this)[_0xdf1027(0x1eb)](_0xdf1027(0x111), !![]), _0x13e5c1(_0xdf1027(0x269))));
                        });
                    }));
                }
            }
        }
        async function _0xeffbe3(_0x4af37b, _0x456ca6) {
            const _0x35e7f9 = _0x59dba6;
            if (_0x4af37b) {
                let _0x2462a2 = new Date()[_0x35e7f9(0x188)](), _0x481ca9 = Math[_0x35e7f9(0x152)](_0x2462a2 / 0x3e8), _0x37effe = _0x35e7f9(0x2af), _0x12d659 = _0xba0ecc(_0x35e7f9(0x97))[_0x35e7f9(0x28c)]()['text']() || location[_0x35e7f9(0x1f9)]['split']('/')['at'](0x2), _0x518211 = _0x35e7f9(0xb0), _0x2d6a84 = location[_0x35e7f9(0x1f9)][_0x35e7f9(0x260)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x50b724 = '', _0x5a9559 = null;
                _0x1609d5(!![]);
                if (_0x20e445[_0x35e7f9(0x11e)] && !_0x1e4362) {
                    let _0x1bb9e3 = await _0x2f6c20(_0x12d659), _0x596f46 = _0x1bb9e3['user']['pk'], _0x4f042f = await _0x1688a5(_0x596f46), _0x5327d8 = location[_0x35e7f9(0x1f9)][_0x35e7f9(0x23c)]('/')[_0x35e7f9(0x1cc)](_0x11e2d9 => _0x11e2d9[_0x35e7f9(0xc7)] > 0x0 && _0x11e2d9[_0x35e7f9(0x8b)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x4f042f[_0x35e7f9(0x2c0)]['reels_media'][0x0][_0x35e7f9(0x276)][_0x35e7f9(0x1c4)](_0x1af7f4 => {
                        _0x1af7f4['id'] == _0x5327d8 && (_0x5a9559 = _0x1af7f4['id']);
                    });
                    if (_0x5a9559 == null) {
                        let _0x4e564c = _0xba0ecc(_0x35e7f9(0x215) + _0x12d659 + _0x35e7f9(0x21c))[_0x35e7f9(0x1cc)](function () {
                            const _0x3cacdf = _0x35e7f9;
                            return _0xba0ecc(this)[_0x3cacdf(0x232)]()['length'] === 0x0 && _0xba0ecc(this)[_0x3cacdf(0x1c3)](_0x3cacdf(0x261))[_0x3cacdf(0xc7)] === 0x0 && _0xba0ecc(this)[_0x3cacdf(0x125)]()?.[_0x3cacdf(0x83)]() === _0x12d659?.[_0x3cacdf(0x83)]();
                        })[_0x35e7f9(0x209)](_0x35e7f9(0x22e))[_0x35e7f9(0x1cc)](function () {
                            const _0x1d9c03 = _0x35e7f9;
                            return _0xba0ecc(this)[_0x1d9c03(0x125)]()?.[_0x1d9c03(0x83)]() !== _0x12d659?.['toLowerCase']();
                        })[_0x35e7f9(0x1cc)](function () {
                            const _0x17fb89 = _0x35e7f9;
                            return _0xba0ecc(this)['children']()[_0x17fb89(0xc7)] > 0x1;
                        })[_0x35e7f9(0x28c)]();
                        _0x4e564c[_0x35e7f9(0x232)]()[_0x35e7f9(0x1cc)](function () {
                            const _0x4dcec4 = _0x35e7f9;
                            return _0xba0ecc(this)[_0x4dcec4(0x299)]() < 0xa;
                        })['first']()[_0x35e7f9(0x232)]()['each'](function (_0x377052) {
                            const _0x1530de = _0x35e7f9;
                            _0xba0ecc(this)[_0x1530de(0x232)]()['length'] > 0x0 && (_0x5a9559 = _0x4f042f[_0x1530de(0x2c0)][_0x1530de(0x151)][0x0][_0x1530de(0x276)][_0x377052]['id']);
                        });
                    }
                    _0x5a9559 == null && (_0xba0ecc('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')['each'](function (_0x36a20d) {
                        const _0x1b5096 = _0x35e7f9;
                        _0xba0ecc(this)[_0x1b5096(0x14f)]('x1lix1fw') && (_0xba0ecc(this)[_0x1b5096(0x232)]()[_0x1b5096(0xc7)] > 0x0 && (_0x5a9559 = _0x4f042f[_0x1b5096(0x2c0)][_0x1b5096(0x151)][0x0]['items'][_0x36a20d]['id']));
                    }), _0xba0ecc('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x35e7f9(0x158)](function (_0x1c8269) {
                        const _0x267e56 = _0x35e7f9;
                        _0xba0ecc(this)[_0x267e56(0x232)]()['hasClass']('_ac3q') && (_0x5a9559 = _0x4f042f['data'][_0x267e56(0x151)][0x0][_0x267e56(0x276)][_0x1c8269]['id']);
                    }));
                    _0x5a9559 == null && (_0x5a9559 = location[_0x35e7f9(0x1f9)][_0x35e7f9(0x23c)]('/')[_0x35e7f9(0x1cc)](_0x73d729 => _0x73d729[_0x35e7f9(0xc7)] > 0x0 && _0x73d729['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x211428 = await _0x40ca37(_0x5a9559);
                    _0x20e445[_0x35e7f9(0x1ed)] && (_0x481ca9 = _0x211428[_0x35e7f9(0x276)][0x0]['taken_at']);
                    _0x211428[_0x35e7f9(0xd7)] === 'ok' ? _0x3788e(_0x211428[_0x35e7f9(0x276)][0x0][_0x35e7f9(0x20e)]['candidates'][0x0]['url'], _0x12d659, _0x35e7f9(0x280), _0x481ca9, _0x35e7f9(0x2af), _0x5a9559) : (_0x20e445['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x1e4362 = !![], _0xeffbe3(!![], _0x456ca6)) : alert(_0x35e7f9(0x12d) + _0x211428[_0x35e7f9(0x12b)]), _0x13e5c1(_0x211428));
                    _0x1609d5(![]);
                    return;
                }
                if (_0x3717bb[_0x35e7f9(0x280)][_0x12d659] && !_0x456ca6) {
                    _0x13e5c1(_0x35e7f9(0x264), _0x12d659), _0x3717bb[_0x35e7f9(0x280)][_0x12d659]['data']['reels_media'][0x0][_0x35e7f9(0x276)]['forEach'](_0x53c81f => {
                        const _0xf2ae25 = _0x35e7f9;
                        _0x53c81f['id'] == _0x2d6a84 && (_0x50b724 = _0x53c81f[_0xf2ae25(0x127)], _0x20e445[_0xf2ae25(0x1ed)] && (_0x481ca9 = _0x53c81f[_0xf2ae25(0x185)], _0x5a9559 = _0x53c81f['id']));
                    });
                    if (_0x50b724[_0x35e7f9(0xc7)] == 0x0) {
                        _0x13e5c1('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x12d659), _0xeffbe3(!![], !![]);
                        return;
                    }
                } else {
                    let _0x41c039 = await _0x2f6c20(_0x12d659), _0x57bc7d = _0x41c039[_0x35e7f9(0x11a)]['pk'], _0x564ca1 = await _0x1688a5(_0x57bc7d);
                    _0x564ca1[_0x35e7f9(0x2c0)][_0x35e7f9(0x151)][0x0][_0x35e7f9(0x276)][_0x35e7f9(0x1c4)](_0x542f79 => {
                        const _0x5bd1a2 = _0x35e7f9;
                        _0x542f79['id'] == _0x2d6a84 && (_0x50b724 = _0x542f79[_0x5bd1a2(0x127)], _0x20e445['RENAME_PUBLISH_DATE'] && (_0x481ca9 = _0x542f79['taken_at_timestamp'], _0x5a9559 = _0x542f79['id']));
                    });
                    if (_0x50b724[_0x35e7f9(0xc7)] == 0x0) {
                        let _0x36da5b = _0xba0ecc(_0x35e7f9(0x215) + _0x12d659 + _0x35e7f9(0x21c))[_0x35e7f9(0x1cc)](function () {
                            const _0x47ee91 = _0x35e7f9;
                            return _0xba0ecc(this)[_0x47ee91(0x232)]()[_0x47ee91(0xc7)] === 0x0 && _0xba0ecc(this)[_0x47ee91(0x1c3)]('svg')['length'] === 0x0 && _0xba0ecc(this)[_0x47ee91(0x125)]()?.[_0x47ee91(0x83)]() === _0x12d659?.['toLowerCase']();
                        })[_0x35e7f9(0x209)](_0x35e7f9(0x22e))[_0x35e7f9(0x1cc)](function () {
                            const _0x23845a = _0x35e7f9;
                            return _0xba0ecc(this)['text']()?.[_0x23845a(0x83)]() !== _0x12d659?.[_0x23845a(0x83)]();
                        })[_0x35e7f9(0x1cc)](function () {
                            const _0x422b70 = _0x35e7f9;
                            return _0xba0ecc(this)[_0x422b70(0x232)]()['length'] > 0x1;
                        })[_0x35e7f9(0x28c)]();
                        _0x36da5b[_0x35e7f9(0x232)]()[_0x35e7f9(0x1cc)](function () {
                            const _0x26192b = _0x35e7f9;
                            return _0xba0ecc(this)[_0x26192b(0x299)]() < 0xa;
                        })['first']()[_0x35e7f9(0x232)]()[_0x35e7f9(0x158)](function (_0x2f2851) {
                            const _0x4fd3d7 = _0x35e7f9;
                            _0xba0ecc(this)[_0x4fd3d7(0x232)]()[_0x4fd3d7(0xc7)] > 0x0 && (_0x50b724 = _0x564ca1[_0x4fd3d7(0x2c0)]['reels_media'][0x0][_0x4fd3d7(0x276)][_0x2f2851][_0x4fd3d7(0x127)], _0x20e445[_0x4fd3d7(0x1ed)] && (_0x481ca9 = _0x564ca1[_0x4fd3d7(0x2c0)][_0x4fd3d7(0x151)][0x0][_0x4fd3d7(0x276)][_0x2f2851][_0x4fd3d7(0x185)], _0x5a9559 = _0x564ca1[_0x4fd3d7(0x2c0)][_0x4fd3d7(0x151)][0x0][_0x4fd3d7(0x276)][_0x2f2851]['id']));
                        }), _0x50b724['length'] == 0x0 && (_0xba0ecc(_0x35e7f9(0x1e9))[_0x35e7f9(0x158)](function (_0x9bcf16) {
                            const _0x258abc = _0x35e7f9;
                            _0xba0ecc(this)['hasClass'](_0x258abc(0x284)) && (_0xba0ecc(this)[_0x258abc(0x232)]()['length'] > 0x0 && (_0x50b724 = _0x564ca1['data'][_0x258abc(0x151)][0x0][_0x258abc(0x276)][_0x9bcf16][_0x258abc(0x127)], _0x20e445[_0x258abc(0x1ed)] && (_0x481ca9 = _0x564ca1['data']['reels_media'][0x0][_0x258abc(0x276)][_0x9bcf16]['taken_at_timestamp'], _0x5a9559 = _0x564ca1['data'][_0x258abc(0x151)][0x0][_0x258abc(0x276)][_0x9bcf16]['id'])));
                        }), _0xba0ecc(_0x35e7f9(0x102))[_0x35e7f9(0x158)](function (_0x1cd691) {
                            const _0xa3c7dd = _0x35e7f9;
                            _0xba0ecc(this)[_0xa3c7dd(0x232)]()[_0xa3c7dd(0x14f)](_0xa3c7dd(0x224)) && (_0x50b724 = _0x564ca1['data'][_0xa3c7dd(0x151)][0x0][_0xa3c7dd(0x276)][_0x1cd691][_0xa3c7dd(0x127)], _0x20e445[_0xa3c7dd(0x1ed)] && (_0x481ca9 = _0x564ca1[_0xa3c7dd(0x2c0)][_0xa3c7dd(0x151)][0x0][_0xa3c7dd(0x276)][_0x1cd691][_0xa3c7dd(0x185)], _0x5a9559 = _0x564ca1[_0xa3c7dd(0x2c0)]['reels_media'][0x0]['items'][_0x1cd691]['id']));
                        }));
                    }
                }
                _0x3788e(_0x50b724, _0x12d659, _0x35e7f9(0x1ce), _0x481ca9, _0x37effe, _0x5a9559), _0x1e4362 = ![], _0x1609d5(![]);
            } else {
                if (_0xba0ecc('body\x20>\x20div\x20div.IG_DWSTORY')['parent']()[_0x35e7f9(0x1c3)]('video[class]')[_0x35e7f9(0xc7)]) {
                    let _0x2bf6af = null;
                    _0xba0ecc(_0x35e7f9(0x9a))[_0x35e7f9(0xc7)] > 0x0 ? _0x2bf6af = _0xba0ecc(_0x35e7f9(0x13c)) : (_0x2bf6af = _0xba0ecc('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x2bf6af[_0x35e7f9(0x1cb)]('position', 'relative'));
                    _0x2bf6af['length'] === 0x0 && (_0x2bf6af = _0xba0ecc(_0x35e7f9(0xd2))[_0x35e7f9(0x18a)]()[_0x35e7f9(0x18a)]()[_0x35e7f9(0x18a)]()[_0x35e7f9(0x1c3)](_0x35e7f9(0x133)), _0x2bf6af[_0x35e7f9(0x1cb)](_0x35e7f9(0x257), _0x35e7f9(0x272)));
                    _0x2bf6af[_0x35e7f9(0xc7)] === 0x0 && (_0x2bf6af = _0xba0ecc(_0x35e7f9(0xd2))[_0x35e7f9(0x18a)]()[_0x35e7f9(0x18a)]()[_0x35e7f9(0x18a)]()['find'](_0x35e7f9(0x138)), _0x2bf6af[_0x35e7f9(0x1cb)](_0x35e7f9(0x257), _0x35e7f9(0x272)));
                    if (_0x2bf6af['length'] === 0x0) {
                        let _0x8fdde6 = _0xba0ecc(_0x35e7f9(0x262)), _0x3d93a5 = 0x0;
                        _0x8fdde6[_0x35e7f9(0x158)](function () {
                            const _0x7502dd = _0x35e7f9;
                            _0xba0ecc(this)[_0x7502dd(0x24c)]() > _0x3d93a5 && (_0x3d93a5 = _0xba0ecc(this)[_0x7502dd(0x24c)](), _0x2bf6af = _0xba0ecc(this)[_0x7502dd(0x232)](_0x7502dd(0xd1))[_0x7502dd(0x28c)]());
                        });
                    }
                    _0x2bf6af != null && (_0x2bf6af[_0x35e7f9(0x28c)]()[_0x35e7f9(0x1cb)](_0x35e7f9(0x257), _0x35e7f9(0x272)), _0x2bf6af[_0x35e7f9(0x28c)]()[_0x35e7f9(0x27f)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x368cd0(_0x35e7f9(0xb3)) + _0x35e7f9(0x143) + _0x16a90f[_0x35e7f9(0x74)] + _0x35e7f9(0x9e)));
                }
            }
        }
        async function _0x370900(_0x446088, _0x2bab66, _0x4d9606) {
            const _0x2dae34 = _0x59dba6;
            if (_0x446088) {
                _0x1609d5(!![]);
                let _0x1c6155 = location[_0x2dae34(0xf0)]['split']('?')['at'](0x0)['split'](_0x2dae34(0x21a))['at'](-0x1)[_0x2dae34(0x1b8)]('/', ''), _0x11f499 = await _0x4d19b0(_0x1c6155), _0x24fa42 = _0x11f499['data'], _0x1c7a8f = new Date()[_0x2dae34(0x188)]();
                _0x20e445[_0x2dae34(0x1ed)] && (_0x11f499[_0x2dae34(0x137)] === 'query_hash' ? _0x1c7a8f = _0x24fa42[_0x2dae34(0x132)][_0x2dae34(0x185)] : _0x1c7a8f = _0x24fa42['taken_at']);
                if (_0x11f499[_0x2dae34(0x137)] === _0x2dae34(0x145)) {
                    if (_0x2bab66 && _0x24fa42[_0x2dae34(0x132)][_0x2dae34(0x1d6)]) {
                        if (_0x4d9606)
                            _0x49a481(_0x24fa42[_0x2dae34(0x132)][_0x2dae34(0xb7)]);
                        else {
                            let _0x2d5669 = _0x2dae34(0x187);
                            _0x3788e(_0x24fa42[_0x2dae34(0x132)][_0x2dae34(0xb7)], _0x24fa42['shortcode_media'][_0x2dae34(0x206)][_0x2dae34(0x110)], 'reels', _0x1c7a8f, _0x2d5669, _0x1c6155);
                        }
                    } else {
                        if (_0x4d9606)
                            _0x49a481(_0x24fa42[_0x2dae34(0x132)][_0x2dae34(0x200)]['at'](-0x1)[_0x2dae34(0xdc)]);
                        else {
                            let _0x2dd237 = _0x2dae34(0x2af);
                            _0x3788e(_0x24fa42[_0x2dae34(0x132)][_0x2dae34(0x200)]['at'](-0x1)[_0x2dae34(0xdc)], _0x24fa42[_0x2dae34(0x132)][_0x2dae34(0x206)][_0x2dae34(0x110)], _0x2dae34(0x29f), _0x1c7a8f, _0x2dd237, _0x1c6155);
                        }
                    }
                } else {
                    if (_0x2bab66 && _0x24fa42[_0x2dae34(0xf8)] != null) {
                        if (_0x4d9606)
                            _0x49a481(_0x24fa42[_0x2dae34(0xf8)][0x0]['url']);
                        else {
                            let _0x4f3fe9 = _0x2dae34(0x187);
                            _0x3788e(_0x24fa42[_0x2dae34(0xf8)][0x0][_0x2dae34(0x2cb)], _0x24fa42[_0x2dae34(0x206)][_0x2dae34(0x110)], _0x2dae34(0x29f), _0x1c7a8f, _0x4f3fe9, _0x1c6155);
                        }
                    } else {
                        if (_0x4d9606)
                            _0x49a481(_0x24fa42[_0x2dae34(0x20e)]['candidates'][0x0][_0x2dae34(0x2cb)]);
                        else {
                            let _0x8214bd = _0x2dae34(0x2af);
                            _0x3788e(_0x24fa42[_0x2dae34(0x20e)][_0x2dae34(0x10d)][0x0][_0x2dae34(0x2cb)], _0x24fa42[_0x2dae34(0x206)][_0x2dae34(0x110)], 'reels', _0x1c7a8f, _0x8214bd, _0x1c6155);
                        }
                    }
                }
                _0x1609d5(![]);
            } else
                var _0x2712ec = setInterval(() => {
                    const _0x3409ff = _0x2dae34;
                    _0xba0ecc('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')['length'] > 0x0 && (clearInterval(_0x2712ec), _0x20e445[_0x3409ff(0x1e5)] && (_0xba0ecc(_0x3409ff(0xd4))[_0x3409ff(0x8a)](), _0xba0ecc(_0x3409ff(0x182))[_0x3409ff(0x27f)](_0x3409ff(0x248)), _0xba0ecc(_0x3409ff(0x11f))[_0x3409ff(0x27f)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0xba0ecc('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x3409ff(0x27f)](_0x3409ff(0x167)), _0xba0ecc('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up')['on'](_0x3409ff(0x7c), function () {
                        const _0x1b821a = _0x3409ff;
                        _0xba0ecc(_0x1b821a(0x241))[0x0][_0x1b821a(0x157)]({
                            'top': -0x1e,
                            'behavior': _0x1b821a(0x214)
                        });
                    }), _0xba0ecc('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0x3409ff(0x7c), function () {
                        const _0x65617f = _0x3409ff;
                        _0xba0ecc(_0x65617f(0x241))[0x0][_0x65617f(0x157)]({
                            'top': 0x1e,
                            'behavior': _0x65617f(0x214)
                        });
                    })), _0xba0ecc(_0x3409ff(0x289))['children']('div')[_0x3409ff(0x158)](function () {
                        const _0x25af3e = _0x3409ff;
                        if (_0xba0ecc(this)['children']()[_0x25af3e(0xc7)] > 0x0) {
                            if (!_0xba0ecc(this)['children']()['find'](_0x25af3e(0x144))[_0x25af3e(0xc7)]) {
                                var _0x9bd03f = _0xba0ecc(this);
                                _0xba0ecc(this)[_0x25af3e(0x232)]()[_0x25af3e(0x1cb)]('position', 'relative'), _0xba0ecc(this)['children']()[_0x25af3e(0x27f)](_0x25af3e(0xad) + _0x368cd0('DW') + _0x25af3e(0xcc) + _0x16a90f['DOWNLOAD'] + _0x25af3e(0x9e)), _0xba0ecc(this)[_0x25af3e(0x232)]()[_0x25af3e(0x27f)](_0x25af3e(0x28b) + _0x368cd0(_0x25af3e(0x136)) + _0x25af3e(0x16e) + _0x16a90f[_0x25af3e(0x136)] + _0x25af3e(0x9e)), _0xba0ecc(this)['children']()[_0x25af3e(0x27f)](_0x25af3e(0x71) + _0x368cd0(_0x25af3e(0xb3)) + _0x25af3e(0x15f) + _0x16a90f[_0x25af3e(0x74)] + _0x25af3e(0x9e));
                                _0x20e445[_0x25af3e(0x295)] && _0xba0ecc(this)[_0x25af3e(0x1c3)](_0x25af3e(0x2ac))[_0x25af3e(0x158)](function () {
                                    _0xba0ecc(this)['on']('ended', function () {
                                        const _0x549f79 = a0_0x4b53;
                                        if (!_0xba0ecc(this)[_0x549f79(0x2c0)](_0x549f79(0x186))) {
                                            let _0x4e761d = _0xba0ecc(this)[_0x549f79(0x109)]()['find'](_0x549f79(0x1e4))[_0x549f79(0x209)](_0x549f79(0x12c));
                                            _0x4e761d[_0x549f79(0xc7)] > 0x0 ? (_0xba0ecc(this)[_0x549f79(0x1eb)](_0x549f79(0x246), !![]), _0x4e761d[_0x549f79(0x7c)](), _0x13e5c1('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()')) : (_0xba0ecc(this)[_0x549f79(0x1eb)](_0x549f79(0x246), !![]), _0xba0ecc(this)[_0x549f79(0x18a)]()[_0x549f79(0x1c3)](_0x549f79(0x2c9))[_0x549f79(0x2c7)](_0x549f79(0x77)), this[_0x549f79(0x124)](), _0x13e5c1(_0x549f79(0x18d)));
                                        }
                                    });
                                });
                                _0x20e445[_0x25af3e(0x18b)] && _0xba0ecc(this)[_0x25af3e(0x1c3)](_0x25af3e(0x2ac))[_0x25af3e(0x158)](function () {
                                    const _0x5808b8 = _0x25af3e;
                                    if (!_0xba0ecc(this)[_0x5808b8(0x2c0)]('controls')) {
                                        let _0xc216b6 = _0xba0ecc(this);
                                        _0x13e5c1(_0x5808b8(0x89)), this[_0x5808b8(0x26a)] = _0x47e989, _0xba0ecc(this)['on'](_0x5808b8(0x1e0), function () {
                                            this['volume'] = _0x47e989;
                                        }), _0xba0ecc(this)['on']('contextmenu', function (_0x34890f) {
                                            const _0x5238e6 = _0x5808b8;
                                            _0x34890f['preventDefault'](), _0xc216b6[_0x5238e6(0x1cb)]('z-index', '-1'), _0xc216b6[_0x5238e6(0x2c7)](_0x5238e6(0x6d));
                                        }), _0xba0ecc(this)[_0x5808b8(0x18a)]()[_0x5808b8(0x1c3)](_0x5808b8(0xe8))['filter'](function () {
                                            const _0x3a56bb = _0x5808b8;
                                            return _0xba0ecc(this)[_0x3a56bb(0x18a)](_0x3a56bb(0xec))[_0x3a56bb(0xc7)] > 0x0 && _0xba0ecc(this)[_0x3a56bb(0x1cb)](_0x3a56bb(0x103)) === _0x3a56bb(0x10e) && _0xba0ecc(this)['attr']('style') != null;
                                        })[_0x5808b8(0x28c)]()['on'](_0x5808b8(0xea), function (_0x483266) {
                                            const _0x25c9db = _0x5808b8;
                                            _0x483266[_0x25c9db(0x27a)](), _0xc216b6[_0x25c9db(0x1cb)](_0x25c9db(0x2ca), '2'), _0xc216b6[_0x25c9db(0x1eb)]('controls', !![]);
                                        }), _0xba0ecc(this)['on'](_0x5808b8(0x94), function () {
                                            const _0x286910 = _0x5808b8;
                                            let _0x5ac13e = _0xba0ecc(this)[_0x286910(0x18a)]()[_0x286910(0x1c3)](_0x286910(0x292))[_0x286910(0x1c3)](_0x286910(0x7f))['filter'](function (_0x40de61) {
                                                const _0x3c0d17 = _0x286910;
                                                return _0xba0ecc(this)['width']() <= 0x40 && _0xba0ecc(this)[_0x3c0d17(0x299)]() <= 0x40 && _0xba0ecc(this)['find'](_0x3c0d17(0x1b0))[_0x3c0d17(0xc7)] > 0x0;
                                            });
                                            var _0x2e5109 = _0x5ac13e[_0x286910(0x1c3)](_0x286910(0x27b))[_0x286910(0xc7)] === 0x0;
                                            this[_0x286910(0x169)] != _0x2e5109 && (this['volume'] = _0x47e989, _0x5ac13e?.[_0x286910(0x7c)]()), _0xba0ecc(this)['attr'](_0x286910(0x21e)) && (_0x47e989 = this['volume'], GM_setValue('G_VIDEO_VOLUME', this[_0x286910(0x26a)])), this[_0x286910(0x26a)] == _0x47e989 && _0xba0ecc(this)[_0x286910(0x1eb)](_0x286910(0x21e), !![]);
                                        }), _0xba0ecc(this)['css'](_0x5808b8(0x257), _0x5808b8(0x1ab)), _0xba0ecc(this)[_0x5808b8(0x1cb)]('z-index', '2'), _0xba0ecc(this)[_0x5808b8(0x1eb)](_0x5808b8(0x25b), !![]), _0xba0ecc(this)['attr'](_0x5808b8(0x6d), !![]);
                                    }
                                });
                                var _0x226a43 = _0x9bd03f[_0x25af3e(0x1c3)](_0x25af3e(0x2ac)), _0x596da1 = _0xba0ecc(this)[_0x25af3e(0x1c3)](_0x25af3e(0x1a3))['first']();
                                _0x5cac90(_0x226a43, _0x596da1, _0x25af3e(0x15a));
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x12260d(_0x93b39e) {
            const _0x4cfbec = _0x59dba6;
            let _0x207ff0 = new URL(_0x93b39e), _0x2331a4 = _0x207ff0?.[_0x4cfbec(0xf7)]?.[_0x4cfbec(0x2a9)](_0x4cfbec(0x2b4))?.[_0x4cfbec(0x23c)]('.')['at'](0x0);
            return _0x2331a4 ? atob(_0x2331a4) : null;
        }
        function _0x185958(_0x4eccbe) {
            return new Promise((_0x53a6e6, _0x31d35e) => {
                const _0x38d888 = a0_0x4b53;
                let _0x43f629 = _0x38d888(0x82) + _0x4eccbe + _0x38d888(0x96);
                GM_xmlhttpRequest({
                    'method': _0x38d888(0x126),
                    'url': _0x43f629,
                    'onload': function (_0x5be6ae) {
                        const _0x4ead36 = _0x38d888;
                        try {
                            let _0x482688 = JSON[_0x4ead36(0x159)](_0x5be6ae[_0x4ead36(0x222)]);
                            _0x53a6e6(_0x482688);
                        } catch (_0x4efd36) {
                            _0x13e5c1(_0x4ead36(0x234), _0x4ead36(0x86), _0x4efd36[_0x4ead36(0x12b)]), _0x31d35e(_0x4efd36);
                        }
                    },
                    'onerror': function (_0x23b191) {
                        const _0x258eda = _0x38d888;
                        _0x13e5c1(_0x258eda(0x234), _0x258eda(0x86), _0x23b191), _0x31d35e(_0x23b191);
                    }
                });
            });
        }
        function _0x1688a5(_0x41b2dc) {
            return new Promise((_0x50ca0f, _0x2d1f3b) => {
                const _0x345d7b = a0_0x4b53;
                let _0x36d22f = _0x345d7b(0x2bf) + _0x41b2dc + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': _0x345d7b(0x126),
                    'url': _0x36d22f,
                    'onload': function (_0x3ca844) {
                        const _0x32c7f1 = _0x345d7b;
                        try {
                            let _0x213e46 = JSON[_0x32c7f1(0x159)](_0x3ca844[_0x32c7f1(0x222)]);
                            _0x13e5c1('getStories()', _0x213e46), _0x50ca0f(_0x213e46);
                        } catch (_0xa82f38) {
                            _0x13e5c1(_0x32c7f1(0x14e), _0x32c7f1(0x86), _0xa82f38[_0x32c7f1(0x12b)]), _0x2d1f3b(_0xa82f38);
                        }
                    },
                    'onerror': function (_0x12f592) {
                        const _0x363666 = _0x345d7b;
                        _0x13e5c1(_0x363666(0x14e), _0x363666(0x86), _0x12f592), _0x2d1f3b(_0x12f592);
                    }
                });
            });
        }
        function _0x2f6c20(_0x4ad5f5) {
            return new Promise((_0x22f819, _0x29f589) => {
                const _0x4be939 = a0_0x4b53;
                let _0x42769d = 'https://www.instagram.com/web/search/topsearch/?query=' + _0x4ad5f5;
                GM_xmlhttpRequest({
                    'method': _0x4be939(0x126),
                    'url': _0x42769d,
                    'onload': function (_0x1ce1dc) {
                        const _0x661b92 = _0x4be939;
                        let _0x493d82 = JSON[_0x661b92(0x159)](_0x1ce1dc[_0x661b92(0x222)]), _0x3d59f3 = null;
                        _0x493d82[_0x661b92(0x213)][_0x661b92(0x1c4)](_0xcb4bd3 => {
                            const _0x37b401 = _0x661b92;
                            _0xcb4bd3[_0x37b401(0x11a)][_0x37b401(0x110)]?.[_0x37b401(0x83)]() === _0x4ad5f5?.[_0x37b401(0x83)]() && (_0x3d59f3 = _0xcb4bd3);
                        }), _0x3d59f3 != null ? (_0x13e5c1(_0x661b92(0x1ff), _0x3d59f3), _0x22f819(_0x3d59f3)) : _0x190cc1(_0x4ad5f5)['then'](_0x272e6f => {
                            _0x22f819(_0x272e6f);
                        })[_0x661b92(0x115)](_0x6fc2e8 => {
                            const _0x122e66 = _0x661b92;
                            alert(_0x122e66(0x81));
                        });
                    },
                    'onerror': function (_0x2b9713) {
                        const _0xeefba0 = _0x4be939;
                        _0x13e5c1('getUserId()', _0xeefba0(0x86), _0x2b9713), _0x29f589(_0x2b9713);
                    }
                });
            });
        }
        function _0x190cc1(_0x340140) {
            return new Promise((_0x4a19dc, _0x376cad) => {
                const _0x3b70bb = a0_0x4b53;
                let _0x488533 = _0x3b70bb(0x1e6) + _0x340140;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x488533,
                    'headers': { 'X-IG-App-ID': _0x2562a4() },
                    'onload': function (_0x5e55f3) {
                        const _0x3f8001 = _0x3b70bb;
                        try {
                            let _0x1fa7b0 = JSON[_0x3f8001(0x159)](_0x5e55f3[_0x3f8001(0x222)]), _0x3d7740 = _0x1fa7b0?.['data']?.[_0x3f8001(0x11a)];
                            if (_0x3d7740 != null) {
                                let _0x482abd = _0x1fa7b0?.[_0x3f8001(0x2c0)];
                                _0x482abd[_0x3f8001(0x11a)]['pk'] = _0x482abd['user']['id'], _0x13e5c1('getUserIdWithAgent()', _0x1fa7b0), _0x4a19dc(_0x482abd);
                            } else
                                _0x13e5c1(_0x3f8001(0x210), 'reject', _0x3f8001(0x1e2)), _0x376cad('undefined');
                        } catch (_0x164351) {
                            _0x13e5c1(_0x3f8001(0x210), _0x3f8001(0x86), _0x164351[_0x3f8001(0x12b)]), _0x376cad(_0x164351);
                        }
                    },
                    'onerror': function (_0x2103fd) {
                        const _0xb67853 = _0x3b70bb;
                        _0x13e5c1(_0xb67853(0x210), _0xb67853(0x86), _0x2103fd), _0x376cad(_0x2103fd);
                    }
                });
            });
        }
        function _0x398435(_0xfd8d63) {
            return new Promise((_0x4defea, _0x3ae139) => {
                const _0xc7e302 = a0_0x4b53;
                let _0x5adb81 = _0xc7e302(0x101) + _0xfd8d63 + _0xc7e302(0x1a8);
                GM_xmlhttpRequest({
                    'method': _0xc7e302(0x126),
                    'url': _0x5adb81,
                    'headers': { 'User-Agent': _0xc7e302(0x263) },
                    'onload': function (_0x4f1bd8) {
                        const _0x63d259 = _0xc7e302;
                        try {
                            let _0x5e38a2 = JSON[_0x63d259(0x159)](_0x4f1bd8[_0x63d259(0x222)]);
                            _0x5e38a2[_0x63d259(0xd7)] !== 'ok' ? (_0x13e5c1(_0x63d259(0x193), _0x63d259(0x86), _0x5e38a2), _0x3ae139(_0x63d259(0x9b))) : (_0x13e5c1(_0x63d259(0x193), _0x5e38a2), _0x4defea(_0x5e38a2['user'][_0x63d259(0x1f7)]?.['url']));
                        } catch (_0x5ec03e) {
                            _0x13e5c1(_0x63d259(0x193), _0x63d259(0x86), _0x5ec03e), _0x3ae139(_0x5ec03e);
                        }
                    },
                    'onerror': function (_0x27849) {
                        const _0x27805f = _0xc7e302;
                        _0x13e5c1('getUserHighSizeProfile()', _0x27805f(0x86), _0x27849), _0x3ae139(_0x27849);
                    }
                });
            });
        }
        function _0x421831(_0x4a410b) {
            return new Promise((_0x1df3ce, _0x27c81f) => {
                const _0x539a27 = a0_0x4b53;
                if (!_0x4a410b)
                    _0x27c81f(_0x539a27(0xdf));
                let _0x30ec9f = _0x4a410b, _0x1ef2a0 = _0x539a27(0xef) + _0x30ec9f + _0x539a27(0x221);
                GM_xmlhttpRequest({
                    'method': _0x539a27(0x126),
                    'url': _0x1ef2a0,
                    'onload': function (_0x3abd7d) {
                        const _0x3738f9 = _0x539a27;
                        try {
                            let _0x2a25f4 = JSON['parse'](_0x3abd7d[_0x3738f9(0x222)]);
                            _0x13e5c1(_0x3738f9(0xf5), _0x2a25f4), _0x1df3ce(_0x2a25f4['data'][_0x3738f9(0x132)][_0x3738f9(0x206)][_0x3738f9(0x110)]);
                        } catch (_0x10dacf) {
                            _0x13e5c1(_0x3738f9(0xf5), 'reject', _0x10dacf['message']), _0x27c81f(_0x10dacf);
                        }
                    },
                    'onerror': function (_0x42baf8) {
                        const _0x4f037b = _0x539a27;
                        _0x13e5c1(_0x4f037b(0xf5), _0x4f037b(0x86), _0x42baf8), _0x27c81f(_0x42baf8);
                    }
                });
            });
        }
        function _0x4d19b0(_0x5d54b9) {
            return new Promise((_0x599d56, _0x2e5431) => {
                const _0x2cdd7a = a0_0x4b53;
                if (!_0x5d54b9)
                    _0x2e5431(_0x2cdd7a(0xdf));
                let _0x42780f = _0x5d54b9, _0x4b2dcd = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x42780f + _0x2cdd7a(0x221);
                GM_xmlhttpRequest({
                    'method': _0x2cdd7a(0x126),
                    'url': _0x4b2dcd,
                    'headers': { 'User-Agent': _0x2cdd7a(0x263) },
                    'onload': function (_0x5d42e0) {
                        const _0x364312 = _0x2cdd7a;
                        try {
                            let _0x248c46 = JSON[_0x364312(0x159)](_0x5d42e0['response']);
                            _0x13e5c1(_0x248c46), _0x248c46['status'] === _0x364312(0x108) ? (_0x13e5c1(_0x364312(0x1e8), _0x364312(0xf4), _0x42780f), _0x1f4e86(_0x42780f)[_0x364312(0x1b4)](_0x28785b => {
                                const _0x1b4d5b = _0x364312;
                                _0x599d56({
                                    'type': _0x1b4d5b(0x1f0),
                                    'data': _0x28785b[_0x1b4d5b(0xae)][_0x1b4d5b(0x276)][0x0]
                                });
                            })[_0x364312(0x115)](_0x19a156 => {
                                _0x2e5431(_0x19a156);
                            })) : _0x599d56({
                                'type': 'query_hash',
                                'data': _0x248c46[_0x364312(0x2c0)]
                            });
                        } catch (_0x5e28b6) {
                            _0x13e5c1(_0x364312(0x69), _0x364312(0x86), _0x5e28b6[_0x364312(0x12b)]), _0x2e5431(_0x5e28b6);
                        }
                    },
                    'onerror': function (_0x321b4f) {
                        const _0x8c5269 = _0x2cdd7a;
                        _0x13e5c1('getBlobMedia()', _0x8c5269(0x86), _0x321b4f), _0x2e5431(_0x321b4f);
                    }
                });
            });
        }
        function _0x1f4e86(_0x24d33a) {
            return new Promise((_0xa67aa9, _0x279c4a) => {
                const _0x41691f = a0_0x4b53;
                if (!_0x24d33a)
                    _0x279c4a('NOPATH');
                let _0x485d4f = _0x24d33a, _0x2f9099 = _0x41691f(0x23b) + _0x485d4f + _0x41691f(0x10f);
                GM_xmlhttpRequest({
                    'method': _0x41691f(0x126),
                    'url': _0x2f9099,
                    'headers': {
                        'User-Agent': _0x41691f(0x263),
                        'X-IG-App-ID': _0x2562a4()
                    },
                    'onload': function (_0x3482d7) {
                        const _0x5c8b3e = _0x41691f;
                        try {
                            let _0x24054a = JSON[_0x5c8b3e(0x159)](_0x3482d7[_0x5c8b3e(0x222)]);
                            _0x13e5c1(_0x24054a), _0x24054a[_0x5c8b3e(0xd7)] === _0x5c8b3e(0x108) ? (alert('getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a' + _0x24054a[_0x5c8b3e(0x12b)] + ':\x20' + _0x24054a[_0x5c8b3e(0x228)]), _0x13e5c1(_0x5c8b3e(0x161) + _0x24054a['message'] + ':\x20' + _0x24054a[_0x5c8b3e(0x228)]), _0x279c4a(_0x3482d7)) : (_0x13e5c1(_0x5c8b3e(0xd9), _0x24054a[_0x5c8b3e(0x2c0)]), _0xa67aa9(_0x24054a[_0x5c8b3e(0x2c0)]));
                        } catch (_0x8ee0db) {
                            _0x13e5c1('getBlobMediaWithQueryID()', 'reject', _0x8ee0db[_0x5c8b3e(0x12b)]), _0x279c4a(_0x8ee0db);
                        }
                    },
                    'onerror': function (_0x24f2f1) {
                        const _0x4d58f4 = _0x41691f;
                        _0x13e5c1(_0x4d58f4(0xd9), _0x4d58f4(0x86), _0x24f2f1), _0x279c4a(_0x24f2f1);
                    }
                });
            });
        }
        function _0x449efb(_0x50848f, _0x5c9ae3) {
            const _0x4e9494 = _0x59dba6;
            _0x5c9ae3 === !![] && (_0x13e5c1(_0x4e9494(0xa2), _0x4e9494(0x2b0)), _0xba0ecc('article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]')[_0x4e9494(0x1cc)](function () {
                const _0x4f0025 = _0x4e9494;
                return _0xba0ecc(this)[_0x4f0025(0x1c3)](_0x4f0025(0x1ca))[_0x4f0025(0xc7)] === 0x0;
            })[_0x4e9494(0x2c7)](_0x4e9494(0xb9)));
            if (_0x50848f == ![]) {
                const _0x1b5866 = 0x64;
                let _0x281fae = 0x0;
                var _0x46879b = setInterval(() => {
                    const _0x4d835b = _0x4e9494;
                    (_0x281fae > _0x1b5866 || _0xba0ecc(_0x4d835b(0x290))[_0x4d835b(0xc7)] > 0x0) && (clearInterval(_0x46879b), _0x281fae > _0x1b5866 && console[_0x4d835b(0x1c8)](_0x4d835b(0x19a), _0x4d835b(0x17f))), _0x13e5c1('onReadyMyDW()\x20Timer', _0x4d835b(0x91)), _0x1e202(), _0x281fae++;
                }, 0x32);
            } else
                _0x1e202();
        }
        function _0x2562a4() {
            const _0x4e7450 = _0x59dba6;
            let _0x5b9102 = null;
            return _0xba0ecc(_0x4e7450(0x16d))['each'](function () {
                const _0x474362 = _0x4e7450, _0x46ba15 = /"APP_ID":"([0-9]+)"/ig, _0x28946a = _0xba0ecc(this)[_0x474362(0x125)]()[_0x474362(0x8b)](_0x46ba15);
                _0x28946a != null && _0x5b9102 == null && (_0x5b9102 = [..._0xba0ecc(this)['text']()['matchAll'](_0x46ba15)]);
            }), _0x5b9102 ? _0x5b9102['at'](0x0)['at'](-0x1) : null;
        }
        function _0x1609d5(_0x155e67) {
            const _0x326168 = _0x59dba6;
            _0x155e67 ? (_0xba0ecc(_0x326168(0x199))[_0x326168(0x156)]('x1s85apg'), _0xba0ecc('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x326168(0x1cb)](_0x326168(0x2ca), _0x326168(0x9d))) : (_0xba0ecc(_0x326168(0x199))[_0x326168(0x1f3)]('x1s85apg'), _0xba0ecc(_0x326168(0x199))[_0x326168(0x1cb)](_0x326168(0x2ca), ''));
        }
        function _0x40ca37(_0x2ac645) {
            return new Promise((_0xf4488e, _0x445de3) => {
                const _0x3aad7a = a0_0x4b53;
                let _0x5d879b = _0x3aad7a(0x80) + _0x2ac645 + _0x3aad7a(0x1a8);
                if (_0x2ac645 == null) {
                    alert(_0x3aad7a(0x2bd)), _0x13e5c1('getMediaInfo()', 'reject', _0x3aad7a(0x2bd)), _0x1609d5(![]), _0x445de3(-0x1);
                    return;
                }
                if (_0x2562a4() == null) {
                    alert('Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x13e5c1(_0x3aad7a(0x212), _0x3aad7a(0x86), _0x3aad7a(0x294)), _0x1609d5(![]), _0x445de3(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x3aad7a(0x126),
                    'url': _0x5d879b,
                    'headers': {
                        'User-Agent': window[_0x3aad7a(0x252)]['userAgent'],
                        'Accept': '*/*',
                        'X-IG-App-ID': _0x2562a4()
                    },
                    'onload': function (_0x2e3a67) {
                        const _0x3a74f0 = _0x3aad7a;
                        if (_0x2e3a67[_0x3a74f0(0x2ba)] == _0x5d879b) {
                            let _0x2d728d = JSON[_0x3a74f0(0x159)](_0x2e3a67['response']);
                            _0x13e5c1(_0x3a74f0(0x212), _0x2d728d), _0xf4488e(_0x2d728d);
                        } else {
                            let _0x281bd9 = new URL(_0x2e3a67[_0x3a74f0(0x2ba)]);
                            _0x281bd9[_0x3a74f0(0x1f9)][_0x3a74f0(0x68)]('/accounts/login') ? (_0x13e5c1('getMediaInfo()', _0x3a74f0(0x86), 'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.'), alert('The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.')) : (_0x13e5c1(_0x3a74f0(0x212), _0x3a74f0(0x86), _0x3a74f0(0x1a9) + _0x2e3a67['finalUrl'] + '\x22'), alert('Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x2e3a67[_0x3a74f0(0x2ba)] + '\x22')), _0x1609d5(![]), _0x445de3(-0x1);
                        }
                    },
                    'onerror': function (_0x335be1) {
                        const _0x398b5f = _0x3aad7a;
                        _0x13e5c1(_0x398b5f(0x212), 'reject', _0x335be1), _0xf4488e(_0x335be1);
                    }
                });
            });
        }
        function _0x12c572(_0x14a125) {
            const _0x5d88da = _0x59dba6;
            var _0x3596b0 = 0x0, _0xebdbcd = _0x14a125['find']('.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div');
            return (_0xebdbcd == null || !_0xebdbcd[_0x5d88da(0x14f)]('_acnb')) && (_0xebdbcd = _0x14a125[_0x5d88da(0x1c3)](_0x5d88da(0x7d))['eq'](0x0)[_0x5d88da(0x232)](_0x5d88da(0xd1))), _0xebdbcd[_0x5d88da(0x1cc)](_0x5d88da(0x218))['each'](function (_0x36bf5f) {
                const _0x7aee2b = _0x5d88da;
                _0xba0ecc(this)[_0x7aee2b(0x14f)](_0x7aee2b(0x1f8)) && (_0x3596b0 = _0x36bf5f);
            }), _0x3596b0;
        }
        function _0x38905d(_0x551259) {
            const _0x834a52 = _0x59dba6;
            _0x20e445[_0x834a52(0x295)] && _0x551259[_0x834a52(0x1c3)](_0x834a52(0x2ac))['each'](function () {
                _0xba0ecc(this)['on']('ended', function () {
                    const _0x25a6a2 = a0_0x4b53;
                    !_0xba0ecc(this)[_0x25a6a2(0x2c0)](_0x25a6a2(0x186)) && (_0xba0ecc(this)[_0x25a6a2(0x1eb)]('data-loop', !![]), this['pause'](), _0x13e5c1(_0x25a6a2(0x255)));
                });
            });
            _0x20e445['MODIFY_VIDEO_VOLUME'] && _0x551259[_0x834a52(0x1c3)](_0x834a52(0x2ac))[_0x834a52(0x158)](function () {
                _0xba0ecc(this)['on']('play\x20playing', function () {
                    const _0xbe7548 = a0_0x4b53;
                    !_0xba0ecc(this)['data'](_0xbe7548(0x147)) && (_0xba0ecc(this)[_0xbe7548(0x1eb)](_0xbe7548(0x13b), !![]), this['volume'] = _0x47e989, _0x13e5c1(_0xbe7548(0x1db)));
                });
            });
            _0x20e445[_0x834a52(0x18b)] && _0x551259[_0x834a52(0x1c3)](_0x834a52(0x2ac))['each'](function () {
                const _0x72e4e3 = _0x834a52;
                if (!_0xba0ecc(this)[_0x72e4e3(0x2c0)](_0x72e4e3(0x6d))) {
                    let _0x3be09e = _0xba0ecc(this);
                    _0x13e5c1(_0x72e4e3(0x12e)), this['volume'] = _0x47e989, _0xba0ecc(this)['on'](_0x72e4e3(0x1e0), function () {
                        this['volume'] = _0x47e989;
                    }), _0xba0ecc(this)['on'](_0x72e4e3(0xea), function (_0x8384d9) {
                        const _0x1b7516 = _0x72e4e3;
                        _0x8384d9[_0x1b7516(0x27a)](), _0x3be09e[_0x1b7516(0x1cb)](_0x1b7516(0x2ca), '-1'), _0x3be09e[_0x1b7516(0x2c7)]('controls');
                    }), _0xba0ecc(this)[_0x72e4e3(0x18a)]()[_0x72e4e3(0x1c3)]('video\x20+\x20div\x20>\x20div')[_0x72e4e3(0x28c)]()['on']('contextmenu', function (_0x34145d) {
                        const _0x1ac7b0 = _0x72e4e3;
                        _0x34145d[_0x1ac7b0(0x27a)](), _0x3be09e['css']('z-index', '2'), _0x3be09e[_0x1ac7b0(0x1eb)](_0x1ac7b0(0x6d), !![]);
                    }), _0xba0ecc(this)['on'](_0x72e4e3(0x94), function () {
                        const _0x1b31ac = _0x72e4e3;
                        let _0x26bb70 = _0xba0ecc(this)[_0x1b31ac(0x18a)]()[_0x1b31ac(0x1c3)]('video\x20+\x20div\x20>\x20div')[_0x1b31ac(0x1c3)](_0x1b31ac(0x7f))[_0x1b31ac(0x1cc)](function (_0x1ffda1) {
                            const _0x7e2c1d = _0x1b31ac;
                            return _0xba0ecc(this)[_0x7e2c1d(0x24c)]() <= 0x40 && _0xba0ecc(this)[_0x7e2c1d(0x299)]() <= 0x40 && _0xba0ecc(this)['find'](_0x7e2c1d(0x1b0))['length'] > 0x0;
                        });
                        var _0x25f431 = _0x26bb70[_0x1b31ac(0x1c3)](_0x1b31ac(0x27b))[_0x1b31ac(0xc7)] === 0x0;
                        this[_0x1b31ac(0x169)] != _0x25f431 && (this[_0x1b31ac(0x26a)] = _0x47e989, _0x26bb70?.[_0x1b31ac(0x7c)]()), _0xba0ecc(this)[_0x1b31ac(0x1eb)](_0x1b31ac(0x21e)) && (_0x47e989 = this[_0x1b31ac(0x26a)], GM_setValue(_0x1b31ac(0x258), this[_0x1b31ac(0x26a)])), this['volume'] == _0x47e989 && _0xba0ecc(this)[_0x1b31ac(0x1eb)](_0x1b31ac(0x21e), !![]);
                    }), _0xba0ecc(this)['css']('position', _0x72e4e3(0x1ab)), _0xba0ecc(this)[_0x72e4e3(0x1cb)]('z-index', '2'), _0xba0ecc(this)[_0x72e4e3(0x1eb)](_0x72e4e3(0x25b), !![]), _0xba0ecc(this)[_0x72e4e3(0x1eb)](_0x72e4e3(0x6d), !![]);
                }
            });
            var _0x1641bc = _0x551259[_0x834a52(0x1c3)]('video'), _0x59a560 = _0x551259[_0x834a52(0x1c3)](_0x834a52(0x292))[_0x834a52(0x28c)]();
            _0x5cac90(_0x1641bc, _0x59a560, _0x834a52(0x23a), _0x834a52(0xaa));
        }
        ;
        function _0x1e202() {
            const _0x4c6307 = _0x59dba6;
            _0xba0ecc(_0x4c6307(0x249))['map'](function (_0x4f9906) {
                const _0x447af2 = _0x4c6307;
                return _0xba0ecc(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0xba0ecc(this)[_0x447af2(0x18a)]()[_0x447af2(0x18a)]()[_0x447af2(0x18a)]()[_0x447af2(0x18a)]()[0x0] : this;
            })[_0x4c6307(0x1cc)](function () {
                const _0x451c08 = _0x4c6307;
                return _0xba0ecc(this)['height']() > 0x0 && _0xba0ecc(this)[_0x451c08(0x24c)]() > 0x0;
            })[_0x4c6307(0x158)](function (_0x5b5c85) {
                const _0x77a273 = _0x4c6307;
                if (!_0xba0ecc(this)[_0x77a273(0x1eb)](_0x77a273(0xb9)) && !_0xba0ecc(this)[_0x77a273(0x14f)](_0x77a273(0xb1)) && !_0xba0ecc(this)['children'](_0x77a273(0x146))?.[_0x77a273(0x14f)]('x1iyjqo2') && _0xba0ecc(this)[_0x77a273(0x209)](_0x77a273(0x281))[_0x77a273(0xc7)] === 0x0) {
                    _0x13e5c1('Found\x20post\x20container', _0xba0ecc(this));
                    var _0x29f4fb = 0xf, _0x412c2f = 0xf, _0x5ea0ee = _0xba0ecc(this), _0x5b2c83 = this[_0x77a273(0x1ec)];
                    if (_0x5b2c83 === _0x77a273(0xf2) && _0x5b5c85 != 0x0)
                        return;
                    const _0x42afc0 = _0x5ea0ee[_0x77a273(0x232)](_0x77a273(0xd1))[_0x77a273(0x232)](_0x77a273(0xd1));
                    if (_0x42afc0[_0x77a273(0xc7)] === 0x0)
                        return;
                    _0x13e5c1(_0x77a273(0x100), _0x42afc0);
                    if (_0x5ea0ee[_0x77a273(0x1c3)](_0x77a273(0xe1))[_0x77a273(0xc7)] > 0x0) {
                        _0x5ea0ee[_0x77a273(0x1c3)](_0x77a273(0x9f))[_0x77a273(0xc7)] > 0x0 && _0x5ea0ee['find']('._acay\x20+\x20.x24i39r')['css'](_0x77a273(0x1b2), _0x77a273(0x1c1));
                        const _0x5b5445 = _0x5ea0ee[_0x77a273(0x1c3)]('._acay')['first']()[_0x77a273(0x18a)]()[0x0];
                        var _0x3b1cfc = new MutationObserver(function (_0x101304, _0x42b760) {
                            const _0x15bd92 = _0x77a273;
                            _0x5ea0ee['find'](_0x15bd92(0x9f))[_0x15bd92(0x1cb)](_0x15bd92(0x1b2), '37px');
                        });
                        _0x3b1cfc['observe'](_0x5b5445, { 'childList': !![] });
                    }
                    const _0x2f1e0c = _0x77a273(0xad) + _0x368cd0('DW') + _0x77a273(0x119) + _0x29f4fb + _0x77a273(0x121) + _0x412c2f + 'px;\x22>' + _0x16a90f['DOWNLOAD'] + '</div>', _0x5d2cde = _0x77a273(0x28b) + _0x368cd0(_0x77a273(0x136)) + _0x77a273(0x282) + (_0x29f4fb + 0x23) + _0x77a273(0x121) + _0x412c2f + 'px;\x22>' + _0x16a90f[_0x77a273(0x136)] + _0x77a273(0x9e), _0x174de6 = _0x77a273(0x71) + _0x368cd0(_0x77a273(0xb3)) + _0x77a273(0x166) + (_0x29f4fb + 0x46) + _0x77a273(0x121) + _0x412c2f + 'px;\x22>' + _0x16a90f[_0x77a273(0x74)] + _0x77a273(0x9e);
                    _0x42afc0['eq'](_0x5b2c83 === _0x77a273(0xf2) ? 0x0 : _0x42afc0[_0x77a273(0xc7)] - 0x2)[_0x77a273(0x27f)](_0x2f1e0c), _0x42afc0['eq'](_0x5b2c83 === _0x77a273(0xf2) ? 0x0 : _0x42afc0[_0x77a273(0xc7)] - 0x2)[_0x77a273(0x27f)](_0x5d2cde), setTimeout(() => {
                        const _0x24ef2a = _0x77a273;
                        if (_0x42afc0['eq'](_0x5b2c83 === _0x24ef2a(0xf2) ? 0x0 : _0x42afc0['length'] - 0x2)[_0x24ef2a(0x1c3)](_0x24ef2a(0x250))[_0x24ef2a(0xc7)] === 0x0)
                            _0x42afc0[_0x24ef2a(0x1c3)](_0x24ef2a(0x2ac))[_0x24ef2a(0xc7)] > 0x0 && _0x42afc0['eq'](_0x5b2c83 === _0x24ef2a(0xf2) ? 0x0 : _0x42afc0[_0x24ef2a(0xc7)] - 0x2)[_0x24ef2a(0x27f)](_0x174de6);
                        else {
                            const _0x5c272c = (_0x1d835e, _0x1c6f79) => {
                                    const _0x3853f3 = _0x24ef2a;
                                    _0x1d835e[_0x3853f3(0x1c4)](_0x5a3847 => {
                                        const _0x58c13f = _0x3853f3;
                                        if (_0x5a3847['isIntersecting']) {
                                            var _0x592d51 = _0xba0ecc(_0x5a3847[_0x58c13f(0x79)]);
                                            _0x592d51[_0x58c13f(0x1c3)](_0x58c13f(0x2ac))[_0x58c13f(0xc7)] > 0x0 ? (_0x42afc0['eq'](_0x5b2c83 === 'DIV' ? 0x0 : _0x42afc0[_0x58c13f(0xc7)] - 0x2)[_0x58c13f(0x27f)](_0x174de6), _0x38905d(_0x5ea0ee)) : _0x42afc0['find'](_0x58c13f(0x26f))?.[_0x58c13f(0x8a)]();
                                        }
                                    });
                                }, _0x231646 = new IntersectionObserver(_0x5c272c, {
                                    'root': _0x5ea0ee[_0x24ef2a(0x1c3)](_0x24ef2a(0x168))[_0x24ef2a(0x28c)]()[_0x24ef2a(0x18a)]()[_0x24ef2a(0x18a)]()[_0x24ef2a(0x18a)]()[0x0],
                                    'rootMargin': '0px',
                                    'threshold': 0.1
                                }), _0x2b5019 = new MutationObserver(function (_0xd0af76, _0x21c402) {
                                    const _0x4950c1 = _0x24ef2a;
                                    var _0x4339f9 = _0xd0af76['at'](0x0)?.['target'];
                                    _0xba0ecc(_0x4339f9)[_0x4950c1(0x1c3)](_0x4950c1(0xde))[_0x4950c1(0x158)](function () {
                                        const _0x19f49d = _0x4950c1;
                                        _0x231646[_0x19f49d(0x235)](this);
                                    });
                                });
                            _0x5ea0ee[_0x24ef2a(0x1c3)](_0x24ef2a(0x250))[_0x24ef2a(0x158)](function () {
                                const _0x3ca7d5 = _0x24ef2a;
                                _0x231646[_0x3ca7d5(0x235)](this);
                            });
                            const _0x536efa = _0x42afc0['eq'](_0x5b2c83 === 'DIV' ? 0x0 : _0x42afc0[_0x24ef2a(0xc7)] - 0x2)[_0x24ef2a(0x1c3)](_0x24ef2a(0x250))?.['parent']()[0x0], _0x2be66e = _0x42afc0['eq'](_0x5b2c83 === 'DIV' ? 0x0 : _0x42afc0[_0x24ef2a(0xc7)] - 0x2)[_0x24ef2a(0x1c3)]('div\x20>\x20ul\x20li._acaz')?.[_0x24ef2a(0x18a)]()[_0x24ef2a(0x18a)]()[0x0];
                            _0x536efa && _0x2b5019[_0x24ef2a(0x235)](_0x536efa, { 'childList': !![] }), _0x2be66e && _0x2b5019[_0x24ef2a(0x235)](_0x2be66e, { 'attributes': !![] });
                        }
                    }, 0x32), _0x42afc0['css']('position', _0x77a273(0x272)), _0x38905d(_0x5ea0ee), _0xba0ecc(this)['on'](_0x77a273(0x7c), _0x77a273(0x26f), function (_0x2adb6e) {
                        const _0x2342b0 = _0x77a273;
                        _0x1609d5(!![]), _0x7e910b = _0xba0ecc(this)[_0x2342b0(0x18a)]()[_0x2342b0(0x18a)]()['parent']()[_0x2342b0(0x1eb)](_0x2342b0(0x28a)), _0x45758e = location[_0x2342b0(0x1f9)][_0x2342b0(0x260)](/\/$/, '')['split']('/')['at'](-0x1) || _0xba0ecc(this)[_0x2342b0(0x18a)]()[_0x2342b0(0x18a)]()['parent']()['find'](_0x2342b0(0x85))['first']()[_0x2342b0(0x1eb)](_0x2342b0(0xf0))['split']('/')['at'](0x2) || _0xba0ecc(this)[_0x2342b0(0x18a)]()[_0x2342b0(0x18a)]()[_0x2342b0(0x232)]('div:last-child')[_0x2342b0(0x232)]('div')['children'](_0x2342b0(0x22a))['find']('a[href^=\x22/p/\x22]')['last']()[_0x2342b0(0x1eb)](_0x2342b0(0xf0))[_0x2342b0(0x23c)]('/')['at'](0x2);
                        var _0x45de9a = _0xba0ecc(this)[_0x2342b0(0x18a)]()[_0x2342b0(0x18a)]()['parent'](), _0x55c361 = _0x12c572(_0x45de9a);
                        _0x2f2e1b(!![], ![]), _0x20c131(_0x45758e, _0x2342b0(0x8d), '')['then'](() => {
                            let _0x423027 = setInterval(() => {
                                const _0x37bad4 = a0_0x4b53;
                                if (_0xba0ecc(_0x37bad4(0x1b1))[_0x37bad4(0xc7)] > 0x0) {
                                    clearInterval(_0x423027);
                                    var _0x52b561 = _0xba0ecc(_0x37bad4(0x25c) + (_0x55c361 + 0x1) + '\x22]')?.['parent']()[_0x37bad4(0x1c3)](_0x37bad4(0x174))?.['first']();
                                    _0x52b561 != null && _0x52b561[_0x37bad4(0xc7)] > 0x0 ? _0x52b561[_0x37bad4(0x7c)]() : alert('Can\x20not\x20find\x20thumbnail\x20url.'), _0x1609d5(![]), _0xba0ecc(_0x37bad4(0x6b))[_0x37bad4(0x8a)]();
                                }
                            }, 0xfa);
                        });
                    }), _0xba0ecc(this)['on'](_0x77a273(0x7c), '.SNKMS_IG_NEWTAB_MAIN', function (_0x44bf0b) {
                        const _0x1d396f = _0x77a273;
                        _0x1609d5(!![]), _0x7e910b = _0xba0ecc(this)['parent']()[_0x1d396f(0x18a)]()['parent']()[_0x1d396f(0x1eb)]('data-username'), _0x45758e = location[_0x1d396f(0x1f9)][_0x1d396f(0x260)](/\/$/, '')['split']('/')['at'](-0x1) || _0xba0ecc(this)[_0x1d396f(0x18a)]()[_0x1d396f(0x18a)]()[_0x1d396f(0x18a)]()['find']('a[href^=\x22/p/\x22]')[_0x1d396f(0x28c)]()[_0x1d396f(0x1eb)](_0x1d396f(0xf0))[_0x1d396f(0x23c)]('/')['at'](0x2) || _0xba0ecc(this)[_0x1d396f(0x18a)]()[_0x1d396f(0x18a)]()[_0x1d396f(0x232)]('div:last-child')['children'](_0x1d396f(0xd1))['children'](_0x1d396f(0x22a))[_0x1d396f(0x1c3)](_0x1d396f(0x85))[_0x1d396f(0xd0)]()[_0x1d396f(0x1eb)](_0x1d396f(0xf0))['split']('/')['at'](0x2);
                        var _0x86886 = _0xba0ecc(this)[_0x1d396f(0x18a)]()[_0x1d396f(0x18a)]()[_0x1d396f(0x18a)](), _0x44a4b1 = _0x12c572(_0x86886);
                        _0x2f2e1b(!![], ![]), _0x20c131(_0x45758e, _0x1d396f(0x8d), '')[_0x1d396f(0x1b4)](() => {
                            let _0x5c8eca = setInterval(() => {
                                const _0x1d9a97 = a0_0x4b53;
                                if (_0xba0ecc(_0x1d9a97(0x1b1))['length'] > 0x0) {
                                    clearInterval(_0x5c8eca);
                                    var _0x3f9814 = _0xba0ecc(_0x1d9a97(0x25c) + (_0x44a4b1 + 0x1) + '\x22]');
                                    if (_0x20e445['FORCE_RESOURCE_VIA_MEDIA'] && _0x20e445[_0x1d9a97(0x11b)])
                                        _0x259cf7(_0x3f9814['first']()[0x0], !![]);
                                    else {
                                        let _0x1d96f7 = _0x3f9814?.[_0x1d9a97(0x1eb)](_0x1d9a97(0x23e));
                                        if (_0x1d96f7) {
                                            var _0x1790dc = new URL(_0x1d96f7);
                                            _0x1790dc[_0x1d9a97(0xb5)] = 'scontent.cdninstagram.com', _0x49a481(_0x1790dc[_0x1d9a97(0xf0)]);
                                        } else
                                            alert('Can\x20not\x20find\x20open\x20tab\x20url.');
                                    }
                                    _0x1609d5(![]), _0xba0ecc(_0x1d9a97(0x6b))[_0x1d9a97(0x8a)]();
                                }
                            }, 0xfa);
                        });
                    }), _0xba0ecc(this)['on'](_0x77a273(0x7c), _0x77a273(0x1ca), async function (_0x5f2435) {
                        const _0x5f3cb7 = _0x77a273;
                        _0x7e910b = _0xba0ecc(this)[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x1eb)](_0x5f3cb7(0x28a)), _0x45758e = location[_0x5f3cb7(0x1f9)][_0x5f3cb7(0x260)](/\/$/, '')[_0x5f3cb7(0x23c)]('/')['at'](-0x1) || _0xba0ecc(this)[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x1c3)]('a[href^=\x22/p/\x22]')[_0x5f3cb7(0x28c)]()['attr']('href')[_0x5f3cb7(0x23c)]('/')['at'](0x2) || _0xba0ecc(this)['parent']()['parent']()[_0x5f3cb7(0x232)]('div:last-child')[_0x5f3cb7(0x232)]('div')[_0x5f3cb7(0x232)]('div:last-child')[_0x5f3cb7(0x1c3)](_0x5f3cb7(0x85))['last']()[_0x5f3cb7(0x1eb)](_0x5f3cb7(0xf0))[_0x5f3cb7(0x23c)]('/')['at'](0x2), _0x2f2e1b(_0x20e445[_0x5f3cb7(0x16a)], !![]), _0xba0ecc('#article-id')['html'](_0x5f3cb7(0x1b9) + _0x45758e + '\x22>' + _0x45758e + _0x5f3cb7(0x28f));
                        if (_0x20e445[_0x5f3cb7(0x288)]) {
                            _0x1609d5(!![]), _0x9a2056(!![]);
                            var _0x4292f4 = _0x12c572(_0xba0ecc(this)[_0x5f3cb7(0x18a)]()['parent']()[_0x5f3cb7(0x18a)]());
                            _0x20c131(_0x45758e, _0x5f3cb7(0x8d), '')['then'](() => {
                                let _0x2c18c8 = setInterval(() => {
                                    const _0x549446 = a0_0x4b53;
                                    if (_0xba0ecc(_0x549446(0x1b1))['length'] > 0x0) {
                                        clearInterval(_0x2c18c8);
                                        var _0x2ec775 = _0xba0ecc('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x4292f4 + 0x1) + '\x22]')?.[_0x549446(0x1eb)](_0x549446(0x23e));
                                        _0x2ec775 ? (_0x1609d5(![]), _0xba0ecc(_0x549446(0x25c) + (_0x4292f4 + 0x1) + '\x22]')?.['click']()) : alert(_0x549446(0x2bb)), _0xba0ecc('.IG_SN_DIG')['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x20e445[_0x5f3cb7(0x16a)]) {
                            var _0x1284aa = 0x0, _0x430efb = _0xba0ecc(this)[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x18a)]()['find'](_0x5f3cb7(0x275))[_0x5f3cb7(0xc7)], _0x4b1b65 = window[_0x5f3cb7(0x16b)][_0x5f3cb7(0x1f9)], _0x8352c6 = '/' + _0x4b1b65[_0x5f3cb7(0x23c)]('/')[0x1] + '/' + _0x4b1b65['split']('/')[0x2] + '/', _0xb5409e = _0x20e445[_0x5f3cb7(0x198)], _0x23e4f8 = new Date(_0xba0ecc(this)['parent']()[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x1c3)](_0x5f3cb7(0xe7))[_0x5f3cb7(0x28c)]()[_0x5f3cb7(0x1eb)]('datetime'))['getTime']();
                            if (_0x430efb)
                                _0xba0ecc(this)[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x1c3)](_0x5f3cb7(0x275))[_0x5f3cb7(0x158)](function () {
                                    const _0x3dbc48 = _0x5f3cb7;
                                    let _0x5f32bd = _0xba0ecc(this)[_0x3dbc48(0x18a)]()[_0x3dbc48(0x18a)]()[_0x3dbc48(0x1c3)]('video');
                                    _0x5f32bd && _0x5f32bd['attr']('src') && (_0xb5409e = !![]);
                                }), _0xb5409e || _0x20e445[_0x5f3cb7(0x11e)] ? _0x20c131(_0x45758e, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x368cd0('LOAD_BLOB_MULTIPLE')) : (_0xba0ecc(this)[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x1c3)](_0x5f3cb7(0x275))[_0x5f3cb7(0x158)](function () {
                                    const _0x1e5cfa = _0x5f3cb7;
                                    _0x1284aa++;
                                    let _0x513475 = _0xba0ecc(this)[_0x1e5cfa(0x1c3)]('video'), _0x15159b = _0xba0ecc(this)[_0x1e5cfa(0x1c3)]('._aagv\x20img'), _0x14f1d5 = _0x15159b[_0x1e5cfa(0x1eb)](_0x1e5cfa(0x238)) ? _0x15159b['attr']('srcset')['split']('\x20')[0x0] : _0x15159b[_0x1e5cfa(0x1eb)](_0x1e5cfa(0xdc));
                                    _0x513475 && _0x513475[_0x1e5cfa(0x1eb)](_0x1e5cfa(0xdc)) && (_0xb5409e = !![]), _0x15159b && _0x14f1d5 && _0xba0ecc(_0x1e5cfa(0x8d))[_0x1e5cfa(0x27f)]('<a\x20datetime=\x22' + _0x23e4f8 + _0x1e5cfa(0x203) + _0x45758e + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x1284aa + _0x1e5cfa(0x2a5) + _0x14f1d5 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x14f1d5 + _0x1e5cfa(0x24d) + _0x368cd0(_0x1e5cfa(0x20a)) + _0x1e5cfa(0x1ea) + _0x1284aa + _0x1e5cfa(0x14d));
                                }), _0xb5409e && _0x20c131(_0x45758e, _0x5f3cb7(0x8d), _0x368cd0('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x20e445[_0x5f3cb7(0x11e)])
                                    _0x20c131(_0x45758e, _0x5f3cb7(0x8d), _0x368cd0(_0x5f3cb7(0xee)));
                                else {
                                    _0x1284aa++;
                                    let _0x1b5799 = _0xba0ecc(this)['parent']()[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x1c3)]('video'), _0xd200a = _0xba0ecc(this)[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x18a)]()[_0x5f3cb7(0x1c3)]('._aagv\x20img'), _0x2e53b7 = _0xd200a[_0x5f3cb7(0x1eb)](_0x5f3cb7(0x238)) ? _0xd200a[_0x5f3cb7(0x1eb)](_0x5f3cb7(0x238))[_0x5f3cb7(0x23c)]('\x20')[0x0] : _0xd200a['attr'](_0x5f3cb7(0xdc));
                                    _0x1b5799 && _0x1b5799['attr']('src') && _0x20c131(_0x45758e, _0x5f3cb7(0x8d), _0x368cd0(_0x5f3cb7(0x2b2))), _0xd200a && _0x2e53b7 && _0xba0ecc(_0x5f3cb7(0x8d))['append'](_0x5f3cb7(0x2b8) + _0x23e4f8 + _0x5f3cb7(0x203) + _0x45758e + _0x5f3cb7(0x207) + _0x1284aa + _0x5f3cb7(0xc4) + _0x2e53b7 + _0x5f3cb7(0x6f) + _0x2e53b7 + _0x5f3cb7(0x24d) + _0x368cd0(_0x5f3cb7(0x20a)) + _0x5f3cb7(0x1ea) + _0x1284aa + _0x5f3cb7(0x14d));
                                }
                            }
                        }
                        _0xba0ecc(_0x5f3cb7(0x1b1))[_0x5f3cb7(0x158)](function () {
                            const _0x20d5ce = _0x5f3cb7;
                            _0xba0ecc(this)[_0x20d5ce(0x22c)](_0x20d5ce(0x267)), _0xba0ecc(this)[_0x20d5ce(0x20f)](_0x20d5ce(0x1a5)), _0xba0ecc(this)[_0x20d5ce(0x283)](_0x20d5ce(0x28b) + _0x368cd0(_0x20d5ce(0x136)) + _0x20d5ce(0x1a7) + _0x16a90f['NEW_TAB'] + _0x20d5ce(0x9e)), _0xba0ecc(this)[_0x20d5ce(0x1eb)](_0x20d5ce(0x184)) == 'video' && _0xba0ecc(this)['after'](_0x20d5ce(0x71) + _0x368cd0('THUMBNAIL_INTRO') + _0x20d5ce(0xc1) + _0x16a90f[_0x20d5ce(0x74)] + _0x20d5ce(0x9e));
                        }), _0x20e445[_0x5f3cb7(0x16a)] && _0x20c131(_0x45758e, _0x5f3cb7(0x8d), _0x368cd0(_0x5f3cb7(0xee)))['then'](() => {
                            let _0x3d6c7a = setInterval(() => {
                                const _0x18b002 = a0_0x4b53;
                                _0xba0ecc(_0x18b002(0x1b1))[_0x18b002(0xc7)] > 0x0 && (clearInterval(_0x3d6c7a), _0xba0ecc(_0x18b002(0x1b1))[_0x18b002(0x158)](function () {
                                    const _0x432693 = _0x18b002;
                                    _0xba0ecc(this)[_0x432693(0x7c)]();
                                }), _0xba0ecc(_0x18b002(0x6b))[_0x18b002(0x8a)]());
                            }, 0xfa);
                        });
                    });
                    var _0x9be40c = _0xba0ecc(this)[_0x77a273(0x1c3)](_0x77a273(0x1d2))[_0x77a273(0x28c)]()[_0x77a273(0x125)]() || _0xba0ecc(this)[_0x77a273(0x1c3)](_0x77a273(0x104))[_0x77a273(0x1cc)](function () {
                        return _0xba0ecc(this)?.['text']()?.['length'] > 0x0;
                    })[_0x77a273(0x28c)]()['text']();
                    _0xba0ecc(this)[_0x77a273(0x1eb)](_0x77a273(0xb9), _0x77a273(0x242)), _0xba0ecc(this)[_0x77a273(0x1eb)](_0x77a273(0x28a), _0x9be40c);
                }
            });
        }
        function _0x20c131(_0x22c1a3, _0x53f21b, _0x446c98) {
            return new Promise(async _0x1dbbcd => {
                const _0x15660c = a0_0x4b53;
                _0xba0ecc(_0x53f21b + '\x20a')['remove'](), _0xba0ecc(_0x53f21b)[_0x15660c(0x27f)]('<p\x20id=\x22_SNLOAD\x22>' + _0x446c98 + _0x15660c(0x73));
                let _0x46939a = await _0x4d19b0(_0x22c1a3);
                if (_0x46939a[_0x15660c(0x137)] === _0x15660c(0x145)) {
                    let _0x2585fe = 0x1, _0x1ad402 = _0x46939a[_0x15660c(0x2c0)], _0x8de4de = _0x1ad402[_0x15660c(0x132)];
                    _0x8de4de[_0x15660c(0x243)] == 'GraphVideo' && _0x8de4de[_0x15660c(0xb7)] && (_0xba0ecc(_0x53f21b)['append'](_0x15660c(0x172) + _0x8de4de['id'] + '\x22\x20datetime=\x22' + _0x8de4de['taken_at_timestamp'] + _0x15660c(0x21f) + _0x8de4de[_0x15660c(0x112)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x8de4de[_0x15660c(0x206)][_0x15660c(0x110)] + _0x15660c(0x2b9) + _0x2585fe + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x8de4de[_0x15660c(0xb7)] + _0x15660c(0x6f) + _0x8de4de[_0x15660c(0x200)][0x1][_0x15660c(0xdc)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x368cd0(_0x15660c(0x21b)) + _0x15660c(0x1ea) + _0x2585fe + _0x15660c(0x14d)), _0x2585fe++);
                    _0x8de4de[_0x15660c(0x243)] == _0x15660c(0x17c) && (_0xba0ecc(_0x53f21b)['append'](_0x15660c(0x172) + _0x8de4de['id'] + '\x22\x20datetime=\x22' + _0x8de4de[_0x15660c(0x185)] + _0x15660c(0x21f) + _0x8de4de[_0x15660c(0x112)] + _0x15660c(0x10b) + _0x8de4de[_0x15660c(0x206)][_0x15660c(0x110)] + _0x15660c(0x2b9) + _0x2585fe + _0x15660c(0x2a5) + _0x8de4de[_0x15660c(0x200)][_0x8de4de[_0x15660c(0x200)][_0x15660c(0xc7)] - 0x1][_0x15660c(0xdc)] + _0x15660c(0x6f) + _0x8de4de[_0x15660c(0x200)][0x1][_0x15660c(0xdc)] + _0x15660c(0x24d) + _0x368cd0('IMG') + _0x15660c(0x1ea) + _0x2585fe + _0x15660c(0x14d)), _0x2585fe++);
                    if (_0x8de4de[_0x15660c(0x243)] == _0x15660c(0x291) && _0x8de4de['edge_sidecar_to_children'])
                        for (let _0x586626 of _0x8de4de[_0x15660c(0xeb)][_0x15660c(0x27e)]) {
                            _0x586626[_0x15660c(0xc0)]['__typename'] == _0x15660c(0x24a) && _0xba0ecc(_0x53f21b)['append']('<a\x20media-id=\x22' + _0x586626['node']['id'] + _0x15660c(0x2c6) + _0x8de4de[_0x15660c(0x185)] + _0x15660c(0x21f) + _0x8de4de[_0x15660c(0x112)] + _0x15660c(0x296) + _0x8de4de['owner'][_0x15660c(0x110)] + _0x15660c(0x2b9) + _0x2585fe + _0x15660c(0x2a5) + _0x586626[_0x15660c(0xc0)][_0x15660c(0xb7)] + _0x15660c(0x6f) + _0x586626[_0x15660c(0xc0)][_0x15660c(0x200)][0x1][_0x15660c(0xdc)] + _0x15660c(0x170) + _0x368cd0(_0x15660c(0x21b)) + _0x15660c(0x1ea) + _0x2585fe + '\x20-</a>'), _0x586626['node']['__typename'] == _0x15660c(0x17c) && _0xba0ecc(_0x53f21b)[_0x15660c(0x27f)]('<a\x20media-id=\x22' + _0x586626['node']['id'] + '\x22\x20datetime=\x22' + _0x8de4de[_0x15660c(0x185)] + _0x15660c(0x21f) + _0x8de4de[_0x15660c(0x112)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x8de4de[_0x15660c(0x206)][_0x15660c(0x110)] + _0x15660c(0x2b9) + _0x2585fe + _0x15660c(0x2a5) + _0x586626[_0x15660c(0xc0)][_0x15660c(0x200)][_0x586626[_0x15660c(0xc0)]['display_resources'][_0x15660c(0xc7)] - 0x1][_0x15660c(0xdc)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x586626[_0x15660c(0xc0)][_0x15660c(0x200)][0x1][_0x15660c(0xdc)] + _0x15660c(0x24d) + _0x368cd0(_0x15660c(0x20a)) + _0x15660c(0x1ea) + _0x2585fe + '\x20-</a>'), _0x2585fe++;
                        }
                } else {
                    let _0x15b6e1 = _0x46939a['data'];
                    if (_0x15b6e1[_0x15660c(0x14c)])
                        _0x13e5c1(_0x15660c(0x14c)), _0x15b6e1[_0x15660c(0x14c)]['forEach']((_0x51ec74, _0x1847dc) => {
                            const _0x412dcf = _0x15660c;
                            let _0x15deb9 = _0x1847dc + 0x1;
                            _0x51ec74[_0x412dcf(0xf8)] == null ? (_0x51ec74[_0x412dcf(0x20e)][_0x412dcf(0x10d)]['sort'](function (_0x50044a, _0x2da102) {
                                const _0x42d08b = _0x412dcf;
                                if (_0x50044a[_0x42d08b(0x24c)] < _0x2da102[_0x42d08b(0x24c)])
                                    return 0x1;
                                if (_0x50044a[_0x42d08b(0x24c)] > _0x2da102[_0x42d08b(0x24c)])
                                    return -0x1;
                                return 0x0;
                            }), _0xba0ecc(_0x53f21b)['append'](_0x412dcf(0x172) + _0x51ec74['pk'] + _0x412dcf(0x2c6) + _0x51ec74[_0x412dcf(0x7a)] + _0x412dcf(0x21f) + _0x15b6e1[_0x412dcf(0x1e7)] + _0x412dcf(0x10b) + _0x15b6e1[_0x412dcf(0x206)][_0x412dcf(0x110)] + '\x22\x20data-globalIndex=\x22' + _0x15deb9 + _0x412dcf(0x2a5) + _0x51ec74[_0x412dcf(0x20e)][_0x412dcf(0x10d)][0x0][_0x412dcf(0x2cb)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x51ec74[_0x412dcf(0x20e)][_0x412dcf(0x10d)][0x0][_0x412dcf(0x2cb)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x368cd0(_0x412dcf(0x20a)) + _0x412dcf(0x1ea) + _0x15deb9 + _0x412dcf(0x14d))) : _0xba0ecc(_0x53f21b)[_0x412dcf(0x27f)](_0x412dcf(0x172) + _0x51ec74['pk'] + _0x412dcf(0x2c6) + _0x51ec74[_0x412dcf(0x7a)] + _0x412dcf(0x21f) + _0x15b6e1[_0x412dcf(0x1e7)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x15b6e1[_0x412dcf(0x206)]['username'] + _0x412dcf(0x2b9) + _0x15deb9 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x51ec74[_0x412dcf(0xf8)][0x0][_0x412dcf(0x2cb)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x51ec74[_0x412dcf(0x20e)][_0x412dcf(0x10d)][0x0]['url'] + _0x412dcf(0x19e) + _0x368cd0(_0x412dcf(0x21b)) + _0x412dcf(0x1ea) + _0x15deb9 + _0x412dcf(0x14d));
                        });
                    else {
                        let _0x3ae306 = 0x1;
                        _0x15b6e1['video_versions'] == null ? (_0x15b6e1[_0x15660c(0x20e)][_0x15660c(0x10d)][_0x15660c(0xb4)](function (_0x2aa58e, _0x1385d9) {
                            const _0x2eaf5b = _0x15660c;
                            if (_0x2aa58e[_0x2eaf5b(0x24c)] < _0x1385d9[_0x2eaf5b(0x24c)])
                                return 0x1;
                            if (_0x2aa58e[_0x2eaf5b(0x24c)] > _0x1385d9['width'])
                                return -0x1;
                            return 0x0;
                        }), _0xba0ecc(_0x53f21b)[_0x15660c(0x27f)]('<a\x20media-id=\x22' + _0x15b6e1['pk'] + _0x15660c(0x2c6) + _0x15b6e1['taken_at'] + _0x15660c(0x21f) + _0x15b6e1[_0x15660c(0x1e7)] + _0x15660c(0x10b) + _0x15b6e1[_0x15660c(0x206)]['username'] + _0x15660c(0x2b9) + _0x3ae306 + _0x15660c(0x2a5) + _0x15b6e1[_0x15660c(0x20e)][_0x15660c(0x10d)][0x0][_0x15660c(0x2cb)] + _0x15660c(0x6f) + _0x15b6e1['image_versions2'][_0x15660c(0x10d)][0x0][_0x15660c(0x2cb)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x368cd0('IMG') + _0x15660c(0x1ea) + _0x3ae306 + _0x15660c(0x14d))) : _0xba0ecc(_0x53f21b)[_0x15660c(0x27f)]('<a\x20media-id=\x22' + _0x15b6e1['pk'] + _0x15660c(0x2c6) + _0x15b6e1[_0x15660c(0x7a)] + _0x15660c(0x21f) + _0x15b6e1[_0x15660c(0x1e7)] + _0x15660c(0x296) + _0x15b6e1[_0x15660c(0x206)]['username'] + _0x15660c(0x2b9) + _0x3ae306 + _0x15660c(0x2a5) + _0x15b6e1[_0x15660c(0xf8)][0x0][_0x15660c(0x2cb)] + _0x15660c(0x6f) + _0x15b6e1[_0x15660c(0x20e)]['candidates'][0x0]['url'] + _0x15660c(0x19e) + _0x368cd0('VID') + _0x15660c(0x1ea) + _0x3ae306 + _0x15660c(0x14d));
                    }
                }
                _0xba0ecc('#_SNLOAD')['remove'](), _0xba0ecc(_0x15660c(0x1b1))[_0x15660c(0x158)](function () {
                    const _0x527e49 = _0x15660c;
                    _0xba0ecc(this)['wrap']('<div></div>'), _0xba0ecc(this)[_0x527e49(0x20f)](_0x527e49(0x1a5)), _0xba0ecc(this)[_0x527e49(0x283)](_0x527e49(0x28b) + _0x368cd0('NEW_TAB') + _0x527e49(0x1a7) + _0x16a90f[_0x527e49(0x136)] + _0x527e49(0x9e)), _0xba0ecc(this)[_0x527e49(0x1eb)]('data-name') == _0x527e49(0x2ac) && _0xba0ecc(this)['after'](_0x527e49(0x71) + _0x368cd0('THUMBNAIL_INTRO') + _0x527e49(0xc1) + _0x16a90f[_0x527e49(0x74)] + _0x527e49(0x9e));
                }), _0x1dbbcd(!![]);
            });
        }
        function _0x2f2e1b(_0x10062c, _0x35b270) {
            const _0x77e53c = _0x59dba6;
            let _0x5ba1ca = _0x10062c ? _0x77e53c(0x230) : '';
            _0xba0ecc(_0x77e53c(0x99))[_0x77e53c(0x27f)](_0x77e53c(0x298) + _0x5ba1ca + _0x77e53c(0x25d)), _0xba0ecc(_0x77e53c(0x142))[_0x77e53c(0x27f)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x368cd0(_0x77e53c(0x285)) + _0x77e53c(0x9c) + _0x16a90f[_0x77e53c(0x285)] + _0x77e53c(0x76)), _0x35b270 && (_0xba0ecc(_0x77e53c(0x142))[_0x77e53c(0x27f)]('<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>'), _0xba0ecc('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')[_0x77e53c(0x27f)](_0x77e53c(0x229) + _0x368cd0('BATCH_DOWNLOAD_SELECTED') + _0x77e53c(0x175)), _0xba0ecc(_0x77e53c(0x26d))['append']('<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>' + _0x368cd0('BATCH_DOWNLOAD_DIRECT') + _0x77e53c(0x175)), _0xba0ecc(_0x77e53c(0x142))['append'](_0x77e53c(0x1d5) + _0x368cd0(_0x77e53c(0x2c5)) + '</span></label>'));
        }
        function _0x9a2056(_0x167e13) {
            const _0x4688e1 = _0x59dba6;
            _0xba0ecc(_0x4688e1(0x6b))[_0x4688e1(0xc7)] && (_0x167e13 ? _0xba0ecc(_0x4688e1(0x6b))[_0x4688e1(0x1f3)]('hidden') : _0xba0ecc(_0x4688e1(0x6b))[_0x4688e1(0x156)](_0x4688e1(0x230)));
        }
        function _0x3788e(_0x53e75e, _0xe3218d, _0x9c9c0, _0x476996, _0x5d8aa4, _0x27f82c) {
            setTimeout(() => {
                _0x1609d5(!![]), fetch(_0x53e75e)['then'](_0x347bc8 => {
                    return _0x347bc8['blob']()['then'](_0x235254 => {
                        _0x1609d5(![]), _0x167fea(_0x53e75e, _0x235254, _0xe3218d, _0x9c9c0, _0x476996, _0x5d8aa4, _0x27f82c);
                    });
                });
            }, 0x32);
        }
        function _0x167fea(_0x2d490, _0x4f43ff, _0x453316, _0x33acbd, _0x57627d, _0x12439a, _0x24a1b4) {
            const _0x1577cc = _0x59dba6;
            _0x57627d = parseInt(_0x57627d[_0x1577cc(0x1e3)]()[_0x1577cc(0xa4)](0xd, '0'));
            _0x20e445['RENAME_PUBLISH_DATE'] && (_0x57627d = parseInt(_0x57627d[_0x1577cc(0x1e3)]()[_0x1577cc(0xa4)](0xd, '0')));
            const _0x1b9834 = new Date(_0x57627d), _0x5dd9f9 = document[_0x1577cc(0xc2)]('a'), _0x2d841e = new URL(_0x2d490)[_0x1577cc(0x1f9)][_0x1577cc(0x23c)]('/')['at'](-0x1)[_0x1577cc(0x23c)]('.')['slice'](0x0, -0x1)[_0x1577cc(0x25e)]('.'), _0x3fbe17 = _0x1b9834[_0x1577cc(0xc9)]()[_0x1577cc(0x1e3)](), _0x2f05e4 = (_0x1b9834[_0x1577cc(0x1fa)]() + 0x1)[_0x1577cc(0x1e3)]()[_0x1577cc(0x274)](0x2, '0'), _0x18ba56 = _0x1b9834[_0x1577cc(0x17d)]()[_0x1577cc(0x1e3)]()[_0x1577cc(0x274)](0x2, '0'), _0x524453 = _0x1b9834[_0x1577cc(0x240)]()['toString']()['padStart'](0x2, '0'), _0x464c06 = _0x1b9834['getMinutes']()[_0x1577cc(0x1e3)]()[_0x1577cc(0x274)](0x2, '0'), _0x187471 = _0x1b9834[_0x1577cc(0x1c7)]()['toString']()[_0x1577cc(0x274)](0x2, '0');
            var _0x2bb176 = _0x23e79b['toUpperCase'](), _0x13c298 = _0x24a1b4 ?? '', _0x260f6f = {
                    '%USERNAME%': _0x453316,
                    '%SOURCE_TYPE%': _0x33acbd,
                    '%SHORTCODE%': _0x13c298,
                    '%YEAR%': _0x3fbe17,
                    '%2-YEAR%': _0x3fbe17[_0x1577cc(0x1be)](-0x2),
                    '%MONTH%': _0x2f05e4,
                    '%DAY%': _0x18ba56,
                    '%HOUR%': _0x524453,
                    '%MINUTE%': _0x464c06,
                    '%SECOND%': _0x187471,
                    '%ORIGINAL_NAME%': _0x2d841e,
                    '%ORIGINAL_NAME_FIRST%': _0x2d841e[_0x1577cc(0x23c)]('_')['at'](0x0)
                };
            _0x2bb176 = _0x2bb176['replace'](/%[\w\-]+%/g, function (_0x17c775) {
                return _0x260f6f[_0x17c775] || _0x17c775;
            });
            const _0x36d617 = _0x453316 + '_' + _0x2d841e + '.' + _0x12439a;
            _0x5dd9f9['href'] = URL[_0x1577cc(0x106)](_0x4f43ff), _0x5dd9f9[_0x1577cc(0x29a)](_0x1577cc(0x7e), _0x20e445[_0x1577cc(0x277)] ? _0x2bb176 + '.' + _0x12439a : _0x36d617), _0x5dd9f9['click'](), _0x5dd9f9[_0x1577cc(0x8a)]();
        }
        async function _0x259cf7(_0x1bbf4f, _0x8240a9) {
            const _0x315f49 = _0x59dba6;
            let _0x5e0cc6 = new Date()['getTime'](), _0x14ba71 = Math[_0x315f49(0x152)](_0x5e0cc6 / 0x3e8), _0x1cd8d6 = _0xba0ecc(_0x1bbf4f)['attr'](_0x315f49(0x28a)) ? _0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)](_0x315f49(0x28a)) : _0x7e910b;
            !_0x1cd8d6 && _0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)](_0x315f49(0x24f)) && (_0x13e5c1(_0x315f49(0x179), _0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)]('data-href')), _0x1cd8d6 = await _0x421831(_0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)](_0x315f49(0x24f)))[_0x315f49(0x115)](_0x526dcf => {
                const _0x237bbf = _0x315f49;
                _0x13e5c1(_0x237bbf(0x225), _0x526dcf[_0x237bbf(0x12b)]);
            }), _0x1cd8d6 == null && (_0x1cd8d6 = _0x315f49(0x7b)));
            _0x20e445[_0x315f49(0x1ed)] && _0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)](_0x315f49(0x1c5)) && (_0x14ba71 = parseInt(_0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)](_0x315f49(0x1c5))));
            if (_0x20e445['FORCE_RESOURCE_VIA_MEDIA']) {
                _0x1609d5(!![]);
                let _0x5b3fad = await _0x40ca37(_0xba0ecc(_0x1bbf4f)['attr'](_0x315f49(0x1fc)));
                _0x1609d5(![]);
                if (_0x5b3fad[_0x315f49(0xd7)] === 'ok') {
                    var _0x48a5df = null;
                    _0x5b3fad[_0x315f49(0x276)][0x0][_0x315f49(0xf8)] ? _0x48a5df = _0x5b3fad[_0x315f49(0x276)][0x0]['video_versions'][0x0]['url'] : (_0x5b3fad[_0x315f49(0x276)][0x0]['image_versions2'][_0x315f49(0x10d)][_0x315f49(0xb4)](function (_0x32a568, _0x11e77d) {
                        const _0x215f6d = _0x315f49;
                        if (_0x32a568[_0x215f6d(0x24c)] < _0x11e77d[_0x215f6d(0x24c)])
                            return 0x1;
                        if (_0x32a568[_0x215f6d(0x24c)] > _0x11e77d[_0x215f6d(0x24c)])
                            return -0x1;
                        return 0x0;
                    }), _0x48a5df = _0x5b3fad[_0x315f49(0x276)][0x0]['image_versions2']['candidates'][0x0][_0x315f49(0x2cb)]);
                    if (_0x8240a9) {
                        let _0x5be781 = new URL(_0x48a5df);
                        _0x5be781[_0x315f49(0xb5)] = 'scontent.cdninstagram.com', _0x49a481(_0x5be781[_0x315f49(0xf0)]);
                    } else
                        _0x3788e(_0x48a5df, _0x1cd8d6, _0xba0ecc(_0x1bbf4f)['attr']('data-name'), _0x14ba71, _0xba0ecc(_0x1bbf4f)['attr'](_0x315f49(0x24b)), _0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)]('data-path'));
                } else {
                    if (_0x20e445['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT']) {
                        if (_0x8240a9) {
                            let _0x3ead31 = new URL(_0xba0ecc(_0x1bbf4f)['attr'](_0x315f49(0x23e)));
                            _0x3ead31['host'] = 'scontent.cdninstagram.com', _0x49a481(_0x3ead31[_0x315f49(0xf0)]);
                        } else
                            _0x3788e(_0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)]('data-href'), _0x1cd8d6, _0xba0ecc(_0x1bbf4f)['attr'](_0x315f49(0x184)), _0x14ba71, _0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)]('data-type'), _0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)]('data-path'));
                    } else
                        alert(_0x315f49(0x12d) + _0x5b3fad[_0x315f49(0x12b)]);
                    _0x13e5c1(_0x5b3fad);
                }
            } else
                _0x3788e(_0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)](_0x315f49(0x23e)), _0x1cd8d6, _0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)](_0x315f49(0x184)), _0x14ba71, _0xba0ecc(_0x1bbf4f)['attr'](_0x315f49(0x24b)), _0xba0ecc(_0x1bbf4f)[_0x315f49(0x1eb)](_0x315f49(0x24f)));
        }
        function _0x3bb54b(_0x32633e) {
            const _0x404c5b = _0x59dba6;
            var _0x28caf7 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x404c5b(0x268),
                        'NOTICE_UPDATE_CONTENT': 'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
                        'CHECK_UPDATE': _0x404c5b(0x297),
                        'CHECK_UPDATE_MENU': _0x404c5b(0x173),
                        'CHECK_UPDATE_INTRO': _0x404c5b(0xfc),
                        'RELOAD_SCRIPT': 'Reload\x20Script',
                        'DONATE': _0x404c5b(0x2ae),
                        'FEEDBACK': _0x404c5b(0x129),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x404c5b(0x2a8),
                        'SELECT_AND_COPY': _0x404c5b(0x2a7),
                        'DOWNLOAD_DOM_TREE': _0x404c5b(0x11c),
                        'REPORT_GITHUB': _0x404c5b(0xba),
                        'REPORT_DISCORD': _0x404c5b(0x154),
                        'REPORT_FORK': _0x404c5b(0x219),
                        'DEBUG': _0x404c5b(0x205),
                        'CLOSE': _0x404c5b(0x8f),
                        'ALL_CHECK': _0x404c5b(0x24e),
                        'BATCH_DOWNLOAD_SELECTED': _0x404c5b(0x131),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x404c5b(0x204),
                        'VID': _0x404c5b(0x191),
                        'DW': _0x404c5b(0x28d),
                        'THUMBNAIL_INTRO': _0x404c5b(0x1d8),
                        'LOAD_BLOB_ONE': _0x404c5b(0x1c9),
                        'LOAD_BLOB_MULTIPLE': 'Loading\x20Blob\x20Media\x20and\x20Others...',
                        'LOAD_BLOB_RELOAD': 'Detecting\x20Blob\x20Media,\x20reloading...',
                        'NO_CHECK_RESOURCE': _0x404c5b(0x1a4),
                        'NO_VID_URL': 'Cannot\x20find\x20video\x20URL.',
                        'SETTING': _0x404c5b(0xe2),
                        'AUTO_RENAME': 'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
                        'RENAME_SHORTCODE': _0x404c5b(0x19c),
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0x404c5b(0x239),
                        'DISABLE_VIDEO_LOOPING': _0x404c5b(0x1f6),
                        'HTML5_VIDEO_CONTROL': _0x404c5b(0x16c),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x404c5b(0x92),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': _0x404c5b(0x84),
                        'MODIFY_VIDEO_VOLUME': _0x404c5b(0xb6),
                        'SCROLL_BUTTON': 'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x404c5b(0x11d),
                        'AUTO_RENAME_INTRO': _0x404c5b(0x1f1),
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': 'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_LOCATE_DATE_INTRO': _0x404c5b(0x15b),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x404c5b(0xbc),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x404c5b(0xdd),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x404c5b(0xe5),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x404c5b(0x19b),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': 'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
                        'DIRECT_DOWNLOAD_ALL_INTRO': 'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x404c5b(0xcd),
                        'SCROLL_BUTTON_INTRO': _0x404c5b(0xff),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x404c5b(0xa5),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x404c5b(0x1d4),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': _0x404c5b(0xf1),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': 'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.'
                    }
                }, _0x3a120f = Object[_0x404c5b(0x2cc)]({}, _0x28caf7, _0x2f922d), _0x3e00bf = Object[_0x404c5b(0x177)](_0x3a120f)[_0x404c5b(0xb4)]()[_0x404c5b(0x1bd)]((_0x4b841e, _0x5023dd) => {
                    return _0x4b841e[_0x5023dd] = _0x3a120f[_0x5023dd], _0x4b841e;
                }, {});
            return _0x3e00bf;
        }
        async function _0x3aeb28(_0x8fddec) {
            return new Promise((_0x6fa1e7, _0x227301) => {
                const _0x2ccb5b = a0_0x4b53;
                GM_xmlhttpRequest({
                    'method': _0x2ccb5b(0x126),
                    'url': _0x2ccb5b(0x128) + _0x8fddec + _0x2ccb5b(0x1f5),
                    'onload': function (_0x368466) {
                        const _0x12372e = _0x2ccb5b;
                        try {
                            let _0x4cd2df = JSON[_0x12372e(0x159)](_0x368466[_0x12372e(0x222)]);
                            _0x6fa1e7(_0x4cd2df);
                        } catch (_0x59ad5e) {
                            _0x227301(_0x59ad5e);
                        }
                    },
                    'onerror': function (_0x188bd7) {
                        const _0x2266d9 = _0x2ccb5b;
                        _0x13e5c1(_0x2266d9(0x1b3), _0x2266d9(0x86), _0x188bd7), _0x227301(_0x188bd7);
                    }
                });
            });
        }
        function _0x368cd0(_0x47d1cc) {
            const _0x2a41ad = _0x59dba6, _0x223261 = _0x3bb54b();
            return _0x223261[_0x39d78a] != undefined && _0x223261[_0x39d78a][_0x47d1cc] != undefined ? _0x223261[_0x39d78a][_0x47d1cc] : _0x223261[_0x2a41ad(0x8e)][_0x47d1cc];
        }
        function _0x41c8d1() {
            const _0x502f5d = _0x59dba6;
            _0xba0ecc(_0x502f5d(0x1ac))[_0x502f5d(0x158)](function () {
                const _0x107a20 = _0x502f5d;
                _0xba0ecc(this)[_0x107a20(0x125)](_0x368cd0(_0xba0ecc(this)[_0x107a20(0x1eb)](_0x107a20(0xa1))));
            }), _0xba0ecc(_0x502f5d(0x279))['each'](function () {
                const _0x5a96e9 = _0x502f5d;
                _0xba0ecc(this)[_0x5a96e9(0x1eb)](_0x5a96e9(0xa7), _0x368cd0(_0xba0ecc(this)[_0x5a96e9(0x1eb)](_0x5a96e9(0x23f))));
            });
        }
        function _0x46ed3f() {
            const _0x2baf81 = _0x59dba6;
            for (let _0x46f959 of _0x369dc3) {
                _0x13e5c1('GM_unregisterMenuCommand', _0x46f959), GM_unregisterMenuCommand(_0x46f959);
            }
            _0x369dc3[_0x2baf81(0x208)](GM_registerMenuCommand(_0x368cd0(_0x2baf81(0x13d)), () => {
                _0x386f13();
            }, { 'accessKey': 'w' })), _0x369dc3[_0x2baf81(0x208)](GM_registerMenuCommand(_0x368cd0(_0x2baf81(0x2b3)), () => {
                const _0x14e999 = _0x2baf81;
                GM_openInTab(_0x14e999(0xd5), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x369dc3['push'](GM_registerMenuCommand(_0x368cd0('DEBUG'), () => {
                _0x824e4a();
            }, { 'accessKey': 'z' })), _0x369dc3['push'](GM_registerMenuCommand(_0x368cd0('FEEDBACK'), () => {
                _0x2a22ff();
            }, { 'accessKey': 'f' })), _0x369dc3[_0x2baf81(0x208)](GM_registerMenuCommand(_0x368cd0(_0x2baf81(0x180)), () => {
                _0xf831f8();
            }, { 'accessKey': 'c' })), _0x369dc3[_0x2baf81(0x208)](GM_registerMenuCommand(_0x368cd0(_0x2baf81(0x1fe)), () => {
                _0x443769();
            }, { 'accessKey': 'r' }));
        }
        function _0x31f963(_0x2a4f32) {
            const _0x1a3d19 = _0x59dba6;
            if (!_0x20e445[_0x1a3d19(0xbb)])
                return;
            const _0x394058 = GM_getValue(_0x1a3d19(0x28e)) ?? new Date()[_0x1a3d19(0x188)](), _0x24480d = new Date()[_0x1a3d19(0x188)]();
            _0x24480d > parseInt(_0x394058) + _0x2a4f32 * 0x3e8 && (GM_setValue('G_CHECK_TIMESTAMP', new Date()[_0x1a3d19(0x188)]()), _0xf831f8());
        }
        function _0xf831f8() {
            const _0x7004da = _0x59dba6, _0x2c2c79 = GM_info['script'][_0x7004da(0xe0)], _0x2b9360 = _0x7004da(0xc8);
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x2b9360,
                'onload': function (_0x24e23d) {
                    const _0x4f1dca = _0x7004da, _0x304c49 = _0x24e23d[_0x4f1dca(0x1ba)], _0x3c1c30 = _0x304c49['match'](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x3c1c30 && _0x3c1c30[0x1]) {
                        const _0x1ba647 = _0x3c1c30[0x1];
                        _0x13e5c1(_0x4f1dca(0x2b1), _0x2c2c79, '|', _0x4f1dca(0x75), _0x1ba647), _0x1ba647 !== _0x2c2c79 && typeof this[_0x4f1dca(0x130)] === 'undefined' ? (this[_0x4f1dca(0x130)] = null, GM_notification({
                            'text': _0x368cd0('NOTICE_UPDATE_CONTENT'),
                            'title': _0x368cd0(_0x4f1dca(0x1e1)),
                            'tag': _0x4f1dca(0x153),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x4f1dca(0x202),
                            'onclick': _0x2c885f => {
                                const _0x28fb3d = _0x4f1dca;
                                _0x2c885f?.[_0x28fb3d(0x27a)]();
                                var _0xeab9f8 = GM_openInTab(GM_info[_0x28fb3d(0x286)][_0x28fb3d(0x107)]);
                                setTimeout(() => {
                                    const _0x240e89 = _0x28fb3d;
                                    _0xeab9f8[_0x240e89(0x117)]();
                                }, 0xfa);
                            }
                        })) : _0x13e5c1(_0x4f1dca(0xfb));
                    } else
                        console[_0x4f1dca(0x216)](_0x4f1dca(0x87));
                }
            });
        }
        function _0x386f13() {
            const _0x382e20 = _0x59dba6;
            _0xba0ecc(_0x382e20(0x6b))[_0x382e20(0x8a)](), _0x2f2e1b(), _0xba0ecc(_0x382e20(0x265))[_0x382e20(0x125)]('Preference\x20Settings'), _0xba0ecc(_0x382e20(0x8c))[_0x382e20(0x27f)](_0x382e20(0x2ce));
            for (let _0x5b90b2 in _0x2eece5) {
                _0xba0ecc(_0x382e20(0xe3))['append'](_0x382e20(0x1cd) + _0x5b90b2 + '\x22\x20' + (_0x39d78a == _0x5b90b2 ? 'selected' : '') + '>' + _0x2eece5[_0x5b90b2] + _0x382e20(0x105));
            }
            for (let _0x342fb7 in _0x20e445) {
                _0xba0ecc(_0x382e20(0x78))[_0x382e20(0x27f)](_0x382e20(0x88) + (_0xe5d774['includes'](_0x342fb7) ? _0x382e20(0xd8) : '') + '\x22\x20title=\x22' + _0x368cd0(_0x342fb7 + _0x382e20(0xaf)) + _0x382e20(0x293) + (_0x342fb7 + _0x382e20(0xaf)) + _0x382e20(0x93) + _0x342fb7 + '\x22>' + _0x368cd0(_0x342fb7) + _0x382e20(0xed) + _0x342fb7 + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x20e445[_0x342fb7] === !![] ? _0x382e20(0x1dc) : '') + _0x382e20(0x1a1)), _0x342fb7 === 'MODIFY_VIDEO_VOLUME' && _0xba0ecc(_0x382e20(0x155) + _0x342fb7 + '\x22]')[_0x382e20(0x18a)]('label')['on'](_0x382e20(0xea), function (_0xe84ebd) {
                    const _0x5819a5 = _0x382e20;
                    _0xe84ebd[_0x5819a5(0x27a)](), _0xba0ecc(this)[_0x5819a5(0x1c3)]('#tempWrapper')[_0x5819a5(0xc7)] === 0x0 && (_0xba0ecc(this)[_0x5819a5(0x27f)](_0x5819a5(0x20c)), _0xba0ecc(this)[_0x5819a5(0x232)](_0x5819a5(0x2aa))['append'](_0x5819a5(0x15e) + _0x47e989 + _0x5819a5(0x1fd)), _0xba0ecc(this)[_0x5819a5(0x232)](_0x5819a5(0x2aa))[_0x5819a5(0x27f)]('<input\x20value=\x22' + _0x47e989 + _0x5819a5(0x197)), _0xba0ecc(this)[_0x5819a5(0x232)](_0x5819a5(0x2aa))[_0x5819a5(0x27f)](_0x5819a5(0x1c2) + _0x16a90f[_0x5819a5(0x285)] + _0x5819a5(0x9e)));
                }), _0x342fb7 === _0x382e20(0x277) && _0xba0ecc(_0x382e20(0x155) + _0x342fb7 + '\x22]')[_0x382e20(0x18a)]('label')['on']('contextmenu', function (_0x3ea731) {
                    const _0x5cbb39 = _0x382e20;
                    _0x3ea731['preventDefault'](), _0xba0ecc(this)[_0x5cbb39(0x1c3)](_0x5cbb39(0x2aa))[_0x5cbb39(0xc7)] === 0x0 && (_0xba0ecc(this)[_0x5cbb39(0x27f)]('<div\x20id=\x22tempWrapper\x22></div>'), _0xba0ecc(this)[_0x5cbb39(0x232)]('#tempWrapper')[_0x5cbb39(0x27f)](_0x5cbb39(0xcb) + _0x23e79b + _0x5cbb39(0x196)), _0xba0ecc(this)[_0x5cbb39(0x232)](_0x5cbb39(0x2aa))['append'](_0x5cbb39(0x1c2) + _0x16a90f[_0x5cbb39(0x285)] + _0x5cbb39(0x9e)));
                });
            }
        }
        function _0x824e4a() {
            const _0x69562 = _0x59dba6;
            _0xba0ecc(_0x69562(0x6b))[_0x69562(0x8a)](), _0x2f2e1b(), _0xba0ecc(_0x69562(0x265))['text'](_0x69562(0xc5)), _0xba0ecc(_0x69562(0x78))['append']('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0xba0ecc(_0x69562(0x78))[_0x69562(0x27f)](_0x69562(0x22b)), _0xba0ecc(_0x69562(0x220))[_0x69562(0x27f)](_0x69562(0x251) + _0x368cd0(_0x69562(0x1ad)) + _0x69562(0xa6)), _0xba0ecc(_0x69562(0x220))[_0x69562(0x27f)](_0x69562(0x134) + _0x368cd0(_0x69562(0x1d9)) + _0x69562(0xa6)), _0xba0ecc(_0x69562(0x220))['append'](_0x69562(0x1f2) + _0x368cd0('DOWNLOAD_DOM_TREE') + _0x69562(0xfe)), _0xba0ecc('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x69562(0x27f)](_0x69562(0x176) + _0x368cd0(_0x69562(0x118)) + _0x69562(0xa6)), _0xba0ecc(_0x69562(0x220))[_0x69562(0x27f)](_0x69562(0x1dd) + _0x368cd0(_0x69562(0xc6)) + '</a></button>');
        }
        function _0x2a22ff() {
            const _0xbc5c2a = _0x59dba6;
            _0xba0ecc('.IG_SN_DIG')[_0xbc5c2a(0x8a)](), _0x2f2e1b(), _0xba0ecc(_0xbc5c2a(0x265))[_0xbc5c2a(0x125)](_0xbc5c2a(0x122)), _0xba0ecc('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0xbc5c2a(0x27f)](_0xbc5c2a(0x22b)), _0xba0ecc(_0xbc5c2a(0x220))[_0xbc5c2a(0x27f)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>' + _0x368cd0(_0xbc5c2a(0x1bb)) + _0xbc5c2a(0xa6)), _0xba0ecc(_0xbc5c2a(0x220))[_0xbc5c2a(0x27f)](_0xbc5c2a(0x176) + _0x368cd0(_0xbc5c2a(0x118)) + '</a></button>'), _0xba0ecc(_0xbc5c2a(0x220))[_0xbc5c2a(0x27f)](_0xbc5c2a(0x1dd) + _0x368cd0(_0xbc5c2a(0xc6)) + _0xbc5c2a(0xa6));
        }
        function _0x49a481(_0x27532e) {
            const _0x5bc572 = _0x59dba6;
            var _0x3dfacc = document[_0x5bc572(0xc2)]('a');
            _0x3dfacc[_0x5bc572(0xf0)] = _0x27532e, _0x3dfacc[_0x5bc572(0x79)] = _0x5bc572(0x135), document[_0x5bc572(0x99)][_0x5bc572(0x1d3)](_0x3dfacc), _0x3dfacc[_0x5bc572(0x7c)](), _0x3dfacc[_0x5bc572(0x8a)]();
        }
        function _0x443769() {
            const _0x4597f7 = _0x59dba6;
            clearInterval(_0x1ddf4f), _0xba0ecc(_0x4597f7(0x25a))[_0x4597f7(0x8a)](), _0xba0ecc(_0x4597f7(0xbe))['remove'](), _0xba0ecc(_0x4597f7(0x114))['removeAttr'](_0x4597f7(0xb9)), _0x1a7f00 = ![], _0x4b368d = ![], _0x451dbd = location[_0x4597f7(0xf0)], _0x3c716c['disconnect'](), _0x13e5c1(_0x4597f7(0x116));
        }
        function _0x13e5c1(..._0x130bf0) {
            const _0x44eb0f = _0x59dba6;
            var _0x422c7c = new Date();
            _0x48ca00[_0x44eb0f(0x208)]({
                'time': _0x422c7c['getTime'](),
                'content': [..._0x130bf0]
            }), _0x48ca00[_0x44eb0f(0xc7)] > 0x3e8 && (_0x48ca00 = [
                {
                    'time': _0x422c7c[_0x44eb0f(0x188)](),
                    'content': [_0x44eb0f(0x26b)]
                },
                ..._0x48ca00['slice'](-0x3e7)
            ]), console[_0x44eb0f(0x164)]('[' + _0x422c7c[_0x44eb0f(0x13f)]() + ']', ..._0x130bf0);
        }
        function _0x589b49() {
            const _0x11043d = _0x59dba6;
            for (let _0x93e0e in _0x20e445) {
                GM_getValue(_0x93e0e) != null && typeof GM_getValue(_0x93e0e) === _0x11043d(0xfa) && (_0x20e445[_0x93e0e] = GM_getValue(_0x93e0e));
            }
        }
        function _0x5cac90(_0x2bab0b, _0x282ea5, _0x4299ce, _0x302f6d = '') {
            const _0x978ddc = _0x59dba6;
            _0x282ea5[_0x978ddc(0x1c3)]('div.volume_slider')[_0x978ddc(0xc7)] === 0x0 ? (_0x282ea5['append'](_0x978ddc(0x6a) + _0x302f6d + '\x22\x20/>'), _0x282ea5[_0x978ddc(0x1c3)]('div.volume_slider')[_0x978ddc(0x27f)]('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x47e989 + _0x978ddc(0x150)), _0x282ea5[_0x978ddc(0x1c3)]('div.volume_slider\x20input')[_0x978ddc(0x1eb)](_0x978ddc(0x77), _0x978ddc(0x120) + (_0x47e989 * 0x64 + '%')), _0x282ea5[_0x978ddc(0x1c3)]('div.volume_slider\x20input')['on'](_0x978ddc(0x6e), function () {
                const _0x57f43a = _0x978ddc;
                var _0x7ebc98 = _0xba0ecc(this)[_0x57f43a(0x1da)]() * 0x64 + '%';
                _0x47e989 = _0xba0ecc(this)[_0x57f43a(0x1da)](), GM_setValue(_0x57f43a(0x258), _0xba0ecc(this)[_0x57f43a(0x1da)]()), _0xba0ecc(this)[_0x57f43a(0x1eb)](_0x57f43a(0x77), '--ig-track-progress:\x20' + _0x7ebc98), _0x2bab0b[_0x57f43a(0x158)](function () {
                    const _0xc4e8c = _0x57f43a;
                    _0x13e5c1('(' + _0x4299ce + ')', 'video\x20volume\x20changed\x20#slider'), this[_0xc4e8c(0x26a)] = _0x47e989;
                });
            }), _0x282ea5[_0x978ddc(0x1c3)](_0x978ddc(0x25f))['on'](_0x978ddc(0xce), function () {
                const _0x1ab85f = _0x978ddc;
                var _0x22564c = _0x47e989 * 0x64 + '%';
                _0xba0ecc(this)[_0x1ab85f(0x1eb)](_0x1ab85f(0x77), _0x1ab85f(0x120) + _0x22564c), _0xba0ecc(this)[_0x1ab85f(0x1da)](_0x47e989), _0x2bab0b[_0x1ab85f(0x158)](function () {
                    const _0x5b3e24 = _0x1ab85f;
                    _0x13e5c1('(' + _0x4299ce + ')', _0x5b3e24(0x123)), this[_0x5b3e24(0x26a)] = _0x47e989;
                });
            }), _0x282ea5['find']('div.volume_slider')['on']('click', function (_0x54dd6a) {
                const _0x48d7a5 = _0x978ddc;
                _0x54dd6a[_0x48d7a5(0x2c4)](), _0x54dd6a['preventDefault']();
            })) : _0x282ea5[_0x978ddc(0x1c3)](_0x978ddc(0xe9))[_0x978ddc(0x8a)]();
        }
        _0xba0ecc(function () {
            const _0x41b477 = _0x59dba6;
            function _0xc366b(_0x2dbafe) {
                const _0x408c6f = a0_0x4b53;
                var _0x50360a = [];
                for (var _0x4d832b of _0x2dbafe) {
                    _0x50360a[_0x408c6f(0x208)]({
                        'tagName': _0x4d832b['tagName'],
                        'id': _0x4d832b['id'],
                        'className': _0x4d832b[_0x408c6f(0xf6)]
                    });
                }
                return _0x50360a;
            }
            function _0x5d96e5() {
                const _0x39df4b = a0_0x4b53;
                let _0x3d5520 = _0xba0ecc(_0x39df4b(0x98))[0x0];
                var _0x2fc334 = '';
                _0x48ca00['forEach'](_0x973e99 => {
                    const _0x3f1a34 = _0x39df4b;
                    var _0x50830e = JSON[_0x3f1a34(0x29c)](_0x973e99[_0x3f1a34(0x17e)], function (_0x5b6da2, _0x51f601) {
                        const _0x55b60f = _0x3f1a34;
                        if (Array[_0x55b60f(0x19d)](this)) {
                            if (typeof _0x51f601 === _0x55b60f(0xc3) && _0x51f601 instanceof jQuery)
                                return _0xc366b(_0x51f601);
                            return _0x51f601;
                        } else
                            return _0x51f601;
                    }, '\x09');
                    _0x2fc334 += _0x973e99[_0x3f1a34(0x266)] + ':\x20' + _0x50830e + '\x0a';
                }), _0xba0ecc(_0x39df4b(0x14a))[_0x39df4b(0x125)](_0x39df4b(0x192) + _0x2fc334 + _0x39df4b(0x18e) + location[_0x39df4b(0x1f9)] + _0x39df4b(0x226) + _0x3d5520['innerHTML']);
            }
            _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), _0x41b477(0x95), function () {
                _0x5d96e5();
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), _0x41b477(0xca), function () {
                const _0xea5292 = _0x41b477;
                _0xba0ecc('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0xea5292(0x27d)](), document['execCommand'](_0xea5292(0x2c2));
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE', function () {
                const _0x59b725 = _0x41b477;
                _0xba0ecc(_0x59b725(0x14a))[_0x59b725(0x125)]()[_0x59b725(0xc7)] === 0x0 && _0x5d96e5();
                var _0x1feab7 = _0xba0ecc('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x59b725(0x125)](), _0x5b7e05 = document[_0x59b725(0xc2)]('a'), _0x26df18 = new Blob([_0x1feab7], { 'type': 'text/plain' });
                _0x5b7e05[_0x59b725(0xf0)] = URL[_0x59b725(0x106)](_0x26df18), _0x5b7e05[_0x59b725(0x7e)] = 'DOMTree-' + new Date()[_0x59b725(0x188)]() + _0x59b725(0x2b5), document[_0x59b725(0x99)][_0x59b725(0x1d3)](_0x5b7e05), _0x5b7e05[_0x59b725(0x7c)](), _0x5b7e05[_0x59b725(0x8a)]();
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG', function () {
                const _0x47d219 = _0x41b477;
                _0xba0ecc(this)[_0x47d219(0x18a)](_0x47d219(0x2aa))[_0x47d219(0xc7)] > 0x0 ? _0xba0ecc(this)['parent'](_0x47d219(0x2aa))[_0x47d219(0x2c8)](0xfa, function () {
                    _0xba0ecc(this)['remove']();
                }) : _0xba0ecc('.IG_SN_DIG')[_0x47d219(0x8a)]();
            }), _0xba0ecc(window)[_0x41b477(0x1a6)](function (_0x42ba17) {
                const _0x258d10 = _0x41b477;
                _0x42ba17[_0x258d10(0x1d0)] == '81' && _0x42ba17['altKey'] && (_0xba0ecc('.IG_SN_DIG')['remove'](), _0x42ba17[_0x258d10(0x27a)]()), _0x42ba17[_0x258d10(0x1d0)] == '87' && _0x42ba17[_0x258d10(0x1c0)] && (_0x386f13(), _0x42ba17[_0x258d10(0x27a)]()), _0x42ba17['keyCode'] == '90' && _0x42ba17[_0x258d10(0x1c0)] && (_0x824e4a(), _0x42ba17[_0x258d10(0x27a)]()), _0x42ba17['keyCode'] == '82' && _0x42ba17[_0x258d10(0x1c0)] && (_0x443769(), _0x42ba17['preventDefault']()), _0x42ba17[_0x258d10(0x1d0)] == '83' && _0x42ba17[_0x258d10(0x1c0)] && (location[_0x258d10(0xf0)][_0x258d10(0x8b)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0xba0ecc('.IG_DWSTORY')[_0x258d10(0xc7)] > 0x0 && _0xba0ecc('.IG_DWSTORY')?.[_0x258d10(0x7c)](), location['href'][_0x258d10(0x8b)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0xba0ecc(_0x258d10(0x22d))['length'] > 0x0 && _0xba0ecc(_0x258d10(0x22d))?.['click'](), _0x42ba17['preventDefault']());
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0xab), _0x41b477(0x1cf), function (_0x3d9e02) {
                const _0x2239e0 = _0x41b477;
                var _0x5bbb33 = _0xba0ecc(this)[_0x2239e0(0x1eb)]('id');
                if (_0x5bbb33 && _0x20e445[_0x5bbb33] !== undefined) {
                    let _0x196319 = _0xba0ecc(this)[_0x2239e0(0x2be)](_0x2239e0(0x1dc));
                    GM_setValue(_0x5bbb33, _0x196319), _0x20e445[_0x5bbb33] = _0x196319, console[_0x2239e0(0x164)](_0x2239e0(0x1de), _0x5bbb33, _0x196319);
                }
            }), _0xba0ecc(_0x41b477(0x99))['on']('click', _0x41b477(0x148), function (_0x1bdaa1) {
                const _0x16e1c7 = _0x41b477;
                _0xba0ecc(this)[_0x16e1c7(0x1c3)](_0x16e1c7(0x2aa))['length'] > 0x0 && _0x1bdaa1['preventDefault']();
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0xab), _0x41b477(0x236), function () {
                const _0x2d493c = _0x41b477;
                let _0x5fb30d = _0xba0ecc(this)['val']();
                _0xba0ecc(this)[_0x2d493c(0x1eb)](_0x2d493c(0x137)) == 'range' ? _0xba0ecc(this)[_0x2d493c(0x109)]()[_0x2d493c(0x1da)](_0x5fb30d) : _0xba0ecc(this)[_0x2d493c(0x70)]()['val'](_0x5fb30d), _0x5fb30d >= 0x0 && _0x5fb30d <= 0x1 && (_0x47e989 = _0x5fb30d, GM_setValue(_0x2d493c(0x258), _0x5fb30d));
            }), _0xba0ecc('body')['on'](_0x41b477(0x6e), _0x41b477(0x236), function (_0x5c649c) {
                const _0x4ebeed = _0x41b477;
                if (_0xba0ecc(this)[_0x4ebeed(0x1eb)](_0x4ebeed(0x137)) == 'range') {
                    let _0x370a1e = _0xba0ecc(this)[_0x4ebeed(0x1da)]();
                    _0xba0ecc(this)[_0x4ebeed(0x109)]()['val'](_0x370a1e);
                } else {
                    let _0x1bf88d = _0xba0ecc(this)[_0x4ebeed(0x1da)]();
                    _0x1bf88d >= 0x0 && _0x1bf88d <= 0x1 ? _0xba0ecc(this)[_0x4ebeed(0x70)]()[_0x4ebeed(0x1da)](_0x1bf88d) : _0x1bf88d < 0x0 ? _0xba0ecc(this)[_0x4ebeed(0x1da)](0x0) : _0xba0ecc(this)[_0x4ebeed(0x1da)](0x1);
                }
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x6e), _0x41b477(0x178), function (_0xea9621) {
                const _0x184aed = _0x41b477;
                GM_setValue(_0x184aed(0x2cd), _0xba0ecc(this)['val']()), _0x23e79b = _0xba0ecc(this)['val']();
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), 'a[data-needed=\x22direct\x22]', function (_0x25c58a) {
                const _0x4c4aa2 = _0x41b477;
                _0x25c58a[_0x4c4aa2(0x27a)](), _0x259cf7(this);
            }), _0xba0ecc('body')['on'](_0x41b477(0x7c), _0x41b477(0x17b), function () {
                const _0x2f884a = _0x41b477;
                if (_0x20e445[_0x2f884a(0x11e)] && _0x20e445[_0x2f884a(0x11b)])
                    _0x259cf7(_0xba0ecc(this)[_0x2f884a(0x18a)]()['children']('a')['first']()[0x0], !![]);
                else {
                    var _0x362834 = new URL(_0xba0ecc(this)[_0x2f884a(0x18a)]()[_0x2f884a(0x232)]('a')['attr']('data-href'));
                    _0x362834[_0x2f884a(0xb5)] = 'scontent.cdninstagram.com', _0x49a481(_0x362834[_0x2f884a(0xf0)]);
                }
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), _0x41b477(0x10a), function () {
                const _0x57c65d = _0x41b477;
                let _0x25e79d = new Date()[_0x57c65d(0x188)]();
                _0x20e445[_0x57c65d(0x1ed)] && _0xba0ecc(this)[_0x57c65d(0x18a)]()[_0x57c65d(0x232)]('a')[_0x57c65d(0x1eb)](_0x57c65d(0x1c5)) && (_0x25e79d = _0xba0ecc(this)[_0x57c65d(0x18a)]()[_0x57c65d(0x232)]('a')['attr'](_0x57c65d(0x1c5)));
                let _0x554f54 = _0xba0ecc(this)[_0x57c65d(0x18a)]()[_0x57c65d(0x232)]('a')['attr'](_0x57c65d(0x24f)) ?? _0xba0ecc(_0x57c65d(0x29e))[_0x57c65d(0x125)]();
                _0x3788e(_0xba0ecc(this)['parent']()[_0x57c65d(0x232)]('a')[_0x57c65d(0x1c3)](_0x57c65d(0x2bc))[_0x57c65d(0x28c)]()['attr'](_0x57c65d(0xdc)), _0xba0ecc(this)[_0x57c65d(0x18a)]()['children']('a')['attr']('data-username'), _0x57c65d(0x1ce), _0x25e79d, 'jpg', _0x554f54);
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), _0x41b477(0x16f), function () {
                _0x17f907(!![]);
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), _0x41b477(0x233), function (_0x3d43a0) {
                _0x3d43a0['preventDefault'](), _0x17f907(!![], !![], !![]);
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), '.IG_DWSTORY_THUMBNAIL', function () {
                _0xeffbe3(!![]);
            }), _0xba0ecc('body')['on'](_0x41b477(0x7c), _0x41b477(0x14b), function (_0x141170) {
                _0x141170['stopPropagation'](), _0x529e01(!![]);
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), _0x41b477(0x22d), function () {
                _0x53ed83(!![]);
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), _0x41b477(0x20b), function (_0x209dee) {
                const _0x2e963c = _0x41b477;
                _0x209dee[_0x2e963c(0x27a)](), _0x53ed83(!![], !![]);
            }), _0xba0ecc(_0x41b477(0x99))['on']('click', '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x5f228b(!![]);
            }), _0xba0ecc('body')['on']('click', _0x41b477(0x144), function () {
                _0x370900(!![], !![]);
            }), _0xba0ecc(_0x41b477(0x99))['on']('click', _0x41b477(0x2c3), function () {
                _0x370900(!![], !![], !![]);
            }), _0xba0ecc('body')['on'](_0x41b477(0x7c), _0x41b477(0x1b5), function () {
                _0x370900(!![], ![]);
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x273), _0x41b477(0x10c), function (_0x1f668e) {
                const _0x2e83c0 = _0x41b477;
                if (_0x1f668e[_0x2e83c0(0x1b7)] === 0x3 || _0x1f668e['which'] === 0x2) {
                    if (location[_0x2e83c0(0xf0)] === 'https://www.instagram.com/' && _0x20e445['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x1f668e[_0x2e83c0(0x27a)]();
                        if (_0xba0ecc(this)['find'](_0x2e83c0(0x259))[_0x2e83c0(0xc7)] > 0x0) {
                            const _0x1bc143 = _0x2e83c0(0x6c) + _0xba0ecc(this)['children'](_0x2e83c0(0xd1))[_0x2e83c0(0xd0)]()['text']();
                            _0x1f668e[_0x2e83c0(0x1b7)] === 0x2 ? GM_openInTab(_0x1bc143) : location[_0x2e83c0(0xf0)] = _0x1bc143;
                        }
                    }
                }
            }), _0xba0ecc('body')['on']('change', _0x41b477(0x278), function () {
                const _0x23421f = _0x41b477;
                var _0x71decc = _0xba0ecc(this)[_0x23421f(0x1c3)]('input')[_0x23421f(0x2be)](_0x23421f(0x1dc));
                _0xba0ecc(_0x23421f(0x23d))[_0x23421f(0x158)](function () {
                    const _0xb74f74 = _0x23421f;
                    _0xba0ecc(this)['prop'](_0xb74f74(0x1dc), _0x71decc);
                });
            }), _0xba0ecc(_0x41b477(0x99))['on']('change', _0x41b477(0x23d), function () {
                const _0x3bb44a = _0x41b477;
                var _0x77c937 = _0xba0ecc(_0x3bb44a(0x15c))[_0x3bb44a(0xc7)], _0x1a83c7 = _0xba0ecc(_0x3bb44a(0x23d))[_0x3bb44a(0xc7)];
                _0xba0ecc(_0x3bb44a(0x278))[_0x3bb44a(0x1c3)](_0x3bb44a(0x6e))['prop']('checked', _0x77c937 == _0x1a83c7);
            }), _0xba0ecc(_0x41b477(0x99))['on'](_0x41b477(0x7c), _0x41b477(0x1df), function () {
                const _0x4fc563 = _0x41b477;
                let _0x513dde = 0x0;
                _0xba0ecc(_0x4fc563(0x1d7))[_0x4fc563(0x158)](function () {
                    const _0x23669e = _0x4fc563;
                    _0xba0ecc(this)['prev']()[_0x23669e(0x232)]('input')[_0x23669e(0x2be)](_0x23669e(0x1dc)) && (_0xba0ecc(this)[_0x23669e(0x7c)](), _0x513dde++);
                }), _0x513dde == 0x0 && alert(_0x368cd0('NO_CHECK_RESOURCE'));
            }), _0xba0ecc(_0x41b477(0x99))['on']('change', _0x41b477(0x162), function () {
                const _0x3209de = _0x41b477;
                GM_setValue(_0x3209de(0xf3), _0xba0ecc(this)[_0x3209de(0x1da)]()), _0x39d78a = _0xba0ecc(this)['val'](), _0x39d78a?.[_0x3209de(0x68)]('en') || _0x2f922d[_0x39d78a] != null ? (_0x41c8d1(), _0x46ed3f()) : _0x3aeb28(_0x39d78a)['then'](_0x143895 => {
                    _0x2f922d[_0x39d78a] = _0x143895, _0x41c8d1(), _0x46ed3f();
                })[_0x3209de(0x115)](_0x55273b => {
                    const _0x32028d = _0x3209de;
                    console[_0x32028d(0x216)]('getTranslationText\x20catch\x20error:', _0x55273b);
                });
            }), _0xba0ecc(_0x41b477(0x99))['on']('change', _0x41b477(0x1bf), function () {
                const _0x342bdc = _0x41b477;
                _0xba0ecc(_0x342bdc(0x1aa))[_0x342bdc(0x125)]('' + new Date()[_0x342bdc(0xe4)](_0xba0ecc(this)[_0x342bdc(0x1da)](), {
                    'hour12': ![],
                    'second': _0x342bdc(0xd6),
                    'minute': _0x342bdc(0xd6),
                    'hour': _0x342bdc(0xd6),
                    'month': _0x342bdc(0xd6),
                    'day': _0x342bdc(0xd6),
                    'year': _0x342bdc(0x1bc)
                })['replaceAll']('/', '-')), LOCATE_DATE_FORMAT = _0xba0ecc(this)['val'](), GM_setValue(_0x342bdc(0x227), _0xba0ecc(this)[_0x342bdc(0x1da)]());
            }), _0xba0ecc(_0x41b477(0x99))['on']('click', '.IG_SN_DIG_TITLE\x20#batch_download_direct', function () {
                const _0x271b9e = _0x41b477;
                _0xba0ecc(_0x271b9e(0x1d7))[_0x271b9e(0x158)](function () {
                    _0xba0ecc(this)['click']();
                });
            });
            const _0x55f23e = new MutationObserver(_0xe1617b => {
                const _0x1bd10f = _0x41b477;
                for (const _0x34a75c of _0xe1617b) {
                    _0x34a75c[_0x1bd10f(0x137)] === _0x1bd10f(0x2a1) && _0x34a75c[_0x1bd10f(0xd3)]['forEach'](_0x923572 => {
                        const _0x2f818c = _0x1bd10f, _0x52008b = _0xba0ecc(_0x923572)['find'](_0x2f818c(0x2ac));
                        if (_0x52008b[_0x2f818c(0xc7)] > 0x0) {
                            _0x20e445[_0x2f818c(0x211)] && _0x52008b[_0x2f818c(0x158)](function () {
                                const _0x1ed80f = _0x2f818c;
                                _0xba0ecc(this)['on'](_0x1ed80f(0x244), function () {
                                    const _0x57cb7a = _0x1ed80f;
                                    !_0xba0ecc(this)[_0x57cb7a(0x2c0)](_0x57cb7a(0x147)) && (_0xba0ecc(this)[_0x57cb7a(0x1eb)](_0x57cb7a(0x13b), !![]), this['volume'] = _0x47e989, _0x13e5c1(_0x57cb7a(0x1af)));
                                });
                            });
                            if (location['pathname'][_0x2f818c(0x8b)](/^(\/stories\/)/ig)) {
                                const _0x333baf = location[_0x2f818c(0x1f9)][_0x2f818c(0x8b)](/^(\/stories\/highlights\/)/ig) != null, _0x455c7e = _0x333baf ? 'highlight' : _0x2f818c(0xb2);
                                _0x52008b[_0x2f818c(0x158)](function () {
                                    const _0x2398dc = _0x2f818c;
                                    _0xba0ecc(this)['on']('timeupdate', function () {
                                        const _0x3ead76 = a0_0x4b53;
                                        if (!_0xba0ecc(this)['data'](_0x3ead76(0x12a))) {
                                            let _0x847665 = _0xba0ecc(this);
                                            _0x847665['parents'](_0x3ead76(0x29b))['filter'](function () {
                                                return _0xba0ecc(this)['width']() == _0x847665['width']();
                                            })[_0x3ead76(0x1c3)](_0x3ead76(0x2ad))[_0x3ead76(0xc7)] === 0x0 ? (_0xba0ecc(this)[_0x3ead76(0x1eb)]('data-modify-thumbnail', !![]), _0x333baf ? _0x5f228b(![]) : _0xeffbe3(![]), _0x13e5c1('(' + _0x455c7e + ')', _0x3ead76(0x2c1))) : (_0xba0ecc(this)[_0x3ead76(0x1eb)](_0x3ead76(0x195), !![]), _0x13e5c1('(' + _0x455c7e + ')', _0x3ead76(0xe6)));
                                        }
                                    });
                                    var _0x7d5c8f = _0xba0ecc(this);
                                    if (_0x20e445[_0x2398dc(0x18b)]) {
                                        if (!_0x7d5c8f[_0x2398dc(0x2c0)](_0x2398dc(0x6d))) {
                                            _0x13e5c1('(' + _0x455c7e + ')', _0x2398dc(0x190)), this['volume'] = _0x47e989, _0x7d5c8f['on'](_0x2398dc(0x1e0), function () {
                                                const _0x35df97 = _0x2398dc;
                                                this[_0x35df97(0x26a)] = _0x47e989;
                                            });
                                            let _0x345999 = _0x7d5c8f[_0x2398dc(0x209)]('div')[_0x2398dc(0x1cc)](function () {
                                                    const _0x51462c = _0x2398dc;
                                                    return _0xba0ecc(this)[_0x51462c(0x1eb)](_0x51462c(0x27c)) == null && _0xba0ecc(this)[_0x51462c(0x1eb)]('style') == null;
                                                })[_0x2398dc(0x28c)](), _0x44db63 = _0x345999[_0x2398dc(0x109)]();
                                            _0x44db63['hide']();
                                            let _0x36d183 = _0x345999['find']('div[class][role=\x22button\x22]');
                                            _0x36d183[_0x2398dc(0x2a6)]();
                                            const _0x385150 = function (_0x45e49f) {
                                                const _0x562d24 = _0x2398dc;
                                                _0x45e49f[_0x562d24(0x27a)](), _0x7d5c8f[_0x562d24(0x1cb)](_0x562d24(0x2ca), '2'), _0x7d5c8f[_0x562d24(0x1eb)](_0x562d24(0x6d), !![]), _0x36d183[_0x562d24(0x2a6)](), _0x44db63['hide'](), _0x5cac90(_0x7d5c8f, _0x7d5c8f[_0x562d24(0x209)](_0x562d24(0x29b))[_0x562d24(0x1cc)](function () {
                                                    const _0x1f3cf2 = _0x562d24;
                                                    return _0xba0ecc(this)[_0x1f3cf2(0x24c)]() == _0x7d5c8f[_0x1f3cf2(0x24c)]();
                                                })[_0x562d24(0x28c)](), _0x455c7e, _0x562d24(0xac));
                                            };
                                            _0x7d5c8f[_0x2398dc(0x18a)]()[_0x2398dc(0x1c3)](_0x2398dc(0x22f))['on'](_0x2398dc(0xea), _0x385150), _0x36d183['on'](_0x2398dc(0xea), _0x385150), _0x44db63['on']('contextmenu', _0x385150), _0x7d5c8f['on'](_0x2398dc(0xea), function (_0x235ebd) {
                                                const _0x3bdbd8 = _0x2398dc;
                                                _0x235ebd[_0x3bdbd8(0x27a)](), _0x7d5c8f[_0x3bdbd8(0x1cb)](_0x3bdbd8(0x2ca), '-1'), _0x7d5c8f[_0x3bdbd8(0x2c7)]('controls'), _0x44db63[_0x3bdbd8(0x201)](), _0x36d183['show'](), _0x5cac90(_0x7d5c8f, _0x7d5c8f[_0x3bdbd8(0x209)](_0x3bdbd8(0x29b))[_0x3bdbd8(0x1cc)](function () {
                                                    const _0x34b104 = _0x3bdbd8;
                                                    return _0xba0ecc(this)[_0x34b104(0x24c)]() == _0x7d5c8f['width']();
                                                })[_0x3bdbd8(0x28c)](), _0x455c7e, _0x3bdbd8(0xac));
                                            }), _0x7d5c8f['on'](_0x2398dc(0x94), function () {
                                                const _0x59095b = _0x2398dc;
                                                let _0x373b6b = _0x345999[_0x59095b(0x18a)]()[_0x59095b(0x1c3)](_0x59095b(0x29d))[_0x59095b(0x209)](_0x59095b(0x13a))['first']();
                                                var _0x42c4a5 = _0x373b6b['find'](_0x59095b(0x27b))[_0x59095b(0xc7)] === 0x0;
                                                this[_0x59095b(0x169)] != _0x42c4a5 && (this['volume'] = _0x47e989, _0x373b6b?.['click']()), _0xba0ecc(this)['attr']('data-completed') && (_0x47e989 = this[_0x59095b(0x26a)], GM_setValue(_0x59095b(0x258), this['volume'])), this[_0x59095b(0x26a)] == _0x47e989 && _0xba0ecc(this)['attr']('data-completed', !![]);
                                            }), _0x7d5c8f[_0x2398dc(0x1cb)]('position', 'absolute'), _0x7d5c8f['css'](_0x2398dc(0x2ca), '2'), _0x7d5c8f[_0x2398dc(0x1eb)]('data-controls', !![]), _0x7d5c8f[_0x2398dc(0x1eb)]('controls', !![]);
                                        }
                                    } else
                                        _0x5cac90(_0x7d5c8f, _0x7d5c8f[_0x2398dc(0x209)](_0x2398dc(0x29b))[_0x2398dc(0x1cc)](function () {
                                            const _0x1c7233 = _0x2398dc;
                                            return _0xba0ecc(this)[_0x1c7233(0x24c)]() == _0x7d5c8f[_0x1c7233(0x24c)]();
                                        })['first'](), _0x455c7e, _0x2398dc(0xac));
                                });
                            }
                        }
                    });
                }
            });
            _0x55f23e['observe'](_0xba0ecc('div[id^=\x22mount\x22]')[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));