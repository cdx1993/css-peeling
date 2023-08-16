<!--
 * @Author: 陈迪秀 1170776994@qq.com
 * @Date: 2023-06-20 14:18:12
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-06-26 11:15:56
 * @FilePath: \css-project\src\views\view-C.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h1>浮动布局 float</h1>
        <div class="ft__view">
            <div class="ft__float">左</div>
            <div class="ft__float">中</div>
            <div class="ft__float">右</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.ft__view {
    width: 1002px;
    height: 600px;
    text-align: center;
    border: 1px solid #000;
    box-sizing: border-box;
    .ft__float{
        float: left;
        width: 200px;
        height: 600px;
        background-color: #2196F3;
    }
    .ft__float:nth-child(2){
        width: 600px;
        background-color: springgreen;
    }
    
}
</style>