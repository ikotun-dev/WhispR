<template>
  <div
    class="py-2 px-4 bg-blue-950 h-20 flex" v-for="user in users" :key="user.id">
    <img class="h-16 w-16 rounded-full" :src="user.profile_image"/>
    <div class="ml-4">
      <h2 class="text-white font-extrabold text-sm">{{ user.name }}</h2>
      <h4 class="text-gray-400 sm:text-xs lg:text-md font-serif">{{ user.last_message }} </h4>
    </div>
 </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
    }; //return
  }, //data
  created() {
    this.users = [
      { id: 0, name: "Collins", last_message: "would you come outside ? ", profile_image: "https://avatars.githubusercontent.com/u/97165288" },
      {
        id: 1,
        name: "Osasogenaga",
        last_message: "i really care about all this",
        profile_image: "https://avatars.githubusercontent.com/u/97165289"
      },
      {
        id: 2,
        name: "Mike",
        last_message: "you sef know say you fuck up nau.",
        profile_image: "https://avatars.githubusercontent.com/u/97165285"
      },
      {
        id: 3,
        name: "Belema",
        last_message: "i really dont know what to say.",
        profile_image: "https://avatars.githubusercontent.com/u/97165265"
      },
      { id: 4, name: "Yemi", last_message: "Just dey chop, fool", profile_image: "https://avatars.githubusercontent.com/u/97165223"},
    ];
  },
};
</script>
