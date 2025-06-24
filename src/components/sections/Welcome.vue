<script lang="ts">

export default {
    methods: {
        goAnchor(selector) {
            // document.querySelector(selector).scrollIntoView({
            //     behavior: "smooth"
            // });
            const element = document.querySelector(selector);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                });

                element.classList.add('highlight-flash');

                setTimeout(() => {
                    element.classList.remove('highlight-flash');
                }, 3000);
            }
        },
    }
}

</script>


<template>
    <div class="welcome-container">
        <div class="welcome-title">
            Welcome
        </div>
        <div class="welcome-title-border">
            <div></div>
        </div>
        <div class="welcome-content-container">
            <p>
                Hi! 👋
                I am a Master's student at the School of Artificial Intelligence and Automation (AIA),
                Huazhong University of Science and Technology (HUST),
                advised by Prof. <a class="a-fix" href="https://eglxiang.github.io/" target="_blank">Xiang Xiang</a>.
                My research interests lie primarily in machine learning and computer vision, 
                specifically including:
            </p>
            <div class="welcome-research-interests">
                <ul>
                    <li>
                        Test (Inference) - Time &nbsp;&nbsp; Learning / Adaptation / Training / Computing
                        &nbsp;&nbsp;
                        [<a @click="goAnchor('#paper-PTTA-container')" class="welcome-paper-refer">1</a>]
                    </li>
                    <li>
                        Black-Box / Cloud-to-Edge &nbsp;&nbsp; Knowledge Distillation
                        &nbsp;&nbsp;
                        [<a @click="goAnchor('#paper-MEKD-container')" class="welcome-paper-refer">2</a>]
                    </li>
                    <li>
                        Image / Font &nbsp;&nbsp; Generation / Style Transfer
                        &nbsp;&nbsp;
                        [<a @click="goAnchor('#paper-FGTr-container')" class="welcome-paper-refer">4</a>]
                    </li>
                    <li>
                        Few-Shot / Hierarchical &nbsp;&nbsp; Incremental / Continual / Lifelong Learning
                        &nbsp;&nbsp;
                        [<a @click="goAnchor('#paper-Knowe-container')" class="welcome-paper-refer">3</a>]
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<style>

@keyframes flash {
    0%, 100% { background-color: transparent; }
    50% { background-color: #00000020; }
}

.highlight-flash {
    animation: flash 2.0s ease-in-out 1;
}

</style>

<style scoped>

.welcome-paper-refer {
    cursor: pointer;
}

.welcome-research-interests ul {
    width: 100%;
    height: auto;
    list-style-type: disc;
    padding-left: 20px;
    margin: 0;
}

.welcome-research-interests {
    width: 100%;
    height: auto;
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    box-sizing: border-box;
    margin: 0;
    padding: 5px 3.1% 0 3.1%;
}

.welcome-content-container p {
    width: 100%;
    height: auto;
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin: 0;
    padding: 0;
}

.welcome-content-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 20px 5% 10px 5%;
}

.welcome-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 1.0);
}

.welcome-title {
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

.welcome-title-border {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0px 4% 0px 4%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.welcome-title-border div {
    width: 100%;
    height: 0;
    border-bottom: #00000050 solid 1px;
}

</style>
