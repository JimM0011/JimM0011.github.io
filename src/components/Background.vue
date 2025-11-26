<script lang="ts" setup>

import { ref } from 'vue'

const isImageLoaded = ref(false)

// 图片加载完成后触发的事件处理函数
function handleImageLoad() {
    // 将 isImageLoaded 设为 true，触发动画
    isImageLoaded.value = true;
}

// './default.jpg',
const bg_imgs = [
    './background/sea.jpg',
    './background/dark_air.jpg',
    './background/river.jpg',
    './background/city.jpg',
    './background/lake.jpg',
    './background/frost.jpg',
]

const bg_styles = [
    {
        'object-position': 'center',
        'filter': 'brightness(0.95)',
    },
    {
        'object-position': 'center',
        'filter': 'brightness(1.0)',
    },
    {
        'object-position': 'center',
        'filter': 'brightness(0.85)',
    },
    {
        'object-position': 'center',
        'filter': 'brightness(0.8)',
    },
    {
        'object-position': 'center',
        'filter': 'brightness(1.0)',
    },
    {
        'object-position': 'top',
        'filter': 'brightness(0.95)',
    },
]

const bg_idx = Math.floor(Math.random() * bg_imgs.length)

</script>

<template>
    <div class="background-container">
        <div class="background-context">
            <div class="background-image-container">
                <img 
                    class="background-image"
                    alt="background"
                    :src="bg_imgs[bg_idx]"
                    :style="bg_styles[bg_idx]"
                    @load="handleImageLoad"
                    :class="{ 'image-loaded': isImageLoaded }"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

.background-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.background-context {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* background: #7a76766b; */
    background: white;
}

.background-image-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
}

.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.0s ease-in-out;
}

.background-image.image-loaded {
    opacity: 1;
}

</style>
