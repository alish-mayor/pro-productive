<template>
    <div class="exchange-view vidget">
        <div class="circle circle_gold"><i class='bx bx-dollar' ></i></div>
        <currency v-for="(cur, index) in currencies" :key="index"/>
        <button @click="addCur">Add cur</button>
    </div>
</template>

<script>
import currency from '../components/Currency.vue';
export default {
    components: {
        currency
    },
    methods: {
        addCur(){
            this.$store.commit('addCur');
        }
    },
    computed:{
        currencies(){
            return this.$store.state.currencies
        } 
    }
}
</script>

<style scoped lang="scss">
.exchange-view{
    height: 100%;
}
</style>