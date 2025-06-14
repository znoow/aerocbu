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

function a0_0x5e9f(_0x322e36, _0x16aa5d) {
    const _0x4ace8e = a0_0x4ace();
    return a0_0x5e9f = function (_0x5e9ff6, _0x195a47) {
        _0x5e9ff6 = _0x5e9ff6 - 0xbb;
        let _0x4f73a7 = _0x4ace8e[_0x5e9ff6];
        return _0x4f73a7;
    }, a0_0x5e9f(_0x322e36, _0x16aa5d);
}
(function (_0x2712f0, _0x243fa7) {
    const _0x223f58 = a0_0x5e9f, _0x2ce33e = _0x2712f0();
    while (!![]) {
        try {
            const _0x406464 = -parseInt(_0x223f58(0x33b)) / 0x1 * (parseInt(_0x223f58(0x274)) / 0x2) + -parseInt(_0x223f58(0x11a)) / 0x3 * (parseInt(_0x223f58(0x1cd)) / 0x4) + parseInt(_0x223f58(0x2d0)) / 0x5 * (parseInt(_0x223f58(0x199)) / 0x6) + parseInt(_0x223f58(0x12c)) / 0x7 * (-parseInt(_0x223f58(0x291)) / 0x8) + parseInt(_0x223f58(0x2ad)) / 0x9 + -parseInt(_0x223f58(0x28d)) / 0xa + parseInt(_0x223f58(0x2a7)) / 0xb;
            if (_0x406464 === _0x243fa7)
                break;
            else
                _0x2ce33e['push'](_0x2ce33e['shift']());
        } catch (_0xde042e) {
            _0x2ce33e['push'](_0x2ce33e['shift']());
        }
    }
}(a0_0x4ace, 0x1d53f), function (_0x1e041c) {
    setTimeout(() => {
        'use strict';
        const _0x4e7afc = a0_0x5e9f;
        const _0x5a1808 = {
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
            }, _0x5540e0 = [
                _0x4e7afc(0x28e),
                _0x4e7afc(0x155),
                _0x4e7afc(0x30d)
            ], _0x188dac = {
                'DOWNLOAD': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
                'NEW_TAB': _0x4e7afc(0x2fa),
                'THUMBNAIL': _0x4e7afc(0x229),
                'DOWNLOAD_ALL': _0x4e7afc(0x164),
                'CLOSE': _0x4e7afc(0x180),
                'FULLSCREEN': _0x4e7afc(0x2aa),
                'TURN_DEG': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#1f1f1f\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7.34\x206.41L.86\x2012.9l6.49\x206.48\x206.49-6.48-6.5-6.49zM3.69\x2012.9l3.66-3.66L11\x2012.9l-3.66\x203.66-3.65-3.66zm15.67-6.26C17.61\x204.88\x2015.3\x204\x2013\x204V.76L8.76\x205\x2013\x209.24V6c1.79\x200\x203.58.68\x204.95\x202.05\x202.73\x202.73\x202.73\x207.17\x200\x209.9C16.58\x2019.32\x2014.79\x2020\x2013\x2020c-.97\x200-1.94-.21-2.84-.61l-1.49\x201.49C10.02\x2021.62\x2011.51\x2022\x2013\x2022c2.3\x200\x204.61-.88\x206.36-2.64\x203.52-3.51\x203.52-9.21\x200-12.72z\x22/></svg>'
            }, _0x57add3 = 0xfa, _0x333c35 = GM_getResourceText(_0x4e7afc(0x283)), _0x58ee7a = JSON['parse'](GM_getResourceText(_0x4e7afc(0x238)));
        var _0x17637a = {
            'videoVolume': GM_getValue('G_VIDEO_VOLUME') ? GM_getValue(_0x4e7afc(0x1d5)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue('G_RENAME_FORMAT') ? GM_getValue('G_RENAME_FORMAT') : _0x4e7afc(0x27f),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue('lang') || navigator['language'] || navigator['userLanguage'],
            'currentURL': location[_0x4e7afc(0x173)],
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
                _0x15e15f();
            })
        };
        _0x5a01b3(), GM_addStyle(_0x333c35), _0x4ac751(), _0x2b1a40(_0x17637a[_0x4e7afc(0x230)])[_0x4e7afc(0x163)](_0x866928 => {
            const _0x405a7d = _0x4e7afc;
            _0x17637a[_0x405a7d(0xef)][_0x17637a[_0x405a7d(0x230)]] = _0x866928, _0x580dd6(), _0x4ac751(), _0x10fc72(0x12c);
        })[_0x4e7afc(0x1b0)](_0x85b72 => {
            const _0x309871 = _0x4e7afc;
            _0x4ac751(), _0x10fc72(0x12c), !_0x17637a['lang'][_0x309871(0xd2)]('en') && console[_0x309871(0x2ef)](_0x309871(0x364), _0x85b72);
        }), _0x1ece4c(_0x4e7afc(0x315), GM_info[_0x4e7afc(0x1c7)][_0x4e7afc(0x312)], _0x4e7afc(0x279), GM_info[_0x4e7afc(0x1c7)][_0x4e7afc(0x16f)]);
        var _0x37b6b0 = setInterval(function () {
            const _0x393910 = _0x4e7afc;
            if (_0x1e041c('div#splash-screen')[_0x393910(0x19d)] > 0x0 && !_0x1e041c(_0x393910(0x1b4))['is'](_0x393910(0x1fb)) || location[_0x393910(0x197)][_0x393910(0x15b)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location['hostname'][_0x393910(0xd2)](_0x393910(0x24e)) || (location[_0x393910(0x197)][_0x393910(0xd8)](_0x393910(0x26f)) || location[_0x393910(0x197)][_0x393910(0xd8)](_0x393910(0x146))) && _0x1e041c(_0x393910(0x1d0))[_0x393910(0x19d)] > 0x0) {
                _0x17637a[_0x393910(0x1e7)] = ![];
                return;
            }
            if (_0x17637a[_0x393910(0x320)] != location[_0x393910(0x173)] || !_0x17637a['firstStarted'] || !_0x17637a[_0x393910(0x1e7)]) {
                console[_0x393910(0x2d7)]('Main\x20Timer', _0x393910(0x1ca)), clearInterval(_0x17637a[_0x393910(0x24c)]), _0x17637a[_0x393910(0x1e7)] = ![], _0x17637a[_0x393910(0x2df)] = !![], _0x17637a[_0x393910(0x320)] = location['href'], _0x17637a[_0x393910(0x2cc)][_0x393910(0x1ff)]();
                if (location[_0x393910(0x173)]['startsWith'](_0x393910(0x2fe)) || location[_0x393910(0x197)]['match'](/^\/(.*?)\/(p|reel)\//ig) || location[_0x393910(0x173)][_0x393910(0xd2)](_0x393910(0x2d3))) {
                    _0x17637a[_0x393910(0x358)][_0x393910(0x2d8)] = {}, _0x17637a[_0x393910(0x358)]['highlights'] = {}, _0x1ece4c(_0x393910(0x159));
                    var _0x3b6b53 = setInterval(() => {
                        const _0x1025d7 = _0x393910;
                        _0x1e041c(_0x1025d7(0x1b3))[_0x1025d7(0x19d)] > 0x0 && (clearInterval(_0x3b6b53), setTimeout(() => {
                            _0x15e15f(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x17637a['pageLoaded'] = !![];
                }
                location[_0x393910(0x173)][_0x393910(0xd2)](_0x393910(0x161)) && (_0x1ece4c(_0x393910(0x16d)), setTimeout(() => {
                    _0xb8269e(![]);
                }, 0x96), _0x17637a['pageLoaded'] = !![]);
                if (location[_0x393910(0x173)][_0x393910(0x2fc)]('?')[0x0] == _0x393910(0x1a3)) {
                    _0x17637a[_0x393910(0x358)][_0x393910(0x2d8)] = {}, _0x17637a[_0x393910(0x358)]['highlights'] = {};
                    let _0x580c2a = _0x17637a[_0x393910(0x353)]?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x1ece4c('isHomepage', _0x580c2a), setTimeout(() => {
                        const _0x1ca682 = _0x393910;
                        _0x15e15f(![], _0x580c2a);
                        const _0x3da598 = _0x1e041c(_0x1ca682(0x134))?.[_0x1ca682(0x2cb)]()[0x0];
                        _0x3da598 && _0x17637a[_0x1ca682(0x2cc)][_0x1ca682(0x355)](_0x3da598, { 'childList': !![] });
                    }, 0x96), _0x17637a[_0x393910(0x1e7)] = !![];
                }
                _0x1e041c('header\x20>\x20*[class]:first-child\x20img[alt]')[_0x393910(0x19d)] && location[_0x393910(0x197)][_0x393910(0x15b)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x393910(0x197)][_0x393910(0x15b)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x1ece4c('isProfile'), setTimeout(() => {
                    _0x15e989(![]);
                }, 0x96), _0x17637a[_0x393910(0x1e7)] = !![]);
                if (!_0x17637a[_0x393910(0x1e7)]) {
                    if (location['href'][_0x393910(0x15b)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x17637a['GL_dataCache'][_0x393910(0x186)] = {}, _0x1ece4c(_0x393910(0x28b)), _0x378eb6(![]), _0x17637a[_0x393910(0x24c)] = setInterval(() => {
                            _0x28db75(![]);
                        }, _0x57add3), _0x1e041c(_0x393910(0x2b1))[_0x393910(0x19d)] && setTimeout(() => {
                            const _0x1a6a06 = _0x393910;
                            if (_0x5a1808[_0x1a6a06(0x148)]) {
                                var _0x2ea4da = _0x1e041c(_0x1a6a06(0x21f))['filter'](function () {
                                    const _0x2f1c38 = _0x1a6a06;
                                    return _0x1e041c(this)[_0x2f1c38(0x2c6)]()['length'] === 0x0 && this[_0x2f1c38(0x2c9)][_0x2f1c38(0x140)]() !== '';
                                });
                                _0x2ea4da?.[_0x1a6a06(0xfa)]('click');
                            }
                            _0x17637a[_0x1a6a06(0x1e7)] = !![];
                        }, 0x96);
                    else
                        location[_0x393910(0x173)][_0x393910(0x15b)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x1ece4c(_0x393910(0x304)), _0x1e041c(_0x393910(0x1ab))[_0x393910(0x19d)] > 0x0 && (_0x1e041c(_0x393910(0x137))['remove'](), _0x1e041c(_0x393910(0x360))[_0x393910(0x1c3)](), _0x1e041c(_0x393910(0x193))['length'] && _0x1e041c(_0x393910(0x193))[_0x393910(0x1c3)](), _0x3e9e8b(![]), setTimeout(() => {
                            _0x3e9e8b(![]);
                        }, 0x96)), _0x1e041c(_0x393910(0x137))[_0x393910(0x19d)] && setTimeout(() => {
                            const _0x59c7ff = _0x393910;
                            if (_0x5a1808[_0x59c7ff(0x148)]) {
                                var _0x52491e = _0x1e041c('div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')['filter'](function () {
                                    const _0x172ad4 = _0x59c7ff;
                                    return _0x1e041c(this)[_0x172ad4(0x2c6)]()['length'] === 0x0 && this['textContent']['trim']() !== '';
                                });
                                _0x52491e?.[_0x59c7ff(0x263)]();
                            }
                            _0x17637a[_0x59c7ff(0x1e7)] = !![];
                        }, 0x96)) : (_0x17637a[_0x393910(0x1e7)] = ![], _0x1e041c(_0x393910(0x137))[_0x393910(0x19d)] && _0x1e041c(_0x393910(0x137))[_0x393910(0x1c3)](), _0x1e041c('.IG_DWSTORY_ALL')[_0x393910(0x19d)] && _0x1e041c(_0x393910(0x1f2))[_0x393910(0x1c3)](), _0x1e041c(_0x393910(0x360))[_0x393910(0x19d)] && _0x1e041c(_0x393910(0x360))[_0x393910(0x1c3)](), _0x1e041c(_0x393910(0x193))[_0x393910(0x19d)] && _0x1e041c(_0x393910(0x193))[_0x393910(0x1c3)](), _0x1e041c(_0x393910(0x2b1))['length'] && _0x1e041c(_0x393910(0x2b1))[_0x393910(0x1c3)](), _0x1e041c(_0x393910(0x24f))[_0x393910(0x19d)] && _0x1e041c(_0x393910(0x24f))[_0x393910(0x1c3)](), _0x1e041c('.IG_DWHINEWTAB')[_0x393910(0x19d)] && _0x1e041c(_0x393910(0x1cb))[_0x393910(0x1c3)](), _0x1e041c(_0x393910(0xed))[_0x393910(0x19d)] && _0x1e041c(_0x393910(0xed))[_0x393910(0x1c3)]());
                }
                _0x10fc72(0x12c), _0x17637a[_0x393910(0x353)] = new URL(location[_0x393910(0x173)])['pathname'];
            }
        }, _0x57add3);
        async function _0x44f80c() {
            const _0x379cbc = _0x4e7afc;
            _0x38ed82(!![]);
            let _0x4a47a4 = new Date()[_0x379cbc(0x220)](), _0x1df47c = Math[_0x379cbc(0x1fe)](_0x4a47a4 / 0x3e8), _0x48fcb7 = location[_0x379cbc(0x173)][_0x379cbc(0x13f)](/\/$/ig, '')[_0x379cbc(0x2fc)]('/')['at'](-0x1), _0x2ce4ca = await _0x1fc284(_0x48fcb7), _0x5e9377 = _0x2ce4ca[_0x379cbc(0x32c)][_0x379cbc(0x247)][0x0][_0x379cbc(0x347)][_0x379cbc(0xeb)];
            if (_0x5a1808[_0x379cbc(0x205)]) {
                let _0x5b44dd = 0x0;
                _0x23d0b8(_0x5b44dd, _0x2ce4ca['data'][_0x379cbc(0x247)][0x0][_0x379cbc(0x397)][_0x379cbc(0x19d)]), _0x2ce4ca['data'][_0x379cbc(0x247)][0x0][_0x379cbc(0x397)]['forEach']((_0x5ca133, _0xf0f3a7) => {
                    setTimeout(() => {
                        const _0x5d574d = a0_0x5e9f;
                        _0x5a1808['RENAME_PUBLISH_DATE'] && (_0x1df47c = _0x5ca133[_0x5d574d(0x170)]), _0x5ca133['display_resources']['sort'](function (_0x1bbe7f, _0x55523b) {
                            const _0x422fd8 = _0x5d574d;
                            if (_0x1bbe7f['config_width'] < _0x55523b[_0x422fd8(0xd5)])
                                return 0x1;
                            if (_0x1bbe7f[_0x422fd8(0xd5)] > _0x55523b['config_width'])
                                return -0x1;
                            return 0x0;
                        }), _0x5ca133[_0x5d574d(0x384)] ? _0x26afe2(_0x5ca133['video_resources'][0x0][_0x5d574d(0x338)], _0x5e9377, _0x5d574d(0x186), _0x1df47c, _0x5d574d(0x16e), _0x5ca133['id'])['then'](() => {
                            const _0x4f3715 = _0x5d574d;
                            _0x23d0b8(++_0x5b44dd, _0x2ce4ca[_0x4f3715(0x32c)]['reels_media'][0x0][_0x4f3715(0x397)][_0x4f3715(0x19d)]);
                        }) : _0x26afe2(_0x5ca133[_0x5d574d(0x12e)][0x0]['src'], _0x5e9377, 'highlights', _0x1df47c, 'jpg', _0x5ca133['id'])[_0x5d574d(0x163)](() => {
                            const _0x3f5c04 = _0x5d574d;
                            _0x23d0b8(++_0x5b44dd, _0x2ce4ca['data']['reels_media'][0x0][_0x3f5c04(0x397)][_0x3f5c04(0x19d)]);
                        });
                    }, 0x64 * _0xf0f3a7);
                });
            } else
                _0x2c6086(![], !![]), _0x18ec85(_0x2ce4ca, _0x379cbc(0x186));
        }
        async function _0x378eb6(_0x1e0505, _0x260382) {
            const _0x401a6b = _0x4e7afc;
            var _0x42b8d5 = _0x1e041c('body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]')[_0x401a6b(0x340)](function () {
                const _0x11261e = _0x401a6b;
                return _0x1e041c(this)[_0x11261e(0x2ab)](_0x11261e(0x173))[_0x11261e(0x2fc)]('/')[_0x11261e(0x340)](_0x3e5c75 => _0x3e5c75['length'] > 0x0)[_0x11261e(0x19d)] === 0x1;
            })[_0x401a6b(0x2c0)]()['attr'](_0x401a6b(0x173))[_0x401a6b(0x2fc)]('/')['filter'](_0x5ea5a0 => _0x5ea5a0[_0x401a6b(0x19d)] > 0x0)['at'](0x0);
            if (_0x1e0505) {
                let _0x2910b4 = new Date()[_0x401a6b(0x220)](), _0x5371d0 = Math[_0x401a6b(0x1fe)](_0x2910b4 / 0x3e8), _0x619309 = location[_0x401a6b(0x173)]['replace'](/\/$/ig, '')[_0x401a6b(0x2fc)]('/')['at'](-0x1), _0x2d2f13 = _0x1e041c(_0x401a6b(0x2c8))['length'] || _0x1e041c(_0x401a6b(0x1ef))[_0x401a6b(0x19d)] || _0x1e041c(_0x401a6b(0xfc))[_0x401a6b(0x10c)](_0x401a6b(0x2a9))[_0x401a6b(0x19d)], _0x5bb412 = 0x0;
                _0x38ed82(!![]);
                if (_0x17637a[_0x401a6b(0x358)][_0x401a6b(0x186)][_0x619309]) {
                    _0x1ece4c(_0x401a6b(0x341), _0x619309);
                    let _0x4f4893 = _0x17637a[_0x401a6b(0x358)][_0x401a6b(0x186)][_0x619309]['data']['reels_media'][0x0]['items'][_0x401a6b(0x19d)];
                    _0x42b8d5 = _0x17637a['GL_dataCache'][_0x401a6b(0x186)][_0x619309]['data']['reels_media'][0x0][_0x401a6b(0x347)][_0x401a6b(0xeb)], _0x5bb412 = _0x17637a[_0x401a6b(0x358)][_0x401a6b(0x186)][_0x619309][_0x401a6b(0x32c)][_0x401a6b(0x247)][0x0][_0x401a6b(0x397)][_0x4f4893 - _0x2d2f13];
                } else {
                    let _0x22ccb9 = await _0x1fc284(_0x619309), _0x3ee771 = _0x22ccb9[_0x401a6b(0x32c)]['reels_media'][0x0][_0x401a6b(0x397)][_0x401a6b(0x19d)];
                    _0x42b8d5 = _0x22ccb9['data']['reels_media'][0x0][_0x401a6b(0x347)][_0x401a6b(0xeb)], _0x5bb412 = _0x22ccb9['data']['reels_media'][0x0][_0x401a6b(0x397)][_0x3ee771 - _0x2d2f13], _0x17637a['GL_dataCache']['highlights'][_0x619309] = _0x22ccb9;
                }
                _0x1ece4c('onHighlightsStory', _0x619309, _0x17637a[_0x401a6b(0x358)]['highlights'][_0x619309]);
                _0x5a1808[_0x401a6b(0x28e)] && (_0x5371d0 = _0x5bb412['taken_at_timestamp']);
                if (_0x5a1808[_0x401a6b(0x386)] && !_0x17637a[_0x401a6b(0x239)]) {
                    let _0x1ece79 = await _0x506e20(_0x5bb412['id']);
                    _0x1ece79['status'] === 'ok' ? _0x1ece79[_0x401a6b(0x397)][0x0][_0x401a6b(0x365)] ? _0x260382 ? _0x2f686c(_0x1ece79[_0x401a6b(0x397)][0x0][_0x401a6b(0x365)][0x0][_0x401a6b(0x2dc)]) : _0x26afe2(_0x1ece79['items'][0x0][_0x401a6b(0x365)][0x0]['url'], _0x42b8d5, _0x401a6b(0x186), _0x5371d0, 'mp4', _0x1ece79[_0x401a6b(0x397)][0x0]['id']) : _0x260382 ? _0x2f686c(_0x1ece79['items'][0x0][_0x401a6b(0x31c)][_0x401a6b(0xd7)][0x0]['url']) : _0x26afe2(_0x1ece79[_0x401a6b(0x397)][0x0][_0x401a6b(0x31c)][_0x401a6b(0xd7)][0x0][_0x401a6b(0x2dc)], _0x42b8d5, _0x401a6b(0x186), _0x5371d0, _0x401a6b(0x255), _0x1ece79[_0x401a6b(0x397)][0x0]['id']) : (_0x5a1808[_0x401a6b(0x155)] ? (delete _0x17637a['GL_dataCache']['highlights'][_0x619309], _0x17637a[_0x401a6b(0x239)] = !![], _0x378eb6(!![], _0x260382)) : alert(_0x401a6b(0x2a0) + _0x1ece79[_0x401a6b(0x17b)]), _0x1ece4c(_0x1ece79));
                } else
                    _0x5bb412[_0x401a6b(0x384)] ? _0x260382 ? _0x2f686c(_0x5bb412[_0x401a6b(0x1ad)]['at'](-0x1)[_0x401a6b(0x338)], _0x42b8d5) : _0x26afe2(_0x5bb412[_0x401a6b(0x1ad)]['at'](-0x1)[_0x401a6b(0x338)], _0x42b8d5, 'highlights', _0x5371d0, 'mp4', _0x5bb412['id']) : _0x260382 ? _0x2f686c(_0x5bb412[_0x401a6b(0x12e)]['at'](-0x1)['src'], _0x42b8d5) : _0x26afe2(_0x5bb412['display_resources']['at'](-0x1)['src'], _0x42b8d5, _0x401a6b(0x186), _0x5371d0, _0x401a6b(0x255), _0x5bb412['id']), _0x17637a[_0x401a6b(0x239)] = ![];
                _0x38ed82(![]);
            } else {
                if (!_0x1e041c(_0x401a6b(0x2b1))[_0x401a6b(0x19d)]) {
                    let _0x5f37a0 = null;
                    _0x1e041c(_0x401a6b(0x2ff))[_0x401a6b(0x19d)] > 0x0 ? _0x5f37a0 = _0x1e041c('body\x20>\x20div\x20section:visible._ac0a') : (_0x5f37a0 = _0x1e041c(_0x401a6b(0x212)), _0x5f37a0[_0x401a6b(0x1f7)]('position', _0x401a6b(0x2ce)));
                    if (_0x5f37a0['length'] === 0x0) {
                        let _0x38a132 = _0x1e041c('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0xe5a752 = 0x0;
                        _0x38a132['each'](function () {
                            const _0x55e123 = _0x401a6b;
                            _0x1e041c(this)[_0x55e123(0x2dd)]() > _0xe5a752 && (_0xe5a752 = _0x1e041c(this)[_0x55e123(0x2dd)](), _0x5f37a0 = _0x1e041c(this)[_0x55e123(0x2c6)]('div')[_0x55e123(0x2c0)]());
                        });
                    }
                    if (_0x5f37a0 != null) {
                        _0x5f37a0[_0x401a6b(0x2d6)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x1f01e7('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x188dac[_0x401a6b(0x2c5)] + _0x401a6b(0x174)), _0x5f37a0[_0x401a6b(0x2d6)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x1f01e7(_0x401a6b(0x369)) + _0x401a6b(0x1fc) + _0x188dac['NEW_TAB'] + _0x401a6b(0x174));
                        let _0x5b79f9 = _0x623179(_0x42b8d5);
                        _0x5b79f9[_0x401a6b(0x19d)] > 0x1 && _0x5f37a0[_0x401a6b(0x2d6)](_0x401a6b(0x232) + _0x1f01e7(_0x401a6b(0x1f0)) + _0x401a6b(0xd0) + _0x188dac[_0x401a6b(0x183)] + _0x401a6b(0x174));
                        let _0x4f28ad = _0x5b79f9[_0x401a6b(0x1d9)](_0x401a6b(0x2ee))[_0x401a6b(0x10c)](_0x401a6b(0x187))?.[_0x401a6b(0x2ab)](_0x401a6b(0x1df));
                        _0x4f28ad != null && _0x5b79f9['parents']('div[class]')[_0x401a6b(0x10c)]('time[datetime]')[_0x401a6b(0x307)](_0x4f28ad), _0x5f37a0[_0x401a6b(0x10c)](_0x401a6b(0x10a))['each'](function () {
                            const _0x299202 = _0x401a6b;
                            _0x1e041c(this)['on'](_0x299202(0x240), function () {
                                const _0x5d18b9 = _0x299202;
                                !_0x1e041c(this)[_0x5d18b9(0x32c)](_0x5d18b9(0x25f)) && (_0x5f37a0[_0x5d18b9(0x10c)]('.IG_DWHISTORY_THUMBNAIL')[_0x5d18b9(0x19d)] === 0x0 ? (_0x1e041c(this)[_0x5d18b9(0x2ab)](_0x5d18b9(0x297), !![]), _0x1e041c(_0x5d18b9(0xed))[_0x5d18b9(0x1c3)](), _0x1ece4c('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x1e041c(this)[_0x5d18b9(0x2ab)](_0x5d18b9(0x297), !![]), _0x1ece4c(_0x5d18b9(0x38e))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x28db75(_0x5724fa) {
            const _0x3821ad = _0x4e7afc;
            if (_0x5724fa) {
                let _0x1d431c = new Date()[_0x3821ad(0x220)](), _0x3a7f0d = Math[_0x3821ad(0x1fe)](_0x1d431c / 0x3e8), _0x18b58a = location[_0x3821ad(0x173)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x42ca92 = '', _0x224be2 = _0x1e041c('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x3821ad(0x19d)] || _0x1e041c('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x3821ad(0x19d)] || _0x1e041c(_0x3821ad(0xfc))['find'](_0x3821ad(0x2a9))[_0x3821ad(0x19d)], _0x9a58a5 = '';
                _0x38ed82(!![]);
                if (_0x17637a[_0x3821ad(0x358)]['highlights'][_0x18b58a]) {
                    _0x1ece4c(_0x3821ad(0x341), _0x18b58a);
                    let _0x53c677 = _0x17637a[_0x3821ad(0x358)][_0x3821ad(0x186)][_0x18b58a]['data'][_0x3821ad(0x247)][0x0][_0x3821ad(0x397)]['length'];
                    _0x42ca92 = _0x17637a[_0x3821ad(0x358)][_0x3821ad(0x186)][_0x18b58a]['data']['reels_media'][0x0]['owner'][_0x3821ad(0xeb)], _0x9a58a5 = _0x17637a[_0x3821ad(0x358)]['highlights'][_0x18b58a][_0x3821ad(0x32c)][_0x3821ad(0x247)][0x0][_0x3821ad(0x397)][_0x53c677 - _0x224be2];
                } else {
                    let _0x19fab7 = await _0x1fc284(_0x18b58a), _0x131118 = _0x19fab7['data'][_0x3821ad(0x247)][0x0]['items'][_0x3821ad(0x19d)];
                    _0x42ca92 = _0x19fab7['data']['reels_media'][0x0]['owner'][_0x3821ad(0xeb)], _0x9a58a5 = _0x19fab7[_0x3821ad(0x32c)]['reels_media'][0x0][_0x3821ad(0x397)][_0x131118 - _0x224be2], _0x17637a['GL_dataCache'][_0x3821ad(0x186)][_0x18b58a] = _0x19fab7;
                }
                _0x5a1808[_0x3821ad(0x28e)] && (_0x3a7f0d = _0x9a58a5['taken_at_timestamp']);
                if (_0x5a1808[_0x3821ad(0x386)] && !_0x17637a[_0x3821ad(0x239)]) {
                    let _0x5d7f10 = await _0x506e20(_0x9a58a5['id']);
                    _0x5d7f10[_0x3821ad(0x20b)] === 'ok' ? _0x26afe2(_0x5d7f10['items'][0x0][_0x3821ad(0x31c)][_0x3821ad(0xd7)][0x0][_0x3821ad(0x2dc)], _0x42ca92, _0x3821ad(0x186), _0x3a7f0d, _0x3821ad(0x255), _0x18b58a) : (_0x5a1808[_0x3821ad(0x155)] ? (delete _0x17637a[_0x3821ad(0x358)][_0x3821ad(0x186)][_0x18b58a], _0x17637a[_0x3821ad(0x239)] = !![], _0x28db75(!![])) : alert(_0x3821ad(0x2a0) + _0x5d7f10['message']), _0x1ece4c(_0x5d7f10));
                } else
                    _0x26afe2(_0x9a58a5[_0x3821ad(0x12e)]['at'](-0x1)[_0x3821ad(0x338)], _0x42ca92, _0x3821ad(0x186), _0x3a7f0d, _0x3821ad(0x255), _0x18b58a), _0x17637a[_0x3821ad(0x239)] = ![];
                _0x38ed82(![]);
            } else {
                if (_0x1e041c(_0x3821ad(0x286))[_0x3821ad(0x19d)]) {
                    if (!_0x1e041c(_0x3821ad(0xed))['length']) {
                        let _0x3adc97 = null;
                        _0x1e041c(_0x3821ad(0x2ff))[_0x3821ad(0x19d)] > 0x0 ? _0x3adc97 = _0x1e041c(_0x3821ad(0x2d5)) : (_0x3adc97 = _0x1e041c('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x3adc97[_0x3821ad(0x1f7)](_0x3821ad(0x141), _0x3821ad(0x2ce)));
                        if (_0x3adc97[_0x3821ad(0x19d)] === 0x0) {
                            let _0x4ceaf7 = _0x1e041c(_0x3821ad(0x202)), _0x1fe89b = 0x0;
                            _0x4ceaf7[_0x3821ad(0x273)](function () {
                                const _0x265ea0 = _0x3821ad;
                                _0x1e041c(this)[_0x265ea0(0x2dd)]() > _0x1fe89b && (_0x1fe89b = _0x1e041c(this)[_0x265ea0(0x2dd)](), _0x3adc97 = _0x1e041c(this)[_0x265ea0(0x2c6)](_0x265ea0(0x18e))['first']());
                            });
                        }
                        _0x3adc97 != null && _0x3adc97['append'](_0x3821ad(0x27e) + _0x1f01e7('THUMBNAIL_INTRO') + _0x3821ad(0x19e) + _0x188dac[_0x3821ad(0x373)] + '</div>');
                    }
                } else
                    _0x1e041c(_0x3821ad(0xed))[_0x3821ad(0x1c3)]();
            }
        }
        function _0x15e15f(_0x3eaa2d, _0x334db3) {
            const _0xfcb408 = _0x4e7afc;
            _0x334db3 === !![] && (_0x1ece4c('hasReferrer', _0xfcb408(0xf7)), _0x1e041c(_0xfcb408(0x11b))[_0xfcb408(0x340)](function () {
                const _0x477c77 = _0xfcb408;
                return _0x1e041c(this)['find'](_0x477c77(0x259))[_0x477c77(0x19d)] === 0x0;
            })[_0xfcb408(0x2e7)](_0xfcb408(0x1ae)));
            if (_0x3eaa2d == ![]) {
                const _0x16e851 = 0x64;
                let _0x48fef2 = 0x0;
                var _0x12103e = setInterval(() => {
                    const _0x27b96a = _0xfcb408;
                    (_0x48fef2 > _0x16e851 || _0x1e041c('article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]')[_0x27b96a(0x19d)] > 0x0) && (clearInterval(_0x12103e), _0x48fef2 > _0x16e851 && console[_0x27b96a(0x380)](_0x27b96a(0x1a9), _0x27b96a(0xdb))), _0x1ece4c(_0x27b96a(0x1a9), _0x27b96a(0x308)), _0x1970c6(), _0x48fef2++;
                }, 0x32);
            } else
                _0x1970c6();
        }
        function _0x48b4a6(_0x59a0b0) {
            const _0x112b05 = _0x4e7afc;
            _0x5a1808[_0x112b05(0x101)] && _0x59a0b0[_0x112b05(0x10c)](_0x112b05(0x27d))['each'](function () {
                _0x1e041c(this)['on']('ended', function () {
                    const _0x1ed2ac = a0_0x5e9f;
                    !_0x1e041c(this)[_0x1ed2ac(0x32c)](_0x1ed2ac(0x1c9)) && (_0x1e041c(this)[_0x1ed2ac(0x2ab)](_0x1ed2ac(0x32b), !![]), this['pause'](), _0x1ece4c('(post)\x20Added\x20video\x20event\x20listener\x20#loop'));
                });
            });
            _0x5a1808[_0x112b05(0x118)] && _0x59a0b0[_0x112b05(0x10c)]('video')[_0x112b05(0x273)](function () {
                const _0x1477ec = _0x112b05;
                _0x1e041c(this)['on'](_0x1477ec(0x242), function () {
                    const _0x1ae503 = _0x1477ec;
                    !_0x1e041c(this)[_0x1ae503(0x32c)](_0x1ae503(0x375)) && (_0x1e041c(this)[_0x1ae503(0x2ab)](_0x1ae503(0x34b), !![]), this['volume'] = _0x17637a[_0x1ae503(0x1a1)], _0x1ece4c(_0x1ae503(0x1f4)));
                });
            });
            _0x5a1808[_0x112b05(0x351)] && _0x59a0b0['find'](_0x112b05(0x27d))[_0x112b05(0x273)](function () {
                const _0x81c6eb = _0x112b05;
                if (!_0x1e041c(this)['data']('controls')) {
                    let _0x325df9 = _0x1e041c(this);
                    _0x1ece4c(_0x81c6eb(0x2ea)), _0x5a1808[_0x81c6eb(0x118)] && (this['volume'] = _0x17637a[_0x81c6eb(0x1a1)], _0x1e041c(this)['on']('loadstart', function () {
                        const _0x4970a4 = _0x81c6eb;
                        this['volume'] = _0x17637a[_0x4970a4(0x1a1)];
                    })), _0x1e041c(this)['on'](_0x81c6eb(0x278), function (_0x544601) {
                        const _0x113e7d = _0x81c6eb;
                        _0x544601[_0x113e7d(0x2a1)](), _0x325df9[_0x113e7d(0x1f7)](_0x113e7d(0x33c), '-1'), _0x325df9['removeAttr']('controls');
                    }), _0x1e041c(this)[_0x81c6eb(0x2cb)]()[_0x81c6eb(0x10c)](_0x81c6eb(0x281))['first']()['on'](_0x81c6eb(0x278), function (_0x571aa2) {
                        const _0x1815d1 = _0x81c6eb;
                        _0x571aa2[_0x1815d1(0x2a1)](), _0x325df9[_0x1815d1(0x1f7)]('z-index', '2'), _0x325df9[_0x1815d1(0x2ab)]('controls', !![]);
                    }), _0x1e041c(this)['on'](_0x81c6eb(0x32f), function () {
                        const _0x552138 = _0x81c6eb;
                        let _0x4dec59 = _0x1e041c(this)[_0x552138(0x2cb)]()[_0x552138(0x10c)](_0x552138(0x281))[_0x552138(0x10c)](_0x552138(0x27c))[_0x552138(0x340)](function (_0x3bfa1e) {
                            const _0x2b8de8 = _0x552138;
                            return _0x1e041c(this)[_0x2b8de8(0x2dd)]() <= 0x40 && _0x1e041c(this)[_0x2b8de8(0x1b2)]() <= 0x40 && _0x1e041c(this)[_0x2b8de8(0x10c)](_0x2b8de8(0x2a2))[_0x2b8de8(0x19d)] > 0x0;
                        });
                        var _0x148520 = _0x4dec59[_0x552138(0x10c)](_0x552138(0x337))[_0x552138(0x19d)] === 0x0;
                        this['muted'] != _0x148520 && (this[_0x552138(0x10b)] = _0x17637a[_0x552138(0x1a1)], _0x4dec59?.[_0x552138(0xfa)](_0x552138(0x263))), _0x1e041c(this)[_0x552138(0x2ab)](_0x552138(0x21c)) && (_0x17637a[_0x552138(0x1a1)] = this[_0x552138(0x10b)], GM_setValue('G_VIDEO_VOLUME', this['volume'])), this[_0x552138(0x10b)] == _0x17637a[_0x552138(0x1a1)] && _0x1e041c(this)[_0x552138(0x2ab)]('data-completed', !![]);
                    }), _0x1e041c(this)[_0x81c6eb(0x1f7)]('position', _0x81c6eb(0x2b4)), _0x1e041c(this)['css']('z-index', '2'), _0x1e041c(this)['attr'](_0x81c6eb(0x24b), !![]), _0x1e041c(this)['attr']('controls', !![]);
                }
            });
            var _0x1d4e5c = _0x59a0b0[_0x112b05(0x10c)]('video'), _0x46236a = _0x59a0b0[_0x112b05(0x10c)](_0x112b05(0x281))['first']();
            _0x59d4a2(_0x1d4e5c, _0x46236a, _0x112b05(0x321), _0x112b05(0x2fb));
        }
        ;
        function _0x1970c6() {
            const _0x5f3650 = _0x4e7afc;
            _0x1e041c(_0x5f3650(0x1f1))['map'](function (_0x2d2459) {
                const _0x5b0562 = _0x5f3650;
                return _0x1e041c(this)['is'](_0x5b0562(0x198)) ? _0x1e041c(this)[_0x5b0562(0x2cb)]()[_0x5b0562(0x2cb)]()['parent']()['parent']()[0x0] : this;
            })['filter'](function () {
                const _0x3942e2 = _0x5f3650;
                return _0x1e041c(this)[_0x3942e2(0x1b2)]() > 0x0 && _0x1e041c(this)[_0x3942e2(0x2dd)]() > 0x0;
            })['each'](function (_0x27bfcd) {
                const _0x24026f = _0x5f3650;
                if (!_0x1e041c(this)[_0x24026f(0x2ab)]('data-snig') && !_0x1e041c(this)[_0x24026f(0x129)](_0x24026f(0x26c)) && !_0x1e041c(this)['children']('article')?.[_0x24026f(0x129)](_0x24026f(0x26c)) && _0x1e041c(this)[_0x24026f(0x1d9)]('div#scrollview')[_0x24026f(0x19d)] === 0x0) {
                    _0x1ece4c(_0x24026f(0x14d), _0x1e041c(this));
                    const _0x2d7ec4 = _0x1e041c(this), _0xc9583 = this['tagName'], _0x35a745 = '._acay\x20._acaz';
                    var _0x355596;
                    if (_0xc9583 === _0x24026f(0x311) && _0x27bfcd != 0x0)
                        return;
                    const _0x361e9b = _0x2d7ec4[_0x24026f(0x2c6)](_0x24026f(0x18e))[_0x24026f(0x2c6)](_0x24026f(0x18e));
                    if (_0x361e9b[_0x24026f(0x19d)] === 0x0)
                        return;
                    _0x1ece4c(_0x24026f(0x22e), _0x361e9b);
                    if (_0x2d7ec4[_0x24026f(0x10c)](_0x24026f(0x352))[_0x24026f(0x19d)] > 0x0) {
                        _0x2d7ec4[_0x24026f(0x10c)](_0x24026f(0x1a2))[_0x24026f(0x19d)] > 0x0 && _0x2d7ec4[_0x24026f(0x10c)]('._acay\x20+\x20.x24i39r')[_0x24026f(0x1f7)]('top', _0x24026f(0x2a3));
                        const _0x1ae9dd = _0x2d7ec4['find'](_0x24026f(0x352))[_0x24026f(0x2c0)]()[_0x24026f(0x2cb)]()[0x0];
                        var _0x233c5d = new MutationObserver(function () {
                            const _0x2ba9ce = _0x24026f;
                            _0x2d7ec4[_0x2ba9ce(0x10c)]('._acay\x20+\x20.x24i39r')['css'](_0x2ba9ce(0x125), _0x2ba9ce(0x2a3));
                        });
                        _0x233c5d[_0x24026f(0x355)](_0x1ae9dd, { 'childList': !![] });
                    }
                    _0x361e9b['eq'](_0xc9583 === _0x24026f(0x311) ? 0x0 : _0x361e9b['length'] - 0x2)[_0x24026f(0x2d6)]('<div\x20class=\x22button_wrapper\x22>');
                    const _0x3f619a = _0x24026f(0x317) + _0x1f01e7('DW') + '\x22\x20class=\x22IG_DW_MAIN\x22>' + _0x188dac[_0x24026f(0x2c5)] + '</div>', _0x57ad11 = _0x24026f(0x330) + _0x1f01e7(_0x24026f(0x369)) + _0x24026f(0x310) + _0x188dac[_0x24026f(0x369)] + _0x24026f(0x174), _0x10452c = _0x24026f(0x27e) + _0x1f01e7(_0x24026f(0x16a)) + _0x24026f(0x288) + _0x188dac[_0x24026f(0x373)] + _0x24026f(0x174), _0x106786 = _0x24026f(0xd9) + _0x1f01e7(_0x24026f(0x2f9)) + '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>' + _0x188dac['FULLSCREEN'] + _0x24026f(0x174);
                    _0x361e9b[_0x24026f(0x10c)](_0x24026f(0x254))[_0x24026f(0x2d6)](_0x3f619a);
                    const _0x4cd739 = _0x2d7ec4['find'](_0x35a745)[_0x24026f(0x19d)];
                    if (_0x4cd739 > 0x1 && _0x5a1808['DIRECT_DOWNLOAD_VISIBLE_RESOURCE'] && !_0x5a1808[_0x24026f(0xfd)]) {
                        const _0x418da6 = _0x24026f(0x232) + _0x1f01e7('DW_ALL') + _0x24026f(0x35a) + _0x188dac[_0x24026f(0x183)] + '</div>';
                        _0x361e9b[_0x24026f(0x10c)]('.button_wrapper')[_0x24026f(0x2d6)](_0x418da6);
                    }
                    _0x361e9b[_0x24026f(0x10c)]('.button_wrapper')[_0x24026f(0x2d6)](_0x57ad11), setTimeout(() => {
                        const _0x3ad15d = _0x24026f;
                        if (_0x361e9b['eq'](_0xc9583 === _0x3ad15d(0x311) ? 0x0 : _0x361e9b[_0x3ad15d(0x19d)] - 0x2)[_0x3ad15d(0x10c)](_0x3ad15d(0x33e))[_0x3ad15d(0x19d)] === 0x0)
                            _0x361e9b[_0x3ad15d(0x10c)]('video')[_0x3ad15d(0x19d)] > 0x0 ? _0x361e9b[_0x3ad15d(0x10c)]('.button_wrapper')[_0x3ad15d(0x2d6)](_0x10452c) : (_0x355596 = _0x2d7ec4[_0x3ad15d(0x10c)]('img')[_0x3ad15d(0x340)](function () {
                                const _0x909869 = _0x3ad15d;
                                return _0x1e041c(this)[_0x909869(0x2dd)]() > 0xc8 && _0x1e041c(this)[_0x909869(0x1b2)]() > 0xc8;
                            })['attr'](_0x3ad15d(0x338)), _0x361e9b['find']('.button_wrapper')[_0x3ad15d(0x2d6)](_0x106786));
                        else {
                            const _0x8876ab = (_0x489229, _0x2f2779) => {
                                    const _0x19db56 = _0x3ad15d;
                                    _0x489229[_0x19db56(0x396)](_0x23789d => {
                                        const _0x4a9fdf = _0x19db56;
                                        if (_0x23789d[_0x4a9fdf(0x2f2)]) {
                                            var _0x42e73a = _0x1e041c(_0x23789d[_0x4a9fdf(0x36f)]);
                                            _0x361e9b[_0x4a9fdf(0x10c)](_0x4a9fdf(0x206))?.['remove'](), _0x361e9b[_0x4a9fdf(0x10c)](_0x4a9fdf(0x282))?.['remove'](), _0x42e73a[_0x4a9fdf(0x10c)](_0x4a9fdf(0x27d))[_0x4a9fdf(0x19d)] > 0x0 ? (_0x361e9b[_0x4a9fdf(0x10c)](_0x4a9fdf(0x206))[_0x4a9fdf(0x19d)] === 0x0 && _0x361e9b[_0x4a9fdf(0x10c)](_0x4a9fdf(0x254))[_0x4a9fdf(0x2d6)](_0x10452c), _0x48b4a6(_0x2d7ec4)) : (_0x355596 = _0x42e73a[_0x4a9fdf(0x10c)]('img')[_0x4a9fdf(0x2ab)]('src'), _0x361e9b[_0x4a9fdf(0x10c)]('.button_wrapper')[_0x4a9fdf(0x2d6)](_0x106786));
                                        }
                                    });
                                }, _0x332761 = new IntersectionObserver(_0x8876ab, {
                                    'root': _0x2d7ec4[_0x3ad15d(0x10c)](_0x3ad15d(0x31d))[_0x3ad15d(0x2c0)]()[_0x3ad15d(0x2cb)]()[_0x3ad15d(0x2cb)]()[_0x3ad15d(0x2cb)]()[0x0],
                                    'rootMargin': '0px',
                                    'threshold': 0.1
                                }), _0x4b7f74 = new MutationObserver(function (_0x123064, _0x1ed4a9) {
                                    const _0x2a7022 = _0x3ad15d;
                                    var _0xa5fc92 = _0x123064['at'](0x0)?.[_0x2a7022(0x36f)];
                                    _0x1e041c(_0xa5fc92)[_0x2a7022(0x10c)]('li._acaz')['each'](function () {
                                        const _0x49b706 = _0x2a7022;
                                        _0x332761[_0x49b706(0x355)](this);
                                    });
                                });
                            _0x2d7ec4['find'](_0x3ad15d(0x33e))['each'](function () {
                                const _0x2a763e = _0x3ad15d;
                                _0x332761[_0x2a763e(0x355)](this);
                            });
                            const _0x31e887 = _0x361e9b['eq'](_0xc9583 === _0x3ad15d(0x311) ? 0x0 : _0x361e9b[_0x3ad15d(0x19d)] - 0x2)[_0x3ad15d(0x10c)](_0x3ad15d(0x33e))?.['parent']()[0x0], _0x140e03 = _0x361e9b['eq'](_0xc9583 === 'DIV' ? 0x0 : _0x361e9b[_0x3ad15d(0x19d)] - 0x2)['find'](_0x3ad15d(0x33e))?.[_0x3ad15d(0x2cb)]()['parent']()[0x0];
                            _0x31e887 && _0x4b7f74[_0x3ad15d(0x355)](_0x31e887, { 'childList': !![] }), _0x140e03 && _0x4b7f74[_0x3ad15d(0x355)](_0x140e03, { 'attributes': !![] });
                        }
                    }, 0x32), _0x361e9b[_0x24026f(0x1f7)](_0x24026f(0x141), 'relative'), _0x48b4a6(_0x2d7ec4), _0x17637a['GL_registerEventList']['push']({
                        'element': this,
                        'trigger': [
                            _0x24026f(0x206),
                            _0x24026f(0x231),
                            '.IG_DW_ALL_MAIN',
                            _0x24026f(0x259),
                            _0x24026f(0x282)
                        ]
                    }), _0x1e041c(this)['on'](_0x24026f(0x263), _0x24026f(0x282), function () {
                        const _0x3a5157 = _0x24026f;
                        _0x355596 != null ? _0x9b70bc(_0x355596) : alert(_0x3a5157(0xf4));
                    }), _0x1e041c(this)['on'](_0x24026f(0x263), _0x24026f(0x206), function () {
                        const _0x13479a = _0x24026f;
                        _0x38ed82(!![]), _0x17637a[_0x13479a(0x36e)] = _0x2d7ec4[_0x13479a(0x2ab)](_0x13479a(0x1c1)), _0x17637a[_0x13479a(0x1c8)] = location[_0x13479a(0x197)][_0x13479a(0x13f)](/\/$/, '')[_0x13479a(0x2fc)]('/')['at'](-0x1) || _0x2d7ec4[_0x13479a(0x10c)]('a[href^=\x22/p/\x22]')[_0x13479a(0x2c0)]()['attr'](_0x13479a(0x173))[_0x13479a(0x2fc)]('/')['at'](0x2) || _0x1e041c(this)[_0x13479a(0x2cb)]()[_0x13479a(0x2cb)]()[_0x13479a(0x2cb)]()['children'](_0x13479a(0xc3))[_0x13479a(0x2c6)](_0x13479a(0x18e))[_0x13479a(0x2c6)]('div:last-child')[_0x13479a(0x10c)](_0x13479a(0x1eb))['last']()['attr'](_0x13479a(0x173))[_0x13479a(0x2fc)]('/')['at'](0x2);
                        var _0x3eb579 = _0x51945f(_0x2d7ec4);
                        _0x2c6086(!![], ![]), _0xbf01e8(_0x17637a[_0x13479a(0x1c8)], _0x13479a(0x11d), '')[_0x13479a(0x163)](() => {
                            let _0x3017f4 = setInterval(() => {
                                const _0x4233d3 = a0_0x5e9f;
                                if (_0x1e041c(_0x4233d3(0x361))['length'] > 0x0) {
                                    clearInterval(_0x3017f4);
                                    var _0x3ec18d = _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x3eb579 + 0x1) + '\x22]')?.[_0x4233d3(0x2cb)]()[_0x4233d3(0x10c)]('.videoThumbnail')?.[_0x4233d3(0x2c0)]();
                                    _0x3ec18d != null && _0x3ec18d[_0x4233d3(0x19d)] > 0x0 ? _0x3ec18d[_0x4233d3(0xfa)]('click') : alert('Can\x20not\x20find\x20thumbnail\x20url.'), _0x38ed82(![]), _0x1e041c(_0x4233d3(0x36a))[_0x4233d3(0x1c3)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x1e041c(this)['on'](_0x24026f(0x263), _0x24026f(0x231), function () {
                        const _0x9f3f28 = _0x24026f;
                        _0x38ed82(!![]), _0x17637a[_0x9f3f28(0x36e)] = _0x2d7ec4[_0x9f3f28(0x2ab)](_0x9f3f28(0x1c1)), _0x17637a['GL_postPath'] = location['pathname'][_0x9f3f28(0x13f)](/\/$/, '')[_0x9f3f28(0x2fc)]('/')['at'](-0x1) || _0x2d7ec4[_0x9f3f28(0x10c)](_0x9f3f28(0x1eb))['first']()[_0x9f3f28(0x2ab)](_0x9f3f28(0x173))[_0x9f3f28(0x2fc)]('/')['at'](0x2) || _0x1e041c(this)['parent']()[_0x9f3f28(0x2cb)]()[_0x9f3f28(0x2cb)]()[_0x9f3f28(0x2c6)](_0x9f3f28(0xc3))[_0x9f3f28(0x2c6)](_0x9f3f28(0x18e))['children'](_0x9f3f28(0xc3))[_0x9f3f28(0x10c)](_0x9f3f28(0x1eb))[_0x9f3f28(0x11f)]()[_0x9f3f28(0x2ab)](_0x9f3f28(0x173))['split']('/')['at'](0x2);
                        var _0x5b063c = _0x51945f(_0x2d7ec4);
                        _0x2c6086(!![], ![]), _0xbf01e8(_0x17637a[_0x9f3f28(0x1c8)], _0x9f3f28(0x11d), '')[_0x9f3f28(0x163)](() => {
                            let _0x47d4d0 = setInterval(() => {
                                const _0x3f863a = a0_0x5e9f;
                                if (_0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x3f863a(0x19d)] > 0x0) {
                                    clearInterval(_0x47d4d0);
                                    var _0x5c8b3a = _0x1e041c(_0x3f863a(0x2e1) + (_0x5b063c + 0x1) + '\x22]');
                                    if (_0x5a1808[_0x3f863a(0x386)] && _0x5a1808[_0x3f863a(0x30d)])
                                        _0x11f6e9(_0x5c8b3a[_0x3f863a(0x2c0)]()[0x0], !![]);
                                    else {
                                        let _0x5366c3 = _0x5c8b3a?.['attr'](_0x3f863a(0x17e));
                                        if (_0x5366c3) {
                                            var _0x21c4d1 = new URL(_0x5366c3);
                                            _0x21c4d1['host'] = _0x3f863a(0x294), _0x2f686c(_0x21c4d1[_0x3f863a(0x173)]);
                                        } else
                                            alert(_0x3f863a(0x2e5));
                                    }
                                    _0x38ed82(![]), _0x1e041c(_0x3f863a(0x36a))[_0x3f863a(0x1c3)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x1e041c(this)['on'](_0x24026f(0x263), _0x24026f(0x34f), async function () {
                        const _0x59a76c = _0x24026f;
                        _0x17637a[_0x59a76c(0x36e)] = _0x2d7ec4[_0x59a76c(0x2ab)](_0x59a76c(0x1c1)), _0x17637a['GL_postPath'] = location[_0x59a76c(0x197)][_0x59a76c(0x13f)](/\/$/, '')[_0x59a76c(0x2fc)]('/')['at'](-0x1) || _0x2d7ec4['find'](_0x59a76c(0x1eb))[_0x59a76c(0x2c0)]()[_0x59a76c(0x2ab)]('href')[_0x59a76c(0x2fc)]('/')['at'](0x2) || _0x1e041c(this)['parent']()[_0x59a76c(0x2cb)]()[_0x59a76c(0x2cb)]()[_0x59a76c(0x2c6)]('div:last-child')[_0x59a76c(0x2c6)](_0x59a76c(0x18e))[_0x59a76c(0x2c6)](_0x59a76c(0xc3))[_0x59a76c(0x10c)](_0x59a76c(0x1eb))[_0x59a76c(0x11f)]()[_0x59a76c(0x2ab)]('href')[_0x59a76c(0x2fc)]('/')['at'](0x2), _0x2c6086(_0x5a1808[_0x59a76c(0xfd)], !![]), _0x1e041c('#article-id')[_0x59a76c(0x359)](_0x59a76c(0x22a) + _0x17637a[_0x59a76c(0x1c8)] + '\x22>' + _0x17637a[_0x59a76c(0x1c8)] + _0x59a76c(0x1db)), _0x1e041c(_0x59a76c(0x361))['each'](function () {
                            const _0x53c1be = _0x59a76c;
                            _0x1e041c(this)[_0x53c1be(0x1c2)](_0x53c1be(0x265)), _0x1e041c(this)[_0x53c1be(0x14b)](_0x53c1be(0x300)), _0x1e041c(this)['after'](_0x53c1be(0x330) + _0x1f01e7('NEW_TAB') + _0x53c1be(0x25c) + _0x188dac[_0x53c1be(0x369)] + _0x53c1be(0x174)), _0x1e041c(this)[_0x53c1be(0x2ab)](_0x53c1be(0x38b)) == _0x53c1be(0x27d) && _0x1e041c(this)[_0x53c1be(0x357)](_0x53c1be(0x27e) + _0x1f01e7('THUMBNAIL_INTRO') + _0x53c1be(0x171) + _0x188dac[_0x53c1be(0x373)] + '</div>');
                        }), _0xbf01e8(_0x17637a[_0x59a76c(0x1c8)], _0x59a76c(0x11d), _0x1f01e7(_0x59a76c(0xc7)))[_0x59a76c(0x163)](() => {
                            let _0x2e6442 = setInterval(() => {
                                const _0x441825 = a0_0x5e9f;
                                _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x441825(0x19d)] > 0x0 && (clearInterval(_0x2e6442), _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x441825(0x273)](function () {
                                    const _0x4b5be3 = _0x441825;
                                    _0x1e041c(this)[_0x4b5be3(0xfa)](_0x4b5be3(0x263));
                                }), _0x1e041c('.IG_POPUP_DIG')[_0x441825(0x1c3)]());
                            }, 0xfa);
                        });
                    }), _0x1e041c(this)['on']('click', _0x24026f(0x259), async function () {
                        const _0x1502c9 = _0x24026f;
                        _0x17637a[_0x1502c9(0x36e)] = _0x2d7ec4[_0x1502c9(0x2ab)](_0x1502c9(0x1c1)), _0x17637a[_0x1502c9(0x1c8)] = location[_0x1502c9(0x197)][_0x1502c9(0x13f)](/\/$/, '')['split']('/')['at'](-0x1) || _0x2d7ec4[_0x1502c9(0x10c)](_0x1502c9(0x1eb))[_0x1502c9(0x2c0)]()[_0x1502c9(0x2ab)](_0x1502c9(0x173))['split']('/')['at'](0x2) || _0x1e041c(this)[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()['parent']()[_0x1502c9(0x2c6)](_0x1502c9(0xc3))['children'](_0x1502c9(0x18e))[_0x1502c9(0x2c6)](_0x1502c9(0xc3))[_0x1502c9(0x10c)](_0x1502c9(0x1eb))[_0x1502c9(0x11f)]()['attr'](_0x1502c9(0x173))['split']('/')['at'](0x2), _0x2c6086(_0x5a1808[_0x1502c9(0xfd)], !![]), _0x1e041c(_0x1502c9(0xce))[_0x1502c9(0x359)](_0x1502c9(0x22a) + _0x17637a[_0x1502c9(0x1c8)] + '\x22>' + _0x17637a[_0x1502c9(0x1c8)] + '</a>');
                        if (_0x5a1808['DIRECT_DOWNLOAD_VISIBLE_RESOURCE']) {
                            _0x38ed82(!![]), _0x2fe2f3(!![]);
                            var _0x5716d7 = _0x51945f(_0x1e041c(this)['parent']()['parent']()[_0x1502c9(0x2cb)]());
                            _0xbf01e8(_0x17637a[_0x1502c9(0x1c8)], _0x1502c9(0x11d), '')[_0x1502c9(0x163)](() => {
                                let _0x4ae89b = setInterval(() => {
                                    const _0x3f124e = a0_0x5e9f;
                                    if (_0x1e041c(_0x3f124e(0x361))[_0x3f124e(0x19d)] > 0x0) {
                                        clearInterval(_0x4ae89b);
                                        var _0x4a0bba = _0x1e041c(_0x3f124e(0x2e1) + (_0x5716d7 + 0x1) + '\x22]')?.[_0x3f124e(0x2ab)](_0x3f124e(0x17e));
                                        _0x4a0bba ? (_0x38ed82(![]), _0x1e041c(_0x3f124e(0x2e1) + (_0x5716d7 + 0x1) + '\x22]')?.[_0x3f124e(0xfa)](_0x3f124e(0x263))) : alert(_0x3f124e(0x1e6)), _0x1e041c(_0x3f124e(0x36a))[_0x3f124e(0x1c3)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x5a1808['DIRECT_DOWNLOAD_ALL']) {
                            var _0x4ec654 = 0x0, _0x4ec07a = _0x1e041c(this)[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()[_0x1502c9(0x10c)](_0x35a745)[_0x1502c9(0x19d)], _0x4c958a = _0x5a1808[_0x1502c9(0x1e2)], _0x3e2d9c = new Date(_0x1e041c(this)[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()[_0x1502c9(0x10c)](_0x1502c9(0x112))['filter'](function () {
                                    const _0x177c9d = _0x1502c9;
                                    let _0x52e11f = _0x1e041c(this)[_0x177c9d(0x1d9)](_0x177c9d(0x333))[_0x177c9d(0x2ab)](_0x177c9d(0x173));
                                    return _0x52e11f?.[_0x177c9d(0xd2)](_0x177c9d(0xca)) || _0x52e11f?.[_0x177c9d(0x15b)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })['first']()[_0x1502c9(0x2ab)](_0x1502c9(0x1b9)))[_0x1502c9(0x220)]();
                            if (_0x4ec07a)
                                _0x1e041c(this)[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()['find'](_0x35a745)[_0x1502c9(0x273)](function () {
                                    const _0x10dda6 = _0x1502c9;
                                    let _0x2dda34 = _0x1e041c(this)['parent']()['parent']()[_0x10dda6(0x2cb)]()[_0x10dda6(0x10c)](_0x10dda6(0x27d));
                                    _0x2dda34 && _0x2dda34[_0x10dda6(0x2ab)](_0x10dda6(0x338)) && (_0x4c958a = !![]);
                                }), _0x4c958a || _0x5a1808[_0x1502c9(0x386)] ? _0xbf01e8(_0x17637a[_0x1502c9(0x1c8)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1f01e7(_0x1502c9(0xc7))) : (_0x1e041c(this)[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()[_0x1502c9(0x10c)](_0x35a745)[_0x1502c9(0x273)](function () {
                                    const _0x2f0f63 = _0x1502c9;
                                    _0x4ec654++;
                                    let _0x228a04 = _0x1e041c(this)[_0x2f0f63(0x10c)](_0x2f0f63(0x27d)), _0x45621b = _0x1e041c(this)[_0x2f0f63(0x10c)](_0x2f0f63(0x31f)), _0x54448c = _0x45621b['attr'](_0x2f0f63(0xe4)) ? _0x45621b[_0x2f0f63(0x2ab)](_0x2f0f63(0xe4))[_0x2f0f63(0x2fc)]('\x20')[0x0] : _0x45621b[_0x2f0f63(0x2ab)](_0x2f0f63(0x338));
                                    _0x228a04 && _0x228a04[_0x2f0f63(0x2ab)](_0x2f0f63(0x338)) && (_0x4c958a = !![]), _0x45621b && _0x54448c && _0x1e041c(_0x2f0f63(0x11d))[_0x2f0f63(0x2d6)](_0x2f0f63(0x1bc) + _0x3e2d9c + _0x2f0f63(0x18f) + _0x17637a['GL_postPath'] + _0x2f0f63(0xec) + _0x4ec654 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x54448c + _0x2f0f63(0xe9) + _0x54448c + _0x2f0f63(0x28c) + _0x1f01e7(_0x2f0f63(0x301)) + '</span>\x20' + _0x4ec654 + '\x20-</a>');
                                }), _0x4c958a && _0xbf01e8(_0x17637a[_0x1502c9(0x1c8)], _0x1502c9(0x11d), _0x1f01e7('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x5a1808[_0x1502c9(0x386)])
                                    _0xbf01e8(_0x17637a[_0x1502c9(0x1c8)], _0x1502c9(0x11d), _0x1f01e7('LOAD_BLOB_MULTIPLE'));
                                else {
                                    _0x4ec654++;
                                    let _0x75aff = _0x1e041c(this)[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()[_0x1502c9(0x10c)](_0x1502c9(0x27d)), _0x319aa6 = _0x1e041c(this)[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()[_0x1502c9(0x2cb)]()[_0x1502c9(0x10c)](_0x1502c9(0x31f)), _0x3172d1 = _0x319aa6[_0x1502c9(0x2ab)](_0x1502c9(0xe4)) ? _0x319aa6[_0x1502c9(0x2ab)](_0x1502c9(0xe4))[_0x1502c9(0x2fc)]('\x20')[0x0] : _0x319aa6[_0x1502c9(0x2ab)](_0x1502c9(0x338));
                                    _0x75aff && _0x75aff[_0x1502c9(0x2ab)]('src') && _0xbf01e8(_0x17637a[_0x1502c9(0x1c8)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x1f01e7(_0x1502c9(0x130))), _0x319aa6 && _0x3172d1 && _0x1e041c(_0x1502c9(0x11d))[_0x1502c9(0x2d6)](_0x1502c9(0x1bc) + _0x3e2d9c + _0x1502c9(0x18f) + _0x17637a[_0x1502c9(0x1c8)] + _0x1502c9(0xec) + _0x4ec654 + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x3172d1 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x3172d1 + _0x1502c9(0x28c) + _0x1f01e7(_0x1502c9(0x301)) + _0x1502c9(0x306) + _0x4ec654 + _0x1502c9(0x192));
                                }
                            }
                        }
                        _0x1e041c(_0x1502c9(0x361))[_0x1502c9(0x273)](function () {
                            const _0x5c4377 = _0x1502c9;
                            _0x1e041c(this)[_0x5c4377(0x1c2)](_0x5c4377(0x265)), _0x1e041c(this)[_0x5c4377(0x14b)](_0x5c4377(0x300)), _0x1e041c(this)[_0x5c4377(0x357)](_0x5c4377(0x330) + _0x1f01e7('NEW_TAB') + _0x5c4377(0x25c) + _0x188dac[_0x5c4377(0x369)] + _0x5c4377(0x174)), _0x1e041c(this)[_0x5c4377(0x2ab)](_0x5c4377(0x38b)) == 'video' && _0x1e041c(this)[_0x5c4377(0x357)](_0x5c4377(0x27e) + _0x1f01e7(_0x5c4377(0x16a)) + _0x5c4377(0x171) + _0x188dac[_0x5c4377(0x373)] + _0x5c4377(0x174));
                        }), _0x5a1808[_0x1502c9(0xfd)] && _0xbf01e8(_0x17637a['GL_postPath'], _0x1502c9(0x11d), _0x1f01e7(_0x1502c9(0xc7)))['then'](() => {
                            let _0x3f903c = setInterval(() => {
                                const _0x91c4c4 = a0_0x5e9f;
                                _0x1e041c(_0x91c4c4(0x361))[_0x91c4c4(0x19d)] > 0x0 && (clearInterval(_0x3f903c), _0x1e041c(_0x91c4c4(0x361))['each'](function () {
                                    const _0x371ed2 = _0x91c4c4;
                                    _0x1e041c(this)[_0x371ed2(0xfa)](_0x371ed2(0x263));
                                }), _0x1e041c(_0x91c4c4(0x36a))[_0x91c4c4(0x1c3)]());
                            }, 0xfa);
                        });
                    });
                    var _0x43a995 = _0x1e041c(this)[_0x24026f(0x10c)]('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x24026f(0x2c0)]()[_0x24026f(0x307)]() || _0x1e041c(this)[_0x24026f(0x10c)](_0x24026f(0x389))[_0x24026f(0x340)](function () {
                        const _0x4af9f5 = _0x24026f;
                        return _0x1e041c(this)?.[_0x4af9f5(0x307)]()?.[_0x4af9f5(0x19d)] > 0x0;
                    })[_0x24026f(0x2c0)]()['text']();
                    _0x1e041c(this)['attr'](_0x24026f(0x1ae), _0x24026f(0x115)), _0x1e041c(this)['attr'](_0x24026f(0x1c1), _0x43a995);
                }
            });
        }
        function _0x5ec9ee(_0x1f7c80) {
            const _0x75ebee = _0x4e7afc;
            var _0x4c98d1 = _0x1f7c80[_0x75ebee(0x100)] ?? _0x1f7c80;
            return _0x4c98d1['owner'] == null && _0x4c98d1['user'] != null && (_0x4c98d1[_0x75ebee(0x347)] = _0x4c98d1[_0x75ebee(0x11e)]), _0x4c98d1['owner'] == null && (_0x1ece4c('carousel_media:', _0x75ebee(0x12a)), alert(_0x75ebee(0x298))), _0x4c98d1;
        }
        async function _0xbf01e8(_0x2270fe, _0x295191, _0x513a17) {
            const _0x3d05ab = _0x4e7afc;
            try {
                _0x1e041c(_0x295191 + '\x20a')[_0x3d05ab(0x1c3)](), _0x1e041c(_0x295191)[_0x3d05ab(0x2d6)]('<p\x20id=\x22_SNLOAD\x22>' + _0x513a17 + _0x3d05ab(0x1bd));
                let _0x26ad5f = await _0x44eec3(_0x2270fe), _0x563a71 = _0x5ec9ee(_0x26ad5f['data']);
                if (_0x26ad5f[_0x3d05ab(0x371)] === _0x3d05ab(0x2a6)) {
                    let _0x5420ed = 0x1;
                    _0x563a71[_0x3d05ab(0x257)] == 'GraphVideo' && _0x563a71[_0x3d05ab(0x2cd)] && (_0x1e041c(_0x295191)['append'](_0x3d05ab(0x268) + _0x563a71['id'] + _0x3d05ab(0x207) + _0x563a71[_0x3d05ab(0x170)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x563a71[_0x3d05ab(0x2ca)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x563a71['owner']['username'] + _0x3d05ab(0x322) + _0x5420ed + _0x3d05ab(0x285) + _0x563a71[_0x3d05ab(0x2cd)] + _0x3d05ab(0xe9) + _0x563a71[_0x3d05ab(0x12e)][0x1][_0x3d05ab(0x338)] + _0x3d05ab(0x1be) + _0x1f01e7('VID') + _0x3d05ab(0x306) + _0x5420ed + '\x20-</a>'), _0x5420ed++);
                    _0x563a71[_0x3d05ab(0x257)] == 'GraphImage' && (_0x1e041c(_0x295191)[_0x3d05ab(0x2d6)](_0x3d05ab(0x268) + _0x563a71['id'] + _0x3d05ab(0x207) + _0x563a71[_0x3d05ab(0x170)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x563a71['shortcode'] + _0x3d05ab(0x181) + _0x563a71[_0x3d05ab(0x347)][_0x3d05ab(0xeb)] + '\x22\x20data-globalIndex=\x22' + _0x5420ed + _0x3d05ab(0x285) + _0x563a71[_0x3d05ab(0x12e)][_0x563a71[_0x3d05ab(0x12e)]['length'] - 0x1][_0x3d05ab(0x338)] + _0x3d05ab(0xe9) + _0x563a71[_0x3d05ab(0x12e)][0x1][_0x3d05ab(0x338)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x1f01e7('IMG') + '</span>\x20' + _0x5420ed + _0x3d05ab(0x192)), _0x5420ed++);
                    if (_0x563a71['__typename'] == _0x3d05ab(0x1b6) && _0x563a71[_0x3d05ab(0x19c)])
                        for (let _0x365f9c of _0x563a71['edge_sidecar_to_children'][_0x3d05ab(0x17c)]) {
                            _0x365f9c['node']['__typename'] == _0x3d05ab(0x302) && _0x1e041c(_0x295191)[_0x3d05ab(0x2d6)](_0x3d05ab(0x268) + _0x365f9c[_0x3d05ab(0x21e)]['id'] + _0x3d05ab(0x207) + _0x563a71['taken_at_timestamp'] + _0x3d05ab(0x162) + _0x563a71[_0x3d05ab(0x2ca)] + _0x3d05ab(0x335) + _0x563a71['owner'][_0x3d05ab(0xeb)] + _0x3d05ab(0x322) + _0x5420ed + _0x3d05ab(0x285) + _0x365f9c[_0x3d05ab(0x21e)][_0x3d05ab(0x2cd)] + _0x3d05ab(0xe9) + _0x365f9c[_0x3d05ab(0x21e)][_0x3d05ab(0x12e)][0x1][_0x3d05ab(0x338)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x1f01e7('VID') + _0x3d05ab(0x306) + _0x5420ed + _0x3d05ab(0x192)), _0x365f9c['node'][_0x3d05ab(0x257)] == _0x3d05ab(0x27b) && _0x1e041c(_0x295191)[_0x3d05ab(0x2d6)]('<a\x20media-id=\x22' + _0x365f9c[_0x3d05ab(0x21e)]['id'] + _0x3d05ab(0x207) + _0x563a71[_0x3d05ab(0x170)] + _0x3d05ab(0x162) + _0x563a71[_0x3d05ab(0x2ca)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x563a71[_0x3d05ab(0x347)][_0x3d05ab(0xeb)] + _0x3d05ab(0x322) + _0x5420ed + _0x3d05ab(0x285) + _0x365f9c[_0x3d05ab(0x21e)][_0x3d05ab(0x12e)][_0x365f9c[_0x3d05ab(0x21e)][_0x3d05ab(0x12e)][_0x3d05ab(0x19d)] - 0x1][_0x3d05ab(0x338)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x365f9c['node'][_0x3d05ab(0x12e)][0x1][_0x3d05ab(0x338)] + _0x3d05ab(0x28c) + _0x1f01e7(_0x3d05ab(0x301)) + '</span>\x20' + _0x5420ed + '\x20-</a>'), _0x5420ed++;
                        }
                } else {
                    if (_0x563a71[_0x3d05ab(0xe6)])
                        _0x1ece4c(_0x3d05ab(0xe6)), _0x563a71[_0x3d05ab(0xe6)][_0x3d05ab(0x396)]((_0x5cc296, _0x445781) => {
                            const _0x2bd05b = _0x3d05ab;
                            let _0x3c8361 = _0x445781 + 0x1;
                            _0x5cc296[_0x2bd05b(0x365)] == null ? (_0x5cc296['image_versions2'][_0x2bd05b(0xd7)]['sort'](function (_0x3ce1b4, _0x232dad) {
                                const _0xb544fc = _0x2bd05b;
                                let _0x23cb79 = new URL(_0x3ce1b4[_0xb544fc(0x2dc)])['searchParams']['get'](_0xb544fc(0xc9)), _0x3e2f57 = new URL(_0x232dad[_0xb544fc(0x2dc)])[_0xb544fc(0x2ac)][_0xb544fc(0x25e)](_0xb544fc(0xc9));
                                if (_0x23cb79 && _0x3e2f57) {
                                    if (_0x23cb79[_0xb544fc(0x19d)] > _0x3e2f57[_0xb544fc(0x19d)])
                                        return 0x1;
                                    if (_0x23cb79[_0xb544fc(0x19d)] < _0x3e2f57['length'])
                                        return -0x1;
                                } else {
                                    if (_0x3ce1b4[_0xb544fc(0x2dd)] < _0x232dad[_0xb544fc(0x2dd)])
                                        return 0x1;
                                    if (_0x3ce1b4['width'] > _0x232dad[_0xb544fc(0x2dd)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x1e041c(_0x295191)['append']('<a\x20media-id=\x22' + _0x5cc296['pk'] + '\x22\x20datetime=\x22' + _0x5cc296[_0x2bd05b(0x1c0)] + _0x2bd05b(0x162) + _0x563a71['code'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x563a71[_0x2bd05b(0x347)][_0x2bd05b(0xeb)] + _0x2bd05b(0x322) + _0x3c8361 + _0x2bd05b(0x285) + _0x5cc296[_0x2bd05b(0x31c)][_0x2bd05b(0xd7)][0x0]['url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5cc296[_0x2bd05b(0x31c)][_0x2bd05b(0xd7)][0x0][_0x2bd05b(0x2dc)] + _0x2bd05b(0x28c) + _0x1f01e7(_0x2bd05b(0x301)) + _0x2bd05b(0x306) + _0x3c8361 + _0x2bd05b(0x192))) : _0x1e041c(_0x295191)[_0x2bd05b(0x2d6)](_0x2bd05b(0x268) + _0x5cc296['pk'] + _0x2bd05b(0x207) + _0x5cc296['taken_at'] + _0x2bd05b(0x162) + _0x563a71[_0x2bd05b(0x28a)] + _0x2bd05b(0x335) + _0x563a71[_0x2bd05b(0x347)][_0x2bd05b(0xeb)] + '\x22\x20data-globalIndex=\x22' + _0x3c8361 + _0x2bd05b(0x285) + _0x5cc296[_0x2bd05b(0x365)][0x0][_0x2bd05b(0x2dc)] + _0x2bd05b(0xe9) + _0x5cc296[_0x2bd05b(0x31c)][_0x2bd05b(0xd7)][0x0]['url'] + _0x2bd05b(0x1be) + _0x1f01e7(_0x2bd05b(0x2da)) + _0x2bd05b(0x306) + _0x3c8361 + _0x2bd05b(0x192));
                        });
                    else {
                        let _0x1bfa6c = 0x1;
                        _0x563a71['video_versions'] == null ? (_0x563a71[_0x3d05ab(0x31c)][_0x3d05ab(0xd7)][_0x3d05ab(0xff)](function (_0x54de2a, _0x56075c) {
                            const _0xe2e8e3 = _0x3d05ab;
                            let _0xcc862f = new URL(_0x54de2a['url'])[_0xe2e8e3(0x2ac)]['get'](_0xe2e8e3(0xc9)), _0x4895f1 = new URL(_0x56075c[_0xe2e8e3(0x2dc)])[_0xe2e8e3(0x2ac)]['get'](_0xe2e8e3(0xc9));
                            if (_0xcc862f && _0x4895f1) {
                                if (_0xcc862f[_0xe2e8e3(0x19d)] > _0x4895f1['length'])
                                    return 0x1;
                                if (_0xcc862f[_0xe2e8e3(0x19d)] < _0x4895f1['length'])
                                    return -0x1;
                            } else {
                                if (_0x54de2a[_0xe2e8e3(0x2dd)] < _0x56075c[_0xe2e8e3(0x2dd)])
                                    return 0x1;
                                if (_0x54de2a[_0xe2e8e3(0x2dd)] > _0x56075c[_0xe2e8e3(0x2dd)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x1e041c(_0x295191)[_0x3d05ab(0x2d6)](_0x3d05ab(0x268) + _0x563a71['pk'] + _0x3d05ab(0x207) + _0x563a71[_0x3d05ab(0x1c0)] + _0x3d05ab(0x162) + _0x563a71[_0x3d05ab(0x28a)] + _0x3d05ab(0x181) + _0x563a71['owner'][_0x3d05ab(0xeb)] + _0x3d05ab(0x322) + _0x1bfa6c + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x563a71[_0x3d05ab(0x31c)][_0x3d05ab(0xd7)][0x0][_0x3d05ab(0x2dc)] + _0x3d05ab(0xe9) + _0x563a71['image_versions2']['candidates'][0x0][_0x3d05ab(0x2dc)] + _0x3d05ab(0x28c) + _0x1f01e7(_0x3d05ab(0x301)) + _0x3d05ab(0x306) + _0x1bfa6c + _0x3d05ab(0x192))) : _0x1e041c(_0x295191)[_0x3d05ab(0x2d6)](_0x3d05ab(0x268) + _0x563a71['pk'] + '\x22\x20datetime=\x22' + _0x563a71['taken_at'] + _0x3d05ab(0x162) + _0x563a71[_0x3d05ab(0x28a)] + _0x3d05ab(0x335) + _0x563a71['owner'][_0x3d05ab(0xeb)] + _0x3d05ab(0x322) + _0x1bfa6c + _0x3d05ab(0x285) + _0x563a71[_0x3d05ab(0x365)][0x0][_0x3d05ab(0x2dc)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x563a71[_0x3d05ab(0x31c)][_0x3d05ab(0xd7)][0x0][_0x3d05ab(0x2dc)] + _0x3d05ab(0x1be) + _0x1f01e7(_0x3d05ab(0x2da)) + _0x3d05ab(0x306) + _0x1bfa6c + _0x3d05ab(0x192));
                    }
                }
                _0x1e041c('#_SNLOAD')[_0x3d05ab(0x1c3)](), _0x1e041c(_0x3d05ab(0x361))[_0x3d05ab(0x273)](function () {
                    const _0x2f217a = _0x3d05ab;
                    _0x1e041c(this)['wrap'](_0x2f217a(0x265)), _0x1e041c(this)[_0x2f217a(0x14b)](_0x2f217a(0x300)), _0x1e041c(this)[_0x2f217a(0x357)](_0x2f217a(0x330) + _0x1f01e7(_0x2f217a(0x369)) + _0x2f217a(0x25c) + _0x188dac[_0x2f217a(0x369)] + _0x2f217a(0x174)), _0x1e041c(this)[_0x2f217a(0x2ab)](_0x2f217a(0x38b)) == 'video' && _0x1e041c(this)[_0x2f217a(0x357)](_0x2f217a(0x27e) + _0x1f01e7(_0x2f217a(0x16a)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x188dac[_0x2f217a(0x373)] + _0x2f217a(0x174));
                });
            } catch (_0xccf618) {
                _0x1ece4c(_0x3d05ab(0x1b1), _0xccf618);
            }
            ;
        }
        function _0x51945f(_0x2a587c) {
            const _0x3f6b27 = _0x4e7afc;
            var _0x156e02 = 0x0, _0xf8412a = _0x2a587c[_0x3f6b27(0x10c)]('.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div');
            return (_0xf8412a == null || !_0xf8412a[_0x3f6b27(0x129)](_0x3f6b27(0x201))) && (_0xf8412a = _0x2a587c[_0x3f6b27(0x10c)]('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)[_0x3f6b27(0x2c6)](_0x3f6b27(0x18e))), _0xf8412a[_0x3f6b27(0x340)](_0x3f6b27(0x35b))[_0x3f6b27(0x273)](function (_0x5b6374) {
                const _0x18b17b = _0x3f6b27;
                _0x1e041c(this)[_0x18b17b(0x129)](_0x18b17b(0x151)) && (_0x156e02 = _0x5b6374);
            }), _0x156e02;
        }
        async function _0x15e989(_0x32c0d8) {
            const _0x1b89c0 = _0x4e7afc;
            if (_0x32c0d8) {
                _0x38ed82(!![]);
                let _0x2f1081 = new Date()['getTime'](), _0x35dac4 = Math['floor'](_0x2f1081 / 0x3e8), _0x39abc9 = location[_0x1b89c0(0x197)][_0x1b89c0(0x1f6)](/(reels|tagged)\/$/ig, '')[_0x1b89c0(0x2fc)]('/')['filter'](_0x56b8f8 => _0x56b8f8['length'] > 0x0)['at'](-0x1), _0x24ab47 = await _0x3328c7(_0x39abc9);
                try {
                    let _0x413b19 = await _0x400b89(_0x24ab47['user']['pk']);
                    _0x26afe2(_0x413b19, _0x39abc9, _0x1b89c0(0xd3), _0x35dac4, 'jpg');
                } catch (_0x194d9e) {
                    _0x26afe2(_0x24ab47[_0x1b89c0(0x11e)]['profile_pic_url'], _0x39abc9, _0x1b89c0(0xd3), _0x35dac4, 'jpg');
                }
                _0x38ed82(![]);
            } else {
                if (!_0x1e041c(_0x1b89c0(0x32e))['length']) {
                    let _0x2d0d3c = setInterval(() => {
                        const _0x4d39cd = _0x1b89c0;
                        if (_0x1e041c('.IG_DWPROFILE')[_0x4d39cd(0x19d)]) {
                            clearInterval(_0x2d0d3c);
                            return;
                        }
                        _0x1e041c(_0x4d39cd(0x191))[_0x4d39cd(0x2cb)]()['parent']()[_0x4d39cd(0x2d6)](_0x4d39cd(0x317) + _0x1f01e7('DW') + _0x4d39cd(0x12b) + _0x188dac['DOWNLOAD'] + _0x4d39cd(0x174)), _0x1e041c('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')[_0x4d39cd(0x2cb)]()[_0x4d39cd(0x2cb)]()[_0x4d39cd(0x1f7)](_0x4d39cd(0x141), 'relative'), _0x1e041c(_0x4d39cd(0x1dd))[_0x4d39cd(0x2cb)]()['parent']()[_0x4d39cd(0x2cb)]()[_0x4d39cd(0x2d6)](_0x4d39cd(0x317) + _0x1f01e7('DW') + _0x4d39cd(0x12b) + _0x188dac[_0x4d39cd(0x2c5)] + _0x4d39cd(0x174)), _0x1e041c(_0x4d39cd(0x1dd))[_0x4d39cd(0x2cb)]()[_0x4d39cd(0x2cb)]()[_0x4d39cd(0x2cb)]()['css'](_0x4d39cd(0x141), _0x4d39cd(0x2ce));
                    }, 0x96);
                }
            }
        }
        async function _0xb8269e(_0x2bd851, _0x49074e, _0x19b2f0) {
            const _0x173614 = _0x4e7afc;
            if (_0x2bd851) {
                _0x38ed82(!![]);
                let _0x27000f = location[_0x173614(0x173)][_0x173614(0x2fc)]('?')['at'](0x0)['split'](_0x173614(0x127))['at'](-0x1)[_0x173614(0x1f6)]('/', ''), _0x252c86 = await _0x44eec3(_0x27000f), _0x47c0c2 = _0x5ec9ee(_0x252c86[_0x173614(0x32c)]), _0x208792 = new Date()['getTime']();
                _0x5a1808[_0x173614(0x28e)] && (_0x252c86[_0x173614(0x371)] === _0x173614(0x2a6) ? _0x208792 = _0x47c0c2[_0x173614(0x100)][_0x173614(0x170)] : _0x208792 = _0x47c0c2[_0x173614(0x1c0)]);
                if (_0x252c86['type'] === 'query_hash') {
                    if (_0x49074e && _0x47c0c2[_0x173614(0x100)]['is_video']) {
                        if (_0x19b2f0)
                            _0x2f686c(_0x47c0c2[_0x173614(0x100)][_0x173614(0x2cd)]);
                        else {
                            let _0x2307e0 = _0x173614(0x16e);
                            _0x26afe2(_0x47c0c2['shortcode_media'][_0x173614(0x2cd)], _0x47c0c2[_0x173614(0x100)][_0x173614(0x347)][_0x173614(0xeb)], 'reels', _0x208792, _0x2307e0, _0x27000f);
                        }
                    } else {
                        if (_0x19b2f0)
                            _0x2f686c(_0x47c0c2[_0x173614(0x100)][_0x173614(0x12e)]['at'](-0x1)['src']);
                        else {
                            let _0x13389d = _0x173614(0x255);
                            _0x26afe2(_0x47c0c2[_0x173614(0x100)][_0x173614(0x12e)]['at'](-0x1)[_0x173614(0x338)], _0x47c0c2['shortcode_media'][_0x173614(0x347)][_0x173614(0xeb)], _0x173614(0x2c7), _0x208792, _0x13389d, _0x27000f);
                        }
                    }
                } else {
                    if (_0x49074e && _0x47c0c2['video_versions'] != null) {
                        if (_0x19b2f0)
                            _0x2f686c(_0x47c0c2[_0x173614(0x365)][0x0][_0x173614(0x2dc)]);
                        else {
                            let _0x37b9f9 = 'mp4';
                            _0x26afe2(_0x47c0c2[_0x173614(0x365)][0x0][_0x173614(0x2dc)], _0x47c0c2['owner'][_0x173614(0xeb)], _0x173614(0x2c7), _0x208792, _0x37b9f9, _0x27000f);
                        }
                    } else {
                        if (_0x19b2f0)
                            _0x2f686c(_0x47c0c2[_0x173614(0x31c)]['candidates'][0x0]['url']);
                        else {
                            let _0x1ed6a5 = _0x173614(0x255);
                            _0x26afe2(_0x47c0c2[_0x173614(0x31c)]['candidates'][0x0]['url'], _0x47c0c2[_0x173614(0x347)][_0x173614(0xeb)], _0x173614(0x2c7), _0x208792, _0x1ed6a5, _0x27000f);
                        }
                    }
                }
                _0x38ed82(![]);
            } else
                var _0x5af8cd = setInterval(() => {
                    const _0xc778eb = _0x173614;
                    _0x1e041c(_0xc778eb(0x1a6))[_0xc778eb(0x19d)] > 0x0 && (clearInterval(_0x5af8cd), _0x5a1808['SCROLL_BUTTON'] && (_0x1e041c(_0xc778eb(0x368))['remove'](), _0x1e041c('section\x20>\x20main[role=\x22main\x22]')[_0xc778eb(0x2d6)](_0xc778eb(0xcf)), _0x1e041c(_0xc778eb(0x34d))[_0xc778eb(0x2d6)](_0xc778eb(0x348)), _0x1e041c(_0xc778eb(0x34d))[_0xc778eb(0x2d6)]('<div\x20class=\x22button-down\x22><div></div></div>'), _0x1e041c(_0xc778eb(0xee))['on'](_0xc778eb(0x263), function () {
                        const _0x536971 = _0xc778eb;
                        _0x1e041c(_0x536971(0x15c))[0x0][_0x536971(0xd1)]({
                            'top': -0x1e,
                            'behavior': _0x536971(0x2b2)
                        });
                    }), _0x1e041c(_0xc778eb(0x123))['on'](_0xc778eb(0x263), function () {
                        const _0x40430d = _0xc778eb;
                        _0x1e041c(_0x40430d(0x15c))[0x0][_0x40430d(0xd1)]({
                            'top': 0x1e,
                            'behavior': _0x40430d(0x2b2)
                        });
                    })), _0x1e041c(_0xc778eb(0x2a5))[_0xc778eb(0x2c6)](_0xc778eb(0x18e))[_0xc778eb(0x273)](function () {
                        const _0x1a75d5 = _0xc778eb;
                        if (_0x1e041c(this)['children']()[_0x1a75d5(0x19d)] > 0x0) {
                            if (!_0x1e041c(this)[_0x1a75d5(0x2c6)]()[_0x1a75d5(0x10c)](_0x1a75d5(0x20f))[_0x1a75d5(0x19d)]) {
                                var _0x5d7004 = _0x1e041c(this);
                                _0x1e041c(this)[_0x1a75d5(0x2c6)]()[_0x1a75d5(0x1f7)](_0x1a75d5(0x141), _0x1a75d5(0x2ce)), _0x1e041c(this)[_0x1a75d5(0x2c6)]()[_0x1a75d5(0x2d6)](_0x1a75d5(0x317) + _0x1f01e7('DW') + _0x1a75d5(0x36c) + _0x188dac[_0x1a75d5(0x2c5)] + '</div>'), _0x1e041c(this)[_0x1a75d5(0x2c6)]()[_0x1a75d5(0x2d6)](_0x1a75d5(0x330) + _0x1f01e7('NEW_TAB') + _0x1a75d5(0x349) + _0x188dac[_0x1a75d5(0x369)] + _0x1a75d5(0x174)), _0x1e041c(this)[_0x1a75d5(0x2c6)]()[_0x1a75d5(0x2d6)](_0x1a75d5(0x27e) + _0x1f01e7(_0x1a75d5(0x16a)) + _0x1a75d5(0x331) + _0x188dac[_0x1a75d5(0x373)] + '</div>');
                                _0x5a1808[_0x1a75d5(0x101)] && _0x1e041c(this)[_0x1a75d5(0x10c)](_0x1a75d5(0x27d))[_0x1a75d5(0x273)](function () {
                                    const _0xf6c4a2 = _0x1a75d5;
                                    _0x1e041c(this)['on'](_0xf6c4a2(0x1ee), function () {
                                        const _0x57ae3d = _0xf6c4a2;
                                        if (!_0x1e041c(this)['data']('loop')) {
                                            let _0xa1b988 = _0x1e041c(this)[_0x57ae3d(0x195)]()[_0x57ae3d(0x10c)]('div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]')['parents'](_0x57ae3d(0x289));
                                            _0xa1b988[_0x57ae3d(0x19d)] > 0x0 ? (_0x1e041c(this)[_0x57ae3d(0x2ab)](_0x57ae3d(0x32b), !![]), _0xa1b988[_0x57ae3d(0xfa)](_0x57ae3d(0x263)), _0x1ece4c(_0x57ae3d(0x169))) : (_0x1e041c(this)[_0x57ae3d(0x2ab)](_0x57ae3d(0x32b), !![]), _0x1e041c(this)[_0x57ae3d(0x2cb)]()[_0x57ae3d(0x10c)](_0x57ae3d(0x204))['removeAttr'](_0x57ae3d(0x16c)), this[_0x57ae3d(0x296)](), _0x1ece4c(_0x57ae3d(0x243)));
                                        }
                                    });
                                });
                                _0x5a1808[_0x1a75d5(0x351)] && _0x1e041c(this)[_0x1a75d5(0x10c)]('video')[_0x1a75d5(0x273)](function () {
                                    const _0x25e66e = _0x1a75d5;
                                    if (!_0x1e041c(this)[_0x25e66e(0x32c)](_0x25e66e(0x2d1))) {
                                        let _0x525cbd = _0x1e041c(this);
                                        _0x1ece4c(_0x25e66e(0x111)), _0x5a1808[_0x25e66e(0x118)] && (this[_0x25e66e(0x10b)] = _0x17637a[_0x25e66e(0x1a1)], _0x1e041c(this)['on']('loadstart', function () {
                                            const _0x102c2e = _0x25e66e;
                                            this['volume'] = _0x17637a[_0x102c2e(0x1a1)];
                                        })), _0x1e041c(this)['on'](_0x25e66e(0x278), function (_0x53b22b) {
                                            const _0x38e320 = _0x25e66e;
                                            _0x53b22b[_0x38e320(0x2a1)](), _0x525cbd[_0x38e320(0x1f7)](_0x38e320(0x33c), '-1'), _0x525cbd['removeAttr'](_0x38e320(0x2d1));
                                        }), _0x1e041c(this)[_0x25e66e(0x2cb)]()[_0x25e66e(0x10c)](_0x25e66e(0xde))[_0x25e66e(0x340)](function () {
                                            const _0x24a014 = _0x25e66e;
                                            return _0x1e041c(this)['parent'](_0x24a014(0x29a))[_0x24a014(0x19d)] > 0x0 && _0x1e041c(this)[_0x24a014(0x1f7)](_0x24a014(0x318)) === _0x24a014(0x26a) && _0x1e041c(this)[_0x24a014(0x2ab)](_0x24a014(0x16c)) != null;
                                        })[_0x25e66e(0x2c0)]()['on']('contextmenu', function (_0x4ce6b6) {
                                            const _0x30935d = _0x25e66e;
                                            _0x4ce6b6[_0x30935d(0x2a1)](), _0x525cbd[_0x30935d(0x1f7)](_0x30935d(0x33c), '2'), _0x525cbd[_0x30935d(0x2ab)](_0x30935d(0x2d1), !![]);
                                        }), _0x1e041c(this)['on'](_0x25e66e(0x32f), function () {
                                            const _0x3b7438 = _0x25e66e;
                                            let _0x521af1 = _0x1e041c(this)[_0x3b7438(0x2cb)]()[_0x3b7438(0x10c)](_0x3b7438(0x281))[_0x3b7438(0x10c)](_0x3b7438(0x27c))['filter'](function (_0x5e1d5a) {
                                                const _0x33010b = _0x3b7438;
                                                return _0x1e041c(this)[_0x33010b(0x2dd)]() <= 0x40 && _0x1e041c(this)[_0x33010b(0x1b2)]() <= 0x40 && _0x1e041c(this)[_0x33010b(0x10c)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')['length'] > 0x0;
                                            });
                                            var _0x4bf7bd = _0x521af1['find'](_0x3b7438(0x337))[_0x3b7438(0x19d)] === 0x0;
                                            this[_0x3b7438(0xcb)] != _0x4bf7bd && (this[_0x3b7438(0x10b)] = _0x17637a[_0x3b7438(0x1a1)], _0x521af1?.['trigger'](_0x3b7438(0x263))), _0x1e041c(this)['attr'](_0x3b7438(0x21c)) && (_0x17637a[_0x3b7438(0x1a1)] = this[_0x3b7438(0x10b)], GM_setValue(_0x3b7438(0x1d5), this[_0x3b7438(0x10b)])), this['volume'] == _0x17637a['videoVolume'] && _0x1e041c(this)['attr']('data-completed', !![]);
                                        }), _0x1e041c(this)[_0x25e66e(0x1f7)](_0x25e66e(0x141), _0x25e66e(0x2b4)), _0x1e041c(this)[_0x25e66e(0x1f7)]('z-index', '2'), _0x1e041c(this)[_0x25e66e(0x2ab)](_0x25e66e(0x24b), !![]), _0x1e041c(this)[_0x25e66e(0x2ab)](_0x25e66e(0x2d1), !![]);
                                    }
                                });
                                var _0x1a806c = _0x5d7004[_0x1a75d5(0x10c)]('video'), _0x3cce95 = _0x1e041c(this)['find'](_0x1a75d5(0x244))[_0x1a75d5(0x2c0)]();
                                _0x59d4a2(_0x1a806c, _0x3cce95, _0x1a75d5(0xe0));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x18ec85(_0x147006, _0x5d25e6) {
            const _0xa23db7 = _0x4e7afc;
            try {
                _0x1e041c(_0xa23db7(0x19b))[_0xa23db7(0x307)](_0x5d25e6 + _0xa23db7(0x29d) + _0x147006['data'][_0xa23db7(0x247)][0x0]['id']);
                const _0x5a13ba = _0xa23db7(0x11d);
                _0x147006[_0xa23db7(0x32c)][_0xa23db7(0x247)][0x0][_0xa23db7(0x397)][_0xa23db7(0x396)]((_0x2a86b7, _0x30a8be) => {
                    const _0x3f2eee = _0xa23db7;
                    let _0x12ad01 = new Date()['getTime'](), _0x39eafa = Math[_0x3f2eee(0x1fe)](_0x12ad01 / 0x3e8), _0x567690 = _0x147006[_0x3f2eee(0x32c)]['reels_media'][0x0]?.['user']?.[_0x3f2eee(0xeb)] || _0x147006[_0x3f2eee(0x32c)][_0x3f2eee(0x247)][0x0]?.[_0x3f2eee(0x347)]?.[_0x3f2eee(0xeb)];
                    _0x5a1808['RENAME_PUBLISH_DATE'] && (_0x39eafa = _0x2a86b7[_0x3f2eee(0x170)]), _0x2a86b7[_0x3f2eee(0x12e)][_0x3f2eee(0xff)](function (_0x103aef, _0x12873e) {
                        const _0x5c6f59 = _0x3f2eee;
                        if (_0x103aef[_0x5c6f59(0xd5)] < _0x12873e[_0x5c6f59(0xd5)])
                            return 0x1;
                        if (_0x103aef[_0x5c6f59(0xd5)] > _0x12873e[_0x5c6f59(0xd5)])
                            return -0x1;
                        return 0x0;
                    }), _0x2a86b7['is_video'] ? _0x1e041c(_0x5a13ba)[_0x3f2eee(0x2d6)](_0x3f2eee(0x268) + _0x2a86b7['id'] + _0x3f2eee(0x207) + _0x39eafa + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-name=\x22' + _0x5d25e6 + '\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x567690 + '\x22\x20data-path=\x22' + _0x2a86b7['id'] + _0x3f2eee(0x322) + (_0x30a8be + 0x1) + _0x3f2eee(0x285) + _0x2a86b7[_0x3f2eee(0x1ad)][0x0][_0x3f2eee(0x338)] + _0x3f2eee(0xe9) + _0x2a86b7['display_resources'][0x0]['src'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x1f01e7(_0x3f2eee(0x2da)) + _0x3f2eee(0x306) + _0x30a8be + '\x20-</a>') : _0x1e041c(_0x5a13ba)[_0x3f2eee(0x2d6)]('<a\x20media-id=\x22' + _0x2a86b7['id'] + _0x3f2eee(0x207) + _0x39eafa + _0x3f2eee(0x120) + _0x5d25e6 + _0x3f2eee(0x144) + _0x567690 + _0x3f2eee(0x2be) + _0x2a86b7['id'] + _0x3f2eee(0x322) + (_0x30a8be + 0x1) + _0x3f2eee(0x285) + _0x2a86b7[_0x3f2eee(0x12e)][0x0][_0x3f2eee(0x338)] + _0x3f2eee(0xe9) + _0x2a86b7['display_resources'][0x0][_0x3f2eee(0x338)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22IMG\x22>' + _0x1f01e7('IMG') + _0x3f2eee(0x306) + _0x30a8be + _0x3f2eee(0x192));
                }), _0x1e041c(_0xa23db7(0x361))[_0xa23db7(0x273)](function () {
                    const _0x3a2302 = _0xa23db7;
                    _0x1e041c(this)[_0x3a2302(0x1c2)]('<div></div>'), _0x1e041c(this)[_0x3a2302(0x14b)](_0x3a2302(0x300)), _0x1e041c(this)[_0x3a2302(0x357)](_0x3a2302(0x330) + _0x1f01e7(_0x3a2302(0x369)) + _0x3a2302(0x25c) + _0x188dac[_0x3a2302(0x369)] + _0x3a2302(0x174)), _0x1e041c(this)[_0x3a2302(0x2ab)](_0x3a2302(0x224)) == 'mp4' && _0x1e041c(this)['after'](_0x3a2302(0x27e) + _0x1f01e7(_0x3a2302(0x16a)) + _0x3a2302(0x171) + _0x188dac[_0x3a2302(0x373)] + _0x3a2302(0x174));
                }), _0x38ed82(![]);
            } catch (_0x879475) {
                console['error'](_0xa23db7(0x29c), _0x879475);
            }
        }
        async function _0xa04579() {
            const _0x241b4d = _0x4e7afc;
            _0x38ed82(!![]);
            let _0x97128c = new Date()[_0x241b4d(0x220)](), _0x367c64 = Math[_0x241b4d(0x1fe)](_0x97128c / 0x3e8), _0x5ea047 = _0x1e041c(_0x241b4d(0x1f3))[_0x241b4d(0x2c0)]()[_0x241b4d(0x307)]() || location[_0x241b4d(0x197)][_0x241b4d(0x2fc)]('/')['filter'](_0x19ccf4 => _0x19ccf4[_0x241b4d(0x19d)] > 0x0)['at'](0x1), _0x320cb2 = await _0x3328c7(_0x5ea047), _0x51dac8 = _0x320cb2[_0x241b4d(0x11e)]['pk'], _0x29c237 = await _0x1af57b(_0x51dac8);
            if (_0x5a1808['DIRECT_DOWNLOAD_STORY']) {
                let _0x4974bd = 0x0;
                _0x23d0b8(_0x4974bd, _0x29c237[_0x241b4d(0x32c)][_0x241b4d(0x247)][0x0][_0x241b4d(0x397)][_0x241b4d(0x19d)]), _0x29c237[_0x241b4d(0x32c)][_0x241b4d(0x247)][0x0][_0x241b4d(0x397)][_0x241b4d(0x396)]((_0x323dfd, _0x48784c) => {
                    setTimeout(() => {
                        const _0x5cd2f4 = a0_0x5e9f;
                        _0x5a1808[_0x5cd2f4(0x28e)] && (_0x367c64 = _0x323dfd[_0x5cd2f4(0x170)]), _0x323dfd[_0x5cd2f4(0x12e)][_0x5cd2f4(0xff)](function (_0x3bdc12, _0x4501a0) {
                            const _0x26309b = _0x5cd2f4;
                            if (_0x3bdc12[_0x26309b(0xd5)] < _0x4501a0[_0x26309b(0xd5)])
                                return 0x1;
                            if (_0x3bdc12['config_width'] > _0x4501a0[_0x26309b(0xd5)])
                                return -0x1;
                            return 0x0;
                        }), _0x323dfd[_0x5cd2f4(0x384)] ? _0x26afe2(_0x323dfd[_0x5cd2f4(0x1ad)][0x0]['src'], _0x5ea047, _0x5cd2f4(0x2d8), _0x367c64, _0x5cd2f4(0x16e), _0x323dfd['id'])[_0x5cd2f4(0x163)](() => {
                            const _0x57321c = _0x5cd2f4;
                            _0x23d0b8(++_0x4974bd, _0x29c237[_0x57321c(0x32c)]['reels_media'][0x0]['items'][_0x57321c(0x19d)]);
                        }) : _0x26afe2(_0x323dfd['display_resources'][0x0]['src'], _0x5ea047, _0x5cd2f4(0x2d8), _0x367c64, _0x5cd2f4(0x255), _0x323dfd['id'])[_0x5cd2f4(0x163)](() => {
                            const _0x286b46 = _0x5cd2f4;
                            _0x23d0b8(++_0x4974bd, _0x29c237[_0x286b46(0x32c)][_0x286b46(0x247)][0x0][_0x286b46(0x397)]['length']);
                        });
                    }, 0x64 * _0x48784c);
                });
            } else
                _0x2c6086(![], !![]), _0x18ec85(_0x29c237, 'stories');
        }
        async function _0x3e9e8b(_0x46b5bf, _0x473a50, _0x2a71fe) {
            const _0x24ced1 = _0x4e7afc;
            var _0x5eaa7a = _0x1e041c('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x24ced1(0x2c0)]()[_0x24ced1(0x307)]() || location['pathname']['split']('/')[_0x24ced1(0x340)](_0x185c76 => _0x185c76[_0x24ced1(0x19d)] > 0x0)['at'](0x1);
            if (_0x46b5bf) {
                let _0x387322 = new Date()['getTime'](), _0x59b6f9 = Math['floor'](_0x387322 / 0x3e8);
                _0x38ed82(!![]);
                if (_0x5a1808['FORCE_RESOURCE_VIA_MEDIA'] && !_0x17637a[_0x24ced1(0x239)]) {
                    let _0x5157e7 = null, _0x113826 = await _0x3328c7(_0x5eaa7a), _0x343d20 = _0x113826[_0x24ced1(0x11e)]['pk'], _0xc7238b = await _0x1af57b(_0x343d20), _0x7242e9 = location[_0x24ced1(0x197)][_0x24ced1(0x2fc)]('/')[_0x24ced1(0x340)](_0x1c440c => _0x1c440c[_0x24ced1(0x19d)] > 0x0 && _0x1c440c[_0x24ced1(0x15b)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0xc7238b['data']['reels_media'][0x0]['items'][_0x24ced1(0x396)](_0x35a417 => {
                        _0x35a417['id'] == _0x7242e9 && (_0x5157e7 = _0x35a417['id']);
                    });
                    if (_0x5157e7 == null) {
                        let _0x2b7ae7 = _0x623179(_0x5eaa7a);
                        _0x2b7ae7[_0x24ced1(0x273)](function (_0x1c3bf9) {
                            const _0x4613f2 = _0x24ced1;
                            _0x1e041c(this)[_0x4613f2(0x2c6)]()[_0x4613f2(0x19d)] > 0x0 && (_0x5157e7 = _0xc7238b[_0x4613f2(0x32c)][_0x4613f2(0x247)][0x0]['items'][_0x1c3bf9]['id']);
                        });
                    }
                    _0x5157e7 == null && (_0x1e041c(_0x24ced1(0x213))[_0x24ced1(0x273)](function (_0x53c191) {
                        const _0x2feffe = _0x24ced1;
                        _0x1e041c(this)[_0x2feffe(0x129)](_0x2feffe(0x250)) && (_0x1e041c(this)[_0x2feffe(0x2c6)]()[_0x2feffe(0x19d)] > 0x0 && (_0x5157e7 = _0xc7238b[_0x2feffe(0x32c)][_0x2feffe(0x247)][0x0][_0x2feffe(0x397)][_0x53c191]['id']));
                    }), _0x1e041c(_0x24ced1(0x20d))[_0x24ced1(0x273)](function (_0x2bd573) {
                        const _0x4e1412 = _0x24ced1;
                        _0x1e041c(this)['children']()[_0x4e1412(0x129)]('_ac3q') && (_0x5157e7 = _0xc7238b['data'][_0x4e1412(0x247)][0x0][_0x4e1412(0x397)][_0x2bd573]['id']);
                    }));
                    _0x5157e7 == null && (_0x5157e7 = location[_0x24ced1(0x197)][_0x24ced1(0x2fc)]('/')[_0x24ced1(0x340)](_0x2ddcbe => _0x2ddcbe[_0x24ced1(0x19d)] > 0x0 && _0x2ddcbe[_0x24ced1(0x15b)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x47dea3 = await _0x506e20(_0x5157e7);
                    _0x5a1808[_0x24ced1(0x28e)] && (_0x59b6f9 = _0x47dea3[_0x24ced1(0x397)][0x0][_0x24ced1(0x1c0)]);
                    _0x47dea3['status'] === 'ok' ? _0x47dea3['items'][0x0][_0x24ced1(0x365)] ? _0x2a71fe ? _0x2f686c(_0x47dea3[_0x24ced1(0x397)][0x0][_0x24ced1(0x365)][0x0][_0x24ced1(0x2dc)]) : _0x26afe2(_0x47dea3[_0x24ced1(0x397)][0x0][_0x24ced1(0x365)][0x0][_0x24ced1(0x2dc)], _0x5eaa7a, _0x24ced1(0x2d8), _0x59b6f9, 'mp4', _0x5157e7) : _0x2a71fe ? _0x2f686c(_0x47dea3[_0x24ced1(0x397)][0x0][_0x24ced1(0x31c)][_0x24ced1(0xd7)][0x0][_0x24ced1(0x2dc)]) : _0x26afe2(_0x47dea3[_0x24ced1(0x397)][0x0][_0x24ced1(0x31c)][_0x24ced1(0xd7)][0x0][_0x24ced1(0x2dc)], _0x5eaa7a, _0x24ced1(0x2d8), _0x59b6f9, _0x24ced1(0x255), _0x5157e7) : (_0x5a1808[_0x24ced1(0x155)] ? (_0x17637a[_0x24ced1(0x239)] = !![], _0x3e9e8b(_0x46b5bf, _0x473a50, _0x2a71fe)) : alert(_0x24ced1(0x2a0) + _0x47dea3[_0x24ced1(0x17b)]), _0x1ece4c(_0x47dea3));
                    _0x38ed82(![]);
                    return;
                }
                if (_0x1e041c(_0x24ced1(0x184))['length'] > 0x0) {
                    let _0x5faa94 = 'mp4', _0x12f4b1 = '', _0x334a98 = location[_0x24ced1(0x197)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x11b68e = null;
                    if (_0x17637a['GL_dataCache']['stories'][_0x5eaa7a] && !_0x473a50) {
                        _0x1ece4c(_0x24ced1(0x341), _0x5eaa7a), _0x17637a[_0x24ced1(0x358)][_0x24ced1(0x2d8)][_0x5eaa7a][_0x24ced1(0x32c)][_0x24ced1(0x247)][0x0][_0x24ced1(0x397)]['forEach'](_0x187c04 => {
                            const _0x50a0db = _0x24ced1;
                            _0x187c04['id'] == _0x334a98 && (_0x12f4b1 = _0x187c04['video_resources'][0x0]['src'], _0x5a1808[_0x50a0db(0x28e)] && (_0x59b6f9 = _0x187c04[_0x50a0db(0x170)], _0x11b68e = _0x187c04['id']));
                        });
                        if (_0x12f4b1[_0x24ced1(0x19d)] == 0x0) {
                            _0x1ece4c('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x5eaa7a), _0x3e9e8b(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x43f8f5 = await _0x3328c7(_0x5eaa7a), _0x58e2a5 = _0x43f8f5[_0x24ced1(0x11e)]['pk'], _0x7da8c9 = await _0x1af57b(_0x58e2a5);
                        _0x7da8c9[_0x24ced1(0x32c)][_0x24ced1(0x247)][0x0][_0x24ced1(0x397)][_0x24ced1(0x396)](_0x4b81fe => {
                            const _0x266ec4 = _0x24ced1;
                            _0x4b81fe['id'] == _0x334a98 && (_0x12f4b1 = _0x4b81fe[_0x266ec4(0x1ad)][0x0][_0x266ec4(0x338)], _0x5a1808[_0x266ec4(0x28e)] && (_0x59b6f9 = _0x4b81fe['taken_at_timestamp'], _0x11b68e = _0x4b81fe['id']));
                        });
                        if (_0x12f4b1[_0x24ced1(0x19d)] == 0x0) {
                            let _0x50cb99 = _0x623179(_0x5eaa7a);
                            _0x50cb99[_0x24ced1(0x273)](function (_0x1a5817) {
                                const _0x5e2924 = _0x24ced1;
                                _0x1e041c(this)[_0x5e2924(0x2c6)]()[_0x5e2924(0x19d)] > 0x0 && (_0x12f4b1 = _0x7da8c9[_0x5e2924(0x32c)][_0x5e2924(0x247)][0x0]['items'][_0x1a5817]['video_resources'][0x0][_0x5e2924(0x338)], _0x5a1808[_0x5e2924(0x28e)] && (_0x59b6f9 = _0x7da8c9[_0x5e2924(0x32c)]['reels_media'][0x0][_0x5e2924(0x397)][_0x1a5817][_0x5e2924(0x170)], _0x11b68e = _0x7da8c9['data'][_0x5e2924(0x247)][0x0][_0x5e2924(0x397)][_0x1a5817]['id']));
                            }), _0x12f4b1[_0x24ced1(0x19d)] == 0x0 && (_0x1e041c(_0x24ced1(0x213))[_0x24ced1(0x273)](function (_0x26ae80) {
                                const _0x1eee5c = _0x24ced1;
                                _0x1e041c(this)[_0x1eee5c(0x129)]('x1lix1fw') && (_0x1e041c(this)['children']()[_0x1eee5c(0x19d)] > 0x0 && (_0x12f4b1 = _0x7da8c9[_0x1eee5c(0x32c)][_0x1eee5c(0x247)][0x0]['items'][_0x26ae80][_0x1eee5c(0x1ad)][0x0][_0x1eee5c(0x338)], _0x5a1808[_0x1eee5c(0x28e)] && (_0x59b6f9 = _0x7da8c9[_0x1eee5c(0x32c)][_0x1eee5c(0x247)][0x0][_0x1eee5c(0x397)][_0x26ae80][_0x1eee5c(0x170)], _0x11b68e = _0x7da8c9[_0x1eee5c(0x32c)]['reels_media'][0x0][_0x1eee5c(0x397)][_0x26ae80]['id'])));
                            }), _0x1e041c(_0x24ced1(0x20d))['each'](function (_0x5f2b31) {
                                const _0x432e61 = _0x24ced1;
                                _0x1e041c(this)[_0x432e61(0x2c6)]()[_0x432e61(0x129)](_0x432e61(0x1de)) && (_0x12f4b1 = _0x7da8c9[_0x432e61(0x32c)][_0x432e61(0x247)][0x0][_0x432e61(0x397)][_0x5f2b31][_0x432e61(0x1ad)][0x0]['src'], _0x5a1808[_0x432e61(0x28e)] && (_0x59b6f9 = _0x7da8c9[_0x432e61(0x32c)][_0x432e61(0x247)][0x0][_0x432e61(0x397)][_0x5f2b31][_0x432e61(0x170)], _0x11b68e = _0x7da8c9[_0x432e61(0x32c)][_0x432e61(0x247)][0x0][_0x432e61(0x397)][_0x5f2b31]['id']));
                            }));
                        }
                        _0x17637a[_0x24ced1(0x358)][_0x24ced1(0x2d8)][_0x5eaa7a] = _0x7da8c9;
                    }
                    _0x12f4b1[_0x24ced1(0x19d)] == 0x0 ? alert(_0x1f01e7(_0x24ced1(0x38d))) : _0x2a71fe ? _0x2f686c(_0x12f4b1) : _0x26afe2(_0x12f4b1, _0x5eaa7a, _0x24ced1(0x2d8), _0x59b6f9, _0x5faa94, _0x11b68e);
                } else {
                    let _0x54ad35 = _0x1e041c(_0x24ced1(0x1d1))['attr'](_0x24ced1(0xe4))?.[_0x24ced1(0x2fc)](',')[0x0]?.[_0x24ced1(0x2fc)]('\x20')[0x0], _0x3c6994 = _0x54ad35 ? _0x54ad35 : _0x1e041c(_0x24ced1(0x1d1))[_0x24ced1(0x340)](function () {
                            const _0x2ca66a = _0x24ced1;
                            return _0x1e041c(this)['parents']('a')[_0x2ca66a(0x19d)] === 0x0 && _0x1e041c(this)[_0x2ca66a(0x2dd)]() === _0x1e041c(this)[_0x2ca66a(0x2cb)]()[_0x2ca66a(0x2dd)]();
                        })[_0x24ced1(0x2ab)](_0x24ced1(0x338));
                    if (!_0x3c6994) {
                        let _0x4f84cc = _0x1e041c(_0x24ced1(0x138));
                        _0x3c6994 = _0x4f84cc[_0x24ced1(0x2ab)](_0x24ced1(0xe4)) ? _0x4f84cc[_0x24ced1(0x2ab)](_0x24ced1(0xe4))?.[_0x24ced1(0x2fc)](',')[0x0]?.[_0x24ced1(0x2fc)]('\x20')[0x0] : _0x4f84cc[_0x24ced1(0x2ab)]('src');
                    }
                    _0x5a1808[_0x24ced1(0x28e)] && (_0x59b6f9 = new Date(_0x1e041c(_0x24ced1(0x316))[_0x24ced1(0x2c0)]()['attr'](_0x24ced1(0x1b9)))[_0x24ced1(0x220)]());
                    let _0x2a7bb4 = _0x3c6994, _0x18b99b = _0x24ced1(0x255);
                    _0x2a71fe ? _0x2f686c(_0x2a7bb4) : _0x26afe2(_0x2a7bb4, _0x5eaa7a, _0x24ced1(0x2d8), _0x59b6f9, _0x18b99b, _0x1b845a(_0x2a7bb4) ?? '');
                }
                _0x17637a[_0x24ced1(0x239)] = ![], _0x38ed82(![]);
            } else {
                if (!_0x1e041c(_0x24ced1(0x137))[_0x24ced1(0x19d)]) {
                    _0x17637a[_0x24ced1(0x358)][_0x24ced1(0x2d8)] = {};
                    let _0x52a33c = null;
                    _0x1e041c(_0x24ced1(0x2ff))[_0x24ced1(0x19d)] > 0x0 ? _0x52a33c = _0x1e041c(_0x24ced1(0x2d5)) : (_0x52a33c = _0x1e041c(_0x24ced1(0x212)), _0x52a33c[_0x24ced1(0x1f7)]('position', _0x24ced1(0x2ce)));
                    _0x52a33c[_0x24ced1(0x19d)] === 0x0 && (_0x52a33c = _0x1e041c(_0x24ced1(0x1ab))['parent']()[_0x24ced1(0x2cb)]()[_0x24ced1(0x2cb)]()[_0x24ced1(0x10c)](_0x24ced1(0x218)), _0x52a33c['css'](_0x24ced1(0x141), _0x24ced1(0x2ce)));
                    _0x52a33c[_0x24ced1(0x19d)] === 0x0 && (_0x52a33c = _0x1e041c(_0x24ced1(0x1ab))[_0x24ced1(0x2cb)]()[_0x24ced1(0x2cb)]()[_0x24ced1(0x2cb)]()[_0x24ced1(0x10c)](_0x24ced1(0x17a)), _0x52a33c[_0x24ced1(0x1f7)]('position', 'relative'));
                    if (_0x52a33c['length'] === 0x0) {
                        let _0x4ed1a2 = _0x1e041c('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x13d5b8 = 0x0;
                        _0x4ed1a2[_0x24ced1(0x273)](function () {
                            const _0x52360d = _0x24ced1;
                            _0x1e041c(this)[_0x52360d(0x2dd)]() > _0x13d5b8 && (_0x13d5b8 = _0x1e041c(this)[_0x52360d(0x2dd)](), _0x52a33c = _0x1e041c(this)[_0x52360d(0x2c6)]('div')[_0x52360d(0x2c0)]());
                        });
                    }
                    if (_0x52a33c != null) {
                        _0x52a33c[_0x24ced1(0x2c0)]()[_0x24ced1(0x1f7)](_0x24ced1(0x141), 'relative'), _0x52a33c['first']()['append'](_0x24ced1(0x317) + _0x1f01e7('DW') + _0x24ced1(0x233) + _0x188dac[_0x24ced1(0x2c5)] + '</div>'), _0x52a33c[_0x24ced1(0x2c0)]()['append'](_0x24ced1(0x330) + _0x1f01e7(_0x24ced1(0x369)) + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x188dac[_0x24ced1(0x369)] + _0x24ced1(0x174));
                        let _0x374430 = _0x623179(_0x5eaa7a);
                        _0x374430[_0x24ced1(0x19d)] > 0x1 && _0x52a33c[_0x24ced1(0x2c0)]()[_0x24ced1(0x2d6)](_0x24ced1(0x232) + _0x1f01e7(_0x24ced1(0x1f0)) + _0x24ced1(0x2d9) + _0x188dac[_0x24ced1(0x183)] + '</div>'), _0x52a33c[_0x24ced1(0x10c)]('img[referrerpolicy]')[_0x24ced1(0x273)](function () {
                            const _0x4c8969 = _0x24ced1;
                            _0x1e041c(this)['on'](_0x4c8969(0x240), function () {
                                const _0x58e75b = _0x4c8969;
                                !_0x1e041c(this)[_0x58e75b(0x32c)](_0x58e75b(0x25f)) && (_0x52a33c['find']('.IG_DWSTORY_THUMBNAIL')[_0x58e75b(0x19d)] === 0x0 ? (_0x1e041c(this)['attr'](_0x58e75b(0x297), !![]), _0x1e041c(_0x58e75b(0x193))[_0x58e75b(0x1c3)](), _0x1ece4c('(story)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x1e041c(this)[_0x58e75b(0x2ab)]('data-remove-thumbnail', !![]), _0x1ece4c(_0x58e75b(0x313))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x314a00(_0x129c4d, _0x22de5e) {
            const _0x37f638 = _0x4e7afc;
            if (_0x129c4d) {
                let _0x1676d7 = new Date()['getTime'](), _0xf6063b = Math['floor'](_0x1676d7 / 0x3e8), _0x179bb9 = _0x37f638(0x255), _0x401734 = _0x1e041c('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x37f638(0x2c0)]()[_0x37f638(0x307)]() || location[_0x37f638(0x197)][_0x37f638(0x2fc)]('/')['at'](0x2), _0x520689 = location[_0x37f638(0x197)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x331a12 = '', _0x28471f = null;
                _0x38ed82(!![]);
                if (_0x5a1808[_0x37f638(0x386)] && !_0x17637a[_0x37f638(0x239)]) {
                    let _0x1b2220 = await _0x3328c7(_0x401734), _0x5ae44f = _0x1b2220[_0x37f638(0x11e)]['pk'], _0x4726ee = await _0x1af57b(_0x5ae44f), _0x2c14f9 = location[_0x37f638(0x197)][_0x37f638(0x2fc)]('/')[_0x37f638(0x340)](_0xd321f9 => _0xd321f9[_0x37f638(0x19d)] > 0x0 && _0xd321f9[_0x37f638(0x15b)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x4726ee[_0x37f638(0x32c)]['reels_media'][0x0][_0x37f638(0x397)][_0x37f638(0x396)](_0x24d7ce => {
                        _0x24d7ce['id'] == _0x2c14f9 && (_0x28471f = _0x24d7ce['id']);
                    });
                    if (_0x28471f == null) {
                        let _0x382acb = _0x623179(_0x401734);
                        _0x382acb['each'](function (_0x5a836d) {
                            const _0xf267fe = _0x37f638;
                            _0x1e041c(this)[_0xf267fe(0x2c6)]()[_0xf267fe(0x19d)] > 0x0 && (_0x28471f = _0x4726ee[_0xf267fe(0x32c)]['reels_media'][0x0][_0xf267fe(0x397)][_0x5a836d]['id']);
                        });
                    }
                    _0x28471f == null && (_0x1e041c('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x37f638(0x273)](function (_0x298bbc) {
                        const _0x278e60 = _0x37f638;
                        _0x1e041c(this)[_0x278e60(0x129)](_0x278e60(0x250)) && (_0x1e041c(this)[_0x278e60(0x2c6)]()[_0x278e60(0x19d)] > 0x0 && (_0x28471f = _0x4726ee[_0x278e60(0x32c)][_0x278e60(0x247)][0x0][_0x278e60(0x397)][_0x298bbc]['id']));
                    }), _0x1e041c(_0x37f638(0x20d))['each'](function (_0x3970dc) {
                        const _0x5519e5 = _0x37f638;
                        _0x1e041c(this)[_0x5519e5(0x2c6)]()[_0x5519e5(0x129)](_0x5519e5(0x1de)) && (_0x28471f = _0x4726ee['data']['reels_media'][0x0][_0x5519e5(0x397)][_0x3970dc]['id']);
                    }));
                    _0x28471f == null && (_0x28471f = location[_0x37f638(0x197)][_0x37f638(0x2fc)]('/')[_0x37f638(0x340)](_0x433b5f => _0x433b5f[_0x37f638(0x19d)] > 0x0 && _0x433b5f[_0x37f638(0x15b)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x154eed = await _0x506e20(_0x28471f);
                    _0x5a1808[_0x37f638(0x28e)] && (_0xf6063b = _0x154eed['items'][0x0][_0x37f638(0x1c0)]);
                    _0x154eed[_0x37f638(0x20b)] === 'ok' ? _0x26afe2(_0x154eed[_0x37f638(0x397)][0x0][_0x37f638(0x31c)][_0x37f638(0xd7)][0x0][_0x37f638(0x2dc)], _0x401734, _0x37f638(0x2d8), _0xf6063b, 'jpg', _0x28471f) : (_0x5a1808[_0x37f638(0x155)] ? (_0x17637a['tempFetchRateLimit'] = !![], _0x314a00(!![], _0x22de5e)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x154eed[_0x37f638(0x17b)]), _0x1ece4c(_0x154eed));
                    _0x38ed82(![]);
                    return;
                }
                if (_0x17637a[_0x37f638(0x358)][_0x37f638(0x2d8)][_0x401734] && !_0x22de5e) {
                    _0x1ece4c(_0x37f638(0x341), _0x401734), _0x17637a[_0x37f638(0x358)][_0x37f638(0x2d8)][_0x401734][_0x37f638(0x32c)][_0x37f638(0x247)][0x0]['items']['forEach'](_0x1dbd54 => {
                        const _0x46e217 = _0x37f638;
                        _0x1dbd54['id'] == _0x520689 && (_0x331a12 = _0x1dbd54[_0x46e217(0x2ed)], _0x5a1808[_0x46e217(0x28e)] && (_0xf6063b = _0x1dbd54[_0x46e217(0x170)], _0x28471f = _0x1dbd54['id']));
                    });
                    if (_0x331a12['length'] == 0x0) {
                        _0x1ece4c('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x401734), _0x314a00(!![], !![]);
                        return;
                    }
                } else {
                    let _0x4830b4 = await _0x3328c7(_0x401734), _0xca44ce = _0x4830b4['user']['pk'], _0x408382 = await _0x1af57b(_0xca44ce);
                    _0x408382['data'][_0x37f638(0x247)][0x0]['items'][_0x37f638(0x396)](_0x57026f => {
                        const _0x20f821 = _0x37f638;
                        _0x57026f['id'] == _0x520689 && (_0x331a12 = _0x57026f['display_url'], _0x5a1808[_0x20f821(0x28e)] && (_0xf6063b = _0x57026f[_0x20f821(0x170)], _0x28471f = _0x57026f['id']));
                    });
                    if (_0x331a12['length'] == 0x0) {
                        let _0x5ce26d = _0x623179(_0x401734);
                        _0x5ce26d[_0x37f638(0x273)](function (_0x282194) {
                            const _0x52d173 = _0x37f638;
                            _0x1e041c(this)[_0x52d173(0x2c6)]()[_0x52d173(0x19d)] > 0x0 && (_0x331a12 = _0x408382[_0x52d173(0x32c)]['reels_media'][0x0][_0x52d173(0x397)][_0x282194][_0x52d173(0x2ed)], _0x5a1808[_0x52d173(0x28e)] && (_0xf6063b = _0x408382[_0x52d173(0x32c)][_0x52d173(0x247)][0x0][_0x52d173(0x397)][_0x282194]['taken_at_timestamp'], _0x28471f = _0x408382['data'][_0x52d173(0x247)][0x0][_0x52d173(0x397)][_0x282194]['id']));
                        }), _0x331a12[_0x37f638(0x19d)] == 0x0 && (_0x1e041c('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x37f638(0x273)](function (_0x45e0c9) {
                            const _0x4ffcfa = _0x37f638;
                            _0x1e041c(this)[_0x4ffcfa(0x129)]('x1lix1fw') && (_0x1e041c(this)[_0x4ffcfa(0x2c6)]()[_0x4ffcfa(0x19d)] > 0x0 && (_0x331a12 = _0x408382[_0x4ffcfa(0x32c)][_0x4ffcfa(0x247)][0x0][_0x4ffcfa(0x397)][_0x45e0c9]['display_url'], _0x5a1808[_0x4ffcfa(0x28e)] && (_0xf6063b = _0x408382['data'][_0x4ffcfa(0x247)][0x0]['items'][_0x45e0c9][_0x4ffcfa(0x170)], _0x28471f = _0x408382['data'][_0x4ffcfa(0x247)][0x0]['items'][_0x45e0c9]['id'])));
                        }), _0x1e041c(_0x37f638(0x20d))[_0x37f638(0x273)](function (_0x150dad) {
                            const _0x976b13 = _0x37f638;
                            _0x1e041c(this)['children']()[_0x976b13(0x129)](_0x976b13(0x1de)) && (_0x331a12 = _0x408382[_0x976b13(0x32c)][_0x976b13(0x247)][0x0][_0x976b13(0x397)][_0x150dad][_0x976b13(0x2ed)], _0x5a1808[_0x976b13(0x28e)] && (_0xf6063b = _0x408382['data'][_0x976b13(0x247)][0x0][_0x976b13(0x397)][_0x150dad][_0x976b13(0x170)], _0x28471f = _0x408382[_0x976b13(0x32c)][_0x976b13(0x247)][0x0][_0x976b13(0x397)][_0x150dad]['id']));
                        }));
                    }
                }
                _0x26afe2(_0x331a12, _0x401734, _0x37f638(0x20c), _0xf6063b, _0x179bb9, _0x28471f), _0x17637a[_0x37f638(0x239)] = ![], _0x38ed82(![]);
            } else {
                if (_0x1e041c(_0x37f638(0x154))['parent']()[_0x37f638(0x10c)](_0x37f638(0x336))['length']) {
                    let _0x11a7c8 = null;
                    _0x1e041c('body\x20>\x20div\x20section._ac0a')[_0x37f638(0x19d)] > 0x0 ? _0x11a7c8 = _0x1e041c(_0x37f638(0x2d5)) : (_0x11a7c8 = _0x1e041c('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x11a7c8['css'](_0x37f638(0x141), _0x37f638(0x2ce)));
                    _0x11a7c8[_0x37f638(0x19d)] === 0x0 && (_0x11a7c8 = _0x1e041c(_0x37f638(0x1ab))[_0x37f638(0x2cb)]()['parent']()[_0x37f638(0x2cb)]()['find'](_0x37f638(0x218)), _0x11a7c8[_0x37f638(0x1f7)](_0x37f638(0x141), _0x37f638(0x2ce)));
                    _0x11a7c8[_0x37f638(0x19d)] === 0x0 && (_0x11a7c8 = _0x1e041c(_0x37f638(0x1ab))[_0x37f638(0x2cb)]()['parent']()[_0x37f638(0x2cb)]()[_0x37f638(0x10c)](_0x37f638(0x17a)), _0x11a7c8[_0x37f638(0x1f7)](_0x37f638(0x141), _0x37f638(0x2ce)));
                    if (_0x11a7c8[_0x37f638(0x19d)] === 0x0) {
                        let _0x4bc93d = _0x1e041c(_0x37f638(0x202)), _0x551ecc = 0x0;
                        _0x4bc93d[_0x37f638(0x273)](function () {
                            const _0x3dacd6 = _0x37f638;
                            _0x1e041c(this)[_0x3dacd6(0x2dd)]() > _0x551ecc && (_0x551ecc = _0x1e041c(this)[_0x3dacd6(0x2dd)](), _0x11a7c8 = _0x1e041c(this)['children'](_0x3dacd6(0x18e))[_0x3dacd6(0x2c0)]());
                        });
                    }
                    _0x11a7c8 != null && (_0x11a7c8[_0x37f638(0x2c0)]()[_0x37f638(0x1f7)](_0x37f638(0x141), _0x37f638(0x2ce)), _0x11a7c8[_0x37f638(0x2c0)]()[_0x37f638(0x2d6)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x1f01e7(_0x37f638(0x16a)) + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x188dac[_0x37f638(0x373)] + _0x37f638(0x174)));
                }
            }
        }
        function _0x1fc284(_0x26c238) {
            return new Promise((_0x470bd2, _0x41973a) => {
                const _0x23b23d = a0_0x5e9f;
                let _0x4b6bb5 = _0x23b23d(0x329) + _0x26c238 + _0x23b23d(0x17d);
                GM_xmlhttpRequest({
                    'method': _0x23b23d(0x2b6),
                    'url': _0x4b6bb5,
                    'onload': function (_0x8e1945) {
                        const _0x24e537 = _0x23b23d;
                        try {
                            let _0x40fcb1 = JSON[_0x24e537(0x29f)](_0x8e1945[_0x24e537(0x160)]);
                            _0x470bd2(_0x40fcb1);
                        } catch (_0x2133b5) {
                            _0x1ece4c('getHighlightStories()', _0x24e537(0x2b8), _0x2133b5[_0x24e537(0x17b)]), _0x41973a(_0x2133b5);
                        }
                    },
                    'onerror': function (_0x25c522) {
                        const _0x4d02ac = _0x23b23d;
                        _0x1ece4c('getHighlightStories()', _0x4d02ac(0x2b8), _0x25c522), _0x41973a(_0x25c522);
                    }
                });
            });
        }
        function _0x1af57b(_0x1b1d90) {
            return new Promise((_0x180298, _0x214efd) => {
                const _0x433417 = a0_0x5e9f;
                let _0x2ceab4 = 'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22' + _0x1b1d90 + _0x433417(0x17d);
                GM_xmlhttpRequest({
                    'method': _0x433417(0x2b6),
                    'url': _0x2ceab4,
                    'onload': function (_0x35a4d3) {
                        const _0x5e306b = _0x433417;
                        try {
                            let _0x475016 = JSON[_0x5e306b(0x29f)](_0x35a4d3[_0x5e306b(0x160)]);
                            _0x1ece4c(_0x5e306b(0x23f), _0x475016), _0x180298(_0x475016);
                        } catch (_0x956f3f) {
                            _0x1ece4c(_0x5e306b(0x23f), _0x5e306b(0x2b8), _0x956f3f['message']), _0x214efd(_0x956f3f);
                        }
                    },
                    'onerror': function (_0x134a03) {
                        const _0x2daff6 = _0x433417;
                        _0x1ece4c(_0x2daff6(0x23f), 'reject', _0x134a03), _0x214efd(_0x134a03);
                    }
                });
            });
        }
        function _0x3328c7(_0x1ad1bf) {
            return new Promise((_0x361de1, _0x3c4bc2) => {
                const _0x62e9a9 = a0_0x5e9f;
                let _0x236603 = _0x62e9a9(0xf8) + _0x1ad1bf;
                GM_xmlhttpRequest({
                    'method': _0x62e9a9(0x2b6),
                    'url': _0x236603,
                    'onload': function (_0x1a69bd) {
                        const _0x5cd226 = _0x62e9a9;
                        let _0x46ef6c = JSON[_0x5cd226(0x29f)](_0x1a69bd[_0x5cd226(0x160)]), _0x3111a3 = null;
                        _0x46ef6c[_0x5cd226(0x381)]['forEach'](_0x39de07 => {
                            const _0x2a165d = _0x5cd226;
                            _0x39de07['user']['username']?.['toLowerCase']() === _0x1ad1bf?.[_0x2a165d(0xd6)]() && (_0x3111a3 = _0x39de07);
                        }), _0x3111a3 != null ? (_0x1ece4c(_0x5cd226(0x178), _0x3111a3), _0x361de1(_0x3111a3)) : _0x26dc00(_0x1ad1bf)['then'](_0x757f02 => {
                            _0x361de1(_0x757f02);
                        })[_0x5cd226(0x1b0)](_0x3b2a82 => {
                            const _0x5044d7 = _0x5cd226;
                            alert(_0x5044d7(0x194));
                        });
                    },
                    'onerror': function (_0x2ad75c) {
                        const _0x2a1758 = _0x62e9a9;
                        _0x1ece4c('getUserId()', _0x2a1758(0x2b8), _0x2ad75c), _0x3c4bc2(_0x2ad75c);
                    }
                });
            });
        }
        function _0x26dc00(_0x1c0cf9) {
            return new Promise((_0xc3b131, _0x2fc96e) => {
                const _0x2a2503 = a0_0x5e9f;
                let _0xe5a213 = 'https://i.instagram.com/api/v1/users/web_profile_info/?username=' + _0x1c0cf9;
                GM_xmlhttpRequest({
                    'method': _0x2a2503(0x2b6),
                    'url': _0xe5a213,
                    'headers': { 'X-IG-App-ID': _0x421a84() },
                    'onload': function (_0x19e6d5) {
                        const _0x15df7b = _0x2a2503;
                        try {
                            let _0x1a9ef4 = JSON[_0x15df7b(0x29f)](_0x19e6d5[_0x15df7b(0x160)]), _0x418808 = _0x1a9ef4?.['data']?.[_0x15df7b(0x11e)];
                            if (_0x418808 != null) {
                                let _0x22e737 = _0x1a9ef4?.[_0x15df7b(0x32c)];
                                _0x22e737[_0x15df7b(0x11e)]['pk'] = _0x22e737[_0x15df7b(0x11e)]['id'], _0x1ece4c(_0x15df7b(0x18b), _0x1a9ef4), _0xc3b131(_0x22e737);
                            } else
                                _0x1ece4c(_0x15df7b(0x18b), _0x15df7b(0x2b8), 'undefined'), _0x2fc96e(_0x15df7b(0x33a));
                        } catch (_0x387459) {
                            _0x1ece4c('getUserIdWithAgent()', _0x15df7b(0x2b8), _0x387459['message']), _0x2fc96e(_0x387459);
                        }
                    },
                    'onerror': function (_0x2a75f8) {
                        const _0x57b43b = _0x2a2503;
                        _0x1ece4c(_0x57b43b(0x18b), _0x57b43b(0x2b8), _0x2a75f8), _0x2fc96e(_0x2a75f8);
                    }
                });
            });
        }
        function _0x400b89(_0xb8ad5) {
            return new Promise((_0x2f20bb, _0x8a4bec) => {
                const _0x40df2a = a0_0x5e9f;
                let _0xc20723 = _0x40df2a(0x21b) + _0xb8ad5 + _0x40df2a(0x1b7);
                GM_xmlhttpRequest({
                    'method': _0x40df2a(0x2b6),
                    'url': _0xc20723,
                    'headers': { 'User-Agent': _0x40df2a(0x26e) },
                    'onload': function (_0x2d0ec5) {
                        const _0x4a1dc9 = _0x40df2a;
                        try {
                            let _0x15c4e7 = JSON[_0x4a1dc9(0x29f)](_0x2d0ec5[_0x4a1dc9(0x160)]);
                            _0x15c4e7[_0x4a1dc9(0x20b)] !== 'ok' ? (_0x1ece4c(_0x4a1dc9(0x15f), 'reject', _0x15c4e7), _0x8a4bec(_0x4a1dc9(0x2f6))) : (_0x1ece4c('getUserHighSizeProfile()', _0x15c4e7), _0x2f20bb(_0x15c4e7[_0x4a1dc9(0x11e)][_0x4a1dc9(0x20e)]?.[_0x4a1dc9(0x2dc)]));
                        } catch (_0x463fed) {
                            _0x1ece4c(_0x4a1dc9(0x15f), _0x4a1dc9(0x2b8), _0x463fed), _0x8a4bec(_0x463fed);
                        }
                    },
                    'onerror': function (_0x2998e3) {
                        const _0x26d8e0 = _0x40df2a;
                        _0x1ece4c('getUserHighSizeProfile()', _0x26d8e0(0x2b8), _0x2998e3), _0x8a4bec(_0x2998e3);
                    }
                });
            });
        }
        function _0x267b7a(_0x570f0c) {
            return new Promise((_0xb915d9, _0x4682ae) => {
                const _0x16dafa = a0_0x5e9f;
                if (!_0x570f0c)
                    _0x4682ae(_0x16dafa(0x325));
                let _0x453027 = _0x570f0c, _0x4a7a9d = _0x16dafa(0x1a0) + _0x453027 + _0x16dafa(0xbd);
                GM_xmlhttpRequest({
                    'method': _0x16dafa(0x2b6),
                    'url': _0x4a7a9d,
                    'onload': function (_0x3e7dbb) {
                        const _0x3b4063 = _0x16dafa;
                        try {
                            let _0x882a5d = JSON[_0x3b4063(0x29f)](_0x3e7dbb[_0x3b4063(0x160)]);
                            _0x1ece4c(_0x3b4063(0x378), _0x882a5d), _0xb915d9(_0x882a5d['data'][_0x3b4063(0x100)]['owner'][_0x3b4063(0xeb)]);
                        } catch (_0x132bbf) {
                            _0x1ece4c(_0x3b4063(0x378), _0x3b4063(0x2b8), _0x132bbf[_0x3b4063(0x17b)]), _0x4682ae(_0x132bbf);
                        }
                    },
                    'onerror': function (_0xdb4179) {
                        const _0x268902 = _0x16dafa;
                        _0x1ece4c(_0x268902(0x378), _0x268902(0x2b8), _0xdb4179), _0x4682ae(_0xdb4179);
                    }
                });
            });
        }
        function _0x44eec3(_0x3ded34) {
            return new Promise((_0x330320, _0x3de4c6) => {
                const _0x1dd901 = a0_0x5e9f;
                if (!_0x3ded34)
                    _0x3de4c6(_0x1dd901(0x325));
                let _0x42d3a6 = _0x3ded34, _0x3d692f = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x42d3a6 + _0x1dd901(0xbd);
                GM_xmlhttpRequest({
                    'method': _0x1dd901(0x2b6),
                    'url': _0x3d692f,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x24f254) {
                        const _0x458500 = _0x1dd901;
                        try {
                            let _0x597d93 = JSON[_0x458500(0x29f)](_0x24f254[_0x458500(0x160)]);
                            _0x1ece4c(_0x597d93), _0x597d93['status'] === _0x458500(0x37a) ? (_0x1ece4c(_0x458500(0x25a), _0x458500(0x2c1), _0x42d3a6), _0x3219a2(_0x42d3a6)[_0x458500(0x163)](_0x5bb3f6 => {
                                const _0x3b8eaa = _0x458500;
                                _0x330320({
                                    'type': _0x3b8eaa(0x379),
                                    'data': _0x5bb3f6['xdt_api__v1__media__shortcode__web_info']['items'][0x0]
                                });
                            })[_0x458500(0x1b0)](_0x7fa619 => {
                                _0x3de4c6(_0x7fa619);
                            })) : _0x330320({
                                'type': _0x458500(0x2a6),
                                'data': _0x597d93[_0x458500(0x32c)]
                            });
                        } catch (_0x4f2f15) {
                            _0x1ece4c('getBlobMedia()', 'reject', _0x4f2f15[_0x458500(0x17b)]), _0x3de4c6(_0x4f2f15);
                        }
                    },
                    'onerror': function (_0x41b39c) {
                        const _0x4726c4 = _0x1dd901;
                        _0x1ece4c(_0x4726c4(0x1bb), _0x4726c4(0x2b8), _0x41b39c), _0x3de4c6(_0x41b39c);
                    }
                });
            });
        }
        function _0x3219a2(_0x58b364) {
            return new Promise((_0x2b9da8, _0x36f631) => {
                const _0x25c0c3 = a0_0x5e9f;
                if (!_0x58b364)
                    _0x36f631('NOPATH');
                let _0x174ea7 = _0x58b364, _0x13f87e = _0x25c0c3(0x36d) + _0x174ea7 + _0x25c0c3(0x2f3);
                GM_xmlhttpRequest({
                    'method': _0x25c0c3(0x2b6),
                    'url': _0x13f87e,
                    'headers': {
                        'User-Agent': _0x25c0c3(0x26e),
                        'X-IG-App-ID': _0x421a84()
                    },
                    'onload': function (_0x48b0ef) {
                        const _0x3493c1 = _0x25c0c3;
                        try {
                            let _0x2eea23 = JSON[_0x3493c1(0x29f)](_0x48b0ef[_0x3493c1(0x160)]);
                            _0x1ece4c(_0x2eea23), _0x2eea23[_0x3493c1(0x20b)] === 'fail' ? (alert(_0x3493c1(0x2e6) + _0x2eea23['message'] + ':\x20' + _0x2eea23[_0x3493c1(0x287)]), _0x1ece4c(_0x3493c1(0xe8) + _0x2eea23[_0x3493c1(0x17b)] + ':\x20' + _0x2eea23[_0x3493c1(0x287)]), _0x36f631(_0x48b0ef)) : (_0x1ece4c(_0x3493c1(0x277), _0x2eea23[_0x3493c1(0x32c)]), _0x2b9da8(_0x2eea23[_0x3493c1(0x32c)]));
                        } catch (_0x4a54e5) {
                            _0x1ece4c(_0x3493c1(0x277), _0x3493c1(0x2b8), _0x4a54e5[_0x3493c1(0x17b)]), _0x36f631(_0x4a54e5);
                        }
                    },
                    'onerror': function (_0x2bc0dc) {
                        const _0x25e8b4 = _0x25c0c3;
                        _0x1ece4c(_0x25e8b4(0x277), _0x25e8b4(0x2b8), _0x2bc0dc), _0x36f631(_0x2bc0dc);
                    }
                });
            });
        }
        function _0x506e20(_0x4fa6a2) {
            return new Promise((_0x219819, _0xd88080) => {
                const _0x552373 = a0_0x5e9f;
                let _0x4fb5c2 = 'https://i.instagram.com/api/v1/media/' + _0x4fa6a2 + _0x552373(0x1b7);
                if (_0x4fa6a2 == null) {
                    alert(_0x552373(0x13e)), _0x1ece4c(_0x552373(0x262), _0x552373(0x2b8), _0x552373(0x13e)), _0x38ed82(![]), _0xd88080(-0x1);
                    return;
                }
                if (_0x421a84() == null) {
                    alert(_0x552373(0x319)), _0x1ece4c(_0x552373(0x262), _0x552373(0x2b8), _0x552373(0x319)), _0x38ed82(![]), _0xd88080(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x552373(0x2b6),
                    'url': _0x4fb5c2,
                    'headers': {
                        'User-Agent': window[_0x552373(0x1aa)][_0x552373(0x2e8)],
                        'Accept': _0x552373(0x25d),
                        'X-IG-App-ID': _0x421a84()
                    },
                    'onload': function (_0x30b433) {
                        const _0x374a68 = _0x552373;
                        if (_0x30b433[_0x374a68(0x2ae)] == _0x4fb5c2) {
                            let _0xbd6549 = JSON[_0x374a68(0x29f)](_0x30b433[_0x374a68(0x160)]);
                            _0x1ece4c(_0x374a68(0x262), _0xbd6549), _0x219819(_0xbd6549);
                        } else {
                            let _0x5e9a92 = new URL(_0x30b433['finalUrl']);
                            _0x5e9a92[_0x374a68(0x197)][_0x374a68(0xd2)](_0x374a68(0x105)) ? (_0x1ece4c(_0x374a68(0x262), _0x374a68(0x2b8), _0x374a68(0x345)), alert(_0x374a68(0x345))) : (_0x1ece4c(_0x374a68(0x262), _0x374a68(0x2b8), _0x374a68(0x35d) + _0x30b433[_0x374a68(0x2ae)] + '\x22'), alert(_0x374a68(0x35d) + _0x30b433[_0x374a68(0x2ae)] + '\x22')), _0x38ed82(![]), _0xd88080(-0x1);
                        }
                    },
                    'onerror': function (_0x4c68e2) {
                        const _0x572a68 = _0x552373;
                        _0x1ece4c(_0x572a68(0x262), _0x572a68(0x2b8), _0x4c68e2), _0x219819(_0x4c68e2);
                    }
                });
            });
        }
        function _0x1b845a(_0x130dd6) {
            const _0xcf1f88 = _0x4e7afc;
            let _0x4acb9b = new URL(_0x130dd6), _0x182d3f = _0x4acb9b?.[_0xcf1f88(0x2ac)]?.[_0xcf1f88(0x25e)](_0xcf1f88(0x2b5))?.[_0xcf1f88(0x2fc)]('.')['at'](0x0);
            return _0x182d3f ? atob(_0x182d3f) : null;
        }
        function _0x421a84() {
            const _0x33d6fe = _0x4e7afc;
            let _0x236078 = null;
            return _0x1e041c('script[type=\x22application/json\x22]')[_0x33d6fe(0x273)](function () {
                const _0x209eb5 = _0x33d6fe, _0x52f332 = /"APP_ID":"([0-9]+)"/ig, _0x3e0f54 = _0x1e041c(this)['text']()[_0x209eb5(0x15b)](_0x52f332);
                _0x3e0f54 != null && _0x236078 == null && (_0x236078 = [..._0x1e041c(this)[_0x209eb5(0x307)]()[_0x209eb5(0xc0)](_0x52f332)]);
            }), _0x236078 ? _0x236078['at'](0x0)['at'](-0x1) : null;
        }
        function _0x38ed82(_0x23e3de) {
            const _0xee764 = _0x4e7afc;
            _0x23e3de ? (_0x1e041c(_0xee764(0xfe))['removeClass'](_0xee764(0x32a)), _0x1e041c(_0xee764(0xfe))[_0xee764(0x1f7)](_0xee764(0x33c), _0xee764(0x256))) : (_0x1e041c(_0xee764(0xfe))['addClass'](_0xee764(0x32a)), _0x1e041c(_0xee764(0xfe))[_0xee764(0x1f7)]('z-index', ''));
        }
        function _0x623179(_0x49eda4) {
            const _0x4a1739 = _0x4e7afc;
            let _0x51a7d2 = _0x1e041c(_0x4a1739(0x35e) + _0x49eda4 + '\x22]\x20span')[_0x4a1739(0x340)](function () {
                const _0x28e8f7 = _0x4a1739;
                return _0x1e041c(this)['children']()[_0x28e8f7(0x19d)] === 0x0 && _0x1e041c(this)[_0x28e8f7(0x10c)](_0x28e8f7(0x376))[_0x28e8f7(0x19d)] === 0x0 && _0x1e041c(this)[_0x28e8f7(0x307)]()?.[_0x28e8f7(0xd6)]() === _0x49eda4?.[_0x28e8f7(0xd6)]();
            })[_0x4a1739(0x1d9)](_0x4a1739(0x363))[_0x4a1739(0x340)](function () {
                const _0x1b4d25 = _0x4a1739;
                return _0x1e041c(this)[_0x1b4d25(0x307)]()?.[_0x1b4d25(0xd6)]() !== _0x49eda4?.['toLowerCase']();
            })['filter'](function () {
                const _0xac9a4a = _0x4a1739;
                return _0x1e041c(this)[_0xac9a4a(0x2c6)]()[_0xac9a4a(0x19d)] > 0x1;
            })[_0x4a1739(0x2c0)]();
            return _0x51a7d2[_0x4a1739(0x19d)] === 0x0 && (_0x51a7d2 = _0x1e041c(_0x4a1739(0x35e) + _0x49eda4 + '\x22]')[_0x4a1739(0x340)](function () {
                const _0x2e96ad = _0x4a1739;
                return _0x1e041c(this)[_0x2e96ad(0x10c)]('img')[_0x2e96ad(0x19d)] > 0x0;
            })[_0x4a1739(0x1d9)](_0x4a1739(0x363))[_0x4a1739(0x340)](function () {
                const _0x20484c = _0x4a1739;
                return _0x1e041c(this)[_0x20484c(0x307)]()?.[_0x20484c(0xd6)]() !== _0x49eda4?.[_0x20484c(0xd6)]();
            })[_0x4a1739(0x340)](function () {
                const _0x4f88c7 = _0x4a1739;
                return _0x1e041c(this)[_0x4f88c7(0x2c6)]()['length'] > 0x1;
            })[_0x4a1739(0x2c0)]()), _0x51a7d2['children']()['filter'](function () {
                const _0x3069df = _0x4a1739;
                return _0x1e041c(this)[_0x3069df(0x1b2)]() < 0xa;
            })[_0x4a1739(0x2c0)]()[_0x4a1739(0x2c6)]();
        }
        function _0x23d0b8(_0x5f07e3, _0xb36990) {
            const _0x2ab720 = _0x4e7afc;
            _0x1e041c('.circle_wrapper')[_0x2ab720(0x19d)] ? (_0x1e041c(_0x2ab720(0xd4))[_0x2ab720(0x307)](_0x5f07e3 + '/' + _0xb36990), _0x5f07e3 >= _0xb36990 && _0x1e041c(_0x2ab720(0x149))['fadeOut'](0xfa, function () {
                const _0x44f25d = _0x2ab720;
                _0x1e041c(this)[_0x44f25d(0x1c3)]();
            })) : _0x1e041c('body')['append'](_0x2ab720(0x271) + _0x5f07e3 + '/' + _0xb36990 + _0x2ab720(0x270));
        }
        function _0x2c6086(_0x7f6404, _0x2d972d) {
            const _0xe1a667 = _0x4e7afc;
            let _0x4a8b9a = _0x7f6404 ? _0xe1a667(0x2e0) : '';
            _0x1e041c(_0xe1a667(0x370))[_0xe1a667(0x2d6)](_0xe1a667(0x2ec) + _0x4a8b9a + '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>'), _0x1e041c(_0xe1a667(0x1b5))['append'](_0xe1a667(0x392) + _0x1f01e7(_0xe1a667(0x114)) + '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v' + GM_info['script'][_0xe1a667(0x16f)] + _0xe1a667(0x305) + _0x188dac[_0xe1a667(0x114)] + _0xe1a667(0x1e5)), _0x2d972d && (_0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')[_0xe1a667(0x2d6)](_0xe1a667(0x1e1)), _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group')[_0xe1a667(0x2d6)](_0xe1a667(0xda) + _0x1f01e7(_0xe1a667(0x290)) + _0xe1a667(0x34e)), _0x1e041c(_0xe1a667(0x153))[_0xe1a667(0x2d6)](_0xe1a667(0x2bf) + _0x1f01e7(_0xe1a667(0x1e9)) + '</button>'), _0x1e041c(_0xe1a667(0x1b5))[_0xe1a667(0x2d6)]('<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>' + _0x1f01e7(_0xe1a667(0x252)) + _0xe1a667(0x395)));
        }
        function _0x2fe2f3(_0x413eff) {
            const _0x1a058b = _0x4e7afc;
            _0x1e041c('.IG_POPUP_DIG')[_0x1a058b(0x19d)] && (_0x413eff ? _0x1e041c(_0x1a058b(0x36a))[_0x1a058b(0x2f7)](_0x1a058b(0x2e0)) : _0x1e041c('.IG_POPUP_DIG')[_0x1a058b(0x314)](_0x1a058b(0x2e0)));
        }
        function _0x26afe2(_0x4f3182, _0x47f059, _0x576e9e, _0x236391, _0x5de808, _0x1f6adf) {
            return new Promise(_0x350f4c => {
                setTimeout(() => {
                    _0x38ed82(!![]), fetch(_0x4f3182)['then'](_0x399063 => {
                        const _0x2fad24 = a0_0x5e9f;
                        return _0x399063['blob']()[_0x2fad24(0x163)](_0x115412 => {
                            _0x38ed82(![]), _0x218e81(_0x4f3182, _0x115412, _0x47f059, _0x576e9e, _0x236391, _0x5de808, _0x1f6adf), _0x350f4c(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x4eed0d(_0x50ea0a, _0x393e29) {
            const _0x217dd9 = _0x4e7afc, _0x463591 = document[_0x217dd9(0x2e2)]('a');
            _0x463591[_0x217dd9(0x173)] = URL[_0x217dd9(0x385)](_0x50ea0a), _0x463591[_0x217dd9(0x223)] = _0x393e29, _0x463591[_0x217dd9(0x263)](), _0x463591[_0x217dd9(0x1c3)]();
        }
        function _0x218e81(_0xa5ba6f, _0x890ba8, _0x3083aa, _0xe5128d, _0x2024a4, _0x59fee3, _0x4d9b56) {
            const _0x104879 = _0x4e7afc;
            _0x2024a4 = parseInt(_0x2024a4['toString']()[_0x104879(0x116)](0xd, '0'));
            _0x5a1808[_0x104879(0x28e)] && (_0x2024a4 = parseInt(_0x2024a4[_0x104879(0x2e9)]()['padEnd'](0xd, '0')));
            const _0x28f7c8 = new Date(_0x2024a4), _0x31ea4b = new URL(_0xa5ba6f)[_0x104879(0x197)][_0x104879(0x2fc)]('/')['at'](-0x1)[_0x104879(0x2fc)]('.')[_0x104879(0xc8)](0x0, -0x1)[_0x104879(0x228)]('.'), _0x4d7703 = _0x28f7c8['getFullYear']()['toString'](), _0x350947 = (_0x28f7c8[_0x104879(0x260)]() + 0x1)[_0x104879(0x2e9)]()[_0x104879(0x136)](0x2, '0'), _0x17858e = _0x28f7c8[_0x104879(0x344)]()[_0x104879(0x2e9)]()[_0x104879(0x136)](0x2, '0'), _0x5404a7 = _0x28f7c8['getHours']()[_0x104879(0x2e9)]()[_0x104879(0x136)](0x2, '0'), _0x9e0cf9 = _0x28f7c8[_0x104879(0x19a)]()['toString']()['padStart'](0x2, '0'), _0x3d9920 = _0x28f7c8[_0x104879(0x15e)]()['toString']()[_0x104879(0x136)](0x2, '0');
            var _0x14f545 = _0x17637a[_0x104879(0x182)]['toUpperCase'](), _0xba19f5 = _0x4d9b56 ?? '', _0x3be50a = {
                    '%USERNAME%': _0x3083aa,
                    '%SOURCE_TYPE%': _0xe5128d,
                    '%SHORTCODE%': _0xba19f5,
                    '%YEAR%': _0x4d7703,
                    '%2-YEAR%': _0x4d7703[_0x104879(0x264)](-0x2),
                    '%MONTH%': _0x350947,
                    '%DAY%': _0x17858e,
                    '%HOUR%': _0x5404a7,
                    '%MINUTE%': _0x9e0cf9,
                    '%SECOND%': _0x3d9920,
                    '%ORIGINAL_NAME%': _0x31ea4b,
                    '%ORIGINAL_NAME_FIRST%': _0x31ea4b[_0x104879(0x2fc)]('_')['at'](0x0)
                };
            _0x14f545 = _0x14f545[_0x104879(0x13f)](/%[\w\-]+%/g, function (_0x5295d9) {
                return _0x3be50a[_0x5295d9] || _0x5295d9;
            });
            const _0x17ce25 = _0x3083aa + '_' + _0x31ea4b + '.' + _0x59fee3, _0x49ddbf = _0x5a1808[_0x104879(0x245)] ? _0x14f545 + '.' + _0x59fee3 : _0x17ce25;
            _0x5a1808[_0x104879(0x38a)] && _0x59fee3 === 'jpg' && _0x4d9b56 && _0xe5128d === _0x104879(0x235) && (_0x890ba8['type'] === _0x104879(0x339) || _0x890ba8[_0x104879(0x371)] === _0x104879(0x2f4)) ? _0x54d8bb(_0x890ba8, _0x4d9b56)[_0x104879(0x163)](_0x39563b => _0x4eed0d(_0x39563b, _0x49ddbf))[_0x104879(0x1b0)](_0x5e434f => {
                const _0x1b41e5 = _0x104879;
                console[_0x1b41e5(0x2ef)](_0x1b41e5(0x23b), _0x5e434f), _0x4eed0d(_0x890ba8, _0x49ddbf);
            }) : _0x4eed0d(_0x890ba8, _0x49ddbf);
        }
        async function _0x54d8bb(_0x5654ca, _0x17a685) {
            const _0x10804c = _0x4e7afc, _0xd9c14b = (..._0x42c7b6) => {
                    const _0x47d32f = a0_0x5e9f, _0x5db429 = _0x42c7b6['reduce']((_0x29200b, _0x3cc728) => _0x29200b + _0x3cc728[_0x47d32f(0x19d)], 0x0), _0x1e1041 = new Uint8Array(_0x5db429);
                    let _0x44a2da = 0x0;
                    for (const _0x1d13c0 of _0x42c7b6) {
                        _0x1e1041[_0x47d32f(0x15d)](_0x1d13c0, _0x44a2da), _0x44a2da += _0x1d13c0[_0x47d32f(0x19d)];
                    }
                    return _0x1e1041;
                }, _0x2d5585 = _0x1c725e => {
                    const _0x138207 = a0_0x5e9f, _0x191824 = new Uint8Array(0x4);
                    return new DataView(_0x191824['buffer'])[_0x138207(0x35c)](0x0, _0x1c725e, !![]), _0x191824;
                }, _0x254f71 = _0x5b6c8c => new TextEncoder()[_0x10804c(0x209)](_0x5b6c8c), _0x5b718c = (_0x1f9ff4, _0x13c78f) => String[_0x10804c(0x165)](_0x1f9ff4[_0x10804c(0x26d)](_0x13c78f), _0x1f9ff4['getUint8'](_0x13c78f + 0x1), _0x1f9ff4[_0x10804c(0x26d)](_0x13c78f + 0x2), _0x1f9ff4[_0x10804c(0x26d)](_0x13c78f + 0x3)), _0x13e3db = new Uint8Array(await _0x5654ca['slice'](0x0, 0xc)[_0x10804c(0x117)]()), _0x3d4ad7 = _0x13e3db[0x0] === 0xff && _0x13e3db[0x1] === 0xd8, _0x54b831 = _0x13e3db['length'] >= 0xc && String[_0x10804c(0x165)](..._0x13e3db[_0x10804c(0x143)](0x0, 0x4)) === _0x10804c(0x1d4) && String[_0x10804c(0x165)](..._0x13e3db[_0x10804c(0x143)](0x8, 0xc)) === _0x10804c(0x1e3);
            if (!_0x3d4ad7 && !_0x54b831)
                throw new Error(_0x10804c(0x1f8));
            const _0x23b0b2 = _0x254f71(_0x10804c(0x2fe) + _0x17a685 + '/\x00'), _0x1cbfff = _0x254f71(_0x10804c(0x2f5)), _0x8ccad7 = Uint8Array[_0x10804c(0x324)]([
                    0x49,
                    0x49,
                    0x2a,
                    0x0,
                    0x8,
                    0x0,
                    0x0,
                    0x0
                ]), _0x6d5193 = Uint8Array[_0x10804c(0x324)]([
                    0x1,
                    0x0
                ]), _0x5aa9b0 = _0xd9c14b(Uint8Array['from']([
                    0xe,
                    0x1,
                    0x2,
                    0x0
                ]), _0x2d5585(_0x23b0b2[_0x10804c(0x19d)]), _0x2d5585(0x8 + 0x2 + 0xc + 0x4)), _0x1ad965 = _0xd9c14b(_0x8ccad7, _0x6d5193, _0x5aa9b0, _0x2d5585(0x0), _0x23b0b2);
            if (_0x3d4ad7) {
                const _0x241545 = await _0x5654ca['arrayBuffer'](), _0x37337 = new DataView(_0x241545), _0x575ab1 = _0xd9c14b(_0x1cbfff, _0x1ad965), _0x10780b = new Uint8Array(0x4);
                new DataView(_0x10780b[_0x10804c(0x28f)])[_0x10804c(0x135)](0x0, 0xffe1), new DataView(_0x10780b[_0x10804c(0x28f)])['setUint16'](0x2, _0x575ab1[_0x10804c(0x19d)] + 0x2);
                const _0x24d3af = _0xd9c14b(_0x10780b, _0x575ab1), _0xc9c233 = [new Uint8Array(_0x241545, 0x0, 0x2)];
                let _0x517850 = 0x2, _0x35f20b = ![];
                while (_0x517850 < _0x37337[_0x10804c(0x1e0)]) {
                    const _0x2c5b19 = _0x37337[_0x10804c(0x23e)](_0x517850);
                    if ((_0x2c5b19 & 0xff00) !== 0xff00)
                        break;
                    if (_0x2c5b19 === 0xffda) {
                        if (!_0x35f20b)
                            _0xc9c233[_0x10804c(0x110)](_0x24d3af);
                        _0xc9c233[_0x10804c(0x110)](new Uint8Array(_0x241545, _0x517850));
                        break;
                    }
                    const _0x730761 = _0x37337[_0x10804c(0x23e)](_0x517850 + 0x2) + 0x2;
                    if (_0x2c5b19 === 0xffe1) {
                        _0x517850 += _0x730761;
                        continue;
                    }
                    _0xc9c233[_0x10804c(0x110)](new Uint8Array(_0x241545, _0x517850, _0x730761)), _0x517850 += _0x730761;
                }
                const _0x37ac42 = _0xc9c233[_0x10804c(0x2b0)]((_0x541fa3, _0x3306c9) => _0x541fa3 + _0x3306c9[_0x10804c(0x19d)], 0x0), _0x200675 = new Uint8Array(_0x37ac42);
                let _0xfa938 = 0x0;
                return _0xc9c233[_0x10804c(0x396)](_0x2a6a14 => {
                    const _0x2d6fb3 = _0x10804c;
                    _0x200675[_0x2d6fb3(0x15d)](_0x2a6a14, _0xfa938), _0xfa938 += _0x2a6a14['length'];
                }), new Blob([_0x200675], { 'type': _0x10804c(0x339) });
            }
            const _0x40b571 = await _0x5654ca[_0x10804c(0x117)](), _0x61762 = new DataView(_0x40b571), _0x2d8d2a = [];
            let _0x28e365 = -0x1, _0x2a5217 = 0xc;
            while (_0x2a5217 < _0x61762[_0x10804c(0x1e0)]) {
                const _0x2aff52 = _0x5b718c(_0x61762, _0x2a5217), _0x1af37c = _0x61762['getUint32'](_0x2a5217 + 0x4, !![]), _0x53862a = _0x1af37c & 0x1, _0x4e650 = 0x8 + _0x1af37c + _0x53862a;
                if (_0x2aff52 !== _0x10804c(0x2a8) && _0x2aff52 !== _0x10804c(0x251)) {
                    _0x2d8d2a[_0x10804c(0x110)](new Uint8Array(_0x40b571, _0x2a5217, _0x4e650));
                    if (_0x2aff52 === _0x10804c(0x21d))
                        _0x28e365 = _0x2d8d2a[_0x10804c(0x19d)] - 0x1;
                }
                _0x2a5217 += _0x4e650;
            }
            let _0x32d959 = _0xd9c14b(_0x254f71(_0x10804c(0x2a8)), _0x2d5585(_0x1cbfff[_0x10804c(0x19d)] + _0x1ad965[_0x10804c(0x19d)]), _0x1cbfff, _0x1ad965);
            if (_0x32d959[_0x10804c(0x19d)] & 0x1)
                _0x32d959 = _0xd9c14b(_0x32d959, Uint8Array['of'](0x0));
            if (_0x28e365 !== -0x1) {
                const _0x2904b5 = new Uint8Array(_0x2d8d2a[_0x28e365]);
                _0x2904b5[0x8] |= 0x10, _0x2d8d2a[_0x28e365] = _0x2904b5, _0x2d8d2a[_0x10804c(0x109)](_0x28e365 + 0x1, 0x0, _0x32d959);
            } else
                _0x2d8d2a[_0x10804c(0x110)](_0x32d959);
            const _0x33120c = _0x2d8d2a['reduce']((_0xab881c, _0x262892) => _0xab881c + _0x262892['length'], 0x0), _0x22e3f3 = _0xd9c14b(_0x254f71('RIFF'), _0x2d5585(_0x33120c + 0x4), _0x254f71('WEBP')), _0x22329c = _0xd9c14b(_0x22e3f3, ..._0x2d8d2a);
            return new Blob([_0x22329c], { 'type': _0x10804c(0x2f4) });
        }
        async function _0x11f6e9(_0x2b9c5c, _0xf60bbe) {
            const _0x5d3231 = _0x4e7afc;
            let _0x3de08c = new Date()['getTime'](), _0x382200 = Math[_0x5d3231(0x1fe)](_0x3de08c / 0x3e8), _0x459fb3 = _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x1c1)) ? _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x1c1)) : _0x17637a[_0x5d3231(0x36e)];
            !_0x459fb3 && _0x1e041c(_0x2b9c5c)['attr']('data-path') && (_0x1ece4c('catching\x20owner\x20name\x20from\x20shortcode:', _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x17e))), _0x459fb3 = await _0x267b7a(_0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x24d)))[_0x5d3231(0x1b0)](_0x159f08 => {
                const _0x118c39 = _0x5d3231;
                _0x1ece4c(_0x118c39(0xbb), _0x159f08[_0x118c39(0x17b)]);
            }), _0x459fb3 == null && (_0x459fb3 = _0x5d3231(0x177)));
            _0x5a1808['RENAME_PUBLISH_DATE'] && _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x1b9)) && (_0x382200 = parseInt(_0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x1b9))));
            if (_0x5a1808[_0x5d3231(0x386)]) {
                _0x38ed82(!![]);
                let _0x385276 = await _0x506e20(_0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0xdc)));
                _0x38ed82(![]);
                if (_0x385276[_0x5d3231(0x20b)] === 'ok') {
                    var _0x1ecbc4 = null;
                    if (_0x385276['items'][0x0][_0x5d3231(0x365)])
                        _0x1ecbc4 = _0x385276['items'][0x0][_0x5d3231(0x365)][0x0][_0x5d3231(0x2dc)];
                    else {
                        _0x385276[_0x5d3231(0x397)][0x0]['image_versions2'][_0x5d3231(0xd7)]['sort'](function (_0x33d732, _0x31031c) {
                            const _0x26971b = _0x5d3231;
                            let _0x26923b = new URL(_0x33d732['url'])[_0x26971b(0x2ac)]['get'](_0x26971b(0xc9)), _0x567318 = new URL(_0x31031c[_0x26971b(0x2dc)])['searchParams']['get'](_0x26971b(0xc9));
                            if (_0x26923b && _0x567318) {
                                if (_0x26923b[_0x26971b(0x19d)] > _0x567318['length'])
                                    return 0x1;
                                if (_0x26923b[_0x26971b(0x19d)] < _0x567318[_0x26971b(0x19d)])
                                    return -0x1;
                            } else {
                                if (_0x33d732[_0x26971b(0x2dd)] < _0x31031c[_0x26971b(0x2dd)])
                                    return 0x1;
                                if (_0x33d732['width'] > _0x31031c[_0x26971b(0x2dd)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x1ecbc4 = _0x385276[_0x5d3231(0x397)][0x0][_0x5d3231(0x31c)]['candidates'][0x0]['url'];
                        const _0x4a743e = function (_0x1ee951) {
                                const _0x45bdbe = _0x5d3231;
                                if (_0x1ee951[_0x45bdbe(0x2dd)] != null)
                                    return _0x1ee951[_0x45bdbe(0x2dd)];
                                const _0x287fa3 = new URL(_0x1ee951[_0x45bdbe(0x2dc)]), _0x394a8e = _0x287fa3[_0x45bdbe(0x2ac)][_0x45bdbe(0x25e)](_0x45bdbe(0xc9));
                                return _0x394a8e != null ? parseInt(_0x394a8e[_0x45bdbe(0x15b)](/_p([0-9]+)x([0-9]+)_/i)?.['at'](0x1) || -0x1) : 0x0;
                            }, _0x105cc5 = _0x4a743e(_0x385276['items'][0x0][_0x5d3231(0x31c)][_0x5d3231(0xd7)][0x0]);
                        if (_0x385276['items'][0x0]['original_width'] !== _0x105cc5 && _0x105cc5 !== -0x1) {
                        }
                    }
                    if (_0xf60bbe) {
                        let _0x291571 = new URL(_0x1ecbc4);
                        _0x291571[_0x5d3231(0x172)] = _0x5d3231(0x294), _0x2f686c(_0x291571[_0x5d3231(0x173)]);
                    } else
                        _0x26afe2(_0x1ecbc4, _0x459fb3, _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x38b)), _0x382200, _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x224)), _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)]('data-path'));
                } else {
                    if (_0x5a1808[_0x5d3231(0x155)]) {
                        if (_0xf60bbe) {
                            let _0x14206c = new URL(_0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x17e)));
                            _0x14206c['host'] = 'scontent.cdninstagram.com', _0x2f686c(_0x14206c[_0x5d3231(0x173)]);
                        } else
                            _0x26afe2(_0x1e041c(_0x2b9c5c)['attr'](_0x5d3231(0x17e)), _0x459fb3, _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x38b)), _0x382200, _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x224)), _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x24d)));
                    } else
                        alert(_0x5d3231(0x2a0) + _0x385276[_0x5d3231(0x17b)]);
                    _0x1ece4c(_0x385276);
                }
            } else
                _0x26afe2(_0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x17e)), _0x459fb3, _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)](_0x5d3231(0x38b)), _0x382200, _0x1e041c(_0x2b9c5c)['attr']('data-type'), _0x1e041c(_0x2b9c5c)[_0x5d3231(0x2ab)]('data-path'));
        }
        function _0x4ac751() {
            const _0x4f3771 = _0x4e7afc;
            for (let _0x545ed4 of _0x17637a[_0x4f3771(0x196)]) {
                _0x1ece4c('GM_unregisterMenuCommand', _0x545ed4), GM_unregisterMenuCommand(_0x545ed4);
            }
            _0x17637a[_0x4f3771(0x196)]['push'](GM_registerMenuCommand(_0x1f01e7(_0x4f3771(0x1a4)), () => {
                _0xbc350f();
            }, { 'accessKey': 'w' })), _0x17637a['registerMenuIds'][_0x4f3771(0x110)](GM_registerMenuCommand(_0x1f01e7(_0x4f3771(0x37b)), () => {
                const _0x3cec98 = _0x4f3771;
                GM_openInTab(_0x3cec98(0xdf), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x17637a[_0x4f3771(0x196)][_0x4f3771(0x110)](GM_registerMenuCommand(_0x1f01e7(_0x4f3771(0xc6)), () => {
                _0x1d9ad1();
            }, { 'accessKey': 'z' })), _0x17637a[_0x4f3771(0x196)][_0x4f3771(0x110)](GM_registerMenuCommand(_0x1f01e7('FEEDBACK'), () => {
                _0x5cdbf1();
            }, { 'accessKey': 'f' })), _0x17637a[_0x4f3771(0x196)]['push'](GM_registerMenuCommand(_0x1f01e7(_0x4f3771(0x346)), () => {
                _0x34ec04();
            }, { 'accessKey': 'c' })), _0x17637a[_0x4f3771(0x196)][_0x4f3771(0x110)](GM_registerMenuCommand(_0x1f01e7(_0x4f3771(0x139)), () => {
                _0x3eb518();
            }, { 'accessKey': 'r' }));
        }
        function _0x10fc72(_0x33d72a) {
            const _0x2c6d41 = _0x4e7afc;
            if (!_0x5a1808[_0x2c6d41(0xf9)])
                return;
            const _0x294ae4 = GM_getValue('G_CHECK_TIMESTAMP') ?? new Date()[_0x2c6d41(0x220)](), _0x2ee4d8 = new Date()[_0x2c6d41(0x220)]();
            _0x2ee4d8 > parseInt(_0x294ae4) + _0x33d72a * 0x3e8 && (GM_setValue(_0x2c6d41(0x269), new Date()[_0x2c6d41(0x220)]()), _0x34ec04());
        }
        function _0x34ec04() {
            const _0x151eba = _0x4e7afc, _0x2aa1bf = GM_info[_0x151eba(0x1c7)]['version'], _0x5a924d = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': _0x151eba(0x2b6),
                'url': _0x5a924d,
                'onload': function (_0x1ce03a) {
                    const _0xdbbb4b = _0x151eba, _0x157a84 = _0x1ce03a['responseText'], _0x1570ba = _0x157a84[_0xdbbb4b(0x15b)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x1570ba && _0x1570ba[0x1]) {
                        const _0x535fc8 = _0x1570ba[0x1];
                        _0x1ece4c('Current\x20version:\x20', _0x2aa1bf, '|', 'Remote\x20version:\x20', _0x535fc8), _0x535fc8 !== _0x2aa1bf && typeof this[_0xdbbb4b(0x1d6)] === _0xdbbb4b(0x33a) ? (this[_0xdbbb4b(0x1d6)] = null, GM_notification({
                            'text': _0x1f01e7(_0xdbbb4b(0x103)),
                            'title': _0x1f01e7(_0xdbbb4b(0xf6)),
                            'tag': 'ig_helper_notice',
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0xdbbb4b(0x1cc),
                            'onclick': _0x5f8b56 => {
                                const _0x37c2e9 = _0xdbbb4b;
                                _0x5f8b56?.[_0x37c2e9(0x2a1)]();
                                var _0x2215f7 = GM_openInTab(GM_info[_0x37c2e9(0x1c7)][_0x37c2e9(0x2ba)]);
                                setTimeout(() => {
                                    _0x2215f7['close']();
                                }, 0xfa);
                            }
                        })) : _0x1ece4c(_0xdbbb4b(0x104));
                    } else
                        console['error'](_0xdbbb4b(0x374));
                }
            });
        }
        function _0xbc350f() {
            const _0x1910b4 = _0x4e7afc;
            _0x1e041c(_0x1910b4(0x36a))['remove'](), _0x2c6086(), _0x1e041c(_0x1910b4(0x19b))[_0x1910b4(0x307)](_0x1910b4(0x22d)), _0x1e041c(_0x1910b4(0x393))[_0x1910b4(0x2d6)]('<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>');
            for (let _0x2ac64c in _0x58ee7a) {
                _0x1e041c(_0x1910b4(0x14e))[_0x1910b4(0x2d6)](_0x1910b4(0x22f) + _0x2ac64c + '\x22\x20' + (_0x17637a[_0x1910b4(0x230)] == _0x2ac64c ? _0x1910b4(0x19f) : '') + '>' + _0x58ee7a[_0x2ac64c] + _0x1910b4(0xea));
            }
            for (let _0xe48d2 in _0x5a1808) {
                _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')['append'](_0x1910b4(0x372) + (_0x5540e0[_0x1910b4(0x354)](_0xe48d2) ? _0x1910b4(0x210) : '') + _0x1910b4(0x106) + _0x1f01e7(_0xe48d2 + '_INTRO') + '\x22\x20data-ih-locale-title=\x22' + (_0xe48d2 + _0x1910b4(0x275)) + '\x22><span\x20data-ih-locale=\x22' + _0xe48d2 + '\x22>' + _0x1f01e7(_0xe48d2) + '</span>\x20<input\x20id=\x22' + _0xe48d2 + _0x1910b4(0xf3) + (_0x5a1808[_0xe48d2] === !![] ? 'checked' : '') + _0x1910b4(0x38c)), _0xe48d2 === _0x1910b4(0x118) && _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22' + _0xe48d2 + '\x22]')[_0x1910b4(0x2cb)](_0x1910b4(0x246))['on']('contextmenu', function (_0x1ffdd5) {
                    const _0x1c1e5c = _0x1910b4;
                    _0x1ffdd5[_0x1c1e5c(0x2a1)](), _0x1e041c(this)[_0x1c1e5c(0x10c)](_0x1c1e5c(0x2b7))['length'] === 0x0 && (_0x1e041c(this)[_0x1c1e5c(0x2d6)](_0x1c1e5c(0x390)), _0x1e041c(this)[_0x1c1e5c(0x2c6)](_0x1c1e5c(0x2b7))[_0x1c1e5c(0x2d6)](_0x1c1e5c(0x29e) + _0x17637a['videoVolume'] + _0x1c1e5c(0x145)), _0x1e041c(this)[_0x1c1e5c(0x2c6)](_0x1c1e5c(0x2b7))[_0x1c1e5c(0x2d6)](_0x1c1e5c(0x29e) + _0x17637a['videoVolume'] + _0x1c1e5c(0x30c)), _0x1e041c(this)[_0x1c1e5c(0x2c6)]('#tempWrapper')[_0x1c1e5c(0x2d6)](_0x1c1e5c(0x38f) + _0x188dac['CLOSE'] + _0x1c1e5c(0x174)));
                }), _0xe48d2 === _0x1910b4(0x245) && _0x1e041c(_0x1910b4(0x122) + _0xe48d2 + '\x22]')[_0x1910b4(0x2cb)](_0x1910b4(0x246))['on'](_0x1910b4(0x278), function (_0x501a39) {
                    const _0xde6884 = _0x1910b4;
                    _0x501a39[_0xde6884(0x2a1)](), _0x1e041c(this)[_0xde6884(0x10c)](_0xde6884(0x2b7))[_0xde6884(0x19d)] === 0x0 && (_0x1e041c(this)[_0xde6884(0x2d6)](_0xde6884(0x390)), _0x1e041c(this)[_0xde6884(0x2c6)](_0xde6884(0x2b7))[_0xde6884(0x2d6)](_0xde6884(0x131) + _0x17637a[_0xde6884(0x182)] + _0xde6884(0x217)), _0x1e041c(this)[_0xde6884(0x2c6)](_0xde6884(0x2b7))[_0xde6884(0x2d6)](_0xde6884(0x38f) + _0x188dac[_0xde6884(0x114)] + _0xde6884(0x174)));
                });
            }
        }
        function _0x1d9ad1() {
            const _0xde8d56 = _0x4e7afc;
            _0x1e041c(_0xde8d56(0x36a))[_0xde8d56(0x1c3)](), _0x2c6086(), _0x1e041c(_0xde8d56(0x19b))[_0xde8d56(0x307)](_0xde8d56(0xbe)), _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0xde8d56(0x2d6)](_0xde8d56(0xe1)), _0x1e041c(_0xde8d56(0x303))['append']('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x1e041c(_0xde8d56(0x12f))[_0xde8d56(0x2d6)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x1f01e7(_0xde8d56(0x31a)) + _0xde8d56(0x10f)), _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0xde8d56(0x2d6)](_0xde8d56(0xe3) + _0x1f01e7(_0xde8d56(0x2c3)) + _0xde8d56(0x10f)), _0x1e041c(_0xde8d56(0x12f))[_0xde8d56(0x2d6)](_0xde8d56(0x258) + _0x1f01e7('DOWNLOAD_DOM_TREE') + _0xde8d56(0x1bf)), _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0xde8d56(0x2d6)](_0xde8d56(0x1f5) + _0x1f01e7(_0xde8d56(0x267)) + _0xde8d56(0x10f)), _0x1e041c(_0xde8d56(0x12f))[_0xde8d56(0x2d6)](_0xde8d56(0xe5) + _0x1f01e7(_0xde8d56(0x350)) + _0xde8d56(0x10f));
        }
        function _0x5cdbf1() {
            const _0x3c4dad = _0x4e7afc;
            _0x1e041c(_0x3c4dad(0x36a))[_0x3c4dad(0x1c3)](), _0x2c6086(), _0x1e041c(_0x3c4dad(0x19b))[_0x3c4dad(0x307)](_0x3c4dad(0x25b)), _0x1e041c(_0x3c4dad(0x303))[_0x3c4dad(0x2d6)](_0x3c4dad(0x31b)), _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x3c4dad(0x2d6)](_0x3c4dad(0x2e3) + _0x1f01e7(_0x3c4dad(0x284)) + '</a></button>'), _0x1e041c(_0x3c4dad(0x12f))[_0x3c4dad(0x2d6)](_0x3c4dad(0x1f5) + _0x1f01e7('REPORT_GITHUB') + _0x3c4dad(0x10f)), _0x1e041c(_0x3c4dad(0x12f))['append'](_0x3c4dad(0xe5) + _0x1f01e7(_0x3c4dad(0x350)) + '</a></button>');
        }
        function _0x2f686c(_0x43ee5c) {
            const _0x2c280b = _0x4e7afc;
            var _0x20f856 = document['createElement']('a');
            _0x20f856[_0x2c280b(0x173)] = _0x43ee5c, _0x20f856['target'] = _0x2c280b(0x2fd), document['body'][_0x2c280b(0x1ce)](_0x20f856), _0x20f856[_0x2c280b(0x263)](), _0x20f856[_0x2c280b(0x1c3)]();
        }
        function _0x3eb518() {
            const _0x28b5fe = _0x4e7afc;
            clearInterval(_0x17637a[_0x28b5fe(0x24c)]), _0x17637a[_0x28b5fe(0x168)][_0x28b5fe(0x396)](_0x429a04 => {
                const _0x4e6a85 = _0x28b5fe;
                _0x429a04['trigger'][_0x4e6a85(0x396)](_0x21bd73 => {
                    const _0x36ae82 = _0x4e6a85;
                    _0x1e041c(_0x429a04[_0x36ae82(0x152)])[_0x36ae82(0x30b)](_0x36ae82(0x263), _0x21bd73);
                });
            }), _0x17637a[_0x28b5fe(0x168)] = [], _0x1e041c(_0x28b5fe(0x254))[_0x28b5fe(0x1c3)](), _0x1e041c(_0x28b5fe(0x342))['remove'](), _0x1e041c(_0x28b5fe(0x292))[_0x28b5fe(0x2e7)](_0x28b5fe(0x1ae)), _0x17637a['pageLoaded'] = ![], _0x17637a[_0x28b5fe(0x2df)] = ![], _0x17637a[_0x28b5fe(0x320)] = location[_0x28b5fe(0x173)], _0x17637a[_0x28b5fe(0x2cc)][_0x28b5fe(0x1ff)](), _0x1ece4c('main\x20timer\x20re-register\x20completed');
        }
        function _0x1ece4c(..._0x5846c4) {
            const _0x1874b6 = _0x4e7afc;
            var _0x49ec8e = new Date();
            _0x17637a[_0x1874b6(0x234)][_0x1874b6(0x110)]({
                'time': _0x49ec8e[_0x1874b6(0x220)](),
                'content': [..._0x5846c4]
            }), _0x17637a[_0x1874b6(0x234)][_0x1874b6(0x19d)] > 0x3e8 && (_0x17637a['GL_logger'] = [
                {
                    'time': _0x49ec8e[_0x1874b6(0x220)](),
                    'content': [_0x1874b6(0x343)]
                },
                ..._0x17637a[_0x1874b6(0x234)][_0x1874b6(0xc8)](-0x3e7)
            ]), console[_0x1874b6(0x2d7)]('[' + _0x49ec8e[_0x1874b6(0x119)]() + ']', ..._0x5846c4);
        }
        function _0x5a01b3() {
            const _0x29d14d = _0x4e7afc;
            for (let _0x52fa0c in _0x5a1808) {
                GM_getValue(_0x52fa0c) != null && typeof GM_getValue(_0x52fa0c) === _0x29d14d(0x133) && (_0x5a1808[_0x52fa0c] = GM_getValue(_0x52fa0c), _0x52fa0c === _0x29d14d(0x118) && GM_getValue(_0x52fa0c) !== !![] && (_0x17637a['videoVolume'] = 0x1));
            }
        }
        function _0x59d4a2(_0x52ac11, _0x2471c8, _0xdd45f4, _0x4405b6 = '') {
            const _0x8f232a = _0x4e7afc;
            _0x2471c8[_0x8f232a(0x10c)](_0x8f232a(0x30a))[_0x8f232a(0x19d)] === 0x0 ? (_0x2471c8[_0x8f232a(0x2d6)]('<div\x20class=\x22volume_slider\x20' + _0x4405b6 + _0x8f232a(0x217)), _0x2471c8[_0x8f232a(0x10c)](_0x8f232a(0x30a))[_0x8f232a(0x2d6)]('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x17637a[_0x8f232a(0x1a1)] + '\x22\x20/></div>'), _0x2471c8[_0x8f232a(0x10c)](_0x8f232a(0x2f1))[_0x8f232a(0x2ab)](_0x8f232a(0x16c), _0x8f232a(0x334) + (_0x17637a[_0x8f232a(0x1a1)] * 0x64 + '%')), _0x2471c8[_0x8f232a(0x10c)]('div.volume_slider\x20input')['on'](_0x8f232a(0x248), function () {
                const _0x2f2526 = _0x8f232a;
                var _0x4de884 = _0x1e041c(this)[_0x2f2526(0x124)]() * 0x64 + '%';
                _0x17637a[_0x2f2526(0x1a1)] = _0x1e041c(this)['val'](), GM_setValue(_0x2f2526(0x1d5), _0x1e041c(this)['val']()), _0x1e041c(this)[_0x2f2526(0x2ab)](_0x2f2526(0x16c), _0x2f2526(0x334) + _0x4de884), _0x52ac11[_0x2f2526(0x273)](function () {
                    const _0x38ad3c = _0x2f2526;
                    _0x1ece4c('(' + _0xdd45f4 + ')', _0x38ad3c(0x367)), this[_0x38ad3c(0x10b)] = _0x17637a[_0x38ad3c(0x1a1)];
                });
            }), _0x2471c8['find'](_0x8f232a(0x2f1))['on'](_0x8f232a(0x1da), function () {
                const _0x2dda5d = _0x8f232a;
                var _0x5d9fb5 = _0x17637a[_0x2dda5d(0x1a1)] * 0x64 + '%';
                _0x1e041c(this)['attr'](_0x2dda5d(0x16c), _0x2dda5d(0x334) + _0x5d9fb5), _0x1e041c(this)[_0x2dda5d(0x124)](_0x17637a[_0x2dda5d(0x1a1)]), _0x52ac11['each'](function () {
                    const _0x20c70d = _0x2dda5d;
                    _0x1ece4c('(' + _0xdd45f4 + ')', _0x20c70d(0x367)), this[_0x20c70d(0x10b)] = _0x17637a[_0x20c70d(0x1a1)];
                });
            }), _0x2471c8[_0x8f232a(0x10c)](_0x8f232a(0x30a))['on']('click', function (_0xdebbe2) {
                const _0x19afbc = _0x8f232a;
                _0xdebbe2[_0x19afbc(0x299)](), _0xdebbe2[_0x19afbc(0x2a1)]();
            })) : _0x2471c8[_0x8f232a(0x10c)](_0x8f232a(0x30a))['remove']();
        }
        var _0xcd5bca = null;
        function _0x9b70bc(_0x12ecff) {
            const _0x5612d2 = _0x4e7afc;
            _0x2a74ad(), _0x1e041c(_0x5612d2(0x370))[_0x5612d2(0x2d6)]('<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22display:\x20flex;filter:\x20invert(1);gap:\x208px;margin-right:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_left\x22\x20style=\x22cursor:\x20pointer;\x22>' + _0x188dac['TURN_DEG'] + _0x5612d2(0x211) + _0x188dac[_0x5612d2(0x2f0)] + _0x5612d2(0x332) + _0x188dac[_0x5612d2(0x114)] + _0x5612d2(0x14f));
            const _0x3478f0 = _0x1e041c(_0x5612d2(0x2a4)), _0x8f8b9e = _0x1e041c(_0x5612d2(0x1dc)), _0x5b2096 = _0x1e041c(_0x5612d2(0x2b9)), _0x132365 = _0x1e041c(_0x5612d2(0x188)), _0x496f5d = _0x1e041c(_0x5612d2(0x14a)), _0x3dd8f9 = _0x1e041c(_0x5612d2(0x241)), _0x754892 = _0x1e041c(_0x5612d2(0x24a)), _0x592928 = _0x1e041c('#rotate_left'), _0x35e2ce = _0x1e041c('#rotate_right');
            _0x754892[_0x5612d2(0x2ab)](_0x5612d2(0x338), _0x12ecff), _0x3478f0[_0x5612d2(0x1f7)](_0x5612d2(0x23c), _0x5612d2(0x295)), _0x5b2096['css'](_0x5612d2(0x1a5), _0x5612d2(0x37e)), _0x5b2096[_0x5612d2(0x1f7)]('transition', _0x5612d2(0x222)), _0x132365[_0x5612d2(0x1f7)](_0x5612d2(0x1a5), _0x5612d2(0x37c)), _0x132365[_0x5612d2(0x1f7)](_0x5612d2(0x382), _0x5612d2(0x222)), _0x5b2096[_0x5612d2(0x1f7)](_0x5612d2(0x2e4), _0x5612d2(0x27a)), _0x132365[_0x5612d2(0x1f7)](_0x5612d2(0x2e4), 'transform');
            let _0x425bc1 = 0x0, _0x590fa0 = 0x1, _0x163db4 = 0x0, _0x1c7bdb = 0x0, _0x50e028 = ![], _0x3199e5 = ![], _0x3afccf, _0x4c5aed;
            var _0x25f704 = {
                'x': 0x0,
                'y': 0x0
            };
            _0xcd5bca = setInterval(() => {
                const _0x1a043e = {
                    'x': _0x163db4,
                    'y': _0x1c7bdb
                };
                _0x1a043e['x'] !== _0x25f704['x'] || _0x1a043e['y'] !== _0x25f704['y'] ? _0x3199e5 = !![] : _0x3199e5 = ![], _0x25f704 = _0x1a043e;
            }, 0x64), _0x754892['on'](_0x5612d2(0x240), () => {
                _0x163db4 = 0x0, _0x1c7bdb = 0x0, _0x49d2ec();
            }), _0x754892['on'](_0x5612d2(0x108), _0x425e8e => {
                const _0x2b2151 = _0x5612d2;
                _0x425e8e[_0x2b2151(0x2a1)]();
            }), _0x754892['on'](_0x5612d2(0x263), _0x3c05a1 => {
                const _0x44cdea = _0x5612d2;
                _0x3c05a1[_0x44cdea(0x2a1)](), _0x3c05a1[_0x44cdea(0x299)](), !_0x3199e5 && (_0x590fa0 <= 0x1 ? _0x1fa2de(_0x3c05a1, Math[_0x44cdea(0xc2)](Math[_0x44cdea(0x225)](0x1, _0x590fa0 + 1.25), 0x5)) : (_0x590fa0 = 0x1, _0x163db4 = 0x0, _0x1c7bdb = 0x0), _0x49d2ec());
            }), _0x8f8b9e['on'](_0x5612d2(0x1b8), _0x4cf859 => {
                const _0x5b55a3 = _0x5612d2;
                _0x4cf859[_0x5b55a3(0x2a1)](), _0x1fa2de(_0x4cf859);
            }), _0x3478f0['on'](_0x5612d2(0x1b8), _0x25ee1e => {
                const _0x2d65ae = _0x5612d2;
                _0x25ee1e[_0x2d65ae(0x2a1)]();
            }), _0x754892['on'](_0x5612d2(0x1ec), _0x2c4f80 => {
                const _0x1f8b8d = _0x5612d2;
                if (_0x590fa0 == 0x1)
                    return;
                _0x50e028 = !![], _0x3afccf = _0x2c4f80[_0x1f8b8d(0x219)] - _0x163db4, _0x4c5aed = _0x2c4f80[_0x1f8b8d(0x190)] - _0x1c7bdb, _0x754892[_0x1f8b8d(0x1f7)](_0x1f8b8d(0x318), 'grabbing');
            }), _0x754892['on']('mouseup', () => {
                const _0x2250a9 = _0x5612d2;
                if (_0x590fa0 == 0x1)
                    return;
                _0x50e028 = ![], _0x754892[_0x2250a9(0x1f7)]('cursor', _0x2250a9(0x16b));
            }), _0x592928['on']('click', function () {
                _0x425bc1 -= 0x5a, _0x49d2ec();
            }), _0x35e2ce['on']('click', function () {
                _0x425bc1 += 0x5a, _0x49d2ec();
            }), _0x1e041c(document)['on'](_0x5612d2(0x22b), _0x3187d9 => {
                const _0x3ce76b = _0x5612d2;
                if (!_0x50e028)
                    return;
                _0x3187d9[_0x3ce76b(0x2a1)](), _0x163db4 = _0x3187d9[_0x3ce76b(0x219)] - _0x3afccf, _0x1c7bdb = _0x3187d9['pageY'] - _0x4c5aed, _0x49d2ec();
            }), _0x3478f0['on'](_0x5612d2(0x263), () => {
                _0x2a74ad();
            }), _0x3dd8f9['on'](_0x5612d2(0x263), () => {
                _0x2a74ad();
            }), _0x496f5d['on']('click', _0x2be376 => {
                const _0x3e5d81 = _0x5612d2;
                _0x2be376[_0x3e5d81(0x2a1)](), _0x2be376[_0x3e5d81(0x299)]();
            });
            function _0x49d2ec() {
                const _0x3698ab = _0x5612d2;
                _0x5b2096[_0x3698ab(0x1f7)]('transition', _0x3199e5 ? _0x3698ab(0x1d3) : _0x3698ab(0x222)), _0x5b2096['css'](_0x3698ab(0x27a), _0x3698ab(0x158) + _0x163db4 + _0x3698ab(0xf0) + _0x1c7bdb + _0x3698ab(0x113) + _0x590fa0 + ')'), _0x132365[_0x3698ab(0x1f7)](_0x3698ab(0x27a), _0x3698ab(0x15a) + _0x425bc1 + _0x3698ab(0x394)), _0x590fa0 == 0x1 ? _0x754892[_0x3698ab(0x1f7)](_0x3698ab(0x318), _0x3698ab(0x147)) : _0x754892[_0x3698ab(0x1f7)](_0x3698ab(0x318), _0x3698ab(0x102));
            }
            function _0x1fa2de(_0x49cb57, _0x11ccdd) {
                const _0x5c0e1b = _0x5612d2;
                _0x49cb57['preventDefault']();
                let _0x2a3d34 = _0x590fa0;
                if (_0x11ccdd == null) {
                    let _0x2747dc = 0.1, _0x1760d3 = _0x49cb57['originalEvent'][_0x5c0e1b(0x261)] < 0x0 ? 0x1 : -0x1;
                    _0x590fa0 = Math[_0x5c0e1b(0xc2)](0x5, Math[_0x5c0e1b(0x225)](0x1, _0x590fa0 + _0x1760d3 * _0x2747dc * _0x590fa0));
                } else
                    _0x590fa0 = _0x11ccdd;
                let _0x5728b6 = _0x8f8b9e[0x0]['getBoundingClientRect'](), _0x2194d7 = _0x49cb57['clientX'] - _0x5728b6[_0x5c0e1b(0x249)], _0x5943e3 = _0x49cb57['clientY'] - _0x5728b6['top'], _0x40180f = (_0x2194d7 - _0x163db4) / _0x2a3d34, _0x3ebe53 = (_0x5943e3 - _0x1c7bdb) / _0x2a3d34;
                _0x163db4 = -_0x40180f * _0x590fa0 + _0x2194d7, _0x1c7bdb = -_0x3ebe53 * _0x590fa0 + _0x5943e3, _0x49d2ec();
            }
        }
        function _0x2a74ad() {
            const _0x1412f2 = _0x4e7afc;
            clearInterval(_0xcd5bca), _0x1e041c(_0x1412f2(0x2a4))[_0x1412f2(0x1c3)](), _0x1e041c(document)[_0x1412f2(0x30b)](_0x1412f2(0x22b));
        }
        function _0x308f2b() {
            const _0x3307ca = _0x4e7afc;
            var _0x6e9cb5 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x3307ca(0x33f),
                        'NOTICE_UPDATE_CONTENT': _0x3307ca(0xf1),
                        'CHECK_UPDATE': _0x3307ca(0x107),
                        'CHECK_UPDATE_MENU': _0x3307ca(0x356),
                        'CHECK_UPDATE_INTRO': _0x3307ca(0x1f9),
                        'RELOAD_SCRIPT': _0x3307ca(0x30e),
                        'DONATE': _0x3307ca(0x18d),
                        'FEEDBACK': 'Feedback',
                        'IMAGE_VIEWER': _0x3307ca(0xcc),
                        'NEW_TAB': _0x3307ca(0x23d),
                        'SHOW_DOM_TREE': _0x3307ca(0x36b),
                        'SELECT_AND_COPY': _0x3307ca(0x34c),
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
                        'REPORT_GITHUB': _0x3307ca(0x10e),
                        'REPORT_DISCORD': 'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
                        'REPORT_FORK': _0x3307ca(0x1c6),
                        'DEBUG': _0x3307ca(0x1fd),
                        'CLOSE': _0x3307ca(0x17f),
                        'ALL_CHECK': _0x3307ca(0x216),
                        'BATCH_DOWNLOAD_SELECTED': _0x3307ca(0x362),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x3307ca(0x1e8),
                        'VID': 'Video',
                        'DW': 'Download',
                        'DW_ALL': _0x3307ca(0xc5),
                        'THUMBNAIL_INTRO': _0x3307ca(0x1c5),
                        'LOAD_BLOB_ONE': _0x3307ca(0x323),
                        'LOAD_BLOB_MULTIPLE': _0x3307ca(0x266),
                        'LOAD_BLOB_RELOAD': _0x3307ca(0x13a),
                        'NO_CHECK_RESOURCE': _0x3307ca(0x132),
                        'NO_VID_URL': 'Cannot\x20find\x20video\x20URL.',
                        'SETTING': _0x3307ca(0x37f),
                        'AUTO_RENAME': _0x3307ca(0x1e4),
                        'RENAME_SHORTCODE': _0x3307ca(0x388),
                        'RENAME_PUBLISH_DATE': _0x3307ca(0x11c),
                        'RENAME_LOCATE_DATE': _0x3307ca(0x1fa),
                        'DISABLE_VIDEO_LOOPING': 'Disable\x20Video\x20Auto-looping',
                        'HTML5_VIDEO_CONTROL': _0x3307ca(0x185),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x3307ca(0x179),
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x3307ca(0x189),
                        'DIRECT_DOWNLOAD_ALL': _0x3307ca(0x276),
                        'MODIFY_VIDEO_VOLUME': _0x3307ca(0x214),
                        'MODIFY_RESOURCE_EXIF': _0x3307ca(0x13b),
                        'SCROLL_BUTTON': _0x3307ca(0x157),
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x3307ca(0xf5),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x3307ca(0x176),
                        'AUTO_RENAME_INTRO': _0x3307ca(0x142),
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': _0x3307ca(0xdd),
                        'RENAME_LOCATE_DATE_INTRO': 'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'DISABLE_VIDEO_LOOPING_INTRO': 'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x3307ca(0x1c4),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x3307ca(0x328),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x3307ca(0x2f8),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x3307ca(0x1cf),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x3307ca(0x2db),
                        'SCROLL_BUTTON_INTRO': 'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x3307ca(0x2b3),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x3307ca(0x128),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x3307ca(0x387),
                        'SKIP_VIEW_STORY_CONFIRM': _0x3307ca(0x203),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x3307ca(0x236),
                        'MODIFY_RESOURCE_EXIF_INTRO': _0x3307ca(0x2bb),
                        'DIRECT_DOWNLOAD_STORY': _0x3307ca(0xbf),
                        'DIRECT_DOWNLOAD_STORY_INTRO': _0x3307ca(0x126)
                    }
                }, _0x17c1b1 = Object[_0x3307ca(0x1ea)]({}, _0x6e9cb5, _0x17637a[_0x3307ca(0xef)]), _0x8f45f0 = Object[_0x3307ca(0x20a)](_0x17c1b1)['sort']()['reduce']((_0xc7c5e5, _0x333e0f) => {
                    return _0xc7c5e5[_0x333e0f] = _0x17c1b1[_0x333e0f], _0xc7c5e5;
                }, {});
            return _0x8f45f0;
        }
        async function _0x2b1a40(_0x3160da) {
            return new Promise((_0x5d96ee, _0x54118c) => {
                const _0x42433a = a0_0x5e9f;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x42433a(0x2de) + _0x3160da + _0x42433a(0x383),
                    'onload': function (_0x33204e) {
                        const _0x3d737e = _0x42433a;
                        try {
                            let _0x1f4070 = JSON[_0x3d737e(0x29f)](_0x33204e[_0x3d737e(0x160)]);
                            _0x5d96ee(_0x1f4070);
                        } catch (_0x3f01bc) {
                            _0x54118c(_0x3f01bc);
                        }
                    },
                    'onerror': function (_0x3e435a) {
                        const _0x5991d9 = _0x42433a;
                        _0x1ece4c(_0x5991d9(0xe7), _0x5991d9(0x2b8), _0x3e435a), _0x54118c(_0x3e435a);
                    }
                });
            });
        }
        function _0x1f01e7(_0x4622f3) {
            const _0x1037e4 = _0x4e7afc, _0x4bc115 = _0x308f2b();
            return _0x4bc115[_0x17637a['lang']] != undefined && _0x4bc115[_0x17637a[_0x1037e4(0x230)]][_0x4622f3] != undefined ? _0x4bc115[_0x17637a['lang']][_0x4622f3] : _0x4bc115[_0x1037e4(0x2d4)][_0x4622f3];
        }
        function _0x580dd6() {
            const _0xdd4ee6 = _0x4e7afc;
            _0x1e041c(_0xdd4ee6(0x326))[_0xdd4ee6(0x273)](function () {
                const _0x6a8285 = _0xdd4ee6;
                _0x1e041c(this)[_0x6a8285(0x307)](_0x1f01e7(_0x1e041c(this)['attr'](_0x6a8285(0x30f))));
            }), _0x1e041c('[data-ih-locale-title]')['each'](function () {
                const _0x213f1a = _0xdd4ee6;
                _0x1e041c(this)[_0x213f1a(0x2ab)](_0x213f1a(0x1df), _0x1f01e7(_0x1e041c(this)[_0x213f1a(0x2ab)]('data-ih-locale-title')));
            });
        }
        _0x1e041c(function () {
            const _0x29a9c9 = _0x4e7afc;
            function _0x289017(_0x4d695d) {
                const _0x217343 = a0_0x5e9f;
                var _0x58217b = [];
                for (var _0x2f41d7 of _0x4d695d) {
                    _0x58217b[_0x217343(0x110)]({
                        'tagName': _0x2f41d7[_0x217343(0x14c)],
                        'id': _0x2f41d7['id'],
                        'className': _0x2f41d7[_0x217343(0x1af)]
                    });
                }
                return _0x58217b;
            }
            function _0x39d726() {
                const _0x593368 = a0_0x5e9f;
                let _0x4fbc77 = _0x1e041c(_0x593368(0xf2))[0x0];
                var _0x26fd8e = '';
                _0x17637a[_0x593368(0x234)][_0x593368(0x396)](_0x4c7a86 => {
                    const _0x3966f6 = _0x593368;
                    var _0x3771c5 = JSON[_0x3966f6(0x2c2)](_0x4c7a86['content'], function (_0x37c395, _0x146c00) {
                        const _0x45797e = _0x3966f6;
                        if (Array[_0x45797e(0x34a)](this)) {
                            if (typeof _0x146c00 === 'object' && _0x146c00 instanceof jQuery)
                                return _0x289017(_0x146c00);
                            return _0x146c00;
                        } else
                            return _0x146c00;
                    }, '\x09');
                    _0x26fd8e += new Date(_0x4c7a86[_0x3966f6(0x226)])['toISOString']() + ':\x20' + _0x3771c5 + '\x0a';
                }), _0x1e041c(_0x593368(0x1d8))[_0x593368(0x307)](_0x593368(0x37d) + _0x26fd8e + _0x593368(0x32d) + location[_0x593368(0x197)] + _0x593368(0x166) + _0x4fbc77['innerHTML']);
            }
            _0x1e041c(_0x29a9c9(0x370))['on']('click', _0x29a9c9(0xcd), function () {
                _0x39d726();
            }), _0x1e041c('body')['on'](_0x29a9c9(0x263), '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x6e3786 = _0x29a9c9;
                _0x1e041c(_0x6e3786(0x1d8))[_0x6e3786(0x1ed)](), document[_0x6e3786(0x35f)](_0x6e3786(0x167));
            }), _0x1e041c('body')['on'](_0x29a9c9(0x263), _0x29a9c9(0x391), function () {
                const _0x3e7f02 = _0x29a9c9;
                _0x1e041c('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x3e7f02(0x307)]()[_0x3e7f02(0x19d)] === 0x0 && _0x39d726();
                var _0x1f7462 = _0x1e041c(_0x3e7f02(0x1d8))[_0x3e7f02(0x307)](), _0x5d89e1 = document['createElement']('a'), _0xce3744 = new Blob([_0x1f7462], { 'type': _0x3e7f02(0x2eb) });
                _0x5d89e1[_0x3e7f02(0x173)] = URL['createObjectURL'](_0xce3744), _0x5d89e1[_0x3e7f02(0x223)] = _0x3e7f02(0x29b) + new Date()[_0x3e7f02(0x220)]() + _0x3e7f02(0x366), document[_0x3e7f02(0x370)][_0x3e7f02(0x1ce)](_0x5d89e1), _0x5d89e1['click'](), _0x5d89e1[_0x3e7f02(0x1c3)]();
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG', function () {
                const _0x60d69e = _0x29a9c9;
                _0x1e041c(this)[_0x60d69e(0x2cb)](_0x60d69e(0x2b7))['length'] > 0x0 ? _0x1e041c(this)[_0x60d69e(0x2cb)](_0x60d69e(0x2b7))[_0x60d69e(0x121)](0xfa, function () {
                    _0x1e041c(this)['remove']();
                }) : _0x1e041c(_0x60d69e(0x36a))[_0x60d69e(0x1c3)]();
            }), _0x1e041c(window)['on']('keydown', function (_0x1ddbf6) {
                const _0x216539 = _0x29a9c9;
                _0x1ddbf6[_0x216539(0x2bd)] == '81' && _0x1ddbf6['altKey'] && (_0x1e041c(_0x216539(0x36a))[_0x216539(0x1c3)](), _0x1ddbf6[_0x216539(0x2a1)]()), _0x1ddbf6['which'] == '87' && _0x1ddbf6[_0x216539(0x1d7)] && (_0xbc350f(), _0x1ddbf6[_0x216539(0x2a1)]()), _0x1ddbf6['which'] == '90' && _0x1ddbf6[_0x216539(0x1d7)] && (_0x1d9ad1(), _0x1ddbf6[_0x216539(0x2a1)]()), _0x1ddbf6[_0x216539(0x2bd)] == '82' && _0x1ddbf6[_0x216539(0x1d7)] && (_0x3eb518(), _0x1ddbf6[_0x216539(0x2a1)]()), _0x1ddbf6['which'] == '83' && _0x1ddbf6[_0x216539(0x1d7)] && (location['href'][_0x216539(0x15b)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x1e041c(_0x216539(0x137))[_0x216539(0x19d)] > 0x0 && _0x1e041c(_0x216539(0x137))?.['trigger']('click'), location['href'][_0x216539(0x15b)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x1e041c(_0x216539(0x2b1))[_0x216539(0x19d)] > 0x0 && _0x1e041c(_0x216539(0x2b1))?.[_0x216539(0xfa)](_0x216539(0x263)), _0x1ddbf6[_0x216539(0x2a1)]());
            }), _0x1e041c(_0x29a9c9(0x370))['on']('change', _0x29a9c9(0x31e), function () {
                const _0x14f1e8 = _0x29a9c9;
                var _0x4ff595 = _0x1e041c(this)[_0x14f1e8(0x2ab)]('id');
                if (_0x4ff595 && _0x5a1808[_0x4ff595] !== undefined) {
                    let _0x2ba833 = _0x1e041c(this)[_0x14f1e8(0x1a8)](_0x14f1e8(0xfb));
                    GM_setValue(_0x4ff595, _0x2ba833), _0x5a1808[_0x4ff595] = _0x2ba833, console[_0x14f1e8(0x2d7)](_0x14f1e8(0x293), _0x4ff595, _0x2ba833);
                }
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), _0x29a9c9(0x21a), function (_0x4bfc28) {
                const _0xb82088 = _0x29a9c9;
                _0x1e041c(this)['find']('#tempWrapper')[_0xb82088(0x19d)] > 0x0 && _0x4bfc28[_0xb82088(0x2a1)]();
            }), _0x1e041c(_0x29a9c9(0x370))['on']('change', _0x29a9c9(0x33d), function () {
                const _0x1bf7a4 = _0x29a9c9;
                let _0x41a824 = _0x1e041c(this)[_0x1bf7a4(0x124)]();
                _0x1e041c(this)[_0x1bf7a4(0x2ab)](_0x1bf7a4(0x371)) == _0x1bf7a4(0x22c) ? _0x1e041c(this)['next']()[_0x1bf7a4(0x124)](_0x41a824) : _0x1e041c(this)[_0x1bf7a4(0x200)]()[_0x1bf7a4(0x124)](_0x41a824), _0x41a824 >= 0x0 && _0x41a824 <= 0x1 && (_0x17637a[_0x1bf7a4(0x1a1)] = _0x41a824, GM_setValue('G_VIDEO_VOLUME', _0x41a824));
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x248), '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)', function () {
                const _0x1f4309 = _0x29a9c9;
                if (_0x1e041c(this)[_0x1f4309(0x2ab)]('type') == _0x1f4309(0x22c)) {
                    let _0x2f8410 = _0x1e041c(this)[_0x1f4309(0x124)]();
                    _0x1e041c(this)[_0x1f4309(0x195)]()['val'](_0x2f8410);
                } else {
                    let _0x4eb806 = _0x1e041c(this)[_0x1f4309(0x124)]();
                    _0x4eb806 >= 0x0 && _0x4eb806 <= 0x1 ? _0x1e041c(this)[_0x1f4309(0x200)]()[_0x1f4309(0x124)](_0x4eb806) : _0x4eb806 < 0x0 ? _0x1e041c(this)['val'](0x0) : _0x1e041c(this)[_0x1f4309(0x124)](0x1);
                }
            }), _0x1e041c('body')['on'](_0x29a9c9(0x248), _0x29a9c9(0x2bc), function () {
                const _0x56f4d7 = _0x29a9c9;
                GM_setValue('G_RENAME_FORMAT', _0x1e041c(this)[_0x56f4d7(0x124)]()), _0x17637a['fileRenameFormat'] = _0x1e041c(this)['val']();
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), _0x29a9c9(0x23a), function (_0x1b0a87) {
                const _0x27526c = _0x29a9c9;
                _0x1b0a87[_0x27526c(0x2a1)](), _0x11f6e9(this);
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), _0x29a9c9(0xc4), function () {
                const _0x59fead = _0x29a9c9;
                if (_0x5a1808[_0x59fead(0x386)] && _0x5a1808[_0x59fead(0x30d)])
                    _0x11f6e9(_0x1e041c(this)['parent']()[_0x59fead(0x2c6)]('a')[_0x59fead(0x2c0)]()[0x0], !![]);
                else {
                    var _0x233c8e = new URL(_0x1e041c(this)[_0x59fead(0x2cb)]()[_0x59fead(0x2c6)]('a')[_0x59fead(0x2ab)](_0x59fead(0x17e)));
                    _0x233c8e[_0x59fead(0x172)] = _0x59fead(0x294), _0x2f686c(_0x233c8e[_0x59fead(0x173)]);
                }
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), '.IG_POPUP_DIG_BODY\x20.videoThumbnail', function () {
                const _0x239924 = _0x29a9c9;
                let _0x332b38 = new Date()['getTime']();
                _0x5a1808['RENAME_PUBLISH_DATE'] && _0x1e041c(this)[_0x239924(0x2cb)]()[_0x239924(0x2c6)]('a')[_0x239924(0x2ab)](_0x239924(0x1b9)) && (_0x332b38 = _0x1e041c(this)[_0x239924(0x2cb)]()[_0x239924(0x2c6)]('a')[_0x239924(0x2ab)](_0x239924(0x1b9)));
                let _0x273896 = _0x1e041c(this)[_0x239924(0x2cb)]()['children']('a')['attr']('data-path') ?? _0x1e041c(_0x239924(0xce))[_0x239924(0x307)]();
                _0x26afe2(_0x1e041c(this)[_0x239924(0x2cb)]()['children']('a')['find'](_0x239924(0x13d))[_0x239924(0x2c0)]()[_0x239924(0x2ab)](_0x239924(0x338)), _0x1e041c(this)[_0x239924(0x2cb)]()[_0x239924(0x2c6)]('a')[_0x239924(0x2ab)](_0x239924(0x1c1)), _0x239924(0x20c), _0x332b38, _0x239924(0x255), _0x273896);
            }), _0x1e041c('body')['on'](_0x29a9c9(0x263), _0x29a9c9(0x137), function () {
                _0x3e9e8b(!![]);
            }), _0x1e041c('body')['on'](_0x29a9c9(0x263), _0x29a9c9(0x1f2), function () {
                _0xa04579();
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), _0x29a9c9(0x360), function (_0x3bf78f) {
                const _0x38d6e0 = _0x29a9c9;
                _0x3bf78f[_0x38d6e0(0x2a1)](), _0x3e9e8b(!![], !![], !![]);
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), _0x29a9c9(0x193), function () {
                _0x314a00(!![]);
            }), _0x1e041c('body')['on']('click', _0x29a9c9(0x32e), function (_0x93ede) {
                _0x93ede['stopPropagation'](), _0x15e989(!![]);
            }), _0x1e041c(_0x29a9c9(0x370))['on']('click', '.IG_DWHISTORY', function () {
                _0x378eb6(!![]);
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), _0x29a9c9(0x24f), function () {
                _0x44f80c();
            }), _0x1e041c('body')['on'](_0x29a9c9(0x263), _0x29a9c9(0x1cb), function (_0x28dd72) {
                const _0x27866a = _0x29a9c9;
                _0x28dd72[_0x27866a(0x2a1)](), _0x378eb6(!![], !![]);
            }), _0x1e041c('body')['on'](_0x29a9c9(0x263), '.IG_DWHISTORY_THUMBNAIL', function () {
                _0x28db75(!![]);
            }), _0x1e041c(_0x29a9c9(0x370))['on']('click', _0x29a9c9(0x20f), function () {
                _0xb8269e(!![], !![]);
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), '.IG_REELS_NEWTAB', function () {
                _0xb8269e(!![], !![], !![]);
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), '.IG_REELS_THUMBNAIL', function () {
                _0xb8269e(!![], ![]);
            }), _0x1e041c('body')['on'](_0x29a9c9(0x1ec), _0x29a9c9(0xbc), function (_0x2f19e9) {
                const _0x6c9c43 = _0x29a9c9;
                if (_0x2f19e9[_0x6c9c43(0x2bd)] === 0x3 || _0x2f19e9[_0x6c9c43(0x2bd)] === 0x2) {
                    if (location['href'] === _0x6c9c43(0x1a3) && _0x5a1808[_0x6c9c43(0x18a)]) {
                        _0x2f19e9[_0x6c9c43(0x2a1)]();
                        if (_0x1e041c(this)[_0x6c9c43(0x10c)](_0x6c9c43(0xe2))[_0x6c9c43(0x19d)] > 0x0) {
                            const _0x17936e = _0x6c9c43(0x1a3) + _0x1e041c(this)['children'](_0x6c9c43(0x18e))[_0x6c9c43(0x11f)]()[_0x6c9c43(0x307)]();
                            _0x2f19e9[_0x6c9c43(0x2bd)] === 0x2 ? GM_openInTab(_0x17936e) : location[_0x6c9c43(0x173)] = _0x17936e;
                        }
                    }
                }
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x2d2), _0x29a9c9(0x221), function () {
                const _0x1f500c = _0x29a9c9;
                var _0x2b8eee = _0x1e041c(this)[_0x1f500c(0x10c)](_0x1f500c(0x248))[_0x1f500c(0x1a8)](_0x1f500c(0xfb));
                _0x1e041c(_0x1f500c(0x1ac))[_0x1f500c(0x273)](function () {
                    const _0x385561 = _0x1f500c;
                    _0x1e041c(this)[_0x385561(0x1a8)](_0x385561(0xfb), _0x2b8eee);
                });
            }), _0x1e041c(_0x29a9c9(0x370))['on']('change', _0x29a9c9(0x1ac), function () {
                const _0x19ca3d = _0x29a9c9;
                var _0x4bdb35 = _0x1e041c(_0x19ca3d(0x309))[_0x19ca3d(0x19d)], _0x27c3dd = _0x1e041c(_0x19ca3d(0x1ac))[_0x19ca3d(0x19d)];
                _0x1e041c(_0x19ca3d(0x221))[_0x19ca3d(0x10c)](_0x19ca3d(0x248))[_0x19ca3d(0x1a8)](_0x19ca3d(0xfb), _0x4bdb35 == _0x27c3dd);
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), _0x29a9c9(0x227), function () {
                const _0x32c792 = _0x29a9c9;
                let _0x4d3ce1 = 0x0;
                _0x1e041c(_0x32c792(0x13c))[_0x32c792(0x273)](function () {
                    const _0xc70b2f = _0x32c792;
                    _0x1e041c(this)[_0xc70b2f(0x200)]()[_0xc70b2f(0x2c6)](_0xc70b2f(0x248))['prop'](_0xc70b2f(0xfb)) && (_0x1e041c(this)['trigger'](_0xc70b2f(0x263)), _0x4d3ce1++);
                }), _0x4d3ce1 == 0x0 && alert(_0x1f01e7(_0x32c792(0x1a7)));
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x2d2), _0x29a9c9(0x2c4), function () {
                const _0x46dffb = _0x29a9c9;
                GM_setValue(_0x46dffb(0x230), _0x1e041c(this)['val']()), _0x17637a[_0x46dffb(0x230)] = _0x1e041c(this)[_0x46dffb(0x124)](), _0x17637a['lang']?.[_0x46dffb(0xd2)]('en') || _0x17637a['locale'][_0x17637a[_0x46dffb(0x230)]] != null ? (_0x580dd6(), _0x4ac751()) : _0x2b1a40(_0x17637a[_0x46dffb(0x230)])['then'](_0x502f52 => {
                    const _0x3bab53 = _0x46dffb;
                    _0x17637a[_0x3bab53(0xef)][_0x17637a[_0x3bab53(0x230)]] = _0x502f52, _0x580dd6(), _0x4ac751();
                })[_0x46dffb(0x1b0)](_0x3000ad => {
                    const _0x21d181 = _0x46dffb;
                    console[_0x21d181(0x2ef)](_0x21d181(0x364), _0x3000ad);
                });
            }), _0x1e041c(_0x29a9c9(0x370))['on'](_0x29a9c9(0x263), _0x29a9c9(0x208), function () {
                const _0x227440 = _0x29a9c9;
                _0x1e041c(_0x227440(0x13c))[_0x227440(0x273)](function () {
                    const _0x366934 = _0x227440;
                    _0x1e041c(this)[_0x366934(0xfa)](_0x366934(0x263));
                });
            });
            const _0x41add6 = new MutationObserver(_0x1d43b6 => {
                const _0x58b4cc = _0x29a9c9;
                for (const _0x40821c of _0x1d43b6) {
                    _0x40821c[_0x58b4cc(0x371)] === _0x58b4cc(0x2cf) && _0x40821c[_0x58b4cc(0x253)][_0x58b4cc(0x396)](_0x400780 => {
                        const _0x47f9ab = _0x58b4cc, _0x3ae6b1 = _0x1e041c(_0x400780)[_0x47f9ab(0x10c)](_0x47f9ab(0x27d));
                        if (location['pathname'][_0x47f9ab(0xd2)](_0x47f9ab(0x18c))) {
                            if (_0x1e041c(_0x400780)[_0x47f9ab(0x2ab)]('data-ih-locale-title') == null && _0x1e041c(_0x400780)[_0x47f9ab(0x2ab)]('data-visualcompletion') == null && _0x400780[_0x47f9ab(0x14c)] === _0x47f9ab(0x311)) {
                                var _0x51f78f = _0x1e041c(_0x400780)['find'](_0x47f9ab(0x187));
                                let _0x44b56f = _0x51f78f?.['attr']('title');
                                _0x44b56f != null && _0x51f78f[_0x47f9ab(0x307)](_0x44b56f);
                            }
                        }
                        if (_0x3ae6b1[_0x47f9ab(0x19d)] > 0x0) {
                            _0x5a1808[_0x47f9ab(0x118)] && _0x3ae6b1[_0x47f9ab(0x273)](function () {
                                _0x1e041c(this)['on']('play\x20playing', function () {
                                    const _0x13461f = a0_0x5e9f;
                                    !_0x1e041c(this)[_0x13461f(0x32c)](_0x13461f(0x375)) && (_0x1e041c(this)[_0x13461f(0x2ab)](_0x13461f(0x34b), !![]), this[_0x13461f(0x10b)] = _0x17637a[_0x13461f(0x1a1)], _0x1ece4c('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x47f9ab(0x197)][_0x47f9ab(0x15b)](/^(\/stories\/)/ig)) {
                                const _0x232f63 = location[_0x47f9ab(0x197)][_0x47f9ab(0x15b)](/^(\/stories\/highlights\/)/ig) != null, _0x568c8f = _0x232f63 ? _0x47f9ab(0x280) : _0x47f9ab(0x398);
                                _0x3ae6b1['each'](function () {
                                    const _0x3ebd5b = _0x47f9ab;
                                    _0x1e041c(this)['on'](_0x3ebd5b(0x327), function () {
                                        const _0x3d4ba9 = _0x3ebd5b;
                                        if (!_0x1e041c(this)['data'](_0x3d4ba9(0x377))) {
                                            let _0x266bc4 = _0x1e041c(this);
                                            _0x266bc4[_0x3d4ba9(0x1d9)](_0x3d4ba9(0x215))[_0x3d4ba9(0x340)](function () {
                                                return _0x1e041c(this)['width']() == _0x266bc4['width']();
                                            })['find'](_0x3d4ba9(0x10d))['length'] === 0x0 ? (_0x1e041c(this)[_0x3d4ba9(0x2ab)](_0x3d4ba9(0x156), !![]), _0x232f63 ? _0x28db75(![]) : _0x314a00(![]), _0x1ece4c('(' + _0x568c8f + ')', _0x3d4ba9(0x150))) : (_0x1e041c(this)[_0x3d4ba9(0x2ab)](_0x3d4ba9(0x156), !![]), _0x1ece4c('(' + _0x568c8f + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0x1aa02f = _0x1e041c(this);
                                    if (_0x5a1808[_0x3ebd5b(0x351)]) {
                                        if (!_0x1aa02f[_0x3ebd5b(0x32c)](_0x3ebd5b(0x2d1))) {
                                            _0x1ece4c('(' + _0x568c8f + ')', _0x3ebd5b(0x272));
                                            _0x5a1808['MODIFY_VIDEO_VOLUME'] && (this[_0x3ebd5b(0x10b)] = _0x17637a[_0x3ebd5b(0x1a1)], _0x1aa02f['on'](_0x3ebd5b(0x175), function () {
                                                const _0x4a5e33 = _0x3ebd5b;
                                                this[_0x4a5e33(0x10b)] = _0x17637a[_0x4a5e33(0x1a1)];
                                            }));
                                            let _0x4a67b1 = _0x1aa02f[_0x3ebd5b(0x1d9)](_0x3ebd5b(0x18e))['filter'](function () {
                                                    const _0x151f3a = _0x3ebd5b;
                                                    return _0x1e041c(this)['attr']('class') == null && _0x1e041c(this)[_0x151f3a(0x2ab)](_0x151f3a(0x16c)) == null;
                                                })[_0x3ebd5b(0x2c0)](), _0x59777d = _0x4a67b1[_0x3ebd5b(0x195)]();
                                            _0x59777d[_0x3ebd5b(0x2af)]();
                                            let _0x5b29d1 = _0x4a67b1['find'](_0x3ebd5b(0x26b));
                                            _0x5b29d1[_0x3ebd5b(0x2af)]();
                                            const _0x1bf3b5 = function (_0x36bc95) {
                                                const _0x217014 = _0x3ebd5b;
                                                _0x36bc95[_0x217014(0x2a1)](), _0x1aa02f[_0x217014(0x1f7)](_0x217014(0x33c), '2'), _0x1aa02f[_0x217014(0x2ab)](_0x217014(0x2d1), !![]), _0x5b29d1[_0x217014(0x2af)](), _0x59777d[_0x217014(0x2af)](), _0x59d4a2(_0x1aa02f, _0x1aa02f['parents'](_0x217014(0x215))['filter'](function () {
                                                    const _0x39b69f = _0x217014;
                                                    return _0x1e041c(this)[_0x39b69f(0x2dd)]() == _0x1aa02f['width']();
                                                })[_0x217014(0x2c0)](), _0x568c8f, _0x217014(0xc1));
                                            };
                                            _0x1aa02f[_0x3ebd5b(0x2cb)]()[_0x3ebd5b(0x10c)](_0x3ebd5b(0x1ba))['on']('contextmenu', _0x1bf3b5), _0x5b29d1['on']('contextmenu', _0x1bf3b5), _0x59777d['on'](_0x3ebd5b(0x278), _0x1bf3b5), _0x1aa02f['on'](_0x3ebd5b(0x278), function (_0x268797) {
                                                const _0x3a07e9 = _0x3ebd5b;
                                                _0x268797['preventDefault'](), _0x1aa02f['css'](_0x3a07e9(0x33c), '-1'), _0x1aa02f[_0x3a07e9(0x2e7)]('controls'), _0x59777d[_0x3a07e9(0x237)](), _0x5b29d1[_0x3a07e9(0x237)](), _0x59d4a2(_0x1aa02f, _0x1aa02f['parents']('div[style][class]')[_0x3a07e9(0x340)](function () {
                                                    const _0x15ba96 = _0x3a07e9;
                                                    return _0x1e041c(this)[_0x15ba96(0x2dd)]() == _0x1aa02f[_0x15ba96(0x2dd)]();
                                                })[_0x3a07e9(0x2c0)](), _0x568c8f, _0x3a07e9(0xc1));
                                            }), _0x1aa02f['on'](_0x3ebd5b(0x32f), function () {
                                                const _0x1396a0 = _0x3ebd5b;
                                                let _0x5103c9 = _0x4a67b1[_0x1396a0(0x2cb)]()[_0x1396a0(0x10c)](_0x1396a0(0x1d2))['parents'](_0x1396a0(0x12d))[_0x1396a0(0x2c0)]();
                                                var _0x1af8a6 = _0x5103c9['find'](_0x1396a0(0x337))['length'] === 0x0;
                                                this[_0x1396a0(0xcb)] != _0x1af8a6 && (this['volume'] = _0x17637a[_0x1396a0(0x1a1)], _0x5103c9?.[_0x1396a0(0xfa)](_0x1396a0(0x263))), _0x1e041c(this)['attr'](_0x1396a0(0x21c)) && (_0x17637a[_0x1396a0(0x1a1)] = this[_0x1396a0(0x10b)], GM_setValue(_0x1396a0(0x1d5), this[_0x1396a0(0x10b)])), this[_0x1396a0(0x10b)] == _0x17637a[_0x1396a0(0x1a1)] && _0x1e041c(this)[_0x1396a0(0x2ab)](_0x1396a0(0x21c), !![]);
                                            }), _0x1aa02f[_0x3ebd5b(0x1f7)](_0x3ebd5b(0x141), 'absolute'), _0x1aa02f[_0x3ebd5b(0x1f7)]('z-index', '2'), _0x1aa02f[_0x3ebd5b(0x2ab)](_0x3ebd5b(0x24b), !![]), _0x1aa02f[_0x3ebd5b(0x2ab)](_0x3ebd5b(0x2d1), !![]);
                                        }
                                    } else
                                        _0x59d4a2(_0x1aa02f, _0x1aa02f[_0x3ebd5b(0x1d9)](_0x3ebd5b(0x215))['filter'](function () {
                                            const _0x1c4304 = _0x3ebd5b;
                                            return _0x1e041c(this)[_0x1c4304(0x2dd)]() == _0x1aa02f[_0x1c4304(0x2dd)]();
                                        })[_0x3ebd5b(0x2c0)](), _0x568c8f, _0x3ebd5b(0xc1));
                                });
                            }
                        }
                    });
                }
            });
            _0x41add6['observe'](_0x1e041c(_0x29a9c9(0xf2))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x4ace() {
    const _0x4ae251 = [
        'name',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'removeClass',
        'Script\x20Loaded',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'cursor',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'SHOW_DOM_TREE',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'image_versions2',
        'div\x20>\x20ul._acay',
        '.IG_POPUP_DIG\x20input',
        '._aagv\x20img',
        'currentURL',
        'post',
        '\x22\x20data-globalIndex=\x22',
        'Loading\x20Blob\x20Media...',
        'from',
        'NOPATH',
        '[data-ih-locale]',
        'timeupdate',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'x1s85apg',
        'data-loop',
        'data',
        '\x0a-----\x0a\x0aLocation:\x20',
        '.IG_DWPROFILE',
        'volumechange',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        'a[href]',
        '--ig-track-progress:\x20',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'video[class]',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'src',
        'image/jpeg',
        'undefined',
        '29623uqtfPe',
        'z-index',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'div\x20>\x20ul\x20li._acaz',
        'Wololo!\x20New\x20version\x20released.',
        'filter',
        'Fetch\x20from\x20memory\x20cache:',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'logger\x20sliced',
        'getDate',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'CHECK_UPDATE_MENU',
        'owner',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'isArray',
        'data-modify',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        '</button>',
        '.IG_DW_ALL_MAIN',
        'REPORT_DISCORD',
        'HTML5_VIDEO_CONTROL',
        '._acay',
        'GL_referrer',
        'includes',
        'observe',
        'Checking\x20for\x20Updates',
        'after',
        'GL_dataCache',
        'html',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        '._acnb',
        'setUint32',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'execCommand',
        '.IG_DWNEWTAB',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'Download\x20Selected\x20Resources',
        'div:not([class]):not([style])',
        'getTranslationText\x20catch\x20error:',
        'video_versions',
        '.txt',
        'video\x20volume\x20changed\x20#slider',
        '#scrollWrapper',
        'NEW_TAB',
        '.IG_POPUP_DIG',
        'Show\x20DOM\x20Tree',
        '\x22\x20class=\x22IG_REELS\x22>',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'GL_username',
        'target',
        'body',
        'type',
        '<label\x20class=\x22globalSettings',
        'THUMBNAIL',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'modify',
        'svg',
        'modify-thumbnail',
        'getPostOwner()',
        'query_id',
        'fail',
        'DONATE',
        'center',
        'Logger:\x0a',
        '0\x200',
        'Settings',
        'warn',
        'users',
        'transition',
        '.json',
        'is_video',
        'createObjectURL',
        'FORCE_RESOURCE_VIA_MEDIA',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'a[href^=\x22/\x22]',
        'MODIFY_RESOURCE_EXIF',
        'data-name',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'NO_VID_URL',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '<div\x20id=\x22tempWrapper\x22></div>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'deg)',
        '</span></label>',
        'forEach',
        'items',
        'story',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        '%22}',
        'IG\x20Debug\x20DOM\x20Tree',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Story/Highlight',
        'matchAll',
        'vertical',
        'min',
        'div:last-child',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'Download\x20All\x20Resources',
        'DEBUG',
        'LOAD_BLOB_MULTIPLE',
        'slice',
        'stp',
        '/p/',
        'muted',
        'Open\x20Image\x20In\x20Viewer',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        '#article-id',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'scrollBy',
        'startsWith',
        'avatar',
        '.circle_wrapper\x20span',
        'config_width',
        'toLowerCase',
        'candidates',
        'endsWith',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'media-id',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'https://ko-fi.com/snkoarashi',
        'reel',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'srcset',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'carousel_media',
        'getTranslationText()',
        'Request\x20failed\x20with\x20API\x20response\x20',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '</option>',
        'username',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '.IG_DWHISTORY_THUMBNAIL',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'locale',
        'px,\x20',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'div[id^=\x22mount\x22]',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'Cannot\x20find\x20resource\x20url.',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'NOTICE_UPDATE_TITLE',
        'regenerated',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'CHECK_UPDATE',
        'trigger',
        'checked',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'DIRECT_DOWNLOAD_ALL',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'sort',
        'shortcode_media',
        'DISABLE_VIDEO_LOOPING',
        'grabbing',
        'NOTICE_UPDATE_CONTENT',
        'there\x20is\x20no\x20new\x20update',
        '/accounts/login',
        '\x22\x20title=\x22',
        'Checking\x20for\x20Script\x20Updates',
        'dragstart\x20drop',
        'splice',
        'img[referrerpolicy]',
        'volume',
        'find',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        '</a></button>',
        'push',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'a[href]\x20time[datetime]',
        'px)\x20scale(',
        'CLOSE',
        'canDownload',
        'padEnd',
        'arrayBuffer',
        'MODIFY_VIDEO_VOLUME',
        'toISOString',
        '14151QZCWin',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'user',
        'last',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-name=\x22',
        'fadeOut',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'val',
        'top',
        'When\x20you\x20click\x20Download\x20All\x20Resources,\x20whether\x20you\x20want\x20to\x20download\x20all\x20stories/highlights\x20resources\x20directly.',
        'instagram.com/reels/',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'hasClass',
        'undefined\x20username',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        '14yBcEUQ',
        '[role=\x22button\x22]',
        'display_resources',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'LOAD_BLOB_ONE',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'boolean',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'setUint16',
        'padStart',
        '.IG_DWSTORY',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'RELOAD_SCRIPT',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'Modify\x20Resource\x20EXIF\x20​​Properties',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'img',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'replace',
        'trim',
        'position',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'subarray',
        '\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        '/following/',
        'zoom-in',
        'SKIP_VIEW_STORY_CONFIRM',
        '.circle_wrapper',
        '#iv_header',
        'before',
        'tagName',
        'Found\x20post\x20container',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_transform\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_rotate\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20</div>',
        'Manually\x20inserting\x20thumbnail\x20button',
        '_acnf',
        'element',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'data-modify-thumbnail',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'translate(',
        'isDialog',
        'rotate(',
        'match',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'set',
        'getSeconds',
        'getUserHighSizeProfile()',
        'response',
        'https://www.instagram.com/reels/',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'then',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        'fromCharCode',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'copy',
        'GL_registerEventList',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'THUMBNAIL_INTRO',
        'grab',
        'style',
        'isReels',
        'mp4',
        'version',
        'taken_at_timestamp',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'host',
        'href',
        '</div>',
        'loadstart',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'NONE',
        'getUserId()',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'message',
        'edges',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'data-href',
        'Close',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'fileRenameFormat',
        'DOWNLOAD_ALL',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'Display\x20HTML5\x20Video\x20Controller',
        'highlights',
        'time[datetime]',
        '#iv_rotate',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'getUserIdWithAgent()',
        '/stories/highlights/',
        'Donate',
        'div',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'pageY',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '\x20-</a>',
        '.IG_DWSTORY_THUMBNAIL',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'next',
        'registerMenuIds',
        'pathname',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '21738FifblA',
        'getMinutes',
        '.IG_POPUP_DIG\x20#post_info',
        'edge_sidecar_to_children',
        'length',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'selected',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'videoVolume',
        '._acay\x20+\x20.x24i39r',
        'https://www.instagram.com/',
        'SETTING',
        'transform-origin',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'NO_CHECK_RESOURCE',
        'prop',
        'onReadyMyDW()\x20Timer',
        'navigator',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'video_resources',
        'data-snig',
        'className',
        'catch',
        'createMediaListDOM',
        'height',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'div#splash-screen',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'GraphSidecar',
        '/info/',
        'wheel',
        'datetime',
        'video\x20+\x20div',
        'getBlobMedia()',
        '<a\x20datetime=\x22',
        '</p>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        '</a></button><br/>',
        'taken_at',
        'data-username',
        'wrap',
        'remove',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'Download\x20Video\x20Thumbnail',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'script',
        'GL_postPath',
        'loop',
        'trigging',
        '.IG_DWHINEWTAB',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        '52jGzdIN',
        'appendChild',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'none',
        'RIFF',
        'G_VIDEO_VOLUME',
        'updatenotification',
        'altKey',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'parents',
        'mouseenter',
        '</a>',
        '#imageViewer\x20>\x20section',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '_ac3q',
        'title',
        'byteLength',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'FORCE_FETCH_ALL_RESOURCES',
        'WEBP',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        '</div></div>',
        'Can\x20not\x20find\x20download\x20url.',
        'pageLoaded',
        'Image',
        'BATCH_DOWNLOAD_DIRECT',
        'assign',
        'a[href^=\x22/p/\x22]',
        'mousedown',
        'select',
        'ended',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'DW_ALL',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '.IG_DWSTORY_ALL',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'replaceAll',
        'css',
        'Not\x20a\x20JPEG\x20or\x20WEBP',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        ':hidden',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'Debug\x20Window',
        'floor',
        'disconnect',
        'prev',
        '_acnb',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        '.xpgaw4o',
        'DIRECT_DOWNLOAD_STORY',
        '.IG_THUMBNAIL_MAIN',
        '\x22\x20datetime=\x22',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        'encode',
        'keys',
        'status',
        'thumbnail',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'hd_profile_pic_url_info',
        '.IG_REELS',
        '\x20child',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_right\x22\x20style=\x22transform:\x20scaleX(-1);cursor:\x20pointer;\x22>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'div[style][class]',
        'Select\x20All',
        '\x22\x20/>',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'pageX',
        '.IG_POPUP_DIG\x20.globalSettings',
        'https://i.instagram.com/api/v1/users/',
        'data-completed',
        'VP8X',
        'node',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'getTime',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'transform\x200.15s\x20ease',
        'download',
        'data-type',
        'max',
        'time',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'join',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'mousemove.igHelper',
        'range',
        'Preference\x20Settings',
        'Found\x20insert\x20point',
        '<option\x20value=\x22',
        'lang',
        '.IG_NEWTAB_MAIN',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'GL_logger',
        'photo',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'show',
        'LOCALE_MANIFEST',
        'tempFetchRateLimit',
        'a[data-needed=\x22direct\x22]',
        'Failed\x20to\x20strip\x20EXIF\x20and/or\x20attach\x20post\x20URL\x20to\x20EXIF.',
        'display',
        'Open\x20in\x20New\x20Tab',
        'getUint16',
        'getStories()',
        'load',
        '#iv_close',
        'play\x20playing',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'AUTO_RENAME',
        'label',
        'reels_media',
        'input',
        'left',
        '#iv_image',
        'data-controls',
        'GL_repeat',
        'data-path',
        'www.',
        '.IG_DWHISTORY_ALL',
        'x1lix1fw',
        'XMP\x20',
        'ALL_CHECK',
        'addedNodes',
        '.button_wrapper',
        'jpg',
        '20000',
        '__typename',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        '.IG_DW_MAIN',
        'Request\x20with:',
        'Feedback\x20Options',
        '\x22\x20class=\x22newTab\x22>',
        '*/*',
        'get',
        'remove-thumbnail',
        'getMonth',
        'deltaY',
        'getMediaInfo()',
        'click',
        'substr',
        '<div></div>',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'REPORT_GITHUB',
        '<a\x20media-id=\x22',
        'G_CHECK_TIMESTAMP',
        'pointer',
        'div[class][role=\x22button\x22]',
        'x1iyjqo2',
        'getUint8',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '/followers/',
        '</span></div>',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'each',
        '10CFxwhI',
        '_INTRO',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'getBlobMediaWithQueryID()',
        'contextmenu',
        'version:',
        'transform',
        'GraphImage',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'video',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'highlight',
        'video\x20+\x20div\x20>\x20div',
        '.IG_IMAGE_VIEWER',
        'INTERNAL_CSS',
        'REPORT_FORK',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'feedback_message',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'code',
        'isHighlightsStory',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '386570paZqAN',
        'RENAME_PUBLISH_DATE',
        'buffer',
        'BATCH_DOWNLOAD_SELECTED',
        '692688UxfMhy',
        '[data-snig]',
        'user\x20settings',
        'scontent.cdninstagram.com',
        'flex',
        'pause',
        'data-remove-thumbnail',
        'carousel_media:\x20undefined\x20username',
        'stopPropagation',
        'div[role=\x22presentation\x22]',
        'DOMTree-',
        'createStoryListDOM()',
        '\x20ID:\x20',
        '<input\x20value=\x22',
        'parse',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'preventDefault',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        '37px',
        '#imageViewer',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex],\x20section\x20>\x20main[role=\x22main\x22]\x20>\x20div[class]',
        'query_hash',
        '4578563voGbTs',
        'EXIF',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'attr',
        'searchParams',
        '572112wkETvR',
        'finalUrl',
        'hide',
        'reduce',
        '.IG_DWHISTORY',
        'smooth',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'absolute',
        'ig_cache_key',
        'GET',
        '#tempWrapper',
        'reject',
        '#iv_transform',
        'downloadURL',
        'Modify\x20the\x20EXIF\x20​​properties\x20of\x20the\x20image\x20resource\x20to\x20place\x20the\x20post\x20link\x20in\x20it.',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        'which',
        '\x22\x20data-path=\x22',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'first',
        'getBlobMediaWithQuery()',
        'stringify',
        'SELECT_AND_COPY',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'DOWNLOAD',
        'children',
        'reels',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'textContent',
        'shortcode',
        'parent',
        'GL_observer',
        'video_url',
        'relative',
        'childList',
        '85qaYwwU',
        'controls',
        'change',
        'https://www.instagram.com/reel/',
        'en-US',
        'body\x20>\x20div\x20section:visible._ac0a',
        'append',
        'log',
        'stories',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'VID',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'url',
        'width',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'firstStarted',
        'hidden',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        'createElement',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'will-change',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'removeAttr',
        'userAgent',
        'toString',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'text/plain',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        'display_url',
        'div[class]',
        'error',
        'TURN_DEG',
        'div.volume_slider\x20input',
        'isIntersecting',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'image/webp',
        'Exif\x00\x00',
        'faild',
        'addClass',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'IMAGE_VIEWER',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        'bottom',
        'split',
        '_blank',
        'https://www.instagram.com/p/',
        'body\x20>\x20div\x20section._ac0a',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'IMG',
        'GraphVideo',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'isStory',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '</span>\x20',
        'text',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        'div.volume_slider',
        'off',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'Reload\x20Script',
        'data-ih-locale',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        'DIV'
    ];
    a0_0x4ace = function () {
        return _0x4ae251;
    };
    return a0_0x4ace();
}