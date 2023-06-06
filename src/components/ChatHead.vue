<template>
    <div class="py-2 px-4 bg-blue-950 h-20 flex">
        <img class="h-16 w-16 rounded-full " :src="require('../assets/images/832.jpg')" >
        <div class="ml-4">
      <h2 class="text-white font-extrabold">{{name}}</h2>
      <h4 class="text-white sm:text-xs lg:text-md font-serif">{{last_message }}</h4>
    </div>
        
    </div>
</template>
<script>
export default{
    return : {
        data : {
            user : []
        }
    }
}
</script>

