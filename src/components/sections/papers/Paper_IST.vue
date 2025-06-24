<!-- Improved Self-Training for Test-Time Adaptation -->

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
    <div class="paper-container" id="paper-IST-container">
        <div class="paper-border"></div>
        <div class="paper-context">
            <div class="paper-title">
                <a 
                    class="a-fix" 
                    href="https://cvpr.thecvf.com/Conferences/2024"
                    target="_blank"
                >
                    [CVPR 2024]
                </a>
                Improved Self-Training for Test-Time Adaptation
            </div>
            <div class="paper-authors">
                <!-- *--Equal Contribution  #--Corresponding Author -->
                <a class="a-fix" href="https://jimm0011.github.io/" target="_blank"><b>Jing Ma<sup>#</sup>&emsp;</b></a>
            </div>
            <div class="paper-links">
                <a class="paper-link-icon" href="https://jimm0011.github.io/IST-proj/" target="_blank">
                    <img src="https://img.shields.io/badge/Website-Online-27AE60">
                </a>
                &ensp;
                <a class="paper-link-icon" href="https://openaccess.thecvf.com/content/CVPR2024/html/Ma_Improved_Self-Training_for_Test-Time_Adaptation_CVPR_2024_paper.html" target="_blank">
                    <img src="https://img.shields.io/badge/Paper-CVPR2024-A42C24">
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
                                <!-- TL;DR -->
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
                                    <p>Test-time adaptation (TTA) is a technique to improve the performance of a pre-trained source model on a target distribution without using any labeled data. However, existing self-trained TTA methods often face the challenges of unreliable pseudo-labels and unstable model optimization. In this paper, we propose an Improved Self-Training (IST) approach, which addresses these challenges by enhancing the pseudo-label quality and stabilizing the adaptation process. Specifically, we use a simple augmentation strategy to generate multiple views of each test sample, and construct a graph structure to correct the pseudo-labels based on the similarity of the latent features. Moreover, we adopt a parameter moving average scheme to smooth the model updates and prevent catastrophic forgetting. Instead of using a model with fixed label space, we explore the adaptability of the foundation model CLIP to various downstream tasks at test time. Extensive experiments on various benchmarks show that IST can achieve significant and consistent improvements over the existing TTA methods in classification, detection, and segmentation tasks.</p>
                                </div>
                            </transition>
                            <transition name="change">
                                <div
                                    v-if="chosenDetail === 1" 
                                    class="paper-content-detail-others-context"
                                >
                                    <p><!-- Lay Summary Text --></p>
                                </div>
                            </transition>
                            <transition name="change">
                                <div
                                    v-if="chosenDetail === 2"
                                    class="paper-content-detail-others-context-cite"
                                >
                                    <p>@inproceedings{ma2024improved,</p>
                                    <p>&emsp;&ensp;title={Improved self-training for test-time adaptation},</p>
                                    <p>&emsp;&ensp;author={Ma, Jing},</p>
                                    <p>&emsp;&ensp;booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},</p>
                                    <p>&emsp;&ensp;pages={23701--23710},</p>
                                    <p>&emsp;&ensp;year={2024}</p>
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
