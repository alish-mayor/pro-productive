<template>
    <div class="weather">
        <h1>Weather report</h1>
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
        }
    },
    mounted(){
        this.loadData();
    },
    
    methods: {
        async loadData(){
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`);
            const data = await res.json();
            this.setData(data);
        },
        setData(data){
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

<style scoped>
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