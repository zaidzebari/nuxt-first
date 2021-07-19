<template>
  <div class="bg-indigo-200">
    <MyNav/>
    <!-- <div class="flex justify-center bg-indigo-400 space-x-3 text-white py-4">
        <nuxt-link to="/" 
        >Home</nuxt-link
      >
      <nuxt-link to="/users" 
        >Users</nuxt-link
      >
      <nuxt-link to="/about"
        >About</nuxt-link
      >
    </div> -->
    <div class="bg-indigo-100 px-8 min-h-screen min-w-screen">
      <Nuxt />
    </div>
    <div class="flex justify-center bg-indigo-400 text-white py-3">
      here is footer
    </div>
  </div>
</template>
<script>
import MyNav from "../components/Nav" 
export default {
  components:{
    MyNav
  }
  
}
</script>