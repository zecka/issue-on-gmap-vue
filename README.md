# gmap-vue-issue

This repository is to reproduce an [issue on gmap-vue](https://github.com/diegoazh/gmap-vue/issues/269)

## Issue description

issue link: https://github.com/diegoazh/gmap-vue/issues/269

After installation I only import plugin as follow in main.js

```js
import GmapVue from 'gmap-vue'
```
Then run "serve" task (`vue-cli-service serve`)

But got following error:

```
 error  in ./node_modules/gmap-vue/dist/components/drawing-manager.vue?vue&type=script&lang=js&

Module parse failed: Unexpected token (85:16)
File was processed with these loaders:
 * ./node_modules/cache-loader/dist/cjs.js
 * ./node_modules/babel-loader/lib/index.js
 * ./node_modules/cache-loader/dist/cjs.js
 * ./node_modules/vue-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
|       _this.$map.addListener('click', _this.clearSelection);
| 
>       if (_this?.finalShapes?.length) {
|         _this.drawAll();
|       }

 @ ./node_modules/gmap-vue/dist/components/drawing-manager.vue?vue&type=script&lang=js& 1:0-244 1:260-263 1:265-506 1:265-506
 @ ./node_modules/gmap-vue/dist/components/drawing-manager.vue
 @ ./node_modules/gmap-vue/dist/main.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://172.19.33.146:8080&sockPath=/sockjs-node (webpack)/hot/dev-server.js ./src/main.js

```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
