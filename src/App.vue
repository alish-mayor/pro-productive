<template>
  <div id="app">
    <h1><span class="hours">{{ parseTime(hours) }}</span>:<span class="minutes">{{parseTime(minutes)}}</span>:<span class="seconds">{{parseTime(seconds)}}</span></h1>
    <div class="buttons">
      <button class="btn btn_start" @click="start" :disabled="disabled" :class="disabled ? 'disabled' : ''"><i class='bx bx-play'></i></button>
      <button class="btn btn_stop" @click="stop"><i class='bx bx-stop' ></i></button>
      <button class="btn btn_pause" @click="pause"><i class='bx bx-pause' ></i></button>
    </div>
    
  </div>
</template>

<script>

export default({
  data(){
    return{
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: 0,
      disabled: false,
    }
  },

  methods: {
    start(){
      this.interval = setInterval(() => {
        this.seconds++;

        if(this.seconds === 60){
          this.seconds = 0;
          this.minutes++;
        }

        if(this.minutes === 60){
          this.minutes = 0;
          this.hours++;
        }
      }, 1000);
      this.disabled = true;
    },
    stop(){
      clearInterval(this.interval);
      this.hours = this.minutes = this.seconds = 0;
      this.disabled = false;
    },
    pause(){
      clearInterval(this.interval);
      this.disabled = false;
    },
    parseTime(time){
      return time.toString().padStart(2, 0);
    },
    changeBtnState(state){
      const btn = document.querySelector('.btn_start');
      btn.disabled = state;
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
  text-align: center;
}

.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn{
  padding: 0.2rem;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  border: none;
  
  &:not(:first-child){
    margin-left: 0.5rem;
  }

  &_start{
    background: cadetblue;
  }

  &_stop{
    background: rgb(160, 95, 95);
  }

  &_pause{
    background: rgb(160, 148, 95);
  }

  &.disabled{
    background: #a5a5a5;
  }
}
</style>
