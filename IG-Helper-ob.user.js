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

(function (_0x15d035, _0x2c4ae5) {
    const _0x3aadcd = a0_0x47e8, _0x541777 = _0x15d035();
    while (!![]) {
        try {
            const _0x34719c = parseInt(_0x3aadcd(0x294)) / 0x1 + parseInt(_0x3aadcd(0x377)) / 0x2 * (-parseInt(_0x3aadcd(0x385)) / 0x3) + -parseInt(_0x3aadcd(0x2ce)) / 0x4 * (parseInt(_0x3aadcd(0x100)) / 0x5) + -parseInt(_0x3aadcd(0x2f5)) / 0x6 * (parseInt(_0x3aadcd(0x155)) / 0x7) + -parseInt(_0x3aadcd(0x2ed)) / 0x8 * (-parseInt(_0x3aadcd(0x1c4)) / 0x9) + -parseInt(_0x3aadcd(0x35e)) / 0xa * (-parseInt(_0x3aadcd(0x25c)) / 0xb) + -parseInt(_0x3aadcd(0x37e)) / 0xc * (-parseInt(_0x3aadcd(0x145)) / 0xd);
            if (_0x34719c === _0x2c4ae5)
                break;
            else
                _0x541777['push'](_0x541777['shift']());
        } catch (_0x488d00) {
            _0x541777['push'](_0x541777['shift']());
        }
    }
}(a0_0x432e, 0x421fa), function (_0x2283e9) {
    setTimeout(() => {
        'use strict';
        const _0x1154df = a0_0x47e8;
        const _0xacfdce = {
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
            }, _0x27493b = [
                'RENAME_PUBLISH_DATE',
                _0x1154df(0x31c),
                _0x1154df(0x1d6)
            ], _0x549145 = {
                'DOWNLOAD': _0x1154df(0x23e),
                'NEW_TAB': _0x1154df(0x1ed),
                'THUMBNAIL': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
                'DOWNLOAD_ALL': _0x1154df(0x254),
                'CLOSE': _0x1154df(0x3a7),
                'FULLSCREEN': _0x1154df(0x324),
                'TURN_DEG': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#1f1f1f\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7.34\x206.41L.86\x2012.9l6.49\x206.48\x206.49-6.48-6.5-6.49zM3.69\x2012.9l3.66-3.66L11\x2012.9l-3.66\x203.66-3.65-3.66zm15.67-6.26C17.61\x204.88\x2015.3\x204\x2013\x204V.76L8.76\x205\x2013\x209.24V6c1.79\x200\x203.58.68\x204.95\x202.05\x202.73\x202.73\x202.73\x207.17\x200\x209.9C16.58\x2019.32\x2014.79\x2020\x2013\x2020c-.97\x200-1.94-.21-2.84-.61l-1.49\x201.49C10.02\x2021.62\x2011.51\x2022\x2013\x2022c2.3\x200\x204.61-.88\x206.36-2.64\x203.52-3.51\x203.52-9.21\x200-12.72z\x22/></svg>'
            }, _0x25b24f = 0xfa, _0x1b8e89 = GM_getResourceText(_0x1154df(0x389)), _0x2d55b8 = JSON[_0x1154df(0x1ff)](GM_getResourceText(_0x1154df(0x173)));
        var _0x33d3f7 = {
            'videoVolume': GM_getValue(_0x1154df(0x384)) ? GM_getValue('G_VIDEO_VOLUME') : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue('G_RENAME_FORMAT') ? GM_getValue(_0x1154df(0x3b2)) : _0x1154df(0x2b1),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x1154df(0x135)) || navigator[_0x1154df(0x137)] || navigator[_0x1154df(0x346)],
            'currentURL': location[_0x1154df(0x151)],
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
                _0x2b6d14();
            })
        };
        _0x455da2(), GM_addStyle(_0x1b8e89), _0x4ec107(), _0x10d6a2(_0x33d3f7[_0x1154df(0x135)])['then'](_0x18db64 => {
            const _0x341d65 = _0x1154df;
            _0x33d3f7[_0x341d65(0x325)][_0x33d3f7['lang']] = _0x18db64, _0x582092(), _0x4ec107(), _0x250f39(0x12c);
        })[_0x1154df(0x28c)](_0x28bb0 => {
            const _0x5cb3d7 = _0x1154df;
            _0x4ec107(), _0x250f39(0x12c), !_0x33d3f7[_0x5cb3d7(0x135)][_0x5cb3d7(0x374)]('en') && console[_0x5cb3d7(0x29d)](_0x5cb3d7(0x327), _0x28bb0);
        }), _0x32f9d0(_0x1154df(0x2b5), GM_info['script'][_0x1154df(0x1fc)], _0x1154df(0x1c2), GM_info[_0x1154df(0x2ba)][_0x1154df(0x2de)]);
        var _0x46a3ff = setInterval(function () {
            const _0x45759e = _0x1154df;
            if (_0x2283e9(_0x45759e(0x3ac))[_0x45759e(0x2d2)] > 0x0 && !_0x2283e9(_0x45759e(0x3ac))['is'](_0x45759e(0x22d)) || location['pathname'][_0x45759e(0x353)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x45759e(0x266)][_0x45759e(0x374)](_0x45759e(0x120)) || (location['pathname'][_0x45759e(0x39c)](_0x45759e(0x1a3)) || location['pathname'][_0x45759e(0x39c)](_0x45759e(0x236))) && _0x2283e9('body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]')[_0x45759e(0x2d2)] > 0x0) {
                _0x33d3f7[_0x45759e(0x2c6)] = ![];
                return;
            }
            if (_0x33d3f7[_0x45759e(0x1fd)] != location[_0x45759e(0x151)] || !_0x33d3f7[_0x45759e(0x1a1)] || !_0x33d3f7[_0x45759e(0x2c6)]) {
                console[_0x45759e(0x25b)]('Main\x20Timer', _0x45759e(0x139)), clearInterval(_0x33d3f7[_0x45759e(0x2b4)]), _0x33d3f7[_0x45759e(0x2c6)] = ![], _0x33d3f7['firstStarted'] = !![], _0x33d3f7['currentURL'] = location[_0x45759e(0x151)], _0x33d3f7[_0x45759e(0x1a0)][_0x45759e(0x36b)]();
                if (location[_0x45759e(0x151)][_0x45759e(0x374)](_0x45759e(0x147)) || location['pathname']['match'](/^\/(.*?)\/(p|reel)\//ig) || location['href']['startsWith'](_0x45759e(0x133))) {
                    _0x33d3f7[_0x45759e(0x29f)][_0x45759e(0x191)] = {}, _0x33d3f7[_0x45759e(0x29f)][_0x45759e(0x1ec)] = {}, _0x32f9d0(_0x45759e(0x18c));
                    var _0x3f7245 = setInterval(() => {
                        const _0x4a888f = _0x45759e;
                        _0x2283e9(_0x4a888f(0x1f9))[_0x4a888f(0x2d2)] > 0x0 && (clearInterval(_0x3f7245), setTimeout(() => {
                            _0x2b6d14(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x33d3f7[_0x45759e(0x2c6)] = !![];
                }
                location[_0x45759e(0x151)][_0x45759e(0x374)]('https://www.instagram.com/reels/') && (_0x32f9d0(_0x45759e(0x263)), setTimeout(() => {
                    _0x50fb08(![]);
                }, 0x96), _0x33d3f7[_0x45759e(0x2c6)] = !![]);
                if (location[_0x45759e(0x151)]['split']('?')[0x0] == _0x45759e(0x27c)) {
                    _0x33d3f7[_0x45759e(0x29f)][_0x45759e(0x191)] = {}, _0x33d3f7[_0x45759e(0x29f)][_0x45759e(0x1ec)] = {};
                    let _0x4fcbdd = _0x33d3f7[_0x45759e(0x372)]?.['match'](/^\/(stories|highlights)\//ig) != null;
                    _0x32f9d0(_0x45759e(0x1bd), _0x4fcbdd), setTimeout(() => {
                        const _0x4f16a0 = _0x45759e;
                        _0x2b6d14(![], _0x4fcbdd);
                        const _0x34c896 = _0x2283e9(_0x4f16a0(0x2c5))?.[_0x4f16a0(0x3c1)]()[0x0];
                        _0x34c896 && _0x33d3f7[_0x4f16a0(0x1a0)]['observe'](_0x34c896, { 'childList': !![] });
                    }, 0x96), _0x33d3f7[_0x45759e(0x2c6)] = !![];
                }
                _0x2283e9('header\x20>\x20*[class]:first-child\x20img[alt]')[_0x45759e(0x2d2)] && location[_0x45759e(0x2bc)][_0x45759e(0x353)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname']['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x32f9d0(_0x45759e(0x164)), setTimeout(() => {
                    _0x546396(![]);
                }, 0x96), _0x33d3f7[_0x45759e(0x2c6)] = !![]);
                if (!_0x33d3f7[_0x45759e(0x2c6)]) {
                    if (location[_0x45759e(0x151)][_0x45759e(0x353)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x33d3f7[_0x45759e(0x29f)]['highlights'] = {}, _0x32f9d0(_0x45759e(0x36e)), _0x3769b8(![]), _0x33d3f7['GL_repeat'] = setInterval(() => {
                            _0x5ce9c1(![]);
                        }, _0x25b24f), _0x2283e9(_0x45759e(0x1c5))[_0x45759e(0x2d2)] && setTimeout(() => {
                            const _0x1c4a67 = _0x45759e;
                            if (_0xacfdce[_0x1c4a67(0x2df)]) {
                                var _0x58544e = _0x2283e9(_0x1c4a67(0xf8))[_0x1c4a67(0x1eb)](function () {
                                    const _0x1532a7 = _0x1c4a67;
                                    return _0x2283e9(this)[_0x1532a7(0x178)]()[_0x1532a7(0x2d2)] === 0x0 && this['textContent'][_0x1532a7(0x3ad)]() !== '';
                                });
                                _0x58544e?.[_0x1c4a67(0x1b4)](_0x1c4a67(0x1b5));
                            }
                            _0x33d3f7[_0x1c4a67(0x2c6)] = !![];
                        }, 0x96);
                    else
                        location[_0x45759e(0x151)][_0x45759e(0x353)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x32f9d0('isStory'), _0x2283e9(_0x45759e(0x28f))[_0x45759e(0x2d2)] > 0x0 && (_0x2283e9(_0x45759e(0x1e6))['remove'](), _0x2283e9('.IG_DWNEWTAB')[_0x45759e(0x197)](), _0x2283e9(_0x45759e(0x10b))[_0x45759e(0x2d2)] && _0x2283e9(_0x45759e(0x10b))[_0x45759e(0x197)](), _0x1ccfdd(![]), setTimeout(() => {
                            _0x1ccfdd(![]);
                        }, 0x96)), _0x2283e9(_0x45759e(0x1e6))['length'] && setTimeout(() => {
                            const _0x219225 = _0x45759e;
                            if (_0xacfdce['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x2f70d8 = _0x2283e9(_0x219225(0xf8))[_0x219225(0x1eb)](function () {
                                    const _0x528b2d = _0x219225;
                                    return _0x2283e9(this)['children']()[_0x528b2d(0x2d2)] === 0x0 && this[_0x528b2d(0x3aa)]['trim']() !== '';
                                });
                                _0x2f70d8?.[_0x219225(0x1b5)]();
                            }
                            _0x33d3f7[_0x219225(0x2c6)] = !![];
                        }, 0x96)) : (_0x33d3f7[_0x45759e(0x2c6)] = ![], _0x2283e9(_0x45759e(0x1e6))[_0x45759e(0x2d2)] && _0x2283e9(_0x45759e(0x1e6))['remove'](), _0x2283e9(_0x45759e(0x247))[_0x45759e(0x2d2)] && _0x2283e9(_0x45759e(0x247))[_0x45759e(0x197)](), _0x2283e9(_0x45759e(0x19d))['length'] && _0x2283e9(_0x45759e(0x19d))[_0x45759e(0x197)](), _0x2283e9(_0x45759e(0x10b))[_0x45759e(0x2d2)] && _0x2283e9(_0x45759e(0x10b))[_0x45759e(0x197)](), _0x2283e9(_0x45759e(0x1c5))['length'] && _0x2283e9(_0x45759e(0x1c5))[_0x45759e(0x197)](), _0x2283e9(_0x45759e(0x264))[_0x45759e(0x2d2)] && _0x2283e9(_0x45759e(0x264))['remove'](), _0x2283e9(_0x45759e(0x354))[_0x45759e(0x2d2)] && _0x2283e9('.IG_DWHINEWTAB')[_0x45759e(0x197)](), _0x2283e9('.IG_DWHISTORY_THUMBNAIL')[_0x45759e(0x2d2)] && _0x2283e9(_0x45759e(0x28e))[_0x45759e(0x197)]());
                }
                _0x250f39(0x12c), _0x33d3f7[_0x45759e(0x372)] = new URL(location[_0x45759e(0x151)])[_0x45759e(0x2bc)];
            }
        }, _0x25b24f);
        async function _0xdee940() {
            const _0x4882f7 = _0x1154df;
            _0x5502da(!![]);
            let _0x3eb370 = new Date()[_0x4882f7(0x10c)](), _0x20bee3 = Math[_0x4882f7(0x33c)](_0x3eb370 / 0x3e8), _0x29f6cc = location[_0x4882f7(0x151)][_0x4882f7(0x10d)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x49713b = await _0xbcb33a(_0x29f6cc), _0x398106 = _0x49713b['data'][_0x4882f7(0x318)][0x0][_0x4882f7(0x140)]['username'];
            if (_0xacfdce[_0x4882f7(0x31f)]) {
                let _0x47cab9 = 0x0;
                _0xa5e9ff(_0x47cab9, _0x49713b[_0x4882f7(0x165)][_0x4882f7(0x318)][0x0][_0x4882f7(0x2dd)][_0x4882f7(0x2d2)]), _0x49713b['data']['reels_media'][0x0]['items'][_0x4882f7(0x373)]((_0x198e33, _0x34c11d) => {
                    setTimeout(() => {
                        const _0x23767c = a0_0x47e8;
                        _0xacfdce['RENAME_PUBLISH_DATE'] && (_0x20bee3 = _0x198e33[_0x23767c(0x1fb)]), _0x198e33[_0x23767c(0x3d1)][_0x23767c(0x210)](function (_0xda49bd, _0x18e3a7) {
                            const _0x5712f5 = _0x23767c;
                            if (_0xda49bd[_0x5712f5(0x188)] < _0x18e3a7[_0x5712f5(0x188)])
                                return 0x1;
                            if (_0xda49bd[_0x5712f5(0x188)] > _0x18e3a7[_0x5712f5(0x188)])
                                return -0x1;
                            return 0x0;
                        }), _0x198e33['is_video'] ? _0x2f4df2(_0x198e33[_0x23767c(0x11e)][0x0][_0x23767c(0x24d)], _0x398106, _0x23767c(0x1ec), _0x20bee3, _0x23767c(0x1bc), _0x198e33['id'])[_0x23767c(0x158)](() => {
                            const _0x46b6ca = _0x23767c;
                            _0xa5e9ff(++_0x47cab9, _0x49713b[_0x46b6ca(0x165)][_0x46b6ca(0x318)][0x0][_0x46b6ca(0x2dd)]['length']);
                        }) : _0x2f4df2(_0x198e33[_0x23767c(0x3d1)][0x0][_0x23767c(0x24d)], _0x398106, _0x23767c(0x1ec), _0x20bee3, 'jpg', _0x198e33['id'])[_0x23767c(0x158)](() => {
                            const _0x1104b4 = _0x23767c;
                            _0xa5e9ff(++_0x47cab9, _0x49713b[_0x1104b4(0x165)]['reels_media'][0x0]['items'][_0x1104b4(0x2d2)]);
                        });
                    }, 0x64 * _0x34c11d);
                });
            } else
                _0x461a6a(![], !![]), _0x206ba9(_0x49713b, _0x4882f7(0x1ec));
        }
        async function _0x3769b8(_0x3eacd1, _0x2a32f6) {
            const _0x53a0ed = _0x1154df;
            var _0x488cbd = _0x2283e9('body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]')[_0x53a0ed(0x1eb)](function () {
                const _0x4ec2df = _0x53a0ed;
                return _0x2283e9(this)[_0x4ec2df(0x3ca)]('href')[_0x4ec2df(0x2cf)]('/')[_0x4ec2df(0x1eb)](_0x157285 => _0x157285[_0x4ec2df(0x2d2)] > 0x0)[_0x4ec2df(0x2d2)] === 0x1;
            })['first']()[_0x53a0ed(0x3ca)]('href')[_0x53a0ed(0x2cf)]('/')[_0x53a0ed(0x1eb)](_0x6e94a4 => _0x6e94a4[_0x53a0ed(0x2d2)] > 0x0)['at'](0x0);
            if (_0x3eacd1) {
                let _0x1375a8 = new Date()[_0x53a0ed(0x10c)](), _0x42e853 = Math[_0x53a0ed(0x33c)](_0x1375a8 / 0x3e8), _0x29bf03 = location['href'][_0x53a0ed(0x10d)](/\/$/ig, '')[_0x53a0ed(0x2cf)]('/')['at'](-0x1), _0x447ad2 = _0x2283e9(_0x53a0ed(0x124))[_0x53a0ed(0x2d2)] || _0x2283e9(_0x53a0ed(0x142))[_0x53a0ed(0x2d2)] || _0x2283e9(_0x53a0ed(0x39b))[_0x53a0ed(0x1df)](_0x53a0ed(0x321))[_0x53a0ed(0x2d2)], _0x8f9036 = 0x0;
                _0x5502da(!![]);
                if (_0x33d3f7[_0x53a0ed(0x29f)][_0x53a0ed(0x1ec)][_0x29bf03]) {
                    _0x32f9d0(_0x53a0ed(0x30c), _0x29bf03);
                    let _0x27f068 = _0x33d3f7[_0x53a0ed(0x29f)][_0x53a0ed(0x1ec)][_0x29bf03][_0x53a0ed(0x165)][_0x53a0ed(0x318)][0x0]['items'][_0x53a0ed(0x2d2)];
                    _0x488cbd = _0x33d3f7[_0x53a0ed(0x29f)]['highlights'][_0x29bf03]['data'][_0x53a0ed(0x318)][0x0][_0x53a0ed(0x140)][_0x53a0ed(0x177)], _0x8f9036 = _0x33d3f7[_0x53a0ed(0x29f)][_0x53a0ed(0x1ec)][_0x29bf03][_0x53a0ed(0x165)]['reels_media'][0x0][_0x53a0ed(0x2dd)][_0x27f068 - _0x447ad2];
                } else {
                    let _0xb93f19 = await _0xbcb33a(_0x29bf03), _0x25356f = _0xb93f19[_0x53a0ed(0x165)][_0x53a0ed(0x318)][0x0][_0x53a0ed(0x2dd)]['length'];
                    _0x488cbd = _0xb93f19['data']['reels_media'][0x0][_0x53a0ed(0x140)]['username'], _0x8f9036 = _0xb93f19[_0x53a0ed(0x165)][_0x53a0ed(0x318)][0x0]['items'][_0x25356f - _0x447ad2], _0x33d3f7[_0x53a0ed(0x29f)]['highlights'][_0x29bf03] = _0xb93f19;
                }
                _0x32f9d0(_0x53a0ed(0x159), _0x29bf03, _0x33d3f7['GL_dataCache']['highlights'][_0x29bf03]);
                _0xacfdce['RENAME_PUBLISH_DATE'] && (_0x42e853 = _0x8f9036['taken_at_timestamp']);
                if (_0xacfdce[_0x53a0ed(0x3b6)] && !_0x33d3f7[_0x53a0ed(0x398)]) {
                    let _0x100ba5 = await _0x814705(_0x8f9036['id']);
                    _0x100ba5[_0x53a0ed(0x2a3)] === 'ok' ? _0x100ba5[_0x53a0ed(0x2dd)][0x0][_0x53a0ed(0x320)] ? _0x2a32f6 ? _0x32e483(_0x100ba5[_0x53a0ed(0x2dd)][0x0][_0x53a0ed(0x320)][0x0][_0x53a0ed(0x286)]) : _0x2f4df2(_0x100ba5[_0x53a0ed(0x2dd)][0x0][_0x53a0ed(0x320)][0x0][_0x53a0ed(0x286)], _0x488cbd, _0x53a0ed(0x1ec), _0x42e853, 'mp4', _0x100ba5[_0x53a0ed(0x2dd)][0x0]['id']) : _0x2a32f6 ? _0x32e483(_0x100ba5['items'][0x0][_0x53a0ed(0x369)][_0x53a0ed(0x2e3)][0x0][_0x53a0ed(0x286)]) : _0x2f4df2(_0x100ba5[_0x53a0ed(0x2dd)][0x0]['image_versions2'][_0x53a0ed(0x2e3)][0x0][_0x53a0ed(0x286)], _0x488cbd, _0x53a0ed(0x1ec), _0x42e853, _0x53a0ed(0x16b), _0x100ba5[_0x53a0ed(0x2dd)][0x0]['id']) : (_0xacfdce['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (delete _0x33d3f7[_0x53a0ed(0x29f)][_0x53a0ed(0x1ec)][_0x29bf03], _0x33d3f7['tempFetchRateLimit'] = !![], _0x3769b8(!![], _0x2a32f6)) : alert(_0x53a0ed(0x2d8) + _0x100ba5['message']), _0x32f9d0(_0x100ba5));
                } else
                    _0x8f9036[_0x53a0ed(0x23f)] ? _0x2a32f6 ? _0x32e483(_0x8f9036[_0x53a0ed(0x11e)]['at'](-0x1)[_0x53a0ed(0x24d)], _0x488cbd) : _0x2f4df2(_0x8f9036[_0x53a0ed(0x11e)]['at'](-0x1)[_0x53a0ed(0x24d)], _0x488cbd, _0x53a0ed(0x1ec), _0x42e853, _0x53a0ed(0x1bc), _0x8f9036['id']) : _0x2a32f6 ? _0x32e483(_0x8f9036['display_resources']['at'](-0x1)['src'], _0x488cbd) : _0x2f4df2(_0x8f9036[_0x53a0ed(0x3d1)]['at'](-0x1)['src'], _0x488cbd, _0x53a0ed(0x1ec), _0x42e853, _0x53a0ed(0x16b), _0x8f9036['id']), _0x33d3f7[_0x53a0ed(0x398)] = ![];
                _0x5502da(![]);
            } else {
                if (!_0x2283e9(_0x53a0ed(0x1c5))[_0x53a0ed(0x2d2)]) {
                    let _0x323b99 = null;
                    _0x2283e9(_0x53a0ed(0x232))[_0x53a0ed(0x2d2)] > 0x0 ? _0x323b99 = _0x2283e9('body\x20>\x20div\x20section:visible._ac0a') : (_0x323b99 = _0x2283e9('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x323b99[_0x53a0ed(0x3c3)](_0x53a0ed(0x1f2), _0x53a0ed(0x314)));
                    if (_0x323b99['length'] === 0x0) {
                        let _0x389587 = _0x2283e9(_0x53a0ed(0x378)), _0x1475d3 = 0x0;
                        _0x389587[_0x53a0ed(0x206)](function () {
                            const _0x571749 = _0x53a0ed;
                            _0x2283e9(this)['width']() > _0x1475d3 && (_0x1475d3 = _0x2283e9(this)[_0x571749(0x38f)](), _0x323b99 = _0x2283e9(this)['children'](_0x571749(0x1ab))[_0x571749(0x2e7)]());
                        });
                    }
                    if (_0x323b99 != null) {
                        _0x323b99[_0x53a0ed(0x260)](_0x53a0ed(0x27f) + _0x32d7df('DW') + _0x53a0ed(0x185) + _0x549145[_0x53a0ed(0x3ce)] + '</div>'), _0x323b99[_0x53a0ed(0x260)](_0x53a0ed(0x370) + _0x32d7df('NEW_TAB') + _0x53a0ed(0x1c8) + _0x549145[_0x53a0ed(0x2b6)] + '</div>');
                        let _0x5f54f8 = _0x3e0fa8(_0x488cbd);
                        _0x5f54f8[_0x53a0ed(0x2d2)] > 0x1 && _0x323b99[_0x53a0ed(0x260)](_0x53a0ed(0x333) + _0x32d7df('DW_ALL') + _0x53a0ed(0x335) + _0x549145[_0x53a0ed(0x268)] + '</div>');
                        let _0x487e0b = _0x5f54f8[_0x53a0ed(0x1b3)](_0x53a0ed(0x387))[_0x53a0ed(0x1df)](_0x53a0ed(0x304))?.[_0x53a0ed(0x3ca)]('title');
                        _0x487e0b != null && _0x5f54f8[_0x53a0ed(0x1b3)](_0x53a0ed(0x387))[_0x53a0ed(0x1df)](_0x53a0ed(0x304))[_0x53a0ed(0x3ab)](_0x487e0b), _0x323b99[_0x53a0ed(0x1df)](_0x53a0ed(0x39e))['each'](function () {
                            const _0x558725 = _0x53a0ed;
                            _0x2283e9(this)['on'](_0x558725(0x150), function () {
                                const _0x297169 = _0x558725;
                                !_0x2283e9(this)[_0x297169(0x165)]('remove-thumbnail') && (_0x323b99[_0x297169(0x1df)](_0x297169(0x28e))['length'] === 0x0 ? (_0x2283e9(this)[_0x297169(0x3ca)](_0x297169(0x397), !![]), _0x2283e9(_0x297169(0x28e))[_0x297169(0x197)](), _0x32f9d0(_0x297169(0x368))) : (_0x2283e9(this)[_0x297169(0x3ca)](_0x297169(0x397), !![]), _0x32f9d0('(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x5ce9c1(_0x1710ad) {
            const _0x106438 = _0x1154df;
            if (_0x1710ad) {
                let _0x4d36c3 = new Date()[_0x106438(0x10c)](), _0x139091 = Math[_0x106438(0x33c)](_0x4d36c3 / 0x3e8), _0x2912b4 = location[_0x106438(0x151)][_0x106438(0x10d)](/\/$/ig, '')[_0x106438(0x2cf)]('/')['at'](-0x1), _0x2347c9 = '', _0x1e2d9a = _0x2283e9(_0x106438(0x124))[_0x106438(0x2d2)] || _0x2283e9(_0x106438(0x142))[_0x106438(0x2d2)] || _0x2283e9(_0x106438(0x39b))[_0x106438(0x1df)](_0x106438(0x321))[_0x106438(0x2d2)], _0x24400f = '';
                _0x5502da(!![]);
                if (_0x33d3f7[_0x106438(0x29f)][_0x106438(0x1ec)][_0x2912b4]) {
                    _0x32f9d0('Fetch\x20from\x20memory\x20cache:', _0x2912b4);
                    let _0x323f60 = _0x33d3f7['GL_dataCache']['highlights'][_0x2912b4]['data'][_0x106438(0x318)][0x0][_0x106438(0x2dd)][_0x106438(0x2d2)];
                    _0x2347c9 = _0x33d3f7['GL_dataCache'][_0x106438(0x1ec)][_0x2912b4][_0x106438(0x165)][_0x106438(0x318)][0x0][_0x106438(0x140)][_0x106438(0x177)], _0x24400f = _0x33d3f7[_0x106438(0x29f)]['highlights'][_0x2912b4][_0x106438(0x165)][_0x106438(0x318)][0x0][_0x106438(0x2dd)][_0x323f60 - _0x1e2d9a];
                } else {
                    let _0x31a64e = await _0xbcb33a(_0x2912b4), _0xdbecc0 = _0x31a64e[_0x106438(0x165)][_0x106438(0x318)][0x0][_0x106438(0x2dd)][_0x106438(0x2d2)];
                    _0x2347c9 = _0x31a64e[_0x106438(0x165)][_0x106438(0x318)][0x0][_0x106438(0x140)][_0x106438(0x177)], _0x24400f = _0x31a64e[_0x106438(0x165)][_0x106438(0x318)][0x0]['items'][_0xdbecc0 - _0x1e2d9a], _0x33d3f7[_0x106438(0x29f)][_0x106438(0x1ec)][_0x2912b4] = _0x31a64e;
                }
                _0xacfdce[_0x106438(0x34f)] && (_0x139091 = _0x24400f[_0x106438(0x1fb)]);
                if (_0xacfdce[_0x106438(0x3b6)] && !_0x33d3f7['tempFetchRateLimit']) {
                    let _0x28b353 = await _0x814705(_0x24400f['id']);
                    _0x28b353[_0x106438(0x2a3)] === 'ok' ? _0x2f4df2(_0x28b353[_0x106438(0x2dd)][0x0]['image_versions2'][_0x106438(0x2e3)][0x0][_0x106438(0x286)], _0x2347c9, _0x106438(0x1ec), _0x139091, _0x106438(0x16b), _0x2912b4) : (_0xacfdce[_0x106438(0x31c)] ? (delete _0x33d3f7['GL_dataCache']['highlights'][_0x2912b4], _0x33d3f7[_0x106438(0x398)] = !![], _0x5ce9c1(!![])) : alert(_0x106438(0x2d8) + _0x28b353[_0x106438(0x141)]), _0x32f9d0(_0x28b353));
                } else
                    _0x2f4df2(_0x24400f[_0x106438(0x3d1)]['at'](-0x1)[_0x106438(0x24d)], _0x2347c9, _0x106438(0x1ec), _0x139091, 'jpg', _0x2912b4), _0x33d3f7[_0x106438(0x398)] = ![];
                _0x5502da(![]);
            } else {
                if (_0x2283e9(_0x106438(0x1a7))[_0x106438(0x2d2)]) {
                    if (!_0x2283e9(_0x106438(0x28e))[_0x106438(0x2d2)]) {
                        let _0x1aea50 = null;
                        _0x2283e9(_0x106438(0x232))[_0x106438(0x2d2)] > 0x0 ? _0x1aea50 = _0x2283e9('body\x20>\x20div\x20section:visible._ac0a') : (_0x1aea50 = _0x2283e9(_0x106438(0x224)), _0x1aea50[_0x106438(0x3c3)](_0x106438(0x1f2), _0x106438(0x314)));
                        if (_0x1aea50['length'] === 0x0) {
                            let _0x35843e = _0x2283e9('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x33f6d3 = 0x0;
                            _0x35843e[_0x106438(0x206)](function () {
                                const _0x51e9a6 = _0x106438;
                                _0x2283e9(this)[_0x51e9a6(0x38f)]() > _0x33f6d3 && (_0x33f6d3 = _0x2283e9(this)['width'](), _0x1aea50 = _0x2283e9(this)[_0x51e9a6(0x178)](_0x51e9a6(0x1ab))[_0x51e9a6(0x2e7)]());
                            });
                        }
                        _0x1aea50 != null && _0x1aea50[_0x106438(0x260)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x32d7df(_0x106438(0x35c)) + _0x106438(0x196) + _0x549145[_0x106438(0x390)] + _0x106438(0x275));
                    }
                } else
                    _0x2283e9('.IG_DWHISTORY_THUMBNAIL')[_0x106438(0x197)]();
            }
        }
        function _0x2b6d14(_0x96f57, _0x262ae3) {
            const _0x230bd1 = _0x1154df;
            _0x262ae3 === !![] && (_0x32f9d0(_0x230bd1(0x316), 'regenerated'), _0x2283e9(_0x230bd1(0x2c1))[_0x230bd1(0x1eb)](function () {
                const _0x9aa833 = _0x230bd1;
                return _0x2283e9(this)[_0x9aa833(0x1df)](_0x9aa833(0x340))[_0x9aa833(0x2d2)] === 0x0;
            })[_0x230bd1(0x14f)](_0x230bd1(0x2db)));
            if (_0x96f57 == ![]) {
                const _0x1bd2b1 = 0x64;
                let _0x2051e1 = 0x0;
                var _0x4b6e29 = setInterval(() => {
                    const _0x1dab72 = _0x230bd1;
                    (_0x2051e1 > _0x1bd2b1 || _0x2283e9('article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]')[_0x1dab72(0x2d2)] > 0x0) && (clearInterval(_0x4b6e29), _0x2051e1 > _0x1bd2b1 && console['warn']('onReadyMyDW()\x20Timer', _0x1dab72(0x3bf))), _0x32f9d0(_0x1dab72(0x1de), _0x1dab72(0x201)), _0x1b0e58(), _0x2051e1++;
                }, 0x32);
            } else
                _0x1b0e58();
        }
        function _0x4afa8f(_0x3e7344) {
            const _0x30e28c = _0x1154df;
            _0xacfdce['DISABLE_VIDEO_LOOPING'] && _0x3e7344[_0x30e28c(0x1df)](_0x30e28c(0x366))['each'](function () {
                _0x2283e9(this)['on']('ended', function () {
                    const _0x2a99ae = a0_0x47e8;
                    !_0x2283e9(this)[_0x2a99ae(0x165)]('loop') && (_0x2283e9(this)[_0x2a99ae(0x3ca)](_0x2a99ae(0x132), !![]), this['pause'](), _0x32f9d0('(post)\x20Added\x20video\x20event\x20listener\x20#loop'));
                });
            });
            _0xacfdce[_0x30e28c(0x3cb)] && _0x3e7344['find'](_0x30e28c(0x366))[_0x30e28c(0x206)](function () {
                const _0x123839 = _0x30e28c;
                _0x2283e9(this)['on'](_0x123839(0x217), function () {
                    const _0x402798 = _0x123839;
                    !_0x2283e9(this)[_0x402798(0x165)](_0x402798(0x2b9)) && (_0x2283e9(this)[_0x402798(0x3ca)]('data-modify', !![]), this['volume'] = _0x33d3f7[_0x402798(0x1ac)], _0x32f9d0(_0x402798(0x13d)));
                });
            });
            _0xacfdce[_0x30e28c(0x2d4)] && _0x3e7344['find']('video')[_0x30e28c(0x206)](function () {
                const _0x12c318 = _0x30e28c;
                if (!_0x2283e9(this)[_0x12c318(0x165)](_0x12c318(0x356))) {
                    let _0x676570 = _0x2283e9(this);
                    _0x32f9d0('(post)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0xacfdce[_0x12c318(0x3cb)] && (this['volume'] = _0x33d3f7[_0x12c318(0x1ac)], _0x2283e9(this)['on'](_0x12c318(0x15b), function () {
                        const _0x1983f6 = _0x12c318;
                        this[_0x1983f6(0x28a)] = _0x33d3f7[_0x1983f6(0x1ac)];
                    })), _0x2283e9(this)['on'](_0x12c318(0x1da), function (_0x8b720d) {
                        const _0x1d57c6 = _0x12c318;
                        _0x8b720d['preventDefault'](), _0x676570['css'](_0x1d57c6(0x1c0), '-1'), _0x676570[_0x1d57c6(0x14f)](_0x1d57c6(0x356));
                    }), _0x2283e9(this)['parent']()['find'](_0x12c318(0x250))[_0x12c318(0x2e7)]()['on'](_0x12c318(0x1da), function (_0xbb18b0) {
                        const _0x4a04c5 = _0x12c318;
                        _0xbb18b0[_0x4a04c5(0x113)](), _0x676570[_0x4a04c5(0x3c3)](_0x4a04c5(0x1c0), '2'), _0x676570[_0x4a04c5(0x3ca)]('controls', !![]);
                    }), _0x2283e9(this)['on'](_0x12c318(0x148), function () {
                        const _0x59fcf4 = _0x12c318;
                        let _0x56423a = _0x2283e9(this)[_0x59fcf4(0x3c1)]()['find']('video\x20+\x20div\x20>\x20div')[_0x59fcf4(0x1df)](_0x59fcf4(0x265))[_0x59fcf4(0x1eb)](function (_0xe80dba) {
                            const _0x63933e = _0x59fcf4;
                            return _0x2283e9(this)['width']() <= 0x40 && _0x2283e9(this)[_0x63933e(0x235)]() <= 0x40 && _0x2283e9(this)[_0x63933e(0x1df)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')[_0x63933e(0x2d2)] > 0x0;
                        });
                        var _0x1fe554 = _0x56423a['find'](_0x59fcf4(0x134))['length'] === 0x0;
                        this[_0x59fcf4(0x242)] != _0x1fe554 && (this[_0x59fcf4(0x28a)] = _0x33d3f7[_0x59fcf4(0x1ac)], _0x56423a?.[_0x59fcf4(0x1b4)](_0x59fcf4(0x1b5))), _0x2283e9(this)[_0x59fcf4(0x3ca)]('data-completed') && (_0x33d3f7['videoVolume'] = this[_0x59fcf4(0x28a)], GM_setValue('G_VIDEO_VOLUME', this[_0x59fcf4(0x28a)])), this[_0x59fcf4(0x28a)] == _0x33d3f7[_0x59fcf4(0x1ac)] && _0x2283e9(this)[_0x59fcf4(0x3ca)](_0x59fcf4(0x30a), !![]);
                    }), _0x2283e9(this)[_0x12c318(0x3c3)](_0x12c318(0x1f2), 'absolute'), _0x2283e9(this)[_0x12c318(0x3c3)](_0x12c318(0x1c0), '2'), _0x2283e9(this)['attr'](_0x12c318(0x298), !![]), _0x2283e9(this)[_0x12c318(0x3ca)]('controls', !![]);
                }
            });
            var _0x16ea11 = _0x3e7344[_0x30e28c(0x1df)](_0x30e28c(0x366)), _0x4e407b = _0x3e7344[_0x30e28c(0x1df)]('video\x20+\x20div\x20>\x20div')[_0x30e28c(0x2e7)]();
            _0x3bfd65(_0x16ea11, _0x4e407b, _0x30e28c(0x228), _0x30e28c(0x2a7));
        }
        ;
        function _0x1b0e58() {
            const _0x344ea0 = _0x1154df;
            _0x2283e9(_0x344ea0(0x1d7))[_0x344ea0(0x270)](function (_0x12497a) {
                const _0x587bee = _0x344ea0;
                return _0x2283e9(this)['is'](_0x587bee(0x351)) ? _0x2283e9(this)[_0x587bee(0x3c1)]()[_0x587bee(0x3c1)]()[_0x587bee(0x3c1)]()[_0x587bee(0x3c1)]()[0x0] : this;
            })[_0x344ea0(0x1eb)](function () {
                const _0x2b838f = _0x344ea0;
                return _0x2283e9(this)[_0x2b838f(0x235)]() > 0x0 && _0x2283e9(this)[_0x2b838f(0x38f)]() > 0x0;
            })[_0x344ea0(0x206)](function (_0x1e9fdc) {
                const _0x3081ca = _0x344ea0;
                if (!_0x2283e9(this)[_0x3081ca(0x3ca)](_0x3081ca(0x2db)) && !_0x2283e9(this)[_0x3081ca(0x121)](_0x3081ca(0x136)) && !_0x2283e9(this)[_0x3081ca(0x178)](_0x3081ca(0x26b))?.[_0x3081ca(0x121)]('x1iyjqo2') && _0x2283e9(this)[_0x3081ca(0x1b3)](_0x3081ca(0x39a))['length'] === 0x0) {
                    _0x32f9d0(_0x3081ca(0x11c), _0x2283e9(this));
                    const _0x4c3867 = _0x2283e9(this), _0x47b0ef = this[_0x3081ca(0x2e2)], _0x16cbfe = _0x3081ca(0x25f);
                    var _0x1449fe;
                    if (_0x47b0ef === 'DIV' && _0x1e9fdc != 0x0)
                        return;
                    const _0x22d892 = _0x4c3867[_0x3081ca(0x178)](_0x3081ca(0x1ab))[_0x3081ca(0x178)](_0x3081ca(0x1ab));
                    if (_0x22d892[_0x3081ca(0x2d2)] === 0x0)
                        return;
                    _0x32f9d0('Found\x20insert\x20point', _0x22d892);
                    if (_0x4c3867[_0x3081ca(0x1df)](_0x3081ca(0x2fe))[_0x3081ca(0x2d2)] > 0x0) {
                        _0x4c3867[_0x3081ca(0x1df)]('._acay\x20+\x20.x24i39r')['length'] > 0x0 && _0x4c3867[_0x3081ca(0x1df)](_0x3081ca(0x2aa))['css']('top', _0x3081ca(0x285));
                        const _0x134c6b = _0x4c3867['find'](_0x3081ca(0x2fe))[_0x3081ca(0x2e7)]()[_0x3081ca(0x3c1)]()[0x0];
                        var _0x3f3682 = new MutationObserver(function () {
                            const _0x479410 = _0x3081ca;
                            _0x4c3867[_0x479410(0x1df)]('._acay\x20+\x20.x24i39r')[_0x479410(0x3c3)](_0x479410(0x1e2), '37px');
                        });
                        _0x3f3682[_0x3081ca(0x3bc)](_0x134c6b, { 'childList': !![] });
                    }
                    _0x22d892['eq'](_0x47b0ef === _0x3081ca(0x19b) ? 0x0 : _0x22d892[_0x3081ca(0x2d2)] - 0x2)[_0x3081ca(0x260)](_0x3081ca(0x1f1));
                    const _0xe618fc = _0x3081ca(0x27f) + _0x32d7df('DW') + _0x3081ca(0x2ea) + _0x549145[_0x3081ca(0x3ce)] + _0x3081ca(0x275), _0x3d4553 = '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x32d7df(_0x3081ca(0x2b6)) + _0x3081ca(0x1b6) + _0x549145[_0x3081ca(0x2b6)] + _0x3081ca(0x275), _0x50577a = _0x3081ca(0x216) + _0x32d7df('THUMBNAIL_INTRO') + _0x3081ca(0x262) + _0x549145[_0x3081ca(0x390)] + _0x3081ca(0x275), _0x471d92 = _0x3081ca(0x388) + _0x32d7df(_0x3081ca(0x355)) + '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>' + _0x549145[_0x3081ca(0x1b8)] + _0x3081ca(0x275);
                    _0x22d892[_0x3081ca(0x1df)](_0x3081ca(0x2d5))['append'](_0xe618fc);
                    const _0x431695 = _0x4c3867[_0x3081ca(0x1df)](_0x16cbfe)[_0x3081ca(0x2d2)];
                    if (_0x431695 > 0x1 && _0xacfdce['DIRECT_DOWNLOAD_VISIBLE_RESOURCE'] && !_0xacfdce[_0x3081ca(0x19e)]) {
                        const _0x5d14ae = _0x3081ca(0x333) + _0x32d7df(_0x3081ca(0x15f)) + _0x3081ca(0x182) + _0x549145['DOWNLOAD_ALL'] + _0x3081ca(0x275);
                        _0x22d892[_0x3081ca(0x1df)]('.button_wrapper')[_0x3081ca(0x260)](_0x5d14ae);
                    }
                    _0x22d892['find'](_0x3081ca(0x2d5))[_0x3081ca(0x260)](_0x3d4553), setTimeout(() => {
                        const _0x4f545e = _0x3081ca;
                        if (_0x22d892['eq'](_0x47b0ef === _0x4f545e(0x19b) ? 0x0 : _0x22d892[_0x4f545e(0x2d2)] - 0x2)[_0x4f545e(0x1df)](_0x4f545e(0x39d))[_0x4f545e(0x2d2)] === 0x0)
                            _0x22d892[_0x4f545e(0x1df)]('video')[_0x4f545e(0x2d2)] > 0x0 ? _0x22d892[_0x4f545e(0x1df)](_0x4f545e(0x2d5))[_0x4f545e(0x260)](_0x50577a) : (_0x1449fe = _0x4c3867['find'](_0x4f545e(0x199))[_0x4f545e(0x1eb)](function () {
                                const _0x486f4c = _0x4f545e;
                                return _0x2283e9(this)[_0x486f4c(0x38f)]() > 0xc8 && _0x2283e9(this)[_0x486f4c(0x235)]() > 0xc8;
                            })[_0x4f545e(0x3ca)](_0x4f545e(0x24d)), _0x22d892[_0x4f545e(0x1df)](_0x4f545e(0x2d5))[_0x4f545e(0x260)](_0x471d92));
                        else {
                            const _0x4ff801 = (_0xe55051, _0x479960) => {
                                    const _0x3afe17 = _0x4f545e;
                                    _0xe55051[_0x3afe17(0x373)](_0x121f70 => {
                                        const _0x9a7c1c = _0x3afe17;
                                        if (_0x121f70[_0x9a7c1c(0x2b3)]) {
                                            var _0x17be6a = _0x2283e9(_0x121f70['target']);
                                            _0x22d892['find']('.IG_THUMBNAIL_MAIN')?.['remove'](), _0x22d892[_0x9a7c1c(0x1df)](_0x9a7c1c(0x297))?.[_0x9a7c1c(0x197)](), _0x17be6a[_0x9a7c1c(0x1df)](_0x9a7c1c(0x366))[_0x9a7c1c(0x2d2)] > 0x0 ? (_0x22d892[_0x9a7c1c(0x1df)](_0x9a7c1c(0x323))['length'] === 0x0 && _0x22d892['find']('.button_wrapper')['append'](_0x50577a), _0x4afa8f(_0x4c3867)) : (_0x1449fe = _0x17be6a[_0x9a7c1c(0x1df)](_0x9a7c1c(0x199))['attr'](_0x9a7c1c(0x24d)), _0x22d892[_0x9a7c1c(0x1df)]('.button_wrapper')[_0x9a7c1c(0x260)](_0x471d92));
                                        }
                                    });
                                }, _0x4d59f9 = new IntersectionObserver(_0x4ff801, {
                                    'root': _0x4c3867[_0x4f545e(0x1df)](_0x4f545e(0x301))[_0x4f545e(0x2e7)]()['parent']()['parent']()[_0x4f545e(0x3c1)]()[0x0],
                                    'rootMargin': _0x4f545e(0x13c),
                                    'threshold': 0.1
                                }), _0x3b3fe7 = new MutationObserver(function (_0x11e968, _0x2692c6) {
                                    const _0x416bad = _0x4f545e;
                                    var _0x5d2d95 = _0x11e968['at'](0x0)?.[_0x416bad(0x357)];
                                    _0x2283e9(_0x5d2d95)[_0x416bad(0x1df)](_0x416bad(0x176))[_0x416bad(0x206)](function () {
                                        const _0x1f3144 = _0x416bad;
                                        _0x4d59f9[_0x1f3144(0x3bc)](this);
                                    });
                                });
                            _0x4c3867[_0x4f545e(0x1df)](_0x4f545e(0x39d))['each'](function () {
                                const _0x5ddde0 = _0x4f545e;
                                _0x4d59f9[_0x5ddde0(0x3bc)](this);
                            });
                            const _0x4a02b0 = _0x22d892['eq'](_0x47b0ef === _0x4f545e(0x19b) ? 0x0 : _0x22d892[_0x4f545e(0x2d2)] - 0x2)[_0x4f545e(0x1df)]('div\x20>\x20ul\x20li._acaz')?.[_0x4f545e(0x3c1)]()[0x0], _0x36d2d9 = _0x22d892['eq'](_0x47b0ef === _0x4f545e(0x19b) ? 0x0 : _0x22d892[_0x4f545e(0x2d2)] - 0x2)[_0x4f545e(0x1df)](_0x4f545e(0x39d))?.['parent']()[_0x4f545e(0x3c1)]()[0x0];
                            _0x4a02b0 && _0x3b3fe7[_0x4f545e(0x3bc)](_0x4a02b0, { 'childList': !![] }), _0x36d2d9 && _0x3b3fe7['observe'](_0x36d2d9, { 'attributes': !![] });
                        }
                    }, 0x32), _0x22d892['css'](_0x3081ca(0x1f2), _0x3081ca(0x314)), _0x4afa8f(_0x4c3867), _0x33d3f7[_0x3081ca(0x230)][_0x3081ca(0x3a8)]({
                        'element': this,
                        'trigger': [
                            '.IG_THUMBNAIL_MAIN',
                            _0x3081ca(0x25d),
                            _0x3081ca(0x3d2),
                            '.IG_DW_MAIN',
                            _0x3081ca(0x297)
                        ]
                    }), _0x2283e9(this)['on'](_0x3081ca(0x1b5), _0x3081ca(0x297), function () {
                        const _0x9a627b = _0x3081ca;
                        _0x1449fe != null ? _0x289f83(_0x1449fe) : alert(_0x9a627b(0x2f9));
                    }), _0x2283e9(this)['on'](_0x3081ca(0x1b5), _0x3081ca(0x323), function () {
                        const _0x5c5692 = _0x3081ca;
                        _0x5502da(!![]), _0x33d3f7[_0x5c5692(0x3c0)] = _0x4c3867['attr']('data-username'), _0x33d3f7[_0x5c5692(0x3b3)] = location['pathname'][_0x5c5692(0x10d)](/\/$/, '')['split']('/')['at'](-0x1) || _0x4c3867['find']('a[href^=\x22/p/\x22]')[_0x5c5692(0x2e7)]()[_0x5c5692(0x3ca)]('href')['split']('/')['at'](0x2) || _0x2283e9(this)['parent']()[_0x5c5692(0x3c1)]()[_0x5c5692(0x3c1)]()['children'](_0x5c5692(0x244))['children']('div')[_0x5c5692(0x178)](_0x5c5692(0x244))[_0x5c5692(0x1df)](_0x5c5692(0x168))['last']()[_0x5c5692(0x3ca)](_0x5c5692(0x151))[_0x5c5692(0x2cf)]('/')['at'](0x2);
                        var _0x471e3e = _0xd1b035(_0x4c3867);
                        _0x461a6a(!![], ![]), _0x1187f8(_0x33d3f7[_0x5c5692(0x3b3)], _0x5c5692(0x103), '')[_0x5c5692(0x158)](() => {
                            let _0x136c18 = setInterval(() => {
                                const _0x59dcca = a0_0x47e8;
                                if (_0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['length'] > 0x0) {
                                    clearInterval(_0x136c18);
                                    var _0x1a4db9 = _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x471e3e + 0x1) + '\x22]')?.[_0x59dcca(0x3c1)]()['find'](_0x59dcca(0x37f))?.['first']();
                                    _0x1a4db9 != null && _0x1a4db9[_0x59dcca(0x2d2)] > 0x0 ? _0x1a4db9[_0x59dcca(0x1b4)](_0x59dcca(0x1b5)) : alert(_0x59dcca(0x194)), _0x5502da(![]), _0x2283e9(_0x59dcca(0x381))[_0x59dcca(0x197)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x2283e9(this)['on'](_0x3081ca(0x1b5), _0x3081ca(0x25d), function () {
                        const _0x18a8c5 = _0x3081ca;
                        _0x5502da(!![]), _0x33d3f7['GL_username'] = _0x4c3867['attr'](_0x18a8c5(0x38e)), _0x33d3f7[_0x18a8c5(0x3b3)] = location[_0x18a8c5(0x2bc)][_0x18a8c5(0x10d)](/\/$/, '')[_0x18a8c5(0x2cf)]('/')['at'](-0x1) || _0x4c3867[_0x18a8c5(0x1df)](_0x18a8c5(0x168))[_0x18a8c5(0x2e7)]()['attr']('href')[_0x18a8c5(0x2cf)]('/')['at'](0x2) || _0x2283e9(this)[_0x18a8c5(0x3c1)]()['parent']()[_0x18a8c5(0x3c1)]()[_0x18a8c5(0x178)](_0x18a8c5(0x244))[_0x18a8c5(0x178)](_0x18a8c5(0x1ab))[_0x18a8c5(0x178)](_0x18a8c5(0x244))['find'](_0x18a8c5(0x168))[_0x18a8c5(0x190)]()['attr'](_0x18a8c5(0x151))[_0x18a8c5(0x2cf)]('/')['at'](0x2);
                        var _0x2c7f5f = _0xd1b035(_0x4c3867);
                        _0x461a6a(!![], ![]), _0x1187f8(_0x33d3f7['GL_postPath'], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x18a8c5(0x158)](() => {
                            let _0x81541c = setInterval(() => {
                                const _0x57dba8 = a0_0x47e8;
                                if (_0x2283e9(_0x57dba8(0x1e0))[_0x57dba8(0x2d2)] > 0x0) {
                                    clearInterval(_0x81541c);
                                    var _0x2859c7 = _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x2c7f5f + 0x1) + '\x22]');
                                    if (_0xacfdce[_0x57dba8(0x3b6)] && _0xacfdce[_0x57dba8(0x1d6)])
                                        _0x1a17e6(_0x2859c7[_0x57dba8(0x2e7)]()[0x0], !![]);
                                    else {
                                        let _0xc03e00 = _0x2859c7?.['attr'](_0x57dba8(0x363));
                                        if (_0xc03e00) {
                                            var _0x56f224 = new URL(_0xc03e00);
                                            _0x56f224[_0x57dba8(0x138)] = 'scontent.cdninstagram.com', _0x32e483(_0x56f224[_0x57dba8(0x151)]);
                                        } else
                                            alert('Can\x20not\x20find\x20open\x20tab\x20url.');
                                    }
                                    _0x5502da(![]), _0x2283e9(_0x57dba8(0x381))['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x2283e9(this)['on'](_0x3081ca(0x1b5), '.IG_DW_ALL_MAIN', async function () {
                        const _0x224aac = _0x3081ca;
                        _0x33d3f7[_0x224aac(0x3c0)] = _0x4c3867[_0x224aac(0x3ca)]('data-username'), _0x33d3f7[_0x224aac(0x3b3)] = location[_0x224aac(0x2bc)][_0x224aac(0x10d)](/\/$/, '')[_0x224aac(0x2cf)]('/')['at'](-0x1) || _0x4c3867[_0x224aac(0x1df)]('a[href^=\x22/p/\x22]')[_0x224aac(0x2e7)]()[_0x224aac(0x3ca)](_0x224aac(0x151))['split']('/')['at'](0x2) || _0x2283e9(this)[_0x224aac(0x3c1)]()[_0x224aac(0x3c1)]()[_0x224aac(0x3c1)]()[_0x224aac(0x178)](_0x224aac(0x244))[_0x224aac(0x178)](_0x224aac(0x1ab))[_0x224aac(0x178)](_0x224aac(0x244))[_0x224aac(0x1df)](_0x224aac(0x168))['last']()[_0x224aac(0x3ca)](_0x224aac(0x151))[_0x224aac(0x2cf)]('/')['at'](0x2), _0x461a6a(_0xacfdce['DIRECT_DOWNLOAD_ALL'], !![]), _0x2283e9(_0x224aac(0x17f))['html'](_0x224aac(0x1b0) + _0x33d3f7[_0x224aac(0x3b3)] + '\x22>' + _0x33d3f7[_0x224aac(0x3b3)] + _0x224aac(0x34c)), _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['each'](function () {
                            const _0x27a75a = _0x224aac;
                            _0x2283e9(this)['wrap'](_0x27a75a(0x112)), _0x2283e9(this)[_0x27a75a(0x1bb)](_0x27a75a(0x311)), _0x2283e9(this)['after'](_0x27a75a(0x370) + _0x32d7df(_0x27a75a(0x2b6)) + _0x27a75a(0x213) + _0x549145[_0x27a75a(0x2b6)] + _0x27a75a(0x275)), _0x2283e9(this)[_0x27a75a(0x3ca)](_0x27a75a(0x1dd)) == _0x27a75a(0x366) && _0x2283e9(this)['after'](_0x27a75a(0x216) + _0x32d7df('THUMBNAIL_INTRO') + _0x27a75a(0x282) + _0x549145['THUMBNAIL'] + _0x27a75a(0x275));
                        }), _0x1187f8(_0x33d3f7[_0x224aac(0x3b3)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x32d7df(_0x224aac(0x352)))[_0x224aac(0x158)](() => {
                            let _0x513856 = setInterval(() => {
                                const _0x41b694 = a0_0x47e8;
                                _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['length'] > 0x0 && (clearInterval(_0x513856), _0x2283e9(_0x41b694(0x1e0))[_0x41b694(0x206)](function () {
                                    const _0xeb142b = _0x41b694;
                                    _0x2283e9(this)['trigger'](_0xeb142b(0x1b5));
                                }), _0x2283e9(_0x41b694(0x381))['remove']());
                            }, 0xfa);
                        });
                    }), _0x2283e9(this)['on'](_0x3081ca(0x1b5), _0x3081ca(0x340), async function () {
                        const _0x50aab2 = _0x3081ca;
                        _0x33d3f7['GL_username'] = _0x4c3867[_0x50aab2(0x3ca)]('data-username'), _0x33d3f7[_0x50aab2(0x3b3)] = location[_0x50aab2(0x2bc)][_0x50aab2(0x10d)](/\/$/, '')[_0x50aab2(0x2cf)]('/')['at'](-0x1) || _0x4c3867[_0x50aab2(0x1df)](_0x50aab2(0x168))[_0x50aab2(0x2e7)]()[_0x50aab2(0x3ca)]('href')[_0x50aab2(0x2cf)]('/')['at'](0x2) || _0x2283e9(this)['parent']()[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()[_0x50aab2(0x178)](_0x50aab2(0x244))['children'](_0x50aab2(0x1ab))['children'](_0x50aab2(0x244))[_0x50aab2(0x1df)](_0x50aab2(0x168))[_0x50aab2(0x190)]()['attr']('href')[_0x50aab2(0x2cf)]('/')['at'](0x2), _0x461a6a(_0xacfdce[_0x50aab2(0x19e)], !![]), _0x2283e9(_0x50aab2(0x17f))['html'](_0x50aab2(0x1b0) + _0x33d3f7[_0x50aab2(0x3b3)] + '\x22>' + _0x33d3f7['GL_postPath'] + _0x50aab2(0x34c));
                        if (_0xacfdce[_0x50aab2(0x125)]) {
                            _0x5502da(!![]), _0x654eb8(!![]);
                            var _0x450c46 = _0xd1b035(_0x2283e9(this)[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]());
                            _0x1187f8(_0x33d3f7[_0x50aab2(0x3b3)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', '')[_0x50aab2(0x158)](() => {
                                let _0x501b1f = setInterval(() => {
                                    const _0x2ab75f = a0_0x47e8;
                                    if (_0x2283e9(_0x2ab75f(0x1e0))[_0x2ab75f(0x2d2)] > 0x0) {
                                        clearInterval(_0x501b1f);
                                        var _0x1defe7 = _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x450c46 + 0x1) + '\x22]')?.[_0x2ab75f(0x3ca)](_0x2ab75f(0x363));
                                        _0x1defe7 ? (_0x5502da(![]), _0x2283e9(_0x2ab75f(0x212) + (_0x450c46 + 0x1) + '\x22]')?.[_0x2ab75f(0x1b4)]('click')) : alert(_0x2ab75f(0x153)), _0x2283e9(_0x2ab75f(0x381))[_0x2ab75f(0x197)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0xacfdce[_0x50aab2(0x19e)]) {
                            var _0x3f12a9 = 0x0, _0x198a37 = _0x2283e9(this)[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()[_0x50aab2(0x1df)](_0x16cbfe)[_0x50aab2(0x2d2)], _0x2da7da = _0xacfdce[_0x50aab2(0x37c)], _0x528f06 = new Date(_0x2283e9(this)[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()[_0x50aab2(0x1df)](_0x50aab2(0x364))[_0x50aab2(0x1eb)](function () {
                                    const _0x50b496 = _0x50aab2;
                                    let _0x48446b = _0x2283e9(this)[_0x50b496(0x1b3)](_0x50b496(0x15a))['attr']('href');
                                    return _0x48446b?.[_0x50b496(0x374)](_0x50b496(0x1e7)) || _0x48446b?.[_0x50b496(0x353)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })[_0x50aab2(0x2e7)]()['attr']('datetime'))[_0x50aab2(0x10c)]();
                            if (_0x198a37)
                                _0x2283e9(this)[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()['find'](_0x16cbfe)[_0x50aab2(0x206)](function () {
                                    const _0x236dee = _0x50aab2;
                                    let _0x273ff1 = _0x2283e9(this)[_0x236dee(0x3c1)]()['parent']()[_0x236dee(0x3c1)]()[_0x236dee(0x1df)](_0x236dee(0x366));
                                    _0x273ff1 && _0x273ff1[_0x236dee(0x3ca)](_0x236dee(0x24d)) && (_0x2da7da = !![]);
                                }), _0x2da7da || _0xacfdce['FORCE_RESOURCE_VIA_MEDIA'] ? _0x1187f8(_0x33d3f7[_0x50aab2(0x3b3)], _0x50aab2(0x103), _0x32d7df(_0x50aab2(0x352))) : (_0x2283e9(this)[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()[_0x50aab2(0x1df)](_0x16cbfe)[_0x50aab2(0x206)](function () {
                                    const _0x19509d = _0x50aab2;
                                    _0x3f12a9++;
                                    let _0x2b3c7d = _0x2283e9(this)['find'](_0x19509d(0x366)), _0x2d0bac = _0x2283e9(this)['find'](_0x19509d(0x34b)), _0x42d8c6 = _0x2d0bac[_0x19509d(0x3ca)]('srcset') ? _0x2d0bac[_0x19509d(0x3ca)](_0x19509d(0x271))[_0x19509d(0x2cf)]('\x20')[0x0] : _0x2d0bac[_0x19509d(0x3ca)]('src');
                                    _0x2b3c7d && _0x2b3c7d[_0x19509d(0x3ca)]('src') && (_0x2da7da = !![]), _0x2d0bac && _0x42d8c6 && _0x2283e9(_0x19509d(0x103))[_0x19509d(0x260)](_0x19509d(0x19a) + _0x528f06 + _0x19509d(0x2f0) + _0x33d3f7[_0x19509d(0x3b3)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x3f12a9 + _0x19509d(0x102) + _0x42d8c6 + _0x19509d(0x29e) + _0x42d8c6 + _0x19509d(0x2e1) + _0x32d7df('IMG') + _0x19509d(0x349) + _0x3f12a9 + '\x20-</a>');
                                }), _0x2da7da && _0x1187f8(_0x33d3f7[_0x50aab2(0x3b3)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x32d7df(_0x50aab2(0x1b7))));
                            else {
                                if (_0xacfdce['FORCE_RESOURCE_VIA_MEDIA'])
                                    _0x1187f8(_0x33d3f7[_0x50aab2(0x3b3)], _0x50aab2(0x103), _0x32d7df(_0x50aab2(0x352)));
                                else {
                                    _0x3f12a9++;
                                    let _0x5eaa7e = _0x2283e9(this)[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()['find'](_0x50aab2(0x366)), _0x1242f3 = _0x2283e9(this)[_0x50aab2(0x3c1)]()[_0x50aab2(0x3c1)]()['parent']()['find']('._aagv\x20img'), _0x2e1429 = _0x1242f3[_0x50aab2(0x3ca)](_0x50aab2(0x271)) ? _0x1242f3[_0x50aab2(0x3ca)](_0x50aab2(0x271))[_0x50aab2(0x2cf)]('\x20')[0x0] : _0x1242f3[_0x50aab2(0x3ca)](_0x50aab2(0x24d));
                                    _0x5eaa7e && _0x5eaa7e[_0x50aab2(0x3ca)]('src') && _0x1187f8(_0x33d3f7[_0x50aab2(0x3b3)], _0x50aab2(0x103), _0x32d7df(_0x50aab2(0x2fc))), _0x1242f3 && _0x2e1429 && _0x2283e9(_0x50aab2(0x103))[_0x50aab2(0x260)](_0x50aab2(0x19a) + _0x528f06 + _0x50aab2(0x2f0) + _0x33d3f7[_0x50aab2(0x3b3)] + _0x50aab2(0x24a) + _0x3f12a9 + _0x50aab2(0x3b5) + _0x2e1429 + _0x50aab2(0x29e) + _0x2e1429 + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x32d7df(_0x50aab2(0x36a)) + _0x50aab2(0x349) + _0x3f12a9 + '\x20-</a>');
                                }
                            }
                        }
                        _0x2283e9(_0x50aab2(0x1e0))['each'](function () {
                            const _0x219373 = _0x50aab2;
                            _0x2283e9(this)[_0x219373(0x12c)](_0x219373(0x112)), _0x2283e9(this)[_0x219373(0x1bb)](_0x219373(0x311)), _0x2283e9(this)[_0x219373(0x348)](_0x219373(0x370) + _0x32d7df('NEW_TAB') + _0x219373(0x213) + _0x549145[_0x219373(0x2b6)] + _0x219373(0x275)), _0x2283e9(this)[_0x219373(0x3ca)]('data-name') == 'video' && _0x2283e9(this)['after'](_0x219373(0x216) + _0x32d7df(_0x219373(0x35c)) + _0x219373(0x282) + _0x549145[_0x219373(0x390)] + _0x219373(0x275));
                        }), _0xacfdce[_0x50aab2(0x19e)] && _0x1187f8(_0x33d3f7[_0x50aab2(0x3b3)], _0x50aab2(0x103), _0x32d7df(_0x50aab2(0x352)))[_0x50aab2(0x158)](() => {
                            let _0x220cf7 = setInterval(() => {
                                const _0x518546 = a0_0x47e8;
                                _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x518546(0x2d2)] > 0x0 && (clearInterval(_0x220cf7), _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x518546(0x206)](function () {
                                    const _0x17eec5 = _0x518546;
                                    _0x2283e9(this)['trigger'](_0x17eec5(0x1b5));
                                }), _0x2283e9(_0x518546(0x381))[_0x518546(0x197)]());
                            }, 0xfa);
                        });
                    });
                    var _0x54b147 = _0x2283e9(this)['find'](_0x3081ca(0x3c7))['first']()[_0x3081ca(0x3ab)]() || _0x2283e9(this)['find'](_0x3081ca(0x38c))[_0x3081ca(0x1eb)](function () {
                        const _0x1f6f8f = _0x3081ca;
                        return _0x2283e9(this)?.[_0x1f6f8f(0x3ab)]()?.[_0x1f6f8f(0x2d2)] > 0x0;
                    })[_0x3081ca(0x2e7)]()[_0x3081ca(0x3ab)]();
                    _0x2283e9(this)[_0x3081ca(0x3ca)]('data-snig', _0x3081ca(0x22c)), _0x2283e9(this)['attr']('data-username', _0x54b147);
                }
            });
        }
        function _0x393935(_0x4a05a1) {
            const _0x386cae = _0x1154df;
            var _0x2f74b4 = _0x4a05a1[_0x386cae(0x172)] ?? _0x4a05a1;
            return _0x2f74b4[_0x386cae(0x140)] == null && _0x2f74b4['user'] != null && (_0x2f74b4[_0x386cae(0x140)] = _0x2f74b4[_0x386cae(0x2be)]), _0x2f74b4[_0x386cae(0x140)] == null && (_0x32f9d0(_0x386cae(0x23c), _0x386cae(0x115)), alert(_0x386cae(0x2ff))), _0x2f74b4;
        }
        async function _0x1187f8(_0x542bb5, _0x4df997, _0x3660dd) {
            const _0x13b5e0 = _0x1154df;
            try {
                _0x2283e9(_0x4df997 + '\x20a')[_0x13b5e0(0x197)](), _0x2283e9(_0x4df997)[_0x13b5e0(0x260)](_0x13b5e0(0x2ac) + _0x3660dd + '</p>');
                let _0x156618 = await _0x449717(_0x542bb5), _0x1b6d78 = _0x393935(_0x156618[_0x13b5e0(0x165)]);
                if (_0x156618[_0x13b5e0(0x32e)] === 'query_hash') {
                    let _0x490126 = 0x1;
                    _0x1b6d78[_0x13b5e0(0x238)] == _0x13b5e0(0x1ce) && _0x1b6d78[_0x13b5e0(0x22b)] && (_0x2283e9(_0x4df997)[_0x13b5e0(0x260)]('<a\x20media-id=\x22' + _0x1b6d78['id'] + _0x13b5e0(0x12a) + _0x1b6d78[_0x13b5e0(0x1fb)] + _0x13b5e0(0x169) + _0x1b6d78['shortcode'] + _0x13b5e0(0x31e) + _0x1b6d78['owner']['username'] + '\x22\x20data-globalIndex=\x22' + _0x490126 + _0x13b5e0(0x102) + _0x1b6d78['video_url'] + _0x13b5e0(0x29e) + _0x1b6d78[_0x13b5e0(0x3d1)][0x1][_0x13b5e0(0x24d)] + _0x13b5e0(0x21b) + _0x32d7df(_0x13b5e0(0x181)) + _0x13b5e0(0x349) + _0x490126 + _0x13b5e0(0x328)), _0x490126++);
                    _0x1b6d78[_0x13b5e0(0x238)] == 'GraphImage' && (_0x2283e9(_0x4df997)['append'](_0x13b5e0(0x24b) + _0x1b6d78['id'] + '\x22\x20datetime=\x22' + _0x1b6d78[_0x13b5e0(0x1fb)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x1b6d78[_0x13b5e0(0x26d)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x1b6d78[_0x13b5e0(0x140)]['username'] + _0x13b5e0(0x1a4) + _0x490126 + _0x13b5e0(0x102) + _0x1b6d78['display_resources'][_0x1b6d78[_0x13b5e0(0x3d1)][_0x13b5e0(0x2d2)] - 0x1][_0x13b5e0(0x24d)] + _0x13b5e0(0x29e) + _0x1b6d78[_0x13b5e0(0x3d1)][0x1]['src'] + _0x13b5e0(0x2e1) + _0x32d7df(_0x13b5e0(0x36a)) + '</span>\x20' + _0x490126 + '\x20-</a>'), _0x490126++);
                    if (_0x1b6d78['__typename'] == _0x13b5e0(0x310) && _0x1b6d78[_0x13b5e0(0x3a6)])
                        for (let _0x51ee8d of _0x1b6d78[_0x13b5e0(0x3a6)]['edges']) {
                            _0x51ee8d[_0x13b5e0(0x35f)][_0x13b5e0(0x238)] == _0x13b5e0(0x1ce) && _0x2283e9(_0x4df997)[_0x13b5e0(0x260)](_0x13b5e0(0x24b) + _0x51ee8d[_0x13b5e0(0x35f)]['id'] + _0x13b5e0(0x12a) + _0x1b6d78[_0x13b5e0(0x1fb)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x1b6d78[_0x13b5e0(0x26d)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x1b6d78[_0x13b5e0(0x140)][_0x13b5e0(0x177)] + '\x22\x20data-globalIndex=\x22' + _0x490126 + _0x13b5e0(0x102) + _0x51ee8d[_0x13b5e0(0x35f)][_0x13b5e0(0x22b)] + _0x13b5e0(0x29e) + _0x51ee8d[_0x13b5e0(0x35f)][_0x13b5e0(0x3d1)][0x1]['src'] + _0x13b5e0(0x104) + _0x32d7df(_0x13b5e0(0x181)) + _0x13b5e0(0x349) + _0x490126 + _0x13b5e0(0x328)), _0x51ee8d[_0x13b5e0(0x35f)][_0x13b5e0(0x238)] == _0x13b5e0(0x2e6) && _0x2283e9(_0x4df997)['append'](_0x13b5e0(0x24b) + _0x51ee8d[_0x13b5e0(0x35f)]['id'] + _0x13b5e0(0x12a) + _0x1b6d78[_0x13b5e0(0x1fb)] + _0x13b5e0(0x169) + _0x1b6d78[_0x13b5e0(0x26d)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x1b6d78[_0x13b5e0(0x140)]['username'] + '\x22\x20data-globalIndex=\x22' + _0x490126 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x51ee8d[_0x13b5e0(0x35f)][_0x13b5e0(0x3d1)][_0x51ee8d[_0x13b5e0(0x35f)][_0x13b5e0(0x3d1)][_0x13b5e0(0x2d2)] - 0x1][_0x13b5e0(0x24d)] + _0x13b5e0(0x29e) + _0x51ee8d['node'][_0x13b5e0(0x3d1)][0x1][_0x13b5e0(0x24d)] + _0x13b5e0(0x2e1) + _0x32d7df(_0x13b5e0(0x36a)) + _0x13b5e0(0x349) + _0x490126 + _0x13b5e0(0x328)), _0x490126++;
                        }
                } else {
                    if (_0x1b6d78[_0x13b5e0(0x308)])
                        _0x32f9d0('carousel_media'), _0x1b6d78[_0x13b5e0(0x308)]['forEach']((_0x5be31e, _0x2d4c23) => {
                            const _0x9a4607 = _0x13b5e0;
                            let _0x100aef = _0x2d4c23 + 0x1;
                            _0x5be31e[_0x9a4607(0x320)] == null ? (_0x5be31e[_0x9a4607(0x369)]['candidates']['sort'](function (_0x16f83f, _0xbc5f99) {
                                const _0x866f16 = _0x9a4607;
                                let _0x504b1c = new URL(_0x16f83f[_0x866f16(0x286)])[_0x866f16(0x38b)][_0x866f16(0x27e)](_0x866f16(0x393)), _0x26b2fb = new URL(_0xbc5f99[_0x866f16(0x286)])[_0x866f16(0x38b)]['get']('stp');
                                if (_0x504b1c && _0x26b2fb) {
                                    if (_0x504b1c[_0x866f16(0x2d2)] > _0x26b2fb[_0x866f16(0x2d2)])
                                        return 0x1;
                                    if (_0x504b1c[_0x866f16(0x2d2)] < _0x26b2fb[_0x866f16(0x2d2)])
                                        return -0x1;
                                } else {
                                    if (_0x16f83f[_0x866f16(0x38f)] < _0xbc5f99[_0x866f16(0x38f)])
                                        return 0x1;
                                    if (_0x16f83f[_0x866f16(0x38f)] > _0xbc5f99['width'])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x2283e9(_0x4df997)[_0x9a4607(0x260)]('<a\x20media-id=\x22' + _0x5be31e['pk'] + _0x9a4607(0x12a) + _0x5be31e[_0x9a4607(0x144)] + _0x9a4607(0x169) + _0x1b6d78[_0x9a4607(0x24c)] + _0x9a4607(0x118) + _0x1b6d78[_0x9a4607(0x140)][_0x9a4607(0x177)] + _0x9a4607(0x1a4) + _0x100aef + _0x9a4607(0x102) + _0x5be31e['image_versions2'][_0x9a4607(0x2e3)][0x0]['url'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5be31e[_0x9a4607(0x369)][_0x9a4607(0x2e3)][0x0][_0x9a4607(0x286)] + _0x9a4607(0x2e1) + _0x32d7df(_0x9a4607(0x36a)) + _0x9a4607(0x349) + _0x100aef + _0x9a4607(0x328))) : _0x2283e9(_0x4df997)['append'](_0x9a4607(0x24b) + _0x5be31e['pk'] + _0x9a4607(0x12a) + _0x5be31e['taken_at'] + _0x9a4607(0x169) + _0x1b6d78[_0x9a4607(0x24c)] + _0x9a4607(0x31e) + _0x1b6d78['owner'][_0x9a4607(0x177)] + _0x9a4607(0x1a4) + _0x100aef + _0x9a4607(0x102) + _0x5be31e['video_versions'][0x0][_0x9a4607(0x286)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x5be31e[_0x9a4607(0x369)]['candidates'][0x0][_0x9a4607(0x286)] + _0x9a4607(0x21b) + _0x32d7df(_0x9a4607(0x181)) + _0x9a4607(0x349) + _0x100aef + '\x20-</a>');
                        });
                    else {
                        let _0x389f54 = 0x1;
                        _0x1b6d78[_0x13b5e0(0x320)] == null ? (_0x1b6d78['image_versions2'][_0x13b5e0(0x2e3)][_0x13b5e0(0x210)](function (_0x170e96, _0x430467) {
                            const _0x3f3b9a = _0x13b5e0;
                            let _0x20c7c0 = new URL(_0x170e96[_0x3f3b9a(0x286)])[_0x3f3b9a(0x38b)]['get']('stp'), _0x2dc815 = new URL(_0x430467[_0x3f3b9a(0x286)])[_0x3f3b9a(0x38b)]['get'](_0x3f3b9a(0x393));
                            if (_0x20c7c0 && _0x2dc815) {
                                if (_0x20c7c0[_0x3f3b9a(0x2d2)] > _0x2dc815[_0x3f3b9a(0x2d2)])
                                    return 0x1;
                                if (_0x20c7c0[_0x3f3b9a(0x2d2)] < _0x2dc815['length'])
                                    return -0x1;
                            } else {
                                if (_0x170e96[_0x3f3b9a(0x38f)] < _0x430467[_0x3f3b9a(0x38f)])
                                    return 0x1;
                                if (_0x170e96[_0x3f3b9a(0x38f)] > _0x430467[_0x3f3b9a(0x38f)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x2283e9(_0x4df997)[_0x13b5e0(0x260)](_0x13b5e0(0x24b) + _0x1b6d78['pk'] + _0x13b5e0(0x12a) + _0x1b6d78[_0x13b5e0(0x144)] + _0x13b5e0(0x169) + _0x1b6d78['code'] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x1b6d78[_0x13b5e0(0x140)][_0x13b5e0(0x177)] + _0x13b5e0(0x1a4) + _0x389f54 + _0x13b5e0(0x102) + _0x1b6d78['image_versions2']['candidates'][0x0][_0x13b5e0(0x286)] + _0x13b5e0(0x29e) + _0x1b6d78[_0x13b5e0(0x369)][_0x13b5e0(0x2e3)][0x0]['url'] + _0x13b5e0(0x2e1) + _0x32d7df(_0x13b5e0(0x36a)) + _0x13b5e0(0x349) + _0x389f54 + _0x13b5e0(0x328))) : _0x2283e9(_0x4df997)[_0x13b5e0(0x260)](_0x13b5e0(0x24b) + _0x1b6d78['pk'] + '\x22\x20datetime=\x22' + _0x1b6d78['taken_at'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x1b6d78[_0x13b5e0(0x24c)] + _0x13b5e0(0x31e) + _0x1b6d78[_0x13b5e0(0x140)][_0x13b5e0(0x177)] + '\x22\x20data-globalIndex=\x22' + _0x389f54 + _0x13b5e0(0x102) + _0x1b6d78[_0x13b5e0(0x320)][0x0][_0x13b5e0(0x286)] + _0x13b5e0(0x29e) + _0x1b6d78[_0x13b5e0(0x369)][_0x13b5e0(0x2e3)][0x0][_0x13b5e0(0x286)] + _0x13b5e0(0x21b) + _0x32d7df(_0x13b5e0(0x181)) + '</span>\x20' + _0x389f54 + _0x13b5e0(0x328));
                    }
                }
                _0x2283e9(_0x13b5e0(0x258))[_0x13b5e0(0x197)](), _0x2283e9(_0x13b5e0(0x1e0))['each'](function () {
                    const _0x57ba00 = _0x13b5e0;
                    _0x2283e9(this)[_0x57ba00(0x12c)](_0x57ba00(0x112)), _0x2283e9(this)[_0x57ba00(0x1bb)](_0x57ba00(0x311)), _0x2283e9(this)[_0x57ba00(0x348)](_0x57ba00(0x370) + _0x32d7df(_0x57ba00(0x2b6)) + _0x57ba00(0x213) + _0x549145[_0x57ba00(0x2b6)] + _0x57ba00(0x275)), _0x2283e9(this)[_0x57ba00(0x3ca)](_0x57ba00(0x1dd)) == _0x57ba00(0x366) && _0x2283e9(this)[_0x57ba00(0x348)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x32d7df(_0x57ba00(0x35c)) + _0x57ba00(0x282) + _0x549145[_0x57ba00(0x390)] + _0x57ba00(0x275));
                });
            } catch (_0x1af6e7) {
                _0x32f9d0('createMediaListDOM', _0x1af6e7);
            }
            ;
        }
        function _0xd1b035(_0x255604) {
            const _0x588a61 = _0x1154df;
            var _0x81c130 = 0x0, _0x7f106a = _0x255604['find'](_0x588a61(0x313));
            return (_0x7f106a == null || !_0x7f106a[_0x588a61(0x121)](_0x588a61(0x3a4))) && (_0x7f106a = _0x255604[_0x588a61(0x1df)]('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)[_0x588a61(0x178)]('div')), _0x7f106a[_0x588a61(0x1eb)](_0x588a61(0x2cc))[_0x588a61(0x206)](function (_0x554783) {
                const _0x43681e = _0x588a61;
                _0x2283e9(this)[_0x43681e(0x121)](_0x43681e(0x35a)) && (_0x81c130 = _0x554783);
            }), _0x81c130;
        }
        async function _0x546396(_0x3aebe8) {
            const _0x2693ff = _0x1154df;
            if (_0x3aebe8) {
                _0x5502da(!![]);
                let _0x50f2b5 = new Date()[_0x2693ff(0x10c)](), _0x38ac19 = Math['floor'](_0x50f2b5 / 0x3e8), _0x2e79e9 = location[_0x2693ff(0x2bc)][_0x2693ff(0x223)](/(reels|tagged)\/$/ig, '')[_0x2693ff(0x2cf)]('/')['filter'](_0xa69376 => _0xa69376['length'] > 0x0)['at'](-0x1), _0x143de3 = await _0x179648(_0x2e79e9);
                try {
                    let _0x50b0b3 = await _0x1e4630(_0x143de3[_0x2693ff(0x2be)]['pk']);
                    _0x2f4df2(_0x50b0b3, _0x2e79e9, _0x2693ff(0x189), _0x38ac19, _0x2693ff(0x16b));
                } catch (_0x5dcf98) {
                    _0x2f4df2(_0x143de3[_0x2693ff(0x2be)][_0x2693ff(0x344)], _0x2e79e9, _0x2693ff(0x189), _0x38ac19, _0x2693ff(0x16b));
                }
                _0x5502da(![]);
            } else {
                if (!_0x2283e9('.IG_DWPROFILE')['length']) {
                    let _0x2f5d59 = setInterval(() => {
                        const _0x4832a5 = _0x2693ff;
                        if (_0x2283e9(_0x4832a5(0x2d1))['length']) {
                            clearInterval(_0x2f5d59);
                            return;
                        }
                        _0x2283e9(_0x4832a5(0x215))[_0x4832a5(0x3c1)]()[_0x4832a5(0x3c1)]()[_0x4832a5(0x260)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x32d7df('DW') + _0x4832a5(0x239) + _0x549145['DOWNLOAD'] + _0x4832a5(0x275)), _0x2283e9('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')[_0x4832a5(0x3c1)]()['parent']()[_0x4832a5(0x3c3)]('position', _0x4832a5(0x314)), _0x2283e9('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')['parent']()[_0x4832a5(0x3c1)]()[_0x4832a5(0x3c1)]()[_0x4832a5(0x260)](_0x4832a5(0x27f) + _0x32d7df('DW') + _0x4832a5(0x239) + _0x549145['DOWNLOAD'] + '</div>'), _0x2283e9('header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])')[_0x4832a5(0x3c1)]()[_0x4832a5(0x3c1)]()[_0x4832a5(0x3c1)]()[_0x4832a5(0x3c3)]('position', _0x4832a5(0x314));
                    }, 0x96);
                }
            }
        }
        async function _0x50fb08(_0x270b06, _0x4b1a17, _0x3b8330) {
            const _0x407ab1 = _0x1154df;
            if (_0x270b06) {
                _0x5502da(!![]);
                let _0x4e8fc8 = location[_0x407ab1(0x151)]['split']('?')['at'](0x0)[_0x407ab1(0x2cf)](_0x407ab1(0x34d))['at'](-0x1)['replaceAll']('/', ''), _0x44795c = await _0x449717(_0x4e8fc8), _0x5acee9 = _0x393935(_0x44795c['data']), _0x47f52f = new Date()[_0x407ab1(0x10c)]();
                _0xacfdce['RENAME_PUBLISH_DATE'] && (_0x44795c['type'] === _0x407ab1(0x38d) ? _0x47f52f = _0x5acee9['shortcode_media'][_0x407ab1(0x1fb)] : _0x47f52f = _0x5acee9[_0x407ab1(0x144)]);
                if (_0x44795c[_0x407ab1(0x32e)] === _0x407ab1(0x38d)) {
                    if (_0x4b1a17 && _0x5acee9['shortcode_media'][_0x407ab1(0x23f)]) {
                        if (_0x3b8330)
                            _0x32e483(_0x5acee9[_0x407ab1(0x172)][_0x407ab1(0x22b)]);
                        else {
                            let _0x38fb01 = 'mp4';
                            _0x2f4df2(_0x5acee9[_0x407ab1(0x172)][_0x407ab1(0x22b)], _0x5acee9[_0x407ab1(0x172)][_0x407ab1(0x140)][_0x407ab1(0x177)], _0x407ab1(0x179), _0x47f52f, _0x38fb01, _0x4e8fc8);
                        }
                    } else {
                        if (_0x3b8330)
                            _0x32e483(_0x5acee9['shortcode_media'][_0x407ab1(0x3d1)]['at'](-0x1)['src']);
                        else {
                            let _0x159691 = _0x407ab1(0x16b);
                            _0x2f4df2(_0x5acee9[_0x407ab1(0x172)][_0x407ab1(0x3d1)]['at'](-0x1)[_0x407ab1(0x24d)], _0x5acee9['shortcode_media'][_0x407ab1(0x140)][_0x407ab1(0x177)], _0x407ab1(0x179), _0x47f52f, _0x159691, _0x4e8fc8);
                        }
                    }
                } else {
                    if (_0x4b1a17 && _0x5acee9[_0x407ab1(0x320)] != null) {
                        if (_0x3b8330)
                            _0x32e483(_0x5acee9[_0x407ab1(0x320)][0x0][_0x407ab1(0x286)]);
                        else {
                            let _0x3c0c7c = 'mp4';
                            _0x2f4df2(_0x5acee9[_0x407ab1(0x320)][0x0]['url'], _0x5acee9['owner'][_0x407ab1(0x177)], _0x407ab1(0x179), _0x47f52f, _0x3c0c7c, _0x4e8fc8);
                        }
                    } else {
                        if (_0x3b8330)
                            _0x32e483(_0x5acee9[_0x407ab1(0x369)]['candidates'][0x0][_0x407ab1(0x286)]);
                        else {
                            let _0x1c2012 = _0x407ab1(0x16b);
                            _0x2f4df2(_0x5acee9['image_versions2'][_0x407ab1(0x2e3)][0x0][_0x407ab1(0x286)], _0x5acee9['owner'][_0x407ab1(0x177)], _0x407ab1(0x179), _0x47f52f, _0x1c2012, _0x4e8fc8);
                        }
                    }
                }
                _0x5502da(![]);
            } else
                var _0x1f8400 = setInterval(() => {
                    const _0x22e4c1 = _0x407ab1;
                    _0x2283e9('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')[_0x22e4c1(0x2d2)] > 0x0 && (clearInterval(_0x1f8400), _0xacfdce[_0x22e4c1(0x174)] && (_0x2283e9(_0x22e4c1(0x18f))[_0x22e4c1(0x197)](), _0x2283e9(_0x22e4c1(0x208))['append'](_0x22e4c1(0x2c4)), _0x2283e9('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')[_0x22e4c1(0x260)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x2283e9(_0x22e4c1(0x34e))[_0x22e4c1(0x260)](_0x22e4c1(0x32b)), _0x2283e9(_0x22e4c1(0x221))['on'](_0x22e4c1(0x1b5), function () {
                        const _0x193de3 = _0x22e4c1;
                        _0x2283e9('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x193de3(0x256)]({
                            'top': -0x1e,
                            'behavior': _0x193de3(0x309)
                        });
                    }), _0x2283e9('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0x22e4c1(0x1b5), function () {
                        const _0x22c9f1 = _0x22e4c1;
                        _0x2283e9(_0x22c9f1(0x269))[0x0][_0x22c9f1(0x256)]({
                            'top': 0x1e,
                            'behavior': _0x22c9f1(0x309)
                        });
                    })), _0x2283e9(_0x22e4c1(0x3ae))[_0x22e4c1(0x178)](_0x22e4c1(0x1ab))[_0x22e4c1(0x206)](function () {
                        const _0x233a41 = _0x22e4c1;
                        if (_0x2283e9(this)[_0x233a41(0x178)]()[_0x233a41(0x2d2)] > 0x0) {
                            if (!_0x2283e9(this)[_0x233a41(0x178)]()[_0x233a41(0x1df)](_0x233a41(0x2ab))[_0x233a41(0x2d2)]) {
                                var _0x40a1a9 = _0x2283e9(this);
                                _0x2283e9(this)[_0x233a41(0x178)]()[_0x233a41(0x3c3)]('position', _0x233a41(0x314)), _0x2283e9(this)[_0x233a41(0x178)]()[_0x233a41(0x260)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x32d7df('DW') + _0x233a41(0x29a) + _0x549145[_0x233a41(0x3ce)] + '</div>'), _0x2283e9(this)[_0x233a41(0x178)]()[_0x233a41(0x260)](_0x233a41(0x370) + _0x32d7df(_0x233a41(0x2b6)) + _0x233a41(0x1f0) + _0x549145['NEW_TAB'] + _0x233a41(0x275)), _0x2283e9(this)[_0x233a41(0x178)]()[_0x233a41(0x260)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x32d7df(_0x233a41(0x35c)) + _0x233a41(0x371) + _0x549145[_0x233a41(0x390)] + _0x233a41(0x275));
                                _0xacfdce['DISABLE_VIDEO_LOOPING'] && _0x2283e9(this)[_0x233a41(0x1df)](_0x233a41(0x366))['each'](function () {
                                    _0x2283e9(this)['on']('ended', function () {
                                        const _0x2a67bc = a0_0x47e8;
                                        if (!_0x2283e9(this)[_0x2a67bc(0x165)](_0x2a67bc(0x220))) {
                                            let _0x4e0115 = _0x2283e9(this)['next']()['find'](_0x2a67bc(0x341))[_0x2a67bc(0x1b3)](_0x2a67bc(0x293));
                                            _0x4e0115[_0x2a67bc(0x2d2)] > 0x0 ? (_0x2283e9(this)['attr']('data-loop', !![]), _0x4e0115['trigger']('click'), _0x32f9d0(_0x2a67bc(0x326))) : (_0x2283e9(this)[_0x2a67bc(0x3ca)]('data-loop', !![]), _0x2283e9(this)[_0x2a67bc(0x3c1)]()['find'](_0x2a67bc(0x180))[_0x2a67bc(0x14f)]('style'), this[_0x2a67bc(0x2b7)](), _0x32f9d0('Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()'));
                                        }
                                    });
                                });
                                _0xacfdce[_0x233a41(0x2d4)] && _0x2283e9(this)[_0x233a41(0x1df)]('video')[_0x233a41(0x206)](function () {
                                    const _0x46a678 = _0x233a41;
                                    if (!_0x2283e9(this)[_0x46a678(0x165)](_0x46a678(0x356))) {
                                        let _0xe6b220 = _0x2283e9(this);
                                        _0x32f9d0(_0x46a678(0x114)), _0xacfdce[_0x46a678(0x3cb)] && (this[_0x46a678(0x28a)] = _0x33d3f7[_0x46a678(0x1ac)], _0x2283e9(this)['on'](_0x46a678(0x15b), function () {
                                            const _0x5a7750 = _0x46a678;
                                            this[_0x5a7750(0x28a)] = _0x33d3f7[_0x5a7750(0x1ac)];
                                        })), _0x2283e9(this)['on'](_0x46a678(0x1da), function (_0xca3ad9) {
                                            const _0x4fb077 = _0x46a678;
                                            _0xca3ad9[_0x4fb077(0x113)](), _0xe6b220[_0x4fb077(0x3c3)](_0x4fb077(0x1c0), '-1'), _0xe6b220[_0x4fb077(0x14f)](_0x4fb077(0x356));
                                        }), _0x2283e9(this)[_0x46a678(0x3c1)]()[_0x46a678(0x1df)](_0x46a678(0x33d))[_0x46a678(0x1eb)](function () {
                                            const _0x5ecd0f = _0x46a678;
                                            return _0x2283e9(this)[_0x5ecd0f(0x3c1)](_0x5ecd0f(0x17c))[_0x5ecd0f(0x2d2)] > 0x0 && _0x2283e9(this)[_0x5ecd0f(0x3c3)](_0x5ecd0f(0x108)) === _0x5ecd0f(0x162) && _0x2283e9(this)[_0x5ecd0f(0x3ca)]('style') != null;
                                        })[_0x46a678(0x2e7)]()['on'](_0x46a678(0x1da), function (_0x26aa60) {
                                            const _0xb6214e = _0x46a678;
                                            _0x26aa60['preventDefault'](), _0xe6b220[_0xb6214e(0x3c3)](_0xb6214e(0x1c0), '2'), _0xe6b220[_0xb6214e(0x3ca)](_0xb6214e(0x356), !![]);
                                        }), _0x2283e9(this)['on'](_0x46a678(0x148), function () {
                                            const _0x49a7a4 = _0x46a678;
                                            let _0x30bd0e = _0x2283e9(this)[_0x49a7a4(0x3c1)]()[_0x49a7a4(0x1df)]('video\x20+\x20div\x20>\x20div')['find']('button[type=\x22button\x22],\x20div[role=\x22button\x22]')['filter'](function (_0x23b751) {
                                                const _0x14fe15 = _0x49a7a4;
                                                return _0x2283e9(this)[_0x14fe15(0x38f)]() <= 0x40 && _0x2283e9(this)[_0x14fe15(0x235)]() <= 0x40 && _0x2283e9(this)[_0x14fe15(0x1df)](_0x14fe15(0x331))[_0x14fe15(0x2d2)] > 0x0;
                                            });
                                            var _0x17e539 = _0x30bd0e[_0x49a7a4(0x1df)]('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0x49a7a4(0x2d2)] === 0x0;
                                            this[_0x49a7a4(0x242)] != _0x17e539 && (this['volume'] = _0x33d3f7[_0x49a7a4(0x1ac)], _0x30bd0e?.[_0x49a7a4(0x1b4)](_0x49a7a4(0x1b5))), _0x2283e9(this)[_0x49a7a4(0x3ca)](_0x49a7a4(0x30a)) && (_0x33d3f7[_0x49a7a4(0x1ac)] = this[_0x49a7a4(0x28a)], GM_setValue(_0x49a7a4(0x384), this[_0x49a7a4(0x28a)])), this['volume'] == _0x33d3f7[_0x49a7a4(0x1ac)] && _0x2283e9(this)[_0x49a7a4(0x3ca)](_0x49a7a4(0x30a), !![]);
                                        }), _0x2283e9(this)[_0x46a678(0x3c3)](_0x46a678(0x1f2), 'absolute'), _0x2283e9(this)[_0x46a678(0x3c3)](_0x46a678(0x1c0), '2'), _0x2283e9(this)[_0x46a678(0x3ca)]('data-controls', !![]), _0x2283e9(this)['attr'](_0x46a678(0x356), !![]);
                                    }
                                });
                                var _0x34b852 = _0x40a1a9['find'](_0x233a41(0x366)), _0x1ebb37 = _0x2283e9(this)['find'](_0x233a41(0x187))[_0x233a41(0x2e7)]();
                                _0x3bfd65(_0x34b852, _0x1ebb37, _0x233a41(0x32f));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x206ba9(_0x19d880, _0x1ff9ee) {
            const _0x1fa28c = _0x1154df;
            try {
                _0x2283e9(_0x1fa28c(0x214))[_0x1fa28c(0x3ab)](_0x1ff9ee + _0x1fa28c(0xfa) + _0x19d880['data']['reels_media'][0x0]['id']);
                const _0x4ca610 = '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY';
                _0x19d880[_0x1fa28c(0x165)]['reels_media'][0x0][_0x1fa28c(0x2dd)]['forEach']((_0x2eb928, _0x4d3af3) => {
                    const _0x165f71 = _0x1fa28c;
                    let _0x351bb1 = new Date()[_0x165f71(0x10c)](), _0x4ee484 = Math[_0x165f71(0x33c)](_0x351bb1 / 0x3e8), _0x432f55 = _0x19d880['data'][_0x165f71(0x318)][0x0]?.[_0x165f71(0x2be)]?.['username'] || _0x19d880[_0x165f71(0x165)][_0x165f71(0x318)][0x0]?.[_0x165f71(0x140)]?.[_0x165f71(0x177)];
                    _0xacfdce[_0x165f71(0x34f)] && (_0x4ee484 = _0x2eb928[_0x165f71(0x1fb)]), _0x2eb928[_0x165f71(0x3d1)][_0x165f71(0x210)](function (_0xef2c60, _0x2aad68) {
                        const _0x44dc69 = _0x165f71;
                        if (_0xef2c60['config_width'] < _0x2aad68[_0x44dc69(0x188)])
                            return 0x1;
                        if (_0xef2c60[_0x44dc69(0x188)] > _0x2aad68[_0x44dc69(0x188)])
                            return -0x1;
                        return 0x0;
                    }), _0x2eb928[_0x165f71(0x23f)] ? _0x2283e9(_0x4ca610)['append']('<a\x20media-id=\x22' + _0x2eb928['id'] + _0x165f71(0x12a) + _0x4ee484 + _0x165f71(0x25a) + _0x1ff9ee + _0x165f71(0x252) + _0x432f55 + _0x165f71(0x382) + _0x2eb928['id'] + _0x165f71(0x1a4) + (_0x4d3af3 + 0x1) + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x2eb928[_0x165f71(0x11e)][0x0][_0x165f71(0x24d)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2eb928[_0x165f71(0x3d1)][0x0]['src'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>' + _0x32d7df('VID') + _0x165f71(0x349) + _0x4d3af3 + _0x165f71(0x328)) : _0x2283e9(_0x4ca610)[_0x165f71(0x260)](_0x165f71(0x24b) + _0x2eb928['id'] + _0x165f71(0x12a) + _0x4ee484 + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-name=\x22' + _0x1ff9ee + _0x165f71(0x30e) + _0x432f55 + _0x165f71(0x382) + _0x2eb928['id'] + _0x165f71(0x1a4) + (_0x4d3af3 + 0x1) + _0x165f71(0x102) + _0x2eb928[_0x165f71(0x3d1)][0x0]['src'] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x2eb928[_0x165f71(0x3d1)][0x0][_0x165f71(0x24d)] + _0x165f71(0x28d) + _0x32d7df(_0x165f71(0x36a)) + '</span>\x20' + _0x4d3af3 + _0x165f71(0x328));
                }), _0x2283e9(_0x1fa28c(0x1e0))['each'](function () {
                    const _0x37a76f = _0x1fa28c;
                    _0x2283e9(this)['wrap']('<div></div>'), _0x2283e9(this)[_0x37a76f(0x1bb)](_0x37a76f(0x311)), _0x2283e9(this)[_0x37a76f(0x348)](_0x37a76f(0x370) + _0x32d7df(_0x37a76f(0x2b6)) + '\x22\x20class=\x22newTab\x22>' + _0x549145[_0x37a76f(0x2b6)] + '</div>'), _0x2283e9(this)['attr'](_0x37a76f(0x2d7)) == _0x37a76f(0x1bc) && _0x2283e9(this)['after'](_0x37a76f(0x216) + _0x32d7df('THUMBNAIL_INTRO') + '\x22\x20class=\x22videoThumbnail\x22>' + _0x549145[_0x37a76f(0x390)] + _0x37a76f(0x275));
                }), _0x5502da(![]);
            } catch (_0x4bac5b) {
                console[_0x1fa28c(0x29d)](_0x1fa28c(0x1d2), _0x4bac5b);
            }
        }
        async function _0x2538e9() {
            const _0x558be5 = _0x1154df;
            _0x5502da(!![]);
            let _0x4efa3a = new Date()[_0x558be5(0x10c)](), _0x40f3e8 = Math[_0x558be5(0x33c)](_0x4efa3a / 0x3e8), _0x5ea4ee = _0x2283e9(_0x558be5(0x1cb))[_0x558be5(0x2e7)]()['text']() || location[_0x558be5(0x2bc)][_0x558be5(0x2cf)]('/')[_0x558be5(0x1eb)](_0x124beb => _0x124beb[_0x558be5(0x2d2)] > 0x0)['at'](0x1), _0x522ce9 = await _0x179648(_0x5ea4ee), _0x2ba713 = _0x522ce9[_0x558be5(0x2be)]['pk'], _0x531234 = await _0x128627(_0x2ba713);
            if (_0xacfdce[_0x558be5(0x31f)]) {
                let _0x2f780d = 0x0;
                _0xa5e9ff(_0x2f780d, _0x531234[_0x558be5(0x165)][_0x558be5(0x318)][0x0][_0x558be5(0x2dd)][_0x558be5(0x2d2)]), _0x531234['data'][_0x558be5(0x318)][0x0][_0x558be5(0x2dd)][_0x558be5(0x373)]((_0x59dedd, _0x336315) => {
                    setTimeout(() => {
                        const _0x1514a1 = a0_0x47e8;
                        _0xacfdce[_0x1514a1(0x34f)] && (_0x40f3e8 = _0x59dedd['taken_at_timestamp']), _0x59dedd[_0x1514a1(0x3d1)][_0x1514a1(0x210)](function (_0x6a7068, _0x38e708) {
                            const _0x55487a = _0x1514a1;
                            if (_0x6a7068['config_width'] < _0x38e708[_0x55487a(0x188)])
                                return 0x1;
                            if (_0x6a7068[_0x55487a(0x188)] > _0x38e708[_0x55487a(0x188)])
                                return -0x1;
                            return 0x0;
                        }), _0x59dedd[_0x1514a1(0x23f)] ? _0x2f4df2(_0x59dedd[_0x1514a1(0x11e)][0x0]['src'], _0x5ea4ee, 'stories', _0x40f3e8, _0x1514a1(0x1bc), _0x59dedd['id'])[_0x1514a1(0x158)](() => {
                            const _0x47dfe6 = _0x1514a1;
                            _0xa5e9ff(++_0x2f780d, _0x531234[_0x47dfe6(0x165)][_0x47dfe6(0x318)][0x0][_0x47dfe6(0x2dd)][_0x47dfe6(0x2d2)]);
                        }) : _0x2f4df2(_0x59dedd[_0x1514a1(0x3d1)][0x0][_0x1514a1(0x24d)], _0x5ea4ee, _0x1514a1(0x191), _0x40f3e8, _0x1514a1(0x16b), _0x59dedd['id'])['then'](() => {
                            const _0xe8d7c0 = _0x1514a1;
                            _0xa5e9ff(++_0x2f780d, _0x531234[_0xe8d7c0(0x165)][_0xe8d7c0(0x318)][0x0][_0xe8d7c0(0x2dd)][_0xe8d7c0(0x2d2)]);
                        });
                    }, 0x64 * _0x336315);
                });
            } else
                _0x461a6a(![], !![]), _0x206ba9(_0x531234, _0x558be5(0x191));
        }
        async function _0x1ccfdd(_0x5eb977, _0x1f49a8, _0x25efe9) {
            const _0xe7a6ee = _0x1154df;
            var _0x517fb5 = _0x2283e9(_0xe7a6ee(0x1cb))[_0xe7a6ee(0x2e7)]()[_0xe7a6ee(0x3ab)]() || location[_0xe7a6ee(0x2bc)][_0xe7a6ee(0x2cf)]('/')['filter'](_0x528752 => _0x528752['length'] > 0x0)['at'](0x1);
            if (_0x5eb977) {
                let _0xe8cf43 = new Date()[_0xe7a6ee(0x10c)](), _0x5de4b2 = Math[_0xe7a6ee(0x33c)](_0xe8cf43 / 0x3e8);
                _0x5502da(!![]);
                if (_0xacfdce['FORCE_RESOURCE_VIA_MEDIA'] && !_0x33d3f7[_0xe7a6ee(0x398)]) {
                    let _0x3b7641 = null, _0x43e58d = await _0x179648(_0x517fb5), _0xc74869 = _0x43e58d[_0xe7a6ee(0x2be)]['pk'], _0x18e5c3 = await _0x128627(_0xc74869), _0x548ceb = location[_0xe7a6ee(0x2bc)]['split']('/')[_0xe7a6ee(0x1eb)](_0x56e785 => _0x56e785[_0xe7a6ee(0x2d2)] > 0x0 && _0x56e785[_0xe7a6ee(0x353)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x18e5c3[_0xe7a6ee(0x165)][_0xe7a6ee(0x318)][0x0][_0xe7a6ee(0x2dd)][_0xe7a6ee(0x373)](_0x13bf8c => {
                        _0x13bf8c['id'] == _0x548ceb && (_0x3b7641 = _0x13bf8c['id']);
                    });
                    if (_0x3b7641 == null) {
                        let _0x57d3c2 = _0x3e0fa8(_0x517fb5);
                        _0x57d3c2[_0xe7a6ee(0x206)](function (_0x1cf9ac) {
                            const _0x3e9ed1 = _0xe7a6ee;
                            _0x2283e9(this)['children']()['length'] > 0x0 && (_0x3b7641 = _0x18e5c3[_0x3e9ed1(0x165)][_0x3e9ed1(0x318)][0x0][_0x3e9ed1(0x2dd)][_0x1cf9ac]['id']);
                        });
                    }
                    _0x3b7641 == null && (_0x2283e9(_0xe7a6ee(0x207))[_0xe7a6ee(0x206)](function (_0xeb3b47) {
                        const _0x1a8395 = _0xe7a6ee;
                        _0x2283e9(this)[_0x1a8395(0x121)](_0x1a8395(0x37b)) && (_0x2283e9(this)['children']()['length'] > 0x0 && (_0x3b7641 = _0x18e5c3[_0x1a8395(0x165)][_0x1a8395(0x318)][0x0]['items'][_0xeb3b47]['id']));
                    }), _0x2283e9(_0xe7a6ee(0x1ee))[_0xe7a6ee(0x206)](function (_0x330b32) {
                        const _0x3bb9e2 = _0xe7a6ee;
                        _0x2283e9(this)[_0x3bb9e2(0x178)]()[_0x3bb9e2(0x121)](_0x3bb9e2(0x205)) && (_0x3b7641 = _0x18e5c3[_0x3bb9e2(0x165)][_0x3bb9e2(0x318)][0x0][_0x3bb9e2(0x2dd)][_0x330b32]['id']);
                    }));
                    _0x3b7641 == null && (_0x3b7641 = location['pathname'][_0xe7a6ee(0x2cf)]('/')['filter'](_0xc8ac06 => _0xc8ac06[_0xe7a6ee(0x2d2)] > 0x0 && _0xc8ac06['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x2757f4 = await _0x814705(_0x3b7641);
                    _0xacfdce[_0xe7a6ee(0x34f)] && (_0x5de4b2 = _0x2757f4[_0xe7a6ee(0x2dd)][0x0][_0xe7a6ee(0x144)]);
                    _0x2757f4[_0xe7a6ee(0x2a3)] === 'ok' ? _0x2757f4['items'][0x0]['video_versions'] ? _0x25efe9 ? _0x32e483(_0x2757f4['items'][0x0][_0xe7a6ee(0x320)][0x0][_0xe7a6ee(0x286)]) : _0x2f4df2(_0x2757f4['items'][0x0]['video_versions'][0x0][_0xe7a6ee(0x286)], _0x517fb5, 'stories', _0x5de4b2, 'mp4', _0x3b7641) : _0x25efe9 ? _0x32e483(_0x2757f4['items'][0x0][_0xe7a6ee(0x369)][_0xe7a6ee(0x2e3)][0x0][_0xe7a6ee(0x286)]) : _0x2f4df2(_0x2757f4[_0xe7a6ee(0x2dd)][0x0][_0xe7a6ee(0x369)][_0xe7a6ee(0x2e3)][0x0][_0xe7a6ee(0x286)], _0x517fb5, _0xe7a6ee(0x191), _0x5de4b2, _0xe7a6ee(0x16b), _0x3b7641) : (_0xacfdce[_0xe7a6ee(0x31c)] ? (_0x33d3f7[_0xe7a6ee(0x398)] = !![], _0x1ccfdd(_0x5eb977, _0x1f49a8, _0x25efe9)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x2757f4[_0xe7a6ee(0x141)]), _0x32f9d0(_0x2757f4));
                    _0x5502da(![]);
                    return;
                }
                if (_0x2283e9(_0xe7a6ee(0x2e9))[_0xe7a6ee(0x2d2)] > 0x0) {
                    let _0x509550 = _0xe7a6ee(0x1bc), _0x32c562 = '', _0x12c7dc = location[_0xe7a6ee(0x2bc)][_0xe7a6ee(0x10d)](/\/$/ig, '')[_0xe7a6ee(0x2cf)]('/')['at'](-0x1), _0x1d6bb0 = null;
                    if (_0x33d3f7['GL_dataCache'][_0xe7a6ee(0x191)][_0x517fb5] && !_0x1f49a8) {
                        _0x32f9d0('Fetch\x20from\x20memory\x20cache:', _0x517fb5), _0x33d3f7[_0xe7a6ee(0x29f)][_0xe7a6ee(0x191)][_0x517fb5][_0xe7a6ee(0x165)][_0xe7a6ee(0x318)][0x0]['items'][_0xe7a6ee(0x373)](_0x3f1b09 => {
                            const _0x4c2e68 = _0xe7a6ee;
                            _0x3f1b09['id'] == _0x12c7dc && (_0x32c562 = _0x3f1b09[_0x4c2e68(0x11e)][0x0][_0x4c2e68(0x24d)], _0xacfdce[_0x4c2e68(0x34f)] && (_0x5de4b2 = _0x3f1b09['taken_at_timestamp'], _0x1d6bb0 = _0x3f1b09['id']));
                        });
                        if (_0x32c562[_0xe7a6ee(0x2d2)] == 0x0) {
                            _0x32f9d0(_0xe7a6ee(0x24e), _0x517fb5), _0x1ccfdd(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x3b053 = await _0x179648(_0x517fb5), _0x274938 = _0x3b053['user']['pk'], _0x33ce6e = await _0x128627(_0x274938);
                        _0x33ce6e[_0xe7a6ee(0x165)][_0xe7a6ee(0x318)][0x0][_0xe7a6ee(0x2dd)][_0xe7a6ee(0x373)](_0x4f7311 => {
                            const _0x5b93b1 = _0xe7a6ee;
                            _0x4f7311['id'] == _0x12c7dc && (_0x32c562 = _0x4f7311[_0x5b93b1(0x11e)][0x0][_0x5b93b1(0x24d)], _0xacfdce[_0x5b93b1(0x34f)] && (_0x5de4b2 = _0x4f7311[_0x5b93b1(0x1fb)], _0x1d6bb0 = _0x4f7311['id']));
                        });
                        if (_0x32c562[_0xe7a6ee(0x2d2)] == 0x0) {
                            let _0x395d59 = _0x3e0fa8(_0x517fb5);
                            _0x395d59[_0xe7a6ee(0x206)](function (_0x11c5a5) {
                                const _0x43ca33 = _0xe7a6ee;
                                _0x2283e9(this)[_0x43ca33(0x178)]()[_0x43ca33(0x2d2)] > 0x0 && (_0x32c562 = _0x33ce6e[_0x43ca33(0x165)]['reels_media'][0x0][_0x43ca33(0x2dd)][_0x11c5a5][_0x43ca33(0x11e)][0x0][_0x43ca33(0x24d)], _0xacfdce['RENAME_PUBLISH_DATE'] && (_0x5de4b2 = _0x33ce6e[_0x43ca33(0x165)][_0x43ca33(0x318)][0x0]['items'][_0x11c5a5]['taken_at_timestamp'], _0x1d6bb0 = _0x33ce6e[_0x43ca33(0x165)][_0x43ca33(0x318)][0x0]['items'][_0x11c5a5]['id']));
                            }), _0x32c562[_0xe7a6ee(0x2d2)] == 0x0 && (_0x2283e9('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0xe7a6ee(0x206)](function (_0xf9211f) {
                                const _0x505643 = _0xe7a6ee;
                                _0x2283e9(this)['hasClass'](_0x505643(0x37b)) && (_0x2283e9(this)[_0x505643(0x178)]()[_0x505643(0x2d2)] > 0x0 && (_0x32c562 = _0x33ce6e[_0x505643(0x165)][_0x505643(0x318)][0x0][_0x505643(0x2dd)][_0xf9211f][_0x505643(0x11e)][0x0]['src'], _0xacfdce[_0x505643(0x34f)] && (_0x5de4b2 = _0x33ce6e[_0x505643(0x165)][_0x505643(0x318)][0x0][_0x505643(0x2dd)][_0xf9211f][_0x505643(0x1fb)], _0x1d6bb0 = _0x33ce6e[_0x505643(0x165)][_0x505643(0x318)][0x0][_0x505643(0x2dd)][_0xf9211f]['id'])));
                            }), _0x2283e9(_0xe7a6ee(0x1ee))['each'](function (_0x4767af) {
                                const _0x36519a = _0xe7a6ee;
                                _0x2283e9(this)[_0x36519a(0x178)]()[_0x36519a(0x121)](_0x36519a(0x205)) && (_0x32c562 = _0x33ce6e[_0x36519a(0x165)][_0x36519a(0x318)][0x0][_0x36519a(0x2dd)][_0x4767af][_0x36519a(0x11e)][0x0]['src'], _0xacfdce[_0x36519a(0x34f)] && (_0x5de4b2 = _0x33ce6e['data'][_0x36519a(0x318)][0x0][_0x36519a(0x2dd)][_0x4767af][_0x36519a(0x1fb)], _0x1d6bb0 = _0x33ce6e[_0x36519a(0x165)][_0x36519a(0x318)][0x0]['items'][_0x4767af]['id']));
                            }));
                        }
                        _0x33d3f7['GL_dataCache'][_0xe7a6ee(0x191)][_0x517fb5] = _0x33ce6e;
                    }
                    _0x32c562['length'] == 0x0 ? alert(_0x32d7df('NO_VID_URL')) : _0x25efe9 ? _0x32e483(_0x32c562) : _0x2f4df2(_0x32c562, _0x517fb5, _0xe7a6ee(0x191), _0x5de4b2, _0x509550, _0x1d6bb0);
                } else {
                    let _0x140e8b = _0x2283e9(_0xe7a6ee(0x347))['attr'](_0xe7a6ee(0x271))?.['split'](',')[0x0]?.[_0xe7a6ee(0x2cf)]('\x20')[0x0], _0xf83071 = _0x140e8b ? _0x140e8b : _0x2283e9(_0xe7a6ee(0x347))['filter'](function () {
                            const _0x550f5a = _0xe7a6ee;
                            return _0x2283e9(this)[_0x550f5a(0x1b3)]('a')['length'] === 0x0 && _0x2283e9(this)['width']() === _0x2283e9(this)[_0x550f5a(0x3c1)]()['width']();
                        })[_0xe7a6ee(0x3ca)]('src');
                    if (!_0xf83071) {
                        let _0x26d83f = _0x2283e9(_0xe7a6ee(0x18e));
                        _0xf83071 = _0x26d83f[_0xe7a6ee(0x3ca)](_0xe7a6ee(0x271)) ? _0x26d83f[_0xe7a6ee(0x3ca)](_0xe7a6ee(0x271))?.[_0xe7a6ee(0x2cf)](',')[0x0]?.[_0xe7a6ee(0x2cf)]('\x20')[0x0] : _0x26d83f[_0xe7a6ee(0x3ca)](_0xe7a6ee(0x24d));
                    }
                    _0xacfdce[_0xe7a6ee(0x34f)] && (_0x5de4b2 = new Date(_0x2283e9(_0xe7a6ee(0x154))[_0xe7a6ee(0x2e7)]()['attr'](_0xe7a6ee(0x280)))[_0xe7a6ee(0x10c)]());
                    let _0x2745f4 = _0xf83071, _0x41f3ac = _0xe7a6ee(0x16b);
                    _0x25efe9 ? _0x32e483(_0x2745f4) : _0x2f4df2(_0x2745f4, _0x517fb5, _0xe7a6ee(0x191), _0x5de4b2, _0x41f3ac, _0x55331c(_0x2745f4) ?? '');
                }
                _0x33d3f7[_0xe7a6ee(0x398)] = ![], _0x5502da(![]);
            } else {
                if (!_0x2283e9(_0xe7a6ee(0x1e6))[_0xe7a6ee(0x2d2)]) {
                    _0x33d3f7[_0xe7a6ee(0x29f)][_0xe7a6ee(0x191)] = {};
                    let _0x427fc3 = null;
                    _0x2283e9(_0xe7a6ee(0x232))['length'] > 0x0 ? _0x427fc3 = _0x2283e9(_0xe7a6ee(0x391)) : (_0x427fc3 = _0x2283e9(_0xe7a6ee(0x224)), _0x427fc3[_0xe7a6ee(0x3c3)](_0xe7a6ee(0x1f2), _0xe7a6ee(0x314)));
                    _0x427fc3[_0xe7a6ee(0x2d2)] === 0x0 && (_0x427fc3 = _0x2283e9('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0xe7a6ee(0x3c1)]()[_0xe7a6ee(0x3c1)]()[_0xe7a6ee(0x3c1)]()[_0xe7a6ee(0x1df)](_0xe7a6ee(0x11d)), _0x427fc3[_0xe7a6ee(0x3c3)](_0xe7a6ee(0x1f2), _0xe7a6ee(0x314)));
                    _0x427fc3[_0xe7a6ee(0x2d2)] === 0x0 && (_0x427fc3 = _0x2283e9('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')['parent']()[_0xe7a6ee(0x3c1)]()[_0xe7a6ee(0x3c1)]()[_0xe7a6ee(0x1df)](_0xe7a6ee(0x12f)), _0x427fc3[_0xe7a6ee(0x3c3)](_0xe7a6ee(0x1f2), 'relative'));
                    if (_0x427fc3[_0xe7a6ee(0x2d2)] === 0x0) {
                        let _0x1425e2 = _0x2283e9('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x1352b5 = 0x0;
                        _0x1425e2[_0xe7a6ee(0x206)](function () {
                            const _0x2b6a4d = _0xe7a6ee;
                            _0x2283e9(this)[_0x2b6a4d(0x38f)]() > _0x1352b5 && (_0x1352b5 = _0x2283e9(this)[_0x2b6a4d(0x38f)](), _0x427fc3 = _0x2283e9(this)[_0x2b6a4d(0x178)](_0x2b6a4d(0x1ab))[_0x2b6a4d(0x2e7)]());
                        });
                    }
                    if (_0x427fc3 != null) {
                        _0x427fc3[_0xe7a6ee(0x2e7)]()[_0xe7a6ee(0x3c3)](_0xe7a6ee(0x1f2), _0xe7a6ee(0x314)), _0x427fc3[_0xe7a6ee(0x2e7)]()[_0xe7a6ee(0x260)](_0xe7a6ee(0x27f) + _0x32d7df('DW') + '\x22\x20class=\x22IG_DWSTORY\x22>' + _0x549145[_0xe7a6ee(0x3ce)] + _0xe7a6ee(0x275)), _0x427fc3[_0xe7a6ee(0x2e7)]()['append']('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x32d7df(_0xe7a6ee(0x2b6)) + _0xe7a6ee(0x2bf) + _0x549145[_0xe7a6ee(0x2b6)] + '</div>');
                        let _0x5c00c8 = _0x3e0fa8(_0x517fb5);
                        _0x5c00c8[_0xe7a6ee(0x2d2)] > 0x1 && _0x427fc3[_0xe7a6ee(0x2e7)]()[_0xe7a6ee(0x260)](_0xe7a6ee(0x333) + _0x32d7df('DW_ALL') + _0xe7a6ee(0x2fa) + _0x549145[_0xe7a6ee(0x268)] + _0xe7a6ee(0x275)), _0x427fc3[_0xe7a6ee(0x1df)]('img[referrerpolicy]')[_0xe7a6ee(0x206)](function () {
                            const _0x4aa765 = _0xe7a6ee;
                            _0x2283e9(this)['on'](_0x4aa765(0x150), function () {
                                const _0x12253e = _0x4aa765;
                                !_0x2283e9(this)[_0x12253e(0x165)](_0x12253e(0x277)) && (_0x427fc3['find'](_0x12253e(0x10b))[_0x12253e(0x2d2)] === 0x0 ? (_0x2283e9(this)[_0x12253e(0x3ca)](_0x12253e(0x397), !![]), _0x2283e9(_0x12253e(0x10b))[_0x12253e(0x197)](), _0x32f9d0('(story)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x2283e9(this)['attr'](_0x12253e(0x397), !![]), _0x32f9d0(_0x12253e(0x122))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x2ef92a(_0x5bfab0, _0x2543cb) {
            const _0x931530 = _0x1154df;
            if (_0x5bfab0) {
                let _0x391793 = new Date()[_0x931530(0x10c)](), _0x78a9a1 = Math[_0x931530(0x33c)](_0x391793 / 0x3e8), _0x1f9094 = _0x931530(0x16b), _0x8ba183 = _0x2283e9(_0x931530(0x1cb))['first']()['text']() || location[_0x931530(0x2bc)][_0x931530(0x2cf)]('/')['at'](0x2), _0x1c74b2 = location[_0x931530(0x2bc)][_0x931530(0x10d)](/\/$/ig, '')[_0x931530(0x2cf)]('/')['at'](-0x1), _0x4c91f9 = '', _0x3d912e = null;
                _0x5502da(!![]);
                if (_0xacfdce[_0x931530(0x3b6)] && !_0x33d3f7[_0x931530(0x398)]) {
                    let _0x139d3d = await _0x179648(_0x8ba183), _0x8fdb1b = _0x139d3d['user']['pk'], _0x558372 = await _0x128627(_0x8fdb1b), _0x1946d9 = location[_0x931530(0x2bc)]['split']('/')[_0x931530(0x1eb)](_0x33e362 => _0x33e362[_0x931530(0x2d2)] > 0x0 && _0x33e362['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x558372[_0x931530(0x165)][_0x931530(0x318)][0x0]['items'][_0x931530(0x373)](_0x9b8ded => {
                        _0x9b8ded['id'] == _0x1946d9 && (_0x3d912e = _0x9b8ded['id']);
                    });
                    if (_0x3d912e == null) {
                        let _0x3ba196 = _0x3e0fa8(_0x8ba183);
                        _0x3ba196[_0x931530(0x206)](function (_0x9cfbd6) {
                            const _0x551904 = _0x931530;
                            _0x2283e9(this)[_0x551904(0x178)]()[_0x551904(0x2d2)] > 0x0 && (_0x3d912e = _0x558372['data'][_0x551904(0x318)][0x0]['items'][_0x9cfbd6]['id']);
                        });
                    }
                    _0x3d912e == null && (_0x2283e9(_0x931530(0x207))['each'](function (_0x147b2e) {
                        const _0x464ec9 = _0x931530;
                        _0x2283e9(this)[_0x464ec9(0x121)]('x1lix1fw') && (_0x2283e9(this)[_0x464ec9(0x178)]()[_0x464ec9(0x2d2)] > 0x0 && (_0x3d912e = _0x558372[_0x464ec9(0x165)][_0x464ec9(0x318)][0x0][_0x464ec9(0x2dd)][_0x147b2e]['id']));
                    }), _0x2283e9('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')[_0x931530(0x206)](function (_0x363397) {
                        const _0x508e47 = _0x931530;
                        _0x2283e9(this)[_0x508e47(0x178)]()['hasClass'](_0x508e47(0x205)) && (_0x3d912e = _0x558372[_0x508e47(0x165)][_0x508e47(0x318)][0x0][_0x508e47(0x2dd)][_0x363397]['id']);
                    }));
                    _0x3d912e == null && (_0x3d912e = location[_0x931530(0x2bc)]['split']('/')[_0x931530(0x1eb)](_0x73ba7c => _0x73ba7c[_0x931530(0x2d2)] > 0x0 && _0x73ba7c[_0x931530(0x353)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x6c601e = await _0x814705(_0x3d912e);
                    _0xacfdce[_0x931530(0x34f)] && (_0x78a9a1 = _0x6c601e[_0x931530(0x2dd)][0x0][_0x931530(0x144)]);
                    _0x6c601e[_0x931530(0x2a3)] === 'ok' ? _0x2f4df2(_0x6c601e[_0x931530(0x2dd)][0x0][_0x931530(0x369)][_0x931530(0x2e3)][0x0][_0x931530(0x286)], _0x8ba183, _0x931530(0x191), _0x78a9a1, _0x931530(0x16b), _0x3d912e) : (_0xacfdce[_0x931530(0x31c)] ? (_0x33d3f7[_0x931530(0x398)] = !![], _0x2ef92a(!![], _0x2543cb)) : alert(_0x931530(0x2d8) + _0x6c601e[_0x931530(0x141)]), _0x32f9d0(_0x6c601e));
                    _0x5502da(![]);
                    return;
                }
                if (_0x33d3f7['GL_dataCache'][_0x931530(0x191)][_0x8ba183] && !_0x2543cb) {
                    _0x32f9d0('Fetch\x20from\x20memory\x20cache:', _0x8ba183), _0x33d3f7[_0x931530(0x29f)][_0x931530(0x191)][_0x8ba183][_0x931530(0x165)]['reels_media'][0x0][_0x931530(0x2dd)][_0x931530(0x373)](_0x12005a => {
                        const _0x35f6fe = _0x931530;
                        _0x12005a['id'] == _0x1c74b2 && (_0x4c91f9 = _0x12005a['display_url'], _0xacfdce[_0x35f6fe(0x34f)] && (_0x78a9a1 = _0x12005a[_0x35f6fe(0x1fb)], _0x3d912e = _0x12005a['id']));
                    });
                    if (_0x4c91f9['length'] == 0x0) {
                        _0x32f9d0(_0x931530(0x24e), _0x8ba183), _0x2ef92a(!![], !![]);
                        return;
                    }
                } else {
                    let _0x296eff = await _0x179648(_0x8ba183), _0x564d0e = _0x296eff['user']['pk'], _0x391165 = await _0x128627(_0x564d0e);
                    _0x391165[_0x931530(0x165)][_0x931530(0x318)][0x0][_0x931530(0x2dd)][_0x931530(0x373)](_0x272144 => {
                        const _0x40caf3 = _0x931530;
                        _0x272144['id'] == _0x1c74b2 && (_0x4c91f9 = _0x272144['display_url'], _0xacfdce[_0x40caf3(0x34f)] && (_0x78a9a1 = _0x272144[_0x40caf3(0x1fb)], _0x3d912e = _0x272144['id']));
                    });
                    if (_0x4c91f9[_0x931530(0x2d2)] == 0x0) {
                        let _0x4189de = _0x3e0fa8(_0x8ba183);
                        _0x4189de[_0x931530(0x206)](function (_0x2cb71b) {
                            const _0x2d6eab = _0x931530;
                            _0x2283e9(this)[_0x2d6eab(0x178)]()[_0x2d6eab(0x2d2)] > 0x0 && (_0x4c91f9 = _0x391165[_0x2d6eab(0x165)][_0x2d6eab(0x318)][0x0][_0x2d6eab(0x2dd)][_0x2cb71b][_0x2d6eab(0x18d)], _0xacfdce[_0x2d6eab(0x34f)] && (_0x78a9a1 = _0x391165[_0x2d6eab(0x165)][_0x2d6eab(0x318)][0x0][_0x2d6eab(0x2dd)][_0x2cb71b][_0x2d6eab(0x1fb)], _0x3d912e = _0x391165[_0x2d6eab(0x165)][_0x2d6eab(0x318)][0x0]['items'][_0x2cb71b]['id']));
                        }), _0x4c91f9['length'] == 0x0 && (_0x2283e9(_0x931530(0x207))[_0x931530(0x206)](function (_0x5503a1) {
                            const _0x69aae = _0x931530;
                            _0x2283e9(this)[_0x69aae(0x121)]('x1lix1fw') && (_0x2283e9(this)[_0x69aae(0x178)]()[_0x69aae(0x2d2)] > 0x0 && (_0x4c91f9 = _0x391165[_0x69aae(0x165)][_0x69aae(0x318)][0x0][_0x69aae(0x2dd)][_0x5503a1]['display_url'], _0xacfdce[_0x69aae(0x34f)] && (_0x78a9a1 = _0x391165[_0x69aae(0x165)][_0x69aae(0x318)][0x0][_0x69aae(0x2dd)][_0x5503a1][_0x69aae(0x1fb)], _0x3d912e = _0x391165['data'][_0x69aae(0x318)][0x0][_0x69aae(0x2dd)][_0x5503a1]['id'])));
                        }), _0x2283e9(_0x931530(0x1ee))['each'](function (_0x14ffcb) {
                            const _0x270b37 = _0x931530;
                            _0x2283e9(this)['children']()['hasClass']('_ac3q') && (_0x4c91f9 = _0x391165[_0x270b37(0x165)][_0x270b37(0x318)][0x0][_0x270b37(0x2dd)][_0x14ffcb]['display_url'], _0xacfdce[_0x270b37(0x34f)] && (_0x78a9a1 = _0x391165[_0x270b37(0x165)]['reels_media'][0x0][_0x270b37(0x2dd)][_0x14ffcb]['taken_at_timestamp'], _0x3d912e = _0x391165['data']['reels_media'][0x0][_0x270b37(0x2dd)][_0x14ffcb]['id']));
                        }));
                    }
                }
                _0x2f4df2(_0x4c91f9, _0x8ba183, _0x931530(0x3a3), _0x78a9a1, _0x1f9094, _0x3d912e), _0x33d3f7[_0x931530(0x398)] = ![], _0x5502da(![]);
            } else {
                if (_0x2283e9(_0x931530(0x287))[_0x931530(0x3c1)]()[_0x931530(0x1df)](_0x931530(0x329))[_0x931530(0x2d2)]) {
                    let _0x431891 = null;
                    _0x2283e9(_0x931530(0x232))[_0x931530(0x2d2)] > 0x0 ? _0x431891 = _0x2283e9('body\x20>\x20div\x20section:visible._ac0a') : (_0x431891 = _0x2283e9(_0x931530(0x224)), _0x431891[_0x931530(0x3c3)](_0x931530(0x1f2), 'relative'));
                    _0x431891[_0x931530(0x2d2)] === 0x0 && (_0x431891 = _0x2283e9('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x931530(0x3c1)]()[_0x931530(0x3c1)]()['parent']()[_0x931530(0x1df)](_0x931530(0x11d)), _0x431891[_0x931530(0x3c3)]('position', 'relative'));
                    _0x431891[_0x931530(0x2d2)] === 0x0 && (_0x431891 = _0x2283e9('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x931530(0x3c1)]()[_0x931530(0x3c1)]()['parent']()[_0x931530(0x1df)](_0x931530(0x12f)), _0x431891[_0x931530(0x3c3)](_0x931530(0x1f2), _0x931530(0x314)));
                    if (_0x431891[_0x931530(0x2d2)] === 0x0) {
                        let _0x3bb3f0 = _0x2283e9(_0x931530(0x378)), _0x19c404 = 0x0;
                        _0x3bb3f0['each'](function () {
                            const _0x122dae = _0x931530;
                            _0x2283e9(this)[_0x122dae(0x38f)]() > _0x19c404 && (_0x19c404 = _0x2283e9(this)[_0x122dae(0x38f)](), _0x431891 = _0x2283e9(this)[_0x122dae(0x178)]('div')[_0x122dae(0x2e7)]());
                        });
                    }
                    _0x431891 != null && (_0x431891[_0x931530(0x2e7)]()['css']('position', _0x931530(0x314)), _0x431891[_0x931530(0x2e7)]()[_0x931530(0x260)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x32d7df(_0x931530(0x35c)) + _0x931530(0x10f) + _0x549145[_0x931530(0x390)] + _0x931530(0x275)));
                }
            }
        }
        function _0xbcb33a(_0x40960e) {
            return new Promise((_0x32f7a9, _0xf4266f) => {
                const _0x2a3aa6 = a0_0x47e8;
                let _0x13e796 = _0x2a3aa6(0x375) + _0x40960e + _0x2a3aa6(0x3cd);
                GM_xmlhttpRequest({
                    'method': _0x2a3aa6(0x1bf),
                    'url': _0x13e796,
                    'onload': function (_0x4c5005) {
                        const _0x44e085 = _0x2a3aa6;
                        try {
                            let _0x19f25a = JSON['parse'](_0x4c5005[_0x44e085(0x2d9)]);
                            _0x32f7a9(_0x19f25a);
                        } catch (_0x15c843) {
                            _0x32f9d0(_0x44e085(0x26a), _0x44e085(0x26c), _0x15c843['message']), _0xf4266f(_0x15c843);
                        }
                    },
                    'onerror': function (_0x484fda) {
                        const _0x301a61 = _0x2a3aa6;
                        _0x32f9d0(_0x301a61(0x26a), 'reject', _0x484fda), _0xf4266f(_0x484fda);
                    }
                });
            });
        }
        function _0x128627(_0x5bb512) {
            return new Promise((_0x36f2a1, _0x2af90a) => {
                const _0x1c4e8b = a0_0x47e8;
                let _0x3e9709 = _0x1c4e8b(0x2c3) + _0x5bb512 + _0x1c4e8b(0x3cd);
                GM_xmlhttpRequest({
                    'method': _0x1c4e8b(0x1bf),
                    'url': _0x3e9709,
                    'onload': function (_0xafeb8f) {
                        const _0x39e077 = _0x1c4e8b;
                        try {
                            let _0x5c1bc9 = JSON[_0x39e077(0x1ff)](_0xafeb8f[_0x39e077(0x2d9)]);
                            _0x32f9d0(_0x39e077(0x166), _0x5c1bc9), _0x36f2a1(_0x5c1bc9);
                        } catch (_0x3147d6) {
                            _0x32f9d0(_0x39e077(0x166), _0x39e077(0x26c), _0x3147d6['message']), _0x2af90a(_0x3147d6);
                        }
                    },
                    'onerror': function (_0x3172bf) {
                        const _0xce054f = _0x1c4e8b;
                        _0x32f9d0(_0xce054f(0x166), 'reject', _0x3172bf), _0x2af90a(_0x3172bf);
                    }
                });
            });
        }
        function _0x179648(_0x1c2d1f) {
            return new Promise((_0x1437f4, _0xc15ff1) => {
                const _0x5a7b45 = a0_0x47e8;
                let _0x1b5ae0 = 'https://www.instagram.com/web/search/topsearch/?query=' + _0x1c2d1f;
                GM_xmlhttpRequest({
                    'method': _0x5a7b45(0x1bf),
                    'url': _0x1b5ae0,
                    'onload': function (_0x23f294) {
                        const _0x1f0687 = _0x5a7b45;
                        let _0x25fcbe = JSON[_0x1f0687(0x1ff)](_0x23f294['response']), _0x4b0180 = null;
                        _0x25fcbe['users']['forEach'](_0x4c36e3 => {
                            const _0x14b446 = _0x1f0687;
                            _0x4c36e3[_0x14b446(0x2be)][_0x14b446(0x177)]?.[_0x14b446(0x2a1)]() === _0x1c2d1f?.[_0x14b446(0x2a1)]() && (_0x4b0180 = _0x4c36e3);
                        }), _0x4b0180 != null ? (_0x32f9d0('getUserId()', _0x4b0180), _0x1437f4(_0x4b0180)) : _0xc45d67(_0x1c2d1f)[_0x1f0687(0x158)](_0x5d5d8b => {
                            _0x1437f4(_0x5d5d8b);
                        })[_0x1f0687(0x28c)](_0x313485 => {
                            const _0x576891 = _0x1f0687;
                            alert(_0x576891(0x251));
                        });
                    },
                    'onerror': function (_0x531ba4) {
                        const _0x4e6010 = _0x5a7b45;
                        _0x32f9d0('getUserId()', _0x4e6010(0x26c), _0x531ba4), _0xc15ff1(_0x531ba4);
                    }
                });
            });
        }
        function _0xc45d67(_0x753f56) {
            return new Promise((_0x425b22, _0x3e2187) => {
                const _0x2d8439 = a0_0x47e8;
                let _0x491bb3 = _0x2d8439(0x380) + _0x753f56;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x491bb3,
                    'headers': { 'X-IG-App-ID': _0x2b84c2() },
                    'onload': function (_0x581af4) {
                        const _0x588ca9 = _0x2d8439;
                        try {
                            let _0x295807 = JSON[_0x588ca9(0x1ff)](_0x581af4['response']), _0x23ae80 = _0x295807?.[_0x588ca9(0x165)]?.[_0x588ca9(0x2be)];
                            if (_0x23ae80 != null) {
                                let _0x1c5855 = _0x295807?.[_0x588ca9(0x165)];
                                _0x1c5855[_0x588ca9(0x2be)]['pk'] = _0x1c5855[_0x588ca9(0x2be)]['id'], _0x32f9d0(_0x588ca9(0x200), _0x295807), _0x425b22(_0x1c5855);
                            } else
                                _0x32f9d0('getUserIdWithAgent()', 'reject', _0x588ca9(0x2ad)), _0x3e2187(_0x588ca9(0x2ad));
                        } catch (_0x433d57) {
                            _0x32f9d0(_0x588ca9(0x200), _0x588ca9(0x26c), _0x433d57[_0x588ca9(0x141)]), _0x3e2187(_0x433d57);
                        }
                    },
                    'onerror': function (_0x4d7e40) {
                        const _0x44e8b0 = _0x2d8439;
                        _0x32f9d0(_0x44e8b0(0x200), _0x44e8b0(0x26c), _0x4d7e40), _0x3e2187(_0x4d7e40);
                    }
                });
            });
        }
        function _0x1e4630(_0x290e36) {
            return new Promise((_0x1d6b55, _0x1166bc) => {
                const _0x3ea5ac = a0_0x47e8;
                let _0x3ac3e6 = _0x3ea5ac(0x119) + _0x290e36 + '/info/';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x3ac3e6,
                    'headers': { 'User-Agent': _0x3ea5ac(0x1db) },
                    'onload': function (_0x112c50) {
                        const _0x339f63 = _0x3ea5ac;
                        try {
                            let _0x3ed6bb = JSON['parse'](_0x112c50[_0x339f63(0x2d9)]);
                            _0x3ed6bb['status'] !== 'ok' ? (_0x32f9d0(_0x339f63(0x1b9), _0x339f63(0x26c), _0x3ed6bb), _0x1166bc(_0x339f63(0x3b4))) : (_0x32f9d0('getUserHighSizeProfile()', _0x3ed6bb), _0x1d6b55(_0x3ed6bb[_0x339f63(0x2be)][_0x339f63(0x248)]?.['url']));
                        } catch (_0x448041) {
                            _0x32f9d0(_0x339f63(0x1b9), 'reject', _0x448041), _0x1166bc(_0x448041);
                        }
                    },
                    'onerror': function (_0x3fd9ca) {
                        const _0x55e46e = _0x3ea5ac;
                        _0x32f9d0(_0x55e46e(0x1b9), _0x55e46e(0x26c), _0x3fd9ca), _0x1166bc(_0x3fd9ca);
                    }
                });
            });
        }
        function _0x5590e3(_0x2c9e0e) {
            return new Promise((_0x583d78, _0x5a97e4) => {
                const _0x10ed65 = a0_0x47e8;
                if (!_0x2c9e0e)
                    _0x5a97e4(_0x10ed65(0x1d9));
                let _0x435a37 = _0x2c9e0e, _0x333cdf = _0x10ed65(0xfe) + _0x435a37 + _0x10ed65(0x342);
                GM_xmlhttpRequest({
                    'method': _0x10ed65(0x1bf),
                    'url': _0x333cdf,
                    'onload': function (_0x4e1eab) {
                        const _0x64bb61 = _0x10ed65;
                        try {
                            let _0x3aec79 = JSON[_0x64bb61(0x1ff)](_0x4e1eab[_0x64bb61(0x2d9)]);
                            _0x32f9d0(_0x64bb61(0x23d), _0x3aec79), _0x583d78(_0x3aec79[_0x64bb61(0x165)]['shortcode_media'][_0x64bb61(0x140)][_0x64bb61(0x177)]);
                        } catch (_0x2eedad) {
                            _0x32f9d0(_0x64bb61(0x23d), 'reject', _0x2eedad[_0x64bb61(0x141)]), _0x5a97e4(_0x2eedad);
                        }
                    },
                    'onerror': function (_0xdd9d61) {
                        const _0x5ef011 = _0x10ed65;
                        _0x32f9d0(_0x5ef011(0x23d), _0x5ef011(0x26c), _0xdd9d61), _0x5a97e4(_0xdd9d61);
                    }
                });
            });
        }
        function _0x449717(_0x463a29) {
            return new Promise((_0x527b68, _0x1d32be) => {
                const _0x5afdc2 = a0_0x47e8;
                if (!_0x463a29)
                    _0x1d32be(_0x5afdc2(0x1d9));
                let _0xbf4a9c = _0x463a29, _0x25ade0 = _0x5afdc2(0xfe) + _0xbf4a9c + _0x5afdc2(0x342);
                GM_xmlhttpRequest({
                    'method': _0x5afdc2(0x1bf),
                    'url': _0x25ade0,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x12a545) {
                        const _0x42144c = _0x5afdc2;
                        try {
                            let _0x11f35d = JSON['parse'](_0x12a545['response']);
                            _0x32f9d0(_0x11f35d), _0x11f35d[_0x42144c(0x2a3)] === 'fail' ? (_0x32f9d0(_0x42144c(0x337), _0x42144c(0x36f), _0xbf4a9c), _0x1d9f21(_0xbf4a9c)['then'](_0x53c0f3 => {
                                const _0x4fe25e = _0x42144c;
                                _0x527b68({
                                    'type': _0x4fe25e(0x2a6),
                                    'data': _0x53c0f3[_0x4fe25e(0x1a8)][_0x4fe25e(0x2dd)][0x0]
                                });
                            })[_0x42144c(0x28c)](_0x9fd18 => {
                                _0x1d32be(_0x9fd18);
                            })) : _0x527b68({
                                'type': _0x42144c(0x38d),
                                'data': _0x11f35d[_0x42144c(0x165)]
                            });
                        } catch (_0x3e5cb9) {
                            _0x32f9d0(_0x42144c(0x1c1), _0x42144c(0x26c), _0x3e5cb9[_0x42144c(0x141)]), _0x1d32be(_0x3e5cb9);
                        }
                    },
                    'onerror': function (_0x4a7fe9) {
                        const _0x3d624b = _0x5afdc2;
                        _0x32f9d0('getBlobMedia()', _0x3d624b(0x26c), _0x4a7fe9), _0x1d32be(_0x4a7fe9);
                    }
                });
            });
        }
        function _0x1d9f21(_0x442c4c) {
            return new Promise((_0x5bad91, _0x3b9e1e) => {
                const _0x24af0e = a0_0x47e8;
                if (!_0x442c4c)
                    _0x3b9e1e('NOPATH');
                let _0x3a9b10 = _0x442c4c, _0x251dab = _0x24af0e(0x334) + _0x3a9b10 + _0x24af0e(0x2cd);
                GM_xmlhttpRequest({
                    'method': _0x24af0e(0x1bf),
                    'url': _0x251dab,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x2b84c2()
                    },
                    'onload': function (_0x12590d) {
                        const _0x27fbbd = _0x24af0e;
                        try {
                            let _0x17371a = JSON[_0x27fbbd(0x1ff)](_0x12590d[_0x27fbbd(0x2d9)]);
                            _0x32f9d0(_0x17371a), _0x17371a[_0x27fbbd(0x2a3)] === 'fail' ? (alert(_0x27fbbd(0x3c2) + _0x17371a[_0x27fbbd(0x141)] + ':\x20' + _0x17371a['feedback_message']), _0x32f9d0(_0x27fbbd(0x37d) + _0x17371a[_0x27fbbd(0x141)] + ':\x20' + _0x17371a[_0x27fbbd(0x127)]), _0x3b9e1e(_0x12590d)) : (_0x32f9d0('getBlobMediaWithQueryID()', _0x17371a['data']), _0x5bad91(_0x17371a[_0x27fbbd(0x165)]));
                        } catch (_0x44af42) {
                            _0x32f9d0(_0x27fbbd(0x2da), _0x27fbbd(0x26c), _0x44af42[_0x27fbbd(0x141)]), _0x3b9e1e(_0x44af42);
                        }
                    },
                    'onerror': function (_0x253ef3) {
                        const _0x5b5db8 = _0x24af0e;
                        _0x32f9d0(_0x5b5db8(0x2da), 'reject', _0x253ef3), _0x3b9e1e(_0x253ef3);
                    }
                });
            });
        }
        function _0x814705(_0x5a08eb) {
            return new Promise((_0x5ed12c, _0x316601) => {
                const _0x49b92f = a0_0x47e8;
                let _0xd9b0 = 'https://i.instagram.com/api/v1/media/' + _0x5a08eb + '/info/';
                if (_0x5a08eb == null) {
                    alert(_0x49b92f(0x1d8)), _0x32f9d0(_0x49b92f(0x2d6), _0x49b92f(0x26c), _0x49b92f(0x1d8)), _0x5502da(![]), _0x316601(-0x1);
                    return;
                }
                if (_0x2b84c2() == null) {
                    alert('Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x32f9d0(_0x49b92f(0x2d6), _0x49b92f(0x26c), _0x49b92f(0x22a)), _0x5502da(![]), _0x316601(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x49b92f(0x1bf),
                    'url': _0xd9b0,
                    'headers': {
                        'User-Agent': window[_0x49b92f(0x2ca)]['userAgent'],
                        'Accept': _0x49b92f(0x283),
                        'X-IG-App-ID': _0x2b84c2()
                    },
                    'onload': function (_0x416091) {
                        const _0x2219aa = _0x49b92f;
                        if (_0x416091[_0x2219aa(0x33a)] == _0xd9b0) {
                            let _0x45fa0f = JSON['parse'](_0x416091['response']);
                            _0x32f9d0(_0x2219aa(0x2d6), _0x45fa0f), _0x5ed12c(_0x45fa0f);
                        } else {
                            let _0xeaa9ee = new URL(_0x416091[_0x2219aa(0x33a)]);
                            _0xeaa9ee['pathname'][_0x2219aa(0x374)](_0x2219aa(0x273)) ? (_0x32f9d0(_0x2219aa(0x2d6), 'reject', _0x2219aa(0x2ae)), alert(_0x2219aa(0x2ae))) : (_0x32f9d0('getMediaInfo()', _0x2219aa(0x26c), _0x2219aa(0x28b) + _0x416091[_0x2219aa(0x33a)] + '\x22'), alert(_0x2219aa(0x28b) + _0x416091[_0x2219aa(0x33a)] + '\x22')), _0x5502da(![]), _0x316601(-0x1);
                        }
                    },
                    'onerror': function (_0x26d474) {
                        const _0xd8c89d = _0x49b92f;
                        _0x32f9d0('getMediaInfo()', _0xd8c89d(0x26c), _0x26d474), _0x5ed12c(_0x26d474);
                    }
                });
            });
        }
        function _0x55331c(_0x5eaeee) {
            const _0xcfe3a6 = _0x1154df;
            let _0x5afa89 = new URL(_0x5eaeee), _0x44e5fd = _0x5afa89?.[_0xcfe3a6(0x38b)]?.['get'](_0xcfe3a6(0x1af))?.[_0xcfe3a6(0x2cf)]('.')['at'](0x0);
            return _0x44e5fd ? atob(_0x44e5fd) : null;
        }
        function _0x2b84c2() {
            const _0x3ea688 = _0x1154df;
            let _0xfd7f4b = null;
            return _0x2283e9(_0x3ea688(0x14d))['each'](function () {
                const _0x2b0628 = _0x3ea688, _0x564a00 = /"APP_ID":"([0-9]+)"/ig, _0x314eb3 = _0x2283e9(this)[_0x2b0628(0x3ab)]()[_0x2b0628(0x353)](_0x564a00);
                _0x314eb3 != null && _0xfd7f4b == null && (_0xfd7f4b = [..._0x2283e9(this)[_0x2b0628(0x3ab)]()['matchAll'](_0x564a00)]);
            }), _0xfd7f4b ? _0xfd7f4b['at'](0x0)['at'](-0x1) : null;
        }
        function _0x5502da(_0x53fcc9) {
            const _0x28c674 = _0x1154df;
            _0x53fcc9 ? (_0x2283e9(_0x28c674(0x16d))[_0x28c674(0x1c9)]('x1s85apg'), _0x2283e9('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x28c674(0x3c3)]('z-index', _0x28c674(0x2f7))) : (_0x2283e9(_0x28c674(0x16d))[_0x28c674(0x307)](_0x28c674(0x2a4)), _0x2283e9(_0x28c674(0x16d))[_0x28c674(0x3c3)]('z-index', ''));
        }
        function _0x3e0fa8(_0x506121) {
            const _0xcb297b = _0x1154df;
            let _0x5d5248 = _0x2283e9(_0xcb297b(0x17d) + _0x506121 + _0xcb297b(0x219))['filter'](function () {
                const _0x5d1874 = _0xcb297b;
                return _0x2283e9(this)[_0x5d1874(0x178)]()['length'] === 0x0 && _0x2283e9(this)[_0x5d1874(0x1df)]('svg')[_0x5d1874(0x2d2)] === 0x0 && _0x2283e9(this)[_0x5d1874(0x3ab)]()?.['toLowerCase']() === _0x506121?.[_0x5d1874(0x2a1)]();
            })[_0xcb297b(0x1b3)](_0xcb297b(0x350))['filter'](function () {
                const _0x37cec0 = _0xcb297b;
                return _0x2283e9(this)[_0x37cec0(0x3ab)]()?.[_0x37cec0(0x2a1)]() !== _0x506121?.[_0x37cec0(0x2a1)]();
            })[_0xcb297b(0x1eb)](function () {
                const _0x1a2828 = _0xcb297b;
                return _0x2283e9(this)[_0x1a2828(0x178)]()['length'] > 0x1;
            })[_0xcb297b(0x2e7)]();
            return _0x5d5248['length'] === 0x0 && (_0x5d5248 = _0x2283e9('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x506121 + '\x22]')[_0xcb297b(0x1eb)](function () {
                const _0x5e016f = _0xcb297b;
                return _0x2283e9(this)['find'](_0x5e016f(0x199))[_0x5e016f(0x2d2)] > 0x0;
            })[_0xcb297b(0x1b3)](_0xcb297b(0x350))[_0xcb297b(0x1eb)](function () {
                const _0x184caa = _0xcb297b;
                return _0x2283e9(this)[_0x184caa(0x3ab)]()?.['toLowerCase']() !== _0x506121?.[_0x184caa(0x2a1)]();
            })[_0xcb297b(0x1eb)](function () {
                const _0x5ea8ec = _0xcb297b;
                return _0x2283e9(this)[_0x5ea8ec(0x178)]()[_0x5ea8ec(0x2d2)] > 0x1;
            })['first']()), _0x5d5248[_0xcb297b(0x178)]()[_0xcb297b(0x1eb)](function () {
                const _0x1498fa = _0xcb297b;
                return _0x2283e9(this)[_0x1498fa(0x235)]() < 0xa;
            })[_0xcb297b(0x2e7)]()[_0xcb297b(0x178)]();
        }
        function _0xa5e9ff(_0x360ab1, _0x242aaa) {
            const _0x5a24b0 = _0x1154df;
            _0x2283e9(_0x5a24b0(0x2fb))['length'] ? (_0x2283e9('.circle_wrapper\x20span')[_0x5a24b0(0x3ab)](_0x360ab1 + '/' + _0x242aaa), _0x360ab1 >= _0x242aaa && _0x2283e9(_0x5a24b0(0x2fb))[_0x5a24b0(0x10e)](0xfa, function () {
                _0x2283e9(this)['remove']();
            })) : _0x2283e9(_0x5a24b0(0x226))[_0x5a24b0(0x260)]('<div\x20class=\x22circle_wrapper\x22><circle></circle><span>' + _0x360ab1 + '/' + _0x242aaa + _0x5a24b0(0x105));
        }
        function _0x461a6a(_0x337ab8, _0x516e99) {
            const _0x6496e5 = _0x1154df;
            let _0x56c40f = _0x337ab8 ? _0x6496e5(0x13e) : '';
            _0x2283e9('body')[_0x6496e5(0x260)]('<div\x20class=\x22IG_POPUP_DIG\x20' + _0x56c40f + '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>'), _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')['append'](_0x6496e5(0x3d3) + _0x32d7df(_0x6496e5(0x37a)) + _0x6496e5(0x13f) + GM_info['script'][_0x6496e5(0x2de)] + _0x6496e5(0x2f4) + _0x549145[_0x6496e5(0x37a)] + _0x6496e5(0x218)), _0x516e99 && (_0x2283e9(_0x6496e5(0x202))[_0x6496e5(0x260)](_0x6496e5(0x2d0)), _0x2283e9(_0x6496e5(0x2e8))[_0x6496e5(0x260)]('<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>' + _0x32d7df('BATCH_DOWNLOAD_SELECTED') + _0x6496e5(0x2ee)), _0x2283e9(_0x6496e5(0x2e8))['append'](_0x6496e5(0x21a) + _0x32d7df(_0x6496e5(0x291)) + '</button>'), _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE')[_0x6496e5(0x260)]('<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>' + _0x32d7df(_0x6496e5(0x1fe)) + _0x6496e5(0x35d)));
        }
        function _0x654eb8(_0x3d82fe) {
            const _0x53e21e = _0x1154df;
            _0x2283e9(_0x53e21e(0x381))[_0x53e21e(0x2d2)] && (_0x3d82fe ? _0x2283e9(_0x53e21e(0x381))[_0x53e21e(0x307)](_0x53e21e(0x13e)) : _0x2283e9(_0x53e21e(0x381))[_0x53e21e(0x1c9)](_0x53e21e(0x13e)));
        }
        function _0x2f4df2(_0xbaaac9, _0x4b256a, _0xd625f2, _0x17b911, _0x2b4e1e, _0x59d9a4) {
            return new Promise(_0x3ba092 => {
                setTimeout(() => {
                    const _0x5e3e47 = a0_0x47e8;
                    _0x5502da(!![]), fetch(_0xbaaac9)[_0x5e3e47(0x158)](_0x2a8add => {
                        const _0x5a8733 = _0x5e3e47;
                        return _0x2a8add[_0x5a8733(0x3c6)]()[_0x5a8733(0x158)](_0x1b61c0 => {
                            _0x5502da(![]), _0x5cd71e(_0xbaaac9, _0x1b61c0, _0x4b256a, _0xd625f2, _0x17b911, _0x2b4e1e, _0x59d9a4), _0x3ba092(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x3f5e31(_0x5f1096, _0x48fd46) {
            const _0x48f3fb = _0x1154df, _0x3dc9a7 = document[_0x48f3fb(0x3bd)]('a');
            _0x3dc9a7[_0x48f3fb(0x151)] = URL['createObjectURL'](_0x5f1096), _0x3dc9a7[_0x48f3fb(0x193)] = _0x48fd46, _0x3dc9a7[_0x48f3fb(0x1b5)](), _0x3dc9a7[_0x48f3fb(0x197)]();
        }
        function _0x5cd71e(_0x16fbed, _0x2ef399, _0x26ddf3, _0x146d27, _0x47ab49, _0x5ddee5, _0x44e35a) {
            const _0x5bd8ce = _0x1154df;
            _0x47ab49 = parseInt(_0x47ab49[_0x5bd8ce(0x261)]()['padEnd'](0xd, '0'));
            _0xacfdce[_0x5bd8ce(0x34f)] && (_0x47ab49 = parseInt(_0x47ab49[_0x5bd8ce(0x261)]()[_0x5bd8ce(0x129)](0xd, '0')));
            const _0x3f4d6e = new Date(_0x47ab49), _0x3494b3 = new URL(_0x16fbed)[_0x5bd8ce(0x2bc)][_0x5bd8ce(0x2cf)]('/')['at'](-0x1)[_0x5bd8ce(0x2cf)]('.')[_0x5bd8ce(0x2ef)](0x0, -0x1)['join']('.'), _0x2bafd4 = _0x3f4d6e['getFullYear']()[_0x5bd8ce(0x261)](), _0x3db626 = (_0x3f4d6e['getMonth']() + 0x1)['toString']()[_0x5bd8ce(0x32a)](0x2, '0'), _0x58c68d = _0x3f4d6e[_0x5bd8ce(0x209)]()[_0x5bd8ce(0x261)]()[_0x5bd8ce(0x32a)](0x2, '0'), _0xf3e7f2 = _0x3f4d6e[_0x5bd8ce(0x3b8)]()[_0x5bd8ce(0x261)]()['padStart'](0x2, '0'), _0x5434c5 = _0x3f4d6e[_0x5bd8ce(0x1ca)]()[_0x5bd8ce(0x261)]()['padStart'](0x2, '0'), _0x59a64a = _0x3f4d6e[_0x5bd8ce(0x1d0)]()[_0x5bd8ce(0x261)]()['padStart'](0x2, '0');
            var _0x1c61f6 = _0x33d3f7[_0x5bd8ce(0x299)][_0x5bd8ce(0x23a)](), _0x5f0eb2 = _0x44e35a ?? '', _0x166cfc = {
                    '%USERNAME%': _0x26ddf3,
                    '%SOURCE_TYPE%': _0x146d27,
                    '%SHORTCODE%': _0x5f0eb2,
                    '%YEAR%': _0x2bafd4,
                    '%2-YEAR%': _0x2bafd4['substr'](-0x2),
                    '%MONTH%': _0x3db626,
                    '%DAY%': _0x58c68d,
                    '%HOUR%': _0xf3e7f2,
                    '%MINUTE%': _0x5434c5,
                    '%SECOND%': _0x59a64a,
                    '%ORIGINAL_NAME%': _0x3494b3,
                    '%ORIGINAL_NAME_FIRST%': _0x3494b3[_0x5bd8ce(0x2cf)]('_')['at'](0x0)
                };
            _0x1c61f6 = _0x1c61f6[_0x5bd8ce(0x10d)](/%[\w\-]+%/g, function (_0x18c2ca) {
                return _0x166cfc[_0x18c2ca] || _0x18c2ca;
            });
            const _0x35eab9 = _0x26ddf3 + '_' + _0x3494b3 + '.' + _0x5ddee5, _0x42e05b = _0xacfdce[_0x5bd8ce(0xff)] ? _0x1c61f6 + '.' + _0x5ddee5 : _0x35eab9;
            _0xacfdce[_0x5bd8ce(0x303)] && _0x5ddee5 === _0x5bd8ce(0x16b) && _0x44e35a && _0x146d27 === _0x5bd8ce(0x2a5) && (_0x2ef399[_0x5bd8ce(0x32e)] === _0x5bd8ce(0x16c) || _0x2ef399[_0x5bd8ce(0x32e)] === _0x5bd8ce(0x1fa)) ? _0x286556(_0x2ef399, _0x44e35a)[_0x5bd8ce(0x158)](_0x2bf31d => _0x3f5e31(_0x2bf31d, _0x42e05b))['catch'](_0x4e171f => {
                const _0x40ae16 = _0x5bd8ce;
                console[_0x40ae16(0x29d)](_0x40ae16(0x31a), _0x4e171f), _0x3f5e31(_0x2ef399, _0x42e05b);
            }) : _0x3f5e31(_0x2ef399, _0x42e05b);
        }
        async function _0x286556(_0x12a10e, _0x1263ed) {
            const _0x5cdbf7 = _0x1154df, _0x680212 = (..._0x125100) => {
                    const _0x39f2d3 = a0_0x47e8, _0x57a022 = _0x125100[_0x39f2d3(0x3b1)]((_0x2174bc, _0x18a4ba) => _0x2174bc + _0x18a4ba[_0x39f2d3(0x2d2)], 0x0), _0x4cfa55 = new Uint8Array(_0x57a022);
                    let _0x502f15 = 0x0;
                    for (const _0x553502 of _0x125100) {
                        _0x4cfa55[_0x39f2d3(0x1f8)](_0x553502, _0x502f15), _0x502f15 += _0x553502[_0x39f2d3(0x2d2)];
                    }
                    return _0x4cfa55;
                }, _0x27bdaa = _0x46851e => {
                    const _0x568cec = a0_0x47e8, _0x1d465e = new Uint8Array(0x4);
                    return new DataView(_0x1d465e[_0x568cec(0x1cc)])[_0x568cec(0x1ba)](0x0, _0x46851e, !![]), _0x1d465e;
                }, _0x59a564 = _0x5c84be => new TextEncoder()[_0x5cdbf7(0x33b)](_0x5c84be), _0x473872 = (_0x28166c, _0x1abb58) => String[_0x5cdbf7(0x14c)](_0x28166c[_0x5cdbf7(0x276)](_0x1abb58), _0x28166c['getUint8'](_0x1abb58 + 0x1), _0x28166c[_0x5cdbf7(0x276)](_0x1abb58 + 0x2), _0x28166c[_0x5cdbf7(0x276)](_0x1abb58 + 0x3)), _0x4dd8d2 = new Uint8Array(await _0x12a10e['slice'](0x0, 0xc)[_0x5cdbf7(0x305)]()), _0x9595e9 = _0x4dd8d2[0x0] === 0xff && _0x4dd8d2[0x1] === 0xd8, _0x302dae = _0x4dd8d2[_0x5cdbf7(0x2d2)] >= 0xc && String['fromCharCode'](..._0x4dd8d2[_0x5cdbf7(0x32d)](0x0, 0x4)) === _0x5cdbf7(0x306) && String['fromCharCode'](..._0x4dd8d2[_0x5cdbf7(0x32d)](0x8, 0xc)) === 'WEBP';
            if (!_0x9595e9 && !_0x302dae)
                throw new Error(_0x5cdbf7(0x281));
            const _0x56c4ba = _0x59a564(_0x5cdbf7(0x147) + _0x1263ed + '/\x00'), _0x23e114 = _0x59a564('Exif\x00\x00'), _0x11c937 = Uint8Array['from']([
                    0x49,
                    0x49,
                    0x2a,
                    0x0,
                    0x8,
                    0x0,
                    0x0,
                    0x0
                ]), _0x4fe720 = Uint8Array[_0x5cdbf7(0x22e)]([
                    0x1,
                    0x0
                ]), _0x94760c = _0x680212(Uint8Array['from']([
                    0xe,
                    0x1,
                    0x2,
                    0x0
                ]), _0x27bdaa(_0x56c4ba['length']), _0x27bdaa(0x8 + 0x2 + 0xc + 0x4)), _0x4c9c16 = _0x680212(_0x11c937, _0x4fe720, _0x94760c, _0x27bdaa(0x0), _0x56c4ba);
            if (_0x9595e9) {
                const _0x153afe = await _0x12a10e[_0x5cdbf7(0x305)](), _0xec2867 = new DataView(_0x153afe), _0x3e50a7 = _0x680212(_0x23e114, _0x4c9c16), _0x38e45d = new Uint8Array(0x4);
                new DataView(_0x38e45d[_0x5cdbf7(0x1cc)])['setUint16'](0x0, 0xffe1), new DataView(_0x38e45d[_0x5cdbf7(0x1cc)])[_0x5cdbf7(0x26e)](0x2, _0x3e50a7[_0x5cdbf7(0x2d2)] + 0x2);
                const _0x22c861 = _0x680212(_0x38e45d, _0x3e50a7), _0x267c7b = [new Uint8Array(_0x153afe, 0x0, 0x2)];
                let _0xbe5e47 = 0x2, _0x4be75b = ![];
                while (_0xbe5e47 < _0xec2867[_0x5cdbf7(0x27b)]) {
                    const _0x55ceff = _0xec2867[_0x5cdbf7(0x315)](_0xbe5e47);
                    if ((_0x55ceff & 0xff00) !== 0xff00)
                        break;
                    if (_0x55ceff === 0xffda) {
                        if (!_0x4be75b)
                            _0x267c7b['push'](_0x22c861);
                        _0x267c7b['push'](new Uint8Array(_0x153afe, _0xbe5e47));
                        break;
                    }
                    const _0x2702c7 = _0xec2867[_0x5cdbf7(0x315)](_0xbe5e47 + 0x2) + 0x2;
                    if (_0x55ceff === 0xffe1) {
                        _0xbe5e47 += _0x2702c7;
                        continue;
                    }
                    _0x267c7b[_0x5cdbf7(0x3a8)](new Uint8Array(_0x153afe, _0xbe5e47, _0x2702c7)), _0xbe5e47 += _0x2702c7;
                }
                const _0x2bf501 = _0x267c7b[_0x5cdbf7(0x3b1)]((_0x2e4328, _0x51fb65) => _0x2e4328 + _0x51fb65['length'], 0x0), _0x4e3bf4 = new Uint8Array(_0x2bf501);
                let _0x43e3e5 = 0x0;
                return _0x267c7b['forEach'](_0x3ea5b5 => {
                    const _0x2bc3b9 = _0x5cdbf7;
                    _0x4e3bf4[_0x2bc3b9(0x1f8)](_0x3ea5b5, _0x43e3e5), _0x43e3e5 += _0x3ea5b5['length'];
                }), new Blob([_0x4e3bf4], { 'type': _0x5cdbf7(0x16c) });
            }
            const _0x528b00 = await _0x12a10e[_0x5cdbf7(0x305)](), _0x3e5ba6 = new DataView(_0x528b00), _0xcce6e8 = [];
            let _0x361723 = -0x1, _0x36b95d = 0xc;
            while (_0x36b95d < _0x3e5ba6['byteLength']) {
                const _0x33eb2d = _0x473872(_0x3e5ba6, _0x36b95d), _0xe8d90c = _0x3e5ba6[_0x5cdbf7(0x195)](_0x36b95d + 0x4, !![]), _0x2ea193 = _0xe8d90c & 0x1, _0x2c610a = 0x8 + _0xe8d90c + _0x2ea193;
                if (_0x33eb2d !== 'EXIF' && _0x33eb2d !== _0x5cdbf7(0x130)) {
                    _0xcce6e8[_0x5cdbf7(0x3a8)](new Uint8Array(_0x528b00, _0x36b95d, _0x2c610a));
                    if (_0x33eb2d === _0x5cdbf7(0x255))
                        _0x361723 = _0xcce6e8[_0x5cdbf7(0x2d2)] - 0x1;
                }
                _0x36b95d += _0x2c610a;
            }
            let _0x1171d3 = _0x680212(_0x59a564('EXIF'), _0x27bdaa(_0x23e114[_0x5cdbf7(0x2d2)] + _0x4c9c16[_0x5cdbf7(0x2d2)]), _0x23e114, _0x4c9c16);
            if (_0x1171d3[_0x5cdbf7(0x2d2)] & 0x1)
                _0x1171d3 = _0x680212(_0x1171d3, Uint8Array['of'](0x0));
            if (_0x361723 !== -0x1) {
                const _0x1d95b1 = new Uint8Array(_0xcce6e8[_0x361723]);
                _0x1d95b1[0x8] |= 0x10, _0xcce6e8[_0x361723] = _0x1d95b1, _0xcce6e8[_0x5cdbf7(0x229)](_0x361723 + 0x1, 0x0, _0x1171d3);
            } else
                _0xcce6e8['push'](_0x1171d3);
            const _0x85b739 = _0xcce6e8[_0x5cdbf7(0x3b1)]((_0x12497b, _0x46d19f) => _0x12497b + _0x46d19f[_0x5cdbf7(0x2d2)], 0x0), _0x21b00b = _0x680212(_0x59a564('RIFF'), _0x27bdaa(_0x85b739 + 0x4), _0x59a564(_0x5cdbf7(0x361))), _0x36c13f = _0x680212(_0x21b00b, ..._0xcce6e8);
            return new Blob([_0x36c13f], { 'type': _0x5cdbf7(0x1fa) });
        }
        async function _0x1a17e6(_0x6aa7db, _0x1a40ba) {
            const _0x230fdd = _0x1154df;
            let _0x128115 = new Date()['getTime'](), _0x10c279 = Math[_0x230fdd(0x33c)](_0x128115 / 0x3e8), _0xe6e29 = _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)](_0x230fdd(0x38e)) ? _0x2283e9(_0x6aa7db)['attr'](_0x230fdd(0x38e)) : _0x33d3f7[_0x230fdd(0x3c0)];
            !_0xe6e29 && _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)](_0x230fdd(0x2f1)) && (_0x32f9d0(_0x230fdd(0x278), _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)]('data-href')), _0xe6e29 = await _0x5590e3(_0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)]('data-path'))['catch'](_0xacbc0d => {
                const _0x4f6865 = _0x230fdd;
                _0x32f9d0(_0x4f6865(0x15e), _0xacbc0d[_0x4f6865(0x141)]);
            }), _0xe6e29 == null && (_0xe6e29 = 'NONE'));
            _0xacfdce[_0x230fdd(0x34f)] && _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)](_0x230fdd(0x280)) && (_0x10c279 = parseInt(_0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)]('datetime')));
            if (_0xacfdce['FORCE_RESOURCE_VIA_MEDIA']) {
                _0x5502da(!![]);
                let _0x3e5574 = await _0x814705(_0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)](_0x230fdd(0x1b1)));
                _0x5502da(![]);
                if (_0x3e5574[_0x230fdd(0x2a3)] === 'ok') {
                    var _0x1bcc74 = null;
                    if (_0x3e5574[_0x230fdd(0x2dd)][0x0][_0x230fdd(0x320)])
                        _0x1bcc74 = _0x3e5574['items'][0x0][_0x230fdd(0x320)][0x0][_0x230fdd(0x286)];
                    else {
                        _0x3e5574[_0x230fdd(0x2dd)][0x0]['image_versions2'][_0x230fdd(0x2e3)][_0x230fdd(0x210)](function (_0x1da5c8, _0xda6062) {
                            const _0x8b13f3 = _0x230fdd;
                            let _0x313a74 = new URL(_0x1da5c8[_0x8b13f3(0x286)])['searchParams'][_0x8b13f3(0x27e)]('stp'), _0x402693 = new URL(_0xda6062['url'])[_0x8b13f3(0x38b)][_0x8b13f3(0x27e)](_0x8b13f3(0x393));
                            if (_0x313a74 && _0x402693) {
                                if (_0x313a74[_0x8b13f3(0x2d2)] > _0x402693['length'])
                                    return 0x1;
                                if (_0x313a74[_0x8b13f3(0x2d2)] < _0x402693[_0x8b13f3(0x2d2)])
                                    return -0x1;
                            } else {
                                if (_0x1da5c8['width'] < _0xda6062[_0x8b13f3(0x38f)])
                                    return 0x1;
                                if (_0x1da5c8[_0x8b13f3(0x38f)] > _0xda6062[_0x8b13f3(0x38f)])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x1bcc74 = _0x3e5574[_0x230fdd(0x2dd)][0x0][_0x230fdd(0x369)][_0x230fdd(0x2e3)][0x0][_0x230fdd(0x286)];
                        const _0x2c23a8 = function (_0x3a4c39) {
                                const _0x52e4d8 = _0x230fdd;
                                if (_0x3a4c39[_0x52e4d8(0x38f)] != null)
                                    return _0x3a4c39['width'];
                                const _0x53287d = new URL(_0x3a4c39[_0x52e4d8(0x286)]), _0x5087ff = _0x53287d['searchParams'][_0x52e4d8(0x27e)](_0x52e4d8(0x393));
                                return _0x5087ff != null ? parseInt(_0x5087ff['match'](/_p([0-9]+)x([0-9]+)_/i)?.['at'](0x1) || -0x1) : 0x0;
                            }, _0x3713f0 = _0x2c23a8(_0x3e5574[_0x230fdd(0x2dd)][0x0][_0x230fdd(0x369)]['candidates'][0x0]);
                        if (_0x3e5574[_0x230fdd(0x2dd)][0x0][_0x230fdd(0x15d)] !== _0x3713f0 && _0x3713f0 !== -0x1) {
                        }
                    }
                    if (_0x1a40ba) {
                        let _0x323707 = new URL(_0x1bcc74);
                        _0x323707[_0x230fdd(0x138)] = 'scontent.cdninstagram.com', _0x32e483(_0x323707[_0x230fdd(0x151)]);
                    } else
                        _0x2f4df2(_0x1bcc74, _0xe6e29, _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)]('data-name'), _0x10c279, _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)]('data-type'), _0x2283e9(_0x6aa7db)['attr']('data-path'));
                } else {
                    if (_0xacfdce['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT']) {
                        if (_0x1a40ba) {
                            let _0x482506 = new URL(_0x2283e9(_0x6aa7db)['attr'](_0x230fdd(0x363)));
                            _0x482506[_0x230fdd(0x138)] = _0x230fdd(0x1f3), _0x32e483(_0x482506[_0x230fdd(0x151)]);
                        } else
                            _0x2f4df2(_0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)]('data-href'), _0xe6e29, _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)](_0x230fdd(0x1dd)), _0x10c279, _0x2283e9(_0x6aa7db)['attr'](_0x230fdd(0x2d7)), _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)](_0x230fdd(0x2f1)));
                    } else
                        alert(_0x230fdd(0x2d8) + _0x3e5574[_0x230fdd(0x141)]);
                    _0x32f9d0(_0x3e5574);
                }
            } else
                _0x2f4df2(_0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)](_0x230fdd(0x363)), _0xe6e29, _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)]('data-name'), _0x10c279, _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)](_0x230fdd(0x2d7)), _0x2283e9(_0x6aa7db)[_0x230fdd(0x3ca)](_0x230fdd(0x2f1)));
        }
        function _0x4ec107() {
            const _0x3e5a0f = _0x1154df;
            for (let _0x91960d of _0x33d3f7[_0x3e5a0f(0x110)]) {
                _0x32f9d0('GM_unregisterMenuCommand', _0x91960d), GM_unregisterMenuCommand(_0x91960d);
            }
            _0x33d3f7['registerMenuIds'][_0x3e5a0f(0x3a8)](GM_registerMenuCommand(_0x32d7df('SETTING'), () => {
                _0x3068ea();
            }, { 'accessKey': 'w' })), _0x33d3f7[_0x3e5a0f(0x110)][_0x3e5a0f(0x3a8)](GM_registerMenuCommand(_0x32d7df(_0x3e5a0f(0x3cc)), () => {
                const _0x54076f = _0x3e5a0f;
                GM_openInTab(_0x54076f(0x186), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x33d3f7[_0x3e5a0f(0x110)][_0x3e5a0f(0x3a8)](GM_registerMenuCommand(_0x32d7df(_0x3e5a0f(0x12b)), () => {
                _0x5f4be1();
            }, { 'accessKey': 'z' })), _0x33d3f7['registerMenuIds'][_0x3e5a0f(0x3a8)](GM_registerMenuCommand(_0x32d7df(_0x3e5a0f(0x16a)), () => {
                _0xf93c11();
            }, { 'accessKey': 'f' })), _0x33d3f7[_0x3e5a0f(0x110)][_0x3e5a0f(0x3a8)](GM_registerMenuCommand(_0x32d7df(_0x3e5a0f(0x30f)), () => {
                _0x58511f();
            }, { 'accessKey': 'c' })), _0x33d3f7[_0x3e5a0f(0x110)]['push'](GM_registerMenuCommand(_0x32d7df(_0x3e5a0f(0xf9)), () => {
                _0x213754();
            }, { 'accessKey': 'r' }));
        }
        function _0x250f39(_0x5c027d) {
            const _0x21ff90 = _0x1154df;
            if (!_0xacfdce[_0x21ff90(0x21f)])
                return;
            const _0x2f2ded = GM_getValue(_0x21ff90(0x14a)) ?? new Date()['getTime'](), _0x436de7 = new Date()[_0x21ff90(0x10c)]();
            _0x436de7 > parseInt(_0x2f2ded) + _0x5c027d * 0x3e8 && (GM_setValue('G_CHECK_TIMESTAMP', new Date()[_0x21ff90(0x10c)]()), _0x58511f());
        }
        function _0x58511f() {
            const _0x133aa1 = _0x1154df, _0x19076d = GM_info['script']['version'], _0x173b7 = _0x133aa1(0x1e1);
            GM_xmlhttpRequest({
                'method': _0x133aa1(0x1bf),
                'url': _0x173b7,
                'onload': function (_0x5581dc) {
                    const _0x3911de = _0x133aa1, _0x2e74d3 = _0x5581dc[_0x3911de(0x117)], _0x208633 = _0x2e74d3[_0x3911de(0x353)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x208633 && _0x208633[0x1]) {
                        const _0x393a9e = _0x208633[0x1];
                        _0x32f9d0(_0x3911de(0x1c7), _0x19076d, '|', 'Remote\x20version:\x20', _0x393a9e), _0x393a9e !== _0x19076d && typeof this[_0x3911de(0x345)] === _0x3911de(0x2ad) ? (this[_0x3911de(0x345)] = null, GM_notification({
                            'text': _0x32d7df(_0x3911de(0x284)),
                            'title': _0x32d7df(_0x3911de(0x1c6)),
                            'tag': 'ig_helper_notice',
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x3911de(0x16f),
                            'onclick': _0x123a5b => {
                                const _0x2bf160 = _0x3911de;
                                _0x123a5b?.[_0x2bf160(0x113)]();
                                var _0x4f10b6 = GM_openInTab(GM_info[_0x2bf160(0x2ba)][_0x2bf160(0x20c)]);
                                setTimeout(() => {
                                    const _0x7c3ad0 = _0x2bf160;
                                    _0x4f10b6[_0x7c3ad0(0xfd)]();
                                }, 0xfa);
                            }
                        })) : _0x32f9d0(_0x3911de(0x360));
                    } else
                        console[_0x3911de(0x29d)](_0x3911de(0x237));
                }
            });
        }
        function _0x3068ea() {
            const _0x30f8cb = _0x1154df;
            _0x2283e9(_0x30f8cb(0x381))[_0x30f8cb(0x197)](), _0x461a6a(), _0x2283e9('.IG_POPUP_DIG\x20#post_info')['text']('Preference\x20Settings'), _0x2283e9(_0x30f8cb(0xfb))[_0x30f8cb(0x260)](_0x30f8cb(0x1ea));
            for (let _0x153578 in _0x2d55b8) {
                _0x2283e9(_0x30f8cb(0x317))[_0x30f8cb(0x260)](_0x30f8cb(0x17a) + _0x153578 + '\x22\x20' + (_0x33d3f7[_0x30f8cb(0x135)] == _0x153578 ? 'selected' : '') + '>' + _0x2d55b8[_0x153578] + _0x30f8cb(0x111));
            }
            for (let _0x59a1f9 in _0xacfdce) {
                _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')['append'](_0x30f8cb(0x243) + (_0x27493b[_0x30f8cb(0x2d3)](_0x59a1f9) ? _0x30f8cb(0x300) : '') + '\x22\x20title=\x22' + _0x32d7df(_0x59a1f9 + _0x30f8cb(0x156)) + _0x30f8cb(0x274) + (_0x59a1f9 + '_INTRO') + _0x30f8cb(0x3cf) + _0x59a1f9 + '\x22>' + _0x32d7df(_0x59a1f9) + _0x30f8cb(0x2f2) + _0x59a1f9 + _0x30f8cb(0x17e) + (_0xacfdce[_0x59a1f9] === !![] ? _0x30f8cb(0x39f) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x59a1f9 === 'MODIFY_VIDEO_VOLUME' && _0x2283e9(_0x30f8cb(0x1f4) + _0x59a1f9 + '\x22]')[_0x30f8cb(0x3c1)](_0x30f8cb(0x18b))['on'](_0x30f8cb(0x1da), function (_0x544c30) {
                    const _0x6eae63 = _0x30f8cb;
                    _0x544c30[_0x6eae63(0x113)](), _0x2283e9(this)[_0x6eae63(0x1df)](_0x6eae63(0x116))[_0x6eae63(0x2d2)] === 0x0 && (_0x2283e9(this)[_0x6eae63(0x260)](_0x6eae63(0x143)), _0x2283e9(this)[_0x6eae63(0x178)](_0x6eae63(0x116))[_0x6eae63(0x260)](_0x6eae63(0x249) + _0x33d3f7[_0x6eae63(0x1ac)] + _0x6eae63(0x2eb)), _0x2283e9(this)[_0x6eae63(0x178)](_0x6eae63(0x116))[_0x6eae63(0x260)](_0x6eae63(0x249) + _0x33d3f7[_0x6eae63(0x1ac)] + '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>'), _0x2283e9(this)['children'](_0x6eae63(0x116))['append'](_0x6eae63(0x161) + _0x549145[_0x6eae63(0x37a)] + _0x6eae63(0x275)));
                }), _0x59a1f9 === 'AUTO_RENAME' && _0x2283e9(_0x30f8cb(0x1f4) + _0x59a1f9 + '\x22]')['parent'](_0x30f8cb(0x18b))['on'](_0x30f8cb(0x1da), function (_0x41bab3) {
                    const _0x3a833f = _0x30f8cb;
                    _0x41bab3[_0x3a833f(0x113)](), _0x2283e9(this)[_0x3a833f(0x1df)](_0x3a833f(0x116))['length'] === 0x0 && (_0x2283e9(this)['append'](_0x3a833f(0x143)), _0x2283e9(this)['children'](_0x3a833f(0x116))[_0x3a833f(0x260)](_0x3a833f(0x109) + _0x33d3f7[_0x3a833f(0x299)] + _0x3a833f(0x10a)), _0x2283e9(this)[_0x3a833f(0x178)](_0x3a833f(0x116))[_0x3a833f(0x260)]('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x549145[_0x3a833f(0x37a)] + _0x3a833f(0x275)));
                });
            }
        }
        function _0x5f4be1() {
            const _0x2249e5 = _0x1154df;
            _0x2283e9(_0x2249e5(0x381))[_0x2249e5(0x197)](), _0x461a6a(), _0x2283e9(_0x2249e5(0x214))[_0x2249e5(0x3ab)]('IG\x20Debug\x20DOM\x20Tree'), _0x2283e9(_0x2249e5(0x32c))['append']('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x2283e9(_0x2249e5(0x32c))[_0x2249e5(0x260)](_0x2249e5(0x26f)), _0x2283e9(_0x2249e5(0x157))[_0x2249e5(0x260)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x32d7df(_0x2249e5(0x253)) + _0x2249e5(0x11f)), _0x2283e9(_0x2249e5(0x157))[_0x2249e5(0x260)](_0x2249e5(0x2f6) + _0x32d7df(_0x2249e5(0x245)) + '</a></button>'), _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append'](_0x2249e5(0x170) + _0x32d7df(_0x2249e5(0x11b)) + _0x2249e5(0x13a)), _0x2283e9(_0x2249e5(0x157))['append'](_0x2249e5(0x302) + _0x32d7df(_0x2249e5(0x225)) + '</a></button>'), _0x2283e9(_0x2249e5(0x157))['append'](_0x2249e5(0x175) + _0x32d7df(_0x2249e5(0x2f8)) + _0x2249e5(0x11f));
        }
        function _0xf93c11() {
            const _0x44585e = _0x1154df;
            _0x2283e9(_0x44585e(0x381))['remove'](), _0x461a6a(), _0x2283e9(_0x44585e(0x214))[_0x44585e(0x3ab)](_0x44585e(0x146)), _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY')[_0x44585e(0x260)](_0x44585e(0x26f)), _0x2283e9(_0x44585e(0x157))['append'](_0x44585e(0x36d) + _0x32d7df('REPORT_FORK') + '</a></button>'), _0x2283e9(_0x44585e(0x157))[_0x44585e(0x260)](_0x44585e(0x302) + _0x32d7df(_0x44585e(0x225)) + '</a></button>'), _0x2283e9(_0x44585e(0x157))[_0x44585e(0x260)](_0x44585e(0x175) + _0x32d7df('REPORT_DISCORD') + '</a></button>');
        }
        function _0x32e483(_0x1f56c3) {
            const _0x4e2ef2 = _0x1154df;
            var _0x55f472 = document[_0x4e2ef2(0x3bd)]('a');
            _0x55f472[_0x4e2ef2(0x151)] = _0x1f56c3, _0x55f472['target'] = _0x4e2ef2(0x359), document[_0x4e2ef2(0x226)][_0x4e2ef2(0x20f)](_0x55f472), _0x55f472[_0x4e2ef2(0x1b5)](), _0x55f472[_0x4e2ef2(0x197)]();
        }
        function _0x213754() {
            const _0xa4668d = _0x1154df;
            clearInterval(_0x33d3f7[_0xa4668d(0x2b4)]), _0x33d3f7[_0xa4668d(0x230)]['forEach'](_0x32d1a4 => {
                const _0x5cfe3b = _0xa4668d;
                _0x32d1a4[_0x5cfe3b(0x1b4)][_0x5cfe3b(0x373)](_0x175f68 => {
                    const _0xc9026a = _0x5cfe3b;
                    _0x2283e9(_0x32d1a4[_0xc9026a(0x1ad)])[_0xc9026a(0x3be)](_0xc9026a(0x1b5), _0x175f68);
                });
            }), _0x33d3f7[_0xa4668d(0x230)] = [], _0x2283e9(_0xa4668d(0x2d5))[_0xa4668d(0x197)](), _0x2283e9('.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL')[_0xa4668d(0x197)](), _0x2283e9(_0xa4668d(0x1aa))['removeAttr']('data-snig'), _0x33d3f7[_0xa4668d(0x2c6)] = ![], _0x33d3f7[_0xa4668d(0x1a1)] = ![], _0x33d3f7['currentURL'] = location[_0xa4668d(0x151)], _0x33d3f7['GL_observer'][_0xa4668d(0x36b)](), _0x32f9d0(_0xa4668d(0x365));
        }
        function _0x32f9d0(..._0xe12873) {
            const _0x41824a = _0x1154df;
            var _0x1c4edd = new Date();
            _0x33d3f7[_0x41824a(0x2b8)][_0x41824a(0x3a8)]({
                'time': _0x1c4edd[_0x41824a(0x10c)](),
                'content': [..._0xe12873]
            }), _0x33d3f7[_0x41824a(0x2b8)][_0x41824a(0x2d2)] > 0x3e8 && (_0x33d3f7[_0x41824a(0x2b8)] = [
                {
                    'time': _0x1c4edd[_0x41824a(0x10c)](),
                    'content': [_0x41824a(0x246)]
                },
                ..._0x33d3f7['GL_logger'][_0x41824a(0x2ef)](-0x3e7)
            ]), console['log']('[' + _0x1c4edd[_0x41824a(0x3a5)]() + ']', ..._0xe12873);
        }
        function _0x455da2() {
            const _0x43e38e = _0x1154df;
            for (let _0x386877 in _0xacfdce) {
                GM_getValue(_0x386877) != null && typeof GM_getValue(_0x386877) === _0x43e38e(0x1e8) && (_0xacfdce[_0x386877] = GM_getValue(_0x386877), _0x386877 === _0x43e38e(0x3cb) && GM_getValue(_0x386877) !== !![] && (_0x33d3f7[_0x43e38e(0x1ac)] = 0x1));
            }
        }
        function _0x3bfd65(_0x58f389, _0x38c473, _0x1d3512, _0x23c256 = '') {
            const _0xa28680 = _0x1154df;
            _0x38c473[_0xa28680(0x1df)]('div.volume_slider')[_0xa28680(0x2d2)] === 0x0 ? (_0x38c473[_0xa28680(0x260)](_0xa28680(0x3c9) + _0x23c256 + _0xa28680(0x10a)), _0x38c473['find'](_0xa28680(0x1d4))[_0xa28680(0x260)](_0xa28680(0x12d) + _0x33d3f7[_0xa28680(0x1ac)] + _0xa28680(0x21d)), _0x38c473[_0xa28680(0x1df)](_0xa28680(0x15c))[_0xa28680(0x3ca)](_0xa28680(0x27d), _0xa28680(0x20a) + (_0x33d3f7[_0xa28680(0x1ac)] * 0x64 + '%')), _0x38c473[_0xa28680(0x1df)]('div.volume_slider\x20input')['on'](_0xa28680(0x1e3), function () {
                const _0x2edb60 = _0xa28680;
                var _0x4da08e = _0x2283e9(this)[_0x2edb60(0x20d)]() * 0x64 + '%';
                _0x33d3f7[_0x2edb60(0x1ac)] = _0x2283e9(this)[_0x2edb60(0x20d)](), GM_setValue('G_VIDEO_VOLUME', _0x2283e9(this)[_0x2edb60(0x20d)]()), _0x2283e9(this)['attr'](_0x2edb60(0x27d), _0x2edb60(0x20a) + _0x4da08e), _0x58f389['each'](function () {
                    const _0x3c91c2 = _0x2edb60;
                    _0x32f9d0('(' + _0x1d3512 + ')', 'video\x20volume\x20changed\x20#slider'), this[_0x3c91c2(0x28a)] = _0x33d3f7[_0x3c91c2(0x1ac)];
                });
            }), _0x38c473[_0xa28680(0x1df)]('div.volume_slider\x20input')['on'](_0xa28680(0x35b), function () {
                const _0x1143d8 = _0xa28680;
                var _0x1d397b = _0x33d3f7[_0x1143d8(0x1ac)] * 0x64 + '%';
                _0x2283e9(this)[_0x1143d8(0x3ca)](_0x1143d8(0x27d), '--ig-track-progress:\x20' + _0x1d397b), _0x2283e9(this)[_0x1143d8(0x20d)](_0x33d3f7[_0x1143d8(0x1ac)]), _0x58f389[_0x1143d8(0x206)](function () {
                    const _0x2cbadf = _0x1143d8;
                    _0x32f9d0('(' + _0x1d3512 + ')', _0x2cbadf(0x343)), this[_0x2cbadf(0x28a)] = _0x33d3f7[_0x2cbadf(0x1ac)];
                });
            }), _0x38c473[_0xa28680(0x1df)](_0xa28680(0x1d4))['on'](_0xa28680(0x1b5), function (_0x22b05a) {
                _0x22b05a['stopPropagation'](), _0x22b05a['preventDefault']();
            })) : _0x38c473[_0xa28680(0x1df)](_0xa28680(0x1d4))['remove']();
        }
        var _0x888089 = null;
        function _0x289f83(_0x469a42) {
            const _0x36cb40 = _0x1154df;
            _0x1aa68d(), _0x2283e9(_0x36cb40(0x226))[_0x36cb40(0x260)](_0x36cb40(0x288) + _0x549145[_0x36cb40(0x1d5)] + _0x36cb40(0x2ec) + _0x549145['TURN_DEG'] + _0x36cb40(0x1a2) + _0x549145[_0x36cb40(0x37a)] + '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_transform\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_rotate\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20</div>');
            const _0x1431f9 = _0x2283e9(_0x36cb40(0x3b0)), _0x4601b0 = _0x2283e9(_0x36cb40(0x222)), _0x109e02 = _0x2283e9('#iv_transform'), _0x1dd0cc = _0x2283e9(_0x36cb40(0x3a1)), _0x29556f = _0x2283e9(_0x36cb40(0x394)), _0x5ab1fc = _0x2283e9(_0x36cb40(0x2af)), _0x5d2416 = _0x2283e9('#iv_image'), _0x5e19c2 = _0x2283e9(_0x36cb40(0x3c5)), _0x40fd9d = _0x2283e9(_0x36cb40(0x160));
            _0x5d2416[_0x36cb40(0x3ca)]('src', _0x469a42), _0x1431f9[_0x36cb40(0x3c3)](_0x36cb40(0x2bd), _0x36cb40(0x183)), _0x109e02[_0x36cb40(0x3c3)](_0x36cb40(0x13b), _0x36cb40(0x3c4)), _0x109e02['css']('transition', _0x36cb40(0x3d0)), _0x1dd0cc['css'](_0x36cb40(0x13b), _0x36cb40(0x2e4)), _0x1dd0cc[_0x36cb40(0x3c3)](_0x36cb40(0x1e4), _0x36cb40(0x3d0)), _0x109e02[_0x36cb40(0x3c3)](_0x36cb40(0x19f), 'transform'), _0x1dd0cc[_0x36cb40(0x3c3)]('will-change', _0x36cb40(0x33e));
            let _0xefb096 = 0x0, _0x3b7ae5 = 0x1, _0x43d468 = 0x0, _0x4956b6 = 0x0, _0x5310ec = ![], _0x544284 = ![], _0x79f96c, _0x4a72e6;
            var _0x2ee5e7 = {
                'x': 0x0,
                'y': 0x0
            };
            _0x888089 = setInterval(() => {
                const _0xfca165 = {
                    'x': _0x43d468,
                    'y': _0x4956b6
                };
                _0xfca165['x'] !== _0x2ee5e7['x'] || _0xfca165['y'] !== _0x2ee5e7['y'] ? _0x544284 = !![] : _0x544284 = ![], _0x2ee5e7 = _0xfca165;
            }, 0x64), _0x5d2416['on'](_0x36cb40(0x150), () => {
                _0x43d468 = 0x0, _0x4956b6 = 0x0, _0x1a47ce();
            }), _0x5d2416['on']('dragstart\x20drop', _0x38c597 => {
                const _0x26c5da = _0x36cb40;
                _0x38c597[_0x26c5da(0x113)]();
            }), _0x5d2416['on'](_0x36cb40(0x1b5), _0x20dac3 => {
                const _0x265073 = _0x36cb40;
                _0x20dac3[_0x265073(0x113)](), _0x20dac3[_0x265073(0x1be)](), !_0x544284 && (_0x3b7ae5 <= 0x1 ? _0x4d2f4b(_0x20dac3, Math['min'](Math[_0x265073(0x2b2)](0x1, _0x3b7ae5 + 1.25), 0x5)) : (_0x3b7ae5 = 0x1, _0x43d468 = 0x0, _0x4956b6 = 0x0), _0x1a47ce());
            }), _0x4601b0['on'](_0x36cb40(0x2c9), _0x5d99d4 => {
                const _0x425018 = _0x36cb40;
                _0x5d99d4[_0x425018(0x113)](), _0x4d2f4b(_0x5d99d4);
            }), _0x1431f9['on'](_0x36cb40(0x2c9), _0xd3c8e1 => {
                _0xd3c8e1['preventDefault']();
            }), _0x5d2416['on']('mousedown', _0x2b88da => {
                const _0x3b7e37 = _0x36cb40;
                if (_0x3b7ae5 == 0x1)
                    return;
                _0x5310ec = !![], _0x79f96c = _0x2b88da[_0x3b7e37(0x3af)] - _0x43d468, _0x4a72e6 = _0x2b88da[_0x3b7e37(0x233)] - _0x4956b6, _0x5d2416[_0x3b7e37(0x3c3)](_0x3b7e37(0x108), _0x3b7e37(0x379));
            }), _0x5d2416['on'](_0x36cb40(0x22f), () => {
                const _0x5ecc92 = _0x36cb40;
                if (_0x3b7ae5 == 0x1)
                    return;
                _0x5310ec = ![], _0x5d2416[_0x5ecc92(0x3c3)]('cursor', _0x5ecc92(0x2b0));
            }), _0x5e19c2['on']('click', function () {
                _0xefb096 -= 0x5a, _0x1a47ce();
            }), _0x40fd9d['on'](_0x36cb40(0x1b5), function () {
                _0xefb096 += 0x5a, _0x1a47ce();
            }), _0x2283e9(document)['on'](_0x36cb40(0x234), _0x3b5f7c => {
                const _0x2d4dea = _0x36cb40;
                if (!_0x5310ec)
                    return;
                _0x3b5f7c[_0x2d4dea(0x113)](), _0x43d468 = _0x3b5f7c[_0x2d4dea(0x3af)] - _0x79f96c, _0x4956b6 = _0x3b5f7c['pageY'] - _0x4a72e6, _0x1a47ce();
            }), _0x1431f9['on']('click', () => {
                _0x1aa68d();
            }), _0x5ab1fc['on'](_0x36cb40(0x1b5), () => {
                _0x1aa68d();
            }), _0x29556f['on'](_0x36cb40(0x1b5), _0x5dd857 => {
                const _0x517fc8 = _0x36cb40;
                _0x5dd857[_0x517fc8(0x113)](), _0x5dd857[_0x517fc8(0x1be)]();
            });
            function _0x1a47ce() {
                const _0x1541d9 = _0x36cb40;
                _0x109e02[_0x1541d9(0x3c3)](_0x1541d9(0x1e4), _0x544284 ? _0x1541d9(0x21e) : _0x1541d9(0x3d0)), _0x109e02[_0x1541d9(0x3c3)](_0x1541d9(0x33e), _0x1541d9(0x1ae) + _0x43d468 + _0x1541d9(0x1a5) + _0x4956b6 + 'px)\x20scale(' + _0x3b7ae5 + ')'), _0x1dd0cc[_0x1541d9(0x3c3)](_0x1541d9(0x33e), 'rotate(' + _0xefb096 + _0x1541d9(0x1a9)), _0x3b7ae5 == 0x1 ? _0x5d2416[_0x1541d9(0x3c3)](_0x1541d9(0x108), _0x1541d9(0x126)) : _0x5d2416['css'](_0x1541d9(0x108), 'grabbing');
            }
            function _0x4d2f4b(_0x421738, _0x579add) {
                const _0x3e3b55 = _0x36cb40;
                _0x421738['preventDefault']();
                let _0x1ba198 = _0x3b7ae5;
                if (_0x579add == null) {
                    let _0x4bd7b8 = 0.1, _0x2be669 = _0x421738['originalEvent']['deltaY'] < 0x0 ? 0x1 : -0x1;
                    _0x3b7ae5 = Math['min'](0x5, Math[_0x3e3b55(0x2b2)](0x1, _0x3b7ae5 + _0x2be669 * _0x4bd7b8 * _0x3b7ae5));
                } else
                    _0x3b7ae5 = _0x579add;
                let _0x35456c = _0x4601b0[0x0]['getBoundingClientRect'](), _0x3bb0e8 = _0x421738['clientX'] - _0x35456c[_0x3e3b55(0x312)], _0x46306c = _0x421738[_0x3e3b55(0x167)] - _0x35456c[_0x3e3b55(0x1e2)], _0x63921f = (_0x3bb0e8 - _0x43d468) / _0x1ba198, _0x20fd01 = (_0x46306c - _0x4956b6) / _0x1ba198;
                _0x43d468 = -_0x63921f * _0x3b7ae5 + _0x3bb0e8, _0x4956b6 = -_0x20fd01 * _0x3b7ae5 + _0x46306c, _0x1a47ce();
            }
        }
        function _0x1aa68d() {
            const _0x30a91b = _0x1154df;
            clearInterval(_0x888089), _0x2283e9(_0x30a91b(0x3b0))[_0x30a91b(0x197)](), _0x2283e9(document)[_0x30a91b(0x3be)](_0x30a91b(0x234));
        }
        function _0x480b39() {
            const _0x53d903 = _0x1154df;
            var _0x2ea3cf = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': 'Wololo!\x20New\x20version\x20released.',
                        'NOTICE_UPDATE_CONTENT': _0x53d903(0x123),
                        'CHECK_UPDATE': _0x53d903(0x396),
                        'CHECK_UPDATE_MENU': _0x53d903(0x241),
                        'CHECK_UPDATE_INTRO': _0x53d903(0x1f7),
                        'RELOAD_SCRIPT': 'Reload\x20Script',
                        'DONATE': _0x53d903(0x1b2),
                        'FEEDBACK': 'Feedback',
                        'IMAGE_VIEWER': 'Open\x20Image\x20In\x20Viewer',
                        'NEW_TAB': _0x53d903(0x2c2),
                        'SHOW_DOM_TREE': _0x53d903(0x336),
                        'SELECT_AND_COPY': _0x53d903(0x2cb),
                        'DOWNLOAD_DOM_TREE': _0x53d903(0x171),
                        'REPORT_GITHUB': _0x53d903(0x14e),
                        'REPORT_DISCORD': 'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
                        'REPORT_FORK': _0x53d903(0x23b),
                        'DEBUG': 'Debug\x20Window',
                        'CLOSE': _0x53d903(0x2e0),
                        'ALL_CHECK': _0x53d903(0x1e9),
                        'BATCH_DOWNLOAD_SELECTED': _0x53d903(0x30d),
                        'BATCH_DOWNLOAD_DIRECT': _0x53d903(0x2c0),
                        'IMG': _0x53d903(0x3a0),
                        'VID': _0x53d903(0x2a0),
                        'DW': _0x53d903(0x240),
                        'DW_ALL': _0x53d903(0x2c0),
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': 'Loading\x20Blob\x20Media...',
                        'LOAD_BLOB_MULTIPLE': 'Loading\x20Blob\x20Media\x20and\x20Others...',
                        'LOAD_BLOB_RELOAD': _0x53d903(0x204),
                        'NO_CHECK_RESOURCE': 'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
                        'NO_VID_URL': 'Cannot\x20find\x20video\x20URL.',
                        'SETTING': _0x53d903(0x339),
                        'AUTO_RENAME': 'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': _0x53d903(0x3ba),
                        'RENAME_LOCATE_DATE': 'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
                        'DISABLE_VIDEO_LOOPING': _0x53d903(0x19c),
                        'HTML5_VIDEO_CONTROL': _0x53d903(0x290),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x53d903(0x184),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x53d903(0x29b),
                        'DIRECT_DOWNLOAD_ALL': _0x53d903(0x279),
                        'MODIFY_VIDEO_VOLUME': _0x53d903(0x289),
                        'MODIFY_RESOURCE_EXIF': _0x53d903(0x1f6),
                        'SCROLL_BUTTON': _0x53d903(0x3a9),
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x53d903(0x30b),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x53d903(0x101),
                        'AUTO_RENAME_INTRO': _0x53d903(0x332),
                        'RENAME_SHORTCODE_INTRO': _0x53d903(0x27a),
                        'RENAME_PUBLISH_DATE_INTRO': 'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_LOCATE_DATE_INTRO': 'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'DISABLE_VIDEO_LOOPING_INTRO': 'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
                        'HTML5_VIDEO_CONTROL_INTRO': 'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x53d903(0x2e5),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x53d903(0x211),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x53d903(0x152),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x53d903(0x292),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x53d903(0x198),
                        'SCROLL_BUTTON_INTRO': _0x53d903(0x257),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x53d903(0x131),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x53d903(0x395),
                        'SKIP_VIEW_STORY_CONFIRM': 'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x53d903(0x296),
                        'MODIFY_RESOURCE_EXIF_INTRO': 'Modify\x20the\x20EXIF\x20​​properties\x20of\x20the\x20image\x20resource\x20to\x20place\x20the\x20post\x20link\x20in\x20it.',
                        'DIRECT_DOWNLOAD_STORY': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Story/Highlight',
                        'DIRECT_DOWNLOAD_STORY_INTRO': _0x53d903(0x107)
                    }
                }, _0x4787ec = Object[_0x53d903(0x20b)]({}, _0x2ea3cf, _0x33d3f7['locale']), _0x29d722 = Object[_0x53d903(0x18a)](_0x4787ec)['sort']()[_0x53d903(0x3b1)]((_0x5bd4af, _0x27adb9) => {
                    return _0x5bd4af[_0x27adb9] = _0x4787ec[_0x27adb9], _0x5bd4af;
                }, {});
            return _0x29d722;
        }
        async function _0x10d6a2(_0xea049c) {
            return new Promise((_0x1c81f8, _0x5a8ca5) => {
                const _0x4a47c9 = a0_0x47e8;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x4a47c9(0x319) + _0xea049c + _0x4a47c9(0x392),
                    'onload': function (_0x470a7e) {
                        const _0x393cf1 = _0x4a47c9;
                        try {
                            let _0x4b456c = JSON['parse'](_0x470a7e[_0x393cf1(0x2d9)]);
                            _0x1c81f8(_0x4b456c);
                        } catch (_0x45f1bb) {
                            _0x5a8ca5(_0x45f1bb);
                        }
                    },
                    'onerror': function (_0x450fbd) {
                        const _0x58c305 = _0x4a47c9;
                        _0x32f9d0(_0x58c305(0x1e5), _0x58c305(0x26c), _0x450fbd), _0x5a8ca5(_0x450fbd);
                    }
                });
            });
        }
        function _0x32d7df(_0x4424c2) {
            const _0x1f48ba = _0x1154df, _0x252c30 = _0x480b39();
            return _0x252c30[_0x33d3f7[_0x1f48ba(0x135)]] != undefined && _0x252c30[_0x33d3f7[_0x1f48ba(0x135)]][_0x4424c2] != undefined ? _0x252c30[_0x33d3f7['lang']][_0x4424c2] : _0x252c30['en-US'][_0x4424c2];
        }
        function _0x582092() {
            const _0x2b47e0 = _0x1154df;
            _0x2283e9(_0x2b47e0(0x3d4))['each'](function () {
                const _0xbb69bb = _0x2b47e0;
                _0x2283e9(this)['text'](_0x32d7df(_0x2283e9(this)[_0xbb69bb(0x3ca)](_0xbb69bb(0x163))));
            }), _0x2283e9(_0x2b47e0(0x362))[_0x2b47e0(0x206)](function () {
                const _0x1932f5 = _0x2b47e0;
                _0x2283e9(this)['attr'](_0x1932f5(0x2dc), _0x32d7df(_0x2283e9(this)[_0x1932f5(0x3ca)](_0x1932f5(0x322))));
            });
        }
        _0x2283e9(function () {
            const _0x54e3e8 = _0x1154df;
            function _0x2654c3(_0x5af820) {
                const _0xeffeeb = a0_0x47e8;
                var _0x27c6bc = [];
                for (var _0x4669e3 of _0x5af820) {
                    _0x27c6bc[_0xeffeeb(0x3a8)]({
                        'tagName': _0x4669e3['tagName'],
                        'id': _0x4669e3['id'],
                        'className': _0x4669e3['className']
                    });
                }
                return _0x27c6bc;
            }
            function _0x369574() {
                const _0x169da4 = a0_0x47e8;
                let _0x1701b0 = _0x2283e9(_0x169da4(0x12e))[0x0];
                var _0x42b9f9 = '';
                _0x33d3f7[_0x169da4(0x2b8)][_0x169da4(0x373)](_0x469b43 => {
                    const _0x23da9b = _0x169da4;
                    var _0x59d88b = JSON['stringify'](_0x469b43[_0x23da9b(0x231)], function (_0x100732, _0x47a6af) {
                        const _0x80ca57 = _0x23da9b;
                        if (Array[_0x80ca57(0x3b7)](this)) {
                            if (typeof _0x47a6af === _0x80ca57(0x11a) && _0x47a6af instanceof jQuery)
                                return _0x2654c3(_0x47a6af);
                            return _0x47a6af;
                        } else
                            return _0x47a6af;
                    }, '\x09');
                    _0x42b9f9 += new Date(_0x469b43[_0x23da9b(0x33f)])['toISOString']() + ':\x20' + _0x59d88b + '\x0a';
                }), _0x2283e9(_0x169da4(0x106))['text']('Logger:\x0a' + _0x42b9f9 + _0x169da4(0x2bb) + location[_0x169da4(0x2bc)] + _0x169da4(0x21c) + _0x1701b0['innerHTML']);
            }
            _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x149), function () {
                _0x369574();
            }), _0x2283e9(_0x54e3e8(0x226))['on']('click', '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x4561af = _0x54e3e8;
                _0x2283e9(_0x4561af(0x106))[_0x4561af(0x1dc)](), document[_0x4561af(0x24f)](_0x4561af(0x3bb));
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x3b9), function () {
                const _0x35ea9e = _0x54e3e8;
                _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')[_0x35ea9e(0x3ab)]()[_0x35ea9e(0x2d2)] === 0x0 && _0x369574();
                var _0x2d60b0 = _0x2283e9('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea')['text'](), _0x489cbc = document[_0x35ea9e(0x3bd)]('a'), _0x3a2fa5 = new Blob([_0x2d60b0], { 'type': _0x35ea9e(0x192) });
                _0x489cbc[_0x35ea9e(0x151)] = URL[_0x35ea9e(0x399)](_0x3a2fa5), _0x489cbc['download'] = 'DOMTree-' + new Date()[_0x35ea9e(0x10c)]() + '.txt', document[_0x35ea9e(0x226)][_0x35ea9e(0x20f)](_0x489cbc), _0x489cbc[_0x35ea9e(0x1b5)](), _0x489cbc[_0x35ea9e(0x197)]();
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x29c), function () {
                const _0x35eebe = _0x54e3e8;
                _0x2283e9(this)[_0x35eebe(0x3c1)](_0x35eebe(0x116))['length'] > 0x0 ? _0x2283e9(this)['parent']('#tempWrapper')[_0x35eebe(0x10e)](0xfa, function () {
                    _0x2283e9(this)['remove']();
                }) : _0x2283e9('.IG_POPUP_DIG')['remove']();
            }), _0x2283e9(window)['on'](_0x54e3e8(0x1cf), function (_0x77991a) {
                const _0x2885dd = _0x54e3e8;
                _0x77991a[_0x2885dd(0x203)] == '81' && _0x77991a[_0x2885dd(0x376)] && (_0x2283e9(_0x2885dd(0x381))[_0x2885dd(0x197)](), _0x77991a[_0x2885dd(0x113)]()), _0x77991a['which'] == '87' && _0x77991a[_0x2885dd(0x376)] && (_0x3068ea(), _0x77991a['preventDefault']()), _0x77991a[_0x2885dd(0x203)] == '90' && _0x77991a[_0x2885dd(0x376)] && (_0x5f4be1(), _0x77991a[_0x2885dd(0x113)]()), _0x77991a[_0x2885dd(0x203)] == '82' && _0x77991a['altKey'] && (_0x213754(), _0x77991a['preventDefault']()), _0x77991a[_0x2885dd(0x203)] == '83' && _0x77991a[_0x2885dd(0x376)] && (location[_0x2885dd(0x151)][_0x2885dd(0x353)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x2283e9('.IG_DWSTORY')[_0x2885dd(0x2d2)] > 0x0 && _0x2283e9(_0x2885dd(0x1e6))?.['trigger'](_0x2885dd(0x1b5)), location[_0x2885dd(0x151)][_0x2885dd(0x353)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x2283e9('.IG_DWHISTORY')[_0x2885dd(0x2d2)] > 0x0 && _0x2283e9('.IG_DWHISTORY')?.[_0x2885dd(0x1b4)](_0x2885dd(0x1b5)), _0x77991a[_0x2885dd(0x113)]());
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x2a9), '.IG_POPUP_DIG\x20input', function () {
                const _0x4438c9 = _0x54e3e8;
                var _0x67ad02 = _0x2283e9(this)[_0x4438c9(0x3ca)]('id');
                if (_0x67ad02 && _0xacfdce[_0x67ad02] !== undefined) {
                    let _0x207a0a = _0x2283e9(this)[_0x4438c9(0x2a2)](_0x4438c9(0x39f));
                    GM_setValue(_0x67ad02, _0x207a0a), _0xacfdce[_0x67ad02] = _0x207a0a, console[_0x4438c9(0x25b)](_0x4438c9(0x227), _0x67ad02, _0x207a0a);
                }
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x338), function (_0x497475) {
                const _0x423903 = _0x54e3e8;
                _0x2283e9(this)[_0x423903(0x1df)](_0x423903(0x116))['length'] > 0x0 && _0x497475[_0x423903(0x113)]();
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x2a9), _0x54e3e8(0x36c), function () {
                const _0x43d778 = _0x54e3e8;
                let _0x570708 = _0x2283e9(this)[_0x43d778(0x20d)]();
                _0x2283e9(this)[_0x43d778(0x3ca)](_0x43d778(0x32e)) == 'range' ? _0x2283e9(this)[_0x43d778(0x31b)]()['val'](_0x570708) : _0x2283e9(this)[_0x43d778(0xfc)]()[_0x43d778(0x20d)](_0x570708), _0x570708 >= 0x0 && _0x570708 <= 0x1 && (_0x33d3f7[_0x43d778(0x1ac)] = _0x570708, GM_setValue(_0x43d778(0x384), _0x570708));
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1e3), _0x54e3e8(0x36c), function () {
                const _0x56301c = _0x54e3e8;
                if (_0x2283e9(this)[_0x56301c(0x3ca)](_0x56301c(0x32e)) == _0x56301c(0x20e)) {
                    let _0x2809aa = _0x2283e9(this)[_0x56301c(0x20d)]();
                    _0x2283e9(this)[_0x56301c(0x31b)]()['val'](_0x2809aa);
                } else {
                    let _0x438a2e = _0x2283e9(this)['val']();
                    _0x438a2e >= 0x0 && _0x438a2e <= 0x1 ? _0x2283e9(this)['prev']()['val'](_0x438a2e) : _0x438a2e < 0x0 ? _0x2283e9(this)[_0x56301c(0x20d)](0x0) : _0x2283e9(this)[_0x56301c(0x20d)](0x1);
                }
            }), _0x2283e9('body')['on'](_0x54e3e8(0x1e3), _0x54e3e8(0xf6), function () {
                const _0x1d0cda = _0x54e3e8;
                GM_setValue(_0x1d0cda(0x3b2), _0x2283e9(this)[_0x1d0cda(0x20d)]()), _0x33d3f7[_0x1d0cda(0x299)] = _0x2283e9(this)['val']();
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), 'a[data-needed=\x22direct\x22]', function (_0x5b6f26) {
                const _0x11b234 = _0x54e3e8;
                _0x5b6f26[_0x11b234(0x113)](), _0x1a17e6(this);
            }), _0x2283e9(_0x54e3e8(0x226))['on']('click', _0x54e3e8(0x3a2), function () {
                const _0x3ca482 = _0x54e3e8;
                if (_0xacfdce[_0x3ca482(0x3b6)] && _0xacfdce[_0x3ca482(0x1d6)])
                    _0x1a17e6(_0x2283e9(this)[_0x3ca482(0x3c1)]()[_0x3ca482(0x178)]('a')['first']()[0x0], !![]);
                else {
                    var _0x5164cc = new URL(_0x2283e9(this)[_0x3ca482(0x3c1)]()[_0x3ca482(0x178)]('a')['attr'](_0x3ca482(0x363)));
                    _0x5164cc[_0x3ca482(0x138)] = _0x3ca482(0x1f3), _0x32e483(_0x5164cc[_0x3ca482(0x151)]);
                }
            }), _0x2283e9(_0x54e3e8(0x226))['on']('click', '.IG_POPUP_DIG_BODY\x20.videoThumbnail', function () {
                const _0x74ca0f = _0x54e3e8;
                let _0x521755 = new Date()['getTime']();
                _0xacfdce[_0x74ca0f(0x34f)] && _0x2283e9(this)[_0x74ca0f(0x3c1)]()[_0x74ca0f(0x178)]('a')['attr'](_0x74ca0f(0x280)) && (_0x521755 = _0x2283e9(this)['parent']()['children']('a')[_0x74ca0f(0x3ca)]('datetime'));
                let _0x1f9cc9 = _0x2283e9(this)[_0x74ca0f(0x3c1)]()['children']('a')['attr'](_0x74ca0f(0x2f1)) ?? _0x2283e9(_0x74ca0f(0x17f))[_0x74ca0f(0x3ab)]();
                _0x2f4df2(_0x2283e9(this)['parent']()['children']('a')['find'](_0x74ca0f(0x199))['first']()[_0x74ca0f(0x3ca)](_0x74ca0f(0x24d)), _0x2283e9(this)[_0x74ca0f(0x3c1)]()[_0x74ca0f(0x178)]('a')['attr'](_0x74ca0f(0x38e)), 'thumbnail', _0x521755, 'jpg', _0x1f9cc9);
            }), _0x2283e9('body')['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x1e6), function () {
                _0x1ccfdd(!![]);
            }), _0x2283e9('body')['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x247), function () {
                _0x2538e9();
            }), _0x2283e9('body')['on']('click', _0x54e3e8(0x19d), function (_0xd375f7) {
                _0xd375f7['preventDefault'](), _0x1ccfdd(!![], !![], !![]);
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x10b), function () {
                _0x2ef92a(!![]);
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x2d1), function (_0x3a579c) {
                const _0x34fc0d = _0x54e3e8;
                _0x3a579c[_0x34fc0d(0x1be)](), _0x546396(!![]);
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x1c5), function () {
                _0x3769b8(!![]);
            }), _0x2283e9('body')['on']('click', _0x54e3e8(0x264), function () {
                _0xdee940();
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x354), function (_0x5d4f4e) {
                const _0x3a7f56 = _0x54e3e8;
                _0x5d4f4e[_0x3a7f56(0x113)](), _0x3769b8(!![], !![]);
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x28e), function () {
                _0x5ce9c1(!![]);
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), '.IG_REELS', function () {
                _0x50fb08(!![], !![]);
            }), _0x2283e9(_0x54e3e8(0x226))['on']('click', '.IG_REELS_NEWTAB', function () {
                _0x50fb08(!![], !![], !![]);
            }), _0x2283e9(_0x54e3e8(0x226))['on']('click', '.IG_REELS_THUMBNAIL', function () {
                _0x50fb08(!![], ![]);
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1f5), _0x54e3e8(0x16e), function (_0x50ad50) {
                const _0x29f269 = _0x54e3e8;
                if (_0x50ad50[_0x29f269(0x203)] === 0x3 || _0x50ad50[_0x29f269(0x203)] === 0x2) {
                    if (location['href'] === _0x29f269(0x27c) && _0xacfdce[_0x29f269(0x128)]) {
                        _0x50ad50[_0x29f269(0x113)]();
                        if (_0x2283e9(this)['find'](_0x29f269(0xf7))[_0x29f269(0x2d2)] > 0x0) {
                            const _0x153a91 = _0x29f269(0x27c) + _0x2283e9(this)[_0x29f269(0x178)](_0x29f269(0x1ab))[_0x29f269(0x190)]()[_0x29f269(0x3ab)]();
                            _0x50ad50[_0x29f269(0x203)] === 0x2 ? GM_openInTab(_0x153a91) : location['href'] = _0x153a91;
                        }
                    }
                }
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x2a9), _0x54e3e8(0x1d1), function () {
                const _0x4bce6c = _0x54e3e8;
                var _0x179ffc = _0x2283e9(this)[_0x4bce6c(0x1df)](_0x4bce6c(0x1e3))[_0x4bce6c(0x2a2)](_0x4bce6c(0x39f));
                _0x2283e9(_0x4bce6c(0x1ef))['each'](function () {
                    const _0x5a9023 = _0x4bce6c;
                    _0x2283e9(this)[_0x5a9023(0x2a2)]('checked', _0x179ffc);
                });
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x2a9), '.IG_POPUP_DIG_BODY\x20.inner_box', function () {
                const _0x1453d7 = _0x54e3e8;
                var _0x4f61be = _0x2283e9('.IG_POPUP_DIG_BODY\x20.inner_box:checked')['length'], _0x5350ac = _0x2283e9(_0x1453d7(0x1ef))[_0x1453d7(0x2d2)];
                _0x2283e9(_0x1453d7(0x1d1))[_0x1453d7(0x1df)](_0x1453d7(0x1e3))[_0x1453d7(0x2a2)]('checked', _0x4f61be == _0x5350ac);
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x267), function () {
                const _0x175cdc = _0x54e3e8;
                let _0x4d5242 = 0x0;
                _0x2283e9(_0x175cdc(0x2c8))[_0x175cdc(0x206)](function () {
                    const _0x1f6b97 = _0x175cdc;
                    _0x2283e9(this)[_0x1f6b97(0xfc)]()[_0x1f6b97(0x178)](_0x1f6b97(0x1e3))[_0x1f6b97(0x2a2)](_0x1f6b97(0x39f)) && (_0x2283e9(this)[_0x1f6b97(0x1b4)]('click'), _0x4d5242++);
                }), _0x4d5242 == 0x0 && alert(_0x32d7df('NO_CHECK_RESOURCE'));
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x2a9), _0x54e3e8(0x272), function () {
                const _0x41b75b = _0x54e3e8;
                GM_setValue('lang', _0x2283e9(this)[_0x41b75b(0x20d)]()), _0x33d3f7[_0x41b75b(0x135)] = _0x2283e9(this)['val'](), _0x33d3f7[_0x41b75b(0x135)]?.[_0x41b75b(0x374)]('en') || _0x33d3f7[_0x41b75b(0x325)][_0x33d3f7[_0x41b75b(0x135)]] != null ? (_0x582092(), _0x4ec107()) : _0x10d6a2(_0x33d3f7['lang'])[_0x41b75b(0x158)](_0x32d255 => {
                    const _0xfec960 = _0x41b75b;
                    _0x33d3f7[_0xfec960(0x325)][_0x33d3f7[_0xfec960(0x135)]] = _0x32d255, _0x582092(), _0x4ec107();
                })['catch'](_0x14b462 => {
                    const _0x4c40c6 = _0x41b75b;
                    console[_0x4c40c6(0x29d)](_0x4c40c6(0x327), _0x14b462);
                });
            }), _0x2283e9(_0x54e3e8(0x226))['on'](_0x54e3e8(0x1b5), _0x54e3e8(0x2a8), function () {
                const _0x3ba8ef = _0x54e3e8;
                _0x2283e9(_0x3ba8ef(0x2c8))[_0x3ba8ef(0x206)](function () {
                    _0x2283e9(this)['trigger']('click');
                });
            });
            const _0x543caf = new MutationObserver(_0x36a583 => {
                const _0x2963f8 = _0x54e3e8;
                for (const _0x4c8f92 of _0x36a583) {
                    _0x4c8f92[_0x2963f8(0x32e)] === _0x2963f8(0x367) && _0x4c8f92[_0x2963f8(0x330)][_0x2963f8(0x373)](_0x356b25 => {
                        const _0x5cc9e1 = _0x2963f8, _0x53f57f = _0x2283e9(_0x356b25)[_0x5cc9e1(0x1df)](_0x5cc9e1(0x366));
                        if (location[_0x5cc9e1(0x2bc)][_0x5cc9e1(0x374)](_0x5cc9e1(0x34a))) {
                            if (_0x2283e9(_0x356b25)['attr'](_0x5cc9e1(0x322)) == null && _0x2283e9(_0x356b25)[_0x5cc9e1(0x3ca)](_0x5cc9e1(0x2fd)) == null && _0x356b25[_0x5cc9e1(0x2e2)] === 'DIV') {
                                var _0x505a87 = _0x2283e9(_0x356b25)[_0x5cc9e1(0x1df)](_0x5cc9e1(0x304));
                                let _0x67331a = _0x505a87?.[_0x5cc9e1(0x3ca)](_0x5cc9e1(0x2dc));
                                _0x67331a != null && _0x505a87[_0x5cc9e1(0x3ab)](_0x67331a);
                            }
                        }
                        if (_0x53f57f[_0x5cc9e1(0x2d2)] > 0x0) {
                            _0xacfdce[_0x5cc9e1(0x3cb)] && _0x53f57f[_0x5cc9e1(0x206)](function () {
                                _0x2283e9(this)['on']('play\x20playing', function () {
                                    const _0x20f127 = a0_0x47e8;
                                    !_0x2283e9(this)[_0x20f127(0x165)](_0x20f127(0x2b9)) && (_0x2283e9(this)[_0x20f127(0x3ca)](_0x20f127(0x358), !![]), this['volume'] = _0x33d3f7[_0x20f127(0x1ac)], _0x32f9d0(_0x20f127(0x1cd)));
                                });
                            });
                            if (location['pathname'][_0x5cc9e1(0x353)](/^(\/stories\/)/ig)) {
                                const _0x362eac = location['pathname'][_0x5cc9e1(0x353)](/^(\/stories\/highlights\/)/ig) != null, _0x2de457 = _0x362eac ? _0x5cc9e1(0x31d) : 'story';
                                _0x53f57f['each'](function () {
                                    const _0x4b23b4 = _0x5cc9e1;
                                    _0x2283e9(this)['on'](_0x4b23b4(0x25e), function () {
                                        const _0x9fceb3 = _0x4b23b4;
                                        if (!_0x2283e9(this)[_0x9fceb3(0x165)]('modify-thumbnail')) {
                                            let _0x3e6f3c = _0x2283e9(this);
                                            _0x3e6f3c[_0x9fceb3(0x1b3)](_0x9fceb3(0x383))[_0x9fceb3(0x1eb)](function () {
                                                const _0x4bf1da = _0x9fceb3;
                                                return _0x2283e9(this)[_0x4bf1da(0x38f)]() == _0x3e6f3c['width']();
                                            })[_0x9fceb3(0x1df)](_0x9fceb3(0x386))['length'] === 0x0 ? (_0x2283e9(this)['attr']('data-modify-thumbnail', !![]), _0x362eac ? _0x5ce9c1(![]) : _0x2ef92a(![]), _0x32f9d0('(' + _0x2de457 + ')', _0x9fceb3(0x3c8))) : (_0x2283e9(this)[_0x9fceb3(0x3ca)](_0x9fceb3(0x259), !![]), _0x32f9d0('(' + _0x2de457 + ')', _0x9fceb3(0x1d3)));
                                        }
                                    });
                                    var _0x558352 = _0x2283e9(this);
                                    if (_0xacfdce['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x558352[_0x4b23b4(0x165)](_0x4b23b4(0x356))) {
                                            _0x32f9d0('(' + _0x2de457 + ')', _0x4b23b4(0x14b));
                                            _0xacfdce[_0x4b23b4(0x3cb)] && (this['volume'] = _0x33d3f7[_0x4b23b4(0x1ac)], _0x558352['on'](_0x4b23b4(0x15b), function () {
                                                const _0x3eac61 = _0x4b23b4;
                                                this[_0x3eac61(0x28a)] = _0x33d3f7[_0x3eac61(0x1ac)];
                                            }));
                                            let _0x46a92a = _0x558352[_0x4b23b4(0x1b3)](_0x4b23b4(0x1ab))[_0x4b23b4(0x1eb)](function () {
                                                    const _0x12dbec = _0x4b23b4;
                                                    return _0x2283e9(this)[_0x12dbec(0x3ca)]('class') == null && _0x2283e9(this)[_0x12dbec(0x3ca)](_0x12dbec(0x27d)) == null;
                                                })[_0x4b23b4(0x2e7)](), _0x3ce490 = _0x46a92a[_0x4b23b4(0x31b)]();
                                            _0x3ce490[_0x4b23b4(0x2c7)]();
                                            let _0x2909ff = _0x46a92a[_0x4b23b4(0x1df)](_0x4b23b4(0x1c3));
                                            _0x2909ff[_0x4b23b4(0x2c7)]();
                                            const _0x56278d = function (_0x3da492) {
                                                const _0x2dec9a = _0x4b23b4;
                                                _0x3da492[_0x2dec9a(0x113)](), _0x558352['css']('z-index', '2'), _0x558352[_0x2dec9a(0x3ca)](_0x2dec9a(0x356), !![]), _0x2909ff['hide'](), _0x3ce490[_0x2dec9a(0x2c7)](), _0x3bfd65(_0x558352, _0x558352[_0x2dec9a(0x1b3)](_0x2dec9a(0x383))[_0x2dec9a(0x1eb)](function () {
                                                    return _0x2283e9(this)['width']() == _0x558352['width']();
                                                })[_0x2dec9a(0x2e7)](), _0x2de457, 'vertical');
                                            };
                                            _0x558352['parent']()['find'](_0x4b23b4(0x295))['on']('contextmenu', _0x56278d), _0x2909ff['on']('contextmenu', _0x56278d), _0x3ce490['on'](_0x4b23b4(0x1da), _0x56278d), _0x558352['on'](_0x4b23b4(0x1da), function (_0x13c199) {
                                                const _0x521187 = _0x4b23b4;
                                                _0x13c199[_0x521187(0x113)](), _0x558352[_0x521187(0x3c3)]('z-index', '-1'), _0x558352[_0x521187(0x14f)](_0x521187(0x356)), _0x3ce490['show'](), _0x2909ff['show'](), _0x3bfd65(_0x558352, _0x558352[_0x521187(0x1b3)](_0x521187(0x383))[_0x521187(0x1eb)](function () {
                                                    const _0x31e14c = _0x521187;
                                                    return _0x2283e9(this)[_0x31e14c(0x38f)]() == _0x558352['width']();
                                                })[_0x521187(0x2e7)](), _0x2de457, 'vertical');
                                            }), _0x558352['on'](_0x4b23b4(0x148), function () {
                                                const _0x95eaa = _0x4b23b4;
                                                let _0x21d415 = _0x46a92a['parent']()[_0x95eaa(0x1df)](_0x95eaa(0x2f3))[_0x95eaa(0x1b3)](_0x95eaa(0x17b))[_0x95eaa(0x2e7)]();
                                                var _0xb9a655 = _0x21d415['find']('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0x95eaa(0x2d2)] === 0x0;
                                                this[_0x95eaa(0x242)] != _0xb9a655 && (this[_0x95eaa(0x28a)] = _0x33d3f7[_0x95eaa(0x1ac)], _0x21d415?.[_0x95eaa(0x1b4)](_0x95eaa(0x1b5))), _0x2283e9(this)[_0x95eaa(0x3ca)]('data-completed') && (_0x33d3f7[_0x95eaa(0x1ac)] = this['volume'], GM_setValue(_0x95eaa(0x384), this[_0x95eaa(0x28a)])), this[_0x95eaa(0x28a)] == _0x33d3f7[_0x95eaa(0x1ac)] && _0x2283e9(this)['attr']('data-completed', !![]);
                                            }), _0x558352[_0x4b23b4(0x3c3)]('position', _0x4b23b4(0x1a6)), _0x558352[_0x4b23b4(0x3c3)](_0x4b23b4(0x1c0), '2'), _0x558352[_0x4b23b4(0x3ca)](_0x4b23b4(0x298), !![]), _0x558352[_0x4b23b4(0x3ca)](_0x4b23b4(0x356), !![]);
                                        }
                                    } else
                                        _0x3bfd65(_0x558352, _0x558352[_0x4b23b4(0x1b3)](_0x4b23b4(0x383))[_0x4b23b4(0x1eb)](function () {
                                            const _0x49cbed = _0x4b23b4;
                                            return _0x2283e9(this)[_0x49cbed(0x38f)]() == _0x558352[_0x49cbed(0x38f)]();
                                        })[_0x4b23b4(0x2e7)](), _0x2de457, _0x4b23b4(0x38a));
                                });
                            }
                        }
                    });
                }
            });
            _0x543caf['observe'](_0x2283e9(_0x54e3e8(0x12e))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x47e8(_0x1c4e40, _0x2a5486) {
    const _0x432edc = a0_0x432e();
    return a0_0x47e8 = function (_0x47e8dd, _0x4c77ce) {
        _0x47e8dd = _0x47e8dd - 0xf6;
        let _0x30e215 = _0x432edc[_0x47e8dd];
        return _0x30e215;
    }, a0_0x47e8(_0x1c4e40, _0x2a5486);
}
function a0_0x432e() {
    const _0x177ac4 = [
        'node',
        'there\x20is\x20no\x20new\x20update',
        'WEBP',
        '[data-ih-locale-title]',
        'data-href',
        'a[href]\x20time[datetime]',
        'main\x20timer\x20re-register\x20completed',
        'video',
        'childList',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'image_versions2',
        'IMG',
        'disconnect',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'isHighlightsStory',
        'getBlobMediaWithQuery()',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'GL_referrer',
        'forEach',
        'startsWith',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'altKey',
        '415082erCXfD',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'grabbing',
        'CLOSE',
        'x1lix1fw',
        'FORCE_FETCH_ALL_RESOURCES',
        'Request\x20failed\x20with\x20API\x20response\x20',
        '3745380vzhmeQ',
        '.videoThumbnail',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        '.IG_POPUP_DIG',
        '\x22\x20data-path=\x22',
        'div[style][class]',
        'G_VIDEO_VOLUME',
        '3JOAQJk',
        '.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL',
        'div[class]',
        '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22',
        'INTERNAL_CSS',
        'vertical',
        'searchParams',
        'a[href^=\x22/\x22]',
        'query_hash',
        'data-username',
        'width',
        'THUMBNAIL',
        'body\x20>\x20div\x20section:visible._ac0a',
        '.json',
        'stp',
        '#iv_header',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'Checking\x20for\x20Script\x20Updates',
        'data-remove-thumbnail',
        'tempFetchRateLimit',
        'createObjectURL',
        'div#scrollview',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'endsWith',
        'div\x20>\x20ul\x20li._acaz',
        'img[referrerpolicy]',
        'checked',
        'Image',
        '#iv_rotate',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'thumbnail',
        '_acnb',
        'toISOString',
        'edge_sidecar_to_children',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
        'push',
        'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
        'textContent',
        'text',
        'div#splash-screen',
        'trim',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex],\x20section\x20>\x20main[role=\x22main\x22]\x20>\x20div[class]',
        'pageX',
        '#imageViewer',
        'reduce',
        'G_RENAME_FORMAT',
        'GL_postPath',
        'faild',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'FORCE_RESOURCE_VIA_MEDIA',
        'isArray',
        'getHours',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'copy',
        'observe',
        'createElement',
        'off',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'GL_username',
        'parent',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        'css',
        '0\x200',
        '#rotate_left',
        'blob',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        'Manually\x20inserting\x20thumbnail\x20button',
        '<div\x20class=\x22volume_slider\x20',
        'attr',
        'MODIFY_VIDEO_VOLUME',
        'DONATE',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'DOWNLOAD',
        '\x22><span\x20data-ih-locale=\x22',
        'transform\x200.15s\x20ease',
        'display_resources',
        '.IG_DW_ALL_MAIN',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        '[data-ih-locale]',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'RELOAD_SCRIPT',
        '\x20ID:\x20',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'prev',
        'close',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'AUTO_RENAME',
        '728950myhyGj',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        '</span></div>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'When\x20you\x20click\x20Download\x20All\x20Resources,\x20whether\x20you\x20want\x20to\x20download\x20all\x20stories/highlights\x20resources\x20directly.',
        'cursor',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        '\x22\x20/>',
        '.IG_DWSTORY_THUMBNAIL',
        'getTime',
        'replace',
        'fadeOut',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'registerMenuIds',
        '</option>',
        '<div></div>',
        'preventDefault',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'undefined\x20username',
        '#tempWrapper',
        'responseText',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'https://i.instagram.com/api/v1/users/',
        'object',
        'DOWNLOAD_DOM_TREE',
        'Found\x20post\x20container',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'video_resources',
        '</a></button>',
        'www.',
        'hasClass',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'zoom-in',
        'feedback_message',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        'padEnd',
        '\x22\x20datetime=\x22',
        'DEBUG',
        'wrap',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'div[id^=\x22mount\x22]',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'XMP\x20',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'data-loop',
        'https://www.instagram.com/reel/',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'lang',
        'x1iyjqo2',
        'language',
        'host',
        'trigging',
        '</a></button><br/>',
        'transform-origin',
        '0px',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'hidden',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'owner',
        'message',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'taken_at',
        '13ZZXdUH',
        'Feedback\x20Options',
        'https://www.instagram.com/p/',
        'volumechange',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'G_CHECK_TIMESTAMP',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        'fromCharCode',
        'script[type=\x22application/json\x22]',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'removeAttr',
        'load',
        'href',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'Can\x20not\x20find\x20download\x20url.',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        '812826IcHAVU',
        '_INTRO',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'then',
        'onHighlightsStory',
        'a[href]',
        'loadstart',
        'div.volume_slider\x20input',
        'original_width',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'DW_ALL',
        '#rotate_right',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        'pointer',
        'data-ih-locale',
        'isProfile',
        'data',
        'getStories()',
        'clientY',
        'a[href^=\x22/p/\x22]',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'FEEDBACK',
        'jpg',
        'image/jpeg',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        'shortcode_media',
        'LOCALE_MANIFEST',
        'SCROLL_BUTTON',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'li._acaz',
        'username',
        'children',
        'reels',
        '<option\x20value=\x22',
        '[role=\x22button\x22]',
        'div[role=\x22presentation\x22]',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        '#article-id',
        '.xpgaw4o',
        'VID',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'flex',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'https://ko-fi.com/snkoarashi',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'config_width',
        'avatar',
        'keys',
        'label',
        'isDialog',
        'display_url',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        '#scrollWrapper',
        'last',
        'stories',
        'text/plain',
        'download',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'getUint32',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'remove',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'img',
        '<a\x20datetime=\x22',
        'DIV',
        'Disable\x20Video\x20Auto-looping',
        '.IG_DWNEWTAB',
        'DIRECT_DOWNLOAD_ALL',
        'will-change',
        'GL_observer',
        'firstStarted',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        '/followers/',
        '\x22\x20data-globalIndex=\x22',
        'px,\x20',
        'absolute',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'xdt_api__v1__media__shortcode__web_info',
        'deg)',
        '[data-snig]',
        'div',
        'videoVolume',
        'element',
        'translate(',
        'ig_cache_key',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'media-id',
        'Donate',
        'parents',
        'trigger',
        'click',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        'LOAD_BLOB_RELOAD',
        'FULLSCREEN',
        'getUserHighSizeProfile()',
        'setUint32',
        'before',
        'mp4',
        'isHomepage',
        'stopPropagation',
        'GET',
        'z-index',
        'getBlobMedia()',
        'version:',
        'div[class][role=\x22button\x22]',
        '72UKZoWE',
        '.IG_DWHISTORY',
        'NOTICE_UPDATE_TITLE',
        'Current\x20version:\x20',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        'removeClass',
        'getMinutes',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'buffer',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'GraphVideo',
        'keydown',
        'getSeconds',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'createStoryListDOM()',
        'Thumbnail\x20button\x20already\x20inserted',
        'div.volume_slider',
        'TURN_DEG',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'NOPATH',
        'contextmenu',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'select',
        'data-name',
        'onReadyMyDW()\x20Timer',
        'find',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'top',
        'input',
        'transition',
        'getTranslationText()',
        '.IG_DWSTORY',
        '/p/',
        'boolean',
        'Select\x20All',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'filter',
        'highlights',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '<div\x20class=\x22button_wrapper\x22>',
        'position',
        'scontent.cdninstagram.com',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        'mousedown',
        'Modify\x20Resource\x20EXIF\x20​​Properties',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'set',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'image/webp',
        'taken_at_timestamp',
        'name',
        'currentURL',
        'ALL_CHECK',
        'parse',
        'getUserIdWithAgent()',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'which',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        '_ac3q',
        'each',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'section\x20>\x20main[role=\x22main\x22]',
        'getDate',
        '--ig-track-progress:\x20',
        'assign',
        'downloadURL',
        'val',
        'range',
        'appendChild',
        'sort',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        '\x22\x20class=\x22newTab\x22>',
        '.IG_POPUP_DIG\x20#post_info',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'play\x20playing',
        '</div></div>',
        '\x22]\x20span',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        '\x22\x20/></div>',
        'none',
        'CHECK_UPDATE',
        'loop',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        '#imageViewer\x20>\x20section',
        'replaceAll',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'REPORT_GITHUB',
        'body',
        'user\x20settings',
        'post',
        'splice',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'video_url',
        'canDownload',
        ':hidden',
        'from',
        'mouseup',
        'GL_registerEventList',
        'content',
        'body\x20>\x20div\x20section._ac0a',
        'pageY',
        'mousemove.igHelper',
        'height',
        '/following/',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        '__typename',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'toUpperCase',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'carousel_media:',
        'getPostOwner()',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        'is_video',
        'Download',
        'Checking\x20for\x20Updates',
        'muted',
        '<label\x20class=\x22globalSettings',
        'div:last-child',
        'SELECT_AND_COPY',
        'logger\x20sliced',
        '.IG_DWSTORY_ALL',
        'hd_profile_pic_url_info',
        '<input\x20value=\x22',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        '<a\x20media-id=\x22',
        'code',
        'src',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'execCommand',
        'video\x20+\x20div\x20>\x20div',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        '\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'SHOW_DOM_TREE',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        'VP8X',
        'scrollBy',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        '#_SNLOAD',
        'data-modify-thumbnail',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-name=\x22',
        'log',
        '352ptdpbf',
        '.IG_NEWTAB_MAIN',
        'timeupdate',
        '._acay\x20._acaz',
        'append',
        'toString',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'isReels',
        '.IG_DWHISTORY_ALL',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'hostname',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_selected',
        'DOWNLOAD_ALL',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'getHighlightStories()',
        'article',
        'reject',
        'shortcode',
        'setUint16',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'map',
        'srcset',
        '.IG_POPUP_DIG_TITLE\x20#langSelect',
        '/accounts/login',
        '\x22\x20data-ih-locale-title=\x22',
        '</div>',
        'getUint8',
        'remove-thumbnail',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'byteLength',
        'https://www.instagram.com/',
        'style',
        'get',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'datetime',
        'Not\x20a\x20JPEG\x20or\x20WEBP',
        '\x22\x20class=\x22videoThumbnail\x22>',
        '*/*',
        'NOTICE_UPDATE_CONTENT',
        '37px',
        'url',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        '<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22display:\x20flex;filter:\x20invert(1);gap:\x208px;margin-right:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_left\x22\x20style=\x22cursor:\x20pointer;\x22>',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'volume',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'catch',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22IMG\x22>',
        '.IG_DWHISTORY_THUMBNAIL',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'Display\x20HTML5\x20Video\x20Controller',
        'BATCH_DOWNLOAD_DIRECT',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        '280436FyPvBU',
        'video\x20+\x20div',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        '.IG_IMAGE_VIEWER',
        'data-controls',
        'fileRenameFormat',
        '\x22\x20class=\x22IG_REELS\x22>',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'error',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'GL_dataCache',
        'Video',
        'toLowerCase',
        'prop',
        'status',
        'x1s85apg',
        'photo',
        'query_id',
        'bottom',
        '.IG_POPUP_DIG_TITLE\x20#batch_download_direct',
        'change',
        '._acay\x20+\x20.x24i39r',
        '.IG_REELS',
        '<p\x20id=\x22_SNLOAD\x22>',
        'undefined',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '#iv_close',
        'grab',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'max',
        'isIntersecting',
        'GL_repeat',
        'Script\x20Loaded',
        'NEW_TAB',
        'pause',
        'GL_logger',
        'modify',
        'script',
        '\x0a-----\x0a\x0aLocation:\x20',
        'pathname',
        'display',
        'user',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'Download\x20All\x20Resources',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'Open\x20in\x20New\x20Tab',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        'pageLoaded',
        'hide',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'wheel',
        'navigator',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        '._acnb',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        '12aYciZM',
        'split',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        '.IG_DWPROFILE',
        'length',
        'includes',
        'HTML5_VIDEO_CONTROL',
        '.button_wrapper',
        'getMediaInfo()',
        'data-type',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'response',
        'getBlobMediaWithQueryID()',
        'data-snig',
        'title',
        'items',
        'version',
        'SKIP_VIEW_STORY_CONFIRM',
        'Close',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'tagName',
        'candidates',
        'center',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'GraphImage',
        'first',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_right\x22\x20style=\x22transform:\x20scaleX(-1);cursor:\x20pointer;\x22>',
        '206168HilKAI',
        '</button>',
        'slice',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'data-path',
        '</span>\x20<input\x20id=\x22',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '6ZrHLwe',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        '20000',
        'REPORT_DISCORD',
        'Cannot\x20find\x20resource\x20url.',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        '.circle_wrapper',
        'LOAD_BLOB_ONE',
        'data-visualcompletion',
        '._acay',
        'carousel_media:\x20undefined\x20username',
        '\x20child',
        'div\x20>\x20ul._acay',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'MODIFY_RESOURCE_EXIF',
        'time[datetime]',
        'arrayBuffer',
        'RIFF',
        'addClass',
        'carousel_media',
        'smooth',
        'data-completed',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'Fetch\x20from\x20memory\x20cache:',
        'Download\x20Selected\x20Resources',
        '\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'CHECK_UPDATE_MENU',
        'GraphSidecar',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'left',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'relative',
        'getUint16',
        'hasReferrer',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        'reels_media',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'Failed\x20to\x20strip\x20EXIF\x20and/or\x20attach\x20post\x20URL\x20to\x20EXIF.',
        'next',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'highlight',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'DIRECT_DOWNLOAD_STORY',
        'video_versions',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'data-ih-locale-title',
        '.IG_THUMBNAIL_MAIN',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'locale',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'getTranslationText\x20catch\x20error:',
        '\x20-</a>',
        'video[class]',
        'padStart',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        'subarray',
        'type',
        'reel',
        'addedNodes',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'Show\x20DOM\x20Tree',
        'Request\x20with:',
        '.IG_POPUP_DIG\x20.globalSettings',
        'Settings',
        'finalUrl',
        'encode',
        'floor',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'transform',
        'time',
        '.IG_DW_MAIN',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '%22}',
        'video\x20volume\x20changed\x20#slider',
        'profile_pic_url',
        'updatenotification',
        'userLanguage',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'after',
        '</span>\x20',
        '/stories/highlights/',
        '._aagv\x20img',
        '</a>',
        'instagram.com/reels/',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'RENAME_PUBLISH_DATE',
        'div:not([class]):not([style])',
        'section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'LOAD_BLOB_MULTIPLE',
        'match',
        '.IG_DWHINEWTAB',
        'IMAGE_VIEWER',
        'controls',
        'target',
        'data-modify',
        '_blank',
        '_acnf',
        'mouseenter',
        'THUMBNAIL_INTRO',
        '</span></label>',
        '72860KwUHvT'
    ];
    a0_0x432e = function () {
        return _0x177ac4;
    };
    return a0_0x432e();
}