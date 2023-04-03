<template>
  <div>
    <Contact :users="users" :username="username" :userId="userId"/>
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue';
export default {
  name: 'Contactview',
  components: {
    Contact
},
data() {
    return {
      users: [],
      username: '',
      userId: ''
    }
  },
  created() {
    this.users = JSON.parse(this.$route.query.users);
    this.username = this.$route.query.username;
    this.userId = this.$route.query.userId;
    console.log(this.$route.query.userId);
  }
};
</script>