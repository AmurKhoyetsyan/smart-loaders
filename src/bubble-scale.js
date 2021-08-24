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
     * @param classes
     * @param itemClasses
     * @param start
     * @param end
     * @param typeLoader
     */
    const bubbleLoading = (item, index, classes, itemClasses, start, end, typeLoader) => {
        let loaderItems = document.createElement('DIV');
        loaderItems.classList.add('sl-loader-items');

        let loader = document.createElement('DIV');
        loader.classList.add('sl-loader');

        let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
        loader.setAttribute("style", `--size: ${size}`);

        for (let i = start; i <= end; i++) {
            let bubble = document.createElement('DIV');
            bubble.classList.add(itemClasses);
            bubble.setAttribute("style", `--i: ${i}; --bg: ${getBackground(item)}`);
            loaderItems.appendChild(bubble);
        }

        loader.appendChild(loaderItems);

        let style = document.createElement('STYLE');
        style.setAttribute('type', 'text/css');
        style.innerText = "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} [data-loader], .sl-bubble1 {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-bubble1 .sl-loader-title {padding-top: 10px;} .sl-bubble1 .sl-loader {width: 150px;height: 40px;-ms-zoom: var(--size);zoom: var(--size);} .sl-bubble1 .sl-loader-items {width: 100%;display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-direction: row;-webkit-box-orient: horizontal;-webkit-box-direction: normal;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-ms-flex-pack: space-between;-webkit-box-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;} .sl-bubble1 .sl-loader .sl-loader-items .sl-bubble {-webkit-animation: sl-bubble1 1200ms ease-in-out infinite;animation: sl-bubble1 1200ms ease-in-out infinite;} .sl-bubble1 .sl-loader .sl-loader-items .sl-bubble {width: 30px;height: 30px;background-color: var(--bg);border-radius: 100%;-webkit-animation-delay: calc(var(--i) * -350ms);animation-delay: calc(var(--i) * -350ms);} @-webkit-keyframes sl-bubble1 {to {-webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {-webkit-transform: scale(0.3, 0.3);transform: scale(0.3, 0.3);}from {-webkit-transform: scale(1, 1);transform: scale(1, 1);}} @keyframes sl-bubble1 {to {-webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {-webkit-transform: scale(0.3, 0.3);transform: scale(0.3, 0.3);}from {-webkit-transform: scale(1, 1);transform: scale(1, 1);}}";

        item.appendChild(style);

        let bubble = document.createElement('DIV');
        bubble.classList.add(classes);
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
        let loaders = document.querySelectorAll('[data-loader="bubble-scale"]');
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
            this.loaders.forEach((item, index) => bubbleLoading(item, index, 'sl-bubble1', 'sl-bubble', 1, 3, 'bubbleScale'));
        }

        if (this.observer) {
            this.observer.observe(document, this.option);
        }
    };

    mutator.start();
})();