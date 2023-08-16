<!--
 * @Author: 陈迪秀 1170776994@qq.com
 * @Date: 2023-06-21 16:15:04
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-06-25 14:52:03
 * @FilePath: \css-project\src\views\view-F.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h1>响应式布局 @Media</h1>
        <div class="ft__view">
            <div class="ft__media-header">上</div>
            <div class="ft__media-content">中</div>
            <div class="ft__media-footer">下</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.ft__view {
    width: 800px;
    height: 600px;
    text-align: center;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .ft__media-header {
        height: 50px;
        background-color: #2196F3;
    }

    .ft__media-content {
        flex: 1;
        width: 600px;
        margin: auto;
        background-color: #fff;
    }

    .ft__media-footer {
        height: 50px;
        background-color: #2196F3;
    }
}

@media screen and (max-width: 1000px) {
    .ft__view {
        width: calc(100vw - 200px);

        .ft__media-header {
            color: #fff;
            background-color: #001529;
        }

        .ft__media-content {
            width: 100%;
            background-color: #fff;
        }

        .ft__media-footer {
            color: #fff;
            background-color: #001529;
        }
    }
}
</style>