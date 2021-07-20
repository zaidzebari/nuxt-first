<template>
  <div>
    <Home />
   <div>
     <client-only>
      <v-select v-model="selected" placeholder="Select Category" :options="['one', 'two']"></v-select>
      </client-only>
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
