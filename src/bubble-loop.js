/**
 * Copyright (c) Amur 2020
 *
 * Smart Loaders
 * https://github.com/AmurKhoyetsyan/smart-loaders
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 ;(function () {
    /**
     * @param item
     */
    let createTitle = item => {
        if (item.hasAttribute('title')) {
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
        if (size === 0) {
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
     */
    const bubbleLoop = (item, index) => {
        let loader = document.createElement('DIV');
        loader.classList.add('sl-loader');

        let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
        loader.setAttribute("style", `--size: ${size}`);

        for (let i = 0; i < 4; i++) {
            let bubbleItem = document.createElement('DIV');
            bubbleItem.classList.add('sl-loader-item');
            bubbleItem.setAttribute("style", `--bg: ${getBackground(item)}`);
            loader.appendChild(bubbleItem);
        }

        let style = document.createElement('STYLE');
        style.setAttribute('type', 'text/css');
        style.innerText = "[data-loader],[data-loader] *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}[data-loader] .sl-loader-title{width:100%;text-align:center;font-size:17px;font-weight:700;line-height:1.7;color:var(--cl)}.sl-bubble5,[data-loader]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.sl-bubble5 .sl-loader{width:100px;position:relative;height:35px;-webkit-transform:scale(var(--size));transform:scale(var(--size))}.sl-bubble5 .sl-loader .sl-loader-item{width:20px;height:20px;background-color:var(--bg);position:absolute;top:50%;left:0;border-radius:50%}.sl-bubble5 .sl-loader .sl-loader-item:nth-child(2){-webkit-animation:sl-bubble5AnimOne .6s linear infinite;animation:sl-bubble5AnimOne .6s linear infinite}.sl-bubble5 .sl-loader .sl-loader-item:nth-child(3){-webkit-animation:sl-bubble5AnimTwo .6s linear infinite;animation:sl-bubble5AnimTwo .6s linear infinite}.sl-bubble5 .sl-loader .sl-loader-item:first-child{-webkit-animation:sl-bubble5AnimThere .6s linear infinite;animation:sl-bubble5AnimThere .6s linear infinite}.sl-bubble5 .sl-loader .sl-loader-item:last-child{-webkit-animation:sl-bubble5AnimFour .6s linear infinite;animation:sl-bubble5AnimFour .6s linear infinite}@-webkit-keyframes sl-bubble5AnimOne{0%{-webkit-transform:translate(7px,-50%) scale(1);transform:translate(7px,-50%) scale(1)}100%{-webkit-transform:translate(41px,-50%) scale(1.5);transform:translate(41px,-50%) scale(1.5)}}@keyframes sl-bubble5AnimOne{0%{-webkit-transform:translate(7px,-50%) scale(1);transform:translate(7px,-50%) scale(1)}100%{-webkit-transform:translate(41px,-50%) scale(1.5);transform:translate(41px,-50%) scale(1.5)}}@-webkit-keyframes sl-bubble5AnimTwo{0%{-webkit-transform:translate(41px,-50%) scale(1.5);transform:translate(41px,-50%) scale(1.5)}100%{-webkit-transform:translate(74px,-50%) scale(1);transform:translate(74px,-50%) scale(1)}}@keyframes sl-bubble5AnimTwo{0%{-webkit-transform:translate(41px,-50%) scale(1.5);transform:translate(41px,-50%) scale(1.5)}100%{-webkit-transform:translate(74px,-50%) scale(1);transform:translate(74px,-50%) scale(1)}}@-webkit-keyframes sl-bubble5AnimThere{0%{-webkit-transform:translate(7px,-50%) scale(.5);transform:translate(7px,-50%) scale(.5)}100%{-webkit-transform:translate(7px,-50%) scale(1);transform:translate(7px,-50%) scale(1)}}@keyframes sl-bubble5AnimThere{0%{-webkit-transform:translate(7px,-50%) scale(.5);transform:translate(7px,-50%) scale(.5)}100%{-webkit-transform:translate(7px,-50%) scale(1);transform:translate(7px,-50%) scale(1)}}@-webkit-keyframes sl-bubble5AnimFour{0%{-webkit-transform:translate(74px,-50%) scale(1);transform:translate(74px,-50%) scale(1)}100%{-webkit-transform:translate(74px,-50%) scale(.5);transform:translate(74px,-50%) scale(.5)}}@keyframes sl-bubble5AnimFour{0%{-webkit-transform:translate(74px,-50%) scale(1);transform:translate(74px,-50%) scale(1)}100%{-webkit-transform:translate(74px,-50%) scale(.5);transform:translate(74px,-50%) scale(.5)}}";

        item.appendChild(style);

        let bubble = document.createElement('DIV');
        bubble.classList.add('sl-bubble5');
        bubble.appendChild(loader);
        item.appendChild(bubble);
        createTitle(item);
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
    mutator.attrListString = function (attr) {
        let str = "";
        if (attr.length === 0) {
            return str;
        }

        for (let item of attr) {
            str += `${item.name}: ${item.value}; `;
        }

        return str.trim();
    };

    /**
     * @param node1
     * @param node2
     * @returns {boolean}
     */
    mutator.equalsNode = function (node1, node2) {
        let attr1 = node1.attributes;
        let attr2 = node2.attributes;

        let len1 = attr1.length;

        if (len1 !== attr2.length) {
            return false;
        }

        if (mutator.attrListString(attr1) !== mutator.attrListString(attr2)) {
            return false;
        }

        return true;
    };

    mutator.equals = function () {
        this.loaders = document.querySelectorAll('[data-loader]');

        if (this.loaders === null) {
            return false;
        }

        if (this.olderLoaders.length !== this.loaders.length) {
            return false;
        }

        for (let [index, item] of this.loaders.entries()) {
            if (!this.equalsNode(item, this.olderLoaders[index])) {
                return false;
            }
        }

        return true;
    };

    /**
     * @param item
     */
    mutator.removeAnotherLoaders = function (item) {
        while (item.firstChild) {
            item.removeChild(item.firstChild);
        }
    };

    mutator.disconnect = function () {
        if (!this.observer) {
            return false;
        }

        this.observer.disconnect();
    };

    mutator.replaceLoader = function () {
        if (mutator.loaders && !mutator.equals()) {
            mutator.disconnect();
            mutator.loaders.forEach((item, index) => mutator.removeAnotherLoaders(item));
            mutator.addLoaders();
            mutator.start();
        }
    };

    /**
     * @param nodeList
     */
    mutator.cloneNodeList = function (nodeList) {
        this.olderLoaders = [];
        nodeList.forEach((item, index) => {
            this.olderLoaders.push(item.cloneNode(true));
        });
    };

    mutator.addLoaders = function () {
        let loaders = document.querySelectorAll('[data-loader="bubble-loop"]');
        
        if (loaders !== null) {
            this.loaders = loaders;
            this.cloneNodeList(loaders);
        }
    };

    mutator.connect = function () {
        this.observer = new MutationObserver(this.replaceLoader);
    };

    mutator.start = function () {
        if (!this.observer) {
            this.connect();
            this.addLoaders();
        }

        if (this.loaders.length > 0) {
            this.loaders.forEach((item, index) => bubbleLoop(item, index));
        }

        if (this.observer) {
            this.observer.observe(document, this.option);
        }
    };

    mutator.start();
})();