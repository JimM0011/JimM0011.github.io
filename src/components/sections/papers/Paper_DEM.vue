<!-- Decoupled Entropy Minimization -->

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
    <div class="paper-container" id="paper-DEM-container">
        <div class="paper-border"></div>
        <div class="paper-context">
            <div class="paper-title">
                <a 
                    class="a-fix" 
                    href="https://neurips.cc/Conferences/2025"
                    target="_blank"
                >
                    [NeurIPS 2025]
                </a>
                Decoupled Entropy Minimization
            </div>
            <div class="paper-authors">
                <a class="a-fix" href="https://jimm0011.github.io/" target="_blank"><b>Jing Ma<sup>*</sup></b>&emsp;</a>
                <a class="a-fix" href="https://vain222.github.io/" target="_blank">Hanlin Li<sup>*</sup>&emsp;</a>
                <a class="a-fix" href="https://eglxiang.github.io/" target="_blank">Xiang Xiang<sup>*#</sup>&emsp;</a>
            </div>
            <div class="paper-links">
                <a class="paper-link-icon" href="https://jimm0011.github.io/DEM-proj/" target="_blank">
                    <img src="https://img.shields.io/badge/Website-Online-27AE60">
                </a>
                &ensp;
                <a class="paper-link-icon" href="https://arxiv.org/abs/2511.03256" target="_blank">
                    <img src="https://img.shields.io/badge/Paper-NeurIPS2025-A42C24">
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
                                    <p>Entropy Minimization (EM) is beneficial to reducing class overlap, bridging domain gap, and restricting uncertainty for various tasks in machine learning, yet its potential is limited. To study the internal mechanism of EM, we reformulate and decouple the classical EM into two parts with opposite effects: cluster aggregation driving factor (CADF) rewards dominant classes and prompts a peaked output distribution, while gradient mitigation calibrator (GMC) penalizes high-confidence classes based on predicted probabilities. Furthermore, we reveal the limitations of classical EM caused by its coupled formulation: 1) reward collapse impedes the contribution of high-certainty samples in the learning process, and 2) easy-class bias induces misalignment between output distribution and label distribution. To address these issues, we propose Adaptive Decoupled Entropy Minimization (AdaDEM), which normalizes the reward brought from CADF and employs a marginal entropy calibrator (MEC) to replace GMC. AdaDEM outperforms DEM*, an upper-bound variant of classical EM, and achieves superior performance across various imperfectly supervised learning tasks in noisy and dynamic environments.</p>
                                </div>
                            </transition>
                            <transition name="change">
                                <div
                                    v-if="chosenDetail === 1" 
                                    class="paper-content-detail-others-context"
                                >

                                </div>
                            </transition>
                            <transition name="change">
                                <div
                                    v-if="chosenDetail === 2"
                                    class="paper-content-detail-others-context-cite"
                                >
                                    <p>@article{ma2025decoupled,</p>
                                    <p>&emsp;&ensp;title={Decoupled Entropy Minimization},</p>
                                    <p>&emsp;&ensp;author={Ma, Jing and Li, Hanlin and Xiang, Xiang},</p>
                                    <p>&emsp;&ensp;journal={arXiv preprint arXiv:2511.03256},</p>
                                    <p>&emsp;&ensp;year={2025}</p>
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
    padding: 10px 8% 10px 8%;
}

</style>
