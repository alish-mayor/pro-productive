<template>
    <div class="currency">
        <h2>Currency exchange</h2>
        <select name="originalCurrency" v-model="originalCurrency">
            <option disabled value="">Please select one</option>
            <option v-for="(code,index) in currencyCodes" :key="index">{{ code }}: <span>{{ currencyNames[index] }}</span></option>
        </select>
        <p>Original selected code: {{ originalCurrency.slice(0,3) }}</p>
        
        <select name="originalCurrency" v-model="translatedCurrency">
            <option disabled value="">Please select one</option>
            <option v-for="(code,index) in currencyCodes" :key="index">{{ code }}: <span>{{ currencyNames[index] }}</span></option>
        </select>
        <p>Translated selected code: {{ translatedCurrency.slice(0, 3) }}</p>
        
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
        }
    },
    methods: {
        async loadCurrency(){
            const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json";
            const res = await fetch(url);
            const data = await res.json();
            this.currencyCodes = Object.keys(data);
            this.currencyNames = Object.values(data);
        }
    },
    created(){
        this.loadCurrency();
    }
}
</script>

<style scoped lang="scss">

</style>