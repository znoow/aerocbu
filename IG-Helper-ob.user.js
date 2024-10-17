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

(function (_0x511e40, _0xbe48ac) {
    const _0x5d92da = a0_0x27e8, _0xb021c0 = _0x511e40();
    while (!![]) {
        try {
            const _0x5e9ea8 = -parseInt(_0x5d92da(0x24a)) / 0x1 * (parseInt(_0x5d92da(0x1b7)) / 0x2) + -parseInt(_0x5d92da(0x2a8)) / 0x3 * (parseInt(_0x5d92da(0x228)) / 0x4) + -parseInt(_0x5d92da(0x2b6)) / 0x5 + -parseInt(_0x5d92da(0x25f)) / 0x6 * (-parseInt(_0x5d92da(0x227)) / 0x7) + parseInt(_0x5d92da(0x80)) / 0x8 * (-parseInt(_0x5d92da(0xa2)) / 0x9) + -parseInt(_0x5d92da(0x2a6)) / 0xa * (-parseInt(_0x5d92da(0x16c)) / 0xb) + -parseInt(_0x5d92da(0x243)) / 0xc * (-parseInt(_0x5d92da(0x156)) / 0xd);
            if (_0x5e9ea8 === _0xbe48ac)
                break;
            else
                _0xb021c0['push'](_0xb021c0['shift']());
        } catch (_0x513fe9) {
            _0xb021c0['push'](_0xb021c0['shift']());
        }
    }
}(a0_0x4d61, 0x8fbe5), function (_0x150f22) {
    setTimeout(() => {
        const _0x476d1a = a0_0x27e8;
        setInterval(() => {
            _0x4dffd8?.();
        }, 0x927c0), _0x476d1a(0x27c);
        const _0x1f5f15 = {
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
            }, _0x35cd64 = [
                _0x476d1a(0x109),
                _0x476d1a(0xf2),
                _0x476d1a(0x1e7)
            ];
        var _0x14072e = GM_getValue(_0x476d1a(0xa1)) ? GM_getValue(_0x476d1a(0xa1)) : 0x1, _0x263678 = ![], _0x36ecb8 = GM_getValue(_0x476d1a(0x1a7)) ? GM_getValue(_0x476d1a(0x1a7)) : _0x476d1a(0x2cf);
        const _0x4c71bb = {
                'DOWNLOAD': _0x476d1a(0x1f4),
                'NEW_TAB': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
                'THUMBNAIL': _0x476d1a(0xf4),
                'CLOSE': _0x476d1a(0x256)
            }, _0x524a1b = 0xfa, _0x50d8ea = GM_getResourceText(_0x476d1a(0x290)), _0x53dfe3 = JSON[_0x476d1a(0xa3)](GM_getResourceText(_0x476d1a(0x25c)));
        var _0x1739e8 = [], _0x557d0f = {}, _0x4cbe0c = GM_getValue('lang') || navigator['language'] || navigator[_0x476d1a(0x143)], _0x28a907 = location['href'], _0x43797c = ![], _0x5eaa2f = ![], _0xa8ede = [], _0x362362, _0x4bdb45, _0x303c88, _0x421695, _0x36535c = {
                'stories': {},
                'highlights': {}
            }, _0x452d54 = new MutationObserver(function (_0x1702a6, _0x41be9d) {
                _0x2b428b();
            });
        _0x5ad980(), GM_addStyle(_0x50d8ea), _0x5a1b41(), _0xaa1c11(_0x4cbe0c)[_0x476d1a(0x2ca)](_0x1a0a62 => {
            _0x557d0f[_0x4cbe0c] = _0x1a0a62, _0x17fd2e(), _0x5a1b41(), _0x50b5e2(0x12c);
        })['catch'](_0x52a927 => {
            const _0x3790cb = _0x476d1a;
            _0x5a1b41(), _0x50b5e2(0x12c), !_0x4cbe0c[_0x3790cb(0x183)]('en') && console[_0x3790cb(0x1f7)](_0x3790cb(0x1c4), _0x52a927);
        });
        var _0x42b4d4 = setInterval(function () {
            const _0x118260 = _0x476d1a;
            if (_0x150f22(_0x118260(0x2c8))['length'] > 0x0 && !_0x150f22(_0x118260(0x2c8))['is'](_0x118260(0x160)) || location[_0x118260(0x1dc)]['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location['hostname'][_0x118260(0x183)](_0x118260(0x1f0))) {
                _0x5eaa2f = ![];
                return;
            }
            if (_0x28a907 != location[_0x118260(0xb2)] || !_0x43797c || !_0x5eaa2f) {
                console[_0x118260(0x166)](_0x118260(0x272), _0x118260(0xb7)), clearInterval(_0x421695), _0x5eaa2f = ![], _0x43797c = !![], _0x28a907 = location['href'], _0x452d54['disconnect']();
                if (location[_0x118260(0xb2)][_0x118260(0x183)](_0x118260(0x17f)) || location['pathname']['match'](/^\/(.*?)\/p\//ig) || location['href']['startsWith'](_0x118260(0x1d1))) {
                    _0x36535c['stories'] = {}, _0x589ef6('isDialog');
                    var _0x41f4de = setInterval(() => {
                        const _0x1aa925 = _0x118260;
                        _0x150f22(_0x1aa925(0x259))[_0x1aa925(0x276)] > 0x0 && (clearInterval(_0x41f4de), setTimeout(() => {
                            _0x2b428b(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x5eaa2f = !![];
                }
                location['href'][_0x118260(0x183)]('https://www.instagram.com/reels/') && (_0x589ef6(_0x118260(0xe3)), setTimeout(() => {
                    _0xa07f8b(![]);
                }, 0x96), _0x5eaa2f = !![]);
                if (location[_0x118260(0xb2)][_0x118260(0x89)]('?')[0x0] == _0x118260(0x1bd)) {
                    _0x36535c[_0x118260(0x19b)] = {};
                    let _0x9c1121 = _0x362362?.[_0x118260(0x288)](/^\/stories\//ig) != null;
                    _0x589ef6(_0x118260(0x1a1), _0x9c1121), setTimeout(() => {
                        const _0x459de0 = _0x118260;
                        _0x2b428b(![], _0x9c1121);
                        const _0x1ea141 = _0x150f22(_0x459de0(0x11b))?.['parent']()[0x0];
                        _0x1ea141 && _0x452d54[_0x459de0(0x86)](_0x1ea141, { 'childList': !![] });
                    }, 0x96), _0x5eaa2f = !![];
                }
                _0x150f22(_0x118260(0x242))[_0x118260(0x276)] && location[_0x118260(0x1dc)]['match'](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname'][_0x118260(0x288)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x589ef6(_0x118260(0x29b)), setTimeout(() => {
                    _0x4641e(![]);
                }, 0x96), _0x5eaa2f = !![]);
                if (!_0x5eaa2f) {
                    if (location['href']['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig)) {
                        _0x36535c[_0x118260(0x103)] = {}, _0x589ef6(_0x118260(0x284)), _0x50695b(![]), _0x421695 = setInterval(() => {
                            _0x76f754(![]);
                        }, _0x524a1b);
                        _0x150f22(_0x118260(0x162))[_0x118260(0x276)] && setTimeout(() => {
                            const _0x1234d7 = _0x118260;
                            if (_0x1f5f15[_0x1234d7(0x1b2)]) {
                                var _0x5282eb = _0x150f22('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')[_0x1234d7(0x2c1)](function () {
                                    const _0x394e91 = _0x1234d7;
                                    return _0x150f22(this)['children']()[_0x394e91(0x276)] === 0x0;
                                });
                                _0x5282eb?.[_0x1234d7(0x2c5)]();
                            }
                            _0x5eaa2f = !![];
                        }, 0x96);
                        ;
                    } else
                        location[_0x118260(0xb2)][_0x118260(0x288)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x589ef6(_0x118260(0x206)), _0x150f22(_0x118260(0xd3))['length'] > 0x0 && (_0x150f22(_0x118260(0x1df))[_0x118260(0x29e)](), _0x150f22(_0x118260(0x2d2))[_0x118260(0x29e)](), _0x150f22(_0x118260(0x1d5))[_0x118260(0x276)] && _0x150f22(_0x118260(0x1d5))[_0x118260(0x29e)](), _0x3cb998(![]), setTimeout(() => {
                            _0x3cb998(![]);
                        }, 0x96)), _0x150f22(_0x118260(0x1df))[_0x118260(0x276)] && setTimeout(() => {
                            const _0x2690e0 = _0x118260;
                            if (_0x1f5f15[_0x2690e0(0x1b2)]) {
                                var _0x177394 = _0x150f22(_0x2690e0(0x235))[_0x2690e0(0x2c1)](function () {
                                    const _0x487a5a = _0x2690e0;
                                    return _0x150f22(this)[_0x487a5a(0x1b1)]()['length'] === 0x0;
                                });
                                _0x177394?.[_0x2690e0(0x2c5)]();
                            }
                            _0x5eaa2f = !![];
                        }, 0x96)) : (_0x5eaa2f = ![], _0x150f22(_0x118260(0x1df))[_0x118260(0x29e)](), _0x150f22(_0x118260(0x2d2))[_0x118260(0x29e)](), _0x150f22(_0x118260(0x1d5))[_0x118260(0x276)] && _0x150f22(_0x118260(0x1d5))[_0x118260(0x29e)]());
                }
                _0x50b5e2(0x12c), _0x362362 = new URL(location[_0x118260(0xb2)])[_0x118260(0x1dc)];
            }
        }, _0x524a1b);
        async function _0x4641e(_0x5351ba) {
            const _0x3a1e04 = _0x476d1a;
            if (_0x5351ba) {
                _0x3652e9(!![]);
                let _0x4d22a5 = new Date()['getTime'](), _0x2333b6 = Math['floor'](_0x4d22a5 / 0x3e8), _0x120d5c = location[_0x3a1e04(0x1dc)][_0x3a1e04(0x2c6)](/(reels|tagged)\/$/ig, '')[_0x3a1e04(0x89)]('/')[_0x3a1e04(0x2c1)](_0x1981cb => _0x1981cb[_0x3a1e04(0x276)] > 0x0)['at'](-0x1), _0x29e1d4 = await _0x54caaa(_0x120d5c);
                try {
                    let _0x5f3aaf = await _0x5abd97(_0x29e1d4[_0x3a1e04(0x21b)]['pk']);
                    _0x510ee4(_0x5f3aaf, _0x120d5c, _0x3a1e04(0x110), _0x2333b6, 'jpg');
                } catch (_0x51e89b) {
                    _0x510ee4(_0x29e1d4[_0x3a1e04(0x21b)][_0x3a1e04(0x16a)], _0x120d5c, _0x3a1e04(0x110), _0x2333b6, 'jpg');
                }
                _0x3652e9(![]);
            } else {
                if (!_0x150f22(_0x3a1e04(0x266))[_0x3a1e04(0x276)]) {
                    let _0x48e79d = setInterval(() => {
                        const _0x5d27c6 = _0x3a1e04;
                        if (_0x150f22(_0x5d27c6(0x266))[_0x5d27c6(0x276)]) {
                            clearInterval(_0x48e79d);
                            return;
                        }
                        _0x150f22(_0x5d27c6(0x1ea))[_0x5d27c6(0x25b)]()[_0x5d27c6(0x25b)]()[_0x5d27c6(0x268)](_0x5d27c6(0x23c) + _0x5d66ee('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x4c71bb[_0x5d27c6(0x279)] + _0x5d27c6(0xca)), _0x150f22(_0x5d27c6(0x1ea))[_0x5d27c6(0x25b)]()[_0x5d27c6(0x25b)]()[_0x5d27c6(0x2d1)](_0x5d27c6(0x255), _0x5d27c6(0x28c)), _0x150f22(_0x5d27c6(0xb1))[_0x5d27c6(0x25b)]()[_0x5d27c6(0x25b)]()['parent']()[_0x5d27c6(0x268)](_0x5d27c6(0x23c) + _0x5d66ee('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x4c71bb['DOWNLOAD'] + _0x5d27c6(0xca)), _0x150f22(_0x5d27c6(0xb1))[_0x5d27c6(0x25b)]()[_0x5d27c6(0x25b)]()[_0x5d27c6(0x25b)]()['css'](_0x5d27c6(0x255), _0x5d27c6(0x28c));
                    }, 0x96);
                }
            }
        }
        async function _0x50695b(_0x4eba2b, _0x3c6aa5) {
            const _0x791572 = _0x476d1a;
            if (_0x4eba2b) {
                let _0x5bcd89 = new Date()[_0x791572(0x2c4)](), _0x36e547 = Math[_0x791572(0x203)](_0x5bcd89 / 0x3e8), _0x135400 = location[_0x791572(0xb2)][_0x791572(0x2cc)](/\/$/ig, '')[_0x791572(0x89)]('/')['at'](-0x1), _0x219ccd = _0x150f22('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x791572(0x276)] || _0x150f22(_0x791572(0x181))[_0x791572(0x276)] || _0x150f22(_0x791572(0x197))[_0x791572(0xc3)](_0x791572(0x20f))[_0x791572(0x276)], _0x3f3986 = '', _0x200c08 = 0x0;
                _0x3652e9(!![]);
                if (_0x36535c[_0x791572(0x103)][_0x135400]) {
                    _0x589ef6(_0x791572(0x1e9), _0x135400);
                    let _0x3c9abf = _0x36535c[_0x791572(0x103)][_0x135400]['data'][_0x791572(0x11a)][0x0]['items'][_0x791572(0x276)];
                    _0x3f3986 = _0x36535c[_0x791572(0x103)][_0x135400][_0x791572(0x179)][_0x791572(0x11a)][0x0][_0x791572(0xe6)][_0x791572(0x190)], _0x200c08 = _0x36535c[_0x791572(0x103)][_0x135400][_0x791572(0x179)][_0x791572(0x11a)][0x0][_0x791572(0xc8)][_0x3c9abf - _0x219ccd];
                } else {
                    let _0x207657 = await _0xd187d(_0x135400), _0x4ab5af = _0x207657[_0x791572(0x179)][_0x791572(0x11a)][0x0][_0x791572(0xc8)][_0x791572(0x276)];
                    _0x3f3986 = _0x207657[_0x791572(0x179)]['reels_media'][0x0][_0x791572(0xe6)][_0x791572(0x190)], _0x200c08 = _0x207657[_0x791572(0x179)]['reels_media'][0x0][_0x791572(0xc8)][_0x4ab5af - _0x219ccd], _0x36535c['highlights'][_0x135400] = _0x207657;
                }
                _0x1f5f15[_0x791572(0x109)] && (_0x36e547 = _0x200c08[_0x791572(0x21a)]);
                if (_0x1f5f15[_0x791572(0x9c)] && !_0x263678) {
                    let _0x16a659 = await _0x22d847(_0x200c08['id']);
                    _0x16a659[_0x791572(0x145)] === 'ok' ? _0x16a659['items'][0x0][_0x791572(0x11c)] ? _0x3c6aa5 ? _0x929b21(_0x16a659[_0x791572(0xc8)][0x0][_0x791572(0x11c)][0x0][_0x791572(0xd1)]) : _0x510ee4(_0x16a659[_0x791572(0xc8)][0x0][_0x791572(0x11c)][0x0][_0x791572(0xd1)], _0x3f3986, 'highlights', _0x36e547, 'mp4') : _0x3c6aa5 ? _0x929b21(_0x16a659[_0x791572(0xc8)][0x0][_0x791572(0xbe)][_0x791572(0xa6)][0x0][_0x791572(0xd1)]) : _0x510ee4(_0x16a659['items'][0x0][_0x791572(0xbe)][_0x791572(0xa6)][0x0][_0x791572(0xd1)], _0x3f3986, _0x791572(0x103), _0x36e547, _0x791572(0x2cb)) : (_0x1f5f15[_0x791572(0xf2)] ? (delete _0x36535c[_0x791572(0x103)][_0x135400], _0x263678 = !![], _0x50695b(!![], _0x3c6aa5)) : alert(_0x791572(0xeb) + _0x16a659[_0x791572(0x151)]), _0x589ef6(_0x16a659));
                } else
                    _0x200c08[_0x791572(0x17c)] ? _0x3c6aa5 ? _0x929b21(_0x200c08[_0x791572(0x2d3)]['at'](-0x1)[_0x791572(0xac)], _0x3f3986) : _0x510ee4(_0x200c08[_0x791572(0x2d3)]['at'](-0x1)[_0x791572(0xac)], _0x3f3986, _0x791572(0x103), _0x36e547, _0x791572(0x249), _0x135400) : _0x3c6aa5 ? _0x929b21(_0x200c08['display_resources']['at'](-0x1)['src'], _0x3f3986) : _0x510ee4(_0x200c08[_0x791572(0xfd)]['at'](-0x1)[_0x791572(0xac)], _0x3f3986, 'highlights', _0x36e547, _0x791572(0x2cb), _0x135400), _0x263678 = ![];
                _0x3652e9(![]);
            } else {
                if (!_0x150f22(_0x791572(0x162))[_0x791572(0x276)]) {
                    let _0x1eb02e = null;
                    _0x150f22('body\x20>\x20div\x20section._ac0a')[_0x791572(0x276)] > 0x0 ? _0x1eb02e = _0x150f22(_0x791572(0x11f)) : (_0x1eb02e = _0x150f22(_0x791572(0x208)), _0x1eb02e['css'](_0x791572(0x255), _0x791572(0x28c)));
                    if (_0x1eb02e['length'] === 0x0) {
                        let _0x32015d = _0x150f22(_0x791572(0x22c)), _0x4a0264 = 0x0;
                        _0x32015d[_0x791572(0xd6)](function () {
                            const _0x24cdab = _0x791572;
                            _0x150f22(this)[_0x24cdab(0x229)]() > _0x4a0264 && (_0x4a0264 = _0x150f22(this)[_0x24cdab(0x229)](), _0x1eb02e = _0x150f22(this)[_0x24cdab(0x1b1)](_0x24cdab(0x98))['first']());
                        });
                    }
                    _0x1eb02e != null && (_0x1eb02e[_0x791572(0x268)](_0x791572(0x23c) + _0x5d66ee('DW') + _0x791572(0x239) + _0x4c71bb['DOWNLOAD'] + _0x791572(0xca)), _0x1eb02e[_0x791572(0x268)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x5d66ee('NEW_TAB') + _0x791572(0x2bb) + _0x4c71bb[_0x791572(0xf1)] + '</div>'), _0x1f5f15[_0x791572(0x191)] && _0x1eb02e['find'](_0x791572(0x124))[_0x791572(0xd6)](function () {
                        const _0x45b027 = _0x791572;
                        !_0x150f22(this)[_0x45b027(0x179)](_0x45b027(0x1b4)) && (_0x589ef6('(highlight)\x20Added\x20video\x20event\x20listener\x20#modify'), this[_0x45b027(0xef)] = _0x14072e, _0x150f22(this)['on'](_0x45b027(0x18f), function () {
                            this['volume'] = _0x14072e;
                        }), _0x150f22(this)['on'](_0x45b027(0x178), function () {
                            const _0x12b6e8 = _0x45b027;
                            this[_0x12b6e8(0xef)] = _0x14072e;
                        }), _0x150f22(this)[_0x45b027(0x87)](_0x45b027(0x212), !![]));
                    }), _0x1eb02e[_0x791572(0xc3)](_0x791572(0x124))[_0x791572(0xd6)](function () {
                        const _0xcb895 = _0x791572;
                        !_0x150f22(this)[_0xcb895(0x179)](_0xcb895(0x2b8)) && (_0x589ef6(_0xcb895(0x1eb)), _0x150f22(this)['on'](_0xcb895(0x1a6), function () {
                            const _0x7ed92e = _0xcb895;
                            _0x1eb02e[_0x7ed92e(0xc3)](_0x7ed92e(0xa9))[_0x7ed92e(0x276)] === 0x0 && _0x76f754(![]);
                        }), _0x150f22(this)['attr'](_0xcb895(0x1c9), !![]));
                    }));
                }
            }
        }
        async function _0x76f754(_0x1ef5e2) {
            const _0x1699b6 = _0x476d1a;
            if (_0x1ef5e2) {
                let _0x30323a = new Date()[_0x1699b6(0x2c4)](), _0x2b6724 = Math[_0x1699b6(0x203)](_0x30323a / 0x3e8), _0xac3a01 = location[_0x1699b6(0xb2)][_0x1699b6(0x2cc)](/\/$/ig, '')[_0x1699b6(0x89)]('/')['at'](-0x1), _0x33781f = '', _0x4fe4ed = _0x150f22(_0x1699b6(0x121))[_0x1699b6(0x276)] || _0x150f22(_0x1699b6(0x181))[_0x1699b6(0x276)] || _0x150f22('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')['find'](_0x1699b6(0x20f))['length'], _0x432637 = '';
                _0x3652e9(!![]);
                if (_0x36535c['highlights'][_0xac3a01]) {
                    _0x589ef6(_0x1699b6(0x1e9), _0xac3a01);
                    let _0x37e012 = _0x36535c[_0x1699b6(0x103)][_0xac3a01]['data']['reels_media'][0x0][_0x1699b6(0xc8)]['length'];
                    _0x33781f = _0x36535c[_0x1699b6(0x103)][_0xac3a01][_0x1699b6(0x179)]['reels_media'][0x0][_0x1699b6(0xe6)][_0x1699b6(0x190)], _0x432637 = _0x36535c[_0x1699b6(0x103)][_0xac3a01][_0x1699b6(0x179)]['reels_media'][0x0][_0x1699b6(0xc8)][_0x37e012 - _0x4fe4ed];
                } else {
                    let _0x235ba5 = await _0xd187d(_0xac3a01), _0x553b83 = _0x235ba5[_0x1699b6(0x179)]['reels_media'][0x0][_0x1699b6(0xc8)][_0x1699b6(0x276)];
                    _0x33781f = _0x235ba5[_0x1699b6(0x179)][_0x1699b6(0x11a)][0x0][_0x1699b6(0xe6)][_0x1699b6(0x190)], _0x432637 = _0x235ba5['data'][_0x1699b6(0x11a)][0x0][_0x1699b6(0xc8)][_0x553b83 - _0x4fe4ed], _0x36535c[_0x1699b6(0x103)][_0xac3a01] = _0x235ba5;
                }
                _0x1f5f15[_0x1699b6(0x109)] && (_0x2b6724 = _0x432637[_0x1699b6(0x21a)]);
                if (_0x1f5f15[_0x1699b6(0x9c)] && !_0x263678) {
                    let _0x330828 = await _0x22d847(_0x432637['id']);
                    _0x330828[_0x1699b6(0x145)] === 'ok' ? _0x510ee4(_0x330828[_0x1699b6(0xc8)][0x0]['image_versions2'][_0x1699b6(0xa6)][0x0][_0x1699b6(0xd1)], _0x33781f, _0x1699b6(0x103), _0x2b6724, 'jpg') : (_0x1f5f15['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT'] ? (delete _0x36535c[_0x1699b6(0x103)][_0xac3a01], _0x263678 = !![], _0x76f754(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x330828[_0x1699b6(0x151)]), _0x589ef6(_0x330828));
                } else
                    _0x510ee4(_0x432637[_0x1699b6(0xfd)]['at'](-0x1)['src'], _0x33781f, _0x1699b6(0x103), _0x2b6724, _0x1699b6(0x2cb), _0xac3a01), _0x263678 = ![];
                _0x3652e9(![]);
            } else {
                if (_0x150f22('body\x20>\x20div\x20section\x20video.xh8yej3')['length']) {
                    if (!_0x150f22('.IG_DWHISTORY_THUMBNAIL')[_0x1699b6(0x276)]) {
                        let _0x248288 = null;
                        _0x150f22(_0x1699b6(0x142))[_0x1699b6(0x276)] > 0x0 ? _0x248288 = _0x150f22(_0x1699b6(0x11f)) : (_0x248288 = _0x150f22('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x248288[_0x1699b6(0x2d1)](_0x1699b6(0x255), _0x1699b6(0x28c)));
                        if (_0x248288[_0x1699b6(0x276)] === 0x0) {
                            let _0x403a4e = _0x150f22(_0x1699b6(0x22c)), _0xa59189 = 0x0;
                            _0x403a4e[_0x1699b6(0xd6)](function () {
                                const _0x17f8de = _0x1699b6;
                                _0x150f22(this)[_0x17f8de(0x229)]() > _0xa59189 && (_0xa59189 = _0x150f22(this)[_0x17f8de(0x229)](), _0x248288 = _0x150f22(this)['children'](_0x17f8de(0x98))[_0x17f8de(0x210)]());
                            });
                        }
                        _0x248288 != null && _0x248288[_0x1699b6(0x268)](_0x1699b6(0x1f1) + _0x5d66ee(_0x1699b6(0x28a)) + _0x1699b6(0x19f) + _0x4c71bb[_0x1699b6(0x164)] + _0x1699b6(0xca));
                    }
                } else
                    _0x150f22('.IG_DWHISTORY_THUMBNAIL')[_0x1699b6(0x29e)]();
            }
        }
        async function _0x3cb998(_0x259022, _0x3e6f70, _0xd88fbf) {
            const _0x582fde = _0x476d1a;
            if (_0x259022) {
                let _0x32c5c9 = new Date()['getTime'](), _0x4d2e8c = Math['floor'](_0x32c5c9 / 0x3e8), _0x297b02 = _0x150f22(_0x582fde(0x2b3))['first']()[_0x582fde(0x261)]() || location['pathname'][_0x582fde(0x89)]('/')['filter'](_0x2afdbe => _0x2afdbe[_0x582fde(0x276)] > 0x0)['at'](0x1);
                _0x3652e9(!![]);
                if (_0x1f5f15[_0x582fde(0x9c)] && !_0x263678) {
                    let _0x1dc59c = null, _0x2850a9 = await _0x54caaa(_0x297b02), _0x1146cf = _0x2850a9[_0x582fde(0x21b)]['pk'], _0x410130 = await _0x7cbefb(_0x1146cf), _0x3785e0 = location['pathname']['split']('/')['filter'](_0x350d33 => _0x350d33['length'] > 0x0 && _0x350d33[_0x582fde(0x288)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x410130[_0x582fde(0x179)]['reels_media'][0x0][_0x582fde(0xc8)][_0x582fde(0x2cd)](_0x2b7479 => {
                        _0x2b7479['id'] == _0x3785e0 && (_0x1dc59c = _0x2b7479['id']);
                    });
                    if (_0x1dc59c == null) {
                        let _0x363934 = _0x150f22(_0x582fde(0xfb) + _0x297b02 + _0x582fde(0x150))[_0x582fde(0x2c1)](function () {
                            const _0xcf42d4 = _0x582fde;
                            return _0x150f22(this)[_0xcf42d4(0x1b1)]()[_0xcf42d4(0x276)] === 0x0 && _0x150f22(this)[_0xcf42d4(0xc3)](_0xcf42d4(0x8d))[_0xcf42d4(0x276)] === 0x0 && _0x150f22(this)['text']()?.[_0xcf42d4(0xe8)]() === _0x297b02?.[_0xcf42d4(0xe8)]();
                        })[_0x582fde(0x23a)](_0x582fde(0x1e3))[_0x582fde(0x2c1)](function () {
                            const _0x18abb0 = _0x582fde;
                            return _0x150f22(this)['text']()?.[_0x18abb0(0xe8)]() !== _0x297b02?.[_0x18abb0(0xe8)]();
                        })[_0x582fde(0x2c1)](function () {
                            const _0x4328fb = _0x582fde;
                            return _0x150f22(this)[_0x4328fb(0x1b1)]()['length'] > 0x1;
                        })[_0x582fde(0x210)]();
                        _0x363934[_0x582fde(0x1b1)]()['filter'](function () {
                            const _0x5fef38 = _0x582fde;
                            return _0x150f22(this)[_0x5fef38(0x16f)]() < 0xa;
                        })[_0x582fde(0x210)]()['children']()['each'](function (_0x4fe2a1) {
                            const _0x2732c3 = _0x582fde;
                            _0x150f22(this)[_0x2732c3(0x1b1)]()['length'] > 0x0 && (_0x1dc59c = _0x410130[_0x2732c3(0x179)][_0x2732c3(0x11a)][0x0]['items'][_0x4fe2a1]['id']);
                        });
                    }
                    _0x1dc59c == null && (_0x150f22(_0x582fde(0x170))[_0x582fde(0xd6)](function (_0x5a05a7) {
                        const _0x145953 = _0x582fde;
                        _0x150f22(this)[_0x145953(0x282)](_0x145953(0x9f)) && (_0x150f22(this)[_0x145953(0x1b1)]()[_0x145953(0x276)] > 0x0 && (_0x1dc59c = _0x410130[_0x145953(0x179)][_0x145953(0x11a)][0x0][_0x145953(0xc8)][_0x5a05a7]['id']));
                    }), _0x150f22(_0x582fde(0xb9))[_0x582fde(0xd6)](function (_0x58da02) {
                        const _0x289370 = _0x582fde;
                        _0x150f22(this)[_0x289370(0x1b1)]()[_0x289370(0x282)](_0x289370(0xc9)) && (_0x1dc59c = _0x410130['data'][_0x289370(0x11a)][0x0][_0x289370(0xc8)][_0x58da02]['id']);
                    }));
                    _0x1dc59c == null && (_0x1dc59c = location[_0x582fde(0x1dc)][_0x582fde(0x89)]('/')[_0x582fde(0x2c1)](_0x18a5d0 => _0x18a5d0[_0x582fde(0x276)] > 0x0 && _0x18a5d0[_0x582fde(0x288)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0xcdde93 = await _0x22d847(_0x1dc59c);
                    _0x1f5f15[_0x582fde(0x109)] && (_0x4d2e8c = _0xcdde93[_0x582fde(0xc8)][0x0][_0x582fde(0x1ae)]);
                    _0xcdde93[_0x582fde(0x145)] === 'ok' ? _0xcdde93[_0x582fde(0xc8)][0x0][_0x582fde(0x11c)] ? _0xd88fbf ? _0x929b21(_0xcdde93['items'][0x0][_0x582fde(0x11c)][0x0][_0x582fde(0xd1)]) : _0x510ee4(_0xcdde93[_0x582fde(0xc8)][0x0][_0x582fde(0x11c)][0x0][_0x582fde(0xd1)], _0x297b02, _0x582fde(0x19b), _0x4d2e8c, 'mp4') : _0xd88fbf ? _0x929b21(_0xcdde93[_0x582fde(0xc8)][0x0][_0x582fde(0xbe)][_0x582fde(0xa6)][0x0][_0x582fde(0xd1)]) : _0x510ee4(_0xcdde93['items'][0x0][_0x582fde(0xbe)][_0x582fde(0xa6)][0x0][_0x582fde(0xd1)], _0x297b02, _0x582fde(0x19b), _0x4d2e8c, 'jpg') : (_0x1f5f15[_0x582fde(0xf2)] ? (_0x263678 = !![], _0x3cb998(_0x259022, _0x3e6f70, _0xd88fbf)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0xcdde93[_0x582fde(0x151)]), _0x589ef6(_0xcdde93));
                    _0x3652e9(![]);
                    return;
                }
                if (_0x150f22(_0x582fde(0x217))[_0x582fde(0x276)] > 0x0) {
                    let _0x598e33 = _0x582fde(0x249), _0x55fe05 = '', _0x1144a0 = location[_0x582fde(0x1dc)][_0x582fde(0x2cc)](/\/$/ig, '')[_0x582fde(0x89)]('/')['at'](-0x1);
                    if (_0x36535c[_0x582fde(0x19b)][_0x297b02] && !_0x3e6f70) {
                        _0x589ef6(_0x582fde(0x1e9), _0x297b02), _0x36535c[_0x582fde(0x19b)][_0x297b02][_0x582fde(0x179)][_0x582fde(0x11a)][0x0][_0x582fde(0xc8)]['forEach'](_0xa13a62 => {
                            const _0x1b92db = _0x582fde;
                            _0xa13a62['id'] == _0x1144a0 && (_0x55fe05 = _0xa13a62['video_resources'][0x0][_0x1b92db(0xac)], _0x1f5f15[_0x1b92db(0x109)] && (_0x4d2e8c = _0xa13a62[_0x1b92db(0x21a)]));
                        });
                        if (_0x55fe05['length'] == 0x0) {
                            _0x589ef6('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x297b02), _0x3cb998(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x15491f = await _0x54caaa(_0x297b02), _0x1d3bbe = _0x15491f[_0x582fde(0x21b)]['pk'], _0x219764 = await _0x7cbefb(_0x1d3bbe);
                        _0x219764[_0x582fde(0x179)][_0x582fde(0x11a)][0x0][_0x582fde(0xc8)][_0x582fde(0x2cd)](_0x3f93fb => {
                            const _0x1facff = _0x582fde;
                            _0x3f93fb['id'] == _0x1144a0 && (_0x55fe05 = _0x3f93fb[_0x1facff(0x2d3)][0x0]['src'], _0x1f5f15['RENAME_PUBLISH_DATE'] && (_0x4d2e8c = _0x3f93fb[_0x1facff(0x21a)]));
                        });
                        if (_0x55fe05[_0x582fde(0x276)] == 0x0) {
                            let _0x44b12d = _0x150f22(_0x582fde(0xfb) + _0x297b02 + _0x582fde(0x150))[_0x582fde(0x2c1)](function () {
                                const _0x5c2525 = _0x582fde;
                                return _0x150f22(this)[_0x5c2525(0x1b1)]()[_0x5c2525(0x276)] === 0x0 && _0x150f22(this)[_0x5c2525(0xc3)](_0x5c2525(0x8d))[_0x5c2525(0x276)] === 0x0 && _0x150f22(this)[_0x5c2525(0x261)]()?.[_0x5c2525(0xe8)]() === _0x297b02?.[_0x5c2525(0xe8)]();
                            })[_0x582fde(0x23a)](_0x582fde(0x1e3))[_0x582fde(0x2c1)](function () {
                                const _0x1cb152 = _0x582fde;
                                return _0x150f22(this)['text']()?.[_0x1cb152(0xe8)]() !== _0x297b02?.[_0x1cb152(0xe8)]();
                            })['filter'](function () {
                                const _0x4c3e2e = _0x582fde;
                                return _0x150f22(this)[_0x4c3e2e(0x1b1)]()[_0x4c3e2e(0x276)] > 0x1;
                            })[_0x582fde(0x210)]();
                            _0x44b12d[_0x582fde(0x1b1)]()[_0x582fde(0x2c1)](function () {
                                const _0x35414b = _0x582fde;
                                return _0x150f22(this)[_0x35414b(0x16f)]() < 0xa;
                            })['first']()[_0x582fde(0x1b1)]()[_0x582fde(0xd6)](function (_0x25e5f5) {
                                const _0x233e96 = _0x582fde;
                                _0x150f22(this)[_0x233e96(0x1b1)]()['length'] > 0x0 && (_0x55fe05 = _0x219764[_0x233e96(0x179)]['reels_media'][0x0][_0x233e96(0xc8)][_0x25e5f5][_0x233e96(0x2d3)][0x0][_0x233e96(0xac)], _0x1f5f15[_0x233e96(0x109)] && (_0x4d2e8c = _0x219764[_0x233e96(0x179)][_0x233e96(0x11a)][0x0][_0x233e96(0xc8)][_0x25e5f5]['taken_at_timestamp']));
                            }), _0x55fe05['length'] == 0x0 && (_0x150f22(_0x582fde(0x170))[_0x582fde(0xd6)](function (_0x5467c9) {
                                const _0x82a018 = _0x582fde;
                                _0x150f22(this)[_0x82a018(0x282)](_0x82a018(0x9f)) && (_0x150f22(this)['children']()[_0x82a018(0x276)] > 0x0 && (_0x55fe05 = _0x219764['data'][_0x82a018(0x11a)][0x0]['items'][_0x5467c9]['video_resources'][0x0]['src'], _0x1f5f15[_0x82a018(0x109)] && (_0x4d2e8c = _0x219764[_0x82a018(0x179)][_0x82a018(0x11a)][0x0][_0x82a018(0xc8)][_0x5467c9][_0x82a018(0x21a)])));
                            }), _0x150f22(_0x582fde(0xb9))[_0x582fde(0xd6)](function (_0x13b906) {
                                const _0xe46bcb = _0x582fde;
                                _0x150f22(this)[_0xe46bcb(0x1b1)]()[_0xe46bcb(0x282)](_0xe46bcb(0xc9)) && (_0x55fe05 = _0x219764[_0xe46bcb(0x179)][_0xe46bcb(0x11a)][0x0][_0xe46bcb(0xc8)][_0x13b906][_0xe46bcb(0x2d3)][0x0][_0xe46bcb(0xac)], _0x1f5f15[_0xe46bcb(0x109)] && (_0x4d2e8c = _0x219764['data'][_0xe46bcb(0x11a)][0x0]['items'][_0x13b906][_0xe46bcb(0x21a)]));
                            }));
                        }
                        _0x36535c[_0x582fde(0x19b)][_0x297b02] = _0x219764;
                    }
                    _0x55fe05[_0x582fde(0x276)] == 0x0 ? alert(_0x5d66ee('NO_VID_URL')) : _0xd88fbf ? _0x929b21(_0x55fe05) : _0x510ee4(_0x55fe05, _0x297b02, 'stories', _0x4d2e8c, _0x598e33);
                } else {
                    let _0x59d850 = _0x150f22(_0x582fde(0x252))[_0x582fde(0x87)](_0x582fde(0x1f8))?.[_0x582fde(0x89)](',')[0x0]?.[_0x582fde(0x89)]('\x20')[0x0], _0xd089ac = _0x59d850 ? _0x59d850 : _0x150f22(_0x582fde(0x252))[_0x582fde(0x87)]('src');
                    if (!_0xd089ac) {
                        let _0x4f52e6 = _0x150f22(_0x582fde(0x199));
                        _0xd089ac = _0x4f52e6[_0x582fde(0x87)](_0x582fde(0x1f8)) ? _0x4f52e6[_0x582fde(0x87)](_0x582fde(0x1f8))?.[_0x582fde(0x89)](',')[0x0]?.[_0x582fde(0x89)]('\x20')[0x0] : _0x4f52e6[_0x582fde(0x87)]('src');
                    }
                    _0x1f5f15['RENAME_PUBLISH_DATE'] && (_0x4d2e8c = new Date(_0x150f22(_0x582fde(0x236))['first']()[_0x582fde(0x87)]('datetime'))['getTime']());
                    let _0x1c43c4 = _0xd089ac, _0x570d1f = _0x582fde(0x2cb);
                    _0xd88fbf ? _0x929b21(_0x1c43c4) : _0x510ee4(_0x1c43c4, _0x297b02, _0x582fde(0x19b), _0x4d2e8c, _0x570d1f);
                }
                _0x263678 = ![], _0x3652e9(![]);
            } else {
                let _0x317dfc = _0x582fde(0x17a);
                if (!_0x150f22('.IG_DWSTORY')['length']) {
                    _0x36535c['stories'] = {};
                    let _0x5e6304 = null;
                    _0x150f22(_0x582fde(0x142))[_0x582fde(0x276)] > 0x0 ? _0x5e6304 = _0x150f22(_0x582fde(0x11f)) : (_0x5e6304 = _0x150f22('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x5e6304[_0x582fde(0x2d1)]('position', 'relative'));
                    _0x5e6304[_0x582fde(0x276)] === 0x0 && (_0x5e6304 = _0x150f22('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x582fde(0x25b)]()[_0x582fde(0x25b)]()['parent']()['find'](_0x582fde(0xce)), _0x5e6304[_0x582fde(0x2d1)](_0x582fde(0x255), _0x582fde(0x28c)));
                    _0x5e6304['length'] === 0x0 && (_0x5e6304 = _0x150f22(_0x582fde(0xd3))[_0x582fde(0x25b)]()[_0x582fde(0x25b)]()['parent']()['find'](_0x582fde(0x184)), _0x5e6304[_0x582fde(0x2d1)](_0x582fde(0x255), _0x582fde(0x28c)));
                    if (_0x5e6304[_0x582fde(0x276)] === 0x0) {
                        let _0x229539 = _0x150f22(_0x582fde(0x22c)), _0x4030c5 = 0x0;
                        _0x229539['each'](function () {
                            const _0x196191 = _0x582fde;
                            _0x150f22(this)[_0x196191(0x229)]() > _0x4030c5 && (_0x4030c5 = _0x150f22(this)[_0x196191(0x229)](), _0x5e6304 = _0x150f22(this)[_0x196191(0x1b1)](_0x196191(0x98))[_0x196191(0x210)]());
                        });
                    }
                    _0x5e6304 != null && (_0x5e6304[_0x582fde(0x210)]()['css'](_0x582fde(0x255), _0x582fde(0x28c)), _0x5e6304['first']()[_0x582fde(0x268)](_0x582fde(0x23c) + _0x5d66ee('DW') + _0x582fde(0x258) + _0x4c71bb['DOWNLOAD'] + _0x582fde(0xca)), _0x5e6304[_0x582fde(0x210)]()[_0x582fde(0x268)](_0x582fde(0x24b) + _0x5d66ee(_0x582fde(0xf1)) + _0x582fde(0x1ab) + _0x4c71bb[_0x582fde(0xf1)] + _0x582fde(0xca)), _0x1f5f15['MODIFY_VIDEO_VOLUME'] && _0x5e6304[_0x582fde(0xc3)](_0x582fde(0x124))[_0x582fde(0xd6)](function () {
                        const _0x4a65c0 = _0x582fde;
                        !_0x150f22(this)['data'](_0x4a65c0(0x1b4)) && (_0x589ef6(_0x4a65c0(0x1da)), this[_0x4a65c0(0xef)] = _0x14072e, _0x150f22(this)['on'](_0x4a65c0(0x18f), function () {
                            const _0x462397 = _0x4a65c0;
                            this[_0x462397(0xef)] = _0x14072e;
                        }), _0x150f22(this)['on']('playing', function () {
                            const _0x198df5 = _0x4a65c0;
                            this[_0x198df5(0xef)] = _0x14072e;
                        }), _0x150f22(this)[_0x4a65c0(0x87)](_0x4a65c0(0x212), !![]));
                    }), _0x5e6304['find'](_0x582fde(0x124))['each'](function () {
                        const _0x569ccb = _0x582fde;
                        !_0x150f22(this)[_0x569ccb(0x179)](_0x569ccb(0x2b8)) && (_0x589ef6(_0x569ccb(0xc7)), _0x150f22(this)['on'](_0x569ccb(0x1a6), function () {
                            const _0x333bf1 = _0x569ccb;
                            _0x5e6304['find'](_0x333bf1(0x1d5))[_0x333bf1(0x276)] === 0x0 && _0xbd06c3(![]);
                        }), _0x150f22(this)[_0x569ccb(0x87)](_0x569ccb(0x1c9), !![]));
                    }), _0xbd06c3(![]));
                }
            }
        }
        async function _0xbd06c3(_0x325c5f, _0xa52a42) {
            const _0x20ae17 = _0x476d1a;
            if (_0x325c5f) {
                let _0x39db3f = new Date()['getTime'](), _0x49b2c7 = Math[_0x20ae17(0x203)](_0x39db3f / 0x3e8), _0x2a223a = _0x20ae17(0x2cb), _0x22a84b = _0x150f22(_0x20ae17(0x2b3))['first']()[_0x20ae17(0x261)]() || location[_0x20ae17(0x1dc)][_0x20ae17(0x89)]('/')['at'](0x2), _0x5e43a4 = 'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;', _0x5e9ea7 = location[_0x20ae17(0x1dc)][_0x20ae17(0x2cc)](/\/$/ig, '')[_0x20ae17(0x89)]('/')['at'](-0x1), _0x464961 = '';
                _0x3652e9(!![]);
                if (_0x1f5f15[_0x20ae17(0x9c)] && !_0x263678) {
                    let _0x5d364c = null, _0x338c7a = await _0x54caaa(_0x22a84b), _0x3e42cc = _0x338c7a[_0x20ae17(0x21b)]['pk'], _0x2afbb8 = await _0x7cbefb(_0x3e42cc), _0x2615ff = location['pathname'][_0x20ae17(0x89)]('/')[_0x20ae17(0x2c1)](_0x25dc9f => _0x25dc9f[_0x20ae17(0x276)] > 0x0 && _0x25dc9f[_0x20ae17(0x288)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x2afbb8[_0x20ae17(0x179)][_0x20ae17(0x11a)][0x0][_0x20ae17(0xc8)][_0x20ae17(0x2cd)](_0x2af7b9 => {
                        _0x2af7b9['id'] == _0x2615ff && (_0x5d364c = _0x2af7b9['id']);
                    });
                    if (_0x5d364c == null) {
                        let _0xfa3063 = _0x150f22(_0x20ae17(0xfb) + _0x22a84b + '\x22]\x20span')['filter'](function () {
                            const _0x491103 = _0x20ae17;
                            return _0x150f22(this)[_0x491103(0x1b1)]()[_0x491103(0x276)] === 0x0 && _0x150f22(this)[_0x491103(0xc3)](_0x491103(0x8d))[_0x491103(0x276)] === 0x0 && _0x150f22(this)['text']()?.[_0x491103(0xe8)]() === _0x22a84b?.[_0x491103(0xe8)]();
                        })[_0x20ae17(0x23a)](_0x20ae17(0x1e3))[_0x20ae17(0x2c1)](function () {
                            const _0x291028 = _0x20ae17;
                            return _0x150f22(this)[_0x291028(0x261)]()?.['toLowerCase']() !== _0x22a84b?.[_0x291028(0xe8)]();
                        })[_0x20ae17(0x2c1)](function () {
                            const _0x57e2c1 = _0x20ae17;
                            return _0x150f22(this)[_0x57e2c1(0x1b1)]()[_0x57e2c1(0x276)] > 0x1;
                        })[_0x20ae17(0x210)]();
                        _0xfa3063[_0x20ae17(0x1b1)]()['filter'](function () {
                            return _0x150f22(this)['height']() < 0xa;
                        })['first']()['children']()[_0x20ae17(0xd6)](function (_0x13cf80) {
                            const _0x2da193 = _0x20ae17;
                            _0x150f22(this)['children']()[_0x2da193(0x276)] > 0x0 && (_0x5d364c = _0x2afbb8[_0x2da193(0x179)][_0x2da193(0x11a)][0x0]['items'][_0x13cf80]['id']);
                        });
                    }
                    _0x5d364c == null && (_0x150f22('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x20ae17(0xd6)](function (_0x57d518) {
                        const _0x1ecdd9 = _0x20ae17;
                        _0x150f22(this)[_0x1ecdd9(0x282)](_0x1ecdd9(0x9f)) && (_0x150f22(this)[_0x1ecdd9(0x1b1)]()['length'] > 0x0 && (_0x5d364c = _0x2afbb8[_0x1ecdd9(0x179)][_0x1ecdd9(0x11a)][0x0][_0x1ecdd9(0xc8)][_0x57d518]['id']));
                    }), _0x150f22(_0x20ae17(0xb9))[_0x20ae17(0xd6)](function (_0x1473fd) {
                        const _0x1cb15b = _0x20ae17;
                        _0x150f22(this)['children']()[_0x1cb15b(0x282)](_0x1cb15b(0xc9)) && (_0x5d364c = _0x2afbb8[_0x1cb15b(0x179)]['reels_media'][0x0]['items'][_0x1473fd]['id']);
                    }));
                    _0x5d364c == null && (_0x5d364c = location[_0x20ae17(0x1dc)]['split']('/')['filter'](_0x373a8d => _0x373a8d['length'] > 0x0 && _0x373a8d[_0x20ae17(0x288)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x540a11 = await _0x22d847(_0x5d364c);
                    _0x1f5f15['RENAME_PUBLISH_DATE'] && (_0x49b2c7 = _0x540a11['items'][0x0][_0x20ae17(0x1ae)]);
                    _0x540a11['status'] === 'ok' ? _0x510ee4(_0x540a11[_0x20ae17(0xc8)][0x0][_0x20ae17(0xbe)]['candidates'][0x0]['url'], _0x22a84b, 'stories', _0x49b2c7, 'jpg') : (_0x1f5f15[_0x20ae17(0xf2)] ? (_0x263678 = !![], _0xbd06c3(!![], _0xa52a42)) : alert(_0x20ae17(0xeb) + _0x540a11[_0x20ae17(0x151)]), _0x589ef6(_0x540a11));
                    _0x3652e9(![]);
                    return;
                }
                if (_0x36535c[_0x20ae17(0x19b)][_0x22a84b] && !_0xa52a42) {
                    _0x589ef6(_0x20ae17(0x1e9), _0x22a84b), _0x36535c[_0x20ae17(0x19b)][_0x22a84b]['data']['reels_media'][0x0][_0x20ae17(0xc8)][_0x20ae17(0x2cd)](_0x5d8409 => {
                        const _0x34f2d6 = _0x20ae17;
                        _0x5d8409['id'] == _0x5e9ea7 && (_0x464961 = _0x5d8409[_0x34f2d6(0x185)], _0x1f5f15[_0x34f2d6(0x109)] && (_0x49b2c7 = _0x5d8409['taken_at_timestamp']));
                    });
                    if (_0x464961[_0x20ae17(0x276)] == 0x0) {
                        _0x589ef6('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x22a84b), _0xbd06c3(!![], !![]);
                        return;
                    }
                } else {
                    let _0x6a2f94 = await _0x54caaa(_0x22a84b), _0x30d7f1 = _0x6a2f94[_0x20ae17(0x21b)]['pk'], _0x120b4f = await _0x7cbefb(_0x30d7f1);
                    _0x120b4f[_0x20ae17(0x179)]['reels_media'][0x0]['items'][_0x20ae17(0x2cd)](_0x286b7f => {
                        const _0x31c2fc = _0x20ae17;
                        _0x286b7f['id'] == _0x5e9ea7 && (_0x464961 = _0x286b7f['display_url'], _0x1f5f15[_0x31c2fc(0x109)] && (_0x49b2c7 = _0x286b7f[_0x31c2fc(0x21a)]));
                    });
                    if (_0x464961[_0x20ae17(0x276)] == 0x0) {
                        let _0x47d12d = _0x150f22(_0x20ae17(0xfb) + _0x22a84b + _0x20ae17(0x150))[_0x20ae17(0x2c1)](function () {
                            const _0x1bac83 = _0x20ae17;
                            return _0x150f22(this)[_0x1bac83(0x1b1)]()['length'] === 0x0 && _0x150f22(this)['find']('svg')[_0x1bac83(0x276)] === 0x0 && _0x150f22(this)[_0x1bac83(0x261)]()?.[_0x1bac83(0xe8)]() === _0x22a84b?.[_0x1bac83(0xe8)]();
                        })[_0x20ae17(0x23a)](_0x20ae17(0x1e3))[_0x20ae17(0x2c1)](function () {
                            const _0x2f8a71 = _0x20ae17;
                            return _0x150f22(this)[_0x2f8a71(0x261)]()?.[_0x2f8a71(0xe8)]() !== _0x22a84b?.['toLowerCase']();
                        })[_0x20ae17(0x2c1)](function () {
                            const _0x27b8e6 = _0x20ae17;
                            return _0x150f22(this)[_0x27b8e6(0x1b1)]()[_0x27b8e6(0x276)] > 0x1;
                        })[_0x20ae17(0x210)]();
                        _0x47d12d[_0x20ae17(0x1b1)]()[_0x20ae17(0x2c1)](function () {
                            return _0x150f22(this)['height']() < 0xa;
                        })['first']()['children']()[_0x20ae17(0xd6)](function (_0x460d6a) {
                            const _0x1a6dc7 = _0x20ae17;
                            _0x150f22(this)[_0x1a6dc7(0x1b1)]()[_0x1a6dc7(0x276)] > 0x0 && (_0x464961 = _0x120b4f[_0x1a6dc7(0x179)][_0x1a6dc7(0x11a)][0x0][_0x1a6dc7(0xc8)][_0x460d6a][_0x1a6dc7(0x185)], _0x1f5f15[_0x1a6dc7(0x109)] && (_0x49b2c7 = _0x120b4f[_0x1a6dc7(0x179)]['reels_media'][0x0]['items'][_0x460d6a][_0x1a6dc7(0x21a)]));
                        }), _0x464961[_0x20ae17(0x276)] == 0x0 && (_0x150f22(_0x20ae17(0x170))[_0x20ae17(0xd6)](function (_0x2208a0) {
                            const _0x560b1d = _0x20ae17;
                            _0x150f22(this)['hasClass'](_0x560b1d(0x9f)) && (_0x150f22(this)[_0x560b1d(0x1b1)]()[_0x560b1d(0x276)] > 0x0 && (_0x464961 = _0x120b4f[_0x560b1d(0x179)][_0x560b1d(0x11a)][0x0][_0x560b1d(0xc8)][_0x2208a0][_0x560b1d(0x185)], _0x1f5f15[_0x560b1d(0x109)] && (_0x49b2c7 = _0x120b4f[_0x560b1d(0x179)]['reels_media'][0x0][_0x560b1d(0xc8)][_0x2208a0][_0x560b1d(0x21a)])));
                        }), _0x150f22(_0x20ae17(0xb9))[_0x20ae17(0xd6)](function (_0x26d494) {
                            const _0x6255d4 = _0x20ae17;
                            _0x150f22(this)[_0x6255d4(0x1b1)]()['hasClass'](_0x6255d4(0xc9)) && (_0x464961 = _0x120b4f[_0x6255d4(0x179)][_0x6255d4(0x11a)][0x0]['items'][_0x26d494][_0x6255d4(0x185)], _0x1f5f15[_0x6255d4(0x109)] && (_0x49b2c7 = _0x120b4f[_0x6255d4(0x179)][_0x6255d4(0x11a)][0x0][_0x6255d4(0xc8)][_0x26d494][_0x6255d4(0x21a)]));
                        }));
                    }
                }
                _0x510ee4(_0x464961, _0x22a84b, _0x20ae17(0x1c7), _0x49b2c7, _0x2a223a), _0x263678 = ![], _0x3652e9(![]);
            } else {
                if (_0x150f22(_0x20ae17(0x1e2))[_0x20ae17(0x25b)]()['find']('video[class]')[_0x20ae17(0x276)]) {
                    let _0x24deb4 = null;
                    _0x150f22('body\x20>\x20div\x20section._ac0a')[_0x20ae17(0x276)] > 0x0 ? _0x24deb4 = _0x150f22('body\x20>\x20div\x20section:visible._ac0a') : (_0x24deb4 = _0x150f22(_0x20ae17(0x208)), _0x24deb4[_0x20ae17(0x2d1)](_0x20ae17(0x255), _0x20ae17(0x28c)));
                    _0x24deb4[_0x20ae17(0x276)] === 0x0 && (_0x24deb4 = _0x150f22(_0x20ae17(0xd3))[_0x20ae17(0x25b)]()[_0x20ae17(0x25b)]()[_0x20ae17(0x25b)]()['find'](_0x20ae17(0xce)), _0x24deb4[_0x20ae17(0x2d1)](_0x20ae17(0x255), _0x20ae17(0x28c)));
                    _0x24deb4[_0x20ae17(0x276)] === 0x0 && (_0x24deb4 = _0x150f22(_0x20ae17(0xd3))[_0x20ae17(0x25b)]()[_0x20ae17(0x25b)]()[_0x20ae17(0x25b)]()[_0x20ae17(0xc3)](_0x20ae17(0x184)), _0x24deb4[_0x20ae17(0x2d1)]('position', _0x20ae17(0x28c)));
                    if (_0x24deb4[_0x20ae17(0x276)] === 0x0) {
                        let _0x4c52d2 = _0x150f22(_0x20ae17(0x22c)), _0x1d5682 = 0x0;
                        _0x4c52d2['each'](function () {
                            const _0x317b1b = _0x20ae17;
                            _0x150f22(this)['width']() > _0x1d5682 && (_0x1d5682 = _0x150f22(this)['width'](), _0x24deb4 = _0x150f22(this)[_0x317b1b(0x1b1)](_0x317b1b(0x98))[_0x317b1b(0x210)]());
                        });
                    }
                    _0x24deb4 != null && (_0x24deb4[_0x20ae17(0x210)]()[_0x20ae17(0x2d1)](_0x20ae17(0x255), _0x20ae17(0x28c)), _0x24deb4[_0x20ae17(0x210)]()[_0x20ae17(0x268)](_0x20ae17(0x1f1) + _0x5d66ee(_0x20ae17(0x28a)) + _0x20ae17(0xdf) + _0x4c71bb[_0x20ae17(0x164)] + _0x20ae17(0xca)));
                }
            }
        }
        async function _0xa07f8b(_0x1a2c29, _0x264625, _0x2cca98) {
            const _0x3f1616 = _0x476d1a;
            if (_0x1a2c29) {
                _0x3652e9(!![]);
                let _0x11ce0a = location[_0x3f1616(0xb2)]['split']('?')['at'](0x0)[_0x3f1616(0x89)](_0x3f1616(0x1b6))['at'](-0x1)['replaceAll']('/', ''), _0xa50128 = await _0xd408f0(_0x11ce0a), _0x52d5c2 = _0xa50128[_0x3f1616(0x179)], _0x560c03 = new Date()['getTime']();
                _0x1f5f15[_0x3f1616(0x109)] && (_0xa50128['type'] === 'query_hash' ? _0x560c03 = _0x52d5c2[_0x3f1616(0x161)][_0x3f1616(0x21a)] : _0x560c03 = _0x52d5c2[_0x3f1616(0x1ae)]);
                if (_0xa50128[_0x3f1616(0x16e)] === _0x3f1616(0x251)) {
                    if (_0x264625 && _0x52d5c2[_0x3f1616(0x161)]['is_video']) {
                        if (_0x2cca98)
                            _0x929b21(_0x52d5c2['shortcode_media']['video_url']);
                        else {
                            let _0x23eaec = 'mp4';
                            _0x510ee4(_0x52d5c2[_0x3f1616(0x161)][_0x3f1616(0x295)], _0x52d5c2[_0x3f1616(0x161)][_0x3f1616(0xe6)][_0x3f1616(0x190)], _0x3f1616(0x26e), _0x560c03, _0x23eaec, _0x11ce0a);
                        }
                    } else {
                        if (_0x2cca98)
                            _0x929b21(_0x52d5c2['shortcode_media'][_0x3f1616(0xfd)]['at'](-0x1)['src']);
                        else {
                            let _0x136c31 = _0x3f1616(0x2cb);
                            _0x510ee4(_0x52d5c2[_0x3f1616(0x161)][_0x3f1616(0xfd)]['at'](-0x1)[_0x3f1616(0xac)], _0x52d5c2[_0x3f1616(0x161)][_0x3f1616(0xe6)]['username'], 'reels', _0x560c03, _0x136c31, _0x11ce0a);
                        }
                    }
                } else {
                    if (_0x264625 && _0x52d5c2[_0x3f1616(0x11c)] != null) {
                        if (_0x2cca98)
                            _0x929b21(_0x52d5c2['video_versions'][0x0][_0x3f1616(0xd1)]);
                        else {
                            let _0x55d384 = _0x3f1616(0x249);
                            _0x510ee4(_0x52d5c2[_0x3f1616(0x11c)][0x0]['url'], _0x52d5c2[_0x3f1616(0xe6)][_0x3f1616(0x190)], _0x3f1616(0x26e), _0x560c03, _0x55d384, _0x11ce0a);
                        }
                    } else {
                        if (_0x2cca98)
                            _0x929b21(_0x52d5c2[_0x3f1616(0xbe)][_0x3f1616(0xa6)][0x0][_0x3f1616(0xd1)]);
                        else {
                            let _0x2b1db7 = _0x3f1616(0x2cb);
                            _0x510ee4(_0x52d5c2[_0x3f1616(0xbe)][_0x3f1616(0xa6)][0x0][_0x3f1616(0xd1)], _0x52d5c2[_0x3f1616(0xe6)][_0x3f1616(0x190)], _0x3f1616(0x26e), _0x560c03, _0x2b1db7, _0x11ce0a);
                        }
                    }
                }
                _0x3652e9(![]);
            } else
                var _0x12b9c8 = setInterval(() => {
                    const _0x3e6a43 = _0x3f1616;
                    _0x150f22('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')['length'] > 0x0 && (clearInterval(_0x12b9c8), _0x1f5f15['SCROLL_BUTTON'] && (_0x150f22(_0x3e6a43(0x2c9))[_0x3e6a43(0x29e)](), _0x150f22(_0x3e6a43(0xd2))[_0x3e6a43(0x268)](_0x3e6a43(0x8a)), _0x150f22(_0x3e6a43(0x196))['append'](_0x3e6a43(0x231)), _0x150f22(_0x3e6a43(0x196))[_0x3e6a43(0x268)](_0x3e6a43(0x168)), _0x150f22('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up')['on'](_0x3e6a43(0x2c5), function () {
                        const _0x4a66a0 = _0x3e6a43;
                        _0x150f22('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x4a66a0(0x15d)]({
                            'top': -0x1e,
                            'behavior': _0x4a66a0(0xea)
                        });
                    }), _0x150f22('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0x3e6a43(0x2c5), function () {
                        const _0x33592e = _0x3e6a43;
                        _0x150f22(_0x33592e(0x1a5))[0x0][_0x33592e(0x15d)]({
                            'top': 0x1e,
                            'behavior': _0x33592e(0xea)
                        });
                    })), _0x150f22('section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]')[_0x3e6a43(0x1b1)](_0x3e6a43(0x98))[_0x3e6a43(0xd6)](function () {
                        const _0x1aa2f8 = _0x3e6a43;
                        if (_0x150f22(this)[_0x1aa2f8(0x1b1)]()[_0x1aa2f8(0x276)] > 0x0) {
                            if (!_0x150f22(this)['children']()[_0x1aa2f8(0xc3)](_0x1aa2f8(0x20c))[_0x1aa2f8(0x276)]) {
                                var _0xd0758a = _0x150f22(this);
                                _0x150f22(this)[_0x1aa2f8(0x1b1)]()[_0x1aa2f8(0x2d1)]('position', _0x1aa2f8(0x28c)), _0x150f22(this)[_0x1aa2f8(0x1b1)]()[_0x1aa2f8(0x268)](_0x1aa2f8(0x23c) + _0x5d66ee('DW') + _0x1aa2f8(0x8f) + _0x4c71bb[_0x1aa2f8(0x279)] + _0x1aa2f8(0xca)), _0x150f22(this)[_0x1aa2f8(0x1b1)]()[_0x1aa2f8(0x268)](_0x1aa2f8(0x24b) + _0x5d66ee(_0x1aa2f8(0xf1)) + _0x1aa2f8(0x297) + _0x4c71bb[_0x1aa2f8(0xf1)] + '</div>'), _0x150f22(this)[_0x1aa2f8(0x1b1)]()[_0x1aa2f8(0x268)](_0x1aa2f8(0x1f1) + _0x5d66ee(_0x1aa2f8(0x28a)) + '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>' + _0x4c71bb['THUMBNAIL'] + _0x1aa2f8(0xca));
                                _0x1f5f15['DISABLE_VIDEO_LOOPING'] && _0x150f22(this)['find']('video')['each'](function () {
                                    const _0x2183d3 = _0x1aa2f8;
                                    !_0x150f22(this)['data'](_0x2183d3(0x1fb)) && (_0x589ef6('(reel)\x20Added\x20video\x20event\x20listener\x20#loop'), _0x150f22(this)['on'](_0x2183d3(0x1e4), function () {
                                        const _0x4f848a = _0x2183d3;
                                        _0x150f22(this)['attr'](_0x4f848a(0x2bd), !![]);
                                        let _0x43ac67 = _0x150f22(this)[_0x4f848a(0x111)]()[_0x4f848a(0xc3)](_0x4f848a(0x204))[_0x4f848a(0x23a)](_0x4f848a(0x283));
                                        _0x43ac67[_0x4f848a(0x276)] > 0x0 ? (_0x43ac67[_0x4f848a(0x2c5)](), _0x589ef6(_0x4f848a(0xd0))) : (_0x150f22(this)['parent']()['find'](_0x4f848a(0x19d))[_0x4f848a(0x120)](_0x4f848a(0x19a)), this['pause'](), _0x589ef6(_0x4f848a(0x1cb)));
                                    }));
                                });
                                _0x1f5f15[_0x1aa2f8(0x191)] && _0x150f22(this)[_0x1aa2f8(0xc3)]('video')[_0x1aa2f8(0xd6)](function () {
                                    const _0x501506 = _0x1aa2f8;
                                    !_0x150f22(this)[_0x501506(0x179)](_0x501506(0x1b4)) && (_0x589ef6(_0x501506(0x1b5)), this[_0x501506(0xef)] = _0x14072e, _0x150f22(this)['on'](_0x501506(0x18f), function () {
                                        const _0x565a43 = _0x501506;
                                        this[_0x565a43(0xef)] = _0x14072e;
                                    }), _0x150f22(this)['on'](_0x501506(0x178), function () {
                                        const _0x16bc6e = _0x501506;
                                        this[_0x16bc6e(0xef)] = _0x14072e;
                                    }), _0x150f22(this)[_0x501506(0x87)]('data-modify', !![]));
                                });
                                _0x1f5f15[_0x1aa2f8(0x222)] && _0x150f22(this)[_0x1aa2f8(0xc3)](_0x1aa2f8(0x124))['each'](function () {
                                    const _0x4d6484 = _0x1aa2f8;
                                    if (!_0x150f22(this)['data'](_0x4d6484(0x23b))) {
                                        let _0x31be45 = _0x150f22(this);
                                        _0x589ef6(_0x4d6484(0x123)), this[_0x4d6484(0xef)] = _0x14072e, _0x150f22(this)['on'](_0x4d6484(0xa4), function () {
                                            const _0x2d6c93 = _0x4d6484;
                                            this[_0x2d6c93(0xef)] = _0x14072e;
                                        }), _0x150f22(this)['on'](_0x4d6484(0x29c), function (_0x1420ed) {
                                            const _0xad3a5 = _0x4d6484;
                                            _0x1420ed[_0xad3a5(0x21f)](), _0x31be45[_0xad3a5(0x2d1)](_0xad3a5(0x137), '-1'), _0x31be45[_0xad3a5(0x120)](_0xad3a5(0x23b));
                                        }), _0x150f22(this)[_0x4d6484(0x25b)]()[_0x4d6484(0xc3)](_0x4d6484(0x299))[_0x4d6484(0x2c1)](function () {
                                            const _0x4b6b4f = _0x4d6484;
                                            return _0x150f22(this)[_0x4b6b4f(0x25b)]('div[role=\x22presentation\x22]')[_0x4b6b4f(0x276)] > 0x0 && _0x150f22(this)['css'](_0x4b6b4f(0xd7)) === _0x4b6b4f(0xf9) && _0x150f22(this)[_0x4b6b4f(0x87)](_0x4b6b4f(0x19a)) != null;
                                        })[_0x4d6484(0x210)]()['on'](_0x4d6484(0x29c), function (_0x5897be) {
                                            const _0xe2b00a = _0x4d6484;
                                            _0x5897be['preventDefault'](), _0x31be45[_0xe2b00a(0x2d1)](_0xe2b00a(0x137), '2'), _0x31be45[_0xe2b00a(0x87)](_0xe2b00a(0x23b), !![]);
                                        }), _0x150f22(this)['on'](_0x4d6484(0x186), function () {
                                            const _0x34cae6 = _0x4d6484;
                                            let _0x45262a = _0x150f22(this)[_0x34cae6(0x25b)]()[_0x34cae6(0xc3)](_0x34cae6(0x14b))[_0x34cae6(0xc3)](_0x34cae6(0x125))[_0x34cae6(0x2c1)](function (_0x3cd68a) {
                                                const _0x4f1935 = _0x34cae6;
                                                return _0x150f22(this)['width']() <= 0x40 && _0x150f22(this)[_0x4f1935(0x16f)]() <= 0x40 && _0x150f22(this)[_0x4f1935(0xc3)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')['length'] > 0x0;
                                            });
                                            var _0x38e846 = _0x45262a[_0x34cae6(0xc3)](_0x34cae6(0x182))[_0x34cae6(0x276)] === 0x0;
                                            this[_0x34cae6(0xdd)] != _0x38e846 && (this[_0x34cae6(0xef)] = _0x14072e, _0x45262a?.[_0x34cae6(0x2c5)]()), _0x150f22(this)[_0x34cae6(0x87)]('data-completed') && (_0x14072e = this[_0x34cae6(0xef)], GM_setValue('G_VIDEO_VOLUME', this[_0x34cae6(0xef)])), this[_0x34cae6(0xef)] == _0x14072e && _0x150f22(this)['attr']('data-completed', !![]);
                                        }), _0x150f22(this)[_0x4d6484(0x2d1)](_0x4d6484(0x255), _0x4d6484(0xfa)), _0x150f22(this)[_0x4d6484(0x2d1)](_0x4d6484(0x137), '2'), _0x150f22(this)[_0x4d6484(0x87)]('data-controls', !![]), _0x150f22(this)['attr'](_0x4d6484(0x23b), !![]);
                                    }
                                });
                                var _0x57acb8 = _0x150f22(this)[_0x1aa2f8(0xc3)](_0x1aa2f8(0x254))[_0x1aa2f8(0x210)]();
                                _0x57acb8[_0x1aa2f8(0x268)](_0x1aa2f8(0x219)), _0x57acb8['find']('div.volume_slider')['append'](_0x1aa2f8(0x2a1) + _0x14072e + '\x22\x20/></div>'), _0x57acb8[_0x1aa2f8(0xc3)](_0x1aa2f8(0x1ac))[_0x1aa2f8(0x87)](_0x1aa2f8(0x19a), _0x1aa2f8(0x1d4) + (_0x14072e * 0x64 + '%')), _0x57acb8[_0x1aa2f8(0xc3)]('div.volume_slider\x20input')['on'](_0x1aa2f8(0x15f), function () {
                                    const _0x1fbf08 = _0x1aa2f8;
                                    var _0x575faf = _0x150f22(this)[_0x1fbf08(0x21d)]() * 0x64 + '%';
                                    _0x14072e = _0x150f22(this)[_0x1fbf08(0x21d)](), GM_setValue(_0x1fbf08(0xa1), _0x150f22(this)[_0x1fbf08(0x21d)]()), _0x150f22(this)[_0x1fbf08(0x87)](_0x1fbf08(0x19a), _0x1fbf08(0x1d4) + _0x575faf), _0xd0758a[_0x1fbf08(0xc3)]('video')[_0x1fbf08(0xd6)](function () {
                                        const _0x24372f = _0x1fbf08;
                                        _0x589ef6(_0x24372f(0x83)), this[_0x24372f(0xef)] = _0x14072e;
                                    });
                                }), _0x57acb8[_0x1aa2f8(0xc3)](_0x1aa2f8(0x1ac))['on']('mouseenter', function () {
                                    const _0x217c5f = _0x1aa2f8;
                                    var _0x2836f6 = _0x14072e * 0x64 + '%';
                                    _0x150f22(this)['attr'](_0x217c5f(0x19a), _0x217c5f(0x1d4) + _0x2836f6), _0x150f22(this)[_0x217c5f(0x21d)](_0x14072e), _0xd0758a['find']('video')[_0x217c5f(0xd6)](function () {
                                        const _0x514490 = _0x217c5f;
                                        _0x589ef6(_0x514490(0x83)), this[_0x514490(0xef)] = _0x14072e;
                                    });
                                }), _0x57acb8[_0x1aa2f8(0xc3)](_0x1aa2f8(0x270))['on'](_0x1aa2f8(0x2c5), function (_0x144bd7) {
                                    const _0x1d2312 = _0x1aa2f8;
                                    _0x144bd7[_0x1d2312(0x225)](), _0x144bd7[_0x1d2312(0x21f)]();
                                });
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0xd187d(_0x1fef25) {
            return new Promise((_0x3efa53, _0x4e3c5) => {
                const _0x38980f = a0_0x27e8;
                let _0x3d05df = _0x38980f(0x24e) + _0x1fef25 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': _0x38980f(0x2ae),
                    'url': _0x3d05df,
                    'onload': function (_0x4ac516) {
                        const _0x63a13e = _0x38980f;
                        try {
                            let _0x4c0f4d = JSON[_0x63a13e(0xa3)](_0x4ac516[_0x63a13e(0x10a)]);
                            _0x3efa53(_0x4c0f4d);
                        } catch (_0x21776d) {
                            _0x589ef6('getHighlightStories()', _0x63a13e(0x14a), _0x21776d[_0x63a13e(0x151)]), _0x4e3c5(_0x21776d);
                        }
                    },
                    'onerror': function (_0x4c0d7c) {
                        const _0x402ea4 = _0x38980f;
                        _0x589ef6('getHighlightStories()', _0x402ea4(0x14a), _0x4c0d7c), _0x4e3c5(_0x4c0d7c);
                    }
                });
            });
        }
        function _0x7cbefb(_0x10673f) {
            return new Promise((_0x276d05, _0xe04b5e) => {
                const _0x288a9b = a0_0x27e8;
                let _0x5b9af0 = _0x288a9b(0x240) + _0x10673f + _0x288a9b(0xd4);
                GM_xmlhttpRequest({
                    'method': _0x288a9b(0x2ae),
                    'url': _0x5b9af0,
                    'onload': function (_0x4cdb40) {
                        const _0x3e09a8 = _0x288a9b;
                        try {
                            let _0x326f03 = JSON[_0x3e09a8(0xa3)](_0x4cdb40[_0x3e09a8(0x10a)]);
                            _0x589ef6(_0x3e09a8(0x298), _0x326f03), _0x276d05(_0x326f03);
                        } catch (_0x3f53ed) {
                            _0x589ef6(_0x3e09a8(0x298), _0x3e09a8(0x14a), _0x3f53ed[_0x3e09a8(0x151)]), _0xe04b5e(_0x3f53ed);
                        }
                    },
                    'onerror': function (_0x1a25d1) {
                        const _0x5e1ed3 = _0x288a9b;
                        _0x589ef6(_0x5e1ed3(0x298), _0x5e1ed3(0x14a), _0x1a25d1), _0xe04b5e(_0x1a25d1);
                    }
                });
            });
        }
        function _0x54caaa(_0x25e8db) {
            return new Promise((_0x4d3e13, _0x3c59a5) => {
                const _0x22d321 = a0_0x27e8;
                let _0x34d7cb = _0x22d321(0x1a9) + _0x25e8db;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x34d7cb,
                    'onload': function (_0xfc361f) {
                        const _0x559dbe = _0x22d321;
                        let _0x2dedae = JSON[_0x559dbe(0xa3)](_0xfc361f[_0x559dbe(0x10a)]), _0x527d4f = null;
                        _0x2dedae[_0x559dbe(0x2c0)]['forEach'](_0x443705 => {
                            const _0x3a1ffe = _0x559dbe;
                            _0x443705[_0x3a1ffe(0x21b)][_0x3a1ffe(0x190)]?.[_0x3a1ffe(0xe8)]() === _0x25e8db?.[_0x3a1ffe(0xe8)]() && (_0x527d4f = _0x443705);
                        }), _0x527d4f != null ? (_0x589ef6(_0x559dbe(0x289), _0x527d4f), _0x4d3e13(_0x527d4f)) : _0x2f7cf4(_0x25e8db)['then'](_0x1a5702 => {
                            _0x4d3e13(_0x1a5702);
                        })['catch'](_0x1bee3f => {
                            const _0x45de53 = _0x559dbe;
                            alert(_0x45de53(0x232));
                        });
                    },
                    'onerror': function (_0x3992d9) {
                        const _0x5da677 = _0x22d321;
                        _0x589ef6(_0x5da677(0x289), _0x5da677(0x14a), _0x3992d9), _0x3c59a5(_0x3992d9);
                    }
                });
            });
        }
        function _0x2f7cf4(_0x308aff) {
            return new Promise((_0x3385b1, _0xbde27f) => {
                const _0x46f75d = a0_0x27e8;
                let _0x1e8ba0 = _0x46f75d(0xa7) + _0x308aff;
                GM_xmlhttpRequest({
                    'method': _0x46f75d(0x2ae),
                    'url': _0x1e8ba0,
                    'headers': { 'X-IG-App-ID': _0x166335() },
                    'onload': function (_0x4f7581) {
                        const _0xf17b19 = _0x46f75d;
                        try {
                            let _0x4c683d = JSON[_0xf17b19(0xa3)](_0x4f7581[_0xf17b19(0x10a)]), _0x29cf34 = _0x4c683d?.[_0xf17b19(0x179)]?.[_0xf17b19(0x21b)];
                            if (_0x29cf34 != null) {
                                let _0x36efab = _0x4c683d?.[_0xf17b19(0x179)];
                                _0x36efab[_0xf17b19(0x21b)]['pk'] = _0x36efab[_0xf17b19(0x21b)]['id'], _0x589ef6(_0xf17b19(0xc2), _0x4c683d), _0x3385b1(_0x36efab);
                            } else
                                _0x589ef6(_0xf17b19(0xc2), _0xf17b19(0x14a), 'undefined'), _0xbde27f('undefined');
                        } catch (_0x530ee7) {
                            _0x589ef6('getUserIdWithAgent()', _0xf17b19(0x14a), _0x530ee7['message']), _0xbde27f(_0x530ee7);
                        }
                    },
                    'onerror': function (_0x473226) {
                        const _0x5ce7a3 = _0x46f75d;
                        _0x589ef6(_0x5ce7a3(0xc2), _0x5ce7a3(0x14a), _0x473226), _0xbde27f(_0x473226);
                    }
                });
            });
        }
        function _0x5abd97(_0x32a6a6) {
            return new Promise((_0xe5265e, _0x2ef467) => {
                const _0x31c96d = a0_0x27e8;
                let _0x8852fe = _0x31c96d(0x1db) + _0x32a6a6 + '/info/';
                GM_xmlhttpRequest({
                    'method': _0x31c96d(0x2ae),
                    'url': _0x8852fe,
                    'headers': { 'User-Agent': _0x31c96d(0x11e) },
                    'onload': function (_0x1bfaa6) {
                        const _0x37d6c3 = _0x31c96d;
                        try {
                            let _0x43b934 = JSON[_0x37d6c3(0xa3)](_0x1bfaa6[_0x37d6c3(0x10a)]);
                            _0x43b934[_0x37d6c3(0x145)] !== 'ok' ? (_0x589ef6('getUserHighSizeProfile()', _0x37d6c3(0x14a), _0x43b934), _0x2ef467(_0x37d6c3(0x1a4))) : (_0x589ef6('getUserHighSizeProfile()', _0x43b934), _0xe5265e(_0x43b934[_0x37d6c3(0x21b)][_0x37d6c3(0x9d)]?.[_0x37d6c3(0xd1)]));
                        } catch (_0x5197ca) {
                            _0x589ef6(_0x37d6c3(0x2a7), _0x37d6c3(0x14a), _0x5197ca), _0x2ef467(_0x5197ca);
                        }
                    },
                    'onerror': function (_0x295203) {
                        const _0x3e1a83 = _0x31c96d;
                        _0x589ef6(_0x3e1a83(0x2a7), _0x3e1a83(0x14a), _0x295203), _0x2ef467(_0x295203);
                    }
                });
            });
        }
        function _0xeea682(_0x1159d7) {
            return new Promise((_0x1a365c, _0x13f662) => {
                const _0x4c071d = a0_0x27e8;
                if (!_0x1159d7)
                    _0x13f662(_0x4c071d(0x250));
                let _0x3ea960 = _0x1159d7, _0x3d6548 = _0x4c071d(0x1e8) + _0x3ea960 + _0x4c071d(0xff);
                GM_xmlhttpRequest({
                    'method': _0x4c071d(0x2ae),
                    'url': _0x3d6548,
                    'onload': function (_0x5ba366) {
                        const _0x226ce7 = _0x4c071d;
                        try {
                            let _0x52a07d = JSON[_0x226ce7(0xa3)](_0x5ba366[_0x226ce7(0x10a)]);
                            _0x589ef6(_0x226ce7(0x253), _0x52a07d), _0x1a365c(_0x52a07d[_0x226ce7(0x179)][_0x226ce7(0x161)]['owner'][_0x226ce7(0x190)]);
                        } catch (_0x1b7648) {
                            _0x589ef6('getPostOwner()', _0x226ce7(0x14a), _0x1b7648[_0x226ce7(0x151)]), _0x13f662(_0x1b7648);
                        }
                    },
                    'onerror': function (_0x11c762) {
                        const _0x553095 = _0x4c071d;
                        _0x589ef6(_0x553095(0x253), _0x553095(0x14a), _0x11c762), _0x13f662(_0x11c762);
                    }
                });
            });
        }
        function _0xd408f0(_0x5e4ec4) {
            return new Promise((_0x4a8c1a, _0x2253e5) => {
                const _0x41c104 = a0_0x27e8;
                if (!_0x5e4ec4)
                    _0x2253e5(_0x41c104(0x250));
                let _0x3a6494 = _0x5e4ec4, _0x3697c7 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x3a6494 + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x41c104(0x2ae),
                    'url': _0x3697c7,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x936edb) {
                        const _0x677b41 = _0x41c104;
                        try {
                            let _0x4c0be4 = JSON[_0x677b41(0xa3)](_0x936edb[_0x677b41(0x10a)]);
                            _0x589ef6(_0x4c0be4), _0x4c0be4[_0x677b41(0x145)] === 'fail' ? (_0x589ef6('Request\x20with:', _0x677b41(0x201), _0x3a6494), _0x5c8518(_0x3a6494)[_0x677b41(0x2ca)](_0xa40de8 => {
                                const _0x4aa182 = _0x677b41;
                                _0x4a8c1a({
                                    'type': _0x4aa182(0x1d8),
                                    'data': _0xa40de8[_0x4aa182(0x209)][_0x4aa182(0xc8)][0x0]
                                });
                            })[_0x677b41(0x105)](_0x48259e => {
                                _0x2253e5(_0x48259e);
                            })) : _0x4a8c1a({
                                'type': _0x677b41(0x251),
                                'data': _0x4c0be4[_0x677b41(0x179)]
                            });
                        } catch (_0x51dcdb) {
                            _0x589ef6(_0x677b41(0x291), 'reject', _0x51dcdb[_0x677b41(0x151)]), _0x2253e5(_0x51dcdb);
                        }
                    },
                    'onerror': function (_0x57c167) {
                        const _0x13f6dc = _0x41c104;
                        _0x589ef6(_0x13f6dc(0x291), _0x13f6dc(0x14a), _0x57c167), _0x2253e5(_0x57c167);
                    }
                });
            });
        }
        function _0x5c8518(_0x246a4e) {
            return new Promise((_0x2262a4, _0xd950fb) => {
                const _0x54db0f = a0_0x27e8;
                if (!_0x246a4e)
                    _0xd950fb(_0x54db0f(0x250));
                let _0x28b9f1 = _0x246a4e, _0x430263 = _0x54db0f(0x1ed) + _0x28b9f1 + '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}';
                GM_xmlhttpRequest({
                    'method': _0x54db0f(0x2ae),
                    'url': _0x430263,
                    'headers': {
                        'User-Agent': _0x54db0f(0x11e),
                        'X-IG-App-ID': _0x166335()
                    },
                    'onload': function (_0x49b94c) {
                        const _0x3695dd = _0x54db0f;
                        try {
                            let _0x3845dd = JSON[_0x3695dd(0xa3)](_0x49b94c[_0x3695dd(0x10a)]);
                            _0x589ef6(_0x3845dd), _0x3845dd[_0x3695dd(0x145)] === 'fail' ? (alert(_0x3695dd(0x169) + _0x3845dd[_0x3695dd(0x151)] + ':\x20' + _0x3845dd[_0x3695dd(0x188)]), _0x589ef6('Request\x20failed\x20with\x20API\x20response\x20' + _0x3845dd['message'] + ':\x20' + _0x3845dd[_0x3695dd(0x188)]), _0xd950fb(_0x49b94c)) : (_0x589ef6('getBlobMediaWithQueryID()', _0x3845dd[_0x3695dd(0x179)]), _0x2262a4(_0x3845dd[_0x3695dd(0x179)]));
                        } catch (_0x3605c0) {
                            _0x589ef6(_0x3695dd(0x1aa), _0x3695dd(0x14a), _0x3605c0[_0x3695dd(0x151)]), _0xd950fb(_0x3605c0);
                        }
                    },
                    'onerror': function (_0x52066f) {
                        const _0x221a8b = _0x54db0f;
                        _0x589ef6(_0x221a8b(0x1aa), 'reject', _0x52066f), _0xd950fb(_0x52066f);
                    }
                });
            });
        }
        function _0x2b428b(_0x12c406, _0xe7a95e) {
            const _0x2f6067 = _0x476d1a;
            _0xe7a95e === !![] && (_0x589ef6('hasReferrer', _0x2f6067(0x97)), _0x150f22(_0x2f6067(0x246))[_0x2f6067(0x2c1)](function () {
                const _0x51dc7d = _0x2f6067;
                return _0x150f22(this)[_0x51dc7d(0xc3)]('.SNKMS_IG_DW_MAIN')['length'] === 0x0;
            })[_0x2f6067(0x120)](_0x2f6067(0xaf)));
            if (_0x12c406 == ![]) {
                const _0x2e27f1 = 0x64;
                let _0x496e7e = 0x0;
                var _0x7bba76 = setInterval(() => {
                    const _0x23538c = _0x2f6067;
                    (_0x496e7e > _0x2e27f1 || _0x150f22(_0x23538c(0x155))[_0x23538c(0x276)] > 0x0) && (clearInterval(_0x7bba76), _0x496e7e > _0x2e27f1 && console[_0x23538c(0xe0)](_0x23538c(0x114), _0x23538c(0x275))), _0x589ef6(_0x23538c(0x114), _0x23538c(0x1b8)), _0x2553aa(), _0x496e7e++;
                }, 0x32);
            } else
                _0x2553aa();
        }
        function _0x166335() {
            const _0x1d2831 = _0x476d1a;
            let _0x308e1e = null;
            return _0x150f22(_0x1d2831(0x262))[_0x1d2831(0xd6)](function () {
                const _0x2577f6 = _0x1d2831, _0xc4a7ba = /"APP_ID":"([0-9]+)"/ig, _0x449fab = _0x150f22(this)[_0x2577f6(0x261)]()[_0x2577f6(0x288)](_0xc4a7ba);
                _0x449fab != null && _0x308e1e == null && (_0x308e1e = [..._0x150f22(this)[_0x2577f6(0x261)]()[_0x2577f6(0x285)](_0xc4a7ba)]);
            }), _0x308e1e ? _0x308e1e['at'](0x0)['at'](-0x1) : null;
        }
        function _0x3652e9(_0x366aa3) {
            const _0x3b0389 = _0x476d1a;
            _0x366aa3 ? (_0x150f22('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')['removeClass'](_0x3b0389(0x2ad)), _0x150f22(_0x3b0389(0x12c))[_0x3b0389(0x2d1)](_0x3b0389(0x137), _0x3b0389(0x2bc))) : (_0x150f22(_0x3b0389(0x12c))[_0x3b0389(0x274)](_0x3b0389(0x2ad)), _0x150f22(_0x3b0389(0x12c))[_0x3b0389(0x2d1)](_0x3b0389(0x137), ''));
        }
        function _0x22d847(_0x1f2d84) {
            return new Promise((_0x22fe89, _0x5481fe) => {
                const _0x543251 = a0_0x27e8;
                let _0x4e5d13 = _0x543251(0xa5) + _0x1f2d84 + '/info/';
                if (_0x1f2d84 == null) {
                    alert(_0x543251(0x8c)), _0x589ef6(_0x543251(0x16d), _0x543251(0x14a), _0x543251(0x8c)), _0x3652e9(![]), _0x5481fe(-0x1);
                    return;
                }
                if (_0x166335() == null) {
                    alert(_0x543251(0x99)), _0x589ef6(_0x543251(0x16d), _0x543251(0x14a), _0x543251(0x99)), _0x3652e9(![]), _0x5481fe(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x543251(0x2ae),
                    'url': _0x4e5d13,
                    'headers': {
                        'User-Agent': window['navigator'][_0x543251(0x131)],
                        'Accept': '*/*',
                        'X-IG-App-ID': _0x166335()
                    },
                    'onload': function (_0x4a4461) {
                        const _0x2e0f2a = _0x543251;
                        if (_0x4a4461[_0x2e0f2a(0x81)] == _0x4e5d13) {
                            let _0x26baec = JSON[_0x2e0f2a(0xa3)](_0x4a4461['response']);
                            _0x589ef6('getMediaInfo()', _0x26baec), _0x22fe89(_0x26baec);
                        } else {
                            let _0x50e105 = new URL(_0x4a4461[_0x2e0f2a(0x81)]);
                            _0x50e105[_0x2e0f2a(0x1dc)][_0x2e0f2a(0x183)]('/accounts/login') ? (_0x589ef6(_0x2e0f2a(0x16d), 'reject', 'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.'), alert(_0x2e0f2a(0x1ca))) : (_0x589ef6(_0x2e0f2a(0x16d), 'reject', 'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x4a4461[_0x2e0f2a(0x81)] + '\x22'), alert(_0x2e0f2a(0xf8) + _0x4a4461[_0x2e0f2a(0x81)] + '\x22')), _0x3652e9(![]), _0x5481fe(-0x1);
                        }
                    },
                    'onerror': function (_0x57bcf9) {
                        const _0xdeb8d0 = _0x543251;
                        _0x589ef6(_0xdeb8d0(0x16d), 'reject', _0x57bcf9), _0x22fe89(_0x57bcf9);
                    }
                });
            });
        }
        function _0x3a5a50(_0x59ed6f) {
            const _0xf49531 = _0x476d1a;
            var _0x3340fc = 0x0, _0xbe0c79 = _0x59ed6f[_0xf49531(0xc3)](_0xf49531(0x172));
            return (_0xbe0c79 == null || !_0xbe0c79[_0xf49531(0x282)](_0xf49531(0x27a))) && (_0xbe0c79 = _0x59ed6f[_0xf49531(0xc3)](_0xf49531(0x15b))['eq'](0x0)['children'](_0xf49531(0x98))), _0xbe0c79[_0xf49531(0x2c1)](_0xf49531(0x8e))[_0xf49531(0xd6)](function (_0x437e3a) {
                const _0x49baa4 = _0xf49531;
                _0x150f22(this)[_0x49baa4(0x282)](_0x49baa4(0xae)) && (_0x3340fc = _0x437e3a);
            }), _0x3340fc;
        }
        function _0x4e476f(_0x2cb54e) {
            const _0x323428 = _0x476d1a;
            _0x1f5f15[_0x323428(0x265)] && _0x2cb54e[_0x323428(0xc3)](_0x323428(0x124))[_0x323428(0xd6)](function () {
                const _0x42e489 = _0x323428;
                !_0x150f22(this)[_0x42e489(0x179)](_0x42e489(0x1fb)) && (_0x589ef6('(post)\x20Added\x20video\x20event\x20listener\x20#loop'), _0x150f22(this)['on'](_0x42e489(0x1e4), function () {
                    const _0x3d32cf = _0x42e489;
                    _0x150f22(this)[_0x3d32cf(0x87)](_0x3d32cf(0x2bd), !![]), this[_0x3d32cf(0xab)]();
                }));
            });
            _0x1f5f15[_0x323428(0x191)] && _0x2cb54e[_0x323428(0xc3)](_0x323428(0x124))[_0x323428(0xd6)](function () {
                const _0x15b277 = _0x323428;
                !_0x150f22(this)[_0x15b277(0x179)](_0x15b277(0x1b4)) && (_0x589ef6(_0x15b277(0x1e0)), this[_0x15b277(0xef)] = _0x14072e, _0x150f22(this)['on'](_0x15b277(0x18f), function () {
                    const _0x1d1215 = _0x15b277;
                    this[_0x1d1215(0xef)] = _0x14072e;
                }), _0x150f22(this)['on']('playing', function () {
                    const _0xcb5b77 = _0x15b277;
                    this[_0xcb5b77(0xef)] = _0x14072e;
                }), _0x150f22(this)['on'](_0x15b277(0x1a6), function () {
                    const _0x1d1c58 = _0x15b277;
                    this[_0x1d1c58(0xef)] = _0x14072e;
                }), _0x150f22(this)['attr'](_0x15b277(0x212), !![]));
            });
            _0x1f5f15[_0x323428(0x222)] && _0x2cb54e[_0x323428(0xc3)](_0x323428(0x124))[_0x323428(0xd6)](function () {
                const _0x4e6ea0 = _0x323428;
                !_0x150f22(this)[_0x4e6ea0(0x179)]('controls') && (_0x589ef6('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), this['volume'] = _0x14072e, _0x150f22(this)['on']('loadstart', function () {
                    this['volume'] = _0x14072e;
                }), _0x150f22(this)['on'](_0x4e6ea0(0x186), function () {
                    const _0x2b6238 = _0x4e6ea0;
                    let _0x469f36 = _0x150f22(this)[_0x2b6238(0x25b)]()[_0x2b6238(0xc3)](_0x2b6238(0x14b))['find']('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x2b6238(0x2c1)](function (_0x1d16d5) {
                        const _0x53f221 = _0x2b6238;
                        return _0x150f22(this)[_0x53f221(0x229)]() <= 0x40 && _0x150f22(this)[_0x53f221(0x16f)]() <= 0x40 && _0x150f22(this)[_0x53f221(0xc3)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')[_0x53f221(0x276)] > 0x0;
                    });
                    var _0x56fffd = _0x469f36['find'](_0x2b6238(0x182))[_0x2b6238(0x276)] === 0x0;
                    this[_0x2b6238(0xdd)] != _0x56fffd && (this['volume'] = _0x14072e, _0x469f36?.[_0x2b6238(0x2c5)]()), _0x150f22(this)[_0x2b6238(0x87)](_0x2b6238(0x12d)) && (_0x14072e = this[_0x2b6238(0xef)], GM_setValue(_0x2b6238(0xa1), this[_0x2b6238(0xef)])), this[_0x2b6238(0xef)] == _0x14072e && _0x150f22(this)[_0x2b6238(0x87)](_0x2b6238(0x12d), !![]);
                }), _0x150f22(this)[_0x4e6ea0(0x2d1)](_0x4e6ea0(0x255), 'absolute'), _0x150f22(this)[_0x4e6ea0(0x2d1)](_0x4e6ea0(0x137), '2'), _0x150f22(this)[_0x4e6ea0(0x87)]('data-controls', !![]), _0x150f22(this)[_0x4e6ea0(0x87)](_0x4e6ea0(0x23b), !![]));
            });
            var _0x5da770 = _0x2cb54e[_0x323428(0xc3)]('video\x20+\x20div\x20>\x20div')[_0x323428(0x210)]();
            _0x5da770[_0x323428(0x268)](_0x323428(0x2d4)), _0x5da770['find'](_0x323428(0x270))[_0x323428(0x268)](_0x323428(0x2a1) + _0x14072e + _0x323428(0x1d6)), _0x5da770[_0x323428(0xc3)](_0x323428(0x1ac))[_0x323428(0x87)](_0x323428(0x19a), _0x323428(0x1d4) + (_0x14072e * 0x64 + '%')), _0x5da770[_0x323428(0xc3)]('div.volume_slider\x20input')['on'](_0x323428(0x15f), function () {
                const _0x652262 = _0x323428;
                var _0x2666d4 = _0x150f22(this)[_0x652262(0x21d)]() * 0x64 + '%';
                _0x14072e = _0x150f22(this)[_0x652262(0x21d)](), GM_setValue(_0x652262(0xa1), _0x150f22(this)[_0x652262(0x21d)]()), _0x150f22(this)[_0x652262(0x87)]('style', _0x652262(0x1d4) + _0x2666d4), _0x2cb54e[_0x652262(0xc3)](_0x652262(0x124))[_0x652262(0xd6)](function () {
                    const _0x5df5cf = _0x652262;
                    _0x589ef6('(post)\x20video\x20volume\x20changed\x20#slider'), this[_0x5df5cf(0xef)] = _0x14072e;
                });
            }), _0x5da770[_0x323428(0xc3)](_0x323428(0x1ac))['on'](_0x323428(0x130), function () {
                const _0x282c79 = _0x323428;
                var _0x4a36e9 = _0x14072e * 0x64 + '%';
                _0x150f22(this)['attr']('style', _0x282c79(0x1d4) + _0x4a36e9), _0x150f22(this)[_0x282c79(0x21d)](_0x14072e), _0x2cb54e[_0x282c79(0xc3)](_0x282c79(0x124))['each'](function () {
                    const _0x942886 = _0x282c79;
                    _0x589ef6(_0x942886(0x102)), this[_0x942886(0xef)] = _0x14072e;
                });
            }), _0x5da770[_0x323428(0xc3)]('div.volume_slider')['on'](_0x323428(0x2c5), function (_0x35123d) {
                const _0x2e1368 = _0x323428;
                _0x35123d[_0x2e1368(0x225)](), _0x35123d[_0x2e1368(0x21f)]();
            });
        }
        ;
        function _0x2553aa() {
            const _0x23ecfb = _0x476d1a;
            _0x150f22('article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr')[_0x23ecfb(0x26f)](function (_0x2f29c6) {
                const _0x31c0e3 = _0x23ecfb;
                return _0x150f22(this)['is'](_0x31c0e3(0x22b)) ? _0x150f22(this)['parent']()[_0x31c0e3(0x25b)]()['parent']()['parent']()[0x0] : this;
            })[_0x23ecfb(0x2c1)](function () {
                const _0x444bb2 = _0x23ecfb;
                return _0x150f22(this)[_0x444bb2(0x16f)]() > 0x0 && _0x150f22(this)['width']() > 0x0;
            })[_0x23ecfb(0xd6)](function (_0x4f00f3) {
                const _0x2def69 = _0x23ecfb;
                if (!_0x150f22(this)['attr'](_0x2def69(0xaf)) && !_0x150f22(this)[_0x2def69(0x282)](_0x2def69(0xbd)) && !_0x150f22(this)[_0x2def69(0x1b1)](_0x2def69(0xf3))?.['hasClass'](_0x2def69(0xbd)) && _0x150f22(this)[_0x2def69(0x23a)]('div#scrollview')[_0x2def69(0x276)] === 0x0) {
                    _0x589ef6(_0x2def69(0x221), _0x150f22(this));
                    var _0x22a689 = 0xf, _0x3c633f = 0xf, _0x36c44d = _0x150f22(this), _0xaba362 = this[_0x2def69(0x271)];
                    if (_0xaba362 === _0x2def69(0x20d) && _0x4f00f3 != 0x0)
                        return;
                    const _0x50c4f3 = _0x36c44d[_0x2def69(0x1b1)](_0x2def69(0x98))[_0x2def69(0x1b1)](_0x2def69(0x98));
                    if (_0x50c4f3[_0x2def69(0x276)] === 0x0)
                        return;
                    _0x589ef6(_0x2def69(0x176), _0x50c4f3);
                    if (_0x36c44d['find']('._acay')[_0x2def69(0x276)] > 0x0) {
                        _0x36c44d[_0x2def69(0xc3)](_0x2def69(0xb3))[_0x2def69(0x276)] > 0x0 && _0x36c44d[_0x2def69(0xc3)](_0x2def69(0xb3))[_0x2def69(0x2d1)](_0x2def69(0x2aa), '37px');
                        const _0x39f159 = _0x36c44d[_0x2def69(0xc3)](_0x2def69(0x10c))['first']()['parent']()[0x0];
                        var _0x26b4b0 = new MutationObserver(function (_0x4021c6, _0x52b880) {
                            const _0x1c6dc6 = _0x2def69;
                            _0x36c44d[_0x1c6dc6(0xc3)](_0x1c6dc6(0xb3))[_0x1c6dc6(0x2d1)]('top', _0x1c6dc6(0x226));
                        });
                        _0x26b4b0['observe'](_0x39f159, { 'childList': !![] });
                    }
                    const _0x462f44 = _0x2def69(0x23c) + _0x5d66ee('DW') + _0x2def69(0x12e) + _0x22a689 + _0x2def69(0x1d7) + _0x3c633f + _0x2def69(0x2d8) + _0x4c71bb[_0x2def69(0x279)] + _0x2def69(0xca), _0x4391c3 = _0x2def69(0x24b) + _0x5d66ee(_0x2def69(0xf1)) + _0x2def69(0x128) + (_0x22a689 + 0x23) + _0x2def69(0x1d7) + _0x3c633f + _0x2def69(0x2d8) + _0x4c71bb[_0x2def69(0xf1)] + _0x2def69(0xca), _0x8229d2 = _0x2def69(0x1f1) + _0x5d66ee(_0x2def69(0x28a)) + _0x2def69(0xe7) + (_0x22a689 + 0x46) + _0x2def69(0x1d7) + _0x3c633f + 'px;\x22>' + _0x4c71bb[_0x2def69(0x164)] + _0x2def69(0xca);
                    _0x50c4f3['eq'](_0xaba362 === 'DIV' ? 0x0 : _0x50c4f3[_0x2def69(0x276)] - 0x2)[_0x2def69(0x268)](_0x462f44), _0x50c4f3['eq'](_0xaba362 === _0x2def69(0x20d) ? 0x0 : _0x50c4f3[_0x2def69(0x276)] - 0x2)[_0x2def69(0x268)](_0x4391c3), setTimeout(() => {
                        const _0x3bf380 = _0x2def69;
                        if (_0x50c4f3['eq'](_0xaba362 === _0x3bf380(0x20d) ? 0x0 : _0x50c4f3['length'] - 0x2)[_0x3bf380(0xc3)]('div\x20>\x20ul\x20li._acaz')[_0x3bf380(0x276)] === 0x0)
                            _0x50c4f3[_0x3bf380(0xc3)](_0x3bf380(0x124))['length'] > 0x0 && _0x50c4f3['eq'](_0xaba362 === _0x3bf380(0x20d) ? 0x0 : _0x50c4f3[_0x3bf380(0x276)] - 0x2)['append'](_0x8229d2);
                        else {
                            const _0x1e8c0e = (_0x27b44b, _0x4873cf) => {
                                    const _0x583d3d = _0x3bf380;
                                    _0x27b44b[_0x583d3d(0x2cd)](_0x56abd2 => {
                                        const _0x2aeda8 = _0x583d3d;
                                        if (_0x56abd2[_0x2aeda8(0x27d)]) {
                                            var _0x169597 = _0x150f22(_0x56abd2[_0x2aeda8(0x163)]);
                                            _0x169597[_0x2aeda8(0xc3)](_0x2aeda8(0x124))[_0x2aeda8(0x276)] > 0x0 ? (_0x50c4f3['eq'](_0xaba362 === _0x2aeda8(0x20d) ? 0x0 : _0x50c4f3[_0x2aeda8(0x276)] - 0x2)[_0x2aeda8(0x268)](_0x8229d2), _0x4e476f(_0x36c44d)) : _0x50c4f3[_0x2aeda8(0xc3)](_0x2aeda8(0x13b))?.[_0x2aeda8(0x29e)]();
                                        }
                                    });
                                }, _0x50201e = new IntersectionObserver(_0x1e8c0e, {
                                    'root': _0x36c44d[_0x3bf380(0xc3)](_0x3bf380(0x1ec))[_0x3bf380(0x210)]()[_0x3bf380(0x25b)]()[_0x3bf380(0x25b)]()['parent']()[0x0],
                                    'rootMargin': _0x3bf380(0x118),
                                    'threshold': 0.1
                                }), _0x282b66 = new MutationObserver(function (_0x288de7, _0x292f27) {
                                    const _0x218939 = _0x3bf380;
                                    var _0x28e76f = _0x288de7['at'](0x0)?.['target'];
                                    _0x150f22(_0x28e76f)[_0x218939(0xc3)]('li._acaz')[_0x218939(0xd6)](function () {
                                        _0x50201e['observe'](this);
                                    });
                                });
                            _0x36c44d[_0x3bf380(0xc3)](_0x3bf380(0x1e1))[_0x3bf380(0xd6)](function () {
                                _0x50201e['observe'](this);
                            });
                            const _0x25a005 = _0x50c4f3['eq'](_0xaba362 === _0x3bf380(0x20d) ? 0x0 : _0x50c4f3['length'] - 0x2)[_0x3bf380(0xc3)]('div\x20>\x20ul\x20li._acaz')?.[_0x3bf380(0x25b)]()[0x0], _0x21c91a = _0x50c4f3['eq'](_0xaba362 === 'DIV' ? 0x0 : _0x50c4f3[_0x3bf380(0x276)] - 0x2)[_0x3bf380(0xc3)](_0x3bf380(0x1e1))?.[_0x3bf380(0x25b)]()[_0x3bf380(0x25b)]()[0x0];
                            _0x25a005 && _0x282b66['observe'](_0x25a005, { 'childList': !![] }), _0x21c91a && _0x282b66[_0x3bf380(0x86)](_0x21c91a, { 'attributes': !![] });
                        }
                    }, 0x32), _0x50c4f3[_0x2def69(0x2d1)](_0x2def69(0x255), _0x2def69(0x28c)), _0x4e476f(_0x36c44d), _0x150f22(this)['on'](_0x2def69(0x2c5), _0x2def69(0x13b), function (_0x3d81c6) {
                        const _0x4e84ad = _0x2def69;
                        _0x3652e9(!![]), _0x303c88 = _0x150f22(this)[_0x4e84ad(0x25b)]()['parent']()[_0x4e84ad(0x25b)]()[_0x4e84ad(0x87)](_0x4e84ad(0x116)), _0x4bdb45 = location[_0x4e84ad(0x1dc)][_0x4e84ad(0x2cc)](/\/$/, '')[_0x4e84ad(0x89)]('/')['at'](-0x1) || _0x150f22(this)['parent']()[_0x4e84ad(0x25b)]()[_0x4e84ad(0x25b)]()[_0x4e84ad(0xc3)](_0x4e84ad(0x1de))['first']()[_0x4e84ad(0x87)](_0x4e84ad(0xb2))['split']('/')['at'](0x2) || _0x150f22(this)[_0x4e84ad(0x25b)]()['parent']()[_0x4e84ad(0x1b1)](_0x4e84ad(0x214))[_0x4e84ad(0x1b1)]('div')[_0x4e84ad(0x1b1)](_0x4e84ad(0x214))['find'](_0x4e84ad(0x1de))['last']()['attr'](_0x4e84ad(0xb2))[_0x4e84ad(0x89)]('/')['at'](0x2);
                        var _0x51e2b8 = _0x150f22(this)[_0x4e84ad(0x25b)]()[_0x4e84ad(0x25b)]()[_0x4e84ad(0x25b)](), _0x169977 = _0x3a5a50(_0x51e2b8);
                        _0x36fadf(!![], ![]), _0x562485(_0x4bdb45, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x4e84ad(0x2ca)](() => {
                            let _0x5c3c92 = setInterval(() => {
                                const _0x232179 = a0_0x27e8;
                                if (_0x150f22(_0x232179(0x13d))[_0x232179(0x276)] > 0x0) {
                                    clearInterval(_0x5c3c92);
                                    var _0x31c0a7 = _0x150f22(_0x232179(0x134) + (_0x169977 + 0x1) + '\x22]')?.[_0x232179(0x25b)]()[_0x232179(0xc3)]('.videoThumbnail')?.[_0x232179(0x210)]();
                                    _0x31c0a7 != null && _0x31c0a7['length'] > 0x0 ? _0x31c0a7[_0x232179(0x2c5)]() : alert(_0x232179(0xb5)), _0x3652e9(![]), _0x150f22(_0x232179(0x1bc))[_0x232179(0x29e)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x150f22(this)['on'](_0x2def69(0x2c5), _0x2def69(0x19c), function (_0x2528a3) {
                        const _0xf2581e = _0x2def69;
                        _0x3652e9(!![]), _0x303c88 = _0x150f22(this)[_0xf2581e(0x25b)]()[_0xf2581e(0x25b)]()['parent']()[_0xf2581e(0x87)]('data-username'), _0x4bdb45 = location[_0xf2581e(0x1dc)][_0xf2581e(0x2cc)](/\/$/, '')[_0xf2581e(0x89)]('/')['at'](-0x1) || _0x150f22(this)[_0xf2581e(0x25b)]()[_0xf2581e(0x25b)]()['parent']()[_0xf2581e(0xc3)]('a[href^=\x22/p/\x22]')[_0xf2581e(0x210)]()['attr'](_0xf2581e(0xb2))[_0xf2581e(0x89)]('/')['at'](0x2) || _0x150f22(this)[_0xf2581e(0x25b)]()['parent']()[_0xf2581e(0x1b1)](_0xf2581e(0x214))[_0xf2581e(0x1b1)](_0xf2581e(0x98))[_0xf2581e(0x1b1)]('div:last-child')[_0xf2581e(0xc3)](_0xf2581e(0x1de))['last']()[_0xf2581e(0x87)]('href')['split']('/')['at'](0x2);
                        var _0xdd0b22 = _0x150f22(this)['parent']()[_0xf2581e(0x25b)]()[_0xf2581e(0x25b)](), _0xb36f1 = _0x3a5a50(_0xdd0b22);
                        _0x36fadf(!![], ![]), _0x562485(_0x4bdb45, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')['then'](() => {
                            let _0x4fd0fc = setInterval(() => {
                                const _0x47aa01 = a0_0x27e8;
                                if (_0x150f22(_0x47aa01(0x13d))[_0x47aa01(0x276)] > 0x0) {
                                    clearInterval(_0x4fd0fc);
                                    var _0x2607e1 = _0x150f22(_0x47aa01(0x134) + (_0xb36f1 + 0x1) + '\x22]');
                                    if (_0x1f5f15[_0x47aa01(0x9c)] && _0x1f5f15[_0x47aa01(0x1e7)])
                                        _0xd760e7(_0x2607e1[_0x47aa01(0x210)]()[0x0], !![]);
                                    else {
                                        let _0x32d66e = _0x2607e1?.[_0x47aa01(0x87)]('data-href');
                                        if (_0x32d66e) {
                                            var _0x1f9ee9 = new URL(_0x32d66e);
                                            _0x1f9ee9[_0x47aa01(0x25d)] = _0x47aa01(0x264), _0x929b21(_0x1f9ee9[_0x47aa01(0xb2)]);
                                        } else
                                            alert(_0x47aa01(0x14c));
                                    }
                                    _0x3652e9(![]), _0x150f22(_0x47aa01(0x1bc))[_0x47aa01(0x29e)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x150f22(this)['on'](_0x2def69(0x2c5), '.SNKMS_IG_DW_MAIN', async function (_0xa62eba) {
                        const _0x43f4cf = _0x2def69;
                        _0x303c88 = _0x150f22(this)[_0x43f4cf(0x25b)]()['parent']()['parent']()[_0x43f4cf(0x87)](_0x43f4cf(0x116)), _0x4bdb45 = location['pathname'][_0x43f4cf(0x2cc)](/\/$/, '')['split']('/')['at'](-0x1) || _0x150f22(this)[_0x43f4cf(0x25b)]()[_0x43f4cf(0x25b)]()[_0x43f4cf(0x25b)]()['find'](_0x43f4cf(0x1de))[_0x43f4cf(0x210)]()[_0x43f4cf(0x87)]('href')[_0x43f4cf(0x89)]('/')['at'](0x2) || _0x150f22(this)[_0x43f4cf(0x25b)]()[_0x43f4cf(0x25b)]()[_0x43f4cf(0x1b1)](_0x43f4cf(0x214))[_0x43f4cf(0x1b1)](_0x43f4cf(0x98))['children'](_0x43f4cf(0x214))[_0x43f4cf(0xc3)]('a[href^=\x22/p/\x22]')[_0x43f4cf(0xcc)]()[_0x43f4cf(0x87)](_0x43f4cf(0xb2))['split']('/')['at'](0x2), _0x36fadf(_0x1f5f15[_0x43f4cf(0x148)], !![]), _0x150f22(_0x43f4cf(0x263))[_0x43f4cf(0xd9)](_0x43f4cf(0x2af) + _0x4bdb45 + '\x22>' + _0x4bdb45 + _0x43f4cf(0x213));
                        if (_0x1f5f15[_0x43f4cf(0x2be)]) {
                            _0x3652e9(!![]), _0x49f097(!![]);
                            var _0xaf0072 = _0x3a5a50(_0x150f22(this)[_0x43f4cf(0x25b)]()[_0x43f4cf(0x25b)]()['parent']());
                            _0x562485(_0x4bdb45, _0x43f4cf(0x13c), '')[_0x43f4cf(0x2ca)](() => {
                                let _0x2e9220 = setInterval(() => {
                                    const _0x3e0185 = a0_0x27e8;
                                    if (_0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x3e0185(0x276)] > 0x0) {
                                        clearInterval(_0x2e9220);
                                        var _0x4ead4d = _0x150f22(_0x3e0185(0x134) + (_0xaf0072 + 0x1) + '\x22]')?.['attr'](_0x3e0185(0x10d));
                                        _0x4ead4d ? (_0x3652e9(![]), _0x150f22(_0x3e0185(0x134) + (_0xaf0072 + 0x1) + '\x22]')?.[_0x3e0185(0x2c5)]()) : alert('Can\x20not\x20find\x20download\x20url.'), _0x150f22(_0x3e0185(0x1bc))[_0x3e0185(0x29e)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x1f5f15[_0x43f4cf(0x148)]) {
                            var _0x1a8451 = 0x0, _0x286b22 = _0x150f22(this)[_0x43f4cf(0x25b)]()[_0x43f4cf(0x25b)]()[_0x43f4cf(0xc3)]('._acay\x20._acaz')[_0x43f4cf(0x276)], _0x3ef8f6 = window['location'][_0x43f4cf(0x1dc)], _0x704582 = '/' + _0x3ef8f6[_0x43f4cf(0x89)]('/')[0x1] + '/' + _0x3ef8f6['split']('/')[0x2] + '/', _0x161b4e = _0x1f5f15[_0x43f4cf(0x1b0)], _0x22230e = new Date(_0x150f22(this)[_0x43f4cf(0x25b)]()['parent']()[_0x43f4cf(0xc3)](_0x43f4cf(0x20a))[_0x43f4cf(0x210)]()['attr'](_0x43f4cf(0x104)))[_0x43f4cf(0x2c4)]();
                            if (_0x286b22)
                                _0x150f22(this)[_0x43f4cf(0x25b)]()[_0x43f4cf(0xc3)](_0x43f4cf(0x2c3))[_0x43f4cf(0xd6)](function () {
                                    const _0x2ca505 = _0x43f4cf;
                                    let _0x32844a = _0x150f22(this)[_0x2ca505(0x25b)]()[_0x2ca505(0x25b)]()[_0x2ca505(0xc3)](_0x2ca505(0x124));
                                    _0x32844a && _0x32844a['attr'](_0x2ca505(0xac)) && (_0x161b4e = !![]);
                                }), _0x161b4e || _0x1f5f15[_0x43f4cf(0x9c)] ? _0x562485(_0x4bdb45, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x5d66ee('LOAD_BLOB_MULTIPLE')) : (_0x150f22(this)['parent']()[_0x43f4cf(0xc3)](_0x43f4cf(0x2c3))[_0x43f4cf(0xd6)](function () {
                                    const _0x186091 = _0x43f4cf;
                                    _0x1a8451++;
                                    let _0x8a65aa = _0x150f22(this)['find'](_0x186091(0x124)), _0x4ab534 = _0x150f22(this)[_0x186091(0xc3)](_0x186091(0x22d)), _0x2eac8c = _0x4ab534[_0x186091(0x87)](_0x186091(0x1f8)) ? _0x4ab534[_0x186091(0x87)](_0x186091(0x1f8))[_0x186091(0x89)]('\x20')[0x0] : _0x4ab534[_0x186091(0x87)](_0x186091(0xac));
                                    _0x8a65aa && _0x8a65aa[_0x186091(0x87)]('src') && (_0x161b4e = !![]), _0x4ab534 && _0x2eac8c && _0x150f22(_0x186091(0x13c))[_0x186091(0x268)](_0x186091(0x96) + _0x22230e + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x4bdb45 + _0x186091(0xf0) + _0x1a8451 + _0x186091(0x1c8) + _0x2eac8c + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2eac8c + _0x186091(0xee) + _0x5d66ee(_0x186091(0x277)) + '</span>\x20' + _0x1a8451 + _0x186091(0x269));
                                }), _0x161b4e && _0x562485(_0x4bdb45, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x5d66ee(_0x43f4cf(0x18a))));
                            else {
                                if (_0x1f5f15['FORCE_RESOURCE_VIA_MEDIA'])
                                    _0x562485(_0x4bdb45, _0x43f4cf(0x13c), _0x5d66ee(_0x43f4cf(0xf5)));
                                else {
                                    _0x1a8451++;
                                    let _0x33a677 = _0x150f22(this)['parent']()[_0x43f4cf(0x25b)]()[_0x43f4cf(0xc3)]('video'), _0x353288 = _0x150f22(this)['parent']()[_0x43f4cf(0x25b)]()[_0x43f4cf(0xc3)]('._aagv\x20img'), _0x5dbb83 = _0x353288[_0x43f4cf(0x87)](_0x43f4cf(0x1f8)) ? _0x353288['attr'](_0x43f4cf(0x1f8))[_0x43f4cf(0x89)]('\x20')[0x0] : _0x353288[_0x43f4cf(0x87)]('src');
                                    _0x33a677 && _0x33a677[_0x43f4cf(0x87)](_0x43f4cf(0xac)) && _0x562485(_0x4bdb45, _0x43f4cf(0x13c), _0x5d66ee(_0x43f4cf(0xb0))), _0x353288 && _0x5dbb83 && _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')[_0x43f4cf(0x268)]('<a\x20datetime=\x22' + _0x22230e + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x4bdb45 + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x1a8451 + _0x43f4cf(0x12a) + _0x5dbb83 + _0x43f4cf(0x216) + _0x5dbb83 + _0x43f4cf(0xee) + _0x5d66ee(_0x43f4cf(0x277)) + '</span>\x20' + _0x1a8451 + _0x43f4cf(0x269));
                                }
                            }
                        }
                        _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x43f4cf(0xd6)](function () {
                            const _0x4d28b4 = _0x43f4cf;
                            _0x150f22(this)[_0x4d28b4(0x22a)]('<div></div>'), _0x150f22(this)[_0x4d28b4(0x187)](_0x4d28b4(0x115)), _0x150f22(this)[_0x4d28b4(0x24c)](_0x4d28b4(0x24b) + _0x5d66ee(_0x4d28b4(0xf1)) + _0x4d28b4(0x215) + _0x4c71bb[_0x4d28b4(0xf1)] + '</div>'), _0x150f22(this)['attr'](_0x4d28b4(0x2ba)) == 'video' && _0x150f22(this)[_0x4d28b4(0x24c)](_0x4d28b4(0x1f1) + _0x5d66ee(_0x4d28b4(0x28a)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x4c71bb[_0x4d28b4(0x164)] + _0x4d28b4(0xca));
                        }), _0x1f5f15[_0x43f4cf(0x148)] && _0x562485(_0x4bdb45, _0x43f4cf(0x13c), _0x5d66ee(_0x43f4cf(0xf5)))[_0x43f4cf(0x2ca)](() => {
                            let _0x387c3e = setInterval(() => {
                                const _0x2bf1ed = a0_0x27e8;
                                _0x150f22(_0x2bf1ed(0x13d))['length'] > 0x0 && (clearInterval(_0x387c3e), _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x2bf1ed(0xd6)](function () {
                                    const _0x4a7030 = _0x2bf1ed;
                                    _0x150f22(this)[_0x4a7030(0x2c5)]();
                                }), _0x150f22(_0x2bf1ed(0x1bc))[_0x2bf1ed(0x29e)]());
                            }, 0xfa);
                        });
                    });
                    var _0x5d08fe = _0x150f22(this)[_0x2def69(0xc3)](_0x2def69(0x1f9))[_0x2def69(0x210)]()[_0x2def69(0x261)]();
                    _0x150f22(this)[_0x2def69(0x87)](_0x2def69(0xaf), _0x2def69(0x144)), _0x150f22(this)[_0x2def69(0x87)](_0x2def69(0x116), _0x5d08fe);
                }
            });
        }
        function _0x562485(_0x4ce4c0, _0x22e908, _0x14a2e4) {
            return new Promise(async _0xac04ea => {
                const _0x423e9e = a0_0x27e8;
                _0x150f22(_0x22e908 + '\x20a')['remove'](), _0x150f22(_0x22e908)['append'](_0x423e9e(0x27f) + _0x14a2e4 + _0x423e9e(0x167));
                let _0x4ac7ff = await _0xd408f0(_0x4ce4c0);
                if (_0x4ac7ff[_0x423e9e(0x16e)] === _0x423e9e(0x251)) {
                    let _0x6a7cf3 = 0x1, _0x2427c7 = _0x4ac7ff[_0x423e9e(0x179)], _0x382044 = _0x2427c7[_0x423e9e(0x161)];
                    _0x382044[_0x423e9e(0x1c1)] == _0x423e9e(0x2d5) && _0x382044[_0x423e9e(0x295)] && (_0x150f22(_0x22e908)[_0x423e9e(0x268)](_0x423e9e(0x1ef) + _0x382044['id'] + _0x423e9e(0x147) + _0x382044[_0x423e9e(0x21a)] + _0x423e9e(0x90) + _0x382044['shortcode'] + _0x423e9e(0x106) + _0x382044['owner'][_0x423e9e(0x190)] + _0x423e9e(0x175) + _0x6a7cf3 + _0x423e9e(0x1c8) + _0x382044[_0x423e9e(0x295)] + _0x423e9e(0x216) + _0x382044[_0x423e9e(0xfd)][0x1][_0x423e9e(0xac)] + _0x423e9e(0xad) + _0x5d66ee('VID') + _0x423e9e(0x12b) + _0x6a7cf3 + _0x423e9e(0x269)), _0x6a7cf3++);
                    _0x382044[_0x423e9e(0x1c1)] == _0x423e9e(0x1be) && (_0x150f22(_0x22e908)[_0x423e9e(0x268)](_0x423e9e(0x1ef) + _0x382044['id'] + _0x423e9e(0x147) + _0x382044[_0x423e9e(0x21a)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x382044[_0x423e9e(0x1ff)] + _0x423e9e(0x9a) + _0x382044[_0x423e9e(0xe6)][_0x423e9e(0x190)] + _0x423e9e(0x175) + _0x6a7cf3 + _0x423e9e(0x1c8) + _0x382044['display_resources'][_0x382044[_0x423e9e(0xfd)][_0x423e9e(0x276)] - 0x1][_0x423e9e(0xac)] + _0x423e9e(0x216) + _0x382044[_0x423e9e(0xfd)][0x1][_0x423e9e(0xac)] + _0x423e9e(0xee) + _0x5d66ee(_0x423e9e(0x277)) + _0x423e9e(0x12b) + _0x6a7cf3 + _0x423e9e(0x269)), _0x6a7cf3++);
                    if (_0x382044['__typename'] == _0x423e9e(0x10f) && _0x382044['edge_sidecar_to_children'])
                        for (let _0x2df45e of _0x382044[_0x423e9e(0x1f5)][_0x423e9e(0x136)]) {
                            _0x2df45e[_0x423e9e(0x2bf)][_0x423e9e(0x1c1)] == 'GraphVideo' && _0x150f22(_0x22e908)['append'](_0x423e9e(0x1ef) + _0x2df45e[_0x423e9e(0x2bf)]['id'] + '\x22\x20datetime=\x22' + _0x382044[_0x423e9e(0x21a)] + _0x423e9e(0x90) + _0x382044[_0x423e9e(0x1ff)] + _0x423e9e(0x106) + _0x382044['owner'][_0x423e9e(0x190)] + _0x423e9e(0x175) + _0x6a7cf3 + _0x423e9e(0x1c8) + _0x2df45e[_0x423e9e(0x2bf)][_0x423e9e(0x295)] + _0x423e9e(0x216) + _0x2df45e['node'][_0x423e9e(0xfd)][0x1]['src'] + _0x423e9e(0x1a8) + _0x5d66ee('VID') + _0x423e9e(0x12b) + _0x6a7cf3 + _0x423e9e(0x269)), _0x2df45e['node'][_0x423e9e(0x1c1)] == _0x423e9e(0x1be) && _0x150f22(_0x22e908)[_0x423e9e(0x268)]('<a\x20media-id=\x22' + _0x2df45e['node']['id'] + _0x423e9e(0x147) + _0x382044[_0x423e9e(0x21a)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x382044[_0x423e9e(0x1ff)] + _0x423e9e(0x9a) + _0x382044['owner'][_0x423e9e(0x190)] + _0x423e9e(0x175) + _0x6a7cf3 + _0x423e9e(0x1c8) + _0x2df45e['node'][_0x423e9e(0xfd)][_0x2df45e[_0x423e9e(0x2bf)][_0x423e9e(0xfd)][_0x423e9e(0x276)] - 0x1][_0x423e9e(0xac)] + _0x423e9e(0x216) + _0x2df45e[_0x423e9e(0x2bf)][_0x423e9e(0xfd)][0x1][_0x423e9e(0xac)] + _0x423e9e(0xee) + _0x5d66ee(_0x423e9e(0x277)) + _0x423e9e(0x12b) + _0x6a7cf3 + _0x423e9e(0x269)), _0x6a7cf3++;
                        }
                } else {
                    let _0x1beaef = _0x4ac7ff['data'];
                    if (_0x1beaef[_0x423e9e(0xbf)])
                        _0x589ef6(_0x423e9e(0xbf)), _0x1beaef['carousel_media'][_0x423e9e(0x2cd)]((_0x4aea5b, _0x659f9d) => {
                            const _0x134225 = _0x423e9e;
                            let _0x3e0d43 = _0x659f9d + 0x1;
                            _0x4aea5b[_0x134225(0x11c)] == null ? _0x150f22(_0x22e908)[_0x134225(0x268)]('<a\x20media-id=\x22' + _0x4aea5b['pk'] + _0x134225(0x147) + _0x4aea5b['taken_at'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x1beaef[_0x134225(0x2a5)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x1beaef[_0x134225(0xe6)][_0x134225(0x190)] + _0x134225(0x175) + _0x3e0d43 + _0x134225(0x1c8) + _0x4aea5b['image_versions2'][_0x134225(0xa6)][0x0][_0x134225(0xd1)] + _0x134225(0x216) + _0x4aea5b[_0x134225(0xbe)][_0x134225(0xa6)][0x0][_0x134225(0xd1)] + _0x134225(0xee) + _0x5d66ee('IMG') + '</span>\x20' + _0x3e0d43 + _0x134225(0x269)) : _0x150f22(_0x22e908)[_0x134225(0x268)](_0x134225(0x1ef) + _0x4aea5b['pk'] + _0x134225(0x147) + _0x4aea5b[_0x134225(0x1ae)] + _0x134225(0x90) + _0x1beaef['code'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x1beaef[_0x134225(0xe6)][_0x134225(0x190)] + _0x134225(0x175) + _0x3e0d43 + _0x134225(0x1c8) + _0x4aea5b[_0x134225(0x11c)][0x0][_0x134225(0xd1)] + _0x134225(0x216) + _0x4aea5b[_0x134225(0xbe)][_0x134225(0xa6)][0x0][_0x134225(0xd1)] + _0x134225(0xad) + _0x5d66ee(_0x134225(0xba)) + _0x134225(0x12b) + _0x3e0d43 + '\x20-</a>');
                        });
                    else {
                        let _0x5dafc8 = 0x1;
                        _0x1beaef[_0x423e9e(0x11c)] == null ? _0x150f22(_0x22e908)[_0x423e9e(0x268)](_0x423e9e(0x1ef) + _0x1beaef['pk'] + '\x22\x20datetime=\x22' + _0x1beaef[_0x423e9e(0x1ae)] + _0x423e9e(0x90) + _0x1beaef[_0x423e9e(0x2a5)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x1beaef[_0x423e9e(0xe6)]['username'] + _0x423e9e(0x175) + _0x5dafc8 + _0x423e9e(0x1c8) + _0x1beaef[_0x423e9e(0xbe)]['candidates'][0x0][_0x423e9e(0xd1)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x1beaef[_0x423e9e(0xbe)]['candidates'][0x0][_0x423e9e(0xd1)] + _0x423e9e(0xee) + _0x5d66ee(_0x423e9e(0x277)) + _0x423e9e(0x12b) + _0x5dafc8 + '\x20-</a>') : _0x150f22(_0x22e908)[_0x423e9e(0x268)](_0x423e9e(0x1ef) + _0x1beaef['pk'] + _0x423e9e(0x147) + _0x1beaef[_0x423e9e(0x1ae)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x1beaef[_0x423e9e(0x2a5)] + _0x423e9e(0x106) + _0x1beaef[_0x423e9e(0xe6)][_0x423e9e(0x190)] + '\x22\x20data-globalIndex=\x22' + _0x5dafc8 + _0x423e9e(0x1c8) + _0x1beaef['video_versions'][0x0]['url'] + _0x423e9e(0x216) + _0x1beaef[_0x423e9e(0xbe)]['candidates'][0x0]['url'] + _0x423e9e(0xad) + _0x5d66ee(_0x423e9e(0xba)) + _0x423e9e(0x12b) + _0x5dafc8 + _0x423e9e(0x269));
                    }
                }
                _0x150f22('#_SNLOAD')['remove'](), _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a')[_0x423e9e(0xd6)](function () {
                    const _0x181ff4 = _0x423e9e;
                    _0x150f22(this)[_0x181ff4(0x22a)](_0x181ff4(0x29d)), _0x150f22(this)[_0x181ff4(0x187)](_0x181ff4(0x115)), _0x150f22(this)[_0x181ff4(0x24c)](_0x181ff4(0x24b) + _0x5d66ee('NEW_TAB') + _0x181ff4(0x215) + _0x4c71bb[_0x181ff4(0xf1)] + _0x181ff4(0xca)), _0x150f22(this)[_0x181ff4(0x87)]('data-name') == _0x181ff4(0x124) && _0x150f22(this)['after'](_0x181ff4(0x1f1) + _0x5d66ee(_0x181ff4(0x28a)) + _0x181ff4(0x1d0) + _0x4c71bb[_0x181ff4(0x164)] + _0x181ff4(0xca));
                }), _0xac04ea(!![]);
            });
        }
        function _0x36fadf(_0x444f8d, _0x9078bb) {
            const _0x1764e1 = _0x476d1a;
            let _0x13c66e = _0x444f8d ? _0x1764e1(0x135) : '';
            _0x150f22(_0x1764e1(0x1fc))[_0x1764e1(0x268)]('<div\x20class=\x22IG_SN_DIG\x20' + _0x13c66e + _0x1764e1(0x20b)), _0x150f22(_0x1764e1(0x1dd))[_0x1764e1(0x268)](_0x1764e1(0x12f) + _0x5d66ee(_0x1764e1(0x2b9)) + _0x1764e1(0x165) + _0x4c71bb['CLOSE'] + _0x1764e1(0x1cd)), _0x9078bb && (_0x150f22(_0x1764e1(0x1dd))[_0x1764e1(0x268)]('<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>'), _0x150f22(_0x1764e1(0x177))[_0x1764e1(0x268)](_0x1764e1(0x21c) + _0x5d66ee(_0x1764e1(0x146)) + _0x1764e1(0x133)), _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group')['append'](_0x1764e1(0x1e6) + _0x5d66ee(_0x1764e1(0x202)) + '</button>'), _0x150f22(_0x1764e1(0x1dd))[_0x1764e1(0x268)](_0x1764e1(0x1c6) + _0x5d66ee(_0x1764e1(0xed)) + '</span></label>'));
        }
        function _0x49f097(_0x5a01d7) {
            const _0x42c26f = _0x476d1a;
            _0x150f22(_0x42c26f(0x1bc))[_0x42c26f(0x276)] && (_0x5a01d7 ? _0x150f22(_0x42c26f(0x1bc))['addClass'](_0x42c26f(0x135)) : _0x150f22('.IG_SN_DIG')[_0x42c26f(0x14d)]('hidden'));
        }
        function _0x510ee4(_0x55d820, _0x4f20ef, _0x23b42, _0x44b7cd, _0x3d56c2, _0x27d70f) {
            setTimeout(() => {
                _0x3652e9(!![]), fetch(_0x55d820)['then'](_0x4b420a => {
                    const _0x4f71b6 = a0_0x27e8;
                    return _0x4b420a[_0x4f71b6(0x1af)]()[_0x4f71b6(0x2ca)](_0x24014e => {
                        _0x3652e9(![]), _0x14af1e(_0x55d820, _0x24014e, _0x4f20ef, _0x23b42, _0x44b7cd, _0x3d56c2, _0x27d70f);
                    });
                });
            }, 0x32);
        }
        function _0x14af1e(_0x37fb05, _0x40363f, _0x4b61b5, _0x1a940b, _0x2276c0, _0xc8edac, _0xf6c5f7) {
            const _0x176970 = _0x476d1a;
            _0x2276c0 = parseInt(_0x2276c0[_0x176970(0x14e)]()[_0x176970(0x16b)](0xd, '0'));
            _0x1f5f15[_0x176970(0x109)] && (_0x2276c0 = parseInt(_0x2276c0['toString']()[_0x176970(0x16b)](0xd, '0')));
            const _0x34aafa = new Date(_0x2276c0), _0x40fead = document[_0x176970(0xdc)]('a'), _0x34c2a9 = new URL(_0x37fb05)[_0x176970(0x1dc)][_0x176970(0x89)]('/')['at'](-0x1)[_0x176970(0x89)]('.')[_0x176970(0x2c7)](0x0, -0x1)[_0x176970(0xcd)]('.'), _0x254edf = _0x34aafa['getFullYear']()[_0x176970(0x14e)](), _0xbfcb6b = (_0x34aafa[_0x176970(0x2b7)]() + 0x1)['toString']()[_0x176970(0x193)](0x2, '0'), _0x24cfd6 = _0x34aafa[_0x176970(0x1b9)]()[_0x176970(0x14e)]()['padStart'](0x2, '0'), _0x410f25 = _0x34aafa['getHours']()['toString']()['padStart'](0x2, '0'), _0x26a832 = _0x34aafa[_0x176970(0x15a)]()[_0x176970(0x14e)]()[_0x176970(0x193)](0x2, '0'), _0x2fcd59 = _0x34aafa[_0x176970(0x2d6)]()[_0x176970(0x14e)]()[_0x176970(0x193)](0x2, '0');
            var _0x259362 = _0x36ecb8['toUpperCase'](), _0x4f1b83 = {
                    '%USERNAME%': _0x4b61b5,
                    '%SOURCE_TYPE%': _0x1a940b,
                    '%SHORTCODE%': _0xf6c5f7 ? _0xf6c5f7 : '',
                    '%YEAR%': _0x254edf,
                    '%2-YEAR%': _0x254edf[_0x176970(0x18e)](-0x2),
                    '%MONTH%': _0xbfcb6b,
                    '%DAY%': _0x24cfd6,
                    '%HOUR%': _0x410f25,
                    '%MINUTE%': _0x26a832,
                    '%SECOND%': _0x2fcd59,
                    '%ORIGINAL_NAME%': _0x34c2a9,
                    '%ORIGINAL_NAME_FIRST%': _0x34c2a9['split']('_')['at'](0x0)
                };
            _0x259362 = _0x259362[_0x176970(0x2cc)](/%[\w\-]+%/g, function (_0x4a8f55) {
                return _0x4f1b83[_0x4a8f55] || _0x4a8f55;
            });
            const _0x49b0e0 = _0x4b61b5 + '_' + _0x34c2a9 + '.' + _0xc8edac;
            _0x40fead[_0x176970(0xb2)] = URL[_0x176970(0x28f)](_0x40363f), _0x40fead[_0x176970(0x173)](_0x176970(0x152), _0x1f5f15['AUTO_RENAME'] ? _0x259362 + '.' + _0xc8edac : _0x49b0e0), _0x40fead[_0x176970(0x2c5)](), _0x40fead['remove']();
        }
        async function _0xd760e7(_0x1cd3b2, _0x3e3d8b) {
            const _0x3e6867 = _0x476d1a;
            let _0x4cfceb = new Date()[_0x3e6867(0x2c4)](), _0xa6abc0 = Math[_0x3e6867(0x203)](_0x4cfceb / 0x3e8), _0x1a20ef = _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)]('data-username') ? _0x150f22(_0x1cd3b2)['attr'](_0x3e6867(0x116)) : _0x303c88;
            !_0x1a20ef && _0x150f22(_0x1cd3b2)['attr']('data-path') && (_0x589ef6(_0x3e6867(0x287), _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x10d))), _0x1a20ef = await _0xeea682(_0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x2b2))));
            _0x1f5f15['RENAME_PUBLISH_DATE'] && _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x104)) && (_0xa6abc0 = parseInt(_0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x104))));
            if (_0x1f5f15[_0x3e6867(0x9c)]) {
                _0x3652e9(!![]);
                let _0x403730 = await _0x22d847(_0x150f22(_0x1cd3b2)[_0x3e6867(0x87)]('media-id'));
                _0x3652e9(![]);
                if (_0x403730[_0x3e6867(0x145)] === 'ok') {
                    var _0x21a153 = null;
                    _0x403730['items'][0x0][_0x3e6867(0x11c)] ? _0x21a153 = _0x403730[_0x3e6867(0xc8)][0x0][_0x3e6867(0x11c)][0x0][_0x3e6867(0xd1)] : _0x21a153 = _0x403730[_0x3e6867(0xc8)][0x0]['image_versions2'][_0x3e6867(0xa6)][0x0][_0x3e6867(0xd1)];
                    if (_0x3e3d8b) {
                        let _0x4a4646 = new URL(_0x21a153);
                        _0x4a4646[_0x3e6867(0x25d)] = _0x3e6867(0x264), _0x929b21(_0x4a4646[_0x3e6867(0xb2)]);
                    } else
                        _0x510ee4(_0x21a153, _0x1a20ef, _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x2ba)), _0xa6abc0, _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x139)), _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x2b2)));
                } else {
                    if (_0x1f5f15[_0x3e6867(0xf2)]) {
                        if (_0x3e3d8b) {
                            let _0x5ae610 = new URL(_0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x10d)));
                            _0x5ae610['host'] = _0x3e6867(0x264), _0x929b21(_0x5ae610[_0x3e6867(0xb2)]);
                        } else
                            _0x510ee4(_0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x10d)), _0x1a20ef, _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)]('data-name'), _0xa6abc0, _0x150f22(_0x1cd3b2)['attr'](_0x3e6867(0x139)), _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x2b2)));
                    } else
                        alert(_0x3e6867(0xeb) + _0x403730[_0x3e6867(0x151)]);
                    _0x589ef6(_0x403730);
                }
            } else
                _0x510ee4(_0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x10d)), _0x1a20ef, _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)]('data-name'), _0xa6abc0, _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)](_0x3e6867(0x139)), _0x150f22(_0x1cd3b2)[_0x3e6867(0x87)]('data-path'));
        }
        function _0x8f45fe(_0x16b7d8) {
            const _0x4a75f1 = _0x476d1a;
            var _0xcb2005 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x4a75f1(0x244),
                        'NOTICE_UPDATE_CONTENT': 'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
                        'CHECK_UPDATE': 'Checking\x20for\x20Script\x20Updates',
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': _0x4a75f1(0x84),
                        'RELOAD_SCRIPT': 'Reload\x20Script',
                        'DONATE': _0x4a75f1(0x220),
                        'FEEDBACK': _0x4a75f1(0x21e),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x4a75f1(0xcf),
                        'SELECT_AND_COPY': _0x4a75f1(0x28d),
                        'DOWNLOAD_DOM_TREE': _0x4a75f1(0x9b),
                        'REPORT_GITHUB': _0x4a75f1(0x1d2),
                        'REPORT_DISCORD': _0x4a75f1(0xcb),
                        'REPORT_FORK': _0x4a75f1(0x18c),
                        'DEBUG': 'Debug\x20Window',
                        'CLOSE': _0x4a75f1(0x28b),
                        'ALL_CHECK': _0x4a75f1(0x127),
                        'BATCH_DOWNLOAD_SELECTED': 'Download\x20Selected\x20Resources',
                        'BATCH_DOWNLOAD_DIRECT': _0x4a75f1(0x224),
                        'IMG': _0x4a75f1(0x230),
                        'VID': _0x4a75f1(0x122),
                        'DW': _0x4a75f1(0x159),
                        'THUMBNAIL_INTRO': _0x4a75f1(0xe5),
                        'LOAD_BLOB_ONE': 'Loading\x20Blob\x20Media...',
                        'LOAD_BLOB_MULTIPLE': 'Loading\x20Blob\x20Media\x20and\x20Others...',
                        'LOAD_BLOB_RELOAD': 'Detecting\x20Blob\x20Media,\x20reloading...',
                        'NO_CHECK_RESOURCE': _0x4a75f1(0x88),
                        'NO_VID_URL': 'Cannot\x20find\x20video\x20URL.',
                        'SETTING': _0x4a75f1(0x94),
                        'AUTO_RENAME': 'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
                        'RENAME_SHORTCODE': _0x4a75f1(0x1a2),
                        'RENAME_PUBLISH_DATE': _0x4a75f1(0x245),
                        'RENAME_LOCATE_DATE': _0x4a75f1(0x234),
                        'DISABLE_VIDEO_LOOPING': _0x4a75f1(0x2b5),
                        'HTML5_VIDEO_CONTROL': _0x4a75f1(0x2ac),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x4a75f1(0x247),
                        'FORCE_FETCH_ALL_RESOURCES': _0x4a75f1(0xa0),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': _0x4a75f1(0xf7),
                        'SCROLL_BUTTON': _0x4a75f1(0xec),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x4a75f1(0x237),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': _0x4a75f1(0x189),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x4a75f1(0xb4),
                        'AUTO_RENAME_INTRO': _0x4a75f1(0x278),
                        'RENAME_SHORTCODE_INTRO': _0x4a75f1(0x92),
                        'RENAME_PUBLISH_DATE_INTRO': _0x4a75f1(0x1b3),
                        'RENAME_LOCATE_DATE_INTRO': 'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'DISABLE_VIDEO_LOOPING_INTRO': 'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
                        'HTML5_VIDEO_CONTROL_INTRO': _0x4a75f1(0x19e),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x4a75f1(0x1f3),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x4a75f1(0xe2),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x4a75f1(0x132),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x4a75f1(0x1fd),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x4a75f1(0x1d9),
                        'SCROLL_BUTTON_INTRO': _0x4a75f1(0x112),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x4a75f1(0x2ab),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x4a75f1(0xfc),
                        'SKIP_VIEW_STORY_CONFIRM': _0x4a75f1(0x1c0),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x4a75f1(0x85)
                    }
                }, _0x1a9704 = Object[_0x4a75f1(0x1f6)]({}, _0xcb2005, _0x557d0f), _0x5ec77a = Object[_0x4a75f1(0x18b)](_0x1a9704)[_0x4a75f1(0x20e)]()['reduce']((_0x1f0321, _0x2ba2ad) => {
                    return _0x1f0321[_0x2ba2ad] = _0x1a9704[_0x2ba2ad], _0x1f0321;
                }, {});
            return _0x5ec77a;
        }
        async function _0xaa1c11(_0x213741) {
            return new Promise((_0x438ed7, _0x4af748) => {
                const _0x9c7d17 = a0_0x27e8;
                GM_xmlhttpRequest({
                    'method': _0x9c7d17(0x2ae),
                    'url': 'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/' + _0x213741 + _0x9c7d17(0xda),
                    'onload': function (_0x1c5158) {
                        const _0x3dc368 = _0x9c7d17;
                        try {
                            let _0x379e41 = JSON[_0x3dc368(0xa3)](_0x1c5158[_0x3dc368(0x10a)]);
                            _0x438ed7(_0x379e41);
                        } catch (_0x462f0d) {
                            _0x4af748(_0x462f0d);
                        }
                    },
                    'onerror': function (_0x44a7e8) {
                        const _0xa6d298 = _0x9c7d17;
                        _0x589ef6(_0xa6d298(0x1c2), 'reject', _0x44a7e8), _0x4af748(_0x44a7e8);
                    }
                });
            });
        }
        function _0x5d66ee(_0x4cb47f) {
            const _0x354c8e = _0x476d1a, _0x2be725 = _0x8f45fe();
            return _0x2be725[_0x4cbe0c] != undefined && _0x2be725[_0x4cbe0c][_0x4cb47f] != undefined ? _0x2be725[_0x4cbe0c][_0x4cb47f] : _0x2be725[_0x354c8e(0x171)][_0x4cb47f];
        }
        function _0x17fd2e() {
            const _0x296a5e = _0x476d1a;
            _0x150f22(_0x296a5e(0x158))['each'](function () {
                const _0xa7866c = _0x296a5e;
                _0x150f22(this)[_0xa7866c(0x261)](_0x5d66ee(_0x150f22(this)[_0xa7866c(0x87)]('data-ih-locale')));
            }), _0x150f22(_0x296a5e(0xb6))[_0x296a5e(0xd6)](function () {
                const _0x5c2f42 = _0x296a5e;
                _0x150f22(this)['attr'](_0x5c2f42(0xd5), _0x5d66ee(_0x150f22(this)['attr'](_0x5c2f42(0x1fa))));
            });
        }
        function _0x5a1b41() {
            const _0x29115e = _0x476d1a;
            for (let _0x4ec31a of _0x1739e8) {
                _0x589ef6(_0x29115e(0x267), _0x4ec31a), GM_unregisterMenuCommand(_0x4ec31a);
            }
            _0x1739e8[_0x29115e(0x17e)](GM_registerMenuCommand(_0x5d66ee(_0x29115e(0xc0)), () => {
                _0x2e4f99();
            }, { 'accessKey': 'w' })), _0x1739e8['push'](GM_registerMenuCommand(_0x5d66ee(_0x29115e(0x93)), () => {
                const _0x52a176 = _0x29115e;
                GM_openInTab(_0x52a176(0x28e), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x1739e8[_0x29115e(0x17e)](GM_registerMenuCommand(_0x5d66ee('DEBUG'), () => {
                _0x55d514();
            }, { 'accessKey': 'z' })), _0x1739e8['push'](GM_registerMenuCommand(_0x5d66ee(_0x29115e(0x29a)), () => {
                _0x36bee2();
            }, { 'accessKey': 'f' })), _0x1739e8[_0x29115e(0x17e)](GM_registerMenuCommand(_0x5d66ee(_0x29115e(0x1a3)), () => {
                _0x433f92();
            }, { 'accessKey': 'c' })), _0x1739e8['push'](GM_registerMenuCommand(_0x5d66ee(_0x29115e(0x153)), () => {
                _0x4dffd8();
            }, { 'accessKey': 'r' }));
        }
        function _0x50b5e2(_0x1e23ac) {
            const _0x1458ee = _0x476d1a;
            if (!_0x1f5f15[_0x1458ee(0x25a)])
                return;
            const _0x555589 = GM_getValue('G_CHECK_TIMESTAMP') ?? new Date()[_0x1458ee(0x2c4)](), _0x4d3060 = new Date()[_0x1458ee(0x2c4)]();
            _0x4d3060 > parseInt(_0x555589) + _0x1e23ac * 0x3e8 && (GM_setValue(_0x1458ee(0x14f), new Date()[_0x1458ee(0x2c4)]()), _0x433f92());
        }
        function _0x433f92() {
            const _0xde6af1 = _0x476d1a, _0x37e9a4 = GM_info[_0xde6af1(0x27e)][_0xde6af1(0x126)], _0x3f53b9 = _0xde6af1(0x25e);
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x3f53b9,
                'onload': function (_0x2ca7bf) {
                    const _0x595152 = _0xde6af1, _0x1a3823 = _0x2ca7bf[_0x595152(0x108)], _0x58d2cd = _0x1a3823[_0x595152(0x288)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x58d2cd && _0x58d2cd[0x1]) {
                        const _0x414ba0 = _0x58d2cd[0x1];
                        _0x589ef6(_0x595152(0xfe), _0x37e9a4, '|', _0x595152(0x1ad), _0x414ba0), _0x414ba0 !== _0x37e9a4 && typeof this[_0x595152(0x154)] === _0x595152(0x2ce) ? (this[_0x595152(0x154)] = null, GM_notification({
                            'text': _0x5d66ee(_0x595152(0xc1)),
                            'title': _0x5d66ee('NOTICE_UPDATE_TITLE'),
                            'tag': 'ig_helper_notice',
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x595152(0x280),
                            'onclick': _0x318e64 => {
                                const _0x55b544 = _0x595152;
                                _0x318e64?.['preventDefault']();
                                var _0xb7c9c0 = GM_openInTab(GM_info[_0x55b544(0x27e)]['downloadURL']);
                                setTimeout(() => {
                                    _0xb7c9c0['close']();
                                }, 0xfa);
                            }
                        })) : _0x589ef6(_0x595152(0x2a4));
                    } else
                        console['error'](_0x595152(0xe4));
                }
            });
        }
        function _0x2e4f99() {
            const _0x435b12 = _0x476d1a;
            _0x150f22(_0x435b12(0x1bc))['remove'](), _0x36fadf(), _0x150f22(_0x435b12(0xe9))[_0x435b12(0x261)]('Preference\x20Settings'), _0x150f22(_0x435b12(0x107))['append'](_0x435b12(0x157));
            for (let _0x1d48d2 in _0x53dfe3) {
                _0x150f22(_0x435b12(0x2a2))['append'](_0x435b12(0xde) + _0x1d48d2 + '\x22\x20' + (_0x4cbe0c == _0x1d48d2 ? _0x435b12(0x2d7) : '') + '>' + _0x53dfe3[_0x1d48d2] + _0x435b12(0x140));
            }
            for (let _0x2f874a in _0x1f5f15) {
                _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x435b12(0x268)](_0x435b12(0x82) + (_0x35cd64[_0x435b12(0x100)](_0x2f874a) ? '\x20child' : '') + _0x435b12(0x13e) + _0x5d66ee(_0x2f874a + _0x435b12(0x273)) + _0x435b12(0x198) + (_0x2f874a + _0x435b12(0x273)) + _0x435b12(0x22f) + _0x2f874a + '\x22>' + _0x5d66ee(_0x2f874a) + _0x435b12(0x293) + _0x2f874a + _0x435b12(0x26c) + (_0x1f5f15[_0x2f874a] === !![] ? _0x435b12(0x138) : '') + _0x435b12(0x207)), _0x2f874a === 'MODIFY_VIDEO_VOLUME' && _0x150f22(_0x435b12(0x24d) + _0x2f874a + '\x22]')[_0x435b12(0x25b)](_0x435b12(0x101))['on']('contextmenu', function (_0x27672c) {
                    const _0x33cb8a = _0x435b12;
                    _0x27672c[_0x33cb8a(0x21f)](), _0x150f22(this)[_0x33cb8a(0xc3)](_0x33cb8a(0x91))[_0x33cb8a(0x276)] === 0x0 && (_0x150f22(this)[_0x33cb8a(0x268)]('<div\x20id=\x22tempWrapper\x22></div>'), _0x150f22(this)['children']('#tempWrapper')['append'](_0x33cb8a(0x2a0) + _0x14072e + _0x33cb8a(0x23f)), _0x150f22(this)[_0x33cb8a(0x1b1)](_0x33cb8a(0x91))[_0x33cb8a(0x268)](_0x33cb8a(0x2a0) + _0x14072e + _0x33cb8a(0xbc)), _0x150f22(this)[_0x33cb8a(0x1b1)]('#tempWrapper')['append'](_0x33cb8a(0x1fe) + _0x4c71bb[_0x33cb8a(0x2b9)] + _0x33cb8a(0xca)));
                }), _0x2f874a === _0x435b12(0x22e) && _0x150f22(_0x435b12(0x24d) + _0x2f874a + '\x22]')[_0x435b12(0x25b)](_0x435b12(0x101))['on']('contextmenu', function (_0x28f655) {
                    const _0x579fae = _0x435b12;
                    _0x28f655['preventDefault'](), _0x150f22(this)[_0x579fae(0xc3)](_0x579fae(0x91))['length'] === 0x0 && (_0x150f22(this)[_0x579fae(0x268)]('<div\x20id=\x22tempWrapper\x22></div>'), _0x150f22(this)[_0x579fae(0x1b1)](_0x579fae(0x91))[_0x579fae(0x268)](_0x579fae(0x238) + _0x36ecb8 + '\x22\x20/>'), _0x150f22(this)['children'](_0x579fae(0x91))[_0x579fae(0x268)](_0x579fae(0x1fe) + _0x4c71bb[_0x579fae(0x2b9)] + _0x579fae(0xca)));
                });
            }
        }
        function _0x55d514() {
            const _0x45c045 = _0x476d1a;
            _0x150f22(_0x45c045(0x1bc))[_0x45c045(0x29e)](), _0x36fadf(), _0x150f22(_0x45c045(0xe9))['text'](_0x45c045(0x1f2)), _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_BODY')['append'](_0x45c045(0x260)), _0x150f22(_0x45c045(0x1ba))[_0x45c045(0x268)](_0x45c045(0x17d)), _0x150f22(_0x45c045(0x200))[_0x45c045(0x268)](_0x45c045(0x1a0) + _0x5d66ee(_0x45c045(0x211)) + _0x45c045(0x1cc)), _0x150f22(_0x45c045(0x200))[_0x45c045(0x268)](_0x45c045(0x119) + _0x5d66ee(_0x45c045(0x223)) + '</a></button>'), _0x150f22(_0x45c045(0x200))[_0x45c045(0x268)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>' + _0x5d66ee(_0x45c045(0xdb)) + _0x45c045(0x95)), _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append'](_0x45c045(0x13a) + _0x5d66ee(_0x45c045(0x281)) + _0x45c045(0x1cc)), _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x45c045(0x268)](_0x45c045(0x192) + _0x5d66ee(_0x45c045(0x117)) + _0x45c045(0x1cc));
        }
        function _0x36bee2() {
            const _0x4ac555 = _0x476d1a;
            _0x150f22(_0x4ac555(0x1bc))[_0x4ac555(0x29e)](), _0x36fadf(), _0x150f22('.IG_SN_DIG\x20#post_info')['text'](_0x4ac555(0xb8)), _0x150f22('.IG_SN_DIG\x20.IG_SN_DIG_BODY')['append'](_0x4ac555(0x17d)), _0x150f22(_0x4ac555(0x200))[_0x4ac555(0x268)](_0x4ac555(0x241) + _0x5d66ee('REPORT_FORK') + _0x4ac555(0x1cc)), _0x150f22(_0x4ac555(0x200))[_0x4ac555(0x268)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x5d66ee(_0x4ac555(0x281)) + _0x4ac555(0x1cc)), _0x150f22(_0x4ac555(0x200))[_0x4ac555(0x268)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x5d66ee(_0x4ac555(0x117)) + '</a></button>');
        }
        function _0x929b21(_0x2b00df) {
            const _0x5686e8 = _0x476d1a;
            var _0x40b923 = document[_0x5686e8(0xdc)]('a');
            _0x40b923[_0x5686e8(0xb2)] = _0x2b00df, _0x40b923[_0x5686e8(0x163)] = _0x5686e8(0x2b0), document[_0x5686e8(0x1fc)][_0x5686e8(0x141)](_0x40b923), _0x40b923[_0x5686e8(0x2c5)](), _0x40b923['remove']();
        }
        function _0x4dffd8() {
            const _0x5d1d29 = _0x476d1a;
            clearInterval(_0x421695), _0x150f22('.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN')[_0x5d1d29(0x29e)](), _0x150f22(_0x5d1d29(0x1c5))[_0x5d1d29(0x29e)](), _0x150f22(_0x5d1d29(0xc5))[_0x5d1d29(0x120)]('data-snig'), _0x5eaa2f = ![], _0x43797c = ![], _0x28a907 = location[_0x5d1d29(0xb2)], _0x452d54[_0x5d1d29(0x15c)](), _0x589ef6(_0x5d1d29(0x23e));
        }
        function _0x589ef6(..._0x3dcd74) {
            const _0x5dc27f = _0x476d1a;
            var _0x4e62c3 = new Date();
            _0xa8ede[_0x5dc27f(0x17e)]({
                'time': _0x4e62c3['getTime'](),
                'content': [..._0x3dcd74]
            }), _0xa8ede[_0x5dc27f(0x276)] > 0x3e8 && (_0xa8ede = [
                {
                    'time': _0x4e62c3[_0x5dc27f(0x2c4)](),
                    'content': [_0x5dc27f(0x2a3)]
                },
                ..._0xa8ede[_0x5dc27f(0x2c7)](-0x3e7)
            ]), console[_0x5dc27f(0x166)]('[' + _0x4e62c3['toISOString']() + ']', ..._0x3dcd74);
        }
        function _0x5ad980() {
            const _0x5654c2 = _0x476d1a;
            for (let _0x2a192d in _0x1f5f15) {
                GM_getValue(_0x2a192d) != null && typeof GM_getValue(_0x2a192d) === _0x5654c2(0x13f) && (_0x1f5f15[_0x2a192d] = GM_getValue(_0x2a192d));
            }
        }
        _0x150f22(function () {
            const _0x1d7bdd = _0x476d1a;
            function _0x9b24b1(_0x4ccce7) {
                const _0x11ab22 = a0_0x27e8;
                var _0x3aca2e = [];
                for (var _0x4af643 of _0x4ccce7) {
                    _0x3aca2e[_0x11ab22(0x17e)]({
                        'tagName': _0x4af643['tagName'],
                        'id': _0x4af643['id'],
                        'className': _0x4af643[_0x11ab22(0x18d)]
                    });
                }
                return _0x3aca2e;
            }
            function _0x263b95() {
                const _0x7c10ae = a0_0x27e8;
                let _0x253d30 = _0x150f22('div[id^=\x22mount\x22]')[0x0];
                var _0x5a089b = '';
                _0xa8ede['forEach'](_0x2c56da => {
                    const _0x5d39ad = a0_0x27e8;
                    var _0x2b1dad = JSON[_0x5d39ad(0x2c2)](_0x2c56da['content'], function (_0x3822b2, _0x951988) {
                        const _0x5b0987 = _0x5d39ad;
                        if (Array[_0x5b0987(0x9e)](this)) {
                            if (typeof _0x951988 === _0x5b0987(0x1bb) && _0x951988 instanceof jQuery)
                                return _0x9b24b1(_0x951988);
                            return _0x951988;
                        } else
                            return _0x951988;
                    }, '\x09');
                    _0x5a089b += _0x2c56da[_0x5d39ad(0x24f)] + ':\x20' + _0x2b1dad + '\x0a';
                }), _0x150f22(_0x7c10ae(0x1bf))[_0x7c10ae(0x261)](_0x7c10ae(0xaa) + _0x5a089b + _0x7c10ae(0x233) + location[_0x7c10ae(0x1dc)] + _0x7c10ae(0x205) + _0x253d30[_0x7c10ae(0x149)]);
            }
            _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0x15e), function () {
                _0x263b95();
            }), _0x150f22(_0x1d7bdd(0x1fc))['on']('click', _0x1d7bdd(0x294), function () {
                const _0x580d6d = _0x1d7bdd;
                _0x150f22(_0x580d6d(0x1bf))[_0x580d6d(0x26d)](), document[_0x580d6d(0x292)](_0x580d6d(0x2a9));
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE', function () {
                const _0x5b81fc = _0x1d7bdd;
                _0x150f22(_0x5b81fc(0x1bf))[_0x5b81fc(0x261)]()[_0x5b81fc(0x276)] === 0x0 && _0x263b95();
                var _0x5b2dc1 = _0x150f22(_0x5b81fc(0x1bf))[_0x5b81fc(0x261)](), _0x4b2a39 = document[_0x5b81fc(0xdc)]('a'), _0x77bb33 = new Blob([_0x5b2dc1], { 'type': _0x5b81fc(0xe1) });
                _0x4b2a39[_0x5b81fc(0xb2)] = URL[_0x5b81fc(0x28f)](_0x77bb33), _0x4b2a39['download'] = _0x5b81fc(0x129) + new Date()[_0x5b81fc(0x2c4)]() + _0x5b81fc(0x296), document['body'][_0x5b81fc(0x141)](_0x4b2a39), _0x4b2a39[_0x5b81fc(0x2c5)](), _0x4b2a39[_0x5b81fc(0x29e)]();
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0x2d0), function () {
                const _0x5d2f3e = _0x1d7bdd;
                _0x150f22(this)[_0x5d2f3e(0x25b)](_0x5d2f3e(0x91))[_0x5d2f3e(0x276)] > 0x0 ? _0x150f22(this)[_0x5d2f3e(0x25b)](_0x5d2f3e(0x91))[_0x5d2f3e(0x26a)](0xfa, function () {
                    const _0x60ead7 = _0x5d2f3e;
                    _0x150f22(this)[_0x60ead7(0x29e)]();
                }) : _0x150f22(_0x5d2f3e(0x1bc))[_0x5d2f3e(0x29e)]();
            }), _0x150f22(window)[_0x1d7bdd(0x8b)](function (_0x4f7b30) {
                const _0x1a3c29 = _0x1d7bdd;
                _0x4f7b30[_0x1a3c29(0x27b)] == '81' && _0x4f7b30[_0x1a3c29(0x286)] && (_0x150f22(_0x1a3c29(0x1bc))[_0x1a3c29(0x29e)](), _0x4f7b30[_0x1a3c29(0x21f)]()), _0x4f7b30['keyCode'] == '87' && _0x4f7b30[_0x1a3c29(0x286)] && (_0x2e4f99(), _0x4f7b30['preventDefault']()), _0x4f7b30[_0x1a3c29(0x27b)] == '90' && _0x4f7b30['altKey'] && (_0x55d514(), _0x4f7b30[_0x1a3c29(0x21f)]()), _0x4f7b30['keyCode'] == '82' && _0x4f7b30[_0x1a3c29(0x286)] && (_0x4dffd8(), _0x4f7b30[_0x1a3c29(0x21f)]()), _0x4f7b30[_0x1a3c29(0x27b)] == '83' && _0x4f7b30[_0x1a3c29(0x286)] && (location[_0x1a3c29(0xb2)][_0x1a3c29(0x288)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x150f22('.IG_DWSTORY')['length'] > 0x0 && _0x150f22('.IG_DWSTORY')?.['click'](), location[_0x1a3c29(0xb2)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x150f22(_0x1a3c29(0x162))[_0x1a3c29(0x276)] > 0x0 && _0x150f22(_0x1a3c29(0x162))?.[_0x1a3c29(0x2c5)](), _0x4f7b30['preventDefault']());
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x180), _0x1d7bdd(0x248), function (_0xff32b1) {
                const _0x89a6fb = _0x1d7bdd;
                var _0x2d78b3 = _0x150f22(this)['attr']('id');
                if (_0x2d78b3 && _0x1f5f15[_0x2d78b3] !== undefined) {
                    let _0x2aff4b = _0x150f22(this)[_0x89a6fb(0x1d3)](_0x89a6fb(0x138));
                    GM_setValue(_0x2d78b3, _0x2aff4b), _0x1f5f15[_0x2d78b3] = _0x2aff4b, console['log'](_0x89a6fb(0x195), _0x2d78b3, _0x2aff4b);
                }
            }), _0x150f22('body')['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0x29f), function (_0x4fd811) {
                const _0x259682 = _0x1d7bdd;
                _0x150f22(this)['find']('#tempWrapper')[_0x259682(0x276)] > 0x0 && _0x4fd811[_0x259682(0x21f)]();
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x180), _0x1d7bdd(0x1e5), function () {
                const _0x16a361 = _0x1d7bdd;
                let _0x472f46 = _0x150f22(this)['val']();
                _0x150f22(this)[_0x16a361(0x87)]('type') == _0x16a361(0x1c3) ? _0x150f22(this)[_0x16a361(0x111)]()[_0x16a361(0x21d)](_0x472f46) : _0x150f22(this)[_0x16a361(0x218)]()['val'](_0x472f46), _0x472f46 >= 0x0 && _0x472f46 <= 0x1 && (_0x14072e = _0x472f46, GM_setValue(_0x16a361(0xa1), _0x472f46));
            }), _0x150f22('body')['on']('input', _0x1d7bdd(0x1e5), function (_0x26b79f) {
                const _0x4b31a0 = _0x1d7bdd;
                if (_0x150f22(this)['attr'](_0x4b31a0(0x16e)) == _0x4b31a0(0x1c3)) {
                    let _0x2d3ace = _0x150f22(this)[_0x4b31a0(0x21d)]();
                    _0x150f22(this)[_0x4b31a0(0x111)]()[_0x4b31a0(0x21d)](_0x2d3ace);
                } else {
                    let _0x4a8b71 = _0x150f22(this)['val']();
                    _0x4a8b71 >= 0x0 && _0x4a8b71 <= 0x1 ? _0x150f22(this)[_0x4b31a0(0x218)]()[_0x4b31a0(0x21d)](_0x4a8b71) : _0x4a8b71 < 0x0 ? _0x150f22(this)[_0x4b31a0(0x21d)](0x0) : _0x150f22(this)['val'](0x1);
                }
            }), _0x150f22('body')['on'](_0x1d7bdd(0x15f), _0x1d7bdd(0x2b1), function (_0x261e47) {
                const _0x1735ed = _0x1d7bdd;
                GM_setValue(_0x1735ed(0x1a7), _0x150f22(this)[_0x1735ed(0x21d)]()), _0x36ecb8 = _0x150f22(this)[_0x1735ed(0x21d)]();
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), 'a[data-needed=\x22direct\x22]', function (_0x448a65) {
                const _0x526c81 = _0x1d7bdd;
                _0x448a65[_0x526c81(0x21f)](), _0xd760e7(this);
            }), _0x150f22(_0x1d7bdd(0x1fc))['on']('click', _0x1d7bdd(0x17b), function () {
                const _0x28009b = _0x1d7bdd;
                if (_0x1f5f15[_0x28009b(0x9c)] && _0x1f5f15['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                    _0xd760e7(_0x150f22(this)[_0x28009b(0x25b)]()[_0x28009b(0x1b1)]('a')[_0x28009b(0x210)]()[0x0], !![]);
                else {
                    var _0x5c2b96 = new URL(_0x150f22(this)['parent']()[_0x28009b(0x1b1)]('a')[_0x28009b(0x87)]('data-href'));
                    _0x5c2b96['host'] = _0x28009b(0x264), _0x929b21(_0x5c2b96[_0x28009b(0xb2)]);
                }
            }), _0x150f22(_0x1d7bdd(0x1fc))['on']('click', _0x1d7bdd(0x174), function () {
                const _0x3ef5fd = _0x1d7bdd;
                _0x510ee4(_0x150f22(this)[_0x3ef5fd(0x25b)]()[_0x3ef5fd(0x1b1)]('a')['find'](_0x3ef5fd(0x1cf))[_0x3ef5fd(0x210)]()['attr'](_0x3ef5fd(0xac)), _0x150f22(this)[_0x3ef5fd(0x25b)]()[_0x3ef5fd(0x1b1)]('a')[_0x3ef5fd(0x87)](_0x3ef5fd(0x116)), _0x3ef5fd(0x1c7), new Date()['getTime'](), _0x3ef5fd(0x2cb), _0x150f22('#article-id')[_0x3ef5fd(0x261)]());
            }), _0x150f22('body')['on']('click', _0x1d7bdd(0x1df), function () {
                _0x3cb998(!![]);
            }), _0x150f22('body')['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0x2d2), function (_0x1b0745) {
                _0x1b0745['preventDefault'](), _0x3cb998(!![], !![], !![]);
            }), _0x150f22('body')['on'](_0x1d7bdd(0x2c5), '.IG_DWSTORY_THUMBNAIL', function () {
                _0xbd06c3(!![]);
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0x266), function (_0x3f944b) {
                const _0x255202 = _0x1d7bdd;
                _0x3f944b[_0x255202(0x225)](), _0x4641e(!![]);
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0x162), function () {
                _0x50695b(!![]);
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), '.IG_DWHINEWTAB', function (_0x5b9e12) {
                const _0x994bf9 = _0x1d7bdd;
                _0x5b9e12[_0x994bf9(0x21f)](), _0x50695b(!![], !![]);
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0xa9), function () {
                _0x76f754(!![]);
            }), _0x150f22('body')['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0x20c), function () {
                _0xa07f8b(!![], !![]);
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0x10e), function () {
                _0xa07f8b(!![], !![], !![]);
            }), _0x150f22(_0x1d7bdd(0x1fc))['on']('click', '.IG_REELS_THUMBNAIL', function () {
                _0xa07f8b(!![], ![]);
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0xbb), _0x1d7bdd(0x113), function (_0x46fd88) {
                const _0x58862f = _0x1d7bdd;
                if (_0x46fd88[_0x58862f(0xf6)] === 0x3 || _0x46fd88[_0x58862f(0xf6)] === 0x2) {
                    if (location[_0x58862f(0xb2)] === _0x58862f(0x1bd) && _0x1f5f15['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x46fd88[_0x58862f(0x21f)]();
                        if (_0x150f22(this)['find'](_0x58862f(0xc4))['length'] > 0x0) {
                            const _0x4fb16e = _0x58862f(0x1bd) + _0x150f22(this)[_0x58862f(0x1b1)](_0x58862f(0x98))[_0x58862f(0xcc)]()[_0x58862f(0x261)]();
                            _0x46fd88[_0x58862f(0xf6)] === 0x2 ? GM_openInTab(_0x4fb16e) : location['href'] = _0x4fb16e;
                        }
                    }
                }
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x180), _0x1d7bdd(0xc6), function () {
                const _0x3d2475 = _0x1d7bdd;
                var _0xebc830 = _0x150f22(this)['find']('input')[_0x3d2475(0x1d3)]('checked');
                _0x150f22(_0x3d2475(0x194))[_0x3d2475(0xd6)](function () {
                    const _0x3e9a19 = _0x3d2475;
                    _0x150f22(this)[_0x3e9a19(0x1d3)](_0x3e9a19(0x138), _0xebc830);
                });
            }), _0x150f22(_0x1d7bdd(0x1fc))['on']('change', _0x1d7bdd(0x194), function () {
                const _0x5bb046 = _0x1d7bdd;
                var _0x337d13 = _0x150f22(_0x5bb046(0x1ee))[_0x5bb046(0x276)], _0x2cc849 = _0x150f22('.IG_SN_DIG_BODY\x20.inner_box')[_0x5bb046(0x276)];
                _0x150f22(_0x5bb046(0xc6))[_0x5bb046(0xc3)](_0x5bb046(0x15f))[_0x5bb046(0x1d3)]('checked', _0x337d13 == _0x2cc849);
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x2c5), _0x1d7bdd(0x23d), function () {
                const _0x3b49ea = _0x1d7bdd;
                let _0x56a912 = 0x0;
                _0x150f22(_0x3b49ea(0x1ce))[_0x3b49ea(0xd6)](function () {
                    const _0x46687f = _0x3b49ea;
                    _0x150f22(this)['prev']()[_0x46687f(0x1b1)](_0x46687f(0x15f))[_0x46687f(0x1d3)](_0x46687f(0x138)) && (_0x150f22(this)[_0x46687f(0x2c5)](), _0x56a912++);
                }), _0x56a912 == 0x0 && alert(_0x5d66ee(_0x3b49ea(0x10b)));
            }), _0x150f22('body')['on'](_0x1d7bdd(0x180), '.IG_SN_DIG_TITLE\x20#langSelect', function () {
                const _0x535ea1 = _0x1d7bdd;
                GM_setValue(_0x535ea1(0xd8), _0x150f22(this)['val']()), _0x4cbe0c = _0x150f22(this)[_0x535ea1(0x21d)](), _0x4cbe0c?.[_0x535ea1(0x183)]('en') || _0x557d0f[_0x4cbe0c] != null ? (_0x17fd2e(), _0x5a1b41()) : _0xaa1c11(_0x4cbe0c)[_0x535ea1(0x2ca)](_0x5aee69 => {
                    _0x557d0f[_0x4cbe0c] = _0x5aee69, _0x17fd2e(), _0x5a1b41();
                })['catch'](_0x14a980 => {
                    const _0x58acc7 = _0x535ea1;
                    console[_0x58acc7(0x1f7)]('getTranslationText\x20catch\x20error:', _0x14a980);
                });
            }), _0x150f22(_0x1d7bdd(0x1fc))['on'](_0x1d7bdd(0x180), '.IG_SN_DIG_BODY\x20#locateSelect', function () {
                const _0x56982f = _0x1d7bdd;
                _0x150f22(_0x56982f(0x2b4))[_0x56982f(0x261)]('' + new Date()[_0x56982f(0x11d)](_0x150f22(this)[_0x56982f(0x21d)](), {
                    'hour12': ![],
                    'second': _0x56982f(0xa8),
                    'minute': _0x56982f(0xa8),
                    'hour': _0x56982f(0xa8),
                    'month': _0x56982f(0xa8),
                    'day': '2-digit',
                    'year': 'numeric'
                })[_0x56982f(0x2c6)]('/', '-')), LOCATE_DATE_FORMAT = _0x150f22(this)[_0x56982f(0x21d)](), GM_setValue(_0x56982f(0x257), _0x150f22(this)['val']());
            }), _0x150f22(_0x1d7bdd(0x1fc))['on']('click', _0x1d7bdd(0x26b), function () {
                _0x150f22('.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]')['each'](function () {
                    const _0x4c6d76 = a0_0x27e8;
                    _0x150f22(this)[_0x4c6d76(0x2c5)]();
                });
            });
        });
    }, 0x61a8);
}(jQuery));
function a0_0x27e8(_0x5b807c, _0x4839e0) {
    const _0x4d6162 = a0_0x4d61();
    return a0_0x27e8 = function (_0x27e82e, _0x2a00f8) {
        _0x27e82e = _0x27e82e - 0x80;
        let _0x57b0a1 = _0x4d6162[_0x27e82e];
        return _0x57b0a1;
    }, a0_0x27e8(_0x5b807c, _0x4839e0);
}
function a0_0x4d61() {
    const _0x272ea8 = [
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'display_resources',
        'Current\x20version:\x20',
        '%22}',
        'includes',
        'label',
        '(post)\x20video\x20volume\x20changed\x20#slider',
        'highlights',
        'datetime',
        'catch',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        'responseText',
        'RENAME_PUBLISH_DATE',
        'response',
        'NO_CHECK_RESOURCE',
        '._acay',
        'data-href',
        '.IG_REELS_NEWTAB',
        'GraphSidecar',
        'avatar',
        'next',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'button[role=\x22menuitem\x22]',
        'onReadyMyDW()\x20Timer',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'data-username',
        'REPORT_DISCORD',
        '0px',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'reels_media',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'video_versions',
        'toLocaleString',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'body\x20>\x20div\x20section:visible._ac0a',
        'removeAttr',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'Video',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'video',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'version',
        'Select\x20All',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        'DOMTree-',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        '</span>\x20',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'data-completed',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'mouseenter',
        'userAgent',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        '</button>',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'hidden',
        'edges',
        'z-index',
        'checked',
        'data-type',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        '\x22\x20title=\x22',
        'boolean',
        '</option>',
        'appendChild',
        'body\x20>\x20div\x20section._ac0a',
        'userLanguage',
        'canDownload',
        'status',
        'BATCH_DOWNLOAD_SELECTED',
        '\x22\x20datetime=\x22',
        'DIRECT_DOWNLOAD_ALL',
        'innerHTML',
        'reject',
        'video\x20+\x20div\x20>\x20div',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'removeClass',
        'toString',
        'G_CHECK_TIMESTAMP',
        '\x22]\x20span',
        'message',
        'download',
        'RELOAD_SCRIPT',
        'updatenotification',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        '437905BzcEWn',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20text\x20is\x20translated\x20using\x20machine\x20translation\x20and\x20may\x20be\x20inaccurate;\x20you\x20can\x20contact\x20support\x20to\x20correct\x20the\x20translation.</div>',
        '[data-ih-locale]',
        'Download',
        'getMinutes',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'disconnect',
        'scrollBy',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'input',
        ':hidden',
        'shortcode_media',
        '.IG_DWHISTORY',
        'target',
        'THUMBNAIL',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'log',
        '</p>',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'profile_pic_url',
        'padEnd',
        '11311476qKQACx',
        'getMediaInfo()',
        'type',
        'height',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'en-US',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'setAttribute',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        '\x22\x20data-globalIndex=\x22',
        'Found\x20insert\x20point',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'playing',
        'data',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        '.IG_SN_DIG_BODY\x20.newTab',
        'is_video',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'push',
        'https://www.instagram.com/p/',
        'change',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'startsWith',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'display_url',
        'volumechange',
        'before',
        'feedback_message',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'LOAD_BLOB_RELOAD',
        'keys',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'className',
        'substr',
        'play',
        'username',
        'MODIFY_VIDEO_VOLUME',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'padStart',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'user\x20settings',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        '\x22\x20data-ih-locale-title=\x22',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'style',
        'stories',
        '.SNKMS_IG_NEWTAB_MAIN',
        '.xpgaw4o',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20posts\x20and\x20Reels.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20In\x20Reels\x20pages,\x20the\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'isHomepage',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'CHECK_UPDATE_MENU',
        'faild',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'timeupdate',
        'G_RENAME_FORMAT',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'getBlobMediaWithQueryID()',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'div.volume_slider\x20input',
        'Remote\x20version:\x20',
        'taken_at',
        'blob',
        'FORCE_FETCH_ALL_RESOURCES',
        'children',
        'SKIP_VIEW_STORY_CONFIRM',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'modify',
        '(reel)\x20Added\x20video\x20event\x20listener\x20#modify',
        'instagram.com/reels/',
        '2hJdxiZ',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'getDate',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'object',
        '.IG_SN_DIG',
        'https://www.instagram.com/',
        'GraphImage',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        '__typename',
        'getTranslationText()',
        'range',
        'getTranslationText\x20catch\x20error:',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'thumbnail',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'data-modify-thumbnail',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'paused\x20pause()',
        '</a></button>',
        '</div></div>',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'img',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'https://www.instagram.com/reel/',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'prop',
        '--ig-track-progress:\x20',
        '.IG_DWSTORY_THUMBNAIL',
        '\x22\x20/></div>',
        'px;top:',
        'query_id',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '(story)\x20Added\x20video\x20event\x20listener\x20#modify',
        'https://i.instagram.com/api/v1/users/',
        'pathname',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        'a[href^=\x22/p/\x22]',
        '.IG_DWSTORY',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'div\x20>\x20ul\x20li._acaz',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'div:not([class]):not([style])',
        'ended',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'Fetch\x20from\x20memory\x20cache:',
        'header\x20>\x20section:first\x20img[alt][draggable]',
        '(highlight)\x20Added\x20video\x20event\x20listener\x20#modify-thumbnail',
        'div\x20>\x20ul._acay',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        '<a\x20media-id=\x22',
        'www.',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'IG\x20Debug\x20DOM\x20Tree',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        'edge_sidecar_to_children',
        'assign',
        'error',
        'srcset',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'data-ih-locale-title',
        'loop',
        'body',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'shortcode',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'getBlobMediaWithQuery()',
        'BATCH_DOWNLOAD_DIRECT',
        'floor',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'isStory',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'xdt_api__v1__media__shortcode__web_info',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        '.IG_REELS',
        'DIV',
        'sort',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'first',
        'SHOW_DOM_TREE',
        'data-modify',
        '</a>',
        'div:last-child',
        '\x22\x20class=\x22newTab\x22>',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'prev',
        '<div\x20class=\x22volume_slider\x22\x20/>',
        'taken_at_timestamp',
        'user',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'val',
        'Feedback',
        'preventDefault',
        'Donate',
        'Found\x20post\x20container',
        'HTML5_VIDEO_CONTROL',
        'SELECT_AND_COPY',
        'Download\x20All\x20Resources',
        'stopPropagation',
        '37px',
        '581Rvsbyp',
        '184KIVmWR',
        'width',
        'wrap',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '._aagv\x20img',
        'AUTO_RENAME',
        '\x22><span\x20data-ih-locale=\x22',
        'Image',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        '\x0a-----\x0a\x0aLocation:\x20',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'parents',
        'controls',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'main\x20timer\x20re-register\x20completed',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'header\x20>\x20section:first\x20img[alt]',
        '516zzfNZd',
        'Wololo!\x20New\x20version\x20released.',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        '.IG_SN_DIG\x20input',
        'mp4',
        '154531pBKQxW',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'after',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'time',
        'NOPATH',
        'query_hash',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'getPostOwner()',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'position',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        'G_LOCATE_DATE_FORMAT',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'CHECK_UPDATE',
        'parent',
        'LOCALE_MANIFEST',
        'host',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/refs/heads/master/main.js',
        '40938CVWgaD',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'text',
        'script[type=\x22application/json\x22]',
        '#article-id',
        'scontent.cdninstagram.com',
        'DISABLE_VIDEO_LOOPING',
        '.IG_DWPROFILE',
        'GM_unregisterMenuCommand',
        'append',
        '\x20-</a>',
        'fadeOut',
        '.IG_SN_DIG_TITLE\x20#batch_download_direct',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'select',
        'reels',
        'map',
        'div.volume_slider',
        'tagName',
        'Main\x20Timer',
        '_INTRO',
        'addClass',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'length',
        'IMG',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'DOWNLOAD',
        '_acnb',
        'keyCode',
        'use\x20strict',
        'isIntersecting',
        'script',
        '<p\x20id=\x22_SNLOAD\x22>',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'REPORT_GITHUB',
        'hasClass',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'isHighlightsStory',
        'matchAll',
        'altKey',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'match',
        'getUserId()',
        'THUMBNAIL_INTRO',
        'Close',
        'relative',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'https://ko-fi.com/snkoarashi',
        'createObjectURL',
        'INTERNAL_CSS',
        'getBlobMedia()',
        'execCommand',
        '</span>\x20<input\x20id=\x22',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'video_url',
        '.txt',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'getStories()',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'FEEDBACK',
        'isProfile',
        'contextmenu',
        '<div></div>',
        'remove',
        '.IG_SN_DIG\x20.globalSettings',
        '<input\x20value=\x22',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'logger\x20sliced',
        'there\x20is\x20no\x20new\x20update',
        'code',
        '10nyUKcQ',
        'getUserHighSizeProfile()',
        '65154zYAbQs',
        'copy',
        'top',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'Display\x20HTML5\x20Video\x20Controller',
        'x1s85apg',
        'GET',
        '<a\x20href=\x22https://www.instagram.com/p/',
        '_blank',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        'data-path',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '#locatePreview',
        'Disable\x20Video\x20Auto-looping',
        '4233045JhQari',
        'getMonth',
        'modify-thumbnail',
        'CLOSE',
        'data-name',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '20000',
        'data-loop',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'node',
        'users',
        'filter',
        'stringify',
        '._acay\x20._acaz',
        'getTime',
        'click',
        'replaceAll',
        'slice',
        'div#splash-screen',
        '#scrollWrapper',
        'then',
        'jpg',
        'replace',
        'forEach',
        'undefined',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        'css',
        '.IG_DWNEWTAB',
        'video_resources',
        '<div\x20class=\x22volume_slider\x20bottom\x22\x20/>',
        'GraphVideo',
        'getSeconds',
        'selected',
        'px;\x22>',
        '3633112pGbeHg',
        'finalUrl',
        '<label\x20class=\x22globalSettings',
        '(reel)\x20video\x20volume\x20changed\x20#slider',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'observe',
        'attr',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'split',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'keydown',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'svg',
        '._acnb',
        '\x22\x20class=\x22IG_REELS\x22>',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '#tempWrapper',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'DONATE',
        'Settings',
        '</a></button><br/>',
        '<a\x20datetime=\x22',
        'regenerated',
        'div',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'FORCE_RESOURCE_VIA_MEDIA',
        'hd_profile_pic_url_info',
        'isArray',
        'x1lix1fw',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'G_VIDEO_VOLUME',
        '9kKhOtX',
        'parse',
        'loadstart',
        'https://i.instagram.com/api/v1/media/',
        'candidates',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        '2-digit',
        '.IG_DWHISTORY_THUMBNAIL',
        'Logger:\x0a',
        'pause',
        'src',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        '_acnf',
        'data-snig',
        'LOAD_BLOB_ONE',
        'header\x20>\x20section:first\x20img[alt]:not([draggable])',
        'href',
        '._acay\x20+\x20.x24i39r',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        '[data-ih-locale-title]',
        'trigging',
        'Feedback\x20Options',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'VID',
        'mousedown',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'x1iyjqo2',
        'image_versions2',
        'carousel_media',
        'SETTING',
        'NOTICE_UPDATE_CONTENT',
        'getUserIdWithAgent()',
        'find',
        'canvas._aarh',
        '[data-snig]',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        '(story)\x20Added\x20video\x20event\x20listener\x20#modify-thumbnail',
        'items',
        '_ac3q',
        '</div>',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'last',
        'join',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'Show\x20DOM\x20Tree',
        'paused\x20click()',
        'url',
        'section\x20>\x20main[role=\x22main\x22]',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'title',
        'each',
        'cursor',
        'lang',
        'html',
        '.json',
        'DOWNLOAD_DOM_TREE',
        'createElement',
        'muted',
        '<option\x20value=\x22',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'warn',
        'text/plain',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'isReels',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'Download\x20Video\x20Thumbnail',
        'owner',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:',
        'toLowerCase',
        '.IG_SN_DIG\x20#post_info',
        'smooth',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'ALL_CHECK',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'volume',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'NEW_TAB',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
        'article',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'LOAD_BLOB_MULTIPLE',
        'which',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'pointer',
        'absolute',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/'
    ];
    a0_0x4d61 = function () {
        return _0x272ea8;
    };
    return a0_0x4d61();
}