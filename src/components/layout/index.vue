<!--
 * @Author: 陈迪秀 1170776994@qq.com
 * @Date: 2023-06-20 09:22:08
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-08-11 10:31:19
 * @FilePath: \css-project\src\components\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="layout">
        <div class="l-header">
            <layout-header />
        </div>
        <div class="l-container">
            <div class="l-sidebar">
                <layout-sidebar />
            </div>
            <div class="l-content">
                <div class="l-nav">
                    <layout-nav />
                </div>
                <div class="l-view">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import layoutHeader from '../header.vue';
import layoutNav from '../nav.vue'
import layoutSidebar from '../sidebar.vue'
</script>
<!-- <style lang="scss" scoped>
/* @import '../../assets/styles/layout/index.scss'; */
</style> -->