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
                <div class="news-item-date">09 / 2025</div>
                <div class="news-item-content">
                    <p>
                        🎉 One paper (<a href="https://neurips.cc/virtual/2025/poster/119274" target="_blank">DEM</a>) has been accepted by&nbsp;<a href="https://neurips.cc/Conferences/2025" target="_blank">NeurIPS 2025</a>. The paper and code are coming soon.
                    </p>
                </div>
            </div>
            <div class="news-item">
                <div class="news-item-icon"></div>
                <div class="news-item-date">08 / 2025</div>
                <div class="news-item-content">
                    <p>
                        🎉 One paper (<a href="https://ieeexplore.ieee.org/abstract/document/11141522" target="_blank">MEKD-plus</a>) has been accepted by&nbsp;<a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=34" target="_blank">IEEE T-PAMI</a>.
                    </p>
                </div>
            </div>
            <div class="news-item">
                <div class="news-item-icon"></div>
                <div class="news-item-date">07 / 2025</div>
                <div class="news-item-content">
                    <p>
                        🎊 The&nbsp;<a href="https://openreview.net/pdf?id=SznX4yic20" target="_blank">paper</a>&nbsp;and&nbsp;<a href="https://github.com/HAIV-Lab/PTTA" target="_blank">code</a>&nbsp;for&nbsp;<a href="https://jimm0011.github.io/PTTA-proj/" target="_blank">PTTA</a>&nbsp;(<a href="https://icml.cc/Conferences/2025" target="_blank">ICML 2025</a>) are publicly available. Please refer to the&nbsp;<a href="https://icml.cc/virtual/2025/poster/45190" target="_blank">project page</a>&nbsp;for details.
                    </p>
                </div>
            </div>
            <div class="news-item">
                <div class="news-item-icon"></div>
                <div class="news-item-date">05 / 2025</div>
                <div class="news-item-content">
                    <p>
                        🎉 One paper (<a href="https://jimm0011.github.io/PTTA-proj/" target="_blank">PTTA</a>) has been accepted by&nbsp;<a href="https://icml.cc/Conferences/2025" target="_blank">ICML 2025</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>

.news-item-content p {
    margin: 0;
    padding: 1px 0px 0px 0px;
}

.news-item-content {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 17px;
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
    font-size: 17px;
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
    margin: 20px 0px 12px 0px;
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
    transform: translateY(-10px);
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
