<template>
  <div>
    <Home />
   <div>
      <v-select v-model="selected" placeholder="Select Category" :options="['one', 'two']"></v-select>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  }
}
</script>
