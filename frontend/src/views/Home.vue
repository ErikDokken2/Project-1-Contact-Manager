<template>
  <div class="home">
    <LoginCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginCard from '@/components/LoginCard.vue'

export default {
  name: 'Home',
  components: {
    LoginCard
  }
}
</script>
