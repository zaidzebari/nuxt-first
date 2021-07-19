<template>
  <div >
      <div>
          <div class="font-bold text-xl mb-2"><nuxt-link :to='{name: "posts-postId", params:{postId: post.id}}' >PostID: {{ post.id }}</nuxt-link></div>
      <!-- <p class="text-gray-700 text-base">
        
        </p> -->

      <div class="px-6 pt-4 pb-2">
        <span
          class="
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          >{{ post.title }}</span
        >
      </div>
      
      </div>

  </div>
</template>
<script>
export default {
  props: {
    post: {
       type:  Object,
    required: true
    }
  },
}
</script>