<script setup>
import { ref } from 'vue';
import { store, calculate } from '../store/store';

const total = ref(0);
const tip = ref(0);
const cantPeople = ref(0);

function hadleSubmit(){
    store.params.total = total;
    store.params.tip = tip;
    store.params.cantPeople = cantPeople;

    calculate();
}
</script>
<template>
    <form action="" @submit.prevent="hadleSubmit">
        <div class="form-container">
            <div>
                <label for="total">Total</label>
                <input type="number" v-model="total">
            </div>
            <div>
                <label for="tip">Propina %</label>
                <input type="number" v-model="tip" >
            </div>
            <div>
                <label for="people">Total personas: </label>
                <input type="number" v-model="cantPeople">
            </div>
            <div>
                <input type="submit" value="calcular">
            </div>
        </div>
    </form>
</template>


<style  scoped>
form {
    width: 400px;
    background-color: #17814e;
    min-height: 100vh; /* Cambié height por min-height */
    height: 100%; /* Agregué para que tome toda la altura disponible */
    display: flex;
    align-items: center;
    color: white;
    font-size: 18px;
    padding: 20px;
    box-sizing: border-box; /* Importante: incluye padding en el cálculo */
}

.form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

form label {
    display: block;
}

form input {
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
}
</style>