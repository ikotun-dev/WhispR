<template>
  <div class="chat-messages pt-2 px-2 bg-black">
    <div class="bg-black h-100">
      <senderMessage></senderMessage>
      <recipientMessage></recipientMessage>
      <senderMessage></senderMessage>
      <recipientMessage></recipientMessage>
      <senderMessage></senderMessage>
      <recipientMessage></recipientMessage>
      <recipientMessage></recipientMessage>
      <recipientMessage></recipientMessage>

    </div>

    <div class="chat-input fixed bottom-0 left-0 right-0 px-2 py-2">
      <input
        class="w-72 h-8 py-2 px-2 border focus:outline-none focus:ring-2 focus:ring-offset-blue-900 rounded-lg ring-1 ring-blue-950 rela"
        v-model="inputMessage"
        type="text"
        placeholder="Type your message"
      />
      <button class="ml-4 w-8 h-8 font-extrabold" @click="sendMessage">&rightarrow;</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import recipientMessage from "./recipientMessage";
import senderMessage from "./senderMessage";

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

  components: {
    recipientMessage,
    senderMessage,
  },

  data() {
    return {
      messages: [],
      inputMessage: " ",
    };
  },

  methods: {
    //implementing patch in axios
    sendThemessage(){
        this.inputMessage

    },

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
