<script lang="ts" setup>

</script>


<template>
    <div class="news-container">
        <div class="news-title">
            News
        </div>
        <div class="news-title-border">
            <div></div>
        </div>
        <div class="news-context">
            <div class="news-item">
                <div class="news-item-icon"></div>
                <div class="news-item-date">05/2025</div>
                <div class="news-item-content">
                    One paper (PTTA) accepted by ICML 2025.
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>

.news-item-content {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;
    margin-left: 10px;
}

@media (max-width: 768px) {
    .news-item-content {
        margin-left: 18px;
    }
}

.news-item-date {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    color: #555;
    box-sizing: border-box;
    padding: 1px 12px;
    background: #f1f1f1;
}

.news-item-icon {
    width: 7px;
    height: 7px;
    background-color: black;
    border-radius: 50%;
    margin-right: 10px;
    box-sizing: border-box;
}

.news-item {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0px 0px 7px 0px;
}

.news-context {
    width: 100%;
    height: auto;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 8%;
    margin: 20px 0px 5px 0px;
    box-sizing: border-box;
    overflow: auto;

    /* Firefox */
    scrollbar-width: none;
    scrollbar-color: #888 #f1f1f1;

    /* WebKit */
    &::-webkit-scrollbar {
        width: 0px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 0px;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 0px;
        border: 0px solid #f1f1f1;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
}

.news-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 1.0);
}

.news-title {
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

.news-title-border {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0px 4% 0px 4%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.news-title-border div {
    width: 100%;
    height: 0;
    border-bottom: #00000050 solid 1px;
}

</style>
