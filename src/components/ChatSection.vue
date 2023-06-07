<template>
  <div class="chat-messages mt-2 mx-2">
    <div v-for="message in messages" :key="message.id">
      {{ message.content }}
    </div>

    <div class="chat-input">
      <input
        class="w-72 py-2 px-2 border focus:outline-none focus:ring-2 focus:ring-offset-blue-900 rounded-lg ring-1 ring-blue-950"
        v-model="inputMessage"
        type="text"
        placeholder="Type your message"
      />
      <button class="ml-4" @click="sendMessage">&rightarrow;</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
    selectedUSer: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      messages: [],
      inputMessage: " ",
    };
  },

  methods: {

    //implementing patch in axios 
    sendMessage() {
      axios
        .patch("https:///jsonplaceholder.typicode.com/posts/1", {
          title: this.inputMessage,
        })
        .then((response) => console.log(response.data));
    },
  },
};
</script>
