// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            2.28.9.1
// @description        Downloading is possible for both photos and videos from posts, as well as for stories, reels or profile picture.
// @description:zh-TW  一鍵下載對方 Instagram 貼文中的相片、影片甚至是他們的限時動態、連續短片及大頭貼圖片！
// @description:zh-CN  一键下载对方 Instagram 帖子中的相片、视频甚至是他们的快拍、Reels及头像图片！
// @description:ja     投稿の写真と動画だけでなく、ストーリー、リール、プロフィール写真もダウンロードできます。
// @description:ko     게시물의 사진과 동영상뿐만 아니라 스토리, 릴 또는 프로필 사진도 다운로드할 수 있습니다.
// @description:ro     Descărcarea este posibilă atât pentru fotografiile și videoclipurile din postări, cât și pentru storyuri, reels sau poze de profil.
// @author             SN-Koarashi (5026)
// @match              https://*.instagram.com/*
// @grant              GM_addStyle
// @grant              GM_setValue
// @grant              GM_getValue
// @grant              GM_xmlhttpRequest
// @grant              GM_registerMenuCommand
// @grant              GM_getResourceText
// @grant              GM_openInTab
// @connect            i.instagram.com
// @require            https://code.jquery.com/jquery-4.0.0-beta.min.js
// @resource           INTERNAL_CSS https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/style.css
// @resource           LOCATE_DATE_LIST_TEXT https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/date_locate.json
// @resource           LOCALE_TEXT https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale.json
// @supportURL         https://github.com/SN-Koarashi/ig-helper/
// @contributionURL    https://ko-fi.com/snkoarashi
// @icon               https://www.google.com/s2/favicons?domain=www.instagram.com
// @compatible         firefox >= 100
// @compatible         chrome >= 100
// @compatible         edge >= 100
// @license            GPL-3.0-only
// @run-at             document-idle
// @downloadURL https://cdn.jsdelivr.net/gh/znoow/aerocbu@main/IG-Helper.user.js
// @updateURL https://update.greasyfork.org/scripts/404535/IG%20Helper.meta.js
// ==/UserScript==

(function (_0x25d2f1, _0x18c42b) {
    const _0xa514e4 = a0_0x16e0, _0x329cd8 = _0x25d2f1();
    while (!![]) {
        try {
            const _0x2481e3 = parseInt(_0xa514e4(0x149)) / 0x1 + parseInt(_0xa514e4(0xd8)) / 0x2 * (-parseInt(_0xa514e4(0xfd)) / 0x3) + parseInt(_0xa514e4(0x242)) / 0x4 + parseInt(_0xa514e4(0x249)) / 0x5 + parseInt(_0xa514e4(0x185)) / 0x6 * (parseInt(_0xa514e4(0x121)) / 0x7) + -parseInt(_0xa514e4(0xa8)) / 0x8 + -parseInt(_0xa514e4(0x124)) / 0x9;
            if (_0x2481e3 === _0x18c42b)
                break;
            else
                _0x329cd8['push'](_0x329cd8['shift']());
        } catch (_0x19048a) {
            _0x329cd8['push'](_0x329cd8['shift']());
        }
    }
}(a0_0x140d, 0xcbee3), function (_0x3f66b5) {
    setTimeout(() => {
        const _0x5ad020 = a0_0x16e0;
        setInterval(() => {
            _0x5425d6?.();
        }, 0x927c0), _0x5ad020(0x192);
        const _0x15c461 = {
                'AUTO_RENAME': !![],
                'RENAME_PUBLISH_DATE': !![],
                'DISABLE_VIDEO_LOOPING': ![],
                'HTML5_VIDEO_CONTROL': ![],
                'REDIRECT_RIGHT_CLICK_USER_STORY_PICTURE': ![],
                'FORCE_FETCH_ALL_RESOURCES': ![],
                'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': ![],
                'DIRECT_DOWNLOAD_ALL': ![],
                'MODIFY_VIDEO_VOLUME': ![],
                'SCROLL_BUTTON': !![],
                'FORCE_RESOURCE_VIA_MEDIA': ![],
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': ![],
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': ![]
            }, _0x5ac8e3 = [
                'RENAME_PUBLISH_DATE',
                _0x5ad020(0x241),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ], _0x5ddbbf = JSON[_0x5ad020(0x1ad)](GM_getResourceText(_0x5ad020(0x22e)));
        var _0x3a814a = GM_getValue('G_VIDEO_VOLUME') ? GM_getValue('G_VIDEO_VOLUME') : 0x1, _0x207830 = GM_getValue(_0x5ad020(0xb6)) ? GM_getValue(_0x5ad020(0xb6)) : GM_getValue(_0x5ad020(0x251)) || navigator[_0x5ad020(0xc1)] || navigator['userLanguage'], _0x336995 = ![], _0x232ef6 = GM_getValue(_0x5ad020(0x256)) ? GM_getValue(_0x5ad020(0x256)) : _0x5ad020(0x1ae);
        const _0x15c3f8 = {
                'DOWNLOAD': _0x5ad020(0x27f),
                'NEW_TAB': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
                'THUMBNAIL': _0x5ad020(0x109),
                'CLOSE': _0x5ad020(0x14b)
            }, _0xd28b59 = 0xfa, _0x4703b7 = GM_getResourceText('INTERNAL_CSS'), _0x4d641c = JSON[_0x5ad020(0x1ad)](GM_getResourceText(_0x5ad020(0x1c2)));
        var _0x391cb7 = GM_getValue(_0x5ad020(0x251)) || navigator[_0x5ad020(0xc1)] || navigator[_0x5ad020(0x157)], _0x7ee12f = location[_0x5ad020(0x1c5)], _0x565775 = ![], _0x119587 = ![], _0x5555a3, _0x2fe811, _0x3fce9c, _0x2e1f49, _0x347e4a = {
                'stories': {},
                'highlights': {}
            }, _0xa5ab6d = new MutationObserver(function (_0x10be5a, _0x1bd5cf) {
                _0x3c22cf();
            });
        _0x8e464d(), GM_addStyle(_0x4703b7), GM_registerMenuCommand(_0x4b1f2(_0x5ad020(0x1c4)), () => {
            _0x3cf649();
        }, { 'accessKey': 'w' }), GM_registerMenuCommand(_0x4b1f2('DONATE'), () => {
            const _0x1f9f8c = _0x5ad020;
            GM_openInTab(_0x1f9f8c(0x236), { 'active': !![] });
        }, { 'accessKey': 'd' }), GM_registerMenuCommand(_0x4b1f2('DEBUG'), () => {
            _0x25e38f();
        }, { 'accessKey': 'z' }), GM_registerMenuCommand(_0x4b1f2(_0x5ad020(0xff)), () => {
            GM_openInTab('https://greasyfork.org/zh-TW/scripts/404535-ig-helper/feedback', { 'active': !![] });
        }, { 'accessKey': 'f' }), GM_registerMenuCommand(_0x4b1f2('RELOAD_SCRIPT'), () => {
            _0x5425d6();
        }, { 'accessKey': 'r' });
        var _0x20df13 = setInterval(function () {
            const _0x530da8 = _0x5ad020;
            if (_0x3f66b5(_0x530da8(0x10a))[_0x530da8(0x1de)] > 0x0 && !_0x3f66b5(_0x530da8(0x10a))['is'](_0x530da8(0x195)) || location['pathname']['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location['hostname'][_0x530da8(0x14a)](_0x530da8(0x21a))) {
                _0x119587 = ![];
                return;
            }
            if (_0x7ee12f != location[_0x530da8(0x1c5)] || !_0x565775 || !_0x119587) {
                console[_0x530da8(0xc5)](_0x530da8(0x13a), _0x530da8(0x183)), clearInterval(_0x2e1f49), _0x119587 = ![], _0x565775 = !![], _0x7ee12f = location[_0x530da8(0x1c5)], _0xa5ab6d[_0x530da8(0x150)]();
                if (location[_0x530da8(0x1c5)][_0x530da8(0x14a)](_0x530da8(0x1f5)) || location[_0x530da8(0x11b)][_0x530da8(0x1d8)](/^\/(.*?)\/p\//ig) || location[_0x530da8(0x1c5)][_0x530da8(0x14a)](_0x530da8(0x26d))) {
                    _0x347e4a['stories'] = {}, console[_0x530da8(0xc5)](_0x530da8(0x287));
                    var _0x14859a = setInterval(() => {
                        const _0x347ce2 = _0x530da8;
                        _0x3f66b5(_0x347ce2(0xdb))[_0x347ce2(0x1de)] > 0x0 && (clearInterval(_0x14859a), setTimeout(() => {
                            _0x3c22cf(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x119587 = !![];
                }
                location[_0x530da8(0x1c5)][_0x530da8(0x14a)]('https://www.instagram.com/reels/') && (console['log'](_0x530da8(0x170)), setTimeout(() => {
                    _0x1d95cc(![]);
                }, 0x96), _0x119587 = !![]);
                if (location['href'][_0x530da8(0x207)]('?')[0x0] == _0x530da8(0x1e1)) {
                    _0x347e4a[_0x530da8(0x252)] = {};
                    let _0x18b85a = _0x5555a3?.[_0x530da8(0x1d8)](/^\/stories\//ig) != null;
                    console[_0x530da8(0xc5)](_0x530da8(0xec), _0x18b85a), setTimeout(() => {
                        const _0x1aa7b4 = _0x530da8;
                        _0x3c22cf(![], _0x18b85a);
                        const _0x225d43 = _0x3f66b5(_0x1aa7b4(0x108))?.[_0x1aa7b4(0x1a5)]()[0x0];
                        _0x225d43 && _0xa5ab6d[_0x1aa7b4(0x128)](_0x225d43, { 'childList': !![] });
                    }, 0x96), _0x119587 = !![];
                }
                _0x3f66b5(_0x530da8(0xbc))['length'] && location[_0x530da8(0x11b)][_0x530da8(0x1d8)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x530da8(0x11b)][_0x530da8(0x1d8)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (console[_0x530da8(0xc5)](_0x530da8(0x281)), setTimeout(() => {
                    _0x5f4ab1(![]);
                }, 0x96), _0x119587 = !![]);
                if (!_0x119587) {
                    if (location['href'][_0x530da8(0x1d8)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig)) {
                        _0x347e4a[_0x530da8(0x1f4)] = {}, console['log'](_0x530da8(0x191)), _0x3e3c56(![]), _0x2e1f49 = setInterval(() => {
                            _0x37df51(![]);
                        }, _0xd28b59);
                        if (_0x3f66b5(_0x530da8(0x231))[_0x530da8(0x1de)])
                            setTimeout(() => {
                                _0x119587 = !![];
                            }, 0x96);
                    } else {
                        if (location['href'][_0x530da8(0x1d8)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig)) {
                            console[_0x530da8(0xc5)]('isStory');
                            _0x3f66b5(_0x530da8(0x14e))[_0x530da8(0x1de)] > 0x0 && (_0x3f66b5(_0x530da8(0x1af))['remove'](), _0x3f66b5(_0x530da8(0x243))[_0x530da8(0x1c7)](), _0x3f66b5('.IG_DWSTORY_THUMBNAIL')[_0x530da8(0x1de)] && _0x3f66b5(_0x530da8(0x215))[_0x530da8(0x1c7)](), _0x20c3dc(![]), setTimeout(() => {
                                _0x20c3dc(![]);
                            }, 0x96));
                            if (_0x3f66b5(_0x530da8(0x1af))['length'])
                                setTimeout(() => {
                                    _0x119587 = !![];
                                }, 0x96);
                        } else
                            _0x119587 = ![], _0x3f66b5(_0x530da8(0x1af))['remove'](), _0x3f66b5(_0x530da8(0x243))[_0x530da8(0x1c7)](), _0x3f66b5(_0x530da8(0x215))[_0x530da8(0x1de)] && _0x3f66b5(_0x530da8(0x215))[_0x530da8(0x1c7)]();
                    }
                }
                _0x5555a3 = new URL(location[_0x530da8(0x1c5)])[_0x530da8(0x11b)];
            }
        }, _0xd28b59);
        async function _0x5f4ab1(_0x5d9120) {
            const _0x36aded = _0x5ad020;
            if (_0x5d9120) {
                _0x358bab(!![]);
                let _0x532c3a = new Date()['getTime'](), _0x23c595 = Math['floor'](_0x532c3a / 0x3e8), _0x3ad2d2 = location[_0x36aded(0x11b)][_0x36aded(0x240)](/(reels|tagged)\/$/ig, '')[_0x36aded(0x207)]('/')[_0x36aded(0x159)](_0x53128d => _0x53128d['length'] > 0x0)['at'](-0x1), _0x36eb5a = await _0x267c0b(_0x3ad2d2);
                try {
                    let _0xb0527f = await _0x1cdc2b(_0x36eb5a['user']['pk']);
                    _0x56c209(_0xb0527f, _0x3ad2d2, 'avatar', _0x23c595, _0x36aded(0x19d));
                } catch (_0x733a9) {
                    _0x56c209(_0x36eb5a[_0x36aded(0x1eb)]['profile_pic_url'], _0x3ad2d2, 'avatar', _0x23c595, _0x36aded(0x19d));
                }
                _0x358bab(![]);
            } else {
                if (!_0x3f66b5(_0x36aded(0x264))[_0x36aded(0x1de)]) {
                    let _0x50cadb = setInterval(() => {
                        const _0x3cecf5 = _0x36aded;
                        if (_0x3f66b5(_0x3cecf5(0x264))[_0x3cecf5(0x1de)]) {
                            clearInterval(_0x50cadb);
                            return;
                        }
                        _0x3f66b5(_0x3cecf5(0xd7))[_0x3cecf5(0x1a5)]()[_0x3cecf5(0x1a5)]()[_0x3cecf5(0x1bd)](_0x3cecf5(0x233) + _0x4b1f2('DW') + _0x3cecf5(0x228) + _0x15c3f8['DOWNLOAD'] + '</div>'), _0x3f66b5(_0x3cecf5(0xd7))['parent']()[_0x3cecf5(0x1a5)]()[_0x3cecf5(0x22b)](_0x3cecf5(0x16c), _0x3cecf5(0xc9)), _0x3f66b5(_0x3cecf5(0x1a7))['parent']()[_0x3cecf5(0x1a5)]()[_0x3cecf5(0x1a5)]()[_0x3cecf5(0x1bd)]('<div\x20title=\x22' + _0x4b1f2('DW') + _0x3cecf5(0x228) + _0x15c3f8['DOWNLOAD'] + _0x3cecf5(0x1c6)), _0x3f66b5(_0x3cecf5(0x1a7))[_0x3cecf5(0x1a5)]()[_0x3cecf5(0x1a5)]()['parent']()['css'](_0x3cecf5(0x16c), 'relative');
                    }, 0x96);
                }
            }
        }
        async function _0x3e3c56(_0x3921bb, _0x19b510) {
            const _0x307ec3 = _0x5ad020;
            if (_0x3921bb) {
                let _0x30efe8 = new Date()[_0x307ec3(0x261)](), _0x35ee42 = Math[_0x307ec3(0x23e)](_0x30efe8 / 0x3e8), _0x4c1b7f = location[_0x307ec3(0x1c5)][_0x307ec3(0xf3)](/\/$/ig, '')[_0x307ec3(0x207)]('/')['at'](-0x1), _0x20ddbc = _0x3f66b5(_0x307ec3(0x202))[_0x307ec3(0x1de)] || _0x3f66b5(_0x307ec3(0x25a))['length'] || _0x3f66b5(_0x307ec3(0x26c))[_0x307ec3(0x125)](_0x307ec3(0x173))[_0x307ec3(0x1de)], _0x46e223 = '', _0x38e9a1 = 0x0;
                _0x358bab(!![]);
                if (_0x347e4a[_0x307ec3(0x1f4)][_0x4c1b7f]) {
                    console['log'](_0x307ec3(0x21d), _0x4c1b7f);
                    let _0x3e9239 = _0x347e4a[_0x307ec3(0x1f4)][_0x4c1b7f][_0x307ec3(0x1fe)][_0x307ec3(0xf2)][0x0][_0x307ec3(0x258)][_0x307ec3(0x1de)];
                    _0x46e223 = _0x347e4a[_0x307ec3(0x1f4)][_0x4c1b7f]['data'][_0x307ec3(0xf2)][0x0][_0x307ec3(0x1d7)][_0x307ec3(0x131)], _0x38e9a1 = _0x347e4a['highlights'][_0x4c1b7f][_0x307ec3(0x1fe)]['reels_media'][0x0][_0x307ec3(0x258)][_0x3e9239 - _0x20ddbc];
                } else {
                    let _0x2488af = await _0x56dda1(_0x4c1b7f), _0x28beff = _0x2488af['data'][_0x307ec3(0xf2)][0x0]['items'][_0x307ec3(0x1de)];
                    _0x46e223 = _0x2488af['data']['reels_media'][0x0]['owner'][_0x307ec3(0x131)], _0x38e9a1 = _0x2488af[_0x307ec3(0x1fe)][_0x307ec3(0xf2)][0x0][_0x307ec3(0x258)][_0x28beff - _0x20ddbc], _0x347e4a[_0x307ec3(0x1f4)][_0x4c1b7f] = _0x2488af;
                }
                _0x15c461[_0x307ec3(0x194)] && (_0x35ee42 = _0x38e9a1[_0x307ec3(0x222)]);
                if (_0x15c461[_0x307ec3(0xda)] && !_0x336995) {
                    let _0x16c127 = await _0x5e5c38(_0x38e9a1['id']);
                    _0x16c127['status'] === 'ok' ? _0x16c127[_0x307ec3(0x258)][0x0][_0x307ec3(0x1fc)] ? _0x19b510 ? _0x526611(_0x16c127[_0x307ec3(0x258)][0x0][_0x307ec3(0x1fc)][0x0][_0x307ec3(0x199)]) : _0x56c209(_0x16c127[_0x307ec3(0x258)][0x0]['video_versions'][0x0][_0x307ec3(0x199)], _0x46e223, _0x307ec3(0x1f4), _0x35ee42, _0x307ec3(0x250)) : _0x19b510 ? _0x526611(_0x16c127[_0x307ec3(0x258)][0x0]['image_versions2']['candidates'][0x0][_0x307ec3(0x199)]) : _0x56c209(_0x16c127[_0x307ec3(0x258)][0x0][_0x307ec3(0x25e)]['candidates'][0x0][_0x307ec3(0x199)], _0x46e223, 'highlights', _0x35ee42, 'jpg') : (_0x15c461[_0x307ec3(0x241)] ? (delete _0x347e4a[_0x307ec3(0x1f4)][_0x4c1b7f], _0x336995 = !![], _0x3e3c56(!![], _0x19b510)) : alert(_0x307ec3(0x259) + _0x16c127['message']), console[_0x307ec3(0xc5)](_0x16c127));
                } else
                    _0x38e9a1[_0x307ec3(0x169)] ? _0x19b510 ? _0x526611(_0x38e9a1[_0x307ec3(0x24d)]['at'](-0x1)['src'], _0x46e223) : _0x56c209(_0x38e9a1['video_resources']['at'](-0x1)['src'], _0x46e223, _0x307ec3(0x1f4), _0x35ee42, 'mp4', _0x4c1b7f) : _0x19b510 ? _0x526611(_0x38e9a1[_0x307ec3(0xd0)]['at'](-0x1)[_0x307ec3(0x218)], _0x46e223) : _0x56c209(_0x38e9a1[_0x307ec3(0xd0)]['at'](-0x1)[_0x307ec3(0x218)], _0x46e223, _0x307ec3(0x1f4), _0x35ee42, _0x307ec3(0x19d), _0x4c1b7f), _0x336995 = ![];
                _0x358bab(![]);
            } else {
                if (!_0x3f66b5(_0x307ec3(0x231))[_0x307ec3(0x1de)]) {
                    let _0x353ba1 = null;
                    _0x3f66b5(_0x307ec3(0xbf))['length'] > 0x0 ? _0x353ba1 = _0x3f66b5('body\x20>\x20div\x20section:visible._ac0a') : (_0x353ba1 = _0x3f66b5('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x353ba1['css']('position', _0x307ec3(0xc9)));
                    if (_0x353ba1['length'] === 0x0) {
                        let _0x29743e = _0x3f66b5(_0x307ec3(0xe1)), _0x1670a2 = 0x0;
                        _0x29743e[_0x307ec3(0xcb)](function () {
                            const _0x1f83b7 = _0x307ec3;
                            _0x3f66b5(this)['width']() > _0x1670a2 && (_0x1670a2 = _0x3f66b5(this)[_0x1f83b7(0x204)](), _0x353ba1 = _0x3f66b5(this)[_0x1f83b7(0x1b4)](_0x1f83b7(0x16e))[_0x1f83b7(0x172)]());
                        });
                    }
                    _0x353ba1 != null && (_0x353ba1[_0x307ec3(0x1bd)](_0x307ec3(0x233) + _0x4b1f2('DW') + _0x307ec3(0xdc) + _0x15c3f8[_0x307ec3(0x1fa)] + _0x307ec3(0x1c6)), _0x353ba1[_0x307ec3(0x1bd)]('<div\x20title=\x22' + _0x4b1f2(_0x307ec3(0x288)) + _0x307ec3(0x1ce) + _0x15c3f8[_0x307ec3(0x288)] + _0x307ec3(0x1c6)));
                }
            }
        }
        async function _0x37df51(_0x8e23a) {
            const _0x325e91 = _0x5ad020;
            if (_0x8e23a) {
                let _0x4be3db = new Date()[_0x325e91(0x261)](), _0x2ceea1 = Math[_0x325e91(0x23e)](_0x4be3db / 0x3e8), _0x118836 = location[_0x325e91(0x1c5)][_0x325e91(0xf3)](/\/$/ig, '')[_0x325e91(0x207)]('/')['at'](-0x1), _0xdd01a5 = '', _0x41359c = _0x3f66b5('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x325e91(0x1de)] || _0x3f66b5(_0x325e91(0x25a))[_0x325e91(0x1de)] || _0x3f66b5('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x325e91(0x125)](_0x325e91(0x173))[_0x325e91(0x1de)], _0x11b22d = '';
                _0x358bab(!![]);
                if (_0x347e4a[_0x325e91(0x1f4)][_0x118836]) {
                    console[_0x325e91(0xc5)]('Fetch\x20from\x20memory\x20cache:', _0x118836);
                    let _0x578f36 = _0x347e4a[_0x325e91(0x1f4)][_0x118836][_0x325e91(0x1fe)]['reels_media'][0x0][_0x325e91(0x258)][_0x325e91(0x1de)];
                    _0xdd01a5 = _0x347e4a[_0x325e91(0x1f4)][_0x118836]['data'][_0x325e91(0xf2)][0x0][_0x325e91(0x1d7)][_0x325e91(0x131)], _0x11b22d = _0x347e4a[_0x325e91(0x1f4)][_0x118836][_0x325e91(0x1fe)][_0x325e91(0xf2)][0x0][_0x325e91(0x258)][_0x578f36 - _0x41359c];
                } else {
                    let _0x26d13c = await _0x56dda1(_0x118836), _0x41c590 = _0x26d13c['data']['reels_media'][0x0]['items'][_0x325e91(0x1de)];
                    _0xdd01a5 = _0x26d13c[_0x325e91(0x1fe)][_0x325e91(0xf2)][0x0][_0x325e91(0x1d7)]['username'], _0x11b22d = _0x26d13c[_0x325e91(0x1fe)]['reels_media'][0x0][_0x325e91(0x258)][_0x41c590 - _0x41359c], _0x347e4a['highlights'][_0x118836] = _0x26d13c;
                }
                _0x15c461[_0x325e91(0x194)] && (_0x2ceea1 = _0x11b22d['taken_at_timestamp']);
                if (_0x15c461[_0x325e91(0xda)] && !_0x336995) {
                    let _0x42f4c7 = await _0x5e5c38(_0x11b22d['id']);
                    _0x42f4c7[_0x325e91(0x1d0)] === 'ok' ? _0x56c209(_0x42f4c7[_0x325e91(0x258)][0x0][_0x325e91(0x25e)][_0x325e91(0x152)][0x0][_0x325e91(0x199)], _0xdd01a5, _0x325e91(0x1f4), _0x2ceea1, _0x325e91(0x19d)) : (_0x15c461[_0x325e91(0x241)] ? (delete _0x347e4a[_0x325e91(0x1f4)][_0x118836], _0x336995 = !![], _0x37df51(!![])) : alert(_0x325e91(0x259) + _0x42f4c7[_0x325e91(0x196)]), console[_0x325e91(0xc5)](_0x42f4c7));
                } else
                    _0x56c209(_0x11b22d[_0x325e91(0xd0)]['at'](-0x1)[_0x325e91(0x218)], _0xdd01a5, _0x325e91(0x1f4), _0x2ceea1, _0x325e91(0x19d), _0x118836), _0x336995 = ![];
                _0x358bab(![]);
            } else {
                if (_0x3f66b5(_0x325e91(0xd1))['length']) {
                    if (!_0x3f66b5(_0x325e91(0x1bb))['length']) {
                        let _0x4a3c83 = null;
                        _0x3f66b5(_0x325e91(0xbf))[_0x325e91(0x1de)] > 0x0 ? _0x4a3c83 = _0x3f66b5(_0x325e91(0x167)) : (_0x4a3c83 = _0x3f66b5('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x4a3c83[_0x325e91(0x22b)](_0x325e91(0x16c), _0x325e91(0xc9)));
                        if (_0x4a3c83[_0x325e91(0x1de)] === 0x0) {
                            let _0x14d6ec = _0x3f66b5(_0x325e91(0xe1)), _0x15b653 = 0x0;
                            _0x14d6ec[_0x325e91(0xcb)](function () {
                                const _0x170072 = _0x325e91;
                                _0x3f66b5(this)[_0x170072(0x204)]() > _0x15b653 && (_0x15b653 = _0x3f66b5(this)[_0x170072(0x204)](), _0x4a3c83 = _0x3f66b5(this)['children'](_0x170072(0x16e))[_0x170072(0x172)]());
                            });
                        }
                        _0x4a3c83 != null && _0x4a3c83[_0x325e91(0x1bd)](_0x325e91(0x233) + _0x4b1f2(_0x325e91(0x137)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x15c3f8[_0x325e91(0x219)] + '</div>');
                    }
                } else
                    _0x3f66b5(_0x325e91(0x1bb))['remove']();
            }
        }
        async function _0x20c3dc(_0x3ac980, _0x68d2d5, _0x18b3df) {
            const _0x244bde = _0x5ad020;
            if (_0x3ac980) {
                let _0x568c57 = new Date()['getTime'](), _0x56a563 = Math[_0x244bde(0x23e)](_0x568c57 / 0x3e8), _0x1738b7 = _0x3f66b5(_0x244bde(0x1a1))[_0x244bde(0x172)]()[_0x244bde(0x179)]() || location['pathname']['split']('/')['at'](0x2);
                _0x358bab(!![]);
                if (_0x15c461['FORCE_RESOURCE_VIA_MEDIA'] && !_0x336995) {
                    let _0x12fbb0 = null, _0x248691 = await _0x267c0b(_0x1738b7), _0x30c44f = _0x248691['user']['pk'], _0x5dfa27 = await _0x5c725e(_0x30c44f);
                    _0x3f66b5(_0x244bde(0x142))[_0x244bde(0xcb)](function (_0x25a9a2) {
                        const _0x3cdcaf = _0x244bde;
                        _0x3f66b5(this)[_0x3cdcaf(0xb2)]('x1lix1fw') && (_0x3f66b5(this)[_0x3cdcaf(0x1b4)]()['length'] > 0x0 && (_0x12fbb0 = _0x5dfa27[_0x3cdcaf(0x1fe)][_0x3cdcaf(0xf2)][0x0][_0x3cdcaf(0x258)][_0x25a9a2]['id']));
                    }), _0x3f66b5(_0x244bde(0xe8))[_0x244bde(0xcb)](function (_0x5cba33) {
                        const _0x243018 = _0x244bde;
                        _0x3f66b5(this)[_0x243018(0x1b4)]()['hasClass'](_0x243018(0x14c)) && (_0x12fbb0 = _0x5dfa27['data']['reels_media'][0x0][_0x243018(0x258)][_0x5cba33]['id']);
                    });
                    _0x12fbb0 == null && (_0x12fbb0 = location['pathname'][_0x244bde(0x207)]('/')[_0x244bde(0x159)](_0x419224 => _0x419224[_0x244bde(0x1de)] > 0x0 && _0x419224[_0x244bde(0x1d8)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x2bb8b7 = await _0x5e5c38(_0x12fbb0);
                    _0x15c461[_0x244bde(0x194)] && (_0x56a563 = _0x2bb8b7[_0x244bde(0x258)][0x0][_0x244bde(0xbb)]);
                    _0x2bb8b7['status'] === 'ok' ? _0x2bb8b7[_0x244bde(0x258)][0x0][_0x244bde(0x1fc)] ? _0x18b3df ? _0x526611(_0x2bb8b7[_0x244bde(0x258)][0x0]['video_versions'][0x0][_0x244bde(0x199)]) : _0x56c209(_0x2bb8b7[_0x244bde(0x258)][0x0][_0x244bde(0x1fc)][0x0]['url'], _0x1738b7, _0x244bde(0x252), _0x56a563, _0x244bde(0x250)) : _0x18b3df ? _0x526611(_0x2bb8b7[_0x244bde(0x258)][0x0][_0x244bde(0x25e)]['candidates'][0x0][_0x244bde(0x199)]) : _0x56c209(_0x2bb8b7[_0x244bde(0x258)][0x0][_0x244bde(0x25e)][_0x244bde(0x152)][0x0][_0x244bde(0x199)], _0x1738b7, _0x244bde(0x252), _0x56a563, _0x244bde(0x19d)) : (_0x15c461[_0x244bde(0x241)] ? (_0x336995 = !![], _0x20c3dc(_0x3ac980, _0x68d2d5, _0x18b3df)) : alert(_0x244bde(0x259) + _0x2bb8b7[_0x244bde(0x196)]), console[_0x244bde(0xc5)](_0x2bb8b7));
                    _0x358bab(![]);
                    return;
                }
                if (_0x3f66b5(_0x244bde(0x132))[_0x244bde(0x1de)] > 0x0) {
                    let _0x74e448 = 'mp4', _0x4b2468 = '', _0x37f1ae = location['pathname'][_0x244bde(0xf3)](/\/$/ig, '')[_0x244bde(0x207)]('/')['at'](-0x1);
                    if (_0x347e4a[_0x244bde(0x252)][_0x1738b7] && !_0x68d2d5) {
                        console[_0x244bde(0xc5)]('Fetch\x20from\x20memory\x20cache:', _0x1738b7), _0x347e4a[_0x244bde(0x252)][_0x1738b7][_0x244bde(0x1fe)][_0x244bde(0xf2)][0x0][_0x244bde(0x258)]['forEach'](_0x3f4227 => {
                            const _0x3efae5 = _0x244bde;
                            _0x3f4227['id'] == _0x37f1ae && (_0x4b2468 = _0x3f4227[_0x3efae5(0x24d)][0x0][_0x3efae5(0x218)], _0x15c461[_0x3efae5(0x194)] && (_0x56a563 = _0x3f4227[_0x3efae5(0x222)]));
                        });
                        if (_0x4b2468[_0x244bde(0x1de)] == 0x0) {
                            console[_0x244bde(0xc5)]('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x1738b7), _0x20c3dc(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x79e2d2 = await _0x267c0b(_0x1738b7), _0x503d1b = _0x79e2d2[_0x244bde(0x1eb)]['pk'], _0x1f1812 = await _0x5c725e(_0x503d1b);
                        _0x1f1812[_0x244bde(0x1fe)][_0x244bde(0xf2)][0x0][_0x244bde(0x258)][_0x244bde(0x1dd)](_0xe1fed9 => {
                            const _0x3a253f = _0x244bde;
                            _0xe1fed9['id'] == _0x37f1ae && (_0x4b2468 = _0xe1fed9['video_resources'][0x0][_0x3a253f(0x218)], _0x15c461[_0x3a253f(0x194)] && (_0x56a563 = _0xe1fed9[_0x3a253f(0x222)]));
                        }), _0x4b2468[_0x244bde(0x1de)] == 0x0 && (_0x3f66b5(_0x244bde(0x142))[_0x244bde(0xcb)](function (_0x5ecec1) {
                            const _0x592364 = _0x244bde;
                            _0x3f66b5(this)['hasClass'](_0x592364(0x20d)) && (_0x3f66b5(this)[_0x592364(0x1b4)]()['length'] > 0x0 && (_0x4b2468 = _0x1f1812[_0x592364(0x1fe)]['reels_media'][0x0]['items'][_0x5ecec1][_0x592364(0x24d)][0x0][_0x592364(0x218)], _0x15c461[_0x592364(0x194)] && (_0x56a563 = _0x1f1812[_0x592364(0x1fe)][_0x592364(0xf2)][0x0][_0x592364(0x258)][_0x5ecec1][_0x592364(0x222)])));
                        }), _0x3f66b5(_0x244bde(0xe8))['each'](function (_0x19ee35) {
                            const _0x3ad7d9 = _0x244bde;
                            _0x3f66b5(this)[_0x3ad7d9(0x1b4)]()[_0x3ad7d9(0xb2)](_0x3ad7d9(0x14c)) && (_0x4b2468 = _0x1f1812[_0x3ad7d9(0x1fe)]['reels_media'][0x0][_0x3ad7d9(0x258)][_0x19ee35]['video_resources'][0x0][_0x3ad7d9(0x218)], _0x15c461[_0x3ad7d9(0x194)] && (_0x56a563 = _0x1f1812[_0x3ad7d9(0x1fe)][_0x3ad7d9(0xf2)][0x0][_0x3ad7d9(0x258)][_0x19ee35][_0x3ad7d9(0x222)]));
                        })), _0x347e4a[_0x244bde(0x252)][_0x1738b7] = _0x1f1812;
                    }
                    _0x4b2468[_0x244bde(0x1de)] == 0x0 ? alert(_0x4b1f2('NO_VID_URL')) : _0x18b3df ? _0x526611(_0x4b2468) : _0x56c209(_0x4b2468, _0x1738b7, _0x244bde(0x252), _0x56a563, _0x74e448);
                } else {
                    let _0x5099e3 = _0x3f66b5('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')['attr'](_0x244bde(0x100))?.[_0x244bde(0x207)](',')[0x0]?.[_0x244bde(0x207)]('\x20')[0x0], _0x3cc7e7 = _0x5099e3 ? _0x5099e3 : _0x3f66b5(_0x244bde(0xab))[_0x244bde(0xfe)](_0x244bde(0x218));
                    if (!_0x3cc7e7) {
                        let _0x332ac7 = _0x3f66b5('body\x20>\x20div\x20section:visible\x20img._aa63');
                        _0x3cc7e7 = _0x332ac7['attr'](_0x244bde(0x100)) ? _0x332ac7[_0x244bde(0xfe)]('srcset')?.[_0x244bde(0x207)](',')[0x0]?.[_0x244bde(0x207)]('\x20')[0x0] : _0x332ac7['attr'](_0x244bde(0x218));
                    }
                    _0x15c461['RENAME_PUBLISH_DATE'] && (_0x56a563 = new Date(_0x3f66b5(_0x244bde(0x244))['first']()[_0x244bde(0xfe)](_0x244bde(0x181)))[_0x244bde(0x261)]());
                    let _0x59f860 = _0x3cc7e7, _0x51e3d0 = _0x244bde(0x19d);
                    _0x18b3df ? _0x526611(_0x59f860) : _0x56c209(_0x59f860, _0x1738b7, _0x244bde(0x252), _0x56a563, _0x51e3d0);
                }
                _0x336995 = ![], _0x358bab(![]);
            } else {
                let _0x5b3bc0 = 'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;';
                if (!_0x3f66b5(_0x244bde(0x1af))[_0x244bde(0x1de)]) {
                    _0x347e4a[_0x244bde(0x252)] = {};
                    let _0x28ee04 = null;
                    _0x3f66b5(_0x244bde(0xbf))['length'] > 0x0 ? _0x28ee04 = _0x3f66b5(_0x244bde(0x167)) : (_0x28ee04 = _0x3f66b5(_0x244bde(0x17f)), _0x28ee04['css'](_0x244bde(0x16c), _0x244bde(0xc9)));
                    _0x28ee04[_0x244bde(0x1de)] === 0x0 && (_0x28ee04 = _0x3f66b5(_0x244bde(0x14e))['parent']()[_0x244bde(0x125)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x28ee04['css'](_0x244bde(0x16c), _0x244bde(0xc9)));
                    _0x28ee04['length'] === 0x0 && (_0x28ee04 = _0x3f66b5(_0x244bde(0x14e))[_0x244bde(0x1a5)]()['find']('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x28ee04[_0x244bde(0x22b)](_0x244bde(0x16c), _0x244bde(0xc9)));
                    if (_0x28ee04[_0x244bde(0x1de)] === 0x0) {
                        let _0x37b6dd = _0x3f66b5(_0x244bde(0xe1)), _0x56b38a = 0x0;
                        _0x37b6dd[_0x244bde(0xcb)](function () {
                            const _0x29c1d3 = _0x244bde;
                            _0x3f66b5(this)['width']() > _0x56b38a && (_0x56b38a = _0x3f66b5(this)['width'](), _0x28ee04 = _0x3f66b5(this)['children'](_0x29c1d3(0x16e))['first']());
                        });
                    }
                    _0x28ee04 != null && (_0x28ee04[_0x244bde(0x172)]()[_0x244bde(0x22b)](_0x244bde(0x16c), 'relative'), _0x28ee04['first']()['append'](_0x244bde(0x233) + _0x4b1f2('DW') + _0x244bde(0x21e) + _0x15c3f8['DOWNLOAD'] + _0x244bde(0x1c6)), _0x28ee04['first']()[_0x244bde(0x1bd)](_0x244bde(0x233) + _0x4b1f2(_0x244bde(0x288)) + _0x244bde(0x1e0) + _0x15c3f8['NEW_TAB'] + _0x244bde(0x1c6)), _0x33c621(![]));
                }
            }
        }
        async function _0x33c621(_0x178a5a, _0x1af99b) {
            const _0x37fa55 = _0x5ad020;
            if (_0x178a5a) {
                let _0x5f3fcf = new Date()[_0x37fa55(0x261)](), _0x59a7b7 = Math[_0x37fa55(0x23e)](_0x5f3fcf / 0x3e8), _0x4f45c2 = _0x37fa55(0x19d), _0x53b900 = _0x3f66b5('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x37fa55(0x172)]()[_0x37fa55(0x179)]() || location[_0x37fa55(0x11b)][_0x37fa55(0x207)]('/')['at'](0x2), _0xed2fcb = 'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;', _0x4cda2c = location[_0x37fa55(0x11b)]['replace'](/\/$/ig, '')[_0x37fa55(0x207)]('/')['at'](-0x1), _0x39882a = '';
                _0x358bab(!![]);
                if (_0x15c461[_0x37fa55(0xda)] && !_0x336995) {
                    let _0x2595fa = null, _0x314345 = await _0x267c0b(_0x53b900), _0x46e5ba = _0x314345['user']['pk'], _0x1c1a67 = await _0x5c725e(_0x46e5ba);
                    _0x3f66b5('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x37fa55(0xcb)](function (_0x5a1f51) {
                        const _0x38b5a7 = _0x37fa55;
                        _0x3f66b5(this)['hasClass'](_0x38b5a7(0x20d)) && (_0x3f66b5(this)['children']()['length'] > 0x0 && (_0x2595fa = _0x1c1a67[_0x38b5a7(0x1fe)]['reels_media'][0x0][_0x38b5a7(0x258)][_0x5a1f51]['id']));
                    }), _0x3f66b5(_0x37fa55(0xe8))[_0x37fa55(0xcb)](function (_0xb9037a) {
                        const _0x50b470 = _0x37fa55;
                        _0x3f66b5(this)[_0x50b470(0x1b4)]()[_0x50b470(0xb2)]('_ac3q') && (_0x2595fa = _0x1c1a67[_0x50b470(0x1fe)][_0x50b470(0xf2)][0x0][_0x50b470(0x258)][_0xb9037a]['id']);
                    });
                    _0x2595fa == null && (_0x2595fa = location[_0x37fa55(0x11b)][_0x37fa55(0x207)]('/')['filter'](_0x50441f => _0x50441f[_0x37fa55(0x1de)] > 0x0 && _0x50441f[_0x37fa55(0x1d8)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x531f64 = await _0x5e5c38(_0x2595fa);
                    _0x15c461[_0x37fa55(0x194)] && (_0x59a7b7 = _0x531f64[_0x37fa55(0x258)][0x0][_0x37fa55(0xbb)]);
                    _0x531f64[_0x37fa55(0x1d0)] === 'ok' ? _0x56c209(_0x531f64[_0x37fa55(0x258)][0x0][_0x37fa55(0x25e)][_0x37fa55(0x152)][0x0][_0x37fa55(0x199)], _0x53b900, _0x37fa55(0x252), _0x59a7b7, _0x37fa55(0x19d)) : (_0x15c461[_0x37fa55(0x241)] ? (_0x336995 = !![], _0x33c621(!![], _0x1af99b)) : alert(_0x37fa55(0x259) + _0x531f64['message']), console[_0x37fa55(0xc5)](_0x531f64));
                    _0x358bab(![]);
                    return;
                }
                if (_0x347e4a['stories'][_0x53b900] && !_0x1af99b) {
                    console[_0x37fa55(0xc5)](_0x37fa55(0x21d), _0x53b900), _0x347e4a[_0x37fa55(0x252)][_0x53b900][_0x37fa55(0x1fe)][_0x37fa55(0xf2)][0x0][_0x37fa55(0x258)][_0x37fa55(0x1dd)](_0x10e912 => {
                        const _0x3fd596 = _0x37fa55;
                        _0x10e912['id'] == _0x4cda2c && (_0x39882a = _0x10e912[_0x3fd596(0x284)], _0x15c461['RENAME_PUBLISH_DATE'] && (_0x59a7b7 = _0x10e912[_0x3fd596(0x222)]));
                    });
                    if (_0x39882a[_0x37fa55(0x1de)] == 0x0) {
                        console[_0x37fa55(0xc5)](_0x37fa55(0xf5), _0x53b900), _0x33c621(!![], !![]);
                        return;
                    }
                } else {
                    let _0x39c48a = await _0x267c0b(_0x53b900), _0x31ff31 = _0x39c48a[_0x37fa55(0x1eb)]['pk'], _0x2c9e75 = await _0x5c725e(_0x31ff31);
                    _0x2c9e75[_0x37fa55(0x1fe)][_0x37fa55(0xf2)][0x0][_0x37fa55(0x258)][_0x37fa55(0x1dd)](_0x2c6810 => {
                        const _0x16a2fd = _0x37fa55;
                        _0x2c6810['id'] == _0x4cda2c && (_0x39882a = _0x2c6810[_0x16a2fd(0x284)], _0x15c461[_0x16a2fd(0x194)] && (_0x59a7b7 = _0x2c6810['taken_at_timestamp']));
                    }), _0x39882a['length'] == 0x0 && (_0x3f66b5(_0x37fa55(0x142))[_0x37fa55(0xcb)](function (_0x1e8f7f) {
                        const _0x39c4aa = _0x37fa55;
                        _0x3f66b5(this)[_0x39c4aa(0xb2)](_0x39c4aa(0x20d)) && (_0x3f66b5(this)[_0x39c4aa(0x1b4)]()[_0x39c4aa(0x1de)] > 0x0 && (_0x39882a = _0x2c9e75[_0x39c4aa(0x1fe)]['reels_media'][0x0][_0x39c4aa(0x258)][_0x1e8f7f]['display_url'], _0x15c461['RENAME_PUBLISH_DATE'] && (_0x59a7b7 = _0x2c9e75['data']['reels_media'][0x0]['items'][_0x1e8f7f][_0x39c4aa(0x222)])));
                    }), _0x3f66b5(_0x37fa55(0xe8))[_0x37fa55(0xcb)](function (_0x2ae4e4) {
                        const _0x54e898 = _0x37fa55;
                        _0x3f66b5(this)['children']()[_0x54e898(0xb2)]('_ac3q') && (_0x39882a = _0x2c9e75[_0x54e898(0x1fe)][_0x54e898(0xf2)][0x0][_0x54e898(0x258)][_0x2ae4e4][_0x54e898(0x284)], _0x15c461[_0x54e898(0x194)] && (_0x59a7b7 = _0x2c9e75[_0x54e898(0x1fe)]['reels_media'][0x0][_0x54e898(0x258)][_0x2ae4e4][_0x54e898(0x222)]));
                    }));
                }
                _0x56c209(_0x39882a, _0x53b900, _0x37fa55(0x1a6), _0x59a7b7, _0x4f45c2), _0x336995 = ![], _0x358bab(![]);
            } else {
                if (_0x3f66b5('body\x20>\x20div\x20div.IG_DWSTORY')[_0x37fa55(0x1a5)]()['find']('video[class]')[_0x37fa55(0x1de)]) {
                    let _0x4c77bc = null;
                    _0x3f66b5('body\x20>\x20div\x20section._ac0a')['length'] > 0x0 ? _0x4c77bc = _0x3f66b5(_0x37fa55(0x167)) : (_0x4c77bc = _0x3f66b5(_0x37fa55(0x17f)), _0x4c77bc[_0x37fa55(0x22b)](_0x37fa55(0x16c), 'relative'));
                    _0x4c77bc[_0x37fa55(0x1de)] === 0x0 && (_0x4c77bc = _0x3f66b5(_0x37fa55(0x14e))[_0x37fa55(0x1a5)]()[_0x37fa55(0x125)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x4c77bc[_0x37fa55(0x22b)](_0x37fa55(0x16c), 'relative'));
                    _0x4c77bc[_0x37fa55(0x1de)] === 0x0 && (_0x4c77bc = _0x3f66b5(_0x37fa55(0x14e))['parent']()[_0x37fa55(0x125)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x4c77bc[_0x37fa55(0x22b)](_0x37fa55(0x16c), _0x37fa55(0xc9)));
                    if (_0x4c77bc[_0x37fa55(0x1de)] === 0x0) {
                        let _0x13c275 = _0x3f66b5('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x233097 = 0x0;
                        _0x13c275[_0x37fa55(0xcb)](function () {
                            const _0x1473cd = _0x37fa55;
                            _0x3f66b5(this)[_0x1473cd(0x204)]() > _0x233097 && (_0x233097 = _0x3f66b5(this)[_0x1473cd(0x204)](), _0x4c77bc = _0x3f66b5(this)[_0x1473cd(0x1b4)](_0x1473cd(0x16e))[_0x1473cd(0x172)]());
                        });
                    }
                    _0x4c77bc != null && (_0x4c77bc[_0x37fa55(0x172)]()[_0x37fa55(0x22b)](_0x37fa55(0x16c), _0x37fa55(0xc9)), _0x4c77bc[_0x37fa55(0x172)]()[_0x37fa55(0x1bd)](_0x37fa55(0x233) + _0x4b1f2(_0x37fa55(0x137)) + _0x37fa55(0x136) + _0x15c3f8[_0x37fa55(0x219)] + _0x37fa55(0x1c6)));
                }
            }
        }
        async function _0x1d95cc(_0x15de9b, _0x4c0c0c, _0x4de1e0) {
            const _0x430fa4 = _0x5ad020;
            if (_0x15de9b) {
                _0x358bab(!![]);
                let _0x351921 = location['href'][_0x430fa4(0x207)]('?')['at'](0x0)['split'](_0x430fa4(0xaf))['at'](-0x1)[_0x430fa4(0x240)]('/', ''), _0x1f0dbc = await _0x4e6b1d(_0x351921), _0x1c39cb = new Date()['getTime']();
                _0x15c461[_0x430fa4(0x194)] && (_0x1c39cb = _0x1f0dbc[_0x430fa4(0xf8)][_0x430fa4(0x222)]);
                if (_0x4c0c0c && _0x1f0dbc[_0x430fa4(0xf8)][_0x430fa4(0x169)]) {
                    if (_0x4de1e0)
                        _0x526611(_0x1f0dbc[_0x430fa4(0xf8)][_0x430fa4(0xb7)]);
                    else {
                        let _0x457a00 = _0x430fa4(0x250);
                        _0x56c209(_0x1f0dbc['shortcode_media'][_0x430fa4(0xb7)], _0x1f0dbc[_0x430fa4(0xf8)][_0x430fa4(0x1d7)][_0x430fa4(0x131)], _0x430fa4(0x1da), _0x1c39cb, _0x457a00, _0x351921);
                    }
                } else {
                    if (_0x4de1e0)
                        _0x526611(_0x1f0dbc['shortcode_media'][_0x430fa4(0xd0)]['at'](-0x1)[_0x430fa4(0x218)]);
                    else {
                        let _0x493f9f = _0x430fa4(0x19d);
                        _0x56c209(_0x1f0dbc['shortcode_media'][_0x430fa4(0xd0)]['at'](-0x1)['src'], _0x1f0dbc[_0x430fa4(0xf8)][_0x430fa4(0x1d7)][_0x430fa4(0x131)], _0x430fa4(0x1da), _0x1c39cb, _0x493f9f, _0x351921);
                    }
                }
                _0x358bab(![]);
            } else
                var _0x2e1c35 = setInterval(() => {
                    const _0x204266 = _0x430fa4;
                    _0x3f66b5('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')['length'] > 0x0 && (clearInterval(_0x2e1c35), _0x15c461['SCROLL_BUTTON'] && (_0x3f66b5('#scrollWrapper')[_0x204266(0x1c7)](), _0x3f66b5(_0x204266(0x168))[_0x204266(0x1bd)]('<section\x20id=\x22scrollWrapper\x22></section>'), _0x3f66b5(_0x204266(0x10b))[_0x204266(0x1bd)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x3f66b5(_0x204266(0x10b))[_0x204266(0x1bd)](_0x204266(0x147)), _0x3f66b5('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up')['on']('click', function () {
                        const _0x328adf = _0x204266;
                        _0x3f66b5('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x328adf(0x1f8)]({
                            'top': -0x1e,
                            'behavior': _0x328adf(0x23d)
                        });
                    }), _0x3f66b5('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0x204266(0x200), function () {
                        const _0x225524 = _0x204266;
                        _0x3f66b5('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x225524(0x1f8)]({
                            'top': 0x1e,
                            'behavior': _0x225524(0x23d)
                        });
                    })), _0x3f66b5(_0x204266(0x1a4))['children'](_0x204266(0x16e))[_0x204266(0xcb)](function () {
                        const _0x1af988 = _0x204266;
                        if (_0x3f66b5(this)[_0x1af988(0x1b4)]()[_0x1af988(0x1de)] > 0x0) {
                            if (!_0x3f66b5(this)[_0x1af988(0x1b4)]()[_0x1af988(0x125)](_0x1af988(0xbe))[_0x1af988(0x1de)]) {
                                var _0x3e3afa = _0x3f66b5(this);
                                _0x3f66b5(this)[_0x1af988(0x1b4)]()['css'](_0x1af988(0x16c), 'relative'), _0x3f66b5(this)[_0x1af988(0x1b4)]()[_0x1af988(0x1bd)](_0x1af988(0x233) + _0x4b1f2('DW') + _0x1af988(0x15b) + _0x15c3f8[_0x1af988(0x1fa)] + '</div>'), _0x3f66b5(this)[_0x1af988(0x1b4)]()[_0x1af988(0x1bd)]('<div\x20title=\x22' + _0x4b1f2(_0x1af988(0x288)) + _0x1af988(0x175) + _0x15c3f8['NEW_TAB'] + _0x1af988(0x1c6)), _0x3f66b5(this)['children']()[_0x1af988(0x1bd)](_0x1af988(0x233) + _0x4b1f2(_0x1af988(0x137)) + _0x1af988(0x11e) + _0x15c3f8['THUMBNAIL'] + _0x1af988(0x1c6));
                                _0x15c461[_0x1af988(0x17e)] && _0x3f66b5(this)['find'](_0x1af988(0x286))[_0x1af988(0xcb)](function () {
                                    const _0x4d4ee8 = _0x1af988;
                                    !_0x3f66b5(this)[_0x4d4ee8(0x1fe)](_0x4d4ee8(0xf1)) && (console[_0x4d4ee8(0xc5)](_0x4d4ee8(0x289)), _0x3f66b5(this)['on']('ended', function () {
                                        const _0x2a88f2 = _0x4d4ee8;
                                        _0x3f66b5(this)['attr']('data-loop', !![]);
                                        let _0xb9ddc9 = _0x3f66b5(this)[_0x2a88f2(0xe4)]()[_0x2a88f2(0x125)](_0x2a88f2(0xfb));
                                        _0xb9ddc9[_0x2a88f2(0x1de)] > 0x0 ? (_0xb9ddc9[_0x2a88f2(0x200)](), console[_0x2a88f2(0xc5)]('paused\x20click()')) : (_0x3f66b5(this)[_0x2a88f2(0x1a5)]()[_0x2a88f2(0x125)]('.xpgaw4o')[_0x2a88f2(0x180)](_0x2a88f2(0x17c)), this[_0x2a88f2(0xc4)](), console[_0x2a88f2(0xc5)](_0x2a88f2(0x209)));
                                    }));
                                });
                                _0x15c461[_0x1af988(0x1ef)] && _0x3f66b5(this)[_0x1af988(0x125)](_0x1af988(0x286))['each'](function () {
                                    const _0x31086a = _0x1af988;
                                    !_0x3f66b5(this)[_0x31086a(0x1fe)]('modify') && (console[_0x31086a(0xc5)](_0x31086a(0x12f)), this['volume'] = _0x3a814a, _0x3f66b5(this)['on'](_0x31086a(0x1b1), function () {
                                        const _0x41b8b6 = _0x31086a;
                                        this[_0x41b8b6(0x20f)] = _0x3a814a;
                                    }), _0x3f66b5(this)['on'](_0x31086a(0x1a8), function () {
                                        this['volume'] = _0x3a814a;
                                    }), _0x3f66b5(this)[_0x31086a(0xfe)](_0x31086a(0x1df), !![]));
                                });
                                _0x15c461[_0x1af988(0x162)] && _0x3f66b5(this)[_0x1af988(0x125)](_0x1af988(0x286))[_0x1af988(0xcb)](function () {
                                    const _0x3373b2 = _0x1af988;
                                    if (!_0x3f66b5(this)[_0x3373b2(0x1fe)](_0x3373b2(0xc8))) {
                                        let _0x3a2f81 = _0x3f66b5(this);
                                        console[_0x3373b2(0xc5)]('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), this[_0x3373b2(0x20f)] = _0x3a814a, _0x3f66b5(this)['on'](_0x3373b2(0x1ac), function () {
                                            const _0x13b26f = _0x3373b2;
                                            this[_0x13b26f(0x20f)] = _0x3a814a;
                                        }), _0x3f66b5(this)['on'](_0x3373b2(0x174), function (_0x3dc851) {
                                            const _0x3038f7 = _0x3373b2;
                                            _0x3dc851[_0x3038f7(0xdd)](), _0x3a2f81['css'](_0x3038f7(0x217), '-1'), _0x3a2f81[_0x3038f7(0x180)]('controls');
                                        }), _0x3f66b5(this)[_0x3373b2(0x1a5)]()[_0x3373b2(0x125)](_0x3373b2(0xdf))['filter'](function () {
                                            const _0x468ca8 = _0x3373b2;
                                            return _0x3f66b5(this)[_0x468ca8(0x1a5)](_0x468ca8(0xca))[_0x468ca8(0x1de)] > 0x0 && _0x3f66b5(this)['css'](_0x468ca8(0x11f)) === _0x468ca8(0x187) && _0x3f66b5(this)[_0x468ca8(0xfe)](_0x468ca8(0x17c)) != null;
                                        })[_0x3373b2(0x172)]()['on'](_0x3373b2(0x174), function (_0x49622f) {
                                            const _0x72c480 = _0x3373b2;
                                            _0x49622f[_0x72c480(0xdd)](), _0x3a2f81[_0x72c480(0x22b)](_0x72c480(0x217), '2'), _0x3a2f81[_0x72c480(0xfe)](_0x72c480(0xc8), !![]);
                                        }), _0x3f66b5(this)['on']('volumechange', function () {
                                            const _0x5c0e81 = _0x3373b2;
                                            let _0x3db725 = _0x3f66b5(this)[_0x5c0e81(0x1a5)]()[_0x5c0e81(0x125)]('video\x20+\x20div\x20>\x20div')[_0x5c0e81(0x125)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x5c0e81(0x159)](function (_0xe4355) {
                                                const _0x54e5a4 = _0x5c0e81;
                                                return _0x3f66b5(this)[_0x54e5a4(0x125)](_0x54e5a4(0xe5))[_0x54e5a4(0x1de)] === 0x0;
                                            });
                                            var _0x5de1c2 = _0x3db725[_0x5c0e81(0x125)](_0x5c0e81(0x1ec))['length'] === 0x0;
                                            this['muted'] != _0x5de1c2 && (this[_0x5c0e81(0x20f)] = _0x3a814a, _0x3db725?.[_0x5c0e81(0x200)]()), _0x3f66b5(this)['attr'](_0x5c0e81(0xf6)) && (_0x3a814a = this[_0x5c0e81(0x20f)], GM_setValue(_0x5c0e81(0x1ff), this[_0x5c0e81(0x20f)])), this[_0x5c0e81(0x20f)] == _0x3a814a && _0x3f66b5(this)['attr']('data-completed', !![]);
                                        }), _0x3f66b5(this)[_0x3373b2(0x22b)](_0x3373b2(0x16c), _0x3373b2(0x22a)), _0x3f66b5(this)[_0x3373b2(0x22b)]('z-index', '2'), _0x3f66b5(this)[_0x3373b2(0xfe)](_0x3373b2(0x15d), !![]), _0x3f66b5(this)[_0x3373b2(0xfe)](_0x3373b2(0xc8), !![]);
                                    }
                                });
                                var _0x320a42 = _0x3f66b5(this)['find'](_0x1af988(0x1ea))[_0x1af988(0x172)]();
                                _0x320a42[_0x1af988(0x1bd)](_0x1af988(0xb8)), _0x320a42[_0x1af988(0x125)](_0x1af988(0x1f0))[_0x1af988(0x1bd)](_0x1af988(0x188) + _0x3a814a + _0x1af988(0x15e)), _0x320a42[_0x1af988(0x125)](_0x1af988(0x10f))['attr'](_0x1af988(0x17c), _0x1af988(0x211) + (_0x3a814a * 0x64 + '%')), _0x320a42[_0x1af988(0x125)](_0x1af988(0x10f))['on'](_0x1af988(0x208), function () {
                                    const _0x167644 = _0x1af988;
                                    var _0x3578b2 = _0x3f66b5(this)[_0x167644(0x13e)]() * 0x64 + '%';
                                    _0x3a814a = _0x3f66b5(this)['val'](), GM_setValue(_0x167644(0x1ff), _0x3f66b5(this)[_0x167644(0x13e)]()), _0x3f66b5(this)['attr']('style', _0x167644(0x211) + _0x3578b2), _0x3e3afa[_0x167644(0x125)](_0x167644(0x286))[_0x167644(0xcb)](function () {
                                        const _0x21f085 = _0x167644;
                                        console['log'](_0x21f085(0xeb)), this['volume'] = _0x3a814a;
                                    });
                                }), _0x320a42[_0x1af988(0x125)]('div.volume_slider\x20input')['on'](_0x1af988(0x1ed), function () {
                                    const _0x37877d = _0x1af988;
                                    var _0x333bf8 = _0x3a814a * 0x64 + '%';
                                    _0x3f66b5(this)[_0x37877d(0xfe)](_0x37877d(0x17c), _0x37877d(0x211) + _0x333bf8), _0x3f66b5(this)['val'](_0x3a814a), _0x3e3afa[_0x37877d(0x125)]('video')['each'](function () {
                                        const _0x341801 = _0x37877d;
                                        console[_0x341801(0xc5)](_0x341801(0xeb)), this['volume'] = _0x3a814a;
                                    });
                                }), _0x320a42[_0x1af988(0x125)]('div.volume_slider')['on'](_0x1af988(0x200), function (_0x49820b) {
                                    const _0x19f505 = _0x1af988;
                                    _0x49820b[_0x19f505(0x1ee)](), _0x49820b['preventDefault']();
                                });
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x56dda1(_0x40eabd) {
            return new Promise((_0x26664c, _0x1d68e1) => {
                const _0x4f517f = a0_0x16e0;
                let _0x1bfbe0 = _0x4f517f(0xe9) + _0x40eabd + _0x4f517f(0x201);
                GM_xmlhttpRequest({
                    'method': _0x4f517f(0x1b2),
                    'url': _0x1bfbe0,
                    'onload': function (_0x172492) {
                        const _0x48c403 = _0x4f517f;
                        let _0x6f2cce = JSON[_0x48c403(0x1ad)](_0x172492['response']);
                        _0x26664c(_0x6f2cce);
                    },
                    'onerror': function (_0x4b2118) {
                        _0x1d68e1(_0x4b2118);
                    }
                });
            });
        }
        function _0x5c725e(_0x3a8f8c) {
            return new Promise((_0x5e9b64, _0x3b540c) => {
                const _0x2da24f = a0_0x16e0;
                let _0x4b5045 = _0x2da24f(0x221) + _0x3a8f8c + _0x2da24f(0x201);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x4b5045,
                    'onload': function (_0x36369c) {
                        const _0x2183e1 = _0x2da24f;
                        let _0x4fec05 = JSON[_0x2183e1(0x1ad)](_0x36369c[_0x2183e1(0x12c)]);
                        _0x5e9b64(_0x4fec05);
                    },
                    'onerror': function (_0x1dd641) {
                        _0x3b540c(_0x1dd641);
                    }
                });
            });
        }
        function _0x267c0b(_0x3522b1) {
            return new Promise((_0x46e25d, _0x1b23c4) => {
                let _0x3624bd = 'https://www.instagram.com/web/search/topsearch/?query=' + _0x3522b1;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3624bd,
                    'onload': function (_0x2376cd) {
                        const _0x218362 = a0_0x16e0;
                        let _0x2c2f8a = JSON[_0x218362(0x1ad)](_0x2376cd[_0x218362(0x12c)]), _0x425c75 = null;
                        _0x2c2f8a[_0x218362(0x12b)][_0x218362(0x1dd)](_0x281710 => {
                            _0x281710['user']['username'] === _0x3522b1 && (_0x425c75 = _0x281710);
                        }), _0x425c75 != null ? _0x46e25d(_0x425c75) : alert(_0x218362(0x160));
                    },
                    'onerror': function (_0x15e59c) {
                        _0x1b23c4(_0x15e59c);
                    }
                });
            });
        }
        function _0x1cdc2b(_0x4231ba) {
            return new Promise((_0x2f0d0c, _0x26edff) => {
                const _0x57461c = a0_0x16e0;
                let _0x4d43b8 = _0x57461c(0x15a) + _0x4231ba + '/info/';
                GM_xmlhttpRequest({
                    'method': _0x57461c(0x1b2),
                    'url': _0x4d43b8,
                    'headers': { 'User-Agent': _0x57461c(0x266) },
                    'onload': function (_0x55a50d) {
                        const _0x3e5925 = _0x57461c;
                        let _0x2e1cdc = JSON[_0x3e5925(0x1ad)](_0x55a50d['response']);
                        _0x2e1cdc['status'] !== 'ok' ? _0x26edff('faild') : _0x2f0d0c(_0x2e1cdc['user'][_0x3e5925(0x275)]?.[_0x3e5925(0x199)]);
                    },
                    'onerror': function (_0x25cb52) {
                        _0x26edff(_0x25cb52);
                    }
                });
            });
        }
        function _0xa4cb4(_0x1fc05e) {
            return new Promise((_0x3604e9, _0x2e1846) => {
                const _0x491b5c = a0_0x16e0;
                if (!_0x1fc05e)
                    _0x2e1846(_0x491b5c(0x122));
                let _0x4f5db8 = _0x1fc05e, _0x3f7c95 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x4f5db8 + _0x491b5c(0x24b);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3f7c95,
                    'onload': function (_0x551acc) {
                        const _0x11cfcf = _0x491b5c;
                        let _0x2a301e = JSON['parse'](_0x551acc['response']);
                        _0x3604e9(_0x2a301e[_0x11cfcf(0x1fe)]['shortcode_media'][_0x11cfcf(0x1d7)][_0x11cfcf(0x131)]);
                    },
                    'onerror': function (_0x27a046) {
                        _0x2e1846(_0x27a046);
                    }
                });
            });
        }
        function _0x4e6b1d(_0x219d2c) {
            return new Promise((_0x2026c4, _0x2d13d6) => {
                const _0x42f3d3 = a0_0x16e0;
                if (!_0x219d2c)
                    _0x2d13d6('NOPATH');
                let _0xff7226 = _0x219d2c, _0x3541de = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0xff7226 + _0x42f3d3(0x24b);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3541de,
                    'onload': function (_0x53b84a) {
                        const _0x15941e = _0x42f3d3;
                        let _0x480193 = JSON[_0x15941e(0x1ad)](_0x53b84a['response']);
                        console[_0x15941e(0xc5)](_0x480193), _0x2026c4(_0x480193[_0x15941e(0x1fe)]);
                    },
                    'onerror': function (_0x223164) {
                        _0x2d13d6(_0x223164);
                    }
                });
            });
        }
        function _0x3c22cf(_0x456e21, _0x17e87d) {
            const _0xe8e065 = _0x5ad020;
            _0x17e87d === !![] && (console['log'](_0xe8e065(0xb3), _0xe8e065(0xb0)), _0x3f66b5('article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]')[_0xe8e065(0x180)](_0xe8e065(0x1d1)));
            if (_0x456e21 == ![]) {
                const _0x191cd8 = 0x64;
                let _0x127f42 = 0x0;
                var _0x3ff91a = setInterval(() => {
                    const _0x20ce74 = _0xe8e065;
                    (_0x127f42 > _0x191cd8 || _0x3f66b5(_0x20ce74(0x14d))[_0x20ce74(0x1de)] > 0x0) && (clearInterval(_0x3ff91a), _0x127f42 > _0x191cd8 && console[_0x20ce74(0x114)]('onReadyMyDW()\x20Timer', _0x20ce74(0x186))), console[_0x20ce74(0xc5)](_0x20ce74(0x1cc), _0x20ce74(0x28e)), _0xaa08cf(), _0x127f42++;
                }, 0x32);
            } else
                _0xaa08cf();
        }
        function _0x1d3185() {
            const _0x5083d5 = _0x5ad020;
            let _0x51b250 = null;
            return _0x3f66b5(_0x5083d5(0x210))[_0x5083d5(0xcb)](function () {
                const _0x19dee4 = _0x5083d5, _0x31624d = /"APP_ID":"([0-9]+)"/ig, _0x48d179 = _0x3f66b5(this)['text']()[_0x19dee4(0x1d8)](_0x31624d);
                _0x48d179 != null && _0x51b250 == null && (_0x51b250 = [..._0x3f66b5(this)['text']()[_0x19dee4(0x1f7)](_0x31624d)]);
            }), _0x51b250 ? _0x51b250['at'](0x0)['at'](-0x1) : null;
        }
        function _0x358bab(_0x5b252a) {
            const _0x3e10b7 = _0x5ad020;
            _0x5b252a ? (_0x3f66b5('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')['removeClass'](_0x3e10b7(0x26b)), _0x3f66b5('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x3e10b7(0x22b)](_0x3e10b7(0x217), '20000')) : (_0x3f66b5(_0x3e10b7(0x1be))[_0x3e10b7(0x27c)]('x1s85apg'), _0x3f66b5('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x3e10b7(0x22b)](_0x3e10b7(0x217), ''));
        }
        function _0x5e5c38(_0xdff83b) {
            return new Promise((_0x4940a6, _0x4fc1d4) => {
                const _0x28b49c = a0_0x16e0;
                let _0x20b57f = _0x28b49c(0xba) + _0xdff83b + '/info/';
                if (_0xdff83b == null) {
                    alert('Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.'), _0x358bab(![]), _0x4fc1d4(-0x1);
                    return;
                }
                if (_0x1d3185() == null) {
                    alert(_0x28b49c(0xde)), _0x358bab(![]), _0x4fc1d4(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x20b57f,
                    'headers': {
                        'User-Agent': window[_0x28b49c(0x25c)][_0x28b49c(0x182)],
                        'Accept': '*/*',
                        'X-IG-App-ID': _0x1d3185()
                    },
                    'onload': function (_0x334088) {
                        const _0x47d676 = _0x28b49c;
                        if (_0x334088[_0x47d676(0x25b)] == _0x20b57f) {
                            let _0x36397a = JSON[_0x47d676(0x1ad)](_0x334088['response']);
                            _0x4940a6(_0x36397a);
                        } else {
                            let _0x5244f1 = new URL(_0x334088[_0x47d676(0x25b)]);
                            _0x5244f1[_0x47d676(0x11b)]['startsWith'](_0x47d676(0x21f)) ? alert(_0x47d676(0x1f1)) : alert(_0x47d676(0x234) + _0x334088[_0x47d676(0x25b)] + '\x22'), _0x358bab(![]), _0x4fc1d4(-0x1);
                        }
                    },
                    'onerror': function (_0x29047c) {
                        _0x4940a6(_0x29047c);
                    }
                });
            });
        }
        function _0x48f695(_0x41bf68) {
            const _0x4cbbc1 = _0x5ad020;
            var _0xc99229 = 0x0, _0x270ef1 = _0x41bf68[_0x4cbbc1(0x125)](_0x4cbbc1(0x1e6));
            return (_0x270ef1 == null || !_0x270ef1[_0x4cbbc1(0xb2)](_0x4cbbc1(0x18a))) && (_0x270ef1 = _0x41bf68[_0x4cbbc1(0x125)](_0x4cbbc1(0x23c))['eq'](0x0)[_0x4cbbc1(0x1b4)](_0x4cbbc1(0x16e))), _0x270ef1[_0x4cbbc1(0x159)](_0x4cbbc1(0x155))[_0x4cbbc1(0xcb)](function (_0x3c343a) {
                const _0x5443b1 = _0x4cbbc1;
                _0x3f66b5(this)[_0x5443b1(0xb2)](_0x5443b1(0x28b)) && (_0xc99229 = _0x3c343a);
            }), _0xc99229;
        }
        function _0xaa08cf() {
            const _0x19e7bb = _0x5ad020;
            _0x3f66b5(_0x19e7bb(0x247))[_0x19e7bb(0xcb)](function (_0x2c744d) {
                const _0x55182c = _0x19e7bb;
                if (!_0x3f66b5(this)['attr'](_0x55182c(0x1d1)) && !_0x3f66b5(this)[_0x55182c(0xb2)](_0x55182c(0x15c)) && !_0x3f66b5(this)[_0x55182c(0x1b4)]('article')?.[_0x55182c(0xb2)](_0x55182c(0x15c)) && _0x3f66b5(this)[_0x55182c(0x20c)]('div#scrollview')['length'] === 0x0) {
                    console['log'](_0x55182c(0x11d), _0x3f66b5(this));
                    var _0x359cda = 0xf, _0x1852de = 0xf, _0x3c47a0 = _0x3f66b5(this), _0x28d200 = this[_0x55182c(0x158)];
                    if (_0x28d200 === 'DIV' && _0x2c744d != 0x0)
                        return;
                    const _0x148d40 = _0x3c47a0[_0x55182c(0x1b4)](_0x55182c(0x16e))['children'](_0x55182c(0x16e));
                    if (_0x148d40[_0x55182c(0x1de)] === 0x0)
                        return;
                    console[_0x55182c(0xc5)](_0x55182c(0xaa), _0x148d40);
                    if (_0x3c47a0[_0x55182c(0x125)]('._aap0')[_0x55182c(0x1de)] > 0x0) {
                        _0x3c47a0[_0x55182c(0x125)](_0x55182c(0x116))[_0x55182c(0x1de)] > 0x0 && _0x3c47a0[_0x55182c(0x125)](_0x55182c(0x116))[_0x55182c(0x22b)]('top', _0x55182c(0x226));
                        const _0x4b59e9 = _0x3c47a0[_0x55182c(0x125)]('._aap0')[_0x55182c(0x172)]()[_0x55182c(0x1a5)]()[0x0];
                        var _0x2bfccc = new MutationObserver(function (_0x48d3d2, _0xb797) {
                            const _0x4db9f4 = _0x55182c;
                            _0x3c47a0[_0x4db9f4(0x125)](_0x4db9f4(0x116))[_0x4db9f4(0x22b)](_0x4db9f4(0x1cd), _0x4db9f4(0x226));
                        });
                        _0x2bfccc['observe'](_0x4b59e9, { 'childList': !![] });
                    }
                    const _0x3367e4 = _0x55182c(0x233) + _0x4b1f2('DW') + _0x55182c(0x123) + _0x359cda + _0x55182c(0xee) + _0x1852de + 'px;\x22>' + _0x15c3f8[_0x55182c(0x1fa)] + _0x55182c(0x1c6), _0x25a1cb = _0x55182c(0x233) + _0x4b1f2(_0x55182c(0x288)) + _0x55182c(0xc3) + (_0x359cda + 0x23) + _0x55182c(0xee) + _0x1852de + 'px;\x22>' + _0x15c3f8[_0x55182c(0x288)] + _0x55182c(0x1c6), _0x8ff2fc = _0x55182c(0x233) + _0x4b1f2('THUMBNAIL_INTRO') + _0x55182c(0x1ca) + (_0x359cda + 0x46) + 'px;top:' + _0x1852de + _0x55182c(0x248) + _0x15c3f8[_0x55182c(0x219)] + '</div>';
                    _0x148d40['eq'](_0x28d200 === _0x55182c(0x26f) ? 0x0 : _0x148d40[_0x55182c(0x1de)] - 0x2)['append'](_0x3367e4), _0x148d40['eq'](_0x28d200 === _0x55182c(0x26f) ? 0x0 : _0x148d40[_0x55182c(0x1de)] - 0x2)[_0x55182c(0x1bd)](_0x25a1cb), setTimeout(() => {
                        const _0x2a03e8 = _0x55182c;
                        if (_0x148d40['eq'](_0x28d200 === _0x2a03e8(0x26f) ? 0x0 : _0x148d40[_0x2a03e8(0x1de)] - 0x2)[_0x2a03e8(0x125)](_0x2a03e8(0xf7))[_0x2a03e8(0x1de)] === 0x0)
                            _0x148d40['find'](_0x2a03e8(0x286))[_0x2a03e8(0x1de)] > 0x0 && _0x148d40['eq'](_0x28d200 === _0x2a03e8(0x26f) ? 0x0 : _0x148d40[_0x2a03e8(0x1de)] - 0x2)[_0x2a03e8(0x1bd)](_0x8ff2fc);
                        else {
                            const _0x12a645 = function (_0x9190a0) {
                                const _0x4f3e89 = _0x2a03e8;
                                if (_0x9190a0) {
                                    var _0xf7b920 = _0x3f66b5(_0x9190a0)[_0x4f3e89(0x125)](_0x4f3e89(0xed))[_0x4f3e89(0x1de)], _0x4dc844 = null;
                                    if (_0xf7b920 == 0x2) {
                                        var _0x583b09 = _0x48f695(_0x3c47a0);
                                        _0x583b09 === 0x0 ? _0x4dc844 = _0x3f66b5(_0x9190a0)[_0x4f3e89(0x125)](_0x4f3e89(0xed))[_0x4f3e89(0x172)]() : _0x4dc844 = _0x3f66b5(_0x9190a0)[_0x4f3e89(0x125)](_0x4f3e89(0xed))[_0x4f3e89(0x24a)]();
                                    } else
                                        _0x4dc844 = _0x3f66b5(_0x9190a0)['find'](_0x4f3e89(0xed))['eq'](0x1);
                                    _0x4dc844 != null && _0x4dc844[_0x4f3e89(0x1de)] > 0x0 && _0x4dc844[_0x4f3e89(0x125)](_0x4f3e89(0x286))['length'] > 0x0 ? _0x148d40['eq'](_0x28d200 === _0x4f3e89(0x26f) ? 0x0 : _0x148d40[_0x4f3e89(0x1de)] - 0x2)[_0x4f3e89(0x1bd)](_0x8ff2fc) : _0x148d40[_0x4f3e89(0x125)](_0x4f3e89(0x1bf))?.[_0x4f3e89(0x1c7)]();
                                }
                            };
                            var _0x1078dc = new MutationObserver(function (_0x21762d, _0x22b21d) {
                                const _0x2ff178 = _0x2a03e8;
                                var _0x1a1130 = _0x21762d['at'](0x0)?.[_0x2ff178(0x213)];
                                _0x12a645(_0x1a1130);
                            });
                            const _0x3db84c = _0x148d40['eq'](_0x28d200 === _0x2a03e8(0x26f) ? 0x0 : _0x148d40[_0x2a03e8(0x1de)] - 0x2)['find']('div\x20>\x20ul\x20li._acaz')?.[_0x2a03e8(0x1a5)]()[0x0], _0x569d37 = _0x148d40['eq'](_0x28d200 === _0x2a03e8(0x26f) ? 0x0 : _0x148d40[_0x2a03e8(0x1de)] - 0x2)[_0x2a03e8(0x125)](_0x2a03e8(0xf7))?.[_0x2a03e8(0x1a5)]()[_0x2a03e8(0x1a5)]()[0x0];
                            _0x3db84c && (_0x12a645(_0x3db84c), _0x1078dc[_0x2a03e8(0x128)](_0x3db84c, { 'childList': !![] })), _0x569d37 && _0x1078dc[_0x2a03e8(0x128)](_0x569d37, { 'attributes': !![] });
                        }
                    }, 0x32), _0x148d40['css'](_0x55182c(0x16c), _0x55182c(0xc9));
                    _0x15c461['DISABLE_VIDEO_LOOPING'] && _0x3f66b5(this)[_0x55182c(0x125)](_0x55182c(0x286))['each'](function () {
                        const _0x12dac0 = _0x55182c;
                        !_0x3f66b5(this)[_0x12dac0(0x1fe)](_0x12dac0(0xf1)) && (console[_0x12dac0(0xc5)](_0x12dac0(0x120)), _0x3f66b5(this)['on']('ended', function () {
                            const _0x54a040 = _0x12dac0;
                            _0x3f66b5(this)[_0x54a040(0xfe)](_0x54a040(0x268), !![]), this['pause']();
                        }));
                    });
                    _0x15c461['MODIFY_VIDEO_VOLUME'] && _0x3f66b5(this)[_0x55182c(0x125)](_0x55182c(0x286))['each'](function () {
                        const _0x16aad9 = _0x55182c;
                        !_0x3f66b5(this)[_0x16aad9(0x1fe)](_0x16aad9(0xb4)) && (console['log'](_0x16aad9(0x1ba)), this['volume'] = _0x3a814a, _0x3f66b5(this)['on'](_0x16aad9(0x1b1), function () {
                            const _0x2823c8 = _0x16aad9;
                            this[_0x2823c8(0x20f)] = _0x3a814a;
                        }), _0x3f66b5(this)['on']('playing', function () {
                            const _0x1afb50 = _0x16aad9;
                            this[_0x1afb50(0x20f)] = _0x3a814a;
                        }), _0x3f66b5(this)['on'](_0x16aad9(0x130), function () {
                            const _0x4fe4b8 = _0x16aad9;
                            this[_0x4fe4b8(0x20f)] = _0x3a814a;
                        }), _0x3f66b5(this)[_0x16aad9(0xfe)](_0x16aad9(0x1df), !![]));
                    });
                    _0x15c461[_0x55182c(0x162)] && _0x3f66b5(this)[_0x55182c(0x125)](_0x55182c(0x286))[_0x55182c(0xcb)](function () {
                        const _0xb3f208 = _0x55182c;
                        !_0x3f66b5(this)[_0xb3f208(0x1fe)](_0xb3f208(0xc8)) && (console['log'](_0xb3f208(0x163)), this[_0xb3f208(0x20f)] = _0x3a814a, _0x3f66b5(this)['on'](_0xb3f208(0x1ac), function () {
                            const _0x45f54a = _0xb3f208;
                            this[_0x45f54a(0x20f)] = _0x3a814a;
                        }), _0x3f66b5(this)['on']('volumechange', function () {
                            const _0x4ea778 = _0xb3f208;
                            let _0x393515 = _0x3f66b5(this)[_0x4ea778(0x1a5)]()[_0x4ea778(0x125)]('video\x20+\x20div\x20>\x20div')['find']('button[type=\x22button\x22],\x20div[role=\x22button\x22]')['filter'](function (_0x24f4fe) {
                                const _0x42e82d = _0x4ea778;
                                return _0x3f66b5(this)['find']('svg\x20>\x20path[d^=\x22M21.334\x22]')[_0x42e82d(0x1de)] === 0x0;
                            });
                            var _0x1f0ecd = _0x393515[_0x4ea778(0x125)](_0x4ea778(0x1ec))[_0x4ea778(0x1de)] === 0x0;
                            this[_0x4ea778(0x1f3)] != _0x1f0ecd && (this['volume'] = _0x3a814a, _0x393515?.[_0x4ea778(0x200)]()), _0x3f66b5(this)[_0x4ea778(0xfe)](_0x4ea778(0xf6)) && (_0x3a814a = this[_0x4ea778(0x20f)], GM_setValue(_0x4ea778(0x1ff), this[_0x4ea778(0x20f)])), this[_0x4ea778(0x20f)] == _0x3a814a && _0x3f66b5(this)[_0x4ea778(0xfe)](_0x4ea778(0xf6), !![]);
                        }), _0x3f66b5(this)[_0xb3f208(0x22b)]('position', _0xb3f208(0x22a)), _0x3f66b5(this)['css'](_0xb3f208(0x217), '2'), _0x3f66b5(this)[_0xb3f208(0xfe)](_0xb3f208(0x15d), !![]), _0x3f66b5(this)[_0xb3f208(0xfe)](_0xb3f208(0xc8), !![]));
                    });
                    var _0x1a94bf = _0x3f66b5(this)['find'](_0x55182c(0x153))['first']();
                    _0x1a94bf[_0x55182c(0x1bd)](_0x55182c(0x1d6)), _0x1a94bf[_0x55182c(0x125)]('div.volume_slider')['append']('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x3a814a + '\x22\x20/></div>'), _0x1a94bf[_0x55182c(0x125)](_0x55182c(0x10f))[_0x55182c(0xfe)]('style', _0x55182c(0x211) + (_0x3a814a * 0x64 + '%')), _0x1a94bf[_0x55182c(0x125)]('div.volume_slider\x20input')['on'](_0x55182c(0x208), function () {
                        const _0x16f62f = _0x55182c;
                        var _0xccab5a = _0x3f66b5(this)[_0x16f62f(0x13e)]() * 0x64 + '%';
                        _0x3a814a = _0x3f66b5(this)['val'](), GM_setValue(_0x16f62f(0x1ff), _0x3f66b5(this)[_0x16f62f(0x13e)]()), _0x3f66b5(this)[_0x16f62f(0xfe)](_0x16f62f(0x17c), _0x16f62f(0x211) + _0xccab5a), _0x3c47a0[_0x16f62f(0x125)](_0x16f62f(0x286))[_0x16f62f(0xcb)](function () {
                            const _0x20f2d1 = _0x16f62f;
                            console[_0x20f2d1(0xc5)](_0x20f2d1(0x25d)), this['volume'] = _0x3a814a;
                        });
                    }), _0x1a94bf[_0x55182c(0x125)](_0x55182c(0x10f))['on'](_0x55182c(0x1ed), function () {
                        const _0x519f9f = _0x55182c;
                        var _0x5b0a0c = _0x3a814a * 0x64 + '%';
                        _0x3f66b5(this)[_0x519f9f(0xfe)](_0x519f9f(0x17c), '--ig-track-progress:\x20' + _0x5b0a0c), _0x3f66b5(this)[_0x519f9f(0x13e)](_0x3a814a), _0x3c47a0[_0x519f9f(0x125)]('video')[_0x519f9f(0xcb)](function () {
                            const _0x14804a = _0x519f9f;
                            console[_0x14804a(0xc5)]('(post)\x20video\x20volume\x20changed\x20#slider'), this[_0x14804a(0x20f)] = _0x3a814a;
                        });
                    }), _0x1a94bf[_0x55182c(0x125)](_0x55182c(0x1f0))['on'](_0x55182c(0x200), function (_0x18600d) {
                        const _0x271db5 = _0x55182c;
                        _0x18600d[_0x271db5(0x1ee)](), _0x18600d[_0x271db5(0xdd)]();
                    }), _0x3f66b5(this)['on'](_0x55182c(0x200), _0x55182c(0x1bf), function (_0x431f84) {
                        const _0x3aab12 = _0x55182c;
                        _0x358bab(!![]), _0x3fce9c = _0x3f66b5(this)['parent']()[_0x3aab12(0x1a5)]()[_0x3aab12(0x1a5)]()['attr'](_0x3aab12(0x126)), _0x2fe811 = location[_0x3aab12(0x11b)][_0x3aab12(0xf3)](/\/$/, '')[_0x3aab12(0x207)]('/')['at'](-0x1) || _0x3f66b5(this)[_0x3aab12(0x1a5)]()[_0x3aab12(0x1a5)]()[_0x3aab12(0x1a5)]()['find'](_0x3aab12(0x16b))[_0x3aab12(0x172)]()[_0x3aab12(0xfe)]('href')[_0x3aab12(0x207)]('/')['at'](0x2) || _0x3f66b5(this)[_0x3aab12(0x1a5)]()[_0x3aab12(0x1a5)]()[_0x3aab12(0x1b4)](_0x3aab12(0x274))['children']('div')['children'](_0x3aab12(0x274))[_0x3aab12(0x125)](_0x3aab12(0x16b))[_0x3aab12(0x24a)]()[_0x3aab12(0xfe)]('href')['split']('/')['at'](0x2);
                        var _0x5032a0 = _0x3f66b5(this)[_0x3aab12(0x1a5)]()[_0x3aab12(0x1a5)]()[_0x3aab12(0x1a5)](), _0x3937f3 = _0x48f695(_0x5032a0);
                        _0x190e34(!![], ![]), _0x5caedd(_0x2fe811, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x3aab12(0xc0)](() => {
                            let _0x497bd7 = setInterval(() => {
                                const _0x12fd8e = a0_0x16e0;
                                if (_0x3f66b5(_0x12fd8e(0x253))[_0x12fd8e(0x1de)] > 0x0) {
                                    clearInterval(_0x497bd7);
                                    var _0x4050d4 = _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x3937f3 + 0x1) + '\x22]')?.[_0x12fd8e(0x1a5)]()[_0x12fd8e(0x125)](_0x12fd8e(0x1f9))?.[_0x12fd8e(0x172)]();
                                    _0x4050d4 != null && _0x4050d4['length'] > 0x0 ? _0x4050d4['click']() : alert(_0x12fd8e(0x1d5)), _0x358bab(![]), _0x3f66b5(_0x12fd8e(0x118))[_0x12fd8e(0x1c7)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x3f66b5(this)['on']('click', '.SNKMS_IG_NEWTAB_MAIN', function (_0x53b75e) {
                        const _0x35b83d = _0x55182c;
                        _0x358bab(!![]), _0x3fce9c = _0x3f66b5(this)['parent']()[_0x35b83d(0x1a5)]()[_0x35b83d(0x1a5)]()[_0x35b83d(0xfe)](_0x35b83d(0x126)), _0x2fe811 = location['pathname'][_0x35b83d(0xf3)](/\/$/, '')[_0x35b83d(0x207)]('/')['at'](-0x1) || _0x3f66b5(this)[_0x35b83d(0x1a5)]()[_0x35b83d(0x1a5)]()['parent']()['find']('a[href^=\x22/p/\x22]')[_0x35b83d(0x172)]()['attr'](_0x35b83d(0x1c5))[_0x35b83d(0x207)]('/')['at'](0x2) || _0x3f66b5(this)[_0x35b83d(0x1a5)]()[_0x35b83d(0x1a5)]()[_0x35b83d(0x1b4)](_0x35b83d(0x274))[_0x35b83d(0x1b4)](_0x35b83d(0x16e))['children'](_0x35b83d(0x274))[_0x35b83d(0x125)](_0x35b83d(0x16b))[_0x35b83d(0x24a)]()[_0x35b83d(0xfe)](_0x35b83d(0x1c5))[_0x35b83d(0x207)]('/')['at'](0x2);
                        var _0x53924f = _0x3f66b5(this)[_0x35b83d(0x1a5)]()[_0x35b83d(0x1a5)]()['parent'](), _0x315f43 = _0x48f695(_0x53924f);
                        _0x190e34(!![], ![]), _0x5caedd(_0x2fe811, _0x35b83d(0xe2), '')[_0x35b83d(0xc0)](() => {
                            let _0x59c0c7 = setInterval(() => {
                                const _0x9c3bb2 = a0_0x16e0;
                                if (_0x3f66b5(_0x9c3bb2(0x253))[_0x9c3bb2(0x1de)] > 0x0) {
                                    clearInterval(_0x59c0c7);
                                    var _0x1e89c5 = _0x3f66b5(_0x9c3bb2(0x225) + (_0x315f43 + 0x1) + '\x22]');
                                    if (_0x15c461[_0x9c3bb2(0xda)] && _0x15c461[_0x9c3bb2(0xb9)])
                                        _0x54f2f7(_0x1e89c5[_0x9c3bb2(0x172)]()[0x0], !![]);
                                    else {
                                        let _0x421b28 = _0x1e89c5?.[_0x9c3bb2(0xfe)]('data-href');
                                        if (_0x421b28) {
                                            var _0x550109 = new URL(_0x421b28);
                                            _0x550109[_0x9c3bb2(0x1a0)] = _0x9c3bb2(0x141), _0x526611(_0x550109[_0x9c3bb2(0x1c5)]);
                                        } else
                                            alert(_0x9c3bb2(0xce));
                                    }
                                    _0x358bab(![]), _0x3f66b5(_0x9c3bb2(0x118))[_0x9c3bb2(0x1c7)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x3f66b5(this)['on'](_0x55182c(0x200), '.SNKMS_IG_DW_MAIN', async function (_0x2f0146) {
                        const _0x6f86d3 = _0x55182c;
                        _0x3fce9c = _0x3f66b5(this)[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x1a5)]()[_0x6f86d3(0xfe)](_0x6f86d3(0x126)), _0x2fe811 = location[_0x6f86d3(0x11b)]['replace'](/\/$/, '')[_0x6f86d3(0x207)]('/')['at'](-0x1) || _0x3f66b5(this)[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x125)](_0x6f86d3(0x16b))[_0x6f86d3(0x172)]()[_0x6f86d3(0xfe)](_0x6f86d3(0x1c5))[_0x6f86d3(0x207)]('/')['at'](0x2) || _0x3f66b5(this)[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x1b4)](_0x6f86d3(0x274))[_0x6f86d3(0x1b4)](_0x6f86d3(0x16e))[_0x6f86d3(0x1b4)](_0x6f86d3(0x274))[_0x6f86d3(0x125)](_0x6f86d3(0x16b))[_0x6f86d3(0x24a)]()[_0x6f86d3(0xfe)](_0x6f86d3(0x1c5))['split']('/')['at'](0x2), _0x190e34(_0x15c461['DIRECT_DOWNLOAD_ALL'], !![]), _0x3f66b5(_0x6f86d3(0x1ab))[_0x6f86d3(0x1b6)](_0x6f86d3(0x1b5) + _0x2fe811 + '\x22>' + _0x2fe811 + _0x6f86d3(0x102));
                        if (_0x15c461[_0x6f86d3(0x22d)]) {
                            _0x358bab(!![]), _0x48ad5c(!![]);
                            var _0x4ab527 = _0x48f695(_0x3f66b5(this)[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x1a5)]()['parent']());
                            _0x5caedd(_0x2fe811, _0x6f86d3(0xe2), '')[_0x6f86d3(0xc0)](() => {
                                let _0x350235 = setInterval(() => {
                                    const _0x2d660b = a0_0x16e0;
                                    if (_0x3f66b5(_0x2d660b(0x253))[_0x2d660b(0x1de)] > 0x0) {
                                        clearInterval(_0x350235);
                                        var _0x106370 = _0x3f66b5(_0x2d660b(0x225) + (_0x4ab527 + 0x1) + '\x22]')?.[_0x2d660b(0xfe)](_0x2d660b(0x246));
                                        _0x106370 ? (_0x358bab(![]), _0x3f66b5(_0x2d660b(0x225) + (_0x4ab527 + 0x1) + '\x22]')?.[_0x2d660b(0x200)]()) : alert(_0x2d660b(0xd9)), _0x3f66b5(_0x2d660b(0x118))[_0x2d660b(0x1c7)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x15c461[_0x6f86d3(0x239)]) {
                            var _0x40e43d = 0x0, _0x832b42 = _0x3f66b5(this)[_0x6f86d3(0x1a5)]()['parent']()[_0x6f86d3(0x125)](_0x6f86d3(0xe3))['length'], _0x51aebd = window['location']['pathname'], _0x11ec14 = '/' + _0x51aebd['split']('/')[0x1] + '/' + _0x51aebd[_0x6f86d3(0x207)]('/')[0x2] + '/', _0x13499a = _0x15c461['FORCE_FETCH_ALL_RESOURCES'], _0x161e7f = new Date(_0x3f66b5(this)[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x125)](_0x6f86d3(0x1b8))[_0x6f86d3(0x172)]()[_0x6f86d3(0xfe)](_0x6f86d3(0x181)))['getTime']();
                            if (_0x832b42)
                                _0x3f66b5(this)[_0x6f86d3(0x1a5)]()['find'](_0x6f86d3(0xe3))[_0x6f86d3(0xcb)](function () {
                                    const _0x99880e = _0x6f86d3;
                                    let _0x499654 = _0x3f66b5(this)['parent']()[_0x99880e(0x1a5)]()[_0x99880e(0x125)]('video');
                                    _0x499654 && _0x499654[_0x99880e(0xfe)](_0x99880e(0x218)) && (_0x13499a = !![]);
                                }), _0x13499a || _0x15c461['FORCE_RESOURCE_VIA_MEDIA'] ? _0x5caedd(_0x2fe811, _0x6f86d3(0xe2), _0x4b1f2(_0x6f86d3(0xd4))) : (_0x3f66b5(this)[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x125)](_0x6f86d3(0xe3))[_0x6f86d3(0xcb)](function () {
                                    const _0x5b3dd6 = _0x6f86d3;
                                    _0x40e43d++;
                                    let _0x2ae8d1 = _0x3f66b5(this)['find'](_0x5b3dd6(0x286)), _0x8d5df6 = _0x3f66b5(this)[_0x5b3dd6(0x125)](_0x5b3dd6(0xfa)), _0x26d419 = _0x8d5df6['attr'](_0x5b3dd6(0x100)) ? _0x8d5df6[_0x5b3dd6(0xfe)](_0x5b3dd6(0x100))[_0x5b3dd6(0x207)]('\x20')[0x0] : _0x8d5df6[_0x5b3dd6(0xfe)](_0x5b3dd6(0x218));
                                    _0x2ae8d1 && _0x2ae8d1[_0x5b3dd6(0xfe)](_0x5b3dd6(0x218)) && (_0x13499a = !![]), _0x8d5df6 && _0x26d419 && _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')[_0x5b3dd6(0x1bd)](_0x5b3dd6(0x21c) + _0x161e7f + _0x5b3dd6(0x235) + _0x2fe811 + _0x5b3dd6(0x220) + _0x40e43d + _0x5b3dd6(0x12d) + _0x26d419 + _0x5b3dd6(0x257) + _0x26d419 + '\x22\x20/><br/>-\x20' + _0x4b1f2('IMG') + '\x20' + _0x40e43d + '\x20-</a>');
                                }), _0x13499a && _0x5caedd(_0x2fe811, _0x6f86d3(0xe2), _0x4b1f2(_0x6f86d3(0x23f))));
                            else {
                                if (_0x15c461[_0x6f86d3(0xda)])
                                    _0x5caedd(_0x2fe811, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x4b1f2(_0x6f86d3(0xd4)));
                                else {
                                    _0x40e43d++;
                                    let _0x597115 = _0x3f66b5(this)[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x125)]('video'), _0x3a6491 = _0x3f66b5(this)['parent']()[_0x6f86d3(0x1a5)]()[_0x6f86d3(0x125)](_0x6f86d3(0xfa)), _0x45e8ef = _0x3a6491[_0x6f86d3(0xfe)](_0x6f86d3(0x100)) ? _0x3a6491[_0x6f86d3(0xfe)]('srcset')[_0x6f86d3(0x207)]('\x20')[0x0] : _0x3a6491[_0x6f86d3(0xfe)]('src');
                                    _0x597115 && _0x597115[_0x6f86d3(0xfe)](_0x6f86d3(0x218)) && _0x5caedd(_0x2fe811, _0x6f86d3(0xe2), _0x4b1f2(_0x6f86d3(0x27e))), _0x3a6491 && _0x45e8ef && _0x3f66b5(_0x6f86d3(0xe2))['append'](_0x6f86d3(0x21c) + _0x161e7f + _0x6f86d3(0x235) + _0x2fe811 + _0x6f86d3(0x220) + _0x40e43d + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x45e8ef + _0x6f86d3(0x257) + _0x45e8ef + _0x6f86d3(0x10e) + _0x4b1f2('IMG') + '\x20' + _0x40e43d + '\x20-</a>');
                                }
                            }
                        }
                        _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x6f86d3(0xcb)](function () {
                            const _0x2a1e83 = _0x6f86d3;
                            _0x3f66b5(this)[_0x2a1e83(0xd6)](_0x2a1e83(0x230)), _0x3f66b5(this)[_0x2a1e83(0x138)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x3f66b5(this)[_0x2a1e83(0x117)](_0x2a1e83(0x233) + _0x4b1f2(_0x2a1e83(0x288)) + _0x2a1e83(0x13c) + _0x15c3f8[_0x2a1e83(0x288)] + _0x2a1e83(0x1c6)), _0x3f66b5(this)['attr']('data-name') == _0x2a1e83(0x286) && _0x3f66b5(this)[_0x2a1e83(0x117)](_0x2a1e83(0x233) + _0x4b1f2('THUMBNAIL_INTRO') + _0x2a1e83(0x25f) + _0x15c3f8['THUMBNAIL'] + '</div>');
                        }), _0x15c461['DIRECT_DOWNLOAD_ALL'] && _0x5caedd(_0x2fe811, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x4b1f2('LOAD_BLOB_MULTIPLE'))[_0x6f86d3(0xc0)](() => {
                            let _0x279a93 = setInterval(() => {
                                const _0x4c5e87 = a0_0x16e0;
                                _0x3f66b5(_0x4c5e87(0x253))[_0x4c5e87(0x1de)] > 0x0 && (clearInterval(_0x279a93), _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')['each'](function () {
                                    const _0xdfb1 = _0x4c5e87;
                                    _0x3f66b5(this)[_0xdfb1(0x200)]();
                                }), _0x3f66b5('.IG_SN_DIG')[_0x4c5e87(0x1c7)]());
                            }, 0xfa);
                        });
                    });
                    var _0x23cbfd = _0x3f66b5(this)['find'](_0x55182c(0xac))[_0x55182c(0x172)]()[_0x55182c(0x179)]();
                    _0x3f66b5(this)[_0x55182c(0xfe)]('data-snig', _0x55182c(0x13f)), _0x3f66b5(this)[_0x55182c(0xfe)](_0x55182c(0x126), _0x23cbfd);
                }
            });
        }
        function _0x5caedd(_0x4e3dc5, _0x46b992, _0x2c2b97) {
            return new Promise(async _0x6c853c => {
                const _0x41c68a = a0_0x16e0;
                _0x3f66b5(_0x46b992 + '\x20a')['remove'](), _0x3f66b5(_0x46b992)[_0x41c68a(0x1bd)]('<p\x20id=\x22_SNLOAD\x22>' + _0x2c2b97 + '</p>');
                let _0x381a74 = await _0x4e6b1d(_0x4e3dc5), _0x2c2c89 = 0x1, _0x34956d = _0x381a74[_0x41c68a(0xf8)];
                _0x34956d[_0x41c68a(0x16d)] == _0x41c68a(0x20a) && _0x34956d[_0x41c68a(0xb7)] && (_0x3f66b5(_0x46b992)[_0x41c68a(0x1bd)](_0x41c68a(0xbd) + _0x34956d['id'] + '\x22\x20datetime=\x22' + _0x34956d['taken_at_timestamp'] + _0x41c68a(0x146) + _0x34956d[_0x41c68a(0x135)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x34956d[_0x41c68a(0x1d7)][_0x41c68a(0x131)] + '\x22\x20data-globalIndex=\x22' + _0x2c2c89 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x34956d[_0x41c68a(0xb7)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x34956d[_0x41c68a(0xd0)][0x1][_0x41c68a(0x218)] + _0x41c68a(0x10e) + _0x4b1f2(_0x41c68a(0x1c3)) + '\x20' + _0x2c2c89 + _0x41c68a(0x1db)), _0x2c2c89++);
                _0x34956d[_0x41c68a(0x16d)] == _0x41c68a(0xb5) && (_0x3f66b5(_0x46b992)[_0x41c68a(0x1bd)](_0x41c68a(0xbd) + _0x34956d['id'] + '\x22\x20datetime=\x22' + _0x34956d[_0x41c68a(0x222)] + _0x41c68a(0x146) + _0x34956d[_0x41c68a(0x135)] + _0x41c68a(0x178) + _0x34956d[_0x41c68a(0x1d7)][_0x41c68a(0x131)] + '\x22\x20data-globalIndex=\x22' + _0x2c2c89 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x34956d[_0x41c68a(0xd0)][_0x34956d[_0x41c68a(0xd0)][_0x41c68a(0x1de)] - 0x1]['src'] + _0x41c68a(0x257) + _0x34956d[_0x41c68a(0xd0)][0x1][_0x41c68a(0x218)] + _0x41c68a(0x10e) + _0x4b1f2(_0x41c68a(0x1b9)) + '\x20' + _0x2c2c89 + _0x41c68a(0x1db)), _0x2c2c89++);
                if (_0x34956d[_0x41c68a(0x16d)] == _0x41c68a(0x214) && _0x34956d[_0x41c68a(0x223)])
                    for (let _0x463846 of _0x34956d[_0x41c68a(0x223)][_0x41c68a(0x27a)]) {
                        _0x463846[_0x41c68a(0xc7)][_0x41c68a(0x16d)] == _0x41c68a(0x20a) && _0x3f66b5(_0x46b992)['append'](_0x41c68a(0xbd) + _0x463846['node']['id'] + _0x41c68a(0x101) + _0x34956d['taken_at_timestamp'] + _0x41c68a(0x146) + _0x34956d['shortcode'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x34956d[_0x41c68a(0x1d7)]['username'] + _0x41c68a(0xe6) + _0x2c2c89 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x463846['node'][_0x41c68a(0xb7)] + _0x41c68a(0x257) + _0x463846[_0x41c68a(0xc7)][_0x41c68a(0xd0)][0x1][_0x41c68a(0x218)] + _0x41c68a(0x10e) + _0x4b1f2(_0x41c68a(0x1c3)) + '\x20' + _0x2c2c89 + _0x41c68a(0x1db)), _0x463846[_0x41c68a(0xc7)]['__typename'] == _0x41c68a(0xb5) && _0x3f66b5(_0x46b992)['append'](_0x41c68a(0xbd) + _0x463846[_0x41c68a(0xc7)]['id'] + _0x41c68a(0x101) + _0x34956d['taken_at_timestamp'] + _0x41c68a(0x146) + _0x34956d['shortcode'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x34956d['owner'][_0x41c68a(0x131)] + '\x22\x20data-globalIndex=\x22' + _0x2c2c89 + _0x41c68a(0x12d) + _0x463846[_0x41c68a(0xc7)][_0x41c68a(0xd0)][_0x463846[_0x41c68a(0xc7)][_0x41c68a(0xd0)][_0x41c68a(0x1de)] - 0x1][_0x41c68a(0x218)] + _0x41c68a(0x257) + _0x463846[_0x41c68a(0xc7)]['display_resources'][0x1][_0x41c68a(0x218)] + _0x41c68a(0x10e) + _0x4b1f2('IMG') + '\x20' + _0x2c2c89 + _0x41c68a(0x1db)), _0x2c2c89++;
                    }
                _0x3f66b5(_0x41c68a(0x154))[_0x41c68a(0x1c7)](), _0x3f66b5(_0x41c68a(0x253))['each'](function () {
                    const _0xd638b4 = _0x41c68a;
                    _0x3f66b5(this)[_0xd638b4(0xd6)](_0xd638b4(0x230)), _0x3f66b5(this)[_0xd638b4(0x138)](_0xd638b4(0x27b)), _0x3f66b5(this)[_0xd638b4(0x117)](_0xd638b4(0x233) + _0x4b1f2(_0xd638b4(0x288)) + _0xd638b4(0x13c) + _0x15c3f8['NEW_TAB'] + _0xd638b4(0x1c6)), _0x3f66b5(this)['attr']('data-name') == _0xd638b4(0x286) && _0x3f66b5(this)[_0xd638b4(0x117)](_0xd638b4(0x233) + _0x4b1f2(_0xd638b4(0x137)) + _0xd638b4(0x25f) + _0x15c3f8[_0xd638b4(0x219)] + _0xd638b4(0x1c6));
                }), _0x6c853c(!![]);
            });
        }
        function _0x190e34(_0x4773a0, _0x3b340e) {
            const _0x31c7f4 = _0x5ad020;
            let _0x1ced1d = _0x4773a0 ? _0x31c7f4(0xfc) : '';
            _0x3f66b5('body')[_0x31c7f4(0x1bd)]('<div\x20class=\x22IG_SN_DIG\x20' + _0x1ced1d + '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>'), _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')[_0x31c7f4(0x1bd)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[' + _0x4b1f2('CLOSE') + ']</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x15c3f8[_0x31c7f4(0x24c)] + _0x31c7f4(0x176)), _0x3b340e && (_0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')[_0x31c7f4(0x1bd)](_0x31c7f4(0x1b7)), _0x3f66b5(_0x31c7f4(0x277))[_0x31c7f4(0x1bd)]('<button\x20id=\x22batch_download_selected\x22>' + _0x4b1f2(_0x31c7f4(0x212)) + _0x31c7f4(0x107)), _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')[_0x31c7f4(0x1bd)](_0x31c7f4(0x205) + _0x4b1f2(_0x31c7f4(0x10c)) + _0x31c7f4(0x107)), _0x3f66b5(_0x31c7f4(0xea))['append'](_0x31c7f4(0x229) + _0x4b1f2(_0x31c7f4(0x14f)) + '</label>'));
        }
        function _0x48ad5c(_0x13ee3d) {
            const _0x2d47be = _0x5ad020;
            _0x3f66b5(_0x2d47be(0x118))[_0x2d47be(0x1de)] && (_0x13ee3d ? _0x3f66b5(_0x2d47be(0x118))['addClass'](_0x2d47be(0xfc)) : _0x3f66b5('.IG_SN_DIG')[_0x2d47be(0x18d)](_0x2d47be(0xfc)));
        }
        function _0x56c209(_0x18d308, _0x490910, _0x54b1fc, _0x478a78, _0x472f3e, _0x4028a6) {
            setTimeout(() => {
                const _0x54d0dc = a0_0x16e0;
                _0x358bab(!![]), fetch(_0x18d308)[_0x54d0dc(0xc0)](_0x1b730a => {
                    return _0x1b730a['blob']()['then'](_0x4e162d => {
                        _0x358bab(![]), _0x3a3d8a(_0x18d308, _0x4e162d, _0x490910, _0x54b1fc, _0x478a78, _0x472f3e, _0x4028a6);
                    });
                });
            }, 0x32);
        }
        function _0x3a3d8a(_0x42e57c, _0x4194b9, _0x3505a4, _0x48eac1, _0x1e1a73, _0x1a9ca8, _0x1013e1) {
            const _0x4ab298 = _0x5ad020;
            _0x1e1a73 = parseInt(_0x1e1a73[_0x4ab298(0x27d)]()[_0x4ab298(0xc6)](0xd, '0'));
            _0x15c461[_0x4ab298(0x194)] && (_0x1e1a73 = parseInt(_0x1e1a73['toString']()[_0x4ab298(0xc6)](0xd, '0')));
            const _0x4e7340 = new Date(_0x1e1a73), _0x125549 = document[_0x4ab298(0x28a)]('a'), _0x448eb3 = new URL(_0x42e57c)[_0x4ab298(0x11b)][_0x4ab298(0x207)]('/')['at'](-0x1)['split']('.')['slice'](0x0, -0x1)[_0x4ab298(0x232)]('.'), _0x176888 = _0x4e7340[_0x4ab298(0x139)]()[_0x4ab298(0x27d)](), _0x523793 = (_0x4e7340['getMonth']() + 0x1)[_0x4ab298(0x27d)]()[_0x4ab298(0x271)](0x2, '0'), _0x33aa05 = _0x4e7340[_0x4ab298(0x13d)]()['toString']()['padStart'](0x2, '0'), _0xc7b990 = _0x4e7340[_0x4ab298(0x1c9)]()['toString']()[_0x4ab298(0x271)](0x2, '0'), _0x49533f = _0x4e7340[_0x4ab298(0x166)]()[_0x4ab298(0x27d)]()[_0x4ab298(0x271)](0x2, '0'), _0x1d81e0 = _0x4e7340[_0x4ab298(0x113)]()['toString']()[_0x4ab298(0x271)](0x2, '0');
            var _0x533bb4 = _0x232ef6[_0x4ab298(0x1d4)](), _0x5a8262 = {
                    '%USERNAME%': _0x3505a4,
                    '%SOURCE_TYPE%': _0x48eac1,
                    '%SHORTCODE%': _0x1013e1 ? _0x1013e1 : '',
                    '%YEAR%': _0x176888,
                    '%MONTH%': _0x523793,
                    '%DAY%': _0x33aa05,
                    '%HOUR%': _0xc7b990,
                    '%MINUTE%': _0x49533f,
                    '%SECOND%': _0x1d81e0,
                    '%ORIGINAL_NAME%': _0x448eb3
                };
            _0x533bb4 = _0x533bb4[_0x4ab298(0xf3)](/%\w+%/g, function (_0x384fb9) {
                return _0x5a8262[_0x384fb9] || _0x384fb9;
            });
            const _0x32c5ef = _0x3505a4 + '_' + _0x448eb3 + '.' + _0x1a9ca8;
            _0x125549[_0x4ab298(0x1c5)] = URL[_0x4ab298(0x216)](_0x4194b9), _0x125549[_0x4ab298(0x28c)](_0x4ab298(0x18b), _0x15c461[_0x4ab298(0x1fb)] ? _0x533bb4 + '.' + _0x1a9ca8 : _0x32c5ef), _0x125549[_0x4ab298(0x200)](), _0x125549[_0x4ab298(0x1c7)]();
        }
        async function _0x54f2f7(_0x2da7e2, _0x31e94b) {
            const _0x27ec26 = _0x5ad020;
            let _0x473fab = new Date()['getTime'](), _0x10a1c5 = Math[_0x27ec26(0x23e)](_0x473fab / 0x3e8), _0x93f09f = _0x3f66b5(_0x2da7e2)['attr'](_0x27ec26(0x126)) ? _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x126)) : _0x3fce9c;
            !_0x93f09f && _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x20e)) && (console[_0x27ec26(0xc5)](_0x27ec26(0x245), _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x246))), _0x93f09f = await _0xa4cb4(_0x3f66b5(_0x2da7e2)['attr']('data-path')));
            _0x15c461[_0x27ec26(0x194)] && _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x181)) && (_0x10a1c5 = parseInt(_0x3f66b5(_0x2da7e2)['attr'](_0x27ec26(0x181))));
            if (_0x15c461[_0x27ec26(0xda)]) {
                _0x358bab(!![]);
                let _0x340d1a = await _0x5e5c38(_0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0xad)));
                _0x358bab(![]);
                if (_0x340d1a[_0x27ec26(0x1d0)] === 'ok') {
                    var _0x55ff00 = null;
                    _0x340d1a[_0x27ec26(0x258)][0x0][_0x27ec26(0x1fc)] ? _0x55ff00 = _0x340d1a[_0x27ec26(0x258)][0x0][_0x27ec26(0x1fc)][0x0][_0x27ec26(0x199)] : _0x55ff00 = _0x340d1a['items'][0x0]['image_versions2']['candidates'][0x0][_0x27ec26(0x199)];
                    if (_0x31e94b) {
                        let _0x5563f8 = new URL(_0x55ff00);
                        _0x5563f8['host'] = _0x27ec26(0x141), _0x526611(_0x5563f8[_0x27ec26(0x1c5)]);
                    } else
                        _0x56c209(_0x55ff00, _0x93f09f, _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0xef)), _0x10a1c5, _0x3f66b5(_0x2da7e2)['attr'](_0x27ec26(0x19c)), _0x3f66b5(_0x2da7e2)['attr'](_0x27ec26(0x20e)));
                } else {
                    if (_0x15c461[_0x27ec26(0x241)]) {
                        if (_0x31e94b) {
                            let _0x3f9814 = new URL(_0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x246)));
                            _0x3f9814[_0x27ec26(0x1a0)] = 'scontent.cdninstagram.com', _0x526611(_0x3f9814['href']);
                        } else
                            _0x56c209(_0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x246)), _0x93f09f, _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0xef)), _0x10a1c5, _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x19c)), _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x20e)));
                    } else
                        alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x340d1a['message']);
                    console[_0x27ec26(0xc5)](_0x340d1a);
                }
            } else
                _0x56c209(_0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x246)), _0x93f09f, _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)]('data-name'), _0x10a1c5, _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x19c)), _0x3f66b5(_0x2da7e2)[_0x27ec26(0xfe)](_0x27ec26(0x20e)));
        }
        function _0x45b340(_0x8d5fdb) {
            const _0x4287c3 = _0x5ad020;
            var _0x233385 = {
                    'en-US': {
                        'SELECT_LANG': 'English',
                        'RELOAD_SCRIPT': _0x4287c3(0x140),
                        'DONATE': _0x4287c3(0x1e7),
                        'FEEDBACK': _0x4287c3(0x254),
                        'NEW_TAB': _0x4287c3(0x19f),
                        'SHOW_DOM_TREE': _0x4287c3(0xf9),
                        'SELECT_AND_COPY': _0x4287c3(0x224),
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20Text\x20File',
                        'REPORT_GITHUB': 'Report\x20Issue\x20On\x20GitHub',
                        'REPORT_DISCORD': 'Report\x20Issue\x20On\x20Discord\x20Support\x20Server',
                        'DEBUG': _0x4287c3(0x1e8),
                        'CLOSE': _0x4287c3(0x193),
                        'ALL_CHECK': _0x4287c3(0x1d2),
                        'BATCH_DOWNLOAD_SELECTED': _0x4287c3(0xae),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x4287c3(0x1dc),
                        'VID': 'Video',
                        'DW': _0x4287c3(0xe0),
                        'THUMBNAIL_INTRO': _0x4287c3(0x24f),
                        'LOAD_BLOB_ONE': 'Loading\x20Blob\x20Media...',
                        'LOAD_BLOB_MULTIPLE': _0x4287c3(0x11a),
                        'LOAD_BLOB_RELOAD': _0x4287c3(0x17d),
                        'NO_CHECK_RESOURCE': _0x4287c3(0x119),
                        'NO_VID_URL': _0x4287c3(0x17b),
                        'SETTING': 'Settings',
                        'AUTO_RENAME': _0x4287c3(0x16a),
                        'RENAME_SHORTCODE': 'Rename\x20The\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': _0x4287c3(0x11c),
                        'RENAME_LOCATE_DATE': 'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20To\x20Set)',
                        'DISABLE_VIDEO_LOOPING': _0x4287c3(0x156),
                        'HTML5_VIDEO_CONTROL': _0x4287c3(0x12a),
                        'REDIRECT_RIGHT_CLICK_USER_STORY_PICTURE': _0x4287c3(0x237),
                        'FORCE_FETCH_ALL_RESOURCES': _0x4287c3(0x1c1),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20In\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': _0x4287c3(0x112),
                        'MODIFY_VIDEO_VOLUME': 'Modify\x20Video\x20Volume\x20(Right-Click\x20To\x20Set)',
                        'SCROLL_BUTTON': _0x4287c3(0x19e),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x4287c3(0x283),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': 'Use\x20Other\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x4287c3(0xd5),
                        'AUTO_RENAME_INTRO': 'Auto\x20rename\x20file\x20to\x20custom\x20format\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20as\x20it\x20is.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
                        'RENAME_SHORTCODE_INTRO': _0x4287c3(0x133),
                        'RENAME_PUBLISH_DATE_INTRO': _0x4287c3(0x127),
                        'RENAME_LOCATE_DATE_INTRO': _0x4287c3(0x18e),
                        'DISABLE_VIDEO_LOOPING_INTRO': 'Disable\x20video\x20auto-looping\x20in\x20reels\x20and\x20posts.',
                        'HTML5_VIDEO_CONTROL_INTRO': _0x4287c3(0x177),
                        'REDIRECT_RIGHT_CLICK_USER_STORY_PICTURE_INTRO': _0x4287c3(0x269),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x4287c3(0x1e2),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': 'Directly\x20download\x20the\x20current\x20resources\x20in\x20the\x20post.',
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x4287c3(0x24e),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x4287c3(0x272),
                        'SCROLL_BUTTON_INTRO': _0x4287c3(0x105),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x4287c3(0x1e5),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT_INTRO': _0x4287c3(0x273),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': '[Open\x20in\x20new\x20tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.'
                    }
                }, _0x27b080 = Object[_0x4287c3(0x26e)]({}, _0x233385, _0x4d641c), _0xda9ae = Object[_0x4287c3(0x238)](_0x27b080)[_0x4287c3(0x270)]()[_0x4287c3(0x103)]((_0xa1b29f, _0xc7f547) => {
                    return _0xa1b29f[_0xc7f547] = _0x27b080[_0xc7f547], _0xa1b29f;
                }, {});
            return _0xda9ae;
        }
        function _0x4b1f2(_0x483085) {
            const _0x2ef04e = _0x5ad020, _0x129f8b = _0x45b340();
            return _0x129f8b[_0x391cb7] != undefined && _0x129f8b[_0x391cb7][_0x483085] != undefined ? _0x129f8b[_0x391cb7][_0x483085] : _0x129f8b[_0x2ef04e(0xcc)][_0x483085];
        }
        function _0x3cf649() {
            const _0x5dda59 = _0x5ad020;
            _0x3f66b5(_0x5dda59(0x118))[_0x5dda59(0x1c7)](), _0x190e34(), _0x3f66b5(_0x5dda59(0x23b))['text'](_0x5dda59(0xcf)), _0x3f66b5(_0x5dda59(0x260))['append'](_0x5dda59(0x189));
            for (let _0x54dd75 in _0x45b340()) {
                _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect')[_0x5dda59(0x1bd)](_0x5dda59(0x144) + _0x54dd75 + '\x22\x20' + (_0x391cb7 == _0x54dd75 ? 'selected' : '') + '>' + _0x45b340()[_0x54dd75][_0x5dda59(0x15f)] + _0x5dda59(0x1f2));
            }
            for (let _0x3c9e9 in _0x15c461) {
                _0x3f66b5(_0x5dda59(0x1f6))['append'](_0x5dda59(0x22c) + (_0x5ac8e3['includes'](_0x3c9e9) ? _0x5dda59(0xa9) : '') + _0x5dda59(0x129) + _0x4b1f2(_0x3c9e9 + '_INTRO') + '\x22><span>' + _0x4b1f2(_0x3c9e9) + _0x5dda59(0x1e9) + _0x3c9e9 + _0x5dda59(0x26a) + (_0x15c461[_0x3c9e9] === !![] ? _0x5dda59(0xf4) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x3c9e9 === _0x5dda59(0x1ef) && _0x3f66b5(_0x5dda59(0x145) + _0x3c9e9 + '\x22]')[_0x5dda59(0x1a5)]('label')['on']('contextmenu', function (_0x21ed20) {
                    const _0x84d6ac = _0x5dda59;
                    _0x21ed20[_0x84d6ac(0xdd)](), _0x3f66b5(this)[_0x84d6ac(0x125)](_0x84d6ac(0x1bc))[_0x84d6ac(0x1de)] === 0x0 && (_0x3f66b5(this)[_0x84d6ac(0x1bd)](_0x84d6ac(0xf0)), _0x3f66b5(this)[_0x84d6ac(0x1b4)](_0x84d6ac(0x1bc))[_0x84d6ac(0x1bd)](_0x84d6ac(0x12e) + _0x3a814a + _0x84d6ac(0x280)), _0x3f66b5(this)[_0x84d6ac(0x1b4)](_0x84d6ac(0x1bc))[_0x84d6ac(0x1bd)](_0x84d6ac(0x12e) + _0x3a814a + _0x84d6ac(0x16f)), _0x3f66b5(this)[_0x84d6ac(0x1b4)]('#tempWrapper')[_0x84d6ac(0x1bd)](_0x84d6ac(0x263) + _0x15c3f8['CLOSE'] + _0x84d6ac(0x1c6)));
                }), _0x3c9e9 === _0x5dda59(0x1fb) && _0x3f66b5(_0x5dda59(0x145) + _0x3c9e9 + '\x22]')[_0x5dda59(0x1a5)](_0x5dda59(0x148))['on'](_0x5dda59(0x174), function (_0x332fa9) {
                    const _0xe9cb34 = _0x5dda59;
                    _0x332fa9[_0xe9cb34(0xdd)](), _0x3f66b5(this)['find'](_0xe9cb34(0x1bc))[_0xe9cb34(0x1de)] === 0x0 && (_0x3f66b5(this)[_0xe9cb34(0x1bd)]('<div\x20id=\x22tempWrapper\x22></div>'), _0x3f66b5(this)[_0xe9cb34(0x1b4)](_0xe9cb34(0x1bc))['append'](_0xe9cb34(0x21b) + _0x232ef6 + _0xe9cb34(0x1e4)), _0x3f66b5(this)[_0xe9cb34(0x1b4)](_0xe9cb34(0x1bc))[_0xe9cb34(0x1bd)](_0xe9cb34(0x263) + _0x15c3f8[_0xe9cb34(0x24c)] + _0xe9cb34(0x1c6)));
                });
            }
        }
        function _0x25e38f() {
            const _0x3b5039 = _0x5ad020;
            _0x3f66b5('.IG_SN_DIG')[_0x3b5039(0x1c7)](), _0x190e34(), _0x3f66b5(_0x3b5039(0x23b))[_0x3b5039(0x179)](_0x3b5039(0xe7)), _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x3b5039(0x1bd)](_0x3b5039(0x143)), _0x3f66b5(_0x3b5039(0x1f6))[_0x3b5039(0x1bd)](_0x3b5039(0x206)), _0x3f66b5(_0x3b5039(0x165))[_0x3b5039(0x1bd)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x4b1f2(_0x3b5039(0x1c8)) + '</a></button>'), _0x3f66b5(_0x3b5039(0x165))[_0x3b5039(0x1bd)](_0x3b5039(0x276) + _0x4b1f2(_0x3b5039(0x23a)) + _0x3b5039(0x17a)), _0x3f66b5(_0x3b5039(0x165))[_0x3b5039(0x1bd)](_0x3b5039(0x18c) + _0x4b1f2(_0x3b5039(0x1cb)) + _0x3b5039(0x285)), _0x3f66b5(_0x3b5039(0x165))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x4b1f2(_0x3b5039(0x1b3)) + _0x3b5039(0x17a)), _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x3b5039(0x1bd)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/Sh8HJ4d\x22\x20target=\x22_blank\x22>' + _0x4b1f2(_0x3b5039(0x19a)) + _0x3b5039(0x17a));
        }
        function _0x526611(_0x2b006b) {
            const _0x2d4c42 = _0x5ad020;
            var _0x5ca2b0 = document[_0x2d4c42(0x28a)]('a');
            _0x5ca2b0[_0x2d4c42(0x1c5)] = _0x2b006b, _0x5ca2b0['target'] = _0x2d4c42(0x279), document[_0x2d4c42(0x104)][_0x2d4c42(0x262)](_0x5ca2b0), _0x5ca2b0[_0x2d4c42(0x200)](), _0x5ca2b0[_0x2d4c42(0x1c7)]();
        }
        function _0x5425d6() {
            const _0x2c5695 = _0x5ad020;
            clearInterval(_0x2e1f49), _0x119587 = ![], _0x565775 = ![], _0x7ee12f = location[_0x2c5695(0x1c5)], _0xa5ab6d[_0x2c5695(0x150)](), console['log'](_0x2c5695(0xa6));
        }
        function _0x8e464d() {
            const _0x1ebfe4 = _0x5ad020;
            for (let _0x343500 in _0x15c461) {
                GM_getValue(_0x343500) != null && typeof GM_getValue(_0x343500) === _0x1ebfe4(0x278) && (_0x15c461[_0x343500] = GM_getValue(_0x343500));
            }
        }
        _0x3f66b5(function () {
            const _0x244a68 = _0x5ad020;
            _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), _0x244a68(0x111), function () {
                const _0x218d31 = _0x244a68;
                let _0x4b880a = _0x3f66b5(_0x218d31(0xa7))[0x0];
                _0x3f66b5(_0x218d31(0x161))['text'](_0x218d31(0x164) + location[_0x218d31(0x11b)] + _0x218d31(0xc2) + _0x4b880a[_0x218d31(0x10d)]);
            }), _0x3f66b5('body')['on']('click', '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x1ca443 = _0x244a68;
                _0x3f66b5(_0x1ca443(0x161))[_0x1ca443(0x1cf)](), document['execCommand']('copy');
            }), _0x3f66b5(_0x244a68(0x104))['on']('click', _0x244a68(0x282), function () {
                const _0x2df56b = _0x244a68;
                var _0x21d047 = _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x2df56b(0x179)]()[_0x2df56b(0x1de)] > 0x0 ? _0x3f66b5('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x2df56b(0x179)]() : _0x2df56b(0x164) + location[_0x2df56b(0x11b)] + _0x2df56b(0xc2) + _0x3f66b5(_0x2df56b(0xa7))[0x0][_0x2df56b(0x10d)], _0x531bb8 = document[_0x2df56b(0x28a)]('a'), _0x35333e = new Blob([_0x21d047], { 'type': 'text/plain' });
                _0x531bb8['href'] = URL['createObjectURL'](_0x35333e), _0x531bb8[_0x2df56b(0x18b)] = _0x2df56b(0xd2), document[_0x2df56b(0x104)]['appendChild'](_0x531bb8), _0x531bb8[_0x2df56b(0x200)](), _0x531bb8[_0x2df56b(0x1c7)]();
            }), _0x3f66b5('body')['on'](_0x244a68(0x200), _0x244a68(0x1e3), function () {
                const _0x15f96e = _0x244a68;
                _0x3f66b5(this)[_0x15f96e(0x1a5)](_0x15f96e(0x1bc))[_0x15f96e(0x1de)] > 0x0 ? _0x3f66b5(this)['parent']('#tempWrapper')[_0x15f96e(0x1a3)](0xfa, function () {
                    const _0x26f411 = _0x15f96e;
                    _0x3f66b5(this)[_0x26f411(0x1c7)]();
                }) : _0x3f66b5('.IG_SN_DIG')[_0x15f96e(0x1c7)]();
            }), _0x3f66b5(window)[_0x244a68(0x1c0)](function (_0x2d1c6c) {
                const _0x2d2e62 = _0x244a68;
                _0x2d1c6c[_0x2d2e62(0x1aa)] == '81' && _0x2d1c6c[_0x2d2e62(0xb1)] && (_0x3f66b5(_0x2d2e62(0x118))[_0x2d2e62(0x1c7)](), _0x2d1c6c['preventDefault']()), _0x2d1c6c['keyCode'] == '87' && _0x2d1c6c[_0x2d2e62(0xb1)] && (_0x3cf649(), _0x2d1c6c[_0x2d2e62(0xdd)]()), _0x2d1c6c[_0x2d2e62(0x1aa)] == '90' && _0x2d1c6c[_0x2d2e62(0xb1)] && (_0x25e38f(), _0x2d1c6c[_0x2d2e62(0xdd)]()), _0x2d1c6c['keyCode'] == '82' && _0x2d1c6c[_0x2d2e62(0xb1)] && (_0x5425d6(), _0x2d1c6c[_0x2d2e62(0xdd)]());
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x184), _0x244a68(0x28d), function (_0x5a5689) {
                const _0x1237d2 = _0x244a68;
                var _0x1f9ffd = _0x3f66b5(this)['attr']('id');
                if (_0x1f9ffd && _0x15c461[_0x1f9ffd] !== undefined) {
                    let _0x44ccff = _0x3f66b5(this)['prop']('checked');
                    GM_setValue(_0x1f9ffd, _0x44ccff), _0x15c461[_0x1f9ffd] = _0x44ccff, console['log'](_0x1237d2(0x198), _0x1f9ffd, _0x44ccff);
                }
            }), _0x3f66b5(_0x244a68(0x104))['on']('click', _0x244a68(0x197), function (_0x13ea9b) {
                const _0x35fb39 = _0x244a68;
                _0x3f66b5(this)['find'](_0x35fb39(0x1bc))[_0x35fb39(0x1de)] > 0x0 && _0x13ea9b[_0x35fb39(0xdd)]();
            }), _0x3f66b5('body')['on'](_0x244a68(0x184), _0x244a68(0x110), function () {
                const _0x500301 = _0x244a68;
                let _0x20938b = _0x3f66b5(this)['val']();
                _0x3f66b5(this)['attr'](_0x500301(0xcd)) == _0x500301(0x22f) ? _0x3f66b5(this)['next']()[_0x500301(0x13e)](_0x20938b) : _0x3f66b5(this)[_0x500301(0x106)]()[_0x500301(0x13e)](_0x20938b), _0x20938b >= 0x0 && _0x20938b <= 0x1 && (_0x3a814a = _0x20938b, GM_setValue(_0x500301(0x1ff), _0x20938b));
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x208), '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)', function (_0x2d93b9) {
                const _0x577eab = _0x244a68;
                if (_0x3f66b5(this)[_0x577eab(0xfe)](_0x577eab(0xcd)) == 'range') {
                    let _0x50bf73 = _0x3f66b5(this)['val']();
                    _0x3f66b5(this)[_0x577eab(0xe4)]()['val'](_0x50bf73);
                } else {
                    let _0x49eb3f = _0x3f66b5(this)[_0x577eab(0x13e)]();
                    _0x49eb3f >= 0x0 && _0x49eb3f <= 0x1 ? _0x3f66b5(this)[_0x577eab(0x106)]()[_0x577eab(0x13e)](_0x49eb3f) : _0x49eb3f < 0x0 ? _0x3f66b5(this)['val'](0x0) : _0x3f66b5(this)['val'](0x1);
                }
            }), _0x3f66b5('body')['on']('input', '.IG_SN_DIG\x20#tempWrapper\x20input#date_format', function (_0x1653fa) {
                const _0x521a3c = _0x244a68;
                GM_setValue(_0x521a3c(0x256), _0x3f66b5(this)['val']()), _0x232ef6 = _0x3f66b5(this)[_0x521a3c(0x13e)]();
            }), _0x3f66b5(_0x244a68(0x104))['on']('click', _0x244a68(0x1fd), function (_0x5f47b5) {
                const _0xd0e533 = _0x244a68;
                _0x5f47b5[_0xd0e533(0xdd)](), _0x54f2f7(this);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), _0x244a68(0x19b), function () {
                const _0x10b1a2 = _0x244a68;
                if (_0x15c461[_0x10b1a2(0xda)] && _0x15c461[_0x10b1a2(0xb9)])
                    _0x54f2f7(_0x3f66b5(this)[_0x10b1a2(0x1a5)]()[_0x10b1a2(0x1b4)]('a')['first']()[0x0], !![]);
                else {
                    var _0x4c2bb4 = new URL(_0x3f66b5(this)[_0x10b1a2(0x1a5)]()['children']('a')[_0x10b1a2(0xfe)](_0x10b1a2(0x246)));
                    _0x4c2bb4[_0x10b1a2(0x1a0)] = _0x10b1a2(0x141), _0x526611(_0x4c2bb4['href']);
                }
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), '.IG_SN_DIG_BODY\x20.videoThumbnail', function () {
                const _0x533f3 = _0x244a68;
                _0x56c209(_0x3f66b5(this)['parent']()[_0x533f3(0x1b4)]('a')[_0x533f3(0x125)]('img')[_0x533f3(0x172)]()['attr'](_0x533f3(0x218)), _0x3f66b5(this)[_0x533f3(0x1a5)]()[_0x533f3(0x1b4)]('a')[_0x533f3(0xfe)](_0x533f3(0x126)), _0x533f3(0x1a6), new Date()[_0x533f3(0x261)](), _0x533f3(0x19d), _0x3f66b5('#article-id')[_0x533f3(0x179)]());
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), _0x244a68(0x1af), function () {
                _0x20c3dc(!![]);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), _0x244a68(0x243), function (_0x32c75f) {
                const _0x43d4b2 = _0x244a68;
                _0x32c75f[_0x43d4b2(0xdd)](), _0x20c3dc(!![], !![], !![]);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), _0x244a68(0x215), function () {
                _0x33c621(!![]);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), '.IG_DWPROFILE', function (_0x268428) {
                _0x268428['stopPropagation'](), _0x5f4ab1(!![]);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), '.IG_DWHISTORY', function () {
                _0x3e3c56(!![]);
            }), _0x3f66b5(_0x244a68(0x104))['on']('click', _0x244a68(0x255), function (_0x40097c) {
                const _0x35c67e = _0x244a68;
                _0x40097c[_0x35c67e(0xdd)](), _0x3e3c56(!![], !![]);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), _0x244a68(0x1bb), function () {
                _0x37df51(!![]);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), '.IG_REELS', function () {
                _0x1d95cc(!![], !![]);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), _0x244a68(0x227), function () {
                _0x1d95cc(!![], !![], !![]);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), '.IG_REELS_THUMBNAIL', function () {
                _0x1d95cc(!![], ![]);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x174), _0x244a68(0x20b), function () {
                const _0x7f0b72 = _0x244a68;
                location[_0x7f0b72(0x1c5)] === _0x7f0b72(0x1e1) && _0x15c461[_0x7f0b72(0x13b)] && (_0x3f66b5(this)[_0x7f0b72(0x125)](_0x7f0b72(0x190))['length'] > 0x0 && (location[_0x7f0b72(0x1c5)] = _0x7f0b72(0x1e1) + _0x3f66b5(this)[_0x7f0b72(0x1b4)]('div')[_0x7f0b72(0x24a)]()[_0x7f0b72(0x179)]()));
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x184), _0x244a68(0x1d3), function () {
                const _0x5b9824 = _0x244a68;
                var _0x171c2a = _0x3f66b5(this)[_0x5b9824(0x125)]('input')[_0x5b9824(0x1a2)]('checked');
                _0x3f66b5('.IG_SN_DIG_BODY\x20.inner_box')[_0x5b9824(0xcb)](function () {
                    const _0x336469 = _0x5b9824;
                    _0x3f66b5(this)['prop'](_0x336469(0xf4), _0x171c2a);
                });
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x184), '.IG_SN_DIG_BODY\x20.inner_box', function () {
                const _0x5a0452 = _0x244a68;
                var _0xb02b1 = _0x3f66b5(_0x5a0452(0xd3))['length'], _0x4d0725 = _0x3f66b5(_0x5a0452(0x134))[_0x5a0452(0x1de)];
                _0x3f66b5('.IG_SN_DIG_TITLE\x20.checkbox')[_0x5a0452(0x125)](_0x5a0452(0x208))['prop'](_0x5a0452(0xf4), _0xb02b1 == _0x4d0725);
            }), _0x3f66b5(_0x244a68(0x104))['on'](_0x244a68(0x200), _0x244a68(0x151), function () {
                const _0x2c4840 = _0x244a68;
                let _0x90e103 = 0x0;
                _0x3f66b5('.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]')['each'](function () {
                    const _0x4bf893 = a0_0x16e0;
                    _0x3f66b5(this)[_0x4bf893(0x106)]()[_0x4bf893(0x1b4)](_0x4bf893(0x208))[_0x4bf893(0x1a2)](_0x4bf893(0xf4)) && (_0x3f66b5(this)[_0x4bf893(0x200)](), _0x90e103++);
                }), _0x90e103 == 0x0 && alert(_0x4b1f2(_0x2c4840(0x267)));
            }), _0x3f66b5('body')['on'](_0x244a68(0x184), _0x244a68(0x265), function () {
                const _0x2f8795 = _0x244a68;
                GM_setValue(_0x2f8795(0x251), _0x3f66b5(this)[_0x2f8795(0x13e)]()), _0x391cb7 = _0x3f66b5(this)[_0x2f8795(0x13e)](), _0x3cf649();
            }), _0x3f66b5(_0x244a68(0x104))['on']('change', _0x244a68(0x18f), function () {
                const _0x40d829 = _0x244a68;
                _0x3f66b5(_0x40d829(0x203))[_0x40d829(0x179)]('' + new Date()[_0x40d829(0x1a9)](_0x3f66b5(this)['val'](), {
                    'hour12': ![],
                    'second': '2-digit',
                    'minute': '2-digit',
                    'hour': _0x40d829(0x1d9),
                    'month': '2-digit',
                    'day': _0x40d829(0x1d9),
                    'year': _0x40d829(0x171)
                })[_0x40d829(0x240)]('/', '-')), _0x207830 = _0x3f66b5(this)['val'](), GM_setValue(_0x40d829(0xb6), _0x3f66b5(this)['val']());
            }), _0x3f66b5('body')['on'](_0x244a68(0x200), _0x244a68(0x115), function () {
                const _0x3d6ce5 = _0x244a68;
                _0x3f66b5(_0x3d6ce5(0x1b0))[_0x3d6ce5(0xcb)](function () {
                    const _0x1a8c3a = _0x3d6ce5;
                    _0x3f66b5(this)[_0x1a8c3a(0x200)]();
                });
            });
        });
    }, 0x3a98);
}(jQuery));
function a0_0x16e0(_0xeddb96, _0x4f7c1d) {
    const _0x140d06 = a0_0x140d();
    return a0_0x16e0 = function (_0x16e0af, _0x53c6fb) {
        _0x16e0af = _0x16e0af - 0xa6;
        let _0x115eb9 = _0x140d06[_0x16e0af];
        return _0x115eb9;
    }, a0_0x16e0(_0xeddb96, _0x4f7c1d);
}
function a0_0x140d() {
    const _0x7cd22a = [
        '</button>',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'div#splash-screen',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'BATCH_DOWNLOAD_DIRECT',
        'innerHTML',
        '\x22\x20/><br/>-\x20',
        'div.volume_slider\x20input',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'Directly\x20Download\x20All\x20Resources\x20In\x20the\x20Post',
        'getSeconds',
        'warn',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        '._aap0\x20+\x20.x24i39r',
        'after',
        '.IG_SN_DIG',
        'You\x20need\x20to\x20check\x20resource\x20to\x20download.',
        'Loading\x20Blob\x20Media\x20and\x20others...',
        'pathname',
        'Set\x20Rename\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'Found\x20post\x20container',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'cursor',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        '3519341sHzDvP',
        'NOPATH',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        '10802061tNtamG',
        'find',
        'data-username',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone)\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'observe',
        '\x22\x20title=\x22',
        'Display\x20HTML5\x20Video\x20Controller',
        'users',
        'response',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        '<input\x20value=\x22',
        '(reel)\x20Added\x20video\x20event\x20listener\x20#modify',
        'timeupdate',
        'username',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'Auto\x20rename\x20file\x20to\x20format\x20type\x20following:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aIt\x20will\x20ONLY\x20work\x20in\x20[Automatically\x20Rename\x20Files]\x20setting\x20to\x20TRUE.',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'shortcode',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'THUMBNAIL_INTRO',
        'before',
        'getFullYear',
        'Main\x20Timer',
        'REDIRECT_RIGHT_CLICK_USER_STORY_PICTURE',
        '\x22\x20class=\x22newTab\x22>',
        'getDate',
        'val',
        'canDownload',
        'Reload\x20Script',
        'scontent.cdninstagram.com',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        '<option\x20value=\x22',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'label',
        '445559oHEsGr',
        'startsWith',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        '_ac3q',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div.xdt5ytf[data-snig=\x22canDownload\x22],\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20section',
        'ALL_CHECK',
        'disconnect',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'candidates',
        'video\x20+\x20div\x20>\x20div',
        '#_SNLOAD',
        '._acnb',
        'Disable\x20Video\x20Auto-looping',
        'userLanguage',
        'tagName',
        'filter',
        'https://i.instagram.com/api/v1/users/',
        '\x22\x20class=\x22IG_REELS\x22>',
        'x1iyjqo2',
        'data-controls',
        '\x22\x20/></div>',
        'SELECT_LANG',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'HTML5_VIDEO_CONTROL',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'Location:\x20',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'getMinutes',
        'body\x20>\x20div\x20section:visible._ac0a',
        'section\x20>\x20main[role=\x22main\x22]',
        'is_video',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20To\x20Set)',
        'a[href^=\x22/p/\x22]',
        'position',
        '__typename',
        'div',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'isReels',
        'numeric',
        'first',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'contextmenu',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '</div></div>',
        'Display\x20HTML5\x20video\x20controller\x20in\x20posts\x20and\x20reels.\x20\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x0aIn\x20Reels\x20pages,\x20the\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'text',
        '</a></button>',
        'Can\x20not\x20find\x20video\x20url.',
        'style',
        'Detect\x20Blob\x20Media,\x20now\x20reloading...',
        'DISABLE_VIDEO_LOOPING',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'removeAttr',
        'datetime',
        'userAgent',
        'trigging',
        'change',
        '12ZmvGnJ',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'pointer',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>The\x20newly\x20selected\x20language\x20will\x20be\x20applied\x20after\x20refreshing\x20the\x20page.</div>',
        '_acnb',
        'download',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'removeClass',
        'Modify\x20the\x20rename\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20the\x20regional\x20date\x20format\x20of\x20your\x20choice.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        'canvas._aarh',
        'isHighlightsStory',
        'use\x20strict',
        'Close',
        'RENAME_PUBLISH_DATE',
        ':hidden',
        'message',
        '.IG_SN_DIG\x20.globalSettings',
        'user\x20settings',
        'url',
        'REPORT_DISCORD',
        '.IG_SN_DIG_BODY\x20.newTab',
        'data-type',
        'jpg',
        'Enable\x20Scroll\x20Buttons\x20For\x20Reels\x20Page',
        'Open\x20in\x20new\x20tab',
        'host',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'prop',
        'fadeOut',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'parent',
        'thumbnail',
        'header\x20>\x20section:first\x20img[alt]:not([draggable])',
        'playing',
        'toLocaleString',
        'keyCode',
        '#article-id',
        'loadstart',
        'parse',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%',
        '.IG_DWSTORY',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'play',
        'GET',
        'REPORT_GITHUB',
        'children',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'html',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        'IMG',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        '.IG_DWHISTORY_THUMBNAIL',
        '#tempWrapper',
        'append',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'keydown',
        'Forcing\x20Fetch\x20All\x20Resources\x20In\x20the\x20Post',
        'LOCALE_TEXT',
        'VID',
        'SETTING',
        'href',
        '</div>',
        'remove',
        'SHOW_DOM_TREE',
        'getHours',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        'DOWNLOAD_DOM_TREE',
        'onReadyMyDW()\x20Timer',
        'top',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'select',
        'status',
        'data-snig',
        'Select\x20All',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'toUpperCase',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        '<div\x20class=\x22volume_slider\x20bottom\x22\x20/>',
        'owner',
        'match',
        '2-digit',
        'reels',
        '\x20-</a>',
        'Image',
        'forEach',
        'length',
        'data-modify',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'https://www.instagram.com/',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        '\x22\x20/>',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20will\x20take\x20longer\x20to\x20load.',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'Donate',
        'Debug\x20Window',
        '</span>\x20<input\x20id=\x22',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'user',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'mouseenter',
        'stopPropagation',
        'MODIFY_VIDEO_VOLUME',
        'div.volume_slider',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '</option>',
        'muted',
        'highlights',
        'https://www.instagram.com/p/',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'matchAll',
        'scrollBy',
        '.videoThumbnail',
        'DOWNLOAD',
        'AUTO_RENAME',
        'video_versions',
        'a[data-needed=\x22direct\x22]',
        'data',
        'G_VIDEO_VOLUME',
        'click',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '#locatePreview',
        'width',
        '<button\x20id=\x22batch_download_direct\x22>',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'split',
        'input',
        'paused\x20pause()',
        'GraphVideo',
        'button[role=\x22menuitem\x22]',
        'parents',
        'x1lix1fw',
        'data-path',
        'volume',
        'script[type=\x22application/json\x22]',
        '--ig-track-progress:\x20',
        'BATCH_DOWNLOAD_SELECTED',
        'target',
        'GraphSidecar',
        '.IG_DWSTORY_THUMBNAIL',
        'createObjectURL',
        'z-index',
        'src',
        'THUMBNAIL',
        'www.',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '<a\x20datetime=\x22',
        'Fetch\x20from\x20memory\x20cache:',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        '/accounts/login',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'taken_at_timestamp',
        'edge_sidecar_to_children',
        'Select\x20All\x20and\x20Copy\x20of\x20the\x20Input\x20Box',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        '37px',
        '.IG_REELS_NEWTAB',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/>',
        'absolute',
        'css',
        '<label\x20class=\x22globalSettings',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'LOCATE_DATE_LIST_TEXT',
        'range',
        '<div></div>',
        '.IG_DWHISTORY',
        'join',
        '<div\x20title=\x22',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'https://ko-fi.com/snkoarashi',
        'Redirect\x20When\x20Right-Clicking\x20User\x20Story\x20Picture',
        'keys',
        'DIRECT_DOWNLOAD_ALL',
        'SELECT_AND_COPY',
        '.IG_SN_DIG\x20#post_info',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'smooth',
        'floor',
        'LOAD_BLOB_RELOAD',
        'replaceAll',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
        '6225624aiFkRD',
        '.IG_DWNEWTAB',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'data-href',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div.xdt5ytf[style],\x20div._aap0[role=\x22presentation\x22]',
        'px;\x22>',
        '2313635OkeYpy',
        'last',
        '%22}',
        'CLOSE',
        'video_resources',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20directly\x20forced\x20to\x20be\x20fetched\x20and\x20downloaded.',
        'Download\x20video\x20thumbnail',
        'mp4',
        'lang',
        'stories',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'Feedback',
        '.IG_DWHINEWTAB',
        'G_RENAME_FORMAT',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'items',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'finalUrl',
        'navigator',
        '(post)\x20video\x20volume\x20changed\x20#slider',
        'image_versions2',
        '\x22\x20class=\x22videoThumbnail\x22>',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        'getTime',
        'appendChild',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        '.IG_DWPROFILE',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'NO_CHECK_RESOURCE',
        'data-loop',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20user\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'x1s85apg',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'https://www.instagram.com/reel/',
        'assign',
        'DIV',
        'sort',
        'padStart',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20Posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'When\x20the\x20Media\x20API\x20reaches\x20the\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20is\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20is\x20slightly\x20lower).',
        'div:last-child',
        'hd_profile_pic_url_info',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'boolean',
        '_blank',
        'edges',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'addClass',
        'toString',
        'LOAD_BLOB_ONE',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'isProfile',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'display_url',
        '</a></button><br/>',
        'video',
        'isDialog',
        'NEW_TAB',
        '(reel)\x20Added\x20video\x20event\x20listener\x20#loop',
        'createElement',
        '_acnf',
        'setAttribute',
        '.IG_SN_DIG\x20input',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'main\x20timer\x20re-register\x20completed',
        'div[id^=\x22mount\x22]',
        '10207376ZKfYbN',
        '\x20child',
        'Found\x20insert\x20point',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'media-id',
        'Download\x20Selected\x20Resources',
        'instagram.com/reels/',
        'regenerated',
        'altKey',
        'hasClass',
        'hasReferrer',
        'modify',
        'GraphImage',
        'G_LOCATE_DATE_FORMAT',
        'video_url',
        '<div\x20class=\x22volume_slider\x22\x20/>',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'https://i.instagram.com/api/v1/media/',
        'taken_at',
        'header\x20>\x20section:first\x20img[alt]',
        '<a\x20media-id=\x22',
        '.IG_REELS',
        'body\x20>\x20div\x20section._ac0a',
        'then',
        'language',
        '\x0aDOM\x20Tree:\x0a',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        'pause',
        'log',
        'padEnd',
        'node',
        'controls',
        'relative',
        'div[role=\x22presentation\x22]',
        'each',
        'en-US',
        'type',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'Preference\x20Settings',
        'display_resources',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'DOMTree.txt',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        'LOAD_BLOB_MULTIPLE',
        '\x22Open\x20in\x20new\x20tab\x22\x20in\x20posts\x20always\x20uses\x20Media\x20API',
        'wrap',
        'header\x20>\x20section:first\x20img[alt][draggable]',
        '4Zgqnfd',
        'Can\x20not\x20find\x20download\x20url.',
        'FORCE_RESOURCE_VIA_MEDIA',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div.xdt5ytf',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'preventDefault',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'Download',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        '._aap0\x20._acaz',
        'next',
        'svg\x20>\x20path[d^=\x22M21.334\x22]',
        '\x22\x20data-globalIndex=\x22',
        'IG\x20Debug\x20DOM\x20Tree',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        '(reel)\x20video\x20volume\x20changed\x20#slider',
        'isHomepage',
        'li._acaz',
        'px;top:',
        'data-name',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'loop',
        'reels_media',
        'replace',
        'checked',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'data-completed',
        'div\x20>\x20ul\x20li._acaz',
        'shortcode_media',
        'Show\x20DOM\x20Tree',
        '._aagv\x20img',
        'div[role=\x22presentation\x22]\x20>\x20div\x20>\x20div:last-child',
        'hidden',
        '238152bODOxe',
        'attr',
        'FEEDBACK',
        'srcset',
        '\x22\x20datetime=\x22',
        '</a>',
        'reduce',
        'body',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20Reels\x20page.',
        'prev'
    ];
    a0_0x140d = function () {
        return _0x7cd22a;
    };
    return a0_0x140d();
}