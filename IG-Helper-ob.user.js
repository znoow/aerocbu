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

function a0_0x585c(_0x5566ef, _0x231654) {
    const _0x17d3fe = a0_0x17d3();
    return a0_0x585c = function (_0x585c18, _0x45d12b) {
        _0x585c18 = _0x585c18 - 0x1c9;
        let _0x4c4885 = _0x17d3fe[_0x585c18];
        return _0x4c4885;
    }, a0_0x585c(_0x5566ef, _0x231654);
}
(function (_0x62f96c, _0x423bbe) {
    const _0x341d3a = a0_0x585c, _0x3ab67e = _0x62f96c();
    while (!![]) {
        try {
            const _0x36dcb4 = parseInt(_0x341d3a(0x22b)) / 0x1 * (parseInt(_0x341d3a(0x371)) / 0x2) + parseInt(_0x341d3a(0x1d7)) / 0x3 * (-parseInt(_0x341d3a(0x263)) / 0x4) + -parseInt(_0x341d3a(0x278)) / 0x5 * (parseInt(_0x341d3a(0x341)) / 0x6) + -parseInt(_0x341d3a(0x41c)) / 0x7 + -parseInt(_0x341d3a(0x1f6)) / 0x8 + -parseInt(_0x341d3a(0x24a)) / 0x9 * (parseInt(_0x341d3a(0x325)) / 0xa) + -parseInt(_0x341d3a(0x260)) / 0xb * (-parseInt(_0x341d3a(0x40d)) / 0xc);
            if (_0x36dcb4 === _0x423bbe)
                break;
            else
                _0x3ab67e['push'](_0x3ab67e['shift']());
        } catch (_0x2de17a) {
            _0x3ab67e['push'](_0x3ab67e['shift']());
        }
    }
}(a0_0x17d3, 0x80f93), function (_0x32738f) {
    setTimeout(() => {
        'use strict';
        const _0x4d9e01 = a0_0x585c;
        const _0x4861ed = {
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
            }, _0x4e6fb3 = [
                'RENAME_PUBLISH_DATE',
                _0x4d9e01(0x355),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ];
        var _0x1958dd = GM_getValue(_0x4d9e01(0x32e)) ? GM_getValue(_0x4d9e01(0x32e)) : 0x1, _0x43993c = ![], _0x548904 = GM_getValue(_0x4d9e01(0x2b3)) ? GM_getValue(_0x4d9e01(0x2b3)) : _0x4d9e01(0x1e5);
        const _0x3c5d71 = {
                'DOWNLOAD': _0x4d9e01(0x267),
                'NEW_TAB': _0x4d9e01(0x2bd),
                'THUMBNAIL': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
                'CLOSE': _0x4d9e01(0x393)
            }, _0x5ad209 = 0xfa, _0x31528e = GM_getResourceText(_0x4d9e01(0x200)), _0x557530 = JSON['parse'](GM_getResourceText('LOCALE_MANIFEST'));
        var _0x6ff358 = [], _0x4e76dc = {}, _0x500d9c = GM_getValue(_0x4d9e01(0x251)) || navigator['language'] || navigator['userLanguage'], _0x3b0b94 = location[_0x4d9e01(0x1e6)], _0x12e044 = ![], _0x262cc8 = ![], _0xfc15c8 = [], _0x569966, _0x182e66, _0x4518f6, _0x106f5c, _0x26dd87 = {
                'stories': {},
                'highlights': {}
            }, _0x560c82 = new MutationObserver(function (_0x54c791, _0x43e15f) {
                _0x247268();
            });
        _0x144526(), GM_addStyle(_0x31528e), _0xb5921(), _0xcc2518(_0x500d9c)['then'](_0x16d0b3 => {
            _0x4e76dc[_0x500d9c] = _0x16d0b3, _0x4c87bc(), _0xb5921(), _0x2334ba(0x12c);
        })[_0x4d9e01(0x294)](_0x1dbea1 => {
            const _0x13972d = _0x4d9e01;
            _0xb5921(), _0x2334ba(0x12c), !_0x500d9c[_0x13972d(0x2fa)]('en') && console[_0x13972d(0x420)](_0x13972d(0x30c), _0x1dbea1);
        });
        var _0x55b207 = setInterval(function () {
            const _0x4db91c = _0x4d9e01;
            if (_0x32738f(_0x4db91c(0x31a))[_0x4db91c(0x2d3)] > 0x0 && !_0x32738f('div#splash-screen')['is'](_0x4db91c(0x2e9)) || location['pathname'][_0x4db91c(0x22d)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x4db91c(0x3af)][_0x4db91c(0x2fa)]('www.')) {
                _0x262cc8 = ![];
                return;
            }
            if (_0x3b0b94 != location[_0x4db91c(0x1e6)] || !_0x12e044 || !_0x262cc8) {
                console['log'](_0x4db91c(0x378), _0x4db91c(0x3f2)), clearInterval(_0x106f5c), _0x262cc8 = ![], _0x12e044 = !![], _0x3b0b94 = location[_0x4db91c(0x1e6)], _0x560c82[_0x4db91c(0x385)]();
                if (location[_0x4db91c(0x1e6)][_0x4db91c(0x2fa)](_0x4db91c(0x28f)) || location[_0x4db91c(0x27d)][_0x4db91c(0x22d)](/^\/(.*?)\/(p|reel)\//ig) || location['href'][_0x4db91c(0x2fa)](_0x4db91c(0x321))) {
                    _0x26dd87[_0x4db91c(0x1cb)] = {}, _0x26dd87[_0x4db91c(0x1db)] = {}, _0x22493b(_0x4db91c(0x2fc));
                    var _0x231bcc = setInterval(() => {
                        const _0x21f6dd = _0x4db91c;
                        _0x32738f(_0x21f6dd(0x407))[_0x21f6dd(0x2d3)] > 0x0 && (clearInterval(_0x231bcc), setTimeout(() => {
                            _0x247268(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x262cc8 = !![];
                }
                location[_0x4db91c(0x1e6)][_0x4db91c(0x2fa)]('https://www.instagram.com/reels/') && (_0x22493b(_0x4db91c(0x3b1)), setTimeout(() => {
                    _0x48508e(![]);
                }, 0x96), _0x262cc8 = !![]);
                if (location[_0x4db91c(0x1e6)][_0x4db91c(0x230)]('?')[0x0] == 'https://www.instagram.com/') {
                    _0x26dd87[_0x4db91c(0x1cb)] = {}, _0x26dd87[_0x4db91c(0x1db)] = {};
                    let _0x15dcfa = _0x569966?.[_0x4db91c(0x22d)](/^\/(stories|highlights)\//ig) != null;
                    _0x22493b(_0x4db91c(0x1d4), _0x15dcfa), setTimeout(() => {
                        const _0x56b541 = _0x4db91c;
                        _0x247268(![], _0x15dcfa);
                        const _0x122886 = _0x32738f(_0x56b541(0x289))?.[_0x56b541(0x3a5)]()[0x0];
                        _0x122886 && _0x560c82[_0x56b541(0x2d8)](_0x122886, { 'childList': !![] });
                    }, 0x96), _0x262cc8 = !![];
                }
                _0x32738f(_0x4db91c(0x3e5))[_0x4db91c(0x2d3)] && location['pathname'][_0x4db91c(0x22d)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x4db91c(0x27d)][_0x4db91c(0x22d)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x22493b(_0x4db91c(0x38b)), setTimeout(() => {
                    _0x410556(![]);
                }, 0x96), _0x262cc8 = !![]);
                if (!_0x262cc8) {
                    if (location['href'][_0x4db91c(0x22d)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x26dd87[_0x4db91c(0x1db)] = {}, _0x22493b('isHighlightsStory'), _0x4a322c(![]), _0x106f5c = setInterval(() => {
                            _0x2d346d(![]);
                        }, _0x5ad209), _0x32738f(_0x4db91c(0x2a8))[_0x4db91c(0x2d3)] && setTimeout(() => {
                            const _0x26b69f = _0x4db91c;
                            if (_0x4861ed[_0x26b69f(0x3e3)]) {
                                var _0x25cdb1 = _0x32738f('div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')['filter'](function () {
                                    const _0x53946f = _0x26b69f;
                                    return _0x32738f(this)[_0x53946f(0x3dc)]()[_0x53946f(0x2d3)] === 0x0 && this[_0x53946f(0x414)]['trim']() !== '';
                                });
                                _0x25cdb1?.[_0x26b69f(0x269)]();
                            }
                            _0x262cc8 = !![];
                        }, 0x96);
                    else
                        location[_0x4db91c(0x1e6)][_0x4db91c(0x22d)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x22493b(_0x4db91c(0x2fe)), _0x32738f(_0x4db91c(0x3da))[_0x4db91c(0x2d3)] > 0x0 && (_0x32738f(_0x4db91c(0x1f4))[_0x4db91c(0x38a)](), _0x32738f(_0x4db91c(0x36e))[_0x4db91c(0x38a)](), _0x32738f(_0x4db91c(0x20e))[_0x4db91c(0x2d3)] && _0x32738f(_0x4db91c(0x20e))[_0x4db91c(0x38a)](), _0x2bd5a8(![]), setTimeout(() => {
                            _0x2bd5a8(![]);
                        }, 0x96)), _0x32738f(_0x4db91c(0x1f4))['length'] && setTimeout(() => {
                            const _0x3f9617 = _0x4db91c;
                            if (_0x4861ed[_0x3f9617(0x3e3)]) {
                                var _0x26e79c = _0x32738f(_0x3f9617(0x234))[_0x3f9617(0x21a)](function () {
                                    const _0x3b8779 = _0x3f9617;
                                    return _0x32738f(this)['children']()[_0x3b8779(0x2d3)] === 0x0 && this['textContent'][_0x3b8779(0x348)]() !== '';
                                });
                                _0x26e79c?.[_0x3f9617(0x269)]();
                            }
                            _0x262cc8 = !![];
                        }, 0x96)) : (_0x262cc8 = ![], _0x32738f('.IG_DWSTORY')[_0x4db91c(0x2d3)] && _0x32738f(_0x4db91c(0x1f4))[_0x4db91c(0x38a)](), _0x32738f(_0x4db91c(0x36e))['length'] && _0x32738f('.IG_DWNEWTAB')['remove'](), _0x32738f('.IG_DWSTORY_THUMBNAIL')[_0x4db91c(0x2d3)] && _0x32738f(_0x4db91c(0x20e))[_0x4db91c(0x38a)](), _0x32738f('.IG_DWHISTORY')[_0x4db91c(0x2d3)] && _0x32738f('.IG_DWHISTORY')['remove'](), _0x32738f(_0x4db91c(0x244))[_0x4db91c(0x2d3)] && _0x32738f(_0x4db91c(0x244))[_0x4db91c(0x38a)](), _0x32738f(_0x4db91c(0x29f))[_0x4db91c(0x2d3)] && _0x32738f(_0x4db91c(0x29f))[_0x4db91c(0x38a)]());
                }
                _0x2334ba(0x12c), _0x569966 = new URL(location[_0x4db91c(0x1e6)])[_0x4db91c(0x27d)];
            }
        }, _0x5ad209);
        async function _0x410556(_0x5d82e5) {
            const _0x3a3d9b = _0x4d9e01;
            if (_0x5d82e5) {
                _0x15153c(!![]);
                let _0x446825 = new Date()[_0x3a3d9b(0x2be)](), _0x252938 = Math[_0x3a3d9b(0x402)](_0x446825 / 0x3e8), _0x5a01f9 = location['pathname'][_0x3a3d9b(0x334)](/(reels|tagged)\/$/ig, '')[_0x3a3d9b(0x230)]('/')[_0x3a3d9b(0x21a)](_0x46f8b3 => _0x46f8b3['length'] > 0x0)['at'](-0x1), _0x14837e = await _0x40294c(_0x5a01f9);
                try {
                    let _0x5daea9 = await _0x11dc93(_0x14837e[_0x3a3d9b(0x409)]['pk']);
                    _0x4d4e4b(_0x5daea9, _0x5a01f9, _0x3a3d9b(0x1fd), _0x252938, _0x3a3d9b(0x3d9));
                } catch (_0x20d1c9) {
                    _0x4d4e4b(_0x14837e[_0x3a3d9b(0x409)][_0x3a3d9b(0x357)], _0x5a01f9, _0x3a3d9b(0x1fd), _0x252938, 'jpg');
                }
                _0x15153c(![]);
            } else {
                if (!_0x32738f(_0x3a3d9b(0x2e3))[_0x3a3d9b(0x2d3)]) {
                    let _0x1e92c4 = setInterval(() => {
                        const _0x5288b1 = _0x3a3d9b;
                        if (_0x32738f(_0x5288b1(0x2e3))[_0x5288b1(0x2d3)]) {
                            clearInterval(_0x1e92c4);
                            return;
                        }
                        _0x32738f(_0x5288b1(0x329))['parent']()['parent']()[_0x5288b1(0x2e7)](_0x5288b1(0x346) + _0x5b0efa('DW') + _0x5288b1(0x247) + _0x3c5d71[_0x5288b1(0x2f2)] + _0x5288b1(0x35d)), _0x32738f(_0x5288b1(0x329))[_0x5288b1(0x3a5)]()[_0x5288b1(0x3a5)]()['css'](_0x5288b1(0x31f), _0x5288b1(0x218)), _0x32738f(_0x5288b1(0x2e5))[_0x5288b1(0x3a5)]()['parent']()[_0x5288b1(0x3a5)]()[_0x5288b1(0x2e7)](_0x5288b1(0x346) + _0x5b0efa('DW') + _0x5288b1(0x247) + _0x3c5d71[_0x5288b1(0x2f2)] + _0x5288b1(0x35d)), _0x32738f(_0x5288b1(0x2e5))[_0x5288b1(0x3a5)]()[_0x5288b1(0x3a5)]()[_0x5288b1(0x3a5)]()[_0x5288b1(0x403)](_0x5288b1(0x31f), _0x5288b1(0x218));
                    }, 0x96);
                }
            }
        }
        async function _0x4a322c(_0x4bdc24, _0x48d722) {
            const _0x21ad86 = _0x4d9e01;
            if (_0x4bdc24) {
                let _0x5b2594 = new Date()[_0x21ad86(0x2be)](), _0x53e399 = Math[_0x21ad86(0x402)](_0x5b2594 / 0x3e8), _0x434277 = location['href'][_0x21ad86(0x430)](/\/$/ig, '')[_0x21ad86(0x230)]('/')['at'](-0x1), _0x31f8e5 = _0x32738f('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x21ad86(0x2d3)] || _0x32738f(_0x21ad86(0x38d))[_0x21ad86(0x2d3)] || _0x32738f('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x21ad86(0x39e)](_0x21ad86(0x301))[_0x21ad86(0x2d3)], _0x576eee = '', _0xf23e72 = 0x0;
                _0x15153c(!![]);
                if (_0x26dd87[_0x21ad86(0x1db)][_0x434277]) {
                    _0x22493b(_0x21ad86(0x3b7), _0x434277);
                    let _0x3f9241 = _0x26dd87[_0x21ad86(0x1db)][_0x434277][_0x21ad86(0x3d8)][_0x21ad86(0x392)][0x0][_0x21ad86(0x20f)][_0x21ad86(0x2d3)];
                    _0x576eee = _0x26dd87[_0x21ad86(0x1db)][_0x434277][_0x21ad86(0x3d8)][_0x21ad86(0x392)][0x0][_0x21ad86(0x3a0)]['username'], _0xf23e72 = _0x26dd87[_0x21ad86(0x1db)][_0x434277][_0x21ad86(0x3d8)][_0x21ad86(0x392)][0x0][_0x21ad86(0x20f)][_0x3f9241 - _0x31f8e5];
                } else {
                    let _0x3cde02 = await _0x3b242d(_0x434277), _0x200ccc = _0x3cde02[_0x21ad86(0x3d8)]['reels_media'][0x0]['items'][_0x21ad86(0x2d3)];
                    _0x576eee = _0x3cde02['data']['reels_media'][0x0][_0x21ad86(0x3a0)][_0x21ad86(0x3be)], _0xf23e72 = _0x3cde02['data']['reels_media'][0x0][_0x21ad86(0x20f)][_0x200ccc - _0x31f8e5], _0x26dd87[_0x21ad86(0x1db)][_0x434277] = _0x3cde02;
                }
                _0x4861ed[_0x21ad86(0x2e2)] && (_0x53e399 = _0xf23e72[_0x21ad86(0x3ea)]);
                if (_0x4861ed['FORCE_RESOURCE_VIA_MEDIA'] && !_0x43993c) {
                    let _0x5b4492 = await _0x406363(_0xf23e72['id']);
                    _0x5b4492['status'] === 'ok' ? _0x5b4492[_0x21ad86(0x20f)][0x0][_0x21ad86(0x319)] ? _0x48d722 ? _0x326333(_0x5b4492[_0x21ad86(0x20f)][0x0][_0x21ad86(0x319)][0x0][_0x21ad86(0x3b4)]) : _0x4d4e4b(_0x5b4492['items'][0x0][_0x21ad86(0x319)][0x0][_0x21ad86(0x3b4)], _0x576eee, _0x21ad86(0x1db), _0x53e399, _0x21ad86(0x3d0), _0x434277) : _0x48d722 ? _0x326333(_0x5b4492[_0x21ad86(0x20f)][0x0][_0x21ad86(0x322)][_0x21ad86(0x34b)][0x0]['url']) : _0x4d4e4b(_0x5b4492[_0x21ad86(0x20f)][0x0]['image_versions2']['candidates'][0x0][_0x21ad86(0x3b4)], _0x576eee, _0x21ad86(0x1db), _0x53e399, _0x21ad86(0x3d9), _0x434277) : (_0x4861ed[_0x21ad86(0x355)] ? (delete _0x26dd87['highlights'][_0x434277], _0x43993c = !![], _0x4a322c(!![], _0x48d722)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x5b4492['message']), _0x22493b(_0x5b4492));
                } else
                    _0xf23e72['is_video'] ? _0x48d722 ? _0x326333(_0xf23e72['video_resources']['at'](-0x1)[_0x21ad86(0x30f)], _0x576eee) : _0x4d4e4b(_0xf23e72[_0x21ad86(0x1ce)]['at'](-0x1)['src'], _0x576eee, _0x21ad86(0x1db), _0x53e399, _0x21ad86(0x3d0), _0x434277) : _0x48d722 ? _0x326333(_0xf23e72[_0x21ad86(0x41b)]['at'](-0x1)['src'], _0x576eee) : _0x4d4e4b(_0xf23e72[_0x21ad86(0x41b)]['at'](-0x1)[_0x21ad86(0x30f)], _0x576eee, _0x21ad86(0x1db), _0x53e399, 'jpg', _0x434277), _0x43993c = ![];
                _0x15153c(![]);
            } else {
                if (!_0x32738f(_0x21ad86(0x2a8))['length']) {
                    let _0x1ed4fe = null;
                    _0x32738f(_0x21ad86(0x232))[_0x21ad86(0x2d3)] > 0x0 ? _0x1ed4fe = _0x32738f(_0x21ad86(0x2b9)) : (_0x1ed4fe = _0x32738f(_0x21ad86(0x2fb)), _0x1ed4fe[_0x21ad86(0x403)](_0x21ad86(0x31f), _0x21ad86(0x218)));
                    if (_0x1ed4fe[_0x21ad86(0x2d3)] === 0x0) {
                        let _0x3f74b4 = _0x32738f(_0x21ad86(0x209)), _0x5d8d71 = 0x0;
                        _0x3f74b4[_0x21ad86(0x258)](function () {
                            const _0x45d0e1 = _0x21ad86;
                            _0x32738f(this)[_0x45d0e1(0x3a6)]() > _0x5d8d71 && (_0x5d8d71 = _0x32738f(this)[_0x45d0e1(0x3a6)](), _0x1ed4fe = _0x32738f(this)['children'](_0x45d0e1(0x256))[_0x45d0e1(0x42d)]());
                        });
                    }
                    _0x1ed4fe != null && (_0x1ed4fe[_0x21ad86(0x2e7)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x5b0efa('DW') + _0x21ad86(0x37f) + _0x3c5d71[_0x21ad86(0x2f2)] + _0x21ad86(0x35d)), _0x1ed4fe['append'](_0x21ad86(0x382) + _0x5b0efa(_0x21ad86(0x333)) + _0x21ad86(0x283) + _0x3c5d71[_0x21ad86(0x333)] + '</div>'), _0x1ed4fe[_0x21ad86(0x39e)](_0x21ad86(0x415))['each'](function () {
                        const _0x5da324 = _0x21ad86;
                        _0x32738f(this)['on'](_0x5da324(0x34d), function () {
                            const _0x327fae = _0x5da324;
                            !_0x32738f(this)['data']('remove-thumbnail') && (_0x1ed4fe[_0x327fae(0x39e)](_0x327fae(0x29f))[_0x327fae(0x2d3)] === 0x0 ? (_0x32738f(this)[_0x327fae(0x21f)](_0x327fae(0x345), !![]), _0x32738f(_0x327fae(0x29f))[_0x327fae(0x38a)](), _0x22493b('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x32738f(this)[_0x327fae(0x21f)]('data-remove-thumbnail', !![]), _0x22493b(_0x327fae(0x2aa))));
                        });
                    }));
                }
            }
        }
        async function _0x2d346d(_0x5ee7b1) {
            const _0x413511 = _0x4d9e01;
            if (_0x5ee7b1) {
                let _0x2f1013 = new Date()['getTime'](), _0x54634b = Math[_0x413511(0x402)](_0x2f1013 / 0x3e8), _0x31cf29 = location[_0x413511(0x1e6)][_0x413511(0x430)](/\/$/ig, '')[_0x413511(0x230)]('/')['at'](-0x1), _0x2a3aa3 = '', _0x165abe = _0x32738f('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x413511(0x2d3)] || _0x32738f(_0x413511(0x38d))[_0x413511(0x2d3)] || _0x32738f(_0x413511(0x358))[_0x413511(0x39e)](_0x413511(0x301))[_0x413511(0x2d3)], _0x3fb057 = '';
                _0x15153c(!![]);
                if (_0x26dd87[_0x413511(0x1db)][_0x31cf29]) {
                    _0x22493b(_0x413511(0x3b7), _0x31cf29);
                    let _0x1d8db7 = _0x26dd87[_0x413511(0x1db)][_0x31cf29]['data'][_0x413511(0x392)][0x0]['items']['length'];
                    _0x2a3aa3 = _0x26dd87[_0x413511(0x1db)][_0x31cf29]['data'][_0x413511(0x392)][0x0][_0x413511(0x3a0)][_0x413511(0x3be)], _0x3fb057 = _0x26dd87[_0x413511(0x1db)][_0x31cf29]['data'][_0x413511(0x392)][0x0]['items'][_0x1d8db7 - _0x165abe];
                } else {
                    let _0x32f63b = await _0x3b242d(_0x31cf29), _0x2aefbd = _0x32f63b[_0x413511(0x3d8)][_0x413511(0x392)][0x0][_0x413511(0x20f)][_0x413511(0x2d3)];
                    _0x2a3aa3 = _0x32f63b[_0x413511(0x3d8)]['reels_media'][0x0][_0x413511(0x3a0)]['username'], _0x3fb057 = _0x32f63b['data'][_0x413511(0x392)][0x0][_0x413511(0x20f)][_0x2aefbd - _0x165abe], _0x26dd87[_0x413511(0x1db)][_0x31cf29] = _0x32f63b;
                }
                _0x4861ed[_0x413511(0x2e2)] && (_0x54634b = _0x3fb057[_0x413511(0x3ea)]);
                if (_0x4861ed[_0x413511(0x3bc)] && !_0x43993c) {
                    let _0x2cbfd0 = await _0x406363(_0x3fb057['id']);
                    _0x2cbfd0[_0x413511(0x1ff)] === 'ok' ? _0x4d4e4b(_0x2cbfd0[_0x413511(0x20f)][0x0][_0x413511(0x322)]['candidates'][0x0]['url'], _0x2a3aa3, _0x413511(0x1db), _0x54634b, _0x413511(0x3d9), _0x31cf29) : (_0x4861ed[_0x413511(0x355)] ? (delete _0x26dd87['highlights'][_0x31cf29], _0x43993c = !![], _0x2d346d(!![])) : alert(_0x413511(0x30d) + _0x2cbfd0[_0x413511(0x1d0)]), _0x22493b(_0x2cbfd0));
                } else
                    _0x4d4e4b(_0x3fb057[_0x413511(0x41b)]['at'](-0x1)[_0x413511(0x30f)], _0x2a3aa3, _0x413511(0x1db), _0x54634b, 'jpg', _0x31cf29), _0x43993c = ![];
                _0x15153c(![]);
            } else {
                if (_0x32738f(_0x413511(0x287))[_0x413511(0x2d3)]) {
                    if (!_0x32738f(_0x413511(0x29f))[_0x413511(0x2d3)]) {
                        let _0x170890 = null;
                        _0x32738f(_0x413511(0x232))[_0x413511(0x2d3)] > 0x0 ? _0x170890 = _0x32738f(_0x413511(0x2b9)) : (_0x170890 = _0x32738f('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x170890[_0x413511(0x403)](_0x413511(0x31f), _0x413511(0x218)));
                        if (_0x170890['length'] === 0x0) {
                            let _0x28ed19 = _0x32738f(_0x413511(0x209)), _0x3c279f = 0x0;
                            _0x28ed19[_0x413511(0x258)](function () {
                                const _0x2a6b97 = _0x413511;
                                _0x32738f(this)[_0x2a6b97(0x3a6)]() > _0x3c279f && (_0x3c279f = _0x32738f(this)[_0x2a6b97(0x3a6)](), _0x170890 = _0x32738f(this)[_0x2a6b97(0x3dc)](_0x2a6b97(0x256))[_0x2a6b97(0x42d)]());
                            });
                        }
                        _0x170890 != null && _0x170890['append'](_0x413511(0x2c6) + _0x5b0efa(_0x413511(0x3dd)) + _0x413511(0x412) + _0x3c5d71[_0x413511(0x3eb)] + _0x413511(0x35d));
                    }
                } else
                    _0x32738f('.IG_DWHISTORY_THUMBNAIL')[_0x413511(0x38a)]();
            }
        }
        async function _0x2bd5a8(_0x11d842, _0x20259b, _0x537940) {
            const _0x22fc78 = _0x4d9e01;
            if (_0x11d842) {
                let _0x339db9 = new Date()[_0x22fc78(0x2be)](), _0x16bdc7 = Math[_0x22fc78(0x402)](_0x339db9 / 0x3e8), _0x189e09 = _0x32738f('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()[_0x22fc78(0x41f)]() || location[_0x22fc78(0x27d)][_0x22fc78(0x230)]('/')[_0x22fc78(0x21a)](_0x399627 => _0x399627[_0x22fc78(0x2d3)] > 0x0)['at'](0x1);
                _0x15153c(!![]);
                if (_0x4861ed[_0x22fc78(0x3bc)] && !_0x43993c) {
                    let _0x3b2305 = null, _0x545040 = await _0x40294c(_0x189e09), _0x204edf = _0x545040['user']['pk'], _0x1b47f4 = await _0x411db4(_0x204edf), _0x2ca8f1 = location[_0x22fc78(0x27d)]['split']('/')[_0x22fc78(0x21a)](_0x3ae11d => _0x3ae11d['length'] > 0x0 && _0x3ae11d[_0x22fc78(0x22d)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x1b47f4[_0x22fc78(0x3d8)][_0x22fc78(0x392)][0x0][_0x22fc78(0x20f)][_0x22fc78(0x2d6)](_0x50e394 => {
                        _0x50e394['id'] == _0x2ca8f1 && (_0x3b2305 = _0x50e394['id']);
                    });
                    if (_0x3b2305 == null) {
                        let _0x4100f7 = _0x32738f('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x189e09 + '\x22]\x20span')[_0x22fc78(0x21a)](function () {
                            const _0x39bc9c = _0x22fc78;
                            return _0x32738f(this)[_0x39bc9c(0x3dc)]()[_0x39bc9c(0x2d3)] === 0x0 && _0x32738f(this)[_0x39bc9c(0x39e)]('svg')[_0x39bc9c(0x2d3)] === 0x0 && _0x32738f(this)[_0x39bc9c(0x41f)]()?.[_0x39bc9c(0x29c)]() === _0x189e09?.[_0x39bc9c(0x29c)]();
                        })[_0x22fc78(0x2d1)](_0x22fc78(0x3e7))[_0x22fc78(0x21a)](function () {
                            const _0x15113c = _0x22fc78;
                            return _0x32738f(this)[_0x15113c(0x41f)]()?.['toLowerCase']() !== _0x189e09?.[_0x15113c(0x29c)]();
                        })[_0x22fc78(0x21a)](function () {
                            const _0x37e8ad = _0x22fc78;
                            return _0x32738f(this)[_0x37e8ad(0x3dc)]()[_0x37e8ad(0x2d3)] > 0x1;
                        })[_0x22fc78(0x42d)]();
                        _0x4100f7[_0x22fc78(0x3dc)]()[_0x22fc78(0x21a)](function () {
                            return _0x32738f(this)['height']() < 0xa;
                        })[_0x22fc78(0x42d)]()[_0x22fc78(0x3dc)]()[_0x22fc78(0x258)](function (_0xc6c8dc) {
                            const _0x51bdfd = _0x22fc78;
                            _0x32738f(this)[_0x51bdfd(0x3dc)]()[_0x51bdfd(0x2d3)] > 0x0 && (_0x3b2305 = _0x1b47f4[_0x51bdfd(0x3d8)][_0x51bdfd(0x392)][0x0][_0x51bdfd(0x20f)][_0xc6c8dc]['id']);
                        });
                    }
                    _0x3b2305 == null && (_0x32738f(_0x22fc78(0x437))['each'](function (_0x484aa9) {
                        const _0x29ff79 = _0x22fc78;
                        _0x32738f(this)['hasClass'](_0x29ff79(0x270)) && (_0x32738f(this)[_0x29ff79(0x3dc)]()['length'] > 0x0 && (_0x3b2305 = _0x1b47f4[_0x29ff79(0x3d8)][_0x29ff79(0x392)][0x0][_0x29ff79(0x20f)][_0x484aa9]['id']));
                    }), _0x32738f(_0x22fc78(0x339))[_0x22fc78(0x258)](function (_0x1d6b69) {
                        const _0x4acb1a = _0x22fc78;
                        _0x32738f(this)[_0x4acb1a(0x3dc)]()[_0x4acb1a(0x2cf)](_0x4acb1a(0x27c)) && (_0x3b2305 = _0x1b47f4[_0x4acb1a(0x3d8)][_0x4acb1a(0x392)][0x0]['items'][_0x1d6b69]['id']);
                    }));
                    _0x3b2305 == null && (_0x3b2305 = location[_0x22fc78(0x27d)][_0x22fc78(0x230)]('/')[_0x22fc78(0x21a)](_0xa43567 => _0xa43567['length'] > 0x0 && _0xa43567[_0x22fc78(0x22d)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x1317e7 = await _0x406363(_0x3b2305);
                    _0x4861ed[_0x22fc78(0x2e2)] && (_0x16bdc7 = _0x1317e7[_0x22fc78(0x20f)][0x0][_0x22fc78(0x3bb)]);
                    _0x1317e7[_0x22fc78(0x1ff)] === 'ok' ? _0x1317e7[_0x22fc78(0x20f)][0x0]['video_versions'] ? _0x537940 ? _0x326333(_0x1317e7[_0x22fc78(0x20f)][0x0][_0x22fc78(0x319)][0x0][_0x22fc78(0x3b4)]) : _0x4d4e4b(_0x1317e7['items'][0x0][_0x22fc78(0x319)][0x0][_0x22fc78(0x3b4)], _0x189e09, _0x22fc78(0x1cb), _0x16bdc7, _0x22fc78(0x3d0), _0x3b2305) : _0x537940 ? _0x326333(_0x1317e7[_0x22fc78(0x20f)][0x0]['image_versions2'][_0x22fc78(0x34b)][0x0]['url']) : _0x4d4e4b(_0x1317e7['items'][0x0]['image_versions2'][_0x22fc78(0x34b)][0x0]['url'], _0x189e09, _0x22fc78(0x1cb), _0x16bdc7, 'jpg', _0x3b2305) : (_0x4861ed[_0x22fc78(0x355)] ? (_0x43993c = !![], _0x2bd5a8(_0x11d842, _0x20259b, _0x537940)) : alert(_0x22fc78(0x30d) + _0x1317e7[_0x22fc78(0x1d0)]), _0x22493b(_0x1317e7));
                    _0x15153c(![]);
                    return;
                }
                if (_0x32738f(_0x22fc78(0x3fb))[_0x22fc78(0x2d3)] > 0x0) {
                    let _0x59ed67 = _0x22fc78(0x3d0), _0x25edca = '', _0x39ef8d = location[_0x22fc78(0x27d)][_0x22fc78(0x430)](/\/$/ig, '')[_0x22fc78(0x230)]('/')['at'](-0x1), _0x24a4ab = null;
                    if (_0x26dd87[_0x22fc78(0x1cb)][_0x189e09] && !_0x20259b) {
                        _0x22493b(_0x22fc78(0x3b7), _0x189e09), _0x26dd87[_0x22fc78(0x1cb)][_0x189e09][_0x22fc78(0x3d8)][_0x22fc78(0x392)][0x0][_0x22fc78(0x20f)][_0x22fc78(0x2d6)](_0x4ffe91 => {
                            const _0x12747a = _0x22fc78;
                            _0x4ffe91['id'] == _0x39ef8d && (_0x25edca = _0x4ffe91[_0x12747a(0x1ce)][0x0][_0x12747a(0x30f)], _0x4861ed[_0x12747a(0x2e2)] && (_0x16bdc7 = _0x4ffe91[_0x12747a(0x3ea)], _0x24a4ab = _0x4ffe91['id']));
                        });
                        if (_0x25edca[_0x22fc78(0x2d3)] == 0x0) {
                            _0x22493b(_0x22fc78(0x2e6), _0x189e09), _0x2bd5a8(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x883663 = await _0x40294c(_0x189e09), _0x50c861 = _0x883663[_0x22fc78(0x409)]['pk'], _0x3648d1 = await _0x411db4(_0x50c861);
                        _0x3648d1[_0x22fc78(0x3d8)][_0x22fc78(0x392)][0x0]['items'][_0x22fc78(0x2d6)](_0x1068ac => {
                            const _0x406c6f = _0x22fc78;
                            _0x1068ac['id'] == _0x39ef8d && (_0x25edca = _0x1068ac['video_resources'][0x0][_0x406c6f(0x30f)], _0x4861ed['RENAME_PUBLISH_DATE'] && (_0x16bdc7 = _0x1068ac['taken_at_timestamp'], _0x24a4ab = _0x1068ac['id']));
                        });
                        if (_0x25edca[_0x22fc78(0x2d3)] == 0x0) {
                            let _0x4bb6c5 = _0x32738f(_0x22fc78(0x37b) + _0x189e09 + _0x22fc78(0x435))['filter'](function () {
                                const _0x4badb2 = _0x22fc78;
                                return _0x32738f(this)[_0x4badb2(0x3dc)]()[_0x4badb2(0x2d3)] === 0x0 && _0x32738f(this)['find'](_0x4badb2(0x381))[_0x4badb2(0x2d3)] === 0x0 && _0x32738f(this)[_0x4badb2(0x41f)]()?.[_0x4badb2(0x29c)]() === _0x189e09?.[_0x4badb2(0x29c)]();
                            })[_0x22fc78(0x2d1)](_0x22fc78(0x3e7))['filter'](function () {
                                const _0x12f075 = _0x22fc78;
                                return _0x32738f(this)[_0x12f075(0x41f)]()?.[_0x12f075(0x29c)]() !== _0x189e09?.['toLowerCase']();
                            })[_0x22fc78(0x21a)](function () {
                                const _0x279986 = _0x22fc78;
                                return _0x32738f(this)[_0x279986(0x3dc)]()['length'] > 0x1;
                            })[_0x22fc78(0x42d)]();
                            _0x4bb6c5[_0x22fc78(0x3dc)]()['filter'](function () {
                                const _0x19a5cf = _0x22fc78;
                                return _0x32738f(this)[_0x19a5cf(0x42b)]() < 0xa;
                            })[_0x22fc78(0x42d)]()[_0x22fc78(0x3dc)]()[_0x22fc78(0x258)](function (_0x1d78ec) {
                                const _0x441ae6 = _0x22fc78;
                                _0x32738f(this)[_0x441ae6(0x3dc)]()[_0x441ae6(0x2d3)] > 0x0 && (_0x25edca = _0x3648d1[_0x441ae6(0x3d8)]['reels_media'][0x0][_0x441ae6(0x20f)][_0x1d78ec]['video_resources'][0x0][_0x441ae6(0x30f)], _0x4861ed[_0x441ae6(0x2e2)] && (_0x16bdc7 = _0x3648d1[_0x441ae6(0x3d8)][_0x441ae6(0x392)][0x0]['items'][_0x1d78ec]['taken_at_timestamp'], _0x24a4ab = _0x3648d1[_0x441ae6(0x3d8)]['reels_media'][0x0][_0x441ae6(0x20f)][_0x1d78ec]['id']));
                            }), _0x25edca[_0x22fc78(0x2d3)] == 0x0 && (_0x32738f(_0x22fc78(0x437))['each'](function (_0x5d58f2) {
                                const _0x2778cd = _0x22fc78;
                                _0x32738f(this)[_0x2778cd(0x2cf)](_0x2778cd(0x270)) && (_0x32738f(this)['children']()['length'] > 0x0 && (_0x25edca = _0x3648d1[_0x2778cd(0x3d8)][_0x2778cd(0x392)][0x0][_0x2778cd(0x20f)][_0x5d58f2][_0x2778cd(0x1ce)][0x0][_0x2778cd(0x30f)], _0x4861ed[_0x2778cd(0x2e2)] && (_0x16bdc7 = _0x3648d1[_0x2778cd(0x3d8)][_0x2778cd(0x392)][0x0]['items'][_0x5d58f2][_0x2778cd(0x3ea)], _0x24a4ab = _0x3648d1['data']['reels_media'][0x0][_0x2778cd(0x20f)][_0x5d58f2]['id'])));
                            }), _0x32738f(_0x22fc78(0x339))[_0x22fc78(0x258)](function (_0xe38cbc) {
                                const _0x2433b7 = _0x22fc78;
                                _0x32738f(this)[_0x2433b7(0x3dc)]()['hasClass'](_0x2433b7(0x27c)) && (_0x25edca = _0x3648d1[_0x2433b7(0x3d8)][_0x2433b7(0x392)][0x0][_0x2433b7(0x20f)][_0xe38cbc]['video_resources'][0x0][_0x2433b7(0x30f)], _0x4861ed[_0x2433b7(0x2e2)] && (_0x16bdc7 = _0x3648d1[_0x2433b7(0x3d8)][_0x2433b7(0x392)][0x0][_0x2433b7(0x20f)][_0xe38cbc][_0x2433b7(0x3ea)], _0x24a4ab = _0x3648d1[_0x2433b7(0x3d8)][_0x2433b7(0x392)][0x0][_0x2433b7(0x20f)][_0xe38cbc]['id']));
                            }));
                        }
                        _0x26dd87['stories'][_0x189e09] = _0x3648d1;
                    }
                    _0x25edca[_0x22fc78(0x2d3)] == 0x0 ? alert(_0x5b0efa(_0x22fc78(0x33c))) : _0x537940 ? _0x326333(_0x25edca) : _0x4d4e4b(_0x25edca, _0x189e09, _0x22fc78(0x1cb), _0x16bdc7, _0x59ed67, _0x24a4ab);
                } else {
                    let _0x3415b7 = _0x32738f('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0x22fc78(0x21f)](_0x22fc78(0x22a))?.[_0x22fc78(0x230)](',')[0x0]?.['split']('\x20')[0x0], _0x4fd1b7 = _0x3415b7 ? _0x3415b7 : _0x32738f(_0x22fc78(0x313))['filter'](function () {
                            const _0x5d5dde = _0x22fc78;
                            return _0x32738f(this)['parents']('a')['length'] === 0x0 && _0x32738f(this)[_0x5d5dde(0x3a6)]() === _0x32738f(this)[_0x5d5dde(0x3a5)]()[_0x5d5dde(0x3a6)]();
                        })[_0x22fc78(0x21f)]('src');
                    if (!_0x4fd1b7) {
                        let _0x159bef = _0x32738f('body\x20>\x20div\x20section:visible\x20img._aa63');
                        _0x4fd1b7 = _0x159bef[_0x22fc78(0x21f)](_0x22fc78(0x22a)) ? _0x159bef['attr'](_0x22fc78(0x22a))?.[_0x22fc78(0x230)](',')[0x0]?.[_0x22fc78(0x230)]('\x20')[0x0] : _0x159bef[_0x22fc78(0x21f)](_0x22fc78(0x30f));
                    }
                    _0x4861ed[_0x22fc78(0x2e2)] && (_0x16bdc7 = new Date(_0x32738f(_0x22fc78(0x21e))[_0x22fc78(0x42d)]()[_0x22fc78(0x21f)]('datetime'))[_0x22fc78(0x2be)]());
                    let _0xba1e9 = _0x4fd1b7, _0x4faa4e = _0x22fc78(0x3d9);
                    _0x537940 ? _0x326333(_0xba1e9) : _0x4d4e4b(_0xba1e9, _0x189e09, _0x22fc78(0x1cb), _0x16bdc7, _0x4faa4e, _0x543483(_0xba1e9) ?? '');
                }
                _0x43993c = ![], _0x15153c(![]);
            } else {
                let _0x5b4137 = _0x22fc78(0x3c9);
                if (!_0x32738f('.IG_DWSTORY')[_0x22fc78(0x2d3)]) {
                    _0x26dd87[_0x22fc78(0x1cb)] = {};
                    let _0x23bcec = null;
                    _0x32738f(_0x22fc78(0x232))['length'] > 0x0 ? _0x23bcec = _0x32738f(_0x22fc78(0x2b9)) : (_0x23bcec = _0x32738f(_0x22fc78(0x2fb)), _0x23bcec['css']('position', _0x22fc78(0x218)));
                    _0x23bcec[_0x22fc78(0x2d3)] === 0x0 && (_0x23bcec = _0x32738f(_0x22fc78(0x3da))[_0x22fc78(0x3a5)]()[_0x22fc78(0x3a5)]()[_0x22fc78(0x3a5)]()[_0x22fc78(0x39e)](_0x22fc78(0x204)), _0x23bcec[_0x22fc78(0x403)]('position', _0x22fc78(0x218)));
                    _0x23bcec[_0x22fc78(0x2d3)] === 0x0 && (_0x23bcec = _0x32738f('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x22fc78(0x3a5)]()['parent']()['parent']()[_0x22fc78(0x39e)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x23bcec[_0x22fc78(0x403)](_0x22fc78(0x31f), _0x22fc78(0x218)));
                    if (_0x23bcec[_0x22fc78(0x2d3)] === 0x0) {
                        let _0x482a6b = _0x32738f(_0x22fc78(0x209)), _0x471071 = 0x0;
                        _0x482a6b[_0x22fc78(0x258)](function () {
                            const _0x5807c3 = _0x22fc78;
                            _0x32738f(this)[_0x5807c3(0x3a6)]() > _0x471071 && (_0x471071 = _0x32738f(this)[_0x5807c3(0x3a6)](), _0x23bcec = _0x32738f(this)['children']('div')['first']());
                        });
                    }
                    _0x23bcec != null && (_0x23bcec[_0x22fc78(0x42d)]()[_0x22fc78(0x403)](_0x22fc78(0x31f), _0x22fc78(0x218)), _0x23bcec[_0x22fc78(0x42d)]()['append'](_0x22fc78(0x346) + _0x5b0efa('DW') + _0x22fc78(0x2e8) + _0x3c5d71[_0x22fc78(0x2f2)] + _0x22fc78(0x35d)), _0x23bcec['first']()[_0x22fc78(0x2e7)](_0x22fc78(0x382) + _0x5b0efa(_0x22fc78(0x333)) + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x3c5d71['NEW_TAB'] + _0x22fc78(0x35d)), _0x23bcec['find'](_0x22fc78(0x415))[_0x22fc78(0x258)](function () {
                        const _0x31a06b = _0x22fc78;
                        _0x32738f(this)['on'](_0x31a06b(0x34d), function () {
                            const _0x40d315 = _0x31a06b;
                            !_0x32738f(this)[_0x40d315(0x3d8)](_0x40d315(0x410)) && (_0x23bcec[_0x40d315(0x39e)](_0x40d315(0x20e))[_0x40d315(0x2d3)] === 0x0 ? (_0x32738f(this)[_0x40d315(0x21f)](_0x40d315(0x345), !![]), _0x32738f(_0x40d315(0x20e))['remove'](), _0x22493b(_0x40d315(0x369))) : (_0x32738f(this)[_0x40d315(0x21f)](_0x40d315(0x345), !![]), _0x22493b(_0x40d315(0x20b))));
                        });
                    }));
                }
            }
        }
        async function _0x388261(_0x301231, _0x26b5df) {
            const _0x3e9eb7 = _0x4d9e01;
            if (_0x301231) {
                let _0x411d09 = new Date()[_0x3e9eb7(0x2be)](), _0x175543 = Math['floor'](_0x411d09 / 0x3e8), _0x4dcab4 = _0x3e9eb7(0x3d9), _0x696eb7 = _0x32738f(_0x3e9eb7(0x398))[_0x3e9eb7(0x42d)]()[_0x3e9eb7(0x41f)]() || location[_0x3e9eb7(0x27d)][_0x3e9eb7(0x230)]('/')['at'](0x2), _0x27ee65 = _0x3e9eb7(0x366), _0x5c6749 = location[_0x3e9eb7(0x27d)][_0x3e9eb7(0x430)](/\/$/ig, '')[_0x3e9eb7(0x230)]('/')['at'](-0x1), _0x3fa263 = '', _0x4fbd57 = null;
                _0x15153c(!![]);
                if (_0x4861ed['FORCE_RESOURCE_VIA_MEDIA'] && !_0x43993c) {
                    let _0x442423 = await _0x40294c(_0x696eb7), _0x2ab9be = _0x442423['user']['pk'], _0x371def = await _0x411db4(_0x2ab9be), _0x21613b = location['pathname'][_0x3e9eb7(0x230)]('/')[_0x3e9eb7(0x21a)](_0x685e4a => _0x685e4a[_0x3e9eb7(0x2d3)] > 0x0 && _0x685e4a[_0x3e9eb7(0x22d)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x371def[_0x3e9eb7(0x3d8)][_0x3e9eb7(0x392)][0x0][_0x3e9eb7(0x20f)][_0x3e9eb7(0x2d6)](_0xd94d5a => {
                        _0xd94d5a['id'] == _0x21613b && (_0x4fbd57 = _0xd94d5a['id']);
                    });
                    if (_0x4fbd57 == null) {
                        let _0x1cbcfb = _0x32738f(_0x3e9eb7(0x37b) + _0x696eb7 + _0x3e9eb7(0x435))['filter'](function () {
                            const _0x587343 = _0x3e9eb7;
                            return _0x32738f(this)[_0x587343(0x3dc)]()['length'] === 0x0 && _0x32738f(this)[_0x587343(0x39e)](_0x587343(0x381))[_0x587343(0x2d3)] === 0x0 && _0x32738f(this)[_0x587343(0x41f)]()?.[_0x587343(0x29c)]() === _0x696eb7?.['toLowerCase']();
                        })[_0x3e9eb7(0x2d1)](_0x3e9eb7(0x3e7))[_0x3e9eb7(0x21a)](function () {
                            const _0x4a8fb6 = _0x3e9eb7;
                            return _0x32738f(this)[_0x4a8fb6(0x41f)]()?.[_0x4a8fb6(0x29c)]() !== _0x696eb7?.[_0x4a8fb6(0x29c)]();
                        })['filter'](function () {
                            const _0x41a556 = _0x3e9eb7;
                            return _0x32738f(this)[_0x41a556(0x3dc)]()[_0x41a556(0x2d3)] > 0x1;
                        })[_0x3e9eb7(0x42d)]();
                        _0x1cbcfb[_0x3e9eb7(0x3dc)]()[_0x3e9eb7(0x21a)](function () {
                            const _0x1eec0f = _0x3e9eb7;
                            return _0x32738f(this)[_0x1eec0f(0x42b)]() < 0xa;
                        })[_0x3e9eb7(0x42d)]()[_0x3e9eb7(0x3dc)]()[_0x3e9eb7(0x258)](function (_0x183799) {
                            const _0x1c8456 = _0x3e9eb7;
                            _0x32738f(this)[_0x1c8456(0x3dc)]()['length'] > 0x0 && (_0x4fbd57 = _0x371def[_0x1c8456(0x3d8)][_0x1c8456(0x392)][0x0][_0x1c8456(0x20f)][_0x183799]['id']);
                        });
                    }
                    _0x4fbd57 == null && (_0x32738f(_0x3e9eb7(0x437))[_0x3e9eb7(0x258)](function (_0x1feb94) {
                        const _0x1f8811 = _0x3e9eb7;
                        _0x32738f(this)['hasClass'](_0x1f8811(0x270)) && (_0x32738f(this)[_0x1f8811(0x3dc)]()[_0x1f8811(0x2d3)] > 0x0 && (_0x4fbd57 = _0x371def[_0x1f8811(0x3d8)][_0x1f8811(0x392)][0x0]['items'][_0x1feb94]['id']));
                    }), _0x32738f('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x3e9eb7(0x258)](function (_0x2f9d45) {
                        const _0x3f8fc7 = _0x3e9eb7;
                        _0x32738f(this)[_0x3f8fc7(0x3dc)]()[_0x3f8fc7(0x2cf)](_0x3f8fc7(0x27c)) && (_0x4fbd57 = _0x371def[_0x3f8fc7(0x3d8)][_0x3f8fc7(0x392)][0x0][_0x3f8fc7(0x20f)][_0x2f9d45]['id']);
                    }));
                    _0x4fbd57 == null && (_0x4fbd57 = location[_0x3e9eb7(0x27d)][_0x3e9eb7(0x230)]('/')[_0x3e9eb7(0x21a)](_0x1b99cf => _0x1b99cf['length'] > 0x0 && _0x1b99cf['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x312f9d = await _0x406363(_0x4fbd57);
                    _0x4861ed[_0x3e9eb7(0x2e2)] && (_0x175543 = _0x312f9d[_0x3e9eb7(0x20f)][0x0][_0x3e9eb7(0x3bb)]);
                    _0x312f9d[_0x3e9eb7(0x1ff)] === 'ok' ? _0x4d4e4b(_0x312f9d[_0x3e9eb7(0x20f)][0x0][_0x3e9eb7(0x322)]['candidates'][0x0][_0x3e9eb7(0x3b4)], _0x696eb7, _0x3e9eb7(0x1cb), _0x175543, _0x3e9eb7(0x3d9), _0x4fbd57) : (_0x4861ed['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x43993c = !![], _0x388261(!![], _0x26b5df)) : alert(_0x3e9eb7(0x30d) + _0x312f9d['message']), _0x22493b(_0x312f9d));
                    _0x15153c(![]);
                    return;
                }
                if (_0x26dd87['stories'][_0x696eb7] && !_0x26b5df) {
                    _0x22493b(_0x3e9eb7(0x3b7), _0x696eb7), _0x26dd87['stories'][_0x696eb7]['data']['reels_media'][0x0][_0x3e9eb7(0x20f)][_0x3e9eb7(0x2d6)](_0x586a2f => {
                        const _0x573eb0 = _0x3e9eb7;
                        _0x586a2f['id'] == _0x5c6749 && (_0x3fa263 = _0x586a2f[_0x573eb0(0x438)], _0x4861ed[_0x573eb0(0x2e2)] && (_0x175543 = _0x586a2f[_0x573eb0(0x3ea)], _0x4fbd57 = _0x586a2f['id']));
                    });
                    if (_0x3fa263[_0x3e9eb7(0x2d3)] == 0x0) {
                        _0x22493b(_0x3e9eb7(0x2e6), _0x696eb7), _0x388261(!![], !![]);
                        return;
                    }
                } else {
                    let _0x3c8392 = await _0x40294c(_0x696eb7), _0x5de5bf = _0x3c8392[_0x3e9eb7(0x409)]['pk'], _0x1f0674 = await _0x411db4(_0x5de5bf);
                    _0x1f0674[_0x3e9eb7(0x3d8)][_0x3e9eb7(0x392)][0x0][_0x3e9eb7(0x20f)][_0x3e9eb7(0x2d6)](_0x1addfb => {
                        const _0x365044 = _0x3e9eb7;
                        _0x1addfb['id'] == _0x5c6749 && (_0x3fa263 = _0x1addfb[_0x365044(0x438)], _0x4861ed[_0x365044(0x2e2)] && (_0x175543 = _0x1addfb[_0x365044(0x3ea)], _0x4fbd57 = _0x1addfb['id']));
                    });
                    if (_0x3fa263[_0x3e9eb7(0x2d3)] == 0x0) {
                        let _0x4f5820 = _0x32738f(_0x3e9eb7(0x37b) + _0x696eb7 + '\x22]\x20span')[_0x3e9eb7(0x21a)](function () {
                            const _0x17069d = _0x3e9eb7;
                            return _0x32738f(this)[_0x17069d(0x3dc)]()[_0x17069d(0x2d3)] === 0x0 && _0x32738f(this)[_0x17069d(0x39e)](_0x17069d(0x381))['length'] === 0x0 && _0x32738f(this)[_0x17069d(0x41f)]()?.[_0x17069d(0x29c)]() === _0x696eb7?.[_0x17069d(0x29c)]();
                        })[_0x3e9eb7(0x2d1)](_0x3e9eb7(0x3e7))[_0x3e9eb7(0x21a)](function () {
                            const _0x4e97f6 = _0x3e9eb7;
                            return _0x32738f(this)['text']()?.[_0x4e97f6(0x29c)]() !== _0x696eb7?.[_0x4e97f6(0x29c)]();
                        })[_0x3e9eb7(0x21a)](function () {
                            const _0x29850f = _0x3e9eb7;
                            return _0x32738f(this)[_0x29850f(0x3dc)]()[_0x29850f(0x2d3)] > 0x1;
                        })['first']();
                        _0x4f5820['children']()[_0x3e9eb7(0x21a)](function () {
                            return _0x32738f(this)['height']() < 0xa;
                        })[_0x3e9eb7(0x42d)]()[_0x3e9eb7(0x3dc)]()['each'](function (_0x34e7ba) {
                            const _0x2572f4 = _0x3e9eb7;
                            _0x32738f(this)[_0x2572f4(0x3dc)]()[_0x2572f4(0x2d3)] > 0x0 && (_0x3fa263 = _0x1f0674[_0x2572f4(0x3d8)][_0x2572f4(0x392)][0x0][_0x2572f4(0x20f)][_0x34e7ba]['display_url'], _0x4861ed['RENAME_PUBLISH_DATE'] && (_0x175543 = _0x1f0674[_0x2572f4(0x3d8)]['reels_media'][0x0]['items'][_0x34e7ba][_0x2572f4(0x3ea)], _0x4fbd57 = _0x1f0674[_0x2572f4(0x3d8)][_0x2572f4(0x392)][0x0][_0x2572f4(0x20f)][_0x34e7ba]['id']));
                        }), _0x3fa263[_0x3e9eb7(0x2d3)] == 0x0 && (_0x32738f(_0x3e9eb7(0x437))[_0x3e9eb7(0x258)](function (_0x445c88) {
                            const _0x5ccb38 = _0x3e9eb7;
                            _0x32738f(this)['hasClass'](_0x5ccb38(0x270)) && (_0x32738f(this)[_0x5ccb38(0x3dc)]()[_0x5ccb38(0x2d3)] > 0x0 && (_0x3fa263 = _0x1f0674[_0x5ccb38(0x3d8)][_0x5ccb38(0x392)][0x0][_0x5ccb38(0x20f)][_0x445c88][_0x5ccb38(0x438)], _0x4861ed[_0x5ccb38(0x2e2)] && (_0x175543 = _0x1f0674['data'][_0x5ccb38(0x392)][0x0][_0x5ccb38(0x20f)][_0x445c88]['taken_at_timestamp'], _0x4fbd57 = _0x1f0674[_0x5ccb38(0x3d8)][_0x5ccb38(0x392)][0x0][_0x5ccb38(0x20f)][_0x445c88]['id'])));
                        }), _0x32738f(_0x3e9eb7(0x339))['each'](function (_0x3e46d7) {
                            const _0xe1520d = _0x3e9eb7;
                            _0x32738f(this)[_0xe1520d(0x3dc)]()[_0xe1520d(0x2cf)](_0xe1520d(0x27c)) && (_0x3fa263 = _0x1f0674[_0xe1520d(0x3d8)]['reels_media'][0x0][_0xe1520d(0x20f)][_0x3e46d7][_0xe1520d(0x438)], _0x4861ed[_0xe1520d(0x2e2)] && (_0x175543 = _0x1f0674[_0xe1520d(0x3d8)]['reels_media'][0x0][_0xe1520d(0x20f)][_0x3e46d7][_0xe1520d(0x3ea)], _0x4fbd57 = _0x1f0674[_0xe1520d(0x3d8)][_0xe1520d(0x392)][0x0][_0xe1520d(0x20f)][_0x3e46d7]['id']));
                        }));
                    }
                }
                _0x4d4e4b(_0x3fa263, _0x696eb7, _0x3e9eb7(0x23f), _0x175543, _0x4dcab4, _0x4fbd57), _0x43993c = ![], _0x15153c(![]);
            } else {
                if (_0x32738f(_0x3e9eb7(0x2f3))[_0x3e9eb7(0x3a5)]()[_0x3e9eb7(0x39e)](_0x3e9eb7(0x307))[_0x3e9eb7(0x2d3)]) {
                    let _0x37b293 = null;
                    _0x32738f(_0x3e9eb7(0x232))[_0x3e9eb7(0x2d3)] > 0x0 ? _0x37b293 = _0x32738f(_0x3e9eb7(0x2b9)) : (_0x37b293 = _0x32738f(_0x3e9eb7(0x2fb)), _0x37b293[_0x3e9eb7(0x403)](_0x3e9eb7(0x31f), 'relative'));
                    _0x37b293[_0x3e9eb7(0x2d3)] === 0x0 && (_0x37b293 = _0x32738f(_0x3e9eb7(0x3da))[_0x3e9eb7(0x3a5)]()['parent']()[_0x3e9eb7(0x3a5)]()[_0x3e9eb7(0x39e)](_0x3e9eb7(0x204)), _0x37b293[_0x3e9eb7(0x403)]('position', _0x3e9eb7(0x218)));
                    _0x37b293[_0x3e9eb7(0x2d3)] === 0x0 && (_0x37b293 = _0x32738f(_0x3e9eb7(0x3da))[_0x3e9eb7(0x3a5)]()['parent']()[_0x3e9eb7(0x3a5)]()[_0x3e9eb7(0x39e)](_0x3e9eb7(0x2a5)), _0x37b293[_0x3e9eb7(0x403)](_0x3e9eb7(0x31f), _0x3e9eb7(0x218)));
                    if (_0x37b293[_0x3e9eb7(0x2d3)] === 0x0) {
                        let _0x12758f = _0x32738f(_0x3e9eb7(0x209)), _0x3bcdf4 = 0x0;
                        _0x12758f['each'](function () {
                            const _0x3a0dff = _0x3e9eb7;
                            _0x32738f(this)[_0x3a0dff(0x3a6)]() > _0x3bcdf4 && (_0x3bcdf4 = _0x32738f(this)[_0x3a0dff(0x3a6)](), _0x37b293 = _0x32738f(this)['children'](_0x3a0dff(0x256))[_0x3a0dff(0x42d)]());
                        });
                    }
                    _0x37b293 != null && (_0x37b293[_0x3e9eb7(0x42d)]()[_0x3e9eb7(0x403)]('position', _0x3e9eb7(0x218)), _0x37b293[_0x3e9eb7(0x42d)]()[_0x3e9eb7(0x2e7)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x5b0efa(_0x3e9eb7(0x3dd)) + _0x3e9eb7(0x3de) + _0x3c5d71[_0x3e9eb7(0x3eb)] + _0x3e9eb7(0x35d)));
                }
            }
        }
        async function _0x48508e(_0x4e8634, _0x251e9d, _0x1dd61b) {
            const _0x245197 = _0x4d9e01;
            if (_0x4e8634) {
                _0x15153c(!![]);
                let _0x19fe18 = location['href']['split']('?')['at'](0x0)[_0x245197(0x230)](_0x245197(0x1cf))['at'](-0x1)[_0x245197(0x334)]('/', ''), _0x376863 = await _0x455909(_0x19fe18), _0x49029a = _0x376863[_0x245197(0x3d8)], _0xc0f309 = new Date()[_0x245197(0x2be)]();
                _0x4861ed['RENAME_PUBLISH_DATE'] && (_0x376863[_0x245197(0x428)] === _0x245197(0x2cc) ? _0xc0f309 = _0x49029a[_0x245197(0x368)][_0x245197(0x3ea)] : _0xc0f309 = _0x49029a[_0x245197(0x3bb)]);
                if (_0x376863[_0x245197(0x428)] === _0x245197(0x2cc)) {
                    if (_0x251e9d && _0x49029a[_0x245197(0x368)][_0x245197(0x257)]) {
                        if (_0x1dd61b)
                            _0x326333(_0x49029a[_0x245197(0x368)][_0x245197(0x1ec)]);
                        else {
                            let _0xcc8d8c = _0x245197(0x3d0);
                            _0x4d4e4b(_0x49029a[_0x245197(0x368)][_0x245197(0x1ec)], _0x49029a[_0x245197(0x368)]['owner'][_0x245197(0x3be)], _0x245197(0x328), _0xc0f309, _0xcc8d8c, _0x19fe18);
                        }
                    } else {
                        if (_0x1dd61b)
                            _0x326333(_0x49029a[_0x245197(0x368)][_0x245197(0x41b)]['at'](-0x1)[_0x245197(0x30f)]);
                        else {
                            let _0x14b9ef = 'jpg';
                            _0x4d4e4b(_0x49029a[_0x245197(0x368)][_0x245197(0x41b)]['at'](-0x1)[_0x245197(0x30f)], _0x49029a[_0x245197(0x368)][_0x245197(0x3a0)]['username'], _0x245197(0x328), _0xc0f309, _0x14b9ef, _0x19fe18);
                        }
                    }
                } else {
                    if (_0x251e9d && _0x49029a[_0x245197(0x319)] != null) {
                        if (_0x1dd61b)
                            _0x326333(_0x49029a[_0x245197(0x319)][0x0][_0x245197(0x3b4)]);
                        else {
                            let _0xb0b829 = 'mp4';
                            _0x4d4e4b(_0x49029a[_0x245197(0x319)][0x0]['url'], _0x49029a[_0x245197(0x3a0)]['username'], _0x245197(0x328), _0xc0f309, _0xb0b829, _0x19fe18);
                        }
                    } else {
                        if (_0x1dd61b)
                            _0x326333(_0x49029a[_0x245197(0x322)][_0x245197(0x34b)][0x0][_0x245197(0x3b4)]);
                        else {
                            let _0x5520cb = _0x245197(0x3d9);
                            _0x4d4e4b(_0x49029a['image_versions2'][_0x245197(0x34b)][0x0][_0x245197(0x3b4)], _0x49029a['owner']['username'], _0x245197(0x328), _0xc0f309, _0x5520cb, _0x19fe18);
                        }
                    }
                }
                _0x15153c(![]);
            } else
                var _0x4bdac9 = setInterval(() => {
                    const _0x5a3c51 = _0x245197;
                    _0x32738f(_0x5a3c51(0x3f3))[_0x5a3c51(0x2d3)] > 0x0 && (clearInterval(_0x4bdac9), _0x4861ed['SCROLL_BUTTON'] && (_0x32738f(_0x5a3c51(0x266))[_0x5a3c51(0x38a)](), _0x32738f(_0x5a3c51(0x225))[_0x5a3c51(0x2e7)](_0x5a3c51(0x362)), _0x32738f(_0x5a3c51(0x3cd))[_0x5a3c51(0x2e7)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x32738f('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x5a3c51(0x2e7)](_0x5a3c51(0x240)), _0x32738f('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up')['on'](_0x5a3c51(0x269), function () {
                        const _0x2ffbdd = _0x5a3c51;
                        _0x32738f(_0x2ffbdd(0x32b))[0x0]['scrollBy']({
                            'top': -0x1e,
                            'behavior': _0x2ffbdd(0x224)
                        });
                    }), _0x32738f('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0x5a3c51(0x269), function () {
                        _0x32738f('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0]['scrollBy']({
                            'top': 0x1e,
                            'behavior': 'smooth'
                        });
                    })), _0x32738f('section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]')['children'](_0x5a3c51(0x256))[_0x5a3c51(0x258)](function () {
                        const _0x192879 = _0x5a3c51;
                        if (_0x32738f(this)[_0x192879(0x3dc)]()['length'] > 0x0) {
                            if (!_0x32738f(this)[_0x192879(0x3dc)]()[_0x192879(0x39e)]('.IG_REELS')[_0x192879(0x2d3)]) {
                                var _0x5622c9 = _0x32738f(this);
                                _0x32738f(this)[_0x192879(0x3dc)]()['css'](_0x192879(0x31f), _0x192879(0x218)), _0x32738f(this)[_0x192879(0x3dc)]()[_0x192879(0x2e7)](_0x192879(0x346) + _0x5b0efa('DW') + '\x22\x20class=\x22IG_REELS\x22>' + _0x3c5d71[_0x192879(0x2f2)] + _0x192879(0x35d)), _0x32738f(this)['children']()['append'](_0x192879(0x382) + _0x5b0efa(_0x192879(0x333)) + _0x192879(0x2a7) + _0x3c5d71[_0x192879(0x333)] + '</div>'), _0x32738f(this)[_0x192879(0x3dc)]()[_0x192879(0x2e7)](_0x192879(0x2c6) + _0x5b0efa(_0x192879(0x3dd)) + _0x192879(0x42f) + _0x3c5d71[_0x192879(0x3eb)] + _0x192879(0x35d));
                                _0x4861ed['DISABLE_VIDEO_LOOPING'] && _0x32738f(this)[_0x192879(0x39e)](_0x192879(0x3e6))[_0x192879(0x258)](function () {
                                    _0x32738f(this)['on']('ended', function () {
                                        const _0x498730 = a0_0x585c;
                                        if (!_0x32738f(this)[_0x498730(0x3d8)](_0x498730(0x308))) {
                                            let _0x2ecef0 = _0x32738f(this)['next']()[_0x498730(0x39e)](_0x498730(0x272))[_0x498730(0x2d1)](_0x498730(0x23a));
                                            _0x2ecef0['length'] > 0x0 ? (_0x32738f(this)[_0x498730(0x21f)](_0x498730(0x2ff), !![]), _0x2ecef0[_0x498730(0x269)](), _0x22493b(_0x498730(0x34e))) : (_0x32738f(this)[_0x498730(0x21f)](_0x498730(0x2ff), !![]), _0x32738f(this)[_0x498730(0x3a5)]()[_0x498730(0x39e)](_0x498730(0x1ca))['removeAttr']('style'), this[_0x498730(0x312)](), _0x22493b(_0x498730(0x1fe)));
                                        }
                                    });
                                });
                                _0x4861ed['HTML5_VIDEO_CONTROL'] && _0x32738f(this)['find'](_0x192879(0x3e6))[_0x192879(0x258)](function () {
                                    const _0x42dec3 = _0x192879;
                                    if (!_0x32738f(this)['data']('controls')) {
                                        let _0x1832b6 = _0x32738f(this);
                                        _0x22493b(_0x42dec3(0x1f8)), this[_0x42dec3(0x1fa)] = _0x1958dd, _0x32738f(this)['on']('loadstart', function () {
                                            const _0x5af4a4 = _0x42dec3;
                                            this[_0x5af4a4(0x1fa)] = _0x1958dd;
                                        }), _0x32738f(this)['on'](_0x42dec3(0x3ca), function (_0x4ee415) {
                                            const _0x11634c = _0x42dec3;
                                            _0x4ee415[_0x11634c(0x324)](), _0x1832b6['css']('z-index', '-1'), _0x1832b6[_0x11634c(0x252)](_0x11634c(0x3c3));
                                        }), _0x32738f(this)['parent']()[_0x42dec3(0x39e)](_0x42dec3(0x2ad))[_0x42dec3(0x21a)](function () {
                                            const _0x1fa8c0 = _0x42dec3;
                                            return _0x32738f(this)[_0x1fa8c0(0x3a5)](_0x1fa8c0(0x2a4))[_0x1fa8c0(0x2d3)] > 0x0 && _0x32738f(this)[_0x1fa8c0(0x403)](_0x1fa8c0(0x281)) === _0x1fa8c0(0x31e) && _0x32738f(this)[_0x1fa8c0(0x21f)](_0x1fa8c0(0x1eb)) != null;
                                        })[_0x42dec3(0x42d)]()['on']('contextmenu', function (_0x3dfd01) {
                                            const _0x3e956e = _0x42dec3;
                                            _0x3dfd01[_0x3e956e(0x324)](), _0x1832b6[_0x3e956e(0x403)](_0x3e956e(0x384), '2'), _0x1832b6[_0x3e956e(0x21f)](_0x3e956e(0x3c3), !![]);
                                        }), _0x32738f(this)['on'](_0x42dec3(0x246), function () {
                                            const _0x55ce3c = _0x42dec3;
                                            let _0x4156b7 = _0x32738f(this)['parent']()['find']('video\x20+\x20div\x20>\x20div')[_0x55ce3c(0x39e)](_0x55ce3c(0x3a3))[_0x55ce3c(0x21a)](function (_0x2523eb) {
                                                const _0x5340f4 = _0x55ce3c;
                                                return _0x32738f(this)['width']() <= 0x40 && _0x32738f(this)[_0x5340f4(0x42b)]() <= 0x40 && _0x32738f(this)[_0x5340f4(0x39e)](_0x5340f4(0x28d))[_0x5340f4(0x2d3)] > 0x0;
                                            });
                                            var _0x3c9672 = _0x4156b7[_0x55ce3c(0x39e)](_0x55ce3c(0x40e))[_0x55ce3c(0x2d3)] === 0x0;
                                            this['muted'] != _0x3c9672 && (this['volume'] = _0x1958dd, _0x4156b7?.[_0x55ce3c(0x269)]()), _0x32738f(this)[_0x55ce3c(0x21f)](_0x55ce3c(0x303)) && (_0x1958dd = this['volume'], GM_setValue(_0x55ce3c(0x32e), this[_0x55ce3c(0x1fa)])), this[_0x55ce3c(0x1fa)] == _0x1958dd && _0x32738f(this)[_0x55ce3c(0x21f)](_0x55ce3c(0x303), !![]);
                                        }), _0x32738f(this)[_0x42dec3(0x403)](_0x42dec3(0x31f), _0x42dec3(0x3f0)), _0x32738f(this)[_0x42dec3(0x403)](_0x42dec3(0x384), '2'), _0x32738f(this)[_0x42dec3(0x21f)]('data-controls', !![]), _0x32738f(this)[_0x42dec3(0x21f)]('controls', !![]);
                                    }
                                });
                                var _0x1153a6 = _0x5622c9[_0x192879(0x39e)]('video'), _0x1ba851 = _0x32738f(this)[_0x192879(0x39e)](_0x192879(0x36d))['first']();
                                _0x1e46cf(_0x1153a6, _0x1ba851, 'reel');
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x543483(_0x3d0af5) {
            const _0x1c448d = _0x4d9e01;
            let _0x33f31f = new URL(_0x3d0af5), _0x586f2f = _0x33f31f?.[_0x1c448d(0x2a9)]?.[_0x1c448d(0x206)](_0x1c448d(0x3a4))?.[_0x1c448d(0x230)]('.')['at'](0x0);
            return _0x586f2f ? atob(_0x586f2f) : null;
        }
        function _0x3b242d(_0x333c6d) {
            return new Promise((_0x182024, _0x232cdc) => {
                const _0x36ffbf = a0_0x585c;
                let _0x3d6977 = _0x36ffbf(0x3db) + _0x333c6d + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': _0x36ffbf(0x1fc),
                    'url': _0x3d6977,
                    'onload': function (_0x5a4f13) {
                        const _0x5c4b60 = _0x36ffbf;
                        try {
                            let _0x416d64 = JSON['parse'](_0x5a4f13['response']);
                            _0x182024(_0x416d64);
                        } catch (_0x13493a) {
                            _0x22493b(_0x5c4b60(0x220), _0x5c4b60(0x406), _0x13493a['message']), _0x232cdc(_0x13493a);
                        }
                    },
                    'onerror': function (_0x417c61) {
                        const _0x1040fa = _0x36ffbf;
                        _0x22493b(_0x1040fa(0x220), _0x1040fa(0x406), _0x417c61), _0x232cdc(_0x417c61);
                    }
                });
            });
        }
        function _0x411db4(_0x381927) {
            return new Promise((_0xd87c47, _0x4579af) => {
                const _0x5799e7 = a0_0x585c;
                let _0x3efb1c = _0x5799e7(0x29a) + _0x381927 + _0x5799e7(0x3e0);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3efb1c,
                    'onload': function (_0x10300e) {
                        const _0x4ef199 = _0x5799e7;
                        try {
                            let _0x4222b7 = JSON[_0x4ef199(0x239)](_0x10300e[_0x4ef199(0x3a8)]);
                            _0x22493b(_0x4ef199(0x250), _0x4222b7), _0xd87c47(_0x4222b7);
                        } catch (_0x2b7faf) {
                            _0x22493b(_0x4ef199(0x250), _0x4ef199(0x406), _0x2b7faf[_0x4ef199(0x1d0)]), _0x4579af(_0x2b7faf);
                        }
                    },
                    'onerror': function (_0x43a827) {
                        const _0x194532 = _0x5799e7;
                        _0x22493b(_0x194532(0x250), 'reject', _0x43a827), _0x4579af(_0x43a827);
                    }
                });
            });
        }
        function _0x40294c(_0x34b9dc) {
            return new Promise((_0x46a649, _0x2bd0c9) => {
                const _0x3682d0 = a0_0x585c;
                let _0x2687e1 = _0x3682d0(0x1ef) + _0x34b9dc;
                GM_xmlhttpRequest({
                    'method': _0x3682d0(0x1fc),
                    'url': _0x2687e1,
                    'onload': function (_0x217769) {
                        const _0x272f42 = _0x3682d0;
                        let _0x29cca9 = JSON['parse'](_0x217769[_0x272f42(0x3a8)]), _0x7b28df = null;
                        _0x29cca9[_0x272f42(0x1dc)][_0x272f42(0x2d6)](_0x2d2a82 => {
                            const _0xeace4d = _0x272f42;
                            _0x2d2a82[_0xeace4d(0x409)]['username']?.['toLowerCase']() === _0x34b9dc?.[_0xeace4d(0x29c)]() && (_0x7b28df = _0x2d2a82);
                        }), _0x7b28df != null ? (_0x22493b(_0x272f42(0x25e), _0x7b28df), _0x46a649(_0x7b28df)) : _0x4aa173(_0x34b9dc)[_0x272f42(0x305)](_0x52d48b => {
                            _0x46a649(_0x52d48b);
                        })['catch'](_0x20fdda => {
                            const _0x11d9d3 = _0x272f42;
                            alert(_0x11d9d3(0x380));
                        });
                    },
                    'onerror': function (_0x5f353b) {
                        const _0x5d1164 = _0x3682d0;
                        _0x22493b(_0x5d1164(0x25e), _0x5d1164(0x406), _0x5f353b), _0x2bd0c9(_0x5f353b);
                    }
                });
            });
        }
        function _0x4aa173(_0x1dd2d4) {
            return new Promise((_0x4052ab, _0x55b39f) => {
                let _0x40b400 = 'https://i.instagram.com/api/v1/users/web_profile_info/?username=' + _0x1dd2d4;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x40b400,
                    'headers': { 'X-IG-App-ID': _0x320d25() },
                    'onload': function (_0x49d2d1) {
                        const _0x159be3 = a0_0x585c;
                        try {
                            let _0x3d1a7d = JSON['parse'](_0x49d2d1['response']), _0x1b427f = _0x3d1a7d?.[_0x159be3(0x3d8)]?.['user'];
                            if (_0x1b427f != null) {
                                let _0x3f291f = _0x3d1a7d?.[_0x159be3(0x3d8)];
                                _0x3f291f[_0x159be3(0x409)]['pk'] = _0x3f291f['user']['id'], _0x22493b(_0x159be3(0x316), _0x3d1a7d), _0x4052ab(_0x3f291f);
                            } else
                                _0x22493b(_0x159be3(0x316), _0x159be3(0x406), 'undefined'), _0x55b39f('undefined');
                        } catch (_0x3c96fa) {
                            _0x22493b(_0x159be3(0x316), 'reject', _0x3c96fa[_0x159be3(0x1d0)]), _0x55b39f(_0x3c96fa);
                        }
                    },
                    'onerror': function (_0x2c2806) {
                        const _0xdcd848 = a0_0x585c;
                        _0x22493b(_0xdcd848(0x316), 'reject', _0x2c2806), _0x55b39f(_0x2c2806);
                    }
                });
            });
        }
        function _0x11dc93(_0x343b12) {
            return new Promise((_0x579a16, _0x2d7453) => {
                const _0x13f944 = a0_0x585c;
                let _0x19ed22 = _0x13f944(0x284) + _0x343b12 + '/info/';
                GM_xmlhttpRequest({
                    'method': _0x13f944(0x1fc),
                    'url': _0x19ed22,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x36f7e1) {
                        const _0x57d582 = _0x13f944;
                        try {
                            let _0x57f592 = JSON[_0x57d582(0x239)](_0x36f7e1[_0x57d582(0x3a8)]);
                            _0x57f592[_0x57d582(0x1ff)] !== 'ok' ? (_0x22493b(_0x57d582(0x317), _0x57d582(0x406), _0x57f592), _0x2d7453(_0x57d582(0x3fa))) : (_0x22493b(_0x57d582(0x317), _0x57f592), _0x579a16(_0x57f592[_0x57d582(0x409)][_0x57d582(0x3ae)]?.['url']));
                        } catch (_0x2c8f04) {
                            _0x22493b(_0x57d582(0x317), _0x57d582(0x406), _0x2c8f04), _0x2d7453(_0x2c8f04);
                        }
                    },
                    'onerror': function (_0x55560e) {
                        const _0x2761f8 = _0x13f944;
                        _0x22493b(_0x2761f8(0x317), 'reject', _0x55560e), _0x2d7453(_0x55560e);
                    }
                });
            });
        }
        function _0x4e3c19(_0x5f95bd) {
            return new Promise((_0xb1204b, _0x3d729e) => {
                const _0x53b618 = a0_0x585c;
                if (!_0x5f95bd)
                    _0x3d729e(_0x53b618(0x245));
                let _0x52e160 = _0x5f95bd, _0x4d4bba = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x52e160 + _0x53b618(0x1da);
                GM_xmlhttpRequest({
                    'method': _0x53b618(0x1fc),
                    'url': _0x4d4bba,
                    'onload': function (_0x36a1cd) {
                        const _0x47c136 = _0x53b618;
                        try {
                            let _0x14e625 = JSON[_0x47c136(0x239)](_0x36a1cd[_0x47c136(0x3a8)]);
                            _0x22493b(_0x47c136(0x2b2), _0x14e625), _0xb1204b(_0x14e625[_0x47c136(0x3d8)][_0x47c136(0x368)][_0x47c136(0x3a0)][_0x47c136(0x3be)]);
                        } catch (_0xc9c588) {
                            _0x22493b('getPostOwner()', _0x47c136(0x406), _0xc9c588[_0x47c136(0x1d0)]), _0x3d729e(_0xc9c588);
                        }
                    },
                    'onerror': function (_0x1bde52) {
                        const _0xb84d6a = _0x53b618;
                        _0x22493b(_0xb84d6a(0x2b2), _0xb84d6a(0x406), _0x1bde52), _0x3d729e(_0x1bde52);
                    }
                });
            });
        }
        function _0x455909(_0x37a1a9) {
            return new Promise((_0x135ea3, _0x3e5f6d) => {
                const _0x2a9178 = a0_0x585c;
                if (!_0x37a1a9)
                    _0x3e5f6d(_0x2a9178(0x245));
                let _0x15eec1 = _0x37a1a9, _0x20ea71 = _0x2a9178(0x388) + _0x15eec1 + _0x2a9178(0x1da);
                GM_xmlhttpRequest({
                    'method': _0x2a9178(0x1fc),
                    'url': _0x20ea71,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x599eff) {
                        const _0x175b26 = _0x2a9178;
                        try {
                            let _0x11f899 = JSON[_0x175b26(0x239)](_0x599eff[_0x175b26(0x3a8)]);
                            _0x22493b(_0x11f899), _0x11f899[_0x175b26(0x1ff)] === _0x175b26(0x2f8) ? (_0x22493b(_0x175b26(0x214), _0x175b26(0x1f1), _0x15eec1), _0x1c1601(_0x15eec1)[_0x175b26(0x305)](_0x5a0569 => {
                                const _0x2caae7 = _0x175b26;
                                _0x135ea3({
                                    'type': _0x2caae7(0x243),
                                    'data': _0x5a0569[_0x2caae7(0x299)][_0x2caae7(0x20f)][0x0]
                                });
                            })[_0x175b26(0x294)](_0x5440da => {
                                _0x3e5f6d(_0x5440da);
                            })) : _0x135ea3({
                                'type': _0x175b26(0x2cc),
                                'data': _0x11f899[_0x175b26(0x3d8)]
                            });
                        } catch (_0xdf2ed4) {
                            _0x22493b(_0x175b26(0x288), _0x175b26(0x406), _0xdf2ed4[_0x175b26(0x1d0)]), _0x3e5f6d(_0xdf2ed4);
                        }
                    },
                    'onerror': function (_0x305067) {
                        const _0x426536 = _0x2a9178;
                        _0x22493b(_0x426536(0x288), _0x426536(0x406), _0x305067), _0x3e5f6d(_0x305067);
                    }
                });
            });
        }
        function _0x1c1601(_0x5729b6) {
            return new Promise((_0x479f3a, _0x7d5908) => {
                const _0x2082f8 = a0_0x585c;
                if (!_0x5729b6)
                    _0x7d5908('NOPATH');
                let _0x5e08b9 = _0x5729b6, _0x6e198d = _0x2082f8(0x23d) + _0x5e08b9 + _0x2082f8(0x326);
                GM_xmlhttpRequest({
                    'method': _0x2082f8(0x1fc),
                    'url': _0x6e198d,
                    'headers': {
                        'User-Agent': _0x2082f8(0x265),
                        'X-IG-App-ID': _0x320d25()
                    },
                    'onload': function (_0x5273b5) {
                        const _0x320db1 = _0x2082f8;
                        try {
                            let _0x1099a5 = JSON[_0x320db1(0x239)](_0x5273b5['response']);
                            _0x22493b(_0x1099a5), _0x1099a5[_0x320db1(0x1ff)] === 'fail' ? (alert(_0x320db1(0x1d5) + _0x1099a5['message'] + ':\x20' + _0x1099a5['feedback_message']), _0x22493b(_0x320db1(0x291) + _0x1099a5[_0x320db1(0x1d0)] + ':\x20' + _0x1099a5[_0x320db1(0x2c2)]), _0x7d5908(_0x5273b5)) : (_0x22493b(_0x320db1(0x34c), _0x1099a5[_0x320db1(0x3d8)]), _0x479f3a(_0x1099a5[_0x320db1(0x3d8)]));
                        } catch (_0x316360) {
                            _0x22493b(_0x320db1(0x34c), _0x320db1(0x406), _0x316360[_0x320db1(0x1d0)]), _0x7d5908(_0x316360);
                        }
                    },
                    'onerror': function (_0x3b65ee) {
                        const _0x415968 = _0x2082f8;
                        _0x22493b(_0x415968(0x34c), _0x415968(0x406), _0x3b65ee), _0x7d5908(_0x3b65ee);
                    }
                });
            });
        }
        function _0x247268(_0x1b0dba, _0x262bf6) {
            const _0x50dc4e = _0x4d9e01;
            _0x262bf6 === !![] && (_0x22493b(_0x50dc4e(0x2d7), _0x50dc4e(0x427)), _0x32738f(_0x50dc4e(0x2bf))[_0x50dc4e(0x21a)](function () {
                const _0x494282 = _0x50dc4e;
                return _0x32738f(this)[_0x494282(0x39e)]('.SNKMS_IG_DW_MAIN')[_0x494282(0x2d3)] === 0x0;
            })[_0x50dc4e(0x252)]('data-snig'));
            if (_0x1b0dba == ![]) {
                const _0x161727 = 0x64;
                let _0x28ffb9 = 0x0;
                var _0x111af1 = setInterval(() => {
                    const _0x30d42c = _0x50dc4e;
                    (_0x28ffb9 > _0x161727 || _0x32738f(_0x30d42c(0x3cf))[_0x30d42c(0x2d3)] > 0x0) && (clearInterval(_0x111af1), _0x28ffb9 > _0x161727 && console['warn'](_0x30d42c(0x1ed), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x22493b(_0x30d42c(0x1ed), 'repeating\x20to\x20call\x20detection\x20createDownloadButton()'), _0x1cdf63(), _0x28ffb9++;
                }, 0x32);
            } else
                _0x1cdf63();
        }
        function _0x320d25() {
            const _0xa2d07f = _0x4d9e01;
            let _0x2fb35b = null;
            return _0x32738f(_0xa2d07f(0x26e))['each'](function () {
                const _0x180f13 = _0xa2d07f, _0x2c6502 = /"APP_ID":"([0-9]+)"/ig, _0x6e352e = _0x32738f(this)[_0x180f13(0x41f)]()[_0x180f13(0x22d)](_0x2c6502);
                _0x6e352e != null && _0x2fb35b == null && (_0x2fb35b = [..._0x32738f(this)[_0x180f13(0x41f)]()['matchAll'](_0x2c6502)]);
            }), _0x2fb35b ? _0x2fb35b['at'](0x0)['at'](-0x1) : null;
        }
        function _0x15153c(_0x2debda) {
            const _0x3fea6f = _0x4d9e01;
            _0x2debda ? (_0x32738f('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')['removeClass'](_0x3fea6f(0x2ef)), _0x32738f(_0x3fea6f(0x38c))['css'](_0x3fea6f(0x384), _0x3fea6f(0x2ba))) : (_0x32738f(_0x3fea6f(0x38c))[_0x3fea6f(0x25d)](_0x3fea6f(0x2ef)), _0x32738f(_0x3fea6f(0x38c))[_0x3fea6f(0x403)]('z-index', ''));
        }
        function _0x406363(_0x162867) {
            return new Promise((_0x3a0ac0, _0x3633dc) => {
                const _0x12f355 = a0_0x585c;
                let _0xa7ad8a = _0x12f355(0x310) + _0x162867 + '/info/';
                if (_0x162867 == null) {
                    alert(_0x12f355(0x2c8)), _0x22493b(_0x12f355(0x2c3), _0x12f355(0x406), _0x12f355(0x2c8)), _0x15153c(![]), _0x3633dc(-0x1);
                    return;
                }
                if (_0x320d25() == null) {
                    alert(_0x12f355(0x1e4)), _0x22493b(_0x12f355(0x2c3), _0x12f355(0x406), _0x12f355(0x1e4)), _0x15153c(![]), _0x3633dc(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x12f355(0x1fc),
                    'url': _0xa7ad8a,
                    'headers': {
                        'User-Agent': window[_0x12f355(0x2d5)][_0x12f355(0x41a)],
                        'Accept': _0x12f355(0x1df),
                        'X-IG-App-ID': _0x320d25()
                    },
                    'onload': function (_0x3e0b50) {
                        const _0x5daf30 = _0x12f355;
                        if (_0x3e0b50[_0x5daf30(0x242)] == _0xa7ad8a) {
                            let _0x3a8ccf = JSON['parse'](_0x3e0b50['response']);
                            _0x22493b(_0x5daf30(0x2c3), _0x3a8ccf), _0x3a0ac0(_0x3a8ccf);
                        } else {
                            let _0x295d0d = new URL(_0x3e0b50[_0x5daf30(0x242)]);
                            _0x295d0d[_0x5daf30(0x27d)][_0x5daf30(0x2fa)](_0x5daf30(0x2b5)) ? (_0x22493b(_0x5daf30(0x2c3), 'reject', _0x5daf30(0x32c)), alert(_0x5daf30(0x32c))) : (_0x22493b(_0x5daf30(0x2c3), _0x5daf30(0x406), _0x5daf30(0x40b) + _0x3e0b50[_0x5daf30(0x242)] + '\x22'), alert('Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x3e0b50[_0x5daf30(0x242)] + '\x22')), _0x15153c(![]), _0x3633dc(-0x1);
                        }
                    },
                    'onerror': function (_0x813019) {
                        const _0x518310 = _0x12f355;
                        _0x22493b('getMediaInfo()', _0x518310(0x406), _0x813019), _0x3a0ac0(_0x813019);
                    }
                });
            });
        }
        function _0x3b668b(_0x45cd37) {
            const _0x58c55f = _0x4d9e01;
            var _0xe98315 = 0x0, _0x34a59c = _0x45cd37[_0x58c55f(0x39e)](_0x58c55f(0x436));
            return (_0x34a59c == null || !_0x34a59c[_0x58c55f(0x2cf)]('_acnb')) && (_0x34a59c = _0x45cd37[_0x58c55f(0x39e)](_0x58c55f(0x1d9))['eq'](0x0)[_0x58c55f(0x3dc)]('div')), _0x34a59c[_0x58c55f(0x21a)](_0x58c55f(0x36f))[_0x58c55f(0x258)](function (_0x3bfa0d) {
                const _0x4654e7 = _0x58c55f;
                _0x32738f(this)[_0x4654e7(0x2cf)](_0x4654e7(0x31d)) && (_0xe98315 = _0x3bfa0d);
            }), _0xe98315;
        }
        function _0x49d4e0(_0x44461b) {
            const _0x42a3df = _0x4d9e01;
            _0x4861ed[_0x42a3df(0x374)] && _0x44461b['find']('video')[_0x42a3df(0x258)](function () {
                _0x32738f(this)['on']('ended', function () {
                    const _0x131b15 = a0_0x585c;
                    !_0x32738f(this)[_0x131b15(0x3d8)](_0x131b15(0x308)) && (_0x32738f(this)[_0x131b15(0x21f)](_0x131b15(0x2ff), !![]), this[_0x131b15(0x312)](), _0x22493b('(post)\x20Added\x20video\x20event\x20listener\x20#loop'));
                });
            });
            _0x4861ed[_0x42a3df(0x249)] && _0x44461b['find']('video')[_0x42a3df(0x258)](function () {
                _0x32738f(this)['on']('play\x20playing', function () {
                    const _0xd0ac4a = a0_0x585c;
                    !_0x32738f(this)['data'](_0xd0ac4a(0x293)) && (_0x32738f(this)[_0xd0ac4a(0x21f)](_0xd0ac4a(0x3fe), !![]), this[_0xd0ac4a(0x1fa)] = _0x1958dd, _0x22493b('(post)\x20Added\x20video\x20event\x20listener\x20#modify'));
                });
            });
            _0x4861ed[_0x42a3df(0x38e)] && _0x44461b[_0x42a3df(0x39e)](_0x42a3df(0x3e6))[_0x42a3df(0x258)](function () {
                const _0x20590c = _0x42a3df;
                if (!_0x32738f(this)[_0x20590c(0x3d8)](_0x20590c(0x3c3))) {
                    let _0x48b0d9 = _0x32738f(this);
                    _0x22493b('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), this['volume'] = _0x1958dd, _0x32738f(this)['on'](_0x20590c(0x1dd), function () {
                        const _0xddf6ad = _0x20590c;
                        this[_0xddf6ad(0x1fa)] = _0x1958dd;
                    }), _0x32738f(this)['on'](_0x20590c(0x3ca), function (_0x345b01) {
                        const _0x3db16c = _0x20590c;
                        _0x345b01[_0x3db16c(0x324)](), _0x48b0d9['css'](_0x3db16c(0x384), '-1'), _0x48b0d9['removeAttr'](_0x3db16c(0x3c3));
                    }), _0x32738f(this)['parent']()['find'](_0x20590c(0x2b0))[_0x20590c(0x42d)]()['on'](_0x20590c(0x3ca), function (_0x426ceb) {
                        const _0x213b95 = _0x20590c;
                        _0x426ceb[_0x213b95(0x324)](), _0x48b0d9[_0x213b95(0x403)](_0x213b95(0x384), '2'), _0x48b0d9[_0x213b95(0x21f)](_0x213b95(0x3c3), !![]);
                    }), _0x32738f(this)['on']('volumechange', function () {
                        const _0x150635 = _0x20590c;
                        let _0x1807f9 = _0x32738f(this)['parent']()['find'](_0x150635(0x2b0))[_0x150635(0x39e)](_0x150635(0x3a3))[_0x150635(0x21a)](function (_0x25c05c) {
                            const _0x4d1089 = _0x150635;
                            return _0x32738f(this)[_0x4d1089(0x3a6)]() <= 0x40 && _0x32738f(this)[_0x4d1089(0x42b)]() <= 0x40 && _0x32738f(this)[_0x4d1089(0x39e)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')[_0x4d1089(0x2d3)] > 0x0;
                        });
                        var _0x2c6b9d = _0x1807f9[_0x150635(0x39e)](_0x150635(0x40e))[_0x150635(0x2d3)] === 0x0;
                        this[_0x150635(0x3a7)] != _0x2c6b9d && (this['volume'] = _0x1958dd, _0x1807f9?.['click']()), _0x32738f(this)[_0x150635(0x21f)]('data-completed') && (_0x1958dd = this['volume'], GM_setValue(_0x150635(0x32e), this['volume'])), this[_0x150635(0x1fa)] == _0x1958dd && _0x32738f(this)[_0x150635(0x21f)](_0x150635(0x303), !![]);
                    }), _0x32738f(this)[_0x20590c(0x403)]('position', _0x20590c(0x3f0)), _0x32738f(this)[_0x20590c(0x403)](_0x20590c(0x384), '2'), _0x32738f(this)['attr'](_0x20590c(0x418), !![]), _0x32738f(this)['attr'](_0x20590c(0x3c3), !![]);
                }
            });
            var _0x1460a6 = _0x44461b[_0x42a3df(0x39e)]('video'), _0x23c618 = _0x44461b[_0x42a3df(0x39e)](_0x42a3df(0x2b0))[_0x42a3df(0x42d)]();
            _0x1e46cf(_0x1460a6, _0x23c618, _0x42a3df(0x318), _0x42a3df(0x3ac));
        }
        ;
        function _0x1cdf63() {
            const _0x2e9346 = _0x4d9e01;
            _0x32738f('article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr')[_0x2e9346(0x30a)](function (_0x1606b4) {
                const _0x44ad87 = _0x2e9346;
                return _0x32738f(this)['is'](_0x44ad87(0x2d9)) ? _0x32738f(this)[_0x44ad87(0x3a5)]()[_0x44ad87(0x3a5)]()[_0x44ad87(0x3a5)]()[_0x44ad87(0x3a5)]()[0x0] : this;
            })[_0x2e9346(0x21a)](function () {
                const _0x9fefcc = _0x2e9346;
                return _0x32738f(this)[_0x9fefcc(0x42b)]() > 0x0 && _0x32738f(this)[_0x9fefcc(0x3a6)]() > 0x0;
            })[_0x2e9346(0x258)](function (_0x2ba87f) {
                const _0x1fd896 = _0x2e9346;
                if (!_0x32738f(this)[_0x1fd896(0x21f)]('data-snig') && !_0x32738f(this)[_0x1fd896(0x2cf)](_0x1fd896(0x390)) && !_0x32738f(this)['children'](_0x1fd896(0x2bc))?.['hasClass'](_0x1fd896(0x390)) && _0x32738f(this)[_0x1fd896(0x2d1)](_0x1fd896(0x28b))[_0x1fd896(0x2d3)] === 0x0) {
                    _0x22493b(_0x1fd896(0x2ae), _0x32738f(this));
                    var _0x9e9683 = 0xf, _0x565cdd = 0xf, _0x3524b4 = _0x32738f(this), _0x3d7ccb = this[_0x1fd896(0x3d3)];
                    if (_0x3d7ccb === 'DIV' && _0x2ba87f != 0x0)
                        return;
                    const _0x4a4b85 = _0x3524b4[_0x1fd896(0x3dc)](_0x1fd896(0x256))[_0x1fd896(0x3dc)](_0x1fd896(0x256));
                    if (_0x4a4b85['length'] === 0x0)
                        return;
                    _0x22493b(_0x1fd896(0x22f), _0x4a4b85);
                    if (_0x3524b4['find']('._acay')[_0x1fd896(0x2d3)] > 0x0) {
                        _0x3524b4[_0x1fd896(0x39e)](_0x1fd896(0x264))['length'] > 0x0 && _0x3524b4[_0x1fd896(0x39e)](_0x1fd896(0x264))[_0x1fd896(0x403)](_0x1fd896(0x327), _0x1fd896(0x3ff));
                        const _0x5b2c13 = _0x3524b4[_0x1fd896(0x39e)]('._acay')['first']()[_0x1fd896(0x3a5)]()[0x0];
                        var _0xc4279 = new MutationObserver(function (_0x45467e, _0x510863) {
                            const _0x311924 = _0x1fd896;
                            _0x3524b4['find'](_0x311924(0x264))[_0x311924(0x403)]('top', _0x311924(0x3ff));
                        });
                        _0xc4279['observe'](_0x5b2c13, { 'childList': !![] });
                    }
                    const _0x306949 = _0x1fd896(0x346) + _0x5b0efa('DW') + _0x1fd896(0x2e1) + _0x9e9683 + _0x1fd896(0x2da) + _0x565cdd + _0x1fd896(0x395) + _0x3c5d71[_0x1fd896(0x2f2)] + _0x1fd896(0x35d), _0x4601c8 = '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x5b0efa(_0x1fd896(0x333)) + _0x1fd896(0x40a) + (_0x9e9683 + 0x23) + _0x1fd896(0x2da) + _0x565cdd + _0x1fd896(0x395) + _0x3c5d71['NEW_TAB'] + _0x1fd896(0x35d), _0x3273e2 = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x5b0efa(_0x1fd896(0x3dd)) + _0x1fd896(0x34a) + (_0x9e9683 + 0x46) + _0x1fd896(0x2da) + _0x565cdd + _0x1fd896(0x395) + _0x3c5d71[_0x1fd896(0x3eb)] + _0x1fd896(0x35d);
                    _0x4a4b85['eq'](_0x3d7ccb === _0x1fd896(0x2b7) ? 0x0 : _0x4a4b85[_0x1fd896(0x2d3)] - 0x2)[_0x1fd896(0x2e7)](_0x306949), _0x4a4b85['eq'](_0x3d7ccb === 'DIV' ? 0x0 : _0x4a4b85[_0x1fd896(0x2d3)] - 0x2)['append'](_0x4601c8), setTimeout(() => {
                        const _0x95be60 = _0x1fd896;
                        if (_0x4a4b85['eq'](_0x3d7ccb === 'DIV' ? 0x0 : _0x4a4b85[_0x95be60(0x2d3)] - 0x2)['find'](_0x95be60(0x2e0))[_0x95be60(0x2d3)] === 0x0)
                            _0x4a4b85['find'](_0x95be60(0x3e6))['length'] > 0x0 && _0x4a4b85['eq'](_0x3d7ccb === _0x95be60(0x2b7) ? 0x0 : _0x4a4b85['length'] - 0x2)[_0x95be60(0x2e7)](_0x3273e2);
                        else {
                            const _0xed8793 = (_0x409c7d, _0x56c105) => {
                                    const _0x419ab7 = _0x95be60;
                                    _0x409c7d[_0x419ab7(0x2d6)](_0x217e75 => {
                                        const _0x13b42f = _0x419ab7;
                                        if (_0x217e75[_0x13b42f(0x2cd)]) {
                                            var _0x3ff09d = _0x32738f(_0x217e75[_0x13b42f(0x431)]);
                                            _0x3ff09d['find'](_0x13b42f(0x3e6))[_0x13b42f(0x2d3)] > 0x0 ? (_0x4a4b85['eq'](_0x3d7ccb === _0x13b42f(0x2b7) ? 0x0 : _0x4a4b85[_0x13b42f(0x2d3)] - 0x2)['append'](_0x3273e2), _0x49d4e0(_0x3524b4)) : _0x4a4b85['find']('.SNKMS_IG_THUMBNAIL_MAIN')?.[_0x13b42f(0x38a)]();
                                        }
                                    });
                                }, _0x1439a0 = new IntersectionObserver(_0xed8793, {
                                    'root': _0x3524b4['find'](_0x95be60(0x3b6))['first']()[_0x95be60(0x3a5)]()['parent']()['parent']()[0x0],
                                    'rootMargin': _0x95be60(0x349),
                                    'threshold': 0.1
                                }), _0x191eb5 = new MutationObserver(function (_0x5c1924, _0x2b0b2) {
                                    const _0x197f1b = _0x95be60;
                                    var _0x265259 = _0x5c1924['at'](0x0)?.[_0x197f1b(0x431)];
                                    _0x32738f(_0x265259)[_0x197f1b(0x39e)](_0x197f1b(0x202))[_0x197f1b(0x258)](function () {
                                        const _0x2f7e74 = _0x197f1b;
                                        _0x1439a0[_0x2f7e74(0x2d8)](this);
                                    });
                                });
                            _0x3524b4['find'](_0x95be60(0x2e0))[_0x95be60(0x258)](function () {
                                const _0x319a9c = _0x95be60;
                                _0x1439a0[_0x319a9c(0x2d8)](this);
                            });
                            const _0x459125 = _0x4a4b85['eq'](_0x3d7ccb === 'DIV' ? 0x0 : _0x4a4b85[_0x95be60(0x2d3)] - 0x2)[_0x95be60(0x39e)](_0x95be60(0x2e0))?.[_0x95be60(0x3a5)]()[0x0], _0x7a5aac = _0x4a4b85['eq'](_0x3d7ccb === _0x95be60(0x2b7) ? 0x0 : _0x4a4b85['length'] - 0x2)['find'](_0x95be60(0x2e0))?.[_0x95be60(0x3a5)]()[_0x95be60(0x3a5)]()[0x0];
                            _0x459125 && _0x191eb5[_0x95be60(0x2d8)](_0x459125, { 'childList': !![] }), _0x7a5aac && _0x191eb5[_0x95be60(0x2d8)](_0x7a5aac, { 'attributes': !![] });
                        }
                    }, 0x32), _0x4a4b85[_0x1fd896(0x403)](_0x1fd896(0x31f), 'relative'), _0x49d4e0(_0x3524b4), _0x32738f(this)['on']('click', _0x1fd896(0x217), function (_0x2a55bb) {
                        const _0x3c25f5 = _0x1fd896;
                        _0x15153c(!![]), _0x4518f6 = _0x32738f(this)['parent']()[_0x3c25f5(0x3a5)]()['parent']()[_0x3c25f5(0x21f)](_0x3c25f5(0x377)), _0x182e66 = location[_0x3c25f5(0x27d)]['replace'](/\/$/, '')[_0x3c25f5(0x230)]('/')['at'](-0x1) || _0x32738f(this)[_0x3c25f5(0x3a5)]()[_0x3c25f5(0x3a5)]()[_0x3c25f5(0x3a5)]()[_0x3c25f5(0x39e)]('a[href^=\x22/p/\x22]')[_0x3c25f5(0x42d)]()[_0x3c25f5(0x21f)]('href')[_0x3c25f5(0x230)]('/')['at'](0x2) || _0x32738f(this)['parent']()[_0x3c25f5(0x3a5)]()[_0x3c25f5(0x3dc)]('div:last-child')[_0x3c25f5(0x3dc)](_0x3c25f5(0x256))['children'](_0x3c25f5(0x2ce))[_0x3c25f5(0x39e)](_0x3c25f5(0x24e))[_0x3c25f5(0x3d5)]()[_0x3c25f5(0x21f)](_0x3c25f5(0x1e6))[_0x3c25f5(0x230)]('/')['at'](0x2);
                        var _0x558330 = _0x32738f(this)[_0x3c25f5(0x3a5)]()['parent']()[_0x3c25f5(0x3a5)](), _0x48fe41 = _0x3b668b(_0x558330);
                        _0x30f5d8(!![], ![]), _0xd93628(_0x182e66, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')['then'](() => {
                            let _0xf3fc91 = setInterval(() => {
                                const _0x5bb5f7 = a0_0x585c;
                                if (_0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x5bb5f7(0x2d3)] > 0x0) {
                                    clearInterval(_0xf3fc91);
                                    var _0x25b906 = _0x32738f(_0x5bb5f7(0x1d1) + (_0x48fe41 + 0x1) + '\x22]')?.['parent']()[_0x5bb5f7(0x39e)]('.videoThumbnail')?.[_0x5bb5f7(0x42d)]();
                                    _0x25b906 != null && _0x25b906[_0x5bb5f7(0x2d3)] > 0x0 ? _0x25b906[_0x5bb5f7(0x269)]() : alert('Can\x20not\x20find\x20thumbnail\x20url.'), _0x15153c(![]), _0x32738f(_0x5bb5f7(0x290))[_0x5bb5f7(0x38a)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x32738f(this)['on'](_0x1fd896(0x269), _0x1fd896(0x3ad), function (_0x35741a) {
                        const _0x144e4e = _0x1fd896;
                        _0x15153c(!![]), _0x4518f6 = _0x32738f(this)[_0x144e4e(0x3a5)]()['parent']()[_0x144e4e(0x3a5)]()[_0x144e4e(0x21f)](_0x144e4e(0x377)), _0x182e66 = location[_0x144e4e(0x27d)]['replace'](/\/$/, '')[_0x144e4e(0x230)]('/')['at'](-0x1) || _0x32738f(this)['parent']()[_0x144e4e(0x3a5)]()[_0x144e4e(0x3a5)]()[_0x144e4e(0x39e)](_0x144e4e(0x24e))[_0x144e4e(0x42d)]()[_0x144e4e(0x21f)](_0x144e4e(0x1e6))['split']('/')['at'](0x2) || _0x32738f(this)['parent']()[_0x144e4e(0x3a5)]()[_0x144e4e(0x3dc)]('div:last-child')[_0x144e4e(0x3dc)]('div')[_0x144e4e(0x3dc)](_0x144e4e(0x2ce))['find'](_0x144e4e(0x24e))[_0x144e4e(0x3d5)]()[_0x144e4e(0x21f)](_0x144e4e(0x1e6))[_0x144e4e(0x230)]('/')['at'](0x2);
                        var _0x410f14 = _0x32738f(this)['parent']()[_0x144e4e(0x3a5)]()[_0x144e4e(0x3a5)](), _0x4472b6 = _0x3b668b(_0x410f14);
                        _0x30f5d8(!![], ![]), _0xd93628(_0x182e66, _0x144e4e(0x360), '')[_0x144e4e(0x305)](() => {
                            let _0x5773e6 = setInterval(() => {
                                const _0x3a8874 = a0_0x585c;
                                if (_0x32738f(_0x3a8874(0x411))[_0x3a8874(0x2d3)] > 0x0) {
                                    clearInterval(_0x5773e6);
                                    var _0x50787a = _0x32738f(_0x3a8874(0x1d1) + (_0x4472b6 + 0x1) + '\x22]');
                                    if (_0x4861ed[_0x3a8874(0x3bc)] && _0x4861ed[_0x3a8874(0x35e)])
                                        _0x33cac2(_0x50787a[_0x3a8874(0x42d)]()[0x0], !![]);
                                    else {
                                        let _0x15d696 = _0x50787a?.[_0x3a8874(0x21f)](_0x3a8874(0x353));
                                        if (_0x15d696) {
                                            var _0x493282 = new URL(_0x15d696);
                                            _0x493282['host'] = _0x3a8874(0x394), _0x326333(_0x493282[_0x3a8874(0x1e6)]);
                                        } else
                                            alert(_0x3a8874(0x208));
                                    }
                                    _0x15153c(![]), _0x32738f(_0x3a8874(0x290))[_0x3a8874(0x38a)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x32738f(this)['on']('click', _0x1fd896(0x3fc), async function (_0x2d2e9c) {
                        const _0xfd2cfe = _0x1fd896;
                        _0x4518f6 = _0x32738f(this)['parent']()['parent']()[_0xfd2cfe(0x3a5)]()['attr'](_0xfd2cfe(0x377)), _0x182e66 = location['pathname']['replace'](/\/$/, '')['split']('/')['at'](-0x1) || _0x32738f(this)['parent']()[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x39e)]('a[href^=\x22/p/\x22]')[_0xfd2cfe(0x42d)]()[_0xfd2cfe(0x21f)]('href')[_0xfd2cfe(0x230)]('/')['at'](0x2) || _0x32738f(this)[_0xfd2cfe(0x3a5)]()['parent']()['children'](_0xfd2cfe(0x2ce))[_0xfd2cfe(0x3dc)]('div')['children'](_0xfd2cfe(0x2ce))['find'](_0xfd2cfe(0x24e))[_0xfd2cfe(0x3d5)]()[_0xfd2cfe(0x21f)](_0xfd2cfe(0x1e6))[_0xfd2cfe(0x230)]('/')['at'](0x2), _0x30f5d8(_0x4861ed['DIRECT_DOWNLOAD_ALL'], !![]), _0x32738f('#article-id')[_0xfd2cfe(0x24f)](_0xfd2cfe(0x27e) + _0x182e66 + '\x22>' + _0x182e66 + _0xfd2cfe(0x42c));
                        if (_0x4861ed[_0xfd2cfe(0x426)]) {
                            _0x15153c(!![]), _0x411977(!![]);
                            var _0x138e5f = _0x3b668b(_0x32738f(this)[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x3a5)]());
                            _0xd93628(_0x182e66, _0xfd2cfe(0x360), '')[_0xfd2cfe(0x305)](() => {
                                let _0x130c5e = setInterval(() => {
                                    const _0x4c544c = a0_0x585c;
                                    if (_0x32738f(_0x4c544c(0x411))[_0x4c544c(0x2d3)] > 0x0) {
                                        clearInterval(_0x130c5e);
                                        var _0x2c10c2 = _0x32738f(_0x4c544c(0x1d1) + (_0x138e5f + 0x1) + '\x22]')?.[_0x4c544c(0x21f)](_0x4c544c(0x353));
                                        _0x2c10c2 ? (_0x15153c(![]), _0x32738f(_0x4c544c(0x1d1) + (_0x138e5f + 0x1) + '\x22]')?.[_0x4c544c(0x269)]()) : alert(_0x4c544c(0x25f)), _0x32738f(_0x4c544c(0x290))[_0x4c544c(0x38a)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x4861ed['DIRECT_DOWNLOAD_ALL']) {
                            var _0x1c28c0 = 0x0, _0x17e906 = _0x32738f(this)[_0xfd2cfe(0x3a5)]()['parent']()[_0xfd2cfe(0x39e)]('._acay\x20._acaz')[_0xfd2cfe(0x2d3)], _0x462c85 = window[_0xfd2cfe(0x33a)][_0xfd2cfe(0x27d)], _0x3f0cf3 = '/' + _0x462c85[_0xfd2cfe(0x230)]('/')[0x1] + '/' + _0x462c85['split']('/')[0x2] + '/', _0x16fd8d = _0x4861ed[_0xfd2cfe(0x1d6)], _0x127dba = new Date(_0x32738f(this)[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x39e)](_0xfd2cfe(0x35c))[_0xfd2cfe(0x42d)]()[_0xfd2cfe(0x21f)](_0xfd2cfe(0x1c9)))[_0xfd2cfe(0x2be)]();
                            if (_0x17e906)
                                _0x32738f(this)[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x39e)](_0xfd2cfe(0x37c))[_0xfd2cfe(0x258)](function () {
                                    const _0x1e05b6 = _0xfd2cfe;
                                    let _0x6cb8d7 = _0x32738f(this)[_0x1e05b6(0x3a5)]()[_0x1e05b6(0x3a5)]()[_0x1e05b6(0x39e)]('video');
                                    _0x6cb8d7 && _0x6cb8d7[_0x1e05b6(0x21f)]('src') && (_0x16fd8d = !![]);
                                }), _0x16fd8d || _0x4861ed[_0xfd2cfe(0x3bc)] ? _0xd93628(_0x182e66, _0xfd2cfe(0x360), _0x5b0efa('LOAD_BLOB_MULTIPLE')) : (_0x32738f(this)[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x39e)](_0xfd2cfe(0x37c))['each'](function () {
                                    const _0x2646f1 = _0xfd2cfe;
                                    _0x1c28c0++;
                                    let _0xe116d9 = _0x32738f(this)['find'](_0x2646f1(0x3e6)), _0x1b8e77 = _0x32738f(this)['find'](_0x2646f1(0x3c1)), _0x5583f3 = _0x1b8e77[_0x2646f1(0x21f)](_0x2646f1(0x22a)) ? _0x1b8e77[_0x2646f1(0x21f)](_0x2646f1(0x22a))['split']('\x20')[0x0] : _0x1b8e77['attr'](_0x2646f1(0x30f));
                                    _0xe116d9 && _0xe116d9[_0x2646f1(0x21f)](_0x2646f1(0x30f)) && (_0x16fd8d = !![]), _0x1b8e77 && _0x5583f3 && _0x32738f(_0x2646f1(0x360))[_0x2646f1(0x2e7)]('<a\x20datetime=\x22' + _0x127dba + _0x2646f1(0x227) + _0x182e66 + _0x2646f1(0x338) + _0x1c28c0 + _0x2646f1(0x424) + _0x5583f3 + _0x2646f1(0x279) + _0x5583f3 + _0x2646f1(0x2a0) + _0x5b0efa(_0x2646f1(0x26b)) + _0x2646f1(0x3aa) + _0x1c28c0 + _0x2646f1(0x3ef));
                                }), _0x16fd8d && _0xd93628(_0x182e66, _0xfd2cfe(0x360), _0x5b0efa(_0xfd2cfe(0x343))));
                            else {
                                if (_0x4861ed[_0xfd2cfe(0x3bc)])
                                    _0xd93628(_0x182e66, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x5b0efa(_0xfd2cfe(0x1e0)));
                                else {
                                    _0x1c28c0++;
                                    let _0x259b59 = _0x32738f(this)[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x39e)](_0xfd2cfe(0x3e6)), _0x13080b = _0x32738f(this)[_0xfd2cfe(0x3a5)]()[_0xfd2cfe(0x3a5)]()['find'](_0xfd2cfe(0x3c1)), _0x57e7cf = _0x13080b[_0xfd2cfe(0x21f)](_0xfd2cfe(0x22a)) ? _0x13080b['attr'](_0xfd2cfe(0x22a))['split']('\x20')[0x0] : _0x13080b[_0xfd2cfe(0x21f)]('src');
                                    _0x259b59 && _0x259b59['attr'](_0xfd2cfe(0x30f)) && _0xd93628(_0x182e66, _0xfd2cfe(0x360), _0x5b0efa(_0xfd2cfe(0x3ee))), _0x13080b && _0x57e7cf && _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')[_0xfd2cfe(0x2e7)](_0xfd2cfe(0x375) + _0x127dba + _0xfd2cfe(0x227) + _0x182e66 + _0xfd2cfe(0x338) + _0x1c28c0 + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x57e7cf + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x57e7cf + _0xfd2cfe(0x2a0) + _0x5b0efa(_0xfd2cfe(0x26b)) + '</span>\x20' + _0x1c28c0 + _0xfd2cfe(0x3ef));
                                }
                            }
                        }
                        _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')['each'](function () {
                            const _0x38f089 = _0xfd2cfe;
                            _0x32738f(this)[_0x38f089(0x273)]('<div></div>'), _0x32738f(this)['before']('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x32738f(this)[_0x38f089(0x219)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x5b0efa(_0x38f089(0x333)) + _0x38f089(0x3e8) + _0x3c5d71[_0x38f089(0x333)] + _0x38f089(0x35d)), _0x32738f(this)[_0x38f089(0x21f)]('data-name') == _0x38f089(0x3e6) && _0x32738f(this)[_0x38f089(0x219)](_0x38f089(0x2c6) + _0x5b0efa(_0x38f089(0x3dd)) + _0x38f089(0x365) + _0x3c5d71[_0x38f089(0x3eb)] + _0x38f089(0x35d));
                        }), _0x4861ed[_0xfd2cfe(0x28a)] && _0xd93628(_0x182e66, _0xfd2cfe(0x360), _0x5b0efa(_0xfd2cfe(0x1e0)))['then'](() => {
                            let _0x22f075 = setInterval(() => {
                                const _0x53b408 = a0_0x585c;
                                _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x53b408(0x2d3)] > 0x0 && (clearInterval(_0x22f075), _0x32738f(_0x53b408(0x411))['each'](function () {
                                    const _0x80fffe = _0x53b408;
                                    _0x32738f(this)[_0x80fffe(0x269)]();
                                }), _0x32738f(_0x53b408(0x290))[_0x53b408(0x38a)]());
                            }, 0xfa);
                        });
                    });
                    var _0x94df7c = _0x32738f(this)['find']('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x1fd896(0x42d)]()['text']() || _0x32738f(this)['find']('a[href^=\x22/\x22]')[_0x1fd896(0x21a)](function () {
                        const _0x44bf24 = _0x1fd896;
                        return _0x32738f(this)?.['text']()?.[_0x44bf24(0x2d3)] > 0x0;
                    })[_0x1fd896(0x42d)]()[_0x1fd896(0x41f)]();
                    _0x32738f(this)[_0x1fd896(0x21f)](_0x1fd896(0x274), _0x1fd896(0x331)), _0x32738f(this)[_0x1fd896(0x21f)]('data-username', _0x94df7c);
                }
            });
        }
        function _0xd93628(_0x2d7d9b, _0x43c883, _0xb5e052) {
            return new Promise(async _0x2d17d0 => {
                const _0x32ea8c = a0_0x585c;
                _0x32738f(_0x43c883 + '\x20a')[_0x32ea8c(0x38a)](), _0x32738f(_0x43c883)['append']('<p\x20id=\x22_SNLOAD\x22>' + _0xb5e052 + _0x32ea8c(0x2f0));
                let _0x37065e = await _0x455909(_0x2d7d9b);
                if (_0x37065e[_0x32ea8c(0x428)] === 'query_hash') {
                    let _0xbe5f79 = 0x1, _0xd94362 = _0x37065e[_0x32ea8c(0x3d8)], _0x5aed69 = _0xd94362[_0x32ea8c(0x368)];
                    _0x5aed69['__typename'] == _0x32ea8c(0x20c) && _0x5aed69[_0x32ea8c(0x1ec)] && (_0x32738f(_0x43c883)[_0x32ea8c(0x2e7)](_0x32ea8c(0x1ee) + _0x5aed69['id'] + _0x32ea8c(0x2b6) + _0x5aed69['taken_at_timestamp'] + _0x32ea8c(0x42a) + _0x5aed69['shortcode'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x5aed69[_0x32ea8c(0x3a0)]['username'] + _0x32ea8c(0x347) + _0xbe5f79 + _0x32ea8c(0x424) + _0x5aed69[_0x32ea8c(0x1ec)] + _0x32ea8c(0x279) + _0x5aed69['display_resources'][0x1][_0x32ea8c(0x30f)] + _0x32ea8c(0x363) + _0x5b0efa(_0x32ea8c(0x43a)) + '</span>\x20' + _0xbe5f79 + '\x20-</a>'), _0xbe5f79++);
                    _0x5aed69['__typename'] == _0x32ea8c(0x37e) && (_0x32738f(_0x43c883)['append'](_0x32ea8c(0x1ee) + _0x5aed69['id'] + _0x32ea8c(0x2b6) + _0x5aed69[_0x32ea8c(0x3ea)] + _0x32ea8c(0x42a) + _0x5aed69['shortcode'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x5aed69[_0x32ea8c(0x3a0)][_0x32ea8c(0x3be)] + _0x32ea8c(0x347) + _0xbe5f79 + _0x32ea8c(0x424) + _0x5aed69[_0x32ea8c(0x41b)][_0x5aed69[_0x32ea8c(0x41b)][_0x32ea8c(0x2d3)] - 0x1]['src'] + _0x32ea8c(0x279) + _0x5aed69[_0x32ea8c(0x41b)][0x1][_0x32ea8c(0x30f)] + _0x32ea8c(0x2a0) + _0x5b0efa(_0x32ea8c(0x26b)) + _0x32ea8c(0x3aa) + _0xbe5f79 + _0x32ea8c(0x3ef)), _0xbe5f79++);
                    if (_0x5aed69['__typename'] == 'GraphSidecar' && _0x5aed69['edge_sidecar_to_children'])
                        for (let _0x170ad1 of _0x5aed69[_0x32ea8c(0x229)][_0x32ea8c(0x2bb)]) {
                            _0x170ad1['node'][_0x32ea8c(0x342)] == 'GraphVideo' && _0x32738f(_0x43c883)[_0x32ea8c(0x2e7)](_0x32ea8c(0x1ee) + _0x170ad1[_0x32ea8c(0x429)]['id'] + _0x32ea8c(0x2b6) + _0x5aed69[_0x32ea8c(0x3ea)] + _0x32ea8c(0x42a) + _0x5aed69['shortcode'] + _0x32ea8c(0x3d1) + _0x5aed69[_0x32ea8c(0x3a0)][_0x32ea8c(0x3be)] + '\x22\x20data-globalIndex=\x22' + _0xbe5f79 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x170ad1[_0x32ea8c(0x429)]['video_url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x170ad1['node'][_0x32ea8c(0x41b)][0x1][_0x32ea8c(0x30f)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x5b0efa(_0x32ea8c(0x43a)) + _0x32ea8c(0x3aa) + _0xbe5f79 + _0x32ea8c(0x3ef)), _0x170ad1[_0x32ea8c(0x429)][_0x32ea8c(0x342)] == _0x32ea8c(0x37e) && _0x32738f(_0x43c883)[_0x32ea8c(0x2e7)](_0x32ea8c(0x1ee) + _0x170ad1['node']['id'] + _0x32ea8c(0x2b6) + _0x5aed69[_0x32ea8c(0x3ea)] + _0x32ea8c(0x42a) + _0x5aed69[_0x32ea8c(0x3c2)] + _0x32ea8c(0x27b) + _0x5aed69[_0x32ea8c(0x3a0)][_0x32ea8c(0x3be)] + _0x32ea8c(0x347) + _0xbe5f79 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x170ad1[_0x32ea8c(0x429)][_0x32ea8c(0x41b)][_0x170ad1[_0x32ea8c(0x429)][_0x32ea8c(0x41b)]['length'] - 0x1][_0x32ea8c(0x30f)] + _0x32ea8c(0x279) + _0x170ad1[_0x32ea8c(0x429)][_0x32ea8c(0x41b)][0x1]['src'] + _0x32ea8c(0x2a0) + _0x5b0efa('IMG') + _0x32ea8c(0x3aa) + _0xbe5f79 + _0x32ea8c(0x3ef)), _0xbe5f79++;
                        }
                } else {
                    let _0xbdb97a = _0x37065e['data'];
                    if (_0xbdb97a['carousel_media'])
                        _0x22493b(_0x32ea8c(0x304)), _0xbdb97a[_0x32ea8c(0x304)]['forEach']((_0xac3c0c, _0x50ea21) => {
                            const _0x3c3376 = _0x32ea8c;
                            let _0x1c8d76 = _0x50ea21 + 0x1;
                            _0xac3c0c[_0x3c3376(0x319)] == null ? (_0xac3c0c[_0x3c3376(0x322)][_0x3c3376(0x34b)]['sort'](function (_0x14ffea, _0x4a9589) {
                                const _0x1251a1 = _0x3c3376;
                                if (_0x14ffea[_0x1251a1(0x3a6)] < _0x4a9589[_0x1251a1(0x3a6)])
                                    return 0x1;
                                if (_0x14ffea['width'] > _0x4a9589['width'])
                                    return -0x1;
                                return 0x0;
                            }), _0x32738f(_0x43c883)[_0x3c3376(0x2e7)]('<a\x20media-id=\x22' + _0xac3c0c['pk'] + _0x3c3376(0x2b6) + _0xac3c0c[_0x3c3376(0x3bb)] + _0x3c3376(0x42a) + _0xbdb97a[_0x3c3376(0x25c)] + _0x3c3376(0x27b) + _0xbdb97a[_0x3c3376(0x3a0)][_0x3c3376(0x3be)] + _0x3c3376(0x347) + _0x1c8d76 + _0x3c3376(0x424) + _0xac3c0c['image_versions2'][_0x3c3376(0x34b)][0x0][_0x3c3376(0x3b4)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xac3c0c['image_versions2']['candidates'][0x0][_0x3c3376(0x3b4)] + _0x3c3376(0x2a0) + _0x5b0efa(_0x3c3376(0x26b)) + _0x3c3376(0x3aa) + _0x1c8d76 + _0x3c3376(0x3ef))) : _0x32738f(_0x43c883)[_0x3c3376(0x2e7)]('<a\x20media-id=\x22' + _0xac3c0c['pk'] + _0x3c3376(0x2b6) + _0xac3c0c[_0x3c3376(0x3bb)] + _0x3c3376(0x42a) + _0xbdb97a[_0x3c3376(0x25c)] + _0x3c3376(0x3d1) + _0xbdb97a[_0x3c3376(0x3a0)]['username'] + _0x3c3376(0x347) + _0x1c8d76 + _0x3c3376(0x424) + _0xac3c0c[_0x3c3376(0x319)][0x0][_0x3c3376(0x3b4)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xac3c0c[_0x3c3376(0x322)]['candidates'][0x0][_0x3c3376(0x3b4)] + _0x3c3376(0x363) + _0x5b0efa(_0x3c3376(0x43a)) + _0x3c3376(0x3aa) + _0x1c8d76 + '\x20-</a>');
                        });
                    else {
                        let _0x44d625 = 0x1;
                        _0xbdb97a[_0x32ea8c(0x319)] == null ? (_0xbdb97a[_0x32ea8c(0x322)][_0x32ea8c(0x34b)][_0x32ea8c(0x2d4)](function (_0x5d5608, _0x13c18e) {
                            const _0x447dbc = _0x32ea8c;
                            if (_0x5d5608[_0x447dbc(0x3a6)] < _0x13c18e['width'])
                                return 0x1;
                            if (_0x5d5608[_0x447dbc(0x3a6)] > _0x13c18e['width'])
                                return -0x1;
                            return 0x0;
                        }), _0x32738f(_0x43c883)[_0x32ea8c(0x2e7)](_0x32ea8c(0x1ee) + _0xbdb97a['pk'] + '\x22\x20datetime=\x22' + _0xbdb97a[_0x32ea8c(0x3bb)] + _0x32ea8c(0x42a) + _0xbdb97a[_0x32ea8c(0x25c)] + _0x32ea8c(0x27b) + _0xbdb97a[_0x32ea8c(0x3a0)][_0x32ea8c(0x3be)] + _0x32ea8c(0x347) + _0x44d625 + _0x32ea8c(0x424) + _0xbdb97a[_0x32ea8c(0x322)][_0x32ea8c(0x34b)][0x0][_0x32ea8c(0x3b4)] + _0x32ea8c(0x279) + _0xbdb97a[_0x32ea8c(0x322)][_0x32ea8c(0x34b)][0x0]['url'] + _0x32ea8c(0x2a0) + _0x5b0efa('IMG') + '</span>\x20' + _0x44d625 + _0x32ea8c(0x3ef))) : _0x32738f(_0x43c883)[_0x32ea8c(0x2e7)](_0x32ea8c(0x1ee) + _0xbdb97a['pk'] + '\x22\x20datetime=\x22' + _0xbdb97a[_0x32ea8c(0x3bb)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0xbdb97a[_0x32ea8c(0x25c)] + _0x32ea8c(0x3d1) + _0xbdb97a[_0x32ea8c(0x3a0)][_0x32ea8c(0x3be)] + _0x32ea8c(0x347) + _0x44d625 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0xbdb97a[_0x32ea8c(0x319)][0x0][_0x32ea8c(0x3b4)] + _0x32ea8c(0x279) + _0xbdb97a[_0x32ea8c(0x322)][_0x32ea8c(0x34b)][0x0][_0x32ea8c(0x3b4)] + _0x32ea8c(0x363) + _0x5b0efa(_0x32ea8c(0x43a)) + _0x32ea8c(0x3aa) + _0x44d625 + _0x32ea8c(0x3ef));
                    }
                }
                _0x32738f(_0x32ea8c(0x359))[_0x32ea8c(0x38a)](), _0x32738f(_0x32ea8c(0x411))[_0x32ea8c(0x258)](function () {
                    const _0x219268 = _0x32ea8c;
                    _0x32738f(this)['wrap'](_0x219268(0x300)), _0x32738f(this)[_0x219268(0x21c)](_0x219268(0x401)), _0x32738f(this)[_0x219268(0x219)](_0x219268(0x382) + _0x5b0efa(_0x219268(0x333)) + _0x219268(0x3e8) + _0x3c5d71[_0x219268(0x333)] + _0x219268(0x35d)), _0x32738f(this)[_0x219268(0x21f)](_0x219268(0x27f)) == _0x219268(0x3e6) && _0x32738f(this)['after'](_0x219268(0x2c6) + _0x5b0efa('THUMBNAIL_INTRO') + _0x219268(0x365) + _0x3c5d71[_0x219268(0x3eb)] + _0x219268(0x35d));
                }), _0x2d17d0(!![]);
            });
        }
        function _0x30f5d8(_0x1d078e, _0x595c11) {
            const _0x317e2f = _0x4d9e01;
            let _0x2e7d3b = _0x1d078e ? _0x317e2f(0x2db) : '';
            _0x32738f(_0x317e2f(0x2c4))[_0x317e2f(0x2e7)](_0x317e2f(0x3e9) + _0x2e7d3b + _0x317e2f(0x372)), _0x32738f(_0x317e2f(0x3b5))[_0x317e2f(0x2e7)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x5b0efa(_0x317e2f(0x311)) + _0x317e2f(0x2cb) + _0x3c5d71['CLOSE'] + _0x317e2f(0x33d)), _0x595c11 && (_0x32738f(_0x317e2f(0x3b5))[_0x317e2f(0x2e7)](_0x317e2f(0x2c9)), _0x32738f(_0x317e2f(0x2c1))[_0x317e2f(0x2e7)](_0x317e2f(0x3c8) + _0x5b0efa(_0x317e2f(0x26a)) + _0x317e2f(0x275)), _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')['append'](_0x317e2f(0x24c) + _0x5b0efa(_0x317e2f(0x340)) + _0x317e2f(0x275)), _0x32738f(_0x317e2f(0x3b5))['append'](_0x317e2f(0x29e) + _0x5b0efa(_0x317e2f(0x211)) + _0x317e2f(0x2f7)));
        }
        function _0x411977(_0x3bb992) {
            const _0x4df566 = _0x4d9e01;
            _0x32738f('.IG_SN_DIG')['length'] && (_0x3bb992 ? _0x32738f(_0x4df566(0x290))['addClass']('hidden') : _0x32738f(_0x4df566(0x290))[_0x4df566(0x41e)]('hidden'));
        }
        function _0x4d4e4b(_0xd23a23, _0x377caf, _0x630b08, _0x397983, _0x5a170f, _0x1ba0c2) {
            setTimeout(() => {
                const _0x5eaff7 = a0_0x585c;
                _0x15153c(!![]), fetch(_0xd23a23)[_0x5eaff7(0x305)](_0x24995f => {
                    const _0x46b352 = _0x5eaff7;
                    return _0x24995f[_0x46b352(0x336)]()[_0x46b352(0x305)](_0x4ea70b => {
                        _0x15153c(![]), _0x307845(_0xd23a23, _0x4ea70b, _0x377caf, _0x630b08, _0x397983, _0x5a170f, _0x1ba0c2);
                    });
                });
            }, 0x32);
        }
        function _0x307845(_0x22a8b6, _0x1d4229, _0x124ada, _0xeec276, _0x452e46, _0x1ef414, _0x418865) {
            const _0x4a75eb = _0x4d9e01;
            _0x452e46 = parseInt(_0x452e46[_0x4a75eb(0x3a1)]()[_0x4a75eb(0x39b)](0xd, '0'));
            _0x4861ed['RENAME_PUBLISH_DATE'] && (_0x452e46 = parseInt(_0x452e46[_0x4a75eb(0x3a1)]()[_0x4a75eb(0x39b)](0xd, '0')));
            const _0x47ab93 = new Date(_0x452e46), _0x432622 = document['createElement']('a'), _0x1bee83 = new URL(_0x22a8b6)[_0x4a75eb(0x27d)][_0x4a75eb(0x230)]('/')['at'](-0x1)[_0x4a75eb(0x230)]('.')[_0x4a75eb(0x2fd)](0x0, -0x1)[_0x4a75eb(0x24d)]('.'), _0x3b7017 = _0x47ab93[_0x4a75eb(0x389)]()[_0x4a75eb(0x3a1)](), _0xa6bad6 = (_0x47ab93['getMonth']() + 0x1)[_0x4a75eb(0x3a1)]()['padStart'](0x2, '0'), _0xbdeac9 = _0x47ab93[_0x4a75eb(0x332)]()[_0x4a75eb(0x3a1)]()['padStart'](0x2, '0'), _0x9e2275 = _0x47ab93[_0x4a75eb(0x3c4)]()['toString']()[_0x4a75eb(0x370)](0x2, '0'), _0x330f03 = _0x47ab93[_0x4a75eb(0x1f9)]()[_0x4a75eb(0x3a1)]()[_0x4a75eb(0x370)](0x2, '0'), _0x547557 = _0x47ab93[_0x4a75eb(0x40f)]()['toString']()[_0x4a75eb(0x370)](0x2, '0');
            var _0x4b7530 = _0x548904[_0x4a75eb(0x29d)](), _0x43c254 = _0x418865 ?? '', _0x4e498d = {
                    '%USERNAME%': _0x124ada,
                    '%SOURCE_TYPE%': _0xeec276,
                    '%SHORTCODE%': _0x43c254,
                    '%YEAR%': _0x3b7017,
                    '%2-YEAR%': _0x3b7017[_0x4a75eb(0x38f)](-0x2),
                    '%MONTH%': _0xa6bad6,
                    '%DAY%': _0xbdeac9,
                    '%HOUR%': _0x9e2275,
                    '%MINUTE%': _0x330f03,
                    '%SECOND%': _0x547557,
                    '%ORIGINAL_NAME%': _0x1bee83,
                    '%ORIGINAL_NAME_FIRST%': _0x1bee83[_0x4a75eb(0x230)]('_')['at'](0x0)
                };
            _0x4b7530 = _0x4b7530[_0x4a75eb(0x430)](/%[\w\-]+%/g, function (_0x1726ab) {
                return _0x4e498d[_0x1726ab] || _0x1726ab;
            });
            const _0x4669ff = _0x124ada + '_' + _0x1bee83 + '.' + _0x1ef414;
            _0x432622[_0x4a75eb(0x1e6)] = URL['createObjectURL'](_0x1d4229), _0x432622[_0x4a75eb(0x231)](_0x4a75eb(0x296), _0x4861ed[_0x4a75eb(0x309)] ? _0x4b7530 + '.' + _0x1ef414 : _0x4669ff), _0x432622[_0x4a75eb(0x269)](), _0x432622[_0x4a75eb(0x38a)]();
        }
        async function _0x33cac2(_0x384424, _0x4c0918) {
            const _0x3a2df2 = _0x4d9e01;
            let _0x44ed0d = new Date()['getTime'](), _0x1ccadc = Math[_0x3a2df2(0x402)](_0x44ed0d / 0x3e8), _0x3dfcd4 = _0x32738f(_0x384424)[_0x3a2df2(0x21f)]('data-username') ? _0x32738f(_0x384424)[_0x3a2df2(0x21f)](_0x3a2df2(0x377)) : _0x4518f6;
            !_0x3dfcd4 && _0x32738f(_0x384424)[_0x3a2df2(0x21f)](_0x3a2df2(0x2eb)) && (_0x22493b('catching\x20owner\x20name\x20from\x20shortcode:', _0x32738f(_0x384424)['attr'](_0x3a2df2(0x353))), _0x3dfcd4 = await _0x4e3c19(_0x32738f(_0x384424)[_0x3a2df2(0x21f)](_0x3a2df2(0x2eb)))[_0x3a2df2(0x294)](_0x157414 => {
                const _0x30398d = _0x3a2df2;
                _0x22493b('get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:', _0x157414[_0x30398d(0x1d0)]);
            }), _0x3dfcd4 == null && (_0x3dfcd4 = _0x3a2df2(0x3c0)));
            _0x4861ed[_0x3a2df2(0x2e2)] && _0x32738f(_0x384424)[_0x3a2df2(0x21f)](_0x3a2df2(0x1c9)) && (_0x1ccadc = parseInt(_0x32738f(_0x384424)[_0x3a2df2(0x21f)](_0x3a2df2(0x1c9))));
            if (_0x4861ed[_0x3a2df2(0x3bc)]) {
                _0x15153c(!![]);
                let _0x513223 = await _0x406363(_0x32738f(_0x384424)['attr'](_0x3a2df2(0x1cc)));
                _0x15153c(![]);
                if (_0x513223['status'] === 'ok') {
                    var _0x14cea6 = null;
                    _0x513223[_0x3a2df2(0x20f)][0x0][_0x3a2df2(0x319)] ? _0x14cea6 = _0x513223[_0x3a2df2(0x20f)][0x0]['video_versions'][0x0][_0x3a2df2(0x3b4)] : (_0x513223['items'][0x0][_0x3a2df2(0x322)]['candidates']['sort'](function (_0x2a92c1, _0x77e9f7) {
                        const _0x81277d = _0x3a2df2;
                        if (_0x2a92c1[_0x81277d(0x3a6)] < _0x77e9f7[_0x81277d(0x3a6)])
                            return 0x1;
                        if (_0x2a92c1[_0x81277d(0x3a6)] > _0x77e9f7['width'])
                            return -0x1;
                        return 0x0;
                    }), _0x14cea6 = _0x513223[_0x3a2df2(0x20f)][0x0][_0x3a2df2(0x322)][_0x3a2df2(0x34b)][0x0]['url']);
                    if (_0x4c0918) {
                        let _0x209ec8 = new URL(_0x14cea6);
                        _0x209ec8[_0x3a2df2(0x1cd)] = _0x3a2df2(0x394), _0x326333(_0x209ec8[_0x3a2df2(0x1e6)]);
                    } else
                        _0x4d4e4b(_0x14cea6, _0x3dfcd4, _0x32738f(_0x384424)[_0x3a2df2(0x21f)]('data-name'), _0x1ccadc, _0x32738f(_0x384424)[_0x3a2df2(0x21f)](_0x3a2df2(0x23c)), _0x32738f(_0x384424)['attr'](_0x3a2df2(0x2eb)));
                } else {
                    if (_0x4861ed[_0x3a2df2(0x355)]) {
                        if (_0x4c0918) {
                            let _0x28c131 = new URL(_0x32738f(_0x384424)['attr'](_0x3a2df2(0x353)));
                            _0x28c131[_0x3a2df2(0x1cd)] = _0x3a2df2(0x394), _0x326333(_0x28c131[_0x3a2df2(0x1e6)]);
                        } else
                            _0x4d4e4b(_0x32738f(_0x384424)['attr'](_0x3a2df2(0x353)), _0x3dfcd4, _0x32738f(_0x384424)[_0x3a2df2(0x21f)](_0x3a2df2(0x27f)), _0x1ccadc, _0x32738f(_0x384424)[_0x3a2df2(0x21f)]('data-type'), _0x32738f(_0x384424)[_0x3a2df2(0x21f)]('data-path'));
                    } else
                        alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x513223[_0x3a2df2(0x1d0)]);
                    _0x22493b(_0x513223);
                }
            } else
                _0x4d4e4b(_0x32738f(_0x384424)['attr'](_0x3a2df2(0x353)), _0x3dfcd4, _0x32738f(_0x384424)[_0x3a2df2(0x21f)](_0x3a2df2(0x27f)), _0x1ccadc, _0x32738f(_0x384424)[_0x3a2df2(0x21f)]('data-type'), _0x32738f(_0x384424)[_0x3a2df2(0x21f)]('data-path'));
        }
        function _0x27b5f3(_0x58dc6e) {
            const _0x55676d = _0x4d9e01;
            var _0x13de76 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x55676d(0x434),
                        'NOTICE_UPDATE_CONTENT': _0x55676d(0x2d0),
                        'CHECK_UPDATE': _0x55676d(0x3d7),
                        'CHECK_UPDATE_MENU': _0x55676d(0x386),
                        'CHECK_UPDATE_INTRO': 'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
                        'RELOAD_SCRIPT': _0x55676d(0x425),
                        'DONATE': _0x55676d(0x21b),
                        'FEEDBACK': 'Feedback',
                        'NEW_TAB': _0x55676d(0x3f7),
                        'SHOW_DOM_TREE': _0x55676d(0x3f1),
                        'SELECT_AND_COPY': _0x55676d(0x1f7),
                        'DOWNLOAD_DOM_TREE': _0x55676d(0x235),
                        'REPORT_GITHUB': _0x55676d(0x330),
                        'REPORT_DISCORD': _0x55676d(0x2ac),
                        'REPORT_FORK': 'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
                        'DEBUG': 'Debug\x20Window',
                        'CLOSE': 'Close',
                        'ALL_CHECK': _0x55676d(0x1fb),
                        'BATCH_DOWNLOAD_SELECTED': _0x55676d(0x36c),
                        'BATCH_DOWNLOAD_DIRECT': _0x55676d(0x2a1),
                        'IMG': _0x55676d(0x29b),
                        'VID': _0x55676d(0x323),
                        'DW': 'Download',
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x55676d(0x396),
                        'LOAD_BLOB_MULTIPLE': _0x55676d(0x2af),
                        'LOAD_BLOB_RELOAD': _0x55676d(0x413),
                        'NO_CHECK_RESOURCE': _0x55676d(0x33b),
                        'NO_VID_URL': 'Cannot\x20find\x20video\x20URL.',
                        'SETTING': _0x55676d(0x354),
                        'AUTO_RENAME': _0x55676d(0x3cc),
                        'RENAME_SHORTCODE': _0x55676d(0x20a),
                        'RENAME_PUBLISH_DATE': _0x55676d(0x2c5),
                        'RENAME_LOCATE_DATE': _0x55676d(0x27a),
                        'DISABLE_VIDEO_LOOPING': _0x55676d(0x1de),
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x55676d(0x271),
                        'FORCE_FETCH_ALL_RESOURCES': _0x55676d(0x2f4),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x55676d(0x3e4),
                        'DIRECT_DOWNLOAD_ALL': _0x55676d(0x351),
                        'MODIFY_VIDEO_VOLUME': _0x55676d(0x2f1),
                        'SCROLL_BUTTON': _0x55676d(0x1d2),
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x55676d(0x212),
                        'AUTO_RENAME_INTRO': _0x55676d(0x254),
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': _0x55676d(0x222),
                        'RENAME_LOCATE_DATE_INTRO': _0x55676d(0x32d),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x55676d(0x2ea),
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x55676d(0x1f2),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x55676d(0x36a),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': 'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
                        'DIRECT_DOWNLOAD_ALL_INTRO': 'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x55676d(0x216),
                        'SCROLL_BUTTON_INTRO': _0x55676d(0x344),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x55676d(0x1d3),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x55676d(0x31c),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x55676d(0x3d4),
                        'SKIP_VIEW_STORY_CONFIRM': _0x55676d(0x286),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x55676d(0x238)
                    }
                }, _0x3b43d5 = Object['assign']({}, _0x13de76, _0x4e76dc), _0x4e93a9 = Object[_0x55676d(0x2ec)](_0x3b43d5)['sort']()[_0x55676d(0x1ea)]((_0x3fc9c5, _0x459dc4) => {
                    return _0x3fc9c5[_0x459dc4] = _0x3b43d5[_0x459dc4], _0x3fc9c5;
                }, {});
            return _0x4e93a9;
        }
        async function _0xcc2518(_0xafe5a6) {
            return new Promise((_0x4f5174, _0x2954a3) => {
                const _0x4356bc = a0_0x585c;
                GM_xmlhttpRequest({
                    'method': _0x4356bc(0x1fc),
                    'url': _0x4356bc(0x236) + _0xafe5a6 + _0x4356bc(0x253),
                    'onload': function (_0x1dbb76) {
                        try {
                            let _0x231c9b = JSON['parse'](_0x1dbb76['response']);
                            _0x4f5174(_0x231c9b);
                        } catch (_0x255ec4) {
                            _0x2954a3(_0x255ec4);
                        }
                    },
                    'onerror': function (_0x3fbdd9) {
                        const _0x23083b = _0x4356bc;
                        _0x22493b(_0x23083b(0x1e7), _0x23083b(0x406), _0x3fbdd9), _0x2954a3(_0x3fbdd9);
                    }
                });
            });
        }
        function _0x5b0efa(_0xc299c3) {
            const _0x196273 = _0x4d9e01, _0x127683 = _0x27b5f3();
            return _0x127683[_0x500d9c] != undefined && _0x127683[_0x500d9c][_0xc299c3] != undefined ? _0x127683[_0x500d9c][_0xc299c3] : _0x127683[_0x196273(0x31b)][_0xc299c3];
        }
        function _0x4c87bc() {
            const _0x519c7f = _0x4d9e01;
            _0x32738f(_0x519c7f(0x2b1))[_0x519c7f(0x258)](function () {
                const _0x3cd66d = _0x519c7f;
                _0x32738f(this)[_0x3cd66d(0x41f)](_0x5b0efa(_0x32738f(this)[_0x3cd66d(0x21f)](_0x3cd66d(0x2c0))));
            }), _0x32738f(_0x519c7f(0x3b8))[_0x519c7f(0x258)](function () {
                const _0x1ebc1c = _0x519c7f;
                _0x32738f(this)[_0x1ebc1c(0x21f)](_0x1ebc1c(0x2e4), _0x5b0efa(_0x32738f(this)['attr']('data-ih-locale-title')));
            });
        }
        function _0xb5921() {
            const _0x38cd85 = _0x4d9e01;
            for (let _0x316334 of _0x6ff358) {
                _0x22493b(_0x38cd85(0x2dd), _0x316334), GM_unregisterMenuCommand(_0x316334);
            }
            _0x6ff358[_0x38cd85(0x3f5)](GM_registerMenuCommand(_0x5b0efa(_0x38cd85(0x1e3)), () => {
                _0x5698ab();
            }, { 'accessKey': 'w' })), _0x6ff358[_0x38cd85(0x3f5)](GM_registerMenuCommand(_0x5b0efa(_0x38cd85(0x3ce)), () => {
                const _0x47929f = _0x38cd85;
                GM_openInTab(_0x47929f(0x364), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x6ff358[_0x38cd85(0x3f5)](GM_registerMenuCommand(_0x5b0efa(_0x38cd85(0x228)), () => {
                _0x2fb2d8();
            }, { 'accessKey': 'z' })), _0x6ff358[_0x38cd85(0x3f5)](GM_registerMenuCommand(_0x5b0efa(_0x38cd85(0x400)), () => {
                _0x426d0d();
            }, { 'accessKey': 'f' })), _0x6ff358['push'](GM_registerMenuCommand(_0x5b0efa(_0x38cd85(0x223)), () => {
                _0x417a6d();
            }, { 'accessKey': 'c' })), _0x6ff358['push'](GM_registerMenuCommand(_0x5b0efa(_0x38cd85(0x25b)), () => {
                _0x5e5e75();
            }, { 'accessKey': 'r' }));
        }
        function _0x2334ba(_0xb6982f) {
            const _0x31b68b = _0x4d9e01;
            if (!_0x4861ed['CHECK_UPDATE'])
                return;
            const _0x72af46 = GM_getValue(_0x31b68b(0x397)) ?? new Date()[_0x31b68b(0x2be)](), _0x1fb292 = new Date()[_0x31b68b(0x2be)]();
            _0x1fb292 > parseInt(_0x72af46) + _0xb6982f * 0x3e8 && (GM_setValue('G_CHECK_TIMESTAMP', new Date()['getTime']()), _0x417a6d());
        }
        function _0x417a6d() {
            const _0x2f423d = _0x4d9e01, _0x124fa2 = GM_info[_0x2f423d(0x419)][_0x2f423d(0x361)], _0x39947a = _0x2f423d(0x221);
            GM_xmlhttpRequest({
                'method': _0x2f423d(0x1fc),
                'url': _0x39947a,
                'onload': function (_0x3322ca) {
                    const _0x3c288f = _0x2f423d, _0x1729e4 = _0x3322ca[_0x3c288f(0x39f)], _0x4d54b5 = _0x1729e4[_0x3c288f(0x22d)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x4d54b5 && _0x4d54b5[0x1]) {
                        const _0x2c874d = _0x4d54b5[0x1];
                        _0x22493b(_0x3c288f(0x3ab), _0x124fa2, '|', 'Remote\x20version:\x20', _0x2c874d), _0x2c874d !== _0x124fa2 && typeof this[_0x3c288f(0x276)] === _0x3c288f(0x282) ? (this[_0x3c288f(0x276)] = null, GM_notification({
                            'text': _0x5b0efa(_0x3c288f(0x2df)),
                            'title': _0x5b0efa('NOTICE_UPDATE_TITLE'),
                            'tag': _0x3c288f(0x280),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x3c288f(0x350),
                            'onclick': _0x4aec62 => {
                                const _0x422c61 = _0x3c288f;
                                _0x4aec62?.['preventDefault']();
                                var _0x526b87 = GM_openInTab(GM_info[_0x422c61(0x419)][_0x422c61(0x255)]);
                                setTimeout(() => {
                                    const _0x335aab = _0x422c61;
                                    _0x526b87[_0x335aab(0x37a)]();
                                }, 0xfa);
                            }
                        })) : _0x22493b(_0x3c288f(0x3b3));
                    } else
                        console[_0x3c288f(0x420)](_0x3c288f(0x20d));
                }
            });
        }
        function _0x5698ab() {
            const _0x1d59d8 = _0x4d9e01;
            _0x32738f(_0x1d59d8(0x290))[_0x1d59d8(0x38a)](), _0x30f5d8(), _0x32738f(_0x1d59d8(0x36b))[_0x1d59d8(0x41f)]('Preference\x20Settings'), _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div')['append'](_0x1d59d8(0x33f));
            for (let _0x1f72bc in _0x557530) {
                _0x32738f(_0x1d59d8(0x237))[_0x1d59d8(0x2e7)](_0x1d59d8(0x3ec) + _0x1f72bc + '\x22\x20' + (_0x500d9c == _0x1f72bc ? _0x1d59d8(0x417) : '') + '>' + _0x557530[_0x1f72bc] + _0x1d59d8(0x39d));
            }
            for (let _0x3fd4b2 in _0x4861ed) {
                _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_BODY')['append'](_0x1d59d8(0x405) + (_0x4e6fb3['includes'](_0x3fd4b2) ? _0x1d59d8(0x2f6) : '') + _0x1d59d8(0x3f9) + _0x5b0efa(_0x3fd4b2 + _0x1d59d8(0x203)) + _0x1d59d8(0x207) + (_0x3fd4b2 + '_INTRO') + '\x22><span\x20data-ih-locale=\x22' + _0x3fd4b2 + '\x22>' + _0x5b0efa(_0x3fd4b2) + _0x1d59d8(0x248) + _0x3fd4b2 + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x4861ed[_0x3fd4b2] === !![] ? 'checked' : '') + _0x1d59d8(0x3a9)), _0x3fd4b2 === _0x1d59d8(0x249) && _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22' + _0x3fd4b2 + '\x22]')[_0x1d59d8(0x3a5)](_0x1d59d8(0x3df))['on'](_0x1d59d8(0x3ca), function (_0x401425) {
                    const _0x15a36c = _0x1d59d8;
                    _0x401425[_0x15a36c(0x324)](), _0x32738f(this)[_0x15a36c(0x39e)](_0x15a36c(0x408))[_0x15a36c(0x2d3)] === 0x0 && (_0x32738f(this)[_0x15a36c(0x2e7)](_0x15a36c(0x259)), _0x32738f(this)[_0x15a36c(0x3dc)](_0x15a36c(0x408))[_0x15a36c(0x2e7)](_0x15a36c(0x3cb) + _0x1958dd + _0x15a36c(0x3b9)), _0x32738f(this)['children'](_0x15a36c(0x408))['append'](_0x15a36c(0x3cb) + _0x1958dd + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x32738f(this)['children'](_0x15a36c(0x408))[_0x15a36c(0x2e7)](_0x15a36c(0x379) + _0x3c5d71[_0x15a36c(0x311)] + _0x15a36c(0x35d)));
                }), _0x3fd4b2 === _0x1d59d8(0x309) && _0x32738f(_0x1d59d8(0x261) + _0x3fd4b2 + '\x22]')[_0x1d59d8(0x3a5)](_0x1d59d8(0x3df))['on'](_0x1d59d8(0x3ca), function (_0x47859b) {
                    const _0x499956 = _0x1d59d8;
                    _0x47859b[_0x499956(0x324)](), _0x32738f(this)[_0x499956(0x39e)](_0x499956(0x408))[_0x499956(0x2d3)] === 0x0 && (_0x32738f(this)[_0x499956(0x2e7)](_0x499956(0x259)), _0x32738f(this)[_0x499956(0x3dc)](_0x499956(0x408))[_0x499956(0x2e7)](_0x499956(0x3fd) + _0x548904 + '\x22\x20/>'), _0x32738f(this)[_0x499956(0x3dc)]('#tempWrapper')[_0x499956(0x2e7)](_0x499956(0x379) + _0x3c5d71['CLOSE'] + _0x499956(0x35d)));
                });
            }
        }
        function _0x2fb2d8() {
            const _0x2930a0 = _0x4d9e01;
            _0x32738f(_0x2930a0(0x290))[_0x2930a0(0x38a)](), _0x30f5d8(), _0x32738f(_0x2930a0(0x36b))[_0x2930a0(0x41f)](_0x2930a0(0x3f4)), _0x32738f(_0x2930a0(0x32a))[_0x2930a0(0x2e7)](_0x2930a0(0x292)), _0x32738f(_0x2930a0(0x32a))[_0x2930a0(0x2e7)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x32738f(_0x2930a0(0x226))['append'](_0x2930a0(0x40c) + _0x5b0efa(_0x2930a0(0x30b)) + _0x2930a0(0x35f)), _0x32738f(_0x2930a0(0x226))[_0x2930a0(0x2e7)](_0x2930a0(0x3e1) + _0x5b0efa('SELECT_AND_COPY') + _0x2930a0(0x35f)), _0x32738f(_0x2930a0(0x226))[_0x2930a0(0x2e7)](_0x2930a0(0x399) + _0x5b0efa(_0x2930a0(0x1e2)) + '</a></button><br/>'), _0x32738f(_0x2930a0(0x226))[_0x2930a0(0x2e7)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x5b0efa(_0x2930a0(0x241)) + _0x2930a0(0x35f)), _0x32738f(_0x2930a0(0x226))[_0x2930a0(0x2e7)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x5b0efa('REPORT_DISCORD') + _0x2930a0(0x35f));
        }
        function _0x426d0d() {
            const _0x4efc46 = _0x4d9e01;
            _0x32738f(_0x4efc46(0x290))[_0x4efc46(0x38a)](), _0x30f5d8(), _0x32738f(_0x4efc46(0x36b))[_0x4efc46(0x41f)](_0x4efc46(0x315)), _0x32738f(_0x4efc46(0x32a))[_0x4efc46(0x2e7)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x4efc46(0x2e7)](_0x4efc46(0x2f5) + _0x5b0efa(_0x4efc46(0x41d)) + _0x4efc46(0x35f)), _0x32738f(_0x4efc46(0x226))[_0x4efc46(0x2e7)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x5b0efa(_0x4efc46(0x241)) + _0x4efc46(0x35f)), _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x4efc46(0x2e7)](_0x4efc46(0x213) + _0x5b0efa('REPORT_DISCORD') + _0x4efc46(0x35f));
        }
        function _0x326333(_0x282e64) {
            const _0x1212f6 = _0x4d9e01;
            var _0x2220cc = document['createElement']('a');
            _0x2220cc[_0x1212f6(0x1e6)] = _0x282e64, _0x2220cc['target'] = _0x1212f6(0x373), document['body'][_0x1212f6(0x24b)](_0x2220cc), _0x2220cc[_0x1212f6(0x269)](), _0x2220cc[_0x1212f6(0x38a)]();
        }
        function _0x5e5e75() {
            const _0x4231a3 = _0x4d9e01;
            clearInterval(_0x106f5c), _0x32738f(_0x4231a3(0x2ee))[_0x4231a3(0x38a)](), _0x32738f('.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL')[_0x4231a3(0x38a)](), _0x32738f(_0x4231a3(0x298))['removeAttr'](_0x4231a3(0x274)), _0x262cc8 = ![], _0x12e044 = ![], _0x3b0b94 = location['href'], _0x560c82['disconnect'](), _0x22493b(_0x4231a3(0x30e));
        }
        function _0x22493b(..._0xc8cf9d) {
            const _0x5f1e8f = _0x4d9e01;
            var _0xcab1d7 = new Date();
            _0xfc15c8[_0x5f1e8f(0x3f5)]({
                'time': _0xcab1d7[_0x5f1e8f(0x2be)](),
                'content': [..._0xc8cf9d]
            }), _0xfc15c8['length'] > 0x3e8 && (_0xfc15c8 = [
                {
                    'time': _0xcab1d7[_0x5f1e8f(0x2be)](),
                    'content': [_0x5f1e8f(0x3f6)]
                },
                ..._0xfc15c8[_0x5f1e8f(0x2fd)](-0x3e7)
            ]), console[_0x5f1e8f(0x34f)]('[' + _0xcab1d7[_0x5f1e8f(0x3ba)]() + ']', ..._0xc8cf9d);
        }
        function _0x144526() {
            const _0x165226 = _0x4d9e01;
            for (let _0x15c382 in _0x4861ed) {
                GM_getValue(_0x15c382) != null && typeof GM_getValue(_0x15c382) === _0x165226(0x28c) && (_0x4861ed[_0x15c382] = GM_getValue(_0x15c382));
            }
        }
        function _0x1e46cf(_0x5cdccf, _0x29a8df, _0x531f2e, _0x2166bf = '') {
            const _0x1a83aa = _0x4d9e01;
            _0x29a8df[_0x1a83aa(0x39e)](_0x1a83aa(0x28e))[_0x1a83aa(0x2d3)] === 0x0 ? (_0x29a8df['append']('<div\x20class=\x22volume_slider\x20' + _0x2166bf + _0x1a83aa(0x1f5)), _0x29a8df[_0x1a83aa(0x39e)](_0x1a83aa(0x28e))[_0x1a83aa(0x2e7)](_0x1a83aa(0x3bf) + _0x1958dd + '\x22\x20/></div>'), _0x29a8df['find'](_0x1a83aa(0x1e1))[_0x1a83aa(0x21f)](_0x1a83aa(0x1eb), _0x1a83aa(0x37d) + (_0x1958dd * 0x64 + '%')), _0x29a8df['find'](_0x1a83aa(0x1e1))['on']('input', function () {
                const _0x2fb0ba = _0x1a83aa;
                var _0x1b8830 = _0x32738f(this)[_0x2fb0ba(0x39a)]() * 0x64 + '%';
                _0x1958dd = _0x32738f(this)['val'](), GM_setValue(_0x2fb0ba(0x32e), _0x32738f(this)['val']()), _0x32738f(this)[_0x2fb0ba(0x21f)](_0x2fb0ba(0x1eb), _0x2fb0ba(0x37d) + _0x1b8830), _0x5cdccf['each'](function () {
                    const _0x3a1ed4 = _0x2fb0ba;
                    _0x22493b('(' + _0x531f2e + ')', _0x3a1ed4(0x1f3)), this[_0x3a1ed4(0x1fa)] = _0x1958dd;
                });
            }), _0x29a8df[_0x1a83aa(0x39e)](_0x1a83aa(0x1e1))['on'](_0x1a83aa(0x1d8), function () {
                const _0x4a5c07 = _0x1a83aa;
                var _0xbde820 = _0x1958dd * 0x64 + '%';
                _0x32738f(this)['attr'](_0x4a5c07(0x1eb), _0x4a5c07(0x37d) + _0xbde820), _0x32738f(this)['val'](_0x1958dd), _0x5cdccf[_0x4a5c07(0x258)](function () {
                    const _0x157b05 = _0x4a5c07;
                    _0x22493b('(' + _0x531f2e + ')', _0x157b05(0x1f3)), this['volume'] = _0x1958dd;
                });
            }), _0x29a8df[_0x1a83aa(0x39e)](_0x1a83aa(0x28e))['on'](_0x1a83aa(0x269), function (_0x215821) {
                const _0x294894 = _0x1a83aa;
                _0x215821[_0x294894(0x383)](), _0x215821[_0x294894(0x324)]();
            })) : _0x29a8df[_0x1a83aa(0x39e)](_0x1a83aa(0x28e))[_0x1a83aa(0x38a)]();
        }
        _0x32738f(function () {
            const _0x1f7e8a = _0x4d9e01;
            function _0xc4d0f(_0x5d5197) {
                const _0x3f55f0 = a0_0x585c;
                var _0x3d1d86 = [];
                for (var _0x35f994 of _0x5d5197) {
                    _0x3d1d86['push']({
                        'tagName': _0x35f994[_0x3f55f0(0x3d3)],
                        'id': _0x35f994['id'],
                        'className': _0x35f994['className']
                    });
                }
                return _0x3d1d86;
            }
            function _0x47f4ad() {
                const _0x56d659 = a0_0x585c;
                let _0x376f48 = _0x32738f(_0x56d659(0x356))[0x0];
                var _0x466b61 = '';
                _0xfc15c8[_0x56d659(0x2d6)](_0x114e2c => {
                    const _0x3d3489 = _0x56d659;
                    var _0x76c012 = JSON[_0x3d3489(0x35a)](_0x114e2c[_0x3d3489(0x337)], function (_0x8d5e2c, _0x598baa) {
                        const _0xdcc01 = _0x3d3489;
                        if (Array[_0xdcc01(0x2b8)](this)) {
                            if (typeof _0x598baa === _0xdcc01(0x391) && _0x598baa instanceof jQuery)
                                return _0xc4d0f(_0x598baa);
                            return _0x598baa;
                        } else
                            return _0x598baa;
                    }, '\x09');
                    _0x466b61 += _0x114e2c['time'] + ':\x20' + _0x76c012 + '\x0a';
                }), _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x56d659(0x41f)]('Logger:\x0a' + _0x466b61 + _0x56d659(0x3ed) + location[_0x56d659(0x27d)] + _0x56d659(0x3c6) + _0x376f48[_0x56d659(0x2c7)]);
            }
            _0x32738f('body')['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x33e), function () {
                _0x47f4ad();
            }), _0x32738f(_0x1f7e8a(0x2c4))['on']('click', '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x547132 = _0x1f7e8a;
                _0x32738f(_0x547132(0x367))[_0x547132(0x3bd)](), document[_0x547132(0x302)](_0x547132(0x201));
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x416), function () {
                const _0x2dca27 = _0x1f7e8a;
                _0x32738f(_0x2dca27(0x367))[_0x2dca27(0x41f)]()[_0x2dca27(0x2d3)] === 0x0 && _0x47f4ad();
                var _0x19e869 = _0x32738f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x2dca27(0x41f)](), _0x58c154 = document[_0x2dca27(0x2de)]('a'), _0x257109 = new Blob([_0x19e869], { 'type': _0x2dca27(0x22e) });
                _0x58c154[_0x2dca27(0x1e6)] = URL[_0x2dca27(0x387)](_0x257109), _0x58c154[_0x2dca27(0x296)] = _0x2dca27(0x306) + new Date()['getTime']() + _0x2dca27(0x3e2), document[_0x2dca27(0x2c4)][_0x2dca27(0x24b)](_0x58c154), _0x58c154[_0x2dca27(0x269)](), _0x58c154['remove']();
            }), _0x32738f('body')['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x1f0), function () {
                const _0x505f1f = _0x1f7e8a;
                _0x32738f(this)[_0x505f1f(0x3a5)](_0x505f1f(0x408))[_0x505f1f(0x2d3)] > 0x0 ? _0x32738f(this)[_0x505f1f(0x3a5)](_0x505f1f(0x408))[_0x505f1f(0x268)](0xfa, function () {
                    const _0x49af65 = _0x505f1f;
                    _0x32738f(this)[_0x49af65(0x38a)]();
                }) : _0x32738f(_0x505f1f(0x290))[_0x505f1f(0x38a)]();
            }), _0x32738f(window)[_0x1f7e8a(0x439)](function (_0x2540bd) {
                const _0x110aff = _0x1f7e8a;
                _0x2540bd['keyCode'] == '81' && _0x2540bd['altKey'] && (_0x32738f(_0x110aff(0x290))[_0x110aff(0x38a)](), _0x2540bd[_0x110aff(0x324)]()), _0x2540bd[_0x110aff(0x423)] == '87' && _0x2540bd[_0x110aff(0x42e)] && (_0x5698ab(), _0x2540bd[_0x110aff(0x324)]()), _0x2540bd[_0x110aff(0x423)] == '90' && _0x2540bd[_0x110aff(0x42e)] && (_0x2fb2d8(), _0x2540bd[_0x110aff(0x324)]()), _0x2540bd['keyCode'] == '82' && _0x2540bd[_0x110aff(0x42e)] && (_0x5e5e75(), _0x2540bd['preventDefault']()), _0x2540bd['keyCode'] == '83' && _0x2540bd['altKey'] && (location[_0x110aff(0x1e6)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x32738f('.IG_DWSTORY')[_0x110aff(0x2d3)] > 0x0 && _0x32738f('.IG_DWSTORY')?.[_0x110aff(0x269)](), location[_0x110aff(0x1e6)][_0x110aff(0x22d)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x32738f(_0x110aff(0x2a8))[_0x110aff(0x2d3)] > 0x0 && _0x32738f(_0x110aff(0x2a8))?.['click'](), _0x2540bd[_0x110aff(0x324)]());
            }), _0x32738f('body')['on'](_0x1f7e8a(0x21d), _0x1f7e8a(0x2f9), function (_0x23cde0) {
                const _0x2c486b = _0x1f7e8a;
                var _0x3fc592 = _0x32738f(this)['attr']('id');
                if (_0x3fc592 && _0x4861ed[_0x3fc592] !== undefined) {
                    let _0x10153 = _0x32738f(this)['prop'](_0x2c486b(0x210));
                    GM_setValue(_0x3fc592, _0x10153), _0x4861ed[_0x3fc592] = _0x10153, console[_0x2c486b(0x34f)](_0x2c486b(0x314), _0x3fc592, _0x10153);
                }
            }), _0x32738f('body')['on'](_0x1f7e8a(0x269), '.IG_SN_DIG\x20.globalSettings', function (_0x19abaa) {
                const _0x455dc6 = _0x1f7e8a;
                _0x32738f(this)[_0x455dc6(0x39e)]('#tempWrapper')['length'] > 0x0 && _0x19abaa['preventDefault']();
            }), _0x32738f(_0x1f7e8a(0x2c4))['on']('change', '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)', function () {
                const _0x20ac24 = _0x1f7e8a;
                let _0xc39083 = _0x32738f(this)[_0x20ac24(0x39a)]();
                _0x32738f(this)[_0x20ac24(0x21f)](_0x20ac24(0x428)) == _0x20ac24(0x205) ? _0x32738f(this)[_0x20ac24(0x335)]()[_0x20ac24(0x39a)](_0xc39083) : _0x32738f(this)[_0x20ac24(0x1e9)]()['val'](_0xc39083), _0xc39083 >= 0x0 && _0xc39083 <= 0x1 && (_0x1958dd = _0xc39083, GM_setValue(_0x20ac24(0x32e), _0xc39083));
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x421), _0x1f7e8a(0x215), function (_0x3b057a) {
                const _0x2a7f26 = _0x1f7e8a;
                if (_0x32738f(this)['attr'](_0x2a7f26(0x428)) == _0x2a7f26(0x205)) {
                    let _0x207f2a = _0x32738f(this)[_0x2a7f26(0x39a)]();
                    _0x32738f(this)[_0x2a7f26(0x335)]()[_0x2a7f26(0x39a)](_0x207f2a);
                } else {
                    let _0x57b9e2 = _0x32738f(this)[_0x2a7f26(0x39a)]();
                    _0x57b9e2 >= 0x0 && _0x57b9e2 <= 0x1 ? _0x32738f(this)['prev']()['val'](_0x57b9e2) : _0x57b9e2 < 0x0 ? _0x32738f(this)[_0x2a7f26(0x39a)](0x0) : _0x32738f(this)['val'](0x1);
                }
            }), _0x32738f(_0x1f7e8a(0x2c4))['on']('input', '.IG_SN_DIG\x20#tempWrapper\x20input#date_format', function (_0x853a4d) {
                const _0x35b7ec = _0x1f7e8a;
                GM_setValue(_0x35b7ec(0x2b3), _0x32738f(this)[_0x35b7ec(0x39a)]()), _0x548904 = _0x32738f(this)[_0x35b7ec(0x39a)]();
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x35b), function (_0x4deecd) {
                const _0x3d722c = _0x1f7e8a;
                _0x4deecd[_0x3d722c(0x324)](), _0x33cac2(this);
            }), _0x32738f('body')['on']('click', '.IG_SN_DIG_BODY\x20.newTab', function () {
                const _0xec3d41 = _0x1f7e8a;
                if (_0x4861ed['FORCE_RESOURCE_VIA_MEDIA'] && _0x4861ed[_0xec3d41(0x35e)])
                    _0x33cac2(_0x32738f(this)[_0xec3d41(0x3a5)]()[_0xec3d41(0x3dc)]('a')['first']()[0x0], !![]);
                else {
                    var _0x57e45b = new URL(_0x32738f(this)['parent']()['children']('a')[_0xec3d41(0x21f)](_0xec3d41(0x353)));
                    _0x57e45b[_0xec3d41(0x1cd)] = 'scontent.cdninstagram.com', _0x326333(_0x57e45b[_0xec3d41(0x1e6)]);
                }
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x3a2), function () {
                const _0x3ae665 = _0x1f7e8a;
                let _0xc08168 = new Date()[_0x3ae665(0x2be)]();
                _0x4861ed['RENAME_PUBLISH_DATE'] && _0x32738f(this)[_0x3ae665(0x3a5)]()['children']('a')['attr']('datetime') && (_0xc08168 = _0x32738f(this)[_0x3ae665(0x3a5)]()['children']('a')[_0x3ae665(0x21f)](_0x3ae665(0x1c9)));
                let _0x10919d = _0x32738f(this)['parent']()[_0x3ae665(0x3dc)]('a')[_0x3ae665(0x21f)](_0x3ae665(0x2eb)) ?? _0x32738f(_0x3ae665(0x26f))[_0x3ae665(0x41f)]();
                _0x4d4e4b(_0x32738f(this)['parent']()[_0x3ae665(0x3dc)]('a')[_0x3ae665(0x39e)](_0x3ae665(0x376))[_0x3ae665(0x42d)]()[_0x3ae665(0x21f)](_0x3ae665(0x30f)), _0x32738f(this)[_0x3ae665(0x3a5)]()['children']('a')[_0x3ae665(0x21f)]('data-username'), _0x3ae665(0x23f), _0xc08168, _0x3ae665(0x3d9), _0x10919d);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x1f4), function () {
                _0x2bd5a8(!![]);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on']('click', _0x1f7e8a(0x36e), function (_0x233e03) {
                const _0x9441b8 = _0x1f7e8a;
                _0x233e03[_0x9441b8(0x324)](), _0x2bd5a8(!![], !![], !![]);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), '.IG_DWSTORY_THUMBNAIL', function () {
                _0x388261(!![]);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on']('click', _0x1f7e8a(0x2e3), function (_0x180393) {
                const _0x55e27e = _0x1f7e8a;
                _0x180393[_0x55e27e(0x383)](), _0x410556(!![]);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x2a8), function () {
                _0x4a322c(!![]);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), '.IG_DWHINEWTAB', function (_0x25b9c6) {
                const _0xbe784e = _0x1f7e8a;
                _0x25b9c6[_0xbe784e(0x324)](), _0x4a322c(!![], !![]);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x29f), function () {
                _0x2d346d(!![]);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), '.IG_REELS', function () {
                _0x48508e(!![], !![]);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x22c), function () {
                _0x48508e(!![], !![], !![]);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x2ed), function () {
                _0x48508e(!![], ![]);
            }), _0x32738f('body')['on'](_0x1f7e8a(0x23e), _0x1f7e8a(0x233), function (_0x4914b3) {
                const _0x3ee9ad = _0x1f7e8a;
                if (_0x4914b3['which'] === 0x3 || _0x4914b3[_0x3ee9ad(0x32f)] === 0x2) {
                    if (location[_0x3ee9ad(0x1e6)] === _0x3ee9ad(0x277) && _0x4861ed[_0x3ee9ad(0x2ab)]) {
                        _0x4914b3[_0x3ee9ad(0x324)]();
                        if (_0x32738f(this)[_0x3ee9ad(0x39e)]('canvas._aarh')[_0x3ee9ad(0x2d3)] > 0x0) {
                            const _0x3f6b5d = 'https://www.instagram.com/' + _0x32738f(this)[_0x3ee9ad(0x3dc)](_0x3ee9ad(0x256))[_0x3ee9ad(0x3d5)]()[_0x3ee9ad(0x41f)]();
                            _0x4914b3[_0x3ee9ad(0x32f)] === 0x2 ? GM_openInTab(_0x3f6b5d) : location[_0x3ee9ad(0x1e6)] = _0x3f6b5d;
                        }
                    }
                }
            }), _0x32738f(_0x1f7e8a(0x2c4))['on']('change', _0x1f7e8a(0x23b), function () {
                const _0x4f1e07 = _0x1f7e8a;
                var _0x2abcb7 = _0x32738f(this)[_0x4f1e07(0x39e)]('input')[_0x4f1e07(0x432)](_0x4f1e07(0x210));
                _0x32738f(_0x4f1e07(0x2a2))[_0x4f1e07(0x258)](function () {
                    const _0x5bd788 = _0x4f1e07;
                    _0x32738f(this)[_0x5bd788(0x432)](_0x5bd788(0x210), _0x2abcb7);
                });
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x21d), _0x1f7e8a(0x2a2), function () {
                const _0x25c65e = _0x1f7e8a;
                var _0x2833cd = _0x32738f(_0x25c65e(0x433))[_0x25c65e(0x2d3)], _0x5e9bcb = _0x32738f(_0x25c65e(0x2a2))[_0x25c65e(0x2d3)];
                _0x32738f('.IG_SN_DIG_TITLE\x20.checkbox')['find'](_0x25c65e(0x421))[_0x25c65e(0x432)](_0x25c65e(0x210), _0x2833cd == _0x5e9bcb);
            }), _0x32738f(_0x1f7e8a(0x2c4))['on'](_0x1f7e8a(0x269), _0x1f7e8a(0x3c7), function () {
                const _0x371c20 = _0x1f7e8a;
                let _0x476e9b = 0x0;
                _0x32738f(_0x371c20(0x320))[_0x371c20(0x258)](function () {
                    const _0x10aa12 = _0x371c20;
                    _0x32738f(this)['prev']()[_0x10aa12(0x3dc)](_0x10aa12(0x421))['prop'](_0x10aa12(0x210)) && (_0x32738f(this)[_0x10aa12(0x269)](), _0x476e9b++);
                }), _0x476e9b == 0x0 && alert(_0x5b0efa('NO_CHECK_RESOURCE'));
            }), _0x32738f(_0x1f7e8a(0x2c4))['on']('change', '.IG_SN_DIG_TITLE\x20#langSelect', function () {
                const _0x420f12 = _0x1f7e8a;
                GM_setValue(_0x420f12(0x251), _0x32738f(this)[_0x420f12(0x39a)]()), _0x500d9c = _0x32738f(this)[_0x420f12(0x39a)](), _0x500d9c?.['startsWith']('en') || _0x4e76dc[_0x500d9c] != null ? (_0x4c87bc(), _0xb5921()) : _0xcc2518(_0x500d9c)[_0x420f12(0x305)](_0x46dd07 => {
                    _0x4e76dc[_0x500d9c] = _0x46dd07, _0x4c87bc(), _0xb5921();
                })[_0x420f12(0x294)](_0x4b4f0b => {
                    const _0x5a9dae = _0x420f12;
                    console[_0x5a9dae(0x420)](_0x5a9dae(0x30c), _0x4b4f0b);
                });
            }), _0x32738f(_0x1f7e8a(0x2c4))['on']('change', _0x1f7e8a(0x39c), function () {
                const _0x489c10 = _0x1f7e8a;
                _0x32738f(_0x489c10(0x262))[_0x489c10(0x41f)]('' + new Date()['toLocaleString'](_0x32738f(this)[_0x489c10(0x39a)](), {
                    'hour12': ![],
                    'second': _0x489c10(0x352),
                    'minute': '2-digit',
                    'hour': '2-digit',
                    'month': '2-digit',
                    'day': _0x489c10(0x352),
                    'year': _0x489c10(0x2a3)
                })['replaceAll']('/', '-')), LOCATE_DATE_FORMAT = _0x32738f(this)[_0x489c10(0x39a)](), GM_setValue(_0x489c10(0x297), _0x32738f(this)['val']());
            }), _0x32738f(_0x1f7e8a(0x2c4))['on']('click', _0x1f7e8a(0x422), function () {
                const _0x2fa47d = _0x1f7e8a;
                _0x32738f(_0x2fa47d(0x320))[_0x2fa47d(0x258)](function () {
                    const _0x40ca54 = _0x2fa47d;
                    _0x32738f(this)[_0x40ca54(0x269)]();
                });
            });
            const _0x2ae7d6 = new MutationObserver(_0x5474ce => {
                const _0x5a891c = _0x1f7e8a;
                for (const _0x143370 of _0x5474ce) {
                    _0x143370[_0x5a891c(0x428)] === 'childList' && _0x143370[_0x5a891c(0x2d2)]['forEach'](_0x38ea5a => {
                        const _0x49d5dc = _0x5a891c, _0x3a9558 = _0x32738f(_0x38ea5a)[_0x49d5dc(0x39e)]('video');
                        if (_0x3a9558[_0x49d5dc(0x2d3)] > 0x0) {
                            _0x4861ed[_0x49d5dc(0x249)] && _0x3a9558[_0x49d5dc(0x258)](function () {
                                const _0x4075d8 = _0x49d5dc;
                                _0x32738f(this)['on'](_0x4075d8(0x26d), function () {
                                    const _0x14cc16 = _0x4075d8;
                                    !_0x32738f(this)['data'](_0x14cc16(0x293)) && (_0x32738f(this)[_0x14cc16(0x21f)](_0x14cc16(0x3fe), !![]), this[_0x14cc16(0x1fa)] = _0x1958dd, _0x22493b('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x49d5dc(0x27d)][_0x49d5dc(0x22d)](/^(\/stories\/)/ig)) {
                                const _0x130df7 = location['pathname'][_0x49d5dc(0x22d)](/^(\/stories\/highlights\/)/ig) != null, _0x4068c3 = _0x130df7 ? _0x49d5dc(0x3f8) : _0x49d5dc(0x2dc);
                                _0x3a9558[_0x49d5dc(0x258)](function () {
                                    const _0x968ec4 = _0x49d5dc;
                                    _0x32738f(this)['on'](_0x968ec4(0x3c5), function () {
                                        const _0x585dfc = _0x968ec4;
                                        if (!_0x32738f(this)['data'](_0x585dfc(0x3d6))) {
                                            let _0x102857 = _0x32738f(this);
                                            _0x102857[_0x585dfc(0x2d1)](_0x585dfc(0x2ca))[_0x585dfc(0x21a)](function () {
                                                return _0x32738f(this)['width']() == _0x102857['width']();
                                            })[_0x585dfc(0x39e)](_0x585dfc(0x295))[_0x585dfc(0x2d3)] === 0x0 ? (_0x32738f(this)[_0x585dfc(0x21f)](_0x585dfc(0x2b4), !![]), _0x130df7 ? _0x2d346d(![]) : _0x388261(![]), _0x22493b('(' + _0x4068c3 + ')', _0x585dfc(0x3b2))) : (_0x32738f(this)[_0x585dfc(0x21f)](_0x585dfc(0x2b4), !![]), _0x22493b('(' + _0x4068c3 + ')', _0x585dfc(0x3d2)));
                                        }
                                    });
                                    var _0xdf4210 = _0x32738f(this);
                                    if (_0x4861ed[_0x968ec4(0x38e)]) {
                                        if (!_0xdf4210[_0x968ec4(0x3d8)]('controls')) {
                                            _0x22493b('(' + _0x4068c3 + ')', 'Added\x20video\x20html5\x20contorller\x20#modify'), this[_0x968ec4(0x1fa)] = _0x1958dd, _0xdf4210['on'](_0x968ec4(0x1dd), function () {
                                                const _0x3fad9d = _0x968ec4;
                                                this[_0x3fad9d(0x1fa)] = _0x1958dd;
                                            });
                                            let _0x3480a2 = _0xdf4210[_0x968ec4(0x2d1)](_0x968ec4(0x256))[_0x968ec4(0x21a)](function () {
                                                    const _0x45b81b = _0x968ec4;
                                                    return _0x32738f(this)[_0x45b81b(0x21f)](_0x45b81b(0x25a)) == null && _0x32738f(this)['attr'](_0x45b81b(0x1eb)) == null;
                                                })['first'](), _0x3f4527 = _0x3480a2['next']();
                                            _0x3f4527['hide']();
                                            let _0x37bd55 = _0x3480a2[_0x968ec4(0x39e)](_0x968ec4(0x1e8));
                                            _0x37bd55['hide']();
                                            const _0xa7683e = function (_0x2b7745) {
                                                const _0x240b7a = _0x968ec4;
                                                _0x2b7745[_0x240b7a(0x324)](), _0xdf4210[_0x240b7a(0x403)](_0x240b7a(0x384), '2'), _0xdf4210['attr'](_0x240b7a(0x3c3), !![]), _0x37bd55[_0x240b7a(0x404)](), _0x3f4527[_0x240b7a(0x404)](), _0x1e46cf(_0xdf4210, _0xdf4210[_0x240b7a(0x2d1)](_0x240b7a(0x2ca))[_0x240b7a(0x21a)](function () {
                                                    const _0xe73d5c = _0x240b7a;
                                                    return _0x32738f(this)[_0xe73d5c(0x3a6)]() == _0xdf4210[_0xe73d5c(0x3a6)]();
                                                })[_0x240b7a(0x42d)](), _0x4068c3, _0x240b7a(0x3b0));
                                            };
                                            _0xdf4210['parent']()[_0x968ec4(0x39e)]('video\x20+\x20div')['on'](_0x968ec4(0x3ca), _0xa7683e), _0x37bd55['on']('contextmenu', _0xa7683e), _0x3f4527['on'](_0x968ec4(0x3ca), _0xa7683e), _0xdf4210['on'](_0x968ec4(0x3ca), function (_0x2b1429) {
                                                const _0x480658 = _0x968ec4;
                                                _0x2b1429[_0x480658(0x324)](), _0xdf4210[_0x480658(0x403)](_0x480658(0x384), '-1'), _0xdf4210[_0x480658(0x252)](_0x480658(0x3c3)), _0x3f4527[_0x480658(0x26c)](), _0x37bd55[_0x480658(0x26c)](), _0x1e46cf(_0xdf4210, _0xdf4210['parents']('div[style][class]')[_0x480658(0x21a)](function () {
                                                    const _0x47ea5c = _0x480658;
                                                    return _0x32738f(this)[_0x47ea5c(0x3a6)]() == _0xdf4210[_0x47ea5c(0x3a6)]();
                                                })[_0x480658(0x42d)](), _0x4068c3, _0x480658(0x3b0));
                                            }), _0xdf4210['on'](_0x968ec4(0x246), function () {
                                                const _0x4c38fd = _0x968ec4;
                                                let _0x39cc42 = _0x3480a2[_0x4c38fd(0x3a5)]()[_0x4c38fd(0x39e)](_0x4c38fd(0x285))[_0x4c38fd(0x2d1)](_0x4c38fd(0x2a6))[_0x4c38fd(0x42d)]();
                                                var _0x5655e5 = _0x39cc42[_0x4c38fd(0x39e)]('svg\x20>\x20path[d^=\x22M16.636\x22]')['length'] === 0x0;
                                                this['muted'] != _0x5655e5 && (this[_0x4c38fd(0x1fa)] = _0x1958dd, _0x39cc42?.['click']()), _0x32738f(this)[_0x4c38fd(0x21f)]('data-completed') && (_0x1958dd = this[_0x4c38fd(0x1fa)], GM_setValue('G_VIDEO_VOLUME', this[_0x4c38fd(0x1fa)])), this[_0x4c38fd(0x1fa)] == _0x1958dd && _0x32738f(this)['attr']('data-completed', !![]);
                                            }), _0xdf4210[_0x968ec4(0x403)](_0x968ec4(0x31f), _0x968ec4(0x3f0)), _0xdf4210[_0x968ec4(0x403)](_0x968ec4(0x384), '2'), _0xdf4210[_0x968ec4(0x21f)](_0x968ec4(0x418), !![]), _0xdf4210[_0x968ec4(0x21f)](_0x968ec4(0x3c3), !![]);
                                        }
                                    } else
                                        _0x1e46cf(_0xdf4210, _0xdf4210[_0x968ec4(0x2d1)](_0x968ec4(0x2ca))['filter'](function () {
                                            const _0x10159a = _0x968ec4;
                                            return _0x32738f(this)[_0x10159a(0x3a6)]() == _0xdf4210[_0x10159a(0x3a6)]();
                                        })[_0x968ec4(0x42d)](), _0x4068c3, _0x968ec4(0x3b0));
                                });
                            }
                        }
                    });
                }
            });
            _0x2ae7d6['observe'](_0x32738f(_0x1f7e8a(0x356))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x17d3() {
    const _0x17d0e7 = [
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'G_VIDEO_VOLUME',
        'which',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'canDownload',
        'getDate',
        'NEW_TAB',
        'replaceAll',
        'next',
        'blob',
        'content',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'location',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'NO_VID_URL',
        '</div></div>',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'BATCH_DOWNLOAD_DIRECT',
        '42cNYwpP',
        '__typename',
        'LOAD_BLOB_RELOAD',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'data-remove-thumbnail',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        '\x22\x20data-globalIndex=\x22',
        'trim',
        '0px',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        'candidates',
        'getBlobMediaWithQueryID()',
        'load',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'log',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        '2-digit',
        'data-href',
        'Settings',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'div[id^=\x22mount\x22]',
        'profile_pic_url',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        '#_SNLOAD',
        'stringify',
        'a[data-needed=\x22direct\x22]',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        '</div>',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        '</a></button>',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'version',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'https://ko-fi.com/snkoarashi',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'shortcode_media',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        '.IG_SN_DIG\x20#post_info',
        'Download\x20Selected\x20Resources',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        '.IG_DWNEWTAB',
        '._acnb',
        'padStart',
        '8caNkAc',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        '_blank',
        'DISABLE_VIDEO_LOOPING',
        '<a\x20datetime=\x22',
        'img',
        'data-username',
        'Main\x20Timer',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'close',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '._acay\x20._acaz',
        '--ig-track-progress:\x20',
        'GraphImage',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'svg',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'stopPropagation',
        'z-index',
        'disconnect',
        'Checking\x20for\x20Updates',
        'createObjectURL',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'getFullYear',
        'remove',
        'isProfile',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'HTML5_VIDEO_CONTROL',
        'substr',
        'x1iyjqo2',
        'object',
        'reels_media',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        'scontent.cdninstagram.com',
        'px;\x22>',
        'Loading\x20Blob\x20Media...',
        'G_CHECK_TIMESTAMP',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'val',
        'padEnd',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        '</option>',
        'find',
        'responseText',
        'owner',
        'toString',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'ig_cache_key',
        'parent',
        'width',
        'muted',
        'response',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        '</span>\x20',
        'Current\x20version:\x20',
        'bottom',
        '.SNKMS_IG_NEWTAB_MAIN',
        'hd_profile_pic_url_info',
        'hostname',
        'vertical',
        'isReels',
        'Manually\x20inserting\x20thumbnail\x20button',
        'there\x20is\x20no\x20new\x20update',
        'url',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        'div\x20>\x20ul._acay',
        'Fetch\x20from\x20memory\x20cache:',
        '[data-ih-locale-title]',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'toISOString',
        'taken_at',
        'FORCE_RESOURCE_VIA_MEDIA',
        'select',
        'username',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'NONE',
        '._aagv\x20img',
        'shortcode',
        'controls',
        'getHours',
        'timeupdate',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        'contextmenu',
        '<input\x20value=\x22',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'DONATE',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'mp4',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'Thumbnail\x20button\x20already\x20inserted',
        'tagName',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'last',
        'modify-thumbnail',
        'Checking\x20for\x20Script\x20Updates',
        'data',
        'jpg',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'children',
        'THUMBNAIL_INTRO',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'label',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        '.txt',
        'SKIP_VIEW_STORY_CONFIRM',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'video',
        'div:not([class]):not([style])',
        '\x22\x20class=\x22newTab\x22>',
        '<div\x20class=\x22IG_SN_DIG\x20',
        'taken_at_timestamp',
        'THUMBNAIL',
        '<option\x20value=\x22',
        '\x0a-----\x0a\x0aLocation:\x20',
        'LOAD_BLOB_ONE',
        '\x20-</a>',
        'absolute',
        'Show\x20DOM\x20Tree',
        'trigging',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'IG\x20Debug\x20DOM\x20Tree',
        'push',
        'logger\x20sliced',
        'Open\x20in\x20New\x20Tab',
        'highlight',
        '\x22\x20title=\x22',
        'faild',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        '.SNKMS_IG_DW_MAIN',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'data-modify',
        '37px',
        'FEEDBACK',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'floor',
        'css',
        'hide',
        '<label\x20class=\x22globalSettings',
        'reject',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '#tempWrapper',
        'user',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        '833388tLqpgp',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'getSeconds',
        'remove-thumbnail',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'textContent',
        'img[referrerpolicy]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'selected',
        'data-controls',
        'script',
        'userAgent',
        'display_resources',
        '2230690cznBQy',
        'REPORT_FORK',
        'removeClass',
        'text',
        'error',
        'input',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        'keyCode',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'Reload\x20Script',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'regenerated',
        'type',
        'node',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'height',
        '</a>',
        'first',
        'altKey',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'replace',
        'target',
        'prop',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        'Wololo!\x20New\x20version\x20released.',
        '\x22]\x20span',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'display_url',
        'keydown',
        'VID',
        'datetime',
        '.xpgaw4o',
        'stories',
        'media-id',
        'host',
        'video_resources',
        'instagram.com/reels/',
        'message',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'isHomepage',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'FORCE_FETCH_ALL_RESOURCES',
        '289767UBhMRf',
        'mouseenter',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        '%22}',
        'highlights',
        'users',
        'loadstart',
        'Disable\x20Video\x20Auto-looping',
        '*/*',
        'LOAD_BLOB_MULTIPLE',
        'div.volume_slider\x20input',
        'DOWNLOAD_DOM_TREE',
        'SETTING',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'href',
        'getTranslationText()',
        'div[class][role=\x22button\x22]',
        'prev',
        'reduce',
        'style',
        'video_url',
        'onReadyMyDW()\x20Timer',
        '<a\x20media-id=\x22',
        'https://www.instagram.com/web/search/topsearch/?query=',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        'getBlobMediaWithQuery()',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'video\x20volume\x20changed\x20#slider',
        '.IG_DWSTORY',
        '\x22\x20/>',
        '6820120jlzVnW',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'getMinutes',
        'volume',
        'Select\x20All',
        'GET',
        'avatar',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'status',
        'INTERNAL_CSS',
        'copy',
        'li._acaz',
        '_INTRO',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'range',
        'get',
        '\x22\x20data-ih-locale-title=\x22',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'GraphVideo',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        '.IG_DWSTORY_THUMBNAIL',
        'items',
        'checked',
        'ALL_CHECK',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'Request\x20with:',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'relative',
        'after',
        'filter',
        'Donate',
        'before',
        'change',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'attr',
        'getHighlightStories()',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'CHECK_UPDATE_MENU',
        'smooth',
        'section\x20>\x20main[role=\x22main\x22]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'DEBUG',
        'edge_sidecar_to_children',
        'srcset',
        '207293rBeYNS',
        '.IG_REELS_NEWTAB',
        'match',
        'text/plain',
        'Found\x20insert\x20point',
        'split',
        'setAttribute',
        'body\x20>\x20div\x20section._ac0a',
        'button[role=\x22menuitem\x22]',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'parse',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'data-type',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'mousedown',
        'thumbnail',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'REPORT_GITHUB',
        'finalUrl',
        'query_id',
        '.IG_DWHINEWTAB',
        'NOPATH',
        'volumechange',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        '</span>\x20<input\x20id=\x22',
        'MODIFY_VIDEO_VOLUME',
        '18uXuiBb',
        'appendChild',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'join',
        'a[href^=\x22/p/\x22]',
        'html',
        'getStories()',
        'lang',
        'removeAttr',
        '.json',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'downloadURL',
        'div',
        'is_video',
        'each',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'class',
        'RELOAD_SCRIPT',
        'code',
        'addClass',
        'getUserId()',
        'Can\x20not\x20find\x20download\x20url.',
        '286eTqKLQ',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        '#locatePreview',
        '4wRtNFf',
        '._acay\x20+\x20.x24i39r',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '#scrollWrapper',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        'fadeOut',
        'click',
        'BATCH_DOWNLOAD_SELECTED',
        'IMG',
        'show',
        'play\x20playing',
        'script[type=\x22application/json\x22]',
        '#article-id',
        'x1lix1fw',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'wrap',
        'data-snig',
        '</button>',
        'updatenotification',
        'https://www.instagram.com/',
        '128665mPUWLz',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '_ac3q',
        'pathname',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'data-name',
        'ig_helper_notice',
        'cursor',
        'undefined',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'https://i.instagram.com/api/v1/users/',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'getBlobMedia()',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'DIRECT_DOWNLOAD_ALL',
        'div#scrollview',
        'boolean',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'div.volume_slider',
        'https://www.instagram.com/p/',
        '.IG_SN_DIG',
        'Request\x20failed\x20with\x20API\x20response\x20',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'modify',
        'catch',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'download',
        'G_LOCATE_DATE_FORMAT',
        '[data-snig]',
        'xdt_api__v1__media__shortcode__web_info',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'Image',
        'toLowerCase',
        'toUpperCase',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        '.IG_DWHISTORY_THUMBNAIL',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'Download\x20All\x20Resources',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'numeric',
        'div[role=\x22presentation\x22]',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '[role=\x22button\x22]',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '.IG_DWHISTORY',
        'searchParams',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'Found\x20post\x20container',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'video\x20+\x20div\x20>\x20div',
        '[data-ih-locale]',
        'getPostOwner()',
        'G_RENAME_FORMAT',
        'data-modify-thumbnail',
        '/accounts/login',
        '\x22\x20datetime=\x22',
        'DIV',
        'isArray',
        'body\x20>\x20div\x20section:visible._ac0a',
        '20000',
        'edges',
        'article',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
        'getTime',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'data-ih-locale',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'feedback_message',
        'getMediaInfo()',
        'body',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'innerHTML',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'div[style][class]',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'query_hash',
        'isIntersecting',
        'div:last-child',
        'hasClass',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'parents',
        'addedNodes',
        'length',
        'sort',
        'navigator',
        'forEach',
        'hasReferrer',
        'observe',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'px;top:',
        'hidden',
        'story',
        'GM_unregisterMenuCommand',
        'createElement',
        'NOTICE_UPDATE_CONTENT',
        'div\x20>\x20ul\x20li._acaz',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        'RENAME_PUBLISH_DATE',
        '.IG_DWPROFILE',
        'title',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'append',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        ':hidden',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'data-path',
        'keys',
        '.IG_REELS_THUMBNAIL',
        '.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN',
        'x1s85apg',
        '</p>',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'DOWNLOAD',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        '\x20child',
        '</span></label>',
        'fail',
        '.IG_SN_DIG\x20input',
        'startsWith',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'isDialog',
        'slice',
        'isStory',
        'data-loop',
        '<div></div>',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'execCommand',
        'data-completed',
        'carousel_media',
        'then',
        'DOMTree-',
        'video[class]',
        'loop',
        'AUTO_RENAME',
        'map',
        'SHOW_DOM_TREE',
        'getTranslationText\x20catch\x20error:',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'main\x20timer\x20re-register\x20completed',
        'src',
        'https://i.instagram.com/api/v1/media/',
        'CLOSE',
        'pause',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'user\x20settings',
        'Feedback\x20Options',
        'getUserIdWithAgent()',
        'getUserHighSizeProfile()',
        'post',
        'video_versions',
        'div#splash-screen',
        'en-US',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        '_acnf',
        'pointer',
        'position',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'https://www.instagram.com/reel/',
        'image_versions2',
        'Video',
        'preventDefault',
        '3293330TelRZs',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'top',
        'reels'
    ];
    a0_0x17d3 = function () {
        return _0x17d0e7;
    };
    return a0_0x17d3();
}