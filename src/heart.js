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
    const heart = (item, index) => {
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
        style.innerText = "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} [data-loader], .sl-heart1 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-heart1 .sl-loader {width: 100px;-ms-zoom: var(--size);zoom: var(--size);} .sl-heart1 .sl-loader .sl-loader-items {width: 100%;height: 100px;position: relative;} .sl-heart1 .sl-loader .sl-loader-items .sl-heart {width: 40px;height: 40px;border-radius: 50%;position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-85%, -75%);transform: translate(-85%, -75%);background-color: var(--bg);-webkit-animation: sl-heart1 1000ms linear infinite;animation: sl-heart1 1000ms linear infinite;} .sl-heart1 .sl-loader .sl-loader-items .sl-heart::after {content: '';width: 100%;height: 100%;border-radius: 50%;position: absolute;left: 30px;top: 0;background-color: var(--bg);} .sl-heart1 .sl-loader .sl-loader-items .sl-heart::before {content: '';width: 100%;height: 100%;-webkit-transform: rotate(45deg);transform: rotate(45deg);position: absolute;left: 15px;top: 15px;background-color: var(--bg);} @-webkit-keyframes sl-heart1 {to {-webkit-transform: translate(-60%, -60%) scale(0.5);transform: translate(-60%, -60%) scale(0.5);}30% {-webkit-transform: translate(-80%, -70%) scale(0.8);transform: translate(-80%, -70%) scale(0.8);}60% {-webkit-transform: translate(-60%, -60%) scale(0.5);transform: translate(-60%, -60%) scale(0.5);}80% {-webkit-transform: translate(-80%, -70%) scale(0.8);transform: translate(-80%, -70%) scale(0.8);}from {-webkit-transform: translate(-85%, -75%) scale(1);transform: translate(-85%, -75%) scale(1);}} @keyframes sl-heart1 {to {-webkit-transform: translate(-60%, -60%) scale(0.5);transform: translate(-60%, -60%) scale(0.5);}30% {-webkit-transform: translate(-80%, -70%) scale(0.8);transform: translate(-80%, -70%) scale(0.8);}60% {-webkit-transform: translate(-60%, -60%) scale(0.5);transform: translate(-60%, -60%) scale(0.5);}80% {-webkit-transform: translate(-80%, -70%) scale(0.8);transform: translate(-80%, -70%) scale(0.8);}from {-webkit-transform: translate(-85%, -75%) scale(1);transform: translate(-85%, -75%) scale(1);}}";

        item.appendChild(style);

        let heart1 = document.createElement('DIV');
        heart1.classList.add('sl-heart1');
        heart1.appendChild(loader);
        item.appendChild(heart1);
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
        let loaders = document.querySelectorAll('[data-loader="heart"]');
        this.loaders = loaders;
        this.cloneNodeList(loaders);
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
            this.loaders.forEach((item, index) => heart(item, index));
        }

        if (this.observer) {
            this.observer.observe(document, this.option);
        }
    };

    mutator.start();
})();