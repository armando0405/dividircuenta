<script setup>
import {  store, getGrandTotal } from '../store/store';
import LabelComponet from './LabelComponet.vue';
import PersonComponent from './PersonComponent.vue';


</script>
<template>   
    <div class="no-items" v-if="store.people.length === 0"> no hay datosssss revisar</div>
    <div class="people-view" v-if="store.people.length > 0">
        <div class="header">
            <div>
                <LabelComponet title="total "  :value="getGrandTotal()"/>
            </div>
            <div>
                <LabelComponet title="faltante" :value="store.params.remaining" />
            </div>
        </div>
    </div>

    <div class="people-container">

        <PersonComponent v-for="person in store.people" :key="person.id" 
         :id="person.id"
         :number-of-person="person.numberOfPerson"
         :total-por-person="person.totalPorPerson"
         :paid="person.paid"       
        />
    </div>

</template>


<style  scoped>
.no-items {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
}

.people-view {
    flex: 1; /* Toma todo el espacio restante */
    margin: 0;
    display: flex;
    align-items: flex-start; /* Alinea contenido arriba */
    flex-direction: column;
    padding: 20px; /* Espaciado interno */
    box-sizing: border-box;
}

.people-container {
    width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 5px;
}

.header {
    color: white;
    font-weight: bolder;
    padding: 0 0 20px 0; /* Solo padding abajo */
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-direction: column;
    width: 100%;
}
</style>