<template>
    <div class="d-flex justify-content-center p-5">
    <div class="card" style="width: 25rem;">
        <div class="container p-2">
            <h3>Register</h3>
        </div>
        <form>
      <!-- Email input -->
      <div class="form-outline needs-validation p-4">
        <input type="email" id="form2Example1" class="form-control" v-model="this.user"/>
        <label class="form-label" for="form2Example1">Email address</label>
      </div>
    
      <!-- Password input -->
      <div class="form-outline needs-validation p-4">
        <input type="password" id="form2Example2" class="form-control" v-model="this.pass" />
        <label class="form-label" for="form2Example2">Password</label>
      </div>
      <div class="form-outline mb-4 needs-validation p-4">
        <input type="password" id="form2Example2" class="form-control" v-model="this.confirm_pass" />
        <label class="form-label" for="form2Example2">Confirm Password</label>
      </div>
    
    
      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31"/>
            <label class="form-check-label" for="form2Example31"> Remember me </label>
          </div>
        </div>
        </div>
      <!-- Submit button -->
      <button type="button" class="btn btn-block mb-4" v-on:click="$router.go()">Sign in</button>
    
      <!-- Register buttons -->
      <div class="text-center">
        <p>Already a member? </p> <button class="btn bg-light mb-3" v-on:click="goTo()">Sign in</button>
      </div>
    </form>
    </div>
    </div>
    </template>
    <script>
    // import axios from 'axios'
    export default {
      name: 'RegisterCard',
      props: {
      },
      data (){
          return{
              user : "",
              pass : "",
              confirm_pass : ""
          }
          },
      methods: {
          goTo(){
              // this.$router.push('/'); 
              this.$router.push('/'); 
          },
          handleSubmit() {
    
            //   const formData = {
            //       email: this.user,
            //       pass: this.pass
            //   }
            // axios.post('http://localhost:3001/users', {first: this.new_first, last: this.new_pass})
    
          }
    
          
      }
    }
    </script>
    <style scoped>
    .d-inline-flex{
        position: fixed;
    }
    /* .d-flex{
        background-color: #
    } */
    .card{
        border-radius: 10px;
            background-color: #e0f4dd;
           /* background-color: #b4ebad; */
           box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
           
    }
    h3 {
        font-family: sans-serif;
        font-weight: normal;
    }
    label {
        font-family: sans-serif;
        font-weight: lighter;
    }
    button {
        font-family: sans-serif;
        font-weight: lighter;
        background-color: #a2e698;
    }
    p {
        font-family: sans-serif;
        font-weight: lighter;
    } 
    
    
    </style>