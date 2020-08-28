<template>
    <div class="test">
        <h1>Ты сегодня покормил кота?</h1>
        <grid/>
    </div>
</template>

<script>
import Grid from './Grid.vue'
    export default {   
        components: {
            grid: Grid
        }
    }
</script>

<style lang="scss" scoped>
.test {
    min-height: calc(100vh - 45px);
    padding-top: 45px;
    margin-top: -45px; // Извините за костыли

    background: url('../assets/images/bg.png');
    background-size: cover;
    background-repeat: no-repeat;
}
h1 {
    color: #fff;
}
</style>