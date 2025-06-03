<script>
import Home from './sections/Home.vue'
import Welcome from './sections/Welcome.vue'
import News from './sections/News.vue'
import Publication from './sections/Publication.vue'
import Activity from './sections/Activity.vue'
import Career from './sections/Career.vue'
// import Abstract from './sections/Abstract.vue'
// import Markdown from './sections/Markdown.vue'
// import BibTeX from './sections/BibTeX.vue'
// import Carousel from './sections/Carousel.vue'
// import Video from './sections/Video.vue'
// import ImageSlider from './sections/ImageSlider.vue'
// import ImageSliderInner from './sections/ImageSliderInner.vue'
// import ImageSelector from './sections/ImageSelector.vue'
// import Echart from './sections/Echart.vue'
// import Table from './sections/Table.vue'
// import Collapse from './sections/Collapse.vue'
// import SeletionForComparison from './sections/SeletionForComparison.vue'
// import Comment from './sections/Comment.vue'
// import Latex from './sections/Latex.vue'
// import Model3D from './sections/Model3D.vue'
// import GaussianSplats3D from './sections/GaussianSplats3D.vue'

export default {
  components: {
    Home,
    Welcome,
    News,
    Publication,
    Activity,
    Career
    // Abstract,
    // Markdown,
    // BibTeX,
    // Carousel,
    // Video,
    // ImageSlider,
    // ImageSliderInner,
    // ImageSelector,
    // Echart,
    // Collapse,
    // Table,
    // SeletionForComparison,
    // Comment,
    // Latex,
    // Model3D,
    // GaussianSplats3D
  }
}
</script>

<template>
    <div class="main-context">
        <div class="main-context-inner">
            <Home/>
            <Welcome/>
            <News/>
            <Publication/>
            <Activity/>
            <Career/>
            <!-- <Carousel/>
            <Video/>
            <Abstract/>
            <Markdown/>
            <Latex/>
            <Table/>
            <Collapse/>
            <Echart/>
            <Model3D/>
            <GaussianSplats3D/>
            <SeletionForComparison/>
            <ImageSliderInner/>
            <ImageSlider/>
            <ImageSelector/>
            <BibTeX/>
            <Comment/> -->
        </div>
    </div>
</template>


<style scoped>

.main-context {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
    box-sizing: border-box;
    border-radius: 20px 20px 0px 0px;

    background: rgba(255, 255, 255, 0.0);
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);

    /* Firefox */
    scrollbar-width: none;
    scrollbar-color: #888 #f1f1f1;

    /* WebKit */
    &::-webkit-scrollbar {
        width: 0px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 0px;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 0px;
        border: 0px solid #f1f1f1;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
}

.main-context-inner {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
}

@media (max-width: 768px) {
    .main-context {
        border-radius: 10px 10px 0px 0px;
    }
}

</style>
