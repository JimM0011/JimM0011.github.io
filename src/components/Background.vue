<script lang="ts" setup>
</script>

<template>
    <div class="background-container">
        <div class="background-context">
            <div class="background-image-container">
                <img 
                    class="background-image"
                    src="../assets/background.jpg" 
                    alt="background"
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
}

.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>
