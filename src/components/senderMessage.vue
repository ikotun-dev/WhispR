<template>
    <div class="flex justify-end mx-1 mr-1">
      <div class="bg-gray-900 text-gray-300 py-1 px-4 rounded-l-xl font-serif rounded-tr-xl">
         {{ message }} LMfaoooo
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    }
  };
  </script>
  