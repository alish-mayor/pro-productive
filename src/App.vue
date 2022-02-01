<template>
  <div id="app">
    <!-- <momentum/> -->
    <!-- <tracker></tracker> -->
    <!-- <tasks-view/> -->
    <!-- <weather/> -->
    <button @click="addCur">+</button>
    <currency v-for="(cur, index) in currenciesList" :key="index"/>
    
  </div>
</template>

<script>
// import tasksView from './views/TasksView.vue';
// import tracker from './components/Tracker.vue';
// import weather from './components/WeatherReport.vue';
// import momentum from './components/Momentum.vue';
import currency from './components/Currency.vue';

export default({
  data(){
    return{
      currenciesList: [],
    }
  },
  components: {
    // momentum
    // tracker,
    // tasksView,
    // weather,
    currency
  },
  methods: {
    addCur(){
      this.currenciesList.push('');
    }
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
