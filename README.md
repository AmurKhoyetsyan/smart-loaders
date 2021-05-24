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

| Types [data-loader] |
| ------------------- |
| box-rotate-x        |
| box-rotate-y        |
| box-rotate-z        |
| box-rectangular     |
| heart               |
| bubble-scale        |
| bubble-top          |
| bubble-ping         |
| bubble-spin         |
| spinner-cub         |
| spinner-circle      |
| spinner-default     |
| ekvalayzer          |
| hourglass           |
| rectangular-ping    |

<br />

| Types [loader-color] | Types    | Value Example                   |
| -------------------- | -------- | ------------------------------- |
| rgb                  | String   | rgb(0, 0, 0) or rgb(0%, 0%, 0%) |
| hex                  | String   | #000000 or #000                 |
| hsl                  | String   | hsl(0deg 0% 0%)                 |
| name                 | String   | black                           |


<br/>

concat css file

    <link rel="stylesheet" type="text/css" href="./css/loader.css" />
    
or
    
    <link rel="stylesheet" type="text/css" href="./css/loader.css" />


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
            <link rel="stylesheet" type="text/css" href="./css/loader.min.css" />
            <link rel="stylesheet" type="text/css" href="./css/style.css" />
        </head>
        <body>
            <div class="parent">
                <div class="row">
                    <div class="item">
                        <div data-loader="box-rectangular" loader-color="#FFFFFF" title-color="#FFFFFF" title="box-rectangular" size={100}></div>
                    </div>
                    <div class="item">
                        <div data-loader="box-rectangular" loader-color="#FFFFFF" title="box-rectangular" size={100}></div>
                    </div>
                    <div class="item">
                        <div data-loader="box-rectangular" title="box-rectangular" size={100}></div>
                    </div>
                    <div class="item">
                        <div data-loader="box-rectangular" size={100}></div>
                    </div>
                    <div class="item">
                        <div data-loader size={50}></div>
                    </div>
                    <div class="item">
                        <div data-loader></div>
                    </div>
                </div>
            </div>
            <script type="text/javascript" src="js/loader.min.js"></script>
        </body>
    </html>
