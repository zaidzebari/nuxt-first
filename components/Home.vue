
<template>
  <div class="flex justify-center items-center w-full h-full">
      this is home page
       <client-only>
      <v-select v-model="selected" placeholder="Select Category" :options="['one', 'two']"></v-select>
      </client-only>
  </div>
</template>
