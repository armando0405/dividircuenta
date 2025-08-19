<script setup>
import InputForm from './InputForm.vue';
import PeopleView from './PeopleView.vue';
</script>

<template>
    <div class="main-container">
        <InputForm />
        <PeopleView />
    </div>
</template>
    
<style scoped>
.main-container {
    display: flex;
    flex-direction: row;
    min-height: 100vh; /* Cambié de height a min-height */
}
</style>