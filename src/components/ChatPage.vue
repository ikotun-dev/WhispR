<template>
    <ChatTop :userProfile="userProfile" :userName="userName"></ChatTop>
    <ChatSection></ChatSection>
</template>
<script>
import ChatTop from './ChatTop'
import ChatSection from './ChatSection'

export default{
    components: {
        ChatTop,
        ChatSection,
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

