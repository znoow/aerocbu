// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            2.36.9
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

(function (_0x23e79a, _0x15275b) {
    const _0x375001 = a0_0x4451, _0x42e153 = _0x23e79a();
    while (!![]) {
        try {
            const _0x4b3cda = -parseInt(_0x375001(0x377)) / 0x1 + -parseInt(_0x375001(0x309)) / 0x2 * (parseInt(_0x375001(0x2b0)) / 0x3) + -parseInt(_0x375001(0x2cd)) / 0x4 * (parseInt(_0x375001(0x3c6)) / 0x5) + parseInt(_0x375001(0x265)) / 0x6 * (parseInt(_0x375001(0x2f0)) / 0x7) + parseInt(_0x375001(0x3d6)) / 0x8 * (parseInt(_0x375001(0x303)) / 0x9) + parseInt(_0x375001(0x351)) / 0xa + parseInt(_0x375001(0x25a)) / 0xb;
            if (_0x4b3cda === _0x15275b)
                break;
            else
                _0x42e153['push'](_0x42e153['shift']());
        } catch (_0x1920c8) {
            _0x42e153['push'](_0x42e153['shift']());
        }
    }
}(a0_0x230b, 0xc69df), function (_0x46922f) {
    setTimeout(() => {
        'use strict';
        const _0x56a610 = a0_0x4451;
        const _0x3cd537 = {
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
            }, _0x4fd8de = [
                _0x56a610(0x33c),
                _0x56a610(0x2d0),
                _0x56a610(0x230)
            ];
        var _0x48ec40 = GM_getValue(_0x56a610(0x302)) ? GM_getValue('G_VIDEO_VOLUME') : 0x1, _0x370354 = ![], _0x400a86 = GM_getValue(_0x56a610(0x3ee)) ? GM_getValue(_0x56a610(0x3ee)) : '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%';
        const _0x41379a = {
                'DOWNLOAD': _0x56a610(0x2fc),
                'NEW_TAB': _0x56a610(0x273),
                'THUMBNAIL': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
                'CLOSE': _0x56a610(0x1d9)
            }, _0x629a0a = 0xfa, _0x1a6c17 = GM_getResourceText(_0x56a610(0x347)), _0x14a749 = JSON[_0x56a610(0x287)](GM_getResourceText('LOCALE_MANIFEST'));
        var _0xbda73a = [], _0x4ea23c = {}, _0x2fac8e = GM_getValue(_0x56a610(0x27f)) || navigator[_0x56a610(0x20f)] || navigator[_0x56a610(0x1fa)], _0x17200f = location[_0x56a610(0x2a1)], _0x3cc237 = ![], _0x30b42c = ![], _0x4bb13f = [], _0xa657ce, _0x5805c3, _0x328f71, _0x3629c1, _0xb48c7 = {
                'stories': {},
                'highlights': {}
            }, _0x3bb945 = new MutationObserver(function (_0x51542e, _0x181484) {
                _0x79f4e4();
            });
        _0x5f25e6(), GM_addStyle(_0x1a6c17), _0x2422a3(), _0x3a6df3(_0x2fac8e)[_0x56a610(0x36d)](_0x36a791 => {
            _0x4ea23c[_0x2fac8e] = _0x36a791, _0x3885f7(), _0x2422a3(), _0x51ed23(0x12c);
        })['catch'](_0x51f869 => {
            const _0x39a02c = _0x56a610;
            _0x2422a3(), _0x51ed23(0x12c), !_0x2fac8e[_0x39a02c(0x395)]('en') && console['error'](_0x39a02c(0x2ec), _0x51f869);
        });
        var _0x3f7d99 = setInterval(function () {
            const _0x5c0f1e = _0x56a610;
            if (_0x46922f(_0x5c0f1e(0x3eb))[_0x5c0f1e(0x3ba)] > 0x0 && !_0x46922f(_0x5c0f1e(0x3eb))['is'](_0x5c0f1e(0x20d)) || location[_0x5c0f1e(0x2c5)][_0x5c0f1e(0x3b5)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x5c0f1e(0x22e)][_0x5c0f1e(0x395)](_0x5c0f1e(0x2e1))) {
                _0x30b42c = ![];
                return;
            }
            if (_0x17200f != location[_0x5c0f1e(0x2a1)] || !_0x3cc237 || !_0x30b42c) {
                console['log'](_0x5c0f1e(0x3f2), _0x5c0f1e(0x3dd)), clearInterval(_0x3629c1), _0x30b42c = ![], _0x3cc237 = !![], _0x17200f = location[_0x5c0f1e(0x2a1)], _0x3bb945[_0x5c0f1e(0x3cc)]();
                if (location[_0x5c0f1e(0x2a1)][_0x5c0f1e(0x395)]('https://www.instagram.com/p/') || location[_0x5c0f1e(0x2c5)]['match'](/^\/(.*?)\/p\//ig) || location[_0x5c0f1e(0x2a1)][_0x5c0f1e(0x395)](_0x5c0f1e(0x350))) {
                    _0xb48c7[_0x5c0f1e(0x271)] = {}, _0x47101f(_0x5c0f1e(0x206));
                    var _0x1d525a = setInterval(() => {
                        _0x46922f('body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['length'] > 0x0 && (clearInterval(_0x1d525a), setTimeout(() => {
                            _0x79f4e4(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x30b42c = !![];
                }
                location[_0x5c0f1e(0x2a1)]['startsWith'](_0x5c0f1e(0x3af)) && (_0x47101f('isReels'), setTimeout(() => {
                    _0x3d490c(![]);
                }, 0x96), _0x30b42c = !![]);
                if (location[_0x5c0f1e(0x2a1)][_0x5c0f1e(0x1ff)]('?')[0x0] == 'https://www.instagram.com/') {
                    _0xb48c7['stories'] = {};
                    let _0x57bb26 = _0xa657ce?.[_0x5c0f1e(0x3b5)](/^\/stories\//ig) != null;
                    _0x47101f(_0x5c0f1e(0x269), _0x57bb26), setTimeout(() => {
                        const _0x28d845 = _0x5c0f1e;
                        _0x79f4e4(![], _0x57bb26);
                        const _0x3b97da = _0x46922f('div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article')?.[_0x28d845(0x3c7)]()[0x0];
                        _0x3b97da && _0x3bb945[_0x28d845(0x3b4)](_0x3b97da, { 'childList': !![] });
                    }, 0x96), _0x30b42c = !![];
                }
                _0x46922f(_0x5c0f1e(0x374))[_0x5c0f1e(0x3ba)] && location[_0x5c0f1e(0x2c5)][_0x5c0f1e(0x3b5)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x5c0f1e(0x2c5)]['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x47101f('isProfile'), setTimeout(() => {
                    _0x327272(![]);
                }, 0x96), _0x30b42c = !![]);
                if (!_0x30b42c) {
                    if (location[_0x5c0f1e(0x2a1)][_0x5c0f1e(0x3b5)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig)) {
                        _0xb48c7['highlights'] = {}, _0x47101f(_0x5c0f1e(0x1c7)), _0xf5456c(![]), _0x3629c1 = setInterval(() => {
                            _0x287344(![]);
                        }, _0x629a0a);
                        _0x46922f(_0x5c0f1e(0x3b3))[_0x5c0f1e(0x3ba)] && setTimeout(() => {
                            const _0x1db5df = _0x5c0f1e;
                            if (_0x3cd537[_0x1db5df(0x208)]) {
                                var _0x500d2f = _0x46922f(_0x1db5df(0x253))[_0x1db5df(0x29d)](function () {
                                    const _0x56f91c = _0x1db5df;
                                    return _0x46922f(this)['children']()[_0x56f91c(0x3ba)] === 0x0;
                                });
                                _0x500d2f?.[_0x1db5df(0x2fe)]();
                            }
                            _0x30b42c = !![];
                        }, 0x96);
                        ;
                    } else
                        location[_0x5c0f1e(0x2a1)][_0x5c0f1e(0x3b5)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x47101f('isStory'), _0x46922f(_0x5c0f1e(0x390))['length'] > 0x0 && (_0x46922f(_0x5c0f1e(0x337))[_0x5c0f1e(0x219)](), _0x46922f(_0x5c0f1e(0x2bc))['remove'](), _0x46922f('.IG_DWSTORY_THUMBNAIL')[_0x5c0f1e(0x3ba)] && _0x46922f(_0x5c0f1e(0x213))['remove'](), _0x5e501d(![]), setTimeout(() => {
                            _0x5e501d(![]);
                        }, 0x96)), _0x46922f(_0x5c0f1e(0x337))[_0x5c0f1e(0x3ba)] && setTimeout(() => {
                            const _0x38abb4 = _0x5c0f1e;
                            if (_0x3cd537[_0x38abb4(0x208)]) {
                                var _0xe9f826 = _0x46922f(_0x38abb4(0x253))[_0x38abb4(0x29d)](function () {
                                    const _0x344865 = _0x38abb4;
                                    return _0x46922f(this)[_0x344865(0x20a)]()[_0x344865(0x3ba)] === 0x0;
                                });
                                _0xe9f826?.[_0x38abb4(0x2fe)]();
                            }
                            _0x30b42c = !![];
                        }, 0x96)) : (_0x30b42c = ![], _0x46922f(_0x5c0f1e(0x337))[_0x5c0f1e(0x219)](), _0x46922f(_0x5c0f1e(0x2bc))['remove'](), _0x46922f(_0x5c0f1e(0x213))[_0x5c0f1e(0x3ba)] && _0x46922f('.IG_DWSTORY_THUMBNAIL')[_0x5c0f1e(0x219)]());
                }
                _0x51ed23(0x12c), _0xa657ce = new URL(location['href'])[_0x5c0f1e(0x2c5)];
            }
        }, _0x629a0a);
        async function _0x327272(_0x1fde1d) {
            const _0x43b270 = _0x56a610;
            if (_0x1fde1d) {
                _0xddd829(!![]);
                let _0x2a64e7 = new Date()['getTime'](), _0x1c9302 = Math[_0x43b270(0x3e9)](_0x2a64e7 / 0x3e8), _0x3696bc = location[_0x43b270(0x2c5)][_0x43b270(0x394)](/(reels|tagged)\/$/ig, '')['split']('/')[_0x43b270(0x29d)](_0x230388 => _0x230388[_0x43b270(0x3ba)] > 0x0)['at'](-0x1), _0x3d30b5 = await _0x3dfac6(_0x3696bc);
                try {
                    let _0x20038a = await _0x47c709(_0x3d30b5['user']['pk']);
                    _0x1a967c(_0x20038a, _0x3696bc, 'avatar', _0x1c9302, _0x43b270(0x353));
                } catch (_0x9cc527) {
                    _0x1a967c(_0x3d30b5[_0x43b270(0x33e)]['profile_pic_url'], _0x3696bc, _0x43b270(0x1f4), _0x1c9302, _0x43b270(0x353));
                }
                _0xddd829(![]);
            } else {
                if (!_0x46922f(_0x43b270(0x398))['length']) {
                    let _0x4430f2 = setInterval(() => {
                        const _0x58efc0 = _0x43b270;
                        if (_0x46922f(_0x58efc0(0x398))[_0x58efc0(0x3ba)]) {
                            clearInterval(_0x4430f2);
                            return;
                        }
                        _0x46922f(_0x58efc0(0x227))['parent']()[_0x58efc0(0x3c7)]()[_0x58efc0(0x267)](_0x58efc0(0x3c4) + _0x5dd0bf('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x41379a['DOWNLOAD'] + '</div>'), _0x46922f(_0x58efc0(0x227))[_0x58efc0(0x3c7)]()[_0x58efc0(0x3c7)]()[_0x58efc0(0x20e)](_0x58efc0(0x2ef), _0x58efc0(0x2c0)), _0x46922f(_0x58efc0(0x1ca))[_0x58efc0(0x3c7)]()['parent']()[_0x58efc0(0x3c7)]()['append'](_0x58efc0(0x3c4) + _0x5dd0bf('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x41379a[_0x58efc0(0x1d8)] + _0x58efc0(0x205)), _0x46922f(_0x58efc0(0x1ca))[_0x58efc0(0x3c7)]()[_0x58efc0(0x3c7)]()[_0x58efc0(0x3c7)]()[_0x58efc0(0x20e)]('position', _0x58efc0(0x2c0));
                    }, 0x96);
                }
            }
        }
        async function _0xf5456c(_0x570282, _0x5eb65a) {
            const _0x4c1b37 = _0x56a610;
            if (_0x570282) {
                let _0x5afc1b = new Date()[_0x4c1b37(0x3fc)](), _0x401c7e = Math[_0x4c1b37(0x3e9)](_0x5afc1b / 0x3e8), _0x5384b8 = location['href'][_0x4c1b37(0x1d7)](/\/$/ig, '')[_0x4c1b37(0x1ff)]('/')['at'](-0x1), _0x4a03f3 = _0x46922f(_0x4c1b37(0x1f8))[_0x4c1b37(0x3ba)] || _0x46922f(_0x4c1b37(0x2bb))['length'] || _0x46922f(_0x4c1b37(0x29e))[_0x4c1b37(0x2a4)](_0x4c1b37(0x307))[_0x4c1b37(0x3ba)], _0x76e575 = '', _0x5bd7c2 = 0x0;
                _0xddd829(!![]);
                if (_0xb48c7[_0x4c1b37(0x30b)][_0x5384b8]) {
                    _0x47101f(_0x4c1b37(0x24f), _0x5384b8);
                    let _0x58d7b3 = _0xb48c7[_0x4c1b37(0x30b)][_0x5384b8][_0x4c1b37(0x31b)][_0x4c1b37(0x2e6)][0x0][_0x4c1b37(0x1e0)][_0x4c1b37(0x3ba)];
                    _0x76e575 = _0xb48c7[_0x4c1b37(0x30b)][_0x5384b8][_0x4c1b37(0x31b)]['reels_media'][0x0][_0x4c1b37(0x1dd)]['username'], _0x5bd7c2 = _0xb48c7[_0x4c1b37(0x30b)][_0x5384b8]['data']['reels_media'][0x0][_0x4c1b37(0x1e0)][_0x58d7b3 - _0x4a03f3];
                } else {
                    let _0x2976e0 = await _0x2f0da4(_0x5384b8), _0x7d4dfd = _0x2976e0[_0x4c1b37(0x31b)][_0x4c1b37(0x2e6)][0x0]['items'][_0x4c1b37(0x3ba)];
                    _0x76e575 = _0x2976e0['data']['reels_media'][0x0][_0x4c1b37(0x1dd)][_0x4c1b37(0x316)], _0x5bd7c2 = _0x2976e0[_0x4c1b37(0x31b)][_0x4c1b37(0x2e6)][0x0][_0x4c1b37(0x1e0)][_0x7d4dfd - _0x4a03f3], _0xb48c7['highlights'][_0x5384b8] = _0x2976e0;
                }
                _0x3cd537[_0x4c1b37(0x33c)] && (_0x401c7e = _0x5bd7c2[_0x4c1b37(0x286)]);
                if (_0x3cd537[_0x4c1b37(0x23c)] && !_0x370354) {
                    let _0x475bde = await _0x365e73(_0x5bd7c2['id']);
                    _0x475bde[_0x4c1b37(0x34f)] === 'ok' ? _0x475bde['items'][0x0][_0x4c1b37(0x368)] ? _0x5eb65a ? _0x346b7b(_0x475bde['items'][0x0][_0x4c1b37(0x368)][0x0][_0x4c1b37(0x2c7)]) : _0x1a967c(_0x475bde[_0x4c1b37(0x1e0)][0x0][_0x4c1b37(0x368)][0x0]['url'], _0x76e575, _0x4c1b37(0x30b), _0x401c7e, _0x4c1b37(0x31a)) : _0x5eb65a ? _0x346b7b(_0x475bde['items'][0x0][_0x4c1b37(0x3f0)][_0x4c1b37(0x250)][0x0][_0x4c1b37(0x2c7)]) : _0x1a967c(_0x475bde[_0x4c1b37(0x1e0)][0x0][_0x4c1b37(0x3f0)]['candidates'][0x0]['url'], _0x76e575, _0x4c1b37(0x30b), _0x401c7e, 'jpg') : (_0x3cd537['USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT'] ? (delete _0xb48c7[_0x4c1b37(0x30b)][_0x5384b8], _0x370354 = !![], _0xf5456c(!![], _0x5eb65a)) : alert(_0x4c1b37(0x408) + _0x475bde[_0x4c1b37(0x3d1)]), _0x47101f(_0x475bde));
                } else
                    _0x5bd7c2[_0x4c1b37(0x24e)] ? _0x5eb65a ? _0x346b7b(_0x5bd7c2[_0x4c1b37(0x3f1)]['at'](-0x1)[_0x4c1b37(0x1e3)], _0x76e575) : _0x1a967c(_0x5bd7c2['video_resources']['at'](-0x1)[_0x4c1b37(0x1e3)], _0x76e575, _0x4c1b37(0x30b), _0x401c7e, 'mp4', _0x5384b8) : _0x5eb65a ? _0x346b7b(_0x5bd7c2[_0x4c1b37(0x242)]['at'](-0x1)[_0x4c1b37(0x1e3)], _0x76e575) : _0x1a967c(_0x5bd7c2[_0x4c1b37(0x242)]['at'](-0x1)[_0x4c1b37(0x1e3)], _0x76e575, _0x4c1b37(0x30b), _0x401c7e, _0x4c1b37(0x353), _0x5384b8), _0x370354 = ![];
                _0xddd829(![]);
            } else {
                if (!_0x46922f(_0x4c1b37(0x3b3))[_0x4c1b37(0x3ba)]) {
                    let _0x3f72fc = null;
                    _0x46922f(_0x4c1b37(0x322))['length'] > 0x0 ? _0x3f72fc = _0x46922f(_0x4c1b37(0x2c1)) : (_0x3f72fc = _0x46922f(_0x4c1b37(0x311)), _0x3f72fc[_0x4c1b37(0x20e)](_0x4c1b37(0x2ef), 'relative'));
                    if (_0x3f72fc[_0x4c1b37(0x3ba)] === 0x0) {
                        let _0xd62d5a = _0x46922f(_0x4c1b37(0x1ed)), _0x4d8f71 = 0x0;
                        _0xd62d5a[_0x4c1b37(0x31f)](function () {
                            const _0x3da968 = _0x4c1b37;
                            _0x46922f(this)[_0x3da968(0x223)]() > _0x4d8f71 && (_0x4d8f71 = _0x46922f(this)[_0x3da968(0x223)](), _0x3f72fc = _0x46922f(this)['children'](_0x3da968(0x3f5))[_0x3da968(0x348)]());
                        });
                    }
                    _0x3f72fc != null && (_0x3f72fc[_0x4c1b37(0x267)](_0x4c1b37(0x3c4) + _0x5dd0bf('DW') + _0x4c1b37(0x2c4) + _0x41379a[_0x4c1b37(0x1d8)] + _0x4c1b37(0x205)), _0x3f72fc[_0x4c1b37(0x267)](_0x4c1b37(0x258) + _0x5dd0bf(_0x4c1b37(0x2ab)) + _0x4c1b37(0x246) + _0x41379a[_0x4c1b37(0x2ab)] + '</div>'), _0x3cd537[_0x4c1b37(0x244)] && _0x3f72fc[_0x4c1b37(0x2a4)](_0x4c1b37(0x20b))[_0x4c1b37(0x31f)](function () {
                        const _0x4b0faf = _0x4c1b37;
                        _0x46922f(this)['on'](_0x4b0faf(0x386), function () {
                            const _0x364d2b = _0x4b0faf;
                            !_0x46922f(this)['data'](_0x364d2b(0x2be)) && (_0x46922f(this)['attr'](_0x364d2b(0x290), !![]), this[_0x364d2b(0x342)] = _0x48ec40, _0x47101f(_0x364d2b(0x3d2)));
                        });
                    }), _0x3f72fc[_0x4c1b37(0x2a4)]('img[referrerpolicy]')[_0x4c1b37(0x31f)](function () {
                        const _0x1005ac = _0x4c1b37;
                        _0x46922f(this)['on'](_0x1005ac(0x241), function () {
                            const _0x33a839 = _0x1005ac;
                            !_0x46922f(this)[_0x33a839(0x31b)](_0x33a839(0x3e4)) && (_0x3f72fc[_0x33a839(0x2a4)]('.IG_DWHISTORY_THUMBNAIL')[_0x33a839(0x3ba)] === 0x0 ? (_0x46922f(this)[_0x33a839(0x2b8)]('data-remove-thumbnail', !![]), _0x46922f(_0x33a839(0x1c6))['remove'](), _0x47101f('(highlight)\x20Manually\x20removing\x20thumbnail\x20button')) : (_0x46922f(this)[_0x33a839(0x2b8)](_0x33a839(0x3ed), !![]), _0x47101f(_0x33a839(0x275))));
                        });
                    }), _0x3f72fc[_0x4c1b37(0x2a4)](_0x4c1b37(0x20b))[_0x4c1b37(0x31f)](function () {
                        const _0x469fce = _0x4c1b37;
                        _0x46922f(this)['on'](_0x469fce(0x331), function () {
                            const _0xedf0af = _0x469fce;
                            !_0x46922f(this)['data'](_0xedf0af(0x33f)) && (_0x3f72fc[_0xedf0af(0x2a4)](_0xedf0af(0x1c6))[_0xedf0af(0x3ba)] === 0x0 ? (_0x46922f(this)['attr']('data-modify-thumbnail', !![]), _0x287344(![]), _0x47101f('(highlight)\x20Manually\x20inserting\x20thumbnail\x20button')) : (_0x46922f(this)['attr'](_0xedf0af(0x1c4), !![]), _0x47101f('(highlight)\x20Thumbnail\x20button\x20already\x20inserted')));
                        });
                    }));
                }
            }
        }
        async function _0x287344(_0x243e5d) {
            const _0x2e0919 = _0x56a610;
            if (_0x243e5d) {
                let _0x26c890 = new Date()['getTime'](), _0x5da943 = Math[_0x2e0919(0x3e9)](_0x26c890 / 0x3e8), _0x3bc3b1 = location[_0x2e0919(0x2a1)]['replace'](/\/$/ig, '')[_0x2e0919(0x1ff)]('/')['at'](-0x1), _0x473d24 = '', _0x21225f = _0x46922f(_0x2e0919(0x1f8))[_0x2e0919(0x3ba)] || _0x46922f(_0x2e0919(0x2bb))[_0x2e0919(0x3ba)] || _0x46922f(_0x2e0919(0x29e))['find']('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x2e0919(0x3ba)], _0x1bbb5f = '';
                _0xddd829(!![]);
                if (_0xb48c7[_0x2e0919(0x30b)][_0x3bc3b1]) {
                    _0x47101f(_0x2e0919(0x24f), _0x3bc3b1);
                    let _0x4282db = _0xb48c7['highlights'][_0x3bc3b1][_0x2e0919(0x31b)][_0x2e0919(0x2e6)][0x0][_0x2e0919(0x1e0)]['length'];
                    _0x473d24 = _0xb48c7[_0x2e0919(0x30b)][_0x3bc3b1][_0x2e0919(0x31b)]['reels_media'][0x0][_0x2e0919(0x1dd)]['username'], _0x1bbb5f = _0xb48c7[_0x2e0919(0x30b)][_0x3bc3b1][_0x2e0919(0x31b)][_0x2e0919(0x2e6)][0x0][_0x2e0919(0x1e0)][_0x4282db - _0x21225f];
                } else {
                    let _0x3ccf9b = await _0x2f0da4(_0x3bc3b1), _0x446585 = _0x3ccf9b[_0x2e0919(0x31b)]['reels_media'][0x0][_0x2e0919(0x1e0)][_0x2e0919(0x3ba)];
                    _0x473d24 = _0x3ccf9b[_0x2e0919(0x31b)][_0x2e0919(0x2e6)][0x0][_0x2e0919(0x1dd)][_0x2e0919(0x316)], _0x1bbb5f = _0x3ccf9b['data'][_0x2e0919(0x2e6)][0x0]['items'][_0x446585 - _0x21225f], _0xb48c7['highlights'][_0x3bc3b1] = _0x3ccf9b;
                }
                _0x3cd537['RENAME_PUBLISH_DATE'] && (_0x5da943 = _0x1bbb5f[_0x2e0919(0x286)]);
                if (_0x3cd537[_0x2e0919(0x23c)] && !_0x370354) {
                    let _0x417a72 = await _0x365e73(_0x1bbb5f['id']);
                    _0x417a72['status'] === 'ok' ? _0x1a967c(_0x417a72[_0x2e0919(0x1e0)][0x0][_0x2e0919(0x3f0)]['candidates'][0x0]['url'], _0x473d24, 'highlights', _0x5da943, 'jpg') : (_0x3cd537[_0x2e0919(0x2d0)] ? (delete _0xb48c7[_0x2e0919(0x30b)][_0x3bc3b1], _0x370354 = !![], _0x287344(!![])) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x417a72[_0x2e0919(0x3d1)]), _0x47101f(_0x417a72));
                } else
                    _0x1a967c(_0x1bbb5f[_0x2e0919(0x242)]['at'](-0x1)['src'], _0x473d24, _0x2e0919(0x30b), _0x5da943, 'jpg', _0x3bc3b1), _0x370354 = ![];
                _0xddd829(![]);
            } else {
                if (_0x46922f(_0x2e0919(0x315))['length']) {
                    if (!_0x46922f(_0x2e0919(0x1c6))[_0x2e0919(0x3ba)]) {
                        let _0x3d4343 = null;
                        _0x46922f(_0x2e0919(0x322))[_0x2e0919(0x3ba)] > 0x0 ? _0x3d4343 = _0x46922f(_0x2e0919(0x2c1)) : (_0x3d4343 = _0x46922f('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x3d4343[_0x2e0919(0x20e)](_0x2e0919(0x2ef), _0x2e0919(0x2c0)));
                        if (_0x3d4343[_0x2e0919(0x3ba)] === 0x0) {
                            let _0x1cba1e = _0x46922f(_0x2e0919(0x1ed)), _0x9b6266 = 0x0;
                            _0x1cba1e[_0x2e0919(0x31f)](function () {
                                const _0x488c7f = _0x2e0919;
                                _0x46922f(this)[_0x488c7f(0x223)]() > _0x9b6266 && (_0x9b6266 = _0x46922f(this)[_0x488c7f(0x223)](), _0x3d4343 = _0x46922f(this)['children'](_0x488c7f(0x3f5))[_0x488c7f(0x348)]());
                            });
                        }
                        _0x3d4343 != null && _0x3d4343[_0x2e0919(0x267)]('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x5dd0bf('THUMBNAIL_INTRO') + _0x2e0919(0x1e6) + _0x41379a[_0x2e0919(0x38f)] + _0x2e0919(0x205));
                    }
                } else
                    _0x46922f(_0x2e0919(0x1c6))[_0x2e0919(0x219)]();
            }
        }
        async function _0x5e501d(_0x5623a6, _0x5e3ae2, _0x211a6a) {
            const _0x232838 = _0x56a610;
            if (_0x5623a6) {
                let _0x50419d = new Date()['getTime'](), _0x52612b = Math['floor'](_0x50419d / 0x3e8), _0x17912d = _0x46922f(_0x232838(0x3ad))[_0x232838(0x348)]()[_0x232838(0x291)]() || location['pathname'][_0x232838(0x1ff)]('/')['filter'](_0x419f13 => _0x419f13[_0x232838(0x3ba)] > 0x0)['at'](0x1);
                _0xddd829(!![]);
                if (_0x3cd537[_0x232838(0x23c)] && !_0x370354) {
                    let _0x5b90a7 = null, _0x10d9ca = await _0x3dfac6(_0x17912d), _0x420e08 = _0x10d9ca[_0x232838(0x33e)]['pk'], _0x3160fd = await _0x3ea346(_0x420e08), _0x2edd7b = location['pathname'][_0x232838(0x1ff)]('/')['filter'](_0x16fc06 => _0x16fc06['length'] > 0x0 && _0x16fc06[_0x232838(0x3b5)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x3160fd[_0x232838(0x31b)]['reels_media'][0x0][_0x232838(0x1e0)][_0x232838(0x2d8)](_0x10bd17 => {
                        _0x10bd17['id'] == _0x2edd7b && (_0x5b90a7 = _0x10bd17['id']);
                    });
                    if (_0x5b90a7 == null) {
                        let _0x57fa6a = _0x46922f(_0x232838(0x2a7) + _0x17912d + _0x232838(0x3b0))[_0x232838(0x29d)](function () {
                            const _0x2d7853 = _0x232838;
                            return _0x46922f(this)[_0x2d7853(0x20a)]()[_0x2d7853(0x3ba)] === 0x0 && _0x46922f(this)[_0x2d7853(0x2a4)](_0x2d7853(0x29a))[_0x2d7853(0x3ba)] === 0x0 && _0x46922f(this)[_0x2d7853(0x291)]()?.[_0x2d7853(0x1dc)]() === _0x17912d?.[_0x2d7853(0x1dc)]();
                        })[_0x232838(0x2db)]('div:not([class]):not([style])')[_0x232838(0x29d)](function () {
                            const _0x2d15b6 = _0x232838;
                            return _0x46922f(this)['text']()?.[_0x2d15b6(0x1dc)]() !== _0x17912d?.[_0x2d15b6(0x1dc)]();
                        })[_0x232838(0x29d)](function () {
                            const _0x1d84f6 = _0x232838;
                            return _0x46922f(this)[_0x1d84f6(0x20a)]()[_0x1d84f6(0x3ba)] > 0x1;
                        })[_0x232838(0x348)]();
                        _0x57fa6a[_0x232838(0x20a)]()[_0x232838(0x29d)](function () {
                            const _0x27b1dc = _0x232838;
                            return _0x46922f(this)[_0x27b1dc(0x2e9)]() < 0xa;
                        })[_0x232838(0x348)]()[_0x232838(0x20a)]()['each'](function (_0x3d9b1a) {
                            const _0x48e25b = _0x232838;
                            _0x46922f(this)[_0x48e25b(0x20a)]()[_0x48e25b(0x3ba)] > 0x0 && (_0x5b90a7 = _0x3160fd[_0x48e25b(0x31b)][_0x48e25b(0x2e6)][0x0]['items'][_0x3d9b1a]['id']);
                        });
                    }
                    _0x5b90a7 == null && (_0x46922f(_0x232838(0x21d))[_0x232838(0x31f)](function (_0x339efd) {
                        const _0x4d4fca = _0x232838;
                        _0x46922f(this)[_0x4d4fca(0x3c5)](_0x4d4fca(0x2e0)) && (_0x46922f(this)['children']()['length'] > 0x0 && (_0x5b90a7 = _0x3160fd[_0x4d4fca(0x31b)]['reels_media'][0x0][_0x4d4fca(0x1e0)][_0x339efd]['id']));
                    }), _0x46922f(_0x232838(0x1fd))[_0x232838(0x31f)](function (_0x1fb1a2) {
                        const _0x19a7aa = _0x232838;
                        _0x46922f(this)['children']()[_0x19a7aa(0x3c5)](_0x19a7aa(0x392)) && (_0x5b90a7 = _0x3160fd[_0x19a7aa(0x31b)][_0x19a7aa(0x2e6)][0x0][_0x19a7aa(0x1e0)][_0x1fb1a2]['id']);
                    }));
                    _0x5b90a7 == null && (_0x5b90a7 = location[_0x232838(0x2c5)]['split']('/')['filter'](_0x2d046b => _0x2d046b['length'] > 0x0 && _0x2d046b[_0x232838(0x3b5)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x21e249 = await _0x365e73(_0x5b90a7);
                    _0x3cd537[_0x232838(0x33c)] && (_0x52612b = _0x21e249['items'][0x0][_0x232838(0x32b)]);
                    _0x21e249[_0x232838(0x34f)] === 'ok' ? _0x21e249[_0x232838(0x1e0)][0x0][_0x232838(0x368)] ? _0x211a6a ? _0x346b7b(_0x21e249[_0x232838(0x1e0)][0x0][_0x232838(0x368)][0x0][_0x232838(0x2c7)]) : _0x1a967c(_0x21e249['items'][0x0][_0x232838(0x368)][0x0][_0x232838(0x2c7)], _0x17912d, _0x232838(0x271), _0x52612b, 'mp4') : _0x211a6a ? _0x346b7b(_0x21e249['items'][0x0][_0x232838(0x3f0)][_0x232838(0x250)][0x0][_0x232838(0x2c7)]) : _0x1a967c(_0x21e249[_0x232838(0x1e0)][0x0]['image_versions2'][_0x232838(0x250)][0x0][_0x232838(0x2c7)], _0x17912d, 'stories', _0x52612b, _0x232838(0x353)) : (_0x3cd537[_0x232838(0x2d0)] ? (_0x370354 = !![], _0x5e501d(_0x5623a6, _0x5e3ae2, _0x211a6a)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x21e249['message']), _0x47101f(_0x21e249));
                    _0xddd829(![]);
                    return;
                }
                if (_0x46922f(_0x232838(0x35a))[_0x232838(0x3ba)] > 0x0) {
                    let _0x5b5814 = 'mp4', _0xeee849 = '', _0x297d0a = location['pathname'][_0x232838(0x1d7)](/\/$/ig, '')[_0x232838(0x1ff)]('/')['at'](-0x1);
                    if (_0xb48c7[_0x232838(0x271)][_0x17912d] && !_0x5e3ae2) {
                        _0x47101f(_0x232838(0x24f), _0x17912d), _0xb48c7[_0x232838(0x271)][_0x17912d][_0x232838(0x31b)][_0x232838(0x2e6)][0x0][_0x232838(0x1e0)]['forEach'](_0xf5a8be => {
                            const _0x3e80c = _0x232838;
                            _0xf5a8be['id'] == _0x297d0a && (_0xeee849 = _0xf5a8be[_0x3e80c(0x3f1)][0x0]['src'], _0x3cd537[_0x3e80c(0x33c)] && (_0x52612b = _0xf5a8be[_0x3e80c(0x286)]));
                        });
                        if (_0xeee849[_0x232838(0x3ba)] == 0x0) {
                            _0x47101f(_0x232838(0x345), _0x17912d), _0x5e501d(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x923218 = await _0x3dfac6(_0x17912d), _0x10ab83 = _0x923218[_0x232838(0x33e)]['pk'], _0x1d8e6f = await _0x3ea346(_0x10ab83);
                        _0x1d8e6f['data'][_0x232838(0x2e6)][0x0][_0x232838(0x1e0)][_0x232838(0x2d8)](_0x7344c8 => {
                            const _0x1d6313 = _0x232838;
                            _0x7344c8['id'] == _0x297d0a && (_0xeee849 = _0x7344c8['video_resources'][0x0][_0x1d6313(0x1e3)], _0x3cd537[_0x1d6313(0x33c)] && (_0x52612b = _0x7344c8['taken_at_timestamp']));
                        });
                        if (_0xeee849[_0x232838(0x3ba)] == 0x0) {
                            let _0x586959 = _0x46922f(_0x232838(0x2a7) + _0x17912d + _0x232838(0x3b0))['filter'](function () {
                                const _0x5b93d4 = _0x232838;
                                return _0x46922f(this)['children']()[_0x5b93d4(0x3ba)] === 0x0 && _0x46922f(this)[_0x5b93d4(0x2a4)](_0x5b93d4(0x29a))[_0x5b93d4(0x3ba)] === 0x0 && _0x46922f(this)['text']()?.[_0x5b93d4(0x1dc)]() === _0x17912d?.[_0x5b93d4(0x1dc)]();
                            })['parents'](_0x232838(0x298))[_0x232838(0x29d)](function () {
                                const _0x17248a = _0x232838;
                                return _0x46922f(this)[_0x17248a(0x291)]()?.[_0x17248a(0x1dc)]() !== _0x17912d?.[_0x17248a(0x1dc)]();
                            })[_0x232838(0x29d)](function () {
                                const _0xda34c = _0x232838;
                                return _0x46922f(this)[_0xda34c(0x20a)]()[_0xda34c(0x3ba)] > 0x1;
                            })[_0x232838(0x348)]();
                            _0x586959[_0x232838(0x20a)]()[_0x232838(0x29d)](function () {
                                return _0x46922f(this)['height']() < 0xa;
                            })[_0x232838(0x348)]()['children']()[_0x232838(0x31f)](function (_0x3f8b85) {
                                const _0x2a9984 = _0x232838;
                                _0x46922f(this)[_0x2a9984(0x20a)]()[_0x2a9984(0x3ba)] > 0x0 && (_0xeee849 = _0x1d8e6f[_0x2a9984(0x31b)][_0x2a9984(0x2e6)][0x0]['items'][_0x3f8b85][_0x2a9984(0x3f1)][0x0]['src'], _0x3cd537[_0x2a9984(0x33c)] && (_0x52612b = _0x1d8e6f[_0x2a9984(0x31b)][_0x2a9984(0x2e6)][0x0][_0x2a9984(0x1e0)][_0x3f8b85]['taken_at_timestamp']));
                            }), _0xeee849['length'] == 0x0 && (_0x46922f(_0x232838(0x21d))['each'](function (_0x5c78b5) {
                                const _0x4534d5 = _0x232838;
                                _0x46922f(this)['hasClass'](_0x4534d5(0x2e0)) && (_0x46922f(this)[_0x4534d5(0x20a)]()[_0x4534d5(0x3ba)] > 0x0 && (_0xeee849 = _0x1d8e6f[_0x4534d5(0x31b)][_0x4534d5(0x2e6)][0x0]['items'][_0x5c78b5][_0x4534d5(0x3f1)][0x0][_0x4534d5(0x1e3)], _0x3cd537[_0x4534d5(0x33c)] && (_0x52612b = _0x1d8e6f['data'][_0x4534d5(0x2e6)][0x0][_0x4534d5(0x1e0)][_0x5c78b5][_0x4534d5(0x286)])));
                            }), _0x46922f(_0x232838(0x1fd))[_0x232838(0x31f)](function (_0x15d670) {
                                const _0x1187c3 = _0x232838;
                                _0x46922f(this)['children']()['hasClass']('_ac3q') && (_0xeee849 = _0x1d8e6f[_0x1187c3(0x31b)]['reels_media'][0x0][_0x1187c3(0x1e0)][_0x15d670][_0x1187c3(0x3f1)][0x0][_0x1187c3(0x1e3)], _0x3cd537[_0x1187c3(0x33c)] && (_0x52612b = _0x1d8e6f[_0x1187c3(0x31b)]['reels_media'][0x0][_0x1187c3(0x1e0)][_0x15d670][_0x1187c3(0x286)]));
                            }));
                        }
                        _0xb48c7[_0x232838(0x271)][_0x17912d] = _0x1d8e6f;
                    }
                    _0xeee849[_0x232838(0x3ba)] == 0x0 ? alert(_0x5dd0bf(_0x232838(0x3e7))) : _0x211a6a ? _0x346b7b(_0xeee849) : _0x1a967c(_0xeee849, _0x17912d, 'stories', _0x52612b, _0x5b5814);
                } else {
                    let _0x4741a4 = _0x46922f(_0x232838(0x216))[_0x232838(0x2b8)]('srcset')?.[_0x232838(0x1ff)](',')[0x0]?.[_0x232838(0x1ff)]('\x20')[0x0], _0x34d8ff = _0x4741a4 ? _0x4741a4 : _0x46922f('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0x232838(0x2b8)](_0x232838(0x1e3));
                    if (!_0x34d8ff) {
                        let _0xc28c35 = _0x46922f(_0x232838(0x2c3));
                        _0x34d8ff = _0xc28c35[_0x232838(0x2b8)](_0x232838(0x1da)) ? _0xc28c35[_0x232838(0x2b8)](_0x232838(0x1da))?.[_0x232838(0x1ff)](',')[0x0]?.[_0x232838(0x1ff)]('\x20')[0x0] : _0xc28c35[_0x232838(0x2b8)]('src');
                    }
                    _0x3cd537['RENAME_PUBLISH_DATE'] && (_0x52612b = new Date(_0x46922f(_0x232838(0x1e4))[_0x232838(0x348)]()[_0x232838(0x2b8)](_0x232838(0x2cb)))[_0x232838(0x3fc)]());
                    let _0x272bc8 = _0x34d8ff, _0x2121a9 = _0x232838(0x353);
                    _0x211a6a ? _0x346b7b(_0x272bc8) : _0x1a967c(_0x272bc8, _0x17912d, 'stories', _0x52612b, _0x2121a9);
                }
                _0x370354 = ![], _0xddd829(![]);
            } else {
                let _0x4aa596 = _0x232838(0x3df);
                if (!_0x46922f(_0x232838(0x337))[_0x232838(0x3ba)]) {
                    _0xb48c7[_0x232838(0x271)] = {};
                    let _0x89d987 = null;
                    _0x46922f('body\x20>\x20div\x20section._ac0a')[_0x232838(0x3ba)] > 0x0 ? _0x89d987 = _0x46922f(_0x232838(0x2c1)) : (_0x89d987 = _0x46922f(_0x232838(0x311)), _0x89d987[_0x232838(0x20e)](_0x232838(0x2ef), _0x232838(0x2c0)));
                    _0x89d987[_0x232838(0x3ba)] === 0x0 && (_0x89d987 = _0x46922f(_0x232838(0x390))[_0x232838(0x3c7)]()['parent']()['parent']()[_0x232838(0x2a4)](_0x232838(0x365)), _0x89d987[_0x232838(0x20e)](_0x232838(0x2ef), _0x232838(0x2c0)));
                    _0x89d987[_0x232838(0x3ba)] === 0x0 && (_0x89d987 = _0x46922f('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x232838(0x3c7)]()[_0x232838(0x3c7)]()['parent']()[_0x232838(0x2a4)]('section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])'), _0x89d987[_0x232838(0x20e)]('position', 'relative'));
                    if (_0x89d987[_0x232838(0x3ba)] === 0x0) {
                        let _0x4849a3 = _0x46922f(_0x232838(0x1ed)), _0xf1e62d = 0x0;
                        _0x4849a3[_0x232838(0x31f)](function () {
                            const _0x59cea8 = _0x232838;
                            _0x46922f(this)[_0x59cea8(0x223)]() > _0xf1e62d && (_0xf1e62d = _0x46922f(this)[_0x59cea8(0x223)](), _0x89d987 = _0x46922f(this)[_0x59cea8(0x20a)](_0x59cea8(0x3f5))[_0x59cea8(0x348)]());
                        });
                    }
                    _0x89d987 != null && (_0x89d987[_0x232838(0x348)]()[_0x232838(0x20e)](_0x232838(0x2ef), 'relative'), _0x89d987[_0x232838(0x348)]()[_0x232838(0x267)](_0x232838(0x3c4) + _0x5dd0bf('DW') + '\x22\x20class=\x22IG_DWSTORY\x22>' + _0x41379a['DOWNLOAD'] + _0x232838(0x205)), _0x89d987[_0x232838(0x348)]()[_0x232838(0x267)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x5dd0bf(_0x232838(0x2ab)) + _0x232838(0x268) + _0x41379a[_0x232838(0x2ab)] + '</div>'), _0x3cd537[_0x232838(0x244)] && _0x89d987['find'](_0x232838(0x20b))['each'](function () {
                        const _0x764bd1 = _0x232838;
                        _0x46922f(this)['on'](_0x764bd1(0x386), function () {
                            const _0x1f1c4b = _0x764bd1;
                            !_0x46922f(this)[_0x1f1c4b(0x31b)](_0x1f1c4b(0x2be)) && (_0x46922f(this)['attr'](_0x1f1c4b(0x290), !![]), this[_0x1f1c4b(0x342)] = _0x48ec40, _0x47101f(_0x1f1c4b(0x295)));
                        });
                    }), _0x89d987['find']('img[referrerpolicy]')['each'](function () {
                        const _0x3e33e4 = _0x232838;
                        _0x46922f(this)['on'](_0x3e33e4(0x241), function () {
                            const _0x2d734e = _0x3e33e4;
                            !_0x46922f(this)[_0x2d734e(0x31b)]('remove-thumbnail') && (_0x89d987[_0x2d734e(0x2a4)]('.IG_DWSTORY_THUMBNAIL')[_0x2d734e(0x3ba)] === 0x0 ? (_0x46922f(this)[_0x2d734e(0x2b8)](_0x2d734e(0x3ed), !![]), _0x46922f(_0x2d734e(0x213))[_0x2d734e(0x219)](), _0x47101f(_0x2d734e(0x2f9))) : (_0x46922f(this)[_0x2d734e(0x2b8)](_0x2d734e(0x3ed), !![]), _0x47101f(_0x2d734e(0x28d))));
                        });
                    }), _0x89d987[_0x232838(0x2a4)]('video')[_0x232838(0x31f)](function () {
                        _0x46922f(this)['on']('timeupdate', function () {
                            const _0x6cb406 = a0_0x4451;
                            !_0x46922f(this)[_0x6cb406(0x31b)](_0x6cb406(0x33f)) && (_0x89d987[_0x6cb406(0x2a4)](_0x6cb406(0x213))[_0x6cb406(0x3ba)] === 0x0 ? (_0x46922f(this)[_0x6cb406(0x2b8)](_0x6cb406(0x1c4), !![]), _0x1cfe7a(![]), _0x47101f(_0x6cb406(0x24d))) : (_0x46922f(this)['attr']('data-modify-thumbnail', !![]), _0x47101f(_0x6cb406(0x3d0))));
                        });
                    }));
                }
            }
        }
        async function _0x1cfe7a(_0x59cb80, _0x2637c0) {
            const _0x1fcf2a = _0x56a610;
            if (_0x59cb80) {
                let _0xa80c2 = new Date()[_0x1fcf2a(0x3fc)](), _0x38a366 = Math[_0x1fcf2a(0x3e9)](_0xa80c2 / 0x3e8), _0x110856 = 'jpg', _0x3fc3fc = _0x46922f('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a')['first']()['text']() || location[_0x1fcf2a(0x2c5)][_0x1fcf2a(0x1ff)]('/')['at'](0x2), _0x2d8b67 = _0x1fcf2a(0x235), _0x396b90 = location[_0x1fcf2a(0x2c5)][_0x1fcf2a(0x1d7)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x595712 = '';
                _0xddd829(!![]);
                if (_0x3cd537[_0x1fcf2a(0x23c)] && !_0x370354) {
                    let _0x4b739e = null, _0x580dc5 = await _0x3dfac6(_0x3fc3fc), _0x126e10 = _0x580dc5[_0x1fcf2a(0x33e)]['pk'], _0x55c50d = await _0x3ea346(_0x126e10), _0x253e78 = location[_0x1fcf2a(0x2c5)]['split']('/')[_0x1fcf2a(0x29d)](_0x19d92c => _0x19d92c['length'] > 0x0 && _0x19d92c[_0x1fcf2a(0x3b5)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x55c50d[_0x1fcf2a(0x31b)][_0x1fcf2a(0x2e6)][0x0]['items'][_0x1fcf2a(0x2d8)](_0x4bf603 => {
                        _0x4bf603['id'] == _0x253e78 && (_0x4b739e = _0x4bf603['id']);
                    });
                    if (_0x4b739e == null) {
                        let _0x44a824 = _0x46922f(_0x1fcf2a(0x2a7) + _0x3fc3fc + _0x1fcf2a(0x3b0))[_0x1fcf2a(0x29d)](function () {
                            const _0x33d88f = _0x1fcf2a;
                            return _0x46922f(this)[_0x33d88f(0x20a)]()[_0x33d88f(0x3ba)] === 0x0 && _0x46922f(this)[_0x33d88f(0x2a4)](_0x33d88f(0x29a))[_0x33d88f(0x3ba)] === 0x0 && _0x46922f(this)[_0x33d88f(0x291)]()?.[_0x33d88f(0x1dc)]() === _0x3fc3fc?.['toLowerCase']();
                        })[_0x1fcf2a(0x2db)](_0x1fcf2a(0x298))['filter'](function () {
                            const _0xf2e4aa = _0x1fcf2a;
                            return _0x46922f(this)['text']()?.[_0xf2e4aa(0x1dc)]() !== _0x3fc3fc?.[_0xf2e4aa(0x1dc)]();
                        })[_0x1fcf2a(0x29d)](function () {
                            const _0x2f8eee = _0x1fcf2a;
                            return _0x46922f(this)[_0x2f8eee(0x20a)]()['length'] > 0x1;
                        })[_0x1fcf2a(0x348)]();
                        _0x44a824[_0x1fcf2a(0x20a)]()[_0x1fcf2a(0x29d)](function () {
                            const _0x13eba7 = _0x1fcf2a;
                            return _0x46922f(this)[_0x13eba7(0x2e9)]() < 0xa;
                        })[_0x1fcf2a(0x348)]()[_0x1fcf2a(0x20a)]()['each'](function (_0x23ef0c) {
                            const _0xc9a344 = _0x1fcf2a;
                            _0x46922f(this)[_0xc9a344(0x20a)]()['length'] > 0x0 && (_0x4b739e = _0x55c50d[_0xc9a344(0x31b)][_0xc9a344(0x2e6)][0x0][_0xc9a344(0x1e0)][_0x23ef0c]['id']);
                        });
                    }
                    _0x4b739e == null && (_0x46922f('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x1fcf2a(0x31f)](function (_0x5c63b2) {
                        const _0xdd9c2d = _0x1fcf2a;
                        _0x46922f(this)['hasClass'](_0xdd9c2d(0x2e0)) && (_0x46922f(this)[_0xdd9c2d(0x20a)]()['length'] > 0x0 && (_0x4b739e = _0x55c50d['data'][_0xdd9c2d(0x2e6)][0x0][_0xdd9c2d(0x1e0)][_0x5c63b2]['id']));
                    }), _0x46922f(_0x1fcf2a(0x1fd))['each'](function (_0x35fb91) {
                        const _0x5a41a9 = _0x1fcf2a;
                        _0x46922f(this)[_0x5a41a9(0x20a)]()['hasClass'](_0x5a41a9(0x392)) && (_0x4b739e = _0x55c50d[_0x5a41a9(0x31b)][_0x5a41a9(0x2e6)][0x0]['items'][_0x35fb91]['id']);
                    }));
                    _0x4b739e == null && (_0x4b739e = location[_0x1fcf2a(0x2c5)][_0x1fcf2a(0x1ff)]('/')[_0x1fcf2a(0x29d)](_0x33d711 => _0x33d711[_0x1fcf2a(0x3ba)] > 0x0 && _0x33d711['match'](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x543de8 = await _0x365e73(_0x4b739e);
                    _0x3cd537[_0x1fcf2a(0x33c)] && (_0x38a366 = _0x543de8[_0x1fcf2a(0x1e0)][0x0]['taken_at']);
                    _0x543de8[_0x1fcf2a(0x34f)] === 'ok' ? _0x1a967c(_0x543de8[_0x1fcf2a(0x1e0)][0x0][_0x1fcf2a(0x3f0)][_0x1fcf2a(0x250)][0x0][_0x1fcf2a(0x2c7)], _0x3fc3fc, _0x1fcf2a(0x271), _0x38a366, _0x1fcf2a(0x353)) : (_0x3cd537[_0x1fcf2a(0x2d0)] ? (_0x370354 = !![], _0x1cfe7a(!![], _0x2637c0)) : alert('Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20' + _0x543de8[_0x1fcf2a(0x3d1)]), _0x47101f(_0x543de8));
                    _0xddd829(![]);
                    return;
                }
                if (_0xb48c7['stories'][_0x3fc3fc] && !_0x2637c0) {
                    _0x47101f(_0x1fcf2a(0x24f), _0x3fc3fc), _0xb48c7[_0x1fcf2a(0x271)][_0x3fc3fc][_0x1fcf2a(0x31b)]['reels_media'][0x0][_0x1fcf2a(0x1e0)][_0x1fcf2a(0x2d8)](_0x4f2337 => {
                        const _0x1231f7 = _0x1fcf2a;
                        _0x4f2337['id'] == _0x396b90 && (_0x595712 = _0x4f2337[_0x1231f7(0x26e)], _0x3cd537['RENAME_PUBLISH_DATE'] && (_0x38a366 = _0x4f2337['taken_at_timestamp']));
                    });
                    if (_0x595712[_0x1fcf2a(0x3ba)] == 0x0) {
                        _0x47101f(_0x1fcf2a(0x345), _0x3fc3fc), _0x1cfe7a(!![], !![]);
                        return;
                    }
                } else {
                    let _0x503a64 = await _0x3dfac6(_0x3fc3fc), _0x44c42e = _0x503a64['user']['pk'], _0x6ef761 = await _0x3ea346(_0x44c42e);
                    _0x6ef761[_0x1fcf2a(0x31b)][_0x1fcf2a(0x2e6)][0x0][_0x1fcf2a(0x1e0)][_0x1fcf2a(0x2d8)](_0x45d37b => {
                        const _0xba7785 = _0x1fcf2a;
                        _0x45d37b['id'] == _0x396b90 && (_0x595712 = _0x45d37b[_0xba7785(0x26e)], _0x3cd537[_0xba7785(0x33c)] && (_0x38a366 = _0x45d37b[_0xba7785(0x286)]));
                    });
                    if (_0x595712[_0x1fcf2a(0x3ba)] == 0x0) {
                        let _0x4f6dbc = _0x46922f(_0x1fcf2a(0x2a7) + _0x3fc3fc + _0x1fcf2a(0x3b0))[_0x1fcf2a(0x29d)](function () {
                            const _0x172240 = _0x1fcf2a;
                            return _0x46922f(this)['children']()[_0x172240(0x3ba)] === 0x0 && _0x46922f(this)['find'](_0x172240(0x29a))[_0x172240(0x3ba)] === 0x0 && _0x46922f(this)[_0x172240(0x291)]()?.[_0x172240(0x1dc)]() === _0x3fc3fc?.[_0x172240(0x1dc)]();
                        })[_0x1fcf2a(0x2db)](_0x1fcf2a(0x298))[_0x1fcf2a(0x29d)](function () {
                            const _0x4b283b = _0x1fcf2a;
                            return _0x46922f(this)[_0x4b283b(0x291)]()?.[_0x4b283b(0x1dc)]() !== _0x3fc3fc?.[_0x4b283b(0x1dc)]();
                        })[_0x1fcf2a(0x29d)](function () {
                            const _0xa2aa89 = _0x1fcf2a;
                            return _0x46922f(this)[_0xa2aa89(0x20a)]()[_0xa2aa89(0x3ba)] > 0x1;
                        })[_0x1fcf2a(0x348)]();
                        _0x4f6dbc[_0x1fcf2a(0x20a)]()[_0x1fcf2a(0x29d)](function () {
                            return _0x46922f(this)['height']() < 0xa;
                        })['first']()[_0x1fcf2a(0x20a)]()[_0x1fcf2a(0x31f)](function (_0x312bd8) {
                            const _0x42d3b3 = _0x1fcf2a;
                            _0x46922f(this)[_0x42d3b3(0x20a)]()[_0x42d3b3(0x3ba)] > 0x0 && (_0x595712 = _0x6ef761[_0x42d3b3(0x31b)]['reels_media'][0x0]['items'][_0x312bd8][_0x42d3b3(0x26e)], _0x3cd537[_0x42d3b3(0x33c)] && (_0x38a366 = _0x6ef761[_0x42d3b3(0x31b)][_0x42d3b3(0x2e6)][0x0]['items'][_0x312bd8][_0x42d3b3(0x286)]));
                        }), _0x595712[_0x1fcf2a(0x3ba)] == 0x0 && (_0x46922f(_0x1fcf2a(0x21d))[_0x1fcf2a(0x31f)](function (_0x455e88) {
                            const _0x1a5735 = _0x1fcf2a;
                            _0x46922f(this)['hasClass'](_0x1a5735(0x2e0)) && (_0x46922f(this)[_0x1a5735(0x20a)]()[_0x1a5735(0x3ba)] > 0x0 && (_0x595712 = _0x6ef761['data'][_0x1a5735(0x2e6)][0x0][_0x1a5735(0x1e0)][_0x455e88][_0x1a5735(0x26e)], _0x3cd537[_0x1a5735(0x33c)] && (_0x38a366 = _0x6ef761['data']['reels_media'][0x0][_0x1a5735(0x1e0)][_0x455e88][_0x1a5735(0x286)])));
                        }), _0x46922f(_0x1fcf2a(0x1fd))[_0x1fcf2a(0x31f)](function (_0x3a8795) {
                            const _0x348eaa = _0x1fcf2a;
                            _0x46922f(this)['children']()[_0x348eaa(0x3c5)](_0x348eaa(0x392)) && (_0x595712 = _0x6ef761[_0x348eaa(0x31b)][_0x348eaa(0x2e6)][0x0][_0x348eaa(0x1e0)][_0x3a8795]['display_url'], _0x3cd537['RENAME_PUBLISH_DATE'] && (_0x38a366 = _0x6ef761[_0x348eaa(0x31b)][_0x348eaa(0x2e6)][0x0][_0x348eaa(0x1e0)][_0x3a8795][_0x348eaa(0x286)]));
                        }));
                    }
                }
                _0x1a967c(_0x595712, _0x3fc3fc, 'thumbnail', _0x38a366, _0x110856), _0x370354 = ![], _0xddd829(![]);
            } else {
                if (_0x46922f('body\x20>\x20div\x20div.IG_DWSTORY')[_0x1fcf2a(0x3c7)]()['find'](_0x1fcf2a(0x32a))['length']) {
                    let _0x50eb95 = null;
                    _0x46922f(_0x1fcf2a(0x322))['length'] > 0x0 ? _0x50eb95 = _0x46922f('body\x20>\x20div\x20section:visible._ac0a') : (_0x50eb95 = _0x46922f(_0x1fcf2a(0x311)), _0x50eb95[_0x1fcf2a(0x20e)](_0x1fcf2a(0x2ef), _0x1fcf2a(0x2c0)));
                    _0x50eb95[_0x1fcf2a(0x3ba)] === 0x0 && (_0x50eb95 = _0x46922f(_0x1fcf2a(0x390))['parent']()[_0x1fcf2a(0x3c7)]()[_0x1fcf2a(0x3c7)]()[_0x1fcf2a(0x2a4)](_0x1fcf2a(0x365)), _0x50eb95[_0x1fcf2a(0x20e)](_0x1fcf2a(0x2ef), _0x1fcf2a(0x2c0)));
                    _0x50eb95[_0x1fcf2a(0x3ba)] === 0x0 && (_0x50eb95 = _0x46922f('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x1fcf2a(0x3c7)]()[_0x1fcf2a(0x3c7)]()[_0x1fcf2a(0x3c7)]()['find'](_0x1fcf2a(0x281)), _0x50eb95['css'](_0x1fcf2a(0x2ef), _0x1fcf2a(0x2c0)));
                    if (_0x50eb95[_0x1fcf2a(0x3ba)] === 0x0) {
                        let _0x5a8bdf = _0x46922f(_0x1fcf2a(0x1ed)), _0xf49da2 = 0x0;
                        _0x5a8bdf['each'](function () {
                            const _0x28ecbc = _0x1fcf2a;
                            _0x46922f(this)[_0x28ecbc(0x223)]() > _0xf49da2 && (_0xf49da2 = _0x46922f(this)['width'](), _0x50eb95 = _0x46922f(this)[_0x28ecbc(0x20a)](_0x28ecbc(0x3f5))[_0x28ecbc(0x348)]());
                        });
                    }
                    _0x50eb95 != null && (_0x50eb95['first']()[_0x1fcf2a(0x20e)](_0x1fcf2a(0x2ef), 'relative'), _0x50eb95[_0x1fcf2a(0x348)]()['append'](_0x1fcf2a(0x203) + _0x5dd0bf(_0x1fcf2a(0x276)) + _0x1fcf2a(0x33b) + _0x41379a[_0x1fcf2a(0x38f)] + '</div>'));
                }
            }
        }
        async function _0x3d490c(_0x34fb30, _0x5d4219, _0x8fbb3e) {
            const _0x4c1855 = _0x56a610;
            if (_0x34fb30) {
                _0xddd829(!![]);
                let _0x53926f = location['href']['split']('?')['at'](0x0)[_0x4c1855(0x1ff)]('instagram.com/reels/')['at'](-0x1)[_0x4c1855(0x394)]('/', ''), _0x576f82 = await _0x162f41(_0x53926f), _0x30eb71 = _0x576f82['data'], _0x24350f = new Date()[_0x4c1855(0x3fc)]();
                _0x3cd537['RENAME_PUBLISH_DATE'] && (_0x576f82[_0x4c1855(0x233)] === _0x4c1855(0x39b) ? _0x24350f = _0x30eb71[_0x4c1855(0x3fd)][_0x4c1855(0x286)] : _0x24350f = _0x30eb71['taken_at']);
                if (_0x576f82[_0x4c1855(0x233)] === _0x4c1855(0x39b)) {
                    if (_0x5d4219 && _0x30eb71[_0x4c1855(0x3fd)][_0x4c1855(0x24e)]) {
                        if (_0x8fbb3e)
                            _0x346b7b(_0x30eb71[_0x4c1855(0x3fd)][_0x4c1855(0x3de)]);
                        else {
                            let _0x5a6deb = _0x4c1855(0x31a);
                            _0x1a967c(_0x30eb71[_0x4c1855(0x3fd)][_0x4c1855(0x3de)], _0x30eb71[_0x4c1855(0x3fd)]['owner'][_0x4c1855(0x316)], _0x4c1855(0x3aa), _0x24350f, _0x5a6deb, _0x53926f);
                        }
                    } else {
                        if (_0x8fbb3e)
                            _0x346b7b(_0x30eb71[_0x4c1855(0x3fd)]['display_resources']['at'](-0x1)['src']);
                        else {
                            let _0x4f83f7 = _0x4c1855(0x353);
                            _0x1a967c(_0x30eb71[_0x4c1855(0x3fd)][_0x4c1855(0x242)]['at'](-0x1)[_0x4c1855(0x1e3)], _0x30eb71[_0x4c1855(0x3fd)]['owner']['username'], _0x4c1855(0x3aa), _0x24350f, _0x4f83f7, _0x53926f);
                        }
                    }
                } else {
                    if (_0x5d4219 && _0x30eb71[_0x4c1855(0x368)] != null) {
                        if (_0x8fbb3e)
                            _0x346b7b(_0x30eb71[_0x4c1855(0x368)][0x0][_0x4c1855(0x2c7)]);
                        else {
                            let _0x122bf3 = 'mp4';
                            _0x1a967c(_0x30eb71[_0x4c1855(0x368)][0x0][_0x4c1855(0x2c7)], _0x30eb71[_0x4c1855(0x1dd)][_0x4c1855(0x316)], _0x4c1855(0x3aa), _0x24350f, _0x122bf3, _0x53926f);
                        }
                    } else {
                        if (_0x8fbb3e)
                            _0x346b7b(_0x30eb71[_0x4c1855(0x3f0)][_0x4c1855(0x250)][0x0][_0x4c1855(0x2c7)]);
                        else {
                            let _0x1396e2 = _0x4c1855(0x353);
                            _0x1a967c(_0x30eb71['image_versions2'][_0x4c1855(0x250)][0x0][_0x4c1855(0x2c7)], _0x30eb71[_0x4c1855(0x1dd)][_0x4c1855(0x316)], _0x4c1855(0x3aa), _0x24350f, _0x1396e2, _0x53926f);
                        }
                    }
                }
                _0xddd829(![]);
            } else
                var _0x2bd790 = setInterval(() => {
                    const _0x15516f = _0x4c1855;
                    _0x46922f(_0x15516f(0x2c9))[_0x15516f(0x3ba)] > 0x0 && (clearInterval(_0x2bd790), _0x3cd537[_0x15516f(0x1d6)] && (_0x46922f(_0x15516f(0x2bf))[_0x15516f(0x219)](), _0x46922f(_0x15516f(0x312))[_0x15516f(0x267)]('<section\x20id=\x22scrollWrapper\x22></section>'), _0x46922f('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper')['append'](_0x15516f(0x294)), _0x46922f(_0x15516f(0x409))[_0x15516f(0x267)](_0x15516f(0x207)), _0x46922f(_0x15516f(0x2b6))['on'](_0x15516f(0x2fe), function () {
                        const _0x4655a6 = _0x15516f;
                        _0x46922f('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x4655a6(0x299)]({
                            'top': -0x1e,
                            'behavior': _0x4655a6(0x39c)
                        });
                    }), _0x46922f('section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down')['on'](_0x15516f(0x2fe), function () {
                        const _0x237eb8 = _0x15516f;
                        _0x46922f('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x237eb8(0x299)]({
                            'top': 0x1e,
                            'behavior': 'smooth'
                        });
                    })), _0x46922f(_0x15516f(0x31e))[_0x15516f(0x20a)]('div')[_0x15516f(0x31f)](function () {
                        const _0x4c5ea8 = _0x15516f;
                        if (_0x46922f(this)[_0x4c5ea8(0x20a)]()[_0x4c5ea8(0x3ba)] > 0x0) {
                            if (!_0x46922f(this)['children']()[_0x4c5ea8(0x2a4)](_0x4c5ea8(0x3a4))[_0x4c5ea8(0x3ba)]) {
                                var _0x5e17e0 = _0x46922f(this);
                                _0x46922f(this)['children']()['css'](_0x4c5ea8(0x2ef), _0x4c5ea8(0x2c0)), _0x46922f(this)[_0x4c5ea8(0x20a)]()[_0x4c5ea8(0x267)](_0x4c5ea8(0x3c4) + _0x5dd0bf('DW') + _0x4c5ea8(0x371) + _0x41379a[_0x4c5ea8(0x1d8)] + '</div>'), _0x46922f(this)[_0x4c5ea8(0x20a)]()[_0x4c5ea8(0x267)](_0x4c5ea8(0x258) + _0x5dd0bf(_0x4c5ea8(0x2ab)) + '\x22\x20class=\x22IG_REELS_NEWTAB\x22>' + _0x41379a[_0x4c5ea8(0x2ab)] + _0x4c5ea8(0x205)), _0x46922f(this)[_0x4c5ea8(0x20a)]()[_0x4c5ea8(0x267)](_0x4c5ea8(0x203) + _0x5dd0bf(_0x4c5ea8(0x276)) + _0x4c5ea8(0x373) + _0x41379a[_0x4c5ea8(0x38f)] + _0x4c5ea8(0x205));
                                _0x3cd537['DISABLE_VIDEO_LOOPING'] && _0x46922f(this)[_0x4c5ea8(0x2a4)](_0x4c5ea8(0x20b))[_0x4c5ea8(0x31f)](function () {
                                    const _0x2ad8ab = _0x4c5ea8;
                                    _0x46922f(this)['on'](_0x2ad8ab(0x1eb), function () {
                                        const _0x208d0e = _0x2ad8ab;
                                        if (!_0x46922f(this)[_0x208d0e(0x31b)](_0x208d0e(0x2b2))) {
                                            let _0x56bbcf = _0x46922f(this)['next']()['find'](_0x208d0e(0x2ae))[_0x208d0e(0x2db)](_0x208d0e(0x35d));
                                            _0x56bbcf['length'] > 0x0 ? (_0x46922f(this)['attr'](_0x208d0e(0x1c8), !![]), _0x56bbcf['click'](), _0x47101f(_0x208d0e(0x2fd))) : (_0x46922f(this)[_0x208d0e(0x2b8)](_0x208d0e(0x1c8), !![]), _0x46922f(this)[_0x208d0e(0x3c7)]()[_0x208d0e(0x2a4)](_0x208d0e(0x370))[_0x208d0e(0x215)](_0x208d0e(0x3d4)), this['pause'](), _0x47101f(_0x208d0e(0x1cf)));
                                        }
                                    });
                                });
                                _0x3cd537[_0x4c5ea8(0x244)] && _0x46922f(this)[_0x4c5ea8(0x2a4)]('video')['each'](function () {
                                    const _0x174576 = _0x4c5ea8;
                                    _0x46922f(this)['on'](_0x174576(0x386), function () {
                                        const _0x50f6ee = _0x174576;
                                        !_0x46922f(this)[_0x50f6ee(0x31b)]('modify') && (_0x46922f(this)['attr'](_0x50f6ee(0x290), !![]), this[_0x50f6ee(0x342)] = _0x48ec40, _0x47101f(_0x50f6ee(0x403)));
                                    });
                                });
                                _0x3cd537['HTML5_VIDEO_CONTROL'] && _0x46922f(this)[_0x4c5ea8(0x2a4)]('video')['each'](function () {
                                    const _0x5ad2da = _0x4c5ea8;
                                    if (!_0x46922f(this)[_0x5ad2da(0x31b)]('controls')) {
                                        let _0x5bd254 = _0x46922f(this);
                                        _0x47101f(_0x5ad2da(0x25c)), this[_0x5ad2da(0x342)] = _0x48ec40, _0x46922f(this)['on'](_0x5ad2da(0x330), function () {
                                            const _0x119146 = _0x5ad2da;
                                            this[_0x119146(0x342)] = _0x48ec40;
                                        }), _0x46922f(this)['on']('contextmenu', function (_0x3a793a) {
                                            const _0x6bed2f = _0x5ad2da;
                                            _0x3a793a[_0x6bed2f(0x37e)](), _0x5bd254[_0x6bed2f(0x20e)](_0x6bed2f(0x333), '-1'), _0x5bd254[_0x6bed2f(0x215)]('controls');
                                        }), _0x46922f(this)[_0x5ad2da(0x3c7)]()[_0x5ad2da(0x2a4)](_0x5ad2da(0x3a0))[_0x5ad2da(0x29d)](function () {
                                            const _0x58a20a = _0x5ad2da;
                                            return _0x46922f(this)[_0x58a20a(0x3c7)](_0x58a20a(0x24a))[_0x58a20a(0x3ba)] > 0x0 && _0x46922f(this)[_0x58a20a(0x20e)](_0x58a20a(0x236)) === 'pointer' && _0x46922f(this)['attr'](_0x58a20a(0x3d4)) != null;
                                        })[_0x5ad2da(0x348)]()['on'](_0x5ad2da(0x327), function (_0x3300c3) {
                                            const _0x3937bd = _0x5ad2da;
                                            _0x3300c3[_0x3937bd(0x37e)](), _0x5bd254[_0x3937bd(0x20e)](_0x3937bd(0x333), '2'), _0x5bd254[_0x3937bd(0x2b8)](_0x3937bd(0x36a), !![]);
                                        }), _0x46922f(this)['on']('volumechange', function () {
                                            const _0x2b07e9 = _0x5ad2da;
                                            let _0x1be3f2 = _0x46922f(this)['parent']()[_0x2b07e9(0x2a4)](_0x2b07e9(0x3b1))[_0x2b07e9(0x2a4)](_0x2b07e9(0x221))[_0x2b07e9(0x29d)](function (_0x4fcc81) {
                                                const _0x3c0c98 = _0x2b07e9;
                                                return _0x46922f(this)[_0x3c0c98(0x223)]() <= 0x40 && _0x46922f(this)['height']() <= 0x40 && _0x46922f(this)[_0x3c0c98(0x2a4)](_0x3c0c98(0x3b6))['length'] > 0x0;
                                            });
                                            var _0x1ea0a7 = _0x1be3f2[_0x2b07e9(0x2a4)](_0x2b07e9(0x329))['length'] === 0x0;
                                            this['muted'] != _0x1ea0a7 && (this[_0x2b07e9(0x342)] = _0x48ec40, _0x1be3f2?.['click']()), _0x46922f(this)[_0x2b07e9(0x2b8)](_0x2b07e9(0x341)) && (_0x48ec40 = this[_0x2b07e9(0x342)], GM_setValue('G_VIDEO_VOLUME', this['volume'])), this[_0x2b07e9(0x342)] == _0x48ec40 && _0x46922f(this)['attr'](_0x2b07e9(0x341), !![]);
                                        }), _0x46922f(this)[_0x5ad2da(0x20e)](_0x5ad2da(0x2ef), _0x5ad2da(0x3d5)), _0x46922f(this)[_0x5ad2da(0x20e)](_0x5ad2da(0x333), '2'), _0x46922f(this)[_0x5ad2da(0x2b8)](_0x5ad2da(0x3bc), !![]), _0x46922f(this)[_0x5ad2da(0x2b8)]('controls', !![]);
                                    }
                                });
                                var _0x12a7aa = _0x46922f(this)[_0x4c5ea8(0x2a4)]('div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div')[_0x4c5ea8(0x348)]();
                                _0x12a7aa['append'](_0x4c5ea8(0x36b)), _0x12a7aa[_0x4c5ea8(0x2a4)](_0x4c5ea8(0x3ff))[_0x4c5ea8(0x267)](_0x4c5ea8(0x2fb) + _0x48ec40 + _0x4c5ea8(0x3e5)), _0x12a7aa['find']('div.volume_slider\x20input')['attr'](_0x4c5ea8(0x3d4), _0x4c5ea8(0x3bd) + (_0x48ec40 * 0x64 + '%')), _0x12a7aa['find'](_0x4c5ea8(0x1c9))['on'](_0x4c5ea8(0x396), function () {
                                    const _0x1b6839 = _0x4c5ea8;
                                    var _0xcf6caa = _0x46922f(this)[_0x1b6839(0x325)]() * 0x64 + '%';
                                    _0x48ec40 = _0x46922f(this)[_0x1b6839(0x325)](), GM_setValue(_0x1b6839(0x302), _0x46922f(this)[_0x1b6839(0x325)]()), _0x46922f(this)[_0x1b6839(0x2b8)](_0x1b6839(0x3d4), '--ig-track-progress:\x20' + _0xcf6caa), _0x5e17e0[_0x1b6839(0x2a4)](_0x1b6839(0x20b))[_0x1b6839(0x31f)](function () {
                                        const _0x19f302 = _0x1b6839;
                                        _0x47101f('(reel)\x20video\x20volume\x20changed\x20#slider'), this[_0x19f302(0x342)] = _0x48ec40;
                                    });
                                }), _0x12a7aa[_0x4c5ea8(0x2a4)]('div.volume_slider\x20input')['on'](_0x4c5ea8(0x245), function () {
                                    const _0x2d00ae = _0x4c5ea8;
                                    var _0x31e480 = _0x48ec40 * 0x64 + '%';
                                    _0x46922f(this)[_0x2d00ae(0x2b8)]('style', '--ig-track-progress:\x20' + _0x31e480), _0x46922f(this)[_0x2d00ae(0x325)](_0x48ec40), _0x5e17e0[_0x2d00ae(0x2a4)]('video')[_0x2d00ae(0x31f)](function () {
                                        _0x47101f('(reel)\x20video\x20volume\x20changed\x20#slider'), this['volume'] = _0x48ec40;
                                    });
                                }), _0x12a7aa[_0x4c5ea8(0x2a4)](_0x4c5ea8(0x3ff))['on'](_0x4c5ea8(0x2fe), function (_0x51f4d7) {
                                    const _0x6dc36b = _0x4c5ea8;
                                    _0x51f4d7['stopPropagation'](), _0x51f4d7[_0x6dc36b(0x37e)]();
                                });
                            }
                        }
                    }));
                }, 0xfa);
        }
        function _0x2f0da4(_0x4d2247) {
            return new Promise((_0x386e70, _0x50ba59) => {
                const _0x519a25 = a0_0x4451;
                let _0x407822 = _0x519a25(0x301) + _0x4d2247 + '%22%5D,%22precomposed_overlay%22:false%7D';
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x407822,
                    'onload': function (_0x35e7e4) {
                        const _0x1bd8b0 = _0x519a25;
                        try {
                            let _0x48dae2 = JSON[_0x1bd8b0(0x287)](_0x35e7e4[_0x1bd8b0(0x3da)]);
                            _0x386e70(_0x48dae2);
                        } catch (_0x650cad) {
                            _0x47101f(_0x1bd8b0(0x2dc), _0x1bd8b0(0x202), _0x650cad['message']), _0x50ba59(_0x650cad);
                        }
                    },
                    'onerror': function (_0xc9e763) {
                        const _0xa0fa43 = _0x519a25;
                        _0x47101f('getHighlightStories()', _0xa0fa43(0x202), _0xc9e763), _0x50ba59(_0xc9e763);
                    }
                });
            });
        }
        function _0x3ea346(_0x578b07) {
            return new Promise((_0x368b14, _0x4087a3) => {
                const _0x1149df = a0_0x4451;
                let _0x446805 = _0x1149df(0x1ec) + _0x578b07 + _0x1149df(0x1de);
                GM_xmlhttpRequest({
                    'method': _0x1149df(0x37b),
                    'url': _0x446805,
                    'onload': function (_0x3d8705) {
                        const _0x3dc914 = _0x1149df;
                        try {
                            let _0x461e06 = JSON['parse'](_0x3d8705[_0x3dc914(0x3da)]);
                            _0x47101f(_0x3dc914(0x2d2), _0x461e06), _0x368b14(_0x461e06);
                        } catch (_0x1c9b45) {
                            _0x47101f(_0x3dc914(0x2d2), _0x3dc914(0x202), _0x1c9b45[_0x3dc914(0x3d1)]), _0x4087a3(_0x1c9b45);
                        }
                    },
                    'onerror': function (_0x94a97b) {
                        const _0x2c1c0f = _0x1149df;
                        _0x47101f(_0x2c1c0f(0x2d2), _0x2c1c0f(0x202), _0x94a97b), _0x4087a3(_0x94a97b);
                    }
                });
            });
        }
        function _0x3dfac6(_0x11db2b) {
            return new Promise((_0x5742db, _0x6c1c62) => {
                const _0xca7c2e = a0_0x4451;
                let _0x4f610a = _0xca7c2e(0x1fe) + _0x11db2b;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x4f610a,
                    'onload': function (_0x2ad55a) {
                        const _0x529d8c = _0xca7c2e;
                        let _0x4e9407 = JSON[_0x529d8c(0x287)](_0x2ad55a[_0x529d8c(0x3da)]), _0x55411c = null;
                        _0x4e9407[_0x529d8c(0x3c3)][_0x529d8c(0x2d8)](_0x1284c2 => {
                            const _0x2f799d = _0x529d8c;
                            _0x1284c2[_0x2f799d(0x33e)]['username']?.[_0x2f799d(0x1dc)]() === _0x11db2b?.['toLowerCase']() && (_0x55411c = _0x1284c2);
                        }), _0x55411c != null ? (_0x47101f('getUserId()', _0x55411c), _0x5742db(_0x55411c)) : _0x192761(_0x11db2b)[_0x529d8c(0x36d)](_0x43cb24 => {
                            _0x5742db(_0x43cb24);
                        })[_0x529d8c(0x2a0)](_0x52584 => {
                            const _0x50037b = _0x529d8c;
                            alert(_0x50037b(0x364));
                        });
                    },
                    'onerror': function (_0x5db021) {
                        const _0x24d3dd = _0xca7c2e;
                        _0x47101f(_0x24d3dd(0x270), _0x24d3dd(0x202), _0x5db021), _0x6c1c62(_0x5db021);
                    }
                });
            });
        }
        function _0x192761(_0xb5a54) {
            return new Promise((_0x1134c3, _0xc489a6) => {
                const _0x22d502 = a0_0x4451;
                let _0x52600f = _0x22d502(0x210) + _0xb5a54;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x52600f,
                    'headers': { 'X-IG-App-ID': _0x448567() },
                    'onload': function (_0x2b25c1) {
                        const _0x3220c8 = _0x22d502;
                        try {
                            let _0x29041d = JSON[_0x3220c8(0x287)](_0x2b25c1[_0x3220c8(0x3da)]), _0x52442d = _0x29041d?.[_0x3220c8(0x31b)]?.['user'];
                            if (_0x52442d != null) {
                                let _0x285be2 = _0x29041d?.['data'];
                                _0x285be2[_0x3220c8(0x33e)]['pk'] = _0x285be2[_0x3220c8(0x33e)]['id'], _0x47101f(_0x3220c8(0x3a8), _0x29041d), _0x1134c3(_0x285be2);
                            } else
                                _0x47101f(_0x3220c8(0x3a8), _0x3220c8(0x202), _0x3220c8(0x22c)), _0xc489a6(_0x3220c8(0x22c));
                        } catch (_0x42fb21) {
                            _0x47101f(_0x3220c8(0x3a8), 'reject', _0x42fb21[_0x3220c8(0x3d1)]), _0xc489a6(_0x42fb21);
                        }
                    },
                    'onerror': function (_0x8fa693) {
                        const _0x385632 = _0x22d502;
                        _0x47101f(_0x385632(0x3a8), _0x385632(0x202), _0x8fa693), _0xc489a6(_0x8fa693);
                    }
                });
            });
        }
        function _0x47c709(_0x55d62d) {
            return new Promise((_0xf72d32, _0x39e63) => {
                const _0x4d27d8 = a0_0x4451;
                let _0x2f9121 = _0x4d27d8(0x23d) + _0x55d62d + _0x4d27d8(0x3cb);
                GM_xmlhttpRequest({
                    'method': _0x4d27d8(0x37b),
                    'url': _0x2f9121,
                    'headers': { 'User-Agent': _0x4d27d8(0x237) },
                    'onload': function (_0x4813f4) {
                        const _0x49ad60 = _0x4d27d8;
                        try {
                            let _0xffd507 = JSON[_0x49ad60(0x287)](_0x4813f4[_0x49ad60(0x3da)]);
                            _0xffd507[_0x49ad60(0x34f)] !== 'ok' ? (_0x47101f('getUserHighSizeProfile()', _0x49ad60(0x202), _0xffd507), _0x39e63(_0x49ad60(0x3e1))) : (_0x47101f('getUserHighSizeProfile()', _0xffd507), _0xf72d32(_0xffd507[_0x49ad60(0x33e)][_0x49ad60(0x405)]?.[_0x49ad60(0x2c7)]));
                        } catch (_0x408488) {
                            _0x47101f(_0x49ad60(0x2ea), _0x49ad60(0x202), _0x408488), _0x39e63(_0x408488);
                        }
                    },
                    'onerror': function (_0x4004f2) {
                        _0x47101f('getUserHighSizeProfile()', 'reject', _0x4004f2), _0x39e63(_0x4004f2);
                    }
                });
            });
        }
        function _0x141338(_0x51080d) {
            return new Promise((_0x59b252, _0x2c12b4) => {
                const _0x42f424 = a0_0x4451;
                if (!_0x51080d)
                    _0x2c12b4(_0x42f424(0x2ba));
                let _0x38e2c1 = _0x51080d, _0x27695b = _0x42f424(0x379) + _0x38e2c1 + _0x42f424(0x22b);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x27695b,
                    'onload': function (_0x27cb6d) {
                        const _0x53bcd8 = _0x42f424;
                        try {
                            let _0xd60a98 = JSON['parse'](_0x27cb6d[_0x53bcd8(0x3da)]);
                            _0x47101f(_0x53bcd8(0x279), _0xd60a98), _0x59b252(_0xd60a98[_0x53bcd8(0x31b)]['shortcode_media'][_0x53bcd8(0x1dd)][_0x53bcd8(0x316)]);
                        } catch (_0x19d2b9) {
                            _0x47101f('getPostOwner()', _0x53bcd8(0x202), _0x19d2b9[_0x53bcd8(0x3d1)]), _0x2c12b4(_0x19d2b9);
                        }
                    },
                    'onerror': function (_0x9f3618) {
                        const _0xe0d2e3 = _0x42f424;
                        _0x47101f(_0xe0d2e3(0x279), 'reject', _0x9f3618), _0x2c12b4(_0x9f3618);
                    }
                });
            });
        }
        function _0x162f41(_0x4c39e7) {
            return new Promise((_0x44a2d4, _0xf94de5) => {
                const _0x5761cd = a0_0x4451;
                if (!_0x4c39e7)
                    _0xf94de5(_0x5761cd(0x2ba));
                let _0x3ef417 = _0x4c39e7, _0x2b556a = 'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22' + _0x3ef417 + _0x5761cd(0x22b);
                GM_xmlhttpRequest({
                    'method': _0x5761cd(0x37b),
                    'url': _0x2b556a,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x728a21) {
                        const _0x509153 = _0x5761cd;
                        try {
                            let _0x37a4a4 = JSON['parse'](_0x728a21['response']);
                            _0x47101f(_0x37a4a4), _0x37a4a4[_0x509153(0x34f)] === _0x509153(0x332) ? (_0x47101f(_0x509153(0x2d5), _0x509153(0x27c), _0x3ef417), _0x125dcd(_0x3ef417)[_0x509153(0x36d)](_0x138ba7 => {
                                const _0x496566 = _0x509153;
                                _0x44a2d4({
                                    'type': 'query_id',
                                    'data': _0x138ba7[_0x496566(0x2ce)][_0x496566(0x1e0)][0x0]
                                });
                            })['catch'](_0x53ec43 => {
                                _0xf94de5(_0x53ec43);
                            })) : _0x44a2d4({
                                'type': 'query_hash',
                                'data': _0x37a4a4[_0x509153(0x31b)]
                            });
                        } catch (_0x4a0fa3) {
                            _0x47101f(_0x509153(0x297), _0x509153(0x202), _0x4a0fa3['message']), _0xf94de5(_0x4a0fa3);
                        }
                    },
                    'onerror': function (_0x229ff2) {
                        const _0x401f99 = _0x5761cd;
                        _0x47101f('getBlobMedia()', _0x401f99(0x202), _0x229ff2), _0xf94de5(_0x229ff2);
                    }
                });
            });
        }
        function _0x125dcd(_0x5bb0b3) {
            return new Promise((_0x5d53f1, _0x406074) => {
                const _0x40b7bd = a0_0x4451;
                if (!_0x5bb0b3)
                    _0x406074('NOPATH');
                let _0x30ffe4 = _0x5bb0b3, _0x4dc4f6 = 'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22' + _0x30ffe4 + '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}';
                GM_xmlhttpRequest({
                    'method': _0x40b7bd(0x37b),
                    'url': _0x4dc4f6,
                    'headers': {
                        'User-Agent': _0x40b7bd(0x237),
                        'X-IG-App-ID': _0x448567()
                    },
                    'onload': function (_0x12b17c) {
                        const _0x1448e6 = _0x40b7bd;
                        try {
                            let _0x2778cf = JSON[_0x1448e6(0x287)](_0x12b17c['response']);
                            _0x47101f(_0x2778cf), _0x2778cf[_0x1448e6(0x34f)] === _0x1448e6(0x332) ? (alert('getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a' + _0x2778cf['message'] + ':\x20' + _0x2778cf[_0x1448e6(0x217)]), _0x47101f('Request\x20failed\x20with\x20API\x20response\x20' + _0x2778cf['message'] + ':\x20' + _0x2778cf['feedback_message']), _0x406074(_0x12b17c)) : (_0x47101f(_0x1448e6(0x393), _0x2778cf[_0x1448e6(0x31b)]), _0x5d53f1(_0x2778cf[_0x1448e6(0x31b)]));
                        } catch (_0x404357) {
                            _0x47101f(_0x1448e6(0x393), _0x1448e6(0x202), _0x404357[_0x1448e6(0x3d1)]), _0x406074(_0x404357);
                        }
                    },
                    'onerror': function (_0x2cd346) {
                        const _0xd7cee2 = _0x40b7bd;
                        _0x47101f(_0xd7cee2(0x393), _0xd7cee2(0x202), _0x2cd346), _0x406074(_0x2cd346);
                    }
                });
            });
        }
        function _0x79f4e4(_0x572450, _0x392cb7) {
            const _0x30470e = _0x56a610;
            _0x392cb7 === !![] && (_0x47101f(_0x30470e(0x2f4), _0x30470e(0x1c5)), _0x46922f(_0x30470e(0x328))[_0x30470e(0x29d)](function () {
                const _0x11e070 = _0x30470e;
                return _0x46922f(this)[_0x11e070(0x2a4)](_0x11e070(0x224))['length'] === 0x0;
            })[_0x30470e(0x215)]('data-snig'));
            if (_0x572450 == ![]) {
                const _0x5c8db2 = 0x64;
                let _0x41e4b8 = 0x0;
                var _0x31514c = setInterval(() => {
                    const _0x3a9167 = _0x30470e;
                    (_0x41e4b8 > _0x5c8db2 || _0x46922f(_0x3a9167(0x310))[_0x3a9167(0x3ba)] > 0x0) && (clearInterval(_0x31514c), _0x41e4b8 > _0x5c8db2 && console['warn'](_0x3a9167(0x306), _0x3a9167(0x25f))), _0x47101f('onReadyMyDW()\x20Timer', 'repeating\x20to\x20call\x20detection\x20createDownloadButton()'), _0x49d1af(), _0x41e4b8++;
                }, 0x32);
            } else
                _0x49d1af();
        }
        function _0x448567() {
            const _0x3daa6b = _0x56a610;
            let _0x1696b2 = null;
            return _0x46922f(_0x3daa6b(0x3a6))[_0x3daa6b(0x31f)](function () {
                const _0x443e44 = _0x3daa6b, _0x30869a = /"APP_ID":"([0-9]+)"/ig, _0x595ca0 = _0x46922f(this)[_0x443e44(0x291)]()[_0x443e44(0x3b5)](_0x30869a);
                _0x595ca0 != null && _0x1696b2 == null && (_0x1696b2 = [..._0x46922f(this)[_0x443e44(0x291)]()[_0x443e44(0x289)](_0x30869a)]);
            }), _0x1696b2 ? _0x1696b2['at'](0x0)['at'](-0x1) : null;
        }
        function _0xddd829(_0x4b988f) {
            const _0x43533e = _0x56a610;
            _0x4b988f ? (_0x46922f(_0x43533e(0x402))['removeClass']('x1s85apg'), _0x46922f(_0x43533e(0x402))[_0x43533e(0x20e)](_0x43533e(0x333), _0x43533e(0x1e8))) : (_0x46922f(_0x43533e(0x402))[_0x43533e(0x3bb)](_0x43533e(0x2f8)), _0x46922f(_0x43533e(0x402))[_0x43533e(0x20e)](_0x43533e(0x333), ''));
        }
        function _0x365e73(_0x968430) {
            return new Promise((_0x592f01, _0x106215) => {
                const _0x4867b9 = a0_0x4451;
                let _0x4072a2 = _0x4867b9(0x2c8) + _0x968430 + _0x4867b9(0x3cb);
                if (_0x968430 == null) {
                    alert(_0x4867b9(0x264)), _0x47101f(_0x4867b9(0x399), _0x4867b9(0x202), 'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.'), _0xddd829(![]), _0x106215(-0x1);
                    return;
                }
                if (_0x448567() == null) {
                    alert('Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.'), _0x47101f('getMediaInfo()', _0x4867b9(0x202), _0x4867b9(0x37f)), _0xddd829(![]), _0x106215(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x4072a2,
                    'headers': {
                        'User-Agent': window['navigator'][_0x4867b9(0x29f)],
                        'Accept': _0x4867b9(0x1df),
                        'X-IG-App-ID': _0x448567()
                    },
                    'onload': function (_0x26ee42) {
                        const _0x2c46c2 = _0x4867b9;
                        if (_0x26ee42['finalUrl'] == _0x4072a2) {
                            let _0x4b6203 = JSON[_0x2c46c2(0x287)](_0x26ee42[_0x2c46c2(0x3da)]);
                            _0x47101f(_0x2c46c2(0x399), _0x4b6203), _0x592f01(_0x4b6203);
                        } else {
                            let _0x522b3a = new URL(_0x26ee42['finalUrl']);
                            _0x522b3a['pathname'][_0x2c46c2(0x395)](_0x2c46c2(0x261)) ? (_0x47101f(_0x2c46c2(0x399), 'reject', _0x2c46c2(0x1bf)), alert(_0x2c46c2(0x1bf))) : (_0x47101f(_0x2c46c2(0x399), _0x2c46c2(0x202), _0x2c46c2(0x1f0) + _0x26ee42[_0x2c46c2(0x26d)] + '\x22'), alert(_0x2c46c2(0x1f0) + _0x26ee42[_0x2c46c2(0x26d)] + '\x22')), _0xddd829(![]), _0x106215(-0x1);
                        }
                    },
                    'onerror': function (_0x509d4) {
                        const _0x2e2b86 = _0x4867b9;
                        _0x47101f(_0x2e2b86(0x399), _0x2e2b86(0x202), _0x509d4), _0x592f01(_0x509d4);
                    }
                });
            });
        }
        function _0x5a0ec1(_0x53959a) {
            const _0x1295b8 = _0x56a610;
            var _0xbdb179 = 0x0, _0x385a3a = _0x53959a['find'](_0x1295b8(0x388));
            return (_0x385a3a == null || !_0x385a3a[_0x1295b8(0x3c5)](_0x1295b8(0x358))) && (_0x385a3a = _0x53959a[_0x1295b8(0x2a4)](_0x1295b8(0x381))['eq'](0x0)[_0x1295b8(0x20a)]('div')), _0x385a3a[_0x1295b8(0x29d)]('._acnb')[_0x1295b8(0x31f)](function (_0x1ac2ee) {
                const _0x175a32 = _0x1295b8;
                _0x46922f(this)[_0x175a32(0x3c5)](_0x175a32(0x238)) && (_0xbdb179 = _0x1ac2ee);
            }), _0xbdb179;
        }
        function _0x1a35db(_0x2c27a2) {
            const _0x375ab0 = _0x56a610;
            _0x3cd537[_0x375ab0(0x3db)] && _0x2c27a2[_0x375ab0(0x2a4)](_0x375ab0(0x20b))[_0x375ab0(0x31f)](function () {
                _0x46922f(this)['on']('ended', function () {
                    const _0x3ff596 = a0_0x4451;
                    !_0x46922f(this)[_0x3ff596(0x31b)](_0x3ff596(0x2b2)) && (_0x46922f(this)['attr'](_0x3ff596(0x1c8), !![]), this[_0x3ff596(0x2e7)](), _0x47101f(_0x3ff596(0x1d3)));
                });
            });
            _0x3cd537[_0x375ab0(0x244)] && _0x2c27a2[_0x375ab0(0x2a4)](_0x375ab0(0x20b))[_0x375ab0(0x31f)](function () {
                const _0x1875f1 = _0x375ab0;
                _0x46922f(this)['on'](_0x1875f1(0x386), function () {
                    const _0x22b8b5 = _0x1875f1;
                    !_0x46922f(this)[_0x22b8b5(0x31b)](_0x22b8b5(0x2be)) && (_0x46922f(this)[_0x22b8b5(0x2b8)](_0x22b8b5(0x290), !![]), this[_0x22b8b5(0x342)] = _0x48ec40, _0x47101f(_0x22b8b5(0x354)));
                });
            });
            _0x3cd537[_0x375ab0(0x338)] && _0x2c27a2['find'](_0x375ab0(0x20b))[_0x375ab0(0x31f)](function () {
                const _0x2a61d5 = _0x375ab0;
                !_0x46922f(this)['data'](_0x2a61d5(0x36a)) && (_0x47101f(_0x2a61d5(0x1be)), this[_0x2a61d5(0x342)] = _0x48ec40, _0x46922f(this)['on'](_0x2a61d5(0x330), function () {
                    const _0xa28390 = _0x2a61d5;
                    this[_0xa28390(0x342)] = _0x48ec40;
                }), _0x46922f(this)['on'](_0x2a61d5(0x304), function () {
                    const _0xfddbb5 = _0x2a61d5;
                    let _0x218aa2 = _0x46922f(this)['parent']()['find'](_0xfddbb5(0x3b1))[_0xfddbb5(0x2a4)](_0xfddbb5(0x221))[_0xfddbb5(0x29d)](function (_0x8d3e97) {
                        const _0x153574 = _0xfddbb5;
                        return _0x46922f(this)[_0x153574(0x223)]() <= 0x40 && _0x46922f(this)['height']() <= 0x40 && _0x46922f(this)[_0x153574(0x2a4)]('svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]')[_0x153574(0x3ba)] > 0x0;
                    });
                    var _0x4dc7cc = _0x218aa2[_0xfddbb5(0x2a4)](_0xfddbb5(0x329))[_0xfddbb5(0x3ba)] === 0x0;
                    this[_0xfddbb5(0x226)] != _0x4dc7cc && (this[_0xfddbb5(0x342)] = _0x48ec40, _0x218aa2?.[_0xfddbb5(0x2fe)]()), _0x46922f(this)[_0xfddbb5(0x2b8)](_0xfddbb5(0x341)) && (_0x48ec40 = this[_0xfddbb5(0x342)], GM_setValue('G_VIDEO_VOLUME', this[_0xfddbb5(0x342)])), this[_0xfddbb5(0x342)] == _0x48ec40 && _0x46922f(this)[_0xfddbb5(0x2b8)](_0xfddbb5(0x341), !![]);
                }), _0x46922f(this)[_0x2a61d5(0x20e)](_0x2a61d5(0x2ef), _0x2a61d5(0x3d5)), _0x46922f(this)[_0x2a61d5(0x20e)](_0x2a61d5(0x333), '2'), _0x46922f(this)[_0x2a61d5(0x2b8)](_0x2a61d5(0x3bc), !![]), _0x46922f(this)[_0x2a61d5(0x2b8)]('controls', !![]));
            });
            var _0xa8eaa2 = _0x2c27a2[_0x375ab0(0x2a4)](_0x375ab0(0x3b1))[_0x375ab0(0x348)]();
            _0xa8eaa2[_0x375ab0(0x267)](_0x375ab0(0x38b)), _0xa8eaa2['find']('div.volume_slider')[_0x375ab0(0x267)](_0x375ab0(0x2fb) + _0x48ec40 + _0x375ab0(0x3e5)), _0xa8eaa2[_0x375ab0(0x2a4)](_0x375ab0(0x1c9))[_0x375ab0(0x2b8)](_0x375ab0(0x3d4), '--ig-track-progress:\x20' + (_0x48ec40 * 0x64 + '%')), _0xa8eaa2[_0x375ab0(0x2a4)](_0x375ab0(0x1c9))['on'](_0x375ab0(0x396), function () {
                const _0x129a3f = _0x375ab0;
                var _0x538a47 = _0x46922f(this)[_0x129a3f(0x325)]() * 0x64 + '%';
                _0x48ec40 = _0x46922f(this)[_0x129a3f(0x325)](), GM_setValue(_0x129a3f(0x302), _0x46922f(this)['val']()), _0x46922f(this)[_0x129a3f(0x2b8)](_0x129a3f(0x3d4), _0x129a3f(0x3bd) + _0x538a47), _0x2c27a2[_0x129a3f(0x2a4)](_0x129a3f(0x20b))[_0x129a3f(0x31f)](function () {
                    const _0x4004bb = _0x129a3f;
                    _0x47101f('(post)\x20video\x20volume\x20changed\x20#slider'), this[_0x4004bb(0x342)] = _0x48ec40;
                });
            }), _0xa8eaa2[_0x375ab0(0x2a4)]('div.volume_slider\x20input')['on'](_0x375ab0(0x245), function () {
                const _0x21d239 = _0x375ab0;
                var _0x4c5d65 = _0x48ec40 * 0x64 + '%';
                _0x46922f(this)[_0x21d239(0x2b8)]('style', _0x21d239(0x3bd) + _0x4c5d65), _0x46922f(this)[_0x21d239(0x325)](_0x48ec40), _0x2c27a2[_0x21d239(0x2a4)](_0x21d239(0x20b))[_0x21d239(0x31f)](function () {
                    const _0x2d022b = _0x21d239;
                    _0x47101f(_0x2d022b(0x293)), this[_0x2d022b(0x342)] = _0x48ec40;
                });
            }), _0xa8eaa2[_0x375ab0(0x2a4)](_0x375ab0(0x3ff))['on'](_0x375ab0(0x2fe), function (_0x4e1aec) {
                _0x4e1aec['stopPropagation'](), _0x4e1aec['preventDefault']();
            });
        }
        ;
        function _0x49d1af() {
            const _0x290001 = _0x56a610;
            _0x46922f(_0x290001(0x1f5))['map'](function (_0x29b8b3) {
                const _0x256917 = _0x290001;
                return _0x46922f(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x46922f(this)[_0x256917(0x3c7)]()[_0x256917(0x3c7)]()[_0x256917(0x3c7)]()[_0x256917(0x3c7)]()[0x0] : this;
            })[_0x290001(0x29d)](function () {
                const _0x549097 = _0x290001;
                return _0x46922f(this)[_0x549097(0x2e9)]() > 0x0 && _0x46922f(this)[_0x549097(0x223)]() > 0x0;
            })['each'](function (_0x4b7409) {
                const _0x35d828 = _0x290001;
                if (!_0x46922f(this)[_0x35d828(0x2b8)]('data-snig') && !_0x46922f(this)[_0x35d828(0x3c5)](_0x35d828(0x2f1)) && !_0x46922f(this)[_0x35d828(0x20a)](_0x35d828(0x1e7))?.[_0x35d828(0x3c5)]('x1iyjqo2') && _0x46922f(this)['parents'](_0x35d828(0x21e))[_0x35d828(0x3ba)] === 0x0) {
                    _0x47101f('Found\x20post\x20container', _0x46922f(this));
                    var _0x391da1 = 0xf, _0x304759 = 0xf, _0x1188e0 = _0x46922f(this), _0x33ffc1 = this['tagName'];
                    if (_0x33ffc1 === 'DIV' && _0x4b7409 != 0x0)
                        return;
                    const _0x30ebd3 = _0x1188e0[_0x35d828(0x20a)]('div')['children'](_0x35d828(0x3f5));
                    if (_0x30ebd3[_0x35d828(0x3ba)] === 0x0)
                        return;
                    _0x47101f(_0x35d828(0x28c), _0x30ebd3);
                    if (_0x1188e0[_0x35d828(0x2a4)](_0x35d828(0x319))[_0x35d828(0x3ba)] > 0x0) {
                        _0x1188e0[_0x35d828(0x2a4)](_0x35d828(0x2a5))[_0x35d828(0x3ba)] > 0x0 && _0x1188e0[_0x35d828(0x2a4)](_0x35d828(0x2a5))[_0x35d828(0x20e)]('top', '37px');
                        const _0x16f780 = _0x1188e0[_0x35d828(0x2a4)](_0x35d828(0x319))[_0x35d828(0x348)]()['parent']()[0x0];
                        var _0x3eadd3 = new MutationObserver(function (_0xe60d8a, _0x5bf5cc) {
                            const _0x69a29a = _0x35d828;
                            _0x1188e0['find']('._acay\x20+\x20.x24i39r')['css'](_0x69a29a(0x28a), '37px');
                        });
                        _0x3eadd3[_0x35d828(0x3b4)](_0x16f780, { 'childList': !![] });
                    }
                    const _0x4c7d2e = _0x35d828(0x3c4) + _0x5dd0bf('DW') + _0x35d828(0x2de) + _0x391da1 + _0x35d828(0x23a) + _0x304759 + 'px;\x22>' + _0x41379a[_0x35d828(0x1d8)] + _0x35d828(0x205), _0xcd9b7b = _0x35d828(0x258) + _0x5dd0bf(_0x35d828(0x2ab)) + _0x35d828(0x209) + (_0x391da1 + 0x23) + _0x35d828(0x23a) + _0x304759 + _0x35d828(0x37a) + _0x41379a[_0x35d828(0x2ab)] + _0x35d828(0x205), _0xe4d2d7 = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x5dd0bf(_0x35d828(0x276)) + '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22\x20style=\x22right:' + (_0x391da1 + 0x46) + _0x35d828(0x23a) + _0x304759 + _0x35d828(0x37a) + _0x41379a[_0x35d828(0x38f)] + _0x35d828(0x205);
                    _0x30ebd3['eq'](_0x33ffc1 === _0x35d828(0x3f7) ? 0x0 : _0x30ebd3['length'] - 0x2)[_0x35d828(0x267)](_0x4c7d2e), _0x30ebd3['eq'](_0x33ffc1 === 'DIV' ? 0x0 : _0x30ebd3[_0x35d828(0x3ba)] - 0x2)[_0x35d828(0x267)](_0xcd9b7b), setTimeout(() => {
                        const _0x324d3f = _0x35d828;
                        if (_0x30ebd3['eq'](_0x33ffc1 === _0x324d3f(0x3f7) ? 0x0 : _0x30ebd3[_0x324d3f(0x3ba)] - 0x2)[_0x324d3f(0x2a4)](_0x324d3f(0x38d))[_0x324d3f(0x3ba)] === 0x0)
                            _0x30ebd3[_0x324d3f(0x2a4)](_0x324d3f(0x20b))[_0x324d3f(0x3ba)] > 0x0 && _0x30ebd3['eq'](_0x33ffc1 === _0x324d3f(0x3f7) ? 0x0 : _0x30ebd3[_0x324d3f(0x3ba)] - 0x2)[_0x324d3f(0x267)](_0xe4d2d7);
                        else {
                            const _0x366fb2 = (_0x108894, _0xc4765a) => {
                                    const _0x5ba535 = _0x324d3f;
                                    _0x108894[_0x5ba535(0x2d8)](_0x697723 => {
                                        const _0x1d0903 = _0x5ba535;
                                        if (_0x697723[_0x1d0903(0x26c)]) {
                                            var _0x8ebdd1 = _0x46922f(_0x697723['target']);
                                            _0x8ebdd1[_0x1d0903(0x2a4)]('video')[_0x1d0903(0x3ba)] > 0x0 ? (_0x30ebd3['eq'](_0x33ffc1 === _0x1d0903(0x3f7) ? 0x0 : _0x30ebd3[_0x1d0903(0x3ba)] - 0x2)['append'](_0xe4d2d7), _0x1a35db(_0x1188e0)) : _0x30ebd3[_0x1d0903(0x2a4)]('.SNKMS_IG_THUMBNAIL_MAIN')?.['remove']();
                                        }
                                    });
                                }, _0x33972b = new IntersectionObserver(_0x366fb2, {
                                    'root': _0x1188e0[_0x324d3f(0x2a4)]('div\x20>\x20ul._acay')[_0x324d3f(0x348)]()[_0x324d3f(0x3c7)]()[_0x324d3f(0x3c7)]()[_0x324d3f(0x3c7)]()[0x0],
                                    'rootMargin': '0px',
                                    'threshold': 0.1
                                }), _0x3ec9e5 = new MutationObserver(function (_0x230c96, _0x333646) {
                                    const _0x12b8fd = _0x324d3f;
                                    var _0x249588 = _0x230c96['at'](0x0)?.['target'];
                                    _0x46922f(_0x249588)['find']('li._acaz')[_0x12b8fd(0x31f)](function () {
                                        const _0x33c395 = _0x12b8fd;
                                        _0x33972b[_0x33c395(0x3b4)](this);
                                    });
                                });
                            _0x1188e0[_0x324d3f(0x2a4)]('div\x20>\x20ul\x20li._acaz')['each'](function () {
                                const _0x44d498 = _0x324d3f;
                                _0x33972b[_0x44d498(0x3b4)](this);
                            });
                            const _0x340489 = _0x30ebd3['eq'](_0x33ffc1 === _0x324d3f(0x3f7) ? 0x0 : _0x30ebd3[_0x324d3f(0x3ba)] - 0x2)['find'](_0x324d3f(0x38d))?.[_0x324d3f(0x3c7)]()[0x0], _0x38b5fd = _0x30ebd3['eq'](_0x33ffc1 === 'DIV' ? 0x0 : _0x30ebd3[_0x324d3f(0x3ba)] - 0x2)[_0x324d3f(0x2a4)](_0x324d3f(0x38d))?.[_0x324d3f(0x3c7)]()[_0x324d3f(0x3c7)]()[0x0];
                            _0x340489 && _0x3ec9e5[_0x324d3f(0x3b4)](_0x340489, { 'childList': !![] }), _0x38b5fd && _0x3ec9e5['observe'](_0x38b5fd, { 'attributes': !![] });
                        }
                    }, 0x32), _0x30ebd3['css'](_0x35d828(0x2ef), _0x35d828(0x2c0)), _0x1a35db(_0x1188e0), _0x46922f(this)['on'](_0x35d828(0x2fe), '.SNKMS_IG_THUMBNAIL_MAIN', function (_0x32cf74) {
                        const _0x455912 = _0x35d828;
                        _0xddd829(!![]), _0x328f71 = _0x46922f(this)['parent']()['parent']()[_0x455912(0x3c7)]()[_0x455912(0x2b8)](_0x455912(0x1d5)), _0x5805c3 = location['pathname'][_0x455912(0x1d7)](/\/$/, '')[_0x455912(0x1ff)]('/')['at'](-0x1) || _0x46922f(this)[_0x455912(0x3c7)]()[_0x455912(0x3c7)]()['parent']()[_0x455912(0x2a4)]('a[href^=\x22/p/\x22]')[_0x455912(0x348)]()[_0x455912(0x2b8)](_0x455912(0x2a1))[_0x455912(0x1ff)]('/')['at'](0x2) || _0x46922f(this)[_0x455912(0x3c7)]()['parent']()[_0x455912(0x20a)]('div:last-child')[_0x455912(0x20a)](_0x455912(0x3f5))[_0x455912(0x20a)](_0x455912(0x23b))[_0x455912(0x2a4)](_0x455912(0x3ac))[_0x455912(0x248)]()['attr']('href')[_0x455912(0x1ff)]('/')['at'](0x2);
                        var _0x8ebade = _0x46922f(this)[_0x455912(0x3c7)]()[_0x455912(0x3c7)]()['parent'](), _0xa895bf = _0x5a0ec1(_0x8ebade);
                        _0x2693e3(!![], ![]), _0x229540(_0x5805c3, _0x455912(0x3d8), '')[_0x455912(0x36d)](() => {
                            let _0x354d4b = setInterval(() => {
                                const _0x13a7cd = a0_0x4451;
                                if (_0x46922f(_0x13a7cd(0x1ea))['length'] > 0x0) {
                                    clearInterval(_0x354d4b);
                                    var _0x4f76f5 = _0x46922f(_0x13a7cd(0x3bf) + (_0xa895bf + 0x1) + '\x22]')?.['parent']()[_0x13a7cd(0x2a4)](_0x13a7cd(0x37d))?.['first']();
                                    _0x4f76f5 != null && _0x4f76f5['length'] > 0x0 ? _0x4f76f5['click']() : alert(_0x13a7cd(0x214)), _0xddd829(![]), _0x46922f('.IG_SN_DIG')['remove']();
                                }
                            }, 0xfa);
                        });
                    }), _0x46922f(this)['on'](_0x35d828(0x2fe), '.SNKMS_IG_NEWTAB_MAIN', function (_0x2d1202) {
                        const _0x4a8d6f = _0x35d828;
                        _0xddd829(!![]), _0x328f71 = _0x46922f(this)['parent']()[_0x4a8d6f(0x3c7)]()['parent']()[_0x4a8d6f(0x2b8)](_0x4a8d6f(0x1d5)), _0x5805c3 = location[_0x4a8d6f(0x2c5)][_0x4a8d6f(0x1d7)](/\/$/, '')[_0x4a8d6f(0x1ff)]('/')['at'](-0x1) || _0x46922f(this)[_0x4a8d6f(0x3c7)]()[_0x4a8d6f(0x3c7)]()[_0x4a8d6f(0x3c7)]()[_0x4a8d6f(0x2a4)](_0x4a8d6f(0x3ac))['first']()['attr'](_0x4a8d6f(0x2a1))['split']('/')['at'](0x2) || _0x46922f(this)['parent']()[_0x4a8d6f(0x3c7)]()[_0x4a8d6f(0x20a)](_0x4a8d6f(0x23b))[_0x4a8d6f(0x20a)](_0x4a8d6f(0x3f5))[_0x4a8d6f(0x20a)](_0x4a8d6f(0x23b))['find'](_0x4a8d6f(0x3ac))['last']()[_0x4a8d6f(0x2b8)](_0x4a8d6f(0x2a1))[_0x4a8d6f(0x1ff)]('/')['at'](0x2);
                        var _0x41846a = _0x46922f(this)['parent']()[_0x4a8d6f(0x3c7)]()['parent'](), _0x58ba92 = _0x5a0ec1(_0x41846a);
                        _0x2693e3(!![], ![]), _0x229540(_0x5805c3, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', '')[_0x4a8d6f(0x36d)](() => {
                            let _0x1ce9ab = setInterval(() => {
                                const _0x409296 = a0_0x4451;
                                if (_0x46922f(_0x409296(0x1ea))[_0x409296(0x3ba)] > 0x0) {
                                    clearInterval(_0x1ce9ab);
                                    var _0x123fdf = _0x46922f(_0x409296(0x3bf) + (_0x58ba92 + 0x1) + '\x22]');
                                    if (_0x3cd537[_0x409296(0x23c)] && _0x3cd537[_0x409296(0x230)])
                                        _0x4fd6b3(_0x123fdf[_0x409296(0x348)]()[0x0], !![]);
                                    else {
                                        let _0x392c64 = _0x123fdf?.[_0x409296(0x2b8)](_0x409296(0x2f7));
                                        if (_0x392c64) {
                                            var _0x177dd9 = new URL(_0x392c64);
                                            _0x177dd9['host'] = _0x409296(0x232), _0x346b7b(_0x177dd9[_0x409296(0x2a1)]);
                                        } else
                                            alert(_0x409296(0x212));
                                    }
                                    _0xddd829(![]), _0x46922f('.IG_SN_DIG')[_0x409296(0x219)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x46922f(this)['on'](_0x35d828(0x2fe), _0x35d828(0x224), async function (_0x12b8e5) {
                        const _0x969356 = _0x35d828;
                        _0x328f71 = _0x46922f(this)[_0x969356(0x3c7)]()[_0x969356(0x3c7)]()[_0x969356(0x3c7)]()[_0x969356(0x2b8)]('data-username'), _0x5805c3 = location['pathname'][_0x969356(0x1d7)](/\/$/, '')[_0x969356(0x1ff)]('/')['at'](-0x1) || _0x46922f(this)[_0x969356(0x3c7)]()[_0x969356(0x3c7)]()[_0x969356(0x3c7)]()[_0x969356(0x2a4)](_0x969356(0x3ac))[_0x969356(0x348)]()[_0x969356(0x2b8)](_0x969356(0x2a1))[_0x969356(0x1ff)]('/')['at'](0x2) || _0x46922f(this)[_0x969356(0x3c7)]()[_0x969356(0x3c7)]()[_0x969356(0x20a)](_0x969356(0x23b))[_0x969356(0x20a)](_0x969356(0x3f5))[_0x969356(0x20a)](_0x969356(0x23b))[_0x969356(0x2a4)](_0x969356(0x3ac))['last']()['attr'](_0x969356(0x2a1))['split']('/')['at'](0x2), _0x2693e3(_0x3cd537[_0x969356(0x3f8)], !![]), _0x46922f(_0x969356(0x22f))[_0x969356(0x2dd)]('<a\x20href=\x22https://www.instagram.com/p/' + _0x5805c3 + '\x22>' + _0x5805c3 + '</a>');
                        if (_0x3cd537[_0x969356(0x3f6)]) {
                            _0xddd829(!![]), _0x4b4bab(!![]);
                            var _0x316129 = _0x5a0ec1(_0x46922f(this)[_0x969356(0x3c7)]()[_0x969356(0x3c7)]()[_0x969356(0x3c7)]());
                            _0x229540(_0x5805c3, _0x969356(0x3d8), '')[_0x969356(0x36d)](() => {
                                let _0x11b4fd = setInterval(() => {
                                    const _0x1613b6 = a0_0x4451;
                                    if (_0x46922f(_0x1613b6(0x1ea))[_0x1613b6(0x3ba)] > 0x0) {
                                        clearInterval(_0x11b4fd);
                                        var _0x359522 = _0x46922f(_0x1613b6(0x3bf) + (_0x316129 + 0x1) + '\x22]')?.[_0x1613b6(0x2b8)](_0x1613b6(0x2f7));
                                        _0x359522 ? (_0xddd829(![]), _0x46922f(_0x1613b6(0x3bf) + (_0x316129 + 0x1) + '\x22]')?.[_0x1613b6(0x2fe)]()) : alert(_0x1613b6(0x2d7)), _0x46922f('.IG_SN_DIG')[_0x1613b6(0x219)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x3cd537[_0x969356(0x3f8)]) {
                            var _0x3d40af = 0x0, _0x4125af = _0x46922f(this)[_0x969356(0x3c7)]()['parent']()[_0x969356(0x2a4)]('._acay\x20._acaz')['length'], _0xa7f8f8 = window[_0x969356(0x23f)][_0x969356(0x2c5)], _0x51552a = '/' + _0xa7f8f8[_0x969356(0x1ff)]('/')[0x1] + '/' + _0xa7f8f8[_0x969356(0x1ff)]('/')[0x2] + '/', _0xc3feee = _0x3cd537[_0x969356(0x33a)], _0x39c2e2 = new Date(_0x46922f(this)[_0x969356(0x3c7)]()[_0x969356(0x3c7)]()[_0x969356(0x2a4)]('a[href^=\x22/p/\x22]\x20time[datetime]')['first']()[_0x969356(0x2b8)](_0x969356(0x2cb)))['getTime']();
                            if (_0x4125af)
                                _0x46922f(this)['parent']()['find']('._acay\x20._acaz')[_0x969356(0x31f)](function () {
                                    const _0x235451 = _0x969356;
                                    let _0x463836 = _0x46922f(this)[_0x235451(0x3c7)]()[_0x235451(0x3c7)]()[_0x235451(0x2a4)]('video');
                                    _0x463836 && _0x463836[_0x235451(0x2b8)](_0x235451(0x1e3)) && (_0xc3feee = !![]);
                                }), _0xc3feee || _0x3cd537['FORCE_RESOURCE_VIA_MEDIA'] ? _0x229540(_0x5805c3, _0x969356(0x3d8), _0x5dd0bf('LOAD_BLOB_MULTIPLE')) : (_0x46922f(this)[_0x969356(0x3c7)]()[_0x969356(0x2a4)](_0x969356(0x305))['each'](function () {
                                    const _0x2e098b = _0x969356;
                                    _0x3d40af++;
                                    let _0x12a1c7 = _0x46922f(this)[_0x2e098b(0x2a4)](_0x2e098b(0x20b)), _0x57f0bf = _0x46922f(this)[_0x2e098b(0x2a4)](_0x2e098b(0x2ca)), _0x719d68 = _0x57f0bf['attr'](_0x2e098b(0x1da)) ? _0x57f0bf['attr'](_0x2e098b(0x1da))[_0x2e098b(0x1ff)]('\x20')[0x0] : _0x57f0bf[_0x2e098b(0x2b8)]('src');
                                    _0x12a1c7 && _0x12a1c7[_0x2e098b(0x2b8)](_0x2e098b(0x1e3)) && (_0xc3feee = !![]), _0x57f0bf && _0x719d68 && _0x46922f('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')['append'](_0x2e098b(0x367) + _0x39c2e2 + _0x2e098b(0x1cc) + _0x5805c3 + _0x2e098b(0x356) + _0x3d40af + _0x2e098b(0x360) + _0x719d68 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x719d68 + _0x2e098b(0x222) + _0x5dd0bf(_0x2e098b(0x335)) + _0x2e098b(0x220) + _0x3d40af + _0x2e098b(0x2e8));
                                }), _0xc3feee && _0x229540(_0x5805c3, '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x5dd0bf(_0x969356(0x384))));
                            else {
                                if (_0x3cd537[_0x969356(0x23c)])
                                    _0x229540(_0x5805c3, _0x969356(0x3d8), _0x5dd0bf(_0x969356(0x2f5)));
                                else {
                                    _0x3d40af++;
                                    let _0x2d2953 = _0x46922f(this)[_0x969356(0x3c7)]()[_0x969356(0x3c7)]()[_0x969356(0x2a4)](_0x969356(0x20b)), _0x1bb58e = _0x46922f(this)[_0x969356(0x3c7)]()[_0x969356(0x3c7)]()[_0x969356(0x2a4)](_0x969356(0x2ca)), _0x4d5eb9 = _0x1bb58e['attr'](_0x969356(0x1da)) ? _0x1bb58e[_0x969356(0x2b8)](_0x969356(0x1da))[_0x969356(0x1ff)]('\x20')[0x0] : _0x1bb58e[_0x969356(0x2b8)](_0x969356(0x1e3));
                                    _0x2d2953 && _0x2d2953[_0x969356(0x2b8)](_0x969356(0x1e3)) && _0x229540(_0x5805c3, _0x969356(0x3d8), _0x5dd0bf(_0x969356(0x34e))), _0x1bb58e && _0x4d5eb9 && _0x46922f(_0x969356(0x3d8))[_0x969356(0x267)](_0x969356(0x367) + _0x39c2e2 + _0x969356(0x1cc) + _0x5805c3 + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x3d40af + _0x969356(0x383) + _0x4d5eb9 + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x4d5eb9 + _0x969356(0x222) + _0x5dd0bf('IMG') + _0x969356(0x220) + _0x3d40af + _0x969356(0x2e8));
                                }
                            }
                        }
                        _0x46922f(_0x969356(0x1ea))[_0x969356(0x31f)](function () {
                            const _0x5c6af0 = _0x969356;
                            _0x46922f(this)[_0x5c6af0(0x300)](_0x5c6af0(0x1f6)), _0x46922f(this)[_0x5c6af0(0x285)](_0x5c6af0(0x25d)), _0x46922f(this)[_0x5c6af0(0x308)](_0x5c6af0(0x258) + _0x5dd0bf('NEW_TAB') + '\x22\x20class=\x22newTab\x22>' + _0x41379a[_0x5c6af0(0x2ab)] + _0x5c6af0(0x205)), _0x46922f(this)[_0x5c6af0(0x2b8)](_0x5c6af0(0x282)) == _0x5c6af0(0x20b) && _0x46922f(this)[_0x5c6af0(0x308)](_0x5c6af0(0x203) + _0x5dd0bf(_0x5c6af0(0x276)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x41379a[_0x5c6af0(0x38f)] + _0x5c6af0(0x205));
                        }), _0x3cd537[_0x969356(0x3f8)] && _0x229540(_0x5805c3, _0x969356(0x3d8), _0x5dd0bf(_0x969356(0x2f5)))['then'](() => {
                            let _0x14d2b6 = setInterval(() => {
                                const _0x357c41 = a0_0x4451;
                                _0x46922f(_0x357c41(0x1ea))['length'] > 0x0 && (clearInterval(_0x14d2b6), _0x46922f(_0x357c41(0x1ea))[_0x357c41(0x31f)](function () {
                                    const _0x32b039 = _0x357c41;
                                    _0x46922f(this)[_0x32b039(0x2fe)]();
                                }), _0x46922f(_0x357c41(0x378))[_0x357c41(0x219)]());
                            }, 0xfa);
                        });
                    });
                    var _0x5b75db = _0x46922f(this)['find']('header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a')[_0x35d828(0x348)]()[_0x35d828(0x291)]();
                    _0x46922f(this)[_0x35d828(0x2b8)](_0x35d828(0x2ad), _0x35d828(0x38e)), _0x46922f(this)[_0x35d828(0x2b8)](_0x35d828(0x1d5), _0x5b75db);
                }
            });
        }
        function _0x229540(_0x1dbe0a, _0x563ab4, _0x5e9e69) {
            return new Promise(async _0x47624b => {
                const _0x4e9242 = a0_0x4451;
                _0x46922f(_0x563ab4 + '\x20a')[_0x4e9242(0x219)](), _0x46922f(_0x563ab4)[_0x4e9242(0x267)]('<p\x20id=\x22_SNLOAD\x22>' + _0x5e9e69 + _0x4e9242(0x2b5));
                let _0x2e6ff5 = await _0x162f41(_0x1dbe0a);
                if (_0x2e6ff5['type'] === _0x4e9242(0x39b)) {
                    let _0xc5c448 = 0x1, _0x8592e3 = _0x2e6ff5['data'], _0x255931 = _0x8592e3[_0x4e9242(0x3fd)];
                    _0x255931[_0x4e9242(0x27d)] == 'GraphVideo' && _0x255931[_0x4e9242(0x3de)] && (_0x46922f(_0x563ab4)[_0x4e9242(0x267)](_0x4e9242(0x28e) + _0x255931['id'] + _0x4e9242(0x22d) + _0x255931['taken_at_timestamp'] + _0x4e9242(0x314) + _0x255931[_0x4e9242(0x1e1)] + _0x4e9242(0x366) + _0x255931[_0x4e9242(0x1dd)]['username'] + _0x4e9242(0x3a2) + _0xc5c448 + _0x4e9242(0x360) + _0x255931[_0x4e9242(0x3de)] + _0x4e9242(0x3ca) + _0x255931[_0x4e9242(0x242)][0x1][_0x4e9242(0x1e3)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x5dd0bf(_0x4e9242(0x280)) + _0x4e9242(0x220) + _0xc5c448 + _0x4e9242(0x2e8)), _0xc5c448++);
                    _0x255931[_0x4e9242(0x27d)] == _0x4e9242(0x278) && (_0x46922f(_0x563ab4)[_0x4e9242(0x267)](_0x4e9242(0x28e) + _0x255931['id'] + _0x4e9242(0x22d) + _0x255931['taken_at_timestamp'] + _0x4e9242(0x314) + _0x255931[_0x4e9242(0x1e1)] + _0x4e9242(0x1d0) + _0x255931[_0x4e9242(0x1dd)][_0x4e9242(0x316)] + _0x4e9242(0x3a2) + _0xc5c448 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x255931[_0x4e9242(0x242)][_0x255931[_0x4e9242(0x242)][_0x4e9242(0x3ba)] - 0x1][_0x4e9242(0x1e3)] + _0x4e9242(0x3ca) + _0x255931[_0x4e9242(0x242)][0x1][_0x4e9242(0x1e3)] + _0x4e9242(0x222) + _0x5dd0bf(_0x4e9242(0x335)) + _0x4e9242(0x220) + _0xc5c448 + _0x4e9242(0x2e8)), _0xc5c448++);
                    if (_0x255931[_0x4e9242(0x27d)] == _0x4e9242(0x262) && _0x255931[_0x4e9242(0x1d2)])
                        for (let _0x299f74 of _0x255931[_0x4e9242(0x1d2)][_0x4e9242(0x277)]) {
                            _0x299f74[_0x4e9242(0x3d3)][_0x4e9242(0x27d)] == _0x4e9242(0x2f6) && _0x46922f(_0x563ab4)['append']('<a\x20media-id=\x22' + _0x299f74[_0x4e9242(0x3d3)]['id'] + _0x4e9242(0x22d) + _0x255931[_0x4e9242(0x286)] + _0x4e9242(0x314) + _0x255931['shortcode'] + _0x4e9242(0x366) + _0x255931['owner']['username'] + _0x4e9242(0x3a2) + _0xc5c448 + _0x4e9242(0x360) + _0x299f74['node'][_0x4e9242(0x3de)] + _0x4e9242(0x3ca) + _0x299f74[_0x4e9242(0x3d3)][_0x4e9242(0x242)][0x1][_0x4e9242(0x1e3)] + _0x4e9242(0x3e2) + _0x5dd0bf(_0x4e9242(0x280)) + _0x4e9242(0x220) + _0xc5c448 + '\x20-</a>'), _0x299f74['node'][_0x4e9242(0x27d)] == _0x4e9242(0x278) && _0x46922f(_0x563ab4)['append'](_0x4e9242(0x28e) + _0x299f74[_0x4e9242(0x3d3)]['id'] + _0x4e9242(0x22d) + _0x255931['taken_at_timestamp'] + _0x4e9242(0x314) + _0x255931[_0x4e9242(0x1e1)] + _0x4e9242(0x1d0) + _0x255931['owner'][_0x4e9242(0x316)] + '\x22\x20data-globalIndex=\x22' + _0xc5c448 + _0x4e9242(0x360) + _0x299f74[_0x4e9242(0x3d3)][_0x4e9242(0x242)][_0x299f74['node']['display_resources']['length'] - 0x1][_0x4e9242(0x1e3)] + _0x4e9242(0x3ca) + _0x299f74[_0x4e9242(0x3d3)][_0x4e9242(0x242)][0x1][_0x4e9242(0x1e3)] + _0x4e9242(0x222) + _0x5dd0bf(_0x4e9242(0x335)) + _0x4e9242(0x220) + _0xc5c448 + _0x4e9242(0x2e8)), _0xc5c448++;
                        }
                } else {
                    let _0x138227 = _0x2e6ff5[_0x4e9242(0x31b)];
                    if (_0x138227[_0x4e9242(0x21c)])
                        _0x47101f(_0x4e9242(0x21c)), _0x138227[_0x4e9242(0x21c)]['forEach']((_0x36b12e, _0x4b934a) => {
                            const _0x2ac906 = _0x4e9242;
                            let _0x216390 = _0x4b934a + 0x1;
                            _0x36b12e[_0x2ac906(0x368)] == null ? _0x46922f(_0x563ab4)[_0x2ac906(0x267)]('<a\x20media-id=\x22' + _0x36b12e['pk'] + '\x22\x20datetime=\x22' + _0x36b12e[_0x2ac906(0x32b)] + _0x2ac906(0x314) + _0x138227[_0x2ac906(0x3c0)] + _0x2ac906(0x1d0) + _0x138227['owner'][_0x2ac906(0x316)] + _0x2ac906(0x3a2) + _0x216390 + _0x2ac906(0x360) + _0x36b12e['image_versions2']['candidates'][0x0][_0x2ac906(0x2c7)] + _0x2ac906(0x3ca) + _0x36b12e[_0x2ac906(0x3f0)][_0x2ac906(0x250)][0x0][_0x2ac906(0x2c7)] + _0x2ac906(0x222) + _0x5dd0bf(_0x2ac906(0x335)) + _0x2ac906(0x220) + _0x216390 + '\x20-</a>') : _0x46922f(_0x563ab4)[_0x2ac906(0x267)](_0x2ac906(0x28e) + _0x36b12e['pk'] + _0x2ac906(0x22d) + _0x36b12e[_0x2ac906(0x32b)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x138227[_0x2ac906(0x3c0)] + _0x2ac906(0x366) + _0x138227['owner'][_0x2ac906(0x316)] + _0x2ac906(0x3a2) + _0x216390 + _0x2ac906(0x360) + _0x36b12e[_0x2ac906(0x368)][0x0][_0x2ac906(0x2c7)] + _0x2ac906(0x3ca) + _0x36b12e[_0x2ac906(0x3f0)][_0x2ac906(0x250)][0x0][_0x2ac906(0x2c7)] + _0x2ac906(0x2d9) + _0x5dd0bf(_0x2ac906(0x280)) + _0x2ac906(0x220) + _0x216390 + '\x20-</a>');
                        });
                    else {
                        let _0x272930 = 0x1;
                        _0x138227[_0x4e9242(0x368)] == null ? _0x46922f(_0x563ab4)[_0x4e9242(0x267)](_0x4e9242(0x28e) + _0x138227['pk'] + '\x22\x20datetime=\x22' + _0x138227[_0x4e9242(0x32b)] + _0x4e9242(0x314) + _0x138227[_0x4e9242(0x3c0)] + _0x4e9242(0x1d0) + _0x138227[_0x4e9242(0x1dd)][_0x4e9242(0x316)] + _0x4e9242(0x3a2) + _0x272930 + _0x4e9242(0x360) + _0x138227[_0x4e9242(0x3f0)][_0x4e9242(0x250)][0x0][_0x4e9242(0x2c7)] + _0x4e9242(0x3ca) + _0x138227[_0x4e9242(0x3f0)][_0x4e9242(0x250)][0x0][_0x4e9242(0x2c7)] + _0x4e9242(0x222) + _0x5dd0bf(_0x4e9242(0x335)) + '</span>\x20' + _0x272930 + _0x4e9242(0x2e8)) : _0x46922f(_0x563ab4)[_0x4e9242(0x267)](_0x4e9242(0x28e) + _0x138227['pk'] + _0x4e9242(0x22d) + _0x138227[_0x4e9242(0x32b)] + _0x4e9242(0x314) + _0x138227[_0x4e9242(0x3c0)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x138227['owner'][_0x4e9242(0x316)] + '\x22\x20data-globalIndex=\x22' + _0x272930 + _0x4e9242(0x360) + _0x138227[_0x4e9242(0x368)][0x0][_0x4e9242(0x2c7)] + '\x22><img\x20width=\x22100\x22\x20src=\x22' + _0x138227[_0x4e9242(0x3f0)][_0x4e9242(0x250)][0x0][_0x4e9242(0x2c7)] + _0x4e9242(0x2d9) + _0x5dd0bf(_0x4e9242(0x280)) + _0x4e9242(0x220) + _0x272930 + _0x4e9242(0x2e8));
                    }
                }
                _0x46922f(_0x4e9242(0x2cc))[_0x4e9242(0x219)](), _0x46922f(_0x4e9242(0x1ea))[_0x4e9242(0x31f)](function () {
                    const _0xb7d9a7 = _0x4e9242;
                    _0x46922f(this)['wrap'](_0xb7d9a7(0x1f6)), _0x46922f(this)[_0xb7d9a7(0x285)](_0xb7d9a7(0x25d)), _0x46922f(this)[_0xb7d9a7(0x308)](_0xb7d9a7(0x258) + _0x5dd0bf('NEW_TAB') + '\x22\x20class=\x22newTab\x22>' + _0x41379a['NEW_TAB'] + _0xb7d9a7(0x205)), _0x46922f(this)[_0xb7d9a7(0x2b8)](_0xb7d9a7(0x282)) == 'video' && _0x46922f(this)[_0xb7d9a7(0x308)](_0xb7d9a7(0x203) + _0x5dd0bf(_0xb7d9a7(0x276)) + '\x22\x20class=\x22videoThumbnail\x22>' + _0x41379a[_0xb7d9a7(0x38f)] + '</div>');
                }), _0x47624b(!![]);
            });
        }
        function _0x2693e3(_0xf55134, _0x6ebd1a) {
            const _0x5dc27c = _0x56a610;
            let _0x57c03f = _0xf55134 ? 'hidden' : '';
            _0x46922f('body')[_0x5dc27c(0x267)](_0x5dc27c(0x3c9) + _0x57c03f + '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>'), _0x46922f(_0x5dc27c(0x201))[_0x5dc27c(0x267)](_0x5dc27c(0x30a) + _0x5dd0bf(_0x5dc27c(0x25b)) + _0x5dc27c(0x3d9) + _0x41379a['CLOSE'] + _0x5dc27c(0x2e3)), _0x6ebd1a && (_0x46922f(_0x5dc27c(0x201))['append']('<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>'), _0x46922f(_0x5dc27c(0x296))[_0x5dc27c(0x267)](_0x5dc27c(0x3e6) + _0x5dd0bf(_0x5dc27c(0x2d3)) + '</button>'), _0x46922f(_0x5dc27c(0x296))[_0x5dc27c(0x267)](_0x5dc27c(0x32f) + _0x5dd0bf(_0x5dc27c(0x346)) + _0x5dc27c(0x204)), _0x46922f(_0x5dc27c(0x201))[_0x5dc27c(0x267)](_0x5dc27c(0x228) + _0x5dd0bf('ALL_CHECK') + _0x5dc27c(0x3ae)));
        }
        function _0x4b4bab(_0x34fd8f) {
            const _0x4f2b0d = _0x56a610;
            _0x46922f('.IG_SN_DIG')[_0x4f2b0d(0x3ba)] && (_0x34fd8f ? _0x46922f(_0x4f2b0d(0x378))[_0x4f2b0d(0x3bb)](_0x4f2b0d(0x259)) : _0x46922f(_0x4f2b0d(0x378))[_0x4f2b0d(0x3a9)]('hidden'));
        }
        function _0x1a967c(_0x52b49e, _0x588a44, _0x1ae72f, _0x2cad1c, _0x366d08, _0x3d5fe5) {
            setTimeout(() => {
                const _0x62c5ca = a0_0x4451;
                _0xddd829(!![]), fetch(_0x52b49e)[_0x62c5ca(0x36d)](_0x403613 => {
                    const _0x68f0b7 = _0x62c5ca;
                    return _0x403613[_0x68f0b7(0x26f)]()['then'](_0x59f347 => {
                        _0xddd829(![]), _0x74eb89(_0x52b49e, _0x59f347, _0x588a44, _0x1ae72f, _0x2cad1c, _0x366d08, _0x3d5fe5);
                    });
                });
            }, 0x32);
        }
        function _0x74eb89(_0x5a0158, _0x2f5e76, _0x5496a0, _0x2d6558, _0x35532d, _0x3351c2, _0x3107e2) {
            const _0x5ea96a = _0x56a610;
            _0x35532d = parseInt(_0x35532d[_0x5ea96a(0x284)]()['padEnd'](0xd, '0'));
            _0x3cd537[_0x5ea96a(0x33c)] && (_0x35532d = parseInt(_0x35532d[_0x5ea96a(0x284)]()['padEnd'](0xd, '0')));
            const _0x3453e8 = new Date(_0x35532d), _0x2d79e8 = document[_0x5ea96a(0x24c)]('a'), _0x5310db = new URL(_0x5a0158)[_0x5ea96a(0x2c5)][_0x5ea96a(0x1ff)]('/')['at'](-0x1)[_0x5ea96a(0x1ff)]('.')[_0x5ea96a(0x260)](0x0, -0x1)[_0x5ea96a(0x2b3)]('.'), _0x4a55ed = _0x3453e8['getFullYear']()[_0x5ea96a(0x284)](), _0x46ec23 = (_0x3453e8['getMonth']() + 0x1)[_0x5ea96a(0x284)]()['padStart'](0x2, '0'), _0x3d9722 = _0x3453e8[_0x5ea96a(0x231)]()[_0x5ea96a(0x284)]()['padStart'](0x2, '0'), _0x464cb8 = _0x3453e8[_0x5ea96a(0x1f2)]()[_0x5ea96a(0x284)]()['padStart'](0x2, '0'), _0xe4a4b5 = _0x3453e8[_0x5ea96a(0x376)]()[_0x5ea96a(0x284)]()[_0x5ea96a(0x340)](0x2, '0'), _0x6d12c8 = _0x3453e8['getSeconds']()[_0x5ea96a(0x284)]()[_0x5ea96a(0x340)](0x2, '0');
            var _0x1c976e = _0x400a86[_0x5ea96a(0x21f)](), _0x9049e8 = {
                    '%USERNAME%': _0x5496a0,
                    '%SOURCE_TYPE%': _0x2d6558,
                    '%SHORTCODE%': _0x3107e2 ? _0x3107e2 : '',
                    '%YEAR%': _0x4a55ed,
                    '%2-YEAR%': _0x4a55ed[_0x5ea96a(0x1c1)](-0x2),
                    '%MONTH%': _0x46ec23,
                    '%DAY%': _0x3d9722,
                    '%HOUR%': _0x464cb8,
                    '%MINUTE%': _0xe4a4b5,
                    '%SECOND%': _0x6d12c8,
                    '%ORIGINAL_NAME%': _0x5310db,
                    '%ORIGINAL_NAME_FIRST%': _0x5310db[_0x5ea96a(0x1ff)]('_')['at'](0x0)
                };
            _0x1c976e = _0x1c976e[_0x5ea96a(0x1d7)](/%[\w\-]+%/g, function (_0x46ae83) {
                return _0x9049e8[_0x46ae83] || _0x46ae83;
            });
            const _0x294c22 = _0x5496a0 + '_' + _0x5310db + '.' + _0x3351c2;
            _0x2d79e8[_0x5ea96a(0x2a1)] = URL[_0x5ea96a(0x313)](_0x2f5e76), _0x2d79e8[_0x5ea96a(0x404)](_0x5ea96a(0x323), _0x3cd537[_0x5ea96a(0x31c)] ? _0x1c976e + '.' + _0x3351c2 : _0x294c22), _0x2d79e8[_0x5ea96a(0x2fe)](), _0x2d79e8[_0x5ea96a(0x219)]();
        }
        async function _0x4fd6b3(_0x4c3f76, _0x2404ce) {
            const _0x2a3d5b = _0x56a610;
            let _0x240f11 = new Date()['getTime'](), _0x3f8174 = Math[_0x2a3d5b(0x3e9)](_0x240f11 / 0x3e8), _0x2c5aff = _0x46922f(_0x4c3f76)['attr']('data-username') ? _0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)]('data-username') : _0x328f71;
            !_0x2c5aff && _0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x355)) && (_0x47101f('catching\x20owner\x20name\x20from\x20shortcode:', _0x46922f(_0x4c3f76)['attr'](_0x2a3d5b(0x2f7))), _0x2c5aff = await _0x141338(_0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x355))));
            _0x3cd537[_0x2a3d5b(0x33c)] && _0x46922f(_0x4c3f76)['attr'](_0x2a3d5b(0x2cb)) && (_0x3f8174 = parseInt(_0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x2cb))));
            if (_0x3cd537['FORCE_RESOURCE_VIA_MEDIA']) {
                _0xddd829(!![]);
                let _0x51523b = await _0x365e73(_0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x35e)));
                _0xddd829(![]);
                if (_0x51523b[_0x2a3d5b(0x34f)] === 'ok') {
                    var _0x4c8d32 = null;
                    _0x51523b[_0x2a3d5b(0x1e0)][0x0][_0x2a3d5b(0x368)] ? _0x4c8d32 = _0x51523b[_0x2a3d5b(0x1e0)][0x0][_0x2a3d5b(0x368)][0x0][_0x2a3d5b(0x2c7)] : _0x4c8d32 = _0x51523b[_0x2a3d5b(0x1e0)][0x0][_0x2a3d5b(0x3f0)][_0x2a3d5b(0x250)][0x0][_0x2a3d5b(0x2c7)];
                    if (_0x2404ce) {
                        let _0x1b782e = new URL(_0x4c8d32);
                        _0x1b782e[_0x2a3d5b(0x3b7)] = _0x2a3d5b(0x232), _0x346b7b(_0x1b782e[_0x2a3d5b(0x2a1)]);
                    } else
                        _0x1a967c(_0x4c8d32, _0x2c5aff, _0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x282)), _0x3f8174, _0x46922f(_0x4c3f76)['attr'](_0x2a3d5b(0x200)), _0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x355)));
                } else {
                    if (_0x3cd537[_0x2a3d5b(0x2d0)]) {
                        if (_0x2404ce) {
                            let _0x172bb3 = new URL(_0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x2f7)));
                            _0x172bb3[_0x2a3d5b(0x3b7)] = _0x2a3d5b(0x232), _0x346b7b(_0x172bb3['href']);
                        } else
                            _0x1a967c(_0x46922f(_0x4c3f76)['attr'](_0x2a3d5b(0x2f7)), _0x2c5aff, _0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x282)), _0x3f8174, _0x46922f(_0x4c3f76)['attr'](_0x2a3d5b(0x200)), _0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x355)));
                    } else
                        alert(_0x2a3d5b(0x408) + _0x51523b[_0x2a3d5b(0x3d1)]);
                    _0x47101f(_0x51523b);
                }
            } else
                _0x1a967c(_0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x2f7)), _0x2c5aff, _0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x282)), _0x3f8174, _0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x200)), _0x46922f(_0x4c3f76)[_0x2a3d5b(0x2b8)](_0x2a3d5b(0x355)));
        }
        function _0x4ed3c1(_0x2b7da3) {
            const _0x41d8c8 = _0x56a610;
            var _0x24b76a = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x41d8c8(0x272),
                        'NOTICE_UPDATE_CONTENT': _0x41d8c8(0x2a8),
                        'CHECK_UPDATE': _0x41d8c8(0x2c6),
                        'CHECK_UPDATE_MENU': _0x41d8c8(0x2ed),
                        'CHECK_UPDATE_INTRO': _0x41d8c8(0x3cf),
                        'RELOAD_SCRIPT': _0x41d8c8(0x24b),
                        'DONATE': 'Donate',
                        'FEEDBACK': _0x41d8c8(0x380),
                        'NEW_TAB': 'Open\x20in\x20New\x20Tab',
                        'SHOW_DOM_TREE': 'Show\x20DOM\x20Tree',
                        'SELECT_AND_COPY': _0x41d8c8(0x3b8),
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
                        'REPORT_GITHUB': _0x41d8c8(0x30f),
                        'REPORT_DISCORD': _0x41d8c8(0x34b),
                        'REPORT_FORK': _0x41d8c8(0x211),
                        'DEBUG': _0x41d8c8(0x32d),
                        'CLOSE': _0x41d8c8(0x382),
                        'ALL_CHECK': _0x41d8c8(0x25e),
                        'BATCH_DOWNLOAD_SELECTED': _0x41d8c8(0x317),
                        'BATCH_DOWNLOAD_DIRECT': _0x41d8c8(0x1cb),
                        'IMG': _0x41d8c8(0x2df),
                        'VID': 'Video',
                        'DW': 'Download',
                        'THUMBNAIL_INTRO': 'Download\x20Video\x20Thumbnail',
                        'LOAD_BLOB_ONE': 'Loading\x20Blob\x20Media...',
                        'LOAD_BLOB_MULTIPLE': _0x41d8c8(0x2d4),
                        'LOAD_BLOB_RELOAD': _0x41d8c8(0x1cd),
                        'NO_CHECK_RESOURCE': _0x41d8c8(0x30d),
                        'NO_VID_URL': _0x41d8c8(0x2a9),
                        'SETTING': _0x41d8c8(0x243),
                        'AUTO_RENAME': _0x41d8c8(0x352),
                        'RENAME_SHORTCODE': 'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
                        'RENAME_PUBLISH_DATE': _0x41d8c8(0x1f9),
                        'RENAME_LOCATE_DATE': _0x41d8c8(0x336),
                        'DISABLE_VIDEO_LOOPING': _0x41d8c8(0x21a),
                        'HTML5_VIDEO_CONTROL': _0x41d8c8(0x2aa),
                        'REDIRECT_CLICK_USER_STORY_PICTURE': 'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
                        'FORCE_FETCH_ALL_RESOURCES': _0x41d8c8(0x389),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': _0x41d8c8(0x225),
                        'MODIFY_VIDEO_VOLUME': _0x41d8c8(0x3c8),
                        'SCROLL_BUTTON': 'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
                        'FORCE_RESOURCE_VIA_MEDIA': _0x41d8c8(0x2eb),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT': 'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x41d8c8(0x318),
                        'AUTO_RENAME_INTRO': _0x41d8c8(0x252),
                        'RENAME_SHORTCODE_INTRO': _0x41d8c8(0x3ec),
                        'RENAME_PUBLISH_DATE_INTRO': _0x41d8c8(0x229),
                        'RENAME_LOCATE_DATE_INTRO': 'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x41d8c8(0x22a),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x41d8c8(0x3cd),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': 'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x41d8c8(0x2cf),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x41d8c8(0x28f),
                        'DIRECT_DOWNLOAD_ALL_INTRO': 'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x41d8c8(0x39e),
                        'SCROLL_BUTTON_INTRO': _0x41d8c8(0x3a1),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x41d8c8(0x240),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': _0x41d8c8(0x3ab),
                        'SKIP_VIEW_STORY_CONFIRM': 'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': 'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.'
                    }
                }, _0x59e0a1 = Object['assign']({}, _0x24b76a, _0x4ea23c), _0x5160a9 = Object['keys'](_0x59e0a1)[_0x41d8c8(0x263)]()[_0x41d8c8(0x23e)]((_0x392ee2, _0x879c41) => {
                    return _0x392ee2[_0x879c41] = _0x59e0a1[_0x879c41], _0x392ee2;
                }, {});
            return _0x5160a9;
        }
        async function _0x3a6df3(_0x1d59f9) {
            return new Promise((_0x585871, _0x4dcb60) => {
                const _0x38f35e = a0_0x4451;
                GM_xmlhttpRequest({
                    'method': _0x38f35e(0x37b),
                    'url': _0x38f35e(0x34c) + _0x1d59f9 + _0x38f35e(0x39a),
                    'onload': function (_0x187275) {
                        const _0x2b384c = _0x38f35e;
                        try {
                            let _0x5b5f93 = JSON[_0x2b384c(0x287)](_0x187275['response']);
                            _0x585871(_0x5b5f93);
                        } catch (_0x394fd8) {
                            _0x4dcb60(_0x394fd8);
                        }
                    },
                    'onerror': function (_0x3255d2) {
                        const _0x1cf51a = _0x38f35e;
                        _0x47101f(_0x1cf51a(0x375), _0x1cf51a(0x202), _0x3255d2), _0x4dcb60(_0x3255d2);
                    }
                });
            });
        }
        function _0x5dd0bf(_0x24eede) {
            const _0x3dafa4 = _0x4ed3c1();
            return _0x3dafa4[_0x2fac8e] != undefined && _0x3dafa4[_0x2fac8e][_0x24eede] != undefined ? _0x3dafa4[_0x2fac8e][_0x24eede] : _0x3dafa4['en-US'][_0x24eede];
        }
        function _0x3885f7() {
            const _0x3ccf9e = _0x56a610;
            _0x46922f(_0x3ccf9e(0x37c))['each'](function () {
                const _0x104819 = _0x3ccf9e;
                _0x46922f(this)[_0x104819(0x291)](_0x5dd0bf(_0x46922f(this)[_0x104819(0x2b8)](_0x104819(0x1ee))));
            }), _0x46922f('[data-ih-locale-title]')['each'](function () {
                const _0x5c57b1 = _0x3ccf9e;
                _0x46922f(this)[_0x5c57b1(0x2b8)](_0x5c57b1(0x274), _0x5dd0bf(_0x46922f(this)[_0x5c57b1(0x2b8)](_0x5c57b1(0x2fa))));
            });
        }
        function _0x2422a3() {
            const _0x42215a = _0x56a610;
            for (let _0x553b5e of _0xbda73a) {
                _0x47101f('GM_unregisterMenuCommand', _0x553b5e), GM_unregisterMenuCommand(_0x553b5e);
            }
            _0xbda73a[_0x42215a(0x38a)](GM_registerMenuCommand(_0x5dd0bf(_0x42215a(0x3fa)), () => {
                _0x332246();
            }, { 'accessKey': 'w' })), _0xbda73a[_0x42215a(0x38a)](GM_registerMenuCommand(_0x5dd0bf(_0x42215a(0x21b)), () => {
                const _0x56fe95 = _0x42215a;
                GM_openInTab(_0x56fe95(0x3f9), { 'active': !![] });
            }, { 'accessKey': 'd' })), _0xbda73a[_0x42215a(0x38a)](GM_registerMenuCommand(_0x5dd0bf(_0x42215a(0x254)), () => {
                _0x75b6d9();
            }, { 'accessKey': 'z' })), _0xbda73a[_0x42215a(0x38a)](GM_registerMenuCommand(_0x5dd0bf('FEEDBACK'), () => {
                _0x536294();
            }, { 'accessKey': 'f' })), _0xbda73a[_0x42215a(0x38a)](GM_registerMenuCommand(_0x5dd0bf('CHECK_UPDATE_MENU'), () => {
                _0x51224b();
            }, { 'accessKey': 'c' })), _0xbda73a[_0x42215a(0x38a)](GM_registerMenuCommand(_0x5dd0bf(_0x42215a(0x32c)), () => {
                _0x5841f1();
            }, { 'accessKey': 'r' }));
        }
        function _0x51ed23(_0x2770ae) {
            const _0x57217e = _0x56a610;
            if (!_0x3cd537[_0x57217e(0x349)])
                return;
            const _0x10ea0e = GM_getValue(_0x57217e(0x1c2)) ?? new Date()[_0x57217e(0x3fc)](), _0x4913a8 = new Date()[_0x57217e(0x3fc)]();
            _0x4913a8 > parseInt(_0x10ea0e) + _0x2770ae * 0x3e8 && (GM_setValue('G_CHECK_TIMESTAMP', new Date()[_0x57217e(0x3fc)]()), _0x51224b());
        }
        function _0x51224b() {
            const _0x41c7df = _0x56a610, _0x548e9d = GM_info[_0x41c7df(0x38c)]['version'], _0x10a4c9 = 'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js';
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x10a4c9,
                'onload': function (_0x59ffa4) {
                    const _0x1925ce = _0x41c7df, _0x45d7cc = _0x59ffa4[_0x1925ce(0x1db)], _0x31df1c = _0x45d7cc[_0x1925ce(0x3b5)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x31df1c && _0x31df1c[0x1]) {
                        const _0x494a07 = _0x31df1c[0x1];
                        _0x47101f(_0x1925ce(0x321), _0x548e9d, '|', 'Remote\x20version:\x20', _0x494a07), _0x494a07 !== _0x548e9d && typeof this[_0x1925ce(0x288)] === 'undefined' ? (this[_0x1925ce(0x288)] = null, GM_notification({
                            'text': _0x5dd0bf(_0x1925ce(0x334)),
                            'title': _0x5dd0bf(_0x1925ce(0x400)),
                            'tag': _0x1925ce(0x3b2),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x1925ce(0x3c1),
                            'onclick': _0x500d99 => {
                                const _0x381b4c = _0x1925ce;
                                _0x500d99?.['preventDefault']();
                                var _0x11b065 = GM_openInTab(GM_info['script'][_0x381b4c(0x2e2)]);
                                setTimeout(() => {
                                    const _0x2f0d88 = _0x381b4c;
                                    _0x11b065[_0x2f0d88(0x3be)]();
                                }, 0xfa);
                            }
                        })) : _0x47101f(_0x1925ce(0x1f7));
                    } else
                        console[_0x1925ce(0x359)]('Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.');
                }
            });
        }
        function _0x332246() {
            const _0x5cfddc = _0x56a610;
            _0x46922f(_0x5cfddc(0x378))[_0x5cfddc(0x219)](), _0x2693e3(), _0x46922f(_0x5cfddc(0x239))['text']('Preference\x20Settings'), _0x46922f(_0x5cfddc(0x3e0))[_0x5cfddc(0x267)]('<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20text\x20is\x20translated\x20using\x20machine\x20translation\x20and\x20may\x20be\x20inaccurate;\x20you\x20can\x20contact\x20support\x20to\x20correct\x20the\x20translation.</div>');
            for (let _0x31e145 in _0x14a749) {
                _0x46922f(_0x5cfddc(0x1d1))[_0x5cfddc(0x267)](_0x5cfddc(0x256) + _0x31e145 + '\x22\x20' + (_0x2fac8e == _0x31e145 ? _0x5cfddc(0x39f) : '') + '>' + _0x14a749[_0x31e145] + _0x5cfddc(0x397));
            }
            for (let _0x5d7072 in _0x3cd537) {
                _0x46922f(_0x5cfddc(0x234))[_0x5cfddc(0x267)]('<label\x20class=\x22globalSettings' + (_0x4fd8de[_0x5cfddc(0x2a2)](_0x5d7072) ? _0x5cfddc(0x1f1) : '') + _0x5cfddc(0x369) + _0x5dd0bf(_0x5d7072 + _0x5cfddc(0x1e5)) + _0x5cfddc(0x401) + (_0x5d7072 + '_INTRO') + _0x5cfddc(0x3fe) + _0x5d7072 + '\x22>' + _0x5dd0bf(_0x5d7072) + _0x5cfddc(0x1c3) + _0x5d7072 + _0x5cfddc(0x2b7) + (_0x3cd537[_0x5d7072] === !![] ? _0x5cfddc(0x2da) : '') + '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>'), _0x5d7072 === _0x5cfddc(0x244) && _0x46922f(_0x5cfddc(0x247) + _0x5d7072 + '\x22]')[_0x5cfddc(0x3c7)]('label')['on'](_0x5cfddc(0x327), function (_0x4ef8ff) {
                    const _0x4ede6e = _0x5cfddc;
                    _0x4ef8ff[_0x4ede6e(0x37e)](), _0x46922f(this)[_0x4ede6e(0x2a4)](_0x4ede6e(0x1e2))[_0x4ede6e(0x3ba)] === 0x0 && (_0x46922f(this)[_0x4ede6e(0x267)](_0x4ede6e(0x3c2)), _0x46922f(this)[_0x4ede6e(0x20a)](_0x4ede6e(0x1e2))['append'](_0x4ede6e(0x1f3) + _0x48ec40 + '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>'), _0x46922f(this)[_0x4ede6e(0x20a)](_0x4ede6e(0x1e2))['append'](_0x4ede6e(0x1f3) + _0x48ec40 + _0x4ede6e(0x2ff)), _0x46922f(this)[_0x4ede6e(0x20a)](_0x4ede6e(0x1e2))[_0x4ede6e(0x267)](_0x4ede6e(0x32e) + _0x41379a[_0x4ede6e(0x25b)] + '</div>'));
                }), _0x5d7072 === _0x5cfddc(0x31c) && _0x46922f(_0x5cfddc(0x247) + _0x5d7072 + '\x22]')['parent']('label')['on'](_0x5cfddc(0x327), function (_0x416823) {
                    const _0x1ad6fc = _0x5cfddc;
                    _0x416823[_0x1ad6fc(0x37e)](), _0x46922f(this)['find'](_0x1ad6fc(0x1e2))[_0x1ad6fc(0x3ba)] === 0x0 && (_0x46922f(this)[_0x1ad6fc(0x267)](_0x1ad6fc(0x3c2)), _0x46922f(this)['children'](_0x1ad6fc(0x1e2))[_0x1ad6fc(0x267)](_0x1ad6fc(0x1c0) + _0x400a86 + _0x1ad6fc(0x2a6)), _0x46922f(this)[_0x1ad6fc(0x20a)](_0x1ad6fc(0x1e2))[_0x1ad6fc(0x267)]('<div\x20class=\x22IG_SN_DIG_BTN\x22>' + _0x41379a[_0x1ad6fc(0x25b)] + '</div>'));
                });
            }
        }
        function _0x75b6d9() {
            const _0x273780 = _0x56a610;
            _0x46922f(_0x273780(0x378))['remove'](), _0x2693e3(), _0x46922f('.IG_SN_DIG\x20#post_info')[_0x273780(0x291)](_0x273780(0x343)), _0x46922f(_0x273780(0x234))['append']('<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>'), _0x46922f(_0x273780(0x234))[_0x273780(0x267)](_0x273780(0x324)), _0x46922f(_0x273780(0x27a))[_0x273780(0x267)](_0x273780(0x387) + _0x5dd0bf(_0x273780(0x35f)) + _0x273780(0x1fb)), _0x46922f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append'](_0x273780(0x1d4) + _0x5dd0bf(_0x273780(0x292)) + _0x273780(0x1fb)), _0x46922f(_0x273780(0x27a))['append'](_0x273780(0x3a3) + _0x5dd0bf(_0x273780(0x29c)) + _0x273780(0x1ef)), _0x46922f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x273780(0x267)](_0x273780(0x3ef) + _0x5dd0bf(_0x273780(0x3fb)) + _0x273780(0x1fb)), _0x46922f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x273780(0x267)](_0x273780(0x1fc) + _0x5dd0bf('REPORT_DISCORD') + _0x273780(0x1fb));
        }
        function _0x536294() {
            const _0x366a2e = _0x56a610;
            _0x46922f('.IG_SN_DIG')[_0x366a2e(0x219)](), _0x2693e3(), _0x46922f(_0x366a2e(0x239))[_0x366a2e(0x291)](_0x366a2e(0x2ee)), _0x46922f(_0x366a2e(0x234))['append'](_0x366a2e(0x324)), _0x46922f(_0x366a2e(0x27a))[_0x366a2e(0x267)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>' + _0x5dd0bf('REPORT_FORK') + _0x366a2e(0x1fb)), _0x46922f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x366a2e(0x267)](_0x366a2e(0x3ef) + _0x5dd0bf(_0x366a2e(0x3fb)) + _0x366a2e(0x1fb)), _0x46922f(_0x366a2e(0x27a))['append'](_0x366a2e(0x1fc) + _0x5dd0bf(_0x366a2e(0x1e9)) + _0x366a2e(0x1fb));
        }
        function _0x346b7b(_0xe43eac) {
            const _0x385661 = _0x56a610;
            var _0x1c443a = document['createElement']('a');
            _0x1c443a['href'] = _0xe43eac, _0x1c443a['target'] = _0x385661(0x26a), document['body'][_0x385661(0x251)](_0x1c443a), _0x1c443a[_0x385661(0x2fe)](), _0x1c443a[_0x385661(0x219)]();
        }
        function _0x5841f1() {
            const _0x46f786 = _0x56a610;
            clearInterval(_0x3629c1), _0x46922f(_0x46f786(0x344))[_0x46f786(0x219)](), _0x46922f(_0x46f786(0x2d1))[_0x46f786(0x219)](), _0x46922f(_0x46f786(0x257))[_0x46f786(0x215)](_0x46f786(0x2ad)), _0x30b42c = ![], _0x3cc237 = ![], _0x17200f = location[_0x46f786(0x2a1)], _0x3bb945[_0x46f786(0x3cc)](), _0x47101f(_0x46f786(0x26b));
        }
        function _0x47101f(..._0x543755) {
            const _0x258665 = _0x56a610;
            var _0x59032d = new Date();
            _0x4bb13f[_0x258665(0x38a)]({
                'time': _0x59032d[_0x258665(0x3fc)](),
                'content': [..._0x543755]
            }), _0x4bb13f['length'] > 0x3e8 && (_0x4bb13f = [
                {
                    'time': _0x59032d['getTime'](),
                    'content': [_0x258665(0x3b9)]
                },
                ..._0x4bb13f[_0x258665(0x260)](-0x3e7)
            ]), console[_0x258665(0x31d)]('[' + _0x59032d[_0x258665(0x27b)]() + ']', ..._0x543755);
        }
        function _0x5f25e6() {
            const _0x412ab6 = _0x56a610;
            for (let _0x1563d0 in _0x3cd537) {
                GM_getValue(_0x1563d0) != null && typeof GM_getValue(_0x1563d0) === _0x412ab6(0x326) && (_0x3cd537[_0x1563d0] = GM_getValue(_0x1563d0));
            }
        }
        _0x46922f(function () {
            const _0x29d353 = _0x56a610;
            function _0x11f272(_0x528770) {
                const _0x1a92b7 = a0_0x4451;
                var _0x145d7b = [];
                for (var _0x58dd1a of _0x528770) {
                    _0x145d7b[_0x1a92b7(0x38a)]({
                        'tagName': _0x58dd1a[_0x1a92b7(0x30c)],
                        'id': _0x58dd1a['id'],
                        'className': _0x58dd1a[_0x1a92b7(0x3ea)]
                    });
                }
                return _0x145d7b;
            }
            function _0xe34250() {
                const _0x259431 = a0_0x4451;
                let _0x460883 = _0x46922f(_0x259431(0x320))[0x0];
                var _0x3b0331 = '';
                _0x4bb13f[_0x259431(0x2d8)](_0x4834e0 => {
                    const _0x46c7f7 = _0x259431;
                    var _0xe1a8d2 = JSON[_0x46c7f7(0x255)](_0x4834e0[_0x46c7f7(0x1ce)], function (_0x3aab43, _0x6dfe21) {
                        const _0x5d5379 = _0x46c7f7;
                        if (Array[_0x5d5379(0x362)](this)) {
                            if (typeof _0x6dfe21 === _0x5d5379(0x3a5) && _0x6dfe21 instanceof jQuery)
                                return _0x11f272(_0x6dfe21);
                            return _0x6dfe21;
                        } else
                            return _0x6dfe21;
                    }, '\x09');
                    _0x3b0331 += _0x4834e0['time'] + ':\x20' + _0xe1a8d2 + '\x0a';
                }), _0x46922f(_0x259431(0x385))[_0x259431(0x291)]('Logger:\x0a' + _0x3b0331 + _0x259431(0x372) + location['pathname'] + _0x259431(0x34a) + _0x460883['innerHTML']);
            }
            _0x46922f('body')['on']('click', _0x29d353(0x2b1), function () {
                _0xe34250();
            }), _0x46922f('body')['on'](_0x29d353(0x2fe), _0x29d353(0x3a7), function () {
                const _0x2d51a7 = _0x29d353;
                _0x46922f(_0x2d51a7(0x385))[_0x2d51a7(0x36c)](), document[_0x2d51a7(0x407)](_0x2d51a7(0x218));
            }), _0x46922f(_0x29d353(0x406))['on']('click', _0x29d353(0x363), function () {
                const _0xb5d3d0 = _0x29d353;
                _0x46922f(_0xb5d3d0(0x385))[_0xb5d3d0(0x291)]()[_0xb5d3d0(0x3ba)] === 0x0 && _0xe34250();
                var _0x25595b = _0x46922f('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0xb5d3d0(0x291)](), _0xa53b92 = document[_0xb5d3d0(0x24c)]('a'), _0x5bc24a = new Blob([_0x25595b], { 'type': _0xb5d3d0(0x357) });
                _0xa53b92[_0xb5d3d0(0x2a1)] = URL[_0xb5d3d0(0x313)](_0x5bc24a), _0xa53b92[_0xb5d3d0(0x323)] = 'DOMTree-' + new Date()[_0xb5d3d0(0x3fc)]() + _0xb5d3d0(0x2f3), document[_0xb5d3d0(0x406)][_0xb5d3d0(0x251)](_0xa53b92), _0xa53b92['click'](), _0xa53b92['remove']();
            }), _0x46922f('body')['on'](_0x29d353(0x2fe), _0x29d353(0x2e4), function () {
                const _0x567263 = _0x29d353;
                _0x46922f(this)[_0x567263(0x3c7)](_0x567263(0x1e2))[_0x567263(0x3ba)] > 0x0 ? _0x46922f(this)[_0x567263(0x3c7)]('#tempWrapper')['fadeOut'](0xfa, function () {
                    const _0x65e6e6 = _0x567263;
                    _0x46922f(this)[_0x65e6e6(0x219)]();
                }) : _0x46922f(_0x567263(0x378))['remove']();
            }), _0x46922f(window)[_0x29d353(0x29b)](function (_0x349ca1) {
                const _0x5027d5 = _0x29d353;
                _0x349ca1[_0x5027d5(0x34d)] == '81' && _0x349ca1[_0x5027d5(0x28b)] && (_0x46922f(_0x5027d5(0x378))[_0x5027d5(0x219)](), _0x349ca1[_0x5027d5(0x37e)]()), _0x349ca1[_0x5027d5(0x34d)] == '87' && _0x349ca1['altKey'] && (_0x332246(), _0x349ca1[_0x5027d5(0x37e)]()), _0x349ca1['keyCode'] == '90' && _0x349ca1[_0x5027d5(0x28b)] && (_0x75b6d9(), _0x349ca1[_0x5027d5(0x37e)]()), _0x349ca1[_0x5027d5(0x34d)] == '82' && _0x349ca1[_0x5027d5(0x28b)] && (_0x5841f1(), _0x349ca1[_0x5027d5(0x37e)]()), _0x349ca1[_0x5027d5(0x34d)] == '83' && _0x349ca1[_0x5027d5(0x28b)] && (location[_0x5027d5(0x2a1)][_0x5027d5(0x3b5)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x46922f(_0x5027d5(0x337))[_0x5027d5(0x3ba)] > 0x0 && _0x46922f(_0x5027d5(0x337))?.[_0x5027d5(0x2fe)](), location[_0x5027d5(0x2a1)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x46922f(_0x5027d5(0x3b3))[_0x5027d5(0x3ba)] > 0x0 && _0x46922f(_0x5027d5(0x3b3))?.[_0x5027d5(0x2fe)](), _0x349ca1[_0x5027d5(0x37e)]());
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x3ce), _0x29d353(0x249), function (_0x4603c2) {
                const _0x12bd6c = _0x29d353;
                var _0x35cd96 = _0x46922f(this)[_0x12bd6c(0x2b8)]('id');
                if (_0x35cd96 && _0x3cd537[_0x35cd96] !== undefined) {
                    let _0x55d962 = _0x46922f(this)[_0x12bd6c(0x3dc)](_0x12bd6c(0x2da));
                    GM_setValue(_0x35cd96, _0x55d962), _0x3cd537[_0x35cd96] = _0x55d962, console[_0x12bd6c(0x31d)](_0x12bd6c(0x30e), _0x35cd96, _0x55d962);
                }
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x3e8), function (_0x2ee67b) {
                const _0x3549e3 = _0x29d353;
                _0x46922f(this)['find'](_0x3549e3(0x1e2))['length'] > 0x0 && _0x2ee67b[_0x3549e3(0x37e)]();
            }), _0x46922f('body')['on'](_0x29d353(0x3ce), _0x29d353(0x36e), function () {
                const _0x128c69 = _0x29d353;
                let _0x52ed8c = _0x46922f(this)[_0x128c69(0x325)]();
                _0x46922f(this)[_0x128c69(0x2b8)](_0x128c69(0x233)) == _0x128c69(0x36f) ? _0x46922f(this)['next']()[_0x128c69(0x325)](_0x52ed8c) : _0x46922f(this)[_0x128c69(0x3e3)]()['val'](_0x52ed8c), _0x52ed8c >= 0x0 && _0x52ed8c <= 0x1 && (_0x48ec40 = _0x52ed8c, GM_setValue(_0x128c69(0x302), _0x52ed8c));
            }), _0x46922f(_0x29d353(0x406))['on']('input', _0x29d353(0x36e), function (_0x247ef0) {
                const _0x27df5c = _0x29d353;
                if (_0x46922f(this)[_0x27df5c(0x2b8)]('type') == _0x27df5c(0x36f)) {
                    let _0x582fb7 = _0x46922f(this)[_0x27df5c(0x325)]();
                    _0x46922f(this)['next']()[_0x27df5c(0x325)](_0x582fb7);
                } else {
                    let _0x6ce4e2 = _0x46922f(this)[_0x27df5c(0x325)]();
                    _0x6ce4e2 >= 0x0 && _0x6ce4e2 <= 0x1 ? _0x46922f(this)[_0x27df5c(0x3e3)]()[_0x27df5c(0x325)](_0x6ce4e2) : _0x6ce4e2 < 0x0 ? _0x46922f(this)[_0x27df5c(0x325)](0x0) : _0x46922f(this)[_0x27df5c(0x325)](0x1);
                }
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x396), '.IG_SN_DIG\x20#tempWrapper\x20input#date_format', function (_0x5adcb7) {
                const _0x3c9c83 = _0x29d353;
                GM_setValue(_0x3c9c83(0x3ee), _0x46922f(this)[_0x3c9c83(0x325)]()), _0x400a86 = _0x46922f(this)['val']();
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x2af), function (_0x192ab8) {
                const _0xc76bb4 = _0x29d353;
                _0x192ab8[_0xc76bb4(0x37e)](), _0x4fd6b3(this);
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x2f2), function () {
                const _0x200fdd = _0x29d353;
                if (_0x3cd537['FORCE_RESOURCE_VIA_MEDIA'] && _0x3cd537['NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST'])
                    _0x4fd6b3(_0x46922f(this)[_0x200fdd(0x3c7)]()[_0x200fdd(0x20a)]('a')[_0x200fdd(0x348)]()[0x0], !![]);
                else {
                    var _0x21c34a = new URL(_0x46922f(this)[_0x200fdd(0x3c7)]()[_0x200fdd(0x20a)]('a')['attr'](_0x200fdd(0x2f7)));
                    _0x21c34a[_0x200fdd(0x3b7)] = _0x200fdd(0x232), _0x346b7b(_0x21c34a[_0x200fdd(0x2a1)]);
                }
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x2d6), function () {
                const _0x4eadeb = _0x29d353;
                _0x1a967c(_0x46922f(this)['parent']()['children']('a')['find'](_0x4eadeb(0x3f4))[_0x4eadeb(0x348)]()[_0x4eadeb(0x2b8)](_0x4eadeb(0x1e3)), _0x46922f(this)[_0x4eadeb(0x3c7)]()['children']('a')[_0x4eadeb(0x2b8)](_0x4eadeb(0x1d5)), _0x4eadeb(0x35c), new Date()['getTime'](), _0x4eadeb(0x353), _0x46922f('#article-id')[_0x4eadeb(0x291)]());
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x337), function () {
                _0x5e501d(!![]);
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), '.IG_DWNEWTAB', function (_0x45a72a) {
                const _0xa736dd = _0x29d353;
                _0x45a72a[_0xa736dd(0x37e)](), _0x5e501d(!![], !![], !![]);
            }), _0x46922f(_0x29d353(0x406))['on']('click', _0x29d353(0x213), function () {
                _0x1cfe7a(!![]);
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x398), function (_0x503872) {
                const _0x55a3d3 = _0x29d353;
                _0x503872[_0x55a3d3(0x361)](), _0x327272(!![]);
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x3b3), function () {
                _0xf5456c(!![]);
            }), _0x46922f(_0x29d353(0x406))['on']('click', _0x29d353(0x20c), function (_0x6e2f4b) {
                _0x6e2f4b['preventDefault'](), _0xf5456c(!![], !![]);
            }), _0x46922f(_0x29d353(0x406))['on']('click', _0x29d353(0x1c6), function () {
                _0x287344(!![]);
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x3a4), function () {
                _0x3d490c(!![], !![]);
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x33d), function () {
                _0x3d490c(!![], !![], !![]);
            }), _0x46922f('body')['on'](_0x29d353(0x2fe), _0x29d353(0x339), function () {
                _0x3d490c(!![], ![]);
            }), _0x46922f('body')['on'](_0x29d353(0x2c2), _0x29d353(0x35b), function (_0xcc68b7) {
                const _0x1e633b = _0x29d353;
                if (_0xcc68b7['which'] === 0x3 || _0xcc68b7['which'] === 0x2) {
                    if (location[_0x1e633b(0x2a1)] === 'https://www.instagram.com/' && _0x3cd537['REDIRECT_CLICK_USER_STORY_PICTURE']) {
                        _0xcc68b7[_0x1e633b(0x37e)]();
                        if (_0x46922f(this)[_0x1e633b(0x2a4)](_0x1e633b(0x391))[_0x1e633b(0x3ba)] > 0x0) {
                            const _0x37d54e = _0x1e633b(0x2bd) + _0x46922f(this)['children'](_0x1e633b(0x3f5))[_0x1e633b(0x248)]()[_0x1e633b(0x291)]();
                            _0xcc68b7[_0x1e633b(0x2a3)] === 0x2 ? GM_openInTab(_0x37d54e) : location[_0x1e633b(0x2a1)] = _0x37d54e;
                        }
                    }
                }
            }), _0x46922f(_0x29d353(0x406))['on']('change', _0x29d353(0x2b4), function () {
                const _0x51b219 = _0x29d353;
                var _0x4ba791 = _0x46922f(this)['find'](_0x51b219(0x396))[_0x51b219(0x3dc)](_0x51b219(0x2da));
                _0x46922f('.IG_SN_DIG_BODY\x20.inner_box')['each'](function () {
                    const _0x2e30d9 = _0x51b219;
                    _0x46922f(this)[_0x2e30d9(0x3dc)](_0x2e30d9(0x2da), _0x4ba791);
                });
            }), _0x46922f('body')['on'](_0x29d353(0x3ce), _0x29d353(0x3f3), function () {
                const _0x4223eb = _0x29d353;
                var _0x5a6443 = _0x46922f(_0x4223eb(0x3d7))['length'], _0xed754 = _0x46922f('.IG_SN_DIG_BODY\x20.inner_box')[_0x4223eb(0x3ba)];
                _0x46922f(_0x4223eb(0x2b4))[_0x4223eb(0x2a4)](_0x4223eb(0x396))['prop'](_0x4223eb(0x2da), _0x5a6443 == _0xed754);
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x2fe), _0x29d353(0x283), function () {
                const _0x1327d1 = _0x29d353;
                let _0x11f1bd = 0x0;
                _0x46922f(_0x1327d1(0x39d))[_0x1327d1(0x31f)](function () {
                    const _0x2e0e47 = _0x1327d1;
                    _0x46922f(this)[_0x2e0e47(0x3e3)]()[_0x2e0e47(0x20a)](_0x2e0e47(0x396))[_0x2e0e47(0x3dc)](_0x2e0e47(0x2da)) && (_0x46922f(this)[_0x2e0e47(0x2fe)](), _0x11f1bd++);
                }), _0x11f1bd == 0x0 && alert(_0x5dd0bf('NO_CHECK_RESOURCE'));
            }), _0x46922f('body')['on'](_0x29d353(0x3ce), '.IG_SN_DIG_TITLE\x20#langSelect', function () {
                const _0x1d3eaa = _0x29d353;
                GM_setValue('lang', _0x46922f(this)['val']()), _0x2fac8e = _0x46922f(this)[_0x1d3eaa(0x325)](), _0x2fac8e?.['startsWith']('en') || _0x4ea23c[_0x2fac8e] != null ? (_0x3885f7(), _0x2422a3()) : _0x3a6df3(_0x2fac8e)['then'](_0x39dd18 => {
                    _0x4ea23c[_0x2fac8e] = _0x39dd18, _0x3885f7(), _0x2422a3();
                })[_0x1d3eaa(0x2a0)](_0x70884b => {
                    const _0x459967 = _0x1d3eaa;
                    console[_0x459967(0x359)](_0x459967(0x2ec), _0x70884b);
                });
            }), _0x46922f(_0x29d353(0x406))['on'](_0x29d353(0x3ce), '.IG_SN_DIG_BODY\x20#locateSelect', function () {
                const _0x544969 = _0x29d353;
                _0x46922f(_0x544969(0x2b9))[_0x544969(0x291)]('' + new Date()[_0x544969(0x2ac)](_0x46922f(this)[_0x544969(0x325)](), {
                    'hour12': ![],
                    'second': _0x544969(0x27e),
                    'minute': '2-digit',
                    'hour': _0x544969(0x27e),
                    'month': _0x544969(0x27e),
                    'day': _0x544969(0x27e),
                    'year': _0x544969(0x266)
                })[_0x544969(0x394)]('/', '-')), LOCATE_DATE_FORMAT = _0x46922f(this)[_0x544969(0x325)](), GM_setValue(_0x544969(0x2e5), _0x46922f(this)[_0x544969(0x325)]());
            }), _0x46922f('body')['on'](_0x29d353(0x2fe), '.IG_SN_DIG_TITLE\x20#batch_download_direct', function () {
                const _0x32a2b6 = _0x29d353;
                _0x46922f(_0x32a2b6(0x39d))[_0x32a2b6(0x31f)](function () {
                    const _0x48f6f9 = _0x32a2b6;
                    _0x46922f(this)[_0x48f6f9(0x2fe)]();
                });
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x4451(_0x51abb9, _0x3f386c) {
    const _0x230bd4 = a0_0x230b();
    return a0_0x4451 = function (_0x445123, _0x18c126) {
        _0x445123 = _0x445123 - 0x1be;
        let _0x4a1afa = _0x230bd4[_0x445123];
        return _0x4a1afa;
    }, a0_0x4451(_0x51abb9, _0x3f386c);
}
function a0_0x230b() {
    const _0x4783c9 = [
        'volume',
        'IG\x20Debug\x20DOM\x20Tree',
        '.SNKMS_IG_NEWTAB_MAIN,\x20.SNKMS_IG_DW_MAIN,\x20.SNKMS_IG_THUMBNAIL_MAIN',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'BATCH_DOWNLOAD_DIRECT',
        'INTERNAL_CSS',
        'first',
        'CHECK_UPDATE',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        'keyCode',
        'LOAD_BLOB_ONE',
        'status',
        'https://www.instagram.com/reel/',
        '5476330ofpKxO',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'jpg',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        'data-path',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'text/plain',
        '_acnb',
        'error',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        'button[role=\x22menuitem\x22]',
        'thumbnail',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'media-id',
        'SHOW_DOM_TREE',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'stopPropagation',
        'isArray',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        '<a\x20datetime=\x22',
        'video_versions',
        '\x22\x20title=\x22',
        'controls',
        '<div\x20class=\x22volume_slider\x22\x20/>',
        'select',
        'then',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'range',
        '.xpgaw4o',
        '\x22\x20class=\x22IG_REELS\x22>',
        '\x0a-----\x0a\x0aLocation:\x20',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        'header\x20>\x20section:first\x20img[alt]',
        'getTranslationText()',
        'getMinutes',
        '1161767DObZPp',
        '.IG_SN_DIG',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'px;\x22>',
        'GET',
        '[data-ih-locale]',
        '.videoThumbnail',
        'preventDefault',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'Feedback',
        '._aatk\x20>\x20div\x20>\x20div:last-child',
        'Close',
        '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22',
        'LOAD_BLOB_RELOAD',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        'play\x20playing',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        'push',
        '<div\x20class=\x22volume_slider\x20bottom\x22\x20/>',
        'script',
        'div\x20>\x20ul\x20li._acaz',
        'canDownload',
        'THUMBNAIL',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'canvas._aarh',
        '_ac3q',
        'getBlobMediaWithQueryID()',
        'replaceAll',
        'startsWith',
        'input',
        '</option>',
        '.IG_DWPROFILE',
        'getMediaInfo()',
        '.json',
        'query_hash',
        'smooth',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'selected',
        'video\x20+\x20div\x20div[role=\x22button\x22]',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        '\x22\x20data-globalIndex=\x22',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        '.IG_REELS',
        'object',
        'script[type=\x22application/json\x22]',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE',
        'getUserIdWithAgent()',
        'removeClass',
        'reels',
        'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
        'a[href^=\x22/p/\x22]',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '</span></label>',
        'https://www.instagram.com/reels/',
        '\x22]\x20span',
        'video\x20+\x20div\x20>\x20div',
        'ig_helper_notice',
        '.IG_DWHISTORY',
        'observe',
        'match',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'host',
        'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
        'logger\x20sliced',
        'length',
        'addClass',
        'data-controls',
        '--ig-track-progress:\x20',
        'close',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'code',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'users',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        'hasClass',
        '349865TlhOPE',
        'parent',
        'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
        '<div\x20class=\x22IG_SN_DIG\x20',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        '/info/',
        'disconnect',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20posts\x20and\x20Reels.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20In\x20Reels\x20pages,\x20the\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        'change',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        '(story)\x20Thumbnail\x20button\x20already\x20inserted',
        'message',
        '(highlight)\x20Added\x20video\x20event\x20listener\x20#modify',
        'node',
        'style',
        'absolute',
        '210664tSModk',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'response',
        'DISABLE_VIDEO_LOOPING',
        'prop',
        'trigging',
        'video_url',
        'position:\x20absolute;right:-40px;top:15px;padding:5px;line-height:1;background:#fff;border-radius:\x205px;cursor:pointer;',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        'faild',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'prev',
        'remove-thumbnail',
        '\x22\x20/></div>',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        'NO_VID_URL',
        '.IG_SN_DIG\x20.globalSettings',
        'floor',
        'className',
        'div#splash-screen',
        'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'data-remove-thumbnail',
        'G_RENAME_FORMAT',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        'image_versions2',
        'video_resources',
        'Main\x20Timer',
        '.IG_SN_DIG_BODY\x20.inner_box',
        'img',
        'div',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        'DIV',
        'DIRECT_DOWNLOAD_ALL',
        'https://ko-fi.com/snkoarashi',
        'SETTING',
        'REPORT_GITHUB',
        'getTime',
        'shortcode_media',
        '\x22><span\x20data-ih-locale=\x22',
        'div.volume_slider',
        'NOTICE_UPDATE_TITLE',
        '\x22\x20data-ih-locale-title=\x22',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        '(reel)\x20Added\x20video\x20event\x20listener\x20#modify',
        'setAttribute',
        'hd_profile_pic_url_info',
        'body',
        'execCommand',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        '<input\x20id=\x22date_format\x22\x20value=\x22',
        'substr',
        'G_CHECK_TIMESTAMP',
        '</span>\x20<input\x20id=\x22',
        'data-modify-thumbnail',
        'regenerated',
        '.IG_DWHISTORY_THUMBNAIL',
        'isHighlightsStory',
        'data-loop',
        'div.volume_slider\x20input',
        'header\x20>\x20section:first\x20img[alt]:not([draggable])',
        'Download\x20All\x20Resources',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'content',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'edge_sidecar_to_children',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        'data-username',
        'SCROLL_BUTTON',
        'replace',
        'DOWNLOAD',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        'srcset',
        'responseText',
        'toLowerCase',
        'owner',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        '*/*',
        'items',
        'shortcode',
        '#tempWrapper',
        'src',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        '_INTRO',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'article',
        '20000',
        'REPORT_DISCORD',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'ended',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'data-ih-locale',
        '</a></button><br/>',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        '\x20child',
        'getHours',
        '<input\x20value=\x22',
        'avatar',
        'article[class],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        '<div></div>',
        'there\x20is\x20no\x20new\x20update',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        'userLanguage',
        '</a></button>',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'https://www.instagram.com/web/search/topsearch/?query=',
        'split',
        'data-type',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        'reject',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '</button>',
        '</div>',
        'isDialog',
        '<div\x20class=\x22button-down\x22><div></div></div>',
        'SKIP_VIEW_STORY_CONFIRM',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22\x20style=\x22right:',
        'children',
        'video',
        '.IG_DWHINEWTAB',
        ':hidden',
        'css',
        'language',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        '.IG_DWSTORY_THUMBNAIL',
        'Can\x20not\x20find\x20thumbnail\x20url.',
        'removeAttr',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'feedback_message',
        'copy',
        'remove',
        'Disable\x20Video\x20Auto-looping',
        'DONATE',
        'carousel_media',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        'div#scrollview',
        'toUpperCase',
        '</span>\x20',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'width',
        '.SNKMS_IG_DW_MAIN',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'muted',
        'header\x20>\x20section:first\x20img[alt][draggable]',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        '%22}',
        'undefined',
        '\x22\x20datetime=\x22',
        'hostname',
        '#article-id',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'getDate',
        'scontent.cdninstagram.com',
        'type',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'margin:5px\x200px;padding:5px\x200px;color:#111;font-size:1rem;line-height:1rem;text-align:center;border:1px\x20solid\x20#000;border-radius:\x205px;',
        'cursor',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '_acnf',
        '.IG_SN_DIG\x20#post_info',
        'px;top:',
        'div:last-child',
        'FORCE_RESOURCE_VIA_MEDIA',
        'https://i.instagram.com/api/v1/users/',
        'reduce',
        'location',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'load',
        'display_resources',
        'Settings',
        'MODIFY_VIDEO_VOLUME',
        'mouseenter',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        'last',
        '.IG_SN_DIG\x20input',
        'div[role=\x22presentation\x22]',
        'Reload\x20Script',
        'createElement',
        '(story)\x20Manually\x20inserting\x20thumbnail\x20button',
        'is_video',
        'Fetch\x20from\x20memory\x20cache:',
        'candidates',
        'appendChild',
        'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'DEBUG',
        'stringify',
        '<option\x20value=\x22',
        '[data-snig]',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        'hidden',
        '22747417FpqkSy',
        'CLOSE',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'Select\x20All',
        'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated',
        'slice',
        '/accounts/login',
        'GraphSidecar',
        'sort',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        '1868910wscOme',
        'numeric',
        'append',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'isHomepage',
        '_blank',
        'main\x20timer\x20re-register\x20completed',
        'isIntersecting',
        'finalUrl',
        'display_url',
        'blob',
        'getUserId()',
        'stories',
        'Wololo!\x20New\x20version\x20released.',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
        'title',
        '(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'THUMBNAIL_INTRO',
        'edges',
        'GraphImage',
        'getPostOwner()',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        'toISOString',
        'getBlobMediaWithQuery()',
        '__typename',
        '2-digit',
        'lang',
        'VID',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'data-name',
        '.IG_SN_DIG_TITLE\x20#batch_download_selected',
        'toString',
        'before',
        'taken_at_timestamp',
        'parse',
        'updatenotification',
        'matchAll',
        'top',
        'altKey',
        'Found\x20insert\x20point',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        '<a\x20media-id=\x22',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'data-modify',
        'text',
        'SELECT_AND_COPY',
        '(post)\x20video\x20volume\x20changed\x20#slider',
        '<div\x20class=\x22button-up\x22><div></div></div>',
        '(story)\x20Added\x20video\x20event\x20listener\x20#modify',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'getBlobMedia()',
        'div:not([class]):not([style])',
        'scrollBy',
        'svg',
        'keydown',
        'DOWNLOAD_DOM_TREE',
        'filter',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'userAgent',
        'catch',
        'href',
        'includes',
        'which',
        'find',
        '._acay\x20+\x20.x24i39r',
        '\x22\x20/>',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'Cannot\x20find\x20video\x20URL.',
        'Display\x20HTML5\x20Video\x20Controller',
        'NEW_TAB',
        'toLocaleString',
        'data-snig',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        'a[data-needed=\x22direct\x22]',
        '72531PthwjA',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        'loop',
        'join',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        '</p>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'attr',
        '#locatePreview',
        'NOPATH',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        '.IG_DWNEWTAB',
        'https://www.instagram.com/',
        'modify',
        '#scrollWrapper',
        'relative',
        'body\x20>\x20div\x20section:visible._ac0a',
        'mousedown',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        '\x22\x20class=\x22IG_DWHISTORY\x22>',
        'pathname',
        'Checking\x20for\x20Script\x20Updates',
        'url',
        'https://i.instagram.com/api/v1/media/',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video',
        '._aagv\x20img',
        'datetime',
        '#_SNLOAD',
        '76lmVdTv',
        'xdt_api__v1__media__shortcode__web_info',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LITMIT',
        '.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL',
        'getStories()',
        'BATCH_DOWNLOAD_SELECTED',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        'Request\x20with:',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        'Can\x20not\x20find\x20download\x20url.',
        'forEach',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'checked',
        'parents',
        'getHighlightStories()',
        'html',
        '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22\x20style=\x22right:',
        'Image',
        'x1lix1fw',
        'www.',
        'downloadURL',
        '</div></div>',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        'G_LOCATE_DATE_FORMAT',
        'reels_media',
        'pause',
        '\x20-</a>',
        'height',
        'getUserHighSizeProfile()',
        'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
        'getTranslationText\x20catch\x20error:',
        'Checking\x20for\x20Updates',
        'Feedback\x20Options',
        'position',
        '35QaQsmR',
        'x1iyjqo2',
        '.IG_SN_DIG_BODY\x20.newTab',
        '.txt',
        'hasReferrer',
        'LOAD_BLOB_MULTIPLE',
        'GraphVideo',
        'data-href',
        'x1s85apg',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'data-ih-locale-title',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'click',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        'wrap',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        'G_VIDEO_VOLUME',
        '9arGUfX',
        'volumechange',
        '._acay\x20._acaz',
        'onReadyMyDW()\x20Timer',
        'div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'after',
        '74dHjWMa',
        '<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>',
        'highlights',
        'tagName',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'user\x20settings',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        'article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'section\x20>\x20main[role=\x22main\x22]',
        'createObjectURL',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'username',
        'Download\x20Selected\x20Resources',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        '._acay',
        'mp4',
        'data',
        'AUTO_RENAME',
        'log',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'each',
        'div[id^=\x22mount\x22]',
        'Current\x20version:\x20',
        'body\x20>\x20div\x20section._ac0a',
        'download',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'val',
        'boolean',
        'contextmenu',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'video[class]',
        'taken_at',
        'RELOAD_SCRIPT',
        'Debug\x20Window',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'loadstart',
        'timeupdate',
        'fail',
        'z-index',
        'NOTICE_UPDATE_CONTENT',
        'IMG',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        '.IG_DWSTORY',
        'HTML5_VIDEO_CONTROL',
        '.IG_REELS_THUMBNAIL',
        'FORCE_FETCH_ALL_RESOURCES',
        '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>',
        'RENAME_PUBLISH_DATE',
        '.IG_REELS_NEWTAB',
        'user',
        'modify-thumbnail',
        'padStart',
        'data-completed'
    ];
    a0_0x230b = function () {
        return _0x4783c9;
    };
    return a0_0x230b();
}