<script lang="ts" setup>

</script>


<template>
    <div class="home-container">
        <div class="home-background">
            <div class="home-background-blank"></div>
        </div>
        <div class="intro-container">
            <div class="intro-toptext">
                
            </div>
            <div class="intro-avatar-container">
                <div class="intro-avatar-context">
                    <img 
                        src="../../assets/avatar.jpg"
                        alt="avatar"
                        class="intro-avatar-img"
                    >
                </div>
            </div>
            <div class="intro-name">
                Jing Ma (马靖)
            </div>
            <div class="intro-maxim">
                Master's student at HAIV Lab, HUST
            </div>
            <div class="intro-links">
                <div class="intro-link-item">
                    <a class="a-fix" href="https://jimm0011.github.io/" target="_blank">
                        <img 
                            class="el-icon-github"
                            src="../../assets/icon/github.svg" 
                            alt="github"
                        >
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.el-icon-github {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    object-fit: contain;
}

.intro-link-item a {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.intro-link-item {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.home-container {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.home-background {
    width: 100%;
    height: 400px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.home-background-blank {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1));
}

.intro-container {
    width: 100%;
    height: 400px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: translateY(-100%);
}

.intro-toptext {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.intro-avatar-container {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.intro-avatar-context {
    height: 180px;
    width: 180px;
    border-radius: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #888;
}

.intro-avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.intro-name {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    box-sizing: border-box;
}

.intro-maxim {
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #333;
    box-sizing: border-box;
}

.intro-links {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    .intro-avatar-context {
        height: 120px;
        width: 120px;
        border-radius: 60px;
    }

    .intro-toptext {
        height: 17.5%;
    }

    .intro-avatar-container {
        width: 100%;
        height: 35%;
    }

    .intro-name {
        width: 100%;
        height: 12%;
    }

    .intro-maxim {
        width: 100%;
        height: 10%;
    }
    
    .intro-links {
        width: 100%;
        height: 15%;
    }
}

</style>
