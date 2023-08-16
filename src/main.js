/*
 * @Author: 陈迪秀 1170776994@qq.com
 * @Date: 2023-06-20 08:43:23
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-08-16 09:50:33
 * @FilePath: \css-project\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createApp } from "vue";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/message.scss";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(ElementPlus);
app.use(router).mount("#app");
