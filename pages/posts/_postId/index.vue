<template>
    <div class="mx-20">
        <h1 class="text-3xl mb-3 pt-4">Title: {{post.title}}</h1>
       <div class="bg-gray-300 text-black rounded inline px-2 py-1">
            <span>PostID: {{post.id}}</span>
        <span>UserID: {{post.userId}}</span>
       </div>
        <pre>{{post.body}}</pre>
        <a href="" class="underline" @click.prevent="$router.back()" >Go Back</a>
    </div>
</template>
<script>
export default {
  async asyncData({$axios, params}) {
      const res = await $axios.$get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    return { post: res };
  },
   
  data() {
    return {
      post: [],
    }
  },
  head() {
    return {
        title: this.post.title
    }
  },
}
</script>
</script>