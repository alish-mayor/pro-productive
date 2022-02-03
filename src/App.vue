<template>
  <div id="app">
    <timeline/>
    <weather-view/>
    <tasks-view/>
    <exchange-view/>
  </div>
</template>

<script>
import timeline from './components/Timeline.vue';
import weatherView from './views/WeatherView.vue';
import tasksView from './views/TasksView.vue';
import exchangeView from './views/ExchangeView.vue';

export default({
  data(){
    return{
    }
  },
  components: {
    timeline,
    weatherView,
    tasksView,
    exchangeView,
  },
  methods: {
    
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
}


</style>
