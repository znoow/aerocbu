// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.1.1
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

function a0_0x5a41(_0x20ba2c, _0x23ab5b) {
    const _0x103623 = a0_0x1036();
    return a0_0x5a41 = function (_0x5a41c9, _0x19654e) {
        _0x5a41c9 = _0x5a41c9 - 0x1e8;
        let _0x205ff6 = _0x103623[_0x5a41c9];
        return _0x205ff6;
    }, a0_0x5a41(_0x20ba2c, _0x23ab5b);
}
(function (_0x205c03, _0x135e0a) {
    const _0x31e629 = a0_0x5a41, _0x10b0c5 = _0x205c03();
    while (!![]) {
        try {
            const _0x4ff21f = -parseInt(_0x31e629(0x2fb)) / 0x1 * (-parseInt(_0x31e629(0x359)) / 0x2) + parseInt(_0x31e629(0x206)) / 0x3 + -parseInt(_0x31e629(0x257)) / 0x4 * (parseInt(_0x31e629(0x377)) / 0x5) + -parseInt(_0x31e629(0x2f4)) / 0x6 + -parseInt(_0x31e629(0x368)) / 0x7 + parseInt(_0x31e629(0x2b7)) / 0x8 + parseInt(_0x31e629(0x421)) / 0x9 * (parseInt(_0x31e629(0x245)) / 0xa);
            if (_0x4ff21f === _0x135e0a)
                break;
            else
                _0x10b0c5['push'](_0x10b0c5['shift']());
        } catch (_0x5529a6) {
            _0x10b0c5['push'](_0x10b0c5['shift']());
        }
    }
}(a0_0x1036, 0xdbc2d), function (_0x43d12e) {
    setTimeout(() => {
        'use strict';
        const _0x1c75e1 = a0_0x5a41;
        const _0x34195a = {
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
            }, _0x1d3471 = [
                'RENAME_PUBLISH_DATE',
                _0x1c75e1(0x34f),
                _0x1c75e1(0x379)
            ], _0x28a16e = {
                'DOWNLOAD': _0x1c75e1(0x28b),
                'NEW_TAB': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
                'THUMBNAIL': _0x1c75e1(0x2fc),
                'DOWNLOAD_ALL': _0x1c75e1(0x36b),
                'CLOSE': _0x1c75e1(0x333),
                'FULLSCREEN': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>'
            }, _0x3318b2 = 0xfa, _0x226082 = GM_getResourceText(_0x1c75e1(0x309)), _0xaf7edb = JSON['parse'](GM_getResourceText(_0x1c75e1(0x2d7)));
        var _0x16671d = {
            'videoVolume': GM_getValue(_0x1c75e1(0x263)) ? GM_getValue('G_VIDEO_VOLUME') : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x1c75e1(0x469)) ? GM_getValue('G_RENAME_FORMAT') : _0x1c75e1(0x354),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x1c75e1(0x3c5)) || navigator[_0x1c75e1(0x389)] || navigator['userLanguage'],
            'currentURL': location[_0x1c75e1(0x275)],
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
                _0x29dd24();
            })
        };
        _0x1fa037(), GM_addStyle(_0x226082), _0x45716d(), _0x1c390c(_0x16671d[_0x1c75e1(0x3c5)])['then'](_0x3ebf2f => {
            const _0x158126 = _0x1c75e1;
            _0x16671d[_0x158126(0x2af)][_0x16671d[_0x158126(0x3c5)]] = _0x3ebf2f, _0x30d0bd(), _0x45716d(), _0x24355c(0x12c);
        })[_0x1c75e1(0x2b4)](_0x1afde5 => {
            const _0x30be61 = _0x1c75e1;
            _0x45716d(), _0x24355c(0x12c), !_0x16671d['lang'][_0x30be61(0x483)]('en') && console[_0x30be61(0x253)]('getTranslationText\x20catch\x20error:', _0x1afde5);
        }), _0x221c4a(_0x1c75e1(0x2ba), GM_info[_0x1c75e1(0x3d1)][_0x1c75e1(0x449)], _0x1c75e1(0x451), GM_info['script']['version']);
        var _0x4046f6 = setInterval(function () {
            const _0x4bb0cd = _0x1c75e1;
            if (_0x43d12e(_0x4bb0cd(0x304))[_0x4bb0cd(0x3d7)] > 0x0 && !_0x43d12e(_0x4bb0cd(0x304))['is'](':hidden') || location[_0x4bb0cd(0x47b)][_0x4bb0cd(0x36e)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x4bb0cd(0x3d2)][_0x4bb0cd(0x483)](_0x4bb0cd(0x2d6))) {
                _0x16671d[_0x4bb0cd(0x3df)] = ![];
                return;
            }
            if (_0x16671d[_0x4bb0cd(0x305)] != location[_0x4bb0cd(0x275)] || !_0x16671d['firstStarted'] || !_0x16671d['pageLoaded']) {
                console['log'](_0x4bb0cd(0x1f7), _0x4bb0cd(0x35b)), clearInterval(_0x16671d['GL_repeat']), _0x16671d[_0x4bb0cd(0x3df)] = ![], _0x16671d[_0x4bb0cd(0x479)] = !![], _0x16671d['currentURL'] = location[_0x4bb0cd(0x275)], _0x16671d[_0x4bb0cd(0x3a4)]['disconnect']();
                if (location[_0x4bb0cd(0x275)][_0x4bb0cd(0x483)](_0x4bb0cd(0x346)) || location['pathname'][_0x4bb0cd(0x36e)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x4bb0cd(0x275)][_0x4bb0cd(0x483)](_0x4bb0cd(0x44c))) {
                    _0x16671d[_0x4bb0cd(0x352)][_0x4bb0cd(0x285)] = {}, _0x16671d[_0x4bb0cd(0x352)][_0x4bb0cd(0x22b)] = {}, _0x221c4a('isDialog');
                    var _0x2e29de = setInterval(() => {
                        _0x43d12e('body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['length'] > 0x0 && (clearInterval(_0x2e29de), setTimeout(() => {
                            _0x29dd24(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x16671d[_0x4bb0cd(0x3df)] = !![];
                }
                location['href'][_0x4bb0cd(0x483)](_0x4bb0cd(0x46f)) && (_0x221c4a(_0x4bb0cd(0x398)), setTimeout(() => {
                    _0x22a3fb(![]);
                }, 0x96), _0x16671d[_0x4bb0cd(0x3df)] = !![]);
                if (location[_0x4bb0cd(0x275)][_0x4bb0cd(0x303)]('?')[0x0] == 'https://www.instagram.com/') {
                    _0x16671d[_0x4bb0cd(0x352)]['stories'] = {}, _0x16671d[_0x4bb0cd(0x352)][_0x4bb0cd(0x22b)] = {};
                    let _0x8e85bb = _0x16671d['GL_referrer']?.[_0x4bb0cd(0x36e)](/^\/(stories|highlights)\//ig) != null;
                    _0x221c4a(_0x4bb0cd(0x250), _0x8e85bb), setTimeout(() => {
                        const _0x4d1b35 = _0x4bb0cd;
                        _0x29dd24(![], _0x8e85bb);
                        const _0x17421e = _0x43d12e(_0x4d1b35(0x408))?.[_0x4d1b35(0x1f6)]()[0x0];
                        _0x17421e && _0x16671d['GL_observer']['observe'](_0x17421e, { 'childList': !![] });
                    }, 0x96), _0x16671d[_0x4bb0cd(0x3df)] = !![];
                }
                _0x43d12e(_0x4bb0cd(0x3bf))[_0x4bb0cd(0x3d7)] && location[_0x4bb0cd(0x47b)][_0x4bb0cd(0x36e)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x4bb0cd(0x47b)][_0x4bb0cd(0x36e)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x221c4a('isProfile'), setTimeout(() => {
                    _0x449319(![]);
                }, 0x96), _0x16671d[_0x4bb0cd(0x3df)] = !![]);
                if (!_0x16671d['pageLoaded']) {
                    if (location[_0x4bb0cd(0x275)][_0x4bb0cd(0x36e)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x16671d[_0x4bb0cd(0x352)][_0x4bb0cd(0x22b)] = {}, _0x221c4a('isHighlightsStory'), _0x4f3378(![]), _0x16671d['GL_repeat'] = setInterval(() => {
                            _0x4b7dca(![]);
                        }, _0x3318b2), _0x43d12e(_0x4bb0cd(0x301))[_0x4bb0cd(0x3d7)] && setTimeout(() => {
                            const _0x1cd87b = _0x4bb0cd;
                            if (_0x34195a[_0x1cd87b(0x459)]) {
                                var _0x5cce1a = _0x43d12e(_0x1cd87b(0x230))['filter'](function () {
                                    const _0x44854b = _0x1cd87b;
                                    return _0x43d12e(this)[_0x44854b(0x42c)]()[_0x44854b(0x3d7)] === 0x0 && this[_0x44854b(0x276)][_0x44854b(0x344)]() !== '';
                                });
                                _0x5cce1a?.[_0x1cd87b(0x2a4)](_0x1cd87b(0x28c));
                            }
                            _0x16671d[_0x1cd87b(0x3df)] = !![];
                        }, 0x96);
                    else
                        location[_0x4bb0cd(0x275)][_0x4bb0cd(0x36e)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x221c4a(_0x4bb0cd(0x45f)), _0x43d12e(_0x4bb0cd(0x25a))[_0x4bb0cd(0x3d7)] > 0x0 && (_0x43d12e(_0x4bb0cd(0x3c3))[_0x4bb0cd(0x215)](), _0x43d12e('.IG_DWNEWTAB')[_0x4bb0cd(0x215)](), _0x43d12e(_0x4bb0cd(0x381))[_0x4bb0cd(0x3d7)] && _0x43d12e(_0x4bb0cd(0x381))[_0x4bb0cd(0x215)](), _0x4b8f7e(![]), setTimeout(() => {
                            _0x4b8f7e(![]);
                        }, 0x96)), _0x43d12e(_0x4bb0cd(0x3c3))[_0x4bb0cd(0x3d7)] && setTimeout(() => {
                            const _0x39a59a = _0x4bb0cd;
                            if (_0x34195a['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x34712f = _0x43d12e(_0x39a59a(0x230))[_0x39a59a(0x248)](function () {
                                    const _0x23e588 = _0x39a59a;
                                    return _0x43d12e(this)['children']()[_0x23e588(0x3d7)] === 0x0 && this[_0x23e588(0x276)][_0x23e588(0x344)]() !== '';
                                });
                                _0x34712f?.[_0x39a59a(0x28c)]();
                            }
                            _0x16671d[_0x39a59a(0x3df)] = !![];
                        }, 0x96)) : (_0x16671d[_0x4bb0cd(0x3df)] = ![], _0x43d12e(_0x4bb0cd(0x3c3))[_0x4bb0cd(0x3d7)] && _0x43d12e(_0x4bb0cd(0x3c3))[_0x4bb0cd(0x215)](), _0x43d12e('.IG_DWSTORY_ALL')[_0x4bb0cd(0x3d7)] && _0x43d12e('.IG_DWSTORY_ALL')[_0x4bb0cd(0x215)](), _0x43d12e('.IG_DWNEWTAB')['length'] && _0x43d12e(_0x4bb0cd(0x38d))[_0x4bb0cd(0x215)](), _0x43d12e(_0x4bb0cd(0x381))[_0x4bb0cd(0x3d7)] && _0x43d12e(_0x4bb0cd(0x381))[_0x4bb0cd(0x215)](), _0x43d12e(_0x4bb0cd(0x301))['length'] && _0x43d12e('.IG_DWHISTORY')['remove'](), _0x43d12e('.IG_DWHISTORY_ALL')['length'] && _0x43d12e(_0x4bb0cd(0x428))['remove'](), _0x43d12e(_0x4bb0cd(0x2b8))[_0x4bb0cd(0x3d7)] && _0x43d12e(_0x4bb0cd(0x2b8))[_0x4bb0cd(0x215)](), _0x43d12e('.IG_DWHISTORY_THUMBNAIL')[_0x4bb0cd(0x3d7)] && _0x43d12e('.IG_DWHISTORY_THUMBNAIL')[_0x4bb0cd(0x215)]());
                }
                _0x24355c(0x12c), _0x16671d[_0x4bb0cd(0x264)] = new URL(location[_0x4bb0cd(0x275)])[_0x4bb0cd(0x47b)];
            }
        }, _0x3318b2);
        async function _0x40a2da() {
            const _0x1e77c7 = _0x1c75e1;
            _0x285a00(!![]);
            let _0x3ea2ea = new Date()['getTime'](), _0x17a66a = Math['floor'](_0x3ea2ea / 0x3e8), _0x343ee8 = location[_0x1e77c7(0x275)][_0x1e77c7(0x1fe)](/\/$/ig, '')[_0x1e77c7(0x303)]('/')['at'](-0x1), _0x31c3d5 = await _0x1dc4a2(_0x343ee8), _0x1e4a05 = _0x31c3d5[_0x1e77c7(0x44b)]['reels_media'][0x0][_0x1e77c7(0x2f5)][_0x1e77c7(0x310)], _0x389331 = 0x0;
            _0x2cf527(_0x389331, _0x31c3d5[_0x1e77c7(0x44b)][_0x1e77c7(0x32f)][0x0][_0x1e77c7(0x435)][_0x1e77c7(0x3d7)]), _0x31c3d5[_0x1e77c7(0x44b)][_0x1e77c7(0x32f)][0x0][_0x1e77c7(0x435)][_0x1e77c7(0x48c)]((_0x1413cd, _0x176c8c) => {
                setTimeout(() => {
                    const _0x491359 = a0_0x5a41;
                    _0x34195a[_0x491359(0x2e1)] && (_0x17a66a = _0x1413cd[_0x491359(0x3ef)]), _0x1413cd['display_resources'][_0x491359(0x41e)](function (_0x61a65, _0x1c4b07) {
                        const _0x219d7b = _0x491359;
                        if (_0x61a65['config_width'] < _0x1c4b07[_0x219d7b(0x40e)])
                            return 0x1;
                        if (_0x61a65['config_width'] > _0x1c4b07[_0x219d7b(0x40e)])
                            return -0x1;
                        return 0x0;
                    }), _0x1413cd['is_video'] ? _0x33db06(_0x1413cd[_0x491359(0x26a)][0x0][_0x491359(0x468)], _0x1e4a05, _0x491359(0x285), _0x17a66a, _0x491359(0x41f), _0x1413cd['id'])[_0x491359(0x2be)](() => {
                        const _0x145250 = _0x491359;
                        _0x2cf527(++_0x389331, _0x31c3d5[_0x145250(0x44b)][_0x145250(0x32f)][0x0]['items'][_0x145250(0x3d7)]);
                    }) : _0x33db06(_0x1413cd[_0x491359(0x272)][0x0][_0x491359(0x468)], _0x1e4a05, _0x491359(0x285), _0x17a66a, _0x491359(0x216), _0x1413cd['id'])[_0x491359(0x2be)](() => {
                        const _0x8d72a9 = _0x491359;
                        _0x2cf527(++_0x389331, _0x31c3d5[_0x8d72a9(0x44b)][_0x8d72a9(0x32f)][0x0][_0x8d72a9(0x435)][_0x8d72a9(0x3d7)]);
                    });
                }, 0x64 * _0x176c8c);
            });
        }
        async function _0x4f3378(_0x4c08ef, _0x49b8f3) {
            const _0x4fe2dc = _0x1c75e1;
            var _0xc705db = _0x43d12e(_0x4fe2dc(0x378))[_0x4fe2dc(0x248)](function () {
                const _0x2d9e90 = _0x4fe2dc;
                return _0x43d12e(this)[_0x2d9e90(0x423)](_0x2d9e90(0x275))[_0x2d9e90(0x303)]('/')[_0x2d9e90(0x248)](_0x6f6382 => _0x6f6382[_0x2d9e90(0x3d7)] > 0x0)[_0x2d9e90(0x3d7)] === 0x1;
            })['first']()[_0x4fe2dc(0x423)](_0x4fe2dc(0x275))[_0x4fe2dc(0x303)]('/')['filter'](_0x12f672 => _0x12f672[_0x4fe2dc(0x3d7)] > 0x0)['at'](0x0);
            if (_0x4c08ef) {
                let _0x1bd826 = new Date()[_0x4fe2dc(0x33c)](), _0x224c77 = Math[_0x4fe2dc(0x1ef)](_0x1bd826 / 0x3e8), _0x374324 = location[_0x4fe2dc(0x275)][_0x4fe2dc(0x1fe)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x4723d0 = _0x43d12e('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')['length'] || _0x43d12e(_0x4fe2dc(0x251))[_0x4fe2dc(0x3d7)] || _0x43d12e(_0x4fe2dc(0x2fd))['find'](_0x4fe2dc(0x3ee))[_0x4fe2dc(0x3d7)], _0x578218 = 0x0;
                _0x285a00(!![]);
                if (_0x16671d[_0x4fe2dc(0x352)][_0x4fe2dc(0x22b)][_0x374324]) {
                    _0x221c4a(_0x4fe2dc(0x30b), _0x374324);
                    let _0x4fc416 = _0x16671d[_0x4fe2dc(0x352)]['highlights'][_0x374324][_0x4fe2dc(0x44b)]['reels_media'][0x0][_0x4fe2dc(0x435)][_0x4fe2dc(0x3d7)];
                    _0xc705db = _0x16671d[_0x4fe2dc(0x352)][_0x4fe2dc(0x22b)][_0x374324][_0x4fe2dc(0x44b)][_0x4fe2dc(0x32f)][0x0][_0x4fe2dc(0x2f5)]['username'], _0x578218 = _0x16671d[_0x4fe2dc(0x352)][_0x4fe2dc(0x22b)][_0x374324][_0x4fe2dc(0x44b)][_0x4fe2dc(0x32f)][0x0]['items'][_0x4fc416 - _0x4723d0];
                } else {
                    let _0x31b69c = await _0x1dc4a2(_0x374324), _0x2a4d1c = _0x31b69c[_0x4fe2dc(0x44b)][_0x4fe2dc(0x32f)][0x0]['items']['length'];
                    _0xc705db = _0x31b69c[_0x4fe2dc(0x44b)]['reels_media'][0x0][_0x4fe2dc(0x2f5)][_0x4fe2dc(0x310)], _0x578218 = _0x31b69c['data'][_0x4fe2dc(0x32f)][0x0]['items'][_0x2a4d1c - _0x4723d0], _0x16671d[_0x4fe2dc(0x352)]['highlights'][_0x374324] = _0x31b69c;
                }
                _0x221c4a(_0x4fe2dc(0x325), _0x374324, _0x16671d[_0x4fe2dc(0x352)]['highlights'][_0x374324]);
                _0x34195a[_0x4fe2dc(0x2e1)] && (_0x224c77 = _0x578218[_0x4fe2dc(0x3ef)]);
                if (_0x34195a[_0x4fe2dc(0x351)] && !_0x16671d[_0x4fe2dc(0x314)]) {
                    let _0x45b047 = await _0xcc8139(_0x578218['id']);
                    _0x45b047['status'] === 'ok' ? _0x45b047[_0x4fe2dc(0x435)][0x0][_0x4fe2dc(0x22a)] ? _0x49b8f3 ? _0x2493ec(_0x45b047['items'][0x0][_0x4fe2dc(0x22a)][0x0]['url']) : _0x33db06(_0x45b047['items'][0x0]['video_versions'][0x0][_0x4fe2dc(0x46c)], _0xc705db, _0x4fe2dc(0x22b), _0x224c77, _0x4fe2dc(0x41f), _0x45b047[_0x4fe2dc(0x435)][0x0]['id']) : _0x49b8f3 ? _0x2493ec(_0x45b047[_0x4fe2dc(0x435)][0x0][_0x4fe2dc(0x3a5)][_0x4fe2dc(0x205)][0x0][_0x4fe2dc(0x46c)]) : _0x33db06(_0x45b047[_0x4fe2dc(0x435)][0x0][_0x4fe2dc(0x3a5)]['candidates'][0x0][_0x4fe2dc(0x46c)], _0xc705db, 'highlights', _0x224c77, 'jpg', _0x45b047[_0x4fe2dc(0x435)][0x0]['id']) : (_0x34195a[_0x4fe2dc(0x34f)] ? (delete _0x16671d[_0x4fe2dc(0x352)][_0x4fe2dc(0x22b)][_0x374324], _0x16671d[_0x4fe2dc(0x314)] = !![], _0x4f3378(!![], _0x49b8f3)) : alert(_0x4fe2dc(0x3d3) + _0x45b047[_0x4fe2dc(0x3ce)]), _0x221c4a(_0x45b047));
                } else
                    _0x578218['is_video'] ? _0x49b8f3 ? _0x2493ec(_0x578218[_0x4fe2dc(0x26a)]['at'](-0x1)[_0x4fe2dc(0x468)], _0xc705db) : _0x33db06(_0x578218[_0x4fe2dc(0x26a)]['at'](-0x1)[_0x4fe2dc(0x468)], _0xc705db, _0x4fe2dc(0x22b), _0x224c77, _0x4fe2dc(0x41f), _0x578218['id']) : _0x49b8f3 ? _0x2493ec(_0x578218[_0x4fe2dc(0x272)]['at'](-0x1)[_0x4fe2dc(0x468)], _0xc705db) : _0x33db06(_0x578218[_0x4fe2dc(0x272)]['at'](-0x1)[_0x4fe2dc(0x468)], _0xc705db, _0x4fe2dc(0x22b), _0x224c77, _0x4fe2dc(0x216), _0x578218['id']), _0x16671d['tempFetchRateLimit'] = ![];
                _0x285a00(![]);
            } else {
                if (!_0x43d12e(_0x4fe2dc(0x301))[_0x4fe2dc(0x3d7)]) {
                    let _0x7bcd76 = null;
                    _0x43d12e(_0x4fe2dc(0x443))[_0x4fe2dc(0x3d7)] > 0x0 ? _0x7bcd76 = _0x43d12e('body\x20>\x20div\x20section:visible._ac0a') : (_0x7bcd76 = _0x43d12e(_0x4fe2dc(0x448)), _0x7bcd76['css']('position', 'relative'));
                    if (_0x7bcd76[_0x4fe2dc(0x3d7)] === 0x0) {
                        let _0x2b1115 = _0x43d12e(_0x4fe2dc(0x295)), _0x227ba4 = 0x0;
                        _0x2b1115['each'](function () {
                            const _0x497aa0 = _0x4fe2dc;
                            _0x43d12e(this)[_0x497aa0(0x47c)]() > _0x227ba4 && (_0x227ba4 = _0x43d12e(this)[_0x497aa0(0x47c)](), _0x7bcd76 = _0x43d12e(this)['children'](_0x497aa0(0x3e6))['first']());
                        });
                    }
                    if (_0x7bcd76 != null) {
                        _0x7bcd76[_0x4fe2dc(0x35d)](_0x4fe2dc(0x47a) + _0x4ebfe1('DW') + _0x4fe2dc(0x3f3) + _0x28a16e[_0x4fe2dc(0x302)] + _0x4fe2dc(0x37c)), _0x7bcd76[_0x4fe2dc(0x35d)](_0x4fe2dc(0x393) + _0x4ebfe1('NEW_TAB') + '\x22\x20class=\x22IG_DWHINEWTAB\x22>' + _0x28a16e[_0x4fe2dc(0x39a)] + _0x4fe2dc(0x37c));
                        let _0x1b2539 = _0x359edc(_0xc705db);
                        _0x1b2539[_0x4fe2dc(0x3d7)] > 0x1 && _0x7bcd76['append'](_0x4fe2dc(0x20a) + _0x4ebfe1(_0x4fe2dc(0x278)) + _0x4fe2dc(0x2d1) + _0x28a16e[_0x4fe2dc(0x25d)] + _0x4fe2dc(0x37c)), _0x7bcd76['find'](_0x4fe2dc(0x241))['each'](function () {
                            const _0x5bfd42 = _0x4fe2dc;
                            _0x43d12e(this)['on'](_0x5bfd42(0x38b), function () {
                                const _0x316b87 = _0x5bfd42;
                                !_0x43d12e(this)[_0x316b87(0x44b)](_0x316b87(0x362)) && (_0x7bcd76['find'](_0x316b87(0x334))[_0x316b87(0x3d7)] === 0x0 ? (_0x43d12e(this)[_0x316b87(0x423)](_0x316b87(0x42f), !![]), _0x43d12e(_0x316b87(0x334))[_0x316b87(0x215)](), _0x221c4a(_0x316b87(0x313))) : (_0x43d12e(this)[_0x316b87(0x423)](_0x316b87(0x42f), !![]), _0x221c4a(_0x316b87(0x2bc))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x4b7dca(_0x1205fe) {
            const _0xc41c17 = _0x1c75e1;
            if (_0x1205fe) {
                let _0x32260d = new Date()[_0xc41c17(0x33c)](), _0x1e18f1 = Math['floor'](_0x32260d / 0x3e8), _0x6f3102 = location[_0xc41c17(0x275)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x507831 = '', _0x5bc6cc = _0x43d12e('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')['length'] || _0x43d12e(_0xc41c17(0x251))[_0xc41c17(0x3d7)] || _0x43d12e('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0xc41c17(0x3aa)](_0xc41c17(0x3ee))['length'], _0x4fa9ed = '';
                _0x285a00(!![]);
                if (_0x16671d['GL_dataCache'][_0xc41c17(0x22b)][_0x6f3102]) {
                    _0x221c4a('Fetch\x20from\x20memory\x20cache:', _0x6f3102);
                    let _0x2cb441 = _0x16671d[_0xc41c17(0x352)][_0xc41c17(0x22b)][_0x6f3102][_0xc41c17(0x44b)][_0xc41c17(0x32f)][0x0]['items'][_0xc41c17(0x3d7)];
                    _0x507831 = _0x16671d[_0xc41c17(0x352)][_0xc41c17(0x22b)][_0x6f3102]['data'][_0xc41c17(0x32f)][0x0][_0xc41c17(0x2f5)][_0xc41c17(0x310)], _0x4fa9ed = _0x16671d[_0xc41c17(0x352)][_0xc41c17(0x22b)][_0x6f3102]['data'][_0xc41c17(0x32f)][0x0][_0xc41c17(0x435)][_0x2cb441 - _0x5bc6cc];
                } else {
                    let _0x20dd23 = await _0x1dc4a2(_0x6f3102), _0x1dcb3b = _0x20dd23[_0xc41c17(0x44b)]['reels_media'][0x0][_0xc41c17(0x435)][_0xc41c17(0x3d7)];
                    _0x507831 = _0x20dd23[_0xc41c17(0x44b)]['reels_media'][0x0][_0xc41c17(0x2f5)][_0xc41c17(0x310)], _0x4fa9ed = _0x20dd23[_0xc41c17(0x44b)]['reels_media'][0x0][_0xc41c17(0x435)][_0x1dcb3b - _0x5bc6cc], _0x16671d['GL_dataCache'][_0xc41c17(0x22b)][_0x6f3102] = _0x20dd23;
                }
                _0x34195a[_0xc41c17(0x2e1)] && (_0x1e18f1 = _0x4fa9ed[_0xc41c17(0x3ef)]);
                if (_0x34195a[_0xc41c17(0x351)] && !_0x16671d[_0xc41c17(0x314)]) {
                    let _0x45e733 = await _0xcc8139(_0x4fa9ed['id']);
                    _0x45e733[_0xc41c17(0x267)] === 'ok' ? _0x33db06(_0x45e733[_0xc41c17(0x435)][0x0][_0xc41c17(0x3a5)][_0xc41c17(0x205)][0x0][_0xc41c17(0x46c)], _0x507831, _0xc41c17(0x22b), _0x1e18f1, 'jpg', _0x6f3102) : (_0x34195a[_0xc41c17(0x34f)] ? (delete _0x16671d[_0xc41c17(0x352)][_0xc41c17(0x22b)][_0x6f3102], _0x16671d[_0xc41c17(0x314)] = !![], _0x4b7dca(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x45e733[_0xc41c17(0x3ce)]), _0x221c4a(_0x45e733));
                } else
                    _0x33db06(_0x4fa9ed[_0xc41c17(0x272)]['at'](-0x1)[_0xc41c17(0x468)], _0x507831, 'highlights', _0x1e18f1, _0xc41c17(0x216), _0x6f3102), _0x16671d[_0xc41c17(0x314)] = ![];
                _0x285a00(![]);
            } else {
                if (_0x43d12e(_0xc41c17(0x1f1))[_0xc41c17(0x3d7)]) {
                    if (!_0x43d12e(_0xc41c17(0x334))[_0xc41c17(0x3d7)]) {
                        let _0x2d731e = null;
                        _0x43d12e(_0xc41c17(0x443))[_0xc41c17(0x3d7)] > 0x0 ? _0x2d731e = _0x43d12e('body\x20>\x20div\x20section:visible._ac0a') : (_0x2d731e = _0x43d12e(_0xc41c17(0x448)), _0x2d731e[_0xc41c17(0x24f)](_0xc41c17(0x31b), _0xc41c17(0x2cd)));
                        if (_0x2d731e[_0xc41c17(0x3d7)] === 0x0) {
                            let _0x30f8a8 = _0x43d12e(_0xc41c17(0x295)), _0x5f1bfe = 0x0;
                            _0x30f8a8[_0xc41c17(0x3c2)](function () {
                                const _0x56fe77 = _0xc41c17;
                                _0x43d12e(this)[_0x56fe77(0x47c)]() > _0x5f1bfe && (_0x5f1bfe = _0x43d12e(this)[_0x56fe77(0x47c)](), _0x2d731e = _0x43d12e(this)['children'](_0x56fe77(0x3e6))['first']());
                            });
                        }
                        _0x2d731e != null && _0x2d731e['append'](_0xc41c17(0x3ac) + _0x4ebfe1(_0xc41c17(0x444)) + _0xc41c17(0x3bb) + _0x28a16e[_0xc41c17(0x3f6)] + _0xc41c17(0x37c));
                    }
                } else
                    _0x43d12e(_0xc41c17(0x334))[_0xc41c17(0x215)]();
            }
        }
        function _0x29dd24(_0x3f178b, _0x562400) {
            const _0x5c9aab = _0x1c75e1;
            _0x562400 === !![] && (_0x221c4a(_0x5c9aab(0x480), _0x5c9aab(0x42e)), _0x43d12e(_0x5c9aab(0x1f8))['filter'](function () {
                const _0xf32ac8 = _0x5c9aab;
                return _0x43d12e(this)['find'](_0xf32ac8(0x30c))[_0xf32ac8(0x3d7)] === 0x0;
            })[_0x5c9aab(0x292)](_0x5c9aab(0x2e5)));
            if (_0x3f178b == ![]) {
                const _0x5875e4 = 0x64;
                let _0x319767 = 0x0;
                var _0x277444 = setInterval(() => {
                    const _0x315d1a = _0x5c9aab;
                    (_0x319767 > _0x5875e4 || _0x43d12e(_0x315d1a(0x201))[_0x315d1a(0x3d7)] > 0x0) && (clearInterval(_0x277444), _0x319767 > _0x5875e4 && console[_0x315d1a(0x244)](_0x315d1a(0x3fd), _0x315d1a(0x2ac))), _0x221c4a(_0x315d1a(0x3fd), _0x315d1a(0x2e7)), _0x4d4513(), _0x319767++;
                }, 0x32);
            } else
                _0x4d4513();
        }
        function _0x1d49e8(_0x1f345f) {
            const _0xe16a79 = _0x1c75e1;
            _0x34195a[_0xe16a79(0x3b8)] && _0x1f345f[_0xe16a79(0x3aa)](_0xe16a79(0x1fd))[_0xe16a79(0x3c2)](function () {
                const _0x5200e1 = _0xe16a79;
                _0x43d12e(this)['on'](_0x5200e1(0x271), function () {
                    const _0x24c075 = _0x5200e1;
                    !_0x43d12e(this)[_0x24c075(0x44b)](_0x24c075(0x369)) && (_0x43d12e(this)['attr'](_0x24c075(0x23c), !![]), this[_0x24c075(0x3f5)](), _0x221c4a(_0x24c075(0x46a)));
                });
            });
            _0x34195a[_0xe16a79(0x33a)] && _0x1f345f[_0xe16a79(0x3aa)](_0xe16a79(0x1fd))[_0xe16a79(0x3c2)](function () {
                _0x43d12e(this)['on']('play\x20playing', function () {
                    const _0x2fa65f = a0_0x5a41;
                    !_0x43d12e(this)[_0x2fa65f(0x44b)](_0x2fa65f(0x2bf)) && (_0x43d12e(this)[_0x2fa65f(0x423)](_0x2fa65f(0x2a5), !![]), this[_0x2fa65f(0x358)] = _0x16671d[_0x2fa65f(0x3f7)], _0x221c4a(_0x2fa65f(0x3a3)));
                });
            });
            _0x34195a['HTML5_VIDEO_CONTROL'] && _0x1f345f[_0xe16a79(0x3aa)](_0xe16a79(0x1fd))['each'](function () {
                const _0x411cf2 = _0xe16a79;
                if (!_0x43d12e(this)[_0x411cf2(0x44b)](_0x411cf2(0x414))) {
                    let _0x35be34 = _0x43d12e(this);
                    _0x221c4a(_0x411cf2(0x3c9)), _0x34195a['MODIFY_VIDEO_VOLUME'] && (this[_0x411cf2(0x358)] = _0x16671d[_0x411cf2(0x3f7)], _0x43d12e(this)['on']('loadstart', function () {
                        const _0x37065e = _0x411cf2;
                        this[_0x37065e(0x358)] = _0x16671d[_0x37065e(0x3f7)];
                    })), _0x43d12e(this)['on'](_0x411cf2(0x407), function (_0x3e9c17) {
                        const _0x340ff4 = _0x411cf2;
                        _0x3e9c17[_0x340ff4(0x452)](), _0x35be34[_0x340ff4(0x24f)](_0x340ff4(0x20c), '-1'), _0x35be34[_0x340ff4(0x292)](_0x340ff4(0x414));
                    }), _0x43d12e(this)[_0x411cf2(0x1f6)]()[_0x411cf2(0x3aa)](_0x411cf2(0x3b5))[_0x411cf2(0x308)]()['on'](_0x411cf2(0x407), function (_0x22b9ec) {
                        const _0x1454da = _0x411cf2;
                        _0x22b9ec[_0x1454da(0x452)](), _0x35be34[_0x1454da(0x24f)](_0x1454da(0x20c), '2'), _0x35be34['attr'](_0x1454da(0x414), !![]);
                    }), _0x43d12e(this)['on'](_0x411cf2(0x2b3), function () {
                        const _0xbe09ba = _0x411cf2;
                        let _0x5bd148 = _0x43d12e(this)['parent']()[_0xbe09ba(0x3aa)]('video\x20+\x20div\x20>\x20div')[_0xbe09ba(0x3aa)](_0xbe09ba(0x300))['filter'](function (_0x489ff3) {
                            const _0x1b6e03 = _0xbe09ba;
                            return _0x43d12e(this)[_0x1b6e03(0x47c)]() <= 0x40 && _0x43d12e(this)[_0x1b6e03(0x3fa)]() <= 0x40 && _0x43d12e(this)[_0x1b6e03(0x3aa)](_0x1b6e03(0x458))[_0x1b6e03(0x3d7)] > 0x0;
                        });
                        var _0x39b563 = _0x5bd148[_0xbe09ba(0x3aa)]('svg\x20>\x20path[d^=\x22M16.636\x22]')['length'] === 0x0;
                        this[_0xbe09ba(0x44a)] != _0x39b563 && (this[_0xbe09ba(0x358)] = _0x16671d[_0xbe09ba(0x3f7)], _0x5bd148?.[_0xbe09ba(0x2a4)](_0xbe09ba(0x28c))), _0x43d12e(this)[_0xbe09ba(0x423)]('data-completed') && (_0x16671d[_0xbe09ba(0x3f7)] = this[_0xbe09ba(0x358)], GM_setValue(_0xbe09ba(0x263), this[_0xbe09ba(0x358)])), this[_0xbe09ba(0x358)] == _0x16671d[_0xbe09ba(0x3f7)] && _0x43d12e(this)[_0xbe09ba(0x423)]('data-completed', !![]);
                    }), _0x43d12e(this)[_0x411cf2(0x24f)](_0x411cf2(0x31b), _0x411cf2(0x36c)), _0x43d12e(this)[_0x411cf2(0x24f)](_0x411cf2(0x20c), '2'), _0x43d12e(this)['attr'](_0x411cf2(0x347), !![]), _0x43d12e(this)[_0x411cf2(0x423)](_0x411cf2(0x414), !![]);
                }
            });
            var _0x675b27 = _0x1f345f[_0xe16a79(0x3aa)]('video'), _0x16f580 = _0x1f345f[_0xe16a79(0x3aa)]('video\x20+\x20div\x20>\x20div')['first']();
            _0x3c955d(_0x675b27, _0x16f580, _0xe16a79(0x434), _0xe16a79(0x481));
        }
        ;
        function _0x4d4513() {
            const _0x41df2a = _0x1c75e1;
            _0x43d12e(_0x41df2a(0x2a2))[_0x41df2a(0x217)](function (_0x227aa4) {
                const _0x376c05 = _0x41df2a;
                return _0x43d12e(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x43d12e(this)[_0x376c05(0x1f6)]()[_0x376c05(0x1f6)]()['parent']()[_0x376c05(0x1f6)]()[0x0] : this;
            })[_0x41df2a(0x248)](function () {
                const _0x4f22d5 = _0x41df2a;
                return _0x43d12e(this)[_0x4f22d5(0x3fa)]() > 0x0 && _0x43d12e(this)[_0x4f22d5(0x47c)]() > 0x0;
            })[_0x41df2a(0x3c2)](function (_0x5b99e9) {
                const _0x546d44 = _0x41df2a;
                if (!_0x43d12e(this)[_0x546d44(0x423)](_0x546d44(0x2e5)) && !_0x43d12e(this)['hasClass'](_0x546d44(0x3ec)) && !_0x43d12e(this)[_0x546d44(0x42c)](_0x546d44(0x44f))?.[_0x546d44(0x3e0)]('x1iyjqo2') && _0x43d12e(this)[_0x546d44(0x3ff)]('div#scrollview')['length'] === 0x0) {
                    _0x221c4a(_0x546d44(0x3e3), _0x43d12e(this));
                    const _0x3970af = _0x43d12e(this), _0x219c21 = this['tagName'], _0x8814ab = '._acay\x20._acaz';
                    var _0x17128a;
                    if (_0x219c21 === _0x546d44(0x397) && _0x5b99e9 != 0x0)
                        return;
                    const _0x506b64 = _0x3970af['children'](_0x546d44(0x3e6))['children'](_0x546d44(0x3e6));
                    if (_0x506b64[_0x546d44(0x3d7)] === 0x0)
                        return;
                    _0x221c4a('Found\x20insert\x20point', _0x506b64);
                    if (_0x3970af[_0x546d44(0x3aa)](_0x546d44(0x34e))[_0x546d44(0x3d7)] > 0x0) {
                        _0x3970af[_0x546d44(0x3aa)](_0x546d44(0x2ee))[_0x546d44(0x3d7)] > 0x0 && _0x3970af[_0x546d44(0x3aa)](_0x546d44(0x2ee))[_0x546d44(0x24f)]('top', _0x546d44(0x287));
                        const _0x137d11 = _0x3970af[_0x546d44(0x3aa)](_0x546d44(0x34e))['first']()['parent']()[0x0];
                        var _0x34ceb4 = new MutationObserver(function () {
                            const _0x40cb6c = _0x546d44;
                            _0x3970af[_0x40cb6c(0x3aa)](_0x40cb6c(0x2ee))['css'](_0x40cb6c(0x24d), _0x40cb6c(0x287));
                        });
                        _0x34ceb4[_0x546d44(0x3e7)](_0x137d11, { 'childList': !![] });
                    }
                    _0x506b64['eq'](_0x219c21 === _0x546d44(0x397) ? 0x0 : _0x506b64['length'] - 0x2)[_0x546d44(0x35d)](_0x546d44(0x446));
                    const _0x29cd1b = _0x546d44(0x47a) + _0x4ebfe1('DW') + _0x546d44(0x2c6) + _0x28a16e[_0x546d44(0x302)] + _0x546d44(0x37c), _0x1f120d = _0x546d44(0x393) + _0x4ebfe1(_0x546d44(0x39a)) + _0x546d44(0x2f1) + _0x28a16e['NEW_TAB'] + _0x546d44(0x37c), _0x5eea5b = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x4ebfe1('THUMBNAIL_INTRO') + _0x546d44(0x1ee) + _0x28a16e[_0x546d44(0x3f6)] + '</div>', _0x5d588e = _0x546d44(0x48b) + _0x4ebfe1(_0x546d44(0x463)) + '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>' + _0x28a16e[_0x546d44(0x457)] + _0x546d44(0x37c);
                    _0x506b64[_0x546d44(0x3aa)]('.button_wrapper')[_0x546d44(0x35d)](_0x29cd1b);
                    const _0x3154d4 = _0x3970af['find'](_0x8814ab)[_0x546d44(0x3d7)];
                    if (_0x3154d4 > 0x1 && _0x34195a[_0x546d44(0x231)] && !_0x34195a[_0x546d44(0x365)]) {
                        const _0x5156bb = '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x4ebfe1(_0x546d44(0x278)) + _0x546d44(0x2e9) + _0x28a16e['DOWNLOAD_ALL'] + _0x546d44(0x37c);
                        _0x506b64[_0x546d44(0x3aa)](_0x546d44(0x273))[_0x546d44(0x35d)](_0x5156bb);
                    }
                    _0x506b64[_0x546d44(0x3aa)](_0x546d44(0x273))[_0x546d44(0x35d)](_0x1f120d), setTimeout(() => {
                        const _0x4b2d5f = _0x546d44;
                        if (_0x506b64['eq'](_0x219c21 === _0x4b2d5f(0x397) ? 0x0 : _0x506b64[_0x4b2d5f(0x3d7)] - 0x2)[_0x4b2d5f(0x3aa)](_0x4b2d5f(0x27e))[_0x4b2d5f(0x3d7)] === 0x0)
                            _0x506b64[_0x4b2d5f(0x3aa)](_0x4b2d5f(0x1fd))[_0x4b2d5f(0x3d7)] > 0x0 ? _0x506b64[_0x4b2d5f(0x3aa)]('.button_wrapper')[_0x4b2d5f(0x35d)](_0x5eea5b) : (_0x17128a = _0x3970af[_0x4b2d5f(0x3aa)](_0x4b2d5f(0x482))['filter'](function () {
                                const _0x2172a7 = _0x4b2d5f;
                                return _0x43d12e(this)[_0x2172a7(0x47c)]() > 0xc8 && _0x43d12e(this)[_0x2172a7(0x3fa)]() > 0xc8;
                            })[_0x4b2d5f(0x423)](_0x4b2d5f(0x468)), _0x506b64[_0x4b2d5f(0x3aa)]('.button_wrapper')[_0x4b2d5f(0x35d)](_0x5d588e));
                        else {
                            const _0x4ac373 = (_0xf7c3e0, _0x215957) => {
                                    const _0x2fe111 = _0x4b2d5f;
                                    _0xf7c3e0[_0x2fe111(0x48c)](_0x116673 => {
                                        const _0x6347ef = _0x2fe111;
                                        if (_0x116673[_0x6347ef(0x350)]) {
                                            var _0x1060fa = _0x43d12e(_0x116673[_0x6347ef(0x1eb)]);
                                            _0x506b64['find'](_0x6347ef(0x2f8))?.[_0x6347ef(0x215)](), _0x506b64[_0x6347ef(0x3aa)]('.IG_IMAGE_VIEWER')?.[_0x6347ef(0x215)](), _0x1060fa[_0x6347ef(0x3aa)](_0x6347ef(0x1fd))[_0x6347ef(0x3d7)] > 0x0 ? (_0x506b64[_0x6347ef(0x3aa)]('.IG_THUMBNAIL_MAIN')[_0x6347ef(0x3d7)] === 0x0 && _0x506b64[_0x6347ef(0x3aa)](_0x6347ef(0x273))['append'](_0x5eea5b), _0x1d49e8(_0x3970af)) : (_0x17128a = _0x1060fa[_0x6347ef(0x3aa)]('img')['attr'](_0x6347ef(0x468)), _0x506b64[_0x6347ef(0x3aa)](_0x6347ef(0x273))['append'](_0x5d588e));
                                        }
                                    });
                                }, _0x37f128 = new IntersectionObserver(_0x4ac373, {
                                    'root': _0x3970af['find']('div\x20>\x20ul._acay')[_0x4b2d5f(0x308)]()[_0x4b2d5f(0x1f6)]()[_0x4b2d5f(0x1f6)]()[_0x4b2d5f(0x1f6)]()[0x0],
                                    'rootMargin': _0x4b2d5f(0x29e),
                                    'threshold': 0.1
                                }), _0x4b71e4 = new MutationObserver(function (_0x595543, _0xebe1db) {
                                    const _0x37b0b8 = _0x4b2d5f;
                                    var _0x3c019a = _0x595543['at'](0x0)?.[_0x37b0b8(0x1eb)];
                                    _0x43d12e(_0x3c019a)[_0x37b0b8(0x3aa)](_0x37b0b8(0x21b))['each'](function () {
                                        const _0x122a7d = _0x37b0b8;
                                        _0x37f128[_0x122a7d(0x3e7)](this);
                                    });
                                });
                            _0x3970af[_0x4b2d5f(0x3aa)](_0x4b2d5f(0x27e))['each'](function () {
                                const _0x2a819b = _0x4b2d5f;
                                _0x37f128[_0x2a819b(0x3e7)](this);
                            });
                            const _0x28a960 = _0x506b64['eq'](_0x219c21 === _0x4b2d5f(0x397) ? 0x0 : _0x506b64[_0x4b2d5f(0x3d7)] - 0x2)['find'](_0x4b2d5f(0x27e))?.[_0x4b2d5f(0x1f6)]()[0x0], _0x5ab824 = _0x506b64['eq'](_0x219c21 === _0x4b2d5f(0x397) ? 0x0 : _0x506b64[_0x4b2d5f(0x3d7)] - 0x2)['find']('div\x20>\x20ul\x20li._acaz')?.['parent']()[_0x4b2d5f(0x1f6)]()[0x0];
                            _0x28a960 && _0x4b71e4[_0x4b2d5f(0x3e7)](_0x28a960, { 'childList': !![] }), _0x5ab824 && _0x4b71e4[_0x4b2d5f(0x3e7)](_0x5ab824, { 'attributes': !![] });
                        }
                    }, 0x32), _0x506b64[_0x546d44(0x24f)](_0x546d44(0x31b), 'relative'), _0x1d49e8(_0x3970af), _0x16671d[_0x546d44(0x450)][_0x546d44(0x243)]({
                        'element': this,
                        'trigger': [
                            _0x546d44(0x2f8),
                            _0x546d44(0x27c),
                            _0x546d44(0x343),
                            '.IG_DW_MAIN',
                            _0x546d44(0x402)
                        ]
                    }), _0x43d12e(this)['on'](_0x546d44(0x28c), _0x546d44(0x402), function () {
                        const _0x32a552 = _0x546d44;
                        _0x17128a != null ? _0x98bd18(_0x17128a) : alert(_0x32a552(0x247));
                    }), _0x43d12e(this)['on'](_0x546d44(0x28c), _0x546d44(0x2f8), function () {
                        const _0x10f509 = _0x546d44;
                        _0x285a00(!![]), _0x16671d['GL_username'] = _0x3970af[_0x10f509(0x423)](_0x10f509(0x32d)), _0x16671d['GL_postPath'] = location[_0x10f509(0x47b)][_0x10f509(0x1fe)](/\/$/, '')[_0x10f509(0x303)]('/')['at'](-0x1) || _0x3970af[_0x10f509(0x3aa)]('a[href^=\x22/p/\x22]')['first']()[_0x10f509(0x423)](_0x10f509(0x275))['split']('/')['at'](0x2) || _0x43d12e(this)[_0x10f509(0x1f6)]()[_0x10f509(0x1f6)]()[_0x10f509(0x1f6)]()[_0x10f509(0x42c)]('div:last-child')[_0x10f509(0x42c)](_0x10f509(0x3e6))[_0x10f509(0x42c)](_0x10f509(0x3a0))[_0x10f509(0x3aa)](_0x10f509(0x252))['last']()[_0x10f509(0x423)](_0x10f509(0x275))[_0x10f509(0x303)]('/')['at'](0x2);
                        var _0x384807 = _0x52395e(_0x3970af);
                        _0x4a454a(!![], ![]), _0xb1cb90(_0x16671d[_0x10f509(0x26d)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x10f509(0x2be)](() => {
                            let _0x39c2c8 = setInterval(() => {
                                const _0x5237e2 = a0_0x5a41;
                                if (_0x43d12e(_0x5237e2(0x454))[_0x5237e2(0x3d7)] > 0x0) {
                                    clearInterval(_0x39c2c8);
                                    var _0x2ac7e1 = _0x43d12e(_0x5237e2(0x348) + (_0x384807 + 0x1) + '\x22]')?.[_0x5237e2(0x1f6)]()['find'](_0x5237e2(0x3cd))?.[_0x5237e2(0x308)]();
                                    _0x2ac7e1 != null && _0x2ac7e1['length'] > 0x0 ? _0x2ac7e1[_0x5237e2(0x2a4)](_0x5237e2(0x28c)) : alert(_0x5237e2(0x1f5)), _0x285a00(![]), _0x43d12e(_0x5237e2(0x35c))[_0x5237e2(0x215)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x43d12e(this)['on'](_0x546d44(0x28c), _0x546d44(0x27c), function () {
                        const _0x3239b5 = _0x546d44;
                        _0x285a00(!![]), _0x16671d['GL_username'] = _0x3970af['attr'](_0x3239b5(0x32d)), _0x16671d['GL_postPath'] = location[_0x3239b5(0x47b)][_0x3239b5(0x1fe)](/\/$/, '')[_0x3239b5(0x303)]('/')['at'](-0x1) || _0x3970af[_0x3239b5(0x3aa)]('a[href^=\x22/p/\x22]')['first']()[_0x3239b5(0x423)](_0x3239b5(0x275))[_0x3239b5(0x303)]('/')['at'](0x2) || _0x43d12e(this)[_0x3239b5(0x1f6)]()[_0x3239b5(0x1f6)]()[_0x3239b5(0x1f6)]()['children'](_0x3239b5(0x3a0))[_0x3239b5(0x42c)](_0x3239b5(0x3e6))['children']('div:last-child')[_0x3239b5(0x3aa)](_0x3239b5(0x252))[_0x3239b5(0x1fa)]()[_0x3239b5(0x423)](_0x3239b5(0x275))['split']('/')['at'](0x2);
                        var _0x4fc966 = _0x52395e(_0x3970af);
                        _0x4a454a(!![], ![]), _0xb1cb90(_0x16671d[_0x3239b5(0x26d)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x3239b5(0x2be)](() => {
                            let _0x4f7fa3 = setInterval(() => {
                                const _0x3f9b95 = a0_0x5a41;
                                if (_0x43d12e(_0x3f9b95(0x454))['length'] > 0x0) {
                                    clearInterval(_0x4f7fa3);
                                    var _0x5e70a0 = _0x43d12e(_0x3f9b95(0x348) + (_0x4fc966 + 0x1) + '\x22]');
                                    if (_0x34195a[_0x3f9b95(0x351)] && _0x34195a['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0x3d93de(_0x5e70a0[_0x3f9b95(0x308)]()[0x0], !![]);
                                    else {
                                        let _0x2f8d9c = _0x5e70a0?.['attr'](_0x3f9b95(0x329));
                                        if (_0x2f8d9c) {
                                            var _0x1a8190 = new URL(_0x2f8d9c);
                                            _0x1a8190['host'] = 'scontent.cdninstagram.com', _0x2493ec(_0x1a8190[_0x3f9b95(0x275)]);
                                        } else
                                            alert(_0x3f9b95(0x477));
                                    }
                                    _0x285a00(![]), _0x43d12e('.IG_POPUP_DIG')[_0x3f9b95(0x215)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x43d12e(this)['on'](_0x546d44(0x28c), '.IG_DW_ALL_MAIN', async function () {
                        const _0x5066aa = _0x546d44;
                        _0x16671d[_0x5066aa(0x405)] = _0x3970af['attr']('data-username'), _0x16671d['GL_postPath'] = location[_0x5066aa(0x47b)][_0x5066aa(0x1fe)](/\/$/, '')[_0x5066aa(0x303)]('/')['at'](-0x1) || _0x3970af[_0x5066aa(0x3aa)]('a[href^=\x22/p/\x22]')['first']()[_0x5066aa(0x423)](_0x5066aa(0x275))[_0x5066aa(0x303)]('/')['at'](0x2) || _0x43d12e(this)['parent']()['parent']()[_0x5066aa(0x1f6)]()[_0x5066aa(0x42c)](_0x5066aa(0x3a0))[_0x5066aa(0x42c)](_0x5066aa(0x3e6))['children']('div:last-child')[_0x5066aa(0x3aa)](_0x5066aa(0x252))[_0x5066aa(0x1fa)]()[_0x5066aa(0x423)](_0x5066aa(0x275))[_0x5066aa(0x303)]('/')['at'](0x2), _0x4a454a(_0x34195a['DIRECT_DOWNLOAD_ALL'], !![]), _0x43d12e(_0x5066aa(0x42d))[_0x5066aa(0x2e3)](_0x5066aa(0x23a) + _0x16671d['GL_postPath'] + '\x22>' + _0x16671d[_0x5066aa(0x26d)] + _0x5066aa(0x24c)), _0x43d12e(_0x5066aa(0x454))[_0x5066aa(0x3c2)](function () {
                            const _0x4dc174 = _0x5066aa;
                            _0x43d12e(this)[_0x4dc174(0x417)](_0x4dc174(0x441)), _0x43d12e(this)[_0x4dc174(0x42b)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x43d12e(this)[_0x4dc174(0x470)](_0x4dc174(0x393) + _0x4ebfe1(_0x4dc174(0x39a)) + _0x4dc174(0x39d) + _0x28a16e[_0x4dc174(0x39a)] + _0x4dc174(0x37c)), _0x43d12e(this)[_0x4dc174(0x423)](_0x4dc174(0x3b7)) == _0x4dc174(0x1fd) && _0x43d12e(this)[_0x4dc174(0x470)](_0x4dc174(0x3ac) + _0x4ebfe1(_0x4dc174(0x444)) + _0x4dc174(0x395) + _0x28a16e[_0x4dc174(0x3f6)] + '</div>');
                        }), _0xb1cb90(_0x16671d[_0x5066aa(0x26d)], _0x5066aa(0x38f), _0x4ebfe1(_0x5066aa(0x2ed)))['then'](() => {
                            let _0x2992f8 = setInterval(() => {
                                const _0x18204d = a0_0x5a41;
                                _0x43d12e(_0x18204d(0x454))[_0x18204d(0x3d7)] > 0x0 && (clearInterval(_0x2992f8), _0x43d12e(_0x18204d(0x454))[_0x18204d(0x3c2)](function () {
                                    const _0x16d041 = _0x18204d;
                                    _0x43d12e(this)[_0x16d041(0x2a4)](_0x16d041(0x28c));
                                }), _0x43d12e(_0x18204d(0x35c))[_0x18204d(0x215)]());
                            }, 0xfa);
                        });
                    }), _0x43d12e(this)['on']('click', _0x546d44(0x30c), async function () {
                        const _0x453e4a = _0x546d44;
                        _0x16671d[_0x453e4a(0x405)] = _0x3970af['attr'](_0x453e4a(0x32d)), _0x16671d[_0x453e4a(0x26d)] = location[_0x453e4a(0x47b)]['replace'](/\/$/, '')['split']('/')['at'](-0x1) || _0x3970af[_0x453e4a(0x3aa)]('a[href^=\x22/p/\x22]')['first']()[_0x453e4a(0x423)](_0x453e4a(0x275))[_0x453e4a(0x303)]('/')['at'](0x2) || _0x43d12e(this)[_0x453e4a(0x1f6)]()[_0x453e4a(0x1f6)]()[_0x453e4a(0x1f6)]()[_0x453e4a(0x42c)](_0x453e4a(0x3a0))[_0x453e4a(0x42c)]('div')[_0x453e4a(0x42c)]('div:last-child')[_0x453e4a(0x3aa)]('a[href^=\x22/p/\x22]')[_0x453e4a(0x1fa)]()[_0x453e4a(0x423)]('href')[_0x453e4a(0x303)]('/')['at'](0x2), _0x4a454a(_0x34195a['DIRECT_DOWNLOAD_ALL'], !![]), _0x43d12e(_0x453e4a(0x42d))['html'](_0x453e4a(0x23a) + _0x16671d['GL_postPath'] + '\x22>' + _0x16671d[_0x453e4a(0x26d)] + _0x453e4a(0x24c));
                        if (_0x34195a[_0x453e4a(0x231)]) {
                            _0x285a00(!![]), _0x54e55e(!![]);
                            var _0xd61b1a = _0x52395e(_0x43d12e(this)[_0x453e4a(0x1f6)]()[_0x453e4a(0x1f6)]()[_0x453e4a(0x1f6)]());
                            _0xb1cb90(_0x16671d['GL_postPath'], _0x453e4a(0x38f), '')[_0x453e4a(0x2be)](() => {
                                let _0x1be60f = setInterval(() => {
                                    const _0x4b2abb = a0_0x5a41;
                                    if (_0x43d12e(_0x4b2abb(0x454))[_0x4b2abb(0x3d7)] > 0x0) {
                                        clearInterval(_0x1be60f);
                                        var _0x51fdd1 = _0x43d12e('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0xd61b1a + 0x1) + '\x22]')?.[_0x4b2abb(0x423)](_0x4b2abb(0x329));
                                        _0x51fdd1 ? (_0x285a00(![]), _0x43d12e(_0x4b2abb(0x348) + (_0xd61b1a + 0x1) + '\x22]')?.[_0x4b2abb(0x2a4)](_0x4b2abb(0x28c))) : alert(_0x4b2abb(0x2a7)), _0x43d12e(_0x4b2abb(0x35c))['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x34195a[_0x453e4a(0x365)]) {
                            var _0x84315a = 0x0, _0x139674 = _0x43d12e(this)[_0x453e4a(0x1f6)]()[_0x453e4a(0x1f6)]()[_0x453e4a(0x3aa)](_0x8814ab)[_0x453e4a(0x3d7)], _0x109317 = _0x34195a[_0x453e4a(0x2d4)], _0x50853b = new Date(_0x43d12e(this)[_0x453e4a(0x1f6)]()[_0x453e4a(0x1f6)]()['find'](_0x453e4a(0x1ff))['first']()[_0x453e4a(0x423)]('datetime'))[_0x453e4a(0x33c)]();
                            if (_0x139674)
                                _0x43d12e(this)['parent']()[_0x453e4a(0x1f6)]()[_0x453e4a(0x3aa)](_0x8814ab)[_0x453e4a(0x3c2)](function () {
                                    const _0x33b107 = _0x453e4a;
                                    let _0x428997 = _0x43d12e(this)['parent']()[_0x33b107(0x1f6)]()[_0x33b107(0x1f6)]()[_0x33b107(0x3aa)](_0x33b107(0x1fd));
                                    _0x428997 && _0x428997[_0x33b107(0x423)](_0x33b107(0x468)) && (_0x109317 = !![]);
                                }), _0x109317 || _0x34195a[_0x453e4a(0x351)] ? _0xb1cb90(_0x16671d['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x4ebfe1(_0x453e4a(0x2ed))) : (_0x43d12e(this)[_0x453e4a(0x1f6)]()['parent']()['find'](_0x8814ab)[_0x453e4a(0x3c2)](function () {
                                    const _0xd0cd04 = _0x453e4a;
                                    _0x84315a++;
                                    let _0xd267ea = _0x43d12e(this)[_0xd0cd04(0x3aa)]('video'), _0x4785be = _0x43d12e(this)['find'](_0xd0cd04(0x2b5)), _0x38adcb = _0x4785be[_0xd0cd04(0x423)](_0xd0cd04(0x270)) ? _0x4785be[_0xd0cd04(0x423)](_0xd0cd04(0x270))[_0xd0cd04(0x303)]('\x20')[0x0] : _0x4785be[_0xd0cd04(0x423)]('src');
                                    _0xd267ea && _0xd267ea[_0xd0cd04(0x423)]('src') && (_0x109317 = !![]), _0x4785be && _0x38adcb && _0x43d12e(_0xd0cd04(0x38f))[_0xd0cd04(0x35d)](_0xd0cd04(0x40b) + _0x50853b + _0xd0cd04(0x2c0) + _0x16671d[_0xd0cd04(0x26d)] + _0xd0cd04(0x37f) + _0x84315a + _0xd0cd04(0x298) + _0x38adcb + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x38adcb + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x4ebfe1(_0xd0cd04(0x355)) + '</span>\x20' + _0x84315a + _0xd0cd04(0x224));
                                }), _0x109317 && _0xb1cb90(_0x16671d[_0x453e4a(0x26d)], _0x453e4a(0x38f), _0x4ebfe1('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x34195a[_0x453e4a(0x351)])
                                    _0xb1cb90(_0x16671d[_0x453e4a(0x26d)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x4ebfe1('LOAD_BLOB_MULTIPLE'));
                                else {
                                    _0x84315a++;
                                    let _0x3950a4 = _0x43d12e(this)[_0x453e4a(0x1f6)]()[_0x453e4a(0x1f6)]()['parent']()[_0x453e4a(0x3aa)](_0x453e4a(0x1fd)), _0x42a406 = _0x43d12e(this)[_0x453e4a(0x1f6)]()[_0x453e4a(0x1f6)]()['parent']()[_0x453e4a(0x3aa)]('._aagv\x20img'), _0x302605 = _0x42a406[_0x453e4a(0x423)](_0x453e4a(0x270)) ? _0x42a406[_0x453e4a(0x423)](_0x453e4a(0x270))[_0x453e4a(0x303)]('\x20')[0x0] : _0x42a406[_0x453e4a(0x423)](_0x453e4a(0x468));
                                    _0x3950a4 && _0x3950a4[_0x453e4a(0x423)](_0x453e4a(0x468)) && _0xb1cb90(_0x16671d['GL_postPath'], _0x453e4a(0x38f), _0x4ebfe1(_0x453e4a(0x330))), _0x42a406 && _0x302605 && _0x43d12e(_0x453e4a(0x38f))[_0x453e4a(0x35d)](_0x453e4a(0x40b) + _0x50853b + _0x453e4a(0x2c0) + _0x16671d['GL_postPath'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x84315a + _0x453e4a(0x41a) + _0x302605 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x302605 + _0x453e4a(0x211) + _0x4ebfe1(_0x453e4a(0x355)) + '</span>\x20' + _0x84315a + _0x453e4a(0x224));
                                }
                            }
                        }
                        _0x43d12e(_0x453e4a(0x454))[_0x453e4a(0x3c2)](function () {
                            const _0x111923 = _0x453e4a;
                            _0x43d12e(this)[_0x111923(0x417)](_0x111923(0x441)), _0x43d12e(this)[_0x111923(0x42b)](_0x111923(0x43c)), _0x43d12e(this)['after'](_0x111923(0x393) + _0x4ebfe1(_0x111923(0x39a)) + _0x111923(0x39d) + _0x28a16e[_0x111923(0x39a)] + _0x111923(0x37c)), _0x43d12e(this)[_0x111923(0x423)](_0x111923(0x3b7)) == _0x111923(0x1fd) && _0x43d12e(this)[_0x111923(0x470)](_0x111923(0x3ac) + _0x4ebfe1(_0x111923(0x444)) + _0x111923(0x395) + _0x28a16e[_0x111923(0x3f6)] + _0x111923(0x37c));
                        }), _0x34195a[_0x453e4a(0x365)] && _0xb1cb90(_0x16671d['GL_postPath'], _0x453e4a(0x38f), _0x4ebfe1('LOAD_BLOB_MULTIPLE'))[_0x453e4a(0x2be)](() => {
                            let _0x160265 = setInterval(() => {
                                const _0x4d9288 = a0_0x5a41;
                                _0x43d12e(_0x4d9288(0x454))[_0x4d9288(0x3d7)] > 0x0 && (clearInterval(_0x160265), _0x43d12e('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x4d9288(0x3c2)](function () {
                                    const _0x3651e0 = _0x4d9288;
                                    _0x43d12e(this)[_0x3651e0(0x2a4)](_0x3651e0(0x28c));
                                }), _0x43d12e(_0x4d9288(0x35c))[_0x4d9288(0x215)]());
                            }, 0xfa);
                        });
                    });
                    var _0x4f5c32 = _0x43d12e(this)[_0x546d44(0x3aa)]('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')['first']()[_0x546d44(0x220)]() || _0x43d12e(this)[_0x546d44(0x3aa)](_0x546d44(0x409))[_0x546d44(0x248)](function () {
                        const _0x1132bd = _0x546d44;
                        return _0x43d12e(this)?.[_0x1132bd(0x220)]()?.[_0x1132bd(0x3d7)] > 0x0;
                    })['first']()['text']();
                    _0x43d12e(this)['attr'](_0x546d44(0x2e5), 'canDownload'), _0x43d12e(this)[_0x546d44(0x423)](_0x546d44(0x32d), _0x4f5c32);
                }
            });
        }
        function _0x2fe90f(_0xf4ad19) {
            const _0x256b2c = _0x1c75e1;
            var _0x299658 = _0xf4ad19[_0x256b2c(0x2cc)] ?? _0xf4ad19;
            return _0x299658['owner'] == null && _0x299658[_0x256b2c(0x1f9)] != null && (_0x299658[_0x256b2c(0x2f5)] = _0x299658[_0x256b2c(0x1f9)]), _0x299658[_0x256b2c(0x2f5)] == null && (_0x221c4a(_0x256b2c(0x473), _0x256b2c(0x269)), alert('carousel_media:\x20undefined\x20username')), _0x299658;
        }
        async function _0xb1cb90(_0x44a2a1, _0x3dbf38, _0xdd3910) {
            const _0x173ea1 = _0x1c75e1;
            try {
                _0x43d12e(_0x3dbf38 + '\x20a')[_0x173ea1(0x215)](), _0x43d12e(_0x3dbf38)['append'](_0x173ea1(0x3fe) + _0xdd3910 + _0x173ea1(0x204));
                let _0xf51954 = await _0x491555(_0x44a2a1), _0x5d9a5f = _0x2fe90f(_0xf51954[_0x173ea1(0x44b)]);
                if (_0xf51954['type'] === _0x173ea1(0x3a1)) {
                    let _0x4c4c71 = 0x1;
                    _0x5d9a5f[_0x173ea1(0x370)] == _0x173ea1(0x3f9) && _0x5d9a5f[_0x173ea1(0x3ba)] && (_0x43d12e(_0x3dbf38)[_0x173ea1(0x35d)](_0x173ea1(0x33b) + _0x5d9a5f['id'] + _0x173ea1(0x410) + _0x5d9a5f[_0x173ea1(0x3ef)] + _0x173ea1(0x3dd) + _0x5d9a5f[_0x173ea1(0x45b)] + _0x173ea1(0x2d0) + _0x5d9a5f['owner']['username'] + _0x173ea1(0x29b) + _0x4c4c71 + _0x173ea1(0x298) + _0x5d9a5f[_0x173ea1(0x3ba)] + _0x173ea1(0x439) + _0x5d9a5f[_0x173ea1(0x272)][0x1][_0x173ea1(0x468)] + _0x173ea1(0x413) + _0x4ebfe1(_0x173ea1(0x28f)) + '</span>\x20' + _0x4c4c71 + _0x173ea1(0x224)), _0x4c4c71++);
                    _0x5d9a5f[_0x173ea1(0x370)] == _0x173ea1(0x332) && (_0x43d12e(_0x3dbf38)[_0x173ea1(0x35d)](_0x173ea1(0x33b) + _0x5d9a5f['id'] + '\x22\x20datetime=\x22' + _0x5d9a5f['taken_at_timestamp'] + _0x173ea1(0x3dd) + _0x5d9a5f['shortcode'] + _0x173ea1(0x221) + _0x5d9a5f[_0x173ea1(0x2f5)][_0x173ea1(0x310)] + _0x173ea1(0x29b) + _0x4c4c71 + _0x173ea1(0x298) + _0x5d9a5f[_0x173ea1(0x272)][_0x5d9a5f[_0x173ea1(0x272)][_0x173ea1(0x3d7)] - 0x1][_0x173ea1(0x468)] + _0x173ea1(0x439) + _0x5d9a5f['display_resources'][0x1][_0x173ea1(0x468)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x4ebfe1(_0x173ea1(0x355)) + _0x173ea1(0x436) + _0x4c4c71 + _0x173ea1(0x224)), _0x4c4c71++);
                    if (_0x5d9a5f[_0x173ea1(0x370)] == _0x173ea1(0x2f2) && _0x5d9a5f['edge_sidecar_to_children'])
                        for (let _0x290f79 of _0x5d9a5f['edge_sidecar_to_children']['edges']) {
                            _0x290f79[_0x173ea1(0x474)]['__typename'] == _0x173ea1(0x3f9) && _0x43d12e(_0x3dbf38)[_0x173ea1(0x35d)](_0x173ea1(0x33b) + _0x290f79[_0x173ea1(0x474)]['id'] + _0x173ea1(0x410) + _0x5d9a5f[_0x173ea1(0x3ef)] + _0x173ea1(0x3dd) + _0x5d9a5f[_0x173ea1(0x45b)] + _0x173ea1(0x2d0) + _0x5d9a5f[_0x173ea1(0x2f5)]['username'] + _0x173ea1(0x29b) + _0x4c4c71 + _0x173ea1(0x298) + _0x290f79[_0x173ea1(0x474)]['video_url'] + _0x173ea1(0x439) + _0x290f79['node'][_0x173ea1(0x272)][0x1][_0x173ea1(0x468)] + _0x173ea1(0x29d) + _0x4ebfe1(_0x173ea1(0x28f)) + _0x173ea1(0x436) + _0x4c4c71 + '\x20-</a>'), _0x290f79['node']['__typename'] == _0x173ea1(0x332) && _0x43d12e(_0x3dbf38)[_0x173ea1(0x35d)]('<a\x20media-id=\x22' + _0x290f79[_0x173ea1(0x474)]['id'] + _0x173ea1(0x410) + _0x5d9a5f['taken_at_timestamp'] + _0x173ea1(0x3dd) + _0x5d9a5f[_0x173ea1(0x45b)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x5d9a5f[_0x173ea1(0x2f5)][_0x173ea1(0x310)] + _0x173ea1(0x29b) + _0x4c4c71 + _0x173ea1(0x298) + _0x290f79[_0x173ea1(0x474)][_0x173ea1(0x272)][_0x290f79[_0x173ea1(0x474)][_0x173ea1(0x272)][_0x173ea1(0x3d7)] - 0x1]['src'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x290f79[_0x173ea1(0x474)][_0x173ea1(0x272)][0x1][_0x173ea1(0x468)] + _0x173ea1(0x211) + _0x4ebfe1(_0x173ea1(0x355)) + _0x173ea1(0x436) + _0x4c4c71 + _0x173ea1(0x224)), _0x4c4c71++;
                        }
                } else {
                    if (_0x5d9a5f[_0x173ea1(0x2a6)])
                        _0x221c4a(_0x173ea1(0x2a6)), _0x5d9a5f[_0x173ea1(0x2a6)][_0x173ea1(0x48c)]((_0x22df1c, _0x5c8fd4) => {
                            const _0x224ccb = _0x173ea1;
                            let _0x5996cf = _0x5c8fd4 + 0x1;
                            _0x22df1c['video_versions'] == null ? (_0x22df1c[_0x224ccb(0x3a5)][_0x224ccb(0x205)][_0x224ccb(0x41e)](function (_0x383832, _0x487268) {
                                const _0x2b6f04 = _0x224ccb;
                                let _0x397cfb = new URL(_0x383832['url'])[_0x2b6f04(0x45a)][_0x2b6f04(0x34d)]('stp'), _0x27e68a = new URL(_0x487268[_0x2b6f04(0x46c)])[_0x2b6f04(0x45a)][_0x2b6f04(0x34d)](_0x2b6f04(0x36d));
                                if (_0x397cfb && _0x27e68a) {
                                    if (_0x397cfb[_0x2b6f04(0x3d7)] > _0x27e68a['length'])
                                        return 0x1;
                                    if (_0x397cfb[_0x2b6f04(0x3d7)] < _0x27e68a[_0x2b6f04(0x3d7)])
                                        return -0x1;
                                } else {
                                    if (_0x383832[_0x2b6f04(0x47c)] < _0x487268[_0x2b6f04(0x47c)])
                                        return 0x1;
                                    if (_0x383832[_0x2b6f04(0x47c)] > _0x487268[_0x2b6f04(0x47c)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x43d12e(_0x3dbf38)[_0x224ccb(0x35d)](_0x224ccb(0x33b) + _0x22df1c['pk'] + _0x224ccb(0x410) + _0x22df1c[_0x224ccb(0x373)] + _0x224ccb(0x3dd) + _0x5d9a5f[_0x224ccb(0x466)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x5d9a5f[_0x224ccb(0x2f5)][_0x224ccb(0x310)] + _0x224ccb(0x29b) + _0x5996cf + _0x224ccb(0x298) + _0x22df1c['image_versions2'][_0x224ccb(0x205)][0x0][_0x224ccb(0x46c)] + _0x224ccb(0x439) + _0x22df1c['image_versions2']['candidates'][0x0][_0x224ccb(0x46c)] + _0x224ccb(0x211) + _0x4ebfe1('IMG') + _0x224ccb(0x436) + _0x5996cf + _0x224ccb(0x224))) : _0x43d12e(_0x3dbf38)[_0x224ccb(0x35d)](_0x224ccb(0x33b) + _0x22df1c['pk'] + _0x224ccb(0x410) + _0x22df1c[_0x224ccb(0x373)] + _0x224ccb(0x3dd) + _0x5d9a5f[_0x224ccb(0x466)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x5d9a5f[_0x224ccb(0x2f5)][_0x224ccb(0x310)] + _0x224ccb(0x29b) + _0x5996cf + _0x224ccb(0x298) + _0x22df1c[_0x224ccb(0x22a)][0x0][_0x224ccb(0x46c)] + _0x224ccb(0x439) + _0x22df1c[_0x224ccb(0x3a5)][_0x224ccb(0x205)][0x0][_0x224ccb(0x46c)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x4ebfe1('VID') + _0x224ccb(0x436) + _0x5996cf + _0x224ccb(0x224));
                        });
                    else {
                        let _0x2e019a = 0x1;
                        _0x5d9a5f['video_versions'] == null ? (_0x5d9a5f['image_versions2'][_0x173ea1(0x205)][_0x173ea1(0x41e)](function (_0x4fbd66, _0x2a0489) {
                            const _0x51a3a9 = _0x173ea1;
                            let _0x2fcb51 = new URL(_0x4fbd66['url'])[_0x51a3a9(0x45a)][_0x51a3a9(0x34d)](_0x51a3a9(0x36d)), _0x536972 = new URL(_0x2a0489[_0x51a3a9(0x46c)])['searchParams'][_0x51a3a9(0x34d)](_0x51a3a9(0x36d));
                            if (_0x2fcb51 && _0x536972) {
                                if (_0x2fcb51[_0x51a3a9(0x3d7)] > _0x536972['length'])
                                    return 0x1;
                                if (_0x2fcb51[_0x51a3a9(0x3d7)] < _0x536972[_0x51a3a9(0x3d7)])
                                    return -0x1;
                            } else {
                                if (_0x4fbd66[_0x51a3a9(0x47c)] < _0x2a0489['width'])
                                    return 0x1;
                                if (_0x4fbd66['width'] > _0x2a0489[_0x51a3a9(0x47c)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x43d12e(_0x3dbf38)[_0x173ea1(0x35d)](_0x173ea1(0x33b) + _0x5d9a5f['pk'] + _0x173ea1(0x410) + _0x5d9a5f[_0x173ea1(0x373)] + _0x173ea1(0x3dd) + _0x5d9a5f[_0x173ea1(0x466)] + _0x173ea1(0x221) + _0x5d9a5f['owner'][_0x173ea1(0x310)] + _0x173ea1(0x29b) + _0x2e019a + _0x173ea1(0x298) + _0x5d9a5f[_0x173ea1(0x3a5)][_0x173ea1(0x205)][0x0][_0x173ea1(0x46c)] + _0x173ea1(0x439) + _0x5d9a5f[_0x173ea1(0x3a5)][_0x173ea1(0x205)][0x0]['url'] + _0x173ea1(0x211) + _0x4ebfe1('IMG') + _0x173ea1(0x436) + _0x2e019a + '\x20-</a>')) : _0x43d12e(_0x3dbf38)[_0x173ea1(0x35d)](_0x173ea1(0x33b) + _0x5d9a5f['pk'] + _0x173ea1(0x410) + _0x5d9a5f[_0x173ea1(0x373)] + _0x173ea1(0x3dd) + _0x5d9a5f[_0x173ea1(0x466)] + _0x173ea1(0x2d0) + _0x5d9a5f[_0x173ea1(0x2f5)][_0x173ea1(0x310)] + _0x173ea1(0x29b) + _0x2e019a + _0x173ea1(0x298) + _0x5d9a5f[_0x173ea1(0x22a)][0x0][_0x173ea1(0x46c)] + _0x173ea1(0x439) + _0x5d9a5f[_0x173ea1(0x3a5)][_0x173ea1(0x205)][0x0]['url'] + _0x173ea1(0x413) + _0x4ebfe1(_0x173ea1(0x28f)) + _0x173ea1(0x436) + _0x2e019a + _0x173ea1(0x224));
                    }
                }
                _0x43d12e(_0x173ea1(0x3de))[_0x173ea1(0x215)](), _0x43d12e(_0x173ea1(0x454))[_0x173ea1(0x3c2)](function () {
                    const _0x58c042 = _0x173ea1;
                    _0x43d12e(this)[_0x58c042(0x417)](_0x58c042(0x441)), _0x43d12e(this)[_0x58c042(0x42b)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0x43d12e(this)[_0x58c042(0x470)](_0x58c042(0x393) + _0x4ebfe1('NEW_TAB') + _0x58c042(0x39d) + _0x28a16e[_0x58c042(0x39a)] + _0x58c042(0x37c)), _0x43d12e(this)[_0x58c042(0x423)](_0x58c042(0x3b7)) == _0x58c042(0x1fd) && _0x43d12e(this)[_0x58c042(0x470)](_0x58c042(0x3ac) + _0x4ebfe1('THUMBNAIL_INTRO') + '\x22\x20class=\x22videoThumbnail\x22>' + _0x28a16e[_0x58c042(0x3f6)] + '</div>');
                });
            } catch (_0x25bcba) {
                _0x221c4a(_0x173ea1(0x28a), _0x25bcba);
            }
            ;
        }
        function _0x52395e(_0x10a4bb) {
            const _0x47044b = _0x1c75e1;
            var _0x10bb41 = 0x0, _0x3d01ae = _0x10a4bb[_0x47044b(0x3aa)](_0x47044b(0x437));
            return (_0x3d01ae == null || !_0x3d01ae[_0x47044b(0x3e0)](_0x47044b(0x316))) && (_0x3d01ae = _0x10a4bb[_0x47044b(0x3aa)](_0x47044b(0x3a8))['eq'](0x0)[_0x47044b(0x42c)](_0x47044b(0x3e6))), _0x3d01ae[_0x47044b(0x248)](_0x47044b(0x26b))[_0x47044b(0x3c2)](function (_0x55dd0d) {
                const _0x570571 = _0x47044b;
                _0x43d12e(this)[_0x570571(0x3e0)](_0x570571(0x30e)) && (_0x10bb41 = _0x55dd0d);
            }), _0x10bb41;
        }
        async function _0x449319(_0xe6b674) {
            const _0x46f5b5 = _0x1c75e1;
            if (_0xe6b674) {
                _0x285a00(!![]);
                let _0x3cbaf9 = new Date()[_0x46f5b5(0x33c)](), _0x5c2d2a = Math[_0x46f5b5(0x1ef)](_0x3cbaf9 / 0x3e8), _0xe8d96e = location[_0x46f5b5(0x47b)]['replaceAll'](/(reels|tagged)\/$/ig, '')['split']('/')[_0x46f5b5(0x248)](_0x29fe30 => _0x29fe30['length'] > 0x0)['at'](-0x1), _0xcff62a = await _0x32c80b(_0xe8d96e);
                try {
                    let _0x467f12 = await _0x157960(_0xcff62a[_0x46f5b5(0x1f9)]['pk']);
                    _0x33db06(_0x467f12, _0xe8d96e, _0x46f5b5(0x2b0), _0x5c2d2a, _0x46f5b5(0x216));
                } catch (_0x47757d) {
                    _0x33db06(_0xcff62a[_0x46f5b5(0x1f9)][_0x46f5b5(0x3a9)], _0xe8d96e, _0x46f5b5(0x2b0), _0x5c2d2a, _0x46f5b5(0x216));
                }
                _0x285a00(![]);
            } else {
                if (!_0x43d12e(_0x46f5b5(0x237))[_0x46f5b5(0x3d7)]) {
                    let _0x275a87 = setInterval(() => {
                        const _0x267ff6 = _0x46f5b5;
                        if (_0x43d12e(_0x267ff6(0x237))[_0x267ff6(0x3d7)]) {
                            clearInterval(_0x275a87);
                            return;
                        }
                        _0x43d12e(_0x267ff6(0x419))['parent']()[_0x267ff6(0x1f6)]()[_0x267ff6(0x35d)](_0x267ff6(0x47a) + _0x4ebfe1('DW') + _0x267ff6(0x294) + _0x28a16e[_0x267ff6(0x302)] + _0x267ff6(0x37c)), _0x43d12e(_0x267ff6(0x419))['parent']()['parent']()[_0x267ff6(0x24f)](_0x267ff6(0x31b), _0x267ff6(0x2cd)), _0x43d12e(_0x267ff6(0x299))[_0x267ff6(0x1f6)]()['parent']()[_0x267ff6(0x1f6)]()[_0x267ff6(0x35d)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x4ebfe1('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x28a16e[_0x267ff6(0x302)] + _0x267ff6(0x37c)), _0x43d12e(_0x267ff6(0x299))[_0x267ff6(0x1f6)]()[_0x267ff6(0x1f6)]()['parent']()[_0x267ff6(0x24f)](_0x267ff6(0x31b), _0x267ff6(0x2cd));
                    }, 0x96);
                }
            }
        }
        async function _0x22a3fb(_0x2455ac, _0x16290c, _0x619c90) {
            const _0x152b65 = _0x1c75e1;
            if (_0x2455ac) {
                _0x285a00(!![]);
                let _0x5ebd62 = location[_0x152b65(0x275)][_0x152b65(0x303)]('?')['at'](0x0)[_0x152b65(0x303)]('instagram.com/reels/')['at'](-0x1)['replaceAll']('/', ''), _0x1b3316 = await _0x491555(_0x5ebd62), _0x2abd3d = _0x2fe90f(_0x1b3316[_0x152b65(0x44b)]), _0x18bb4f = new Date()['getTime']();
                _0x34195a['RENAME_PUBLISH_DATE'] && (_0x1b3316[_0x152b65(0x342)] === _0x152b65(0x3a1) ? _0x18bb4f = _0x2abd3d[_0x152b65(0x2cc)]['taken_at_timestamp'] : _0x18bb4f = _0x2abd3d[_0x152b65(0x373)]);
                if (_0x1b3316['type'] === 'query_hash') {
                    if (_0x16290c && _0x2abd3d[_0x152b65(0x2cc)][_0x152b65(0x307)]) {
                        if (_0x619c90)
                            _0x2493ec(_0x2abd3d[_0x152b65(0x2cc)][_0x152b65(0x3ba)]);
                        else {
                            let _0x37b4b2 = 'mp4';
                            _0x33db06(_0x2abd3d[_0x152b65(0x2cc)][_0x152b65(0x3ba)], _0x2abd3d[_0x152b65(0x2cc)][_0x152b65(0x2f5)][_0x152b65(0x310)], _0x152b65(0x203), _0x18bb4f, _0x37b4b2, _0x5ebd62);
                        }
                    } else {
                        if (_0x619c90)
                            _0x2493ec(_0x2abd3d[_0x152b65(0x2cc)][_0x152b65(0x272)]['at'](-0x1)['src']);
                        else {
                            let _0x4709c7 = 'jpg';
                            _0x33db06(_0x2abd3d['shortcode_media'][_0x152b65(0x272)]['at'](-0x1)[_0x152b65(0x468)], _0x2abd3d['shortcode_media'][_0x152b65(0x2f5)][_0x152b65(0x310)], _0x152b65(0x203), _0x18bb4f, _0x4709c7, _0x5ebd62);
                        }
                    }
                } else {
                    if (_0x16290c && _0x2abd3d[_0x152b65(0x22a)] != null) {
                        if (_0x619c90)
                            _0x2493ec(_0x2abd3d[_0x152b65(0x22a)][0x0][_0x152b65(0x46c)]);
                        else {
                            let _0xe43094 = _0x152b65(0x41f);
                            _0x33db06(_0x2abd3d['video_versions'][0x0][_0x152b65(0x46c)], _0x2abd3d[_0x152b65(0x2f5)][_0x152b65(0x310)], _0x152b65(0x203), _0x18bb4f, _0xe43094, _0x5ebd62);
                        }
                    } else {
                        if (_0x619c90)
                            _0x2493ec(_0x2abd3d[_0x152b65(0x3a5)][_0x152b65(0x205)][0x0][_0x152b65(0x46c)]);
                        else {
                            let _0x540c84 = _0x152b65(0x216);
                            _0x33db06(_0x2abd3d['image_versions2'][_0x152b65(0x205)][0x0]['url'], _0x2abd3d[_0x152b65(0x2f5)][_0x152b65(0x310)], 'reels', _0x18bb4f, _0x540c84, _0x5ebd62);
                        }
                    }
                }
                _0x285a00(![]);
            } else
                var _0x334227 = setInterval(() => {
                    const _0x440d9c = _0x152b65;
                    _0x43d12e(_0x440d9c(0x391))[_0x440d9c(0x3d7)] > 0x0 && (clearInterval(_0x334227), _0x34195a[_0x440d9c(0x24b)] && (_0x43d12e(_0x440d9c(0x375))['remove'](), _0x43d12e('section\x20>\x20main[role=\x22main\x22]')[_0x440d9c(0x35d)](_0x440d9c(0x2bb)), _0x43d12e('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x440d9c(0x35d)](_0x440d9c(0x35a)), _0x43d12e(_0x440d9c(0x30d))[_0x440d9c(0x35d)]('<div\x20class=\x22button-down\x22><div></div></div>'), _0x43d12e(_0x440d9c(0x425))['on'](_0x440d9c(0x28c), function () {
                        const _0x5b7323 = _0x440d9c;
                        _0x43d12e('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x5b7323(0x382)]({
                            'top': -0x1e,
                            'behavior': _0x5b7323(0x396)
                        });
                    }), _0x43d12e(_0x440d9c(0x406))['on'](_0x440d9c(0x28c), function () {
                        const _0x59958b = _0x440d9c;
                        _0x43d12e(_0x59958b(0x25e))[0x0][_0x59958b(0x382)]({
                            'top': 0x1e,
                            'behavior': _0x59958b(0x396)
                        });
                    })), _0x43d12e(_0x440d9c(0x318))['children'](_0x440d9c(0x3e6))[_0x440d9c(0x3c2)](function () {
                        const _0x23c2b8 = _0x440d9c;
                        if (_0x43d12e(this)[_0x23c2b8(0x42c)]()[_0x23c2b8(0x3d7)] > 0x0) {
                            if (!_0x43d12e(this)[_0x23c2b8(0x42c)]()['find'](_0x23c2b8(0x3d0))[_0x23c2b8(0x3d7)]) {
                                var _0x50a133 = _0x43d12e(this);
                                _0x43d12e(this)[_0x23c2b8(0x42c)]()[_0x23c2b8(0x24f)](_0x23c2b8(0x31b), _0x23c2b8(0x2cd)), _0x43d12e(this)['children']()['append'](_0x23c2b8(0x47a) + _0x4ebfe1('DW') + _0x23c2b8(0x24e) + _0x28a16e['DOWNLOAD'] + _0x23c2b8(0x37c)), _0x43d12e(this)['children']()[_0x23c2b8(0x35d)](_0x23c2b8(0x393) + _0x4ebfe1(_0x23c2b8(0x39a)) + _0x23c2b8(0x390) + _0x28a16e['NEW_TAB'] + '</div>'), _0x43d12e(this)[_0x23c2b8(0x42c)]()['append']('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x4ebfe1('THUMBNAIL_INTRO') + _0x23c2b8(0x487) + _0x28a16e[_0x23c2b8(0x3f6)] + _0x23c2b8(0x37c));
                                _0x34195a[_0x23c2b8(0x3b8)] && _0x43d12e(this)[_0x23c2b8(0x3aa)](_0x23c2b8(0x1fd))[_0x23c2b8(0x3c2)](function () {
                                    const _0x742c7c = _0x23c2b8;
                                    _0x43d12e(this)['on'](_0x742c7c(0x271), function () {
                                        const _0x387124 = _0x742c7c;
                                        if (!_0x43d12e(this)[_0x387124(0x44b)](_0x387124(0x369))) {
                                            let _0x4b0286 = _0x43d12e(this)[_0x387124(0x341)]()[_0x387124(0x3aa)](_0x387124(0x3ad))[_0x387124(0x3ff)]('button[role=\x22button\x22],\x20div[role=\x22button\x22]');
                                            _0x4b0286[_0x387124(0x3d7)] > 0x0 ? (_0x43d12e(this)[_0x387124(0x423)](_0x387124(0x23c), !![]), _0x4b0286['trigger'](_0x387124(0x28c)), _0x221c4a(_0x387124(0x476))) : (_0x43d12e(this)[_0x387124(0x423)](_0x387124(0x23c), !![]), _0x43d12e(this)[_0x387124(0x1f6)]()['find'](_0x387124(0x3c8))[_0x387124(0x292)](_0x387124(0x3cc)), this[_0x387124(0x3f5)](), _0x221c4a(_0x387124(0x328)));
                                        }
                                    });
                                });
                                _0x34195a[_0x23c2b8(0x2f6)] && _0x43d12e(this)['find']('video')['each'](function () {
                                    const _0x2286b1 = _0x23c2b8;
                                    if (!_0x43d12e(this)[_0x2286b1(0x44b)](_0x2286b1(0x414))) {
                                        let _0x5cc66f = _0x43d12e(this);
                                        _0x221c4a('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x34195a['MODIFY_VIDEO_VOLUME'] && (this[_0x2286b1(0x358)] = _0x16671d[_0x2286b1(0x3f7)], _0x43d12e(this)['on']('loadstart', function () {
                                            const _0x1cfcf8 = _0x2286b1;
                                            this[_0x1cfcf8(0x358)] = _0x16671d[_0x1cfcf8(0x3f7)];
                                        })), _0x43d12e(this)['on'](_0x2286b1(0x407), function (_0x455354) {
                                            const _0x86dbc7 = _0x2286b1;
                                            _0x455354[_0x86dbc7(0x452)](), _0x5cc66f['css'](_0x86dbc7(0x20c), '-1'), _0x5cc66f[_0x86dbc7(0x292)](_0x86dbc7(0x414));
                                        }), _0x43d12e(this)['parent']()['find'](_0x2286b1(0x415))[_0x2286b1(0x248)](function () {
                                            const _0x4eadd0 = _0x2286b1;
                                            return _0x43d12e(this)[_0x4eadd0(0x1f6)](_0x4eadd0(0x3a6))[_0x4eadd0(0x3d7)] > 0x0 && _0x43d12e(this)[_0x4eadd0(0x24f)]('cursor') === 'pointer' && _0x43d12e(this)['attr'](_0x4eadd0(0x3cc)) != null;
                                        })['first']()['on'](_0x2286b1(0x407), function (_0x54a8ad) {
                                            const _0x1cf936 = _0x2286b1;
                                            _0x54a8ad['preventDefault'](), _0x5cc66f['css'](_0x1cf936(0x20c), '2'), _0x5cc66f[_0x1cf936(0x423)](_0x1cf936(0x414), !![]);
                                        }), _0x43d12e(this)['on']('volumechange', function () {
                                            const _0x4f5e5f = _0x2286b1;
                                            let _0x402ea3 = _0x43d12e(this)['parent']()[_0x4f5e5f(0x3aa)](_0x4f5e5f(0x3b5))['find']('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x4f5e5f(0x248)](function (_0x12dded) {
                                                const _0x5a5bca = _0x4f5e5f;
                                                return _0x43d12e(this)[_0x5a5bca(0x47c)]() <= 0x40 && _0x43d12e(this)[_0x5a5bca(0x3fa)]() <= 0x40 && _0x43d12e(this)[_0x5a5bca(0x3aa)](_0x5a5bca(0x458))[_0x5a5bca(0x3d7)] > 0x0;
                                            });
                                            var _0x3365f0 = _0x402ea3[_0x4f5e5f(0x3aa)](_0x4f5e5f(0x225))[_0x4f5e5f(0x3d7)] === 0x0;
                                            this[_0x4f5e5f(0x44a)] != _0x3365f0 && (this[_0x4f5e5f(0x358)] = _0x16671d[_0x4f5e5f(0x3f7)], _0x402ea3?.[_0x4f5e5f(0x2a4)](_0x4f5e5f(0x28c))), _0x43d12e(this)['attr'](_0x4f5e5f(0x3da)) && (_0x16671d[_0x4f5e5f(0x3f7)] = this['volume'], GM_setValue(_0x4f5e5f(0x263), this['volume'])), this['volume'] == _0x16671d[_0x4f5e5f(0x3f7)] && _0x43d12e(this)[_0x4f5e5f(0x423)]('data-completed', !![]);
                                        }), _0x43d12e(this)['css'](_0x2286b1(0x31b), 'absolute'), _0x43d12e(this)[_0x2286b1(0x24f)](_0x2286b1(0x20c), '2'), _0x43d12e(this)[_0x2286b1(0x423)](_0x2286b1(0x347), !![]), _0x43d12e(this)[_0x2286b1(0x423)](_0x2286b1(0x414), !![]);
                                    }
                                });
                                var _0x2e8c86 = _0x50a133[_0x23c2b8(0x3aa)](_0x23c2b8(0x1fd)), _0x56d868 = _0x43d12e(this)[_0x23c2b8(0x3aa)](_0x23c2b8(0x227))['first']();
                                _0x3c955d(_0x2e8c86, _0x56d868, _0x23c2b8(0x385));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x4627df() {
            const _0x55e54f = _0x1c75e1;
            _0x285a00(!![]);
            let _0x46669c = new Date()[_0x55e54f(0x33c)](), _0x15cedc = Math[_0x55e54f(0x1ef)](_0x46669c / 0x3e8), _0x27d398 = _0x43d12e(_0x55e54f(0x246))[_0x55e54f(0x308)]()[_0x55e54f(0x220)]() || location[_0x55e54f(0x47b)][_0x55e54f(0x303)]('/')[_0x55e54f(0x248)](_0x3bbacc => _0x3bbacc[_0x55e54f(0x3d7)] > 0x0)['at'](0x1), _0x30bb2e = await _0x32c80b(_0x27d398), _0x184ebf = _0x30bb2e['user']['pk'], _0x4fadc5 = await _0x851ca3(_0x184ebf), _0x15ee2e = 0x0;
            _0x2cf527(_0x15ee2e, _0x4fadc5[_0x55e54f(0x44b)][_0x55e54f(0x32f)][0x0][_0x55e54f(0x435)]['length']), _0x4fadc5['data']['reels_media'][0x0][_0x55e54f(0x435)]['forEach']((_0x55a44e, _0x4ce5a1) => {
                setTimeout(() => {
                    const _0x2b05b5 = a0_0x5a41;
                    _0x34195a['RENAME_PUBLISH_DATE'] && (_0x15cedc = _0x55a44e[_0x2b05b5(0x3ef)]), _0x55a44e[_0x2b05b5(0x272)][_0x2b05b5(0x41e)](function (_0x5598d9, _0x538681) {
                        const _0x38603c = _0x2b05b5;
                        if (_0x5598d9[_0x38603c(0x40e)] < _0x538681[_0x38603c(0x40e)])
                            return 0x1;
                        if (_0x5598d9[_0x38603c(0x40e)] > _0x538681['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x55a44e[_0x2b05b5(0x307)] ? _0x33db06(_0x55a44e[_0x2b05b5(0x26a)][0x0]['src'], _0x27d398, _0x2b05b5(0x285), _0x15cedc, _0x2b05b5(0x41f), _0x55a44e['id'])[_0x2b05b5(0x2be)](() => {
                        const _0x20f4f8 = _0x2b05b5;
                        _0x2cf527(++_0x15ee2e, _0x4fadc5[_0x20f4f8(0x44b)]['reels_media'][0x0]['items'][_0x20f4f8(0x3d7)]);
                    }) : _0x33db06(_0x55a44e[_0x2b05b5(0x272)][0x0]['src'], _0x27d398, _0x2b05b5(0x285), _0x15cedc, _0x2b05b5(0x216), _0x55a44e['id'])[_0x2b05b5(0x2be)](() => {
                        const _0xc7f50c = _0x2b05b5;
                        _0x2cf527(++_0x15ee2e, _0x4fadc5[_0xc7f50c(0x44b)]['reels_media'][0x0]['items']['length']);
                    });
                }, 0x64 * _0x4ce5a1);
            });
        }
        async function _0x4b8f7e(_0x4d07f3, _0x826b0a, _0xcdbbf2) {
            const _0x25db26 = _0x1c75e1;
            var _0x2a3739 = _0x43d12e(_0x25db26(0x246))['first']()[_0x25db26(0x220)]() || location['pathname'][_0x25db26(0x303)]('/')[_0x25db26(0x248)](_0x2e25e8 => _0x2e25e8[_0x25db26(0x3d7)] > 0x0)['at'](0x1);
            if (_0x4d07f3) {
                let _0x42178e = new Date()[_0x25db26(0x33c)](), _0x4b96d4 = Math[_0x25db26(0x1ef)](_0x42178e / 0x3e8);
                _0x285a00(!![]);
                if (_0x34195a[_0x25db26(0x351)] && !_0x16671d[_0x25db26(0x314)]) {
                    let _0x498d3d = null, _0x2ed642 = await _0x32c80b(_0x2a3739), _0xcd55c7 = _0x2ed642[_0x25db26(0x1f9)]['pk'], _0x5a5b4c = await _0x851ca3(_0xcd55c7), _0x19249e = location[_0x25db26(0x47b)][_0x25db26(0x303)]('/')[_0x25db26(0x248)](_0x5b8083 => _0x5b8083['length'] > 0x0 && _0x5b8083[_0x25db26(0x36e)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x5a5b4c[_0x25db26(0x44b)][_0x25db26(0x32f)][0x0][_0x25db26(0x435)][_0x25db26(0x48c)](_0x443893 => {
                        _0x443893['id'] == _0x19249e && (_0x498d3d = _0x443893['id']);
                    });
                    if (_0x498d3d == null) {
                        let _0x3d841f = _0x359edc(_0x2a3739);
                        _0x3d841f['each'](function (_0x5eb14e) {
                            const _0x2f1b10 = _0x25db26;
                            _0x43d12e(this)[_0x2f1b10(0x42c)]()[_0x2f1b10(0x3d7)] > 0x0 && (_0x498d3d = _0x5a5b4c[_0x2f1b10(0x44b)][_0x2f1b10(0x32f)][0x0][_0x2f1b10(0x435)][_0x5eb14e]['id']);
                        });
                    }
                    _0x498d3d == null && (_0x43d12e('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x25db26(0x3c2)](function (_0x512f26) {
                        const _0x5bf1a3 = _0x25db26;
                        _0x43d12e(this)[_0x5bf1a3(0x3e0)](_0x5bf1a3(0x356)) && (_0x43d12e(this)['children']()['length'] > 0x0 && (_0x498d3d = _0x5a5b4c[_0x5bf1a3(0x44b)][_0x5bf1a3(0x32f)][0x0][_0x5bf1a3(0x435)][_0x512f26]['id']));
                    }), _0x43d12e(_0x25db26(0x326))[_0x25db26(0x3c2)](function (_0x2af118) {
                        const _0x411ddd = _0x25db26;
                        _0x43d12e(this)[_0x411ddd(0x42c)]()[_0x411ddd(0x3e0)]('_ac3q') && (_0x498d3d = _0x5a5b4c[_0x411ddd(0x44b)][_0x411ddd(0x32f)][0x0][_0x411ddd(0x435)][_0x2af118]['id']);
                    }));
                    _0x498d3d == null && (_0x498d3d = location[_0x25db26(0x47b)][_0x25db26(0x303)]('/')[_0x25db26(0x248)](_0x2a118e => _0x2a118e[_0x25db26(0x3d7)] > 0x0 && _0x2a118e[_0x25db26(0x36e)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x27686f = await _0xcc8139(_0x498d3d);
                    _0x34195a[_0x25db26(0x2e1)] && (_0x4b96d4 = _0x27686f[_0x25db26(0x435)][0x0][_0x25db26(0x373)]);
                    _0x27686f[_0x25db26(0x267)] === 'ok' ? _0x27686f[_0x25db26(0x435)][0x0][_0x25db26(0x22a)] ? _0xcdbbf2 ? _0x2493ec(_0x27686f['items'][0x0][_0x25db26(0x22a)][0x0][_0x25db26(0x46c)]) : _0x33db06(_0x27686f[_0x25db26(0x435)][0x0]['video_versions'][0x0][_0x25db26(0x46c)], _0x2a3739, _0x25db26(0x285), _0x4b96d4, _0x25db26(0x41f), _0x498d3d) : _0xcdbbf2 ? _0x2493ec(_0x27686f[_0x25db26(0x435)][0x0]['image_versions2'][_0x25db26(0x205)][0x0][_0x25db26(0x46c)]) : _0x33db06(_0x27686f[_0x25db26(0x435)][0x0][_0x25db26(0x3a5)][_0x25db26(0x205)][0x0][_0x25db26(0x46c)], _0x2a3739, _0x25db26(0x285), _0x4b96d4, _0x25db26(0x216), _0x498d3d) : (_0x34195a['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x16671d[_0x25db26(0x314)] = !![], _0x4b8f7e(_0x4d07f3, _0x826b0a, _0xcdbbf2)) : alert(_0x25db26(0x3d3) + _0x27686f[_0x25db26(0x3ce)]), _0x221c4a(_0x27686f));
                    _0x285a00(![]);
                    return;
                }
                if (_0x43d12e(_0x25db26(0x2dc))[_0x25db26(0x3d7)] > 0x0) {
                    let _0x1c8486 = _0x25db26(0x41f), _0x3f3606 = '', _0x5ca5a1 = location['pathname'][_0x25db26(0x1fe)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x152128 = null;
                    if (_0x16671d[_0x25db26(0x352)][_0x25db26(0x285)][_0x2a3739] && !_0x826b0a) {
                        _0x221c4a(_0x25db26(0x30b), _0x2a3739), _0x16671d['GL_dataCache'][_0x25db26(0x285)][_0x2a3739][_0x25db26(0x44b)][_0x25db26(0x32f)][0x0][_0x25db26(0x435)][_0x25db26(0x48c)](_0x382455 => {
                            const _0x327587 = _0x25db26;
                            _0x382455['id'] == _0x5ca5a1 && (_0x3f3606 = _0x382455[_0x327587(0x26a)][0x0][_0x327587(0x468)], _0x34195a[_0x327587(0x2e1)] && (_0x4b96d4 = _0x382455['taken_at_timestamp'], _0x152128 = _0x382455['id']));
                        });
                        if (_0x3f3606['length'] == 0x0) {
                            _0x221c4a(_0x25db26(0x315), _0x2a3739), _0x4b8f7e(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x1e8b69 = await _0x32c80b(_0x2a3739), _0x4a2be7 = _0x1e8b69['user']['pk'], _0x1acd8a = await _0x851ca3(_0x4a2be7);
                        _0x1acd8a[_0x25db26(0x44b)][_0x25db26(0x32f)][0x0][_0x25db26(0x435)][_0x25db26(0x48c)](_0x2c2d41 => {
                            const _0x3cddba = _0x25db26;
                            _0x2c2d41['id'] == _0x5ca5a1 && (_0x3f3606 = _0x2c2d41[_0x3cddba(0x26a)][0x0][_0x3cddba(0x468)], _0x34195a[_0x3cddba(0x2e1)] && (_0x4b96d4 = _0x2c2d41[_0x3cddba(0x3ef)], _0x152128 = _0x2c2d41['id']));
                        });
                        if (_0x3f3606['length'] == 0x0) {
                            let _0x35009a = _0x359edc(_0x2a3739);
                            _0x35009a[_0x25db26(0x3c2)](function (_0xa9a6f0) {
                                const _0x3bd270 = _0x25db26;
                                _0x43d12e(this)[_0x3bd270(0x42c)]()['length'] > 0x0 && (_0x3f3606 = _0x1acd8a[_0x3bd270(0x44b)][_0x3bd270(0x32f)][0x0][_0x3bd270(0x435)][_0xa9a6f0][_0x3bd270(0x26a)][0x0][_0x3bd270(0x468)], _0x34195a[_0x3bd270(0x2e1)] && (_0x4b96d4 = _0x1acd8a[_0x3bd270(0x44b)][_0x3bd270(0x32f)][0x0]['items'][_0xa9a6f0][_0x3bd270(0x3ef)], _0x152128 = _0x1acd8a[_0x3bd270(0x44b)][_0x3bd270(0x32f)][0x0]['items'][_0xa9a6f0]['id']));
                            }), _0x3f3606[_0x25db26(0x3d7)] == 0x0 && (_0x43d12e(_0x25db26(0x2dd))[_0x25db26(0x3c2)](function (_0x3fe014) {
                                const _0xbf53c1 = _0x25db26;
                                _0x43d12e(this)[_0xbf53c1(0x3e0)]('x1lix1fw') && (_0x43d12e(this)['children']()[_0xbf53c1(0x3d7)] > 0x0 && (_0x3f3606 = _0x1acd8a[_0xbf53c1(0x44b)][_0xbf53c1(0x32f)][0x0][_0xbf53c1(0x435)][_0x3fe014]['video_resources'][0x0][_0xbf53c1(0x468)], _0x34195a[_0xbf53c1(0x2e1)] && (_0x4b96d4 = _0x1acd8a[_0xbf53c1(0x44b)][_0xbf53c1(0x32f)][0x0]['items'][_0x3fe014][_0xbf53c1(0x3ef)], _0x152128 = _0x1acd8a[_0xbf53c1(0x44b)]['reels_media'][0x0][_0xbf53c1(0x435)][_0x3fe014]['id'])));
                            }), _0x43d12e(_0x25db26(0x326))[_0x25db26(0x3c2)](function (_0x45d2b0) {
                                const _0x3b19b1 = _0x25db26;
                                _0x43d12e(this)[_0x3b19b1(0x42c)]()['hasClass']('_ac3q') && (_0x3f3606 = _0x1acd8a[_0x3b19b1(0x44b)]['reels_media'][0x0]['items'][_0x45d2b0][_0x3b19b1(0x26a)][0x0]['src'], _0x34195a[_0x3b19b1(0x2e1)] && (_0x4b96d4 = _0x1acd8a[_0x3b19b1(0x44b)]['reels_media'][0x0][_0x3b19b1(0x435)][_0x45d2b0][_0x3b19b1(0x3ef)], _0x152128 = _0x1acd8a[_0x3b19b1(0x44b)][_0x3b19b1(0x32f)][0x0][_0x3b19b1(0x435)][_0x45d2b0]['id']));
                            }));
                        }
                        _0x16671d[_0x25db26(0x352)]['stories'][_0x2a3739] = _0x1acd8a;
                    }
                    _0x3f3606[_0x25db26(0x3d7)] == 0x0 ? alert(_0x4ebfe1(_0x25db26(0x3e2))) : _0xcdbbf2 ? _0x2493ec(_0x3f3606) : _0x33db06(_0x3f3606, _0x2a3739, _0x25db26(0x285), _0x4b96d4, _0x1c8486, _0x152128);
                } else {
                    let _0x3371b7 = _0x43d12e(_0x25db26(0x376))[_0x25db26(0x423)](_0x25db26(0x270))?.[_0x25db26(0x303)](',')[0x0]?.['split']('\x20')[0x0], _0x507993 = _0x3371b7 ? _0x3371b7 : _0x43d12e(_0x25db26(0x376))['filter'](function () {
                            const _0x3d4aca = _0x25db26;
                            return _0x43d12e(this)[_0x3d4aca(0x3ff)]('a')['length'] === 0x0 && _0x43d12e(this)[_0x3d4aca(0x47c)]() === _0x43d12e(this)[_0x3d4aca(0x1f6)]()['width']();
                        })['attr']('src');
                    if (!_0x507993) {
                        let _0xe832bc = _0x43d12e(_0x25db26(0x3c6));
                        _0x507993 = _0xe832bc[_0x25db26(0x423)](_0x25db26(0x270)) ? _0xe832bc[_0x25db26(0x423)](_0x25db26(0x270))?.[_0x25db26(0x303)](',')[0x0]?.[_0x25db26(0x303)]('\x20')[0x0] : _0xe832bc[_0x25db26(0x423)]('src');
                    }
                    _0x34195a[_0x25db26(0x2e1)] && (_0x4b96d4 = new Date(_0x43d12e(_0x25db26(0x214))[_0x25db26(0x308)]()['attr'](_0x25db26(0x372)))[_0x25db26(0x33c)]());
                    let _0x1c9c49 = _0x507993, _0x4ccfcd = _0x25db26(0x216);
                    _0xcdbbf2 ? _0x2493ec(_0x1c9c49) : _0x33db06(_0x1c9c49, _0x2a3739, 'stories', _0x4b96d4, _0x4ccfcd, _0x5d29e4(_0x1c9c49) ?? '');
                }
                _0x16671d[_0x25db26(0x314)] = ![], _0x285a00(![]);
            } else {
                if (!_0x43d12e('.IG_DWSTORY')[_0x25db26(0x3d7)]) {
                    _0x16671d[_0x25db26(0x352)][_0x25db26(0x285)] = {};
                    let _0xf79cce = null;
                    _0x43d12e('body\x20>\x20div\x20section._ac0a')[_0x25db26(0x3d7)] > 0x0 ? _0xf79cce = _0x43d12e('body\x20>\x20div\x20section:visible._ac0a') : (_0xf79cce = _0x43d12e('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0xf79cce[_0x25db26(0x24f)](_0x25db26(0x31b), _0x25db26(0x2cd)));
                    _0xf79cce[_0x25db26(0x3d7)] === 0x0 && (_0xf79cce = _0x43d12e(_0x25db26(0x25a))[_0x25db26(0x1f6)]()[_0x25db26(0x1f6)]()['parent']()['find'](_0x25db26(0x3f8)), _0xf79cce[_0x25db26(0x24f)](_0x25db26(0x31b), 'relative'));
                    _0xf79cce[_0x25db26(0x3d7)] === 0x0 && (_0xf79cce = _0x43d12e(_0x25db26(0x25a))[_0x25db26(0x1f6)]()['parent']()[_0x25db26(0x1f6)]()[_0x25db26(0x3aa)](_0x25db26(0x228)), _0xf79cce['css'](_0x25db26(0x31b), _0x25db26(0x2cd)));
                    if (_0xf79cce['length'] === 0x0) {
                        let _0x1a86a1 = _0x43d12e(_0x25db26(0x295)), _0x230ed8 = 0x0;
                        _0x1a86a1[_0x25db26(0x3c2)](function () {
                            const _0x3ba6e4 = _0x25db26;
                            _0x43d12e(this)['width']() > _0x230ed8 && (_0x230ed8 = _0x43d12e(this)[_0x3ba6e4(0x47c)](), _0xf79cce = _0x43d12e(this)['children'](_0x3ba6e4(0x3e6))[_0x3ba6e4(0x308)]());
                        });
                    }
                    if (_0xf79cce != null) {
                        _0xf79cce['first']()[_0x25db26(0x24f)](_0x25db26(0x31b), _0x25db26(0x2cd)), _0xf79cce[_0x25db26(0x308)]()[_0x25db26(0x35d)](_0x25db26(0x47a) + _0x4ebfe1('DW') + '\x22\x20class=\x22IG_DWSTORY\x22>' + _0x28a16e['DOWNLOAD'] + _0x25db26(0x37c)), _0xf79cce['first']()[_0x25db26(0x35d)](_0x25db26(0x393) + _0x4ebfe1(_0x25db26(0x39a)) + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x28a16e['NEW_TAB'] + '</div>');
                        let _0x2e3473 = _0x359edc(_0x2a3739);
                        _0x2e3473[_0x25db26(0x3d7)] > 0x1 && _0xf79cce[_0x25db26(0x308)]()['append'](_0x25db26(0x20a) + _0x4ebfe1('DW_ALL') + '\x22\x20class=\x22IG_DWSTORY_ALL\x22>' + _0x28a16e['DOWNLOAD_ALL'] + _0x25db26(0x37c)), _0xf79cce[_0x25db26(0x3aa)](_0x25db26(0x241))[_0x25db26(0x3c2)](function () {
                            const _0x552809 = _0x25db26;
                            _0x43d12e(this)['on'](_0x552809(0x38b), function () {
                                const _0xaa5c0d = _0x552809;
                                !_0x43d12e(this)[_0xaa5c0d(0x44b)](_0xaa5c0d(0x362)) && (_0xf79cce[_0xaa5c0d(0x3aa)]('.IG_DWSTORY_THUMBNAIL')[_0xaa5c0d(0x3d7)] === 0x0 ? (_0x43d12e(this)['attr'](_0xaa5c0d(0x42f), !![]), _0x43d12e('.IG_DWSTORY_THUMBNAIL')[_0xaa5c0d(0x215)](), _0x221c4a(_0xaa5c0d(0x38c))) : (_0x43d12e(this)[_0xaa5c0d(0x423)](_0xaa5c0d(0x42f), !![]), _0x221c4a(_0xaa5c0d(0x1ed))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x11f88a(_0x3175f6, _0x32bddc) {
            const _0x49ea6f = _0x1c75e1;
            if (_0x3175f6) {
                let _0x47fe8b = new Date()['getTime'](), _0x2a229f = Math['floor'](_0x47fe8b / 0x3e8), _0x5a9bc1 = 'jpg', _0x10526f = _0x43d12e('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()['text']() || location[_0x49ea6f(0x47b)][_0x49ea6f(0x303)]('/')['at'](0x2), _0x175810 = location[_0x49ea6f(0x47b)][_0x49ea6f(0x1fe)](/\/$/ig, '')[_0x49ea6f(0x303)]('/')['at'](-0x1), _0x2b8750 = '', _0x50274b = null;
                _0x285a00(!![]);
                if (_0x34195a['FORCE_RESOURCE_VIA_MEDIA'] && !_0x16671d['tempFetchRateLimit']) {
                    let _0x25dfb3 = await _0x32c80b(_0x10526f), _0x37bc31 = _0x25dfb3[_0x49ea6f(0x1f9)]['pk'], _0x306f22 = await _0x851ca3(_0x37bc31), _0x5c93a5 = location[_0x49ea6f(0x47b)][_0x49ea6f(0x303)]('/')[_0x49ea6f(0x248)](_0x368dac => _0x368dac[_0x49ea6f(0x3d7)] > 0x0 && _0x368dac[_0x49ea6f(0x36e)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x306f22[_0x49ea6f(0x44b)][_0x49ea6f(0x32f)][0x0][_0x49ea6f(0x435)]['forEach'](_0x2e8314 => {
                        _0x2e8314['id'] == _0x5c93a5 && (_0x50274b = _0x2e8314['id']);
                    });
                    if (_0x50274b == null) {
                        let _0x545fe6 = _0x359edc(_0x10526f);
                        _0x545fe6[_0x49ea6f(0x3c2)](function (_0x3fa9ee) {
                            const _0x22b315 = _0x49ea6f;
                            _0x43d12e(this)[_0x22b315(0x42c)]()[_0x22b315(0x3d7)] > 0x0 && (_0x50274b = _0x306f22[_0x22b315(0x44b)][_0x22b315(0x32f)][0x0][_0x22b315(0x435)][_0x3fa9ee]['id']);
                        });
                    }
                    _0x50274b == null && (_0x43d12e(_0x49ea6f(0x2dd))[_0x49ea6f(0x3c2)](function (_0x23d1df) {
                        const _0x2fea45 = _0x49ea6f;
                        _0x43d12e(this)[_0x2fea45(0x3e0)](_0x2fea45(0x356)) && (_0x43d12e(this)[_0x2fea45(0x42c)]()[_0x2fea45(0x3d7)] > 0x0 && (_0x50274b = _0x306f22[_0x2fea45(0x44b)][_0x2fea45(0x32f)][0x0]['items'][_0x23d1df]['id']));
                    }), _0x43d12e('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')['each'](function (_0x145d81) {
                        const _0x1a958e = _0x49ea6f;
                        _0x43d12e(this)['children']()[_0x1a958e(0x3e0)](_0x1a958e(0x3f0)) && (_0x50274b = _0x306f22[_0x1a958e(0x44b)]['reels_media'][0x0][_0x1a958e(0x435)][_0x145d81]['id']);
                    }));
                    _0x50274b == null && (_0x50274b = location[_0x49ea6f(0x47b)][_0x49ea6f(0x303)]('/')['filter'](_0x447b87 => _0x447b87[_0x49ea6f(0x3d7)] > 0x0 && _0x447b87[_0x49ea6f(0x36e)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x262c8f = await _0xcc8139(_0x50274b);
                    _0x34195a[_0x49ea6f(0x2e1)] && (_0x2a229f = _0x262c8f[_0x49ea6f(0x435)][0x0]['taken_at']);
                    _0x262c8f[_0x49ea6f(0x267)] === 'ok' ? _0x33db06(_0x262c8f[_0x49ea6f(0x435)][0x0][_0x49ea6f(0x3a5)][_0x49ea6f(0x205)][0x0][_0x49ea6f(0x46c)], _0x10526f, 'stories', _0x2a229f, _0x49ea6f(0x216), _0x50274b) : (_0x34195a[_0x49ea6f(0x34f)] ? (_0x16671d[_0x49ea6f(0x314)] = !![], _0x11f88a(!![], _0x32bddc)) : alert(_0x49ea6f(0x3d3) + _0x262c8f[_0x49ea6f(0x3ce)]), _0x221c4a(_0x262c8f));
                    _0x285a00(![]);
                    return;
                }
                if (_0x16671d['GL_dataCache'][_0x49ea6f(0x285)][_0x10526f] && !_0x32bddc) {
                    _0x221c4a(_0x49ea6f(0x30b), _0x10526f), _0x16671d[_0x49ea6f(0x352)][_0x49ea6f(0x285)][_0x10526f][_0x49ea6f(0x44b)][_0x49ea6f(0x32f)][0x0]['items'][_0x49ea6f(0x48c)](_0x144855 => {
                        const _0x2f1eac = _0x49ea6f;
                        _0x144855['id'] == _0x175810 && (_0x2b8750 = _0x144855['display_url'], _0x34195a[_0x2f1eac(0x2e1)] && (_0x2a229f = _0x144855[_0x2f1eac(0x3ef)], _0x50274b = _0x144855['id']));
                    });
                    if (_0x2b8750['length'] == 0x0) {
                        _0x221c4a('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x10526f), _0x11f88a(!![], !![]);
                        return;
                    }
                } else {
                    let _0x5d8bb2 = await _0x32c80b(_0x10526f), _0x2d3049 = _0x5d8bb2[_0x49ea6f(0x1f9)]['pk'], _0x361cfd = await _0x851ca3(_0x2d3049);
                    _0x361cfd['data'][_0x49ea6f(0x32f)][0x0]['items'][_0x49ea6f(0x48c)](_0x18074f => {
                        const _0x4b4031 = _0x49ea6f;
                        _0x18074f['id'] == _0x175810 && (_0x2b8750 = _0x18074f[_0x4b4031(0x21e)], _0x34195a[_0x4b4031(0x2e1)] && (_0x2a229f = _0x18074f[_0x4b4031(0x3ef)], _0x50274b = _0x18074f['id']));
                    });
                    if (_0x2b8750[_0x49ea6f(0x3d7)] == 0x0) {
                        let _0x2b47c1 = _0x359edc(_0x10526f);
                        _0x2b47c1[_0x49ea6f(0x3c2)](function (_0x32f8e7) {
                            const _0x14e134 = _0x49ea6f;
                            _0x43d12e(this)[_0x14e134(0x42c)]()[_0x14e134(0x3d7)] > 0x0 && (_0x2b8750 = _0x361cfd[_0x14e134(0x44b)][_0x14e134(0x32f)][0x0][_0x14e134(0x435)][_0x32f8e7]['display_url'], _0x34195a[_0x14e134(0x2e1)] && (_0x2a229f = _0x361cfd[_0x14e134(0x44b)][_0x14e134(0x32f)][0x0]['items'][_0x32f8e7][_0x14e134(0x3ef)], _0x50274b = _0x361cfd[_0x14e134(0x44b)][_0x14e134(0x32f)][0x0][_0x14e134(0x435)][_0x32f8e7]['id']));
                        }), _0x2b8750[_0x49ea6f(0x3d7)] == 0x0 && (_0x43d12e('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x49ea6f(0x3c2)](function (_0x483236) {
                            const _0x46b5dd = _0x49ea6f;
                            _0x43d12e(this)[_0x46b5dd(0x3e0)](_0x46b5dd(0x356)) && (_0x43d12e(this)['children']()[_0x46b5dd(0x3d7)] > 0x0 && (_0x2b8750 = _0x361cfd[_0x46b5dd(0x44b)]['reels_media'][0x0]['items'][_0x483236]['display_url'], _0x34195a[_0x46b5dd(0x2e1)] && (_0x2a229f = _0x361cfd['data'][_0x46b5dd(0x32f)][0x0]['items'][_0x483236][_0x46b5dd(0x3ef)], _0x50274b = _0x361cfd[_0x46b5dd(0x44b)][_0x46b5dd(0x32f)][0x0][_0x46b5dd(0x435)][_0x483236]['id'])));
                        }), _0x43d12e(_0x49ea6f(0x326))[_0x49ea6f(0x3c2)](function (_0x2fc9f0) {
                            const _0x28f1b6 = _0x49ea6f;
                            _0x43d12e(this)[_0x28f1b6(0x42c)]()[_0x28f1b6(0x3e0)]('_ac3q') && (_0x2b8750 = _0x361cfd[_0x28f1b6(0x44b)][_0x28f1b6(0x32f)][0x0]['items'][_0x2fc9f0]['display_url'], _0x34195a[_0x28f1b6(0x2e1)] && (_0x2a229f = _0x361cfd[_0x28f1b6(0x44b)]['reels_media'][0x0][_0x28f1b6(0x435)][_0x2fc9f0]['taken_at_timestamp'], _0x50274b = _0x361cfd[_0x28f1b6(0x44b)][_0x28f1b6(0x32f)][0x0]['items'][_0x2fc9f0]['id']));
                        }));
                    }
                }
                _0x33db06(_0x2b8750, _0x10526f, _0x49ea6f(0x44d), _0x2a229f, _0x5a9bc1, _0x50274b), _0x16671d['tempFetchRateLimit'] = ![], _0x285a00(![]);
            } else {
                if (_0x43d12e(_0x49ea6f(0x3b1))[_0x49ea6f(0x1f6)]()[_0x49ea6f(0x3aa)](_0x49ea6f(0x45c))['length']) {
                    let _0x59a245 = null;
                    _0x43d12e(_0x49ea6f(0x443))[_0x49ea6f(0x3d7)] > 0x0 ? _0x59a245 = _0x43d12e(_0x49ea6f(0x431)) : (_0x59a245 = _0x43d12e('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x59a245[_0x49ea6f(0x24f)]('position', _0x49ea6f(0x2cd)));
                    _0x59a245[_0x49ea6f(0x3d7)] === 0x0 && (_0x59a245 = _0x43d12e(_0x49ea6f(0x25a))[_0x49ea6f(0x1f6)]()[_0x49ea6f(0x1f6)]()['parent']()[_0x49ea6f(0x3aa)](_0x49ea6f(0x3f8)), _0x59a245['css'](_0x49ea6f(0x31b), _0x49ea6f(0x2cd)));
                    _0x59a245[_0x49ea6f(0x3d7)] === 0x0 && (_0x59a245 = _0x43d12e('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x49ea6f(0x1f6)]()[_0x49ea6f(0x1f6)]()['parent']()[_0x49ea6f(0x3aa)](_0x49ea6f(0x228)), _0x59a245['css']('position', 'relative'));
                    if (_0x59a245[_0x49ea6f(0x3d7)] === 0x0) {
                        let _0xd84562 = _0x43d12e(_0x49ea6f(0x295)), _0x19373c = 0x0;
                        _0xd84562[_0x49ea6f(0x3c2)](function () {
                            const _0x525239 = _0x49ea6f;
                            _0x43d12e(this)[_0x525239(0x47c)]() > _0x19373c && (_0x19373c = _0x43d12e(this)[_0x525239(0x47c)](), _0x59a245 = _0x43d12e(this)[_0x525239(0x42c)](_0x525239(0x3e6))['first']());
                        });
                    }
                    _0x59a245 != null && (_0x59a245[_0x49ea6f(0x308)]()[_0x49ea6f(0x24f)]('position', _0x49ea6f(0x2cd)), _0x59a245['first']()['append']('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x4ebfe1(_0x49ea6f(0x444)) + _0x49ea6f(0x445) + _0x28a16e[_0x49ea6f(0x3f6)] + '</div>'));
                }
            }
        }
        function _0x1dc4a2(_0x2d800f) {
            return new Promise((_0x9d2768, _0x5668bc) => {
                const _0x58d6a0 = a0_0x5a41;
                let _0x4343be = _0x58d6a0(0x23d) + _0x2d800f + _0x58d6a0(0x422);
                GM_xmlhttpRequest({
                    'method': _0x58d6a0(0x2e8),
                    'url': _0x4343be,
                    'onload': function (_0x305ba2) {
                        const _0x595a7f = _0x58d6a0;
                        try {
                            let _0xaf8785 = JSON[_0x595a7f(0x223)](_0x305ba2[_0x595a7f(0x44e)]);
                            _0x9d2768(_0xaf8785);
                        } catch (_0x1d2080) {
                            _0x221c4a(_0x595a7f(0x288), _0x595a7f(0x336), _0x1d2080[_0x595a7f(0x3ce)]), _0x5668bc(_0x1d2080);
                        }
                    },
                    'onerror': function (_0x2f1a63) {
                        const _0x3850ae = _0x58d6a0;
                        _0x221c4a(_0x3850ae(0x288), _0x3850ae(0x336), _0x2f1a63), _0x5668bc(_0x2f1a63);
                    }
                });
            });
        }
        function _0x851ca3(_0x4eea9b) {
            return new Promise((_0x41bc89, _0x9c15e0) => {
                const _0x5a4940 = a0_0x5a41;
                let _0x49a42b = _0x5a4940(0x2ce) + _0x4eea9b + _0x5a4940(0x422);
                GM_xmlhttpRequest({
                    'method': _0x5a4940(0x2e8),
                    'url': _0x49a42b,
                    'onload': function (_0xf1bb15) {
                        const _0x21aa61 = _0x5a4940;
                        try {
                            let _0x34dd6b = JSON[_0x21aa61(0x223)](_0xf1bb15[_0x21aa61(0x44e)]);
                            _0x221c4a('getStories()', _0x34dd6b), _0x41bc89(_0x34dd6b);
                        } catch (_0x385b96) {
                            _0x221c4a(_0x21aa61(0x47f), _0x21aa61(0x336), _0x385b96['message']), _0x9c15e0(_0x385b96);
                        }
                    },
                    'onerror': function (_0x16a3ca) {
                        _0x221c4a('getStories()', 'reject', _0x16a3ca), _0x9c15e0(_0x16a3ca);
                    }
                });
            });
        }
        function _0x32c80b(_0x97f38) {
            return new Promise((_0x591553, _0x68a4db) => {
                const _0x900ad1 = a0_0x5a41;
                let _0x27b892 = _0x900ad1(0x26c) + _0x97f38;
                GM_xmlhttpRequest({
                    'method': _0x900ad1(0x2e8),
                    'url': _0x27b892,
                    'onload': function (_0x193c79) {
                        const _0x5f3780 = _0x900ad1;
                        let _0x5d3f51 = JSON['parse'](_0x193c79[_0x5f3780(0x44e)]), _0x5046b8 = null;
                        _0x5d3f51[_0x5f3780(0x2c7)][_0x5f3780(0x48c)](_0x46d2e0 => {
                            const _0x49a746 = _0x5f3780;
                            _0x46d2e0[_0x49a746(0x1f9)][_0x49a746(0x310)]?.[_0x49a746(0x262)]() === _0x97f38?.[_0x49a746(0x262)]() && (_0x5046b8 = _0x46d2e0);
                        }), _0x5046b8 != null ? (_0x221c4a(_0x5f3780(0x23b), _0x5046b8), _0x591553(_0x5046b8)) : _0x1766ae(_0x97f38)[_0x5f3780(0x2be)](_0x15901f => {
                            _0x591553(_0x15901f);
                        })[_0x5f3780(0x2b4)](_0x3ecf8c => {
                            const _0x488666 = _0x5f3780;
                            alert(_0x488666(0x3c7));
                        });
                    },
                    'onerror': function (_0x20b652) {
                        const _0x3f2831 = _0x900ad1;
                        _0x221c4a(_0x3f2831(0x23b), _0x3f2831(0x336), _0x20b652), _0x68a4db(_0x20b652);
                    }
                });
            });
        }
        function _0x1766ae(_0x4ab6bc) {
            return new Promise((_0x2dfd4d, _0x451205) => {
                let _0x46e2f0 = 'https://i.instagram.com/api/v1/users/web_profile_info/?username=' + _0x4ab6bc;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x46e2f0,
                    'headers': { 'X-IG-App-ID': _0x3b9b9d() },
                    'onload': function (_0x368be3) {
                        const _0x52dd7f = a0_0x5a41;
                        try {
                            let _0x50b801 = JSON[_0x52dd7f(0x223)](_0x368be3[_0x52dd7f(0x44e)]), _0x867c59 = _0x50b801?.['data']?.[_0x52dd7f(0x1f9)];
                            if (_0x867c59 != null) {
                                let _0x33c8e1 = _0x50b801?.[_0x52dd7f(0x44b)];
                                _0x33c8e1[_0x52dd7f(0x1f9)]['pk'] = _0x33c8e1[_0x52dd7f(0x1f9)]['id'], _0x221c4a(_0x52dd7f(0x283), _0x50b801), _0x2dfd4d(_0x33c8e1);
                            } else
                                _0x221c4a(_0x52dd7f(0x283), _0x52dd7f(0x336), 'undefined'), _0x451205('undefined');
                        } catch (_0x3e56de) {
                            _0x221c4a(_0x52dd7f(0x283), _0x52dd7f(0x336), _0x3e56de[_0x52dd7f(0x3ce)]), _0x451205(_0x3e56de);
                        }
                    },
                    'onerror': function (_0x32fa66) {
                        const _0x16ec18 = a0_0x5a41;
                        _0x221c4a('getUserIdWithAgent()', _0x16ec18(0x336), _0x32fa66), _0x451205(_0x32fa66);
                    }
                });
            });
        }
        function _0x157960(_0x56d942) {
            return new Promise((_0x2ab536, _0x373beb) => {
                const _0x40c6dd = a0_0x5a41;
                let _0x4c57a9 = _0x40c6dd(0x20f) + _0x56d942 + '/info/';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x4c57a9,
                    'headers': { 'User-Agent': _0x40c6dd(0x42a) },
                    'onload': function (_0x49e1d1) {
                        const _0x5b950a = _0x40c6dd;
                        try {
                            let _0xe34118 = JSON[_0x5b950a(0x223)](_0x49e1d1[_0x5b950a(0x44e)]);
                            _0xe34118[_0x5b950a(0x267)] !== 'ok' ? (_0x221c4a(_0x5b950a(0x3f4), 'reject', _0xe34118), _0x373beb(_0x5b950a(0x388))) : (_0x221c4a(_0x5b950a(0x3f4), _0xe34118), _0x2ab536(_0xe34118[_0x5b950a(0x1f9)]['hd_profile_pic_url_info']?.[_0x5b950a(0x46c)]));
                        } catch (_0x9b3898) {
                            _0x221c4a(_0x5b950a(0x3f4), 'reject', _0x9b3898), _0x373beb(_0x9b3898);
                        }
                    },
                    'onerror': function (_0xcc43b9) {
                        const _0x59d2e1 = _0x40c6dd;
                        _0x221c4a(_0x59d2e1(0x3f4), _0x59d2e1(0x336), _0xcc43b9), _0x373beb(_0xcc43b9);
                    }
                });
            });
        }
        function _0x50c8a0(_0x2b3742) {
            return new Promise((_0x11bab4, _0x1c8f7d) => {
                const _0x3864ce = a0_0x5a41;
                if (!_0x2b3742)
                    _0x1c8f7d(_0x3864ce(0x290));
                let _0x15c854 = _0x2b3742, _0x465b13 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x15c854 + _0x3864ce(0x2a1);
                GM_xmlhttpRequest({
                    'method': _0x3864ce(0x2e8),
                    'url': _0x465b13,
                    'onload': function (_0x37edce) {
                        const _0x4f7fc8 = _0x3864ce;
                        try {
                            let _0x4ccee8 = JSON[_0x4f7fc8(0x223)](_0x37edce[_0x4f7fc8(0x44e)]);
                            _0x221c4a(_0x4f7fc8(0x33f), _0x4ccee8), _0x11bab4(_0x4ccee8[_0x4f7fc8(0x44b)][_0x4f7fc8(0x2cc)][_0x4f7fc8(0x2f5)][_0x4f7fc8(0x310)]);
                        } catch (_0x1fdc29) {
                            _0x221c4a('getPostOwner()', 'reject', _0x1fdc29[_0x4f7fc8(0x3ce)]), _0x1c8f7d(_0x1fdc29);
                        }
                    },
                    'onerror': function (_0x4fc91f) {
                        const _0x19e2f4 = _0x3864ce;
                        _0x221c4a(_0x19e2f4(0x33f), _0x19e2f4(0x336), _0x4fc91f), _0x1c8f7d(_0x4fc91f);
                    }
                });
            });
        }
        function _0x491555(_0x243646) {
            return new Promise((_0x3c1bac, _0xc05abe) => {
                const _0x44db0f = a0_0x5a41;
                if (!_0x243646)
                    _0xc05abe(_0x44db0f(0x290));
                let _0x563215 = _0x243646, _0xe85382 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x563215 + _0x44db0f(0x2a1);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0xe85382,
                    'headers': { 'User-Agent': _0x44db0f(0x42a) },
                    'onload': function (_0x2de155) {
                        const _0x20374f = _0x44db0f;
                        try {
                            let _0x1c1b20 = JSON[_0x20374f(0x223)](_0x2de155[_0x20374f(0x44e)]);
                            _0x221c4a(_0x1c1b20), _0x1c1b20[_0x20374f(0x267)] === _0x20374f(0x21a) ? (_0x221c4a('Request\x20with:', _0x20374f(0x238), _0x563215), _0x22c7e9(_0x563215)[_0x20374f(0x2be)](_0xab2cf2 => {
                                const _0x3674e0 = _0x20374f;
                                _0x3c1bac({
                                    'type': _0x3674e0(0x2f0),
                                    'data': _0xab2cf2['xdt_api__v1__media__shortcode__web_info']['items'][0x0]
                                });
                            })[_0x20374f(0x2b4)](_0x206354 => {
                                _0xc05abe(_0x206354);
                            })) : _0x3c1bac({
                                'type': 'query_hash',
                                'data': _0x1c1b20['data']
                            });
                        } catch (_0x9eb58) {
                            _0x221c4a(_0x20374f(0x338), _0x20374f(0x336), _0x9eb58[_0x20374f(0x3ce)]), _0xc05abe(_0x9eb58);
                        }
                    },
                    'onerror': function (_0x32cd16) {
                        _0x221c4a('getBlobMedia()', 'reject', _0x32cd16), _0xc05abe(_0x32cd16);
                    }
                });
            });
        }
        function _0x22c7e9(_0x2560ec) {
            return new Promise((_0x33e8e9, _0x326acf) => {
                const _0x11969e = a0_0x5a41;
                if (!_0x2560ec)
                    _0x326acf(_0x11969e(0x290));
                let _0x448032 = _0x2560ec, _0x360c0a = 'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22' + _0x448032 + _0x11969e(0x21c);
                GM_xmlhttpRequest({
                    'method': _0x11969e(0x2e8),
                    'url': _0x360c0a,
                    'headers': {
                        'User-Agent': _0x11969e(0x42a),
                        'X-IG-App-ID': _0x3b9b9d()
                    },
                    'onload': function (_0xdd26d5) {
                        const _0x41c3dc = _0x11969e;
                        try {
                            let _0x339e1f = JSON[_0x41c3dc(0x223)](_0xdd26d5[_0x41c3dc(0x44e)]);
                            _0x221c4a(_0x339e1f), _0x339e1f['status'] === _0x41c3dc(0x21a) ? (alert(_0x41c3dc(0x2ae) + _0x339e1f[_0x41c3dc(0x3ce)] + ':\x20' + _0x339e1f[_0x41c3dc(0x3cb)]), _0x221c4a('Request\x20failed\x20with\x20API\x20response\x20' + _0x339e1f['message'] + ':\x20' + _0x339e1f[_0x41c3dc(0x3cb)]), _0x326acf(_0xdd26d5)) : (_0x221c4a(_0x41c3dc(0x2e4), _0x339e1f['data']), _0x33e8e9(_0x339e1f[_0x41c3dc(0x44b)]));
                        } catch (_0x57099b) {
                            _0x221c4a(_0x41c3dc(0x2e4), _0x41c3dc(0x336), _0x57099b[_0x41c3dc(0x3ce)]), _0x326acf(_0x57099b);
                        }
                    },
                    'onerror': function (_0x1d4f13) {
                        const _0x4e21fe = _0x11969e;
                        _0x221c4a(_0x4e21fe(0x2e4), 'reject', _0x1d4f13), _0x326acf(_0x1d4f13);
                    }
                });
            });
        }
        function _0xcc8139(_0x4c83f0) {
            return new Promise((_0x3249fe, _0x11a26e) => {
                const _0x3b225e = a0_0x5a41;
                let _0x516993 = 'https://i.instagram.com/api/v1/media/' + _0x4c83f0 + _0x3b225e(0x363);
                if (_0x4c83f0 == null) {
                    alert(_0x3b225e(0x235)), _0x221c4a(_0x3b225e(0x277), _0x3b225e(0x336), _0x3b225e(0x235)), _0x285a00(![]), _0x11a26e(-0x1);
                    return;
                }
                if (_0x3b9b9d() == null) {
                    alert(_0x3b225e(0x46d)), _0x221c4a('getMediaInfo()', _0x3b225e(0x336), _0x3b225e(0x46d)), _0x285a00(![]), _0x11a26e(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x516993,
                    'headers': {
                        'User-Agent': window[_0x3b225e(0x41b)]['userAgent'],
                        'Accept': _0x3b225e(0x1ea),
                        'X-IG-App-ID': _0x3b9b9d()
                    },
                    'onload': function (_0x329223) {
                        const _0x424899 = _0x3b225e;
                        if (_0x329223[_0x424899(0x321)] == _0x516993) {
                            let _0x3b235b = JSON[_0x424899(0x223)](_0x329223[_0x424899(0x44e)]);
                            _0x221c4a('getMediaInfo()', _0x3b235b), _0x3249fe(_0x3b235b);
                        } else {
                            let _0x4751e8 = new URL(_0x329223[_0x424899(0x321)]);
                            _0x4751e8['pathname'][_0x424899(0x483)](_0x424899(0x2b2)) ? (_0x221c4a(_0x424899(0x277), 'reject', _0x424899(0x210)), alert(_0x424899(0x210))) : (_0x221c4a(_0x424899(0x277), _0x424899(0x336), _0x424899(0x33e) + _0x329223['finalUrl'] + '\x22'), alert(_0x424899(0x33e) + _0x329223[_0x424899(0x321)] + '\x22')), _0x285a00(![]), _0x11a26e(-0x1);
                        }
                    },
                    'onerror': function (_0xfa6485) {
                        const _0x35d5bd = _0x3b225e;
                        _0x221c4a('getMediaInfo()', _0x35d5bd(0x336), _0xfa6485), _0x3249fe(_0xfa6485);
                    }
                });
            });
        }
        function _0x5d29e4(_0x2affbf) {
            const _0x3aa2db = _0x1c75e1;
            let _0x3a52a1 = new URL(_0x2affbf), _0x5ad758 = _0x3a52a1?.[_0x3aa2db(0x45a)]?.[_0x3aa2db(0x34d)]('ig_cache_key')?.[_0x3aa2db(0x303)]('.')['at'](0x0);
            return _0x5ad758 ? atob(_0x5ad758) : null;
        }
        function _0x3b9b9d() {
            const _0x3cf19e = _0x1c75e1;
            let _0x59a917 = null;
            return _0x43d12e(_0x3cf19e(0x456))[_0x3cf19e(0x3c2)](function () {
                const _0x2a60e2 = _0x3cf19e, _0x185aed = /"APP_ID":"([0-9]+)"/ig, _0x4c19a0 = _0x43d12e(this)[_0x2a60e2(0x220)]()[_0x2a60e2(0x36e)](_0x185aed);
                _0x4c19a0 != null && _0x59a917 == null && (_0x59a917 = [..._0x43d12e(this)[_0x2a60e2(0x220)]()[_0x2a60e2(0x34a)](_0x185aed)]);
            }), _0x59a917 ? _0x59a917['at'](0x0)['at'](-0x1) : null;
        }
        function _0x285a00(_0x5dd63b) {
            const _0x51d775 = _0x1c75e1;
            _0x5dd63b ? (_0x43d12e(_0x51d775(0x2b1))[_0x51d775(0x374)](_0x51d775(0x3e9)), _0x43d12e('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x51d775(0x24f)](_0x51d775(0x20c), _0x51d775(0x353))) : (_0x43d12e('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x51d775(0x1f4)](_0x51d775(0x3e9)), _0x43d12e('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x51d775(0x24f)](_0x51d775(0x20c), ''));
        }
        function _0x359edc(_0x3b0f3b) {
            const _0x6dae2a = _0x1c75e1;
            let _0x8d759 = _0x43d12e(_0x6dae2a(0x2fa) + _0x3b0f3b + '\x22]\x20span')['filter'](function () {
                const _0x615c08 = _0x6dae2a;
                return _0x43d12e(this)['children']()[_0x615c08(0x3d7)] === 0x0 && _0x43d12e(this)['find']('svg')['length'] === 0x0 && _0x43d12e(this)[_0x615c08(0x220)]()?.[_0x615c08(0x262)]() === _0x3b0f3b?.[_0x615c08(0x262)]();
            })[_0x6dae2a(0x3ff)](_0x6dae2a(0x289))[_0x6dae2a(0x248)](function () {
                const _0x26873c = _0x6dae2a;
                return _0x43d12e(this)[_0x26873c(0x220)]()?.[_0x26873c(0x262)]() !== _0x3b0f3b?.['toLowerCase']();
            })[_0x6dae2a(0x248)](function () {
                const _0x222551 = _0x6dae2a;
                return _0x43d12e(this)[_0x222551(0x42c)]()['length'] > 0x1;
            })['first']();
            return _0x8d759['length'] === 0x0 && (_0x8d759 = _0x43d12e('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x3b0f3b + '\x22]')['filter'](function () {
                const _0x204429 = _0x6dae2a;
                return _0x43d12e(this)[_0x204429(0x3aa)]('img')['length'] > 0x0;
            })[_0x6dae2a(0x3ff)](_0x6dae2a(0x289))[_0x6dae2a(0x248)](function () {
                const _0x493fad = _0x6dae2a;
                return _0x43d12e(this)[_0x493fad(0x220)]()?.[_0x493fad(0x262)]() !== _0x3b0f3b?.['toLowerCase']();
            })[_0x6dae2a(0x248)](function () {
                const _0x41fb28 = _0x6dae2a;
                return _0x43d12e(this)[_0x41fb28(0x42c)]()[_0x41fb28(0x3d7)] > 0x1;
            })[_0x6dae2a(0x308)]()), _0x8d759[_0x6dae2a(0x42c)]()[_0x6dae2a(0x248)](function () {
                const _0x1ba8a0 = _0x6dae2a;
                return _0x43d12e(this)[_0x1ba8a0(0x3fa)]() < 0xa;
            })[_0x6dae2a(0x308)]()[_0x6dae2a(0x42c)]();
        }
        function _0x2cf527(_0x39a39b, _0x6c0735) {
            const _0x2444d2 = _0x1c75e1;
            _0x43d12e(_0x2444d2(0x430))['length'] ? (_0x43d12e(_0x2444d2(0x31e))[_0x2444d2(0x220)](_0x39a39b + '/' + _0x6c0735), _0x39a39b >= _0x6c0735 && _0x43d12e(_0x2444d2(0x430))[_0x2444d2(0x36a)](0xfa, function () {
                const _0x64a9b9 = _0x2444d2;
                _0x43d12e(this)[_0x64a9b9(0x215)]();
            })) : _0x43d12e(_0x2444d2(0x3ea))['append'](_0x2444d2(0x465) + _0x39a39b + '/' + _0x6c0735 + _0x2444d2(0x43b));
        }
        function _0x4a454a(_0xe12aa6, _0x4117af) {
            const _0x20e06a = _0x1c75e1;
            let _0x143677 = _0xe12aa6 ? _0x20e06a(0x2c3) : '';
            _0x43d12e(_0x20e06a(0x3ea))[_0x20e06a(0x35d)](_0x20e06a(0x399) + _0x143677 + '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>'), _0x43d12e('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')['append'](_0x20e06a(0x2eb) + _0x4ebfe1(_0x20e06a(0x3ed)) + _0x20e06a(0x2a0) + GM_info['script']['version'] + '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x28a16e[_0x20e06a(0x3ed)] + _0x20e06a(0x447)), _0x4117af && (_0x43d12e(_0x20e06a(0x268))[_0x20e06a(0x35d)]('<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>'), _0x43d12e(_0x20e06a(0x349))['append'](_0x20e06a(0x38a) + _0x4ebfe1('BATCH_DOWNLOAD_SELECTED') + _0x20e06a(0x3a2)), _0x43d12e(_0x20e06a(0x349))[_0x20e06a(0x35d)](_0x20e06a(0x31c) + _0x4ebfe1(_0x20e06a(0x2d2)) + _0x20e06a(0x3a2)), _0x43d12e(_0x20e06a(0x268))[_0x20e06a(0x35d)](_0x20e06a(0x2ad) + _0x4ebfe1(_0x20e06a(0x40a)) + _0x20e06a(0x200)));
        }
        function _0x54e55e(_0x565f7f) {
            const _0x1d6763 = _0x1c75e1;
            _0x43d12e('.IG_POPUP_DIG')[_0x1d6763(0x3d7)] && (_0x565f7f ? _0x43d12e(_0x1d6763(0x35c))[_0x1d6763(0x1f4)](_0x1d6763(0x2c3)) : _0x43d12e('.IG_POPUP_DIG')[_0x1d6763(0x374)](_0x1d6763(0x2c3)));
        }
        function _0x33db06(_0xb6c67b, _0x3a6dc5, _0x2b6e9a, _0x401205, _0x40a4c9, _0x24c4f4) {
            return new Promise(_0x7e373f => {
                setTimeout(() => {
                    const _0x400e61 = a0_0x5a41;
                    _0x285a00(!![]), fetch(_0xb6c67b)[_0x400e61(0x2be)](_0x270a9d => {
                        const _0x37bcb3 = _0x400e61;
                        return _0x270a9d['blob']()[_0x37bcb3(0x2be)](_0x83b884 => {
                            _0x285a00(![]), _0x1e9e84(_0xb6c67b, _0x83b884, _0x3a6dc5, _0x2b6e9a, _0x401205, _0x40a4c9, _0x24c4f4), _0x7e373f(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x1e9e84(_0x48c282, _0x563ff0, _0x456fcf, _0xf017d1, _0xc17888, _0x3df0b1, _0x4e939c) {
            const _0x1c4012 = _0x1c75e1;
            _0xc17888 = parseInt(_0xc17888[_0x1c4012(0x3ab)]()[_0x1c4012(0x265)](0xd, '0'));
            _0x34195a[_0x1c4012(0x2e1)] && (_0xc17888 = parseInt(_0xc17888[_0x1c4012(0x3ab)]()[_0x1c4012(0x265)](0xd, '0')));
            const _0x5b499a = new Date(_0xc17888), _0x99fcf = document[_0x1c4012(0x32c)]('a'), _0x48eed5 = new URL(_0x48c282)[_0x1c4012(0x47b)]['split']('/')['at'](-0x1)[_0x1c4012(0x303)]('.')[_0x1c4012(0x386)](0x0, -0x1)[_0x1c4012(0x416)]('.'), _0x10f4b0 = _0x5b499a['getFullYear']()['toString'](), _0x112f2c = (_0x5b499a[_0x1c4012(0x30a)]() + 0x1)[_0x1c4012(0x3ab)]()[_0x1c4012(0x31d)](0x2, '0'), _0x41cc55 = _0x5b499a['getDate']()[_0x1c4012(0x3ab)]()['padStart'](0x2, '0'), _0x55dde2 = _0x5b499a[_0x1c4012(0x335)]()[_0x1c4012(0x3ab)]()[_0x1c4012(0x31d)](0x2, '0'), _0x3e80bc = _0x5b499a['getMinutes']()[_0x1c4012(0x3ab)]()[_0x1c4012(0x31d)](0x2, '0'), _0x3d7753 = _0x5b499a[_0x1c4012(0x485)]()['toString']()[_0x1c4012(0x31d)](0x2, '0');
            var _0x3e656a = _0x16671d[_0x1c4012(0x29f)][_0x1c4012(0x3b3)](), _0x4a4bd0 = _0x4e939c ?? '', _0x540f1e = {
                    '%USERNAME%': _0x456fcf,
                    '%SOURCE_TYPE%': _0xf017d1,
                    '%SHORTCODE%': _0x4a4bd0,
                    '%YEAR%': _0x10f4b0,
                    '%2-YEAR%': _0x10f4b0[_0x1c4012(0x3ca)](-0x2),
                    '%MONTH%': _0x112f2c,
                    '%DAY%': _0x41cc55,
                    '%HOUR%': _0x55dde2,
                    '%MINUTE%': _0x3e80bc,
                    '%SECOND%': _0x3d7753,
                    '%ORIGINAL_NAME%': _0x48eed5,
                    '%ORIGINAL_NAME_FIRST%': _0x48eed5[_0x1c4012(0x303)]('_')['at'](0x0)
                };
            _0x3e656a = _0x3e656a['replace'](/%[\w\-]+%/g, function (_0x3a4275) {
                return _0x540f1e[_0x3a4275] || _0x3a4275;
            });
            const _0x36f39b = _0x456fcf + '_' + _0x48eed5 + '.' + _0x3df0b1;
            _0x99fcf['href'] = URL[_0x1c4012(0x340)](_0x563ff0), _0x99fcf[_0x1c4012(0x486)]('download', _0x34195a[_0x1c4012(0x3a7)] ? _0x3e656a + '.' + _0x3df0b1 : _0x36f39b), _0x99fcf['click'](), _0x99fcf[_0x1c4012(0x215)]();
        }
        async function _0x3d93de(_0x117ba4, _0x2238a8) {
            const _0x42e72d = _0x1c75e1;
            let _0x1c796d = new Date()['getTime'](), _0x4fd9fd = Math[_0x42e72d(0x1ef)](_0x1c796d / 0x3e8), _0x48a906 = _0x43d12e(_0x117ba4)[_0x42e72d(0x423)]('data-username') ? _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x32d)) : _0x16671d[_0x42e72d(0x405)];
            !_0x48a906 && _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x3eb)) && (_0x221c4a(_0x42e72d(0x2ab), _0x43d12e(_0x117ba4)['attr'](_0x42e72d(0x329))), _0x48a906 = await _0x50c8a0(_0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x3eb)))['catch'](_0x294e67 => {
                const _0x5dcca2 = _0x42e72d;
                _0x221c4a(_0x5dcca2(0x2d3), _0x294e67[_0x5dcca2(0x3ce)]);
            }), _0x48a906 == null && (_0x48a906 = _0x42e72d(0x3be)));
            _0x34195a[_0x42e72d(0x2e1)] && _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x372)) && (_0x4fd9fd = parseInt(_0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x372))));
            if (_0x34195a[_0x42e72d(0x351)]) {
                _0x285a00(!![]);
                let _0x5c7965 = await _0xcc8139(_0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x47e)));
                _0x285a00(![]);
                if (_0x5c7965['status'] === 'ok') {
                    var _0x1a9228 = null;
                    _0x5c7965[_0x42e72d(0x435)][0x0][_0x42e72d(0x22a)] ? _0x1a9228 = _0x5c7965[_0x42e72d(0x435)][0x0][_0x42e72d(0x22a)][0x0][_0x42e72d(0x46c)] : (_0x5c7965[_0x42e72d(0x435)][0x0][_0x42e72d(0x3a5)]['candidates'][_0x42e72d(0x41e)](function (_0x33e752, _0x1ec08a) {
                        const _0x3df867 = _0x42e72d;
                        let _0x1dd26f = new URL(_0x33e752[_0x3df867(0x46c)])[_0x3df867(0x45a)]['get'](_0x3df867(0x36d)), _0x14e69b = new URL(_0x1ec08a[_0x3df867(0x46c)])[_0x3df867(0x45a)]['get'](_0x3df867(0x36d));
                        if (_0x1dd26f && _0x14e69b) {
                            if (_0x1dd26f[_0x3df867(0x3d7)] > _0x14e69b[_0x3df867(0x3d7)])
                                return 0x1;
                            if (_0x1dd26f[_0x3df867(0x3d7)] < _0x14e69b['length'])
                                return -0x1;
                        } else {
                            if (_0x33e752['width'] < _0x1ec08a[_0x3df867(0x47c)])
                                return 0x1;
                            if (_0x33e752['width'] > _0x1ec08a['width'])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x1a9228 = _0x5c7965['items'][0x0]['image_versions2'][_0x42e72d(0x205)][0x0][_0x42e72d(0x46c)]);
                    if (_0x2238a8) {
                        let _0x5e0507 = new URL(_0x1a9228);
                        _0x5e0507[_0x42e72d(0x28d)] = _0x42e72d(0x256), _0x2493ec(_0x5e0507[_0x42e72d(0x275)]);
                    } else
                        _0x33db06(_0x1a9228, _0x48a906, _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x3b7)), _0x4fd9fd, _0x43d12e(_0x117ba4)['attr']('data-type'), _0x43d12e(_0x117ba4)[_0x42e72d(0x423)]('data-path'));
                } else {
                    if (_0x34195a['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT']) {
                        if (_0x2238a8) {
                            let _0x4ea158 = new URL(_0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x329)));
                            _0x4ea158[_0x42e72d(0x28d)] = 'scontent.cdninstagram.com', _0x2493ec(_0x4ea158[_0x42e72d(0x275)]);
                        } else
                            _0x33db06(_0x43d12e(_0x117ba4)['attr'](_0x42e72d(0x329)), _0x48a906, _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x3b7)), _0x4fd9fd, _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x3b0)), _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x3eb)));
                    } else
                        alert(_0x42e72d(0x3d3) + _0x5c7965[_0x42e72d(0x3ce)]);
                    _0x221c4a(_0x5c7965);
                }
            } else
                _0x33db06(_0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x329)), _0x48a906, _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x3b7)), _0x4fd9fd, _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x3b0)), _0x43d12e(_0x117ba4)[_0x42e72d(0x423)](_0x42e72d(0x3eb)));
        }
        function _0x45716d() {
            const _0x30265a = _0x1c75e1;
            for (let _0x367111 of _0x16671d['registerMenuIds']) {
                _0x221c4a('GM_unregisterMenuCommand', _0x367111), GM_unregisterMenuCommand(_0x367111);
            }
            _0x16671d['registerMenuIds'][_0x30265a(0x243)](GM_registerMenuCommand(_0x4ebfe1('SETTING'), () => {
                _0x1577d0();
            }, { 'accessKey': 'w' })), _0x16671d[_0x30265a(0x258)]['push'](GM_registerMenuCommand(_0x4ebfe1('DONATE'), () => {
                GM_openInTab('https://ko-fi.com/snkoarashi', { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x16671d[_0x30265a(0x258)]['push'](GM_registerMenuCommand(_0x4ebfe1(_0x30265a(0x48d)), () => {
                _0x5aa059();
            }, { 'accessKey': 'z' })), _0x16671d[_0x30265a(0x258)][_0x30265a(0x243)](GM_registerMenuCommand(_0x4ebfe1(_0x30265a(0x337)), () => {
                _0x2b514c();
            }, { 'accessKey': 'f' })), _0x16671d[_0x30265a(0x258)][_0x30265a(0x243)](GM_registerMenuCommand(_0x4ebfe1(_0x30265a(0x2cb)), () => {
                _0x46ee2e();
            }, { 'accessKey': 'c' })), _0x16671d[_0x30265a(0x258)]['push'](GM_registerMenuCommand(_0x4ebfe1(_0x30265a(0x2c4)), () => {
                _0x202625();
            }, { 'accessKey': 'r' }));
        }
        function _0x24355c(_0x10fece) {
            const _0x2da38f = _0x1c75e1;
            if (!_0x34195a[_0x2da38f(0x254)])
                return;
            const _0x5bf349 = GM_getValue(_0x2da38f(0x24a)) ?? new Date()['getTime'](), _0x1285be = new Date()[_0x2da38f(0x33c)]();
            _0x1285be > parseInt(_0x5bf349) + _0x10fece * 0x3e8 && (GM_setValue(_0x2da38f(0x24a), new Date()['getTime']()), _0x46ee2e());
        }
        function _0x46ee2e() {
            const _0x7fdb14 = _0x1c75e1, _0x5707a3 = GM_info[_0x7fdb14(0x3d1)][_0x7fdb14(0x213)], _0x3ab052 = _0x7fdb14(0x471);
            GM_xmlhttpRequest({
                'method': _0x7fdb14(0x2e8),
                'url': _0x3ab052,
                'onload': function (_0x1a9cc1) {
                    const _0x406360 = _0x7fdb14, _0x369b12 = _0x1a9cc1['responseText'], _0x5dccf1 = _0x369b12[_0x406360(0x36e)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x5dccf1 && _0x5dccf1[0x1]) {
                        const _0x43afb0 = _0x5dccf1[0x1];
                        _0x221c4a(_0x406360(0x40c), _0x5707a3, '|', _0x406360(0x327), _0x43afb0), _0x43afb0 !== _0x5707a3 && typeof this[_0x406360(0x261)] === _0x406360(0x260) ? (this[_0x406360(0x261)] = null, GM_notification({
                            'text': _0x4ebfe1('NOTICE_UPDATE_CONTENT'),
                            'title': _0x4ebfe1(_0x406360(0x38e)),
                            'tag': _0x406360(0x3e4),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x406360(0x464),
                            'onclick': _0x1a2f25 => {
                                const _0x4de4c0 = _0x406360;
                                _0x1a2f25?.['preventDefault']();
                                var _0x46b203 = GM_openInTab(GM_info[_0x4de4c0(0x3d1)]['downloadURL']);
                                setTimeout(() => {
                                    const _0x228859 = _0x4de4c0;
                                    _0x46b203[_0x228859(0x1f3)]();
                                }, 0xfa);
                            }
                        })) : _0x221c4a('there\x20is\x20no\x20new\x20update');
                    } else
                        console[_0x406360(0x253)](_0x406360(0x255));
                }
            });
        }
        function _0x1577d0() {
            const _0x2d50ba = _0x1c75e1;
            _0x43d12e('.IG_POPUP_DIG')[_0x2d50ba(0x215)](), _0x4a454a(), _0x43d12e(_0x2d50ba(0x387))[_0x2d50ba(0x220)](_0x2d50ba(0x291)), _0x43d12e('.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div')['append']('<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>');
            for (let _0x4d444 in _0xaf7edb) {
                _0x43d12e('.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect')['append'](_0x2d50ba(0x2c2) + _0x4d444 + '\x22\x20' + (_0x16671d[_0x2d50ba(0x3c5)] == _0x4d444 ? 'selected' : '') + '>' + _0xaf7edb[_0x4d444] + _0x2d50ba(0x392));
            }
            for (let _0x47960a in _0x34195a) {
                _0x43d12e('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x2d50ba(0x35d)]('<label\x20class=\x22globalSettings' + (_0x1d3471[_0x2d50ba(0x424)](_0x47960a) ? _0x2d50ba(0x21f) : '') + _0x2d50ba(0x1f2) + _0x4ebfe1(_0x47960a + _0x2d50ba(0x46b)) + _0x2d50ba(0x426) + (_0x47960a + _0x2d50ba(0x46b)) + '\x22><span\x20data-ih-locale=\x22' + _0x47960a + '\x22>' + _0x4ebfe1(_0x47960a) + _0x2d50ba(0x462) + _0x47960a + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x34195a[_0x47960a] === !![] ? _0x2d50ba(0x3b9) : '') + _0x2d50ba(0x22f)), _0x47960a === 'MODIFY_VIDEO_VOLUME' && _0x43d12e(_0x2d50ba(0x2b6) + _0x47960a + '\x22]')[_0x2d50ba(0x1f6)](_0x2d50ba(0x207))['on'](_0x2d50ba(0x407), function (_0x5d6ce1) {
                    const _0x175758 = _0x2d50ba;
                    _0x5d6ce1['preventDefault'](), _0x43d12e(this)[_0x175758(0x3aa)](_0x175758(0x455))[_0x175758(0x3d7)] === 0x0 && (_0x43d12e(this)[_0x175758(0x35d)](_0x175758(0x212)), _0x43d12e(this)[_0x175758(0x42c)](_0x175758(0x455))[_0x175758(0x35d)](_0x175758(0x236) + _0x16671d['videoVolume'] + _0x175758(0x2a9)), _0x43d12e(this)['children'](_0x175758(0x455))[_0x175758(0x35d)](_0x175758(0x236) + _0x16671d['videoVolume'] + _0x175758(0x28e)), _0x43d12e(this)[_0x175758(0x42c)](_0x175758(0x455))[_0x175758(0x35d)]('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x28a16e[_0x175758(0x3ed)] + _0x175758(0x37c)));
                }), _0x47960a === _0x2d50ba(0x3a7) && _0x43d12e(_0x2d50ba(0x2b6) + _0x47960a + '\x22]')[_0x2d50ba(0x1f6)](_0x2d50ba(0x207))['on'](_0x2d50ba(0x407), function (_0x506689) {
                    const _0x5d6769 = _0x2d50ba;
                    _0x506689[_0x5d6769(0x452)](), _0x43d12e(this)['find'](_0x5d6769(0x455))[_0x5d6769(0x3d7)] === 0x0 && (_0x43d12e(this)[_0x5d6769(0x35d)](_0x5d6769(0x212)), _0x43d12e(this)[_0x5d6769(0x42c)](_0x5d6769(0x455))[_0x5d6769(0x35d)](_0x5d6769(0x2c8) + _0x16671d[_0x5d6769(0x29f)] + '\x22\x20/>'), _0x43d12e(this)[_0x5d6769(0x42c)](_0x5d6769(0x455))[_0x5d6769(0x35d)](_0x5d6769(0x29a) + _0x28a16e[_0x5d6769(0x3ed)] + _0x5d6769(0x37c)));
                });
            }
        }
        function _0x5aa059() {
            const _0x145d7c = _0x1c75e1;
            _0x43d12e(_0x145d7c(0x35c))['remove'](), _0x4a454a(), _0x43d12e(_0x145d7c(0x387))['text']('IG\x20Debug\x20DOM\x20Tree'), _0x43d12e(_0x145d7c(0x3f1))['append'](_0x145d7c(0x40d)), _0x43d12e(_0x145d7c(0x3f1))[_0x145d7c(0x35d)](_0x145d7c(0x438)), _0x43d12e(_0x145d7c(0x3d9))[_0x145d7c(0x35d)](_0x145d7c(0x403) + _0x4ebfe1(_0x145d7c(0x47d)) + _0x145d7c(0x1fc)), _0x43d12e(_0x145d7c(0x3d9))[_0x145d7c(0x35d)](_0x145d7c(0x239) + _0x4ebfe1(_0x145d7c(0x453)) + _0x145d7c(0x1fc)), _0x43d12e(_0x145d7c(0x3d9))['append'](_0x145d7c(0x380) + _0x4ebfe1(_0x145d7c(0x3c4)) + '</a></button><br/>'), _0x43d12e(_0x145d7c(0x3d9))[_0x145d7c(0x35d)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x4ebfe1(_0x145d7c(0x394)) + _0x145d7c(0x1fc)), _0x43d12e('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x145d7c(0x35d)](_0x145d7c(0x218) + _0x4ebfe1(_0x145d7c(0x46e)) + _0x145d7c(0x1fc));
        }
        function _0x2b514c() {
            const _0x44b1bf = _0x1c75e1;
            _0x43d12e('.IG_POPUP_DIG')[_0x44b1bf(0x215)](), _0x4a454a(), _0x43d12e(_0x44b1bf(0x387))[_0x44b1bf(0x220)](_0x44b1bf(0x2df)), _0x43d12e(_0x44b1bf(0x3f1))[_0x44b1bf(0x35d)](_0x44b1bf(0x438)), _0x43d12e('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append'](_0x44b1bf(0x371) + _0x4ebfe1('REPORT_FORK') + _0x44b1bf(0x1fc)), _0x43d12e(_0x44b1bf(0x3d9))['append'](_0x44b1bf(0x475) + _0x4ebfe1('REPORT_GITHUB') + _0x44b1bf(0x1fc)), _0x43d12e(_0x44b1bf(0x3d9))[_0x44b1bf(0x35d)](_0x44b1bf(0x218) + _0x4ebfe1(_0x44b1bf(0x46e)) + _0x44b1bf(0x1fc));
        }
        function _0x2493ec(_0x44208e) {
            const _0x599622 = _0x1c75e1;
            var _0x1f486a = document[_0x599622(0x32c)]('a');
            _0x1f486a['href'] = _0x44208e, _0x1f486a[_0x599622(0x1eb)] = _0x599622(0x357), document['body'][_0x599622(0x281)](_0x1f486a), _0x1f486a[_0x599622(0x28c)](), _0x1f486a['remove']();
        }
        function _0x202625() {
            const _0x287375 = _0x1c75e1;
            clearInterval(_0x16671d[_0x287375(0x2a3)]), _0x16671d['GL_registerEventList'][_0x287375(0x48c)](_0x5f4d9a => {
                const _0x57f1ae = _0x287375;
                _0x5f4d9a[_0x57f1ae(0x2a4)][_0x57f1ae(0x48c)](_0x2e5050 => {
                    const _0x1cd76d = _0x57f1ae;
                    _0x43d12e(_0x5f4d9a[_0x1cd76d(0x3e1)])['off'](_0x1cd76d(0x28c), _0x2e5050);
                });
            }), _0x16671d['GL_registerEventList'] = [], _0x43d12e(_0x287375(0x273))[_0x287375(0x215)](), _0x43d12e(_0x287375(0x35e))[_0x287375(0x215)](), _0x43d12e(_0x287375(0x32a))[_0x287375(0x292)](_0x287375(0x2e5)), _0x16671d[_0x287375(0x3df)] = ![], _0x16671d[_0x287375(0x479)] = ![], _0x16671d[_0x287375(0x305)] = location[_0x287375(0x275)], _0x16671d[_0x287375(0x3a4)]['disconnect'](), _0x221c4a(_0x287375(0x1e8));
        }
        function _0x221c4a(..._0x27d755) {
            const _0x57e2a0 = _0x1c75e1;
            var _0x1fa872 = new Date();
            _0x16671d[_0x57e2a0(0x37b)][_0x57e2a0(0x243)]({
                'time': _0x1fa872['getTime'](),
                'content': [..._0x27d755]
            }), _0x16671d[_0x57e2a0(0x37b)]['length'] > 0x3e8 && (_0x16671d[_0x57e2a0(0x37b)] = [
                {
                    'time': _0x1fa872[_0x57e2a0(0x33c)](),
                    'content': [_0x57e2a0(0x43e)]
                },
                ..._0x16671d[_0x57e2a0(0x37b)][_0x57e2a0(0x386)](-0x3e7)
            ]), console[_0x57e2a0(0x229)]('[' + _0x1fa872[_0x57e2a0(0x2ef)]() + ']', ..._0x27d755);
        }
        function _0x1fa037() {
            const _0xd40edd = _0x1c75e1;
            for (let _0x219d2b in _0x34195a) {
                GM_getValue(_0x219d2b) != null && typeof GM_getValue(_0x219d2b) === _0xd40edd(0x3bc) && (_0x34195a[_0x219d2b] = GM_getValue(_0x219d2b), _0x219d2b === 'MODIFY_VIDEO_VOLUME' && GM_getValue(_0x219d2b) !== !![] && (_0x16671d['videoVolume'] = 0x1));
            }
        }
        function _0x3c955d(_0x3e50f8, _0x325728, _0x4b19f7, _0x427a6d = '') {
            const _0x288be5 = _0x1c75e1;
            _0x325728['find'](_0x288be5(0x293))[_0x288be5(0x3d7)] === 0x0 ? (_0x325728[_0x288be5(0x35d)](_0x288be5(0x3d6) + _0x427a6d + '\x22\x20/>'), _0x325728[_0x288be5(0x3aa)](_0x288be5(0x293))[_0x288be5(0x35d)]('<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22' + _0x16671d['videoVolume'] + _0x288be5(0x3b6)), _0x325728['find'](_0x288be5(0x2e0))[_0x288be5(0x423)](_0x288be5(0x3cc), _0x288be5(0x467) + (_0x16671d['videoVolume'] * 0x64 + '%')), _0x325728[_0x288be5(0x3aa)](_0x288be5(0x2e0))['on']('input', function () {
                const _0x9ae3b5 = _0x288be5;
                var _0x481ec6 = _0x43d12e(this)['val']() * 0x64 + '%';
                _0x16671d[_0x9ae3b5(0x3f7)] = _0x43d12e(this)[_0x9ae3b5(0x297)](), GM_setValue(_0x9ae3b5(0x263), _0x43d12e(this)[_0x9ae3b5(0x297)]()), _0x43d12e(this)[_0x9ae3b5(0x423)](_0x9ae3b5(0x3cc), _0x9ae3b5(0x467) + _0x481ec6), _0x3e50f8['each'](function () {
                    const _0x515c8d = _0x9ae3b5;
                    _0x221c4a('(' + _0x4b19f7 + ')', _0x515c8d(0x3d8)), this[_0x515c8d(0x358)] = _0x16671d['videoVolume'];
                });
            }), _0x325728[_0x288be5(0x3aa)](_0x288be5(0x2e0))['on']('mouseenter', function () {
                const _0x1556fc = _0x288be5;
                var _0x1ffa59 = _0x16671d['videoVolume'] * 0x64 + '%';
                _0x43d12e(this)[_0x1556fc(0x423)](_0x1556fc(0x3cc), _0x1556fc(0x467) + _0x1ffa59), _0x43d12e(this)[_0x1556fc(0x297)](_0x16671d[_0x1556fc(0x3f7)]), _0x3e50f8['each'](function () {
                    const _0x4955d7 = _0x1556fc;
                    _0x221c4a('(' + _0x4b19f7 + ')', _0x4955d7(0x3d8)), this[_0x4955d7(0x358)] = _0x16671d[_0x4955d7(0x3f7)];
                });
            }), _0x325728['find']('div.volume_slider')['on']('click', function (_0xa90fa1) {
                const _0x1805fb = _0x288be5;
                _0xa90fa1['stopPropagation'](), _0xa90fa1[_0x1805fb(0x452)]();
            })) : _0x325728[_0x288be5(0x3aa)](_0x288be5(0x293))[_0x288be5(0x215)]();
        }
        function _0x98bd18(_0x1b8e61) {
            const _0x46f738 = _0x1c75e1;
            _0x350040(), _0x43d12e(_0x46f738(0x3ea))[_0x46f738(0x35d)](_0x46f738(0x461) + _0x28a16e[_0x46f738(0x3ed)] + '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20</div>');
            const _0x172ec3 = _0x43d12e('#imageViewer'), _0x7a434c = _0x43d12e(_0x46f738(0x37a)), _0x355cca = _0x43d12e(_0x46f738(0x2da)), _0x1e00f0 = _0x43d12e(_0x46f738(0x43d));
            _0x1e00f0['attr'](_0x46f738(0x468), _0x1b8e61), _0x172ec3['css'](_0x46f738(0x43a), _0x46f738(0x460));
            let _0xbf0588 = 0.75, _0x3d1997 = 0x0, _0x366639 = 0x0, _0x346320 = ![], _0x3e9f58, _0xba6cb8;
            _0x1e00f0['on']('load', () => {
                const _0x3f3539 = _0x46f738;
                _0x3d1997 = (window[_0x3f3539(0x43f)] - _0x1e00f0[0x0][_0x3f3539(0x47c)]) / 0x2, _0x366639 = (window[_0x3f3539(0x2c5)] - _0x1e00f0[0x0][_0x3f3539(0x3fa)]) / 0x2, _0x269863();
            }), _0x1e00f0['on'](_0x46f738(0x324), _0x34be23 => {
                const _0x2c3a9c = _0x46f738;
                _0x34be23[_0x2c3a9c(0x452)]();
            }), _0x1e00f0['on'](_0x46f738(0x28c), _0x4030d5 => {
                const _0x4c7adc = _0x46f738;
                _0x4030d5['preventDefault'](), _0x4030d5[_0x4c7adc(0x2f3)]();
            }), _0x1e00f0['on'](_0x46f738(0x34c), _0x122a2a => {
                const _0x2f4e6c = _0x46f738;
                _0x122a2a['preventDefault'](), _0xbf0588 += _0x122a2a[_0x2f4e6c(0x39e)]['deltaY'] > 0x0 ? -0.15 : 0.15, _0xbf0588 = Math['min'](Math[_0x2f4e6c(0x36f)](0.75, _0xbf0588), 0x5), _0x269863();
            }), _0x1e00f0['on'](_0x46f738(0x30f), _0x2e9f5c => {
                const _0x40bd57 = _0x46f738;
                _0x346320 = !![], _0x3e9f58 = _0x2e9f5c[_0x40bd57(0x429)] - _0x3d1997, _0xba6cb8 = _0x2e9f5c['pageY'] - _0x366639, _0x1e00f0['css']('cursor', _0x40bd57(0x2fe));
            }), _0x1e00f0['on']('mouseup', () => {
                const _0xb5120 = _0x46f738;
                _0x346320 = ![], _0x1e00f0[_0xb5120(0x24f)](_0xb5120(0x41c), _0xb5120(0x27f));
            }), _0x43d12e(document)['on']('mousemove.igHelper', _0x515c96 => {
                const _0x4a2741 = _0x46f738;
                if (!_0x346320)
                    return;
                _0x515c96[_0x4a2741(0x452)](), _0x3d1997 = _0x515c96['pageX'] - _0x3e9f58, _0x366639 = _0x515c96[_0x4a2741(0x489)] - _0xba6cb8, _0x269863();
            }), _0x172ec3['on']('click', () => {
                _0x350040();
            }), _0x355cca['on'](_0x46f738(0x28c), () => {
                _0x350040();
            }), _0x7a434c['on'](_0x46f738(0x28c), _0xe98d8e => {
                const _0x9a9281 = _0x46f738;
                _0xe98d8e['preventDefault'](), _0xe98d8e[_0x9a9281(0x2f3)]();
            });
            function _0x269863() {
                const _0x370afa = _0x46f738;
                _0x1e00f0[_0x370afa(0x24f)]('transform', _0x370afa(0x2f7) + _0xbf0588 + ')'), _0x1e00f0[_0x370afa(0x24f)](_0x370afa(0x3af), _0x3d1997 + 'px'), _0x1e00f0[_0x370afa(0x24f)](_0x370afa(0x24d), _0x366639 + 'px');
            }
        }
        function _0x350040() {
            const _0x863e26 = _0x1c75e1;
            _0x43d12e(_0x863e26(0x234))['remove'](), _0x43d12e(document)['off'](_0x863e26(0x33d));
        }
        function _0x309b6f() {
            const _0x4264bc = _0x1c75e1;
            var _0xb28456 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x4264bc(0x3ae),
                        'NOTICE_UPDATE_CONTENT': 'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
                        'CHECK_UPDATE': _0x4264bc(0x259),
                        'CHECK_UPDATE_MENU': _0x4264bc(0x41d),
                        'CHECK_UPDATE_INTRO': _0x4264bc(0x39c),
                        'RELOAD_SCRIPT': _0x4264bc(0x45e),
                        'DONATE': _0x4264bc(0x1f0),
                        'FEEDBACK': _0x4264bc(0x1ec),
                        'IMAGE_VIEWER': _0x4264bc(0x3bd),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': _0x4264bc(0x2f9),
                        'SELECT_AND_COPY': _0x4264bc(0x48a),
                        'DOWNLOAD_DOM_TREE': _0x4264bc(0x23e),
                        'REPORT_GITHUB': 'Report\x20an\x20Issue\x20on\x20GitHub',
                        'REPORT_DISCORD': _0x4264bc(0x3f2),
                        'REPORT_FORK': _0x4264bc(0x311),
                        'DEBUG': _0x4264bc(0x433),
                        'CLOSE': 'Close',
                        'ALL_CHECK': _0x4264bc(0x2db),
                        'BATCH_DOWNLOAD_SELECTED': 'Download\x20Selected\x20Resources',
                        'BATCH_DOWNLOAD_DIRECT': _0x4264bc(0x25f),
                        'IMG': _0x4264bc(0x282),
                        'VID': _0x4264bc(0x20b),
                        'DW': 'Download',
                        'DW_ALL': _0x4264bc(0x25f),
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': 'Loading\x20Blob\x20Media...',
                        'LOAD_BLOB_MULTIPLE': _0x4264bc(0x427),
                        'LOAD_BLOB_RELOAD': _0x4264bc(0x360),
                        'NO_CHECK_RESOURCE': _0x4264bc(0x384),
                        'NO_VID_URL': _0x4264bc(0x3d5),
                        'SETTING': _0x4264bc(0x306),
                        'AUTO_RENAME': _0x4264bc(0x2c1),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': _0x4264bc(0x418),
                        'RENAME_LOCATE_DATE': _0x4264bc(0x2ff),
                        'DISABLE_VIDEO_LOOPING': _0x4264bc(0x3d4),
                        'HTML5_VIDEO_CONTROL': _0x4264bc(0x3c1),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x4264bc(0x2d5),
                        'FORCE_FETCH_ALL_RESOURCES': _0x4264bc(0x280),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x4264bc(0x472),
                        'DIRECT_DOWNLOAD_ALL': _0x4264bc(0x208),
                        'MODIFY_VIDEO_VOLUME': _0x4264bc(0x3fc),
                        'SCROLL_BUTTON': _0x4264bc(0x232),
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x4264bc(0x420),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x4264bc(0x1e9),
                        'AUTO_RENAME_INTRO': _0x4264bc(0x2cf),
                        'RENAME_SHORTCODE_INTRO': _0x4264bc(0x442),
                        'RENAME_PUBLISH_DATE_INTRO': 'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_LOCATE_DATE_INTRO': _0x4264bc(0x312),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x4264bc(0x3dc),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x4264bc(0x412),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x4264bc(0x219),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x4264bc(0x2aa),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x4264bc(0x323),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x4264bc(0x345),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x4264bc(0x25c),
                        'SCROLL_BUTTON_INTRO': _0x4264bc(0x32b),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': 'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x4264bc(0x202),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x4264bc(0x39b),
                        'SKIP_VIEW_STORY_CONFIRM': _0x4264bc(0x2c9),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': 'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.'
                    }
                }, _0x1e6fe5 = Object[_0x4264bc(0x2a8)]({}, _0xb28456, _0x16671d[_0x4264bc(0x2af)]), _0x29b8b8 = Object[_0x4264bc(0x331)](_0x1e6fe5)[_0x4264bc(0x41e)]()['reduce']((_0x542e1b, _0x55d0dc) => {
                    return _0x542e1b[_0x55d0dc] = _0x1e6fe5[_0x55d0dc], _0x542e1b;
                }, {});
            return _0x29b8b8;
        }
        async function _0x1c390c(_0x2b39cb) {
            return new Promise((_0x25a01a, _0x1591af) => {
                const _0x1f5e22 = a0_0x5a41;
                GM_xmlhttpRequest({
                    'method': _0x1f5e22(0x2e8),
                    'url': _0x1f5e22(0x366) + _0x2b39cb + '.json',
                    'onload': function (_0x5f3604) {
                        const _0x11789d = _0x1f5e22;
                        try {
                            let _0x1d2ca1 = JSON[_0x11789d(0x223)](_0x5f3604[_0x11789d(0x44e)]);
                            _0x25a01a(_0x1d2ca1);
                        } catch (_0x1949f0) {
                            _0x1591af(_0x1949f0);
                        }
                    },
                    'onerror': function (_0x3a1203) {
                        const _0x5c670d = _0x1f5e22;
                        _0x221c4a(_0x5c670d(0x27b), 'reject', _0x3a1203), _0x1591af(_0x3a1203);
                    }
                });
            });
        }
        function _0x4ebfe1(_0x12a53c) {
            const _0x4389d0 = _0x1c75e1, _0x311332 = _0x309b6f();
            return _0x311332[_0x16671d[_0x4389d0(0x3c5)]] != undefined && _0x311332[_0x16671d[_0x4389d0(0x3c5)]][_0x12a53c] != undefined ? _0x311332[_0x16671d[_0x4389d0(0x3c5)]][_0x12a53c] : _0x311332[_0x4389d0(0x361)][_0x12a53c];
        }
        function _0x30d0bd() {
            const _0x4817ff = _0x1c75e1;
            _0x43d12e(_0x4817ff(0x3cf))[_0x4817ff(0x3c2)](function () {
                const _0x5267d4 = _0x4817ff;
                _0x43d12e(this)[_0x5267d4(0x220)](_0x4ebfe1(_0x43d12e(this)['attr'](_0x5267d4(0x233))));
            }), _0x43d12e(_0x4817ff(0x25b))[_0x4817ff(0x3c2)](function () {
                const _0x3e4f0e = _0x4817ff;
                _0x43d12e(this)[_0x3e4f0e(0x423)](_0x3e4f0e(0x404), _0x4ebfe1(_0x43d12e(this)[_0x3e4f0e(0x423)](_0x3e4f0e(0x3fb))));
            });
        }
        _0x43d12e(function () {
            const _0x4c7d6c = _0x1c75e1;
            function _0x44df15(_0x2ddedd) {
                const _0x2fe1bf = a0_0x5a41;
                var _0x1a45e0 = [];
                for (var _0x50ec0f of _0x2ddedd) {
                    _0x1a45e0[_0x2fe1bf(0x243)]({
                        'tagName': _0x50ec0f[_0x2fe1bf(0x40f)],
                        'id': _0x50ec0f['id'],
                        'className': _0x50ec0f[_0x2fe1bf(0x400)]
                    });
                }
                return _0x1a45e0;
            }
            function _0x4a1557() {
                const _0x505d28 = a0_0x5a41;
                let _0x129d85 = _0x43d12e(_0x505d28(0x286))[0x0];
                var _0x2ba7f5 = '';
                _0x16671d['GL_logger'][_0x505d28(0x48c)](_0x3b2160 => {
                    const _0x48b7ee = _0x505d28;
                    var _0x3b8fde = JSON[_0x48b7ee(0x3c0)](_0x3b2160[_0x48b7ee(0x266)], function (_0x1d35aa, _0x5eb36f) {
                        const _0x17cbfd = _0x48b7ee;
                        if (Array[_0x17cbfd(0x488)](this)) {
                            if (typeof _0x5eb36f === 'object' && _0x5eb36f instanceof jQuery)
                                return _0x44df15(_0x5eb36f);
                            return _0x5eb36f;
                        } else
                            return _0x5eb36f;
                    }, '\x09');
                    _0x2ba7f5 += new Date(_0x3b2160[_0x48b7ee(0x22e)])[_0x48b7ee(0x2ef)]() + ':\x20' + _0x3b8fde + '\x0a';
                }), _0x43d12e(_0x505d28(0x320))[_0x505d28(0x220)](_0x505d28(0x209) + _0x2ba7f5 + _0x505d28(0x2e2) + location[_0x505d28(0x47b)] + _0x505d28(0x1fb) + _0x129d85[_0x505d28(0x2b9)]);
            }
            _0x43d12e(_0x4c7d6c(0x3ea))['on']('click', _0x4c7d6c(0x2e6), function () {
                _0x4a1557();
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x20e), function () {
                const _0x7a31ab = _0x4c7d6c;
                _0x43d12e(_0x7a31ab(0x320))[_0x7a31ab(0x31f)](), document[_0x7a31ab(0x23f)](_0x7a31ab(0x26f));
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x274), function () {
                const _0x1f9ce3 = _0x4c7d6c;
                _0x43d12e(_0x1f9ce3(0x320))[_0x1f9ce3(0x220)]()[_0x1f9ce3(0x3d7)] === 0x0 && _0x4a1557();
                var _0x488a26 = _0x43d12e(_0x1f9ce3(0x320))[_0x1f9ce3(0x220)](), _0x489661 = document[_0x1f9ce3(0x32c)]('a'), _0x5951cb = new Blob([_0x488a26], { 'type': _0x1f9ce3(0x319) });
                _0x489661[_0x1f9ce3(0x275)] = URL[_0x1f9ce3(0x340)](_0x5951cb), _0x489661['download'] = _0x1f9ce3(0x2d9) + new Date()[_0x1f9ce3(0x33c)]() + _0x1f9ce3(0x2de), document[_0x1f9ce3(0x3ea)][_0x1f9ce3(0x281)](_0x489661), _0x489661[_0x1f9ce3(0x28c)](), _0x489661[_0x1f9ce3(0x215)]();
            }), _0x43d12e('body')['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x27d), function () {
                const _0x374f0b = _0x4c7d6c;
                _0x43d12e(this)[_0x374f0b(0x1f6)](_0x374f0b(0x455))['length'] > 0x0 ? _0x43d12e(this)[_0x374f0b(0x1f6)](_0x374f0b(0x455))[_0x374f0b(0x36a)](0xfa, function () {
                    const _0x41702c = _0x374f0b;
                    _0x43d12e(this)[_0x41702c(0x215)]();
                }) : _0x43d12e(_0x374f0b(0x35c))[_0x374f0b(0x215)]();
            }), _0x43d12e(window)['on'](_0x4c7d6c(0x22c), function (_0x1d2598) {
                const _0x3bf416 = _0x4c7d6c;
                _0x1d2598[_0x3bf416(0x240)] == '81' && _0x1d2598['altKey'] && (_0x43d12e('.IG_POPUP_DIG')[_0x3bf416(0x215)](), _0x1d2598[_0x3bf416(0x452)]()), _0x1d2598[_0x3bf416(0x240)] == '87' && _0x1d2598[_0x3bf416(0x317)] && (_0x1577d0(), _0x1d2598['preventDefault']()), _0x1d2598[_0x3bf416(0x240)] == '90' && _0x1d2598[_0x3bf416(0x317)] && (_0x5aa059(), _0x1d2598['preventDefault']()), _0x1d2598['which'] == '82' && _0x1d2598['altKey'] && (_0x202625(), _0x1d2598[_0x3bf416(0x452)]()), _0x1d2598[_0x3bf416(0x240)] == '83' && _0x1d2598[_0x3bf416(0x317)] && (location['href'][_0x3bf416(0x36e)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x43d12e(_0x3bf416(0x3c3))[_0x3bf416(0x3d7)] > 0x0 && _0x43d12e('.IG_DWSTORY')?.[_0x3bf416(0x2a4)](_0x3bf416(0x28c)), location[_0x3bf416(0x275)][_0x3bf416(0x36e)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x43d12e('.IG_DWHISTORY')['length'] > 0x0 && _0x43d12e('.IG_DWHISTORY')?.[_0x3bf416(0x2a4)](_0x3bf416(0x28c)), _0x1d2598[_0x3bf416(0x452)]());
            }), _0x43d12e('body')['on'](_0x4c7d6c(0x440), _0x4c7d6c(0x32e), function () {
                const _0x2f9b4f = _0x4c7d6c;
                var _0x2f055c = _0x43d12e(this)[_0x2f9b4f(0x423)]('id');
                if (_0x2f055c && _0x34195a[_0x2f055c] !== undefined) {
                    let _0x2f914f = _0x43d12e(this)[_0x2f9b4f(0x2d8)](_0x2f9b4f(0x3b9));
                    GM_setValue(_0x2f055c, _0x2f914f), _0x34195a[_0x2f055c] = _0x2f914f, console['log'](_0x2f9b4f(0x35f), _0x2f055c, _0x2f914f);
                }
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x226), function (_0x4f918b) {
                const _0x3198cf = _0x4c7d6c;
                _0x43d12e(this)[_0x3198cf(0x3aa)](_0x3198cf(0x455))[_0x3198cf(0x3d7)] > 0x0 && _0x4f918b[_0x3198cf(0x452)]();
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x440), _0x4c7d6c(0x27a), function () {
                const _0x50d3e7 = _0x4c7d6c;
                let _0x1072bc = _0x43d12e(this)[_0x50d3e7(0x297)]();
                _0x43d12e(this)[_0x50d3e7(0x423)](_0x50d3e7(0x342)) == _0x50d3e7(0x31a) ? _0x43d12e(this)[_0x50d3e7(0x341)]()[_0x50d3e7(0x297)](_0x1072bc) : _0x43d12e(this)[_0x50d3e7(0x3e5)]()[_0x50d3e7(0x297)](_0x1072bc), _0x1072bc >= 0x0 && _0x1072bc <= 0x1 && (_0x16671d[_0x50d3e7(0x3f7)] = _0x1072bc, GM_setValue(_0x50d3e7(0x263), _0x1072bc));
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x3b4), _0x4c7d6c(0x27a), function () {
                const _0x1688f4 = _0x4c7d6c;
                if (_0x43d12e(this)[_0x1688f4(0x423)](_0x1688f4(0x342)) == _0x1688f4(0x31a)) {
                    let _0x34751b = _0x43d12e(this)['val']();
                    _0x43d12e(this)[_0x1688f4(0x341)]()[_0x1688f4(0x297)](_0x34751b);
                } else {
                    let _0x4d0d62 = _0x43d12e(this)[_0x1688f4(0x297)]();
                    _0x4d0d62 >= 0x0 && _0x4d0d62 <= 0x1 ? _0x43d12e(this)['prev']()['val'](_0x4d0d62) : _0x4d0d62 < 0x0 ? _0x43d12e(this)[_0x1688f4(0x297)](0x0) : _0x43d12e(this)[_0x1688f4(0x297)](0x1);
                }
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x3b4), '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format', function () {
                const _0x253e70 = _0x4c7d6c;
                GM_setValue(_0x253e70(0x469), _0x43d12e(this)[_0x253e70(0x297)]()), _0x16671d[_0x253e70(0x29f)] = _0x43d12e(this)[_0x253e70(0x297)]();
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x2bd), function (_0x5387fb) {
                const _0x27f674 = _0x4c7d6c;
                _0x5387fb[_0x27f674(0x452)](), _0x3d93de(this);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x364), function () {
                const _0x5e1856 = _0x4c7d6c;
                if (_0x34195a[_0x5e1856(0x351)] && _0x34195a[_0x5e1856(0x379)])
                    _0x3d93de(_0x43d12e(this)[_0x5e1856(0x1f6)]()[_0x5e1856(0x42c)]('a')['first']()[0x0], !![]);
                else {
                    var _0x21f2a5 = new URL(_0x43d12e(this)['parent']()[_0x5e1856(0x42c)]('a')[_0x5e1856(0x423)](_0x5e1856(0x329)));
                    _0x21f2a5[_0x5e1856(0x28d)] = 'scontent.cdninstagram.com', _0x2493ec(_0x21f2a5['href']);
                }
            }), _0x43d12e('body')['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x3e8), function () {
                const _0xaf7c04 = _0x4c7d6c;
                let _0x203ef0 = new Date()[_0xaf7c04(0x33c)]();
                _0x34195a[_0xaf7c04(0x2e1)] && _0x43d12e(this)[_0xaf7c04(0x1f6)]()[_0xaf7c04(0x42c)]('a')[_0xaf7c04(0x423)](_0xaf7c04(0x372)) && (_0x203ef0 = _0x43d12e(this)[_0xaf7c04(0x1f6)]()[_0xaf7c04(0x42c)]('a')[_0xaf7c04(0x423)](_0xaf7c04(0x372)));
                let _0x3a1c1e = _0x43d12e(this)[_0xaf7c04(0x1f6)]()[_0xaf7c04(0x42c)]('a')[_0xaf7c04(0x423)]('data-path') ?? _0x43d12e(_0xaf7c04(0x42d))[_0xaf7c04(0x220)]();
                _0x33db06(_0x43d12e(this)[_0xaf7c04(0x1f6)]()['children']('a')[_0xaf7c04(0x3aa)](_0xaf7c04(0x482))[_0xaf7c04(0x308)]()['attr'](_0xaf7c04(0x468)), _0x43d12e(this)[_0xaf7c04(0x1f6)]()[_0xaf7c04(0x42c)]('a')[_0xaf7c04(0x423)](_0xaf7c04(0x32d)), _0xaf7c04(0x44d), _0x203ef0, _0xaf7c04(0x216), _0x3a1c1e);
            }), _0x43d12e('body')['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x3c3), function () {
                _0x4b8f7e(!![]);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on']('click', '.IG_DWSTORY_ALL', function () {
                _0x4627df();
            }), _0x43d12e('body')['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x38d), function (_0x5a5566) {
                const _0x569b77 = _0x4c7d6c;
                _0x5a5566[_0x569b77(0x452)](), _0x4b8f7e(!![], !![], !![]);
            }), _0x43d12e('body')['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x381), function () {
                _0x11f88a(!![]);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x237), function (_0x496054) {
                const _0xd72c9 = _0x4c7d6c;
                _0x496054[_0xd72c9(0x2f3)](), _0x449319(!![]);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x301), function () {
                _0x4f3378(!![]);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x428), function () {
                _0x40a2da();
            }), _0x43d12e('body')['on'](_0x4c7d6c(0x28c), '.IG_DWHINEWTAB', function (_0x1c1816) {
                const _0x45d2fb = _0x4c7d6c;
                _0x1c1816[_0x45d2fb(0x452)](), _0x4f3378(!![], !![]);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x334), function () {
                _0x4b7dca(!![]);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x3d0), function () {
                _0x22a3fb(!![], !![]);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x39f), function () {
                _0x22a3fb(!![], !![], !![]);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x411), function () {
                _0x22a3fb(!![], ![]);
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x30f), _0x4c7d6c(0x296), function (_0x2e72b5) {
                const _0x331367 = _0x4c7d6c;
                if (_0x2e72b5[_0x331367(0x240)] === 0x3 || _0x2e72b5['which'] === 0x2) {
                    if (location[_0x331367(0x275)] === _0x331367(0x2ea) && _0x34195a[_0x331367(0x20d)]) {
                        _0x2e72b5[_0x331367(0x452)]();
                        if (_0x43d12e(this)['find']('canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img')[_0x331367(0x3d7)] > 0x0) {
                            const _0x31faa4 = _0x331367(0x2ea) + _0x43d12e(this)[_0x331367(0x42c)](_0x331367(0x3e6))[_0x331367(0x1fa)]()[_0x331367(0x220)]();
                            _0x2e72b5[_0x331367(0x240)] === 0x2 ? GM_openInTab(_0x31faa4) : location[_0x331367(0x275)] = _0x31faa4;
                        }
                    }
                }
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x440), _0x4c7d6c(0x222), function () {
                const _0x2fb7c2 = _0x4c7d6c;
                var _0x15181b = _0x43d12e(this)[_0x2fb7c2(0x3aa)]('input')[_0x2fb7c2(0x2d8)]('checked');
                _0x43d12e(_0x2fb7c2(0x21d))[_0x2fb7c2(0x3c2)](function () {
                    const _0x3eebcb = _0x2fb7c2;
                    _0x43d12e(this)[_0x3eebcb(0x2d8)](_0x3eebcb(0x3b9), _0x15181b);
                });
            }), _0x43d12e('body')['on']('change', '.IG_POPUP_DIG_BODY\x20.inner_box', function () {
                const _0x3c57b1 = _0x4c7d6c;
                var _0x3b7681 = _0x43d12e('.IG_POPUP_DIG_BODY\x20.inner_box:checked')['length'], _0x575d9f = _0x43d12e('.IG_POPUP_DIG_BODY\x20.inner_box')[_0x3c57b1(0x3d7)];
                _0x43d12e('.IG_POPUP_DIG_TITLE\x20.checkbox')[_0x3c57b1(0x3aa)](_0x3c57b1(0x3b4))[_0x3c57b1(0x2d8)]('checked', _0x3b7681 == _0x575d9f);
            }), _0x43d12e('body')['on'](_0x4c7d6c(0x28c), _0x4c7d6c(0x2ec), function () {
                const _0x25083f = _0x4c7d6c;
                let _0x55a140 = 0x0;
                _0x43d12e(_0x25083f(0x34b))[_0x25083f(0x3c2)](function () {
                    const _0x487aa0 = _0x25083f;
                    _0x43d12e(this)[_0x487aa0(0x3e5)]()[_0x487aa0(0x42c)](_0x487aa0(0x3b4))['prop']('checked') && (_0x43d12e(this)['trigger'](_0x487aa0(0x28c)), _0x55a140++);
                }), _0x55a140 == 0x0 && alert(_0x4ebfe1('NO_CHECK_RESOURCE'));
            }), _0x43d12e(_0x4c7d6c(0x3ea))['on'](_0x4c7d6c(0x440), _0x4c7d6c(0x37e), function () {
                const _0x1fa5ef = _0x4c7d6c;
                GM_setValue('lang', _0x43d12e(this)[_0x1fa5ef(0x297)]()), _0x16671d['lang'] = _0x43d12e(this)[_0x1fa5ef(0x297)](), _0x16671d[_0x1fa5ef(0x3c5)]?.[_0x1fa5ef(0x483)]('en') || _0x16671d[_0x1fa5ef(0x2af)][_0x16671d[_0x1fa5ef(0x3c5)]] != null ? (_0x30d0bd(), _0x45716d()) : _0x1c390c(_0x16671d['lang'])[_0x1fa5ef(0x2be)](_0x440297 => {
                    const _0x5df78c = _0x1fa5ef;
                    _0x16671d[_0x5df78c(0x2af)][_0x16671d['lang']] = _0x440297, _0x30d0bd(), _0x45716d();
                })[_0x1fa5ef(0x2b4)](_0xa7532a => {
                    const _0x379b3b = _0x1fa5ef;
                    console[_0x379b3b(0x253)](_0x379b3b(0x279), _0xa7532a);
                });
            }), _0x43d12e('body')['on']('click', _0x4c7d6c(0x367), function () {
                const _0x57d6a6 = _0x4c7d6c;
                _0x43d12e(_0x57d6a6(0x34b))[_0x57d6a6(0x3c2)](function () {
                    const _0x464433 = _0x57d6a6;
                    _0x43d12e(this)[_0x464433(0x2a4)](_0x464433(0x28c));
                });
            });
            const _0x4a21b2 = new MutationObserver(_0x4aa073 => {
                const _0x58d3ec = _0x4c7d6c;
                for (const _0x1ca14e of _0x4aa073) {
                    _0x1ca14e[_0x58d3ec(0x342)] === _0x58d3ec(0x242) && _0x1ca14e[_0x58d3ec(0x26e)][_0x58d3ec(0x48c)](_0x1ce82e => {
                        const _0x2f49ec = _0x58d3ec, _0x2eeebd = _0x43d12e(_0x1ce82e)[_0x2f49ec(0x3aa)](_0x2f49ec(0x1fd));
                        if (_0x2eeebd[_0x2f49ec(0x3d7)] > 0x0) {
                            _0x34195a[_0x2f49ec(0x33a)] && _0x2eeebd['each'](function () {
                                _0x43d12e(this)['on']('play\x20playing', function () {
                                    const _0x2b1a38 = a0_0x5a41;
                                    !_0x43d12e(this)[_0x2b1a38(0x44b)](_0x2b1a38(0x2bf)) && (_0x43d12e(this)[_0x2b1a38(0x423)](_0x2b1a38(0x2a5), !![]), this[_0x2b1a38(0x358)] = _0x16671d['videoVolume'], _0x221c4a(_0x2b1a38(0x37d)));
                                });
                            });
                            if (location[_0x2f49ec(0x47b)][_0x2f49ec(0x36e)](/^(\/stories\/)/ig)) {
                                const _0x473419 = location['pathname'][_0x2f49ec(0x36e)](/^(\/stories\/highlights\/)/ig) != null, _0x261831 = _0x473419 ? _0x2f49ec(0x249) : _0x2f49ec(0x29c);
                                _0x2eeebd[_0x2f49ec(0x3c2)](function () {
                                    const _0x3ef50a = _0x2f49ec;
                                    _0x43d12e(this)['on'](_0x3ef50a(0x478), function () {
                                        const _0x365c48 = _0x3ef50a;
                                        if (!_0x43d12e(this)['data'](_0x365c48(0x3b2))) {
                                            let _0xce8d76 = _0x43d12e(this);
                                            _0xce8d76[_0x365c48(0x3ff)]('div[style][class]')['filter'](function () {
                                                const _0x132df6 = _0x365c48;
                                                return _0x43d12e(this)[_0x132df6(0x47c)]() == _0xce8d76[_0x132df6(0x47c)]();
                                            })[_0x365c48(0x3aa)](_0x365c48(0x45d))[_0x365c48(0x3d7)] === 0x0 ? (_0x43d12e(this)['attr'](_0x365c48(0x22d), !![]), _0x473419 ? _0x4b7dca(![]) : _0x11f88a(![]), _0x221c4a('(' + _0x261831 + ')', 'Manually\x20inserting\x20thumbnail\x20button')) : (_0x43d12e(this)['attr']('data-modify-thumbnail', !![]), _0x221c4a('(' + _0x261831 + ')', _0x365c48(0x284)));
                                        }
                                    });
                                    var _0x45a82a = _0x43d12e(this);
                                    if (_0x34195a[_0x3ef50a(0x2f6)]) {
                                        if (!_0x45a82a[_0x3ef50a(0x44b)](_0x3ef50a(0x414))) {
                                            _0x221c4a('(' + _0x261831 + ')', _0x3ef50a(0x432));
                                            _0x34195a['MODIFY_VIDEO_VOLUME'] && (this[_0x3ef50a(0x358)] = _0x16671d[_0x3ef50a(0x3f7)], _0x45a82a['on'](_0x3ef50a(0x339), function () {
                                                const _0x512953 = _0x3ef50a;
                                                this[_0x512953(0x358)] = _0x16671d[_0x512953(0x3f7)];
                                            }));
                                            let _0x28bc41 = _0x45a82a['parents'](_0x3ef50a(0x3e6))[_0x3ef50a(0x248)](function () {
                                                    const _0x4e1714 = _0x3ef50a;
                                                    return _0x43d12e(this)['attr']('class') == null && _0x43d12e(this)[_0x4e1714(0x423)]('style') == null;
                                                })[_0x3ef50a(0x308)](), _0xc3bea6 = _0x28bc41[_0x3ef50a(0x341)]();
                                            _0xc3bea6['hide']();
                                            let _0x4c3826 = _0x28bc41[_0x3ef50a(0x3aa)]('div[class][role=\x22button\x22]');
                                            _0x4c3826[_0x3ef50a(0x3db)]();
                                            const _0x42739f = function (_0x5f23b9) {
                                                const _0x489eaa = _0x3ef50a;
                                                _0x5f23b9[_0x489eaa(0x452)](), _0x45a82a['css'](_0x489eaa(0x20c), '2'), _0x45a82a[_0x489eaa(0x423)](_0x489eaa(0x414), !![]), _0x4c3826[_0x489eaa(0x3db)](), _0xc3bea6[_0x489eaa(0x3db)](), _0x3c955d(_0x45a82a, _0x45a82a[_0x489eaa(0x3ff)](_0x489eaa(0x383))[_0x489eaa(0x248)](function () {
                                                    const _0x9199ee = _0x489eaa;
                                                    return _0x43d12e(this)[_0x9199ee(0x47c)]() == _0x45a82a[_0x9199ee(0x47c)]();
                                                })[_0x489eaa(0x308)](), _0x261831, 'vertical');
                                            };
                                            _0x45a82a[_0x3ef50a(0x1f6)]()[_0x3ef50a(0x3aa)](_0x3ef50a(0x484))['on']('contextmenu', _0x42739f), _0x4c3826['on'](_0x3ef50a(0x407), _0x42739f), _0xc3bea6['on'](_0x3ef50a(0x407), _0x42739f), _0x45a82a['on'](_0x3ef50a(0x407), function (_0x1b55e7) {
                                                const _0x2e801a = _0x3ef50a;
                                                _0x1b55e7[_0x2e801a(0x452)](), _0x45a82a[_0x2e801a(0x24f)](_0x2e801a(0x20c), '-1'), _0x45a82a['removeAttr']('controls'), _0xc3bea6['show'](), _0x4c3826[_0x2e801a(0x401)](), _0x3c955d(_0x45a82a, _0x45a82a[_0x2e801a(0x3ff)](_0x2e801a(0x383))[_0x2e801a(0x248)](function () {
                                                    const _0x3e4897 = _0x2e801a;
                                                    return _0x43d12e(this)[_0x3e4897(0x47c)]() == _0x45a82a[_0x3e4897(0x47c)]();
                                                })[_0x2e801a(0x308)](), _0x261831, 'vertical');
                                            }), _0x45a82a['on'](_0x3ef50a(0x2b3), function () {
                                                const _0x5e3150 = _0x3ef50a;
                                                let _0x29a237 = _0x28bc41['parent']()['find'](_0x5e3150(0x322))[_0x5e3150(0x3ff)]('[role=\x22button\x22]')[_0x5e3150(0x308)]();
                                                var _0x36e34a = _0x29a237[_0x5e3150(0x3aa)]('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0x5e3150(0x3d7)] === 0x0;
                                                this[_0x5e3150(0x44a)] != _0x36e34a && (this[_0x5e3150(0x358)] = _0x16671d['videoVolume'], _0x29a237?.['trigger']('click')), _0x43d12e(this)[_0x5e3150(0x423)](_0x5e3150(0x3da)) && (_0x16671d[_0x5e3150(0x3f7)] = this[_0x5e3150(0x358)], GM_setValue(_0x5e3150(0x263), this['volume'])), this['volume'] == _0x16671d['videoVolume'] && _0x43d12e(this)[_0x5e3150(0x423)]('data-completed', !![]);
                                            }), _0x45a82a[_0x3ef50a(0x24f)]('position', _0x3ef50a(0x36c)), _0x45a82a['css'](_0x3ef50a(0x20c), '2'), _0x45a82a[_0x3ef50a(0x423)]('data-controls', !![]), _0x45a82a[_0x3ef50a(0x423)](_0x3ef50a(0x414), !![]);
                                        }
                                    } else
                                        _0x3c955d(_0x45a82a, _0x45a82a[_0x3ef50a(0x3ff)](_0x3ef50a(0x383))[_0x3ef50a(0x248)](function () {
                                            const _0x5d4131 = _0x3ef50a;
                                            return _0x43d12e(this)[_0x5d4131(0x47c)]() == _0x45a82a[_0x5d4131(0x47c)]();
                                        })['first'](), _0x261831, _0x3ef50a(0x2ca));
                                });
                            }
                        }
                    });
                }
            });
            _0x4a21b2[_0x4c7d6c(0x3e7)](_0x43d12e(_0x4c7d6c(0x286))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x1036() {
    const _0x523755 = [
        '.IG_DWHINEWTAB',
        'innerHTML',
        'Script\x20Loaded',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'a[data-needed=\x22direct\x22]',
        'then',
        'modify',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        '<option\x20value=\x22',
        'hidden',
        'RELOAD_SCRIPT',
        'innerHeight',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'users',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'vertical',
        'CHECK_UPDATE_MENU',
        'shortcode_media',
        'relative',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'BATCH_DOWNLOAD_DIRECT',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'FORCE_FETCH_ALL_RESOURCES',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'www.',
        'LOCALE_MANIFEST',
        'prop',
        'DOMTree-',
        '#iv_close',
        'Select\x20All',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '.txt',
        'Feedback\x20Options',
        'div.volume_slider\x20input',
        'RENAME_PUBLISH_DATE',
        '\x0a-----\x0a\x0aLocation:\x20',
        'html',
        'getBlobMediaWithQueryID()',
        'data-snig',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'GET',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'https://www.instagram.com/',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'LOAD_BLOB_MULTIPLE',
        '._acay\x20+\x20.x24i39r',
        'toISOString',
        'query_id',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        'GraphSidecar',
        'stopPropagation',
        '4124514HcNfkC',
        'owner',
        'HTML5_VIDEO_CONTROL',
        'scale(',
        '.IG_THUMBNAIL_MAIN',
        'Show\x20DOM\x20Tree',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '3lbOLiy',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'grabbing',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        '.IG_DWHISTORY',
        'DOWNLOAD',
        'split',
        'div#splash-screen',
        'currentURL',
        'Settings',
        'is_video',
        'first',
        'INTERNAL_CSS',
        'getMonth',
        'Fetch\x20from\x20memory\x20cache:',
        '.IG_DW_MAIN',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        '_acnf',
        'mousedown',
        'username',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'tempFetchRateLimit',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        '_acnb',
        'altKey',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'text/plain',
        'range',
        'position',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'padStart',
        '.circle_wrapper\x20span',
        'select',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'finalUrl',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'dragstart\x20drop',
        'onHighlightsStory',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'Remote\x20version:\x20',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'data-href',
        '[data-snig]',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'createElement',
        'data-username',
        '.IG_POPUP_DIG\x20input',
        'reels_media',
        'LOAD_BLOB_ONE',
        'keys',
        'GraphImage',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        '.IG_DWHISTORY_THUMBNAIL',
        'getHours',
        'reject',
        'FEEDBACK',
        'getBlobMedia()',
        'loadstart',
        'MODIFY_VIDEO_VOLUME',
        '<a\x20media-id=\x22',
        'getTime',
        'mousemove.igHelper',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'getPostOwner()',
        'createObjectURL',
        'next',
        'type',
        '.IG_DW_ALL_MAIN',
        'trim',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'https://www.instagram.com/p/',
        'data-controls',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'matchAll',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'wheel',
        'get',
        '._acay',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'isIntersecting',
        'FORCE_RESOURCE_VIA_MEDIA',
        'GL_dataCache',
        '20000',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'IMG',
        'x1lix1fw',
        '_blank',
        'volume',
        '699406qazVgK',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'trigging',
        '.IG_POPUP_DIG',
        'append',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'user\x20settings',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'en-US',
        'remove-thumbnail',
        '/info/',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'DIRECT_DOWNLOAD_ALL',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        '8779876WSjyYf',
        'loop',
        'fadeOut',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        'absolute',
        'stp',
        'match',
        'max',
        '__typename',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'datetime',
        'taken_at',
        'removeClass',
        '#scrollWrapper',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '4762335kFEdUf',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        '#iv_header',
        'GL_logger',
        '</div>',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        '.IG_DWSTORY_THUMBNAIL',
        'scrollBy',
        'div[style][class]',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'reel',
        'slice',
        '.IG_POPUP_DIG\x20#post_info',
        'faild',
        'language',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'load',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        '.IG_DWNEWTAB',
        'NOTICE_UPDATE_TITLE',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        '</option>',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'REPORT_GITHUB',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'smooth',
        'DIV',
        'isReels',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        'NEW_TAB',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        '\x22\x20class=\x22newTab\x22>',
        'originalEvent',
        '.IG_REELS_NEWTAB',
        'div:last-child',
        'query_hash',
        '</button>',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'GL_observer',
        'image_versions2',
        'div[role=\x22presentation\x22]',
        'AUTO_RENAME',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'profile_pic_url',
        'find',
        'toString',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'Wololo!\x20New\x20version\x20released.',
        'left',
        'data-type',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'modify-thumbnail',
        'toUpperCase',
        'input',
        'video\x20+\x20div\x20>\x20div',
        '\x22\x20/></div>',
        'data-name',
        'DISABLE_VIDEO_LOOPING',
        'checked',
        'video_url',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'boolean',
        'Open\x20Image\x20In\x20Viewer',
        'NONE',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'stringify',
        'Display\x20HTML5\x20Video\x20Controller',
        'each',
        '.IG_DWSTORY',
        'DOWNLOAD_DOM_TREE',
        'lang',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        '.xpgaw4o',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'substr',
        'feedback_message',
        'style',
        '.videoThumbnail',
        'message',
        '[data-ih-locale]',
        '.IG_REELS',
        'script',
        'hostname',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'Disable\x20Video\x20Auto-looping',
        'Cannot\x20find\x20video\x20URL.',
        '<div\x20class=\x22volume_slider\x20',
        'length',
        'video\x20volume\x20changed\x20#slider',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'data-completed',
        'hide',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '#_SNLOAD',
        'pageLoaded',
        'hasClass',
        'element',
        'NO_VID_URL',
        'Found\x20post\x20container',
        'ig_helper_notice',
        'prev',
        'div',
        'observe',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        'x1s85apg',
        'body',
        'data-path',
        'x1iyjqo2',
        'CLOSE',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'taken_at_timestamp',
        '_ac3q',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'getUserHighSizeProfile()',
        'pause',
        'THUMBNAIL',
        'videoVolume',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'GraphVideo',
        'height',
        'data-ih-locale-title',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'onReadyMyDW()\x20Timer',
        '<p\x20id=\x22_SNLOAD\x22>',
        'parents',
        'className',
        'show',
        '.IG_IMAGE_VIEWER',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'title',
        'GL_username',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'contextmenu',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'a[href^=\x22/\x22]',
        'ALL_CHECK',
        '<a\x20datetime=\x22',
        'Current\x20version:\x20',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'config_width',
        'tagName',
        '\x22\x20datetime=\x22',
        '.IG_REELS_THUMBNAIL',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'controls',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'join',
        'wrap',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'navigator',
        'cursor',
        'Checking\x20for\x20Updates',
        'sort',
        'mp4',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        '9AUJCsJ',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'attr',
        'includes',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        '\x22\x20data-ih-locale-title=\x22',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        '.IG_DWHISTORY_ALL',
        'pageX',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'before',
        'children',
        '#article-id',
        'regenerated',
        'data-remove-thumbnail',
        '.circle_wrapper',
        'body\x20>\x20div\x20section:visible._ac0a',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'Debug\x20Window',
        'post',
        'items',
        '</span>\x20',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'display',
        '</span></div>',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        '#iv_image',
        'logger\x20sliced',
        'innerWidth',
        'change',
        '<div></div>',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'body\x20>\x20div\x20section._ac0a',
        'THUMBNAIL_INTRO',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        '<div\x20class=\x22button_wrapper\x22>',
        '</div></div>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'name',
        'muted',
        'data',
        'https://www.instagram.com/reel/',
        'thumbnail',
        'response',
        'article',
        'GL_registerEventList',
        'version:',
        'preventDefault',
        'SELECT_AND_COPY',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        '#tempWrapper',
        'script[type=\x22application/json\x22]',
        'FULLSCREEN',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'SKIP_VIEW_STORY_CONFIRM',
        'searchParams',
        'shortcode',
        'video[class]',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'Reload\x20Script',
        'isStory',
        'flex',
        '<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        '</span>\x20<input\x20id=\x22',
        'IMAGE_VIEWER',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'code',
        '--ig-track-progress:\x20',
        'src',
        'G_RENAME_FORMAT',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        '_INTRO',
        'url',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'REPORT_DISCORD',
        'https://www.instagram.com/reels/',
        'after',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'carousel_media:',
        'node',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'timeupdate',
        'firstStarted',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'pathname',
        'width',
        'SHOW_DOM_TREE',
        'media-id',
        'getStories()',
        'hasReferrer',
        'bottom',
        'img',
        'startsWith',
        'video\x20+\x20div',
        'getSeconds',
        'setAttribute',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'isArray',
        'pageY',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'forEach',
        'DEBUG',
        'main\x20timer\x20re-register\x20completed',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        '*/*',
        'target',
        'Feedback',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'floor',
        'Donate',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        '\x22\x20title=\x22',
        'close',
        'addClass',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'parent',
        'Main\x20Timer',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'user',
        'last',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        '</a></button>',
        'video',
        'replace',
        'a[href^=\x22/p/\x22]\x20time[datetime]',
        '</span></label>',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        'reels',
        '</p>',
        'candidates',
        '2246835xWQkMK',
        'label',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'Logger:\x0a',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'Video',
        'z-index',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'https://i.instagram.com/api/v1/users/',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'version',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'remove',
        'jpg',
        'map',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'fail',
        'li._acaz',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'display_url',
        '\x20child',
        'text',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'parse',
        '\x20-</a>',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '.IG_POPUP_DIG\x20.globalSettings',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'log',
        'video_versions',
        'highlights',
        'keydown',
        'data-modify-thumbnail',
        'time',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'data-ih-locale',
        '#imageViewer',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '<input\x20value=\x22',
        '.IG_DWPROFILE',
        'getBlobMediaWithQuery()',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'getUserId()',
        'data-loop',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'execCommand',
        'which',
        'img[referrerpolicy]',
        'childList',
        'push',
        'warn',
        '17049660Mbhced',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'Cannot\x20find\x20resource\x20url.',
        'filter',
        'highlight',
        'G_CHECK_TIMESTAMP',
        'SCROLL_BUTTON',
        '</a>',
        'top',
        '\x22\x20class=\x22IG_REELS\x22>',
        'css',
        'isHomepage',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'a[href^=\x22/p/\x22]',
        'error',
        'CHECK_UPDATE',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'scontent.cdninstagram.com',
        '4cWzQOM',
        'registerMenuIds',
        'Checking\x20for\x20Script\x20Updates',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        '[data-ih-locale-title]',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'DOWNLOAD_ALL',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'Download\x20All\x20Resources',
        'undefined',
        'updatenotification',
        'toLowerCase',
        'G_VIDEO_VOLUME',
        'GL_referrer',
        'padEnd',
        'content',
        'status',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'undefined\x20username',
        'video_resources',
        '._acnb',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'GL_postPath',
        'addedNodes',
        'copy',
        'srcset',
        'ended',
        'display_resources',
        '.button_wrapper',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'href',
        'textContent',
        'getMediaInfo()',
        'DW_ALL',
        'getTranslationText\x20catch\x20error:',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'getTranslationText()',
        '.IG_NEWTAB_MAIN',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'div\x20>\x20ul\x20li._acaz',
        'grab',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'appendChild',
        'Image',
        'getUserIdWithAgent()',
        'Thumbnail\x20button\x20already\x20inserted',
        'stories',
        'div[id^=\x22mount\x22]',
        '37px',
        'getHighlightStories()',
        'div:not([class]):not([style])',
        'createMediaListDOM',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        'click',
        'host',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'VID',
        'NOPATH',
        'Preference\x20Settings',
        'removeAttr',
        'div.volume_slider',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'val',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '\x22\x20data-globalIndex=\x22',
        'story',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        '0px',
        'fileRenameFormat',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        '%22}',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'GL_repeat',
        'trigger',
        'data-modify',
        'carousel_media',
        'Can\x20not\x20find\x20download\x20url.',
        'assign',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'locale',
        'avatar',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        '/accounts/login',
        'volumechange',
        'catch',
        '._aagv\x20img',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        '2330200trSLRG'
    ];
    a0_0x1036 = function () {
        return _0x523755;
    };
    return a0_0x1036();
}