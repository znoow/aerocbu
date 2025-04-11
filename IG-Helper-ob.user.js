// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.2.2
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

function a0_0x2eb7(_0x53f368, _0x358b2e) {
    const _0x449e88 = a0_0x449e();
    return a0_0x2eb7 = function (_0x2eb781, _0xdfa729) {
        _0x2eb781 = _0x2eb781 - 0x162;
        let _0x443ec7 = _0x449e88[_0x2eb781];
        return _0x443ec7;
    }, a0_0x2eb7(_0x53f368, _0x358b2e);
}
function a0_0x449e() {
    const _0x11f4e5 = [
        'title',
        'carousel_media:',
        '._acay\x20._acaz',
        'absolute',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'mouseenter',
        'NO_VID_URL',
        'data-modify',
        'user',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'replace',
        'toString',
        'faild',
        'Checking\x20for\x20Updates',
        '215574SdnJQQ',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'body',
        'stories',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'getStories()',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'taken_at',
        'grabbing',
        'removeClass',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'each',
        'stopPropagation',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'height',
        'observe',
        'shortcode',
        'query_hash',
        '<a\x20datetime=\x22',
        'GL_repeat',
        'NOPATH',
        'match',
        '\x20child',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'videoVolume',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'originalEvent',
        'GraphImage',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'owner',
        'is_video',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'hasClass',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        ':hidden',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'grab',
        'Request\x20with:',
        'taken_at_timestamp',
        'Display\x20HTML5\x20Video\x20Controller',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'click',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'append',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'RELOAD_SCRIPT',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        '[role=\x22button\x22]',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'section\x20>\x20main[role=\x22main\x22]',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'Current\x20version:\x20',
        '.IG_NEWTAB_MAIN',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'x1lix1fw',
        'div\x20>\x20ul\x20li._acaz',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '.IG_POPUP_DIG',
        'which',
        'image_versions2',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'SHOW_DOM_TREE',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'object',
        'textContent',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'video\x20+\x20div\x20>\x20div',
        '._aagv\x20img',
        '3961611LSaucO',
        'response',
        'removeAttr',
        'fadeOut',
        '#tempWrapper',
        'then',
        'datetime',
        'controls',
        'reels',
        'NOTICE_UPDATE_TITLE',
        'LOAD_BLOB_ONE',
        'push',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'GL_referrer',
        'z-index',
        'data-snig',
        'display_url',
        '8zWsXcA',
        '\x22\x20data-globalIndex=\x22',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]',
        '._acay\x20+\x20.x24i39r',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        '35WwJIxD',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'logger\x20sliced',
        'GL_observer',
        '.IG_REELS',
        'a[href^=\x22/p/\x22]',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'getFullYear',
        'data-path',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'locale',
        'video_url',
        'tagName',
        '_acnf',
        'hidden',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'Image',
        'Open\x20in\x20New\x20Tab',
        'data-modify-thumbnail',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '</div>',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'trigger',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '.json',
        '_acnb',
        'href',
        'GraphVideo',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '#iv_image',
        'pathname',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'div#scrollview',
        'wrap',
        '37px',
        'https://ko-fi.com/snkoarashi',
        'there\x20is\x20no\x20new\x20update',
        'div[class][role=\x22button\x22]',
        'Donate',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'img[referrerpolicy]',
        'data-name',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'isReels',
        'hasReferrer',
        'bottom',
        '#article-id',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        '_INTRO',
        'type',
        'host',
        'stp',
        'FORCE_RESOURCE_VIA_MEDIA',
        '</a>',
        'relative',
        'parents',
        'ended',
        'data-controls',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'avatar',
        'catch',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'toISOString',
        'appendChild',
        'Wololo!\x20New\x20version\x20released.',
        'toLowerCase',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'DONATE',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'video\x20volume\x20changed\x20#slider',
        'substr',
        'DIV',
        'GL_username',
        'DOWNLOAD',
        '</span></label>',
        'story',
        'change',
        'getUserIdWithAgent()',
        'CHECK_UPDATE_MENU',
        'innerHeight',
        'className',
        'css',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'label',
        'last',
        '.circle_wrapper',
        'en-US',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'https://www.instagram.com/reels/',
        '[data-ih-locale]',
        'GL_logger',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'REPORT_DISCORD',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'div\x20>\x20ul._acay',
        '.IG_DW_MAIN',
        'DOWNLOAD_DOM_TREE',
        'range',
        'www.',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'parse',
        'cursor',
        'createObjectURL',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'DIRECT_DOWNLOAD_ALL',
        '.IG_DWHISTORY_ALL',
        'innerHTML',
        '.circle_wrapper\x20span',
        '.IG_DWSTORY_ALL',
        'jpg',
        'sort',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'x1iyjqo2',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'IMAGE_VIEWER',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'replaceAll',
        'shortcode_media',
        'Script\x20Loaded',
        'mousedown',
        'article',
        'Download\x20All\x20Resources',
        'GET',
        'https://www.instagram.com/',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'GL_postPath',
        'INTERNAL_CSS',
        'body\x20>\x20div\x20section:visible._ac0a',
        'feedback_message',
        'disconnect',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'getBlobMedia()',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'ALL_CHECK',
        '\x22\x20/>',
        'Loading\x20Blob\x20Media...',
        'getBlobMediaWithQueryID()',
        'scale(',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'THUMBNAIL_INTRO',
        'prop',
        '*/*',
        'contextmenu',
        'config_width',
        'Feedback\x20Options',
        'G_RENAME_FORMAT',
        'html',
        'data',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        '2463755tMZMJh',
        'div[style][class]',
        '</a></button>',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'post',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        '.button_wrapper',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'profile_pic_url',
        'mousemove.igHelper',
        'getTranslationText()',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'lang',
        'AUTO_RENAME',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'DISABLE_VIDEO_LOOPING',
        '.videoThumbnail',
        '\x22]\x20span',
        'width',
        'language',
        'url',
        '<div></div>',
        'SCROLL_BUTTON',
        'GL_registerEventList',
        'https://i.instagram.com/api/v1/media/',
        '.IG_DWNEWTAB',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'SETTING',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'join',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'val',
        'BATCH_DOWNLOAD_DIRECT',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'RENAME_PUBLISH_DATE',
        'items',
        'padEnd',
        'carousel_media:\x20undefined\x20username',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'dragstart\x20drop',
        'wheel',
        '</p>',
        'username',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'div:not([class]):not([style])',
        '</a></button><br/>',
        '641130oGrbnq',
        'loop',
        'pageX',
        'Checking\x20for\x20Script\x20Updates',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        '\x22\x20class=\x22IG_REELS\x22>',
        'altKey',
        'srcset',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'show',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        '.IG_POPUP_DIG\x20#post_info',
        'mp4',
        'copy',
        '.IG_DWHINEWTAB',
        'video_versions',
        'getHours',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'src',
        'display_resources',
        '<label\x20class=\x22globalSettings',
        'onHighlightsStory',
        'video',
        '/p/',
        'currentURL',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'Close',
        'after',
        '\x20-</a>',
        'keydown',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'data-type',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'time[datetime]',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'script',
        '<a\x20href=\x22https://www.instagram.com/p/',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'before',
        'floor',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'target',
        'data-loop',
        'div#splash-screen',
        'GM_unregisterMenuCommand',
        '.IG_DWSTORY_THUMBNAIL',
        '\x22\x20class=\x22newTab\x22>',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'children',
        'div.volume_slider\x20input',
        'name',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'DEBUG',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'a[href]',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'getTime',
        'download',
        '/followers/',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'attr',
        'off',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'xdt_api__v1__media__shortcode__web_info',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'data-username',
        'text/plain',
        'remove',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        '#imageViewer',
        '</option>',
        'LOAD_BLOB_MULTIPLE',
        'padStart',
        '#_SNLOAD',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'forEach',
        'HTML5_VIDEO_CONTROL',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        '</div></div>',
        'DOWNLOAD_ALL',
        'thumbnail',
        'edge_sidecar_to_children',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'parent',
        'edges',
        '</button>',
        'Show\x20DOM\x20Tree',
        '/accounts/login',
        'Manually\x20inserting\x20thumbnail\x20button',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'getMediaInfo()',
        'Open\x20Image\x20In\x20Viewer',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        '\x22><span\x20data-ih-locale=\x22',
        '/info/',
        'getTranslationText\x20catch\x20error:',
        'isHomepage',
        'vertical',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'load',
        'IMG',
        'getUserId()',
        '2gqXccC',
        'loadstart',
        'registerMenuIds',
        'G_VIDEO_VOLUME',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        '<div\x20class=\x22volume_slider\x20',
        '/following/',
        'hd_profile_pic_url_info',
        '#scrollWrapper',
        'next',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        '_blank',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'NEW_TAB',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'carousel_media',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'style',
        'userLanguage',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'muted',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        '<option\x20value=\x22',
        'onReadyMyDW()\x20Timer',
        'trim',
        'IG\x20Debug\x20DOM\x20Tree',
        'isDialog',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'getMonth',
        'undefined',
        '\x22\x20/></div>',
        'checked',
        'content',
        'div[id^=\x22mount\x22]',
        'firstStarted',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        '20000',
        'get',
        'undefined\x20username',
        'close',
        '--ig-track-progress:\x20',
        '.IG_THUMBNAIL_MAIN',
        'isHighlightsStory',
        'body\x20>\x20div\x20section._ac0a',
        'flex',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'volumechange',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'length',
        'top',
        'CLOSE',
        'boolean',
        '[data-snig]',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'isProfile',
        'img',
        'version',
        'scontent.cdninstagram.com',
        'CHECK_UPDATE',
        'MODIFY_VIDEO_VOLUME',
        'video_resources',
        'code',
        'getHighlightStories()',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'message',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        '.IG_DWHISTORY_THUMBNAIL',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'users',
        'div:last-child',
        'log',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'getUserHighSizeProfile()',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'setAttribute',
        'REPORT_GITHUB',
        'ig_helper_notice',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'error',
        '2267WVlkjc',
        'data-href',
        'mouseup',
        'query_id',
        'tempFetchRateLimit',
        'status',
        'Reload\x20Script',
        'createElement',
        'blob',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'modify',
        '.IG_IMAGE_VIEWER',
        'fileRenameFormat',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        '#iv_close',
        'scrollBy',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'addClass',
        '675594ihhkxP',
        'GL_dataCache',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'DW_ALL',
        '[data-ih-locale-title]',
        '430744ymQpdP',
        'matchAll',
        'keys',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'G_CHECK_TIMESTAMP',
        '._acnb',
        'Fetch\x20from\x20memory\x20cache:',
        'pause',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'transform',
        'div',
        'stringify',
        'searchParams',
        'reel',
        '.IG_REELS_NEWTAB',
        'FULLSCREEN',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'first',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'find',
        'filter',
        'data-visualcompletion',
        'data-ih-locale-title',
        'Cannot\x20find\x20resource\x20url.',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        '\x0a-----\x0a\x0aLocation:\x20',
        'VID',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'Download\x20Selected\x20Resources',
        'left',
        '.IG_DWHISTORY',
        '.IG_DWSTORY',
        'media-id',
        'prev',
        'split',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'pageLoaded',
        'getPostOwner()',
        'a[href]\x20time[datetime]',
        '%22}',
        '\x22\x20datetime=\x22',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'a[href^=\x22/\x22]',
        'div[role=\x22presentation\x22]',
        'candidates',
        'Main\x20Timer',
        'highlights',
        '</span>\x20<input\x20id=\x22',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'startsWith',
        'SKIP_VIEW_STORY_CONFIRM',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'fail',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'Thumbnail\x20button\x20already\x20inserted',
        'x1s85apg',
        'canDownload',
        'pageY',
        'text',
        'display',
        'getBlobMediaWithQuery()',
        'time',
        'data-ih-locale',
        'getDate',
        'NONE',
        'THUMBNAIL',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'Can\x20not\x20find\x20download\x20url.',
        'hide',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'Download\x20Video\x20Thumbnail',
        'data-completed',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'Feedback',
        '<input\x20value=\x22',
        'data-remove-thumbnail',
        'https://www.instagram.com/reel/',
        'user\x20settings',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'DOMTree-',
        'downloadURL',
        'node',
        'Debug\x20Window',
        'remove-thumbnail',
        'getMinutes',
        'input',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        '<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        '.IG_DWPROFILE',
        '<a\x20media-id=\x22',
        '_ac3q',
        'isArray',
        'reject',
        '.IG_DW_ALL_MAIN',
        '._acay',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'div.volume_slider',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'volume',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'position',
        '.txt',
        'GraphSidecar',
        'finalUrl',
        'Found\x20insert\x20point',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'endsWith',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        '__typename',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'Logger:\x0a',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'Cannot\x20find\x20video\x20URL.',
        'warn',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'reels_media',
        'Found\x20post\x20container',
        'modify-thumbnail',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'selected',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20</div>',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'Remote\x20version:\x20',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'preventDefault',
        'play\x20playing',
        'https://www.instagram.com/p/',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'LOCALE_MANIFEST',
        '\x22\x20title=\x22',
        'includes',
        'hostname',
        'smooth',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'script[type=\x22application/json\x22]',
        '</span>\x20'
    ];
    a0_0x449e = function () {
        return _0x11f4e5;
    };
    return a0_0x449e();
}
(function (_0x5f52a6, _0x6a9e63) {
    const _0x178759 = a0_0x2eb7, _0x927fe = _0x5f52a6();
    while (!![]) {
        try {
            const _0x2c18a0 = -parseInt(_0x178759(0x2d1)) / 0x1 * (-parseInt(_0x178759(0x27b)) / 0x2) + parseInt(_0x178759(0x2e4)) / 0x3 + -parseInt(_0x178759(0x2e9)) / 0x4 + parseInt(_0x178759(0x3ed)) / 0x5 * (parseInt(_0x178759(0x389)) / 0x6) + parseInt(_0x178759(0x1da)) / 0x7 + parseInt(_0x178759(0x3e2)) / 0x8 * (-parseInt(_0x178759(0x3d1)) / 0x9) + parseInt(_0x178759(0x20a)) / 0xa;
            if (_0x2c18a0 === _0x6a9e63)
                break;
            else
                _0x927fe['push'](_0x927fe['shift']());
        } catch (_0x4baceb) {
            _0x927fe['push'](_0x927fe['shift']());
        }
    }
}(a0_0x449e, 0x54c2d), function (_0x374b21) {
    setTimeout(() => {
        'use strict';
        const _0x38a4e7 = a0_0x2eb7;
        const _0x1aee20 = {
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
            }, _0x2f3c64 = [
                _0x38a4e7(0x1fe),
                _0x38a4e7(0x19f),
                _0x38a4e7(0x34f)
            ], _0x5a160e = {
                'DOWNLOAD': _0x38a4e7(0x247),
                'NEW_TAB': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
                'THUMBNAIL': _0x38a4e7(0x367),
                'DOWNLOAD_ALL': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
                'CLOSE': _0x38a4e7(0x2e6),
                'FULLSCREEN': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>'
            }, _0x592275 = 0xfa, _0x19a5c1 = GM_getResourceText(_0x38a4e7(0x1c2)), _0x4f55d7 = JSON[_0x38a4e7(0x1a7)](GM_getResourceText(_0x38a4e7(0x372)));
        var _0x6cf809 = {
            'videoVolume': GM_getValue(_0x38a4e7(0x27e)) ? GM_getValue(_0x38a4e7(0x27e)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x38a4e7(0x1d6)) ? GM_getValue('G_RENAME_FORMAT') : _0x38a4e7(0x226),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x38a4e7(0x1e8)) || navigator[_0x38a4e7(0x1ef)] || navigator[_0x38a4e7(0x291)],
            'currentURL': location[_0x38a4e7(0x408)],
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
                _0x5a911c();
            })
        };
        _0x262318(), GM_addStyle(_0x19a5c1), _0xb556f3(), _0x3e449d(_0x6cf809['lang'])[_0x38a4e7(0x3d6)](_0xca4a36 => {
            const _0x5c2e1d = _0x38a4e7;
            _0x6cf809[_0x5c2e1d(0x3f7)][_0x6cf809[_0x5c2e1d(0x1e8)]] = _0xca4a36, _0x3f34de(), _0xb556f3(), _0x208731(0x12c);
        })['catch'](_0x12bcb9 => {
            const _0x30b681 = _0x38a4e7;
            _0xb556f3(), _0x208731(0x12c), !_0x6cf809[_0x30b681(0x1e8)]['startsWith']('en') && console['error'](_0x30b681(0x274), _0x12bcb9);
        }), _0x42d816(_0x38a4e7(0x1ba), GM_info['script'][_0x38a4e7(0x242)], 'version:', GM_info[_0x38a4e7(0x231)][_0x38a4e7(0x2ba)]);
        var _0x2faa93 = setInterval(function () {
            const _0x2aa7a5 = _0x38a4e7;
            if (_0x374b21('div#splash-screen')[_0x2aa7a5(0x2b2)] > 0x0 && !_0x374b21(_0x2aa7a5(0x23b))['is'](_0x2aa7a5(0x3ae)) || location[_0x2aa7a5(0x40c)][_0x2aa7a5(0x39f)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x2aa7a5(0x375)][_0x2aa7a5(0x31f)](_0x2aa7a5(0x1a5)) || (location[_0x2aa7a5(0x40c)][_0x2aa7a5(0x35a)](_0x2aa7a5(0x24b)) || location[_0x2aa7a5(0x40c)]['endsWith'](_0x2aa7a5(0x281))) && _0x374b21(_0x2aa7a5(0x3e6))[_0x2aa7a5(0x2b2)] > 0x0) {
                _0x6cf809[_0x2aa7a5(0x30f)] = ![];
                return;
            }
            if (_0x6cf809[_0x2aa7a5(0x225)] != location[_0x2aa7a5(0x408)] || !_0x6cf809[_0x2aa7a5(0x2a2)] || !_0x6cf809[_0x2aa7a5(0x30f)]) {
                console[_0x2aa7a5(0x2c8)](_0x2aa7a5(0x319), 'trigging'), clearInterval(_0x6cf809[_0x2aa7a5(0x39d)]), _0x6cf809['pageLoaded'] = ![], _0x6cf809[_0x2aa7a5(0x2a2)] = !![], _0x6cf809[_0x2aa7a5(0x225)] = location[_0x2aa7a5(0x408)], _0x6cf809['GL_observer'][_0x2aa7a5(0x1c5)]();
                if (location[_0x2aa7a5(0x408)][_0x2aa7a5(0x31f)](_0x2aa7a5(0x370)) || location[_0x2aa7a5(0x40c)]['match'](/^\/(.*?)\/(p|reel)\//ig) || location['href'][_0x2aa7a5(0x31f)](_0x2aa7a5(0x33c))) {
                    _0x6cf809[_0x2aa7a5(0x2e5)][_0x2aa7a5(0x38d)] = {}, _0x6cf809['GL_dataCache']['highlights'] = {}, _0x42d816(_0x2aa7a5(0x299));
                    var _0x16b4e8 = setInterval(() => {
                        const _0x37fc9b = _0x2aa7a5;
                        _0x374b21(_0x37fc9b(0x2af))[_0x37fc9b(0x2b2)] > 0x0 && (clearInterval(_0x16b4e8), setTimeout(() => {
                            _0x5a911c(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x6cf809[_0x2aa7a5(0x30f)] = !![];
                }
                location[_0x2aa7a5(0x408)][_0x2aa7a5(0x31f)](_0x2aa7a5(0x197)) && (_0x42d816(_0x2aa7a5(0x168)), setTimeout(() => {
                    _0x195378(![]);
                }, 0x96), _0x6cf809[_0x2aa7a5(0x30f)] = !![]);
                if (location['href'][_0x2aa7a5(0x30d)]('?')[0x0] == _0x2aa7a5(0x1bf)) {
                    _0x6cf809[_0x2aa7a5(0x2e5)][_0x2aa7a5(0x38d)] = {}, _0x6cf809[_0x2aa7a5(0x2e5)][_0x2aa7a5(0x31a)] = {};
                    let _0x4b7c7e = _0x6cf809[_0x2aa7a5(0x3de)]?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x42d816(_0x2aa7a5(0x275), _0x4b7c7e), setTimeout(() => {
                        const _0x28e0bb = _0x2aa7a5;
                        _0x5a911c(![], _0x4b7c7e);
                        const _0x8a300b = _0x374b21(_0x28e0bb(0x215))?.[_0x28e0bb(0x266)]()[0x0];
                        _0x8a300b && _0x6cf809[_0x28e0bb(0x3f0)][_0x28e0bb(0x399)](_0x8a300b, { 'childList': !![] });
                    }, 0x96), _0x6cf809['pageLoaded'] = !![];
                }
                _0x374b21(_0x2aa7a5(0x182))['length'] && location[_0x2aa7a5(0x40c)]['match'](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x2aa7a5(0x40c)]['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x42d816(_0x2aa7a5(0x2b8)), setTimeout(() => {
                    _0x24b4ad(![]);
                }, 0x96), _0x6cf809[_0x2aa7a5(0x30f)] = !![]);
                if (!_0x6cf809[_0x2aa7a5(0x30f)]) {
                    if (location[_0x2aa7a5(0x408)][_0x2aa7a5(0x39f)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x6cf809[_0x2aa7a5(0x2e5)][_0x2aa7a5(0x31a)] = {}, _0x42d816(_0x2aa7a5(0x2ac)), _0x1eccd9(![]), _0x6cf809['GL_repeat'] = setInterval(() => {
                            _0x1da392(![]);
                        }, _0x592275), _0x374b21(_0x2aa7a5(0x309))['length'] && setTimeout(() => {
                            const _0x59d0fd = _0x2aa7a5;
                            if (_0x1aee20[_0x59d0fd(0x320)]) {
                                var _0x540a7d = _0x374b21(_0x59d0fd(0x2c3))[_0x59d0fd(0x2ff)](function () {
                                    const _0xe65e5d = _0x59d0fd;
                                    return _0x374b21(this)[_0xe65e5d(0x240)]()[_0xe65e5d(0x2b2)] === 0x0 && this[_0xe65e5d(0x3cd)]['trim']() !== '';
                                });
                                _0x540a7d?.['trigger'](_0x59d0fd(0x3b5));
                            }
                            _0x6cf809['pageLoaded'] = !![];
                        }, 0x96);
                    else
                        location[_0x2aa7a5(0x408)][_0x2aa7a5(0x39f)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x42d816('isStory'), _0x374b21(_0x2aa7a5(0x40d))[_0x2aa7a5(0x2b2)] > 0x0 && (_0x374b21(_0x2aa7a5(0x30a))['remove'](), _0x374b21(_0x2aa7a5(0x1f5))[_0x2aa7a5(0x255)](), _0x374b21(_0x2aa7a5(0x23d))[_0x2aa7a5(0x2b2)] && _0x374b21(_0x2aa7a5(0x23d))[_0x2aa7a5(0x255)](), _0x281acf(![]), setTimeout(() => {
                            _0x281acf(![]);
                        }, 0x96)), _0x374b21('.IG_DWSTORY')[_0x2aa7a5(0x2b2)] && setTimeout(() => {
                            const _0x2386f7 = _0x2aa7a5;
                            if (_0x1aee20[_0x2386f7(0x320)]) {
                                var _0x4bc5f4 = _0x374b21(_0x2386f7(0x2c3))[_0x2386f7(0x2ff)](function () {
                                    const _0x1db917 = _0x2386f7;
                                    return _0x374b21(this)[_0x1db917(0x240)]()[_0x1db917(0x2b2)] === 0x0 && this[_0x1db917(0x3cd)][_0x1db917(0x297)]() !== '';
                                });
                                _0x4bc5f4?.[_0x2386f7(0x3b5)]();
                            }
                            _0x6cf809['pageLoaded'] = !![];
                        }, 0x96)) : (_0x6cf809[_0x2aa7a5(0x30f)] = ![], _0x374b21(_0x2aa7a5(0x30a))[_0x2aa7a5(0x2b2)] && _0x374b21(_0x2aa7a5(0x30a))['remove'](), _0x374b21(_0x2aa7a5(0x1af))[_0x2aa7a5(0x2b2)] && _0x374b21(_0x2aa7a5(0x1af))[_0x2aa7a5(0x255)](), _0x374b21('.IG_DWNEWTAB')[_0x2aa7a5(0x2b2)] && _0x374b21('.IG_DWNEWTAB')['remove'](), _0x374b21(_0x2aa7a5(0x23d))[_0x2aa7a5(0x2b2)] && _0x374b21('.IG_DWSTORY_THUMBNAIL')[_0x2aa7a5(0x255)](), _0x374b21('.IG_DWHISTORY')[_0x2aa7a5(0x2b2)] && _0x374b21(_0x2aa7a5(0x309))[_0x2aa7a5(0x255)](), _0x374b21(_0x2aa7a5(0x1ac))[_0x2aa7a5(0x2b2)] && _0x374b21(_0x2aa7a5(0x1ac))['remove'](), _0x374b21(_0x2aa7a5(0x219))[_0x2aa7a5(0x2b2)] && _0x374b21(_0x2aa7a5(0x219))[_0x2aa7a5(0x255)](), _0x374b21(_0x2aa7a5(0x2c4))[_0x2aa7a5(0x2b2)] && _0x374b21(_0x2aa7a5(0x2c4))[_0x2aa7a5(0x255)]());
                }
                _0x208731(0x12c), _0x6cf809[_0x2aa7a5(0x3de)] = new URL(location[_0x2aa7a5(0x408)])['pathname'];
            }
        }, _0x592275);
        async function _0x31ca9d() {
            const _0x50946d = _0x38a4e7;
            _0x3547f7(!![]);
            let _0x3baee7 = new Date()[_0x50946d(0x249)](), _0x2f25e1 = Math[_0x50946d(0x235)](_0x3baee7 / 0x3e8), _0x338303 = location[_0x50946d(0x408)]['replace'](/\/$/ig, '')[_0x50946d(0x30d)]('/')['at'](-0x1), _0x2c1d97 = await _0x4a746e(_0x338303), _0xd565a9 = _0x2c1d97[_0x50946d(0x1d8)]['reels_media'][0x0][_0x50946d(0x3a9)][_0x50946d(0x206)], _0x2c3bff = 0x0;
            _0x46fc51(_0x2c3bff, _0x2c1d97[_0x50946d(0x1d8)][_0x50946d(0x364)][0x0][_0x50946d(0x1ff)][_0x50946d(0x2b2)]), _0x2c1d97[_0x50946d(0x1d8)][_0x50946d(0x364)][0x0][_0x50946d(0x1ff)][_0x50946d(0x25d)]((_0x5d708b, _0x3ba9cb) => {
                setTimeout(() => {
                    const _0x2c2699 = a0_0x2eb7;
                    _0x1aee20[_0x2c2699(0x1fe)] && (_0x2f25e1 = _0x5d708b[_0x2c2699(0x3b2)]), _0x5d708b[_0x2c2699(0x220)][_0x2c2699(0x1b1)](function (_0x4bb52c, _0x54fcce) {
                        const _0x373fac = _0x2c2699;
                        if (_0x4bb52c['config_width'] < _0x54fcce[_0x373fac(0x1d4)])
                            return 0x1;
                        if (_0x4bb52c[_0x373fac(0x1d4)] > _0x54fcce[_0x373fac(0x1d4)])
                            return -0x1;
                        return 0x0;
                    }), _0x5d708b['is_video'] ? _0x496556(_0x5d708b[_0x2c2699(0x2be)][0x0][_0x2c2699(0x21f)], _0xd565a9, _0x2c2699(0x38d), _0x2f25e1, _0x2c2699(0x217), _0x5d708b['id'])['then'](() => {
                        const _0x422372 = _0x2c2699;
                        _0x46fc51(++_0x2c3bff, _0x2c1d97[_0x422372(0x1d8)]['reels_media'][0x0][_0x422372(0x1ff)][_0x422372(0x2b2)]);
                    }) : _0x496556(_0x5d708b['display_resources'][0x0][_0x2c2699(0x21f)], _0xd565a9, 'stories', _0x2f25e1, _0x2c2699(0x1b0), _0x5d708b['id'])[_0x2c2699(0x3d6)](() => {
                        const _0x282785 = _0x2c2699;
                        _0x46fc51(++_0x2c3bff, _0x2c1d97['data'][_0x282785(0x364)][0x0][_0x282785(0x1ff)][_0x282785(0x2b2)]);
                    });
                }, 0x64 * _0x3ba9cb);
            });
        }
        async function _0x1eccd9(_0x26d260, _0x427593) {
            const _0x4dbff6 = _0x38a4e7;
            var _0xe23110 = _0x374b21(_0x4dbff6(0x2a5))[_0x4dbff6(0x2ff)](function () {
                const _0xca9320 = _0x4dbff6;
                return _0x374b21(this)['attr'](_0xca9320(0x408))['split']('/')[_0xca9320(0x2ff)](_0xeafa78 => _0xeafa78[_0xca9320(0x2b2)] > 0x0)[_0xca9320(0x2b2)] === 0x1;
            })[_0x4dbff6(0x2fb)]()[_0x4dbff6(0x24d)](_0x4dbff6(0x408))[_0x4dbff6(0x30d)]('/')['filter'](_0x24daf0 => _0x24daf0[_0x4dbff6(0x2b2)] > 0x0)['at'](0x0);
            if (_0x26d260) {
                let _0x3a93ab = new Date()[_0x4dbff6(0x249)](), _0x2bbc47 = Math['floor'](_0x3a93ab / 0x3e8), _0x27fb6c = location[_0x4dbff6(0x408)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0xfb7d25 = _0x374b21('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')['length'] || _0x374b21(_0x4dbff6(0x21d))[_0x4dbff6(0x2b2)] || _0x374b21('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x4dbff6(0x2fe)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')['length'], _0x3fd679 = 0x0;
                _0x3547f7(!![]);
                if (_0x6cf809[_0x4dbff6(0x2e5)][_0x4dbff6(0x31a)][_0x27fb6c]) {
                    _0x42d816('Fetch\x20from\x20memory\x20cache:', _0x27fb6c);
                    let _0x30a52c = _0x6cf809[_0x4dbff6(0x2e5)]['highlights'][_0x27fb6c][_0x4dbff6(0x1d8)][_0x4dbff6(0x364)][0x0][_0x4dbff6(0x1ff)][_0x4dbff6(0x2b2)];
                    _0xe23110 = _0x6cf809[_0x4dbff6(0x2e5)]['highlights'][_0x27fb6c]['data'][_0x4dbff6(0x364)][0x0][_0x4dbff6(0x3a9)][_0x4dbff6(0x206)], _0x3fd679 = _0x6cf809[_0x4dbff6(0x2e5)]['highlights'][_0x27fb6c]['data'][_0x4dbff6(0x364)][0x0][_0x4dbff6(0x1ff)][_0x30a52c - _0xfb7d25];
                } else {
                    let _0xcf9b7a = await _0x4a746e(_0x27fb6c), _0x3115b9 = _0xcf9b7a[_0x4dbff6(0x1d8)][_0x4dbff6(0x364)][0x0][_0x4dbff6(0x1ff)][_0x4dbff6(0x2b2)];
                    _0xe23110 = _0xcf9b7a['data']['reels_media'][0x0][_0x4dbff6(0x3a9)]['username'], _0x3fd679 = _0xcf9b7a[_0x4dbff6(0x1d8)][_0x4dbff6(0x364)][0x0][_0x4dbff6(0x1ff)][_0x3115b9 - _0xfb7d25], _0x6cf809[_0x4dbff6(0x2e5)][_0x4dbff6(0x31a)][_0x27fb6c] = _0xcf9b7a;
                }
                _0x42d816(_0x4dbff6(0x222), _0x27fb6c, _0x6cf809[_0x4dbff6(0x2e5)][_0x4dbff6(0x31a)][_0x27fb6c]);
                _0x1aee20['RENAME_PUBLISH_DATE'] && (_0x2bbc47 = _0x3fd679[_0x4dbff6(0x3b2)]);
                if (_0x1aee20[_0x4dbff6(0x171)] && !_0x6cf809[_0x4dbff6(0x2d5)]) {
                    let _0x147658 = await _0x3d7dcf(_0x3fd679['id']);
                    _0x147658[_0x4dbff6(0x2d6)] === 'ok' ? _0x147658[_0x4dbff6(0x1ff)][0x0][_0x4dbff6(0x21a)] ? _0x427593 ? _0xb6f68e(_0x147658[_0x4dbff6(0x1ff)][0x0][_0x4dbff6(0x21a)][0x0]['url']) : _0x496556(_0x147658[_0x4dbff6(0x1ff)][0x0]['video_versions'][0x0]['url'], _0xe23110, 'highlights', _0x2bbc47, 'mp4', _0x147658['items'][0x0]['id']) : _0x427593 ? _0xb6f68e(_0x147658[_0x4dbff6(0x1ff)][0x0][_0x4dbff6(0x3c8)][_0x4dbff6(0x318)][0x0][_0x4dbff6(0x1f0)]) : _0x496556(_0x147658[_0x4dbff6(0x1ff)][0x0][_0x4dbff6(0x3c8)][_0x4dbff6(0x318)][0x0][_0x4dbff6(0x1f0)], _0xe23110, 'highlights', _0x2bbc47, _0x4dbff6(0x1b0), _0x147658['items'][0x0]['id']) : (_0x1aee20['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (delete _0x6cf809[_0x4dbff6(0x2e5)][_0x4dbff6(0x31a)][_0x27fb6c], _0x6cf809['tempFetchRateLimit'] = !![], _0x1eccd9(!![], _0x427593)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x147658[_0x4dbff6(0x2c2)]), _0x42d816(_0x147658));
                } else
                    _0x3fd679[_0x4dbff6(0x3aa)] ? _0x427593 ? _0xb6f68e(_0x3fd679[_0x4dbff6(0x2be)]['at'](-0x1)[_0x4dbff6(0x21f)], _0xe23110) : _0x496556(_0x3fd679[_0x4dbff6(0x2be)]['at'](-0x1)[_0x4dbff6(0x21f)], _0xe23110, _0x4dbff6(0x31a), _0x2bbc47, _0x4dbff6(0x217), _0x3fd679['id']) : _0x427593 ? _0xb6f68e(_0x3fd679['display_resources']['at'](-0x1)[_0x4dbff6(0x21f)], _0xe23110) : _0x496556(_0x3fd679[_0x4dbff6(0x220)]['at'](-0x1)['src'], _0xe23110, 'highlights', _0x2bbc47, _0x4dbff6(0x1b0), _0x3fd679['id']), _0x6cf809[_0x4dbff6(0x2d5)] = ![];
                _0x3547f7(![]);
            } else {
                if (!_0x374b21(_0x4dbff6(0x309))['length']) {
                    let _0x46258a = null;
                    _0x374b21('body\x20>\x20div\x20section._ac0a')['length'] > 0x0 ? _0x46258a = _0x374b21('body\x20>\x20div\x20section:visible._ac0a') : (_0x46258a = _0x374b21(_0x4dbff6(0x21c)), _0x46258a[_0x4dbff6(0x18f)](_0x4dbff6(0x354), _0x4dbff6(0x173)));
                    if (_0x46258a[_0x4dbff6(0x2b2)] === 0x0) {
                        let _0x2ac5d8 = _0x374b21('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x16ed5e = 0x0;
                        _0x2ac5d8[_0x4dbff6(0x395)](function () {
                            const _0x3c3109 = _0x4dbff6;
                            _0x374b21(this)[_0x3c3109(0x1ee)]() > _0x16ed5e && (_0x16ed5e = _0x374b21(this)[_0x3c3109(0x1ee)](), _0x46258a = _0x374b21(this)['children'](_0x3c3109(0x2f4))[_0x3c3109(0x2fb)]());
                        });
                    }
                    if (_0x46258a != null) {
                        _0x46258a[_0x4dbff6(0x3b7)](_0x4dbff6(0x35f) + _0x1e858f('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x5a160e['DOWNLOAD'] + _0x4dbff6(0x402)), _0x46258a[_0x4dbff6(0x3b7)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x1e858f(_0x4dbff6(0x28a)) + _0x4dbff6(0x390) + _0x5a160e[_0x4dbff6(0x28a)] + _0x4dbff6(0x402));
                        let _0x506611 = _0x11fca4(_0xe23110);
                        _0x506611[_0x4dbff6(0x2b2)] > 0x1 && _0x46258a[_0x4dbff6(0x3b7)](_0x4dbff6(0x22d) + _0x1e858f('DW_ALL') + _0x4dbff6(0x26c) + _0x5a160e[_0x4dbff6(0x261)] + _0x4dbff6(0x402));
                        let _0x1ddfc6 = _0x506611['parents']('div[class]')[_0x4dbff6(0x2fe)](_0x4dbff6(0x22e))?.['attr'](_0x4dbff6(0x37b));
                        _0x1ddfc6 != null && _0x506611[_0x4dbff6(0x174)]('div[class]')[_0x4dbff6(0x2fe)](_0x4dbff6(0x22e))[_0x4dbff6(0x32a)](_0x1ddfc6), _0x46258a[_0x4dbff6(0x2fe)](_0x4dbff6(0x164))['each'](function () {
                            const _0x3ddd90 = _0x4dbff6;
                            _0x374b21(this)['on'](_0x3ddd90(0x278), function () {
                                const _0x498a46 = _0x3ddd90;
                                !_0x374b21(this)[_0x498a46(0x1d8)](_0x498a46(0x343)) && (_0x46258a[_0x498a46(0x2fe)](_0x498a46(0x2c4))[_0x498a46(0x2b2)] === 0x0 ? (_0x374b21(this)[_0x498a46(0x24d)]('data-remove-thumbnail', !![]), _0x374b21(_0x498a46(0x2c4))[_0x498a46(0x255)](), _0x42d816(_0x498a46(0x324))) : (_0x374b21(this)[_0x498a46(0x24d)]('data-remove-thumbnail', !![]), _0x42d816(_0x498a46(0x31c))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x1da392(_0x680cfb) {
            const _0x3e96b4 = _0x38a4e7;
            if (_0x680cfb) {
                let _0x33a05 = new Date()['getTime'](), _0x15100b = Math[_0x3e96b4(0x235)](_0x33a05 / 0x3e8), _0x3f79d0 = location[_0x3e96b4(0x408)][_0x3e96b4(0x385)](/\/$/ig, '')[_0x3e96b4(0x30d)]('/')['at'](-0x1), _0x5cf93f = '', _0xffbafd = _0x374b21(_0x3e96b4(0x1ea))[_0x3e96b4(0x2b2)] || _0x374b21(_0x3e96b4(0x21d))[_0x3e96b4(0x2b2)] || _0x374b21('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')['find'](_0x3e96b4(0x26d))[_0x3e96b4(0x2b2)], _0x1c362e = '';
                _0x3547f7(!![]);
                if (_0x6cf809[_0x3e96b4(0x2e5)]['highlights'][_0x3f79d0]) {
                    _0x42d816(_0x3e96b4(0x2ef), _0x3f79d0);
                    let _0x44bdc9 = _0x6cf809[_0x3e96b4(0x2e5)][_0x3e96b4(0x31a)][_0x3f79d0][_0x3e96b4(0x1d8)][_0x3e96b4(0x364)][0x0]['items']['length'];
                    _0x5cf93f = _0x6cf809[_0x3e96b4(0x2e5)][_0x3e96b4(0x31a)][_0x3f79d0][_0x3e96b4(0x1d8)][_0x3e96b4(0x364)][0x0][_0x3e96b4(0x3a9)]['username'], _0x1c362e = _0x6cf809['GL_dataCache'][_0x3e96b4(0x31a)][_0x3f79d0][_0x3e96b4(0x1d8)][_0x3e96b4(0x364)][0x0][_0x3e96b4(0x1ff)][_0x44bdc9 - _0xffbafd];
                } else {
                    let _0x18a370 = await _0x4a746e(_0x3f79d0), _0x2fd50d = _0x18a370[_0x3e96b4(0x1d8)][_0x3e96b4(0x364)][0x0][_0x3e96b4(0x1ff)][_0x3e96b4(0x2b2)];
                    _0x5cf93f = _0x18a370['data'][_0x3e96b4(0x364)][0x0]['owner']['username'], _0x1c362e = _0x18a370[_0x3e96b4(0x1d8)][_0x3e96b4(0x364)][0x0][_0x3e96b4(0x1ff)][_0x2fd50d - _0xffbafd], _0x6cf809[_0x3e96b4(0x2e5)]['highlights'][_0x3f79d0] = _0x18a370;
                }
                _0x1aee20[_0x3e96b4(0x1fe)] && (_0x15100b = _0x1c362e[_0x3e96b4(0x3b2)]);
                if (_0x1aee20['FORCE_RESOURCE_VIA_MEDIA'] && !_0x6cf809[_0x3e96b4(0x2d5)]) {
                    let _0x546731 = await _0x3d7dcf(_0x1c362e['id']);
                    _0x546731['status'] === 'ok' ? _0x496556(_0x546731[_0x3e96b4(0x1ff)][0x0][_0x3e96b4(0x3c8)][_0x3e96b4(0x318)][0x0]['url'], _0x5cf93f, _0x3e96b4(0x31a), _0x15100b, _0x3e96b4(0x1b0), _0x3f79d0) : (_0x1aee20[_0x3e96b4(0x19f)] ? (delete _0x6cf809['GL_dataCache'][_0x3e96b4(0x31a)][_0x3f79d0], _0x6cf809[_0x3e96b4(0x2d5)] = !![], _0x1da392(!![])) : alert(_0x3e96b4(0x1fd) + _0x546731[_0x3e96b4(0x2c2)]), _0x42d816(_0x546731));
                } else
                    _0x496556(_0x1c362e['display_resources']['at'](-0x1)[_0x3e96b4(0x21f)], _0x5cf93f, 'highlights', _0x15100b, _0x3e96b4(0x1b0), _0x3f79d0), _0x6cf809['tempFetchRateLimit'] = ![];
                _0x3547f7(![]);
            } else {
                if (_0x374b21(_0x3e96b4(0x237))['length']) {
                    if (!_0x374b21('.IG_DWHISTORY_THUMBNAIL')[_0x3e96b4(0x2b2)]) {
                        let _0x1afb22 = null;
                        _0x374b21('body\x20>\x20div\x20section._ac0a')[_0x3e96b4(0x2b2)] > 0x0 ? _0x1afb22 = _0x374b21(_0x3e96b4(0x1c3)) : (_0x1afb22 = _0x374b21(_0x3e96b4(0x21c)), _0x1afb22[_0x3e96b4(0x18f)](_0x3e96b4(0x354), _0x3e96b4(0x173)));
                        if (_0x1afb22['length'] === 0x0) {
                            let _0x4a4044 = _0x374b21('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x11b09a = 0x0;
                            _0x4a4044[_0x3e96b4(0x395)](function () {
                                const _0x43573e = _0x3e96b4;
                                _0x374b21(this)[_0x43573e(0x1ee)]() > _0x11b09a && (_0x11b09a = _0x374b21(this)['width'](), _0x1afb22 = _0x374b21(this)[_0x43573e(0x240)](_0x43573e(0x2f4))['first']());
                            });
                        }
                        _0x1afb22 != null && _0x1afb22['append'](_0x3e96b4(0x17b) + _0x1e858f(_0x3e96b4(0x1d0)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x5a160e['THUMBNAIL'] + _0x3e96b4(0x402));
                    }
                } else
                    _0x374b21(_0x3e96b4(0x2c4))['remove']();
            }
        }
        function _0x5a911c(_0x1e3121, _0x18035f) {
            const _0x4f098d = _0x38a4e7;
            _0x18035f === !![] && (_0x42d816(_0x4f098d(0x169), 'regenerated'), _0x374b21('article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]')['filter'](function () {
                const _0x46ee87 = _0x4f098d;
                return _0x374b21(this)[_0x46ee87(0x2fe)](_0x46ee87(0x1a2))['length'] === 0x0;
            })[_0x4f098d(0x3d3)](_0x4f098d(0x3e0)));
            if (_0x1e3121 == ![]) {
                const _0x4d1cf5 = 0x64;
                let _0x79227c = 0x0;
                var _0x3f4cfa = setInterval(() => {
                    const _0x4b0d92 = _0x4f098d;
                    (_0x79227c > _0x4d1cf5 || _0x374b21(_0x4b0d92(0x3e8))[_0x4b0d92(0x2b2)] > 0x0) && (clearInterval(_0x3f4cfa), _0x79227c > _0x4d1cf5 && console[_0x4b0d92(0x362)](_0x4b0d92(0x296), _0x4b0d92(0x2de))), _0x42d816(_0x4b0d92(0x296), _0x4b0d92(0x38e)), _0x19fca5(), _0x79227c++;
                }, 0x32);
            } else
                _0x19fca5();
        }
        function _0x300200(_0x5c0d65) {
            const _0x45a854 = _0x38a4e7;
            _0x1aee20[_0x45a854(0x1eb)] && _0x5c0d65[_0x45a854(0x2fe)](_0x45a854(0x223))[_0x45a854(0x395)](function () {
                _0x374b21(this)['on']('ended', function () {
                    const _0x1536a5 = a0_0x2eb7;
                    !_0x374b21(this)[_0x1536a5(0x1d8)](_0x1536a5(0x20b)) && (_0x374b21(this)[_0x1536a5(0x24d)](_0x1536a5(0x23a), !![]), this[_0x1536a5(0x2f0)](), _0x42d816(_0x1536a5(0x35b)));
                });
            });
            _0x1aee20[_0x45a854(0x2bd)] && _0x5c0d65['find']('video')[_0x45a854(0x395)](function () {
                const _0x2f2876 = _0x45a854;
                _0x374b21(this)['on'](_0x2f2876(0x36f), function () {
                    const _0x536e01 = _0x2f2876;
                    !_0x374b21(this)[_0x536e01(0x1d8)]('modify') && (_0x374b21(this)[_0x536e01(0x24d)](_0x536e01(0x382), !![]), this[_0x536e01(0x352)] = _0x6cf809[_0x536e01(0x3a4)], _0x42d816(_0x536e01(0x3e4)));
                });
            });
            _0x1aee20[_0x45a854(0x25e)] && _0x5c0d65[_0x45a854(0x2fe)](_0x45a854(0x223))[_0x45a854(0x395)](function () {
                const _0x1f8c64 = _0x45a854;
                if (!_0x374b21(this)['data'](_0x1f8c64(0x3d8))) {
                    let _0x2f8ace = _0x374b21(this);
                    _0x42d816(_0x1f8c64(0x1cf)), _0x1aee20['MODIFY_VIDEO_VOLUME'] && (this[_0x1f8c64(0x352)] = _0x6cf809['videoVolume'], _0x374b21(this)['on'](_0x1f8c64(0x27c), function () {
                        const _0x72d555 = _0x1f8c64;
                        this[_0x72d555(0x352)] = _0x6cf809['videoVolume'];
                    })), _0x374b21(this)['on']('contextmenu', function (_0xfdb6be) {
                        const _0x23cedf = _0x1f8c64;
                        _0xfdb6be[_0x23cedf(0x36e)](), _0x2f8ace[_0x23cedf(0x18f)](_0x23cedf(0x3df), '-1'), _0x2f8ace[_0x23cedf(0x3d3)](_0x23cedf(0x3d8));
                    }), _0x374b21(this)[_0x1f8c64(0x266)]()['find'](_0x1f8c64(0x3cf))[_0x1f8c64(0x2fb)]()['on'](_0x1f8c64(0x1d3), function (_0x1c83a0) {
                        const _0x12667b = _0x1f8c64;
                        _0x1c83a0[_0x12667b(0x36e)](), _0x2f8ace[_0x12667b(0x18f)](_0x12667b(0x3df), '2'), _0x2f8ace[_0x12667b(0x24d)](_0x12667b(0x3d8), !![]);
                    }), _0x374b21(this)['on'](_0x1f8c64(0x2b0), function () {
                        const _0x187bc4 = _0x1f8c64;
                        let _0x1e4fed = _0x374b21(this)[_0x187bc4(0x266)]()[_0x187bc4(0x2fe)]('video\x20+\x20div\x20>\x20div')[_0x187bc4(0x2fe)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')['filter'](function (_0x18f682) {
                            const _0x154ccd = _0x187bc4;
                            return _0x374b21(this)[_0x154ccd(0x1ee)]() <= 0x40 && _0x374b21(this)[_0x154ccd(0x398)]() <= 0x40 && _0x374b21(this)[_0x154ccd(0x2fe)](_0x154ccd(0x292))[_0x154ccd(0x2b2)] > 0x0;
                        });
                        var _0x3aad00 = _0x1e4fed[_0x187bc4(0x2fe)](_0x187bc4(0x213))['length'] === 0x0;
                        this[_0x187bc4(0x293)] != _0x3aad00 && (this[_0x187bc4(0x352)] = _0x6cf809[_0x187bc4(0x3a4)], _0x1e4fed?.[_0x187bc4(0x404)](_0x187bc4(0x3b5))), _0x374b21(this)['attr'](_0x187bc4(0x337)) && (_0x6cf809[_0x187bc4(0x3a4)] = this[_0x187bc4(0x352)], GM_setValue(_0x187bc4(0x27e), this[_0x187bc4(0x352)])), this[_0x187bc4(0x352)] == _0x6cf809[_0x187bc4(0x3a4)] && _0x374b21(this)[_0x187bc4(0x24d)](_0x187bc4(0x337), !![]);
                    }), _0x374b21(this)['css'](_0x1f8c64(0x354), _0x1f8c64(0x37e)), _0x374b21(this)[_0x1f8c64(0x18f)](_0x1f8c64(0x3df), '2'), _0x374b21(this)[_0x1f8c64(0x24d)](_0x1f8c64(0x176), !![]), _0x374b21(this)[_0x1f8c64(0x24d)](_0x1f8c64(0x3d8), !![]);
                }
            });
            var _0x28e6f8 = _0x5c0d65[_0x45a854(0x2fe)](_0x45a854(0x223)), _0x592ba6 = _0x5c0d65['find'](_0x45a854(0x3cf))[_0x45a854(0x2fb)]();
            _0x3a5d0c(_0x28e6f8, _0x592ba6, _0x45a854(0x1de), _0x45a854(0x16a));
        }
        ;
        function _0x19fca5() {
            const _0x55a1e9 = _0x38a4e7;
            _0x374b21(_0x55a1e9(0x1c6))['map'](function (_0x20954b) {
                const _0x419cd5 = _0x55a1e9;
                return _0x374b21(this)['is'](_0x419cd5(0x3e5)) ? _0x374b21(this)[_0x419cd5(0x266)]()[_0x419cd5(0x266)]()['parent']()[_0x419cd5(0x266)]()[0x0] : this;
            })[_0x55a1e9(0x2ff)](function () {
                const _0x28df46 = _0x55a1e9;
                return _0x374b21(this)[_0x28df46(0x398)]() > 0x0 && _0x374b21(this)[_0x28df46(0x1ee)]() > 0x0;
            })[_0x55a1e9(0x395)](function (_0x122a8c) {
                const _0x57ad10 = _0x55a1e9;
                if (!_0x374b21(this)[_0x57ad10(0x24d)]('data-snig') && !_0x374b21(this)['hasClass']('x1iyjqo2') && !_0x374b21(this)['children'](_0x57ad10(0x1bc))?.['hasClass'](_0x57ad10(0x1b3)) && _0x374b21(this)[_0x57ad10(0x174)](_0x57ad10(0x40f))[_0x57ad10(0x2b2)] === 0x0) {
                    _0x42d816(_0x57ad10(0x365), _0x374b21(this));
                    const _0x49e89a = _0x374b21(this), _0x174ad1 = this[_0x57ad10(0x3f9)], _0x5c0323 = _0x57ad10(0x37d);
                    var _0x5ad164;
                    if (_0x174ad1 === 'DIV' && _0x122a8c != 0x0)
                        return;
                    const _0x436f48 = _0x49e89a['children'](_0x57ad10(0x2f4))[_0x57ad10(0x240)](_0x57ad10(0x2f4));
                    if (_0x436f48[_0x57ad10(0x2b2)] === 0x0)
                        return;
                    _0x42d816(_0x57ad10(0x358), _0x436f48);
                    if (_0x49e89a[_0x57ad10(0x2fe)](_0x57ad10(0x34e))[_0x57ad10(0x2b2)] > 0x0) {
                        _0x49e89a[_0x57ad10(0x2fe)](_0x57ad10(0x3e7))[_0x57ad10(0x2b2)] > 0x0 && _0x49e89a['find']('._acay\x20+\x20.x24i39r')[_0x57ad10(0x18f)](_0x57ad10(0x2b3), _0x57ad10(0x411));
                        const _0x57c399 = _0x49e89a['find'](_0x57ad10(0x34e))['first']()[_0x57ad10(0x266)]()[0x0];
                        var _0x4e87f4 = new MutationObserver(function () {
                            const _0x1116e6 = _0x57ad10;
                            _0x49e89a[_0x1116e6(0x2fe)](_0x1116e6(0x3e7))[_0x1116e6(0x18f)](_0x1116e6(0x2b3), _0x1116e6(0x411));
                        });
                        _0x4e87f4[_0x57ad10(0x399)](_0x57c399, { 'childList': !![] });
                    }
                    _0x436f48['eq'](_0x174ad1 === _0x57ad10(0x185) ? 0x0 : _0x436f48[_0x57ad10(0x2b2)] - 0x2)['append']('<div\x20class=\x22button_wrapper\x22>');
                    const _0x493eb0 = _0x57ad10(0x35f) + _0x1e858f('DW') + '\x22\x20class=\x22IG_DW_MAIN\x22>' + _0x5a160e[_0x57ad10(0x187)] + '</div>', _0x4caf27 = _0x57ad10(0x3a3) + _0x1e858f(_0x57ad10(0x28a)) + '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>' + _0x5a160e[_0x57ad10(0x28a)] + _0x57ad10(0x402), _0xd73ea9 = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1e858f(_0x57ad10(0x1d0)) + _0x57ad10(0x2fa) + _0x5a160e['THUMBNAIL'] + '</div>', _0x1509c8 = _0x57ad10(0x3f3) + _0x1e858f(_0x57ad10(0x1b6)) + _0x57ad10(0x3c9) + _0x5a160e[_0x57ad10(0x2f9)] + _0x57ad10(0x402);
                    _0x436f48[_0x57ad10(0x2fe)](_0x57ad10(0x1e1))[_0x57ad10(0x3b7)](_0x493eb0);
                    const _0x26117f = _0x49e89a['find'](_0x5c0323)['length'];
                    if (_0x26117f > 0x1 && _0x1aee20[_0x57ad10(0x1e7)] && !_0x1aee20[_0x57ad10(0x1ab)]) {
                        const _0x5253ea = _0x57ad10(0x22d) + _0x1e858f('DW_ALL') + _0x57ad10(0x3ad) + _0x5a160e[_0x57ad10(0x261)] + _0x57ad10(0x402);
                        _0x436f48[_0x57ad10(0x2fe)](_0x57ad10(0x1e1))[_0x57ad10(0x3b7)](_0x5253ea);
                    }
                    _0x436f48[_0x57ad10(0x2fe)](_0x57ad10(0x1e1))[_0x57ad10(0x3b7)](_0x4caf27), setTimeout(() => {
                        const _0x23699d = _0x57ad10;
                        if (_0x436f48['eq'](_0x174ad1 === 'DIV' ? 0x0 : _0x436f48['length'] - 0x2)['find']('div\x20>\x20ul\x20li._acaz')[_0x23699d(0x2b2)] === 0x0)
                            _0x436f48['find'](_0x23699d(0x223))[_0x23699d(0x2b2)] > 0x0 ? _0x436f48[_0x23699d(0x2fe)]('.button_wrapper')[_0x23699d(0x3b7)](_0xd73ea9) : (_0x5ad164 = _0x49e89a[_0x23699d(0x2fe)](_0x23699d(0x2b9))[_0x23699d(0x2ff)](function () {
                                const _0x4f540c = _0x23699d;
                                return _0x374b21(this)[_0x4f540c(0x1ee)]() > 0xc8 && _0x374b21(this)[_0x4f540c(0x398)]() > 0xc8;
                            })[_0x23699d(0x24d)](_0x23699d(0x21f)), _0x436f48['find'](_0x23699d(0x1e1))[_0x23699d(0x3b7)](_0x1509c8));
                        else {
                            const _0xc88d5b = (_0x596e78, _0x4f475a) => {
                                    const _0xf90a3c = _0x23699d;
                                    _0x596e78[_0xf90a3c(0x25d)](_0x303bae => {
                                        const _0x54998 = _0xf90a3c;
                                        if (_0x303bae['isIntersecting']) {
                                            var _0x4a5080 = _0x374b21(_0x303bae[_0x54998(0x239)]);
                                            _0x436f48[_0x54998(0x2fe)](_0x54998(0x2ab))?.[_0x54998(0x255)](), _0x436f48[_0x54998(0x2fe)]('.IG_IMAGE_VIEWER')?.[_0x54998(0x255)](), _0x4a5080[_0x54998(0x2fe)]('video')[_0x54998(0x2b2)] > 0x0 ? (_0x436f48['find'](_0x54998(0x2ab))[_0x54998(0x2b2)] === 0x0 && _0x436f48[_0x54998(0x2fe)](_0x54998(0x1e1))[_0x54998(0x3b7)](_0xd73ea9), _0x300200(_0x49e89a)) : (_0x5ad164 = _0x4a5080[_0x54998(0x2fe)](_0x54998(0x2b9))['attr'](_0x54998(0x21f)), _0x436f48[_0x54998(0x2fe)]('.button_wrapper')['append'](_0x1509c8));
                                        }
                                    });
                                }, _0x7b96dc = new IntersectionObserver(_0xc88d5b, {
                                    'root': _0x49e89a['find'](_0x23699d(0x1a1))[_0x23699d(0x2fb)]()[_0x23699d(0x266)]()['parent']()['parent']()[0x0],
                                    'rootMargin': '0px',
                                    'threshold': 0.1
                                }), _0x54e546 = new MutationObserver(function (_0x4c8b45, _0x29c0fd) {
                                    const _0x22a9f6 = _0x23699d;
                                    var _0x2a5424 = _0x4c8b45['at'](0x0)?.[_0x22a9f6(0x239)];
                                    _0x374b21(_0x2a5424)[_0x22a9f6(0x2fe)]('li._acaz')[_0x22a9f6(0x395)](function () {
                                        const _0x3c0297 = _0x22a9f6;
                                        _0x7b96dc[_0x3c0297(0x399)](this);
                                    });
                                });
                            _0x49e89a[_0x23699d(0x2fe)](_0x23699d(0x3c4))[_0x23699d(0x395)](function () {
                                const _0x5460cd = _0x23699d;
                                _0x7b96dc[_0x5460cd(0x399)](this);
                            });
                            const _0xf81b5a = _0x436f48['eq'](_0x174ad1 === 'DIV' ? 0x0 : _0x436f48[_0x23699d(0x2b2)] - 0x2)[_0x23699d(0x2fe)]('div\x20>\x20ul\x20li._acaz')?.[_0x23699d(0x266)]()[0x0], _0x1b0f89 = _0x436f48['eq'](_0x174ad1 === _0x23699d(0x185) ? 0x0 : _0x436f48[_0x23699d(0x2b2)] - 0x2)[_0x23699d(0x2fe)](_0x23699d(0x3c4))?.[_0x23699d(0x266)]()['parent']()[0x0];
                            _0xf81b5a && _0x54e546[_0x23699d(0x399)](_0xf81b5a, { 'childList': !![] }), _0x1b0f89 && _0x54e546[_0x23699d(0x399)](_0x1b0f89, { 'attributes': !![] });
                        }
                    }, 0x32), _0x436f48[_0x57ad10(0x18f)]('position', _0x57ad10(0x173)), _0x300200(_0x49e89a), _0x6cf809[_0x57ad10(0x1f3)]['push']({
                        'element': this,
                        'trigger': [
                            '.IG_THUMBNAIL_MAIN',
                            _0x57ad10(0x3c1),
                            _0x57ad10(0x34d),
                            _0x57ad10(0x1a2),
                            '.IG_IMAGE_VIEWER'
                        ]
                    }), _0x374b21(this)['on'](_0x57ad10(0x3b5), _0x57ad10(0x2dc), function () {
                        const _0x253cdc = _0x57ad10;
                        _0x5ad164 != null ? _0x2836da(_0x5ad164) : alert(_0x253cdc(0x302));
                    }), _0x374b21(this)['on'](_0x57ad10(0x3b5), '.IG_THUMBNAIL_MAIN', function () {
                        const _0x2a6db6 = _0x57ad10;
                        _0x3547f7(!![]), _0x6cf809['GL_username'] = _0x49e89a[_0x2a6db6(0x24d)]('data-username'), _0x6cf809[_0x2a6db6(0x1c1)] = location['pathname'][_0x2a6db6(0x385)](/\/$/, '')[_0x2a6db6(0x30d)]('/')['at'](-0x1) || _0x49e89a[_0x2a6db6(0x2fe)]('a[href^=\x22/p/\x22]')['first']()['attr']('href')[_0x2a6db6(0x30d)]('/')['at'](0x2) || _0x374b21(this)['parent']()[_0x2a6db6(0x266)]()[_0x2a6db6(0x266)]()[_0x2a6db6(0x240)](_0x2a6db6(0x2c7))[_0x2a6db6(0x240)]('div')[_0x2a6db6(0x240)](_0x2a6db6(0x2c7))[_0x2a6db6(0x2fe)]('a[href^=\x22/p/\x22]')[_0x2a6db6(0x193)]()[_0x2a6db6(0x24d)](_0x2a6db6(0x408))[_0x2a6db6(0x30d)]('/')['at'](0x2);
                        var _0x41b0db = _0xccd241(_0x49e89a);
                        _0x1e990c(!![], ![]), _0x180c25(_0x6cf809[_0x2a6db6(0x1c1)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x2a6db6(0x3d6)](() => {
                            let _0x46dbd7 = setInterval(() => {
                                const _0x192abf = a0_0x2eb7;
                                if (_0x374b21(_0x192abf(0x180))[_0x192abf(0x2b2)] > 0x0) {
                                    clearInterval(_0x46dbd7);
                                    var _0xe08849 = _0x374b21(_0x192abf(0x346) + (_0x41b0db + 0x1) + '\x22]')?.[_0x192abf(0x266)]()[_0x192abf(0x2fe)](_0x192abf(0x1ec))?.[_0x192abf(0x2fb)]();
                                    _0xe08849 != null && _0xe08849[_0x192abf(0x2b2)] > 0x0 ? _0xe08849[_0x192abf(0x404)](_0x192abf(0x3b5)) : alert(_0x192abf(0x27f)), _0x3547f7(![]), _0x374b21(_0x192abf(0x3c6))[_0x192abf(0x255)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x374b21(this)['on'](_0x57ad10(0x3b5), _0x57ad10(0x3c1), function () {
                        const _0x488ad6 = _0x57ad10;
                        _0x3547f7(!![]), _0x6cf809[_0x488ad6(0x186)] = _0x49e89a['attr']('data-username'), _0x6cf809[_0x488ad6(0x1c1)] = location['pathname'][_0x488ad6(0x385)](/\/$/, '')[_0x488ad6(0x30d)]('/')['at'](-0x1) || _0x49e89a[_0x488ad6(0x2fe)](_0x488ad6(0x3f2))[_0x488ad6(0x2fb)]()[_0x488ad6(0x24d)](_0x488ad6(0x408))[_0x488ad6(0x30d)]('/')['at'](0x2) || _0x374b21(this)['parent']()[_0x488ad6(0x266)]()[_0x488ad6(0x266)]()[_0x488ad6(0x240)](_0x488ad6(0x2c7))[_0x488ad6(0x240)](_0x488ad6(0x2f4))['children'](_0x488ad6(0x2c7))[_0x488ad6(0x2fe)](_0x488ad6(0x3f2))[_0x488ad6(0x193)]()['attr'](_0x488ad6(0x408))[_0x488ad6(0x30d)]('/')['at'](0x2);
                        var _0xee69b = _0xccd241(_0x49e89a);
                        _0x1e990c(!![], ![]), _0x180c25(_0x6cf809[_0x488ad6(0x1c1)], _0x488ad6(0x397), '')[_0x488ad6(0x3d6)](() => {
                            let _0x1a2070 = setInterval(() => {
                                const _0x29f911 = a0_0x2eb7;
                                if (_0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x29f911(0x2b2)] > 0x0) {
                                    clearInterval(_0x1a2070);
                                    var _0x19eaea = _0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0xee69b + 0x1) + '\x22]');
                                    if (_0x1aee20[_0x29f911(0x171)] && _0x1aee20[_0x29f911(0x34f)])
                                        _0x1b29c0(_0x19eaea[_0x29f911(0x2fb)]()[0x0], !![]);
                                    else {
                                        let _0x25daff = _0x19eaea?.[_0x29f911(0x24d)](_0x29f911(0x2d2));
                                        if (_0x25daff) {
                                            var _0x4cb1b8 = new URL(_0x25daff);
                                            _0x4cb1b8['host'] = _0x29f911(0x2bb), _0xb6f68e(_0x4cb1b8[_0x29f911(0x408)]);
                                        } else
                                            alert('Can\x20not\x20find\x20open\x20tab\x20url.');
                                    }
                                    _0x3547f7(![]), _0x374b21(_0x29f911(0x3c6))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x374b21(this)['on'](_0x57ad10(0x3b5), _0x57ad10(0x34d), async function () {
                        const _0x30e6f9 = _0x57ad10;
                        _0x6cf809[_0x30e6f9(0x186)] = _0x49e89a[_0x30e6f9(0x24d)](_0x30e6f9(0x253)), _0x6cf809[_0x30e6f9(0x1c1)] = location[_0x30e6f9(0x40c)][_0x30e6f9(0x385)](/\/$/, '')[_0x30e6f9(0x30d)]('/')['at'](-0x1) || _0x49e89a[_0x30e6f9(0x2fe)]('a[href^=\x22/p/\x22]')[_0x30e6f9(0x2fb)]()[_0x30e6f9(0x24d)]('href')[_0x30e6f9(0x30d)]('/')['at'](0x2) || _0x374b21(this)[_0x30e6f9(0x266)]()[_0x30e6f9(0x266)]()[_0x30e6f9(0x266)]()[_0x30e6f9(0x240)](_0x30e6f9(0x2c7))[_0x30e6f9(0x240)](_0x30e6f9(0x2f4))['children']('div:last-child')['find'](_0x30e6f9(0x3f2))[_0x30e6f9(0x193)]()[_0x30e6f9(0x24d)](_0x30e6f9(0x408))[_0x30e6f9(0x30d)]('/')['at'](0x2), _0x1e990c(_0x1aee20[_0x30e6f9(0x1ab)], !![]), _0x374b21(_0x30e6f9(0x16b))[_0x30e6f9(0x1d7)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x6cf809[_0x30e6f9(0x1c1)] + '\x22>' + _0x6cf809['GL_postPath'] + _0x30e6f9(0x172)), _0x374b21(_0x30e6f9(0x180))[_0x30e6f9(0x395)](function () {
                            const _0xd79c4a = _0x30e6f9;
                            _0x374b21(this)[_0xd79c4a(0x410)](_0xd79c4a(0x1f1)), _0x374b21(this)[_0xd79c4a(0x234)](_0xd79c4a(0x3dd)), _0x374b21(this)['after'](_0xd79c4a(0x3a3) + _0x1e858f(_0xd79c4a(0x28a)) + _0xd79c4a(0x23e) + _0x5a160e['NEW_TAB'] + '</div>'), _0x374b21(this)['attr'](_0xd79c4a(0x165)) == _0xd79c4a(0x223) && _0x374b21(this)[_0xd79c4a(0x228)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1e858f(_0xd79c4a(0x1d0)) + _0xd79c4a(0x33e) + _0x5a160e[_0xd79c4a(0x331)] + _0xd79c4a(0x402));
                        }), _0x180c25(_0x6cf809[_0x30e6f9(0x1c1)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1e858f(_0x30e6f9(0x259)))[_0x30e6f9(0x3d6)](() => {
                            let _0x40d600 = setInterval(() => {
                                const _0x28e329 = a0_0x2eb7;
                                _0x374b21(_0x28e329(0x180))[_0x28e329(0x2b2)] > 0x0 && (clearInterval(_0x40d600), _0x374b21(_0x28e329(0x180))[_0x28e329(0x395)](function () {
                                    const _0x4fe160 = _0x28e329;
                                    _0x374b21(this)[_0x4fe160(0x404)]('click');
                                }), _0x374b21(_0x28e329(0x3c6))[_0x28e329(0x255)]());
                            }, 0xfa);
                        });
                    }), _0x374b21(this)['on'](_0x57ad10(0x3b5), '.IG_DW_MAIN', async function () {
                        const _0x1741be = _0x57ad10;
                        _0x6cf809['GL_username'] = _0x49e89a[_0x1741be(0x24d)](_0x1741be(0x253)), _0x6cf809[_0x1741be(0x1c1)] = location[_0x1741be(0x40c)][_0x1741be(0x385)](/\/$/, '')['split']('/')['at'](-0x1) || _0x49e89a[_0x1741be(0x2fe)](_0x1741be(0x3f2))['first']()[_0x1741be(0x24d)](_0x1741be(0x408))['split']('/')['at'](0x2) || _0x374b21(this)[_0x1741be(0x266)]()[_0x1741be(0x266)]()[_0x1741be(0x266)]()['children'](_0x1741be(0x2c7))[_0x1741be(0x240)](_0x1741be(0x2f4))[_0x1741be(0x240)](_0x1741be(0x2c7))[_0x1741be(0x2fe)](_0x1741be(0x3f2))['last']()[_0x1741be(0x24d)](_0x1741be(0x408))[_0x1741be(0x30d)]('/')['at'](0x2), _0x1e990c(_0x1aee20[_0x1741be(0x1ab)], !![]), _0x374b21('#article-id')[_0x1741be(0x1d7)](_0x1741be(0x232) + _0x6cf809['GL_postPath'] + '\x22>' + _0x6cf809['GL_postPath'] + '</a>');
                        if (_0x1aee20[_0x1741be(0x1e7)]) {
                            _0x3547f7(!![]), _0x2a02ce(!![]);
                            var _0x235d1e = _0xccd241(_0x374b21(this)[_0x1741be(0x266)]()[_0x1741be(0x266)]()[_0x1741be(0x266)]());
                            _0x180c25(_0x6cf809[_0x1741be(0x1c1)], _0x1741be(0x397), '')[_0x1741be(0x3d6)](() => {
                                let _0x403f41 = setInterval(() => {
                                    const _0x3a1539 = a0_0x2eb7;
                                    if (_0x374b21(_0x3a1539(0x180))[_0x3a1539(0x2b2)] > 0x0) {
                                        clearInterval(_0x403f41);
                                        var _0x3d1e37 = _0x374b21(_0x3a1539(0x346) + (_0x235d1e + 0x1) + '\x22]')?.[_0x3a1539(0x24d)](_0x3a1539(0x2d2));
                                        _0x3d1e37 ? (_0x3547f7(![]), _0x374b21(_0x3a1539(0x346) + (_0x235d1e + 0x1) + '\x22]')?.[_0x3a1539(0x404)](_0x3a1539(0x3b5))) : alert(_0x3a1539(0x333)), _0x374b21(_0x3a1539(0x3c6))[_0x3a1539(0x255)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x1aee20['DIRECT_DOWNLOAD_ALL']) {
                            var _0x55b498 = 0x0, _0xfc7874 = _0x374b21(this)[_0x1741be(0x266)]()[_0x1741be(0x266)]()[_0x1741be(0x2fe)](_0x5c0323)[_0x1741be(0x2b2)], _0x22ad67 = _0x1aee20['FORCE_FETCH_ALL_RESOURCES'], _0x829299 = new Date(_0x374b21(this)['parent']()[_0x1741be(0x266)]()[_0x1741be(0x266)]()['find'](_0x1741be(0x311))[_0x1741be(0x2ff)](function () {
                                    const _0x55d83e = _0x1741be;
                                    let _0x314ee0 = _0x374b21(this)[_0x55d83e(0x174)](_0x55d83e(0x246))[_0x55d83e(0x24d)](_0x55d83e(0x408));
                                    return _0x314ee0?.[_0x55d83e(0x31f)](_0x55d83e(0x224)) || _0x314ee0?.[_0x55d83e(0x39f)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })['first']()['attr']('datetime'))[_0x1741be(0x249)]();
                            if (_0xfc7874)
                                _0x374b21(this)[_0x1741be(0x266)]()[_0x1741be(0x266)]()[_0x1741be(0x2fe)](_0x5c0323)[_0x1741be(0x395)](function () {
                                    const _0x4d98d9 = _0x1741be;
                                    let _0x5eeeaf = _0x374b21(this)[_0x4d98d9(0x266)]()[_0x4d98d9(0x266)]()[_0x4d98d9(0x266)]()['find']('video');
                                    _0x5eeeaf && _0x5eeeaf[_0x4d98d9(0x24d)]('src') && (_0x22ad67 = !![]);
                                }), _0x22ad67 || _0x1aee20[_0x1741be(0x171)] ? _0x180c25(_0x6cf809[_0x1741be(0x1c1)], _0x1741be(0x397), _0x1e858f('LOAD_BLOB_MULTIPLE')) : (_0x374b21(this)[_0x1741be(0x266)]()[_0x1741be(0x266)]()[_0x1741be(0x2fe)](_0x5c0323)[_0x1741be(0x395)](function () {
                                    const _0x215055 = _0x1741be;
                                    _0x55b498++;
                                    let _0x55fa82 = _0x374b21(this)[_0x215055(0x2fe)](_0x215055(0x223)), _0x2cf3e4 = _0x374b21(this)[_0x215055(0x2fe)]('._aagv\x20img'), _0x4bf103 = _0x2cf3e4[_0x215055(0x24d)]('srcset') ? _0x2cf3e4[_0x215055(0x24d)](_0x215055(0x212))[_0x215055(0x30d)]('\x20')[0x0] : _0x2cf3e4[_0x215055(0x24d)](_0x215055(0x21f));
                                    _0x55fa82 && _0x55fa82[_0x215055(0x24d)]('src') && (_0x22ad67 = !![]), _0x2cf3e4 && _0x4bf103 && _0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY')[_0x215055(0x3b7)](_0x215055(0x39c) + _0x829299 + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x6cf809[_0x215055(0x1c1)] + _0x215055(0x28d) + _0x55b498 + _0x215055(0x233) + _0x4bf103 + _0x215055(0x360) + _0x4bf103 + _0x215055(0x3cb) + _0x1e858f(_0x215055(0x279)) + _0x215055(0x37a) + _0x55b498 + _0x215055(0x229));
                                }), _0x22ad67 && _0x180c25(_0x6cf809['GL_postPath'], _0x1741be(0x397), _0x1e858f('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x1aee20[_0x1741be(0x171)])
                                    _0x180c25(_0x6cf809[_0x1741be(0x1c1)], _0x1741be(0x397), _0x1e858f(_0x1741be(0x259)));
                                else {
                                    _0x55b498++;
                                    let _0x49088f = _0x374b21(this)[_0x1741be(0x266)]()[_0x1741be(0x266)]()['parent']()[_0x1741be(0x2fe)](_0x1741be(0x223)), _0xa4ad25 = _0x374b21(this)[_0x1741be(0x266)]()[_0x1741be(0x266)]()[_0x1741be(0x266)]()[_0x1741be(0x2fe)](_0x1741be(0x3d0)), _0x5e34aa = _0xa4ad25[_0x1741be(0x24d)](_0x1741be(0x212)) ? _0xa4ad25[_0x1741be(0x24d)]('srcset')[_0x1741be(0x30d)]('\x20')[0x0] : _0xa4ad25['attr'](_0x1741be(0x21f));
                                    _0x49088f && _0x49088f[_0x1741be(0x24d)]('src') && _0x180c25(_0x6cf809[_0x1741be(0x1c1)], _0x1741be(0x397), _0x1e858f(_0x1741be(0x3db))), _0xa4ad25 && _0x5e34aa && _0x374b21(_0x1741be(0x397))[_0x1741be(0x3b7)](_0x1741be(0x39c) + _0x829299 + _0x1741be(0x28e) + _0x6cf809['GL_postPath'] + _0x1741be(0x28d) + _0x55b498 + _0x1741be(0x28b) + _0x5e34aa + _0x1741be(0x360) + _0x5e34aa + _0x1741be(0x3cb) + _0x1e858f('IMG') + _0x1741be(0x37a) + _0x55b498 + _0x1741be(0x229));
                                }
                            }
                        }
                        _0x374b21(_0x1741be(0x180))[_0x1741be(0x395)](function () {
                            const _0x1d4039 = _0x1741be;
                            _0x374b21(this)[_0x1d4039(0x410)](_0x1d4039(0x1f1)), _0x374b21(this)[_0x1d4039(0x234)](_0x1d4039(0x3dd)), _0x374b21(this)[_0x1d4039(0x228)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x1e858f(_0x1d4039(0x28a)) + _0x1d4039(0x23e) + _0x5a160e[_0x1d4039(0x28a)] + _0x1d4039(0x402)), _0x374b21(this)[_0x1d4039(0x24d)](_0x1d4039(0x165)) == 'video' && _0x374b21(this)[_0x1d4039(0x228)](_0x1d4039(0x17b) + _0x1e858f('THUMBNAIL_INTRO') + _0x1d4039(0x33e) + _0x5a160e[_0x1d4039(0x331)] + _0x1d4039(0x402));
                        }), _0x1aee20[_0x1741be(0x1ab)] && _0x180c25(_0x6cf809[_0x1741be(0x1c1)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1e858f('LOAD_BLOB_MULTIPLE'))[_0x1741be(0x3d6)](() => {
                            let _0x24f405 = setInterval(() => {
                                const _0x1cc369 = a0_0x2eb7;
                                _0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x1cc369(0x2b2)] > 0x0 && (clearInterval(_0x24f405), _0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x1cc369(0x395)](function () {
                                    const _0x48cd3e = _0x1cc369;
                                    _0x374b21(this)[_0x48cd3e(0x404)](_0x48cd3e(0x3b5));
                                }), _0x374b21(_0x1cc369(0x3c6))[_0x1cc369(0x255)]());
                            }, 0xfa);
                        });
                    });
                    var _0x19ab78 = _0x374b21(this)[_0x57ad10(0x2fe)](_0x57ad10(0x335))[_0x57ad10(0x2fb)]()[_0x57ad10(0x32a)]() || _0x374b21(this)['find'](_0x57ad10(0x316))[_0x57ad10(0x2ff)](function () {
                        const _0x3a6d5b = _0x57ad10;
                        return _0x374b21(this)?.[_0x3a6d5b(0x32a)]()?.['length'] > 0x0;
                    })[_0x57ad10(0x2fb)]()[_0x57ad10(0x32a)]();
                    _0x374b21(this)['attr'](_0x57ad10(0x3e0), _0x57ad10(0x328)), _0x374b21(this)[_0x57ad10(0x24d)]('data-username', _0x19ab78);
                }
            });
        }
        function _0x48d7d2(_0x551f7c) {
            const _0x440e54 = _0x38a4e7;
            var _0x1c7aec = _0x551f7c['shortcode_media'] ?? _0x551f7c;
            return _0x1c7aec['owner'] == null && _0x1c7aec[_0x440e54(0x383)] != null && (_0x1c7aec[_0x440e54(0x3a9)] = _0x1c7aec[_0x440e54(0x383)]), _0x1c7aec[_0x440e54(0x3a9)] == null && (_0x42d816(_0x440e54(0x37c), _0x440e54(0x2a8)), alert(_0x440e54(0x201))), _0x1c7aec;
        }
        async function _0x180c25(_0x44731f, _0x4e6902, _0x3af9a6) {
            const _0x5395dd = _0x38a4e7;
            try {
                _0x374b21(_0x4e6902 + '\x20a')[_0x5395dd(0x255)](), _0x374b21(_0x4e6902)[_0x5395dd(0x3b7)]('<p\x20id=\x22_SNLOAD\x22>' + _0x3af9a6 + _0x5395dd(0x205));
                let _0x93a67e = await _0x200275(_0x44731f), _0x52deeb = _0x48d7d2(_0x93a67e[_0x5395dd(0x1d8)]);
                if (_0x93a67e[_0x5395dd(0x16e)] === _0x5395dd(0x39b)) {
                    let _0x19c1df = 0x1;
                    _0x52deeb[_0x5395dd(0x35c)] == 'GraphVideo' && _0x52deeb[_0x5395dd(0x3f8)] && (_0x374b21(_0x4e6902)[_0x5395dd(0x3b7)](_0x5395dd(0x349) + _0x52deeb['id'] + _0x5395dd(0x313) + _0x52deeb[_0x5395dd(0x3b2)] + _0x5395dd(0x314) + _0x52deeb[_0x5395dd(0x39a)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x52deeb[_0x5395dd(0x3a9)]['username'] + _0x5395dd(0x3e3) + _0x19c1df + _0x5395dd(0x233) + _0x52deeb[_0x5395dd(0x3f8)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x52deeb[_0x5395dd(0x220)][0x1]['src'] + _0x5395dd(0x1e3) + _0x1e858f('VID') + _0x5395dd(0x37a) + _0x19c1df + _0x5395dd(0x229)), _0x19c1df++);
                    _0x52deeb[_0x5395dd(0x35c)] == 'GraphImage' && (_0x374b21(_0x4e6902)[_0x5395dd(0x3b7)](_0x5395dd(0x349) + _0x52deeb['id'] + _0x5395dd(0x313) + _0x52deeb[_0x5395dd(0x3b2)] + _0x5395dd(0x314) + _0x52deeb[_0x5395dd(0x39a)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x52deeb[_0x5395dd(0x3a9)][_0x5395dd(0x206)] + _0x5395dd(0x3e3) + _0x19c1df + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x52deeb[_0x5395dd(0x220)][_0x52deeb[_0x5395dd(0x220)][_0x5395dd(0x2b2)] - 0x1][_0x5395dd(0x21f)] + _0x5395dd(0x360) + _0x52deeb[_0x5395dd(0x220)][0x1][_0x5395dd(0x21f)] + _0x5395dd(0x3cb) + _0x1e858f(_0x5395dd(0x279)) + _0x5395dd(0x37a) + _0x19c1df + _0x5395dd(0x229)), _0x19c1df++);
                    if (_0x52deeb[_0x5395dd(0x35c)] == _0x5395dd(0x356) && _0x52deeb['edge_sidecar_to_children'])
                        for (let _0x513435 of _0x52deeb[_0x5395dd(0x263)][_0x5395dd(0x267)]) {
                            _0x513435[_0x5395dd(0x341)][_0x5395dd(0x35c)] == _0x5395dd(0x409) && _0x374b21(_0x4e6902)[_0x5395dd(0x3b7)](_0x5395dd(0x349) + _0x513435[_0x5395dd(0x341)]['id'] + _0x5395dd(0x313) + _0x52deeb[_0x5395dd(0x3b2)] + _0x5395dd(0x314) + _0x52deeb['shortcode'] + _0x5395dd(0x3fd) + _0x52deeb['owner']['username'] + _0x5395dd(0x3e3) + _0x19c1df + _0x5395dd(0x233) + _0x513435['node']['video_url'] + _0x5395dd(0x360) + _0x513435[_0x5395dd(0x341)][_0x5395dd(0x220)][0x1][_0x5395dd(0x21f)] + _0x5395dd(0x3a2) + _0x1e858f('VID') + _0x5395dd(0x37a) + _0x19c1df + _0x5395dd(0x229)), _0x513435['node']['__typename'] == _0x5395dd(0x3a7) && _0x374b21(_0x4e6902)['append'](_0x5395dd(0x349) + _0x513435[_0x5395dd(0x341)]['id'] + _0x5395dd(0x313) + _0x52deeb[_0x5395dd(0x3b2)] + _0x5395dd(0x314) + _0x52deeb[_0x5395dd(0x39a)] + _0x5395dd(0x2cf) + _0x52deeb['owner'][_0x5395dd(0x206)] + _0x5395dd(0x3e3) + _0x19c1df + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x513435[_0x5395dd(0x341)][_0x5395dd(0x220)][_0x513435[_0x5395dd(0x341)][_0x5395dd(0x220)][_0x5395dd(0x2b2)] - 0x1][_0x5395dd(0x21f)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x513435['node'][_0x5395dd(0x220)][0x1]['src'] + _0x5395dd(0x3cb) + _0x1e858f('IMG') + '</span>\x20' + _0x19c1df + _0x5395dd(0x229)), _0x19c1df++;
                        }
                } else {
                    if (_0x52deeb[_0x5395dd(0x28c)])
                        _0x42d816(_0x5395dd(0x28c)), _0x52deeb[_0x5395dd(0x28c)][_0x5395dd(0x25d)]((_0x1b9447, _0x3ec8f7) => {
                            const _0x4cd264 = _0x5395dd;
                            let _0x2da0db = _0x3ec8f7 + 0x1;
                            _0x1b9447[_0x4cd264(0x21a)] == null ? (_0x1b9447[_0x4cd264(0x3c8)][_0x4cd264(0x318)]['sort'](function (_0x1eb300, _0x596b0f) {
                                const _0x1144dc = _0x4cd264;
                                let _0x4f0ac0 = new URL(_0x1eb300[_0x1144dc(0x1f0)])[_0x1144dc(0x2f6)][_0x1144dc(0x2a7)]('stp'), _0x4f8715 = new URL(_0x596b0f[_0x1144dc(0x1f0)])[_0x1144dc(0x2f6)]['get'](_0x1144dc(0x170));
                                if (_0x4f0ac0 && _0x4f8715) {
                                    if (_0x4f0ac0[_0x1144dc(0x2b2)] > _0x4f8715['length'])
                                        return 0x1;
                                    if (_0x4f0ac0[_0x1144dc(0x2b2)] < _0x4f8715[_0x1144dc(0x2b2)])
                                        return -0x1;
                                } else {
                                    if (_0x1eb300[_0x1144dc(0x1ee)] < _0x596b0f[_0x1144dc(0x1ee)])
                                        return 0x1;
                                    if (_0x1eb300[_0x1144dc(0x1ee)] > _0x596b0f[_0x1144dc(0x1ee)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x374b21(_0x4e6902)['append']('<a\x20media-id=\x22' + _0x1b9447['pk'] + _0x4cd264(0x313) + _0x1b9447['taken_at'] + _0x4cd264(0x314) + _0x52deeb[_0x4cd264(0x2bf)] + _0x4cd264(0x2cf) + _0x52deeb['owner']['username'] + _0x4cd264(0x3e3) + _0x2da0db + _0x4cd264(0x233) + _0x1b9447['image_versions2'][_0x4cd264(0x318)][0x0][_0x4cd264(0x1f0)] + _0x4cd264(0x360) + _0x1b9447[_0x4cd264(0x3c8)][_0x4cd264(0x318)][0x0][_0x4cd264(0x1f0)] + _0x4cd264(0x3cb) + _0x1e858f(_0x4cd264(0x279)) + _0x4cd264(0x37a) + _0x2da0db + _0x4cd264(0x229))) : _0x374b21(_0x4e6902)[_0x4cd264(0x3b7)](_0x4cd264(0x349) + _0x1b9447['pk'] + _0x4cd264(0x313) + _0x1b9447[_0x4cd264(0x391)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x52deeb[_0x4cd264(0x2bf)] + _0x4cd264(0x3fd) + _0x52deeb[_0x4cd264(0x3a9)][_0x4cd264(0x206)] + '\x22\x20data-globalIndex=\x22' + _0x2da0db + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x1b9447[_0x4cd264(0x21a)][0x0][_0x4cd264(0x1f0)] + _0x4cd264(0x360) + _0x1b9447[_0x4cd264(0x3c8)][_0x4cd264(0x318)][0x0][_0x4cd264(0x1f0)] + _0x4cd264(0x1e3) + _0x1e858f('VID') + _0x4cd264(0x37a) + _0x2da0db + _0x4cd264(0x229));
                        });
                    else {
                        let _0x1d7616 = 0x1;
                        _0x52deeb[_0x5395dd(0x21a)] == null ? (_0x52deeb[_0x5395dd(0x3c8)][_0x5395dd(0x318)][_0x5395dd(0x1b1)](function (_0x24de9b, _0x27168a) {
                            const _0x279ebb = _0x5395dd;
                            let _0x24f721 = new URL(_0x24de9b[_0x279ebb(0x1f0)])['searchParams'][_0x279ebb(0x2a7)](_0x279ebb(0x170)), _0x2576d1 = new URL(_0x27168a[_0x279ebb(0x1f0)])[_0x279ebb(0x2f6)][_0x279ebb(0x2a7)](_0x279ebb(0x170));
                            if (_0x24f721 && _0x2576d1) {
                                if (_0x24f721[_0x279ebb(0x2b2)] > _0x2576d1['length'])
                                    return 0x1;
                                if (_0x24f721[_0x279ebb(0x2b2)] < _0x2576d1['length'])
                                    return -0x1;
                            } else {
                                if (_0x24de9b[_0x279ebb(0x1ee)] < _0x27168a[_0x279ebb(0x1ee)])
                                    return 0x1;
                                if (_0x24de9b['width'] > _0x27168a[_0x279ebb(0x1ee)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x374b21(_0x4e6902)['append'](_0x5395dd(0x349) + _0x52deeb['pk'] + _0x5395dd(0x313) + _0x52deeb[_0x5395dd(0x391)] + _0x5395dd(0x314) + _0x52deeb[_0x5395dd(0x2bf)] + _0x5395dd(0x2cf) + _0x52deeb[_0x5395dd(0x3a9)][_0x5395dd(0x206)] + _0x5395dd(0x3e3) + _0x1d7616 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x52deeb['image_versions2'][_0x5395dd(0x318)][0x0]['url'] + _0x5395dd(0x360) + _0x52deeb['image_versions2']['candidates'][0x0][_0x5395dd(0x1f0)] + _0x5395dd(0x3cb) + _0x1e858f(_0x5395dd(0x279)) + _0x5395dd(0x37a) + _0x1d7616 + '\x20-</a>')) : _0x374b21(_0x4e6902)['append'](_0x5395dd(0x349) + _0x52deeb['pk'] + _0x5395dd(0x313) + _0x52deeb[_0x5395dd(0x391)] + _0x5395dd(0x314) + _0x52deeb[_0x5395dd(0x2bf)] + _0x5395dd(0x3fd) + _0x52deeb['owner']['username'] + _0x5395dd(0x3e3) + _0x1d7616 + _0x5395dd(0x233) + _0x52deeb['video_versions'][0x0][_0x5395dd(0x1f0)] + _0x5395dd(0x360) + _0x52deeb[_0x5395dd(0x3c8)]['candidates'][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x1e858f(_0x5395dd(0x305)) + _0x5395dd(0x37a) + _0x1d7616 + _0x5395dd(0x229));
                    }
                }
                _0x374b21(_0x5395dd(0x25b))['remove'](), _0x374b21(_0x5395dd(0x180))[_0x5395dd(0x395)](function () {
                    const _0x44f307 = _0x5395dd;
                    _0x374b21(this)[_0x44f307(0x410)](_0x44f307(0x1f1)), _0x374b21(this)[_0x44f307(0x234)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x374b21(this)[_0x44f307(0x228)](_0x44f307(0x3a3) + _0x1e858f(_0x44f307(0x28a)) + _0x44f307(0x23e) + _0x5a160e[_0x44f307(0x28a)] + _0x44f307(0x402)), _0x374b21(this)[_0x44f307(0x24d)](_0x44f307(0x165)) == _0x44f307(0x223) && _0x374b21(this)[_0x44f307(0x228)](_0x44f307(0x17b) + _0x1e858f('THUMBNAIL_INTRO') + _0x44f307(0x33e) + _0x5a160e[_0x44f307(0x331)] + _0x44f307(0x402));
                });
            } catch (_0x448b12) {
                _0x42d816('createMediaListDOM', _0x448b12);
            }
            ;
        }
        function _0xccd241(_0x15945a) {
            const _0x39eb1b = _0x38a4e7;
            var _0x593dfc = 0x0, _0x58db9b = _0x15945a[_0x39eb1b(0x2fe)](_0x39eb1b(0x24c));
            return (_0x58db9b == null || !_0x58db9b[_0x39eb1b(0x3ac)](_0x39eb1b(0x407))) && (_0x58db9b = _0x15945a[_0x39eb1b(0x2fe)]('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)[_0x39eb1b(0x240)](_0x39eb1b(0x2f4))), _0x58db9b[_0x39eb1b(0x2ff)](_0x39eb1b(0x2ee))[_0x39eb1b(0x395)](function (_0x203ddf) {
                const _0x2d00ba = _0x39eb1b;
                _0x374b21(this)[_0x2d00ba(0x3ac)](_0x2d00ba(0x3fa)) && (_0x593dfc = _0x203ddf);
            }), _0x593dfc;
        }
        async function _0x24b4ad(_0x5b2fa7) {
            const _0x52b74e = _0x38a4e7;
            if (_0x5b2fa7) {
                _0x3547f7(!![]);
                let _0x11815a = new Date()['getTime'](), _0x49185c = Math[_0x52b74e(0x235)](_0x11815a / 0x3e8), _0x69fa35 = location[_0x52b74e(0x40c)][_0x52b74e(0x1b8)](/(reels|tagged)\/$/ig, '')[_0x52b74e(0x30d)]('/')[_0x52b74e(0x2ff)](_0x448293 => _0x448293[_0x52b74e(0x2b2)] > 0x0)['at'](-0x1), _0xcedcc = await _0x36f167(_0x69fa35);
                try {
                    let _0x534aa4 = await _0x1842c3(_0xcedcc['user']['pk']);
                    _0x496556(_0x534aa4, _0x69fa35, 'avatar', _0x49185c, 'jpg');
                } catch (_0x3c092d) {
                    _0x496556(_0xcedcc['user'][_0x52b74e(0x1e4)], _0x69fa35, _0x52b74e(0x178), _0x49185c, _0x52b74e(0x1b0));
                }
                _0x3547f7(![]);
            } else {
                if (!_0x374b21(_0x52b74e(0x348))['length']) {
                    let _0x5b4cff = setInterval(() => {
                        const _0x34c515 = _0x52b74e;
                        if (_0x374b21('.IG_DWPROFILE')[_0x34c515(0x2b2)]) {
                            clearInterval(_0x5b4cff);
                            return;
                        }
                        _0x374b21('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')[_0x34c515(0x266)]()[_0x34c515(0x266)]()[_0x34c515(0x3b7)](_0x34c515(0x35f) + _0x1e858f('DW') + _0x34c515(0x38b) + _0x5a160e[_0x34c515(0x187)] + _0x34c515(0x402)), _0x374b21(_0x34c515(0x19a))[_0x34c515(0x266)]()[_0x34c515(0x266)]()[_0x34c515(0x18f)]('position', _0x34c515(0x173)), _0x374b21('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')[_0x34c515(0x266)]()[_0x34c515(0x266)]()[_0x34c515(0x266)]()[_0x34c515(0x3b7)](_0x34c515(0x35f) + _0x1e858f('DW') + _0x34c515(0x38b) + _0x5a160e[_0x34c515(0x187)] + _0x34c515(0x402)), _0x374b21('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')['parent']()[_0x34c515(0x266)]()['parent']()[_0x34c515(0x18f)]('position', _0x34c515(0x173));
                    }, 0x96);
                }
            }
        }
        async function _0x195378(_0x4a5951, _0x5d0ec7, _0x306ab0) {
            const _0x58f2ba = _0x38a4e7;
            if (_0x4a5951) {
                _0x3547f7(!![]);
                let _0x3ade46 = location[_0x58f2ba(0x408)][_0x58f2ba(0x30d)]('?')['at'](0x0)[_0x58f2ba(0x30d)]('instagram.com/reels/')['at'](-0x1)[_0x58f2ba(0x1b8)]('/', ''), _0x26937d = await _0x200275(_0x3ade46), _0x177238 = _0x48d7d2(_0x26937d[_0x58f2ba(0x1d8)]), _0x12f6e5 = new Date()[_0x58f2ba(0x249)]();
                _0x1aee20['RENAME_PUBLISH_DATE'] && (_0x26937d[_0x58f2ba(0x16e)] === _0x58f2ba(0x39b) ? _0x12f6e5 = _0x177238['shortcode_media'][_0x58f2ba(0x3b2)] : _0x12f6e5 = _0x177238['taken_at']);
                if (_0x26937d[_0x58f2ba(0x16e)] === _0x58f2ba(0x39b)) {
                    if (_0x5d0ec7 && _0x177238[_0x58f2ba(0x1b9)]['is_video']) {
                        if (_0x306ab0)
                            _0xb6f68e(_0x177238[_0x58f2ba(0x1b9)][_0x58f2ba(0x3f8)]);
                        else {
                            let _0x2a97ca = _0x58f2ba(0x217);
                            _0x496556(_0x177238['shortcode_media'][_0x58f2ba(0x3f8)], _0x177238[_0x58f2ba(0x1b9)][_0x58f2ba(0x3a9)][_0x58f2ba(0x206)], _0x58f2ba(0x3d9), _0x12f6e5, _0x2a97ca, _0x3ade46);
                        }
                    } else {
                        if (_0x306ab0)
                            _0xb6f68e(_0x177238[_0x58f2ba(0x1b9)][_0x58f2ba(0x220)]['at'](-0x1)[_0x58f2ba(0x21f)]);
                        else {
                            let _0x5b3f61 = _0x58f2ba(0x1b0);
                            _0x496556(_0x177238[_0x58f2ba(0x1b9)][_0x58f2ba(0x220)]['at'](-0x1)['src'], _0x177238[_0x58f2ba(0x1b9)][_0x58f2ba(0x3a9)][_0x58f2ba(0x206)], _0x58f2ba(0x3d9), _0x12f6e5, _0x5b3f61, _0x3ade46);
                        }
                    }
                } else {
                    if (_0x5d0ec7 && _0x177238[_0x58f2ba(0x21a)] != null) {
                        if (_0x306ab0)
                            _0xb6f68e(_0x177238[_0x58f2ba(0x21a)][0x0]['url']);
                        else {
                            let _0x425a2f = _0x58f2ba(0x217);
                            _0x496556(_0x177238[_0x58f2ba(0x21a)][0x0][_0x58f2ba(0x1f0)], _0x177238[_0x58f2ba(0x3a9)][_0x58f2ba(0x206)], _0x58f2ba(0x3d9), _0x12f6e5, _0x425a2f, _0x3ade46);
                        }
                    } else {
                        if (_0x306ab0)
                            _0xb6f68e(_0x177238[_0x58f2ba(0x3c8)][_0x58f2ba(0x318)][0x0][_0x58f2ba(0x1f0)]);
                        else {
                            let _0x5aa6db = _0x58f2ba(0x1b0);
                            _0x496556(_0x177238['image_versions2'][_0x58f2ba(0x318)][0x0][_0x58f2ba(0x1f0)], _0x177238[_0x58f2ba(0x3a9)][_0x58f2ba(0x206)], 'reels', _0x12f6e5, _0x5aa6db, _0x3ade46);
                        }
                    }
                }
                _0x3547f7(![]);
            } else
                var _0xe0faa5 = setInterval(() => {
                    const _0x3ce79a = _0x58f2ba;
                    _0x374b21(_0x3ce79a(0x363))[_0x3ce79a(0x2b2)] > 0x0 && (clearInterval(_0xe0faa5), _0x1aee20[_0x3ce79a(0x1f2)] && (_0x374b21(_0x3ce79a(0x283))[_0x3ce79a(0x255)](), _0x374b21(_0x3ce79a(0x3bd))[_0x3ce79a(0x3b7)](_0x3ce79a(0x3be)), _0x374b21(_0x3ce79a(0x2f2))['append'](_0x3ce79a(0x1b7)), _0x374b21(_0x3ce79a(0x2f2))[_0x3ce79a(0x3b7)]('<div\x20class=\x22button-down\x22><div></div></div>'), _0x374b21(_0x3ce79a(0x29a))['on'](_0x3ce79a(0x3b5), function () {
                        const _0x589d3b = _0x3ce79a;
                        _0x374b21(_0x589d3b(0x25c))[0x0][_0x589d3b(0x2e0)]({
                            'top': -0x1e,
                            'behavior': _0x589d3b(0x376)
                        });
                    }), _0x374b21(_0x3ce79a(0x177))['on'](_0x3ce79a(0x3b5), function () {
                        const _0x1fc90b = _0x3ce79a;
                        _0x374b21(_0x1fc90b(0x25c))[0x0]['scrollBy']({
                            'top': 0x1e,
                            'behavior': 'smooth'
                        });
                    })), _0x374b21(_0x3ce79a(0x28f))[_0x3ce79a(0x240)]('div')[_0x3ce79a(0x395)](function () {
                        const _0x27fe66 = _0x3ce79a;
                        if (_0x374b21(this)[_0x27fe66(0x240)]()[_0x27fe66(0x2b2)] > 0x0) {
                            if (!_0x374b21(this)[_0x27fe66(0x240)]()[_0x27fe66(0x2fe)](_0x27fe66(0x3f1))[_0x27fe66(0x2b2)]) {
                                var _0x5dbf3a = _0x374b21(this);
                                _0x374b21(this)['children']()[_0x27fe66(0x18f)](_0x27fe66(0x354), 'relative'), _0x374b21(this)['children']()[_0x27fe66(0x3b7)](_0x27fe66(0x35f) + _0x1e858f('DW') + _0x27fe66(0x210) + _0x5a160e[_0x27fe66(0x187)] + _0x27fe66(0x402)), _0x374b21(this)[_0x27fe66(0x240)]()[_0x27fe66(0x3b7)](_0x27fe66(0x3a3) + _0x1e858f(_0x27fe66(0x28a)) + '\x22\x20class=\x22IG_REELS_NEWTAB\x22>' + _0x5a160e[_0x27fe66(0x28a)] + '</div>'), _0x374b21(this)[_0x27fe66(0x240)]()[_0x27fe66(0x3b7)](_0x27fe66(0x17b) + _0x1e858f(_0x27fe66(0x1d0)) + _0x27fe66(0x3b8) + _0x5a160e[_0x27fe66(0x331)] + '</div>');
                                _0x1aee20['DISABLE_VIDEO_LOOPING'] && _0x374b21(this)[_0x27fe66(0x2fe)](_0x27fe66(0x223))[_0x27fe66(0x395)](function () {
                                    const _0x35f9cf = _0x27fe66;
                                    _0x374b21(this)['on'](_0x35f9cf(0x175), function () {
                                        const _0x18e0cf = _0x35f9cf;
                                        if (!_0x374b21(this)[_0x18e0cf(0x1d8)]('loop')) {
                                            let _0x35e823 = _0x374b21(this)[_0x18e0cf(0x284)]()[_0x18e0cf(0x2fe)]('div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]')['parents']('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x35e823[_0x18e0cf(0x2b2)] > 0x0 ? (_0x374b21(this)[_0x18e0cf(0x24d)](_0x18e0cf(0x23a), !![]), _0x35e823[_0x18e0cf(0x404)]('click'), _0x42d816(_0x18e0cf(0x250))) : (_0x374b21(this)[_0x18e0cf(0x24d)]('data-loop', !![]), _0x374b21(this)[_0x18e0cf(0x266)]()['find']('.xpgaw4o')[_0x18e0cf(0x3d3)]('style'), this[_0x18e0cf(0x2f0)](), _0x42d816(_0x18e0cf(0x2a3)));
                                        }
                                    });
                                });
                                _0x1aee20['HTML5_VIDEO_CONTROL'] && _0x374b21(this)[_0x27fe66(0x2fe)](_0x27fe66(0x223))[_0x27fe66(0x395)](function () {
                                    const _0x473b8f = _0x27fe66;
                                    if (!_0x374b21(this)[_0x473b8f(0x1d8)](_0x473b8f(0x3d8))) {
                                        let _0x2b18bd = _0x374b21(this);
                                        _0x42d816(_0x473b8f(0x288)), _0x1aee20['MODIFY_VIDEO_VOLUME'] && (this[_0x473b8f(0x352)] = _0x6cf809['videoVolume'], _0x374b21(this)['on'](_0x473b8f(0x27c), function () {
                                            const _0x391262 = _0x473b8f;
                                            this[_0x391262(0x352)] = _0x6cf809[_0x391262(0x3a4)];
                                        })), _0x374b21(this)['on'](_0x473b8f(0x1d3), function (_0x56c4e1) {
                                            const _0x2f32dd = _0x473b8f;
                                            _0x56c4e1['preventDefault'](), _0x2b18bd['css']('z-index', '-1'), _0x2b18bd['removeAttr'](_0x2f32dd(0x3d8));
                                        }), _0x374b21(this)[_0x473b8f(0x266)]()['find'](_0x473b8f(0x1c0))['filter'](function () {
                                            const _0xed8b8b = _0x473b8f;
                                            return _0x374b21(this)[_0xed8b8b(0x266)](_0xed8b8b(0x317))['length'] > 0x0 && _0x374b21(this)[_0xed8b8b(0x18f)](_0xed8b8b(0x1a8)) === 'pointer' && _0x374b21(this)[_0xed8b8b(0x24d)](_0xed8b8b(0x290)) != null;
                                        })[_0x473b8f(0x2fb)]()['on'](_0x473b8f(0x1d3), function (_0x19676d) {
                                            const _0x176add = _0x473b8f;
                                            _0x19676d[_0x176add(0x36e)](), _0x2b18bd[_0x176add(0x18f)]('z-index', '2'), _0x2b18bd[_0x176add(0x24d)](_0x176add(0x3d8), !![]);
                                        }), _0x374b21(this)['on']('volumechange', function () {
                                            const _0xa06d85 = _0x473b8f;
                                            let _0x3e6ed4 = _0x374b21(this)[_0xa06d85(0x266)]()[_0xa06d85(0x2fe)]('video\x20+\x20div\x20>\x20div')[_0xa06d85(0x2fe)](_0xa06d85(0x191))[_0xa06d85(0x2ff)](function (_0x43bde1) {
                                                const _0x7ad657 = _0xa06d85;
                                                return _0x374b21(this)['width']() <= 0x40 && _0x374b21(this)[_0x7ad657(0x398)]() <= 0x40 && _0x374b21(this)[_0x7ad657(0x2fe)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')[_0x7ad657(0x2b2)] > 0x0;
                                            });
                                            var _0x582669 = _0x3e6ed4[_0xa06d85(0x2fe)](_0xa06d85(0x213))['length'] === 0x0;
                                            this[_0xa06d85(0x293)] != _0x582669 && (this[_0xa06d85(0x352)] = _0x6cf809[_0xa06d85(0x3a4)], _0x3e6ed4?.[_0xa06d85(0x404)](_0xa06d85(0x3b5))), _0x374b21(this)[_0xa06d85(0x24d)](_0xa06d85(0x337)) && (_0x6cf809[_0xa06d85(0x3a4)] = this['volume'], GM_setValue(_0xa06d85(0x27e), this['volume'])), this[_0xa06d85(0x352)] == _0x6cf809[_0xa06d85(0x3a4)] && _0x374b21(this)['attr'](_0xa06d85(0x337), !![]);
                                        }), _0x374b21(this)[_0x473b8f(0x18f)](_0x473b8f(0x354), 'absolute'), _0x374b21(this)['css'](_0x473b8f(0x3df), '2'), _0x374b21(this)['attr'](_0x473b8f(0x176), !![]), _0x374b21(this)[_0x473b8f(0x24d)](_0x473b8f(0x3d8), !![]);
                                    }
                                });
                                var _0x4b9759 = _0x5dbf3a['find'](_0x27fe66(0x223)), _0x15412f = _0x374b21(this)[_0x27fe66(0x2fe)](_0x27fe66(0x1aa))[_0x27fe66(0x2fb)]();
                                _0x3a5d0c(_0x4b9759, _0x15412f, _0x27fe66(0x2f7));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x5bbfd1() {
            const _0x24b58f = _0x38a4e7;
            _0x3547f7(!![]);
            let _0x2b0351 = new Date()['getTime'](), _0x3d8f99 = Math[_0x24b58f(0x235)](_0x2b0351 / 0x3e8), _0x5bf82a = _0x374b21(_0x24b58f(0x202))[_0x24b58f(0x2fb)]()['text']() || location[_0x24b58f(0x40c)][_0x24b58f(0x30d)]('/')[_0x24b58f(0x2ff)](_0x42e961 => _0x42e961['length'] > 0x0)['at'](0x1), _0x265b5d = await _0x36f167(_0x5bf82a), _0x21dfa5 = _0x265b5d[_0x24b58f(0x383)]['pk'], _0x1b03a0 = await _0x295f7e(_0x21dfa5), _0x303325 = 0x0;
            _0x46fc51(_0x303325, _0x1b03a0[_0x24b58f(0x1d8)]['reels_media'][0x0]['items'][_0x24b58f(0x2b2)]), _0x1b03a0[_0x24b58f(0x1d8)][_0x24b58f(0x364)][0x0][_0x24b58f(0x1ff)]['forEach']((_0x2dabec, _0x29d1c9) => {
                setTimeout(() => {
                    const _0x22c2b8 = a0_0x2eb7;
                    _0x1aee20[_0x22c2b8(0x1fe)] && (_0x3d8f99 = _0x2dabec[_0x22c2b8(0x3b2)]), _0x2dabec[_0x22c2b8(0x220)]['sort'](function (_0x508ec2, _0x4cb27c) {
                        const _0x35ecde = _0x22c2b8;
                        if (_0x508ec2[_0x35ecde(0x1d4)] < _0x4cb27c['config_width'])
                            return 0x1;
                        if (_0x508ec2['config_width'] > _0x4cb27c[_0x35ecde(0x1d4)])
                            return -0x1;
                        return 0x0;
                    }), _0x2dabec[_0x22c2b8(0x3aa)] ? _0x496556(_0x2dabec[_0x22c2b8(0x2be)][0x0][_0x22c2b8(0x21f)], _0x5bf82a, _0x22c2b8(0x38d), _0x3d8f99, _0x22c2b8(0x217), _0x2dabec['id'])['then'](() => {
                        const _0x2ec732 = _0x22c2b8;
                        _0x46fc51(++_0x303325, _0x1b03a0['data']['reels_media'][0x0][_0x2ec732(0x1ff)][_0x2ec732(0x2b2)]);
                    }) : _0x496556(_0x2dabec['display_resources'][0x0][_0x22c2b8(0x21f)], _0x5bf82a, 'stories', _0x3d8f99, _0x22c2b8(0x1b0), _0x2dabec['id'])[_0x22c2b8(0x3d6)](() => {
                        const _0x1d2539 = _0x22c2b8;
                        _0x46fc51(++_0x303325, _0x1b03a0[_0x1d2539(0x1d8)][_0x1d2539(0x364)][0x0]['items']['length']);
                    });
                }, 0x64 * _0x29d1c9);
            });
        }
        async function _0x281acf(_0x169ce6, _0x519ee6, _0x4bf985) {
            const _0x50e74d = _0x38a4e7;
            var _0xed0294 = _0x374b21(_0x50e74d(0x202))[_0x50e74d(0x2fb)]()['text']() || location[_0x50e74d(0x40c)][_0x50e74d(0x30d)]('/')[_0x50e74d(0x2ff)](_0x22e449 => _0x22e449[_0x50e74d(0x2b2)] > 0x0)['at'](0x1);
            if (_0x169ce6) {
                let _0x1c12b6 = new Date()[_0x50e74d(0x249)](), _0x350208 = Math['floor'](_0x1c12b6 / 0x3e8);
                _0x3547f7(!![]);
                if (_0x1aee20['FORCE_RESOURCE_VIA_MEDIA'] && !_0x6cf809[_0x50e74d(0x2d5)]) {
                    let _0x5625b2 = null, _0xb25c47 = await _0x36f167(_0xed0294), _0x46e91b = _0xb25c47[_0x50e74d(0x383)]['pk'], _0x42d2f8 = await _0x295f7e(_0x46e91b), _0x32a442 = location[_0x50e74d(0x40c)][_0x50e74d(0x30d)]('/')[_0x50e74d(0x2ff)](_0x1e86ea => _0x1e86ea[_0x50e74d(0x2b2)] > 0x0 && _0x1e86ea[_0x50e74d(0x39f)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x42d2f8['data']['reels_media'][0x0][_0x50e74d(0x1ff)]['forEach'](_0x53507f => {
                        _0x53507f['id'] == _0x32a442 && (_0x5625b2 = _0x53507f['id']);
                    });
                    if (_0x5625b2 == null) {
                        let _0x20ab29 = _0x11fca4(_0xed0294);
                        _0x20ab29[_0x50e74d(0x395)](function (_0x228705) {
                            const _0x157451 = _0x50e74d;
                            _0x374b21(this)[_0x157451(0x240)]()[_0x157451(0x2b2)] > 0x0 && (_0x5625b2 = _0x42d2f8[_0x157451(0x1d8)][_0x157451(0x364)][0x0][_0x157451(0x1ff)][_0x228705]['id']);
                        });
                    }
                    _0x5625b2 == null && (_0x374b21(_0x50e74d(0x196))['each'](function (_0x299400) {
                        const _0x10413d = _0x50e74d;
                        _0x374b21(this)[_0x10413d(0x3ac)](_0x10413d(0x3c3)) && (_0x374b21(this)['children']()[_0x10413d(0x2b2)] > 0x0 && (_0x5625b2 = _0x42d2f8[_0x10413d(0x1d8)]['reels_media'][0x0][_0x10413d(0x1ff)][_0x299400]['id']));
                    }), _0x374b21(_0x50e74d(0x2cb))['each'](function (_0x30ef3d) {
                        const _0x41ff39 = _0x50e74d;
                        _0x374b21(this)['children']()[_0x41ff39(0x3ac)](_0x41ff39(0x34a)) && (_0x5625b2 = _0x42d2f8['data']['reels_media'][0x0][_0x41ff39(0x1ff)][_0x30ef3d]['id']);
                    }));
                    _0x5625b2 == null && (_0x5625b2 = location[_0x50e74d(0x40c)][_0x50e74d(0x30d)]('/')[_0x50e74d(0x2ff)](_0x5c626d => _0x5c626d['length'] > 0x0 && _0x5c626d[_0x50e74d(0x39f)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x235493 = await _0x3d7dcf(_0x5625b2);
                    _0x1aee20[_0x50e74d(0x1fe)] && (_0x350208 = _0x235493[_0x50e74d(0x1ff)][0x0]['taken_at']);
                    _0x235493[_0x50e74d(0x2d6)] === 'ok' ? _0x235493[_0x50e74d(0x1ff)][0x0][_0x50e74d(0x21a)] ? _0x4bf985 ? _0xb6f68e(_0x235493['items'][0x0]['video_versions'][0x0][_0x50e74d(0x1f0)]) : _0x496556(_0x235493['items'][0x0]['video_versions'][0x0][_0x50e74d(0x1f0)], _0xed0294, _0x50e74d(0x38d), _0x350208, _0x50e74d(0x217), _0x5625b2) : _0x4bf985 ? _0xb6f68e(_0x235493[_0x50e74d(0x1ff)][0x0]['image_versions2'][_0x50e74d(0x318)][0x0][_0x50e74d(0x1f0)]) : _0x496556(_0x235493[_0x50e74d(0x1ff)][0x0][_0x50e74d(0x3c8)][_0x50e74d(0x318)][0x0]['url'], _0xed0294, _0x50e74d(0x38d), _0x350208, 'jpg', _0x5625b2) : (_0x1aee20[_0x50e74d(0x19f)] ? (_0x6cf809[_0x50e74d(0x2d5)] = !![], _0x281acf(_0x169ce6, _0x519ee6, _0x4bf985)) : alert(_0x50e74d(0x1fd) + _0x235493[_0x50e74d(0x2c2)]), _0x42d816(_0x235493));
                    _0x3547f7(![]);
                    return;
                }
                if (_0x374b21(_0x50e74d(0x16c))[_0x50e74d(0x2b2)] > 0x0) {
                    let _0x1ed15a = _0x50e74d(0x217), _0x2667e8 = '', _0x4c892d = location['pathname']['replace'](/\/$/ig, '')[_0x50e74d(0x30d)]('/')['at'](-0x1), _0x4cd084 = null;
                    if (_0x6cf809[_0x50e74d(0x2e5)]['stories'][_0xed0294] && !_0x519ee6) {
                        _0x42d816(_0x50e74d(0x2ef), _0xed0294), _0x6cf809['GL_dataCache'][_0x50e74d(0x38d)][_0xed0294][_0x50e74d(0x1d8)][_0x50e74d(0x364)][0x0][_0x50e74d(0x1ff)]['forEach'](_0x2f4698 => {
                            const _0x61e361 = _0x50e74d;
                            _0x2f4698['id'] == _0x4c892d && (_0x2667e8 = _0x2f4698[_0x61e361(0x2be)][0x0][_0x61e361(0x21f)], _0x1aee20[_0x61e361(0x1fe)] && (_0x350208 = _0x2f4698[_0x61e361(0x3b2)], _0x4cd084 = _0x2f4698['id']));
                        });
                        if (_0x2667e8['length'] == 0x0) {
                            _0x42d816(_0x50e74d(0x351), _0xed0294), _0x281acf(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x2e3916 = await _0x36f167(_0xed0294), _0x1d9950 = _0x2e3916['user']['pk'], _0x1fb2df = await _0x295f7e(_0x1d9950);
                        _0x1fb2df[_0x50e74d(0x1d8)]['reels_media'][0x0][_0x50e74d(0x1ff)][_0x50e74d(0x25d)](_0x366b1f => {
                            const _0x58cebe = _0x50e74d;
                            _0x366b1f['id'] == _0x4c892d && (_0x2667e8 = _0x366b1f[_0x58cebe(0x2be)][0x0][_0x58cebe(0x21f)], _0x1aee20[_0x58cebe(0x1fe)] && (_0x350208 = _0x366b1f['taken_at_timestamp'], _0x4cd084 = _0x366b1f['id']));
                        });
                        if (_0x2667e8[_0x50e74d(0x2b2)] == 0x0) {
                            let _0x42dd0d = _0x11fca4(_0xed0294);
                            _0x42dd0d[_0x50e74d(0x395)](function (_0x4ab1ae) {
                                const _0x30fe8d = _0x50e74d;
                                _0x374b21(this)['children']()[_0x30fe8d(0x2b2)] > 0x0 && (_0x2667e8 = _0x1fb2df[_0x30fe8d(0x1d8)][_0x30fe8d(0x364)][0x0][_0x30fe8d(0x1ff)][_0x4ab1ae][_0x30fe8d(0x2be)][0x0]['src'], _0x1aee20[_0x30fe8d(0x1fe)] && (_0x350208 = _0x1fb2df[_0x30fe8d(0x1d8)][_0x30fe8d(0x364)][0x0]['items'][_0x4ab1ae]['taken_at_timestamp'], _0x4cd084 = _0x1fb2df[_0x30fe8d(0x1d8)][_0x30fe8d(0x364)][0x0][_0x30fe8d(0x1ff)][_0x4ab1ae]['id']));
                            }), _0x2667e8[_0x50e74d(0x2b2)] == 0x0 && (_0x374b21('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')['each'](function (_0x14eaff) {
                                const _0xfa0445 = _0x50e74d;
                                _0x374b21(this)[_0xfa0445(0x3ac)](_0xfa0445(0x3c3)) && (_0x374b21(this)['children']()['length'] > 0x0 && (_0x2667e8 = _0x1fb2df[_0xfa0445(0x1d8)]['reels_media'][0x0]['items'][_0x14eaff][_0xfa0445(0x2be)][0x0][_0xfa0445(0x21f)], _0x1aee20['RENAME_PUBLISH_DATE'] && (_0x350208 = _0x1fb2df['data'][_0xfa0445(0x364)][0x0][_0xfa0445(0x1ff)][_0x14eaff][_0xfa0445(0x3b2)], _0x4cd084 = _0x1fb2df[_0xfa0445(0x1d8)]['reels_media'][0x0][_0xfa0445(0x1ff)][_0x14eaff]['id'])));
                            }), _0x374b21(_0x50e74d(0x2cb))[_0x50e74d(0x395)](function (_0x583ceb) {
                                const _0xbb5994 = _0x50e74d;
                                _0x374b21(this)[_0xbb5994(0x240)]()[_0xbb5994(0x3ac)](_0xbb5994(0x34a)) && (_0x2667e8 = _0x1fb2df[_0xbb5994(0x1d8)][_0xbb5994(0x364)][0x0][_0xbb5994(0x1ff)][_0x583ceb]['video_resources'][0x0]['src'], _0x1aee20[_0xbb5994(0x1fe)] && (_0x350208 = _0x1fb2df[_0xbb5994(0x1d8)][_0xbb5994(0x364)][0x0][_0xbb5994(0x1ff)][_0x583ceb][_0xbb5994(0x3b2)], _0x4cd084 = _0x1fb2df[_0xbb5994(0x1d8)][_0xbb5994(0x364)][0x0][_0xbb5994(0x1ff)][_0x583ceb]['id']));
                            }));
                        }
                        _0x6cf809[_0x50e74d(0x2e5)][_0x50e74d(0x38d)][_0xed0294] = _0x1fb2df;
                    }
                    _0x2667e8['length'] == 0x0 ? alert(_0x1e858f(_0x50e74d(0x381))) : _0x4bf985 ? _0xb6f68e(_0x2667e8) : _0x496556(_0x2667e8, _0xed0294, _0x50e74d(0x38d), _0x350208, _0x1ed15a, _0x4cd084);
                } else {
                    let _0x1ded3f = _0x374b21(_0x50e74d(0x3ce))[_0x50e74d(0x24d)]('srcset')?.['split'](',')[0x0]?.['split']('\x20')[0x0], _0x13946f = _0x1ded3f ? _0x1ded3f : _0x374b21('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0x50e74d(0x2ff)](function () {
                            const _0x2e70c3 = _0x50e74d;
                            return _0x374b21(this)[_0x2e70c3(0x174)]('a')[_0x2e70c3(0x2b2)] === 0x0 && _0x374b21(this)[_0x2e70c3(0x1ee)]() === _0x374b21(this)['parent']()[_0x2e70c3(0x1ee)]();
                        })['attr']('src');
                    if (!_0x13946f) {
                        let _0x566518 = _0x374b21(_0x50e74d(0x252));
                        _0x13946f = _0x566518[_0x50e74d(0x24d)](_0x50e74d(0x212)) ? _0x566518[_0x50e74d(0x24d)]('srcset')?.[_0x50e74d(0x30d)](',')[0x0]?.['split']('\x20')[0x0] : _0x566518[_0x50e74d(0x24d)]('src');
                    }
                    _0x1aee20[_0x50e74d(0x1fe)] && (_0x350208 = new Date(_0x374b21('body\x20>\x20div\x20section:visible\x20time[datetime][class]')[_0x50e74d(0x2fb)]()[_0x50e74d(0x24d)](_0x50e74d(0x3d7)))['getTime']());
                    let _0x5caca0 = _0x13946f, _0x1ba47c = _0x50e74d(0x1b0);
                    _0x4bf985 ? _0xb6f68e(_0x5caca0) : _0x496556(_0x5caca0, _0xed0294, 'stories', _0x350208, _0x1ba47c, _0x539213(_0x5caca0) ?? '');
                }
                _0x6cf809['tempFetchRateLimit'] = ![], _0x3547f7(![]);
            } else {
                if (!_0x374b21(_0x50e74d(0x30a))[_0x50e74d(0x2b2)]) {
                    _0x6cf809[_0x50e74d(0x2e5)][_0x50e74d(0x38d)] = {};
                    let _0x17d633 = null;
                    _0x374b21(_0x50e74d(0x2ad))[_0x50e74d(0x2b2)] > 0x0 ? _0x17d633 = _0x374b21(_0x50e74d(0x1c3)) : (_0x17d633 = _0x374b21('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x17d633['css']('position', _0x50e74d(0x173)));
                    _0x17d633[_0x50e74d(0x2b2)] === 0x0 && (_0x17d633 = _0x374b21(_0x50e74d(0x40d))[_0x50e74d(0x266)]()[_0x50e74d(0x266)]()['parent']()['find'](_0x50e74d(0x3c5)), _0x17d633[_0x50e74d(0x18f)]('position', _0x50e74d(0x173)));
                    _0x17d633['length'] === 0x0 && (_0x17d633 = _0x374b21(_0x50e74d(0x40d))[_0x50e74d(0x266)]()['parent']()[_0x50e74d(0x266)]()[_0x50e74d(0x2fe)](_0x50e74d(0x2e1)), _0x17d633[_0x50e74d(0x18f)](_0x50e74d(0x354), _0x50e74d(0x173)));
                    if (_0x17d633[_0x50e74d(0x2b2)] === 0x0) {
                        let _0x19539e = _0x374b21('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x99d1f9 = 0x0;
                        _0x19539e[_0x50e74d(0x395)](function () {
                            const _0x31ba96 = _0x50e74d;
                            _0x374b21(this)[_0x31ba96(0x1ee)]() > _0x99d1f9 && (_0x99d1f9 = _0x374b21(this)[_0x31ba96(0x1ee)](), _0x17d633 = _0x374b21(this)[_0x31ba96(0x240)](_0x31ba96(0x2f4))[_0x31ba96(0x2fb)]());
                        });
                    }
                    if (_0x17d633 != null) {
                        _0x17d633['first']()['css'](_0x50e74d(0x354), 'relative'), _0x17d633[_0x50e74d(0x2fb)]()[_0x50e74d(0x3b7)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x1e858f('DW') + _0x50e74d(0x3ea) + _0x5a160e[_0x50e74d(0x187)] + _0x50e74d(0x402)), _0x17d633['first']()['append']('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x1e858f('NEW_TAB') + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x5a160e['NEW_TAB'] + _0x50e74d(0x402));
                        let _0x19d62c = _0x11fca4(_0xed0294);
                        _0x19d62c[_0x50e74d(0x2b2)] > 0x1 && _0x17d633[_0x50e74d(0x2fb)]()[_0x50e74d(0x3b7)](_0x50e74d(0x22d) + _0x1e858f(_0x50e74d(0x2e7)) + _0x50e74d(0x2e2) + _0x5a160e[_0x50e74d(0x261)] + _0x50e74d(0x402)), _0x17d633['find'](_0x50e74d(0x164))[_0x50e74d(0x395)](function () {
                            _0x374b21(this)['on']('load', function () {
                                const _0x1779d2 = a0_0x2eb7;
                                !_0x374b21(this)[_0x1779d2(0x1d8)](_0x1779d2(0x343)) && (_0x17d633[_0x1779d2(0x2fe)](_0x1779d2(0x23d))['length'] === 0x0 ? (_0x374b21(this)['attr'](_0x1779d2(0x33b), !![]), _0x374b21(_0x1779d2(0x23d))['remove'](), _0x42d816(_0x1779d2(0x21e))) : (_0x374b21(this)[_0x1779d2(0x24d)](_0x1779d2(0x33b), !![]), _0x42d816('(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x5c584d(_0x9072f7, _0x2153dc) {
            const _0x30198d = _0x38a4e7;
            if (_0x9072f7) {
                let _0x203f9a = new Date()['getTime'](), _0x1e6e4d = Math[_0x30198d(0x235)](_0x203f9a / 0x3e8), _0x22c889 = 'jpg', _0x2d48fe = _0x374b21('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x30198d(0x2fb)]()['text']() || location[_0x30198d(0x40c)][_0x30198d(0x30d)]('/')['at'](0x2), _0x5f41fa = location[_0x30198d(0x40c)][_0x30198d(0x385)](/\/$/ig, '')[_0x30198d(0x30d)]('/')['at'](-0x1), _0x57c1e3 = '', _0x3fcc92 = null;
                _0x3547f7(!![]);
                if (_0x1aee20[_0x30198d(0x171)] && !_0x6cf809[_0x30198d(0x2d5)]) {
                    let _0x456f53 = await _0x36f167(_0x2d48fe), _0x11e394 = _0x456f53[_0x30198d(0x383)]['pk'], _0x1c0285 = await _0x295f7e(_0x11e394), _0xbad12a = location[_0x30198d(0x40c)]['split']('/')[_0x30198d(0x2ff)](_0x3a3d3b => _0x3a3d3b[_0x30198d(0x2b2)] > 0x0 && _0x3a3d3b['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x1c0285[_0x30198d(0x1d8)][_0x30198d(0x364)][0x0][_0x30198d(0x1ff)][_0x30198d(0x25d)](_0x58a84e => {
                        _0x58a84e['id'] == _0xbad12a && (_0x3fcc92 = _0x58a84e['id']);
                    });
                    if (_0x3fcc92 == null) {
                        let _0x15f7d4 = _0x11fca4(_0x2d48fe);
                        _0x15f7d4[_0x30198d(0x395)](function (_0x30e5e8) {
                            const _0x22c8c9 = _0x30198d;
                            _0x374b21(this)[_0x22c8c9(0x240)]()[_0x22c8c9(0x2b2)] > 0x0 && (_0x3fcc92 = _0x1c0285[_0x22c8c9(0x1d8)][_0x22c8c9(0x364)][0x0][_0x22c8c9(0x1ff)][_0x30e5e8]['id']);
                        });
                    }
                    _0x3fcc92 == null && (_0x374b21(_0x30198d(0x196))[_0x30198d(0x395)](function (_0x5aed5) {
                        const _0x1efe8a = _0x30198d;
                        _0x374b21(this)[_0x1efe8a(0x3ac)](_0x1efe8a(0x3c3)) && (_0x374b21(this)[_0x1efe8a(0x240)]()[_0x1efe8a(0x2b2)] > 0x0 && (_0x3fcc92 = _0x1c0285[_0x1efe8a(0x1d8)][_0x1efe8a(0x364)][0x0][_0x1efe8a(0x1ff)][_0x5aed5]['id']));
                    }), _0x374b21(_0x30198d(0x2cb))['each'](function (_0x5b125f) {
                        const _0x3a97ea = _0x30198d;
                        _0x374b21(this)[_0x3a97ea(0x240)]()[_0x3a97ea(0x3ac)]('_ac3q') && (_0x3fcc92 = _0x1c0285[_0x3a97ea(0x1d8)][_0x3a97ea(0x364)][0x0][_0x3a97ea(0x1ff)][_0x5b125f]['id']);
                    }));
                    _0x3fcc92 == null && (_0x3fcc92 = location[_0x30198d(0x40c)][_0x30198d(0x30d)]('/')[_0x30198d(0x2ff)](_0x33fa43 => _0x33fa43['length'] > 0x0 && _0x33fa43['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x4c4347 = await _0x3d7dcf(_0x3fcc92);
                    _0x1aee20[_0x30198d(0x1fe)] && (_0x1e6e4d = _0x4c4347[_0x30198d(0x1ff)][0x0][_0x30198d(0x391)]);
                    _0x4c4347['status'] === 'ok' ? _0x496556(_0x4c4347['items'][0x0][_0x30198d(0x3c8)][_0x30198d(0x318)][0x0][_0x30198d(0x1f0)], _0x2d48fe, 'stories', _0x1e6e4d, _0x30198d(0x1b0), _0x3fcc92) : (_0x1aee20[_0x30198d(0x19f)] ? (_0x6cf809[_0x30198d(0x2d5)] = !![], _0x5c584d(!![], _0x2153dc)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x4c4347[_0x30198d(0x2c2)]), _0x42d816(_0x4c4347));
                    _0x3547f7(![]);
                    return;
                }
                if (_0x6cf809[_0x30198d(0x2e5)][_0x30198d(0x38d)][_0x2d48fe] && !_0x2153dc) {
                    _0x42d816('Fetch\x20from\x20memory\x20cache:', _0x2d48fe), _0x6cf809[_0x30198d(0x2e5)]['stories'][_0x2d48fe]['data'][_0x30198d(0x364)][0x0][_0x30198d(0x1ff)]['forEach'](_0x2b496b => {
                        const _0x7054c2 = _0x30198d;
                        _0x2b496b['id'] == _0x5f41fa && (_0x57c1e3 = _0x2b496b['display_url'], _0x1aee20[_0x7054c2(0x1fe)] && (_0x1e6e4d = _0x2b496b[_0x7054c2(0x3b2)], _0x3fcc92 = _0x2b496b['id']));
                    });
                    if (_0x57c1e3[_0x30198d(0x2b2)] == 0x0) {
                        _0x42d816(_0x30198d(0x351), _0x2d48fe), _0x5c584d(!![], !![]);
                        return;
                    }
                } else {
                    let _0x44b77e = await _0x36f167(_0x2d48fe), _0x4cb1be = _0x44b77e[_0x30198d(0x383)]['pk'], _0x3de54b = await _0x295f7e(_0x4cb1be);
                    _0x3de54b[_0x30198d(0x1d8)][_0x30198d(0x364)][0x0]['items'][_0x30198d(0x25d)](_0x13fa09 => {
                        const _0xa89b0e = _0x30198d;
                        _0x13fa09['id'] == _0x5f41fa && (_0x57c1e3 = _0x13fa09['display_url'], _0x1aee20[_0xa89b0e(0x1fe)] && (_0x1e6e4d = _0x13fa09['taken_at_timestamp'], _0x3fcc92 = _0x13fa09['id']));
                    });
                    if (_0x57c1e3[_0x30198d(0x2b2)] == 0x0) {
                        let _0x461d49 = _0x11fca4(_0x2d48fe);
                        _0x461d49['each'](function (_0x10be0d) {
                            const _0x1d686c = _0x30198d;
                            _0x374b21(this)[_0x1d686c(0x240)]()[_0x1d686c(0x2b2)] > 0x0 && (_0x57c1e3 = _0x3de54b[_0x1d686c(0x1d8)][_0x1d686c(0x364)][0x0]['items'][_0x10be0d][_0x1d686c(0x3e1)], _0x1aee20[_0x1d686c(0x1fe)] && (_0x1e6e4d = _0x3de54b[_0x1d686c(0x1d8)][_0x1d686c(0x364)][0x0][_0x1d686c(0x1ff)][_0x10be0d][_0x1d686c(0x3b2)], _0x3fcc92 = _0x3de54b[_0x1d686c(0x1d8)][_0x1d686c(0x364)][0x0][_0x1d686c(0x1ff)][_0x10be0d]['id']));
                        }), _0x57c1e3['length'] == 0x0 && (_0x374b21('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x30198d(0x395)](function (_0x140279) {
                            const _0x334d68 = _0x30198d;
                            _0x374b21(this)[_0x334d68(0x3ac)](_0x334d68(0x3c3)) && (_0x374b21(this)[_0x334d68(0x240)]()[_0x334d68(0x2b2)] > 0x0 && (_0x57c1e3 = _0x3de54b[_0x334d68(0x1d8)][_0x334d68(0x364)][0x0][_0x334d68(0x1ff)][_0x140279][_0x334d68(0x3e1)], _0x1aee20[_0x334d68(0x1fe)] && (_0x1e6e4d = _0x3de54b[_0x334d68(0x1d8)][_0x334d68(0x364)][0x0][_0x334d68(0x1ff)][_0x140279][_0x334d68(0x3b2)], _0x3fcc92 = _0x3de54b['data'][_0x334d68(0x364)][0x0]['items'][_0x140279]['id'])));
                        }), _0x374b21(_0x30198d(0x2cb))[_0x30198d(0x395)](function (_0x26da90) {
                            const _0x5730dd = _0x30198d;
                            _0x374b21(this)[_0x5730dd(0x240)]()['hasClass']('_ac3q') && (_0x57c1e3 = _0x3de54b['data']['reels_media'][0x0][_0x5730dd(0x1ff)][_0x26da90][_0x5730dd(0x3e1)], _0x1aee20[_0x5730dd(0x1fe)] && (_0x1e6e4d = _0x3de54b[_0x5730dd(0x1d8)]['reels_media'][0x0][_0x5730dd(0x1ff)][_0x26da90]['taken_at_timestamp'], _0x3fcc92 = _0x3de54b[_0x5730dd(0x1d8)][_0x5730dd(0x364)][0x0][_0x5730dd(0x1ff)][_0x26da90]['id']));
                        }));
                    }
                }
                _0x496556(_0x57c1e3, _0x2d48fe, _0x30198d(0x262), _0x1e6e4d, _0x22c889, _0x3fcc92), _0x6cf809['tempFetchRateLimit'] = ![], _0x3547f7(![]);
            } else {
                if (_0x374b21(_0x30198d(0x25f))[_0x30198d(0x266)]()[_0x30198d(0x2fe)]('video[class]')['length']) {
                    let _0x402145 = null;
                    _0x374b21('body\x20>\x20div\x20section._ac0a')[_0x30198d(0x2b2)] > 0x0 ? _0x402145 = _0x374b21(_0x30198d(0x1c3)) : (_0x402145 = _0x374b21('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x402145[_0x30198d(0x18f)](_0x30198d(0x354), _0x30198d(0x173)));
                    _0x402145['length'] === 0x0 && (_0x402145 = _0x374b21(_0x30198d(0x40d))[_0x30198d(0x266)]()[_0x30198d(0x266)]()[_0x30198d(0x266)]()['find']('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x402145[_0x30198d(0x18f)](_0x30198d(0x354), _0x30198d(0x173)));
                    _0x402145['length'] === 0x0 && (_0x402145 = _0x374b21('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x30198d(0x266)]()['parent']()[_0x30198d(0x266)]()[_0x30198d(0x2fe)](_0x30198d(0x2e1)), _0x402145[_0x30198d(0x18f)]('position', _0x30198d(0x173)));
                    if (_0x402145[_0x30198d(0x2b2)] === 0x0) {
                        let _0x15cef9 = _0x374b21(_0x30198d(0x2fd)), _0x30657e = 0x0;
                        _0x15cef9[_0x30198d(0x395)](function () {
                            const _0x5146de = _0x30198d;
                            _0x374b21(this)['width']() > _0x30657e && (_0x30657e = _0x374b21(this)[_0x5146de(0x1ee)](), _0x402145 = _0x374b21(this)[_0x5146de(0x240)](_0x5146de(0x2f4))[_0x5146de(0x2fb)]());
                        });
                    }
                    _0x402145 != null && (_0x402145[_0x30198d(0x2fb)]()[_0x30198d(0x18f)](_0x30198d(0x354), _0x30198d(0x173)), _0x402145['first']()[_0x30198d(0x3b7)](_0x30198d(0x17b) + _0x1e858f('THUMBNAIL_INTRO') + _0x30198d(0x36d) + _0x5a160e[_0x30198d(0x331)] + _0x30198d(0x402)));
                }
            }
        }
        function _0x4a746e(_0x598fc1) {
            return new Promise((_0x45d40e, _0x43ba35) => {
                const _0x3d6ddc = a0_0x2eb7;
                let _0x639cd4 = _0x3d6ddc(0x403) + _0x598fc1 + _0x3d6ddc(0x353);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x639cd4,
                    'onload': function (_0x23af60) {
                        const _0x243ebf = _0x3d6ddc;
                        try {
                            let _0x4fb1a4 = JSON[_0x243ebf(0x1a7)](_0x23af60[_0x243ebf(0x3d2)]);
                            _0x45d40e(_0x4fb1a4);
                        } catch (_0x2828a9) {
                            _0x42d816(_0x243ebf(0x2c0), _0x243ebf(0x34c), _0x2828a9[_0x243ebf(0x2c2)]), _0x43ba35(_0x2828a9);
                        }
                    },
                    'onerror': function (_0x14a0c7) {
                        const _0x365eec = _0x3d6ddc;
                        _0x42d816(_0x365eec(0x2c0), 'reject', _0x14a0c7), _0x43ba35(_0x14a0c7);
                    }
                });
            });
        }
        function _0x295f7e(_0x345b1f) {
            return new Promise((_0x2a805c, _0x5b71b4) => {
                const _0x46898e = a0_0x2eb7;
                let _0x116e34 = _0x46898e(0x2b1) + _0x345b1f + _0x46898e(0x353);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x116e34,
                    'onload': function (_0x121331) {
                        const _0x3ab961 = _0x46898e;
                        try {
                            let _0x23532b = JSON['parse'](_0x121331[_0x3ab961(0x3d2)]);
                            _0x42d816('getStories()', _0x23532b), _0x2a805c(_0x23532b);
                        } catch (_0x27ff22) {
                            _0x42d816(_0x3ab961(0x38f), _0x3ab961(0x34c), _0x27ff22[_0x3ab961(0x2c2)]), _0x5b71b4(_0x27ff22);
                        }
                    },
                    'onerror': function (_0x44b738) {
                        const _0x457df9 = _0x46898e;
                        _0x42d816(_0x457df9(0x38f), _0x457df9(0x34c), _0x44b738), _0x5b71b4(_0x44b738);
                    }
                });
            });
        }
        function _0x36f167(_0x4d9b53) {
            return new Promise((_0x293fd0, _0x246295) => {
                const _0x34b8a2 = a0_0x2eb7;
                let _0x4589e6 = _0x34b8a2(0x2c9) + _0x4d9b53;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x4589e6,
                    'onload': function (_0x5875a0) {
                        const _0x4c0b98 = _0x34b8a2;
                        let _0x45a79d = JSON[_0x4c0b98(0x1a7)](_0x5875a0[_0x4c0b98(0x3d2)]), _0xd7d15a = null;
                        _0x45a79d[_0x4c0b98(0x2c6)][_0x4c0b98(0x25d)](_0x11307b => {
                            const _0x4fc698 = _0x4c0b98;
                            _0x11307b[_0x4fc698(0x383)][_0x4fc698(0x206)]?.[_0x4fc698(0x17f)]() === _0x4d9b53?.[_0x4fc698(0x17f)]() && (_0xd7d15a = _0x11307b);
                        }), _0xd7d15a != null ? (_0x42d816(_0x4c0b98(0x27a), _0xd7d15a), _0x293fd0(_0xd7d15a)) : _0x378c59(_0x4d9b53)[_0x4c0b98(0x3d6)](_0x20b36a => {
                            _0x293fd0(_0x20b36a);
                        })[_0x4c0b98(0x179)](_0x2f5943 => {
                            const _0x2f700e = _0x4c0b98;
                            alert(_0x2f700e(0x1b5));
                        });
                    },
                    'onerror': function (_0x44b2f8) {
                        const _0x3818fe = _0x34b8a2;
                        _0x42d816(_0x3818fe(0x27a), _0x3818fe(0x34c), _0x44b2f8), _0x246295(_0x44b2f8);
                    }
                });
            });
        }
        function _0x378c59(_0x33bddb) {
            return new Promise((_0x22bfcc, _0x3e5e4c) => {
                const _0x4ac1c1 = a0_0x2eb7;
                let _0x2e2ee7 = _0x4ac1c1(0x2b7) + _0x33bddb;
                GM_xmlhttpRequest({
                    'method': _0x4ac1c1(0x1be),
                    'url': _0x2e2ee7,
                    'headers': { 'X-IG-App-ID': _0x3a976f() },
                    'onload': function (_0x20319f) {
                        const _0x2670d4 = _0x4ac1c1;
                        try {
                            let _0x5440ef = JSON[_0x2670d4(0x1a7)](_0x20319f['response']), _0x54f238 = _0x5440ef?.[_0x2670d4(0x1d8)]?.['user'];
                            if (_0x54f238 != null) {
                                let _0x170cce = _0x5440ef?.[_0x2670d4(0x1d8)];
                                _0x170cce[_0x2670d4(0x383)]['pk'] = _0x170cce['user']['id'], _0x42d816('getUserIdWithAgent()', _0x5440ef), _0x22bfcc(_0x170cce);
                            } else
                                _0x42d816(_0x2670d4(0x18b), _0x2670d4(0x34c), 'undefined'), _0x3e5e4c(_0x2670d4(0x29d));
                        } catch (_0x22bbc9) {
                            _0x42d816('getUserIdWithAgent()', _0x2670d4(0x34c), _0x22bbc9[_0x2670d4(0x2c2)]), _0x3e5e4c(_0x22bbc9);
                        }
                    },
                    'onerror': function (_0x4c0f50) {
                        const _0x2aaf11 = _0x4ac1c1;
                        _0x42d816(_0x2aaf11(0x18b), 'reject', _0x4c0f50), _0x3e5e4c(_0x4c0f50);
                    }
                });
            });
        }
        function _0x1842c3(_0x4c1b95) {
            return new Promise((_0x5c628, _0x2bb482) => {
                const _0x204333 = a0_0x2eb7;
                let _0x3e6b1c = 'https://i.instagram.com/api/v1/users/' + _0x4c1b95 + _0x204333(0x273);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3e6b1c,
                    'headers': { 'User-Agent': _0x204333(0x3f6) },
                    'onload': function (_0x5a272c) {
                        const _0x31f743 = _0x204333;
                        try {
                            let _0x3a6976 = JSON[_0x31f743(0x1a7)](_0x5a272c[_0x31f743(0x3d2)]);
                            _0x3a6976['status'] !== 'ok' ? (_0x42d816('getUserHighSizeProfile()', _0x31f743(0x34c), _0x3a6976), _0x2bb482(_0x31f743(0x387))) : (_0x42d816(_0x31f743(0x2ca), _0x3a6976), _0x5c628(_0x3a6976['user'][_0x31f743(0x282)]?.[_0x31f743(0x1f0)]));
                        } catch (_0x24462f) {
                            _0x42d816(_0x31f743(0x2ca), 'reject', _0x24462f), _0x2bb482(_0x24462f);
                        }
                    },
                    'onerror': function (_0x946280) {
                        const _0x855833 = _0x204333;
                        _0x42d816(_0x855833(0x2ca), _0x855833(0x34c), _0x946280), _0x2bb482(_0x946280);
                    }
                });
            });
        }
        function _0x6806e4(_0x2569c0) {
            return new Promise((_0x4aa199, _0x3f4c1b) => {
                const _0xb09227 = a0_0x2eb7;
                if (!_0x2569c0)
                    _0x3f4c1b(_0xb09227(0x39e));
                let _0x79db4 = _0x2569c0, _0x3e5e36 = _0xb09227(0x377) + _0x79db4 + _0xb09227(0x312);
                GM_xmlhttpRequest({
                    'method': _0xb09227(0x1be),
                    'url': _0x3e5e36,
                    'onload': function (_0x38eb49) {
                        const _0x2f6fff = _0xb09227;
                        try {
                            let _0x3e3631 = JSON[_0x2f6fff(0x1a7)](_0x38eb49[_0x2f6fff(0x3d2)]);
                            _0x42d816('getPostOwner()', _0x3e3631), _0x4aa199(_0x3e3631['data'][_0x2f6fff(0x1b9)][_0x2f6fff(0x3a9)]['username']);
                        } catch (_0x5dab96) {
                            _0x42d816('getPostOwner()', _0x2f6fff(0x34c), _0x5dab96[_0x2f6fff(0x2c2)]), _0x3f4c1b(_0x5dab96);
                        }
                    },
                    'onerror': function (_0x3d12be) {
                        const _0x258688 = _0xb09227;
                        _0x42d816(_0x258688(0x310), _0x258688(0x34c), _0x3d12be), _0x3f4c1b(_0x3d12be);
                    }
                });
            });
        }
        function _0x200275(_0x31fb4a) {
            return new Promise((_0x523740, _0x163ac4) => {
                const _0x48b682 = a0_0x2eb7;
                if (!_0x31fb4a)
                    _0x163ac4(_0x48b682(0x39e));
                let _0x1fddba = _0x31fb4a, _0x774493 = _0x48b682(0x377) + _0x1fddba + _0x48b682(0x312);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x774493,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x55177c) {
                        const _0x204872 = _0x48b682;
                        try {
                            let _0x12281d = JSON[_0x204872(0x1a7)](_0x55177c[_0x204872(0x3d2)]);
                            _0x42d816(_0x12281d), _0x12281d['status'] === _0x204872(0x323) ? (_0x42d816(_0x204872(0x3b1), _0x204872(0x32c), _0x1fddba), _0x519b82(_0x1fddba)[_0x204872(0x3d6)](_0x5581fd => {
                                const _0xb06164 = _0x204872;
                                _0x523740({
                                    'type': _0xb06164(0x2d4),
                                    'data': _0x5581fd[_0xb06164(0x251)][_0xb06164(0x1ff)][0x0]
                                });
                            })[_0x204872(0x179)](_0x4f4869 => {
                                _0x163ac4(_0x4f4869);
                            })) : _0x523740({
                                'type': _0x204872(0x39b),
                                'data': _0x12281d[_0x204872(0x1d8)]
                            });
                        } catch (_0x5b2e79) {
                            _0x42d816(_0x204872(0x1c7), 'reject', _0x5b2e79[_0x204872(0x2c2)]), _0x163ac4(_0x5b2e79);
                        }
                    },
                    'onerror': function (_0x1830a9) {
                        const _0x49dcfb = _0x48b682;
                        _0x42d816(_0x49dcfb(0x1c7), _0x49dcfb(0x34c), _0x1830a9), _0x163ac4(_0x1830a9);
                    }
                });
            });
        }
        function _0x519b82(_0x46f5ee) {
            return new Promise((_0x444a51, _0x302226) => {
                const _0x1866cc = a0_0x2eb7;
                if (!_0x46f5ee)
                    _0x302226('NOPATH');
                let _0x2a5096 = _0x46f5ee, _0x3be463 = _0x1866cc(0x36c) + _0x2a5096 + _0x1866cc(0x289);
                GM_xmlhttpRequest({
                    'method': _0x1866cc(0x1be),
                    'url': _0x3be463,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x3a976f()
                    },
                    'onload': function (_0x877d2c) {
                        const _0x59f9b6 = _0x1866cc;
                        try {
                            let _0x151628 = JSON[_0x59f9b6(0x1a7)](_0x877d2c[_0x59f9b6(0x3d2)]);
                            _0x42d816(_0x151628), _0x151628[_0x59f9b6(0x2d6)] === 'fail' ? (alert(_0x59f9b6(0x3ee) + _0x151628[_0x59f9b6(0x2c2)] + ':\x20' + _0x151628[_0x59f9b6(0x1c4)]), _0x42d816(_0x59f9b6(0x167) + _0x151628[_0x59f9b6(0x2c2)] + ':\x20' + _0x151628[_0x59f9b6(0x1c4)]), _0x302226(_0x877d2c)) : (_0x42d816(_0x59f9b6(0x1cd), _0x151628['data']), _0x444a51(_0x151628[_0x59f9b6(0x1d8)]));
                        } catch (_0x5cf5d1) {
                            _0x42d816(_0x59f9b6(0x1cd), _0x59f9b6(0x34c), _0x5cf5d1[_0x59f9b6(0x2c2)]), _0x302226(_0x5cf5d1);
                        }
                    },
                    'onerror': function (_0x7ecf13) {
                        const _0x32f454 = _0x1866cc;
                        _0x42d816(_0x32f454(0x1cd), _0x32f454(0x34c), _0x7ecf13), _0x302226(_0x7ecf13);
                    }
                });
            });
        }
        function _0x3d7dcf(_0x2824fe) {
            return new Promise((_0x4676a0, _0x42485a) => {
                const _0x55aa1a = a0_0x2eb7;
                let _0x1c77c5 = _0x55aa1a(0x1f4) + _0x2824fe + _0x55aa1a(0x273);
                if (_0x2824fe == null) {
                    alert(_0x55aa1a(0x3c2)), _0x42d816(_0x55aa1a(0x26e), _0x55aa1a(0x34c), _0x55aa1a(0x3c2)), _0x3547f7(![]), _0x42485a(-0x1);
                    return;
                }
                if (_0x3a976f() == null) {
                    alert(_0x55aa1a(0x40a)), _0x42d816(_0x55aa1a(0x26e), 'reject', 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x3547f7(![]), _0x42485a(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x1c77c5,
                    'headers': {
                        'User-Agent': window['navigator']['userAgent'],
                        'Accept': _0x55aa1a(0x1d2),
                        'X-IG-App-ID': _0x3a976f()
                    },
                    'onload': function (_0x50346d) {
                        const _0x4fa764 = _0x55aa1a;
                        if (_0x50346d[_0x4fa764(0x357)] == _0x1c77c5) {
                            let _0x2ad21c = JSON[_0x4fa764(0x1a7)](_0x50346d[_0x4fa764(0x3d2)]);
                            _0x42d816('getMediaInfo()', _0x2ad21c), _0x4676a0(_0x2ad21c);
                        } else {
                            let _0x6baf17 = new URL(_0x50346d[_0x4fa764(0x357)]);
                            _0x6baf17[_0x4fa764(0x40c)][_0x4fa764(0x31f)](_0x4fa764(0x26a)) ? (_0x42d816('getMediaInfo()', 'reject', _0x4fa764(0x2fc)), alert(_0x4fa764(0x2fc))) : (_0x42d816('getMediaInfo()', _0x4fa764(0x34c), _0x4fa764(0x405) + _0x50346d['finalUrl'] + '\x22'), alert(_0x4fa764(0x405) + _0x50346d[_0x4fa764(0x357)] + '\x22')), _0x3547f7(![]), _0x42485a(-0x1);
                        }
                    },
                    'onerror': function (_0x1e3b67) {
                        const _0x5b7352 = _0x55aa1a;
                        _0x42d816(_0x5b7352(0x26e), _0x5b7352(0x34c), _0x1e3b67), _0x4676a0(_0x1e3b67);
                    }
                });
            });
        }
        function _0x539213(_0x57051e) {
            const _0x1e7234 = _0x38a4e7;
            let _0x2b2bc7 = new URL(_0x57051e), _0x23ad4b = _0x2b2bc7?.['searchParams']?.[_0x1e7234(0x2a7)]('ig_cache_key')?.[_0x1e7234(0x30d)]('.')['at'](0x0);
            return _0x23ad4b ? atob(_0x23ad4b) : null;
        }
        function _0x3a976f() {
            const _0x5dcfef = _0x38a4e7;
            let _0x5f15d3 = null;
            return _0x374b21(_0x5dcfef(0x379))['each'](function () {
                const _0x5a6789 = _0x5dcfef, _0x1aaf50 = /"APP_ID":"([0-9]+)"/ig, _0x34e85c = _0x374b21(this)[_0x5a6789(0x32a)]()[_0x5a6789(0x39f)](_0x1aaf50);
                _0x34e85c != null && _0x5f15d3 == null && (_0x5f15d3 = [..._0x374b21(this)[_0x5a6789(0x32a)]()[_0x5a6789(0x2ea)](_0x1aaf50)]);
            }), _0x5f15d3 ? _0x5f15d3['at'](0x0)['at'](-0x1) : null;
        }
        function _0x3547f7(_0x1ae816) {
            const _0x3f8790 = _0x38a4e7;
            _0x1ae816 ? (_0x374b21(_0x3f8790(0x264))['removeClass'](_0x3f8790(0x327)), _0x374b21(_0x3f8790(0x264))[_0x3f8790(0x18f)](_0x3f8790(0x3df), _0x3f8790(0x2a6))) : (_0x374b21('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x3f8790(0x2e3)]('x1s85apg'), _0x374b21(_0x3f8790(0x264))['css']('z-index', ''));
        }
        function _0x11fca4(_0x276f77) {
            const _0x2fb00b = _0x38a4e7;
            let _0xe6f032 = _0x374b21(_0x2fb00b(0x322) + _0x276f77 + _0x2fb00b(0x1ed))[_0x2fb00b(0x2ff)](function () {
                const _0x1e5366 = _0x2fb00b;
                return _0x374b21(this)[_0x1e5366(0x240)]()['length'] === 0x0 && _0x374b21(this)[_0x1e5366(0x2fe)]('svg')[_0x1e5366(0x2b2)] === 0x0 && _0x374b21(this)[_0x1e5366(0x32a)]()?.[_0x1e5366(0x17f)]() === _0x276f77?.['toLowerCase']();
            })[_0x2fb00b(0x174)](_0x2fb00b(0x208))['filter'](function () {
                const _0x322f2e = _0x2fb00b;
                return _0x374b21(this)[_0x322f2e(0x32a)]()?.[_0x322f2e(0x17f)]() !== _0x276f77?.[_0x322f2e(0x17f)]();
            })['filter'](function () {
                const _0x27c6be = _0x2fb00b;
                return _0x374b21(this)['children']()[_0x27c6be(0x2b2)] > 0x1;
            })[_0x2fb00b(0x2fb)]();
            return _0xe6f032[_0x2fb00b(0x2b2)] === 0x0 && (_0xe6f032 = _0x374b21('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x276f77 + '\x22]')['filter'](function () {
                const _0x3ed67a = _0x2fb00b;
                return _0x374b21(this)[_0x3ed67a(0x2fe)](_0x3ed67a(0x2b9))[_0x3ed67a(0x2b2)] > 0x0;
            })[_0x2fb00b(0x174)](_0x2fb00b(0x208))[_0x2fb00b(0x2ff)](function () {
                const _0x2e90b0 = _0x2fb00b;
                return _0x374b21(this)[_0x2e90b0(0x32a)]()?.[_0x2e90b0(0x17f)]() !== _0x276f77?.['toLowerCase']();
            })[_0x2fb00b(0x2ff)](function () {
                const _0x388ab1 = _0x2fb00b;
                return _0x374b21(this)[_0x388ab1(0x240)]()[_0x388ab1(0x2b2)] > 0x1;
            })['first']()), _0xe6f032['children']()[_0x2fb00b(0x2ff)](function () {
                return _0x374b21(this)['height']() < 0xa;
            })[_0x2fb00b(0x2fb)]()[_0x2fb00b(0x240)]();
        }
        function _0x46fc51(_0x5c4778, _0x1a574a) {
            const _0x5cecea = _0x38a4e7;
            _0x374b21(_0x5cecea(0x194))['length'] ? (_0x374b21(_0x5cecea(0x1ae))[_0x5cecea(0x32a)](_0x5c4778 + '/' + _0x1a574a), _0x5c4778 >= _0x1a574a && _0x374b21(_0x5cecea(0x194))['fadeOut'](0xfa, function () {
                const _0x561c1d = _0x5cecea;
                _0x374b21(this)[_0x561c1d(0x255)]();
            })) : _0x374b21(_0x5cecea(0x38c))[_0x5cecea(0x3b7)](_0x5cecea(0x371) + _0x5c4778 + '/' + _0x1a574a + '</span></div>');
        }
        function _0x1e990c(_0x5d37c0, _0xc14c96) {
            const _0x3c6f78 = _0x38a4e7;
            let _0x546fa7 = _0x5d37c0 ? 'hidden' : '';
            _0x374b21('body')[_0x3c6f78(0x3b7)](_0x3c6f78(0x286) + _0x546fa7 + _0x3c6f78(0x20f)), _0x374b21(_0x3c6f78(0x207))[_0x3c6f78(0x3b7)](_0x3c6f78(0x1df) + _0x1e858f(_0x3c6f78(0x2b4)) + _0x3c6f78(0x1c8) + GM_info[_0x3c6f78(0x231)]['version'] + _0x3c6f78(0x315) + _0x5a160e[_0x3c6f78(0x2b4)] + _0x3c6f78(0x260)), _0xc14c96 && (_0x374b21(_0x3c6f78(0x207))[_0x3c6f78(0x3b7)](_0x3c6f78(0x166)), _0x374b21(_0x3c6f78(0x1b2))[_0x3c6f78(0x3b7)](_0x3c6f78(0x401) + _0x1e858f('BATCH_DOWNLOAD_SELECTED') + _0x3c6f78(0x268)), _0x374b21(_0x3c6f78(0x1b2))[_0x3c6f78(0x3b7)](_0x3c6f78(0x394) + _0x1e858f(_0x3c6f78(0x1fc)) + '</button>'), _0x374b21(_0x3c6f78(0x207))[_0x3c6f78(0x3b7)](_0x3c6f78(0x3ba) + _0x1e858f(_0x3c6f78(0x1ca)) + _0x3c6f78(0x188)));
        }
        function _0x2a02ce(_0x5ba685) {
            const _0x16625f = _0x38a4e7;
            _0x374b21(_0x16625f(0x3c6))[_0x16625f(0x2b2)] && (_0x5ba685 ? _0x374b21(_0x16625f(0x3c6))['addClass']('hidden') : _0x374b21(_0x16625f(0x3c6))[_0x16625f(0x393)](_0x16625f(0x3fb)));
        }
        function _0x496556(_0x5de65c, _0x77cf6, _0x26065f, _0x119f77, _0x16f1cc, _0x5b2c77) {
            return new Promise(_0x31351b => {
                setTimeout(() => {
                    const _0x2ce6d3 = a0_0x2eb7;
                    _0x3547f7(!![]), fetch(_0x5de65c)[_0x2ce6d3(0x3d6)](_0x18355e => {
                        const _0x34d57a = _0x2ce6d3;
                        return _0x18355e[_0x34d57a(0x2d9)]()[_0x34d57a(0x3d6)](_0x29bf92 => {
                            _0x3547f7(![]), _0x42103d(_0x5de65c, _0x29bf92, _0x77cf6, _0x26065f, _0x119f77, _0x16f1cc, _0x5b2c77), _0x31351b(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x42103d(_0x2151b6, _0x4efbdd, _0x349784, _0x2b083f, _0x543897, _0x34d206, _0x27e306) {
            const _0x32389a = _0x38a4e7;
            _0x543897 = parseInt(_0x543897[_0x32389a(0x386)]()[_0x32389a(0x200)](0xd, '0'));
            _0x1aee20[_0x32389a(0x1fe)] && (_0x543897 = parseInt(_0x543897['toString']()[_0x32389a(0x200)](0xd, '0')));
            const _0x13a85d = new Date(_0x543897), _0x12f351 = document[_0x32389a(0x2d8)]('a'), _0x25356d = new URL(_0x2151b6)[_0x32389a(0x40c)][_0x32389a(0x30d)]('/')['at'](-0x1)[_0x32389a(0x30d)]('.')['slice'](0x0, -0x1)[_0x32389a(0x1f9)]('.'), _0x4c0cc0 = _0x13a85d[_0x32389a(0x3f4)]()[_0x32389a(0x386)](), _0x148d28 = (_0x13a85d[_0x32389a(0x29c)]() + 0x1)[_0x32389a(0x386)]()[_0x32389a(0x25a)](0x2, '0'), _0x2925cf = _0x13a85d[_0x32389a(0x32f)]()[_0x32389a(0x386)]()[_0x32389a(0x25a)](0x2, '0'), _0x53c009 = _0x13a85d[_0x32389a(0x21b)]()[_0x32389a(0x386)]()[_0x32389a(0x25a)](0x2, '0'), _0x5cda5c = _0x13a85d[_0x32389a(0x344)]()[_0x32389a(0x386)]()[_0x32389a(0x25a)](0x2, '0'), _0x51c88c = _0x13a85d['getSeconds']()[_0x32389a(0x386)]()[_0x32389a(0x25a)](0x2, '0');
            var _0x568cd5 = _0x6cf809[_0x32389a(0x2dd)]['toUpperCase'](), _0x569c62 = _0x27e306 ?? '', _0x30af08 = {
                    '%USERNAME%': _0x349784,
                    '%SOURCE_TYPE%': _0x2b083f,
                    '%SHORTCODE%': _0x569c62,
                    '%YEAR%': _0x4c0cc0,
                    '%2-YEAR%': _0x4c0cc0[_0x32389a(0x184)](-0x2),
                    '%MONTH%': _0x148d28,
                    '%DAY%': _0x2925cf,
                    '%HOUR%': _0x53c009,
                    '%MINUTE%': _0x5cda5c,
                    '%SECOND%': _0x51c88c,
                    '%ORIGINAL_NAME%': _0x25356d,
                    '%ORIGINAL_NAME_FIRST%': _0x25356d[_0x32389a(0x30d)]('_')['at'](0x0)
                };
            _0x568cd5 = _0x568cd5[_0x32389a(0x385)](/%[\w\-]+%/g, function (_0x1cf959) {
                return _0x30af08[_0x1cf959] || _0x1cf959;
            });
            const _0x2306ac = _0x349784 + '_' + _0x25356d + '.' + _0x34d206;
            _0x12f351[_0x32389a(0x408)] = URL[_0x32389a(0x1a9)](_0x4efbdd), _0x12f351[_0x32389a(0x2cc)](_0x32389a(0x24a), _0x1aee20[_0x32389a(0x1e9)] ? _0x568cd5 + '.' + _0x34d206 : _0x2306ac), _0x12f351['click'](), _0x12f351[_0x32389a(0x255)]();
        }
        async function _0x1b29c0(_0xec48ff, _0x3ba8ff) {
            const _0x28e6aa = _0x38a4e7;
            let _0x494d7a = new Date()['getTime'](), _0x3b1460 = Math[_0x28e6aa(0x235)](_0x494d7a / 0x3e8), _0x23a881 = _0x374b21(_0xec48ff)['attr'](_0x28e6aa(0x253)) ? _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)]('data-username') : _0x6cf809['GL_username'];
            !_0x23a881 && _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x3f5)) && (_0x42d816('catching\x20owner\x20name\x20from\x20shortcode:', _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)]('data-href')), _0x23a881 = await _0x6806e4(_0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x3f5)))[_0x28e6aa(0x179)](_0x2b8f11 => {
                const _0x3c9d6a = _0x28e6aa;
                _0x42d816(_0x3c9d6a(0x3b6), _0x2b8f11[_0x3c9d6a(0x2c2)]);
            }), _0x23a881 == null && (_0x23a881 = _0x28e6aa(0x330)));
            _0x1aee20[_0x28e6aa(0x1fe)] && _0x374b21(_0xec48ff)['attr'](_0x28e6aa(0x3d7)) && (_0x3b1460 = parseInt(_0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x3d7))));
            if (_0x1aee20[_0x28e6aa(0x171)]) {
                _0x3547f7(!![]);
                let _0xc583b5 = await _0x3d7dcf(_0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x30b)));
                _0x3547f7(![]);
                if (_0xc583b5[_0x28e6aa(0x2d6)] === 'ok') {
                    var _0x355145 = null;
                    _0xc583b5['items'][0x0][_0x28e6aa(0x21a)] ? _0x355145 = _0xc583b5[_0x28e6aa(0x1ff)][0x0]['video_versions'][0x0]['url'] : (_0xc583b5[_0x28e6aa(0x1ff)][0x0]['image_versions2'][_0x28e6aa(0x318)][_0x28e6aa(0x1b1)](function (_0x2b488a, _0x2290ef) {
                        const _0x393597 = _0x28e6aa;
                        let _0x23d575 = new URL(_0x2b488a[_0x393597(0x1f0)])[_0x393597(0x2f6)][_0x393597(0x2a7)](_0x393597(0x170)), _0x286bdb = new URL(_0x2290ef[_0x393597(0x1f0)])[_0x393597(0x2f6)][_0x393597(0x2a7)]('stp');
                        if (_0x23d575 && _0x286bdb) {
                            if (_0x23d575[_0x393597(0x2b2)] > _0x286bdb[_0x393597(0x2b2)])
                                return 0x1;
                            if (_0x23d575[_0x393597(0x2b2)] < _0x286bdb[_0x393597(0x2b2)])
                                return -0x1;
                        } else {
                            if (_0x2b488a[_0x393597(0x1ee)] < _0x2290ef[_0x393597(0x1ee)])
                                return 0x1;
                            if (_0x2b488a[_0x393597(0x1ee)] > _0x2290ef['width'])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x355145 = _0xc583b5[_0x28e6aa(0x1ff)][0x0][_0x28e6aa(0x3c8)][_0x28e6aa(0x318)][0x0][_0x28e6aa(0x1f0)]);
                    if (_0x3ba8ff) {
                        let _0x223a18 = new URL(_0x355145);
                        _0x223a18['host'] = _0x28e6aa(0x2bb), _0xb6f68e(_0x223a18[_0x28e6aa(0x408)]);
                    } else
                        _0x496556(_0x355145, _0x23a881, _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x165)), _0x3b1460, _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x22c)), _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)]('data-path'));
                } else {
                    if (_0x1aee20[_0x28e6aa(0x19f)]) {
                        if (_0x3ba8ff) {
                            let _0x35a201 = new URL(_0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x2d2)));
                            _0x35a201['host'] = _0x28e6aa(0x2bb), _0xb6f68e(_0x35a201[_0x28e6aa(0x408)]);
                        } else
                            _0x496556(_0x374b21(_0xec48ff)['attr'](_0x28e6aa(0x2d2)), _0x23a881, _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x165)), _0x3b1460, _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x22c)), _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x3f5)));
                    } else
                        alert(_0x28e6aa(0x1fd) + _0xc583b5[_0x28e6aa(0x2c2)]);
                    _0x42d816(_0xc583b5);
                }
            } else
                _0x496556(_0x374b21(_0xec48ff)['attr'](_0x28e6aa(0x2d2)), _0x23a881, _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)]('data-name'), _0x3b1460, _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)](_0x28e6aa(0x22c)), _0x374b21(_0xec48ff)[_0x28e6aa(0x24d)]('data-path'));
        }
        function _0xb556f3() {
            const _0x3bd671 = _0x38a4e7;
            for (let _0x979a2c of _0x6cf809[_0x3bd671(0x27d)]) {
                _0x42d816(_0x3bd671(0x23c), _0x979a2c), GM_unregisterMenuCommand(_0x979a2c);
            }
            _0x6cf809[_0x3bd671(0x27d)]['push'](GM_registerMenuCommand(_0x1e858f(_0x3bd671(0x1f7)), () => {
                _0x393a71();
            }, { 'accessKey': 'w' })), _0x6cf809[_0x3bd671(0x27d)][_0x3bd671(0x3dc)](GM_registerMenuCommand(_0x1e858f(_0x3bd671(0x181)), () => {
                const _0x57ba76 = _0x3bd671;
                GM_openInTab(_0x57ba76(0x412), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x6cf809[_0x3bd671(0x27d)]['push'](GM_registerMenuCommand(_0x1e858f(_0x3bd671(0x244)), () => {
                _0x31de16();
            }, { 'accessKey': 'z' })), _0x6cf809[_0x3bd671(0x27d)][_0x3bd671(0x3dc)](GM_registerMenuCommand(_0x1e858f('FEEDBACK'), () => {
                _0x2cb65c();
            }, { 'accessKey': 'f' })), _0x6cf809[_0x3bd671(0x27d)][_0x3bd671(0x3dc)](GM_registerMenuCommand(_0x1e858f(_0x3bd671(0x18c)), () => {
                _0xae67f6();
            }, { 'accessKey': 'c' })), _0x6cf809['registerMenuIds'][_0x3bd671(0x3dc)](GM_registerMenuCommand(_0x1e858f(_0x3bd671(0x3b9)), () => {
                _0x2d6338();
            }, { 'accessKey': 'r' }));
        }
        function _0x208731(_0x17181b) {
            const _0x31ce5d = _0x38a4e7;
            if (!_0x1aee20[_0x31ce5d(0x2bc)])
                return;
            const _0x1b02f8 = GM_getValue(_0x31ce5d(0x2ed)) ?? new Date()[_0x31ce5d(0x249)](), _0x3ef415 = new Date()[_0x31ce5d(0x249)]();
            _0x3ef415 > parseInt(_0x1b02f8) + _0x17181b * 0x3e8 && (GM_setValue('G_CHECK_TIMESTAMP', new Date()['getTime']()), _0xae67f6());
        }
        function _0xae67f6() {
            const _0x42e949 = _0x38a4e7, _0x3d181c = GM_info[_0x42e949(0x231)][_0x42e949(0x2ba)], _0x21e384 = _0x42e949(0x243);
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x21e384,
                'onload': function (_0x11fe1e) {
                    const _0xf6564c = _0x42e949, _0x1acfe0 = _0x11fe1e['responseText'], _0x3ea75d = _0x1acfe0[_0xf6564c(0x39f)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x3ea75d && _0x3ea75d[0x1]) {
                        const _0x25a02e = _0x3ea75d[0x1];
                        _0x42d816(_0xf6564c(0x3c0), _0x3d181c, '|', _0xf6564c(0x36b), _0x25a02e), _0x25a02e !== _0x3d181c && typeof this['updatenotification'] === _0xf6564c(0x29d) ? (this['updatenotification'] = null, GM_notification({
                            'text': _0x1e858f('NOTICE_UPDATE_CONTENT'),
                            'title': _0x1e858f(_0xf6564c(0x3da)),
                            'tag': _0xf6564c(0x2ce),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0xf6564c(0x1c9),
                            'onclick': _0x509477 => {
                                const _0x373bbf = _0xf6564c;
                                _0x509477?.[_0x373bbf(0x36e)]();
                                var _0x244eae = GM_openInTab(GM_info[_0x373bbf(0x231)][_0x373bbf(0x340)]);
                                setTimeout(() => {
                                    const _0x411167 = _0x373bbf;
                                    _0x244eae[_0x411167(0x2a9)]();
                                }, 0xfa);
                            }
                        })) : _0x42d816(_0xf6564c(0x413));
                    } else
                        console[_0xf6564c(0x2d0)]('Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.');
                }
            });
        }
        function _0x393a71() {
            const _0x449204 = _0x38a4e7;
            _0x374b21(_0x449204(0x3c6))[_0x449204(0x255)](), _0x1e990c(), _0x374b21(_0x449204(0x216))[_0x449204(0x32a)]('Preference\x20Settings'), _0x374b21(_0x449204(0x3ab))[_0x449204(0x3b7)](_0x449204(0x40e));
            for (let _0x1e1447 in _0x4f55d7) {
                _0x374b21(_0x449204(0x20e))[_0x449204(0x3b7)](_0x449204(0x295) + _0x1e1447 + '\x22\x20' + (_0x6cf809[_0x449204(0x1e8)] == _0x1e1447 ? _0x449204(0x368) : '') + '>' + _0x4f55d7[_0x1e1447] + _0x449204(0x258));
            }
            for (let _0x17405d in _0x1aee20) {
                _0x374b21(_0x449204(0x19d))[_0x449204(0x3b7)](_0x449204(0x221) + (_0x2f3c64[_0x449204(0x374)](_0x17405d) ? _0x449204(0x3a0) : '') + _0x449204(0x373) + _0x1e858f(_0x17405d + _0x449204(0x16d)) + '\x22\x20data-ih-locale-title=\x22' + (_0x17405d + '_INTRO') + _0x449204(0x272) + _0x17405d + '\x22>' + _0x1e858f(_0x17405d) + _0x449204(0x31b) + _0x17405d + _0x449204(0x256) + (_0x1aee20[_0x17405d] === !![] ? _0x449204(0x29f) : '') + _0x449204(0x3a8)), _0x17405d === _0x449204(0x2bd) && _0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22' + _0x17405d + '\x22]')[_0x449204(0x266)](_0x449204(0x192))['on'](_0x449204(0x1d3), function (_0x4e212a) {
                    const _0x1d1ad1 = _0x449204;
                    _0x4e212a[_0x1d1ad1(0x36e)](), _0x374b21(this)[_0x1d1ad1(0x2fe)](_0x1d1ad1(0x3d5))[_0x1d1ad1(0x2b2)] === 0x0 && (_0x374b21(this)[_0x1d1ad1(0x3b7)]('<div\x20id=\x22tempWrapper\x22></div>'), _0x374b21(this)[_0x1d1ad1(0x240)]('#tempWrapper')[_0x1d1ad1(0x3b7)](_0x1d1ad1(0x33a) + _0x6cf809[_0x1d1ad1(0x3a4)] + _0x1d1ad1(0x22b)), _0x374b21(this)[_0x1d1ad1(0x240)](_0x1d1ad1(0x3d5))[_0x1d1ad1(0x3b7)](_0x1d1ad1(0x33a) + _0x6cf809[_0x1d1ad1(0x3a4)] + _0x1d1ad1(0x1fa)), _0x374b21(this)['children']('#tempWrapper')[_0x1d1ad1(0x3b7)]('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x5a160e[_0x1d1ad1(0x2b4)] + _0x1d1ad1(0x402)));
                }), _0x17405d === _0x449204(0x1e9) && _0x374b21(_0x449204(0x285) + _0x17405d + '\x22]')[_0x449204(0x266)](_0x449204(0x192))['on']('contextmenu', function (_0x363574) {
                    const _0x587286 = _0x449204;
                    _0x363574[_0x587286(0x36e)](), _0x374b21(this)[_0x587286(0x2fe)](_0x587286(0x3d5))['length'] === 0x0 && (_0x374b21(this)[_0x587286(0x3b7)](_0x587286(0x2a4)), _0x374b21(this)[_0x587286(0x240)](_0x587286(0x3d5))[_0x587286(0x3b7)](_0x587286(0x17a) + _0x6cf809[_0x587286(0x2dd)] + '\x22\x20/>'), _0x374b21(this)[_0x587286(0x240)](_0x587286(0x3d5))[_0x587286(0x3b7)](_0x587286(0x37f) + _0x5a160e['CLOSE'] + '</div>'));
                });
            }
        }
        function _0x31de16() {
            const _0x5703fa = _0x38a4e7;
            _0x374b21(_0x5703fa(0x3c6))['remove'](), _0x1e990c(), _0x374b21('.IG_POPUP_DIG\x20#post_info')[_0x5703fa(0x32a)](_0x5703fa(0x298)), _0x374b21(_0x5703fa(0x19d))[_0x5703fa(0x3b7)](_0x5703fa(0x35d)), _0x374b21(_0x5703fa(0x19d))[_0x5703fa(0x3b7)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append'](_0x5703fa(0x230) + _0x1e858f(_0x5703fa(0x3ca)) + _0x5703fa(0x1dc)), _0x374b21(_0x5703fa(0x2ec))['append'](_0x5703fa(0x24f) + _0x1e858f('SELECT_AND_COPY') + _0x5703fa(0x1dc)), _0x374b21(_0x5703fa(0x2ec))[_0x5703fa(0x3b7)](_0x5703fa(0x321) + _0x1e858f(_0x5703fa(0x1a3)) + _0x5703fa(0x209)), _0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append'](_0x5703fa(0x325) + _0x1e858f(_0x5703fa(0x2cd)) + _0x5703fa(0x1dc)), _0x374b21(_0x5703fa(0x2ec))['append'](_0x5703fa(0x2f1) + _0x1e858f(_0x5703fa(0x19b)) + _0x5703fa(0x1dc));
        }
        function _0x2cb65c() {
            const _0x4d0812 = _0x38a4e7;
            _0x374b21(_0x4d0812(0x3c6))[_0x4d0812(0x255)](), _0x1e990c(), _0x374b21(_0x4d0812(0x216))[_0x4d0812(0x32a)](_0x4d0812(0x1d5)), _0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x4d0812(0x3b7)](_0x4d0812(0x277)), _0x374b21(_0x4d0812(0x2ec))[_0x4d0812(0x3b7)](_0x4d0812(0x3ec) + _0x1e858f('REPORT_FORK') + '</a></button>'), _0x374b21(_0x4d0812(0x2ec))[_0x4d0812(0x3b7)](_0x4d0812(0x325) + _0x1e858f(_0x4d0812(0x2cd)) + '</a></button>'), _0x374b21(_0x4d0812(0x2ec))['append'](_0x4d0812(0x2f1) + _0x1e858f(_0x4d0812(0x19b)) + '</a></button>');
        }
        function _0xb6f68e(_0x512b64) {
            const _0x125e12 = _0x38a4e7;
            var _0x2f7990 = document[_0x125e12(0x2d8)]('a');
            _0x2f7990[_0x125e12(0x408)] = _0x512b64, _0x2f7990[_0x125e12(0x239)] = _0x125e12(0x287), document['body'][_0x125e12(0x17d)](_0x2f7990), _0x2f7990[_0x125e12(0x3b5)](), _0x2f7990['remove']();
        }
        function _0x2d6338() {
            const _0x2850da = _0x38a4e7;
            clearInterval(_0x6cf809['GL_repeat']), _0x6cf809[_0x2850da(0x1f3)][_0x2850da(0x25d)](_0x2ca022 => {
                const _0x3acd3b = _0x2850da;
                _0x2ca022[_0x3acd3b(0x404)]['forEach'](_0x467cc1 => {
                    const _0x2ff3f1 = _0x3acd3b;
                    _0x374b21(_0x2ca022['element'])[_0x2ff3f1(0x24e)](_0x2ff3f1(0x3b5), _0x467cc1);
                });
            }), _0x6cf809[_0x2850da(0x1f3)] = [], _0x374b21(_0x2850da(0x1e1))['remove'](), _0x374b21('.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL')[_0x2850da(0x255)](), _0x374b21(_0x2850da(0x2b6))[_0x2850da(0x3d3)](_0x2850da(0x3e0)), _0x6cf809[_0x2850da(0x30f)] = ![], _0x6cf809[_0x2850da(0x2a2)] = ![], _0x6cf809[_0x2850da(0x225)] = location[_0x2850da(0x408)], _0x6cf809[_0x2850da(0x3f0)][_0x2850da(0x1c5)](), _0x42d816('main\x20timer\x20re-register\x20completed');
        }
        function _0x42d816(..._0x58ae42) {
            const _0x3a9c47 = _0x38a4e7;
            var _0x47bb0c = new Date();
            _0x6cf809[_0x3a9c47(0x199)][_0x3a9c47(0x3dc)]({
                'time': _0x47bb0c[_0x3a9c47(0x249)](),
                'content': [..._0x58ae42]
            }), _0x6cf809[_0x3a9c47(0x199)]['length'] > 0x3e8 && (_0x6cf809[_0x3a9c47(0x199)] = [
                {
                    'time': _0x47bb0c['getTime'](),
                    'content': [_0x3a9c47(0x3ef)]
                },
                ..._0x6cf809[_0x3a9c47(0x199)]['slice'](-0x3e7)
            ]), console['log']('[' + _0x47bb0c['toISOString']() + ']', ..._0x58ae42);
        }
        function _0x262318() {
            const _0x647a09 = _0x38a4e7;
            for (let _0x3abca8 in _0x1aee20) {
                GM_getValue(_0x3abca8) != null && typeof GM_getValue(_0x3abca8) === _0x647a09(0x2b5) && (_0x1aee20[_0x3abca8] = GM_getValue(_0x3abca8), _0x3abca8 === 'MODIFY_VIDEO_VOLUME' && GM_getValue(_0x3abca8) !== !![] && (_0x6cf809['videoVolume'] = 0x1));
            }
        }
        function _0x3a5d0c(_0x56a5ab, _0x5411ba, _0x7e917c, _0x16b916 = '') {
            const _0x595faa = _0x38a4e7;
            _0x5411ba[_0x595faa(0x2fe)](_0x595faa(0x350))['length'] === 0x0 ? (_0x5411ba[_0x595faa(0x3b7)](_0x595faa(0x280) + _0x16b916 + _0x595faa(0x1cb)), _0x5411ba[_0x595faa(0x2fe)](_0x595faa(0x350))['append']('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x6cf809[_0x595faa(0x3a4)] + _0x595faa(0x29e)), _0x5411ba[_0x595faa(0x2fe)](_0x595faa(0x241))[_0x595faa(0x24d)](_0x595faa(0x290), _0x595faa(0x2aa) + (_0x6cf809[_0x595faa(0x3a4)] * 0x64 + '%')), _0x5411ba[_0x595faa(0x2fe)]('div.volume_slider\x20input')['on']('input', function () {
                const _0x157435 = _0x595faa;
                var _0x8dbc9e = _0x374b21(this)['val']() * 0x64 + '%';
                _0x6cf809[_0x157435(0x3a4)] = _0x374b21(this)[_0x157435(0x1fb)](), GM_setValue('G_VIDEO_VOLUME', _0x374b21(this)['val']()), _0x374b21(this)[_0x157435(0x24d)](_0x157435(0x290), _0x157435(0x2aa) + _0x8dbc9e), _0x56a5ab['each'](function () {
                    const _0x402d23 = _0x157435;
                    _0x42d816('(' + _0x7e917c + ')', _0x402d23(0x183)), this['volume'] = _0x6cf809['videoVolume'];
                });
            }), _0x5411ba[_0x595faa(0x2fe)](_0x595faa(0x241))['on'](_0x595faa(0x380), function () {
                const _0x540acf = _0x595faa;
                var _0x47084b = _0x6cf809[_0x540acf(0x3a4)] * 0x64 + '%';
                _0x374b21(this)[_0x540acf(0x24d)](_0x540acf(0x290), _0x540acf(0x2aa) + _0x47084b), _0x374b21(this)[_0x540acf(0x1fb)](_0x6cf809[_0x540acf(0x3a4)]), _0x56a5ab[_0x540acf(0x395)](function () {
                    const _0xaaaf31 = _0x540acf;
                    _0x42d816('(' + _0x7e917c + ')', _0xaaaf31(0x183)), this['volume'] = _0x6cf809[_0xaaaf31(0x3a4)];
                });
            }), _0x5411ba[_0x595faa(0x2fe)](_0x595faa(0x350))['on']('click', function (_0x140a6a) {
                const _0x808e9b = _0x595faa;
                _0x140a6a[_0x808e9b(0x396)](), _0x140a6a[_0x808e9b(0x36e)]();
            })) : _0x5411ba[_0x595faa(0x2fe)]('div.volume_slider')[_0x595faa(0x255)]();
        }
        function _0x2836da(_0xbd66a5) {
            const _0x57aa1f = _0x38a4e7;
            _0x39fc7a(), _0x374b21(_0x57aa1f(0x38c))[_0x57aa1f(0x3b7)](_0x57aa1f(0x347) + _0x5a160e[_0x57aa1f(0x2b4)] + _0x57aa1f(0x369));
            const _0x2a6807 = _0x374b21('#imageViewer'), _0x196383 = _0x374b21('#iv_header'), _0x2abd99 = _0x374b21(_0x57aa1f(0x2df)), _0x4b7101 = _0x374b21(_0x57aa1f(0x40b));
            _0x4b7101[_0x57aa1f(0x24d)](_0x57aa1f(0x21f), _0xbd66a5), _0x2a6807[_0x57aa1f(0x18f)](_0x57aa1f(0x32b), _0x57aa1f(0x2ae));
            let _0x26c6b3 = 0.75, _0x843ce5 = 0x0, _0x365e06 = 0x0, _0x438938 = ![], _0x57d0a9, _0x3bfcf9;
            _0x4b7101['on'](_0x57aa1f(0x278), () => {
                const _0x265f7a = _0x57aa1f;
                _0x843ce5 = (window['innerWidth'] - _0x4b7101[0x0][_0x265f7a(0x1ee)]) / 0x2, _0x365e06 = (window[_0x265f7a(0x18d)] - _0x4b7101[0x0][_0x265f7a(0x398)]) / 0x2, _0x16f5cc();
            }), _0x4b7101['on'](_0x57aa1f(0x203), _0x271b10 => {
                const _0x44c27b = _0x57aa1f;
                _0x271b10[_0x44c27b(0x36e)]();
            }), _0x4b7101['on'](_0x57aa1f(0x3b5), _0xa3eb2c => {
                const _0x5b56aa = _0x57aa1f;
                _0xa3eb2c[_0x5b56aa(0x36e)](), _0xa3eb2c[_0x5b56aa(0x396)]();
            }), _0x4b7101['on'](_0x57aa1f(0x204), _0xc605ed => {
                const _0x588b78 = _0x57aa1f;
                _0xc605ed['preventDefault'](), _0x26c6b3 += _0xc605ed[_0x588b78(0x3a6)]['deltaY'] > 0x0 ? -0.15 : 0.15, _0x26c6b3 = Math['min'](Math['max'](0.75, _0x26c6b3), 0x5), _0x16f5cc();
            }), _0x4b7101['on'](_0x57aa1f(0x1bb), _0xe61142 => {
                const _0x36876b = _0x57aa1f;
                _0x438938 = !![], _0x57d0a9 = _0xe61142[_0x36876b(0x20c)] - _0x843ce5, _0x3bfcf9 = _0xe61142['pageY'] - _0x365e06, _0x4b7101[_0x36876b(0x18f)](_0x36876b(0x1a8), _0x36876b(0x392));
            }), _0x4b7101['on'](_0x57aa1f(0x2d3), () => {
                const _0x5b392b = _0x57aa1f;
                _0x438938 = ![], _0x4b7101[_0x5b392b(0x18f)](_0x5b392b(0x1a8), _0x5b392b(0x3b0));
            }), _0x374b21(document)['on'](_0x57aa1f(0x1e5), _0x2aeb0e => {
                const _0x111c41 = _0x57aa1f;
                if (!_0x438938)
                    return;
                _0x2aeb0e[_0x111c41(0x36e)](), _0x843ce5 = _0x2aeb0e['pageX'] - _0x57d0a9, _0x365e06 = _0x2aeb0e[_0x111c41(0x329)] - _0x3bfcf9, _0x16f5cc();
            }), _0x2a6807['on'](_0x57aa1f(0x3b5), () => {
                _0x39fc7a();
            }), _0x2abd99['on'](_0x57aa1f(0x3b5), () => {
                _0x39fc7a();
            }), _0x196383['on'](_0x57aa1f(0x3b5), _0x3f831d => {
                const _0x51f307 = _0x57aa1f;
                _0x3f831d[_0x51f307(0x36e)](), _0x3f831d[_0x51f307(0x396)]();
            });
            function _0x16f5cc() {
                const _0x121204 = _0x57aa1f;
                _0x4b7101[_0x121204(0x18f)](_0x121204(0x2f3), _0x121204(0x1ce) + _0x26c6b3 + ')'), _0x4b7101['css'](_0x121204(0x308), _0x843ce5 + 'px'), _0x4b7101['css'](_0x121204(0x2b3), _0x365e06 + 'px');
            }
        }
        function _0x39fc7a() {
            const _0x366834 = _0x38a4e7;
            _0x374b21(_0x366834(0x257))[_0x366834(0x255)](), _0x374b21(document)[_0x366834(0x24e)](_0x366834(0x1e5));
        }
        function _0x4fd6d9() {
            const _0x4e6660 = _0x38a4e7;
            var _0x4bc325 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x4e6660(0x17e),
                        'NOTICE_UPDATE_CONTENT': _0x4e6660(0x271),
                        'CHECK_UPDATE': _0x4e6660(0x20d),
                        'CHECK_UPDATE_MENU': _0x4e6660(0x388),
                        'CHECK_UPDATE_INTRO': _0x4e6660(0x236),
                        'RELOAD_SCRIPT': _0x4e6660(0x2d7),
                        'DONATE': _0x4e6660(0x162),
                        'FEEDBACK': _0x4e6660(0x339),
                        'IMAGE_VIEWER': _0x4e6660(0x26f),
                        'NEW_TAB': _0x4e6660(0x3ff),
                        'SHOW_DOM_TREE': _0x4e6660(0x269),
                        'SELECT_AND_COPY': _0x4e6660(0x31d),
                        'DOWNLOAD_DOM_TREE': _0x4e6660(0x238),
                        'REPORT_GITHUB': _0x4e6660(0x163),
                        'REPORT_DISCORD': _0x4e6660(0x1a0),
                        'REPORT_FORK': 'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
                        'DEBUG': _0x4e6660(0x342),
                        'CLOSE': _0x4e6660(0x227),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0x4e6660(0x307),
                        'BATCH_DOWNLOAD_DIRECT': _0x4e6660(0x1bd),
                        'IMG': _0x4e6660(0x3fe),
                        'VID': 'Video',
                        'DW': 'Download',
                        'DW_ALL': 'Download\x20All\x20Resources',
                        'THUMBNAIL_INTRO': _0x4e6660(0x336),
                        'LOAD_BLOB_ONE': _0x4e6660(0x1cc),
                        'LOAD_BLOB_MULTIPLE': _0x4e6660(0x3a5),
                        'LOAD_BLOB_RELOAD': _0x4e6660(0x245),
                        'NO_CHECK_RESOURCE': _0x4e6660(0x1a6),
                        'NO_VID_URL': _0x4e6660(0x361),
                        'SETTING': 'Settings',
                        'AUTO_RENAME': _0x4e6660(0x3af),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0x4e6660(0x3e9),
                        'DISABLE_VIDEO_LOOPING': 'Disable\x20Video\x20Auto-looping',
                        'HTML5_VIDEO_CONTROL': _0x4e6660(0x3b3),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x4e6660(0x306),
                        'FORCE_FETCH_ALL_RESOURCES': _0x4e6660(0x359),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x4e6660(0x23f),
                        'DIRECT_DOWNLOAD_ALL': _0x4e6660(0x1dd),
                        'MODIFY_VIDEO_VOLUME': _0x4e6660(0x1f8),
                        'SCROLL_BUTTON': 'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
                        'FORCE_RESOURCE_VIA_MEDIA': _0x4e6660(0x378),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x4e6660(0x270),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x4e6660(0x36a),
                        'AUTO_RENAME_INTRO': _0x4e6660(0x31e),
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': 'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_LOCATE_DATE_INTRO': _0x4e6660(0x29b),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x4e6660(0x1e2),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x4e6660(0x2c1),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x4e6660(0x3b4),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x4e6660(0x338),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x4e6660(0x332),
                        'DIRECT_DOWNLOAD_ALL_INTRO': 'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
                        'MODIFY_VIDEO_VOLUME_INTRO': 'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
                        'SCROLL_BUTTON_INTRO': 'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x4e6660(0x3bc),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x4e6660(0x3a1),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': _0x4e6660(0x384),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x4e6660(0x265)
                    }
                }, _0x4ae722 = Object['assign']({}, _0x4bc325, _0x6cf809[_0x4e6660(0x3f7)]), _0x50b619 = Object[_0x4e6660(0x2eb)](_0x4ae722)[_0x4e6660(0x1b1)]()['reduce']((_0x4ffd45, _0x55aaa8) => {
                    return _0x4ffd45[_0x55aaa8] = _0x4ae722[_0x55aaa8], _0x4ffd45;
                }, {});
            return _0x50b619;
        }
        async function _0x3e449d(_0x3d3c79) {
            return new Promise((_0x188b19, _0x47ef53) => {
                const _0x55d115 = a0_0x2eb7;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x55d115(0x30e) + _0x3d3c79 + _0x55d115(0x406),
                    'onload': function (_0x5d0d17) {
                        const _0x63f8ca = _0x55d115;
                        try {
                            let _0x2b9c6a = JSON[_0x63f8ca(0x1a7)](_0x5d0d17[_0x63f8ca(0x3d2)]);
                            _0x188b19(_0x2b9c6a);
                        } catch (_0x6a1947) {
                            _0x47ef53(_0x6a1947);
                        }
                    },
                    'onerror': function (_0x314419) {
                        const _0x46cdac = _0x55d115;
                        _0x42d816(_0x46cdac(0x1e6), _0x46cdac(0x34c), _0x314419), _0x47ef53(_0x314419);
                    }
                });
            });
        }
        function _0x1e858f(_0x554931) {
            const _0x47390b = _0x38a4e7, _0x3e9676 = _0x4fd6d9();
            return _0x3e9676[_0x6cf809[_0x47390b(0x1e8)]] != undefined && _0x3e9676[_0x6cf809['lang']][_0x554931] != undefined ? _0x3e9676[_0x6cf809[_0x47390b(0x1e8)]][_0x554931] : _0x3e9676[_0x47390b(0x195)][_0x554931];
        }
        function _0x3f34de() {
            const _0x5235c3 = _0x38a4e7;
            _0x374b21(_0x5235c3(0x198))['each'](function () {
                const _0x5e8fec = _0x5235c3;
                _0x374b21(this)[_0x5e8fec(0x32a)](_0x1e858f(_0x374b21(this)[_0x5e8fec(0x24d)](_0x5e8fec(0x32e))));
            }), _0x374b21(_0x5235c3(0x2e8))[_0x5235c3(0x395)](function () {
                const _0x21cba0 = _0x5235c3;
                _0x374b21(this)[_0x21cba0(0x24d)](_0x21cba0(0x37b), _0x1e858f(_0x374b21(this)[_0x21cba0(0x24d)](_0x21cba0(0x301))));
            });
        }
        _0x374b21(function () {
            const _0x4e415f = _0x38a4e7;
            function _0x5a1e63(_0x429036) {
                const _0x41d180 = a0_0x2eb7;
                var _0x19f02a = [];
                for (var _0x1fa4e7 of _0x429036) {
                    _0x19f02a[_0x41d180(0x3dc)]({
                        'tagName': _0x1fa4e7[_0x41d180(0x3f9)],
                        'id': _0x1fa4e7['id'],
                        'className': _0x1fa4e7[_0x41d180(0x18e)]
                    });
                }
                return _0x19f02a;
            }
            function _0x4296fa() {
                const _0x290e8a = a0_0x2eb7;
                let _0x57cc77 = _0x374b21(_0x290e8a(0x2a1))[0x0];
                var _0xc3ab2f = '';
                _0x6cf809[_0x290e8a(0x199)][_0x290e8a(0x25d)](_0x298809 => {
                    const _0x40b130 = _0x290e8a;
                    var _0x15215c = JSON[_0x40b130(0x2f5)](_0x298809[_0x40b130(0x2a0)], function (_0x46649d, _0x2b8273) {
                        const _0x6e2c4e = _0x40b130;
                        if (Array[_0x6e2c4e(0x34b)](this)) {
                            if (typeof _0x2b8273 === _0x6e2c4e(0x3cc) && _0x2b8273 instanceof jQuery)
                                return _0x5a1e63(_0x2b8273);
                            return _0x2b8273;
                        } else
                            return _0x2b8273;
                    }, '\x09');
                    _0xc3ab2f += new Date(_0x298809[_0x40b130(0x32d)])[_0x40b130(0x17c)]() + ':\x20' + _0x15215c + '\x0a';
                }), _0x374b21('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x290e8a(0x32a)](_0x290e8a(0x35e) + _0xc3ab2f + _0x290e8a(0x304) + location['pathname'] + '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a' + _0x57cc77[_0x290e8a(0x1ad)]);
            }
            _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x3b5), '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE', function () {
                _0x4296fa();
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x3b5), _0x4e415f(0x1d9), function () {
                const _0x466463 = _0x4e415f;
                _0x374b21(_0x466463(0x38a))['select'](), document['execCommand'](_0x466463(0x218));
            }), _0x374b21(_0x4e415f(0x38c))['on']('click', _0x4e415f(0x19c), function () {
                const _0x2cb938 = _0x4e415f;
                _0x374b21(_0x2cb938(0x38a))[_0x2cb938(0x32a)]()['length'] === 0x0 && _0x4296fa();
                var _0x219ef6 = _0x374b21(_0x2cb938(0x38a))[_0x2cb938(0x32a)](), _0x2fa5c2 = document[_0x2cb938(0x2d8)]('a'), _0x5558cd = new Blob([_0x219ef6], { 'type': _0x2cb938(0x254) });
                _0x2fa5c2['href'] = URL['createObjectURL'](_0x5558cd), _0x2fa5c2['download'] = _0x2cb938(0x33f) + new Date()[_0x2cb938(0x249)]() + _0x2cb938(0x355), document[_0x2cb938(0x38c)][_0x2cb938(0x17d)](_0x2fa5c2), _0x2fa5c2[_0x2cb938(0x3b5)](), _0x2fa5c2[_0x2cb938(0x255)]();
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x3b5), _0x4e415f(0x1f6), function () {
                const _0x431a72 = _0x4e415f;
                _0x374b21(this)[_0x431a72(0x266)](_0x431a72(0x3d5))['length'] > 0x0 ? _0x374b21(this)[_0x431a72(0x266)](_0x431a72(0x3d5))[_0x431a72(0x3d4)](0xfa, function () {
                    const _0x378c11 = _0x431a72;
                    _0x374b21(this)[_0x378c11(0x255)]();
                }) : _0x374b21('.IG_POPUP_DIG')[_0x431a72(0x255)]();
            }), _0x374b21(window)['on'](_0x4e415f(0x22a), function (_0x33ece3) {
                const _0x594ca5 = _0x4e415f;
                _0x33ece3[_0x594ca5(0x3c7)] == '81' && _0x33ece3['altKey'] && (_0x374b21('.IG_POPUP_DIG')[_0x594ca5(0x255)](), _0x33ece3[_0x594ca5(0x36e)]()), _0x33ece3[_0x594ca5(0x3c7)] == '87' && _0x33ece3['altKey'] && (_0x393a71(), _0x33ece3[_0x594ca5(0x36e)]()), _0x33ece3[_0x594ca5(0x3c7)] == '90' && _0x33ece3[_0x594ca5(0x211)] && (_0x31de16(), _0x33ece3[_0x594ca5(0x36e)]()), _0x33ece3['which'] == '82' && _0x33ece3['altKey'] && (_0x2d6338(), _0x33ece3['preventDefault']()), _0x33ece3[_0x594ca5(0x3c7)] == '83' && _0x33ece3[_0x594ca5(0x211)] && (location[_0x594ca5(0x408)][_0x594ca5(0x39f)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x374b21('.IG_DWSTORY')[_0x594ca5(0x2b2)] > 0x0 && _0x374b21(_0x594ca5(0x30a))?.[_0x594ca5(0x404)](_0x594ca5(0x3b5)), location['href'][_0x594ca5(0x39f)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x374b21(_0x594ca5(0x309))[_0x594ca5(0x2b2)] > 0x0 && _0x374b21('.IG_DWHISTORY')?.[_0x594ca5(0x404)](_0x594ca5(0x3b5)), _0x33ece3[_0x594ca5(0x36e)]());
            }), _0x374b21(_0x4e415f(0x38c))['on']('change', '.IG_POPUP_DIG\x20input', function () {
                const _0x5543be = _0x4e415f;
                var _0xe834cd = _0x374b21(this)['attr']('id');
                if (_0xe834cd && _0x1aee20[_0xe834cd] !== undefined) {
                    let _0x96b433 = _0x374b21(this)[_0x5543be(0x1d1)](_0x5543be(0x29f));
                    GM_setValue(_0xe834cd, _0x96b433), _0x1aee20[_0xe834cd] = _0x96b433, console[_0x5543be(0x2c8)](_0x5543be(0x33d), _0xe834cd, _0x96b433);
                }
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x3b5), '.IG_POPUP_DIG\x20.globalSettings', function (_0x497de4) {
                const _0x337fbc = _0x4e415f;
                _0x374b21(this)[_0x337fbc(0x2fe)](_0x337fbc(0x3d5))[_0x337fbc(0x2b2)] > 0x0 && _0x497de4[_0x337fbc(0x36e)]();
            }), _0x374b21('body')['on'](_0x4e415f(0x18a), '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)', function () {
                const _0x5c701d = _0x4e415f;
                let _0xb303bf = _0x374b21(this)[_0x5c701d(0x1fb)]();
                _0x374b21(this)[_0x5c701d(0x24d)]('type') == 'range' ? _0x374b21(this)[_0x5c701d(0x284)]()[_0x5c701d(0x1fb)](_0xb303bf) : _0x374b21(this)[_0x5c701d(0x30c)]()[_0x5c701d(0x1fb)](_0xb303bf), _0xb303bf >= 0x0 && _0xb303bf <= 0x1 && (_0x6cf809['videoVolume'] = _0xb303bf, GM_setValue(_0x5c701d(0x27e), _0xb303bf));
            }), _0x374b21('body')['on'](_0x4e415f(0x345), _0x4e415f(0x2c5), function () {
                const _0xc3d754 = _0x4e415f;
                if (_0x374b21(this)[_0xc3d754(0x24d)]('type') == _0xc3d754(0x1a4)) {
                    let _0x2db9bc = _0x374b21(this)[_0xc3d754(0x1fb)]();
                    _0x374b21(this)[_0xc3d754(0x284)]()[_0xc3d754(0x1fb)](_0x2db9bc);
                } else {
                    let _0x48f16c = _0x374b21(this)[_0xc3d754(0x1fb)]();
                    _0x48f16c >= 0x0 && _0x48f16c <= 0x1 ? _0x374b21(this)[_0xc3d754(0x30c)]()['val'](_0x48f16c) : _0x48f16c < 0x0 ? _0x374b21(this)[_0xc3d754(0x1fb)](0x0) : _0x374b21(this)[_0xc3d754(0x1fb)](0x1);
                }
            }), _0x374b21(_0x4e415f(0x38c))['on']('input', _0x4e415f(0x294), function () {
                const _0x43663b = _0x4e415f;
                GM_setValue(_0x43663b(0x1d6), _0x374b21(this)[_0x43663b(0x1fb)]()), _0x6cf809['fileRenameFormat'] = _0x374b21(this)['val']();
            }), _0x374b21(_0x4e415f(0x38c))['on']('click', 'a[data-needed=\x22direct\x22]', function (_0x4da947) {
                _0x4da947['preventDefault'](), _0x1b29c0(this);
            }), _0x374b21(_0x4e415f(0x38c))['on']('click', _0x4e415f(0x3bf), function () {
                const _0x5051f2 = _0x4e415f;
                if (_0x1aee20['FORCE_RESOURCE_VIA_MEDIA'] && _0x1aee20[_0x5051f2(0x34f)])
                    _0x1b29c0(_0x374b21(this)['parent']()[_0x5051f2(0x240)]('a')[_0x5051f2(0x2fb)]()[0x0], !![]);
                else {
                    var _0x3e7c6e = new URL(_0x374b21(this)[_0x5051f2(0x266)]()['children']('a')[_0x5051f2(0x24d)](_0x5051f2(0x2d2)));
                    _0x3e7c6e[_0x5051f2(0x16f)] = _0x5051f2(0x2bb), _0xb6f68e(_0x3e7c6e['href']);
                }
            }), _0x374b21('body')['on']('click', _0x4e415f(0x1e0), function () {
                const _0x1df26b = _0x4e415f;
                let _0x5603ae = new Date()[_0x1df26b(0x249)]();
                _0x1aee20[_0x1df26b(0x1fe)] && _0x374b21(this)[_0x1df26b(0x266)]()[_0x1df26b(0x240)]('a')['attr'](_0x1df26b(0x3d7)) && (_0x5603ae = _0x374b21(this)[_0x1df26b(0x266)]()[_0x1df26b(0x240)]('a')['attr'](_0x1df26b(0x3d7)));
                let _0x2cae6e = _0x374b21(this)[_0x1df26b(0x266)]()[_0x1df26b(0x240)]('a')['attr'](_0x1df26b(0x3f5)) ?? _0x374b21(_0x1df26b(0x16b))['text']();
                _0x496556(_0x374b21(this)[_0x1df26b(0x266)]()[_0x1df26b(0x240)]('a')[_0x1df26b(0x2fe)]('img')['first']()[_0x1df26b(0x24d)](_0x1df26b(0x21f)), _0x374b21(this)['parent']()[_0x1df26b(0x240)]('a')['attr']('data-username'), _0x1df26b(0x262), _0x5603ae, _0x1df26b(0x1b0), _0x2cae6e);
            }), _0x374b21('body')['on']('click', _0x4e415f(0x30a), function () {
                _0x281acf(!![]);
            }), _0x374b21(_0x4e415f(0x38c))['on']('click', '.IG_DWSTORY_ALL', function () {
                _0x5bbfd1();
            }), _0x374b21(_0x4e415f(0x38c))['on']('click', _0x4e415f(0x1f5), function (_0x19efd9) {
                const _0x1024de = _0x4e415f;
                _0x19efd9[_0x1024de(0x36e)](), _0x281acf(!![], !![], !![]);
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x3b5), '.IG_DWSTORY_THUMBNAIL', function () {
                _0x5c584d(!![]);
            }), _0x374b21(_0x4e415f(0x38c))['on']('click', _0x4e415f(0x348), function (_0x43bd76) {
                const _0x2969c5 = _0x4e415f;
                _0x43bd76[_0x2969c5(0x396)](), _0x24b4ad(!![]);
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x3b5), _0x4e415f(0x309), function () {
                _0x1eccd9(!![]);
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x3b5), _0x4e415f(0x1ac), function () {
                _0x31ca9d();
            }), _0x374b21('body')['on'](_0x4e415f(0x3b5), _0x4e415f(0x219), function (_0x500b97) {
                const _0x43c166 = _0x4e415f;
                _0x500b97[_0x43c166(0x36e)](), _0x1eccd9(!![], !![]);
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x3b5), '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x1da392(!![]);
            }), _0x374b21('body')['on'](_0x4e415f(0x3b5), _0x4e415f(0x3f1), function () {
                _0x195378(!![], !![]);
            }), _0x374b21('body')['on'](_0x4e415f(0x3b5), _0x4e415f(0x2f8), function () {
                _0x195378(!![], !![], !![]);
            }), _0x374b21('body')['on'](_0x4e415f(0x3b5), '.IG_REELS_THUMBNAIL', function () {
                _0x195378(!![], ![]);
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x1bb), _0x4e415f(0x2da), function (_0x44bb69) {
                const _0xf79d69 = _0x4e415f;
                if (_0x44bb69[_0xf79d69(0x3c7)] === 0x3 || _0x44bb69['which'] === 0x2) {
                    if (location[_0xf79d69(0x408)] === _0xf79d69(0x1bf) && _0x1aee20[_0xf79d69(0x3fc)]) {
                        _0x44bb69[_0xf79d69(0x36e)]();
                        if (_0x374b21(this)[_0xf79d69(0x2fe)]('canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img')[_0xf79d69(0x2b2)] > 0x0) {
                            const _0x278c19 = _0xf79d69(0x1bf) + _0x374b21(this)['children']('div')[_0xf79d69(0x193)]()['text']();
                            _0x44bb69[_0xf79d69(0x3c7)] === 0x2 ? GM_openInTab(_0x278c19) : location[_0xf79d69(0x408)] = _0x278c19;
                        }
                    }
                }
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x18a), _0x4e415f(0x190), function () {
                const _0x441bc7 = _0x4e415f;
                var _0x355d50 = _0x374b21(this)[_0x441bc7(0x2fe)](_0x441bc7(0x345))['prop'](_0x441bc7(0x29f));
                _0x374b21(_0x441bc7(0x1b4))[_0x441bc7(0x395)](function () {
                    const _0x102078 = _0x441bc7;
                    _0x374b21(this)[_0x102078(0x1d1)](_0x102078(0x29f), _0x355d50);
                });
            }), _0x374b21('body')['on'](_0x4e415f(0x18a), _0x4e415f(0x1b4), function () {
                const _0x5013c0 = _0x4e415f;
                var _0x360e3e = _0x374b21('.IG_POPUP_DIG_BODY\x20.inner_box:checked')[_0x5013c0(0x2b2)], _0x4b1bda = _0x374b21(_0x5013c0(0x1b4))[_0x5013c0(0x2b2)];
                _0x374b21('.IG_POPUP_DIG_TITLE\x20.checkbox')[_0x5013c0(0x2fe)](_0x5013c0(0x345))[_0x5013c0(0x1d1)](_0x5013c0(0x29f), _0x360e3e == _0x4b1bda);
            }), _0x374b21('body')['on']('click', '.IG_POPUP_DIG_TITLE\x20#batch_download_selected', function () {
                const _0x4064da = _0x4e415f;
                let _0xb79ea0 = 0x0;
                _0x374b21(_0x4064da(0x19e))['each'](function () {
                    const _0x2a54cc = _0x4064da;
                    _0x374b21(this)['prev']()[_0x2a54cc(0x240)](_0x2a54cc(0x345))[_0x2a54cc(0x1d1)](_0x2a54cc(0x29f)) && (_0x374b21(this)[_0x2a54cc(0x404)](_0x2a54cc(0x3b5)), _0xb79ea0++);
                }), _0xb79ea0 == 0x0 && alert(_0x1e858f('NO_CHECK_RESOURCE'));
            }), _0x374b21(_0x4e415f(0x38c))['on'](_0x4e415f(0x18a), '.IG_POPUP_DIG_TITLE\x20#langSelect', function () {
                const _0x20be9a = _0x4e415f;
                GM_setValue('lang', _0x374b21(this)[_0x20be9a(0x1fb)]()), _0x6cf809['lang'] = _0x374b21(this)[_0x20be9a(0x1fb)](), _0x6cf809[_0x20be9a(0x1e8)]?.['startsWith']('en') || _0x6cf809[_0x20be9a(0x3f7)][_0x6cf809['lang']] != null ? (_0x3f34de(), _0xb556f3()) : _0x3e449d(_0x6cf809[_0x20be9a(0x1e8)])[_0x20be9a(0x3d6)](_0x5f2345 => {
                    const _0x4965f7 = _0x20be9a;
                    _0x6cf809['locale'][_0x6cf809[_0x4965f7(0x1e8)]] = _0x5f2345, _0x3f34de(), _0xb556f3();
                })[_0x20be9a(0x179)](_0x2d90ae => {
                    const _0x544e9f = _0x20be9a;
                    console[_0x544e9f(0x2d0)](_0x544e9f(0x274), _0x2d90ae);
                });
            }), _0x374b21(_0x4e415f(0x38c))['on']('click', _0x4e415f(0x3eb), function () {
                const _0x435c8e = _0x4e415f;
                _0x374b21(_0x435c8e(0x19e))['each'](function () {
                    const _0x170c14 = _0x435c8e;
                    _0x374b21(this)[_0x170c14(0x404)]('click');
                });
            });
            const _0xfff407 = new MutationObserver(_0x35d37a => {
                const _0x511964 = _0x4e415f;
                for (const _0x25756c of _0x35d37a) {
                    _0x25756c[_0x511964(0x16e)] === 'childList' && _0x25756c['addedNodes'][_0x511964(0x25d)](_0x203311 => {
                        const _0xff67dd = _0x511964, _0x372c9e = _0x374b21(_0x203311)[_0xff67dd(0x2fe)]('video');
                        if (location['pathname'][_0xff67dd(0x31f)]('/stories/highlights/')) {
                            if (_0x374b21(_0x203311)[_0xff67dd(0x24d)]('data-ih-locale-title') == null && _0x374b21(_0x203311)[_0xff67dd(0x24d)](_0xff67dd(0x300)) == null && _0x203311[_0xff67dd(0x3f9)] === _0xff67dd(0x185)) {
                                var _0x50cc36 = _0x374b21(_0x203311)['find']('time[datetime]');
                                let _0x334064 = _0x50cc36?.['attr'](_0xff67dd(0x37b));
                                _0x334064 != null && _0x50cc36[_0xff67dd(0x32a)](_0x334064);
                            }
                        }
                        if (_0x372c9e[_0xff67dd(0x2b2)] > 0x0) {
                            _0x1aee20[_0xff67dd(0x2bd)] && _0x372c9e[_0xff67dd(0x395)](function () {
                                const _0x20d5aa = _0xff67dd;
                                _0x374b21(this)['on'](_0x20d5aa(0x36f), function () {
                                    const _0xb4e92a = _0x20d5aa;
                                    !_0x374b21(this)[_0xb4e92a(0x1d8)](_0xb4e92a(0x2db)) && (_0x374b21(this)[_0xb4e92a(0x24d)]('data-modify', !![]), this['volume'] = _0x6cf809[_0xb4e92a(0x3a4)], _0x42d816(_0xb4e92a(0x303)));
                                });
                            });
                            if (location['pathname'][_0xff67dd(0x39f)](/^(\/stories\/)/ig)) {
                                const _0x1c060d = location[_0xff67dd(0x40c)]['match'](/^(\/stories\/highlights\/)/ig) != null, _0xfcf290 = _0x1c060d ? 'highlight' : _0xff67dd(0x189);
                                _0x372c9e[_0xff67dd(0x395)](function () {
                                    const _0x449229 = _0xff67dd;
                                    _0x374b21(this)['on']('timeupdate', function () {
                                        const _0x528b5f = a0_0x2eb7;
                                        if (!_0x374b21(this)[_0x528b5f(0x1d8)](_0x528b5f(0x366))) {
                                            let _0x41a412 = _0x374b21(this);
                                            _0x41a412[_0x528b5f(0x174)](_0x528b5f(0x1db))[_0x528b5f(0x2ff)](function () {
                                                const _0xfaf5e3 = _0x528b5f;
                                                return _0x374b21(this)['width']() == _0x41a412[_0xfaf5e3(0x1ee)]();
                                            })['find'](_0x528b5f(0x22f))[_0x528b5f(0x2b2)] === 0x0 ? (_0x374b21(this)['attr']('data-modify-thumbnail', !![]), _0x1c060d ? _0x1da392(![]) : _0x5c584d(![]), _0x42d816('(' + _0xfcf290 + ')', _0x528b5f(0x26b))) : (_0x374b21(this)[_0x528b5f(0x24d)](_0x528b5f(0x400), !![]), _0x42d816('(' + _0xfcf290 + ')', _0x528b5f(0x326)));
                                        }
                                    });
                                    var _0x120463 = _0x374b21(this);
                                    if (_0x1aee20['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x120463[_0x449229(0x1d8)](_0x449229(0x3d8))) {
                                            _0x42d816('(' + _0xfcf290 + ')', 'Added\x20video\x20html5\x20contorller\x20#modify');
                                            _0x1aee20[_0x449229(0x2bd)] && (this[_0x449229(0x352)] = _0x6cf809[_0x449229(0x3a4)], _0x120463['on'](_0x449229(0x27c), function () {
                                                const _0x7ce901 = _0x449229;
                                                this[_0x7ce901(0x352)] = _0x6cf809[_0x7ce901(0x3a4)];
                                            }));
                                            let _0x27da23 = _0x120463[_0x449229(0x174)]('div')['filter'](function () {
                                                    const _0x4d890b = _0x449229;
                                                    return _0x374b21(this)['attr']('class') == null && _0x374b21(this)[_0x4d890b(0x24d)]('style') == null;
                                                })[_0x449229(0x2fb)](), _0x33e90c = _0x27da23[_0x449229(0x284)]();
                                            _0x33e90c['hide']();
                                            let _0x5bec22 = _0x27da23[_0x449229(0x2fe)](_0x449229(0x414));
                                            _0x5bec22[_0x449229(0x334)]();
                                            const _0xaedd69 = function (_0x59d59d) {
                                                const _0x41f3ab = _0x449229;
                                                _0x59d59d[_0x41f3ab(0x36e)](), _0x120463[_0x41f3ab(0x18f)](_0x41f3ab(0x3df), '2'), _0x120463[_0x41f3ab(0x24d)]('controls', !![]), _0x5bec22[_0x41f3ab(0x334)](), _0x33e90c['hide'](), _0x3a5d0c(_0x120463, _0x120463[_0x41f3ab(0x174)](_0x41f3ab(0x1db))[_0x41f3ab(0x2ff)](function () {
                                                    const _0x23768b = _0x41f3ab;
                                                    return _0x374b21(this)[_0x23768b(0x1ee)]() == _0x120463['width']();
                                                })[_0x41f3ab(0x2fb)](), _0xfcf290, _0x41f3ab(0x276));
                                            };
                                            _0x120463['parent']()[_0x449229(0x2fe)]('video\x20+\x20div')['on'](_0x449229(0x1d3), _0xaedd69), _0x5bec22['on'](_0x449229(0x1d3), _0xaedd69), _0x33e90c['on'](_0x449229(0x1d3), _0xaedd69), _0x120463['on'](_0x449229(0x1d3), function (_0x36cd99) {
                                                const _0x3ac1ef = _0x449229;
                                                _0x36cd99[_0x3ac1ef(0x36e)](), _0x120463[_0x3ac1ef(0x18f)](_0x3ac1ef(0x3df), '-1'), _0x120463[_0x3ac1ef(0x3d3)](_0x3ac1ef(0x3d8)), _0x33e90c[_0x3ac1ef(0x214)](), _0x5bec22[_0x3ac1ef(0x214)](), _0x3a5d0c(_0x120463, _0x120463[_0x3ac1ef(0x174)]('div[style][class]')['filter'](function () {
                                                    const _0x55f18d = _0x3ac1ef;
                                                    return _0x374b21(this)[_0x55f18d(0x1ee)]() == _0x120463[_0x55f18d(0x1ee)]();
                                                })['first'](), _0xfcf290, _0x3ac1ef(0x276));
                                            }), _0x120463['on'](_0x449229(0x2b0), function () {
                                                const _0xbf2e11 = _0x449229;
                                                let _0x569ae9 = _0x27da23[_0xbf2e11(0x266)]()[_0xbf2e11(0x2fe)](_0xbf2e11(0x248))['parents'](_0xbf2e11(0x3bb))[_0xbf2e11(0x2fb)]();
                                                var _0x8e513b = _0x569ae9[_0xbf2e11(0x2fe)](_0xbf2e11(0x213))[_0xbf2e11(0x2b2)] === 0x0;
                                                this[_0xbf2e11(0x293)] != _0x8e513b && (this[_0xbf2e11(0x352)] = _0x6cf809[_0xbf2e11(0x3a4)], _0x569ae9?.[_0xbf2e11(0x404)](_0xbf2e11(0x3b5))), _0x374b21(this)[_0xbf2e11(0x24d)](_0xbf2e11(0x337)) && (_0x6cf809['videoVolume'] = this['volume'], GM_setValue(_0xbf2e11(0x27e), this[_0xbf2e11(0x352)])), this[_0xbf2e11(0x352)] == _0x6cf809['videoVolume'] && _0x374b21(this)[_0xbf2e11(0x24d)](_0xbf2e11(0x337), !![]);
                                            }), _0x120463[_0x449229(0x18f)]('position', 'absolute'), _0x120463[_0x449229(0x18f)]('z-index', '2'), _0x120463[_0x449229(0x24d)](_0x449229(0x176), !![]), _0x120463['attr'](_0x449229(0x3d8), !![]);
                                        }
                                    } else
                                        _0x3a5d0c(_0x120463, _0x120463['parents'](_0x449229(0x1db))[_0x449229(0x2ff)](function () {
                                            const _0x3c1f3f = _0x449229;
                                            return _0x374b21(this)[_0x3c1f3f(0x1ee)]() == _0x120463['width']();
                                        })[_0x449229(0x2fb)](), _0xfcf290, _0x449229(0x276));
                                });
                            }
                        }
                    });
                }
            });
            _0xfff407[_0x4e415f(0x399)](_0x374b21(_0x4e415f(0x2a1))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));