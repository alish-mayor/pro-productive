<template>
    <div class="exchange-view vidget">
        <div class="circle circle_gold"><i class='bx bx-dollar' ></i></div>
        <currency v-for="(cur, index) in currencies" :key="index" :index="index"/>
        <button class="btn" @click="addCur"><i class='bx bx-plus-circle' ></i></button>
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
            return this.$store.state.currencies;
        } 
    }
}
</script>

<style scoped lang="scss">
.exchange-view{
    height: 100%;
}

.btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 3rem;

    &:hover{
        color: #E8DA90;
    }
}
</style>