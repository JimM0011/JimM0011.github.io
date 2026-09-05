<script lang="ts" setup>

import { nextTick, onBeforeUnmount, ref } from 'vue'

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

// Keep this list in the same order as bg_imgs so the displayed location
// always belongs to the randomly selected background image.
const bg_imgs_info = [
    { zh: '日本横滨 临港公园', en: 'Rinko Park, Yokohama, Japan' },
    { zh: '日本东京', en: 'Tokyo, Japan' },
    { zh: '日本京都 鸭川', en: 'Kamo River, Kyoto, Japan' },
    { zh: '中国武汉 华科南大门', en: 'South Gate of HUST, Wuhan, China' },
    { zh: '中国武汉 华科源湖', en: 'Yuan Lake of HUST, Wuhan, China' },
    { zh: '中国武汉 华科青年园', en: 'Youth Garden of HUST, Wuhan, China' },
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

const hoverDelay = 800
const isTooltipVisible = ref(false)
const tooltipPosition = ref({ x: 0, y: 0 })
const tooltipElement = ref<HTMLElement | null>(null)
const mousePosition = ref({ x: 0, y: 0 })
let hoverTimer: ReturnType<typeof setTimeout> | null = null

function clearHoverTimer() {
    if (hoverTimer !== null) {
        clearTimeout(hoverTimer)
        hoverTimer = null
    }
}

function updateTooltipPosition(event: MouseEvent) {
    mousePosition.value = { x: event.clientX, y: event.clientY }

    const placeTooltip = () => {
        const padding = 12
        const offset = 16
        const tooltipRect = tooltipElement.value?.getBoundingClientRect()
        const width = tooltipRect?.width ?? 240
        const height = tooltipRect?.height ?? 72

        let x = event.clientX + offset
        let y = event.clientY + offset

        if (x + width > window.innerWidth - padding) {
            x = event.clientX - width - offset
        }
        if (y + height > window.innerHeight - padding) {
            y = event.clientY - height - offset
        }

        tooltipPosition.value = {
            x: Math.max(padding, x),
            y: Math.max(padding, y),
        }
    }

    placeTooltip()
    if (isTooltipVisible.value) {
        nextTick(placeTooltip)
    }
}

function handleMouseEnter(event: MouseEvent) {
    clearHoverTimer()
    isTooltipVisible.value = false
    updateTooltipPosition(event)

    hoverTimer = setTimeout(() => {
        isTooltipVisible.value = true
        nextTick(() => updateTooltipPosition(new MouseEvent('mousemove', {
            clientX: mousePosition.value.x,
            clientY: mousePosition.value.y,
        })))
    }, hoverDelay)
}

function handleMouseMove(event: MouseEvent) {
    updateTooltipPosition(event)
}

function handleMouseLeave() {
    clearHoverTimer()
    isTooltipVisible.value = false
}

onBeforeUnmount(clearHoverTimer)

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
    <div
        class="background-hover-zone background-hover-zone-left"
        @mouseenter="handleMouseEnter"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
    ></div>
    <div
        class="background-hover-zone background-hover-zone-right"
        @mouseenter="handleMouseEnter"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
    ></div>
    <div
        v-if="isTooltipVisible"
        ref="tooltipElement"
        class="background-location-tooltip"
        :style="{ left: `${tooltipPosition.x}px`, top: `${tooltipPosition.y}px` }"
        aria-live="polite"
    >
        <div class="background-location-zh">{{ bg_imgs_info[bg_idx].zh }}</div>
        <div class="background-location-en">{{ bg_imgs_info[bg_idx].en }}</div>
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

.background-hover-zone {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 2;
    pointer-events: auto;
}

.background-hover-zone-left {
    left: 0;
    width: 10%;
}

.background-hover-zone-right {
    right: 0;
    width: 10%;
}

.background-location-tooltip {
    width: auto;
    height: auto;
    display: block;
    box-sizing: border-box;
    position: fixed;
    z-index: 20;
    min-width: 180px;
    max-width: min(300px, calc(100vw - 24px));
    padding: 9px 13px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 8px;
    background: rgba(20, 20, 20, 0.78);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
    color: white;
    pointer-events: none;
    transform-origin: top left;
    animation: background-location-tooltip-in 160ms ease-out;
}

.background-location-zh {
    font-size: 14px;
    line-height: 1.4;
}

.background-location-en {
    margin-top: 2px;
    color: rgba(255, 255, 255, 0.78);
    font-size: 12px;
    line-height: 1.35;
}

@keyframes background-location-tooltip-in {
    from {
        opacity: 0;
        transform: translateY(3px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 1024px) {
    .background-hover-zone-left,
    .background-hover-zone-right {
        width: 8%;
    }
}

</style>
