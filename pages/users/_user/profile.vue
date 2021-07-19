<template>
    <h2>this is {{ userID }} profile page</h2>
</template>
<script>
export default {
    // this validate method in has in page not component it will only allow this page to build if parameter is number
    // validate({params}) { we can use only params here
    validate(context) {

        return /^\d+$/.test(context.params.user)
        // if (context.params.user === "zaid-salah") {
        //     return true;
        // }else {
        //     return false;
        // }
    },
    data() {
        return {
            userID: this.$route.params.user,
        }
    }
}
</script>