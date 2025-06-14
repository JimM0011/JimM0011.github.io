<!-- Aligning Logits Generatively for Principled Black-Box Knowledge Distillation -->

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
    <div class="paper-container" id="paper-MEKD-container">
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
                Aligning Logits Generatively for Principled Black-Box Knowledge Distillation
            </div>
            <div class="paper-authors">
                <!-- *--Equal Contribution  #--Corresponding Author -->
                <a class="a-fix" href="https://jimm0011.github.io/" target="_blank"><b>Jing Ma<sup>*</sup>&emsp;</b></a>
                <a class="a-fix" href="https://eglxiang.github.io/" target="_blank">Xiang Xiang<sup>*#</sup>&emsp;</a>
                <a class="a-fix" href="" target="_blank">Ke Wang<sup></sup>&emsp;</a>
                <a class="a-fix" href="" target="_blank">Yuchuan Wu<sup></sup>&emsp;</a>
                <a class="a-fix" href="" target="_blank">Yongbin Li<sup></sup>&emsp;</a>
            </div>
            <div class="paper-links">
                <a class="paper-link-icon" href="https://jimm0011.github.io/MEKD-proj/" target="_blank">
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
                                    <p>Black-Box Knowledge Distillation (B2KD) is a formulated problem for cloud-to-edge model compression with invisible data and models hosted on the server. B2KD faces challenges such as limited Internet exchange and edgecloud disparity of data distributions. In this paper, we formalize a two-step workflow consisting of deprivatization and distillation, and theoretically provide a new optimization direction from logits to cell boundary different from direct logits alignment. With its guidance, we propose a new method Mapping-Emulation KD (MEKD) that distills a black-box cumbersome model into a lightweight one. Our method does not differentiate between treating soft or hard responses, and consists of: 1) deprivatization: emulating the inverse mapping of the teacher function with a generator, and 2) distillation: aligning low-dimensional logits of the teacher and student models by reducing the distance of high-dimensional image points. For different teacherstudent pairs, our method yields inspiring distillation performance on various benchmarks, and outperforms the previous state-of-the-art approaches.</p>
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
                                    <p>@inproceedings{ma2024aligning,</p>
                                    <p>&emsp;&ensp;title={Aligning Logits Generatively for Principled Black-Box Knowledge Distillation},</p>
                                    <p>&emsp;&ensp;author={Ma, Jing and Xiang, Xiang and Wang, Ke and Wu, Yuchuan and Li, Yongbin},</p>
                                    <p>&emsp;&ensp;booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},</p>
                                    <p>&emsp;&ensp;pages={23148--23157},</p>
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
    padding: 20px 8% 0px 8%;
}

</style>
