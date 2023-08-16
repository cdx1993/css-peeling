<!--
 * @Author: 陈迪秀 1170776994@qq.com
 * @Date: 2023-06-20 14:09:25
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-07-04 15:50:10
 * @FilePath: \css-project\src\components\sidebar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <ul class="sidebar">
        <li v-for="item in navList" @click="$router.push(item.path)">{{ item.name }}</li>
    </ul>
</template>
<script setup>
import { reactive } from 'vue'
const navList = reactive([
    {
        name: "页面A-流式布局",
        path: '/a'
    },
    {
        name: "页面B-定位布局",
        path: '/b'
    },
    {
        name: "页面C-浮动布局",
        path: '/c'
    },
    {
        name: "页面D-弹性布局",
        path: '/d'
    },
    {
        name: "页面E-网格布局",
        path: '/e'
    },
    {
        name: "页面F-响应式布局",
        path: '/f'
    }
])
</script>
<style lang="scss" scoped>
.sidebar {
    box-sizing: border-box;
    padding: 10px 16px;

    li {
        line-height: 30px;
        margin-bottom: 8px;
        cursor: pointer;
        color: var(--text-color);

        &:hover {
            background-color: #c9c9c9;
        }
    }
}
</style>