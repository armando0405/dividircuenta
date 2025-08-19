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
    height: 100vh;
}
</style>