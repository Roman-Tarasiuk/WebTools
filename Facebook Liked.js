// ==UserScript==
// @name         Facebook Like Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.facebook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        setInterval(() => {
            // console.log('Вподобати...');

            var styles = [
                'l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv tkv8g59h fl8dtwsd tdjehn4e tv7at329',
                'l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv d1544ag0 tw6a2znq oo1teu6h tv7at329',
                'om3e55n1 g4tp4svg alzwoclg jez8cy9q jcxyg2ei i85zmo3j sr926ui1 jl2a5g8c k7n6ui8p b41d885q hmqrhxox got7tec9 frfouenu bonavkto djs4p424 r7bn319e bdao358l k70v3m9n fdgfg23c a5wdgl2o ed17d2qt',
                'om3e55n1 g4tp4svg alzwoclg jez8cy9q jcxyg2ei i85zmo3j sr926ui1 jl2a5g8c k7n6ui8p b41d885q hmqrhxox got7tec9 frfouenu bonavkto djs4p424 r7bn319e bdao358l aesu6q9g e4ay1f3w dqxcxcok ed17d2qt',
                'om3e55n1 g4tp4svg alzwoclg jez8cy9q jcxyg2ei i85zmo3j sr926ui1 jl2a5g8c k7n6ui8p b41d885q hmqrhxox got7tec9 frfouenu bonavkto djs4p424 r7bn319e bdao358l aesu6q9g e4ay1f3w nu7423ey ed17d2qt',
                'x1n2onr6 x1ja2u2z x78zum5 x2lah0s xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xbxaen2 x1u72gb5 x1qhmfi1 x1r1pt67',
                'x1n2onr6 x1ja2u2z x78zum5 x2lah0s xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xn6708d x1ye3gou x1hr4nm9 x1r1pt67'
            ];

            if (styles.length) {
                console.log('** Like: Не знайдено.');
            }

            for (var i = 0; i < styles.length; i++) {
                var q = document.getElementsByClassName(styles[i]);
                for (var j = 0; j < q.length; j++) {
                    if (       q[j].children != undefined
                            && q[j].children[0] != undefined
                            && q[j].children[0].children != undefined
                            && q[j].children[0].children[1] != undefined
                            && q[j].children[0].children[1].children != undefined
                            && q[j].children[0].children[1].children[0] != undefined
                            && q[j].children[0].children[1].children[0].children != undefined
                            && q[j].children[0].children[1].children[0].children[0] != undefined
                            && q[j].children[0].children[1].children[0].children[0].innerText == 'Подобається') {
                        console.log('** Like: Вподобано (1).');
                        q[j].children[0].children[1].children[0].children[0].innerText = 'Вподобано';
                    }
                    else if (  q[j].children != undefined
                            && q[j].children[0] != undefined
                            && q[j].children[0].children != undefined
                            && q[j].children[0].children[0] != undefined
                            && q[j].children[0].children[0].children != undefined
                            && q[j].children[0].children[0].children[0] != undefined
                            && q[j].children[0].children[0].children[0].children != undefined
                            && q[j].children[0].children[0].children[0].children[0] != undefined
                            && q[j].children[0].children[0].children[0].children[0].innerText == 'Подобається') {
                        q[j].children[0].children[0].children[0].children[0].innerText = 'Вподобано';
                        console.log('** Like: Вподобано (2).');
                    }
                    else {
                        console.log('** Like: Не вподобано.');
                    }
                }
            }
        }, 2000);
    }
})();