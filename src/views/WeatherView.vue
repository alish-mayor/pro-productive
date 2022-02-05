<template>
    <div class="weather-view vidget">
        <div class="input">
            <input class="input__field"  type="text" placeholder="enter the city..." v-model="cityInput">
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
        }
    },
    methods: {
        async getData(city){
        if (!city) return;
        try{
        //   this.loading = true;
          this.dataLoaded = false;
          let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
          if(!response.ok){
            //   this.loading = false;
              this.dataLoaded = false;
            //   this.isError = true;
              throw new Error('Nothing found...');
          }
          this.data = await response.json();
        //   this.loading = false;
          this.dataLoaded = true;
        //   this.isError = false;
          if (this.cityInput.length > 0) this.changeCity();
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

</style>