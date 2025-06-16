<script lang="ts">

export default {
  data() {
    return {
      windowHeight: window.innerHeight,
      emailVisible: false,
      showCopied: false,
      email: 'jingma0011@gmail.com',
      githubVisible: false,
      githubAddress: 'https://github.com/JimM0011',
    }
  },
  computed: {
    cssVars() {
      return {
        '--vh': `${this.windowHeight - 60}px`
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowHeight = window.innerHeight
    },
    copyEmail(text) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          this.showSuccess();
        });
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        this.showSuccess();
      }
    },
    showSuccess() {
      this.showCopied = true;
      setTimeout(() => {
        this.showCopied = false;
      }, 2000);
    },
    changeEmailVisible(visible) {
      this.emailVisible = visible;
      if (visible) {
        const emailIcon = document.getElementById('el-icon-email-id');
        if (emailIcon) {
          const rect = emailIcon.getBoundingClientRect();
          const dropdown = document.getElementById('email-item-dropdown');
          if (dropdown) {
            dropdown.style.top = `${rect.bottom + window.scrollY + 3}px`;
            dropdown.style.left = `${rect.left + window.scrollX + 20 - 100}px`;
          }
        }  
      }
    },
    changeGithubVisible(visible) {
      this.githubVisible = visible;
      if (visible) {
        const githubIcon = document.getElementById('el-icon-github-id');
        if (githubIcon) {
          const rect = githubIcon.getBoundingClientRect();
          const dropdown = document.getElementById('github-item-dropdown');
          if (dropdown) {
            dropdown.style.top = `${rect.bottom + window.scrollY + 5.5}px`;
            dropdown.style.left = `${rect.left + window.scrollX + 17.5 - 115}px`;
          }
        }
      }
    }
  }
}

</script>


<template>
    <div class="home-container" :style="cssVars">
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
                    <a 
                        class="a-fix el-icon-github-container"
                        @mouseenter="changeGithubVisible(true)"
                        @mouseleave="changeGithubVisible(false)"
                        :href="githubAddress"
                        target="_blank"
                    >
                        <img 
                            id="el-icon-github-id"
                            class="el-icon-github"
                            src="../../assets/icon/github.svg" 
                            alt="github"
                        >
                    </a>
                    <div 
                        class="el-icon-email-container"
                        @mouseenter="changeEmailVisible(true)"
                        @mouseleave="changeEmailVisible(false)"
                        @click="copyEmail(email)"
                    >
                        <img 
                            id="el-icon-email-id"
                            class="el-icon-email"
                            src="../../assets/icon/email.svg"
                            alt="email"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div 
        v-show="githubVisible"
        id="github-item-dropdown"
    >
      <div class="github-item-context">
        {{ githubAddress }}
      </div>
    </div>

    <div 
        v-show="emailVisible"
        id="email-item-dropdown"
    >
      <div class="email-item-context">
        {{ email }}
      </div>
    </div>

    <div v-if="showCopied" class="copied-notice">
        已复制到剪贴板
    </div>
</template>


<style scoped>

.copied-notice {
    position: fixed;
    z-index: 1000;
    height: 40px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    top: 50px;
    right: calc(50% - 100px);
    background: #2ecc709d;
    color: white;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    animation: fadeOut 2s forwards;
}

@keyframes fadeOut {
    0% { opacity: 1; }
    70% { opacity: 1; }
    100% { opacity: 0; }
}

.email-item-context, .github-item-context {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    box-sizing: border-box;
    padding-bottom: 4px;
}

#email-item-dropdown, #github-item-dropdown {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background: black;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    z-index: 9999;
}

#github-item-dropdown {
    width: 230px;
}

.el-icon-email {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.el-icon-email-container {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0px 5px;
}

.el-icon-github-container {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0px 5px;
}

.el-icon-github {
    width: 35px;
    height: 35px;
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
    --vh: 600px;
    width: 100%;
    height: var(--vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.home-background {
    width: 100%;
    height: var(--vh);
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
    height: var(--vh);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: translateY(-100%);
}

.intro-toptext {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.intro-avatar-container {
    width: 100%;
    height: 40%;
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
    font-size: 30px;
    font-weight: bold;
    color: #333;
    box-sizing: border-box;
    padding: 0px 8%;
}

.intro-maxim {
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #333;
    box-sizing: border-box;
    padding: 0px 8%;
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
        height: 25%;
    }

    .intro-avatar-container {
        width: 100%;
        height: 30%;
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
