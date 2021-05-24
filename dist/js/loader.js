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
    const loaderTypes = {
        boxRotateX: "box-rotate-x",
        boxRotateY: "box-rotate-y",
        boxRotateZ: "box-rotate-z",
        boxRectangular: "box-rectangular",
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

    const getColorByName = name => {
        let key = name.toLowerCase();
        if(colorTypes.hasOwnProperty(key)) {
            return colorTypes[key];
        }

        return name;
    };

    let rgbToHex = function (rgb) {
        let hex = Number(parseInt(rgb)).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    let percentToCountForRGB = p => {
        let per = parseInt(p);

        if(isNaN(per) || per === 0) {
            return rgbToHex(0);
        }

        let count = Math.round((255 / 100) * per);

        return rgbToHex(count);
    };

    let fullColorHex = (r, g, b) => {
        let red = r.indexOf('%') === -1 ? rgbToHex(r) : percentToCountForRGB(r);
        let green = g.indexOf('%') === -1 ? rgbToHex(g) : percentToCountForRGB(g);
        let blue = b.indexOf('%') === -1 ? rgbToHex(b) : percentToCountForRGB(b);
        return red + green + blue;
    };

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

    let hexColorThreeDigitToSixDigit = (color, alpha) => {
        if(color.length === 4) {
            let thereHex = color.substring(1, color.length);
            let thereArray = thereHex.split('');
            let sixHex = thereArray.reduce((total, item) => total += item + item, '');

            return `#${sixHex}${alpha}`;
        }

        return `${color}${alpha}`;
    };

    const trim = str => {
        str = str.split(' ').join('');
        if(str.indexOf(' ') !== -1) {
            return trim(str);
        }

        return str;
    }

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

    let createTitle = item => {
        if(item.hasAttribute('title')) {
            let color = item.hasAttribute('title-color') ? item.getAttribute('title-color') : "#FFFFFF";
            let loaderTitle = document.createElement('DIV');
            loaderTitle.classList.add('loader-title');
            loaderTitle.setAttribute("style", `--cl: ${color}`);
            let span = document.createElement('SPAN');
            span.innerText = item.getAttribute('title');
            loaderTitle.appendChild(span);
            item.appendChild(loaderTitle);
        }
    };

    const getZoom = count => {
        let size = parseFloat(count);
        if(size === 0) {
            return 0;
        }

        let zoom = size / 100;
        return zoom.toFixed(2);
    };

    const getBackground = item => item.hasAttribute('loader-color') ? item.getAttribute('loader-color') : "#FFFFFF";

    const boxRotate = (item, index, classes) => {
        let cub = document.createElement('DIV');
        cub.classList.add('cub');
        cub.setAttribute("style", `--bg: ${getBackground(item)}`);

        let parentCub = document.createElement('DIV');
        parentCub.classList.add('parent-cub');

        let loaderItems = document.createElement('DIV');
        loaderItems.classList.add('loader-items');

        let loader = document.createElement('DIV');
        loader.classList.add('loader');

        let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
        loader.setAttribute("style", `--size: ${size}`);

        parentCub.appendChild(cub);
        loaderItems.appendChild(parentCub);
        loader.appendChild(loaderItems);

        let box = document.createElement('DIV');
        box.classList.add(classes);
        box.appendChild(loader);
        item.appendChild(box);
        createTitle(item);
    };

    const bubbleLoading = (item, index, classes, itemClasses, start, end) => {
        let loaderItems = document.createElement('DIV');
        loaderItems.classList.add('loader-items');

        let loader = document.createElement('DIV');
        loader.classList.add('loader');

        let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
        loader.setAttribute("style", `--size: ${size}`);

        for(let i = start; i <= end; i++) {
            let bubble = document.createElement('DIV');
            bubble.classList.add(itemClasses);
            bubble.setAttribute("style", `--i: ${i}; --bg: ${getBackground(item)}`);
            loaderItems.appendChild(bubble);
        }

        loader.appendChild(loaderItems);

        let bubble = document.createElement('DIV');
        bubble.classList.add(classes);
        bubble.appendChild(loader);
        item.appendChild(bubble);
        createTitle(item);
    };

    const spinnerLoading = (item, index, classes, start, end) => {
        let loaderItems = document.createElement('DIV');
        loaderItems.classList.add('loader-items');

        let loader = document.createElement('DIV');
        loader.classList.add('loader');

        let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
        loader.setAttribute("style", `--size: ${size}`);

        for(let i = start; i <= end; i++) {
            let item = document.createElement('DIV');
            item.classList.add('item');
            item.setAttribute("style", `--i: ${i}; --bg: ${getBackground(item)}`);
            loaderItems.appendChild(item);
        }

        loader.appendChild(loaderItems);

        let spinner = document.createElement('DIV');
        spinner.classList.add(classes);
        spinner.appendChild(loader);
        item.appendChild(spinner);
        createTitle(item);
    };

    const loaderCreate = {
        boxRotateX: (item, index) => boxRotate(item, index, 'box1'),
        boxRotateY: (item, index) => boxRotate(item, index, 'box2'),
        boxRotateZ: (item, index) => boxRotate(item, index, 'box3'),
        heart: (item, index) => {
            let loaderItems = document.createElement('DIV');
            loaderItems.classList.add('loader-items');

            let loader = document.createElement('DIV');
            loader.classList.add('loader');

            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            let heart = document.createElement('DIV');
            heart.classList.add('heart');
            heart.setAttribute("style", `--bg: ${getBackground(item)}`);

            loaderItems.appendChild(heart);
            loader.appendChild(loaderItems);

            let heart1 = document.createElement('DIV');
            heart1.classList.add('heart1');
            heart1.appendChild(loader);
            item.appendChild(heart1);
            createTitle(item);
        },
        bubbleScale: (item, index) => bubbleLoading(item, index, 'bubble1', 'bubble', 1, 3),
        spinnerCub: (item, index) => spinnerLoading(item, index, 'spinner1', 1, 12),
        spinnerCircle: (item, index) => spinnerLoading(item, index, 'spinner2', 0, 7),
        spinnerDefault: (item, index) => {
            let loader = document.createElement('DIV');
            loader.classList.add('loader');
            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            let loaderParent = document.createElement('DIV');
            loaderParent.classList.add('loader-items');

            let backgroundColor = getBackground(item);

            let circle = document.createElement('DIV');
            circle.classList.add('circle');
            circle.setAttribute("style", `--border: ${rgbToPart(backgroundColor, "50")}; --bg: ${backgroundColor}`);
            loaderParent.appendChild(circle);

            loader.appendChild(loaderParent);

            let spinner = document.createElement('DIV');
            spinner.classList.add('spinner3');
            spinner.appendChild(loader);
            item.appendChild(spinner);
            createTitle(item);
        },
        bubbleTop: (item, index) => bubbleLoading(item, index, 'bubble2', 'bubble',  1, 3),
        bubblePing: (item, index) => bubbleLoading(item, index, 'bubble3', 'bubble',  1, 3),
        ekvalayzer: (item, index) => {
            let loaderItems = document.createElement('DIV');
            loaderItems.classList.add('loader-items');

            let loader = document.createElement('DIV');
            loader.classList.add('loader');

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
                parentRectangular.classList.add('parent-rectangular');
                let rectangular = document.createElement('DIV');
                rectangular.classList.add('rectangular');
                rectangular.setAttribute("style", `--w: ${stepItem.w}; --i: ${stepItem.i}; --bg: ${getBackground(item)}`);
                parentRectangular.appendChild(rectangular)
                loaderItems.appendChild(parentRectangular);
            });

            loader.appendChild(loaderItems);

            let ekvalayzer = document.createElement('DIV');
            ekvalayzer.classList.add('ekvalayzer');
            ekvalayzer.appendChild(loader);
            item.appendChild(ekvalayzer);
            createTitle(item);
        },
        boxRectangular: (item, index) => bubbleLoading(item, index, 'box4', 'rectangular', 1, 5),
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
            itemContentLoader.classList.add('item-content-loader');

            let loaderItems = document.createElement('DIV');
            loaderItems.classList.add('loader-items');

            let loader = document.createElement('DIV');
            loader.classList.add('loader');

            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            for(let i = 1; i <= 3; i++) {
                let circle = document.createElement('DIV');
                circle.classList.add('circle');
                circle.setAttribute("style", `--bg: ${getBackground(item)}`);
                itemContentLoader.appendChild(circle);
            }
            
            loaderItems.appendChild(itemContentLoader);
            loader.appendChild(loaderItems);

            let bubble = document.createElement('DIV');
            bubble.classList.add('bubble4');
            bubble.appendChild(loader);
            item.appendChild(bubble);
            createTitle(item);
        },
        rectangularPing: (item, index) =>{
            let loader = document.createElement('DIV');
            loader.classList.add('loader');
            let size = item.hasAttribute('size') ? getZoom(item.getAttribute('size')) : 1;
            loader.setAttribute("style", `--size: ${size}`);

            let loaderItems = document.createElement('DIV');
            loaderItems.classList.add('loader-items');

            let backgroundColor = getBackground(item);

            let rectangularPing = document.createElement('DIV');
            rectangularPing.classList.add('rectangular-ping');
            rectangularPing.setAttribute("style", `--bg: ${rgbToPart(backgroundColor, "50")}; --bgb: ${backgroundColor}`);

            loaderItems.appendChild(rectangularPing);
            loader.appendChild(loaderItems);

            let box = document.createElement('DIV');
            box.classList.add('box5');
            box.appendChild(loader);
            item.appendChild(box);
            createTitle(item);
        }
    };

    const getTypeLoader = type => {
        for(let key in loaderTypes) {
            if(loaderTypes[key] === type) {
                return key;
            }
        }

        return "spinnerDefault";
    };

    const createLoader = (item, index) => {
        let type = item.getAttribute('data-loader');
        let lType = getTypeLoader(type);
        loaderCreate[lType](item, index);
    };

    const run = () => {
        let loaders = document.querySelectorAll('[data-loader]');

        if(loaders) {
            loaders.forEach((item, index) => createLoader(item, index));
        }
    };

    run();
})();