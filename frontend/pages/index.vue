<template>
    <div>
      <BButton variant="primary" @click="show = !show">Click me</BButton>
      <BModal v-model="show">Test</BModal>ssssssssssssssssaaaaaaaaaaaaaaaaaaaabbbbbbbbbbb
    </div>
  </template>

  <script setup lang="ts">
  const show = ref(false)
  </script>

  <style scoped>
</style>
