<template>
  <button class="icon" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheIcon"
}
</script>

<style scoped>

</style>
