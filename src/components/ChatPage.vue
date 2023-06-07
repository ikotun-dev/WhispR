<template>
    <ChatTop :userProfile="userProfile" :userName="userName"></ChatTop>
</template>
<script>
import ChatTop from './ChatTop'
export default{
    components: {
        ChatTop
    },

    data(){
        return{
            userName : " ",
            userProfile : " ",
        }
    },
    created() {
        this.userName = this.$route.query.userName || "";
         this.userProfile = this.$route.query.userImage || "";

    }
}
</script>

