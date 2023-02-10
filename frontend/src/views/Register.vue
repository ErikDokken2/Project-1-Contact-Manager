<template>
    <div class="home">
      <RegisterCard/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import RegisterCard from '@/components/RegisterCard.vue'
  
  export default {
    name: 'Home',
    components: {
        RegisterCard
    }
  }
  </script>
  