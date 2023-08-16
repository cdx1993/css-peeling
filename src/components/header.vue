<!--
 * @Author: 陈迪秀 1170776994@qq.com
 * @Date: 2023-06-20 14:08:53
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-08-16 11:33:32
 * @FilePath: \css-project\src\components\header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="app__header">
        <div class="app__header-logo">logo

        </div>
        <span class="vars">var(颜色)</span>
        <span class="" :style="{ color: colots[theme === 'light' ? 0 : 1] }">内联222222(颜色)</span>
        <span style="color: var(--color)">内联var(颜色)</span>
        <div class="app__header__info">
            <el-switch v-model="theme" @change="chageTheme(theme)" active-value="dark" inactive-value="light"
                style="--el-switch-on-color: #2a2c2c; --el-switch-off-color: #c8c5be" />
            <el-icon>
                <UserFilled />
            </el-icon>
            <el-icon>
                <Avatar />
            </el-icon>
        </div>
    </div>
</template>
<script setup >
import { ref } from 'vue';
import common from '@/assets/styles/comon.module.scss';
const theme = ref('light');
console.log(common);
// 切换主题
const colots = ref([common.color, common.color1]);
const chageTheme = (val) => {

    document.documentElement.setAttribute('theme', val);
}
chageTheme('light')
</script>
<style lang="scss" scoped>
@import '@/assets/styles/index.scss';

.app__header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    color: #fff;

}

.app__header__info {
    span {
        cursor: pointer;

    }
}

.vars {
    color: var(--color) !important;
}
</style>