<template>
    <div class="flex justify-start my-1 ml-1">
      <div class="bg-blue-800 text-gray-200 py-1 px-4 font-serif rounded-l-md rounded-r-xl ">
        <!-- {{ message.text }} ddhdhh --> lmao
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  