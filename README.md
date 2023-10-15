## Smart Loaders

## [demo page](https://amurkhoyetsyan.github.io/smart-loaders/)

### Loaders JS

<img src="https://raw.githubusercontent.com/AmurKhoyetsyan/react-js-loader/master/img/loader.gif" alt="loader" />

|Attributes     | Types    |
| ------------- | -------- |
| data-loader   | String   |
| loader-color  | String   |
| title         | String   |
| title-color   | String   |
| size          | Integer  |

<br/>

| Types [data-loader] | *.js                                             | *.min.js                                                 |
| ------------------- | ------------------------------------------------ |--------------------------------------------------------- |
| box-rotate-x        | [box-rotate-x.js](./src/box-rotate-x.js)         | [box-rotate-x.min.js](./src/box-rotate-x.min.js)         |
| box-rotate-y        | [box-rotate-y.js](./src/box-rotate-y.js)         | [box-rotate-y.min.js](./src/box-rotate-y.min.js)         |
| box-rotate-z        | [box-rotate-z.js](./src/box-rotate-z.js)         | [box-rotate-z.min.js](./src/box-rotate-z.min.js)         |
| box-rectangular     | [box-rectangular.js](./src/box-rectangular.js)   | [box-rectangular.min.js](./src/box-rectangular.min.js)   |
| box-up              | [box-up.js](./src/box-up.js)                     | [box-up.min.js](./src/box-up.min.js)                     |
| heart               | [heart.js](./src/heart.js)                       | [heart.min.js](./src/heart.min.js)                       |
| bubble-scale        | [bubble-scale.js](./src/bubble-scale.js)         | [bubble-scale.min.js](./src/bubble-scale.min.js)         |
| bubble-top          | [bubble-top.js](./src/bubble-top.js)             | [bubble-top.min.js](./src/bubble-top.min.js)             |
| bubble-ping         | [bubble-ping.js](./src/bubble-ping.js)           | [bubble-ping.min.js](./src/bubble-ping.min.js)           |
| bubble-spin         | [bubble-spin.js](./src/bubble-spin.js)           | [bubble-spin.min.js](./src/bubble-spin.min.js)           |
| bubble-loop         | [bubble-loop.js](./src/bubble-loop.js)           | [bubble-loop.min.js](./src/bubble-loop.min.js)           |
| spinner-cub         | [spinner-cub.js](./src/spinner-cub.js)           | [spinner-cub.min.js](./src/spinner-cub.min.js)           |
| spinner-circle      | [spinner-circle.js](./src/spinner-circle.js)     | [spinner-circle.min.js](./src/spinner-circle.min.js)     |
| spinner-default     | [spinner-default.js](./src/spinner-default.js)   | [spinner-default.min.js](./src/spinner-default.min.js)   |
| ekvalayzer          | [ekvalayzer.js](./src/ekvalayzer.js)             | [ekvalayzer.min.js](./src/ekvalayzer.min.js)             |
| hourglass           | [hourglass.js](./src/hourglass.js)               | [hourglass.min.js](./src/hourglass.min.js)               |
| rectangular-ping    | [rectangular-ping.js](./src/rectangular-ping.js) | [rectangular-ping.min.js](./src/rectangular-ping.min.js) |
| ping-cube           | [ping-cube.js](./src/ping-cube.js)               | [ping-cube.min.js](./src/ping-cube.min.js)               |

<br />

| Types [loader-color] | Types    | Value Example                   |
| -------------------- | -------- | ------------------------------- |
| rgb                  | String   | rgb(0, 0, 0) or rgb(0%, 0%, 0%) |
| hex                  | String   | #000000 or #000                 |
| hsl                  | String   | hsl(0deg 0% 0%)                 |
| name                 | String   | black                           |


<br/>

concat js file

    <script type="text/javascript" src="js/loader.js"></script>
    
or

    <script type="text/javascript" src="js/loader.min.js"></script>
    
    
### Example for pure js

    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Loader Pure JS</title>
            <link rel="stylesheet" type="text/css" href="./css/style.css" />
        </head>
        <body>
            <div class="parent">
                <div class="row">
                    <div class="item">
                        <div data-loader="box-rectangular" loader-color="#FFFFFF" title-color="#FFFFFF" title="box-rectangular" size="100"></div>
                    </div>
                    <div class="item">
                        <div data-loader="box-rectangular" loader-color="#FFFFFF" title="box-rectangular" size="100"></div>
                    </div>
                    <div class="item">
                        <div data-loader="box-rectangular" title="box-rectangular" size="100"></div>
                    </div>
                    <div class="item">
                        <div data-loader="box-rectangular" size="100"></div>
                    </div>
                    <div class="item">
                        <div data-loader size="50"></div>
                    </div>
                    <div class="item">
                        <div data-loader></div>
                    </div>
                </div>
            </div>
            <script type="text/javascript" src="js/loader.min.js"></script>
        </body>
    </html>
