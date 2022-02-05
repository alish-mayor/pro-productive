<template>
    <div class="weather-view vidget">
        <div class="load-overlay" v-if="loading"><i class='bx bx-loader bx-spin load-overlay__icon'></i></div>
        <div class="input">
            <input class="input__field"  type="text" placeholder="enter the city..." v-model="cityInput" @keydown.enter="getData(cityInput)">
            <i class='bx bx-search input__icon input__icon_blue' @click="getData(cityInput)"></i>
        </div>
        <div class="content" v-if="dataLoaded">
        <div class="header">
            <h2 class="header__title">{{ data.name }}, <span class="header__subtitle">{{ data.sys.country }}</span></h2>
        </div>
        <div class="main-info">
            <i class='bx main-info__icon' :class="getIcon(data.weather[0].main)"></i>
            <h4 class="main-info__title">{{ data.weather[0].main }}</h4>
            <h3 class="main-info__temp">{{ transToCelsius(data.main.temp) }}</h3>
        </div>
        <div class="extra-info">
            <div class="extra-info__card">
            <i class='bx bx-wind card__icon'></i>
            <div>
                <h4 class="card__title">Wind</h4>
                <p class="card__subtitle">{{data.wind.speed.toFixed(0)}} m/s</p>
            </div>
            </div>
            <div class="extra-info__card">
            <i class='bx bx-droplet card__icon'></i>
            <div>
                <h4 class="card__title">Humidity</h4>
                <p class="card__subtitle">{{ data.main.humidity}}%</p>
            </div>
            </div>
            <div class="extra-info__card">
            <i class='bx bxs-thermometer card__icon' ></i>
            <div>
                <h4 class="card__title">Feels like</h4>
                <p class="card__subtitle">{{ transToCelsius(data.main.feels_like)}}</p>
            </div>
            </div>
            <div class="extra-info__card">
            <i class='bx bx-arrow-to-bottom card__icon'></i>
            <div>
                <h4 class="card__title">Pressure</h4>
                <p class="card__subtitle">{{ data.main.pressure }}mbar</p>
            </div>
            </div>
        </div>
    </div>
    <div class="circle circle_blue"><i class='bx bx-cloud' ></i></div>
    </div>
</template>

<script>
import API_KEY from '../api_key.js';

export default {
    data(){
        return{
            dataLoaded: false,
            data: {},
            cityInput: '',
            loading: false,
        }
    },
    methods: {
        async getData(city){
        if (!city) return;
        try{
          this.loading = true;
          this.dataLoaded = false;
          let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
          if(!response.ok){
              this.loading = false;
              this.dataLoaded = false;
            //   this.isError = true;
              throw new Error('Nothing found...');
          }
          this.data = await response.json();
          this.loading = false;
          this.dataLoaded = true;
        //   this.isError = false;
          this.cityInput = '';
        } catch(error){
          console.log(error);
        }
      },
      getIcon(weatherDesc) {
      switch (weatherDesc) {
        case "Drizzle":
          return "bx-cloud-drizzle";
        case "Snow":
          return "bx-cloud-snow";
        case "Clear":
          return "bx-sun";
        case "Rain":
          return "bx-cloud-rain";
        case "Thunderstorm":
          return "bx-cloud-lightning";
        case "Clouds":
          return "bx-cloud";
        default:
          return "bx-water";
            }
        },
        transToCelsius(temp) {
      return `${(temp - 273.15).toFixed(0)}ºC`;
    },
    }
}
</script>

<style scoped lang="scss">
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .header__title{
    font-weight: 500;
    font-size: 2rem;
  }
  
  .header__subtitle{
    font-weight: 300;
    font-size: 1.6rem;
  }

  .header__icon{
    width: 2.4rem;
    height: 2.4rem;
    font-size: 2rem;
  }

  .header__icon.active{
    color: red;
  }

  .main-info{
    text-align: center;
    margin-top: 1rem;
  }

  .main-info__icon{
    font-size: 7rem;
  }

  .main-info__title{
    // margin-top: -0.5rem;
    font-weight: 400;
    font-size: 1.8rem;
  }

  .main-info__subtitle{
    color: #999999;
  }

  .main-info__temp{
    font-weight: 500;
    font-size: 3rem;
    // margin-top: 1rem;
  }

  .extra-info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    row-gap: 2rem;
    column-gap: 2rem;
    margin-top: 1rem;
  }

  .extra-info__card{
    display: flex;
    align-items: center;
    
  }

  .card__icon{
    font-size: 3rem;
    margin-right: 1rem;
  }

  .card__title{
    font-size: 1.6rem;
    font-weight: 300;
  }

  .card__subtitle{
    font-size: 1.4rem;
    font-weight: 300;
    color: #707070;
  }

  .weather-view{
    position: relative;
    height: 100%;
  }

  .load-overlay{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .load-overlay__icon{
    font-size: 3rem;
  }

  .error{
    color: red;
  }
</style>