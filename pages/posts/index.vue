<template>
    <div class="h-full">
        <h1>Posts Page</h1>
        <div>
            <h5 v-for="post in posts" :key="post.id">{{post.title}}</h5>
        </div>

    </div>
</template>

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