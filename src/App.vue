<template>
  <div id="app">
    <timeline/>
    <div class="views">
      <weather-view/>
      <tasks-view/>
      <exchange-view/>
    </div>
    <!-- <div class="background"></div> -->
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

$blue: #7CE0D4;
$green: #B2E990;
$gold: #E8DA90;
$white: #FFFFFF;


*, 
*::before, 
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F4F4F4;
  min-height: 100vh;
  position: relative;
  padding-top: 120px;
}

.background{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50vh;
  background: #3F4650;
}

.views {
  margin-top: 80px;
  display: flex;
  align-items: top;
  justify-content: space-around;
}

.vidget{
  width: 320px;
  height: 400px;
  background: $white;
  border-radius: 10px;
  position: relative;
  padding: 50px 10px 10px 10px;

  &_large{
    width: 700px;
  }
}

.circle{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: $white;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  border: 3px solid black;

  & i{
    font-size: 36px;
  }

  &_blue{
    border-color: $blue;
    color: $blue;
  }

  &_green{
    border-color: $green;
    color: $green;
  }

  &_gold{
    border-color: $gold;
    color: $gold;
  }
}

.input{
    display: flex;
    align-items: center;

    &__field{
        width: 100%;
        background: #e2e1e1;
        border: none;
        padding: 0.4rem 0.5rem;
        outline: none;
        border-radius: 5px;
        margin-right: 5px;
        font-family: inherit;
    }

    &__icon{
        
        border-radius: 5px;
        padding: 0.4rem 0.4rem;
        color: $white;
        font-size: 18px;
        cursor: pointer;

        &:hover{
            filter:brightness(0.9);
        }

        &_blue{
          background: $blue;
        }

        &_green{
          background: $green;
        }
    }
}


</style>
