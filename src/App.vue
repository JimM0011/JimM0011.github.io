<script>

import Header from './components/Header.vue'
import Background from './components/Background.vue'
import Main from './components/Main.vue'
// import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Background,
    Main,
    // Footer,
  }
}

</script>

<template>
    <div class="global-container">
        <div class="background-container">
            <Background/>
        </div>
        <el-container class="el-container">
            <el-header class="header-container"><Header/></el-header>
            <el-main class="main-container"><Main/></el-main>
            <!-- <el-footer><Footer/></el-footer> -->
        </el-container>
      
        <!-- 回到顶部 -->
        <el-backtop :right="40" :bottom="80" />

    </div>
</template>

<style>

h1 {
  font-family: "MyFont", Verdana, sans-serif;
  letter-spacing: 2px;
  font-size: 28px;
  margin: 0px;
  text-align: center;
}

h2, h3, h4, h5, h6 {
  font-family: "MyFont", Verdana, sans-serif;
  letter-spacing: 2px;
}

.el-header {
  padding: 0px;
}

.el-footer {
  padding: 0px;
}

p, li {
  font-size: 16px;
  line-height: 1.75rem;
}

code {
  font-family: 'Consolas', monospace;
  border-radius: 5px;
  padding: 2px 5px;
  background: #f2f2f2;
  color: black;
}

pre {
  border-radius: 5px;
  padding: 10px;
  background: #f2f2f2;
  line-height: 1.4rem;
}

pre:not(pre[id=bibtex]) {
  overflow-x: auto;
}

pre code {
  font-size: 16px;
  color: black;
  border: none;
  padding: 0px;
}

blockquote {
  border-left: 5px solid #bcbcbc;
  padding: 10px 20px 10px 20px;
  margin: 0px;
  background: #f6f6f6;
}

blockquote > p {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}

/* 链接颜色装饰 */
a {
  color: #3273dc;
  text-decoration: none;
}

/* 鼠标焦点悬浮在链接上的颜色装饰 */
a:hover {
  color: #848484;
  border-bottom: dotted;
}

.a-static {
    color: #000000;
    text-decoration: none;
}

.a-static:hover {
    border-bottom: none;
}

.a-fix:hover {
    border-bottom: none;
}

p > img {
  width: 80%;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 1px #afafaf;
}

table {
  border-collapse: collapse;
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  display:block;
  overflow-x:auto;
}

thead {
  border-bottom-width: 1px;
  border-top-width: 2px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-style: solid;
  border-color: rgb(0 0 0);
}

tbody tr:last-child {
  border-bottom-width: 2px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-style: solid;
  border-color: rgb(0 0 0);
}

th, td {
    padding-left: 1rem;
    padding-right: 1rem;
}

.katex-display {
  overflow-x: auto;
  overflow-y: hidden;
}

/* .triangle-up {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid black;
}

.triangle-down {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid black;
}

.triangle-left {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-right: 100px solid black;
    border-bottom: 50px solid transparent;
}

.triangle-right {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 100px solid black;
    border-bottom: 50px solid transparent;
}

.triangle-bottomleft {
    width: 0;
    height: 0;
    border-bottom: 100px solid black;
    border-right: 100px solid transparent;
}
 
.triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 100px solid black;
    border-left: 100px solid transparent;
}

.triangle-topright {
    width: 0;
    height: 0;
    border-top: 100px solid black;
    border-left: 100px solid transparent; 
}
 
.triangle-topleft {
    width: 0;
    height: 0;
    border-top: 100px solid black;
    border-right: 100px solid transparent;
} */

</style>

<style scoped>

.global-container {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

.background-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: -1;
}

.el-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    z-index: 1;
}

.header-container {
    width: 100%;
}

.main-container {
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 10%;
    padding-right: 10%;
    overflow: auto;
    z-index: 1;
}

@media (max-width: 1024px) {
    .main-container {
        padding-left: 8%;
        padding-right: 8%;
    }   
}

</style>
