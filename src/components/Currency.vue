<template>
    <div class="currency">
        <div v-if="editable">
            <select name="originalCurrency" v-model="originalCurrency" @change="loadExchange(sliceIt(originalCurrency), sliceIt(translatedCurrency))">
                <option disabled value="">Please select one</option>
                <option v-for="(code,index) in currencyCodes" :key="index">{{ code }}: <span>{{ currencyNames[index] }}</span></option>
            </select>
            <select name="originalCurrency" v-model="translatedCurrency" @change="loadExchange(sliceIt(originalCurrency), sliceIt(translatedCurrency))">
                <option disabled value="">Please select one</option>
                <option v-for="(code,index) in currencyCodes" :key="index">{{ code }}: <span>{{ currencyNames[index] }}</span></option>
            </select>
        </div>
        
        <p class="result">1 {{ sliceIt(originalCurrency) }} = {{ exchange[1] }} {{ sliceIt(translatedCurrency) }}</p>
        <button v-if="editable" @click="editable = false">Submit</button>
        <button v-if="!editable" @click="editable = true">Edit</button>
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
            editable: false
        }
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
        }
    },
    created(){
        this.loadCurrency();
    }
}
</script>

<style scoped lang="scss">
.currency {
    border-bottom: 1px solid lightgrey;
}

.result{
    display: inline-block;
    margin-right: 1rem;
}
</style>