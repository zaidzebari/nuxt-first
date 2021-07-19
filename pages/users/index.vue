<template>
    <div>
      <div>  users page (show all the user here)</div>
        <div>
            <div>
                <input v-model="userID" type="text"><br>
                <button type="button" class="underline border my-2 px-3" :disabled = "userID.length == 0"  @click="visitUserPage">Go</button> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userID:'',
        }
    },
    methods: {
        visitUserPage() {
            this.$router.push(`/users/${this.userID}/profile`);
            // this.$router.push({path:'users/'+this.userID + '/profile'});
            // this.$router.push({ name: 'exchanges-userId', params: { userId: 11 } })
        },
    }
}
</script>