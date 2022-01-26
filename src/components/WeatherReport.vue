<template>
    <div class="weather">
        <h1>Weather report</h1>
        <input type="text" placeholder="enter the city..." v-model="cityInput" @keydown.enter="loadData(cityInput)">
        <p>{{ cityName }}</p>
        <p><i class='bx bxs-thermometer' ></i>  <span> {{ transToCelsius(temp) }}ºC </span></p>
        <p><i class='bx bx-water'></i> <span> {{ speed }}m/s</span></p>
        <p><i class='bx bx-droplet'></i> <span> {{ humidity }}% </span></p>
    </div>
</template>

<script>
import API_KEY from '../api_key.js';

export default {
    data(){
        return{
            temp: '',
            speed: '',
            humidity: '',
            cityName: '',
            cityInput: '',
        }
    },
    // mounted(){
    //     this.loadData();
    // },
    
    methods: {
        async loadData(city){
            if(!city){
                return;
            }

            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await res.json();

            this.setData(data);
            this.cityInput = '';
        },
        setData(data){
            this.cityName = data.name;
            this.temp = data.main.temp;
            this.speed = data.wind.speed;
            this.humidity = data.main.humidity;
        },
        transToCelsius(temp){
            return (parseInt(temp) - 273.15).toFixed(0);
        }
    }
    
}
</script>

<style scoped lang="scss">
.weather{
    padding: 0.5rem;
}

input{
    padding: 0.5rem;
}

p{
    display: flex;
    align-items: center;
    padding: 0.5rem;
    font-size: 20px;
    color: black;
}

span{
    margin-left: 0.5rem;
}
</style>