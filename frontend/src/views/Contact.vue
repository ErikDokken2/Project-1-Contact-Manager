<template>
    <div>
        <!-- <div class="d-inline-flex p-2">
          <search/>
      </div> -->
      <Contact/>
    </div>
</template>
  
<script>
// @ is an alias to /src

import Contact from '@/components/Contact.vue';
// import Search from '@/components/Search.vue';


export default {
  name: 'Contactview',
  components: {
    Contact,
    // Search
  }
}
</script>