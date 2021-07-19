<template>
  <div class="h-full">
    <h1>Posts Page</h1>
    <div>
      <h5 v-for="post in posts" :key="post.id">{{post.title}}</h5>
    </div>
  </div>
</template>

<script>
// this is in server side way
export default {
  // asyncData({app}) {
  //     app.router.push
  //     app.store
  // }
  async asyncData({ $axios }) {
    const res = await $axios.$get('https://jsonplaceholder.typicode.com/todos');
    // in data in res.data got only data with this way const {data} and then assign data to posts
    return {posts: res};
  },
  data() {
    return {
      posts: [],
    }
  },
  head: {
      title: 'Posts'
  },
  mounted() {
      console.log('mounted');
  }
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