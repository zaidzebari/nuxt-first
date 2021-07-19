<template>
  <div class="h-full">
    <div class=" flex justify-center items-center text-3xl mb-3 text-green-500">
        <h1>Posts Page</h1>
    </div>
    <div class="container flex flex-wrap">
      <Cards v-for="post in posts" :key="post.id" :post = 'post' class=" border-2 border-blue-900 w-40 mx-auto"/>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Card";
// this is in server side way
export default {
    components: {
      Cards
  },
  // asyncData({app}) {
  //     app.router.push
  //     app.store
  // }
  async asyncData({ $axios }) {
    const res = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    // in data in res.data got only data with this way const {data} and then assign data to posts
    return { posts: res };
  },
  data() {
    return {
      posts: [],
    }
  },
  head: {
    title: 'Posts',
  },
  mounted() {
    console.log('mounted');
  },
  
}
</script>

<!--
// this is vue way
<script>
// import axios from "@nuxtjs/axios"
export default {
    data() {
        return {
            posts: []
        }
    },
    // this way is not server side rendered approach!!! just single page applicaiton
    mounted() {
        // because i have installed axios nuxt so i can use like this or we can install axios from npm install axios then import it and use it
        this.$axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            this.posts = res.data;
        })
        .catch(error => {
            console.log(error);
        });
    }
}
</script>
-->