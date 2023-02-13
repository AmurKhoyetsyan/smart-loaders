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
    let ekvalayzer = (item, index) => {
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
        style.innerText = "[data-loader],[data-loader] * {padding: 0;margin: 0;-webkit-box-sizing: border-box;box-sizing: border-box;} [data-loader] .sl-loader-title {width: 100%;text-align: center;font-size: 17px;font-weight: 700;line-height: 1.7;color: var(--cl);} [data-loader], .sl-ekvalayzer {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;} .sl-ekvalayzer .sl-loader-items {width: 100%;height: 100px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: end;-ms-flex-align: end;align-items: flex-end;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-transform: scale(var(--size));transform: scale(var(--size))} .sl-ekvalayzer .sl-loader-items .sl-parent-rectangular {padding: 3px;width: -webkit-min-content;width: -moz-min-content;width: min-content;height: -webkit-min-content;height: -moz-min-content;height: min-content;} .sl-ekvalayzer .sl-loader-items .sl-parent-rectangular .sl-rectangular {width: 10px;background-color: var(--bg);-webkit-box-shadow: 0 0 10px 2px var(--bg);box-shadow: 0 0 10px 2px var(--bg);-webkit-animation: sl-ekvalayzer1 500ms ease-in-out infinite;animation: sl-ekvalayzer1 500ms ease-in-out infinite;-webkit-animation-delay: calc(var(--i) * -100ms);animation-delay: calc(var(--i) * -100ms);} @-webkit-keyframes sl-ekvalayzer1 {from {height: calc(var(--w) * 20px);}50% {height: 80px;}to {height: calc(var(--w) * 20px);}} @keyframes sl-ekvalayzer1 {from {height: calc(var(--w) * 20px);}50% {height: 80px;}to {height: calc(var(--w) * 20px);}}";

        item.appendChild(style);

        let ekvalayzer = document.createElement('DIV');
        ekvalayzer.classList.add('sl-ekvalayzer');
        ekvalayzer.appendChild(loader);
        item.appendChild(ekvalayzer);
        createTitle(item);
    }

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
        this.loaders = document.querySelectorAll('[data-loader="ekvalayzer"]');

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
        let loaders = document.querySelectorAll('[data-loader="ekvalayzer"]');
        
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
            this.loaders.forEach((item, index) => ekvalayzer(item, index));
        }

        if (this.observer) {
            this.observer.observe(document, this.option);
        }
    };

    mutator.start();
})();