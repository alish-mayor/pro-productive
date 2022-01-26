<template>
  <div id="app">
    <momentum/>
    <!-- <tracker></tracker> -->
    <!-- <tasks-view/> -->
    <!-- <weather/> -->
    
  </div>
</template>

<script>
// import tasksView from './views/TasksView.vue';
// import tracker from './components/Tracker.vue';
// import weather from './components/WeatherReport.vue';
import momentum from './components/Momentum.vue';

export default({
  data(){
    return{
      
    }
  },
  components: {
    momentum
    // tracker,
    // tasksView,
    // weather,
    
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
  // text-align: center;
}


</style>
