<template>
    <div >
      <!----<Contact :users="users" :username="username"/>-->
      <Contact/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
import Contact from '@/components/Contact.vue';

  
  export default {
    name: 'Contactview',
    components: {
    Contact
},
/*props: {
    users: {
      type: Array,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }*/

  }
  </script>