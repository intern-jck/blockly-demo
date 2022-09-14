recipe

npm
```bash
npm init -y
```

git
```bash
git init
```

Create gitignore and readme
```bash
touch .gitignore README.md
```

Webpack
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

Babel
```bash
npm i --save-dev babel-loader @babel/preset-env @babel/core @babel/plugin-transform-runtime @babel/preset-react @babel/eslint-parser @babel/runtime @babel/cli
```

Linter
```bash
npm i --save-dev eslint eslint-config-airbnb-base eslint-plugin-jest eslint-config-prettier path
```

React
```bash
npm i react react-dom
```

Create public folder and index.html file
```bash
mkdir public
touch ./public/index.html
```

Entry point for Webpack
```bash
touch index.js
```

index.js
```js
import React from "react";
import reactDom from "react-dom";
import App from "./src/App"

reactDom.render(<App />, document.getElementById("root"));
```

Create webpack config file
```bash
touch webpack.config.js
```

webpack.config.js
```js
const path = require("path");

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve.
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports={
    /** "mode" * the environment - development, production, none. tells webpack
     * to use its built-in optimizations accordingly. default is production
     */
    mode: "development",
    entry: "./index.js",
    output: {
        /** "path"
         * the folder path of the output file
         */
        path: path.resolve(__dirname, "public"),
        /** "filename"
         * the name of the output file
         */
        filename: "main.js"
    },
    /** "target"
     * setting "node" as target app (server side), and setting it as "web" is
     * for browser (client side). Default is "web"
     */
    target: "web",
    devServer: {
        /** "port"
         * port of dev server
        */
        port: "8080",
        /** "static"
         * This property tells Webpack what static file it should serve
        */
        static: ["./public"],
        /** "open"
         * opens the browser after server is successfully started
        */
        open: true,
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only".
         * "only" is used if enable Hot Module Replacement without page
         * refresh as a fallback in case of build failures
         */
        hot: true ,
        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
        liveReload: true
    },
    resolve: {
        /** "extensions"
         * If multiple files share the same name but have different extensions, webpack will
         * resolve the one with the extension listed first in the array and skip the rest.
         * This is what enables users to leave off the extension when importing
         */
        extensions: ['.js','.jsx','.json']
    },
    module:{
        /** "rules"
         * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
         * file inside of a require()/import statement, use the babel-loader to transform it before you
         * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
         * being searched"
         */
        rules: [
            {
                test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use:  'babel-loader' //loader which we are going to use
            }
        ]
    }
}
```





Create babelrc file
```bash
touch .babelrc
```

Update package json file
```bash
{
  "name": "blockly-react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server .",
    "build": "Webpack .",
    "test": "test"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.18.10",
    "@babel/core": "^7.19.0",
    "@babel/eslint-parser": "^7.18.9",
    "@babel/plugin-transform-runtime": "^7.18.10",
    "@babel/preset-env": "^7.19.0",
    "@babel/preset-react": "^7.18.6",
    "@babel/runtime": "^7.19.0",
    "babel-loader": "^8.2.5",
    "eslint": "^8.23.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-jest": "^27.0.2",
    "path": "^0.12.7",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.11.0"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

Final folder structure:
```bash
ADD IT HERE
```

Run
```bash
npm run build
```

Start
```bash
npm start
```

Dev
```bash
npm run dev
```
