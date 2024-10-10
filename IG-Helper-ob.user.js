// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            2.36.7
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

(function (_0x8009e1, _0x427770) {
    const _0xa13adc = a0_0x1751, _0x4851d2 = _0x8009e1();
    while (!![]) {
        try {
            const _0x569c2a = -parseInt(_0xa13adc(0x197)) / 0x1 * (parseInt(_0xa13adc(0x249)) / 0x2) + -parseInt(_0xa13adc(0x311)) / 0x3 * (parseInt(_0xa13adc(0x2b1)) / 0x4) + -parseInt(_0xa13adc(0x31d)) / 0x5 * (parseInt(_0xa13adc(0x2cb)) / 0x6) + parseInt(_0xa13adc(0x17e)) / 0x7 + parseInt(_0xa13adc(0x12a)) / 0x8 + parseInt(_0xa13adc(0x340)) / 0x9 * (-parseInt(_0xa13adc(0x2db)) / 0xa) + -parseInt(_0xa13adc(0x369)) / 0xb * (-parseInt(_0xa13adc(0x2eb)) / 0xc);
            if (_0x569c2a === _0x427770)
                break;
            else
                _0x4851d2['push'](_0x4851d2['shift']());
        } catch (_0x21aeaa) {
            _0x4851d2['push'](_0x4851d2['shift']());
        }
    }
}(a0_0x327c, 0xc7f33), function (_0x53b594) {
    setTimeout(() => {
        const _0x5316ce = a0_0x1751;
        setInterval(() => {
            _0xa4a0c4?.();
        }, 0x927c0), 'use\x20strict';
        const _0x3b7dee = {
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
            }, _0x23f3fc = [
                _0x5316ce(0x141),
                _0x5316ce(0x22d),
                _0x5316ce(0x28c)
            ];
        var _0x75a760 = GM_getValue(_0x5316ce(0x21d)) ? GM_getValue('G_VIDEO_VOLUME') : 0x1, _0x525d5c = ![], _0x59af11 = GM_getValue(_0x5316ce(0x1cd)) ? GM_getValue(_0x5316ce(0x1cd)) : _0x5316ce(0x152);
        const _0x559a71 = {
                'DOWNLOAD': _0x5316ce(0x304),
                'NEW_TAB': _0x5316ce(0x224),
                'THUMBNAIL': _0x5316ce(0x272),
                'CLOSE': _0x5316ce(0x29a)
            }, _0x27d21d = 0xfa, _0x45cc66 = GM_getResourceText(_0x5316ce(0x35f)), _0x5a964e = JSON[_0x5316ce(0x2ef)](GM_getResourceText(_0x5316ce(0x166)));
        var _0x442cc4 = [], _0x22467b = {}, _0xd94306 = GM_getValue(_0x5316ce(0x1c5)) || navigator[_0x5316ce(0x23e)] || navigator[_0x5316ce(0x1e4)], _0x208afc = location[_0x5316ce(0x2b6)], _0x485061 = ![], _0x5bce0a = ![], _0x255875 = [], _0x5e073f, _0x4e1e1e, _0x4bbab3, _0x420c96, _0x2934e5 = {
                'stories': {},
                'highlights': {}
            }, _0x2891ce = new MutationObserver(function (_0x4c11aa, _0x39f9f4) {
                _0x1e08eb();
            });
        _0x4e159d(), GM_addStyle(_0x45cc66), _0xcff70b(), _0x409b98(_0xd94306)[_0x5316ce(0x134)](_0x5e79c9 => {
            _0x22467b[_0xd94306] = _0x5e79c9, _0xbcaa21(), _0xcff70b(), _0x26de89(0x12c);
        })[_0x5316ce(0x207)](_0x1aaa19 => {
            const _0x48d324 = _0x5316ce;
            _0xcff70b(), _0x26de89(0x12c), !_0xd94306[_0x48d324(0x2d5)]('en') && console['error'](_0x48d324(0x17d), _0x1aaa19);
        });
        var _0x18db8b = setInterval(function () {
            const _0x4ae7f7 = _0x5316ce;
            if (_0x53b594('div#splash-screen')['length'] > 0x0 && !_0x53b594(_0x4ae7f7(0x215))['is'](_0x4ae7f7(0x1e2)) || location[_0x4ae7f7(0x1a3)]['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x4ae7f7(0x138)]['startsWith'](_0x4ae7f7(0x1a8))) {
                _0x5bce0a = ![];
                return;
            }
            if (_0x208afc != location['href'] || !_0x485061 || !_0x5bce0a) {
                console[_0x4ae7f7(0x2a8)](_0x4ae7f7(0x185), _0x4ae7f7(0x28d)), clearInterval(_0x420c96), _0x5bce0a = ![], _0x485061 = !![], _0x208afc = location[_0x4ae7f7(0x2b6)], _0x2891ce['disconnect']();
                if (location[_0x4ae7f7(0x2b6)][_0x4ae7f7(0x2d5)](_0x4ae7f7(0x27d)) || location[_0x4ae7f7(0x1a3)][_0x4ae7f7(0x179)](/^\/(.*?)\/p\//ig) || location[_0x4ae7f7(0x2b6)][_0x4ae7f7(0x2d5)](_0x4ae7f7(0x1ec))) {
                    _0x2934e5[_0x4ae7f7(0x26a)] = {}, _0x5c41ca(_0x4ae7f7(0x200));
                    var _0x40bc7a = setInterval(() => {
                        const _0x541913 = _0x4ae7f7;
                        _0x53b594(_0x541913(0x206))['length'] > 0x0 && (clearInterval(_0x40bc7a), setTimeout(() => {
                            _0x1e08eb(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x5bce0a = !![];
                }
                location['href']['startsWith']('https://www.instagram.com/reels/') && (_0x5c41ca(_0x4ae7f7(0x22a)), setTimeout(() => {
                    _0x46038a(![]);
                }, 0x96), _0x5bce0a = !![]);
                if (location[_0x4ae7f7(0x2b6)][_0x4ae7f7(0x228)]('?')[0x0] == _0x4ae7f7(0x17c)) {
                    _0x2934e5[_0x4ae7f7(0x26a)] = {};
                    let _0x5a3f23 = _0x5e073f?.[_0x4ae7f7(0x179)](/^\/stories\//ig) != null;
                    _0x5c41ca(_0x4ae7f7(0x1e0), _0x5a3f23), setTimeout(() => {
                        const _0xd6d47e = _0x4ae7f7;
                        _0x1e08eb(![], _0x5a3f23);
                        const _0x3df1fc = _0x53b594(_0xd6d47e(0x147))?.[_0xd6d47e(0x218)]()[0x0];
                        _0x3df1fc && _0x2891ce[_0xd6d47e(0x25f)](_0x3df1fc, { 'childList': !![] });
                    }, 0x96), _0x5bce0a = !![];
                }
                _0x53b594(_0x4ae7f7(0x170))[_0x4ae7f7(0x2d2)] && location[_0x4ae7f7(0x1a3)][_0x4ae7f7(0x179)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname'][_0x4ae7f7(0x179)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x5c41ca(_0x4ae7f7(0x1d1)), setTimeout(() => {
                    _0x3fadcc(![]);
                }, 0x96), _0x5bce0a = !![]);
                if (!_0x5bce0a) {
                    if (location[_0x4ae7f7(0x2b6)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig)) {
                        _0x2934e5[_0x4ae7f7(0x2d0)] = {}, _0x5c41ca(_0x4ae7f7(0x232)), _0x443b0e(![]), _0x420c96 = setInterval(() => {
                            _0x1aef2e(![]);
                        }, _0x27d21d);
                        _0x53b594('.IG_DWHISTORY')['length'] && setTimeout(() => {
                            const _0xf072aa = _0x4ae7f7;
                            if (_0x3b7dee[_0xf072aa(0x1f0)]) {
                                var _0x46e325 = _0x53b594(_0xf072aa(0x25e))[_0xf072aa(0x155)](function () {
                                    const _0x30ee44 = _0xf072aa;
                                    return _0x53b594(this)['children']()[_0x30ee44(0x2d2)] === 0x0;
                                });
                                _0x46e325?.['click']();
                            }
                            _0x5bce0a = !![];
                        }, 0x96);
                        ;
                    } else
                        location[_0x4ae7f7(0x2b6)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x5c41ca('isStory'), _0x53b594(_0x4ae7f7(0x25c))[_0x4ae7f7(0x2d2)] > 0x0 && (_0x53b594(_0x4ae7f7(0x16e))[_0x4ae7f7(0x315)](), _0x53b594(_0x4ae7f7(0x231))[_0x4ae7f7(0x315)](), _0x53b594(_0x4ae7f7(0x11c))[_0x4ae7f7(0x2d2)] && _0x53b594(_0x4ae7f7(0x11c))[_0x4ae7f7(0x315)](), _0x2f3d38(![]), setTimeout(() => {
                            _0x2f3d38(![]);
                        }, 0x96)), _0x53b594('.IG_DWSTORY')[_0x4ae7f7(0x2d2)] && setTimeout(() => {
                            const _0xe35ac = _0x4ae7f7;
                            if (_0x3b7dee[_0xe35ac(0x1f0)]) {
                                var _0x5cb0af = _0x53b594('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')[_0xe35ac(0x155)](function () {
                                    return _0x53b594(this)['children']()['length'] === 0x0;
                                });
                                _0x5cb0af?.[_0xe35ac(0x13c)]();
                            }
                            _0x5bce0a = !![];
                        }, 0x96)) : (_0x5bce0a = ![], _0x53b594(_0x4ae7f7(0x16e))[_0x4ae7f7(0x315)](), _0x53b594(_0x4ae7f7(0x231))['remove'](), _0x53b594(_0x4ae7f7(0x11c))[_0x4ae7f7(0x2d2)] && _0x53b594(_0x4ae7f7(0x11c))[_0x4ae7f7(0x315)]());
                }
                _0x26de89(0x12c), _0x5e073f = new URL(location[_0x4ae7f7(0x2b6)])['pathname'];
            }
        }, _0x27d21d);
        async function _0x3fadcc(_0x2989d7) {
            const _0x19c2fb = _0x5316ce;
            if (_0x2989d7) {
                _0x5092f9(!![]);
                let _0x184f53 = new Date()['getTime'](), _0x4b0a31 = Math['floor'](_0x184f53 / 0x3e8), _0x2e70ef = location[_0x19c2fb(0x1a3)][_0x19c2fb(0x2bd)](/(reels|tagged)\/$/ig, '')[_0x19c2fb(0x228)]('/')[_0x19c2fb(0x155)](_0xdcd0d1 => _0xdcd0d1[_0x19c2fb(0x2d2)] > 0x0)['at'](-0x1), _0x17a657 = await _0x480555(_0x2e70ef);
                try {
                    let _0x40f740 = await _0x576fec(_0x17a657['user']['pk']);
                    _0xba9ba9(_0x40f740, _0x2e70ef, _0x19c2fb(0x290), _0x4b0a31, _0x19c2fb(0x258));
                } catch (_0x46e219) {
                    _0xba9ba9(_0x17a657['user'][_0x19c2fb(0x16d)], _0x2e70ef, 'avatar', _0x4b0a31, _0x19c2fb(0x258));
                }
                _0x5092f9(![]);
            } else {
                if (!_0x53b594(_0x19c2fb(0x196))[_0x19c2fb(0x2d2)]) {
                    let _0x4626f5 = setInterval(() => {
                        const _0x2c0608 = _0x19c2fb;
                        if (_0x53b594('.IG_DWPROFILE')[_0x2c0608(0x2d2)]) {
                            clearInterval(_0x4626f5);
                            return;
                        }
                        _0x53b594(_0x2c0608(0x18b))[_0x2c0608(0x218)]()[_0x2c0608(0x218)]()[_0x2c0608(0x156)](_0x2c0608(0x229) + _0x3aaf72('DW') + _0x2c0608(0x14a) + _0x559a71[_0x2c0608(0x159)] + _0x2c0608(0x327)), _0x53b594(_0x2c0608(0x18b))['parent']()[_0x2c0608(0x218)]()[_0x2c0608(0x305)]('position', _0x2c0608(0x2f6)), _0x53b594(_0x2c0608(0x1ce))[_0x2c0608(0x218)]()[_0x2c0608(0x218)]()[_0x2c0608(0x218)]()[_0x2c0608(0x156)](_0x2c0608(0x229) + _0x3aaf72('DW') + _0x2c0608(0x14a) + _0x559a71['DOWNLOAD'] + _0x2c0608(0x327)), _0x53b594(_0x2c0608(0x1ce))['parent']()['parent']()[_0x2c0608(0x218)]()[_0x2c0608(0x305)](_0x2c0608(0x2b0), _0x2c0608(0x2f6));
                    }, 0x96);
                }
            }
        }
        async function _0x443b0e(_0x47a92f, _0x423139) {
            const _0x2cbb4d = _0x5316ce;
            if (_0x47a92f) {
                let _0x43db30 = new Date()['getTime'](), _0x3321ff = Math[_0x2cbb4d(0x34e)](_0x43db30 / 0x3e8), _0x461bf0 = location[_0x2cbb4d(0x2b6)][_0x2cbb4d(0x2c6)](/\/$/ig, '')[_0x2cbb4d(0x228)]('/')['at'](-0x1), _0x4c7bd3 = _0x53b594(_0x2cbb4d(0x26d))[_0x2cbb4d(0x2d2)] || _0x53b594('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x2cbb4d(0x2d2)] || _0x53b594(_0x2cbb4d(0x1a0))['find']('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x2cbb4d(0x2d2)], _0x2e15cf = '', _0x221d2a = 0x0;
                _0x5092f9(!![]);
                if (_0x2934e5[_0x2cbb4d(0x2d0)][_0x461bf0]) {
                    _0x5c41ca(_0x2cbb4d(0x148), _0x461bf0);
                    let _0x445449 = _0x2934e5[_0x2cbb4d(0x2d0)][_0x461bf0]['data'][_0x2cbb4d(0x330)][0x0]['items'][_0x2cbb4d(0x2d2)];
                    _0x2e15cf = _0x2934e5['highlights'][_0x461bf0][_0x2cbb4d(0x21b)]['reels_media'][0x0][_0x2cbb4d(0x279)][_0x2cbb4d(0x1b0)], _0x221d2a = _0x2934e5[_0x2cbb4d(0x2d0)][_0x461bf0][_0x2cbb4d(0x21b)][_0x2cbb4d(0x330)][0x0]['items'][_0x445449 - _0x4c7bd3];
                } else {
                    let _0x1f76b1 = await _0x2a61f8(_0x461bf0), _0x5d35f3 = _0x1f76b1[_0x2cbb4d(0x21b)][_0x2cbb4d(0x330)][0x0][_0x2cbb4d(0x335)][_0x2cbb4d(0x2d2)];
                    _0x2e15cf = _0x1f76b1['data'][_0x2cbb4d(0x330)][0x0][_0x2cbb4d(0x279)]['username'], _0x221d2a = _0x1f76b1[_0x2cbb4d(0x21b)][_0x2cbb4d(0x330)][0x0]['items'][_0x5d35f3 - _0x4c7bd3], _0x2934e5[_0x2cbb4d(0x2d0)][_0x461bf0] = _0x1f76b1;
                }
                _0x3b7dee[_0x2cbb4d(0x141)] && (_0x3321ff = _0x221d2a[_0x2cbb4d(0x2c1)]);
                if (_0x3b7dee[_0x2cbb4d(0x30c)] && !_0x525d5c) {
                    let _0x428ea7 = await _0x293560(_0x221d2a['id']);
                    _0x428ea7[_0x2cbb4d(0x15f)] === 'ok' ? _0x428ea7[_0x2cbb4d(0x335)][0x0][_0x2cbb4d(0x32a)] ? _0x423139 ? _0x1f2cb7(_0x428ea7[_0x2cbb4d(0x335)][0x0][_0x2cbb4d(0x32a)][0x0][_0x2cbb4d(0x14b)]) : _0xba9ba9(_0x428ea7[_0x2cbb4d(0x335)][0x0][_0x2cbb4d(0x32a)][0x0][_0x2cbb4d(0x14b)], _0x2e15cf, 'highlights', _0x3321ff, _0x2cbb4d(0x22c)) : _0x423139 ? _0x1f2cb7(_0x428ea7[_0x2cbb4d(0x335)][0x0]['image_versions2'][_0x2cbb4d(0x291)][0x0]['url']) : _0xba9ba9(_0x428ea7[_0x2cbb4d(0x335)][0x0][_0x2cbb4d(0x13f)][_0x2cbb4d(0x291)][0x0]['url'], _0x2e15cf, _0x2cbb4d(0x2d0), _0x3321ff, 'jpg') : (_0x3b7dee[_0x2cbb4d(0x22d)] ? (delete _0x2934e5[_0x2cbb4d(0x2d0)][_0x461bf0], _0x525d5c = !![], _0x443b0e(!![], _0x423139)) : alert(_0x2cbb4d(0x293) + _0x428ea7['message']), _0x5c41ca(_0x428ea7));
                } else
                    _0x221d2a['is_video'] ? _0x423139 ? _0x1f2cb7(_0x221d2a[_0x2cbb4d(0x2f4)]['at'](-0x1)['src'], _0x2e15cf) : _0xba9ba9(_0x221d2a['video_resources']['at'](-0x1)[_0x2cbb4d(0x2d8)], _0x2e15cf, _0x2cbb4d(0x2d0), _0x3321ff, _0x2cbb4d(0x22c), _0x461bf0) : _0x423139 ? _0x1f2cb7(_0x221d2a[_0x2cbb4d(0x368)]['at'](-0x1)['src'], _0x2e15cf) : _0xba9ba9(_0x221d2a[_0x2cbb4d(0x368)]['at'](-0x1)[_0x2cbb4d(0x2d8)], _0x2e15cf, _0x2cbb4d(0x2d0), _0x3321ff, _0x2cbb4d(0x258), _0x461bf0), _0x525d5c = ![];
                _0x5092f9(![]);
            } else {
                if (!_0x53b594('.IG_DWHISTORY')['length']) {
                    let _0x2270ad = null;
                    _0x53b594(_0x2cbb4d(0x234))['length'] > 0x0 ? _0x2270ad = _0x53b594(_0x2cbb4d(0x194)) : (_0x2270ad = _0x53b594(_0x2cbb4d(0x2ce)), _0x2270ad[_0x2cbb4d(0x305)](_0x2cbb4d(0x2b0), _0x2cbb4d(0x2f6)));
                    if (_0x2270ad['length'] === 0x0) {
                        let _0x49b1dd = _0x53b594('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x3b6fd0 = 0x0;
                        _0x49b1dd['each'](function () {
                            const _0x2a9f8e = _0x2cbb4d;
                            _0x53b594(this)[_0x2a9f8e(0x2f3)]() > _0x3b6fd0 && (_0x3b6fd0 = _0x53b594(this)[_0x2a9f8e(0x2f3)](), _0x2270ad = _0x53b594(this)[_0x2a9f8e(0x2ca)](_0x2a9f8e(0x1fb))[_0x2a9f8e(0x2f1)]());
                        });
                    }
                    _0x2270ad != null && (_0x2270ad[_0x2cbb4d(0x156)](_0x2cbb4d(0x229) + _0x3aaf72('DW') + _0x2cbb4d(0x25a) + _0x559a71[_0x2cbb4d(0x159)] + _0x2cbb4d(0x327)), _0x2270ad[_0x2cbb4d(0x156)](_0x2cbb4d(0x149) + _0x3aaf72('NEW_TAB') + '\x22\x20class=\x22IG_DWHINEWTAB\x22>' + _0x559a71[_0x2cbb4d(0x308)] + _0x2cbb4d(0x327)), _0x3b7dee['MODIFY_VIDEO_VOLUME'] && _0x2270ad['find'](_0x2cbb4d(0x2ec))[_0x2cbb4d(0x36a)](function () {
                        const _0x37dc5a = _0x2cbb4d;
                        !_0x53b594(this)['data'](_0x37dc5a(0x31b)) && (_0x5c41ca('(highlight)\x20Added\x20video\x20event\x20listener\x20#modify'), this['volume'] = _0x75a760, _0x53b594(this)['on'](_0x37dc5a(0x317), function () {
                            const _0x4d6160 = _0x37dc5a;
                            this[_0x4d6160(0x145)] = _0x75a760;
                        }), _0x53b594(this)['on']('playing', function () {
                            const _0x44516c = _0x37dc5a;
                            this[_0x44516c(0x145)] = _0x75a760;
                        }), _0x53b594(this)[_0x37dc5a(0x256)](_0x37dc5a(0x328), !![]));
                    }));
                }
            }
        }
        async function _0x1aef2e(_0x11e962) {
            const _0x478da4 = _0x5316ce;
            if (_0x11e962) {
                let _0x13d53f = new Date()[_0x478da4(0x275)](), _0x4035e1 = Math['floor'](_0x13d53f / 0x3e8), _0x1540d9 = location['href']['replace'](/\/$/ig, '')[_0x478da4(0x228)]('/')['at'](-0x1), _0x29b8e8 = '', _0x51c7b6 = _0x53b594(_0x478da4(0x26d))[_0x478da4(0x2d2)] || _0x53b594(_0x478da4(0x208))[_0x478da4(0x2d2)] || _0x53b594(_0x478da4(0x1a0))[_0x478da4(0x22e)](_0x478da4(0x216))[_0x478da4(0x2d2)], _0x53b384 = '';
                _0x5092f9(!![]);
                if (_0x2934e5[_0x478da4(0x2d0)][_0x1540d9]) {
                    _0x5c41ca(_0x478da4(0x148), _0x1540d9);
                    let _0x2a7ed4 = _0x2934e5[_0x478da4(0x2d0)][_0x1540d9][_0x478da4(0x21b)][_0x478da4(0x330)][0x0][_0x478da4(0x335)][_0x478da4(0x2d2)];
                    _0x29b8e8 = _0x2934e5[_0x478da4(0x2d0)][_0x1540d9][_0x478da4(0x21b)][_0x478da4(0x330)][0x0][_0x478da4(0x279)]['username'], _0x53b384 = _0x2934e5['highlights'][_0x1540d9][_0x478da4(0x21b)][_0x478da4(0x330)][0x0][_0x478da4(0x335)][_0x2a7ed4 - _0x51c7b6];
                } else {
                    let _0x57f260 = await _0x2a61f8(_0x1540d9), _0x475e4f = _0x57f260[_0x478da4(0x21b)][_0x478da4(0x330)][0x0][_0x478da4(0x335)][_0x478da4(0x2d2)];
                    _0x29b8e8 = _0x57f260[_0x478da4(0x21b)][_0x478da4(0x330)][0x0][_0x478da4(0x279)]['username'], _0x53b384 = _0x57f260[_0x478da4(0x21b)][_0x478da4(0x330)][0x0][_0x478da4(0x335)][_0x475e4f - _0x51c7b6], _0x2934e5[_0x478da4(0x2d0)][_0x1540d9] = _0x57f260;
                }
                _0x3b7dee[_0x478da4(0x141)] && (_0x4035e1 = _0x53b384['taken_at_timestamp']);
                if (_0x3b7dee['FORCE_RESOURCE_VIA_MEDIA'] && !_0x525d5c) {
                    let _0x26163f = await _0x293560(_0x53b384['id']);
                    _0x26163f[_0x478da4(0x15f)] === 'ok' ? _0xba9ba9(_0x26163f[_0x478da4(0x335)][0x0][_0x478da4(0x13f)]['candidates'][0x0]['url'], _0x29b8e8, _0x478da4(0x2d0), _0x4035e1, _0x478da4(0x258)) : (_0x3b7dee[_0x478da4(0x22d)] ? (delete _0x2934e5['highlights'][_0x1540d9], _0x525d5c = !![], _0x1aef2e(!![])) : alert(_0x478da4(0x293) + _0x26163f[_0x478da4(0x171)]), _0x5c41ca(_0x26163f));
                } else
                    _0xba9ba9(_0x53b384[_0x478da4(0x368)]['at'](-0x1)[_0x478da4(0x2d8)], _0x29b8e8, 'highlights', _0x4035e1, 'jpg', _0x1540d9), _0x525d5c = ![];
                _0x5092f9(![]);
            } else {
                if (_0x53b594(_0x478da4(0x2ff))['length']) {
                    if (!_0x53b594('.IG_DWHISTORY_THUMBNAIL')['length']) {
                        let _0x2ce407 = null;
                        _0x53b594(_0x478da4(0x234))[_0x478da4(0x2d2)] > 0x0 ? _0x2ce407 = _0x53b594(_0x478da4(0x194)) : (_0x2ce407 = _0x53b594(_0x478da4(0x2ce)), _0x2ce407[_0x478da4(0x305)](_0x478da4(0x2b0), 'relative'));
                        if (_0x2ce407[_0x478da4(0x2d2)] === 0x0) {
                            let _0x47ce47 = _0x53b594(_0x478da4(0x1b7)), _0x14f1cd = 0x0;
                            _0x47ce47[_0x478da4(0x36a)](function () {
                                const _0x11affc = _0x478da4;
                                _0x53b594(this)['width']() > _0x14f1cd && (_0x14f1cd = _0x53b594(this)[_0x11affc(0x2f3)](), _0x2ce407 = _0x53b594(this)[_0x11affc(0x2ca)](_0x11affc(0x1fb))[_0x11affc(0x2f1)]());
                            });
                        }
                        _0x2ce407 != null && _0x2ce407[_0x478da4(0x156)](_0x478da4(0x278) + _0x3aaf72(_0x478da4(0x1ea)) + _0x478da4(0x321) + _0x559a71[_0x478da4(0x2e5)] + _0x478da4(0x327));
                    }
                } else
                    _0x53b594('.IG_DWHISTORY_THUMBNAIL')[_0x478da4(0x315)]();
            }
        }
        async function _0x2f3d38(_0x5224c8, _0xd20160, _0xf6f581) {
            const _0x5e3685 = _0x5316ce;
            if (_0x5224c8) {
                let _0x3afd9a = new Date()[_0x5e3685(0x275)](), _0x154a58 = Math['floor'](_0x3afd9a / 0x3e8), _0x53c4ca = _0x53b594(_0x5e3685(0x1ca))[_0x5e3685(0x2f1)]()['text']() || location[_0x5e3685(0x1a3)][_0x5e3685(0x228)]('/')['filter'](_0x52f37c => _0x52f37c[_0x5e3685(0x2d2)] > 0x0)['at'](0x1);
                _0x5092f9(!![]);
                if (_0x3b7dee[_0x5e3685(0x30c)] && !_0x525d5c) {
                    let _0x408b35 = null, _0x14cad1 = await _0x480555(_0x53c4ca), _0x140fb8 = _0x14cad1[_0x5e3685(0x1a6)]['pk'], _0x489cb3 = await _0x2f9068(_0x140fb8), _0x2e71b5 = location['pathname'][_0x5e3685(0x228)]('/')[_0x5e3685(0x155)](_0x432359 => _0x432359[_0x5e3685(0x2d2)] > 0x0 && _0x432359[_0x5e3685(0x179)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x489cb3[_0x5e3685(0x21b)][_0x5e3685(0x330)][0x0][_0x5e3685(0x335)]['forEach'](_0x453c63 => {
                        _0x453c63['id'] == _0x2e71b5 && (_0x408b35 = _0x453c63['id']);
                    });
                    if (_0x408b35 == null) {
                        let _0x55e85b = _0x53b594(_0x5e3685(0x1d0) + _0x53c4ca + _0x5e3685(0x254))[_0x5e3685(0x155)](function () {
                            const _0x396f27 = _0x5e3685;
                            return _0x53b594(this)[_0x396f27(0x2ca)]()[_0x396f27(0x2d2)] === 0x0 && _0x53b594(this)[_0x396f27(0x22e)](_0x396f27(0x124))[_0x396f27(0x2d2)] === 0x0 && _0x53b594(this)[_0x396f27(0x1d8)]()?.[_0x396f27(0x128)]() === _0x53c4ca?.[_0x396f27(0x128)]();
                        })['parents']('div:not([class]):not([style])')[_0x5e3685(0x155)](function () {
                            const _0x367c22 = _0x5e3685;
                            return _0x53b594(this)['text']()?.['toLowerCase']() !== _0x53c4ca?.[_0x367c22(0x128)]();
                        })[_0x5e3685(0x155)](function () {
                            const _0xceeefc = _0x5e3685;
                            return _0x53b594(this)[_0xceeefc(0x2ca)]()[_0xceeefc(0x2d2)] > 0x1;
                        })[_0x5e3685(0x2f1)]();
                        _0x55e85b[_0x5e3685(0x2ca)]()[_0x5e3685(0x155)](function () {
                            const _0x470f6b = _0x5e3685;
                            return _0x53b594(this)[_0x470f6b(0x2d6)]() < 0xa;
                        })[_0x5e3685(0x2f1)]()[_0x5e3685(0x2ca)]()[_0x5e3685(0x36a)](function (_0x205151) {
                            const _0x414ff2 = _0x5e3685;
                            _0x53b594(this)[_0x414ff2(0x2ca)]()[_0x414ff2(0x2d2)] > 0x0 && (_0x408b35 = _0x489cb3['data'][_0x414ff2(0x330)][0x0][_0x414ff2(0x335)][_0x205151]['id']);
                        });
                    }
                    _0x408b35 == null && (_0x53b594(_0x5e3685(0x32b))[_0x5e3685(0x36a)](function (_0x248b53) {
                        const _0x49afb1 = _0x5e3685;
                        _0x53b594(this)['hasClass'](_0x49afb1(0x318)) && (_0x53b594(this)[_0x49afb1(0x2ca)]()[_0x49afb1(0x2d2)] > 0x0 && (_0x408b35 = _0x489cb3['data'][_0x49afb1(0x330)][0x0][_0x49afb1(0x335)][_0x248b53]['id']));
                    }), _0x53b594('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x5e3685(0x36a)](function (_0x3206e4) {
                        const _0x392172 = _0x5e3685;
                        _0x53b594(this)[_0x392172(0x2ca)]()[_0x392172(0x1c6)](_0x392172(0x1c1)) && (_0x408b35 = _0x489cb3[_0x392172(0x21b)][_0x392172(0x330)][0x0]['items'][_0x3206e4]['id']);
                    }));
                    _0x408b35 == null && (_0x408b35 = location['pathname']['split']('/')[_0x5e3685(0x155)](_0x5c8d31 => _0x5c8d31['length'] > 0x0 && _0x5c8d31[_0x5e3685(0x179)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x57e672 = await _0x293560(_0x408b35);
                    _0x3b7dee[_0x5e3685(0x141)] && (_0x154a58 = _0x57e672[_0x5e3685(0x335)][0x0][_0x5e3685(0x34f)]);
                    _0x57e672[_0x5e3685(0x15f)] === 'ok' ? _0x57e672[_0x5e3685(0x335)][0x0][_0x5e3685(0x32a)] ? _0xf6f581 ? _0x1f2cb7(_0x57e672[_0x5e3685(0x335)][0x0][_0x5e3685(0x32a)][0x0]['url']) : _0xba9ba9(_0x57e672[_0x5e3685(0x335)][0x0][_0x5e3685(0x32a)][0x0]['url'], _0x53c4ca, _0x5e3685(0x26a), _0x154a58, _0x5e3685(0x22c)) : _0xf6f581 ? _0x1f2cb7(_0x57e672[_0x5e3685(0x335)][0x0][_0x5e3685(0x13f)][_0x5e3685(0x291)][0x0][_0x5e3685(0x14b)]) : _0xba9ba9(_0x57e672[_0x5e3685(0x335)][0x0]['image_versions2'][_0x5e3685(0x291)][0x0][_0x5e3685(0x14b)], _0x53c4ca, _0x5e3685(0x26a), _0x154a58, 'jpg') : (_0x3b7dee[_0x5e3685(0x22d)] ? (_0x525d5c = !![], _0x2f3d38(_0x5224c8, _0xd20160, _0xf6f581)) : alert(_0x5e3685(0x293) + _0x57e672[_0x5e3685(0x171)]), _0x5c41ca(_0x57e672));
                    _0x5092f9(![]);
                    return;
                }
                if (_0x53b594(_0x5e3685(0x36d))[_0x5e3685(0x2d2)] > 0x0) {
                    let _0x150fe9 = 'mp4', _0x42d9c5 = '', _0x520d69 = location[_0x5e3685(0x1a3)][_0x5e3685(0x2c6)](/\/$/ig, '')['split']('/')['at'](-0x1);
                    if (_0x2934e5[_0x5e3685(0x26a)][_0x53c4ca] && !_0xd20160) {
                        _0x5c41ca(_0x5e3685(0x148), _0x53c4ca), _0x2934e5[_0x5e3685(0x26a)][_0x53c4ca][_0x5e3685(0x21b)][_0x5e3685(0x330)][0x0][_0x5e3685(0x335)][_0x5e3685(0x1e1)](_0x36fcd1 => {
                            const _0x1b7a64 = _0x5e3685;
                            _0x36fcd1['id'] == _0x520d69 && (_0x42d9c5 = _0x36fcd1['video_resources'][0x0][_0x1b7a64(0x2d8)], _0x3b7dee['RENAME_PUBLISH_DATE'] && (_0x154a58 = _0x36fcd1[_0x1b7a64(0x2c1)]));
                        });
                        if (_0x42d9c5['length'] == 0x0) {
                            _0x5c41ca('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x53c4ca), _0x2f3d38(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x2c6a94 = await _0x480555(_0x53c4ca), _0x1a8270 = _0x2c6a94[_0x5e3685(0x1a6)]['pk'], _0x52a6de = await _0x2f9068(_0x1a8270);
                        _0x52a6de[_0x5e3685(0x21b)]['reels_media'][0x0][_0x5e3685(0x335)][_0x5e3685(0x1e1)](_0x271a89 => {
                            const _0x64fec1 = _0x5e3685;
                            _0x271a89['id'] == _0x520d69 && (_0x42d9c5 = _0x271a89[_0x64fec1(0x2f4)][0x0][_0x64fec1(0x2d8)], _0x3b7dee[_0x64fec1(0x141)] && (_0x154a58 = _0x271a89[_0x64fec1(0x2c1)]));
                        });
                        if (_0x42d9c5[_0x5e3685(0x2d2)] == 0x0) {
                            let _0x361d6a = _0x53b594(_0x5e3685(0x1d0) + _0x53c4ca + _0x5e3685(0x254))[_0x5e3685(0x155)](function () {
                                const _0x1a131e = _0x5e3685;
                                return _0x53b594(this)[_0x1a131e(0x2ca)]()[_0x1a131e(0x2d2)] === 0x0 && _0x53b594(this)[_0x1a131e(0x22e)]('svg')[_0x1a131e(0x2d2)] === 0x0 && _0x53b594(this)[_0x1a131e(0x1d8)]()?.[_0x1a131e(0x128)]() === _0x53c4ca?.[_0x1a131e(0x128)]();
                            })[_0x5e3685(0x167)](_0x5e3685(0x11b))[_0x5e3685(0x155)](function () {
                                const _0x300140 = _0x5e3685;
                                return _0x53b594(this)[_0x300140(0x1d8)]()?.[_0x300140(0x128)]() !== _0x53c4ca?.[_0x300140(0x128)]();
                            })[_0x5e3685(0x155)](function () {
                                const _0x315bb4 = _0x5e3685;
                                return _0x53b594(this)['children']()[_0x315bb4(0x2d2)] > 0x1;
                            })[_0x5e3685(0x2f1)]();
                            _0x361d6a['children']()[_0x5e3685(0x155)](function () {
                                const _0x2effb3 = _0x5e3685;
                                return _0x53b594(this)[_0x2effb3(0x2d6)]() < 0xa;
                            })[_0x5e3685(0x2f1)]()[_0x5e3685(0x2ca)]()[_0x5e3685(0x36a)](function (_0x1ee81d) {
                                const _0x115547 = _0x5e3685;
                                _0x53b594(this)[_0x115547(0x2ca)]()[_0x115547(0x2d2)] > 0x0 && (_0x42d9c5 = _0x52a6de[_0x115547(0x21b)][_0x115547(0x330)][0x0]['items'][_0x1ee81d][_0x115547(0x2f4)][0x0][_0x115547(0x2d8)], _0x3b7dee[_0x115547(0x141)] && (_0x154a58 = _0x52a6de[_0x115547(0x21b)][_0x115547(0x330)][0x0][_0x115547(0x335)][_0x1ee81d]['taken_at_timestamp']));
                            }), _0x42d9c5[_0x5e3685(0x2d2)] == 0x0 && (_0x53b594('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')['each'](function (_0x42410e) {
                                const _0x3477e4 = _0x5e3685;
                                _0x53b594(this)['hasClass'](_0x3477e4(0x318)) && (_0x53b594(this)[_0x3477e4(0x2ca)]()['length'] > 0x0 && (_0x42d9c5 = _0x52a6de[_0x3477e4(0x21b)]['reels_media'][0x0][_0x3477e4(0x335)][_0x42410e][_0x3477e4(0x2f4)][0x0]['src'], _0x3b7dee[_0x3477e4(0x141)] && (_0x154a58 = _0x52a6de[_0x3477e4(0x21b)]['reels_media'][0x0][_0x3477e4(0x335)][_0x42410e][_0x3477e4(0x2c1)])));
                            }), _0x53b594(_0x5e3685(0x14d))[_0x5e3685(0x36a)](function (_0x25464d) {
                                const _0x1ecf3a = _0x5e3685;
                                _0x53b594(this)['children']()['hasClass']('_ac3q') && (_0x42d9c5 = _0x52a6de['data'][_0x1ecf3a(0x330)][0x0][_0x1ecf3a(0x335)][_0x25464d]['video_resources'][0x0][_0x1ecf3a(0x2d8)], _0x3b7dee[_0x1ecf3a(0x141)] && (_0x154a58 = _0x52a6de[_0x1ecf3a(0x21b)]['reels_media'][0x0][_0x1ecf3a(0x335)][_0x25464d][_0x1ecf3a(0x2c1)]));
                            }));
                        }
                        _0x2934e5[_0x5e3685(0x26a)][_0x53c4ca] = _0x52a6de;
                    }
                    _0x42d9c5[_0x5e3685(0x2d2)] == 0x0 ? alert(_0x3aaf72('NO_VID_URL')) : _0xf6f581 ? _0x1f2cb7(_0x42d9c5) : _0xba9ba9(_0x42d9c5, _0x53c4ca, _0x5e3685(0x26a), _0x154a58, _0x150fe9);
                } else {
                    let _0x2a3ddb = _0x53b594(_0x5e3685(0x1b9))[_0x5e3685(0x256)](_0x5e3685(0x2ad))?.[_0x5e3685(0x228)](',')[0x0]?.[_0x5e3685(0x228)]('\x20')[0x0], _0x20105 = _0x2a3ddb ? _0x2a3ddb : _0x53b594(_0x5e3685(0x1b9))[_0x5e3685(0x256)]('src');
                    if (!_0x20105) {
                        let _0x5ea7fb = _0x53b594('body\x20>\x20div\x20section:visible\x20img._aa63');
                        _0x20105 = _0x5ea7fb['attr'](_0x5e3685(0x2ad)) ? _0x5ea7fb[_0x5e3685(0x256)](_0x5e3685(0x2ad))?.['split'](',')[0x0]?.[_0x5e3685(0x228)]('\x20')[0x0] : _0x5ea7fb[_0x5e3685(0x256)](_0x5e3685(0x2d8));
                    }
                    _0x3b7dee[_0x5e3685(0x141)] && (_0x154a58 = new Date(_0x53b594('body\x20>\x20div\x20section:visible\x20time[datetime][class]')['first']()[_0x5e3685(0x256)]('datetime'))[_0x5e3685(0x275)]());
                    let _0x2a6604 = _0x20105, _0x358647 = _0x5e3685(0x258);
                    _0xf6f581 ? _0x1f2cb7(_0x2a6604) : _0xba9ba9(_0x2a6604, _0x53c4ca, 'stories', _0x154a58, _0x358647);
                }
                _0x525d5c = ![], _0x5092f9(![]);
            } else {
                let _0x3ce356 = _0x5e3685(0x158);
                if (!_0x53b594(_0x5e3685(0x16e))[_0x5e3685(0x2d2)]) {
                    _0x2934e5['stories'] = {};
                    let _0x181378 = null;
                    _0x53b594('body\x20>\x20div\x20section._ac0a')[_0x5e3685(0x2d2)] > 0x0 ? _0x181378 = _0x53b594(_0x5e3685(0x194)) : (_0x181378 = _0x53b594('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x181378['css'](_0x5e3685(0x2b0), 'relative'));
                    _0x181378[_0x5e3685(0x2d2)] === 0x0 && (_0x181378 = _0x53b594(_0x5e3685(0x25c))[_0x5e3685(0x218)]()[_0x5e3685(0x218)]()[_0x5e3685(0x218)]()[_0x5e3685(0x22e)](_0x5e3685(0x29f)), _0x181378[_0x5e3685(0x305)](_0x5e3685(0x2b0), _0x5e3685(0x2f6)));
                    _0x181378[_0x5e3685(0x2d2)] === 0x0 && (_0x181378 = _0x53b594(_0x5e3685(0x25c))['parent']()[_0x5e3685(0x218)]()[_0x5e3685(0x218)]()[_0x5e3685(0x22e)](_0x5e3685(0x307)), _0x181378[_0x5e3685(0x305)](_0x5e3685(0x2b0), _0x5e3685(0x2f6)));
                    if (_0x181378[_0x5e3685(0x2d2)] === 0x0) {
                        let _0x5e7cb0 = _0x53b594(_0x5e3685(0x1b7)), _0x405602 = 0x0;
                        _0x5e7cb0[_0x5e3685(0x36a)](function () {
                            const _0x41cf74 = _0x5e3685;
                            _0x53b594(this)['width']() > _0x405602 && (_0x405602 = _0x53b594(this)[_0x41cf74(0x2f3)](), _0x181378 = _0x53b594(this)[_0x41cf74(0x2ca)](_0x41cf74(0x1fb))[_0x41cf74(0x2f1)]());
                        });
                    }
                    _0x181378 != null && (_0x181378[_0x5e3685(0x2f1)]()[_0x5e3685(0x305)](_0x5e3685(0x2b0), 'relative'), _0x181378[_0x5e3685(0x2f1)]()[_0x5e3685(0x156)](_0x5e3685(0x229) + _0x3aaf72('DW') + _0x5e3685(0x20b) + _0x559a71[_0x5e3685(0x159)] + _0x5e3685(0x327)), _0x181378[_0x5e3685(0x2f1)]()[_0x5e3685(0x156)](_0x5e3685(0x149) + _0x3aaf72(_0x5e3685(0x308)) + _0x5e3685(0x2fd) + _0x559a71[_0x5e3685(0x308)] + '</div>'), _0x3b7dee[_0x5e3685(0x298)] && _0x181378['find'](_0x5e3685(0x2ec))['each'](function () {
                        const _0x468a06 = _0x5e3685;
                        !_0x53b594(this)['data'](_0x468a06(0x31b)) && (_0x5c41ca('(story)\x20Added\x20video\x20event\x20listener\x20#modify'), this[_0x468a06(0x145)] = _0x75a760, _0x53b594(this)['on'](_0x468a06(0x317), function () {
                            this['volume'] = _0x75a760;
                        }), _0x53b594(this)['on']('playing', function () {
                            const _0x3a328b = _0x468a06;
                            this[_0x3a328b(0x145)] = _0x75a760;
                        }), _0x53b594(this)[_0x468a06(0x256)](_0x468a06(0x328), !![]));
                    }), _0xb499ae(![]));
                }
            }
        }
        async function _0xb499ae(_0x434b6f, _0xda112e) {
            const _0x3f8316 = _0x5316ce;
            if (_0x434b6f) {
                let _0x55380d = new Date()[_0x3f8316(0x275)](), _0x2d35a7 = Math[_0x3f8316(0x34e)](_0x55380d / 0x3e8), _0x20b227 = _0x3f8316(0x258), _0x39dc68 = _0x53b594(_0x3f8316(0x1ca))['first']()[_0x3f8316(0x1d8)]() || location[_0x3f8316(0x1a3)][_0x3f8316(0x228)]('/')['at'](0x2), _0x37935c = 'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;', _0xc14bb1 = location[_0x3f8316(0x1a3)][_0x3f8316(0x2c6)](/\/$/ig, '')[_0x3f8316(0x228)]('/')['at'](-0x1), _0x401399 = '';
                _0x5092f9(!![]);
                if (_0x3b7dee['FORCE_RESOURCE_VIA_MEDIA'] && !_0x525d5c) {
                    let _0x574807 = null, _0x4fe98b = await _0x480555(_0x39dc68), _0x430766 = _0x4fe98b[_0x3f8316(0x1a6)]['pk'], _0x426bee = await _0x2f9068(_0x430766), _0x2412e5 = location[_0x3f8316(0x1a3)][_0x3f8316(0x228)]('/')[_0x3f8316(0x155)](_0x86877e => _0x86877e[_0x3f8316(0x2d2)] > 0x0 && _0x86877e['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x426bee[_0x3f8316(0x21b)][_0x3f8316(0x330)][0x0]['items']['forEach'](_0x572a78 => {
                        _0x572a78['id'] == _0x2412e5 && (_0x574807 = _0x572a78['id']);
                    });
                    if (_0x574807 == null) {
                        let _0x6067aa = _0x53b594(_0x3f8316(0x1d0) + _0x39dc68 + '\x22]\x20span')[_0x3f8316(0x155)](function () {
                            const _0x57efa1 = _0x3f8316;
                            return _0x53b594(this)['children']()['length'] === 0x0 && _0x53b594(this)[_0x57efa1(0x22e)](_0x57efa1(0x124))[_0x57efa1(0x2d2)] === 0x0 && _0x53b594(this)['text']()?.[_0x57efa1(0x128)]() === _0x39dc68?.[_0x57efa1(0x128)]();
                        })[_0x3f8316(0x167)](_0x3f8316(0x11b))[_0x3f8316(0x155)](function () {
                            const _0x1fd69d = _0x3f8316;
                            return _0x53b594(this)[_0x1fd69d(0x1d8)]()?.['toLowerCase']() !== _0x39dc68?.[_0x1fd69d(0x128)]();
                        })[_0x3f8316(0x155)](function () {
                            const _0x521b0b = _0x3f8316;
                            return _0x53b594(this)[_0x521b0b(0x2ca)]()[_0x521b0b(0x2d2)] > 0x1;
                        })[_0x3f8316(0x2f1)]();
                        _0x6067aa[_0x3f8316(0x2ca)]()[_0x3f8316(0x155)](function () {
                            return _0x53b594(this)['height']() < 0xa;
                        })[_0x3f8316(0x2f1)]()[_0x3f8316(0x2ca)]()[_0x3f8316(0x36a)](function (_0x1a8556) {
                            const _0x16b38d = _0x3f8316;
                            _0x53b594(this)['children']()[_0x16b38d(0x2d2)] > 0x0 && (_0x574807 = _0x426bee['data']['reels_media'][0x0]['items'][_0x1a8556]['id']);
                        });
                    }
                    _0x574807 == null && (_0x53b594(_0x3f8316(0x32b))[_0x3f8316(0x36a)](function (_0x531911) {
                        const _0x517e0b = _0x3f8316;
                        _0x53b594(this)[_0x517e0b(0x1c6)](_0x517e0b(0x318)) && (_0x53b594(this)[_0x517e0b(0x2ca)]()[_0x517e0b(0x2d2)] > 0x0 && (_0x574807 = _0x426bee[_0x517e0b(0x21b)][_0x517e0b(0x330)][0x0][_0x517e0b(0x335)][_0x531911]['id']));
                    }), _0x53b594(_0x3f8316(0x14d))[_0x3f8316(0x36a)](function (_0x28c6df) {
                        const _0x5c71cd = _0x3f8316;
                        _0x53b594(this)['children']()[_0x5c71cd(0x1c6)](_0x5c71cd(0x1c1)) && (_0x574807 = _0x426bee[_0x5c71cd(0x21b)][_0x5c71cd(0x330)][0x0][_0x5c71cd(0x335)][_0x28c6df]['id']);
                    }));
                    _0x574807 == null && (_0x574807 = location['pathname'][_0x3f8316(0x228)]('/')['filter'](_0x180128 => _0x180128['length'] > 0x0 && _0x180128[_0x3f8316(0x179)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x33b0ec = await _0x293560(_0x574807);
                    _0x3b7dee[_0x3f8316(0x141)] && (_0x2d35a7 = _0x33b0ec[_0x3f8316(0x335)][0x0][_0x3f8316(0x34f)]);
                    _0x33b0ec[_0x3f8316(0x15f)] === 'ok' ? _0xba9ba9(_0x33b0ec[_0x3f8316(0x335)][0x0][_0x3f8316(0x13f)]['candidates'][0x0][_0x3f8316(0x14b)], _0x39dc68, _0x3f8316(0x26a), _0x2d35a7, _0x3f8316(0x258)) : (_0x3b7dee[_0x3f8316(0x22d)] ? (_0x525d5c = !![], _0xb499ae(!![], _0xda112e)) : alert(_0x3f8316(0x293) + _0x33b0ec[_0x3f8316(0x171)]), _0x5c41ca(_0x33b0ec));
                    _0x5092f9(![]);
                    return;
                }
                if (_0x2934e5[_0x3f8316(0x26a)][_0x39dc68] && !_0xda112e) {
                    _0x5c41ca('Fetch\x20from\x20memory\x20cache:', _0x39dc68), _0x2934e5[_0x3f8316(0x26a)][_0x39dc68]['data']['reels_media'][0x0][_0x3f8316(0x335)][_0x3f8316(0x1e1)](_0x5916f6 => {
                        const _0x584cb6 = _0x3f8316;
                        _0x5916f6['id'] == _0xc14bb1 && (_0x401399 = _0x5916f6['display_url'], _0x3b7dee['RENAME_PUBLISH_DATE'] && (_0x2d35a7 = _0x5916f6[_0x584cb6(0x2c1)]));
                    });
                    if (_0x401399['length'] == 0x0) {
                        _0x5c41ca(_0x3f8316(0x1ae), _0x39dc68), _0xb499ae(!![], !![]);
                        return;
                    }
                } else {
                    let _0x22f5fa = await _0x480555(_0x39dc68), _0x170b92 = _0x22f5fa[_0x3f8316(0x1a6)]['pk'], _0x5cf122 = await _0x2f9068(_0x170b92);
                    _0x5cf122['data']['reels_media'][0x0][_0x3f8316(0x335)][_0x3f8316(0x1e1)](_0x49bc86 => {
                        const _0x9daa3c = _0x3f8316;
                        _0x49bc86['id'] == _0xc14bb1 && (_0x401399 = _0x49bc86[_0x9daa3c(0x295)], _0x3b7dee['RENAME_PUBLISH_DATE'] && (_0x2d35a7 = _0x49bc86['taken_at_timestamp']));
                    });
                    if (_0x401399[_0x3f8316(0x2d2)] == 0x0) {
                        let _0x1b9441 = _0x53b594('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x39dc68 + _0x3f8316(0x254))['filter'](function () {
                            const _0x13263a = _0x3f8316;
                            return _0x53b594(this)[_0x13263a(0x2ca)]()[_0x13263a(0x2d2)] === 0x0 && _0x53b594(this)[_0x13263a(0x22e)](_0x13263a(0x124))['length'] === 0x0 && _0x53b594(this)[_0x13263a(0x1d8)]()?.[_0x13263a(0x128)]() === _0x39dc68?.[_0x13263a(0x128)]();
                        })[_0x3f8316(0x167)](_0x3f8316(0x11b))[_0x3f8316(0x155)](function () {
                            const _0x1b8dd0 = _0x3f8316;
                            return _0x53b594(this)[_0x1b8dd0(0x1d8)]()?.[_0x1b8dd0(0x128)]() !== _0x39dc68?.['toLowerCase']();
                        })[_0x3f8316(0x155)](function () {
                            const _0x479239 = _0x3f8316;
                            return _0x53b594(this)[_0x479239(0x2ca)]()[_0x479239(0x2d2)] > 0x1;
                        })[_0x3f8316(0x2f1)]();
                        _0x1b9441[_0x3f8316(0x2ca)]()[_0x3f8316(0x155)](function () {
                            return _0x53b594(this)['height']() < 0xa;
                        })['first']()[_0x3f8316(0x2ca)]()[_0x3f8316(0x36a)](function (_0x215db2) {
                            const _0xb6faed = _0x3f8316;
                            _0x53b594(this)[_0xb6faed(0x2ca)]()['length'] > 0x0 && (_0x401399 = _0x5cf122[_0xb6faed(0x21b)]['reels_media'][0x0][_0xb6faed(0x335)][_0x215db2][_0xb6faed(0x295)], _0x3b7dee[_0xb6faed(0x141)] && (_0x2d35a7 = _0x5cf122[_0xb6faed(0x21b)]['reels_media'][0x0][_0xb6faed(0x335)][_0x215db2][_0xb6faed(0x2c1)]));
                        }), _0x401399[_0x3f8316(0x2d2)] == 0x0 && (_0x53b594(_0x3f8316(0x32b))['each'](function (_0x6e469c) {
                            const _0x1a6c38 = _0x3f8316;
                            _0x53b594(this)[_0x1a6c38(0x1c6)]('x1lix1fw') && (_0x53b594(this)[_0x1a6c38(0x2ca)]()[_0x1a6c38(0x2d2)] > 0x0 && (_0x401399 = _0x5cf122['data'][_0x1a6c38(0x330)][0x0][_0x1a6c38(0x335)][_0x6e469c][_0x1a6c38(0x295)], _0x3b7dee['RENAME_PUBLISH_DATE'] && (_0x2d35a7 = _0x5cf122['data'][_0x1a6c38(0x330)][0x0][_0x1a6c38(0x335)][_0x6e469c][_0x1a6c38(0x2c1)])));
                        }), _0x53b594(_0x3f8316(0x14d))[_0x3f8316(0x36a)](function (_0x293969) {
                            const _0x5eba9b = _0x3f8316;
                            _0x53b594(this)['children']()[_0x5eba9b(0x1c6)](_0x5eba9b(0x1c1)) && (_0x401399 = _0x5cf122[_0x5eba9b(0x21b)]['reels_media'][0x0][_0x5eba9b(0x335)][_0x293969][_0x5eba9b(0x295)], _0x3b7dee[_0x5eba9b(0x141)] && (_0x2d35a7 = _0x5cf122[_0x5eba9b(0x21b)]['reels_media'][0x0][_0x5eba9b(0x335)][_0x293969][_0x5eba9b(0x2c1)]));
                        }));
                    }
                }
                _0xba9ba9(_0x401399, _0x39dc68, 'thumbnail', _0x2d35a7, _0x20b227), _0x525d5c = ![], _0x5092f9(![]);
            } else {
                if (_0x53b594(_0x3f8316(0x1d6))[_0x3f8316(0x218)]()[_0x3f8316(0x22e)](_0x3f8316(0x323))[_0x3f8316(0x2d2)]) {
                    let _0x5ad95f = null;
                    _0x53b594(_0x3f8316(0x234))['length'] > 0x0 ? _0x5ad95f = _0x53b594(_0x3f8316(0x194)) : (_0x5ad95f = _0x53b594(_0x3f8316(0x2ce)), _0x5ad95f['css']('position', 'relative'));
                    _0x5ad95f[_0x3f8316(0x2d2)] === 0x0 && (_0x5ad95f = _0x53b594(_0x3f8316(0x25c))[_0x3f8316(0x218)]()[_0x3f8316(0x218)]()[_0x3f8316(0x218)]()[_0x3f8316(0x22e)](_0x3f8316(0x29f)), _0x5ad95f[_0x3f8316(0x305)](_0x3f8316(0x2b0), _0x3f8316(0x2f6)));
                    _0x5ad95f[_0x3f8316(0x2d2)] === 0x0 && (_0x5ad95f = _0x53b594(_0x3f8316(0x25c))[_0x3f8316(0x218)]()[_0x3f8316(0x218)]()[_0x3f8316(0x218)]()[_0x3f8316(0x22e)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x5ad95f[_0x3f8316(0x305)](_0x3f8316(0x2b0), _0x3f8316(0x2f6)));
                    if (_0x5ad95f[_0x3f8316(0x2d2)] === 0x0) {
                        let _0x3e7b8f = _0x53b594(_0x3f8316(0x1b7)), _0x1c91f7 = 0x0;
                        _0x3e7b8f['each'](function () {
                            const _0x2693d0 = _0x3f8316;
                            _0x53b594(this)[_0x2693d0(0x2f3)]() > _0x1c91f7 && (_0x1c91f7 = _0x53b594(this)[_0x2693d0(0x2f3)](), _0x5ad95f = _0x53b594(this)[_0x2693d0(0x2ca)](_0x2693d0(0x1fb))['first']());
                        });
                    }
                    _0x5ad95f != null && (_0x5ad95f[_0x3f8316(0x2f1)]()[_0x3f8316(0x305)](_0x3f8316(0x2b0), _0x3f8316(0x2f6)), _0x5ad95f[_0x3f8316(0x2f1)]()[_0x3f8316(0x156)](_0x3f8316(0x278) + _0x3aaf72('THUMBNAIL_INTRO') + _0x3f8316(0x16b) + _0x559a71['THUMBNAIL'] + '</div>'));
                }
            }
        }
        async function _0x46038a(_0x47455a, _0x2bb6fa, _0x4ccc83) {
            const _0xfdd653 = _0x5316ce;
            if (_0x47455a) {
                _0x5092f9(!![]);
                let _0x260f55 = location[_0xfdd653(0x2b6)][_0xfdd653(0x228)]('?')['at'](0x0)[_0xfdd653(0x228)](_0xfdd653(0x266))['at'](-0x1)[_0xfdd653(0x2bd)]('/', ''), _0x4722e8 = await _0x3b48b8(_0x260f55), _0x93c94b = _0x4722e8[_0xfdd653(0x21b)], _0x4bcd90 = new Date()[_0xfdd653(0x275)]();
                _0x3b7dee[_0xfdd653(0x141)] && (_0x4722e8['type'] === 'query_hash' ? _0x4bcd90 = _0x93c94b['shortcode_media'][_0xfdd653(0x2c1)] : _0x4bcd90 = _0x93c94b['taken_at']);
                if (_0x4722e8['type'] === _0xfdd653(0x342)) {
                    if (_0x2bb6fa && _0x93c94b['shortcode_media'][_0xfdd653(0x271)]) {
                        if (_0x4ccc83)
                            _0x1f2cb7(_0x93c94b['shortcode_media']['video_url']);
                        else {
                            let _0x5e8f0c = _0xfdd653(0x22c);
                            _0xba9ba9(_0x93c94b[_0xfdd653(0x1ff)][_0xfdd653(0x1a4)], _0x93c94b[_0xfdd653(0x1ff)]['owner'][_0xfdd653(0x1b0)], _0xfdd653(0x1bf), _0x4bcd90, _0x5e8f0c, _0x260f55);
                        }
                    } else {
                        if (_0x4ccc83)
                            _0x1f2cb7(_0x93c94b[_0xfdd653(0x1ff)][_0xfdd653(0x368)]['at'](-0x1)[_0xfdd653(0x2d8)]);
                        else {
                            let _0x4c0f92 = _0xfdd653(0x258);
                            _0xba9ba9(_0x93c94b[_0xfdd653(0x1ff)]['display_resources']['at'](-0x1)[_0xfdd653(0x2d8)], _0x93c94b[_0xfdd653(0x1ff)][_0xfdd653(0x279)][_0xfdd653(0x1b0)], _0xfdd653(0x1bf), _0x4bcd90, _0x4c0f92, _0x260f55);
                        }
                    }
                } else {
                    if (_0x2bb6fa && _0x93c94b[_0xfdd653(0x32a)] != null) {
                        if (_0x4ccc83)
                            _0x1f2cb7(_0x93c94b['video_versions'][0x0][_0xfdd653(0x14b)]);
                        else {
                            let _0x44c965 = _0xfdd653(0x22c);
                            _0xba9ba9(_0x93c94b['video_versions'][0x0][_0xfdd653(0x14b)], _0x93c94b[_0xfdd653(0x279)]['username'], _0xfdd653(0x1bf), _0x4bcd90, _0x44c965, _0x260f55);
                        }
                    } else {
                        if (_0x4ccc83)
                            _0x1f2cb7(_0x93c94b[_0xfdd653(0x13f)][_0xfdd653(0x291)][0x0][_0xfdd653(0x14b)]);
                        else {
                            let _0x425236 = _0xfdd653(0x258);
                            _0xba9ba9(_0x93c94b[_0xfdd653(0x13f)][_0xfdd653(0x291)][0x0][_0xfdd653(0x14b)], _0x93c94b[_0xfdd653(0x279)][_0xfdd653(0x1b0)], _0xfdd653(0x1bf), _0x4bcd90, _0x425236, _0x260f55);
                        }
                    }
                }
                _0x5092f9(![]);
            } else
                var _0x42a48a = setInterval(() => {
                    const _0x2506a5 = _0xfdd653;
                    _0x53b594(_0x2506a5(0x319))[_0x2506a5(0x2d2)] > 0x0 && (clearInterval(_0x42a48a), _0x3b7dee['SCROLL_BUTTON'] && (_0x53b594('#scrollWrapper')[_0x2506a5(0x315)](), _0x53b594(_0x2506a5(0x301))[_0x2506a5(0x156)](_0x2506a5(0x27c)), _0x53b594(_0x2506a5(0x1aa))[_0x2506a5(0x156)](_0x2506a5(0x1e3)), _0x53b594(_0x2506a5(0x1aa))[_0x2506a5(0x156)](_0x2506a5(0x326)), _0x53b594(_0x2506a5(0x14e))['on'](_0x2506a5(0x13c), function () {
                        const _0x155a34 = _0x2506a5;
                        _0x53b594(_0x155a34(0x139))[0x0][_0x155a34(0x195)]({
                            'top': -0x1e,
                            'behavior': _0x155a34(0x180)
                        });
                    }), _0x53b594(_0x2506a5(0x227))['on'](_0x2506a5(0x13c), function () {
                        const _0x17fbd6 = _0x2506a5;
                        _0x53b594(_0x17fbd6(0x139))[0x0][_0x17fbd6(0x195)]({
                            'top': 0x1e,
                            'behavior': _0x17fbd6(0x180)
                        });
                    })), _0x53b594(_0x2506a5(0x1f9))[_0x2506a5(0x2ca)](_0x2506a5(0x1fb))[_0x2506a5(0x36a)](function () {
                        const _0x1c33bf = _0x2506a5;
                        if (_0x53b594(this)[_0x1c33bf(0x2ca)]()[_0x1c33bf(0x2d2)] > 0x0) {
                            if (!_0x53b594(this)[_0x1c33bf(0x2ca)]()[_0x1c33bf(0x22e)](_0x1c33bf(0x17b))['length']) {
                                var _0x110e6a = _0x53b594(this);
                                _0x53b594(this)[_0x1c33bf(0x2ca)]()['css'](_0x1c33bf(0x2b0), _0x1c33bf(0x2f6)), _0x53b594(this)[_0x1c33bf(0x2ca)]()[_0x1c33bf(0x156)](_0x1c33bf(0x229) + _0x3aaf72('DW') + '\x22\x20class=\x22IG_REELS\x22>' + _0x559a71[_0x1c33bf(0x159)] + '</div>'), _0x53b594(this)[_0x1c33bf(0x2ca)]()[_0x1c33bf(0x156)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x3aaf72('NEW_TAB') + _0x1c33bf(0x12c) + _0x559a71[_0x1c33bf(0x308)] + _0x1c33bf(0x327)), _0x53b594(this)['children']()[_0x1c33bf(0x156)](_0x1c33bf(0x278) + _0x3aaf72('THUMBNAIL_INTRO') + _0x1c33bf(0x35d) + _0x559a71[_0x1c33bf(0x2e5)] + '</div>');
                                _0x3b7dee[_0x1c33bf(0x146)] && _0x53b594(this)[_0x1c33bf(0x22e)](_0x1c33bf(0x2ec))[_0x1c33bf(0x36a)](function () {
                                    const _0x325334 = _0x1c33bf;
                                    !_0x53b594(this)[_0x325334(0x21b)](_0x325334(0x217)) && (_0x5c41ca(_0x325334(0x1b5)), _0x53b594(this)['on']('ended', function () {
                                        const _0x25d979 = _0x325334;
                                        _0x53b594(this)[_0x25d979(0x256)](_0x25d979(0x15c), !![]);
                                        let _0x549469 = _0x53b594(this)[_0x25d979(0x2da)]()[_0x25d979(0x22e)](_0x25d979(0x20e))['parents'](_0x25d979(0x284));
                                        _0x549469[_0x25d979(0x2d2)] > 0x0 ? (_0x549469['click'](), _0x5c41ca('paused\x20click()')) : (_0x53b594(this)[_0x25d979(0x218)]()[_0x25d979(0x22e)]('.xpgaw4o')[_0x25d979(0x1a9)]('style'), this['pause'](), _0x5c41ca('paused\x20pause()'));
                                    }));
                                });
                                _0x3b7dee['MODIFY_VIDEO_VOLUME'] && _0x53b594(this)[_0x1c33bf(0x22e)]('video')[_0x1c33bf(0x36a)](function () {
                                    const _0x3cc5b5 = _0x1c33bf;
                                    !_0x53b594(this)[_0x3cc5b5(0x21b)]('modify') && (_0x5c41ca('(reel)\x20Added\x20video\x20event\x20listener\x20#modify'), this[_0x3cc5b5(0x145)] = _0x75a760, _0x53b594(this)['on'](_0x3cc5b5(0x317), function () {
                                        const _0x22129f = _0x3cc5b5;
                                        this[_0x22129f(0x145)] = _0x75a760;
                                    }), _0x53b594(this)['on']('playing', function () {
                                        const _0x2e5849 = _0x3cc5b5;
                                        this[_0x2e5849(0x145)] = _0x75a760;
                                    }), _0x53b594(this)[_0x3cc5b5(0x256)](_0x3cc5b5(0x328), !![]));
                                });
                                _0x3b7dee[_0x1c33bf(0x24d)] && _0x53b594(this)[_0x1c33bf(0x22e)](_0x1c33bf(0x2ec))['each'](function () {
                                    const _0x5343e9 = _0x1c33bf;
                                    if (!_0x53b594(this)[_0x5343e9(0x21b)]('controls')) {
                                        let _0x566ce2 = _0x53b594(this);
                                        _0x5c41ca(_0x5343e9(0x137)), this[_0x5343e9(0x145)] = _0x75a760, _0x53b594(this)['on'](_0x5343e9(0x204), function () {
                                            const _0x36fdbb = _0x5343e9;
                                            this[_0x36fdbb(0x145)] = _0x75a760;
                                        }), _0x53b594(this)['on']('contextmenu', function (_0xa592ba) {
                                            const _0x38bb35 = _0x5343e9;
                                            _0xa592ba[_0x38bb35(0x172)](), _0x566ce2['css'](_0x38bb35(0x220), '-1'), _0x566ce2[_0x38bb35(0x1a9)](_0x38bb35(0x352));
                                        }), _0x53b594(this)[_0x5343e9(0x218)]()[_0x5343e9(0x22e)]('video\x20+\x20div\x20div[role=\x22button\x22]')[_0x5343e9(0x155)](function () {
                                            const _0x5707e7 = _0x5343e9;
                                            return _0x53b594(this)[_0x5707e7(0x218)]('div[role=\x22presentation\x22]')[_0x5707e7(0x2d2)] > 0x0 && _0x53b594(this)['css'](_0x5707e7(0x19d)) === 'pointer' && _0x53b594(this)[_0x5707e7(0x256)](_0x5707e7(0x353)) != null;
                                        })[_0x5343e9(0x2f1)]()['on'](_0x5343e9(0x1da), function (_0x500cd3) {
                                            const _0x1aa5d5 = _0x5343e9;
                                            _0x500cd3[_0x1aa5d5(0x172)](), _0x566ce2[_0x1aa5d5(0x305)](_0x1aa5d5(0x220), '2'), _0x566ce2[_0x1aa5d5(0x256)](_0x1aa5d5(0x352), !![]);
                                        }), _0x53b594(this)['on'](_0x5343e9(0x143), function () {
                                            const _0x26ca43 = _0x5343e9;
                                            let _0x52832a = _0x53b594(this)['parent']()[_0x26ca43(0x22e)](_0x26ca43(0x32f))[_0x26ca43(0x22e)](_0x26ca43(0x12b))['filter'](function (_0x4802eb) {
                                                const _0x1fdeae = _0x26ca43;
                                                return _0x53b594(this)['width']() <= 0x40 && _0x53b594(this)[_0x1fdeae(0x2d6)]() <= 0x40 && _0x53b594(this)[_0x1fdeae(0x22e)](_0x1fdeae(0x27a))[_0x1fdeae(0x2d2)] > 0x0;
                                            });
                                            var _0x117ad4 = _0x52832a[_0x26ca43(0x22e)](_0x26ca43(0x1fa))[_0x26ca43(0x2d2)] === 0x0;
                                            this[_0x26ca43(0x366)] != _0x117ad4 && (this[_0x26ca43(0x145)] = _0x75a760, _0x52832a?.[_0x26ca43(0x13c)]()), _0x53b594(this)[_0x26ca43(0x256)]('data-completed') && (_0x75a760 = this[_0x26ca43(0x145)], GM_setValue(_0x26ca43(0x21d), this['volume'])), this[_0x26ca43(0x145)] == _0x75a760 && _0x53b594(this)[_0x26ca43(0x256)](_0x26ca43(0x28a), !![]);
                                        }), _0x53b594(this)['css'](_0x5343e9(0x2b0), _0x5343e9(0x299)), _0x53b594(this)['css'](_0x5343e9(0x220), '2'), _0x53b594(this)[_0x5343e9(0x256)]('data-controls', !![]), _0x53b594(this)[_0x5343e9(0x256)]('controls', !![]);
                                    }
                                });
                                var _0x31988b = _0x53b594(this)[_0x1c33bf(0x22e)](_0x1c33bf(0x16c))[_0x1c33bf(0x2f1)]();
                                _0x31988b[_0x1c33bf(0x156)](_0x1c33bf(0x125)), _0x31988b[_0x1c33bf(0x22e)](_0x1c33bf(0x35e))[_0x1c33bf(0x156)](_0x1c33bf(0x255) + _0x75a760 + _0x1c33bf(0x267)), _0x31988b[_0x1c33bf(0x22e)](_0x1c33bf(0x2e8))[_0x1c33bf(0x256)]('style', _0x1c33bf(0x296) + (_0x75a760 * 0x64 + '%')), _0x31988b[_0x1c33bf(0x22e)]('div.volume_slider\x20input')['on'](_0x1c33bf(0x23c), function () {
                                    const _0x50ad22 = _0x1c33bf;
                                    var _0x31c537 = _0x53b594(this)[_0x50ad22(0x236)]() * 0x64 + '%';
                                    _0x75a760 = _0x53b594(this)['val'](), GM_setValue(_0x50ad22(0x21d), _0x53b594(this)[_0x50ad22(0x236)]()), _0x53b594(this)['attr'](_0x50ad22(0x353), _0x50ad22(0x296) + _0x31c537), _0x110e6a[_0x50ad22(0x22e)](_0x50ad22(0x2ec))[_0x50ad22(0x36a)](function () {
                                        const _0x3e15a4 = _0x50ad22;
                                        _0x5c41ca(_0x3e15a4(0x1d5)), this[_0x3e15a4(0x145)] = _0x75a760;
                                    });
                                }), _0x31988b[_0x1c33bf(0x22e)](_0x1c33bf(0x2e8))['on']('mouseenter', function () {
                                    const _0x958ce4 = _0x1c33bf;
                                    var _0x679f4e = _0x75a760 * 0x64 + '%';
                                    _0x53b594(this)[_0x958ce4(0x256)](_0x958ce4(0x353), _0x958ce4(0x296) + _0x679f4e), _0x53b594(this)['val'](_0x75a760), _0x110e6a['find'](_0x958ce4(0x2ec))[_0x958ce4(0x36a)](function () {
                                        const _0x3fcd72 = _0x958ce4;
                                        _0x5c41ca(_0x3fcd72(0x1d5)), this[_0x3fcd72(0x145)] = _0x75a760;
                                    });
                                }), _0x31988b['find'](_0x1c33bf(0x35e))['on'](_0x1c33bf(0x13c), function (_0x38c18a) {
                                    const _0x34e1c7 = _0x1c33bf;
                                    _0x38c18a[_0x34e1c7(0x30a)](), _0x38c18a[_0x34e1c7(0x172)]();
                                });
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x2a61f8(_0x392ff2) {
            return new Promise((_0x13e974, _0x3e2d5b) => {
                const _0x1b3c47 = a0_0x1751;
                let _0x5edb0a = 'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22' + _0x392ff2 + _0x1b3c47(0x2de);
                GM_xmlhttpRequest({
                    'method': _0x1b3c47(0x27b),
                    'url': _0x5edb0a,
                    'onload': function (_0x31aee2) {
                        const _0x1166f2 = _0x1b3c47;
                        try {
                            let _0xdd26d5 = JSON[_0x1166f2(0x2ef)](_0x31aee2[_0x1166f2(0x34a)]);
                            _0x13e974(_0xdd26d5);
                        } catch (_0x374917) {
                            _0x5c41ca(_0x1166f2(0x1e7), 'reject', _0x374917[_0x1166f2(0x171)]), _0x3e2d5b(_0x374917);
                        }
                    },
                    'onerror': function (_0x2dbd55) {
                        const _0x249b7f = _0x1b3c47;
                        _0x5c41ca('getHighlightStories()', _0x249b7f(0x201), _0x2dbd55), _0x3e2d5b(_0x2dbd55);
                    }
                });
            });
        }
        function _0x2f9068(_0x17e026) {
            return new Promise((_0x407501, _0x1c8515) => {
                const _0x4d1919 = a0_0x1751;
                let _0x1fff15 = _0x4d1919(0x162) + _0x17e026 + _0x4d1919(0x2de);
                GM_xmlhttpRequest({
                    'method': _0x4d1919(0x27b),
                    'url': _0x1fff15,
                    'onload': function (_0x4a0da0) {
                        const _0x51885c = _0x4d1919;
                        try {
                            let _0x4224c6 = JSON['parse'](_0x4a0da0[_0x51885c(0x34a)]);
                            _0x5c41ca(_0x51885c(0x22b), _0x4224c6), _0x407501(_0x4224c6);
                        } catch (_0x2ddd7b) {
                            _0x5c41ca(_0x51885c(0x22b), _0x51885c(0x201), _0x2ddd7b['message']), _0x1c8515(_0x2ddd7b);
                        }
                    },
                    'onerror': function (_0xe4e6bc) {
                        const _0x2bed64 = _0x4d1919;
                        _0x5c41ca(_0x2bed64(0x22b), _0x2bed64(0x201), _0xe4e6bc), _0x1c8515(_0xe4e6bc);
                    }
                });
            });
        }
        function _0x480555(_0x4436d5) {
            return new Promise((_0x34418f, _0x31a192) => {
                const _0x1beb0d = a0_0x1751;
                let _0x3da709 = 'https://www.instagram.com/web/search/topsearch/?query=' + _0x4436d5;
                GM_xmlhttpRequest({
                    'method': _0x1beb0d(0x27b),
                    'url': _0x3da709,
                    'onload': function (_0x2ff65c) {
                        const _0x468d0d = _0x1beb0d;
                        let _0x377301 = JSON[_0x468d0d(0x2ef)](_0x2ff65c[_0x468d0d(0x34a)]), _0x2df332 = null;
                        _0x377301[_0x468d0d(0x19f)][_0x468d0d(0x1e1)](_0x15cd69 => {
                            const _0x4ce819 = _0x468d0d;
                            _0x15cd69[_0x4ce819(0x1a6)][_0x4ce819(0x1b0)]?.[_0x4ce819(0x128)]() === _0x4436d5?.[_0x4ce819(0x128)]() && (_0x2df332 = _0x15cd69);
                        }), _0x2df332 != null ? (_0x5c41ca(_0x468d0d(0x34c), _0x2df332), _0x34418f(_0x2df332)) : _0x4ca6c1(_0x4436d5)[_0x468d0d(0x134)](_0x5ebd75 => {
                            _0x34418f(_0x5ebd75);
                        })[_0x468d0d(0x207)](_0x2aa728 => {
                            const _0x547d43 = _0x468d0d;
                            alert(_0x547d43(0x36e));
                        });
                    },
                    'onerror': function (_0x55c669) {
                        const _0xa6fef1 = _0x1beb0d;
                        _0x5c41ca(_0xa6fef1(0x34c), 'reject', _0x55c669), _0x31a192(_0x55c669);
                    }
                });
            });
        }
        function _0x4ca6c1(_0x8ec28d) {
            return new Promise((_0x519512, _0x87a187) => {
                const _0x39db0d = a0_0x1751;
                let _0x5e7efb = 'https://i.instagram.com/api/v1/users/web_profile_info/?username=' + _0x8ec28d;
                GM_xmlhttpRequest({
                    'method': _0x39db0d(0x27b),
                    'url': _0x5e7efb,
                    'headers': { 'X-IG-App-ID': _0x55c338() },
                    'onload': function (_0x22772d) {
                        const _0x5bf639 = _0x39db0d;
                        try {
                            let _0x3713c9 = JSON[_0x5bf639(0x2ef)](_0x22772d[_0x5bf639(0x34a)]), _0x58fb6a = _0x3713c9?.[_0x5bf639(0x21b)]?.[_0x5bf639(0x1a6)];
                            if (_0x58fb6a != null) {
                                let _0x38be7b = _0x3713c9?.['data'];
                                _0x38be7b['user']['pk'] = _0x38be7b[_0x5bf639(0x1a6)]['id'], _0x5c41ca(_0x5bf639(0x2e1), _0x3713c9), _0x519512(_0x38be7b);
                            } else
                                _0x5c41ca(_0x5bf639(0x2e1), 'reject', _0x5bf639(0x241)), _0x87a187(_0x5bf639(0x241));
                        } catch (_0x4eb8bd) {
                            _0x5c41ca(_0x5bf639(0x2e1), 'reject', _0x4eb8bd[_0x5bf639(0x171)]), _0x87a187(_0x4eb8bd);
                        }
                    },
                    'onerror': function (_0x30012e) {
                        const _0x1d3006 = _0x39db0d;
                        _0x5c41ca(_0x1d3006(0x2e1), _0x1d3006(0x201), _0x30012e), _0x87a187(_0x30012e);
                    }
                });
            });
        }
        function _0x576fec(_0x2d02f6) {
            return new Promise((_0x1f3409, _0x32468e) => {
                const _0xbc4a58 = a0_0x1751;
                let _0x57c5b5 = _0xbc4a58(0x29b) + _0x2d02f6 + '/info/';
                GM_xmlhttpRequest({
                    'method': _0xbc4a58(0x27b),
                    'url': _0x57c5b5,
                    'headers': { 'User-Agent': _0xbc4a58(0x32c) },
                    'onload': function (_0x4c195b) {
                        const _0x1c95b4 = _0xbc4a58;
                        try {
                            let _0x11be0d = JSON['parse'](_0x4c195b[_0x1c95b4(0x34a)]);
                            _0x11be0d['status'] !== 'ok' ? (_0x5c41ca(_0x1c95b4(0x1b3), _0x1c95b4(0x201), _0x11be0d), _0x32468e(_0x1c95b4(0x1e5))) : (_0x5c41ca('getUserHighSizeProfile()', _0x11be0d), _0x1f3409(_0x11be0d['user'][_0x1c95b4(0x33a)]?.['url']));
                        } catch (_0x5087f8) {
                            _0x5c41ca(_0x1c95b4(0x1b3), 'reject', _0x5087f8), _0x32468e(_0x5087f8);
                        }
                    },
                    'onerror': function (_0x223599) {
                        const _0x562520 = _0xbc4a58;
                        _0x5c41ca(_0x562520(0x1b3), 'reject', _0x223599), _0x32468e(_0x223599);
                    }
                });
            });
        }
        function _0x2873cb(_0x25beb1) {
            return new Promise((_0x8adcda, _0x193bea) => {
                const _0x4d57ea = a0_0x1751;
                if (!_0x25beb1)
                    _0x193bea(_0x4d57ea(0x364));
                let _0x3642f4 = _0x25beb1, _0x2636ac = _0x4d57ea(0x1b8) + _0x3642f4 + _0x4d57ea(0x168);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x2636ac,
                    'onload': function (_0x2c42bc) {
                        const _0xbee3d2 = _0x4d57ea;
                        try {
                            let _0x589a27 = JSON[_0xbee3d2(0x2ef)](_0x2c42bc[_0xbee3d2(0x34a)]);
                            _0x5c41ca(_0xbee3d2(0x274), _0x589a27), _0x8adcda(_0x589a27[_0xbee3d2(0x21b)][_0xbee3d2(0x1ff)]['owner'][_0xbee3d2(0x1b0)]);
                        } catch (_0x5d8d3f) {
                            _0x5c41ca(_0xbee3d2(0x274), _0xbee3d2(0x201), _0x5d8d3f[_0xbee3d2(0x171)]), _0x193bea(_0x5d8d3f);
                        }
                    },
                    'onerror': function (_0x50969f) {
                        const _0x225b80 = _0x4d57ea;
                        _0x5c41ca(_0x225b80(0x274), _0x225b80(0x201), _0x50969f), _0x193bea(_0x50969f);
                    }
                });
            });
        }
        function _0x3b48b8(_0x129266) {
            return new Promise((_0x42d5fb, _0x3cd97d) => {
                const _0x17d76f = a0_0x1751;
                if (!_0x129266)
                    _0x3cd97d(_0x17d76f(0x364));
                let _0x55dbc0 = _0x129266, _0x44ed57 = _0x17d76f(0x1b8) + _0x55dbc0 + _0x17d76f(0x168);
                GM_xmlhttpRequest({
                    'method': _0x17d76f(0x27b),
                    'url': _0x44ed57,
                    'headers': { 'User-Agent': _0x17d76f(0x32c) },
                    'onload': function (_0x25c482) {
                        const _0x4c372f = _0x17d76f;
                        try {
                            let _0x668587 = JSON[_0x4c372f(0x2ef)](_0x25c482[_0x4c372f(0x34a)]);
                            _0x5c41ca(_0x668587), _0x668587[_0x4c372f(0x15f)] === _0x4c372f(0x16a) ? (_0x5c41ca(_0x4c372f(0x19c), 'getBlobMediaWithQuery()', _0x55dbc0), _0x5d87c5(_0x55dbc0)[_0x4c372f(0x134)](_0x3a3931 => {
                                const _0x1b3591 = _0x4c372f;
                                _0x42d5fb({
                                    'type': _0x1b3591(0x349),
                                    'data': _0x3a3931[_0x1b3591(0x2a2)][_0x1b3591(0x335)][0x0]
                                });
                            })[_0x4c372f(0x207)](_0x24c44b => {
                                _0x3cd97d(_0x24c44b);
                            })) : _0x42d5fb({
                                'type': _0x4c372f(0x342),
                                'data': _0x668587[_0x4c372f(0x21b)]
                            });
                        } catch (_0x8355d8) {
                            _0x5c41ca('getBlobMedia()', 'reject', _0x8355d8[_0x4c372f(0x171)]), _0x3cd97d(_0x8355d8);
                        }
                    },
                    'onerror': function (_0x303866) {
                        const _0x3a5322 = _0x17d76f;
                        _0x5c41ca(_0x3a5322(0x2c2), _0x3a5322(0x201), _0x303866), _0x3cd97d(_0x303866);
                    }
                });
            });
        }
        function _0x5d87c5(_0x490d95) {
            return new Promise((_0x5d031f, _0x3d90af) => {
                const _0x2a09d8 = a0_0x1751;
                if (!_0x490d95)
                    _0x3d90af(_0x2a09d8(0x364));
                let _0x4254f5 = _0x490d95, _0xdf1e21 = _0x2a09d8(0x1f4) + _0x4254f5 + _0x2a09d8(0x12d);
                GM_xmlhttpRequest({
                    'method': _0x2a09d8(0x27b),
                    'url': _0xdf1e21,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x55c338()
                    },
                    'onload': function (_0x4d09a0) {
                        const _0x45a3fa = _0x2a09d8;
                        try {
                            let _0x5d698d = JSON[_0x45a3fa(0x2ef)](_0x4d09a0['response']);
                            _0x5c41ca(_0x5d698d), _0x5d698d[_0x45a3fa(0x15f)] === _0x45a3fa(0x16a) ? (alert('getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a' + _0x5d698d['message'] + ':\x20' + _0x5d698d['feedback_message']), _0x5c41ca(_0x45a3fa(0x251) + _0x5d698d[_0x45a3fa(0x171)] + ':\x20' + _0x5d698d[_0x45a3fa(0x193)]), _0x3d90af(_0x4d09a0)) : (_0x5c41ca(_0x45a3fa(0x356), _0x5d698d[_0x45a3fa(0x21b)]), _0x5d031f(_0x5d698d[_0x45a3fa(0x21b)]));
                        } catch (_0x57c8d4) {
                            _0x5c41ca(_0x45a3fa(0x356), _0x45a3fa(0x201), _0x57c8d4['message']), _0x3d90af(_0x57c8d4);
                        }
                    },
                    'onerror': function (_0x4599ee) {
                        const _0x2d8cac = _0x2a09d8;
                        _0x5c41ca(_0x2d8cac(0x356), _0x2d8cac(0x201), _0x4599ee), _0x3d90af(_0x4599ee);
                    }
                });
            });
        }
        function _0x1e08eb(_0x22a350, _0x1ee004) {
            const _0x5c0b1c = _0x5316ce;
            _0x1ee004 === !![] && (_0x5c41ca('hasReferrer', _0x5c0b1c(0x350)), _0x53b594('article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]')[_0x5c0b1c(0x155)](function () {
                const _0x562b41 = _0x5c0b1c;
                return _0x53b594(this)[_0x562b41(0x22e)](_0x562b41(0x348))[_0x562b41(0x2d2)] === 0x0;
            })[_0x5c0b1c(0x1a9)](_0x5c0b1c(0x1ee)));
            if (_0x22a350 == ![]) {
                const _0x42b06e = 0x64;
                let _0x5ba1ac = 0x0;
                var _0x25fa29 = setInterval(() => {
                    const _0x574e16 = _0x5c0b1c;
                    (_0x5ba1ac > _0x42b06e || _0x53b594(_0x574e16(0x151))[_0x574e16(0x2d2)] > 0x0) && (clearInterval(_0x25fa29), _0x5ba1ac > _0x42b06e && console[_0x574e16(0x2c9)](_0x574e16(0x262), _0x574e16(0x1cb))), _0x5c41ca(_0x574e16(0x262), _0x574e16(0x2d9)), _0xb5a834(), _0x5ba1ac++;
                }, 0x32);
            } else
                _0xb5a834();
        }
        function _0x55c338() {
            const _0x2c695e = _0x5316ce;
            let _0x302102 = null;
            return _0x53b594(_0x2c695e(0x2fc))[_0x2c695e(0x36a)](function () {
                const _0x27dae6 = _0x2c695e, _0x478e65 = /"APP_ID":"([0-9]+)"/ig, _0x4877de = _0x53b594(this)[_0x27dae6(0x1d8)]()[_0x27dae6(0x179)](_0x478e65);
                _0x4877de != null && _0x302102 == null && (_0x302102 = [..._0x53b594(this)[_0x27dae6(0x1d8)]()[_0x27dae6(0x359)](_0x478e65)]);
            }), _0x302102 ? _0x302102['at'](0x0)['at'](-0x1) : null;
        }
        function _0x5092f9(_0x5997ac) {
            const _0x4d18b5 = _0x5316ce;
            _0x5997ac ? (_0x53b594(_0x4d18b5(0x1bd))[_0x4d18b5(0x367)](_0x4d18b5(0x280)), _0x53b594(_0x4d18b5(0x1bd))[_0x4d18b5(0x305)](_0x4d18b5(0x220), _0x4d18b5(0x25d))) : (_0x53b594('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x4d18b5(0x30b)](_0x4d18b5(0x280)), _0x53b594(_0x4d18b5(0x1bd))[_0x4d18b5(0x305)](_0x4d18b5(0x220), ''));
        }
        function _0x293560(_0x2a344a) {
            return new Promise((_0x5c71cb, _0x9d7bb7) => {
                const _0x50311e = a0_0x1751;
                let _0x449766 = _0x50311e(0x1ac) + _0x2a344a + _0x50311e(0x20a);
                if (_0x2a344a == null) {
                    alert(_0x50311e(0x354)), _0x5c41ca('getMediaInfo()', _0x50311e(0x201), _0x50311e(0x354)), _0x5092f9(![]), _0x9d7bb7(-0x1);
                    return;
                }
                if (_0x55c338() == null) {
                    alert(_0x50311e(0x2b7)), _0x5c41ca(_0x50311e(0x1d7), _0x50311e(0x201), _0x50311e(0x2b7)), _0x5092f9(![]), _0x9d7bb7(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x50311e(0x27b),
                    'url': _0x449766,
                    'headers': {
                        'User-Agent': window[_0x50311e(0x1eb)][_0x50311e(0x142)],
                        'Accept': _0x50311e(0x28f),
                        'X-IG-App-ID': _0x55c338()
                    },
                    'onload': function (_0x21288a) {
                        const _0x10b92a = _0x50311e;
                        if (_0x21288a[_0x10b92a(0x2e4)] == _0x449766) {
                            let _0x5ab463 = JSON[_0x10b92a(0x2ef)](_0x21288a[_0x10b92a(0x34a)]);
                            _0x5c41ca(_0x10b92a(0x1d7), _0x5ab463), _0x5c71cb(_0x5ab463);
                        } else {
                            let _0x446acc = new URL(_0x21288a[_0x10b92a(0x2e4)]);
                            _0x446acc[_0x10b92a(0x1a3)][_0x10b92a(0x2d5)](_0x10b92a(0x235)) ? (_0x5c41ca(_0x10b92a(0x1d7), _0x10b92a(0x201), 'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.'), alert('The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.')) : (_0x5c41ca(_0x10b92a(0x1d7), 'reject', _0x10b92a(0x2e9) + _0x21288a[_0x10b92a(0x2e4)] + '\x22'), alert(_0x10b92a(0x2e9) + _0x21288a[_0x10b92a(0x2e4)] + '\x22')), _0x5092f9(![]), _0x9d7bb7(-0x1);
                        }
                    },
                    'onerror': function (_0x178996) {
                        const _0xbdfd87 = _0x50311e;
                        _0x5c41ca(_0xbdfd87(0x1d7), _0xbdfd87(0x201), _0x178996), _0x5c71cb(_0x178996);
                    }
                });
            });
        }
        function _0x4f73b1(_0x546f38) {
            const _0x2fd983 = _0x5316ce;
            var _0x471dab = 0x0, _0x5a4f37 = _0x546f38['find'](_0x2fd983(0x1ba));
            return (_0x5a4f37 == null || !_0x5a4f37['hasClass']('_acnb')) && (_0x5a4f37 = _0x546f38[_0x2fd983(0x22e)]('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)['children'](_0x2fd983(0x1fb))), _0x5a4f37[_0x2fd983(0x155)](_0x2fd983(0x1ad))['each'](function (_0x2872ad) {
                const _0x2689eb = _0x2fd983;
                _0x53b594(this)[_0x2689eb(0x1c6)](_0x2689eb(0x21c)) && (_0x471dab = _0x2872ad);
            }), _0x471dab;
        }
        function _0x38c1c2(_0x3d470e) {
            const _0x15ba43 = _0x5316ce;
            _0x3b7dee[_0x15ba43(0x146)] && _0x3d470e[_0x15ba43(0x22e)]('video')[_0x15ba43(0x36a)](function () {
                const _0x5564e4 = _0x15ba43;
                !_0x53b594(this)['data'](_0x5564e4(0x217)) && (_0x5c41ca(_0x5564e4(0x334)), _0x53b594(this)['on'](_0x5564e4(0x360), function () {
                    const _0xb9f46e = _0x5564e4;
                    _0x53b594(this)[_0xb9f46e(0x256)](_0xb9f46e(0x15c), !![]), this[_0xb9f46e(0x248)]();
                }));
            });
            _0x3b7dee['MODIFY_VIDEO_VOLUME'] && _0x3d470e[_0x15ba43(0x22e)](_0x15ba43(0x2ec))[_0x15ba43(0x36a)](function () {
                const _0x4d097b = _0x15ba43;
                !_0x53b594(this)['data'](_0x4d097b(0x31b)) && (_0x5c41ca(_0x4d097b(0x12f)), this[_0x4d097b(0x145)] = _0x75a760, _0x53b594(this)['on'](_0x4d097b(0x317), function () {
                    const _0x328863 = _0x4d097b;
                    this[_0x328863(0x145)] = _0x75a760;
                }), _0x53b594(this)['on'](_0x4d097b(0x29c), function () {
                    const _0x397bd8 = _0x4d097b;
                    this[_0x397bd8(0x145)] = _0x75a760;
                }), _0x53b594(this)['on']('timeupdate', function () {
                    const _0x609966 = _0x4d097b;
                    this[_0x609966(0x145)] = _0x75a760;
                }), _0x53b594(this)[_0x4d097b(0x256)](_0x4d097b(0x328), !![]));
            });
            _0x3b7dee[_0x15ba43(0x24d)] && _0x3d470e[_0x15ba43(0x22e)](_0x15ba43(0x2ec))[_0x15ba43(0x36a)](function () {
                const _0x2e487f = _0x15ba43;
                !_0x53b594(this)['data'](_0x2e487f(0x352)) && (_0x5c41ca('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), this[_0x2e487f(0x145)] = _0x75a760, _0x53b594(this)['on'](_0x2e487f(0x204), function () {
                    const _0x2c9d7b = _0x2e487f;
                    this[_0x2c9d7b(0x145)] = _0x75a760;
                }), _0x53b594(this)['on'](_0x2e487f(0x143), function () {
                    const _0x2f6bbf = _0x2e487f;
                    let _0x26c7c6 = _0x53b594(this)[_0x2f6bbf(0x218)]()['find'](_0x2f6bbf(0x32f))['find']('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x2f6bbf(0x155)](function (_0x320dba) {
                        const _0x1c16dc = _0x2f6bbf;
                        return _0x53b594(this)[_0x1c16dc(0x2f3)]() <= 0x40 && _0x53b594(this)[_0x1c16dc(0x2d6)]() <= 0x40 && _0x53b594(this)[_0x1c16dc(0x22e)](_0x1c16dc(0x27a))[_0x1c16dc(0x2d2)] > 0x0;
                    });
                    var _0x7e5c47 = _0x26c7c6['find']('svg\x20>\x20path[d^=\x22M16.636\x22]')['length'] === 0x0;
                    this['muted'] != _0x7e5c47 && (this[_0x2f6bbf(0x145)] = _0x75a760, _0x26c7c6?.[_0x2f6bbf(0x13c)]()), _0x53b594(this)[_0x2f6bbf(0x256)](_0x2f6bbf(0x28a)) && (_0x75a760 = this['volume'], GM_setValue('G_VIDEO_VOLUME', this[_0x2f6bbf(0x145)])), this[_0x2f6bbf(0x145)] == _0x75a760 && _0x53b594(this)[_0x2f6bbf(0x256)](_0x2f6bbf(0x28a), !![]);
                }), _0x53b594(this)['css'](_0x2e487f(0x2b0), _0x2e487f(0x299)), _0x53b594(this)['css'](_0x2e487f(0x220), '2'), _0x53b594(this)[_0x2e487f(0x256)](_0x2e487f(0x1f1), !![]), _0x53b594(this)[_0x2e487f(0x256)](_0x2e487f(0x352), !![]));
            });
            var _0x11169e = _0x3d470e['find'](_0x15ba43(0x32f))[_0x15ba43(0x2f1)]();
            _0x11169e[_0x15ba43(0x156)]('<div\x20class=\x22volume_slider\x20bottom\x22\x20/>'), _0x11169e['find'](_0x15ba43(0x35e))[_0x15ba43(0x156)](_0x15ba43(0x255) + _0x75a760 + _0x15ba43(0x267)), _0x11169e[_0x15ba43(0x22e)](_0x15ba43(0x2e8))[_0x15ba43(0x256)](_0x15ba43(0x353), '--ig-track-progress:\x20' + (_0x75a760 * 0x64 + '%')), _0x11169e[_0x15ba43(0x22e)](_0x15ba43(0x2e8))['on'](_0x15ba43(0x23c), function () {
                const _0x4fde5a = _0x15ba43;
                var _0x7b97bc = _0x53b594(this)[_0x4fde5a(0x236)]() * 0x64 + '%';
                _0x75a760 = _0x53b594(this)[_0x4fde5a(0x236)](), GM_setValue(_0x4fde5a(0x21d), _0x53b594(this)[_0x4fde5a(0x236)]()), _0x53b594(this)['attr'](_0x4fde5a(0x353), _0x4fde5a(0x296) + _0x7b97bc), _0x3d470e[_0x4fde5a(0x22e)](_0x4fde5a(0x2ec))['each'](function () {
                    const _0x33f3c6 = _0x4fde5a;
                    _0x5c41ca(_0x33f3c6(0x23a)), this[_0x33f3c6(0x145)] = _0x75a760;
                });
            }), _0x11169e[_0x15ba43(0x22e)](_0x15ba43(0x2e8))['on'](_0x15ba43(0x316), function () {
                const _0x23e666 = _0x15ba43;
                var _0x3cf160 = _0x75a760 * 0x64 + '%';
                _0x53b594(this)[_0x23e666(0x256)](_0x23e666(0x353), _0x23e666(0x296) + _0x3cf160), _0x53b594(this)[_0x23e666(0x236)](_0x75a760), _0x3d470e['find']('video')[_0x23e666(0x36a)](function () {
                    const _0x1341e4 = _0x23e666;
                    _0x5c41ca(_0x1341e4(0x23a)), this[_0x1341e4(0x145)] = _0x75a760;
                });
            }), _0x11169e['find']('div.volume_slider')['on']('click', function (_0x43d6c5) {
                const _0x1872c2 = _0x15ba43;
                _0x43d6c5[_0x1872c2(0x30a)](), _0x43d6c5['preventDefault']();
            });
        }
        ;
        function _0xb5a834() {
            const _0x2e17a0 = _0x5316ce;
            _0x53b594(_0x2e17a0(0x157))[_0x2e17a0(0x214)](function (_0x1801e0) {
                const _0x337486 = _0x2e17a0;
                return _0x53b594(this)['is'](_0x337486(0x339)) ? _0x53b594(this)[_0x337486(0x218)]()[_0x337486(0x218)]()[_0x337486(0x218)]()[_0x337486(0x218)]()[0x0] : this;
            })[_0x2e17a0(0x155)](function () {
                const _0x2081e5 = _0x2e17a0;
                return _0x53b594(this)[_0x2081e5(0x2d6)]() > 0x0 && _0x53b594(this)[_0x2081e5(0x2f3)]() > 0x0;
            })[_0x2e17a0(0x36a)](function (_0x211a9e) {
                const _0x412dea = _0x2e17a0;
                if (!_0x53b594(this)[_0x412dea(0x256)](_0x412dea(0x1ee)) && !_0x53b594(this)[_0x412dea(0x1c6)](_0x412dea(0x1f7)) && !_0x53b594(this)['children']('article')?.[_0x412dea(0x1c6)](_0x412dea(0x1f7)) && _0x53b594(this)[_0x412dea(0x167)]('div#scrollview')[_0x412dea(0x2d2)] === 0x0) {
                    _0x5c41ca(_0x412dea(0x242), _0x53b594(this));
                    var _0x5f01d6 = 0xf, _0x9c4849 = 0xf, _0x4a9238 = _0x53b594(this), _0x54f0ea = this[_0x412dea(0x33e)];
                    if (_0x54f0ea === 'DIV' && _0x211a9e != 0x0)
                        return;
                    const _0x3ad50e = _0x4a9238['children']('div')[_0x412dea(0x2ca)]('div');
                    if (_0x3ad50e[_0x412dea(0x2d2)] === 0x0)
                        return;
                    _0x5c41ca('Found\x20insert\x20point', _0x3ad50e);
                    if (_0x4a9238[_0x412dea(0x22e)]('._acay')[_0x412dea(0x2d2)] > 0x0) {
                        _0x4a9238[_0x412dea(0x22e)](_0x412dea(0x286))['length'] > 0x0 && _0x4a9238[_0x412dea(0x22e)](_0x412dea(0x286))[_0x412dea(0x305)](_0x412dea(0x20c), _0x412dea(0x1fe));
                        const _0x3b86f3 = _0x4a9238['find']('._acay')['first']()[_0x412dea(0x218)]()[0x0];
                        var _0x1aadb0 = new MutationObserver(function (_0x2340b6, _0x443c51) {
                            const _0x1b06f5 = _0x412dea;
                            _0x4a9238[_0x1b06f5(0x22e)]('._acay\x20+\x20.x24i39r')[_0x1b06f5(0x305)](_0x1b06f5(0x20c), '37px');
                        });
                        _0x1aadb0[_0x412dea(0x25f)](_0x3b86f3, { 'childList': !![] });
                    }
                    const _0x4917cb = '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x3aaf72('DW') + _0x412dea(0x13e) + _0x5f01d6 + _0x412dea(0x2d7) + _0x9c4849 + _0x412dea(0x303) + _0x559a71[_0x412dea(0x159)] + _0x412dea(0x327), _0x387067 = '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x3aaf72(_0x412dea(0x308)) + _0x412dea(0x19a) + (_0x5f01d6 + 0x23) + _0x412dea(0x2d7) + _0x9c4849 + _0x412dea(0x303) + _0x559a71[_0x412dea(0x308)] + _0x412dea(0x327), _0x220706 = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x3aaf72('THUMBNAIL_INTRO') + _0x412dea(0x221) + (_0x5f01d6 + 0x46) + 'px;top:' + _0x9c4849 + 'px;\x22>' + _0x559a71[_0x412dea(0x2e5)] + '</div>';
                    _0x3ad50e['eq'](_0x54f0ea === _0x412dea(0x12e) ? 0x0 : _0x3ad50e['length'] - 0x2)[_0x412dea(0x156)](_0x4917cb), _0x3ad50e['eq'](_0x54f0ea === 'DIV' ? 0x0 : _0x3ad50e[_0x412dea(0x2d2)] - 0x2)[_0x412dea(0x156)](_0x387067), setTimeout(() => {
                        const _0x4f3f2f = _0x412dea;
                        if (_0x3ad50e['eq'](_0x54f0ea === 'DIV' ? 0x0 : _0x3ad50e[_0x4f3f2f(0x2d2)] - 0x2)['find'](_0x4f3f2f(0x343))[_0x4f3f2f(0x2d2)] === 0x0)
                            _0x3ad50e['find'](_0x4f3f2f(0x2ec))[_0x4f3f2f(0x2d2)] > 0x0 && _0x3ad50e['eq'](_0x54f0ea === _0x4f3f2f(0x12e) ? 0x0 : _0x3ad50e[_0x4f3f2f(0x2d2)] - 0x2)['append'](_0x220706);
                        else {
                            const _0x3a9657 = (_0x531626, _0x2e1f07) => {
                                    _0x531626['forEach'](_0x394eba => {
                                        const _0x17fabc = a0_0x1751;
                                        if (_0x394eba[_0x17fabc(0x2e2)]) {
                                            var _0x2a1f86 = _0x53b594(_0x394eba[_0x17fabc(0x123)]);
                                            _0x2a1f86[_0x17fabc(0x22e)](_0x17fabc(0x2ec))['length'] > 0x0 ? (_0x3ad50e['eq'](_0x54f0ea === 'DIV' ? 0x0 : _0x3ad50e[_0x17fabc(0x2d2)] - 0x2)['append'](_0x220706), _0x38c1c2(_0x4a9238)) : _0x3ad50e['find'](_0x17fabc(0x1ab))?.[_0x17fabc(0x315)]();
                                        }
                                    });
                                }, _0x54c1c9 = new IntersectionObserver(_0x3a9657, {
                                    'root': _0x4a9238[_0x4f3f2f(0x22e)](_0x4f3f2f(0x1b6))[_0x4f3f2f(0x2f1)]()[_0x4f3f2f(0x218)]()[_0x4f3f2f(0x218)]()['parent']()[0x0],
                                    'rootMargin': _0x4f3f2f(0x24e),
                                    'threshold': 0.1
                                }), _0x481a5b = new MutationObserver(function (_0x1b035b, _0x56de15) {
                                    const _0xfb678 = _0x4f3f2f;
                                    var _0xd4028f = _0x1b035b['at'](0x0)?.['target'];
                                    _0x53b594(_0xd4028f)[_0xfb678(0x22e)]('li._acaz')[_0xfb678(0x36a)](function () {
                                        _0x54c1c9['observe'](this);
                                    });
                                });
                            _0x4a9238[_0x4f3f2f(0x22e)](_0x4f3f2f(0x343))[_0x4f3f2f(0x36a)](function () {
                                const _0x219d13 = _0x4f3f2f;
                                _0x54c1c9[_0x219d13(0x25f)](this);
                            });
                            const _0x53711e = _0x3ad50e['eq'](_0x54f0ea === _0x4f3f2f(0x12e) ? 0x0 : _0x3ad50e[_0x4f3f2f(0x2d2)] - 0x2)['find']('div\x20>\x20ul\x20li._acaz')?.[_0x4f3f2f(0x218)]()[0x0], _0x19e442 = _0x3ad50e['eq'](_0x54f0ea === _0x4f3f2f(0x12e) ? 0x0 : _0x3ad50e['length'] - 0x2)[_0x4f3f2f(0x22e)](_0x4f3f2f(0x343))?.['parent']()[_0x4f3f2f(0x218)]()[0x0];
                            _0x53711e && _0x481a5b[_0x4f3f2f(0x25f)](_0x53711e, { 'childList': !![] }), _0x19e442 && _0x481a5b['observe'](_0x19e442, { 'attributes': !![] });
                        }
                    }, 0x32), _0x3ad50e[_0x412dea(0x305)](_0x412dea(0x2b0), _0x412dea(0x2f6)), _0x38c1c2(_0x4a9238), _0x53b594(this)['on'](_0x412dea(0x13c), _0x412dea(0x1ab), function (_0x255ef0) {
                        const _0x43964b = _0x412dea;
                        _0x5092f9(!![]), _0x4bbab3 = _0x53b594(this)[_0x43964b(0x218)]()[_0x43964b(0x218)]()[_0x43964b(0x218)]()['attr'](_0x43964b(0x120)), _0x4e1e1e = location[_0x43964b(0x1a3)]['replace'](/\/$/, '')[_0x43964b(0x228)]('/')['at'](-0x1) || _0x53b594(this)[_0x43964b(0x218)]()[_0x43964b(0x218)]()[_0x43964b(0x218)]()[_0x43964b(0x22e)](_0x43964b(0x2c8))[_0x43964b(0x2f1)]()[_0x43964b(0x256)](_0x43964b(0x2b6))[_0x43964b(0x228)]('/')['at'](0x2) || _0x53b594(this)['parent']()[_0x43964b(0x218)]()[_0x43964b(0x2ca)](_0x43964b(0x175))['children'](_0x43964b(0x1fb))['children']('div:last-child')[_0x43964b(0x22e)](_0x43964b(0x2c8))['last']()[_0x43964b(0x256)](_0x43964b(0x2b6))[_0x43964b(0x228)]('/')['at'](0x2);
                        var _0x2a79fc = _0x53b594(this)[_0x43964b(0x218)]()[_0x43964b(0x218)]()['parent'](), _0x363735 = _0x4f73b1(_0x2a79fc);
                        _0x4a2883(!![], ![]), _0x5c816e(_0x4e1e1e, _0x43964b(0x210), '')['then'](() => {
                            let _0x5360e2 = setInterval(() => {
                                const _0x2ad0d8 = a0_0x1751;
                                if (_0x53b594(_0x2ad0d8(0x247))[_0x2ad0d8(0x2d2)] > 0x0) {
                                    clearInterval(_0x5360e2);
                                    var _0x253ab4 = _0x53b594(_0x2ad0d8(0x176) + (_0x363735 + 0x1) + '\x22]')?.['parent']()['find'](_0x2ad0d8(0x1a1))?.[_0x2ad0d8(0x2f1)]();
                                    _0x253ab4 != null && _0x253ab4[_0x2ad0d8(0x2d2)] > 0x0 ? _0x253ab4[_0x2ad0d8(0x13c)]() : alert(_0x2ad0d8(0x1b1)), _0x5092f9(![]), _0x53b594(_0x2ad0d8(0x26e))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x53b594(this)['on']('click', _0x412dea(0x133), function (_0x20d8bf) {
                        const _0x22186c = _0x412dea;
                        _0x5092f9(!![]), _0x4bbab3 = _0x53b594(this)[_0x22186c(0x218)]()['parent']()[_0x22186c(0x218)]()['attr']('data-username'), _0x4e1e1e = location[_0x22186c(0x1a3)][_0x22186c(0x2c6)](/\/$/, '')[_0x22186c(0x228)]('/')['at'](-0x1) || _0x53b594(this)[_0x22186c(0x218)]()['parent']()[_0x22186c(0x218)]()['find'](_0x22186c(0x2c8))[_0x22186c(0x2f1)]()['attr']('href')[_0x22186c(0x228)]('/')['at'](0x2) || _0x53b594(this)[_0x22186c(0x218)]()['parent']()['children'](_0x22186c(0x175))[_0x22186c(0x2ca)](_0x22186c(0x1fb))[_0x22186c(0x2ca)](_0x22186c(0x175))['find'](_0x22186c(0x2c8))[_0x22186c(0x297)]()[_0x22186c(0x256)](_0x22186c(0x2b6))['split']('/')['at'](0x2);
                        var _0x172918 = _0x53b594(this)['parent']()[_0x22186c(0x218)]()['parent'](), _0x1622bf = _0x4f73b1(_0x172918);
                        _0x4a2883(!![], ![]), _0x5c816e(_0x4e1e1e, _0x22186c(0x210), '')[_0x22186c(0x134)](() => {
                            let _0x143991 = setInterval(() => {
                                const _0x28d1f7 = a0_0x1751;
                                if (_0x53b594(_0x28d1f7(0x247))[_0x28d1f7(0x2d2)] > 0x0) {
                                    clearInterval(_0x143991);
                                    var _0x415068 = _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x1622bf + 0x1) + '\x22]');
                                    if (_0x3b7dee['FORCE_RESOURCE_VIA_MEDIA'] && _0x3b7dee[_0x28d1f7(0x28c)])
                                        _0x1a9d79(_0x415068[_0x28d1f7(0x2f1)]()[0x0], !![]);
                                    else {
                                        let _0x3d73ce = _0x415068?.['attr'](_0x28d1f7(0x2a4));
                                        if (_0x3d73ce) {
                                            var _0x31c246 = new URL(_0x3d73ce);
                                            _0x31c246[_0x28d1f7(0x212)] = _0x28d1f7(0x186), _0x1f2cb7(_0x31c246[_0x28d1f7(0x2b6)]);
                                        } else
                                            alert(_0x28d1f7(0x313));
                                    }
                                    _0x5092f9(![]), _0x53b594('.IG_SN_DIG')[_0x28d1f7(0x315)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x53b594(this)['on'](_0x412dea(0x13c), _0x412dea(0x348), async function (_0x56e588) {
                        const _0x4e99bb = _0x412dea;
                        _0x4bbab3 = _0x53b594(this)[_0x4e99bb(0x218)]()[_0x4e99bb(0x218)]()[_0x4e99bb(0x218)]()[_0x4e99bb(0x256)](_0x4e99bb(0x120)), _0x4e1e1e = location[_0x4e99bb(0x1a3)][_0x4e99bb(0x2c6)](/\/$/, '')[_0x4e99bb(0x228)]('/')['at'](-0x1) || _0x53b594(this)['parent']()[_0x4e99bb(0x218)]()[_0x4e99bb(0x218)]()[_0x4e99bb(0x22e)](_0x4e99bb(0x2c8))[_0x4e99bb(0x2f1)]()[_0x4e99bb(0x256)](_0x4e99bb(0x2b6))[_0x4e99bb(0x228)]('/')['at'](0x2) || _0x53b594(this)[_0x4e99bb(0x218)]()['parent']()[_0x4e99bb(0x2ca)](_0x4e99bb(0x175))[_0x4e99bb(0x2ca)](_0x4e99bb(0x1fb))['children'](_0x4e99bb(0x175))['find'](_0x4e99bb(0x2c8))[_0x4e99bb(0x297)]()[_0x4e99bb(0x256)](_0x4e99bb(0x2b6))[_0x4e99bb(0x228)]('/')['at'](0x2), _0x4a2883(_0x3b7dee[_0x4e99bb(0x2fa)], !![]), _0x53b594(_0x4e99bb(0x2ba))['html'](_0x4e99bb(0x20d) + _0x4e1e1e + '\x22>' + _0x4e1e1e + _0x4e99bb(0x23d));
                        if (_0x3b7dee[_0x4e99bb(0x30f)]) {
                            _0x5092f9(!![]), _0xc5b6cc(!![]);
                            var _0x1b0875 = _0x4f73b1(_0x53b594(this)[_0x4e99bb(0x218)]()[_0x4e99bb(0x218)]()[_0x4e99bb(0x218)]());
                            _0x5c816e(_0x4e1e1e, _0x4e99bb(0x210), '')[_0x4e99bb(0x134)](() => {
                                let _0x5c2746 = setInterval(() => {
                                    const _0x48add3 = a0_0x1751;
                                    if (_0x53b594(_0x48add3(0x247))[_0x48add3(0x2d2)] > 0x0) {
                                        clearInterval(_0x5c2746);
                                        var _0x3970da = _0x53b594(_0x48add3(0x176) + (_0x1b0875 + 0x1) + '\x22]')?.[_0x48add3(0x256)](_0x48add3(0x2a4));
                                        _0x3970da ? (_0x5092f9(![]), _0x53b594(_0x48add3(0x176) + (_0x1b0875 + 0x1) + '\x22]')?.[_0x48add3(0x13c)]()) : alert(_0x48add3(0x2f8)), _0x53b594(_0x48add3(0x26e))[_0x48add3(0x315)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x3b7dee[_0x4e99bb(0x2fa)]) {
                            var _0xdef872 = 0x0, _0x5277f9 = _0x53b594(this)[_0x4e99bb(0x218)]()[_0x4e99bb(0x218)]()['find'](_0x4e99bb(0x243))[_0x4e99bb(0x2d2)], _0x8bf3cc = window[_0x4e99bb(0x1f2)][_0x4e99bb(0x1a3)], _0x3d0bc0 = '/' + _0x8bf3cc[_0x4e99bb(0x228)]('/')[0x1] + '/' + _0x8bf3cc[_0x4e99bb(0x228)]('/')[0x2] + '/', _0x4259ac = _0x3b7dee[_0x4e99bb(0x35c)], _0x51bb4c = new Date(_0x53b594(this)['parent']()[_0x4e99bb(0x218)]()['find']('a[href^=\x22/p/\x22]\x20time[datetime]')[_0x4e99bb(0x2f1)]()[_0x4e99bb(0x256)](_0x4e99bb(0x16f)))[_0x4e99bb(0x275)]();
                            if (_0x5277f9)
                                _0x53b594(this)[_0x4e99bb(0x218)]()[_0x4e99bb(0x22e)](_0x4e99bb(0x243))[_0x4e99bb(0x36a)](function () {
                                    const _0x580534 = _0x4e99bb;
                                    let _0x45a4d2 = _0x53b594(this)[_0x580534(0x218)]()[_0x580534(0x218)]()[_0x580534(0x22e)](_0x580534(0x2ec));
                                    _0x45a4d2 && _0x45a4d2[_0x580534(0x256)]('src') && (_0x4259ac = !![]);
                                }), _0x4259ac || _0x3b7dee[_0x4e99bb(0x30c)] ? _0x5c816e(_0x4e1e1e, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x3aaf72('LOAD_BLOB_MULTIPLE')) : (_0x53b594(this)[_0x4e99bb(0x218)]()['find']('._acay\x20._acaz')['each'](function () {
                                    const _0x3556a0 = _0x4e99bb;
                                    _0xdef872++;
                                    let _0x3ad0e9 = _0x53b594(this)['find'](_0x3556a0(0x2ec)), _0x59273f = _0x53b594(this)[_0x3556a0(0x22e)](_0x3556a0(0x36f)), _0x118c6c = _0x59273f['attr']('srcset') ? _0x59273f[_0x3556a0(0x256)](_0x3556a0(0x2ad))[_0x3556a0(0x228)]('\x20')[0x0] : _0x59273f['attr'](_0x3556a0(0x2d8));
                                    _0x3ad0e9 && _0x3ad0e9[_0x3556a0(0x256)](_0x3556a0(0x2d8)) && (_0x4259ac = !![]), _0x59273f && _0x118c6c && _0x53b594(_0x3556a0(0x210))[_0x3556a0(0x156)](_0x3556a0(0x2ea) + _0x51bb4c + _0x3556a0(0x183) + _0x4e1e1e + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0xdef872 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x118c6c + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x118c6c + _0x3556a0(0x1d4) + _0x3aaf72(_0x3556a0(0x1dd)) + _0x3556a0(0x132) + _0xdef872 + _0x3556a0(0x17f));
                                }), _0x4259ac && _0x5c816e(_0x4e1e1e, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x3aaf72('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x3b7dee['FORCE_RESOURCE_VIA_MEDIA'])
                                    _0x5c816e(_0x4e1e1e, _0x4e99bb(0x210), _0x3aaf72('LOAD_BLOB_MULTIPLE'));
                                else {
                                    _0xdef872++;
                                    let _0x29a4fe = _0x53b594(this)[_0x4e99bb(0x218)]()[_0x4e99bb(0x218)]()[_0x4e99bb(0x22e)](_0x4e99bb(0x2ec)), _0x51db9d = _0x53b594(this)[_0x4e99bb(0x218)]()['parent']()[_0x4e99bb(0x22e)](_0x4e99bb(0x36f)), _0x5b7117 = _0x51db9d[_0x4e99bb(0x256)](_0x4e99bb(0x2ad)) ? _0x51db9d[_0x4e99bb(0x256)](_0x4e99bb(0x2ad))[_0x4e99bb(0x228)]('\x20')[0x0] : _0x51db9d[_0x4e99bb(0x256)](_0x4e99bb(0x2d8));
                                    _0x29a4fe && _0x29a4fe['attr'](_0x4e99bb(0x2d8)) && _0x5c816e(_0x4e1e1e, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x3aaf72(_0x4e99bb(0x269))), _0x51db9d && _0x5b7117 && _0x53b594(_0x4e99bb(0x210))[_0x4e99bb(0x156)]('<a\x20datetime=\x22' + _0x51bb4c + _0x4e99bb(0x183) + _0x4e1e1e + _0x4e99bb(0x1cc) + _0xdef872 + _0x4e99bb(0x365) + _0x5b7117 + _0x4e99bb(0x27e) + _0x5b7117 + _0x4e99bb(0x1d4) + _0x3aaf72(_0x4e99bb(0x1dd)) + _0x4e99bb(0x132) + _0xdef872 + '\x20-</a>');
                                }
                            }
                        }
                        _0x53b594(_0x4e99bb(0x247))[_0x4e99bb(0x36a)](function () {
                            const _0x3b0b5b = _0x4e99bb;
                            _0x53b594(this)[_0x3b0b5b(0x1d3)](_0x3b0b5b(0x181)), _0x53b594(this)[_0x3b0b5b(0x2ae)](_0x3b0b5b(0x1b2)), _0x53b594(this)[_0x3b0b5b(0x2fe)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x3aaf72('NEW_TAB') + _0x3b0b5b(0x121) + _0x559a71['NEW_TAB'] + _0x3b0b5b(0x327)), _0x53b594(this)[_0x3b0b5b(0x256)](_0x3b0b5b(0x2a0)) == _0x3b0b5b(0x2ec) && _0x53b594(this)['after'](_0x3b0b5b(0x278) + _0x3aaf72(_0x3b0b5b(0x1ea)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x559a71[_0x3b0b5b(0x2e5)] + '</div>');
                        }), _0x3b7dee['DIRECT_DOWNLOAD_ALL'] && _0x5c816e(_0x4e1e1e, _0x4e99bb(0x210), _0x3aaf72(_0x4e99bb(0x2b3)))[_0x4e99bb(0x134)](() => {
                            let _0xe5c671 = setInterval(() => {
                                const _0x4e5ad2 = a0_0x1751;
                                _0x53b594(_0x4e5ad2(0x247))[_0x4e5ad2(0x2d2)] > 0x0 && (clearInterval(_0xe5c671), _0x53b594(_0x4e5ad2(0x247))[_0x4e5ad2(0x36a)](function () {
                                    const _0x5d341a = _0x4e5ad2;
                                    _0x53b594(this)[_0x5d341a(0x13c)]();
                                }), _0x53b594(_0x4e5ad2(0x26e))[_0x4e5ad2(0x315)]());
                            }, 0xfa);
                        });
                    });
                    var _0x197682 = _0x53b594(this)[_0x412dea(0x22e)](_0x412dea(0x182))['first']()[_0x412dea(0x1d8)]();
                    _0x53b594(this)[_0x412dea(0x256)](_0x412dea(0x1ee), _0x412dea(0x219)), _0x53b594(this)[_0x412dea(0x256)]('data-username', _0x197682);
                }
            });
        }
        function _0x5c816e(_0x39ffcc, _0x11dce9, _0x2f0804) {
            return new Promise(async _0x532b0a => {
                const _0x4e041d = a0_0x1751;
                _0x53b594(_0x11dce9 + '\x20a')[_0x4e041d(0x315)](), _0x53b594(_0x11dce9)[_0x4e041d(0x156)](_0x4e041d(0x351) + _0x2f0804 + _0x4e041d(0x336));
                let _0x226cd3 = await _0x3b48b8(_0x39ffcc);
                if (_0x226cd3[_0x4e041d(0x230)] === 'query_hash') {
                    let _0x4cabcf = 0x1, _0x2e6978 = _0x226cd3[_0x4e041d(0x21b)], _0x2a4eeb = _0x2e6978[_0x4e041d(0x1ff)];
                    _0x2a4eeb['__typename'] == _0x4e041d(0x1d2) && _0x2a4eeb[_0x4e041d(0x1a4)] && (_0x53b594(_0x11dce9)[_0x4e041d(0x156)](_0x4e041d(0x2cd) + _0x2a4eeb['id'] + _0x4e041d(0x1c9) + _0x2a4eeb['taken_at_timestamp'] + _0x4e041d(0x36c) + _0x2a4eeb[_0x4e041d(0x18e)] + _0x4e041d(0x2f5) + _0x2a4eeb[_0x4e041d(0x279)][_0x4e041d(0x1b0)] + _0x4e041d(0x24f) + _0x4cabcf + _0x4e041d(0x213) + _0x2a4eeb[_0x4e041d(0x1a4)] + _0x4e041d(0x27e) + _0x2a4eeb[_0x4e041d(0x368)][0x1][_0x4e041d(0x2d8)] + _0x4e041d(0x2bc) + _0x3aaf72(_0x4e041d(0x15b)) + _0x4e041d(0x132) + _0x4cabcf + '\x20-</a>'), _0x4cabcf++);
                    _0x2a4eeb[_0x4e041d(0x358)] == _0x4e041d(0x18a) && (_0x53b594(_0x11dce9)[_0x4e041d(0x156)](_0x4e041d(0x2cd) + _0x2a4eeb['id'] + _0x4e041d(0x1c9) + _0x2a4eeb[_0x4e041d(0x2c1)] + _0x4e041d(0x36c) + _0x2a4eeb[_0x4e041d(0x18e)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x2a4eeb['owner'][_0x4e041d(0x1b0)] + _0x4e041d(0x24f) + _0x4cabcf + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x2a4eeb[_0x4e041d(0x368)][_0x2a4eeb['display_resources'][_0x4e041d(0x2d2)] - 0x1][_0x4e041d(0x2d8)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2a4eeb['display_resources'][0x1][_0x4e041d(0x2d8)] + _0x4e041d(0x1d4) + _0x3aaf72('IMG') + _0x4e041d(0x132) + _0x4cabcf + _0x4e041d(0x17f)), _0x4cabcf++);
                    if (_0x2a4eeb[_0x4e041d(0x358)] == _0x4e041d(0x2a1) && _0x2a4eeb[_0x4e041d(0x287)])
                        for (let _0xb12b94 of _0x2a4eeb[_0x4e041d(0x287)]['edges']) {
                            _0xb12b94[_0x4e041d(0x314)][_0x4e041d(0x358)] == 'GraphVideo' && _0x53b594(_0x11dce9)[_0x4e041d(0x156)]('<a\x20media-id=\x22' + _0xb12b94[_0x4e041d(0x314)]['id'] + '\x22\x20datetime=\x22' + _0x2a4eeb[_0x4e041d(0x2c1)] + _0x4e041d(0x36c) + _0x2a4eeb['shortcode'] + _0x4e041d(0x2f5) + _0x2a4eeb[_0x4e041d(0x279)][_0x4e041d(0x1b0)] + '\x22\x20data-globalIndex=\x22' + _0x4cabcf + _0x4e041d(0x213) + _0xb12b94[_0x4e041d(0x314)][_0x4e041d(0x1a4)] + _0x4e041d(0x27e) + _0xb12b94[_0x4e041d(0x314)][_0x4e041d(0x368)][0x1][_0x4e041d(0x2d8)] + _0x4e041d(0x2ed) + _0x3aaf72(_0x4e041d(0x15b)) + '</span>\x20' + _0x4cabcf + _0x4e041d(0x17f)), _0xb12b94[_0x4e041d(0x314)]['__typename'] == 'GraphImage' && _0x53b594(_0x11dce9)['append'](_0x4e041d(0x2cd) + _0xb12b94[_0x4e041d(0x314)]['id'] + '\x22\x20datetime=\x22' + _0x2a4eeb['taken_at_timestamp'] + _0x4e041d(0x36c) + _0x2a4eeb[_0x4e041d(0x18e)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x2a4eeb['owner'][_0x4e041d(0x1b0)] + _0x4e041d(0x24f) + _0x4cabcf + _0x4e041d(0x213) + _0xb12b94[_0x4e041d(0x314)][_0x4e041d(0x368)][_0xb12b94[_0x4e041d(0x314)][_0x4e041d(0x368)][_0x4e041d(0x2d2)] - 0x1]['src'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xb12b94[_0x4e041d(0x314)][_0x4e041d(0x368)][0x1][_0x4e041d(0x2d8)] + _0x4e041d(0x1d4) + _0x3aaf72('IMG') + _0x4e041d(0x132) + _0x4cabcf + _0x4e041d(0x17f)), _0x4cabcf++;
                        }
                } else {
                    let _0xeaf0d2 = _0x226cd3[_0x4e041d(0x21b)];
                    if (_0xeaf0d2[_0x4e041d(0x2a5)])
                        _0x5c41ca(_0x4e041d(0x2a5)), _0xeaf0d2[_0x4e041d(0x2a5)][_0x4e041d(0x1e1)]((_0xd01b30, _0x114862) => {
                            const _0x13d29e = _0x4e041d;
                            let _0x5a992c = _0x114862 + 0x1;
                            _0xd01b30[_0x13d29e(0x32a)] == null ? _0x53b594(_0x11dce9)[_0x13d29e(0x156)](_0x13d29e(0x2cd) + _0xd01b30['pk'] + '\x22\x20datetime=\x22' + _0xd01b30['taken_at'] + _0x13d29e(0x36c) + _0xeaf0d2[_0x13d29e(0x211)] + _0x13d29e(0x165) + _0xeaf0d2[_0x13d29e(0x279)][_0x13d29e(0x1b0)] + '\x22\x20data-globalIndex=\x22' + _0x5a992c + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0xd01b30['image_versions2'][_0x13d29e(0x291)][0x0][_0x13d29e(0x14b)] + _0x13d29e(0x27e) + _0xd01b30[_0x13d29e(0x13f)][_0x13d29e(0x291)][0x0][_0x13d29e(0x14b)] + _0x13d29e(0x1d4) + _0x3aaf72(_0x13d29e(0x1dd)) + '</span>\x20' + _0x5a992c + '\x20-</a>') : _0x53b594(_0x11dce9)['append'](_0x13d29e(0x2cd) + _0xd01b30['pk'] + _0x13d29e(0x1c9) + _0xd01b30[_0x13d29e(0x34f)] + _0x13d29e(0x36c) + _0xeaf0d2[_0x13d29e(0x211)] + _0x13d29e(0x2f5) + _0xeaf0d2[_0x13d29e(0x279)]['username'] + _0x13d29e(0x24f) + _0x5a992c + _0x13d29e(0x213) + _0xd01b30[_0x13d29e(0x32a)][0x0][_0x13d29e(0x14b)] + _0x13d29e(0x27e) + _0xd01b30[_0x13d29e(0x13f)][_0x13d29e(0x291)][0x0][_0x13d29e(0x14b)] + _0x13d29e(0x2bc) + _0x3aaf72('VID') + '</span>\x20' + _0x5a992c + '\x20-</a>');
                        });
                    else {
                        let _0x310e9c = 0x1;
                        _0xeaf0d2[_0x4e041d(0x32a)] == null ? _0x53b594(_0x11dce9)[_0x4e041d(0x156)](_0x4e041d(0x2cd) + _0xeaf0d2['pk'] + '\x22\x20datetime=\x22' + _0xeaf0d2[_0x4e041d(0x34f)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0xeaf0d2['code'] + _0x4e041d(0x165) + _0xeaf0d2[_0x4e041d(0x279)][_0x4e041d(0x1b0)] + _0x4e041d(0x24f) + _0x310e9c + _0x4e041d(0x213) + _0xeaf0d2[_0x4e041d(0x13f)]['candidates'][0x0][_0x4e041d(0x14b)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xeaf0d2[_0x4e041d(0x13f)][_0x4e041d(0x291)][0x0]['url'] + _0x4e041d(0x1d4) + _0x3aaf72(_0x4e041d(0x1dd)) + _0x4e041d(0x132) + _0x310e9c + '\x20-</a>') : _0x53b594(_0x11dce9)[_0x4e041d(0x156)](_0x4e041d(0x2cd) + _0xeaf0d2['pk'] + _0x4e041d(0x1c9) + _0xeaf0d2[_0x4e041d(0x34f)] + _0x4e041d(0x36c) + _0xeaf0d2[_0x4e041d(0x211)] + _0x4e041d(0x2f5) + _0xeaf0d2['owner']['username'] + '\x22\x20data-globalIndex=\x22' + _0x310e9c + _0x4e041d(0x213) + _0xeaf0d2['video_versions'][0x0]['url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0xeaf0d2['image_versions2'][_0x4e041d(0x291)][0x0][_0x4e041d(0x14b)] + _0x4e041d(0x2bc) + _0x3aaf72('VID') + '</span>\x20' + _0x310e9c + _0x4e041d(0x17f));
                    }
                }
                _0x53b594(_0x4e041d(0x30d))[_0x4e041d(0x315)](), _0x53b594(_0x4e041d(0x247))[_0x4e041d(0x36a)](function () {
                    const _0x22b865 = _0x4e041d;
                    _0x53b594(this)[_0x22b865(0x1d3)](_0x22b865(0x181)), _0x53b594(this)[_0x22b865(0x2ae)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x53b594(this)[_0x22b865(0x2fe)](_0x22b865(0x149) + _0x3aaf72('NEW_TAB') + _0x22b865(0x121) + _0x559a71[_0x22b865(0x308)] + '</div>'), _0x53b594(this)[_0x22b865(0x256)](_0x22b865(0x2a0)) == 'video' && _0x53b594(this)['after'](_0x22b865(0x278) + _0x3aaf72(_0x22b865(0x1ea)) + _0x22b865(0x15e) + _0x559a71['THUMBNAIL'] + '</div>');
                }), _0x532b0a(!![]);
            });
        }
        function _0x4a2883(_0x5bd6b4, _0x238746) {
            const _0x5d3008 = _0x5316ce;
            let _0x3f85aa = _0x5bd6b4 ? _0x5d3008(0x268) : '';
            _0x53b594(_0x5d3008(0x177))[_0x5d3008(0x156)](_0x5d3008(0x239) + _0x3f85aa + '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>'), _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')[_0x5d3008(0x156)](_0x5d3008(0x361) + _0x3aaf72(_0x5d3008(0x17a)) + _0x5d3008(0x24b) + _0x559a71[_0x5d3008(0x17a)] + '</div></div>'), _0x238746 && (_0x53b594(_0x5d3008(0x29d))['append']('<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>'), _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')['append'](_0x5d3008(0x20f) + _0x3aaf72(_0x5d3008(0x199)) + _0x5d3008(0x163)), _0x53b594(_0x5d3008(0x222))['append'](_0x5d3008(0x282) + _0x3aaf72(_0x5d3008(0x2bb)) + '</button>'), _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')['append']('<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>' + _0x3aaf72(_0x5d3008(0x173)) + _0x5d3008(0x344)));
        }
        function _0xc5b6cc(_0x150280) {
            const _0x16c78a = _0x5316ce;
            _0x53b594('.IG_SN_DIG')['length'] && (_0x150280 ? _0x53b594('.IG_SN_DIG')[_0x16c78a(0x30b)]('hidden') : _0x53b594(_0x16c78a(0x26e))[_0x16c78a(0x367)]('hidden'));
        }
        function _0xba9ba9(_0x5393bc, _0x310472, _0x483fea, _0x15533a, _0x2c377e, _0x59d2fb) {
            setTimeout(() => {
                const _0x23c0ab = a0_0x1751;
                _0x5092f9(!![]), fetch(_0x5393bc)[_0x23c0ab(0x134)](_0x58ee88 => {
                    const _0x3239b5 = _0x23c0ab;
                    return _0x58ee88[_0x3239b5(0x250)]()[_0x3239b5(0x134)](_0x40c698 => {
                        _0x5092f9(![]), _0x5ea3b2(_0x5393bc, _0x40c698, _0x310472, _0x483fea, _0x15533a, _0x2c377e, _0x59d2fb);
                    });
                });
            }, 0x32);
        }
        function _0x5ea3b2(_0x5abf6f, _0x352187, _0xafe2c9, _0x3c45e9, _0x12d148, _0x2a8206, _0x5ea217) {
            const _0x326ff1 = _0x5316ce;
            _0x12d148 = parseInt(_0x12d148['toString']()[_0x326ff1(0x1e9)](0xd, '0'));
            _0x3b7dee['RENAME_PUBLISH_DATE'] && (_0x12d148 = parseInt(_0x12d148[_0x326ff1(0x30e)]()[_0x326ff1(0x1e9)](0xd, '0')));
            const _0xb49341 = new Date(_0x12d148), _0x242f37 = document[_0x326ff1(0x209)]('a'), _0x235ae1 = new URL(_0x5abf6f)[_0x326ff1(0x1a3)][_0x326ff1(0x228)]('/')['at'](-0x1)[_0x326ff1(0x228)]('.')[_0x326ff1(0x2bf)](0x0, -0x1)[_0x326ff1(0x14c)]('.'), _0x15f97a = _0xb49341[_0x326ff1(0x2cc)]()[_0x326ff1(0x30e)](), _0x1e492f = (_0xb49341['getMonth']() + 0x1)[_0x326ff1(0x30e)]()[_0x326ff1(0x1c0)](0x2, '0'), _0x5d8036 = _0xb49341[_0x326ff1(0x362)]()[_0x326ff1(0x30e)]()[_0x326ff1(0x1c0)](0x2, '0'), _0x375902 = _0xb49341['getHours']()['toString']()[_0x326ff1(0x1c0)](0x2, '0'), _0x42e1f3 = _0xb49341[_0x326ff1(0x2df)]()['toString']()[_0x326ff1(0x1c0)](0x2, '0'), _0x1b1b6e = _0xb49341['getSeconds']()[_0x326ff1(0x30e)]()[_0x326ff1(0x1c0)](0x2, '0');
            var _0x3f175d = _0x59af11[_0x326ff1(0x33f)](), _0x31dfc2 = {
                    '%USERNAME%': _0xafe2c9,
                    '%SOURCE_TYPE%': _0x3c45e9,
                    '%SHORTCODE%': _0x5ea217 ? _0x5ea217 : '',
                    '%YEAR%': _0x15f97a,
                    '%2-YEAR%': _0x15f97a['substr'](-0x2),
                    '%MONTH%': _0x1e492f,
                    '%DAY%': _0x5d8036,
                    '%HOUR%': _0x375902,
                    '%MINUTE%': _0x42e1f3,
                    '%SECOND%': _0x1b1b6e,
                    '%ORIGINAL_NAME%': _0x235ae1,
                    '%ORIGINAL_NAME_FIRST%': _0x235ae1[_0x326ff1(0x228)]('_')['at'](0x0)
                };
            _0x3f175d = _0x3f175d[_0x326ff1(0x2c6)](/%[\w\-]+%/g, function (_0x3da90c) {
                return _0x31dfc2[_0x3da90c] || _0x3da90c;
            });
            const _0x505cc6 = _0xafe2c9 + '_' + _0x235ae1 + '.' + _0x2a8206;
            _0x242f37[_0x326ff1(0x2b6)] = URL[_0x326ff1(0x338)](_0x352187), _0x242f37[_0x326ff1(0x281)](_0x326ff1(0x1af), _0x3b7dee[_0x326ff1(0x238)] ? _0x3f175d + '.' + _0x2a8206 : _0x505cc6), _0x242f37['click'](), _0x242f37[_0x326ff1(0x315)]();
        }
        async function _0x1a9d79(_0x1a192, _0x5f1660) {
            const _0x29f6db = _0x5316ce;
            let _0x1b9193 = new Date()['getTime'](), _0x20cad7 = Math['floor'](_0x1b9193 / 0x3e8), _0x310e04 = _0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x120)) ? _0x53b594(_0x1a192)['attr']('data-username') : _0x4bbab3;
            !_0x310e04 && _0x53b594(_0x1a192)[_0x29f6db(0x256)]('data-path') && (_0x5c41ca(_0x29f6db(0x1c8), _0x53b594(_0x1a192)['attr']('data-href')), _0x310e04 = await _0x2873cb(_0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x345))));
            _0x3b7dee[_0x29f6db(0x141)] && _0x53b594(_0x1a192)['attr'](_0x29f6db(0x16f)) && (_0x20cad7 = parseInt(_0x53b594(_0x1a192)['attr'](_0x29f6db(0x16f))));
            if (_0x3b7dee[_0x29f6db(0x30c)]) {
                _0x5092f9(!![]);
                let _0x280c5b = await _0x293560(_0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x2be)));
                _0x5092f9(![]);
                if (_0x280c5b[_0x29f6db(0x15f)] === 'ok') {
                    var _0x17dc26 = null;
                    _0x280c5b[_0x29f6db(0x335)][0x0][_0x29f6db(0x32a)] ? _0x17dc26 = _0x280c5b[_0x29f6db(0x335)][0x0][_0x29f6db(0x32a)][0x0][_0x29f6db(0x14b)] : _0x17dc26 = _0x280c5b[_0x29f6db(0x335)][0x0][_0x29f6db(0x13f)]['candidates'][0x0][_0x29f6db(0x14b)];
                    if (_0x5f1660) {
                        let _0x46959f = new URL(_0x17dc26);
                        _0x46959f[_0x29f6db(0x212)] = 'scontent.cdninstagram.com', _0x1f2cb7(_0x46959f[_0x29f6db(0x2b6)]);
                    } else
                        _0xba9ba9(_0x17dc26, _0x310e04, _0x53b594(_0x1a192)[_0x29f6db(0x256)]('data-name'), _0x20cad7, _0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x26c)), _0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x345)));
                } else {
                    if (_0x3b7dee[_0x29f6db(0x22d)]) {
                        if (_0x5f1660) {
                            let _0x5f373d = new URL(_0x53b594(_0x1a192)['attr'](_0x29f6db(0x2a4)));
                            _0x5f373d[_0x29f6db(0x212)] = 'scontent.cdninstagram.com', _0x1f2cb7(_0x5f373d[_0x29f6db(0x2b6)]);
                        } else
                            _0xba9ba9(_0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x2a4)), _0x310e04, _0x53b594(_0x1a192)['attr'](_0x29f6db(0x2a0)), _0x20cad7, _0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x26c)), _0x53b594(_0x1a192)[_0x29f6db(0x256)]('data-path'));
                    } else
                        alert(_0x29f6db(0x293) + _0x280c5b[_0x29f6db(0x171)]);
                    _0x5c41ca(_0x280c5b);
                }
            } else
                _0xba9ba9(_0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x2a4)), _0x310e04, _0x53b594(_0x1a192)['attr'](_0x29f6db(0x2a0)), _0x20cad7, _0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x26c)), _0x53b594(_0x1a192)[_0x29f6db(0x256)](_0x29f6db(0x345)));
        }
        function _0x226e14(_0x193bae) {
            const _0xa6d434 = _0x5316ce;
            var _0xcf1cda = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0xa6d434(0x19b),
                        'NOTICE_UPDATE_CONTENT': _0xa6d434(0x31c),
                        'CHECK_UPDATE': _0xa6d434(0x260),
                        'CHECK_UPDATE_MENU': _0xa6d434(0x192),
                        'CHECK_UPDATE_INTRO': _0xa6d434(0x2f2),
                        'RELOAD_SCRIPT': _0xa6d434(0x1fd),
                        'DONATE': _0xa6d434(0x1c3),
                        'FEEDBACK': _0xa6d434(0x2c7),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': 'Show\x20DOM\x20Tree',
                        'SELECT_AND_COPY': _0xa6d434(0x1e6),
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
                        'REPORT_GITHUB': _0xa6d434(0x1a7),
                        'REPORT_DISCORD': _0xa6d434(0x13d),
                        'REPORT_FORK': 'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
                        'DEBUG': _0xa6d434(0x1bb),
                        'CLOSE': _0xa6d434(0x2ab),
                        'ALL_CHECK': _0xa6d434(0x2c4),
                        'BATCH_DOWNLOAD_SELECTED': _0xa6d434(0x187),
                        'BATCH_DOWNLOAD_DIRECT': _0xa6d434(0x240),
                        'IMG': _0xa6d434(0x23b),
                        'VID': 'Video',
                        'DW': 'Download',
                        'THUMBNAIL_INTRO': _0xa6d434(0x346),
                        'LOAD_BLOB_ONE': _0xa6d434(0x1c2),
                        'LOAD_BLOB_MULTIPLE': _0xa6d434(0x2e6),
                        'LOAD_BLOB_RELOAD': _0xa6d434(0x136),
                        'NO_CHECK_RESOURCE': _0xa6d434(0x35a),
                        'NO_VID_URL': _0xa6d434(0x2c3),
                        'SETTING': 'Settings',
                        'AUTO_RENAME': _0xa6d434(0x36b),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': _0xa6d434(0x257),
                        'RENAME_LOCATE_DATE': _0xa6d434(0x2a6),
                        'DISABLE_VIDEO_LOOPING': _0xa6d434(0x329),
                        'HTML5_VIDEO_CONTROL': _0xa6d434(0x2c5),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0xa6d434(0x223),
                        'FORCE_FETCH_ALL_RESOURCES': _0xa6d434(0x2f9),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': _0xa6d434(0x160),
                        'MODIFY_VIDEO_VOLUME': _0xa6d434(0x26f),
                        'SCROLL_BUTTON': _0xa6d434(0x1ef),
                        'FORCE_RESOURCE_VIA_MEDIA': _0xa6d434(0x1bc),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': _0xa6d434(0x184),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': 'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
                        'AUTO_RENAME_INTRO': _0xa6d434(0x244),
                        'RENAME_SHORTCODE_INTRO': _0xa6d434(0x22f),
                        'RENAME_PUBLISH_DATE_INTRO': 'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_LOCATE_DATE_INTRO': _0xa6d434(0x288),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0xa6d434(0x2b5),
                        'HTML5_VIDEO_CONTROL_INTRO': _0xa6d434(0x15d),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0xa6d434(0x14f),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0xa6d434(0x1de),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0xa6d434(0x33b),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0xa6d434(0x203),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0xa6d434(0x292),
                        'SCROLL_BUTTON_INTRO': _0xa6d434(0x34b),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0xa6d434(0x2cf),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT_INTRO': _0xa6d434(0x252),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0xa6d434(0x324),
                        'SKIP_VIEW_STORY_CONFIRM': _0xa6d434(0x11e),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0xa6d434(0x13b)
                    }
                }, _0x317397 = Object[_0xa6d434(0x309)]({}, _0xcf1cda, _0x22467b), _0x1ab0eb = Object[_0xa6d434(0x294)](_0x317397)[_0xa6d434(0x26b)]()[_0xa6d434(0x2a9)]((_0x5135e9, _0x11f057) => {
                    return _0x5135e9[_0x11f057] = _0x317397[_0x11f057], _0x5135e9;
                }, {});
            return _0x1ab0eb;
        }
        async function _0x409b98(_0x3b4784) {
            return new Promise((_0x4a5eb3, _0x56bba9) => {
                const _0x31bea0 = a0_0x1751;
                GM_xmlhttpRequest({
                    'method': _0x31bea0(0x27b),
                    'url': _0x31bea0(0x310) + _0x3b4784 + _0x31bea0(0x261),
                    'onload': function (_0x2cfea5) {
                        const _0x3f6edf = _0x31bea0;
                        try {
                            let _0x2b1654 = JSON['parse'](_0x2cfea5[_0x3f6edf(0x34a)]);
                            _0x4a5eb3(_0x2b1654);
                        } catch (_0x2665f0) {
                            _0x56bba9(_0x2665f0);
                        }
                    },
                    'onerror': function (_0xf3d552) {
                        const _0x20d602 = _0x31bea0;
                        _0x5c41ca(_0x20d602(0x2a3), _0x20d602(0x201), _0xf3d552), _0x56bba9(_0xf3d552);
                    }
                });
            });
        }
        function _0x3aaf72(_0x104fea) {
            const _0x1e2063 = _0x5316ce, _0x2a4686 = _0x226e14();
            return _0x2a4686[_0xd94306] != undefined && _0x2a4686[_0xd94306][_0x104fea] != undefined ? _0x2a4686[_0xd94306][_0x104fea] : _0x2a4686[_0x1e2063(0x226)][_0x104fea];
        }
        function _0xbcaa21() {
            const _0x42ea5f = _0x5316ce;
            _0x53b594(_0x42ea5f(0x18f))[_0x42ea5f(0x36a)](function () {
                const _0x5300f4 = _0x42ea5f;
                _0x53b594(this)['text'](_0x3aaf72(_0x53b594(this)[_0x5300f4(0x256)](_0x5300f4(0x178))));
            }), _0x53b594(_0x42ea5f(0x2aa))[_0x42ea5f(0x36a)](function () {
                const _0x36baeb = _0x42ea5f;
                _0x53b594(this)[_0x36baeb(0x256)](_0x36baeb(0x2d4), _0x3aaf72(_0x53b594(this)[_0x36baeb(0x256)](_0x36baeb(0x1f8))));
            });
        }
        function _0xcff70b() {
            const _0x3dda80 = _0x5316ce;
            for (let _0x47692d of _0x442cc4) {
                _0x5c41ca(_0x3dda80(0x363), _0x47692d), GM_unregisterMenuCommand(_0x47692d);
            }
            _0x442cc4['push'](GM_registerMenuCommand(_0x3aaf72(_0x3dda80(0x320)), () => {
                _0x47d1c8();
            }, { 'accessKey': 'w' })), _0x442cc4[_0x3dda80(0x21a)](GM_registerMenuCommand(_0x3aaf72(_0x3dda80(0x355)), () => {
                const _0x82fbaa = _0x3dda80;
                GM_openInTab(_0x82fbaa(0x21e), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x442cc4['push'](GM_registerMenuCommand(_0x3aaf72(_0x3dda80(0x253)), () => {
                _0x395d52();
            }, { 'accessKey': 'z' })), _0x442cc4[_0x3dda80(0x21a)](GM_registerMenuCommand(_0x3aaf72('FEEDBACK'), () => {
                _0x5cc4ab();
            }, { 'accessKey': 'f' })), _0x442cc4[_0x3dda80(0x21a)](GM_registerMenuCommand(_0x3aaf72('CHECK_UPDATE_MENU'), () => {
                _0x80c822();
            }, { 'accessKey': 'c' })), _0x442cc4[_0x3dda80(0x21a)](GM_registerMenuCommand(_0x3aaf72('RELOAD_SCRIPT'), () => {
                _0xa4a0c4();
            }, { 'accessKey': 'r' }));
        }
        function _0x26de89(_0x3a97bd) {
            const _0x35ff0b = _0x5316ce;
            if (!_0x3b7dee[_0x35ff0b(0x1a5)])
                return;
            const _0x5a6025 = GM_getValue(_0x35ff0b(0x1cf)) ?? new Date()[_0x35ff0b(0x275)](), _0x7c25c3 = new Date()[_0x35ff0b(0x275)]();
            _0x7c25c3 > parseInt(_0x5a6025) + _0x3a97bd * 0x3e8 && (GM_setValue(_0x35ff0b(0x1cf), new Date()[_0x35ff0b(0x275)]()), _0x80c822());
        }
        function _0x80c822() {
            const _0x9dfff5 = _0x5316ce, _0x1f5574 = GM_info[_0x9dfff5(0x1f5)]['version'], _0x11c666 = _0x9dfff5(0x2f0);
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x11c666,
                'onload': function (_0x3c2204) {
                    const _0x16c4b8 = _0x9dfff5, _0x30ac89 = _0x3c2204[_0x16c4b8(0x357)], _0x323d92 = _0x30ac89[_0x16c4b8(0x179)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x323d92 && _0x323d92[0x1]) {
                        const _0x358ae9 = _0x323d92[0x1];
                        _0x5c41ca(_0x16c4b8(0x31f), _0x1f5574, '|', _0x16c4b8(0x270), _0x358ae9), _0x358ae9 !== _0x1f5574 && typeof this[_0x16c4b8(0x2f7)] === 'undefined' ? (this[_0x16c4b8(0x2f7)] = null, GM_notification({
                            'text': _0x3aaf72('NOTICE_UPDATE_CONTENT'),
                            'title': _0x3aaf72(_0x16c4b8(0x1f6)),
                            'tag': _0x16c4b8(0x1f3),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x16c4b8(0x2e3),
                            'onclick': _0x4ff0cf => {
                                const _0x13b94b = _0x16c4b8;
                                _0x4ff0cf?.[_0x13b94b(0x172)]();
                                var _0x22112d = GM_openInTab(GM_info[_0x13b94b(0x1f5)][_0x13b94b(0x306)]);
                                setTimeout(() => {
                                    _0x22112d['close']();
                                }, 0xfa);
                            }
                        })) : _0x5c41ca(_0x16c4b8(0x283));
                    } else
                        console[_0x16c4b8(0x129)](_0x16c4b8(0x28b));
                }
            });
        }
        function _0x47d1c8() {
            const _0x197773 = _0x5316ce;
            _0x53b594('.IG_SN_DIG')[_0x197773(0x315)](), _0x4a2883(), _0x53b594(_0x197773(0x341))[_0x197773(0x1d8)]('Preference\x20Settings'), _0x53b594(_0x197773(0x1df))[_0x197773(0x156)](_0x197773(0x34d));
            for (let _0xe09165 in _0x5a964e) {
                _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect')[_0x197773(0x156)](_0x197773(0x2d3) + _0xe09165 + '\x22\x20' + (_0xd94306 == _0xe09165 ? _0x197773(0x289) : '') + '>' + _0x5a964e[_0xe09165] + _0x197773(0x31e));
            }
            for (let _0x4cde97 in _0x3b7dee) {
                _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_BODY')['append'](_0x197773(0x325) + (_0x23f3fc['includes'](_0x4cde97) ? _0x197773(0x144) : '') + _0x197773(0x135) + _0x3aaf72(_0x4cde97 + _0x197773(0x322)) + '\x22\x20data-ih-locale-title=\x22' + (_0x4cde97 + _0x197773(0x322)) + _0x197773(0x347) + _0x4cde97 + '\x22>' + _0x3aaf72(_0x4cde97) + _0x197773(0x2a7) + _0x4cde97 + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x3b7dee[_0x4cde97] === !![] ? _0x197773(0x161) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x4cde97 === 'MODIFY_VIDEO_VOLUME' && _0x53b594(_0x197773(0x188) + _0x4cde97 + '\x22]')[_0x197773(0x218)]('label')['on']('contextmenu', function (_0x1514c3) {
                    const _0x2543b1 = _0x197773;
                    _0x1514c3['preventDefault'](), _0x53b594(this)[_0x2543b1(0x22e)]('#tempWrapper')[_0x2543b1(0x2d2)] === 0x0 && (_0x53b594(this)[_0x2543b1(0x156)]('<div\x20id=\x22tempWrapper\x22></div>'), _0x53b594(this)[_0x2543b1(0x2ca)](_0x2543b1(0x2ac))[_0x2543b1(0x156)](_0x2543b1(0x237) + _0x75a760 + _0x2543b1(0x29e)), _0x53b594(this)['children']('#tempWrapper')[_0x2543b1(0x156)](_0x2543b1(0x237) + _0x75a760 + _0x2543b1(0x140)), _0x53b594(this)['children']('#tempWrapper')[_0x2543b1(0x156)]('<div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x559a71[_0x2543b1(0x17a)] + '</div>'));
                }), _0x4cde97 === 'AUTO_RENAME' && _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22' + _0x4cde97 + '\x22]')['parent'](_0x197773(0x264))['on'](_0x197773(0x1da), function (_0x12e9e3) {
                    const _0x1a5465 = _0x197773;
                    _0x12e9e3['preventDefault'](), _0x53b594(this)[_0x1a5465(0x22e)](_0x1a5465(0x2ac))[_0x1a5465(0x2d2)] === 0x0 && (_0x53b594(this)[_0x1a5465(0x156)](_0x1a5465(0x13a)), _0x53b594(this)[_0x1a5465(0x2ca)]('#tempWrapper')[_0x1a5465(0x156)]('<input\x20id=\x22date_format\x22\x20value=\x22' + _0x59af11 + _0x1a5465(0x2b4)), _0x53b594(this)[_0x1a5465(0x2ca)]('#tempWrapper')[_0x1a5465(0x156)](_0x1a5465(0x11f) + _0x559a71['CLOSE'] + _0x1a5465(0x327)));
                });
            }
        }
        function _0x395d52() {
            const _0x1aef27 = _0x5316ce;
            _0x53b594(_0x1aef27(0x26e))['remove'](), _0x4a2883(), _0x53b594(_0x1aef27(0x341))[_0x1aef27(0x1d8)]('IG\x20Debug\x20DOM\x20Tree'), _0x53b594(_0x1aef27(0x2b2))[_0x1aef27(0x156)](_0x1aef27(0x153)), _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x1aef27(0x156)](_0x1aef27(0x28e)), _0x53b594(_0x1aef27(0x130))[_0x1aef27(0x156)](_0x1aef27(0x1e8) + _0x3aaf72('SHOW_DOM_TREE') + '</a></button>'), _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x1aef27(0x156)](_0x1aef27(0x245) + _0x3aaf72('SELECT_AND_COPY') + _0x1aef27(0x126)), _0x53b594(_0x1aef27(0x130))['append'](_0x1aef27(0x24a) + _0x3aaf72(_0x1aef27(0x285)) + _0x1aef27(0x1c4)), _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x1aef27(0x156)](_0x1aef27(0x189) + _0x3aaf72(_0x1aef27(0x150)) + _0x1aef27(0x126)), _0x53b594(_0x1aef27(0x130))[_0x1aef27(0x156)](_0x1aef27(0x2ee) + _0x3aaf72(_0x1aef27(0x2e0)) + _0x1aef27(0x126));
        }
        function _0x5cc4ab() {
            const _0x282c27 = _0x5316ce;
            _0x53b594(_0x282c27(0x26e))[_0x282c27(0x315)](), _0x4a2883(), _0x53b594('.IG_SN_DIG\x20#post_info')[_0x282c27(0x1d8)](_0x282c27(0x25b)), _0x53b594('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x282c27(0x156)](_0x282c27(0x28e)), _0x53b594(_0x282c27(0x130))[_0x282c27(0x156)](_0x282c27(0x11d) + _0x3aaf72(_0x282c27(0x276)) + _0x282c27(0x126)), _0x53b594(_0x282c27(0x130))['append'](_0x282c27(0x189) + _0x3aaf72(_0x282c27(0x150)) + _0x282c27(0x126)), _0x53b594(_0x282c27(0x130))['append'](_0x282c27(0x2ee) + _0x3aaf72(_0x282c27(0x2e0)) + _0x282c27(0x126));
        }
        function _0x1f2cb7(_0x7a2a36) {
            const _0x529445 = _0x5316ce;
            var _0x1098d8 = document[_0x529445(0x209)]('a');
            _0x1098d8[_0x529445(0x2b6)] = _0x7a2a36, _0x1098d8[_0x529445(0x123)] = _0x529445(0x122), document[_0x529445(0x177)][_0x529445(0x300)](_0x1098d8), _0x1098d8[_0x529445(0x13c)](), _0x1098d8[_0x529445(0x315)]();
        }
        function _0xa4a0c4() {
            const _0x15bf43 = _0x5316ce;
            clearInterval(_0x420c96), _0x53b594(_0x15bf43(0x1ed))['remove'](), _0x53b594('.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL')[_0x15bf43(0x315)](), _0x53b594('[data-snig]')[_0x15bf43(0x1a9)](_0x15bf43(0x1ee)), _0x5bce0a = ![], _0x485061 = ![], _0x208afc = location[_0x15bf43(0x2b6)], _0x2891ce[_0x15bf43(0x131)](), _0x5c41ca(_0x15bf43(0x33c));
        }
        function _0x5c41ca(..._0x37868e) {
            const _0x240531 = _0x5316ce;
            var _0x19e34f = new Date();
            _0x255875[_0x240531(0x21a)]({
                'time': _0x19e34f[_0x240531(0x275)](),
                'content': [..._0x37868e]
            }), _0x255875[_0x240531(0x2d2)] > 0x3e8 && (_0x255875 = [
                {
                    'time': _0x19e34f[_0x240531(0x275)](),
                    'content': [_0x240531(0x277)]
                },
                ..._0x255875[_0x240531(0x2bf)](-0x3e7)
            ]), console[_0x240531(0x2a8)]('[' + _0x19e34f[_0x240531(0x2b9)]() + ']', ..._0x37868e);
        }
        function _0x4e159d() {
            const _0x45cd2b = _0x5316ce;
            for (let _0xb5ca3c in _0x3b7dee) {
                GM_getValue(_0xb5ca3c) != null && typeof GM_getValue(_0xb5ca3c) === _0x45cd2b(0x2e7) && (_0x3b7dee[_0xb5ca3c] = GM_getValue(_0xb5ca3c));
            }
        }
        _0x53b594(function () {
            const _0x3beaf5 = _0x5316ce;
            function _0x588f07(_0xae486a) {
                const _0x2f9a40 = a0_0x1751;
                var _0x5d9319 = [];
                for (var _0x2a3594 of _0xae486a) {
                    _0x5d9319[_0x2f9a40(0x21a)]({
                        'tagName': _0x2a3594[_0x2f9a40(0x33e)],
                        'id': _0x2a3594['id'],
                        'className': _0x2a3594[_0x2f9a40(0x1a2)]
                    });
                }
                return _0x5d9319;
            }
            function _0x4fc2fb() {
                const _0x815b5a = a0_0x1751;
                let _0xbf3122 = _0x53b594(_0x815b5a(0x265))[0x0];
                var _0x526d48 = '';
                _0x255875[_0x815b5a(0x1e1)](_0x1c0950 => {
                    const _0x17d290 = _0x815b5a;
                    var _0x516b97 = JSON['stringify'](_0x1c0950[_0x17d290(0x2c0)], function (_0x29adb5, _0x48f207) {
                        const _0x3f7cfe = _0x17d290;
                        if (Array[_0x3f7cfe(0x18c)](this)) {
                            if (typeof _0x48f207 === _0x3f7cfe(0x225) && _0x48f207 instanceof jQuery)
                                return _0x588f07(_0x48f207);
                            return _0x48f207;
                        } else
                            return _0x48f207;
                    }, '\x09');
                    _0x526d48 += _0x1c0950[_0x17d290(0x21f)] + ':\x20' + _0x516b97 + '\x0a';
                }), _0x53b594(_0x815b5a(0x127))['text'](_0x815b5a(0x24c) + _0x526d48 + _0x815b5a(0x27f) + location['pathname'] + _0x815b5a(0x35b) + _0xbf3122[_0x815b5a(0x2dc)]);
            }
            _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), _0x3beaf5(0x31a), function () {
                _0x4fc2fb();
            }), _0x53b594('body')['on'](_0x3beaf5(0x13c), '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x45357a = _0x3beaf5;
                _0x53b594(_0x45357a(0x127))[_0x45357a(0x1be)](), document['execCommand'](_0x45357a(0x15a));
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE', function () {
                const _0x1efdec = _0x3beaf5;
                _0x53b594(_0x1efdec(0x127))[_0x1efdec(0x1d8)]()[_0x1efdec(0x2d2)] === 0x0 && _0x4fc2fb();
                var _0x30f446 = _0x53b594(_0x1efdec(0x127))[_0x1efdec(0x1d8)](), _0x4e8e48 = document[_0x1efdec(0x209)]('a'), _0x40b9db = new Blob([_0x30f446], { 'type': _0x1efdec(0x2b8) });
                _0x4e8e48[_0x1efdec(0x2b6)] = URL[_0x1efdec(0x338)](_0x40b9db), _0x4e8e48[_0x1efdec(0x1af)] = 'DOMTree-' + new Date()[_0x1efdec(0x275)]() + _0x1efdec(0x1c7), document['body'][_0x1efdec(0x300)](_0x4e8e48), _0x4e8e48['click'](), _0x4e8e48[_0x1efdec(0x315)]();
            }), _0x53b594(_0x3beaf5(0x177))['on']('click', _0x3beaf5(0x2dd), function () {
                const _0x329da8 = _0x3beaf5;
                _0x53b594(this)[_0x329da8(0x218)]('#tempWrapper')['length'] > 0x0 ? _0x53b594(this)[_0x329da8(0x218)]('#tempWrapper')[_0x329da8(0x1d9)](0xfa, function () {
                    const _0x5da267 = _0x329da8;
                    _0x53b594(this)[_0x5da267(0x315)]();
                }) : _0x53b594(_0x329da8(0x26e))[_0x329da8(0x315)]();
            }), _0x53b594(window)[_0x3beaf5(0x332)](function (_0x456d79) {
                const _0x511b55 = _0x3beaf5;
                _0x456d79['keyCode'] == '81' && _0x456d79['altKey'] && (_0x53b594(_0x511b55(0x26e))[_0x511b55(0x315)](), _0x456d79[_0x511b55(0x172)]()), _0x456d79[_0x511b55(0x205)] == '87' && _0x456d79['altKey'] && (_0x47d1c8(), _0x456d79[_0x511b55(0x172)]()), _0x456d79[_0x511b55(0x205)] == '90' && _0x456d79['altKey'] && (_0x395d52(), _0x456d79['preventDefault']()), _0x456d79[_0x511b55(0x205)] == '82' && _0x456d79[_0x511b55(0x263)] && (_0xa4a0c4(), _0x456d79['preventDefault']()), _0x456d79[_0x511b55(0x205)] == '83' && _0x456d79[_0x511b55(0x263)] && (location['href'][_0x511b55(0x179)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x53b594(_0x511b55(0x16e))[_0x511b55(0x2d2)] > 0x0 && _0x53b594(_0x511b55(0x16e))?.['click'](), location[_0x511b55(0x2b6)][_0x511b55(0x179)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x53b594('.IG_DWHISTORY')[_0x511b55(0x2d2)] > 0x0 && _0x53b594(_0x511b55(0x33d))?.[_0x511b55(0x13c)](), _0x456d79[_0x511b55(0x172)]());
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x312), _0x3beaf5(0x233), function (_0x130ec2) {
                const _0x4d7a63 = _0x3beaf5;
                var _0x57e0c5 = _0x53b594(this)[_0x4d7a63(0x256)]('id');
                if (_0x57e0c5 && _0x3b7dee[_0x57e0c5] !== undefined) {
                    let _0x1b6e3e = _0x53b594(this)[_0x4d7a63(0x246)](_0x4d7a63(0x161));
                    GM_setValue(_0x57e0c5, _0x1b6e3e), _0x3b7dee[_0x57e0c5] = _0x1b6e3e, console[_0x4d7a63(0x2a8)]('user\x20settings', _0x57e0c5, _0x1b6e3e);
                }
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), _0x3beaf5(0x302), function (_0x494fde) {
                const _0x488b96 = _0x3beaf5;
                _0x53b594(this)[_0x488b96(0x22e)](_0x488b96(0x2ac))[_0x488b96(0x2d2)] > 0x0 && _0x494fde[_0x488b96(0x172)]();
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x312), _0x3beaf5(0x331), function () {
                const _0x4b2292 = _0x3beaf5;
                let _0x1dd6a0 = _0x53b594(this)[_0x4b2292(0x236)]();
                _0x53b594(this)[_0x4b2292(0x256)](_0x4b2292(0x230)) == _0x4b2292(0x164) ? _0x53b594(this)[_0x4b2292(0x2da)]()[_0x4b2292(0x236)](_0x1dd6a0) : _0x53b594(this)[_0x4b2292(0x337)]()[_0x4b2292(0x236)](_0x1dd6a0), _0x1dd6a0 >= 0x0 && _0x1dd6a0 <= 0x1 && (_0x75a760 = _0x1dd6a0, GM_setValue(_0x4b2292(0x21d), _0x1dd6a0));
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x23c), _0x3beaf5(0x331), function (_0x4ed4ac) {
                const _0x5d1ead = _0x3beaf5;
                if (_0x53b594(this)[_0x5d1ead(0x256)]('type') == _0x5d1ead(0x164)) {
                    let _0x286a63 = _0x53b594(this)[_0x5d1ead(0x236)]();
                    _0x53b594(this)[_0x5d1ead(0x2da)]()[_0x5d1ead(0x236)](_0x286a63);
                } else {
                    let _0x47f89f = _0x53b594(this)[_0x5d1ead(0x236)]();
                    _0x47f89f >= 0x0 && _0x47f89f <= 0x1 ? _0x53b594(this)[_0x5d1ead(0x337)]()[_0x5d1ead(0x236)](_0x47f89f) : _0x47f89f < 0x0 ? _0x53b594(this)['val'](0x0) : _0x53b594(this)[_0x5d1ead(0x236)](0x1);
                }
            }), _0x53b594(_0x3beaf5(0x177))['on']('input', _0x3beaf5(0x259), function (_0x16fd45) {
                const _0x1d7076 = _0x3beaf5;
                GM_setValue(_0x1d7076(0x1cd), _0x53b594(this)[_0x1d7076(0x236)]()), _0x59af11 = _0x53b594(this)[_0x1d7076(0x236)]();
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), _0x3beaf5(0x191), function (_0x425d16) {
                const _0x3ce2ed = _0x3beaf5;
                _0x425d16[_0x3ce2ed(0x172)](), _0x1a9d79(this);
            }), _0x53b594('body')['on'](_0x3beaf5(0x13c), '.IG_SN_DIG_BODY\x20.newTab', function () {
                const _0x583067 = _0x3beaf5;
                if (_0x3b7dee['FORCE_RESOURCE_VIA_MEDIA'] && _0x3b7dee[_0x583067(0x28c)])
                    _0x1a9d79(_0x53b594(this)[_0x583067(0x218)]()[_0x583067(0x2ca)]('a')[_0x583067(0x2f1)]()[0x0], !![]);
                else {
                    var _0x57e3c4 = new URL(_0x53b594(this)['parent']()['children']('a')['attr'](_0x583067(0x2a4)));
                    _0x57e3c4[_0x583067(0x212)] = 'scontent.cdninstagram.com', _0x1f2cb7(_0x57e3c4[_0x583067(0x2b6)]);
                }
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), '.IG_SN_DIG_BODY\x20.videoThumbnail', function () {
                const _0x52f74d = _0x3beaf5;
                _0xba9ba9(_0x53b594(this)['parent']()['children']('a')[_0x52f74d(0x22e)](_0x52f74d(0x2fb))[_0x52f74d(0x2f1)]()[_0x52f74d(0x256)](_0x52f74d(0x2d8)), _0x53b594(this)[_0x52f74d(0x218)]()[_0x52f74d(0x2ca)]('a')[_0x52f74d(0x256)](_0x52f74d(0x120)), _0x52f74d(0x169), new Date()[_0x52f74d(0x275)](), _0x52f74d(0x258), _0x53b594(_0x52f74d(0x2ba))[_0x52f74d(0x1d8)]());
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), _0x3beaf5(0x16e), function () {
                _0x2f3d38(!![]);
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), _0x3beaf5(0x231), function (_0x2ee210) {
                const _0x58d761 = _0x3beaf5;
                _0x2ee210[_0x58d761(0x172)](), _0x2f3d38(!![], !![], !![]);
            }), _0x53b594('body')['on'](_0x3beaf5(0x13c), _0x3beaf5(0x11c), function () {
                _0xb499ae(!![]);
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), _0x3beaf5(0x196), function (_0x27d02a) {
                _0x27d02a['stopPropagation'](), _0x3fadcc(!![]);
            }), _0x53b594('body')['on'](_0x3beaf5(0x13c), _0x3beaf5(0x33d), function () {
                _0x443b0e(!![]);
            }), _0x53b594('body')['on'](_0x3beaf5(0x13c), _0x3beaf5(0x1dc), function (_0x54e316) {
                const _0x26ad24 = _0x3beaf5;
                _0x54e316[_0x26ad24(0x172)](), _0x443b0e(!![], !![]);
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), _0x3beaf5(0x154), function () {
                _0x1aef2e(!![]);
            }), _0x53b594('body')['on'](_0x3beaf5(0x13c), '.IG_REELS', function () {
                _0x46038a(!![], !![]);
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), _0x3beaf5(0x32e), function () {
                _0x46038a(!![], !![], !![]);
            }), _0x53b594('body')['on']('click', '.IG_REELS_THUMBNAIL', function () {
                _0x46038a(!![], ![]);
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x1db), 'button[role=\x22menuitem\x22]', function (_0x16039f) {
                const _0x5076ed = _0x3beaf5;
                if (_0x16039f[_0x5076ed(0x2af)] === 0x3 || _0x16039f[_0x5076ed(0x2af)] === 0x2) {
                    if (location['href'] === _0x5076ed(0x17c) && _0x3b7dee['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x16039f[_0x5076ed(0x172)]();
                        if (_0x53b594(this)[_0x5076ed(0x22e)](_0x5076ed(0x19e))[_0x5076ed(0x2d2)] > 0x0) {
                            const _0x359f90 = 'https://www.instagram.com/' + _0x53b594(this)[_0x5076ed(0x2ca)](_0x5076ed(0x1fb))[_0x5076ed(0x297)]()[_0x5076ed(0x1d8)]();
                            _0x16039f['which'] === 0x2 ? GM_openInTab(_0x359f90) : location[_0x5076ed(0x2b6)] = _0x359f90;
                        }
                    }
                }
            }), _0x53b594(_0x3beaf5(0x177))['on']('change', _0x3beaf5(0x1b4), function () {
                const _0x1a1419 = _0x3beaf5;
                var _0x37ae8b = _0x53b594(this)[_0x1a1419(0x22e)](_0x1a1419(0x23c))[_0x1a1419(0x246)](_0x1a1419(0x161));
                _0x53b594('.IG_SN_DIG_BODY\x20.inner_box')[_0x1a1419(0x36a)](function () {
                    const _0x56a678 = _0x1a1419;
                    _0x53b594(this)[_0x56a678(0x246)]('checked', _0x37ae8b);
                });
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x312), '.IG_SN_DIG_BODY\x20.inner_box', function () {
                const _0x4fea1c = _0x3beaf5;
                var _0x30a0cc = _0x53b594(_0x4fea1c(0x333))[_0x4fea1c(0x2d2)], _0x5143a4 = _0x53b594(_0x4fea1c(0x198))[_0x4fea1c(0x2d2)];
                _0x53b594(_0x4fea1c(0x1b4))[_0x4fea1c(0x22e)]('input')[_0x4fea1c(0x246)](_0x4fea1c(0x161), _0x30a0cc == _0x5143a4);
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x13c), _0x3beaf5(0x2d1), function () {
                const _0x2119ae = _0x3beaf5;
                let _0x59279d = 0x0;
                _0x53b594('.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x2119ae(0x36a)](function () {
                    const _0x13a7b6 = _0x2119ae;
                    _0x53b594(this)[_0x13a7b6(0x337)]()['children']('input')['prop'](_0x13a7b6(0x161)) && (_0x53b594(this)[_0x13a7b6(0x13c)](), _0x59279d++);
                }), _0x59279d == 0x0 && alert(_0x3aaf72(_0x2119ae(0x18d)));
            }), _0x53b594(_0x3beaf5(0x177))['on'](_0x3beaf5(0x312), _0x3beaf5(0x32d), function () {
                const _0x520fdb = _0x3beaf5;
                GM_setValue(_0x520fdb(0x1c5), _0x53b594(this)['val']()), _0xd94306 = _0x53b594(this)[_0x520fdb(0x236)](), _0xd94306?.[_0x520fdb(0x2d5)]('en') || _0x22467b[_0xd94306] != null ? (_0xbcaa21(), _0xcff70b()) : _0x409b98(_0xd94306)['then'](_0x5be961 => {
                    _0x22467b[_0xd94306] = _0x5be961, _0xbcaa21(), _0xcff70b();
                })[_0x520fdb(0x207)](_0x2376cb => {
                    const _0x16f7d4 = _0x520fdb;
                    console[_0x16f7d4(0x129)]('getTranslationText\x20catch\x20error:', _0x2376cb);
                });
            }), _0x53b594(_0x3beaf5(0x177))['on']('change', _0x3beaf5(0x174), function () {
                const _0x203712 = _0x3beaf5;
                _0x53b594(_0x203712(0x23f))['text']('' + new Date()['toLocaleString'](_0x53b594(this)[_0x203712(0x236)](), {
                    'hour12': ![],
                    'second': '2-digit',
                    'minute': _0x203712(0x190),
                    'hour': _0x203712(0x190),
                    'month': '2-digit',
                    'day': _0x203712(0x190),
                    'year': 'numeric'
                })[_0x203712(0x2bd)]('/', '-')), LOCATE_DATE_FORMAT = _0x53b594(this)['val'](), GM_setValue(_0x203712(0x1fc), _0x53b594(this)[_0x203712(0x236)]());
            }), _0x53b594('body')['on'](_0x3beaf5(0x13c), _0x3beaf5(0x202), function () {
                const _0x140784 = _0x3beaf5;
                _0x53b594(_0x140784(0x273))[_0x140784(0x36a)](function () {
                    _0x53b594(this)['click']();
                });
            });
        });
    }, 0x61a8);
}(jQuery));
function a0_0x1751(_0x4d2bcf, _0x1db21b) {
    const _0x327c13 = a0_0x327c();
    return a0_0x1751 = function (_0x1751a3, _0x485251) {
        _0x1751a3 = _0x1751a3 - 0x11b;
        let _0x482a74 = _0x327c13[_0x1751a3];
        return _0x482a74;
    }, a0_0x1751(_0x4d2bcf, _0x1db21b);
}
function a0_0x327c() {
    const _0x501768 = [
        '</span>\x20<input\x20id=\x22',
        'log',
        'reduce',
        '[data-ih-locale-title]',
        'Close',
        '#tempWrapper',
        'srcset',
        'before',
        'which',
        'position',
        '984196nprzvs',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'LOAD_BLOB_MULTIPLE',
        '\x22\x20/>',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'href',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'text/plain',
        'toISOString',
        '#article-id',
        'BATCH_DOWNLOAD_DIRECT',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'replaceAll',
        'media-id',
        'slice',
        'content',
        'taken_at_timestamp',
        'getBlobMedia()',
        'Cannot\x20find\x20video\x20URL.',
        'Select\x20All',
        'Display\x20HTML5\x20Video\x20Controller',
        'replace',
        'Feedback',
        'a[href^=\x22/p/\x22]',
        'warn',
        'children',
        '18lHcizE',
        'getFullYear',
        '<a\x20media-id=\x22',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'highlights',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'length',
        '<option\x20value=\x22',
        'title',
        'startsWith',
        'height',
        'px;top:',
        'src',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'next',
        '10QTxYtP',
        'innerHTML',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'getMinutes',
        'REPORT_DISCORD',
        'getUserIdWithAgent()',
        'isIntersecting',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'finalUrl',
        'THUMBNAIL',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'boolean',
        'div.volume_slider\x20input',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '<a\x20datetime=\x22',
        '334212tpDYKe',
        'video',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'parse',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/refs/heads/master/main.js',
        'first',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'width',
        'video_resources',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'relative',
        'updatenotification',
        'Can\x20not\x20find\x20download\x20url.',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'DIRECT_DOWNLOAD_ALL',
        'img',
        'script[type=\x22application/json\x22]',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'after',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'appendChild',
        'section\x20>\x20main[role=\x22main\x22]',
        '.IG_SN_DIG\x20.globalSettings',
        'px;\x22>',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        'css',
        'downloadURL',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'NEW_TAB',
        'assign',
        'stopPropagation',
        'addClass',
        'FORCE_RESOURCE_VIA_MEDIA',
        '#_SNLOAD',
        'toString',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        '3PkCPcO',
        'change',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'node',
        'remove',
        'mouseenter',
        'play',
        'x1lix1fw',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'modify',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        '1454490JLClOR',
        '</option>',
        'Current\x20version:\x20',
        'SETTING',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        '_INTRO',
        'video[class]',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        '<label\x20class=\x22globalSettings',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        '</div>',
        'data-modify',
        'Disable\x20Video\x20Auto-looping',
        'video_versions',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '.IG_SN_DIG_TITLE\x20#langSelect',
        '.IG_REELS_NEWTAB',
        'video\x20+\x20div\x20>\x20div',
        'reels_media',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'keydown',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'items',
        '</p>',
        'prev',
        'createObjectURL',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'hd_profile_pic_url_info',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'main\x20timer\x20re-register\x20completed',
        '.IG_DWHISTORY',
        'tagName',
        'toUpperCase',
        '144702oJFJiE',
        '.IG_SN_DIG\x20#post_info',
        'query_hash',
        'div\x20>\x20ul\x20li._acaz',
        '</span></label>',
        'data-path',
        'Download\x20Video\x20Thumbnail',
        '\x22><span\x20data-ih-locale=\x22',
        '.SNKMS_IG_DW_MAIN',
        'query_id',
        'response',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'getUserId()',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20text\x20is\x20translated\x20using\x20machine\x20translation\x20and\x20may\x20be\x20inaccurate;\x20you\x20can\x20contact\x20support\x20to\x20correct\x20the\x20translation.</div>',
        'floor',
        'taken_at',
        'regenerated',
        '<p\x20id=\x22_SNLOAD\x22>',
        'controls',
        'style',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'DONATE',
        'getBlobMediaWithQueryID()',
        'responseText',
        '__typename',
        'matchAll',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'FORCE_FETCH_ALL_RESOURCES',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'div.volume_slider',
        'INTERNAL_CSS',
        'ended',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'getDate',
        'GM_unregisterMenuCommand',
        'NOPATH',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'muted',
        'removeClass',
        'display_resources',
        '583rgGCxs',
        'each',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        '._aagv\x20img',
        'div:not([class]):not([style])',
        '.IG_DWSTORY_THUMBNAIL',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'data-username',
        '\x22\x20class=\x22newTab\x22>',
        '_blank',
        'target',
        'svg',
        '<div\x20class=\x22volume_slider\x22\x20/>',
        '</a></button>',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'toLowerCase',
        'error',
        '5877416SYzYub',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'DIV',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'disconnect',
        '</span>\x20',
        '.SNKMS_IG_NEWTAB_MAIN',
        'then',
        '\x22\x20title=\x22',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'hostname',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'click',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        'image_versions2',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'RENAME_PUBLISH_DATE',
        'userAgent',
        'volumechange',
        '\x20child',
        'volume',
        'DISABLE_VIDEO_LOOPING',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'Fetch\x20from\x20memory\x20cache:',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'url',
        'join',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'REPORT_GITHUB',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        '.IG_DWHISTORY_THUMBNAIL',
        'filter',
        'append',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        'DOWNLOAD',
        'copy',
        'VID',
        'data-loop',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20posts\x20and\x20Reels.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20In\x20Reels\x20pages,\x20the\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'status',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'checked',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        '</button>',
        'range',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'LOCALE_MANIFEST',
        'parents',
        '%22}',
        'thumbnail',
        'fail',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'profile_pic_url',
        '.IG_DWSTORY',
        'datetime',
        'header\x20>\x20section:first\x20img[alt]',
        'message',
        'preventDefault',
        'ALL_CHECK',
        '.IG_SN_DIG_BODY\x20#locateSelect',
        'div:last-child',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'body',
        'data-ih-locale',
        'match',
        'CLOSE',
        '.IG_REELS',
        'https://www.instagram.com/',
        'getTranslationText\x20catch\x20error:',
        '5272456aEjDeK',
        '\x20-</a>',
        'smooth',
        '<div></div>',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'Main\x20Timer',
        'scontent.cdninstagram.com',
        'Download\x20Selected\x20Resources',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'GraphImage',
        'header\x20>\x20section:first\x20img[alt][draggable]',
        'isArray',
        'NO_CHECK_RESOURCE',
        'shortcode',
        '[data-ih-locale]',
        '2-digit',
        'a[data-needed=\x22direct\x22]',
        'Checking\x20for\x20Updates',
        'feedback_message',
        'body\x20>\x20div\x20section:visible._ac0a',
        'scrollBy',
        '.IG_DWPROFILE',
        '505086zqVlpV',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'BATCH_DOWNLOAD_SELECTED',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        'Wololo!\x20New\x20version\x20released.',
        'Request\x20with:',
        'cursor',
        'canvas._aarh',
        'users',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        '.videoThumbnail',
        'className',
        'pathname',
        'video_url',
        'CHECK_UPDATE',
        'user',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'www.',
        'removeAttr',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'https://i.instagram.com/api/v1/media/',
        '._acnb',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'download',
        'username',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'getUserHighSizeProfile()',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        '(reel)\x20Added\x20video\x20event\x20listener\x20#loop',
        'div\x20>\x20ul._acay',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'Debug\x20Window',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'select',
        'reels',
        'padStart',
        '_ac3q',
        'Loading\x20Blob\x20Media...',
        'Donate',
        '</a></button><br/>',
        'lang',
        'hasClass',
        '.txt',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        '\x22\x20datetime=\x22',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'G_RENAME_FORMAT',
        'header\x20>\x20section:first\x20img[alt]:not([draggable])',
        'G_CHECK_TIMESTAMP',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'isProfile',
        'GraphVideo',
        'wrap',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '(reel)\x20video\x20volume\x20changed\x20#slider',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'getMediaInfo()',
        'text',
        'fadeOut',
        'contextmenu',
        'mousedown',
        '.IG_DWHINEWTAB',
        'IMG',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        'isHomepage',
        'forEach',
        ':hidden',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'userLanguage',
        'faild',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'getHighlightStories()',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'padEnd',
        'THUMBNAIL_INTRO',
        'navigator',
        'https://www.instagram.com/reel/',
        '.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN',
        'data-snig',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'SKIP_VIEW_STORY_CONFIRM',
        'data-controls',
        'location',
        'ig_helper_notice',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'script',
        'NOTICE_UPDATE_TITLE',
        'x1iyjqo2',
        'data-ih-locale-title',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'div',
        'G_LOCATE_DATE_FORMAT',
        'Reload\x20Script',
        '37px',
        'shortcode_media',
        'isDialog',
        'reject',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'loadstart',
        'keyCode',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'catch',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'createElement',
        '/info/',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'top',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'code',
        'host',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'map',
        'div#splash-screen',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'loop',
        'parent',
        'canDownload',
        'push',
        'data',
        '_acnf',
        'G_VIDEO_VOLUME',
        'https://ko-fi.com/snkoarashi',
        'time',
        'z-index',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
        'object',
        'en-US',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'split',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'isReels',
        'getStories()',
        'mp4',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
        'find',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'type',
        '.IG_DWNEWTAB',
        'isHighlightsStory',
        '.IG_SN_DIG\x20input',
        'body\x20>\x20div\x20section._ac0a',
        '/accounts/login',
        'val',
        '<input\x20value=\x22',
        'AUTO_RENAME',
        '<div\x20class=\x22IG_SN_DIG\x20',
        '(post)\x20video\x20volume\x20changed\x20#slider',
        'Image',
        'input',
        '</a>',
        'language',
        '#locatePreview',
        'Download\x20All\x20Resources',
        'undefined',
        'Found\x20post\x20container',
        '._acay\x20._acaz',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'prop',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'pause',
        '4xXYKeu',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'Logger:\x0a',
        'HTML5_VIDEO_CONTROL',
        '0px',
        '\x22\x20data-globalIndex=\x22',
        'blob',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'DEBUG',
        '\x22]\x20span',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'attr',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'jpg',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'Feedback\x20Options',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '20000',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'observe',
        'Checking\x20for\x20Script\x20Updates',
        '.json',
        'onReadyMyDW()\x20Timer',
        'altKey',
        'label',
        'div[id^=\x22mount\x22]',
        'instagram.com/reels/',
        '\x22\x20/></div>',
        'hidden',
        'LOAD_BLOB_ONE',
        'stories',
        'sort',
        'data-type',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '.IG_SN_DIG',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'Remote\x20version:\x20',
        'is_video',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'getPostOwner()',
        'getTime',
        'REPORT_FORK',
        'logger\x20sliced',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'owner',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'GET',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'https://www.instagram.com/p/',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '\x0a-----\x0a\x0aLocation:\x20',
        'x1s85apg',
        'setAttribute',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'there\x20is\x20no\x20new\x20update',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'DOWNLOAD_DOM_TREE',
        '._acay\x20+\x20.x24i39r',
        'edge_sidecar_to_children',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'selected',
        'data-completed',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'trigging',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        '*/*',
        'avatar',
        'candidates',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'keys',
        'display_url',
        '--ig-track-progress:\x20',
        'last',
        'MODIFY_VIDEO_VOLUME',
        'absolute',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        'https://i.instagram.com/api/v1/users/',
        'playing',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'data-name',
        'GraphSidecar',
        'xdt_api__v1__media__shortcode__web_info',
        'getTranslationText()',
        'data-href',
        'carousel_media',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)'
    ];
    a0_0x327c = function () {
        return _0x501768;
    };
    return a0_0x327c();
}