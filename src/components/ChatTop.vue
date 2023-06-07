<template>
    <div class="bg-black h-24 pt-4 px-4 sm:flex sm:items-center sm:justify-between">
        <button class="text-white .wave-emoji text-xl" @click="goBack">&leftarrow;</button>
    
    <div class="m-auto">
        <img class="sm:h-12 sm:w-12 lg:h-13 lg:w-13 rounded-full" :src="require('../assets/images/832.jpg')" >
        <h2 class="sm:mt-2 lg:mt-1 lg:mb-1 text-white font-extrabold">Collins</h2>
    </div>
      
    </div>
</template>
<style scoped>
    .wave-emoji {
        font-family: "Segoe UI Emoji", "NotoColorEmoji", "Twemoji";
    }
    

</style>
<script>
export default{
    return : {
        data : {

        },
        methods : {
            goBack(){
                this.$router.go(-1)
            }
        }
    }
}
</script>