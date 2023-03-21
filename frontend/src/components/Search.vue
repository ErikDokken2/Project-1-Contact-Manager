<template>
  <div>
    <div class="input-group">
      <input v-model="this.input" type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
        aria-describedby="search-addon"/>
      <button type="button" class="btn btn-outline-primary" v-on:click="search()" >search</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data(){
    return{
      // data: this.users,
      input: "",
    }
  },
  props: {
    val: String
  },
  methods: {
    search(){
    this.$emit("input", this.val)
  }
    },
  mounted() {
    console.log(this.input);
    this.$emit("emit-result", this.input)
}
}
</script>

