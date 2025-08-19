<script setup>
import { ref } from 'vue';
import { pay } from '../store/store';

const props = defineProps(["id", "numberOfPerson", "totalPorPerson", "paid"]);
let paid = ref(false);
let statuspage = ref("Pagar")

function handleChange(e){
    paid = e.target.checked;
    pay(props.id, paid);
    if (e.target.checked) {
        statuspage.value = "Pago";   
    } else {
        statuspage.value = "Pagar"; 
    }
}

</script>
<template>
    <div :class="['person',props.paid ? 'person-paid' : 'person-no-paid']">
        <div class="person-number"> Persona: {{ props.numberOfPerson }}</div>
        <div class="person-to-pay"> 
            {{ new Intl.NumberFormat("en-US", 
            { style: "currency", currency: "USD" }).format(props.totalPorPerson) }}
        </div>
        <div class="paid">
            <input type="checkbox" name="" id="" @change="handleChange">
            <span class="paid-text">{{ statuspage }}</span> <!-- ✅ Agregué span con clase -->
        </div>
    </div>
</template>

<style  scoped>
.person {
    width: 200px;
    height: 200px;
    border-radius: 8px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    margin: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.person-paid {
    border: solid 3px yellowgreen;
}

.person-no-paid {
    border: solid 3px #ccc;
}

.person-number {
    background-color: black;
    padding: 12px;
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
}

.person-to-pay {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: yellowgreen;
    padding: 20px 10px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.paid {
    background-color: #343f68;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.paid input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.paid-text {
    color: white;
    font-size: 14px;
    font-weight: 500;
}

</style>