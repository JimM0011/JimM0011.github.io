<script lang="ts" setup>

</script>


<template>
    <div class="career-container">
        <div class="career-title">
            Education & Career
        </div>
        <div class="career-title-border">
            <div></div>
        </div>
        <div class="career-context">
            <div class="career-item">
                <div class="career-item-institute">
                    <a  class="a-fix"
                        href="https://haivlab.wixsite.com/home"
                        target="_blank"
                    >
                        HAIV Lab,&ensp;
                    </a>
                    Huazhong University of Science and Technology,&nbsp;
                    Wuhan,&nbsp;
                    China
                </div>
                <div class="career-item-role">
                    <b>Master's Research Student,&emsp;</b>
                    Sep. 2022 ~ Present
                </div>
                <div class="career-item-relationship">
                    Advisor:&ensp;
                    Prof.&ensp;
                    <a  class="a-fix" 
                        href="https://eglxiang.github.io/" 
                        target="_blank"
                    >
                        Xiang Xiang
                    </a>
                </div>
            </div>

            <div class="career-item">
                <div class="career-item-institute">
                    <a  class="a-fix"
                        href="https://haivlab.wixsite.com/home"
                        target="_blank"
                    >
                        HAIV Lab,&ensp;
                    </a>
                    Huazhong University of Science and Technology,&nbsp;
                    Wuhan,&nbsp;
                    China
                </div>
                <div class="career-item-role">
                    <b>Undergraduate Student,&emsp;</b>
                    Sep. 2018 ~ Jun. 2022
                </div>
                <div class="career-item-relationship">
                    Advisor:&ensp;
                    Prof.&ensp;
                    <a  class="a-fix" 
                        href="https://eglxiang.github.io/" 
                        target="_blank"
                    >
                        Xiang Xiang
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.career-item-institute {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 18px;
    color: #333;
    box-sizing: border-box;
    padding: 0 0 6px 0;
}

.career-item-role {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 18px;
    color: #555;
    box-sizing: border-box;
    padding: 0 0 6px 0;
    font-style: italic;
}

.career-item-relationship {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    color: #555;
    box-sizing: border-box;
}

.career-item {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 22px 0;
}

.career-context {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 18px 8% 20px 8%;
    box-sizing: border-box;
}

.career-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 1.0);
    transform: translateY(-40px);
}

.career-container::after {
    content: '';
    width: 100%;
    height: 40px;
    transform: translateY(40px);
    background-color: white;
}

.career-title {
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

.career-title-border {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0px 4% 0px 4%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.career-title-border div {
    width: 100%;
    height: 0;
    border-bottom: #00000050 solid 1px;
}

</style>
