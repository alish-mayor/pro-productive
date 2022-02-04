<template>
    <div class="momentum">
        <h2 class="time">{{ time }}</h2>
        <p class="date">{{ date }}</p>
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
            this.date = new Date().toString().split(' ').slice(0,3).join(' ');
        },
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