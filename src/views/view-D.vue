<template>
    <div>
        <h1>弹性布局 flex</h1>
        <div class="ft__view">
            <div class="ft__flex">左</div>
            <div class="ft__flex">中</div>
            <div class="ft__flex">右</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.ft__view {
    width: 1000px;
    height: 600px;
    text-align: center;
    border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    /* align-items: center; */

    .ft__flex {
        flex: 1;
    }
    .ft__flex:nth-child(1){
        background-color: aqua;
    }
    .ft__flex:nth-child(2){
        background-color: gold;
    }
    .ft__flex:nth-child(3){
        background-color: burlywood;
    }
}
</style>