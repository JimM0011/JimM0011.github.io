<!-- PTTA: Purifying Malicious Samples for Test-Time Model Adaptation -->

<script lang="ts">

export default {
    data() {
        return {
            isDetailVisible: false,
            chosenDetail: 0
        }
    },
    methods: {
        toggleDetail() {
            this.isDetailVisible = !this.isDetailVisible;
        },
        chooseDetail(index: number) {
            this.chosenDetail = index;
        }
    },
}

</script>


<template>
    <div class="paper-container">
        <div class="paper-border"></div>
        <div class="paper-context">
            <div class="paper-title">
                <a 
                    class="a-fix" 
                    href="https://icml.cc/Conferences/2025"
                    target="_blank"
                >
                    [ICML 2025]
                </a>
                PTTA: Purifying Malicious Samples for Test-Time Model Adaptation
            </div>
            <div class="paper-authors">
                <a class="a-fix" href="https://jimm0011.github.io/" target="_blank"><b>Jing Ma<sup>*</sup></b>&emsp;</a>
                <a class="a-fix" href="https://vain222.github.io/" target="_blank">Hanlin Li<sup>*</sup>&emsp;</a>
                <a class="a-fix" href="https://eglxiang.github.io/" target="_blank">Xiang Xiang<sup>*#</sup>&emsp;</a>
            </div>
            <div class="paper-links">
                <a class="paper-link-icon" href="https://jimm0011.github.io/PTTA-proj/" target="_blank">
                    <img src="https://img.shields.io/badge/Website-Online-27AE60">
                </a>
                &ensp;
                <a class="paper-link-icon" href="" target="_blank">
                    <img src="https://img.shields.io/badge/Arxiv-Preprint-A42C24">
                </a>
            </div>
            <div class="paper-content">
                <div class="paper-content-detail-button" @click="toggleDetail">
                    <div v-if="!isDetailVisible" class="triangle-right"></div>
                    <div v-if="isDetailVisible" class="triangle-down"></div>
                    <div class="paper-content-detail-button-context">
                        Details
                    </div>
                </div>
                <transition name="fade">
                    <div v-if="isDetailVisible" class="paper-content-detail-container">
                        <div class="paper-content-detail-tldr-container">
                            <div class="paper-content-detail-tldr-title">
                                TL;DR (Too Long; Didn't Read):
                            </div>
                            <div class="paper-content-detail-tldr-context">
                                Rather than selecting and discarding malicious samples for test-time model adaptation, why not purify them into benign ones?
                            </div>
                        </div>
                        <div class="paper-content-detail-others-container">
                            <div class="paper-content-detail-others-title">
                                <div 
                                    v-if="chosenDetail === 0" 
                                    class="paper-content-detail-others-title-bold"
                                    @click="chooseDetail(0)"
                                >
                                    Abstract
                                </div>
                                <div 
                                    v-if="chosenDetail !== 0" 
                                    class="paper-content-detail-others-title-normal"
                                    @click="chooseDetail(0)"
                                >
                                    Abstract
                                </div>
                                <div class="paper-content-detail-others-title-split"></div>
                                <div 
                                    v-if="chosenDetail === 1" 
                                    class="paper-content-detail-others-title-bold"
                                    @click="chooseDetail(1)"
                                >
                                    Lay Summary
                                </div>
                                <div 
                                    v-if="chosenDetail !== 1" 
                                    class="paper-content-detail-others-title-normal"
                                    @click="chooseDetail(1)"
                                >
                                    Lay Summary
                                </div>
                                <div class="paper-content-detail-others-title-split"></div>
                                <div 
                                    v-if="chosenDetail === 2" 
                                    class="paper-content-detail-others-title-bold"
                                    @click="chooseDetail(2)"
                                >
                                    BibTeX
                                </div>
                                <div 
                                    v-if="chosenDetail !== 2" 
                                    class="paper-content-detail-others-title-normal"
                                    @click="chooseDetail(2)"
                                >
                                    BibTeX
                                </div>
                            </div>
                            <transition name="change">
                                <div
                                    v-if="chosenDetail === 0" 
                                    class="paper-content-detail-others-context"
                                >
                                    <p>Test-Time Adaptation (TTA) enables deep neural networks to adapt to arbitrary distributions during inference. Existing TTA algorithms generally tend to select benign samples that help achieve robust online prediction and stable self-training. Although malicious samples that would undermine the model's optimization should be filtered out, it also leads to a waste of test data. To alleviate this issue, we focus on how to make full use of the malicious test samples for TTA by transforming them into benign ones, and propose a plug-and-play method, PTTA. The core of our solution lies in the purification strategy, which retrieves benign samples having opposite effects on the objective function to perform Mixup with malicious samples, based on a saliency indicator for encoding benign and malicious data. This strategy results in effective utilization of the information in malicious samples and an improvement of the models' online test accuracy. In this way, we can directly apply the purification loss to existing TTA algorithms without the need to carefully adjust the sample selection threshold. Extensive experiments on four types of TTA tasks as well as classification, segmentation, and adversarial defense demonstrate the effectiveness of our method.</p>
                                </div>
                            </transition>
                            <transition name="change">
                                <div
                                    v-if="chosenDetail === 1" 
                                    class="paper-content-detail-others-context"
                                >
                                    <p>How can deep neural networks evolve through self-supervision without human intervention? This is a recent research trend, but difficult to solve well due to real-world complexity.</p>
                                    <p>Our paper identifies the "malicious sample hazards" as an obstacle to model self-evolution. Prior solutions typically select and filter out malicious samples that negatively impact model optimization, which also reduces utilization of already limited data. Rather than discarding them, why not purify malicious samples into benign ones? Surprisingly, we found that superimpose benign samples—which exert the most opposite influence on the objective function—onto malicious samples effectively mitigates these hazards.</p>
                                    <p>Our findings reveal a new direction: using purification strategies to boost sample utilization during autonomous machine learning. This enables stable and efficient self-supervised evolution of deep neural networks.</p>
                                </div>
                            </transition>
                            <transition name="change">
                                <div
                                    v-if="chosenDetail === 2"
                                    class="paper-content-detail-others-context-cite"
                                >
                                    <p>@inproceedings{ma2025ptta,</p>
                                    <p>&emsp;&ensp;title={PTTA: Purifying Malicious Samples for Test-Time Model Adaptation},</p>
                                    <p>&emsp;&ensp;author={Ma, Jing and Li, Hanlin and Xiang, Xiang},</p>
                                    <p>&emsp;&ensp;booktitle={Forty-second International Conference on Machine Learning},</p>
                                    <p>&emsp;&ensp;year={2025},</p>
                                    <p>}</p>
                                </div>
                            </transition>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>


<style scoped>

/* 淡入淡出动画 */
.change-enter-active {
  transition: opacity 0.3s;
}
.change-enter-from, .change-leave-to {
  opacity: 0;
}

.paper-content-detail-others-context-cite p {
    width: 100%;
    font-size: 15px;
    color: #555;
    word-break: break-word;
    line-height: 1.5;
    box-sizing: border-box;
    margin: 0;
}

.paper-content-detail-others-context p {
    font-size: 15px;
    color: #555;
    word-break: break-word;
    line-height: 1.5;
    box-sizing: border-box;
    margin: 0 0 6px 0;
}

.paper-content-detail-others-context,
.paper-content-detail-others-context-cite {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 0;
}

.paper-content-detail-others-title-split {
    width: 1px;
    transform: rotate(30deg);
    background-color: black;
    margin: 0 15px;
}

.paper-content-detail-others-title-normal {
    width: auto;
    font-size: 15px;
    color: #555;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.paper-content-detail-others-title-bold {
    width: auto;
    font-size: 16px;
    color: #555;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: 2px dotted #555;
}

.paper-content-detail-others-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 0 0 5px 0;
}

.paper-content-detail-others-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 0 0 0 0;
}

.paper-content-detail-tldr-context {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 15px;
    color: #555;
    box-sizing: border-box;
    padding: 0;
    word-break: break-word;
}

.paper-content-detail-tldr-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    color: #555;
    font-weight: bold;
    box-sizing: border-box;
    padding: 0 0 5px 0;
}

.paper-content-detail-tldr-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 0 0 12px 0;
}

.paper-content-detail-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 0 20px 10px 20px;
}

/* 淡入淡出动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.triangle-right {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 10px solid black;
    border-bottom: 5px solid transparent;
    box-sizing: border-box;
    margin-top: 1px;
}

.triangle-down {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid black;
    box-sizing: border-box;
    margin-top: 1px;
}

.paper-content-detail-button-context {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    color: #555;
    box-sizing: border-box;
    padding-left: 8px;
    cursor: pointer;
}

.paper-content-detail-button {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 0 20px 12px 20px;
}

.paper-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.paper-link-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.paper-links {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 20px 14px 20px;
}

.a-fix {
    white-space: nowrap;
}

.paper-authors {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    font-size: 15px;
    color: #555;
    box-sizing: border-box;
    padding: 0 20px 15px 20px;
}

.paper-title a {
    width: auto;
    margin-right: 8px;
    white-space: nowrap;
}

.paper-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    box-sizing: border-box;
    padding: 10px 20px 8px 20px;
    /* white-space: nowrap; */
}

@media (max-width: 1024px) {
    .paper-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
}

.paper-context {
    width: calc(100% - 5px);
    background-color: rgb(234, 246, 234);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0px 6px 6px 0px;
}

.paper-border {
    width: 5px;
    background-color: rgb(91, 184, 93);
    border-radius: 6px 0px 0px 6px;
}

.paper-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px 8% 0px 8%;
}

</style>
