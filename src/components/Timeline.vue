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
            time: '',
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

</style>