<template>
    <div class="momentum">
        <h2 class="time">{{ time }}</h2>
        <p class="date">{{getWeekDay()}}, {{ date }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            time: new Date().toString().split(' ')[4],
            date: '',
        }
    },
    methods:{
        getTime(){
            setInterval(() => { this.time = new Date().toString().split(' ')[4]; }, 1000);
        },
        getDate(){
            this.date = new Date().toString().split(' ').slice(1,3).join(' ');
        },
        getWeekDay(){
          const weekDays = {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: 'Friday',
          6: 'Saturday',
          }
          const weekDay = new Date().getDay();
          return weekDays[weekDay];
        }
    },
    created(){
        this.getTime();
        this.getDate();
    }
}
</script>

<style lang="scss">
.momentum{
    text-align: center;
    color: #ffffff;
}

.time{
    font-weight: 500;
    font-size: 56px;
}
.date{
    font-weight: 400;
    font-size: 30px;
}
</style>