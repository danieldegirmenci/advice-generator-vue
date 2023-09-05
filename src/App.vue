<template>
  <div class="title-container">
    <h1 class="title">Advice Generator</h1>
  </div>

 


  <div class="allinfo">
    <div class="button-group-1"
    :class="currentComponent==='RandomAdvice'?'randomButton':'idButton'">

      <button
        @click="currentComponent = 'RandomAdvice'">Random Advice</button>

        <button @click="currentComponent = 'AdviceFromID'">Advice by ID</button>
    </div>
    <Transition name="fade" mode="out-in">
      <component class="component" ref="childRef" :is="currentComponent" :key="currentComponent"></component>
    </Transition>
    <div class="button-group-2">
      <button class="button-2" @click="triggerUpdateID('decrement')">Previous</button>
      <button class="button-2" @click="triggerUpdateID('increment')">Next</button>
    </div>

  </div>


  <footer class="footer">
    <div class="links">
      <div class="tech-stack">
        <h2>Tech Stack</h2>
        <a title="HTML5" class="footer-brand" href="#">
          <font-awesome-icon icon="fa-brands fa-html5" class="logo" size="3x" /></a>
        <a title="CSS3" class="footer-brand" href="#">
          <font-awesome-icon icon="fa-brands fa-css3" class="logo" size="3x" />
        </a>
        <a title="JavaScript" class="footer-brand" href="#">
          <font-awesome-icon icon="fa-brands fa-square-js" class="logo" size="3x" />
        </a>
        <a title="Vue" class="footer-brand" href="#">
          <font-awesome-icon icon="fa-brands fa-vuejs" class="logo" size="3x" />
        </a>
        <a title="Advice API" class="footer-brand" href="#">
          <font-awesome-icon icon="fa-solid fa-database" class="logo" size="3x" />
        </a>
      </div>
      <div class="social-profiles">
        <h2>Social</h2>
        <a title="Github" href="https://github.com/danieldegirmenci" target="_blank" class="footer-profile">
          <font-awesome-icon icon="fa-brands fa-github" class="logo" size="3x" />
        </a>
        <a title="LinkedIn" href="https://www.linkedin.com/in/danieldegirmenci1/" target="_blank" class="footer-profile">
          <font-awesome-icon icon="fa-brands fa-linkedin" class="logo" size="3x" />
        </a>
      </div>
    </div>
    <div class="footer-info"> &copy;2023 | Daniel Değirmenci</div>
  </footer>
</template>



<style>
@import '@/assets/App.css';
</style>

<script>
import RandomAdvice from "./components/RandomAdviceComponent.vue";
import AdviceFromID from "./components/AdviceFromID.vue"



export default {
  components: {
    RandomAdvice,
    AdviceFromID,

  },
  data() {
    return {
      currentComponent: 'RandomAdvice',
    }
  },
  methods: {
    triggerUpdateID(type) {
      const childComponent = this.$refs.childRef;
      childComponent.updateID(type);
    
  },


  }

}

</script>

