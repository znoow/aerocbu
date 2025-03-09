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

function a0_0xf561(_0x3425c9, _0x10532f) {
    const _0x483d1e = a0_0x483d();
    return a0_0xf561 = function (_0xf56103, _0x56ef37) {
        _0xf56103 = _0xf56103 - 0x17b;
        let _0x17c183 = _0x483d1e[_0xf56103];
        return _0x17c183;
    }, a0_0xf561(_0x3425c9, _0x10532f);
}
(function (_0x293599, _0x59c85f) {
    const _0x10121b = a0_0xf561, _0x11a905 = _0x293599();
    while (!![]) {
        try {
            const _0xc0bfd8 = parseInt(_0x10121b(0x2b9)) / 0x1 + -parseInt(_0x10121b(0x34e)) / 0x2 * (parseInt(_0x10121b(0x2d0)) / 0x3) + parseInt(_0x10121b(0x285)) / 0x4 + -parseInt(_0x10121b(0x3e1)) / 0x5 * (-parseInt(_0x10121b(0x17d)) / 0x6) + -parseInt(_0x10121b(0x3e9)) / 0x7 + -parseInt(_0x10121b(0x1f7)) / 0x8 * (parseInt(_0x10121b(0x2d4)) / 0x9) + parseInt(_0x10121b(0x388)) / 0xa;
            if (_0xc0bfd8 === _0x59c85f)
                break;
            else
                _0x11a905['push'](_0x11a905['shift']());
        } catch (_0x356ffc) {
            _0x11a905['push'](_0x11a905['shift']());
        }
    }
}(a0_0x483d, 0x1d08f), function (_0x3d51ed) {
    setTimeout(() => {
        'use strict';
        const _0x4000f3 = a0_0xf561;
        const _0x23332f = {
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
            }, _0x3d1b01 = [
                _0x4000f3(0x366),
                _0x4000f3(0x3aa),
                _0x4000f3(0x221)
            ], _0x1de8e0 = {
                'DOWNLOAD': _0x4000f3(0x1b2),
                'NEW_TAB': _0x4000f3(0x3c7),
                'THUMBNAIL': _0x4000f3(0x186),
                'DOWNLOAD_ALL': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
                'CLOSE': _0x4000f3(0x3c8),
                'FULLSCREEN': _0x4000f3(0x235)
            }, _0x48dec5 = 0xfa, _0x59b8bb = GM_getResourceText(_0x4000f3(0x404)), _0x1a0f16 = JSON[_0x4000f3(0x1b7)](GM_getResourceText(_0x4000f3(0x2c7)));
        var _0x5ce567 = {
            'videoVolume': GM_getValue(_0x4000f3(0x20e)) ? GM_getValue(_0x4000f3(0x20e)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue('G_RENAME_FORMAT') ? GM_getValue('G_RENAME_FORMAT') : _0x4000f3(0x317),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x4000f3(0x416)) || navigator[_0x4000f3(0x21a)] || navigator[_0x4000f3(0x3f1)],
            'currentURL': location['href'],
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
                _0x3319a4();
            })
        };
        _0x20095a(), GM_addStyle(_0x59b8bb), _0x236361(), _0x4f0b9b(_0x5ce567[_0x4000f3(0x416)])[_0x4000f3(0x1d0)](_0x4f3d17 => {
            const _0x2a98d1 = _0x4000f3;
            _0x5ce567['locale'][_0x5ce567[_0x2a98d1(0x416)]] = _0x4f3d17, _0x495abd(), _0x236361(), _0x1ad8eb(0x12c);
        })[_0x4000f3(0x39a)](_0x1590ac => {
            const _0x3c7d75 = _0x4000f3;
            _0x236361(), _0x1ad8eb(0x12c), !_0x5ce567[_0x3c7d75(0x416)]['startsWith']('en') && console[_0x3c7d75(0x229)](_0x3c7d75(0x1da), _0x1590ac);
        }), _0x596d98(_0x4000f3(0x2de), GM_info[_0x4000f3(0x381)]['name'], _0x4000f3(0x19a), GM_info[_0x4000f3(0x381)][_0x4000f3(0x3f7)]);
        var _0x15350b = setInterval(function () {
            const _0x5cd870 = _0x4000f3;
            if (_0x3d51ed(_0x5cd870(0x1d9))[_0x5cd870(0x2a3)] > 0x0 && !_0x3d51ed('div#splash-screen')['is'](_0x5cd870(0x3d3)) || location[_0x5cd870(0x3e8)][_0x5cd870(0x37c)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x5cd870(0x3a2)][_0x5cd870(0x1f9)](_0x5cd870(0x2b3))) {
                _0x5ce567[_0x5cd870(0x30b)] = ![];
                return;
            }
            if (_0x5ce567[_0x5cd870(0x304)] != location[_0x5cd870(0x29c)] || !_0x5ce567['firstStarted'] || !_0x5ce567[_0x5cd870(0x30b)]) {
                console[_0x5cd870(0x1f3)](_0x5cd870(0x2ac), _0x5cd870(0x28e)), clearInterval(_0x5ce567[_0x5cd870(0x3a4)]), _0x5ce567[_0x5cd870(0x30b)] = ![], _0x5ce567[_0x5cd870(0x1af)] = !![], _0x5ce567[_0x5cd870(0x304)] = location[_0x5cd870(0x29c)], _0x5ce567[_0x5cd870(0x2fe)][_0x5cd870(0x1e0)]();
                if (location['href'][_0x5cd870(0x1f9)](_0x5cd870(0x2db)) || location[_0x5cd870(0x3e8)][_0x5cd870(0x37c)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x5cd870(0x29c)][_0x5cd870(0x1f9)](_0x5cd870(0x270))) {
                    _0x5ce567[_0x5cd870(0x18d)][_0x5cd870(0x31a)] = {}, _0x5ce567[_0x5cd870(0x18d)][_0x5cd870(0x2fd)] = {}, _0x596d98(_0x5cd870(0x1c7));
                    var _0x201392 = setInterval(() => {
                        _0x3d51ed('body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['length'] > 0x0 && (clearInterval(_0x201392), setTimeout(() => {
                            _0x3319a4(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x5ce567[_0x5cd870(0x30b)] = !![];
                }
                location[_0x5cd870(0x29c)][_0x5cd870(0x1f9)]('https://www.instagram.com/reels/') && (_0x596d98(_0x5cd870(0x211)), setTimeout(() => {
                    _0x1fbe29(![]);
                }, 0x96), _0x5ce567[_0x5cd870(0x30b)] = !![]);
                if (location[_0x5cd870(0x29c)][_0x5cd870(0x1aa)]('?')[0x0] == _0x5cd870(0x350)) {
                    _0x5ce567[_0x5cd870(0x18d)]['stories'] = {}, _0x5ce567[_0x5cd870(0x18d)]['highlights'] = {};
                    let _0x3d6b28 = _0x5ce567[_0x5cd870(0x21d)]?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x596d98(_0x5cd870(0x32c), _0x3d6b28), setTimeout(() => {
                        const _0x32b02a = _0x5cd870;
                        _0x3319a4(![], _0x3d6b28);
                        const _0x5703f4 = _0x3d51ed('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.[_0x32b02a(0x371)]()[0x0];
                        _0x5703f4 && _0x5ce567[_0x32b02a(0x2fe)][_0x32b02a(0x40d)](_0x5703f4, { 'childList': !![] });
                    }, 0x96), _0x5ce567['pageLoaded'] = !![];
                }
                _0x3d51ed(_0x5cd870(0x2ee))['length'] && location[_0x5cd870(0x3e8)][_0x5cd870(0x37c)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x5cd870(0x3e8)][_0x5cd870(0x37c)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x596d98('isProfile'), setTimeout(() => {
                    _0x1a5a71(![]);
                }, 0x96), _0x5ce567[_0x5cd870(0x30b)] = !![]);
                if (!_0x5ce567[_0x5cd870(0x30b)]) {
                    if (location[_0x5cd870(0x29c)][_0x5cd870(0x37c)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x5ce567[_0x5cd870(0x18d)]['highlights'] = {}, _0x596d98(_0x5cd870(0x3e0)), _0x16e0a6(![]), _0x5ce567[_0x5cd870(0x3a4)] = setInterval(() => {
                            _0x4a4671(![]);
                        }, _0x48dec5), _0x3d51ed('.IG_DWHISTORY')[_0x5cd870(0x2a3)] && setTimeout(() => {
                            const _0x1065a8 = _0x5cd870;
                            if (_0x23332f[_0x1065a8(0x3d5)]) {
                                var _0x3bd0d7 = _0x3d51ed(_0x1065a8(0x293))[_0x1065a8(0x34f)](function () {
                                    const _0xd5f97b = _0x1065a8;
                                    return _0x3d51ed(this)['children']()[_0xd5f97b(0x2a3)] === 0x0 && this[_0xd5f97b(0x314)][_0xd5f97b(0x2c9)]() !== '';
                                });
                                _0x3bd0d7?.[_0x1065a8(0x214)](_0x1065a8(0x335));
                            }
                            _0x5ce567[_0x1065a8(0x30b)] = !![];
                        }, 0x96);
                    else
                        location['href'][_0x5cd870(0x37c)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x596d98(_0x5cd870(0x225)), _0x3d51ed(_0x5cd870(0x195))[_0x5cd870(0x2a3)] > 0x0 && (_0x3d51ed(_0x5cd870(0x1b6))[_0x5cd870(0x203)](), _0x3d51ed(_0x5cd870(0x192))['remove'](), _0x3d51ed(_0x5cd870(0x23e))[_0x5cd870(0x2a3)] && _0x3d51ed('.IG_DWSTORY_THUMBNAIL')[_0x5cd870(0x203)](), _0x3bc215(![]), setTimeout(() => {
                            _0x3bc215(![]);
                        }, 0x96)), _0x3d51ed(_0x5cd870(0x1b6))[_0x5cd870(0x2a3)] && setTimeout(() => {
                            const _0x271335 = _0x5cd870;
                            if (_0x23332f[_0x271335(0x3d5)]) {
                                var _0x3281b5 = _0x3d51ed(_0x271335(0x293))[_0x271335(0x34f)](function () {
                                    const _0x39cb4a = _0x271335;
                                    return _0x3d51ed(this)[_0x39cb4a(0x334)]()[_0x39cb4a(0x2a3)] === 0x0 && this[_0x39cb4a(0x314)]['trim']() !== '';
                                });
                                _0x3281b5?.['click']();
                            }
                            _0x5ce567['pageLoaded'] = !![];
                        }, 0x96)) : (_0x5ce567[_0x5cd870(0x30b)] = ![], _0x3d51ed(_0x5cd870(0x1b6))['length'] && _0x3d51ed('.IG_DWSTORY')[_0x5cd870(0x203)](), _0x3d51ed('.IG_DWSTORY_ALL')[_0x5cd870(0x2a3)] && _0x3d51ed(_0x5cd870(0x1c6))['remove'](), _0x3d51ed(_0x5cd870(0x192))[_0x5cd870(0x2a3)] && _0x3d51ed(_0x5cd870(0x192))[_0x5cd870(0x203)](), _0x3d51ed(_0x5cd870(0x23e))['length'] && _0x3d51ed('.IG_DWSTORY_THUMBNAIL')[_0x5cd870(0x203)](), _0x3d51ed('.IG_DWHISTORY')[_0x5cd870(0x2a3)] && _0x3d51ed(_0x5cd870(0x182))[_0x5cd870(0x203)](), _0x3d51ed(_0x5cd870(0x2ad))[_0x5cd870(0x2a3)] && _0x3d51ed(_0x5cd870(0x2ad))['remove'](), _0x3d51ed(_0x5cd870(0x1f1))[_0x5cd870(0x2a3)] && _0x3d51ed(_0x5cd870(0x1f1))['remove'](), _0x3d51ed(_0x5cd870(0x24c))['length'] && _0x3d51ed('.IG_DWHISTORY_THUMBNAIL')[_0x5cd870(0x203)]());
                }
                _0x1ad8eb(0x12c), _0x5ce567['GL_referrer'] = new URL(location['href'])[_0x5cd870(0x3e8)];
            }
        }, _0x48dec5);
        async function _0x4eec44() {
            const _0x4dacdb = _0x4000f3;
            _0xa1a81a(!![]);
            let _0x3833fc = new Date()[_0x4dacdb(0x231)](), _0x16b509 = Math[_0x4dacdb(0x360)](_0x3833fc / 0x3e8), _0x1019ea = location[_0x4dacdb(0x29c)][_0x4dacdb(0x198)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x4f6c8e = await _0x5f3158(_0x1019ea), _0xcc1849 = _0x4f6c8e[_0x4dacdb(0x1bb)]['reels_media'][0x0][_0x4dacdb(0x2c4)]['username'], _0x30b87d = 0x0;
            _0x43e82c(_0x30b87d, _0x4f6c8e[_0x4dacdb(0x1bb)]['reels_media'][0x0]['items'][_0x4dacdb(0x2a3)]), _0x4f6c8e['data'][_0x4dacdb(0x286)][0x0][_0x4dacdb(0x37d)][_0x4dacdb(0x3a9)]((_0x26eff1, _0x1a82c3) => {
                setTimeout(() => {
                    const _0x11923a = a0_0xf561;
                    _0x23332f[_0x11923a(0x366)] && (_0x16b509 = _0x26eff1[_0x11923a(0x3f6)]), _0x26eff1['display_resources'][_0x11923a(0x28f)](function (_0x137577, _0x1f4f5e) {
                        const _0x27e96e = _0x11923a;
                        if (_0x137577['config_width'] < _0x1f4f5e[_0x27e96e(0x188)])
                            return 0x1;
                        if (_0x137577[_0x27e96e(0x188)] > _0x1f4f5e['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x26eff1[_0x11923a(0x22a)] ? _0x33c60c(_0x26eff1[_0x11923a(0x22b)][0x0]['src'], _0xcc1849, _0x11923a(0x31a), _0x16b509, _0x11923a(0x36b), _0x26eff1['id'])['then'](() => {
                        const _0x25ac36 = _0x11923a;
                        _0x43e82c(++_0x30b87d, _0x4f6c8e['data']['reels_media'][0x0][_0x25ac36(0x37d)]['length']);
                    }) : _0x33c60c(_0x26eff1[_0x11923a(0x35d)][0x0][_0x11923a(0x185)], _0xcc1849, _0x11923a(0x31a), _0x16b509, _0x11923a(0x183), _0x26eff1['id'])[_0x11923a(0x1d0)](() => {
                        const _0x4944f4 = _0x11923a;
                        _0x43e82c(++_0x30b87d, _0x4f6c8e['data'][_0x4944f4(0x286)][0x0]['items'][_0x4944f4(0x2a3)]);
                    });
                }, 0x64 * _0x1a82c3);
            });
        }
        async function _0x16e0a6(_0x405777, _0x1875cc) {
            const _0x16fe4f = _0x4000f3;
            var _0x334a39 = _0x3d51ed(_0x16fe4f(0x201))[_0x16fe4f(0x34f)](function () {
                const _0x5048c8 = _0x16fe4f;
                return _0x3d51ed(this)[_0x5048c8(0x34d)](_0x5048c8(0x29c))[_0x5048c8(0x1aa)]('/')['filter'](_0x4c0710 => _0x4c0710[_0x5048c8(0x2a3)] > 0x0)[_0x5048c8(0x2a3)] === 0x1;
            })[_0x16fe4f(0x2e6)]()['attr']('href')[_0x16fe4f(0x1aa)]('/')[_0x16fe4f(0x34f)](_0x12b8c6 => _0x12b8c6[_0x16fe4f(0x2a3)] > 0x0)['at'](0x0);
            if (_0x405777) {
                let _0x539c3d = new Date()[_0x16fe4f(0x231)](), _0x20dd31 = Math[_0x16fe4f(0x360)](_0x539c3d / 0x3e8), _0x22d8bf = location[_0x16fe4f(0x29c)][_0x16fe4f(0x198)](/\/$/ig, '')[_0x16fe4f(0x1aa)]('/')['at'](-0x1), _0x19b0b2 = _0x3d51ed(_0x16fe4f(0x1b0))[_0x16fe4f(0x2a3)] || _0x3d51ed('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x16fe4f(0x2a3)] || _0x3d51ed(_0x16fe4f(0x325))[_0x16fe4f(0x3eb)](_0x16fe4f(0x34a))[_0x16fe4f(0x2a3)], _0x145855 = 0x0;
                _0xa1a81a(!![]);
                if (_0x5ce567[_0x16fe4f(0x18d)][_0x16fe4f(0x2fd)][_0x22d8bf]) {
                    _0x596d98(_0x16fe4f(0x2cc), _0x22d8bf);
                    let _0x1ca5e8 = _0x5ce567[_0x16fe4f(0x18d)]['highlights'][_0x22d8bf][_0x16fe4f(0x1bb)][_0x16fe4f(0x286)][0x0][_0x16fe4f(0x37d)][_0x16fe4f(0x2a3)];
                    _0x334a39 = _0x5ce567[_0x16fe4f(0x18d)][_0x16fe4f(0x2fd)][_0x22d8bf]['data'][_0x16fe4f(0x286)][0x0][_0x16fe4f(0x2c4)][_0x16fe4f(0x20b)], _0x145855 = _0x5ce567[_0x16fe4f(0x18d)][_0x16fe4f(0x2fd)][_0x22d8bf]['data']['reels_media'][0x0][_0x16fe4f(0x37d)][_0x1ca5e8 - _0x19b0b2];
                } else {
                    let _0x20c03d = await _0x5f3158(_0x22d8bf), _0x17bf34 = _0x20c03d[_0x16fe4f(0x1bb)][_0x16fe4f(0x286)][0x0]['items'][_0x16fe4f(0x2a3)];
                    _0x334a39 = _0x20c03d[_0x16fe4f(0x1bb)]['reels_media'][0x0][_0x16fe4f(0x2c4)][_0x16fe4f(0x20b)], _0x145855 = _0x20c03d[_0x16fe4f(0x1bb)]['reels_media'][0x0][_0x16fe4f(0x37d)][_0x17bf34 - _0x19b0b2], _0x5ce567[_0x16fe4f(0x18d)][_0x16fe4f(0x2fd)][_0x22d8bf] = _0x20c03d;
                }
                _0x596d98(_0x16fe4f(0x23d), _0x22d8bf, _0x5ce567[_0x16fe4f(0x18d)]['highlights'][_0x22d8bf]);
                _0x23332f[_0x16fe4f(0x366)] && (_0x20dd31 = _0x145855['taken_at_timestamp']);
                if (_0x23332f[_0x16fe4f(0x269)] && !_0x5ce567[_0x16fe4f(0x321)]) {
                    let _0x5c8dfe = await _0x3a25d4(_0x145855['id']);
                    _0x5c8dfe[_0x16fe4f(0x261)] === 'ok' ? _0x5c8dfe[_0x16fe4f(0x37d)][0x0][_0x16fe4f(0x407)] ? _0x1875cc ? _0x238a4a(_0x5c8dfe[_0x16fe4f(0x37d)][0x0]['video_versions'][0x0][_0x16fe4f(0x1b1)]) : _0x33c60c(_0x5c8dfe[_0x16fe4f(0x37d)][0x0][_0x16fe4f(0x407)][0x0][_0x16fe4f(0x1b1)], _0x334a39, _0x16fe4f(0x2fd), _0x20dd31, _0x16fe4f(0x36b), _0x5c8dfe[_0x16fe4f(0x37d)][0x0]['id']) : _0x1875cc ? _0x238a4a(_0x5c8dfe['items'][0x0][_0x16fe4f(0x348)]['candidates'][0x0]['url']) : _0x33c60c(_0x5c8dfe[_0x16fe4f(0x37d)][0x0][_0x16fe4f(0x348)][_0x16fe4f(0x20c)][0x0]['url'], _0x334a39, _0x16fe4f(0x2fd), _0x20dd31, _0x16fe4f(0x183), _0x5c8dfe[_0x16fe4f(0x37d)][0x0]['id']) : (_0x23332f[_0x16fe4f(0x3aa)] ? (delete _0x5ce567[_0x16fe4f(0x18d)]['highlights'][_0x22d8bf], _0x5ce567[_0x16fe4f(0x321)] = !![], _0x16e0a6(!![], _0x1875cc)) : alert(_0x16fe4f(0x40a) + _0x5c8dfe[_0x16fe4f(0x376)]), _0x596d98(_0x5c8dfe));
                } else
                    _0x145855[_0x16fe4f(0x22a)] ? _0x1875cc ? _0x238a4a(_0x145855['video_resources']['at'](-0x1)[_0x16fe4f(0x185)], _0x334a39) : _0x33c60c(_0x145855[_0x16fe4f(0x22b)]['at'](-0x1)['src'], _0x334a39, _0x16fe4f(0x2fd), _0x20dd31, _0x16fe4f(0x36b), _0x145855['id']) : _0x1875cc ? _0x238a4a(_0x145855[_0x16fe4f(0x35d)]['at'](-0x1)[_0x16fe4f(0x185)], _0x334a39) : _0x33c60c(_0x145855[_0x16fe4f(0x35d)]['at'](-0x1)['src'], _0x334a39, _0x16fe4f(0x2fd), _0x20dd31, _0x16fe4f(0x183), _0x145855['id']), _0x5ce567[_0x16fe4f(0x321)] = ![];
                _0xa1a81a(![]);
            } else {
                if (!_0x3d51ed(_0x16fe4f(0x182))[_0x16fe4f(0x2a3)]) {
                    let _0x8e5ea3 = null;
                    _0x3d51ed(_0x16fe4f(0x39e))[_0x16fe4f(0x2a3)] > 0x0 ? _0x8e5ea3 = _0x3d51ed(_0x16fe4f(0x3e7)) : (_0x8e5ea3 = _0x3d51ed(_0x16fe4f(0x408)), _0x8e5ea3[_0x16fe4f(0x3b6)](_0x16fe4f(0x2e3), _0x16fe4f(0x219)));
                    if (_0x8e5ea3[_0x16fe4f(0x2a3)] === 0x0) {
                        let _0x29fa4c = _0x3d51ed(_0x16fe4f(0x3e3)), _0x38f6e1 = 0x0;
                        _0x29fa4c[_0x16fe4f(0x1c5)](function () {
                            const _0x17f7f9 = _0x16fe4f;
                            _0x3d51ed(this)[_0x17f7f9(0x395)]() > _0x38f6e1 && (_0x38f6e1 = _0x3d51ed(this)[_0x17f7f9(0x395)](), _0x8e5ea3 = _0x3d51ed(this)[_0x17f7f9(0x334)](_0x17f7f9(0x292))[_0x17f7f9(0x2e6)]());
                        });
                    }
                    if (_0x8e5ea3 != null) {
                        _0x8e5ea3[_0x16fe4f(0x1d8)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x8c26c7('DW') + _0x16fe4f(0x412) + _0x1de8e0['DOWNLOAD'] + _0x16fe4f(0x26f)), _0x8e5ea3[_0x16fe4f(0x1d8)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x8c26c7('NEW_TAB') + _0x16fe4f(0x21b) + _0x1de8e0[_0x16fe4f(0x2f8)] + _0x16fe4f(0x26f));
                        let _0x3eeaea = _0x18e71c(_0x334a39);
                        _0x3eeaea[_0x16fe4f(0x2a3)] > 0x1 && _0x8e5ea3[_0x16fe4f(0x1d8)]('<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x8c26c7(_0x16fe4f(0x2eb)) + _0x16fe4f(0x3a0) + _0x1de8e0[_0x16fe4f(0x308)] + _0x16fe4f(0x26f)), _0x8e5ea3[_0x16fe4f(0x3eb)]('img[referrerpolicy]')['each'](function () {
                            const _0x5f5a38 = _0x16fe4f;
                            _0x3d51ed(this)['on'](_0x5f5a38(0x24b), function () {
                                const _0x1f79e1 = _0x5f5a38;
                                !_0x3d51ed(this)[_0x1f79e1(0x1bb)](_0x1f79e1(0x2af)) && (_0x8e5ea3[_0x1f79e1(0x3eb)](_0x1f79e1(0x24c))[_0x1f79e1(0x2a3)] === 0x0 ? (_0x3d51ed(this)[_0x1f79e1(0x34d)](_0x1f79e1(0x389), !![]), _0x3d51ed(_0x1f79e1(0x24c))['remove'](), _0x596d98(_0x1f79e1(0x365))) : (_0x3d51ed(this)[_0x1f79e1(0x34d)](_0x1f79e1(0x389), !![]), _0x596d98(_0x1f79e1(0x1ef))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x4a4671(_0x241da3) {
            const _0x5bcf9f = _0x4000f3;
            if (_0x241da3) {
                let _0x566b26 = new Date()[_0x5bcf9f(0x231)](), _0x58e6d1 = Math[_0x5bcf9f(0x360)](_0x566b26 / 0x3e8), _0x3af893 = location[_0x5bcf9f(0x29c)][_0x5bcf9f(0x198)](/\/$/ig, '')[_0x5bcf9f(0x1aa)]('/')['at'](-0x1), _0x4e4efa = '', _0x1b0cce = _0x3d51ed(_0x5bcf9f(0x1b0))['length'] || _0x3d51ed(_0x5bcf9f(0x249))[_0x5bcf9f(0x2a3)] || _0x3d51ed(_0x5bcf9f(0x325))[_0x5bcf9f(0x3eb)](_0x5bcf9f(0x34a))[_0x5bcf9f(0x2a3)], _0x5dfe21 = '';
                _0xa1a81a(!![]);
                if (_0x5ce567['GL_dataCache']['highlights'][_0x3af893]) {
                    _0x596d98('Fetch\x20from\x20memory\x20cache:', _0x3af893);
                    let _0x7ede5f = _0x5ce567[_0x5bcf9f(0x18d)][_0x5bcf9f(0x2fd)][_0x3af893][_0x5bcf9f(0x1bb)][_0x5bcf9f(0x286)][0x0][_0x5bcf9f(0x37d)][_0x5bcf9f(0x2a3)];
                    _0x4e4efa = _0x5ce567['GL_dataCache'][_0x5bcf9f(0x2fd)][_0x3af893][_0x5bcf9f(0x1bb)][_0x5bcf9f(0x286)][0x0][_0x5bcf9f(0x2c4)]['username'], _0x5dfe21 = _0x5ce567['GL_dataCache'][_0x5bcf9f(0x2fd)][_0x3af893][_0x5bcf9f(0x1bb)][_0x5bcf9f(0x286)][0x0][_0x5bcf9f(0x37d)][_0x7ede5f - _0x1b0cce];
                } else {
                    let _0x549f9d = await _0x5f3158(_0x3af893), _0x3f0802 = _0x549f9d[_0x5bcf9f(0x1bb)][_0x5bcf9f(0x286)][0x0][_0x5bcf9f(0x37d)][_0x5bcf9f(0x2a3)];
                    _0x4e4efa = _0x549f9d['data'][_0x5bcf9f(0x286)][0x0][_0x5bcf9f(0x2c4)][_0x5bcf9f(0x20b)], _0x5dfe21 = _0x549f9d[_0x5bcf9f(0x1bb)][_0x5bcf9f(0x286)][0x0][_0x5bcf9f(0x37d)][_0x3f0802 - _0x1b0cce], _0x5ce567['GL_dataCache'][_0x5bcf9f(0x2fd)][_0x3af893] = _0x549f9d;
                }
                _0x23332f[_0x5bcf9f(0x366)] && (_0x58e6d1 = _0x5dfe21[_0x5bcf9f(0x3f6)]);
                if (_0x23332f['FORCE_RESOURCE_VIA_MEDIA'] && !_0x5ce567[_0x5bcf9f(0x321)]) {
                    let _0x1fe502 = await _0x3a25d4(_0x5dfe21['id']);
                    _0x1fe502[_0x5bcf9f(0x261)] === 'ok' ? _0x33c60c(_0x1fe502[_0x5bcf9f(0x37d)][0x0]['image_versions2'][_0x5bcf9f(0x20c)][0x0][_0x5bcf9f(0x1b1)], _0x4e4efa, 'highlights', _0x58e6d1, 'jpg', _0x3af893) : (_0x23332f[_0x5bcf9f(0x3aa)] ? (delete _0x5ce567[_0x5bcf9f(0x18d)][_0x5bcf9f(0x2fd)][_0x3af893], _0x5ce567[_0x5bcf9f(0x321)] = !![], _0x4a4671(!![])) : alert(_0x5bcf9f(0x40a) + _0x1fe502[_0x5bcf9f(0x376)]), _0x596d98(_0x1fe502));
                } else
                    _0x33c60c(_0x5dfe21[_0x5bcf9f(0x35d)]['at'](-0x1)['src'], _0x4e4efa, _0x5bcf9f(0x2fd), _0x58e6d1, 'jpg', _0x3af893), _0x5ce567[_0x5bcf9f(0x321)] = ![];
                _0xa1a81a(![]);
            } else {
                if (_0x3d51ed('body\x20>\x20div\x20section\x20video.xh8yej3')[_0x5bcf9f(0x2a3)]) {
                    if (!_0x3d51ed(_0x5bcf9f(0x24c))['length']) {
                        let _0x3b277e = null;
                        _0x3d51ed(_0x5bcf9f(0x39e))[_0x5bcf9f(0x2a3)] > 0x0 ? _0x3b277e = _0x3d51ed(_0x5bcf9f(0x3e7)) : (_0x3b277e = _0x3d51ed(_0x5bcf9f(0x408)), _0x3b277e[_0x5bcf9f(0x3b6)](_0x5bcf9f(0x2e3), 'relative'));
                        if (_0x3b277e[_0x5bcf9f(0x2a3)] === 0x0) {
                            let _0x290a56 = _0x3d51ed(_0x5bcf9f(0x3e3)), _0x247584 = 0x0;
                            _0x290a56[_0x5bcf9f(0x1c5)](function () {
                                const _0x35c38b = _0x5bcf9f;
                                _0x3d51ed(this)[_0x35c38b(0x395)]() > _0x247584 && (_0x247584 = _0x3d51ed(this)[_0x35c38b(0x395)](), _0x3b277e = _0x3d51ed(this)[_0x35c38b(0x334)]('div')[_0x35c38b(0x2e6)]());
                            });
                        }
                        _0x3b277e != null && _0x3b277e[_0x5bcf9f(0x1d8)](_0x5bcf9f(0x290) + _0x8c26c7('THUMBNAIL_INTRO') + _0x5bcf9f(0x27b) + _0x1de8e0['THUMBNAIL'] + _0x5bcf9f(0x26f));
                    }
                } else
                    _0x3d51ed('.IG_DWHISTORY_THUMBNAIL')['remove']();
            }
        }
        function _0x3319a4(_0x18698d, _0x4490fe) {
            const _0x370c7c = _0x4000f3;
            _0x4490fe === !![] && (_0x596d98(_0x370c7c(0x418), _0x370c7c(0x212)), _0x3d51ed(_0x370c7c(0x1d1))[_0x370c7c(0x34f)](function () {
                const _0x17a077 = _0x370c7c;
                return _0x3d51ed(this)[_0x17a077(0x3eb)]('.IG_DW_MAIN')[_0x17a077(0x2a3)] === 0x0;
            })[_0x370c7c(0x25d)](_0x370c7c(0x383)));
            if (_0x18698d == ![]) {
                const _0x136986 = 0x64;
                let _0x41f1ba = 0x0;
                var _0x36112d = setInterval(() => {
                    const _0x18b80d = _0x370c7c;
                    (_0x41f1ba > _0x136986 || _0x3d51ed(_0x18b80d(0x356))['length'] > 0x0) && (clearInterval(_0x36112d), _0x41f1ba > _0x136986 && console[_0x18b80d(0x1ed)](_0x18b80d(0x3ad), _0x18b80d(0x3d1))), _0x596d98(_0x18b80d(0x3ad), _0x18b80d(0x1a4)), _0x22f1b2(), _0x41f1ba++;
                }, 0x32);
            } else
                _0x22f1b2();
        }
        function _0x290e7f(_0x50be8e) {
            const _0x16c3af = _0x4000f3;
            _0x23332f[_0x16c3af(0x25a)] && _0x50be8e[_0x16c3af(0x3eb)]('video')['each'](function () {
                _0x3d51ed(this)['on']('ended', function () {
                    const _0x3862aa = a0_0xf561;
                    !_0x3d51ed(this)[_0x3862aa(0x1bb)](_0x3862aa(0x2bc)) && (_0x3d51ed(this)[_0x3862aa(0x34d)](_0x3862aa(0x399), !![]), this[_0x3862aa(0x1ac)](), _0x596d98('(post)\x20Added\x20video\x20event\x20listener\x20#loop'));
                });
            });
            _0x23332f[_0x16c3af(0x215)] && _0x50be8e['find'](_0x16c3af(0x415))[_0x16c3af(0x1c5)](function () {
                const _0x1c2941 = _0x16c3af;
                _0x3d51ed(this)['on'](_0x1c2941(0x33b), function () {
                    const _0x37adc8 = _0x1c2941;
                    !_0x3d51ed(this)[_0x37adc8(0x1bb)](_0x37adc8(0x18b)) && (_0x3d51ed(this)['attr']('data-modify', !![]), this[_0x37adc8(0x3a6)] = _0x5ce567[_0x37adc8(0x205)], _0x596d98(_0x37adc8(0x232)));
                });
            });
            _0x23332f['HTML5_VIDEO_CONTROL'] && _0x50be8e['find'](_0x16c3af(0x415))[_0x16c3af(0x1c5)](function () {
                const _0x1bebcd = _0x16c3af;
                if (!_0x3d51ed(this)[_0x1bebcd(0x1bb)](_0x1bebcd(0x3a3))) {
                    let _0x4a418f = _0x3d51ed(this);
                    _0x596d98('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x23332f[_0x1bebcd(0x215)] && (this[_0x1bebcd(0x3a6)] = _0x5ce567[_0x1bebcd(0x205)], _0x3d51ed(this)['on'](_0x1bebcd(0x38d), function () {
                        const _0x4f6352 = _0x1bebcd;
                        this[_0x4f6352(0x3a6)] = _0x5ce567[_0x4f6352(0x205)];
                    })), _0x3d51ed(this)['on']('contextmenu', function (_0x3fd50e) {
                        const _0x1d7512 = _0x1bebcd;
                        _0x3fd50e[_0x1d7512(0x210)](), _0x4a418f[_0x1d7512(0x3b6)]('z-index', '-1'), _0x4a418f[_0x1d7512(0x25d)](_0x1d7512(0x3a3));
                    }), _0x3d51ed(this)[_0x1bebcd(0x371)]()[_0x1bebcd(0x3eb)](_0x1bebcd(0x1de))[_0x1bebcd(0x2e6)]()['on'](_0x1bebcd(0x333), function (_0xaf41e2) {
                        const _0x111687 = _0x1bebcd;
                        _0xaf41e2['preventDefault'](), _0x4a418f[_0x111687(0x3b6)](_0x111687(0x1db), '2'), _0x4a418f[_0x111687(0x34d)]('controls', !![]);
                    }), _0x3d51ed(this)['on'](_0x1bebcd(0x372), function () {
                        const _0x5c3b69 = _0x1bebcd;
                        let _0x501b37 = _0x3d51ed(this)[_0x5c3b69(0x371)]()[_0x5c3b69(0x3eb)]('video\x20+\x20div\x20>\x20div')[_0x5c3b69(0x3eb)](_0x5c3b69(0x2fb))[_0x5c3b69(0x34f)](function (_0x3125af) {
                            const _0x2e6829 = _0x5c3b69;
                            return _0x3d51ed(this)[_0x2e6829(0x395)]() <= 0x40 && _0x3d51ed(this)[_0x2e6829(0x41a)]() <= 0x40 && _0x3d51ed(this)[_0x2e6829(0x3eb)](_0x2e6829(0x264))[_0x2e6829(0x2a3)] > 0x0;
                        });
                        var _0x2f2def = _0x501b37[_0x5c3b69(0x3eb)](_0x5c3b69(0x2b5))[_0x5c3b69(0x2a3)] === 0x0;
                        this[_0x5c3b69(0x324)] != _0x2f2def && (this[_0x5c3b69(0x3a6)] = _0x5ce567[_0x5c3b69(0x205)], _0x501b37?.['trigger']('click')), _0x3d51ed(this)['attr']('data-completed') && (_0x5ce567[_0x5c3b69(0x205)] = this[_0x5c3b69(0x3a6)], GM_setValue('G_VIDEO_VOLUME', this['volume'])), this[_0x5c3b69(0x3a6)] == _0x5ce567['videoVolume'] && _0x3d51ed(this)[_0x5c3b69(0x34d)](_0x5c3b69(0x379), !![]);
                    }), _0x3d51ed(this)[_0x1bebcd(0x3b6)](_0x1bebcd(0x2e3), _0x1bebcd(0x3a8)), _0x3d51ed(this)[_0x1bebcd(0x3b6)](_0x1bebcd(0x1db), '2'), _0x3d51ed(this)[_0x1bebcd(0x34d)](_0x1bebcd(0x3ba), !![]), _0x3d51ed(this)[_0x1bebcd(0x34d)](_0x1bebcd(0x3a3), !![]);
                }
            });
            var _0x409b18 = _0x50be8e[_0x16c3af(0x3eb)](_0x16c3af(0x415)), _0x1138d9 = _0x50be8e[_0x16c3af(0x3eb)](_0x16c3af(0x1de))[_0x16c3af(0x2e6)]();
            _0x55d0d8(_0x409b18, _0x1138d9, _0x16c3af(0x199), _0x16c3af(0x1df));
        }
        ;
        function _0x22f1b2() {
            const _0x18c107 = _0x4000f3;
            _0x3d51ed(_0x18c107(0x22c))[_0x18c107(0x282)](function (_0x93ed57) {
                const _0x54a3c2 = _0x18c107;
                return _0x3d51ed(this)['is'](_0x54a3c2(0x1cf)) ? _0x3d51ed(this)[_0x54a3c2(0x371)]()[_0x54a3c2(0x371)]()[_0x54a3c2(0x371)]()[_0x54a3c2(0x371)]()[0x0] : this;
            })[_0x18c107(0x34f)](function () {
                const _0x783c0b = _0x18c107;
                return _0x3d51ed(this)['height']() > 0x0 && _0x3d51ed(this)[_0x783c0b(0x395)]() > 0x0;
            })['each'](function (_0x55e520) {
                const _0x3187f1 = _0x18c107;
                if (!_0x3d51ed(this)[_0x3187f1(0x34d)](_0x3187f1(0x383)) && !_0x3d51ed(this)['hasClass'](_0x3187f1(0x31f)) && !_0x3d51ed(this)[_0x3187f1(0x334)](_0x3187f1(0x310))?.['hasClass'](_0x3187f1(0x31f)) && _0x3d51ed(this)[_0x3187f1(0x38e)](_0x3187f1(0x394))[_0x3187f1(0x2a3)] === 0x0) {
                    _0x596d98('Found\x20post\x20container', _0x3d51ed(this));
                    const _0x335c69 = _0x3d51ed(this), _0x4aeb84 = this[_0x3187f1(0x27c)], _0x219e69 = _0x3187f1(0x362);
                    var _0x3ef5de;
                    if (_0x4aeb84 === _0x3187f1(0x3b5) && _0x55e520 != 0x0)
                        return;
                    const _0x456165 = _0x335c69[_0x3187f1(0x334)](_0x3187f1(0x292))[_0x3187f1(0x334)]('div');
                    if (_0x456165[_0x3187f1(0x2a3)] === 0x0)
                        return;
                    _0x596d98(_0x3187f1(0x403), _0x456165);
                    if (_0x335c69[_0x3187f1(0x3eb)]('._acay')[_0x3187f1(0x2a3)] > 0x0) {
                        _0x335c69[_0x3187f1(0x3eb)]('._acay\x20+\x20.x24i39r')[_0x3187f1(0x2a3)] > 0x0 && _0x335c69[_0x3187f1(0x3eb)](_0x3187f1(0x18c))[_0x3187f1(0x3b6)]('top', _0x3187f1(0x3e4));
                        const _0x1f51ea = _0x335c69[_0x3187f1(0x3eb)](_0x3187f1(0x262))[_0x3187f1(0x2e6)]()[_0x3187f1(0x371)]()[0x0];
                        var _0x4153b9 = new MutationObserver(function () {
                            const _0x32b2eb = _0x3187f1;
                            _0x335c69[_0x32b2eb(0x3eb)]('._acay\x20+\x20.x24i39r')[_0x32b2eb(0x3b6)](_0x32b2eb(0x3d6), '37px');
                        });
                        _0x4153b9[_0x3187f1(0x40d)](_0x1f51ea, { 'childList': !![] });
                    }
                    _0x456165['eq'](_0x4aeb84 === _0x3187f1(0x3b5) ? 0x0 : _0x456165[_0x3187f1(0x2a3)] - 0x2)['append'](_0x3187f1(0x36d));
                    const _0x41b16a = '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x8c26c7('DW') + _0x3187f1(0x289) + _0x1de8e0[_0x3187f1(0x385)] + _0x3187f1(0x26f), _0x113880 = _0x3187f1(0x38f) + _0x8c26c7('NEW_TAB') + _0x3187f1(0x302) + _0x1de8e0[_0x3187f1(0x2f8)] + _0x3187f1(0x26f), _0x118d1c = _0x3187f1(0x290) + _0x8c26c7(_0x3187f1(0x1d3)) + '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>' + _0x1de8e0['THUMBNAIL'] + _0x3187f1(0x26f), _0x5343c4 = _0x3187f1(0x247) + _0x8c26c7('IMAGE_VIEWER') + _0x3187f1(0x2bb) + _0x1de8e0['FULLSCREEN'] + _0x3187f1(0x26f);
                    _0x456165[_0x3187f1(0x3eb)](_0x3187f1(0x2e1))[_0x3187f1(0x1d8)](_0x41b16a);
                    const _0x3c1fe6 = _0x335c69[_0x3187f1(0x3eb)](_0x219e69)[_0x3187f1(0x2a3)];
                    if (_0x3c1fe6 > 0x1 && _0x23332f[_0x3187f1(0x197)] && !_0x23332f[_0x3187f1(0x332)]) {
                        const _0x5c8d62 = '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x8c26c7('DW_ALL') + _0x3187f1(0x3b1) + _0x1de8e0[_0x3187f1(0x308)] + _0x3187f1(0x26f);
                        _0x456165[_0x3187f1(0x3eb)]('.button_wrapper')[_0x3187f1(0x1d8)](_0x5c8d62);
                    }
                    _0x456165[_0x3187f1(0x3eb)](_0x3187f1(0x2e1))['append'](_0x113880), setTimeout(() => {
                        const _0x2937b6 = _0x3187f1;
                        if (_0x456165['eq'](_0x4aeb84 === _0x2937b6(0x3b5) ? 0x0 : _0x456165[_0x2937b6(0x2a3)] - 0x2)[_0x2937b6(0x3eb)]('div\x20>\x20ul\x20li._acaz')['length'] === 0x0)
                            _0x456165[_0x2937b6(0x3eb)]('video')[_0x2937b6(0x2a3)] > 0x0 ? _0x456165[_0x2937b6(0x3eb)](_0x2937b6(0x2e1))['append'](_0x118d1c) : (_0x3ef5de = _0x335c69[_0x2937b6(0x3eb)]('img')[_0x2937b6(0x34f)](function () {
                                const _0x2de591 = _0x2937b6;
                                return _0x3d51ed(this)[_0x2de591(0x395)]() > 0xc8 && _0x3d51ed(this)[_0x2de591(0x41a)]() > 0xc8;
                            })[_0x2937b6(0x34d)](_0x2937b6(0x185)), _0x456165[_0x2937b6(0x3eb)]('.button_wrapper')['append'](_0x5343c4));
                        else {
                            const _0x54314f = (_0x1071a3, _0x16b921) => {
                                    const _0x321537 = _0x2937b6;
                                    _0x1071a3[_0x321537(0x3a9)](_0x450fbb => {
                                        const _0x1ece01 = _0x321537;
                                        if (_0x450fbb[_0x1ece01(0x1f0)]) {
                                            var _0x3338e6 = _0x3d51ed(_0x450fbb['target']);
                                            _0x456165[_0x1ece01(0x3eb)](_0x1ece01(0x3b7))?.[_0x1ece01(0x203)](), _0x456165[_0x1ece01(0x3eb)](_0x1ece01(0x3b3))?.[_0x1ece01(0x203)](), _0x3338e6['find'](_0x1ece01(0x415))['length'] > 0x0 ? (_0x456165[_0x1ece01(0x3eb)](_0x1ece01(0x3b7))['length'] === 0x0 && _0x456165[_0x1ece01(0x3eb)](_0x1ece01(0x2e1))[_0x1ece01(0x1d8)](_0x118d1c), _0x290e7f(_0x335c69)) : (_0x3ef5de = _0x3338e6['find'](_0x1ece01(0x28d))['attr']('src'), _0x456165[_0x1ece01(0x3eb)](_0x1ece01(0x2e1))['append'](_0x5343c4));
                                        }
                                    });
                                }, _0xecdd4c = new IntersectionObserver(_0x54314f, {
                                    'root': _0x335c69[_0x2937b6(0x3eb)](_0x2937b6(0x20a))[_0x2937b6(0x2e6)]()['parent']()[_0x2937b6(0x371)]()[_0x2937b6(0x371)]()[0x0],
                                    'rootMargin': _0x2937b6(0x1ce),
                                    'threshold': 0.1
                                }), _0xb041e3 = new MutationObserver(function (_0x170e7b, _0x3b39d0) {
                                    const _0x7fff2 = _0x2937b6;
                                    var _0x43d53c = _0x170e7b['at'](0x0)?.[_0x7fff2(0x380)];
                                    _0x3d51ed(_0x43d53c)[_0x7fff2(0x3eb)](_0x7fff2(0x368))[_0x7fff2(0x1c5)](function () {
                                        const _0x1d178f = _0x7fff2;
                                        _0xecdd4c[_0x1d178f(0x40d)](this);
                                    });
                                });
                            _0x335c69[_0x2937b6(0x3eb)](_0x2937b6(0x3f0))[_0x2937b6(0x1c5)](function () {
                                const _0x48d11a = _0x2937b6;
                                _0xecdd4c[_0x48d11a(0x40d)](this);
                            });
                            const _0x25124e = _0x456165['eq'](_0x4aeb84 === _0x2937b6(0x3b5) ? 0x0 : _0x456165['length'] - 0x2)[_0x2937b6(0x3eb)](_0x2937b6(0x3f0))?.[_0x2937b6(0x371)]()[0x0], _0x59c826 = _0x456165['eq'](_0x4aeb84 === 'DIV' ? 0x0 : _0x456165[_0x2937b6(0x2a3)] - 0x2)[_0x2937b6(0x3eb)](_0x2937b6(0x3f0))?.[_0x2937b6(0x371)]()['parent']()[0x0];
                            _0x25124e && _0xb041e3[_0x2937b6(0x40d)](_0x25124e, { 'childList': !![] }), _0x59c826 && _0xb041e3['observe'](_0x59c826, { 'attributes': !![] });
                        }
                    }, 0x32), _0x456165[_0x3187f1(0x3b6)]('position', _0x3187f1(0x219)), _0x290e7f(_0x335c69), _0x5ce567['GL_registerEventList'][_0x3187f1(0x1f5)]({
                        'element': this,
                        'trigger': [
                            _0x3187f1(0x3b7),
                            _0x3187f1(0x301),
                            _0x3187f1(0x1b4),
                            _0x3187f1(0x2aa),
                            '.IG_IMAGE_VIEWER'
                        ]
                    }), _0x3d51ed(this)['on'](_0x3187f1(0x335), _0x3187f1(0x3b3), function () {
                        const _0xf32e4c = _0x3187f1;
                        _0x3ef5de != null ? _0x51ea09(_0x3ef5de) : alert(_0xf32e4c(0x263));
                    }), _0x3d51ed(this)['on'](_0x3187f1(0x335), '.IG_THUMBNAIL_MAIN', function () {
                        const _0x360927 = _0x3187f1;
                        _0xa1a81a(!![]), _0x5ce567['GL_username'] = _0x335c69[_0x360927(0x34d)](_0x360927(0x28b)), _0x5ce567[_0x360927(0x25b)] = location['pathname']['replace'](/\/$/, '')[_0x360927(0x1aa)]('/')['at'](-0x1) || _0x335c69[_0x360927(0x3eb)](_0x360927(0x323))['first']()[_0x360927(0x34d)](_0x360927(0x29c))[_0x360927(0x1aa)]('/')['at'](0x2) || _0x3d51ed(this)['parent']()[_0x360927(0x371)]()[_0x360927(0x371)]()[_0x360927(0x334)](_0x360927(0x2a7))[_0x360927(0x334)](_0x360927(0x292))[_0x360927(0x334)](_0x360927(0x2a7))['find'](_0x360927(0x323))[_0x360927(0x406)]()['attr'](_0x360927(0x29c))[_0x360927(0x1aa)]('/')['at'](0x2);
                        var _0x7e8afc = _0xa49d37(_0x335c69);
                        _0x3b48bd(!![], ![]), _0x368097(_0x5ce567['GL_postPath'], _0x360927(0x279), '')[_0x360927(0x1d0)](() => {
                            let _0x17df48 = setInterval(() => {
                                const _0x12ee65 = a0_0xf561;
                                if (_0x3d51ed(_0x12ee65(0x26a))['length'] > 0x0) {
                                    clearInterval(_0x17df48);
                                    var _0x178bd2 = _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x7e8afc + 0x1) + '\x22]')?.[_0x12ee65(0x371)]()[_0x12ee65(0x3eb)]('.videoThumbnail')?.[_0x12ee65(0x2e6)]();
                                    _0x178bd2 != null && _0x178bd2[_0x12ee65(0x2a3)] > 0x0 ? _0x178bd2[_0x12ee65(0x214)]('click') : alert('Can\x20not\x20find\x20thumbnail\x20url.'), _0xa1a81a(![]), _0x3d51ed(_0x12ee65(0x29b))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x3d51ed(this)['on'](_0x3187f1(0x335), _0x3187f1(0x301), function () {
                        const _0x54a11f = _0x3187f1;
                        _0xa1a81a(!![]), _0x5ce567[_0x54a11f(0x252)] = _0x335c69[_0x54a11f(0x34d)](_0x54a11f(0x28b)), _0x5ce567[_0x54a11f(0x25b)] = location[_0x54a11f(0x3e8)][_0x54a11f(0x198)](/\/$/, '')[_0x54a11f(0x1aa)]('/')['at'](-0x1) || _0x335c69['find']('a[href^=\x22/p/\x22]')[_0x54a11f(0x2e6)]()['attr']('href')['split']('/')['at'](0x2) || _0x3d51ed(this)[_0x54a11f(0x371)]()[_0x54a11f(0x371)]()[_0x54a11f(0x371)]()['children'](_0x54a11f(0x2a7))[_0x54a11f(0x334)](_0x54a11f(0x292))['children']('div:last-child')[_0x54a11f(0x3eb)]('a[href^=\x22/p/\x22]')[_0x54a11f(0x406)]()[_0x54a11f(0x34d)](_0x54a11f(0x29c))['split']('/')['at'](0x2);
                        var _0x3b393b = _0xa49d37(_0x335c69);
                        _0x3b48bd(!![], ![]), _0x368097(_0x5ce567[_0x54a11f(0x25b)], _0x54a11f(0x279), '')[_0x54a11f(0x1d0)](() => {
                            let _0x47b522 = setInterval(() => {
                                const _0x58c9d3 = a0_0xf561;
                                if (_0x3d51ed(_0x58c9d3(0x26a))[_0x58c9d3(0x2a3)] > 0x0) {
                                    clearInterval(_0x47b522);
                                    var _0xda0c83 = _0x3d51ed(_0x58c9d3(0x3cd) + (_0x3b393b + 0x1) + '\x22]');
                                    if (_0x23332f[_0x58c9d3(0x269)] && _0x23332f['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0x346ec6(_0xda0c83[_0x58c9d3(0x2e6)]()[0x0], !![]);
                                    else {
                                        let _0x438b0f = _0xda0c83?.[_0x58c9d3(0x34d)](_0x58c9d3(0x1b8));
                                        if (_0x438b0f) {
                                            var _0x63c7cd = new URL(_0x438b0f);
                                            _0x63c7cd[_0x58c9d3(0x1e7)] = 'scontent.cdninstagram.com', _0x238a4a(_0x63c7cd['href']);
                                        } else
                                            alert(_0x58c9d3(0x1b5));
                                    }
                                    _0xa1a81a(![]), _0x3d51ed(_0x58c9d3(0x29b))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x3d51ed(this)['on']('click', '.IG_DW_ALL_MAIN', async function () {
                        const _0x305274 = _0x3187f1;
                        _0x5ce567['GL_username'] = _0x335c69[_0x305274(0x34d)]('data-username'), _0x5ce567[_0x305274(0x25b)] = location[_0x305274(0x3e8)][_0x305274(0x198)](/\/$/, '')[_0x305274(0x1aa)]('/')['at'](-0x1) || _0x335c69['find'](_0x305274(0x323))[_0x305274(0x2e6)]()[_0x305274(0x34d)]('href')[_0x305274(0x1aa)]('/')['at'](0x2) || _0x3d51ed(this)[_0x305274(0x371)]()['parent']()[_0x305274(0x371)]()[_0x305274(0x334)](_0x305274(0x2a7))['children'](_0x305274(0x292))['children'](_0x305274(0x2a7))[_0x305274(0x3eb)](_0x305274(0x323))[_0x305274(0x406)]()[_0x305274(0x34d)](_0x305274(0x29c))['split']('/')['at'](0x2), _0x3b48bd(_0x23332f[_0x305274(0x332)], !![]), _0x3d51ed(_0x305274(0x319))[_0x305274(0x21f)](_0x305274(0x18a) + _0x5ce567[_0x305274(0x25b)] + '\x22>' + _0x5ce567[_0x305274(0x25b)] + _0x305274(0x1bf)), _0x3d51ed(_0x305274(0x26a))[_0x305274(0x1c5)](function () {
                            const _0x311364 = _0x305274;
                            _0x3d51ed(this)[_0x311364(0x31e)]('<div></div>'), _0x3d51ed(this)[_0x311364(0x3c9)](_0x311364(0x295)), _0x3d51ed(this)[_0x311364(0x189)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x8c26c7(_0x311364(0x2f8)) + _0x311364(0x2a5) + _0x1de8e0[_0x311364(0x2f8)] + _0x311364(0x26f)), _0x3d51ed(this)['attr'](_0x311364(0x1d7)) == 'video' && _0x3d51ed(this)['after'](_0x311364(0x290) + _0x8c26c7('THUMBNAIL_INTRO') + _0x311364(0x297) + _0x1de8e0[_0x311364(0x22e)] + _0x311364(0x26f));
                        }), _0x368097(_0x5ce567[_0x305274(0x25b)], _0x305274(0x279), _0x8c26c7('LOAD_BLOB_MULTIPLE'))[_0x305274(0x1d0)](() => {
                            let _0x478328 = setInterval(() => {
                                const _0x8ed53 = a0_0xf561;
                                _0x3d51ed(_0x8ed53(0x26a))['length'] > 0x0 && (clearInterval(_0x478328), _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x8ed53(0x1c5)](function () {
                                    const _0x4e08fb = _0x8ed53;
                                    _0x3d51ed(this)[_0x4e08fb(0x214)](_0x4e08fb(0x335));
                                }), _0x3d51ed(_0x8ed53(0x29b))['remove']());
                            }, 0xfa);
                        });
                    }), _0x3d51ed(this)['on']('click', _0x3187f1(0x2aa), async function () {
                        const _0x6e41da = _0x3187f1;
                        _0x5ce567[_0x6e41da(0x252)] = _0x335c69[_0x6e41da(0x34d)]('data-username'), _0x5ce567[_0x6e41da(0x25b)] = location[_0x6e41da(0x3e8)][_0x6e41da(0x198)](/\/$/, '')[_0x6e41da(0x1aa)]('/')['at'](-0x1) || _0x335c69[_0x6e41da(0x3eb)]('a[href^=\x22/p/\x22]')[_0x6e41da(0x2e6)]()['attr'](_0x6e41da(0x29c))[_0x6e41da(0x1aa)]('/')['at'](0x2) || _0x3d51ed(this)[_0x6e41da(0x371)]()[_0x6e41da(0x371)]()[_0x6e41da(0x371)]()[_0x6e41da(0x334)](_0x6e41da(0x2a7))[_0x6e41da(0x334)]('div')[_0x6e41da(0x334)](_0x6e41da(0x2a7))[_0x6e41da(0x3eb)]('a[href^=\x22/p/\x22]')[_0x6e41da(0x406)]()['attr'](_0x6e41da(0x29c))['split']('/')['at'](0x2), _0x3b48bd(_0x23332f['DIRECT_DOWNLOAD_ALL'], !![]), _0x3d51ed(_0x6e41da(0x319))[_0x6e41da(0x21f)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x5ce567[_0x6e41da(0x25b)] + '\x22>' + _0x5ce567['GL_postPath'] + '</a>');
                        if (_0x23332f[_0x6e41da(0x197)]) {
                            _0xa1a81a(!![]), _0x1348fa(!![]);
                            var _0x326a8f = _0xa49d37(_0x3d51ed(this)[_0x6e41da(0x371)]()[_0x6e41da(0x371)]()[_0x6e41da(0x371)]());
                            _0x368097(_0x5ce567[_0x6e41da(0x25b)], _0x6e41da(0x279), '')[_0x6e41da(0x1d0)](() => {
                                let _0x50be99 = setInterval(() => {
                                    const _0x584b50 = a0_0xf561;
                                    if (_0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['length'] > 0x0) {
                                        clearInterval(_0x50be99);
                                        var _0x2135cd = _0x3d51ed(_0x584b50(0x3cd) + (_0x326a8f + 0x1) + '\x22]')?.[_0x584b50(0x34d)](_0x584b50(0x1b8));
                                        _0x2135cd ? (_0xa1a81a(![]), _0x3d51ed(_0x584b50(0x3cd) + (_0x326a8f + 0x1) + '\x22]')?.[_0x584b50(0x214)]('click')) : alert(_0x584b50(0x217)), _0x3d51ed(_0x584b50(0x29b))[_0x584b50(0x203)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x23332f['DIRECT_DOWNLOAD_ALL']) {
                            var _0x56c085 = 0x0, _0x2e083f = _0x3d51ed(this)[_0x6e41da(0x371)]()[_0x6e41da(0x371)]()[_0x6e41da(0x3eb)](_0x219e69)['length'], _0x4c0778 = _0x23332f[_0x6e41da(0x30d)], _0x34ae7f = new Date(_0x3d51ed(this)[_0x6e41da(0x371)]()[_0x6e41da(0x371)]()['find']('a[href^=\x22/p/\x22]\x20time[datetime]')['first']()[_0x6e41da(0x34d)](_0x6e41da(0x2ec)))[_0x6e41da(0x231)]();
                            if (_0x2e083f)
                                _0x3d51ed(this)['parent']()['parent']()[_0x6e41da(0x3eb)](_0x219e69)[_0x6e41da(0x1c5)](function () {
                                    const _0x3c4ab0 = _0x6e41da;
                                    let _0x3ddb70 = _0x3d51ed(this)['parent']()[_0x3c4ab0(0x371)]()[_0x3c4ab0(0x371)]()['find'](_0x3c4ab0(0x415));
                                    _0x3ddb70 && _0x3ddb70['attr'](_0x3c4ab0(0x185)) && (_0x4c0778 = !![]);
                                }), _0x4c0778 || _0x23332f['FORCE_RESOURCE_VIA_MEDIA'] ? _0x368097(_0x5ce567[_0x6e41da(0x25b)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x8c26c7(_0x6e41da(0x30a))) : (_0x3d51ed(this)[_0x6e41da(0x371)]()[_0x6e41da(0x371)]()['find'](_0x219e69)[_0x6e41da(0x1c5)](function () {
                                    const _0x4ebb6c = _0x6e41da;
                                    _0x56c085++;
                                    let _0x51dcd9 = _0x3d51ed(this)[_0x4ebb6c(0x3eb)]('video'), _0x265cfa = _0x3d51ed(this)[_0x4ebb6c(0x3eb)]('._aagv\x20img'), _0x115bcf = _0x265cfa['attr']('srcset') ? _0x265cfa['attr'](_0x4ebb6c(0x3c1))[_0x4ebb6c(0x1aa)]('\x20')[0x0] : _0x265cfa[_0x4ebb6c(0x34d)]('src');
                                    _0x51dcd9 && _0x51dcd9[_0x4ebb6c(0x34d)](_0x4ebb6c(0x185)) && (_0x4c0778 = !![]), _0x265cfa && _0x115bcf && _0x3d51ed(_0x4ebb6c(0x279))['append']('<a\x20datetime=\x22' + _0x34ae7f + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x5ce567[_0x4ebb6c(0x25b)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x56c085 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x115bcf + _0x4ebb6c(0x19f) + _0x115bcf + _0x4ebb6c(0x254) + _0x8c26c7(_0x4ebb6c(0x347)) + _0x4ebb6c(0x1ea) + _0x56c085 + _0x4ebb6c(0x2ae));
                                }), _0x4c0778 && _0x368097(_0x5ce567['GL_postPath'], _0x6e41da(0x279), _0x8c26c7('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x23332f[_0x6e41da(0x269)])
                                    _0x368097(_0x5ce567[_0x6e41da(0x25b)], _0x6e41da(0x279), _0x8c26c7(_0x6e41da(0x30a)));
                                else {
                                    _0x56c085++;
                                    let _0x379feb = _0x3d51ed(this)['parent']()['parent']()[_0x6e41da(0x371)]()['find'](_0x6e41da(0x415)), _0x531b6c = _0x3d51ed(this)[_0x6e41da(0x371)]()[_0x6e41da(0x371)]()[_0x6e41da(0x371)]()[_0x6e41da(0x3eb)]('._aagv\x20img'), _0x58dd86 = _0x531b6c['attr']('srcset') ? _0x531b6c[_0x6e41da(0x34d)](_0x6e41da(0x3c1))['split']('\x20')[0x0] : _0x531b6c[_0x6e41da(0x34d)](_0x6e41da(0x185));
                                    _0x379feb && _0x379feb[_0x6e41da(0x34d)](_0x6e41da(0x185)) && _0x368097(_0x5ce567['GL_postPath'], _0x6e41da(0x279), _0x8c26c7(_0x6e41da(0x300))), _0x531b6c && _0x58dd86 && _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY')[_0x6e41da(0x1d8)](_0x6e41da(0x26e) + _0x34ae7f + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x5ce567['GL_postPath'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x56c085 + _0x6e41da(0x405) + _0x58dd86 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x58dd86 + _0x6e41da(0x254) + _0x8c26c7(_0x6e41da(0x347)) + '</span>\x20' + _0x56c085 + '\x20-</a>');
                                }
                            }
                        }
                        _0x3d51ed(_0x6e41da(0x26a))[_0x6e41da(0x1c5)](function () {
                            const _0x2e6ade = _0x6e41da;
                            _0x3d51ed(this)[_0x2e6ade(0x31e)](_0x2e6ade(0x255)), _0x3d51ed(this)[_0x2e6ade(0x3c9)](_0x2e6ade(0x295)), _0x3d51ed(this)[_0x2e6ade(0x189)](_0x2e6ade(0x38f) + _0x8c26c7(_0x2e6ade(0x2f8)) + _0x2e6ade(0x2a5) + _0x1de8e0[_0x2e6ade(0x2f8)] + _0x2e6ade(0x26f)), _0x3d51ed(this)['attr']('data-name') == _0x2e6ade(0x415) && _0x3d51ed(this)[_0x2e6ade(0x189)](_0x2e6ade(0x290) + _0x8c26c7(_0x2e6ade(0x1d3)) + _0x2e6ade(0x297) + _0x1de8e0[_0x2e6ade(0x22e)] + _0x2e6ade(0x26f));
                        }), _0x23332f['DIRECT_DOWNLOAD_ALL'] && _0x368097(_0x5ce567['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x8c26c7(_0x6e41da(0x30a)))['then'](() => {
                            let _0x2077a2 = setInterval(() => {
                                const _0x1b6ab9 = a0_0xf561;
                                _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['length'] > 0x0 && (clearInterval(_0x2077a2), _0x3d51ed(_0x1b6ab9(0x26a))[_0x1b6ab9(0x1c5)](function () {
                                    const _0x2dd972 = _0x1b6ab9;
                                    _0x3d51ed(this)[_0x2dd972(0x214)]('click');
                                }), _0x3d51ed(_0x1b6ab9(0x29b))[_0x1b6ab9(0x203)]());
                            }, 0xfa);
                        });
                    });
                    var _0x466474 = _0x3d51ed(this)[_0x3187f1(0x3eb)](_0x3187f1(0x2ef))[_0x3187f1(0x2e6)]()[_0x3187f1(0x3ed)]() || _0x3d51ed(this)[_0x3187f1(0x3eb)]('a[href^=\x22/\x22]')['filter'](function () {
                        const _0x42ea74 = _0x3187f1;
                        return _0x3d51ed(this)?.[_0x42ea74(0x3ed)]()?.[_0x42ea74(0x2a3)] > 0x0;
                    })[_0x3187f1(0x2e6)]()[_0x3187f1(0x3ed)]();
                    _0x3d51ed(this)[_0x3187f1(0x34d)](_0x3187f1(0x383), _0x3187f1(0x397)), _0x3d51ed(this)[_0x3187f1(0x34d)](_0x3187f1(0x28b), _0x466474);
                }
            });
        }
        function _0x2ca0ac(_0x301337) {
            const _0x1a900e = _0x4000f3;
            var _0x5d7a57 = _0x301337[_0x1a900e(0x21e)] ?? _0x301337;
            return _0x5d7a57[_0x1a900e(0x2c4)] == null && _0x5d7a57[_0x1a900e(0x345)] != null && (_0x5d7a57[_0x1a900e(0x2c4)] = _0x5d7a57[_0x1a900e(0x345)]), _0x5d7a57['owner'] == null && (_0x596d98(_0x1a900e(0x2b0), 'undefined\x20username'), alert(_0x1a900e(0x417))), _0x5d7a57;
        }
        async function _0x368097(_0x5060b4, _0x188c61, _0x252741) {
            const _0x104918 = _0x4000f3;
            try {
                _0x3d51ed(_0x188c61 + '\x20a')['remove'](), _0x3d51ed(_0x188c61)[_0x104918(0x1d8)](_0x104918(0x260) + _0x252741 + '</p>');
                let _0x28fde9 = await _0x19f2fc(_0x5060b4), _0x1fda34 = _0x2ca0ac(_0x28fde9[_0x104918(0x1bb)]);
                if (_0x28fde9[_0x104918(0x1c0)] === 'query_hash') {
                    let _0x1d2bf8 = 0x1;
                    _0x1fda34[_0x104918(0x2cb)] == _0x104918(0x328) && _0x1fda34[_0x104918(0x320)] && (_0x3d51ed(_0x188c61)[_0x104918(0x1d8)](_0x104918(0x20f) + _0x1fda34['id'] + _0x104918(0x230) + _0x1fda34['taken_at_timestamp'] + _0x104918(0x398) + _0x1fda34[_0x104918(0x25e)] + _0x104918(0x193) + _0x1fda34[_0x104918(0x2c4)][_0x104918(0x20b)] + '\x22\x20data-globalIndex=\x22' + _0x1d2bf8 + _0x104918(0x22d) + _0x1fda34[_0x104918(0x320)] + _0x104918(0x19f) + _0x1fda34['display_resources'][0x1][_0x104918(0x185)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x8c26c7(_0x104918(0x40b)) + '</span>\x20' + _0x1d2bf8 + '\x20-</a>'), _0x1d2bf8++);
                    _0x1fda34[_0x104918(0x2cb)] == _0x104918(0x207) && (_0x3d51ed(_0x188c61)[_0x104918(0x1d8)](_0x104918(0x20f) + _0x1fda34['id'] + _0x104918(0x230) + _0x1fda34['taken_at_timestamp'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x1fda34[_0x104918(0x25e)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x1fda34[_0x104918(0x2c4)][_0x104918(0x20b)] + _0x104918(0x34b) + _0x1d2bf8 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x1fda34[_0x104918(0x35d)][_0x1fda34[_0x104918(0x35d)][_0x104918(0x2a3)] - 0x1][_0x104918(0x185)] + _0x104918(0x19f) + _0x1fda34[_0x104918(0x35d)][0x1][_0x104918(0x185)] + _0x104918(0x254) + _0x8c26c7(_0x104918(0x347)) + _0x104918(0x1ea) + _0x1d2bf8 + '\x20-</a>'), _0x1d2bf8++);
                    if (_0x1fda34[_0x104918(0x2cb)] == _0x104918(0x2a4) && _0x1fda34[_0x104918(0x3c2)])
                        for (let _0x9d060b of _0x1fda34['edge_sidecar_to_children'][_0x104918(0x218)]) {
                            _0x9d060b[_0x104918(0x3fb)][_0x104918(0x2cb)] == _0x104918(0x328) && _0x3d51ed(_0x188c61)['append'](_0x104918(0x20f) + _0x9d060b['node']['id'] + _0x104918(0x230) + _0x1fda34[_0x104918(0x3f6)] + _0x104918(0x398) + _0x1fda34['shortcode'] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x1fda34[_0x104918(0x2c4)][_0x104918(0x20b)] + '\x22\x20data-globalIndex=\x22' + _0x1d2bf8 + _0x104918(0x22d) + _0x9d060b[_0x104918(0x3fb)]['video_url'] + _0x104918(0x19f) + _0x9d060b[_0x104918(0x3fb)][_0x104918(0x35d)][0x1]['src'] + _0x104918(0x23c) + _0x8c26c7('VID') + _0x104918(0x1ea) + _0x1d2bf8 + _0x104918(0x2ae)), _0x9d060b[_0x104918(0x3fb)][_0x104918(0x2cb)] == _0x104918(0x207) && _0x3d51ed(_0x188c61)[_0x104918(0x1d8)]('<a\x20media-id=\x22' + _0x9d060b[_0x104918(0x3fb)]['id'] + _0x104918(0x230) + _0x1fda34[_0x104918(0x3f6)] + _0x104918(0x398) + _0x1fda34['shortcode'] + _0x104918(0x352) + _0x1fda34['owner'][_0x104918(0x20b)] + '\x22\x20data-globalIndex=\x22' + _0x1d2bf8 + _0x104918(0x22d) + _0x9d060b[_0x104918(0x3fb)][_0x104918(0x35d)][_0x9d060b[_0x104918(0x3fb)]['display_resources']['length'] - 0x1][_0x104918(0x185)] + _0x104918(0x19f) + _0x9d060b[_0x104918(0x3fb)]['display_resources'][0x1][_0x104918(0x185)] + _0x104918(0x254) + _0x8c26c7('IMG') + _0x104918(0x1ea) + _0x1d2bf8 + _0x104918(0x2ae)), _0x1d2bf8++;
                        }
                } else {
                    if (_0x1fda34[_0x104918(0x3df)])
                        _0x596d98(_0x104918(0x3df)), _0x1fda34[_0x104918(0x3df)]['forEach']((_0x5a8007, _0xcd8d30) => {
                            const _0x50dc3f = _0x104918;
                            let _0x428eb0 = _0xcd8d30 + 0x1;
                            _0x5a8007[_0x50dc3f(0x407)] == null ? (_0x5a8007[_0x50dc3f(0x348)][_0x50dc3f(0x20c)]['sort'](function (_0x20e73f, _0x19c51b) {
                                const _0x67e85a = _0x50dc3f;
                                let _0x520095 = new URL(_0x20e73f['url'])[_0x67e85a(0x2bf)][_0x67e85a(0x1fd)]('stp'), _0x93ccb3 = new URL(_0x19c51b[_0x67e85a(0x1b1)])[_0x67e85a(0x2bf)]['get']('stp');
                                if (_0x520095 && _0x93ccb3) {
                                    if (_0x520095[_0x67e85a(0x2a3)] > _0x93ccb3['length'])
                                        return 0x1;
                                    if (_0x520095[_0x67e85a(0x2a3)] < _0x93ccb3[_0x67e85a(0x2a3)])
                                        return -0x1;
                                } else {
                                    if (_0x20e73f[_0x67e85a(0x395)] < _0x19c51b[_0x67e85a(0x395)])
                                        return 0x1;
                                    if (_0x20e73f[_0x67e85a(0x395)] > _0x19c51b[_0x67e85a(0x395)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x3d51ed(_0x188c61)['append'](_0x50dc3f(0x20f) + _0x5a8007['pk'] + _0x50dc3f(0x230) + _0x5a8007['taken_at'] + _0x50dc3f(0x398) + _0x1fda34[_0x50dc3f(0x266)] + _0x50dc3f(0x352) + _0x1fda34['owner']['username'] + '\x22\x20data-globalIndex=\x22' + _0x428eb0 + _0x50dc3f(0x22d) + _0x5a8007['image_versions2'][_0x50dc3f(0x20c)][0x0][_0x50dc3f(0x1b1)] + _0x50dc3f(0x19f) + _0x5a8007[_0x50dc3f(0x348)][_0x50dc3f(0x20c)][0x0][_0x50dc3f(0x1b1)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x8c26c7('IMG') + _0x50dc3f(0x1ea) + _0x428eb0 + _0x50dc3f(0x2ae))) : _0x3d51ed(_0x188c61)[_0x50dc3f(0x1d8)](_0x50dc3f(0x20f) + _0x5a8007['pk'] + _0x50dc3f(0x230) + _0x5a8007[_0x50dc3f(0x196)] + _0x50dc3f(0x398) + _0x1fda34[_0x50dc3f(0x266)] + _0x50dc3f(0x193) + _0x1fda34['owner'][_0x50dc3f(0x20b)] + '\x22\x20data-globalIndex=\x22' + _0x428eb0 + _0x50dc3f(0x22d) + _0x5a8007[_0x50dc3f(0x407)][0x0][_0x50dc3f(0x1b1)] + _0x50dc3f(0x19f) + _0x5a8007['image_versions2'][_0x50dc3f(0x20c)][0x0][_0x50dc3f(0x1b1)] + _0x50dc3f(0x2ed) + _0x8c26c7(_0x50dc3f(0x40b)) + _0x50dc3f(0x1ea) + _0x428eb0 + _0x50dc3f(0x2ae));
                        });
                    else {
                        let _0x241c89 = 0x1;
                        _0x1fda34[_0x104918(0x407)] == null ? (_0x1fda34[_0x104918(0x348)]['candidates'][_0x104918(0x28f)](function (_0x4be648, _0x1dfde8) {
                            const _0x1b9e34 = _0x104918;
                            let _0x402cf0 = new URL(_0x4be648[_0x1b9e34(0x1b1)])[_0x1b9e34(0x2bf)][_0x1b9e34(0x1fd)](_0x1b9e34(0x1d2)), _0x43c3d9 = new URL(_0x1dfde8[_0x1b9e34(0x1b1)])[_0x1b9e34(0x2bf)]['get'](_0x1b9e34(0x1d2));
                            if (_0x402cf0 && _0x43c3d9) {
                                if (_0x402cf0[_0x1b9e34(0x2a3)] > _0x43c3d9['length'])
                                    return 0x1;
                                if (_0x402cf0[_0x1b9e34(0x2a3)] < _0x43c3d9[_0x1b9e34(0x2a3)])
                                    return -0x1;
                            } else {
                                if (_0x4be648[_0x1b9e34(0x395)] < _0x1dfde8['width'])
                                    return 0x1;
                                if (_0x4be648['width'] > _0x1dfde8[_0x1b9e34(0x395)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x3d51ed(_0x188c61)['append']('<a\x20media-id=\x22' + _0x1fda34['pk'] + _0x104918(0x230) + _0x1fda34[_0x104918(0x196)] + _0x104918(0x398) + _0x1fda34['code'] + _0x104918(0x352) + _0x1fda34[_0x104918(0x2c4)][_0x104918(0x20b)] + _0x104918(0x34b) + _0x241c89 + _0x104918(0x22d) + _0x1fda34[_0x104918(0x348)]['candidates'][0x0][_0x104918(0x1b1)] + _0x104918(0x19f) + _0x1fda34[_0x104918(0x348)][_0x104918(0x20c)][0x0]['url'] + _0x104918(0x254) + _0x8c26c7('IMG') + _0x104918(0x1ea) + _0x241c89 + _0x104918(0x2ae))) : _0x3d51ed(_0x188c61)['append']('<a\x20media-id=\x22' + _0x1fda34['pk'] + _0x104918(0x230) + _0x1fda34[_0x104918(0x196)] + _0x104918(0x398) + _0x1fda34[_0x104918(0x266)] + _0x104918(0x193) + _0x1fda34['owner']['username'] + _0x104918(0x34b) + _0x241c89 + _0x104918(0x22d) + _0x1fda34[_0x104918(0x407)][0x0][_0x104918(0x1b1)] + _0x104918(0x19f) + _0x1fda34['image_versions2']['candidates'][0x0]['url'] + _0x104918(0x2ed) + _0x8c26c7(_0x104918(0x40b)) + _0x104918(0x1ea) + _0x241c89 + '\x20-</a>');
                    }
                }
                _0x3d51ed(_0x104918(0x3f4))[_0x104918(0x203)](), _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x104918(0x1c5)](function () {
                    const _0xac8a18 = _0x104918;
                    _0x3d51ed(this)['wrap']('<div></div>'), _0x3d51ed(this)[_0xac8a18(0x3c9)](_0xac8a18(0x295)), _0x3d51ed(this)[_0xac8a18(0x189)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x8c26c7(_0xac8a18(0x2f8)) + _0xac8a18(0x2a5) + _0x1de8e0['NEW_TAB'] + _0xac8a18(0x26f)), _0x3d51ed(this)[_0xac8a18(0x34d)](_0xac8a18(0x1d7)) == _0xac8a18(0x415) && _0x3d51ed(this)['after'](_0xac8a18(0x290) + _0x8c26c7(_0xac8a18(0x1d3)) + _0xac8a18(0x297) + _0x1de8e0[_0xac8a18(0x22e)] + '</div>');
                });
            } catch (_0x4267dc) {
                _0x596d98(_0x104918(0x28c), _0x4267dc);
            }
            ;
        }
        function _0xa49d37(_0x11a7ce) {
            const _0x493858 = _0x4000f3;
            var _0x2e8478 = 0x0, _0x559646 = _0x11a7ce[_0x493858(0x3eb)](_0x493858(0x3da));
            return (_0x559646 == null || !_0x559646[_0x493858(0x346)]('_acnb')) && (_0x559646 = _0x11a7ce[_0x493858(0x3eb)](_0x493858(0x276))['eq'](0x0)[_0x493858(0x334)]('div')), _0x559646[_0x493858(0x34f)](_0x493858(0x238))[_0x493858(0x1c5)](function (_0x451723) {
                const _0xe76415 = _0x493858;
                _0x3d51ed(this)[_0xe76415(0x346)](_0xe76415(0x2cf)) && (_0x2e8478 = _0x451723);
            }), _0x2e8478;
        }
        async function _0x1a5a71(_0x1caa84) {
            const _0xf9d9cb = _0x4000f3;
            if (_0x1caa84) {
                _0xa1a81a(!![]);
                let _0x509729 = new Date()['getTime'](), _0x250523 = Math['floor'](_0x509729 / 0x3e8), _0x4f5226 = location[_0xf9d9cb(0x3e8)][_0xf9d9cb(0x2a0)](/(reels|tagged)\/$/ig, '')[_0xf9d9cb(0x1aa)]('/')[_0xf9d9cb(0x34f)](_0xc12ce4 => _0xc12ce4[_0xf9d9cb(0x2a3)] > 0x0)['at'](-0x1), _0x3833ff = await _0x6128d9(_0x4f5226);
                try {
                    let _0x913807 = await _0xb81f34(_0x3833ff[_0xf9d9cb(0x345)]['pk']);
                    _0x33c60c(_0x913807, _0x4f5226, _0xf9d9cb(0x2d1), _0x250523, _0xf9d9cb(0x183));
                } catch (_0xae89a8) {
                    _0x33c60c(_0x3833ff[_0xf9d9cb(0x345)][_0xf9d9cb(0x37f)], _0x4f5226, 'avatar', _0x250523, _0xf9d9cb(0x183));
                }
                _0xa1a81a(![]);
            } else {
                if (!_0x3d51ed(_0xf9d9cb(0x222))['length']) {
                    let _0x14f0d5 = setInterval(() => {
                        const _0x308f6c = _0xf9d9cb;
                        if (_0x3d51ed(_0x308f6c(0x222))[_0x308f6c(0x2a3)]) {
                            clearInterval(_0x14f0d5);
                            return;
                        }
                        _0x3d51ed('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')[_0x308f6c(0x371)]()[_0x308f6c(0x371)]()[_0x308f6c(0x1d8)](_0x308f6c(0x1ca) + _0x8c26c7('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x1de8e0['DOWNLOAD'] + _0x308f6c(0x26f)), _0x3d51ed(_0x308f6c(0x312))['parent']()[_0x308f6c(0x371)]()['css'](_0x308f6c(0x2e3), _0x308f6c(0x219)), _0x3d51ed('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')['parent']()[_0x308f6c(0x371)]()[_0x308f6c(0x371)]()[_0x308f6c(0x1d8)](_0x308f6c(0x1ca) + _0x8c26c7('DW') + _0x308f6c(0x36c) + _0x1de8e0[_0x308f6c(0x385)] + _0x308f6c(0x26f)), _0x3d51ed(_0x308f6c(0x28a))['parent']()['parent']()[_0x308f6c(0x371)]()[_0x308f6c(0x3b6)](_0x308f6c(0x2e3), _0x308f6c(0x219));
                    }, 0x96);
                }
            }
        }
        async function _0x1fbe29(_0x566feb, _0x4a1345, _0x148ac5) {
            const _0xf0ef7a = _0x4000f3;
            if (_0x566feb) {
                _0xa1a81a(!![]);
                let _0x2c64c2 = location[_0xf0ef7a(0x29c)]['split']('?')['at'](0x0)[_0xf0ef7a(0x1aa)](_0xf0ef7a(0x353))['at'](-0x1)[_0xf0ef7a(0x2a0)]('/', ''), _0x1c3304 = await _0x19f2fc(_0x2c64c2), _0x460394 = _0x2ca0ac(_0x1c3304['data']), _0x3c1a2d = new Date()['getTime']();
                _0x23332f[_0xf0ef7a(0x366)] && (_0x1c3304[_0xf0ef7a(0x1c0)] === _0xf0ef7a(0x2dc) ? _0x3c1a2d = _0x460394[_0xf0ef7a(0x21e)][_0xf0ef7a(0x3f6)] : _0x3c1a2d = _0x460394[_0xf0ef7a(0x196)]);
                if (_0x1c3304[_0xf0ef7a(0x1c0)] === _0xf0ef7a(0x2dc)) {
                    if (_0x4a1345 && _0x460394[_0xf0ef7a(0x21e)]['is_video']) {
                        if (_0x148ac5)
                            _0x238a4a(_0x460394[_0xf0ef7a(0x21e)][_0xf0ef7a(0x320)]);
                        else {
                            let _0x170324 = _0xf0ef7a(0x36b);
                            _0x33c60c(_0x460394[_0xf0ef7a(0x21e)][_0xf0ef7a(0x320)], _0x460394['shortcode_media'][_0xf0ef7a(0x2c4)]['username'], _0xf0ef7a(0x3ff), _0x3c1a2d, _0x170324, _0x2c64c2);
                        }
                    } else {
                        if (_0x148ac5)
                            _0x238a4a(_0x460394[_0xf0ef7a(0x21e)][_0xf0ef7a(0x35d)]['at'](-0x1)[_0xf0ef7a(0x185)]);
                        else {
                            let _0x1674fb = _0xf0ef7a(0x183);
                            _0x33c60c(_0x460394[_0xf0ef7a(0x21e)]['display_resources']['at'](-0x1)['src'], _0x460394[_0xf0ef7a(0x21e)][_0xf0ef7a(0x2c4)]['username'], 'reels', _0x3c1a2d, _0x1674fb, _0x2c64c2);
                        }
                    }
                } else {
                    if (_0x4a1345 && _0x460394[_0xf0ef7a(0x407)] != null) {
                        if (_0x148ac5)
                            _0x238a4a(_0x460394[_0xf0ef7a(0x407)][0x0]['url']);
                        else {
                            let _0x51dd55 = 'mp4';
                            _0x33c60c(_0x460394['video_versions'][0x0][_0xf0ef7a(0x1b1)], _0x460394[_0xf0ef7a(0x2c4)]['username'], _0xf0ef7a(0x3ff), _0x3c1a2d, _0x51dd55, _0x2c64c2);
                        }
                    } else {
                        if (_0x148ac5)
                            _0x238a4a(_0x460394[_0xf0ef7a(0x348)][_0xf0ef7a(0x20c)][0x0][_0xf0ef7a(0x1b1)]);
                        else {
                            let _0x4605c0 = _0xf0ef7a(0x183);
                            _0x33c60c(_0x460394[_0xf0ef7a(0x348)][_0xf0ef7a(0x20c)][0x0][_0xf0ef7a(0x1b1)], _0x460394[_0xf0ef7a(0x2c4)]['username'], 'reels', _0x3c1a2d, _0x4605c0, _0x2c64c2);
                        }
                    }
                }
                _0xa1a81a(![]);
            } else
                var _0x371840 = setInterval(() => {
                    const _0x611832 = _0xf0ef7a;
                    _0x3d51ed(_0x611832(0x1be))[_0x611832(0x2a3)] > 0x0 && (clearInterval(_0x371840), _0x23332f[_0x611832(0x209)] && (_0x3d51ed('#scrollWrapper')['remove'](), _0x3d51ed(_0x611832(0x299))[_0x611832(0x1d8)]('<section\x20id=\x22scrollWrapper\x22></section>'), _0x3d51ed(_0x611832(0x322))[_0x611832(0x1d8)](_0x611832(0x200)), _0x3d51ed(_0x611832(0x322))[_0x611832(0x1d8)]('<div\x20class=\x22button-down\x22><div></div></div>'), _0x3d51ed(_0x611832(0x38b))['on'](_0x611832(0x335), function () {
                        const _0x5d8308 = _0x611832;
                        _0x3d51ed(_0x5d8308(0x374))[0x0][_0x5d8308(0x246)]({
                            'top': -0x1e,
                            'behavior': _0x5d8308(0x3af)
                        });
                    }), _0x3d51ed('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0x611832(0x335), function () {
                        const _0x32de29 = _0x611832;
                        _0x3d51ed(_0x32de29(0x374))[0x0][_0x32de29(0x246)]({
                            'top': 0x1e,
                            'behavior': 'smooth'
                        });
                    })), _0x3d51ed(_0x611832(0x3cf))[_0x611832(0x334)](_0x611832(0x292))[_0x611832(0x1c5)](function () {
                        const _0x3edd8b = _0x611832;
                        if (_0x3d51ed(this)[_0x3edd8b(0x334)]()['length'] > 0x0) {
                            if (!_0x3d51ed(this)[_0x3edd8b(0x334)]()['find'](_0x3edd8b(0x3ef))[_0x3edd8b(0x2a3)]) {
                                var _0x2c6407 = _0x3d51ed(this);
                                _0x3d51ed(this)[_0x3edd8b(0x334)]()[_0x3edd8b(0x3b6)](_0x3edd8b(0x2e3), _0x3edd8b(0x219)), _0x3d51ed(this)[_0x3edd8b(0x334)]()[_0x3edd8b(0x1d8)](_0x3edd8b(0x1ca) + _0x8c26c7('DW') + _0x3edd8b(0x1e3) + _0x1de8e0[_0x3edd8b(0x385)] + _0x3edd8b(0x26f)), _0x3d51ed(this)[_0x3edd8b(0x334)]()[_0x3edd8b(0x1d8)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x8c26c7(_0x3edd8b(0x2f8)) + _0x3edd8b(0x283) + _0x1de8e0['NEW_TAB'] + '</div>'), _0x3d51ed(this)['children']()[_0x3edd8b(0x1d8)](_0x3edd8b(0x290) + _0x8c26c7(_0x3edd8b(0x1d3)) + '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>' + _0x1de8e0[_0x3edd8b(0x22e)] + _0x3edd8b(0x26f));
                                _0x23332f[_0x3edd8b(0x25a)] && _0x3d51ed(this)[_0x3edd8b(0x3eb)](_0x3edd8b(0x415))[_0x3edd8b(0x1c5)](function () {
                                    _0x3d51ed(this)['on']('ended', function () {
                                        const _0x59f08a = a0_0xf561;
                                        if (!_0x3d51ed(this)[_0x59f08a(0x1bb)](_0x59f08a(0x2bc))) {
                                            let _0x2cb152 = _0x3d51ed(this)[_0x59f08a(0x1ba)]()[_0x59f08a(0x3eb)](_0x59f08a(0x1bd))['parents'](_0x59f08a(0x30f));
                                            _0x2cb152[_0x59f08a(0x2a3)] > 0x0 ? (_0x3d51ed(this)[_0x59f08a(0x34d)]('data-loop', !![]), _0x2cb152['trigger']('click'), _0x596d98(_0x59f08a(0x2e4))) : (_0x3d51ed(this)[_0x59f08a(0x34d)](_0x59f08a(0x399), !![]), _0x3d51ed(this)[_0x59f08a(0x371)]()[_0x59f08a(0x3eb)]('.xpgaw4o')[_0x59f08a(0x25d)](_0x59f08a(0x33a)), this['pause'](), _0x596d98('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()'));
                                        }
                                    });
                                });
                                _0x23332f['HTML5_VIDEO_CONTROL'] && _0x3d51ed(this)[_0x3edd8b(0x3eb)](_0x3edd8b(0x415))[_0x3edd8b(0x1c5)](function () {
                                    const _0x318d37 = _0x3edd8b;
                                    if (!_0x3d51ed(this)['data'](_0x318d37(0x3a3))) {
                                        let _0x288be7 = _0x3d51ed(this);
                                        _0x596d98(_0x318d37(0x2e7)), _0x23332f[_0x318d37(0x215)] && (this[_0x318d37(0x3a6)] = _0x5ce567[_0x318d37(0x205)], _0x3d51ed(this)['on'](_0x318d37(0x38d), function () {
                                            const _0x327a67 = _0x318d37;
                                            this['volume'] = _0x5ce567[_0x327a67(0x205)];
                                        })), _0x3d51ed(this)['on'](_0x318d37(0x333), function (_0x48a9cb) {
                                            const _0x4905ad = _0x318d37;
                                            _0x48a9cb[_0x4905ad(0x210)](), _0x288be7['css'](_0x4905ad(0x1db), '-1'), _0x288be7[_0x4905ad(0x25d)](_0x4905ad(0x3a3));
                                        }), _0x3d51ed(this)[_0x318d37(0x371)]()[_0x318d37(0x3eb)](_0x318d37(0x291))['filter'](function () {
                                            const _0x4b5319 = _0x318d37;
                                            return _0x3d51ed(this)[_0x4b5319(0x371)](_0x4b5319(0x18e))['length'] > 0x0 && _0x3d51ed(this)[_0x4b5319(0x3b6)](_0x4b5319(0x26d)) === _0x4b5319(0x2dd) && _0x3d51ed(this)[_0x4b5319(0x34d)](_0x4b5319(0x33a)) != null;
                                        })['first']()['on']('contextmenu', function (_0x504a65) {
                                            const _0x36d7fc = _0x318d37;
                                            _0x504a65[_0x36d7fc(0x210)](), _0x288be7['css']('z-index', '2'), _0x288be7['attr']('controls', !![]);
                                        }), _0x3d51ed(this)['on']('volumechange', function () {
                                            const _0x3618eb = _0x318d37;
                                            let _0x127c34 = _0x3d51ed(this)['parent']()['find']('video\x20+\x20div\x20>\x20div')[_0x3618eb(0x3eb)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')[_0x3618eb(0x34f)](function (_0x2bf689) {
                                                const _0x5b99e9 = _0x3618eb;
                                                return _0x3d51ed(this)[_0x5b99e9(0x395)]() <= 0x40 && _0x3d51ed(this)[_0x5b99e9(0x41a)]() <= 0x40 && _0x3d51ed(this)[_0x5b99e9(0x3eb)](_0x5b99e9(0x264))['length'] > 0x0;
                                            });
                                            var _0x5a6f7a = _0x127c34['find'](_0x3618eb(0x2b5))['length'] === 0x0;
                                            this[_0x3618eb(0x324)] != _0x5a6f7a && (this['volume'] = _0x5ce567['videoVolume'], _0x127c34?.[_0x3618eb(0x214)]('click')), _0x3d51ed(this)[_0x3618eb(0x34d)]('data-completed') && (_0x5ce567[_0x3618eb(0x205)] = this[_0x3618eb(0x3a6)], GM_setValue(_0x3618eb(0x20e), this[_0x3618eb(0x3a6)])), this[_0x3618eb(0x3a6)] == _0x5ce567['videoVolume'] && _0x3d51ed(this)[_0x3618eb(0x34d)]('data-completed', !![]);
                                        }), _0x3d51ed(this)[_0x318d37(0x3b6)](_0x318d37(0x2e3), _0x318d37(0x3a8)), _0x3d51ed(this)['css'](_0x318d37(0x1db), '2'), _0x3d51ed(this)['attr']('data-controls', !![]), _0x3d51ed(this)[_0x318d37(0x34d)]('controls', !![]);
                                    }
                                });
                                var _0x3f85bb = _0x2c6407[_0x3edd8b(0x3eb)]('video'), _0x360c29 = _0x3d51ed(this)[_0x3edd8b(0x3eb)](_0x3edd8b(0x236))[_0x3edd8b(0x2e6)]();
                                _0x55d0d8(_0x3f85bb, _0x360c29, _0x3edd8b(0x3ca));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x4a8cd5() {
            const _0x2edf6e = _0x4000f3;
            _0xa1a81a(!![]);
            let _0x47201c = new Date()[_0x2edf6e(0x231)](), _0x194226 = Math[_0x2edf6e(0x360)](_0x47201c / 0x3e8), _0x317d36 = _0x3d51ed(_0x2edf6e(0x23f))[_0x2edf6e(0x2e6)]()[_0x2edf6e(0x3ed)]() || location['pathname'][_0x2edf6e(0x1aa)]('/')[_0x2edf6e(0x34f)](_0xfd5731 => _0xfd5731[_0x2edf6e(0x2a3)] > 0x0)['at'](0x1), _0x273a45 = await _0x6128d9(_0x317d36), _0x8437fc = _0x273a45[_0x2edf6e(0x345)]['pk'], _0x385c0e = await _0x557ea6(_0x8437fc), _0x48c2c3 = 0x0;
            _0x43e82c(_0x48c2c3, _0x385c0e[_0x2edf6e(0x1bb)]['reels_media'][0x0][_0x2edf6e(0x37d)]['length']), _0x385c0e[_0x2edf6e(0x1bb)][_0x2edf6e(0x286)][0x0][_0x2edf6e(0x37d)][_0x2edf6e(0x3a9)]((_0x571553, _0x167753) => {
                setTimeout(() => {
                    const _0x3dfdc8 = a0_0xf561;
                    _0x23332f['RENAME_PUBLISH_DATE'] && (_0x194226 = _0x571553['taken_at_timestamp']), _0x571553[_0x3dfdc8(0x35d)]['sort'](function (_0x37224e, _0x4feb38) {
                        const _0x13ff8f = _0x3dfdc8;
                        if (_0x37224e[_0x13ff8f(0x188)] < _0x4feb38[_0x13ff8f(0x188)])
                            return 0x1;
                        if (_0x37224e[_0x13ff8f(0x188)] > _0x4feb38['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x571553[_0x3dfdc8(0x22a)] ? _0x33c60c(_0x571553[_0x3dfdc8(0x22b)][0x0]['src'], _0x317d36, _0x3dfdc8(0x31a), _0x194226, _0x3dfdc8(0x36b), _0x571553['id'])[_0x3dfdc8(0x1d0)](() => {
                        const _0x297b75 = _0x3dfdc8;
                        _0x43e82c(++_0x48c2c3, _0x385c0e[_0x297b75(0x1bb)]['reels_media'][0x0][_0x297b75(0x37d)][_0x297b75(0x2a3)]);
                    }) : _0x33c60c(_0x571553['display_resources'][0x0]['src'], _0x317d36, 'stories', _0x194226, _0x3dfdc8(0x183), _0x571553['id'])['then'](() => {
                        const _0x1e8392 = _0x3dfdc8;
                        _0x43e82c(++_0x48c2c3, _0x385c0e[_0x1e8392(0x1bb)]['reels_media'][0x0][_0x1e8392(0x37d)]['length']);
                    });
                }, 0x64 * _0x167753);
            });
        }
        async function _0x3bc215(_0x59a251, _0x4627da, _0x56b5e3) {
            const _0x334cb9 = _0x4000f3;
            var _0xbe35e0 = _0x3d51ed('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')[_0x334cb9(0x2e6)]()[_0x334cb9(0x3ed)]() || location['pathname']['split']('/')[_0x334cb9(0x34f)](_0x1d301a => _0x1d301a[_0x334cb9(0x2a3)] > 0x0)['at'](0x1);
            if (_0x59a251) {
                let _0x2a8dfa = new Date()[_0x334cb9(0x231)](), _0x3746ac = Math['floor'](_0x2a8dfa / 0x3e8);
                _0xa1a81a(!![]);
                if (_0x23332f[_0x334cb9(0x269)] && !_0x5ce567[_0x334cb9(0x321)]) {
                    let _0x15fe55 = null, _0x4ae103 = await _0x6128d9(_0xbe35e0), _0x2c6715 = _0x4ae103[_0x334cb9(0x345)]['pk'], _0x3f6192 = await _0x557ea6(_0x2c6715), _0x3daecc = location[_0x334cb9(0x3e8)]['split']('/')[_0x334cb9(0x34f)](_0x135cfa => _0x135cfa[_0x334cb9(0x2a3)] > 0x0 && _0x135cfa[_0x334cb9(0x37c)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x3f6192['data'][_0x334cb9(0x286)][0x0][_0x334cb9(0x37d)][_0x334cb9(0x3a9)](_0x15827c => {
                        _0x15827c['id'] == _0x3daecc && (_0x15fe55 = _0x15827c['id']);
                    });
                    if (_0x15fe55 == null) {
                        let _0x5cc3b3 = _0x18e71c(_0xbe35e0);
                        _0x5cc3b3[_0x334cb9(0x1c5)](function (_0x2f57e3) {
                            const _0x5dd681 = _0x334cb9;
                            _0x3d51ed(this)['children']()[_0x5dd681(0x2a3)] > 0x0 && (_0x15fe55 = _0x3f6192[_0x5dd681(0x1bb)][_0x5dd681(0x286)][0x0][_0x5dd681(0x37d)][_0x2f57e3]['id']);
                        });
                    }
                    _0x15fe55 == null && (_0x3d51ed('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x334cb9(0x1c5)](function (_0x2ac9c3) {
                        const _0x5e81e6 = _0x334cb9;
                        _0x3d51ed(this)[_0x5e81e6(0x346)](_0x5e81e6(0x1eb)) && (_0x3d51ed(this)[_0x5e81e6(0x334)]()[_0x5e81e6(0x2a3)] > 0x0 && (_0x15fe55 = _0x3f6192[_0x5e81e6(0x1bb)][_0x5e81e6(0x286)][0x0][_0x5e81e6(0x37d)][_0x2ac9c3]['id']));
                    }), _0x3d51ed(_0x334cb9(0x3fa))[_0x334cb9(0x1c5)](function (_0x1b4c23) {
                        const _0x4cae19 = _0x334cb9;
                        _0x3d51ed(this)[_0x4cae19(0x334)]()['hasClass'](_0x4cae19(0x288)) && (_0x15fe55 = _0x3f6192[_0x4cae19(0x1bb)]['reels_media'][0x0][_0x4cae19(0x37d)][_0x1b4c23]['id']);
                    }));
                    _0x15fe55 == null && (_0x15fe55 = location['pathname'][_0x334cb9(0x1aa)]('/')[_0x334cb9(0x34f)](_0x289251 => _0x289251['length'] > 0x0 && _0x289251[_0x334cb9(0x37c)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x4e16b2 = await _0x3a25d4(_0x15fe55);
                    _0x23332f[_0x334cb9(0x366)] && (_0x3746ac = _0x4e16b2[_0x334cb9(0x37d)][0x0][_0x334cb9(0x196)]);
                    _0x4e16b2['status'] === 'ok' ? _0x4e16b2['items'][0x0][_0x334cb9(0x407)] ? _0x56b5e3 ? _0x238a4a(_0x4e16b2[_0x334cb9(0x37d)][0x0]['video_versions'][0x0][_0x334cb9(0x1b1)]) : _0x33c60c(_0x4e16b2[_0x334cb9(0x37d)][0x0]['video_versions'][0x0]['url'], _0xbe35e0, _0x334cb9(0x31a), _0x3746ac, _0x334cb9(0x36b), _0x15fe55) : _0x56b5e3 ? _0x238a4a(_0x4e16b2[_0x334cb9(0x37d)][0x0]['image_versions2']['candidates'][0x0][_0x334cb9(0x1b1)]) : _0x33c60c(_0x4e16b2[_0x334cb9(0x37d)][0x0][_0x334cb9(0x348)]['candidates'][0x0][_0x334cb9(0x1b1)], _0xbe35e0, 'stories', _0x3746ac, _0x334cb9(0x183), _0x15fe55) : (_0x23332f[_0x334cb9(0x3aa)] ? (_0x5ce567[_0x334cb9(0x321)] = !![], _0x3bc215(_0x59a251, _0x4627da, _0x56b5e3)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x4e16b2[_0x334cb9(0x376)]), _0x596d98(_0x4e16b2));
                    _0xa1a81a(![]);
                    return;
                }
                if (_0x3d51ed(_0x334cb9(0x313))[_0x334cb9(0x2a3)] > 0x0) {
                    let _0x271467 = 'mp4', _0xb00cee = '', _0x43b0ae = location['pathname'][_0x334cb9(0x198)](/\/$/ig, '')[_0x334cb9(0x1aa)]('/')['at'](-0x1), _0x1315ac = null;
                    if (_0x5ce567[_0x334cb9(0x18d)]['stories'][_0xbe35e0] && !_0x4627da) {
                        _0x596d98(_0x334cb9(0x2cc), _0xbe35e0), _0x5ce567[_0x334cb9(0x18d)][_0x334cb9(0x31a)][_0xbe35e0][_0x334cb9(0x1bb)]['reels_media'][0x0][_0x334cb9(0x37d)]['forEach'](_0x6d8556 => {
                            const _0x28a572 = _0x334cb9;
                            _0x6d8556['id'] == _0x43b0ae && (_0xb00cee = _0x6d8556[_0x28a572(0x22b)][0x0][_0x28a572(0x185)], _0x23332f[_0x28a572(0x366)] && (_0x3746ac = _0x6d8556[_0x28a572(0x3f6)], _0x1315ac = _0x6d8556['id']));
                        });
                        if (_0xb00cee[_0x334cb9(0x2a3)] == 0x0) {
                            _0x596d98(_0x334cb9(0x2f9), _0xbe35e0), _0x3bc215(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x271616 = await _0x6128d9(_0xbe35e0), _0x3f8511 = _0x271616[_0x334cb9(0x345)]['pk'], _0x3efb3a = await _0x557ea6(_0x3f8511);
                        _0x3efb3a[_0x334cb9(0x1bb)]['reels_media'][0x0]['items'][_0x334cb9(0x3a9)](_0x3bd651 => {
                            const _0x299a07 = _0x334cb9;
                            _0x3bd651['id'] == _0x43b0ae && (_0xb00cee = _0x3bd651[_0x299a07(0x22b)][0x0][_0x299a07(0x185)], _0x23332f[_0x299a07(0x366)] && (_0x3746ac = _0x3bd651['taken_at_timestamp'], _0x1315ac = _0x3bd651['id']));
                        });
                        if (_0xb00cee[_0x334cb9(0x2a3)] == 0x0) {
                            let _0x1983cf = _0x18e71c(_0xbe35e0);
                            _0x1983cf[_0x334cb9(0x1c5)](function (_0x15afc5) {
                                const _0x1d91d7 = _0x334cb9;
                                _0x3d51ed(this)['children']()['length'] > 0x0 && (_0xb00cee = _0x3efb3a[_0x1d91d7(0x1bb)]['reels_media'][0x0][_0x1d91d7(0x37d)][_0x15afc5][_0x1d91d7(0x22b)][0x0]['src'], _0x23332f['RENAME_PUBLISH_DATE'] && (_0x3746ac = _0x3efb3a[_0x1d91d7(0x1bb)][_0x1d91d7(0x286)][0x0][_0x1d91d7(0x37d)][_0x15afc5][_0x1d91d7(0x3f6)], _0x1315ac = _0x3efb3a[_0x1d91d7(0x1bb)][_0x1d91d7(0x286)][0x0][_0x1d91d7(0x37d)][_0x15afc5]['id']));
                            }), _0xb00cee[_0x334cb9(0x2a3)] == 0x0 && (_0x3d51ed(_0x334cb9(0x216))[_0x334cb9(0x1c5)](function (_0x389d3b) {
                                const _0x17d550 = _0x334cb9;
                                _0x3d51ed(this)[_0x17d550(0x346)]('x1lix1fw') && (_0x3d51ed(this)['children']()[_0x17d550(0x2a3)] > 0x0 && (_0xb00cee = _0x3efb3a[_0x17d550(0x1bb)][_0x17d550(0x286)][0x0][_0x17d550(0x37d)][_0x389d3b][_0x17d550(0x22b)][0x0]['src'], _0x23332f[_0x17d550(0x366)] && (_0x3746ac = _0x3efb3a['data']['reels_media'][0x0][_0x17d550(0x37d)][_0x389d3b][_0x17d550(0x3f6)], _0x1315ac = _0x3efb3a['data']['reels_media'][0x0][_0x17d550(0x37d)][_0x389d3b]['id'])));
                            }), _0x3d51ed('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')['each'](function (_0x440df3) {
                                const _0x542363 = _0x334cb9;
                                _0x3d51ed(this)['children']()['hasClass'](_0x542363(0x288)) && (_0xb00cee = _0x3efb3a[_0x542363(0x1bb)][_0x542363(0x286)][0x0][_0x542363(0x37d)][_0x440df3]['video_resources'][0x0][_0x542363(0x185)], _0x23332f[_0x542363(0x366)] && (_0x3746ac = _0x3efb3a[_0x542363(0x1bb)]['reels_media'][0x0][_0x542363(0x37d)][_0x440df3][_0x542363(0x3f6)], _0x1315ac = _0x3efb3a['data']['reels_media'][0x0][_0x542363(0x37d)][_0x440df3]['id']));
                            }));
                        }
                        _0x5ce567[_0x334cb9(0x18d)][_0x334cb9(0x31a)][_0xbe35e0] = _0x3efb3a;
                    }
                    _0xb00cee[_0x334cb9(0x2a3)] == 0x0 ? alert(_0x8c26c7(_0x334cb9(0x240))) : _0x56b5e3 ? _0x238a4a(_0xb00cee) : _0x33c60c(_0xb00cee, _0xbe35e0, _0x334cb9(0x31a), _0x3746ac, _0x271467, _0x1315ac);
                } else {
                    let _0x2fcfb2 = _0x3d51ed(_0x334cb9(0x3dc))[_0x334cb9(0x34d)]('srcset')?.[_0x334cb9(0x1aa)](',')[0x0]?.[_0x334cb9(0x1aa)]('\x20')[0x0], _0x39e081 = _0x2fcfb2 ? _0x2fcfb2 : _0x3d51ed(_0x334cb9(0x3dc))[_0x334cb9(0x34f)](function () {
                            const _0x43265f = _0x334cb9;
                            return _0x3d51ed(this)[_0x43265f(0x38e)]('a')[_0x43265f(0x2a3)] === 0x0 && _0x3d51ed(this)[_0x43265f(0x395)]() === _0x3d51ed(this)['parent']()[_0x43265f(0x395)]();
                        })[_0x334cb9(0x34d)](_0x334cb9(0x185));
                    if (!_0x39e081) {
                        let _0x5384b2 = _0x3d51ed(_0x334cb9(0x3d4));
                        _0x39e081 = _0x5384b2[_0x334cb9(0x34d)](_0x334cb9(0x3c1)) ? _0x5384b2['attr'](_0x334cb9(0x3c1))?.['split'](',')[0x0]?.['split']('\x20')[0x0] : _0x5384b2[_0x334cb9(0x34d)](_0x334cb9(0x185));
                    }
                    _0x23332f['RENAME_PUBLISH_DATE'] && (_0x3746ac = new Date(_0x3d51ed('body\x20>\x20div\x20section:visible\x20time[datetime][class]')['first']()[_0x334cb9(0x34d)](_0x334cb9(0x2ec)))[_0x334cb9(0x231)]());
                    let _0xd540f0 = _0x39e081, _0xd8e73b = 'jpg';
                    _0x56b5e3 ? _0x238a4a(_0xd540f0) : _0x33c60c(_0xd540f0, _0xbe35e0, 'stories', _0x3746ac, _0xd8e73b, _0xcd2a16(_0xd540f0) ?? '');
                }
                _0x5ce567['tempFetchRateLimit'] = ![], _0xa1a81a(![]);
            } else {
                if (!_0x3d51ed(_0x334cb9(0x1b6))[_0x334cb9(0x2a3)]) {
                    _0x5ce567[_0x334cb9(0x18d)][_0x334cb9(0x31a)] = {};
                    let _0x527329 = null;
                    _0x3d51ed('body\x20>\x20div\x20section._ac0a')[_0x334cb9(0x2a3)] > 0x0 ? _0x527329 = _0x3d51ed(_0x334cb9(0x3e7)) : (_0x527329 = _0x3d51ed(_0x334cb9(0x408)), _0x527329['css']('position', _0x334cb9(0x219)));
                    _0x527329['length'] === 0x0 && (_0x527329 = _0x3d51ed(_0x334cb9(0x195))[_0x334cb9(0x371)]()['parent']()[_0x334cb9(0x371)]()[_0x334cb9(0x3eb)]('section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x527329[_0x334cb9(0x3b6)]('position', 'relative'));
                    _0x527329['length'] === 0x0 && (_0x527329 = _0x3d51ed('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x334cb9(0x371)]()[_0x334cb9(0x371)]()[_0x334cb9(0x371)]()[_0x334cb9(0x3eb)](_0x334cb9(0x31c)), _0x527329['css'](_0x334cb9(0x2e3), _0x334cb9(0x219)));
                    if (_0x527329[_0x334cb9(0x2a3)] === 0x0) {
                        let _0x1b46c9 = _0x3d51ed(_0x334cb9(0x3e3)), _0xf0f116 = 0x0;
                        _0x1b46c9['each'](function () {
                            const _0x3abc93 = _0x334cb9;
                            _0x3d51ed(this)[_0x3abc93(0x395)]() > _0xf0f116 && (_0xf0f116 = _0x3d51ed(this)[_0x3abc93(0x395)](), _0x527329 = _0x3d51ed(this)[_0x3abc93(0x334)](_0x3abc93(0x292))[_0x3abc93(0x2e6)]());
                        });
                    }
                    if (_0x527329 != null) {
                        _0x527329[_0x334cb9(0x2e6)]()[_0x334cb9(0x3b6)]('position', _0x334cb9(0x219)), _0x527329[_0x334cb9(0x2e6)]()[_0x334cb9(0x1d8)](_0x334cb9(0x1ca) + _0x8c26c7('DW') + '\x22\x20class=\x22IG_DWSTORY\x22>' + _0x1de8e0[_0x334cb9(0x385)] + _0x334cb9(0x26f)), _0x527329[_0x334cb9(0x2e6)]()['append'](_0x334cb9(0x38f) + _0x8c26c7(_0x334cb9(0x2f8)) + '\x22\x20class=\x22IG_DWNEWTAB\x22>' + _0x1de8e0['NEW_TAB'] + _0x334cb9(0x26f));
                        let _0x590be3 = _0x18e71c(_0xbe35e0);
                        _0x590be3[_0x334cb9(0x2a3)] > 0x1 && _0x527329['first']()[_0x334cb9(0x1d8)](_0x334cb9(0x2f0) + _0x8c26c7(_0x334cb9(0x2eb)) + '\x22\x20class=\x22IG_DWSTORY_ALL\x22>' + _0x1de8e0[_0x334cb9(0x308)] + _0x334cb9(0x26f)), _0x527329[_0x334cb9(0x3eb)](_0x334cb9(0x281))['each'](function () {
                            const _0x2857a7 = _0x334cb9;
                            _0x3d51ed(this)['on'](_0x2857a7(0x24b), function () {
                                const _0x502e14 = _0x2857a7;
                                !_0x3d51ed(this)[_0x502e14(0x1bb)](_0x502e14(0x2af)) && (_0x527329['find'](_0x502e14(0x23e))[_0x502e14(0x2a3)] === 0x0 ? (_0x3d51ed(this)[_0x502e14(0x34d)](_0x502e14(0x389), !![]), _0x3d51ed('.IG_DWSTORY_THUMBNAIL')[_0x502e14(0x203)](), _0x596d98(_0x502e14(0x204))) : (_0x3d51ed(this)[_0x502e14(0x34d)](_0x502e14(0x389), !![]), _0x596d98(_0x502e14(0x250))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x41165e(_0x57aa98, _0x1df392) {
            const _0x564af1 = _0x4000f3;
            if (_0x57aa98) {
                let _0x3147d5 = new Date()[_0x564af1(0x231)](), _0x5e8a72 = Math[_0x564af1(0x360)](_0x3147d5 / 0x3e8), _0x1b8cfd = _0x564af1(0x183), _0x4e3444 = _0x3d51ed(_0x564af1(0x23f))[_0x564af1(0x2e6)]()[_0x564af1(0x3ed)]() || location[_0x564af1(0x3e8)]['split']('/')['at'](0x2), _0x1b8c59 = location[_0x564af1(0x3e8)][_0x564af1(0x198)](/\/$/ig, '')[_0x564af1(0x1aa)]('/')['at'](-0x1), _0x3f1eb2 = '', _0x340b34 = null;
                _0xa1a81a(!![]);
                if (_0x23332f[_0x564af1(0x269)] && !_0x5ce567[_0x564af1(0x321)]) {
                    let _0x5288ce = await _0x6128d9(_0x4e3444), _0x4b95f5 = _0x5288ce[_0x564af1(0x345)]['pk'], _0x831fd3 = await _0x557ea6(_0x4b95f5), _0x2529ae = location['pathname'][_0x564af1(0x1aa)]('/')[_0x564af1(0x34f)](_0x8903a0 => _0x8903a0[_0x564af1(0x2a3)] > 0x0 && _0x8903a0[_0x564af1(0x37c)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x831fd3[_0x564af1(0x1bb)][_0x564af1(0x286)][0x0][_0x564af1(0x37d)][_0x564af1(0x3a9)](_0x386732 => {
                        _0x386732['id'] == _0x2529ae && (_0x340b34 = _0x386732['id']);
                    });
                    if (_0x340b34 == null) {
                        let _0x50b167 = _0x18e71c(_0x4e3444);
                        _0x50b167[_0x564af1(0x1c5)](function (_0x3f75f5) {
                            const _0x20df62 = _0x564af1;
                            _0x3d51ed(this)[_0x20df62(0x334)]()[_0x20df62(0x2a3)] > 0x0 && (_0x340b34 = _0x831fd3['data'][_0x20df62(0x286)][0x0]['items'][_0x3f75f5]['id']);
                        });
                    }
                    _0x340b34 == null && (_0x3d51ed(_0x564af1(0x216))[_0x564af1(0x1c5)](function (_0x3e71d4) {
                        const _0x19a7ba = _0x564af1;
                        _0x3d51ed(this)[_0x19a7ba(0x346)](_0x19a7ba(0x1eb)) && (_0x3d51ed(this)['children']()['length'] > 0x0 && (_0x340b34 = _0x831fd3[_0x19a7ba(0x1bb)][_0x19a7ba(0x286)][0x0]['items'][_0x3e71d4]['id']));
                    }), _0x3d51ed(_0x564af1(0x3fa))[_0x564af1(0x1c5)](function (_0x181b28) {
                        const _0x23cc3d = _0x564af1;
                        _0x3d51ed(this)[_0x23cc3d(0x334)]()['hasClass']('_ac3q') && (_0x340b34 = _0x831fd3[_0x23cc3d(0x1bb)][_0x23cc3d(0x286)][0x0][_0x23cc3d(0x37d)][_0x181b28]['id']);
                    }));
                    _0x340b34 == null && (_0x340b34 = location[_0x564af1(0x3e8)][_0x564af1(0x1aa)]('/')[_0x564af1(0x34f)](_0x4faab7 => _0x4faab7['length'] > 0x0 && _0x4faab7[_0x564af1(0x37c)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x50b2c6 = await _0x3a25d4(_0x340b34);
                    _0x23332f[_0x564af1(0x366)] && (_0x5e8a72 = _0x50b2c6[_0x564af1(0x37d)][0x0]['taken_at']);
                    _0x50b2c6[_0x564af1(0x261)] === 'ok' ? _0x33c60c(_0x50b2c6['items'][0x0][_0x564af1(0x348)][_0x564af1(0x20c)][0x0][_0x564af1(0x1b1)], _0x4e3444, _0x564af1(0x31a), _0x5e8a72, _0x564af1(0x183), _0x340b34) : (_0x23332f[_0x564af1(0x3aa)] ? (_0x5ce567[_0x564af1(0x321)] = !![], _0x41165e(!![], _0x1df392)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x50b2c6[_0x564af1(0x376)]), _0x596d98(_0x50b2c6));
                    _0xa1a81a(![]);
                    return;
                }
                if (_0x5ce567[_0x564af1(0x18d)][_0x564af1(0x31a)][_0x4e3444] && !_0x1df392) {
                    _0x596d98(_0x564af1(0x2cc), _0x4e3444), _0x5ce567[_0x564af1(0x18d)][_0x564af1(0x31a)][_0x4e3444][_0x564af1(0x1bb)][_0x564af1(0x286)][0x0]['items'][_0x564af1(0x3a9)](_0x568fbf => {
                        const _0x556ccd = _0x564af1;
                        _0x568fbf['id'] == _0x1b8c59 && (_0x3f1eb2 = _0x568fbf[_0x556ccd(0x3d8)], _0x23332f[_0x556ccd(0x366)] && (_0x5e8a72 = _0x568fbf[_0x556ccd(0x3f6)], _0x340b34 = _0x568fbf['id']));
                    });
                    if (_0x3f1eb2[_0x564af1(0x2a3)] == 0x0) {
                        _0x596d98(_0x564af1(0x2f9), _0x4e3444), _0x41165e(!![], !![]);
                        return;
                    }
                } else {
                    let _0x5cb28f = await _0x6128d9(_0x4e3444), _0x33c23f = _0x5cb28f[_0x564af1(0x345)]['pk'], _0x3957a5 = await _0x557ea6(_0x33c23f);
                    _0x3957a5['data'][_0x564af1(0x286)][0x0][_0x564af1(0x37d)][_0x564af1(0x3a9)](_0x1d1c34 => {
                        const _0x339e51 = _0x564af1;
                        _0x1d1c34['id'] == _0x1b8c59 && (_0x3f1eb2 = _0x1d1c34[_0x339e51(0x3d8)], _0x23332f[_0x339e51(0x366)] && (_0x5e8a72 = _0x1d1c34[_0x339e51(0x3f6)], _0x340b34 = _0x1d1c34['id']));
                    });
                    if (_0x3f1eb2[_0x564af1(0x2a3)] == 0x0) {
                        let _0x38fc3a = _0x18e71c(_0x4e3444);
                        _0x38fc3a[_0x564af1(0x1c5)](function (_0x2dedfa) {
                            const _0x3dd0f3 = _0x564af1;
                            _0x3d51ed(this)[_0x3dd0f3(0x334)]()[_0x3dd0f3(0x2a3)] > 0x0 && (_0x3f1eb2 = _0x3957a5['data']['reels_media'][0x0][_0x3dd0f3(0x37d)][_0x2dedfa][_0x3dd0f3(0x3d8)], _0x23332f['RENAME_PUBLISH_DATE'] && (_0x5e8a72 = _0x3957a5['data'][_0x3dd0f3(0x286)][0x0]['items'][_0x2dedfa][_0x3dd0f3(0x3f6)], _0x340b34 = _0x3957a5[_0x3dd0f3(0x1bb)]['reels_media'][0x0][_0x3dd0f3(0x37d)][_0x2dedfa]['id']));
                        }), _0x3f1eb2[_0x564af1(0x2a3)] == 0x0 && (_0x3d51ed(_0x564af1(0x216))[_0x564af1(0x1c5)](function (_0x43570d) {
                            const _0x546b55 = _0x564af1;
                            _0x3d51ed(this)[_0x546b55(0x346)](_0x546b55(0x1eb)) && (_0x3d51ed(this)[_0x546b55(0x334)]()[_0x546b55(0x2a3)] > 0x0 && (_0x3f1eb2 = _0x3957a5[_0x546b55(0x1bb)][_0x546b55(0x286)][0x0][_0x546b55(0x37d)][_0x43570d][_0x546b55(0x3d8)], _0x23332f['RENAME_PUBLISH_DATE'] && (_0x5e8a72 = _0x3957a5[_0x546b55(0x1bb)]['reels_media'][0x0][_0x546b55(0x37d)][_0x43570d]['taken_at_timestamp'], _0x340b34 = _0x3957a5[_0x546b55(0x1bb)][_0x546b55(0x286)][0x0][_0x546b55(0x37d)][_0x43570d]['id'])));
                        }), _0x3d51ed(_0x564af1(0x3fa))[_0x564af1(0x1c5)](function (_0x4e065a) {
                            const _0x55716f = _0x564af1;
                            _0x3d51ed(this)[_0x55716f(0x334)]()['hasClass'](_0x55716f(0x288)) && (_0x3f1eb2 = _0x3957a5[_0x55716f(0x1bb)][_0x55716f(0x286)][0x0]['items'][_0x4e065a][_0x55716f(0x3d8)], _0x23332f[_0x55716f(0x366)] && (_0x5e8a72 = _0x3957a5[_0x55716f(0x1bb)]['reels_media'][0x0][_0x55716f(0x37d)][_0x4e065a][_0x55716f(0x3f6)], _0x340b34 = _0x3957a5[_0x55716f(0x1bb)][_0x55716f(0x286)][0x0][_0x55716f(0x37d)][_0x4e065a]['id']));
                        }));
                    }
                }
                _0x33c60c(_0x3f1eb2, _0x4e3444, _0x564af1(0x2d3), _0x5e8a72, _0x1b8cfd, _0x340b34), _0x5ce567[_0x564af1(0x321)] = ![], _0xa1a81a(![]);
            } else {
                if (_0x3d51ed('body\x20>\x20div\x20div.IG_DWSTORY')['parent']()[_0x564af1(0x3eb)](_0x564af1(0x377))[_0x564af1(0x2a3)]) {
                    let _0x4ec336 = null;
                    _0x3d51ed('body\x20>\x20div\x20section._ac0a')[_0x564af1(0x2a3)] > 0x0 ? _0x4ec336 = _0x3d51ed(_0x564af1(0x3e7)) : (_0x4ec336 = _0x3d51ed('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x4ec336['css'](_0x564af1(0x2e3), _0x564af1(0x219)));
                    _0x4ec336[_0x564af1(0x2a3)] === 0x0 && (_0x4ec336 = _0x3d51ed(_0x564af1(0x195))[_0x564af1(0x371)]()[_0x564af1(0x371)]()[_0x564af1(0x371)]()[_0x564af1(0x3eb)](_0x564af1(0x23a)), _0x4ec336[_0x564af1(0x3b6)](_0x564af1(0x2e3), _0x564af1(0x219)));
                    _0x4ec336['length'] === 0x0 && (_0x4ec336 = _0x3d51ed(_0x564af1(0x195))[_0x564af1(0x371)]()[_0x564af1(0x371)]()[_0x564af1(0x371)]()[_0x564af1(0x3eb)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x4ec336['css'](_0x564af1(0x2e3), _0x564af1(0x219)));
                    if (_0x4ec336[_0x564af1(0x2a3)] === 0x0) {
                        let _0x1bf794 = _0x3d51ed(_0x564af1(0x3e3)), _0x49e489 = 0x0;
                        _0x1bf794[_0x564af1(0x1c5)](function () {
                            const _0x717149 = _0x564af1;
                            _0x3d51ed(this)[_0x717149(0x395)]() > _0x49e489 && (_0x49e489 = _0x3d51ed(this)[_0x717149(0x395)](), _0x4ec336 = _0x3d51ed(this)[_0x717149(0x334)](_0x717149(0x292))[_0x717149(0x2e6)]());
                        });
                    }
                    _0x4ec336 != null && (_0x4ec336['first']()[_0x564af1(0x3b6)](_0x564af1(0x2e3), 'relative'), _0x4ec336[_0x564af1(0x2e6)]()[_0x564af1(0x1d8)](_0x564af1(0x290) + _0x8c26c7('THUMBNAIL_INTRO') + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x1de8e0[_0x564af1(0x22e)] + _0x564af1(0x26f)));
                }
            }
        }
        function _0x5f3158(_0x37f40a) {
            return new Promise((_0x839248, _0x235a25) => {
                const _0x7e90e3 = a0_0xf561;
                let _0xe2e1af = _0x7e90e3(0x19b) + _0x37f40a + _0x7e90e3(0x206);
                GM_xmlhttpRequest({
                    'method': _0x7e90e3(0x3bc),
                    'url': _0xe2e1af,
                    'onload': function (_0x49c790) {
                        const _0x2e0fda = _0x7e90e3;
                        try {
                            let _0x15dcc8 = JSON['parse'](_0x49c790[_0x2e0fda(0x24a)]);
                            _0x839248(_0x15dcc8);
                        } catch (_0x3b70b2) {
                            _0x596d98(_0x2e0fda(0x277), _0x2e0fda(0x2b6), _0x3b70b2[_0x2e0fda(0x376)]), _0x235a25(_0x3b70b2);
                        }
                    },
                    'onerror': function (_0x485b84) {
                        const _0x117b62 = _0x7e90e3;
                        _0x596d98(_0x117b62(0x277), _0x117b62(0x2b6), _0x485b84), _0x235a25(_0x485b84);
                    }
                });
            });
        }
        function _0x557ea6(_0x51e816) {
            return new Promise((_0x583cfd, _0x60e6be) => {
                const _0x460370 = a0_0xf561;
                let _0x5e833c = _0x460370(0x21c) + _0x51e816 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': _0x460370(0x3bc),
                    'url': _0x5e833c,
                    'onload': function (_0x233b04) {
                        const _0x2b8126 = _0x460370;
                        try {
                            let _0x1841a0 = JSON[_0x2b8126(0x1b7)](_0x233b04['response']);
                            _0x596d98(_0x2b8126(0x315), _0x1841a0), _0x583cfd(_0x1841a0);
                        } catch (_0xd8ef6d) {
                            _0x596d98(_0x2b8126(0x315), _0x2b8126(0x2b6), _0xd8ef6d[_0x2b8126(0x376)]), _0x60e6be(_0xd8ef6d);
                        }
                    },
                    'onerror': function (_0x18ee7d) {
                        const _0x4522fa = _0x460370;
                        _0x596d98(_0x4522fa(0x315), _0x4522fa(0x2b6), _0x18ee7d), _0x60e6be(_0x18ee7d);
                    }
                });
            });
        }
        function _0x6128d9(_0x46c73d) {
            return new Promise((_0x1dd723, _0xa5ab30) => {
                const _0x5e03dd = a0_0xf561;
                let _0x1a3a51 = _0x5e03dd(0x2a9) + _0x46c73d;
                GM_xmlhttpRequest({
                    'method': _0x5e03dd(0x3bc),
                    'url': _0x1a3a51,
                    'onload': function (_0x4fb33d) {
                        const _0x2d2b98 = _0x5e03dd;
                        let _0x39b67f = JSON['parse'](_0x4fb33d[_0x2d2b98(0x24a)]), _0x414058 = null;
                        _0x39b67f[_0x2d2b98(0x33e)]['forEach'](_0x4f470b => {
                            const _0x369c71 = _0x2d2b98;
                            _0x4f470b[_0x369c71(0x345)][_0x369c71(0x20b)]?.[_0x369c71(0x3e2)]() === _0x46c73d?.['toLowerCase']() && (_0x414058 = _0x4f470b);
                        }), _0x414058 != null ? (_0x596d98('getUserId()', _0x414058), _0x1dd723(_0x414058)) : _0x42a0fa(_0x46c73d)[_0x2d2b98(0x1d0)](_0x3bd988 => {
                            _0x1dd723(_0x3bd988);
                        })[_0x2d2b98(0x39a)](_0x59a295 => {
                            alert('Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()');
                        });
                    },
                    'onerror': function (_0x583e3f) {
                        const _0x30f486 = _0x5e03dd;
                        _0x596d98(_0x30f486(0x384), 'reject', _0x583e3f), _0xa5ab30(_0x583e3f);
                    }
                });
            });
        }
        function _0x42a0fa(_0x4651be) {
            return new Promise((_0xbf1b4, _0x59144b) => {
                const _0x2b39ff = a0_0xf561;
                let _0x2e5a9c = _0x2b39ff(0x401) + _0x4651be;
                GM_xmlhttpRequest({
                    'method': _0x2b39ff(0x3bc),
                    'url': _0x2e5a9c,
                    'headers': { 'X-IG-App-ID': _0x9ae2ed() },
                    'onload': function (_0x21d42e) {
                        const _0x4e5a49 = _0x2b39ff;
                        try {
                            let _0x4d1d83 = JSON['parse'](_0x21d42e[_0x4e5a49(0x24a)]), _0x2eafa1 = _0x4d1d83?.[_0x4e5a49(0x1bb)]?.[_0x4e5a49(0x345)];
                            if (_0x2eafa1 != null) {
                                let _0x2d7db8 = _0x4d1d83?.['data'];
                                _0x2d7db8[_0x4e5a49(0x345)]['pk'] = _0x2d7db8['user']['id'], _0x596d98('getUserIdWithAgent()', _0x4d1d83), _0xbf1b4(_0x2d7db8);
                            } else
                                _0x596d98(_0x4e5a49(0x1e1), 'reject', _0x4e5a49(0x1d4)), _0x59144b(_0x4e5a49(0x1d4));
                        } catch (_0x2e988c) {
                            _0x596d98(_0x4e5a49(0x1e1), _0x4e5a49(0x2b6), _0x2e988c[_0x4e5a49(0x376)]), _0x59144b(_0x2e988c);
                        }
                    },
                    'onerror': function (_0x460c9d) {
                        const _0x15c033 = _0x2b39ff;
                        _0x596d98(_0x15c033(0x1e1), 'reject', _0x460c9d), _0x59144b(_0x460c9d);
                    }
                });
            });
        }
        function _0xb81f34(_0x5aa9ce) {
            return new Promise((_0x5b831f, _0x87b90b) => {
                const _0x4d6374 = a0_0xf561;
                let _0x253bbf = _0x4d6374(0x226) + _0x5aa9ce + _0x4d6374(0x3ce);
                GM_xmlhttpRequest({
                    'method': _0x4d6374(0x3bc),
                    'url': _0x253bbf,
                    'headers': { 'User-Agent': _0x4d6374(0x29f) },
                    'onload': function (_0x4fa2ce) {
                        const _0x54cc37 = _0x4d6374;
                        try {
                            let _0x98c06c = JSON[_0x54cc37(0x1b7)](_0x4fa2ce[_0x54cc37(0x24a)]);
                            _0x98c06c['status'] !== 'ok' ? (_0x596d98(_0x54cc37(0x24e), 'reject', _0x98c06c), _0x87b90b(_0x54cc37(0x1cb))) : (_0x596d98(_0x54cc37(0x24e), _0x98c06c), _0x5b831f(_0x98c06c[_0x54cc37(0x345)][_0x54cc37(0x355)]?.[_0x54cc37(0x1b1)]));
                        } catch (_0x642503) {
                            _0x596d98('getUserHighSizeProfile()', _0x54cc37(0x2b6), _0x642503), _0x87b90b(_0x642503);
                        }
                    },
                    'onerror': function (_0xeba8df) {
                        const _0x30fdaa = _0x4d6374;
                        _0x596d98(_0x30fdaa(0x24e), _0x30fdaa(0x2b6), _0xeba8df), _0x87b90b(_0xeba8df);
                    }
                });
            });
        }
        function _0x426762(_0x127b61) {
            return new Promise((_0x15aa8e, _0xae7008) => {
                const _0x44d230 = a0_0xf561;
                if (!_0x127b61)
                    _0xae7008(_0x44d230(0x3d7));
                let _0x322358 = _0x127b61, _0x30a9d4 = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x322358 + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x44d230(0x3bc),
                    'url': _0x30a9d4,
                    'onload': function (_0x3ab9b2) {
                        const _0x5d087f = _0x44d230;
                        try {
                            let _0x3344a5 = JSON[_0x5d087f(0x1b7)](_0x3ab9b2[_0x5d087f(0x24a)]);
                            _0x596d98(_0x5d087f(0x1a8), _0x3344a5), _0x15aa8e(_0x3344a5[_0x5d087f(0x1bb)]['shortcode_media'][_0x5d087f(0x2c4)][_0x5d087f(0x20b)]);
                        } catch (_0x386f47) {
                            _0x596d98('getPostOwner()', _0x5d087f(0x2b6), _0x386f47['message']), _0xae7008(_0x386f47);
                        }
                    },
                    'onerror': function (_0x369761) {
                        const _0x46c5df = _0x44d230;
                        _0x596d98(_0x46c5df(0x1a8), _0x46c5df(0x2b6), _0x369761), _0xae7008(_0x369761);
                    }
                });
            });
        }
        function _0x19f2fc(_0x54e32a) {
            return new Promise((_0x215c4a, _0x338bea) => {
                const _0xdc9481 = a0_0xf561;
                if (!_0x54e32a)
                    _0x338bea(_0xdc9481(0x3d7));
                let _0x441c3c = _0x54e32a, _0x1ce80f = _0xdc9481(0x349) + _0x441c3c + _0xdc9481(0x3d0);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x1ce80f,
                    'headers': { 'User-Agent': _0xdc9481(0x29f) },
                    'onload': function (_0x5a21af) {
                        const _0x322ba1 = _0xdc9481;
                        try {
                            let _0x4e7c5a = JSON[_0x322ba1(0x1b7)](_0x5a21af['response']);
                            _0x596d98(_0x4e7c5a), _0x4e7c5a[_0x322ba1(0x261)] === 'fail' ? (_0x596d98(_0x322ba1(0x36f), _0x322ba1(0x1fc), _0x441c3c), _0x531f80(_0x441c3c)[_0x322ba1(0x1d0)](_0x2f7141 => {
                                const _0x2c645f = _0x322ba1;
                                _0x215c4a({
                                    'type': _0x2c645f(0x3fd),
                                    'data': _0x2f7141[_0x2c645f(0x1fb)][_0x2c645f(0x37d)][0x0]
                                });
                            })[_0x322ba1(0x39a)](_0x5564b5 => {
                                _0x338bea(_0x5564b5);
                            })) : _0x215c4a({
                                'type': _0x322ba1(0x2dc),
                                'data': _0x4e7c5a[_0x322ba1(0x1bb)]
                            });
                        } catch (_0x4728a2) {
                            _0x596d98(_0x322ba1(0x37a), _0x322ba1(0x2b6), _0x4728a2['message']), _0x338bea(_0x4728a2);
                        }
                    },
                    'onerror': function (_0x7500bd) {
                        const _0x69f0ac = _0xdc9481;
                        _0x596d98(_0x69f0ac(0x37a), _0x69f0ac(0x2b6), _0x7500bd), _0x338bea(_0x7500bd);
                    }
                });
            });
        }
        function _0x531f80(_0x379c67) {
            return new Promise((_0x40f7cf, _0x97e512) => {
                const _0x20ae8a = a0_0xf561;
                if (!_0x379c67)
                    _0x97e512(_0x20ae8a(0x3d7));
                let _0x3787a8 = _0x379c67, _0x1466d0 = _0x20ae8a(0x396) + _0x3787a8 + _0x20ae8a(0x208);
                GM_xmlhttpRequest({
                    'method': _0x20ae8a(0x3bc),
                    'url': _0x1466d0,
                    'headers': {
                        'User-Agent': _0x20ae8a(0x29f),
                        'X-IG-App-ID': _0x9ae2ed()
                    },
                    'onload': function (_0x421533) {
                        const _0x1487e2 = _0x20ae8a;
                        try {
                            let _0x10f20f = JSON['parse'](_0x421533[_0x1487e2(0x24a)]);
                            _0x596d98(_0x10f20f), _0x10f20f[_0x1487e2(0x261)] === _0x1487e2(0x351) ? (alert('getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a' + _0x10f20f[_0x1487e2(0x376)] + ':\x20' + _0x10f20f[_0x1487e2(0x40e)]), _0x596d98(_0x1487e2(0x1a6) + _0x10f20f[_0x1487e2(0x376)] + ':\x20' + _0x10f20f[_0x1487e2(0x40e)]), _0x97e512(_0x421533)) : (_0x596d98(_0x1487e2(0x33f), _0x10f20f[_0x1487e2(0x1bb)]), _0x40f7cf(_0x10f20f[_0x1487e2(0x1bb)]));
                        } catch (_0x5b4cca) {
                            _0x596d98(_0x1487e2(0x33f), _0x1487e2(0x2b6), _0x5b4cca[_0x1487e2(0x376)]), _0x97e512(_0x5b4cca);
                        }
                    },
                    'onerror': function (_0xf1f385) {
                        const _0x49e4fa = _0x20ae8a;
                        _0x596d98(_0x49e4fa(0x33f), 'reject', _0xf1f385), _0x97e512(_0xf1f385);
                    }
                });
            });
        }
        function _0x3a25d4(_0x3ae33c) {
            return new Promise((_0x3ff5c5, _0x30f561) => {
                const _0x589a65 = a0_0xf561;
                let _0x45c092 = _0x589a65(0x400) + _0x3ae33c + _0x589a65(0x3ce);
                if (_0x3ae33c == null) {
                    alert(_0x589a65(0x31b)), _0x596d98(_0x589a65(0x259), 'reject', 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.'), _0xa1a81a(![]), _0x30f561(-0x1);
                    return;
                }
                if (_0x9ae2ed() == null) {
                    alert(_0x589a65(0x245)), _0x596d98(_0x589a65(0x259), _0x589a65(0x2b6), _0x589a65(0x245)), _0xa1a81a(![]), _0x30f561(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x45c092,
                    'headers': {
                        'User-Agent': window[_0x589a65(0x329)][_0x589a65(0x271)],
                        'Accept': _0x589a65(0x2b8),
                        'X-IG-App-ID': _0x9ae2ed()
                    },
                    'onload': function (_0x18619f) {
                        const _0x16fbf5 = _0x589a65;
                        if (_0x18619f[_0x16fbf5(0x391)] == _0x45c092) {
                            let _0x1d8044 = JSON[_0x16fbf5(0x1b7)](_0x18619f[_0x16fbf5(0x24a)]);
                            _0x596d98(_0x16fbf5(0x259), _0x1d8044), _0x3ff5c5(_0x1d8044);
                        } else {
                            let _0x29579b = new URL(_0x18619f['finalUrl']);
                            _0x29579b['pathname']['startsWith'](_0x16fbf5(0x275)) ? (_0x596d98(_0x16fbf5(0x259), _0x16fbf5(0x2b6), _0x16fbf5(0x1ff)), alert(_0x16fbf5(0x1ff))) : (_0x596d98(_0x16fbf5(0x259), _0x16fbf5(0x2b6), _0x16fbf5(0x344) + _0x18619f['finalUrl'] + '\x22'), alert('Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x18619f['finalUrl'] + '\x22')), _0xa1a81a(![]), _0x30f561(-0x1);
                        }
                    },
                    'onerror': function (_0x24d3ac) {
                        const _0x4bb442 = _0x589a65;
                        _0x596d98(_0x4bb442(0x259), _0x4bb442(0x2b6), _0x24d3ac), _0x3ff5c5(_0x24d3ac);
                    }
                });
            });
        }
        function _0xcd2a16(_0x322027) {
            const _0x24c96a = _0x4000f3;
            let _0x28e16f = new URL(_0x322027), _0x3e225c = _0x28e16f?.[_0x24c96a(0x2bf)]?.[_0x24c96a(0x1fd)](_0x24c96a(0x228))?.['split']('.')['at'](0x0);
            return _0x3e225c ? atob(_0x3e225c) : null;
        }
        function _0x9ae2ed() {
            let _0x137c4f = null;
            return _0x3d51ed('script[type=\x22application/json\x22]')['each'](function () {
                const _0x3d108d = a0_0xf561, _0x2be9f2 = /"APP_ID":"([0-9]+)"/ig, _0x204515 = _0x3d51ed(this)[_0x3d108d(0x3ed)]()[_0x3d108d(0x37c)](_0x2be9f2);
                _0x204515 != null && _0x137c4f == null && (_0x137c4f = [..._0x3d51ed(this)[_0x3d108d(0x3ed)]()[_0x3d108d(0x1a1)](_0x2be9f2)]);
            }), _0x137c4f ? _0x137c4f['at'](0x0)['at'](-0x1) : null;
        }
        function _0xa1a81a(_0x2dea4d) {
            const _0x47a18e = _0x4000f3;
            _0x2dea4d ? (_0x3d51ed(_0x47a18e(0x1f8))['removeClass'](_0x47a18e(0x1e5)), _0x3d51ed(_0x47a18e(0x1f8))[_0x47a18e(0x3b6)]('z-index', '20000')) : (_0x3d51ed(_0x47a18e(0x1f8))[_0x47a18e(0x2f1)](_0x47a18e(0x1e5)), _0x3d51ed(_0x47a18e(0x1f8))[_0x47a18e(0x3b6)]('z-index', ''));
        }
        function _0x18e71c(_0x1b8554) {
            const _0xd8efd3 = _0x4000f3;
            let _0x66e0eb = _0x3d51ed(_0xd8efd3(0x257) + _0x1b8554 + '\x22]\x20span')[_0xd8efd3(0x34f)](function () {
                const _0x4d7acc = _0xd8efd3;
                return _0x3d51ed(this)[_0x4d7acc(0x334)]()[_0x4d7acc(0x2a3)] === 0x0 && _0x3d51ed(this)[_0x4d7acc(0x3eb)](_0x4d7acc(0x311))[_0x4d7acc(0x2a3)] === 0x0 && _0x3d51ed(this)[_0x4d7acc(0x3ed)]()?.['toLowerCase']() === _0x1b8554?.[_0x4d7acc(0x3e2)]();
            })[_0xd8efd3(0x38e)](_0xd8efd3(0x3de))[_0xd8efd3(0x34f)](function () {
                const _0x31d969 = _0xd8efd3;
                return _0x3d51ed(this)[_0x31d969(0x3ed)]()?.['toLowerCase']() !== _0x1b8554?.[_0x31d969(0x3e2)]();
            })[_0xd8efd3(0x34f)](function () {
                const _0x4399de = _0xd8efd3;
                return _0x3d51ed(this)['children']()[_0x4399de(0x2a3)] > 0x1;
            })[_0xd8efd3(0x2e6)]();
            return _0x66e0eb[_0xd8efd3(0x2a3)] === 0x0 && (_0x66e0eb = _0x3d51ed(_0xd8efd3(0x257) + _0x1b8554 + '\x22]')['filter'](function () {
                const _0x4bf4e0 = _0xd8efd3;
                return _0x3d51ed(this)[_0x4bf4e0(0x3eb)](_0x4bf4e0(0x28d))[_0x4bf4e0(0x2a3)] > 0x0;
            })[_0xd8efd3(0x38e)](_0xd8efd3(0x3de))[_0xd8efd3(0x34f)](function () {
                const _0x56fcb8 = _0xd8efd3;
                return _0x3d51ed(this)[_0x56fcb8(0x3ed)]()?.[_0x56fcb8(0x3e2)]() !== _0x1b8554?.[_0x56fcb8(0x3e2)]();
            })[_0xd8efd3(0x34f)](function () {
                const _0x23a899 = _0xd8efd3;
                return _0x3d51ed(this)[_0x23a899(0x334)]()[_0x23a899(0x2a3)] > 0x1;
            })['first']()), _0x66e0eb[_0xd8efd3(0x334)]()['filter'](function () {
                const _0x492f26 = _0xd8efd3;
                return _0x3d51ed(this)[_0x492f26(0x41a)]() < 0xa;
            })[_0xd8efd3(0x2e6)]()[_0xd8efd3(0x334)]();
        }
        function _0x43e82c(_0x29b8c6, _0x2de9cf) {
            const _0x18c8da = _0x4000f3;
            _0x3d51ed(_0x18c8da(0x316))[_0x18c8da(0x2a3)] ? (_0x3d51ed(_0x18c8da(0x268))[_0x18c8da(0x3ed)](_0x29b8c6 + '/' + _0x2de9cf), _0x29b8c6 >= _0x2de9cf && _0x3d51ed('.circle_wrapper')[_0x18c8da(0x307)](0xfa, function () {
                const _0x1dcac5 = _0x18c8da;
                _0x3d51ed(this)[_0x1dcac5(0x203)]();
            })) : _0x3d51ed(_0x18c8da(0x1dd))[_0x18c8da(0x1d8)](_0x18c8da(0x265) + _0x29b8c6 + '/' + _0x2de9cf + _0x18c8da(0x306));
        }
        function _0x3b48bd(_0x1e472a, _0x5e3d5b) {
            const _0x40ad83 = _0x4000f3;
            let _0x55a52f = _0x1e472a ? _0x40ad83(0x1bc) : '';
            _0x3d51ed('body')[_0x40ad83(0x1d8)](_0x40ad83(0x337) + _0x55a52f + _0x40ad83(0x2da)), _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')[_0x40ad83(0x1d8)](_0x40ad83(0x2f3) + _0x8c26c7(_0x40ad83(0x2fa)) + _0x40ad83(0x1ad) + GM_info['script'][_0x40ad83(0x3f7)] + '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x1de8e0['CLOSE'] + _0x40ad83(0x2b2)), _0x5e3d5b && (_0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')[_0x40ad83(0x1d8)]('<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>'), _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group')[_0x40ad83(0x1d8)]('<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>' + _0x8c26c7(_0x40ad83(0x3db)) + _0x40ad83(0x40f)), _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group')[_0x40ad83(0x1d8)]('<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>' + _0x8c26c7(_0x40ad83(0x358)) + _0x40ad83(0x40f)), _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')[_0x40ad83(0x1d8)](_0x40ad83(0x1e9) + _0x8c26c7(_0x40ad83(0x190)) + _0x40ad83(0x2d2)));
        }
        function _0x1348fa(_0x53567c) {
            const _0x2f36bb = _0x4000f3;
            _0x3d51ed(_0x2f36bb(0x29b))[_0x2f36bb(0x2a3)] && (_0x53567c ? _0x3d51ed(_0x2f36bb(0x29b))[_0x2f36bb(0x2f1)](_0x2f36bb(0x1bc)) : _0x3d51ed(_0x2f36bb(0x29b))[_0x2f36bb(0x2c5)](_0x2f36bb(0x1bc)));
        }
        function _0x33c60c(_0x32b078, _0x356e70, _0x150159, _0x1504a2, _0x1feb67, _0x41b655) {
            return new Promise(_0x31b28b => {
                setTimeout(() => {
                    const _0x1df1ac = a0_0xf561;
                    _0xa1a81a(!![]), fetch(_0x32b078)[_0x1df1ac(0x1d0)](_0x563eef => {
                        const _0x1a8c26 = _0x1df1ac;
                        return _0x563eef[_0x1a8c26(0x411)]()['then'](_0x6fcdf9 => {
                            _0xa1a81a(![]), _0x56abe2(_0x32b078, _0x6fcdf9, _0x356e70, _0x150159, _0x1504a2, _0x1feb67, _0x41b655), _0x31b28b(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x56abe2(_0x5ed0c9, _0x438e5e, _0x2cc5d5, _0x134901, _0xb2a65e, _0x5c0df9, _0x2d9c2c) {
            const _0x2bdde1 = _0x4000f3;
            _0xb2a65e = parseInt(_0xb2a65e['toString']()[_0x2bdde1(0x340)](0xd, '0'));
            _0x23332f['RENAME_PUBLISH_DATE'] && (_0xb2a65e = parseInt(_0xb2a65e[_0x2bdde1(0x3e6)]()[_0x2bdde1(0x340)](0xd, '0')));
            const _0x19435d = new Date(_0xb2a65e), _0x2b4d8b = document[_0x2bdde1(0x224)]('a'), _0x1ab4b9 = new URL(_0x5ed0c9)['pathname']['split']('/')['at'](-0x1)['split']('.')[_0x2bdde1(0x1a3)](0x0, -0x1)[_0x2bdde1(0x364)]('.'), _0x2bfd5c = _0x19435d[_0x2bdde1(0x414)]()[_0x2bdde1(0x3e6)](), _0x3c54b9 = (_0x19435d[_0x2bdde1(0x410)]() + 0x1)['toString']()['padStart'](0x2, '0'), _0x2e31fe = _0x19435d['getDate']()[_0x2bdde1(0x3e6)]()[_0x2bdde1(0x1ab)](0x2, '0'), _0x60c7b6 = _0x19435d[_0x2bdde1(0x413)]()[_0x2bdde1(0x3e6)]()[_0x2bdde1(0x1ab)](0x2, '0'), _0x5832cb = _0x19435d[_0x2bdde1(0x1e4)]()['toString']()[_0x2bdde1(0x1ab)](0x2, '0'), _0x3106bb = _0x19435d[_0x2bdde1(0x1b3)]()[_0x2bdde1(0x3e6)]()[_0x2bdde1(0x1ab)](0x2, '0');
            var _0x25dd92 = _0x5ce567[_0x2bdde1(0x2b4)][_0x2bdde1(0x37e)](), _0xf2d5a2 = _0x2d9c2c ?? '', _0x4a6033 = {
                    '%USERNAME%': _0x2cc5d5,
                    '%SOURCE_TYPE%': _0x134901,
                    '%SHORTCODE%': _0xf2d5a2,
                    '%YEAR%': _0x2bfd5c,
                    '%2-YEAR%': _0x2bfd5c[_0x2bdde1(0x20d)](-0x2),
                    '%MONTH%': _0x3c54b9,
                    '%DAY%': _0x2e31fe,
                    '%HOUR%': _0x60c7b6,
                    '%MINUTE%': _0x5832cb,
                    '%SECOND%': _0x3106bb,
                    '%ORIGINAL_NAME%': _0x1ab4b9,
                    '%ORIGINAL_NAME_FIRST%': _0x1ab4b9[_0x2bdde1(0x1aa)]('_')['at'](0x0)
                };
            _0x25dd92 = _0x25dd92['replace'](/%[\w\-]+%/g, function (_0x48cdf3) {
                return _0x4a6033[_0x48cdf3] || _0x48cdf3;
            });
            const _0x2063e1 = _0x2cc5d5 + '_' + _0x1ab4b9 + '.' + _0x5c0df9;
            _0x2b4d8b[_0x2bdde1(0x29c)] = URL['createObjectURL'](_0x438e5e), _0x2b4d8b[_0x2bdde1(0x22f)]('download', _0x23332f[_0x2bdde1(0x3bf)] ? _0x25dd92 + '.' + _0x5c0df9 : _0x2063e1), _0x2b4d8b[_0x2bdde1(0x335)](), _0x2b4d8b[_0x2bdde1(0x203)]();
        }
        async function _0x346ec6(_0x5e5841, _0x56d948) {
            const _0x2dfccc = _0x4000f3;
            let _0x222490 = new Date()[_0x2dfccc(0x231)](), _0x285ac0 = Math[_0x2dfccc(0x360)](_0x222490 / 0x3e8), _0x33ed63 = _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)](_0x2dfccc(0x28b)) ? _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)](_0x2dfccc(0x28b)) : _0x5ce567[_0x2dfccc(0x252)];
            !_0x33ed63 && _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)]('data-path') && (_0x596d98(_0x2dfccc(0x2a6), _0x3d51ed(_0x5e5841)['attr'](_0x2dfccc(0x1b8))), _0x33ed63 = await _0x426762(_0x3d51ed(_0x5e5841)['attr'](_0x2dfccc(0x35f)))[_0x2dfccc(0x39a)](_0x29000e => {
                const _0x3ac401 = _0x2dfccc;
                _0x596d98(_0x3ac401(0x2c0), _0x29000e[_0x3ac401(0x376)]);
            }), _0x33ed63 == null && (_0x33ed63 = _0x2dfccc(0x17b)));
            _0x23332f[_0x2dfccc(0x366)] && _0x3d51ed(_0x5e5841)['attr'](_0x2dfccc(0x2ec)) && (_0x285ac0 = parseInt(_0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)]('datetime')));
            if (_0x23332f['FORCE_RESOURCE_VIA_MEDIA']) {
                _0xa1a81a(!![]);
                let _0x17e0c9 = await _0x3a25d4(_0x3d51ed(_0x5e5841)['attr']('media-id'));
                _0xa1a81a(![]);
                if (_0x17e0c9[_0x2dfccc(0x261)] === 'ok') {
                    var _0x24933f = null;
                    _0x17e0c9[_0x2dfccc(0x37d)][0x0][_0x2dfccc(0x407)] ? _0x24933f = _0x17e0c9['items'][0x0]['video_versions'][0x0][_0x2dfccc(0x1b1)] : (_0x17e0c9['items'][0x0][_0x2dfccc(0x348)][_0x2dfccc(0x20c)][_0x2dfccc(0x28f)](function (_0x278b2d, _0x4ad71c) {
                        const _0x362b18 = _0x2dfccc;
                        let _0x6af47e = new URL(_0x278b2d['url'])[_0x362b18(0x2bf)][_0x362b18(0x1fd)](_0x362b18(0x1d2)), _0x4578f4 = new URL(_0x4ad71c[_0x362b18(0x1b1)])[_0x362b18(0x2bf)][_0x362b18(0x1fd)](_0x362b18(0x1d2));
                        if (_0x6af47e && _0x4578f4) {
                            if (_0x6af47e['length'] > _0x4578f4[_0x362b18(0x2a3)])
                                return 0x1;
                            if (_0x6af47e['length'] < _0x4578f4[_0x362b18(0x2a3)])
                                return -0x1;
                        } else {
                            if (_0x278b2d[_0x362b18(0x395)] < _0x4ad71c['width'])
                                return 0x1;
                            if (_0x278b2d[_0x362b18(0x395)] > _0x4ad71c[_0x362b18(0x395)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x24933f = _0x17e0c9['items'][0x0]['image_versions2']['candidates'][0x0][_0x2dfccc(0x1b1)]);
                    if (_0x56d948) {
                        let _0x317fbe = new URL(_0x24933f);
                        _0x317fbe[_0x2dfccc(0x1e7)] = _0x2dfccc(0x2e9), _0x238a4a(_0x317fbe['href']);
                    } else
                        _0x33c60c(_0x24933f, _0x33ed63, _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)]('data-name'), _0x285ac0, _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)](_0x2dfccc(0x25c)), _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)](_0x2dfccc(0x35f)));
                } else {
                    if (_0x23332f[_0x2dfccc(0x3aa)]) {
                        if (_0x56d948) {
                            let _0x306fcf = new URL(_0x3d51ed(_0x5e5841)['attr'](_0x2dfccc(0x1b8)));
                            _0x306fcf['host'] = 'scontent.cdninstagram.com', _0x238a4a(_0x306fcf['href']);
                        } else
                            _0x33c60c(_0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)]('data-href'), _0x33ed63, _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)](_0x2dfccc(0x1d7)), _0x285ac0, _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)]('data-type'), _0x3d51ed(_0x5e5841)['attr']('data-path'));
                    } else
                        alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x17e0c9['message']);
                    _0x596d98(_0x17e0c9);
                }
            } else
                _0x33c60c(_0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)](_0x2dfccc(0x1b8)), _0x33ed63, _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)](_0x2dfccc(0x1d7)), _0x285ac0, _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)](_0x2dfccc(0x25c)), _0x3d51ed(_0x5e5841)[_0x2dfccc(0x34d)]('data-path'));
        }
        function _0x236361() {
            const _0x54d1ee = _0x4000f3;
            for (let _0x547d73 of _0x5ce567['registerMenuIds']) {
                _0x596d98(_0x54d1ee(0x3d9), _0x547d73), GM_unregisterMenuCommand(_0x547d73);
            }
            _0x5ce567[_0x54d1ee(0x2e8)][_0x54d1ee(0x1f5)](GM_registerMenuCommand(_0x8c26c7(_0x54d1ee(0x2e2)), () => {
                _0x2a8a85();
            }, { 'accessKey': 'w' })), _0x5ce567[_0x54d1ee(0x2e8)]['push'](GM_registerMenuCommand(_0x8c26c7(_0x54d1ee(0x243)), () => {
                const _0x10ddfe = _0x54d1ee;
                GM_openInTab(_0x10ddfe(0x392), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x5ce567['registerMenuIds'][_0x54d1ee(0x1f5)](GM_registerMenuCommand(_0x8c26c7(_0x54d1ee(0x375)), () => {
                _0xa6add0();
            }, { 'accessKey': 'z' })), _0x5ce567[_0x54d1ee(0x2e8)][_0x54d1ee(0x1f5)](GM_registerMenuCommand(_0x8c26c7(_0x54d1ee(0x32f)), () => {
                _0x5692b8();
            }, { 'accessKey': 'f' })), _0x5ce567['registerMenuIds']['push'](GM_registerMenuCommand(_0x8c26c7(_0x54d1ee(0x27d)), () => {
                _0x3bb43c();
            }, { 'accessKey': 'c' })), _0x5ce567[_0x54d1ee(0x2e8)][_0x54d1ee(0x1f5)](GM_registerMenuCommand(_0x8c26c7(_0x54d1ee(0x294)), () => {
                _0x535df7();
            }, { 'accessKey': 'r' }));
        }
        function _0x1ad8eb(_0x5ed910) {
            const _0x12e84a = _0x4000f3;
            if (!_0x23332f[_0x12e84a(0x3b4)])
                return;
            const _0x52eb46 = GM_getValue('G_CHECK_TIMESTAMP') ?? new Date()[_0x12e84a(0x231)](), _0x5a574a = new Date()[_0x12e84a(0x231)]();
            _0x5a574a > parseInt(_0x52eb46) + _0x5ed910 * 0x3e8 && (GM_setValue(_0x12e84a(0x242), new Date()[_0x12e84a(0x231)]()), _0x3bb43c());
        }
        function _0x3bb43c() {
            const _0xef3d79 = _0x4000f3, _0x397b6b = GM_info[_0xef3d79(0x381)][_0xef3d79(0x3f7)], _0x6a4fa6 = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': _0xef3d79(0x3bc),
                'url': _0x6a4fa6,
                'onload': function (_0x58ff79) {
                    const _0x16b7e6 = _0xef3d79, _0x18d75e = _0x58ff79[_0x16b7e6(0x3b9)], _0x20883e = _0x18d75e[_0x16b7e6(0x37c)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x20883e && _0x20883e[0x1]) {
                        const _0x2383b7 = _0x20883e[0x1];
                        _0x596d98(_0x16b7e6(0x2d8), _0x397b6b, '|', _0x16b7e6(0x2f4), _0x2383b7), _0x2383b7 !== _0x397b6b && typeof this['updatenotification'] === _0x16b7e6(0x1d4) ? (this[_0x16b7e6(0x2ba)] = null, GM_notification({
                            'text': _0x8c26c7(_0x16b7e6(0x342)),
                            'title': _0x8c26c7(_0x16b7e6(0x17f)),
                            'tag': 'ig_helper_notice',
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x16b7e6(0x248),
                            'onclick': _0x5609eb => {
                                const _0x30913b = _0x16b7e6;
                                _0x5609eb?.['preventDefault']();
                                var _0xb596e5 = GM_openInTab(GM_info[_0x30913b(0x381)][_0x30913b(0x3d2)]);
                                setTimeout(() => {
                                    _0xb596e5['close']();
                                }, 0xfa);
                            }
                        })) : _0x596d98(_0x16b7e6(0x390));
                    } else
                        console[_0x16b7e6(0x229)](_0x16b7e6(0x32d));
                }
            });
        }
        function _0x2a8a85() {
            const _0x1299f5 = _0x4000f3;
            _0x3d51ed('.IG_POPUP_DIG')[_0x1299f5(0x203)](), _0x3b48bd(), _0x3d51ed(_0x1299f5(0x3fc))['text'](_0x1299f5(0x233)), _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div')[_0x1299f5(0x1d8)](_0x1299f5(0x17e));
            for (let _0x58a05d in _0x1a0f16) {
                _0x3d51ed(_0x1299f5(0x338))[_0x1299f5(0x1d8)](_0x1299f5(0x402) + _0x58a05d + '\x22\x20' + (_0x5ce567[_0x1299f5(0x416)] == _0x58a05d ? _0x1299f5(0x409) : '') + '>' + _0x1a0f16[_0x58a05d] + '</option>');
            }
            for (let _0x2569e6 in _0x23332f) {
                _0x3d51ed(_0x1299f5(0x180))[_0x1299f5(0x1d8)](_0x1299f5(0x2a2) + (_0x3d1b01[_0x1299f5(0x298)](_0x2569e6) ? '\x20child' : '') + _0x1299f5(0x1dc) + _0x8c26c7(_0x2569e6 + _0x1299f5(0x23b)) + _0x1299f5(0x2a8) + (_0x2569e6 + _0x1299f5(0x23b)) + _0x1299f5(0x2a1) + _0x2569e6 + '\x22>' + _0x8c26c7(_0x2569e6) + '</span>\x20<input\x20id=\x22' + _0x2569e6 + _0x1299f5(0x393) + (_0x23332f[_0x2569e6] === !![] ? _0x1299f5(0x3f2) : '') + _0x1299f5(0x31d)), _0x2569e6 === 'MODIFY_VIDEO_VOLUME' && _0x3d51ed(_0x1299f5(0x1fe) + _0x2569e6 + '\x22]')['parent'](_0x1299f5(0x327))['on'](_0x1299f5(0x333), function (_0x3864) {
                    const _0x5081e3 = _0x1299f5;
                    _0x3864['preventDefault'](), _0x3d51ed(this)[_0x5081e3(0x3eb)](_0x5081e3(0x341))['length'] === 0x0 && (_0x3d51ed(this)[_0x5081e3(0x1d8)](_0x5081e3(0x1a7)), _0x3d51ed(this)[_0x5081e3(0x334)](_0x5081e3(0x341))[_0x5081e3(0x1d8)](_0x5081e3(0x2d9) + _0x5ce567[_0x5081e3(0x205)] + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0x3d51ed(this)[_0x5081e3(0x334)]('#tempWrapper')[_0x5081e3(0x1d8)]('<input\x20value=\x22' + _0x5ce567[_0x5081e3(0x205)] + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x3d51ed(this)[_0x5081e3(0x334)]('#tempWrapper')['append'](_0x5081e3(0x253) + _0x1de8e0[_0x5081e3(0x2fa)] + _0x5081e3(0x26f)));
                }), _0x2569e6 === _0x1299f5(0x3bf) && _0x3d51ed(_0x1299f5(0x1fe) + _0x2569e6 + '\x22]')[_0x1299f5(0x371)](_0x1299f5(0x327))['on'](_0x1299f5(0x333), function (_0x45d4eb) {
                    const _0x3d8fa3 = _0x1299f5;
                    _0x45d4eb['preventDefault'](), _0x3d51ed(this)['find'](_0x3d8fa3(0x341))[_0x3d8fa3(0x2a3)] === 0x0 && (_0x3d51ed(this)[_0x3d8fa3(0x1d8)](_0x3d8fa3(0x1a7)), _0x3d51ed(this)[_0x3d8fa3(0x334)](_0x3d8fa3(0x341))[_0x3d8fa3(0x1d8)](_0x3d8fa3(0x27a) + _0x5ce567[_0x3d8fa3(0x2b4)] + _0x3d8fa3(0x3b0)), _0x3d51ed(this)['children']('#tempWrapper')[_0x3d8fa3(0x1d8)]('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x1de8e0[_0x3d8fa3(0x2fa)] + _0x3d8fa3(0x26f)));
                });
            }
        }
        function _0xa6add0() {
            const _0x453756 = _0x4000f3;
            _0x3d51ed(_0x453756(0x29b))[_0x453756(0x203)](), _0x3b48bd(), _0x3d51ed('.IG_POPUP_DIG\x20#post_info')[_0x453756(0x3ed)]('IG\x20Debug\x20DOM\x20Tree'), _0x3d51ed(_0x453756(0x180))[_0x453756(0x1d8)]('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x3d51ed(_0x453756(0x180))[_0x453756(0x1d8)](_0x453756(0x36e)), _0x3d51ed(_0x453756(0x2c2))['append'](_0x453756(0x330) + _0x8c26c7(_0x453756(0x1f2)) + _0x453756(0x267)), _0x3d51ed(_0x453756(0x2c2))[_0x453756(0x1d8)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>' + _0x8c26c7('SELECT_AND_COPY') + '</a></button>'), _0x3d51ed(_0x453756(0x2c2))[_0x453756(0x1d8)](_0x453756(0x280) + _0x8c26c7(_0x453756(0x187)) + _0x453756(0x1c9)), _0x3d51ed(_0x453756(0x2c2))['append'](_0x453756(0x303) + _0x8c26c7(_0x453756(0x1ee)) + _0x453756(0x267)), _0x3d51ed(_0x453756(0x2c2))[_0x453756(0x1d8)](_0x453756(0x2ea) + _0x8c26c7('REPORT_DISCORD') + _0x453756(0x267));
        }
        function _0x5692b8() {
            const _0xb671dc = _0x4000f3;
            _0x3d51ed(_0xb671dc(0x29b))[_0xb671dc(0x203)](), _0x3b48bd(), _0x3d51ed(_0xb671dc(0x3fc))['text'](_0xb671dc(0x369)), _0x3d51ed(_0xb671dc(0x180))[_0xb671dc(0x1d8)](_0xb671dc(0x36e)), _0x3d51ed(_0xb671dc(0x2c2))[_0xb671dc(0x1d8)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>' + _0x8c26c7('REPORT_FORK') + '</a></button>'), _0x3d51ed(_0xb671dc(0x2c2))['append'](_0xb671dc(0x303) + _0x8c26c7('REPORT_GITHUB') + _0xb671dc(0x267)), _0x3d51ed(_0xb671dc(0x2c2))[_0xb671dc(0x1d8)](_0xb671dc(0x2ea) + _0x8c26c7('REPORT_DISCORD') + '</a></button>');
        }
        function _0x238a4a(_0x286d90) {
            const _0x1b6e6b = _0x4000f3;
            var _0x4b931a = document[_0x1b6e6b(0x224)]('a');
            _0x4b931a[_0x1b6e6b(0x29c)] = _0x286d90, _0x4b931a[_0x1b6e6b(0x380)] = _0x1b6e6b(0x27e), document[_0x1b6e6b(0x1dd)]['appendChild'](_0x4b931a), _0x4b931a['click'](), _0x4b931a[_0x1b6e6b(0x203)]();
        }
        function _0x535df7() {
            const _0x43fc3e = _0x4000f3;
            clearInterval(_0x5ce567[_0x43fc3e(0x3a4)]), _0x5ce567[_0x43fc3e(0x2c3)]['forEach'](_0x1fa005 => {
                const _0x533b29 = _0x43fc3e;
                _0x1fa005[_0x533b29(0x214)][_0x533b29(0x3a9)](_0x22ced5 => {
                    const _0x217a24 = _0x533b29;
                    _0x3d51ed(_0x1fa005[_0x217a24(0x213)])[_0x217a24(0x354)]('click', _0x22ced5);
                });
            }), _0x5ce567[_0x43fc3e(0x2c3)] = [], _0x3d51ed(_0x43fc3e(0x2e1))['remove'](), _0x3d51ed('.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL')['remove'](), _0x3d51ed('[data-snig]')['removeAttr'](_0x43fc3e(0x383)), _0x5ce567['pageLoaded'] = ![], _0x5ce567[_0x43fc3e(0x1af)] = ![], _0x5ce567['currentURL'] = location[_0x43fc3e(0x29c)], _0x5ce567[_0x43fc3e(0x2fe)]['disconnect'](), _0x596d98('main\x20timer\x20re-register\x20completed');
        }
        function _0x596d98(..._0x4794a6) {
            const _0x2173a2 = _0x4000f3;
            var _0x401c23 = new Date();
            _0x5ce567[_0x2173a2(0x2ca)]['push']({
                'time': _0x401c23[_0x2173a2(0x231)](),
                'content': [..._0x4794a6]
            }), _0x5ce567[_0x2173a2(0x2ca)]['length'] > 0x3e8 && (_0x5ce567['GL_logger'] = [
                {
                    'time': _0x401c23['getTime'](),
                    'content': [_0x2173a2(0x3e5)]
                },
                ..._0x5ce567[_0x2173a2(0x2ca)]['slice'](-0x3e7)
            ]), console[_0x2173a2(0x1f3)]('[' + _0x401c23[_0x2173a2(0x1d5)]() + ']', ..._0x4794a6);
        }
        function _0x20095a() {
            const _0x3efc44 = _0x4000f3;
            for (let _0x1f5dd2 in _0x23332f) {
                GM_getValue(_0x1f5dd2) != null && typeof GM_getValue(_0x1f5dd2) === _0x3efc44(0x2d5) && (_0x23332f[_0x1f5dd2] = GM_getValue(_0x1f5dd2), _0x1f5dd2 === _0x3efc44(0x215) && GM_getValue(_0x1f5dd2) !== !![] && (_0x5ce567[_0x3efc44(0x205)] = 0x1));
            }
        }
        function _0x55d0d8(_0x1834b8, _0x2dd5f3, _0x444da7, _0x35ad94 = '') {
            const _0x4b2017 = _0x4000f3;
            _0x2dd5f3[_0x4b2017(0x3eb)]('div.volume_slider')[_0x4b2017(0x2a3)] === 0x0 ? (_0x2dd5f3['append'](_0x4b2017(0x1e2) + _0x35ad94 + _0x4b2017(0x3b0)), _0x2dd5f3[_0x4b2017(0x3eb)]('div.volume_slider')[_0x4b2017(0x1d8)](_0x4b2017(0x3f3) + _0x5ce567[_0x4b2017(0x205)] + '\x22\x20/></div>'), _0x2dd5f3[_0x4b2017(0x3eb)](_0x4b2017(0x220))[_0x4b2017(0x34d)](_0x4b2017(0x33a), _0x4b2017(0x2f7) + (_0x5ce567[_0x4b2017(0x205)] * 0x64 + '%')), _0x2dd5f3[_0x4b2017(0x3eb)](_0x4b2017(0x220))['on'](_0x4b2017(0x2e0), function () {
                const _0x396970 = _0x4b2017;
                var _0x9542a8 = _0x3d51ed(this)[_0x396970(0x1a9)]() * 0x64 + '%';
                _0x5ce567['videoVolume'] = _0x3d51ed(this)[_0x396970(0x1a9)](), GM_setValue(_0x396970(0x20e), _0x3d51ed(this)[_0x396970(0x1a9)]()), _0x3d51ed(this)['attr'](_0x396970(0x33a), _0x396970(0x2f7) + _0x9542a8), _0x1834b8[_0x396970(0x1c5)](function () {
                    const _0x6dc56c = _0x396970;
                    _0x596d98('(' + _0x444da7 + ')', 'video\x20volume\x20changed\x20#slider'), this['volume'] = _0x5ce567[_0x6dc56c(0x205)];
                });
            }), _0x2dd5f3[_0x4b2017(0x3eb)](_0x4b2017(0x220))['on']('mouseenter', function () {
                const _0x3e4de6 = _0x4b2017;
                var _0xefb067 = _0x5ce567[_0x3e4de6(0x205)] * 0x64 + '%';
                _0x3d51ed(this)[_0x3e4de6(0x34d)](_0x3e4de6(0x33a), _0x3e4de6(0x2f7) + _0xefb067), _0x3d51ed(this)['val'](_0x5ce567[_0x3e4de6(0x205)]), _0x1834b8[_0x3e4de6(0x1c5)](function () {
                    const _0x5da4eb = _0x3e4de6;
                    _0x596d98('(' + _0x444da7 + ')', _0x5da4eb(0x24d)), this[_0x5da4eb(0x3a6)] = _0x5ce567[_0x5da4eb(0x205)];
                });
            }), _0x2dd5f3[_0x4b2017(0x3eb)](_0x4b2017(0x2bd))['on'](_0x4b2017(0x335), function (_0x183181) {
                const _0x4467b8 = _0x4b2017;
                _0x183181[_0x4467b8(0x244)](), _0x183181[_0x4467b8(0x210)]();
            })) : _0x2dd5f3[_0x4b2017(0x3eb)]('div.volume_slider')['remove']();
        }
        function _0x51ea09(_0x4e78eb) {
            const _0x8b8d69 = _0x4000f3;
            _0x37e09d(), _0x3d51ed('body')[_0x8b8d69(0x1d8)]('<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>' + _0x1de8e0[_0x8b8d69(0x2fa)] + _0x8b8d69(0x1a0));
            const _0x3ddda9 = _0x3d51ed('#imageViewer'), _0x5cae3f = _0x3d51ed('#iv_header'), _0x16933d = _0x3d51ed(_0x8b8d69(0x387)), _0x6cb430 = _0x3d51ed(_0x8b8d69(0x33c));
            _0x6cb430['attr'](_0x8b8d69(0x185), _0x4e78eb), _0x3ddda9[_0x8b8d69(0x3b6)](_0x8b8d69(0x24f), 'flex');
            let _0x5afaad = 0.75, _0x157ce3 = 0x0, _0x435899 = 0x0, _0x368c36 = ![], _0x5957d1, _0x2c575c;
            _0x6cb430['on']('load', () => {
                const _0x2d17e1 = _0x8b8d69;
                _0x157ce3 = (window[_0x2d17e1(0x35e)] - _0x6cb430[0x0][_0x2d17e1(0x395)]) / 0x2, _0x435899 = (window[_0x2d17e1(0x359)] - _0x6cb430[0x0][_0x2d17e1(0x41a)]) / 0x2, _0x5248af();
            }), _0x6cb430['on'](_0x8b8d69(0x1e6), _0x21c5f4 => {
                const _0x2213de = _0x8b8d69;
                _0x21c5f4[_0x2213de(0x210)]();
            }), _0x6cb430['on'](_0x8b8d69(0x335), _0x2ff90f => {
                const _0x2b5154 = _0x8b8d69;
                _0x2ff90f[_0x2b5154(0x210)](), _0x2ff90f[_0x2b5154(0x244)]();
            }), _0x6cb430['on'](_0x8b8d69(0x2be), _0x360c0e => {
                const _0x881f83 = _0x8b8d69;
                _0x360c0e['preventDefault'](), _0x5afaad += _0x360c0e[_0x881f83(0x1d6)][_0x881f83(0x3fe)] > 0x0 ? -0.15 : 0.15, _0x5afaad = Math[_0x881f83(0x287)](Math[_0x881f83(0x258)](0.75, _0x5afaad), 0x5), _0x5248af();
            }), _0x6cb430['on']('mousedown', _0x1cd7ec => {
                const _0x572ebe = _0x8b8d69;
                _0x368c36 = !![], _0x5957d1 = _0x1cd7ec[_0x572ebe(0x32e)] - _0x157ce3, _0x2c575c = _0x1cd7ec[_0x572ebe(0x17c)] - _0x435899, _0x6cb430[_0x572ebe(0x3b6)](_0x572ebe(0x26d), _0x572ebe(0x3ea));
            }), _0x6cb430['on']('mouseup', () => {
                const _0xf3fe83 = _0x8b8d69;
                _0x368c36 = ![], _0x6cb430['css']('cursor', _0xf3fe83(0x39f));
            }), _0x3d51ed(document)['on'](_0x8b8d69(0x1a5), _0x598193 => {
                const _0x7d9e92 = _0x8b8d69;
                if (!_0x368c36)
                    return;
                _0x598193[_0x7d9e92(0x210)](), _0x157ce3 = _0x598193['pageX'] - _0x5957d1, _0x435899 = _0x598193[_0x7d9e92(0x17c)] - _0x2c575c, _0x5248af();
            }), _0x3ddda9['on'](_0x8b8d69(0x335), () => {
                _0x37e09d();
            }), _0x16933d['on'](_0x8b8d69(0x335), () => {
                _0x37e09d();
            }), _0x5cae3f['on'](_0x8b8d69(0x335), _0x46427a => {
                const _0x5440da = _0x8b8d69;
                _0x46427a[_0x5440da(0x210)](), _0x46427a['stopPropagation']();
            });
            function _0x5248af() {
                const _0x5053a1 = _0x8b8d69;
                _0x6cb430[_0x5053a1(0x3b6)](_0x5053a1(0x39c), _0x5053a1(0x34c) + _0x5afaad + ')'), _0x6cb430[_0x5053a1(0x3b6)](_0x5053a1(0x378), _0x157ce3 + 'px'), _0x6cb430['css'](_0x5053a1(0x3d6), _0x435899 + 'px');
            }
        }
        function _0x37e09d() {
            const _0x186403 = _0x4000f3;
            _0x3d51ed(_0x186403(0x305))['remove'](), _0x3d51ed(document)[_0x186403(0x354)]('mousemove.igHelper');
        }
        function _0xf2215d() {
            const _0x52b7b5 = _0x4000f3;
            var _0x4487b6 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x52b7b5(0x37b),
                        'NOTICE_UPDATE_CONTENT': _0x52b7b5(0x39d),
                        'CHECK_UPDATE': _0x52b7b5(0x3ec),
                        'CHECK_UPDATE_MENU': 'Checking\x20for\x20Updates',
                        'CHECK_UPDATE_INTRO': _0x52b7b5(0x1a2),
                        'RELOAD_SCRIPT': _0x52b7b5(0x3cc),
                        'DONATE': 'Donate',
                        'FEEDBACK': _0x52b7b5(0x309),
                        'IMAGE_VIEWER': 'Open\x20Image\x20In\x20Viewer',
                        'NEW_TAB': _0x52b7b5(0x29d),
                        'SHOW_DOM_TREE': _0x52b7b5(0x2f5),
                        'SELECT_AND_COPY': _0x52b7b5(0x191),
                        'DOWNLOAD_DOM_TREE': _0x52b7b5(0x1f6),
                        'REPORT_GITHUB': _0x52b7b5(0x227),
                        'REPORT_DISCORD': 'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
                        'REPORT_FORK': _0x52b7b5(0x326),
                        'DEBUG': _0x52b7b5(0x2e5),
                        'CLOSE': _0x52b7b5(0x3ac),
                        'ALL_CHECK': _0x52b7b5(0x1c4),
                        'BATCH_DOWNLOAD_SELECTED': _0x52b7b5(0x1c1),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x52b7b5(0x1b9),
                        'VID': 'Video',
                        'DW': _0x52b7b5(0x1fa),
                        'DW_ALL': _0x52b7b5(0x373),
                        'THUMBNAIL_INTRO': _0x52b7b5(0x239),
                        'LOAD_BLOB_ONE': _0x52b7b5(0x1cd),
                        'LOAD_BLOB_MULTIPLE': _0x52b7b5(0x30e),
                        'LOAD_BLOB_RELOAD': _0x52b7b5(0x39b),
                        'NO_CHECK_RESOURCE': _0x52b7b5(0x3ae),
                        'NO_VID_URL': _0x52b7b5(0x3b8),
                        'SETTING': _0x52b7b5(0x2ce),
                        'AUTO_RENAME': _0x52b7b5(0x1f4),
                        'RENAME_SHORTCODE': _0x52b7b5(0x3f8),
                        'RENAME_PUBLISH_DATE': _0x52b7b5(0x278),
                        'RENAME_LOCATE_DATE': _0x52b7b5(0x336),
                        'DISABLE_VIDEO_LOOPING': _0x52b7b5(0x2cd),
                        'HTML5_VIDEO_CONTROL': _0x52b7b5(0x35a),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x52b7b5(0x3c3),
                        'FORCE_FETCH_ALL_RESOURCES': _0x52b7b5(0x234),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x52b7b5(0x382),
                        'DIRECT_DOWNLOAD_ALL': _0x52b7b5(0x1c3),
                        'MODIFY_VIDEO_VOLUME': 'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
                        'SCROLL_BUTTON': _0x52b7b5(0x35b),
                        'FORCE_RESOURCE_VIA_MEDIA': _0x52b7b5(0x3bb),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x52b7b5(0x251),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x52b7b5(0x367),
                        'AUTO_RENAME_INTRO': _0x52b7b5(0x19d),
                        'RENAME_SHORTCODE_INTRO': _0x52b7b5(0x3cb),
                        'RENAME_PUBLISH_DATE_INTRO': _0x52b7b5(0x30c),
                        'RENAME_LOCATE_DATE_INTRO': _0x52b7b5(0x2f2),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x52b7b5(0x363),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x52b7b5(0x3ee),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x52b7b5(0x343),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x52b7b5(0x25f),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x52b7b5(0x3f9),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x52b7b5(0x29e),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x52b7b5(0x2d6),
                        'SCROLL_BUTTON_INTRO': _0x52b7b5(0x35c),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': 'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x52b7b5(0x32a),
                        'SKIP_VIEW_STORY_CONFIRM': 'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x52b7b5(0x3bd)
                    }
                }, _0x502d5a = Object[_0x52b7b5(0x273)]({}, _0x4487b6, _0x5ce567['locale']), _0x689fff = Object['keys'](_0x502d5a)[_0x52b7b5(0x28f)]()[_0x52b7b5(0x386)]((_0x3e48f0, _0x30068f) => {
                    return _0x3e48f0[_0x30068f] = _0x502d5a[_0x30068f], _0x3e48f0;
                }, {});
            return _0x689fff;
        }
        async function _0x4f0b9b(_0x5ac3ee) {
            return new Promise((_0xde082d, _0x20ebfe) => {
                const _0x572f89 = a0_0xf561;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x572f89(0x3dd) + _0x5ac3ee + _0x572f89(0x2fc),
                    'onload': function (_0x1aee69) {
                        const _0x1390ab = _0x572f89;
                        try {
                            let _0x174182 = JSON[_0x1390ab(0x1b7)](_0x1aee69[_0x1390ab(0x24a)]);
                            _0xde082d(_0x174182);
                        } catch (_0x447118) {
                            _0x20ebfe(_0x447118);
                        }
                    },
                    'onerror': function (_0x285d5f) {
                        const _0x5650c7 = _0x572f89;
                        _0x596d98(_0x5650c7(0x1ec), _0x5650c7(0x2b6), _0x285d5f), _0x20ebfe(_0x285d5f);
                    }
                });
            });
        }
        function _0x8c26c7(_0x71514e) {
            const _0x5c41fb = _0x4000f3, _0x23c3a5 = _0xf2215d();
            return _0x23c3a5[_0x5ce567[_0x5c41fb(0x416)]] != undefined && _0x23c3a5[_0x5ce567[_0x5c41fb(0x416)]][_0x71514e] != undefined ? _0x23c3a5[_0x5ce567[_0x5c41fb(0x416)]][_0x71514e] : _0x23c3a5[_0x5c41fb(0x241)][_0x71514e];
        }
        function _0x495abd() {
            const _0x3ed201 = _0x4000f3;
            _0x3d51ed('[data-ih-locale]')['each'](function () {
                const _0x5ba511 = a0_0xf561;
                _0x3d51ed(this)[_0x5ba511(0x3ed)](_0x8c26c7(_0x3d51ed(this)[_0x5ba511(0x34d)]('data-ih-locale')));
            }), _0x3d51ed(_0x3ed201(0x339))['each'](function () {
                const _0x2846f7 = _0x3ed201;
                _0x3d51ed(this)[_0x2846f7(0x34d)]('title', _0x8c26c7(_0x3d51ed(this)[_0x2846f7(0x34d)](_0x2846f7(0x194))));
            });
        }
        _0x3d51ed(function () {
            const _0x4c3360 = _0x4000f3;
            function _0x1c9d45(_0xe97119) {
                const _0x75306e = a0_0xf561;
                var _0x36bb6d = [];
                for (var _0x36eb45 of _0xe97119) {
                    _0x36bb6d['push']({
                        'tagName': _0x36eb45[_0x75306e(0x27c)],
                        'id': _0x36eb45['id'],
                        'className': _0x36eb45['className']
                    });
                }
                return _0x36bb6d;
            }
            function _0x171598() {
                const _0x318f62 = a0_0xf561;
                let _0x59dc4c = _0x3d51ed('div[id^=\x22mount\x22]')[0x0];
                var _0x308ba7 = '';
                _0x5ce567[_0x318f62(0x2ca)][_0x318f62(0x3a9)](_0x2f65a1 => {
                    const _0x57c9 = _0x318f62;
                    var _0x50b144 = JSON['stringify'](_0x2f65a1[_0x57c9(0x2ff)], function (_0x11c6ed, _0x41047e) {
                        const _0x57599d = _0x57c9;
                        if (Array[_0x57599d(0x2b1)](this)) {
                            if (typeof _0x41047e === _0x57599d(0x36a) && _0x41047e instanceof jQuery)
                                return _0x1c9d45(_0x41047e);
                            return _0x41047e;
                        } else
                            return _0x41047e;
                    }, '\x09');
                    _0x308ba7 += new Date(_0x2f65a1['time'])[_0x57c9(0x1d5)]() + ':\x20' + _0x50b144 + '\x0a';
                }), _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x318f62(0x3ed)]('Logger:\x0a' + _0x308ba7 + _0x318f62(0x26c) + location[_0x318f62(0x3e8)] + _0x318f62(0x3ab) + _0x59dc4c[_0x318f62(0x237)]);
            }
            _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), _0x4c3360(0x2b7), function () {
                _0x171598();
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x10032c = _0x4c3360;
                _0x3d51ed(_0x10032c(0x3c4))['select'](), document[_0x10032c(0x3c5)](_0x10032c(0x2ab));
            }), _0x3d51ed(_0x4c3360(0x1dd))['on']('click', _0x4c3360(0x3a7), function () {
                const _0x18ba18 = _0x4c3360;
                _0x3d51ed(_0x18ba18(0x3c4))[_0x18ba18(0x3ed)]()[_0x18ba18(0x2a3)] === 0x0 && _0x171598();
                var _0x3daecd = _0x3d51ed('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x18ba18(0x3ed)](), _0x3568be = document[_0x18ba18(0x224)]('a'), _0x2cc42c = new Blob([_0x3daecd], { 'type': 'text/plain' });
                _0x3568be[_0x18ba18(0x29c)] = URL[_0x18ba18(0x26b)](_0x2cc42c), _0x3568be['download'] = _0x18ba18(0x357) + new Date()[_0x18ba18(0x231)]() + '.txt', document[_0x18ba18(0x1dd)][_0x18ba18(0x331)](_0x3568be), _0x3568be[_0x18ba18(0x335)](), _0x3568be[_0x18ba18(0x203)]();
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG', function () {
                const _0x607623 = _0x4c3360;
                _0x3d51ed(this)['parent'](_0x607623(0x341))[_0x607623(0x2a3)] > 0x0 ? _0x3d51ed(this)[_0x607623(0x371)]('#tempWrapper')[_0x607623(0x307)](0xfa, function () {
                    const _0x5b61a6 = _0x607623;
                    _0x3d51ed(this)[_0x5b61a6(0x203)]();
                }) : _0x3d51ed(_0x607623(0x29b))[_0x607623(0x203)]();
            }), _0x3d51ed(window)['on'](_0x4c3360(0x3a1), function (_0x3887d0) {
                const _0x3c135d = _0x4c3360;
                _0x3887d0[_0x3c135d(0x419)] == '81' && _0x3887d0[_0x3c135d(0x1cc)] && (_0x3d51ed('.IG_POPUP_DIG')[_0x3c135d(0x203)](), _0x3887d0['preventDefault']()), _0x3887d0['which'] == '87' && _0x3887d0[_0x3c135d(0x1cc)] && (_0x2a8a85(), _0x3887d0['preventDefault']()), _0x3887d0[_0x3c135d(0x419)] == '90' && _0x3887d0['altKey'] && (_0xa6add0(), _0x3887d0[_0x3c135d(0x210)]()), _0x3887d0[_0x3c135d(0x419)] == '82' && _0x3887d0[_0x3c135d(0x1cc)] && (_0x535df7(), _0x3887d0['preventDefault']()), _0x3887d0[_0x3c135d(0x419)] == '83' && _0x3887d0[_0x3c135d(0x1cc)] && (location[_0x3c135d(0x29c)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x3d51ed(_0x3c135d(0x1b6))[_0x3c135d(0x2a3)] > 0x0 && _0x3d51ed('.IG_DWSTORY')?.[_0x3c135d(0x214)]('click'), location[_0x3c135d(0x29c)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x3d51ed('.IG_DWHISTORY')[_0x3c135d(0x2a3)] > 0x0 && _0x3d51ed(_0x3c135d(0x182))?.[_0x3c135d(0x214)]('click'), _0x3887d0['preventDefault']());
            }), _0x3d51ed('body')['on'](_0x4c3360(0x361), _0x4c3360(0x3b2), function () {
                const _0x1c2b12 = _0x4c3360;
                var _0x4463d2 = _0x3d51ed(this)[_0x1c2b12(0x34d)]('id');
                if (_0x4463d2 && _0x23332f[_0x4463d2] !== undefined) {
                    let _0x218ebe = _0x3d51ed(this)[_0x1c2b12(0x318)]('checked');
                    GM_setValue(_0x4463d2, _0x218ebe), _0x23332f[_0x4463d2] = _0x218ebe, console[_0x1c2b12(0x1f3)](_0x1c2b12(0x223), _0x4463d2, _0x218ebe);
                }
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), _0x4c3360(0x181), function (_0x14b811) {
                const _0xa3c87d = _0x4c3360;
                _0x3d51ed(this)[_0xa3c87d(0x3eb)](_0xa3c87d(0x341))[_0xa3c87d(0x2a3)] > 0x0 && _0x14b811[_0xa3c87d(0x210)]();
            }), _0x3d51ed(_0x4c3360(0x1dd))['on']('change', _0x4c3360(0x2df), function () {
                const _0x3c51ae = _0x4c3360;
                let _0x1db946 = _0x3d51ed(this)[_0x3c51ae(0x1a9)]();
                _0x3d51ed(this)['attr'](_0x3c51ae(0x1c0)) == _0x3c51ae(0x256) ? _0x3d51ed(this)[_0x3c51ae(0x1ba)]()[_0x3c51ae(0x1a9)](_0x1db946) : _0x3d51ed(this)[_0x3c51ae(0x3c0)]()[_0x3c51ae(0x1a9)](_0x1db946), _0x1db946 >= 0x0 && _0x1db946 <= 0x1 && (_0x5ce567[_0x3c51ae(0x205)] = _0x1db946, GM_setValue(_0x3c51ae(0x20e), _0x1db946));
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x2e0), _0x4c3360(0x2df), function () {
                const _0x14cefb = _0x4c3360;
                if (_0x3d51ed(this)[_0x14cefb(0x34d)](_0x14cefb(0x1c0)) == _0x14cefb(0x256)) {
                    let _0x2e85e5 = _0x3d51ed(this)[_0x14cefb(0x1a9)]();
                    _0x3d51ed(this)['next']()[_0x14cefb(0x1a9)](_0x2e85e5);
                } else {
                    let _0x54c315 = _0x3d51ed(this)[_0x14cefb(0x1a9)]();
                    _0x54c315 >= 0x0 && _0x54c315 <= 0x1 ? _0x3d51ed(this)[_0x14cefb(0x3c0)]()['val'](_0x54c315) : _0x54c315 < 0x0 ? _0x3d51ed(this)[_0x14cefb(0x1a9)](0x0) : _0x3d51ed(this)[_0x14cefb(0x1a9)](0x1);
                }
            }), _0x3d51ed('body')['on'](_0x4c3360(0x2e0), '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format', function () {
                const _0x461654 = _0x4c3360;
                GM_setValue(_0x461654(0x3be), _0x3d51ed(this)['val']()), _0x5ce567[_0x461654(0x2b4)] = _0x3d51ed(this)[_0x461654(0x1a9)]();
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), 'a[data-needed=\x22direct\x22]', function (_0x2f26aa) {
                _0x2f26aa['preventDefault'](), _0x346ec6(this);
            }), _0x3d51ed('body')['on'](_0x4c3360(0x335), '.IG_POPUP_DIG_BODY\x20.newTab', function () {
                const _0x2ce119 = _0x4c3360;
                if (_0x23332f[_0x2ce119(0x269)] && _0x23332f[_0x2ce119(0x221)])
                    _0x346ec6(_0x3d51ed(this)[_0x2ce119(0x371)]()[_0x2ce119(0x334)]('a')[_0x2ce119(0x2e6)]()[0x0], !![]);
                else {
                    var _0x1f191b = new URL(_0x3d51ed(this)[_0x2ce119(0x371)]()['children']('a')['attr']('data-href'));
                    _0x1f191b[_0x2ce119(0x1e7)] = _0x2ce119(0x2e9), _0x238a4a(_0x1f191b[_0x2ce119(0x29c)]);
                }
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), _0x4c3360(0x3a5), function () {
                const _0x58611f = _0x4c3360;
                let _0x4f4d2a = new Date()[_0x58611f(0x231)]();
                _0x23332f['RENAME_PUBLISH_DATE'] && _0x3d51ed(this)[_0x58611f(0x371)]()[_0x58611f(0x334)]('a')[_0x58611f(0x34d)]('datetime') && (_0x4f4d2a = _0x3d51ed(this)[_0x58611f(0x371)]()['children']('a')[_0x58611f(0x34d)](_0x58611f(0x2ec)));
                let _0x3839c1 = _0x3d51ed(this)[_0x58611f(0x371)]()['children']('a')[_0x58611f(0x34d)](_0x58611f(0x35f)) ?? _0x3d51ed('#article-id')[_0x58611f(0x3ed)]();
                _0x33c60c(_0x3d51ed(this)[_0x58611f(0x371)]()[_0x58611f(0x334)]('a')[_0x58611f(0x3eb)](_0x58611f(0x28d))[_0x58611f(0x2e6)]()['attr'](_0x58611f(0x185)), _0x3d51ed(this)[_0x58611f(0x371)]()['children']('a')[_0x58611f(0x34d)]('data-username'), _0x58611f(0x2d3), _0x4f4d2a, _0x58611f(0x183), _0x3839c1);
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), '.IG_DWSTORY', function () {
                _0x3bc215(!![]);
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), _0x4c3360(0x1c6), function () {
                _0x4a8cd5();
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), '.IG_DWNEWTAB', function (_0x48166e) {
                const _0x1adfcc = _0x4c3360;
                _0x48166e[_0x1adfcc(0x210)](), _0x3bc215(!![], !![], !![]);
            }), _0x3d51ed(_0x4c3360(0x1dd))['on']('click', _0x4c3360(0x23e), function () {
                _0x41165e(!![]);
            }), _0x3d51ed('body')['on'](_0x4c3360(0x335), _0x4c3360(0x222), function (_0x1466a5) {
                _0x1466a5['stopPropagation'](), _0x1a5a71(!![]);
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), _0x4c3360(0x182), function () {
                _0x16e0a6(!![]);
            }), _0x3d51ed(_0x4c3360(0x1dd))['on']('click', _0x4c3360(0x2ad), function () {
                _0x4eec44();
            }), _0x3d51ed('body')['on'](_0x4c3360(0x335), _0x4c3360(0x1f1), function (_0x3520c3) {
                const _0x290c88 = _0x4c3360;
                _0x3520c3[_0x290c88(0x210)](), _0x16e0a6(!![], !![]);
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), _0x4c3360(0x24c), function () {
                _0x4a4671(!![]);
            }), _0x3d51ed(_0x4c3360(0x1dd))['on']('click', _0x4c3360(0x3ef), function () {
                _0x1fbe29(!![], !![]);
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), '.IG_REELS_NEWTAB', function () {
                _0x1fbe29(!![], !![], !![]);
            }), _0x3d51ed('body')['on'](_0x4c3360(0x335), '.IG_REELS_THUMBNAIL', function () {
                _0x1fbe29(!![], ![]);
            }), _0x3d51ed('body')['on'](_0x4c3360(0x296), 'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]', function (_0x276f8b) {
                const _0x3ac3fb = _0x4c3360;
                if (_0x276f8b[_0x3ac3fb(0x419)] === 0x3 || _0x276f8b[_0x3ac3fb(0x419)] === 0x2) {
                    if (location[_0x3ac3fb(0x29c)] === _0x3ac3fb(0x350) && _0x23332f[_0x3ac3fb(0x1c2)]) {
                        _0x276f8b[_0x3ac3fb(0x210)]();
                        if (_0x3d51ed(this)[_0x3ac3fb(0x3eb)](_0x3ac3fb(0x284))[_0x3ac3fb(0x2a3)] > 0x0) {
                            const _0x3a7295 = _0x3ac3fb(0x350) + _0x3d51ed(this)[_0x3ac3fb(0x334)](_0x3ac3fb(0x292))[_0x3ac3fb(0x406)]()[_0x3ac3fb(0x3ed)]();
                            _0x276f8b[_0x3ac3fb(0x419)] === 0x2 ? GM_openInTab(_0x3a7295) : location['href'] = _0x3a7295;
                        }
                    }
                }
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x361), _0x4c3360(0x3f5), function () {
                const _0x4e2818 = _0x4c3360;
                var _0x295dbd = _0x3d51ed(this)[_0x4e2818(0x3eb)](_0x4e2818(0x2e0))[_0x4e2818(0x318)](_0x4e2818(0x3f2));
                _0x3d51ed(_0x4e2818(0x33d))['each'](function () {
                    const _0x395df2 = _0x4e2818;
                    _0x3d51ed(this)[_0x395df2(0x318)](_0x395df2(0x3f2), _0x295dbd);
                });
            }), _0x3d51ed(_0x4c3360(0x1dd))['on']('change', _0x4c3360(0x33d), function () {
                const _0x1bca9f = _0x4c3360;
                var _0x990d38 = _0x3d51ed(_0x1bca9f(0x274))[_0x1bca9f(0x2a3)], _0x3bed58 = _0x3d51ed('.IG_POPUP_DIG_BODY\x20.inner_box')['length'];
                _0x3d51ed(_0x1bca9f(0x3f5))['find'](_0x1bca9f(0x2e0))['prop']('checked', _0x990d38 == _0x3bed58);
            }), _0x3d51ed(_0x4c3360(0x1dd))['on'](_0x4c3360(0x335), _0x4c3360(0x1c8), function () {
                const _0x514f82 = _0x4c3360;
                let _0x16f968 = 0x0;
                _0x3d51ed(_0x514f82(0x2d7))[_0x514f82(0x1c5)](function () {
                    const _0x5a4208 = _0x514f82;
                    _0x3d51ed(this)[_0x5a4208(0x3c0)]()['children']('input')[_0x5a4208(0x318)](_0x5a4208(0x3f2)) && (_0x3d51ed(this)['trigger']('click'), _0x16f968++);
                }), _0x16f968 == 0x0 && alert(_0x8c26c7('NO_CHECK_RESOURCE'));
            }), _0x3d51ed(_0x4c3360(0x1dd))['on']('change', '.IG_POPUP_DIG_TITLE\x20#langSelect', function () {
                const _0x21f6cc = _0x4c3360;
                GM_setValue(_0x21f6cc(0x416), _0x3d51ed(this)[_0x21f6cc(0x1a9)]()), _0x5ce567[_0x21f6cc(0x416)] = _0x3d51ed(this)[_0x21f6cc(0x1a9)](), _0x5ce567[_0x21f6cc(0x416)]?.[_0x21f6cc(0x1f9)]('en') || _0x5ce567[_0x21f6cc(0x2c1)][_0x5ce567[_0x21f6cc(0x416)]] != null ? (_0x495abd(), _0x236361()) : _0x4f0b9b(_0x5ce567[_0x21f6cc(0x416)])[_0x21f6cc(0x1d0)](_0x3c4ef0 => {
                    const _0x425397 = _0x21f6cc;
                    _0x5ce567[_0x425397(0x2c1)][_0x5ce567['lang']] = _0x3c4ef0, _0x495abd(), _0x236361();
                })['catch'](_0x19c64e => {
                    const _0x4a5f7b = _0x21f6cc;
                    console[_0x4a5f7b(0x229)](_0x4a5f7b(0x1da), _0x19c64e);
                });
            }), _0x3d51ed(_0x4c3360(0x1dd))['on']('click', _0x4c3360(0x1ae), function () {
                const _0x1b976f = _0x4c3360;
                _0x3d51ed(_0x1b976f(0x2d7))[_0x1b976f(0x1c5)](function () {
                    const _0x35b08e = _0x1b976f;
                    _0x3d51ed(this)[_0x35b08e(0x214)](_0x35b08e(0x335));
                });
            });
            const _0x2f5a57 = new MutationObserver(_0x20d062 => {
                const _0xf8642b = _0x4c3360;
                for (const _0x1197ba of _0x20d062) {
                    _0x1197ba['type'] === _0xf8642b(0x2c6) && _0x1197ba[_0xf8642b(0x2c8)][_0xf8642b(0x3a9)](_0x31ec58 => {
                        const _0x2fef8b = _0xf8642b, _0x1f1c14 = _0x3d51ed(_0x31ec58)['find']('video');
                        if (_0x1f1c14['length'] > 0x0) {
                            _0x23332f[_0x2fef8b(0x215)] && _0x1f1c14[_0x2fef8b(0x1c5)](function () {
                                const _0x15ef37 = _0x2fef8b;
                                _0x3d51ed(this)['on'](_0x15ef37(0x33b), function () {
                                    const _0x2b9b26 = _0x15ef37;
                                    !_0x3d51ed(this)[_0x2b9b26(0x1bb)](_0x2b9b26(0x18b)) && (_0x3d51ed(this)[_0x2b9b26(0x34d)](_0x2b9b26(0x27f), !![]), this[_0x2b9b26(0x3a6)] = _0x5ce567['videoVolume'], _0x596d98('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x2fef8b(0x3e8)][_0x2fef8b(0x37c)](/^(\/stories\/)/ig)) {
                                const _0x4b58e3 = location[_0x2fef8b(0x3e8)][_0x2fef8b(0x37c)](/^(\/stories\/highlights\/)/ig) != null, _0x1e0178 = _0x4b58e3 ? _0x2fef8b(0x2f6) : 'story';
                                _0x1f1c14[_0x2fef8b(0x1c5)](function () {
                                    const _0x5d8c83 = _0x2fef8b;
                                    _0x3d51ed(this)['on'](_0x5d8c83(0x32b), function () {
                                        const _0x1f52f7 = _0x5d8c83;
                                        if (!_0x3d51ed(this)[_0x1f52f7(0x1bb)](_0x1f52f7(0x40c))) {
                                            let _0x434e86 = _0x3d51ed(this);
                                            _0x434e86['parents'](_0x1f52f7(0x272))[_0x1f52f7(0x34f)](function () {
                                                const _0x48c7e7 = _0x1f52f7;
                                                return _0x3d51ed(this)[_0x48c7e7(0x395)]() == _0x434e86['width']();
                                            })[_0x1f52f7(0x3eb)]('.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL')['length'] === 0x0 ? (_0x3d51ed(this)[_0x1f52f7(0x34d)](_0x1f52f7(0x29a), !![]), _0x4b58e3 ? _0x4a4671(![]) : _0x41165e(![]), _0x596d98('(' + _0x1e0178 + ')', _0x1f52f7(0x38a))) : (_0x3d51ed(this)[_0x1f52f7(0x34d)](_0x1f52f7(0x29a), !![]), _0x596d98('(' + _0x1e0178 + ')', _0x1f52f7(0x19e)));
                                        }
                                    });
                                    var _0x49156e = _0x3d51ed(this);
                                    if (_0x23332f[_0x5d8c83(0x18f)]) {
                                        if (!_0x49156e['data'](_0x5d8c83(0x3a3))) {
                                            _0x596d98('(' + _0x1e0178 + ')', _0x5d8c83(0x1e8));
                                            _0x23332f[_0x5d8c83(0x215)] && (this['volume'] = _0x5ce567['videoVolume'], _0x49156e['on'](_0x5d8c83(0x38d), function () {
                                                const _0x4f1176 = _0x5d8c83;
                                                this[_0x4f1176(0x3a6)] = _0x5ce567['videoVolume'];
                                            }));
                                            let _0x3aca4c = _0x49156e['parents']('div')[_0x5d8c83(0x34f)](function () {
                                                    const _0x1a30b0 = _0x5d8c83;
                                                    return _0x3d51ed(this)[_0x1a30b0(0x34d)](_0x1a30b0(0x19c)) == null && _0x3d51ed(this)[_0x1a30b0(0x34d)](_0x1a30b0(0x33a)) == null;
                                                })[_0x5d8c83(0x2e6)](), _0x345809 = _0x3aca4c[_0x5d8c83(0x1ba)]();
                                            _0x345809[_0x5d8c83(0x3c6)]();
                                            let _0x652475 = _0x3aca4c[_0x5d8c83(0x3eb)](_0x5d8c83(0x202));
                                            _0x652475[_0x5d8c83(0x3c6)]();
                                            const _0x9bc6f1 = function (_0x4e977b) {
                                                const _0x54a956 = _0x5d8c83;
                                                _0x4e977b[_0x54a956(0x210)](), _0x49156e[_0x54a956(0x3b6)](_0x54a956(0x1db), '2'), _0x49156e[_0x54a956(0x34d)](_0x54a956(0x3a3), !![]), _0x652475['hide'](), _0x345809[_0x54a956(0x3c6)](), _0x55d0d8(_0x49156e, _0x49156e[_0x54a956(0x38e)]('div[style][class]')[_0x54a956(0x34f)](function () {
                                                    const _0x38932f = _0x54a956;
                                                    return _0x3d51ed(this)[_0x38932f(0x395)]() == _0x49156e['width']();
                                                })['first'](), _0x1e0178, _0x54a956(0x184));
                                            };
                                            _0x49156e[_0x5d8c83(0x371)]()[_0x5d8c83(0x3eb)](_0x5d8c83(0x370))['on']('contextmenu', _0x9bc6f1), _0x652475['on'](_0x5d8c83(0x333), _0x9bc6f1), _0x345809['on'](_0x5d8c83(0x333), _0x9bc6f1), _0x49156e['on'](_0x5d8c83(0x333), function (_0x270d39) {
                                                const _0x48ed7c = _0x5d8c83;
                                                _0x270d39[_0x48ed7c(0x210)](), _0x49156e['css'](_0x48ed7c(0x1db), '-1'), _0x49156e['removeAttr']('controls'), _0x345809[_0x48ed7c(0x38c)](), _0x652475['show'](), _0x55d0d8(_0x49156e, _0x49156e[_0x48ed7c(0x38e)](_0x48ed7c(0x272))[_0x48ed7c(0x34f)](function () {
                                                    const _0x204090 = _0x48ed7c;
                                                    return _0x3d51ed(this)['width']() == _0x49156e[_0x204090(0x395)]();
                                                })['first'](), _0x1e0178, _0x48ed7c(0x184));
                                            }), _0x49156e['on'](_0x5d8c83(0x372), function () {
                                                const _0x1a711c = _0x5d8c83;
                                                let _0x1e340a = _0x3aca4c[_0x1a711c(0x371)]()['find']('svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]')[_0x1a711c(0x38e)]('[role=\x22button\x22]')[_0x1a711c(0x2e6)]();
                                                var _0x57d6db = _0x1e340a[_0x1a711c(0x3eb)](_0x1a711c(0x2b5))['length'] === 0x0;
                                                this[_0x1a711c(0x324)] != _0x57d6db && (this[_0x1a711c(0x3a6)] = _0x5ce567['videoVolume'], _0x1e340a?.[_0x1a711c(0x214)](_0x1a711c(0x335))), _0x3d51ed(this)[_0x1a711c(0x34d)](_0x1a711c(0x379)) && (_0x5ce567['videoVolume'] = this['volume'], GM_setValue(_0x1a711c(0x20e), this[_0x1a711c(0x3a6)])), this['volume'] == _0x5ce567[_0x1a711c(0x205)] && _0x3d51ed(this)[_0x1a711c(0x34d)]('data-completed', !![]);
                                            }), _0x49156e['css']('position', _0x5d8c83(0x3a8)), _0x49156e['css'](_0x5d8c83(0x1db), '2'), _0x49156e[_0x5d8c83(0x34d)](_0x5d8c83(0x3ba), !![]), _0x49156e[_0x5d8c83(0x34d)](_0x5d8c83(0x3a3), !![]);
                                        }
                                    } else
                                        _0x55d0d8(_0x49156e, _0x49156e[_0x5d8c83(0x38e)](_0x5d8c83(0x272))[_0x5d8c83(0x34f)](function () {
                                            const _0x465eab = _0x5d8c83;
                                            return _0x3d51ed(this)[_0x465eab(0x395)]() == _0x49156e['width']();
                                        })[_0x5d8c83(0x2e6)](), _0x1e0178, _0x5d8c83(0x184));
                                });
                            }
                        }
                    });
                }
            });
            _0x2f5a57[_0x4c3360(0x40d)](_0x3d51ed('div[id^=\x22mount\x22]')[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x483d() {
    const _0x317931 = [
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'getHighlightStories()',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'tagName',
        'CHECK_UPDATE_MENU',
        '_blank',
        'data-modify',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'img[referrerpolicy]',
        'map',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        '431288zwPsYe',
        'reels_media',
        'min',
        '_ac3q',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'data-username',
        'createMediaListDOM',
        'img',
        'trigging',
        'sort',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'div',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'RELOAD_SCRIPT',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'mousedown',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'includes',
        'section\x20>\x20main[role=\x22main\x22]',
        'data-modify-thumbnail',
        '.IG_POPUP_DIG',
        'href',
        'Open\x20in\x20New\x20Tab',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'replaceAll',
        '\x22><span\x20data-ih-locale=\x22',
        '<label\x20class=\x22globalSettings',
        'length',
        'GraphSidecar',
        '\x22\x20class=\x22newTab\x22>',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'div:last-child',
        '\x22\x20data-ih-locale-title=\x22',
        'https://www.instagram.com/web/search/topsearch/?query=',
        '.IG_DW_MAIN',
        'copy',
        'Main\x20Timer',
        '.IG_DWHISTORY_ALL',
        '\x20-</a>',
        'remove-thumbnail',
        'carousel_media:',
        'isArray',
        '</div></div>',
        'www.',
        'fileRenameFormat',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'reject',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        '*/*',
        '13600TcsDNQ',
        'updatenotification',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'loop',
        'div.volume_slider',
        'wheel',
        'searchParams',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'locale',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'GL_registerEventList',
        'owner',
        'removeClass',
        'childList',
        'LOCALE_MANIFEST',
        'addedNodes',
        'trim',
        'GL_logger',
        '__typename',
        'Fetch\x20from\x20memory\x20cache:',
        'Disable\x20Video\x20Auto-looping',
        'Settings',
        '_acnf',
        '474gfvWbS',
        'avatar',
        '</span></label>',
        'thumbnail',
        '399132HlzCXK',
        'boolean',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'Current\x20version:\x20',
        '<input\x20value=\x22',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        'https://www.instagram.com/p/',
        'query_hash',
        'pointer',
        'Script\x20Loaded',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'input',
        '.button_wrapper',
        'SETTING',
        'position',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'Debug\x20Window',
        'first',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'registerMenuIds',
        'scontent.cdninstagram.com',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'DW_ALL',
        'datetime',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'addClass',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'Remote\x20version:\x20',
        'Show\x20DOM\x20Tree',
        'highlight',
        '--ig-track-progress:\x20',
        'NEW_TAB',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'CLOSE',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        '.json',
        'highlights',
        'GL_observer',
        'content',
        'LOAD_BLOB_ONE',
        '.IG_NEWTAB_MAIN',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'currentURL',
        '#imageViewer',
        '</span></div>',
        'fadeOut',
        'DOWNLOAD_ALL',
        'Feedback',
        'LOAD_BLOB_MULTIPLE',
        'pageLoaded',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'FORCE_FETCH_ALL_RESOURCES',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'article',
        'svg',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'textContent',
        'getStories()',
        '.circle_wrapper',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'prop',
        '#article-id',
        'stories',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'wrap',
        'x1iyjqo2',
        'video_url',
        'tempFetchRateLimit',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'a[href^=\x22/p/\x22]',
        'muted',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'label',
        'GraphVideo',
        'navigator',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'timeupdate',
        'isHomepage',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'pageX',
        'FEEDBACK',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'appendChild',
        'DIRECT_DOWNLOAD_ALL',
        'contextmenu',
        'children',
        'click',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        '[data-ih-locale-title]',
        'style',
        'play\x20playing',
        '#iv_image',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'users',
        'getBlobMediaWithQueryID()',
        'padEnd',
        '#tempWrapper',
        'NOTICE_UPDATE_CONTENT',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'user',
        'hasClass',
        'IMG',
        'image_versions2',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '\x22\x20data-globalIndex=\x22',
        'scale(',
        'attr',
        '2962XUKJPF',
        'filter',
        'https://www.instagram.com/',
        'fail',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'instagram.com/reels/',
        'off',
        'hd_profile_pic_url_info',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'DOMTree-',
        'BATCH_DOWNLOAD_DIRECT',
        'innerHeight',
        'Display\x20HTML5\x20Video\x20Controller',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'display_resources',
        'innerWidth',
        'data-path',
        'floor',
        'change',
        '._acay\x20._acaz',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'join',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'RENAME_PUBLISH_DATE',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'li._acaz',
        'Feedback\x20Options',
        'object',
        'mp4',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        '<div\x20class=\x22button_wrapper\x22>',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'Request\x20with:',
        'video\x20+\x20div',
        'parent',
        'volumechange',
        'Download\x20All\x20Resources',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'DEBUG',
        'message',
        'video[class]',
        'left',
        'data-completed',
        'getBlobMedia()',
        'Wololo!\x20New\x20version\x20released.',
        'match',
        'items',
        'toUpperCase',
        'profile_pic_url',
        'target',
        'script',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'data-snig',
        'getUserId()',
        'DOWNLOAD',
        'reduce',
        '#iv_close',
        '6130350JeEzEB',
        'data-remove-thumbnail',
        'Manually\x20inserting\x20thumbnail\x20button',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'show',
        'loadstart',
        'parents',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'there\x20is\x20no\x20new\x20update',
        'finalUrl',
        'https://ko-fi.com/snkoarashi',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'div#scrollview',
        'width',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'canDownload',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'data-loop',
        'catch',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'transform',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'body\x20>\x20div\x20section._ac0a',
        'grab',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'keydown',
        'hostname',
        'controls',
        'GL_repeat',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        'volume',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'absolute',
        'forEach',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'Close',
        'onReadyMyDW()\x20Timer',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'smooth',
        '\x22\x20/>',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        '.IG_POPUP_DIG\x20input',
        '.IG_IMAGE_VIEWER',
        'CHECK_UPDATE',
        'DIV',
        'css',
        '.IG_THUMBNAIL_MAIN',
        'Cannot\x20find\x20video\x20URL.',
        'responseText',
        'data-controls',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'GET',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'G_RENAME_FORMAT',
        'AUTO_RENAME',
        'prev',
        'srcset',
        'edge_sidecar_to_children',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'execCommand',
        'hide',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'before',
        'reel',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'Reload\x20Script',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        '/info/',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        '%22}',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'downloadURL',
        ':hidden',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'SKIP_VIEW_STORY_CONFIRM',
        'top',
        'NOPATH',
        'display_url',
        'GM_unregisterMenuCommand',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'BATCH_DOWNLOAD_SELECTED',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'div:not([class]):not([style])',
        'carousel_media',
        'isHighlightsStory',
        '1630PEVDvd',
        'toLowerCase',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        '37px',
        'logger\x20sliced',
        'toString',
        'body\x20>\x20div\x20section:visible._ac0a',
        'pathname',
        '1497356XCQlrM',
        'grabbing',
        'find',
        'Checking\x20for\x20Script\x20Updates',
        'text',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '.IG_REELS',
        'div\x20>\x20ul\x20li._acaz',
        'userLanguage',
        'checked',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '#_SNLOAD',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'taken_at_timestamp',
        'version',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'node',
        '.IG_POPUP_DIG\x20#post_info',
        'query_id',
        'deltaY',
        'reels',
        'https://i.instagram.com/api/v1/media/',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        '<option\x20value=\x22',
        'Found\x20insert\x20point',
        'INTERNAL_CSS',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'last',
        'video_versions',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'selected',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'VID',
        'modify-thumbnail',
        'observe',
        'feedback_message',
        '</button>',
        'getMonth',
        'blob',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'getHours',
        'getFullYear',
        'video',
        'lang',
        'carousel_media:\x20undefined\x20username',
        'hasReferrer',
        'which',
        'height',
        'NONE',
        'pageY',
        '996leczZF',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'NOTICE_UPDATE_TITLE',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        '.IG_POPUP_DIG\x20.globalSettings',
        '.IG_DWHISTORY',
        'jpg',
        'vertical',
        'src',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'DOWNLOAD_DOM_TREE',
        'config_width',
        'after',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'modify',
        '._acay\x20+\x20.x24i39r',
        'GL_dataCache',
        'div[role=\x22presentation\x22]',
        'HTML5_VIDEO_CONTROL',
        'ALL_CHECK',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        '.IG_DWNEWTAB',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'data-ih-locale-title',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'taken_at',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'replace',
        'post',
        'version:',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'class',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'Thumbnail\x20button\x20already\x20inserted',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20</div>',
        'matchAll',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'slice',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'mousemove.igHelper',
        'Request\x20failed\x20with\x20API\x20response\x20',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'getPostOwner()',
        'val',
        'split',
        'padStart',
        'pause',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        'firstStarted',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'url',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        'getSeconds',
        '.IG_DW_ALL_MAIN',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '.IG_DWSTORY',
        'parse',
        'data-href',
        'Image',
        'next',
        'data',
        'hidden',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        '</a>',
        'type',
        'Download\x20Selected\x20Resources',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'Select\x20All',
        'each',
        '.IG_DWSTORY_ALL',
        'isDialog',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        '</a></button><br/>',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'faild',
        'altKey',
        'Loading\x20Blob\x20Media...',
        '0px',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'then',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'stp',
        'THUMBNAIL_INTRO',
        'undefined',
        'toISOString',
        'originalEvent',
        'data-name',
        'append',
        'div#splash-screen',
        'getTranslationText\x20catch\x20error:',
        'z-index',
        '\x22\x20title=\x22',
        'body',
        'video\x20+\x20div\x20>\x20div',
        'bottom',
        'disconnect',
        'getUserIdWithAgent()',
        '<div\x20class=\x22volume_slider\x20',
        '\x22\x20class=\x22IG_REELS\x22>',
        'getMinutes',
        'x1s85apg',
        'dragstart\x20drop',
        'host',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        '</span>\x20',
        'x1lix1fw',
        'getTranslationText()',
        'warn',
        'REPORT_GITHUB',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'isIntersecting',
        '.IG_DWHINEWTAB',
        'SHOW_DOM_TREE',
        'log',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'push',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        '40GzFBlh',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'startsWith',
        'Download',
        'xdt_api__v1__media__shortcode__web_info',
        'getBlobMediaWithQuery()',
        'get',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        'div[class][role=\x22button\x22]',
        'remove',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'videoVolume',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'GraphImage',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'SCROLL_BUTTON',
        'div\x20>\x20ul._acay',
        'username',
        'candidates',
        'substr',
        'G_VIDEO_VOLUME',
        '<a\x20media-id=\x22',
        'preventDefault',
        'isReels',
        'regenerated',
        'element',
        'trigger',
        'MODIFY_VIDEO_VOLUME',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'Can\x20not\x20find\x20download\x20url.',
        'edges',
        'relative',
        'language',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'GL_referrer',
        'shortcode_media',
        'html',
        'div.volume_slider\x20input',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        '.IG_DWPROFILE',
        'user\x20settings',
        'createElement',
        'isStory',
        'https://i.instagram.com/api/v1/users/',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'ig_cache_key',
        'error',
        'is_video',
        'video_resources',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'THUMBNAIL',
        'setAttribute',
        '\x22\x20datetime=\x22',
        'getTime',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'Preference\x20Settings',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'innerHTML',
        '._acnb',
        'Download\x20Video\x20Thumbnail',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '_INTRO',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'onHighlightsStory',
        '.IG_DWSTORY_THUMBNAIL',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'NO_VID_URL',
        'en-US',
        'G_CHECK_TIMESTAMP',
        'DONATE',
        'stopPropagation',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'scrollBy',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'response',
        'load',
        '.IG_DWHISTORY_THUMBNAIL',
        'video\x20volume\x20changed\x20#slider',
        'getUserHighSizeProfile()',
        'display',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'GL_username',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        '<div></div>',
        'range',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'max',
        'getMediaInfo()',
        'DISABLE_VIDEO_LOOPING',
        'GL_postPath',
        'data-type',
        'removeAttr',
        'shortcode',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        '<p\x20id=\x22_SNLOAD\x22>',
        'status',
        '._acay',
        'Cannot\x20find\x20resource\x20url.',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'code',
        '</a></button>',
        '.circle_wrapper\x20span',
        'FORCE_RESOURCE_VIA_MEDIA',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'createObjectURL',
        '\x0a-----\x0a\x0aLocation:\x20',
        'cursor',
        '<a\x20datetime=\x22',
        '</div>',
        'https://www.instagram.com/reel/',
        'userAgent',
        'div[style][class]',
        'assign',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        '/accounts/login'
    ];
    a0_0x483d = function () {
        return _0x317931;
    };
    return a0_0x483d();
}