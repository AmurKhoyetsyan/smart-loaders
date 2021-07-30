/**
 * Copyright (c) Amur 2020
 * 
 * Smart Loaders
 * https://github.com/AmurKhoyetsyan/smart-loaders
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

;(function(){
    /**
     * @type {{ekvalayzer: string, bubbleScale: string, bubblePing: string, spinnerCub: string, rectangularPing: string, heart: string, spinnerCircle: string, bubbleTop: string, bubbleSpin: string, hourglass: string, boxRectangular: string, boxRotateZ: string, boxRotateY: string, boxRotateX: string, spinnerDefault: string, boxUp: string}}
     */
    const loaderTypes = {
        boxRotateX: "box-rotate-x",
        boxRotateY: "box-rotate-y",
        boxRotateZ: "box-rotate-z",
        boxRectangular: "box-rectangular",
        boxUp: "box-up",
        heart: "heart",
        bubbleScale: "bubble-scale",
        bubbleTop: "bubble-top",
        bubblePing: "bubble-ping",
        bubbleSpin: "bubble-spin",
        spinnerCub: "spinner-cub",
        spinnerCircle: "spinner-circle",
        spinnerDefault: "spinner-default",
        ekvalayzer: "ekvalayzer",
        hourglass: "hourglass",
        rectangularPing: "rectangular-ping"
    };

    // "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);}"

    
    



    
    



    const loaderStylesText = {
        boxRotateX: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-box1 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-box1 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-box1 .sl-loader .sl-loader-items {width: 100%;height: 100px;-webkit-perspective: 100px;-ms-perspective: 100px;-o-perspective: 100px;perspective: 100px;} .sl-box1 .sl-loader .sl-loader-items .sl-parent-cub {width: 100px;height: 100px;position: relative;-webkit-transform-style: preserve-3d;transform-style: preserve-3d;-webkit-transform-origin: 50% 50% -50px;transform-origin: 50% 50% -50px;} .sl-box1 .sl-loader .sl-loader-items .sl-parent-cub .sl-cub {width: 50px;height: 50px;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);position: absolute;background-color: var(--bg);} .sl-box1 .sl-loader .sl-loader-items .sl-parent-cub .sl-cub {-webkit-animation: sl-box1 500ms ease infinite;animation: sl-box1 500ms ease infinite;} @-webkit-keyframes sl-box1 {to {-webkit-transform: translate(-50%, -50%) rotateX(0deg);transform: translate(-50%, -50%) rotateX(0deg);}from {-webkit-transform: translate(-50%, -50%) rotateX(180deg);transform: translate(-50%, -50%) rotateX(180deg);}} @keyframes sl-box1 {to {-webkit-transform: translate(-50%, -50%) rotateX(0deg);transform: translate(-50%, -50%) rotateX(0deg);}from {-webkit-transform: translate(-50%, -50%) rotateX(180deg);transform: translate(-50%, -50%) rotateX(180deg);}}",
        boxRotateY: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-box2 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-box2 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-box2 .sl-loader .sl-loader-items {width: 100%;height: 100px;-webkit-perspective: 100px;-ms-perspective: 100px;-o-perspective: 100px;perspective: 100px;} .sl-box2 .sl-loader .sl-loader-items .sl-parent-cub {width: 100px;height: 100px;position: relative;-webkit-transform-style: preserve-3d;transform-style: preserve-3d;-webkit-transform-origin: 50% 50% -50px;transform-origin: 50% 50% -50px;} .sl-box2 .sl-loader .sl-loader-items .sl-parent-cub .sl-cub {width: 50px;height: 50px;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);position: absolute;background-color: var(--bg);} .sl-box2 .sl-loader .sl-loader-items .sl-parent-cub .sl-cub {-webkit-animation: sl-box2 500ms ease infinite;animation: sl-box2 500ms ease infinite;} @-webkit-keyframes sl-box2 {to {-webkit-transform: translate(-50%, -50%) rotateY(0deg);transform: translate(-50%, -50%) rotateY(0deg);}from {-webkit-transform: translate(-50%, -50%) rotateY(180deg);transform: translate(-50%, -50%) rotateY(180deg);}}@keyframes sl-box2 {to {-webkit-transform: translate(-50%, -50%) rotateY(0deg);transform: translate(-50%, -50%) rotateY(0deg);}from {-webkit-transform: translate(-50%, -50%) rotateY(180deg);transform: translate(-50%, -50%) rotateY(180deg);}}",
        boxRotateZ: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-box3 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-box3 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-box3 .sl-loader .sl-loader-items {width: 100%;height: 100px;-webkit-perspective: 100px;-ms-perspective: 100px;-o-perspective: 100px;perspective: 100px;}.sl-box3 .sl-loader .sl-loader-items .sl-parent-cub {width: 100px;height: 100px;position: relative;-webkit-transform-style: preserve-3d;transform-style: preserve-3d;-webkit-transform-origin: 50% 50% -50px;transform-origin: 50% 50% -50px;}.sl-box3 .sl-loader .sl-loader-items .sl-parent-cub .sl-cub {width: 50px;height: 50px;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);position: absolute;background-color: var(--bg);}.sl-box3 .sl-loader .sl-loader-items .sl-parent-cub .sl-cub {-webkit-animation: sl-box3 500ms ease infinite;animation: sl-box3 500ms ease infinite;} @-webkit-keyframes sl-box3 {to {-webkit-transform: translate(-50%, -50%) rotateZ(0deg);transform: translate(-50%, -50%) rotateZ(0deg);}from {-webkit-transform: translate(-50%, -50%) rotateZ(180deg);transform: translate(-50%, -50%) rotateZ(180deg);}} @keyframes sl-box3 {to {-webkit-transform: translate(-50%, -50%) rotateZ(0deg);transform: translate(-50%, -50%) rotateZ(0deg);}from {-webkit-transform: translate(-50%, -50%) rotateZ(180deg);transform: translate(-50%, -50%) rotateZ(180deg);}}",
        boxRectangular: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-box4 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-box4 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-box4 .sl-loader .sl-loader-items {width: 100%;height: 70px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;} .sl-box4 .sl-loader .sl-loader-items .sl-rectangular {width: 10px;height: 25px;background-color: var(--bg);border-radius: 5px;-webkit-animation: sl-box4 600ms ease-in-out infinite;animation: sl-box4 600ms ease-in-out infinite;-webkit-animation-delay: calc(var(--i) * -650ms);animation-delay: calc(var(--i) * -650ms);} @-webkit-keyframes sl-box4 {from {height: 30px;}50% {height: 60px;}to {height: 30px;}} @keyframes sl-box4 {from {height: 30px;}50% {height: 60px; }to {height: 30px;}}",
        boxUp: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-box6 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-box6 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-box6 .sl-loader .sl-loader-items {width: 100%;height: 100px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;} .sl-box6 .sl-loader .sl-loader-items .sl-item {width: 10px;height: 10px;margin-left: 0.25rem;margin-right: 0.25rem;position: relative;-webkit-box-shadow: 0 0 5px 0 var(--shadow);box-shadow: 0 0 5px 0 var(--shadow);background-color: #FFFFFF50;-webkit-animation: sl-box6 2500ms ease-in infinite;animation: sl-box6 2500ms ease-in infinite;-webkit-animation-delay: calc(var(--i) * 500ms);animation-delay: calc(var(--i) * 500ms);} @-webkit-keyframes sl-box6 {from {top: 0;background-color: var(--bga);-webkit-box-shadow: 0 0 5px 0 var(--shadow);box-shadow: 0 0 5px 0 var(--shadow);}10% {top: -10px;background-color: var(--bg);-webkit-box-shadow: 0 0 2px var(--shadow);box-shadow: 0 0 2px var(--shadow);}12.5% {top: -10px;background-color: var(--bg);-webkit-box-shadow: 0 0 2px var(--shadow);box-shadow: 0 0 2px var(--shadow);}22.5% {top: 0;background-color: var(--bga);-webkit-box-shadow: 0 0 5px 0 var(--shadow);box-shadow: 0 0 5px 0 var(--shadow);}to {top: 0;background-color: var(--bga);-webkit-box-shadow: 0 0 5px 0 var(--shadow);box-shadow: 0 0 5px 0 var(--shadow);}} @keyframes sl-box6 {from {top: 0;background-color: var(--bga);-webkit-box-shadow: 0 0 5px 0 var(--shadow);box-shadow: 0 0 5px 0 var(--shadow);}10% {top: -10px;background-color: var(--bg);-webkit-box-shadow: 0 0 2px var(--shadow);box-shadow: 0 0 2px var(--shadow);}12.5% {top: -10px;background-color: var(--bg);-webkit-box-shadow: 0 0 2px var(--shadow);box-shadow: 0 0 2px var(--shadow);}22.5% {top: 0;background-color: var(--bga);-webkit-box-shadow: 0 0 5px 0 var(--shadow);box-shadow: 0 0 5px 0 var(--shadow);}to {top: 0;background-color: var(--bga);-webkit-box-shadow: 0 0 5px 0 var(--shadow);box-shadow: 0 0 5px 0 var(--shadow);}}",
        heart: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-heart1 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-heart1 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-heart1 .sl-loader .sl-loader-items {width: 100%;height: 100px;position: relative;} .sl-heart1 .sl-loader .sl-loader-items .sl-heart {width: 40px;height: 40px;border-radius: 50%;position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-85%, -75%);transform: translate(-85%, -75%);background-color: var(--bg);-webkit-animation: sl-heart1 1000ms linear infinite;animation: sl-heart1 1000ms linear infinite;} .sl-heart1 .sl-loader .sl-loader-items .sl-heart::after {content: '';width: 100%;height: 100%;border-radius: 50%;position: absolute;left: 30px;top: 0;background-color: var(--bg);} .sl-heart1 .sl-loader .sl-loader-items .sl-heart::before {content: '';width: 100%;height: 100%;-webkit-transform: rotate(45deg);transform: rotate(45deg);position: absolute;left: 15px;top: 15px;background-color: var(--bg);} @-webkit-keyframes sl-heart1 {to {-webkit-transform: translate(-60%, -60%) scale(0.5);transform: translate(-60%, -60%) scale(0.5);}30% {-webkit-transform: translate(-80%, -70%) scale(0.8);transform: translate(-80%, -70%) scale(0.8);}60% {-webkit-transform: translate(-60%, -60%) scale(0.5);transform: translate(-60%, -60%) scale(0.5);}80% {-webkit-transform: translate(-80%, -70%) scale(0.8);transform: translate(-80%, -70%) scale(0.8);}from {-webkit-transform: translate(-85%, -75%) scale(1);transform: translate(-85%, -75%) scale(1);}} @keyframes sl-heart1 {to {-webkit-transform: translate(-60%, -60%) scale(0.5);transform: translate(-60%, -60%) scale(0.5);}30% {-webkit-transform: translate(-80%, -70%) scale(0.8);transform: translate(-80%, -70%) scale(0.8);}60% {-webkit-transform: translate(-60%, -60%) scale(0.5);transform: translate(-60%, -60%) scale(0.5);}80% {-webkit-transform: translate(-80%, -70%) scale(0.8);transform: translate(-80%, -70%) scale(0.8);}from {-webkit-transform: translate(-85%, -75%) scale(1);transform: translate(-85%, -75%) scale(1);}}",
        bubbleScale: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-bubble1 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-bubble1 .sl-loader-title {padding-top: 10px;} .sl-bubble1 .sl-loader {width: 150px;height: 40px;-ms-zoom: var(--size);zoom: var(--size);} .sl-bubble1 .sl-loader-items {width: 100%;display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-direction: row;-webkit-box-orient: horizontal;-webkit-box-direction: normal;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-ms-flex-pack: space-between;-webkit-box-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;} .sl-bubble1 .sl-loader .sl-loader-items .sl-bubble {-webkit-animation: sl-bubble1 1200ms ease-in-out infinite;animation: sl-bubble1 1200ms ease-in-out infinite;} .sl-bubble1 .sl-loader .sl-loader-items .sl-bubble {width: 30px;height: 30px;background-color: var(--bg);border-radius: 100%;-webkit-animation-delay: calc(var(--i) * -350ms);animation-delay: calc(var(--i) * -350ms);} @-webkit-keyframes sl-bubble1 {to {-webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {-webkit-transform: scale(0.3, 0.3);transform: scale(0.3, 0.3);}from {-webkit-transform: scale(1, 1);transform: scale(1, 1);}} @keyframes sl-bubble1 {to {-webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {-webkit-transform: scale(0.3, 0.3);transform: scale(0.3, 0.3);}from {-webkit-transform: scale(1, 1);transform: scale(1, 1);}}",
        bubbleTop: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-bubble2 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-bubble2 .sl-loader-title {padding-top: 10px;} .sl-bubble2 .sl-loader {width: 150px;height: 40px;-ms-zoom: var(--size);zoom: var(--size);} .sl-bubble2 .sl-loader-items {width: 100%;display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-direction: row;-webkit-box-orient: horizontal;-webkit-box-direction: normal;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-ms-flex-pack: space-between;-webkit-box-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;} .sl-bubble2 .sl-loader .sl-loader-items .sl-bubble {-webkit-animation: sl-bubble2 1200ms ease-in-out infinite;animation: sl-bubble2 1200ms ease-in-out infinite;} .sl-bubble2 .sl-loader .sl-loader-items .sl-bubble {width: 30px;height: 30px;background-color: var(--bg);border-radius: 100%;-webkit-animation-delay: calc(var(--i) * -350ms);animation-delay: calc(var(--i) * -350ms);} @-webkit-keyframes sl-bubble2 {to {-webkit-transform: translateY(0);transform: translateY(0);}50% {-webkit-transform: translateY(-30px);transform: translateY(-30px);}from {-webkit-transform: translateY(0);transform: translateY(0);}} @keyframes sl-bubble2 {to {-webkit-transform: translateY(0);transform: translateY(0);}50% {-webkit-transform: translateY(-30px);transform: translateY(-30px);}from {-webkit-transform: translateY(0);transform: translateY(0);}}",
        bubblePing: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-bubble3 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-bubble3 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-bubble3 .sl-loader .sl-loader-items {width: 100%;height: 100px;position: relative;} .sl-bubble3 .sl-loader .sl-loader-items .sl-bubble {width: 0;height: 0;position: absolute;top: 50%;left: 50%;background-color: var(--bg);border-radius: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);-webkit-animation: sl-bubble3 1200ms linear infinite;animation: sl-bubble3 1200ms linear infinite;-webkit-animation-delay: calc(var(--i) * -400ms);animation-delay: calc(var(--i) * -400ms);} @-webkit-keyframes sl-bubble3 {from {width: 15px;height: 15px;opacity: 1;}to {width: 80px;height: 80px;opacity: 0;}} @keyframes sl-bubble3 {from {width: 15px;height: 15px;opacity: 1;}to {width: 80px;height: 80px;opacity: 0;}}",
        bubbleSpin: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-bubble4 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-bubble4 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-bubble4 .sl-loader .sl-loader-items {width: 100%;height: 100px;position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;} .sl-bubble4 .sl-loader .sl-loader-items .sl-item-content-loader {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;width: 70px;-webkit-animation: sl-bubble4 1.5s ease-in infinite;animation: sl-bubble4 1.5s ease-in infinite;} .sl-bubble4 .sl-loader .sl-loader-items .sl-item-content-loader .sl-circle {width: 14px;height: 14px;border-radius: 50%;background-color: var(--bg);} @-webkit-keyframes sl-bubble4 {from {-webkit-transform: rotate(0);transform: rotate(0);}45% {-webkit-transform: rotate(400deg);transform: rotate(400deg);}50% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}95% {-webkit-transform: rotate(-40deg);transform: rotate(-40deg);}to {-webkit-transform: rotate(0);transform: rotate(0);}} @keyframes sl-bubble4 {from {-webkit-transform: rotate(0);transform: rotate(0);}45% {-webkit-transform: rotate(400deg);transform: rotate(400deg);}50% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}95% {-webkit-transform: rotate(-40deg);transform: rotate(-40deg);}to {-webkit-transform: rotate(0);transform: rotate(0);}}",
        spinnerCub: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-spinner1 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-spinner1 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-spinner1 .sl-loader .sl-loader-items {width: 100%;height: 100px;position: relative;-webkit-transform: rotateY(180deg);transform: rotateY(180deg);} .sl-spinner1 .sl-loader .sl-loader-items .sl-item {-webkit-transform: rotate(calc(var(--i) * 30deg));transform: rotate(calc(var(--i) * 30deg));-webkit-animation: sl-spinner1 1.2s linear infinite;animation: sl-spinner1 1.2s linear infinite;-webkit-animation-delay: calc(var(--i) * -100ms);animation-delay: calc(var(--i) * -100ms);-webkit-transform-origin: 50px 50px;transform-origin: 50px 50px;} .sl-spinner1 .sl-loader .sl-loader-items .sl-item::after {content: '';display: block;position: absolute;top: 3px;left: 47px;width: 7px;height: 21px;background-color: var(--bg);border-radius: 20%;-webkit-box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.2);box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.2);} @-webkit-keyframes sl-spinner1 {to {opacity: 0;}from {opacity: 1;}} @keyframes sl-spinner1 {to {opacity: 0;}from {opacity: 1;}}",
        spinnerCircle: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-spinner2 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-spinner2 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-spinner2 .sl-loader .sl-loader-items {width: 100%;height: 100px;position: relative;} .sl-spinner2 .sl-loader .sl-loader-items .sl-item {-webkit-transform: rotate(calc(var(--i) * 45deg));transform: rotate(calc(var(--i) * 45deg));-webkit-transform-origin: 50px 50px;transform-origin: 50px 50px;} .sl-spinner2 .sl-loader .sl-loader-items .sl-item::after {content: '';display: block;position: absolute;top: 25px;left: 25px;width: 10px;height: 10px;background-color: var(--bg);border-radius: 50%;-webkit-animation: sl-spinner2 800ms linear infinite;animation: sl-spinner2 800ms linear infinite;-webkit-animation-delay: calc(var(--i) * 100ms);animation-delay: calc(var(--i) * 100ms);} @-webkit-keyframes sl-spinner2 {to {-webkit-transform: scale(1, 1);transform: scale(1, 1);}from {-webkit-transform: scale(1.5, 1.5);transform: scale(1.5, 1.5);}} @keyframes sl-spinner2 {to {-webkit-transform: scale(1, 1);transform: scale(1, 1);}from {-webkit-transform: scale(1.5, 1.5);transform: scale(1.5, 1.5);}}",
        spinnerDefault: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-spinner3 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-spinner3 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-spinner3 .sl-loader .sl-loader-items {width: 100%;height: 100px;position: relative;} .sl-spinner3 .sl-loader .sl-loader-items .sl-circle {width: 80px;height: 80px;border-radius: 50%;position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);border: 10px solid var(--border);border-top: 10px solid var(--bg);-webkit-animation: sl-spinner3 800ms linear infinite;animation: sl-spinner3 800ms linear infinite;} @-webkit-keyframes sl-spinner3 {to {-webkit-transform: translate(-50%, -50%) rotate(360deg);transform: translate(-50%, -50%) rotate(360deg);}from {-webkit-transform: translate(-50%, -50%) rotate(0deg);transform: translate(-50%, -50%) rotate(0deg);}} @keyframes sl-spinner3 {to {-webkit-transform: translate(-50%, -50%) rotate(360deg);transform: translate(-50%, -50%) rotate(360deg);}from {-webkit-transform: translate(-50%, -50%) rotate(0deg);transform: translate(-50%, -50%) rotate(0deg);}}",
        ekvalayzer: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-ekvalayzer {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-ekvalayzer .sl-loader-items {width: 100%;height: 100px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: end;-ms-flex-align: end;align-items: flex-end;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-ms-zoom: var(--size);zoom: var(--size);} .sl-ekvalayzer .sl-loader-items .sl-parent-rectangular {padding: 3px;width: -webkit-min-content;width: -moz-min-content;width: min-content;height: -webkit-min-content;height: -moz-min-content;height: min-content;} .sl-ekvalayzer .sl-loader-items .sl-parent-rectangular .sl-rectangular {width: 10px;background-color: var(--bg);-webkit-box-shadow: 0 0 10px 2px var(--bg);box-shadow: 0 0 10px 2px var(--bg);-webkit-animation: sl-ekvalayzer1 500ms ease-in-out infinite;animation: sl-ekvalayzer1 500ms ease-in-out infinite;-webkit-animation-delay: calc(var(--i) * -100ms);animation-delay: calc(var(--i) * -100ms);} @-webkit-keyframes sl-ekvalayzer1 {from {height: calc(var(--w) * 20px);}50% {height: 80px;}to {height: calc(var(--w) * 20px);}} @keyframes sl-ekvalayzer1 {from {height: calc(var(--w) * 20px);}50% {height: 80px;}to {height: calc(var(--w) * 20px);}}",
        hourglass: "hourglass",
        rectangularPing: "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} .sl-box5 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-box5 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-box5 .sl-loader .sl-loader-items {width: 100%;height: 100px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;} .sl-box5 .sl-loader .sl-loader-items .sl-rectangular-ping {width: 100%;height: 5px;position: relative;background-color: var(--bg);overflow: hidden;} .sl-box5 .sl-loader .sl-loader-items .sl-rectangular-ping:before, .sl-box5 .sl-loader .sl-loader-items .sl-rectangular-ping::before {content: '';width: 10px;height: 100%;position: absolute;top: 0;background-color: var(--bgb);-webkit-animation: sl-rectangular-ping 800ms ease-in infinite;animation: sl-rectangular-ping 800ms ease-in infinite;} @-webkit-keyframes sl-rectangular-ping {from {left: -10px;}to {left: calc(100% + 10px);}} @keyframes sl-rectangular-ping {from {left: -10px;}to {left: calc(100% + 10px);}}"
    };

    /**
     * @type {{lightslategrey: string, darkviolet: string, bisque: string, cyan: string, darkslateblue: string, lightgrey: string, khaki: string, darkgray: string, blanchedalmond: string, saddlebrown: string, darkblue: string, lightcoral: string, moccasin: string, orangered: string, azure: string, lightgoldenrodyellow: string, skyblue: string, chartreuse: string, deepskyblue: string, mediumpurple: string, lightyellow: string, violet: string, palevioletred: string, dimgrey: string, rosybrown: string, honeydew: string, mediumblue: string, darkseagreen: string, limegreen: string, paleturquoise: string, burlywood: string, mediumorchid: string, papayawhip: string, silver: string, chocolate: string, lightsteelblue: string, pink: string, darkgreen: string, seashell: string, sienna: string, thistle: string, yellow: string, cornsilk: string, lightseagreen: string, blueviolet: string, tomato: string, cornflowerblue: string, gold: string, sandybrown: string, springgreen: string, crimson: string, gray: string, mediumvioletred: string, slategrey: string, darkcyan: string, ivory: string, darkmagenta: string, wheat: string, indianred: string, darkorchid: string, mintcream: string, whitesmoke: string, lightpink: string, black: string, teal: string, cadetblue: string, beige: string, darkkhaki: string, blue: string, darkslategray: string, royalblue: string, seagreen: string, purple: string, orchid: string, forestgreen: string, darksalmon: string, palegreen: string, lightslategray: string, navy: string, greenyellow: string, red: string, aqua: string, dodgerblue: string, lightblue: string, white: string, olive: string, coral: string, peachpuff: string, darkolivegreen: string, darkturquoise: string, darkgrey: string, lavender: string, gainsboro: string, lightgray: string, plum: string, tan: string, midnightblue: string, powderblue: string, dimgray: string, lemonchiffon: string, salmon: string, brown: string, lightgreen: string, goldenrod: string, steelblue: string, lightsalmon: string, darkred: string, snow: string, olivedrab: string, yellowgreen: string, indigo: string, lawngreen: string, magenta: string, aquamarine: string, floralwhite: string, antiquewhite: string, hotpink: string, turquoise: string, peru: string, fuchsia: string, aliceblue: string, firebrick: string, darkgoldenrod: string, lavenderblush: string, navajowhite: string, mediumspringgreen: string, mistyrose: string, slategray: string, darkorange: string, linen: string, slateblue: string, lightcyan: string, lightskyblue: string, mediumseagreen: string, deeppink: string, mediumturquoise: string, ghostwhite: string, green: string, lime: string, mediumaquamarine: string, oldlace: string, grey: string, orange: string, darkslategrey: string, mediumslateblue: string, maroon: string, palegoldenrod: string}}
     */
    let colorTypes = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgrey: "#A9A9A9",
        darkgreen: "#006400",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        grey: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgrey: "#D3D3D3",
        lightgreen: "#90EE90",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370D8",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#D87093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32"
    };

    /**
     * @param name
     * @returns {*}
     */
    const getColorByName = name => {
        let key = name.toLowerCase();
        if(colorTypes.hasOwnProperty(key)) {
            return colorTypes[key];
        }

        return name;
    };

    /**
     * @param rgb
     * @returns {string}
     */
    let rgbToHex = function (rgb) {
        let hex = Number(parseInt(rgb)).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    /**
     * @param p
     * @returns {string}
     */
    let percentToCountForRGB = p => {
        let per = parseInt(p);

        if(isNaN(per) || per === 0) {
            return rgbToHex(0);
        }

        let count = Math.round((255 / 100) * per);

        return rgbToHex(count);
    };

    /**
     * @param r
     * @param g
     * @param b
     * @returns {string}
     */
    let fullColorHex = (r, g, b) => {
        let red = r.indexOf('%') === -1 ? rgbToHex(r) : percentToCountForRGB(r);
        let green = g.indexOf('%') === -1 ? rgbToHex(g) : percentToCountForRGB(g);
        let blue = b.indexOf('%') === -1 ? rgbToHex(b) : percentToCountForRGB(b);
        return red + green + blue;
    };

    /**
     * @param h
     * @param sat
     * @param light
     * @returns {string}
     */
    let hslToHex = (h, sat, light) => {
        let s = parseInt(sat);
        let l = parseInt(light);

        if(isNaN(s) || isNaN(l)) {
            return '#000000';
        }

        if(h < 0 || sat < 0 || sat > 100 || light < 0 || light > 100) {
            return '#000000';
        }

        if (h.indexOf("deg") > -1) {
            h = h.substr(0,h.length - 3);
        }

        if (h.indexOf("rad") > -1) {
            h = Math.round(h.substr(0,h.length - 3) * (180 / Math.PI));
        }

        if (h.indexOf("turn") > -1) {
            h = Math.round(h.substr(0,h.length - 4) * 360);
        }

        if (h >= 360) {
            h %= 360;
        }

        s /= 100;
        l /= 100;

        let c = (1 - (Math.abs((2 * l) - 1))) * s;
        let x = c * (1 - Math.abs(((h / 60) % 2 - 1)));
        let m = l - c/2;
        let r = 0;
        let g = 0;
        let b = 0;

        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }
        // Having obtained RGB, convert channels to hex
        r = Math.round((r + m) * 255).toString(16);
        g = Math.round((g + m) * 255).toString(16);
        b = Math.round((b + m) * 255).toString(16);

        if (r.length === 1){
            r = "0" + r;
        }

        if (g.length === 1){
            g = "0" + g;
        }

        if (b.length === 1){
            b = "0" + b;
        }

        return `#${r}${g}${b}`;
    }

    /**
     * @param color
     * @param alpha
     * @returns {string}
     */
    let hexColorThreeDigitToSixDigit = (color, alpha) => {
        if(color.length === 4) {
            let thereHex = color.substring(1, color.length);
            let thereArray = thereHex.split('');
            let sixHex = thereArray.reduce((total, item) => total += item + item, '');

            return `#${sixHex}${alpha}`;
        }

        return `${color}${alpha}`;
    };

    /**
     * @param str
     * @returns {string|*}
     */
    const trim = str => {
        str = str.split(' ').join('');
        if(str.indexOf(' ') !== -1) {
            return trim(str);
        }

        return str;
    }

    /**
     * @param color
     * @param alpha
     * @returns {string|*}
     */
    let rgbToPart = (color, alpha) => {
        if(color.indexOf("rgb") !== -1) {
            let arrBefore = color.substring(4, color.length - 1);
            let arr = arrBefore.split(",");

            return "#" + fullColorHex(trim(arr[0]), trim(arr[1]), trim(arr[2])) + alpha;
        }

        if(color.indexOf("#") !== -1) {
            return hexColorThreeDigitToSixDigit(color, alpha);
        }

        if(color.indexOf("hsl") !== -1) {
            let arrBefore = color.substring(4, color.length - 1);
            let arr = arrBefore.split(",").join('').split(' ');

            return hslToHex(trim(arr[0]), trim(arr[1]), trim(arr[2])) + alpha;
        }

        return getColorByName(color) + alpha;
    };

    /**
     * @param item
     */
    let createTitle = item => {
        if(item.hasAttribute('title')) {
            let color = item.hasAttribute('title-color') ? item.getAttribute('title-color') : "#FFFFFF";
            let loaderTitle = document.createElement('DIV');
            loaderTitle.classList.add('sl-loader-title');
            loaderTitle.setAttribute("style", `--cl: ${color}`);
            let span = document.createElement('SPAN');
            span.innerText = item.getAttribute('title');
            loaderTitle.appendChild(span);
            item.appendChild(loaderTitle);
        }
    };

    /**
     * @param count
     * @returns {string|number}
     */
    const getZoom = count => {
        let size = parseFloat(count);
        if(size === 0) {
            return 0;
        }

        let zoom = size / 100;
        return zoom.toFixed(2);
    };

    /**
     * @param item
     * @returns {string}
     */
    const getBackground = item => item.hasAttribute('loader-color') ? item.getAttribute('loader-color') : "#FFFFFF";

    /**
     * @param item
     * @param index
     * @param classes
     */
    const boxRotate = (item, index, classes, typeLoader) => {
        let cub = document.createElement('DIV');
        cub.classList.add('sl-cub');
        cub.setAttribute("style", `--bg: ${getBackground(item)}`);

        let parentCub = document.createElement('DIV');
        parentCub.classList.add('sl-parent-cub');

        let loaderItems = document.createElement('DIV');
        loaderItems.classList.add('sl-loader-items');

        let loader = document.createElement('DIV');
        loader.classList.add('sl-loader');

        let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
        loader.setAttribute("style", `--size: ${size}`);

        parentCub.appendChild(cub);
        loaderItems.appendChild(parentCub);
        loader.appendChild(loaderItems);

        let box = document.createElement('DIV');
        box.classList.add(classes);
        box.appendChild(loader);

        let style = document.createElement('STYLE');
        style.setAttribute('type', 'text/css');
        style.innerText = loaderStylesText[typeLoader];

        item.appendChild(style);
        item.appendChild(box);
        createTitle(item);
    };

    /**
     * @param item
     * @param index
     * @param classes
     * @param itemClasses
     * @param start
     * @param end
     */
    const bubbleLoading = (item, index, classes, itemClasses, start, end, typeLoader) => {
        let loaderItems = document.createElement('DIV');
        loaderItems.classList.add('sl-loader-items');

        let loader = document.createElement('DIV');
        loader.classList.add('sl-loader');

        let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
        loader.setAttribute("style", `--size: ${size}`);

        for(let i = start; i <= end; i++) {
            let bubble = document.createElement('DIV');
            bubble.classList.add(itemClasses);
            bubble.setAttribute("style", `--i: ${i}; --bg: ${getBackground(item)}`);
            loaderItems.appendChild(bubble);
        }

        loader.appendChild(loaderItems);

        let style = document.createElement('STYLE');
        style.setAttribute('type', 'text/css');
        style.innerText = loaderStylesText[typeLoader];

        item.appendChild(style);

        let bubble = document.createElement('DIV');
        bubble.classList.add(classes);
        bubble.appendChild(loader);
        item.appendChild(bubble);
        createTitle(item);
    };

    /**
     * @param item
     * @param index
     * @param classes
     * @param start
     * @param end
     */
    const spinnerLoading = (item, index, classes, start, end, typeLoader) => {
        let loaderItems = document.createElement('DIV');
        loaderItems.classList.add('sl-loader-items');

        let loader = document.createElement('DIV');
        loader.classList.add('sl-loader');

        let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
        loader.setAttribute("style", `--size: ${size}`);

        for(let i = start; i <= end; i++) {
            let spinnerItem = document.createElement('DIV');
            spinnerItem.classList.add('sl-item');
            spinnerItem.setAttribute("style", `--i: ${i}; --bg: ${getBackground(item)}`);
            loaderItems.appendChild(spinnerItem);
        }

        loader.appendChild(loaderItems);

        let style = document.createElement('STYLE');
        style.setAttribute('type', 'text/css');
        style.innerText = loaderStylesText[typeLoader];

        item.appendChild(style);

        let spinner = document.createElement('DIV');
        spinner.classList.add(classes);
        spinner.appendChild(loader);
        item.appendChild(spinner);
        createTitle(item);
    };

    /**
     * @type {{ekvalayzer: ekvalayzer, bubbleScale: (function(*=, *=): void), bubblePing: (function(*=, *=): void), spinnerCub: (function(*=, *=): void), rectangularPing: rectangularPing, heart: heart, spinnerCircle: (function(*=, *=): void), bubbleTop: (function(*=, *=): void), bubbleSpin: bubbleSpin, hourglass: hourglass, boxRectangular: (function(*=, *=): void), boxRotateZ: (function(*=, *=): void), boxRotateY: (function(*=, *=): void), boxRotateX: (function(*=, *=): void), spinnerDefault: spinnerDefault, boxUp: boxUp}}
     */
    const loaderCreate = {
        boxRotateX: (item, index) => boxRotate(item, index, 'sl-box1', 'boxRotateX'),
        boxRotateY: (item, index) => boxRotate(item, index, 'sl-box2', 'boxRotateY'),
        boxRotateZ: (item, index) => boxRotate(item, index, 'sl-box3', 'boxRotateZ'),
        boxUp: (item, index) => {
            let loaderItems = document.createElement('DIV');
            loaderItems.classList.add('sl-loader-items');

            let loader = document.createElement('DIV');
            loader.classList.add('sl-loader');

            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            let backgroundColor = getBackground(item);

            for(let i = 0; i <= 4; i++) {
                let box = document.createElement('DIV');
                box.classList.add('sl-item');
                box.setAttribute("style", `--i: ${i}; --shadow: ${backgroundColor}; --bga: ${rgbToPart(backgroundColor, "80")}; --bg: ${backgroundColor}`);
                loaderItems.appendChild(box);
            }

            loader.appendChild(loaderItems);

            let style = document.createElement('STYLE');
            style.setAttribute('type', 'text/css');
            style.innerText = loaderStylesText["boxUp"];

            item.appendChild(style);

            let box = document.createElement('DIV');
            box.classList.add('sl-box6');
            box.appendChild(loader);
            item.appendChild(box);
            createTitle(item);
        },
        heart: (item, index) => {
            let loaderItems = document.createElement('DIV');
            loaderItems.classList.add('sl-loader-items');

            let loader = document.createElement('DIV');
            loader.classList.add('sl-loader');

            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            let heart = document.createElement('DIV');
            heart.classList.add('sl-heart');
            heart.setAttribute("style", `--bg: ${getBackground(item)}`);

            loaderItems.appendChild(heart);
            loader.appendChild(loaderItems);

            let style = document.createElement('STYLE');
            style.setAttribute('type', 'text/css');
            style.innerText = loaderStylesText["heart"];

            item.appendChild(style);

            let heart1 = document.createElement('DIV');
            heart1.classList.add('sl-heart1');
            heart1.appendChild(loader);
            item.appendChild(heart1);
            createTitle(item);
        },
        bubbleScale: (item, index) => bubbleLoading(item, index, 'sl-bubble1', 'sl-bubble', 1, 3, 'bubbleScale'),
        spinnerCub: (item, index) => spinnerLoading(item, index, 'sl-spinner1', 1, 12, 'spinnerCub'),
        spinnerCircle: (item, index) => spinnerLoading(item, index, 'sl-spinner2', 0, 7, 'spinnerCircle'),
        spinnerDefault: (item, index) => {
            let loader = document.createElement('DIV');
            loader.classList.add('sl-loader');
            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            let loaderParent = document.createElement('DIV');
            loaderParent.classList.add('sl-loader-items');

            let backgroundColor = getBackground(item);

            let circle = document.createElement('DIV');
            circle.classList.add('sl-circle');
            circle.setAttribute("style", `--border: ${rgbToPart(backgroundColor, "50")}; --bg: ${backgroundColor}`);
            loaderParent.appendChild(circle);

            loader.appendChild(loaderParent);

            let style = document.createElement('STYLE');
            style.setAttribute('type', 'text/css');
            style.innerText = loaderStylesText["spinnerDefault"];

            item.appendChild(style);

            let spinner = document.createElement('DIV');
            spinner.classList.add('sl-spinner3');
            spinner.appendChild(loader);
            item.appendChild(spinner);
            createTitle(item);
        },
        bubbleTop: (item, index) => bubbleLoading(item, index, 'sl-bubble2', 'sl-bubble',  1, 3, 'bubbleTop'),
        bubblePing: (item, index) => bubbleLoading(item, index, 'sl-bubble3', 'sl-bubble',  1, 3, 'bubblePing'),
        ekvalayzer: (item, index) => {
            let loaderItems = document.createElement('DIV');
            loaderItems.classList.add('sl-loader-items');

            let loader = document.createElement('DIV');
            loader.classList.add('sl-loader');

            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            let step = [
                {
                    w: 2,
                    i: 1
                },
                {
                    w: 1,
                    i: 0
                },
                {
                    w: 2,
                    i: 1
                },
                {
                    w: 1,
                    i: 2
                },
                {
                    w: 2,
                    i: 1
                },
                {
                    w: 1,
                    i: 0
                },
                {
                    w: 2,
                    i: 2
                }
            ];

            step.map(stepItem => {
                let parentRectangular = document.createElement('DIV');
                parentRectangular.classList.add('sl-parent-rectangular');
                let rectangular = document.createElement('DIV');
                rectangular.classList.add('sl-rectangular');
                rectangular.setAttribute("style", `--w: ${stepItem.w}; --i: ${stepItem.i}; --bg: ${getBackground(item)}`);
                parentRectangular.appendChild(rectangular)
                loaderItems.appendChild(parentRectangular);
            });

            loader.appendChild(loaderItems);

            let style = document.createElement('STYLE');
            style.setAttribute('type', 'text/css');
            style.innerText = loaderStylesText["ekvalayzer"];

            item.appendChild(style);

            let ekvalayzer = document.createElement('DIV');
            ekvalayzer.classList.add('sl-ekvalayzer');
            ekvalayzer.appendChild(loader);
            item.appendChild(ekvalayzer);
            createTitle(item);
        },
        boxRectangular: (item, index) => bubbleLoading(item, index, 'sl-box4', 'sl-rectangular', 1, 5, 'sl-boxRectangular'),
        hourglass: (item, index) => {
            let hourglassLoaderItems = document.createElement('DIV');
            hourglassLoaderItems.classList.add('loader-items');
            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            hourglassLoaderItems.setAttribute("style", `--size: ${size}`);

            let hourglassItem = document.createElement('DIV');
            hourglassItem.classList.add('hourglass-item');
            hourglassItem.setAttribute("style", `--bg: ${getBackground(item)}; --size: ${size}`);

            hourglassLoaderItems.appendChild(hourglassItem);

            let hourglass = document.createElement('DIV');
            hourglass.classList.add('hourglass');
            hourglass.appendChild(hourglassLoaderItems);

            item.appendChild(hourglass);
            createTitle(item);
        },
        bubbleSpin: (item, index) => {
            let itemContentLoader = document.createElement('DIV');
            itemContentLoader.classList.add('sl-item-content-loader');

            let loaderItems = document.createElement('DIV');
            loaderItems.classList.add('sl-loader-items');

            let loader = document.createElement('DIV');
            loader.classList.add('sl-loader');

            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            for(let i = 1; i <= 3; i++) {
                let circle = document.createElement('DIV');
                circle.classList.add('sl-circle');
                circle.setAttribute("style", `--bg: ${getBackground(item)}`);
                itemContentLoader.appendChild(circle);
            }
            
            loaderItems.appendChild(itemContentLoader);
            loader.appendChild(loaderItems);

            let style = document.createElement('STYLE');
            style.setAttribute('type', 'text/css');
            style.innerText = loaderStylesText["bubbleSpin"];

            item.appendChild(style);

            let bubble = document.createElement('DIV');
            bubble.classList.add('sl-bubble4');
            bubble.appendChild(loader);
            item.appendChild(bubble);
            createTitle(item);
        },
        rectangularPing: (item, index) =>{
            let loader = document.createElement('DIV');
            loader.classList.add('sl-loader');
            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            let loaderItems = document.createElement('DIV');
            loaderItems.classList.add('sl-loader-items');

            let backgroundColor = getBackground(item);

            let rectangularPing = document.createElement('DIV');
            rectangularPing.classList.add('sl-rectangular-ping');
            rectangularPing.setAttribute("style", `--bg: ${rgbToPart(backgroundColor, "50")}; --bgb: ${backgroundColor}`);

            loaderItems.appendChild(rectangularPing);
            loader.appendChild(loaderItems);

            let style = document.createElement('STYLE');
            style.setAttribute('type', 'text/css');
            style.innerText = loaderStylesText["rectangularPing"];

            item.appendChild(style);

            let box = document.createElement('DIV');
            box.classList.add('sl-box5');
            box.appendChild(loader);
            item.appendChild(box);
            createTitle(item);
        }
    };

    /**
     * @param type
     * @returns {string}
     */
    const getTypeLoader = type => {
        for(let key in loaderTypes) {
            if(loaderTypes[key] === type) {
                return key;
            }
        }

        return "spinnerDefault";
    };

    /**
     * @param item
     * @param index
     */
    const createLoader = (item, index) => {
        let type = item.getAttribute('data-loader');
        let lType = getTypeLoader(type);
        loaderCreate[lType](item, index);
    };

    let mutator = {
        option: {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true
        },
        observer: null,
        loaders: null,
        olderLoaders: []
    };

    /**
     * @param attr
     * @returns {string}
     */
    mutator.attrListString = function(attr) {
        let str = "";
        if(attr.length === 0) {
            return str;
        }

        for(let item of attr) {
            str += `${item.name}: ${item.value}; `;
        }

        return str.trim();
    };

    /**
     * @param node1
     * @param node2
     * @returns {boolean}
     */
    mutator.equalsNode = function(node1, node2) {
        let attr1 = node1.attributes;
        let attr2 = node2.attributes;

        let len1 = attr1.length;

        if(len1 !== attr2.length) {
            return false;
        }

        if(mutator.attrListString(attr1) !== mutator.attrListString(attr2)) {
            return false;
        }

        return true;
    };

    mutator.equals = function() {
        this.loaders = document.querySelectorAll('[data-loader]');

        if(this.olderLoaders.length !== this.loaders.length) {
            return false;
        }

        for(let [index, item] of this.loaders.entries()) {
            if(!this.equalsNode(item, this.olderLoaders[index])) {
                return false;
            }
        }

        return true;
    };

    /**
     * @param item
     */
    mutator.removeAnotherLoaders = function(item) {
        while(item.firstChild) {
            item.removeChild(item.firstChild);
        }
    };

    mutator.disconnect = function() {
        if(!this.observer) {
            return false;
        }

        this.observer.disconnect();
    };

    mutator.replaceLoader = function() {
        if(mutator.loaders && !mutator.equals()) {
            mutator.disconnect();
            mutator.loaders.forEach((item, index) => mutator.removeAnotherLoaders(item));
            mutator.addLoaders();
            mutator.start();
        }
    };

    /**
     * @param nodeList
     */
    mutator.cloneNodeList = function(nodeList) {
        this.olderLoaders = [];
        nodeList.forEach((item, index) => {
            this.olderLoaders.push(item.cloneNode(true));
        });
    };

    mutator.addLoaders = function() {
        let loaders = document.querySelectorAll('[data-loader]');
        this.loaders = loaders;
        this.cloneNodeList(loaders);
    };

    mutator.connect = function() {
        this.observer = new MutationObserver(this.replaceLoader);
    };

    mutator.start = function() {
        if(!this.observer) {
            this.connect();
            this.addLoaders();
        }

        if(this.loaders.length > 0) {
            this.loaders.forEach((item, index) => createLoader(item, index));
        }

        if(this.observer) {
            this.observer.observe(document, this.option);
        }
    };

    mutator.start();
})();