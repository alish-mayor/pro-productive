<template>
    <div class="currency">
        <div class="currency__selects" v-if="editable">
            <select class="currency__select" name="originalCurrency" v-model="originalCurrency" @change="loadExchange(sliceIt(originalCurrency), sliceIt(translatedCurrency))">
                <option disabled value="">Select original</option>
                <option v-for="(code,index) in currencyCodes" :key="index">{{ code }}: <span>{{ currencyNames[index] }}</span></option>
            </select>
            <select class="currency__select" name="translatedCurrency" v-model="translatedCurrency" @change="loadExchange(sliceIt(originalCurrency), sliceIt(translatedCurrency))">
                <option disabled value="">Select translated</option>
                <option v-for="(code,index) in currencyCodes" :key="index">{{ code }}: <span>{{ currencyNames[index] }}</span></option>
            </select>
        </div>
        <div class="currency__info">
            <p class="currency__result">1 {{ sliceIt(originalCurrency) }} = {{ exchange[1] }} {{ sliceIt(translatedCurrency) }}</p>
            <div class="buttons">
                <button class="btn btn__submit" v-if="editable" @click="editable = false"><i class='bx bx-check-square' ></i></button>
                <button class="btn btn__edit" v-if="!editable" @click="editable = true"><i class='bx bx-edit'></i></button>
                <button class="btn btn__delete" v-if="!editable" @click="deleteCur(index)"><i class='bx bx-minus-circle' ></i></button>
            </div>
        </div>
        <hr class="currency__line">
    </div>
</template>

<script>
export default {
    data(){
        return{
            originalCurrency: '',
            translatedCurrency: '',
            currencyCodes: [],
            currencyNames: [],
            exchange: [],
            editable: true,
        }
    },
    props:{
        index: Number
    },
    methods: {
        async loadCurrency(){
            const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json";
            const res = await fetch(url);
            const data = await res.json();
            this.currencyCodes = Object.keys(data);
            this.currencyNames = Object.values(data);
        },
        async loadExchange(first, second){
            if(!first || !second) return;
            const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${first}/${second}.json`;
            const res = await fetch(url);
            const data = await res.json();
            this.exchange = Object.values(data);
        },
        sliceIt(str){
            return str.slice(0,3);
        },
        deleteCur(index){
            this.$store.commit('deleteCur', index);
        }
    },
    created(){
        this.loadCurrency();
    },
}
</script>

<style scoped lang="scss">
.currency{
    margin-bottom: 1.5rem;

    &__selects{
       text-align: center;
    }

    &__select{
        font-family: inherit;
        margin-bottom: 0.5rem;
        width: 95%;
        padding: 0.3rem 0.5rem;
    }

    &__info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    &__line{
        width: 90%;
        margin: 0 auto;
        background: #B4B4B4;
        border: none;
        height: 1px;
    }

    
}

.btn{
    background: transparent;
    border: none;
    font-size: 2rem;
    margin-left: 0.5rem;

    &:hover{
        color: #E8DA90;
        cursor: pointer;
    }

    & i{
        vertical-align: middle;
    }
}
</style>