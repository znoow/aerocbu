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

(function (_0x2003bf, _0x2c7119) {
    const _0x58a3a0 = a0_0x1eaf, _0x105348 = _0x2003bf();
    while (!![]) {
        try {
            const _0x21a8ed = parseInt(_0x58a3a0(0x24a)) / 0x1 * (-parseInt(_0x58a3a0(0x122)) / 0x2) + parseInt(_0x58a3a0(0x1f8)) / 0x3 + parseInt(_0x58a3a0(0x219)) / 0x4 * (-parseInt(_0x58a3a0(0x218)) / 0x5) + parseInt(_0x58a3a0(0x1cd)) / 0x6 * (parseInt(_0x58a3a0(0x138)) / 0x7) + parseInt(_0x58a3a0(0x14a)) / 0x8 * (-parseInt(_0x58a3a0(0x110)) / 0x9) + -parseInt(_0x58a3a0(0x373)) / 0xa + -parseInt(_0x58a3a0(0x355)) / 0xb;
            if (_0x21a8ed === _0x2c7119)
                break;
            else
                _0x105348['push'](_0x105348['shift']());
        } catch (_0x2fcbcf) {
            _0x105348['push'](_0x105348['shift']());
        }
    }
}(a0_0x4be0, 0xeeff7), function (_0xf0822b) {
    setTimeout(() => {
        'use strict';
        const _0x51b01c = a0_0x1eaf;
        const _0x88bc73 = {
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
            }, _0x20ebd4 = [
                'RENAME_PUBLISH_DATE',
                _0x51b01c(0x362),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ], _0x50f6bd = {
                'DOWNLOAD': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
                'NEW_TAB': _0x51b01c(0x378),
                'THUMBNAIL': _0x51b01c(0x34f),
                'DOWNLOAD_ALL': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
                'CLOSE': _0x51b01c(0x2c4),
                'FULLSCREEN': _0x51b01c(0x2ae)
            }, _0x45d7a2 = 0xfa, _0x29256e = GM_getResourceText(_0x51b01c(0x165)), _0x50e62a = JSON['parse'](GM_getResourceText('LOCALE_MANIFEST'));
        var _0x550b30 = {
            'videoVolume': GM_getValue(_0x51b01c(0x19d)) ? GM_getValue(_0x51b01c(0x19d)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x51b01c(0x1c8)) ? GM_getValue(_0x51b01c(0x1c8)) : _0x51b01c(0x142),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x51b01c(0x226)) || navigator[_0x51b01c(0x263)] || navigator[_0x51b01c(0x359)],
            'currentURL': location[_0x51b01c(0x38a)],
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
                _0x5bd61c();
            })
        };
        _0x591dfa(), GM_addStyle(_0x29256e), _0x1f1dc3(), _0x4e4d74(_0x550b30[_0x51b01c(0x226)])[_0x51b01c(0x2b8)](_0x2e3ac8 => {
            const _0x1303df = _0x51b01c;
            _0x550b30[_0x1303df(0x2de)][_0x550b30[_0x1303df(0x226)]] = _0x2e3ac8, _0x3dc614(), _0x1f1dc3(), _0x4b5f23(0x12c);
        })[_0x51b01c(0xec)](_0x3f9867 => {
            const _0x3c3d82 = _0x51b01c;
            _0x1f1dc3(), _0x4b5f23(0x12c), !_0x550b30[_0x3c3d82(0x226)][_0x3c3d82(0x1c1)]('en') && console[_0x3c3d82(0x2d0)](_0x3c3d82(0x1b9), _0x3f9867);
        }), _0x572202(_0x51b01c(0x1d8), GM_info['script'][_0x51b01c(0x12a)], 'version:', GM_info[_0x51b01c(0x11c)]['version']);
        var _0x10ea13 = setInterval(function () {
            const _0x47cf57 = _0x51b01c;
            if (_0xf0822b(_0x47cf57(0x192))[_0x47cf57(0x2d4)] > 0x0 && !_0xf0822b('div#splash-screen')['is'](_0x47cf57(0x1bd)) || location['pathname'][_0x47cf57(0x21d)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x47cf57(0x233)][_0x47cf57(0x1c1)]('www.')) {
                _0x550b30['pageLoaded'] = ![];
                return;
            }
            if (_0x550b30[_0x47cf57(0x265)] != location[_0x47cf57(0x38a)] || !_0x550b30[_0x47cf57(0x258)] || !_0x550b30[_0x47cf57(0x16d)]) {
                console['log'](_0x47cf57(0x273), _0x47cf57(0x2ec)), clearInterval(_0x550b30[_0x47cf57(0x323)]), _0x550b30[_0x47cf57(0x16d)] = ![], _0x550b30[_0x47cf57(0x258)] = !![], _0x550b30[_0x47cf57(0x265)] = location[_0x47cf57(0x38a)], _0x550b30[_0x47cf57(0x344)][_0x47cf57(0x235)]();
                if (location[_0x47cf57(0x38a)][_0x47cf57(0x1c1)](_0x47cf57(0x213)) || location[_0x47cf57(0x10e)][_0x47cf57(0x21d)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x47cf57(0x38a)]['startsWith']('https://www.instagram.com/reel/')) {
                    _0x550b30['GL_dataCache'][_0x47cf57(0x2e3)] = {}, _0x550b30[_0x47cf57(0x2a1)][_0x47cf57(0x287)] = {}, _0x572202('isDialog');
                    var _0x16bcfd = setInterval(() => {
                        const _0x5c51e4 = _0x47cf57;
                        _0xf0822b(_0x5c51e4(0x21e))[_0x5c51e4(0x2d4)] > 0x0 && (clearInterval(_0x16bcfd), setTimeout(() => {
                            _0x5bd61c(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x550b30[_0x47cf57(0x16d)] = !![];
                }
                location['href'][_0x47cf57(0x1c1)](_0x47cf57(0x212)) && (_0x572202(_0x47cf57(0xf1)), setTimeout(() => {
                    _0x1b4223(![]);
                }, 0x96), _0x550b30['pageLoaded'] = !![]);
                if (location['href'][_0x47cf57(0x33d)]('?')[0x0] == 'https://www.instagram.com/') {
                    _0x550b30[_0x47cf57(0x2a1)][_0x47cf57(0x2e3)] = {}, _0x550b30[_0x47cf57(0x2a1)][_0x47cf57(0x287)] = {};
                    let _0x44d1d6 = _0x550b30[_0x47cf57(0x107)]?.[_0x47cf57(0x21d)](/^\/(stories|highlights)\//ig) != null;
                    _0x572202(_0x47cf57(0x1f1), _0x44d1d6), setTimeout(() => {
                        const _0x254b0b = _0x47cf57;
                        _0x5bd61c(![], _0x44d1d6);
                        const _0x54598a = _0xf0822b(_0x254b0b(0x21f))?.[_0x254b0b(0x198)]()[0x0];
                        _0x54598a && _0x550b30[_0x254b0b(0x344)][_0x254b0b(0x197)](_0x54598a, { 'childList': !![] });
                    }, 0x96), _0x550b30[_0x47cf57(0x16d)] = !![];
                }
                _0xf0822b(_0x47cf57(0x30c))[_0x47cf57(0x2d4)] && location[_0x47cf57(0x10e)][_0x47cf57(0x21d)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname']['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x572202(_0x47cf57(0x11a)), setTimeout(() => {
                    _0x3b7965(![]);
                }, 0x96), _0x550b30['pageLoaded'] = !![]);
                if (!_0x550b30[_0x47cf57(0x16d)]) {
                    if (location['href'][_0x47cf57(0x21d)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x550b30[_0x47cf57(0x2a1)][_0x47cf57(0x287)] = {}, _0x572202(_0x47cf57(0x2e2)), _0x3bc950(![]), _0x550b30[_0x47cf57(0x323)] = setInterval(() => {
                            _0x418f7e(![]);
                        }, _0x45d7a2), _0xf0822b(_0x47cf57(0x315))[_0x47cf57(0x2d4)] && setTimeout(() => {
                            const _0x4a22a4 = _0x47cf57;
                            if (_0x88bc73[_0x4a22a4(0x1cb)]) {
                                var _0x499f8b = _0xf0822b(_0x4a22a4(0x377))[_0x4a22a4(0x25e)](function () {
                                    const _0xca9c0c = _0x4a22a4;
                                    return _0xf0822b(this)[_0xca9c0c(0x1c0)]()[_0xca9c0c(0x2d4)] === 0x0 && this[_0xca9c0c(0x379)][_0xca9c0c(0x127)]() !== '';
                                });
                                _0x499f8b?.[_0x4a22a4(0x1a4)]('click');
                            }
                            _0x550b30[_0x4a22a4(0x16d)] = !![];
                        }, 0x96);
                    else
                        location['href'][_0x47cf57(0x21d)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x572202(_0x47cf57(0x14e)), _0xf0822b('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x47cf57(0x2d4)] > 0x0 && (_0xf0822b('.IG_DWSTORY')[_0x47cf57(0x309)](), _0xf0822b(_0x47cf57(0x30a))[_0x47cf57(0x309)](), _0xf0822b(_0x47cf57(0x2db))[_0x47cf57(0x2d4)] && _0xf0822b('.IG_DWSTORY_THUMBNAIL')['remove'](), _0x5f59c7(![]), setTimeout(() => {
                            _0x5f59c7(![]);
                        }, 0x96)), _0xf0822b(_0x47cf57(0x2cd))[_0x47cf57(0x2d4)] && setTimeout(() => {
                            const _0x50aa3e = _0x47cf57;
                            if (_0x88bc73[_0x50aa3e(0x1cb)]) {
                                var _0x4dc6cc = _0xf0822b(_0x50aa3e(0x377))[_0x50aa3e(0x25e)](function () {
                                    const _0x48bf35 = _0x50aa3e;
                                    return _0xf0822b(this)[_0x48bf35(0x1c0)]()['length'] === 0x0 && this[_0x48bf35(0x379)][_0x48bf35(0x127)]() !== '';
                                });
                                _0x4dc6cc?.[_0x50aa3e(0x380)]();
                            }
                            _0x550b30['pageLoaded'] = !![];
                        }, 0x96)) : (_0x550b30['pageLoaded'] = ![], _0xf0822b(_0x47cf57(0x2cd))['length'] && _0xf0822b(_0x47cf57(0x2cd))[_0x47cf57(0x309)](), _0xf0822b('.IG_DWSTORY_ALL')['length'] && _0xf0822b(_0x47cf57(0x36b))[_0x47cf57(0x309)](), _0xf0822b(_0x47cf57(0x30a))[_0x47cf57(0x2d4)] && _0xf0822b(_0x47cf57(0x30a))[_0x47cf57(0x309)](), _0xf0822b(_0x47cf57(0x2db))[_0x47cf57(0x2d4)] && _0xf0822b('.IG_DWSTORY_THUMBNAIL')[_0x47cf57(0x309)](), _0xf0822b(_0x47cf57(0x315))[_0x47cf57(0x2d4)] && _0xf0822b(_0x47cf57(0x315))[_0x47cf57(0x309)](), _0xf0822b(_0x47cf57(0x383))[_0x47cf57(0x2d4)] && _0xf0822b('.IG_DWHISTORY_ALL')['remove'](), _0xf0822b(_0x47cf57(0x10a))[_0x47cf57(0x2d4)] && _0xf0822b(_0x47cf57(0x10a))[_0x47cf57(0x309)](), _0xf0822b(_0x47cf57(0x337))[_0x47cf57(0x2d4)] && _0xf0822b(_0x47cf57(0x337))[_0x47cf57(0x309)]());
                }
                _0x4b5f23(0x12c), _0x550b30[_0x47cf57(0x107)] = new URL(location[_0x47cf57(0x38a)])[_0x47cf57(0x10e)];
            }
        }, _0x45d7a2);
        async function _0x2819b5() {
            const _0x43436d = _0x51b01c;
            _0x104471(!![]);
            let _0x10d223 = new Date()[_0x43436d(0x27c)](), _0x28de9f = Math[_0x43436d(0x276)](_0x10d223 / 0x3e8), _0xefcbab = location[_0x43436d(0x38a)][_0x43436d(0x32c)](/\/$/ig, '')[_0x43436d(0x33d)]('/')['at'](-0x1), _0x21baf0 = await _0x58d68e(_0xefcbab), _0x77b003 = _0x21baf0[_0x43436d(0x2ef)][_0x43436d(0x374)][0x0][_0x43436d(0x302)][_0x43436d(0x1ea)], _0x5af1fa = 0x0;
            _0x300267(_0x5af1fa, _0x21baf0[_0x43436d(0x2ef)]['reels_media'][0x0]['items']['length']), _0x21baf0[_0x43436d(0x2ef)]['reels_media'][0x0][_0x43436d(0x272)][_0x43436d(0x16c)]((_0x3f6f4f, _0x2f016f) => {
                setTimeout(() => {
                    const _0xacff8a = a0_0x1eaf;
                    _0x88bc73['RENAME_PUBLISH_DATE'] && (_0x28de9f = _0x3f6f4f['taken_at_timestamp']), _0x3f6f4f[_0xacff8a(0x17b)][_0xacff8a(0x13d)](function (_0x1867ba, _0x5a3599) {
                        const _0x24e040 = _0xacff8a;
                        if (_0x1867ba[_0x24e040(0x11d)] < _0x5a3599[_0x24e040(0x11d)])
                            return 0x1;
                        if (_0x1867ba[_0x24e040(0x11d)] > _0x5a3599[_0x24e040(0x11d)])
                            return -0x1;
                        return 0x0;
                    }), _0x3f6f4f['is_video'] ? _0x237545(_0x3f6f4f[_0xacff8a(0x161)][0x0]['src'], _0x77b003, _0xacff8a(0x2e3), _0x28de9f, 'mp4', _0x3f6f4f['id'])['then'](() => {
                        const _0x2f5d40 = _0xacff8a;
                        _0x300267(++_0x5af1fa, _0x21baf0['data'][_0x2f5d40(0x374)][0x0]['items'][_0x2f5d40(0x2d4)]);
                    }) : _0x237545(_0x3f6f4f[_0xacff8a(0x17b)][0x0]['src'], _0x77b003, _0xacff8a(0x2e3), _0x28de9f, _0xacff8a(0x278), _0x3f6f4f['id'])[_0xacff8a(0x2b8)](() => {
                        const _0xa97a20 = _0xacff8a;
                        _0x300267(++_0x5af1fa, _0x21baf0[_0xa97a20(0x2ef)][_0xa97a20(0x374)][0x0][_0xa97a20(0x272)][_0xa97a20(0x2d4)]);
                    });
                }, 0x64 * _0x2f016f);
            });
        }
        async function _0x3bc950(_0x15b0c6, _0x1216c8) {
            const _0x2fc01e = _0x51b01c;
            var _0x1a3958 = _0xf0822b(_0x2fc01e(0x26a))[_0x2fc01e(0x25e)](function () {
                const _0x29fda8 = _0x2fc01e;
                return _0xf0822b(this)[_0x29fda8(0x375)](_0x29fda8(0x38a))[_0x29fda8(0x33d)]('/')[_0x29fda8(0x25e)](_0x34c683 => _0x34c683['length'] > 0x0)[_0x29fda8(0x2d4)] === 0x1;
            })[_0x2fc01e(0x35f)]()[_0x2fc01e(0x375)](_0x2fc01e(0x38a))['split']('/')[_0x2fc01e(0x25e)](_0x1a3464 => _0x1a3464['length'] > 0x0)['at'](0x0);
            if (_0x15b0c6) {
                let _0x291ecd = new Date()[_0x2fc01e(0x27c)](), _0x3bed9e = Math[_0x2fc01e(0x276)](_0x291ecd / 0x3e8), _0x123cc1 = location[_0x2fc01e(0x38a)][_0x2fc01e(0x32c)](/\/$/ig, '')[_0x2fc01e(0x33d)]('/')['at'](-0x1), _0x50d771 = _0xf0822b(_0x2fc01e(0x136))[_0x2fc01e(0x2d4)] || _0xf0822b('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')['length'] || _0xf0822b('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')['find'](_0x2fc01e(0x2be))[_0x2fc01e(0x2d4)], _0x12f6cf = 0x0;
                _0x104471(!![]);
                if (_0x550b30[_0x2fc01e(0x2a1)][_0x2fc01e(0x287)][_0x123cc1]) {
                    _0x572202(_0x2fc01e(0x19e), _0x123cc1);
                    let _0x407be0 = _0x550b30[_0x2fc01e(0x2a1)]['highlights'][_0x123cc1][_0x2fc01e(0x2ef)][_0x2fc01e(0x374)][0x0][_0x2fc01e(0x272)][_0x2fc01e(0x2d4)];
                    _0x1a3958 = _0x550b30[_0x2fc01e(0x2a1)]['highlights'][_0x123cc1]['data'][_0x2fc01e(0x374)][0x0][_0x2fc01e(0x302)][_0x2fc01e(0x1ea)], _0x12f6cf = _0x550b30['GL_dataCache']['highlights'][_0x123cc1]['data'][_0x2fc01e(0x374)][0x0][_0x2fc01e(0x272)][_0x407be0 - _0x50d771];
                } else {
                    let _0x512cf0 = await _0x58d68e(_0x123cc1), _0x581208 = _0x512cf0['data'][_0x2fc01e(0x374)][0x0][_0x2fc01e(0x272)][_0x2fc01e(0x2d4)];
                    _0x1a3958 = _0x512cf0['data']['reels_media'][0x0][_0x2fc01e(0x302)][_0x2fc01e(0x1ea)], _0x12f6cf = _0x512cf0[_0x2fc01e(0x2ef)][_0x2fc01e(0x374)][0x0][_0x2fc01e(0x272)][_0x581208 - _0x50d771], _0x550b30[_0x2fc01e(0x2a1)][_0x2fc01e(0x287)][_0x123cc1] = _0x512cf0;
                }
                _0x572202('onHighlightsStory', _0x123cc1, _0x550b30['GL_dataCache'][_0x2fc01e(0x287)][_0x123cc1]);
                _0x88bc73['RENAME_PUBLISH_DATE'] && (_0x3bed9e = _0x12f6cf[_0x2fc01e(0xf6)]);
                if (_0x88bc73[_0x2fc01e(0x2e9)] && !_0x550b30[_0x2fc01e(0x298)]) {
                    let _0x38920a = await _0x56082e(_0x12f6cf['id']);
                    _0x38920a[_0x2fc01e(0x10c)] === 'ok' ? _0x38920a[_0x2fc01e(0x272)][0x0][_0x2fc01e(0x326)] ? _0x1216c8 ? _0x55374a(_0x38920a[_0x2fc01e(0x272)][0x0]['video_versions'][0x0][_0x2fc01e(0x19c)]) : _0x237545(_0x38920a['items'][0x0][_0x2fc01e(0x326)][0x0][_0x2fc01e(0x19c)], _0x1a3958, _0x2fc01e(0x287), _0x3bed9e, _0x2fc01e(0x11f), _0x38920a['items'][0x0]['id']) : _0x1216c8 ? _0x55374a(_0x38920a[_0x2fc01e(0x272)][0x0]['image_versions2'][_0x2fc01e(0x2c7)][0x0][_0x2fc01e(0x19c)]) : _0x237545(_0x38920a[_0x2fc01e(0x272)][0x0]['image_versions2']['candidates'][0x0][_0x2fc01e(0x19c)], _0x1a3958, _0x2fc01e(0x287), _0x3bed9e, _0x2fc01e(0x278), _0x38920a[_0x2fc01e(0x272)][0x0]['id']) : (_0x88bc73['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (delete _0x550b30['GL_dataCache']['highlights'][_0x123cc1], _0x550b30['tempFetchRateLimit'] = !![], _0x3bc950(!![], _0x1216c8)) : alert(_0x2fc01e(0x2af) + _0x38920a[_0x2fc01e(0x13f)]), _0x572202(_0x38920a));
                } else
                    _0x12f6cf['is_video'] ? _0x1216c8 ? _0x55374a(_0x12f6cf[_0x2fc01e(0x161)]['at'](-0x1)[_0x2fc01e(0x2b2)], _0x1a3958) : _0x237545(_0x12f6cf[_0x2fc01e(0x161)]['at'](-0x1)[_0x2fc01e(0x2b2)], _0x1a3958, _0x2fc01e(0x287), _0x3bed9e, _0x2fc01e(0x11f), _0x12f6cf['id']) : _0x1216c8 ? _0x55374a(_0x12f6cf[_0x2fc01e(0x17b)]['at'](-0x1)[_0x2fc01e(0x2b2)], _0x1a3958) : _0x237545(_0x12f6cf[_0x2fc01e(0x17b)]['at'](-0x1)[_0x2fc01e(0x2b2)], _0x1a3958, 'highlights', _0x3bed9e, _0x2fc01e(0x278), _0x12f6cf['id']), _0x550b30['tempFetchRateLimit'] = ![];
                _0x104471(![]);
            } else {
                if (!_0xf0822b('.IG_DWHISTORY')[_0x2fc01e(0x2d4)]) {
                    let _0x191bfb = null;
                    _0xf0822b('body\x20>\x20div\x20section._ac0a')[_0x2fc01e(0x2d4)] > 0x0 ? _0x191bfb = _0xf0822b(_0x2fc01e(0x308)) : (_0x191bfb = _0xf0822b(_0x2fc01e(0x329)), _0x191bfb[_0x2fc01e(0x2a7)]('position', _0x2fc01e(0x33c)));
                    if (_0x191bfb[_0x2fc01e(0x2d4)] === 0x0) {
                        let _0x325f3e = _0xf0822b(_0x2fc01e(0x279)), _0x30890c = 0x0;
                        _0x325f3e[_0x2fc01e(0x129)](function () {
                            const _0x1b9001 = _0x2fc01e;
                            _0xf0822b(this)[_0x1b9001(0x2bc)]() > _0x30890c && (_0x30890c = _0xf0822b(this)[_0x1b9001(0x2bc)](), _0x191bfb = _0xf0822b(this)[_0x1b9001(0x1c0)](_0x1b9001(0x1db))[_0x1b9001(0x35f)]());
                        });
                    }
                    if (_0x191bfb != null) {
                        _0x191bfb['append']('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x84a48b('DW') + _0x2fc01e(0xfe) + _0x50f6bd[_0x2fc01e(0x336)] + '</div>'), _0x191bfb[_0x2fc01e(0x288)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x84a48b('NEW_TAB') + _0x2fc01e(0x1ee) + _0x50f6bd[_0x2fc01e(0x2ca)] + _0x2fc01e(0x2ad));
                        let _0x3c2740 = _0x57e0ea(_0x1a3958);
                        _0x3c2740[_0x2fc01e(0x2d4)] > 0x1 && _0x191bfb[_0x2fc01e(0x288)](_0x2fc01e(0x1a7) + _0x84a48b(_0x2fc01e(0x158)) + _0x2fc01e(0x16f) + _0x50f6bd[_0x2fc01e(0x1ab)] + _0x2fc01e(0x2ad)), _0x191bfb[_0x2fc01e(0x1e7)](_0x2fc01e(0x1d2))[_0x2fc01e(0x129)](function () {
                            _0xf0822b(this)['on']('load', function () {
                                const _0x411a34 = a0_0x1eaf;
                                !_0xf0822b(this)[_0x411a34(0x2ef)]('remove-thumbnail') && (_0x191bfb[_0x411a34(0x1e7)](_0x411a34(0x337))[_0x411a34(0x2d4)] === 0x0 ? (_0xf0822b(this)['attr'](_0x411a34(0x185), !![]), _0xf0822b(_0x411a34(0x337))[_0x411a34(0x309)](), _0x572202(_0x411a34(0x1b4))) : (_0xf0822b(this)[_0x411a34(0x375)](_0x411a34(0x185), !![]), _0x572202(_0x411a34(0x1cc))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x418f7e(_0x3aa7e7) {
            const _0x2d48a1 = _0x51b01c;
            if (_0x3aa7e7) {
                let _0x5b6fe2 = new Date()['getTime'](), _0x4ff2bd = Math[_0x2d48a1(0x276)](_0x5b6fe2 / 0x3e8), _0x4b0c03 = location['href'][_0x2d48a1(0x32c)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x5d4ed1 = '', _0x3ceca7 = _0xf0822b(_0x2d48a1(0x136))['length'] || _0xf0822b('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')['length'] || _0xf0822b(_0x2d48a1(0x108))['find'](_0x2d48a1(0x2be))[_0x2d48a1(0x2d4)], _0x39df80 = '';
                _0x104471(!![]);
                if (_0x550b30['GL_dataCache'][_0x2d48a1(0x287)][_0x4b0c03]) {
                    _0x572202(_0x2d48a1(0x19e), _0x4b0c03);
                    let _0x311f36 = _0x550b30['GL_dataCache']['highlights'][_0x4b0c03][_0x2d48a1(0x2ef)]['reels_media'][0x0][_0x2d48a1(0x272)][_0x2d48a1(0x2d4)];
                    _0x5d4ed1 = _0x550b30[_0x2d48a1(0x2a1)]['highlights'][_0x4b0c03][_0x2d48a1(0x2ef)][_0x2d48a1(0x374)][0x0][_0x2d48a1(0x302)][_0x2d48a1(0x1ea)], _0x39df80 = _0x550b30[_0x2d48a1(0x2a1)][_0x2d48a1(0x287)][_0x4b0c03][_0x2d48a1(0x2ef)][_0x2d48a1(0x374)][0x0]['items'][_0x311f36 - _0x3ceca7];
                } else {
                    let _0x4428ce = await _0x58d68e(_0x4b0c03), _0x2a08e3 = _0x4428ce['data'][_0x2d48a1(0x374)][0x0][_0x2d48a1(0x272)][_0x2d48a1(0x2d4)];
                    _0x5d4ed1 = _0x4428ce['data'][_0x2d48a1(0x374)][0x0][_0x2d48a1(0x302)]['username'], _0x39df80 = _0x4428ce[_0x2d48a1(0x2ef)][_0x2d48a1(0x374)][0x0][_0x2d48a1(0x272)][_0x2a08e3 - _0x3ceca7], _0x550b30[_0x2d48a1(0x2a1)][_0x2d48a1(0x287)][_0x4b0c03] = _0x4428ce;
                }
                _0x88bc73[_0x2d48a1(0x21a)] && (_0x4ff2bd = _0x39df80[_0x2d48a1(0xf6)]);
                if (_0x88bc73[_0x2d48a1(0x2e9)] && !_0x550b30['tempFetchRateLimit']) {
                    let _0x529b03 = await _0x56082e(_0x39df80['id']);
                    _0x529b03[_0x2d48a1(0x10c)] === 'ok' ? _0x237545(_0x529b03[_0x2d48a1(0x272)][0x0][_0x2d48a1(0x25a)][_0x2d48a1(0x2c7)][0x0][_0x2d48a1(0x19c)], _0x5d4ed1, _0x2d48a1(0x287), _0x4ff2bd, _0x2d48a1(0x278), _0x4b0c03) : (_0x88bc73[_0x2d48a1(0x362)] ? (delete _0x550b30[_0x2d48a1(0x2a1)][_0x2d48a1(0x287)][_0x4b0c03], _0x550b30['tempFetchRateLimit'] = !![], _0x418f7e(!![])) : alert(_0x2d48a1(0x2af) + _0x529b03[_0x2d48a1(0x13f)]), _0x572202(_0x529b03));
                } else
                    _0x237545(_0x39df80['display_resources']['at'](-0x1)[_0x2d48a1(0x2b2)], _0x5d4ed1, _0x2d48a1(0x287), _0x4ff2bd, _0x2d48a1(0x278), _0x4b0c03), _0x550b30['tempFetchRateLimit'] = ![];
                _0x104471(![]);
            } else {
                if (_0xf0822b(_0x2d48a1(0x18d))['length']) {
                    if (!_0xf0822b(_0x2d48a1(0x337))[_0x2d48a1(0x2d4)]) {
                        let _0x5aae50 = null;
                        _0xf0822b(_0x2d48a1(0x2b1))[_0x2d48a1(0x2d4)] > 0x0 ? _0x5aae50 = _0xf0822b(_0x2d48a1(0x308)) : (_0x5aae50 = _0xf0822b(_0x2d48a1(0x329)), _0x5aae50[_0x2d48a1(0x2a7)](_0x2d48a1(0x1d1), _0x2d48a1(0x33c)));
                        if (_0x5aae50['length'] === 0x0) {
                            let _0x26661d = _0xf0822b('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x5f2a8e = 0x0;
                            _0x26661d[_0x2d48a1(0x129)](function () {
                                const _0x388b36 = _0x2d48a1;
                                _0xf0822b(this)['width']() > _0x5f2a8e && (_0x5f2a8e = _0xf0822b(this)[_0x388b36(0x2bc)](), _0x5aae50 = _0xf0822b(this)[_0x388b36(0x1c0)](_0x388b36(0x1db))['first']());
                            });
                        }
                        _0x5aae50 != null && _0x5aae50[_0x2d48a1(0x288)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x84a48b(_0x2d48a1(0x1f0)) + _0x2d48a1(0x2f4) + _0x50f6bd[_0x2d48a1(0x2d7)] + _0x2d48a1(0x2ad));
                    }
                } else
                    _0xf0822b(_0x2d48a1(0x337))[_0x2d48a1(0x309)]();
            }
        }
        function _0x5bd61c(_0x5e1ea2, _0x402f82) {
            const _0x115b74 = _0x51b01c;
            _0x402f82 === !![] && (_0x572202(_0x115b74(0xff), _0x115b74(0x241)), _0xf0822b(_0x115b74(0x370))[_0x115b74(0x25e)](function () {
                const _0x3ce187 = _0x115b74;
                return _0xf0822b(this)[_0x3ce187(0x1e7)](_0x3ce187(0x1f5))[_0x3ce187(0x2d4)] === 0x0;
            })[_0x115b74(0x23a)](_0x115b74(0x297)));
            if (_0x5e1ea2 == ![]) {
                const _0x3f40b4 = 0x64;
                let _0x4eec4d = 0x0;
                var _0x4a5311 = setInterval(() => {
                    const _0x506b4a = _0x115b74;
                    (_0x4eec4d > _0x3f40b4 || _0xf0822b(_0x506b4a(0x118))[_0x506b4a(0x2d4)] > 0x0) && (clearInterval(_0x4a5311), _0x4eec4d > _0x3f40b4 && console['warn'](_0x506b4a(0x12d), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x572202(_0x506b4a(0x12d), _0x506b4a(0x33e)), _0x537ce2(), _0x4eec4d++;
                }, 0x32);
            } else
                _0x537ce2();
        }
        function _0x38fdb3(_0x2a35e4) {
            const _0x1cf2b7 = _0x51b01c;
            _0x88bc73[_0x1cf2b7(0x1fe)] && _0x2a35e4[_0x1cf2b7(0x1e7)](_0x1cf2b7(0x364))[_0x1cf2b7(0x129)](function () {
                const _0x26feb6 = _0x1cf2b7;
                _0xf0822b(this)['on'](_0x26feb6(0x2b6), function () {
                    const _0x3d14b0 = _0x26feb6;
                    !_0xf0822b(this)[_0x3d14b0(0x2ef)](_0x3d14b0(0x14d)) && (_0xf0822b(this)[_0x3d14b0(0x375)](_0x3d14b0(0x1c4), !![]), this[_0x3d14b0(0x18c)](), _0x572202('(post)\x20Added\x20video\x20event\x20listener\x20#loop'));
                });
            });
            _0x88bc73[_0x1cf2b7(0x123)] && _0x2a35e4[_0x1cf2b7(0x1e7)]('video')[_0x1cf2b7(0x129)](function () {
                const _0x19218b = _0x1cf2b7;
                _0xf0822b(this)['on'](_0x19218b(0xf7), function () {
                    const _0x4ae8d6 = _0x19218b;
                    !_0xf0822b(this)['data']('modify') && (_0xf0822b(this)[_0x4ae8d6(0x375)](_0x4ae8d6(0x1d0), !![]), this[_0x4ae8d6(0x12c)] = _0x550b30[_0x4ae8d6(0x160)], _0x572202('(post)\x20Added\x20video\x20event\x20listener\x20#modify'));
                });
            });
            _0x88bc73[_0x1cf2b7(0x260)] && _0x2a35e4['find'](_0x1cf2b7(0x364))[_0x1cf2b7(0x129)](function () {
                const _0x4377b4 = _0x1cf2b7;
                if (!_0xf0822b(this)[_0x4377b4(0x2ef)](_0x4377b4(0x340))) {
                    let _0x5f360c = _0xf0822b(this);
                    _0x572202(_0x4377b4(0x248)), _0x88bc73[_0x4377b4(0x123)] && (this[_0x4377b4(0x12c)] = _0x550b30[_0x4377b4(0x160)], _0xf0822b(this)['on']('loadstart', function () {
                        const _0x3f3a0a = _0x4377b4;
                        this[_0x3f3a0a(0x12c)] = _0x550b30[_0x3f3a0a(0x160)];
                    })), _0xf0822b(this)['on']('contextmenu', function (_0x1e22a7) {
                        const _0x1a4683 = _0x4377b4;
                        _0x1e22a7[_0x1a4683(0x238)](), _0x5f360c[_0x1a4683(0x2a7)](_0x1a4683(0xf8), '-1'), _0x5f360c[_0x1a4683(0x23a)](_0x1a4683(0x340));
                    }), _0xf0822b(this)[_0x4377b4(0x198)]()[_0x4377b4(0x1e7)](_0x4377b4(0x164))['first']()['on'](_0x4377b4(0x1fb), function (_0x369f6d) {
                        const _0x6bf01c = _0x4377b4;
                        _0x369f6d[_0x6bf01c(0x238)](), _0x5f360c['css'](_0x6bf01c(0xf8), '2'), _0x5f360c[_0x6bf01c(0x375)](_0x6bf01c(0x340), !![]);
                    }), _0xf0822b(this)['on'](_0x4377b4(0x18a), function () {
                        const _0x3e938a = _0x4377b4;
                        let _0x5d0124 = _0xf0822b(this)[_0x3e938a(0x198)]()[_0x3e938a(0x1e7)](_0x3e938a(0x164))[_0x3e938a(0x1e7)](_0x3e938a(0x1c6))['filter'](function (_0x379572) {
                            const _0x383bc4 = _0x3e938a;
                            return _0xf0822b(this)[_0x383bc4(0x2bc)]() <= 0x40 && _0xf0822b(this)['height']() <= 0x40 && _0xf0822b(this)[_0x383bc4(0x1e7)](_0x383bc4(0x1bc))[_0x383bc4(0x2d4)] > 0x0;
                        });
                        var _0x126a6a = _0x5d0124[_0x3e938a(0x1e7)](_0x3e938a(0x38b))[_0x3e938a(0x2d4)] === 0x0;
                        this[_0x3e938a(0x101)] != _0x126a6a && (this[_0x3e938a(0x12c)] = _0x550b30[_0x3e938a(0x160)], _0x5d0124?.[_0x3e938a(0x1a4)]('click')), _0xf0822b(this)['attr'](_0x3e938a(0x356)) && (_0x550b30[_0x3e938a(0x160)] = this[_0x3e938a(0x12c)], GM_setValue(_0x3e938a(0x19d), this[_0x3e938a(0x12c)])), this[_0x3e938a(0x12c)] == _0x550b30['videoVolume'] && _0xf0822b(this)[_0x3e938a(0x375)](_0x3e938a(0x356), !![]);
                    }), _0xf0822b(this)['css'](_0x4377b4(0x1d1), _0x4377b4(0x124)), _0xf0822b(this)[_0x4377b4(0x2a7)](_0x4377b4(0xf8), '2'), _0xf0822b(this)[_0x4377b4(0x375)](_0x4377b4(0x29b), !![]), _0xf0822b(this)[_0x4377b4(0x375)](_0x4377b4(0x340), !![]);
                }
            });
            var _0x178072 = _0x2a35e4['find'](_0x1cf2b7(0x364)), _0x4b1e94 = _0x2a35e4[_0x1cf2b7(0x1e7)]('video\x20+\x20div\x20>\x20div')[_0x1cf2b7(0x35f)]();
            _0x2e4efd(_0x178072, _0x4b1e94, _0x1cf2b7(0x112), _0x1cf2b7(0x146));
        }
        ;
        function _0x537ce2() {
            const _0x5664ee = _0x51b01c;
            _0xf0822b('article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr')[_0x5664ee(0x1da)](function (_0x4380d0) {
                const _0x3e540f = _0x5664ee;
                return _0xf0822b(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0xf0822b(this)['parent']()[_0x3e540f(0x198)]()['parent']()[_0x3e540f(0x198)]()[0x0] : this;
            })[_0x5664ee(0x25e)](function () {
                const _0x371094 = _0x5664ee;
                return _0xf0822b(this)[_0x371094(0x199)]() > 0x0 && _0xf0822b(this)[_0x371094(0x2bc)]() > 0x0;
            })[_0x5664ee(0x129)](function (_0x558b2d) {
                const _0x5532bb = _0x5664ee;
                if (!_0xf0822b(this)[_0x5532bb(0x375)](_0x5532bb(0x297)) && !_0xf0822b(this)[_0x5532bb(0x11b)](_0x5532bb(0x2cc)) && !_0xf0822b(this)[_0x5532bb(0x1c0)](_0x5532bb(0x2ac))?.[_0x5532bb(0x11b)](_0x5532bb(0x2cc)) && _0xf0822b(this)[_0x5532bb(0x347)](_0x5532bb(0x335))['length'] === 0x0) {
                    _0x572202(_0x5532bb(0x30e), _0xf0822b(this));
                    const _0x14adaf = _0xf0822b(this), _0x2a91ce = this['tagName'], _0x32dfc0 = _0x5532bb(0x205);
                    var _0x4c788d;
                    if (_0x2a91ce === 'DIV' && _0x558b2d != 0x0)
                        return;
                    const _0x403767 = _0x14adaf[_0x5532bb(0x1c0)](_0x5532bb(0x1db))[_0x5532bb(0x1c0)](_0x5532bb(0x1db));
                    if (_0x403767[_0x5532bb(0x2d4)] === 0x0)
                        return;
                    _0x572202(_0x5532bb(0x130), _0x403767);
                    if (_0x14adaf[_0x5532bb(0x1e7)](_0x5532bb(0x1e6))['length'] > 0x0) {
                        _0x14adaf['find'](_0x5532bb(0x31a))['length'] > 0x0 && _0x14adaf[_0x5532bb(0x1e7)](_0x5532bb(0x31a))[_0x5532bb(0x2a7)](_0x5532bb(0x2f1), '37px');
                        const _0xb0694e = _0x14adaf[_0x5532bb(0x1e7)](_0x5532bb(0x1e6))[_0x5532bb(0x35f)]()[_0x5532bb(0x198)]()[0x0];
                        var _0x2d86ee = new MutationObserver(function () {
                            const _0x4e6380 = _0x5532bb;
                            _0x14adaf[_0x4e6380(0x1e7)](_0x4e6380(0x31a))['css'](_0x4e6380(0x2f1), _0x4e6380(0x256));
                        });
                        _0x2d86ee['observe'](_0xb0694e, { 'childList': !![] });
                    }
                    _0x403767['eq'](_0x2a91ce === 'DIV' ? 0x0 : _0x403767[_0x5532bb(0x2d4)] - 0x2)['append']('<div\x20class=\x22button_wrapper\x22>');
                    const _0x5ad6b4 = _0x5532bb(0x363) + _0x84a48b('DW') + _0x5532bb(0x24e) + _0x50f6bd[_0x5532bb(0x336)] + '</div>', _0xa4d749 = _0x5532bb(0x193) + _0x84a48b('NEW_TAB') + '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>' + _0x50f6bd[_0x5532bb(0x2ca)] + _0x5532bb(0x2ad), _0x32df4b = _0x5532bb(0x2e7) + _0x84a48b(_0x5532bb(0x1f0)) + '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>' + _0x50f6bd[_0x5532bb(0x2d7)] + '</div>', _0x329ab5 = _0x5532bb(0x2ea) + _0x84a48b('IMAGE_VIEWER') + _0x5532bb(0x1ca) + _0x50f6bd['FULLSCREEN'] + _0x5532bb(0x2ad);
                    _0x403767[_0x5532bb(0x1e7)](_0x5532bb(0x34d))[_0x5532bb(0x288)](_0x5ad6b4);
                    const _0x411a92 = _0x14adaf['find'](_0x32dfc0)[_0x5532bb(0x2d4)];
                    if (_0x411a92 > 0x1 && _0x88bc73[_0x5532bb(0x139)] && !_0x88bc73[_0x5532bb(0x179)]) {
                        const _0x30ef00 = _0x5532bb(0x1a7) + _0x84a48b(_0x5532bb(0x158)) + '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>' + _0x50f6bd['DOWNLOAD_ALL'] + '</div>';
                        _0x403767[_0x5532bb(0x1e7)](_0x5532bb(0x34d))[_0x5532bb(0x288)](_0x30ef00);
                    }
                    _0x403767[_0x5532bb(0x1e7)](_0x5532bb(0x34d))[_0x5532bb(0x288)](_0xa4d749), setTimeout(() => {
                        const _0x1ae8f9 = _0x5532bb;
                        if (_0x403767['eq'](_0x2a91ce === 'DIV' ? 0x0 : _0x403767[_0x1ae8f9(0x2d4)] - 0x2)[_0x1ae8f9(0x1e7)]('div\x20>\x20ul\x20li._acaz')['length'] === 0x0)
                            _0x403767[_0x1ae8f9(0x1e7)](_0x1ae8f9(0x364))[_0x1ae8f9(0x2d4)] > 0x0 ? _0x403767[_0x1ae8f9(0x1e7)](_0x1ae8f9(0x34d))['append'](_0x32df4b) : (_0x4c788d = _0x14adaf[_0x1ae8f9(0x1e7)](_0x1ae8f9(0x358))[_0x1ae8f9(0x25e)](function () {
                                const _0x159256 = _0x1ae8f9;
                                return _0xf0822b(this)[_0x159256(0x2bc)]() > 0xc8 && _0xf0822b(this)[_0x159256(0x199)]() > 0xc8;
                            })['attr']('src'), _0x403767[_0x1ae8f9(0x1e7)](_0x1ae8f9(0x34d))[_0x1ae8f9(0x288)](_0x329ab5));
                        else {
                            const _0x521a1d = (_0x3c1ad2, _0x1f9b14) => {
                                    const _0x14b25d = _0x1ae8f9;
                                    _0x3c1ad2[_0x14b25d(0x16c)](_0x51018e => {
                                        const _0x29daad = _0x14b25d;
                                        if (_0x51018e[_0x29daad(0x2c8)]) {
                                            var _0x42f040 = _0xf0822b(_0x51018e[_0x29daad(0x34a)]);
                                            _0x403767['find'](_0x29daad(0x2c1))?.[_0x29daad(0x309)](), _0x403767[_0x29daad(0x1e7)](_0x29daad(0x1e3))?.['remove'](), _0x42f040[_0x29daad(0x1e7)](_0x29daad(0x364))[_0x29daad(0x2d4)] > 0x0 ? (_0x403767['find'](_0x29daad(0x2c1))[_0x29daad(0x2d4)] === 0x0 && _0x403767[_0x29daad(0x1e7)](_0x29daad(0x34d))['append'](_0x32df4b), _0x38fdb3(_0x14adaf)) : (_0x4c788d = _0x42f040[_0x29daad(0x1e7)](_0x29daad(0x358))[_0x29daad(0x375)]('src'), _0x403767[_0x29daad(0x1e7)]('.button_wrapper')[_0x29daad(0x288)](_0x329ab5));
                                        }
                                    });
                                }, _0x428cda = new IntersectionObserver(_0x521a1d, {
                                    'root': _0x14adaf[_0x1ae8f9(0x1e7)]('div\x20>\x20ul._acay')['first']()[_0x1ae8f9(0x198)]()[_0x1ae8f9(0x198)]()[_0x1ae8f9(0x198)]()[0x0],
                                    'rootMargin': _0x1ae8f9(0x1dc),
                                    'threshold': 0.1
                                }), _0x403bf6 = new MutationObserver(function (_0x2e5c9c, _0x3f13f6) {
                                    const _0x4f2f7b = _0x1ae8f9;
                                    var _0x1904f9 = _0x2e5c9c['at'](0x0)?.[_0x4f2f7b(0x34a)];
                                    _0xf0822b(_0x1904f9)[_0x4f2f7b(0x1e7)](_0x4f2f7b(0x225))[_0x4f2f7b(0x129)](function () {
                                        const _0x317935 = _0x4f2f7b;
                                        _0x428cda[_0x317935(0x197)](this);
                                    });
                                });
                            _0x14adaf['find'](_0x1ae8f9(0x18f))[_0x1ae8f9(0x129)](function () {
                                const _0x1492ba = _0x1ae8f9;
                                _0x428cda[_0x1492ba(0x197)](this);
                            });
                            const _0x231d6 = _0x403767['eq'](_0x2a91ce === _0x1ae8f9(0x210) ? 0x0 : _0x403767[_0x1ae8f9(0x2d4)] - 0x2)[_0x1ae8f9(0x1e7)]('div\x20>\x20ul\x20li._acaz')?.['parent']()[0x0], _0xd0b59c = _0x403767['eq'](_0x2a91ce === _0x1ae8f9(0x210) ? 0x0 : _0x403767[_0x1ae8f9(0x2d4)] - 0x2)[_0x1ae8f9(0x1e7)](_0x1ae8f9(0x18f))?.['parent']()[_0x1ae8f9(0x198)]()[0x0];
                            _0x231d6 && _0x403bf6[_0x1ae8f9(0x197)](_0x231d6, { 'childList': !![] }), _0xd0b59c && _0x403bf6[_0x1ae8f9(0x197)](_0xd0b59c, { 'attributes': !![] });
                        }
                    }, 0x32), _0x403767[_0x5532bb(0x2a7)](_0x5532bb(0x1d1), _0x5532bb(0x33c)), _0x38fdb3(_0x14adaf), _0x550b30[_0x5532bb(0x152)]['push']({
                        'element': this,
                        'trigger': [
                            _0x5532bb(0x2c1),
                            _0x5532bb(0x281),
                            _0x5532bb(0x223),
                            _0x5532bb(0x1f5),
                            _0x5532bb(0x1e3)
                        ]
                    }), _0xf0822b(this)['on'](_0x5532bb(0x380), _0x5532bb(0x1e3), function () {
                        const _0x4889d1 = _0x5532bb;
                        _0x4c788d != null ? _0x28625c(_0x4c788d) : alert(_0x4889d1(0x207));
                    }), _0xf0822b(this)['on']('click', _0x5532bb(0x2c1), function () {
                        const _0x2f80bc = _0x5532bb;
                        _0x104471(!![]), _0x550b30[_0x2f80bc(0x1a5)] = _0x14adaf[_0x2f80bc(0x375)](_0x2f80bc(0x35a)), _0x550b30[_0x2f80bc(0x163)] = location[_0x2f80bc(0x10e)][_0x2f80bc(0x32c)](/\/$/, '')[_0x2f80bc(0x33d)]('/')['at'](-0x1) || _0x14adaf['find']('a[href^=\x22/p/\x22]')[_0x2f80bc(0x35f)]()[_0x2f80bc(0x375)](_0x2f80bc(0x38a))[_0x2f80bc(0x33d)]('/')['at'](0x2) || _0xf0822b(this)['parent']()[_0x2f80bc(0x198)]()[_0x2f80bc(0x198)]()[_0x2f80bc(0x1c0)](_0x2f80bc(0x26e))['children']('div')[_0x2f80bc(0x1c0)](_0x2f80bc(0x26e))[_0x2f80bc(0x1e7)]('a[href^=\x22/p/\x22]')[_0x2f80bc(0xed)]()[_0x2f80bc(0x375)](_0x2f80bc(0x38a))['split']('/')['at'](0x2);
                        var _0x3d5ed1 = _0x4024d8(_0x14adaf);
                        _0x64ee85(!![], ![]), _0x27785a(_0x550b30[_0x2f80bc(0x163)], _0x2f80bc(0x317), '')[_0x2f80bc(0x2b8)](() => {
                            let _0x35df84 = setInterval(() => {
                                const _0x493152 = a0_0x1eaf;
                                if (_0xf0822b(_0x493152(0x26b))[_0x493152(0x2d4)] > 0x0) {
                                    clearInterval(_0x35df84);
                                    var _0x3dcad0 = _0xf0822b(_0x493152(0x1cf) + (_0x3d5ed1 + 0x1) + '\x22]')?.['parent']()['find'](_0x493152(0x17c))?.[_0x493152(0x35f)]();
                                    _0x3dcad0 != null && _0x3dcad0[_0x493152(0x2d4)] > 0x0 ? _0x3dcad0[_0x493152(0x1a4)](_0x493152(0x380)) : alert(_0x493152(0x159)), _0x104471(![]), _0xf0822b(_0x493152(0x253))[_0x493152(0x309)]();
                                }
                            }, 0xfa);
                        });
                    }), _0xf0822b(this)['on'](_0x5532bb(0x380), _0x5532bb(0x281), function () {
                        const _0x4e5044 = _0x5532bb;
                        _0x104471(!![]), _0x550b30[_0x4e5044(0x1a5)] = _0x14adaf[_0x4e5044(0x375)](_0x4e5044(0x35a)), _0x550b30[_0x4e5044(0x163)] = location[_0x4e5044(0x10e)][_0x4e5044(0x32c)](/\/$/, '')[_0x4e5044(0x33d)]('/')['at'](-0x1) || _0x14adaf[_0x4e5044(0x1e7)](_0x4e5044(0x17e))[_0x4e5044(0x35f)]()[_0x4e5044(0x375)]('href')[_0x4e5044(0x33d)]('/')['at'](0x2) || _0xf0822b(this)[_0x4e5044(0x198)]()[_0x4e5044(0x198)]()[_0x4e5044(0x198)]()[_0x4e5044(0x1c0)](_0x4e5044(0x26e))[_0x4e5044(0x1c0)]('div')[_0x4e5044(0x1c0)](_0x4e5044(0x26e))[_0x4e5044(0x1e7)](_0x4e5044(0x17e))[_0x4e5044(0xed)]()['attr']('href')[_0x4e5044(0x33d)]('/')['at'](0x2);
                        var _0x36ef6a = _0x4024d8(_0x14adaf);
                        _0x64ee85(!![], ![]), _0x27785a(_0x550b30['GL_postPath'], _0x4e5044(0x317), '')[_0x4e5044(0x2b8)](() => {
                            let _0x23cc67 = setInterval(() => {
                                const _0xdfdf62 = a0_0x1eaf;
                                if (_0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0xdfdf62(0x2d4)] > 0x0) {
                                    clearInterval(_0x23cc67);
                                    var _0x4dfa95 = _0xf0822b(_0xdfdf62(0x1cf) + (_0x36ef6a + 0x1) + '\x22]');
                                    if (_0x88bc73[_0xdfdf62(0x2e9)] && _0x88bc73[_0xdfdf62(0x236)])
                                        _0x10701b(_0x4dfa95['first']()[0x0], !![]);
                                    else {
                                        let _0x22a953 = _0x4dfa95?.[_0xdfdf62(0x375)](_0xdfdf62(0x32f));
                                        if (_0x22a953) {
                                            var _0x30c1cf = new URL(_0x22a953);
                                            _0x30c1cf[_0xdfdf62(0xee)] = _0xdfdf62(0x1a6), _0x55374a(_0x30c1cf[_0xdfdf62(0x38a)]);
                                        } else
                                            alert(_0xdfdf62(0x2a9));
                                    }
                                    _0x104471(![]), _0xf0822b('.IG_POPUP_DIG')['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0xf0822b(this)['on']('click', '.IG_DW_ALL_MAIN', async function () {
                        const _0x28db15 = _0x5532bb;
                        _0x550b30[_0x28db15(0x1a5)] = _0x14adaf[_0x28db15(0x375)](_0x28db15(0x35a)), _0x550b30[_0x28db15(0x163)] = location[_0x28db15(0x10e)]['replace'](/\/$/, '')[_0x28db15(0x33d)]('/')['at'](-0x1) || _0x14adaf[_0x28db15(0x1e7)](_0x28db15(0x17e))[_0x28db15(0x35f)]()[_0x28db15(0x375)](_0x28db15(0x38a))['split']('/')['at'](0x2) || _0xf0822b(this)[_0x28db15(0x198)]()[_0x28db15(0x198)]()[_0x28db15(0x198)]()[_0x28db15(0x1c0)]('div:last-child')[_0x28db15(0x1c0)](_0x28db15(0x1db))[_0x28db15(0x1c0)](_0x28db15(0x26e))[_0x28db15(0x1e7)](_0x28db15(0x17e))[_0x28db15(0xed)]()[_0x28db15(0x375)](_0x28db15(0x38a))['split']('/')['at'](0x2), _0x64ee85(_0x88bc73[_0x28db15(0x179)], !![]), _0xf0822b('#article-id')['html'](_0x28db15(0x145) + _0x550b30[_0x28db15(0x163)] + '\x22>' + _0x550b30[_0x28db15(0x163)] + '</a>'), _0xf0822b(_0x28db15(0x26b))[_0x28db15(0x129)](function () {
                            const _0x74bcfa = _0x28db15;
                            _0xf0822b(this)[_0x74bcfa(0x366)](_0x74bcfa(0x295)), _0xf0822b(this)[_0x74bcfa(0x234)]('<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>'), _0xf0822b(this)[_0x74bcfa(0x2fa)](_0x74bcfa(0x193) + _0x84a48b(_0x74bcfa(0x2ca)) + _0x74bcfa(0x196) + _0x50f6bd[_0x74bcfa(0x2ca)] + _0x74bcfa(0x2ad)), _0xf0822b(this)['attr'](_0x74bcfa(0x184)) == 'video' && _0xf0822b(this)[_0x74bcfa(0x2fa)](_0x74bcfa(0x2e7) + _0x84a48b('THUMBNAIL_INTRO') + '\x22\x20class=\x22videoThumbnail\x22>' + _0x50f6bd['THUMBNAIL'] + _0x74bcfa(0x2ad));
                        }), _0x27785a(_0x550b30[_0x28db15(0x163)], _0x28db15(0x317), _0x84a48b(_0x28db15(0x325)))[_0x28db15(0x2b8)](() => {
                            let _0x26e584 = setInterval(() => {
                                const _0x25f5c8 = a0_0x1eaf;
                                _0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x25f5c8(0x2d4)] > 0x0 && (clearInterval(_0x26e584), _0xf0822b(_0x25f5c8(0x26b))[_0x25f5c8(0x129)](function () {
                                    const _0x4f9e0e = _0x25f5c8;
                                    _0xf0822b(this)[_0x4f9e0e(0x1a4)](_0x4f9e0e(0x380));
                                }), _0xf0822b('.IG_POPUP_DIG')[_0x25f5c8(0x309)]());
                            }, 0xfa);
                        });
                    }), _0xf0822b(this)['on'](_0x5532bb(0x380), _0x5532bb(0x1f5), async function () {
                        const _0x40ccd1 = _0x5532bb;
                        _0x550b30[_0x40ccd1(0x1a5)] = _0x14adaf[_0x40ccd1(0x375)](_0x40ccd1(0x35a)), _0x550b30['GL_postPath'] = location[_0x40ccd1(0x10e)]['replace'](/\/$/, '')['split']('/')['at'](-0x1) || _0x14adaf[_0x40ccd1(0x1e7)](_0x40ccd1(0x17e))[_0x40ccd1(0x35f)]()['attr']('href')[_0x40ccd1(0x33d)]('/')['at'](0x2) || _0xf0822b(this)['parent']()[_0x40ccd1(0x198)]()['parent']()['children'](_0x40ccd1(0x26e))['children'](_0x40ccd1(0x1db))[_0x40ccd1(0x1c0)](_0x40ccd1(0x26e))[_0x40ccd1(0x1e7)](_0x40ccd1(0x17e))['last']()['attr'](_0x40ccd1(0x38a))[_0x40ccd1(0x33d)]('/')['at'](0x2), _0x64ee85(_0x88bc73[_0x40ccd1(0x179)], !![]), _0xf0822b(_0x40ccd1(0x36a))[_0x40ccd1(0x348)](_0x40ccd1(0x145) + _0x550b30[_0x40ccd1(0x163)] + '\x22>' + _0x550b30[_0x40ccd1(0x163)] + _0x40ccd1(0x20a));
                        if (_0x88bc73[_0x40ccd1(0x139)]) {
                            _0x104471(!![]), _0x459685(!![]);
                            var _0x342d27 = _0x4024d8(_0xf0822b(this)[_0x40ccd1(0x198)]()[_0x40ccd1(0x198)]()[_0x40ccd1(0x198)]());
                            _0x27785a(_0x550b30[_0x40ccd1(0x163)], _0x40ccd1(0x317), '')[_0x40ccd1(0x2b8)](() => {
                                let _0x37e9dc = setInterval(() => {
                                    const _0x44befc = a0_0x1eaf;
                                    if (_0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x44befc(0x2d4)] > 0x0) {
                                        clearInterval(_0x37e9dc);
                                        var _0x24bba4 = _0xf0822b(_0x44befc(0x1cf) + (_0x342d27 + 0x1) + '\x22]')?.['attr']('data-href');
                                        _0x24bba4 ? (_0x104471(![]), _0xf0822b(_0x44befc(0x1cf) + (_0x342d27 + 0x1) + '\x22]')?.[_0x44befc(0x1a4)]('click')) : alert(_0x44befc(0x28a)), _0xf0822b(_0x44befc(0x253))['remove']();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x88bc73['DIRECT_DOWNLOAD_ALL']) {
                            var _0x5dbe55 = 0x0, _0x1054d7 = _0xf0822b(this)[_0x40ccd1(0x198)]()[_0x40ccd1(0x198)]()['find'](_0x32dfc0)['length'], _0x1c7ab8 = _0x88bc73[_0x40ccd1(0x187)], _0x34cf5f = new Date(_0xf0822b(this)[_0x40ccd1(0x198)]()[_0x40ccd1(0x198)]()[_0x40ccd1(0x1e7)]('a[href^=\x22/p/\x22]\x20time[datetime]')[_0x40ccd1(0x35f)]()['attr'](_0x40ccd1(0x25d)))[_0x40ccd1(0x27c)]();
                            if (_0x1054d7)
                                _0xf0822b(this)['parent']()[_0x40ccd1(0x198)]()['find'](_0x32dfc0)[_0x40ccd1(0x129)](function () {
                                    const _0x30b203 = _0x40ccd1;
                                    let _0x3c823c = _0xf0822b(this)[_0x30b203(0x198)]()[_0x30b203(0x198)]()[_0x30b203(0x198)]()[_0x30b203(0x1e7)](_0x30b203(0x364));
                                    _0x3c823c && _0x3c823c[_0x30b203(0x375)](_0x30b203(0x2b2)) && (_0x1c7ab8 = !![]);
                                }), _0x1c7ab8 || _0x88bc73[_0x40ccd1(0x2e9)] ? _0x27785a(_0x550b30[_0x40ccd1(0x163)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x84a48b(_0x40ccd1(0x325))) : (_0xf0822b(this)[_0x40ccd1(0x198)]()[_0x40ccd1(0x198)]()['find'](_0x32dfc0)[_0x40ccd1(0x129)](function () {
                                    const _0x16919b = _0x40ccd1;
                                    _0x5dbe55++;
                                    let _0x381966 = _0xf0822b(this)['find'](_0x16919b(0x364)), _0x4bbecb = _0xf0822b(this)[_0x16919b(0x1e7)]('._aagv\x20img'), _0x4280a3 = _0x4bbecb['attr']('srcset') ? _0x4bbecb[_0x16919b(0x375)](_0x16919b(0x13b))[_0x16919b(0x33d)]('\x20')[0x0] : _0x4bbecb['attr']('src');
                                    _0x381966 && _0x381966['attr'](_0x16919b(0x2b2)) && (_0x1c7ab8 = !![]), _0x4bbecb && _0x4280a3 && _0xf0822b(_0x16919b(0x317))[_0x16919b(0x288)](_0x16919b(0x387) + _0x34cf5f + _0x16919b(0x228) + _0x550b30[_0x16919b(0x163)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x5dbe55 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x4280a3 + _0x16919b(0x310) + _0x4280a3 + _0x16919b(0x328) + _0x84a48b('IMG') + _0x16919b(0x2ab) + _0x5dbe55 + _0x16919b(0x2b0));
                                }), _0x1c7ab8 && _0x27785a(_0x550b30[_0x40ccd1(0x163)], _0x40ccd1(0x317), _0x84a48b(_0x40ccd1(0x1d3))));
                            else {
                                if (_0x88bc73[_0x40ccd1(0x2e9)])
                                    _0x27785a(_0x550b30['GL_postPath'], _0x40ccd1(0x317), _0x84a48b(_0x40ccd1(0x325)));
                                else {
                                    _0x5dbe55++;
                                    let _0x4f0c19 = _0xf0822b(this)['parent']()['parent']()[_0x40ccd1(0x198)]()[_0x40ccd1(0x1e7)](_0x40ccd1(0x364)), _0x158044 = _0xf0822b(this)['parent']()[_0x40ccd1(0x198)]()[_0x40ccd1(0x198)]()[_0x40ccd1(0x1e7)](_0x40ccd1(0x176)), _0x110fb3 = _0x158044[_0x40ccd1(0x375)]('srcset') ? _0x158044[_0x40ccd1(0x375)](_0x40ccd1(0x13b))['split']('\x20')[0x0] : _0x158044[_0x40ccd1(0x375)](_0x40ccd1(0x2b2));
                                    _0x4f0c19 && _0x4f0c19[_0x40ccd1(0x375)]('src') && _0x27785a(_0x550b30['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x84a48b('LOAD_BLOB_ONE')), _0x158044 && _0x110fb3 && _0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY')['append']('<a\x20datetime=\x22' + _0x34cf5f + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x550b30[_0x40ccd1(0x163)] + _0x40ccd1(0x25c) + _0x5dbe55 + _0x40ccd1(0x1e4) + _0x110fb3 + _0x40ccd1(0x310) + _0x110fb3 + _0x40ccd1(0x328) + _0x84a48b(_0x40ccd1(0x27f)) + _0x40ccd1(0x2ab) + _0x5dbe55 + '\x20-</a>');
                                }
                            }
                        }
                        _0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x40ccd1(0x129)](function () {
                            const _0x38fae9 = _0x40ccd1;
                            _0xf0822b(this)[_0x38fae9(0x366)]('<div></div>'), _0xf0822b(this)[_0x38fae9(0x234)](_0x38fae9(0x26c)), _0xf0822b(this)[_0x38fae9(0x2fa)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x84a48b(_0x38fae9(0x2ca)) + _0x38fae9(0x196) + _0x50f6bd[_0x38fae9(0x2ca)] + _0x38fae9(0x2ad)), _0xf0822b(this)[_0x38fae9(0x375)](_0x38fae9(0x184)) == 'video' && _0xf0822b(this)[_0x38fae9(0x2fa)](_0x38fae9(0x2e7) + _0x84a48b(_0x38fae9(0x1f0)) + _0x38fae9(0x259) + _0x50f6bd[_0x38fae9(0x2d7)] + '</div>');
                        }), _0x88bc73[_0x40ccd1(0x179)] && _0x27785a(_0x550b30[_0x40ccd1(0x163)], _0x40ccd1(0x317), _0x84a48b(_0x40ccd1(0x325)))[_0x40ccd1(0x2b8)](() => {
                            let _0x1ee5b3 = setInterval(() => {
                                const _0x3f0c7b = a0_0x1eaf;
                                _0xf0822b(_0x3f0c7b(0x26b))[_0x3f0c7b(0x2d4)] > 0x0 && (clearInterval(_0x1ee5b3), _0xf0822b(_0x3f0c7b(0x26b))[_0x3f0c7b(0x129)](function () {
                                    const _0x4b5fc2 = _0x3f0c7b;
                                    _0xf0822b(this)[_0x4b5fc2(0x1a4)](_0x4b5fc2(0x380));
                                }), _0xf0822b(_0x3f0c7b(0x253))[_0x3f0c7b(0x309)]());
                            }, 0xfa);
                        });
                    });
                    var _0x51a1b1 = _0xf0822b(this)['find']('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x5532bb(0x35f)]()[_0x5532bb(0x2bf)]() || _0xf0822b(this)['find'](_0x5532bb(0x307))[_0x5532bb(0x25e)](function () {
                        const _0x30401c = _0x5532bb;
                        return _0xf0822b(this)?.['text']()?.[_0x30401c(0x2d4)] > 0x0;
                    })[_0x5532bb(0x35f)]()['text']();
                    _0xf0822b(this)[_0x5532bb(0x375)](_0x5532bb(0x297), 'canDownload'), _0xf0822b(this)[_0x5532bb(0x375)](_0x5532bb(0x35a), _0x51a1b1);
                }
            });
        }
        function _0x45e020(_0xa284f8) {
            const _0x1e5b3f = _0x51b01c;
            var _0x2c2d8f = _0xa284f8[_0x1e5b3f(0x2cf)] ?? _0xa284f8;
            return _0x2c2d8f['owner'] == null && _0x2c2d8f['user'] != null && (_0x2c2d8f[_0x1e5b3f(0x302)] = _0x2c2d8f[_0x1e5b3f(0x2f7)]), _0x2c2d8f[_0x1e5b3f(0x302)] == null && (_0x572202(_0x1e5b3f(0x168), _0x1e5b3f(0x222)), alert(_0x1e5b3f(0x37d))), _0x2c2d8f;
        }
        async function _0x27785a(_0x53af65, _0x55e4ea, _0x426b0c) {
            const _0x1ff78b = _0x51b01c;
            try {
                _0xf0822b(_0x55e4ea + '\x20a')[_0x1ff78b(0x309)](), _0xf0822b(_0x55e4ea)['append'](_0x1ff78b(0x2d1) + _0x426b0c + _0x1ff78b(0x333));
                let _0x558daf = await _0x279941(_0x53af65), _0x2944fb = _0x45e020(_0x558daf[_0x1ff78b(0x2ef)]);
                if (_0x558daf['type'] === _0x1ff78b(0x17f)) {
                    let _0x267fe4 = 0x1;
                    _0x2944fb[_0x1ff78b(0x2c9)] == _0x1ff78b(0x109) && _0x2944fb[_0x1ff78b(0x13a)] && (_0xf0822b(_0x55e4ea)[_0x1ff78b(0x288)](_0x1ff78b(0x27b) + _0x2944fb['id'] + _0x1ff78b(0x2e1) + _0x2944fb[_0x1ff78b(0xf6)] + _0x1ff78b(0x132) + _0x2944fb[_0x1ff78b(0x267)] + _0x1ff78b(0x38c) + _0x2944fb[_0x1ff78b(0x302)][_0x1ff78b(0x1ea)] + _0x1ff78b(0x23b) + _0x267fe4 + _0x1ff78b(0x245) + _0x2944fb[_0x1ff78b(0x13a)] + _0x1ff78b(0x310) + _0x2944fb[_0x1ff78b(0x17b)][0x1][_0x1ff78b(0x2b2)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x84a48b(_0x1ff78b(0x1ad)) + _0x1ff78b(0x2ab) + _0x267fe4 + _0x1ff78b(0x2b0)), _0x267fe4++);
                    _0x2944fb[_0x1ff78b(0x2c9)] == _0x1ff78b(0x1b8) && (_0xf0822b(_0x55e4ea)[_0x1ff78b(0x288)](_0x1ff78b(0x27b) + _0x2944fb['id'] + _0x1ff78b(0x2e1) + _0x2944fb[_0x1ff78b(0xf6)] + _0x1ff78b(0x132) + _0x2944fb[_0x1ff78b(0x267)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x2944fb[_0x1ff78b(0x302)][_0x1ff78b(0x1ea)] + _0x1ff78b(0x23b) + _0x267fe4 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x2944fb[_0x1ff78b(0x17b)][_0x2944fb['display_resources'][_0x1ff78b(0x2d4)] - 0x1]['src'] + _0x1ff78b(0x310) + _0x2944fb[_0x1ff78b(0x17b)][0x1]['src'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x84a48b(_0x1ff78b(0x27f)) + _0x1ff78b(0x2ab) + _0x267fe4 + '\x20-</a>'), _0x267fe4++);
                    if (_0x2944fb[_0x1ff78b(0x2c9)] == _0x1ff78b(0x175) && _0x2944fb['edge_sidecar_to_children'])
                        for (let _0x13ceaf of _0x2944fb['edge_sidecar_to_children']['edges']) {
                            _0x13ceaf[_0x1ff78b(0x293)]['__typename'] == _0x1ff78b(0x109) && _0xf0822b(_0x55e4ea)['append'](_0x1ff78b(0x27b) + _0x13ceaf[_0x1ff78b(0x293)]['id'] + _0x1ff78b(0x2e1) + _0x2944fb[_0x1ff78b(0xf6)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2944fb[_0x1ff78b(0x267)] + _0x1ff78b(0x38c) + _0x2944fb[_0x1ff78b(0x302)][_0x1ff78b(0x1ea)] + _0x1ff78b(0x23b) + _0x267fe4 + _0x1ff78b(0x245) + _0x13ceaf['node']['video_url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x13ceaf['node']['display_resources'][0x1]['src'] + _0x1ff78b(0x206) + _0x84a48b(_0x1ff78b(0x1ad)) + _0x1ff78b(0x2ab) + _0x267fe4 + _0x1ff78b(0x2b0)), _0x13ceaf[_0x1ff78b(0x293)][_0x1ff78b(0x2c9)] == _0x1ff78b(0x1b8) && _0xf0822b(_0x55e4ea)['append'](_0x1ff78b(0x27b) + _0x13ceaf[_0x1ff78b(0x293)]['id'] + _0x1ff78b(0x2e1) + _0x2944fb[_0x1ff78b(0xf6)] + _0x1ff78b(0x132) + _0x2944fb['shortcode'] + _0x1ff78b(0x15e) + _0x2944fb[_0x1ff78b(0x302)][_0x1ff78b(0x1ea)] + _0x1ff78b(0x23b) + _0x267fe4 + _0x1ff78b(0x245) + _0x13ceaf[_0x1ff78b(0x293)][_0x1ff78b(0x17b)][_0x13ceaf[_0x1ff78b(0x293)][_0x1ff78b(0x17b)][_0x1ff78b(0x2d4)] - 0x1]['src'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x13ceaf['node'][_0x1ff78b(0x17b)][0x1]['src'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x84a48b(_0x1ff78b(0x27f)) + _0x1ff78b(0x2ab) + _0x267fe4 + _0x1ff78b(0x2b0)), _0x267fe4++;
                        }
                } else {
                    if (_0x2944fb[_0x1ff78b(0x102)])
                        _0x572202(_0x1ff78b(0x102)), _0x2944fb[_0x1ff78b(0x102)]['forEach']((_0x495677, _0x2e6a40) => {
                            const _0x2da5b4 = _0x1ff78b;
                            let _0x20fd24 = _0x2e6a40 + 0x1;
                            _0x495677['video_versions'] == null ? (_0x495677['image_versions2']['candidates']['sort'](function (_0x19f3b9, _0x296245) {
                                const _0x27b5a8 = a0_0x1eaf;
                                let _0x5beb0e = new URL(_0x19f3b9['url'])[_0x27b5a8(0x270)][_0x27b5a8(0x154)](_0x27b5a8(0x244)), _0x5cf662 = new URL(_0x296245[_0x27b5a8(0x19c)])[_0x27b5a8(0x270)][_0x27b5a8(0x154)]('stp');
                                if (_0x5beb0e && _0x5cf662) {
                                    if (_0x5beb0e[_0x27b5a8(0x2d4)] > _0x5cf662['length'])
                                        return 0x1;
                                    if (_0x5beb0e[_0x27b5a8(0x2d4)] < _0x5cf662[_0x27b5a8(0x2d4)])
                                        return -0x1;
                                } else {
                                    if (_0x19f3b9[_0x27b5a8(0x2bc)] < _0x296245[_0x27b5a8(0x2bc)])
                                        return 0x1;
                                    if (_0x19f3b9['width'] > _0x296245[_0x27b5a8(0x2bc)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0xf0822b(_0x55e4ea)[_0x2da5b4(0x288)](_0x2da5b4(0x27b) + _0x495677['pk'] + _0x2da5b4(0x2e1) + _0x495677[_0x2da5b4(0x1e0)] + _0x2da5b4(0x132) + _0x2944fb['code'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x2944fb[_0x2da5b4(0x302)][_0x2da5b4(0x1ea)] + '\x22\x20data-globalIndex=\x22' + _0x20fd24 + _0x2da5b4(0x245) + _0x495677[_0x2da5b4(0x25a)][_0x2da5b4(0x2c7)][0x0][_0x2da5b4(0x19c)] + _0x2da5b4(0x310) + _0x495677[_0x2da5b4(0x25a)]['candidates'][0x0][_0x2da5b4(0x19c)] + _0x2da5b4(0x328) + _0x84a48b('IMG') + _0x2da5b4(0x2ab) + _0x20fd24 + '\x20-</a>')) : _0xf0822b(_0x55e4ea)['append']('<a\x20media-id=\x22' + _0x495677['pk'] + _0x2da5b4(0x2e1) + _0x495677[_0x2da5b4(0x1e0)] + _0x2da5b4(0x132) + _0x2944fb[_0x2da5b4(0x180)] + _0x2da5b4(0x38c) + _0x2944fb[_0x2da5b4(0x302)]['username'] + '\x22\x20data-globalIndex=\x22' + _0x20fd24 + _0x2da5b4(0x245) + _0x495677[_0x2da5b4(0x326)][0x0]['url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x495677[_0x2da5b4(0x25a)][_0x2da5b4(0x2c7)][0x0][_0x2da5b4(0x19c)] + _0x2da5b4(0x171) + _0x84a48b(_0x2da5b4(0x1ad)) + _0x2da5b4(0x2ab) + _0x20fd24 + _0x2da5b4(0x2b0));
                        });
                    else {
                        let _0x555f2c = 0x1;
                        _0x2944fb[_0x1ff78b(0x326)] == null ? (_0x2944fb[_0x1ff78b(0x25a)]['candidates'][_0x1ff78b(0x13d)](function (_0x55d30d, _0x165636) {
                            const _0x3ed818 = _0x1ff78b;
                            let _0x21207f = new URL(_0x55d30d[_0x3ed818(0x19c)])[_0x3ed818(0x270)][_0x3ed818(0x154)](_0x3ed818(0x244)), _0x338bf3 = new URL(_0x165636[_0x3ed818(0x19c)])[_0x3ed818(0x270)][_0x3ed818(0x154)](_0x3ed818(0x244));
                            if (_0x21207f && _0x338bf3) {
                                if (_0x21207f[_0x3ed818(0x2d4)] > _0x338bf3['length'])
                                    return 0x1;
                                if (_0x21207f[_0x3ed818(0x2d4)] < _0x338bf3[_0x3ed818(0x2d4)])
                                    return -0x1;
                            } else {
                                if (_0x55d30d['width'] < _0x165636[_0x3ed818(0x2bc)])
                                    return 0x1;
                                if (_0x55d30d[_0x3ed818(0x2bc)] > _0x165636[_0x3ed818(0x2bc)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0xf0822b(_0x55e4ea)[_0x1ff78b(0x288)](_0x1ff78b(0x27b) + _0x2944fb['pk'] + _0x1ff78b(0x2e1) + _0x2944fb[_0x1ff78b(0x1e0)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x2944fb[_0x1ff78b(0x180)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x2944fb[_0x1ff78b(0x302)][_0x1ff78b(0x1ea)] + _0x1ff78b(0x23b) + _0x555f2c + _0x1ff78b(0x245) + _0x2944fb[_0x1ff78b(0x25a)][_0x1ff78b(0x2c7)][0x0][_0x1ff78b(0x19c)] + _0x1ff78b(0x310) + _0x2944fb[_0x1ff78b(0x25a)][_0x1ff78b(0x2c7)][0x0][_0x1ff78b(0x19c)] + _0x1ff78b(0x328) + _0x84a48b('IMG') + _0x1ff78b(0x2ab) + _0x555f2c + _0x1ff78b(0x2b0))) : _0xf0822b(_0x55e4ea)[_0x1ff78b(0x288)]('<a\x20media-id=\x22' + _0x2944fb['pk'] + _0x1ff78b(0x2e1) + _0x2944fb['taken_at'] + _0x1ff78b(0x132) + _0x2944fb[_0x1ff78b(0x180)] + _0x1ff78b(0x38c) + _0x2944fb[_0x1ff78b(0x302)][_0x1ff78b(0x1ea)] + _0x1ff78b(0x23b) + _0x555f2c + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x2944fb[_0x1ff78b(0x326)][0x0][_0x1ff78b(0x19c)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2944fb['image_versions2']['candidates'][0x0][_0x1ff78b(0x19c)] + _0x1ff78b(0x171) + _0x84a48b(_0x1ff78b(0x1ad)) + _0x1ff78b(0x2ab) + _0x555f2c + '\x20-</a>');
                    }
                }
                _0xf0822b(_0x1ff78b(0x224))[_0x1ff78b(0x309)](), _0xf0822b(_0x1ff78b(0x26b))[_0x1ff78b(0x129)](function () {
                    const _0x2ffb21 = _0x1ff78b;
                    _0xf0822b(this)[_0x2ffb21(0x366)](_0x2ffb21(0x295)), _0xf0822b(this)[_0x2ffb21(0x234)](_0x2ffb21(0x26c)), _0xf0822b(this)[_0x2ffb21(0x2fa)](_0x2ffb21(0x193) + _0x84a48b('NEW_TAB') + _0x2ffb21(0x196) + _0x50f6bd[_0x2ffb21(0x2ca)] + _0x2ffb21(0x2ad)), _0xf0822b(this)[_0x2ffb21(0x375)](_0x2ffb21(0x184)) == _0x2ffb21(0x364) && _0xf0822b(this)['after'](_0x2ffb21(0x2e7) + _0x84a48b(_0x2ffb21(0x1f0)) + _0x2ffb21(0x259) + _0x50f6bd['THUMBNAIL'] + '</div>');
                });
            } catch (_0x287421) {
                _0x572202('createMediaListDOM', _0x287421);
            }
            ;
        }
        function _0x4024d8(_0x33e3b0) {
            const _0x555766 = _0x51b01c;
            var _0x46ebe1 = 0x0, _0x1fbd9e = _0x33e3b0[_0x555766(0x1e7)](_0x555766(0x231));
            return (_0x1fbd9e == null || !_0x1fbd9e[_0x555766(0x11b)](_0x555766(0x119))) && (_0x1fbd9e = _0x33e3b0[_0x555766(0x1e7)](_0x555766(0x200))['eq'](0x0)[_0x555766(0x1c0)](_0x555766(0x1db))), _0x1fbd9e['filter']('._acnb')[_0x555766(0x129)](function (_0x182c55) {
                const _0x11eaf8 = _0x555766;
                _0xf0822b(this)['hasClass'](_0x11eaf8(0x19a)) && (_0x46ebe1 = _0x182c55);
            }), _0x46ebe1;
        }
        async function _0x3b7965(_0x187645) {
            const _0x2e86cd = _0x51b01c;
            if (_0x187645) {
                _0x104471(!![]);
                let _0x379f6e = new Date()[_0x2e86cd(0x27c)](), _0x301108 = Math['floor'](_0x379f6e / 0x3e8), _0x29c822 = location['pathname']['replaceAll'](/(reels|tagged)\/$/ig, '')[_0x2e86cd(0x33d)]('/')['filter'](_0x4078fa => _0x4078fa[_0x2e86cd(0x2d4)] > 0x0)['at'](-0x1), _0x4dc122 = await _0x3866bf(_0x29c822);
                try {
                    let _0x3a82bb = await _0x524ec9(_0x4dc122[_0x2e86cd(0x2f7)]['pk']);
                    _0x237545(_0x3a82bb, _0x29c822, _0x2e86cd(0x1c9), _0x301108, _0x2e86cd(0x278));
                } catch (_0x58fd72) {
                    _0x237545(_0x4dc122[_0x2e86cd(0x2f7)][_0x2e86cd(0x1b1)], _0x29c822, _0x2e86cd(0x1c9), _0x301108, _0x2e86cd(0x278));
                }
                _0x104471(![]);
            } else {
                if (!_0xf0822b('.IG_DWPROFILE')[_0x2e86cd(0x2d4)]) {
                    let _0x426bd7 = setInterval(() => {
                        const _0x1acab7 = _0x2e86cd;
                        if (_0xf0822b('.IG_DWPROFILE')['length']) {
                            clearInterval(_0x426bd7);
                            return;
                        }
                        _0xf0822b(_0x1acab7(0x385))[_0x1acab7(0x198)]()['parent']()[_0x1acab7(0x288)](_0x1acab7(0x363) + _0x84a48b('DW') + _0x1acab7(0x2c5) + _0x50f6bd[_0x1acab7(0x336)] + _0x1acab7(0x2ad)), _0xf0822b(_0x1acab7(0x385))[_0x1acab7(0x198)]()[_0x1acab7(0x198)]()[_0x1acab7(0x2a7)](_0x1acab7(0x1d1), 'relative'), _0xf0822b(_0x1acab7(0x372))[_0x1acab7(0x198)]()[_0x1acab7(0x198)]()[_0x1acab7(0x198)]()['append'](_0x1acab7(0x363) + _0x84a48b('DW') + _0x1acab7(0x2c5) + _0x50f6bd[_0x1acab7(0x336)] + '</div>'), _0xf0822b('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')['parent']()[_0x1acab7(0x198)]()[_0x1acab7(0x198)]()[_0x1acab7(0x2a7)]('position', _0x1acab7(0x33c));
                    }, 0x96);
                }
            }
        }
        async function _0x1b4223(_0x2b8a74, _0x1cff1d, _0x3425ac) {
            const _0x32974f = _0x51b01c;
            if (_0x2b8a74) {
                _0x104471(!![]);
                let _0x55cd5d = location['href'][_0x32974f(0x33d)]('?')['at'](0x0)[_0x32974f(0x33d)](_0x32974f(0x1fd))['at'](-0x1)['replaceAll']('/', ''), _0x2bd19e = await _0x279941(_0x55cd5d), _0x1ea671 = _0x45e020(_0x2bd19e[_0x32974f(0x2ef)]), _0x22162e = new Date()[_0x32974f(0x27c)]();
                _0x88bc73[_0x32974f(0x21a)] && (_0x2bd19e[_0x32974f(0x201)] === _0x32974f(0x17f) ? _0x22162e = _0x1ea671['shortcode_media'][_0x32974f(0xf6)] : _0x22162e = _0x1ea671['taken_at']);
                if (_0x2bd19e[_0x32974f(0x201)] === _0x32974f(0x17f)) {
                    if (_0x1cff1d && _0x1ea671['shortcode_media']['is_video']) {
                        if (_0x3425ac)
                            _0x55374a(_0x1ea671[_0x32974f(0x2cf)][_0x32974f(0x13a)]);
                        else {
                            let _0x297520 = 'mp4';
                            _0x237545(_0x1ea671['shortcode_media'][_0x32974f(0x13a)], _0x1ea671[_0x32974f(0x2cf)][_0x32974f(0x302)][_0x32974f(0x1ea)], _0x32974f(0x1f6), _0x22162e, _0x297520, _0x55cd5d);
                        }
                    } else {
                        if (_0x3425ac)
                            _0x55374a(_0x1ea671['shortcode_media'][_0x32974f(0x17b)]['at'](-0x1)[_0x32974f(0x2b2)]);
                        else {
                            let _0x2cc8b9 = _0x32974f(0x278);
                            _0x237545(_0x1ea671[_0x32974f(0x2cf)][_0x32974f(0x17b)]['at'](-0x1)['src'], _0x1ea671[_0x32974f(0x2cf)]['owner'][_0x32974f(0x1ea)], _0x32974f(0x1f6), _0x22162e, _0x2cc8b9, _0x55cd5d);
                        }
                    }
                } else {
                    if (_0x1cff1d && _0x1ea671['video_versions'] != null) {
                        if (_0x3425ac)
                            _0x55374a(_0x1ea671[_0x32974f(0x326)][0x0][_0x32974f(0x19c)]);
                        else {
                            let _0x8bef78 = 'mp4';
                            _0x237545(_0x1ea671['video_versions'][0x0]['url'], _0x1ea671[_0x32974f(0x302)]['username'], _0x32974f(0x1f6), _0x22162e, _0x8bef78, _0x55cd5d);
                        }
                    } else {
                        if (_0x3425ac)
                            _0x55374a(_0x1ea671['image_versions2']['candidates'][0x0][_0x32974f(0x19c)]);
                        else {
                            let _0x396dca = _0x32974f(0x278);
                            _0x237545(_0x1ea671[_0x32974f(0x25a)][_0x32974f(0x2c7)][0x0][_0x32974f(0x19c)], _0x1ea671[_0x32974f(0x302)][_0x32974f(0x1ea)], _0x32974f(0x1f6), _0x22162e, _0x396dca, _0x55cd5d);
                        }
                    }
                }
                _0x104471(![]);
            } else
                var _0x3b94c5 = setInterval(() => {
                    const _0x2a5eaf = _0x32974f;
                    _0xf0822b(_0x2a5eaf(0x209))[_0x2a5eaf(0x2d4)] > 0x0 && (clearInterval(_0x3b94c5), _0x88bc73[_0x2a5eaf(0x2e5)] && (_0xf0822b(_0x2a5eaf(0x15c))[_0x2a5eaf(0x309)](), _0xf0822b(_0x2a5eaf(0x38d))[_0x2a5eaf(0x288)]('<section\x20id=\x22scrollWrapper\x22></section>'), _0xf0822b(_0x2a5eaf(0x1bf))['append'](_0x2a5eaf(0x23e)), _0xf0822b(_0x2a5eaf(0x1bf))[_0x2a5eaf(0x288)](_0x2a5eaf(0x289)), _0xf0822b(_0x2a5eaf(0x128))['on']('click', function () {
                        const _0x4b1d97 = _0x2a5eaf;
                        _0xf0822b(_0x4b1d97(0x1c2))[0x0][_0x4b1d97(0x24f)]({
                            'top': -0x1e,
                            'behavior': _0x4b1d97(0x131)
                        });
                    }), _0xf0822b(_0x2a5eaf(0x15d))['on'](_0x2a5eaf(0x380), function () {
                        const _0x191873 = _0x2a5eaf;
                        _0xf0822b(_0x191873(0x1c2))[0x0][_0x191873(0x24f)]({
                            'top': 0x1e,
                            'behavior': _0x191873(0x131)
                        });
                    })), _0xf0822b(_0x2a5eaf(0x29e))['children']('div')['each'](function () {
                        const _0x3f69f0 = _0x2a5eaf;
                        if (_0xf0822b(this)[_0x3f69f0(0x1c0)]()[_0x3f69f0(0x2d4)] > 0x0) {
                            if (!_0xf0822b(this)[_0x3f69f0(0x1c0)]()[_0x3f69f0(0x1e7)](_0x3f69f0(0x1a0))[_0x3f69f0(0x2d4)]) {
                                var _0x1732fb = _0xf0822b(this);
                                _0xf0822b(this)[_0x3f69f0(0x1c0)]()['css'](_0x3f69f0(0x1d1), _0x3f69f0(0x33c)), _0xf0822b(this)[_0x3f69f0(0x1c0)]()[_0x3f69f0(0x288)](_0x3f69f0(0x363) + _0x84a48b('DW') + _0x3f69f0(0x242) + _0x50f6bd[_0x3f69f0(0x336)] + _0x3f69f0(0x2ad)), _0xf0822b(this)['children']()['append'](_0x3f69f0(0x193) + _0x84a48b('NEW_TAB') + _0x3f69f0(0x149) + _0x50f6bd[_0x3f69f0(0x2ca)] + '</div>'), _0xf0822b(this)[_0x3f69f0(0x1c0)]()[_0x3f69f0(0x288)](_0x3f69f0(0x2e7) + _0x84a48b(_0x3f69f0(0x1f0)) + _0x3f69f0(0x150) + _0x50f6bd['THUMBNAIL'] + _0x3f69f0(0x2ad));
                                _0x88bc73[_0x3f69f0(0x1fe)] && _0xf0822b(this)[_0x3f69f0(0x1e7)](_0x3f69f0(0x364))[_0x3f69f0(0x129)](function () {
                                    _0xf0822b(this)['on']('ended', function () {
                                        const _0x3a81ba = a0_0x1eaf;
                                        if (!_0xf0822b(this)[_0x3a81ba(0x2ef)]('loop')) {
                                            let _0xf71b6c = _0xf0822b(this)['next']()['find'](_0x3a81ba(0x120))[_0x3a81ba(0x347)](_0x3a81ba(0x20d));
                                            _0xf71b6c[_0x3a81ba(0x2d4)] > 0x0 ? (_0xf0822b(this)[_0x3a81ba(0x375)]('data-loop', !![]), _0xf71b6c[_0x3a81ba(0x1a4)](_0x3a81ba(0x380)), _0x572202('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()')) : (_0xf0822b(this)[_0x3a81ba(0x375)]('data-loop', !![]), _0xf0822b(this)['parent']()[_0x3a81ba(0x1e7)]('.xpgaw4o')[_0x3a81ba(0x23a)](_0x3a81ba(0x35b)), this['pause'](), _0x572202(_0x3a81ba(0x10b)));
                                        }
                                    });
                                });
                                _0x88bc73[_0x3f69f0(0x260)] && _0xf0822b(this)[_0x3f69f0(0x1e7)](_0x3f69f0(0x364))[_0x3f69f0(0x129)](function () {
                                    const _0x2df1b5 = _0x3f69f0;
                                    if (!_0xf0822b(this)[_0x2df1b5(0x2ef)](_0x2df1b5(0x340))) {
                                        let _0x2ccf6b = _0xf0822b(this);
                                        _0x572202(_0x2df1b5(0x365)), _0x88bc73[_0x2df1b5(0x123)] && (this['volume'] = _0x550b30[_0x2df1b5(0x160)], _0xf0822b(this)['on']('loadstart', function () {
                                            const _0x37348f = _0x2df1b5;
                                            this[_0x37348f(0x12c)] = _0x550b30[_0x37348f(0x160)];
                                        })), _0xf0822b(this)['on'](_0x2df1b5(0x1fb), function (_0x36ee3e) {
                                            const _0x311491 = _0x2df1b5;
                                            _0x36ee3e['preventDefault'](), _0x2ccf6b[_0x311491(0x2a7)](_0x311491(0xf8), '-1'), _0x2ccf6b[_0x311491(0x23a)](_0x311491(0x340));
                                        }), _0xf0822b(this)[_0x2df1b5(0x198)]()[_0x2df1b5(0x1e7)](_0x2df1b5(0x269))[_0x2df1b5(0x25e)](function () {
                                            const _0x44075e = _0x2df1b5;
                                            return _0xf0822b(this)['parent'](_0x44075e(0x331))[_0x44075e(0x2d4)] > 0x0 && _0xf0822b(this)['css'](_0x44075e(0x2f5)) === 'pointer' && _0xf0822b(this)[_0x44075e(0x375)](_0x44075e(0x35b)) != null;
                                        })[_0x2df1b5(0x35f)]()['on'](_0x2df1b5(0x1fb), function (_0x11816f) {
                                            const _0x57b567 = _0x2df1b5;
                                            _0x11816f[_0x57b567(0x238)](), _0x2ccf6b[_0x57b567(0x2a7)](_0x57b567(0xf8), '2'), _0x2ccf6b[_0x57b567(0x375)](_0x57b567(0x340), !![]);
                                        }), _0xf0822b(this)['on'](_0x2df1b5(0x18a), function () {
                                            const _0x1f36c1 = _0x2df1b5;
                                            let _0x1b160a = _0xf0822b(this)[_0x1f36c1(0x198)]()[_0x1f36c1(0x1e7)]('video\x20+\x20div\x20>\x20div')[_0x1f36c1(0x1e7)]('button[type=\x22button\x22],\x20div[role=\x22button\x22]')['filter'](function (_0x8a41e3) {
                                                const _0x16cb96 = _0x1f36c1;
                                                return _0xf0822b(this)[_0x16cb96(0x2bc)]() <= 0x40 && _0xf0822b(this)[_0x16cb96(0x199)]() <= 0x40 && _0xf0822b(this)[_0x16cb96(0x1e7)](_0x16cb96(0x1bc))[_0x16cb96(0x2d4)] > 0x0;
                                            });
                                            var _0x3bd249 = _0x1b160a['find'](_0x1f36c1(0x38b))[_0x1f36c1(0x2d4)] === 0x0;
                                            this[_0x1f36c1(0x101)] != _0x3bd249 && (this['volume'] = _0x550b30[_0x1f36c1(0x160)], _0x1b160a?.[_0x1f36c1(0x1a4)](_0x1f36c1(0x380))), _0xf0822b(this)[_0x1f36c1(0x375)]('data-completed') && (_0x550b30[_0x1f36c1(0x160)] = this[_0x1f36c1(0x12c)], GM_setValue(_0x1f36c1(0x19d), this[_0x1f36c1(0x12c)])), this['volume'] == _0x550b30[_0x1f36c1(0x160)] && _0xf0822b(this)['attr'](_0x1f36c1(0x356), !![]);
                                        }), _0xf0822b(this)[_0x2df1b5(0x2a7)](_0x2df1b5(0x1d1), _0x2df1b5(0x124)), _0xf0822b(this)[_0x2df1b5(0x2a7)](_0x2df1b5(0xf8), '2'), _0xf0822b(this)[_0x2df1b5(0x375)](_0x2df1b5(0x29b), !![]), _0xf0822b(this)[_0x2df1b5(0x375)]('controls', !![]);
                                    }
                                });
                                var _0x1dbb66 = _0x1732fb[_0x3f69f0(0x1e7)](_0x3f69f0(0x364)), _0x2ab713 = _0xf0822b(this)[_0x3f69f0(0x1e7)](_0x3f69f0(0x321))['first']();
                                _0x2e4efd(_0x1dbb66, _0x2ab713, _0x3f69f0(0x1d5));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x2aa979() {
            const _0x11090e = _0x51b01c;
            _0x104471(!![]);
            let _0x2ea53f = new Date()[_0x11090e(0x27c)](), _0x1ba8c9 = Math[_0x11090e(0x276)](_0x2ea53f / 0x3e8), _0x4afe6a = _0xf0822b('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()[_0x11090e(0x2bf)]() || location[_0x11090e(0x10e)]['split']('/')[_0x11090e(0x25e)](_0x14970e => _0x14970e['length'] > 0x0)['at'](0x1), _0x4c75b2 = await _0x3866bf(_0x4afe6a), _0x4f3bef = _0x4c75b2[_0x11090e(0x2f7)]['pk'], _0x25c3d5 = await _0x752146(_0x4f3bef), _0x5d777e = 0x0;
            _0x300267(_0x5d777e, _0x25c3d5[_0x11090e(0x2ef)][_0x11090e(0x374)][0x0]['items'][_0x11090e(0x2d4)]), _0x25c3d5[_0x11090e(0x2ef)][_0x11090e(0x374)][0x0][_0x11090e(0x272)]['forEach']((_0x2e5e11, _0x3a4aea) => {
                setTimeout(() => {
                    const _0xece05c = a0_0x1eaf;
                    _0x88bc73[_0xece05c(0x21a)] && (_0x1ba8c9 = _0x2e5e11[_0xece05c(0xf6)]), _0x2e5e11[_0xece05c(0x17b)][_0xece05c(0x13d)](function (_0x50bee1, _0x1463bf) {
                        const _0x59421b = _0xece05c;
                        if (_0x50bee1[_0x59421b(0x11d)] < _0x1463bf['config_width'])
                            return 0x1;
                        if (_0x50bee1[_0x59421b(0x11d)] > _0x1463bf[_0x59421b(0x11d)])
                            return -0x1;
                        return 0x0;
                    }), _0x2e5e11['is_video'] ? _0x237545(_0x2e5e11[_0xece05c(0x161)][0x0][_0xece05c(0x2b2)], _0x4afe6a, 'stories', _0x1ba8c9, _0xece05c(0x11f), _0x2e5e11['id'])[_0xece05c(0x2b8)](() => {
                        const _0x4b7b3e = _0xece05c;
                        _0x300267(++_0x5d777e, _0x25c3d5[_0x4b7b3e(0x2ef)][_0x4b7b3e(0x374)][0x0][_0x4b7b3e(0x272)][_0x4b7b3e(0x2d4)]);
                    }) : _0x237545(_0x2e5e11[_0xece05c(0x17b)][0x0]['src'], _0x4afe6a, 'stories', _0x1ba8c9, _0xece05c(0x278), _0x2e5e11['id'])[_0xece05c(0x2b8)](() => {
                        const _0x45e5a6 = _0xece05c;
                        _0x300267(++_0x5d777e, _0x25c3d5['data'][_0x45e5a6(0x374)][0x0][_0x45e5a6(0x272)]['length']);
                    });
                }, 0x64 * _0x3a4aea);
            });
        }
        async function _0x5f59c7(_0x2d6a68, _0x5d1120, _0x26d24f) {
            const _0x382b1b = _0x51b01c;
            var _0x24994b = _0xf0822b(_0x382b1b(0x2b4))['first']()[_0x382b1b(0x2bf)]() || location[_0x382b1b(0x10e)][_0x382b1b(0x33d)]('/')[_0x382b1b(0x25e)](_0x1fd4e2 => _0x1fd4e2[_0x382b1b(0x2d4)] > 0x0)['at'](0x1);
            if (_0x2d6a68) {
                let _0x4c9299 = new Date()['getTime'](), _0x5497a2 = Math['floor'](_0x4c9299 / 0x3e8);
                _0x104471(!![]);
                if (_0x88bc73[_0x382b1b(0x2e9)] && !_0x550b30['tempFetchRateLimit']) {
                    let _0x5caaa2 = null, _0x14f330 = await _0x3866bf(_0x24994b), _0x469fe1 = _0x14f330[_0x382b1b(0x2f7)]['pk'], _0x1e292c = await _0x752146(_0x469fe1), _0x381765 = location[_0x382b1b(0x10e)][_0x382b1b(0x33d)]('/')[_0x382b1b(0x25e)](_0x5348cf => _0x5348cf[_0x382b1b(0x2d4)] > 0x0 && _0x5348cf[_0x382b1b(0x21d)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x1e292c[_0x382b1b(0x2ef)]['reels_media'][0x0][_0x382b1b(0x272)][_0x382b1b(0x16c)](_0x2a556f => {
                        _0x2a556f['id'] == _0x381765 && (_0x5caaa2 = _0x2a556f['id']);
                    });
                    if (_0x5caaa2 == null) {
                        let _0x2090f8 = _0x57e0ea(_0x24994b);
                        _0x2090f8['each'](function (_0x8dde79) {
                            const _0x3506c5 = _0x382b1b;
                            _0xf0822b(this)[_0x3506c5(0x1c0)]()[_0x3506c5(0x2d4)] > 0x0 && (_0x5caaa2 = _0x1e292c[_0x3506c5(0x2ef)][_0x3506c5(0x374)][0x0][_0x3506c5(0x272)][_0x8dde79]['id']);
                        });
                    }
                    _0x5caaa2 == null && (_0xf0822b(_0x382b1b(0x291))[_0x382b1b(0x129)](function (_0x1bda2e) {
                        const _0x59ca72 = _0x382b1b;
                        _0xf0822b(this)[_0x59ca72(0x11b)](_0x59ca72(0x30d)) && (_0xf0822b(this)[_0x59ca72(0x1c0)]()[_0x59ca72(0x2d4)] > 0x0 && (_0x5caaa2 = _0x1e292c[_0x59ca72(0x2ef)][_0x59ca72(0x374)][0x0][_0x59ca72(0x272)][_0x1bda2e]['id']));
                    }), _0xf0822b(_0x382b1b(0x15b))['each'](function (_0x59154a) {
                        const _0x275448 = _0x382b1b;
                        _0xf0822b(this)[_0x275448(0x1c0)]()[_0x275448(0x11b)]('_ac3q') && (_0x5caaa2 = _0x1e292c[_0x275448(0x2ef)][_0x275448(0x374)][0x0][_0x275448(0x272)][_0x59154a]['id']);
                    }));
                    _0x5caaa2 == null && (_0x5caaa2 = location[_0x382b1b(0x10e)]['split']('/')['filter'](_0x341b37 => _0x341b37['length'] > 0x0 && _0x341b37[_0x382b1b(0x21d)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x3b7b1f = await _0x56082e(_0x5caaa2);
                    _0x88bc73[_0x382b1b(0x21a)] && (_0x5497a2 = _0x3b7b1f[_0x382b1b(0x272)][0x0][_0x382b1b(0x1e0)]);
                    _0x3b7b1f[_0x382b1b(0x10c)] === 'ok' ? _0x3b7b1f[_0x382b1b(0x272)][0x0]['video_versions'] ? _0x26d24f ? _0x55374a(_0x3b7b1f[_0x382b1b(0x272)][0x0][_0x382b1b(0x326)][0x0]['url']) : _0x237545(_0x3b7b1f[_0x382b1b(0x272)][0x0][_0x382b1b(0x326)][0x0][_0x382b1b(0x19c)], _0x24994b, 'stories', _0x5497a2, _0x382b1b(0x11f), _0x5caaa2) : _0x26d24f ? _0x55374a(_0x3b7b1f['items'][0x0][_0x382b1b(0x25a)][_0x382b1b(0x2c7)][0x0][_0x382b1b(0x19c)]) : _0x237545(_0x3b7b1f[_0x382b1b(0x272)][0x0][_0x382b1b(0x25a)][_0x382b1b(0x2c7)][0x0]['url'], _0x24994b, _0x382b1b(0x2e3), _0x5497a2, _0x382b1b(0x278), _0x5caaa2) : (_0x88bc73[_0x382b1b(0x362)] ? (_0x550b30[_0x382b1b(0x298)] = !![], _0x5f59c7(_0x2d6a68, _0x5d1120, _0x26d24f)) : alert(_0x382b1b(0x2af) + _0x3b7b1f[_0x382b1b(0x13f)]), _0x572202(_0x3b7b1f));
                    _0x104471(![]);
                    return;
                }
                if (_0xf0822b(_0x382b1b(0x208))[_0x382b1b(0x2d4)] > 0x0) {
                    let _0x3f0c5f = 'mp4', _0x5c6518 = '', _0x5d2871 = location[_0x382b1b(0x10e)][_0x382b1b(0x32c)](/\/$/ig, '')[_0x382b1b(0x33d)]('/')['at'](-0x1), _0x5c9b5b = null;
                    if (_0x550b30[_0x382b1b(0x2a1)][_0x382b1b(0x2e3)][_0x24994b] && !_0x5d1120) {
                        _0x572202(_0x382b1b(0x19e), _0x24994b), _0x550b30['GL_dataCache'][_0x382b1b(0x2e3)][_0x24994b]['data'][_0x382b1b(0x374)][0x0][_0x382b1b(0x272)][_0x382b1b(0x16c)](_0x5876f3 => {
                            const _0x4469f6 = _0x382b1b;
                            _0x5876f3['id'] == _0x5d2871 && (_0x5c6518 = _0x5876f3[_0x4469f6(0x161)][0x0][_0x4469f6(0x2b2)], _0x88bc73[_0x4469f6(0x21a)] && (_0x5497a2 = _0x5876f3[_0x4469f6(0xf6)], _0x5c9b5b = _0x5876f3['id']));
                        });
                        if (_0x5c6518[_0x382b1b(0x2d4)] == 0x0) {
                            _0x572202(_0x382b1b(0x2d9), _0x24994b), _0x5f59c7(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x16fca4 = await _0x3866bf(_0x24994b), _0x5cf86c = _0x16fca4[_0x382b1b(0x2f7)]['pk'], _0x4f8810 = await _0x752146(_0x5cf86c);
                        _0x4f8810[_0x382b1b(0x2ef)]['reels_media'][0x0][_0x382b1b(0x272)][_0x382b1b(0x16c)](_0x5226cd => {
                            const _0x31a57c = _0x382b1b;
                            _0x5226cd['id'] == _0x5d2871 && (_0x5c6518 = _0x5226cd[_0x31a57c(0x161)][0x0][_0x31a57c(0x2b2)], _0x88bc73[_0x31a57c(0x21a)] && (_0x5497a2 = _0x5226cd[_0x31a57c(0xf6)], _0x5c9b5b = _0x5226cd['id']));
                        });
                        if (_0x5c6518[_0x382b1b(0x2d4)] == 0x0) {
                            let _0x224b75 = _0x57e0ea(_0x24994b);
                            _0x224b75[_0x382b1b(0x129)](function (_0x31084f) {
                                const _0x338518 = _0x382b1b;
                                _0xf0822b(this)[_0x338518(0x1c0)]()[_0x338518(0x2d4)] > 0x0 && (_0x5c6518 = _0x4f8810['data'][_0x338518(0x374)][0x0]['items'][_0x31084f]['video_resources'][0x0][_0x338518(0x2b2)], _0x88bc73[_0x338518(0x21a)] && (_0x5497a2 = _0x4f8810[_0x338518(0x2ef)]['reels_media'][0x0][_0x338518(0x272)][_0x31084f]['taken_at_timestamp'], _0x5c9b5b = _0x4f8810['data']['reels_media'][0x0][_0x338518(0x272)][_0x31084f]['id']));
                            }), _0x5c6518[_0x382b1b(0x2d4)] == 0x0 && (_0xf0822b(_0x382b1b(0x291))['each'](function (_0x177ab2) {
                                const _0x3ecc54 = _0x382b1b;
                                _0xf0822b(this)[_0x3ecc54(0x11b)](_0x3ecc54(0x30d)) && (_0xf0822b(this)[_0x3ecc54(0x1c0)]()[_0x3ecc54(0x2d4)] > 0x0 && (_0x5c6518 = _0x4f8810[_0x3ecc54(0x2ef)][_0x3ecc54(0x374)][0x0]['items'][_0x177ab2][_0x3ecc54(0x161)][0x0]['src'], _0x88bc73[_0x3ecc54(0x21a)] && (_0x5497a2 = _0x4f8810[_0x3ecc54(0x2ef)]['reels_media'][0x0]['items'][_0x177ab2]['taken_at_timestamp'], _0x5c9b5b = _0x4f8810[_0x3ecc54(0x2ef)][_0x3ecc54(0x374)][0x0]['items'][_0x177ab2]['id'])));
                            }), _0xf0822b('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x382b1b(0x129)](function (_0x2be7c6) {
                                const _0x429fc3 = _0x382b1b;
                                _0xf0822b(this)[_0x429fc3(0x1c0)]()[_0x429fc3(0x11b)](_0x429fc3(0x239)) && (_0x5c6518 = _0x4f8810[_0x429fc3(0x2ef)][_0x429fc3(0x374)][0x0][_0x429fc3(0x272)][_0x2be7c6][_0x429fc3(0x161)][0x0][_0x429fc3(0x2b2)], _0x88bc73['RENAME_PUBLISH_DATE'] && (_0x5497a2 = _0x4f8810['data'][_0x429fc3(0x374)][0x0]['items'][_0x2be7c6]['taken_at_timestamp'], _0x5c9b5b = _0x4f8810[_0x429fc3(0x2ef)][_0x429fc3(0x374)][0x0][_0x429fc3(0x272)][_0x2be7c6]['id']));
                            }));
                        }
                        _0x550b30['GL_dataCache'][_0x382b1b(0x2e3)][_0x24994b] = _0x4f8810;
                    }
                    _0x5c6518['length'] == 0x0 ? alert(_0x84a48b('NO_VID_URL')) : _0x26d24f ? _0x55374a(_0x5c6518) : _0x237545(_0x5c6518, _0x24994b, _0x382b1b(0x2e3), _0x5497a2, _0x3f0c5f, _0x5c9b5b);
                } else {
                    let _0x2ddff4 = _0xf0822b(_0x382b1b(0x24d))[_0x382b1b(0x375)]('srcset')?.['split'](',')[0x0]?.[_0x382b1b(0x33d)]('\x20')[0x0], _0x37d0ab = _0x2ddff4 ? _0x2ddff4 : _0xf0822b(_0x382b1b(0x24d))['filter'](function () {
                            const _0x405486 = _0x382b1b;
                            return _0xf0822b(this)['parents']('a')['length'] === 0x0 && _0xf0822b(this)[_0x405486(0x2bc)]() === _0xf0822b(this)['parent']()[_0x405486(0x2bc)]();
                        })['attr'](_0x382b1b(0x2b2));
                    if (!_0x37d0ab) {
                        let _0x207744 = _0xf0822b('body\x20>\x20div\x20section:visible\x20img._aa63');
                        _0x37d0ab = _0x207744[_0x382b1b(0x375)]('srcset') ? _0x207744[_0x382b1b(0x375)](_0x382b1b(0x13b))?.[_0x382b1b(0x33d)](',')[0x0]?.[_0x382b1b(0x33d)]('\x20')[0x0] : _0x207744['attr'](_0x382b1b(0x2b2));
                    }
                    _0x88bc73[_0x382b1b(0x21a)] && (_0x5497a2 = new Date(_0xf0822b(_0x382b1b(0x1ac))[_0x382b1b(0x35f)]()[_0x382b1b(0x375)]('datetime'))[_0x382b1b(0x27c)]());
                    let _0x464831 = _0x37d0ab, _0x48fa92 = _0x382b1b(0x278);
                    _0x26d24f ? _0x55374a(_0x464831) : _0x237545(_0x464831, _0x24994b, _0x382b1b(0x2e3), _0x5497a2, _0x48fa92, _0x130dc8(_0x464831) ?? '');
                }
                _0x550b30[_0x382b1b(0x298)] = ![], _0x104471(![]);
            } else {
                if (!_0xf0822b(_0x382b1b(0x2cd))[_0x382b1b(0x2d4)]) {
                    _0x550b30[_0x382b1b(0x2a1)][_0x382b1b(0x2e3)] = {};
                    let _0xd243dc = null;
                    _0xf0822b('body\x20>\x20div\x20section._ac0a')[_0x382b1b(0x2d4)] > 0x0 ? _0xd243dc = _0xf0822b(_0x382b1b(0x308)) : (_0xd243dc = _0xf0822b(_0x382b1b(0x329)), _0xd243dc[_0x382b1b(0x2a7)](_0x382b1b(0x1d1), _0x382b1b(0x33c)));
                    _0xd243dc[_0x382b1b(0x2d4)] === 0x0 && (_0xd243dc = _0xf0822b('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x382b1b(0x198)]()[_0x382b1b(0x198)]()[_0x382b1b(0x198)]()[_0x382b1b(0x1e7)](_0x382b1b(0x22a)), _0xd243dc['css'](_0x382b1b(0x1d1), _0x382b1b(0x33c)));
                    _0xd243dc[_0x382b1b(0x2d4)] === 0x0 && (_0xd243dc = _0xf0822b('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x382b1b(0x198)]()[_0x382b1b(0x198)]()[_0x382b1b(0x198)]()[_0x382b1b(0x1e7)](_0x382b1b(0x1a8)), _0xd243dc['css'](_0x382b1b(0x1d1), 'relative'));
                    if (_0xd243dc[_0x382b1b(0x2d4)] === 0x0) {
                        let _0x10fee1 = _0xf0822b('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x580679 = 0x0;
                        _0x10fee1[_0x382b1b(0x129)](function () {
                            const _0xe11ed7 = _0x382b1b;
                            _0xf0822b(this)[_0xe11ed7(0x2bc)]() > _0x580679 && (_0x580679 = _0xf0822b(this)['width'](), _0xd243dc = _0xf0822b(this)[_0xe11ed7(0x1c0)](_0xe11ed7(0x1db))['first']());
                        });
                    }
                    if (_0xd243dc != null) {
                        _0xd243dc[_0x382b1b(0x35f)]()[_0x382b1b(0x2a7)](_0x382b1b(0x1d1), _0x382b1b(0x33c)), _0xd243dc[_0x382b1b(0x35f)]()[_0x382b1b(0x288)](_0x382b1b(0x363) + _0x84a48b('DW') + _0x382b1b(0x215) + _0x50f6bd[_0x382b1b(0x336)] + _0x382b1b(0x2ad)), _0xd243dc[_0x382b1b(0x35f)]()[_0x382b1b(0x288)](_0x382b1b(0x193) + _0x84a48b(_0x382b1b(0x2ca)) + _0x382b1b(0x133) + _0x50f6bd[_0x382b1b(0x2ca)] + _0x382b1b(0x2ad));
                        let _0x422b9b = _0x57e0ea(_0x24994b);
                        _0x422b9b[_0x382b1b(0x2d4)] > 0x1 && _0xd243dc[_0x382b1b(0x35f)]()[_0x382b1b(0x288)](_0x382b1b(0x1a7) + _0x84a48b(_0x382b1b(0x158)) + _0x382b1b(0x1aa) + _0x50f6bd[_0x382b1b(0x1ab)] + '</div>'), _0xd243dc[_0x382b1b(0x1e7)](_0x382b1b(0x1d2))['each'](function () {
                            _0xf0822b(this)['on']('load', function () {
                                const _0x2519ca = a0_0x1eaf;
                                !_0xf0822b(this)['data']('remove-thumbnail') && (_0xd243dc[_0x2519ca(0x1e7)](_0x2519ca(0x2db))['length'] === 0x0 ? (_0xf0822b(this)['attr'](_0x2519ca(0x185), !![]), _0xf0822b('.IG_DWSTORY_THUMBNAIL')[_0x2519ca(0x309)](), _0x572202('(story)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0xf0822b(this)[_0x2519ca(0x375)](_0x2519ca(0x185), !![]), _0x572202(_0x2519ca(0x251))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x35e573(_0xe9edee, _0x59e563) {
            const _0x212dae = _0x51b01c;
            if (_0xe9edee) {
                let _0x1ead54 = new Date()['getTime'](), _0x38821a = Math[_0x212dae(0x276)](_0x1ead54 / 0x3e8), _0x33026d = _0x212dae(0x278), _0x1b577f = _0xf0822b('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()['text']() || location[_0x212dae(0x10e)][_0x212dae(0x33d)]('/')['at'](0x2), _0x2cac7c = location['pathname'][_0x212dae(0x32c)](/\/$/ig, '')[_0x212dae(0x33d)]('/')['at'](-0x1), _0x27eb09 = '', _0x55cac9 = null;
                _0x104471(!![]);
                if (_0x88bc73[_0x212dae(0x2e9)] && !_0x550b30['tempFetchRateLimit']) {
                    let _0x1eeba4 = await _0x3866bf(_0x1b577f), _0xd51c1d = _0x1eeba4[_0x212dae(0x2f7)]['pk'], _0x2afdef = await _0x752146(_0xd51c1d), _0x5ea2c3 = location[_0x212dae(0x10e)][_0x212dae(0x33d)]('/')[_0x212dae(0x25e)](_0x29034b => _0x29034b['length'] > 0x0 && _0x29034b[_0x212dae(0x21d)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x2afdef[_0x212dae(0x2ef)][_0x212dae(0x374)][0x0]['items'][_0x212dae(0x16c)](_0x2d5f70 => {
                        _0x2d5f70['id'] == _0x5ea2c3 && (_0x55cac9 = _0x2d5f70['id']);
                    });
                    if (_0x55cac9 == null) {
                        let _0x586e40 = _0x57e0ea(_0x1b577f);
                        _0x586e40[_0x212dae(0x129)](function (_0x145e11) {
                            const _0x46d973 = _0x212dae;
                            _0xf0822b(this)['children']()['length'] > 0x0 && (_0x55cac9 = _0x2afdef['data'][_0x46d973(0x374)][0x0][_0x46d973(0x272)][_0x145e11]['id']);
                        });
                    }
                    _0x55cac9 == null && (_0xf0822b(_0x212dae(0x291))[_0x212dae(0x129)](function (_0x399607) {
                        const _0x1abf42 = _0x212dae;
                        _0xf0822b(this)[_0x1abf42(0x11b)](_0x1abf42(0x30d)) && (_0xf0822b(this)[_0x1abf42(0x1c0)]()[_0x1abf42(0x2d4)] > 0x0 && (_0x55cac9 = _0x2afdef[_0x1abf42(0x2ef)][_0x1abf42(0x374)][0x0][_0x1abf42(0x272)][_0x399607]['id']));
                    }), _0xf0822b(_0x212dae(0x15b))['each'](function (_0x46b282) {
                        const _0x2a5386 = _0x212dae;
                        _0xf0822b(this)[_0x2a5386(0x1c0)]()[_0x2a5386(0x11b)](_0x2a5386(0x239)) && (_0x55cac9 = _0x2afdef['data'][_0x2a5386(0x374)][0x0]['items'][_0x46b282]['id']);
                    }));
                    _0x55cac9 == null && (_0x55cac9 = location['pathname'][_0x212dae(0x33d)]('/')['filter'](_0x180608 => _0x180608['length'] > 0x0 && _0x180608['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x55e601 = await _0x56082e(_0x55cac9);
                    _0x88bc73[_0x212dae(0x21a)] && (_0x38821a = _0x55e601[_0x212dae(0x272)][0x0][_0x212dae(0x1e0)]);
                    _0x55e601['status'] === 'ok' ? _0x237545(_0x55e601[_0x212dae(0x272)][0x0][_0x212dae(0x25a)][_0x212dae(0x2c7)][0x0][_0x212dae(0x19c)], _0x1b577f, 'stories', _0x38821a, _0x212dae(0x278), _0x55cac9) : (_0x88bc73['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x550b30[_0x212dae(0x298)] = !![], _0x35e573(!![], _0x59e563)) : alert(_0x212dae(0x2af) + _0x55e601['message']), _0x572202(_0x55e601));
                    _0x104471(![]);
                    return;
                }
                if (_0x550b30['GL_dataCache'][_0x212dae(0x2e3)][_0x1b577f] && !_0x59e563) {
                    _0x572202('Fetch\x20from\x20memory\x20cache:', _0x1b577f), _0x550b30[_0x212dae(0x2a1)]['stories'][_0x1b577f][_0x212dae(0x2ef)][_0x212dae(0x374)][0x0][_0x212dae(0x272)][_0x212dae(0x16c)](_0x2fb9ff => {
                        const _0x5d876d = _0x212dae;
                        _0x2fb9ff['id'] == _0x2cac7c && (_0x27eb09 = _0x2fb9ff['display_url'], _0x88bc73[_0x5d876d(0x21a)] && (_0x38821a = _0x2fb9ff[_0x5d876d(0xf6)], _0x55cac9 = _0x2fb9ff['id']));
                    });
                    if (_0x27eb09['length'] == 0x0) {
                        _0x572202('Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:', _0x1b577f), _0x35e573(!![], !![]);
                        return;
                    }
                } else {
                    let _0xe35ca0 = await _0x3866bf(_0x1b577f), _0x181ba5 = _0xe35ca0['user']['pk'], _0x521057 = await _0x752146(_0x181ba5);
                    _0x521057[_0x212dae(0x2ef)][_0x212dae(0x374)][0x0][_0x212dae(0x272)][_0x212dae(0x16c)](_0x3177eb => {
                        const _0x409399 = _0x212dae;
                        _0x3177eb['id'] == _0x2cac7c && (_0x27eb09 = _0x3177eb[_0x409399(0x126)], _0x88bc73['RENAME_PUBLISH_DATE'] && (_0x38821a = _0x3177eb['taken_at_timestamp'], _0x55cac9 = _0x3177eb['id']));
                    });
                    if (_0x27eb09[_0x212dae(0x2d4)] == 0x0) {
                        let _0x508981 = _0x57e0ea(_0x1b577f);
                        _0x508981[_0x212dae(0x129)](function (_0x3176cd) {
                            const _0x1543f8 = _0x212dae;
                            _0xf0822b(this)[_0x1543f8(0x1c0)]()[_0x1543f8(0x2d4)] > 0x0 && (_0x27eb09 = _0x521057[_0x1543f8(0x2ef)][_0x1543f8(0x374)][0x0][_0x1543f8(0x272)][_0x3176cd][_0x1543f8(0x126)], _0x88bc73[_0x1543f8(0x21a)] && (_0x38821a = _0x521057['data'][_0x1543f8(0x374)][0x0][_0x1543f8(0x272)][_0x3176cd][_0x1543f8(0xf6)], _0x55cac9 = _0x521057[_0x1543f8(0x2ef)][_0x1543f8(0x374)][0x0][_0x1543f8(0x272)][_0x3176cd]['id']));
                        }), _0x27eb09[_0x212dae(0x2d4)] == 0x0 && (_0xf0822b('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')['each'](function (_0x4e70b0) {
                            const _0x48501f = _0x212dae;
                            _0xf0822b(this)['hasClass'](_0x48501f(0x30d)) && (_0xf0822b(this)[_0x48501f(0x1c0)]()[_0x48501f(0x2d4)] > 0x0 && (_0x27eb09 = _0x521057['data'][_0x48501f(0x374)][0x0][_0x48501f(0x272)][_0x4e70b0][_0x48501f(0x126)], _0x88bc73['RENAME_PUBLISH_DATE'] && (_0x38821a = _0x521057['data'][_0x48501f(0x374)][0x0][_0x48501f(0x272)][_0x4e70b0]['taken_at_timestamp'], _0x55cac9 = _0x521057[_0x48501f(0x2ef)][_0x48501f(0x374)][0x0]['items'][_0x4e70b0]['id'])));
                        }), _0xf0822b(_0x212dae(0x15b))[_0x212dae(0x129)](function (_0x40d090) {
                            const _0x1dd1e4 = _0x212dae;
                            _0xf0822b(this)['children']()[_0x1dd1e4(0x11b)](_0x1dd1e4(0x239)) && (_0x27eb09 = _0x521057[_0x1dd1e4(0x2ef)]['reels_media'][0x0][_0x1dd1e4(0x272)][_0x40d090][_0x1dd1e4(0x126)], _0x88bc73[_0x1dd1e4(0x21a)] && (_0x38821a = _0x521057[_0x1dd1e4(0x2ef)]['reels_media'][0x0][_0x1dd1e4(0x272)][_0x40d090][_0x1dd1e4(0xf6)], _0x55cac9 = _0x521057['data'][_0x1dd1e4(0x374)][0x0][_0x1dd1e4(0x272)][_0x40d090]['id']));
                        }));
                    }
                }
                _0x237545(_0x27eb09, _0x1b577f, _0x212dae(0x301), _0x38821a, _0x33026d, _0x55cac9), _0x550b30[_0x212dae(0x298)] = ![], _0x104471(![]);
            } else {
                if (_0xf0822b('body\x20>\x20div\x20div.IG_DWSTORY')[_0x212dae(0x198)]()[_0x212dae(0x1e7)](_0x212dae(0x14c))[_0x212dae(0x2d4)]) {
                    let _0x3d49ba = null;
                    _0xf0822b(_0x212dae(0x2b1))['length'] > 0x0 ? _0x3d49ba = _0xf0822b('body\x20>\x20div\x20section:visible._ac0a') : (_0x3d49ba = _0xf0822b(_0x212dae(0x329)), _0x3d49ba[_0x212dae(0x2a7)]('position', _0x212dae(0x33c)));
                    _0x3d49ba[_0x212dae(0x2d4)] === 0x0 && (_0x3d49ba = _0xf0822b(_0x212dae(0x10d))[_0x212dae(0x198)]()[_0x212dae(0x198)]()['parent']()['find'](_0x212dae(0x22a)), _0x3d49ba['css'](_0x212dae(0x1d1), _0x212dae(0x33c)));
                    _0x3d49ba[_0x212dae(0x2d4)] === 0x0 && (_0x3d49ba = _0xf0822b(_0x212dae(0x10d))[_0x212dae(0x198)]()['parent']()['parent']()[_0x212dae(0x1e7)](_0x212dae(0x1a8)), _0x3d49ba[_0x212dae(0x2a7)]('position', _0x212dae(0x33c)));
                    if (_0x3d49ba['length'] === 0x0) {
                        let _0x2959ce = _0xf0822b(_0x212dae(0x279)), _0x1b0365 = 0x0;
                        _0x2959ce[_0x212dae(0x129)](function () {
                            const _0x5e6337 = _0x212dae;
                            _0xf0822b(this)[_0x5e6337(0x2bc)]() > _0x1b0365 && (_0x1b0365 = _0xf0822b(this)[_0x5e6337(0x2bc)](), _0x3d49ba = _0xf0822b(this)[_0x5e6337(0x1c0)](_0x5e6337(0x1db))[_0x5e6337(0x35f)]());
                        });
                    }
                    _0x3d49ba != null && (_0x3d49ba['first']()['css'](_0x212dae(0x1d1), 'relative'), _0x3d49ba['first']()[_0x212dae(0x288)](_0x212dae(0x2e7) + _0x84a48b('THUMBNAIL_INTRO') + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x50f6bd[_0x212dae(0x2d7)] + _0x212dae(0x2ad)));
                }
            }
        }
        function _0x58d68e(_0x3ad012) {
            return new Promise((_0x4b4acf, _0x5a9112) => {
                const _0x3c6006 = a0_0x1eaf;
                let _0x4c188b = _0x3c6006(0x322) + _0x3ad012 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': _0x3c6006(0x346),
                    'url': _0x4c188b,
                    'onload': function (_0x5d0436) {
                        const _0x124b1f = _0x3c6006;
                        try {
                            let _0x3d5212 = JSON[_0x124b1f(0x12b)](_0x5d0436['response']);
                            _0x4b4acf(_0x3d5212);
                        } catch (_0x118da6) {
                            _0x572202(_0x124b1f(0x2f8), _0x124b1f(0x27e), _0x118da6[_0x124b1f(0x13f)]), _0x5a9112(_0x118da6);
                        }
                    },
                    'onerror': function (_0x1a264f) {
                        const _0x8660fd = _0x3c6006;
                        _0x572202(_0x8660fd(0x2f8), 'reject', _0x1a264f), _0x5a9112(_0x1a264f);
                    }
                });
            });
        }
        function _0x752146(_0x465a29) {
            return new Promise((_0x5677c3, _0x4e873c) => {
                const _0xfcc592 = a0_0x1eaf;
                let _0x47383b = _0xfcc592(0x117) + _0x465a29 + _0xfcc592(0x2d5);
                GM_xmlhttpRequest({
                    'method': _0xfcc592(0x346),
                    'url': _0x47383b,
                    'onload': function (_0x12bf7f) {
                        const _0x11801f = _0xfcc592;
                        try {
                            let _0x52b58c = JSON[_0x11801f(0x12b)](_0x12bf7f['response']);
                            _0x572202(_0x11801f(0x134), _0x52b58c), _0x5677c3(_0x52b58c);
                        } catch (_0x1a2864) {
                            _0x572202('getStories()', _0x11801f(0x27e), _0x1a2864[_0x11801f(0x13f)]), _0x4e873c(_0x1a2864);
                        }
                    },
                    'onerror': function (_0x503b75) {
                        const _0xe05080 = _0xfcc592;
                        _0x572202(_0xe05080(0x134), _0xe05080(0x27e), _0x503b75), _0x4e873c(_0x503b75);
                    }
                });
            });
        }
        function _0x3866bf(_0x2e7996) {
            return new Promise((_0x304a53, _0x5da480) => {
                const _0x4a1d3f = a0_0x1eaf;
                let _0x15a23d = _0x4a1d3f(0x22e) + _0x2e7996;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x15a23d,
                    'onload': function (_0x455db0) {
                        const _0xdc45ae = _0x4a1d3f;
                        let _0x543e3a = JSON[_0xdc45ae(0x12b)](_0x455db0[_0xdc45ae(0x13c)]), _0x407f3a = null;
                        _0x543e3a['users'][_0xdc45ae(0x16c)](_0xcfc816 => {
                            const _0x516e7d = _0xdc45ae;
                            _0xcfc816[_0x516e7d(0x2f7)][_0x516e7d(0x1ea)]?.['toLowerCase']() === _0x2e7996?.[_0x516e7d(0x2c2)]() && (_0x407f3a = _0xcfc816);
                        }), _0x407f3a != null ? (_0x572202(_0xdc45ae(0x15f), _0x407f3a), _0x304a53(_0x407f3a)) : _0x12b122(_0x2e7996)[_0xdc45ae(0x2b8)](_0x152087 => {
                            _0x304a53(_0x152087);
                        })['catch'](_0x483ce4 => {
                            const _0x23be76 = _0xdc45ae;
                            alert(_0x23be76(0x1d7));
                        });
                    },
                    'onerror': function (_0x326e7a) {
                        const _0x2a8681 = _0x4a1d3f;
                        _0x572202(_0x2a8681(0x15f), 'reject', _0x326e7a), _0x5da480(_0x326e7a);
                    }
                });
            });
        }
        function _0x12b122(_0x69e43e) {
            return new Promise((_0x23586d, _0x1172f4) => {
                const _0x35a799 = a0_0x1eaf;
                let _0x151881 = _0x35a799(0x264) + _0x69e43e;
                GM_xmlhttpRequest({
                    'method': _0x35a799(0x346),
                    'url': _0x151881,
                    'headers': { 'X-IG-App-ID': _0x52adc8() },
                    'onload': function (_0x109d90) {
                        const _0xee5b18 = _0x35a799;
                        try {
                            let _0x318f34 = JSON[_0xee5b18(0x12b)](_0x109d90['response']), _0x1350f1 = _0x318f34?.[_0xee5b18(0x2ef)]?.[_0xee5b18(0x2f7)];
                            if (_0x1350f1 != null) {
                                let _0x369b9c = _0x318f34?.[_0xee5b18(0x2ef)];
                                _0x369b9c[_0xee5b18(0x2f7)]['pk'] = _0x369b9c[_0xee5b18(0x2f7)]['id'], _0x572202(_0xee5b18(0x186), _0x318f34), _0x23586d(_0x369b9c);
                            } else
                                _0x572202(_0xee5b18(0x186), _0xee5b18(0x27e), 'undefined'), _0x1172f4(_0xee5b18(0x286));
                        } catch (_0x354346) {
                            _0x572202(_0xee5b18(0x186), 'reject', _0x354346[_0xee5b18(0x13f)]), _0x1172f4(_0x354346);
                        }
                    },
                    'onerror': function (_0x422a7b) {
                        const _0x209fb1 = _0x35a799;
                        _0x572202(_0x209fb1(0x186), _0x209fb1(0x27e), _0x422a7b), _0x1172f4(_0x422a7b);
                    }
                });
            });
        }
        function _0x524ec9(_0x1df3ef) {
            return new Promise((_0x4dc723, _0x228724) => {
                const _0x28ddc0 = a0_0x1eaf;
                let _0x9fb638 = _0x28ddc0(0x1c7) + _0x1df3ef + _0x28ddc0(0x20c);
                GM_xmlhttpRequest({
                    'method': _0x28ddc0(0x346),
                    'url': _0x9fb638,
                    'headers': { 'User-Agent': _0x28ddc0(0x271) },
                    'onload': function (_0x11cda0) {
                        const _0x33ad6e = _0x28ddc0;
                        try {
                            let _0x5727fe = JSON[_0x33ad6e(0x12b)](_0x11cda0[_0x33ad6e(0x13c)]);
                            _0x5727fe[_0x33ad6e(0x10c)] !== 'ok' ? (_0x572202(_0x33ad6e(0x305), _0x33ad6e(0x27e), _0x5727fe), _0x228724(_0x33ad6e(0x25f))) : (_0x572202(_0x33ad6e(0x305), _0x5727fe), _0x4dc723(_0x5727fe[_0x33ad6e(0x2f7)][_0x33ad6e(0x125)]?.[_0x33ad6e(0x19c)]));
                        } catch (_0x2eccde) {
                            _0x572202(_0x33ad6e(0x305), 'reject', _0x2eccde), _0x228724(_0x2eccde);
                        }
                    },
                    'onerror': function (_0x20b285) {
                        const _0x58316c = _0x28ddc0;
                        _0x572202(_0x58316c(0x305), _0x58316c(0x27e), _0x20b285), _0x228724(_0x20b285);
                    }
                });
            });
        }
        function _0x3376fd(_0x1f6948) {
            return new Promise((_0x1cbe14, _0x568fc8) => {
                const _0x1f8aee = a0_0x1eaf;
                if (!_0x1f6948)
                    _0x568fc8(_0x1f8aee(0x195));
                let _0x37fece = _0x1f6948, _0x2512ce = _0x1f8aee(0x299) + _0x37fece + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x1f8aee(0x346),
                    'url': _0x2512ce,
                    'onload': function (_0x2f74d3) {
                        const _0x381dcb = _0x1f8aee;
                        try {
                            let _0x4c5c20 = JSON[_0x381dcb(0x12b)](_0x2f74d3[_0x381dcb(0x13c)]);
                            _0x572202('getPostOwner()', _0x4c5c20), _0x1cbe14(_0x4c5c20['data'][_0x381dcb(0x2cf)][_0x381dcb(0x302)][_0x381dcb(0x1ea)]);
                        } catch (_0x4a01f3) {
                            _0x572202(_0x381dcb(0x183), _0x381dcb(0x27e), _0x4a01f3['message']), _0x568fc8(_0x4a01f3);
                        }
                    },
                    'onerror': function (_0x4937b4) {
                        const _0x20e050 = _0x1f8aee;
                        _0x572202(_0x20e050(0x183), _0x20e050(0x27e), _0x4937b4), _0x568fc8(_0x4937b4);
                    }
                });
            });
        }
        function _0x279941(_0xb54446) {
            return new Promise((_0xb302b6, _0xd28707) => {
                const _0x554a71 = a0_0x1eaf;
                if (!_0xb54446)
                    _0xd28707(_0x554a71(0x195));
                let _0x38478a = _0xb54446, _0x14e123 = _0x554a71(0x299) + _0x38478a + _0x554a71(0x34e);
                GM_xmlhttpRequest({
                    'method': _0x554a71(0x346),
                    'url': _0x14e123,
                    'headers': { 'User-Agent': _0x554a71(0x271) },
                    'onload': function (_0x5918ed) {
                        const _0x27b438 = _0x554a71;
                        try {
                            let _0x1d96e7 = JSON['parse'](_0x5918ed[_0x27b438(0x13c)]);
                            _0x572202(_0x1d96e7), _0x1d96e7['status'] === 'fail' ? (_0x572202(_0x27b438(0x194), _0x27b438(0x2fb), _0x38478a), _0x48d6ce(_0x38478a)[_0x27b438(0x2b8)](_0x74acee => {
                                const _0xf50e20 = _0x27b438;
                                _0xb302b6({
                                    'type': 'query_id',
                                    'data': _0x74acee[_0xf50e20(0x369)][_0xf50e20(0x272)][0x0]
                                });
                            })[_0x27b438(0xec)](_0x2230a9 => {
                                _0xd28707(_0x2230a9);
                            })) : _0xb302b6({
                                'type': 'query_hash',
                                'data': _0x1d96e7[_0x27b438(0x2ef)]
                            });
                        } catch (_0x405d94) {
                            _0x572202('getBlobMedia()', 'reject', _0x405d94['message']), _0xd28707(_0x405d94);
                        }
                    },
                    'onerror': function (_0x259213) {
                        const _0x34d803 = _0x554a71;
                        _0x572202(_0x34d803(0x1f9), _0x34d803(0x27e), _0x259213), _0xd28707(_0x259213);
                    }
                });
            });
        }
        function _0x48d6ce(_0x1875aa) {
            return new Promise((_0x373b06, _0x523e93) => {
                const _0x755b90 = a0_0x1eaf;
                if (!_0x1875aa)
                    _0x523e93(_0x755b90(0x195));
                let _0xfca6d6 = _0x1875aa, _0x442222 = _0x755b90(0x191) + _0xfca6d6 + _0x755b90(0x1b2);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x442222,
                    'headers': {
                        'User-Agent': _0x755b90(0x271),
                        'X-IG-App-ID': _0x52adc8()
                    },
                    'onload': function (_0x361d8e) {
                        const _0x159fff = _0x755b90;
                        try {
                            let _0x540f96 = JSON[_0x159fff(0x12b)](_0x361d8e[_0x159fff(0x13c)]);
                            _0x572202(_0x540f96), _0x540f96['status'] === _0x159fff(0x314) ? (alert(_0x159fff(0x285) + _0x540f96['message'] + ':\x20' + _0x540f96[_0x159fff(0x2e0)]), _0x572202(_0x159fff(0x12e) + _0x540f96[_0x159fff(0x13f)] + ':\x20' + _0x540f96['feedback_message']), _0x523e93(_0x361d8e)) : (_0x572202(_0x159fff(0x35d), _0x540f96['data']), _0x373b06(_0x540f96['data']));
                        } catch (_0x52333d) {
                            _0x572202(_0x159fff(0x35d), 'reject', _0x52333d[_0x159fff(0x13f)]), _0x523e93(_0x52333d);
                        }
                    },
                    'onerror': function (_0x2fbd79) {
                        const _0x55b527 = _0x755b90;
                        _0x572202(_0x55b527(0x35d), _0x55b527(0x27e), _0x2fbd79), _0x523e93(_0x2fbd79);
                    }
                });
            });
        }
        function _0x56082e(_0x1d51c8) {
            return new Promise((_0x1797ef, _0x278864) => {
                const _0x1d2d26 = a0_0x1eaf;
                let _0x3615c0 = _0x1d2d26(0x246) + _0x1d51c8 + '/info/';
                if (_0x1d51c8 == null) {
                    alert(_0x1d2d26(0x1fa)), _0x572202(_0x1d2d26(0x35e), _0x1d2d26(0x27e), _0x1d2d26(0x1fa)), _0x104471(![]), _0x278864(-0x1);
                    return;
                }
                if (_0x52adc8() == null) {
                    alert(_0x1d2d26(0x26d)), _0x572202(_0x1d2d26(0x35e), _0x1d2d26(0x27e), _0x1d2d26(0x26d)), _0x104471(![]), _0x278864(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x1d2d26(0x346),
                    'url': _0x3615c0,
                    'headers': {
                        'User-Agent': window[_0x1d2d26(0x306)][_0x1d2d26(0x2f2)],
                        'Accept': _0x1d2d26(0x103),
                        'X-IG-App-ID': _0x52adc8()
                    },
                    'onload': function (_0x4cf454) {
                        const _0x26d383 = _0x1d2d26;
                        if (_0x4cf454[_0x26d383(0x20e)] == _0x3615c0) {
                            let _0x19ded6 = JSON['parse'](_0x4cf454[_0x26d383(0x13c)]);
                            _0x572202(_0x26d383(0x35e), _0x19ded6), _0x1797ef(_0x19ded6);
                        } else {
                            let _0x52fd2c = new URL(_0x4cf454[_0x26d383(0x20e)]);
                            _0x52fd2c[_0x26d383(0x10e)]['startsWith'](_0x26d383(0x338)) ? (_0x572202(_0x26d383(0x35e), _0x26d383(0x27e), _0x26d383(0x204)), alert(_0x26d383(0x204))) : (_0x572202(_0x26d383(0x35e), _0x26d383(0x27e), _0x26d383(0x27a) + _0x4cf454[_0x26d383(0x20e)] + '\x22'), alert(_0x26d383(0x27a) + _0x4cf454[_0x26d383(0x20e)] + '\x22')), _0x104471(![]), _0x278864(-0x1);
                        }
                    },
                    'onerror': function (_0x4983ab) {
                        const _0x38a8d3 = _0x1d2d26;
                        _0x572202(_0x38a8d3(0x35e), _0x38a8d3(0x27e), _0x4983ab), _0x1797ef(_0x4983ab);
                    }
                });
            });
        }
        function _0x130dc8(_0x33e64a) {
            const _0x33d136 = _0x51b01c;
            let _0x20b2bd = new URL(_0x33e64a), _0x5889e5 = _0x20b2bd?.[_0x33d136(0x270)]?.['get'](_0x33d136(0x1b5))?.[_0x33d136(0x33d)]('.')['at'](0x0);
            return _0x5889e5 ? atob(_0x5889e5) : null;
        }
        function _0x52adc8() {
            const _0x3c19de = _0x51b01c;
            let _0x571e38 = null;
            return _0xf0822b(_0x3c19de(0x1d9))[_0x3c19de(0x129)](function () {
                const _0x168711 = _0x3c19de, _0x2ed6dc = /"APP_ID":"([0-9]+)"/ig, _0x6eaf9e = _0xf0822b(this)[_0x168711(0x2bf)]()[_0x168711(0x21d)](_0x2ed6dc);
                _0x6eaf9e != null && _0x571e38 == null && (_0x571e38 = [..._0xf0822b(this)[_0x168711(0x2bf)]()[_0x168711(0x2bd)](_0x2ed6dc)]);
            }), _0x571e38 ? _0x571e38['at'](0x0)['at'](-0x1) : null;
        }
        function _0x104471(_0x31e2dc) {
            const _0x45fdd2 = _0x51b01c;
            _0x31e2dc ? (_0xf0822b(_0x45fdd2(0x2b7))[_0x45fdd2(0x143)](_0x45fdd2(0x316)), _0xf0822b(_0x45fdd2(0x2b7))['css'](_0x45fdd2(0xf8), _0x45fdd2(0x1df))) : (_0xf0822b(_0x45fdd2(0x2b7))[_0x45fdd2(0x349)](_0x45fdd2(0x316)), _0xf0822b(_0x45fdd2(0x2b7))[_0x45fdd2(0x2a7)](_0x45fdd2(0xf8), ''));
        }
        function _0x57e0ea(_0x309255) {
            const _0x162ebd = _0x51b01c;
            let _0x3a03a1 = _0xf0822b('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x309255 + '\x22]\x20span')[_0x162ebd(0x25e)](function () {
                const _0x2a552f = _0x162ebd;
                return _0xf0822b(this)[_0x2a552f(0x1c0)]()[_0x2a552f(0x2d4)] === 0x0 && _0xf0822b(this)['find'](_0x2a552f(0x28e))[_0x2a552f(0x2d4)] === 0x0 && _0xf0822b(this)['text']()?.[_0x2a552f(0x2c2)]() === _0x309255?.[_0x2a552f(0x2c2)]();
            })['parents']('div:not([class]):not([style])')[_0x162ebd(0x25e)](function () {
                const _0x5ee5a4 = _0x162ebd;
                return _0xf0822b(this)['text']()?.[_0x5ee5a4(0x2c2)]() !== _0x309255?.[_0x5ee5a4(0x2c2)]();
            })[_0x162ebd(0x25e)](function () {
                const _0x4e9f9c = _0x162ebd;
                return _0xf0822b(this)[_0x4e9f9c(0x1c0)]()['length'] > 0x1;
            })['first']();
            return _0x3a03a1['length'] === 0x0 && (_0x3a03a1 = _0xf0822b(_0x162ebd(0x37e) + _0x309255 + '\x22]')['filter'](function () {
                return _0xf0822b(this)['find']('img')['length'] > 0x0;
            })[_0x162ebd(0x347)](_0x162ebd(0x1a9))[_0x162ebd(0x25e)](function () {
                const _0x4bf2dc = _0x162ebd;
                return _0xf0822b(this)[_0x4bf2dc(0x2bf)]()?.[_0x4bf2dc(0x2c2)]() !== _0x309255?.[_0x4bf2dc(0x2c2)]();
            })[_0x162ebd(0x25e)](function () {
                const _0x3c397d = _0x162ebd;
                return _0xf0822b(this)[_0x3c397d(0x1c0)]()[_0x3c397d(0x2d4)] > 0x1;
            })[_0x162ebd(0x35f)]()), _0x3a03a1['children']()[_0x162ebd(0x25e)](function () {
                const _0x2bad2b = _0x162ebd;
                return _0xf0822b(this)[_0x2bad2b(0x199)]() < 0xa;
            })['first']()[_0x162ebd(0x1c0)]();
        }
        function _0x300267(_0x355862, _0x47febb) {
            const _0x1c49e5 = _0x51b01c;
            _0xf0822b(_0x1c49e5(0x388))[_0x1c49e5(0x2d4)] ? (_0xf0822b(_0x1c49e5(0x351))['text'](_0x355862 + '/' + _0x47febb), _0x355862 >= _0x47febb && _0xf0822b('.circle_wrapper')[_0x1c49e5(0x104)](0xfa, function () {
                const _0x4f6ee2 = _0x1c49e5;
                _0xf0822b(this)[_0x4f6ee2(0x309)]();
            })) : _0xf0822b(_0x1c49e5(0x188))['append'](_0x1c49e5(0x144) + _0x355862 + '/' + _0x47febb + '</span></div>');
        }
        function _0x64ee85(_0x408eab, _0x20a742) {
            const _0x59f555 = _0x51b01c;
            let _0x5b02b1 = _0x408eab ? _0x59f555(0x389) : '';
            _0xf0822b('body')['append'](_0x59f555(0x2ed) + _0x5b02b1 + _0x59f555(0x33a)), _0xf0822b(_0x59f555(0x29c))['append']('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x84a48b('CLOSE') + _0x59f555(0x1ef) + GM_info['script'][_0x59f555(0x216)] + '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x50f6bd[_0x59f555(0x1b7)] + '</div></div>'), _0x20a742 && (_0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')['append'](_0x59f555(0x2c6)), _0xf0822b(_0x59f555(0x2e4))[_0x59f555(0x288)](_0x59f555(0xf2) + _0x84a48b('BATCH_DOWNLOAD_SELECTED') + _0x59f555(0xfa)), _0xf0822b(_0x59f555(0x2e4))[_0x59f555(0x288)](_0x59f555(0x23f) + _0x84a48b(_0x59f555(0x16b)) + '</button>'), _0xf0822b(_0x59f555(0x29c))[_0x59f555(0x288)](_0x59f555(0x1ba) + _0x84a48b(_0x59f555(0x36d)) + _0x59f555(0x121)));
        }
        function _0x459685(_0x554c0c) {
            const _0x1a1893 = _0x51b01c;
            _0xf0822b('.IG_POPUP_DIG')[_0x1a1893(0x2d4)] && (_0x554c0c ? _0xf0822b(_0x1a1893(0x253))[_0x1a1893(0x349)](_0x1a1893(0x389)) : _0xf0822b(_0x1a1893(0x253))[_0x1a1893(0x143)](_0x1a1893(0x389)));
        }
        function _0x237545(_0x54b536, _0x17a2a9, _0x99ce3, _0x250864, _0xd9d678, _0x4b448c) {
            return new Promise(_0xe960c7 => {
                setTimeout(() => {
                    const _0x514167 = a0_0x1eaf;
                    _0x104471(!![]), fetch(_0x54b536)[_0x514167(0x2b8)](_0x410781 => {
                        const _0x236c32 = _0x514167;
                        return _0x410781[_0x236c32(0x20f)]()['then'](_0x50d602 => {
                            _0x104471(![]), _0x5bb68f(_0x54b536, _0x50d602, _0x17a2a9, _0x99ce3, _0x250864, _0xd9d678, _0x4b448c), _0xe960c7(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x5bb68f(_0xdbf078, _0x2a53b8, _0x29026d, _0x4a47b2, _0xd4cabe, _0x4d2d34, _0x501b84) {
            const _0x14a2d0 = _0x51b01c;
            _0xd4cabe = parseInt(_0xd4cabe[_0x14a2d0(0x147)]()['padEnd'](0xd, '0'));
            _0x88bc73[_0x14a2d0(0x21a)] && (_0xd4cabe = parseInt(_0xd4cabe[_0x14a2d0(0x147)]()[_0x14a2d0(0x294)](0xd, '0')));
            const _0x4edea2 = new Date(_0xd4cabe), _0xfc0088 = document[_0x14a2d0(0x243)]('a'), _0x2dd431 = new URL(_0xdbf078)[_0x14a2d0(0x10e)]['split']('/')['at'](-0x1)[_0x14a2d0(0x33d)]('.')[_0x14a2d0(0x1e8)](0x0, -0x1)['join']('.'), _0x987937 = _0x4edea2[_0x14a2d0(0x155)]()[_0x14a2d0(0x147)](), _0x59413d = (_0x4edea2[_0x14a2d0(0x382)]() + 0x1)['toString']()[_0x14a2d0(0x277)](0x2, '0'), _0x27ea1a = _0x4edea2['getDate']()[_0x14a2d0(0x147)]()[_0x14a2d0(0x277)](0x2, '0'), _0x40c3e3 = _0x4edea2[_0x14a2d0(0x33b)]()[_0x14a2d0(0x147)]()[_0x14a2d0(0x277)](0x2, '0'), _0x35b9b6 = _0x4edea2[_0x14a2d0(0x2a5)]()['toString']()['padStart'](0x2, '0'), _0x1b94e0 = _0x4edea2[_0x14a2d0(0x339)]()[_0x14a2d0(0x147)]()['padStart'](0x2, '0');
            var _0x2e68d8 = _0x550b30[_0x14a2d0(0x2c3)][_0x14a2d0(0x28f)](), _0x48342e = _0x501b84 ?? '', _0x442057 = {
                    '%USERNAME%': _0x29026d,
                    '%SOURCE_TYPE%': _0x4a47b2,
                    '%SHORTCODE%': _0x48342e,
                    '%YEAR%': _0x987937,
                    '%2-YEAR%': _0x987937[_0x14a2d0(0x22c)](-0x2),
                    '%MONTH%': _0x59413d,
                    '%DAY%': _0x27ea1a,
                    '%HOUR%': _0x40c3e3,
                    '%MINUTE%': _0x35b9b6,
                    '%SECOND%': _0x1b94e0,
                    '%ORIGINAL_NAME%': _0x2dd431,
                    '%ORIGINAL_NAME_FIRST%': _0x2dd431['split']('_')['at'](0x0)
                };
            _0x2e68d8 = _0x2e68d8[_0x14a2d0(0x32c)](/%[\w\-]+%/g, function (_0x5411d4) {
                return _0x442057[_0x5411d4] || _0x5411d4;
            });
            const _0x5c1526 = _0x29026d + '_' + _0x2dd431 + '.' + _0x4d2d34;
            _0xfc0088[_0x14a2d0(0x38a)] = URL[_0x14a2d0(0x2a0)](_0x2a53b8), _0xfc0088[_0x14a2d0(0x23d)](_0x14a2d0(0x1ed), _0x88bc73[_0x14a2d0(0xf9)] ? _0x2e68d8 + '.' + _0x4d2d34 : _0x5c1526), _0xfc0088[_0x14a2d0(0x380)](), _0xfc0088[_0x14a2d0(0x309)]();
        }
        async function _0x10701b(_0x38d823, _0x4ab8ed) {
            const _0x1f62dd = _0x51b01c;
            let _0xf8f8a7 = new Date()['getTime'](), _0x11e8be = Math[_0x1f62dd(0x276)](_0xf8f8a7 / 0x3e8), _0x54a4f6 = _0xf0822b(_0x38d823)['attr']('data-username') ? _0xf0822b(_0x38d823)['attr']('data-username') : _0x550b30[_0x1f62dd(0x1a5)];
            !_0x54a4f6 && _0xf0822b(_0x38d823)[_0x1f62dd(0x375)]('data-path') && (_0x572202(_0x1f62dd(0x318), _0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x32f))), _0x54a4f6 = await _0x3376fd(_0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x1de)))[_0x1f62dd(0xec)](_0x5eb4d1 => {
                const _0x540f19 = _0x1f62dd;
                _0x572202('get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:', _0x5eb4d1[_0x540f19(0x13f)]);
            }), _0x54a4f6 == null && (_0x54a4f6 = _0x1f62dd(0x2b9)));
            _0x88bc73[_0x1f62dd(0x21a)] && _0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x25d)) && (_0x11e8be = parseInt(_0xf0822b(_0x38d823)['attr'](_0x1f62dd(0x25d))));
            if (_0x88bc73[_0x1f62dd(0x2e9)]) {
                _0x104471(!![]);
                let _0x3e1670 = await _0x56082e(_0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x2a4)));
                _0x104471(![]);
                if (_0x3e1670[_0x1f62dd(0x10c)] === 'ok') {
                    var _0x2c55e1 = null;
                    _0x3e1670[_0x1f62dd(0x272)][0x0][_0x1f62dd(0x326)] ? _0x2c55e1 = _0x3e1670['items'][0x0][_0x1f62dd(0x326)][0x0]['url'] : (_0x3e1670[_0x1f62dd(0x272)][0x0][_0x1f62dd(0x25a)][_0x1f62dd(0x2c7)][_0x1f62dd(0x13d)](function (_0x13636d, _0x56189b) {
                        const _0x4e68e0 = _0x1f62dd;
                        let _0x3cc796 = new URL(_0x13636d['url'])[_0x4e68e0(0x270)][_0x4e68e0(0x154)](_0x4e68e0(0x244)), _0xe0ca3d = new URL(_0x56189b[_0x4e68e0(0x19c)])[_0x4e68e0(0x270)][_0x4e68e0(0x154)](_0x4e68e0(0x244));
                        if (_0x3cc796 && _0xe0ca3d) {
                            if (_0x3cc796[_0x4e68e0(0x2d4)] > _0xe0ca3d[_0x4e68e0(0x2d4)])
                                return 0x1;
                            if (_0x3cc796[_0x4e68e0(0x2d4)] < _0xe0ca3d['length'])
                                return -0x1;
                        } else {
                            if (_0x13636d['width'] < _0x56189b[_0x4e68e0(0x2bc)])
                                return 0x1;
                            if (_0x13636d[_0x4e68e0(0x2bc)] > _0x56189b[_0x4e68e0(0x2bc)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x2c55e1 = _0x3e1670[_0x1f62dd(0x272)][0x0]['image_versions2'][_0x1f62dd(0x2c7)][0x0][_0x1f62dd(0x19c)]);
                    if (_0x4ab8ed) {
                        let _0x1f98ca = new URL(_0x2c55e1);
                        _0x1f98ca[_0x1f62dd(0xee)] = 'scontent.cdninstagram.com', _0x55374a(_0x1f98ca['href']);
                    } else
                        _0x237545(_0x2c55e1, _0x54a4f6, _0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x184)), _0x11e8be, _0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x1eb)), _0xf0822b(_0x38d823)['attr']('data-path'));
                } else {
                    if (_0x88bc73['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT']) {
                        if (_0x4ab8ed) {
                            let _0x33a0bd = new URL(_0xf0822b(_0x38d823)[_0x1f62dd(0x375)]('data-href'));
                            _0x33a0bd[_0x1f62dd(0xee)] = _0x1f62dd(0x1a6), _0x55374a(_0x33a0bd[_0x1f62dd(0x38a)]);
                        } else
                            _0x237545(_0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x32f)), _0x54a4f6, _0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x184)), _0x11e8be, _0xf0822b(_0x38d823)['attr'](_0x1f62dd(0x1eb)), _0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x1de)));
                    } else
                        alert(_0x1f62dd(0x2af) + _0x3e1670[_0x1f62dd(0x13f)]);
                    _0x572202(_0x3e1670);
                }
            } else
                _0x237545(_0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x32f)), _0x54a4f6, _0xf0822b(_0x38d823)[_0x1f62dd(0x375)](_0x1f62dd(0x184)), _0x11e8be, _0xf0822b(_0x38d823)[_0x1f62dd(0x375)]('data-type'), _0xf0822b(_0x38d823)['attr'](_0x1f62dd(0x1de)));
        }
        function _0x1f1dc3() {
            const _0x107e10 = _0x51b01c;
            for (let _0x3484b7 of _0x550b30[_0x107e10(0x203)]) {
                _0x572202('GM_unregisterMenuCommand', _0x3484b7), GM_unregisterMenuCommand(_0x3484b7);
            }
            _0x550b30[_0x107e10(0x203)][_0x107e10(0x361)](GM_registerMenuCommand(_0x84a48b('SETTING'), () => {
                _0x4898c9();
            }, { 'accessKey': 'w' })), _0x550b30[_0x107e10(0x203)][_0x107e10(0x361)](GM_registerMenuCommand(_0x84a48b(_0x107e10(0x169)), () => {
                const _0x4e9cc5 = _0x107e10;
                GM_openInTab(_0x4e9cc5(0x30b), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x550b30[_0x107e10(0x203)][_0x107e10(0x361)](GM_registerMenuCommand(_0x84a48b(_0x107e10(0x1e5)), () => {
                _0x20f6e7();
            }, { 'accessKey': 'z' })), _0x550b30[_0x107e10(0x203)][_0x107e10(0x361)](GM_registerMenuCommand(_0x84a48b(_0x107e10(0x268)), () => {
                _0x1a82ef();
            }, { 'accessKey': 'f' })), _0x550b30[_0x107e10(0x203)][_0x107e10(0x361)](GM_registerMenuCommand(_0x84a48b(_0x107e10(0x190)), () => {
                _0x3aec17();
            }, { 'accessKey': 'c' })), _0x550b30[_0x107e10(0x203)]['push'](GM_registerMenuCommand(_0x84a48b('RELOAD_SCRIPT'), () => {
                _0x49db91();
            }, { 'accessKey': 'r' }));
        }
        function _0x4b5f23(_0xe0e3d6) {
            const _0x56f1b6 = _0x51b01c;
            if (!_0x88bc73['CHECK_UPDATE'])
                return;
            const _0xa59971 = GM_getValue(_0x56f1b6(0x2aa)) ?? new Date()[_0x56f1b6(0x27c)](), _0x152116 = new Date()[_0x56f1b6(0x27c)]();
            _0x152116 > parseInt(_0xa59971) + _0xe0e3d6 * 0x3e8 && (GM_setValue(_0x56f1b6(0x2aa), new Date()[_0x56f1b6(0x27c)]()), _0x3aec17());
        }
        function _0x3aec17() {
            const _0x408b19 = _0x51b01c, _0x3cd901 = GM_info[_0x408b19(0x11c)][_0x408b19(0x216)], _0x44bee0 = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': _0x408b19(0x346),
                'url': _0x44bee0,
                'onload': function (_0x2a92f1) {
                    const _0x35a5df = _0x408b19, _0x6daf34 = _0x2a92f1[_0x35a5df(0x376)], _0x2f9861 = _0x6daf34['match'](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x2f9861 && _0x2f9861[0x1]) {
                        const _0x299a6a = _0x2f9861[0x1];
                        _0x572202(_0x35a5df(0x368), _0x3cd901, '|', _0x35a5df(0x1c5), _0x299a6a), _0x299a6a !== _0x3cd901 && typeof this[_0x35a5df(0x21c)] === _0x35a5df(0x286) ? (this[_0x35a5df(0x21c)] = null, GM_notification({
                            'text': _0x84a48b(_0x35a5df(0x32a)),
                            'title': _0x84a48b('NOTICE_UPDATE_TITLE'),
                            'tag': _0x35a5df(0x2f6),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x35a5df(0x162),
                            'onclick': _0x21114d => {
                                const _0x27772f = _0x35a5df;
                                _0x21114d?.[_0x27772f(0x238)]();
                                var _0x3ed100 = GM_openInTab(GM_info[_0x27772f(0x11c)][_0x27772f(0x229)]);
                                setTimeout(() => {
                                    const _0x22408b = _0x27772f;
                                    _0x3ed100[_0x22408b(0x2f9)]();
                                }, 0xfa);
                            }
                        })) : _0x572202('there\x20is\x20no\x20new\x20update');
                    } else
                        console['error'](_0x35a5df(0x32b));
                }
            });
        }
        function _0x4898c9() {
            const _0x2628da = _0x51b01c;
            _0xf0822b('.IG_POPUP_DIG')[_0x2628da(0x309)](), _0x64ee85(), _0xf0822b('.IG_POPUP_DIG\x20#post_info')[_0x2628da(0x2bf)](_0x2628da(0x2da)), _0xf0822b(_0x2628da(0x2d2))['append'](_0x2628da(0x2d8));
            for (let _0x36413e in _0x50e62a) {
                _0xf0822b(_0x2628da(0x1ec))[_0x2628da(0x288)](_0x2628da(0x300) + _0x36413e + '\x22\x20' + (_0x550b30[_0x2628da(0x226)] == _0x36413e ? 'selected' : '') + '>' + _0x50e62a[_0x36413e] + '</option>');
            }
            for (let _0x5d3224 in _0x88bc73) {
                _0xf0822b(_0x2628da(0x2a6))[_0x2628da(0x288)](_0x2628da(0x311) + (_0x20ebd4[_0x2628da(0x31c)](_0x5d3224) ? _0x2628da(0x2f0) : '') + _0x2628da(0xf4) + _0x84a48b(_0x5d3224 + _0x2628da(0x342)) + _0x2628da(0x1a3) + (_0x5d3224 + _0x2628da(0x342)) + '\x22><span\x20data-ih-locale=\x22' + _0x5d3224 + '\x22>' + _0x84a48b(_0x5d3224) + _0x2628da(0x1a1) + _0x5d3224 + _0x2628da(0x1b3) + (_0x88bc73[_0x5d3224] === !![] ? _0x2628da(0x29a) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x5d3224 === _0x2628da(0x123) && _0xf0822b(_0x2628da(0x1c3) + _0x5d3224 + '\x22]')[_0x2628da(0x198)](_0x2628da(0x1af))['on']('contextmenu', function (_0x23c474) {
                    const _0x4348b6 = _0x2628da;
                    _0x23c474['preventDefault'](), _0xf0822b(this)[_0x4348b6(0x1e7)](_0x4348b6(0x1f3))[_0x4348b6(0x2d4)] === 0x0 && (_0xf0822b(this)[_0x4348b6(0x288)](_0x4348b6(0x1fc)), _0xf0822b(this)[_0x4348b6(0x1c0)](_0x4348b6(0x1f3))[_0x4348b6(0x288)](_0x4348b6(0x381) + _0x550b30[_0x4348b6(0x160)] + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0xf0822b(this)[_0x4348b6(0x1c0)](_0x4348b6(0x1f3))[_0x4348b6(0x288)](_0x4348b6(0x381) + _0x550b30[_0x4348b6(0x160)] + _0x4348b6(0x1f4)), _0xf0822b(this)[_0x4348b6(0x1c0)](_0x4348b6(0x1f3))[_0x4348b6(0x288)]('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x50f6bd[_0x4348b6(0x1b7)] + _0x4348b6(0x2ad)));
                }), _0x5d3224 === _0x2628da(0xf9) && _0xf0822b(_0x2628da(0x1c3) + _0x5d3224 + '\x22]')['parent'](_0x2628da(0x1af))['on'](_0x2628da(0x1fb), function (_0x1f8c5b) {
                    const _0x2d4270 = _0x2628da;
                    _0x1f8c5b[_0x2d4270(0x238)](), _0xf0822b(this)[_0x2d4270(0x1e7)](_0x2d4270(0x1f3))[_0x2d4270(0x2d4)] === 0x0 && (_0xf0822b(this)['append'](_0x2d4270(0x1fc)), _0xf0822b(this)['children'](_0x2d4270(0x1f3))[_0x2d4270(0x288)](_0x2d4270(0x2e8) + _0x550b30['fileRenameFormat'] + _0x2d4270(0x230)), _0xf0822b(this)[_0x2d4270(0x1c0)](_0x2d4270(0x1f3))['append']('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x50f6bd[_0x2d4270(0x1b7)] + _0x2d4270(0x2ad)));
                });
            }
        }
        function _0x20f6e7() {
            const _0x5a61c8 = _0x51b01c;
            _0xf0822b(_0x5a61c8(0x253))['remove'](), _0x64ee85(), _0xf0822b(_0x5a61c8(0x257))[_0x5a61c8(0x2bf)](_0x5a61c8(0x10f)), _0xf0822b(_0x5a61c8(0x2a6))[_0x5a61c8(0x288)]('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0xf0822b(_0x5a61c8(0x2a6))[_0x5a61c8(0x288)](_0x5a61c8(0x34c)), _0xf0822b(_0x5a61c8(0xfb))[_0x5a61c8(0x288)](_0x5a61c8(0x1b6) + _0x84a48b(_0x5a61c8(0x1d6)) + '</a></button>'), _0xf0822b(_0x5a61c8(0xfb))[_0x5a61c8(0x288)](_0x5a61c8(0x353) + _0x84a48b(_0x5a61c8(0x249)) + _0x5a61c8(0x31f)), _0xf0822b(_0x5a61c8(0xfb))[_0x5a61c8(0x288)](_0x5a61c8(0x156) + _0x84a48b(_0x5a61c8(0x1e9)) + _0x5a61c8(0x2fc)), _0xf0822b(_0x5a61c8(0xfb))[_0x5a61c8(0x288)](_0x5a61c8(0x113) + _0x84a48b('REPORT_GITHUB') + _0x5a61c8(0x31f)), _0xf0822b(_0x5a61c8(0xfb))['append'](_0x5a61c8(0x292) + _0x84a48b(_0x5a61c8(0x2a3)) + _0x5a61c8(0x31f));
        }
        function _0x1a82ef() {
            const _0x4bbf49 = _0x51b01c;
            _0xf0822b('.IG_POPUP_DIG')['remove'](), _0x64ee85(), _0xf0822b(_0x4bbf49(0x257))[_0x4bbf49(0x2bf)](_0x4bbf49(0x32e)), _0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')['append']('<span\x20style=\x22display:block;text-align:center;\x22>'), _0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x4bbf49(0x288)](_0x4bbf49(0x386) + _0x84a48b('REPORT_FORK') + _0x4bbf49(0x31f)), _0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x4bbf49(0x288)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x84a48b(_0x4bbf49(0x1ae)) + _0x4bbf49(0x31f)), _0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0x4bbf49(0x288)](_0x4bbf49(0x292) + _0x84a48b(_0x4bbf49(0x2a3)) + '</a></button>');
        }
        function _0x55374a(_0x550a81) {
            const _0x327450 = _0x51b01c;
            var _0x3b0eb3 = document[_0x327450(0x243)]('a');
            _0x3b0eb3[_0x327450(0x38a)] = _0x550a81, _0x3b0eb3[_0x327450(0x34a)] = _0x327450(0x116), document[_0x327450(0x188)][_0x327450(0x22d)](_0x3b0eb3), _0x3b0eb3[_0x327450(0x380)](), _0x3b0eb3[_0x327450(0x309)]();
        }
        function _0x49db91() {
            const _0x5afa4e = _0x51b01c;
            clearInterval(_0x550b30[_0x5afa4e(0x323)]), _0x550b30[_0x5afa4e(0x152)][_0x5afa4e(0x16c)](_0x2c01a9 => {
                const _0xc0f8ac = _0x5afa4e;
                _0x2c01a9[_0xc0f8ac(0x1a4)][_0xc0f8ac(0x16c)](_0x5884df => {
                    _0xf0822b(_0x2c01a9['element'])['off']('click', _0x5884df);
                });
            }), _0x550b30[_0x5afa4e(0x152)] = [], _0xf0822b(_0x5afa4e(0x34d))[_0x5afa4e(0x309)](), _0xf0822b('.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL')['remove'](), _0xf0822b(_0x5afa4e(0x247))[_0x5afa4e(0x23a)](_0x5afa4e(0x297)), _0x550b30[_0x5afa4e(0x16d)] = ![], _0x550b30[_0x5afa4e(0x258)] = ![], _0x550b30[_0x5afa4e(0x265)] = location[_0x5afa4e(0x38a)], _0x550b30[_0x5afa4e(0x344)][_0x5afa4e(0x235)](), _0x572202(_0x5afa4e(0x17a));
        }
        function _0x572202(..._0xe8c549) {
            const _0x61a554 = _0x51b01c;
            var _0x6aa761 = new Date();
            _0x550b30[_0x61a554(0x211)][_0x61a554(0x361)]({
                'time': _0x6aa761['getTime'](),
                'content': [..._0xe8c549]
            }), _0x550b30[_0x61a554(0x211)][_0x61a554(0x2d4)] > 0x3e8 && (_0x550b30[_0x61a554(0x211)] = [
                {
                    'time': _0x6aa761['getTime'](),
                    'content': ['logger\x20sliced']
                },
                ..._0x550b30[_0x61a554(0x211)][_0x61a554(0x1e8)](-0x3e7)
            ]), console[_0x61a554(0x1e2)]('[' + _0x6aa761[_0x61a554(0x343)]() + ']', ..._0xe8c549);
        }
        function _0x591dfa() {
            const _0x4db45d = _0x51b01c;
            for (let _0x4455a8 in _0x88bc73) {
                GM_getValue(_0x4455a8) != null && typeof GM_getValue(_0x4455a8) === _0x4db45d(0x137) && (_0x88bc73[_0x4455a8] = GM_getValue(_0x4455a8), _0x4455a8 === _0x4db45d(0x123) && GM_getValue(_0x4455a8) !== !![] && (_0x550b30[_0x4db45d(0x160)] = 0x1));
            }
        }
        function _0x2e4efd(_0x18b02f, _0x485951, _0x283acd, _0x475549 = '') {
            const _0x4c015a = _0x51b01c;
            _0x485951['find']('div.volume_slider')[_0x4c015a(0x2d4)] === 0x0 ? (_0x485951[_0x4c015a(0x288)](_0x4c015a(0x1be) + _0x475549 + _0x4c015a(0x230)), _0x485951['find'](_0x4c015a(0xef))[_0x4c015a(0x288)](_0x4c015a(0xf3) + _0x550b30[_0x4c015a(0x160)] + _0x4c015a(0x26f)), _0x485951[_0x4c015a(0x1e7)](_0x4c015a(0x371))['attr'](_0x4c015a(0x35b), _0x4c015a(0x38e) + (_0x550b30[_0x4c015a(0x160)] * 0x64 + '%')), _0x485951[_0x4c015a(0x1e7)](_0x4c015a(0x371))['on']('input', function () {
                const _0x1c2de8 = _0x4c015a;
                var _0xa54780 = _0xf0822b(this)[_0x1c2de8(0x384)]() * 0x64 + '%';
                _0x550b30['videoVolume'] = _0xf0822b(this)[_0x1c2de8(0x384)](), GM_setValue('G_VIDEO_VOLUME', _0xf0822b(this)[_0x1c2de8(0x384)]()), _0xf0822b(this)[_0x1c2de8(0x375)](_0x1c2de8(0x35b), '--ig-track-progress:\x20' + _0xa54780), _0x18b02f['each'](function () {
                    const _0xee84c4 = _0x1c2de8;
                    _0x572202('(' + _0x283acd + ')', _0xee84c4(0xfd)), this[_0xee84c4(0x12c)] = _0x550b30[_0xee84c4(0x160)];
                });
            }), _0x485951[_0x4c015a(0x1e7)]('div.volume_slider\x20input')['on'](_0x4c015a(0x27d), function () {
                const _0x335cf2 = _0x4c015a;
                var _0x59123f = _0x550b30[_0x335cf2(0x160)] * 0x64 + '%';
                _0xf0822b(this)[_0x335cf2(0x375)](_0x335cf2(0x35b), _0x335cf2(0x38e) + _0x59123f), _0xf0822b(this)[_0x335cf2(0x384)](_0x550b30[_0x335cf2(0x160)]), _0x18b02f['each'](function () {
                    const _0x23f92e = _0x335cf2;
                    _0x572202('(' + _0x283acd + ')', _0x23f92e(0xfd)), this[_0x23f92e(0x12c)] = _0x550b30[_0x23f92e(0x160)];
                });
            }), _0x485951[_0x4c015a(0x1e7)](_0x4c015a(0xef))['on'](_0x4c015a(0x380), function (_0x259bff) {
                const _0x2ffe61 = _0x4c015a;
                _0x259bff[_0x2ffe61(0x16a)](), _0x259bff['preventDefault']();
            })) : _0x485951[_0x4c015a(0x1e7)]('div.volume_slider')[_0x4c015a(0x309)]();
        }
        function _0x28625c(_0x466037) {
            const _0x23e4e2 = _0x51b01c;
            _0x2a3857(), _0xf0822b(_0x23e4e2(0x188))[_0x23e4e2(0x288)](_0x23e4e2(0x29d) + _0x50f6bd['CLOSE'] + _0x23e4e2(0x24c));
            const _0x45f412 = _0xf0822b(_0x23e4e2(0x266)), _0x591370 = _0xf0822b(_0x23e4e2(0x34b)), _0x12b506 = _0xf0822b(_0x23e4e2(0x275)), _0x2206af = _0xf0822b(_0x23e4e2(0x167));
            _0x2206af['attr']('src', _0x466037), _0x45f412[_0x23e4e2(0x2a7)](_0x23e4e2(0x135), _0x23e4e2(0x2eb));
            let _0x155a5e = 0.75, _0x418980 = 0x0, _0x1629c6 = 0x0, _0x3af152 = ![], _0x1d493a, _0xf90d37;
            _0x2206af['on'](_0x23e4e2(0x35c), () => {
                const _0x1ed80f = _0x23e4e2;
                _0x418980 = (window['innerWidth'] - _0x2206af[0x0][_0x1ed80f(0x2bc)]) / 0x2, _0x1629c6 = (window[_0x1ed80f(0x182)] - _0x2206af[0x0][_0x1ed80f(0x199)]) / 0x2, _0x11edec();
            }), _0x2206af['on']('dragstart\x20drop', _0x50ee75 => {
                _0x50ee75['preventDefault']();
            }), _0x2206af['on'](_0x23e4e2(0x380), _0x441de0 => {
                const _0x437dd8 = _0x23e4e2;
                _0x441de0[_0x437dd8(0x238)](), _0x441de0[_0x437dd8(0x16a)]();
            }), _0x2206af['on'](_0x23e4e2(0x1dd), _0x177fbd => {
                const _0x3609a7 = _0x23e4e2;
                _0x177fbd[_0x3609a7(0x238)](), _0x155a5e += _0x177fbd[_0x3609a7(0x24b)][_0x3609a7(0x28b)] > 0x0 ? -0.15 : 0.15, _0x155a5e = Math[_0x3609a7(0x32d)](Math['max'](0.75, _0x155a5e), 0x5), _0x11edec();
            }), _0x2206af['on']('mousedown', _0xdf1573 => {
                const _0x14608a = _0x23e4e2;
                _0x3af152 = !![], _0x1d493a = _0xdf1573[_0x14608a(0x354)] - _0x418980, _0xf90d37 = _0xdf1573['pageY'] - _0x1629c6, _0x2206af['css'](_0x14608a(0x2f5), _0x14608a(0x232));
            }), _0x2206af['on'](_0x23e4e2(0x254), () => {
                const _0xbaaa06 = _0x23e4e2;
                _0x3af152 = ![], _0x2206af[_0xbaaa06(0x2a7)](_0xbaaa06(0x2f5), _0xbaaa06(0x303));
            }), _0xf0822b(document)['on']('mousemove.igHelper', _0x3c997b => {
                const _0x571cb4 = _0x23e4e2;
                if (!_0x3af152)
                    return;
                _0x3c997b[_0x571cb4(0x238)](), _0x418980 = _0x3c997b[_0x571cb4(0x354)] - _0x1d493a, _0x1629c6 = _0x3c997b['pageY'] - _0xf90d37, _0x11edec();
            }), _0x45f412['on'](_0x23e4e2(0x380), () => {
                _0x2a3857();
            }), _0x12b506['on'](_0x23e4e2(0x380), () => {
                _0x2a3857();
            }), _0x591370['on'](_0x23e4e2(0x380), _0x24f3f8 => {
                const _0x38bb04 = _0x23e4e2;
                _0x24f3f8[_0x38bb04(0x238)](), _0x24f3f8[_0x38bb04(0x16a)]();
            });
            function _0x11edec() {
                const _0xbb55cf = _0x23e4e2;
                _0x2206af[_0xbb55cf(0x2a7)]('transform', _0xbb55cf(0x2fe) + _0x155a5e + ')'), _0x2206af[_0xbb55cf(0x2a7)](_0xbb55cf(0x177), _0x418980 + 'px'), _0x2206af['css'](_0xbb55cf(0x2f1), _0x1629c6 + 'px');
            }
        }
        function _0x2a3857() {
            const _0x34a8f4 = _0x51b01c;
            _0xf0822b('#imageViewer')[_0x34a8f4(0x309)](), _0xf0822b(document)['off']('mousemove.igHelper');
        }
        function _0x20a9f2() {
            const _0x15a1d5 = _0x51b01c;
            var _0x265917 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': 'Wololo!\x20New\x20version\x20released.',
                        'NOTICE_UPDATE_CONTENT': _0x15a1d5(0x140),
                        'CHECK_UPDATE': _0x15a1d5(0x36c),
                        'CHECK_UPDATE_MENU': _0x15a1d5(0x2a8),
                        'CHECK_UPDATE_INTRO': _0x15a1d5(0x250),
                        'RELOAD_SCRIPT': _0x15a1d5(0x1e1),
                        'DONATE': _0x15a1d5(0x25b),
                        'FEEDBACK': _0x15a1d5(0x324),
                        'IMAGE_VIEWER': 'Open\x20Image\x20In\x20Viewer',
                        'NEW_TAB': _0x15a1d5(0x312),
                        'SHOW_DOM_TREE': _0x15a1d5(0x282),
                        'SELECT_AND_COPY': _0x15a1d5(0x23c),
                        'DOWNLOAD_DOM_TREE': _0x15a1d5(0x332),
                        'REPORT_GITHUB': _0x15a1d5(0x114),
                        'REPORT_DISCORD': _0x15a1d5(0x148),
                        'REPORT_FORK': _0x15a1d5(0x261),
                        'DEBUG': 'Debug\x20Window',
                        'CLOSE': 'Close',
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0x15a1d5(0x2e6),
                        'BATCH_DOWNLOAD_DIRECT': _0x15a1d5(0x214),
                        'IMG': _0x15a1d5(0xf0),
                        'VID': _0x15a1d5(0x352),
                        'DW': _0x15a1d5(0x2df),
                        'DW_ALL': _0x15a1d5(0x214),
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x15a1d5(0x2fd),
                        'LOAD_BLOB_MULTIPLE': _0x15a1d5(0x170),
                        'LOAD_BLOB_RELOAD': _0x15a1d5(0x2ba),
                        'NO_CHECK_RESOURCE': _0x15a1d5(0x255),
                        'NO_VID_URL': _0x15a1d5(0x141),
                        'SETTING': _0x15a1d5(0x15a),
                        'AUTO_RENAME': _0x15a1d5(0xf5),
                        'RENAME_SHORTCODE': _0x15a1d5(0x30f),
                        'RENAME_PUBLISH_DATE': _0x15a1d5(0x106),
                        'RENAME_LOCATE_DATE': _0x15a1d5(0x284),
                        'DISABLE_VIDEO_LOOPING': _0x15a1d5(0x296),
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': 'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x15a1d5(0x2f3),
                        'DIRECT_DOWNLOAD_ALL': _0x15a1d5(0x1b0),
                        'MODIFY_VIDEO_VOLUME': 'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
                        'SCROLL_BUTTON': 'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
                        'FORCE_RESOURCE_VIA_MEDIA': _0x15a1d5(0x174),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x15a1d5(0x18e),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x15a1d5(0x1a2),
                        'AUTO_RENAME_INTRO': 'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': _0x15a1d5(0x360),
                        'RENAME_LOCATE_DATE_INTRO': _0x15a1d5(0x173),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x15a1d5(0x2dc),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x15a1d5(0x17d),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x15a1d5(0x1d4),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x15a1d5(0x28c),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x15a1d5(0x330),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x15a1d5(0x37f),
                        'MODIFY_VIDEO_VOLUME_INTRO': 'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
                        'SCROLL_BUTTON_INTRO': 'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x15a1d5(0x320),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': _0x15a1d5(0x319),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': _0x15a1d5(0x2ce),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x15a1d5(0x18b)
                    }
                }, _0x5916e3 = Object[_0x15a1d5(0x262)]({}, _0x265917, _0x550b30[_0x15a1d5(0x2de)]), _0xf8695f = Object[_0x15a1d5(0x2bb)](_0x5916e3)['sort']()[_0x15a1d5(0x237)]((_0x3a4e86, _0x3f6308) => {
                    return _0x3a4e86[_0x3f6308] = _0x5916e3[_0x3f6308], _0x3a4e86;
                }, {});
            return _0xf8695f;
        }
        async function _0x4e4d74(_0x32b86e) {
            return new Promise((_0x45e492, _0x4bc9e5) => {
                const _0x55eb74 = a0_0x1eaf;
                GM_xmlhttpRequest({
                    'method': _0x55eb74(0x346),
                    'url': _0x55eb74(0xfc) + _0x32b86e + _0x55eb74(0x2d6),
                    'onload': function (_0x4f3a84) {
                        const _0x2ac589 = _0x55eb74;
                        try {
                            let _0x5b89ef = JSON['parse'](_0x4f3a84[_0x2ac589(0x13c)]);
                            _0x45e492(_0x5b89ef);
                        } catch (_0x2e325d) {
                            _0x4bc9e5(_0x2e325d);
                        }
                    },
                    'onerror': function (_0x5e8917) {
                        _0x572202('getTranslationText()', 'reject', _0x5e8917), _0x4bc9e5(_0x5e8917);
                    }
                });
            });
        }
        function _0x84a48b(_0xc3318) {
            const _0x4b8634 = _0x51b01c, _0x2b9156 = _0x20a9f2();
            return _0x2b9156[_0x550b30[_0x4b8634(0x226)]] != undefined && _0x2b9156[_0x550b30['lang']][_0xc3318] != undefined ? _0x2b9156[_0x550b30[_0x4b8634(0x226)]][_0xc3318] : _0x2b9156[_0x4b8634(0x181)][_0xc3318];
        }
        function _0x3dc614() {
            const _0x4cc3df = _0x51b01c;
            _0xf0822b(_0x4cc3df(0x172))[_0x4cc3df(0x129)](function () {
                const _0x476473 = _0x4cc3df;
                _0xf0822b(this)[_0x476473(0x2bf)](_0x84a48b(_0xf0822b(this)[_0x476473(0x375)]('data-ih-locale')));
            }), _0xf0822b(_0x4cc3df(0x304))[_0x4cc3df(0x129)](function () {
                const _0xb0c889 = _0x4cc3df;
                _0xf0822b(this)[_0xb0c889(0x375)](_0xb0c889(0x283), _0x84a48b(_0xf0822b(this)[_0xb0c889(0x375)](_0xb0c889(0x2cb))));
            });
        }
        _0xf0822b(function () {
            const _0x1fc1cf = _0x51b01c;
            function _0x24d8be(_0x4833cd) {
                const _0x3751ca = a0_0x1eaf;
                var _0x5c8b16 = [];
                for (var _0x30d902 of _0x4833cd) {
                    _0x5c8b16[_0x3751ca(0x361)]({
                        'tagName': _0x30d902[_0x3751ca(0x153)],
                        'id': _0x30d902['id'],
                        'className': _0x30d902['className']
                    });
                }
                return _0x5c8b16;
            }
            function _0x42787f() {
                const _0x1a1134 = a0_0x1eaf;
                let _0x4bbc38 = _0xf0822b(_0x1a1134(0x22b))[0x0];
                var _0x41c99a = '';
                _0x550b30[_0x1a1134(0x211)][_0x1a1134(0x16c)](_0xd3a023 => {
                    const _0x39b62d = _0x1a1134;
                    var _0x333604 = JSON[_0x39b62d(0x11e)](_0xd3a023['content'], function (_0x3978de, _0x44cad5) {
                        const _0x390fee = _0x39b62d;
                        if (Array['isArray'](this)) {
                            if (typeof _0x44cad5 === _0x390fee(0x2a2) && _0x44cad5 instanceof jQuery)
                                return _0x24d8be(_0x44cad5);
                            return _0x44cad5;
                        } else
                            return _0x44cad5;
                    }, '\x09');
                    _0x41c99a += new Date(_0xd3a023['time'])['toISOString']() + ':\x20' + _0x333604 + '\x0a';
                }), _0xf0822b(_0x1a1134(0x105))['text'](_0x1a1134(0x33f) + _0x41c99a + _0x1a1134(0x31d) + location['pathname'] + _0x1a1134(0x16e) + _0x4bbc38[_0x1a1134(0x274)]);
            }
            _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), _0x1fc1cf(0x36f), function () {
                _0x42787f();
            }), _0xf0822b('body')['on']('click', _0x1fc1cf(0x2dd), function () {
                const _0x854512 = _0x1fc1cf;
                _0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')['select'](), document[_0x854512(0x345)]('copy');
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE', function () {
                const _0x48ab85 = _0x1fc1cf;
                _0xf0822b(_0x48ab85(0x105))[_0x48ab85(0x2bf)]()[_0x48ab85(0x2d4)] === 0x0 && _0x42787f();
                var _0x41de8c = _0xf0822b('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')['text'](), _0x1cdbb2 = document[_0x48ab85(0x243)]('a'), _0x496306 = new Blob([_0x41de8c], { 'type': _0x48ab85(0x37a) });
                _0x1cdbb2[_0x48ab85(0x38a)] = URL[_0x48ab85(0x2a0)](_0x496306), _0x1cdbb2[_0x48ab85(0x1ed)] = _0x48ab85(0x19b) + new Date()[_0x48ab85(0x27c)]() + '.txt', document[_0x48ab85(0x188)][_0x48ab85(0x22d)](_0x1cdbb2), _0x1cdbb2[_0x48ab85(0x380)](), _0x1cdbb2['remove']();
            }), _0xf0822b('body')['on'](_0x1fc1cf(0x380), _0x1fc1cf(0x1f2), function () {
                const _0x591a91 = _0x1fc1cf;
                _0xf0822b(this)[_0x591a91(0x198)](_0x591a91(0x1f3))[_0x591a91(0x2d4)] > 0x0 ? _0xf0822b(this)[_0x591a91(0x198)](_0x591a91(0x1f3))[_0x591a91(0x104)](0xfa, function () {
                    _0xf0822b(this)['remove']();
                }) : _0xf0822b(_0x591a91(0x253))[_0x591a91(0x309)]();
            }), _0xf0822b(window)['on'](_0x1fc1cf(0x14f), function (_0x2c30eb) {
                const _0x378827 = _0x1fc1cf;
                _0x2c30eb[_0x378827(0x189)] == '81' && _0x2c30eb[_0x378827(0x2c0)] && (_0xf0822b('.IG_POPUP_DIG')[_0x378827(0x309)](), _0x2c30eb[_0x378827(0x238)]()), _0x2c30eb['which'] == '87' && _0x2c30eb[_0x378827(0x2c0)] && (_0x4898c9(), _0x2c30eb[_0x378827(0x238)]()), _0x2c30eb['which'] == '90' && _0x2c30eb[_0x378827(0x2c0)] && (_0x20f6e7(), _0x2c30eb['preventDefault']()), _0x2c30eb[_0x378827(0x189)] == '82' && _0x2c30eb[_0x378827(0x2c0)] && (_0x49db91(), _0x2c30eb[_0x378827(0x238)]()), _0x2c30eb[_0x378827(0x189)] == '83' && _0x2c30eb[_0x378827(0x2c0)] && (location['href'][_0x378827(0x21d)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0xf0822b('.IG_DWSTORY')[_0x378827(0x2d4)] > 0x0 && _0xf0822b(_0x378827(0x2cd))?.[_0x378827(0x1a4)](_0x378827(0x380)), location[_0x378827(0x38a)][_0x378827(0x21d)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0xf0822b(_0x378827(0x315))[_0x378827(0x2d4)] > 0x0 && _0xf0822b(_0x378827(0x315))?.[_0x378827(0x1a4)](_0x378827(0x380)), _0x2c30eb[_0x378827(0x238)]());
            }), _0xf0822b('body')['on'](_0x1fc1cf(0x2ee), _0x1fc1cf(0x1bb), function () {
                const _0x4ef2b4 = _0x1fc1cf;
                var _0x3c0769 = _0xf0822b(this)[_0x4ef2b4(0x375)]('id');
                if (_0x3c0769 && _0x88bc73[_0x3c0769] !== undefined) {
                    let _0x19e61d = _0xf0822b(this)[_0x4ef2b4(0x350)](_0x4ef2b4(0x29a));
                    GM_setValue(_0x3c0769, _0x19e61d), _0x88bc73[_0x3c0769] = _0x19e61d, console[_0x4ef2b4(0x1e2)](_0x4ef2b4(0x2b3), _0x3c0769, _0x19e61d);
                }
            }), _0xf0822b(_0x1fc1cf(0x188))['on']('click', '.IG_POPUP_DIG\x20.globalSettings', function (_0x56e2dd) {
                const _0x31eff5 = _0x1fc1cf;
                _0xf0822b(this)[_0x31eff5(0x1e7)](_0x31eff5(0x1f3))[_0x31eff5(0x2d4)] > 0x0 && _0x56e2dd['preventDefault']();
            }), _0xf0822b(_0x1fc1cf(0x188))['on']('change', _0x1fc1cf(0x202), function () {
                const _0x290218 = _0x1fc1cf;
                let _0x288b7d = _0xf0822b(this)['val']();
                _0xf0822b(this)['attr'](_0x290218(0x201)) == _0x290218(0x151) ? _0xf0822b(this)['next']()[_0x290218(0x384)](_0x288b7d) : _0xf0822b(this)[_0x290218(0x2b5)]()[_0x290218(0x384)](_0x288b7d), _0x288b7d >= 0x0 && _0x288b7d <= 0x1 && (_0x550b30[_0x290218(0x160)] = _0x288b7d, GM_setValue('G_VIDEO_VOLUME', _0x288b7d));
            }), _0xf0822b('body')['on'](_0x1fc1cf(0x313), _0x1fc1cf(0x202), function () {
                const _0x1e2870 = _0x1fc1cf;
                if (_0xf0822b(this)[_0x1e2870(0x375)]('type') == 'range') {
                    let _0x371609 = _0xf0822b(this)[_0x1e2870(0x384)]();
                    _0xf0822b(this)['next']()[_0x1e2870(0x384)](_0x371609);
                } else {
                    let _0x1a5a6f = _0xf0822b(this)[_0x1e2870(0x384)]();
                    _0x1a5a6f >= 0x0 && _0x1a5a6f <= 0x1 ? _0xf0822b(this)[_0x1e2870(0x2b5)]()['val'](_0x1a5a6f) : _0x1a5a6f < 0x0 ? _0xf0822b(this)[_0x1e2870(0x384)](0x0) : _0xf0822b(this)[_0x1e2870(0x384)](0x1);
                }
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x313), _0x1fc1cf(0x31e), function () {
                const _0x14dea4 = _0x1fc1cf;
                GM_setValue(_0x14dea4(0x1c8), _0xf0822b(this)[_0x14dea4(0x384)]()), _0x550b30[_0x14dea4(0x2c3)] = _0xf0822b(this)[_0x14dea4(0x384)]();
            }), _0xf0822b('body')['on'](_0x1fc1cf(0x380), 'a[data-needed=\x22direct\x22]', function (_0x303dbd) {
                _0x303dbd['preventDefault'](), _0x10701b(this);
            }), _0xf0822b(_0x1fc1cf(0x188))['on']('click', _0x1fc1cf(0x221), function () {
                const _0x2c7793 = _0x1fc1cf;
                if (_0x88bc73['FORCE_RESOURCE_VIA_MEDIA'] && _0x88bc73[_0x2c7793(0x236)])
                    _0x10701b(_0xf0822b(this)[_0x2c7793(0x198)]()[_0x2c7793(0x1c0)]('a')['first']()[0x0], !![]);
                else {
                    var _0xeb0875 = new URL(_0xf0822b(this)[_0x2c7793(0x198)]()[_0x2c7793(0x1c0)]('a')[_0x2c7793(0x375)](_0x2c7793(0x32f)));
                    _0xeb0875[_0x2c7793(0xee)] = _0x2c7793(0x1a6), _0x55374a(_0xeb0875[_0x2c7793(0x38a)]);
                }
            }), _0xf0822b(_0x1fc1cf(0x188))['on']('click', _0x1fc1cf(0x280), function () {
                const _0x200c19 = _0x1fc1cf;
                let _0x4ab323 = new Date()[_0x200c19(0x27c)]();
                _0x88bc73[_0x200c19(0x21a)] && _0xf0822b(this)[_0x200c19(0x198)]()[_0x200c19(0x1c0)]('a')[_0x200c19(0x375)](_0x200c19(0x25d)) && (_0x4ab323 = _0xf0822b(this)[_0x200c19(0x198)]()['children']('a')[_0x200c19(0x375)]('datetime'));
                let _0xa1e577 = _0xf0822b(this)[_0x200c19(0x198)]()[_0x200c19(0x1c0)]('a')[_0x200c19(0x375)](_0x200c19(0x1de)) ?? _0xf0822b(_0x200c19(0x36a))[_0x200c19(0x2bf)]();
                _0x237545(_0xf0822b(this)[_0x200c19(0x198)]()[_0x200c19(0x1c0)]('a')[_0x200c19(0x1e7)](_0x200c19(0x358))['first']()[_0x200c19(0x375)](_0x200c19(0x2b2)), _0xf0822b(this)['parent']()['children']('a')[_0x200c19(0x375)]('data-username'), _0x200c19(0x301), _0x4ab323, _0x200c19(0x278), _0xa1e577);
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), _0x1fc1cf(0x2cd), function () {
                _0x5f59c7(!![]);
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), _0x1fc1cf(0x36b), function () {
                _0x2aa979();
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), _0x1fc1cf(0x30a), function (_0x5e6523) {
                const _0x414796 = _0x1fc1cf;
                _0x5e6523[_0x414796(0x238)](), _0x5f59c7(!![], !![], !![]);
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), '.IG_DWSTORY_THUMBNAIL', function () {
                _0x35e573(!![]);
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), '.IG_DWPROFILE', function (_0x55d16c) {
                const _0x5ea137 = _0x1fc1cf;
                _0x55d16c[_0x5ea137(0x16a)](), _0x3b7965(!![]);
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), _0x1fc1cf(0x315), function () {
                _0x3bc950(!![]);
            }), _0xf0822b('body')['on'](_0x1fc1cf(0x380), '.IG_DWHISTORY_ALL', function () {
                _0x2819b5();
            }), _0xf0822b(_0x1fc1cf(0x188))['on']('click', '.IG_DWHINEWTAB', function (_0x495c7e) {
                const _0x13dc04 = _0x1fc1cf;
                _0x495c7e[_0x13dc04(0x238)](), _0x3bc950(!![], !![]);
            }), _0xf0822b(_0x1fc1cf(0x188))['on']('click', _0x1fc1cf(0x337), function () {
                _0x418f7e(!![]);
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), _0x1fc1cf(0x1a0), function () {
                _0x1b4223(!![], !![]);
            }), _0xf0822b(_0x1fc1cf(0x188))['on']('click', _0x1fc1cf(0x31b), function () {
                _0x1b4223(!![], !![], !![]);
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), _0x1fc1cf(0x220), function () {
                _0x1b4223(!![], ![]);
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x1ff), _0x1fc1cf(0x111), function (_0x4fb9df) {
                const _0x4719bf = _0x1fc1cf;
                if (_0x4fb9df[_0x4719bf(0x189)] === 0x3 || _0x4fb9df[_0x4719bf(0x189)] === 0x2) {
                    if (location[_0x4719bf(0x38a)] === _0x4719bf(0x22f) && _0x88bc73[_0x4719bf(0x2d3)]) {
                        _0x4fb9df[_0x4719bf(0x238)]();
                        if (_0xf0822b(this)[_0x4719bf(0x1e7)](_0x4719bf(0x327))[_0x4719bf(0x2d4)] > 0x0) {
                            const _0x1a8d6e = _0x4719bf(0x22f) + _0xf0822b(this)[_0x4719bf(0x1c0)](_0x4719bf(0x1db))[_0x4719bf(0xed)]()['text']();
                            _0x4fb9df['which'] === 0x2 ? GM_openInTab(_0x1a8d6e) : location[_0x4719bf(0x38a)] = _0x1a8d6e;
                        }
                    }
                }
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x2ee), _0x1fc1cf(0x28d), function () {
                const _0x362e08 = _0x1fc1cf;
                var _0x213640 = _0xf0822b(this)[_0x362e08(0x1e7)](_0x362e08(0x313))[_0x362e08(0x350)]('checked');
                _0xf0822b(_0x362e08(0x367))[_0x362e08(0x129)](function () {
                    const _0x2e16df = _0x362e08;
                    _0xf0822b(this)[_0x2e16df(0x350)](_0x2e16df(0x29a), _0x213640);
                });
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x2ee), '.IG_POPUP_DIG_BODY\x20.inner_box', function () {
                const _0x1c3399 = _0x1fc1cf;
                var _0x7bd60 = _0xf0822b(_0x1c3399(0x115))['length'], _0xab04b3 = _0xf0822b(_0x1c3399(0x367))[_0x1c3399(0x2d4)];
                _0xf0822b(_0x1c3399(0x28d))[_0x1c3399(0x1e7)]('input')['prop'](_0x1c3399(0x29a), _0x7bd60 == _0xab04b3);
            }), _0xf0822b('body')['on']('click', _0x1fc1cf(0x19f), function () {
                const _0x506231 = _0x1fc1cf;
                let _0x148176 = 0x0;
                _0xf0822b('.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]')[_0x506231(0x129)](function () {
                    const _0x2d51d9 = _0x506231;
                    _0xf0822b(this)[_0x2d51d9(0x2b5)]()[_0x2d51d9(0x1c0)](_0x2d51d9(0x313))['prop'](_0x2d51d9(0x29a)) && (_0xf0822b(this)[_0x2d51d9(0x1a4)](_0x2d51d9(0x380)), _0x148176++);
                }), _0x148176 == 0x0 && alert(_0x84a48b(_0x506231(0x178)));
            }), _0xf0822b('body')['on'](_0x1fc1cf(0x2ee), _0x1fc1cf(0x29f), function () {
                const _0x2c2b4c = _0x1fc1cf;
                GM_setValue(_0x2c2b4c(0x226), _0xf0822b(this)[_0x2c2b4c(0x384)]()), _0x550b30['lang'] = _0xf0822b(this)[_0x2c2b4c(0x384)](), _0x550b30[_0x2c2b4c(0x226)]?.[_0x2c2b4c(0x1c1)]('en') || _0x550b30['locale'][_0x550b30[_0x2c2b4c(0x226)]] != null ? (_0x3dc614(), _0x1f1dc3()) : _0x4e4d74(_0x550b30[_0x2c2b4c(0x226)])[_0x2c2b4c(0x2b8)](_0x51cbca => {
                    const _0x1bc5be = _0x2c2b4c;
                    _0x550b30[_0x1bc5be(0x2de)][_0x550b30[_0x1bc5be(0x226)]] = _0x51cbca, _0x3dc614(), _0x1f1dc3();
                })[_0x2c2b4c(0xec)](_0xfa653f => {
                    const _0x336009 = _0x2c2b4c;
                    console[_0x336009(0x2d0)](_0x336009(0x1b9), _0xfa653f);
                });
            }), _0xf0822b(_0x1fc1cf(0x188))['on'](_0x1fc1cf(0x380), _0x1fc1cf(0x240), function () {
                const _0x5d6d8 = _0x1fc1cf;
                _0xf0822b(_0x5d6d8(0x1ce))[_0x5d6d8(0x129)](function () {
                    const _0x5100e7 = _0x5d6d8;
                    _0xf0822b(this)[_0x5100e7(0x1a4)](_0x5100e7(0x380));
                });
            });
            const _0xdb7201 = new MutationObserver(_0x2a943e => {
                const _0x41d985 = _0x1fc1cf;
                for (const _0x1fd984 of _0x2a943e) {
                    _0x1fd984['type'] === _0x41d985(0x14b) && _0x1fd984[_0x41d985(0x2ff)][_0x41d985(0x16c)](_0x2b507d => {
                        const _0x5317b4 = _0x41d985, _0x275a8c = _0xf0822b(_0x2b507d)['find']('video');
                        if (_0x275a8c[_0x5317b4(0x2d4)] > 0x0) {
                            _0x88bc73[_0x5317b4(0x123)] && _0x275a8c[_0x5317b4(0x129)](function () {
                                _0xf0822b(this)['on']('play\x20playing', function () {
                                    const _0x27f919 = a0_0x1eaf;
                                    !_0xf0822b(this)[_0x27f919(0x2ef)](_0x27f919(0x1f7)) && (_0xf0822b(this)['attr'](_0x27f919(0x1d0), !![]), this[_0x27f919(0x12c)] = _0x550b30['videoVolume'], _0x572202('(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify'));
                                });
                            });
                            if (location[_0x5317b4(0x10e)][_0x5317b4(0x21d)](/^(\/stories\/)/ig)) {
                                const _0x23fd0f = location[_0x5317b4(0x10e)][_0x5317b4(0x21d)](/^(\/stories\/highlights\/)/ig) != null, _0x5208bf = _0x23fd0f ? _0x5317b4(0x334) : 'story';
                                _0x275a8c[_0x5317b4(0x129)](function () {
                                    const _0x254a6b = _0x5317b4;
                                    _0xf0822b(this)['on'](_0x254a6b(0x13e), function () {
                                        const _0x2e111d = _0x254a6b;
                                        if (!_0xf0822b(this)['data'](_0x2e111d(0x166))) {
                                            let _0x308262 = _0xf0822b(this);
                                            _0x308262['parents']('div[style][class]')[_0x2e111d(0x25e)](function () {
                                                const _0x5860a3 = _0x2e111d;
                                                return _0xf0822b(this)[_0x5860a3(0x2bc)]() == _0x308262[_0x5860a3(0x2bc)]();
                                            })[_0x2e111d(0x1e7)](_0x2e111d(0x36e))[_0x2e111d(0x2d4)] === 0x0 ? (_0xf0822b(this)[_0x2e111d(0x375)](_0x2e111d(0x290), !![]), _0x23fd0f ? _0x418f7e(![]) : _0x35e573(![]), _0x572202('(' + _0x5208bf + ')', _0x2e111d(0x100))) : (_0xf0822b(this)['attr'](_0x2e111d(0x290), !![]), _0x572202('(' + _0x5208bf + ')', _0x2e111d(0x157)));
                                        }
                                    });
                                    var _0x4ae5e8 = _0xf0822b(this);
                                    if (_0x88bc73[_0x254a6b(0x260)]) {
                                        if (!_0x4ae5e8[_0x254a6b(0x2ef)]('controls')) {
                                            _0x572202('(' + _0x5208bf + ')', _0x254a6b(0x12f));
                                            _0x88bc73[_0x254a6b(0x123)] && (this[_0x254a6b(0x12c)] = _0x550b30['videoVolume'], _0x4ae5e8['on']('loadstart', function () {
                                                const _0x7a69f5 = _0x254a6b;
                                                this[_0x7a69f5(0x12c)] = _0x550b30['videoVolume'];
                                            }));
                                            let _0x21bf4c = _0x4ae5e8[_0x254a6b(0x347)](_0x254a6b(0x1db))[_0x254a6b(0x25e)](function () {
                                                    const _0x3b82e2 = _0x254a6b;
                                                    return _0xf0822b(this)['attr']('class') == null && _0xf0822b(this)[_0x3b82e2(0x375)](_0x3b82e2(0x35b)) == null;
                                                })['first'](), _0x5b9ad1 = _0x21bf4c[_0x254a6b(0x37b)]();
                                            _0x5b9ad1[_0x254a6b(0x227)]();
                                            let _0x4a1f4b = _0x21bf4c[_0x254a6b(0x1e7)](_0x254a6b(0x217));
                                            _0x4a1f4b['hide']();
                                            const _0xcb5a0b = function (_0x19dcbc) {
                                                const _0x15ef1b = _0x254a6b;
                                                _0x19dcbc['preventDefault'](), _0x4ae5e8[_0x15ef1b(0x2a7)](_0x15ef1b(0xf8), '2'), _0x4ae5e8['attr'](_0x15ef1b(0x340), !![]), _0x4a1f4b[_0x15ef1b(0x227)](), _0x5b9ad1[_0x15ef1b(0x227)](), _0x2e4efd(_0x4ae5e8, _0x4ae5e8['parents'](_0x15ef1b(0x357))[_0x15ef1b(0x25e)](function () {
                                                    const _0x219c31 = _0x15ef1b;
                                                    return _0xf0822b(this)[_0x219c31(0x2bc)]() == _0x4ae5e8[_0x219c31(0x2bc)]();
                                                })[_0x15ef1b(0x35f)](), _0x5208bf, _0x15ef1b(0x341));
                                            };
                                            _0x4ae5e8[_0x254a6b(0x198)]()[_0x254a6b(0x1e7)](_0x254a6b(0x252))['on'](_0x254a6b(0x1fb), _0xcb5a0b), _0x4a1f4b['on'](_0x254a6b(0x1fb), _0xcb5a0b), _0x5b9ad1['on'](_0x254a6b(0x1fb), _0xcb5a0b), _0x4ae5e8['on']('contextmenu', function (_0xdd6ec4) {
                                                const _0x350dee = _0x254a6b;
                                                _0xdd6ec4[_0x350dee(0x238)](), _0x4ae5e8[_0x350dee(0x2a7)]('z-index', '-1'), _0x4ae5e8[_0x350dee(0x23a)](_0x350dee(0x340)), _0x5b9ad1[_0x350dee(0x21b)](), _0x4a1f4b[_0x350dee(0x21b)](), _0x2e4efd(_0x4ae5e8, _0x4ae5e8[_0x350dee(0x347)](_0x350dee(0x357))[_0x350dee(0x25e)](function () {
                                                    const _0x2dbac1 = _0x350dee;
                                                    return _0xf0822b(this)[_0x2dbac1(0x2bc)]() == _0x4ae5e8['width']();
                                                })['first'](), _0x5208bf, _0x350dee(0x341));
                                            }), _0x4ae5e8['on']('volumechange', function () {
                                                const _0x44ebde = _0x254a6b;
                                                let _0x35eb57 = _0x21bf4c['parent']()[_0x44ebde(0x1e7)](_0x44ebde(0x20b))[_0x44ebde(0x347)](_0x44ebde(0x37c))[_0x44ebde(0x35f)]();
                                                var _0x99c7ed = _0x35eb57[_0x44ebde(0x1e7)](_0x44ebde(0x38b))[_0x44ebde(0x2d4)] === 0x0;
                                                this[_0x44ebde(0x101)] != _0x99c7ed && (this[_0x44ebde(0x12c)] = _0x550b30[_0x44ebde(0x160)], _0x35eb57?.[_0x44ebde(0x1a4)]('click')), _0xf0822b(this)[_0x44ebde(0x375)]('data-completed') && (_0x550b30[_0x44ebde(0x160)] = this[_0x44ebde(0x12c)], GM_setValue(_0x44ebde(0x19d), this[_0x44ebde(0x12c)])), this[_0x44ebde(0x12c)] == _0x550b30[_0x44ebde(0x160)] && _0xf0822b(this)['attr'](_0x44ebde(0x356), !![]);
                                            }), _0x4ae5e8[_0x254a6b(0x2a7)](_0x254a6b(0x1d1), _0x254a6b(0x124)), _0x4ae5e8[_0x254a6b(0x2a7)](_0x254a6b(0xf8), '2'), _0x4ae5e8['attr'](_0x254a6b(0x29b), !![]), _0x4ae5e8['attr']('controls', !![]);
                                        }
                                    } else
                                        _0x2e4efd(_0x4ae5e8, _0x4ae5e8[_0x254a6b(0x347)]('div[style][class]')[_0x254a6b(0x25e)](function () {
                                            const _0x26d415 = _0x254a6b;
                                            return _0xf0822b(this)[_0x26d415(0x2bc)]() == _0x4ae5e8[_0x26d415(0x2bc)]();
                                        })[_0x254a6b(0x35f)](), _0x5208bf, 'vertical');
                                });
                            }
                        }
                    });
                }
            });
            _0xdb7201[_0x1fc1cf(0x197)](_0xf0822b('div[id^=\x22mount\x22]')[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x1eaf(_0x3332cd, _0x234ccc) {
    const _0x4be0dc = a0_0x4be0();
    return a0_0x1eaf = function (_0x1eafb5, _0x17675b) {
        _0x1eafb5 = _0x1eafb5 - 0xec;
        let _0xf01790 = _0x4be0dc[_0x1eafb5];
        return _0xf01790;
    }, a0_0x1eaf(_0x3332cd, _0x234ccc);
}
function a0_0x4be0() {
    const _0x79ad35 = [
        'https://www.instagram.com/p/',
        'Download\x20All\x20Resources',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'version',
        'div[class][role=\x22button\x22]',
        '510tZVNvd',
        '5632pWdEZB',
        'RENAME_PUBLISH_DATE',
        'show',
        'updatenotification',
        'match',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        '.IG_REELS_THUMBNAIL',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'undefined\x20username',
        '.IG_DW_ALL_MAIN',
        '#_SNLOAD',
        'li._acaz',
        'lang',
        'hide',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'downloadURL',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'div[id^=\x22mount\x22]',
        'substr',
        'appendChild',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'https://www.instagram.com/',
        '\x22\x20/>',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'grabbing',
        'hostname',
        'before',
        'disconnect',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'reduce',
        'preventDefault',
        '_ac3q',
        'removeAttr',
        '\x22\x20data-globalIndex=\x22',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'setAttribute',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        'regenerated',
        '\x22\x20class=\x22IG_REELS\x22>',
        'createElement',
        'stp',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'https://i.instagram.com/api/v1/media/',
        '[data-snig]',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'SELECT_AND_COPY',
        '1SwFBnW',
        'originalEvent',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20</div>',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'scrollBy',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'video\x20+\x20div',
        '.IG_POPUP_DIG',
        'mouseup',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        '37px',
        '.IG_POPUP_DIG\x20#post_info',
        'firstStarted',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'image_versions2',
        'Donate',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'datetime',
        'filter',
        'faild',
        'HTML5_VIDEO_CONTROL',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'assign',
        'language',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'currentURL',
        '#imageViewer',
        'shortcode',
        'FEEDBACK',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'div:last-child',
        '\x22\x20/></div>',
        'searchParams',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'items',
        'Main\x20Timer',
        'innerHTML',
        '#iv_close',
        'floor',
        'padStart',
        'jpg',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '<a\x20media-id=\x22',
        'getTime',
        'mouseenter',
        'reject',
        'IMG',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        '.IG_NEWTAB_MAIN',
        'Show\x20DOM\x20Tree',
        'title',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'undefined',
        'highlights',
        'append',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'Can\x20not\x20find\x20download\x20url.',
        'deltaY',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'svg',
        'toUpperCase',
        'data-modify-thumbnail',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'node',
        'padEnd',
        '<div></div>',
        'Disable\x20Video\x20Auto-looping',
        'data-snig',
        'tempFetchRateLimit',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'checked',
        'data-controls',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        '<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        'createObjectURL',
        'GL_dataCache',
        'object',
        'REPORT_DISCORD',
        'media-id',
        'getMinutes',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'css',
        'Checking\x20for\x20Updates',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'G_CHECK_TIMESTAMP',
        '</span>\x20',
        'article',
        '</div>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        '\x20-</a>',
        'body\x20>\x20div\x20section._ac0a',
        'src',
        'user\x20settings',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'prev',
        'ended',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'then',
        'NONE',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'keys',
        'width',
        'matchAll',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'text',
        'altKey',
        '.IG_THUMBNAIL_MAIN',
        'toLowerCase',
        'fileRenameFormat',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'candidates',
        'isIntersecting',
        '__typename',
        'NEW_TAB',
        'data-ih-locale-title',
        'x1iyjqo2',
        '.IG_DWSTORY',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        'shortcode_media',
        'error',
        '<p\x20id=\x22_SNLOAD\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'length',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '.json',
        'THUMBNAIL',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'Preference\x20Settings',
        '.IG_DWSTORY_THUMBNAIL',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'locale',
        'Download',
        'feedback_message',
        '\x22\x20datetime=\x22',
        'isHighlightsStory',
        'stories',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'SCROLL_BUTTON',
        'Download\x20Selected\x20Resources',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'FORCE_RESOURCE_VIA_MEDIA',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'flex',
        'trigging',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        'change',
        'data',
        '\x20child',
        'top',
        'userAgent',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'cursor',
        'ig_helper_notice',
        'user',
        'getHighlightStories()',
        'close',
        'after',
        'getBlobMediaWithQuery()',
        '</a></button><br/>',
        'Loading\x20Blob\x20Media...',
        'scale(',
        'addedNodes',
        '<option\x20value=\x22',
        'thumbnail',
        'owner',
        'grab',
        '[data-ih-locale-title]',
        'getUserHighSizeProfile()',
        'navigator',
        'a[href^=\x22/\x22]',
        'body\x20>\x20div\x20section:visible._ac0a',
        'remove',
        '.IG_DWNEWTAB',
        'https://ko-fi.com/snkoarashi',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'x1lix1fw',
        'Found\x20post\x20container',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '<label\x20class=\x22globalSettings',
        'Open\x20in\x20New\x20Tab',
        'input',
        'fail',
        '.IG_DWHISTORY',
        'x1s85apg',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
        '._acay\x20+\x20.x24i39r',
        '.IG_REELS_NEWTAB',
        'includes',
        '\x0a-----\x0a\x0aLocation:\x20',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        '</a></button>',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'GL_repeat',
        'Feedback',
        'LOAD_BLOB_MULTIPLE',
        'video_versions',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'NOTICE_UPDATE_CONTENT',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'replace',
        'min',
        'Feedback\x20Options',
        'data-href',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'div[role=\x22presentation\x22]',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        '</p>',
        'highlight',
        'div#scrollview',
        'DOWNLOAD',
        '.IG_DWHISTORY_THUMBNAIL',
        '/accounts/login',
        'getSeconds',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        'getHours',
        'relative',
        'split',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'Logger:\x0a',
        'controls',
        'vertical',
        '_INTRO',
        'toISOString',
        'GL_observer',
        'execCommand',
        'GET',
        'parents',
        'html',
        'addClass',
        'target',
        '#iv_header',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        '.button_wrapper',
        '%22}',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'prop',
        '.circle_wrapper\x20span',
        'Video',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'pageX',
        '4110216BXBxXD',
        'data-completed',
        'div[style][class]',
        'img',
        'userLanguage',
        'data-username',
        'style',
        'load',
        'getBlobMediaWithQueryID()',
        'getMediaInfo()',
        'first',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'push',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'video',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'wrap',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'Current\x20version:\x20',
        'xdt_api__v1__media__shortcode__web_info',
        '#article-id',
        '.IG_DWSTORY_ALL',
        'Checking\x20for\x20Script\x20Updates',
        'ALL_CHECK',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'div.volume_slider\x20input',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '6844100oYqMMN',
        'reels_media',
        'attr',
        'responseText',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        'textContent',
        'text/plain',
        'next',
        '[role=\x22button\x22]',
        'carousel_media:\x20undefined\x20username',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'click',
        '<input\x20value=\x22',
        'getMonth',
        '.IG_DWHISTORY_ALL',
        'val',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        '<a\x20datetime=\x22',
        '.circle_wrapper',
        'hidden',
        'href',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'section\x20>\x20main[role=\x22main\x22]',
        '--ig-track-progress:\x20',
        'catch',
        'last',
        'host',
        'div.volume_slider',
        'Image',
        'isReels',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '\x22\x20title=\x22',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'taken_at_timestamp',
        'play\x20playing',
        'z-index',
        'AUTO_RENAME',
        '</button>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'video\x20volume\x20changed\x20#slider',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'hasReferrer',
        'Manually\x20inserting\x20thumbnail\x20button',
        'muted',
        'carousel_media',
        '*/*',
        'fadeOut',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'GL_referrer',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'GraphVideo',
        '.IG_DWHINEWTAB',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'status',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'pathname',
        'IG\x20Debug\x20DOM\x20Tree',
        '227862HiiJBC',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'post',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        '_blank',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        '_acnb',
        'isProfile',
        'hasClass',
        'script',
        'config_width',
        'stringify',
        'mp4',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '</span></label>',
        '1770462cuFnOv',
        'MODIFY_VIDEO_VOLUME',
        'absolute',
        'hd_profile_pic_url_info',
        'display_url',
        'trim',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'each',
        'name',
        'parse',
        'volume',
        'onReadyMyDW()\x20Timer',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'Found\x20insert\x20point',
        'smooth',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'getStories()',
        'display',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'boolean',
        '50351NPOgTq',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'video_url',
        'srcset',
        'response',
        'sort',
        'timeupdate',
        'message',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'Cannot\x20find\x20video\x20URL.',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'removeClass',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'bottom',
        'toString',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '40TjjVHD',
        'childList',
        'video[class]',
        'loop',
        'isStory',
        'keydown',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'range',
        'GL_registerEventList',
        'tagName',
        'get',
        'getFullYear',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'Thumbnail\x20button\x20already\x20inserted',
        'DW_ALL',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'Settings',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        '#scrollWrapper',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'getUserId()',
        'videoVolume',
        'video_resources',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        'GL_postPath',
        'video\x20+\x20div\x20>\x20div',
        'INTERNAL_CSS',
        'modify-thumbnail',
        '#iv_image',
        'carousel_media:',
        'DONATE',
        'stopPropagation',
        'BATCH_DOWNLOAD_DIRECT',
        'forEach',
        'pageLoaded',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        '[data-ih-locale]',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'GraphSidecar',
        '._aagv\x20img',
        'left',
        'NO_CHECK_RESOURCE',
        'DIRECT_DOWNLOAD_ALL',
        'main\x20timer\x20re-register\x20completed',
        'display_resources',
        '.videoThumbnail',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'a[href^=\x22/p/\x22]',
        'query_hash',
        'code',
        'en-US',
        'innerHeight',
        'getPostOwner()',
        'data-name',
        'data-remove-thumbnail',
        'getUserIdWithAgent()',
        'FORCE_FETCH_ALL_RESOURCES',
        'body',
        'which',
        'volumechange',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'pause',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'div\x20>\x20ul\x20li._acaz',
        'CHECK_UPDATE_MENU',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        'div#splash-screen',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'Request\x20with:',
        'NOPATH',
        '\x22\x20class=\x22newTab\x22>',
        'observe',
        'parent',
        'height',
        '_acnf',
        'DOMTree-',
        'url',
        'G_VIDEO_VOLUME',
        'Fetch\x20from\x20memory\x20cache:',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        '.IG_REELS',
        '</span>\x20<input\x20id=\x22',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        '\x22\x20data-ih-locale-title=\x22',
        'trigger',
        'GL_username',
        'scontent.cdninstagram.com',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'div:not([class]):not([style])',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'DOWNLOAD_ALL',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        'VID',
        'REPORT_GITHUB',
        'label',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'profile_pic_url',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'ig_cache_key',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'CLOSE',
        'GraphImage',
        'getTranslationText\x20catch\x20error:',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        '.IG_POPUP_DIG\x20input',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        ':hidden',
        '<div\x20class=\x22volume_slider\x20',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'children',
        'startsWith',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'data-loop',
        'Remote\x20version:\x20',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'https://i.instagram.com/api/v1/users/',
        'G_RENAME_FORMAT',
        'avatar',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        'SKIP_VIEW_STORY_CONFIRM',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '1074pUDoPL',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        'data-modify',
        'position',
        'img[referrerpolicy]',
        'LOAD_BLOB_RELOAD',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'reel',
        'SHOW_DOM_TREE',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'Script\x20Loaded',
        'script[type=\x22application/json\x22]',
        'map',
        'div',
        '0px',
        'wheel',
        'data-path',
        '20000',
        'taken_at',
        'Reload\x20Script',
        'log',
        '.IG_IMAGE_VIEWER',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'DEBUG',
        '._acay',
        'find',
        'slice',
        'DOWNLOAD_DOM_TREE',
        'username',
        'data-type',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        'download',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'THUMBNAIL_INTRO',
        'isHomepage',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        '#tempWrapper',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        '.IG_DW_MAIN',
        'reels',
        'modify',
        '5714673bwbbbo',
        'getBlobMedia()',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'contextmenu',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'instagram.com/reels/',
        'DISABLE_VIDEO_LOOPING',
        'mousedown',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'type',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'registerMenuIds',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '._acay\x20._acaz',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'Cannot\x20find\x20resource\x20url.',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        '</a>',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        '/info/',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'finalUrl',
        'blob',
        'DIV',
        'GL_logger',
        'https://www.instagram.com/reels/'
    ];
    a0_0x4be0 = function () {
        return _0x79ad35;
    };
    return a0_0x4be0();
}