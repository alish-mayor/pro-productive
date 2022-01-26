<template>
    <div class="momentum">
        <h2 class="time">{{ time }}</h2>
        <p class="date"></p>
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
            setInterval(() => {
                const time = new Date();
                const hours = time.getHours().toString().padStart(2,0);
                const mins = time.getMinutes().toString().padStart(2,0);
                const seconds = time.getSeconds().toString().padStart(2,0);
                this.time = `${hours}:${mins}:${seconds}`;
            }, 1000);   
        }
    },
    created(){
        this.getTime();
    }
}
</script>

<style lang="scss">

</style>