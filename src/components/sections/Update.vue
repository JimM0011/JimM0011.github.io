<script lang="ts">

</script>


<template>
    <div class="update-container">
        <div class="update-context">
            Last updated: &nbsp; 2025-06-25
        </div>
    </div>
</template>


<style scoped>

.update-context {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
    line-height: 1.6;
    color: #888;
    box-sizing: border-box;
    padding: 0 3% 5px 3%;
}

.update-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 1.0);
}

@media (max-width: 768px) {
    .update-context {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
}

</style>
