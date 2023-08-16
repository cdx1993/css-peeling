<template>
    <div>
        <h1>网格布局</h1>
        <div class="grid__container">
            <div class="grid__item">1</div>
            <div class="grid__item">2</div>
            <div class="grid__item">3</div>
            <div class="grid__item">4</div>
            <div class="grid__item">5</div>
            <div class="grid__item">6</div>
            <div class="grid__item">7</div>
            <div class="grid__item">8</div>
            <div class="grid__item">9</div>
        </div>
    </div>
</template>
<style>
.grid__container {
    width: 1000px;
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #2196F3;
    padding: 10px;
}

.grid__item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
}
</style>