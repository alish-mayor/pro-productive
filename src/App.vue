<template>
  <div id="app">
    <tracker></tracker>
  </div>
</template>

<script>

import tracker from './components/Tracker.vue';

export default({
  data(){
    return{

    }
  },
  components: {
    tracker
  }
  
})
</script>


<style lang="scss">
*, 
*::before, 
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #191b1d;
  text-align: center;
}


</style>
