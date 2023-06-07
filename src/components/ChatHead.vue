<template>
  <div
    class="py-2 px-4 bg-black h-20 flex"
    v-for="user in users"
    :key="user.id"
    @click="goToChatPage(user.name, user.profile_image)"
  >
    <img class="h-16 w-16 rounded-full" :src="user.profile_image" />
    <div class="ml-4">
      <h2 class="text-white font-extrabold text-sm">{{ user.name }}</h2>
      <h4 class="text-gray-400 sm:text-xs lg:text-md font-serif">
        {{ user.last_message }}
      </h4>
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
      {
        id: 0,
        name: "Collins",
        last_message: "would you come outside ? ",
        profile_image: "https://avatars.githubusercontent.com/u/97165288",
      },
      {
        id: 1,
        name: "Gerald",
        last_message: "i really care dont know how youll do it ",
        profile_image: "https://avatars.githubusercontent.com/u/97165289",
      },
      {
        id: 2,
        name: "Mike",
        last_message: "you sef know say you fuck up nau.",
        profile_image: "https://avatars.githubusercontent.com/u/97165285",
      },
      {
        id: 3,
        name: "Bolu",
        last_message: "hiiii - <3 ",
        profile_image: "https://avatars.githubusercontent.com/u/97165245",
      },
      {
        id: 4,
        name: "Yemi",
        last_message: "Just dey chop, fool",
        profile_image: "https://avatars.githubusercontent.com/u/97165000",
      },
      {
        id: 5,
        name: "Jamal",
        last_message: "go play basketball",
        profile_image: "https://avatars.githubusercontent.com/u/971645246",
      },
      {
        id: 6,
        name: "Lawal",
        last_message: "write it in python ig",
        profile_image: "https://avatars.githubusercontent.com/u/97164323",
      },
      {
        id: 7,
        name: "Dimeji",
        last_message: "got nothing to say to you man, ",
        profile_image: "https://avatars.githubusercontent.com/u/97164223",
      },
    ];
  }, //created

  methods: {
    goToChatPage(username, profileimage) {
      this.$router.push({
        path: "/chatpage",
        query: {
          userName: username,
          userImage: profileimage,
        },
      });
    },
  },
};
</script>
