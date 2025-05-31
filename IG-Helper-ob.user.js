// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.5.5
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

function a0_0xc123(_0x35d208, _0x3d030a) {
    const _0x495e08 = a0_0x495e();
    return a0_0xc123 = function (_0xc1238b, _0xbf79cb) {
        _0xc1238b = _0xc1238b - 0x179;
        let _0xaec0db = _0x495e08[_0xc1238b];
        return _0xaec0db;
    }, a0_0xc123(_0x35d208, _0x3d030a);
}
(function (_0x15606f, _0x27d6c3) {
    const _0x176f1a = a0_0xc123, _0xa8028d = _0x15606f();
    while (!![]) {
        try {
            const _0x665b06 = parseInt(_0x176f1a(0x3b3)) / 0x1 * (parseInt(_0x176f1a(0x1dd)) / 0x2) + parseInt(_0x176f1a(0x214)) / 0x3 * (-parseInt(_0x176f1a(0x40a)) / 0x4) + parseInt(_0x176f1a(0x304)) / 0x5 + -parseInt(_0x176f1a(0x323)) / 0x6 * (-parseInt(_0x176f1a(0x41c)) / 0x7) + -parseInt(_0x176f1a(0x258)) / 0x8 * (-parseInt(_0x176f1a(0x22a)) / 0x9) + -parseInt(_0x176f1a(0x2ed)) / 0xa * (-parseInt(_0x176f1a(0x2af)) / 0xb) + -parseInt(_0x176f1a(0x3cd)) / 0xc * (parseInt(_0x176f1a(0x3b9)) / 0xd);
            if (_0x665b06 === _0x27d6c3)
                break;
            else
                _0xa8028d['push'](_0xa8028d['shift']());
        } catch (_0x174852) {
            _0xa8028d['push'](_0xa8028d['shift']());
        }
    }
}(a0_0x495e, 0xdd040), function (_0x57b339) {
    setTimeout(() => {
        'use strict';
        const _0x3e3711 = a0_0xc123;
        const _0x313546 = {
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
            }, _0x22ac74 = [
                _0x3e3711(0x40d),
                _0x3e3711(0x37b),
                'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'
            ], _0x232083 = {
                'DOWNLOAD': _0x3e3711(0x350),
                'NEW_TAB': _0x3e3711(0x181),
                'THUMBNAIL': _0x3e3711(0x227),
                'DOWNLOAD_ALL': _0x3e3711(0x437),
                'CLOSE': '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x206.41L17.59\x205\x2012\x2010.59\x206.41\x205\x205\x206.41\x2010.59\x2012\x205\x2017.59\x206.41\x2019\x2012\x2013.41\x2017.59\x2019\x2019\x2017.59\x2013.41\x2012\x2019\x206.41z\x22/></svg>',
                'FULLSCREEN': _0x3e3711(0x238),
                'TURN_DEG': _0x3e3711(0x432)
            }, _0x501463 = 0xfa, _0x487c8f = GM_getResourceText(_0x3e3711(0x27c)), _0x1f66e2 = JSON[_0x3e3711(0x3b8)](GM_getResourceText(_0x3e3711(0x339)));
        var _0x3bbe46 = {
            'videoVolume': GM_getValue(_0x3e3711(0x412)) ? GM_getValue(_0x3e3711(0x412)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue(_0x3e3711(0x1c8)) ? GM_getValue(_0x3e3711(0x1c8)) : '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x3e3711(0x445)) || navigator[_0x3e3711(0x33b)] || navigator[_0x3e3711(0x340)],
            'currentURL': location[_0x3e3711(0x3e8)],
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
                _0x5d828c();
            })
        };
        _0x1dcf48(), GM_addStyle(_0x487c8f), _0x1b2d90(), _0x344229(_0x3bbe46[_0x3e3711(0x445)])['then'](_0x10edf4 => {
            const _0x12c689 = _0x3e3711;
            _0x3bbe46[_0x12c689(0x229)][_0x3bbe46[_0x12c689(0x445)]] = _0x10edf4, _0x297ec9(), _0x1b2d90(), _0x1a91e7(0x12c);
        })[_0x3e3711(0x2e2)](_0x3dc76f => {
            const _0x3083a8 = _0x3e3711;
            _0x1b2d90(), _0x1a91e7(0x12c), !_0x3bbe46[_0x3083a8(0x445)][_0x3083a8(0x379)]('en') && console['error'](_0x3083a8(0x279), _0x3dc76f);
        }), _0x11b869(_0x3e3711(0x274), GM_info['script']['name'], _0x3e3711(0x41e), GM_info[_0x3e3711(0x41a)]['version']);
        var _0x5c87d4 = setInterval(function () {
            const _0x4b98a8 = _0x3e3711;
            if (_0x57b339('div#splash-screen')[_0x4b98a8(0x189)] > 0x0 && !_0x57b339(_0x4b98a8(0x377))['is'](':hidden') || location[_0x4b98a8(0x2d4)]['match'](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x4b98a8(0x2e1)][_0x4b98a8(0x379)](_0x4b98a8(0x220)) || (location[_0x4b98a8(0x2d4)][_0x4b98a8(0x222)](_0x4b98a8(0x29c)) || location[_0x4b98a8(0x2d4)][_0x4b98a8(0x222)]('/following/')) && _0x57b339(_0x4b98a8(0x25f))[_0x4b98a8(0x189)] > 0x0) {
                _0x3bbe46[_0x4b98a8(0x31d)] = ![];
                return;
            }
            if (_0x3bbe46[_0x4b98a8(0x2fa)] != location['href'] || !_0x3bbe46[_0x4b98a8(0x31c)] || !_0x3bbe46[_0x4b98a8(0x31d)]) {
                console[_0x4b98a8(0x19c)]('Main\x20Timer', 'trigging'), clearInterval(_0x3bbe46[_0x4b98a8(0x3a7)]), _0x3bbe46[_0x4b98a8(0x31d)] = ![], _0x3bbe46[_0x4b98a8(0x31c)] = !![], _0x3bbe46[_0x4b98a8(0x2fa)] = location[_0x4b98a8(0x3e8)], _0x3bbe46['GL_observer'][_0x4b98a8(0x42e)]();
                if (location[_0x4b98a8(0x3e8)]['startsWith'](_0x4b98a8(0x1dc)) || location[_0x4b98a8(0x2d4)][_0x4b98a8(0x3d9)](/^\/(.*?)\/(p|reel)\//ig) || location[_0x4b98a8(0x3e8)][_0x4b98a8(0x379)](_0x4b98a8(0x20c))) {
                    _0x3bbe46[_0x4b98a8(0x39f)][_0x4b98a8(0x2cd)] = {}, _0x3bbe46['GL_dataCache'][_0x4b98a8(0x332)] = {}, _0x11b869(_0x4b98a8(0x192));
                    var _0x44ef40 = setInterval(() => {
                        const _0x56c582 = _0x4b98a8;
                        _0x57b339(_0x56c582(0x3f3))[_0x56c582(0x189)] > 0x0 && (clearInterval(_0x44ef40), setTimeout(() => {
                            _0x5d828c(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x3bbe46[_0x4b98a8(0x31d)] = !![];
                }
                location[_0x4b98a8(0x3e8)][_0x4b98a8(0x379)](_0x4b98a8(0x438)) && (_0x11b869(_0x4b98a8(0x1b8)), setTimeout(() => {
                    _0x591a9d(![]);
                }, 0x96), _0x3bbe46['pageLoaded'] = !![]);
                if (location['href'][_0x4b98a8(0x327)]('?')[0x0] == _0x4b98a8(0x1ab)) {
                    _0x3bbe46[_0x4b98a8(0x39f)][_0x4b98a8(0x2cd)] = {}, _0x3bbe46['GL_dataCache'][_0x4b98a8(0x332)] = {};
                    let _0x1b62d0 = _0x3bbe46['GL_referrer']?.[_0x4b98a8(0x3d9)](/^\/(stories|highlights)\//ig) != null;
                    _0x11b869(_0x4b98a8(0x3f4), _0x1b62d0), setTimeout(() => {
                        const _0x37dbcc = _0x4b98a8;
                        _0x5d828c(![], _0x1b62d0);
                        const _0x52ff72 = _0x57b339(_0x37dbcc(0x1e1))?.[_0x37dbcc(0x18c)]()[0x0];
                        _0x52ff72 && _0x3bbe46[_0x37dbcc(0x443)][_0x37dbcc(0x33f)](_0x52ff72, { 'childList': !![] });
                    }, 0x96), _0x3bbe46[_0x4b98a8(0x31d)] = !![];
                }
                _0x57b339(_0x4b98a8(0x3dc))['length'] && location[_0x4b98a8(0x2d4)]['match'](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location['pathname'][_0x4b98a8(0x3d9)](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x11b869(_0x4b98a8(0x347)), setTimeout(() => {
                    _0x242bcd(![]);
                }, 0x96), _0x3bbe46[_0x4b98a8(0x31d)] = !![]);
                if (!_0x3bbe46[_0x4b98a8(0x31d)]) {
                    if (location[_0x4b98a8(0x3e8)][_0x4b98a8(0x3d9)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x3bbe46[_0x4b98a8(0x39f)]['highlights'] = {}, _0x11b869(_0x4b98a8(0x355)), _0x1fc183(![]), _0x3bbe46['GL_repeat'] = setInterval(() => {
                            _0x4fd209(![]);
                        }, _0x501463), _0x57b339(_0x4b98a8(0x1a2))[_0x4b98a8(0x189)] && setTimeout(() => {
                            const _0x4b2b19 = _0x4b98a8;
                            if (_0x313546[_0x4b2b19(0x1b2)]) {
                                var _0x324dfa = _0x57b339('div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]')[_0x4b2b19(0x235)](function () {
                                    const _0x3d9cce = _0x4b2b19;
                                    return _0x57b339(this)[_0x3d9cce(0x312)]()[_0x3d9cce(0x189)] === 0x0 && this['textContent'][_0x3d9cce(0x1d3)]() !== '';
                                });
                                _0x324dfa?.['trigger'](_0x4b2b19(0x1c1));
                            }
                            _0x3bbe46[_0x4b2b19(0x31d)] = !![];
                        }, 0x96);
                    else
                        location[_0x4b98a8(0x3e8)][_0x4b98a8(0x3d9)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x11b869('isStory'), _0x57b339(_0x4b98a8(0x184))[_0x4b98a8(0x189)] > 0x0 && (_0x57b339(_0x4b98a8(0x3b1))[_0x4b98a8(0x231)](), _0x57b339('.IG_DWNEWTAB')[_0x4b98a8(0x231)](), _0x57b339(_0x4b98a8(0x419))['length'] && _0x57b339(_0x4b98a8(0x419))[_0x4b98a8(0x231)](), _0x396f59(![]), setTimeout(() => {
                            _0x396f59(![]);
                        }, 0x96)), _0x57b339(_0x4b98a8(0x3b1))['length'] && setTimeout(() => {
                            const _0x36791d = _0x4b98a8;
                            if (_0x313546['SKIP_VIEW_STORY_CONFIRM']) {
                                var _0x1cdfba = _0x57b339(_0x36791d(0x35d))[_0x36791d(0x235)](function () {
                                    const _0x1dbc42 = _0x36791d;
                                    return _0x57b339(this)[_0x1dbc42(0x312)]()['length'] === 0x0 && this[_0x1dbc42(0x3d7)][_0x1dbc42(0x1d3)]() !== '';
                                });
                                _0x1cdfba?.[_0x36791d(0x1c1)]();
                            }
                            _0x3bbe46[_0x36791d(0x31d)] = !![];
                        }, 0x96)) : (_0x3bbe46['pageLoaded'] = ![], _0x57b339(_0x4b98a8(0x3b1))['length'] && _0x57b339('.IG_DWSTORY')[_0x4b98a8(0x231)](), _0x57b339(_0x4b98a8(0x2d6))[_0x4b98a8(0x189)] && _0x57b339('.IG_DWSTORY_ALL')['remove'](), _0x57b339(_0x4b98a8(0x27b))['length'] && _0x57b339(_0x4b98a8(0x27b))[_0x4b98a8(0x231)](), _0x57b339(_0x4b98a8(0x419))[_0x4b98a8(0x189)] && _0x57b339('.IG_DWSTORY_THUMBNAIL')[_0x4b98a8(0x231)](), _0x57b339(_0x4b98a8(0x1a2))[_0x4b98a8(0x189)] && _0x57b339(_0x4b98a8(0x1a2))[_0x4b98a8(0x231)](), _0x57b339('.IG_DWHISTORY_ALL')[_0x4b98a8(0x189)] && _0x57b339('.IG_DWHISTORY_ALL')['remove'](), _0x57b339(_0x4b98a8(0x2b8))[_0x4b98a8(0x189)] && _0x57b339(_0x4b98a8(0x2b8))[_0x4b98a8(0x231)](), _0x57b339(_0x4b98a8(0x28a))['length'] && _0x57b339(_0x4b98a8(0x28a))[_0x4b98a8(0x231)]());
                }
                _0x1a91e7(0x12c), _0x3bbe46['GL_referrer'] = new URL(location[_0x4b98a8(0x3e8)])[_0x4b98a8(0x2d4)];
            }
        }, _0x501463);
        async function _0x45d295() {
            const _0x4ba3df = _0x3e3711;
            _0x46ea0e(!![]);
            let _0x53c6a3 = new Date()[_0x4ba3df(0x3bb)](), _0x1efedd = Math['floor'](_0x53c6a3 / 0x3e8), _0x3ffb80 = location[_0x4ba3df(0x3e8)][_0x4ba3df(0x367)](/\/$/ig, '')[_0x4ba3df(0x327)]('/')['at'](-0x1), _0x33dee2 = await _0x6a1603(_0x3ffb80), _0x352c6a = _0x33dee2[_0x4ba3df(0x36d)]['reels_media'][0x0][_0x4ba3df(0x221)]['username'], _0x315e7f = 0x0;
            _0x4a5258(_0x315e7f, _0x33dee2['data'][_0x4ba3df(0x2c5)][0x0]['items'][_0x4ba3df(0x189)]), _0x33dee2['data'][_0x4ba3df(0x2c5)][0x0][_0x4ba3df(0x3ca)][_0x4ba3df(0x1ec)]((_0x4f3067, _0x5e32dc) => {
                setTimeout(() => {
                    const _0x30e424 = a0_0xc123;
                    _0x313546[_0x30e424(0x40d)] && (_0x1efedd = _0x4f3067[_0x30e424(0x35a)]), _0x4f3067[_0x30e424(0x23a)][_0x30e424(0x2e0)](function (_0x1c83ee, _0x15237f) {
                        const _0x434c09 = _0x30e424;
                        if (_0x1c83ee[_0x434c09(0x21c)] < _0x15237f[_0x434c09(0x21c)])
                            return 0x1;
                        if (_0x1c83ee[_0x434c09(0x21c)] > _0x15237f[_0x434c09(0x21c)])
                            return -0x1;
                        return 0x0;
                    }), _0x4f3067['is_video'] ? _0x3d1233(_0x4f3067[_0x30e424(0x2cf)][0x0]['src'], _0x352c6a, _0x30e424(0x2cd), _0x1efedd, _0x30e424(0x2f7), _0x4f3067['id'])['then'](() => {
                        const _0x53f11a = _0x30e424;
                        _0x4a5258(++_0x315e7f, _0x33dee2[_0x53f11a(0x36d)][_0x53f11a(0x2c5)][0x0][_0x53f11a(0x3ca)]['length']);
                    }) : _0x3d1233(_0x4f3067[_0x30e424(0x23a)][0x0][_0x30e424(0x27a)], _0x352c6a, _0x30e424(0x2cd), _0x1efedd, _0x30e424(0x43a), _0x4f3067['id'])[_0x30e424(0x1f6)](() => {
                        const _0xef23e9 = _0x30e424;
                        _0x4a5258(++_0x315e7f, _0x33dee2[_0xef23e9(0x36d)][_0xef23e9(0x2c5)][0x0][_0xef23e9(0x3ca)][_0xef23e9(0x189)]);
                    });
                }, 0x64 * _0x5e32dc);
            });
        }
        async function _0x1fc183(_0x322803, _0x557ed0) {
            const _0x56c8f4 = _0x3e3711;
            var _0x56f7bd = _0x57b339(_0x56c8f4(0x3dd))[_0x56c8f4(0x235)](function () {
                const _0x222656 = _0x56c8f4;
                return _0x57b339(this)[_0x222656(0x3b4)](_0x222656(0x3e8))[_0x222656(0x327)]('/')[_0x222656(0x235)](_0x1f517a => _0x1f517a[_0x222656(0x189)] > 0x0)[_0x222656(0x189)] === 0x1;
            })[_0x56c8f4(0x3ef)]()[_0x56c8f4(0x3b4)](_0x56c8f4(0x3e8))[_0x56c8f4(0x327)]('/')[_0x56c8f4(0x235)](_0x2d19e8 => _0x2d19e8['length'] > 0x0)['at'](0x0);
            if (_0x322803) {
                let _0x3dd53c = new Date()[_0x56c8f4(0x3bb)](), _0xc7efda = Math[_0x56c8f4(0x2f0)](_0x3dd53c / 0x3e8), _0x12d4e3 = location[_0x56c8f4(0x3e8)]['replace'](/\/$/ig, '')['split']('/')['at'](-0x1), _0x24bdee = _0x57b339(_0x56c8f4(0x1cc))[_0x56c8f4(0x189)] || _0x57b339('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x56c8f4(0x189)] || _0x57b339(_0x56c8f4(0x215))[_0x56c8f4(0x316)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x56c8f4(0x189)], _0x313a1c = 0x0;
                _0x46ea0e(!![]);
                if (_0x3bbe46[_0x56c8f4(0x39f)]['highlights'][_0x12d4e3]) {
                    _0x11b869(_0x56c8f4(0x20d), _0x12d4e3);
                    let _0x443498 = _0x3bbe46['GL_dataCache'][_0x56c8f4(0x332)][_0x12d4e3]['data']['reels_media'][0x0]['items'][_0x56c8f4(0x189)];
                    _0x56f7bd = _0x3bbe46[_0x56c8f4(0x39f)][_0x56c8f4(0x332)][_0x12d4e3][_0x56c8f4(0x36d)][_0x56c8f4(0x2c5)][0x0][_0x56c8f4(0x221)][_0x56c8f4(0x441)], _0x313a1c = _0x3bbe46['GL_dataCache'][_0x56c8f4(0x332)][_0x12d4e3]['data'][_0x56c8f4(0x2c5)][0x0]['items'][_0x443498 - _0x24bdee];
                } else {
                    let _0x140174 = await _0x6a1603(_0x12d4e3), _0x489f27 = _0x140174[_0x56c8f4(0x36d)][_0x56c8f4(0x2c5)][0x0][_0x56c8f4(0x3ca)][_0x56c8f4(0x189)];
                    _0x56f7bd = _0x140174[_0x56c8f4(0x36d)]['reels_media'][0x0][_0x56c8f4(0x221)][_0x56c8f4(0x441)], _0x313a1c = _0x140174[_0x56c8f4(0x36d)][_0x56c8f4(0x2c5)][0x0][_0x56c8f4(0x3ca)][_0x489f27 - _0x24bdee], _0x3bbe46['GL_dataCache'][_0x56c8f4(0x332)][_0x12d4e3] = _0x140174;
                }
                _0x11b869(_0x56c8f4(0x212), _0x12d4e3, _0x3bbe46[_0x56c8f4(0x39f)][_0x56c8f4(0x332)][_0x12d4e3]);
                _0x313546['RENAME_PUBLISH_DATE'] && (_0xc7efda = _0x313a1c[_0x56c8f4(0x35a)]);
                if (_0x313546[_0x56c8f4(0x26f)] && !_0x3bbe46[_0x56c8f4(0x24b)]) {
                    let _0x1e54a2 = await _0x5c98e5(_0x313a1c['id']);
                    _0x1e54a2['status'] === 'ok' ? _0x1e54a2[_0x56c8f4(0x3ca)][0x0]['video_versions'] ? _0x557ed0 ? _0x13e261(_0x1e54a2[_0x56c8f4(0x3ca)][0x0]['video_versions'][0x0][_0x56c8f4(0x1f5)]) : _0x3d1233(_0x1e54a2['items'][0x0][_0x56c8f4(0x1cb)][0x0][_0x56c8f4(0x1f5)], _0x56f7bd, _0x56c8f4(0x332), _0xc7efda, _0x56c8f4(0x2f7), _0x1e54a2['items'][0x0]['id']) : _0x557ed0 ? _0x13e261(_0x1e54a2['items'][0x0]['image_versions2'][_0x56c8f4(0x2c8)][0x0]['url']) : _0x3d1233(_0x1e54a2['items'][0x0]['image_versions2'][_0x56c8f4(0x2c8)][0x0][_0x56c8f4(0x1f5)], _0x56f7bd, _0x56c8f4(0x332), _0xc7efda, _0x56c8f4(0x43a), _0x1e54a2['items'][0x0]['id']) : (_0x313546[_0x56c8f4(0x37b)] ? (delete _0x3bbe46['GL_dataCache'][_0x56c8f4(0x332)][_0x12d4e3], _0x3bbe46[_0x56c8f4(0x24b)] = !![], _0x1fc183(!![], _0x557ed0)) : alert(_0x56c8f4(0x3ff) + _0x1e54a2['message']), _0x11b869(_0x1e54a2));
                } else
                    _0x313a1c[_0x56c8f4(0x404)] ? _0x557ed0 ? _0x13e261(_0x313a1c[_0x56c8f4(0x2cf)]['at'](-0x1)['src'], _0x56f7bd) : _0x3d1233(_0x313a1c[_0x56c8f4(0x2cf)]['at'](-0x1)[_0x56c8f4(0x27a)], _0x56f7bd, _0x56c8f4(0x332), _0xc7efda, _0x56c8f4(0x2f7), _0x313a1c['id']) : _0x557ed0 ? _0x13e261(_0x313a1c['display_resources']['at'](-0x1)[_0x56c8f4(0x27a)], _0x56f7bd) : _0x3d1233(_0x313a1c['display_resources']['at'](-0x1)[_0x56c8f4(0x27a)], _0x56f7bd, _0x56c8f4(0x332), _0xc7efda, _0x56c8f4(0x43a), _0x313a1c['id']), _0x3bbe46[_0x56c8f4(0x24b)] = ![];
                _0x46ea0e(![]);
            } else {
                if (!_0x57b339('.IG_DWHISTORY')[_0x56c8f4(0x189)]) {
                    let _0x5596e7 = null;
                    _0x57b339(_0x56c8f4(0x29d))['length'] > 0x0 ? _0x5596e7 = _0x57b339(_0x56c8f4(0x295)) : (_0x5596e7 = _0x57b339(_0x56c8f4(0x331)), _0x5596e7['css'](_0x56c8f4(0x1d1), _0x56c8f4(0x388)));
                    if (_0x5596e7[_0x56c8f4(0x189)] === 0x0) {
                        let _0x412784 = _0x57b339(_0x56c8f4(0x2b5)), _0x1c29fe = 0x0;
                        _0x412784['each'](function () {
                            const _0x4fed60 = _0x56c8f4;
                            _0x57b339(this)[_0x4fed60(0x1c6)]() > _0x1c29fe && (_0x1c29fe = _0x57b339(this)['width'](), _0x5596e7 = _0x57b339(this)[_0x4fed60(0x312)](_0x4fed60(0x424))[_0x4fed60(0x3ef)]());
                        });
                    }
                    if (_0x5596e7 != null) {
                        _0x5596e7[_0x56c8f4(0x3db)](_0x56c8f4(0x2ab) + _0x476c5e('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x232083['DOWNLOAD'] + _0x56c8f4(0x2a1)), _0x5596e7['append'](_0x56c8f4(0x199) + _0x476c5e(_0x56c8f4(0x1ad)) + _0x56c8f4(0x17b) + _0x232083[_0x56c8f4(0x1ad)] + '</div>');
                        let _0x42436f = _0x71c79b(_0x56f7bd);
                        _0x42436f['length'] > 0x1 && _0x5596e7[_0x56c8f4(0x3db)](_0x56c8f4(0x420) + _0x476c5e(_0x56c8f4(0x28d)) + '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>' + _0x232083[_0x56c8f4(0x3ae)] + _0x56c8f4(0x2a1));
                        let _0x55837b = _0x42436f['parents']('div[class]')['find'](_0x56c8f4(0x26a))?.[_0x56c8f4(0x3b4)](_0x56c8f4(0x24f));
                        _0x55837b != null && _0x42436f[_0x56c8f4(0x2d0)](_0x56c8f4(0x2de))[_0x56c8f4(0x316)]('time[datetime]')[_0x56c8f4(0x225)](_0x55837b), _0x5596e7[_0x56c8f4(0x316)](_0x56c8f4(0x2ae))[_0x56c8f4(0x3e7)](function () {
                            _0x57b339(this)['on']('load', function () {
                                const _0x5dd7dc = a0_0xc123;
                                !_0x57b339(this)[_0x5dd7dc(0x36d)](_0x5dd7dc(0x2c9)) && (_0x5596e7[_0x5dd7dc(0x316)](_0x5dd7dc(0x28a))[_0x5dd7dc(0x189)] === 0x0 ? (_0x57b339(this)['attr'](_0x5dd7dc(0x310), !![]), _0x57b339(_0x5dd7dc(0x28a))[_0x5dd7dc(0x231)](), _0x11b869(_0x5dd7dc(0x439))) : (_0x57b339(this)['attr'](_0x5dd7dc(0x310), !![]), _0x11b869('(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x4fd209(_0x411e34) {
            const _0x1bae91 = _0x3e3711;
            if (_0x411e34) {
                let _0x33df90 = new Date()[_0x1bae91(0x3bb)](), _0x2160fd = Math[_0x1bae91(0x2f0)](_0x33df90 / 0x3e8), _0x272c26 = location['href'][_0x1bae91(0x367)](/\/$/ig, '')[_0x1bae91(0x327)]('/')['at'](-0x1), _0x24d9b4 = '', _0x5e13f6 = _0x57b339(_0x1bae91(0x1cc))[_0x1bae91(0x189)] || _0x57b339(_0x1bae91(0x1b9))[_0x1bae91(0x189)] || _0x57b339(_0x1bae91(0x215))['find']('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x1bae91(0x189)], _0x549d0b = '';
                _0x46ea0e(!![]);
                if (_0x3bbe46[_0x1bae91(0x39f)][_0x1bae91(0x332)][_0x272c26]) {
                    _0x11b869(_0x1bae91(0x20d), _0x272c26);
                    let _0x2b0763 = _0x3bbe46[_0x1bae91(0x39f)][_0x1bae91(0x332)][_0x272c26][_0x1bae91(0x36d)]['reels_media'][0x0][_0x1bae91(0x3ca)][_0x1bae91(0x189)];
                    _0x24d9b4 = _0x3bbe46['GL_dataCache'][_0x1bae91(0x332)][_0x272c26]['data'][_0x1bae91(0x2c5)][0x0][_0x1bae91(0x221)]['username'], _0x549d0b = _0x3bbe46['GL_dataCache'][_0x1bae91(0x332)][_0x272c26][_0x1bae91(0x36d)][_0x1bae91(0x2c5)][0x0][_0x1bae91(0x3ca)][_0x2b0763 - _0x5e13f6];
                } else {
                    let _0x1c5a20 = await _0x6a1603(_0x272c26), _0x25f842 = _0x1c5a20[_0x1bae91(0x36d)][_0x1bae91(0x2c5)][0x0]['items'][_0x1bae91(0x189)];
                    _0x24d9b4 = _0x1c5a20[_0x1bae91(0x36d)][_0x1bae91(0x2c5)][0x0]['owner'][_0x1bae91(0x441)], _0x549d0b = _0x1c5a20[_0x1bae91(0x36d)][_0x1bae91(0x2c5)][0x0]['items'][_0x25f842 - _0x5e13f6], _0x3bbe46[_0x1bae91(0x39f)][_0x1bae91(0x332)][_0x272c26] = _0x1c5a20;
                }
                _0x313546['RENAME_PUBLISH_DATE'] && (_0x2160fd = _0x549d0b[_0x1bae91(0x35a)]);
                if (_0x313546[_0x1bae91(0x26f)] && !_0x3bbe46[_0x1bae91(0x24b)]) {
                    let _0x1fb047 = await _0x5c98e5(_0x549d0b['id']);
                    _0x1fb047[_0x1bae91(0x290)] === 'ok' ? _0x3d1233(_0x1fb047['items'][0x0][_0x1bae91(0x2e7)][_0x1bae91(0x2c8)][0x0][_0x1bae91(0x1f5)], _0x24d9b4, _0x1bae91(0x332), _0x2160fd, _0x1bae91(0x43a), _0x272c26) : (_0x313546['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (delete _0x3bbe46[_0x1bae91(0x39f)][_0x1bae91(0x332)][_0x272c26], _0x3bbe46['tempFetchRateLimit'] = !![], _0x4fd209(!![])) : alert(_0x1bae91(0x3ff) + _0x1fb047['message']), _0x11b869(_0x1fb047));
                } else
                    _0x3d1233(_0x549d0b[_0x1bae91(0x23a)]['at'](-0x1)['src'], _0x24d9b4, 'highlights', _0x2160fd, 'jpg', _0x272c26), _0x3bbe46[_0x1bae91(0x24b)] = ![];
                _0x46ea0e(![]);
            } else {
                if (_0x57b339(_0x1bae91(0x179))[_0x1bae91(0x189)]) {
                    if (!_0x57b339('.IG_DWHISTORY_THUMBNAIL')[_0x1bae91(0x189)]) {
                        let _0x2c04d6 = null;
                        _0x57b339(_0x1bae91(0x29d))[_0x1bae91(0x189)] > 0x0 ? _0x2c04d6 = _0x57b339(_0x1bae91(0x295)) : (_0x2c04d6 = _0x57b339('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x2c04d6[_0x1bae91(0x281)](_0x1bae91(0x1d1), _0x1bae91(0x388)));
                        if (_0x2c04d6['length'] === 0x0) {
                            let _0x57bb0d = _0x57b339(_0x1bae91(0x2b5)), _0x2a36d4 = 0x0;
                            _0x57bb0d[_0x1bae91(0x3e7)](function () {
                                const _0x149fc7 = _0x1bae91;
                                _0x57b339(this)[_0x149fc7(0x1c6)]() > _0x2a36d4 && (_0x2a36d4 = _0x57b339(this)[_0x149fc7(0x1c6)](), _0x2c04d6 = _0x57b339(this)[_0x149fc7(0x312)](_0x149fc7(0x424))[_0x149fc7(0x3ef)]());
                            });
                        }
                        _0x2c04d6 != null && _0x2c04d6[_0x1bae91(0x3db)](_0x1bae91(0x354) + _0x476c5e('THUMBNAIL_INTRO') + '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>' + _0x232083[_0x1bae91(0x24c)] + '</div>');
                    }
                } else
                    _0x57b339(_0x1bae91(0x28a))['remove']();
            }
        }
        function _0x5d828c(_0x1493a3, _0x555bae) {
            const _0x2841ba = _0x3e3711;
            _0x555bae === !![] && (_0x11b869('hasReferrer', 'regenerated'), _0x57b339(_0x2841ba(0x20f))['filter'](function () {
                const _0x14612f = _0x2841ba;
                return _0x57b339(this)[_0x14612f(0x316)](_0x14612f(0x19d))['length'] === 0x0;
            })['removeAttr'](_0x2841ba(0x37d)));
            if (_0x1493a3 == ![]) {
                const _0x40c240 = 0x64;
                let _0x3d3cff = 0x0;
                var _0x11c193 = setInterval(() => {
                    const _0x5d83f4 = _0x2841ba;
                    (_0x3d3cff > _0x40c240 || _0x57b339(_0x5d83f4(0x3ad))['length'] > 0x0) && (clearInterval(_0x11c193), _0x3d3cff > _0x40c240 && console['warn'](_0x5d83f4(0x336), 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x11b869(_0x5d83f4(0x336), _0x5d83f4(0x259)), _0x304a1d(), _0x3d3cff++;
                }, 0x32);
            } else
                _0x304a1d();
        }
        function _0x4ec674(_0x513f34) {
            const _0x5142c1 = _0x3e3711;
            _0x313546[_0x5142c1(0x194)] && _0x513f34['find'](_0x5142c1(0x266))[_0x5142c1(0x3e7)](function () {
                const _0x1c6258 = _0x5142c1;
                _0x57b339(this)['on'](_0x1c6258(0x22c), function () {
                    const _0x2adf42 = _0x1c6258;
                    !_0x57b339(this)[_0x2adf42(0x36d)](_0x2adf42(0x3e1)) && (_0x57b339(this)[_0x2adf42(0x3b4)]('data-loop', !![]), this[_0x2adf42(0x2a8)](), _0x11b869(_0x2adf42(0x3a3)));
                });
            });
            _0x313546[_0x5142c1(0x366)] && _0x513f34[_0x5142c1(0x316)](_0x5142c1(0x266))[_0x5142c1(0x3e7)](function () {
                const _0x336a9c = _0x5142c1;
                _0x57b339(this)['on'](_0x336a9c(0x1b7), function () {
                    const _0x4ab107 = _0x336a9c;
                    !_0x57b339(this)[_0x4ab107(0x36d)]('modify') && (_0x57b339(this)[_0x4ab107(0x3b4)](_0x4ab107(0x17d), !![]), this[_0x4ab107(0x440)] = _0x3bbe46[_0x4ab107(0x277)], _0x11b869('(post)\x20Added\x20video\x20event\x20listener\x20#modify'));
                });
            });
            _0x313546[_0x5142c1(0x25d)] && _0x513f34[_0x5142c1(0x316)](_0x5142c1(0x266))[_0x5142c1(0x3e7)](function () {
                const _0x36ad30 = _0x5142c1;
                if (!_0x57b339(this)[_0x36ad30(0x36d)]('controls')) {
                    let _0x4199ff = _0x57b339(this);
                    _0x11b869(_0x36ad30(0x368)), _0x313546[_0x36ad30(0x366)] && (this[_0x36ad30(0x440)] = _0x3bbe46[_0x36ad30(0x277)], _0x57b339(this)['on'](_0x36ad30(0x41b), function () {
                        const _0x3a7a82 = _0x36ad30;
                        this['volume'] = _0x3bbe46[_0x3a7a82(0x277)];
                    })), _0x57b339(this)['on']('contextmenu', function (_0x3dade5) {
                        const _0x43f2c6 = _0x36ad30;
                        _0x3dade5[_0x43f2c6(0x196)](), _0x4199ff['css'](_0x43f2c6(0x32b), '-1'), _0x4199ff[_0x43f2c6(0x362)]('controls');
                    }), _0x57b339(this)[_0x36ad30(0x18c)]()[_0x36ad30(0x316)](_0x36ad30(0x273))['first']()['on']('contextmenu', function (_0x501b98) {
                        const _0x2a6e7a = _0x36ad30;
                        _0x501b98[_0x2a6e7a(0x196)](), _0x4199ff[_0x2a6e7a(0x281)](_0x2a6e7a(0x32b), '2'), _0x4199ff[_0x2a6e7a(0x3b4)](_0x2a6e7a(0x3d5), !![]);
                    }), _0x57b339(this)['on'](_0x36ad30(0x427), function () {
                        const _0x5a472a = _0x36ad30;
                        let _0x25d7c6 = _0x57b339(this)['parent']()[_0x5a472a(0x316)](_0x5a472a(0x273))['find'](_0x5a472a(0x284))[_0x5a472a(0x235)](function (_0xaaceae) {
                            const _0x588ae5 = _0x5a472a;
                            return _0x57b339(this)[_0x588ae5(0x1c6)]() <= 0x40 && _0x57b339(this)[_0x588ae5(0x250)]() <= 0x40 && _0x57b339(this)['find']('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')['length'] > 0x0;
                        });
                        var _0x287a61 = _0x25d7c6[_0x5a472a(0x316)](_0x5a472a(0x330))['length'] === 0x0;
                        this[_0x5a472a(0x409)] != _0x287a61 && (this[_0x5a472a(0x440)] = _0x3bbe46['videoVolume'], _0x25d7c6?.[_0x5a472a(0x321)](_0x5a472a(0x1c1))), _0x57b339(this)[_0x5a472a(0x3b4)](_0x5a472a(0x2ea)) && (_0x3bbe46[_0x5a472a(0x277)] = this[_0x5a472a(0x440)], GM_setValue('G_VIDEO_VOLUME', this['volume'])), this['volume'] == _0x3bbe46[_0x5a472a(0x277)] && _0x57b339(this)[_0x5a472a(0x3b4)]('data-completed', !![]);
                    }), _0x57b339(this)[_0x36ad30(0x281)](_0x36ad30(0x1d1), _0x36ad30(0x338)), _0x57b339(this)['css'](_0x36ad30(0x32b), '2'), _0x57b339(this)['attr']('data-controls', !![]), _0x57b339(this)['attr'](_0x36ad30(0x3d5), !![]);
                }
            });
            var _0x1a8b30 = _0x513f34[_0x5142c1(0x316)](_0x5142c1(0x266)), _0x2a5f60 = _0x513f34[_0x5142c1(0x316)](_0x5142c1(0x273))[_0x5142c1(0x3ef)]();
            _0x146a3e(_0x1a8b30, _0x2a5f60, _0x5142c1(0x401), _0x5142c1(0x2e5));
        }
        ;
        function _0x304a1d() {
            const _0x5bff80 = _0x3e3711;
            _0x57b339(_0x5bff80(0x38c))['map'](function (_0x3c5f12) {
                const _0x18bd2f = _0x5bff80;
                return _0x57b339(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x57b339(this)['parent']()[_0x18bd2f(0x18c)]()[_0x18bd2f(0x18c)]()[_0x18bd2f(0x18c)]()[0x0] : this;
            })[_0x5bff80(0x235)](function () {
                const _0x2f3c9a = _0x5bff80;
                return _0x57b339(this)[_0x2f3c9a(0x250)]() > 0x0 && _0x57b339(this)[_0x2f3c9a(0x1c6)]() > 0x0;
            })['each'](function (_0x5f395a) {
                const _0x3cf50b = _0x5bff80;
                if (!_0x57b339(this)[_0x3cf50b(0x3b4)](_0x3cf50b(0x37d)) && !_0x57b339(this)[_0x3cf50b(0x202)](_0x3cf50b(0x302)) && !_0x57b339(this)[_0x3cf50b(0x312)](_0x3cf50b(0x2f6))?.[_0x3cf50b(0x202)](_0x3cf50b(0x302)) && _0x57b339(this)['parents']('div#scrollview')[_0x3cf50b(0x189)] === 0x0) {
                    _0x11b869(_0x3cf50b(0x3e5), _0x57b339(this));
                    const _0x3355d6 = _0x57b339(this), _0x4e2d19 = this[_0x3cf50b(0x276)], _0x435a2c = '._acay\x20._acaz';
                    var _0x16edbb;
                    if (_0x4e2d19 === _0x3cf50b(0x1bb) && _0x5f395a != 0x0)
                        return;
                    const _0x31a159 = _0x3355d6[_0x3cf50b(0x312)](_0x3cf50b(0x424))[_0x3cf50b(0x312)](_0x3cf50b(0x424));
                    if (_0x31a159[_0x3cf50b(0x189)] === 0x0)
                        return;
                    _0x11b869(_0x3cf50b(0x3c4), _0x31a159);
                    if (_0x3355d6[_0x3cf50b(0x316)](_0x3cf50b(0x3c2))[_0x3cf50b(0x189)] > 0x0) {
                        _0x3355d6[_0x3cf50b(0x316)](_0x3cf50b(0x3fb))['length'] > 0x0 && _0x3355d6[_0x3cf50b(0x316)](_0x3cf50b(0x3fb))[_0x3cf50b(0x281)](_0x3cf50b(0x271), _0x3cf50b(0x1a1));
                        const _0xb3c36f = _0x3355d6[_0x3cf50b(0x316)](_0x3cf50b(0x3c2))[_0x3cf50b(0x3ef)]()[_0x3cf50b(0x18c)]()[0x0];
                        var _0x58cd01 = new MutationObserver(function () {
                            const _0x401dbc = _0x3cf50b;
                            _0x3355d6[_0x401dbc(0x316)]('._acay\x20+\x20.x24i39r')[_0x401dbc(0x281)](_0x401dbc(0x271), _0x401dbc(0x1a1));
                        });
                        _0x58cd01[_0x3cf50b(0x33f)](_0xb3c36f, { 'childList': !![] });
                    }
                    _0x31a159['eq'](_0x4e2d19 === _0x3cf50b(0x1bb) ? 0x0 : _0x31a159['length'] - 0x2)[_0x3cf50b(0x3db)](_0x3cf50b(0x2fc));
                    const _0x2dfee3 = _0x3cf50b(0x2ab) + _0x476c5e('DW') + _0x3cf50b(0x3ea) + _0x232083[_0x3cf50b(0x1f8)] + _0x3cf50b(0x2a1), _0x4b7099 = _0x3cf50b(0x199) + _0x476c5e(_0x3cf50b(0x1ad)) + _0x3cf50b(0x32c) + _0x232083[_0x3cf50b(0x1ad)] + _0x3cf50b(0x2a1), _0x279827 = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x476c5e(_0x3cf50b(0x32d)) + _0x3cf50b(0x42c) + _0x232083[_0x3cf50b(0x24c)] + _0x3cf50b(0x2a1), _0x24e015 = '<div\x20data-ih-locale-title=\x22IMAGE_VIEWER\x22\x20title=\x22' + _0x476c5e(_0x3cf50b(0x3bf)) + _0x3cf50b(0x2c6) + _0x232083[_0x3cf50b(0x3a9)] + _0x3cf50b(0x2a1);
                    _0x31a159['find'](_0x3cf50b(0x3c1))[_0x3cf50b(0x3db)](_0x2dfee3);
                    const _0x333b97 = _0x3355d6[_0x3cf50b(0x316)](_0x435a2c)[_0x3cf50b(0x189)];
                    if (_0x333b97 > 0x1 && _0x313546[_0x3cf50b(0x374)] && !_0x313546[_0x3cf50b(0x24d)]) {
                        const _0x209f67 = '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22' + _0x476c5e(_0x3cf50b(0x28d)) + _0x3cf50b(0x2c1) + _0x232083['DOWNLOAD_ALL'] + '</div>';
                        _0x31a159[_0x3cf50b(0x316)](_0x3cf50b(0x3c1))[_0x3cf50b(0x3db)](_0x209f67);
                    }
                    _0x31a159[_0x3cf50b(0x316)]('.button_wrapper')[_0x3cf50b(0x3db)](_0x4b7099), setTimeout(() => {
                        const _0x3d4c7e = _0x3cf50b;
                        if (_0x31a159['eq'](_0x4e2d19 === _0x3d4c7e(0x1bb) ? 0x0 : _0x31a159[_0x3d4c7e(0x189)] - 0x2)[_0x3d4c7e(0x316)](_0x3d4c7e(0x2b4))[_0x3d4c7e(0x189)] === 0x0)
                            _0x31a159['find'](_0x3d4c7e(0x266))[_0x3d4c7e(0x189)] > 0x0 ? _0x31a159[_0x3d4c7e(0x316)](_0x3d4c7e(0x3c1))[_0x3d4c7e(0x3db)](_0x279827) : (_0x16edbb = _0x3355d6['find'](_0x3d4c7e(0x1f7))['filter'](function () {
                                const _0x4774af = _0x3d4c7e;
                                return _0x57b339(this)[_0x4774af(0x1c6)]() > 0xc8 && _0x57b339(this)[_0x4774af(0x250)]() > 0xc8;
                            })[_0x3d4c7e(0x3b4)](_0x3d4c7e(0x27a)), _0x31a159[_0x3d4c7e(0x316)](_0x3d4c7e(0x3c1))['append'](_0x24e015));
                        else {
                            const _0x1078b9 = (_0x5dc7d6, _0x3308a6) => {
                                    const _0x55b9fe = _0x3d4c7e;
                                    _0x5dc7d6[_0x55b9fe(0x1ec)](_0x3343d4 => {
                                        const _0x3351a3 = _0x55b9fe;
                                        if (_0x3343d4[_0x3351a3(0x1a6)]) {
                                            var _0x2dd45e = _0x57b339(_0x3343d4[_0x3351a3(0x361)]);
                                            _0x31a159[_0x3351a3(0x316)](_0x3351a3(0x417))?.[_0x3351a3(0x231)](), _0x31a159['find'](_0x3351a3(0x2db))?.[_0x3351a3(0x231)](), _0x2dd45e[_0x3351a3(0x316)](_0x3351a3(0x266))['length'] > 0x0 ? (_0x31a159[_0x3351a3(0x316)](_0x3351a3(0x417))[_0x3351a3(0x189)] === 0x0 && _0x31a159[_0x3351a3(0x316)](_0x3351a3(0x3c1))[_0x3351a3(0x3db)](_0x279827), _0x4ec674(_0x3355d6)) : (_0x16edbb = _0x2dd45e['find']('img')['attr']('src'), _0x31a159[_0x3351a3(0x316)](_0x3351a3(0x3c1))['append'](_0x24e015));
                                        }
                                    });
                                }, _0x51f2d5 = new IntersectionObserver(_0x1078b9, {
                                    'root': _0x3355d6[_0x3d4c7e(0x316)]('div\x20>\x20ul._acay')[_0x3d4c7e(0x3ef)]()[_0x3d4c7e(0x18c)]()['parent']()[_0x3d4c7e(0x18c)]()[0x0],
                                    'rootMargin': _0x3d4c7e(0x1e7),
                                    'threshold': 0.1
                                }), _0x1d5db3 = new MutationObserver(function (_0x430565, _0x1f7178) {
                                    const _0x1e840c = _0x3d4c7e;
                                    var _0xc461ad = _0x430565['at'](0x0)?.['target'];
                                    _0x57b339(_0xc461ad)['find']('li._acaz')[_0x1e840c(0x3e7)](function () {
                                        _0x51f2d5['observe'](this);
                                    });
                                });
                            _0x3355d6['find'](_0x3d4c7e(0x2b4))[_0x3d4c7e(0x3e7)](function () {
                                const _0x4d9f19 = _0x3d4c7e;
                                _0x51f2d5[_0x4d9f19(0x33f)](this);
                            });
                            const _0x4f86bb = _0x31a159['eq'](_0x4e2d19 === _0x3d4c7e(0x1bb) ? 0x0 : _0x31a159[_0x3d4c7e(0x189)] - 0x2)[_0x3d4c7e(0x316)](_0x3d4c7e(0x2b4))?.[_0x3d4c7e(0x18c)]()[0x0], _0x5c685f = _0x31a159['eq'](_0x4e2d19 === 'DIV' ? 0x0 : _0x31a159[_0x3d4c7e(0x189)] - 0x2)[_0x3d4c7e(0x316)](_0x3d4c7e(0x2b4))?.[_0x3d4c7e(0x18c)]()['parent']()[0x0];
                            _0x4f86bb && _0x1d5db3[_0x3d4c7e(0x33f)](_0x4f86bb, { 'childList': !![] }), _0x5c685f && _0x1d5db3[_0x3d4c7e(0x33f)](_0x5c685f, { 'attributes': !![] });
                        }
                    }, 0x32), _0x31a159['css'](_0x3cf50b(0x1d1), 'relative'), _0x4ec674(_0x3355d6), _0x3bbe46[_0x3cf50b(0x333)]['push']({
                        'element': this,
                        'trigger': [
                            _0x3cf50b(0x417),
                            _0x3cf50b(0x314),
                            _0x3cf50b(0x346),
                            _0x3cf50b(0x19d),
                            _0x3cf50b(0x2db)
                        ]
                    }), _0x57b339(this)['on'](_0x3cf50b(0x1c1), _0x3cf50b(0x2db), function () {
                        const _0x464e36 = _0x3cf50b;
                        _0x16edbb != null ? _0x5ecd36(_0x16edbb) : alert(_0x464e36(0x2c3));
                    }), _0x57b339(this)['on'](_0x3cf50b(0x1c1), '.IG_THUMBNAIL_MAIN', function () {
                        const _0x7006d6 = _0x3cf50b;
                        _0x46ea0e(!![]), _0x3bbe46[_0x7006d6(0x224)] = _0x3355d6[_0x7006d6(0x3b4)](_0x7006d6(0x1b0)), _0x3bbe46['GL_postPath'] = location[_0x7006d6(0x2d4)][_0x7006d6(0x367)](/\/$/, '')['split']('/')['at'](-0x1) || _0x3355d6[_0x7006d6(0x316)](_0x7006d6(0x270))[_0x7006d6(0x3ef)]()[_0x7006d6(0x3b4)]('href')[_0x7006d6(0x327)]('/')['at'](0x2) || _0x57b339(this)['parent']()[_0x7006d6(0x18c)]()[_0x7006d6(0x18c)]()[_0x7006d6(0x312)](_0x7006d6(0x415))[_0x7006d6(0x312)](_0x7006d6(0x424))[_0x7006d6(0x312)]('div:last-child')[_0x7006d6(0x316)](_0x7006d6(0x270))['last']()[_0x7006d6(0x3b4)](_0x7006d6(0x3e8))[_0x7006d6(0x327)]('/')['at'](0x2);
                        var _0x42f745 = _0x3e4acf(_0x3355d6);
                        _0x38543d(!![], ![]), _0x49787d(_0x3bbe46['GL_postPath'], _0x7006d6(0x2b2), '')['then'](() => {
                            let _0x1697f3 = setInterval(() => {
                                const _0x2f4840 = a0_0xc123;
                                if (_0x57b339(_0x2f4840(0x1f0))[_0x2f4840(0x189)] > 0x0) {
                                    clearInterval(_0x1697f3);
                                    var _0x59825f = _0x57b339('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x42f745 + 0x1) + '\x22]')?.[_0x2f4840(0x18c)]()[_0x2f4840(0x316)](_0x2f4840(0x3c8))?.['first']();
                                    _0x59825f != null && _0x59825f[_0x2f4840(0x189)] > 0x0 ? _0x59825f[_0x2f4840(0x321)]('click') : alert(_0x2f4840(0x36b)), _0x46ea0e(![]), _0x57b339(_0x2f4840(0x3f8))[_0x2f4840(0x231)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x57b339(this)['on']('click', '.IG_NEWTAB_MAIN', function () {
                        const _0x1448a8 = _0x3cf50b;
                        _0x46ea0e(!![]), _0x3bbe46[_0x1448a8(0x224)] = _0x3355d6['attr'](_0x1448a8(0x1b0)), _0x3bbe46[_0x1448a8(0x1ba)] = location['pathname']['replace'](/\/$/, '')[_0x1448a8(0x327)]('/')['at'](-0x1) || _0x3355d6[_0x1448a8(0x316)](_0x1448a8(0x270))[_0x1448a8(0x3ef)]()[_0x1448a8(0x3b4)](_0x1448a8(0x3e8))[_0x1448a8(0x327)]('/')['at'](0x2) || _0x57b339(this)['parent']()[_0x1448a8(0x18c)]()[_0x1448a8(0x18c)]()['children'](_0x1448a8(0x415))[_0x1448a8(0x312)](_0x1448a8(0x424))[_0x1448a8(0x312)]('div:last-child')[_0x1448a8(0x316)]('a[href^=\x22/p/\x22]')[_0x1448a8(0x3a1)]()[_0x1448a8(0x3b4)]('href')['split']('/')['at'](0x2);
                        var _0x325512 = _0x3e4acf(_0x3355d6);
                        _0x38543d(!![], ![]), _0x49787d(_0x3bbe46[_0x1448a8(0x1ba)], _0x1448a8(0x2b2), '')[_0x1448a8(0x1f6)](() => {
                            let _0x3b65b7 = setInterval(() => {
                                const _0x2686a1 = a0_0xc123;
                                if (_0x57b339(_0x2686a1(0x1f0))[_0x2686a1(0x189)] > 0x0) {
                                    clearInterval(_0x3b65b7);
                                    var _0x43c9aa = _0x57b339(_0x2686a1(0x1bc) + (_0x325512 + 0x1) + '\x22]');
                                    if (_0x313546['FORCE_RESOURCE_VIA_MEDIA'] && _0x313546['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                                        _0xb19f52(_0x43c9aa[_0x2686a1(0x3ef)]()[0x0], !![]);
                                    else {
                                        let _0x3abaa6 = _0x43c9aa?.[_0x2686a1(0x3b4)](_0x2686a1(0x40c));
                                        if (_0x3abaa6) {
                                            var _0x446ff1 = new URL(_0x3abaa6);
                                            _0x446ff1[_0x2686a1(0x260)] = _0x2686a1(0x1d8), _0x13e261(_0x446ff1[_0x2686a1(0x3e8)]);
                                        } else
                                            alert(_0x2686a1(0x1e6));
                                    }
                                    _0x46ea0e(![]), _0x57b339('.IG_POPUP_DIG')[_0x2686a1(0x231)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x57b339(this)['on'](_0x3cf50b(0x1c1), '.IG_DW_ALL_MAIN', async function () {
                        const _0x3e58fa = _0x3cf50b;
                        _0x3bbe46[_0x3e58fa(0x224)] = _0x3355d6[_0x3e58fa(0x3b4)](_0x3e58fa(0x1b0)), _0x3bbe46[_0x3e58fa(0x1ba)] = location[_0x3e58fa(0x2d4)][_0x3e58fa(0x367)](/\/$/, '')['split']('/')['at'](-0x1) || _0x3355d6['find'](_0x3e58fa(0x270))[_0x3e58fa(0x3ef)]()[_0x3e58fa(0x3b4)](_0x3e58fa(0x3e8))[_0x3e58fa(0x327)]('/')['at'](0x2) || _0x57b339(this)[_0x3e58fa(0x18c)]()['parent']()['parent']()[_0x3e58fa(0x312)]('div:last-child')[_0x3e58fa(0x312)](_0x3e58fa(0x424))[_0x3e58fa(0x312)](_0x3e58fa(0x415))[_0x3e58fa(0x316)](_0x3e58fa(0x270))[_0x3e58fa(0x3a1)]()[_0x3e58fa(0x3b4)](_0x3e58fa(0x3e8))[_0x3e58fa(0x327)]('/')['at'](0x2), _0x38543d(_0x313546['DIRECT_DOWNLOAD_ALL'], !![]), _0x57b339(_0x3e58fa(0x1be))[_0x3e58fa(0x29f)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x3bbe46[_0x3e58fa(0x1ba)] + '\x22>' + _0x3bbe46[_0x3e58fa(0x1ba)] + _0x3e58fa(0x390)), _0x57b339(_0x3e58fa(0x1f0))[_0x3e58fa(0x3e7)](function () {
                            const _0x4ba0c0 = _0x3e58fa;
                            _0x57b339(this)[_0x4ba0c0(0x263)](_0x4ba0c0(0x3c6)), _0x57b339(this)[_0x4ba0c0(0x382)](_0x4ba0c0(0x431)), _0x57b339(this)[_0x4ba0c0(0x365)](_0x4ba0c0(0x199) + _0x476c5e(_0x4ba0c0(0x1ad)) + _0x4ba0c0(0x254) + _0x232083[_0x4ba0c0(0x1ad)] + '</div>'), _0x57b339(this)[_0x4ba0c0(0x3b4)]('data-name') == _0x4ba0c0(0x266) && _0x57b339(this)[_0x4ba0c0(0x365)](_0x4ba0c0(0x354) + _0x476c5e(_0x4ba0c0(0x32d)) + _0x4ba0c0(0x400) + _0x232083[_0x4ba0c0(0x24c)] + '</div>');
                        }), _0x49787d(_0x3bbe46['GL_postPath'], _0x3e58fa(0x2b2), _0x476c5e(_0x3e58fa(0x30b)))[_0x3e58fa(0x1f6)](() => {
                            let _0x18731f = setInterval(() => {
                                const _0xf2f550 = a0_0xc123;
                                _0x57b339(_0xf2f550(0x1f0))[_0xf2f550(0x189)] > 0x0 && (clearInterval(_0x18731f), _0x57b339(_0xf2f550(0x1f0))[_0xf2f550(0x3e7)](function () {
                                    const _0x18d645 = _0xf2f550;
                                    _0x57b339(this)['trigger'](_0x18d645(0x1c1));
                                }), _0x57b339(_0xf2f550(0x3f8))[_0xf2f550(0x231)]());
                            }, 0xfa);
                        });
                    }), _0x57b339(this)['on'](_0x3cf50b(0x1c1), '.IG_DW_MAIN', async function () {
                        const _0x29e85e = _0x3cf50b;
                        _0x3bbe46[_0x29e85e(0x224)] = _0x3355d6[_0x29e85e(0x3b4)](_0x29e85e(0x1b0)), _0x3bbe46[_0x29e85e(0x1ba)] = location[_0x29e85e(0x2d4)]['replace'](/\/$/, '')['split']('/')['at'](-0x1) || _0x3355d6[_0x29e85e(0x316)](_0x29e85e(0x270))[_0x29e85e(0x3ef)]()[_0x29e85e(0x3b4)](_0x29e85e(0x3e8))[_0x29e85e(0x327)]('/')['at'](0x2) || _0x57b339(this)['parent']()[_0x29e85e(0x18c)]()['parent']()[_0x29e85e(0x312)](_0x29e85e(0x415))['children']('div')[_0x29e85e(0x312)](_0x29e85e(0x415))[_0x29e85e(0x316)](_0x29e85e(0x270))['last']()[_0x29e85e(0x3b4)]('href')[_0x29e85e(0x327)]('/')['at'](0x2), _0x38543d(_0x313546[_0x29e85e(0x24d)], !![]), _0x57b339(_0x29e85e(0x1be))[_0x29e85e(0x29f)](_0x29e85e(0x296) + _0x3bbe46['GL_postPath'] + '\x22>' + _0x3bbe46['GL_postPath'] + _0x29e85e(0x390));
                        if (_0x313546[_0x29e85e(0x374)]) {
                            _0x46ea0e(!![]), _0x4d3d04(!![]);
                            var _0x1e8f2d = _0x3e4acf(_0x57b339(this)[_0x29e85e(0x18c)]()[_0x29e85e(0x18c)]()['parent']());
                            _0x49787d(_0x3bbe46[_0x29e85e(0x1ba)], _0x29e85e(0x2b2), '')[_0x29e85e(0x1f6)](() => {
                                let _0x28480a = setInterval(() => {
                                    const _0x96e61c = a0_0xc123;
                                    if (_0x57b339(_0x96e61c(0x1f0))[_0x96e61c(0x189)] > 0x0) {
                                        clearInterval(_0x28480a);
                                        var _0x2ac1a8 = _0x57b339('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x1e8f2d + 0x1) + '\x22]')?.[_0x96e61c(0x3b4)](_0x96e61c(0x40c));
                                        _0x2ac1a8 ? (_0x46ea0e(![]), _0x57b339('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22' + (_0x1e8f2d + 0x1) + '\x22]')?.[_0x96e61c(0x321)](_0x96e61c(0x1c1))) : alert('Can\x20not\x20find\x20download\x20url.'), _0x57b339('.IG_POPUP_DIG')[_0x96e61c(0x231)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x313546['DIRECT_DOWNLOAD_ALL']) {
                            var _0x388162 = 0x0, _0xea0063 = _0x57b339(this)[_0x29e85e(0x18c)]()[_0x29e85e(0x18c)]()[_0x29e85e(0x316)](_0x435a2c)[_0x29e85e(0x189)], _0x597e25 = _0x313546[_0x29e85e(0x326)], _0x5d6672 = new Date(_0x57b339(this)[_0x29e85e(0x18c)]()[_0x29e85e(0x18c)]()[_0x29e85e(0x18c)]()[_0x29e85e(0x316)](_0x29e85e(0x2bc))[_0x29e85e(0x235)](function () {
                                    const _0x66f9d4 = _0x29e85e;
                                    let _0x4d6f0e = _0x57b339(this)[_0x66f9d4(0x2d0)]('a[href]')[_0x66f9d4(0x3b4)](_0x66f9d4(0x3e8));
                                    return _0x4d6f0e?.[_0x66f9d4(0x379)](_0x66f9d4(0x1e8)) || _0x4d6f0e?.[_0x66f9d4(0x3d9)](/\/([\w.\-_]+)\/p\//ig) != null;
                                })[_0x29e85e(0x3ef)]()[_0x29e85e(0x3b4)](_0x29e85e(0x256)))['getTime']();
                            if (_0xea0063)
                                _0x57b339(this)[_0x29e85e(0x18c)]()[_0x29e85e(0x18c)]()[_0x29e85e(0x316)](_0x435a2c)['each'](function () {
                                    const _0x3b821c = _0x29e85e;
                                    let _0x51a5d4 = _0x57b339(this)[_0x3b821c(0x18c)]()[_0x3b821c(0x18c)]()[_0x3b821c(0x18c)]()['find'](_0x3b821c(0x266));
                                    _0x51a5d4 && _0x51a5d4[_0x3b821c(0x3b4)](_0x3b821c(0x27a)) && (_0x597e25 = !![]);
                                }), _0x597e25 || _0x313546[_0x29e85e(0x26f)] ? _0x49787d(_0x3bbe46[_0x29e85e(0x1ba)], _0x29e85e(0x2b2), _0x476c5e(_0x29e85e(0x30b))) : (_0x57b339(this)['parent']()[_0x29e85e(0x18c)]()[_0x29e85e(0x316)](_0x435a2c)[_0x29e85e(0x3e7)](function () {
                                    const _0x1540b2 = _0x29e85e;
                                    _0x388162++;
                                    let _0xe7bda0 = _0x57b339(this)[_0x1540b2(0x316)](_0x1540b2(0x266)), _0x3dc9da = _0x57b339(this)[_0x1540b2(0x316)](_0x1540b2(0x25c)), _0x4fe5bc = _0x3dc9da[_0x1540b2(0x3b4)](_0x1540b2(0x3cc)) ? _0x3dc9da[_0x1540b2(0x3b4)]('srcset')[_0x1540b2(0x327)]('\x20')[0x0] : _0x3dc9da[_0x1540b2(0x3b4)](_0x1540b2(0x27a));
                                    _0xe7bda0 && _0xe7bda0[_0x1540b2(0x3b4)]('src') && (_0x597e25 = !![]), _0x3dc9da && _0x4fe5bc && _0x57b339('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY')['append'](_0x1540b2(0x375) + _0x5d6672 + _0x1540b2(0x283) + _0x3bbe46['GL_postPath'] + _0x1540b2(0x3ed) + _0x388162 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x4fe5bc + _0x1540b2(0x245) + _0x4fe5bc + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x476c5e(_0x1540b2(0x3fa)) + _0x1540b2(0x2bf) + _0x388162 + _0x1540b2(0x40b));
                                }), _0x597e25 && _0x49787d(_0x3bbe46[_0x29e85e(0x1ba)], '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY', _0x476c5e('LOAD_BLOB_RELOAD')));
                            else {
                                if (_0x313546['FORCE_RESOURCE_VIA_MEDIA'])
                                    _0x49787d(_0x3bbe46[_0x29e85e(0x1ba)], _0x29e85e(0x2b2), _0x476c5e(_0x29e85e(0x30b)));
                                else {
                                    _0x388162++;
                                    let _0x33baed = _0x57b339(this)['parent']()['parent']()['parent']()[_0x29e85e(0x316)](_0x29e85e(0x266)), _0x3de56b = _0x57b339(this)[_0x29e85e(0x18c)]()[_0x29e85e(0x18c)]()[_0x29e85e(0x18c)]()[_0x29e85e(0x316)](_0x29e85e(0x25c)), _0x2e94ee = _0x3de56b[_0x29e85e(0x3b4)](_0x29e85e(0x3cc)) ? _0x3de56b[_0x29e85e(0x3b4)]('srcset')[_0x29e85e(0x327)]('\x20')[0x0] : _0x3de56b[_0x29e85e(0x3b4)](_0x29e85e(0x27a));
                                    _0x33baed && _0x33baed[_0x29e85e(0x3b4)](_0x29e85e(0x27a)) && _0x49787d(_0x3bbe46[_0x29e85e(0x1ba)], _0x29e85e(0x2b2), _0x476c5e(_0x29e85e(0x246))), _0x3de56b && _0x2e94ee && _0x57b339(_0x29e85e(0x2b2))['append'](_0x29e85e(0x375) + _0x5d6672 + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x3bbe46[_0x29e85e(0x1ba)] + _0x29e85e(0x3ed) + _0x388162 + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x2e94ee + _0x29e85e(0x245) + _0x2e94ee + _0x29e85e(0x23e) + _0x476c5e('IMG') + _0x29e85e(0x2bf) + _0x388162 + '\x20-</a>');
                                }
                            }
                        }
                        _0x57b339(_0x29e85e(0x1f0))[_0x29e85e(0x3e7)](function () {
                            const _0x3f938f = _0x29e85e;
                            _0x57b339(this)[_0x3f938f(0x263)](_0x3f938f(0x3c6)), _0x57b339(this)[_0x3f938f(0x382)](_0x3f938f(0x431)), _0x57b339(this)[_0x3f938f(0x365)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x476c5e(_0x3f938f(0x1ad)) + _0x3f938f(0x254) + _0x232083['NEW_TAB'] + _0x3f938f(0x2a1)), _0x57b339(this)[_0x3f938f(0x3b4)]('data-name') == _0x3f938f(0x266) && _0x57b339(this)[_0x3f938f(0x365)](_0x3f938f(0x354) + _0x476c5e(_0x3f938f(0x32d)) + _0x3f938f(0x400) + _0x232083[_0x3f938f(0x24c)] + _0x3f938f(0x2a1));
                        }), _0x313546[_0x29e85e(0x24d)] && _0x49787d(_0x3bbe46[_0x29e85e(0x1ba)], _0x29e85e(0x2b2), _0x476c5e('LOAD_BLOB_MULTIPLE'))[_0x29e85e(0x1f6)](() => {
                            let _0x3df9fd = setInterval(() => {
                                const _0x211bc7 = a0_0xc123;
                                _0x57b339('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')['length'] > 0x0 && (clearInterval(_0x3df9fd), _0x57b339('.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a')[_0x211bc7(0x3e7)](function () {
                                    const _0x2f260b = _0x211bc7;
                                    _0x57b339(this)[_0x2f260b(0x321)]('click');
                                }), _0x57b339(_0x211bc7(0x3f8))[_0x211bc7(0x231)]());
                            }, 0xfa);
                        });
                    });
                    var _0x47604a = _0x57b339(this)[_0x3cf50b(0x316)]('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x3cf50b(0x3ef)]()[_0x3cf50b(0x225)]() || _0x57b339(this)[_0x3cf50b(0x316)](_0x3cf50b(0x210))[_0x3cf50b(0x235)](function () {
                        const _0x25f12f = _0x3cf50b;
                        return _0x57b339(this)?.['text']()?.[_0x25f12f(0x189)] > 0x0;
                    })[_0x3cf50b(0x3ef)]()['text']();
                    _0x57b339(this)[_0x3cf50b(0x3b4)](_0x3cf50b(0x37d), _0x3cf50b(0x3e2)), _0x57b339(this)[_0x3cf50b(0x3b4)](_0x3cf50b(0x1b0), _0x47604a);
                }
            });
        }
        function _0x2f33a4(_0x4d9456) {
            const _0x17d7b6 = _0x3e3711;
            var _0x2fce71 = _0x4d9456[_0x17d7b6(0x34b)] ?? _0x4d9456;
            return _0x2fce71[_0x17d7b6(0x221)] == null && _0x2fce71[_0x17d7b6(0x2fe)] != null && (_0x2fce71[_0x17d7b6(0x221)] = _0x2fce71['user']), _0x2fce71['owner'] == null && (_0x11b869(_0x17d7b6(0x200), _0x17d7b6(0x20a)), alert(_0x17d7b6(0x3e3))), _0x2fce71;
        }
        async function _0x49787d(_0x5d983f, _0x1847f3, _0x390e22) {
            const _0x2bec89 = _0x3e3711;
            try {
                _0x57b339(_0x1847f3 + '\x20a')[_0x2bec89(0x231)](), _0x57b339(_0x1847f3)[_0x2bec89(0x3db)]('<p\x20id=\x22_SNLOAD\x22>' + _0x390e22 + _0x2bec89(0x3e0));
                let _0x3d5698 = await _0x24a4a6(_0x5d983f), _0x23cf8b = _0x2f33a4(_0x3d5698[_0x2bec89(0x36d)]);
                if (_0x3d5698['type'] === _0x2bec89(0x383)) {
                    let _0x3277bf = 0x1;
                    _0x23cf8b['__typename'] == _0x2bec89(0x19f) && _0x23cf8b['video_url'] && (_0x57b339(_0x1847f3)[_0x2bec89(0x3db)](_0x2bec89(0x1d7) + _0x23cf8b['id'] + '\x22\x20datetime=\x22' + _0x23cf8b['taken_at_timestamp'] + _0x2bec89(0x218) + _0x23cf8b['shortcode'] + _0x2bec89(0x1da) + _0x23cf8b[_0x2bec89(0x221)][_0x2bec89(0x441)] + _0x2bec89(0x335) + _0x3277bf + _0x2bec89(0x19b) + _0x23cf8b[_0x2bec89(0x268)] + _0x2bec89(0x245) + _0x23cf8b[_0x2bec89(0x23a)][0x1][_0x2bec89(0x27a)] + _0x2bec89(0x3e6) + _0x476c5e(_0x2bec89(0x413)) + _0x2bec89(0x2bf) + _0x3277bf + _0x2bec89(0x40b)), _0x3277bf++);
                    _0x23cf8b[_0x2bec89(0x262)] == _0x2bec89(0x329) && (_0x57b339(_0x1847f3)[_0x2bec89(0x3db)]('<a\x20media-id=\x22' + _0x23cf8b['id'] + _0x2bec89(0x3f0) + _0x23cf8b['taken_at_timestamp'] + _0x2bec89(0x218) + _0x23cf8b[_0x2bec89(0x27d)] + _0x2bec89(0x430) + _0x23cf8b['owner'][_0x2bec89(0x441)] + _0x2bec89(0x335) + _0x3277bf + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x23cf8b[_0x2bec89(0x23a)][_0x23cf8b[_0x2bec89(0x23a)][_0x2bec89(0x189)] - 0x1]['src'] + _0x2bec89(0x245) + _0x23cf8b['display_resources'][0x1][_0x2bec89(0x27a)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x476c5e(_0x2bec89(0x3fa)) + '</span>\x20' + _0x3277bf + _0x2bec89(0x40b)), _0x3277bf++);
                    if (_0x23cf8b[_0x2bec89(0x262)] == 'GraphSidecar' && _0x23cf8b['edge_sidecar_to_children'])
                        for (let _0x31fb48 of _0x23cf8b[_0x2bec89(0x384)][_0x2bec89(0x1a3)]) {
                            _0x31fb48[_0x2bec89(0x373)][_0x2bec89(0x262)] == 'GraphVideo' && _0x57b339(_0x1847f3)[_0x2bec89(0x3db)](_0x2bec89(0x1d7) + _0x31fb48[_0x2bec89(0x373)]['id'] + _0x2bec89(0x3f0) + _0x23cf8b['taken_at_timestamp'] + _0x2bec89(0x218) + _0x23cf8b[_0x2bec89(0x27d)] + _0x2bec89(0x1da) + _0x23cf8b['owner'][_0x2bec89(0x441)] + _0x2bec89(0x335) + _0x3277bf + _0x2bec89(0x19b) + _0x31fb48['node'][_0x2bec89(0x268)] + _0x2bec89(0x245) + _0x31fb48['node'][_0x2bec89(0x23a)][0x1][_0x2bec89(0x27a)] + _0x2bec89(0x1b4) + _0x476c5e('VID') + _0x2bec89(0x2bf) + _0x3277bf + _0x2bec89(0x40b)), _0x31fb48[_0x2bec89(0x373)][_0x2bec89(0x262)] == 'GraphImage' && _0x57b339(_0x1847f3)['append'](_0x2bec89(0x1d7) + _0x31fb48['node']['id'] + _0x2bec89(0x3f0) + _0x23cf8b[_0x2bec89(0x35a)] + _0x2bec89(0x218) + _0x23cf8b[_0x2bec89(0x27d)] + _0x2bec89(0x430) + _0x23cf8b[_0x2bec89(0x221)][_0x2bec89(0x441)] + _0x2bec89(0x335) + _0x3277bf + _0x2bec89(0x19b) + _0x31fb48[_0x2bec89(0x373)][_0x2bec89(0x23a)][_0x31fb48['node'][_0x2bec89(0x23a)]['length'] - 0x1][_0x2bec89(0x27a)] + _0x2bec89(0x245) + _0x31fb48[_0x2bec89(0x373)]['display_resources'][0x1][_0x2bec89(0x27a)] + _0x2bec89(0x23e) + _0x476c5e(_0x2bec89(0x3fa)) + _0x2bec89(0x2bf) + _0x3277bf + _0x2bec89(0x40b)), _0x3277bf++;
                        }
                } else {
                    if (_0x23cf8b[_0x2bec89(0x3f9)])
                        _0x11b869(_0x2bec89(0x3f9)), _0x23cf8b[_0x2bec89(0x3f9)][_0x2bec89(0x1ec)]((_0x36a607, _0x1502bb) => {
                            const _0x557dea = _0x2bec89;
                            let _0x51f919 = _0x1502bb + 0x1;
                            _0x36a607['video_versions'] == null ? (_0x36a607[_0x557dea(0x2e7)][_0x557dea(0x2c8)]['sort'](function (_0x58e663, _0x40e7e9) {
                                const _0x181419 = _0x557dea;
                                let _0x33c9c9 = new URL(_0x58e663[_0x181419(0x1f5)])['searchParams']['get'](_0x181419(0x376)), _0x48690 = new URL(_0x40e7e9[_0x181419(0x1f5)])[_0x181419(0x243)][_0x181419(0x3d4)]('stp');
                                if (_0x33c9c9 && _0x48690) {
                                    if (_0x33c9c9[_0x181419(0x189)] > _0x48690['length'])
                                        return 0x1;
                                    if (_0x33c9c9['length'] < _0x48690['length'])
                                        return -0x1;
                                } else {
                                    if (_0x58e663[_0x181419(0x1c6)] < _0x40e7e9[_0x181419(0x1c6)])
                                        return 0x1;
                                    if (_0x58e663[_0x181419(0x1c6)] > _0x40e7e9[_0x181419(0x1c6)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x57b339(_0x1847f3)[_0x557dea(0x3db)]('<a\x20media-id=\x22' + _0x36a607['pk'] + _0x557dea(0x3f0) + _0x36a607[_0x557dea(0x3a4)] + _0x557dea(0x218) + _0x23cf8b[_0x557dea(0x28e)] + _0x557dea(0x430) + _0x23cf8b[_0x557dea(0x221)][_0x557dea(0x441)] + '\x22\x20data-globalIndex=\x22' + _0x51f919 + _0x557dea(0x19b) + _0x36a607[_0x557dea(0x2e7)][_0x557dea(0x2c8)][0x0][_0x557dea(0x1f5)] + _0x557dea(0x245) + _0x36a607['image_versions2']['candidates'][0x0][_0x557dea(0x1f5)] + _0x557dea(0x23e) + _0x476c5e(_0x557dea(0x3fa)) + _0x557dea(0x2bf) + _0x51f919 + _0x557dea(0x40b))) : _0x57b339(_0x1847f3)[_0x557dea(0x3db)](_0x557dea(0x1d7) + _0x36a607['pk'] + '\x22\x20datetime=\x22' + _0x36a607[_0x557dea(0x3a4)] + _0x557dea(0x218) + _0x23cf8b[_0x557dea(0x28e)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x23cf8b[_0x557dea(0x221)][_0x557dea(0x441)] + _0x557dea(0x335) + _0x51f919 + _0x557dea(0x19b) + _0x36a607[_0x557dea(0x1cb)][0x0][_0x557dea(0x1f5)] + _0x557dea(0x245) + _0x36a607['image_versions2'][_0x557dea(0x2c8)][0x0][_0x557dea(0x1f5)] + _0x557dea(0x3e6) + _0x476c5e('VID') + '</span>\x20' + _0x51f919 + _0x557dea(0x40b));
                        });
                    else {
                        let _0x3e5123 = 0x1;
                        _0x23cf8b[_0x2bec89(0x1cb)] == null ? (_0x23cf8b[_0x2bec89(0x2e7)][_0x2bec89(0x2c8)][_0x2bec89(0x2e0)](function (_0xa7968d, _0x4c6925) {
                            const _0x2afa2c = _0x2bec89;
                            let _0x2a79ae = new URL(_0xa7968d[_0x2afa2c(0x1f5)])['searchParams'][_0x2afa2c(0x3d4)](_0x2afa2c(0x376)), _0x2ce938 = new URL(_0x4c6925[_0x2afa2c(0x1f5)])['searchParams'][_0x2afa2c(0x3d4)](_0x2afa2c(0x376));
                            if (_0x2a79ae && _0x2ce938) {
                                if (_0x2a79ae['length'] > _0x2ce938['length'])
                                    return 0x1;
                                if (_0x2a79ae[_0x2afa2c(0x189)] < _0x2ce938['length'])
                                    return -0x1;
                            } else {
                                if (_0xa7968d[_0x2afa2c(0x1c6)] < _0x4c6925[_0x2afa2c(0x1c6)])
                                    return 0x1;
                                if (_0xa7968d[_0x2afa2c(0x1c6)] > _0x4c6925['width'])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x57b339(_0x1847f3)[_0x2bec89(0x3db)](_0x2bec89(0x1d7) + _0x23cf8b['pk'] + _0x2bec89(0x3f0) + _0x23cf8b['taken_at'] + _0x2bec89(0x218) + _0x23cf8b[_0x2bec89(0x28e)] + _0x2bec89(0x430) + _0x23cf8b[_0x2bec89(0x221)]['username'] + _0x2bec89(0x335) + _0x3e5123 + _0x2bec89(0x19b) + _0x23cf8b[_0x2bec89(0x2e7)][_0x2bec89(0x2c8)][0x0][_0x2bec89(0x1f5)] + _0x2bec89(0x245) + _0x23cf8b['image_versions2'][_0x2bec89(0x2c8)][0x0]['url'] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x476c5e('IMG') + _0x2bec89(0x2bf) + _0x3e5123 + _0x2bec89(0x40b))) : _0x57b339(_0x1847f3)[_0x2bec89(0x3db)](_0x2bec89(0x1d7) + _0x23cf8b['pk'] + '\x22\x20datetime=\x22' + _0x23cf8b['taken_at'] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x23cf8b[_0x2bec89(0x28e)] + _0x2bec89(0x1da) + _0x23cf8b['owner']['username'] + _0x2bec89(0x335) + _0x3e5123 + _0x2bec89(0x19b) + _0x23cf8b[_0x2bec89(0x1cb)][0x0][_0x2bec89(0x1f5)] + _0x2bec89(0x245) + _0x23cf8b[_0x2bec89(0x2e7)][_0x2bec89(0x2c8)][0x0][_0x2bec89(0x1f5)] + _0x2bec89(0x3e6) + _0x476c5e(_0x2bec89(0x413)) + '</span>\x20' + _0x3e5123 + _0x2bec89(0x40b));
                    }
                }
                _0x57b339(_0x2bec89(0x2c4))['remove'](), _0x57b339(_0x2bec89(0x1f0))[_0x2bec89(0x3e7)](function () {
                    const _0x3788bf = _0x2bec89;
                    _0x57b339(this)[_0x3788bf(0x263)](_0x3788bf(0x3c6)), _0x57b339(this)[_0x3788bf(0x382)](_0x3788bf(0x431)), _0x57b339(this)[_0x3788bf(0x365)](_0x3788bf(0x199) + _0x476c5e(_0x3788bf(0x1ad)) + _0x3788bf(0x254) + _0x232083[_0x3788bf(0x1ad)] + _0x3788bf(0x2a1)), _0x57b339(this)[_0x3788bf(0x3b4)](_0x3788bf(0x2a2)) == 'video' && _0x57b339(this)[_0x3788bf(0x365)](_0x3788bf(0x354) + _0x476c5e(_0x3788bf(0x32d)) + _0x3788bf(0x400) + _0x232083[_0x3788bf(0x24c)] + _0x3788bf(0x2a1));
                });
            } catch (_0x21bd97) {
                _0x11b869(_0x2bec89(0x423), _0x21bd97);
            }
            ;
        }
        function _0x3e4acf(_0x4afe35) {
            const _0x387712 = _0x3e3711;
            var _0x4c658d = 0x0, _0x1ec097 = _0x4afe35[_0x387712(0x316)](_0x387712(0x1a4));
            return (_0x1ec097 == null || !_0x1ec097[_0x387712(0x202)](_0x387712(0x201))) && (_0x1ec097 = _0x4afe35[_0x387712(0x316)]('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)['children']('div')), _0x1ec097['filter'](_0x387712(0x3b5))['each'](function (_0x4f3150) {
                const _0x259786 = _0x387712;
                _0x57b339(this)[_0x259786(0x202)]('_acnf') && (_0x4c658d = _0x4f3150);
            }), _0x4c658d;
        }
        async function _0x242bcd(_0x227dd2) {
            const _0x5b59ee = _0x3e3711;
            if (_0x227dd2) {
                _0x46ea0e(!![]);
                let _0x42154b = new Date()[_0x5b59ee(0x3bb)](), _0x34592d = Math[_0x5b59ee(0x2f0)](_0x42154b / 0x3e8), _0x1f0de8 = location['pathname'][_0x5b59ee(0x299)](/(reels|tagged)\/$/ig, '')[_0x5b59ee(0x327)]('/')[_0x5b59ee(0x235)](_0x1d9a58 => _0x1d9a58['length'] > 0x0)['at'](-0x1), _0x4986f0 = await _0x11b7f3(_0x1f0de8);
                try {
                    let _0x1fffdc = await _0x221376(_0x4986f0['user']['pk']);
                    _0x3d1233(_0x1fffdc, _0x1f0de8, _0x5b59ee(0x2f3), _0x34592d, 'jpg');
                } catch (_0x45e138) {
                    _0x3d1233(_0x4986f0[_0x5b59ee(0x2fe)][_0x5b59ee(0x228)], _0x1f0de8, _0x5b59ee(0x2f3), _0x34592d, 'jpg');
                }
                _0x46ea0e(![]);
            } else {
                if (!_0x57b339(_0x5b59ee(0x25b))['length']) {
                    let _0x1992bb = setInterval(() => {
                        const _0x158549 = _0x5b59ee;
                        if (_0x57b339('.IG_DWPROFILE')[_0x158549(0x189)]) {
                            clearInterval(_0x1992bb);
                            return;
                        }
                        _0x57b339(_0x158549(0x1e0))[_0x158549(0x18c)]()[_0x158549(0x18c)]()[_0x158549(0x3db)](_0x158549(0x2ab) + _0x476c5e('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x232083[_0x158549(0x1f8)] + '</div>'), _0x57b339(_0x158549(0x1e0))[_0x158549(0x18c)]()['parent']()['css'](_0x158549(0x1d1), _0x158549(0x388)), _0x57b339(_0x158549(0x418))[_0x158549(0x18c)]()[_0x158549(0x18c)]()[_0x158549(0x18c)]()[_0x158549(0x3db)]('<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22' + _0x476c5e('DW') + _0x158549(0x21a) + _0x232083[_0x158549(0x1f8)] + _0x158549(0x2a1)), _0x57b339(_0x158549(0x418))[_0x158549(0x18c)]()[_0x158549(0x18c)]()[_0x158549(0x18c)]()[_0x158549(0x281)](_0x158549(0x1d1), _0x158549(0x388));
                    }, 0x96);
                }
            }
        }
        async function _0x591a9d(_0x3adffe, _0x5639b7, _0x541826) {
            const _0x1923d5 = _0x3e3711;
            if (_0x3adffe) {
                _0x46ea0e(!![]);
                let _0x43c2e3 = location['href'][_0x1923d5(0x327)]('?')['at'](0x0)[_0x1923d5(0x327)](_0x1923d5(0x24e))['at'](-0x1)['replaceAll']('/', ''), _0x163fa1 = await _0x24a4a6(_0x43c2e3), _0x46c04a = _0x2f33a4(_0x163fa1[_0x1923d5(0x36d)]), _0x44a8d9 = new Date()['getTime']();
                _0x313546[_0x1923d5(0x40d)] && (_0x163fa1[_0x1923d5(0x244)] === _0x1923d5(0x383) ? _0x44a8d9 = _0x46c04a[_0x1923d5(0x34b)]['taken_at_timestamp'] : _0x44a8d9 = _0x46c04a[_0x1923d5(0x3a4)]);
                if (_0x163fa1[_0x1923d5(0x244)] === _0x1923d5(0x383)) {
                    if (_0x5639b7 && _0x46c04a[_0x1923d5(0x34b)]['is_video']) {
                        if (_0x541826)
                            _0x13e261(_0x46c04a[_0x1923d5(0x34b)][_0x1923d5(0x268)]);
                        else {
                            let _0x25f033 = _0x1923d5(0x2f7);
                            _0x3d1233(_0x46c04a[_0x1923d5(0x34b)][_0x1923d5(0x268)], _0x46c04a[_0x1923d5(0x34b)][_0x1923d5(0x221)]['username'], _0x1923d5(0x2a6), _0x44a8d9, _0x25f033, _0x43c2e3);
                        }
                    } else {
                        if (_0x541826)
                            _0x13e261(_0x46c04a[_0x1923d5(0x34b)][_0x1923d5(0x23a)]['at'](-0x1)['src']);
                        else {
                            let _0x3a0e31 = _0x1923d5(0x43a);
                            _0x3d1233(_0x46c04a[_0x1923d5(0x34b)][_0x1923d5(0x23a)]['at'](-0x1)['src'], _0x46c04a[_0x1923d5(0x34b)][_0x1923d5(0x221)][_0x1923d5(0x441)], _0x1923d5(0x2a6), _0x44a8d9, _0x3a0e31, _0x43c2e3);
                        }
                    }
                } else {
                    if (_0x5639b7 && _0x46c04a[_0x1923d5(0x1cb)] != null) {
                        if (_0x541826)
                            _0x13e261(_0x46c04a[_0x1923d5(0x1cb)][0x0][_0x1923d5(0x1f5)]);
                        else {
                            let _0x2f3597 = _0x1923d5(0x2f7);
                            _0x3d1233(_0x46c04a[_0x1923d5(0x1cb)][0x0][_0x1923d5(0x1f5)], _0x46c04a[_0x1923d5(0x221)]['username'], 'reels', _0x44a8d9, _0x2f3597, _0x43c2e3);
                        }
                    } else {
                        if (_0x541826)
                            _0x13e261(_0x46c04a[_0x1923d5(0x2e7)]['candidates'][0x0][_0x1923d5(0x1f5)]);
                        else {
                            let _0x1b23c6 = _0x1923d5(0x43a);
                            _0x3d1233(_0x46c04a[_0x1923d5(0x2e7)]['candidates'][0x0][_0x1923d5(0x1f5)], _0x46c04a[_0x1923d5(0x221)][_0x1923d5(0x441)], _0x1923d5(0x2a6), _0x44a8d9, _0x1b23c6, _0x43c2e3);
                        }
                    }
                }
                _0x46ea0e(![]);
            } else
                var _0x57a99d = setInterval(() => {
                    const _0x4d8131 = _0x1923d5;
                    _0x57b339(_0x4d8131(0x402))[_0x4d8131(0x189)] > 0x0 && (clearInterval(_0x57a99d), _0x313546['SCROLL_BUTTON'] && (_0x57b339(_0x4d8131(0x22b))[_0x4d8131(0x231)](), _0x57b339(_0x4d8131(0x35f))[_0x4d8131(0x3db)](_0x4d8131(0x211)), _0x57b339(_0x4d8131(0x21d))[_0x4d8131(0x3db)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x57b339(_0x4d8131(0x21d))['append'](_0x4d8131(0x30a)), _0x57b339(_0x4d8131(0x3f1))['on'](_0x4d8131(0x1c1), function () {
                        const _0x38e65d = _0x4d8131;
                        _0x57b339('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x38e65d(0x180)]({
                            'top': -0x1e,
                            'behavior': 'smooth'
                        });
                    }), _0x57b339(_0x4d8131(0x3f2))['on'](_0x4d8131(0x1c1), function () {
                        const _0x5a3f3b = _0x4d8131;
                        _0x57b339('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x5a3f3b(0x180)]({
                            'top': 0x1e,
                            'behavior': _0x5a3f3b(0x3e4)
                        });
                    })), _0x57b339(_0x4d8131(0x3a0))[_0x4d8131(0x312)]('div')[_0x4d8131(0x3e7)](function () {
                        const _0x3604ee = _0x4d8131;
                        if (_0x57b339(this)[_0x3604ee(0x312)]()[_0x3604ee(0x189)] > 0x0) {
                            if (!_0x57b339(this)[_0x3604ee(0x312)]()['find']('.IG_REELS')[_0x3604ee(0x189)]) {
                                var _0x265c46 = _0x57b339(this);
                                _0x57b339(this)[_0x3604ee(0x312)]()[_0x3604ee(0x281)]('position', _0x3604ee(0x388)), _0x57b339(this)[_0x3604ee(0x312)]()[_0x3604ee(0x3db)](_0x3604ee(0x2ab) + _0x476c5e('DW') + '\x22\x20class=\x22IG_REELS\x22>' + _0x232083[_0x3604ee(0x1f8)] + '</div>'), _0x57b339(this)[_0x3604ee(0x312)]()[_0x3604ee(0x3db)](_0x3604ee(0x199) + _0x476c5e(_0x3604ee(0x1ad)) + _0x3604ee(0x351) + _0x232083[_0x3604ee(0x1ad)] + _0x3604ee(0x2a1)), _0x57b339(this)['children']()['append'](_0x3604ee(0x354) + _0x476c5e(_0x3604ee(0x32d)) + _0x3604ee(0x371) + _0x232083[_0x3604ee(0x24c)] + _0x3604ee(0x2a1));
                                _0x313546[_0x3604ee(0x194)] && _0x57b339(this)[_0x3604ee(0x316)](_0x3604ee(0x266))[_0x3604ee(0x3e7)](function () {
                                    _0x57b339(this)['on']('ended', function () {
                                        const _0x53d46c = a0_0xc123;
                                        if (!_0x57b339(this)[_0x53d46c(0x36d)]('loop')) {
                                            let _0x370c15 = _0x57b339(this)['next']()['find'](_0x53d46c(0x3bd))[_0x53d46c(0x2d0)](_0x53d46c(0x3c9));
                                            _0x370c15['length'] > 0x0 ? (_0x57b339(this)[_0x53d46c(0x3b4)]('data-loop', !![]), _0x370c15[_0x53d46c(0x321)]('click'), _0x11b869(_0x53d46c(0x421))) : (_0x57b339(this)['attr'](_0x53d46c(0x182), !![]), _0x57b339(this)[_0x53d46c(0x18c)]()[_0x53d46c(0x316)](_0x53d46c(0x407))['removeAttr'](_0x53d46c(0x3fe)), this[_0x53d46c(0x2a8)](), _0x11b869(_0x53d46c(0x392)));
                                        }
                                    });
                                });
                                _0x313546['HTML5_VIDEO_CONTROL'] && _0x57b339(this)[_0x3604ee(0x316)](_0x3604ee(0x266))[_0x3604ee(0x3e7)](function () {
                                    const _0x426d00 = _0x3604ee;
                                    if (!_0x57b339(this)[_0x426d00(0x36d)]('controls')) {
                                        let _0x4a7332 = _0x57b339(this);
                                        _0x11b869('(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify'), _0x313546[_0x426d00(0x366)] && (this[_0x426d00(0x440)] = _0x3bbe46[_0x426d00(0x277)], _0x57b339(this)['on'](_0x426d00(0x41b), function () {
                                            const _0x1e7cad = _0x426d00;
                                            this[_0x1e7cad(0x440)] = _0x3bbe46['videoVolume'];
                                        })), _0x57b339(this)['on']('contextmenu', function (_0x409458) {
                                            const _0x2fa1c6 = _0x426d00;
                                            _0x409458['preventDefault'](), _0x4a7332['css'](_0x2fa1c6(0x32b), '-1'), _0x4a7332[_0x2fa1c6(0x362)](_0x2fa1c6(0x3d5));
                                        }), _0x57b339(this)['parent']()['find']('video\x20+\x20div\x20div[role=\x22button\x22]')[_0x426d00(0x235)](function () {
                                            const _0x5e53af = _0x426d00;
                                            return _0x57b339(this)[_0x5e53af(0x18c)](_0x5e53af(0x2f1))['length'] > 0x0 && _0x57b339(this)['css'](_0x5e53af(0x3d8)) === _0x5e53af(0x41f) && _0x57b339(this)['attr'](_0x5e53af(0x3fe)) != null;
                                        })[_0x426d00(0x3ef)]()['on']('contextmenu', function (_0xce4f5d) {
                                            const _0x108a54 = _0x426d00;
                                            _0xce4f5d[_0x108a54(0x196)](), _0x4a7332['css'](_0x108a54(0x32b), '2'), _0x4a7332[_0x108a54(0x3b4)](_0x108a54(0x3d5), !![]);
                                        }), _0x57b339(this)['on']('volumechange', function () {
                                            const _0x26c3fc = _0x426d00;
                                            let _0x2498ed = _0x57b339(this)[_0x26c3fc(0x18c)]()['find'](_0x26c3fc(0x273))[_0x26c3fc(0x316)](_0x26c3fc(0x284))[_0x26c3fc(0x235)](function (_0x4b72e8) {
                                                const _0x14ced3 = _0x26c3fc;
                                                return _0x57b339(this)[_0x14ced3(0x1c6)]() <= 0x40 && _0x57b339(this)[_0x14ced3(0x250)]() <= 0x40 && _0x57b339(this)['find'](_0x14ced3(0x1df))[_0x14ced3(0x189)] > 0x0;
                                            });
                                            var _0x5a4654 = _0x2498ed['find'](_0x26c3fc(0x330))['length'] === 0x0;
                                            this['muted'] != _0x5a4654 && (this[_0x26c3fc(0x440)] = _0x3bbe46[_0x26c3fc(0x277)], _0x2498ed?.['trigger'](_0x26c3fc(0x1c1))), _0x57b339(this)[_0x26c3fc(0x3b4)](_0x26c3fc(0x2ea)) && (_0x3bbe46[_0x26c3fc(0x277)] = this['volume'], GM_setValue(_0x26c3fc(0x412), this[_0x26c3fc(0x440)])), this[_0x26c3fc(0x440)] == _0x3bbe46[_0x26c3fc(0x277)] && _0x57b339(this)[_0x26c3fc(0x3b4)](_0x26c3fc(0x2ea), !![]);
                                        }), _0x57b339(this)['css']('position', _0x426d00(0x338)), _0x57b339(this)[_0x426d00(0x281)](_0x426d00(0x32b), '2'), _0x57b339(this)[_0x426d00(0x3b4)](_0x426d00(0x343), !![]), _0x57b339(this)[_0x426d00(0x3b4)]('controls', !![]);
                                    }
                                });
                                var _0x4ae3a6 = _0x265c46[_0x3604ee(0x316)]('video'), _0x17ef5e = _0x57b339(this)[_0x3604ee(0x316)](_0x3604ee(0x186))['first']();
                                _0x146a3e(_0x4ae3a6, _0x17ef5e, _0x3604ee(0x213));
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x5e6485() {
            const _0x1006ca = _0x3e3711;
            _0x46ea0e(!![]);
            let _0x5daae1 = new Date()[_0x1006ca(0x3bb)](), _0x1e241d = Math['floor'](_0x5daae1 / 0x3e8), _0x1231c9 = _0x57b339(_0x1006ca(0x26e))[_0x1006ca(0x3ef)]()[_0x1006ca(0x225)]() || location[_0x1006ca(0x2d4)][_0x1006ca(0x327)]('/')['filter'](_0x4f07b5 => _0x4f07b5[_0x1006ca(0x189)] > 0x0)['at'](0x1), _0x4122e6 = await _0x11b7f3(_0x1231c9), _0x468bc1 = _0x4122e6[_0x1006ca(0x2fe)]['pk'], _0x5f5481 = await _0x31e86e(_0x468bc1), _0x4f14a0 = 0x0;
            _0x4a5258(_0x4f14a0, _0x5f5481[_0x1006ca(0x36d)][_0x1006ca(0x2c5)][0x0][_0x1006ca(0x3ca)][_0x1006ca(0x189)]), _0x5f5481[_0x1006ca(0x36d)]['reels_media'][0x0][_0x1006ca(0x3ca)]['forEach']((_0x4c7038, _0x25267a) => {
                setTimeout(() => {
                    const _0x1be6f8 = a0_0xc123;
                    _0x313546['RENAME_PUBLISH_DATE'] && (_0x1e241d = _0x4c7038[_0x1be6f8(0x35a)]), _0x4c7038[_0x1be6f8(0x23a)][_0x1be6f8(0x2e0)](function (_0x476672, _0x79ab94) {
                        const _0x44abc0 = _0x1be6f8;
                        if (_0x476672[_0x44abc0(0x21c)] < _0x79ab94[_0x44abc0(0x21c)])
                            return 0x1;
                        if (_0x476672[_0x44abc0(0x21c)] > _0x79ab94[_0x44abc0(0x21c)])
                            return -0x1;
                        return 0x0;
                    }), _0x4c7038['is_video'] ? _0x3d1233(_0x4c7038[_0x1be6f8(0x2cf)][0x0][_0x1be6f8(0x27a)], _0x1231c9, _0x1be6f8(0x2cd), _0x1e241d, _0x1be6f8(0x2f7), _0x4c7038['id'])['then'](() => {
                        const _0x2643f1 = _0x1be6f8;
                        _0x4a5258(++_0x4f14a0, _0x5f5481[_0x2643f1(0x36d)][_0x2643f1(0x2c5)][0x0][_0x2643f1(0x3ca)][_0x2643f1(0x189)]);
                    }) : _0x3d1233(_0x4c7038['display_resources'][0x0]['src'], _0x1231c9, 'stories', _0x1e241d, _0x1be6f8(0x43a), _0x4c7038['id'])[_0x1be6f8(0x1f6)](() => {
                        const _0x3f2593 = _0x1be6f8;
                        _0x4a5258(++_0x4f14a0, _0x5f5481[_0x3f2593(0x36d)][_0x3f2593(0x2c5)][0x0]['items'][_0x3f2593(0x189)]);
                    });
                }, 0x64 * _0x25267a);
            });
        }
        async function _0x396f59(_0x467f91, _0x51964e, _0xc5f9ef) {
            const _0x55b79b = _0x3e3711;
            var _0x364965 = _0x57b339(_0x55b79b(0x26e))[_0x55b79b(0x3ef)]()['text']() || location[_0x55b79b(0x2d4)][_0x55b79b(0x327)]('/')['filter'](_0x26b87b => _0x26b87b[_0x55b79b(0x189)] > 0x0)['at'](0x1);
            if (_0x467f91) {
                let _0x261764 = new Date()[_0x55b79b(0x3bb)](), _0x358015 = Math['floor'](_0x261764 / 0x3e8);
                _0x46ea0e(!![]);
                if (_0x313546[_0x55b79b(0x26f)] && !_0x3bbe46[_0x55b79b(0x24b)]) {
                    let _0x24fc7c = null, _0x3689a6 = await _0x11b7f3(_0x364965), _0x47f9c9 = _0x3689a6[_0x55b79b(0x2fe)]['pk'], _0x17f253 = await _0x31e86e(_0x47f9c9), _0x434aec = location[_0x55b79b(0x2d4)][_0x55b79b(0x327)]('/')['filter'](_0x6c723e => _0x6c723e['length'] > 0x0 && _0x6c723e[_0x55b79b(0x3d9)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x17f253[_0x55b79b(0x36d)]['reels_media'][0x0][_0x55b79b(0x3ca)][_0x55b79b(0x1ec)](_0x5ef009 => {
                        _0x5ef009['id'] == _0x434aec && (_0x24fc7c = _0x5ef009['id']);
                    });
                    if (_0x24fc7c == null) {
                        let _0xe478d1 = _0x71c79b(_0x364965);
                        _0xe478d1[_0x55b79b(0x3e7)](function (_0x15b079) {
                            const _0x5f55e4 = _0x55b79b;
                            _0x57b339(this)[_0x5f55e4(0x312)]()[_0x5f55e4(0x189)] > 0x0 && (_0x24fc7c = _0x17f253[_0x5f55e4(0x36d)][_0x5f55e4(0x2c5)][0x0][_0x5f55e4(0x3ca)][_0x15b079]['id']);
                        });
                    }
                    _0x24fc7c == null && (_0x57b339('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')['each'](function (_0x2d4f8f) {
                        const _0x24b358 = _0x55b79b;
                        _0x57b339(this)[_0x24b358(0x202)]('x1lix1fw') && (_0x57b339(this)[_0x24b358(0x312)]()['length'] > 0x0 && (_0x24fc7c = _0x17f253[_0x24b358(0x36d)][_0x24b358(0x2c5)][0x0][_0x24b358(0x3ca)][_0x2d4f8f]['id']));
                    }), _0x57b339(_0x55b79b(0x32f))[_0x55b79b(0x3e7)](function (_0x2f941b) {
                        const _0x4f8f52 = _0x55b79b;
                        _0x57b339(this)['children']()['hasClass']('_ac3q') && (_0x24fc7c = _0x17f253[_0x4f8f52(0x36d)]['reels_media'][0x0]['items'][_0x2f941b]['id']);
                    }));
                    _0x24fc7c == null && (_0x24fc7c = location[_0x55b79b(0x2d4)][_0x55b79b(0x327)]('/')['filter'](_0x45be69 => _0x45be69[_0x55b79b(0x189)] > 0x0 && _0x45be69['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x5dfc65 = await _0x5c98e5(_0x24fc7c);
                    _0x313546[_0x55b79b(0x40d)] && (_0x358015 = _0x5dfc65['items'][0x0]['taken_at']);
                    _0x5dfc65['status'] === 'ok' ? _0x5dfc65[_0x55b79b(0x3ca)][0x0][_0x55b79b(0x1cb)] ? _0xc5f9ef ? _0x13e261(_0x5dfc65[_0x55b79b(0x3ca)][0x0][_0x55b79b(0x1cb)][0x0]['url']) : _0x3d1233(_0x5dfc65[_0x55b79b(0x3ca)][0x0][_0x55b79b(0x1cb)][0x0][_0x55b79b(0x1f5)], _0x364965, _0x55b79b(0x2cd), _0x358015, 'mp4', _0x24fc7c) : _0xc5f9ef ? _0x13e261(_0x5dfc65[_0x55b79b(0x3ca)][0x0][_0x55b79b(0x2e7)]['candidates'][0x0][_0x55b79b(0x1f5)]) : _0x3d1233(_0x5dfc65['items'][0x0][_0x55b79b(0x2e7)][_0x55b79b(0x2c8)][0x0][_0x55b79b(0x1f5)], _0x364965, _0x55b79b(0x2cd), _0x358015, 'jpg', _0x24fc7c) : (_0x313546['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x3bbe46[_0x55b79b(0x24b)] = !![], _0x396f59(_0x467f91, _0x51964e, _0xc5f9ef)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x5dfc65[_0x55b79b(0x187)]), _0x11b869(_0x5dfc65));
                    _0x46ea0e(![]);
                    return;
                }
                if (_0x57b339('body\x20>\x20div\x20section:visible\x20video[playsinline]')[_0x55b79b(0x189)] > 0x0) {
                    let _0x3e6317 = _0x55b79b(0x2f7), _0x264eff = '', _0x517eb6 = location[_0x55b79b(0x2d4)]['replace'](/\/$/ig, '')[_0x55b79b(0x327)]('/')['at'](-0x1), _0x1294ae = null;
                    if (_0x3bbe46[_0x55b79b(0x39f)][_0x55b79b(0x2cd)][_0x364965] && !_0x51964e) {
                        _0x11b869(_0x55b79b(0x20d), _0x364965), _0x3bbe46['GL_dataCache']['stories'][_0x364965]['data']['reels_media'][0x0][_0x55b79b(0x3ca)][_0x55b79b(0x1ec)](_0x5054df => {
                            const _0x51ac2a = _0x55b79b;
                            _0x5054df['id'] == _0x517eb6 && (_0x264eff = _0x5054df[_0x51ac2a(0x2cf)][0x0]['src'], _0x313546[_0x51ac2a(0x40d)] && (_0x358015 = _0x5054df[_0x51ac2a(0x35a)], _0x1294ae = _0x5054df['id']));
                        });
                        if (_0x264eff[_0x55b79b(0x189)] == 0x0) {
                            _0x11b869(_0x55b79b(0x2a3), _0x364965), _0x396f59(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x2de511 = await _0x11b7f3(_0x364965), _0x218af6 = _0x2de511[_0x55b79b(0x2fe)]['pk'], _0x5fc5 = await _0x31e86e(_0x218af6);
                        _0x5fc5['data']['reels_media'][0x0]['items'][_0x55b79b(0x1ec)](_0x32caaa => {
                            const _0x58ac5d = _0x55b79b;
                            _0x32caaa['id'] == _0x517eb6 && (_0x264eff = _0x32caaa[_0x58ac5d(0x2cf)][0x0][_0x58ac5d(0x27a)], _0x313546[_0x58ac5d(0x40d)] && (_0x358015 = _0x32caaa[_0x58ac5d(0x35a)], _0x1294ae = _0x32caaa['id']));
                        });
                        if (_0x264eff[_0x55b79b(0x189)] == 0x0) {
                            let _0x32f5c9 = _0x71c79b(_0x364965);
                            _0x32f5c9['each'](function (_0x869932) {
                                const _0x3aa478 = _0x55b79b;
                                _0x57b339(this)[_0x3aa478(0x312)]()[_0x3aa478(0x189)] > 0x0 && (_0x264eff = _0x5fc5['data']['reels_media'][0x0][_0x3aa478(0x3ca)][_0x869932][_0x3aa478(0x2cf)][0x0]['src'], _0x313546[_0x3aa478(0x40d)] && (_0x358015 = _0x5fc5[_0x3aa478(0x36d)][_0x3aa478(0x2c5)][0x0][_0x3aa478(0x3ca)][_0x869932][_0x3aa478(0x35a)], _0x1294ae = _0x5fc5[_0x3aa478(0x36d)][_0x3aa478(0x2c5)][0x0][_0x3aa478(0x3ca)][_0x869932]['id']));
                            }), _0x264eff[_0x55b79b(0x189)] == 0x0 && (_0x57b339('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x55b79b(0x3e7)](function (_0x5addf3) {
                                const _0x54d053 = _0x55b79b;
                                _0x57b339(this)[_0x54d053(0x202)](_0x54d053(0x41d)) && (_0x57b339(this)[_0x54d053(0x312)]()[_0x54d053(0x189)] > 0x0 && (_0x264eff = _0x5fc5[_0x54d053(0x36d)][_0x54d053(0x2c5)][0x0]['items'][_0x5addf3][_0x54d053(0x2cf)][0x0][_0x54d053(0x27a)], _0x313546['RENAME_PUBLISH_DATE'] && (_0x358015 = _0x5fc5['data']['reels_media'][0x0]['items'][_0x5addf3][_0x54d053(0x35a)], _0x1294ae = _0x5fc5['data'][_0x54d053(0x2c5)][0x0][_0x54d053(0x3ca)][_0x5addf3]['id'])));
                            }), _0x57b339(_0x55b79b(0x32f))[_0x55b79b(0x3e7)](function (_0x53c2ba) {
                                const _0x3f90c2 = _0x55b79b;
                                _0x57b339(this)['children']()['hasClass'](_0x3f90c2(0x345)) && (_0x264eff = _0x5fc5[_0x3f90c2(0x36d)][_0x3f90c2(0x2c5)][0x0][_0x3f90c2(0x3ca)][_0x53c2ba][_0x3f90c2(0x2cf)][0x0][_0x3f90c2(0x27a)], _0x313546[_0x3f90c2(0x40d)] && (_0x358015 = _0x5fc5['data'][_0x3f90c2(0x2c5)][0x0][_0x3f90c2(0x3ca)][_0x53c2ba][_0x3f90c2(0x35a)], _0x1294ae = _0x5fc5[_0x3f90c2(0x36d)][_0x3f90c2(0x2c5)][0x0][_0x3f90c2(0x3ca)][_0x53c2ba]['id']));
                            }));
                        }
                        _0x3bbe46[_0x55b79b(0x39f)][_0x55b79b(0x2cd)][_0x364965] = _0x5fc5;
                    }
                    _0x264eff['length'] == 0x0 ? alert(_0x476c5e(_0x55b79b(0x422))) : _0xc5f9ef ? _0x13e261(_0x264eff) : _0x3d1233(_0x264eff, _0x364965, _0x55b79b(0x2cd), _0x358015, _0x3e6317, _0x1294ae);
                } else {
                    let _0x146ce = _0x57b339('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')['attr'](_0x55b79b(0x3cc))?.[_0x55b79b(0x327)](',')[0x0]?.['split']('\x20')[0x0], _0x1f5df5 = _0x146ce ? _0x146ce : _0x57b339(_0x55b79b(0x43e))[_0x55b79b(0x235)](function () {
                            const _0x5a2c9d = _0x55b79b;
                            return _0x57b339(this)[_0x5a2c9d(0x2d0)]('a')[_0x5a2c9d(0x189)] === 0x0 && _0x57b339(this)['width']() === _0x57b339(this)['parent']()[_0x5a2c9d(0x1c6)]();
                        })[_0x55b79b(0x3b4)](_0x55b79b(0x27a));
                    if (!_0x1f5df5) {
                        let _0x292af8 = _0x57b339(_0x55b79b(0x1fc));
                        _0x1f5df5 = _0x292af8['attr'](_0x55b79b(0x3cc)) ? _0x292af8[_0x55b79b(0x3b4)](_0x55b79b(0x3cc))?.['split'](',')[0x0]?.[_0x55b79b(0x327)]('\x20')[0x0] : _0x292af8[_0x55b79b(0x3b4)](_0x55b79b(0x27a));
                    }
                    _0x313546[_0x55b79b(0x40d)] && (_0x358015 = new Date(_0x57b339('body\x20>\x20div\x20section:visible\x20time[datetime][class]')[_0x55b79b(0x3ef)]()[_0x55b79b(0x3b4)](_0x55b79b(0x256)))['getTime']());
                    let _0x27d8a7 = _0x1f5df5, _0x48d859 = 'jpg';
                    _0xc5f9ef ? _0x13e261(_0x27d8a7) : _0x3d1233(_0x27d8a7, _0x364965, _0x55b79b(0x2cd), _0x358015, _0x48d859, _0x19724b(_0x27d8a7) ?? '');
                }
                _0x3bbe46[_0x55b79b(0x24b)] = ![], _0x46ea0e(![]);
            } else {
                if (!_0x57b339(_0x55b79b(0x3b1))['length']) {
                    _0x3bbe46[_0x55b79b(0x39f)][_0x55b79b(0x2cd)] = {};
                    let _0xca400f = null;
                    _0x57b339('body\x20>\x20div\x20section._ac0a')[_0x55b79b(0x189)] > 0x0 ? _0xca400f = _0x57b339(_0x55b79b(0x295)) : (_0xca400f = _0x57b339('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0xca400f[_0x55b79b(0x281)](_0x55b79b(0x1d1), _0x55b79b(0x388)));
                    _0xca400f['length'] === 0x0 && (_0xca400f = _0x57b339(_0x55b79b(0x184))['parent']()[_0x55b79b(0x18c)]()[_0x55b79b(0x18c)]()[_0x55b79b(0x316)](_0x55b79b(0x188)), _0xca400f[_0x55b79b(0x281)](_0x55b79b(0x1d1), _0x55b79b(0x388)));
                    _0xca400f[_0x55b79b(0x189)] === 0x0 && (_0xca400f = _0x57b339(_0x55b79b(0x184))['parent']()['parent']()[_0x55b79b(0x18c)]()[_0x55b79b(0x316)](_0x55b79b(0x1a8)), _0xca400f[_0x55b79b(0x281)]('position', _0x55b79b(0x388)));
                    if (_0xca400f[_0x55b79b(0x189)] === 0x0) {
                        let _0x2dd697 = _0x57b339(_0x55b79b(0x2b5)), _0x5598f3 = 0x0;
                        _0x2dd697['each'](function () {
                            const _0x82c808 = _0x55b79b;
                            _0x57b339(this)[_0x82c808(0x1c6)]() > _0x5598f3 && (_0x5598f3 = _0x57b339(this)[_0x82c808(0x1c6)](), _0xca400f = _0x57b339(this)[_0x82c808(0x312)](_0x82c808(0x424))['first']());
                        });
                    }
                    if (_0xca400f != null) {
                        _0xca400f[_0x55b79b(0x3ef)]()['css'](_0x55b79b(0x1d1), _0x55b79b(0x388)), _0xca400f[_0x55b79b(0x3ef)]()[_0x55b79b(0x3db)](_0x55b79b(0x2ab) + _0x476c5e('DW') + _0x55b79b(0x247) + _0x232083['DOWNLOAD'] + '</div>'), _0xca400f[_0x55b79b(0x3ef)]()[_0x55b79b(0x3db)](_0x55b79b(0x199) + _0x476c5e(_0x55b79b(0x1ad)) + _0x55b79b(0x2b9) + _0x232083['NEW_TAB'] + '</div>');
                        let _0x35f8aa = _0x71c79b(_0x364965);
                        _0x35f8aa[_0x55b79b(0x189)] > 0x1 && _0xca400f[_0x55b79b(0x3ef)]()['append'](_0x55b79b(0x420) + _0x476c5e(_0x55b79b(0x28d)) + _0x55b79b(0x285) + _0x232083[_0x55b79b(0x3ae)] + _0x55b79b(0x2a1)), _0xca400f[_0x55b79b(0x316)](_0x55b79b(0x2ae))[_0x55b79b(0x3e7)](function () {
                            const _0x212f17 = _0x55b79b;
                            _0x57b339(this)['on'](_0x212f17(0x359), function () {
                                const _0x3c9f77 = _0x212f17;
                                !_0x57b339(this)['data'](_0x3c9f77(0x2c9)) && (_0xca400f['find'](_0x3c9f77(0x419))[_0x3c9f77(0x189)] === 0x0 ? (_0x57b339(this)[_0x3c9f77(0x3b4)](_0x3c9f77(0x310), !![]), _0x57b339('.IG_DWSTORY_THUMBNAIL')[_0x3c9f77(0x231)](), _0x11b869(_0x3c9f77(0x1a7))) : (_0x57b339(this)[_0x3c9f77(0x3b4)](_0x3c9f77(0x310), !![]), _0x11b869(_0x3c9f77(0x2aa))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x48e858(_0x247e8c, _0x515076) {
            const _0x484ec3 = _0x3e3711;
            if (_0x247e8c) {
                let _0x37224b = new Date()[_0x484ec3(0x3bb)](), _0x39c954 = Math[_0x484ec3(0x2f0)](_0x37224b / 0x3e8), _0x31af77 = _0x484ec3(0x43a), _0x2e0ee6 = _0x57b339(_0x484ec3(0x26e))[_0x484ec3(0x3ef)]()[_0x484ec3(0x225)]() || location['pathname'][_0x484ec3(0x327)]('/')['at'](0x2), _0x2e1374 = location['pathname'][_0x484ec3(0x367)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x5ee3fd = '', _0x2bbfed = null;
                _0x46ea0e(!![]);
                if (_0x313546[_0x484ec3(0x26f)] && !_0x3bbe46[_0x484ec3(0x24b)]) {
                    let _0x50bac0 = await _0x11b7f3(_0x2e0ee6), _0xc4cf22 = _0x50bac0[_0x484ec3(0x2fe)]['pk'], _0x1ee457 = await _0x31e86e(_0xc4cf22), _0x2c737d = location[_0x484ec3(0x2d4)][_0x484ec3(0x327)]('/')['filter'](_0x1ebfb0 => _0x1ebfb0[_0x484ec3(0x189)] > 0x0 && _0x1ebfb0[_0x484ec3(0x3d9)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x1ee457[_0x484ec3(0x36d)]['reels_media'][0x0][_0x484ec3(0x3ca)][_0x484ec3(0x1ec)](_0x571496 => {
                        _0x571496['id'] == _0x2c737d && (_0x2bbfed = _0x571496['id']);
                    });
                    if (_0x2bbfed == null) {
                        let _0xe74b4a = _0x71c79b(_0x2e0ee6);
                        _0xe74b4a['each'](function (_0x101935) {
                            const _0x347ad3 = _0x484ec3;
                            _0x57b339(this)[_0x347ad3(0x312)]()['length'] > 0x0 && (_0x2bbfed = _0x1ee457['data']['reels_media'][0x0]['items'][_0x101935]['id']);
                        });
                    }
                    _0x2bbfed == null && (_0x57b339(_0x484ec3(0x34d))[_0x484ec3(0x3e7)](function (_0x4c9297) {
                        const _0x480314 = _0x484ec3;
                        _0x57b339(this)['hasClass'](_0x480314(0x41d)) && (_0x57b339(this)['children']()[_0x480314(0x189)] > 0x0 && (_0x2bbfed = _0x1ee457[_0x480314(0x36d)][_0x480314(0x2c5)][0x0][_0x480314(0x3ca)][_0x4c9297]['id']));
                    }), _0x57b339(_0x484ec3(0x32f))[_0x484ec3(0x3e7)](function (_0x351558) {
                        const _0x19e535 = _0x484ec3;
                        _0x57b339(this)[_0x19e535(0x312)]()[_0x19e535(0x202)]('_ac3q') && (_0x2bbfed = _0x1ee457['data']['reels_media'][0x0][_0x19e535(0x3ca)][_0x351558]['id']);
                    }));
                    _0x2bbfed == null && (_0x2bbfed = location[_0x484ec3(0x2d4)][_0x484ec3(0x327)]('/')[_0x484ec3(0x235)](_0x3a6b1f => _0x3a6b1f[_0x484ec3(0x189)] > 0x0 && _0x3a6b1f['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x312b21 = await _0x5c98e5(_0x2bbfed);
                    _0x313546['RENAME_PUBLISH_DATE'] && (_0x39c954 = _0x312b21[_0x484ec3(0x3ca)][0x0][_0x484ec3(0x3a4)]);
                    _0x312b21[_0x484ec3(0x290)] === 'ok' ? _0x3d1233(_0x312b21[_0x484ec3(0x3ca)][0x0][_0x484ec3(0x2e7)][_0x484ec3(0x2c8)][0x0][_0x484ec3(0x1f5)], _0x2e0ee6, 'stories', _0x39c954, 'jpg', _0x2bbfed) : (_0x313546['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT'] ? (_0x3bbe46['tempFetchRateLimit'] = !![], _0x48e858(!![], _0x515076)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x312b21[_0x484ec3(0x187)]), _0x11b869(_0x312b21));
                    _0x46ea0e(![]);
                    return;
                }
                if (_0x3bbe46['GL_dataCache'][_0x484ec3(0x2cd)][_0x2e0ee6] && !_0x515076) {
                    _0x11b869('Fetch\x20from\x20memory\x20cache:', _0x2e0ee6), _0x3bbe46['GL_dataCache']['stories'][_0x2e0ee6][_0x484ec3(0x36d)][_0x484ec3(0x2c5)][0x0][_0x484ec3(0x3ca)][_0x484ec3(0x1ec)](_0x31923b => {
                        const _0xde4c0d = _0x484ec3;
                        _0x31923b['id'] == _0x2e1374 && (_0x5ee3fd = _0x31923b[_0xde4c0d(0x3c5)], _0x313546[_0xde4c0d(0x40d)] && (_0x39c954 = _0x31923b[_0xde4c0d(0x35a)], _0x2bbfed = _0x31923b['id']));
                    });
                    if (_0x5ee3fd[_0x484ec3(0x189)] == 0x0) {
                        _0x11b869(_0x484ec3(0x2a3), _0x2e0ee6), _0x48e858(!![], !![]);
                        return;
                    }
                } else {
                    let _0x6f06fe = await _0x11b7f3(_0x2e0ee6), _0x40d1cb = _0x6f06fe[_0x484ec3(0x2fe)]['pk'], _0x32519e = await _0x31e86e(_0x40d1cb);
                    _0x32519e['data']['reels_media'][0x0]['items'][_0x484ec3(0x1ec)](_0x6f347d => {
                        const _0x5389f2 = _0x484ec3;
                        _0x6f347d['id'] == _0x2e1374 && (_0x5ee3fd = _0x6f347d[_0x5389f2(0x3c5)], _0x313546[_0x5389f2(0x40d)] && (_0x39c954 = _0x6f347d[_0x5389f2(0x35a)], _0x2bbfed = _0x6f347d['id']));
                    });
                    if (_0x5ee3fd[_0x484ec3(0x189)] == 0x0) {
                        let _0x70930d = _0x71c79b(_0x2e0ee6);
                        _0x70930d[_0x484ec3(0x3e7)](function (_0x17e029) {
                            const _0x148231 = _0x484ec3;
                            _0x57b339(this)['children']()[_0x148231(0x189)] > 0x0 && (_0x5ee3fd = _0x32519e['data'][_0x148231(0x2c5)][0x0][_0x148231(0x3ca)][_0x17e029][_0x148231(0x3c5)], _0x313546[_0x148231(0x40d)] && (_0x39c954 = _0x32519e['data'][_0x148231(0x2c5)][0x0]['items'][_0x17e029][_0x148231(0x35a)], _0x2bbfed = _0x32519e[_0x148231(0x36d)][_0x148231(0x2c5)][0x0][_0x148231(0x3ca)][_0x17e029]['id']));
                        }), _0x5ee3fd[_0x484ec3(0x189)] == 0x0 && (_0x57b339(_0x484ec3(0x34d))[_0x484ec3(0x3e7)](function (_0x4d1588) {
                            const _0x2bdd3c = _0x484ec3;
                            _0x57b339(this)[_0x2bdd3c(0x202)](_0x2bdd3c(0x41d)) && (_0x57b339(this)[_0x2bdd3c(0x312)]()[_0x2bdd3c(0x189)] > 0x0 && (_0x5ee3fd = _0x32519e[_0x2bdd3c(0x36d)]['reels_media'][0x0][_0x2bdd3c(0x3ca)][_0x4d1588]['display_url'], _0x313546[_0x2bdd3c(0x40d)] && (_0x39c954 = _0x32519e[_0x2bdd3c(0x36d)]['reels_media'][0x0][_0x2bdd3c(0x3ca)][_0x4d1588][_0x2bdd3c(0x35a)], _0x2bbfed = _0x32519e[_0x2bdd3c(0x36d)][_0x2bdd3c(0x2c5)][0x0][_0x2bdd3c(0x3ca)][_0x4d1588]['id'])));
                        }), _0x57b339(_0x484ec3(0x32f))[_0x484ec3(0x3e7)](function (_0x53637b) {
                            const _0x1c0dde = _0x484ec3;
                            _0x57b339(this)['children']()[_0x1c0dde(0x202)]('_ac3q') && (_0x5ee3fd = _0x32519e[_0x1c0dde(0x36d)]['reels_media'][0x0]['items'][_0x53637b][_0x1c0dde(0x3c5)], _0x313546[_0x1c0dde(0x40d)] && (_0x39c954 = _0x32519e['data'][_0x1c0dde(0x2c5)][0x0][_0x1c0dde(0x3ca)][_0x53637b][_0x1c0dde(0x35a)], _0x2bbfed = _0x32519e[_0x1c0dde(0x36d)][_0x1c0dde(0x2c5)][0x0][_0x1c0dde(0x3ca)][_0x53637b]['id']));
                        }));
                    }
                }
                _0x3d1233(_0x5ee3fd, _0x2e0ee6, _0x484ec3(0x3cf), _0x39c954, _0x31af77, _0x2bbfed), _0x3bbe46['tempFetchRateLimit'] = ![], _0x46ea0e(![]);
            } else {
                if (_0x57b339('body\x20>\x20div\x20div.IG_DWSTORY')['parent']()[_0x484ec3(0x316)]('video[class]')['length']) {
                    let _0x55332b = null;
                    _0x57b339(_0x484ec3(0x29d))[_0x484ec3(0x189)] > 0x0 ? _0x55332b = _0x57b339('body\x20>\x20div\x20section:visible._ac0a') : (_0x55332b = _0x57b339(_0x484ec3(0x331)), _0x55332b[_0x484ec3(0x281)](_0x484ec3(0x1d1), _0x484ec3(0x388)));
                    _0x55332b['length'] === 0x0 && (_0x55332b = _0x57b339(_0x484ec3(0x184))[_0x484ec3(0x18c)]()['parent']()['parent']()[_0x484ec3(0x316)](_0x484ec3(0x188)), _0x55332b[_0x484ec3(0x281)](_0x484ec3(0x1d1), _0x484ec3(0x388)));
                    _0x55332b[_0x484ec3(0x189)] === 0x0 && (_0x55332b = _0x57b339(_0x484ec3(0x184))[_0x484ec3(0x18c)]()[_0x484ec3(0x18c)]()[_0x484ec3(0x18c)]()[_0x484ec3(0x316)](_0x484ec3(0x1a8)), _0x55332b[_0x484ec3(0x281)](_0x484ec3(0x1d1), _0x484ec3(0x388)));
                    if (_0x55332b[_0x484ec3(0x189)] === 0x0) {
                        let _0xd2fc58 = _0x57b339('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x28b2c4 = 0x0;
                        _0xd2fc58[_0x484ec3(0x3e7)](function () {
                            const _0x24a8e9 = _0x484ec3;
                            _0x57b339(this)['width']() > _0x28b2c4 && (_0x28b2c4 = _0x57b339(this)[_0x24a8e9(0x1c6)](), _0x55332b = _0x57b339(this)['children'](_0x24a8e9(0x424))[_0x24a8e9(0x3ef)]());
                        });
                    }
                    _0x55332b != null && (_0x55332b[_0x484ec3(0x3ef)]()[_0x484ec3(0x281)](_0x484ec3(0x1d1), 'relative'), _0x55332b[_0x484ec3(0x3ef)]()['append'](_0x484ec3(0x354) + _0x476c5e(_0x484ec3(0x32d)) + _0x484ec3(0x324) + _0x232083[_0x484ec3(0x24c)] + _0x484ec3(0x2a1)));
                }
            }
        }
        function _0x6a1603(_0x4a9a82) {
            return new Promise((_0x5d866e, _0x28c8a9) => {
                const _0x2c5298 = a0_0xc123;
                let _0x333e7c = _0x2c5298(0x26b) + _0x4a9a82 + _0x2c5298(0x23c);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x333e7c,
                    'onload': function (_0x2708ea) {
                        const _0xd1851c = _0x2c5298;
                        try {
                            let _0x228b94 = JSON[_0xd1851c(0x3b8)](_0x2708ea[_0xd1851c(0x1ac)]);
                            _0x5d866e(_0x228b94);
                        } catch (_0x3e9748) {
                            _0x11b869('getHighlightStories()', _0xd1851c(0x38f), _0x3e9748[_0xd1851c(0x187)]), _0x28c8a9(_0x3e9748);
                        }
                    },
                    'onerror': function (_0x364fa8) {
                        _0x11b869('getHighlightStories()', 'reject', _0x364fa8), _0x28c8a9(_0x364fa8);
                    }
                });
            });
        }
        function _0x31e86e(_0xba0b90) {
            return new Promise((_0x56e4e0, _0x545868) => {
                const _0x241f7b = a0_0xc123;
                let _0x14d0f7 = _0x241f7b(0x3aa) + _0xba0b90 + _0x241f7b(0x23c);
                GM_xmlhttpRequest({
                    'method': _0x241f7b(0x34e),
                    'url': _0x14d0f7,
                    'onload': function (_0x308e24) {
                        const _0x52ae17 = _0x241f7b;
                        try {
                            let _0x3ee016 = JSON[_0x52ae17(0x3b8)](_0x308e24[_0x52ae17(0x1ac)]);
                            _0x11b869(_0x52ae17(0x2be), _0x3ee016), _0x56e4e0(_0x3ee016);
                        } catch (_0x56eb55) {
                            _0x11b869(_0x52ae17(0x2be), _0x52ae17(0x38f), _0x56eb55[_0x52ae17(0x187)]), _0x545868(_0x56eb55);
                        }
                    },
                    'onerror': function (_0x484ddc) {
                        const _0x115ec7 = _0x241f7b;
                        _0x11b869(_0x115ec7(0x2be), _0x115ec7(0x38f), _0x484ddc), _0x545868(_0x484ddc);
                    }
                });
            });
        }
        function _0x11b7f3(_0x21e314) {
            return new Promise((_0x416f08, _0x3861a0) => {
                const _0x294a33 = a0_0xc123;
                let _0xe7a395 = _0x294a33(0x21e) + _0x21e314;
                GM_xmlhttpRequest({
                    'method': _0x294a33(0x34e),
                    'url': _0xe7a395,
                    'onload': function (_0x4afae5) {
                        const _0x3bcf4f = _0x294a33;
                        let _0x2a9839 = JSON[_0x3bcf4f(0x3b8)](_0x4afae5[_0x3bcf4f(0x1ac)]), _0x4abb3c = null;
                        _0x2a9839[_0x3bcf4f(0x3da)][_0x3bcf4f(0x1ec)](_0x42d85f => {
                            const _0x57a1f3 = _0x3bcf4f;
                            _0x42d85f['user'][_0x57a1f3(0x441)]?.[_0x57a1f3(0x291)]() === _0x21e314?.[_0x57a1f3(0x291)]() && (_0x4abb3c = _0x42d85f);
                        }), _0x4abb3c != null ? (_0x11b869(_0x3bcf4f(0x2ac), _0x4abb3c), _0x416f08(_0x4abb3c)) : _0x22f298(_0x21e314)[_0x3bcf4f(0x1f6)](_0x19c556 => {
                            _0x416f08(_0x19c556);
                        })[_0x3bcf4f(0x2e2)](_0x12f219 => {
                            const _0x27403d = _0x3bcf4f;
                            alert(_0x27403d(0x2e8));
                        });
                    },
                    'onerror': function (_0x38458f) {
                        const _0x113afe = _0x294a33;
                        _0x11b869(_0x113afe(0x2ac), 'reject', _0x38458f), _0x3861a0(_0x38458f);
                    }
                });
            });
        }
        function _0x22f298(_0x6c628) {
            return new Promise((_0x49b6d1, _0x204e28) => {
                const _0xb3917c = a0_0xc123;
                let _0x154d5a = _0xb3917c(0x39c) + _0x6c628;
                GM_xmlhttpRequest({
                    'method': _0xb3917c(0x34e),
                    'url': _0x154d5a,
                    'headers': { 'X-IG-App-ID': _0x5848f9() },
                    'onload': function (_0x10c8be) {
                        const _0x50fd54 = _0xb3917c;
                        try {
                            let _0x161fd9 = JSON[_0x50fd54(0x3b8)](_0x10c8be[_0x50fd54(0x1ac)]), _0x1ff0e2 = _0x161fd9?.[_0x50fd54(0x36d)]?.['user'];
                            if (_0x1ff0e2 != null) {
                                let _0x4e4d0a = _0x161fd9?.[_0x50fd54(0x36d)];
                                _0x4e4d0a[_0x50fd54(0x2fe)]['pk'] = _0x4e4d0a[_0x50fd54(0x2fe)]['id'], _0x11b869(_0x50fd54(0x309), _0x161fd9), _0x49b6d1(_0x4e4d0a);
                            } else
                                _0x11b869(_0x50fd54(0x309), _0x50fd54(0x38f), _0x50fd54(0x298)), _0x204e28(_0x50fd54(0x298));
                        } catch (_0x41e75c) {
                            _0x11b869(_0x50fd54(0x309), 'reject', _0x41e75c['message']), _0x204e28(_0x41e75c);
                        }
                    },
                    'onerror': function (_0x5c1df8) {
                        const _0x2d6d99 = _0xb3917c;
                        _0x11b869(_0x2d6d99(0x309), 'reject', _0x5c1df8), _0x204e28(_0x5c1df8);
                    }
                });
            });
        }
        function _0x221376(_0x4da036) {
            return new Promise((_0x4fde84, _0x479dd0) => {
                const _0x274e18 = a0_0xc123;
                let _0x33c7ad = _0x274e18(0x2e9) + _0x4da036 + _0x274e18(0x36e);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x33c7ad,
                    'headers': { 'User-Agent': _0x274e18(0x38a) },
                    'onload': function (_0x2e5956) {
                        const _0x155fc2 = _0x274e18;
                        try {
                            let _0x3d6aea = JSON[_0x155fc2(0x3b8)](_0x2e5956[_0x155fc2(0x1ac)]);
                            _0x3d6aea[_0x155fc2(0x290)] !== 'ok' ? (_0x11b869(_0x155fc2(0x2df), _0x155fc2(0x38f), _0x3d6aea), _0x479dd0(_0x155fc2(0x3fc))) : (_0x11b869(_0x155fc2(0x2df), _0x3d6aea), _0x4fde84(_0x3d6aea[_0x155fc2(0x2fe)]['hd_profile_pic_url_info']?.[_0x155fc2(0x1f5)]));
                        } catch (_0x12b7ac) {
                            _0x11b869(_0x155fc2(0x2df), _0x155fc2(0x38f), _0x12b7ac), _0x479dd0(_0x12b7ac);
                        }
                    },
                    'onerror': function (_0x32ddd9) {
                        const _0x5dea00 = _0x274e18;
                        _0x11b869(_0x5dea00(0x2df), _0x5dea00(0x38f), _0x32ddd9), _0x479dd0(_0x32ddd9);
                    }
                });
            });
        }
        function _0xe19314(_0xa24c1d) {
            return new Promise((_0x4a934e, _0x1bd8d4) => {
                const _0x65a36e = a0_0xc123;
                if (!_0xa24c1d)
                    _0x1bd8d4(_0x65a36e(0x2d5));
                let _0x3a4368 = _0xa24c1d, _0x26141f = _0x65a36e(0x17f) + _0x3a4368 + '%22}';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x26141f,
                    'onload': function (_0x2b41a7) {
                        const _0x72cb8c = _0x65a36e;
                        try {
                            let _0x541153 = JSON['parse'](_0x2b41a7[_0x72cb8c(0x1ac)]);
                            _0x11b869(_0x72cb8c(0x40f), _0x541153), _0x4a934e(_0x541153[_0x72cb8c(0x36d)][_0x72cb8c(0x34b)][_0x72cb8c(0x221)][_0x72cb8c(0x441)]);
                        } catch (_0x5359de) {
                            _0x11b869(_0x72cb8c(0x40f), _0x72cb8c(0x38f), _0x5359de[_0x72cb8c(0x187)]), _0x1bd8d4(_0x5359de);
                        }
                    },
                    'onerror': function (_0x2a56e9) {
                        const _0x2a06f7 = _0x65a36e;
                        _0x11b869(_0x2a06f7(0x40f), 'reject', _0x2a56e9), _0x1bd8d4(_0x2a56e9);
                    }
                });
            });
        }
        function _0x24a4a6(_0x31483f) {
            return new Promise((_0x1d89bc, _0x15677c) => {
                const _0x2204ba = a0_0xc123;
                if (!_0x31483f)
                    _0x15677c(_0x2204ba(0x2d5));
                let _0x2e7e89 = _0x31483f, _0x16c969 = _0x2204ba(0x17f) + _0x2e7e89 + '%22}';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x16c969,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x56a8c9) {
                        const _0x4a26ac = _0x2204ba;
                        try {
                            let _0x4f6888 = JSON['parse'](_0x56a8c9[_0x4a26ac(0x1ac)]);
                            _0x11b869(_0x4f6888), _0x4f6888[_0x4a26ac(0x290)] === 'fail' ? (_0x11b869(_0x4a26ac(0x241), _0x4a26ac(0x35e), _0x2e7e89), _0x4d0c2d(_0x2e7e89)[_0x4a26ac(0x1f6)](_0x24312b => {
                                const _0x9e303b = _0x4a26ac;
                                _0x1d89bc({
                                    'type': _0x9e303b(0x28f),
                                    'data': _0x24312b['xdt_api__v1__media__shortcode__web_info']['items'][0x0]
                                });
                            })[_0x4a26ac(0x2e2)](_0x5d65f5 => {
                                _0x15677c(_0x5d65f5);
                            })) : _0x1d89bc({
                                'type': 'query_hash',
                                'data': _0x4f6888[_0x4a26ac(0x36d)]
                            });
                        } catch (_0x4331da) {
                            _0x11b869(_0x4a26ac(0x239), _0x4a26ac(0x38f), _0x4331da['message']), _0x15677c(_0x4331da);
                        }
                    },
                    'onerror': function (_0x9288d) {
                        const _0x3f78e8 = _0x2204ba;
                        _0x11b869(_0x3f78e8(0x239), _0x3f78e8(0x38f), _0x9288d), _0x15677c(_0x9288d);
                    }
                });
            });
        }
        function _0x4d0c2d(_0x2d2c21) {
            return new Promise((_0x175a9b, _0x3d79fb) => {
                const _0x514b22 = a0_0xc123;
                if (!_0x2d2c21)
                    _0x3d79fb(_0x514b22(0x2d5));
                let _0x372931 = _0x2d2c21, _0x1fe8e0 = 'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22' + _0x372931 + _0x514b22(0x31e);
                GM_xmlhttpRequest({
                    'method': _0x514b22(0x34e),
                    'url': _0x1fe8e0,
                    'headers': {
                        'User-Agent': _0x514b22(0x38a),
                        'X-IG-App-ID': _0x5848f9()
                    },
                    'onload': function (_0x4360a3) {
                        const _0x143703 = _0x514b22;
                        try {
                            let _0x237660 = JSON[_0x143703(0x3b8)](_0x4360a3[_0x143703(0x1ac)]);
                            _0x11b869(_0x237660), _0x237660[_0x143703(0x290)] === 'fail' ? (alert(_0x143703(0x1d6) + _0x237660['message'] + ':\x20' + _0x237660[_0x143703(0x257)]), _0x11b869(_0x143703(0x37c) + _0x237660[_0x143703(0x187)] + ':\x20' + _0x237660[_0x143703(0x257)]), _0x3d79fb(_0x4360a3)) : (_0x11b869(_0x143703(0x2e6), _0x237660[_0x143703(0x36d)]), _0x175a9b(_0x237660[_0x143703(0x36d)]));
                        } catch (_0x36a318) {
                            _0x11b869(_0x143703(0x2e6), _0x143703(0x38f), _0x36a318[_0x143703(0x187)]), _0x3d79fb(_0x36a318);
                        }
                    },
                    'onerror': function (_0x237d18) {
                        const _0x10f783 = _0x514b22;
                        _0x11b869(_0x10f783(0x2e6), _0x10f783(0x38f), _0x237d18), _0x3d79fb(_0x237d18);
                    }
                });
            });
        }
        function _0x5c98e5(_0x18f311) {
            return new Promise((_0x2b1336, _0x20d735) => {
                const _0x8a6c96 = a0_0xc123;
                let _0x500638 = _0x8a6c96(0x36f) + _0x18f311 + '/info/';
                if (_0x18f311 == null) {
                    alert('Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.'), _0x11b869(_0x8a6c96(0x267), _0x8a6c96(0x38f), _0x8a6c96(0x25e)), _0x46ea0e(![]), _0x20d735(-0x1);
                    return;
                }
                if (_0x5848f9() == null) {
                    alert('Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x11b869(_0x8a6c96(0x267), _0x8a6c96(0x38f), _0x8a6c96(0x1e5)), _0x46ea0e(![]), _0x20d735(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x8a6c96(0x34e),
                    'url': _0x500638,
                    'headers': {
                        'User-Agent': window[_0x8a6c96(0x1ed)][_0x8a6c96(0x226)],
                        'Accept': _0x8a6c96(0x23d),
                        'X-IG-App-ID': _0x5848f9()
                    },
                    'onload': function (_0x73a783) {
                        const _0x499bd4 = _0x8a6c96;
                        if (_0x73a783[_0x499bd4(0x391)] == _0x500638) {
                            let _0x25a93d = JSON[_0x499bd4(0x3b8)](_0x73a783[_0x499bd4(0x1ac)]);
                            _0x11b869(_0x499bd4(0x267), _0x25a93d), _0x2b1336(_0x25a93d);
                        } else {
                            let _0x385b31 = new URL(_0x73a783[_0x499bd4(0x391)]);
                            _0x385b31[_0x499bd4(0x2d4)][_0x499bd4(0x379)](_0x499bd4(0x269)) ? (_0x11b869('getMediaInfo()', 'reject', _0x499bd4(0x3a6)), alert(_0x499bd4(0x3a6))) : (_0x11b869(_0x499bd4(0x267), _0x499bd4(0x38f), 'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0x73a783[_0x499bd4(0x391)] + '\x22'), alert(_0x499bd4(0x380) + _0x73a783[_0x499bd4(0x391)] + '\x22')), _0x46ea0e(![]), _0x20d735(-0x1);
                        }
                    },
                    'onerror': function (_0x1c3155) {
                        const _0x593868 = _0x8a6c96;
                        _0x11b869(_0x593868(0x267), _0x593868(0x38f), _0x1c3155), _0x2b1336(_0x1c3155);
                    }
                });
            });
        }
        function _0x19724b(_0x1e0d88) {
            const _0x793f73 = _0x3e3711;
            let _0x3e0642 = new URL(_0x1e0d88), _0xd2a4f0 = _0x3e0642?.[_0x793f73(0x243)]?.[_0x793f73(0x3d4)](_0x793f73(0x1d9))?.[_0x793f73(0x327)]('.')['at'](0x0);
            return _0xd2a4f0 ? atob(_0xd2a4f0) : null;
        }
        function _0x5848f9() {
            const _0x508ead = _0x3e3711;
            let _0x56160d = null;
            return _0x57b339(_0x508ead(0x38b))[_0x508ead(0x3e7)](function () {
                const _0x24fbbb = _0x508ead, _0x4e4fbb = /"APP_ID":"([0-9]+)"/ig, _0x22ac9a = _0x57b339(this)[_0x24fbbb(0x225)]()[_0x24fbbb(0x3d9)](_0x4e4fbb);
                _0x22ac9a != null && _0x56160d == null && (_0x56160d = [..._0x57b339(this)[_0x24fbbb(0x225)]()[_0x24fbbb(0x3de)](_0x4e4fbb)]);
            }), _0x56160d ? _0x56160d['at'](0x0)['at'](-0x1) : null;
        }
        function _0x46ea0e(_0x254656) {
            const _0x4f492c = _0x3e3711;
            _0x254656 ? (_0x57b339(_0x4f492c(0x1eb))[_0x4f492c(0x3be)](_0x4f492c(0x3b2)), _0x57b339('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first')[_0x4f492c(0x281)](_0x4f492c(0x32b), _0x4f492c(0x1e3))) : (_0x57b339(_0x4f492c(0x1eb))[_0x4f492c(0x23f)]('x1s85apg'), _0x57b339(_0x4f492c(0x1eb))['css'](_0x4f492c(0x32b), ''));
        }
        function _0x71c79b(_0xa4e920) {
            const _0xfe2096 = _0x3e3711;
            let _0x10354b = _0x57b339(_0xfe2096(0x232) + _0xa4e920 + _0xfe2096(0x2b3))[_0xfe2096(0x235)](function () {
                const _0x5cc711 = _0xfe2096;
                return _0x57b339(this)['children']()[_0x5cc711(0x189)] === 0x0 && _0x57b339(this)[_0x5cc711(0x316)](_0x5cc711(0x317))['length'] === 0x0 && _0x57b339(this)['text']()?.[_0x5cc711(0x291)]() === _0xa4e920?.[_0x5cc711(0x291)]();
            })[_0xfe2096(0x2d0)]('div:not([class]):not([style])')[_0xfe2096(0x235)](function () {
                const _0x3de2d4 = _0xfe2096;
                return _0x57b339(this)[_0x3de2d4(0x225)]()?.['toLowerCase']() !== _0xa4e920?.[_0x3de2d4(0x291)]();
            })[_0xfe2096(0x235)](function () {
                const _0x127761 = _0xfe2096;
                return _0x57b339(this)[_0x127761(0x312)]()['length'] > 0x1;
            })[_0xfe2096(0x3ef)]();
            return _0x10354b[_0xfe2096(0x189)] === 0x0 && (_0x10354b = _0x57b339(_0xfe2096(0x232) + _0xa4e920 + '\x22]')[_0xfe2096(0x235)](function () {
                const _0x213fb2 = _0xfe2096;
                return _0x57b339(this)[_0x213fb2(0x316)](_0x213fb2(0x1f7))['length'] > 0x0;
            })[_0xfe2096(0x2d0)](_0xfe2096(0x2bd))[_0xfe2096(0x235)](function () {
                const _0x132ca4 = _0xfe2096;
                return _0x57b339(this)['text']()?.[_0x132ca4(0x291)]() !== _0xa4e920?.[_0x132ca4(0x291)]();
            })[_0xfe2096(0x235)](function () {
                const _0x1247f6 = _0xfe2096;
                return _0x57b339(this)['children']()[_0x1247f6(0x189)] > 0x1;
            })[_0xfe2096(0x3ef)]()), _0x10354b[_0xfe2096(0x312)]()[_0xfe2096(0x235)](function () {
                const _0x4c1e2c = _0xfe2096;
                return _0x57b339(this)[_0x4c1e2c(0x250)]() < 0xa;
            })[_0xfe2096(0x3ef)]()[_0xfe2096(0x312)]();
        }
        function _0x4a5258(_0x4fbf9f, _0x24a670) {
            const _0x53bcfb = _0x3e3711;
            _0x57b339('.circle_wrapper')[_0x53bcfb(0x189)] ? (_0x57b339(_0x53bcfb(0x3d3))['text'](_0x4fbf9f + '/' + _0x24a670), _0x4fbf9f >= _0x24a670 && _0x57b339('.circle_wrapper')['fadeOut'](0xfa, function () {
                _0x57b339(this)['remove']();
            })) : _0x57b339(_0x53bcfb(0x39d))[_0x53bcfb(0x3db)](_0x53bcfb(0x31b) + _0x4fbf9f + '/' + _0x24a670 + _0x53bcfb(0x1a0));
        }
        function _0x38543d(_0x5cb79b, _0x6a5fdf) {
            const _0x10c2b3 = _0x3e3711;
            let _0x1afa47 = _0x5cb79b ? _0x10c2b3(0x288) : '';
            _0x57b339(_0x10c2b3(0x39d))[_0x10c2b3(0x3db)](_0x10c2b3(0x23b) + _0x1afa47 + _0x10c2b3(0x3ce)), _0x57b339(_0x10c2b3(0x230))[_0x10c2b3(0x3db)](_0x10c2b3(0x294) + _0x476c5e(_0x10c2b3(0x3bc)) + _0x10c2b3(0x275) + GM_info[_0x10c2b3(0x41a)]['version'] + '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x232083[_0x10c2b3(0x3bc)] + '</div></div>'), _0x6a5fdf && (_0x57b339(_0x10c2b3(0x230))[_0x10c2b3(0x3db)](_0x10c2b3(0x3d6)), _0x57b339(_0x10c2b3(0x27f))[_0x10c2b3(0x3db)]('<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>' + _0x476c5e(_0x10c2b3(0x3b0)) + _0x10c2b3(0x1f3)), _0x57b339(_0x10c2b3(0x27f))['append'](_0x10c2b3(0x43d) + _0x476c5e(_0x10c2b3(0x344)) + _0x10c2b3(0x1f3)), _0x57b339(_0x10c2b3(0x230))[_0x10c2b3(0x3db)](_0x10c2b3(0x17c) + _0x476c5e('ALL_CHECK') + _0x10c2b3(0x18f)));
        }
        function _0x4d3d04(_0x37bc4d) {
            const _0x1ad805 = _0x3e3711;
            _0x57b339('.IG_POPUP_DIG')[_0x1ad805(0x189)] && (_0x37bc4d ? _0x57b339('.IG_POPUP_DIG')[_0x1ad805(0x23f)](_0x1ad805(0x288)) : _0x57b339(_0x1ad805(0x3f8))[_0x1ad805(0x3be)](_0x1ad805(0x288)));
        }
        function _0x3d1233(_0x5aa4d6, _0x57405a, _0x1f3604, _0x200bc7, _0x33796f, _0x5a1a30) {
            return new Promise(_0x3dcb4c => {
                setTimeout(() => {
                    const _0x3165d7 = a0_0xc123;
                    _0x46ea0e(!![]), fetch(_0x5aa4d6)[_0x3165d7(0x1f6)](_0x2c7bd8 => {
                        const _0x128808 = _0x3165d7;
                        return _0x2c7bd8['blob']()[_0x128808(0x1f6)](_0x127512 => {
                            _0x46ea0e(![]), _0x428724(_0x5aa4d6, _0x127512, _0x57405a, _0x1f3604, _0x200bc7, _0x33796f, _0x5a1a30), _0x3dcb4c(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x523d43(_0x49b6df, _0x1309b1) {
            const _0x1effe5 = _0x3e3711, _0x12a044 = document[_0x1effe5(0x1b1)]('a');
            _0x12a044[_0x1effe5(0x3e8)] = URL[_0x1effe5(0x3f6)](_0x49b6df), _0x12a044[_0x1effe5(0x251)] = _0x1309b1, _0x12a044[_0x1effe5(0x1c1)](), _0x12a044['remove']();
        }
        function _0x428724(_0xfe5adb, _0x3099e4, _0x235e23, _0x106f18, _0x1ac7a5, _0x487ebc, _0x416fef) {
            const _0x5aeb5d = _0x3e3711;
            _0x1ac7a5 = parseInt(_0x1ac7a5[_0x5aeb5d(0x2ca)]()[_0x5aeb5d(0x306)](0xd, '0'));
            _0x313546['RENAME_PUBLISH_DATE'] && (_0x1ac7a5 = parseInt(_0x1ac7a5['toString']()[_0x5aeb5d(0x306)](0xd, '0')));
            const _0x4ed330 = new Date(_0x1ac7a5), _0x3b55c5 = new URL(_0xfe5adb)['pathname'][_0x5aeb5d(0x327)]('/')['at'](-0x1)[_0x5aeb5d(0x327)]('.')[_0x5aeb5d(0x2d8)](0x0, -0x1)['join']('.'), _0xa9957 = _0x4ed330[_0x5aeb5d(0x33c)]()[_0x5aeb5d(0x2ca)](), _0x8e1fd = (_0x4ed330[_0x5aeb5d(0x398)]() + 0x1)[_0x5aeb5d(0x2ca)]()['padStart'](0x2, '0'), _0x4032cb = _0x4ed330['getDate']()[_0x5aeb5d(0x2ca)]()[_0x5aeb5d(0x1ce)](0x2, '0'), _0x5aad8c = _0x4ed330[_0x5aeb5d(0x29e)]()[_0x5aeb5d(0x2ca)]()[_0x5aeb5d(0x1ce)](0x2, '0'), _0x36726b = _0x4ed330[_0x5aeb5d(0x348)]()[_0x5aeb5d(0x2ca)]()['padStart'](0x2, '0'), _0x275136 = _0x4ed330['getSeconds']()[_0x5aeb5d(0x2ca)]()[_0x5aeb5d(0x1ce)](0x2, '0');
            var _0x1c11d8 = _0x3bbe46[_0x5aeb5d(0x32a)]['toUpperCase'](), _0xfa0ac5 = _0x416fef ?? '', _0x2d3d5e = {
                    '%USERNAME%': _0x235e23,
                    '%SOURCE_TYPE%': _0x106f18,
                    '%SHORTCODE%': _0xfa0ac5,
                    '%YEAR%': _0xa9957,
                    '%2-YEAR%': _0xa9957[_0x5aeb5d(0x3a2)](-0x2),
                    '%MONTH%': _0x8e1fd,
                    '%DAY%': _0x4032cb,
                    '%HOUR%': _0x5aad8c,
                    '%MINUTE%': _0x36726b,
                    '%SECOND%': _0x275136,
                    '%ORIGINAL_NAME%': _0x3b55c5,
                    '%ORIGINAL_NAME_FIRST%': _0x3b55c5[_0x5aeb5d(0x327)]('_')['at'](0x0)
                };
            _0x1c11d8 = _0x1c11d8[_0x5aeb5d(0x367)](/%[\w\-]+%/g, function (_0x1e42d0) {
                return _0x2d3d5e[_0x1e42d0] || _0x1e42d0;
            });
            const _0x325eb7 = _0x235e23 + '_' + _0x3b55c5 + '.' + _0x487ebc, _0xcf35d5 = _0x313546[_0x5aeb5d(0x2f4)] ? _0x1c11d8 + '.' + _0x487ebc : _0x325eb7;
            _0x313546[_0x5aeb5d(0x236)] && _0x487ebc === 'jpg' && _0x416fef && _0x106f18 === _0x5aeb5d(0x1c0) && (_0x3099e4[_0x5aeb5d(0x244)] === _0x5aeb5d(0x381) || _0x3099e4[_0x5aeb5d(0x244)] === _0x5aeb5d(0x20e)) ? _0x503376(_0x3099e4, _0x416fef)[_0x5aeb5d(0x1f6)](_0x26beb2 => _0x523d43(_0x26beb2, _0xcf35d5))[_0x5aeb5d(0x2e2)](_0x4c3e4e => {
                const _0x435c55 = _0x5aeb5d;
                console[_0x435c55(0x410)]('Failed\x20to\x20strip\x20EXIF\x20and/or\x20attach\x20post\x20URL\x20to\x20EXIF.', _0x4c3e4e), _0x523d43(_0x3099e4, _0xcf35d5);
            }) : _0x523d43(_0x3099e4, _0xcf35d5);
        }
        async function _0x503376(_0x2d1215, _0x552270) {
            const _0x1ee696 = _0x3e3711, _0x34c1f9 = (..._0x1cd9c3) => {
                    const _0x373e63 = a0_0xc123, _0x452910 = _0x1cd9c3[_0x373e63(0x1ea)]((_0x34395b, _0x51a101) => _0x34395b + _0x51a101[_0x373e63(0x189)], 0x0), _0x89243f = new Uint8Array(_0x452910);
                    let _0x3487a7 = 0x0;
                    for (const _0x2930ce of _0x1cd9c3) {
                        _0x89243f[_0x373e63(0x37a)](_0x2930ce, _0x3487a7), _0x3487a7 += _0x2930ce['length'];
                    }
                    return _0x89243f;
                }, _0x3e6251 = _0x528206 => {
                    const _0xcbf285 = a0_0xc123, _0x25e2c3 = new Uint8Array(0x4);
                    return new DataView(_0x25e2c3[_0xcbf285(0x193)])[_0xcbf285(0x2a4)](0x0, _0x528206, !![]), _0x25e2c3;
                }, _0x3b457b = _0x5cc033 => new TextEncoder()[_0x1ee696(0x369)](_0x5cc033), _0x40f4e8 = (_0x1b0b60, _0x10dccd) => String[_0x1ee696(0x1fa)](_0x1b0b60[_0x1ee696(0x223)](_0x10dccd), _0x1b0b60[_0x1ee696(0x223)](_0x10dccd + 0x1), _0x1b0b60['getUint8'](_0x10dccd + 0x2), _0x1b0b60[_0x1ee696(0x223)](_0x10dccd + 0x3)), _0x90be96 = new Uint8Array(await _0x2d1215[_0x1ee696(0x2d8)](0x0, 0xc)[_0x1ee696(0x363)]()), _0x14b8b4 = _0x90be96[0x0] === 0xff && _0x90be96[0x1] === 0xd8, _0x2de026 = _0x90be96[_0x1ee696(0x189)] >= 0xc && String[_0x1ee696(0x1fa)](..._0x90be96[_0x1ee696(0x1ee)](0x0, 0x4)) === _0x1ee696(0x396) && String[_0x1ee696(0x1fa)](..._0x90be96[_0x1ee696(0x1ee)](0x8, 0xc)) === 'WEBP';
            if (!_0x14b8b4 && !_0x2de026)
                throw new Error(_0x1ee696(0x360));
            const _0x5b094a = _0x3b457b(_0x1ee696(0x1dc) + _0x552270 + '/\x00'), _0x24a203 = _0x3b457b(_0x1ee696(0x1fe)), _0x2f06fd = Uint8Array['from']([
                    0x49,
                    0x49,
                    0x2a,
                    0x0,
                    0x8,
                    0x0,
                    0x0,
                    0x0
                ]), _0x214b30 = Uint8Array['from']([
                    0x1,
                    0x0
                ]), _0x3e174f = _0x34c1f9(Uint8Array[_0x1ee696(0x1c9)]([
                    0xe,
                    0x1,
                    0x2,
                    0x0
                ]), _0x3e6251(_0x5b094a[_0x1ee696(0x189)]), _0x3e6251(0x8 + 0x2 + 0xc + 0x4)), _0x30117e = _0x34c1f9(_0x2f06fd, _0x214b30, _0x3e174f, _0x3e6251(0x0), _0x5b094a);
            if (_0x14b8b4) {
                const _0x5bb235 = await _0x2d1215['arrayBuffer'](), _0x4ee2bc = new DataView(_0x5bb235), _0x4cc8a7 = _0x34c1f9(_0x24a203, _0x30117e), _0x425ba5 = new Uint8Array(0x4);
                new DataView(_0x425ba5[_0x1ee696(0x193)])['setUint16'](0x0, 0xffe1), new DataView(_0x425ba5[_0x1ee696(0x193)])[_0x1ee696(0x40e)](0x2, _0x4cc8a7[_0x1ee696(0x189)] + 0x2);
                const _0x1faee5 = _0x34c1f9(_0x425ba5, _0x4cc8a7), _0x350925 = [new Uint8Array(_0x5bb235, 0x0, 0x2)];
                let _0x21ef45 = 0x2, _0x4e9fae = ![];
                while (_0x21ef45 < _0x4ee2bc[_0x1ee696(0x2cb)]) {
                    const _0x3c3a7e = _0x4ee2bc[_0x1ee696(0x2fb)](_0x21ef45);
                    if ((_0x3c3a7e & 0xff00) !== 0xff00)
                        break;
                    if (_0x3c3a7e === 0xffda) {
                        if (!_0x4e9fae)
                            _0x350925['push'](_0x1faee5);
                        _0x350925[_0x1ee696(0x253)](new Uint8Array(_0x5bb235, _0x21ef45));
                        break;
                    }
                    const _0x575119 = _0x4ee2bc[_0x1ee696(0x2fb)](_0x21ef45 + 0x2) + 0x2;
                    if (_0x3c3a7e === 0xffe1) {
                        _0x21ef45 += _0x575119;
                        continue;
                    }
                    _0x350925[_0x1ee696(0x253)](new Uint8Array(_0x5bb235, _0x21ef45, _0x575119)), _0x21ef45 += _0x575119;
                }
                const _0x108e13 = _0x350925[_0x1ee696(0x1ea)]((_0x106267, _0x515af5) => _0x106267 + _0x515af5['length'], 0x0), _0x43b3d5 = new Uint8Array(_0x108e13);
                let _0x51c2df = 0x0;
                return _0x350925[_0x1ee696(0x1ec)](_0x2bf2f5 => {
                    const _0x4fb619 = _0x1ee696;
                    _0x43b3d5[_0x4fb619(0x37a)](_0x2bf2f5, _0x51c2df), _0x51c2df += _0x2bf2f5[_0x4fb619(0x189)];
                }), new Blob([_0x43b3d5], { 'type': _0x1ee696(0x381) });
            }
            const _0x52ce08 = await _0x2d1215['arrayBuffer'](), _0x38f7ed = new DataView(_0x52ce08), _0x32e30b = [];
            let _0x1fb61a = -0x1, _0x10e69b = 0xc;
            while (_0x10e69b < _0x38f7ed[_0x1ee696(0x2cb)]) {
                const _0x4520e3 = _0x40f4e8(_0x38f7ed, _0x10e69b), _0x5afb26 = _0x38f7ed[_0x1ee696(0x403)](_0x10e69b + 0x4, !![]), _0x4a0f4f = _0x5afb26 & 0x1, _0x540596 = 0x8 + _0x5afb26 + _0x4a0f4f;
                if (_0x4520e3 !== _0x1ee696(0x29a) && _0x4520e3 !== _0x1ee696(0x386)) {
                    _0x32e30b[_0x1ee696(0x253)](new Uint8Array(_0x52ce08, _0x10e69b, _0x540596));
                    if (_0x4520e3 === _0x1ee696(0x389))
                        _0x1fb61a = _0x32e30b[_0x1ee696(0x189)] - 0x1;
                }
                _0x10e69b += _0x540596;
            }
            let _0x3a4171 = _0x34c1f9(_0x3b457b(_0x1ee696(0x29a)), _0x3e6251(_0x24a203['length'] + _0x30117e[_0x1ee696(0x189)]), _0x24a203, _0x30117e);
            if (_0x3a4171[_0x1ee696(0x189)] & 0x1)
                _0x3a4171 = _0x34c1f9(_0x3a4171, Uint8Array['of'](0x0));
            if (_0x1fb61a !== -0x1) {
                const _0x1dfaef = new Uint8Array(_0x32e30b[_0x1fb61a]);
                _0x1dfaef[0x8] |= 0x10, _0x32e30b[_0x1fb61a] = _0x1dfaef, _0x32e30b[_0x1ee696(0x2f8)](_0x1fb61a + 0x1, 0x0, _0x3a4171);
            } else
                _0x32e30b[_0x1ee696(0x253)](_0x3a4171);
            const _0x97d486 = _0x32e30b[_0x1ee696(0x1ea)]((_0x329192, _0x2b7faa) => _0x329192 + _0x2b7faa[_0x1ee696(0x189)], 0x0), _0x25c13a = _0x34c1f9(_0x3b457b('RIFF'), _0x3e6251(_0x97d486 + 0x4), _0x3b457b('WEBP')), _0x47037a = _0x34c1f9(_0x25c13a, ..._0x32e30b);
            return new Blob([_0x47037a], { 'type': _0x1ee696(0x20e) });
        }
        async function _0xb19f52(_0x21aaab, _0x48f02c) {
            const _0x5e6405 = _0x3e3711;
            let _0x29f958 = new Date()['getTime'](), _0x3eb88f = Math[_0x5e6405(0x2f0)](_0x29f958 / 0x3e8), _0x3f7e07 = _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x1b0)) ? _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)]('data-username') : _0x3bbe46[_0x5e6405(0x224)];
            !_0x3f7e07 && _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x22e)) && (_0x11b869(_0x5e6405(0x2ef), _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x40c))), _0x3f7e07 = await _0xe19314(_0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x22e)))['catch'](_0x373609 => {
                const _0x9b2d16 = _0x5e6405;
                _0x11b869(_0x9b2d16(0x20b), _0x373609[_0x9b2d16(0x187)]);
            }), _0x3f7e07 == null && (_0x3f7e07 = 'NONE'));
            _0x313546[_0x5e6405(0x40d)] && _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)]('datetime') && (_0x3eb88f = parseInt(_0x57b339(_0x21aaab)['attr'](_0x5e6405(0x256))));
            if (_0x313546[_0x5e6405(0x26f)]) {
                _0x46ea0e(!![]);
                let _0x302ed3 = await _0x5c98e5(_0x57b339(_0x21aaab)['attr'](_0x5e6405(0x1ae)));
                _0x46ea0e(![]);
                if (_0x302ed3[_0x5e6405(0x290)] === 'ok') {
                    var _0x5c3c7a = null;
                    _0x302ed3[_0x5e6405(0x3ca)][0x0]['video_versions'] ? _0x5c3c7a = _0x302ed3[_0x5e6405(0x3ca)][0x0][_0x5e6405(0x1cb)][0x0][_0x5e6405(0x1f5)] : (_0x302ed3[_0x5e6405(0x3ca)][0x0]['image_versions2'][_0x5e6405(0x2c8)][_0x5e6405(0x2e0)](function (_0x3ef374, _0x438363) {
                        const _0x16c5ec = _0x5e6405;
                        let _0xb0df67 = new URL(_0x3ef374[_0x16c5ec(0x1f5)])['searchParams']['get'](_0x16c5ec(0x376)), _0x38a531 = new URL(_0x438363[_0x16c5ec(0x1f5)])['searchParams'][_0x16c5ec(0x3d4)](_0x16c5ec(0x376));
                        if (_0xb0df67 && _0x38a531) {
                            if (_0xb0df67[_0x16c5ec(0x189)] > _0x38a531[_0x16c5ec(0x189)])
                                return 0x1;
                            if (_0xb0df67[_0x16c5ec(0x189)] < _0x38a531[_0x16c5ec(0x189)])
                                return -0x1;
                        } else {
                            if (_0x3ef374['width'] < _0x438363['width'])
                                return 0x1;
                            if (_0x3ef374[_0x16c5ec(0x1c6)] > _0x438363[_0x16c5ec(0x1c6)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x5c3c7a = _0x302ed3[_0x5e6405(0x3ca)][0x0][_0x5e6405(0x2e7)]['candidates'][0x0][_0x5e6405(0x1f5)]);
                    if (_0x48f02c) {
                        let _0x3e35cb = new URL(_0x5c3c7a);
                        _0x3e35cb['host'] = _0x5e6405(0x1d8), _0x13e261(_0x3e35cb[_0x5e6405(0x3e8)]);
                    } else
                        _0x3d1233(_0x5c3c7a, _0x3f7e07, _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)]('data-name'), _0x3eb88f, _0x57b339(_0x21aaab)['attr'](_0x5e6405(0x2d2)), _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)]('data-path'));
                } else {
                    if (_0x313546[_0x5e6405(0x37b)]) {
                        if (_0x48f02c) {
                            let _0x26be65 = new URL(_0x57b339(_0x21aaab)['attr']('data-href'));
                            _0x26be65[_0x5e6405(0x260)] = _0x5e6405(0x1d8), _0x13e261(_0x26be65[_0x5e6405(0x3e8)]);
                        } else
                            _0x3d1233(_0x57b339(_0x21aaab)['attr'](_0x5e6405(0x40c)), _0x3f7e07, _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x2a2)), _0x3eb88f, _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x2d2)), _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x22e)));
                    } else
                        alert(_0x5e6405(0x3ff) + _0x302ed3[_0x5e6405(0x187)]);
                    _0x11b869(_0x302ed3);
                }
            } else
                _0x3d1233(_0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x40c)), _0x3f7e07, _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x2a2)), _0x3eb88f, _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)](_0x5e6405(0x2d2)), _0x57b339(_0x21aaab)[_0x5e6405(0x3b4)]('data-path'));
        }
        function _0x1b2d90() {
            const _0x34e3fe = _0x3e3711;
            for (let _0x4b59e7 of _0x3bbe46[_0x34e3fe(0x28c)]) {
                _0x11b869(_0x34e3fe(0x234), _0x4b59e7), GM_unregisterMenuCommand(_0x4b59e7);
            }
            _0x3bbe46[_0x34e3fe(0x28c)][_0x34e3fe(0x253)](GM_registerMenuCommand(_0x476c5e(_0x34e3fe(0x370)), () => {
                _0x437e35();
            }, { 'accessKey': 'w' })), _0x3bbe46['registerMenuIds'][_0x34e3fe(0x253)](GM_registerMenuCommand(_0x476c5e('DONATE'), () => {
                GM_openInTab('https://ko-fi.com/snkoarashi', { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x3bbe46[_0x34e3fe(0x28c)][_0x34e3fe(0x253)](GM_registerMenuCommand(_0x476c5e(_0x34e3fe(0x292)), () => {
                _0x260537();
            }, { 'accessKey': 'z' })), _0x3bbe46[_0x34e3fe(0x28c)][_0x34e3fe(0x253)](GM_registerMenuCommand(_0x476c5e('FEEDBACK'), () => {
                _0x515ee6();
            }, { 'accessKey': 'f' })), _0x3bbe46[_0x34e3fe(0x28c)][_0x34e3fe(0x253)](GM_registerMenuCommand(_0x476c5e('CHECK_UPDATE_MENU'), () => {
                _0x519904();
            }, { 'accessKey': 'c' })), _0x3bbe46[_0x34e3fe(0x28c)][_0x34e3fe(0x253)](GM_registerMenuCommand(_0x476c5e(_0x34e3fe(0x35c)), () => {
                _0x8d211b();
            }, { 'accessKey': 'r' }));
        }
        function _0x1a91e7(_0x40d94b) {
            const _0x3a18ca = _0x3e3711;
            if (!_0x313546[_0x3a18ca(0x319)])
                return;
            const _0x558dff = GM_getValue(_0x3a18ca(0x3ec)) ?? new Date()['getTime'](), _0x4b8a39 = new Date()[_0x3a18ca(0x3bb)]();
            _0x4b8a39 > parseInt(_0x558dff) + _0x40d94b * 0x3e8 && (GM_setValue(_0x3a18ca(0x3ec), new Date()[_0x3a18ca(0x3bb)]()), _0x519904());
        }
        function _0x519904() {
            const _0x41a738 = _0x3e3711, _0x55cf9d = GM_info[_0x41a738(0x41a)][_0x41a738(0x30d)], _0x1e55e2 = _0x41a738(0x1e9);
            GM_xmlhttpRequest({
                'method': _0x41a738(0x34e),
                'url': _0x1e55e2,
                'onload': function (_0x44cce6) {
                    const _0x499680 = _0x41a738, _0x158910 = _0x44cce6[_0x499680(0x1b3)], _0x5a3976 = _0x158910['match'](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x5a3976 && _0x5a3976[0x1]) {
                        const _0x44017b = _0x5a3976[0x1];
                        _0x11b869('Current\x20version:\x20', _0x55cf9d, '|', _0x499680(0x1ca), _0x44017b), _0x44017b !== _0x55cf9d && typeof this[_0x499680(0x2a0)] === 'undefined' ? (this[_0x499680(0x2a0)] = null, GM_notification({
                            'text': _0x476c5e('NOTICE_UPDATE_CONTENT'),
                            'title': _0x476c5e(_0x499680(0x297)),
                            'tag': _0x499680(0x261),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
                            'onclick': _0x3456de => {
                                const _0x302f96 = _0x499680;
                                _0x3456de?.['preventDefault']();
                                var _0xa206e4 = GM_openInTab(GM_info[_0x302f96(0x41a)][_0x302f96(0x42f)]);
                                setTimeout(() => {
                                    _0xa206e4['close']();
                                }, 0xfa);
                            }
                        })) : _0x11b869('there\x20is\x20no\x20new\x20update');
                    } else
                        console[_0x499680(0x410)](_0x499680(0x24a));
                }
            });
        }
        function _0x437e35() {
            const _0x2fe544 = _0x3e3711;
            _0x57b339('.IG_POPUP_DIG')[_0x2fe544(0x231)](), _0x38543d(), _0x57b339('.IG_POPUP_DIG\x20#post_info')[_0x2fe544(0x225)](_0x2fe544(0x33d)), _0x57b339(_0x2fe544(0x1bf))[_0x2fe544(0x3db)](_0x2fe544(0x208));
            for (let _0x4add1d in _0x1f66e2) {
                _0x57b339(_0x2fe544(0x26c))[_0x2fe544(0x3db)](_0x2fe544(0x1e2) + _0x4add1d + '\x22\x20' + (_0x3bbe46[_0x2fe544(0x445)] == _0x4add1d ? _0x2fe544(0x272) : '') + '>' + _0x1f66e2[_0x4add1d] + '</option>');
            }
            for (let _0x177e7f in _0x313546) {
                _0x57b339(_0x2fe544(0x3c7))[_0x2fe544(0x3db)](_0x2fe544(0x337) + (_0x22ac74[_0x2fe544(0x39b)](_0x177e7f) ? _0x2fe544(0x34a) : '') + _0x2fe544(0x2a9) + _0x476c5e(_0x177e7f + '_INTRO') + _0x2fe544(0x1bd) + (_0x177e7f + _0x2fe544(0x385)) + '\x22><span\x20data-ih-locale=\x22' + _0x177e7f + '\x22>' + _0x476c5e(_0x177e7f) + _0x2fe544(0x1d0) + _0x177e7f + '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20' + (_0x313546[_0x177e7f] === !![] ? _0x2fe544(0x1af) : '') + _0x2fe544(0x248)), _0x177e7f === _0x2fe544(0x366) && _0x57b339(_0x2fe544(0x406) + _0x177e7f + '\x22]')[_0x2fe544(0x18c)](_0x2fe544(0x264))['on'](_0x2fe544(0x1de), function (_0x3b6b22) {
                    const _0xfcdca0 = _0x2fe544;
                    _0x3b6b22[_0xfcdca0(0x196)](), _0x57b339(this)[_0xfcdca0(0x316)](_0xfcdca0(0x315))[_0xfcdca0(0x189)] === 0x0 && (_0x57b339(this)['append'](_0xfcdca0(0x2a5)), _0x57b339(this)[_0xfcdca0(0x312)](_0xfcdca0(0x315))[_0xfcdca0(0x3db)](_0xfcdca0(0x3b6) + _0x3bbe46['videoVolume'] + _0xfcdca0(0x1ef)), _0x57b339(this)[_0xfcdca0(0x312)](_0xfcdca0(0x315))[_0xfcdca0(0x3db)](_0xfcdca0(0x3b6) + _0x3bbe46[_0xfcdca0(0x277)] + _0xfcdca0(0x19e)), _0x57b339(this)[_0xfcdca0(0x312)](_0xfcdca0(0x315))[_0xfcdca0(0x3db)]('<div\x20class=\x22IG_POPUP_DIG_BTN\x22>' + _0x232083[_0xfcdca0(0x3bc)] + _0xfcdca0(0x2a1)));
                }), _0x177e7f === _0x2fe544(0x2f4) && _0x57b339(_0x2fe544(0x406) + _0x177e7f + '\x22]')['parent'](_0x2fe544(0x264))['on'](_0x2fe544(0x1de), function (_0x151712) {
                    const _0x4e7149 = _0x2fe544;
                    _0x151712[_0x4e7149(0x196)](), _0x57b339(this)[_0x4e7149(0x316)](_0x4e7149(0x315))[_0x4e7149(0x189)] === 0x0 && (_0x57b339(this)[_0x4e7149(0x3db)](_0x4e7149(0x2a5)), _0x57b339(this)[_0x4e7149(0x312)](_0x4e7149(0x315))['append'](_0x4e7149(0x1fb) + _0x3bbe46['fileRenameFormat'] + _0x4e7149(0x19a)), _0x57b339(this)[_0x4e7149(0x312)]('#tempWrapper')[_0x4e7149(0x3db)](_0x4e7149(0x405) + _0x232083[_0x4e7149(0x3bc)] + _0x4e7149(0x2a1)));
                });
            }
        }
        function _0x260537() {
            const _0xb4211 = _0x3e3711;
            _0x57b339(_0xb4211(0x3f8))[_0xb4211(0x231)](), _0x38543d(), _0x57b339(_0xb4211(0x42a))[_0xb4211(0x225)](_0xb4211(0x240)), _0x57b339(_0xb4211(0x3c7))[_0xb4211(0x3db)](_0xb4211(0x2c0)), _0x57b339(_0xb4211(0x3c7))[_0xb4211(0x3db)](_0xb4211(0x357)), _0x57b339('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0xb4211(0x3db)](_0xb4211(0x3ba) + _0x476c5e(_0xb4211(0x3ab)) + _0xb4211(0x2d9)), _0x57b339('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>' + _0x476c5e(_0xb4211(0x1c7)) + '</a></button>'), _0x57b339(_0xb4211(0x2ee))[_0xb4211(0x3db)](_0xb4211(0x416) + _0x476c5e(_0xb4211(0x3af)) + '</a></button><br/>'), _0x57b339('.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span')[_0xb4211(0x3db)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>' + _0x476c5e(_0xb4211(0x434)) + '</a></button>'), _0x57b339(_0xb4211(0x2ee))[_0xb4211(0x3db)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x476c5e(_0xb4211(0x43c)) + '</a></button>');
        }
        function _0x515ee6() {
            const _0x200b6f = _0x3e3711;
            _0x57b339(_0x200b6f(0x3f8))[_0x200b6f(0x231)](), _0x38543d(), _0x57b339(_0x200b6f(0x42a))[_0x200b6f(0x225)]('Feedback\x20Options'), _0x57b339(_0x200b6f(0x3c7))[_0x200b6f(0x3db)](_0x200b6f(0x357)), _0x57b339(_0x200b6f(0x2ee))['append'](_0x200b6f(0x1c5) + _0x476c5e('REPORT_FORK') + _0x200b6f(0x2d9)), _0x57b339(_0x200b6f(0x2ee))[_0x200b6f(0x3db)](_0x200b6f(0x442) + _0x476c5e(_0x200b6f(0x434)) + '</a></button>'), _0x57b339(_0x200b6f(0x2ee))[_0x200b6f(0x3db)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x476c5e(_0x200b6f(0x43c)) + _0x200b6f(0x2d9));
        }
        function _0x13e261(_0x22af7a) {
            const _0x318c6d = _0x3e3711;
            var _0x16d26a = document[_0x318c6d(0x1b1)]('a');
            _0x16d26a[_0x318c6d(0x3e8)] = _0x22af7a, _0x16d26a[_0x318c6d(0x361)] = _0x318c6d(0x334), document[_0x318c6d(0x39d)][_0x318c6d(0x216)](_0x16d26a), _0x16d26a[_0x318c6d(0x1c1)](), _0x16d26a[_0x318c6d(0x231)]();
        }
        function _0x8d211b() {
            const _0x374cc6 = _0x3e3711;
            clearInterval(_0x3bbe46['GL_repeat']), _0x3bbe46[_0x374cc6(0x333)][_0x374cc6(0x1ec)](_0x34305d => {
                const _0x36303e = _0x374cc6;
                _0x34305d[_0x36303e(0x321)][_0x36303e(0x1ec)](_0x3db54e => {
                    const _0x8ae33e = _0x36303e;
                    _0x57b339(_0x34305d[_0x8ae33e(0x2a7)])[_0x8ae33e(0x2f2)]('click', _0x3db54e);
                });
            }), _0x3bbe46[_0x374cc6(0x333)] = [], _0x57b339('.button_wrapper')['remove'](), _0x57b339(_0x374cc6(0x1c2))[_0x374cc6(0x231)](), _0x57b339('[data-snig]')[_0x374cc6(0x362)](_0x374cc6(0x37d)), _0x3bbe46[_0x374cc6(0x31d)] = ![], _0x3bbe46['firstStarted'] = ![], _0x3bbe46[_0x374cc6(0x2fa)] = location['href'], _0x3bbe46['GL_observer'][_0x374cc6(0x42e)](), _0x11b869(_0x374cc6(0x1d5));
        }
        function _0x11b869(..._0x325424) {
            const _0x2fe2d4 = _0x3e3711;
            var _0x1ee344 = new Date();
            _0x3bbe46[_0x2fe2d4(0x3d2)][_0x2fe2d4(0x253)]({
                'time': _0x1ee344[_0x2fe2d4(0x3bb)](),
                'content': [..._0x325424]
            }), _0x3bbe46[_0x2fe2d4(0x3d2)][_0x2fe2d4(0x189)] > 0x3e8 && (_0x3bbe46[_0x2fe2d4(0x3d2)] = [
                {
                    'time': _0x1ee344['getTime'](),
                    'content': [_0x2fe2d4(0x3d0)]
                },
                ..._0x3bbe46['GL_logger'][_0x2fe2d4(0x2d8)](-0x3e7)
            ]), console[_0x2fe2d4(0x19c)]('[' + _0x1ee344['toISOString']() + ']', ..._0x325424);
        }
        function _0x1dcf48() {
            const _0x3cdfad = _0x3e3711;
            for (let _0x17fa9d in _0x313546) {
                GM_getValue(_0x17fa9d) != null && typeof GM_getValue(_0x17fa9d) === _0x3cdfad(0x183) && (_0x313546[_0x17fa9d] = GM_getValue(_0x17fa9d), _0x17fa9d === _0x3cdfad(0x366) && GM_getValue(_0x17fa9d) !== !![] && (_0x3bbe46[_0x3cdfad(0x277)] = 0x1));
            }
        }
        function _0x146a3e(_0x351721, _0x50aed3, _0x330da0, _0x4f1831 = '') {
            const _0x3715d4 = _0x3e3711;
            _0x50aed3[_0x3715d4(0x316)](_0x3715d4(0x300))['length'] === 0x0 ? (_0x50aed3[_0x3715d4(0x3db)](_0x3715d4(0x2bb) + _0x4f1831 + _0x3715d4(0x19a)), _0x50aed3['find'](_0x3715d4(0x300))[_0x3715d4(0x3db)](_0x3715d4(0x33e) + _0x3bbe46[_0x3715d4(0x277)] + _0x3715d4(0x2da)), _0x50aed3[_0x3715d4(0x316)]('div.volume_slider\x20input')[_0x3715d4(0x3b4)](_0x3715d4(0x3fe), _0x3715d4(0x341) + (_0x3bbe46[_0x3715d4(0x277)] * 0x64 + '%')), _0x50aed3[_0x3715d4(0x316)](_0x3715d4(0x185))['on'](_0x3715d4(0x356), function () {
                const _0x3a981b = _0x3715d4;
                var _0x50c355 = _0x57b339(this)[_0x3a981b(0x3d1)]() * 0x64 + '%';
                _0x3bbe46[_0x3a981b(0x277)] = _0x57b339(this)[_0x3a981b(0x3d1)](), GM_setValue(_0x3a981b(0x412), _0x57b339(this)[_0x3a981b(0x3d1)]()), _0x57b339(this)[_0x3a981b(0x3b4)](_0x3a981b(0x3fe), _0x3a981b(0x341) + _0x50c355), _0x351721['each'](function () {
                    const _0x3d4f73 = _0x3a981b;
                    _0x11b869('(' + _0x330da0 + ')', _0x3d4f73(0x2ad)), this[_0x3d4f73(0x440)] = _0x3bbe46[_0x3d4f73(0x277)];
                });
            }), _0x50aed3[_0x3715d4(0x316)](_0x3715d4(0x185))['on'](_0x3715d4(0x1a5), function () {
                const _0x2ee0f8 = _0x3715d4;
                var _0x29a389 = _0x3bbe46[_0x2ee0f8(0x277)] * 0x64 + '%';
                _0x57b339(this)['attr'](_0x2ee0f8(0x3fe), _0x2ee0f8(0x341) + _0x29a389), _0x57b339(this)['val'](_0x3bbe46[_0x2ee0f8(0x277)]), _0x351721[_0x2ee0f8(0x3e7)](function () {
                    const _0x414d02 = _0x2ee0f8;
                    _0x11b869('(' + _0x330da0 + ')', _0x414d02(0x2ad)), this[_0x414d02(0x440)] = _0x3bbe46['videoVolume'];
                });
            }), _0x50aed3[_0x3715d4(0x316)](_0x3715d4(0x300))['on'](_0x3715d4(0x1c1), function (_0x39e1d6) {
                const _0x4e618b = _0x3715d4;
                _0x39e1d6[_0x4e618b(0x17e)](), _0x39e1d6['preventDefault']();
            })) : _0x50aed3[_0x3715d4(0x316)](_0x3715d4(0x300))['remove']();
        }
        var _0x269fbe = null;
        function _0x5ecd36(_0x513039) {
            const _0x182439 = _0x3e3711;
            _0x81c3e(), _0x57b339('body')[_0x182439(0x3db)]('<div\x20id=\x22imageViewer\x22>\x0a\x20\x20\x20\x20\x09<div\x20id=\x22iv_header\x22>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22flex:1;\x22>Image\x20Viewer</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20style=\x22display:\x20flex;filter:\x20invert(1);gap:\x208px;margin-right:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_left\x22\x20style=\x22cursor:\x20pointer;\x22>' + _0x232083[_0x182439(0x2f5)] + _0x182439(0x358) + _0x232083[_0x182439(0x2f5)] + _0x182439(0x393) + _0x232083[_0x182439(0x3bc)] + _0x182439(0x2ba));
            const _0x5cc632 = _0x57b339('#imageViewer'), _0xe06aa2 = _0x57b339(_0x182439(0x2b1)), _0x67d821 = _0x57b339(_0x182439(0x318)), _0x1aa1f4 = _0x57b339(_0x182439(0x428)), _0x57d99a = _0x57b339(_0x182439(0x18e)), _0x495b29 = _0x57b339('#iv_close'), _0x160834 = _0x57b339(_0x182439(0x29b)), _0x596246 = _0x57b339(_0x182439(0x43b)), _0x1eff34 = _0x57b339('#rotate_right');
            _0x160834[_0x182439(0x3b4)]('src', _0x513039), _0x5cc632['css'](_0x182439(0x353), 'flex'), _0x67d821[_0x182439(0x281)]('transform-origin', _0x182439(0x287)), _0x67d821['css'](_0x182439(0x265), 'transform\x200.15s\x20ease'), _0x1aa1f4[_0x182439(0x281)](_0x182439(0x39a), _0x182439(0x2d7)), _0x1aa1f4[_0x182439(0x281)](_0x182439(0x265), _0x182439(0x307)), _0x67d821['css']('will-change', _0x182439(0x22d)), _0x1aa1f4[_0x182439(0x281)](_0x182439(0x2e3), _0x182439(0x22d));
            let _0x303900 = 0x0, _0x575a28 = 0x1, _0x148d5e = 0x0, _0x5b13a4 = 0x0, _0x2cbe52 = ![], _0x3d8912 = ![], _0x12bb7b, _0x430f9d;
            var _0x1b9441 = {
                'x': 0x0,
                'y': 0x0
            };
            _0x269fbe = setInterval(() => {
                const _0x312d8f = {
                    'x': _0x148d5e,
                    'y': _0x5b13a4
                };
                _0x312d8f['x'] !== _0x1b9441['x'] || _0x312d8f['y'] !== _0x1b9441['y'] ? _0x3d8912 = !![] : _0x3d8912 = ![], _0x1b9441 = _0x312d8f;
            }, 0x64), _0x160834['on']('load', () => {
                _0x148d5e = 0x0, _0x5b13a4 = 0x0, _0x2c32b4();
            }), _0x160834['on'](_0x182439(0x22f), _0x247659 => {
                _0x247659['preventDefault']();
            }), _0x160834['on'](_0x182439(0x1c1), _0xc6e694 => {
                const _0x15e393 = _0x182439;
                _0xc6e694[_0x15e393(0x196)](), _0xc6e694[_0x15e393(0x17e)](), !_0x3d8912 && (_0x575a28 <= 0x1 ? _0x4e8158(_0xc6e694, Math[_0x15e393(0x203)](Math[_0x15e393(0x26d)](0x1, _0x575a28 + 1.25), 0x5)) : (_0x575a28 = 0x1, _0x148d5e = 0x0, _0x5b13a4 = 0x0), _0x2c32b4());
            }), _0xe06aa2['on'](_0x182439(0x2ec), _0x5c0a0d => {
                const _0x3d79d2 = _0x182439;
                _0x5c0a0d[_0x3d79d2(0x196)](), _0x4e8158(_0x5c0a0d);
            }), _0x5cc632['on'](_0x182439(0x2ec), _0x20b96f => {
                _0x20b96f['preventDefault']();
            }), _0x160834['on'](_0x182439(0x249), _0x426b80 => {
                const _0x1f3eae = _0x182439;
                if (_0x575a28 == 0x1)
                    return;
                _0x2cbe52 = !![], _0x12bb7b = _0x426b80[_0x1f3eae(0x1b6)] - _0x148d5e, _0x430f9d = _0x426b80[_0x1f3eae(0x3e9)] - _0x5b13a4, _0x160834[_0x1f3eae(0x281)](_0x1f3eae(0x3d8), 'grabbing');
            }), _0x160834['on']('mouseup', () => {
                const _0x5b3a54 = _0x182439;
                if (_0x575a28 == 0x1)
                    return;
                _0x2cbe52 = ![], _0x160834['css'](_0x5b3a54(0x3d8), _0x5b3a54(0x27e));
            }), _0x596246['on']('click', function () {
                _0x303900 -= 0x5a, _0x2c32b4();
            }), _0x1eff34['on']('click', function () {
                _0x303900 += 0x5a, _0x2c32b4();
            }), _0x57b339(document)['on']('mousemove.igHelper', _0x35469c => {
                const _0x139da7 = _0x182439;
                if (!_0x2cbe52)
                    return;
                _0x35469c[_0x139da7(0x196)](), _0x148d5e = _0x35469c[_0x139da7(0x1b6)] - _0x12bb7b, _0x5b13a4 = _0x35469c[_0x139da7(0x3e9)] - _0x430f9d, _0x2c32b4();
            }), _0x5cc632['on'](_0x182439(0x1c1), () => {
                _0x81c3e();
            }), _0x495b29['on'](_0x182439(0x1c1), () => {
                _0x81c3e();
            }), _0x57d99a['on'](_0x182439(0x1c1), _0x29c4ca => {
                const _0x171cd9 = _0x182439;
                _0x29c4ca[_0x171cd9(0x196)](), _0x29c4ca['stopPropagation']();
            });
            function _0x2c32b4() {
                const _0x357565 = _0x182439;
                _0x67d821[_0x357565(0x281)]('transition', _0x3d8912 ? _0x357565(0x18b) : _0x357565(0x307)), _0x67d821[_0x357565(0x281)](_0x357565(0x22d), 'translate(' + _0x148d5e + _0x357565(0x2b7) + _0x5b13a4 + _0x357565(0x2b0) + _0x575a28 + ')'), _0x1aa1f4[_0x357565(0x281)](_0x357565(0x22d), _0x357565(0x33a) + _0x303900 + 'deg)'), _0x575a28 == 0x1 ? _0x160834[_0x357565(0x281)](_0x357565(0x3d8), 'zoom-in') : _0x160834[_0x357565(0x281)](_0x357565(0x3d8), 'grabbing');
            }
            function _0x4e8158(_0x26c1e7, _0x694eab) {
                const _0x34646f = _0x182439;
                _0x26c1e7['preventDefault']();
                let _0x4f05d5 = _0x575a28;
                if (_0x694eab == null) {
                    let _0x341f3c = 0.1, _0x135292 = _0x26c1e7[_0x34646f(0x435)]['deltaY'] < 0x0 ? 0x1 : -0x1;
                    _0x575a28 = Math[_0x34646f(0x203)](0x5, Math['max'](0x1, _0x575a28 + _0x135292 * _0x341f3c * _0x575a28));
                } else
                    _0x575a28 = _0x694eab;
                let _0xdbf4a9 = _0xe06aa2[0x0]['getBoundingClientRect'](), _0x4dca7c = _0x26c1e7['clientX'] - _0xdbf4a9[_0x34646f(0x25a)], _0x584786 = _0x26c1e7[_0x34646f(0x3f5)] - _0xdbf4a9[_0x34646f(0x271)], _0xaa7641 = (_0x4dca7c - _0x148d5e) / _0x4f05d5, _0x3e91ad = (_0x584786 - _0x5b13a4) / _0x4f05d5;
                _0x148d5e = -_0xaa7641 * _0x575a28 + _0x4dca7c, _0x5b13a4 = -_0x3e91ad * _0x575a28 + _0x584786, _0x2c32b4();
            }
        }
        function _0x81c3e() {
            const _0x1d46df = _0x3e3711;
            clearInterval(_0x269fbe), _0x57b339(_0x1d46df(0x444))['remove'](), _0x57b339(document)[_0x1d46df(0x2f2)](_0x1d46df(0x322));
        }
        function _0x28c0f0() {
            const _0x267b32 = _0x3e3711;
            var _0x5b1e45 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': 'Wololo!\x20New\x20version\x20released.',
                        'NOTICE_UPDATE_CONTENT': _0x267b32(0x34f),
                        'CHECK_UPDATE': _0x267b32(0x2f9),
                        'CHECK_UPDATE_MENU': _0x267b32(0x252),
                        'CHECK_UPDATE_INTRO': 'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
                        'RELOAD_SCRIPT': 'Reload\x20Script',
                        'DONATE': 'Donate',
                        'FEEDBACK': _0x267b32(0x364),
                        'IMAGE_VIEWER': _0x267b32(0x34c),
                        'NEW_TAB': _0x267b32(0x372),
                        'SHOW_DOM_TREE': _0x267b32(0x3cb),
                        'SELECT_AND_COPY': _0x267b32(0x207),
                        'DOWNLOAD_DOM_TREE': _0x267b32(0x3c0),
                        'REPORT_GITHUB': _0x267b32(0x204),
                        'REPORT_DISCORD': _0x267b32(0x3df),
                        'REPORT_FORK': 'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
                        'DEBUG': _0x267b32(0x408),
                        'CLOSE': _0x267b32(0x31a),
                        'ALL_CHECK': _0x267b32(0x39e),
                        'BATCH_DOWNLOAD_SELECTED': _0x267b32(0x387),
                        'BATCH_DOWNLOAD_DIRECT': _0x267b32(0x293),
                        'IMG': 'Image',
                        'VID': _0x267b32(0x282),
                        'DW': _0x267b32(0x2d3),
                        'DW_ALL': 'Download\x20All\x20Resources',
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': _0x267b32(0x219),
                        'LOAD_BLOB_MULTIPLE': _0x267b32(0x414),
                        'LOAD_BLOB_RELOAD': _0x267b32(0x2b6),
                        'NO_CHECK_RESOURCE': 'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
                        'NO_VID_URL': _0x267b32(0x191),
                        'SETTING': _0x267b32(0x205),
                        'AUTO_RENAME': _0x267b32(0x18d),
                        'RENAME_SHORTCODE': _0x267b32(0x394),
                        'RENAME_PUBLISH_DATE': 'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
                        'RENAME_LOCATE_DATE': _0x267b32(0x2e4),
                        'DISABLE_VIDEO_LOOPING': _0x267b32(0x3a8),
                        'HTML5_VIDEO_CONTROL': _0x267b32(0x2fd),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x267b32(0x1ff),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': _0x267b32(0x2dc),
                        'DIRECT_DOWNLOAD_ALL': 'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
                        'MODIFY_VIDEO_VOLUME': _0x267b32(0x1e4),
                        'MODIFY_RESOURCE_EXIF': _0x267b32(0x1c3),
                        'SCROLL_BUTTON': 'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
                        'FORCE_RESOURCE_VIA_MEDIA': _0x267b32(0x2d1),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x267b32(0x3a5),
                        'AUTO_RENAME_INTRO': _0x267b32(0x21f),
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': _0x267b32(0x17a),
                        'RENAME_LOCATE_DATE_INTRO': _0x267b32(0x411),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x267b32(0x311),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x267b32(0x38e),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x267b32(0x217),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x267b32(0x36c),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x267b32(0x42b),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x267b32(0x209),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x267b32(0x305),
                        'SCROLL_BUTTON_INTRO': _0x267b32(0x397),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x267b32(0x2eb),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x267b32(0x30e),
                        'SKIP_VIEW_STORY_CONFIRM': 'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': 'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
                        'MODIFY_RESOURCE_EXIF_INTRO': _0x267b32(0x349)
                    }
                }, _0x2900f3 = Object['assign']({}, _0x5b1e45, _0x3bbe46[_0x267b32(0x229)]), _0x427ade = Object['keys'](_0x2900f3)['sort']()[_0x267b32(0x1ea)]((_0x573fde, _0x5a4c2c) => {
                    return _0x573fde[_0x5a4c2c] = _0x2900f3[_0x5a4c2c], _0x573fde;
                }, {});
            return _0x427ade;
        }
        async function _0x344229(_0x561e26) {
            return new Promise((_0x21894c, _0x3ce790) => {
                const _0x4e2c6f = a0_0xc123;
                GM_xmlhttpRequest({
                    'method': _0x4e2c6f(0x34e),
                    'url': _0x4e2c6f(0x237) + _0x561e26 + '.json',
                    'onload': function (_0x5a7f6a) {
                        const _0x342ff6 = _0x4e2c6f;
                        try {
                            let _0x24d398 = JSON[_0x342ff6(0x3b8)](_0x5a7f6a[_0x342ff6(0x1ac)]);
                            _0x21894c(_0x24d398);
                        } catch (_0x5a467a) {
                            _0x3ce790(_0x5a467a);
                        }
                    },
                    'onerror': function (_0x55d03a) {
                        const _0x991689 = _0x4e2c6f;
                        _0x11b869(_0x991689(0x2c2), _0x991689(0x38f), _0x55d03a), _0x3ce790(_0x55d03a);
                    }
                });
            });
        }
        function _0x476c5e(_0xf0e2b) {
            const _0x290151 = _0x3e3711, _0x4d3d0c = _0x28c0f0();
            return _0x4d3d0c[_0x3bbe46[_0x290151(0x445)]] != undefined && _0x4d3d0c[_0x3bbe46['lang']][_0xf0e2b] != undefined ? _0x4d3d0c[_0x3bbe46[_0x290151(0x445)]][_0xf0e2b] : _0x4d3d0c[_0x290151(0x289)][_0xf0e2b];
        }
        function _0x297ec9() {
            const _0x27124b = _0x3e3711;
            _0x57b339(_0x27124b(0x1f9))[_0x27124b(0x3e7)](function () {
                const _0x470ae2 = _0x27124b;
                _0x57b339(this)['text'](_0x476c5e(_0x57b339(this)[_0x470ae2(0x3b4)](_0x470ae2(0x278))));
            }), _0x57b339(_0x27124b(0x18a))[_0x27124b(0x3e7)](function () {
                const _0x589c6b = _0x27124b;
                _0x57b339(this)[_0x589c6b(0x3b4)](_0x589c6b(0x24f), _0x476c5e(_0x57b339(this)['attr']('data-ih-locale-title')));
            });
        }
        _0x57b339(function () {
            const _0x205993 = _0x3e3711;
            function _0x271e23(_0x574c2b) {
                const _0x3a59ac = a0_0xc123;
                var _0x4bfb82 = [];
                for (var _0x202a1c of _0x574c2b) {
                    _0x4bfb82[_0x3a59ac(0x253)]({
                        'tagName': _0x202a1c['tagName'],
                        'id': _0x202a1c['id'],
                        'className': _0x202a1c[_0x3a59ac(0x43f)]
                    });
                }
                return _0x4bfb82;
            }
            function _0x44f107() {
                const _0x33d672 = a0_0xc123;
                let _0x4012ce = _0x57b339(_0x33d672(0x1f4))[0x0];
                var _0x479aad = '';
                _0x3bbe46[_0x33d672(0x3d2)][_0x33d672(0x1ec)](_0xb7d453 => {
                    var _0x2936f8 = JSON['stringify'](_0xb7d453['content'], function (_0x9bdc0a, _0x4e8948) {
                        const _0x228190 = a0_0xc123;
                        if (Array[_0x228190(0x1cd)](this)) {
                            if (typeof _0x4e8948 === _0x228190(0x42d) && _0x4e8948 instanceof jQuery)
                                return _0x271e23(_0x4e8948);
                            return _0x4e8948;
                        } else
                            return _0x4e8948;
                    }, '\x09');
                    _0x479aad += new Date(_0xb7d453['time'])['toISOString']() + ':\x20' + _0x2936f8 + '\x0a';
                }), _0x57b339(_0x33d672(0x2c7))[_0x33d672(0x225)](_0x33d672(0x1a9) + _0x479aad + _0x33d672(0x3b7) + location[_0x33d672(0x2d4)] + _0x33d672(0x1c4) + _0x4012ce[_0x33d672(0x425)]);
            }
            _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x1c1), _0x205993(0x3fd), function () {
                _0x44f107();
            }), _0x57b339('body')['on']('click', '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x518231 = _0x205993;
                _0x57b339(_0x518231(0x2c7))[_0x518231(0x242)](), document[_0x518231(0x28b)](_0x518231(0x436));
            }), _0x57b339('body')['on'](_0x205993(0x1c1), _0x205993(0x195), function () {
                const _0x40fbfa = _0x205993;
                _0x57b339(_0x40fbfa(0x2c7))[_0x40fbfa(0x225)]()[_0x40fbfa(0x189)] === 0x0 && _0x44f107();
                var _0x347fbc = _0x57b339(_0x40fbfa(0x2c7))[_0x40fbfa(0x225)](), _0x256635 = document['createElement']('a'), _0x4bc5e4 = new Blob([_0x347fbc], { 'type': _0x40fbfa(0x31f) });
                _0x256635[_0x40fbfa(0x3e8)] = URL['createObjectURL'](_0x4bc5e4), _0x256635[_0x40fbfa(0x251)] = _0x40fbfa(0x325) + new Date()['getTime']() + '.txt', document[_0x40fbfa(0x39d)]['appendChild'](_0x256635), _0x256635[_0x40fbfa(0x1c1)](), _0x256635[_0x40fbfa(0x231)]();
            }), _0x57b339('body')['on'](_0x205993(0x1c1), _0x205993(0x206), function () {
                const _0x266e97 = _0x205993;
                _0x57b339(this)[_0x266e97(0x18c)](_0x266e97(0x315))[_0x266e97(0x189)] > 0x0 ? _0x57b339(this)[_0x266e97(0x18c)]('#tempWrapper')[_0x266e97(0x36a)](0xfa, function () {
                    const _0x339a59 = _0x266e97;
                    _0x57b339(this)[_0x339a59(0x231)]();
                }) : _0x57b339(_0x266e97(0x3f8))[_0x266e97(0x231)]();
            }), _0x57b339(window)['on'](_0x205993(0x429), function (_0x21bc49) {
                const _0x1d3bc8 = _0x205993;
                _0x21bc49[_0x1d3bc8(0x190)] == '81' && _0x21bc49[_0x1d3bc8(0x1aa)] && (_0x57b339('.IG_POPUP_DIG')[_0x1d3bc8(0x231)](), _0x21bc49[_0x1d3bc8(0x196)]()), _0x21bc49[_0x1d3bc8(0x190)] == '87' && _0x21bc49[_0x1d3bc8(0x1aa)] && (_0x437e35(), _0x21bc49[_0x1d3bc8(0x196)]()), _0x21bc49[_0x1d3bc8(0x190)] == '90' && _0x21bc49[_0x1d3bc8(0x1aa)] && (_0x260537(), _0x21bc49[_0x1d3bc8(0x196)]()), _0x21bc49[_0x1d3bc8(0x190)] == '82' && _0x21bc49[_0x1d3bc8(0x1aa)] && (_0x8d211b(), _0x21bc49[_0x1d3bc8(0x196)]()), _0x21bc49[_0x1d3bc8(0x190)] == '83' && _0x21bc49['altKey'] && (location[_0x1d3bc8(0x3e8)][_0x1d3bc8(0x3d9)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x57b339(_0x1d3bc8(0x3b1))[_0x1d3bc8(0x189)] > 0x0 && _0x57b339(_0x1d3bc8(0x3b1))?.[_0x1d3bc8(0x321)](_0x1d3bc8(0x1c1)), location[_0x1d3bc8(0x3e8)][_0x1d3bc8(0x3d9)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x57b339(_0x1d3bc8(0x1a2))[_0x1d3bc8(0x189)] > 0x0 && _0x57b339(_0x1d3bc8(0x1a2))?.[_0x1d3bc8(0x321)]('click'), _0x21bc49[_0x1d3bc8(0x196)]());
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x2cc), _0x205993(0x280), function () {
                const _0x136bcd = _0x205993;
                var _0x432dd2 = _0x57b339(this)[_0x136bcd(0x3b4)]('id');
                if (_0x432dd2 && _0x313546[_0x432dd2] !== undefined) {
                    let _0x370a91 = _0x57b339(this)['prop'](_0x136bcd(0x1af));
                    GM_setValue(_0x432dd2, _0x370a91), _0x313546[_0x432dd2] = _0x370a91, console[_0x136bcd(0x19c)](_0x136bcd(0x1cf), _0x432dd2, _0x370a91);
                }
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x1c1), _0x205993(0x1d2), function (_0x1e4cc4) {
                const _0x465f8a = _0x205993;
                _0x57b339(this)['find'](_0x465f8a(0x315))[_0x465f8a(0x189)] > 0x0 && _0x1e4cc4[_0x465f8a(0x196)]();
            }), _0x57b339(_0x205993(0x39d))['on']('change', _0x205993(0x233), function () {
                const _0xd0c795 = _0x205993;
                let _0x475c37 = _0x57b339(this)[_0xd0c795(0x3d1)]();
                _0x57b339(this)[_0xd0c795(0x3b4)](_0xd0c795(0x244)) == 'range' ? _0x57b339(this)[_0xd0c795(0x1f2)]()[_0xd0c795(0x3d1)](_0x475c37) : _0x57b339(this)[_0xd0c795(0x320)]()['val'](_0x475c37), _0x475c37 >= 0x0 && _0x475c37 <= 0x1 && (_0x3bbe46[_0xd0c795(0x277)] = _0x475c37, GM_setValue(_0xd0c795(0x412), _0x475c37));
            }), _0x57b339('body')['on'](_0x205993(0x356), _0x205993(0x233), function () {
                const _0x3d8853 = _0x205993;
                if (_0x57b339(this)[_0x3d8853(0x3b4)](_0x3d8853(0x244)) == 'range') {
                    let _0xf6614 = _0x57b339(this)[_0x3d8853(0x3d1)]();
                    _0x57b339(this)[_0x3d8853(0x1f2)]()[_0x3d8853(0x3d1)](_0xf6614);
                } else {
                    let _0x480af9 = _0x57b339(this)[_0x3d8853(0x3d1)]();
                    _0x480af9 >= 0x0 && _0x480af9 <= 0x1 ? _0x57b339(this)[_0x3d8853(0x320)]()[_0x3d8853(0x3d1)](_0x480af9) : _0x480af9 < 0x0 ? _0x57b339(this)[_0x3d8853(0x3d1)](0x0) : _0x57b339(this)[_0x3d8853(0x3d1)](0x1);
                }
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x356), _0x205993(0x301), function () {
                const _0x101b06 = _0x205993;
                GM_setValue(_0x101b06(0x1c8), _0x57b339(this)[_0x101b06(0x3d1)]()), _0x3bbe46[_0x101b06(0x32a)] = _0x57b339(this)[_0x101b06(0x3d1)]();
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x1c1), _0x205993(0x2dd), function (_0x2089ba) {
                const _0x1d564b = _0x205993;
                _0x2089ba[_0x1d564b(0x196)](), _0xb19f52(this);
            }), _0x57b339('body')['on'](_0x205993(0x1c1), _0x205993(0x1b5), function () {
                const _0x15cb2e = _0x205993;
                if (_0x313546[_0x15cb2e(0x26f)] && _0x313546[_0x15cb2e(0x197)])
                    _0xb19f52(_0x57b339(this)['parent']()[_0x15cb2e(0x312)]('a')['first']()[0x0], !![]);
                else {
                    var _0x109675 = new URL(_0x57b339(this)[_0x15cb2e(0x18c)]()[_0x15cb2e(0x312)]('a')[_0x15cb2e(0x3b4)](_0x15cb2e(0x40c)));
                    _0x109675[_0x15cb2e(0x260)] = _0x15cb2e(0x1d8), _0x13e261(_0x109675[_0x15cb2e(0x3e8)]);
                }
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x1c1), _0x205993(0x37e), function () {
                const _0x3587ff = _0x205993;
                let _0x4cbffd = new Date()[_0x3587ff(0x3bb)]();
                _0x313546['RENAME_PUBLISH_DATE'] && _0x57b339(this)[_0x3587ff(0x18c)]()[_0x3587ff(0x312)]('a')['attr']('datetime') && (_0x4cbffd = _0x57b339(this)[_0x3587ff(0x18c)]()[_0x3587ff(0x312)]('a')[_0x3587ff(0x3b4)]('datetime'));
                let _0x3ad5f1 = _0x57b339(this)['parent']()[_0x3587ff(0x312)]('a')[_0x3587ff(0x3b4)](_0x3587ff(0x22e)) ?? _0x57b339(_0x3587ff(0x1be))[_0x3587ff(0x225)]();
                _0x3d1233(_0x57b339(this)[_0x3587ff(0x18c)]()[_0x3587ff(0x312)]('a')[_0x3587ff(0x316)](_0x3587ff(0x1f7))[_0x3587ff(0x3ef)]()[_0x3587ff(0x3b4)](_0x3587ff(0x27a)), _0x57b339(this)[_0x3587ff(0x18c)]()[_0x3587ff(0x312)]('a')[_0x3587ff(0x3b4)](_0x3587ff(0x1b0)), _0x3587ff(0x3cf), _0x4cbffd, _0x3587ff(0x43a), _0x3ad5f1);
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x1c1), _0x205993(0x3b1), function () {
                _0x396f59(!![]);
            }), _0x57b339(_0x205993(0x39d))['on']('click', _0x205993(0x2d6), function () {
                _0x5e6485();
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x1c1), _0x205993(0x27b), function (_0x1f10c1) {
                const _0x523c70 = _0x205993;
                _0x1f10c1[_0x523c70(0x196)](), _0x396f59(!![], !![], !![]);
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x1c1), _0x205993(0x419), function () {
                _0x48e858(!![]);
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x1c1), _0x205993(0x25b), function (_0x16dba5) {
                const _0x413782 = _0x205993;
                _0x16dba5[_0x413782(0x17e)](), _0x242bcd(!![]);
            }), _0x57b339('body')['on']('click', _0x205993(0x1a2), function () {
                _0x1fc183(!![]);
            }), _0x57b339(_0x205993(0x39d))['on']('click', _0x205993(0x30c), function () {
                _0x45d295();
            }), _0x57b339('body')['on'](_0x205993(0x1c1), _0x205993(0x2b8), function (_0x3980cf) {
                _0x3980cf['preventDefault'](), _0x1fc183(!![], !![]);
            }), _0x57b339('body')['on'](_0x205993(0x1c1), _0x205993(0x28a), function () {
                _0x4fd209(!![]);
            }), _0x57b339(_0x205993(0x39d))['on']('click', _0x205993(0x1fd), function () {
                _0x591a9d(!![], !![]);
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x1c1), _0x205993(0x30f), function () {
                _0x591a9d(!![], !![], !![]);
            }), _0x57b339('body')['on'](_0x205993(0x1c1), '.IG_REELS_THUMBNAIL', function () {
                _0x591a9d(!![], ![]);
            }), _0x57b339('body')['on'](_0x205993(0x249), _0x205993(0x21b), function (_0x200928) {
                const _0x1bd7bd = _0x205993;
                if (_0x200928[_0x1bd7bd(0x190)] === 0x3 || _0x200928[_0x1bd7bd(0x190)] === 0x2) {
                    if (location[_0x1bd7bd(0x3e8)] === _0x1bd7bd(0x1ab) && _0x313546['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0x200928[_0x1bd7bd(0x196)]();
                        if (_0x57b339(this)[_0x1bd7bd(0x316)](_0x1bd7bd(0x286))['length'] > 0x0) {
                            const _0x4d5950 = 'https://www.instagram.com/' + _0x57b339(this)[_0x1bd7bd(0x312)](_0x1bd7bd(0x424))[_0x1bd7bd(0x3a1)]()[_0x1bd7bd(0x225)]();
                            _0x200928[_0x1bd7bd(0x190)] === 0x2 ? GM_openInTab(_0x4d5950) : location['href'] = _0x4d5950;
                        }
                    }
                }
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x2cc), _0x205993(0x352), function () {
                const _0x26c3b6 = _0x205993;
                var _0x3eda3b = _0x57b339(this)[_0x26c3b6(0x316)](_0x26c3b6(0x356))['prop'](_0x26c3b6(0x1af));
                _0x57b339(_0x26c3b6(0x1d4))['each'](function () {
                    _0x57b339(this)['prop']('checked', _0x3eda3b);
                });
            }), _0x57b339(_0x205993(0x39d))['on'](_0x205993(0x2cc), _0x205993(0x1d4), function () {
                const _0x4df6de = _0x205993;
                var _0xe6dcc8 = _0x57b339(_0x4df6de(0x32e))['length'], _0x2d4aee = _0x57b339(_0x4df6de(0x1d4))[_0x4df6de(0x189)];
                _0x57b339(_0x4df6de(0x352))['find'](_0x4df6de(0x356))['prop'](_0x4df6de(0x1af), _0xe6dcc8 == _0x2d4aee);
            }), _0x57b339(_0x205993(0x39d))['on']('click', '.IG_POPUP_DIG_TITLE\x20#batch_download_selected', function () {
                const _0x306b36 = _0x205993;
                let _0x58870c = 0x0;
                _0x57b339(_0x306b36(0x308))[_0x306b36(0x3e7)](function () {
                    const _0x506469 = _0x306b36;
                    _0x57b339(this)['prev']()[_0x506469(0x312)](_0x506469(0x356))[_0x506469(0x2ce)](_0x506469(0x1af)) && (_0x57b339(this)[_0x506469(0x321)](_0x506469(0x1c1)), _0x58870c++);
                }), _0x58870c == 0x0 && alert(_0x476c5e(_0x306b36(0x1f1)));
            }), _0x57b339('body')['on'](_0x205993(0x2cc), '.IG_POPUP_DIG_TITLE\x20#langSelect', function () {
                const _0x2ce7f7 = _0x205993;
                GM_setValue(_0x2ce7f7(0x445), _0x57b339(this)[_0x2ce7f7(0x3d1)]()), _0x3bbe46[_0x2ce7f7(0x445)] = _0x57b339(this)[_0x2ce7f7(0x3d1)](), _0x3bbe46[_0x2ce7f7(0x445)]?.['startsWith']('en') || _0x3bbe46[_0x2ce7f7(0x229)][_0x3bbe46[_0x2ce7f7(0x445)]] != null ? (_0x297ec9(), _0x1b2d90()) : _0x344229(_0x3bbe46[_0x2ce7f7(0x445)])[_0x2ce7f7(0x1f6)](_0x216af4 => {
                    _0x3bbe46['locale'][_0x3bbe46['lang']] = _0x216af4, _0x297ec9(), _0x1b2d90();
                })['catch'](_0x11b24e => {
                    const _0x128d40 = _0x2ce7f7;
                    console[_0x128d40(0x410)]('getTranslationText\x20catch\x20error:', _0x11b24e);
                });
            }), _0x57b339('body')['on'](_0x205993(0x1c1), '.IG_POPUP_DIG_TITLE\x20#batch_download_direct', function () {
                const _0x263f4b = _0x205993;
                _0x57b339(_0x263f4b(0x308))[_0x263f4b(0x3e7)](function () {
                    const _0x2357e7 = _0x263f4b;
                    _0x57b339(this)[_0x2357e7(0x321)](_0x2357e7(0x1c1));
                });
            });
            const _0x2eeb26 = new MutationObserver(_0x21b5bc => {
                const _0x491a79 = _0x205993;
                for (const _0x2d0c56 of _0x21b5bc) {
                    _0x2d0c56['type'] === _0x491a79(0x399) && _0x2d0c56[_0x491a79(0x37f)][_0x491a79(0x1ec)](_0x26cd2e => {
                        const _0x3e7942 = _0x491a79, _0x2d88f4 = _0x57b339(_0x26cd2e)['find'](_0x3e7942(0x266));
                        if (location[_0x3e7942(0x2d4)][_0x3e7942(0x379)](_0x3e7942(0x2ff))) {
                            if (_0x57b339(_0x26cd2e)[_0x3e7942(0x3b4)](_0x3e7942(0x3ee)) == null && _0x57b339(_0x26cd2e)[_0x3e7942(0x3b4)](_0x3e7942(0x426)) == null && _0x26cd2e[_0x3e7942(0x276)] === _0x3e7942(0x1bb)) {
                                var _0x424514 = _0x57b339(_0x26cd2e)[_0x3e7942(0x316)](_0x3e7942(0x26a));
                                let _0x3d9293 = _0x424514?.[_0x3e7942(0x3b4)](_0x3e7942(0x24f));
                                _0x3d9293 != null && _0x424514[_0x3e7942(0x225)](_0x3d9293);
                            }
                        }
                        if (_0x2d88f4[_0x3e7942(0x189)] > 0x0) {
                            _0x313546['MODIFY_VIDEO_VOLUME'] && _0x2d88f4[_0x3e7942(0x3e7)](function () {
                                const _0xd42b0a = _0x3e7942;
                                _0x57b339(this)['on'](_0xd42b0a(0x1b7), function () {
                                    const _0x192093 = _0xd42b0a;
                                    !_0x57b339(this)[_0x192093(0x36d)](_0x192093(0x35b)) && (_0x57b339(this)[_0x192093(0x3b4)]('data-modify', !![]), this['volume'] = _0x3bbe46[_0x192093(0x277)], _0x11b869(_0x192093(0x255)));
                                });
                            });
                            if (location[_0x3e7942(0x2d4)][_0x3e7942(0x3d9)](/^(\/stories\/)/ig)) {
                                const _0x36ac41 = location[_0x3e7942(0x2d4)][_0x3e7942(0x3d9)](/^(\/stories\/highlights\/)/ig) != null, _0x4db2c3 = _0x36ac41 ? _0x3e7942(0x433) : _0x3e7942(0x328);
                                _0x2d88f4[_0x3e7942(0x3e7)](function () {
                                    const _0x29fe16 = _0x3e7942;
                                    _0x57b339(this)['on']('timeupdate', function () {
                                        const _0x4b9725 = a0_0xc123;
                                        if (!_0x57b339(this)['data']('modify-thumbnail')) {
                                            let _0x7cc081 = _0x57b339(this);
                                            _0x7cc081[_0x4b9725(0x2d0)](_0x4b9725(0x342))['filter'](function () {
                                                const _0x41c7f8 = _0x4b9725;
                                                return _0x57b339(this)['width']() == _0x7cc081[_0x41c7f8(0x1c6)]();
                                            })[_0x4b9725(0x316)]('.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL')['length'] === 0x0 ? (_0x57b339(this)['attr'](_0x4b9725(0x1db), !![]), _0x36ac41 ? _0x4fd209(![]) : _0x48e858(![]), _0x11b869('(' + _0x4db2c3 + ')', _0x4b9725(0x3f7))) : (_0x57b339(this)[_0x4b9725(0x3b4)](_0x4b9725(0x1db), !![]), _0x11b869('(' + _0x4db2c3 + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0x421268 = _0x57b339(this);
                                    if (_0x313546['HTML5_VIDEO_CONTROL']) {
                                        if (!_0x421268['data']('controls')) {
                                            _0x11b869('(' + _0x4db2c3 + ')', _0x29fe16(0x303));
                                            _0x313546['MODIFY_VIDEO_VOLUME'] && (this['volume'] = _0x3bbe46['videoVolume'], _0x421268['on'](_0x29fe16(0x41b), function () {
                                                const _0x1f0b49 = _0x29fe16;
                                                this['volume'] = _0x3bbe46[_0x1f0b49(0x277)];
                                            }));
                                            let _0x473fba = _0x421268['parents'](_0x29fe16(0x424))['filter'](function () {
                                                    const _0x42b141 = _0x29fe16;
                                                    return _0x57b339(this)[_0x42b141(0x3b4)](_0x42b141(0x378)) == null && _0x57b339(this)[_0x42b141(0x3b4)]('style') == null;
                                                })[_0x29fe16(0x3ef)](), _0x46a642 = _0x473fba['next']();
                                            _0x46a642['hide']();
                                            let _0x289734 = _0x473fba['find'](_0x29fe16(0x395));
                                            _0x289734[_0x29fe16(0x313)]();
                                            const _0xe5f80f = function (_0x314029) {
                                                const _0x4b271a = _0x29fe16;
                                                _0x314029[_0x4b271a(0x196)](), _0x421268[_0x4b271a(0x281)](_0x4b271a(0x32b), '2'), _0x421268[_0x4b271a(0x3b4)](_0x4b271a(0x3d5), !![]), _0x289734[_0x4b271a(0x313)](), _0x46a642[_0x4b271a(0x313)](), _0x146a3e(_0x421268, _0x421268[_0x4b271a(0x2d0)](_0x4b271a(0x342))[_0x4b271a(0x235)](function () {
                                                    const _0x7da879 = _0x4b271a;
                                                    return _0x57b339(this)['width']() == _0x421268[_0x7da879(0x1c6)]();
                                                })[_0x4b271a(0x3ef)](), _0x4db2c3, _0x4b271a(0x38d));
                                            };
                                            _0x421268['parent']()['find'](_0x29fe16(0x3ac))['on'](_0x29fe16(0x1de), _0xe5f80f), _0x289734['on'](_0x29fe16(0x1de), _0xe5f80f), _0x46a642['on']('contextmenu', _0xe5f80f), _0x421268['on'](_0x29fe16(0x1de), function (_0x5aaaa1) {
                                                const _0x57578d = _0x29fe16;
                                                _0x5aaaa1[_0x57578d(0x196)](), _0x421268[_0x57578d(0x281)](_0x57578d(0x32b), '-1'), _0x421268[_0x57578d(0x362)](_0x57578d(0x3d5)), _0x46a642[_0x57578d(0x198)](), _0x289734[_0x57578d(0x198)](), _0x146a3e(_0x421268, _0x421268[_0x57578d(0x2d0)]('div[style][class]')[_0x57578d(0x235)](function () {
                                                    const _0x2255a5 = _0x57578d;
                                                    return _0x57b339(this)[_0x2255a5(0x1c6)]() == _0x421268[_0x2255a5(0x1c6)]();
                                                })[_0x57578d(0x3ef)](), _0x4db2c3, _0x57578d(0x38d));
                                            }), _0x421268['on']('volumechange', function () {
                                                const _0x295148 = _0x29fe16;
                                                let _0x1d36ff = _0x473fba['parent']()[_0x295148(0x316)](_0x295148(0x3eb))[_0x295148(0x2d0)](_0x295148(0x3c3))[_0x295148(0x3ef)]();
                                                var _0x4f0b30 = _0x1d36ff['find'](_0x295148(0x330))[_0x295148(0x189)] === 0x0;
                                                this[_0x295148(0x409)] != _0x4f0b30 && (this[_0x295148(0x440)] = _0x3bbe46[_0x295148(0x277)], _0x1d36ff?.[_0x295148(0x321)]('click')), _0x57b339(this)['attr'](_0x295148(0x2ea)) && (_0x3bbe46[_0x295148(0x277)] = this[_0x295148(0x440)], GM_setValue(_0x295148(0x412), this[_0x295148(0x440)])), this[_0x295148(0x440)] == _0x3bbe46[_0x295148(0x277)] && _0x57b339(this)[_0x295148(0x3b4)](_0x295148(0x2ea), !![]);
                                            }), _0x421268[_0x29fe16(0x281)](_0x29fe16(0x1d1), 'absolute'), _0x421268[_0x29fe16(0x281)](_0x29fe16(0x32b), '2'), _0x421268[_0x29fe16(0x3b4)](_0x29fe16(0x343), !![]), _0x421268[_0x29fe16(0x3b4)]('controls', !![]);
                                        }
                                    } else
                                        _0x146a3e(_0x421268, _0x421268[_0x29fe16(0x2d0)]('div[style][class]')[_0x29fe16(0x235)](function () {
                                            const _0x228eab = _0x29fe16;
                                            return _0x57b339(this)[_0x228eab(0x1c6)]() == _0x421268[_0x228eab(0x1c6)]();
                                        })['first'](), _0x4db2c3, _0x29fe16(0x38d));
                                });
                            }
                        }
                    });
                }
            });
            _0x2eeb26[_0x205993(0x33f)](_0x57b339('div[id^=\x22mount\x22]')[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x495e() {
    const _0x1cf29a = [
        'EXIF',
        '#iv_image',
        '/followers/',
        'body\x20>\x20div\x20section._ac0a',
        'getHours',
        'html',
        'updatenotification',
        '</div>',
        'data-name',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'setUint32',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'reels',
        'element',
        'pause',
        '\x22\x20title=\x22',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'getUserId()',
        'video\x20volume\x20changed\x20#slider',
        'img[referrerpolicy]',
        '1054009gZjALI',
        'px)\x20scale(',
        '#imageViewer\x20>\x20section',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY',
        '\x22]\x20span',
        'div\x20>\x20ul\x20li._acaz',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'px,\x20',
        '.IG_DWHINEWTAB',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        '</div>\x0a\x20\x20\x20\x20\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_transform\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22iv_rotate\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22iv_image\x22\x20src=\x22\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20</div>',
        '<div\x20class=\x22volume_slider\x20',
        'a[href]\x20time[datetime]',
        'div:not([class]):not([style])',
        'getStories()',
        '</span>\x20',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        '\x22\x20class=\x22IG_DW_ALL_MAIN\x22>',
        'getTranslationText()',
        'Cannot\x20find\x20resource\x20url.',
        '#_SNLOAD',
        'reels_media',
        '\x22\x20class=\x22IG_IMAGE_VIEWER\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20textarea',
        'candidates',
        'remove-thumbnail',
        'toString',
        'byteLength',
        'change',
        'stories',
        'prop',
        'video_resources',
        'parents',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'data-type',
        'Download',
        'pathname',
        'NOPATH',
        '.IG_DWSTORY_ALL',
        'center',
        'slice',
        '</a></button>',
        '\x22\x20/></div>',
        '.IG_IMAGE_VIEWER',
        'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
        'a[data-needed=\x22direct\x22]',
        'div[class]',
        'getUserHighSizeProfile()',
        'sort',
        'hostname',
        'catch',
        'will-change',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'bottom',
        'getBlobMediaWithQueryID()',
        'image_versions2',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'https://i.instagram.com/api/v1/users/',
        'data-completed',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'wheel',
        '20bvmAWr',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20span',
        'catching\x20owner\x20name\x20from\x20shortcode:',
        'floor',
        'div[role=\x22presentation\x22]',
        'off',
        'avatar',
        'AUTO_RENAME',
        'TURN_DEG',
        'article',
        'mp4',
        'splice',
        'Checking\x20for\x20Script\x20Updates',
        'currentURL',
        'getUint16',
        '<div\x20class=\x22button_wrapper\x22>',
        'Display\x20HTML5\x20Video\x20Controller',
        'user',
        '/stories/highlights/',
        'div.volume_slider',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input#date_format',
        'x1iyjqo2',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        '2189945HazNGt',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'padEnd',
        'transform\x200.15s\x20ease',
        '.IG_POPUP_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'getUserIdWithAgent()',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'LOAD_BLOB_MULTIPLE',
        '.IG_DWHISTORY_ALL',
        'version',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        '.IG_REELS_NEWTAB',
        'data-remove-thumbnail',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'children',
        'hide',
        '.IG_NEWTAB_MAIN',
        '#tempWrapper',
        'find',
        'svg',
        '#iv_transform',
        'CHECK_UPDATE',
        'Close',
        '<div\x20class=\x22circle_wrapper\x22><circle></circle><span>',
        'firstStarted',
        'pageLoaded',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        'text/plain',
        'prev',
        'trigger',
        'mousemove.igHelper',
        '348RVyaHW',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'DOMTree-',
        'FORCE_FETCH_ALL_RESOURCES',
        'split',
        'story',
        'GraphImage',
        'fileRenameFormat',
        'z-index',
        '\x22\x20class=\x22IG_NEWTAB_MAIN\x22>',
        'THUMBNAIL_INTRO',
        '.IG_POPUP_DIG_BODY\x20.inner_box:checked',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'highlights',
        'GL_registerEventList',
        '_blank',
        '\x22\x20data-globalIndex=\x22',
        'onReadyMyDW()\x20Timer',
        '<label\x20class=\x22globalSettings',
        'absolute',
        'LOCALE_MANIFEST',
        'rotate(',
        'language',
        'getFullYear',
        'Preference\x20Settings',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'observe',
        'userLanguage',
        '--ig-track-progress:\x20',
        'div[style][class]',
        'data-controls',
        'BATCH_DOWNLOAD_DIRECT',
        '_ac3q',
        '.IG_DW_ALL_MAIN',
        'isProfile',
        'getMinutes',
        'Modify\x20the\x20EXIF\x20​​properties\x20of\x20the\x20image\x20resource\x20to\x20place\x20the\x20post\x20link\x20in\x20it.',
        '\x20child',
        'shortcode_media',
        'Open\x20Image\x20In\x20Viewer',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'GET',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><path\x20d=\x22M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z\x20M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5\x20L17,11z\x22/></g></svg>',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '.IG_POPUP_DIG_TITLE\x20.checkbox',
        'display',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        'isHighlightsStory',
        'input',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22rotate_right\x22\x20style=\x22transform:\x20scaleX(-1);cursor:\x20pointer;\x22>',
        'load',
        'taken_at_timestamp',
        'modify',
        'RELOAD_SCRIPT',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'getBlobMediaWithQuery()',
        'section\x20>\x20main[role=\x22main\x22]',
        'Not\x20a\x20JPEG\x20or\x20WEBP',
        'target',
        'removeAttr',
        'arrayBuffer',
        'Feedback',
        'after',
        'MODIFY_VIDEO_VOLUME',
        'replace',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'encode',
        'fadeOut',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'data',
        '/info/',
        'https://i.instagram.com/api/v1/media/',
        'SETTING',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'Open\x20in\x20New\x20Tab',
        'node',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        '<a\x20datetime=\x22',
        'stp',
        'div#splash-screen',
        'class',
        'startsWith',
        'set',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'data-snig',
        '.IG_POPUP_DIG_BODY\x20.videoThumbnail',
        'addedNodes',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'image/jpeg',
        'before',
        'query_hash',
        'edge_sidecar_to_children',
        '_INTRO',
        'XMP\x20',
        'Download\x20Selected\x20Resources',
        'relative',
        'VP8X',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        'script[type=\x22application/json\x22]',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'vertical',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'reject',
        '</a>',
        'finalUrl',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x09\x09<div\x20id=\x22iv_close\x22>',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'div[class][role=\x22button\x22]',
        'RIFF',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'getMonth',
        'childList',
        'transform-origin',
        'includes',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'body',
        'Select\x20All',
        'GL_dataCache',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex],\x20section\x20>\x20main[role=\x22main\x22]\x20>\x20div[class]',
        'last',
        'substr',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'taken_at',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'GL_repeat',
        'Disable\x20Video\x20Auto-looping',
        'FULLSCREEN',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'SHOW_DOM_TREE',
        'video\x20+\x20div',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'DOWNLOAD_ALL',
        'DOWNLOAD_DOM_TREE',
        'BATCH_DOWNLOAD_SELECTED',
        '.IG_DWSTORY',
        'x1s85apg',
        '3EgaOlA',
        'attr',
        '._acnb',
        '<input\x20value=\x22',
        '\x0a-----\x0a\x0aLocation:\x20',
        'parse',
        '6085118ZjZCBs',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        'getTime',
        'CLOSE',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'removeClass',
        'IMAGE_VIEWER',
        'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
        '.button_wrapper',
        '._acay',
        '[role=\x22button\x22]',
        'Found\x20insert\x20point',
        'display_url',
        '<div></div>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY',
        '.videoThumbnail',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'items',
        'Show\x20DOM\x20Tree',
        'srcset',
        '36xNplbZ',
        '\x22><div\x20class=\x22IG_POPUP_DIG_BG\x22></div><div\x20class=\x22IG_POPUP_DIG_MAIN\x22><div\x20class=\x22IG_POPUP_DIG_TITLE\x22></div><div\x20class=\x22IG_POPUP_DIG_BODY\x22></div></div></div>',
        'thumbnail',
        'logger\x20sliced',
        'val',
        'GL_logger',
        '.circle_wrapper\x20span',
        'get',
        'controls',
        '<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>',
        'textContent',
        'cursor',
        'match',
        'users',
        'append',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]',
        'matchAll',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        '</p>',
        'loop',
        'canDownload',
        'carousel_media:\x20undefined\x20username',
        'smooth',
        'Found\x20post\x20container',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'each',
        'href',
        'pageY',
        '\x22\x20class=\x22IG_DW_MAIN\x22>',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'G_CHECK_TIMESTAMP',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'data-ih-locale-title',
        'first',
        '\x22\x20datetime=\x22',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'isHomepage',
        'clientY',
        'createObjectURL',
        'Manually\x20inserting\x20thumbnail\x20button',
        '.IG_POPUP_DIG',
        'carousel_media',
        'IMG',
        '._acay\x20+\x20.x24i39r',
        'faild',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'style',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        '\x22\x20class=\x22videoThumbnail\x22>',
        'post',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        'getUint32',
        'is_video',
        '<div\x20class=\x22IG_POPUP_DIG_BTN\x22>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20input[id=\x22',
        '.xpgaw4o',
        'Debug\x20Window',
        'muted',
        '3148NVZXbQ',
        '\x20-</a>',
        'data-href',
        'RENAME_PUBLISH_DATE',
        'setUint16',
        'getPostOwner()',
        'error',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'G_VIDEO_VOLUME',
        'VID',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'div:last-child',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        '.IG_THUMBNAIL_MAIN',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        '.IG_DWSTORY_THUMBNAIL',
        'script',
        'loadstart',
        '52850fOLlvB',
        'x1lix1fw',
        'version:',
        'pointer',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'NO_VID_URL',
        'createMediaListDOM',
        'div',
        'innerHTML',
        'data-visualcompletion',
        'volumechange',
        '#iv_rotate',
        'keydown',
        '.IG_POPUP_DIG\x20#post_info',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        '\x22\x20class=\x22IG_THUMBNAIL_MAIN\x22>',
        'object',
        'disconnect',
        'downloadURL',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#1f1f1f\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7.34\x206.41L.86\x2012.9l6.49\x206.48\x206.49-6.48-6.5-6.49zM3.69\x2012.9l3.66-3.66L11\x2012.9l-3.66\x203.66-3.65-3.66zm15.67-6.26C17.61\x204.88\x2015.3\x204\x2013\x204V.76L8.76\x205\x2013\x209.24V6c1.79\x200\x203.58.68\x204.95\x202.05\x202.73\x202.73\x202.73\x207.17\x200\x209.9C16.58\x2019.32\x2014.79\x2020\x2013\x2020c-.97\x200-1.94-.21-2.84-.61l-1.49\x201.49C10.02\x2021.62\x2011.51\x2022\x2013\x2022c2.3\x200\x204.61-.88\x206.36-2.64\x203.52-3.51\x203.52-9.21\x200-12.72z\x22/></svg>',
        'highlight',
        'REPORT_GITHUB',
        'originalEvent',
        'copy',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><g><rect\x20fill=\x22none\x22\x20height=\x2224\x22\x20width=\x2224\x22/></g><g><g><polygon\x20points=\x2218,6.41\x2016.59,5\x2012,9.58\x207.41,5\x206,6.41\x2012,12.41\x22/><polygon\x20points=\x2218,13\x2016.59,11.59\x2012,16.17\x207.41,11.59\x206,13\x2012,19\x22/></g></g></svg>',
        'https://www.instagram.com/reels/',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'jpg',
        '#rotate_left',
        'REPORT_DISCORD',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'className',
        'volume',
        'username',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'GL_observer',
        '#imageViewer',
        'lang',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'data-modify',
        'stopPropagation',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'scrollBy',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x2019H5V5h7V3H5c-1.11\x200-2\x20.9-2\x202v14c0\x201.1.89\x202\x202\x202h14c1.1\x200\x202-.9\x202-2v-7h-2v7zM14\x203v2h3.59l-9.83\x209.83\x201.41\x201.41L19\x206.41V10h2V3h-7z\x22/></svg>',
        'data-loop',
        'boolean',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'div.volume_slider\x20input',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        'message',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'length',
        '[data-ih-locale-title]',
        'none',
        'parent',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        '#iv_header',
        '</span></label>',
        'which',
        'Cannot\x20find\x20video\x20URL.',
        'isDialog',
        'buffer',
        'DISABLE_VIDEO_LOOPING',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'preventDefault',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'show',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '\x22\x20/>',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'log',
        '.IG_DW_MAIN',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'GraphVideo',
        '</span></div>',
        '37px',
        '.IG_DWHISTORY',
        'edges',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'mouseenter',
        'isIntersecting',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'Logger:\x0a',
        'altKey',
        'https://www.instagram.com/',
        'response',
        'NEW_TAB',
        'media-id',
        'checked',
        'data-username',
        'createElement',
        'SKIP_VIEW_STORY_CONFIRM',
        'responseText',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        '.IG_POPUP_DIG_BODY\x20.newTab',
        'pageX',
        'play\x20playing',
        'isReels',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'GL_postPath',
        'DIV',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_BODY\x20a[data-globalindex=\x22',
        '\x22\x20data-ih-locale-title=\x22',
        '#article-id',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div',
        'photo',
        'click',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'Modify\x20Resource\x20EXIF\x20​​Properties',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'width',
        'SELECT_AND_COPY',
        'G_RENAME_FORMAT',
        'from',
        'Remote\x20version:\x20',
        'video_versions',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'isArray',
        'padStart',
        'user\x20settings',
        '</span>\x20<input\x20id=\x22',
        'position',
        '.IG_POPUP_DIG\x20.globalSettings',
        'trim',
        '.IG_POPUP_DIG_BODY\x20.inner_box',
        'main\x20timer\x20re-register\x20completed',
        'getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a',
        '<a\x20media-id=\x22',
        'scontent.cdninstagram.com',
        'ig_cache_key',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'data-modify-thumbnail',
        'https://www.instagram.com/p/',
        '691502OOKZhB',
        'contextmenu',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        '<option\x20value=\x22',
        '20000',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '0px',
        '/p/',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'reduce',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'forEach',
        'navigator',
        'subarray',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_BODY\x20a',
        'NO_CHECK_RESOURCE',
        'next',
        '</button>',
        'div[id^=\x22mount\x22]',
        'url',
        'then',
        'img',
        'DOWNLOAD',
        '[data-ih-locale]',
        'fromCharCode',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        '.IG_REELS',
        'Exif\x00\x00',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'carousel_media:',
        '_acnb',
        'hasClass',
        'min',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'Settings',
        '.IG_POPUP_DIG_BTN,\x20.IG_POPUP_DIG_BG',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'undefined\x20username',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'https://www.instagram.com/reel/',
        'Fetch\x20from\x20memory\x20cache:',
        'image/webp',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'a[href^=\x22/\x22]',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'onHighlightsStory',
        'reel',
        '1599JnZnls',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'appendChild',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'Loading\x20Blob\x20Media...',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'config_width',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'www.',
        'owner',
        'endsWith',
        'getUint8',
        'GL_username',
        'text',
        'userAgent',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M19\x205v14H5V5h14m0-2H5c-1.1\x200-2\x20.9-2\x202v14c0\x201.1.9\x202\x202\x202h14c1.1\x200\x202-.9\x202-2V5c0-1.1-.9-2-2-2zm-4.86\x208.86l-3\x203.87L9\x2013.14\x206\x2017h12l-3.86-5.14z\x22/></svg>',
        'profile_pic_url',
        'locale',
        '9oywyLh',
        '#scrollWrapper',
        'ended',
        'transform',
        'data-path',
        'dragstart\x20drop',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE',
        'remove',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        '.IG_POPUP_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'GM_unregisterMenuCommand',
        'filter',
        'MODIFY_RESOURCE_EXIF',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20height=\x2224px\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2224px\x22\x20fill=\x22#000000\x22><path\x20d=\x22M0\x200h24v24H0V0z\x22\x20fill=\x22none\x22/><path\x20d=\x22M7\x2014H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12\x207h-3v2h5v-5h-2v3zM14\x205v2h3v3h2V5h-5z\x22/></svg>',
        'getBlobMedia()',
        'display_resources',
        '<div\x20class=\x22IG_POPUP_DIG\x20',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '*/*',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'addClass',
        'IG\x20Debug\x20DOM\x20Tree',
        'Request\x20with:',
        'select',
        'searchParams',
        'type',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'LOAD_BLOB_ONE',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'mousedown',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'tempFetchRateLimit',
        'THUMBNAIL',
        'DIRECT_DOWNLOAD_ALL',
        'instagram.com/reels/',
        'title',
        'height',
        'download',
        'Checking\x20for\x20Updates',
        'push',
        '\x22\x20class=\x22newTab\x22>',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'datetime',
        'feedback_message',
        '4993832zhTuWL',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'left',
        '.IG_DWPROFILE',
        '._aagv\x20img',
        'HTML5_VIDEO_CONTROL',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]',
        'host',
        'ig_helper_notice',
        '__typename',
        'wrap',
        'label',
        'transition',
        'video',
        'getMediaInfo()',
        'video_url',
        '/accounts/login',
        'time[datetime]',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_TITLE\x20>\x20div\x20#langSelect',
        'max',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        'FORCE_RESOURCE_VIA_MEDIA',
        'a[href^=\x22/p/\x22]',
        'top',
        'selected',
        'video\x20+\x20div\x20>\x20div',
        'Script\x20Loaded',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'tagName',
        'videoVolume',
        'data-ih-locale',
        'getTranslationText\x20catch\x20error:',
        'src',
        '.IG_DWNEWTAB',
        'INTERNAL_CSS',
        'shortcode',
        'grab',
        '.IG_POPUP_DIG\x20.IG_POPUP_DIG_MAIN\x20.IG_POPUP_DIG_TITLE\x20>\x20div#button_group',
        '.IG_POPUP_DIG\x20input',
        'css',
        'Video',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        '0\x200',
        'hidden',
        'en-US',
        '.IG_DWHISTORY_THUMBNAIL',
        'execCommand',
        'registerMenuIds',
        'DW_ALL',
        'code',
        'query_id',
        'status',
        'toLowerCase',
        'DEBUG',
        'Download\x20All\x20Resources',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'body\x20>\x20div\x20section:visible._ac0a',
        '<a\x20href=\x22https://www.instagram.com/p/',
        'NOTICE_UPDATE_TITLE',
        'undefined',
        'replaceAll'
    ];
    a0_0x495e = function () {
        return _0x1cf29a;
    };
    return a0_0x495e();
}