<template>
    <div class="d-flex justify-content-center p-5">
    <div class="card" style="width: 25rem;">
        <div class="container p-2">
            <h3>Login</h3>
        </div>
        <form>
      <!-- Email input -->
      <div class="form-outline p-4">
        <input type="email" id="form2Example1" class="form-control" v-model="this.user"/>
        <label class="form-label" for="form2Example1">Email address</label>
      </div>
    
      <!-- Password input -->
      <div class="form-outline mb-4 p-4">
        <input type="password" id="form2Example2" class="form-control" v-model="this.pass" />
        <label class="form-label" for="form2Example2">Password</label>
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
    
        <div class="col">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
      </div>
    
      <!-- Submit button -->
      <button type="button" class="btn btn-block mb-4" v-on:click="handleSubmit()">Sign in</button>
    
      <!-- Register buttons -->
      <div class="text-center">
        <a> Not a member?</a> <button class="btn btn-block mb-3" v-on:click="goRegister()">Register</button>
      </div>
    </form>
    </div>
    </div>
    </template>
    <script>
    // import axios from 'axios'
    export default {
      name: 'LoginCard',
      props: {
      },
      data (){
          return{
              user : "",
              pass : "",
              users : [],
              flag: false
          }
        },
        methods: {
          goRegister(){
            this.$router.push('/register')
          }
      }
    //   async created () {
    //     try {
    //       const res = await axios.get('http://localhost:3000/users')
    
    //       this.users = res.data
    //     } catch (e) {
    //         console.log
    //     }
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