// ==UserScript==
// @name               IG Helper
// @name:zh-TW         IG小精靈
// @name:zh-CN         IG小助手
// @name:ja            IG助手
// @name:ko            IG조수
// @namespace          https://github.snkms.com/
// @version            3.0.8
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

(function (_0x478ac3, _0x1eda6a) {
    const _0x335c22 = a0_0x37c6, _0x4d1418 = _0x478ac3();
    while (!![]) {
        try {
            const _0x2529d3 = -parseInt(_0x335c22(0x3d5)) / 0x1 * (-parseInt(_0x335c22(0x3ee)) / 0x2) + parseInt(_0x335c22(0x214)) / 0x3 + parseInt(_0x335c22(0x19a)) / 0x4 * (parseInt(_0x335c22(0x2c9)) / 0x5) + -parseInt(_0x335c22(0x2fc)) / 0x6 + parseInt(_0x335c22(0x234)) / 0x7 * (parseInt(_0x335c22(0x357)) / 0x8) + -parseInt(_0x335c22(0x296)) / 0x9 + -parseInt(_0x335c22(0x383)) / 0xa;
            if (_0x2529d3 === _0x1eda6a)
                break;
            else
                _0x4d1418['push'](_0x4d1418['shift']());
        } catch (_0xce18ed) {
            _0x4d1418['push'](_0x4d1418['shift']());
        }
    }
}(a0_0x5f40, 0xa5fee), function (_0x125fda) {
    setTimeout(() => {
        'use strict';
        const _0x1a0801 = a0_0x37c6;
        const _0x5c4373 = {
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
            }, _0x4e78af = [
                _0x1a0801(0x3c7),
                _0x1a0801(0x3b2),
                _0x1a0801(0x29f)
            ], _0x4a2f85 = {
                'DOWNLOAD': _0x1a0801(0x181),
                'NEW_TAB': '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x223\x203\x2018\x2018\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M20\x2014a1\x201\x200\x200\x200-1\x201v3.077c0\x20.459-.022.57-.082.684a.363.363\x200\x200\x201-.157.157c-.113.06-.225.082-.684.082H5.923c-.459\x200-.571-.022-.684-.082a.363.363\x200\x200\x201-.157-.157c-.06-.113-.082-.225-.082-.684L4.999\x205.5a.5.5\x200\x200\x201\x20.5-.5l3.5.005a1\x201\x200\x201\x200\x20.002-2L5.501\x203a2.5\x202.5\x200\x200\x200-2.502\x202.5v12.577c0\x20.76.083\x201.185.32\x201.627.223.419.558.753.977.977.442.237.866.319\x201.627.319h12.154c.76\x200\x201.185-.082\x201.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1\x201\x200\x200\x200-1-1zm-2-9.055v-.291l-.39.09A10\x2010\x200\x200\x201\x2015.36\x205H14a1\x201\x200\x201\x201\x200-2l5.5.003a1.5\x201.5\x200\x200\x201\x201.5\x201.5V10a1\x201\x200\x201\x201-2\x200V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10\x2010\x200\x200\x201-1.411\x201.775l-5.933\x205.932a1\x201\x200\x200\x201-1.414-1.414l5.944-5.944A10\x2010\x200\x200\x201\x2018\x204.945z\x22\x20fill=\x22currentColor\x22/></svg>',
                'THUMBNAIL': _0x1a0801(0x33f),
                'DOWNLOAD_ALL': _0x1a0801(0x3e4),
                'CLOSE': _0x1a0801(0x3b7)
            }, _0x57c3c7 = 0xfa, _0x3be159 = GM_getResourceText(_0x1a0801(0x3f8)), _0x3166a8 = JSON[_0x1a0801(0x3dc)](GM_getResourceText(_0x1a0801(0x1de)));
        var _0x112684 = {
            'videoVolume': GM_getValue('G_VIDEO_VOLUME') ? GM_getValue(_0x1a0801(0x196)) : 0x1,
            'tempFetchRateLimit': ![],
            'fileRenameFormat': GM_getValue('G_RENAME_FORMAT') ? GM_getValue(_0x1a0801(0x219)) : _0x1a0801(0x387),
            'registerMenuIds': [],
            'locale': {},
            'lang': GM_getValue(_0x1a0801(0x3d8)) || navigator[_0x1a0801(0x20e)] || navigator[_0x1a0801(0x1f3)],
            'currentURL': location[_0x1a0801(0x19b)],
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
                _0x5a9690();
            })
        };
        _0x17f589(), GM_addStyle(_0x3be159), _0x46b70b(), _0x222269(_0x112684[_0x1a0801(0x3d8)])[_0x1a0801(0x1db)](_0x32498e => {
            const _0x1a1f5a = _0x1a0801;
            _0x112684[_0x1a1f5a(0x3f7)][_0x112684[_0x1a1f5a(0x3d8)]] = _0x32498e, _0x319255(), _0x46b70b(), _0x3e7e7e(0x12c);
        })['catch'](_0x597b0c => {
            const _0x2fe09d = _0x1a0801;
            _0x46b70b(), _0x3e7e7e(0x12c), !_0x112684['lang'][_0x2fe09d(0x36f)]('en') && console[_0x2fe09d(0x244)]('getTranslationText\x20catch\x20error:', _0x597b0c);
        }), _0x1e3ab9(_0x1a0801(0x2d0), GM_info[_0x1a0801(0x2ab)][_0x1a0801(0x291)], 'version:', GM_info['script'][_0x1a0801(0x30d)]);
        var _0x2d4c9e = setInterval(function () {
            const _0x58225d = _0x1a0801;
            if (_0x125fda('div#splash-screen')[_0x58225d(0x3da)] > 0x0 && !_0x125fda(_0x58225d(0x3c6))['is'](_0x58225d(0x29a)) || location[_0x58225d(0x1bf)][_0x58225d(0x1a0)](/^\/(explore(\/.*)?|challenge\/?.*|direct\/?.*|qr\/?|accounts\/.*|emails\/.*|language\/?.*?|your_activity\/?.*|settings\/help(\/.*)?$)$/ig) || !location[_0x58225d(0x17c)][_0x58225d(0x36f)](_0x58225d(0x19e))) {
                _0x112684['pageLoaded'] = ![];
                return;
            }
            if (_0x112684['currentURL'] != location['href'] || !_0x112684[_0x58225d(0x204)] || !_0x112684[_0x58225d(0x3a8)]) {
                console[_0x58225d(0x1b5)]('Main\x20Timer', _0x58225d(0x2ae)), clearInterval(_0x112684[_0x58225d(0x276)]), _0x112684[_0x58225d(0x3a8)] = ![], _0x112684['firstStarted'] = !![], _0x112684[_0x58225d(0x1ae)] = location['href'], _0x112684['GL_observer'][_0x58225d(0x285)]();
                if (location[_0x58225d(0x19b)][_0x58225d(0x36f)](_0x58225d(0x27e)) || location[_0x58225d(0x1bf)]['match'](/^\/(.*?)\/(p|reel)\//ig) || location[_0x58225d(0x19b)][_0x58225d(0x36f)](_0x58225d(0x3d4))) {
                    _0x112684[_0x58225d(0x3c8)][_0x58225d(0x33e)] = {}, _0x112684[_0x58225d(0x3c8)]['highlights'] = {}, _0x1e3ab9('isDialog');
                    var _0x424d0e = setInterval(() => {
                        const _0x46f183 = _0x58225d;
                        _0x125fda('body\x20>\x20div[class]:not([id^=\x22mount\x22])\x20div\x20div[role=\x22dialog\x22]\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20div[id^=\x22mount\x22]\x20section\x20nav\x20+\x20div\x20>\x20article,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20article\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20header\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')[_0x46f183(0x3da)] > 0x0 && (clearInterval(_0x424d0e), setTimeout(() => {
                            _0x5a9690(![]);
                        }, 0xf));
                    }, 0x64);
                    _0x112684[_0x58225d(0x3a8)] = !![];
                }
                location['href'][_0x58225d(0x36f)](_0x58225d(0x25e)) && (_0x1e3ab9(_0x58225d(0x255)), setTimeout(() => {
                    _0x4a0df3(![]);
                }, 0x96), _0x112684[_0x58225d(0x3a8)] = !![]);
                if (location['href']['split']('?')[0x0] == _0x58225d(0x3eb)) {
                    _0x112684['GL_dataCache'][_0x58225d(0x33e)] = {}, _0x112684[_0x58225d(0x3c8)][_0x58225d(0x2b8)] = {};
                    let _0x5b75b3 = _0x112684['GL_referrer']?.[_0x58225d(0x1a0)](/^\/(stories|highlights)\//ig) != null;
                    _0x1e3ab9(_0x58225d(0x2d2), _0x5b75b3), setTimeout(() => {
                        const _0x2d8274 = _0x58225d;
                        _0x5a9690(![], _0x5b75b3);
                        const _0x5cbe2e = _0x125fda(_0x2d8274(0x1b9))?.[_0x2d8274(0x2cb)]()[0x0];
                        _0x5cbe2e && _0x112684[_0x2d8274(0x34a)][_0x2d8274(0x2e4)](_0x5cbe2e, { 'childList': !![] });
                    }, 0x96), _0x112684['pageLoaded'] = !![];
                }
                _0x125fda(_0x58225d(0x242))[_0x58225d(0x3da)] && location[_0x58225d(0x1bf)][_0x58225d(0x1a0)](/^(\/)([0-9A-Za-z\.\-_]+)\/?(tagged|reels|saved)?\/?$/ig) && !location[_0x58225d(0x1bf)]['match'](/^(\/explore\/?$|\/stories(\/.*)?$|\/p\/)/ig) && (_0x1e3ab9('isProfile'), setTimeout(() => {
                    _0x584edd(![]);
                }, 0x96), _0x112684[_0x58225d(0x3a8)] = !![]);
                if (!_0x112684[_0x58225d(0x3a8)]) {
                    if (location[_0x58225d(0x19b)]['match'](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig))
                        _0x112684[_0x58225d(0x3c8)][_0x58225d(0x2b8)] = {}, _0x1e3ab9(_0x58225d(0x37c)), _0x9e30e8(![]), _0x112684[_0x58225d(0x276)] = setInterval(() => {
                            _0x517fe8(![]);
                        }, _0x57c3c7), _0x125fda(_0x58225d(0x22c))['length'] && setTimeout(() => {
                            const _0x19d2d6 = _0x58225d;
                            if (_0x5c4373[_0x19d2d6(0x3e2)]) {
                                var _0x58c870 = _0x125fda(_0x19d2d6(0x2b3))['filter'](function () {
                                    const _0x262e9f = _0x19d2d6;
                                    return _0x125fda(this)[_0x262e9f(0x248)]()[_0x262e9f(0x3da)] === 0x0 && this[_0x262e9f(0x325)]['trim']() !== '';
                                });
                                _0x58c870?.[_0x19d2d6(0x306)]('click');
                            }
                            _0x112684[_0x19d2d6(0x3a8)] = !![];
                        }, 0x96);
                    else
                        location[_0x58225d(0x19b)][_0x58225d(0x1a0)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) ? (_0x1e3ab9(_0x58225d(0x31d)), _0x125fda('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x58225d(0x3da)] > 0x0 && (_0x125fda(_0x58225d(0x27f))[_0x58225d(0x298)](), _0x125fda(_0x58225d(0x227))[_0x58225d(0x298)](), _0x125fda(_0x58225d(0x3fd))[_0x58225d(0x3da)] && _0x125fda(_0x58225d(0x3fd))[_0x58225d(0x298)](), _0x491c4b(![]), setTimeout(() => {
                            _0x491c4b(![]);
                        }, 0x96)), _0x125fda(_0x58225d(0x27f))[_0x58225d(0x3da)] && setTimeout(() => {
                            const _0x38f737 = _0x58225d;
                            if (_0x5c4373[_0x38f737(0x3e2)]) {
                                var _0x12eb69 = _0x125fda(_0x38f737(0x2b3))[_0x38f737(0x1b7)](function () {
                                    const _0x1b64c2 = _0x38f737;
                                    return _0x125fda(this)[_0x1b64c2(0x248)]()[_0x1b64c2(0x3da)] === 0x0 && this[_0x1b64c2(0x325)][_0x1b64c2(0x1be)]() !== '';
                                });
                                _0x12eb69?.[_0x38f737(0x359)]();
                            }
                            _0x112684[_0x38f737(0x3a8)] = !![];
                        }, 0x96)) : (_0x112684[_0x58225d(0x3a8)] = ![], _0x125fda(_0x58225d(0x27f))[_0x58225d(0x3da)] && _0x125fda('.IG_DWSTORY')[_0x58225d(0x298)](), _0x125fda(_0x58225d(0x1ac))[_0x58225d(0x3da)] && _0x125fda(_0x58225d(0x1ac))[_0x58225d(0x298)](), _0x125fda(_0x58225d(0x227))[_0x58225d(0x3da)] && _0x125fda(_0x58225d(0x227))[_0x58225d(0x298)](), _0x125fda('.IG_DWSTORY_THUMBNAIL')[_0x58225d(0x3da)] && _0x125fda(_0x58225d(0x3fd))['remove'](), _0x125fda(_0x58225d(0x22c))[_0x58225d(0x3da)] && _0x125fda(_0x58225d(0x22c))[_0x58225d(0x298)](), _0x125fda('.IG_DWHISTORY_ALL')[_0x58225d(0x3da)] && _0x125fda('.IG_DWHISTORY_ALL')[_0x58225d(0x298)](), _0x125fda(_0x58225d(0x35f))[_0x58225d(0x3da)] && _0x125fda(_0x58225d(0x35f))[_0x58225d(0x298)](), _0x125fda(_0x58225d(0x360))[_0x58225d(0x3da)] && _0x125fda(_0x58225d(0x360))[_0x58225d(0x298)]());
                }
                _0x3e7e7e(0x12c), _0x112684[_0x58225d(0x3f6)] = new URL(location[_0x58225d(0x19b)])[_0x58225d(0x1bf)];
            }
        }, _0x57c3c7);
        async function _0x355b7c() {
            const _0x23ebe0 = _0x1a0801;
            _0xe8b19a(!![]);
            let _0x48e96a = new Date()[_0x23ebe0(0x2f8)](), _0x3f98bd = Math[_0x23ebe0(0x281)](_0x48e96a / 0x3e8), _0x590e90 = location[_0x23ebe0(0x19b)][_0x23ebe0(0x2a2)](/\/$/ig, '')[_0x23ebe0(0x3fc)]('/')['at'](-0x1), _0x163156 = await _0x294467(_0x590e90), _0x4a8127 = _0x163156['data'][_0x23ebe0(0x3b1)][0x0][_0x23ebe0(0x1df)][_0x23ebe0(0x226)], _0x2e9574 = 0x0;
            _0x48dc10(_0x2e9574, _0x163156[_0x23ebe0(0x3e7)]['reels_media'][0x0]['items'][_0x23ebe0(0x3da)]), _0x163156[_0x23ebe0(0x3e7)][_0x23ebe0(0x3b1)][0x0]['items']['forEach']((_0x783c21, _0x1287b9) => {
                setTimeout(() => {
                    const _0x509d89 = a0_0x37c6;
                    _0x5c4373[_0x509d89(0x3c7)] && (_0x3f98bd = _0x783c21[_0x509d89(0x379)]), _0x783c21[_0x509d89(0x35b)]['sort'](function (_0x541ed1, _0x476307) {
                        const _0x15711e = _0x509d89;
                        if (_0x541ed1[_0x15711e(0x1dd)] < _0x476307[_0x15711e(0x1dd)])
                            return 0x1;
                        if (_0x541ed1[_0x15711e(0x1dd)] > _0x476307['config_width'])
                            return -0x1;
                        return 0x0;
                    }), _0x783c21[_0x509d89(0x3f5)] ? _0x4e3748(_0x783c21[_0x509d89(0x307)][0x0][_0x509d89(0x3c0)], _0x4a8127, _0x509d89(0x33e), _0x3f98bd, 'mp4', _0x783c21['id'])['then'](() => {
                        const _0x23596b = _0x509d89;
                        _0x48dc10(++_0x2e9574, _0x163156[_0x23596b(0x3e7)][_0x23596b(0x3b1)][0x0]['items'][_0x23596b(0x3da)]);
                    }) : _0x4e3748(_0x783c21[_0x509d89(0x35b)][0x0][_0x509d89(0x3c0)], _0x4a8127, _0x509d89(0x33e), _0x3f98bd, 'jpg', _0x783c21['id'])[_0x509d89(0x1db)](() => {
                        const _0xde78c3 = _0x509d89;
                        _0x48dc10(++_0x2e9574, _0x163156[_0xde78c3(0x3e7)][_0xde78c3(0x3b1)][0x0][_0xde78c3(0x18b)]['length']);
                    });
                }, 0x64 * _0x1287b9);
            });
        }
        async function _0x9e30e8(_0x524411, _0x4e969f) {
            const _0x54a2f2 = _0x1a0801;
            var _0x44ac55 = _0x125fda('body\x20>\x20div\x20section:visible\x20a[href^=\x22/\x22]')['filter'](function () {
                const _0x31712b = a0_0x37c6;
                return _0x125fda(this)['attr']('href')['split']('/')[_0x31712b(0x1b7)](_0x5400fa => _0x5400fa['length'] > 0x0)[_0x31712b(0x3da)] === 0x1;
            })['first']()['attr'](_0x54a2f2(0x19b))[_0x54a2f2(0x3fc)]('/')['filter'](_0x43eca4 => _0x43eca4[_0x54a2f2(0x3da)] > 0x0)['at'](0x0);
            if (_0x524411) {
                let _0x131c7f = new Date()[_0x54a2f2(0x2f8)](), _0x94d835 = Math[_0x54a2f2(0x281)](_0x131c7f / 0x3e8), _0x39f031 = location[_0x54a2f2(0x19b)][_0x54a2f2(0x2a2)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x54c39b = _0x125fda(_0x54a2f2(0x209))[_0x54a2f2(0x3da)] || _0x125fda(_0x54a2f2(0x236))[_0x54a2f2(0x3da)] || _0x125fda(_0x54a2f2(0x18a))[_0x54a2f2(0x310)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x54a2f2(0x3da)], _0x4626ba = 0x0;
                _0xe8b19a(!![]);
                if (_0x112684[_0x54a2f2(0x3c8)]['highlights'][_0x39f031]) {
                    _0x1e3ab9(_0x54a2f2(0x370), _0x39f031);
                    let _0x554a5c = _0x112684[_0x54a2f2(0x3c8)][_0x54a2f2(0x2b8)][_0x39f031][_0x54a2f2(0x3e7)][_0x54a2f2(0x3b1)][0x0][_0x54a2f2(0x18b)]['length'];
                    _0x44ac55 = _0x112684['GL_dataCache'][_0x54a2f2(0x2b8)][_0x39f031][_0x54a2f2(0x3e7)][_0x54a2f2(0x3b1)][0x0]['owner'][_0x54a2f2(0x226)], _0x4626ba = _0x112684[_0x54a2f2(0x3c8)][_0x54a2f2(0x2b8)][_0x39f031][_0x54a2f2(0x3e7)][_0x54a2f2(0x3b1)][0x0][_0x54a2f2(0x18b)][_0x554a5c - _0x54c39b];
                } else {
                    let _0x4161ad = await _0x294467(_0x39f031), _0x5a0a0e = _0x4161ad['data'][_0x54a2f2(0x3b1)][0x0]['items'][_0x54a2f2(0x3da)];
                    _0x44ac55 = _0x4161ad['data']['reels_media'][0x0][_0x54a2f2(0x1df)][_0x54a2f2(0x226)], _0x4626ba = _0x4161ad[_0x54a2f2(0x3e7)]['reels_media'][0x0][_0x54a2f2(0x18b)][_0x5a0a0e - _0x54c39b], _0x112684[_0x54a2f2(0x3c8)][_0x54a2f2(0x2b8)][_0x39f031] = _0x4161ad;
                }
                _0x1e3ab9(_0x54a2f2(0x183), _0x39f031, _0x112684['GL_dataCache']['highlights'][_0x39f031]);
                _0x5c4373[_0x54a2f2(0x3c7)] && (_0x94d835 = _0x4626ba[_0x54a2f2(0x379)]);
                if (_0x5c4373[_0x54a2f2(0x2bc)] && !_0x112684[_0x54a2f2(0x1a7)]) {
                    let _0x2e6fd6 = await _0x41da06(_0x4626ba['id']);
                    _0x2e6fd6[_0x54a2f2(0x375)] === 'ok' ? _0x2e6fd6[_0x54a2f2(0x18b)][0x0][_0x54a2f2(0x275)] ? _0x4e969f ? _0x52438f(_0x2e6fd6[_0x54a2f2(0x18b)][0x0][_0x54a2f2(0x275)][0x0]['url']) : _0x4e3748(_0x2e6fd6[_0x54a2f2(0x18b)][0x0][_0x54a2f2(0x275)][0x0]['url'], _0x44ac55, _0x54a2f2(0x2b8), _0x94d835, 'mp4', _0x2e6fd6['items'][0x0]['id']) : _0x4e969f ? _0x52438f(_0x2e6fd6[_0x54a2f2(0x18b)][0x0][_0x54a2f2(0x2a3)][_0x54a2f2(0x3a9)][0x0][_0x54a2f2(0x33a)]) : _0x4e3748(_0x2e6fd6[_0x54a2f2(0x18b)][0x0]['image_versions2'][_0x54a2f2(0x3a9)][0x0][_0x54a2f2(0x33a)], _0x44ac55, _0x54a2f2(0x2b8), _0x94d835, _0x54a2f2(0x1cb), _0x2e6fd6[_0x54a2f2(0x18b)][0x0]['id']) : (_0x5c4373[_0x54a2f2(0x3b2)] ? (delete _0x112684[_0x54a2f2(0x3c8)][_0x54a2f2(0x2b8)][_0x39f031], _0x112684[_0x54a2f2(0x1a7)] = !![], _0x9e30e8(!![], _0x4e969f)) : alert(_0x54a2f2(0x18e) + _0x2e6fd6[_0x54a2f2(0x33b)]), _0x1e3ab9(_0x2e6fd6));
                } else
                    _0x4626ba['is_video'] ? _0x4e969f ? _0x52438f(_0x4626ba[_0x54a2f2(0x307)]['at'](-0x1)[_0x54a2f2(0x3c0)], _0x44ac55) : _0x4e3748(_0x4626ba[_0x54a2f2(0x307)]['at'](-0x1)[_0x54a2f2(0x3c0)], _0x44ac55, _0x54a2f2(0x2b8), _0x94d835, _0x54a2f2(0x24e), _0x4626ba['id']) : _0x4e969f ? _0x52438f(_0x4626ba[_0x54a2f2(0x35b)]['at'](-0x1)[_0x54a2f2(0x3c0)], _0x44ac55) : _0x4e3748(_0x4626ba[_0x54a2f2(0x35b)]['at'](-0x1)[_0x54a2f2(0x3c0)], _0x44ac55, _0x54a2f2(0x2b8), _0x94d835, 'jpg', _0x4626ba['id']), _0x112684['tempFetchRateLimit'] = ![];
                _0xe8b19a(![]);
            } else {
                if (!_0x125fda(_0x54a2f2(0x22c))[_0x54a2f2(0x3da)]) {
                    let _0x5c4f5d = null;
                    _0x125fda(_0x54a2f2(0x3f0))[_0x54a2f2(0x3da)] > 0x0 ? _0x5c4f5d = _0x125fda(_0x54a2f2(0x2e5)) : (_0x5c4f5d = _0x125fda(_0x54a2f2(0x302)), _0x5c4f5d[_0x54a2f2(0x245)](_0x54a2f2(0x3e0), _0x54a2f2(0x22e)));
                    if (_0x5c4f5d[_0x54a2f2(0x3da)] === 0x0) {
                        let _0x5933a5 = _0x125fda(_0x54a2f2(0x37b)), _0x3596ac = 0x0;
                        _0x5933a5[_0x54a2f2(0x1d2)](function () {
                            const _0x2ca163 = _0x54a2f2;
                            _0x125fda(this)['width']() > _0x3596ac && (_0x3596ac = _0x125fda(this)[_0x2ca163(0x252)](), _0x5c4f5d = _0x125fda(this)[_0x2ca163(0x248)](_0x2ca163(0x3e3))['first']());
                        });
                    }
                    if (_0x5c4f5d != null) {
                        _0x5c4f5d[_0x54a2f2(0x348)](_0x54a2f2(0x18c) + _0x2ec937('DW') + '\x22\x20class=\x22IG_DWHISTORY\x22>' + _0x4a2f85['DOWNLOAD'] + _0x54a2f2(0x3b9)), _0x5c4f5d['append'](_0x54a2f2(0x212) + _0x2ec937(_0x54a2f2(0x319)) + _0x54a2f2(0x1a4) + _0x4a2f85[_0x54a2f2(0x319)] + _0x54a2f2(0x3b9));
                        let _0x140741 = _0x4df6f7(_0x44ac55);
                        _0x140741[_0x54a2f2(0x3da)] > 0x1 && _0x5c4f5d['append'](_0x54a2f2(0x295) + _0x2ec937('DW_ALL') + _0x54a2f2(0x3d1) + _0x4a2f85[_0x54a2f2(0x320)] + _0x54a2f2(0x3b9)), _0x5c4f5d[_0x54a2f2(0x310)](_0x54a2f2(0x374))['each'](function () {
                            const _0x5b8433 = _0x54a2f2;
                            _0x125fda(this)['on'](_0x5b8433(0x396), function () {
                                const _0x2a87c6 = _0x5b8433;
                                !_0x125fda(this)[_0x2a87c6(0x3e7)](_0x2a87c6(0x1e2)) && (_0x5c4f5d[_0x2a87c6(0x310)]('.IG_DWHISTORY_THUMBNAIL')['length'] === 0x0 ? (_0x125fda(this)[_0x2a87c6(0x223)](_0x2a87c6(0x1cc), !![]), _0x125fda(_0x2a87c6(0x360))[_0x2a87c6(0x298)](), _0x1e3ab9(_0x2a87c6(0x2dd))) : (_0x125fda(this)[_0x2a87c6(0x223)](_0x2a87c6(0x1cc), !![]), _0x1e3ab9('(highlight)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture')));
                            });
                        });
                    }
                }
            }
        }
        async function _0x517fe8(_0x21c28a) {
            const _0x55cb32 = _0x1a0801;
            if (_0x21c28a) {
                let _0x1c5607 = new Date()[_0x55cb32(0x2f8)](), _0x2e750f = Math['floor'](_0x1c5607 / 0x3e8), _0x3010da = location[_0x55cb32(0x19b)]['replace'](/\/$/ig, '')[_0x55cb32(0x3fc)]('/')['at'](-0x1), _0x13b859 = '', _0x35d7fd = _0x125fda('body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]')[_0x55cb32(0x3da)] || _0x125fda('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x55cb32(0x3da)] || _0x125fda('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div')[_0x55cb32(0x310)]('div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6')[_0x55cb32(0x3da)], _0x3964c3 = '';
                _0xe8b19a(!![]);
                if (_0x112684[_0x55cb32(0x3c8)][_0x55cb32(0x2b8)][_0x3010da]) {
                    _0x1e3ab9('Fetch\x20from\x20memory\x20cache:', _0x3010da);
                    let _0x3a9b38 = _0x112684[_0x55cb32(0x3c8)][_0x55cb32(0x2b8)][_0x3010da]['data'][_0x55cb32(0x3b1)][0x0]['items']['length'];
                    _0x13b859 = _0x112684[_0x55cb32(0x3c8)][_0x55cb32(0x2b8)][_0x3010da][_0x55cb32(0x3e7)][_0x55cb32(0x3b1)][0x0]['owner'][_0x55cb32(0x226)], _0x3964c3 = _0x112684[_0x55cb32(0x3c8)][_0x55cb32(0x2b8)][_0x3010da]['data']['reels_media'][0x0][_0x55cb32(0x18b)][_0x3a9b38 - _0x35d7fd];
                } else {
                    let _0x506579 = await _0x294467(_0x3010da), _0x32ecc5 = _0x506579[_0x55cb32(0x3e7)][_0x55cb32(0x3b1)][0x0][_0x55cb32(0x18b)][_0x55cb32(0x3da)];
                    _0x13b859 = _0x506579[_0x55cb32(0x3e7)]['reels_media'][0x0][_0x55cb32(0x1df)][_0x55cb32(0x226)], _0x3964c3 = _0x506579['data']['reels_media'][0x0][_0x55cb32(0x18b)][_0x32ecc5 - _0x35d7fd], _0x112684[_0x55cb32(0x3c8)][_0x55cb32(0x2b8)][_0x3010da] = _0x506579;
                }
                _0x5c4373['RENAME_PUBLISH_DATE'] && (_0x2e750f = _0x3964c3['taken_at_timestamp']);
                if (_0x5c4373[_0x55cb32(0x2bc)] && !_0x112684['tempFetchRateLimit']) {
                    let _0x1efd8a = await _0x41da06(_0x3964c3['id']);
                    _0x1efd8a['status'] === 'ok' ? _0x4e3748(_0x1efd8a[_0x55cb32(0x18b)][0x0]['image_versions2'][_0x55cb32(0x3a9)][0x0][_0x55cb32(0x33a)], _0x13b859, _0x55cb32(0x2b8), _0x2e750f, _0x55cb32(0x1cb), _0x3010da) : (_0x5c4373[_0x55cb32(0x3b2)] ? (delete _0x112684['GL_dataCache'][_0x55cb32(0x2b8)][_0x3010da], _0x112684[_0x55cb32(0x1a7)] = !![], _0x517fe8(!![])) : alert(_0x55cb32(0x18e) + _0x1efd8a[_0x55cb32(0x33b)]), _0x1e3ab9(_0x1efd8a));
                } else
                    _0x4e3748(_0x3964c3['display_resources']['at'](-0x1)['src'], _0x13b859, 'highlights', _0x2e750f, 'jpg', _0x3010da), _0x112684['tempFetchRateLimit'] = ![];
                _0xe8b19a(![]);
            } else {
                if (_0x125fda(_0x55cb32(0x246))[_0x55cb32(0x3da)]) {
                    if (!_0x125fda('.IG_DWHISTORY_THUMBNAIL')[_0x55cb32(0x3da)]) {
                        let _0x44c58c = null;
                        _0x125fda('body\x20>\x20div\x20section._ac0a')['length'] > 0x0 ? _0x44c58c = _0x125fda('body\x20>\x20div\x20section:visible._ac0a') : (_0x44c58c = _0x125fda('body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])'), _0x44c58c['css'](_0x55cb32(0x3e0), 'relative'));
                        if (_0x44c58c[_0x55cb32(0x3da)] === 0x0) {
                            let _0x1276d6 = _0x125fda('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x551247 = 0x0;
                            _0x1276d6[_0x55cb32(0x1d2)](function () {
                                const _0x43019b = _0x55cb32;
                                _0x125fda(this)['width']() > _0x551247 && (_0x551247 = _0x125fda(this)[_0x43019b(0x252)](), _0x44c58c = _0x125fda(this)[_0x43019b(0x248)]('div')[_0x43019b(0x2af)]());
                            });
                        }
                        _0x44c58c != null && _0x44c58c['append']('<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x2ec937('THUMBNAIL_INTRO') + _0x55cb32(0x18d) + _0x4a2f85[_0x55cb32(0x2d4)] + _0x55cb32(0x3b9));
                    }
                } else
                    _0x125fda(_0x55cb32(0x360))[_0x55cb32(0x298)]();
            }
        }
        function _0x5a9690(_0x47391b, _0x16a017) {
            const _0xdffb4c = _0x1a0801;
            _0x16a017 === !![] && (_0x1e3ab9(_0xdffb4c(0x1ed), _0xdffb4c(0x2b5)), _0x125fda(_0xdffb4c(0x3a7))[_0xdffb4c(0x1b7)](function () {
                const _0x171cb2 = _0xdffb4c;
                return _0x125fda(this)[_0x171cb2(0x310)](_0x171cb2(0x277))['length'] === 0x0;
            })[_0xdffb4c(0x386)](_0xdffb4c(0x316)));
            if (_0x47391b == ![]) {
                const _0x253ad7 = 0x64;
                let _0x263508 = 0x0;
                var _0x394e51 = setInterval(() => {
                    const _0x1c42c6 = _0xdffb4c;
                    (_0x263508 > _0x253ad7 || _0x125fda('article[data-snig=\x22canDownload\x22],\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div[data-snig=\x22canDownload\x22]\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr,\x20div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div.x1n2onr6.x1vjfegm\x20div[data-snig=\x22canDownload\x22]')[_0x1c42c6(0x3da)] > 0x0) && (clearInterval(_0x394e51), _0x263508 > _0x253ad7 && console[_0x1c42c6(0x23b)]('onReadyMyDW()\x20Timer', 'maximum\x20number\x20of\x20repetitions\x20reached,\x20terminated')), _0x1e3ab9(_0x1c42c6(0x17f), _0x1c42c6(0x1d1)), _0x14c565(), _0x263508++;
                }, 0x32);
            } else
                _0x14c565();
        }
        function _0x1e6123(_0x55df4a) {
            const _0x34d63a = _0x1a0801;
            _0x5c4373[_0x34d63a(0x351)] && _0x55df4a[_0x34d63a(0x310)]('video')[_0x34d63a(0x1d2)](function () {
                const _0x37b66 = _0x34d63a;
                _0x125fda(this)['on'](_0x37b66(0x1f0), function () {
                    const _0x41ffee = _0x37b66;
                    !_0x125fda(this)[_0x41ffee(0x3e7)](_0x41ffee(0x1af)) && (_0x125fda(this)[_0x41ffee(0x223)](_0x41ffee(0x2c4), !![]), this[_0x41ffee(0x342)](), _0x1e3ab9(_0x41ffee(0x254)));
                });
            });
            _0x5c4373[_0x34d63a(0x1d4)] && _0x55df4a[_0x34d63a(0x310)](_0x34d63a(0x1b1))['each'](function () {
                const _0x5adeb8 = _0x34d63a;
                _0x125fda(this)['on'](_0x5adeb8(0x282), function () {
                    const _0x305ddc = _0x5adeb8;
                    !_0x125fda(this)['data'](_0x305ddc(0x2cd)) && (_0x125fda(this)['attr'](_0x305ddc(0x1e1), !![]), this[_0x305ddc(0x2fe)] = _0x112684[_0x305ddc(0x250)], _0x1e3ab9(_0x305ddc(0x216)));
                });
            });
            _0x5c4373[_0x34d63a(0x20d)] && _0x55df4a['find'](_0x34d63a(0x1b1))[_0x34d63a(0x1d2)](function () {
                const _0x2b76d3 = _0x34d63a;
                if (!_0x125fda(this)['data']('controls')) {
                    let _0x1f0db7 = _0x125fda(this);
                    _0x1e3ab9(_0x2b76d3(0x23a)), _0x5c4373[_0x2b76d3(0x1d4)] && (this[_0x2b76d3(0x2fe)] = _0x112684['videoVolume'], _0x125fda(this)['on'](_0x2b76d3(0x369), function () {
                        const _0x2d7929 = _0x2b76d3;
                        this[_0x2d7929(0x2fe)] = _0x112684[_0x2d7929(0x250)];
                    })), _0x125fda(this)['on'](_0x2b76d3(0x211), function (_0x36fe54) {
                        const _0xf13f78 = _0x2b76d3;
                        _0x36fe54[_0xf13f78(0x3bb)](), _0x1f0db7[_0xf13f78(0x245)](_0xf13f78(0x21c), '-1'), _0x1f0db7['removeAttr'](_0xf13f78(0x389));
                    }), _0x125fda(this)[_0x2b76d3(0x2cb)]()[_0x2b76d3(0x310)]('video\x20+\x20div\x20>\x20div')[_0x2b76d3(0x2af)]()['on']('contextmenu', function (_0x537dfd) {
                        const _0xee5764 = _0x2b76d3;
                        _0x537dfd[_0xee5764(0x3bb)](), _0x1f0db7[_0xee5764(0x245)]('z-index', '2'), _0x1f0db7[_0xee5764(0x223)](_0xee5764(0x389), !![]);
                    }), _0x125fda(this)['on'](_0x2b76d3(0x1bb), function () {
                        const _0x50eda3 = _0x2b76d3;
                        let _0x301fcb = _0x125fda(this)[_0x50eda3(0x2cb)]()[_0x50eda3(0x310)](_0x50eda3(0x24c))[_0x50eda3(0x310)](_0x50eda3(0x388))['filter'](function (_0x327311) {
                            const _0x2186ea = _0x50eda3;
                            return _0x125fda(this)['width']() <= 0x40 && _0x125fda(this)[_0x2186ea(0x23f)]() <= 0x40 && _0x125fda(this)['find'](_0x2186ea(0x21a))['length'] > 0x0;
                        });
                        var _0x4f2dc1 = _0x301fcb['find']('svg\x20>\x20path[d^=\x22M16.636\x22]')[_0x50eda3(0x3da)] === 0x0;
                        this['muted'] != _0x4f2dc1 && (this[_0x50eda3(0x2fe)] = _0x112684[_0x50eda3(0x250)], _0x301fcb?.['trigger'](_0x50eda3(0x359))), _0x125fda(this)[_0x50eda3(0x223)](_0x50eda3(0x2c3)) && (_0x112684[_0x50eda3(0x250)] = this[_0x50eda3(0x2fe)], GM_setValue('G_VIDEO_VOLUME', this[_0x50eda3(0x2fe)])), this[_0x50eda3(0x2fe)] == _0x112684[_0x50eda3(0x250)] && _0x125fda(this)[_0x50eda3(0x223)]('data-completed', !![]);
                    }), _0x125fda(this)[_0x2b76d3(0x245)](_0x2b76d3(0x3e0), 'absolute'), _0x125fda(this)[_0x2b76d3(0x245)](_0x2b76d3(0x21c), '2'), _0x125fda(this)[_0x2b76d3(0x223)](_0x2b76d3(0x2b4), !![]), _0x125fda(this)[_0x2b76d3(0x223)]('controls', !![]);
                }
            });
            var _0x17f99d = _0x55df4a['find'](_0x34d63a(0x1b1)), _0x19191b = _0x55df4a[_0x34d63a(0x310)](_0x34d63a(0x24c))['first']();
            _0x10d9c8(_0x17f99d, _0x19191b, _0x34d63a(0x29d), _0x34d63a(0x21f));
        }
        ;
        function _0x14c565() {
            const _0x1bd12d = _0x1a0801;
            _0x125fda(_0x1bd12d(0x26c))[_0x1bd12d(0x17e)](function (_0x5a9786) {
                const _0x4b6bc4 = _0x1bd12d;
                return _0x125fda(this)['is']('section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr') ? _0x125fda(this)[_0x4b6bc4(0x2cb)]()[_0x4b6bc4(0x2cb)]()[_0x4b6bc4(0x2cb)]()[_0x4b6bc4(0x2cb)]()[0x0] : this;
            })['filter'](function () {
                return _0x125fda(this)['height']() > 0x0 && _0x125fda(this)['width']() > 0x0;
            })[_0x1bd12d(0x1d2)](function (_0x4349b2) {
                const _0x2addc0 = _0x1bd12d;
                if (!_0x125fda(this)[_0x2addc0(0x223)](_0x2addc0(0x316)) && !_0x125fda(this)['hasClass'](_0x2addc0(0x22d)) && !_0x125fda(this)['children']('article')?.[_0x2addc0(0x1a8)]('x1iyjqo2') && _0x125fda(this)['parents'](_0x2addc0(0x300))['length'] === 0x0) {
                    _0x1e3ab9('Found\x20post\x20container', _0x125fda(this));
                    const _0x1c04fc = _0x125fda(this), _0x3ac282 = this['tagName'], _0x531083 = _0x2addc0(0x2c1);
                    if (_0x3ac282 === _0x2addc0(0x38c) && _0x4349b2 != 0x0)
                        return;
                    const _0x5bd71b = _0x1c04fc[_0x2addc0(0x248)]('div')[_0x2addc0(0x248)](_0x2addc0(0x3e3));
                    if (_0x5bd71b[_0x2addc0(0x3da)] === 0x0)
                        return;
                    _0x1e3ab9('Found\x20insert\x20point', _0x5bd71b);
                    if (_0x1c04fc[_0x2addc0(0x310)](_0x2addc0(0x195))['length'] > 0x0) {
                        _0x1c04fc[_0x2addc0(0x310)](_0x2addc0(0x28b))[_0x2addc0(0x3da)] > 0x0 && _0x1c04fc[_0x2addc0(0x310)]('._acay\x20+\x20.x24i39r')[_0x2addc0(0x245)](_0x2addc0(0x1fd), '37px');
                        const _0x58d2b1 = _0x1c04fc['find'](_0x2addc0(0x195))[_0x2addc0(0x2af)]()[_0x2addc0(0x2cb)]()[0x0];
                        var _0x597ab9 = new MutationObserver(function () {
                            const _0x34dc88 = _0x2addc0;
                            _0x1c04fc[_0x34dc88(0x310)](_0x34dc88(0x28b))[_0x34dc88(0x245)]('top', _0x34dc88(0x233));
                        });
                        _0x597ab9[_0x2addc0(0x2e4)](_0x58d2b1, { 'childList': !![] });
                    }
                    _0x5bd71b['eq'](_0x3ac282 === 'DIV' ? 0x0 : _0x5bd71b[_0x2addc0(0x3da)] - 0x2)[_0x2addc0(0x348)](_0x2addc0(0x19c));
                    const _0x48b47c = _0x2addc0(0x18c) + _0x2ec937('DW') + '\x22\x20class=\x22SNKMS_IG_DW_MAIN\x22>' + _0x4a2f85[_0x2addc0(0x1e0)] + '</div>', _0x5f1e95 = _0x2addc0(0x212) + _0x2ec937(_0x2addc0(0x319)) + _0x2addc0(0x194) + _0x4a2f85[_0x2addc0(0x319)] + _0x2addc0(0x3b9), _0x729e49 = '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22' + _0x2ec937(_0x2addc0(0x3fa)) + _0x2addc0(0x321) + _0x4a2f85[_0x2addc0(0x2d4)] + _0x2addc0(0x3b9);
                    _0x5bd71b['find']('.button_wrapper')[_0x2addc0(0x348)](_0x48b47c);
                    const _0x5afe3e = _0x1c04fc[_0x2addc0(0x310)](_0x531083)[_0x2addc0(0x3da)];
                    if (_0x5afe3e > 0x1 && _0x5c4373[_0x2addc0(0x1d6)] && !_0x5c4373[_0x2addc0(0x313)]) {
                        const _0x4628f0 = _0x2addc0(0x295) + _0x2ec937(_0x2addc0(0x1bc)) + '\x22\x20class=\x22SNKMS_IG_DW_ALL_MAIN\x22>' + _0x4a2f85['DOWNLOAD_ALL'] + _0x2addc0(0x3b9);
                        _0x5bd71b[_0x2addc0(0x310)](_0x2addc0(0x329))[_0x2addc0(0x348)](_0x4628f0);
                    }
                    _0x5bd71b[_0x2addc0(0x310)]('.button_wrapper')['append'](_0x5f1e95), setTimeout(() => {
                        const _0x4782a3 = _0x2addc0;
                        if (_0x5bd71b['eq'](_0x3ac282 === _0x4782a3(0x38c) ? 0x0 : _0x5bd71b[_0x4782a3(0x3da)] - 0x2)[_0x4782a3(0x310)](_0x4782a3(0x268))[_0x4782a3(0x3da)] === 0x0)
                            _0x5bd71b[_0x4782a3(0x310)]('video')['length'] > 0x0 && _0x5bd71b[_0x4782a3(0x310)]('.button_wrapper')[_0x4782a3(0x348)](_0x729e49);
                        else {
                            const _0x1be8dc = (_0x32ffd9, _0x22cbeb) => {
                                    _0x32ffd9['forEach'](_0x25631b => {
                                        const _0x47813c = a0_0x37c6;
                                        if (_0x25631b[_0x47813c(0x3ad)]) {
                                            var _0x873090 = _0x125fda(_0x25631b['target']);
                                            _0x873090[_0x47813c(0x310)](_0x47813c(0x1b1))['length'] > 0x0 ? (_0x5bd71b[_0x47813c(0x310)](_0x47813c(0x1a2))['length'] === 0x0 && _0x5bd71b['find'](_0x47813c(0x329))[_0x47813c(0x348)](_0x729e49), _0x1e6123(_0x1c04fc)) : _0x5bd71b[_0x47813c(0x310)](_0x47813c(0x1a2))?.['remove']();
                                        }
                                    });
                                }, _0x4b272b = new IntersectionObserver(_0x1be8dc, {
                                    'root': _0x1c04fc[_0x4782a3(0x310)](_0x4782a3(0x384))[_0x4782a3(0x2af)]()['parent']()[_0x4782a3(0x2cb)]()[_0x4782a3(0x2cb)]()[0x0],
                                    'rootMargin': _0x4782a3(0x3a1),
                                    'threshold': 0.1
                                }), _0x29498b = new MutationObserver(function (_0x1345a9, _0x4036b1) {
                                    const _0x2ac5c6 = _0x4782a3;
                                    var _0x1134de = _0x1345a9['at'](0x0)?.[_0x2ac5c6(0x1a9)];
                                    _0x125fda(_0x1134de)[_0x2ac5c6(0x310)](_0x2ac5c6(0x25c))['each'](function () {
                                        const _0x312afd = _0x2ac5c6;
                                        _0x4b272b[_0x312afd(0x2e4)](this);
                                    });
                                });
                            _0x1c04fc[_0x4782a3(0x310)](_0x4782a3(0x268))[_0x4782a3(0x1d2)](function () {
                                const _0x58d26d = _0x4782a3;
                                _0x4b272b[_0x58d26d(0x2e4)](this);
                            });
                            const _0x81b9d = _0x5bd71b['eq'](_0x3ac282 === _0x4782a3(0x38c) ? 0x0 : _0x5bd71b[_0x4782a3(0x3da)] - 0x2)[_0x4782a3(0x310)]('div\x20>\x20ul\x20li._acaz')?.[_0x4782a3(0x2cb)]()[0x0], _0x38297b = _0x5bd71b['eq'](_0x3ac282 === _0x4782a3(0x38c) ? 0x0 : _0x5bd71b['length'] - 0x2)[_0x4782a3(0x310)](_0x4782a3(0x268))?.[_0x4782a3(0x2cb)]()[_0x4782a3(0x2cb)]()[0x0];
                            _0x81b9d && _0x29498b[_0x4782a3(0x2e4)](_0x81b9d, { 'childList': !![] }), _0x38297b && _0x29498b[_0x4782a3(0x2e4)](_0x38297b, { 'attributes': !![] });
                        }
                    }, 0x32), _0x5bd71b[_0x2addc0(0x245)](_0x2addc0(0x3e0), 'relative'), _0x1e6123(_0x1c04fc), _0x112684[_0x2addc0(0x3fb)][_0x2addc0(0x2ec)]({
                        'element': this,
                        'trigger': [
                            '.SNKMS_IG_THUMBNAIL_MAIN',
                            '.SNKMS_IG_NEWTAB_MAIN',
                            '.SNKMS_IG_DW_ALL_MAIN',
                            _0x2addc0(0x277)
                        ]
                    }), _0x125fda(this)['on'](_0x2addc0(0x359), '.SNKMS_IG_THUMBNAIL_MAIN', function () {
                        const _0x186a6f = _0x2addc0;
                        _0xe8b19a(!![]), _0x112684['GL_username'] = _0x1c04fc[_0x186a6f(0x223)](_0x186a6f(0x1c8)), _0x112684[_0x186a6f(0x228)] = location[_0x186a6f(0x1bf)][_0x186a6f(0x2a2)](/\/$/, '')[_0x186a6f(0x3fc)]('/')['at'](-0x1) || _0x1c04fc[_0x186a6f(0x310)](_0x186a6f(0x3d2))[_0x186a6f(0x2af)]()[_0x186a6f(0x223)](_0x186a6f(0x19b))[_0x186a6f(0x3fc)]('/')['at'](0x2) || _0x125fda(this)['parent']()[_0x186a6f(0x2cb)]()[_0x186a6f(0x2cb)]()['children'](_0x186a6f(0x184))[_0x186a6f(0x248)]('div')[_0x186a6f(0x248)](_0x186a6f(0x184))['find'](_0x186a6f(0x3d2))['last']()[_0x186a6f(0x223)]('href')[_0x186a6f(0x3fc)]('/')['at'](0x2);
                        var _0x7a70c3 = _0x27f9a2(_0x1c04fc);
                        _0x34a8d0(!![], ![]), _0x1c43b4(_0x112684[_0x186a6f(0x228)], _0x186a6f(0x2ff), '')[_0x186a6f(0x1db)](() => {
                            let _0x3b77b1 = setInterval(() => {
                                const _0x2dea73 = a0_0x37c6;
                                if (_0x125fda(_0x2dea73(0x1f2))[_0x2dea73(0x3da)] > 0x0) {
                                    clearInterval(_0x3b77b1);
                                    var _0x2e6728 = _0x125fda('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22' + (_0x7a70c3 + 0x1) + '\x22]')?.['parent']()['find'](_0x2dea73(0x3ba))?.[_0x2dea73(0x2af)]();
                                    _0x2e6728 != null && _0x2e6728[_0x2dea73(0x3da)] > 0x0 ? _0x2e6728[_0x2dea73(0x306)](_0x2dea73(0x359)) : alert('Can\x20not\x20find\x20thumbnail\x20url.'), _0xe8b19a(![]), _0x125fda('.IG_SN_DIG')[_0x2dea73(0x298)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x125fda(this)['on'](_0x2addc0(0x359), '.SNKMS_IG_NEWTAB_MAIN', function () {
                        const _0x1b2aba = _0x2addc0;
                        _0xe8b19a(!![]), _0x112684['GL_username'] = _0x1c04fc[_0x1b2aba(0x223)](_0x1b2aba(0x1c8)), _0x112684[_0x1b2aba(0x228)] = location[_0x1b2aba(0x1bf)]['replace'](/\/$/, '')[_0x1b2aba(0x3fc)]('/')['at'](-0x1) || _0x1c04fc['find'](_0x1b2aba(0x3d2))[_0x1b2aba(0x2af)]()[_0x1b2aba(0x223)](_0x1b2aba(0x19b))[_0x1b2aba(0x3fc)]('/')['at'](0x2) || _0x125fda(this)[_0x1b2aba(0x2cb)]()['parent']()[_0x1b2aba(0x2cb)]()[_0x1b2aba(0x248)](_0x1b2aba(0x184))[_0x1b2aba(0x248)](_0x1b2aba(0x3e3))[_0x1b2aba(0x248)](_0x1b2aba(0x184))[_0x1b2aba(0x310)](_0x1b2aba(0x3d2))[_0x1b2aba(0x193)]()['attr']('href')[_0x1b2aba(0x3fc)]('/')['at'](0x2);
                        var _0x26f47b = _0x27f9a2(_0x1c04fc);
                        _0x34a8d0(!![], ![]), _0x1c43b4(_0x112684[_0x1b2aba(0x228)], _0x1b2aba(0x2ff), '')['then'](() => {
                            let _0x1ade21 = setInterval(() => {
                                const _0x1b6b47 = a0_0x37c6;
                                if (_0x125fda(_0x1b6b47(0x1f2))[_0x1b6b47(0x3da)] > 0x0) {
                                    clearInterval(_0x1ade21);
                                    var _0x42519f = _0x125fda(_0x1b6b47(0x280) + (_0x26f47b + 0x1) + '\x22]');
                                    if (_0x5c4373[_0x1b6b47(0x2bc)] && _0x5c4373[_0x1b6b47(0x29f)])
                                        _0x31c4e3(_0x42519f[_0x1b6b47(0x2af)]()[0x0], !![]);
                                    else {
                                        let _0x296dd5 = _0x42519f?.[_0x1b6b47(0x223)](_0x1b6b47(0x315));
                                        if (_0x296dd5) {
                                            var _0x4be27a = new URL(_0x296dd5);
                                            _0x4be27a[_0x1b6b47(0x222)] = _0x1b6b47(0x37f), _0x52438f(_0x4be27a[_0x1b6b47(0x19b)]);
                                        } else
                                            alert(_0x1b6b47(0x317));
                                    }
                                    _0xe8b19a(![]), _0x125fda('.IG_SN_DIG')[_0x1b6b47(0x298)]();
                                }
                            }, 0xfa);
                        });
                    }), _0x125fda(this)['on'](_0x2addc0(0x359), _0x2addc0(0x2fb), async function () {
                        const _0x105f0d = _0x2addc0;
                        _0x112684[_0x105f0d(0x25b)] = _0x1c04fc[_0x105f0d(0x223)](_0x105f0d(0x1c8)), _0x112684[_0x105f0d(0x228)] = location[_0x105f0d(0x1bf)][_0x105f0d(0x2a2)](/\/$/, '')[_0x105f0d(0x3fc)]('/')['at'](-0x1) || _0x1c04fc[_0x105f0d(0x310)](_0x105f0d(0x3d2))[_0x105f0d(0x2af)]()[_0x105f0d(0x223)](_0x105f0d(0x19b))[_0x105f0d(0x3fc)]('/')['at'](0x2) || _0x125fda(this)[_0x105f0d(0x2cb)]()[_0x105f0d(0x2cb)]()[_0x105f0d(0x2cb)]()[_0x105f0d(0x248)]('div:last-child')[_0x105f0d(0x248)](_0x105f0d(0x3e3))[_0x105f0d(0x248)](_0x105f0d(0x184))[_0x105f0d(0x310)](_0x105f0d(0x3d2))[_0x105f0d(0x193)]()[_0x105f0d(0x223)](_0x105f0d(0x19b))[_0x105f0d(0x3fc)]('/')['at'](0x2), _0x34a8d0(_0x5c4373[_0x105f0d(0x313)], !![]), _0x125fda(_0x105f0d(0x283))['html']('<a\x20href=\x22https://www.instagram.com/p/' + _0x112684[_0x105f0d(0x228)] + '\x22>' + _0x112684[_0x105f0d(0x228)] + _0x105f0d(0x394)), _0x125fda(_0x105f0d(0x1f2))[_0x105f0d(0x1d2)](function () {
                            const _0x2e7fd1 = _0x105f0d;
                            _0x125fda(this)[_0x2e7fd1(0x239)](_0x2e7fd1(0x213)), _0x125fda(this)[_0x2e7fd1(0x2ea)](_0x2e7fd1(0x303)), _0x125fda(this)[_0x2e7fd1(0x198)]('<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22' + _0x2ec937(_0x2e7fd1(0x319)) + _0x2e7fd1(0x27c) + _0x4a2f85[_0x2e7fd1(0x319)] + _0x2e7fd1(0x3b9)), _0x125fda(this)[_0x2e7fd1(0x223)](_0x2e7fd1(0x238)) == 'video' && _0x125fda(this)['after'](_0x2e7fd1(0x2dc) + _0x2ec937(_0x2e7fd1(0x3fa)) + _0x2e7fd1(0x1f7) + _0x4a2f85[_0x2e7fd1(0x2d4)] + _0x2e7fd1(0x3b9));
                        }), _0x1c43b4(_0x112684[_0x105f0d(0x228)], _0x105f0d(0x2ff), _0x2ec937(_0x105f0d(0x3a6)))['then'](() => {
                            let _0x585109 = setInterval(() => {
                                const _0x5000ca = a0_0x37c6;
                                _0x125fda(_0x5000ca(0x1f2))[_0x5000ca(0x3da)] > 0x0 && (clearInterval(_0x585109), _0x125fda(_0x5000ca(0x1f2))[_0x5000ca(0x1d2)](function () {
                                    const _0x433443 = _0x5000ca;
                                    _0x125fda(this)[_0x433443(0x306)]('click');
                                }), _0x125fda(_0x5000ca(0x2f4))[_0x5000ca(0x298)]());
                            }, 0xfa);
                        });
                    }), _0x125fda(this)['on']('click', '.SNKMS_IG_DW_MAIN', async function () {
                        const _0xaae7a8 = _0x2addc0;
                        _0x112684[_0xaae7a8(0x25b)] = _0x1c04fc[_0xaae7a8(0x223)](_0xaae7a8(0x1c8)), _0x112684[_0xaae7a8(0x228)] = location[_0xaae7a8(0x1bf)][_0xaae7a8(0x2a2)](/\/$/, '')[_0xaae7a8(0x3fc)]('/')['at'](-0x1) || _0x1c04fc[_0xaae7a8(0x310)]('a[href^=\x22/p/\x22]')[_0xaae7a8(0x2af)]()[_0xaae7a8(0x223)](_0xaae7a8(0x19b))[_0xaae7a8(0x3fc)]('/')['at'](0x2) || _0x125fda(this)[_0xaae7a8(0x2cb)]()[_0xaae7a8(0x2cb)]()[_0xaae7a8(0x2cb)]()[_0xaae7a8(0x248)](_0xaae7a8(0x184))[_0xaae7a8(0x248)](_0xaae7a8(0x3e3))[_0xaae7a8(0x248)](_0xaae7a8(0x184))[_0xaae7a8(0x310)](_0xaae7a8(0x3d2))[_0xaae7a8(0x193)]()[_0xaae7a8(0x223)]('href')[_0xaae7a8(0x3fc)]('/')['at'](0x2), _0x34a8d0(_0x5c4373[_0xaae7a8(0x313)], !![]), _0x125fda(_0xaae7a8(0x283))['html']('<a\x20href=\x22https://www.instagram.com/p/' + _0x112684['GL_postPath'] + '\x22>' + _0x112684[_0xaae7a8(0x228)] + _0xaae7a8(0x394));
                        if (_0x5c4373[_0xaae7a8(0x1d6)]) {
                            _0xe8b19a(!![]), _0x2bcff0(!![]);
                            var _0x184749 = _0x27f9a2(_0x125fda(this)[_0xaae7a8(0x2cb)]()[_0xaae7a8(0x2cb)]()[_0xaae7a8(0x2cb)]());
                            _0x1c43b4(_0x112684[_0xaae7a8(0x228)], _0xaae7a8(0x2ff), '')[_0xaae7a8(0x1db)](() => {
                                let _0x3fdc9b = setInterval(() => {
                                    const _0x42ed0b = a0_0x37c6;
                                    if (_0x125fda(_0x42ed0b(0x1f2))['length'] > 0x0) {
                                        clearInterval(_0x3fdc9b);
                                        var _0x1d7a3b = _0x125fda(_0x42ed0b(0x280) + (_0x184749 + 0x1) + '\x22]')?.['attr']('data-href');
                                        _0x1d7a3b ? (_0xe8b19a(![]), _0x125fda(_0x42ed0b(0x280) + (_0x184749 + 0x1) + '\x22]')?.[_0x42ed0b(0x306)](_0x42ed0b(0x359))) : alert(_0x42ed0b(0x372)), _0x125fda(_0x42ed0b(0x2f4))[_0x42ed0b(0x298)]();
                                    }
                                }, 0xfa);
                            });
                            return;
                        }
                        if (!_0x5c4373[_0xaae7a8(0x313)]) {
                            var _0x5de301 = 0x0, _0x5cb2c5 = _0x125fda(this)[_0xaae7a8(0x2cb)]()['parent']()[_0xaae7a8(0x310)](_0x531083)[_0xaae7a8(0x3da)], _0x2d54e6 = _0x5c4373[_0xaae7a8(0x314)], _0x94731e = new Date(_0x125fda(this)[_0xaae7a8(0x2cb)]()['parent']()[_0xaae7a8(0x310)]('a[href^=\x22/p/\x22]\x20time[datetime]')['first']()[_0xaae7a8(0x223)](_0xaae7a8(0x30e)))[_0xaae7a8(0x2f8)]();
                            if (_0x5cb2c5)
                                _0x125fda(this)['parent']()['parent']()[_0xaae7a8(0x310)](_0x531083)[_0xaae7a8(0x1d2)](function () {
                                    const _0x242165 = _0xaae7a8;
                                    let _0x49bf02 = _0x125fda(this)[_0x242165(0x2cb)]()['parent']()[_0x242165(0x2cb)]()[_0x242165(0x310)](_0x242165(0x1b1));
                                    _0x49bf02 && _0x49bf02[_0x242165(0x223)](_0x242165(0x3c0)) && (_0x2d54e6 = !![]);
                                }), _0x2d54e6 || _0x5c4373[_0xaae7a8(0x2bc)] ? _0x1c43b4(_0x112684[_0xaae7a8(0x228)], _0xaae7a8(0x2ff), _0x2ec937(_0xaae7a8(0x3a6))) : (_0x125fda(this)[_0xaae7a8(0x2cb)]()['parent']()['find'](_0x531083)['each'](function () {
                                    const _0x398597 = _0xaae7a8;
                                    _0x5de301++;
                                    let _0x53d00d = _0x125fda(this)[_0x398597(0x310)]('video'), _0x257fe1 = _0x125fda(this)[_0x398597(0x310)](_0x398597(0x3df)), _0x41afa8 = _0x257fe1[_0x398597(0x223)](_0x398597(0x380)) ? _0x257fe1['attr'](_0x398597(0x380))[_0x398597(0x3fc)]('\x20')[0x0] : _0x257fe1['attr'](_0x398597(0x3c0));
                                    _0x53d00d && _0x53d00d['attr']('src') && (_0x2d54e6 = !![]), _0x257fe1 && _0x41afa8 && _0x125fda(_0x398597(0x2ff))[_0x398597(0x348)](_0x398597(0x3a2) + _0x94731e + _0x398597(0x28c) + _0x112684[_0x398597(0x228)] + _0x398597(0x301) + _0x5de301 + _0x398597(0x3db) + _0x41afa8 + _0x398597(0x279) + _0x41afa8 + _0x398597(0x224) + _0x2ec937(_0x398597(0x297)) + _0x398597(0x1b0) + _0x5de301 + _0x398597(0x273));
                                }), _0x2d54e6 && _0x1c43b4(_0x112684[_0xaae7a8(0x228)], '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x2ec937(_0xaae7a8(0x2b2))));
                            else {
                                if (_0x5c4373[_0xaae7a8(0x2bc)])
                                    _0x1c43b4(_0x112684['GL_postPath'], _0xaae7a8(0x2ff), _0x2ec937(_0xaae7a8(0x3a6)));
                                else {
                                    _0x5de301++;
                                    let _0x3c3339 = _0x125fda(this)[_0xaae7a8(0x2cb)]()['parent']()['parent']()[_0xaae7a8(0x310)](_0xaae7a8(0x1b1)), _0x39b253 = _0x125fda(this)['parent']()[_0xaae7a8(0x2cb)]()[_0xaae7a8(0x2cb)]()[_0xaae7a8(0x310)](_0xaae7a8(0x3df)), _0x550874 = _0x39b253[_0xaae7a8(0x223)](_0xaae7a8(0x380)) ? _0x39b253[_0xaae7a8(0x223)](_0xaae7a8(0x380))['split']('\x20')[0x0] : _0x39b253[_0xaae7a8(0x223)](_0xaae7a8(0x3c0));
                                    _0x3c3339 && _0x3c3339[_0xaae7a8(0x223)]('src') && _0x1c43b4(_0x112684[_0xaae7a8(0x228)], _0xaae7a8(0x2ff), _0x2ec937(_0xaae7a8(0x1d3))), _0x39b253 && _0x550874 && _0x125fda('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY')['append']('<a\x20datetime=\x22' + _0x94731e + '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x112684[_0xaae7a8(0x228)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22' + _0x5de301 + '\x22\x20href=\x22javascript:;\x22\x20href=\x22\x22\x20data-href=\x22' + _0x550874 + _0xaae7a8(0x279) + _0x550874 + _0xaae7a8(0x224) + _0x2ec937(_0xaae7a8(0x297)) + _0xaae7a8(0x1b0) + _0x5de301 + _0xaae7a8(0x273));
                                }
                            }
                        }
                        _0x125fda(_0xaae7a8(0x1f2))[_0xaae7a8(0x1d2)](function () {
                            const _0xb0dc93 = _0xaae7a8;
                            _0x125fda(this)['wrap']('<div></div>'), _0x125fda(this)[_0xb0dc93(0x2ea)](_0xb0dc93(0x303)), _0x125fda(this)[_0xb0dc93(0x198)](_0xb0dc93(0x212) + _0x2ec937('NEW_TAB') + _0xb0dc93(0x27c) + _0x4a2f85['NEW_TAB'] + _0xb0dc93(0x3b9)), _0x125fda(this)[_0xb0dc93(0x223)](_0xb0dc93(0x238)) == _0xb0dc93(0x1b1) && _0x125fda(this)[_0xb0dc93(0x198)](_0xb0dc93(0x2dc) + _0x2ec937(_0xb0dc93(0x3fa)) + _0xb0dc93(0x1f7) + _0x4a2f85[_0xb0dc93(0x2d4)] + _0xb0dc93(0x3b9));
                        }), _0x5c4373['DIRECT_DOWNLOAD_ALL'] && _0x1c43b4(_0x112684['GL_postPath'], '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY', _0x2ec937(_0xaae7a8(0x3a6)))[_0xaae7a8(0x1db)](() => {
                            let _0x559889 = setInterval(() => {
                                const _0x96b4bf = a0_0x37c6;
                                _0x125fda(_0x96b4bf(0x1f2))[_0x96b4bf(0x3da)] > 0x0 && (clearInterval(_0x559889), _0x125fda(_0x96b4bf(0x1f2))[_0x96b4bf(0x1d2)](function () {
                                    const _0x1fffe5 = _0x96b4bf;
                                    _0x125fda(this)[_0x1fffe5(0x306)]('click');
                                }), _0x125fda('.IG_SN_DIG')[_0x96b4bf(0x298)]());
                            }, 0xfa);
                        });
                    });
                    var _0x35c860 = _0x125fda(this)['find'](_0x2addc0(0x180))['first']()[_0x2addc0(0x323)]() || _0x125fda(this)[_0x2addc0(0x310)](_0x2addc0(0x34c))['filter'](function () {
                        const _0x9c79c = _0x2addc0;
                        return _0x125fda(this)?.[_0x9c79c(0x323)]()?.['length'] > 0x0;
                    })[_0x2addc0(0x2af)]()[_0x2addc0(0x323)]();
                    _0x125fda(this)[_0x2addc0(0x223)](_0x2addc0(0x316), _0x2addc0(0x361)), _0x125fda(this)[_0x2addc0(0x223)](_0x2addc0(0x1c8), _0x35c860);
                }
            });
        }
        function _0x1278b0(_0x4b7abb) {
            const _0x162c55 = _0x1a0801;
            var _0x1f2fc7 = _0x4b7abb['shortcode_media'] ?? _0x4b7abb;
            return _0x1f2fc7[_0x162c55(0x1df)] == null && _0x1f2fc7[_0x162c55(0x3b3)] != null && (_0x1f2fc7[_0x162c55(0x1df)] = _0x1f2fc7[_0x162c55(0x3b3)]), _0x1f2fc7[_0x162c55(0x1df)] == null && (_0x1e3ab9(_0x162c55(0x260), _0x162c55(0x1d5)), alert(_0x162c55(0x38e))), _0x1f2fc7;
        }
        async function _0x1c43b4(_0x7bd1f0, _0x399d27, _0x307c48) {
            const _0x495759 = _0x1a0801;
            try {
                _0x125fda(_0x399d27 + '\x20a')['remove'](), _0x125fda(_0x399d27)['append'](_0x495759(0x366) + _0x307c48 + _0x495759(0x3ef));
                let _0x3906f2 = await _0x2cbb2c(_0x7bd1f0), _0x44da71 = _0x1278b0(_0x3906f2[_0x495759(0x3e7)]);
                if (_0x3906f2['type'] === _0x495759(0x200)) {
                    let _0x59fd07 = 0x1;
                    _0x44da71['__typename'] == 'GraphVideo' && _0x44da71[_0x495759(0x3ed)] && (_0x125fda(_0x399d27)[_0x495759(0x348)]('<a\x20media-id=\x22' + _0x44da71['id'] + _0x495759(0x3a0) + _0x44da71['taken_at_timestamp'] + _0x495759(0x2e3) + _0x44da71[_0x495759(0x1c2)] + _0x495759(0x1fc) + _0x44da71[_0x495759(0x1df)][_0x495759(0x226)] + _0x495759(0x311) + _0x59fd07 + _0x495759(0x3db) + _0x44da71[_0x495759(0x3ed)] + _0x495759(0x279) + _0x44da71[_0x495759(0x35b)][0x1]['src'] + _0x495759(0x240) + _0x2ec937(_0x495759(0x1ff)) + _0x495759(0x1b0) + _0x59fd07 + '\x20-</a>'), _0x59fd07++);
                    _0x44da71[_0x495759(0x3bf)] == _0x495759(0x208) && (_0x125fda(_0x399d27)[_0x495759(0x348)](_0x495759(0x349) + _0x44da71['id'] + _0x495759(0x3a0) + _0x44da71[_0x495759(0x379)] + _0x495759(0x2e3) + _0x44da71[_0x495759(0x1c2)] + _0x495759(0x1a6) + _0x44da71['owner'][_0x495759(0x226)] + '\x22\x20data-globalIndex=\x22' + _0x59fd07 + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x44da71['display_resources'][_0x44da71[_0x495759(0x35b)]['length'] - 0x1][_0x495759(0x3c0)] + _0x495759(0x279) + _0x44da71[_0x495759(0x35b)][0x1]['src'] + _0x495759(0x224) + _0x2ec937(_0x495759(0x297)) + _0x495759(0x1b0) + _0x59fd07 + _0x495759(0x273)), _0x59fd07++);
                    if (_0x44da71[_0x495759(0x3bf)] == _0x495759(0x34b) && _0x44da71['edge_sidecar_to_children'])
                        for (let _0x27d71b of _0x44da71[_0x495759(0x3d0)]['edges']) {
                            _0x27d71b[_0x495759(0x20f)][_0x495759(0x3bf)] == 'GraphVideo' && _0x125fda(_0x399d27)['append']('<a\x20media-id=\x22' + _0x27d71b[_0x495759(0x20f)]['id'] + _0x495759(0x3a0) + _0x44da71[_0x495759(0x379)] + '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22' + _0x44da71[_0x495759(0x1c2)] + _0x495759(0x1fc) + _0x44da71[_0x495759(0x1df)][_0x495759(0x226)] + _0x495759(0x311) + _0x59fd07 + _0x495759(0x3db) + _0x27d71b['node']['video_url'] + _0x495759(0x279) + _0x27d71b[_0x495759(0x20f)]['display_resources'][0x1]['src'] + _0x495759(0x1c4) + _0x2ec937(_0x495759(0x1ff)) + _0x495759(0x1b0) + _0x59fd07 + _0x495759(0x273)), _0x27d71b[_0x495759(0x20f)][_0x495759(0x3bf)] == _0x495759(0x208) && _0x125fda(_0x399d27)[_0x495759(0x348)](_0x495759(0x349) + _0x27d71b[_0x495759(0x20f)]['id'] + _0x495759(0x3a0) + _0x44da71[_0x495759(0x379)] + _0x495759(0x2e3) + _0x44da71['shortcode'] + _0x495759(0x1a6) + _0x44da71[_0x495759(0x1df)][_0x495759(0x226)] + _0x495759(0x311) + _0x59fd07 + _0x495759(0x3db) + _0x27d71b[_0x495759(0x20f)][_0x495759(0x35b)][_0x27d71b['node'][_0x495759(0x35b)][_0x495759(0x3da)] - 0x1]['src'] + _0x495759(0x279) + _0x27d71b['node'][_0x495759(0x35b)][0x1][_0x495759(0x3c0)] + _0x495759(0x224) + _0x2ec937(_0x495759(0x297)) + _0x495759(0x1b0) + _0x59fd07 + _0x495759(0x273)), _0x59fd07++;
                        }
                } else {
                    if (_0x44da71[_0x495759(0x2f7)])
                        _0x1e3ab9(_0x495759(0x2f7)), _0x44da71[_0x495759(0x2f7)]['forEach']((_0x246eea, _0x241e43) => {
                            const _0x228720 = _0x495759;
                            let _0x4ed3a3 = _0x241e43 + 0x1;
                            _0x246eea[_0x228720(0x275)] == null ? (_0x246eea[_0x228720(0x2a3)][_0x228720(0x3a9)][_0x228720(0x26a)](function (_0x3a6e0e, _0x25eec4) {
                                const _0x5aa8d6 = _0x228720;
                                let _0x544f6e = new URL(_0x3a6e0e[_0x5aa8d6(0x33a)])[_0x5aa8d6(0x34e)][_0x5aa8d6(0x1d9)](_0x5aa8d6(0x1c9)), _0x2c132b = new URL(_0x25eec4[_0x5aa8d6(0x33a)])[_0x5aa8d6(0x34e)]['get'](_0x5aa8d6(0x1c9));
                                if (_0x544f6e && _0x2c132b) {
                                    if (_0x544f6e[_0x5aa8d6(0x3da)] > _0x2c132b[_0x5aa8d6(0x3da)])
                                        return 0x1;
                                    if (_0x544f6e[_0x5aa8d6(0x3da)] < _0x2c132b[_0x5aa8d6(0x3da)])
                                        return -0x1;
                                } else {
                                    if (_0x3a6e0e[_0x5aa8d6(0x252)] < _0x25eec4[_0x5aa8d6(0x252)])
                                        return 0x1;
                                    if (_0x3a6e0e[_0x5aa8d6(0x252)] > _0x25eec4[_0x5aa8d6(0x252)])
                                        return -0x1;
                                }
                                return 0x0;
                            }), _0x125fda(_0x399d27)[_0x228720(0x348)](_0x228720(0x349) + _0x246eea['pk'] + '\x22\x20datetime=\x22' + _0x246eea[_0x228720(0x270)] + _0x228720(0x2e3) + _0x44da71[_0x228720(0x1b8)] + '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22' + _0x44da71['owner'][_0x228720(0x226)] + _0x228720(0x311) + _0x4ed3a3 + _0x228720(0x3db) + _0x246eea[_0x228720(0x2a3)][_0x228720(0x3a9)][0x0][_0x228720(0x33a)] + _0x228720(0x279) + _0x246eea['image_versions2'][_0x228720(0x3a9)][0x0][_0x228720(0x33a)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>' + _0x2ec937(_0x228720(0x297)) + _0x228720(0x1b0) + _0x4ed3a3 + _0x228720(0x273))) : _0x125fda(_0x399d27)['append'](_0x228720(0x349) + _0x246eea['pk'] + _0x228720(0x3a0) + _0x246eea['taken_at'] + _0x228720(0x2e3) + _0x44da71[_0x228720(0x1b8)] + _0x228720(0x1fc) + _0x44da71[_0x228720(0x1df)][_0x228720(0x226)] + '\x22\x20data-globalIndex=\x22' + _0x4ed3a3 + _0x228720(0x3db) + _0x246eea['video_versions'][0x0][_0x228720(0x33a)] + _0x228720(0x279) + _0x246eea[_0x228720(0x2a3)][_0x228720(0x3a9)][0x0][_0x228720(0x33a)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x2ec937(_0x228720(0x1ff)) + _0x228720(0x1b0) + _0x4ed3a3 + _0x228720(0x273));
                        });
                    else {
                        let _0x37da1a = 0x1;
                        _0x44da71[_0x495759(0x275)] == null ? (_0x44da71[_0x495759(0x2a3)][_0x495759(0x3a9)][_0x495759(0x26a)](function (_0x2dbcd5, _0x175126) {
                            const _0x230d30 = _0x495759;
                            let _0x169d67 = new URL(_0x2dbcd5[_0x230d30(0x33a)])[_0x230d30(0x34e)]['get'](_0x230d30(0x1c9)), _0x419a6f = new URL(_0x175126[_0x230d30(0x33a)])[_0x230d30(0x34e)][_0x230d30(0x1d9)](_0x230d30(0x1c9));
                            if (_0x169d67 && _0x419a6f) {
                                if (_0x169d67[_0x230d30(0x3da)] > _0x419a6f['length'])
                                    return 0x1;
                                if (_0x169d67['length'] < _0x419a6f[_0x230d30(0x3da)])
                                    return -0x1;
                            } else {
                                if (_0x2dbcd5[_0x230d30(0x252)] < _0x175126['width'])
                                    return 0x1;
                                if (_0x2dbcd5[_0x230d30(0x252)] > _0x175126['width'])
                                    return -0x1;
                            }
                            return 0x0;
                        }), _0x125fda(_0x399d27)[_0x495759(0x348)](_0x495759(0x349) + _0x44da71['pk'] + '\x22\x20datetime=\x22' + _0x44da71['taken_at'] + _0x495759(0x2e3) + _0x44da71[_0x495759(0x1b8)] + _0x495759(0x1a6) + _0x44da71[_0x495759(0x1df)][_0x495759(0x226)] + _0x495759(0x311) + _0x37da1a + _0x495759(0x3db) + _0x44da71[_0x495759(0x2a3)]['candidates'][0x0]['url'] + _0x495759(0x279) + _0x44da71['image_versions2'][_0x495759(0x3a9)][0x0][_0x495759(0x33a)] + _0x495759(0x224) + _0x2ec937('IMG') + _0x495759(0x1b0) + _0x37da1a + '\x20-</a>')) : _0x125fda(_0x399d27)[_0x495759(0x348)]('<a\x20media-id=\x22' + _0x44da71['pk'] + _0x495759(0x3a0) + _0x44da71[_0x495759(0x270)] + _0x495759(0x2e3) + _0x44da71[_0x495759(0x1b8)] + '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22' + _0x44da71['owner'][_0x495759(0x226)] + '\x22\x20data-globalIndex=\x22' + _0x37da1a + '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22' + _0x44da71[_0x495759(0x275)][0x0]['url'] + _0x495759(0x279) + _0x44da71[_0x495759(0x2a3)][_0x495759(0x3a9)][0x0][_0x495759(0x33a)] + '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>' + _0x2ec937(_0x495759(0x1ff)) + _0x495759(0x1b0) + _0x37da1a + _0x495759(0x273));
                    }
                }
                _0x125fda(_0x495759(0x343))[_0x495759(0x298)](), _0x125fda(_0x495759(0x1f2))[_0x495759(0x1d2)](function () {
                    const _0x5649c5 = _0x495759;
                    _0x125fda(this)[_0x5649c5(0x239)](_0x5649c5(0x213)), _0x125fda(this)[_0x5649c5(0x2ea)](_0x5649c5(0x303)), _0x125fda(this)[_0x5649c5(0x198)](_0x5649c5(0x212) + _0x2ec937(_0x5649c5(0x319)) + '\x22\x20class=\x22newTab\x22>' + _0x4a2f85[_0x5649c5(0x319)] + _0x5649c5(0x3b9)), _0x125fda(this)[_0x5649c5(0x223)]('data-name') == _0x5649c5(0x1b1) && _0x125fda(this)['after'](_0x5649c5(0x2dc) + _0x2ec937(_0x5649c5(0x3fa)) + _0x5649c5(0x1f7) + _0x4a2f85[_0x5649c5(0x2d4)] + _0x5649c5(0x3b9));
                });
            } catch (_0x5b20e5) {
                _0x1e3ab9(_0x495759(0x2a6), _0x5b20e5);
            }
            ;
        }
        function _0x27f9a2(_0x430f6f) {
            const _0x4b695a = _0x1a0801;
            var _0x475630 = 0x0, _0x23c244 = _0x430f6f[_0x4b695a(0x310)](_0x4b695a(0x334));
            return (_0x23c244 == null || !_0x23c244['hasClass'](_0x4b695a(0x3c3))) && (_0x23c244 = _0x430f6f['find']('._aatk\x20>\x20div\x20>\x20div:last-child')['eq'](0x0)[_0x4b695a(0x248)](_0x4b695a(0x3e3))), _0x23c244[_0x4b695a(0x1b7)](_0x4b695a(0x3f4))['each'](function (_0x423be5) {
                const _0x135e66 = _0x4b695a;
                _0x125fda(this)[_0x135e66(0x1a8)]('_acnf') && (_0x475630 = _0x423be5);
            }), _0x475630;
        }
        async function _0x584edd(_0x2cab5c) {
            const _0x27758e = _0x1a0801;
            if (_0x2cab5c) {
                _0xe8b19a(!![]);
                let _0x4d37a8 = new Date()[_0x27758e(0x2f8)](), _0x542ab7 = Math['floor'](_0x4d37a8 / 0x3e8), _0x90b3ac = location[_0x27758e(0x1bf)][_0x27758e(0x31e)](/(reels|tagged)\/$/ig, '')['split']('/')['filter'](_0x45e0ed => _0x45e0ed[_0x27758e(0x3da)] > 0x0)['at'](-0x1), _0x3915e6 = await _0x311daa(_0x90b3ac);
                try {
                    let _0x1cf62e = await _0x1e5cc8(_0x3915e6['user']['pk']);
                    _0x4e3748(_0x1cf62e, _0x90b3ac, _0x27758e(0x21b), _0x542ab7, _0x27758e(0x1cb));
                } catch (_0x525317) {
                    _0x4e3748(_0x3915e6['user'][_0x27758e(0x199)], _0x90b3ac, _0x27758e(0x21b), _0x542ab7, _0x27758e(0x1cb));
                }
                _0xe8b19a(![]);
            } else {
                if (!_0x125fda(_0x27758e(0x312))[_0x27758e(0x3da)]) {
                    let _0x3c95d1 = setInterval(() => {
                        const _0x1039e5 = _0x27758e;
                        if (_0x125fda(_0x1039e5(0x312))[_0x1039e5(0x3da)]) {
                            clearInterval(_0x3c95d1);
                            return;
                        }
                        _0x125fda('header\x20>\x20*[class]:first-child\x20img[alt][draggable]')['parent']()['parent']()['append'](_0x1039e5(0x18c) + _0x2ec937('DW') + '\x22\x20class=\x22IG_DWPROFILE\x22>' + _0x4a2f85['DOWNLOAD'] + _0x1039e5(0x3b9)), _0x125fda(_0x1039e5(0x249))[_0x1039e5(0x2cb)]()[_0x1039e5(0x2cb)]()[_0x1039e5(0x245)](_0x1039e5(0x3e0), _0x1039e5(0x22e)), _0x125fda(_0x1039e5(0x1d0))['parent']()[_0x1039e5(0x2cb)]()[_0x1039e5(0x2cb)]()[_0x1039e5(0x348)](_0x1039e5(0x18c) + _0x2ec937('DW') + _0x1039e5(0x1ba) + _0x4a2f85[_0x1039e5(0x1e0)] + _0x1039e5(0x3b9)), _0x125fda(_0x1039e5(0x1d0))['parent']()[_0x1039e5(0x2cb)]()[_0x1039e5(0x2cb)]()[_0x1039e5(0x245)]('position', _0x1039e5(0x22e));
                    }, 0x96);
                }
            }
        }
        async function _0x4a0df3(_0x59b37a, _0x2ad27e, _0x30e668) {
            const _0x188ae8 = _0x1a0801;
            if (_0x59b37a) {
                _0xe8b19a(!![]);
                let _0x392857 = location[_0x188ae8(0x19b)]['split']('?')['at'](0x0)['split'](_0x188ae8(0x2f1))['at'](-0x1)[_0x188ae8(0x31e)]('/', ''), _0x1dfb92 = await _0x2cbb2c(_0x392857), _0x1a76e1 = _0x1278b0(_0x1dfb92[_0x188ae8(0x3e7)]), _0x24ab0b = new Date()[_0x188ae8(0x2f8)]();
                _0x5c4373['RENAME_PUBLISH_DATE'] && (_0x1dfb92[_0x188ae8(0x188)] === _0x188ae8(0x200) ? _0x24ab0b = _0x1a76e1['shortcode_media']['taken_at_timestamp'] : _0x24ab0b = _0x1a76e1[_0x188ae8(0x270)]);
                if (_0x1dfb92[_0x188ae8(0x188)] === _0x188ae8(0x200)) {
                    if (_0x2ad27e && _0x1a76e1['shortcode_media'][_0x188ae8(0x3f5)]) {
                        if (_0x30e668)
                            _0x52438f(_0x1a76e1['shortcode_media']['video_url']);
                        else {
                            let _0x36d2a5 = _0x188ae8(0x24e);
                            _0x4e3748(_0x1a76e1[_0x188ae8(0x305)]['video_url'], _0x1a76e1[_0x188ae8(0x305)][_0x188ae8(0x1df)][_0x188ae8(0x226)], _0x188ae8(0x2ed), _0x24ab0b, _0x36d2a5, _0x392857);
                        }
                    } else {
                        if (_0x30e668)
                            _0x52438f(_0x1a76e1['shortcode_media'][_0x188ae8(0x35b)]['at'](-0x1)[_0x188ae8(0x3c0)]);
                        else {
                            let _0x3f0230 = _0x188ae8(0x1cb);
                            _0x4e3748(_0x1a76e1[_0x188ae8(0x305)]['display_resources']['at'](-0x1)[_0x188ae8(0x3c0)], _0x1a76e1[_0x188ae8(0x305)][_0x188ae8(0x1df)]['username'], _0x188ae8(0x2ed), _0x24ab0b, _0x3f0230, _0x392857);
                        }
                    }
                } else {
                    if (_0x2ad27e && _0x1a76e1[_0x188ae8(0x275)] != null) {
                        if (_0x30e668)
                            _0x52438f(_0x1a76e1[_0x188ae8(0x275)][0x0][_0x188ae8(0x33a)]);
                        else {
                            let _0x114bf5 = _0x188ae8(0x24e);
                            _0x4e3748(_0x1a76e1[_0x188ae8(0x275)][0x0][_0x188ae8(0x33a)], _0x1a76e1[_0x188ae8(0x1df)][_0x188ae8(0x226)], _0x188ae8(0x2ed), _0x24ab0b, _0x114bf5, _0x392857);
                        }
                    } else {
                        if (_0x30e668)
                            _0x52438f(_0x1a76e1[_0x188ae8(0x2a3)][_0x188ae8(0x3a9)][0x0][_0x188ae8(0x33a)]);
                        else {
                            let _0x373ed3 = _0x188ae8(0x1cb);
                            _0x4e3748(_0x1a76e1[_0x188ae8(0x2a3)]['candidates'][0x0][_0x188ae8(0x33a)], _0x1a76e1[_0x188ae8(0x1df)]['username'], _0x188ae8(0x2ed), _0x24ab0b, _0x373ed3, _0x392857);
                        }
                    }
                }
                _0xe8b19a(![]);
            } else
                var _0x5db6a5 = setInterval(() => {
                    const _0x5be705 = _0x188ae8;
                    _0x125fda('section\x20>\x20main[role=\x22main\x22]\x20>\x20div\x20div.x1qjc9v5\x20video')[_0x5be705(0x3da)] > 0x0 && (clearInterval(_0x5db6a5), _0x5c4373['SCROLL_BUTTON'] && (_0x125fda(_0x5be705(0x2e2))[_0x5be705(0x298)](), _0x125fda(_0x5be705(0x397))[_0x5be705(0x348)](_0x5be705(0x28e)), _0x125fda(_0x5be705(0x362))[_0x5be705(0x348)]('<div\x20class=\x22button-up\x22><div></div></div>'), _0x125fda(_0x5be705(0x362))['append']('<div\x20class=\x22button-down\x22><div></div></div>'), _0x125fda(_0x5be705(0x35d))['on'](_0x5be705(0x359), function () {
                        const _0x22551e = _0x5be705;
                        _0x125fda('section\x20>\x20main[role=\x22main\x22]\x20>\x20div')[0x0][_0x22551e(0x2bd)]({
                            'top': -0x1e,
                            'behavior': _0x22551e(0x37e)
                        });
                    }), _0x125fda(_0x5be705(0x309))['on'](_0x5be705(0x359), function () {
                        const _0x22a665 = _0x5be705;
                        _0x125fda(_0x22a665(0x2c7))[0x0][_0x22a665(0x2bd)]({
                            'top': 0x1e,
                            'behavior': 'smooth'
                        });
                    })), _0x125fda(_0x5be705(0x289))['children'](_0x5be705(0x3e3))[_0x5be705(0x1d2)](function () {
                        const _0x9baa30 = _0x5be705;
                        if (_0x125fda(this)[_0x9baa30(0x248)]()[_0x9baa30(0x3da)] > 0x0) {
                            if (!_0x125fda(this)['children']()[_0x9baa30(0x310)](_0x9baa30(0x2b6))['length']) {
                                var _0x475646 = _0x125fda(this);
                                _0x125fda(this)['children']()[_0x9baa30(0x245)](_0x9baa30(0x3e0), _0x9baa30(0x22e)), _0x125fda(this)['children']()[_0x9baa30(0x348)](_0x9baa30(0x18c) + _0x2ec937('DW') + _0x9baa30(0x2c6) + _0x4a2f85[_0x9baa30(0x1e0)] + _0x9baa30(0x3b9)), _0x125fda(this)[_0x9baa30(0x248)]()[_0x9baa30(0x348)](_0x9baa30(0x212) + _0x2ec937(_0x9baa30(0x319)) + _0x9baa30(0x217) + _0x4a2f85[_0x9baa30(0x319)] + _0x9baa30(0x3b9)), _0x125fda(this)[_0x9baa30(0x248)]()[_0x9baa30(0x348)](_0x9baa30(0x2dc) + _0x2ec937(_0x9baa30(0x3fa)) + _0x9baa30(0x393) + _0x4a2f85[_0x9baa30(0x2d4)] + _0x9baa30(0x3b9));
                                _0x5c4373[_0x9baa30(0x351)] && _0x125fda(this)[_0x9baa30(0x310)]('video')['each'](function () {
                                    _0x125fda(this)['on']('ended', function () {
                                        const _0x589b12 = a0_0x37c6;
                                        if (!_0x125fda(this)['data'](_0x589b12(0x1af))) {
                                            let _0x28eade = _0x125fda(this)['next']()[_0x589b12(0x310)](_0x589b12(0x390))[_0x589b12(0x258)](_0x589b12(0x1fa));
                                            _0x28eade['length'] > 0x0 ? (_0x125fda(this)[_0x589b12(0x223)](_0x589b12(0x2c4), !![]), _0x28eade[_0x589b12(0x306)](_0x589b12(0x359)), _0x1e3ab9(_0x589b12(0x354))) : (_0x125fda(this)[_0x589b12(0x223)](_0x589b12(0x2c4), !![]), _0x125fda(this)[_0x589b12(0x2cb)]()[_0x589b12(0x310)](_0x589b12(0x32f))['removeAttr'](_0x589b12(0x1f6)), this[_0x589b12(0x342)](), _0x1e3ab9(_0x589b12(0x30f)));
                                        }
                                    });
                                });
                                _0x5c4373[_0x9baa30(0x20d)] && _0x125fda(this)[_0x9baa30(0x310)]('video')[_0x9baa30(0x1d2)](function () {
                                    const _0x3e3396 = _0x9baa30;
                                    if (!_0x125fda(this)[_0x3e3396(0x3e7)](_0x3e3396(0x389))) {
                                        let _0xb17243 = _0x125fda(this);
                                        _0x1e3ab9(_0x3e3396(0x364)), _0x5c4373['MODIFY_VIDEO_VOLUME'] && (this[_0x3e3396(0x2fe)] = _0x112684[_0x3e3396(0x250)], _0x125fda(this)['on'](_0x3e3396(0x369), function () {
                                            const _0x907448 = _0x3e3396;
                                            this[_0x907448(0x2fe)] = _0x112684[_0x907448(0x250)];
                                        })), _0x125fda(this)['on'](_0x3e3396(0x211), function (_0x22be05) {
                                            const _0x305eee = _0x3e3396;
                                            _0x22be05['preventDefault'](), _0xb17243['css'](_0x305eee(0x21c), '-1'), _0xb17243[_0x305eee(0x386)](_0x305eee(0x389));
                                        }), _0x125fda(this)[_0x3e3396(0x2cb)]()[_0x3e3396(0x310)]('video\x20+\x20div\x20div[role=\x22button\x22]')[_0x3e3396(0x1b7)](function () {
                                            const _0x424a44 = _0x3e3396;
                                            return _0x125fda(this)[_0x424a44(0x2cb)](_0x424a44(0x2c5))[_0x424a44(0x3da)] > 0x0 && _0x125fda(this)[_0x424a44(0x245)](_0x424a44(0x38d)) === _0x424a44(0x26b) && _0x125fda(this)[_0x424a44(0x223)](_0x424a44(0x1f6)) != null;
                                        })['first']()['on'](_0x3e3396(0x211), function (_0x34542b) {
                                            const _0x246085 = _0x3e3396;
                                            _0x34542b[_0x246085(0x3bb)](), _0xb17243[_0x246085(0x245)](_0x246085(0x21c), '2'), _0xb17243[_0x246085(0x223)]('controls', !![]);
                                        }), _0x125fda(this)['on'](_0x3e3396(0x1bb), function () {
                                            const _0x52fa5d = _0x3e3396;
                                            let _0x270124 = _0x125fda(this)[_0x52fa5d(0x2cb)]()[_0x52fa5d(0x310)](_0x52fa5d(0x24c))[_0x52fa5d(0x310)](_0x52fa5d(0x388))[_0x52fa5d(0x1b7)](function (_0x542a89) {
                                                const _0x3c8564 = _0x52fa5d;
                                                return _0x125fda(this)['width']() <= 0x40 && _0x125fda(this)[_0x3c8564(0x23f)]() <= 0x40 && _0x125fda(this)['find'](_0x3c8564(0x21a))['length'] > 0x0;
                                            });
                                            var _0xd27678 = _0x270124[_0x52fa5d(0x310)](_0x52fa5d(0x1e5))['length'] === 0x0;
                                            this[_0x52fa5d(0x21e)] != _0xd27678 && (this[_0x52fa5d(0x2fe)] = _0x112684[_0x52fa5d(0x250)], _0x270124?.[_0x52fa5d(0x306)](_0x52fa5d(0x359))), _0x125fda(this)[_0x52fa5d(0x223)](_0x52fa5d(0x2c3)) && (_0x112684['videoVolume'] = this[_0x52fa5d(0x2fe)], GM_setValue(_0x52fa5d(0x196), this['volume'])), this['volume'] == _0x112684[_0x52fa5d(0x250)] && _0x125fda(this)[_0x52fa5d(0x223)](_0x52fa5d(0x2c3), !![]);
                                        }), _0x125fda(this)[_0x3e3396(0x245)]('position', _0x3e3396(0x2b7)), _0x125fda(this)['css']('z-index', '2'), _0x125fda(this)[_0x3e3396(0x223)]('data-controls', !![]), _0x125fda(this)[_0x3e3396(0x223)]('controls', !![]);
                                    }
                                });
                                var _0x5723f8 = _0x475646[_0x9baa30(0x310)](_0x9baa30(0x1b1)), _0x308294 = _0x125fda(this)[_0x9baa30(0x310)](_0x9baa30(0x1f4))[_0x9baa30(0x2af)]();
                                _0x10d9c8(_0x5723f8, _0x308294, 'reel');
                            }
                        }
                    }));
                }, 0xfa);
        }
        async function _0x2f72ac() {
            const _0x7b3748 = _0x1a0801;
            _0xe8b19a(!![]);
            let _0x497d33 = new Date()['getTime'](), _0x42f3a0 = Math[_0x7b3748(0x281)](_0x497d33 / 0x3e8), _0x57a82c = _0x125fda(_0x7b3748(0x326))[_0x7b3748(0x2af)]()[_0x7b3748(0x323)]() || location[_0x7b3748(0x1bf)][_0x7b3748(0x3fc)]('/')[_0x7b3748(0x1b7)](_0x3a1042 => _0x3a1042[_0x7b3748(0x3da)] > 0x0)['at'](0x1), _0x576973 = await _0x311daa(_0x57a82c), _0x16749e = _0x576973['user']['pk'], _0xbb9d84 = await _0x45c110(_0x16749e), _0x1ca6fc = 0x0;
            _0x48dc10(_0x1ca6fc, _0xbb9d84[_0x7b3748(0x3e7)]['reels_media'][0x0][_0x7b3748(0x18b)][_0x7b3748(0x3da)]), _0xbb9d84[_0x7b3748(0x3e7)][_0x7b3748(0x3b1)][0x0][_0x7b3748(0x18b)][_0x7b3748(0x29c)]((_0x5d7bea, _0x8f171b) => {
                setTimeout(() => {
                    const _0x444315 = a0_0x37c6;
                    _0x5c4373[_0x444315(0x3c7)] && (_0x42f3a0 = _0x5d7bea[_0x444315(0x379)]), _0x5d7bea[_0x444315(0x35b)][_0x444315(0x26a)](function (_0x49a9d1, _0x52da51) {
                        const _0x2b2428 = _0x444315;
                        if (_0x49a9d1[_0x2b2428(0x1dd)] < _0x52da51[_0x2b2428(0x1dd)])
                            return 0x1;
                        if (_0x49a9d1[_0x2b2428(0x1dd)] > _0x52da51[_0x2b2428(0x1dd)])
                            return -0x1;
                        return 0x0;
                    }), _0x5d7bea[_0x444315(0x3f5)] ? _0x4e3748(_0x5d7bea[_0x444315(0x307)][0x0][_0x444315(0x3c0)], _0x57a82c, _0x444315(0x33e), _0x42f3a0, _0x444315(0x24e), _0x5d7bea['id'])[_0x444315(0x1db)](() => {
                        const _0x1de4ca = _0x444315;
                        _0x48dc10(++_0x1ca6fc, _0xbb9d84[_0x1de4ca(0x3e7)][_0x1de4ca(0x3b1)][0x0]['items']['length']);
                    }) : _0x4e3748(_0x5d7bea[_0x444315(0x35b)][0x0][_0x444315(0x3c0)], _0x57a82c, _0x444315(0x33e), _0x42f3a0, _0x444315(0x1cb), _0x5d7bea['id'])['then'](() => {
                        const _0x159d6f = _0x444315;
                        _0x48dc10(++_0x1ca6fc, _0xbb9d84[_0x159d6f(0x3e7)][_0x159d6f(0x3b1)][0x0]['items'][_0x159d6f(0x3da)]);
                    });
                }, 0x64 * _0x8f171b);
            });
        }
        async function _0x491c4b(_0x4d5195, _0x38c2a0, _0x36ab2a) {
            const _0x10203b = _0x1a0801;
            var _0x554373 = _0x125fda(_0x10203b(0x326))[_0x10203b(0x2af)]()[_0x10203b(0x323)]() || location[_0x10203b(0x1bf)]['split']('/')[_0x10203b(0x1b7)](_0x3fe3c0 => _0x3fe3c0[_0x10203b(0x3da)] > 0x0)['at'](0x1);
            if (_0x4d5195) {
                let _0x228cd5 = new Date()[_0x10203b(0x2f8)](), _0x5e0fb0 = Math[_0x10203b(0x281)](_0x228cd5 / 0x3e8);
                _0xe8b19a(!![]);
                if (_0x5c4373[_0x10203b(0x2bc)] && !_0x112684[_0x10203b(0x1a7)]) {
                    let _0x3dafea = null, _0x22c5c3 = await _0x311daa(_0x554373), _0x2f6445 = _0x22c5c3[_0x10203b(0x3b3)]['pk'], _0x4a4b0c = await _0x45c110(_0x2f6445), _0x2b7849 = location[_0x10203b(0x1bf)][_0x10203b(0x3fc)]('/')['filter'](_0x33cb63 => _0x33cb63[_0x10203b(0x3da)] > 0x0 && _0x33cb63[_0x10203b(0x1a0)](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x4a4b0c['data'][_0x10203b(0x3b1)][0x0][_0x10203b(0x18b)][_0x10203b(0x29c)](_0x3919a2 => {
                        _0x3919a2['id'] == _0x2b7849 && (_0x3dafea = _0x3919a2['id']);
                    });
                    if (_0x3dafea == null) {
                        let _0x5e88cd = _0x4df6f7(_0x554373);
                        _0x5e88cd[_0x10203b(0x1d2)](function (_0x133493) {
                            const _0x47a61a = _0x10203b;
                            _0x125fda(this)[_0x47a61a(0x248)]()[_0x47a61a(0x3da)] > 0x0 && (_0x3dafea = _0x4a4b0c[_0x47a61a(0x3e7)][_0x47a61a(0x3b1)][0x0][_0x47a61a(0x18b)][_0x133493]['id']);
                        });
                    }
                    _0x3dafea == null && (_0x125fda('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x10203b(0x1d2)](function (_0x1e8a63) {
                        const _0x83f6c1 = _0x10203b;
                        _0x125fda(this)[_0x83f6c1(0x1a8)](_0x83f6c1(0x3f3)) && (_0x125fda(this)[_0x83f6c1(0x248)]()['length'] > 0x0 && (_0x3dafea = _0x4a4b0c[_0x83f6c1(0x3e7)][_0x83f6c1(0x3b1)][0x0][_0x83f6c1(0x18b)][_0x1e8a63]['id']));
                    }), _0x125fda(_0x10203b(0x385))[_0x10203b(0x1d2)](function (_0x3044e4) {
                        const _0x4cbe40 = _0x10203b;
                        _0x125fda(this)[_0x4cbe40(0x248)]()[_0x4cbe40(0x1a8)](_0x4cbe40(0x20b)) && (_0x3dafea = _0x4a4b0c[_0x4cbe40(0x3e7)]['reels_media'][0x0][_0x4cbe40(0x18b)][_0x3044e4]['id']);
                    }));
                    _0x3dafea == null && (_0x3dafea = location[_0x10203b(0x1bf)][_0x10203b(0x3fc)]('/')[_0x10203b(0x1b7)](_0x5b141c => _0x5b141c[_0x10203b(0x3da)] > 0x0 && _0x5b141c[_0x10203b(0x1a0)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x3d4385 = await _0x41da06(_0x3dafea);
                    _0x5c4373[_0x10203b(0x3c7)] && (_0x5e0fb0 = _0x3d4385[_0x10203b(0x18b)][0x0][_0x10203b(0x270)]);
                    _0x3d4385[_0x10203b(0x375)] === 'ok' ? _0x3d4385[_0x10203b(0x18b)][0x0]['video_versions'] ? _0x36ab2a ? _0x52438f(_0x3d4385[_0x10203b(0x18b)][0x0][_0x10203b(0x275)][0x0][_0x10203b(0x33a)]) : _0x4e3748(_0x3d4385[_0x10203b(0x18b)][0x0][_0x10203b(0x275)][0x0][_0x10203b(0x33a)], _0x554373, _0x10203b(0x33e), _0x5e0fb0, 'mp4', _0x3dafea) : _0x36ab2a ? _0x52438f(_0x3d4385['items'][0x0][_0x10203b(0x2a3)][_0x10203b(0x3a9)][0x0]['url']) : _0x4e3748(_0x3d4385[_0x10203b(0x18b)][0x0][_0x10203b(0x2a3)][_0x10203b(0x3a9)][0x0][_0x10203b(0x33a)], _0x554373, _0x10203b(0x33e), _0x5e0fb0, _0x10203b(0x1cb), _0x3dafea) : (_0x5c4373[_0x10203b(0x3b2)] ? (_0x112684['tempFetchRateLimit'] = !![], _0x491c4b(_0x4d5195, _0x38c2a0, _0x36ab2a)) : alert(_0x10203b(0x18e) + _0x3d4385[_0x10203b(0x33b)]), _0x1e3ab9(_0x3d4385));
                    _0xe8b19a(![]);
                    return;
                }
                if (_0x125fda(_0x10203b(0x2d6))[_0x10203b(0x3da)] > 0x0) {
                    let _0x14da64 = 'mp4', _0x69b19a = '', _0x3ce033 = location[_0x10203b(0x1bf)][_0x10203b(0x2a2)](/\/$/ig, '')[_0x10203b(0x3fc)]('/')['at'](-0x1), _0x37efd3 = null;
                    if (_0x112684['GL_dataCache'][_0x10203b(0x33e)][_0x554373] && !_0x38c2a0) {
                        _0x1e3ab9(_0x10203b(0x370), _0x554373), _0x112684[_0x10203b(0x3c8)][_0x10203b(0x33e)][_0x554373][_0x10203b(0x3e7)]['reels_media'][0x0][_0x10203b(0x18b)][_0x10203b(0x29c)](_0x171472 => {
                            const _0x418d3e = _0x10203b;
                            _0x171472['id'] == _0x3ce033 && (_0x69b19a = _0x171472[_0x418d3e(0x307)][0x0]['src'], _0x5c4373['RENAME_PUBLISH_DATE'] && (_0x5e0fb0 = _0x171472[_0x418d3e(0x379)], _0x37efd3 = _0x171472['id']));
                        });
                        if (_0x69b19a[_0x10203b(0x3da)] == 0x0) {
                            _0x1e3ab9(_0x10203b(0x293), _0x554373), _0x491c4b(!![], !![]);
                            return;
                        }
                    } else {
                        let _0x3f75f1 = await _0x311daa(_0x554373), _0x264efd = _0x3f75f1['user']['pk'], _0x1e1bc1 = await _0x45c110(_0x264efd);
                        _0x1e1bc1['data'][_0x10203b(0x3b1)][0x0][_0x10203b(0x18b)][_0x10203b(0x29c)](_0x150534 => {
                            const _0x5c7a81 = _0x10203b;
                            _0x150534['id'] == _0x3ce033 && (_0x69b19a = _0x150534[_0x5c7a81(0x307)][0x0][_0x5c7a81(0x3c0)], _0x5c4373[_0x5c7a81(0x3c7)] && (_0x5e0fb0 = _0x150534[_0x5c7a81(0x379)], _0x37efd3 = _0x150534['id']));
                        });
                        if (_0x69b19a[_0x10203b(0x3da)] == 0x0) {
                            let _0x4668be = _0x4df6f7(_0x554373);
                            _0x4668be[_0x10203b(0x1d2)](function (_0x2bfe94) {
                                const _0x3a076b = _0x10203b;
                                _0x125fda(this)['children']()[_0x3a076b(0x3da)] > 0x0 && (_0x69b19a = _0x1e1bc1['data']['reels_media'][0x0][_0x3a076b(0x18b)][_0x2bfe94][_0x3a076b(0x307)][0x0][_0x3a076b(0x3c0)], _0x5c4373[_0x3a076b(0x3c7)] && (_0x5e0fb0 = _0x1e1bc1[_0x3a076b(0x3e7)]['reels_media'][0x0][_0x3a076b(0x18b)][_0x2bfe94][_0x3a076b(0x379)], _0x37efd3 = _0x1e1bc1[_0x3a076b(0x3e7)][_0x3a076b(0x3b1)][0x0]['items'][_0x2bfe94]['id']));
                            }), _0x69b19a[_0x10203b(0x3da)] == 0x0 && (_0x125fda(_0x10203b(0x30b))[_0x10203b(0x1d2)](function (_0x416b40) {
                                const _0x1d0b8c = _0x10203b;
                                _0x125fda(this)[_0x1d0b8c(0x1a8)](_0x1d0b8c(0x3f3)) && (_0x125fda(this)[_0x1d0b8c(0x248)]()[_0x1d0b8c(0x3da)] > 0x0 && (_0x69b19a = _0x1e1bc1['data'][_0x1d0b8c(0x3b1)][0x0][_0x1d0b8c(0x18b)][_0x416b40]['video_resources'][0x0][_0x1d0b8c(0x3c0)], _0x5c4373[_0x1d0b8c(0x3c7)] && (_0x5e0fb0 = _0x1e1bc1['data'][_0x1d0b8c(0x3b1)][0x0][_0x1d0b8c(0x18b)][_0x416b40]['taken_at_timestamp'], _0x37efd3 = _0x1e1bc1[_0x1d0b8c(0x3e7)]['reels_media'][0x0][_0x1d0b8c(0x18b)][_0x416b40]['id'])));
                            }), _0x125fda('body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div')['each'](function (_0x52d8ae) {
                                const _0x168497 = _0x10203b;
                                _0x125fda(this)[_0x168497(0x248)]()[_0x168497(0x1a8)](_0x168497(0x20b)) && (_0x69b19a = _0x1e1bc1[_0x168497(0x3e7)]['reels_media'][0x0][_0x168497(0x18b)][_0x52d8ae][_0x168497(0x307)][0x0][_0x168497(0x3c0)], _0x5c4373['RENAME_PUBLISH_DATE'] && (_0x5e0fb0 = _0x1e1bc1[_0x168497(0x3e7)][_0x168497(0x3b1)][0x0][_0x168497(0x18b)][_0x52d8ae][_0x168497(0x379)], _0x37efd3 = _0x1e1bc1['data'][_0x168497(0x3b1)][0x0][_0x168497(0x18b)][_0x52d8ae]['id']));
                            }));
                        }
                        _0x112684['GL_dataCache']['stories'][_0x554373] = _0x1e1bc1;
                    }
                    _0x69b19a['length'] == 0x0 ? alert(_0x2ec937('NO_VID_URL')) : _0x36ab2a ? _0x52438f(_0x69b19a) : _0x4e3748(_0x69b19a, _0x554373, _0x10203b(0x33e), _0x5e0fb0, _0x14da64, _0x37efd3);
                } else {
                    let _0x1be452 = _0x125fda(_0x10203b(0x3c4))[_0x10203b(0x223)](_0x10203b(0x380))?.['split'](',')[0x0]?.[_0x10203b(0x3fc)]('\x20')[0x0], _0x281a8f = _0x1be452 ? _0x1be452 : _0x125fda('body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])')[_0x10203b(0x1b7)](function () {
                            const _0x5cebfe = _0x10203b;
                            return _0x125fda(this)['parents']('a')[_0x5cebfe(0x3da)] === 0x0 && _0x125fda(this)[_0x5cebfe(0x252)]() === _0x125fda(this)[_0x5cebfe(0x2cb)]()[_0x5cebfe(0x252)]();
                        })[_0x10203b(0x223)]('src');
                    if (!_0x281a8f) {
                        let _0x59bf6d = _0x125fda(_0x10203b(0x26d));
                        _0x281a8f = _0x59bf6d[_0x10203b(0x223)]('srcset') ? _0x59bf6d[_0x10203b(0x223)](_0x10203b(0x380))?.[_0x10203b(0x3fc)](',')[0x0]?.[_0x10203b(0x3fc)]('\x20')[0x0] : _0x59bf6d[_0x10203b(0x223)]('src');
                    }
                    _0x5c4373[_0x10203b(0x3c7)] && (_0x5e0fb0 = new Date(_0x125fda(_0x10203b(0x3cd))[_0x10203b(0x2af)]()[_0x10203b(0x223)](_0x10203b(0x30e)))[_0x10203b(0x2f8)]());
                    let _0x4aa894 = _0x281a8f, _0x1677ae = _0x10203b(0x1cb);
                    _0x36ab2a ? _0x52438f(_0x4aa894) : _0x4e3748(_0x4aa894, _0x554373, _0x10203b(0x33e), _0x5e0fb0, _0x1677ae, _0x34c804(_0x4aa894) ?? '');
                }
                _0x112684['tempFetchRateLimit'] = ![], _0xe8b19a(![]);
            } else {
                if (!_0x125fda(_0x10203b(0x27f))[_0x10203b(0x3da)]) {
                    _0x112684[_0x10203b(0x3c8)]['stories'] = {};
                    let _0x54d1f7 = null;
                    _0x125fda(_0x10203b(0x3f0))[_0x10203b(0x3da)] > 0x0 ? _0x54d1f7 = _0x125fda(_0x10203b(0x2e5)) : (_0x54d1f7 = _0x125fda(_0x10203b(0x302)), _0x54d1f7['css'](_0x10203b(0x3e0), 'relative'));
                    _0x54d1f7['length'] === 0x0 && (_0x54d1f7 = _0x125fda(_0x10203b(0x178))[_0x10203b(0x2cb)]()[_0x10203b(0x2cb)]()[_0x10203b(0x2cb)]()['find'](_0x10203b(0x1c1)), _0x54d1f7[_0x10203b(0x245)](_0x10203b(0x3e0), _0x10203b(0x22e)));
                    _0x54d1f7[_0x10203b(0x3da)] === 0x0 && (_0x54d1f7 = _0x125fda(_0x10203b(0x178))[_0x10203b(0x2cb)]()['parent']()[_0x10203b(0x2cb)]()['find'](_0x10203b(0x24d)), _0x54d1f7[_0x10203b(0x245)](_0x10203b(0x3e0), _0x10203b(0x22e)));
                    if (_0x54d1f7[_0x10203b(0x3da)] === 0x0) {
                        let _0x14efe5 = _0x125fda('body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])'), _0x2a1ea2 = 0x0;
                        _0x14efe5[_0x10203b(0x1d2)](function () {
                            const _0x4de980 = _0x10203b;
                            _0x125fda(this)['width']() > _0x2a1ea2 && (_0x2a1ea2 = _0x125fda(this)[_0x4de980(0x252)](), _0x54d1f7 = _0x125fda(this)['children'](_0x4de980(0x3e3))[_0x4de980(0x2af)]());
                        });
                    }
                    if (_0x54d1f7 != null) {
                        _0x54d1f7['first']()[_0x10203b(0x245)]('position', 'relative'), _0x54d1f7[_0x10203b(0x2af)]()[_0x10203b(0x348)](_0x10203b(0x18c) + _0x2ec937('DW') + _0x10203b(0x221) + _0x4a2f85['DOWNLOAD'] + '</div>'), _0x54d1f7[_0x10203b(0x2af)]()[_0x10203b(0x348)](_0x10203b(0x212) + _0x2ec937(_0x10203b(0x319)) + _0x10203b(0x17b) + _0x4a2f85[_0x10203b(0x319)] + _0x10203b(0x3b9));
                        let _0x169c7b = _0x4df6f7(_0x554373);
                        _0x169c7b['length'] > 0x1 && _0x54d1f7[_0x10203b(0x2af)]()[_0x10203b(0x348)](_0x10203b(0x295) + _0x2ec937(_0x10203b(0x1bc)) + _0x10203b(0x381) + _0x4a2f85[_0x10203b(0x320)] + _0x10203b(0x3b9)), _0x54d1f7[_0x10203b(0x310)](_0x10203b(0x374))[_0x10203b(0x1d2)](function () {
                            const _0x2f3307 = _0x10203b;
                            _0x125fda(this)['on'](_0x2f3307(0x396), function () {
                                const _0x17b36a = _0x2f3307;
                                !_0x125fda(this)[_0x17b36a(0x3e7)](_0x17b36a(0x1e2)) && (_0x54d1f7['find'](_0x17b36a(0x3fd))[_0x17b36a(0x3da)] === 0x0 ? (_0x125fda(this)[_0x17b36a(0x223)]('data-remove-thumbnail', !![]), _0x125fda('.IG_DWSTORY_THUMBNAIL')[_0x17b36a(0x298)](), _0x1e3ab9(_0x17b36a(0x391))) : (_0x125fda(this)[_0x17b36a(0x223)]('data-remove-thumbnail', !![]), _0x1e3ab9(_0x17b36a(0x37a))));
                            });
                        });
                    }
                }
            }
        }
        async function _0x5f3eb9(_0x5aef91, _0x4ddd97) {
            const _0x23b107 = _0x1a0801;
            if (_0x5aef91) {
                let _0x3af3be = new Date()[_0x23b107(0x2f8)](), _0x1fc017 = Math[_0x23b107(0x281)](_0x3af3be / 0x3e8), _0x4e8f5f = _0x23b107(0x1cb), _0x58a4ad = _0x125fda(_0x23b107(0x326))[_0x23b107(0x2af)]()[_0x23b107(0x323)]() || location[_0x23b107(0x1bf)][_0x23b107(0x3fc)]('/')['at'](0x2), _0x1523f7 = location[_0x23b107(0x1bf)][_0x23b107(0x2a2)](/\/$/ig, '')['split']('/')['at'](-0x1), _0x3ba5ec = '', _0x4a5c32 = null;
                _0xe8b19a(!![]);
                if (_0x5c4373['FORCE_RESOURCE_VIA_MEDIA'] && !_0x112684[_0x23b107(0x1a7)]) {
                    let _0xeaac7e = await _0x311daa(_0x58a4ad), _0x55f078 = _0xeaac7e[_0x23b107(0x3b3)]['pk'], _0x1effca = await _0x45c110(_0x55f078), _0x303716 = location[_0x23b107(0x1bf)][_0x23b107(0x3fc)]('/')[_0x23b107(0x1b7)](_0xed4415 => _0xed4415[_0x23b107(0x3da)] > 0x0 && _0xed4415['match'](/^([0-9]{10,})$/))['at'](-0x1);
                    _0x1effca[_0x23b107(0x3e7)][_0x23b107(0x3b1)][0x0][_0x23b107(0x18b)][_0x23b107(0x29c)](_0x70036 => {
                        _0x70036['id'] == _0x303716 && (_0x4a5c32 = _0x70036['id']);
                    });
                    if (_0x4a5c32 == null) {
                        let _0x241498 = _0x4df6f7(_0x58a4ad);
                        _0x241498[_0x23b107(0x1d2)](function (_0x453a7f) {
                            const _0x2c95a2 = _0x23b107;
                            _0x125fda(this)[_0x2c95a2(0x248)]()[_0x2c95a2(0x3da)] > 0x0 && (_0x4a5c32 = _0x1effca[_0x2c95a2(0x3e7)]['reels_media'][0x0][_0x2c95a2(0x18b)][_0x453a7f]['id']);
                        });
                    }
                    _0x4a5c32 == null && (_0x125fda('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x23b107(0x1d2)](function (_0x49c4c2) {
                        const _0x74cdd1 = _0x23b107;
                        _0x125fda(this)[_0x74cdd1(0x1a8)](_0x74cdd1(0x3f3)) && (_0x125fda(this)[_0x74cdd1(0x248)]()[_0x74cdd1(0x3da)] > 0x0 && (_0x4a5c32 = _0x1effca[_0x74cdd1(0x3e7)][_0x74cdd1(0x3b1)][0x0][_0x74cdd1(0x18b)][_0x49c4c2]['id']));
                    }), _0x125fda(_0x23b107(0x385))[_0x23b107(0x1d2)](function (_0x4c3888) {
                        const _0x318a23 = _0x23b107;
                        _0x125fda(this)['children']()[_0x318a23(0x1a8)]('_ac3q') && (_0x4a5c32 = _0x1effca[_0x318a23(0x3e7)][_0x318a23(0x3b1)][0x0][_0x318a23(0x18b)][_0x4c3888]['id']);
                    }));
                    _0x4a5c32 == null && (_0x4a5c32 = location['pathname'][_0x23b107(0x3fc)]('/')['filter'](_0x52c40e => _0x52c40e[_0x23b107(0x3da)] > 0x0 && _0x52c40e[_0x23b107(0x1a0)](/^([0-9]{10,})$/))['at'](-0x1));
                    let _0x5e32a0 = await _0x41da06(_0x4a5c32);
                    _0x5c4373[_0x23b107(0x3c7)] && (_0x1fc017 = _0x5e32a0[_0x23b107(0x18b)][0x0][_0x23b107(0x270)]);
                    _0x5e32a0[_0x23b107(0x375)] === 'ok' ? _0x4e3748(_0x5e32a0['items'][0x0]['image_versions2']['candidates'][0x0][_0x23b107(0x33a)], _0x58a4ad, _0x23b107(0x33e), _0x1fc017, _0x23b107(0x1cb), _0x4a5c32) : (_0x5c4373[_0x23b107(0x3b2)] ? (_0x112684[_0x23b107(0x1a7)] = !![], _0x5f3eb9(!![], _0x4ddd97)) : alert(_0x23b107(0x18e) + _0x5e32a0['message']), _0x1e3ab9(_0x5e32a0));
                    _0xe8b19a(![]);
                    return;
                }
                if (_0x112684[_0x23b107(0x3c8)][_0x23b107(0x33e)][_0x58a4ad] && !_0x4ddd97) {
                    _0x1e3ab9('Fetch\x20from\x20memory\x20cache:', _0x58a4ad), _0x112684['GL_dataCache']['stories'][_0x58a4ad][_0x23b107(0x3e7)][_0x23b107(0x3b1)][0x0][_0x23b107(0x18b)][_0x23b107(0x29c)](_0x2c6270 => {
                        const _0x5f49b0 = _0x23b107;
                        _0x2c6270['id'] == _0x1523f7 && (_0x3ba5ec = _0x2c6270[_0x5f49b0(0x189)], _0x5c4373[_0x5f49b0(0x3c7)] && (_0x1fc017 = _0x2c6270[_0x5f49b0(0x379)], _0x4a5c32 = _0x2c6270['id']));
                    });
                    if (_0x3ba5ec['length'] == 0x0) {
                        _0x1e3ab9(_0x23b107(0x293), _0x58a4ad), _0x5f3eb9(!![], !![]);
                        return;
                    }
                } else {
                    let _0x1846b5 = await _0x311daa(_0x58a4ad), _0x229848 = _0x1846b5[_0x23b107(0x3b3)]['pk'], _0x387d52 = await _0x45c110(_0x229848);
                    _0x387d52[_0x23b107(0x3e7)][_0x23b107(0x3b1)][0x0]['items'][_0x23b107(0x29c)](_0x2107da => {
                        const _0xe5447b = _0x23b107;
                        _0x2107da['id'] == _0x1523f7 && (_0x3ba5ec = _0x2107da['display_url'], _0x5c4373['RENAME_PUBLISH_DATE'] && (_0x1fc017 = _0x2107da[_0xe5447b(0x379)], _0x4a5c32 = _0x2107da['id']));
                    });
                    if (_0x3ba5ec[_0x23b107(0x3da)] == 0x0) {
                        let _0xc128a9 = _0x4df6f7(_0x58a4ad);
                        _0xc128a9[_0x23b107(0x1d2)](function (_0x8ac396) {
                            const _0x1aec34 = _0x23b107;
                            _0x125fda(this)[_0x1aec34(0x248)]()[_0x1aec34(0x3da)] > 0x0 && (_0x3ba5ec = _0x387d52[_0x1aec34(0x3e7)][_0x1aec34(0x3b1)][0x0][_0x1aec34(0x18b)][_0x8ac396]['display_url'], _0x5c4373[_0x1aec34(0x3c7)] && (_0x1fc017 = _0x387d52[_0x1aec34(0x3e7)][_0x1aec34(0x3b1)][0x0][_0x1aec34(0x18b)][_0x8ac396]['taken_at_timestamp'], _0x4a5c32 = _0x387d52[_0x1aec34(0x3e7)][_0x1aec34(0x3b1)][0x0]['items'][_0x8ac396]['id']));
                        }), _0x3ba5ec['length'] == 0x0 && (_0x125fda('body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div')[_0x23b107(0x1d2)](function (_0x3c3de9) {
                            const _0x23e7e7 = _0x23b107;
                            _0x125fda(this)[_0x23e7e7(0x1a8)](_0x23e7e7(0x3f3)) && (_0x125fda(this)['children']()[_0x23e7e7(0x3da)] > 0x0 && (_0x3ba5ec = _0x387d52[_0x23e7e7(0x3e7)]['reels_media'][0x0][_0x23e7e7(0x18b)][_0x3c3de9]['display_url'], _0x5c4373['RENAME_PUBLISH_DATE'] && (_0x1fc017 = _0x387d52['data'][_0x23e7e7(0x3b1)][0x0][_0x23e7e7(0x18b)][_0x3c3de9][_0x23e7e7(0x379)], _0x4a5c32 = _0x387d52[_0x23e7e7(0x3e7)][_0x23e7e7(0x3b1)][0x0]['items'][_0x3c3de9]['id'])));
                        }), _0x125fda(_0x23b107(0x385))[_0x23b107(0x1d2)](function (_0x3bdb2d) {
                            const _0x3a306f = _0x23b107;
                            _0x125fda(this)[_0x3a306f(0x248)]()[_0x3a306f(0x1a8)]('_ac3q') && (_0x3ba5ec = _0x387d52[_0x3a306f(0x3e7)][_0x3a306f(0x3b1)][0x0][_0x3a306f(0x18b)][_0x3bdb2d]['display_url'], _0x5c4373[_0x3a306f(0x3c7)] && (_0x1fc017 = _0x387d52['data'][_0x3a306f(0x3b1)][0x0][_0x3a306f(0x18b)][_0x3bdb2d][_0x3a306f(0x379)], _0x4a5c32 = _0x387d52[_0x3a306f(0x3e7)]['reels_media'][0x0][_0x3a306f(0x18b)][_0x3bdb2d]['id']));
                        }));
                    }
                }
                _0x4e3748(_0x3ba5ec, _0x58a4ad, _0x23b107(0x39c), _0x1fc017, _0x4e8f5f, _0x4a5c32), _0x112684[_0x23b107(0x1a7)] = ![], _0xe8b19a(![]);
            } else {
                if (_0x125fda(_0x23b107(0x2ca))[_0x23b107(0x2cb)]()[_0x23b107(0x310)]('video[class]')[_0x23b107(0x3da)]) {
                    let _0x3c81b0 = null;
                    _0x125fda(_0x23b107(0x3f0))[_0x23b107(0x3da)] > 0x0 ? _0x3c81b0 = _0x125fda(_0x23b107(0x2e5)) : (_0x3c81b0 = _0x125fda(_0x23b107(0x302)), _0x3c81b0['css']('position', _0x23b107(0x22e)));
                    _0x3c81b0[_0x23b107(0x3da)] === 0x0 && (_0x3c81b0 = _0x125fda(_0x23b107(0x178))[_0x23b107(0x2cb)]()['parent']()['parent']()[_0x23b107(0x310)](_0x23b107(0x1c1)), _0x3c81b0[_0x23b107(0x245)]('position', _0x23b107(0x22e)));
                    _0x3c81b0['length'] === 0x0 && (_0x3c81b0 = _0x125fda('div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]')[_0x23b107(0x2cb)]()[_0x23b107(0x2cb)]()[_0x23b107(0x2cb)]()[_0x23b107(0x310)](_0x23b107(0x24d)), _0x3c81b0['css'](_0x23b107(0x3e0), _0x23b107(0x22e)));
                    if (_0x3c81b0['length'] === 0x0) {
                        let _0x4347aa = _0x125fda(_0x23b107(0x37b)), _0x3051e6 = 0x0;
                        _0x4347aa[_0x23b107(0x1d2)](function () {
                            const _0x4b8607 = _0x23b107;
                            _0x125fda(this)[_0x4b8607(0x252)]() > _0x3051e6 && (_0x3051e6 = _0x125fda(this)[_0x4b8607(0x252)](), _0x3c81b0 = _0x125fda(this)['children']('div')[_0x4b8607(0x2af)]());
                        });
                    }
                    _0x3c81b0 != null && (_0x3c81b0[_0x23b107(0x2af)]()['css'](_0x23b107(0x3e0), _0x23b107(0x22e)), _0x3c81b0[_0x23b107(0x2af)]()['append'](_0x23b107(0x2dc) + _0x2ec937(_0x23b107(0x3fa)) + '\x22\x20class=\x22IG_DWSTORY_THUMBNAIL\x22>' + _0x4a2f85[_0x23b107(0x2d4)] + _0x23b107(0x3b9)));
                }
            }
        }
        function _0x294467(_0xa6dc67) {
            return new Promise((_0x56bccf, _0x2f19f2) => {
                const _0x2433e3 = a0_0x37c6;
                let _0x4b1b0c = _0x2433e3(0x1c3) + _0xa6dc67 + _0x2433e3(0x197);
                GM_xmlhttpRequest({
                    'method': _0x2433e3(0x26e),
                    'url': _0x4b1b0c,
                    'onload': function (_0x2cc919) {
                        const _0x5d422f = _0x2433e3;
                        try {
                            let _0x13afd6 = JSON['parse'](_0x2cc919[_0x5d422f(0x235)]);
                            _0x56bccf(_0x13afd6);
                        } catch (_0x13e12f) {
                            _0x1e3ab9(_0x5d422f(0x21d), 'reject', _0x13e12f[_0x5d422f(0x33b)]), _0x2f19f2(_0x13e12f);
                        }
                    },
                    'onerror': function (_0x1ac3fd) {
                        const _0xd59d05 = _0x2433e3;
                        _0x1e3ab9(_0xd59d05(0x21d), 'reject', _0x1ac3fd), _0x2f19f2(_0x1ac3fd);
                    }
                });
            });
        }
        function _0x45c110(_0x1e674d) {
            return new Promise((_0xd60e18, _0x1da4b7) => {
                const _0x1cdbad = a0_0x37c6;
                let _0x5d9b4c = _0x1cdbad(0x266) + _0x1e674d + _0x1cdbad(0x197);
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x5d9b4c,
                    'onload': function (_0x3983db) {
                        const _0x5111dc = _0x1cdbad;
                        try {
                            let _0x41ef60 = JSON[_0x5111dc(0x3dc)](_0x3983db['response']);
                            _0x1e3ab9(_0x5111dc(0x322), _0x41ef60), _0xd60e18(_0x41ef60);
                        } catch (_0x44f49b) {
                            _0x1e3ab9(_0x5111dc(0x322), 'reject', _0x44f49b[_0x5111dc(0x33b)]), _0x1da4b7(_0x44f49b);
                        }
                    },
                    'onerror': function (_0x2914d9) {
                        const _0x2cff9e = _0x1cdbad;
                        _0x1e3ab9(_0x2cff9e(0x322), _0x2cff9e(0x290), _0x2914d9), _0x1da4b7(_0x2914d9);
                    }
                });
            });
        }
        function _0x311daa(_0x5502b4) {
            return new Promise((_0x291539, _0x4ec9d1) => {
                const _0x58069c = a0_0x37c6;
                let _0x57c259 = _0x58069c(0x2c0) + _0x5502b4;
                GM_xmlhttpRequest({
                    'method': _0x58069c(0x26e),
                    'url': _0x57c259,
                    'onload': function (_0x2051c2) {
                        const _0x5b74d5 = _0x58069c;
                        let _0x5bee3b = JSON[_0x5b74d5(0x3dc)](_0x2051c2[_0x5b74d5(0x235)]), _0x306449 = null;
                        _0x5bee3b[_0x5b74d5(0x23c)][_0x5b74d5(0x29c)](_0x641f74 => {
                            const _0x2d2ecd = _0x5b74d5;
                            _0x641f74[_0x2d2ecd(0x3b3)][_0x2d2ecd(0x226)]?.['toLowerCase']() === _0x5502b4?.[_0x2d2ecd(0x2c2)]() && (_0x306449 = _0x641f74);
                        }), _0x306449 != null ? (_0x1e3ab9(_0x5b74d5(0x32c), _0x306449), _0x291539(_0x306449)) : _0x512720(_0x5502b4)[_0x5b74d5(0x1db)](_0xfd579e => {
                            _0x291539(_0xfd579e);
                        })[_0x5b74d5(0x284)](_0x5182a5 => {
                            alert('Can\x20not\x20find\x20user\x20info\x20from\x20getUserId()');
                        });
                    },
                    'onerror': function (_0x32cb2c) {
                        const _0x275c0e = _0x58069c;
                        _0x1e3ab9(_0x275c0e(0x32c), _0x275c0e(0x290), _0x32cb2c), _0x4ec9d1(_0x32cb2c);
                    }
                });
            });
        }
        function _0x512720(_0x5c4dd9) {
            return new Promise((_0x19b493, _0x45e1cb) => {
                const _0x24a63d = a0_0x37c6;
                let _0x4749ba = _0x24a63d(0x1da) + _0x5c4dd9;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x4749ba,
                    'headers': { 'X-IG-App-ID': _0x5611d5() },
                    'onload': function (_0x1fc3f2) {
                        const _0x1ddc17 = _0x24a63d;
                        try {
                            let _0x2e6d4e = JSON[_0x1ddc17(0x3dc)](_0x1fc3f2[_0x1ddc17(0x235)]), _0x17815c = _0x2e6d4e?.[_0x1ddc17(0x3e7)]?.[_0x1ddc17(0x3b3)];
                            if (_0x17815c != null) {
                                let _0x433e99 = _0x2e6d4e?.[_0x1ddc17(0x3e7)];
                                _0x433e99['user']['pk'] = _0x433e99['user']['id'], _0x1e3ab9(_0x1ddc17(0x20a), _0x2e6d4e), _0x19b493(_0x433e99);
                            } else
                                _0x1e3ab9(_0x1ddc17(0x20a), 'reject', _0x1ddc17(0x2ee)), _0x45e1cb(_0x1ddc17(0x2ee));
                        } catch (_0x4993bd) {
                            _0x1e3ab9(_0x1ddc17(0x20a), _0x1ddc17(0x290), _0x4993bd['message']), _0x45e1cb(_0x4993bd);
                        }
                    },
                    'onerror': function (_0x160e37) {
                        const _0x359ff9 = _0x24a63d;
                        _0x1e3ab9(_0x359ff9(0x20a), _0x359ff9(0x290), _0x160e37), _0x45e1cb(_0x160e37);
                    }
                });
            });
        }
        function _0x1e5cc8(_0x30a24b) {
            return new Promise((_0x1ecfe7, _0x3b3f8e) => {
                const _0x338e01 = a0_0x37c6;
                let _0x68c80c = _0x338e01(0x304) + _0x30a24b + _0x338e01(0x1b6);
                GM_xmlhttpRequest({
                    'method': _0x338e01(0x26e),
                    'url': _0x68c80c,
                    'headers': { 'User-Agent': _0x338e01(0x2fa) },
                    'onload': function (_0x45fb83) {
                        const _0x3a4457 = _0x338e01;
                        try {
                            let _0x49741d = JSON[_0x3a4457(0x3dc)](_0x45fb83[_0x3a4457(0x235)]);
                            _0x49741d['status'] !== 'ok' ? (_0x1e3ab9('getUserHighSizeProfile()', _0x3a4457(0x290), _0x49741d), _0x3b3f8e(_0x3a4457(0x2d8))) : (_0x1e3ab9(_0x3a4457(0x288), _0x49741d), _0x1ecfe7(_0x49741d[_0x3a4457(0x3b3)][_0x3a4457(0x2e0)]?.[_0x3a4457(0x33a)]));
                        } catch (_0x2ec9f5) {
                            _0x1e3ab9(_0x3a4457(0x288), _0x3a4457(0x290), _0x2ec9f5), _0x3b3f8e(_0x2ec9f5);
                        }
                    },
                    'onerror': function (_0x5e4dc5) {
                        const _0x2bbc63 = _0x338e01;
                        _0x1e3ab9('getUserHighSizeProfile()', _0x2bbc63(0x290), _0x5e4dc5), _0x3b3f8e(_0x5e4dc5);
                    }
                });
            });
        }
        function _0x51d095(_0x1ddf13) {
            return new Promise((_0x32295d, _0x2a38d3) => {
                const _0x3db288 = a0_0x37c6;
                if (!_0x1ddf13)
                    _0x2a38d3(_0x3db288(0x38b));
                let _0x48d2d1 = _0x1ddf13, _0x18a877 = _0x3db288(0x33c) + _0x48d2d1 + _0x3db288(0x231);
                GM_xmlhttpRequest({
                    'method': _0x3db288(0x26e),
                    'url': _0x18a877,
                    'onload': function (_0x396807) {
                        const _0x3f9cb9 = _0x3db288;
                        try {
                            let _0x328277 = JSON[_0x3f9cb9(0x3dc)](_0x396807[_0x3f9cb9(0x235)]);
                            _0x1e3ab9('getPostOwner()', _0x328277), _0x32295d(_0x328277[_0x3f9cb9(0x3e7)][_0x3f9cb9(0x305)]['owner'][_0x3f9cb9(0x226)]);
                        } catch (_0x3b07e2) {
                            _0x1e3ab9(_0x3f9cb9(0x201), _0x3f9cb9(0x290), _0x3b07e2[_0x3f9cb9(0x33b)]), _0x2a38d3(_0x3b07e2);
                        }
                    },
                    'onerror': function (_0x218797) {
                        const _0x1a9118 = _0x3db288;
                        _0x1e3ab9(_0x1a9118(0x201), _0x1a9118(0x290), _0x218797), _0x2a38d3(_0x218797);
                    }
                });
            });
        }
        function _0x2cbb2c(_0x164006) {
            return new Promise((_0x49efe9, _0x2ba8d2) => {
                const _0x5ed917 = a0_0x37c6;
                if (!_0x164006)
                    _0x2ba8d2(_0x5ed917(0x38b));
                let _0x3e3b27 = _0x164006, _0xb04b28 = _0x5ed917(0x33c) + _0x3e3b27 + '%22}';
                GM_xmlhttpRequest({
                    'method': _0x5ed917(0x26e),
                    'url': _0xb04b28,
                    'headers': { 'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111' },
                    'onload': function (_0x4115da) {
                        const _0x4db05d = _0x5ed917;
                        try {
                            let _0x3d0631 = JSON[_0x4db05d(0x3dc)](_0x4115da[_0x4db05d(0x235)]);
                            _0x1e3ab9(_0x3d0631), _0x3d0631[_0x4db05d(0x375)] === 'fail' ? (_0x1e3ab9(_0x4db05d(0x2f6), _0x4db05d(0x36e), _0x3e3b27), _0x8761af(_0x3e3b27)['then'](_0x588c71 => {
                                const _0x4e513e = _0x4db05d;
                                _0x49efe9({
                                    'type': 'query_id',
                                    'data': _0x588c71['xdt_api__v1__media__shortcode__web_info'][_0x4e513e(0x18b)][0x0]
                                });
                            })[_0x4db05d(0x284)](_0xcd3601 => {
                                _0x2ba8d2(_0xcd3601);
                            })) : _0x49efe9({
                                'type': _0x4db05d(0x200),
                                'data': _0x3d0631[_0x4db05d(0x3e7)]
                            });
                        } catch (_0xebfb82) {
                            _0x1e3ab9(_0x4db05d(0x3a3), 'reject', _0xebfb82[_0x4db05d(0x33b)]), _0x2ba8d2(_0xebfb82);
                        }
                    },
                    'onerror': function (_0x377724) {
                        const _0x1fa721 = _0x5ed917;
                        _0x1e3ab9(_0x1fa721(0x3a3), _0x1fa721(0x290), _0x377724), _0x2ba8d2(_0x377724);
                    }
                });
            });
        }
        function _0x8761af(_0x1b9978) {
            return new Promise((_0x18f433, _0x308cdc) => {
                const _0x572e3c = a0_0x37c6;
                if (!_0x1b9978)
                    _0x308cdc(_0x572e3c(0x38b));
                let _0x4b7fed = _0x1b9978, _0x116df5 = 'https://www.instagram.com/graphql/query/?query_id=9496392173716084&variables={%22shortcode%22:%22' + _0x4b7fed + _0x572e3c(0x1a1);
                GM_xmlhttpRequest({
                    'method': _0x572e3c(0x26e),
                    'url': _0x116df5,
                    'headers': {
                        'User-Agent': 'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
                        'X-IG-App-ID': _0x5611d5()
                    },
                    'onload': function (_0x25f4b8) {
                        const _0x1f5353 = _0x572e3c;
                        try {
                            let _0x751365 = JSON['parse'](_0x25f4b8['response']);
                            _0x1e3ab9(_0x751365), _0x751365[_0x1f5353(0x375)] === 'fail' ? (alert('getBlobMediaWithQueryID():\x20Request\x20failed\x20with\x20API\x20response:\x0a' + _0x751365[_0x1f5353(0x33b)] + ':\x20' + _0x751365['feedback_message']), _0x1e3ab9(_0x1f5353(0x27d) + _0x751365[_0x1f5353(0x33b)] + ':\x20' + _0x751365[_0x1f5353(0x2cc)]), _0x308cdc(_0x25f4b8)) : (_0x1e3ab9(_0x1f5353(0x371), _0x751365[_0x1f5353(0x3e7)]), _0x18f433(_0x751365[_0x1f5353(0x3e7)]));
                        } catch (_0x474d54) {
                            _0x1e3ab9(_0x1f5353(0x371), 'reject', _0x474d54[_0x1f5353(0x33b)]), _0x308cdc(_0x474d54);
                        }
                    },
                    'onerror': function (_0x59ef09) {
                        const _0xbc5759 = _0x572e3c;
                        _0x1e3ab9(_0xbc5759(0x371), _0xbc5759(0x290), _0x59ef09), _0x308cdc(_0x59ef09);
                    }
                });
            });
        }
        function _0x41da06(_0x314460) {
            return new Promise((_0x225b9a, _0x548814) => {
                const _0x26f3cb = a0_0x37c6;
                let _0x3f38b3 = _0x26f3cb(0x33d) + _0x314460 + '/info/';
                if (_0x314460 == null) {
                    alert(_0x26f3cb(0x29e)), _0x1e3ab9('getMediaInfo()', _0x26f3cb(0x290), _0x26f3cb(0x29e)), _0xe8b19a(![]), _0x548814(-0x1);
                    return;
                }
                if (_0x5611d5() == null) {
                    alert(_0x26f3cb(0x1ef)), _0x1e3ab9(_0x26f3cb(0x395), _0x26f3cb(0x290), _0x26f3cb(0x1ef)), _0xe8b19a(![]), _0x548814(-0x1);
                    return;
                }
                GM_xmlhttpRequest({
                    'method': _0x26f3cb(0x26e),
                    'url': _0x3f38b3,
                    'headers': {
                        'User-Agent': window['navigator'][_0x26f3cb(0x1e7)],
                        'Accept': '*/*',
                        'X-IG-App-ID': _0x5611d5()
                    },
                    'onload': function (_0xfbf35f) {
                        const _0xebcf46 = _0x26f3cb;
                        if (_0xfbf35f['finalUrl'] == _0x3f38b3) {
                            let _0x328ca7 = JSON[_0xebcf46(0x3dc)](_0xfbf35f[_0xebcf46(0x235)]);
                            _0x1e3ab9('getMediaInfo()', _0x328ca7), _0x225b9a(_0x328ca7);
                        } else {
                            let _0x1e2b41 = new URL(_0xfbf35f['finalUrl']);
                            _0x1e2b41[_0xebcf46(0x1bf)][_0xebcf46(0x36f)](_0xebcf46(0x2f2)) ? (_0x1e3ab9('getMediaInfo()', _0xebcf46(0x290), _0xebcf46(0x261)), alert(_0xebcf46(0x261))) : (_0x1e3ab9(_0xebcf46(0x395), _0xebcf46(0x290), _0xebcf46(0x324) + _0xfbf35f['finalUrl'] + '\x22'), alert('Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22' + _0xfbf35f['finalUrl'] + '\x22')), _0xe8b19a(![]), _0x548814(-0x1);
                        }
                    },
                    'onerror': function (_0x58ce67) {
                        const _0x1f39af = _0x26f3cb;
                        _0x1e3ab9(_0x1f39af(0x395), _0x1f39af(0x290), _0x58ce67), _0x225b9a(_0x58ce67);
                    }
                });
            });
        }
        function _0x34c804(_0x283894) {
            const _0x12e94b = _0x1a0801;
            let _0x12fb0a = new URL(_0x283894), _0x1cd6c1 = _0x12fb0a?.['searchParams']?.[_0x12e94b(0x1d9)]('ig_cache_key')?.[_0x12e94b(0x3fc)]('.')['at'](0x0);
            return _0x1cd6c1 ? atob(_0x1cd6c1) : null;
        }
        function _0x5611d5() {
            const _0x199456 = _0x1a0801;
            let _0x374fb0 = null;
            return _0x125fda(_0x199456(0x259))[_0x199456(0x1d2)](function () {
                const _0xaf3acd = _0x199456, _0x2651de = /"APP_ID":"([0-9]+)"/ig, _0x3483fa = _0x125fda(this)[_0xaf3acd(0x323)]()['match'](_0x2651de);
                _0x3483fa != null && _0x374fb0 == null && (_0x374fb0 = [..._0x125fda(this)[_0xaf3acd(0x323)]()[_0xaf3acd(0x269)](_0x2651de)]);
            }), _0x374fb0 ? _0x374fb0['at'](0x0)['at'](-0x1) : null;
        }
        function _0xe8b19a(_0x5dcf93) {
            const _0xefe794 = _0x1a0801;
            _0x5dcf93 ? (_0x125fda(_0xefe794(0x2be))[_0xefe794(0x186)](_0xefe794(0x274)), _0x125fda(_0xefe794(0x2be))[_0xefe794(0x245)](_0xefe794(0x21c), _0xefe794(0x1d8))) : (_0x125fda(_0xefe794(0x2be))[_0xefe794(0x31b)](_0xefe794(0x274)), _0x125fda(_0xefe794(0x2be))[_0xefe794(0x245)](_0xefe794(0x21c), ''));
        }
        function _0x4df6f7(_0x5a5030) {
            const _0x185c55 = _0x1a0801;
            let _0xb467db = _0x125fda(_0x185c55(0x2b9) + _0x5a5030 + _0x185c55(0x2ce))['filter'](function () {
                const _0xeca148 = _0x185c55;
                return _0x125fda(this)[_0xeca148(0x248)]()[_0xeca148(0x3da)] === 0x0 && _0x125fda(this)[_0xeca148(0x310)](_0xeca148(0x1f1))['length'] === 0x0 && _0x125fda(this)[_0xeca148(0x323)]()?.[_0xeca148(0x2c2)]() === _0x5a5030?.[_0xeca148(0x2c2)]();
            })['parents'](_0x185c55(0x1aa))[_0x185c55(0x1b7)](function () {
                const _0x4ab23a = _0x185c55;
                return _0x125fda(this)[_0x4ab23a(0x323)]()?.[_0x4ab23a(0x2c2)]() !== _0x5a5030?.['toLowerCase']();
            })[_0x185c55(0x1b7)](function () {
                const _0x3de64c = _0x185c55;
                return _0x125fda(this)[_0x3de64c(0x248)]()[_0x3de64c(0x3da)] > 0x1;
            })['first']();
            return _0xb467db[_0x185c55(0x3da)] === 0x0 && (_0xb467db = _0x125fda('body\x20>\x20div\x20section:visible\x20a[href^=\x22/' + _0x5a5030 + '\x22]')[_0x185c55(0x1b7)](function () {
                const _0x51cfc1 = _0x185c55;
                return _0x125fda(this)[_0x51cfc1(0x310)]('img')[_0x51cfc1(0x3da)] > 0x0;
            })[_0x185c55(0x258)](_0x185c55(0x1aa))[_0x185c55(0x1b7)](function () {
                const _0x5244a5 = _0x185c55;
                return _0x125fda(this)[_0x5244a5(0x323)]()?.['toLowerCase']() !== _0x5a5030?.[_0x5244a5(0x2c2)]();
            })[_0x185c55(0x1b7)](function () {
                const _0x165347 = _0x185c55;
                return _0x125fda(this)[_0x165347(0x248)]()[_0x165347(0x3da)] > 0x1;
            })[_0x185c55(0x2af)]()), _0xb467db[_0x185c55(0x248)]()[_0x185c55(0x1b7)](function () {
                const _0x412334 = _0x185c55;
                return _0x125fda(this)[_0x412334(0x23f)]() < 0xa;
            })[_0x185c55(0x2af)]()['children']();
        }
        function _0x48dc10(_0x3daa60, _0x161269) {
            const _0xc88373 = _0x1a0801;
            _0x125fda(_0xc88373(0x1ab))[_0xc88373(0x3da)] ? (_0x125fda(_0xc88373(0x287))[_0xc88373(0x323)](_0x3daa60 + '/' + _0x161269), _0x3daa60 >= _0x161269 && _0x125fda('.circle_wrapper')[_0xc88373(0x3cb)](0xfa, function () {
                const _0x1799e8 = _0xc88373;
                _0x125fda(this)[_0x1799e8(0x298)]();
            })) : _0x125fda(_0xc88373(0x3b6))[_0xc88373(0x348)]('<div\x20class=\x22circle_wrapper\x22><circle></circle><span>' + _0x3daa60 + '/' + _0x161269 + _0xc88373(0x356));
        }
        function _0x34a8d0(_0x3ef3a4, _0x47a586) {
            const _0x34de72 = _0x1a0801;
            let _0x5311fc = _0x3ef3a4 ? _0x34de72(0x308) : '';
            _0x125fda(_0x34de72(0x3b6))[_0x34de72(0x348)](_0x34de72(0x1eb) + _0x5311fc + _0x34de72(0x2d9)), _0x125fda('.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE')[_0x34de72(0x348)]('<div\x20style=\x22position:relative;min-height:36px;text-align:center;margin-bottom:\x207px;\x22><div\x20style=\x22position:absolute;left:0px;line-height:\x2018px;\x22><kbd>Alt</kbd>+<kbd>Q</kbd>\x20[<span\x20data-ih-locale=\x22CLOSE\x22>' + _0x2ec937('CLOSE') + _0x34de72(0x36a) + GM_info[_0x34de72(0x2ab)][_0x34de72(0x30d)] + _0x34de72(0x202) + _0x4a2f85[_0x34de72(0x3b5)] + '</div></div>'), _0x47a586 && (_0x125fda(_0x34de72(0x1bd))[_0x34de72(0x348)]('<div\x20style=\x22text-align:\x20center;\x22\x20id=\x22button_group\x22></div>'), _0x125fda(_0x34de72(0x229))[_0x34de72(0x348)](_0x34de72(0x363) + _0x2ec937('BATCH_DOWNLOAD_SELECTED') + _0x34de72(0x286)), _0x125fda(_0x34de72(0x229))[_0x34de72(0x348)](_0x34de72(0x2aa) + _0x2ec937('BATCH_DOWNLOAD_DIRECT') + '</button>'), _0x125fda(_0x34de72(0x1bd))[_0x34de72(0x348)](_0x34de72(0x18f) + _0x2ec937('ALL_CHECK') + '</span></label>'));
        }
        function _0x2bcff0(_0x3b30b1) {
            const _0x1c5bad = _0x1a0801;
            _0x125fda(_0x1c5bad(0x2f4))[_0x1c5bad(0x3da)] && (_0x3b30b1 ? _0x125fda(_0x1c5bad(0x2f4))[_0x1c5bad(0x31b)](_0x1c5bad(0x308)) : _0x125fda('.IG_SN_DIG')['removeClass'](_0x1c5bad(0x308)));
        }
        function _0x4e3748(_0x1322b0, _0x450165, _0x34475c, _0x203916, _0x155874, _0x219662) {
            return new Promise(_0x36026d => {
                setTimeout(() => {
                    const _0x4abb29 = a0_0x37c6;
                    _0xe8b19a(!![]), fetch(_0x1322b0)[_0x4abb29(0x1db)](_0x426043 => {
                        const _0x400f88 = _0x4abb29;
                        return _0x426043[_0x400f88(0x294)]()[_0x400f88(0x1db)](_0x2672ab => {
                            _0xe8b19a(![]), _0x29bf8e(_0x1322b0, _0x2672ab, _0x450165, _0x34475c, _0x203916, _0x155874, _0x219662), _0x36026d(!![]);
                        });
                    });
                }, 0x32);
            });
        }
        function _0x29bf8e(_0x5a9fbc, _0x1f04f7, _0x3eed33, _0x1a6eb5, _0x47edf8, _0x468707, _0x3a13a4) {
            const _0x5de4ed = _0x1a0801;
            _0x47edf8 = parseInt(_0x47edf8[_0x5de4ed(0x230)]()[_0x5de4ed(0x367)](0xd, '0'));
            _0x5c4373[_0x5de4ed(0x3c7)] && (_0x47edf8 = parseInt(_0x47edf8[_0x5de4ed(0x230)]()[_0x5de4ed(0x367)](0xd, '0')));
            const _0x1442d6 = new Date(_0x47edf8), _0x50349a = document[_0x5de4ed(0x38a)]('a'), _0x20e9be = new URL(_0x5a9fbc)[_0x5de4ed(0x1bf)]['split']('/')['at'](-0x1)[_0x5de4ed(0x3fc)]('.')[_0x5de4ed(0x337)](0x0, -0x1)['join']('.'), _0x5a84dd = _0x1442d6['getFullYear']()[_0x5de4ed(0x230)](), _0x454adb = (_0x1442d6[_0x5de4ed(0x3be)]() + 0x1)[_0x5de4ed(0x230)]()[_0x5de4ed(0x2bf)](0x2, '0'), _0x4f7a99 = _0x1442d6[_0x5de4ed(0x1e3)]()[_0x5de4ed(0x230)]()[_0x5de4ed(0x2bf)](0x2, '0'), _0x29aa92 = _0x1442d6['getHours']()[_0x5de4ed(0x230)]()['padStart'](0x2, '0'), _0xc16397 = _0x1442d6[_0x5de4ed(0x32d)]()['toString']()[_0x5de4ed(0x2bf)](0x2, '0'), _0xa64729 = _0x1442d6[_0x5de4ed(0x2f9)]()[_0x5de4ed(0x230)]()[_0x5de4ed(0x2bf)](0x2, '0');
            var _0x2c11c6 = _0x112684['fileRenameFormat']['toUpperCase'](), _0x503d31 = _0x3a13a4 ?? '', _0x370193 = {
                    '%USERNAME%': _0x3eed33,
                    '%SOURCE_TYPE%': _0x1a6eb5,
                    '%SHORTCODE%': _0x503d31,
                    '%YEAR%': _0x5a84dd,
                    '%2-YEAR%': _0x5a84dd[_0x5de4ed(0x35c)](-0x2),
                    '%MONTH%': _0x454adb,
                    '%DAY%': _0x4f7a99,
                    '%HOUR%': _0x29aa92,
                    '%MINUTE%': _0xc16397,
                    '%SECOND%': _0xa64729,
                    '%ORIGINAL_NAME%': _0x20e9be,
                    '%ORIGINAL_NAME_FIRST%': _0x20e9be[_0x5de4ed(0x3fc)]('_')['at'](0x0)
                };
            _0x2c11c6 = _0x2c11c6[_0x5de4ed(0x2a2)](/%[\w\-]+%/g, function (_0x9ce59d) {
                return _0x370193[_0x9ce59d] || _0x9ce59d;
            });
            const _0x16f0a4 = _0x3eed33 + '_' + _0x20e9be + '.' + _0x468707;
            _0x50349a[_0x5de4ed(0x19b)] = URL[_0x5de4ed(0x3ac)](_0x1f04f7), _0x50349a[_0x5de4ed(0x368)](_0x5de4ed(0x398), _0x5c4373[_0x5de4ed(0x2df)] ? _0x2c11c6 + '.' + _0x468707 : _0x16f0a4), _0x50349a[_0x5de4ed(0x359)](), _0x50349a[_0x5de4ed(0x298)]();
        }
        async function _0x31c4e3(_0x5a89fa, _0x339e21) {
            const _0x18626f = _0x1a0801;
            let _0x58ca1d = new Date()[_0x18626f(0x2f8)](), _0xacc728 = Math[_0x18626f(0x281)](_0x58ca1d / 0x3e8), _0x358fd1 = _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x1c8)) ? _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x1c8)) : _0x112684[_0x18626f(0x25b)];
            !_0x358fd1 && _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x241)) && (_0x1e3ab9('catching\x20owner\x20name\x20from\x20shortcode:', _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x315))), _0x358fd1 = await _0x51d095(_0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x241)))[_0x18626f(0x284)](_0x1c3577 => {
                const _0x4451f1 = _0x18626f;
                _0x1e3ab9(_0x4451f1(0x1f9), _0x1c3577['message']);
            }), _0x358fd1 == null && (_0x358fd1 = _0x18626f(0x2ba)));
            _0x5c4373['RENAME_PUBLISH_DATE'] && _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x30e)) && (_0xacc728 = parseInt(_0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x30e))));
            if (_0x5c4373[_0x18626f(0x2bc)]) {
                _0xe8b19a(!![]);
                let _0x5994ae = await _0x41da06(_0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x3b8)));
                _0xe8b19a(![]);
                if (_0x5994ae[_0x18626f(0x375)] === 'ok') {
                    var _0x16e0d7 = null;
                    _0x5994ae[_0x18626f(0x18b)][0x0][_0x18626f(0x275)] ? _0x16e0d7 = _0x5994ae['items'][0x0][_0x18626f(0x275)][0x0][_0x18626f(0x33a)] : (_0x5994ae['items'][0x0][_0x18626f(0x2a3)][_0x18626f(0x3a9)]['sort'](function (_0x3d9792, _0x2ac8fa) {
                        const _0x133298 = _0x18626f;
                        let _0x47dd04 = new URL(_0x3d9792['url'])['searchParams'][_0x133298(0x1d9)](_0x133298(0x1c9)), _0x253d61 = new URL(_0x2ac8fa[_0x133298(0x33a)])[_0x133298(0x34e)]['get'](_0x133298(0x1c9));
                        if (_0x47dd04 && _0x253d61) {
                            if (_0x47dd04['length'] > _0x253d61[_0x133298(0x3da)])
                                return 0x1;
                            if (_0x47dd04[_0x133298(0x3da)] < _0x253d61['length'])
                                return -0x1;
                        } else {
                            if (_0x3d9792[_0x133298(0x252)] < _0x2ac8fa[_0x133298(0x252)])
                                return 0x1;
                            if (_0x3d9792['width'] > _0x2ac8fa[_0x133298(0x252)])
                                return -0x1;
                        }
                        return 0x0;
                    }), _0x16e0d7 = _0x5994ae[_0x18626f(0x18b)][0x0][_0x18626f(0x2a3)][_0x18626f(0x3a9)][0x0][_0x18626f(0x33a)]);
                    if (_0x339e21) {
                        let _0x3926e8 = new URL(_0x16e0d7);
                        _0x3926e8[_0x18626f(0x222)] = _0x18626f(0x37f), _0x52438f(_0x3926e8[_0x18626f(0x19b)]);
                    } else
                        _0x4e3748(_0x16e0d7, _0x358fd1, _0x125fda(_0x5a89fa)['attr'](_0x18626f(0x238)), _0xacc728, _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x37d)), _0x125fda(_0x5a89fa)['attr'](_0x18626f(0x241)));
                } else {
                    if (_0x5c4373[_0x18626f(0x3b2)]) {
                        if (_0x339e21) {
                            let _0x55783f = new URL(_0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x315)));
                            _0x55783f['host'] = _0x18626f(0x37f), _0x52438f(_0x55783f['href']);
                        } else
                            _0x4e3748(_0x125fda(_0x5a89fa)['attr']('data-href'), _0x358fd1, _0x125fda(_0x5a89fa)['attr'](_0x18626f(0x238)), _0xacc728, _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x37d)), _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x241)));
                    } else
                        alert(_0x18626f(0x18e) + _0x5994ae[_0x18626f(0x33b)]);
                    _0x1e3ab9(_0x5994ae);
                }
            } else
                _0x4e3748(_0x125fda(_0x5a89fa)['attr']('data-href'), _0x358fd1, _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x238)), _0xacc728, _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x37d)), _0x125fda(_0x5a89fa)[_0x18626f(0x223)](_0x18626f(0x241)));
        }
        function _0x46b70b() {
            const _0x37dc2f = _0x1a0801;
            for (let _0x5a5464 of _0x112684[_0x37dc2f(0x32a)]) {
                _0x1e3ab9(_0x37dc2f(0x31c), _0x5a5464), GM_unregisterMenuCommand(_0x5a5464);
            }
            _0x112684['registerMenuIds'][_0x37dc2f(0x2ec)](GM_registerMenuCommand(_0x2ec937(_0x37dc2f(0x1fe)), () => {
                _0x1a3f84();
            }, { 'accessKey': 'w' })), _0x112684[_0x37dc2f(0x32a)][_0x37dc2f(0x2ec)](GM_registerMenuCommand(_0x2ec937('DONATE'), () => {
                GM_openInTab('https://ko-fi.com/snkoarashi', { 'active': !![] });
            }, { 'accessKey': 'd' })), _0x112684['registerMenuIds'][_0x37dc2f(0x2ec)](GM_registerMenuCommand(_0x2ec937(_0x37dc2f(0x340)), () => {
                _0x48c5d8();
            }, { 'accessKey': 'z' })), _0x112684[_0x37dc2f(0x32a)][_0x37dc2f(0x2ec)](GM_registerMenuCommand(_0x2ec937('FEEDBACK'), () => {
                _0x536c29();
            }, { 'accessKey': 'f' })), _0x112684['registerMenuIds']['push'](GM_registerMenuCommand(_0x2ec937(_0x37dc2f(0x299)), () => {
                _0x26cbea();
            }, { 'accessKey': 'c' })), _0x112684['registerMenuIds']['push'](GM_registerMenuCommand(_0x2ec937('RELOAD_SCRIPT'), () => {
                _0x13af2b();
            }, { 'accessKey': 'r' }));
        }
        function _0x3e7e7e(_0x1c2b48) {
            const _0x460bba = _0x1a0801;
            if (!_0x5c4373[_0x460bba(0x2b0)])
                return;
            const _0x19998d = GM_getValue('G_CHECK_TIMESTAMP') ?? new Date()[_0x460bba(0x2f8)](), _0x5b8877 = new Date()['getTime']();
            _0x5b8877 > parseInt(_0x19998d) + _0x1c2b48 * 0x3e8 && (GM_setValue(_0x460bba(0x350), new Date()[_0x460bba(0x2f8)]()), _0x26cbea());
        }
        function _0x26cbea() {
            const _0x13dbc2 = _0x1a0801, _0x3f4fb5 = GM_info[_0x13dbc2(0x2ab)][_0x13dbc2(0x30d)], _0x2661a9 = _0x13dbc2(0x262);
            GM_xmlhttpRequest({
                'method': 'GET',
                'url': _0x2661a9,
                'onload': function (_0x41fce1) {
                    const _0x2655eb = _0x13dbc2, _0x5a44cc = _0x41fce1[_0x2655eb(0x2fd)], _0x419e5c = _0x5a44cc[_0x2655eb(0x1a0)](/\/\/\s+@version\s+([0-9.\-a-zA-Z]+)/i);
                    if (_0x419e5c && _0x419e5c[0x1]) {
                        const _0x5233a4 = _0x419e5c[0x1];
                        _0x1e3ab9(_0x2655eb(0x1c5), _0x3f4fb5, '|', _0x2655eb(0x179), _0x5233a4), _0x5233a4 !== _0x3f4fb5 && typeof this[_0x2655eb(0x206)] === 'undefined' ? (this['updatenotification'] = null, GM_notification({
                            'text': _0x2ec937(_0x2655eb(0x2d1)),
                            'title': _0x2ec937('NOTICE_UPDATE_TITLE'),
                            'tag': _0x2655eb(0x29b),
                            'highlight': !![],
                            'timeout': 0x1388,
                            'zombieTimeout': 0x1388,
                            'image': _0x2655eb(0x355),
                            'onclick': _0x21e19c => {
                                const _0x2a4add = _0x2655eb;
                                _0x21e19c?.['preventDefault']();
                                var _0x2b4c9c = GM_openInTab(GM_info[_0x2a4add(0x2ab)]['downloadURL']);
                                setTimeout(() => {
                                    const _0x420d2a = _0x2a4add;
                                    _0x2b4c9c[_0x420d2a(0x2d5)]();
                                }, 0xfa);
                            }
                        })) : _0x1e3ab9(_0x2655eb(0x2a1));
                    } else
                        console[_0x2655eb(0x244)](_0x2655eb(0x32b));
                }
            });
        }
        function _0x1a3f84() {
            const _0x3b0e65 = _0x1a0801;
            _0x125fda(_0x3b0e65(0x2f4))[_0x3b0e65(0x298)](), _0x34a8d0(), _0x125fda(_0x3b0e65(0x1c7))[_0x3b0e65(0x323)]('Preference\x20Settings'), _0x125fda(_0x3b0e65(0x1b3))[_0x3b0e65(0x348)](_0x3b0e65(0x192));
            for (let _0x47b3d0 in _0x3166a8) {
                _0x125fda(_0x3b0e65(0x2f5))[_0x3b0e65(0x348)](_0x3b0e65(0x265) + _0x47b3d0 + '\x22\x20' + (_0x112684[_0x3b0e65(0x3d8)] == _0x47b3d0 ? _0x3b0e65(0x1c0) : '') + '>' + _0x3166a8[_0x47b3d0] + _0x3b0e65(0x347));
            }
            for (let _0x22b80f in _0x5c4373) {
                _0x125fda(_0x3b0e65(0x3ca))[_0x3b0e65(0x348)]('<label\x20class=\x22globalSettings' + (_0x4e78af[_0x3b0e65(0x3ea)](_0x22b80f) ? _0x3b0e65(0x2e9) : '') + _0x3b0e65(0x2a8) + _0x2ec937(_0x22b80f + '_INTRO') + _0x3b0e65(0x2a9) + (_0x22b80f + _0x3b0e65(0x399)) + _0x3b0e65(0x3e6) + _0x22b80f + '\x22>' + _0x2ec937(_0x22b80f) + _0x3b0e65(0x1d7) + _0x22b80f + _0x3b0e65(0x17d) + (_0x5c4373[_0x22b80f] === !![] ? 'checked' : '') + _0x3b0e65(0x30c)), _0x22b80f === _0x3b0e65(0x1d4) && _0x125fda(_0x3b0e65(0x1cd) + _0x22b80f + '\x22]')['parent']('label')['on']('contextmenu', function (_0x12bcc2) {
                    const _0x21b7b6 = _0x3b0e65;
                    _0x12bcc2[_0x21b7b6(0x3bb)](), _0x125fda(this)[_0x21b7b6(0x310)](_0x21b7b6(0x3d3))[_0x21b7b6(0x3da)] === 0x0 && (_0x125fda(this)[_0x21b7b6(0x348)](_0x21b7b6(0x292)), _0x125fda(this)[_0x21b7b6(0x248)]('#tempWrapper')[_0x21b7b6(0x348)](_0x21b7b6(0x352) + _0x112684['videoVolume'] + _0x21b7b6(0x353)), _0x125fda(this)[_0x21b7b6(0x248)](_0x21b7b6(0x3d3))['append'](_0x21b7b6(0x352) + _0x112684[_0x21b7b6(0x250)] + _0x21b7b6(0x2e1)), _0x125fda(this)[_0x21b7b6(0x248)](_0x21b7b6(0x3d3))['append'](_0x21b7b6(0x336) + _0x4a2f85['CLOSE'] + _0x21b7b6(0x3b9)));
                }), _0x22b80f === _0x3b0e65(0x2df) && _0x125fda(_0x3b0e65(0x1cd) + _0x22b80f + '\x22]')['parent']('label')['on'](_0x3b0e65(0x211), function (_0x5958cc) {
                    const _0x40bc14 = _0x3b0e65;
                    _0x5958cc[_0x40bc14(0x3bb)](), _0x125fda(this)[_0x40bc14(0x310)](_0x40bc14(0x3d3))[_0x40bc14(0x3da)] === 0x0 && (_0x125fda(this)['append'](_0x40bc14(0x292)), _0x125fda(this)[_0x40bc14(0x248)](_0x40bc14(0x3d3))[_0x40bc14(0x348)]('<input\x20id=\x22date_format\x22\x20value=\x22' + _0x112684[_0x40bc14(0x25a)] + _0x40bc14(0x185)), _0x125fda(this)['children'](_0x40bc14(0x3d3))[_0x40bc14(0x348)](_0x40bc14(0x336) + _0x4a2f85[_0x40bc14(0x3b5)] + _0x40bc14(0x3b9)));
                });
            }
        }
        function _0x48c5d8() {
            const _0x19bb1a = _0x1a0801;
            _0x125fda(_0x19bb1a(0x2f4))[_0x19bb1a(0x298)](), _0x34a8d0(), _0x125fda(_0x19bb1a(0x1c7))[_0x19bb1a(0x323)](_0x19bb1a(0x30a)), _0x125fda('.IG_SN_DIG\x20.IG_SN_DIG_BODY')[_0x19bb1a(0x348)](_0x19bb1a(0x207)), _0x125fda(_0x19bb1a(0x3ca))[_0x19bb1a(0x348)](_0x19bb1a(0x2e7)), _0x125fda(_0x19bb1a(0x278))['append']('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DISPLAY_DOM_TREE\x22><a>' + _0x2ec937(_0x19bb1a(0x318)) + _0x19bb1a(0x1f5)), _0x125fda('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')[_0x19bb1a(0x348)](_0x19bb1a(0x328) + _0x2ec937(_0x19bb1a(0x3ab)) + '</a></button>'), _0x125fda(_0x19bb1a(0x278))[_0x19bb1a(0x348)](_0x19bb1a(0x331) + _0x2ec937(_0x19bb1a(0x3c9)) + '</a></button><br/>'), _0x125fda('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span')['append'](_0x19bb1a(0x220) + _0x2ec937('REPORT_GITHUB') + _0x19bb1a(0x1f5)), _0x125fda(_0x19bb1a(0x278))[_0x19bb1a(0x348)](_0x19bb1a(0x344) + _0x2ec937('REPORT_DISCORD') + _0x19bb1a(0x1f5));
        }
        function _0x536c29() {
            const _0x4e6b1d = _0x1a0801;
            _0x125fda(_0x4e6b1d(0x2f4))['remove'](), _0x34a8d0(), _0x125fda(_0x4e6b1d(0x1c7))[_0x4e6b1d(0x323)](_0x4e6b1d(0x3aa)), _0x125fda(_0x4e6b1d(0x3ca))['append'](_0x4e6b1d(0x2e7)), _0x125fda(_0x4e6b1d(0x278))['append'](_0x4e6b1d(0x39e) + _0x2ec937(_0x4e6b1d(0x2b1)) + '</a></button>'), _0x125fda(_0x4e6b1d(0x278))[_0x4e6b1d(0x348)](_0x4e6b1d(0x220) + _0x2ec937('REPORT_GITHUB') + _0x4e6b1d(0x1f5)), _0x125fda(_0x4e6b1d(0x278))[_0x4e6b1d(0x348)]('<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>' + _0x2ec937('REPORT_DISCORD') + _0x4e6b1d(0x1f5));
        }
        function _0x52438f(_0x20701a) {
            const _0x4b138b = _0x1a0801;
            var _0x3c736a = document[_0x4b138b(0x38a)]('a');
            _0x3c736a[_0x4b138b(0x19b)] = _0x20701a, _0x3c736a[_0x4b138b(0x1a9)] = '_blank', document['body']['appendChild'](_0x3c736a), _0x3c736a[_0x4b138b(0x359)](), _0x3c736a[_0x4b138b(0x298)]();
        }
        function _0x13af2b() {
            const _0x539b79 = _0x1a0801;
            clearInterval(_0x112684[_0x539b79(0x276)]), _0x112684[_0x539b79(0x3fb)][_0x539b79(0x29c)](_0xaf8c48 => {
                const _0x4fadc6 = _0x539b79;
                _0xaf8c48[_0x4fadc6(0x306)][_0x4fadc6(0x29c)](_0x1a8401 => {
                    const _0x24039d = _0x4fadc6;
                    _0x125fda(_0xaf8c48['element'])[_0x24039d(0x32e)](_0x24039d(0x359), _0x1a8401);
                });
            }), _0x112684[_0x539b79(0x3fb)] = [], _0x125fda(_0x539b79(0x329))['remove'](), _0x125fda('.IG_DWPROFILE,\x20.IG_DWPROFILE,\x20.IG_DWSTORY,\x20.IG_DWSTORY_ALL,\x20.IG_DWSTORY_THUMBNAIL,\x20.IG_DWNEWTAB,\x20.IG_DWHISTORY,\x20.IG_DWHISTORY_ALL,\x20.IG_DWHINEWTAB,\x20.IG_DWHISTORY_THUMBNAIL,\x20.IG_REELS,\x20.IG_REELS_NEWTAB,\x20.IG_REELS_THUMBNAIL')[_0x539b79(0x298)](), _0x125fda(_0x539b79(0x1ad))[_0x539b79(0x386)](_0x539b79(0x316)), _0x112684[_0x539b79(0x3a8)] = ![], _0x112684['firstStarted'] = ![], _0x112684[_0x539b79(0x1ae)] = location[_0x539b79(0x19b)], _0x112684[_0x539b79(0x34a)]['disconnect'](), _0x1e3ab9(_0x539b79(0x22f));
        }
        function _0x1e3ab9(..._0xc6dbd5) {
            const _0x29aeb5 = _0x1a0801;
            var _0x2c2792 = new Date();
            _0x112684[_0x29aeb5(0x1b4)][_0x29aeb5(0x2ec)]({
                'time': _0x2c2792[_0x29aeb5(0x2f8)](),
                'content': [..._0xc6dbd5]
            }), _0x112684[_0x29aeb5(0x1b4)][_0x29aeb5(0x3da)] > 0x3e8 && (_0x112684[_0x29aeb5(0x1b4)] = [
                {
                    'time': _0x2c2792['getTime'](),
                    'content': ['logger\x20sliced']
                },
                ..._0x112684[_0x29aeb5(0x1b4)][_0x29aeb5(0x337)](-0x3e7)
            ]), console[_0x29aeb5(0x1b5)]('[' + _0x2c2792['toISOString']() + ']', ..._0xc6dbd5);
        }
        function _0x17f589() {
            const _0x20cdb1 = _0x1a0801;
            for (let _0x3c0e44 in _0x5c4373) {
                GM_getValue(_0x3c0e44) != null && typeof GM_getValue(_0x3c0e44) === _0x20cdb1(0x346) && (_0x5c4373[_0x3c0e44] = GM_getValue(_0x3c0e44), _0x3c0e44 === 'MODIFY_VIDEO_VOLUME' && GM_getValue(_0x3c0e44) !== !![] && (_0x112684['videoVolume'] = 0x1));
            }
        }
        function _0x10d9c8(_0x1e2bf7, _0x3fbe70, _0x5c4936, _0x39f7d2 = '') {
            const _0x5ab676 = _0x1a0801;
            _0x3fbe70[_0x5ab676(0x310)](_0x5ab676(0x1e9))['length'] === 0x0 ? (_0x3fbe70[_0x5ab676(0x348)](_0x5ab676(0x1ee) + _0x39f7d2 + _0x5ab676(0x185)), _0x3fbe70[_0x5ab676(0x310)](_0x5ab676(0x1e9))[_0x5ab676(0x348)](_0x5ab676(0x1dc) + _0x112684['videoVolume'] + _0x5ab676(0x257)), _0x3fbe70[_0x5ab676(0x310)](_0x5ab676(0x27a))[_0x5ab676(0x223)](_0x5ab676(0x1f6), _0x5ab676(0x218) + (_0x112684['videoVolume'] * 0x64 + '%')), _0x3fbe70[_0x5ab676(0x310)]('div.volume_slider\x20input')['on']('input', function () {
                const _0x51661a = _0x5ab676;
                var _0x1da442 = _0x125fda(this)[_0x51661a(0x377)]() * 0x64 + '%';
                _0x112684['videoVolume'] = _0x125fda(this)['val'](), GM_setValue(_0x51661a(0x196), _0x125fda(this)[_0x51661a(0x377)]()), _0x125fda(this)[_0x51661a(0x223)](_0x51661a(0x1f6), '--ig-track-progress:\x20' + _0x1da442), _0x1e2bf7[_0x51661a(0x1d2)](function () {
                    const _0x7ce376 = _0x51661a;
                    _0x1e3ab9('(' + _0x5c4936 + ')', _0x7ce376(0x3f1)), this[_0x7ce376(0x2fe)] = _0x112684['videoVolume'];
                });
            }), _0x3fbe70[_0x5ab676(0x310)](_0x5ab676(0x27a))['on'](_0x5ab676(0x382), function () {
                const _0x3ea85c = _0x5ab676;
                var _0x1f5b87 = _0x112684['videoVolume'] * 0x64 + '%';
                _0x125fda(this)[_0x3ea85c(0x223)](_0x3ea85c(0x1f6), _0x3ea85c(0x218) + _0x1f5b87), _0x125fda(this)[_0x3ea85c(0x377)](_0x112684[_0x3ea85c(0x250)]), _0x1e2bf7[_0x3ea85c(0x1d2)](function () {
                    const _0x53bd8e = _0x3ea85c;
                    _0x1e3ab9('(' + _0x5c4936 + ')', _0x53bd8e(0x3f1)), this[_0x53bd8e(0x2fe)] = _0x112684['videoVolume'];
                });
            }), _0x3fbe70[_0x5ab676(0x310)]('div.volume_slider')['on']('click', function (_0x3d3bf6) {
                const _0x241327 = _0x5ab676;
                _0x3d3bf6[_0x241327(0x3f9)](), _0x3d3bf6[_0x241327(0x3bb)]();
            })) : _0x3fbe70[_0x5ab676(0x310)]('div.volume_slider')[_0x5ab676(0x298)]();
        }
        function _0x1c10b6() {
            const _0x367ad1 = _0x1a0801;
            var _0x34e923 = {
                    'en-US': {
                        'NOTICE_UPDATE_TITLE': _0x367ad1(0x3d6),
                        'NOTICE_UPDATE_CONTENT': _0x367ad1(0x1e6),
                        'CHECK_UPDATE': _0x367ad1(0x365),
                        'CHECK_UPDATE_MENU': _0x367ad1(0x2eb),
                        'CHECK_UPDATE_INTRO': _0x367ad1(0x225),
                        'RELOAD_SCRIPT': _0x367ad1(0x345),
                        'DONATE': _0x367ad1(0x23e),
                        'FEEDBACK': _0x367ad1(0x39f),
                        'NEW_TAB': _0x367ad1(0x187),
                        'SHOW_DOM_TREE': _0x367ad1(0x25f),
                        'SELECT_AND_COPY': 'Select\x20All\x20and\x20Copy\x20from\x20the\x20Input\x20Box',
                        'DOWNLOAD_DOM_TREE': 'Download\x20DOM\x20Tree\x20as\x20a\x20Text\x20File',
                        'REPORT_GITHUB': _0x367ad1(0x1b2),
                        'REPORT_DISCORD': 'Report\x20an\x20Issue\x20on\x20Discord\x20Support\x20Server',
                        'REPORT_FORK': _0x367ad1(0x24b),
                        'DEBUG': _0x367ad1(0x3d9),
                        'CLOSE': _0x367ad1(0x39b),
                        'ALL_CHECK': 'Select\x20All',
                        'BATCH_DOWNLOAD_SELECTED': _0x367ad1(0x3c5),
                        'BATCH_DOWNLOAD_DIRECT': 'Download\x20All\x20Resources',
                        'IMG': _0x367ad1(0x243),
                        'VID': _0x367ad1(0x3a4),
                        'DW': _0x367ad1(0x264),
                        'DW_ALL': _0x367ad1(0x263),
                        'THUMBNAIL_INTRO': _0x367ad1(0x2a7),
                        'LOAD_BLOB_ONE': _0x367ad1(0x2ad),
                        'LOAD_BLOB_MULTIPLE': _0x367ad1(0x1c6),
                        'LOAD_BLOB_RELOAD': _0x367ad1(0x3b0),
                        'NO_CHECK_RESOURCE': _0x367ad1(0x39a),
                        'NO_VID_URL': _0x367ad1(0x1ea),
                        'SETTING': _0x367ad1(0x23d),
                        'AUTO_RENAME': _0x367ad1(0x2a0),
                        'RENAME_SHORTCODE': _0x367ad1(0x376),
                        'RENAME_PUBLISH_DATE': _0x367ad1(0x272),
                        'RENAME_LOCATE_DATE': _0x367ad1(0x3bc),
                        'DISABLE_VIDEO_LOOPING': _0x367ad1(0x28f),
                        'HTML5_VIDEO_CONTROL': 'Display\x20HTML5\x20Video\x20Controller',
                        'REDIRECT_CLICK_USER_STORY_PICTURE': _0x367ad1(0x3cf),
                        'FORCE_FETCH_ALL_RESOURCES': _0x367ad1(0x1a3),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE': 'Directly\x20Download\x20the\x20Visible\x20Resources\x20in\x20the\x20Post',
                        'DIRECT_DOWNLOAD_ALL': _0x367ad1(0x1ca),
                        'MODIFY_VIDEO_VOLUME': 'Modify\x20Video\x20Volume\x20(Right-Click\x20to\x20Set)',
                        'SCROLL_BUTTON': 'Enable\x20Scroll\x20Buttons\x20for\x20Reels\x20Page',
                        'FORCE_RESOURCE_VIA_MEDIA': 'Force\x20Fetch\x20Resource\x20via\x20Media\x20API',
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT': _0x367ad1(0x182),
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST': _0x367ad1(0x24f),
                        'AUTO_RENAME_INTRO': 'Auto\x20rename\x20file\x20to\x20custom\x20format:\x0aCustom\x20Format\x20List:\x20\x0a%USERNAME%\x20-\x20Username\x0a%SOURCE_TYPE%\x20-\x20Download\x20Source\x0a%SHORTCODE%\x20-\x20Post\x20Shortcode\x0a%YEAR%\x20-\x20Year\x20when\x20downloaded/published\x0a%2-YEAR%\x20-\x20Year\x20(last\x20two\x20digits)\x20when\x20downloaded/published\x0a%MONTH%\x20-\x20Month\x20when\x20downloaded/published\x0a%DAY%\x20-\x20Day\x20when\x20downloaded/published\x0a%HOUR%\x20-\x20Hour\x20when\x20downloaded/published\x0a%MINUTE%\x20-\x20Minute\x20when\x20downloaded/published\x0a%SECOND%\x20-\x20Second\x20when\x20downloaded/published\x0a%ORIGINAL_NAME%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x0a%ORIGINAL_NAME_FIRST%\x20-\x20Original\x20name\x20of\x20downloaded\x20file\x20(first\x20part\x20of\x20name)\x0a\x0aIf\x20set\x20to\x20false,\x20the\x20file\x20name\x20will\x20remain\x20unchanged.\x0aExample:\x20instagram_321565527_679025940443063_4318007696887450953_n.jpg',
                        'RENAME_SHORTCODE_INTRO': 'Auto\x20rename\x20file\x20to\x20the\x20following\x20format:\x0aUSERNAME-TYPE-SHORTCODE-TIMESTAMP.FILETYPE\x0aExample:\x20instagram-photo-CwkxyiVynpW-1670350000.jpg\x0a\x0aThis\x20will\x20ONLY\x20work\x20if\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
                        'RENAME_PUBLISH_DATE_INTRO': _0x367ad1(0x39d),
                        'RENAME_LOCATE_DATE_INTRO': _0x367ad1(0x256),
                        'DISABLE_VIDEO_LOOPING_INTRO': _0x367ad1(0x2de),
                        'HTML5_VIDEO_CONTROL_INTRO': _0x367ad1(0x3de),
                        'REDIRECT_CLICK_USER_STORY_PICTURE_INTRO': _0x367ad1(0x3cc),
                        'FORCE_FETCH_ALL_RESOURCES_INTRO': _0x367ad1(0x2da),
                        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE_INTRO': _0x367ad1(0x25d),
                        'DIRECT_DOWNLOAD_ALL_INTRO': _0x367ad1(0x2cf),
                        'MODIFY_VIDEO_VOLUME_INTRO': _0x367ad1(0x2ac),
                        'SCROLL_BUTTON_INTRO': _0x367ad1(0x1ce),
                        'FORCE_RESOURCE_VIA_MEDIA_INTRO': _0x367ad1(0x373),
                        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT_INTRO': 'When\x20the\x20Media\x20API\x20reaches\x20its\x20rate\x20limit\x20or\x20cannot\x20be\x20used\x20for\x20other\x20reasons,\x20the\x20Forced\x20Fetch\x20API\x20will\x20be\x20used\x20to\x20download\x20resources\x20(the\x20resource\x20quality\x20may\x20be\x20slightly\x20lower).',
                        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST_INTRO': 'The\x20[Open\x20in\x20New\x20Tab]\x20button\x20in\x20posts\x20will\x20always\x20use\x20the\x20Media\x20API\x20to\x20obtain\x20high-resolution\x20resources.',
                        'SKIP_VIEW_STORY_CONFIRM': _0x367ad1(0x2f3),
                        'SKIP_VIEW_STORY_CONFIRM_INTRO': _0x367ad1(0x1e8)
                    }
                }, _0x141048 = Object[_0x367ad1(0x210)]({}, _0x34e923, _0x112684[_0x367ad1(0x3f7)]), _0x4c4deb = Object[_0x367ad1(0x237)](_0x141048)[_0x367ad1(0x26a)]()[_0x367ad1(0x2d3)]((_0x144990, _0x1894bf) => {
                    return _0x144990[_0x1894bf] = _0x141048[_0x1894bf], _0x144990;
                }, {});
            return _0x4c4deb;
        }
        async function _0x222269(_0xd8a1f0) {
            return new Promise((_0x2fbfce, _0x39d4c5) => {
                const _0x39b22c = a0_0x37c6;
                GM_xmlhttpRequest({
                    'method': 'GET',
                    'url': _0x39b22c(0x333) + _0xd8a1f0 + _0x39b22c(0x358),
                    'onload': function (_0x45949d) {
                        const _0x3d2c0b = _0x39b22c;
                        try {
                            let _0x52e1ca = JSON[_0x3d2c0b(0x3dc)](_0x45949d[_0x3d2c0b(0x235)]);
                            _0x2fbfce(_0x52e1ca);
                        } catch (_0x35c030) {
                            _0x39d4c5(_0x35c030);
                        }
                    },
                    'onerror': function (_0x39d0ce) {
                        const _0x2fe76e = _0x39b22c;
                        _0x1e3ab9(_0x2fe76e(0x19f), _0x2fe76e(0x290), _0x39d0ce), _0x39d4c5(_0x39d0ce);
                    }
                });
            });
        }
        function _0x2ec937(_0xaf6023) {
            const _0x379b78 = _0x1a0801, _0x327c12 = _0x1c10b6();
            return _0x327c12[_0x112684[_0x379b78(0x3d8)]] != undefined && _0x327c12[_0x112684[_0x379b78(0x3d8)]][_0xaf6023] != undefined ? _0x327c12[_0x112684[_0x379b78(0x3d8)]][_0xaf6023] : _0x327c12[_0x379b78(0x3ec)][_0xaf6023];
        }
        function _0x319255() {
            const _0x137e48 = _0x1a0801;
            _0x125fda('[data-ih-locale]')[_0x137e48(0x1d2)](function () {
                const _0x2354a3 = _0x137e48;
                _0x125fda(this)[_0x2354a3(0x323)](_0x2ec937(_0x125fda(this)['attr']('data-ih-locale')));
            }), _0x125fda('[data-ih-locale-title]')[_0x137e48(0x1d2)](function () {
                const _0xd559a3 = _0x137e48;
                _0x125fda(this)[_0xd559a3(0x223)](_0xd559a3(0x3af), _0x2ec937(_0x125fda(this)[_0xd559a3(0x223)](_0xd559a3(0x330))));
            });
        }
        _0x125fda(function () {
            const _0x10e368 = _0x1a0801;
            function _0x1d6e6e(_0x231348) {
                const _0x46286c = a0_0x37c6;
                var _0x3f0bf6 = [];
                for (var _0x1dba73 of _0x231348) {
                    _0x3f0bf6[_0x46286c(0x2ec)]({
                        'tagName': _0x1dba73[_0x46286c(0x215)],
                        'id': _0x1dba73['id'],
                        'className': _0x1dba73[_0x46286c(0x2db)]
                    });
                }
                return _0x3f0bf6;
            }
            function _0x4494c9() {
                const _0x1de43e = a0_0x37c6;
                let _0x290284 = _0x125fda(_0x1de43e(0x36b))[0x0];
                var _0x3b9b24 = '';
                _0x112684['GL_logger'][_0x1de43e(0x29c)](_0x107782 => {
                    const _0x115c30 = _0x1de43e;
                    var _0x4ffdcf = JSON[_0x115c30(0x28a)](_0x107782[_0x115c30(0x335)], function (_0x526587, _0x3e87c4) {
                        const _0x30e471 = _0x115c30;
                        if (Array[_0x30e471(0x3dd)](this)) {
                            if (typeof _0x3e87c4 === _0x30e471(0x253) && _0x3e87c4 instanceof jQuery)
                                return _0x1d6e6e(_0x3e87c4);
                            return _0x3e87c4;
                        } else
                            return _0x3e87c4;
                    }, '\x09');
                    _0x3b9b24 += new Date(_0x107782[_0x115c30(0x3fe)])[_0x115c30(0x2c8)]() + ':\x20' + _0x4ffdcf + '\x0a';
                }), _0x125fda(_0x1de43e(0x191))['text'](_0x1de43e(0x36c) + _0x3b9b24 + _0x1de43e(0x3f2) + location['pathname'] + _0x1de43e(0x1f8) + _0x290284[_0x1de43e(0x2e6)]);
            }
            _0x125fda(_0x10e368(0x3b6))['on']('click', _0x10e368(0x3c2), function () {
                _0x4494c9();
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_SELECT_DOM_TREE', function () {
                const _0x3c6fae = _0x10e368;
                _0x125fda(_0x3c6fae(0x191))[_0x3c6fae(0x24a)](), document[_0x3c6fae(0x338)](_0x3c6fae(0x3bd));
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x31f), function () {
                const _0x216d0d = _0x10e368;
                _0x125fda('.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea')[_0x216d0d(0x323)]()[_0x216d0d(0x3da)] === 0x0 && _0x4494c9();
                var _0x176b8f = _0x125fda(_0x216d0d(0x191))['text'](), _0x3336e6 = document[_0x216d0d(0x38a)]('a'), _0x3382fa = new Blob([_0x176b8f], { 'type': _0x216d0d(0x20c) });
                _0x3336e6[_0x216d0d(0x19b)] = URL[_0x216d0d(0x3ac)](_0x3382fa), _0x3336e6['download'] = _0x216d0d(0x22a) + new Date()['getTime']() + _0x216d0d(0x327), document[_0x216d0d(0x3b6)][_0x216d0d(0x3b4)](_0x3336e6), _0x3336e6[_0x216d0d(0x359)](), _0x3336e6[_0x216d0d(0x298)]();
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x3e8), function () {
                const _0x337a89 = _0x10e368;
                _0x125fda(this)['parent'](_0x337a89(0x3d3))[_0x337a89(0x3da)] > 0x0 ? _0x125fda(this)['parent']('#tempWrapper')[_0x337a89(0x3cb)](0xfa, function () {
                    const _0x582654 = _0x337a89;
                    _0x125fda(this)[_0x582654(0x298)]();
                }) : _0x125fda(_0x337a89(0x2f4))[_0x337a89(0x298)]();
            }), _0x125fda(window)['on'](_0x10e368(0x1ec), function (_0x545eaa) {
                const _0x1a1629 = _0x10e368;
                _0x545eaa['which'] == '81' && _0x545eaa[_0x1a1629(0x332)] && (_0x125fda(_0x1a1629(0x2f4))['remove'](), _0x545eaa[_0x1a1629(0x3bb)]()), _0x545eaa[_0x1a1629(0x19d)] == '87' && _0x545eaa[_0x1a1629(0x332)] && (_0x1a3f84(), _0x545eaa['preventDefault']()), _0x545eaa['which'] == '90' && _0x545eaa['altKey'] && (_0x48c5d8(), _0x545eaa[_0x1a1629(0x3bb)]()), _0x545eaa[_0x1a1629(0x19d)] == '82' && _0x545eaa['altKey'] && (_0x13af2b(), _0x545eaa[_0x1a1629(0x3bb)]()), _0x545eaa[_0x1a1629(0x19d)] == '83' && _0x545eaa['altKey'] && (location[_0x1a1629(0x19b)][_0x1a1629(0x1a0)](/^(https:\/\/www\.instagram\.com\/stories\/)/ig) && _0x125fda(_0x1a1629(0x27f))[_0x1a1629(0x3da)] > 0x0 && _0x125fda('.IG_DWSTORY')?.[_0x1a1629(0x306)](_0x1a1629(0x359)), location[_0x1a1629(0x19b)][_0x1a1629(0x1a0)](/^(https:\/\/www\.instagram\.com\/stories\/highlights\/)/ig) && _0x125fda(_0x1a1629(0x22c))[_0x1a1629(0x3da)] > 0x0 && _0x125fda(_0x1a1629(0x22c))?.[_0x1a1629(0x306)]('click'), _0x545eaa[_0x1a1629(0x3bb)]());
            }), _0x125fda('body')['on'](_0x10e368(0x3e5), _0x10e368(0x1a5), function () {
                const _0x193ee8 = _0x10e368;
                var _0x3c05ee = _0x125fda(this)[_0x193ee8(0x223)]('id');
                if (_0x3c05ee && _0x5c4373[_0x3c05ee] !== undefined) {
                    let _0x36afca = _0x125fda(this)['prop'](_0x193ee8(0x2e8));
                    GM_setValue(_0x3c05ee, _0x36afca), _0x5c4373[_0x3c05ee] = _0x36afca, console[_0x193ee8(0x1b5)]('user\x20settings', _0x3c05ee, _0x36afca);
                }
            }), _0x125fda('body')['on'](_0x10e368(0x359), '.IG_SN_DIG\x20.globalSettings', function (_0x81b0f8) {
                const _0x46c992 = _0x10e368;
                _0x125fda(this)['find']('#tempWrapper')[_0x46c992(0x3da)] > 0x0 && _0x81b0f8['preventDefault']();
            }), _0x125fda(_0x10e368(0x3b6))['on']('change', _0x10e368(0x378), function () {
                const _0x6d066f = _0x10e368;
                let _0x2ae4f0 = _0x125fda(this)[_0x6d066f(0x377)]();
                _0x125fda(this)[_0x6d066f(0x223)](_0x6d066f(0x188)) == _0x6d066f(0x392) ? _0x125fda(this)[_0x6d066f(0x2bb)]()[_0x6d066f(0x377)](_0x2ae4f0) : _0x125fda(this)[_0x6d066f(0x203)]()[_0x6d066f(0x377)](_0x2ae4f0), _0x2ae4f0 >= 0x0 && _0x2ae4f0 <= 0x1 && (_0x112684[_0x6d066f(0x250)] = _0x2ae4f0, GM_setValue(_0x6d066f(0x196), _0x2ae4f0));
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x3e9), _0x10e368(0x378), function () {
                const _0x44b598 = _0x10e368;
                if (_0x125fda(this)['attr'](_0x44b598(0x188)) == _0x44b598(0x392)) {
                    let _0x2178bd = _0x125fda(this)[_0x44b598(0x377)]();
                    _0x125fda(this)[_0x44b598(0x2bb)]()[_0x44b598(0x377)](_0x2178bd);
                } else {
                    let _0x246b9a = _0x125fda(this)['val']();
                    _0x246b9a >= 0x0 && _0x246b9a <= 0x1 ? _0x125fda(this)[_0x44b598(0x203)]()[_0x44b598(0x377)](_0x246b9a) : _0x246b9a < 0x0 ? _0x125fda(this)[_0x44b598(0x377)](0x0) : _0x125fda(this)[_0x44b598(0x377)](0x1);
                }
            }), _0x125fda(_0x10e368(0x3b6))['on']('input', _0x10e368(0x232), function () {
                const _0x3c8ae3 = _0x10e368;
                GM_setValue(_0x3c8ae3(0x219), _0x125fda(this)[_0x3c8ae3(0x377)]()), _0x112684[_0x3c8ae3(0x25a)] = _0x125fda(this)[_0x3c8ae3(0x377)]();
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), 'a[data-needed=\x22direct\x22]', function (_0xe7249d) {
                const _0x119b24 = _0x10e368;
                _0xe7249d[_0x119b24(0x3bb)](), _0x31c4e3(this);
            }), _0x125fda('body')['on']('click', _0x10e368(0x271), function () {
                const _0x324d9c = _0x10e368;
                if (_0x5c4373['FORCE_RESOURCE_VIA_MEDIA'] && _0x5c4373[_0x324d9c(0x29f)])
                    _0x31c4e3(_0x125fda(this)[_0x324d9c(0x2cb)]()['children']('a')[_0x324d9c(0x2af)]()[0x0], !![]);
                else {
                    var _0x59d14d = new URL(_0x125fda(this)['parent']()[_0x324d9c(0x248)]('a')['attr']('data-href'));
                    _0x59d14d[_0x324d9c(0x222)] = 'scontent.cdninstagram.com', _0x52438f(_0x59d14d[_0x324d9c(0x19b)]);
                }
            }), _0x125fda(_0x10e368(0x3b6))['on']('click', _0x10e368(0x3ae), function () {
                const _0xa6ee7b = _0x10e368;
                let _0x4fc433 = new Date()['getTime']();
                _0x5c4373['RENAME_PUBLISH_DATE'] && _0x125fda(this)[_0xa6ee7b(0x2cb)]()['children']('a')['attr'](_0xa6ee7b(0x30e)) && (_0x4fc433 = _0x125fda(this)[_0xa6ee7b(0x2cb)]()[_0xa6ee7b(0x248)]('a')[_0xa6ee7b(0x223)]('datetime'));
                let _0x5a0f96 = _0x125fda(this)[_0xa6ee7b(0x2cb)]()[_0xa6ee7b(0x248)]('a')[_0xa6ee7b(0x223)](_0xa6ee7b(0x241)) ?? _0x125fda(_0xa6ee7b(0x283))[_0xa6ee7b(0x323)]();
                _0x4e3748(_0x125fda(this)[_0xa6ee7b(0x2cb)]()[_0xa6ee7b(0x248)]('a')[_0xa6ee7b(0x310)](_0xa6ee7b(0x1cf))['first']()[_0xa6ee7b(0x223)](_0xa6ee7b(0x3c0)), _0x125fda(this)[_0xa6ee7b(0x2cb)]()[_0xa6ee7b(0x248)]('a')[_0xa6ee7b(0x223)](_0xa6ee7b(0x1c8)), 'thumbnail', _0x4fc433, _0xa6ee7b(0x1cb), _0x5a0f96);
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x27f), function () {
                _0x491c4b(!![]);
            }), _0x125fda(_0x10e368(0x3b6))['on']('click', _0x10e368(0x1ac), function () {
                _0x2f72ac();
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x227), function (_0x475348) {
                _0x475348['preventDefault'](), _0x491c4b(!![], !![], !![]);
            }), _0x125fda('body')['on']('click', '.IG_DWSTORY_THUMBNAIL', function () {
                _0x5f3eb9(!![]);
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x312), function (_0x584983) {
                const _0x58997d = _0x10e368;
                _0x584983[_0x58997d(0x3f9)](), _0x584edd(!![]);
            }), _0x125fda('body')['on'](_0x10e368(0x359), _0x10e368(0x22c), function () {
                _0x9e30e8(!![]);
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x2a4), function () {
                _0x355b7c();
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x35f), function (_0x40ca58) {
                const _0x3ce4d7 = _0x10e368;
                _0x40ca58[_0x3ce4d7(0x3bb)](), _0x9e30e8(!![], !![]);
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x360), function () {
                _0x517fe8(!![]);
            }), _0x125fda(_0x10e368(0x3b6))['on']('click', '.IG_REELS', function () {
                _0x4a0df3(!![], !![]);
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x3e1), function () {
                _0x4a0df3(!![], !![], !![]);
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), _0x10e368(0x27b), function () {
                _0x4a0df3(!![], ![]);
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x38f), _0x10e368(0x2f0), function (_0x336925) {
                const _0x302e04 = _0x10e368;
                if (_0x336925[_0x302e04(0x19d)] === 0x3 || _0x336925[_0x302e04(0x19d)] === 0x2) {
                    if (location[_0x302e04(0x19b)] === _0x302e04(0x3eb) && _0x5c4373[_0x302e04(0x35e)]) {
                        _0x336925[_0x302e04(0x3bb)]();
                        if (_0x125fda(this)[_0x302e04(0x310)](_0x302e04(0x2a5))[_0x302e04(0x3da)] > 0x0) {
                            const _0x302dad = 'https://www.instagram.com/' + _0x125fda(this)[_0x302e04(0x248)](_0x302e04(0x3e3))['last']()[_0x302e04(0x323)]();
                            _0x336925[_0x302e04(0x19d)] === 0x2 ? GM_openInTab(_0x302dad) : location[_0x302e04(0x19b)] = _0x302dad;
                        }
                    }
                }
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x3e5), _0x10e368(0x26f), function () {
                const _0x304bc0 = _0x10e368;
                var _0x174f61 = _0x125fda(this)['find']('input')[_0x304bc0(0x1e4)](_0x304bc0(0x2e8));
                _0x125fda(_0x304bc0(0x28d))[_0x304bc0(0x1d2)](function () {
                    _0x125fda(this)['prop']('checked', _0x174f61);
                });
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x3e5), _0x10e368(0x28d), function () {
                const _0x5c1ea6 = _0x10e368;
                var _0x3af9f5 = _0x125fda(_0x5c1ea6(0x205))[_0x5c1ea6(0x3da)], _0x9026ca = _0x125fda(_0x5c1ea6(0x28d))[_0x5c1ea6(0x3da)];
                _0x125fda('.IG_SN_DIG_TITLE\x20.checkbox')[_0x5c1ea6(0x310)](_0x5c1ea6(0x3e9))[_0x5c1ea6(0x1e4)](_0x5c1ea6(0x2e8), _0x3af9f5 == _0x9026ca);
            }), _0x125fda(_0x10e368(0x3b6))['on'](_0x10e368(0x359), '.IG_SN_DIG_TITLE\x20#batch_download_selected', function () {
                const _0x2abb83 = _0x10e368;
                let _0x1fe73e = 0x0;
                _0x125fda('.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]')['each'](function () {
                    const _0x241c02 = a0_0x37c6;
                    _0x125fda(this)['prev']()[_0x241c02(0x248)](_0x241c02(0x3e9))['prop'](_0x241c02(0x2e8)) && (_0x125fda(this)['trigger']('click'), _0x1fe73e++);
                }), _0x1fe73e == 0x0 && alert(_0x2ec937(_0x2abb83(0x341)));
            }), _0x125fda(_0x10e368(0x3b6))['on']('change', '.IG_SN_DIG_TITLE\x20#langSelect', function () {
                const _0x188c6f = _0x10e368;
                GM_setValue(_0x188c6f(0x3d8), _0x125fda(this)[_0x188c6f(0x377)]()), _0x112684[_0x188c6f(0x3d8)] = _0x125fda(this)[_0x188c6f(0x377)](), _0x112684[_0x188c6f(0x3d8)]?.[_0x188c6f(0x36f)]('en') || _0x112684[_0x188c6f(0x3f7)][_0x112684[_0x188c6f(0x3d8)]] != null ? (_0x319255(), _0x46b70b()) : _0x222269(_0x112684[_0x188c6f(0x3d8)])['then'](_0x5c2c16 => {
                    const _0x25bd7f = _0x188c6f;
                    _0x112684[_0x25bd7f(0x3f7)][_0x112684[_0x25bd7f(0x3d8)]] = _0x5c2c16, _0x319255(), _0x46b70b();
                })['catch'](_0xb904d6 => {
                    const _0x523bd5 = _0x188c6f;
                    console[_0x523bd5(0x244)]('getTranslationText\x20catch\x20error:', _0xb904d6);
                });
            }), _0x125fda(_0x10e368(0x3b6))['on']('click', '.IG_SN_DIG_TITLE\x20#batch_download_direct', function () {
                const _0x22cc11 = _0x10e368;
                _0x125fda(_0x22cc11(0x3ce))[_0x22cc11(0x1d2)](function () {
                    const _0x2cbb7f = _0x22cc11;
                    _0x125fda(this)[_0x2cbb7f(0x306)](_0x2cbb7f(0x359));
                });
            });
            const _0x22a208 = new MutationObserver(_0x42baa1 => {
                const _0x13c5ca = _0x10e368;
                for (const _0x11aae3 of _0x42baa1) {
                    _0x11aae3['type'] === _0x13c5ca(0x22b) && _0x11aae3[_0x13c5ca(0x17a)][_0x13c5ca(0x29c)](_0x1025e2 => {
                        const _0x577e12 = _0x13c5ca, _0x3b3fb1 = _0x125fda(_0x1025e2)[_0x577e12(0x310)](_0x577e12(0x1b1));
                        if (_0x3b3fb1[_0x577e12(0x3da)] > 0x0) {
                            _0x5c4373[_0x577e12(0x1d4)] && _0x3b3fb1['each'](function () {
                                _0x125fda(this)['on']('play\x20playing', function () {
                                    const _0x1c796a = a0_0x37c6;
                                    !_0x125fda(this)[_0x1c796a(0x3e7)](_0x1c796a(0x2cd)) && (_0x125fda(this)[_0x1c796a(0x223)](_0x1c796a(0x1e1), !![]), this[_0x1c796a(0x2fe)] = _0x112684[_0x1c796a(0x250)], _0x1e3ab9(_0x1c796a(0x2d7)));
                                });
                            });
                            if (location[_0x577e12(0x1bf)][_0x577e12(0x1a0)](/^(\/stories\/)/ig)) {
                                const _0x391ec5 = location[_0x577e12(0x1bf)]['match'](/^(\/stories\/highlights\/)/ig) != null, _0x539150 = _0x391ec5 ? _0x577e12(0x339) : _0x577e12(0x251);
                                _0x3b3fb1[_0x577e12(0x1d2)](function () {
                                    const _0x2d6e25 = _0x577e12;
                                    _0x125fda(this)['on'](_0x2d6e25(0x34f), function () {
                                        const _0x3235c3 = _0x2d6e25;
                                        if (!_0x125fda(this)[_0x3235c3(0x3e7)](_0x3235c3(0x267))) {
                                            let _0x4f3996 = _0x125fda(this);
                                            _0x4f3996[_0x3235c3(0x258)](_0x3235c3(0x3a5))[_0x3235c3(0x1b7)](function () {
                                                const _0x1306d2 = _0x3235c3;
                                                return _0x125fda(this)[_0x1306d2(0x252)]() == _0x4f3996[_0x1306d2(0x252)]();
                                            })['find']('.IG_DWSTORY_THUMBNAIL,\x20.IG_DWHISTORY_THUMBNAIL')[_0x3235c3(0x3da)] === 0x0 ? (_0x125fda(this)[_0x3235c3(0x223)](_0x3235c3(0x34d), !![]), _0x391ec5 ? _0x517fe8(![]) : _0x5f3eb9(![]), _0x1e3ab9('(' + _0x539150 + ')', _0x3235c3(0x1fb))) : (_0x125fda(this)['attr'](_0x3235c3(0x34d), !![]), _0x1e3ab9('(' + _0x539150 + ')', 'Thumbnail\x20button\x20already\x20inserted'));
                                        }
                                    });
                                    var _0x111d9d = _0x125fda(this);
                                    if (_0x5c4373[_0x2d6e25(0x20d)]) {
                                        if (!_0x111d9d['data']('controls')) {
                                            _0x1e3ab9('(' + _0x539150 + ')', _0x2d6e25(0x190));
                                            _0x5c4373[_0x2d6e25(0x1d4)] && (this['volume'] = _0x112684[_0x2d6e25(0x250)], _0x111d9d['on']('loadstart', function () {
                                                const _0x2dbaee = _0x2d6e25;
                                                this[_0x2dbaee(0x2fe)] = _0x112684['videoVolume'];
                                            }));
                                            let _0x51de02 = _0x111d9d[_0x2d6e25(0x258)]('div')[_0x2d6e25(0x1b7)](function () {
                                                    const _0xfa9286 = _0x2d6e25;
                                                    return _0x125fda(this)[_0xfa9286(0x223)](_0xfa9286(0x3c1)) == null && _0x125fda(this)[_0xfa9286(0x223)]('style') == null;
                                                })[_0x2d6e25(0x2af)](), _0x28735d = _0x51de02[_0x2d6e25(0x2bb)]();
                                            _0x28735d[_0x2d6e25(0x31a)]();
                                            let _0x58f14c = _0x51de02[_0x2d6e25(0x310)](_0x2d6e25(0x3d7));
                                            _0x58f14c[_0x2d6e25(0x31a)]();
                                            const _0x18e068 = function (_0x545bf4) {
                                                const _0x32ce7 = _0x2d6e25;
                                                _0x545bf4['preventDefault'](), _0x111d9d[_0x32ce7(0x245)](_0x32ce7(0x21c), '2'), _0x111d9d[_0x32ce7(0x223)](_0x32ce7(0x389), !![]), _0x58f14c['hide'](), _0x28735d['hide'](), _0x10d9c8(_0x111d9d, _0x111d9d[_0x32ce7(0x258)](_0x32ce7(0x3a5))[_0x32ce7(0x1b7)](function () {
                                                    return _0x125fda(this)['width']() == _0x111d9d['width']();
                                                })[_0x32ce7(0x2af)](), _0x539150, 'vertical');
                                            };
                                            _0x111d9d[_0x2d6e25(0x2cb)]()['find']('video\x20+\x20div')['on'](_0x2d6e25(0x211), _0x18e068), _0x58f14c['on'](_0x2d6e25(0x211), _0x18e068), _0x28735d['on'](_0x2d6e25(0x211), _0x18e068), _0x111d9d['on'](_0x2d6e25(0x211), function (_0xbbda92) {
                                                const _0x513e55 = _0x2d6e25;
                                                _0xbbda92[_0x513e55(0x3bb)](), _0x111d9d[_0x513e55(0x245)](_0x513e55(0x21c), '-1'), _0x111d9d[_0x513e55(0x386)](_0x513e55(0x389)), _0x28735d[_0x513e55(0x2ef)](), _0x58f14c[_0x513e55(0x2ef)](), _0x10d9c8(_0x111d9d, _0x111d9d[_0x513e55(0x258)](_0x513e55(0x3a5))[_0x513e55(0x1b7)](function () {
                                                    return _0x125fda(this)['width']() == _0x111d9d['width']();
                                                })[_0x513e55(0x2af)](), _0x539150, _0x513e55(0x35a));
                                            }), _0x111d9d['on'](_0x2d6e25(0x1bb), function () {
                                                const _0x17f443 = _0x2d6e25;
                                                let _0x4dcf7e = _0x51de02[_0x17f443(0x2cb)]()[_0x17f443(0x310)](_0x17f443(0x247))[_0x17f443(0x258)](_0x17f443(0x36d))['first']();
                                                var _0x16fc6c = _0x4dcf7e['find'](_0x17f443(0x1e5))[_0x17f443(0x3da)] === 0x0;
                                                this['muted'] != _0x16fc6c && (this[_0x17f443(0x2fe)] = _0x112684['videoVolume'], _0x4dcf7e?.[_0x17f443(0x306)](_0x17f443(0x359))), _0x125fda(this)[_0x17f443(0x223)](_0x17f443(0x2c3)) && (_0x112684[_0x17f443(0x250)] = this['volume'], GM_setValue('G_VIDEO_VOLUME', this[_0x17f443(0x2fe)])), this['volume'] == _0x112684[_0x17f443(0x250)] && _0x125fda(this)[_0x17f443(0x223)]('data-completed', !![]);
                                            }), _0x111d9d[_0x2d6e25(0x245)](_0x2d6e25(0x3e0), _0x2d6e25(0x2b7)), _0x111d9d[_0x2d6e25(0x245)](_0x2d6e25(0x21c), '2'), _0x111d9d[_0x2d6e25(0x223)](_0x2d6e25(0x2b4), !![]), _0x111d9d[_0x2d6e25(0x223)](_0x2d6e25(0x389), !![]);
                                        }
                                    } else
                                        _0x10d9c8(_0x111d9d, _0x111d9d[_0x2d6e25(0x258)](_0x2d6e25(0x3a5))['filter'](function () {
                                            const _0x212ad1 = _0x2d6e25;
                                            return _0x125fda(this)[_0x212ad1(0x252)]() == _0x111d9d[_0x212ad1(0x252)]();
                                        })[_0x2d6e25(0x2af)](), _0x539150, 'vertical');
                                });
                            }
                        }
                    });
                }
            });
            _0x22a208[_0x10e368(0x2e4)](_0x125fda(_0x10e368(0x36b))[0x0], {
                'childList': !![],
                'subtree': !![]
            });
        });
    }, 0x445c);
}(jQuery));
function a0_0x37c6(_0x3e75f0, _0xa32cee) {
    const _0x5f4002 = a0_0x5f40();
    return a0_0x37c6 = function (_0x37c64d, _0x361a00) {
        _0x37c64d = _0x37c64d - 0x178;
        let _0x2aaec4 = _0x5f4002[_0x37c64d];
        return _0x2aaec4;
    }, a0_0x37c6(_0x3e75f0, _0xa32cee);
}
function a0_0x5f40() {
    const _0x938b10 = [
        'observe',
        'body\x20>\x20div\x20section:visible._ac0a',
        'innerHTML',
        '<span\x20style=\x22display:block;text-align:center;\x22>',
        'checked',
        '\x20child',
        'before',
        'Checking\x20for\x20Updates',
        'push',
        'reels',
        'undefined',
        'show',
        'button[role=\x22menuitem\x22],\x20div[role=\x22menuitem\x22],\x20ul\x20>\x20li[tabindex=\x22-1\x22]\x20>\x20div[role=\x22button\x22]',
        'instagram.com/reels/',
        '/accounts/login',
        'Skip\x20the\x20Confirmation\x20Page\x20for\x20Viewing\x20a\x20Story/Highlight',
        '.IG_SN_DIG',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div\x20#langSelect',
        'Request\x20with:',
        'carousel_media',
        'getTime',
        'getSeconds',
        'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x207\x20XL)Build/RP1A.20845.002;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/5.0\x20Chrome/117.0.5938.60\x20Mobile\x20Safari/537.36\x20Instagram\x20307.0.0.34.111',
        '.SNKMS_IG_DW_ALL_MAIN',
        '5799108QPQeHs',
        'responseText',
        'volume',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY',
        'div#scrollview',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-globalIndex=\x22',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        '<label\x20class=\x22inner_box_wrapper\x22><input\x20class=\x22inner_box\x22\x20type=\x22checkbox\x22><span></span></label>',
        'https://i.instagram.com/api/v1/users/',
        'shortcode_media',
        'trigger',
        'video_resources',
        'hidden',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-down',
        'IG\x20Debug\x20DOM\x20Tree',
        'body\x20>\x20div\x20section:visible\x20div.x1ned7t2.x78zum5\x20>\x20div',
        '><div\x20class=\x22chbtn\x22><div\x20class=\x22rounds\x22></div></div></label>',
        'version',
        'datetime',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20pause()',
        'find',
        '\x22\x20data-globalIndex=\x22',
        '.IG_DWPROFILE',
        'DIRECT_DOWNLOAD_ALL',
        'FORCE_FETCH_ALL_RESOURCES',
        'data-href',
        'data-snig',
        'Can\x20not\x20find\x20open\x20tab\x20url.',
        'SHOW_DOM_TREE',
        'NEW_TAB',
        'hide',
        'addClass',
        'GM_unregisterMenuCommand',
        'isStory',
        'replaceAll',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DOWNLOAD_DOM_TREE',
        'DOWNLOAD_ALL',
        '\x22\x20class=\x22SNKMS_IG_THUMBNAIL_MAIN\x22>',
        'getStories()',
        'text',
        'Unable\x20to\x20retrieve\x20content\x20because\x20the\x20API\x20was\x20redirected\x20to\x20\x22',
        'textContent',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20._ac0l\x20a\x20+\x20div\x20a',
        '.txt',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_SELECT_DOM_TREE\x22><a>',
        '.button_wrapper',
        'registerMenuIds',
        'Could\x20not\x20find\x20version\x20in\x20the\x20remote\x20script.',
        'getUserId()',
        'getMinutes',
        'off',
        '.xpgaw4o',
        'data-ih-locale-title',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_DOWNLOAD_DOM_TREE\x22><a>',
        'altKey',
        'https://raw.githubusercontent.com/SN-Koarashi/ig-helper/master/locale/translations/',
        '.x1iyjqo2\x20>\x20div\x20>\x20div:last-child\x20>\x20div',
        'content',
        '<div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'slice',
        'execCommand',
        'highlight',
        'url',
        'message',
        'https://www.instagram.com/graphql/query/?query_hash=2c4c2e343a8f64c625ba02b2aa12c7f8&variables=%7B%22shortcode%22:%22',
        'https://i.instagram.com/api/v1/media/',
        'stories',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20height=\x22512\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x22512\x22><circle\x20cx=\x228.25\x22\x20cy=\x225.25\x22\x20r=\x22.5\x22/><path\x20d=\x22m8.25\x206.5c-.689\x200-1.25-.561-1.25-1.25s.561-1.25\x201.25-1.25\x201.25.561\x201.25\x201.25-.561\x201.25-1.25\x201.25zm0-1.5c-.138\x200-.25.112-.25.25\x200\x20.275.5.275.5\x200\x200-.138-.112-.25-.25-.25z\x22/><path\x20d=\x22m7.25\x2011.25\x202-2.5\x202.25\x201.5\x202.25-3.5\x203\x204.5z\x22/><path\x20d=\x22m16.75\x2012h-9.5c-.288\x200-.551-.165-.676-.425s-.09-.568.09-.793l2-2.5c.243-.304.678-.372\x201.002-.156l1.616\x201.077\x201.837-2.859c.137-.212.372-.342.625-.344.246-.026.49.123.63.334l3\x204.5c.153.23.168.526.037.77-.13.244-.385.396-.661.396zm-4.519-1.5h3.118l-1.587-2.381zm-3.42\x200h1.712l-1.117-.745z\x22/><path\x20d=\x22m22.25\x2014h-2.756c-.778\x200-1.452.501-1.676\x201.247l-.859\x202.862c-.16.533-.641.891-1.197.891h-7.524c-.556\x200-1.037-.358-1.197-.891l-.859-2.861c-.224-.747-.897-1.248-1.676-1.248h-2.756c-.965\x200-1.75.785-1.75\x201.75v5.5c0\x201.517\x201.233\x202.75\x202.75\x202.75h18.5c1.517\x200\x202.75-1.233\x202.75-2.75v-5.5c0-.965-.785-1.75-1.75-1.75z\x22/><path\x20d=\x22m4\x2012c-.552\x200-1-.448-1-1v-8c0-1.654\x201.346-3\x203-3h12c1.654\x200\x203\x201.346\x203\x203v8c0\x20.552-.448\x201-1\x201s-1-.448-1-1v-8c0-.551-.449-1-1-1h-12c-.551\x200-1\x20.449-1\x201v8c0\x20.552-.448\x201-1\x201z\x22/></svg>',
        'DEBUG',
        'NO_CHECK_RESOURCE',
        'pause',
        '#_SNLOAD',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_DISCORD\x22><a\x20href=\x22https://discord.gg/q3KT4hdq8x\x22\x20target=\x22_blank\x22>',
        'Reload\x20Script',
        'boolean',
        '</option>',
        'append',
        '<a\x20media-id=\x22',
        'GL_observer',
        'GraphSidecar',
        'a[href^=\x22/\x22]',
        'data-modify-thumbnail',
        'searchParams',
        'timeupdate',
        'G_CHECK_TIMESTAMP',
        'DISABLE_VIDEO_LOOPING',
        '<input\x20value=\x22',
        '\x22\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x221\x22\x20step=\x220.05\x22\x20/>',
        'Adding\x20video\x20event\x20listener\x20#loop,\x20then\x20paused\x20click()',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/64px-Instagram_icon.png',
        '</span></div>',
        '92184hXpWlX',
        '.json',
        'click',
        'vertical',
        'display_resources',
        'substr',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper\x20>\x20.button-up',
        'REDIRECT_CLICK_USER_STORY_PICTURE',
        '.IG_DWHINEWTAB',
        '.IG_DWHISTORY_THUMBNAIL',
        'canDownload',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20#scrollWrapper',
        '<button\x20id=\x22batch_download_selected\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_SELECTED\x22>',
        '(reel)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'Checking\x20for\x20Script\x20Updates',
        '<p\x20id=\x22_SNLOAD\x22>',
        'padEnd',
        'setAttribute',
        'loadstart',
        '</span>]</div><div\x20style=\x22line-height:\x2018px;\x22>IG\x20Helper\x20v',
        'div[id^=\x22mount\x22]',
        'Logger:\x0a',
        '[role=\x22button\x22]',
        'getBlobMediaWithQuery()',
        'startsWith',
        'Fetch\x20from\x20memory\x20cache:',
        'getBlobMediaWithQueryID()',
        'Can\x20not\x20find\x20download\x20url.',
        'The\x20Media\x20API\x20will\x20try\x20to\x20get\x20the\x20highest\x20quality\x20photo\x20or\x20video\x20possible,\x20but\x20it\x20may\x20take\x20longer\x20to\x20load.',
        'img[referrerpolicy]',
        'status',
        'Rename\x20the\x20File\x20and\x20Include\x20Shortcode',
        'val',
        '.IG_SN_DIG\x20#tempWrapper\x20input:not(#date_format)',
        'taken_at_timestamp',
        '(story)\x20Thumbnail\x20button\x20is\x20not\x20present\x20for\x20this\x20picture',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[class][style]\x20>\x20div[style]:not([class])',
        'isHighlightsStory',
        'data-type',
        'smooth',
        'scontent.cdninstagram.com',
        'srcset',
        '\x22\x20class=\x22IG_DWSTORY_ALL\x22>',
        'mouseenter',
        '6490330FgxKmG',
        'div\x20>\x20ul._acay',
        'body\x20>\x20div\x20section:visible\x20._ac0k\x20>\x20._ac3r\x20>\x20div',
        'removeAttr',
        '%USERNAME%-%SOURCE_TYPE%-%SHORTCODE%-%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%_%ORIGINAL_NAME_FIRST%',
        'button[type=\x22button\x22],\x20div[role=\x22button\x22]',
        'controls',
        'createElement',
        'NOPATH',
        'DIV',
        'cursor',
        'carousel_media:\x20undefined\x20username',
        'mousedown',
        'div[role=\x22presentation\x22]\x20>\x20div\x20svg\x20>\x20path[d^=\x22M5.888\x22]',
        '(story)\x20Manually\x20removing\x20thumbnail\x20button',
        'range',
        '\x22\x20class=\x22IG_REELS_THUMBNAIL\x22>',
        '</a>',
        'getMediaInfo()',
        'load',
        'section\x20>\x20main[role=\x22main\x22]',
        'download',
        '_INTRO',
        'You\x20need\x20to\x20select\x20a\x20resource\x20to\x20download.',
        'Close',
        'thumbnail',
        'Sets\x20the\x20timestamp\x20in\x20the\x20file\x20rename\x20format\x20to\x20the\x20resource\x20publish\x20date\x20(browser\x20time\x20zone).\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_FORK\x22><a\x20href=\x22https://greasyfork.org/en/scripts/404535-ig-helper/feedback\x22\x20target=\x22_blank\x22>',
        'Feedback',
        '\x22\x20datetime=\x22',
        '0px',
        '<a\x20datetime=\x22',
        'getBlobMedia()',
        'Video',
        'div[style][class]',
        'LOAD_BLOB_MULTIPLE',
        'article[data-snig=\x22canDownload\x22],\x20div[data-snig=\x22canDownload\x22]',
        'pageLoaded',
        'candidates',
        'Feedback\x20Options',
        'SELECT_AND_COPY',
        'createObjectURL',
        'isIntersecting',
        '.IG_SN_DIG_BODY\x20.videoThumbnail',
        'title',
        'Detecting\x20Blob\x20Media,\x20reloading...',
        'reels_media',
        'USE_BLOB_FETCH_WHEN_MEDIA_RATE_LIMIT',
        'user',
        'appendChild',
        'CLOSE',
        'body',
        '<svg\x20width=\x2226\x22\x20height=\x2226\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20id=\x22bold\x22\x20enable-background=\x22new\x200\x200\x2024\x2024\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22m14.828\x2012\x205.303-5.303c.586-.586.586-1.536\x200-2.121l-.707-.707c-.586-.586-1.536-.586-2.121\x200l-5.303\x205.303-5.303-5.304c-.586-.586-1.536-.586-2.121\x200l-.708.707c-.586.586-.586\x201.536\x200\x202.121l5.304\x205.304-5.303\x205.303c-.586.586-.586\x201.536\x200\x202.121l.707.707c.586.586\x201.536.586\x202.121\x200l5.303-5.303\x205.303\x205.303c.586.586\x201.536.586\x202.121\x200l.707-.707c.586-.586.586-1.536\x200-2.121z\x22></path></svg>',
        'media-id',
        '</div>',
        '.videoThumbnail',
        'preventDefault',
        'Modify\x20Renamed\x20File\x20Timestamp\x20Date\x20Format\x20(Right-Click\x20to\x20Set)',
        'copy',
        'getMonth',
        '__typename',
        'src',
        'class',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20.IG_DISPLAY_DOM_TREE',
        '_acnb',
        'body\x20>\x20div\x20section:visible\x20img[referrerpolicy][class],\x20body\x20>\x20div\x20section:visible\x20img[crossorigin][class]:not([alt])',
        'Download\x20Selected\x20Resources',
        'div#splash-screen',
        'RENAME_PUBLISH_DATE',
        'GL_dataCache',
        'DOWNLOAD_DOM_TREE',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY',
        'fadeOut',
        'Redirect\x20to\x20a\x20user\x27s\x20profile\x20page\x20when\x20right-clicking\x20on\x20their\x20avatar\x20in\x20the\x20story\x20area\x20on\x20the\x20homepage.\x0aIf\x20you\x20use\x20the\x20middle\x20mouse\x20button\x20to\x20click,\x20it\x20will\x20open\x20in\x20a\x20new\x20tab.',
        'body\x20>\x20div\x20section:visible\x20time[datetime][class]',
        '.IG_SN_DIG_BODY\x20a[data-needed=\x22direct\x22]',
        'Redirect\x20When\x20Clicking\x20on\x20User\x27s\x20Story\x20Picture',
        'edge_sidecar_to_children',
        '\x22\x20class=\x22IG_DWHISTORY_ALL\x22>',
        'a[href^=\x22/p/\x22]',
        '#tempWrapper',
        'https://www.instagram.com/reel/',
        '3sITuSj',
        'Wololo!\x20New\x20version\x20released.',
        'div[class][role=\x22button\x22]',
        'lang',
        'Debug\x20Window',
        'length',
        '\x22\x20href=\x22javascript:;\x22\x20data-href=\x22',
        'parse',
        'isArray',
        'Display\x20the\x20HTML5\x20video\x20controller\x20in\x20video\x20resource.\x0a\x0aThis\x20will\x20hide\x20the\x20custom\x20video\x20volume\x20slider\x20and\x20replace\x20it\x20with\x20the\x20HTML5\x20controller.\x20The\x20HTML5\x20controller\x20can\x20be\x20hidden\x20by\x20right-clicking\x20on\x20the\x20video\x20to\x20reveal\x20the\x20original\x20details.',
        '._aagv\x20img',
        'position',
        '.IG_REELS_NEWTAB',
        'SKIP_VIEW_STORY_CONFIRM',
        'div',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22m191\x20208c-1-5-6-8-10-8l-42\x200\x200-184c0-8-5-15-11-15l-42\x200c-6\x200-11\x207-11\x2015l0\x20184-42\x200c-4\x200-8\x203-9\x208c-2\x206-1\x2012\x201\x2016l74\x20105c2\x203\x205\x205\x208\x205s6-2\x208-5l74-105c2-4\x204-9\x202-16z\x22></g></g><g><g><path\x20d=\x22m486.3\x20208c-1-5-6-8-10-8l-42\x200\x200-184c0-8-5-15-11-15l-43\x200c-6\x200-11\x207-11\x2015l0\x20184-41\x200c-4\x200-8\x203-9\x208c-2\x206-1\x2012\x201\x2016l74\x20105c2\x203\x205\x205\x208\x205s6-2\x208-5l74-105c2-4\x204-9\x202-16z\x22></g></g><g><g><path\x20d=\x22m342.3\x20299c-1-5-6-8-10-8l-42\x200\x200-275c0-8-5-15-11-15l-42\x200c-6\x200-11\x207-11\x2015l0\x20275-42\x200c-4\x200-8\x203-9\x208c-2\x206-1\x2012\x201\x2016l74\x20105c2\x203\x205\x205\x208\x205s6-2\x208-5l74-105c2-4\x204-9\x202-16z\x22></g></g><g><g><path\x20d=\x22m422.79\x20380.79l0\x2074.12-338.83\x200\x200-74.12-67.34\x200\x200\x2089.45c0\x2023\x2014.73\x2040.89\x2033.67\x2040.89l408.28\x200c18.94\x200\x2033.67-17.89\x2033.67-40.89l0-89.45-69.45\x200z\x22/></g></g></svg>',
        'change',
        '\x22><span\x20data-ih-locale=\x22',
        'data',
        '.IG_SN_DIG_BTN,\x20.IG_SN_DIG_BG',
        'input',
        'includes',
        'https://www.instagram.com/',
        'en-US',
        'video_url',
        '266276VIgXmb',
        '</p>',
        'body\x20>\x20div\x20section._ac0a',
        'video\x20volume\x20changed\x20#slider',
        '\x0a-----\x0a\x0aLocation:\x20',
        'x1lix1fw',
        '._acnb',
        'is_video',
        'GL_referrer',
        'locale',
        'INTERNAL_CSS',
        'stopPropagation',
        'THUMBNAIL_INTRO',
        'GL_registerEventList',
        'split',
        '.IG_DWSTORY_THUMBNAIL',
        'time',
        'div[id^=\x22mount\x22]\x20section\x20>\x20div\x20>\x20a[href=\x22/\x22]',
        'Remote\x20version:\x20',
        'addedNodes',
        '\x22\x20class=\x22IG_DWNEWTAB\x22>',
        'hostname',
        '\x22\x20value=\x22box\x22\x20type=\x22checkbox\x22\x20',
        'map',
        'onReadyMyDW()\x20Timer',
        'header\x20>\x20div:last-child\x20>\x20div:first-child\x20span\x20a',
        '<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20x=\x220px\x22\x20y=\x220px\x22\x20viewBox=\x220\x200\x20512\x20512\x22\x20style=\x22enable-background:new\x200\x200\x20512\x20512;\x22\x20xml:space=\x22preserve\x22><g><g><path\x20d=\x22M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64\x20\x20\x20\x20c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472\x20\x20\x20\x20c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z\x22/></g></g><g><g><path\x20d=\x22M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z\x22/></g></g>',
        'Use\x20Alternative\x20Methods\x20to\x20Download\x20When\x20the\x20Media\x20API\x20is\x20Not\x20Accessible',
        'onHighlightsStory',
        'div:last-child',
        '\x22\x20/>',
        'removeClass',
        'Open\x20in\x20New\x20Tab',
        'type',
        'display_url',
        'body\x20>\x20div\x20div:not([hidden])\x20section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div',
        'items',
        '<div\x20data-ih-locale-title=\x22DW\x22\x20title=\x22',
        '\x22\x20class=\x22IG_DWHISTORY_THUMBNAIL\x22>',
        'Fetch\x20failed\x20from\x20Media\x20API.\x20API\x20response\x20message:\x20',
        '<label\x20class=\x22checkbox\x22><input\x20value=\x22yes\x22\x20type=\x22checkbox\x22\x20/><span\x20data-ih-locale=\x22ALL_CHECK\x22>',
        'Added\x20video\x20html5\x20contorller\x20#modify',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20textarea',
        '<select\x20id=\x22langSelect\x22></select><div\x20style=\x22font-size:\x2012px;\x22>Some\x20texts\x20are\x20machine-translated\x20and\x20may\x20be\x20inaccurate;\x20translation\x20contributions\x20are\x20welcome\x20on\x20GitHub.</div>',
        'last',
        '\x22\x20class=\x22SNKMS_IG_NEWTAB_MAIN\x22>',
        '._acay',
        'G_VIDEO_VOLUME',
        '%22%5D,%22precomposed_overlay%22:false%7D',
        'after',
        'profile_pic_url',
        '12ffNXLG',
        'href',
        '<div\x20class=\x22button_wrapper\x22>',
        'which',
        'www.',
        'getTranslationText()',
        'match',
        '%22,%22__relay_internal__pv__PolarisFeedShareMenurelayprovider%22:true,%22__relay_internal__pv__PolarisIsLoggedInrelayprovider%22:true}',
        '.SNKMS_IG_THUMBNAIL_MAIN',
        'Force\x20Fetch\x20All\x20Resources\x20in\x20the\x20Post',
        '\x22\x20class=\x22IG_DWHINEWTAB\x22>',
        '.IG_SN_DIG\x20input',
        '\x22\x20data-name=\x22photo\x22\x20data-type=\x22jpg\x22\x20data-username=\x22',
        'tempFetchRateLimit',
        'hasClass',
        'target',
        'div:not([class]):not([style])',
        '.circle_wrapper',
        '.IG_DWSTORY_ALL',
        '[data-snig]',
        'currentURL',
        'loop',
        '</span>\x20',
        'video',
        'Report\x20an\x20Issue\x20on\x20GitHub',
        '.IG_SN_DIG\x20.IG_SN_DIG_TITLE\x20>\x20div',
        'GL_logger',
        'log',
        '/info/',
        'filter',
        'code',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20div\x20>\x20section\x20>\x20main\x20div:not([class]):not([style])\x20>\x20div\x20>\x20article',
        '\x22\x20class=\x22IG_DWPROFILE\x22>',
        'volumechange',
        'DW_ALL',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE',
        'trim',
        'pathname',
        'selected',
        'section:visible\x20>\x20div\x20>\x20div[style]:not([class])',
        'shortcode',
        'https://www.instagram.com/graphql/query/?query_hash=45246d3fe16ccc6577e0bd297a5db1ab&variables=%7B%22highlight_reel_ids%22:%5B%22',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale-title=\x22VID\x22>',
        'Current\x20version:\x20',
        'Loading\x20Blob\x20Media\x20and\x20Others...',
        '.IG_SN_DIG\x20#post_info',
        'data-username',
        'stp',
        'Directly\x20Download\x20All\x20Resources\x20in\x20the\x20Post',
        'jpg',
        'data-remove-thumbnail',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20input[id=\x22',
        'Enable\x20scroll\x20buttons\x20for\x20the\x20lower\x20right\x20corner\x20of\x20the\x20Reels\x20page.',
        'img',
        'header\x20>\x20*[class]:first-child\x20img[alt]:not([draggable])',
        'repeating\x20to\x20call\x20detection\x20createDownloadButton()',
        'each',
        'LOAD_BLOB_ONE',
        'MODIFY_VIDEO_VOLUME',
        'undefined\x20username',
        'DIRECT_DOWNLOAD_VISIBLE_RESOURCE',
        '</span>\x20<input\x20id=\x22',
        '20000',
        'get',
        'https://i.instagram.com/api/v1/users/web_profile_info/?username=',
        'then',
        '<div><input\x20type=\x22range\x22\x20max=\x221\x22\x20min=\x220\x22\x20step=\x220.05\x22\x20value=\x22',
        'config_width',
        'LOCALE_MANIFEST',
        'owner',
        'DOWNLOAD',
        'data-modify',
        'remove-thumbnail',
        'getDate',
        'prop',
        'svg\x20>\x20path[d^=\x22M16.636\x22]',
        'IG-Helper\x20has\x20released\x20a\x20new\x20version,\x20click\x20here\x20to\x20update.',
        'userAgent',
        'Automatically\x20skip\x20when\x20confirmation\x20page\x20is\x20shown\x20in\x20story\x20or\x20highlight.',
        'div.volume_slider',
        'Cannot\x20find\x20video\x20URL.',
        '<div\x20class=\x22IG_SN_DIG\x20',
        'keydown',
        'hasReferrer',
        '<div\x20class=\x22volume_slider\x20',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20app\x20id\x20is\x20invalid.',
        'ended',
        'svg',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_BODY\x20a',
        'userLanguage',
        'div[role=\x22presentation\x22]\x20>\x20div[role=\x22button\x22]\x20>\x20div',
        '</a></button>',
        'style',
        '\x22\x20class=\x22videoThumbnail\x22>',
        '\x0aDOM\x20Tree\x20with\x20div#mount:\x0a',
        'get\x20username\x20failed,\x20replace\x20with\x20default\x20string,\x20error\x20message:',
        'button[role=\x22button\x22],\x20div[role=\x22button\x22]',
        'Manually\x20inserting\x20thumbnail\x20button',
        '\x22\x20data-name=\x22video\x22\x20data-type=\x22mp4\x22\x20data-username=\x22',
        'top',
        'SETTING',
        'VID',
        'query_hash',
        'getPostOwner()',
        '</div><div\x20id=\x22post_info\x22\x20style=\x22line-height:\x2014px;font-size:14px;\x22>Post\x20ID:\x20<span\x20id=\x22article-id\x22></span></div><div\x20class=\x22IG_SN_DIG_BTN\x22>',
        'prev',
        'firstStarted',
        '.IG_SN_DIG_BODY\x20.inner_box:checked',
        'updatenotification',
        '<textarea\x20style=\x22font-family:\x20monospace;width:100%;box-sizing:\x20border-box;height:300px;background:\x20transparent;\x22\x20readonly></textarea>',
        'GraphImage',
        'body\x20>\x20div\x20section._ac0a\x20header._ac0k\x20>\x20._ac3r\x20._ac3n\x20._ac3p[style]',
        'getUserIdWithAgent()',
        '_ac3q',
        'text/plain',
        'HTML5_VIDEO_CONTROL',
        'language',
        'node',
        'assign',
        'contextmenu',
        '<div\x20data-ih-locale-title=\x22NEW_TAB\x22\x20title=\x22',
        '<div></div>',
        '2164392fGwsSP',
        'tagName',
        '(post)\x20Added\x20video\x20event\x20listener\x20#modify',
        '\x22\x20class=\x22IG_REELS_NEWTAB\x22>',
        '--ig-track-progress:\x20',
        'G_RENAME_FORMAT',
        'svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x22],\x20svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x22]',
        'avatar',
        'z-index',
        'getHighlightStories()',
        'muted',
        'bottom',
        '<button\x20style=\x22margin:\x203px;\x22\x20class=\x22IG_REPORT_GITHUB\x22><a\x20href=\x22https://github.com/SN-Koarashi/ig-helper/issues\x22\x20target=\x22_blank\x22>',
        '\x22\x20class=\x22IG_DWSTORY\x22>',
        'host',
        'attr',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22IMG\x22>',
        'Check\x20for\x20updates\x20when\x20the\x20script\x20is\x20triggered\x20(check\x20every\x20300\x20seconds).\x0aUpdate\x20notifications\x20will\x20be\x20sent\x20as\x20desktop\x20notifications\x20through\x20the\x20browser.',
        'username',
        '.IG_DWNEWTAB',
        'GL_postPath',
        '.IG_SN_DIG\x20.IG_SN_DIG_MAIN\x20.IG_SN_DIG_TITLE\x20>\x20div#button_group',
        'DOMTree-',
        'childList',
        '.IG_DWHISTORY',
        'x1iyjqo2',
        'relative',
        'main\x20timer\x20re-register\x20completed',
        'toString',
        '%22}',
        '.IG_SN_DIG\x20#tempWrapper\x20input#date_format',
        '37px',
        '742qDRQsb',
        'response',
        'body\x20>\x20div\x20section:visible\x20>\x20div\x20>\x20div:not([class])\x20>\x20div\x20>\x20div\x20div.x1ned7t2.x78zum5\x20div.x1caxmr6',
        'keys',
        'data-name',
        'wrap',
        '(post)\x20Added\x20video\x20html5\x20contorller\x20#modify',
        'warn',
        'users',
        'Settings',
        'Donate',
        'height',
        '\x22\x20/><br/>-\x20<span\x20data-ih-locale=\x22VID\x22>',
        'data-path',
        'header\x20>\x20*[class]:first-child\x20img[alt]',
        'Image',
        'error',
        'css',
        'body\x20>\x20div\x20section\x20video.xh8yej3',
        'svg\x20>\x20path[d^=\x22M1.5\x2013.3c-.8\x200-1.5.7-1.5\x201.5v18.4c0\x22],\x20svg\x20>\x20path[d^=\x22M16.636\x207.028a1.5\x201.5\x22]',
        'children',
        'header\x20>\x20*[class]:first-child\x20img[alt][draggable]',
        'select',
        'Report\x20an\x20Issue\x20on\x20Greasy\x20Fork',
        'video\x20+\x20div\x20>\x20div',
        'section:visible\x20>\x20div\x20div[style]:not([class])\x20>\x20div:not([data-visualcompletion=\x22loading-state\x22])',
        'mp4',
        'Always\x20Use\x20Media\x20API\x20for\x20\x27Open\x20in\x20New\x20Tab\x27\x20in\x20Posts',
        'videoVolume',
        'story',
        'width',
        'object',
        '(post)\x20Added\x20video\x20event\x20listener\x20#loop',
        'isReels',
        'Modify\x20the\x20renamed\x20file\x20timestamp\x20date\x20format\x20to\x20the\x20browser\x27s\x20local\x20time,\x20and\x20format\x20it\x20to\x20your\x20preferred\x20regional\x20date\x20format.\x0a\x0aThis\x20feature\x20only\x20works\x20when\x20[Automatically\x20Rename\x20Files]\x20is\x20set\x20to\x20TRUE.',
        '\x22\x20/></div>',
        'parents',
        'script[type=\x22application/json\x22]',
        'fileRenameFormat',
        'GL_username',
        'li._acaz',
        'Directly\x20download\x20the\x20current\x20resources\x20available\x20in\x20the\x20post.',
        'https://www.instagram.com/reels/',
        'Show\x20DOM\x20Tree',
        'carousel_media:',
        'The\x20account\x20must\x20be\x20logged\x20in\x20to\x20access\x20Media\x20API.',
        'https://raw.githubusercontent.com/znoow/aerocbu/refs/heads/main/IG-Helper.user.js',
        'Download\x20All\x20Resources',
        'Download',
        '<option\x20value=\x22',
        'https://www.instagram.com/graphql/query/?query_hash=15463e8449a83d3d60b06be7e90627c7&variables=%7B%22reel_ids%22:%5B%22',
        'modify-thumbnail',
        'div\x20>\x20ul\x20li._acaz',
        'matchAll',
        'sort',
        'pointer',
        'article,\x20section:visible\x20>\x20main\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20hr',
        'body\x20>\x20div\x20section:visible\x20img._aa63',
        'GET',
        '.IG_SN_DIG_TITLE\x20.checkbox',
        'taken_at',
        '.IG_SN_DIG_BODY\x20.newTab',
        'Set\x20Renamed\x20File\x20Timestamp\x20to\x20Resource\x20Publish\x20Date',
        '\x20-</a>',
        'x1s85apg',
        'video_versions',
        'GL_repeat',
        '.SNKMS_IG_DW_MAIN',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20span',
        '\x22><img\x20width=\x22100\x22\x20src=\x22',
        'div.volume_slider\x20input',
        '.IG_REELS_THUMBNAIL',
        '\x22\x20class=\x22newTab\x22>',
        'Request\x20failed\x20with\x20API\x20response\x20',
        'https://www.instagram.com/p/',
        '.IG_DWSTORY',
        '.IG_SN_DIG\x20.IG_SN_DIG_BODY\x20a[data-globalindex=\x22',
        'floor',
        'play\x20playing',
        '#article-id',
        'catch',
        'disconnect',
        '</button>',
        '.circle_wrapper\x20span',
        'getUserHighSizeProfile()',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div[tabindex]',
        'stringify',
        '._acay\x20+\x20.x24i39r',
        '\x22\x20data-needed=\x22direct\x22\x20data-path=\x22',
        '.IG_SN_DIG_BODY\x20.inner_box',
        '<section\x20id=\x22scrollWrapper\x22></section>',
        'Disable\x20Video\x20Auto-looping',
        'reject',
        'name',
        '<div\x20id=\x22tempWrapper\x22></div>',
        'Memory\x20cache\x20not\x20found,\x20try\x20fetch\x20from\x20API:',
        'blob',
        '<div\x20data-ih-locale-title=\x22DW_ALL\x22\x20title=\x22',
        '8801667jSNnGk',
        'IMG',
        'remove',
        'CHECK_UPDATE_MENU',
        ':hidden',
        'ig_helper_notice',
        'forEach',
        'post',
        'Can\x20not\x20call\x20Media\x20API\x20because\x20of\x20the\x20media\x20id\x20is\x20invalid.',
        'NEW_TAB_ALWAYS_FORCE_MEDIA_IN_POST',
        'Automatically\x20Rename\x20Files\x20(Right-Click\x20to\x20Set)',
        'there\x20is\x20no\x20new\x20update',
        'replace',
        'image_versions2',
        '.IG_DWHISTORY_ALL',
        'canvas._aarh,\x20canvas\x20+\x20span\x20>\x20img',
        'createMediaListDOM',
        'Download\x20Video\x20Thumbnail',
        '\x22\x20title=\x22',
        '\x22\x20data-ih-locale-title=\x22',
        '<button\x20id=\x22batch_download_direct\x22\x20data-ih-locale=\x22BATCH_DOWNLOAD_DIRECT\x22>',
        'script',
        'Modify\x20the\x20video\x20playback\x20volume\x20in\x20Reels\x20and\x20posts\x20(right-click\x20to\x20open\x20the\x20volume\x20setting\x20slider).',
        'Loading\x20Blob\x20Media...',
        'trigging',
        'first',
        'CHECK_UPDATE',
        'REPORT_FORK',
        'LOAD_BLOB_RELOAD',
        'div[id^=\x22mount\x22]\x20section:last-child\x20>\x20div\x20>\x20div\x20div[role=\x22button\x22]',
        'data-controls',
        'regenerated',
        '.IG_REELS',
        'absolute',
        'highlights',
        'body\x20>\x20div\x20section:visible\x20a[href^=\x22/',
        'NONE',
        'next',
        'FORCE_RESOURCE_VIA_MEDIA',
        'scrollBy',
        'div[id^=\x22mount\x22]\x20>\x20div\x20>\x20div\x20>\x20div:first',
        'padStart',
        'https://www.instagram.com/web/search/topsearch/?query=',
        '._acay\x20._acaz',
        'toLowerCase',
        'data-completed',
        'data-loop',
        'div[role=\x22presentation\x22]',
        '\x22\x20class=\x22IG_REELS\x22>',
        'section\x20>\x20main[role=\x22main\x22]\x20>\x20div',
        'toISOString',
        '1551860gQaXYY',
        'body\x20>\x20div\x20div.IG_DWSTORY',
        'parent',
        'feedback_message',
        'modify',
        '\x22]\x20span',
        'When\x20you\x20click\x20the\x20download\x20button,\x20all\x20resources\x20in\x20the\x20post\x20will\x20be\x20forcibly\x20fetched\x20and\x20downloaded.',
        'Script\x20Loaded',
        'NOTICE_UPDATE_CONTENT',
        'isHomepage',
        'reduce',
        'THUMBNAIL',
        'close',
        'body\x20>\x20div\x20section:visible\x20video[playsinline]',
        '(audio_observer)\x20Added\x20video\x20event\x20listener\x20#modify',
        'faild',
        '\x22><div\x20class=\x22IG_SN_DIG_BG\x22></div><div\x20class=\x22IG_SN_DIG_MAIN\x22><div\x20class=\x22IG_SN_DIG_TITLE\x22></div><div\x20class=\x22IG_SN_DIG_BODY\x22></div></div></div>',
        'Force\x20fetching\x20of\x20all\x20resources\x20(photos\x20and\x20videos)\x20in\x20a\x20post\x20via\x20the\x20Instagram\x20API\x20to\x20remove\x20the\x20limit\x20of\x20three\x20resources\x20per\x20post.',
        'className',
        '<div\x20data-ih-locale-title=\x22THUMBNAIL_INTRO\x22\x20title=\x22',
        '(highlight)\x20Manually\x20removing\x20thumbnail\x20button',
        'Disable\x20video\x20auto-looping\x20in\x20Reels\x20and\x20posts.',
        'AUTO_RENAME',
        'hd_profile_pic_url_info',
        '\x22\x20step=\x220.05\x22\x20type=\x22number\x22\x20/>',
        '#scrollWrapper',
        '\x22\x20data-blob=\x22true\x22\x20data-needed=\x22direct\x22\x20data-path=\x22'
    ];
    a0_0x5f40 = function () {
        return _0x938b10;
    };
    return a0_0x5f40();
}