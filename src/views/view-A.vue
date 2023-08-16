<!--
 * @Author: 陈迪秀 1170776994@qq.com
 * @Date: 2023-06-20 14:17:44
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-08-16 08:53:34
 * @FilePath: \css-project\src\views\view-a.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h1>流式布局</h1>
        <div class="ft__view">
            <div class="ft__header">上</div>
            <div class="ft__container">中</div>
            <div class="ft__footer">下</div>
        </div>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
    </div>
</template>
<style lang="scss" scoped>
.ft__view {
    width: 1000px;
    height: 602px;
    text-align: center;
    border: 1px solid #000;

    .ft__header {
        height: 100px;
        background-color: #2196F3;
    }

    .ft__container {
        height: 400px;
        background-color: pink;
    }

    .ft__footer {
        height: 100px;
        background-color: #2196F3;
    }
}
</style>
