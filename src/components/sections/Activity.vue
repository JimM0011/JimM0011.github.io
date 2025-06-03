<script lang="ts" setup>

</script>


<template>
    <div class="activity-container">
        <div class="activity-title">
            Academic Activities
        </div>
        <div class="activity-title-border">
            <div></div>
        </div>
        <div class="activity-context">
            <div class="activity-item">
                <div class="activity-item-name">
                    Advances in Neural Information Processing Systems (NeurIPS)
                </div>
                <div class="activity-item-role">
                    Reviewer (
                        <a  class="a-fix" 
                            href="https://neurips.cc/Conferences/2024/ProgramCommittee" 
                            target="_blank"
                        >2024</a>,&nbsp;
                        <a  class="a-fix"
                            href="https://neurips.cc/Conferences/2025"
                            target="_blank"
                        >2025</a>
                    )
                </div>
            </div>

            <div class="activity-item">
                <div class="activity-item-name">
                    International Conference on Machine Learning (ICML)
                </div>
                <div class="activity-item-role">
                    Reviewer (
                        <a  class="a-fix" 
                            href="https://icml.cc/Conferences/2025/ProgramCommittee" 
                            target="_blank"
                        >2025</a>
                    )
                </div>
            </div>

            <div class="activity-item">
                <div class="activity-item-name">
                    International Conference on Learning Representations (ICLR)
                </div>
                <div class="activity-item-role">
                    Reviewer (
                        <a  class="a-fix" 
                            href="https://iclr.cc/Conferences/2025/Reviewers" 
                            target="_blank"
                        >2025</a>
                    )
                </div>
            </div>

            <div class="activity-item">
                <div class="activity-item-name">
                    International Conference on Artificial Intelligence and Statistics (AISTATS)
                </div>
                <div class="activity-item-role">
                    Reviewer (
                        <a  class="a-fix" 
                            href="https://virtual.aistats.org/Conferences/2024/Reviewers" 
                            target="_blank"
                        >2024</a>
                    )
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>

.activity-item-role {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    color: #555;
    box-sizing: border-box;
    /* padding: 5px 0 0 0; */
}

.activity-item-name {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    box-sizing: border-box;
}

.activity-item {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 8px 0;
}

.activity-context {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 8% 0px 8%;
    box-sizing: border-box;
}

.activity-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 1.0);
}

.activity-title {
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

.activity-title-border {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0px 4% 0px 4%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.activity-title-border div {
    width: 100%;
    height: 0;
    border-bottom: #00000050 solid 1px;
}

</style>
