/*
 * @Author: 陈迪秀 1170776994@qq.com
 * @Date: 2023-06-20 14:21:15
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-06-21 16:17:03
 * @FilePath: \css-project\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/a",
    name: "a",
    component: () => import("@/views/view-A.vue"),
  },
  {
    path: "/b",
    name: "b",
    component: () => import("@/views/view-B.vue"),
  },
  {
    path: "/c",
    name: "c",
    component: () => import("@/views/view-C.vue"),
  },
  {
    path: "/d",
    name: "d",
    component: () => import("@/views/view-D.vue"),
  },
  {
    path: "/e",
    name: "e",
    component: () => import("@/views/view-E.vue"),
  },
  {
    path: "/f",
    name: "f",
    component: () => import("@/views/view-F.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
