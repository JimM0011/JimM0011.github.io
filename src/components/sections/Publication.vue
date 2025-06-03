<script lang="ts" setup>
// import Paper from './papers/Paper.vue';
import Paper_PTTA from './papers/Paper_PTTA.vue';
import Paper_IST from './papers/Paper_IST.vue';
import Paper_MEKD from './papers/Paper_MEKD.vue';
import Paper_FGTr from './papers/Paper_FGTr.vue';
import Paper_Knowe from './papers/Paper_Knowe.vue';

</script>


<template>
    <div class="publication-container">
        <div class="publication-title">
            Publications
        </div>
        <div class="publication-title-border">
            <div></div>
        </div>
        <div class="publication-paper">
            <Paper_PTTA/>
            <!-- <Paper_IST/> -->
            <Paper_MEKD/>
            <Paper_Knowe/>
            <Paper_FGTr/>
        </div>
    </div>
</template>


<style scoped>

.publication-paper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.publication-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 1.0);
}

.publication-title {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    box-sizing: border-box;
    padding: 24px 5% 16px 5%;
}

.publication-title-border {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0px 4% 0px 4%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.publication-title-border div {
    width: 100%;
    height: 0;
    border-bottom: #00000050 solid 1px;
}

</style>
