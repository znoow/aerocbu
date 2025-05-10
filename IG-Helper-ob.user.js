// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.5.4
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

function a0_0x5a53(_0x22c886, _0x162504) {
    const _0x3369ca = a0_0x3369();
    return a0_0x5a53 = function (_0x5a5352, _0x498d3c) {
        _0x5a5352 = _0x5a5352 - 0x147;
        let _0x396829 = _0x3369ca[_0x5a5352];
        return _0x396829;
    }, a0_0x5a53(_0x22c886, _0x162504);
}
(function (_0x1f8695, _0x52bd9e) {
    const _0x320956 = a0_0x5a53, _0x1a3edc = _0x1f8695();
    while (!![]) {
        try {
            const _0x15c635 = parseInt(_0x320956(0x2cb)) / 0x1 * (parseInt(_0x320956(0x311)) / 0x2) + -parseInt(_0x320956(0x1d0)) / 0x3 + -parseInt(_0x320956(0x268)) / 0x4 * (-parseInt(_0x320956(0x3ce)) / 0x5) + -parseInt(_0x320956(0x3ee)) / 0x6 + -parseInt(_0x320956(0x28f)) / 0x7 * (parseInt(_0x320956(0x1c7)) / 0x8) + parseInt(_0x320956(0x33f)) / 0x9 * (parseInt(_0x320956(0x18a)) / 0xa) + -parseInt(_0x320956(0x26d)) / 0xb;
            if (_0x15c635 === _0x52bd9e)
                break;
            else
                _0x1a3edc['push'](_0x1a3edc['shift']());
        } catch (_0x453057) {
            _0x1a3edc['push'](_0x1a3edc['shift']());
        }
    }
}(a0_0x3369, 0xaf0a5), function (_0x15a917) {
    setTimeout(() => {
        'use strict';
        const _0x5364a1 = a0_0x5a53;
        const _0x201e99 = {
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
                'MODIFY_RESOURCE_EXIF': ![],
                'SCROLL_BUTTON': !![],
                'FORCE_RESOURCE_VIA_MEDIA': ![],
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': ![],
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': ![],
                'SKIP_VIEW_STORY_CONFIRM': ![]
            }, _0x5a5ec5 = [
                _0x5364a1(0x34f),
                'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
                _0x5364a1(0x3f1)
            ], _0xc64512 = {
                'DOWNLOAD': _0x5364a1(0x389),
                'NEW_TAB': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
                'THUMBNAIL': _0x5364a1(0x3d8),
                'DOWNLOAD_ALL': _0x5364a1(0x3bc),
                'CLOSE': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
                'FULLSCREEN': _0x5364a1(0x1ff),
                'TURN_DEG': _0x5364a1(0x3e8)
            }, _0x4a40c3 = 0xfa, _0x2b6eb5 = GM_getResourceText(_0x5364a1(0x28a)), _0xe2f8cb = JSON[_0x5364a1(0x1f9)](GM_getResourceText(_0x5364a1(0x394)));
        var _0x1148d1 = {
            'videoVolume': GM_getValue(_0x5364a1(0x3d4)) ? GM_getValue(_0x5364a1(0x3d4)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x5364a1(0x14a)) ? GM_getValue('G_RENAME_FORMAT') : _0x5364a1(0x192),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue('lang') || navigator[_0x5364a1(0x3a6)] || navigator[_0x5364a1(0x187)],
            'currentURL': location[_0x5364a1(0x35d)],
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
                _0x29e80e();
            })
        };
        _0x3f7cd9(), GM_addStyle(_0x2b6eb5), _0x35b7ca(), _0x15e69f(_0x1148d1[_0x5364a1(0x3e4)])[_0x5364a1(0x29f)](_0x485d9b => {
            const _0x417b63 = _0x5364a1;
            _0x1148d1['locale'][_0x1148d1[_0x417b63(0x3e4)]] = _0x485d9b, _0x137890(), _0x35b7ca(), _0xb8d307(0x12c);
        })[_0x5364a1(0x363)](_0x36b372 => {
            const _0x37446b = _0x5364a1;
            _0x35b7ca(), _0xb8d307(0x12c), !_0x1148d1['lang'][_0x37446b(0x3e2)]('en') && console['error'](_0x37446b(0x35e), _0x36b372);
        }), _0x34c369('Script\x20Loaded', GM_info['script'][_0x5364a1(0x1ab)], _0x5364a1(0x385), GM_info[_0x5364a1(0x398)][_0x5364a1(0x287)]);
        var _0x437795 = setInterval(function () {
            const _0x2ac8bd = _0x5364a1;
            if (_0x15a917(_0x2ac8bd(0x25d))[_0x2ac8bd(0x317)] > 0x0 && !_0x15a917(_0x2ac8bd(0x25d))['is'](_0x2ac8bd(0x23f)) || location[_0x2ac8bd(0x156)][_0x2ac8bd(0x35a)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x2ac8bd(0x1cc)][_0x2ac8bd(0x3e2)](_0x2ac8bd(0x1db)) || (location['pathname'][_0x2ac8bd(0x369)](_0x2ac8bd(0x1a4)) || location[_0x2ac8bd(0x156)][_0x2ac8bd(0x369)](_0x2ac8bd(0x2ba))) && _0x15a917('body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]')[_0x2ac8bd(0x317)] > 0x0) {
                _0x1148d1['pageLoaded'] = ![];
                return;
            }
            if (_0x1148d1[_0x2ac8bd(0x257)] != location[_0x2ac8bd(0x35d)] || !_0x1148d1[_0x2ac8bd(0x16f)] || !_0x1148d1[_0x2ac8bd(0x2b0)]) {
                console[_0x2ac8bd(0x1bd)]('Main\x20Timer', 'trigging'), clearInterval(_0x1148d1[_0x2ac8bd(0x1a1)]), _0x1148d1['pageLoaded'] = ![], _0x1148d1['firstStarted'] = !![], _0x1148d1['currentURL'] = location[_0x2ac8bd(0x35d)], _0x1148d1[_0x2ac8bd(0x178)][_0x2ac8bd(0x1dd)]();
                if (location[_0x2ac8bd(0x35d)][_0x2ac8bd(0x3e2)]('https://www.instagram.com/p/') || location['pathname']['match'](/^\/(.*?)\/(p|reel)\//ig) || location[_0x2ac8bd(0x35d)][_0x2ac8bd(0x3e2)](_0x2ac8bd(0x251))) {
                    _0x1148d1['GL_dataCache'][_0x2ac8bd(0x26b)] = {}, _0x1148d1[_0x2ac8bd(0x36b)][_0x2ac8bd(0x34c)] = {}, _0x34c369(_0x2ac8bd(0x335));
                    var _0x229d01 = setInterval(() => {
                        const _0x215a7d = _0x2ac8bd;
                        _0x15a917(_0x215a7d(0x2a6))[_0x215a7d(0x317)] > 0x0 && (clearInterval(_0x229d01), setTimeout(() => {
                            _0x29e80e(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x1148d1[_0x2ac8bd(0x2b0)] = !![];
                }
                location['href'][_0x2ac8bd(0x3e2)](_0x2ac8bd(0x17f)) && (_0x34c369('isReels'), setTimeout(() => {
                    _0xd7a76c(![]);
                }, 0x96), _0x1148d1[_0x2ac8bd(0x2b0)] = !![]);
                if (location[_0x2ac8bd(0x35d)][_0x2ac8bd(0x386)]('?')[0x0] == _0x2ac8bd(0x1d4)) {
                    _0x1148d1['GL_dataCache']['stories'] = {}, _0x1148d1['GL_dataCache'][_0x2ac8bd(0x34c)] = {};
                    let _0x75c7da = _0x1148d1[_0x2ac8bd(0x3f8)]?.[_0x2ac8bd(0x35a)](/^\/(stories|highlights)\//ig) != null;
                    _0x34c369(_0x2ac8bd(0x393), _0x75c7da), setTimeout(() => {
                        const _0x40f430 = _0x2ac8bd;
                        _0x29e80e(![], _0x75c7da);
                        const _0x5e21f8 = _0x15a917(_0x40f430(0x33c))?.['parent']()[0x0];
                        _0x5e21f8 && _0x1148d1['GL_observer'][_0x40f430(0x221)](_0x5e21f8, { 'childList': !![] });
                    }, 0x96), _0x1148d1[_0x2ac8bd(0x2b0)] = !![];
                }
                _0x15a917(_0x2ac8bd(0x1bf))['length'] && location[_0x2ac8bd(0x156)][_0x2ac8bd(0x35a)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x2ac8bd(0x156)][_0x2ac8bd(0x35a)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x34c369('isProfile'), setTimeout(() => {
                    _0x4d40e1(![]);
                }, 0x96), _0x1148d1['pageLoaded'] = !![]);
                if (!_0x1148d1[_0x2ac8bd(0x2b0)]) {
                    if (location[_0x2ac8bd(0x35d)][_0x2ac8bd(0x35a)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x1148d1[_0x2ac8bd(0x36b)][_0x2ac8bd(0x34c)] = {}, _0x34c369(_0x2ac8bd(0x29d)), _0x34b85e(![]), _0x1148d1['GL_repeat'] = setInterval(() => {
                            _0x50c365(![]);
                        }, _0x4a40c3), _0x15a917(_0x2ac8bd(0x3ea))[_0x2ac8bd(0x317)] && setTimeout(() => {
                            const _0x583e02 = _0x2ac8bd;
                            if (_0x201e99[_0x583e02(0x264)]) {
                                var _0x2cab97 = _0x15a917('div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')[_0x583e02(0x261)](function () {
                                    const _0x31c2d6 = _0x583e02;
                                    return _0x15a917(this)[_0x31c2d6(0x1f7)]()[_0x31c2d6(0x317)] === 0x0 && this[_0x31c2d6(0x20d)][_0x31c2d6(0x174)]() !== '';
                                });
                                _0x2cab97?.[_0x583e02(0x3a8)](_0x583e02(0x1ef));
                            }
                            _0x1148d1[_0x583e02(0x2b0)] = !![];
                        }, 0x96);
                    else
                        location[_0x2ac8bd(0x35d)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x34c369(_0x2ac8bd(0x1fb)), _0x15a917(_0x2ac8bd(0x17d))[_0x2ac8bd(0x317)] > 0x0 && (_0x15a917('.IG_DWSTORY')[_0x2ac8bd(0x163)](), _0x15a917(_0x2ac8bd(0x407))[_0x2ac8bd(0x163)](), _0x15a917(_0x2ac8bd(0x37d))['length'] && _0x15a917(_0x2ac8bd(0x37d))[_0x2ac8bd(0x163)](), _0xf4db05(![]), setTimeout(() => {
                            _0xf4db05(![]);
                        }, 0x96)), _0x15a917(_0x2ac8bd(0x23e))[_0x2ac8bd(0x317)] && setTimeout(() => {
                            const _0x46dd6f = _0x2ac8bd;
                            if (_0x201e99['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x5b4cd7 = _0x15a917(_0x46dd6f(0x200))[_0x46dd6f(0x261)](function () {
                                    const _0x13c71b = _0x46dd6f;
                                    return _0x15a917(this)['children']()[_0x13c71b(0x317)] === 0x0 && this['textContent'][_0x13c71b(0x174)]() !== '';
                                });
                                _0x5b4cd7?.['click']();
                            }
                            _0x1148d1['pageLoaded'] = !![];
                        }, 0x96)) : (_0x1148d1[_0x2ac8bd(0x2b0)] = ![], _0x15a917(_0x2ac8bd(0x23e))[_0x2ac8bd(0x317)] && _0x15a917(_0x2ac8bd(0x23e))[_0x2ac8bd(0x163)](), _0x15a917('.IG_DWSTORY_ALL')[_0x2ac8bd(0x317)] && _0x15a917('.IG_DWSTORY_ALL')[_0x2ac8bd(0x163)](), _0x15a917(_0x2ac8bd(0x407))[_0x2ac8bd(0x317)] && _0x15a917('.IG_DWNEWTAB')[_0x2ac8bd(0x163)](), _0x15a917(_0x2ac8bd(0x37d))[_0x2ac8bd(0x317)] && _0x15a917(_0x2ac8bd(0x37d))[_0x2ac8bd(0x163)](), _0x15a917(_0x2ac8bd(0x3ea))['length'] && _0x15a917(_0x2ac8bd(0x3ea))[_0x2ac8bd(0x163)](), _0x15a917('.IG_DWHISTORY_ALL')['length'] && _0x15a917('.IG_DWHISTORY_ALL')[_0x2ac8bd(0x163)](), _0x15a917('.IG_DWHINEWTAB')[_0x2ac8bd(0x317)] && _0x15a917('.IG_DWHINEWTAB')['remove'](), _0x15a917(_0x2ac8bd(0x2bd))[_0x2ac8bd(0x317)] && _0x15a917('.IG_DWHISTORY_THUMBNAIL')[_0x2ac8bd(0x163)]());
                }
                _0xb8d307(0x12c), _0x1148d1['GL_referrer'] = new URL(location['href'])[_0x2ac8bd(0x156)];
            }
        }, _0x4a40c3);
        async function _0x590c01() {
            const _0x601b08 = _0x5364a1;
            _0x4c07af(!![]);
            let _0x441564 = new Date()[_0x601b08(0x160)](), _0x1f7f0b = Math[_0x601b08(0x405)](_0x441564 / 0x3e8), _0x9f5c95 = location[_0x601b08(0x35d)][_0x601b08(0x36c)](/\/$/ig, '')[_0x601b08(0x386)]('/')['at'](-0x1), _0x126f82 = await _0x1049b0(_0x9f5c95), _0x356cac = _0x126f82[_0x601b08(0x239)][_0x601b08(0x34d)][0x0]['owner']['username'], _0x7d62ba = 0x0;
            _0x330eea(_0x7d62ba, _0x126f82[_0x601b08(0x239)][_0x601b08(0x34d)][0x0][_0x601b08(0x222)][_0x601b08(0x317)]), _0x126f82[_0x601b08(0x239)][_0x601b08(0x34d)][0x0]['items'][_0x601b08(0x1b3)]((_0x839f3d, _0x5af03f) => {
                setTimeout(() => {
                    const _0x265a77 = a0_0x5a53;
                    _0x201e99[_0x265a77(0x34f)] && (_0x1f7f0b = _0x839f3d['taken_at_timestamp']), _0x839f3d[_0x265a77(0x168)][_0x265a77(0x2c9)](function (_0x486a84, _0x28b60f) {
                        const _0x2c6bbc = _0x265a77;
                        if (_0x486a84[_0x2c6bbc(0x151)] < _0x28b60f['config_width'])
                            return 0x1;
                        if (_0x486a84['config_width'] > _0x28b60f[_0x2c6bbc(0x151)])
                            return -0x1;
                        return 0x0;
                    }), _0x839f3d[_0x265a77(0x2f3)] ? _0x1cc5ec(_0x839f3d[_0x265a77(0x1d7)][0x0][_0x265a77(0x260)], _0x356cac, 'stories', _0x1f7f0b, _0x265a77(0x302), _0x839f3d['id'])['then'](() => {
                        const _0xab5a9f = _0x265a77;
                        _0x330eea(++_0x7d62ba, _0x126f82[_0xab5a9f(0x239)][_0xab5a9f(0x34d)][0x0][_0xab5a9f(0x222)][_0xab5a9f(0x317)]);
                    }) : _0x1cc5ec(_0x839f3d['display_resources'][0x0][_0x265a77(0x260)], _0x356cac, 'stories', _0x1f7f0b, 'jpg', _0x839f3d['id'])[_0x265a77(0x29f)](() => {
                        const _0x541140 = _0x265a77;
                        _0x330eea(++_0x7d62ba, _0x126f82[_0x541140(0x239)][_0x541140(0x34d)][0x0][_0x541140(0x222)][_0x541140(0x317)]);
                    });
                }, 0x64 * _0x5af03f);
            });
        }
        async function _0x34b85e(_0x101bdf, _0x4cdf50) {
            const _0x5791ab = _0x5364a1;
            var _0x304706 = _0x15a917(_0x5791ab(0x3a4))['filter'](function () {
                const _0x27371e = _0x5791ab;
                return _0x15a917(this)[_0x27371e(0x32d)](_0x27371e(0x35d))[_0x27371e(0x386)]('/')[_0x27371e(0x261)](_0xd48584 => _0xd48584['length'] > 0x0)[_0x27371e(0x317)] === 0x1;
            })[_0x5791ab(0x27a)]()[_0x5791ab(0x32d)](_0x5791ab(0x35d))[_0x5791ab(0x386)]('/')['filter'](_0x5541b0 => _0x5541b0[_0x5791ab(0x317)] > 0x0)['at'](0x0);
            if (_0x101bdf) {
                let _0x1ef596 = new Date()[_0x5791ab(0x160)](), _0x556352 = Math[_0x5791ab(0x405)](_0x1ef596 / 0x3e8), _0x3d4334 = location['href'][_0x5791ab(0x36c)](/\/$/ig, '')[_0x5791ab(0x386)]('/')['at'](-0x1), _0x2aa5f4 = _0x15a917(_0x5791ab(0x340))[_0x5791ab(0x317)] || _0x15a917('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x5791ab(0x317)] || _0x15a917('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')['find']('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x5791ab(0x317)], _0x41e4cb = 0x0;
                _0x4c07af(!![]);
                if (_0x1148d1[_0x5791ab(0x36b)]['highlights'][_0x3d4334]) {
                    _0x34c369('Fetch\x20from\x20memory\x20cache:', _0x3d4334);
                    let _0x189bc3 = _0x1148d1[_0x5791ab(0x36b)]['highlights'][_0x3d4334][_0x5791ab(0x239)]['reels_media'][0x0][_0x5791ab(0x222)][_0x5791ab(0x317)];
                    _0x304706 = _0x1148d1[_0x5791ab(0x36b)][_0x5791ab(0x34c)][_0x3d4334][_0x5791ab(0x239)]['reels_media'][0x0][_0x5791ab(0x415)][_0x5791ab(0x185)], _0x41e4cb = _0x1148d1[_0x5791ab(0x36b)]['highlights'][_0x3d4334][_0x5791ab(0x239)][_0x5791ab(0x34d)][0x0][_0x5791ab(0x222)][_0x189bc3 - _0x2aa5f4];
                } else {
                    let _0x541237 = await _0x1049b0(_0x3d4334), _0x11abfe = _0x541237[_0x5791ab(0x239)]['reels_media'][0x0][_0x5791ab(0x222)][_0x5791ab(0x317)];
                    _0x304706 = _0x541237[_0x5791ab(0x239)][_0x5791ab(0x34d)][0x0][_0x5791ab(0x415)][_0x5791ab(0x185)], _0x41e4cb = _0x541237[_0x5791ab(0x239)]['reels_media'][0x0]['items'][_0x11abfe - _0x2aa5f4], _0x1148d1['GL_dataCache'][_0x5791ab(0x34c)][_0x3d4334] = _0x541237;
                }
                _0x34c369(_0x5791ab(0x3fa), _0x3d4334, _0x1148d1[_0x5791ab(0x36b)]['highlights'][_0x3d4334]);
                _0x201e99['RENAME_PUBLISH_DATE'] && (_0x556352 = _0x41e4cb[_0x5791ab(0x212)]);
                if (_0x201e99[_0x5791ab(0x1b2)] && !_0x1148d1['tempFetchRateLimit']) {
                    let _0x46730f = await _0x542021(_0x41e4cb['id']);
                    _0x46730f['status'] === 'ok' ? _0x46730f['items'][0x0]['video_versions'] ? _0x4cdf50 ? _0x2a3047(_0x46730f[_0x5791ab(0x222)][0x0][_0x5791ab(0x35c)][0x0][_0x5791ab(0x1c5)]) : _0x1cc5ec(_0x46730f['items'][0x0]['video_versions'][0x0][_0x5791ab(0x1c5)], _0x304706, _0x5791ab(0x34c), _0x556352, _0x5791ab(0x302), _0x46730f[_0x5791ab(0x222)][0x0]['id']) : _0x4cdf50 ? _0x2a3047(_0x46730f[_0x5791ab(0x222)][0x0][_0x5791ab(0x1ad)][_0x5791ab(0x3f2)][0x0][_0x5791ab(0x1c5)]) : _0x1cc5ec(_0x46730f[_0x5791ab(0x222)][0x0][_0x5791ab(0x1ad)][_0x5791ab(0x3f2)][0x0]['url'], _0x304706, _0x5791ab(0x34c), _0x556352, _0x5791ab(0x191), _0x46730f[_0x5791ab(0x222)][0x0]['id']) : (_0x201e99[_0x5791ab(0x290)] ? (delete _0x1148d1['GL_dataCache'][_0x5791ab(0x34c)][_0x3d4334], _0x1148d1[_0x5791ab(0x360)] = !![], _0x34b85e(!![], _0x4cdf50)) : alert(_0x5791ab(0x15c) + _0x46730f[_0x5791ab(0x1ae)]), _0x34c369(_0x46730f));
                } else
                    _0x41e4cb[_0x5791ab(0x2f3)] ? _0x4cdf50 ? _0x2a3047(_0x41e4cb['video_resources']['at'](-0x1)['src'], _0x304706) : _0x1cc5ec(_0x41e4cb[_0x5791ab(0x1d7)]['at'](-0x1)[_0x5791ab(0x260)], _0x304706, _0x5791ab(0x34c), _0x556352, _0x5791ab(0x302), _0x41e4cb['id']) : _0x4cdf50 ? _0x2a3047(_0x41e4cb['display_resources']['at'](-0x1)[_0x5791ab(0x260)], _0x304706) : _0x1cc5ec(_0x41e4cb[_0x5791ab(0x168)]['at'](-0x1)[_0x5791ab(0x260)], _0x304706, 'highlights', _0x556352, 'jpg', _0x41e4cb['id']), _0x1148d1[_0x5791ab(0x360)] = ![];
                _0x4c07af(![]);
            } else {
                if (!_0x15a917(_0x5791ab(0x3ea))[_0x5791ab(0x317)]) {
                    let _0x32295f = null;
                    _0x15a917('body\x20>\x20div\x20section._ac0a')[_0x5791ab(0x317)] > 0x0 ? _0x32295f = _0x15a917(_0x5791ab(0x309)) : (_0x32295f = _0x15a917(_0x5791ab(0x267)), _0x32295f[_0x5791ab(0x334)](_0x5791ab(0x3cd), _0x5791ab(0x2b6)));
                    if (_0x32295f['length'] === 0x0) {
                        let _0x441231 = _0x15a917('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x40385c = 0x0;
                        _0x441231[_0x5791ab(0x256)](function () {
                            const _0x1a8760 = _0x5791ab;
                            _0x15a917(this)[_0x1a8760(0x3d9)]() > _0x40385c && (_0x40385c = _0x15a917(this)[_0x1a8760(0x3d9)](), _0x32295f = _0x15a917(this)[_0x1a8760(0x1f7)](_0x1a8760(0x3d5))[_0x1a8760(0x27a)]());
                        });
                    }
                    if (_0x32295f != null) {
                        _0x32295f[_0x5791ab(0x1be)](_0x5791ab(0x3c8) + _0x101960('DW') + _0x5791ab(0x2ed) + _0xc64512[_0x5791ab(0x1a9)] + '</div>'), _0x32295f[_0x5791ab(0x1be)](_0x5791ab(0x39c) + _0x101960('NEW_TAB') + _0x5791ab(0x1e3) + _0xc64512['NEW_TAB'] + _0x5791ab(0x1fe));
                        let _0xfd6274 = _0x3a48b5(_0x304706);
                        _0xfd6274['length'] > 0x1 && _0x32295f[_0x5791ab(0x1be)]('<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x101960(_0x5791ab(0x284)) + _0x5791ab(0x1c4) + _0xc64512['DOWNLOAD_ALL'] + '</div>');
                        let _0x2a1915 = _0xfd6274[_0x5791ab(0x1e1)]('div[class]')[_0x5791ab(0x262)](_0x5791ab(0x40f))?.[_0x5791ab(0x32d)](_0x5791ab(0x179));
                        _0x2a1915 != null && _0xfd6274[_0x5791ab(0x1e1)]('div[class]')['find'](_0x5791ab(0x40f))['text'](_0x2a1915), _0x32295f[_0x5791ab(0x262)](_0x5791ab(0x321))[_0x5791ab(0x256)](function () {
                            _0x15a917(this)['on']('load', function () {
                                const _0x1a49ba = a0_0x5a53;
                                !_0x15a917(this)['data'](_0x1a49ba(0x3b4)) && (_0x32295f[_0x1a49ba(0x262)]('.IG_DWHISTORY_THUMBNAIL')['length'] === 0x0 ? (_0x15a917(this)['attr']('data-remove-thumbnail', !![]), _0x15a917(_0x1a49ba(0x2bd))[_0x1a49ba(0x163)](), _0x34c369(_0x1a49ba(0x2c3))) : (_0x15a917(this)[_0x1a49ba(0x32d)]('data-remove-thumbnail', !![]), _0x34c369(_0x1a49ba(0x18d))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x50c365(_0x3a3bdd) {
            const _0x4c5a3a = _0x5364a1;
            if (_0x3a3bdd) {
                let _0x5b3f7c = new Date()[_0x4c5a3a(0x160)](), _0x285df3 = Math[_0x4c5a3a(0x405)](_0x5b3f7c / 0x3e8), _0x1680f6 = location['href'][_0x4c5a3a(0x36c)](/\/$/ig, '')[_0x4c5a3a(0x386)]('/')['at'](-0x1), _0x5ce9ff = '', _0x581c47 = _0x15a917(_0x4c5a3a(0x340))['length'] || _0x15a917(_0x4c5a3a(0x3e3))[_0x4c5a3a(0x317)] || _0x15a917(_0x4c5a3a(0x39e))[_0x4c5a3a(0x262)](_0x4c5a3a(0x33a))[_0x4c5a3a(0x317)], _0x41a5b9 = '';
                _0x4c07af(!![]);
                if (_0x1148d1['GL_dataCache']['highlights'][_0x1680f6]) {
                    _0x34c369(_0x4c5a3a(0x3a3), _0x1680f6);
                    let _0x1315bf = _0x1148d1['GL_dataCache'][_0x4c5a3a(0x34c)][_0x1680f6][_0x4c5a3a(0x239)][_0x4c5a3a(0x34d)][0x0][_0x4c5a3a(0x222)][_0x4c5a3a(0x317)];
                    _0x5ce9ff = _0x1148d1[_0x4c5a3a(0x36b)][_0x4c5a3a(0x34c)][_0x1680f6][_0x4c5a3a(0x239)][_0x4c5a3a(0x34d)][0x0][_0x4c5a3a(0x415)]['username'], _0x41a5b9 = _0x1148d1['GL_dataCache'][_0x4c5a3a(0x34c)][_0x1680f6][_0x4c5a3a(0x239)]['reels_media'][0x0][_0x4c5a3a(0x222)][_0x1315bf - _0x581c47];
                } else {
                    let _0x415f00 = await _0x1049b0(_0x1680f6), _0x5202d8 = _0x415f00[_0x4c5a3a(0x239)]['reels_media'][0x0][_0x4c5a3a(0x222)][_0x4c5a3a(0x317)];
                    _0x5ce9ff = _0x415f00[_0x4c5a3a(0x239)][_0x4c5a3a(0x34d)][0x0][_0x4c5a3a(0x415)]['username'], _0x41a5b9 = _0x415f00['data']['reels_media'][0x0][_0x4c5a3a(0x222)][_0x5202d8 - _0x581c47], _0x1148d1['GL_dataCache'][_0x4c5a3a(0x34c)][_0x1680f6] = _0x415f00;
                }
                _0x201e99[_0x4c5a3a(0x34f)] && (_0x285df3 = _0x41a5b9['taken_at_timestamp']);
                if (_0x201e99['FORCE_RESOURCE_VIA_MEDIA'] && !_0x1148d1[_0x4c5a3a(0x360)]) {
                    let _0x4852c5 = await _0x542021(_0x41a5b9['id']);
                    _0x4852c5[_0x4c5a3a(0x21e)] === 'ok' ? _0x1cc5ec(_0x4852c5[_0x4c5a3a(0x222)][0x0][_0x4c5a3a(0x1ad)][_0x4c5a3a(0x3f2)][0x0]['url'], _0x5ce9ff, _0x4c5a3a(0x34c), _0x285df3, 'jpg', _0x1680f6) : (_0x201e99[_0x4c5a3a(0x290)] ? (delete _0x1148d1[_0x4c5a3a(0x36b)][_0x4c5a3a(0x34c)][_0x1680f6], _0x1148d1[_0x4c5a3a(0x360)] = !![], _0x50c365(!![])) : alert(_0x4c5a3a(0x15c) + _0x4852c5[_0x4c5a3a(0x1ae)]), _0x34c369(_0x4852c5));
                } else
                    _0x1cc5ec(_0x41a5b9[_0x4c5a3a(0x168)]['at'](-0x1)[_0x4c5a3a(0x260)], _0x5ce9ff, _0x4c5a3a(0x34c), _0x285df3, _0x4c5a3a(0x191), _0x1680f6), _0x1148d1[_0x4c5a3a(0x360)] = ![];
                _0x4c07af(![]);
            } else {
                if (_0x15a917(_0x4c5a3a(0x19d))[_0x4c5a3a(0x317)]) {
                    if (!_0x15a917(_0x4c5a3a(0x2bd))[_0x4c5a3a(0x317)]) {
                        let _0x47771d = null;
                        _0x15a917('body\x20>\x20div\x20section._ac0a')[_0x4c5a3a(0x317)] > 0x0 ? _0x47771d = _0x15a917('body\x20>\x20div\x20section:visible._ac0a') : (_0x47771d = _0x15a917('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x47771d[_0x4c5a3a(0x334)]('position', _0x4c5a3a(0x2b6)));
                        if (_0x47771d[_0x4c5a3a(0x317)] === 0x0) {
                            let _0xbebd71 = _0x15a917(_0x4c5a3a(0x19a)), _0x3c482f = 0x0;
                            _0xbebd71[_0x4c5a3a(0x256)](function () {
                                const _0x35c1a8 = _0x4c5a3a;
                                _0x15a917(this)[_0x35c1a8(0x3d9)]() > _0x3c482f && (_0x3c482f = _0x15a917(this)['width'](), _0x47771d = _0x15a917(this)[_0x35c1a8(0x1f7)]('div')['first']());
                            });
                        }
                        _0x47771d != null && _0x47771d['append'](_0x4c5a3a(0x1e8) + _0x101960(_0x4c5a3a(0x1de)) + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0xc64512[_0x4c5a3a(0x336)] + _0x4c5a3a(0x1fe));
                    }
                } else
                    _0x15a917('.IG_DWHISTORY_THUMBNAIL')[_0x4c5a3a(0x163)]();
            }
        }
        function _0x29e80e(_0x2aff8d, _0x5cb805) {
            const _0x1fff6e = _0x5364a1;
            _0x5cb805 === !![] && (_0x34c369(_0x1fff6e(0x2b7), _0x1fff6e(0x3aa)), _0x15a917(_0x1fff6e(0x31d))['filter'](function () {
                const _0x1a9e58 = _0x1fff6e;
                return _0x15a917(this)['find']('.IG_DW_MAIN')[_0x1a9e58(0x317)] === 0x0;
            })[_0x1fff6e(0x15a)](_0x1fff6e(0x202)));
            if (_0x2aff8d == ![]) {
                const _0x2cf7c6 = 0x64;
                let _0x31d04d = 0x0;
                var _0x59b3ab = setInterval(() => {
                    const _0x1eb647 = _0x1fff6e;
                    (_0x31d04d > _0x2cf7c6 || _0x15a917('article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]')['length'] > 0x0) && (clearInterval(_0x59b3ab), _0x31d04d > _0x2cf7c6 && console[_0x1eb647(0x2fe)](_0x1eb647(0x277), _0x1eb647(0x236))), _0x34c369('onReadyMyDW()\x20Timer', 'repeating\x20to\x20call\x20detection\x20createDownloadButton()'), _0x2e2477(), _0x31d04d++;
                }, 0x32);
            } else
                _0x2e2477();
        }
        function _0x3faaf7(_0x1930f3) {
            const _0x42be0e = _0x5364a1;
            _0x201e99[_0x42be0e(0x3c3)] && _0x1930f3[_0x42be0e(0x262)]('video')[_0x42be0e(0x256)](function () {
                const _0x3adc82 = _0x42be0e;
                _0x15a917(this)['on'](_0x3adc82(0x3e0), function () {
                    const _0x4867f3 = _0x3adc82;
                    !_0x15a917(this)['data'](_0x4867f3(0x30a)) && (_0x15a917(this)[_0x4867f3(0x32d)](_0x4867f3(0x377), !![]), this[_0x4867f3(0x196)](), _0x34c369('(post)\x20Added\x20video\x20event\x20listener\x20#loop'));
                });
            });
            _0x201e99[_0x42be0e(0x190)] && _0x1930f3[_0x42be0e(0x262)](_0x42be0e(0x3c2))[_0x42be0e(0x256)](function () {
                const _0x4632ba = _0x42be0e;
                _0x15a917(this)['on'](_0x4632ba(0x16d), function () {
                    const _0x4276fb = _0x4632ba;
                    !_0x15a917(this)[_0x4276fb(0x239)](_0x4276fb(0x3ae)) && (_0x15a917(this)[_0x4276fb(0x32d)](_0x4276fb(0x366), !![]), this[_0x4276fb(0x30c)] = _0x1148d1['videoVolume'], _0x34c369(_0x4276fb(0x234)));
                });
            });
            _0x201e99[_0x42be0e(0x169)] && _0x1930f3[_0x42be0e(0x262)]('video')[_0x42be0e(0x256)](function () {
                const _0x1da190 = _0x42be0e;
                if (!_0x15a917(this)[_0x1da190(0x239)](_0x1da190(0x218))) {
                    let _0x20d225 = _0x15a917(this);
                    _0x34c369('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x201e99[_0x1da190(0x190)] && (this[_0x1da190(0x30c)] = _0x1148d1[_0x1da190(0x29e)], _0x15a917(this)['on'](_0x1da190(0x411), function () {
                        const _0x1baf33 = _0x1da190;
                        this['volume'] = _0x1148d1[_0x1baf33(0x29e)];
                    })), _0x15a917(this)['on'](_0x1da190(0x3f0), function (_0x5efb97) {
                        const _0x3ff49d = _0x1da190;
                        _0x5efb97[_0x3ff49d(0x301)](), _0x20d225[_0x3ff49d(0x334)]('z-index', '-1'), _0x20d225[_0x3ff49d(0x15a)](_0x3ff49d(0x218));
                    }), _0x15a917(this)[_0x1da190(0x32a)]()[_0x1da190(0x262)]('video\x20+\x20div\x20>\x20div')['first']()['on'](_0x1da190(0x3f0), function (_0x130140) {
                        const _0x39dfc9 = _0x1da190;
                        _0x130140[_0x39dfc9(0x301)](), _0x20d225['css'](_0x39dfc9(0x3db), '2'), _0x20d225[_0x39dfc9(0x32d)](_0x39dfc9(0x218), !![]);
                    }), _0x15a917(this)['on'](_0x1da190(0x306), function () {
                        const _0x34a25d = _0x1da190;
                        let _0x9d2247 = _0x15a917(this)[_0x34a25d(0x32a)]()[_0x34a25d(0x262)](_0x34a25d(0x1b7))[_0x34a25d(0x262)](_0x34a25d(0x2de))[_0x34a25d(0x261)](function (_0x41d117) {
                            const _0x255b6c = _0x34a25d;
                            return _0x15a917(this)[_0x255b6c(0x3d9)]() <= 0x40 && _0x15a917(this)[_0x255b6c(0x186)]() <= 0x40 && _0x15a917(this)[_0x255b6c(0x262)](_0x255b6c(0x3a9))[_0x255b6c(0x317)] > 0x0;
                        });
                        var _0x15db16 = _0x9d2247[_0x34a25d(0x262)](_0x34a25d(0x1a3))[_0x34a25d(0x317)] === 0x0;
                        this[_0x34a25d(0x2ad)] != _0x15db16 && (this[_0x34a25d(0x30c)] = _0x1148d1[_0x34a25d(0x29e)], _0x9d2247?.[_0x34a25d(0x3a8)](_0x34a25d(0x1ef))), _0x15a917(this)[_0x34a25d(0x32d)]('data-completed') && (_0x1148d1[_0x34a25d(0x29e)] = this[_0x34a25d(0x30c)], GM_setValue('G_VIDEO_VOLUME', this[_0x34a25d(0x30c)])), this[_0x34a25d(0x30c)] == _0x1148d1[_0x34a25d(0x29e)] && _0x15a917(this)[_0x34a25d(0x32d)](_0x34a25d(0x28c), !![]);
                    }), _0x15a917(this)[_0x1da190(0x334)](_0x1da190(0x3cd), _0x1da190(0x2b5)), _0x15a917(this)['css'](_0x1da190(0x3db), '2'), _0x15a917(this)['attr']('data-controls', !![]), _0x15a917(this)[_0x1da190(0x32d)](_0x1da190(0x218), !![]);
                }
            });
            var _0x5c35d7 = _0x1930f3[_0x42be0e(0x262)](_0x42be0e(0x3c2)), _0x38b41d = _0x1930f3[_0x42be0e(0x262)]('video\x20+\x20div\x20>\x20div')['first']();
            _0x32b878(_0x5c35d7, _0x38b41d, _0x42be0e(0x308), _0x42be0e(0x25f));
        }
        ;
        function _0x2e2477() {
            const _0x289f43 = _0x5364a1;
            _0x15a917('article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr')['map'](function (_0x24fe09) {
                const _0x311ff5 = a0_0x5a53;
                return _0x15a917(this)['is'](_0x311ff5(0x14e)) ? _0x15a917(this)[_0x311ff5(0x32a)]()['parent']()[_0x311ff5(0x32a)]()[_0x311ff5(0x32a)]()[0x0] : this;
            })[_0x289f43(0x261)](function () {
                const _0x1682c8 = _0x289f43;
                return _0x15a917(this)[_0x1682c8(0x186)]() > 0x0 && _0x15a917(this)[_0x1682c8(0x3d9)]() > 0x0;
            })[_0x289f43(0x256)](function (_0xb6e546) {
                const _0x38fb99 = _0x289f43;
                if (!_0x15a917(this)[_0x38fb99(0x32d)](_0x38fb99(0x202)) && !_0x15a917(this)[_0x38fb99(0x16e)](_0x38fb99(0x401)) && !_0x15a917(this)[_0x38fb99(0x1f7)](_0x38fb99(0x18e))?.['hasClass'](_0x38fb99(0x401)) && _0x15a917(this)[_0x38fb99(0x1e1)](_0x38fb99(0x1e6))['length'] === 0x0) {
                    _0x34c369('Found\x20post\x20container', _0x15a917(this));
                    const _0x3de841 = _0x15a917(this), _0x1cfd03 = this[_0x38fb99(0x14d)], _0x7e98f0 = _0x38fb99(0x1e7);
                    var _0xb1b653;
                    if (_0x1cfd03 === _0x38fb99(0x170) && _0xb6e546 != 0x0)
                        return;
                    const _0xa90376 = _0x3de841[_0x38fb99(0x1f7)]('div')[_0x38fb99(0x1f7)]('div');
                    if (_0xa90376[_0x38fb99(0x317)] === 0x0)
                        return;
                    _0x34c369(_0x38fb99(0x3d6), _0xa90376);
                    if (_0x3de841[_0x38fb99(0x262)]('._acay')[_0x38fb99(0x317)] > 0x0) {
                        _0x3de841['find'](_0x38fb99(0x345))[_0x38fb99(0x317)] > 0x0 && _0x3de841[_0x38fb99(0x262)](_0x38fb99(0x345))['css'](_0x38fb99(0x21d), _0x38fb99(0x3af));
                        const _0x4253f9 = _0x3de841[_0x38fb99(0x262)](_0x38fb99(0x313))[_0x38fb99(0x27a)]()['parent']()[0x0];
                        var _0x253f41 = new MutationObserver(function () {
                            const _0x51ba36 = _0x38fb99;
                            _0x3de841[_0x51ba36(0x262)]('._acay\x20+\x20.x24i39r')[_0x51ba36(0x334)]('top', _0x51ba36(0x3af));
                        });
                        _0x253f41[_0x38fb99(0x221)](_0x4253f9, { 'childList': !![] });
                    }
                    _0xa90376['eq'](_0x1cfd03 === 'DIV' ? 0x0 : _0xa90376[_0x38fb99(0x317)] - 0x2)[_0x38fb99(0x1be)](_0x38fb99(0x206));
                    const _0x21cca3 = '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x101960('DW') + _0x38fb99(0x2e1) + _0xc64512['DOWNLOAD'] + _0x38fb99(0x1fe), _0x3a20e1 = _0x38fb99(0x39c) + _0x101960(_0x38fb99(0x208)) + _0x38fb99(0x29b) + _0xc64512['NEW_TAB'] + _0x38fb99(0x1fe), _0x190155 = _0x38fb99(0x1e8) + _0x101960(_0x38fb99(0x1de)) + _0x38fb99(0x372) + _0xc64512[_0x38fb99(0x336)] + _0x38fb99(0x1fe), _0x1afc0d = '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22' + _0x101960('IMAGE_VIEWER') + _0x38fb99(0x271) + _0xc64512[_0x38fb99(0x167)] + _0x38fb99(0x1fe);
                    _0xa90376['find'](_0x38fb99(0x18c))[_0x38fb99(0x1be)](_0x21cca3);
                    const _0x14930d = _0x3de841[_0x38fb99(0x262)](_0x7e98f0)[_0x38fb99(0x317)];
                    if (_0x14930d > 0x1 && _0x201e99[_0x38fb99(0x3ef)] && !_0x201e99['DIRECT_DOWNLOAD_ALL']) {
                        const _0x4a4332 = _0x38fb99(0x1f8) + _0x101960(_0x38fb99(0x284)) + _0x38fb99(0x265) + _0xc64512[_0x38fb99(0x403)] + _0x38fb99(0x1fe);
                        _0xa90376[_0x38fb99(0x262)](_0x38fb99(0x18c))[_0x38fb99(0x1be)](_0x4a4332);
                    }
                    _0xa90376[_0x38fb99(0x262)](_0x38fb99(0x18c))['append'](_0x3a20e1), setTimeout(() => {
                        const _0x212105 = _0x38fb99;
                        if (_0xa90376['eq'](_0x1cfd03 === _0x212105(0x170) ? 0x0 : _0xa90376[_0x212105(0x317)] - 0x2)[_0x212105(0x262)](_0x212105(0x38d))[_0x212105(0x317)] === 0x0)
                            _0xa90376[_0x212105(0x262)](_0x212105(0x3c2))[_0x212105(0x317)] > 0x0 ? _0xa90376[_0x212105(0x262)](_0x212105(0x18c))[_0x212105(0x1be)](_0x190155) : (_0xb1b653 = _0x3de841[_0x212105(0x262)](_0x212105(0x328))[_0x212105(0x261)](function () {
                                return _0x15a917(this)['width']() > 0xc8 && _0x15a917(this)['height']() > 0xc8;
                            })[_0x212105(0x32d)](_0x212105(0x260)), _0xa90376[_0x212105(0x262)](_0x212105(0x18c))['append'](_0x1afc0d));
                        else {
                            const _0x47f220 = (_0x23c2bd, _0x1d86cc) => {
                                    const _0x2e7c4d = _0x212105;
                                    _0x23c2bd[_0x2e7c4d(0x1b3)](_0x287437 => {
                                        const _0x1f1a94 = _0x2e7c4d;
                                        if (_0x287437['isIntersecting']) {
                                            var _0x4db6b6 = _0x15a917(_0x287437[_0x1f1a94(0x280)]);
                                            _0xa90376[_0x1f1a94(0x262)]('.IG_THUMBNAIL_MAIN')?.[_0x1f1a94(0x163)](), _0xa90376[_0x1f1a94(0x262)](_0x1f1a94(0x1d6))?.[_0x1f1a94(0x163)](), _0x4db6b6[_0x1f1a94(0x262)](_0x1f1a94(0x3c2))['length'] > 0x0 ? (_0xa90376[_0x1f1a94(0x262)](_0x1f1a94(0x20b))[_0x1f1a94(0x317)] === 0x0 && _0xa90376[_0x1f1a94(0x262)](_0x1f1a94(0x18c))[_0x1f1a94(0x1be)](_0x190155), _0x3faaf7(_0x3de841)) : (_0xb1b653 = _0x4db6b6[_0x1f1a94(0x262)](_0x1f1a94(0x328))[_0x1f1a94(0x32d)](_0x1f1a94(0x260)), _0xa90376[_0x1f1a94(0x262)]('.button_wrapper')[_0x1f1a94(0x1be)](_0x1afc0d));
                                        }
                                    });
                                }, _0x55023e = new IntersectionObserver(_0x47f220, {
                                    'root': _0x3de841['find'](_0x212105(0x3a2))[_0x212105(0x27a)]()[_0x212105(0x32a)]()['parent']()['parent']()[0x0],
                                    'rootMargin': '0px',
                                    'threshold': 0.1
                                }), _0x53b64d = new MutationObserver(function (_0x503cc3, _0x4226ec) {
                                    const _0x2377a8 = _0x212105;
                                    var _0x232184 = _0x503cc3['at'](0x0)?.[_0x2377a8(0x280)];
                                    _0x15a917(_0x232184)[_0x2377a8(0x262)](_0x2377a8(0x285))[_0x2377a8(0x256)](function () {
                                        _0x55023e['observe'](this);
                                    });
                                });
                            _0x3de841[_0x212105(0x262)](_0x212105(0x38d))[_0x212105(0x256)](function () {
                                _0x55023e['observe'](this);
                            });
                            const _0x5dfc5d = _0xa90376['eq'](_0x1cfd03 === _0x212105(0x170) ? 0x0 : _0xa90376['length'] - 0x2)['find'](_0x212105(0x38d))?.['parent']()[0x0], _0x3f2241 = _0xa90376['eq'](_0x1cfd03 === _0x212105(0x170) ? 0x0 : _0xa90376[_0x212105(0x317)] - 0x2)[_0x212105(0x262)](_0x212105(0x38d))?.[_0x212105(0x32a)]()['parent']()[0x0];
                            _0x5dfc5d && _0x53b64d['observe'](_0x5dfc5d, { 'childList': !![] }), _0x3f2241 && _0x53b64d[_0x212105(0x221)](_0x3f2241, { 'attributes': !![] });
                        }
                    }, 0x32), _0xa90376[_0x38fb99(0x334)](_0x38fb99(0x3cd), _0x38fb99(0x2b6)), _0x3faaf7(_0x3de841), _0x1148d1['GL_registerEventList'][_0x38fb99(0x2d3)]({
                        'element': this,
                        'trigger': [
                            _0x38fb99(0x20b),
                            '.IG_NEWTAB_MAIN',
                            _0x38fb99(0x164),
                            _0x38fb99(0x379),
                            _0x38fb99(0x1d6)
                        ]
                    }), _0x15a917(this)['on'](_0x38fb99(0x1ef), _0x38fb99(0x1d6), function () {
                        const _0x1ded9e = _0x38fb99;
                        _0xb1b653 != null ? _0x15f723(_0xb1b653) : alert(_0x1ded9e(0x27c));
                    }), _0x15a917(this)['on'](_0x38fb99(0x1ef), _0x38fb99(0x20b), function () {
                        const _0x24cc61 = _0x38fb99;
                        _0x4c07af(!![]), _0x1148d1[_0x24cc61(0x286)] = _0x3de841[_0x24cc61(0x32d)](_0x24cc61(0x3b0)), _0x1148d1[_0x24cc61(0x3dd)] = location[_0x24cc61(0x156)][_0x24cc61(0x36c)](/\/$/, '')[_0x24cc61(0x386)]('/')['at'](-0x1) || _0x3de841[_0x24cc61(0x262)](_0x24cc61(0x2b3))[_0x24cc61(0x27a)]()[_0x24cc61(0x32d)](_0x24cc61(0x35d))['split']('/')['at'](0x2) || _0x15a917(this)[_0x24cc61(0x32a)]()[_0x24cc61(0x32a)]()['parent']()['children'](_0x24cc61(0x300))[_0x24cc61(0x1f7)]('div')[_0x24cc61(0x1f7)]('div:last-child')[_0x24cc61(0x262)](_0x24cc61(0x2b3))[_0x24cc61(0x2c6)]()[_0x24cc61(0x32d)](_0x24cc61(0x35d))[_0x24cc61(0x386)]('/')['at'](0x2);
                        var _0x292086 = _0x434d79(_0x3de841);
                        _0x3fae0f(!![], ![]), _0x5d00da(_0x1148d1[_0x24cc61(0x3dd)], _0x24cc61(0x275), '')[_0x24cc61(0x29f)](() => {
                            let _0xf1f475 = setInterval(() => {
                                const _0x2c7d3b = a0_0x5a53;
                                if (_0x15a917(_0x2c7d3b(0x2e2))[_0x2c7d3b(0x317)] > 0x0) {
                                    clearInterval(_0xf1f475);
                                    var _0x2e5587 = _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x292086 + 0x1) + '\x22]')?.['parent']()[_0x2c7d3b(0x262)](_0x2c7d3b(0x2e0))?.['first']();
                                    _0x2e5587 != null && _0x2e5587['length'] > 0x0 ? _0x2e5587['trigger'](_0x2c7d3b(0x1ef)) : alert(_0x2c7d3b(0x201)), _0x4c07af(![]), _0x15a917(_0x2c7d3b(0x2ee))[_0x2c7d3b(0x163)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x15a917(this)['on'](_0x38fb99(0x1ef), _0x38fb99(0x2ff), function () {
                        const _0x950d82 = _0x38fb99;
                        _0x4c07af(!![]), _0x1148d1[_0x950d82(0x286)] = _0x3de841[_0x950d82(0x32d)](_0x950d82(0x3b0)), _0x1148d1[_0x950d82(0x3dd)] = location[_0x950d82(0x156)]['replace'](/\/$/, '')['split']('/')['at'](-0x1) || _0x3de841[_0x950d82(0x262)]('a[href^=\x22/p/\x22]')[_0x950d82(0x27a)]()['attr'](_0x950d82(0x35d))['split']('/')['at'](0x2) || _0x15a917(this)[_0x950d82(0x32a)]()[_0x950d82(0x32a)]()[_0x950d82(0x32a)]()[_0x950d82(0x1f7)](_0x950d82(0x300))[_0x950d82(0x1f7)](_0x950d82(0x3d5))[_0x950d82(0x1f7)](_0x950d82(0x300))['find'](_0x950d82(0x2b3))[_0x950d82(0x2c6)]()[_0x950d82(0x32d)]('href')[_0x950d82(0x386)]('/')['at'](0x2);
                        var _0x474636 = _0x434d79(_0x3de841);
                        _0x3fae0f(!![], ![]), _0x5d00da(_0x1148d1['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x950d82(0x29f)](() => {
                            let _0x289573 = setInterval(() => {
                                const _0xe77802 = a0_0x5a53;
                                if (_0x15a917(_0xe77802(0x2e2))[_0xe77802(0x317)] > 0x0) {
                                    clearInterval(_0x289573);
                                    var _0x1d7ea = _0x15a917(_0xe77802(0x2f6) + (_0x474636 + 0x1) + '\x22]');
                                    if (_0x201e99[_0xe77802(0x1b2)] && _0x201e99[_0xe77802(0x3f1)])
                                        _0x3d94b9(_0x1d7ea[_0xe77802(0x27a)]()[0x0], !![]);
                                    else {
                                        let _0x248619 = _0x1d7ea?.['attr'](_0xe77802(0x364));
                                        if (_0x248619) {
                                            var _0x174c5c = new URL(_0x248619);
                                            _0x174c5c['host'] = 'scontent.cdninstagram.com', _0x2a3047(_0x174c5c[_0xe77802(0x35d)]);
                                        } else
                                            alert(_0xe77802(0x19b));
                                    }
                                    _0x4c07af(![]), _0x15a917(_0xe77802(0x2ee))[_0xe77802(0x163)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x15a917(this)['on']('click', _0x38fb99(0x164), async function () {
                        const _0x56e947 = _0x38fb99;
                        _0x1148d1[_0x56e947(0x286)] = _0x3de841['attr'](_0x56e947(0x3b0)), _0x1148d1[_0x56e947(0x3dd)] = location[_0x56e947(0x156)][_0x56e947(0x36c)](/\/$/, '')[_0x56e947(0x386)]('/')['at'](-0x1) || _0x3de841[_0x56e947(0x262)](_0x56e947(0x2b3))['first']()[_0x56e947(0x32d)](_0x56e947(0x35d))[_0x56e947(0x386)]('/')['at'](0x2) || _0x15a917(this)[_0x56e947(0x32a)]()[_0x56e947(0x32a)]()['parent']()[_0x56e947(0x1f7)](_0x56e947(0x300))['children'](_0x56e947(0x3d5))['children'](_0x56e947(0x300))['find'](_0x56e947(0x2b3))[_0x56e947(0x2c6)]()[_0x56e947(0x32d)](_0x56e947(0x35d))[_0x56e947(0x386)]('/')['at'](0x2), _0x3fae0f(_0x201e99[_0x56e947(0x181)], !![]), _0x15a917('#article-id')[_0x56e947(0x409)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x1148d1[_0x56e947(0x3dd)] + '\x22>' + _0x1148d1[_0x56e947(0x3dd)] + _0x56e947(0x307)), _0x15a917(_0x56e947(0x2e2))[_0x56e947(0x256)](function () {
                            const _0x432a81 = _0x56e947;
                            _0x15a917(this)[_0x432a81(0x353)](_0x432a81(0x3fe)), _0x15a917(this)[_0x432a81(0x33b)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x15a917(this)[_0x432a81(0x38e)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x101960(_0x432a81(0x208)) + _0x432a81(0x3f3) + _0xc64512[_0x432a81(0x208)] + _0x432a81(0x1fe)), _0x15a917(this)[_0x432a81(0x32d)](_0x432a81(0x28b)) == 'video' && _0x15a917(this)[_0x432a81(0x38e)](_0x432a81(0x1e8) + _0x101960(_0x432a81(0x1de)) + _0x432a81(0x3b7) + _0xc64512['THUMBNAIL'] + '</div>');
                        }), _0x5d00da(_0x1148d1['GL_postPath'], _0x56e947(0x275), _0x101960(_0x56e947(0x14f)))[_0x56e947(0x29f)](() => {
                            let _0x4378a7 = setInterval(() => {
                                const _0x1facbf = a0_0x5a53;
                                _0x15a917(_0x1facbf(0x2e2))[_0x1facbf(0x317)] > 0x0 && (clearInterval(_0x4378a7), _0x15a917(_0x1facbf(0x2e2))[_0x1facbf(0x256)](function () {
                                    const _0x4e889b = _0x1facbf;
                                    _0x15a917(this)['trigger'](_0x4e889b(0x1ef));
                                }), _0x15a917(_0x1facbf(0x2ee))[_0x1facbf(0x163)]());
                            }, 0xfa);
                        });
                    }), _0x15a917(this)['on'](_0x38fb99(0x1ef), _0x38fb99(0x379), async function () {
                        const _0x2a680c = _0x38fb99;
                        _0x1148d1['GL_username'] = _0x3de841[_0x2a680c(0x32d)](_0x2a680c(0x3b0)), _0x1148d1[_0x2a680c(0x3dd)] = location['pathname']['replace'](/\/$/, '')['split']('/')['at'](-0x1) || _0x3de841['find'](_0x2a680c(0x2b3))[_0x2a680c(0x27a)]()[_0x2a680c(0x32d)](_0x2a680c(0x35d))['split']('/')['at'](0x2) || _0x15a917(this)[_0x2a680c(0x32a)]()[_0x2a680c(0x32a)]()[_0x2a680c(0x32a)]()[_0x2a680c(0x1f7)](_0x2a680c(0x300))[_0x2a680c(0x1f7)](_0x2a680c(0x3d5))[_0x2a680c(0x1f7)](_0x2a680c(0x300))[_0x2a680c(0x262)](_0x2a680c(0x2b3))[_0x2a680c(0x2c6)]()[_0x2a680c(0x32d)](_0x2a680c(0x35d))[_0x2a680c(0x386)]('/')['at'](0x2), _0x3fae0f(_0x201e99['DIRECT_DOWNLOAD_ALL'], !![]), _0x15a917('#article-id')[_0x2a680c(0x409)](_0x2a680c(0x32f) + _0x1148d1[_0x2a680c(0x3dd)] + '\x22>' + _0x1148d1[_0x2a680c(0x3dd)] + _0x2a680c(0x307));
                        if (_0x201e99[_0x2a680c(0x3ef)]) {
                            _0x4c07af(!![]), _0x412199(!![]);
                            var _0x3f62b6 = _0x434d79(_0x15a917(this)[_0x2a680c(0x32a)]()[_0x2a680c(0x32a)]()[_0x2a680c(0x32a)]());
                            _0x5d00da(_0x1148d1[_0x2a680c(0x3dd)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x2a680c(0x29f)](() => {
                                let _0x55b6d7 = setInterval(() => {
                                    const _0x259043 = a0_0x5a53;
                                    if (_0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x259043(0x317)] > 0x0) {
                                        clearInterval(_0x55b6d7);
                                        var _0x42d7f8 = _0x15a917(_0x259043(0x2f6) + (_0x3f62b6 + 0x1) + '\x22]')?.[_0x259043(0x32d)](_0x259043(0x364));
                                        _0x42d7f8 ? (_0x4c07af(![]), _0x15a917(_0x259043(0x2f6) + (_0x3f62b6 + 0x1) + '\x22]')?.[_0x259043(0x3a8)](_0x259043(0x1ef))) : alert(_0x259043(0x312)), _0x15a917(_0x259043(0x2ee))[_0x259043(0x163)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x201e99[_0x2a680c(0x181)]) {
                            var _0x305f7d = 0x0, _0x25b38d = _0x15a917(this)['parent']()[_0x2a680c(0x32a)]()[_0x2a680c(0x262)](_0x7e98f0)['length'], _0x171655 = _0x201e99[_0x2a680c(0x183)], _0x149015 = new Date(_0x15a917(this)[_0x2a680c(0x32a)]()[_0x2a680c(0x32a)]()[_0x2a680c(0x32a)]()[_0x2a680c(0x262)](_0x2a680c(0x3c1))[_0x2a680c(0x261)](function () {
                                    const _0x539476 = _0x2a680c;
                                    let _0x138183 = _0x15a917(this)[_0x539476(0x1e1)]('a[href]')[_0x539476(0x32d)](_0x539476(0x35d));
                                    return _0x138183?.[_0x539476(0x3e2)](_0x539476(0x184)) || _0x138183?.[_0x539476(0x35a)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })[_0x2a680c(0x27a)]()[_0x2a680c(0x32d)]('datetime'))[_0x2a680c(0x160)]();
                            if (_0x25b38d)
                                _0x15a917(this)[_0x2a680c(0x32a)]()['parent']()[_0x2a680c(0x262)](_0x7e98f0)[_0x2a680c(0x256)](function () {
                                    const _0x454b25 = _0x2a680c;
                                    let _0x560563 = _0x15a917(this)[_0x454b25(0x32a)]()[_0x454b25(0x32a)]()[_0x454b25(0x32a)]()['find']('video');
                                    _0x560563 && _0x560563[_0x454b25(0x32d)](_0x454b25(0x260)) && (_0x171655 = !![]);
                                }), _0x171655 || _0x201e99[_0x2a680c(0x1b2)] ? _0x5d00da(_0x1148d1[_0x2a680c(0x3dd)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x101960(_0x2a680c(0x14f))) : (_0x15a917(this)['parent']()[_0x2a680c(0x32a)]()[_0x2a680c(0x262)](_0x7e98f0)['each'](function () {
                                    const _0x24af4e = _0x2a680c;
                                    _0x305f7d++;
                                    let _0x19df59 = _0x15a917(this)['find'](_0x24af4e(0x3c2)), _0x514459 = _0x15a917(this)[_0x24af4e(0x262)](_0x24af4e(0x3de)), _0x35fe37 = _0x514459['attr'](_0x24af4e(0x3ad)) ? _0x514459[_0x24af4e(0x32d)]('srcset')[_0x24af4e(0x386)]('\x20')[0x0] : _0x514459[_0x24af4e(0x32d)](_0x24af4e(0x260));
                                    _0x19df59 && _0x19df59[_0x24af4e(0x32d)]('src') && (_0x171655 = !![]), _0x514459 && _0x35fe37 && _0x15a917(_0x24af4e(0x275))[_0x24af4e(0x1be)](_0x24af4e(0x1a6) + _0x149015 + _0x24af4e(0x367) + _0x1148d1[_0x24af4e(0x3dd)] + _0x24af4e(0x1df) + _0x305f7d + _0x24af4e(0x173) + _0x35fe37 + _0x24af4e(0x24b) + _0x35fe37 + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x101960(_0x24af4e(0x32c)) + _0x24af4e(0x176) + _0x305f7d + _0x24af4e(0x19e));
                                }), _0x171655 && _0x5d00da(_0x1148d1[_0x2a680c(0x3dd)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x101960(_0x2a680c(0x216))));
                            else {
                                if (_0x201e99[_0x2a680c(0x1b2)])
                                    _0x5d00da(_0x1148d1[_0x2a680c(0x3dd)], _0x2a680c(0x275), _0x101960(_0x2a680c(0x14f)));
                                else {
                                    _0x305f7d++;
                                    let _0x486f47 = _0x15a917(this)[_0x2a680c(0x32a)]()[_0x2a680c(0x32a)]()[_0x2a680c(0x32a)]()[_0x2a680c(0x262)](_0x2a680c(0x3c2)), _0x1b581e = _0x15a917(this)[_0x2a680c(0x32a)]()['parent']()[_0x2a680c(0x32a)]()[_0x2a680c(0x262)]('._aagv\x20img'), _0x3b8fff = _0x1b581e['attr'](_0x2a680c(0x3ad)) ? _0x1b581e['attr'](_0x2a680c(0x3ad))[_0x2a680c(0x386)]('\x20')[0x0] : _0x1b581e[_0x2a680c(0x32d)](_0x2a680c(0x260));
                                    _0x486f47 && _0x486f47[_0x2a680c(0x32d)](_0x2a680c(0x260)) && _0x5d00da(_0x1148d1['GL_postPath'], _0x2a680c(0x275), _0x101960(_0x2a680c(0x2bb))), _0x1b581e && _0x3b8fff && _0x15a917(_0x2a680c(0x275))['append'](_0x2a680c(0x1a6) + _0x149015 + _0x2a680c(0x367) + _0x1148d1['GL_postPath'] + _0x2a680c(0x1df) + _0x305f7d + _0x2a680c(0x23d) + _0x3b8fff + _0x2a680c(0x24b) + _0x3b8fff + _0x2a680c(0x1fd) + _0x101960(_0x2a680c(0x32c)) + '</span>\x20' + _0x305f7d + _0x2a680c(0x19e));
                                }
                            }
                        }
                        _0x15a917(_0x2a680c(0x2e2))['each'](function () {
                            const _0x2cd82a = _0x2a680c;
                            _0x15a917(this)['wrap']('<div></div>'), _0x15a917(this)[_0x2cd82a(0x33b)](_0x2cd82a(0x1dc)), _0x15a917(this)[_0x2cd82a(0x38e)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x101960('NEW_TAB') + _0x2cd82a(0x3f3) + _0xc64512['NEW_TAB'] + _0x2cd82a(0x1fe)), _0x15a917(this)[_0x2cd82a(0x32d)](_0x2cd82a(0x28b)) == 'video' && _0x15a917(this)[_0x2cd82a(0x38e)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x101960(_0x2cd82a(0x1de)) + _0x2cd82a(0x3b7) + _0xc64512['THUMBNAIL'] + _0x2cd82a(0x1fe));
                        }), _0x201e99[_0x2a680c(0x181)] && _0x5d00da(_0x1148d1[_0x2a680c(0x3dd)], _0x2a680c(0x275), _0x101960(_0x2a680c(0x14f)))[_0x2a680c(0x29f)](() => {
                            let _0x19e927 = setInterval(() => {
                                const _0x3bc987 = a0_0x5a53;
                                _0x15a917(_0x3bc987(0x2e2))[_0x3bc987(0x317)] > 0x0 && (clearInterval(_0x19e927), _0x15a917(_0x3bc987(0x2e2))[_0x3bc987(0x256)](function () {
                                    const _0x450a2d = _0x3bc987;
                                    _0x15a917(this)[_0x450a2d(0x3a8)](_0x450a2d(0x1ef));
                                }), _0x15a917(_0x3bc987(0x2ee))['remove']());
                            }, 0xfa);
                        });
                    });
                    var _0x3f1c1f = _0x15a917(this)[_0x38fb99(0x262)](_0x38fb99(0x1b5))['first']()['text']() || _0x15a917(this)[_0x38fb99(0x262)](_0x38fb99(0x3be))[_0x38fb99(0x261)](function () {
                        const _0x43f0ac = _0x38fb99;
                        return _0x15a917(this)?.[_0x43f0ac(0x266)]()?.['length'] > 0x0;
                    })['first']()[_0x38fb99(0x266)]();
                    _0x15a917(this)[_0x38fb99(0x32d)](_0x38fb99(0x202), _0x38fb99(0x273)), _0x15a917(this)[_0x38fb99(0x32d)](_0x38fb99(0x3b0), _0x3f1c1f);
                }
            });
        }
        function _0x1bd852(_0x4c088c) {
            const _0x44076f = _0x5364a1;
            var _0x2ced1c = _0x4c088c['shortcode_media'] ?? _0x4c088c;
            return _0x2ced1c[_0x44076f(0x415)] == null && _0x2ced1c[_0x44076f(0x23b)] != null && (_0x2ced1c[_0x44076f(0x415)] = _0x2ced1c['user']), _0x2ced1c[_0x44076f(0x415)] == null && (_0x34c369(_0x44076f(0x2fa), _0x44076f(0x17a)), alert(_0x44076f(0x348))), _0x2ced1c;
        }
        async function _0x5d00da(_0x4599d1, _0x2319fc, _0x267e73) {
            const _0x179f77 = _0x5364a1;
            try {
                _0x15a917(_0x2319fc + '\x20a')[_0x179f77(0x163)](), _0x15a917(_0x2319fc)[_0x179f77(0x1be)]('<p\x20id=\x22_SNLOAD\x22>' + _0x267e73 + _0x179f77(0x1c9));
                let _0x5636f1 = await _0x36ae4f(_0x4599d1), _0x25d266 = _0x1bd852(_0x5636f1['data']);
                if (_0x5636f1[_0x179f77(0x2f7)] === _0x179f77(0x3da)) {
                    let _0x42f01c = 0x1;
                    _0x25d266[_0x179f77(0x357)] == _0x179f77(0x1cd) && _0x25d266[_0x179f77(0x3b9)] && (_0x15a917(_0x2319fc)[_0x179f77(0x1be)](_0x179f77(0x39f) + _0x25d266['id'] + _0x179f77(0x1cb) + _0x25d266[_0x179f77(0x212)] + _0x179f77(0x229) + _0x25d266[_0x179f77(0x172)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x25d266[_0x179f77(0x415)][_0x179f77(0x185)] + '\x22\x20data-globalIndex=\x22' + _0x42f01c + _0x179f77(0x173) + _0x25d266['video_url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x25d266[_0x179f77(0x168)][0x1]['src'] + _0x179f77(0x3fd) + _0x101960('VID') + '</span>\x20' + _0x42f01c + _0x179f77(0x19e)), _0x42f01c++);
                    _0x25d266['__typename'] == _0x179f77(0x22c) && (_0x15a917(_0x2319fc)[_0x179f77(0x1be)](_0x179f77(0x39f) + _0x25d266['id'] + _0x179f77(0x1cb) + _0x25d266[_0x179f77(0x212)] + _0x179f77(0x229) + _0x25d266[_0x179f77(0x172)] + _0x179f77(0x1ea) + _0x25d266[_0x179f77(0x415)][_0x179f77(0x185)] + _0x179f77(0x371) + _0x42f01c + _0x179f77(0x173) + _0x25d266['display_resources'][_0x25d266[_0x179f77(0x168)][_0x179f77(0x317)] - 0x1][_0x179f77(0x260)] + _0x179f77(0x24b) + _0x25d266[_0x179f77(0x168)][0x1][_0x179f77(0x260)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x101960(_0x179f77(0x32c)) + _0x179f77(0x176) + _0x42f01c + '\x20-</a>'), _0x42f01c++);
                    if (_0x25d266['__typename'] == _0x179f77(0x2b1) && _0x25d266[_0x179f77(0x224)])
                        for (let _0x321998 of _0x25d266[_0x179f77(0x224)]['edges']) {
                            _0x321998[_0x179f77(0x3ff)][_0x179f77(0x357)] == _0x179f77(0x1cd) && _0x15a917(_0x2319fc)['append'](_0x179f77(0x39f) + _0x321998[_0x179f77(0x3ff)]['id'] + _0x179f77(0x1cb) + _0x25d266[_0x179f77(0x212)] + _0x179f77(0x229) + _0x25d266['shortcode'] + _0x179f77(0x228) + _0x25d266[_0x179f77(0x415)][_0x179f77(0x185)] + _0x179f77(0x371) + _0x42f01c + _0x179f77(0x173) + _0x321998[_0x179f77(0x3ff)]['video_url'] + _0x179f77(0x24b) + _0x321998[_0x179f77(0x3ff)][_0x179f77(0x168)][0x1][_0x179f77(0x260)] + _0x179f77(0x304) + _0x101960('VID') + _0x179f77(0x176) + _0x42f01c + '\x20-</a>'), _0x321998['node'][_0x179f77(0x357)] == _0x179f77(0x22c) && _0x15a917(_0x2319fc)['append'](_0x179f77(0x39f) + _0x321998[_0x179f77(0x3ff)]['id'] + '\x22\x20datetime=\x22' + _0x25d266['taken_at_timestamp'] + _0x179f77(0x229) + _0x25d266[_0x179f77(0x172)] + _0x179f77(0x1ea) + _0x25d266[_0x179f77(0x415)][_0x179f77(0x185)] + '\x22\x20data-globalIndex=\x22' + _0x42f01c + _0x179f77(0x173) + _0x321998[_0x179f77(0x3ff)][_0x179f77(0x168)][_0x321998['node'][_0x179f77(0x168)][_0x179f77(0x317)] - 0x1][_0x179f77(0x260)] + _0x179f77(0x24b) + _0x321998['node'][_0x179f77(0x168)][0x1][_0x179f77(0x260)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x101960(_0x179f77(0x32c)) + _0x179f77(0x176) + _0x42f01c + _0x179f77(0x19e)), _0x42f01c++;
                        }
                } else {
                    if (_0x25d266['carousel_media'])
                        _0x34c369(_0x179f77(0x1e9)), _0x25d266[_0x179f77(0x1e9)]['forEach']((_0x9d946d, _0xbdbeb9) => {
                            const _0x51f8ea = _0x179f77;
                            let _0x5788f6 = _0xbdbeb9 + 0x1;
                            _0x9d946d['video_versions'] == null ? (_0x9d946d[_0x51f8ea(0x1ad)][_0x51f8ea(0x3f2)][_0x51f8ea(0x2c9)](function (_0x249a4d, _0x35be0e) {
                                const _0x19ab63 = _0x51f8ea;
                                let _0x209657 = new URL(_0x249a4d[_0x19ab63(0x1c5)])[_0x19ab63(0x1d8)][_0x19ab63(0x362)](_0x19ab63(0x2a7)), _0x50a91b = new URL(_0x35be0e[_0x19ab63(0x1c5)])[_0x19ab63(0x1d8)][_0x19ab63(0x362)](_0x19ab63(0x2a7));
                                if (_0x209657 && _0x50a91b) {
                                    if (_0x209657[_0x19ab63(0x317)] > _0x50a91b[_0x19ab63(0x317)])
                                        return 0x1;
                                    if (_0x209657['length'] < _0x50a91b['length'])
                                        return -0x1;
                                } else {
                                    if (_0x249a4d['width'] < _0x35be0e[_0x19ab63(0x3d9)])
                                        return 0x1;
                                    if (_0x249a4d['width'] > _0x35be0e['width'])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x15a917(_0x2319fc)[_0x51f8ea(0x1be)](_0x51f8ea(0x39f) + _0x9d946d['pk'] + '\x22\x20datetime=\x22' + _0x9d946d['taken_at'] + _0x51f8ea(0x229) + _0x25d266[_0x51f8ea(0x1b0)] + _0x51f8ea(0x1ea) + _0x25d266[_0x51f8ea(0x415)]['username'] + _0x51f8ea(0x371) + _0x5788f6 + _0x51f8ea(0x173) + _0x9d946d[_0x51f8ea(0x1ad)]['candidates'][0x0][_0x51f8ea(0x1c5)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x9d946d['image_versions2']['candidates'][0x0][_0x51f8ea(0x1c5)] + _0x51f8ea(0x1fd) + _0x101960(_0x51f8ea(0x32c)) + '</span>\x20' + _0x5788f6 + _0x51f8ea(0x19e))) : _0x15a917(_0x2319fc)['append'](_0x51f8ea(0x39f) + _0x9d946d['pk'] + _0x51f8ea(0x1cb) + _0x9d946d[_0x51f8ea(0x2a2)] + _0x51f8ea(0x229) + _0x25d266['code'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x25d266['owner'][_0x51f8ea(0x185)] + '\x22\x20data-globalIndex=\x22' + _0x5788f6 + _0x51f8ea(0x173) + _0x9d946d[_0x51f8ea(0x35c)][0x0]['url'] + _0x51f8ea(0x24b) + _0x9d946d[_0x51f8ea(0x1ad)]['candidates'][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x101960(_0x51f8ea(0x147)) + '</span>\x20' + _0x5788f6 + '\x20-</a>');
                        });
                    else {
                        let _0x8ecadf = 0x1;
                        _0x25d266['video_versions'] == null ? (_0x25d266[_0x179f77(0x1ad)][_0x179f77(0x3f2)][_0x179f77(0x2c9)](function (_0x583a6c, _0x467a64) {
                            const _0x25e8b = _0x179f77;
                            let _0x5cb88e = new URL(_0x583a6c['url'])[_0x25e8b(0x1d8)][_0x25e8b(0x362)](_0x25e8b(0x2a7)), _0x14e831 = new URL(_0x467a64['url'])['searchParams'][_0x25e8b(0x362)](_0x25e8b(0x2a7));
                            if (_0x5cb88e && _0x14e831) {
                                if (_0x5cb88e[_0x25e8b(0x317)] > _0x14e831[_0x25e8b(0x317)])
                                    return 0x1;
                                if (_0x5cb88e[_0x25e8b(0x317)] < _0x14e831[_0x25e8b(0x317)])
                                    return -0x1;
                            } else {
                                if (_0x583a6c[_0x25e8b(0x3d9)] < _0x467a64[_0x25e8b(0x3d9)])
                                    return 0x1;
                                if (_0x583a6c[_0x25e8b(0x3d9)] > _0x467a64[_0x25e8b(0x3d9)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x15a917(_0x2319fc)[_0x179f77(0x1be)](_0x179f77(0x39f) + _0x25d266['pk'] + _0x179f77(0x1cb) + _0x25d266['taken_at'] + _0x179f77(0x229) + _0x25d266[_0x179f77(0x1b0)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x25d266[_0x179f77(0x415)][_0x179f77(0x185)] + _0x179f77(0x371) + _0x8ecadf + _0x179f77(0x173) + _0x25d266[_0x179f77(0x1ad)]['candidates'][0x0][_0x179f77(0x1c5)] + _0x179f77(0x24b) + _0x25d266[_0x179f77(0x1ad)]['candidates'][0x0][_0x179f77(0x1c5)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x101960(_0x179f77(0x32c)) + _0x179f77(0x176) + _0x8ecadf + _0x179f77(0x19e))) : _0x15a917(_0x2319fc)[_0x179f77(0x1be)](_0x179f77(0x39f) + _0x25d266['pk'] + _0x179f77(0x1cb) + _0x25d266[_0x179f77(0x2a2)] + _0x179f77(0x229) + _0x25d266[_0x179f77(0x1b0)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x25d266[_0x179f77(0x415)][_0x179f77(0x185)] + '\x22\x20data-globalIndex=\x22' + _0x8ecadf + _0x179f77(0x173) + _0x25d266[_0x179f77(0x35c)][0x0][_0x179f77(0x1c5)] + _0x179f77(0x24b) + _0x25d266['image_versions2']['candidates'][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x101960(_0x179f77(0x147)) + _0x179f77(0x176) + _0x8ecadf + _0x179f77(0x19e));
                    }
                }
                _0x15a917('#_SNLOAD')[_0x179f77(0x163)](), _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['each'](function () {
                    const _0x29a0fe = _0x179f77;
                    _0x15a917(this)[_0x29a0fe(0x353)](_0x29a0fe(0x3fe)), _0x15a917(this)['before'](_0x29a0fe(0x1dc)), _0x15a917(this)[_0x29a0fe(0x38e)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x101960(_0x29a0fe(0x208)) + _0x29a0fe(0x3f3) + _0xc64512[_0x29a0fe(0x208)] + _0x29a0fe(0x1fe)), _0x15a917(this)[_0x29a0fe(0x32d)](_0x29a0fe(0x28b)) == _0x29a0fe(0x3c2) && _0x15a917(this)[_0x29a0fe(0x38e)](_0x29a0fe(0x1e8) + _0x101960(_0x29a0fe(0x1de)) + _0x29a0fe(0x3b7) + _0xc64512[_0x29a0fe(0x336)] + _0x29a0fe(0x1fe));
                });
            } catch (_0x3de635) {
                _0x34c369(_0x179f77(0x36e), _0x3de635);
            }
            ;
        }
        function _0x434d79(_0x5bbef0) {
            const _0xfd05f1 = _0x5364a1;
            var _0x4cb057 = 0x0, _0x3c60d7 = _0x5bbef0[_0xfd05f1(0x262)](_0xfd05f1(0x3eb));
            return (_0x3c60d7 == null || !_0x3c60d7['hasClass'](_0xfd05f1(0x1ee))) && (_0x3c60d7 = _0x5bbef0['find']('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)[_0xfd05f1(0x1f7)](_0xfd05f1(0x3d5))), _0x3c60d7[_0xfd05f1(0x261)](_0xfd05f1(0x3b8))['each'](function (_0x34ec9d) {
                const _0x59a9e0 = _0xfd05f1;
                _0x15a917(this)[_0x59a9e0(0x16e)](_0x59a9e0(0x152)) && (_0x4cb057 = _0x34ec9d);
            }), _0x4cb057;
        }
        async function _0x4d40e1(_0x4abb62) {
            const _0x560034 = _0x5364a1;
            if (_0x4abb62) {
                _0x4c07af(!![]);
                let _0x1541aa = new Date()[_0x560034(0x160)](), _0x1208b6 = Math[_0x560034(0x405)](_0x1541aa / 0x3e8), _0x2a57c7 = location['pathname'][_0x560034(0x2fc)](/(reels|tagged)\/$/ig, '')[_0x560034(0x386)]('/')[_0x560034(0x261)](_0x2c014b => _0x2c014b[_0x560034(0x317)] > 0x0)['at'](-0x1), _0x4bcd72 = await _0x13759a(_0x2a57c7);
                try {
                    let _0x5cfe19 = await _0x12acbb(_0x4bcd72[_0x560034(0x23b)]['pk']);
                    _0x1cc5ec(_0x5cfe19, _0x2a57c7, _0x560034(0x3b3), _0x1208b6, _0x560034(0x191));
                } catch (_0x34d966) {
                    _0x1cc5ec(_0x4bcd72['user'][_0x560034(0x3e6)], _0x2a57c7, 'avatar', _0x1208b6, 'jpg');
                }
                _0x4c07af(![]);
            } else {
                if (!_0x15a917(_0x560034(0x2cc))[_0x560034(0x317)]) {
                    let _0xdab67b = setInterval(() => {
                        const _0x2f703e = _0x560034;
                        if (_0x15a917(_0x2f703e(0x2cc))[_0x2f703e(0x317)]) {
                            clearInterval(_0xdab67b);
                            return;
                        }
                        _0x15a917(_0x2f703e(0x34a))['parent']()['parent']()['append'](_0x2f703e(0x3c8) + _0x101960('DW') + _0x2f703e(0x341) + _0xc64512[_0x2f703e(0x1a9)] + _0x2f703e(0x1fe)), _0x15a917('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')[_0x2f703e(0x32a)]()[_0x2f703e(0x32a)]()[_0x2f703e(0x334)]('position', _0x2f703e(0x2b6)), _0x15a917('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')[_0x2f703e(0x32a)]()[_0x2f703e(0x32a)]()[_0x2f703e(0x32a)]()['append']('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x101960('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0xc64512[_0x2f703e(0x1a9)] + _0x2f703e(0x1fe)), _0x15a917(_0x2f703e(0x40d))[_0x2f703e(0x32a)]()[_0x2f703e(0x32a)]()[_0x2f703e(0x32a)]()[_0x2f703e(0x334)](_0x2f703e(0x3cd), _0x2f703e(0x2b6));
                    }, 0x96);
                }
            }
        }
        async function _0xd7a76c(_0x4ed382, _0x254c46, _0x8dc63d) {
            const _0x59c309 = _0x5364a1;
            if (_0x4ed382) {
                _0x4c07af(!![]);
                let _0x1e5d37 = location[_0x59c309(0x35d)][_0x59c309(0x386)]('?')['at'](0x0)[_0x59c309(0x386)](_0x59c309(0x333))['at'](-0x1)['replaceAll']('/', ''), _0x547741 = await _0x36ae4f(_0x1e5d37), _0x4a8b25 = _0x1bd852(_0x547741[_0x59c309(0x239)]), _0x179258 = new Date()[_0x59c309(0x160)]();
                _0x201e99[_0x59c309(0x34f)] && (_0x547741[_0x59c309(0x2f7)] === _0x59c309(0x3da) ? _0x179258 = _0x4a8b25[_0x59c309(0x3c7)]['taken_at_timestamp'] : _0x179258 = _0x4a8b25[_0x59c309(0x2a2)]);
                if (_0x547741['type'] === _0x59c309(0x3da)) {
                    if (_0x254c46 && _0x4a8b25[_0x59c309(0x3c7)][_0x59c309(0x2f3)]) {
                        if (_0x8dc63d)
                            _0x2a3047(_0x4a8b25[_0x59c309(0x3c7)]['video_url']);
                        else {
                            let _0x1c7479 = _0x59c309(0x302);
                            _0x1cc5ec(_0x4a8b25[_0x59c309(0x3c7)][_0x59c309(0x3b9)], _0x4a8b25[_0x59c309(0x3c7)]['owner']['username'], _0x59c309(0x20a), _0x179258, _0x1c7479, _0x1e5d37);
                        }
                    } else {
                        if (_0x8dc63d)
                            _0x2a3047(_0x4a8b25[_0x59c309(0x3c7)][_0x59c309(0x168)]['at'](-0x1)[_0x59c309(0x260)]);
                        else {
                            let _0x4dfdff = _0x59c309(0x191);
                            _0x1cc5ec(_0x4a8b25['shortcode_media'][_0x59c309(0x168)]['at'](-0x1)['src'], _0x4a8b25['shortcode_media'][_0x59c309(0x415)][_0x59c309(0x185)], _0x59c309(0x20a), _0x179258, _0x4dfdff, _0x1e5d37);
                        }
                    }
                } else {
                    if (_0x254c46 && _0x4a8b25[_0x59c309(0x35c)] != null) {
                        if (_0x8dc63d)
                            _0x2a3047(_0x4a8b25[_0x59c309(0x35c)][0x0][_0x59c309(0x1c5)]);
                        else {
                            let _0xe3b809 = 'mp4';
                            _0x1cc5ec(_0x4a8b25['video_versions'][0x0][_0x59c309(0x1c5)], _0x4a8b25[_0x59c309(0x415)][_0x59c309(0x185)], _0x59c309(0x20a), _0x179258, _0xe3b809, _0x1e5d37);
                        }
                    } else {
                        if (_0x8dc63d)
                            _0x2a3047(_0x4a8b25[_0x59c309(0x1ad)][_0x59c309(0x3f2)][0x0][_0x59c309(0x1c5)]);
                        else {
                            let _0x3db776 = _0x59c309(0x191);
                            _0x1cc5ec(_0x4a8b25[_0x59c309(0x1ad)][_0x59c309(0x3f2)][0x0][_0x59c309(0x1c5)], _0x4a8b25[_0x59c309(0x415)][_0x59c309(0x185)], 'reels', _0x179258, _0x3db776, _0x1e5d37);
                        }
                    }
                }
                _0x4c07af(![]);
            } else
                var _0x2c5000 = setInterval(() => {
                    const _0x1aef8b = _0x59c309;
                    _0x15a917(_0x1aef8b(0x292))[_0x1aef8b(0x317)] > 0x0 && (clearInterval(_0x2c5000), _0x201e99['SCROLL_BUTTON'] && (_0x15a917('#scrollWrapper')[_0x1aef8b(0x163)](), _0x15a917(_0x1aef8b(0x365))[_0x1aef8b(0x1be)]('<section\x20id=\x22scrollWrapper\x22></section>'), _0x15a917('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x1aef8b(0x1be)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x15a917(_0x1aef8b(0x2eb))[_0x1aef8b(0x1be)]('<div\x20class=\x22button-down\x22><div></div></div>'), _0x15a917('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up')['on'](_0x1aef8b(0x1ef), function () {
                        const _0x5d5ead = _0x1aef8b;
                        _0x15a917(_0x5d5ead(0x207))[0x0][_0x5d5ead(0x171)]({
                            'top': -0x1e,
                            'behavior': _0x5d5ead(0x355)
                        });
                    }), _0x15a917(_0x1aef8b(0x31a))['on'](_0x1aef8b(0x1ef), function () {
                        const _0x42a919 = _0x1aef8b;
                        _0x15a917(_0x42a919(0x207))[0x0][_0x42a919(0x171)]({
                            'top': 0x1e,
                            'behavior': 'smooth'
                        });
                    })), _0x15a917(_0x1aef8b(0x213))['children'](_0x1aef8b(0x3d5))[_0x1aef8b(0x256)](function () {
                        const _0x5817ae = _0x1aef8b;
                        if (_0x15a917(this)[_0x5817ae(0x1f7)]()[_0x5817ae(0x317)] > 0x0) {
                            if (!_0x15a917(this)[_0x5817ae(0x1f7)]()[_0x5817ae(0x262)](_0x5817ae(0x2b2))[_0x5817ae(0x317)]) {
                                var _0x15a424 = _0x15a917(this);
                                _0x15a917(this)[_0x5817ae(0x1f7)]()['css']('position', _0x5817ae(0x2b6)), _0x15a917(this)['children']()[_0x5817ae(0x1be)](_0x5817ae(0x3c8) + _0x101960('DW') + _0x5817ae(0x2d6) + _0xc64512[_0x5817ae(0x1a9)] + _0x5817ae(0x1fe)), _0x15a917(this)[_0x5817ae(0x1f7)]()[_0x5817ae(0x1be)](_0x5817ae(0x39c) + _0x101960(_0x5817ae(0x208)) + '\x22\x20class=\x22IG_REELS_NEWTAB\x22>' + _0xc64512[_0x5817ae(0x208)] + _0x5817ae(0x1fe)), _0x15a917(this)[_0x5817ae(0x1f7)]()[_0x5817ae(0x1be)](_0x5817ae(0x1e8) + _0x101960(_0x5817ae(0x1de)) + _0x5817ae(0x1f0) + _0xc64512[_0x5817ae(0x336)] + _0x5817ae(0x1fe));
                                _0x201e99['DISABLE_VIDEO_LOOPING'] && _0x15a917(this)[_0x5817ae(0x262)]('video')[_0x5817ae(0x256)](function () {
                                    const _0x4f0113 = _0x5817ae;
                                    _0x15a917(this)['on'](_0x4f0113(0x3e0), function () {
                                        const _0x372847 = _0x4f0113;
                                        if (!_0x15a917(this)[_0x372847(0x239)]('loop')) {
                                            let _0x443c03 = _0x15a917(this)['next']()[_0x372847(0x262)](_0x372847(0x3bf))['parents'](_0x372847(0x19f));
                                            _0x443c03[_0x372847(0x317)] > 0x0 ? (_0x15a917(this)['attr'](_0x372847(0x377), !![]), _0x443c03[_0x372847(0x3a8)](_0x372847(0x1ef)), _0x34c369(_0x372847(0x3f6))) : (_0x15a917(this)[_0x372847(0x32d)](_0x372847(0x377), !![]), _0x15a917(this)[_0x372847(0x32a)]()[_0x372847(0x262)]('.xpgaw4o')[_0x372847(0x15a)]('style'), this['pause'](), _0x34c369(_0x372847(0x3d0)));
                                        }
                                    });
                                });
                                _0x201e99[_0x5817ae(0x169)] && _0x15a917(this)[_0x5817ae(0x262)]('video')[_0x5817ae(0x256)](function () {
                                    const _0x3e5acc = _0x5817ae;
                                    if (!_0x15a917(this)[_0x3e5acc(0x239)](_0x3e5acc(0x218))) {
                                        let _0xcadc1b = _0x15a917(this);
                                        _0x34c369('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x201e99[_0x3e5acc(0x190)] && (this[_0x3e5acc(0x30c)] = _0x1148d1['videoVolume'], _0x15a917(this)['on']('loadstart', function () {
                                            const _0x49b31f = _0x3e5acc;
                                            this[_0x49b31f(0x30c)] = _0x1148d1[_0x49b31f(0x29e)];
                                        })), _0x15a917(this)['on'](_0x3e5acc(0x3f0), function (_0x2e3e37) {
                                            const _0x9fde6 = _0x3e5acc;
                                            _0x2e3e37['preventDefault'](), _0xcadc1b[_0x9fde6(0x334)]('z-index', '-1'), _0xcadc1b['removeAttr'](_0x9fde6(0x218));
                                        }), _0x15a917(this)[_0x3e5acc(0x32a)]()[_0x3e5acc(0x262)](_0x3e5acc(0x410))[_0x3e5acc(0x261)](function () {
                                            const _0x403b73 = _0x3e5acc;
                                            return _0x15a917(this)[_0x403b73(0x32a)](_0x403b73(0x40e))[_0x403b73(0x317)] > 0x0 && _0x15a917(this)[_0x403b73(0x334)]('cursor') === _0x403b73(0x188) && _0x15a917(this)[_0x403b73(0x32d)](_0x403b73(0x368)) != null;
                                        })['first']()['on'](_0x3e5acc(0x3f0), function (_0x1786ee) {
                                            const _0x18b7e0 = _0x3e5acc;
                                            _0x1786ee['preventDefault'](), _0xcadc1b[_0x18b7e0(0x334)](_0x18b7e0(0x3db), '2'), _0xcadc1b[_0x18b7e0(0x32d)](_0x18b7e0(0x218), !![]);
                                        }), _0x15a917(this)['on']('volumechange', function () {
                                            const _0x4b35ea = _0x3e5acc;
                                            let _0x45ecaf = _0x15a917(this)[_0x4b35ea(0x32a)]()[_0x4b35ea(0x262)](_0x4b35ea(0x1b7))[_0x4b35ea(0x262)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x4b35ea(0x261)](function (_0x139f1f) {
                                                const _0x1498e6 = _0x4b35ea;
                                                return _0x15a917(this)['width']() <= 0x40 && _0x15a917(this)[_0x1498e6(0x186)]() <= 0x40 && _0x15a917(this)[_0x1498e6(0x262)](_0x1498e6(0x3a9))[_0x1498e6(0x317)] > 0x0;
                                            });
                                            var _0x5ad68f = _0x45ecaf[_0x4b35ea(0x262)]('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0x4b35ea(0x317)] === 0x0;
                                            this[_0x4b35ea(0x2ad)] != _0x5ad68f && (this[_0x4b35ea(0x30c)] = _0x1148d1[_0x4b35ea(0x29e)], _0x45ecaf?.[_0x4b35ea(0x3a8)]('click')), _0x15a917(this)[_0x4b35ea(0x32d)](_0x4b35ea(0x28c)) && (_0x1148d1[_0x4b35ea(0x29e)] = this[_0x4b35ea(0x30c)], GM_setValue(_0x4b35ea(0x3d4), this[_0x4b35ea(0x30c)])), this[_0x4b35ea(0x30c)] == _0x1148d1['videoVolume'] && _0x15a917(this)[_0x4b35ea(0x32d)](_0x4b35ea(0x28c), !![]);
                                        }), _0x15a917(this)[_0x3e5acc(0x334)](_0x3e5acc(0x3cd), _0x3e5acc(0x2b5)), _0x15a917(this)['css'](_0x3e5acc(0x3db), '2'), _0x15a917(this)[_0x3e5acc(0x32d)](_0x3e5acc(0x3a0), !![]), _0x15a917(this)['attr'](_0x3e5acc(0x218), !![]);
                                    }
                                });
                                var _0xc78811 = _0x15a424['find'](_0x5817ae(0x3c2)), _0x143a36 = _0x15a917(this)[_0x5817ae(0x262)]('div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div')[_0x5817ae(0x27a)]();
                                _0x32b878(_0xc78811, _0x143a36, _0x5817ae(0x316));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x57f116() {
            const _0x14387a = _0x5364a1;
            _0x4c07af(!![]);
            let _0x1ed8c8 = new Date()[_0x14387a(0x160)](), _0x394c0a = Math['floor'](_0x1ed8c8 / 0x3e8), _0xd882a6 = _0x15a917(_0x14387a(0x20f))[_0x14387a(0x27a)]()['text']() || location[_0x14387a(0x156)][_0x14387a(0x386)]('/')[_0x14387a(0x261)](_0x16eb50 => _0x16eb50[_0x14387a(0x317)] > 0x0)['at'](0x1), _0x3b8861 = await _0x13759a(_0xd882a6), _0x100e15 = _0x3b8861[_0x14387a(0x23b)]['pk'], _0x1fff08 = await _0x198ee3(_0x100e15), _0x5cc9b3 = 0x0;
            _0x330eea(_0x5cc9b3, _0x1fff08[_0x14387a(0x239)][_0x14387a(0x34d)][0x0][_0x14387a(0x222)]['length']), _0x1fff08[_0x14387a(0x239)]['reels_media'][0x0][_0x14387a(0x222)]['forEach']((_0x18d710, _0x1424bb) => {
                setTimeout(() => {
                    const _0x425ae8 = a0_0x5a53;
                    _0x201e99['RENAME_PUBLISH_DATE'] && (_0x394c0a = _0x18d710[_0x425ae8(0x212)]), _0x18d710['display_resources'][_0x425ae8(0x2c9)](function (_0x1ea4e5, _0x35cf64) {
                        const _0x1070cd = _0x425ae8;
                        if (_0x1ea4e5[_0x1070cd(0x151)] < _0x35cf64[_0x1070cd(0x151)])
                            return 0x1;
                        if (_0x1ea4e5[_0x1070cd(0x151)] > _0x35cf64[_0x1070cd(0x151)])
                            return -0x1;
                        return 0x0;
                    }), _0x18d710[_0x425ae8(0x2f3)] ? _0x1cc5ec(_0x18d710['video_resources'][0x0]['src'], _0xd882a6, _0x425ae8(0x26b), _0x394c0a, _0x425ae8(0x302), _0x18d710['id'])['then'](() => {
                        const _0x11adc9 = _0x425ae8;
                        _0x330eea(++_0x5cc9b3, _0x1fff08[_0x11adc9(0x239)]['reels_media'][0x0]['items']['length']);
                    }) : _0x1cc5ec(_0x18d710[_0x425ae8(0x168)][0x0][_0x425ae8(0x260)], _0xd882a6, _0x425ae8(0x26b), _0x394c0a, _0x425ae8(0x191), _0x18d710['id'])['then'](() => {
                        const _0x54fd22 = _0x425ae8;
                        _0x330eea(++_0x5cc9b3, _0x1fff08[_0x54fd22(0x239)][_0x54fd22(0x34d)][0x0][_0x54fd22(0x222)][_0x54fd22(0x317)]);
                    });
                }, 0x64 * _0x1424bb);
            });
        }
        async function _0xf4db05(_0x45ddd7, _0xc1d66f, _0x5f21b6) {
            const _0x1f9ef4 = _0x5364a1;
            var _0x17b456 = _0x15a917(_0x1f9ef4(0x20f))[_0x1f9ef4(0x27a)]()[_0x1f9ef4(0x266)]() || location[_0x1f9ef4(0x156)][_0x1f9ef4(0x386)]('/')[_0x1f9ef4(0x261)](_0x4bdfeb => _0x4bdfeb[_0x1f9ef4(0x317)] > 0x0)['at'](0x1);
            if (_0x45ddd7) {
                let _0x83088f = new Date()[_0x1f9ef4(0x160)](), _0x557875 = Math[_0x1f9ef4(0x405)](_0x83088f / 0x3e8);
                _0x4c07af(!![]);
                if (_0x201e99[_0x1f9ef4(0x1b2)] && !_0x1148d1['tempFetchRateLimit']) {
                    let _0x3dc589 = null, _0x491e4d = await _0x13759a(_0x17b456), _0x9ced5f = _0x491e4d[_0x1f9ef4(0x23b)]['pk'], _0x228cae = await _0x198ee3(_0x9ced5f), _0x32e253 = location[_0x1f9ef4(0x156)][_0x1f9ef4(0x386)]('/')[_0x1f9ef4(0x261)](_0x1d050a => _0x1d050a[_0x1f9ef4(0x317)] > 0x0 && _0x1d050a[_0x1f9ef4(0x35a)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x228cae[_0x1f9ef4(0x239)][_0x1f9ef4(0x34d)][0x0]['items'][_0x1f9ef4(0x1b3)](_0x234eb5 => {
                        _0x234eb5['id'] == _0x32e253 && (_0x3dc589 = _0x234eb5['id']);
                    });
                    if (_0x3dc589 == null) {
                        let _0x5d1955 = _0x3a48b5(_0x17b456);
                        _0x5d1955[_0x1f9ef4(0x256)](function (_0x102f0e) {
                            const _0x605d40 = _0x1f9ef4;
                            _0x15a917(this)[_0x605d40(0x1f7)]()[_0x605d40(0x317)] > 0x0 && (_0x3dc589 = _0x228cae[_0x605d40(0x239)][_0x605d40(0x34d)][0x0]['items'][_0x102f0e]['id']);
                        });
                    }
                    _0x3dc589 == null && (_0x15a917(_0x1f9ef4(0x175))[_0x1f9ef4(0x256)](function (_0x47c34a) {
                        const _0x1a5f0c = _0x1f9ef4;
                        _0x15a917(this)[_0x1a5f0c(0x16e)]('x1lix1fw') && (_0x15a917(this)[_0x1a5f0c(0x1f7)]()[_0x1a5f0c(0x317)] > 0x0 && (_0x3dc589 = _0x228cae['data'][_0x1a5f0c(0x34d)][0x0][_0x1a5f0c(0x222)][_0x47c34a]['id']));
                    }), _0x15a917(_0x1f9ef4(0x412))[_0x1f9ef4(0x256)](function (_0x44c785) {
                        const _0x4e8117 = _0x1f9ef4;
                        _0x15a917(this)[_0x4e8117(0x1f7)]()[_0x4e8117(0x16e)](_0x4e8117(0x1f2)) && (_0x3dc589 = _0x228cae[_0x4e8117(0x239)][_0x4e8117(0x34d)][0x0][_0x4e8117(0x222)][_0x44c785]['id']);
                    }));
                    _0x3dc589 == null && (_0x3dc589 = location['pathname'][_0x1f9ef4(0x386)]('/')[_0x1f9ef4(0x261)](_0xaede90 => _0xaede90[_0x1f9ef4(0x317)] > 0x0 && _0xaede90[_0x1f9ef4(0x35a)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x4ec675 = await _0x542021(_0x3dc589);
                    _0x201e99[_0x1f9ef4(0x34f)] && (_0x557875 = _0x4ec675[_0x1f9ef4(0x222)][0x0][_0x1f9ef4(0x2a2)]);
                    _0x4ec675[_0x1f9ef4(0x21e)] === 'ok' ? _0x4ec675['items'][0x0][_0x1f9ef4(0x35c)] ? _0x5f21b6 ? _0x2a3047(_0x4ec675[_0x1f9ef4(0x222)][0x0][_0x1f9ef4(0x35c)][0x0][_0x1f9ef4(0x1c5)]) : _0x1cc5ec(_0x4ec675['items'][0x0]['video_versions'][0x0]['url'], _0x17b456, _0x1f9ef4(0x26b), _0x557875, 'mp4', _0x3dc589) : _0x5f21b6 ? _0x2a3047(_0x4ec675[_0x1f9ef4(0x222)][0x0][_0x1f9ef4(0x1ad)][_0x1f9ef4(0x3f2)][0x0][_0x1f9ef4(0x1c5)]) : _0x1cc5ec(_0x4ec675[_0x1f9ef4(0x222)][0x0][_0x1f9ef4(0x1ad)][_0x1f9ef4(0x3f2)][0x0][_0x1f9ef4(0x1c5)], _0x17b456, _0x1f9ef4(0x26b), _0x557875, 'jpg', _0x3dc589) : (_0x201e99[_0x1f9ef4(0x290)] ? (_0x1148d1[_0x1f9ef4(0x360)] = !![], _0xf4db05(_0x45ddd7, _0xc1d66f, _0x5f21b6)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x4ec675[_0x1f9ef4(0x1ae)]), _0x34c369(_0x4ec675));
                    _0x4c07af(![]);
                    return;
                }
                if (_0x15a917('body\x20>\x20div\x20section:visible\x20video[playsinline]')[_0x1f9ef4(0x317)] > 0x0) {
                    let _0x120d71 = _0x1f9ef4(0x302), _0x84dae6 = '', _0x13428a = location[_0x1f9ef4(0x156)]['replace'](/\/$/ig, '')[_0x1f9ef4(0x386)]('/')['at'](-0x1), _0x113c06 = null;
                    if (_0x1148d1['GL_dataCache'][_0x1f9ef4(0x26b)][_0x17b456] && !_0xc1d66f) {
                        _0x34c369('Fetch\x20from\x20memory\x20cache:', _0x17b456), _0x1148d1[_0x1f9ef4(0x36b)][_0x1f9ef4(0x26b)][_0x17b456][_0x1f9ef4(0x239)][_0x1f9ef4(0x34d)][0x0][_0x1f9ef4(0x222)][_0x1f9ef4(0x1b3)](_0x4becc0 => {
                            const _0x4070d6 = _0x1f9ef4;
                            _0x4becc0['id'] == _0x13428a && (_0x84dae6 = _0x4becc0[_0x4070d6(0x1d7)][0x0][_0x4070d6(0x260)], _0x201e99[_0x4070d6(0x34f)] && (_0x557875 = _0x4becc0[_0x4070d6(0x212)], _0x113c06 = _0x4becc0['id']));
                        });
                        if (_0x84dae6['length'] == 0x0) {
                            _0x34c369(_0x1f9ef4(0x204), _0x17b456), _0xf4db05(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x3b1b5d = await _0x13759a(_0x17b456), _0x40b2df = _0x3b1b5d[_0x1f9ef4(0x23b)]['pk'], _0x56aa9c = await _0x198ee3(_0x40b2df);
                        _0x56aa9c[_0x1f9ef4(0x239)]['reels_media'][0x0][_0x1f9ef4(0x222)][_0x1f9ef4(0x1b3)](_0x4842f1 => {
                            const _0x5932f6 = _0x1f9ef4;
                            _0x4842f1['id'] == _0x13428a && (_0x84dae6 = _0x4842f1[_0x5932f6(0x1d7)][0x0][_0x5932f6(0x260)], _0x201e99[_0x5932f6(0x34f)] && (_0x557875 = _0x4842f1[_0x5932f6(0x212)], _0x113c06 = _0x4842f1['id']));
                        });
                        if (_0x84dae6[_0x1f9ef4(0x317)] == 0x0) {
                            let _0x1d407a = _0x3a48b5(_0x17b456);
                            _0x1d407a[_0x1f9ef4(0x256)](function (_0x5bcc08) {
                                const _0x3d1af0 = _0x1f9ef4;
                                _0x15a917(this)[_0x3d1af0(0x1f7)]()[_0x3d1af0(0x317)] > 0x0 && (_0x84dae6 = _0x56aa9c[_0x3d1af0(0x239)][_0x3d1af0(0x34d)][0x0]['items'][_0x5bcc08][_0x3d1af0(0x1d7)][0x0][_0x3d1af0(0x260)], _0x201e99[_0x3d1af0(0x34f)] && (_0x557875 = _0x56aa9c[_0x3d1af0(0x239)][_0x3d1af0(0x34d)][0x0][_0x3d1af0(0x222)][_0x5bcc08][_0x3d1af0(0x212)], _0x113c06 = _0x56aa9c[_0x3d1af0(0x239)]['reels_media'][0x0][_0x3d1af0(0x222)][_0x5bcc08]['id']));
                            }), _0x84dae6['length'] == 0x0 && (_0x15a917(_0x1f9ef4(0x175))[_0x1f9ef4(0x256)](function (_0x333353) {
                                const _0x251218 = _0x1f9ef4;
                                _0x15a917(this)[_0x251218(0x16e)]('x1lix1fw') && (_0x15a917(this)['children']()[_0x251218(0x317)] > 0x0 && (_0x84dae6 = _0x56aa9c['data'][_0x251218(0x34d)][0x0]['items'][_0x333353][_0x251218(0x1d7)][0x0]['src'], _0x201e99[_0x251218(0x34f)] && (_0x557875 = _0x56aa9c[_0x251218(0x239)][_0x251218(0x34d)][0x0]['items'][_0x333353][_0x251218(0x212)], _0x113c06 = _0x56aa9c[_0x251218(0x239)][_0x251218(0x34d)][0x0]['items'][_0x333353]['id'])));
                            }), _0x15a917('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x1f9ef4(0x256)](function (_0x4a1ef2) {
                                const _0x574847 = _0x1f9ef4;
                                _0x15a917(this)['children']()[_0x574847(0x16e)](_0x574847(0x1f2)) && (_0x84dae6 = _0x56aa9c['data'][_0x574847(0x34d)][0x0][_0x574847(0x222)][_0x4a1ef2][_0x574847(0x1d7)][0x0][_0x574847(0x260)], _0x201e99[_0x574847(0x34f)] && (_0x557875 = _0x56aa9c[_0x574847(0x239)][_0x574847(0x34d)][0x0]['items'][_0x4a1ef2]['taken_at_timestamp'], _0x113c06 = _0x56aa9c[_0x574847(0x239)][_0x574847(0x34d)][0x0]['items'][_0x4a1ef2]['id']));
                            }));
                        }
                        _0x1148d1[_0x1f9ef4(0x36b)][_0x1f9ef4(0x26b)][_0x17b456] = _0x56aa9c;
                    }
                    _0x84dae6[_0x1f9ef4(0x317)] == 0x0 ? alert(_0x101960(_0x1f9ef4(0x29a))) : _0x5f21b6 ? _0x2a3047(_0x84dae6) : _0x1cc5ec(_0x84dae6, _0x17b456, _0x1f9ef4(0x26b), _0x557875, _0x120d71, _0x113c06);
                } else {
                    let _0x3a521b = _0x15a917(_0x1f9ef4(0x1b1))[_0x1f9ef4(0x32d)](_0x1f9ef4(0x3ad))?.[_0x1f9ef4(0x386)](',')[0x0]?.[_0x1f9ef4(0x386)]('\x20')[0x0], _0x1e3bf9 = _0x3a521b ? _0x3a521b : _0x15a917(_0x1f9ef4(0x1b1))[_0x1f9ef4(0x261)](function () {
                            const _0x36ac9c = _0x1f9ef4;
                            return _0x15a917(this)[_0x36ac9c(0x1e1)]('a')[_0x36ac9c(0x317)] === 0x0 && _0x15a917(this)['width']() === _0x15a917(this)[_0x36ac9c(0x32a)]()[_0x36ac9c(0x3d9)]();
                        })[_0x1f9ef4(0x32d)](_0x1f9ef4(0x260));
                    if (!_0x1e3bf9) {
                        let _0x1fe946 = _0x15a917(_0x1f9ef4(0x1ca));
                        _0x1e3bf9 = _0x1fe946[_0x1f9ef4(0x32d)](_0x1f9ef4(0x3ad)) ? _0x1fe946[_0x1f9ef4(0x32d)](_0x1f9ef4(0x3ad))?.[_0x1f9ef4(0x386)](',')[0x0]?.[_0x1f9ef4(0x386)]('\x20')[0x0] : _0x1fe946[_0x1f9ef4(0x32d)](_0x1f9ef4(0x260));
                    }
                    _0x201e99[_0x1f9ef4(0x34f)] && (_0x557875 = new Date(_0x15a917(_0x1f9ef4(0x205))['first']()[_0x1f9ef4(0x32d)](_0x1f9ef4(0x281)))[_0x1f9ef4(0x160)]());
                    let _0x2c0bce = _0x1e3bf9, _0x22bb30 = _0x1f9ef4(0x191);
                    _0x5f21b6 ? _0x2a3047(_0x2c0bce) : _0x1cc5ec(_0x2c0bce, _0x17b456, _0x1f9ef4(0x26b), _0x557875, _0x22bb30, _0x55961d(_0x2c0bce) ?? '');
                }
                _0x1148d1[_0x1f9ef4(0x360)] = ![], _0x4c07af(![]);
            } else {
                if (!_0x15a917(_0x1f9ef4(0x23e))[_0x1f9ef4(0x317)]) {
                    _0x1148d1[_0x1f9ef4(0x36b)][_0x1f9ef4(0x26b)] = {};
                    let _0x4b5951 = null;
                    _0x15a917(_0x1f9ef4(0x39d))[_0x1f9ef4(0x317)] > 0x0 ? _0x4b5951 = _0x15a917(_0x1f9ef4(0x309)) : (_0x4b5951 = _0x15a917(_0x1f9ef4(0x267)), _0x4b5951[_0x1f9ef4(0x334)](_0x1f9ef4(0x3cd), _0x1f9ef4(0x2b6)));
                    _0x4b5951[_0x1f9ef4(0x317)] === 0x0 && (_0x4b5951 = _0x15a917(_0x1f9ef4(0x17d))[_0x1f9ef4(0x32a)]()[_0x1f9ef4(0x32a)]()['parent']()[_0x1f9ef4(0x262)](_0x1f9ef4(0x383)), _0x4b5951[_0x1f9ef4(0x334)](_0x1f9ef4(0x3cd), _0x1f9ef4(0x2b6)));
                    _0x4b5951['length'] === 0x0 && (_0x4b5951 = _0x15a917('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x1f9ef4(0x32a)]()[_0x1f9ef4(0x32a)]()['parent']()[_0x1f9ef4(0x262)](_0x1f9ef4(0x1bc)), _0x4b5951['css'](_0x1f9ef4(0x3cd), 'relative'));
                    if (_0x4b5951[_0x1f9ef4(0x317)] === 0x0) {
                        let _0x5e5c46 = _0x15a917('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x48adc6 = 0x0;
                        _0x5e5c46[_0x1f9ef4(0x256)](function () {
                            const _0x46a4dc = _0x1f9ef4;
                            _0x15a917(this)[_0x46a4dc(0x3d9)]() > _0x48adc6 && (_0x48adc6 = _0x15a917(this)['width'](), _0x4b5951 = _0x15a917(this)[_0x46a4dc(0x1f7)](_0x46a4dc(0x3d5))[_0x46a4dc(0x27a)]());
                        });
                    }
                    if (_0x4b5951 != null) {
                        _0x4b5951['first']()[_0x1f9ef4(0x334)]('position', _0x1f9ef4(0x2b6)), _0x4b5951[_0x1f9ef4(0x27a)]()[_0x1f9ef4(0x1be)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x101960('DW') + _0x1f9ef4(0x402) + _0xc64512[_0x1f9ef4(0x1a9)] + '</div>'), _0x4b5951[_0x1f9ef4(0x27a)]()[_0x1f9ef4(0x1be)](_0x1f9ef4(0x39c) + _0x101960('NEW_TAB') + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0xc64512[_0x1f9ef4(0x208)] + '</div>');
                        let _0x44f9c2 = _0x3a48b5(_0x17b456);
                        _0x44f9c2[_0x1f9ef4(0x317)] > 0x1 && _0x4b5951[_0x1f9ef4(0x27a)]()['append'](_0x1f9ef4(0x1f8) + _0x101960(_0x1f9ef4(0x284)) + '\x22\x20class=\x22IG_DWSTORY_ALL\x22>' + _0xc64512['DOWNLOAD_ALL'] + _0x1f9ef4(0x1fe)), _0x4b5951[_0x1f9ef4(0x262)]('img[referrerpolicy]')['each'](function () {
                            const _0x1d2ce5 = _0x1f9ef4;
                            _0x15a917(this)['on'](_0x1d2ce5(0x3a7), function () {
                                const _0x2dcf88 = _0x1d2ce5;
                                !_0x15a917(this)[_0x2dcf88(0x239)](_0x2dcf88(0x3b4)) && (_0x4b5951[_0x2dcf88(0x262)](_0x2dcf88(0x37d))[_0x2dcf88(0x317)] === 0x0 ? (_0x15a917(this)['attr']('data-remove-thumbnail', !![]), _0x15a917(_0x2dcf88(0x37d))[_0x2dcf88(0x163)](), _0x34c369(_0x2dcf88(0x38b))) : (_0x15a917(this)['attr'](_0x2dcf88(0x352), !![]), _0x34c369(_0x2dcf88(0x40b))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x1ea9dc(_0x32933c, _0x28ebfa) {
            const _0x54e1d1 = _0x5364a1;
            if (_0x32933c) {
                let _0x1c39e5 = new Date()['getTime'](), _0x27efb2 = Math[_0x54e1d1(0x405)](_0x1c39e5 / 0x3e8), _0x36bb12 = _0x54e1d1(0x191), _0x5de40a = _0x15a917('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()['text']() || location[_0x54e1d1(0x156)][_0x54e1d1(0x386)]('/')['at'](0x2), _0x4cdf01 = location[_0x54e1d1(0x156)][_0x54e1d1(0x36c)](/\/$/ig, '')[_0x54e1d1(0x386)]('/')['at'](-0x1), _0x316b8a = '', _0x42b538 = null;
                _0x4c07af(!![]);
                if (_0x201e99[_0x54e1d1(0x1b2)] && !_0x1148d1[_0x54e1d1(0x360)]) {
                    let _0x5e5b93 = await _0x13759a(_0x5de40a), _0x354b6e = _0x5e5b93[_0x54e1d1(0x23b)]['pk'], _0xe3d42f = await _0x198ee3(_0x354b6e), _0x1b97ac = location['pathname']['split']('/')[_0x54e1d1(0x261)](_0x4ebc4d => _0x4ebc4d[_0x54e1d1(0x317)] > 0x0 && _0x4ebc4d[_0x54e1d1(0x35a)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0xe3d42f[_0x54e1d1(0x239)][_0x54e1d1(0x34d)][0x0]['items'][_0x54e1d1(0x1b3)](_0x2e4e69 => {
                        _0x2e4e69['id'] == _0x1b97ac && (_0x42b538 = _0x2e4e69['id']);
                    });
                    if (_0x42b538 == null) {
                        let _0x1325cf = _0x3a48b5(_0x5de40a);
                        _0x1325cf[_0x54e1d1(0x256)](function (_0x37500e) {
                            const _0x556229 = _0x54e1d1;
                            _0x15a917(this)[_0x556229(0x1f7)]()[_0x556229(0x317)] > 0x0 && (_0x42b538 = _0xe3d42f[_0x556229(0x239)][_0x556229(0x34d)][0x0][_0x556229(0x222)][_0x37500e]['id']);
                        });
                    }
                    _0x42b538 == null && (_0x15a917(_0x54e1d1(0x175))[_0x54e1d1(0x256)](function (_0x292268) {
                        const _0x5934b1 = _0x54e1d1;
                        _0x15a917(this)[_0x5934b1(0x16e)]('x1lix1fw') && (_0x15a917(this)[_0x5934b1(0x1f7)]()['length'] > 0x0 && (_0x42b538 = _0xe3d42f[_0x5934b1(0x239)][_0x5934b1(0x34d)][0x0][_0x5934b1(0x222)][_0x292268]['id']));
                    }), _0x15a917(_0x54e1d1(0x412))[_0x54e1d1(0x256)](function (_0x31a367) {
                        const _0x2b523b = _0x54e1d1;
                        _0x15a917(this)['children']()[_0x2b523b(0x16e)]('_ac3q') && (_0x42b538 = _0xe3d42f[_0x2b523b(0x239)]['reels_media'][0x0][_0x2b523b(0x222)][_0x31a367]['id']);
                    }));
                    _0x42b538 == null && (_0x42b538 = location[_0x54e1d1(0x156)]['split']('/')[_0x54e1d1(0x261)](_0x403ac0 => _0x403ac0[_0x54e1d1(0x317)] > 0x0 && _0x403ac0[_0x54e1d1(0x35a)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x3926fa = await _0x542021(_0x42b538);
                    _0x201e99[_0x54e1d1(0x34f)] && (_0x27efb2 = _0x3926fa[_0x54e1d1(0x222)][0x0][_0x54e1d1(0x2a2)]);
                    _0x3926fa[_0x54e1d1(0x21e)] === 'ok' ? _0x1cc5ec(_0x3926fa['items'][0x0][_0x54e1d1(0x1ad)][_0x54e1d1(0x3f2)][0x0][_0x54e1d1(0x1c5)], _0x5de40a, _0x54e1d1(0x26b), _0x27efb2, _0x54e1d1(0x191), _0x42b538) : (_0x201e99[_0x54e1d1(0x290)] ? (_0x1148d1['tempFetchRateLimit'] = !![], _0x1ea9dc(!![], _0x28ebfa)) : alert(_0x54e1d1(0x15c) + _0x3926fa[_0x54e1d1(0x1ae)]), _0x34c369(_0x3926fa));
                    _0x4c07af(![]);
                    return;
                }
                if (_0x1148d1[_0x54e1d1(0x36b)]['stories'][_0x5de40a] && !_0x28ebfa) {
                    _0x34c369(_0x54e1d1(0x3a3), _0x5de40a), _0x1148d1['GL_dataCache'][_0x54e1d1(0x26b)][_0x5de40a][_0x54e1d1(0x239)]['reels_media'][0x0][_0x54e1d1(0x222)][_0x54e1d1(0x1b3)](_0x173565 => {
                        const _0x28522d = _0x54e1d1;
                        _0x173565['id'] == _0x4cdf01 && (_0x316b8a = _0x173565[_0x28522d(0x2d8)], _0x201e99['RENAME_PUBLISH_DATE'] && (_0x27efb2 = _0x173565[_0x28522d(0x212)], _0x42b538 = _0x173565['id']));
                    });
                    if (_0x316b8a[_0x54e1d1(0x317)] == 0x0) {
                        _0x34c369(_0x54e1d1(0x204), _0x5de40a), _0x1ea9dc(!![], !![]);
                        return;
                    }
                } else {
                    let _0x2a9c00 = await _0x13759a(_0x5de40a), _0x483b73 = _0x2a9c00[_0x54e1d1(0x23b)]['pk'], _0x466b2a = await _0x198ee3(_0x483b73);
                    _0x466b2a[_0x54e1d1(0x239)][_0x54e1d1(0x34d)][0x0]['items']['forEach'](_0x9ed0e3 => {
                        const _0x5010ae = _0x54e1d1;
                        _0x9ed0e3['id'] == _0x4cdf01 && (_0x316b8a = _0x9ed0e3[_0x5010ae(0x2d8)], _0x201e99['RENAME_PUBLISH_DATE'] && (_0x27efb2 = _0x9ed0e3[_0x5010ae(0x212)], _0x42b538 = _0x9ed0e3['id']));
                    });
                    if (_0x316b8a['length'] == 0x0) {
                        let _0x5e107c = _0x3a48b5(_0x5de40a);
                        _0x5e107c[_0x54e1d1(0x256)](function (_0x3ab8ff) {
                            const _0x2e9834 = _0x54e1d1;
                            _0x15a917(this)[_0x2e9834(0x1f7)]()['length'] > 0x0 && (_0x316b8a = _0x466b2a[_0x2e9834(0x239)]['reels_media'][0x0]['items'][_0x3ab8ff][_0x2e9834(0x2d8)], _0x201e99[_0x2e9834(0x34f)] && (_0x27efb2 = _0x466b2a[_0x2e9834(0x239)][_0x2e9834(0x34d)][0x0][_0x2e9834(0x222)][_0x3ab8ff][_0x2e9834(0x212)], _0x42b538 = _0x466b2a[_0x2e9834(0x239)]['reels_media'][0x0][_0x2e9834(0x222)][_0x3ab8ff]['id']));
                        }), _0x316b8a['length'] == 0x0 && (_0x15a917(_0x54e1d1(0x175))[_0x54e1d1(0x256)](function (_0x383948) {
                            const _0x5bbe90 = _0x54e1d1;
                            _0x15a917(this)[_0x5bbe90(0x16e)](_0x5bbe90(0x3f9)) && (_0x15a917(this)[_0x5bbe90(0x1f7)]()['length'] > 0x0 && (_0x316b8a = _0x466b2a['data'][_0x5bbe90(0x34d)][0x0][_0x5bbe90(0x222)][_0x383948][_0x5bbe90(0x2d8)], _0x201e99[_0x5bbe90(0x34f)] && (_0x27efb2 = _0x466b2a[_0x5bbe90(0x239)][_0x5bbe90(0x34d)][0x0][_0x5bbe90(0x222)][_0x383948]['taken_at_timestamp'], _0x42b538 = _0x466b2a[_0x5bbe90(0x239)][_0x5bbe90(0x34d)][0x0]['items'][_0x383948]['id'])));
                        }), _0x15a917(_0x54e1d1(0x412))[_0x54e1d1(0x256)](function (_0x31f1d7) {
                            const _0x4c4dd4 = _0x54e1d1;
                            _0x15a917(this)['children']()['hasClass'](_0x4c4dd4(0x1f2)) && (_0x316b8a = _0x466b2a[_0x4c4dd4(0x239)]['reels_media'][0x0][_0x4c4dd4(0x222)][_0x31f1d7][_0x4c4dd4(0x2d8)], _0x201e99[_0x4c4dd4(0x34f)] && (_0x27efb2 = _0x466b2a['data'][_0x4c4dd4(0x34d)][0x0][_0x4c4dd4(0x222)][_0x31f1d7][_0x4c4dd4(0x212)], _0x42b538 = _0x466b2a[_0x4c4dd4(0x239)][_0x4c4dd4(0x34d)][0x0]['items'][_0x31f1d7]['id']));
                        }));
                    }
                }
                _0x1cc5ec(_0x316b8a, _0x5de40a, _0x54e1d1(0x3df), _0x27efb2, _0x36bb12, _0x42b538), _0x1148d1[_0x54e1d1(0x360)] = ![], _0x4c07af(![]);
            } else {
                if (_0x15a917(_0x54e1d1(0x37c))[_0x54e1d1(0x32a)]()[_0x54e1d1(0x262)](_0x54e1d1(0x3cc))[_0x54e1d1(0x317)]) {
                    let _0x2316d9 = null;
                    _0x15a917(_0x54e1d1(0x39d))[_0x54e1d1(0x317)] > 0x0 ? _0x2316d9 = _0x15a917(_0x54e1d1(0x309)) : (_0x2316d9 = _0x15a917(_0x54e1d1(0x267)), _0x2316d9[_0x54e1d1(0x334)]('position', _0x54e1d1(0x2b6)));
                    _0x2316d9[_0x54e1d1(0x317)] === 0x0 && (_0x2316d9 = _0x15a917('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x54e1d1(0x32a)]()['parent']()[_0x54e1d1(0x32a)]()[_0x54e1d1(0x262)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x2316d9[_0x54e1d1(0x334)](_0x54e1d1(0x3cd), _0x54e1d1(0x2b6)));
                    _0x2316d9[_0x54e1d1(0x317)] === 0x0 && (_0x2316d9 = _0x15a917(_0x54e1d1(0x17d))[_0x54e1d1(0x32a)]()[_0x54e1d1(0x32a)]()[_0x54e1d1(0x32a)]()[_0x54e1d1(0x262)](_0x54e1d1(0x1bc)), _0x2316d9['css'](_0x54e1d1(0x3cd), _0x54e1d1(0x2b6)));
                    if (_0x2316d9['length'] === 0x0) {
                        let _0x8f6f7c = _0x15a917(_0x54e1d1(0x19a)), _0x5475c1 = 0x0;
                        _0x8f6f7c[_0x54e1d1(0x256)](function () {
                            const _0x48a1a3 = _0x54e1d1;
                            _0x15a917(this)[_0x48a1a3(0x3d9)]() > _0x5475c1 && (_0x5475c1 = _0x15a917(this)[_0x48a1a3(0x3d9)](), _0x2316d9 = _0x15a917(this)[_0x48a1a3(0x1f7)]('div')[_0x48a1a3(0x27a)]());
                        });
                    }
                    _0x2316d9 != null && (_0x2316d9[_0x54e1d1(0x27a)]()[_0x54e1d1(0x334)]('position', 'relative'), _0x2316d9[_0x54e1d1(0x27a)]()['append']('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x101960(_0x54e1d1(0x1de)) + _0x54e1d1(0x376) + _0xc64512[_0x54e1d1(0x336)] + _0x54e1d1(0x1fe)));
                }
            }
        }
        function _0x1049b0(_0x368937) {
            return new Promise((_0xb5a70, _0x409afb) => {
                const _0x405e8f = a0_0x5a53;
                let _0x508572 = _0x405e8f(0x37e) + _0x368937 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': _0x405e8f(0x1ce),
                    'url': _0x508572,
                    'onload': function (_0x28de78) {
                        const _0x1d28eb = _0x405e8f;
                        try {
                            let _0x1e7e2a = JSON[_0x1d28eb(0x1f9)](_0x28de78['response']);
                            _0xb5a70(_0x1e7e2a);
                        } catch (_0x24fdd7) {
                            _0x34c369('getHighlightStories()', _0x1d28eb(0x326), _0x24fdd7['message']), _0x409afb(_0x24fdd7);
                        }
                    },
                    'onerror': function (_0x539feb) {
                        const _0x556e2f = _0x405e8f;
                        _0x34c369(_0x556e2f(0x24a), _0x556e2f(0x326), _0x539feb), _0x409afb(_0x539feb);
                    }
                });
            });
        }
        function _0x198ee3(_0x1288f7) {
            return new Promise((_0x32f53c, _0x2dad20) => {
                const _0x466ff1 = a0_0x5a53;
                let _0x4a4eff = _0x466ff1(0x27d) + _0x1288f7 + _0x466ff1(0x24d);
                GM_xmlhttpRequest({
                    'method': _0x466ff1(0x1ce),
                    'url': _0x4a4eff,
                    'onload': function (_0x15d351) {
                        const _0x101fc2 = _0x466ff1;
                        try {
                            let _0x3c77ce = JSON[_0x101fc2(0x1f9)](_0x15d351[_0x101fc2(0x30b)]);
                            _0x34c369(_0x101fc2(0x3a1), _0x3c77ce), _0x32f53c(_0x3c77ce);
                        } catch (_0x4f155e) {
                            _0x34c369(_0x101fc2(0x3a1), _0x101fc2(0x326), _0x4f155e[_0x101fc2(0x1ae)]), _0x2dad20(_0x4f155e);
                        }
                    },
                    'onerror': function (_0x3ad5bf) {
                        const _0x20399c = _0x466ff1;
                        _0x34c369(_0x20399c(0x3a1), _0x20399c(0x326), _0x3ad5bf), _0x2dad20(_0x3ad5bf);
                    }
                });
            });
        }
        function _0x13759a(_0x2251dc) {
            return new Promise((_0x31cfb0, _0x41229) => {
                const _0x2860f9 = a0_0x5a53;
                let _0xf1b9bc = _0x2860f9(0x331) + _0x2251dc;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0xf1b9bc,
                    'onload': function (_0x551460) {
                        const _0x3c922e = _0x2860f9;
                        let _0x4280d2 = JSON['parse'](_0x551460['response']), _0x318b41 = null;
                        _0x4280d2[_0x3c922e(0x299)]['forEach'](_0x17b6f4 => {
                            const _0x5f40c1 = _0x3c922e;
                            _0x17b6f4[_0x5f40c1(0x23b)]['username']?.['toLowerCase']() === _0x2251dc?.['toLowerCase']() && (_0x318b41 = _0x17b6f4);
                        }), _0x318b41 != null ? (_0x34c369(_0x3c922e(0x2db), _0x318b41), _0x31cfb0(_0x318b41)) : _0x42cd44(_0x2251dc)[_0x3c922e(0x29f)](_0x209e65 => {
                            _0x31cfb0(_0x209e65);
                        })[_0x3c922e(0x363)](_0x6f0a59 => {
                            alert('Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()');
                        });
                    },
                    'onerror': function (_0x45566d) {
                        const _0x18e034 = _0x2860f9;
                        _0x34c369(_0x18e034(0x2db), _0x18e034(0x326), _0x45566d), _0x41229(_0x45566d);
                    }
                });
            });
        }
        function _0x42cd44(_0x3fed5e) {
            return new Promise((_0x4733e3, _0xffc036) => {
                const _0x5bf183 = a0_0x5a53;
                let _0x1fbb36 = _0x5bf183(0x330) + _0x3fed5e;
                GM_xmlhttpRequest({
                    'method': _0x5bf183(0x1ce),
                    'url': _0x1fbb36,
                    'headers': { 'X-IG-App-ID': _0x6873b() },
                    'onload': function (_0x4d40d0) {
                        const _0x46352c = _0x5bf183;
                        try {
                            let _0x4d4b1d = JSON[_0x46352c(0x1f9)](_0x4d40d0[_0x46352c(0x30b)]), _0x33056c = _0x4d4b1d?.['data']?.['user'];
                            if (_0x33056c != null) {
                                let _0x15e37e = _0x4d4b1d?.[_0x46352c(0x239)];
                                _0x15e37e[_0x46352c(0x23b)]['pk'] = _0x15e37e[_0x46352c(0x23b)]['id'], _0x34c369(_0x46352c(0x15e), _0x4d4b1d), _0x4733e3(_0x15e37e);
                            } else
                                _0x34c369(_0x46352c(0x15e), 'reject', _0x46352c(0x3dc)), _0xffc036(_0x46352c(0x3dc));
                        } catch (_0x2a8522) {
                            _0x34c369(_0x46352c(0x15e), 'reject', _0x2a8522['message']), _0xffc036(_0x2a8522);
                        }
                    },
                    'onerror': function (_0x1f72db) {
                        _0x34c369('getUserIdWithAgent()', 'reject', _0x1f72db), _0xffc036(_0x1f72db);
                    }
                });
            });
        }
        function _0x12acbb(_0x1c62ab) {
            return new Promise((_0x267da1, _0x469652) => {
                const _0xedde95 = a0_0x5a53;
                let _0xbbde61 = 'https://i.instagram.com/api/v1/users/' + _0x1c62ab + _0xedde95(0x396);
                GM_xmlhttpRequest({
                    'method': _0xedde95(0x1ce),
                    'url': _0xbbde61,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x52a145) {
                        const _0x260f98 = _0xedde95;
                        try {
                            let _0x5b0417 = JSON[_0x260f98(0x1f9)](_0x52a145[_0x260f98(0x30b)]);
                            _0x5b0417['status'] !== 'ok' ? (_0x34c369(_0x260f98(0x25b), _0x260f98(0x326), _0x5b0417), _0x469652('faild')) : (_0x34c369('getUserHighSizeProfile()', _0x5b0417), _0x267da1(_0x5b0417[_0x260f98(0x23b)][_0x260f98(0x2d1)]?.[_0x260f98(0x1c5)]));
                        } catch (_0x1e04f8) {
                            _0x34c369('getUserHighSizeProfile()', _0x260f98(0x326), _0x1e04f8), _0x469652(_0x1e04f8);
                        }
                    },
                    'onerror': function (_0x23f264) {
                        const _0x5afccb = _0xedde95;
                        _0x34c369(_0x5afccb(0x25b), 'reject', _0x23f264), _0x469652(_0x23f264);
                    }
                });
            });
        }
        function _0xe14e2c(_0x3570fc) {
            return new Promise((_0x6fb8bc, _0x16a804) => {
                const _0x4beaa9 = a0_0x5a53;
                if (!_0x3570fc)
                    _0x16a804(_0x4beaa9(0x3f5));
                let _0x38cf4e = _0x3570fc, _0x2f7a7a = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x38cf4e + _0x4beaa9(0x3e7);
                GM_xmlhttpRequest({
                    'method': _0x4beaa9(0x1ce),
                    'url': _0x2f7a7a,
                    'onload': function (_0x2589a8) {
                        const _0x4a2fcc = _0x4beaa9;
                        try {
                            let _0x3ac81f = JSON['parse'](_0x2589a8[_0x4a2fcc(0x30b)]);
                            _0x34c369(_0x4a2fcc(0x2a4), _0x3ac81f), _0x6fb8bc(_0x3ac81f[_0x4a2fcc(0x239)][_0x4a2fcc(0x3c7)][_0x4a2fcc(0x415)][_0x4a2fcc(0x185)]);
                        } catch (_0x2bd3ca) {
                            _0x34c369('getPostOwner()', 'reject', _0x2bd3ca['message']), _0x16a804(_0x2bd3ca);
                        }
                    },
                    'onerror': function (_0x2c34b2) {
                        const _0x35e980 = _0x4beaa9;
                        _0x34c369(_0x35e980(0x2a4), _0x35e980(0x326), _0x2c34b2), _0x16a804(_0x2c34b2);
                    }
                });
            });
        }
        function _0x36ae4f(_0x5ee2e8) {
            return new Promise((_0x34139e, _0x58faaf) => {
                const _0x3b1d28 = a0_0x5a53;
                if (!_0x5ee2e8)
                    _0x58faaf(_0x3b1d28(0x3f5));
                let _0x59359e = _0x5ee2e8, _0x53f393 = _0x3b1d28(0x279) + _0x59359e + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x3b1d28(0x1ce),
                    'url': _0x53f393,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x5ed83a) {
                        const _0x52284f = _0x3b1d28;
                        try {
                            let _0x8c6f6d = JSON['parse'](_0x5ed83a[_0x52284f(0x30b)]);
                            _0x34c369(_0x8c6f6d), _0x8c6f6d[_0x52284f(0x21e)] === _0x52284f(0x14b) ? (_0x34c369(_0x52284f(0x16b), _0x52284f(0x211), _0x59359e), _0x33e64f(_0x59359e)[_0x52284f(0x29f)](_0x20e5af => {
                                const _0x19147a = _0x52284f;
                                _0x34139e({
                                    'type': 'query_id',
                                    'data': _0x20e5af['xdt_api__v1__media__shortcode__web_info'][_0x19147a(0x222)][0x0]
                                });
                            })[_0x52284f(0x363)](_0x50a649 => {
                                _0x58faaf(_0x50a649);
                            })) : _0x34139e({
                                'type': 'query_hash',
                                'data': _0x8c6f6d['data']
                            });
                        } catch (_0x43e9eb) {
                            _0x34c369(_0x52284f(0x33e), 'reject', _0x43e9eb[_0x52284f(0x1ae)]), _0x58faaf(_0x43e9eb);
                        }
                    },
                    'onerror': function (_0x1f17d4) {
                        const _0x406b76 = _0x3b1d28;
                        _0x34c369(_0x406b76(0x33e), _0x406b76(0x326), _0x1f17d4), _0x58faaf(_0x1f17d4);
                    }
                });
            });
        }
        function _0x33e64f(_0x396df8) {
            return new Promise((_0x527106, _0x4ee412) => {
                const _0x168536 = a0_0x5a53;
                if (!_0x396df8)
                    _0x4ee412(_0x168536(0x3f5));
                let _0x51562e = _0x396df8, _0x327fbc = _0x168536(0x342) + _0x51562e + _0x168536(0x381);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x327fbc,
                    'headers': {
                        'User-Agent': _0x168536(0x404),
                        'X-IG-App-ID': _0x6873b()
                    },
                    'onload': function (_0x16c732) {
                        const _0x5d5a21 = _0x168536;
                        try {
                            let _0x488637 = JSON['parse'](_0x16c732['response']);
                            _0x34c369(_0x488637), _0x488637[_0x5d5a21(0x21e)] === 'fail' ? (alert(_0x5d5a21(0x356) + _0x488637[_0x5d5a21(0x1ae)] + ':\x20' + _0x488637[_0x5d5a21(0x36a)]), _0x34c369(_0x5d5a21(0x193) + _0x488637[_0x5d5a21(0x1ae)] + ':\x20' + _0x488637[_0x5d5a21(0x36a)]), _0x4ee412(_0x16c732)) : (_0x34c369('getBlobMediaWithQueryID()', _0x488637[_0x5d5a21(0x239)]), _0x527106(_0x488637[_0x5d5a21(0x239)]));
                        } catch (_0x2f3f26) {
                            _0x34c369('getBlobMediaWithQueryID()', _0x5d5a21(0x326), _0x2f3f26[_0x5d5a21(0x1ae)]), _0x4ee412(_0x2f3f26);
                        }
                    },
                    'onerror': function (_0x49e0fe) {
                        const _0x3e3468 = _0x168536;
                        _0x34c369(_0x3e3468(0x2d5), 'reject', _0x49e0fe), _0x4ee412(_0x49e0fe);
                    }
                });
            });
        }
        function _0x542021(_0x5258d1) {
            return new Promise((_0x385d17, _0x54a176) => {
                const _0x1c8eb1 = a0_0x5a53;
                let _0x21590e = 'https://i.instagram.com/api/v1/media/' + _0x5258d1 + _0x1c8eb1(0x396);
                if (_0x5258d1 == null) {
                    alert(_0x1c8eb1(0x3bd)), _0x34c369(_0x1c8eb1(0x2c8), 'reject', _0x1c8eb1(0x3bd)), _0x4c07af(![]), _0x54a176(-0x1);
                    return;
                }
                if (_0x6873b() == null) {
                    alert(_0x1c8eb1(0x25a)), _0x34c369(_0x1c8eb1(0x2c8), _0x1c8eb1(0x326), _0x1c8eb1(0x25a)), _0x4c07af(![]), _0x54a176(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x1c8eb1(0x1ce),
                    'url': _0x21590e,
                    'headers': {
                        'User-Agent': window[_0x1c8eb1(0x3ca)][_0x1c8eb1(0x194)],
                        'Accept': _0x1c8eb1(0x324),
                        'X-IG-App-ID': _0x6873b()
                    },
                    'onload': function (_0x413462) {
                        const _0x5e242c = _0x1c8eb1;
                        if (_0x413462[_0x5e242c(0x397)] == _0x21590e) {
                            let _0x10ed65 = JSON[_0x5e242c(0x1f9)](_0x413462[_0x5e242c(0x30b)]);
                            _0x34c369('getMediaInfo()', _0x10ed65), _0x385d17(_0x10ed65);
                        } else {
                            let _0x5cc7df = new URL(_0x413462['finalUrl']);
                            _0x5cc7df[_0x5e242c(0x156)][_0x5e242c(0x3e2)]('/accounts/login') ? (_0x34c369(_0x5e242c(0x2c8), _0x5e242c(0x326), _0x5e242c(0x2d0)), alert(_0x5e242c(0x2d0))) : (_0x34c369('getMediaInfo()', _0x5e242c(0x326), _0x5e242c(0x18b) + _0x413462[_0x5e242c(0x397)] + '\x22'), alert(_0x5e242c(0x18b) + _0x413462['finalUrl'] + '\x22')), _0x4c07af(![]), _0x54a176(-0x1);
                        }
                    },
                    'onerror': function (_0xd6802c) {
                        const _0xc2b4b4 = _0x1c8eb1;
                        _0x34c369(_0xc2b4b4(0x2c8), 'reject', _0xd6802c), _0x385d17(_0xd6802c);
                    }
                });
            });
        }
        function _0x55961d(_0x21ca7b) {
            const _0x30e40a = _0x5364a1;
            let _0x35b315 = new URL(_0x21ca7b), _0x5a1485 = _0x35b315?.[_0x30e40a(0x1d8)]?.[_0x30e40a(0x362)](_0x30e40a(0x358))?.[_0x30e40a(0x386)]('.')['at'](0x0);
            return _0x5a1485 ? atob(_0x5a1485) : null;
        }
        function _0x6873b() {
            const _0x5df298 = _0x5364a1;
            let _0x205f20 = null;
            return _0x15a917(_0x5df298(0x347))[_0x5df298(0x256)](function () {
                const _0x4eb66c = _0x5df298, _0x45a130 = /"APP_ID":"([0-9]+)"/ig, _0x2e41a1 = _0x15a917(this)['text']()[_0x4eb66c(0x35a)](_0x45a130);
                _0x2e41a1 != null && _0x205f20 == null && (_0x205f20 = [..._0x15a917(this)[_0x4eb66c(0x266)]()[_0x4eb66c(0x166)](_0x45a130)]);
            }), _0x205f20 ? _0x205f20['at'](0x0)['at'](-0x1) : null;
        }
        function _0x4c07af(_0x50d4ef) {
            const _0x2281f6 = _0x5364a1;
            _0x50d4ef ? (_0x15a917(_0x2281f6(0x35f))['removeClass']('x1s85apg'), _0x15a917(_0x2281f6(0x35f))['css'](_0x2281f6(0x3db), _0x2281f6(0x373))) : (_0x15a917(_0x2281f6(0x35f))[_0x2281f6(0x14c)](_0x2281f6(0x2cf)), _0x15a917(_0x2281f6(0x35f))[_0x2281f6(0x334)](_0x2281f6(0x3db), ''));
        }
        function _0x3a48b5(_0xd6198e) {
            const _0x2f9583 = _0x5364a1;
            let _0x30bc37 = _0x15a917(_0x2f9583(0x2f8) + _0xd6198e + '\x22]\x20span')[_0x2f9583(0x261)](function () {
                const _0x24351b = _0x2f9583;
                return _0x15a917(this)[_0x24351b(0x1f7)]()[_0x24351b(0x317)] === 0x0 && _0x15a917(this)[_0x24351b(0x262)]('svg')[_0x24351b(0x317)] === 0x0 && _0x15a917(this)[_0x24351b(0x266)]()?.[_0x24351b(0x2da)]() === _0xd6198e?.[_0x24351b(0x2da)]();
            })[_0x2f9583(0x1e1)](_0x2f9583(0x22e))[_0x2f9583(0x261)](function () {
                const _0x42db87 = _0x2f9583;
                return _0x15a917(this)[_0x42db87(0x266)]()?.['toLowerCase']() !== _0xd6198e?.[_0x42db87(0x2da)]();
            })['filter'](function () {
                const _0x13528c = _0x2f9583;
                return _0x15a917(this)[_0x13528c(0x1f7)]()['length'] > 0x1;
            })[_0x2f9583(0x27a)]();
            return _0x30bc37['length'] === 0x0 && (_0x30bc37 = _0x15a917(_0x2f9583(0x2f8) + _0xd6198e + '\x22]')[_0x2f9583(0x261)](function () {
                const _0x5a1ba9 = _0x2f9583;
                return _0x15a917(this)['find'](_0x5a1ba9(0x328))[_0x5a1ba9(0x317)] > 0x0;
            })[_0x2f9583(0x1e1)](_0x2f9583(0x22e))[_0x2f9583(0x261)](function () {
                const _0x463ae3 = _0x2f9583;
                return _0x15a917(this)[_0x463ae3(0x266)]()?.[_0x463ae3(0x2da)]() !== _0xd6198e?.['toLowerCase']();
            })[_0x2f9583(0x261)](function () {
                const _0x11665a = _0x2f9583;
                return _0x15a917(this)[_0x11665a(0x1f7)]()['length'] > 0x1;
            })[_0x2f9583(0x27a)]()), _0x30bc37[_0x2f9583(0x1f7)]()[_0x2f9583(0x261)](function () {
                const _0x8ac0a4 = _0x2f9583;
                return _0x15a917(this)[_0x8ac0a4(0x186)]() < 0xa;
            })['first']()[_0x2f9583(0x1f7)]();
        }
        function _0x330eea(_0x2bf8cb, _0x46c866) {
            const _0x3cc43c = _0x5364a1;
            _0x15a917('.circle_wrapper')[_0x3cc43c(0x317)] ? (_0x15a917(_0x3cc43c(0x23a))['text'](_0x2bf8cb + '/' + _0x46c866), _0x2bf8cb >= _0x46c866 && _0x15a917('.circle_wrapper')['fadeOut'](0xfa, function () {
                _0x15a917(this)['remove']();
            })) : _0x15a917(_0x3cc43c(0x17b))[_0x3cc43c(0x1be)](_0x3cc43c(0x1f4) + _0x2bf8cb + '/' + _0x46c866 + '</span></div>');
        }
        function _0x3fae0f(_0x145923, _0x244b91) {
            const _0x3d5a75 = _0x5364a1;
            let _0x41da7c = _0x145923 ? _0x3d5a75(0x158) : '';
            _0x15a917(_0x3d5a75(0x17b))[_0x3d5a75(0x1be)](_0x3d5a75(0x238) + _0x41da7c + _0x3d5a75(0x320)), _0x15a917(_0x3d5a75(0x161))['append'](_0x3d5a75(0x3cf) + _0x101960(_0x3d5a75(0x2aa)) + _0x3d5a75(0x242) + GM_info['script']['version'] + _0x3d5a75(0x413) + _0xc64512[_0x3d5a75(0x2aa)] + _0x3d5a75(0x1c8)), _0x244b91 && (_0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')['append'](_0x3d5a75(0x370)), _0x15a917(_0x3d5a75(0x157))[_0x3d5a75(0x1be)]('<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>' + _0x101960(_0x3d5a75(0x38f)) + _0x3d5a75(0x1f3)), _0x15a917(_0x3d5a75(0x157))['append'](_0x3d5a75(0x17c) + _0x101960('BATCH_DOWNLOAD_DIRECT') + _0x3d5a75(0x1f3)), _0x15a917(_0x3d5a75(0x161))[_0x3d5a75(0x1be)](_0x3d5a75(0x1e2) + _0x101960(_0x3d5a75(0x38c)) + _0x3d5a75(0x24c)));
        }
        function _0x412199(_0x40670c) {
            const _0x448e94 = _0x5364a1;
            _0x15a917(_0x448e94(0x2ee))[_0x448e94(0x317)] && (_0x40670c ? _0x15a917(_0x448e94(0x2ee))[_0x448e94(0x14c)]('hidden') : _0x15a917(_0x448e94(0x2ee))[_0x448e94(0x247)]('hidden'));
        }
        function _0x1cc5ec(_0x4b8ff7, _0x5e8091, _0x2b448e, _0x40e18d, _0x558cce, _0xe3cb39) {
            return new Promise(_0xf91fb5 => {
                setTimeout(() => {
                    const _0x5b24f9 = a0_0x5a53;
                    _0x4c07af(!![]), fetch(_0x4b8ff7)[_0x5b24f9(0x29f)](_0x57a7ae => {
                        return _0x57a7ae['blob']()['then'](_0x23032f => {
                            _0x4c07af(![]), _0x4e41fc(_0x4b8ff7, _0x23032f, _0x5e8091, _0x2b448e, _0x40e18d, _0x558cce, _0xe3cb39), _0xf91fb5(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x3b8b9c(_0x5dfa65, _0x576e1a) {
            const _0x3fd74d = _0x5364a1, _0x516c35 = document[_0x3fd74d(0x2e9)]('a');
            _0x516c35[_0x3fd74d(0x35d)] = URL[_0x3fd74d(0x1ed)](_0x5dfa65), _0x516c35[_0x3fd74d(0x1eb)] = _0x576e1a, _0x516c35[_0x3fd74d(0x1ef)](), _0x516c35[_0x3fd74d(0x163)]();
        }
        function _0x4e41fc(_0xe94d6b, _0x29145d, _0x2fb898, _0x501408, _0x64fbbc, _0x368867, _0xac9235) {
            const _0x87b90b = _0x5364a1;
            _0x64fbbc = parseInt(_0x64fbbc['toString']()[_0x87b90b(0x154)](0xd, '0'));
            _0x201e99[_0x87b90b(0x34f)] && (_0x64fbbc = parseInt(_0x64fbbc[_0x87b90b(0x19c)]()['padEnd'](0xd, '0')));
            const _0x260079 = new Date(_0x64fbbc), _0x3bb075 = new URL(_0xe94d6b)[_0x87b90b(0x156)][_0x87b90b(0x386)]('/')['at'](-0x1)[_0x87b90b(0x386)]('.')[_0x87b90b(0x155)](0x0, -0x1)[_0x87b90b(0x25c)]('.'), _0x3fc3fd = _0x260079['getFullYear']()['toString'](), _0x24a2e0 = (_0x260079[_0x87b90b(0x3cb)]() + 0x1)[_0x87b90b(0x19c)]()[_0x87b90b(0x1d2)](0x2, '0'), _0x23632d = _0x260079[_0x87b90b(0x3d7)]()[_0x87b90b(0x19c)]()[_0x87b90b(0x1d2)](0x2, '0'), _0x41e348 = _0x260079[_0x87b90b(0x197)]()[_0x87b90b(0x19c)]()['padStart'](0x2, '0'), _0x196356 = _0x260079['getMinutes']()[_0x87b90b(0x19c)]()[_0x87b90b(0x1d2)](0x2, '0'), _0x49f6de = _0x260079[_0x87b90b(0x2a0)]()['toString']()['padStart'](0x2, '0');
            var _0x84fe64 = _0x1148d1['fileRenameFormat']['toUpperCase'](), _0x47cd44 = _0xac9235 ?? '', _0x329981 = {
                    '%USERNAME%': _0x2fb898,
                    '%SOURCE_TYPE%': _0x501408,
                    '%SHORTCODE%': _0x47cd44,
                    '%YEAR%': _0x3fc3fd,
                    '%2-YEAR%': _0x3fc3fd[_0x87b90b(0x414)](-0x2),
                    '%MONTH%': _0x24a2e0,
                    '%DAY%': _0x23632d,
                    '%HOUR%': _0x41e348,
                    '%MINUTE%': _0x196356,
                    '%SECOND%': _0x49f6de,
                    '%ORIGINAL_NAME%': _0x3bb075,
                    '%ORIGINAL_NAME_FIRST%': _0x3bb075['split']('_')['at'](0x0)
                };
            _0x84fe64 = _0x84fe64[_0x87b90b(0x36c)](/%[\w\-]+%/g, function (_0x147c8c) {
                return _0x329981[_0x147c8c] || _0x147c8c;
            });
            const _0xedc5cd = _0x2fb898 + '_' + _0x3bb075 + '.' + _0x368867, _0x4001f3 = _0x201e99[_0x87b90b(0x350)] ? _0x84fe64 + '.' + _0x368867 : _0xedc5cd;
            _0x201e99[_0x87b90b(0x3a5)] && _0x368867 === 'jpg' && _0xac9235 && _0x501408 === 'photo' && (_0x29145d[_0x87b90b(0x2f7)] === _0x87b90b(0x199) || _0x29145d[_0x87b90b(0x2f7)] === _0x87b90b(0x2bf)) ? _0x3c4de5(_0x29145d, _0xac9235)['then'](_0x740449 => _0x3b8b9c(_0x740449, _0x4001f3))[_0x87b90b(0x363)](_0x42e8bf => {
                const _0x36a783 = _0x87b90b;
                console[_0x36a783(0x2c0)](_0x36a783(0x24f), _0x42e8bf), _0x3b8b9c(_0x29145d, _0x4001f3);
            }) : _0x3b8b9c(_0x29145d, _0x4001f3);
        }
        async function _0x3c4de5(_0x9d9752, _0x5f12a0) {
            const _0x5e7f33 = _0x5364a1, _0x362e16 = (..._0x7898e8) => {
                    const _0x28d932 = a0_0x5a53, _0x3de10b = _0x7898e8[_0x28d932(0x21c)]((_0x271900, _0x175f3d) => _0x271900 + _0x175f3d['length'], 0x0), _0x356ba0 = new Uint8Array(_0x3de10b);
                    let _0x63c74 = 0x0;
                    for (const _0x5d1d6b of _0x7898e8) {
                        _0x356ba0[_0x28d932(0x2b4)](_0x5d1d6b, _0x63c74), _0x63c74 += _0x5d1d6b['length'];
                    }
                    return _0x356ba0;
                }, _0x188a07 = _0x3099b7 => {
                    const _0x3b8f94 = a0_0x5a53, _0x4f8221 = new Uint8Array(0x4);
                    return new DataView(_0x4f8221[_0x3b8f94(0x26c)])[_0x3b8f94(0x2d4)](0x0, _0x3099b7, !![]), _0x4f8221;
                }, _0x142d06 = _0x51ede4 => new TextEncoder()[_0x5e7f33(0x34b)](_0x51ede4), _0x50f6ad = (_0x29cfec, _0x45bca6) => String[_0x5e7f33(0x1a8)](_0x29cfec['getUint8'](_0x45bca6), _0x29cfec[_0x5e7f33(0x36d)](_0x45bca6 + 0x1), _0x29cfec['getUint8'](_0x45bca6 + 0x2), _0x29cfec[_0x5e7f33(0x36d)](_0x45bca6 + 0x3)), _0xf238be = new Uint8Array(await _0x9d9752[_0x5e7f33(0x155)](0x0, 0xc)[_0x5e7f33(0x3ab)]()), _0x338f41 = _0xf238be[0x0] === 0xff && _0xf238be[0x1] === 0xd8, _0x548ca7 = _0xf238be[_0x5e7f33(0x317)] >= 0xc && String[_0x5e7f33(0x1a8)](..._0xf238be[_0x5e7f33(0x310)](0x0, 0x4)) === _0x5e7f33(0x2ec) && String['fromCharCode'](..._0xf238be[_0x5e7f33(0x310)](0x8, 0xc)) === _0x5e7f33(0x21b);
            if (!_0x338f41 && !_0x548ca7)
                throw new Error(_0x5e7f33(0x2d7));
            const _0x276b94 = _0x142d06(_0x5e7f33(0x150) + _0x5f12a0 + '/\x00'), _0x100494 = _0x142d06(_0x5e7f33(0x2f5)), _0x5ebe56 = Uint8Array[_0x5e7f33(0x27f)]([
                    0x49,
                    0x49,
                    0x2a,
                    0x0,
                    0x8,
                    0x0,
                    0x0,
                    0x0
                ]), _0x445438 = Uint8Array[_0x5e7f33(0x27f)]([
                    0x1,
                    0x0
                ]), _0xe45cf5 = _0x362e16(Uint8Array[_0x5e7f33(0x27f)]([
                    0xe,
                    0x1,
                    0x2,
                    0x0
                ]), _0x188a07(_0x276b94[_0x5e7f33(0x317)]), _0x188a07(0x8 + 0x2 + 0xc + 0x4)), _0x19788d = _0x362e16(_0x5ebe56, _0x445438, _0xe45cf5, _0x188a07(0x0), _0x276b94);
            if (_0x338f41) {
                const _0x2eb566 = await _0x9d9752['arrayBuffer'](), _0x4bb954 = new DataView(_0x2eb566), _0x4ccf9d = _0x362e16(_0x100494, _0x19788d), _0x61613d = new Uint8Array(0x4);
                new DataView(_0x61613d['buffer'])['setUint16'](0x0, 0xffe1), new DataView(_0x61613d[_0x5e7f33(0x26c)])['setUint16'](0x2, _0x4ccf9d[_0x5e7f33(0x317)] + 0x2);
                const _0x5bc14d = _0x362e16(_0x61613d, _0x4ccf9d), _0x33a221 = [new Uint8Array(_0x2eb566, 0x0, 0x2)];
                let _0xd691fd = 0x2, _0x3050bb = ![];
                while (_0xd691fd < _0x4bb954[_0x5e7f33(0x1d3)]) {
                    const _0x2b9b1a = _0x4bb954[_0x5e7f33(0x1b8)](_0xd691fd);
                    if ((_0x2b9b1a & 0xff00) !== 0xff00)
                        break;
                    if (_0x2b9b1a === 0xffda) {
                        if (!_0x3050bb)
                            _0x33a221[_0x5e7f33(0x2d3)](_0x5bc14d);
                        _0x33a221[_0x5e7f33(0x2d3)](new Uint8Array(_0x2eb566, _0xd691fd));
                        break;
                    }
                    const _0x32ef81 = _0x4bb954[_0x5e7f33(0x1b8)](_0xd691fd + 0x2) + 0x2;
                    if (_0x2b9b1a === 0xffe1) {
                        _0xd691fd += _0x32ef81;
                        continue;
                    }
                    _0x33a221[_0x5e7f33(0x2d3)](new Uint8Array(_0x2eb566, _0xd691fd, _0x32ef81)), _0xd691fd += _0x32ef81;
                }
                const _0x4c4a50 = _0x33a221[_0x5e7f33(0x21c)]((_0x591201, _0x35fca1) => _0x591201 + _0x35fca1['length'], 0x0), _0x12f809 = new Uint8Array(_0x4c4a50);
                let _0x150478 = 0x0;
                return _0x33a221[_0x5e7f33(0x1b3)](_0x5a8a95 => {
                    const _0x266475 = _0x5e7f33;
                    _0x12f809['set'](_0x5a8a95, _0x150478), _0x150478 += _0x5a8a95[_0x266475(0x317)];
                }), new Blob([_0x12f809], { 'type': 'image/jpeg' });
            }
            const _0x1ad389 = await _0x9d9752[_0x5e7f33(0x3ab)](), _0x468410 = new DataView(_0x1ad389), _0xc75cc0 = [];
            let _0x572990 = -0x1, _0x2d7973 = 0xc;
            while (_0x2d7973 < _0x468410[_0x5e7f33(0x1d3)]) {
                const _0x4057dc = _0x50f6ad(_0x468410, _0x2d7973), _0x1badca = _0x468410[_0x5e7f33(0x32b)](_0x2d7973 + 0x4, !![]), _0xfa89fe = _0x1badca & 0x1, _0x4665f1 = 0x8 + _0x1badca + _0xfa89fe;
                if (_0x4057dc !== _0x5e7f33(0x230) && _0x4057dc !== _0x5e7f33(0x30e)) {
                    _0xc75cc0[_0x5e7f33(0x2d3)](new Uint8Array(_0x1ad389, _0x2d7973, _0x4665f1));
                    if (_0x4057dc === 'VP8X')
                        _0x572990 = _0xc75cc0[_0x5e7f33(0x317)] - 0x1;
                }
                _0x2d7973 += _0x4665f1;
            }
            let _0x40805a = _0x362e16(_0x142d06(_0x5e7f33(0x230)), _0x188a07(_0x100494['length'] + _0x19788d[_0x5e7f33(0x317)]), _0x100494, _0x19788d);
            if (_0x40805a[_0x5e7f33(0x317)] & 0x1)
                _0x40805a = _0x362e16(_0x40805a, Uint8Array['of'](0x0));
            if (_0x572990 !== -0x1) {
                const _0xdd946e = new Uint8Array(_0xc75cc0[_0x572990]);
                _0xdd946e[0x8] |= 0x10, _0xc75cc0[_0x572990] = _0xdd946e, _0xc75cc0[_0x5e7f33(0x289)](_0x572990 + 0x1, 0x0, _0x40805a);
            } else
                _0xc75cc0[_0x5e7f33(0x2d3)](_0x40805a);
            const _0x4a175e = _0xc75cc0['reduce']((_0x3220c7, _0x3e43d4) => _0x3220c7 + _0x3e43d4[_0x5e7f33(0x317)], 0x0), _0x3fb67f = _0x362e16(_0x142d06(_0x5e7f33(0x2ec)), _0x188a07(_0x4a175e + 0x4), _0x142d06('WEBP')), _0x28785f = _0x362e16(_0x3fb67f, ..._0xc75cc0);
            return new Blob([_0x28785f], { 'type': _0x5e7f33(0x2bf) });
        }
        async function _0x3d94b9(_0x35b82d, _0x354f7f) {
            const _0x120f04 = _0x5364a1;
            let _0x5a693a = new Date()[_0x120f04(0x160)](), _0x4b2423 = Math[_0x120f04(0x405)](_0x5a693a / 0x3e8), _0x4ede64 = _0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x3b0)) ? _0x15a917(_0x35b82d)[_0x120f04(0x32d)]('data-username') : _0x1148d1[_0x120f04(0x286)];
            !_0x4ede64 && _0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x388)) && (_0x34c369(_0x120f04(0x3fc), _0x15a917(_0x35b82d)['attr'](_0x120f04(0x364))), _0x4ede64 = await _0xe14e2c(_0x15a917(_0x35b82d)['attr']('data-path'))['catch'](_0x1b716a => {
                const _0x531374 = _0x120f04;
                _0x34c369('get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:', _0x1b716a[_0x531374(0x1ae)]);
            }), _0x4ede64 == null && (_0x4ede64 = _0x120f04(0x2e3)));
            _0x201e99[_0x120f04(0x34f)] && _0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x281)) && (_0x4b2423 = parseInt(_0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x281))));
            if (_0x201e99['FORCE_RESOURCE_VIA_MEDIA']) {
                _0x4c07af(!![]);
                let _0x3e9a42 = await _0x542021(_0x15a917(_0x35b82d)[_0x120f04(0x32d)]('media-id'));
                _0x4c07af(![]);
                if (_0x3e9a42['status'] === 'ok') {
                    var _0x363cfd = null;
                    _0x3e9a42[_0x120f04(0x222)][0x0][_0x120f04(0x35c)] ? _0x363cfd = _0x3e9a42[_0x120f04(0x222)][0x0][_0x120f04(0x35c)][0x0][_0x120f04(0x1c5)] : (_0x3e9a42['items'][0x0][_0x120f04(0x1ad)][_0x120f04(0x3f2)]['sort'](function (_0x3bd240, _0x23a763) {
                        const _0x5e280f = _0x120f04;
                        let _0x1d3f73 = new URL(_0x3bd240[_0x5e280f(0x1c5)])[_0x5e280f(0x1d8)][_0x5e280f(0x362)](_0x5e280f(0x2a7)), _0x163611 = new URL(_0x23a763[_0x5e280f(0x1c5)])['searchParams'][_0x5e280f(0x362)]('stp');
                        if (_0x1d3f73 && _0x163611) {
                            if (_0x1d3f73['length'] > _0x163611['length'])
                                return 0x1;
                            if (_0x1d3f73[_0x5e280f(0x317)] < _0x163611[_0x5e280f(0x317)])
                                return -0x1;
                        } else {
                            if (_0x3bd240['width'] < _0x23a763['width'])
                                return 0x1;
                            if (_0x3bd240[_0x5e280f(0x3d9)] > _0x23a763[_0x5e280f(0x3d9)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x363cfd = _0x3e9a42[_0x120f04(0x222)][0x0][_0x120f04(0x1ad)]['candidates'][0x0][_0x120f04(0x1c5)]);
                    if (_0x354f7f) {
                        let _0x1dc8f0 = new URL(_0x363cfd);
                        _0x1dc8f0[_0x120f04(0x349)] = 'scontent.cdninstagram.com', _0x2a3047(_0x1dc8f0[_0x120f04(0x35d)]);
                    } else
                        _0x1cc5ec(_0x363cfd, _0x4ede64, _0x15a917(_0x35b82d)[_0x120f04(0x32d)]('data-name'), _0x4b2423, _0x15a917(_0x35b82d)[_0x120f04(0x32d)]('data-type'), _0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x388)));
                } else {
                    if (_0x201e99[_0x120f04(0x290)]) {
                        if (_0x354f7f) {
                            let _0x3e9bb1 = new URL(_0x15a917(_0x35b82d)['attr'](_0x120f04(0x364)));
                            _0x3e9bb1[_0x120f04(0x349)] = 'scontent.cdninstagram.com', _0x2a3047(_0x3e9bb1['href']);
                        } else
                            _0x1cc5ec(_0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x364)), _0x4ede64, _0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x28b)), _0x4b2423, _0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x387)), _0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x388)));
                    } else
                        alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x3e9a42[_0x120f04(0x1ae)]);
                    _0x34c369(_0x3e9a42);
                }
            } else
                _0x1cc5ec(_0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x364)), _0x4ede64, _0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x28b)), _0x4b2423, _0x15a917(_0x35b82d)[_0x120f04(0x32d)](_0x120f04(0x387)), _0x15a917(_0x35b82d)['attr'](_0x120f04(0x388)));
        }
        function _0x35b7ca() {
            const _0x261393 = _0x5364a1;
            for (let _0x35d43f of _0x1148d1[_0x261393(0x159)]) {
                _0x34c369('GM_unregisterMenuCommand', _0x35d43f), GM_unregisterMenuCommand(_0x35d43f);
            }
            _0x1148d1[_0x261393(0x159)]['push'](GM_registerMenuCommand(_0x101960(_0x261393(0x395)), () => {
                _0x389774();
            }, { 'accessKey': 'w' })), _0x1148d1['registerMenuIds'][_0x261393(0x2d3)](GM_registerMenuCommand(_0x101960('DONATE'), () => {
                GM_openInTab('https://ko-fi.com/snkoarashi', { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x1148d1[_0x261393(0x159)][_0x261393(0x2d3)](GM_registerMenuCommand(_0x101960(_0x261393(0x27b)), () => {
                _0x1664fd();
            }, { 'accessKey': 'z' })), _0x1148d1['registerMenuIds'][_0x261393(0x2d3)](GM_registerMenuCommand(_0x101960(_0x261393(0x3e5)), () => {
                _0x245037();
            }, { 'accessKey': 'f' })), _0x1148d1[_0x261393(0x159)][_0x261393(0x2d3)](GM_registerMenuCommand(_0x101960('CHECK_UPDATE_MENU'), () => {
                _0x33ed98();
            }, { 'accessKey': 'c' })), _0x1148d1[_0x261393(0x159)][_0x261393(0x2d3)](GM_registerMenuCommand(_0x101960(_0x261393(0x33d)), () => {
                _0x15478a();
            }, { 'accessKey': 'r' }));
        }
        function _0xb8d307(_0x73bc87) {
            const _0x461a93 = _0x5364a1;
            if (!_0x201e99['CHECK_UPDATE'])
                return;
            const _0x1bce01 = GM_getValue(_0x461a93(0x1ac)) ?? new Date()[_0x461a93(0x160)](), _0x3bf2fc = new Date()[_0x461a93(0x160)]();
            _0x3bf2fc > parseInt(_0x1bce01) + _0x73bc87 * 0x3e8 && (GM_setValue('G_CHECK_TIMESTAMP', new Date()[_0x461a93(0x160)]()), _0x33ed98());
        }
        function _0x33ed98() {
            const _0x58fdb9 = _0x5364a1, _0x58756d = GM_info[_0x58fdb9(0x398)]['version'], _0x145354 = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': _0x58fdb9(0x1ce),
                'url': _0x145354,
                'onload': function (_0x48c76e) {
                    const _0x454f14 = _0x58fdb9, _0x351d19 = _0x48c76e[_0x454f14(0x2ae)], _0x3b27b6 = _0x351d19[_0x454f14(0x35a)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x3b27b6 && _0x3b27b6[0x1]) {
                        const _0x22b4f2 = _0x3b27b6[0x1];
                        _0x34c369(_0x454f14(0x351), _0x58756d, '|', _0x454f14(0x1fc), _0x22b4f2), _0x22b4f2 !== _0x58756d && typeof this[_0x454f14(0x25e)] === _0x454f14(0x3dc) ? (this[_0x454f14(0x25e)] = null, GM_notification({
                            'text': _0x101960('NOTICE_UPDATE_CONTENT'),
                            'title': _0x101960(_0x454f14(0x293)),
                            'tag': _0x454f14(0x233),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x454f14(0x359),
                            'onclick': _0x52ea6a => {
                                const _0x105707 = _0x454f14;
                                _0x52ea6a?.[_0x105707(0x301)]();
                                var _0x1e7467 = GM_openInTab(GM_info[_0x105707(0x398)][_0x105707(0x297)]);
                                setTimeout(() => {
                                    const _0x3df4ad = _0x105707;
                                    _0x1e7467[_0x3df4ad(0x399)]();
                                }, 0xfa);
                            }
                        })) : _0x34c369(_0x454f14(0x3c9));
                    } else
                        console[_0x454f14(0x2c0)](_0x454f14(0x246));
                }
            });
        }
        function _0x389774() {
            const _0x50d67a = _0x5364a1;
            _0x15a917(_0x50d67a(0x2ee))[_0x50d67a(0x163)](), _0x3fae0f(), _0x15a917(_0x50d67a(0x210))['text']('Preference\x20Settings'), _0x15a917(_0x50d67a(0x322))[_0x50d67a(0x1be)](_0x50d67a(0x338));
            for (let _0x1bc7af in _0xe2f8cb) {
                _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect')[_0x50d67a(0x1be)](_0x50d67a(0x35b) + _0x1bc7af + '\x22\x20' + (_0x1148d1[_0x50d67a(0x3e4)] == _0x1bc7af ? _0x50d67a(0x15f) : '') + '>' + _0xe2f8cb[_0x1bc7af] + _0x50d67a(0x15d));
            }
            for (let _0x52c779 in _0x201e99) {
                _0x15a917(_0x50d67a(0x22b))['append']('<label\x20class=\x22globalSettings' + (_0x5a5ec5[_0x50d67a(0x390)](_0x52c779) ? _0x50d67a(0x203) : '') + _0x50d67a(0x182) + _0x101960(_0x52c779 + _0x50d67a(0x250)) + _0x50d67a(0x378) + (_0x52c779 + _0x50d67a(0x250)) + _0x50d67a(0x189) + _0x52c779 + '\x22>' + _0x101960(_0x52c779) + _0x50d67a(0x20c) + _0x52c779 + _0x50d67a(0x2ca) + (_0x201e99[_0x52c779] === !![] ? 'checked' : '') + _0x50d67a(0x2be)), _0x52c779 === _0x50d67a(0x190) && _0x15a917(_0x50d67a(0x23c) + _0x52c779 + '\x22]')[_0x50d67a(0x32a)]('label')['on'](_0x50d67a(0x3f0), function (_0x4c7348) {
                    const _0x5f35b0 = _0x50d67a;
                    _0x4c7348[_0x5f35b0(0x301)](), _0x15a917(this)[_0x5f35b0(0x262)](_0x5f35b0(0x339))[_0x5f35b0(0x317)] === 0x0 && (_0x15a917(this)[_0x5f35b0(0x1be)](_0x5f35b0(0x1f6)), _0x15a917(this)[_0x5f35b0(0x1f7)]('#tempWrapper')['append'](_0x5f35b0(0x3e1) + _0x1148d1[_0x5f35b0(0x29e)] + _0x5f35b0(0x380)), _0x15a917(this)[_0x5f35b0(0x1f7)](_0x5f35b0(0x339))[_0x5f35b0(0x1be)]('<input\x20value=\x22' + _0x1148d1[_0x5f35b0(0x29e)] + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x15a917(this)[_0x5f35b0(0x1f7)](_0x5f35b0(0x339))['append']('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0xc64512[_0x5f35b0(0x2aa)] + _0x5f35b0(0x1fe)));
                }), _0x52c779 === _0x50d67a(0x350) && _0x15a917(_0x50d67a(0x23c) + _0x52c779 + '\x22]')[_0x50d67a(0x32a)](_0x50d67a(0x1b9))['on'](_0x50d67a(0x3f0), function (_0x198a48) {
                    const _0x2a4c37 = _0x50d67a;
                    _0x198a48['preventDefault'](), _0x15a917(this)['find']('#tempWrapper')[_0x2a4c37(0x317)] === 0x0 && (_0x15a917(this)[_0x2a4c37(0x1be)](_0x2a4c37(0x1f6)), _0x15a917(this)[_0x2a4c37(0x1f7)](_0x2a4c37(0x339))['append'](_0x2a4c37(0x2dd) + _0x1148d1[_0x2a4c37(0x294)] + _0x2a4c37(0x374)), _0x15a917(this)[_0x2a4c37(0x1f7)](_0x2a4c37(0x339))['append'](_0x2a4c37(0x1d1) + _0xc64512['CLOSE'] + '</div>'));
                });
            }
        }
        function _0x1664fd() {
            const _0x184579 = _0x5364a1;
            _0x15a917(_0x184579(0x2ee))[_0x184579(0x163)](), _0x3fae0f(), _0x15a917('.IG_POPUP_DIG\x20#post_info')[_0x184579(0x266)](_0x184579(0x28e)), _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x184579(0x1be)]('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x184579(0x1be)]('<span\x20style=\x22display:block;text-align:center;\x22>'), _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x184579(0x1be)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x101960(_0x184579(0x17e)) + _0x184579(0x384)), _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x184579(0x1be)](_0x184579(0x1e4) + _0x101960(_0x184579(0x315)) + _0x184579(0x384)), _0x15a917(_0x184579(0x2a8))[_0x184579(0x1be)](_0x184579(0x232) + _0x101960(_0x184579(0x37f)) + '</a></button><br/>'), _0x15a917(_0x184579(0x2a8))[_0x184579(0x1be)](_0x184579(0x2ce) + _0x101960(_0x184579(0x235)) + '</a></button>'), _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append'](_0x184579(0x253) + _0x101960(_0x184579(0x255)) + '</a></button>');
        }
        function _0x245037() {
            const _0x3c9a9e = _0x5364a1;
            _0x15a917(_0x3c9a9e(0x2ee))[_0x3c9a9e(0x163)](), _0x3fae0f(), _0x15a917(_0x3c9a9e(0x210))[_0x3c9a9e(0x266)](_0x3c9a9e(0x1aa)), _0x15a917(_0x3c9a9e(0x22b))[_0x3c9a9e(0x1be)](_0x3c9a9e(0x3d3)), _0x15a917(_0x3c9a9e(0x2a8))[_0x3c9a9e(0x1be)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>' + _0x101960(_0x3c9a9e(0x198)) + _0x3c9a9e(0x384)), _0x15a917(_0x3c9a9e(0x2a8))[_0x3c9a9e(0x1be)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x101960('REPORT_GITHUB') + _0x3c9a9e(0x384)), _0x15a917(_0x3c9a9e(0x2a8))[_0x3c9a9e(0x1be)](_0x3c9a9e(0x253) + _0x101960(_0x3c9a9e(0x255)) + '</a></button>');
        }
        function _0x2a3047(_0xe522d5) {
            const _0x173d2b = _0x5364a1;
            var _0x392bb2 = document[_0x173d2b(0x2e9)]('a');
            _0x392bb2['href'] = _0xe522d5, _0x392bb2['target'] = _0x173d2b(0x2c4), document[_0x173d2b(0x17b)][_0x173d2b(0x344)](_0x392bb2), _0x392bb2[_0x173d2b(0x1ef)](), _0x392bb2[_0x173d2b(0x163)]();
        }
        function _0x15478a() {
            const _0xd301d7 = _0x5364a1;
            clearInterval(_0x1148d1[_0xd301d7(0x1a1)]), _0x1148d1['GL_registerEventList']['forEach'](_0x9af18d => {
                const _0x571218 = _0xd301d7;
                _0x9af18d[_0x571218(0x3a8)][_0x571218(0x1b3)](_0x1f6481 => {
                    const _0x353842 = _0x571218;
                    _0x15a917(_0x9af18d[_0x353842(0x148)])[_0x353842(0x37b)](_0x353842(0x1ef), _0x1f6481);
                });
            }), _0x1148d1[_0xd301d7(0x2f0)] = [], _0x15a917(_0xd301d7(0x18c))['remove'](), _0x15a917(_0xd301d7(0x2f4))[_0xd301d7(0x163)](), _0x15a917(_0xd301d7(0x32e))[_0xd301d7(0x15a)](_0xd301d7(0x202)), _0x1148d1[_0xd301d7(0x2b0)] = ![], _0x1148d1[_0xd301d7(0x16f)] = ![], _0x1148d1['currentURL'] = location[_0xd301d7(0x35d)], _0x1148d1[_0xd301d7(0x178)][_0xd301d7(0x1dd)](), _0x34c369(_0xd301d7(0x3c4));
        }
        function _0x34c369(..._0x6d90df) {
            const _0x4ff572 = _0x5364a1;
            var _0x4f27f3 = new Date();
            _0x1148d1[_0x4ff572(0x31b)][_0x4ff572(0x2d3)]({
                'time': _0x4f27f3['getTime'](),
                'content': [..._0x6d90df]
            }), _0x1148d1[_0x4ff572(0x31b)]['length'] > 0x3e8 && (_0x1148d1[_0x4ff572(0x31b)] = [
                {
                    'time': _0x4f27f3['getTime'](),
                    'content': ['logger\x20sliced']
                },
                ..._0x1148d1[_0x4ff572(0x31b)][_0x4ff572(0x155)](-0x3e7)
            ]), console[_0x4ff572(0x1bd)]('[' + _0x4f27f3[_0x4ff572(0x1af)]() + ']', ..._0x6d90df);
        }
        function _0x3f7cd9() {
            const _0x232838 = _0x5364a1;
            for (let _0x3a726e in _0x201e99) {
                GM_getValue(_0x3a726e) != null && typeof GM_getValue(_0x3a726e) === _0x232838(0x2cd) && (_0x201e99[_0x3a726e] = GM_getValue(_0x3a726e), _0x3a726e === 'MODIFY_VIDEO_VOLUME' && GM_getValue(_0x3a726e) !== !![] && (_0x1148d1['videoVolume'] = 0x1));
            }
        }
        function _0x32b878(_0x5257f1, _0x3c1d40, _0x129507, _0x20217b = '') {
            const _0x41e28e = _0x5364a1;
            _0x3c1d40[_0x41e28e(0x262)](_0x41e28e(0x1a2))[_0x41e28e(0x317)] === 0x0 ? (_0x3c1d40[_0x41e28e(0x1be)](_0x41e28e(0x323) + _0x20217b + _0x41e28e(0x374)), _0x3c1d40['find'](_0x41e28e(0x1a2))[_0x41e28e(0x1be)]('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x1148d1[_0x41e28e(0x29e)] + _0x41e28e(0x31e)), _0x3c1d40[_0x41e28e(0x262)]('div.volume_slider\x20input')[_0x41e28e(0x32d)](_0x41e28e(0x368), _0x41e28e(0x1d5) + (_0x1148d1['videoVolume'] * 0x64 + '%')), _0x3c1d40['find']('div.volume_slider\x20input')['on']('input', function () {
                const _0x5aae18 = _0x41e28e;
                var _0x5e9d4c = _0x15a917(this)[_0x5aae18(0x1f1)]() * 0x64 + '%';
                _0x1148d1[_0x5aae18(0x29e)] = _0x15a917(this)[_0x5aae18(0x1f1)](), GM_setValue('G_VIDEO_VOLUME', _0x15a917(this)[_0x5aae18(0x1f1)]()), _0x15a917(this)[_0x5aae18(0x32d)](_0x5aae18(0x368), _0x5aae18(0x1d5) + _0x5e9d4c), _0x5257f1[_0x5aae18(0x256)](function () {
                    const _0x15982b = _0x5aae18;
                    _0x34c369('(' + _0x129507 + ')', 'video\x20volume\x20changed\x20#slider'), this[_0x15982b(0x30c)] = _0x1148d1[_0x15982b(0x29e)];
                });
            }), _0x3c1d40[_0x41e28e(0x262)](_0x41e28e(0x29c))['on'](_0x41e28e(0x354), function () {
                const _0x3643df = _0x41e28e;
                var _0x34c1bd = _0x1148d1[_0x3643df(0x29e)] * 0x64 + '%';
                _0x15a917(this)[_0x3643df(0x32d)](_0x3643df(0x368), _0x3643df(0x1d5) + _0x34c1bd), _0x15a917(this)[_0x3643df(0x1f1)](_0x1148d1[_0x3643df(0x29e)]), _0x5257f1[_0x3643df(0x256)](function () {
                    const _0x2b99a7 = _0x3643df;
                    _0x34c369('(' + _0x129507 + ')', _0x2b99a7(0x303)), this[_0x2b99a7(0x30c)] = _0x1148d1[_0x2b99a7(0x29e)];
                });
            }), _0x3c1d40['find'](_0x41e28e(0x1a2))['on'](_0x41e28e(0x1ef), function (_0xe9c948) {
                const _0x2f9541 = _0x41e28e;
                _0xe9c948[_0x2f9541(0x2fb)](), _0xe9c948['preventDefault']();
            })) : _0x3c1d40[_0x41e28e(0x262)](_0x41e28e(0x1a2))[_0x41e28e(0x163)]();
        }
        var _0x1a7c9b = null;
        function _0x15f723(_0x55a0cf) {
            const _0x37cbc4 = _0x5364a1;
            _0x3ec855(), _0x15a917(_0x37cbc4(0x17b))['append']('<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22display:\x20flex;filter:\x20invert(1);gap:\x208px;margin-right:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_left\x22\x20style=\x22cursor:\x20pointer;\x22>' + _0xc64512[_0x37cbc4(0x270)] + _0x37cbc4(0x26f) + _0xc64512[_0x37cbc4(0x270)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>' + _0xc64512[_0x37cbc4(0x2aa)] + _0x37cbc4(0x2d2));
            const _0x25d153 = _0x15a917('#imageViewer'), _0xe0972 = _0x15a917(_0x37cbc4(0x2b8)), _0x2e12ef = _0x15a917(_0x37cbc4(0x39a)), _0x38f1f1 = _0x15a917(_0x37cbc4(0x263)), _0x443cac = _0x15a917('#iv_header'), _0x45c182 = _0x15a917(_0x37cbc4(0x34e)), _0x1b7f44 = _0x15a917(_0x37cbc4(0x237)), _0x2f1167 = _0x15a917('#rotate_left'), _0x3b1d87 = _0x15a917(_0x37cbc4(0x3ba));
            _0x1b7f44[_0x37cbc4(0x32d)](_0x37cbc4(0x260), _0x55a0cf), _0x25d153[_0x37cbc4(0x334)](_0x37cbc4(0x1c1), 'flex'), _0x2e12ef[_0x37cbc4(0x334)](_0x37cbc4(0x16c), _0x37cbc4(0x3b1)), _0x2e12ef[_0x37cbc4(0x334)](_0x37cbc4(0x15b), _0x37cbc4(0x2b9)), _0x38f1f1[_0x37cbc4(0x334)](_0x37cbc4(0x16c), _0x37cbc4(0x195)), _0x38f1f1[_0x37cbc4(0x334)](_0x37cbc4(0x15b), _0x37cbc4(0x2b9)), _0x2e12ef[_0x37cbc4(0x334)]('will-change', 'transform'), _0x38f1f1[_0x37cbc4(0x334)](_0x37cbc4(0x217), _0x37cbc4(0x3c5));
            let _0x31c5bc = 0x0, _0x2f3b14 = 0x1, _0x21e7cd = 0x0, _0x5296e6 = 0x0, _0x2f82f2 = ![], _0x399f1e = ![], _0x1dfb49, _0x19a485;
            var _0x6548a3 = {
                'x': 0x0,
                'y': 0x0
            };
            _0x1a7c9b = setInterval(() => {
                const _0x1490d7 = {
                    'x': _0x21e7cd,
                    'y': _0x5296e6
                };
                _0x1490d7['x'] !== _0x6548a3['x'] || _0x1490d7['y'] !== _0x6548a3['y'] ? _0x399f1e = !![] : _0x399f1e = ![], _0x6548a3 = _0x1490d7;
            }, 0x64), _0x1b7f44['on'](_0x37cbc4(0x3a7), () => {
                _0x21e7cd = 0x0, _0x5296e6 = 0x0, _0x2087fe();
            }), _0x1b7f44['on'](_0x37cbc4(0x274), _0x2a1996 => {
                const _0x4e7750 = _0x37cbc4;
                _0x2a1996[_0x4e7750(0x301)]();
            }), _0x1b7f44['on']('click', _0x4512a3 => {
                const _0x2844fc = _0x37cbc4;
                _0x4512a3[_0x2844fc(0x301)](), _0x4512a3[_0x2844fc(0x2fb)](), !_0x399f1e && (_0x2f3b14 <= 0x1 ? _0x54ab1a(_0x4512a3, Math[_0x2844fc(0x3e9)](Math['max'](0x1, _0x2f3b14 + 1.25), 0x5)) : (_0x2f3b14 = 0x1, _0x21e7cd = 0x0, _0x5296e6 = 0x0), _0x2087fe());
            }), _0xe0972['on'](_0x37cbc4(0x28d), _0x379604 => {
                const _0x374b51 = _0x37cbc4;
                _0x379604[_0x374b51(0x301)](), _0x54ab1a(_0x379604);
            }), _0x25d153['on'](_0x37cbc4(0x28d), _0x5be66b => {
                const _0x4c0f9f = _0x37cbc4;
                _0x5be66b[_0x4c0f9f(0x301)]();
            }), _0x1b7f44['on'](_0x37cbc4(0x244), _0x5c87d9 => {
                const _0x33ecd3 = _0x37cbc4;
                if (_0x2f3b14 == 0x1)
                    return;
                _0x2f82f2 = !![], _0x1dfb49 = _0x5c87d9[_0x33ecd3(0x416)] - _0x21e7cd, _0x19a485 = _0x5c87d9[_0x33ecd3(0x30d)] - _0x5296e6, _0x1b7f44['css'](_0x33ecd3(0x329), _0x33ecd3(0x26a));
            }), _0x1b7f44['on'](_0x37cbc4(0x361), () => {
                const _0x54bd0f = _0x37cbc4;
                if (_0x2f3b14 == 0x1)
                    return;
                _0x2f82f2 = ![], _0x1b7f44['css'](_0x54bd0f(0x329), _0x54bd0f(0x2fd));
            }), _0x2f1167['on'](_0x37cbc4(0x1ef), function () {
                _0x31c5bc -= 0x5a, _0x2087fe();
            }), _0x3b1d87['on'](_0x37cbc4(0x1ef), function () {
                _0x31c5bc += 0x5a, _0x2087fe();
            }), _0x15a917(document)['on'](_0x37cbc4(0x22a), _0x1f1146 => {
                const _0x2bd4a2 = _0x37cbc4;
                if (!_0x2f82f2)
                    return;
                _0x1f1146[_0x2bd4a2(0x301)](), _0x21e7cd = _0x1f1146[_0x2bd4a2(0x416)] - _0x1dfb49, _0x5296e6 = _0x1f1146[_0x2bd4a2(0x30d)] - _0x19a485, _0x2087fe();
            }), _0x25d153['on'](_0x37cbc4(0x1ef), () => {
                _0x3ec855();
            }), _0x45c182['on'](_0x37cbc4(0x1ef), () => {
                _0x3ec855();
            }), _0x443cac['on']('click', _0xc9e493 => {
                _0xc9e493['preventDefault'](), _0xc9e493['stopPropagation']();
            });
            function _0x2087fe() {
                const _0x422112 = _0x37cbc4;
                _0x2e12ef['css'](_0x422112(0x15b), _0x399f1e ? _0x422112(0x215) : 'transform\x200.15s\x20ease'), _0x2e12ef['css'](_0x422112(0x3c5), _0x422112(0x2e6) + _0x21e7cd + _0x422112(0x227) + _0x5296e6 + 'px)\x20scale(' + _0x2f3b14 + ')'), _0x38f1f1[_0x422112(0x334)](_0x422112(0x3c5), _0x422112(0x2c2) + _0x31c5bc + _0x422112(0x375)), _0x2f3b14 == 0x1 ? _0x1b7f44['css'](_0x422112(0x329), _0x422112(0x3f7)) : _0x1b7f44[_0x422112(0x334)]('cursor', _0x422112(0x26a));
            }
            function _0x54ab1a(_0x25814d, _0x4c5f3e) {
                const _0x250743 = _0x37cbc4;
                _0x25814d['preventDefault']();
                let _0x2f50f5 = _0x2f3b14;
                if (_0x4c5f3e == null) {
                    let _0x44bad6 = 0.1, _0x298a9b = _0x25814d[_0x250743(0x282)][_0x250743(0x2ef)] < 0x0 ? 0x1 : -0x1;
                    _0x2f3b14 = Math[_0x250743(0x3e9)](0x5, Math[_0x250743(0x1a5)](0x1, _0x2f3b14 + _0x298a9b * _0x44bad6 * _0x2f3b14));
                } else
                    _0x2f3b14 = _0x4c5f3e;
                let _0x16efc3 = _0xe0972[0x0]['getBoundingClientRect'](), _0x463bbe = _0x25814d[_0x250743(0x2e8)] - _0x16efc3[_0x250743(0x3ac)], _0x17a7fb = _0x25814d[_0x250743(0x21a)] - _0x16efc3[_0x250743(0x21d)], _0x4785df = (_0x463bbe - _0x21e7cd) / _0x2f50f5, _0x2185b0 = (_0x17a7fb - _0x5296e6) / _0x2f50f5;
                _0x21e7cd = -_0x4785df * _0x2f3b14 + _0x463bbe, _0x5296e6 = -_0x2185b0 * _0x2f3b14 + _0x17a7fb, _0x2087fe();
            }
        }
        function _0x3ec855() {
            const _0x17d545 = _0x5364a1;
            clearInterval(_0x1a7c9b), _0x15a917(_0x17d545(0x278))[_0x17d545(0x163)](), _0x15a917(document)[_0x17d545(0x37b)](_0x17d545(0x22a));
        }
        function _0x1f1966() {
            const _0x2b64af = _0x5364a1;
            var _0x2bc1ee = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x2b64af(0x269),
                        'NOTICE_UPDATE_CONTENT': _0x2b64af(0x1b4),
                        'CHECK_UPDATE': _0x2b64af(0x2a5),
                        'CHECK_UPDATE_MENU': _0x2b64af(0x2c1),
                        'CHECK_UPDATE_INTRO': _0x2b64af(0x258),
                        'RELOAD_SCRIPT': 'Reload\x20Script',
                        'DONATE': _0x2b64af(0x1c3),
                        'FEEDBACK': 'Feedback',
                        'IMAGE_VIEWER': _0x2b64af(0x223),
                        'NEW_TAB': _0x2b64af(0x408),
                        'SHOW_DOM_TREE': 'Show\x20DOM\x20Tree',
                        'SELECT_AND_COPY': 'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
                        'DOWNLOAD_DOM_TREE': _0x2b64af(0x1c2),
                        'REPORT_GITHUB': _0x2b64af(0x226),
                        'REPORT_DISCORD': 'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
                        'REPORT_FORK': _0x2b64af(0x38a),
                        'DEBUG': _0x2b64af(0x1cf),
                        'CLOSE': _0x2b64af(0x1c6),
                        'ALL_CHECK': _0x2b64af(0x2e7),
                        'BATCH_DOWNLOAD_SELECTED': 'Download\x20Selected\x20Resources',
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x2b64af(0x2ea),
                        'VID': 'Video',
                        'DW': 'Download',
                        'DW_ALL': _0x2b64af(0x26e),
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x2b64af(0x1bb),
                        'LOAD_BLOB_MULTIPLE': _0x2b64af(0x37a),
                        'LOAD_BLOB_RELOAD': _0x2b64af(0x3ec),
                        'NO_CHECK_RESOURCE': _0x2b64af(0x245),
                        'NO_VID_URL': _0x2b64af(0x225),
                        'SETTING': _0x2b64af(0x3f4),
                        'AUTO_RENAME': _0x2b64af(0x1f5),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0x2b64af(0x22d),
                        'DISABLE_VIDEO_LOOPING': _0x2b64af(0x249),
                        'HTML5_VIDEO_CONTROL': _0x2b64af(0x180),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x2b64af(0x209),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': _0x2b64af(0x2dc),
                        'MODIFY_VIDEO_VOLUME': _0x2b64af(0x2a1),
                        'MODIFY_RESOURCE_EXIF': _0x2b64af(0x39b),
                        'SCROLL_BUTTON': _0x2b64af(0x400),
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x2b64af(0x3d1),
                        'AUTO_RENAME_INTRO': _0x2b64af(0x2e5),
                        'RENAME_SHORTCODE_INTRO': _0x2b64af(0x2bc),
                        'RENAME_PUBLISH_DATE_INTRO': 'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_LOCATE_DATE_INTRO': _0x2b64af(0x318),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x2b64af(0x1b6),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x2b64af(0x392),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x2b64af(0x2f9),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x2b64af(0x325),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x2b64af(0x288),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x2b64af(0x2ab),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x2b64af(0x2df),
                        'SCROLL_BUTTON_INTRO': _0x2b64af(0x3c0),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x2b64af(0x272),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x2b64af(0x1c0),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x2b64af(0x30f),
                        'SKIP_VIEW_STORY_CONFIRM': _0x2b64af(0x2ac),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x2b64af(0x40a),
                        'MODIFY_RESOURCE_EXIF_INTRO': _0x2b64af(0x283)
                    }
                }, _0x31a9cf = Object[_0x2b64af(0x2a3)]({}, _0x2bc1ee, _0x1148d1[_0x2b64af(0x219)]), _0x5638f1 = Object['keys'](_0x31a9cf)[_0x2b64af(0x2c9)]()['reduce']((_0x5b44ef, _0x2749d1) => {
                    return _0x5b44ef[_0x2749d1] = _0x31a9cf[_0x2749d1], _0x5b44ef;
                }, {});
            return _0x5638f1;
        }
        async function _0x15e69f(_0xacf157) {
            return new Promise((_0xc104d2, _0x453619) => {
                const _0x338be3 = a0_0x5a53;
                GM_xmlhttpRequest({
                    'method': _0x338be3(0x1ce),
                    'url': _0x338be3(0x259) + _0xacf157 + _0x338be3(0x177),
                    'onload': function (_0x5a3d00) {
                        const _0x3c167d = _0x338be3;
                        try {
                            let _0xa3cabb = JSON[_0x3c167d(0x1f9)](_0x5a3d00[_0x3c167d(0x30b)]);
                            _0xc104d2(_0xa3cabb);
                        } catch (_0x1e1c35) {
                            _0x453619(_0x1e1c35);
                        }
                    },
                    'onerror': function (_0x305cfd) {
                        _0x34c369('getTranslationText()', 'reject', _0x305cfd), _0x453619(_0x305cfd);
                    }
                });
            });
        }
        function _0x101960(_0x171b2f) {
            const _0x3049dd = _0x5364a1, _0x3cc986 = _0x1f1966();
            return _0x3cc986[_0x1148d1[_0x3049dd(0x3e4)]] != undefined && _0x3cc986[_0x1148d1[_0x3049dd(0x3e4)]][_0x171b2f] != undefined ? _0x3cc986[_0x1148d1['lang']][_0x171b2f] : _0x3cc986['en-US'][_0x171b2f];
        }
        function _0x137890() {
            const _0x713b5c = _0x5364a1;
            _0x15a917(_0x713b5c(0x295))[_0x713b5c(0x256)](function () {
                const _0x545232 = _0x713b5c;
                _0x15a917(this)[_0x545232(0x266)](_0x101960(_0x15a917(this)['attr'](_0x545232(0x2c7))));
            }), _0x15a917(_0x713b5c(0x1d9))['each'](function () {
                const _0x1e807a = _0x713b5c;
                _0x15a917(this)[_0x1e807a(0x32d)](_0x1e807a(0x179), _0x101960(_0x15a917(this)['attr'](_0x1e807a(0x3ed))));
            });
        }
        _0x15a917(function () {
            const _0xa06ebe = _0x5364a1;
            function _0x4d1cec(_0x2a3640) {
                const _0x56b088 = a0_0x5a53;
                var _0x278f4e = [];
                for (var _0x3ce6ab of _0x2a3640) {
                    _0x278f4e[_0x56b088(0x2d3)]({
                        'tagName': _0x3ce6ab['tagName'],
                        'id': _0x3ce6ab['id'],
                        'className': _0x3ce6ab[_0x56b088(0x332)]
                    });
                }
                return _0x278f4e;
            }
            function _0x312ed6() {
                const _0x250151 = a0_0x5a53;
                let _0x241417 = _0x15a917(_0x250151(0x1fa))[0x0];
                var _0xcb1f14 = '';
                _0x1148d1[_0x250151(0x31b)][_0x250151(0x1b3)](_0x39ef3b => {
                    const _0x543c1d = _0x250151;
                    var _0x32056e = JSON[_0x543c1d(0x3c6)](_0x39ef3b[_0x543c1d(0x276)], function (_0x2f5912, _0x51a101) {
                        const _0x446e81 = _0x543c1d;
                        if (Array[_0x446e81(0x291)](this)) {
                            if (typeof _0x51a101 === _0x446e81(0x220) && _0x51a101 instanceof jQuery)
                                return _0x4d1cec(_0x51a101);
                            return _0x51a101;
                        } else
                            return _0x51a101;
                    }, '\x09');
                    _0xcb1f14 += new Date(_0x39ef3b[_0x543c1d(0x214)])[_0x543c1d(0x1af)]() + ':\x20' + _0x32056e + '\x0a';
                }), _0x15a917(_0x250151(0x1ba))[_0x250151(0x266)](_0x250151(0x162) + _0xcb1f14 + _0x250151(0x40c) + location[_0x250151(0x156)] + _0x250151(0x1a7) + _0x241417['innerHTML']);
            }
            _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE', function () {
                _0x312ed6();
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x3bb), function () {
                const _0x4f9e24 = _0xa06ebe;
                _0x15a917(_0x4f9e24(0x1ba))[_0x4f9e24(0x252)](), document[_0x4f9e24(0x2af)](_0x4f9e24(0x1a0));
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x241), function () {
                const _0x3c7ff4 = _0xa06ebe;
                _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x3c7ff4(0x266)]()['length'] === 0x0 && _0x312ed6();
                var _0x4078ea = _0x15a917('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x3c7ff4(0x266)](), _0x23f1ff = document[_0x3c7ff4(0x2e9)]('a'), _0x10f533 = new Blob([_0x4078ea], { 'type': 'text/plain' });
                _0x23f1ff[_0x3c7ff4(0x35d)] = URL['createObjectURL'](_0x10f533), _0x23f1ff[_0x3c7ff4(0x1eb)] = 'DOMTree-' + new Date()[_0x3c7ff4(0x160)]() + _0x3c7ff4(0x2d9), document['body']['appendChild'](_0x23f1ff), _0x23f1ff['click'](), _0x23f1ff[_0x3c7ff4(0x163)]();
            }), _0x15a917('body')['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x149), function () {
                const _0x51ade4 = _0xa06ebe;
                _0x15a917(this)[_0x51ade4(0x32a)](_0x51ade4(0x339))[_0x51ade4(0x317)] > 0x0 ? _0x15a917(this)[_0x51ade4(0x32a)](_0x51ade4(0x339))[_0x51ade4(0x296)](0xfa, function () {
                    const _0x5ce5ff = _0x51ade4;
                    _0x15a917(this)[_0x5ce5ff(0x163)]();
                }) : _0x15a917(_0x51ade4(0x2ee))[_0x51ade4(0x163)]();
            }), _0x15a917(window)['on'](_0xa06ebe(0x165), function (_0xa0a987) {
                const _0x852890 = _0xa06ebe;
                _0xa0a987['which'] == '81' && _0xa0a987[_0x852890(0x305)] && (_0x15a917(_0x852890(0x2ee))[_0x852890(0x163)](), _0xa0a987[_0x852890(0x301)]()), _0xa0a987[_0x852890(0x346)] == '87' && _0xa0a987['altKey'] && (_0x389774(), _0xa0a987[_0x852890(0x301)]()), _0xa0a987[_0x852890(0x346)] == '90' && _0xa0a987['altKey'] && (_0x1664fd(), _0xa0a987[_0x852890(0x301)]()), _0xa0a987[_0x852890(0x346)] == '82' && _0xa0a987[_0x852890(0x305)] && (_0x15478a(), _0xa0a987[_0x852890(0x301)]()), _0xa0a987[_0x852890(0x346)] == '83' && _0xa0a987['altKey'] && (location['href']['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x15a917('.IG_DWSTORY')[_0x852890(0x317)] > 0x0 && _0x15a917(_0x852890(0x23e))?.[_0x852890(0x3a8)]('click'), location['href'][_0x852890(0x35a)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x15a917(_0x852890(0x3ea))[_0x852890(0x317)] > 0x0 && _0x15a917(_0x852890(0x3ea))?.[_0x852890(0x3a8)](_0x852890(0x1ef)), _0xa0a987[_0x852890(0x301)]());
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x3d2), _0xa06ebe(0x31f), function () {
                const _0x1cf1fc = _0xa06ebe;
                var _0x44d181 = _0x15a917(this)[_0x1cf1fc(0x32d)]('id');
                if (_0x44d181 && _0x201e99[_0x44d181] !== undefined) {
                    let _0xded2b6 = _0x15a917(this)['prop'](_0x1cf1fc(0x1e5));
                    GM_setValue(_0x44d181, _0xded2b6), _0x201e99[_0x44d181] = _0xded2b6, console['log']('user\x20settings', _0x44d181, _0xded2b6);
                }
            }), _0x15a917('body')['on'](_0xa06ebe(0x1ef), '.IG_POPUP_DIG\x20.globalSettings', function (_0x4de313) {
                const _0x233026 = _0xa06ebe;
                _0x15a917(this)[_0x233026(0x262)](_0x233026(0x339))[_0x233026(0x317)] > 0x0 && _0x4de313[_0x233026(0x301)]();
            }), _0x15a917('body')['on'](_0xa06ebe(0x3d2), '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)', function () {
                const _0x54c3e9 = _0xa06ebe;
                let _0x14feb3 = _0x15a917(this)['val']();
                _0x15a917(this)[_0x54c3e9(0x32d)](_0x54c3e9(0x2f7)) == _0x54c3e9(0x1da) ? _0x15a917(this)[_0x54c3e9(0x2f2)]()[_0x54c3e9(0x1f1)](_0x14feb3) : _0x15a917(this)['prev']()[_0x54c3e9(0x1f1)](_0x14feb3), _0x14feb3 >= 0x0 && _0x14feb3 <= 0x1 && (_0x1148d1[_0x54c3e9(0x29e)] = _0x14feb3, GM_setValue('G_VIDEO_VOLUME', _0x14feb3));
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x240), _0xa06ebe(0x343), function () {
                const _0x11950b = _0xa06ebe;
                if (_0x15a917(this)[_0x11950b(0x32d)](_0x11950b(0x2f7)) == 'range') {
                    let _0x17a27b = _0x15a917(this)['val']();
                    _0x15a917(this)['next']()[_0x11950b(0x1f1)](_0x17a27b);
                } else {
                    let _0x52f297 = _0x15a917(this)[_0x11950b(0x1f1)]();
                    _0x52f297 >= 0x0 && _0x52f297 <= 0x1 ? _0x15a917(this)['prev']()[_0x11950b(0x1f1)](_0x52f297) : _0x52f297 < 0x0 ? _0x15a917(this)['val'](0x0) : _0x15a917(this)[_0x11950b(0x1f1)](0x1);
                }
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x240), _0xa06ebe(0x18f), function () {
                const _0x15b7b5 = _0xa06ebe;
                GM_setValue('G_RENAME_FORMAT', _0x15a917(this)[_0x15b7b5(0x1f1)]()), _0x1148d1[_0x15b7b5(0x294)] = _0x15a917(this)['val']();
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x2a9), function (_0x1b796b) {
                const _0xf575a4 = _0xa06ebe;
                _0x1b796b[_0xf575a4(0x301)](), _0x3d94b9(this);
            }), _0x15a917(_0xa06ebe(0x17b))['on']('click', '.IG_POPUP_DIG_BODY\x20.newTab', function () {
                const _0x249a2d = _0xa06ebe;
                if (_0x201e99[_0x249a2d(0x1b2)] && _0x201e99[_0x249a2d(0x3f1)])
                    _0x3d94b9(_0x15a917(this)[_0x249a2d(0x32a)]()[_0x249a2d(0x1f7)]('a')['first']()[0x0], !![]);
                else {
                    var _0x2f8ebd = new URL(_0x15a917(this)[_0x249a2d(0x32a)]()[_0x249a2d(0x1f7)]('a')[_0x249a2d(0x32d)](_0x249a2d(0x364)));
                    _0x2f8ebd['host'] = 'scontent.cdninstagram.com', _0x2a3047(_0x2f8ebd['href']);
                }
            }), _0x15a917('body')['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x406), function () {
                const _0x1ef121 = _0xa06ebe;
                let _0x521064 = new Date()['getTime']();
                _0x201e99[_0x1ef121(0x34f)] && _0x15a917(this)['parent']()[_0x1ef121(0x1f7)]('a')[_0x1ef121(0x32d)]('datetime') && (_0x521064 = _0x15a917(this)[_0x1ef121(0x32a)]()['children']('a')['attr'](_0x1ef121(0x281)));
                let _0x38f6be = _0x15a917(this)['parent']()[_0x1ef121(0x1f7)]('a')[_0x1ef121(0x32d)]('data-path') ?? _0x15a917('#article-id')[_0x1ef121(0x266)]();
                _0x1cc5ec(_0x15a917(this)[_0x1ef121(0x32a)]()[_0x1ef121(0x1f7)]('a')['find'](_0x1ef121(0x328))['first']()[_0x1ef121(0x32d)](_0x1ef121(0x260)), _0x15a917(this)[_0x1ef121(0x32a)]()[_0x1ef121(0x1f7)]('a')['attr']('data-username'), _0x1ef121(0x3df), _0x521064, _0x1ef121(0x191), _0x38f6be);
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x23e), function () {
                _0xf4db05(!![]);
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x153), function () {
                _0x57f116();
            }), _0x15a917('body')['on']('click', _0xa06ebe(0x407), function (_0x266cd7) {
                const _0x51eadf = _0xa06ebe;
                _0x266cd7[_0x51eadf(0x301)](), _0xf4db05(!![], !![], !![]);
            }), _0x15a917(_0xa06ebe(0x17b))['on']('click', _0xa06ebe(0x37d), function () {
                _0x1ea9dc(!![]);
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), '.IG_DWPROFILE', function (_0x58cd70) {
                const _0x4d7fd4 = _0xa06ebe;
                _0x58cd70[_0x4d7fd4(0x2fb)](), _0x4d40e1(!![]);
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x3ea), function () {
                _0x34b85e(!![]);
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x3b5), function () {
                _0x590c01();
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x22f), function (_0x5afd33) {
                const _0x236c01 = _0xa06ebe;
                _0x5afd33[_0x236c01(0x301)](), _0x34b85e(!![], !![]);
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x2bd), function () {
                _0x50c365(!![]);
            }), _0x15a917(_0xa06ebe(0x17b))['on']('click', _0xa06ebe(0x2b2), function () {
                _0xd7a76c(!![], !![]);
            }), _0x15a917(_0xa06ebe(0x17b))['on'](_0xa06ebe(0x1ef), '.IG_REELS_NEWTAB', function () {
                _0xd7a76c(!![], !![], !![]);
            }), _0x15a917('body')['on']('click', _0xa06ebe(0x314), function () {
                _0xd7a76c(!![], ![]);
            }), _0x15a917('body')['on']('mousedown', 'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]', function (_0x59bb2) {
                const _0x100e8e = _0xa06ebe;
                if (_0x59bb2['which'] === 0x3 || _0x59bb2[_0x100e8e(0x346)] === 0x2) {
                    if (location[_0x100e8e(0x35d)] === _0x100e8e(0x1d4) && _0x201e99['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x59bb2['preventDefault']();
                        if (_0x15a917(this)[_0x100e8e(0x262)](_0x100e8e(0x2f1))[_0x100e8e(0x317)] > 0x0) {
                            const _0x236062 = 'https://www.instagram.com/' + _0x15a917(this)[_0x100e8e(0x1f7)](_0x100e8e(0x3d5))[_0x100e8e(0x2c6)]()[_0x100e8e(0x266)]();
                            _0x59bb2[_0x100e8e(0x346)] === 0x2 ? GM_openInTab(_0x236062) : location[_0x100e8e(0x35d)] = _0x236062;
                        }
                    }
                }
            }), _0x15a917('body')['on'](_0xa06ebe(0x3d2), _0xa06ebe(0x243), function () {
                const _0x1c24c2 = _0xa06ebe;
                var _0x465054 = _0x15a917(this)['find'](_0x1c24c2(0x240))[_0x1c24c2(0x1ec)](_0x1c24c2(0x1e5));
                _0x15a917(_0x1c24c2(0x3fb))['each'](function () {
                    const _0x974d60 = _0x1c24c2;
                    _0x15a917(this)[_0x974d60(0x1ec)]('checked', _0x465054);
                });
            }), _0x15a917('body')['on'](_0xa06ebe(0x3d2), _0xa06ebe(0x3fb), function () {
                const _0x496d6d = _0xa06ebe;
                var _0x2daa82 = _0x15a917(_0x496d6d(0x391))['length'], _0x5b54a4 = _0x15a917('.IG_POPUP_DIG_BODY\x20.inner_box')[_0x496d6d(0x317)];
                _0x15a917(_0x496d6d(0x243))[_0x496d6d(0x262)]('input')[_0x496d6d(0x1ec)](_0x496d6d(0x1e5), _0x2daa82 == _0x5b54a4);
            }), _0x15a917(_0xa06ebe(0x17b))['on']('click', _0xa06ebe(0x382), function () {
                const _0x533704 = _0xa06ebe;
                let _0x30da16 = 0x0;
                _0x15a917(_0x533704(0x27e))[_0x533704(0x256)](function () {
                    const _0x458f9b = _0x533704;
                    _0x15a917(this)[_0x458f9b(0x36f)]()['children'](_0x458f9b(0x240))['prop']('checked') && (_0x15a917(this)[_0x458f9b(0x3a8)]('click'), _0x30da16++);
                }), _0x30da16 == 0x0 && alert(_0x101960(_0x533704(0x21f)));
            }), _0x15a917(_0xa06ebe(0x17b))['on']('change', _0xa06ebe(0x3b2), function () {
                const _0x25397c = _0xa06ebe;
                GM_setValue(_0x25397c(0x3e4), _0x15a917(this)[_0x25397c(0x1f1)]()), _0x1148d1[_0x25397c(0x3e4)] = _0x15a917(this)['val'](), _0x1148d1[_0x25397c(0x3e4)]?.[_0x25397c(0x3e2)]('en') || _0x1148d1[_0x25397c(0x219)][_0x1148d1[_0x25397c(0x3e4)]] != null ? (_0x137890(), _0x35b7ca()) : _0x15e69f(_0x1148d1[_0x25397c(0x3e4)])[_0x25397c(0x29f)](_0x4d0de3 => {
                    const _0x2c5f3b = _0x25397c;
                    _0x1148d1[_0x2c5f3b(0x219)][_0x1148d1[_0x2c5f3b(0x3e4)]] = _0x4d0de3, _0x137890(), _0x35b7ca();
                })[_0x25397c(0x363)](_0xa468fe => {
                    const _0x515841 = _0x25397c;
                    console[_0x515841(0x2c0)]('getTranslationText\x20catch\x20error:', _0xa468fe);
                });
            }), _0x15a917('body')['on'](_0xa06ebe(0x1ef), _0xa06ebe(0x24e), function () {
                const _0x441a77 = _0xa06ebe;
                _0x15a917(_0x441a77(0x27e))[_0x441a77(0x256)](function () {
                    const _0x24bfee = _0x441a77;
                    _0x15a917(this)[_0x24bfee(0x3a8)](_0x24bfee(0x1ef));
                });
            });
            const _0xc3e88 = new MutationObserver(_0x30fa22 => {
                const _0x19f18e = _0xa06ebe;
                for (const _0x14e297 of _0x30fa22) {
                    _0x14e297[_0x19f18e(0x2f7)] === _0x19f18e(0x298) && _0x14e297[_0x19f18e(0x3b6)][_0x19f18e(0x1b3)](_0x311d17 => {
                        const _0x5ea9f3 = _0x19f18e, _0x1b056f = _0x15a917(_0x311d17)[_0x5ea9f3(0x262)](_0x5ea9f3(0x3c2));
                        if (location[_0x5ea9f3(0x156)][_0x5ea9f3(0x3e2)](_0x5ea9f3(0x254))) {
                            if (_0x15a917(_0x311d17)[_0x5ea9f3(0x32d)](_0x5ea9f3(0x3ed)) == null && _0x15a917(_0x311d17)[_0x5ea9f3(0x32d)]('data-visualcompletion') == null && _0x311d17[_0x5ea9f3(0x14d)] === _0x5ea9f3(0x170)) {
                                var _0x5d90d7 = _0x15a917(_0x311d17)['find'](_0x5ea9f3(0x40f));
                                let _0x4bd278 = _0x5d90d7?.[_0x5ea9f3(0x32d)](_0x5ea9f3(0x179));
                                _0x4bd278 != null && _0x5d90d7[_0x5ea9f3(0x266)](_0x4bd278);
                            }
                        }
                        if (_0x1b056f[_0x5ea9f3(0x317)] > 0x0) {
                            _0x201e99[_0x5ea9f3(0x190)] && _0x1b056f['each'](function () {
                                const _0x44171f = _0x5ea9f3;
                                _0x15a917(this)['on'](_0x44171f(0x16d), function () {
                                    const _0x44a959 = _0x44171f;
                                    !_0x15a917(this)['data'](_0x44a959(0x3ae)) && (_0x15a917(this)[_0x44a959(0x32d)]('data-modify', !![]), this[_0x44a959(0x30c)] = _0x1148d1[_0x44a959(0x29e)], _0x34c369('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x5ea9f3(0x156)]['match'](/^(\/stories\/)/ig)) {
                                const _0x543de3 = location[_0x5ea9f3(0x156)][_0x5ea9f3(0x35a)](/^(\/stories\/highlights\/)/ig) != null, _0x46a68b = _0x543de3 ? 'highlight' : _0x5ea9f3(0x16a);
                                _0x1b056f[_0x5ea9f3(0x256)](function () {
                                    const _0x16a0c5 = _0x5ea9f3;
                                    _0x15a917(this)['on'](_0x16a0c5(0x2c5), function () {
                                        const _0x21d814 = _0x16a0c5;
                                        if (!_0x15a917(this)['data'](_0x21d814(0x20e))) {
                                            let _0x42a5e5 = _0x15a917(this);
                                            _0x42a5e5[_0x21d814(0x1e1)](_0x21d814(0x31c))[_0x21d814(0x261)](function () {
                                                const _0x2cda73 = _0x21d814;
                                                return _0x15a917(this)[_0x2cda73(0x3d9)]() == _0x42a5e5[_0x2cda73(0x3d9)]();
                                            })[_0x21d814(0x262)]('.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL')[_0x21d814(0x317)] === 0x0 ? (_0x15a917(this)[_0x21d814(0x32d)]('data-modify-thumbnail', !![]), _0x543de3 ? _0x50c365(![]) : _0x1ea9dc(![]), _0x34c369('(' + _0x46a68b + ')', _0x21d814(0x319))) : (_0x15a917(this)['attr'](_0x21d814(0x2e4), !![]), _0x34c369('(' + _0x46a68b + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0xc47371 = _0x15a917(this);
                                    if (_0x201e99[_0x16a0c5(0x169)]) {
                                        if (!_0xc47371['data'](_0x16a0c5(0x218))) {
                                            _0x34c369('(' + _0x46a68b + ')', _0x16a0c5(0x1e0));
                                            _0x201e99['MODIFY_VIDEO_VOLUME'] && (this[_0x16a0c5(0x30c)] = _0x1148d1[_0x16a0c5(0x29e)], _0xc47371['on'](_0x16a0c5(0x411), function () {
                                                const _0x5aaddd = _0x16a0c5;
                                                this[_0x5aaddd(0x30c)] = _0x1148d1[_0x5aaddd(0x29e)];
                                            }));
                                            let _0x441c2b = _0xc47371['parents'](_0x16a0c5(0x3d5))[_0x16a0c5(0x261)](function () {
                                                    const _0x3d858f = _0x16a0c5;
                                                    return _0x15a917(this)['attr']('class') == null && _0x15a917(this)[_0x3d858f(0x32d)](_0x3d858f(0x368)) == null;
                                                })[_0x16a0c5(0x27a)](), _0x20a187 = _0x441c2b[_0x16a0c5(0x2f2)]();
                                            _0x20a187['hide']();
                                            let _0x2679d7 = _0x441c2b[_0x16a0c5(0x262)](_0x16a0c5(0x337));
                                            _0x2679d7['hide']();
                                            const _0x4b1eab = function (_0x418da0) {
                                                const _0x57ed86 = _0x16a0c5;
                                                _0x418da0[_0x57ed86(0x301)](), _0xc47371[_0x57ed86(0x334)](_0x57ed86(0x3db), '2'), _0xc47371['attr'](_0x57ed86(0x218), !![]), _0x2679d7[_0x57ed86(0x248)](), _0x20a187['hide'](), _0x32b878(_0xc47371, _0xc47371['parents'](_0x57ed86(0x31c))[_0x57ed86(0x261)](function () {
                                                    const _0x394927 = _0x57ed86;
                                                    return _0x15a917(this)[_0x394927(0x3d9)]() == _0xc47371[_0x394927(0x3d9)]();
                                                })[_0x57ed86(0x27a)](), _0x46a68b, 'vertical');
                                            };
                                            _0xc47371[_0x16a0c5(0x32a)]()[_0x16a0c5(0x262)]('video\x20+\x20div')['on'](_0x16a0c5(0x3f0), _0x4b1eab), _0x2679d7['on'](_0x16a0c5(0x3f0), _0x4b1eab), _0x20a187['on'](_0x16a0c5(0x3f0), _0x4b1eab), _0xc47371['on'](_0x16a0c5(0x3f0), function (_0x5b7e01) {
                                                const _0x2a9975 = _0x16a0c5;
                                                _0x5b7e01[_0x2a9975(0x301)](), _0xc47371[_0x2a9975(0x334)](_0x2a9975(0x3db), '-1'), _0xc47371[_0x2a9975(0x15a)](_0x2a9975(0x218)), _0x20a187['show'](), _0x2679d7['show'](), _0x32b878(_0xc47371, _0xc47371[_0x2a9975(0x1e1)]('div[style][class]')['filter'](function () {
                                                    return _0x15a917(this)['width']() == _0xc47371['width']();
                                                })[_0x2a9975(0x27a)](), _0x46a68b, 'vertical');
                                            }), _0xc47371['on'](_0x16a0c5(0x306), function () {
                                                const _0x246008 = _0x16a0c5;
                                                let _0x5aa98b = _0x441c2b[_0x246008(0x32a)]()[_0x246008(0x262)](_0x246008(0x231))['parents']('[role=\x22button\x22]')[_0x246008(0x27a)]();
                                                var _0x10ef91 = _0x5aa98b[_0x246008(0x262)](_0x246008(0x1a3))[_0x246008(0x317)] === 0x0;
                                                this[_0x246008(0x2ad)] != _0x10ef91 && (this[_0x246008(0x30c)] = _0x1148d1[_0x246008(0x29e)], _0x5aa98b?.[_0x246008(0x3a8)](_0x246008(0x1ef))), _0x15a917(this)[_0x246008(0x32d)](_0x246008(0x28c)) && (_0x1148d1[_0x246008(0x29e)] = this[_0x246008(0x30c)], GM_setValue(_0x246008(0x3d4), this['volume'])), this['volume'] == _0x1148d1['videoVolume'] && _0x15a917(this)['attr'](_0x246008(0x28c), !![]);
                                            }), _0xc47371[_0x16a0c5(0x334)](_0x16a0c5(0x3cd), _0x16a0c5(0x2b5)), _0xc47371[_0x16a0c5(0x334)](_0x16a0c5(0x3db), '2'), _0xc47371[_0x16a0c5(0x32d)](_0x16a0c5(0x3a0), !![]), _0xc47371[_0x16a0c5(0x32d)](_0x16a0c5(0x218), !![]);
                                        }
                                    } else
                                        _0x32b878(_0xc47371, _0xc47371[_0x16a0c5(0x1e1)](_0x16a0c5(0x31c))[_0x16a0c5(0x261)](function () {
                                            const _0x2af04d = _0x16a0c5;
                                            return _0x15a917(this)['width']() == _0xc47371[_0x2af04d(0x3d9)]();
                                        })[_0x16a0c5(0x27a)](), _0x46a68b, _0x16a0c5(0x327));
                                });
                            }
                        }
                    });
                }
            });
            _0xc3e88[_0xa06ebe(0x221)](_0x15a917(_0xa06ebe(0x1fa))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x3369() {
    const _0x4ba4a2 = [
        'load',
        'trigger',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'regenerated',
        'arrayBuffer',
        'left',
        'srcset',
        'modify',
        '37px',
        'data-username',
        '0\x200',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'avatar',
        'remove-thumbnail',
        '.IG_DWHISTORY_ALL',
        'addedNodes',
        '\x22\x20class=\x22videoThumbnail\x22>',
        '._acnb',
        'video_url',
        '#rotate_right',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'a[href^=\x22/\x22]',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'a[href]\x20time[datetime]',
        'video',
        'DISABLE_VIDEO_LOOPING',
        'main\x20timer\x20re-register\x20completed',
        'transform',
        'stringify',
        'shortcode_media',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'there\x20is\x20no\x20new\x20update',
        'navigator',
        'getMonth',
        'video[class]',
        'position',
        '10EjCWdZ',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'change',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'G_VIDEO_VOLUME',
        'div',
        'Found\x20insert\x20point',
        'getDate',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'width',
        'query_hash',
        'z-index',
        'undefined',
        'GL_postPath',
        '._aagv\x20img',
        'thumbnail',
        'ended',
        '<input\x20value=\x22',
        'startsWith',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'lang',
        'FEEDBACK',
        'profile_pic_url',
        '%22}',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#1f1f1f\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7.34\x206.41L.86\x2012.9l6.49\x206.48\x206.49-6.48-6.5-6.49zM3.69\x2012.9l3.66-3.66L11\x2012.9l-3.66\x203.66-3.65-3.66zm15.67-6.26C17.61\x204.88\x2015.3\x204\x2013\x204V.76L8.76\x205\x2013\x209.24V6c1.79\x200\x203.58.68\x204.95\x202.05\x202.73\x202.73\x202.73\x207.17\x200\x209.9C16.58\x2019.32\x2014.79\x2020\x2013\x2020c-.97\x200-1.94-.21-2.84-.61l-1.49\x201.49C10.02\x2021.62\x2011.51\x2022\x2013\x2022c2.3\x200\x204.61-.88\x206.36-2.64\x203.52-3.51\x203.52-9.21\x200-12.72z\x22/></svg>',
        'min',
        '.IG_DWHISTORY',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'data-ih-locale-title',
        '4658664URanol',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'contextmenu',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'candidates',
        '\x22\x20class=\x22newTab\x22>',
        'Settings',
        'NOPATH',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'zoom-in',
        'GL_referrer',
        'x1lix1fw',
        'onHighlightsStory',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        '<div></div>',
        'node',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'x1iyjqo2',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'DOWNLOAD_ALL',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'floor',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        '.IG_DWNEWTAB',
        'Open\x20in\x20New\x20Tab',
        'html',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '\x0a-----\x0a\x0aLocation:\x20',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'div[role=\x22presentation\x22]',
        'time[datetime]',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'loadstart',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'substr',
        'owner',
        'pageX',
        'VID',
        'element',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'G_RENAME_FORMAT',
        'fail',
        'addClass',
        'tagName',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'LOAD_BLOB_MULTIPLE',
        'https://www.instagram.com/p/',
        'config_width',
        '_acnf',
        '.IG_DWSTORY_ALL',
        'padEnd',
        'slice',
        'pathname',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'hidden',
        'registerMenuIds',
        'removeAttr',
        'transition',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        '</option>',
        'getUserIdWithAgent()',
        'selected',
        'getTime',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'Logger:\x0a',
        'remove',
        '.IG_DW_ALL_MAIN',
        'keydown',
        'matchAll',
        'FULLSCREEN',
        'display_resources',
        'HTML5_VIDEO_CONTROL',
        'story',
        'Request\x20with:',
        'transform-origin',
        'play\x20playing',
        'hasClass',
        'firstStarted',
        'DIV',
        'scrollBy',
        'shortcode',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'trim',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '</span>\x20',
        '.json',
        'GL_observer',
        'title',
        'undefined\x20username',
        'body',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'SHOW_DOM_TREE',
        'https://www.instagram.com/reels/',
        'Display\x20HTML5\x20Video\x20Controller',
        'DIRECT_DOWNLOAD_ALL',
        '\x22\x20title=\x22',
        'FORCE_FETCH_ALL_RESOURCES',
        '/p/',
        'username',
        'height',
        'userLanguage',
        'pointer',
        '\x22><span\x20data-ih-locale=\x22',
        '30dNEexK',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '.button_wrapper',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'article',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        'MODIFY_VIDEO_VOLUME',
        'jpg',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'userAgent',
        'center',
        'pause',
        'getHours',
        'REPORT_FORK',
        'image/jpeg',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'toString',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        '\x20-</a>',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'copy',
        'GL_repeat',
        'div.volume_slider',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '/followers/',
        'max',
        '<a\x20datetime=\x22',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'fromCharCode',
        'DOWNLOAD',
        'Feedback\x20Options',
        'name',
        'G_CHECK_TIMESTAMP',
        'image_versions2',
        'message',
        'toISOString',
        'code',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'FORCE_RESOURCE_VIA_MEDIA',
        'forEach',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'video\x20+\x20div\x20>\x20div',
        'getUint16',
        'label',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'Loading\x20Blob\x20Media...',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'log',
        'append',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'display',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'Donate',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'url',
        'Close',
        '680FdmRWz',
        '</div></div>',
        '</p>',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        '\x22\x20datetime=\x22',
        'hostname',
        'GraphVideo',
        'GET',
        'Debug\x20Window',
        '714600ACMnLK',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'padStart',
        'byteLength',
        'https://www.instagram.com/',
        '--ig-track-progress:\x20',
        '.IG_IMAGE_VIEWER',
        'video_resources',
        'searchParams',
        '[data-ih-locale-title]',
        'range',
        'www.',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'disconnect',
        'THUMBNAIL_INTRO',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'parents',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'checked',
        'div#scrollview',
        '._acay\x20._acaz',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'carousel_media',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'download',
        'prop',
        'createObjectURL',
        '_acnb',
        'click',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'val',
        '_ac3q',
        '</button>',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'children',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'parse',
        'div[id^=\x22mount\x22]',
        'isStory',
        'Remote\x20version:\x20',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '</div>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'data-snig',
        '\x20child',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        '<div\x20class=\x22button_wrapper\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'NEW_TAB',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'reels',
        '.IG_THUMBNAIL_MAIN',
        '</span>\x20<input\x20id=\x22',
        'textContent',
        'modify-thumbnail',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '.IG_POPUP_DIG\x20#post_info',
        'getBlobMediaWithQuery()',
        'taken_at_timestamp',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'time',
        'none',
        'LOAD_BLOB_RELOAD',
        'will-change',
        'controls',
        'locale',
        'clientY',
        'WEBP',
        'reduce',
        'top',
        'status',
        'NO_CHECK_RESOURCE',
        'object',
        'observe',
        'items',
        'Open\x20Image\x20In\x20Viewer',
        'edge_sidecar_to_children',
        'Cannot\x20find\x20video\x20URL.',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'px,\x20',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'mousemove.igHelper',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'GraphImage',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'div:not([class]):not([style])',
        '.IG_DWHINEWTAB',
        'EXIF',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'ig_helper_notice',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'REPORT_GITHUB',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        '#iv_image',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        'data',
        '.circle_wrapper\x20span',
        'user',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        '.IG_DWSTORY',
        ':hidden',
        'input',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'mousedown',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'removeClass',
        'hide',
        'Disable\x20Video\x20Auto-looping',
        'getHighlightStories()',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '</span></label>',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        'Failed\x20to\x20strip\x20EXIF\x20and/or\x20attach\x20post\x20URL\x20to\x20EXIF.',
        '_INTRO',
        'https://www.instagram.com/reel/',
        'select',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        '/stories/highlights/',
        'REPORT_DISCORD',
        'each',
        'currentURL',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'getUserHighSizeProfile()',
        'join',
        'div#splash-screen',
        'updatenotification',
        'bottom',
        'src',
        'filter',
        'find',
        '#iv_rotate',
        'SKIP_VIEW_STORY_CONFIRM',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'text',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '2003264oRWACg',
        'Wololo!\x20New\x20version\x20released.',
        'grabbing',
        'stories',
        'buffer',
        '389730QICBGo',
        'Download\x20All\x20Resources',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_right\x22\x20style=\x22transform:\x20scaleX(-1);cursor:\x20pointer;\x22>',
        'TURN_DEG',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'canDownload',
        'dragstart\x20drop',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'content',
        'onReadyMyDW()\x20Timer',
        '#imageViewer',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'first',
        'DEBUG',
        'Cannot\x20find\x20resource\x20url.',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'from',
        'target',
        'datetime',
        'originalEvent',
        'Modify\x20the\x20EXIF\x20​​properties\x20of\x20the\x20image\x20resource\x20to\x20place\x20the\x20post\x20link\x20in\x20it.',
        'DW_ALL',
        'li._acaz',
        'GL_username',
        'version',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'splice',
        'INTERNAL_CSS',
        'data-name',
        'data-completed',
        'wheel',
        'IG\x20Debug\x20DOM\x20Tree',
        '60543UTbpTu',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'isArray',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'NOTICE_UPDATE_TITLE',
        'fileRenameFormat',
        '[data-ih-locale]',
        'fadeOut',
        'downloadURL',
        'childList',
        'users',
        'NO_VID_URL',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        'div.volume_slider\x20input',
        'isHighlightsStory',
        'videoVolume',
        'then',
        'getSeconds',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'taken_at',
        'assign',
        'getPostOwner()',
        'Checking\x20for\x20Script\x20Updates',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'stp',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'a[data-needed=\x22direct\x22]',
        'CLOSE',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'muted',
        'responseText',
        'execCommand',
        'pageLoaded',
        'GraphSidecar',
        '.IG_REELS',
        'a[href^=\x22/p/\x22]',
        'set',
        'absolute',
        'relative',
        'hasReferrer',
        '#imageViewer\x20>\x20section',
        'transform\x200.15s\x20ease',
        '/following/',
        'LOAD_BLOB_ONE',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '.IG_DWHISTORY_THUMBNAIL',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'image/webp',
        'error',
        'Checking\x20for\x20Updates',
        'rotate(',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        '_blank',
        'timeupdate',
        'last',
        'data-ih-locale',
        'getMediaInfo()',
        'sort',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        '1139702Uyqnog',
        '.IG_DWPROFILE',
        'boolean',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'x1s85apg',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'hd_profile_pic_url_info',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_transform\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_rotate\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20</div>',
        'push',
        'setUint32',
        'getBlobMediaWithQueryID()',
        '\x22\x20class=\x22IG_REELS\x22>',
        'Not\x20a\x20JPEG\x20or\x20WEBP',
        'display_url',
        '.txt',
        'toLowerCase',
        'getUserId()',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '.videoThumbnail',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'NONE',
        'data-modify-thumbnail',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'translate(',
        'Select\x20All',
        'clientX',
        'createElement',
        'Image',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'RIFF',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        '.IG_POPUP_DIG',
        'deltaY',
        'GL_registerEventList',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'next',
        'is_video',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'Exif\x00\x00',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        'type',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'carousel_media:',
        'stopPropagation',
        'replaceAll',
        'grab',
        'warn',
        '.IG_NEWTAB_MAIN',
        'div:last-child',
        'preventDefault',
        'mp4',
        'video\x20volume\x20changed\x20#slider',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'altKey',
        'volumechange',
        '</a>',
        'post',
        'body\x20>\x20div\x20section:visible._ac0a',
        'loop',
        'response',
        'volume',
        'pageY',
        'XMP\x20',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'subarray',
        '2Brhdot',
        'Can\x20not\x20find\x20download\x20url.',
        '._acay',
        '.IG_REELS_THUMBNAIL',
        'SELECT_AND_COPY',
        'reel',
        'length',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'Manually\x20inserting\x20thumbnail\x20button',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'GL_logger',
        'div[style][class]',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        '\x22\x20/></div>',
        '.IG_POPUP_DIG\x20input',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        'img[referrerpolicy]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        '<div\x20class=\x22volume_slider\x20',
        '*/*',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'reject',
        'vertical',
        'img',
        'cursor',
        'parent',
        'getUint32',
        'IMG',
        'attr',
        '[data-snig]',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'className',
        'instagram.com/reels/',
        'css',
        'isDialog',
        'THUMBNAIL',
        'div[class][role=\x22button\x22]',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        '#tempWrapper',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'before',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'RELOAD_SCRIPT',
        'getBlobMedia()',
        '1082610pLgPwG',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'appendChild',
        '._acay\x20+\x20.x24i39r',
        'which',
        'script[type=\x22application/json\x22]',
        'carousel_media:\x20undefined\x20username',
        'host',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'encode',
        'highlights',
        'reels_media',
        '#iv_close',
        'RENAME_PUBLISH_DATE',
        'AUTO_RENAME',
        'Current\x20version:\x20',
        'data-remove-thumbnail',
        'wrap',
        'mouseenter',
        'smooth',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        '__typename',
        'ig_cache_key',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'match',
        '<option\x20value=\x22',
        'video_versions',
        'href',
        'getTranslationText\x20catch\x20error:',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'tempFetchRateLimit',
        'mouseup',
        'get',
        'catch',
        'data-href',
        'section\x20>\x20main[role=\x22main\x22]',
        'data-modify',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'style',
        'endsWith',
        'feedback_message',
        'GL_dataCache',
        'replace',
        'getUint8',
        'createMediaListDOM',
        'prev',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        '\x22\x20data-globalIndex=\x22',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        '20000',
        '\x22\x20/>',
        'deg)',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'data-loop',
        '\x22\x20data-ih-locale-title=\x22',
        '.IG_DW_MAIN',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'off',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        '.IG_DWSTORY_THUMBNAIL',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'DOWNLOAD_DOM_TREE',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '</a></button>',
        'version:',
        'split',
        'data-type',
        'data-path',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'ALL_CHECK',
        'div\x20>\x20ul\x20li._acaz',
        'after',
        'BATCH_DOWNLOAD_SELECTED',
        'includes',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'isHomepage',
        'LOCALE_MANIFEST',
        'SETTING',
        '/info/',
        'finalUrl',
        'script',
        'close',
        '#iv_transform',
        'Modify\x20Resource\x20EXIF\x20​​Properties',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'body\x20>\x20div\x20section._ac0a',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        '<a\x20media-id=\x22',
        'data-controls',
        'getStories()',
        'div\x20>\x20ul._acay',
        'Fetch\x20from\x20memory\x20cache:',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        'MODIFY_RESOURCE_EXIF',
        'language'
    ];
    a0_0x3369 = function () {
        return _0x4ba4a2;
    };
    return a0_0x3369();
}