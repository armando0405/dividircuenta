<script setup>
const props = defineProps({
  title: String,
  value: Number
})
</script>

<template>
  <div>
    <span class="title">{{ props.title }}</span>
    <span class="value">
      {{ new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(props.value) }}
    </span>
  </div>
</template>

<style scoped>
.title {
  font-weight: bolder;
}
.value {
  color: yellowgreen;
}
</style>
